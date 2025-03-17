"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tween = {
  type: "tween",
  duration: 0.01,
  ease: "easeInOut",
};

interface SwitchProps {
  isAnnual: boolean;
  setIsAnnual: (isAnnual: boolean) => void;
}

const Switch = ({ isAnnual, setIsAnnual }: SwitchProps) => {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsAnnual(!isAnnual);

  return (
    <div
      className={`w-36 h-10 flex bg-blue-500 items-center rounded-full p-1 cursor-pointer transition justify-end`}
    >
      <motion.div
        className={`flex flex-row justify-center items-center text-xs text-secondaryColor w-[68px] h-8 rounded-full`}
        animate={{
          backgroundColor: isAnnual ? "#ffffff" : "#3b82f6",
          color: isAnnual ? "#3b82f6" : "#ffffff",
        }}
        onClick={toggleSwitch}
        transition={tween}
      >
        Annual
      </motion.div>
      <motion.div
        onClick={toggleSwitch}
        className={`flex flex-row justify-center items-center text-xs text-white w-[68px] h-8 rounded-full`}
        animate={{
          backgroundColor: isAnnual ? "#3b82f6" : "#ffffff",
          color: isAnnual ? "#ffffff" : "#3b82f6",
        }}
        transition={tween}
      >
        Monthly
      </motion.div>
    </div>
  );
};

export default Switch;
