import { getRedis } from "@/lib/redis";
import type { GameId, Match } from "@/lib/types/match";

const MATCHES_HASH_KEY = "matches";
const MATCHES_BY_DATE_ZSET_KEY = "matches:by_date";

function safeParseMatch(value: string): Match | null {
  try {
    return JSON.parse(value) as Match;
  } catch {
    return null;
  }
}

export async function getMatches(options?: {
  game?: GameId;
  limit?: number;
}): Promise<Match[]> {
  const redis = await getRedis().catch(() => null);
  if (!redis) return [];

  const limit = options?.limit;
  const ids =
    typeof limit === "number" && limit > 0
      ? await redis.zRange(MATCHES_BY_DATE_ZSET_KEY, 0, limit - 1, { REV: true })
      : await redis.zRange(MATCHES_BY_DATE_ZSET_KEY, 0, -1, { REV: true });

  if (ids.length === 0) return [];

  const values = await redis.hmGet(MATCHES_HASH_KEY, ids);
  const parsed = values
    .map((v) => (typeof v === "string" ? safeParseMatch(v) : null))
    .filter((m): m is Match => Boolean(m));

  const game = options?.game;
  if (!game) return parsed;
  return parsed.filter((m) => m.game === game);
}

export async function upsertMatch(match: Match): Promise<void> {
  const redis = await getRedis();

  const epochMs = Date.parse(match.date);
  if (!Number.isFinite(epochMs)) {
    throw new Error("Invalid match.date (must be ISO 8601).");
  }

  await Promise.all([
    redis.hSet(MATCHES_HASH_KEY, match.id, JSON.stringify(match)),
    redis.zAdd(MATCHES_BY_DATE_ZSET_KEY, [{ score: epochMs, value: match.id }]),
  ]);
}

export async function deleteMatch(id: string): Promise<void> {
  const redis = await getRedis();
  await Promise.all([
    redis.hDel(MATCHES_HASH_KEY, id),
    redis.zRem(MATCHES_BY_DATE_ZSET_KEY, id),
  ]);
}

