import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { TiArrowRight } from "react-icons/ti";

function ResetPasswordSendMessage() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-[6rem] text-green-500">
        <IoIosCheckmarkCircleOutline />
      </h1>
      <h1 className="text-2xl font-bold text-center max-w-xs sm:max-w-lg">
        Password Reset Successful!
      </h1>
      <p className="text-lg text-gray-500">
        Your password was reset successfully
      </p>
      <Link href="/login" className="w-1/2 mt-4">
        <Button
          className={`w-full text-white py-6 px-10 rounded-full transition-all duration-200  hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100 bg-secondaryColor hover:bg-[#87b3cf]`}
          type="submit"
        >
          Back to login <TiArrowRight className="text-xs" />
        </Button>
      </Link>
    </div>
  );
}

export default ResetPasswordSendMessage;
