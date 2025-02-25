import {
  forgotPasswordSchema,
  loginSchema,
  registerSchema,
} from "@/schema/auth-schema";
import API from "../axios-client";
import { z } from "zod";

export type LoginType = z.infer<typeof loginSchema>;

export type RegisterType = z.infer<typeof registerSchema>;

export type ForgotPasswordType = z.infer<typeof forgotPasswordSchema>;

export const loginMutationFn = async (data: LoginType) =>
  await API.post("/auth/login", data);

export const registerMutationFn = async (data: RegisterType) =>
  await API.post("/auth/register", data);
