import { ReactNode } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = cookies();
  const accessToken = (await cookieStore).get("accessToken")?.value;

  if (!accessToken) {
    const resposne = await fetch(
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

    if (!resposne.ok) {
      redirect("/login");
    }
  }
  // Only render page if refresh succeeds
  return <>{children}</>;
}
