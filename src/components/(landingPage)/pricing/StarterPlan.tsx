"use client";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function StarterPlan() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.4,
        delay: 0,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      className="flex flex-col flex-shrink-0 justify-start items-center border-2 border-secondaryColor bg-white shadow-lg rounded-lg pt-8 pb-4 w-80 min-h-[450px] "
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <h2 className="text-secondaryColor text-center text-xl font-semibold leading-normal">
          Starter Plan
        </h2>
        <h2 className="text-secondaryColor text-center text-3xl font-semibold leading-normal">
          $0/month
        </h2>
        <p className="text-[#4E4E4E] text-center text-xs font-normal leading-normal mt-4">
          Perfect for those who want to test the waters. 🚀
        </p>
      </div>

      <ul className="flex flex-col gap-2 justify-center items-center text-sm flex-grow">
        <li className="text-[rgba(44,62,80,0.70)] text-center text-base font-medium leading-normal max-w-[14rem] flex flex-row items-start gap-1">
          <Check className="mt-[4px]" size={18} /> Private Rooms For Friends to
          Practice DSA
        </li>
        <li className="text-[rgba(44,62,80,0.70)] text-center text-base font-medium leading-normal max-w-[16rem] flex flex-row items-start gap-1">
          <Check className="mt-1" size={18} /> Real-time collaborative coding
        </li>
        <li className="text-[rgba(44,62,80,0.70)] text-center text-base font-medium leading-normal max-w-[14rem] flex flex-row items-start gap-1">
          <Check size={24} />
          AI-Powered Code Insights
        </li>
        <li className="text-[rgba(44,62,80,0.70)] text-center text-base font-medium leading-normal max-w-[16rem] flex flex-row items-center gap-1">
          <Check size={18} />
          Unlimited Problem Bank
        </li>
      </ul>
      <div className="flex justify-center flex-row items-center w-full">
        <Button
          variant="outline"
          className="bg-white w-[90%] text-secondaryColor border-secondaryColor border-2 hover:text-secondaryColor py-5 text-xl px-6 rounded-lg"
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
}

export default StarterPlan;
