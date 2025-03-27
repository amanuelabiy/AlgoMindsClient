import { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ThemeProvider } from "@/components/ThemeProvider";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = cookies();
  const accessToken = (await cookieStore).get("accessToken")?.value;
  try {
    if (!accessToken) {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh`,
        {
          method: "GET",
          headers: {
            Cookie: (await cookieStore).toString(),
          },
          credentials: "include",
          cache: "no-store",
        }
      );

      if (!response.ok) {
        redirect("/login");
      }
    }
  } catch (error) {
    console.error("Server Request Error:", error);
  }

  // Only render page if refresh succeeds
  return (
    <section className="max-w-[1600px] mx-auto w-full min-h-screen">
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </section>
  );
}
