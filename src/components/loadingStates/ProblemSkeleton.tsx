import React from "react";
import NavbarSkeleton from "./NavbarSkeleton";
import { Skeleton } from "../ui/skeleton";

function ProblemSkeleton() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSkeleton />
      <div className="pt-6 bg-neutralLightColor min-h-screen">
        <header className="flex flex-col items-center gap-4 justify-center text-center">
          <Skeleton className="h-6 w-40 rounded-md"></Skeleton>
          <Skeleton className="h-8 w-72 bg-gray-300 rounded-md"></Skeleton>
        </header>
        <div className="flex flex-col mt-4 gap-4 items-center justify-center w-full"></div>
      </div>
    </div>
  );
}

export default ProblemSkeleton;
