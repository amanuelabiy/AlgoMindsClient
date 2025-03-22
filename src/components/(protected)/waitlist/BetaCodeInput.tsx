import { Button } from "@/components/ui/button";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function BetaCodeInput() {
  return (
    <div className="navbar-bg p-4 drop-shadow-md flex flex-col gap-4 w-[80%] xs:w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%] rounded-xl">
      <div className="relative w-full">
        <FontAwesomeIcon
          icon={faKey}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500"
        />
        <input
          placeholder="Enter Beta Key"
          className="w-full h-12 text-sm border-2 border-primaryColor pl-10 rounded-xl dark:bg-[#1B2131] bg-[#F5F7FA] focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none"
        />
      </div>
      <div className="relative w-full">
        <Button className="w-full h-12  dark:text-white text-primaryColor text-base button-transform hover:shadow-none hover:border-none rounded-xl font-bold gradient-bg-light dark:gradient-bg-dark">
          Join Beta
        </Button>
      </div>
    </div>
  );
}

export default BetaCodeInput;
