import {
  forgotPasswordSchema,
  loginSchema,
  registerSchema,
  resetPasswordSchema,
  verificationEmailSchema,
} from "@/schema/auth-schema";
import API from "../axios-client";
import { z } from "zod";

export type LoginType = z.infer<typeof loginSchema>;

export type RegisterType = z.infer<typeof registerSchema>;

export type ForgotPasswordType = z.infer<typeof forgotPasswordSchema>;

export type ResetPasswordType = z.infer<typeof resetPasswordSchema>;

export type VerifyEmailType = z.infer<typeof verificationEmailSchema>;

export const loginMutationFn = async (data: LoginType) =>
  await API.post("/auth/login", data);

export const registerMutationFn = async (data: RegisterType) =>
  await API.post("/auth/register", data);

export const verifyEmailMutationFn = async (data: VerifyEmailType) =>
  await API.post("/auth/verify/email", data);

export const forgotPasswordMutationFn = async (data: ForgotPasswordType) =>
  await API.post("/auth/password/forgot", data);

export const resetPasswordMutationFn = async (data: ResetPasswordType) =>
  await API.post("/auth/password/reset", data);
