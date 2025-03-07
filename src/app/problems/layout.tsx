import Navbar from "@/components/(landingPage)/navbar/navbar";
import Footer from "@/components/footer/Footer";
import React from "react";

function ProblemsPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
}

export default ProblemsPageLayout;
