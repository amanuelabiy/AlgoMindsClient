"use client";

import { Button } from "@/components/ui/button";
import { useAuthContext } from "@/context/authProvider";
import { logoutMutationFn } from "@/lib/auth/api";
import { isTokenExpired, APIRefresh } from "@/lib/axios-client";
import queryClient from "@/lib/queryClient";
import { AUTH_NAV_LINKS, GUEST_NAV_LINKS } from "@/utils/navbar/navigation";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { IoMenu as MobileMenu } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const { user, isLoading, refetch, setUser } = useAuthContext();
  const [mounted, setMounted] = useState<boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  const { mutate: logout } = useMutation({
    mutationFn: logoutMutationFn,
    onSettled: () => {
      queryClient.clear(); // Clear cache immediately
      sessionStorage.clear();
      localStorage.clear();
    },
    onSuccess: async () => {
      refetch();
      setUser(null);
      router.replace("/");
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogoClick = async (e: React.MouseEvent) => {
    if (!user) {
      router.push("/");
    }

    e.preventDefault();

    const accessToken = document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];

    if (isTokenExpired(accessToken)) {
      try {
        await APIRefresh.get("/auth/refresh");
        await refetch();
        router.push("/problems");
      } catch (error) {
        console.log("Failed to refresh token", error);
        router.push("/");
      }
    } else {
      router.push("/problems");
    }
  };

  const handleLogoutClick = async () => {
    logout();
  };

  const displayButtons = !isLoading && mounted;

  return (
    <nav className="flex flex-row w-full h-28 max-w-full">
      <div className="flex flex-row w-full justify-between items-center p-8 md:px-16 md:mx-24">
        <h1
          onClick={handleLogoClick}
          className="flex flex-row justify-center items-start text-black text-[36px] font-chakra font-bold leading-normal button-transform hover:cursor-pointer hover:shadow-none"
        >
          <FontAwesomeIcon
            icon={faRobot}
            className="text-[#2980B9] mt-[3px] mr-[3px]"
          />
          Algo.
          <span className="text-[36px] font-chakra font-bold leading-normal text-secondaryColor">
            AI
          </span>
        </h1>

        {/*Mobile Navbar hidden on Larger Screens */}
        <Button className="bg-transparent hover:bg-transparent cursor-pointer hover:shadow-none shadow-none rounded-md button-transform border-none lg:hidden">
          <MobileMenu className="w-6 h-6 text-black" />
        </Button>

        {/**Sign Up and Login Buttons Hidden on Larger Screens*/}
        {displayButtons && (
          <div className="hidden lg:flex flex-row gap-4">
            {user ? (
              <div className="flex flex-row justify-center items-center gap-4">
                <div className="flex flex-row gap-2 justify-center items-center">
                  {AUTH_NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.label}>
                      <Button
                        className={`w-28 h-[25px] bg-transparent p-5 ${
                          pathname === link.href
                            ? "text-white"
                            : "text-gray-400"
                        } text-md font-medium leading-[20px] normal-case hover:bg-transparent button-transform shadow-none hover:shadow-none`}
                      >
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </div>

                <div className="flex flex-row justify-center items-center gap-4">
                  <IoMdNotificationsOutline className="w-6 h-6 text-white hover:cursor-pointer hover:bg-transparent button-transform shadow-none hover:shadow-none" />
                  <CiSettings className="w-6 h-6 text-white hover:cursor-pointer hover:bg-transparent button-transform shadow-none hover:shadow-none" />
                  <Avatar className="w-8 h-8 hover:cursor-pointer hover:bg-transparent button-transform shadow-none hover:shadow-none">
                    <AvatarImage
                      src="https://github.com/shadcn.png"
                      alt="@shadcn"
                    />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
              </div>
            ) : (
              <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row justify-between items-center mr-[8rem]">
                  {GUEST_NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.label}>
                      <Button
                        className={`w-24 h-[25px] text-[#492B2B] bg-transparent p-5 text-md font-medium leading-[20px] normal-case hover:bg-transparent button-transform shadow-none hover:shadow-none`}
                      >
                        {link.label}
                      </Button>
                    </Link>
                  ))}
                </div>{" "}
                <Link href="/signup">
                  <Button className="w-28 h-[25px] hover:bg-secondaryColor bg-secondaryColor p-5 text-[#F5F5F5] text-md font-medium text-sm normal-case button-transform">
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
