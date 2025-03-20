import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ["/waitlist"];
const publicRoutes = [
  "/login",
  "/signup",
  "/confirm-account",
  "/forgot-password",
  "/reset-password",
  "/verify-mfa",
];

export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const accessToken = req.cookies.get("accessToken")?.value;

  if (isProtectedRoute && !accessToken) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublicRoute && accessToken) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}

// Ensure that the middleware is only applied to the routes that need it
export const config = {
  matcher: [
    "/waitlist",
    "/login",
    "/signup",
    "/confirm-account",
    "/forgot-password",
    "/reset-password",
    "/verify-mfa",
  ],
};
