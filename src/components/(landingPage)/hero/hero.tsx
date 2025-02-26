import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div
      className="flex flex-col lg:flex-row lg:gap-4 gap-24 justify-center items-center min-h-screen w-full bg-cover bg-center bg-no-repeat p-4 lg:px-48 lg:py-36"
      style={{ backgroundImage: "url('/assets/images/heroBackground.jpg')" }}
    >
      <div className="flex flex-col gap-4 justify-center lg:items-start items-center mt-32 lg:mt-0">
        <h1 className="text-white text-[46px] lg:text-[50px] font-bold leading-normal text-center lg:text-left">
          Practice <span className="text-lighterBlue">Data Structures </span> &
          <span className="text-lighterBlue"> Algorithms</span>, The Fun Way!
        </h1>
        <p className="text-white text-base font-roboto font-normal leading-normal text-center lg:text-left lg:max-w-2xl">
          Engage in real-time coding challenges and compete with others in a
          thrilling, competitive environment. Test your skills, climb the
          leaderboard, and have fun solving problems in a dynamic, fast-paced
          setting!
        </p>
        <div>
          <Button className="bg-lighterBlue mt-9 text-white py-6 px-10 rounded-lg transition-all duration-200 hover:bg-[#3498db] hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100">
            Join a Challenge
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center lg:w-3/4 w-full">
        <Image
          src="/assets/images/heroMainImage.png"
          alt="hero-main-image"
          width={600}
          height={400}
          className="h-auto mb-4 lg:mb-0 rounded-[12px] border-[6px]"
          style={{
            borderImage:
              "linear-gradient(to bottom left, #FF7D0A 50%, #2980B9 50%)",
            borderImageSlice: 1,
          }}
        ></Image>
      </div>
    </div>
  );
}

export default Hero;
