import { z } from "zod";

export function parseEnv(env: NodeJS.ProcessEnv) {
  const envSchema = z.object({
    DATABASE_URL: z.string(),
    PORT: z.coerce.number().default(3333),
    HOST: z.string().default("0.0.0.0"),
  });

  const parsedEnv = envSchema.safeParse(env);

  if (!parsedEnv.success) {
    console.error(
      "Invalid environment variables ",
      parsedEnv.error.flatten().fieldErrors
    );

    throw new Error("Invalid environment variables.");
  }

  return parsedEnv.data;
}