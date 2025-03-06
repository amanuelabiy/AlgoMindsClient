"use client";
import FeaturesCarousel from "./featuresCarousel/FeaturesCarousel";

function Features() {
  return (
    <div className="h-auto w-full bg-neutralLightColor bg-cover bg-center bg-no-repeat py-20">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-[rgba(44,62,80,0.7)] text-center text-[24px] font-semibold leading-normal">
          Feature
        </p>
        <h1 className="text-primaryColor text-center text-[46px] font-bold leading-normal">
          Our Special Features
        </h1>
        <FeaturesCarousel />
      </div>
    </div>
  );
}

export default Features;
