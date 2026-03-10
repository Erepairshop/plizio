"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, signUp, useAuth } from "@/lib/supabase/useAuth";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

function translateAuthError(msg: string): string {
  const m = msg.toLowerCase();
  if (m.includes("invalid login credentials") || m.includes("invalid credentials")) {
    return "Hibás email cím vagy jelszó. Ha még nincs fiókod, kattints a \"Regisztrálj!\" gombra.";
  }
  if (m.includes("email not confirmed")) {
    return "Az email cím még nincs megerősítve. Ellenőrizd a postaládád és kattints a visszaigazoló linkre.";
  }
  if (m.includes("user already registered") || m.includes("already been registered")) {
    return "Ez az email cím már regisztrálva van. Jelentkezz be!";
  }
  if (m.includes("password should be")) {
    return "A jelszónak legalább 6 karakteresnek kell lennie.";
  }
  if (m.includes("unable to validate email")) {
    return "Érvénytelen email cím formátum.";
  }
  if (m.includes("rate limit") || m.includes("too many")) {
    return "Túl sok próbálkozás. Kérjük, várj egy percet.";
  }
  return msg;
}

export default function AuthPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
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
        const data = await signIn(email, password);
        // Teljes kétirányú sync: download + upload (helyi vendég adatok sem vesznek el)
        if (data.user) {
          const { syncToSupabase } = await import("@/lib/sync");
          await syncToSupabase(data.user.id).catch(() => {});
        }
      }
      router.push("/mathtest/");
    } catch (err: unknown) {
      const raw = err instanceof Error ? err.message : "Hiba történt";
      if (raw === "EMAIL_CONFIRMATION_REQUIRED") {
        setInfo("Visszaigazoló emailt küldtünk! Erősítsd meg, majd jelentkezz be.");
        setMode("login");
      } else {
        setError(translateAuthError(raw));
      }
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

          {info && (
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-4 text-blue-300 text-sm">
              ✉️ {info}
            </div>
          )}

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
                setInfo(null);
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
