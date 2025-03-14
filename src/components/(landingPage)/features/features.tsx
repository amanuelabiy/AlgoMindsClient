"use client";
import FeaturesCarousel from "./featuresCarousel/FeaturesCarousel";
import { motion } from "framer-motion";

function Features() {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="h-auto w-full py-20"
    >
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-[rgba(44,62,80,0.7)] text-center text-[24px] font-semibold leading-normal">
          Feature
        </p>
        <h1 className="text-primaryColor text-center text-[46px] font-bold leading-normal">
          Our Special Features
        </h1>
        <FeaturesCarousel />
      </div>
    </motion.div>
  );
}

export default Features;
