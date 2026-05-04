import Match from "@/components/Match";
import type { Match as MatchType } from "@/lib/types/match";

type Props = {
  matches: MatchType[];
};

export default function MatchesList({ matches }: Props) {
  return (
    <div className="flex flex-col gap-6">
      {matches.map((match) => (
        <Match key={match.id} match={match} />
      ))}
    </div>
  );
}

