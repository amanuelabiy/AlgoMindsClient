import React from "react";
import { ProblemFaced } from "./ProblemsFacedBoxes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { getProblemsFacedBoxDelay } from "@/utils/framerMotion/getProblemsFacedBoxDelay";

interface ProblemsFacedBoxProps {
  problem: ProblemFaced;
  index: number;
}

function ProblemsFacedBox({ problem, index }: ProblemsFacedBoxProps) {
  const { icon, name, description } = problem;

  return (
    <motion.div
      whileInView="visible"
      viewport={{ once: true }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: getProblemsFacedBoxDelay(index, 0.2),
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className={`relative rounded-[20px] bg-white flex-shrink-0 shadow-md shadow-black/25 h-[187px] w-[345px] p-8 ${
        index === 2 ? "md:col-span-2 md:justify-self-center" : ""
      }`}
    >
      {/* Icon Container */}
      <div className="absolute top-5 left-6">
        <div
          className="flex items-center justify-center h-12 w-12 rounded-[12px] bg-opacity-20"
          style={{ backgroundColor: "rgba(41, 128, 185, 0.20)" }}
        >
          <FontAwesomeIcon
            icon={icon}
            className="text-2xl text-secondaryColor"
          />
        </div>
      </div>

      {/* Text Container */}
      <div className="absolute top-[5rem] left-6 right-6">
        <h1 className="text-[rgba(52,73,94,0.70)] text-md font-bold leading-[100%]">
          {name}
        </h1>
        <p className="text-[rgba(52,73,94,0.70)] text-sm font-medium leading-[1.2] tracking-wide mt-2">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default ProblemsFacedBox;
