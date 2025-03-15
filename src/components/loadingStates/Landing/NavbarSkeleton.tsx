import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import React from "react";

function NavbarSkeleton() {
  return (
    <nav className="flex flex-row w-full h-20 py-8 max-w-full">
      <div className="flex flex-row w-full justify-between items-center p-8 md:px-16 md:mx-24">
        {/* Logo Skeleton */}
        <Skeleton className="h-10 w-32 rounded-md" />

        {/* Mobile Menu Button Skeleton */}
        <Skeleton className="h-6 w-6 rounded-md lg:hidden" />

        {/* Right-side navigation buttons */}
        <div className="flex-row gap-4 hidden lg:flex">
          {/* Auth Navigation Links Skeleton */}
          <div className="flex flex-row gap-2">
            <Skeleton className="h-6 w-24 rounded-md" />
            <Skeleton className="h-6 w-24 rounded-md" />
            <Skeleton className="h-6 w-24 rounded-md" />
          </div>

          {/* Icons Skeleton */}
          <div className="flex flex-row gap-4">
            <Skeleton className="h-6 w-6 rounded-md" />
            <Skeleton className="h-6 w-6 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>

          {/* Get Started Button Skeleton */}
          <Skeleton className="h-6 w-28 rounded-md" />
        </div>
      </div>
    </nav>
  );
}

export default NavbarSkeleton;
