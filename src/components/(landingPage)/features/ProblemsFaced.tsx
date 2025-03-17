"use client";
import { problemsFacedTextContainer } from "@/utils/framerMotion/container";
import ProblemsFacedBoxes from "./featuresCarousel/ProblemsFacedBoxes";
import { motion } from "framer-motion";

function ProblemsFaced() {
  return (
    <div className="h-auto w-full pt-20 pb-[6rem]">
      <div className="flex flex-col justify-center items-center gap-4">
        <motion.div
          variants={problemsFacedTextContainer(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="text-secondaryColor text-center text-md md:text-xl font-semibold leading-normal">
            PROBLEM
          </p>
          <h1 className="text-primaryColor text-center text-xl md:text-4xl font-bold leading-normal mt-2">
            Why Traditional Coding Prep Fails
          </h1>
        </motion.div>
        <ProblemsFacedBoxes />
      </div>
    </div>
  );
}

export default ProblemsFaced;
