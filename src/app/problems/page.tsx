import ProblemEntries from "@/components/problems/ProblemEntries";
import ProblemStats from "@/components/problems/ProblemStats";
import StreakCounter from "@/components/problems/StreakCalendar";
import React from "react";

function ProblemsPage() {
  return (
    <div className="pt-6 md:pb-10 bg-neutralLightColor min-h-screen">
      <header className="flex flex-col items-center gap-4 justify-center text-center">
        <h1 className="text-[rgba(44,62,80,0.70)] text-xl font-semibold leading-normal">
          Problems
        </h1>
        <h1 className="text-primaryColor text-center text-2xl font-bold leading-normal">
          Challenge Yourself with{" "}
          <span className="text-secondaryColor">Coding</span> Problems
        </h1>
      </header>
      <div className="flex flex-col mt-4 gap-4 items-center justify-center w-full md:flex-row px-24">
        <ProblemEntries />
        <div className="flex flex-col mt-4 gap-4 items-center justify-center">
          <StreakCounter />
          <ProblemStats />
        </div>
      </div>
    </div>
  );
}

export default ProblemsPage;
