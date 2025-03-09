import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

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

const styles = {
  footerText:
    "flex md:flex-row lg:ml-16 flex-col justify-center items-center gap-4 md:text-sm text-xl text-center md:text-left text-[#ECF0F1] mb-4 md:mb-0",
  socialList: "flex flex-row gap-8 items-center justify-center p-8",
};

function Footer() {
  return (
    <div className="flex gap-4 md:flex-row flex-col w-full bg-primaryColor md:h-20 h-auto px-4 py-16 md:py-4 md:px-16 md:justify-between md:items-center max-w-full">
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
    </div>
  );
}

export default Footer;
