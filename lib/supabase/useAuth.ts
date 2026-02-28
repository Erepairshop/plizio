"use client";

import { useEffect, useState } from "react";
import { supabase } from "./client";
import type { User, Session } from "@supabase/supabase-js";

export interface AuthState {
  user: User | null;
  session: Session | null;
  loading: boolean;
}

export function useAuth(): AuthState {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session: s } }) => {
      setSession(s);
      setUser(s?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, s) => {
        setSession(s);
        setUser(s?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return { user, session, loading };
}

export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({ email, password });
  if (error) throw error;

  // Initialize user profile after signup
  if (data.user) {
    await supabase.rpc("initialize_user", {
      p_country: "HU",
      p_grade: 5,
    });
  }

  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;

  // Ensure profile exists
  await supabase.rpc("initialize_user", {
    p_country: "HU",
    p_grade: 5,
  });

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}
