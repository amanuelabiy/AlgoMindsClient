"use client";

import dynamic from "next/dynamic";
import QueryProvider from "./query-provider";
import { usePathname } from "next/navigation";

const PageTransition = dynamic(() => import("@/context/page-transition"), {
  ssr: false,
});

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();

  return (
    <QueryProvider>
      <PageTransition key={pathName}>{children}</PageTransition>
    </QueryProvider>
  );
}
