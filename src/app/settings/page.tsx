"use client";

import { Card } from "@/components/ui/card";
import React from "react";
import { useAuthContext } from "@/context/authProvider";

function SettingsPage() {
  const { user, isLoading, error } = useAuthContext();

  console.log("user", user);

  return (
    <div className="bg-neutralLightColor h-screen">
      <div className="flex flex-col items-center justify-center h-full">
        <Card className="bg-white"></Card>
        <Card className="bg-white"></Card>
      </div>
    </div>
  );
}

export default SettingsPage;
