import { z } from "zod";
import API from "../axios-client";
import { betaKeySchema } from "@/schema/key-schema";

export type JoinBetaType = z.infer<typeof betaKeySchema>;

export const joinBetaMutationFn = async (data: JoinBetaType) =>
  await API.post("/keys/beta/join", data);
