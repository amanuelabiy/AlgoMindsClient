import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ForgotPasswordType } from "@/lib/auth/api";
import { forgotPasswordSchema } from "@/schema/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import {
  FieldErrors,
  SubmitHandler,
  useForm,
  UseFormRegister,
  UseFormSetError,
} from "react-hook-form";

interface ResetPasswordProps {
  setError: UseFormSetError<ForgotPasswordType>;
  register: UseFormRegister<ForgotPasswordType>;
  errors: FieldErrors<ForgotPasswordType>;
  styles: {
    buttonStyles: string;
    errorMessage: string;
    input: string;
    label: string;
  };
  formIsSubmitting: boolean;
}

function ResetPassword({
  register,
  errors,
  styles,
  formIsSubmitting,
}: ResetPasswordProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="mb-4 mt-2">
        <Label htmlFor="verificationCode" className={styles.label}>
          Verification Code
        </Label>
        <Input
          type="text"
          placeholder="123456"
          id="verificationCode"
          {...register("verificationCode", {
            required: "Verification Code is required",
          })}
          className={styles.input}
        />
        {errors.email && (
          <span className={styles.errorMessage}>{errors.email.message}</span>
        )}
      </div>

      <div className="mb-4">
        <Label htmlFor="newPassword" className={styles.label}>
          New Password
        </Label>
        <Input
          type="password"
          placeholder="************"
          id="newPassword"
          {...register("password", {
            required: "Password is required",
          })}
          className={styles.input}
        />
        {errors.email && (
          <span className={styles.errorMessage}>{errors.email.message}</span>
        )}
      </div>

      <div className="flex flex-col justify-between items-center w-full gap-4">
        {errors.root && (
          <p className={`${styles.errorMessage} text-center my-2`}>
            {errors.root.message}
          </p>
        )}
        <Button
          className={`${styles.buttonStyles} bg-secondaryColor hover:bg-[#87b3cf]`}
          type="submit"
          disabled={formIsSubmitting}
        >
          {formIsSubmitting ? "Loading..." : "Reset Password"}
        </Button>
      </div>
    </div>
  );
}

export default ResetPassword;
