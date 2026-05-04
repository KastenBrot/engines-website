import Link from "next/link";
import MatchesList from "@/components/MatchesList";
import { getMatches } from "@/lib/matches";

export default async function LatestMatches() {
  const matches = await getMatches({ limit: 4 });

  return (
    <section className="w-full bg-primary shadow-[0_20px_50px_rgba(26,_27,_26,_1)]">
      <div className="w-5/6 mx-auto py-10">
        <div className="text-[3rem] flex justify-center items-center align-top mb-8">
          Match Historie
        </div>

        {matches.length > 0 ? (
          <MatchesList matches={matches} />
        ) : (
          <div className="text-center text-gray-300">
            Noch keine Matches eingetragen.
          </div>
        )}

        <div className="pt-10 flex justify-center items-center">
          <div className="h-30 text-[2.5rem]">
            <Link
              href="/matches"
              className="rounded cursor-pointer transition ease-in-out duration-300 uppercase drop-shadow-2xl px-6 py-3 bg-tertiary hover:bg-secondary inline-block"
            >
              Alle Matches
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

