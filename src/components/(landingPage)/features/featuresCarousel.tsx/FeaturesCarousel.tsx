import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaCode } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { IoTrophyOutline } from "react-icons/io5";

interface Feature {
  icon: React.ReactElement<IconType>;
  description: string;
}

function FeaturesCarousel() {
  const features: Feature[] = [
    {
      icon: <FaCode />,
      description: "Real-time multiplayer coding challenges.",
    },
    {
      icon: <IoExtensionPuzzleOutline />,
      description: "Integrated problem repository.",
    },
    {
      icon: <HiOutlinePencilAlt />,
      description: "Interactive code editor (Monaco-based).",
    },
    {
      icon: <IoTrophyOutline />,
      description: "Live leaderboards and rankings.",
    },
  ];

  return (
    <Carousel className="relative flex justify-center items-center mt-8 w-64 h-64 md:w-3/4">
      <CarouselContent>
        {features.map((feature, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card className="rounded-[8px] flex-shrink w-full">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-8 h-64">
                  {/* Icon Container */}
                  <div
                    className="flex items-center justify-center h-16 w-16 rounded-[20px] p-[3rem] bg-opacity-20"
                    style={{ backgroundColor: "rgba(41, 128, 185, 0.20)" }}
                  >
                    <h1 className="text-4xl text-secondaryColor">
                      {feature.icon}
                    </h1>
                  </div>
                  {/* Feature Description */}
                  <h1 className="text-[rgba(52,73,94,0.7)] text-center text-[16px] font-roboto font-medium leading-[100%] mt-4">
                    {feature.description}
                  </h1>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[-48] top-1/2 -translate-y-1/2 shadow-lg lg:hidden" />
      <CarouselNext className="absolute right-[-48] top-1/2 -translate-y-1/2 shadow-lg lg:hidden" />
    </Carousel>
  );
}

export default FeaturesCarousel;
