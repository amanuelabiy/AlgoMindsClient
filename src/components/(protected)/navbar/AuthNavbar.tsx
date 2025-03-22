import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRobot } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Link from "next/link";
import { ModeToggle } from "../theme/ModeToggle";

function AuthNavbar() {
  return (
    <nav className="navbar-bg flex flex-row justify-between items-center h-8 w-4/5 p-[32px] container mx-auto">
      {" "}
      <Link href="/">
        <h1 className="flex flex-row justify-center items-start text-xl font-chakra font-bold leading-normal button-transform hover:cursor-pointer hover:shadow-none">
          <FontAwesomeIcon
            icon={faRobot}
            className="text-secondaryColor mt-[3px] mr-[3px]"
          />{" "}
          Algo
          <span className="font-chakra font-bold leading-normal text-secondaryColor">
            Minds
          </span>
        </h1>
      </Link>
      <ModeToggle />
    </nav>
  );
}

export default AuthNavbar;
