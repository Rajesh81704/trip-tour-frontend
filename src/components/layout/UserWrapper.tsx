"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector, checkAuthStatus } from "@/store";

interface UserWrapperProps {
  children: React.ReactNode;
}

export function UserWrapper({ children }: UserWrapperProps) {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.auth);

  useEffect(() => {
    // Check authentication status on component mount
    dispatch(checkAuthStatus());
  }, [dispatch]);

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
