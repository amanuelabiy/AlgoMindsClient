import React from "react";
import { ProblemFaced } from "./ProblemsFacedBoxes";

interface ProblemsFacedBoxProps {
  problem: ProblemFaced;
  index: number;
}

function ProblemsFacedBox({ problem, index }: ProblemsFacedBoxProps) {
  const { icon, name, description } = problem;

  return <div className="rounded-20px bg-white flex-shrink-0"></div>;
}

export default ProblemsFacedBox;
