"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Switch from "./Switch";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

function ProPlan() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: 0.5,
        scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
      }}
      style={{
        background:
          "linear-gradient(50deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 15%, rgba(255,255,255,1) 57%, rgba(246,251,255,1) 65%, rgba(240,249,255,1) 100%)",
      }}
      className={`flex flex-col flex-shrink-0 justify-start items-center border-2 border-secondaryColor shadow-lg rounded-lg ${
        isAnnual ? "pt-0" : "pt-8"
      } pb-4 w-80 min-h-[500px] border-b-[10px]`}
    >
      {isAnnual ? (
        <div className="relative flex flex-row justify-center self-end items-center bg-secondaryColor p-2 text-xs rounded-xl rounded-r-none rounded-tl-none text-white overflow-hidden">
          <h1>Best deal</h1>
          {/* Sparkling Effect */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            {Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
                transition={{
                  duration: Math.random() * 1.5 + 0.5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </motion.div>
        </div>
      ) : null}
      <div className="flex flex-col justify-center items-center gap-4">
        <div>
          <h2 className="text-secondaryColor text-center text-xl font-semibold leading-normal">
            Pro Plan
          </h2>
          <h2 className="text-secondaryColor text-center text-3xl font-semibold leading-normal">
            {isAnnual ? "$7.99/month" : "$9.99/month"}
          </h2>
        </div>
        <p className="text-[#4E4E4E] text-center text-xs font-normal leading-normal max-w-[18rem] px-1">
          For those who want to stay ahead of the competition 🏆
        </p>
        <div className="flex justify-center items-center w-full">
          <Switch isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
        </div>
      </div>

      <ul className="flex flex-col gap-2 justify-center items-center text-sm flex-grow">
        <li className="text-[rgba(44,62,80,0.70)] text-center text-base font-extrabold leading-normal max-w-[16rem] flex flex-row items-center gap-1">
          <FaStar className="text-lighterBlue" size={18} /> Unlimited Problem
          Solving
        </li>
        <li className="text-[rgba(44,62,80,0.70)] text-center text-base font-extrabold leading-normal max-w-[14rem] flex flex-row items-start gap-1">
          <FaStar className="text-lighterBlue" size={36} />{" "}
          <p className="mt-1">
            In-depth, step-by-step AI-Powered Code Insights
          </p>
        </li>
        <li className="text-[rgba(44,62,80,0.70)] text-center text-base font-extrabold leading-normal max-w-[16rem] flex flex-row justify-center items-start">
          <FaStar className="text-lighterBlue" size={20} />
          Visual workspace for coding logic
        </li>
        <li className="text-[rgba(44,62,80,0.70)] text-center text-base font-extrabold leading-normal max-w-[14rem] flex flex-row justify-center items-center gap-1">
          <FaStar className="text-lighterBlue" size={18} />
          Priority Product Support
        </li>
      </ul>
      <div className="flex justify-center flex-row items-center w-full">
        <Button
          variant="outline"
          className="bg-blue-500 w-[90%] text-white border-secondaryColor border-2 hover:text-white hover:bg-blue-800 py-5 text-xl px-6 rounded-lg"
        >
          Get Started
        </Button>
      </div>
    </motion.div>
  );
}

export default ProPlan;
