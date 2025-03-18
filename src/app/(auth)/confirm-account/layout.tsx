import React from "react";

function ConfirmAccountLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="max-w-[1600px] mx-auto w-full">{children}</section>
  );
}

export default ConfirmAccountLayout;
