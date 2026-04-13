"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, X, Star } from "lucide-react";
import { signUpWithEmail, signInWithEmail, signInWithGoogle } from "@/lib/auth";
import { uploadToSupabase } from "@/lib/sync";
import { addSpecialCards } from "@/lib/specialCards";

interface AuthModalProps {
  onClose: () => void;
  onSuccess: () => void;
  mode?: "register" | "login";
}

export default function AuthModal({ onClose, onSuccess, mode: initialMode = "register" }: AuthModalProps) {
  const [mode, setMode] = useState<"register" | "login">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (mode === "register") {
        const data = await signUpWithEmail(email, password);
        if (data.user) {
          // Registration bonus
          addSpecialCards(3);
          await uploadToSupabase(data.user.id);
          localStorage.setItem("plizio_registered", "true");
          onSuccess();
        }
      } else {
        const data = await signInWithEmail(email, password);
        if (data.user) {
          // Sync data from Supabase
          const { downloadFromSupabase } = await import("@/lib/sync");
          await downloadFromSupabase(data.user.id);
          onSuccess();
        }
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    setError(null);
    try {
      await signInWithGoogle();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong";
      setError(msg);
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-card border border-white/10 rounded-2xl p-6 max-w-sm w-full flex flex-col gap-5 relative"
          initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
          transition={{ type: "spring", damping: 20 }}
        >
          {/* Close */}
          <button onClick={onClose} className="absolute top-4 right-4 text-white/30 hover:text-white/60">
            <X size={18} />
          </button>

          {/* Title */}
          <div className="flex flex-col items-center gap-2">
            <span className="text-2xl">{mode === "register" ? "🔒" : "👋"}</span>
            <h2 className="text-white font-bold text-lg">
              {mode === "register" ? "Don't lose your progress!" : "Sign In"}
            </h2>
            {mode === "register" && (
              <div className="flex items-center gap-2 bg-[#E040FB]/10 border border-[#E040FB]/30 px-3 py-1.5 rounded-lg">
                <Star size={14} className="text-[#E040FB]" />
                <span className="text-[#E040FB] text-xs font-bold">+3 special cards</span>
              </div>
            )}
          </div>

          {/* Error */}
          {error && (
            <div className="bg-neon-pink/10 border border-neon-pink/30 rounded-xl px-4 py-2">
              <span className="text-neon-pink text-xs">{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="relative">
              <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#E040FB]/40"
              />
            </div>
            <div className="relative">
              <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#E040FB]/40"
              />
            </div>
            <motion.button
              type="submit"
              disabled={loading}
              className="bg-[#E040FB]/15 border border-[#E040FB]/40 text-[#E040FB] font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={16} />
              {loading ? "..." : mode === "register" ? "Register" : "Sign In"}
            </motion.button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-white/20 text-xs">OR</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Google */}
          <motion.button
            onClick={handleGoogle}
            disabled={loading}
            className="bg-white/5 border border-white/10 text-white/70 font-bold text-sm py-3 rounded-xl flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="text-lg">🔵</span>
            Google
          </motion.button>

          {/* Toggle mode */}
          <button
            onClick={() => setMode(mode === "register" ? "login" : "register")}
            className="text-white/30 text-xs hover:text-white/50 transition-colors"
          >
            {mode === "register" ? "Already have an account? Sign in" : "Don't have an account? Register"}
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
