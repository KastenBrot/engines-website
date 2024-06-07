import Image from "next/image";
import { redirect } from "next/navigation";
import { LolBackground, OWBackground } from "@/public";

export default function Game({ params }: { params: { game: string } }) {
  const data = content.find(content => content.id === params.game);

  if (!data) {
    redirect('/404')
  }

  return (
    <section className="flex flex-col h-screen lg:h-[85vh]">
      <div className="flex justify-center">
        <Image
            src={data.background}
            alt="Background"
            className="w-full h-1/3 blur-sm object-cover opacity-30" />
        <h1 className="absolute text-6xl mt-32">{data.title}</h1>
      </div>
      <div className="relative lg:w-1/3 lg:order-1 lg:pl-36 height-test">
        <p>{data.description}</p>
      </div>
    </section>
  );
}

export const content = [
  {
    id: 'lol',
    title: 'LEAGUE OF LEGENDS',
    description: 'League of Legends ist ein teambasiertes, Mehrspieler-Online-Battle-Arena-Spiel (MOBA), in dem Spieler als "Champions" in einem 5-gegen-5-Format gegeneinander antreten. Ziel ist es, die Basis des gegnerischen Teams zu zerstören, während man gleichzeitig seine eigene verteidigt. Jeder Champion hat einzigartige Fähigkeiten und Rollen, die es den Spielern ermöglichen, verschiedene Strategien zu verfolgen, um den Sieg zu erringen. Das Spiel ist bekannt für sein kompetitives Gameplay, ständige Updates und eine große internationale Spielerbasis.',
    background: LolBackground
  },
  {
    id: 'overwatch',
    title: 'Overwatch 2',
    description: 'Overwatch ist ein teambasiertes, Mehrspieler-Ego-Shooter-Spiel, in dem Spieler als Helden aus einer Vielzahl von verschiedenen Charakteren wählen können. In Teams von 6 Spielern treten sie in verschiedenen Spielmodi wie Angriff/Verteidigung, Eskorte oder Kontrolle gegeneinander an. Jeder Held hat einzigartige Fähigkeiten und Rollen, die es den Spielern ermöglichen, verschiedene Strategien zu verfolgen, um die Ziele zu erreichen. Overwatch ist bekannt für sein schnelles Gameplay, die Vielfalt der spielbaren Helden und seine Fokussierung auf Teamarbeit und Koordination.',
    background: OWBackground
  }
]
