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
import { getInitials } from "@/utils/navbar/getInitials";
import UserProfilePicture from "./UserProfilePicture";

function Navbar() {
  const { user, isLoading, refetch, setUser } = useAuthContext();

  const [mounted, setMounted] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();

  // Smooth Scroll
  const handleGuestNavClick = (link: string) => {
    // If the link is the home page, scroll to the top
    if (link === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    let navLink;

    const isHash = link.startsWith("#");
    const isLink = link.startsWith("/");

    // If the link starts with #, scroll to the element with the id
    if (isHash) {
      navLink = link.slice(1);
      document.getElementById(navLink)?.scrollIntoView({ behavior: "smooth" });
    } else if (isLink) {
      // If valid link, push to the link
      router.push(link);
    } else {
      return;
    }
  };

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
    router.push("/");
  };

  const handleLogoutClick = async () => {
    logout();
  };

  const displayButtons = !isLoading && mounted;
  const isLanding = pathname === "/";

  const displayGuestNavLinks = displayButtons && isLanding;
  const displayProfilePicture = isLanding && user;

  return (
    <motion.nav
      variants={isLanding ? container(0) : undefined}
      initial="hidden"
      animate="visible"
      className={`flex flex-row w-full ${isLanding ? "h-28" : "h-20 py-8"}`}
    >
      <div className="container mx-auto flex flex-row gap-4 justify-between items-center px-4 sm:px-6 md:px-8 lg:px-24 py-8">
        <div className="">
          <h1
            onClick={handleLogoClick}
            className={`flex flex-row justify-center items-start text-black text-2xl sm:text-[36px] font-chakra font-bold leading-normal button-transform hover:cursor-pointer hover:shadow-none`}
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
                      className="space-y-0 flex flex-col mt-4 justify-center items-start w-full"
                    >
                      <>
                        {GUEST_NAV_LINKS.map((link) => (
                          <Link
                            className="border-primaryColor border-opacity-10 p-2 hover:bg-gray-100 text-2xl font-bold text-primaryColor text-opacity-90 border-b-2 w-full"
                            key={link.id}
                            href={link.href}
                            onClick={() => toggleMobileNav()}
                          >
                            <li className="">{link.label}</li>
                          </Link>
                        ))}
                      </>
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
                    {user ? (
                      <UserProfilePicture
                        handleLogoutClick={handleLogoutClick}
                        user={user}
                        toggleMobileNav={toggleMobileNav}
                      />
                    ) : (
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
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row justify-between items-center ml-[4rem] mr-[4rem] custom-lg:ml-[0rem] custom-lg:mr-[8rem]">
                {displayGuestNavLinks ? (
                  <>
                    {GUEST_NAV_LINKS.map((link) => (
                      <Button
                        onClick={() => handleGuestNavClick(link.href)}
                        key={link.label}
                        className={`w-24 h-[25px] text-[#492B2B] bg-transparent p-5 text-md font-medium leading-[20px] normal-case hover:bg-transparent button-transform shadow-none hover:shadow-none`}
                      >
                        {link.label}
                      </Button>
                    ))}
                  </>
                ) : null}
              </div>{" "}
              {displayProfilePicture ? (
                <UserProfilePicture
                  user={user}
                  handleLogoutClick={handleLogoutClick}
                />
              ) : isLanding ? (
                <>
                  <Link href="/signup">
                    <Button className="w-28 h-[25px] hover:bg-secondaryColor bg-secondaryColor p-5 text-[#F5F5F5] text-md font-medium text-sm normal-case button-transform">
                      Get Started
                    </Button>
                  </Link>
                </>
              ) : null}
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}

export default Navbar;
