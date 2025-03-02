import Navbar from "@/components/(landingPage)/navbar/navbar";
import React from "react";

function LoginPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <Navbar />
      {children}
    </section>
  );
}

export default LoginPageLayout;
