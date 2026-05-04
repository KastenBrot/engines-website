import MatchesPageClient from "@/components/MatchesPageClient";
import { getMatches } from "@/lib/matches";
import { games } from "@/constants";

export const revalidate = 60;

export default async function MatchesPage() {
  const matches = await getMatches();
  const gameOptions = games.map((g) => ({ id: g.id, name: g.name }));

  return (
    <main className="min-h-screen bg-primary mt-12">
      <MatchesPageClient matches={matches} gameOptions={gameOptions} />
    </main>
  );
}

