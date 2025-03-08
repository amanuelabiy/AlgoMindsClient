import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import React from "react";

function NavbarSkeleton() {
  return (
    <nav className="flex flex-row w-full bg-primaryColor h-20">
      <div className="flex flex-row w-full justify-between items-center p-8 md:px-16 md:mx-24">
        {/* Logo Skeleton */}
        <Skeleton className="h-6 w-40 rounded-md bg-gray-600" />

        {/* Mobile Menu Button Skeleton */}
        <Button className="bg-primaryColor cursor-pointer shadow-none rounded-md button-transform border-none hover:bg-white/10 md:hidden">
          <Skeleton className="w-6 h-6 rounded-full bg-gray-600" />
        </Button>

        {/* Auth Buttons Skeleton */}
        <div className="hidden md:flex flex-row gap-4">
          <Skeleton className="w-28 h-[25px] rounded-md bg-gray-600" />
          <Skeleton className="w-28 h-[25px] rounded-md bg-gray-600" />
        </div>
      </div>
    </nav>
  );
}

export default NavbarSkeleton;
