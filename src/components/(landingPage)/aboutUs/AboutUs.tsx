import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function AboutUs() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center flex-shrink-0 h-auto w-full bg-darkBlue bg-cover bg-center bg-no-repeat py-20">
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        <h1 className="text-white text-opacity-70 font-roboto text-md font-semibold text-center">
          About Us
        </h1>
        <h1 className="text-white text-4xl font-bold text-center">
          Prepare for Coding Interviews, while having Fun!
        </h1>
        <ul className="text-white text-opacity-70 font-roboto text-2xl font-medium p-8 text-center lg:text-left">
          <li className="mb-4">
            <span className="text-white font-bold text-opacity-100">
              ✅ What is AlgoRivals?
            </span>{" "}
            A competitive coding platform where software engineers can prepare
            for technical interviews in a fun and engaging way.
          </li>
          <li className="mb-4">
            <span className="text-white font-bold text-opacity-100">
              ✅ Our Mission:
            </span>{" "}
            To transform coding preparation from an isolated, boring task to an
            engaging, social experience.
          </li>
          <li className="mb-4">
            <span className="text-white font-bold text-opacity-100">
              ✅ What We Offer:
            </span>{" "}
            Real-time multiplayer coding challenges, integrated problem
            repository, interactive code editor, live leaderboards and rankings!
          </li>
          <li>
            <span className="text-white font-bold text-opacity-100">
              ✅ Why Sign Up?
            </span>{" "}
            Take your coding skills to the next level by competing with friends,
            tracking your progress, and mastering algorithms—all in a dynamic,
            interactive environment designed to make learning fun and effective.
          </li>
        </ul>
        <Link
          href="/signup"
          className="flex flex-row justify-center items-center w-full my-8"
        >
          <Button className="bg-lighterBlue w-3/4 text-white py-6 px-10 rounded-lg transition-all duration-200 hover:bg-[#3498db] hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100">
            Join a Challenge
          </Button>
        </Link>
      </div>
      <div className="flex justify-center items-center w-[90%] lg:w-1/2">
        <Image
          width={600}
          height={400}
          alt="aboutUsLanding"
          src="/assets/images/aboutUsLanding.jpg"
          className="h-auto mb-4 lg:mb-0 rounded-[12px] border-[6px]"
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
