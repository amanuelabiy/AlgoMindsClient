"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { IoMenu as MobileMenu } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="flex flex-row w-full bg-primaryColor h-20">
      <div className="flex flex-row w-full justify-between items-center p-8 md:px-16 md:mx-auto md:max-w-7xl">
        <h1 className="text-white font-roboto text-2xl font-medium button-transform hover:cursor-pointer hover:shadow-none">
          Algo
          <span className="font-roboto text-2xl font-medium text-secondaryColor">
            Rivals
          </span>
        </h1>
        {/*Mobile Navbar hidden on Larger Screens */}
        <Button className="bg-primaryColor cursor-pointer shadow-md rounded-mdbutton-transform border-none hover:bg-white/10 md:hidden">
          <MobileMenu className="w-6 h-6" />
        </Button>

        {/**Sign Up and Login Buttons Hidden on Larger Screens*/}
        <div className="hidden md:flex flex-row gap-4">
          <Button className="w-28 h-[25px] bg-transparent p-5 text-[#F5F5F5] font-roboto text-md font-medium leading-[20px] normal-case hover:bg-transparent button-transform shadow-none hover:shadow-none">
            Login
          </Button>
          <Button className="w-28 h-[25px] hover:bg-secondaryColor bg-secondaryColor p-5 text-[#F5F5F5] font-roboto text-md font-medium leading-[20px] normal-case button-transform">
            Sign Up
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
