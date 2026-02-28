"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, signUp, useAuth } from "@/lib/supabase/useAuth";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AuthPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Already logged in → redirect to mathtest
  if (!loading && user) {
    router.push("/mathtest/");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      if (mode === "signup") {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
      router.push("/mathtest/");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Hiba történt";
      setError(msg);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
        <div className="text-white/50 text-lg">Betöltés...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft size={18} />
          Vissza
        </Link>

        {/* Card */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h1 className="text-2xl font-bold text-white text-center mb-2">
            {mode === "login" ? "Bejelentkezés" : "Regisztráció"}
          </h1>
          <p className="text-white/40 text-center text-sm mb-6">
            Plizio Assessment Engine
          </p>

          {error && (
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-white/60 text-sm mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00D4FF]/50"
                placeholder="email@example.com"
              />
            </div>

            <div>
              <label className="block text-white/60 text-sm mb-1">Jelszó</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-[#00D4FF]/50"
                placeholder="Min. 6 karakter"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-gradient-to-r from-[#00D4FF] to-[#B44DFF] text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {submitting
                ? "..."
                : mode === "login"
                  ? "Bejelentkezés"
                  : "Regisztráció"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => {
                setMode(mode === "login" ? "signup" : "login");
                setError(null);
              }}
              className="text-[#00D4FF] text-sm hover:underline"
            >
              {mode === "login"
                ? "Nincs fiókod? Regisztrálj!"
                : "Van fiókod? Jelentkezz be!"}
            </button>
          </div>
        </div>

        {/* Skip auth (guest mode - uses existing local flow) */}
        <div className="mt-4 text-center">
          <Link
            href="/mathtest/"
            className="text-white/30 text-xs hover:text-white/50 transition-colors"
          >
            Folytatás vendégként (helyi mentés)
          </Link>
        </div>
      </div>
    </div>
  );
}
