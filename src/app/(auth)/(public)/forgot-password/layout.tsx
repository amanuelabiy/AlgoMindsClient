import Navbar from "@/components/(landingPage)/navbar/navbar";
import React from "react";

function ForgotPasswordLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="max-w-[1600px] mx-auto w-full">
      <Navbar />
      {children}
    </section>
  );
}

export default ForgotPasswordLayout;
