"use client";
import { problemsFacedTextContainer } from "@/utils/framerMotion/container";
import ProblemsFacedBoxes from "./featuresCarousel/ProblemsFacedBoxes";
import { motion } from "framer-motion";

function ProblemsFaced() {
  return (
    <div className="h-auto w-full py-20">
      <div className="flex flex-col justify-center items-center gap-4">
        <motion.div
          variants={problemsFacedTextContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-secondaryColor text-center text-md font-semibold leading-normal">
            PROBLEM
          </p>
          <h1 className="text-primaryColor text-center text-3xl font-bold leading-normal">
            Why Traditional Coding Prep Fails
          </h1>
        </motion.div>
        <ProblemsFacedBoxes />
      </div>
    </div>
  );
}

export default ProblemsFaced;
