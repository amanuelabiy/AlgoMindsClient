import { maxScreenWidth } from "@/utils/app/constants";
import React from "react";

function ConfirmAccountLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className={`max-w-[${maxScreenWidth}px] mx-auto w-full`}>
      {children}
    </section>
  );
}

export default ConfirmAccountLayout;
