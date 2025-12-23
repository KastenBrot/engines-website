import Image from "next/image";
import Link from "next/link";
import { games } from "@/constants";

type Props = {};

export default function Games(props: Props) {
  return (
    <section id="games" className="py-16 px-8 bg-gradient-to-b from-secondary to-tertiary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-anek font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGreen via-primaryGreen to-secondaryGreen">
              OUR GAMES
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Erkunde unsere kompetitiven Gaming-Communities und triff dich mit Spielern deiner Lieblingsspiele
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {games.map((game, index) => (
            <Link
              key={game.id}
              href={game.link}
              className="group relative overflow-hidden rounded-xl transition-all duration-300 hover:scale-105"
            >
              {/* Background Image */}
              <div className="relative h-80 w-full overflow-hidden">
                <Image
                  src={game.background}
                  alt={game.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary group-hover:bg-gradient-to-b group-hover:from-black/40 group-hover:via-black/20 group-hover:to-primary transition-all duration-300"></div>
                
                {/* Green Highlight on Hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primaryGreen to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>

              {/* Icon and Text Container */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                <div className="relative w-32 h-32 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={game.icon}
                    alt={game.name}
                    width={128}
                    height={128}
                    className="object-contain drop-shadow-lg"
                  />
                </div>
                
                {/* Game Name */}
                <h3 className="text-xl lg:text-2xl font-anek font-bold text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  {game.name}
                </h3>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primaryGreen transition-colors duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
