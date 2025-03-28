import React from "react";

function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <section>{children}</section>;
}

export default MainLayout;
