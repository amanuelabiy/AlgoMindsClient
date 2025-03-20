"use client";

import useAuth from "@/app/hooks/useAuth";
import DefaultSkeleton from "@/components/loadingStates/Landing/DefaultSkeleton";
import { APIRefresh } from "@/lib/axios-client";
import { usePathname, useRouter } from "next/navigation";
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

export type User = {
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

const publicRoutes = [
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
  const [refreshing, setRefreshing] = useState(true);
  const { data: clientUser, error, isLoading, isFetching, refetch } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (clientUser) {
      setUser(clientUser.data.user);
    }
  }, [clientUser]);

  useEffect(() => {
    const refreshSession = async () => {
      try {
        if (!clientUser) {
          // Attempt to Refresh Token if it exists
          const response = await APIRefresh.get("/auth/refresh");
          if (response?.data?.accessToken) {
            console.log("Token refreshed successfully!");
            await refetch(); // **Wait for refetch to complete**
          } else {
          }
          // We only check public routes because middleware will redirect to home if user is not authenticated
          if (pathname && publicRoutes.includes(pathname)) {
            router.replace("/");
          }
        }
      } catch (error) {
        console.log("Session refresh failed, user is not authenticated.");
      } finally {
        setRefreshing(false);
      }
    };

    refreshSession();
  }, [clientUser]);

  if (refreshing || isLoading) return <DefaultSkeleton />;

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
