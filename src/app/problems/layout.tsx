import Navbar from "@/components/(landingPage)/navbar/navbar";
import React from "react";

function ProblemsPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}

export default ProblemsPageLayout;
