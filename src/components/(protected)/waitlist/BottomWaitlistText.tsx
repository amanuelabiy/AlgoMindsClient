import React from "react";

function BottomWaitlistText() {
  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <h1 className="text-[#383f46] dark:text-[#606a75] max-w-sm text-center text-sm font-normal">
        You're in! 🎉 You’ve joined{" "}
        <span className="dark:gradient-text gradient-text-light font-extrabold underline">
          many
        </span>{" "}
        other ambitious devs gearing up to transform how interviews are done —
        together.
      </h1>
      <p className="text-center text-xs font-normal leading-none font-chakra max-w-md text-[#272c31] dark:text-[#55606b]">
        {" "}
        &copy; 2025 AlgoMinds. All Rights Reserved.
      </p>
    </div>
  );
}

export default BottomWaitlistText;
