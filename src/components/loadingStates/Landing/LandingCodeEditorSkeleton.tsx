import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function LandingCodeEditorSkeleton() {
  return (
    <div className="flex flex-col w-full p-4 gap-4">
      {/* Simulating Code Editor Header */}
      <Skeleton className="w-32 h-8 rounded-md" />
      {/* Simulating Monaco Editor */}
      <Skeleton className="h-[45vh] w-full rounded-md" />
    </div>
  );
}

export default LandingCodeEditorSkeleton;
