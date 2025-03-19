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
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import { container } from "@/utils/framerMotion/container";

function Navbar() {
  const { user, isLoading, refetch, setUser } = useAuthContext();
  const [mounted, setMounted] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();

  // Mobile Navbar Animation
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  // Disable body scroll when mobile nav is open
  useEffect(() => {
    if (mobileNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNav]);

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
  const checkpoint = "";
  const isLanding = pathname === "/";

  const displayGuestNavLinks = !user && displayButtons && isLanding;
  return (
    <motion.nav
      variants={isLanding ? container(0) : undefined}
      initial="hidden"
      animate="visible"
      className={`flex flex-row w-full ${isLanding ? "h-28" : "h-20 py-8"}`}
    >
      <div className="flex flex-row gap-4 w-full justify-between items-center px-8 p-8 lg:px-16 lg:mx-24">
        <div className="">
          <h1
            onClick={handleLogoClick}
            className="flex flex-row justify-center items-start text-black text-2xl sm:text-[36px] font-chakra font-bold leading-normal button-transform hover:cursor-pointer hover:shadow-none"
          >
            <FontAwesomeIcon
              icon={faRobot}
              className="text-[#2980B9] mt-[3px] mr-[3px]"
            />
            Algo
            <span className="font-chakra font-bold leading-normal text-secondaryColor">
              Minds
            </span>
          </h1>
        </div>

        <motion.button
          animate={mobileNav ? "open" : "closed"}
          onClick={() => toggleMobileNav()}
          className="z-[100] lg:hidden ml-auto flex flex-col space-y-1 cursor-pointer"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 5 },
            }}
            className="w-5 h-px block bg-primaryColor"
          ></motion.span>
          <motion.span
            variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
            className="w-5 h-px block bg-primaryColor"
          ></motion.span>
          <motion.span
            variants={{ closed: { rotate: 0 }, open: { rotate: -45, y: -5 } }}
            className="w-5 h-px block bg-primaryColor"
          ></motion.span>
        </motion.button>

        {/*Mobile Navbar hidden on Larger Screens */}
        <div className="lg:hidden absolute">
          <AnimatePresence>
            {mobileNav && (
              <MotionConfig
                transition={{
                  type: "spring",
                  bounce: 0.099,
                }}
              >
                <motion.div
                  key="mobile-nav"
                  variants={{
                    open: {
                      x: "0%",
                      transition: {
                        type: "spring",
                        bounce: 0.099,
                        when: "beforeChildren",
                        duration: 0.2,
                      },
                    },
                    closed: {
                      x: "-100%",
                      transition: {
                        type: "spring",
                        bounce: 0.099,
                        when: "afterChildren",
                        duration: 0.2,
                      },
                    },
                  }}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="fixed w-full h-full inset-0 bg-white flex flex-col justify-start items-start space-y-10 py-10 z-[50]"
                >
                  <motion.div
                    variants={{
                      open: {
                        y: "0%",
                        opacity: 1,
                        transition: { duration: 0.2 },
                      },
                      closed: {
                        y: "25%",
                        opacity: 0,
                        transition: { duration: 0.2 },
                      },
                    }}
                    className="flex flex-row justify-between items-center w-full px-6"
                  >
                    <h1
                      onClick={handleLogoClick}
                      className="flex flex-row justify-center items-start text-black text-2xl sm:text-[36px] font-chakra font-bold leading-normal button-transform hover:cursor-pointer hover:shadow-none"
                    >
                      <FontAwesomeIcon
                        icon={faRobot}
                        className="text-[#2980B9] mt-[3px] mr-[3px]"
                      />
                      Algo
                      <span className="font-chakra font-bold leading-normal text-secondaryColor">
                        Minds
                      </span>
                    </h1>
                  </motion.div>
                  <motion.div
                    className="flex-grow w-full"
                    variants={{
                      open: {
                        y: "0%",
                        opacity: 1,
                        transition: { duration: 0.2 },
                      },
                      closed: {
                        y: "25%",
                        opacity: 0,
                        transition: { duration: 0.2 },
                      },
                    }}
                  >
                    <motion.ul
                      variants={{
                        open: {
                          y: "0%",
                          opacity: 1,
                          transition: { duration: 0.2 },
                        },
                        closed: {
                          y: "25%",
                          opacity: 0,
                          transition: { duration: 0.2 },
                        },
                      }}
                      className="space-y-5 flex flex-col mt-4 justify-center items-start w-full"
                    >
                      {user ? (
                        <>
                          {AUTH_NAV_LINKS.map((link) => (
                            <Link
                              className="border-primaryColor border-opacity-10 p-2 hover:bg-gray-100 text-2xl font-bold text-primaryColor text-opacity-90 border-b-2 w-full"
                              key={link.id}
                              href={link.href}
                              onClick={() => toggleMobileNav()}
                            >
                              <li className="ml-2">{link.label}</li>
                            </Link>
                          ))}
                        </>
                      ) : (
                        <>
                          {GUEST_NAV_LINKS.map((link) => (
                            <Link
                              className="border-primaryColor border-opacity-10 p-2 hover:bg-gray-100 text-2xl font-bold text-primaryColor text-opacity-90 border-b-2 w-full"
                              key={link.id}
                              href={link.href}
                              onClick={() => toggleMobileNav()}
                            >
                              <li className="ml-2">{link.label}</li>
                            </Link>
                          ))}
                        </>
                      )}
                    </motion.ul>
                  </motion.div>
                  <motion.div
                    variants={{
                      open: {
                        y: "0%",
                        opacity: 1,
                        transition: { duration: 0.2 },
                      },
                      closed: {
                        y: "25%",
                        opacity: 0,
                        transition: { duration: 0.2 },
                      },
                    }}
                    className="self-end w-full left-[110px] flex flex-row justify-center items-center gap-4"
                  >
                    {user ? null : (
                      <Link href="/signup">
                        <Button
                          onClick={() => toggleMobileNav()}
                          className="w-28 h-[25px] hover:bg-secondaryColor bg-secondaryColor p-5 text-[#F5F5F5] text-md font-medium text-sm normal-case button-transform"
                        >
                          Get Started
                        </Button>
                      </Link>
                    )}
                  </motion.div>
                </motion.div>
              </MotionConfig>
            )}
          </AnimatePresence>
        </div>

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
                <div className="flex flex-row justify-between items-center ml-[4rem] mr-[4rem] custom-lg:ml-[0rem] custom-lg:mr-[8rem]">
                  {displayGuestNavLinks ? (
                    <>
                      {GUEST_NAV_LINKS.map((link) => (
                        <Link href={link.href} key={link.label}>
                          <Button
                            className={`w-24 h-[25px] text-[#492B2B] bg-transparent p-5 text-md font-medium leading-[20px] normal-case hover:bg-transparent button-transform shadow-none hover:shadow-none`}
                          >
                            {link.label}
                          </Button>
                        </Link>
                      ))}
                    </>
                  ) : null}
                </div>{" "}
                {isLanding ? (
                  <>
                    <Link href="/signup">
                      <Button className="w-28 h-[25px] hover:bg-secondaryColor bg-secondaryColor p-5 text-[#F5F5F5] text-md font-medium text-sm normal-case button-transform">
                        Get Started
                      </Button>
                    </Link>
                  </>
                ) : null}
              </div>
            )}
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
