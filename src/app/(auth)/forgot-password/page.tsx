"use client";

import ResetPassword from "@/components/auth/forgotPassword/ResetPassword";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { forgotPasswordMutationFn, ForgotPasswordType } from "@/lib/auth/api";
import { forgotPasswordSchema } from "@/schema/auth-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

const styles = {
  buttonStyles:
    "w-full text-white py-6 px-10 rounded-lg transition-all duration-200  hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100",
  errorMessage: "text-red-500 text-sm mt-1",
  input:
    "w-full mt-1 h-12 p-4 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none",
  label: "block text-sm font-medium text-gray-700",
};

function ForgotPassword() {
  const params = useSearchParams();

  const email = params.get("email");

  const [step, setStep] = useState<number>(1);

  const {
    register,
    handleSubmit,
    setError,
    getValues,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordType>({
    defaultValues: {
      email: email || "",
    },
    resolver: zodResolver(forgotPasswordSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: forgotPasswordMutationFn,
  });

  const handleSendClick = async () => {
    console.log("send click");
    await new Promise((resolve) => setTimeout(resolve, 4000));
    const result = await trigger(["email"]);
    if (result) {
      setStep(2);
    }
  };

  const formIsSubmitting = isSubmitting || isPending;

  const onSubmit: SubmitHandler<ForgotPasswordType> = async (
    data: ForgotPasswordType
  ) => {
    //#TODO: Implement the forgot password logic
    try {
      await new Promise((resolve) => setTimeout(resolve, 4000));
      throw new Error("Not implemented");
    } catch (error) {
      setError("root", {
        message: "An error occurred. Please try again later",
      });
    }
  };

  return (
    <div className="flex justify-center items-start min-h-[85vh] pt-32">
      <div className="w-full max-w-md rounded-lg p-6">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2 className="text-4xl font-bold text-center">
            {step === 1 ? "Request Password Reset" : "Reset Your Password"}
          </h2>
        </div>
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
          {step === 1 ? (
            <>
              <div className="mb-4 flex flex-col gap-2">
                <Label htmlFor="email" className={styles.label}>
                  Email
                </Label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                  className={styles.input}
                  autoComplete="off"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <span className={styles.errorMessage}>
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col justify-between items-center mt-8 w-full gap-4">
                <Button
                  className={`${styles.buttonStyles} bg-transparent text-black border-2 border-secondaryColor hover:bg-[#87d1ff]`}
                  type="button"
                  onClick={handleSendClick}
                  disabled={formIsSubmitting}
                >
                  {formIsSubmitting ? "sending" : "Send Password Reset Email"}
                </Button>
                <div className="flex items-center w-full">
                  <div className="flex-grow border-t border-gray-300"></div>
                  <span className="mx-4 text-gray-500">Or</span>
                  <div className="flex-grow border-t border-gray-300"></div>
                </div>
                <Link href={`/login`} className="w-full">
                  <Button
                    className={`${styles.buttonStyles} bg-secondaryColor hover:bg-[#87b3cf]`}
                    type="button"
                  >
                    Go Back to Log In
                  </Button>
                </Link>
              </div>
            </>
          ) : (
            <ResetPassword
              styles={styles}
              register={register}
              errors={errors}
              setError={setError}
              formIsSubmitting={formIsSubmitting}
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
