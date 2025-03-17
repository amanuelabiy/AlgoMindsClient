"use client";

import React from "react";
import StarterPlan from "./StarterPlan";
import ProPlan from "./ProPlan";
import { motion } from "framer-motion";
import {
  pricingDisclaimerContainer,
  pricingTextContainer,
} from "@/utils/framerMotion/container";

function Pricing() {
  return (
    <div className="flex flex-col justify-center gap-8 items-center bg-transparent pt-20 pb-10 px-20">
      <motion.div
        variants={pricingTextContainer(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center gap-6"
      >
        <p className="text-secondaryColor text-center text-md md:text-xl font-semibold leading-normal">
          PRICING
        </p>
        <h1 className="text-primaryColor text-center text-4xl font-bold leading-normal max-w-sm">
          Choose the Plan That's Right For You
        </h1>
      </motion.div>

      {/* Pricing Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-14 w-full">
        <StarterPlan />
        <ProPlan />
      </div>
      <motion.div
        variants={pricingDisclaimerContainer(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center mt-4"
      >
        <p className="text-[#2C3E50] text-center text-[14px] max-w-md font-normal leading-normal">
          🚧 <span className="font-bold">Early Development Notice:</span> Our
          pricing plans are not final and may be subject to change as we refine
          AlgoAI. Stay tuned for updates!
        </p>
      </motion.div>
    </div>
  );
}

export default Pricing;
