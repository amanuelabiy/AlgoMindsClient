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

interface FeaturesCarouselProps {
  windowWidth: number;
}

interface Feature {
  icon: React.ReactElement<IconType>;
  description: string;
}

function FeaturesCarousel({ windowWidth }: FeaturesCarouselProps) {
  const features: Feature[] = [
    {
      icon: <FaCode />,
      description: "Real-time multiplayer coding challenges.",
    },
  ];

  return (
    <Carousel className="mt-4">
      <CarouselContent>
        {features.map((feature, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col justify-center items-center p-10">
                  {feature.icon}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default FeaturesCarousel;
