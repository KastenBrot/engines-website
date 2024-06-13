import Image from "next/image";
import Link from "next/link";
import { Valorant } from "@/public";

//TODO: LOGO auch dynamisch ändern

interface MatchProps {
  score?: {
    team1: string;
    score1: string;
    team2: string;
    score2: string;
  };
  format?: string;
  tournament?: string;
}

const Match: React.FC<MatchProps> = ({ score, format, tournament }) => {
  return (
    <div className="flex justify-between items-center  py-1 bg-primary">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4 w-auto min-w-[26rem]">
        <div className="bg-secondary  grid grid-cols-2 rounded-t p-3">
          <Link href="" className="flex-row rounded-lg whitespace-nowrap">
            {tournament}
          </Link>
          <Link href="" className="justify-self-end">
            {format}
          </Link>
        </div>
        <div className="bg-tertiary grid grid-cols-3 rounded-b p-3 items-center">
          <Image
            src={Valorant}
            className="w-[3rem] justify-center row-span-2 m-5"
            alt="Logo"
          />

          <Link href="" className="justify-self-start whitespace-nowrap">
            {score?.team1}
          </Link>
          <Link href="" className="justify-self-end px-9 text-primaryGreen">
            {score?.score1}
          </Link>

          <Link href="" className="flex flex-start whitespace-nowrap">
            {score?.team2}
          </Link>
          <Link href="" className="justify-self-end px-9 text-secondaryGreen">
            {score?.score2}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Match;
