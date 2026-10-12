import React, { createContext, useContext, useState, useEffect } from "react";
import { useUser as useClerkUser, useClerk } from "@clerk/clerk-react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // Normal Auth State (localStorage)
  const [normalUser, setNormalUser] = useState(() => {
    try {
      const stored = localStorage.getItem("rao_user");
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    try {
      return localStorage.getItem("rao_token") || null;
    } catch {
      return null;
    }
  });

  // Clerk Auth State (safe fallback if clerk is loaded)
  let clerkUser = null;
  let isClerkLoaded = true;
  let isClerkSignedIn = false;
  let clerkInstance = null;

  try {
    const clerkData = useClerkUser();
    clerkUser = clerkData.user;
    isClerkLoaded = clerkData.isLoaded;
    isClerkSignedIn = clerkData.isSignedIn;
    clerkInstance = useClerk();
  } catch (err) {
    // ClerkProvider might not be active or publishable key missing
    isClerkLoaded = true;
    isClerkSignedIn = false;
  }

  // Unified User Representation
  const currentUser = normalUser
    ? {
        ...normalUser,
        authType: "normal",
        imageUrl:
          normalUser.imageUrl ||
          normalUser.avatar ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(
            normalUser.username || normalUser.email || "User"
          )}&background=ea580c&color=fff&bold=true`,
        avatar:
          normalUser.avatar ||
          normalUser.imageUrl ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(
            normalUser.username || normalUser.email || "User"
          )}&background=ea580c&color=fff&bold=true`,
      }
    : isClerkSignedIn && clerkUser
    ? {
        _id: clerkUser.id,
        username: clerkUser.fullName || clerkUser.username || clerkUser.firstName || "User",
        email: clerkUser.primaryEmailAddress?.emailAddress || "",
        phoneNo:
          clerkUser.publicMetadata?.phoneNo ||
          clerkUser.primaryPhoneNumber?.phoneNumber ||
          "",
        city: clerkUser.publicMetadata?.city || "",
        requirementType: clerkUser.publicMetadata?.requirementType || "",
        authProvider: "clerk",
        authType: "clerk",
        imageUrl:
          clerkUser.imageUrl ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(
            clerkUser.fullName || clerkUser.username || "User"
          )}&background=ea580c&color=fff&bold=true`,
        avatar:
          clerkUser.imageUrl ||
          `https://ui-avatars.com/api/?name=${encodeURIComponent(
            clerkUser.fullName || clerkUser.username || "User"
          )}&background=ea580c&color=fff&bold=true`,
        role: clerkUser.publicMetadata?.role || "user",
      }
    : null;

  const isAuthenticated = Boolean(normalUser || isClerkSignedIn);

  const loginNormal = (userData, authToken) => {
    setNormalUser(userData);
    setToken(authToken);
    try {
      localStorage.setItem("rao_user", JSON.stringify(userData));
      if (authToken) localStorage.setItem("rao_token", authToken);
    } catch (e) {
      console.error("Storage error:", e);
    }
  };

  const logout = async () => {
    setNormalUser(null);
    setToken(null);
    try {
      localStorage.removeItem("rao_user");
      localStorage.removeItem("rao_token");
    } catch (e) {
      console.error("Storage error:", e);
    }

    if (isClerkSignedIn && clerkInstance) {
      try {
        await clerkInstance.signOut();
      } catch (e) {
        console.error("Clerk sign out error:", e);
      }
    }
  };

  const updateProfile = (updatedData) => {
    if (normalUser) {
      const merged = { ...normalUser, ...updatedData };
      setNormalUser(merged);
      try {
        localStorage.setItem("rao_user", JSON.stringify(merged));
      } catch (e) {
        console.error("Storage error:", e);
      }
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: currentUser,
        token,
        isAuthenticated,
        authType: normalUser ? "normal" : isClerkSignedIn ? "clerk" : null,
        isLoaded: isClerkLoaded,
        loginNormal,
        logout,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
