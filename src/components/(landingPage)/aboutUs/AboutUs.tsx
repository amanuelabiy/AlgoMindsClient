import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AboutUs() {
  return (
    <div
      id="about"
      className="flex flex-col lg:flex-row lg:mx-auto lg:py-24 lg:px-24 gap-8 justify-center items-center flex-shrink-0 h-auto w-full bg-darkBlue bg-cover bg-center bg-no-repeat py-20"
    >
      <div className="flex flex-col lg:justify-start lg:items-start gap-4 w-full lg:w-1/2 lg:p-8">
        <h1 className="text-white text-opacity-70 font-roboto text-md font-semibold text-center">
          About Us
        </h1>
        <h1 className="text-white lg:text-left text-4xl lg:text-3xl font-bold text-center">
          Prepare for Coding Interviews, while having Fun!
        </h1>
        <ul className="text-white text-opacity-70 font-roboto lg:text-lg text-2xl font-medium p-8 lg:p-0 text-center lg:text-left">
          <li className="mb-4">
            <span className="text-white font-bold text-opacity-100">
              ✅ What is AlgoAI?
            </span>{" "}
            An AI-powered interview prep platform that helps software engineers
            master Data Structures and Algorithims with real-time AI guidance,
            creating personalized experience with every problem solved.
          </li>
          <li className="mb-4">
            <span className="text-white font-bold text-opacity-100">
              ✅ Our Mission:
            </span>{" "}
            To revolutionize coding interview preparation by leveraging AI for
            intelligent feedback, adaptive learning, and interactive mock
            interviews—making interview prep smarter, faster, and more
            effective.
          </li>
          <li className="mb-4">
            <span className="text-white font-bold text-opacity-100">
              ✅ What We Offer:
            </span>{" "}
            AI-driven code explanations, real-time debugging assistance,
            AI-powered mock technical interviews, personalized problem
            recommendations, and interactive leaderboards to track your
            progress.
          </li>
          <li>
            <span className="text-white font-bold text-opacity-100">
              ✅ Why Sign Up?
            </span>
            {"  "}
            Supercharge your interview prep with AI-driven insights, challenge
            yourself with curated problem sets, and gain the confidence to crack
            technical interviews at top companies—efficiently and effectively.
          </li>
        </ul>
        <Link
          href="/signup"
          className="flex flex-row lg:justify-start justify-center items-center w-full lg:w-1/2 my-8"
        >
          <Button className="bg-lighterBlue w-3/4 text-white py-6 px-10 rounded-lg transition-all duration-200 hover:bg-[#3498db] hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100">
            Join a Challenge
          </Button>
        </Link>
      </div>
      <div className="flex justify-center items-center w-[90%] lg:w-1/2 mr-6">
        <Image
          width={600}
          height={400}
          alt="aboutUsLanding"
          src="/assets/images/aboutUsLanding.jpg"
          className="h-auto mb-4 lg:mb-0 rounded-[12px] border-[6px] lg:w-full"
          style={{
            borderImage:
              "linear-gradient(to bottom left, #FF7D0A 50%, #2980B9 50%)",
            borderImageSlice: 1,
          }}
        />
      </div>
    </div>
  );
}

export default AboutUs;
