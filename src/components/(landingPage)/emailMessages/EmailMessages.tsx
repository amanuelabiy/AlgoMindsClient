import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import React from "react";
import { IoIosMail } from "react-icons/io";

function EmailMessages() {
  return (
    <div className="flex flex-row justify-center items-center h-auto w-full bg-purpleBlue bg-cover bg-center bg-no-repeat p-16 lg:py-20 lg:px-40">
      <div className="flex flex-row justify-between items-center max-w-screen-lg max-h-full bg-lighterPurpleBlue rounded-[12px]">
        <div className="hidden sm:flex sm:flex-row sm:justify-center sm:items-center p-8">
          <Image
            width={100000000}
            height={500}
            alt="announcement-icon"
            src="/assets/images/announcementIcon.png"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col gap-6 justify-center items-center p-4 lg:p-8">
          <h1 className="text-primaryColor text-3xl lg:text-5xl font-bold text-center">
            Join The Waitlist!
          </h1>
          <p className="text-[rgba(44,62,80,0.80)] font-roboto text-sm font-medium text-center">
            {" "}
            Be the first to experience AlgoRivals! Sign up now to get early
            access and exclusive updates!{" "}
          </p>
          <div className="relative w-full">
            <label
              htmlFor="email-input"
              className="flex items-center bg-white rounded-[100px] w-full p-2 border-none focus-within:ring-2 focus-within:ring-blue-500 hover:shadow-lg hover:cursor-text"
            >
              <Label
                htmlFor="email-input"
                className="bg-purpleCustom flex items-center justify-center w-14 h-12 rounded-full hover:cursor-pointer transition-transform duration-200 hover:translate-y-[-2px]"
              >
                <IoIosMail className="text-xl text-white" />
              </Label>
              <input
                id="email-input"
                placeholder="Enter your email address here"
                className="bg-white rounded-[100px] w-full pl-4 border-none outline-none focus:outline-none"
                autoComplete="off"
                type="email"
              />
            </label>
          </div>
          <Button className="text-white text-xl w-full font-medium leading-none py-6 px-10 transition-all duration-200 hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100 rounded-3xl bg-purpleCustom shadow-2xl hover:bg-purpleCustom">
            Join Waitlist
          </Button>
        </div>
      </div>
    </div>
  );
}

export default EmailMessages;
