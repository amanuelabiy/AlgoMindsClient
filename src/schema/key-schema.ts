import { z } from "zod";

export const betaKeySchema = z.object({
  key: z.string().nonempty("Beta key is required."),
});
