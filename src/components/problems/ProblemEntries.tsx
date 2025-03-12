import React, { Suspense } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import FilterParameters from "./FilterParameters";
import ProblemsTable from "./ProblemsTable";
import ProblemsTableLoading from "../loadingStates/Problems/ProblemsTableLoading";

function ProblemEntries() {
  return (
    <Card className="w-full max-w-screen-lg overflow-hidden">
      <CardHeader>
        <FilterParameters />
      </CardHeader>

      <CardContent className="w-full">
        <Suspense fallback={<ProblemsTableLoading />}>
          <ProblemsTable />
        </Suspense>
      </CardContent>
    </Card>
  );
}

export default ProblemEntries;
