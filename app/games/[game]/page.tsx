import Image from "next/image";
import { redirect } from "next/navigation";
import { Discord, LolBackground, LolScreenshot, OWBackground, OWScreenshot } from "@/public";

export default function Game({ params }: { params: { game: string } }) {
  const data = content.find(content => content.id === params.game);

  if (!data) {
    redirect('/404')
  }

  return (
    <section className="flex flex-col h-screen lg:h-[85vh]">
      <div className="flex justify-center h-1/3">
        <Image
            src={data.background}
            alt={data.backgroundAlt}
            className="w-full blur-sm object-cover opacity-30" />
        <h1 className="absolute text-6xl mt-32">{data.title}</h1>
      </div>
      <div className="lg:order-1 lg:pl-36 flex justify-center p-8 lg:px-32 ">
        <div className="flex flex-col lg:flex-row gap-8 ">
          <div className="w-1/2">
            <div>
              <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-engines">{data.title}</h1>
              <p>{data.description}</p>
            </div>
            <div className="py-8">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-engines">Ansprechpartner:</h2>

              <div className="flex flex-row gap-5 place-items-center">
                <p>{data.responsible.name}</p>
                <a 
                  className="btn-secondary"
                  href={`https://discordapp.com/users/${data.responsible.discordId}`}>
                  <div className="flex flex-row">
                    <Image
                      src={Discord}
                      alt="Discord Icon"
                      className="w-5 mr-2"
                    ></Image>
                    {data.responsible.discordHandle}
                  </div>
                </a>
              </div>
            </div>
          </div>
          <Image
            src={data.screenshot}
            alt={data.screenshotAlt}
            className="w-1/2"
          ></Image>
        </div>
      </div>
    </section>
  );
}

const content = [
  {
    id: 'lol',
    title: 'LEAGUE OF LEGENDS',
    description: 'League of Legends ist ein teambasiertes, Mehrspieler-Online-Battle-Arena-Spiel (MOBA), in dem Spieler als "Champions" in einem 5-gegen-5-Format gegeneinander antreten. Ziel ist es, die Basis des gegnerischen Teams zu zerstören, während man gleichzeitig seine eigene verteidigt. Jeder Champion hat einzigartige Fähigkeiten und Rollen, die es den Spielern ermöglichen, verschiedene Strategien zu verfolgen, um den Sieg zu erringen. Das Spiel ist bekannt für sein kompetitives Gameplay, ständige Updates und eine große internationale Spielerbasis.',
    background: LolBackground,
    backgroundAlt: 'Character posing in a city',
    screenshot: LolScreenshot,
    screenshotAlt: 'Character pushing a lane with his minions',
    responsible: {
      name: 'Jonathan "Jads"',
      discordHandle: 'jadsgg',
      discordId: '184757859383377921', 
    },
  },
  {
    id: 'overwatch',
    title: 'Overwatch 2',
    description: 'Overwatch ist ein teambasiertes, Mehrspieler-Ego-Shooter-Spiel, in dem Spieler als Helden aus einer Vielzahl von verschiedenen Charakteren wählen können. In Teams von 6 Spielern treten sie in verschiedenen Spielmodi wie Angriff/Verteidigung, Eskorte oder Kontrolle gegeneinander an. Jeder Held hat einzigartige Fähigkeiten und Rollen, die es den Spielern ermöglichen, verschiedene Strategien zu verfolgen, um die Ziele zu erreichen. Overwatch ist bekannt für sein schnelles Gameplay, die Vielfalt der spielbaren Helden und seine Fokussierung auf Teamarbeit und Koordination.',
    background: OWBackground,
    backgroundAlt: 'The overwatch team posing',
    screenshot: OWScreenshot,
    screenshotAlt: 'Reinhard having his shield up and Lucio behind healing him',
    responsible: {
      name: 'Marvin "Haikun"',
      discordHandle: 'haikun',
      discordId: '100644104613949440',
    },
  }
]
