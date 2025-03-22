import AuthNavbar from "@/components/(protected)/navbar/AuthNavbar";
import React from "react";

function WaitListPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="pt-5">
      <AuthNavbar />
      {children}
    </section>
  );
}

export default WaitListPageLayout;
