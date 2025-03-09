import React from "react";
import { Card, CardHeader } from "../ui/card";

function StreakCounter() {
  return (
    <Card className="max-w-full overflow-auto">
      <CardHeader>
        <p className="text-7xl text-center">⚡</p>
        <p className="text-lg font-bold text-gray-800 text-center">
          You're on a 3 day streak
        </p>
        <p className="text-sm text-gray-500 text-center">
          Practice each day so your streak won't reset.
        </p>
      </CardHeader>
    </Card>
  );
}

export default StreakCounter;
