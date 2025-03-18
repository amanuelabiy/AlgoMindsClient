import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Button } from "../ui/button";

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
  return (
    <div className="min-h-[25rem] py-16 px-6">
      <div className="flex flex-col sm:flex-row h-full w-full ml-auto mr-auto max-w-[100rem] sm:justify-center sm:w-[80%] rounded-[8rem] shadow-lg">
        <div className="flex flex-col justify-center sm:items-start md:pl-32 items-center sm:w-1/2 rounded-t-[8rem] sm:rounded-tr-[0rem] sm:rounded-bl-[8rem] gap-4 px-10 pt-20 pb-12">
          <h1 className="flex flex-row justify-center items-start text-black text-[36px] font-chakra font-bold leading-normal transition-all duration-200 hover:scale-105 hover:z-10 hover:cursor-pointer hover:shadow-none">
            <FontAwesomeIcon
              icon={faRobot}
              className="text-[#2980B9] mt-[3px] mr-[3px]"
            />
            Algo.
            <span className="text-[36px] font-chakra font-bold leading-normal text-secondaryColor">
              AI
            </span>
          </h1>
          <p className="text-primaryColor text-center sm:text-left text-[14px] font-normal leading-normal">
            Get early access and stay ahead—be the first to experience AlgoAI!
          </p>
          <div>
            <Button className="rounded-[35px] border-2 border-[#2980B9] bg-white hover:bg-gray-200 shadow-md button-transform shadow-[rgba(0,0,0,0.25)] px-6 py-2 text-[#21A7FF] text-center text-[24px] font-bold leading-normal">
              Join Waitlist
            </Button>
          </div>
          <ul className="flex flex-row gap-8">
            {socials.map((social) => (
              <li
                key={social.name}
                className="text-3xl font-extrabold text-primaryColor"
              >
                <a href={social.link}>{social.icon}</a>
              </li>
            ))}
          </ul>
          <h2 className="text-center justify-self-end">
            &copy; 2025 AlgoAI. All Rights Reserved.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row md:pr-64 justify-center sm:w-1/2 sm:items-start items-center gap-8 rounded-b-[8rem] sm:rounded-bl-[0rem] sm:rounded-tr-[8rem] px-20 pt-20 pb-12">
          <div className="flex flex-col justify-center sm:items-start gap-4">
            <h1 className="text-primaryColor text-center text-[24px] font-semibold leading-normal">
              Product
            </h1>
            <ul className="flex flex-col justify-center sm:items-start items-center gap-4">
              <li className="text-primaryColor sm:text-left text-center text-[15px] font-light leading-normal">
                Features
              </li>
              <li className="text-primaryColor sm:text-left text-center text-[15px] font-light leading-normal">
                About
              </li>
              <li className="text-primaryColor sm:text-left text-center text-[15px] font-light leading-normal">
                Pricing
              </li>
              <li className="text-primaryColor sm:text-left text-center text-[15px] font-light leading-normal">
                FAQ
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 justify-center sm:items-start">
            <h1 className="text-primaryColor text-center text-[24px] font-semibold leading-normal">
              Legal
            </h1>
            <ul className="flex flex-col justify-center items-center sm:items-start gap-4">
              <li className="text-primaryColor sm:text-left text-center text-[15px] font-light leading-normal">
                Terms of services
              </li>
              <li className="text-primaryColor sm:text-left text-center text-[15px] font-light leading-normal">
                Privacy Policy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

{
  /* <div className="flex gap-4 md:flex-row flex-col w-full bg-[#8bc1ee] md:h-20 h-auto px-4 py-16 md:py-4 md:px-16 md:justify-between md:items-center max-w-full">
<h1 className={styles.footerText}>
  &copy; 2025 AlgoAI. All Rights Reserved.{" "}
</h1>
<ul className={styles.footerText}>
  <Link href="/contact" className="mb-4 md:mb-0">
    Contact
  </Link>
  <Link href="#about" className="mb-4 md:mb-0">
    About
  </Link>
  <Link href="/privacy-policy" className="mb-4 md:mb-0">
    Privacy Policy
  </Link>
  <Link href="/terms-of-service" className="mb-4 md:mb-0">
    Terms of Service
  </Link>
</ul>

<ul className={styles.socialList}>
  {socials.map((social) => (
    <li
      key={social.name}
      className="text-xl font-extrabold text-[#ECF0F1] md:text-sm"
    >
      <a href={social.link}>{social.icon}</a>
    </li>
  ))}
</ul>
</div> */
}
