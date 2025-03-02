import { z } from "zod";

export const emailSchema = z
  .string()
  .trim()
  .min(1, "Email is required")
  .email()
  .max(255);
export const passwordSchema = z
  .string()
  .trim()
  .min(6, "Password must contain at least 6 character(s)")
  .max(255);
export const confirmPasswordSchema = z
  .string()
  .trim()
  .min(6, "Confirm Password must contain at least 6 character(s)")
  .max(255);
export const verificationCodeSchema = z
  .string()
  .uuid("Invalid Verification Code");
export const verificationCodeSchemaForEmail = z
  .string()
  .min(1, "Confirmation token not found")
  .uuid("Invalid Verification Token");
export const passwordResetVerificationCode = z
  .string()
  .length(6, "Verification Code must be 6 character(s) long");

export const passwordSchemaForLogin = z
  .string()
  .trim()
  .min(6, "Password is required")
  .max(255);

export const registerSchema = z
  .object({
    firstName: z.string().trim().min(1, "First name is required").max(255),
    lastName: z.string().trim().min(1, "Last name is required ").max(255),
    username: z.string().trim().min(1, "Username is required").max(255),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: confirmPasswordSchema,
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchemaForLogin,
  userAgent: z.string().optional(),
});

export const verificationEmailSchema = z.object({
  code: verificationCodeSchemaForEmail,
});

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});

export const resetPasswordSchema = z.object({
  password: passwordSchema,
  verificationCode: passwordResetVerificationCode,
});
