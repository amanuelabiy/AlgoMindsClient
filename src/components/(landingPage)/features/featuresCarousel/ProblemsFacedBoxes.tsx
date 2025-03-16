import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  faMagnifyingGlass,
  IconDefinition,
  faComment,
  faCompass,
} from "@fortawesome/free-solid-svg-icons";
import ProblemsFacedBox from "./ProblemsFacedBox";

export interface ProblemFaced {
  icon: IconDefinition;
  name: string;
  description: string;
  index?: number;
}

const problems: ProblemFaced[] = [
  {
    icon: faCompass,
    name: "No Guidance",
    description: "Integrated problem repository.",
  },
  {
    icon: faComment,
    name: "No Real Interview Practice",
    description:
      "Real interviews demand more than coding—they require clear communication and strategic questions to ask.",
  },
  {
    icon: faMagnifyingGlass,
    name: "No Feedback",
    description:
      "Without feedback, you miss opportunities to optimize, debug, and improve your coding skills.",
  },
];

function ProblemsFacedBoxes() {
  return (
    <div>
      {problems.map((problem, index) => (
        <ProblemsFacedBox problem={problem} index={index} />
      ))}
    </div>
  );
}

export default ProblemsFacedBoxes;

// {/* <Carousel className="relative flex justify-center items-center mt-8 w-64 h-64 md:w-3/4">
//       <CarouselContent>
//         {problems.map((feature, index) => (
//           <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
//             <div className="p-1">
//               <Card className="rounded-[8px] flex-shrink w-full">
//                 <CardContent className="flex flex-col items-center justify-center gap-4 p-8 h-64">
//                   {/* Icon Container */}
//                   <div
//                     className="flex items-center justify-center h-16 w-16 rounded-[20px] p-[3rem] bg-opacity-20"
//                     style={{ backgroundColor: "rgba(41, 128, 185, 0.20)" }}
//                   >
//                     <h1 className="text-4xl text-secondaryColor">
//                       {feature.icon}
//                     </h1>
//                   </div>
//                   {/* Feature Description */}
//                   <h1 className="text-[rgba(52,73,94,0.7)] text-center text-[16px] font-roboto font-medium leading-[100%] mt-4">
//                     {feature.description}
//                   </h1>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious className="absolute left-[-48] top-1/2 -translate-y-1/2 shadow-lg lg:hidden" />
//       <CarouselNext className="absolute right-[-48] top-1/2 -translate-y-1/2 shadow-lg lg:hidden" />
//     </Carousel> */}
