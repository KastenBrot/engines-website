import Image from "next/image";
import Link from "next/link";
import { games } from "@/constants";
import type { Match as MatchType } from "@/lib/types/match";

type MatchProps = {
  match: MatchType;
};

const Match: React.FC<MatchProps> = ({ match }) => {
  const game = games.find((g) => g.id === match.game);
  const logo = game?.icon;
  const dateLabel = new Date(match.date).toLocaleDateString("de-DE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <div className="flex justify-between items-center py-1 bg-primary w-full">
      <div className="py-4 lg:py-6 mx-auto max-w-screen-xl px-4 w-full">
        <div className="bg-secondary  grid grid-cols-2 rounded-t p-3">
          <Link href="" className="flex-row rounded-lg whitespace-nowrap">
            {match.tournament}
          </Link>
          <Link href="" className="justify-self-end flex gap-3">
            <span className="text-gray-300">{dateLabel}</span>
            <span>{match.format}</span>
          </Link>
        </div>
        <div className="bg-tertiary grid grid-cols-3 rounded-b p-3 items-center">
          {logo ? (
            <Image
              src={logo}
              className="w-[3rem] justify-center row-span-2 m-5"
              alt={`${game?.name ?? "Game"} Logo`}
            />
          ) : (
            <div className="w-[3rem] row-span-2 m-5" />
          )}

          <Link href="" className="justify-self-start whitespace-nowrap">
            {match.team1.name}
          </Link>
          <Link href="" className="justify-self-end px-9 text-primaryGreen">
            {match.team1.score}
          </Link>

          <Link href="" className="flex flex-start whitespace-nowrap">
            {match.team2.name}
          </Link>
          <Link href="" className="justify-self-end px-9 text-secondaryGreen">
            {match.team2.score}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Match;
