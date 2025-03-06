import { z } from "zod";

export const emailSchema = z.object({
  email: z.string().trim().min(1, "Email is required").email().max(255),
});
