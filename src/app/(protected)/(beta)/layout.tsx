import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

export default async function BetaLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = cookies();

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/session/`,
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
    redirect("/waitlist");
  } else {
    const data = await response.json();
    if (!data.user.isBetaUser) {
      console.log("Redirecting to waitlist");
      redirect("/waitlist");
    }
  }

  return <>{children}</>;
}
