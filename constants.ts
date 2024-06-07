import {
  Instagram,
  Twitter,
  Discord,
  Twitch,

  HAM,
  INNOTEC,
  CSStuttgart,
  BARMER,
  SMZ,

  RainbowSixSiege,
  CounterStrike2,
  F123,
  RocketLeague,
  LeagueOfLegends,
  Overwatch,
  Valorant,
  AssettoCorsa,

  LolBackground,
  OWBackground,
  RLBackground,
  ValorantBackground,
  CS2Background,
  F1Background,
  RainbowBackground,
  AssettoBackground,
} from "@/public";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "games",
    title: "Games",
  } /*
  {
    id: "news",
    title: "News",
  },*/,
  {
    id: "verein",
    title: "Verein",
  } /*
  {
    id: "contact",
    title: "Kontakt",
  },*/,
];

export const description =
  "Der Engines Stuttgart e.V. ist der erste E-Sport-Verein in der Metropolregion Stuttgart. Seit Anfang 2018 machen wir es uns zur Aufgabe kompetitives Videospielen lokal zu fördern um Breiten(e)sport Strukturen aufzubauen und somit den E-Sport Standort Deutschland zu stärken.";

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/engines_stuttgart/",
  },
  {
    id: "social-media-2",
    name: "Twitter",
    icon: Twitter,
    link: "https://twitter.com/engines_stgt",
  },
  {
    id: "social-media-3",
    name: "Discord",
    icon: Discord,
    link: "https://discord.gg/ngns",
  },
  {
    id: "social-media-4",
    name: "Twitch",
    icon: Twitch,
    link: "https://www.twitch.tv/engines_stuttgart",
  },
];

export const partners = [
  {
    id: "partner-1",
    name: "SMZ Stuttgart",
    icon: SMZ,
    link: "https://www.smz-stuttgart.de/",
  },
  {
    id: "partner-2",
    name: "Computerspielschule Stuttgart",
    icon: CSStuttgart,
    link: "https://computerspielschule-stuttgart.de/",
  },
  {
    id: "partner-3",
    name: "Barmer",
    icon: BARMER,
    link: "https://www.barmer.de/",
  },
  {
    id: "partner-4",
    name: "Inno-Tec",
    icon: INNOTEC,
    link: "https://in-technology.eu/",
  },
  {
    id: "partner-5",
    name: "HS für angewandtes Management",
    icon: HAM,
    link: "https://www.fham.de/hochschule/",
  },
];

export const games = [
  {
    id: "lol",
    name: "League of Legends",
    icon: LeagueOfLegends,
    link: "games/lol",
    background: LolBackground
  },
  {
    id: "overwatch",
    name: "Overwatch",
    icon: Overwatch,
    link: "/games/overwatch",
    background: OWBackground
  },
  {
    id: "rocketleague",
    name: "Rocket League",
    icon: RocketLeague,
    link: "/games/rocketleague",
    background: RLBackground
  },
  {
    id: "valorant",
    name: "Valorant",
    icon: Valorant,
    link: "/games/valorant",
    background: ValorantBackground
  },
  {
    id: "cs2",
    name: "CS2",
    icon: CounterStrike2,
    link: "/games/cs2",
    background: CS2Background
  },
  {
    id: "f123",
    name: "F1 2023",
    icon: F123,
    link: "/games/f1",
    background: F1Background
  },
  {
    id: "rainbowsix",
    name: "Rainbow Six Siege",
    icon: RainbowSixSiege,
    link: "/games/rainbow",
    background: RainbowBackground
  },
  {
    id: "assettocorsa",
    name: "Assetto Corsa",
    icon: AssettoCorsa,
    link: "/games/assetto",
    background: AssettoBackground
  },
];
