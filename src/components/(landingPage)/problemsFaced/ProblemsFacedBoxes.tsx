import React from "react";
import {
  faMagnifyingGlass,
  IconDefinition,
  faComment,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";
import ProblemsFacedBox from "./ProblemsFacedBox";
export interface ProblemFaced {
  id: number;
  icon: IconDefinition;
  name: string;
  description: string;
  index?: number;
}

const problems: ProblemFaced[] = [
  {
    id: 1,
    icon: faUserSlash,
    name: "Isolation",
    description:
      "Interview preparation can be lonely and frustrating. It’s easy to get demotivated.",
  },
  {
    id: 2,
    icon: faComment,
    name: "No Real Interview Practice",
    description:
      "Real interviews demand more than coding—they require clear communication and collaboration under pressure.",
  },
  {
    id: 3,
    icon: faMagnifyingGlass,
    name: "No Feedback",
    description:
      "Without feedback, you miss opportunities to optimize, debug, and improve your coding skills.",
  },
];

function ProblemsFacedBoxes() {
  return (
    <div className="flex flex-col gap-8 justify-start mt-4 items-start md:grid md:grid-cols-2 custom-lg:flex custom-lg:flex-row custom-lg:gap-8 custom-lg:justify-center custom-lg:items-center">
      {problems.map((problem, index) => (
        <ProblemsFacedBox key={problem.id} problem={problem} index={index} />
      ))}
    </div>
  );
}

export default ProblemsFacedBoxes;
