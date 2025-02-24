import React from "react";
import { LuMailCheck } from "react-icons/lu";
import { Button } from "../ui/button";
import { RegisterType } from "@/lib/auth/api";
import { TiArrowRight } from "react-icons/ti";
import Link from "next/link";

interface VerifyEmailCardProps {
  getValues: () => RegisterType;
  hyperLinkStyles: string;
}

function VerifyEmailCard({ getValues, hyperLinkStyles }: VerifyEmailCardProps) {
  return (
    <div className="flex flex-col gap-6 py-28 px-4 items-center text-center justify-center">
      <h1 className="text-6xl font-bold text-center animate-bounce">
        <LuMailCheck />
      </h1>
      <h1 className="font-bold text-center max-w-4xl text-2xl">
        Check Your Email
      </h1>
      <p className="text-lg">
        We just sent a verification link to {""}
        <Link href={`mailto:${getValues().email}`}>
          <span className={`${hyperLinkStyles} text-center`}>
            {getValues().email}
          </span>
        </Link>
      </p>
      <Link href="/login">
        <Button className=" bg-secondaryColor text-white py-5 px-6 rounded-lg transition-all duration-200 hover:bg-[#3498db] hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100">
          Go to login <TiArrowRight className="text-xs" />
        </Button>
      </Link>
    </div>
  );
}

export default VerifyEmailCard;
