import Image from "next/image";
import Link from "next/link";
import { games } from "@/constants";

type Props = {};

export default function Games(props: Props) {
  return (
    <section id="games" className="py-8 px-8 bg-secondary ">
      <h2 className="text-[3rem] w-5/6 mx-auto text-center">GAMES</h2>
      <div className="flex justify-center items-center w-full py-6 bg-secondary">
        <div className="w-3/4 flex justify-center items-center flex-wrap gap-12 text-gray-500 dark:text-gray-400">
          {games.map((game, index) => (
            <Link
              className="flex justify-center items-center flex-wrap max-w-[24rem] hover:scale-110 transition-all duration-500 cursor-pointer bg-engines w-1/2 p-6 h-64 rounded-lg"
              href="https://www.smz-stuttgart.de/"
            >
              <Image 
                src={game.background}
                alt="Background"
                className="background"/>
              <Image
                src={game.icon}
                alt={game.name}
                className="object-cover overflow-hidden rounded-lg hover:text-gray-900 dark:hover:text-white w-[30rem] z-10"
              />
              
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
