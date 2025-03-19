"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <div
      id="about"
      className="flex custom-lg:flex-row flex-col justify-center items-center custom-lg:gap-8 gap-0 md:px-24 px-4 py-24 w-full"
    >
      <div className="flex flex-col justify-center items-center md:items-start px-10 gap-4 pb-12 md:mt-8">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }} // Amount is how much of the element should be in view before it triggers
          className="text-primaryColor sm:text-3xl text-2xl font-bold leading-normal flex-shrink-0 text-center custom-lg:text-left max-w-[36rem]"
        >
          How We Empower Collaborative, Interview-Ready Results
        </motion.h1>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-[#737070] text-xs font-normal leading-normal tracking-[0.8px] text-center custom-lg:text-left max-w-[36rem]"
        >
          AlgoMinds is redefining technical interview prep by merging real-time
          collaboration with AI-driven feedback. We believe that learning
          together, discussing solutions, and getting immediate feedback not
          only makes coding more fun, but also drastically improves your
          readiness for real interviews.
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
            <span className="">✅</span> Collaborative coding challenges are a
            game-changer—can’t wait to try AlgoMinds!
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
            <span className="">✅</span> "Finally, a platform that makes coding
            interviews feel like a team sport—so helpful!"
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
            <span className="">✅</span> "All the motivation of a study group,
            plus the power of AI hints and feedback!"
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
              AI-driven feedback for you and your friends, optimized solutions,
              and step-by-step explanations to improve your group's
              problem-solving skills and coding efficiency.
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
              src="/assets/images/retreat.png"
              width={65}
              height={100}
              objectFit="contain"
              className="scale-75"
            />
          </div>
          <div className="mt-6">
            <h1 className="flex-shrink-0 text-primaryColor text-left font-bold leading-normal sm:text-xl text-md ">
              Fun & Interactive Challenges
            </h1>
            <p className="text-[#4E4E4E] font-chakra text-xs font-normal leading-normal max-w-lg sm:text-[14px]">
              Join friends in energetic coding battles, tackle real-world
              interview problems, learn faster, laugh louder, and level up your
              skills with every challenge!
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
              Leaderboards & Progression
            </h1>
            <p className="text-[#4E4E4E] font-chakra text-xs font-normal leading-normal max-w-lg sm:text-[14px]">
              Track your coding journey with fun leaderboards and measurable
              milestones. Challenge friends, climb the ranks, and stay motivated
              to reach your next level.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutUs;
