import React from "react";

function VerifyEmailLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="max-w-[1600px] mx-auto w-full">{children}</section>
  );
}

export default VerifyEmailLayout;
