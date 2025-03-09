"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { addToWaitListMutationFn, AddToWaitListType } from "@/lib/waitlist/api";
import { emailSchema } from "@/schema/waitlist-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IoIosCheckmarkCircleOutline, IoIosMail } from "react-icons/io";

function EmailMessages() {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AddToWaitListType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(emailSchema),
  });

  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: addToWaitListMutationFn,
  });

  const onSubmit: SubmitHandler<AddToWaitListType> = async (
    data: AddToWaitListType
  ) => {
    mutate(data, {
      onSuccess: (res) => {
        reset({ email: "" });
      },
      onError: (error) => {
        setError("root", {
          message: error.message,
        });
      },
    });
  };

  const formIsSubmitting = isSubmitting || isPending;
  const displayRootError = errors.root?.message && !errors.email?.message;
  const displayEmailError = errors.email?.message && !errors.root?.message;

  return (
    <div className="flex flex-row justify-center items-center h-auto w-full bg-purpleBlue bg-cover bg-center bg-no-repeat p-16 lg:py-20 lg:px-40">
      <div className="flex flex-row justify-between items-center max-w-screen-lg max-h-full bg-lighterPurpleBlue rounded-[12px] overflow-auto shadow-2xl">
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
            Be the first to experience AlgoAI! Sign up now to get early access
            and exclusive updates!{" "}
          </p>
          <form className="relative w-full" onSubmit={handleSubmit(onSubmit)}>
            {/*Disables blue color on autofill */}
            <style jsx>{`
              input:-webkit-autofill,
              input:-webkit-autofill:hover,
              input:-webkit-autofill:focus,
              input:-webkit-autofill:active {
                -webkit-box-shadow: 0 0 0 30px white inset !important;
                box-shadow: 0 0 0 30px white inset !important;
                -webkit-text-fill-color: #000 !important;
                caret-color: #000 !important;
              }
            `}</style>
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
                className="bg-white rounded-[100px] w-full pl-4 border-none outline-none focus:outline-none p-4"
                autoComplete="off"
                type="email"
                {...register("email", { required: "Email is required" })}
              />
            </label>

            {displayEmailError && (
              <div className="flex justify-center w-full mt-4">
                <p className="text-red-500 text-sm overflow-hidden text-ellipsis max-w-[8rem] text-center">
                  {errors.email?.message}
                </p>
              </div>
            )}

            {displayRootError && (
              <div className="flex justify-center w-full mt-4">
                <p className="text-red-500 text-sm overflow-hidden text-ellipsis max-w-[8rem] text-center">
                  {errors.root?.message}
                </p>
              </div>
            )}

            {isSuccess && (
              <div className="flex justify-center w-full mt-4">
                <p className="text-secondaryColor text-sm flex flex-row items-center justify-center gap-1 overflow-hidden text-ellipsis text-center">
                  <span className="font-extrabold text-xl">
                    <IoIosCheckmarkCircleOutline />
                  </span>{" "}
                  Successfully added to waitlist!
                </p>
              </div>
            )}

            <Button
              type="submit"
              className="text-white text-xl mt-4 w-full font-medium leading-none py-6 px-10 transition-all duration-200 hover:scale-105 hover:z-10 hover:shadow-lg active:scale-100 rounded-3xl bg-purpleCustom shadow-2xl hover:bg-purpleCustom"
            >
              Join Waitlist
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EmailMessages;
