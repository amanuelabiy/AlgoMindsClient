import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import FilterParameters from "./FilterParameters";
import ProblemsTable from "./ProblemsTable";
import { SearchParams } from "@/app/problems/page";

interface ProblemEntriesProps {
  searchParams: SearchParams;
}

function ProblemEntries({ searchParams }: ProblemEntriesProps) {
  return (
    <Card className="w-full max-w-screen-lg overflow-hidden">
      <CardHeader>
        <FilterParameters />
      </CardHeader>

      <CardContent className="w-full">
        <ProblemsTable searchParams={searchParams} />
      </CardContent>
    </Card>
  );
}

export default ProblemEntries;
