"use client";

import useAuth from "@/app/hooks/useAuth";
import React, { createContext, useContext } from "react";

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

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { data, error, isLoading, isFetching, refetch } = useAuth();
  const user = data?.data?.user;

  return (
    <AuthContext.Provider
      value={{ user, error, isLoading, isFetching, refetch }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const conext = useContext(AuthContext);
  if (!conext) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return conext;
};
