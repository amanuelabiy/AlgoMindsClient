"use client";

import useAuth from "@/app/hooks/useAuth";
import DefaultSkeleton from "@/components/loadingStates/DefaultSkeleton";
import { APIRefresh, isTokenExpired } from "@/lib/axios-client";
import { loadingSkeletons } from "@/utils/loading/loadingSkeleton";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

type UserPrefrences = {
  id: string;
  userId: string;
  enable2FA: boolean;
  emailNotifications: boolean;
  twoFactorSecret: string | null;
  createdAt: string;
  updatedAt: string;
};

type User = {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  isEmailVerified: boolean;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
  userPreferences: UserPrefrences;
};

type AuthContextType = {
  user?: User;
  error: any;
  isLoading: boolean;
  isFetching: boolean;
  refetch: () => void;
};

const protectedRoutes = ["/sessions", "/problems", "/settings"];
const publicRoutes = [
  "/",
  "/login",
  "/signup",
  "/confirm-account",
  "forgot-password",
  "reset-password",
  "/verify-mfa",
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, error, isLoading, isFetching, refetch } = useAuth();
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [hasRefreshed, setHasRefreshed] = useState(false);
  const user = data?.data?.user;
  const router = useRouter();

  useEffect(() => {
    console.log("Auth State updated");
  }, [user]);

  const [pathname, setPathname] = useState<string | null>(null);

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const getAccessToken = () => {
    return document.cookie
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];
  };

  useEffect(() => {
    const accessToken = getAccessToken();

    const handleRefresh = async () => {
      if (hasRefreshed) return;

      try {
        setRefreshLoading(true);
        await APIRefresh.get("/auth/refresh");
        await refetch();
        setHasRefreshed(true);
        setRefreshLoading(false);
      } catch (error) {
        console.log("Failed to refresh token", error);
        setRefreshLoading(false);
      }
    };

    if (accessToken && isTokenExpired(accessToken) && !hasRefreshed) {
      handleRefresh();
    }
  }, [hasRefreshed, refetch]);

  useEffect(() => {
    const currentPath = window.location.pathname;

    if (!isLoading && !refreshLoading) {
      if (!user && protectedRoutes.includes(currentPath)) {
        router.replace("/");
      } else if (user && publicRoutes.includes(currentPath)) {
        router.replace("/problems");
      }
    }
  }, [user, isLoading, refreshLoading, router]);

  console.log("Pathname", pathname);

  const SkeletonComponent = pathname
    ? loadingSkeletons[pathname] ?? DefaultSkeleton
    : DefaultSkeleton;

  if (isLoading || refreshLoading) {
    return <SkeletonComponent />;
  }

  return (
    <AuthContext.Provider
      value={{ user, error, isLoading, isFetching, refetch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};
