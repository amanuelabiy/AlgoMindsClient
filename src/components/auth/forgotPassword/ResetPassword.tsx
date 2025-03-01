"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { resetPasswordMutationFn, ResetPasswordType } from "@/lib/auth/api";
import { resetPasswordSchema } from "@/schema/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ResetPasswordSendMessage from "./ResetPasswordSendMessage";

interface ResetPasswordProps {
  styles: {
    buttonStyles: string;
    errorMessage: string;
    input: string;
    label: string;
  };
  setPasswordResetSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

function ResetPassword({
  styles,
  setPasswordResetSuccess,
}: ResetPasswordProps) {
  const [step, setStep] = useState<number>(1);

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordType>({
    defaultValues: {
      password: "",
      verificationCode: "",
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: resetPasswordMutationFn,
  });

  const onSubmit: SubmitHandler<ResetPasswordType> = async (
    data: ResetPasswordType
  ) => {
    mutate(data, {
      onSuccess: () => {
        setStep(2);
        setPasswordResetSuccess(true);
      },
      onError: (error) => {
        setError("root", {
          message: error.message,
        });
      },
    });
  };

  const formIsSubmitting = isSubmitting || isPending;
  return (
    <>
      {step === 1 ? (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
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
            {errors.verificationCode && (
              <span className={styles.errorMessage}>
                {errors.verificationCode.message}
              </span>
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
            {errors.password && (
              <span className={styles.errorMessage}>
                {errors.password.message}
              </span>
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
        </form>
      ) : (
        <ResetPasswordSendMessage />
      )}
    </>
  );
}

export default ResetPassword;
