"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LandingPageCodeEditor from "../landingEditor/LandingPageCodeEditor";
import { motion } from "framer-motion";
import { container } from "@/utils/framerMotion/container";

function Hero() {
  return (
    <div className="flex flex-col custom-lg:flex-row custom-lg:gap-8 gap-20 justify-center items-center w-full bg-cover bg-center bg-no-repeat p-4 custom-lg:px-36 custom-lg:py-20">
      {/* Left Text Section */}
      <motion.div
        variants={container(0.2)}
        initial="hidden"
        animate="visible"
        className="flex flex-col mb-[4rem] gap-6 justify-center custom-lg:items-start items-center mt-12 relative custom-lg:top-[-4rem]"
      >
        <h1 className="text-black text-[46px] font-bold leading-normal text-center custom-lg:text-left max-w-[36rem] custom-lg:max-w-[54rem]">
          Practice <span className="text-lighterBlue">Data Structures </span> &
          <span className="text-lighterBlue"> Algorithms</span>, with{" "}
          <span className="text-lighterBlue">AI</span>
        </h1>
        <p className="text-black font-roboto font-normal leading-normal text-sm text-center custom-lg:text-left max-w-[36rem] custom-lg:max-w-2xl">
          Master Data Structures and Algorithms with AI-powered guidance. Get
          real-time feedback, personalized problem recommendations, and
          AI-driven mock interviews to sharpen your skills. Level up your coding
          prep, track your progress, and gain the confidence to ace technical
          interviews!
        </p>
        <div className="flex flex-col gap-8 items-center justify-center custom-lg:justify-start custom-lg:items-start">
          <Link href="/signup">
            <Button className="bg-lighterBlue mt-6 text-white w-48 h-12 py-6 px-10 rounded-lg transition-all duration-200 hover:bg-[#3498db] hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100">
              Join a Challenge
            </Button>
          </Link>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <h1 className="text-black text-[24px] font-chakra font-bold custom-lg:text-left text-center">
              <span className="text-lighterBlue underline decoration-solid">
                Ace
              </span>{" "}
              your next{" "}
              <span className="text-lighterBlue underline decoration-solid">
                technical interview
              </span>
              !
            </h1>
            <Image
              alt="rocket"
              src="/assets/images/rocketLanding.png"
              width={30}
              height={30}
              className="xs:mt-0 mt-5 custom-lg:mb-4 ml-2 animate-bounce"
            />
          </div>
        </div>
      </motion.div>

      {/* Right Image Section */}
      <div className="flex flex-col pt-0 justify-center items-center max-w-[40rem] max-h-[45rem] custom-lg:w-[85%] md:w-[75%] w-full relative custom-lg:top-[-4rem] custom-lg:right-[-4rem] overflow-hidden">
        <LandingPageCodeEditor />
      </div>
    </div>
  );
}

export default Hero;
