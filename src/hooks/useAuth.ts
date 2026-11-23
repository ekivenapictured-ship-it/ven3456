import React, { useState, useEffect, useCallback } from "react";
import { User, ViewType } from "../types";
import { LAST_ROUTE_STORAGE_KEY } from "../routes/routesConfig";
import { isSupabaseConfigured, supabase } from "../lib/supabaseClient";
import { useQueryClient } from "@tanstack/react-query";
import { restoreQueryCache } from "../lib/queryCachePersistence";
import { resolveAuthenticatedViewFromHash } from "./useAppRouting";



export interface UseAuthReturn {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  handleLoginSuccess: (user: User) => Promise<void>;
  handleLogout: () => void;
  hasPermission: (view: ViewType) => boolean;
}

export function useAuth(): UseAuthReturn {
  const queryClient = useQueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    try {
      const storedValue = window.localStorage.getItem("weddfin-isAuthenticated");
      return storedValue ? JSON.parse(storedValue) : false;
    } catch {
      return false;
    }
  });

  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const storedValue = window.localStorage.getItem("weddfin-currentUser");
      return storedValue ? JSON.parse(storedValue) : null;
    } catch {
      return null;
    }
  });

  const [users, setUsers] = useState<User[]>([]);

  // Supabase membuang sesi (dan memancarkan SIGNED_OUT) saat refresh token
  // ditolak, mis. kedaluwarsa, sudah dicabut, atau token dirotasi di perangkat
  // lain. Tanpa listener ini, flag autentikasi lokal tetap "true" sehingga UI
  // mengira masih login padahal seluruh request sudah 401.
  useEffect(() => {
    if (!isSupabaseConfigured) return;

    const { data } = supabase.auth.onAuthStateChange((event) => {
      if (event !== "SIGNED_OUT") return;
      window.setTimeout(() => {
        queryClient.clear();
        setIsAuthenticated(false);
        setCurrentUser(null);
      }, 0);
    });

    return () => data.subscription.unsubscribe();
  }, [queryClient]);

  useEffect(() => {
    if (!isSupabaseConfigured || !isAuthenticated) return;

    let isActive = true;
    supabase.auth.getSession().then(({ data, error }) => {
      if (!isActive) return;
      if (error) console.warn('[Auth] Failed to restore Supabase session:', error);
      if (!data.session) {
        queryClient.clear();
        setIsAuthenticated(false);
        setCurrentUser(null);
      }
    });

    return () => {
      isActive = false;
    };
  }, [isAuthenticated, queryClient]);

  useEffect(() => {
    window.localStorage.setItem(
      "weddfin-isAuthenticated",
      JSON.stringify(isAuthenticated),
    );
  }, [isAuthenticated]);

  useEffect(() => {
    window.localStorage.setItem(
      "weddfin-currentUser",
      JSON.stringify(currentUser),
    );
  }, [currentUser]);

  const handleLoginSuccess = useCallback(async (user: User) => {
    await queryClient.cancelQueries();
    queryClient.clear();
    try {
      await restoreQueryCache(queryClient, user.id);
    } catch (error) {
      console.warn('[QueryCache] Failed to restore user cache after login.', error);
    }
    setIsAuthenticated(true);
    setCurrentUser(user);
    try {
      const currentHash = window.location.hash;
      if (resolveAuthenticatedViewFromHash(currentHash)) {
        return;
      }
      const last = window.localStorage.getItem(LAST_ROUTE_STORAGE_KEY);
      if (
        last &&
        typeof last === "string" &&
        last.startsWith("#/") &&
        resolveAuthenticatedViewFromHash(last)
      ) {
        window.location.hash = last;
        return;
      }
    } catch (e) {
      console.warn("[Routing] Failed to read last route after login:", e);
    }

    window.location.hash = "#/dashboard";
  }, [queryClient]);

  const handleLogout = useCallback(async () => {
    try {
      // scope 'local' hanya membuang sesi di perangkat ini; scope default
      // ('global') mencabut refresh token di semua perangkat sehingga sesi
      // device lain gagal refresh dengan 400 pada load berikutnya.
      await supabase.auth.signOut({ scope: "local" });
    } catch (e) {
      console.warn("[Supabase] Logout error:", e);
    }
    
    queryClient.clear();
    setIsAuthenticated(false);
    setCurrentUser(null);
    try {
      window.localStorage.removeItem(LAST_ROUTE_STORAGE_KEY);
    } catch {}
    window.location.hash = "#/home";
  }, [currentUser, queryClient]);

  const hasPermission = useCallback(
    (view: ViewType) => {
      if (!currentUser) return false;
      if (currentUser.role === "Admin") return true;
      return currentUser.permissions?.includes(view) || false;
    },
    [currentUser],
  );

  return {
    isAuthenticated,
    setIsAuthenticated,
    currentUser,
    setCurrentUser,
    users,
    setUsers,
    handleLoginSuccess,
    handleLogout,
    hasPermission,
  };
}

export default useAuth;
