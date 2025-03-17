"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <div className="flex custom-lg:flex-row flex-col justify-center items-center custom-lg:gap-8 gap-0 md:px-24 px-4 py-24 w-full">
      <div className="flex flex-col justify-center items-center md:items-start px-10 gap-4 pb-12 md:mt-8">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }} // Amount is how much of the element should be in view before it triggers
          className="text-primaryColor sm:text-3xl text-2xl font-bold leading-normal flex-shrink-0 text-center custom-lg:text-left max-w-[36rem]"
        >
          How We Guarantee Interview-Ready Results for Every User
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-[#737070] sm:text-base text-xs font-normal leading-normal tracking-[0.8px] text-center custom-lg:text-left max-w-[36rem]"
        >
          AlgoAI is redefining technical interview prep by harnessing the power
          of AI to provide instant feedback, personalized insights, and
          real-time coding assistance. As software engineers, we know the
          struggle.
        </motion.p>
        <div className="md:mt-8 flex flex-col gap-2 justify-center md:items-start items-center">
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              delay: 0.5,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="text-[#737070] italic text-xs leading-normal tracking-[0.8px] text-center custom-lg:text-left max-w-[36rem]"
          >
            <span className="">✅</span> AI-driven feedback is exactly what I've
            been looking for—can't wait to try AlgoAI!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              delay: 1,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="text-[#737070] italic text-xs leading-normal tracking-[0.8px] text-center custom-lg:text-left max-w-[36rem]"
          >
            <span className="">✅</span> "Real interview practice is what’s
            missing from most platforms—AlgoAI looks like the solution!"
          </motion.p>
          <motion.p
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              delay: 1.5,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="text-[#737070] italic text-xs leading-normal tracking-[0.8px] text-center custom-lg:text-left max-w-[36rem]"
          >
            <span className="">✅</span> "I've always wanted a tutor by my side
            to stay focused and motivated."
          </motion.p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.4,
            delay: 0.5,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="flex flex-row justify-center items-center p-2 gap-6"
        >
          <div className="bg-white p-2 ml-4">
            <Image
              alt="neural-network"
              src="/assets/images/neuralNetwork.svg"
              width={65}
              height={100}
            />
          </div>
          <div className="mt-6">
            <h1 className="flex-shrink-0 text-primaryColor text-left font-bold leading-normal sm:text-xl text-md">
              Smart Code Insights
            </h1>
            <p className="text-[#4E4E4E] text-xs font-normal leading-normal max-w-lg sm:text-[14px]">
              AI-driven feedback, optimized solutions, and step-by-step
              explanations to improve your problem-solving skills and coding
              efficiency.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.4,
            delay: 1,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="flex flex-row justify-center items-center p-2 gap-6"
        >
          <div className="bg-white p-2 ml-4">
            <Image
              alt="clock"
              src="/assets/images/clock.svg"
              width={65}
              height={100}
              objectFit="contain"
              className="scale-75"
            />
          </div>
          <div className="mt-6">
            <h1 className="flex-shrink-0 text-primaryColor text-left font-bold leading-normal sm:text-xl text-md ">
              Realistic Interview Practice
            </h1>
            <p className="text-[#4E4E4E] font-chakra text-xs font-normal leading-normal max-w-lg sm:text-[14px]">
              Simulate real coding interviews with AI-generated hints, time
              tracking, and in-depth performance analysis to help you ace the
              real thing.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.4,
            delay: 1.5,
            scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
          className="flex flex-row justify-center items-center p-2 gap-6"
        >
          <div className="bg-white p-2 ml-4">
            <Image
              alt="guided-learning"
              src="/assets/images/guidedLearning.svg"
              width={65}
              height={100}
              objectFit="contain"
              className="scale-75"
            />
          </div>
          <div className="mt-6">
            <h1 className="flex-shrink-0 text-primaryColor text-left font-bold leading-normal sm:text-xl text-md">
              Guided Learning
            </h1>
            <p className="text-[#4E4E4E] font-chakra text-xs font-normal leading-normal max-w-lg sm:text-[14px]">
              Follow structured, AI-curated learning paths that adapt to your
              skill level, keeping you focused on the right problems at the
              right time.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
