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
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, error, isLoading, isFetching, refetch } = useAuth();
  const [user, setUser] = useState<User | null>(data?.data?.user ?? null);

  useEffect(() => {
    if (data?.data?.user) {
      setUser(data.data.user);
    }
  }, [data]);

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
