import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { deleteMatch, getMatches, upsertMatch } from "@/lib/matches";
import { GameIdSchema, MatchSchema } from "@/app/api/matches/schema";

function isAuthorized(req: Request) {
  const secret = process.env.MATCHES_WRITE_SECRET;
  if (!secret) return false;
  const auth = req.headers.get("authorization") ?? "";
  return auth === `Bearer ${secret}`;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const gameParam = searchParams.get("game");
  const game = gameParam ? GameIdSchema.safeParse(gameParam) : null;
  const limitParam = searchParams.get("limit");
  const limit =
    limitParam && /^\d+$/.test(limitParam) ? Number(limitParam) : undefined;

  const matches = await getMatches({
    game: game?.success ? game.data : undefined,
    limit,
  });

  return NextResponse.json({ matches }, { status: 200 });
}

export async function POST(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const json = await req.json().catch(() => null);
  const parsed = MatchSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  await upsertMatch(parsed.data);

  // Near-instant visibility (plus ISR fallback).
  revalidatePath("/");
  revalidatePath("/matches");

  return NextResponse.json({ ok: true }, { status: 200 });
}

const BulkDeleteSchema = z.object({
  id: z.string().min(1),
});

export async function DELETE(req: Request) {
  if (!isAuthorized(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const json = await req.json().catch(() => null);
  const parsed = BulkDeleteSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid payload", details: parsed.error.flatten() },
      { status: 400 }
    );
  }

  await deleteMatch(parsed.data.id);

  revalidatePath("/");
  revalidatePath("/matches");

  return NextResponse.json({ ok: true }, { status: 200 });
}

