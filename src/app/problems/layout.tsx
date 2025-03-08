import Navbar from "@/components/(landingPage)/navbar/navbar";
import Footer from "@/components/footer/Footer";
import React from "react";

function ProblemsPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1"> {children}</main>
      <Footer />
    </section>
  );
}

export default ProblemsPageLayout;
