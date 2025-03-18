import Navbar from "@/components/(landingPage)/navbar/navbar";
import { maxScreenWidth } from "@/utils/app/constants";
import React from "react";

function SignUpPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className={`max-w-[${maxScreenWidth}px] mx-auto w-full`}>
      <Navbar />
      {children}
    </section>
  );
}

export default SignUpPageLayout;
