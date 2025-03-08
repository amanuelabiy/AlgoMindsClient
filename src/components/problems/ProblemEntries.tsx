import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import FilterParameters from "./FilterParameters";
import ProblemsTable from "./ProblemsTable";

export interface Problem {
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
    <Card className="w-full max-w-screen-lg overflow-hidden">
      <CardHeader>
        <FilterParameters />
      </CardHeader>

      <CardContent className="w-full">
        <ProblemsTable problems={problems} />
      </CardContent>
    </Card>
  );
}

export default ProblemEntries;
