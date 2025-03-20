"use client";

import ConfirmAccountSuccessMessage from "@/components/auth/confirmAccount/ConfirmAccountSuccessMessage";
import { Button } from "@/components/ui/button";
import { resendEmailMutationFn, verifyEmailMutationFn } from "@/lib/auth/api";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function ConfirmAccount() {
  /*Whole Component Error Messages */
  const [errorMessage, setErrorMessage] = useState<string>("");
  /*Resend Email Success Message */
  const [resendSuccessMessage, setResendSuccessMessage] = useState<string>("");

  const params = useSearchParams();
  const code = params.get("code");

  const { mutate, isPending, isSuccess, isError } = useMutation({
    mutationFn: verifyEmailMutationFn,
  });

  const {
    mutate: resendEmail,
    isPending: isResendLoading,
    isSuccess: isResendSuccess,
  } = useMutation({
    mutationFn: resendEmailMutationFn,
  });

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (!code) {
      setErrorMessage("Confirmation token not found");
      return;
    }

    mutate(
      { code },
      {
        onSuccess: (response) => {
          console.log("response", response);
        },
        onError: (error) => {
          console.log("error", error);
          const message: string = error.message || "An error occurred";
          setErrorMessage(message);
        },
      }
    );
  };

  const handleResendEmail = () => {
    if (!code) {
      setErrorMessage("Confirmation token not found");
      return;
    }
    resendEmail(
      { code },
      {
        onSuccess: (response) => {
          setErrorMessage("");
          setResendSuccessMessage(response.data.message);
        },
        onError: (error) => {
          console.log("error", error);
          const message: string = error.message || "An error occurred";
          setErrorMessage(message);
        },
      }
    );
  };

  const formIsSubmitting = isPending;

  const showResendSuccess = isResendSuccess && resendSuccessMessage;

  return (
    <div className="flex justify-center items-start min-h-[100vh] pt-48">
      <div className="w-full max-w-md rounded-lg p-6">
        {" "}
        {isSuccess ? (
          <ConfirmAccountSuccessMessage />
        ) : (
          <div className="flex flex-col gap-4 items-center justify-center">
            <h1 className="text-secondaryColor font-roboto text-5xl font-medium tracking-wider animate-bounce">
              Algo
              <span className="font-roboto text-5xl font-extrabold">Minds</span>
            </h1>
            <h2 className="text-3xl font-bold text-center">
              Account Confirmation
            </h2>
            {errorMessage ? (
              <span className="text-red-500 text-center">{errorMessage}</span>
            ) : showResendSuccess ? (
              <p className="flex flex-row justify-center items-center gap-1 text-secondaryColor text-center">
                <IoIosCheckmarkCircleOutline size={24} /> {resendSuccessMessage}
              </p>
            ) : (
              <p className="text-gray-500 font-light text-center">
                To confirm your account, please click the button below.
              </p>
            )}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-1">
                {isError ? (
                  <Button
                    type="button"
                    disabled={isResendLoading}
                    onClick={handleResendEmail}
                    className="bg-transparent mt-2 border-primaryColor border-2 text-primaryColor py-6 px-10 rounded-lg w-full transition-all duration-200 hover:bg-gray-300 hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100"
                  >
                    Resend Email
                  </Button>
                ) : null}
                <Button
                  disabled={formIsSubmitting}
                  type="submit"
                  className="bg-secondaryColor mt-2 text-white py-6 px-10 rounded-lg w-full transition-all duration-200 hover:bg-primaryColor hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100"
                >
                  {formIsSubmitting ? "Confirming..." : "Confirm Account"}
                </Button>
              </div>

              <p className="text-gray-500 text-center font-light max-w-4xl">
                If you have any issue confirming your account please, contact{" "}
                <Link href="mailto:support@AlgoMinds.com.">
                  <span className="text-blue-500 underline">
                    support@algominds.com.
                  </span>
                </Link>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConfirmAccount;
