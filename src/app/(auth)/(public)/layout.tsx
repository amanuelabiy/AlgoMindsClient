import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PublicLayout({
  children,
}: {
  children: React.ReactNode;
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

    if (resposne.ok) {
      redirect("/");
    }
  }

  // If accessToken exists or refresh fails, allow page to render
  return <>{children}</>;
}
