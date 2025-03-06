"use client";

import { Card, CardHeader } from "@/components/ui/card";
import React from "react";
import { useAuthContext } from "@/context/authProvider";

function SettingsPage() {
  const { user, isLoading, error } = useAuthContext();

  // #TODO: Add loading page component
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // #TODO: Add loading error page component
  if (error || !user) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-neutralLightColor h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <Card className="bg-white rounded-[12px]">
          <CardHeader>
            <h1 className="flex flex-col items-center justify-center">
              {user.email}
              {user.firstName} {user.lastName}
            </h1>
          </CardHeader>
        </Card>
        <Card className="bg-white rounded-[12px]"></Card>
      </div>
    </div>
  );
}

export default SettingsPage;
