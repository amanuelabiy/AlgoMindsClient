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

  const isPublicRoute = publicRoutes.includes(path);
  const isProtectedRoute = protectedRoutes.includes(path);
  const accessToken = req.cookies.get("accessToken")?.value;
  const refreshToken = req.cookies.get("refreshToken")?.value;
  const isAuthorized = accessToken || refreshToken;

  if (isProtectedRoute && !isAuthorized) {
    return NextResponse.redirect(new URL("/login", req.nextUrl));
  }

  if (isPublicRoute && isAuthorized) {
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
