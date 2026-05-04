import Link from "next/link";
import MatchesList from "@/components/MatchesList";
import { getMatches } from "@/lib/matches";

export default async function LatestMatches() {
  const matches = await getMatches({ limit: 4 });

  return (
    <section className="w-full bg-primary shadow-[0_20px_50px_rgba(26,_27,_26,_1)]">
      <div className="w-5/6 mx-auto py-10">
      <h1 className="text-lg md:text-4xl font-bold justify-center items-center">
          Match History
        </h1>
        {matches.length > 0 ? (
          <MatchesList matches={matches} />
        ) : (
          <div className="text-center text-gray-300">
            Noch keine Matches eingetragen.
          </div>
        )}

        <div className="pt-10 flex">
          <div className="h-30">
            <Link
              href="/matches"
              className="hover:underline transition"
            >
              → Alle Matches
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

