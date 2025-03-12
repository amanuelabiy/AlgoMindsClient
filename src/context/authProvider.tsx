"use client";

import useAuth from "@/app/hooks/useAuth";
import DefaultSkeleton from "@/components/loadingStates/Landing/DefaultSkeleton";
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
  user?: User | null;
  error: any;
  isLoading: boolean;
  isFetching: boolean;
  refetch: () => void;
  setUser: (user: User | null) => void;
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
  const [user, setUser] = useState<User | null>(null);
  const { data: clientUser, error, isLoading, isFetching, refetch } = useAuth();
  const [refreshLoading, setRefreshLoading] = useState(false);
  const [hasRefreshed, setHasRefreshed] = useState(false);
  const router = useRouter();
  const [pathname, setPathname] = useState<string | null>(null);

  const theClientUser = clientUser?.data.user;

  useEffect(() => {
    if (clientUser) {
      setUser(theClientUser);
    }
  }, [clientUser]);

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
      if (!theClientUser && protectedRoutes.includes(currentPath)) {
        router.replace("/");
      } else if (theClientUser && publicRoutes.includes(currentPath)) {
        router.replace("/problems");
      }
    }
  }, [theClientUser, isLoading, refreshLoading, router]);

  const SkeletonComponent = pathname
    ? loadingSkeletons[pathname] ?? DefaultSkeleton
    : DefaultSkeleton;

  if (isLoading || refreshLoading) {
    return <SkeletonComponent />;
  }

  return (
    <AuthContext.Provider
      value={{ user, error, isLoading, isFetching, refetch, setUser }}
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
