import React from "react";

function Welcome() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 pt-4">
      <h1 className="text-center text-[2rem] md:text-[2.5rem] max-w-md font-bold leading-none font-chakra text-shadow-xl dark:gradient-text gradient-text-light">
        Welcome to the Future of Interview Prep
      </h1>
      <p className="text-center text-xs font-normal leading-none font-chakra max-w-md text-[#8697A8]">
        AlgoMinds is the revolutionary multiplayer coding platform where you
        practice, compete, and grow with friends — all in real-time.
      </p>
    </div>
  );
}

export default Welcome;
