import Navbar from "@/components/(landingPage)/navbar/navbar";
import React from "react";

function LoginPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="max-w-[1600px] mx-auto w-full">
      <Navbar />
      {children}
    </section>
  );
}

export default LoginPageLayout;
