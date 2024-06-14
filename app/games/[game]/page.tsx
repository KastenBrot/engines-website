import Image from "next/image";
import { redirect } from "next/navigation";
import {
  AssettoBackground,
  AssettoScreenshot,
  CS2Background,
  CS2Screenshot,
  F1Background,
  F1Screenshot,
  LolBackground,
  LolScreenshot,
  OWBackground,
  OWScreenshot,
  RLBackground,
  RLScreenshot,
  RainbowBackground,
  RainbowScreenshot,
  ValorantBackground,
  ValorantScreenshot,
} from "@/public";
import { Discord } from "@/components/SVGs/Socials";

export default function Game({ params }: { params: { game: string } }) {
  const data = content.find((content) => content.id === params.game);

  if (!data) {
    redirect("/404");
  }

  return (
    <section className="flex flex-col h-screen lg:h-[85vh]">
      <div className="flex justify-center h-1/3">
        <Image
          src={data.background}
          alt={data.backgroundAlt}
          className="w-full blur-sm object-cover opacity-30"
        />
        <h1 className="absolute text-6xl mt-32">{data.title}</h1>
      </div>
      <div className="lg:order-1 lg:pl-36 flex justify-center p-8 lg:px-32 ">
        <div className="flex flex-col lg:flex-row gap-8 ">
          <div className="w-1/2">
            <div>
              <h1 className="text-4xl text-transparent bg-clip-text bg-gradient-to-r from-engines">
                {data.title}
              </h1>
              <p>{data.description}</p>
            </div>
            <div className="py-8">
              <h2 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-engines">
                Ansprechpartner:
              </h2>

              <div className="flex flex-row gap-5 place-items-center">
                <p>{data.responsible.name}</p>
                <a
                  className="btn-discord"
                  href={`https://discordapp.com/users/${data.responsible.discordId}`}
                >
                  <div className="flex flex-row">
                    {/*<Image
                      src={Discord}
                      alt="Discord Icon"
                      className="w-5 mr-2"
                    ></Image> */}
                    <Discord />
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
    id: "lol",
    title: "LEAGUE OF LEGENDS",
    description:
      'League of Legends ist ein teambasiertes, Mehrspieler-Online-Battle-Arena-Spiel (MOBA), in dem Spieler als "Champions" in einem 5-gegen-5-Format gegeneinander antreten. Ziel ist es, die Basis des gegnerischen Teams zu zerstören, während man gleichzeitig seine eigene verteidigt. Jeder Champion hat einzigartige Fähigkeiten und Rollen, die es den Spielern ermöglichen, verschiedene Strategien zu verfolgen, um den Sieg zu erringen. Das Spiel ist bekannt für sein kompetitives Gameplay, ständige Updates und eine große internationale Spielerbasis.',
    background: LolBackground,
    backgroundAlt: "Character posing in a city",
    screenshot: LolScreenshot,
    screenshotAlt: "Character pushing a lane with his minions",
    responsible: {
      name: 'Jonathan "Jads"',
      discordHandle: "jadsgg",
      discordId: "184757859383377921",
    },
  },
  {
    id: "overwatch",
    title: "Overwatch 2",
    description:
      "Overwatch ist ein teambasiertes, Mehrspieler-Ego-Shooter-Spiel, in dem Spieler als Helden aus einer Vielzahl von verschiedenen Charakteren wählen können. In Teams von 6 Spielern treten sie in verschiedenen Spielmodi wie Angriff/Verteidigung, Eskorte oder Kontrolle gegeneinander an. Jeder Held hat einzigartige Fähigkeiten und Rollen, die es den Spielern ermöglichen, verschiedene Strategien zu verfolgen, um die Ziele zu erreichen. Overwatch ist bekannt für sein schnelles Gameplay, die Vielfalt der spielbaren Helden und seine Fokussierung auf Teamarbeit und Koordination.",
    background: OWBackground,
    backgroundAlt: "The overwatch team posing",
    screenshot: OWScreenshot,
    screenshotAlt: "Reinhard having his shield up and Lucio behind healing him",
    responsible: {
      name: 'Marvin "Haikun"',
      discordHandle: "haikun",
      discordId: "100644104613949440",
    },
  },
  {
    id: "rocketleague",
    title: "ROCKET LEAUGE",
    description:
      '"Rocket League" ist ein rasantes Spiel, das Fußball mit Rennspiel-Elementen kombiniert. Spieler steuern raketenbetriebene Autos und versuchen, einen riesigen Ball ins gegnerische Tor zu schießen. Zwei Teams mit bis zu vier Spielern treten in einer Arena gegeneinander an, nutzen Boosts für Geschwindigkeit und führen akrobatische Manöver aus. Ziel ist es, mehr Tore als das gegnerische Team zu erzielen. Das Spiel erfordert Geschick, Strategie und bietet durch verschiedene Modi und Fahrzeuganpassungen hohen Wiederspielwert.',
    background: RLBackground,
    backgroundAlt: "A rocket car jumping and shooting a ball",
    screenshot: RLScreenshot,
    screenshotAlt: "Two rocket cars shooting a ball in a goal",
    responsible: {
      name: 'Marvin "Haikun"',
      discordHandle: "haikun",
      discordId: "100644104613949440",
    },
  },
  {
    id: "valorant",
    title: "VALORANT",
    description:
      '"Valorant" ist ein taktischer Ego-Shooter, bei dem zwei Teams mit je fünf Spielern gegeneinander antreten. Ein Team übernimmt die Rolle der Angreifer, die eine Bombe ("Spike") auf einem der festgelegten Plätze platzieren und verteidigen müssen, während das andere Team als Verteidiger versucht, dies zu verhindern oder die Bombe zu entschärfen. Jeder Spieler wählt einen Agenten mit einzigartigen Fähigkeiten, die strategisch eingesetzt werden, um das Team zum Sieg zu führen. Das Spiel erfordert präzises Zielen, Teamarbeit und taktisches Vorgehen, wobei Runden gewonnen werden, indem entweder alle Gegner eliminiert oder die Missionsziele erfüllt werden.',
    background: ValorantBackground,
    backgroundAlt: "Valorant logo and a woman with a gun in front",
    screenshot: ValorantScreenshot,
    screenshotAlt: "A fight scene in valorant, two people shooting a third one",
    responsible: {
      name: 'Marvin "Haikun"',
      discordHandle: "haikun",
      discordId: "100644104613949440",
    },
  },
  {
    id: "cs2",
    title: "COUNTER STRIKE 2",
    description:
      '"Counter-Strike 2" ist ein taktischer Ego-Shooter, in dem zwei Teams gegeneinander antreten: Terroristen und Antiterroristen. Die Terroristen versuchen, eine Bombe an einem der festgelegten Orte zu platzieren und zu verteidigen, während die Antiterroristen versuchen, dies zu verhindern oder die Bombe zu entschärfen. Alternativ können die Antiterroristen gewinnen, indem sie eine Geisel retten. Jeder Spieler kauft zu Beginn einer Runde Waffen und Ausrüstung, um das Team zu unterstützen. Das Spiel erfordert präzises Zielen, schnelle Reflexe und strategische Teamarbeit. Runden werden gewonnen, indem man entweder alle Gegner eliminiert oder die Missionsziele erfüllt.',
    background: CS2Background,
    backgroundAlt: "CounterStrike2 logo",
    screenshot: CS2Screenshot,
    screenshotAlt: "Ego perspective of a player shooting in a smoke grenade",
    responsible: {
      name: 'Marvin "Haikun"',
      discordHandle: "haikun",
      discordId: "100644104613949440",
    },
  },
  {
    id: "f1",
    title: "F1 2023",
    description:
      '"F1 2023" ist ein realistisches Rennspiel, das die Formel-1-Weltmeisterschaft simuliert. Spieler können als ihre Lieblings-F1-Fahrer antreten und mit originalgetreuen Autos und Strecken fahren. Ziel ist es, Rennen zu gewinnen und schließlich die Meisterschaft zu erringen. Das Spiel bietet verschiedene Modi, darunter eine Karriere, in der man ein eigenes Team aufbaut und verwaltet, sowie Online-Rennen gegen andere Spieler. Es erfordert präzises Fahren, strategisches Denken und Anpassung an unterschiedliche Wetter- und Streckenbedingungen.',
    background: F1Background,
    backgroundAlt: "F1 cars overtakign another",
    screenshot: F1Screenshot,
    screenshotAlt: "F1 cars overtakign another",
    responsible: {
      name: 'Marvin "Haikun"',
      discordHandle: "haikun",
      discordId: "100644104613949440",
    },
  },
  {
    id: "rainbow",
    title: "RAINBOW SIX SIEGE",
    description:
      '"Rainbow Six Siege" ist ein taktischer Ego-Shooter, in dem zwei Teams gegeneinander antreten: Angreifer und Verteidiger. Die Angreifer müssen Geiseln retten, Bomben entschärfen oder Räume sichern, während die Verteidiger versuchen, diese Ziele zu verhindern. Jeder Spieler wählt einen Operator mit einzigartigen Fähigkeiten und Ausrüstungen. Das Spiel erfordert präzises Zielen, strategische Planung und Teamarbeit. Spieler können die Umgebung zerstören, um neue Wege zu schaffen oder Gegner zu überraschen. Runden werden gewonnen, indem die Missionsziele erfüllt oder alle Gegner eliminiert werden.',
    background: RainbowBackground,
    backgroundAlt: "Two teams of operators facing each other",
    screenshot: RainbowScreenshot,
    screenshotAlt:
      "A fight scene, where an attacker is in the top floor, shooting two defenders below",
    responsible: {
      name: 'Marvin "Haikun"',
      discordHandle: "haikun",
      discordId: "100644104613949440",
    },
  },
  {
    id: "assetto",
    title: "ASSETTO CORSA",
    description:
      '"Assetto Corsa" ist ein realistisches Rennspiel, das sich auf authentisches Fahrverhalten und präzise Simulation konzentriert. Spieler können eine Vielzahl von Autos auf originalgetreuen Rennstrecken fahren. Das Spiel bietet verschiedene Modi, darunter Einzelrennen, Karrieremodus und Online-Wettbewerbe gegen andere Spieler. Es erfordert präzises Fahren, gute Fahrzeugbeherrschung und Anpassung an verschiedene Streckenbedingungen. "Assetto Corsa" ist bekannt für seine detaillierte Physik-Engine und umfangreiche Anpassungsmöglichkeiten für Fahrzeuge.',
    background: AssettoBackground,
    backgroundAlt: "Two cars racing eachother",
    screenshot: AssettoScreenshot,
    screenshotAlt: "A drivers view of a racetrack",
    responsible: {
      name: 'Marvin "Haikun"',
      discordHandle: "haikun",
      discordId: "100644104613949440",
    },
  },
];
