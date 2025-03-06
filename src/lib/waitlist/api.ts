import { emailSchema } from "@/schema/waitlist-schema";
import { z } from "zod";
import API from "../axios-client";

export type AddToWaitListType = z.infer<typeof emailSchema>;

export const addToWaitListMutationFn = async (data: AddToWaitListType) =>
  API.post("/waitlist/add", data);
