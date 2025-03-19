"use client";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "../ui/button";
import Link from "next/link";
import { useAuthContext } from "@/context/authProvider";
import { GUEST_NAV_LINKS, LEGAL_NAV_LINKS } from "@/utils/navbar/navigation";
import { useRouter } from "next/navigation";

export const socials = [
  {
    name: "Facebook",
    icon: <FaFacebook />,
    link: "#",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    link: "#",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "#",
  },
  {
    name: "Twitter",
    icon: <FaTwitter />,
    link: "#",
  },
];

function Footer() {
  const { user } = useAuthContext();
  const router = useRouter();

  const handleGuestNavClick = (link: string) => {
    if (user) {
      return;
    }
    // If the link is the home page, scroll to the top

    if (link === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    let navLink;

    const isHash = link.startsWith("#");
    const isLink = link.startsWith("/");
    const isNotHome = link !== "/";

    // If the link starts with #, scroll to the element with the id
    if (isHash) {
      navLink = link.slice(1);
      document.getElementById(navLink)?.scrollIntoView({ behavior: "smooth" });
    } else if (isLink && isNotHome) {
      // If valid link, push to the link
      router.push(link);
    } else {
      return;
    }
  };
  return (
    <div className="min-h-[25rem] py-16 px-4 md:px-6">
      <div className="flex gap-0 custom-lg:p-10 custom-lg:px-24 flex-col custom-lg:flex-row h-full w-full ml-auto mr-auto max-w-[100rem] custom-lg:justify-center custom-lg:w-[80%] rounded-[8rem] shadow-lg">
        <div className="flex flex-col justify-center custom-lg:items-start custom-lg:pl-32 items-center custom-lg:w-1/2 rounded-t-[8rem] custom-lg:rounded-tr-[0rem] custom-lg:rounded-bl-[8rem] gap-6 px-10 pt-20 pb-12">
          <h1 className="flex flex-row justify-center items-start text-black text-[36px] font-chakra font-bold leading-normal transition-all duration-200 hover:scale-105 hover:z-10 hover:cursor-pointer hover:shadow-none">
            <FontAwesomeIcon
              icon={faRobot}
              className="text-[#2980B9] mt-[3px] mr-[3px]"
            />
            Algo
            <span className="text-[36px] font-chakra font-bold leading-normal text-secondaryColor">
              Minds
            </span>
          </h1>
          <p className="text-primaryColor text-center custom-lg:text-left text-[14px] font-normal leading-normal">
            Get early access and stay ahead—be the first to experience
            AlgoMinds!
          </p>
          <div>
            <Link href={user ? "/" : "/signup"}>
              <Button className="rounded-[35px] border-2 border-[#2980B9] bg-white hover:bg-gray-50 shadow-none button-transform shadow-[rgba(0,0,0,0.25)] px-6 py-2 text-[#21A7FF] text-center text-lg font-bold leading-normal">
                Join Waitlist
              </Button>
            </Link>
          </div>
          <ul className="flex flex-row gap-8">
            {socials.map((social) => (
              <li
                key={social.name}
                className="text-3xl font-extrabold text-secondaryColor"
              >
                <a href={social.link}>{social.icon}</a>
              </li>
            ))}
          </ul>
          <h2 className="text-center justify-self-end text-secondaryColor">
            &copy; 2025 AlgoMinds. All Rights Reserved.
          </h2>
        </div>
        <div className="flex flex-col custom-lg:flex-row custom-lg:pr-52 justify-center custom-lg:w-1/2 custom-lg:items-start items-center gap-8 rounded-b-[8rem] custom-lg:rounded-bl-[0rem] custom-lg:rounded-tr-[8rem] px-20 pt-20 pb-12">
          <div className="flex flex-col justify-center custom-lg:items-start gap-4">
            <h1 className="text-primaryColor text-center text-[24px] font-semibold leading-normal">
              Product
            </h1>
            <ul className="flex flex-col justify-center custom-lg:items-start items-center gap-4">
              {GUEST_NAV_LINKS.map((link, index) => (
                <li
                  onClick={() => handleGuestNavClick(link.href)}
                  key={index}
                  className="text-primaryColor hover:cursor-pointer custom-lg:text-left text-center text-[15px] font-light leading-normal"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-4 justify-center custom-lg:items-start w-full">
            <h1 className="text-primaryColor text-center text-[24px] font-semibold leading-normal">
              Legal
            </h1>
            <ul className="flex flex-col justify-center items-center custom-lg:items-start gap-4 w-full">
              {LEGAL_NAV_LINKS.map((link, index) => (
                <Link href={link.href} key={index}>
                  <li className="text-primaryColor custom-lg:text-left text-center text-[15px] font-light leading-normal">
                    {link.label}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
