"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import React from "react";
import { RegisterType } from "@/lib/auth/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/schema/auth-schema";

const styles = {
  input:
    "w-full mt-1 h-12 p-4 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none",
  label: "block text-sm font-medium text-gray-700",
  hyperlink: "text-blue-500 underline",
  errorMessage: "text-red-500 text-sm mt-1",
};

function SignUp() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<RegisterType>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<RegisterType> = async (data: RegisterType) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      throw new Error("Email is already taken");
    } catch (error) {
      setError("root", {
        message: "Email is already taken",
      });
    }
  };

  return (
    <div className="flex justify-center items-start min-h-[85vh] pt-2">
      <div className="w-full max-w-md rounded-lg p-6">
        <div className="flex flex-col gap-4 items-center justify-center">
          <h2 className="text-4xl font-bold text-center">Sign up now</h2>
          <p className="text-gray-500 text-center max-w-4xl">
            Compete, collaborate, and master data structures & algorithms in
            real-time with friends.
          </p>
        </div>
        <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
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
                {...register("lastName", { required: "Last Name is required" })}
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
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <span className={styles.errorMessage}>
                {errors.password.message}
              </span>
            )}
          </div>

          {errors.root && (
            <p className={`${styles.errorMessage} text-center my-2`}>
              {errors.root.message}
            </p>
          )}

          <div className="flex flex-row justify-between items-center mt-10 w-full">
            <Button
              className="bg-secondaryColor text-white py-6 px-10 rounded-lg transition-all duration-200 hover:bg-[#3498db] hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Loading..." : "Sign up"}
            </Button>

            <p className="text-gray-500 text-sm text-right">
              Already have an account?{" "}
              <Link href="/login" className={styles.hyperlink}>
                Login
              </Link>
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center md:justify-start mt-6">
            <p className="text-center md:text-left text-sm text-gray-500">
              If you need help, please contact{" "}
              <Link href="mailto:support@algorivals.com.">
                <span className={styles.hyperlink}>
                  support@algorivals.com.
                </span>
              </Link>
            </p>

            <Link href="/terms-of-use">
              <p className="text-gray-500 underline text-sm">Terms of Use</p>
            </Link>
            <Link href="/privacy-policy">
              <p className="text-gray-500 underline text-sm">Privacy Policy</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
