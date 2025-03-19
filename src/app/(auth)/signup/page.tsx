"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { registerMutationFn, RegisterType } from "@/lib/auth/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schema/auth-schema";
import { TiArrowRight, TiArrowLeft } from "react-icons/ti";
import { useMutation } from "@tanstack/react-query";
import VerifyEmailCard from "@/components/auth/signup/VerifyEmailCard";

const styles = {
  input:
    "w-full mt-1 h-12 p-4 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none",
  label: "block text-sm font-medium text-gray-700",
  hyperlink: "text-blue-500 underline",
  errorMessage: "text-red-500 text-sm mt-1",
};

function SignUp() {
  const [step, setStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    setError,
    trigger,
    getValues,
    setFocus,
    formState: { errors, isSubmitting },
  } = useForm<RegisterType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
    },
    resolver: zodResolver(registerSchema),
  });

  useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  const { mutate, isPending } = useMutation({ mutationFn: registerMutationFn });

  const onSubmit: SubmitHandler<RegisterType> = async (data: RegisterType) => {
    mutate(data, {
      onSuccess: () => {
        setIsSubmitted(true);
      },
      onError: (error) => {
        setError("root", {
          message: error.message,
        });
      },
    });
  };

  const handleNextClick = async () => {
    const result = await trigger([
      "firstName",
      "lastName",
      "email",
      "password",
    ]);
    if (result) {
      setStep(2);
    }
  };

  const handleBackClick = () => {
    setStep(1);
    setError("root", {
      message: "",
    });
  };

  const formIsSubmitting = isSubmitting || isPending;
  const displayRootError =
    errors.root?.message &&
    !errors.username?.message &&
    !errors.confirmPassword?.message;

  return (
    <div className="flex justify-center items-start min-h-[85vh] pt-2">
      <div className="w-full max-w-md rounded-lg p-6">
        {isSubmitted ? (
          <VerifyEmailCard
            getValues={getValues}
            hyperLinkStyles={styles.hyperlink}
          />
        ) : (
          <>
            {" "}
            <div className="flex flex-col gap-4 items-center justify-center">
              <h2 className="text-4xl font-bold text-center">Sign up now</h2>
              <p className="text-gray-500 text-center max-w-4xl">
                Compete, collaborate, and master data structures & algorithms in
                real-time with friends.
              </p>
            </div>
            <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
              {step === 1 ? (
                <>
                  <div className="flex flex-row gap-4 mb-4">
                    <div className="flex flex-col w-full">
                      <Label className={styles.label} htmlFor="first-name">
                        First Name
                      </Label>
                      <Input
                        type="text"
                        className={styles.input}
                        placeholder="John"
                        id="first-name"
                        {...register("firstName", {
                          required: "First Name is required",
                        })}
                      />
                      {errors.firstName && (
                        <span className={styles.errorMessage}>
                          {errors.firstName.message}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col w-full">
                      <Label className={styles.label} htmlFor="last-name">
                        Last Name
                      </Label>
                      <Input
                        type="text"
                        className={styles.input}
                        placeholder="Doe"
                        id="last-name"
                        {...register("lastName", {
                          required: "Last Name is required",
                        })}
                      />
                      {errors.lastName && (
                        <span className={styles.errorMessage}>
                          {errors.lastName.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <Label className={styles.label} htmlFor="email">
                      Email
                    </Label>
                    <Input
                      type="email"
                      className={styles.input}
                      placeholder="Enter your email"
                      id="email"
                      {...register("email", { required: "Email is required" })}
                    />
                    {errors.email && (
                      <span className={styles.errorMessage}>
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <Label className={styles.label} htmlFor="password">
                      Password
                    </Label>
                    <Input
                      type="password"
                      className={styles.input}
                      placeholder="Enter your password"
                      id="password"
                      {...register("password", {
                        required: "Password is required",
                      })}
                    />
                    {errors.password && (
                      <span className={styles.errorMessage}>
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                </>
              ) : null}

              {step === 2 ? (
                <>
                  <div className="mb-4">
                    <Label
                      className={`${styles.label} flex flex-row justify-between items-center`}
                      htmlFor="username"
                    >
                      Username{" "}
                      <span className="text-xs text-gray-500">
                        {" "}
                        Choose wisely—this is your battle name! 🏆
                      </span>
                    </Label>
                    <Input
                      type="text"
                      className={styles.input}
                      placeholder="Enter your username"
                      id="username"
                      {...register("username", {
                        required: "Username is required",
                      })}
                    />

                    {errors.username && (
                      <span className={styles.errorMessage}>
                        {errors.username.message}
                      </span>
                    )}
                  </div>
                  <div className="mb-4">
                    <Label className={styles.label} htmlFor="confirmPassword">
                      Confirm Password
                    </Label>
                    <Input
                      type="password"
                      className={styles.input}
                      placeholder="************"
                      id="confirmPassword"
                      {...register("confirmPassword", {
                        required: "Confirm Password is required",
                      })}
                    />
                    {errors.confirmPassword && (
                      <span className={styles.errorMessage}>
                        {errors.confirmPassword.message}
                      </span>
                    )}
                  </div>
                  {displayRootError && (
                    <p className={`${styles.errorMessage} text-center my-2`}>
                      {errors.root?.message}
                    </p>
                  )}
                </>
              ) : null}

              <div className="flex flex-row-reverse justify-between items-center mt-10 w-full">
                {step === 1 ? (
                  <Button
                    className="bg-secondaryColor text-white py-5 px-6 rounded-lg transition-all duration-200 hover:bg-[#3498db] hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100"
                    disabled={isSubmitting}
                    type="button"
                    onClick={handleNextClick}
                  >
                    Next <TiArrowRight className="text-xs" />
                  </Button>
                ) : null}

                {step === 1 ? (
                  <p className="text-gray-500 text-sm text-right">
                    Already have an account?{" "}
                    <Link href="/login" className={styles.hyperlink}>
                      Login
                    </Link>
                  </p>
                ) : null}

                {step === 2 ? (
                  <Button
                    className="bg-secondaryColor text-white py-6 px-10 rounded-lg transition-all duration-200 hover:bg-[#3498db] hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100"
                    disabled={formIsSubmitting}
                    type="submit"
                  >
                    {formIsSubmitting ? "Loading..." : "Sign up"}
                  </Button>
                ) : null}

                {step === 2 ? (
                  <Button
                    className="bg-secondaryColor text-white py-6 px-10 rounded-lg transition-all duration-200 hover:bg-[#3498db] hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100"
                    disabled={formIsSubmitting}
                    type="button"
                    onClick={handleBackClick}
                  >
                    <TiArrowLeft /> Back
                  </Button>
                ) : null}
              </div>
              <div className="flex flex-col gap-2 items-center justify-center md:justify-start mt-6">
                <p className="text-center md:text-left text-sm text-gray-500">
                  If you need help, please contact{" "}
                  <Link href="mailto:support@algominds.net">
                    <span className={styles.hyperlink}>
                      support@algominds.net
                    </span>
                  </Link>
                </p>

                <Link href="/terms-of-use">
                  <p className="text-gray-500 underline text-sm">
                    Terms of Use
                  </p>
                </Link>
                <Link href="/privacy-policy">
                  <p className="text-gray-500 underline text-sm">
                    Privacy Policy
                  </p>
                </Link>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default SignUp;
