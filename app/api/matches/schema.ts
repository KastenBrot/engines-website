import { z } from "zod";

export const GameIdSchema = z.enum([
  "lol",
  "overwatch",
  "rocketleague",
  "valorant",
  "cs2",
  "f1",
  "rainbow",
  "assetto",
  "sf6",
]);

export const MatchSchema = z.object({
  id: z.string().min(1),
  game: GameIdSchema,
  tournament: z.string().min(1),
  format: z.string().min(1),
  date: z.string().min(1),
  team1: z.object({
    name: z.string().min(1),
    score: z.number().int().nonnegative(),
  }),
  team2: z.object({
    name: z.string().min(1),
    score: z.number().int().nonnegative(),
  }),
  vodUrl: z.string().url().optional(),
});

