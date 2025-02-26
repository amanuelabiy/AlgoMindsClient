"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import FeaturesCarousel from "./featuresCarousel.tsx/FeaturesCarousel";

function Features() {
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="h-[400px] w-full bg-neutralLightColor bg-cover bg-center bg-no-repeat py-20">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-[rgba(44,62,80,0.7)] text-center text-[24px] font-semibold leading-normal">
          Feature
        </p>
        <h1 className="text-primaryColor text-center text-[46px] font-bold leading-normal">
          Our Special Features
        </h1>
        <FeaturesCarousel windowWidth={windowWidth} />
      </div>
    </div>
  );
}

export default Features;
