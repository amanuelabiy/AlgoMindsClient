import React from "react";
import { Card, CardHeader } from "../ui/card";
import FilterParameters from "./FilterParameters";

interface Problem {
  id: number;
  status: string;
  title: string;
  descripition: string;
  difficulty: string;
  tags: string[];
}

interface ProblemEntriesProps {
  problems: Problem[];
}

function ProblemEntries({ problems }: ProblemEntriesProps) {
  return (
    <Card>
      <CardHeader>
        {/*Filter Parameters */}
        <FilterParameters />
      </CardHeader>
    </Card>
  );
}

export default ProblemEntries;
