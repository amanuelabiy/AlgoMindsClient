"use client";

import { faRobot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div>
      <section className="flex flex-col justify-center items-center gap-12 pt-24">
        <Link href={"/"}>
          <h1
            className={`flex flex-row justify-center items-start text-black text-[124px] font-chakra font-bold leading-normal hover:shadow-none`}
          >
            <FontAwesomeIcon icon={faRobot} className="text-[#2980B9]" />
          </h1>
        </Link>
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-[#2980B9] font-extrabold text-4xl">404</h1>
          <h1 className="text-[#265e83] font-extrabold text-2xl">
            Page not found
          </h1>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
