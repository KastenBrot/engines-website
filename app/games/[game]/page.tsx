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
    <main className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] lg:h-[70vh] overflow-hidden">
        <Image
          src={data.background}
          alt={data.backgroundAlt}
          className="absolute inset-0 w-full h-full object-cover"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-transparent to-transparent"></div>
        
        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-start px-8 lg:px-16">
          <div className="max-w-2xl">
            <h1 className="text-6xl lg:text-7xl font-anek font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryGreen via-primaryGreen to-secondaryGreen">
                {data.title}
              </span>
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primaryGreen to-secondaryGreen rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative z-10 px-8 lg:px-16 py-16 lg:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Description and Contact */}
          <div className="space-y-8">
            {/* Description Card */}
            <div className="bg-gradient-to-br from-secondary to-tertiary rounded-xl p-8 border border-lightgray hover:border-primaryGreen transition-all duration-300 shadow-lg">
              <h2 className="text-3xl lg:text-4xl font-anek font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primaryGreen to-secondaryGreen">
                Über das Spiel
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">{data.description}</p>
            </div>

            {/* Contact Card */}
            <div className="bg-gradient-to-br from-fillerGray2 to-tertiary rounded-xl p-8 border border-lightgray hover:border-primaryGreen transition-all duration-300 shadow-lg">
              <h3 className="text-2xl font-anek font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primaryGreen to-secondaryGreen">
                Ansprechpartner
              </h3>
              
              <div className="flex flex-col space-y-4">
                <div>
                  <p className="text-gray-400 text-sm uppercase tracking-wide mb-1">
                    Verantwortlich
                  </p>
                  <p className="text-xl font-bold text-white">{data.responsible.name}</p>
                </div>

                <a
                  href={`https://discordapp.com/users/${data.responsible.discordId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 mt-4 px-6 py-3 bg-gradient-to-r from-discordBlue to-blue-600 hover:from-blue-600 hover:to-discordBlue rounded-lg font-bold text-white transition-all duration-300 transform hover:scale-105 w-fit"
                >
                  <Discord />
                  <span>{data.responsible.discordHandle}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Screenshot */}
          <div className="relative h-full">
            <div className="relative rounded-xl overflow-hidden border-2 border-primaryGreen shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-primaryGreen to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10"></div>
              <Image
                src={data.screenshot}
                alt={data.screenshotAlt}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primaryGreen rounded-full opacity-20 blur-3xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondaryGreen rounded-full opacity-20 blur-3xl -z-10"></div>
          </div>
        </div>

        {/* Additional Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gradient-to-br from-secondary to-tertiary rounded-lg p-6 border border-lightgray hover:border-primaryGreen transition-all duration-300 text-center group">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primaryGreen to-secondaryGreen mb-2 group-hover:scale-110 transition-transform duration-300">
              5v5
            </div>
            <p className="text-gray-400">Teambasiert</p>
          </div>

          <div className="bg-gradient-to-br from-secondary to-tertiary rounded-lg p-6 border border-lightgray hover:border-primaryGreen transition-all duration-300 text-center group">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primaryGreen to-secondaryGreen mb-2 group-hover:scale-110 transition-transform duration-300">
              ∞
            </div>
            <p className="text-gray-400">Unbegrenzte Möglichkeiten</p>
          </div>

          <div className="bg-gradient-to-br from-secondary to-tertiary rounded-lg p-6 border border-lightgray hover:border-primaryGreen transition-all duration-300 text-center group">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primaryGreen to-secondaryGreen mb-2 group-hover:scale-110 transition-transform duration-300">
              ⚡
            </div>
            <p className="text-gray-400">Kompetitiv</p>
          </div>
        </div>
      </section>
    </main>
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
      name: 'Chris "CCX1307"',
      discordHandle: "coolchrisx1307",
      discordId: "1319432822460780605",
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
      name: 'Akhi "Akhi"',
      discordHandle: "shadicti",
      discordId: "965636299509882980",
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
      name: 'Oskar "Cypher"',
      discordHandle: "cyhper3102",
      discordId: "260422097506009098",
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
