"use client";

import { useMemo, useState } from "react";
import MatchesList from "@/components/MatchesList";
import type { Match } from "@/lib/types/match";

type GameOption = { id: string; name: string };

type Props = {
  matches: Match[];
  gameOptions: GameOption[];
};

export default function MatchesPageClient({ matches, gameOptions }: Props) {
  const [selectedGame, setSelectedGame] = useState<string>("all");

  const filtered = useMemo(() => {
    if (selectedGame === "all") return matches;
    return matches.filter((m) => m.game === selectedGame);
  }, [matches, selectedGame]);

  return (
    <section className="w-full bg-primary">
      <div className="w-5/6 mx-auto py-14">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <h1 className="text-[3rem]">Matches</h1>

          <div className="flex items-center gap-3">
            <label htmlFor="gameFilter" className="text-gray-300">
              Spiel
            </label>
            <select
              id="gameFilter"
              value={selectedGame}
              onChange={(e) => setSelectedGame(e.target.value)}
              className="bg-tertiary border border-lightgray rounded px-3 py-2 text-white"
            >
              <option value="all">Alle</option>
              {gameOptions.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {filtered.length > 0 ? (
          <MatchesList matches={filtered} />
        ) : (
          <div className="text-center text-gray-300">
            Keine Matches für diesen Filter.
          </div>
        )}
      </div>
    </section>
  );
}

