import { createClient, type RedisClientType } from "redis";

let client: RedisClientType | null = null;

export async function getRedis(): Promise<RedisClientType> {
  if (client?.isOpen) return client;

  const url = process.env.REDIS_URL;
  if (!url) {
    throw new Error("Missing REDIS_URL environment variable.");
  }

  client = createClient({ url });
  client.on("error", (err) => {
    // Avoid throwing from the error handler; node-redis will reconnect.
    console.error("redis error", err);
  });

  await client.connect();
  return client;
}

