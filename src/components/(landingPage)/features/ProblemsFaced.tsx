"use client";
import ProblemsFacedBoxes from "./featuresCarousel/ProblemsFacedBoxes";
import { motion } from "framer-motion";

function ProblemsFaced() {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="h-auto w-full py-20"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-secondaryColor text-center text-md font-semibold leading-normal">
          PROBLEM
        </p>
        <h1 className="text-primaryColor text-center text-3xl font-bold leading-normal">
          Why Traditional Coding Prep Fails
        </h1>

        <ProblemsFacedBoxes />
      </div>
    </motion.div>
  );
}

export default ProblemsFaced;
