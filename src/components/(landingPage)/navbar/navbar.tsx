"use client";

import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/authProvider";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { IoMenu as MobileMenu } from "react-icons/io5";

function Navbar() {
  const { user, isLoading } = useAuthContext();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayButtons = !isLoading && mounted;

  return (
    <nav className="flex flex-row w-full bg-primaryColor h-20">
      <div className="flex flex-row w-full justify-between items-center p-8 md:px-16 md:mx-24">
        <Link href="/">
          <h1 className="text-white font-roboto text-2xl font-medium button-transform hover:cursor-pointer hover:shadow-none">
            Algo
            <span className="font-roboto text-2xl font-medium text-secondaryColor">
              Rivals
            </span>
          </h1>
        </Link>
        {/*Mobile Navbar hidden on Larger Screens */}
        <Button className="bg-primaryColor cursor-pointer shadow-none rounded-md button-transform border-none hover:bg-white/10 md:hidden">
          <MobileMenu className="w-6 h-6" />
        </Button>

        {/**Sign Up and Login Buttons Hidden on Larger Screens*/}
        {displayButtons && (
          <div className="hidden md:flex flex-row gap-4">
            {user ? (
              <Button className="w-28 h-[25px] hover:bg-secondaryColor bg-secondaryColor p-5 text-[#F5F5F5] font-roboto text-md font-medium leading-[20px] normal-case button-transform">
                Logout
              </Button>
            ) : (
              <>
                {" "}
                <Link href="/login">
                  <Button className="w-28 h-[25px] bg-transparent p-5 text-[#F5F5F5] font-roboto text-md font-medium leading-[20px] normal-case hover:bg-transparent button-transform shadow-none hover:shadow-none">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="w-28 h-[25px] hover:bg-secondaryColor bg-secondaryColor p-5 text-[#F5F5F5] font-roboto text-md font-medium leading-[20px] normal-case button-transform">
                    Sign Up
                  </Button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
