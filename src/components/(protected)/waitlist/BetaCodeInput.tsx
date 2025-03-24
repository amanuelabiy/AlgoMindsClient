"use client";

import { Button } from "@/components/ui/button";
import { joinBetaMutationFn, JoinBetaType } from "@/lib/keys/api";
import { betaKeySchema } from "@/schema/key-schema";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

function BetaCodeInput() {
  const { mutate: joinBeta, isPending } = useMutation({
    mutationFn: joinBetaMutationFn,
  });

  const {
    register,
    handleSubmit,
    setError,
    setFocus,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<JoinBetaType>({
    defaultValues: {
      key: "",
    },
    resolver: zodResolver(betaKeySchema),
  });

  const onSubmit: SubmitHandler<JoinBetaType> = async (data: JoinBetaType) => {
    console.log("data", data);
    joinBeta(data, {
      onSuccess: (response) => {
        console.log("Successfully joined beta ", response);
      },
      onError: (error) => {
        setError("root", {
          message: error.message,
        });
      },
    });
  };

  return (
    <div className="navbar-bg p-4 drop-shadow-md flex flex-col gap-4 w-[80%] xs:w-[60%] sm:w-[50%] md:w-[40%] lg:w-[30%] xl:w-[20%] rounded-xl">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
        <div className="relative w-full">
          <FontAwesomeIcon
            icon={faKey}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500"
          />
          <input
            placeholder="Enter Beta Key"
            className="w-full h-12 text-sm border-2 border-primaryColor pl-10 rounded-xl dark:bg-[#1B2131] bg-[#F5F7FA] focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none"
            {...register("key")}
          />
        </div>

        {errors.root && (
          <span className="text-red-500 text-sm text-center font-bold">
            {errors.root.message}
          </span>
        )}

        <div className="relative w-full">
          {isPending ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-10 w-10 border-t-2 mt-4 border-b-2 border-blue-500" />
            </div>
          ) : (
            <Button className="w-full h-12  dark:text-white text-primaryColor text-base button-transform hover:shadow-none hover:border-none rounded-xl font-bold gradient-bg-light dark:gradient-bg-dark">
              Join Beta
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default BetaCodeInput;
