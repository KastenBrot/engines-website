export type GameId =
  | "lol"
  | "overwatch"
  | "rocketleague"
  | "valorant"
  | "cs2"
  | "f1"
  | "rainbow"
  | "assetto"
  | "sf6";

export type Match = {
  id: string;
  game: GameId;
  tournament: string;
  format: string;
  date: string; // ISO 8601
  team1: { name: string; score: number };
  team2: { name: string; score: number };
  vodUrl?: string;
};

