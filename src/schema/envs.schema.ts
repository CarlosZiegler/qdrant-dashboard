import { z } from "zod";

export const envSchema = z.object({
  baseURL: z.string().default("http://localhost:6333"),
});

export type EnvSchema = z.infer<typeof envSchema>;
