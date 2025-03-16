import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <div className="flex border shadow-2xl custom-lg:flex-row flex-col justify-center items-center custom-lg:gap-8 gap-0 p-24 w-full">
      <div className="flex flex-col justify-center items-center px-10 gap-4 pb-12 md:mt-8">
        <h1 className="text-primaryColor sm:text-3xl text-2xl font-bold leading-normal flex-shrink-0 text-center custom-lg:text-left max-w-[36rem]">
          How We Guarantee Interview-Ready Results for Every User
        </h1>
        <p className="text-[#737070] sm:text-base text-xs font-normal leading-normal tracking-[0.8px] text-center custom-lg:text-left max-w-[36rem]">
          AlgoAI is redefining technical interview prep by harnessing the power
          of AI to provide instant feedback, personalized insights, and
          real-time coding assistance. As software engineers, we know the
          struggle
        </p>
        <p className="text-[#737070] md:mt-8 italic text-xs leading-normal tracking-[0.8px] text-center custom-lg:text-left max-w-[36rem]">
          <span className="not-italic">✅</span> "I’ve always wished for
          real-time feedback while solving coding problems—AlgoAI is solving a
          huge gap in interview prep!"
        </p>
      </div>

      <div className="flex flex-col justify-center items-center gap-4">
        <div className="flex flex-row justify-center items-center p-2 gap-6">
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
        </div>
        <div className="flex flex-row justify-center items-center p-2 gap-6">
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
        </div>
        <div className="flex flex-row justify-center items-center p-2 gap-6">
          <div className="bg-white p-2 ml-4">
            <Image
              alt="clock"
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
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
{
  /* <div
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
    </div> */
}
