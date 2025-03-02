import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function ConfirmAccount() {
  return (
    <div className="flex justify-center items-start min-h-[100vh] pt-48">
      <div className="w-full max-w-md rounded-lg p-6">
        {" "}
        <div className="flex flex-col gap-4 items-center justify-center">
          <h1 className="text-secondaryColor font-roboto text-5xl font-medium tracking-wider animate-bounce">
            Algo
            <span className="font-roboto text-5xl font-extrabold">Rivals</span>
          </h1>
          <h2 className="text-3xl font-bold text-center">
            Account Confirmation
          </h2>
          <p className="text-gray-500 font-light text-center">
            To confirm your account, please click the button below.
          </p>
          <Button className="bg-secondaryColor mt-2 text-white py-6 px-10 rounded-lg w-full transition-all duration-200 hover:bg-primaryColor hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100">
            Confirm Account
          </Button>
          <p className="text-gray-500 text-center font-light max-w-4xl">
            If you have any issue confirming your account please, contact{" "}
            <Link href="mailto:support@algorivals.com.">
              <span className="text-blue-500 underline">
                support@algorivals.com.
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ConfirmAccount;
