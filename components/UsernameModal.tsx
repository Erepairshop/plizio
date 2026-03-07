"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2, Loader2 } from "lucide-react";
import { registerUsername, isNameAvailable, suggestNames } from "@/lib/username";

interface UsernameModalProps {
  onDone: (name: string) => void;
}

export default function UsernameModal({ onDone }: UsernameModalProps) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await tryRegister(name);
  };

  const tryRegister = async (n: string) => {
    const trimmed = n.trim();
    if (trimmed.length < 2) { setError("Min. 2 characters"); return; }
    if (trimmed.length > 16) { setError("Max. 16 characters"); return; }

    setLoading(true);
    setSuggestions([]);
    const result = await registerUsername(trimmed);
    setLoading(false);

    if (result.ok) {
      onDone(trimmed);
    } else if (result.error === "taken") {
      setError("Name already taken!");
      setSuggestions(suggestNames(trimmed));
    } else if (result.error === "invalid") {
      setError("Letters, numbers, _ and - only");
    } else if (result.error === "min2") {
      setError("Min. 2 characters");
    } else if (result.error === "max16") {
      setError("Max. 16 characters");
    } else {
      setError("Something went wrong, try again");
    }
  };

  // Live check on blur
  const handleBlur = async () => {
    const trimmed = name.trim();
    if (trimmed.length < 2) return;
    setChecking(true);
    const available = await isNameAvailable(trimmed);
    setChecking(false);
    if (!available) {
      setError("Name already taken!");
      setSuggestions(suggestNames(trimmed));
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-card border border-white/10 rounded-2xl p-8 max-w-xs w-full flex flex-col items-center gap-6"
        initial={{ scale: 0.8, y: 30 }} animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 15 }}
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <Gamepad2 size={48} className="text-neon-blue" style={{ filter: "drop-shadow(0 0 15px rgba(0,212,255,0.5))" }} />
        </motion.div>

        <div className="flex flex-col items-center gap-1">
          <h2 className="text-white font-bold text-lg">Welcome!</h2>
          <p className="text-white/30 text-xs text-center">Choose a unique player name</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); setError(""); setSuggestions([]); }}
              onBlur={handleBlur}
              placeholder="Player name..."
              maxLength={16}
              autoFocus
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-center text-lg font-bold placeholder:text-white/20 focus:outline-none focus:border-neon-blue/40"
              style={{ letterSpacing: "0.05em" }}
            />
            {checking && (
              <Loader2 size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 animate-spin" />
            )}
          </div>

          {error && (
            <span className="text-neon-pink text-xs text-center">{error}</span>
          )}

          {suggestions.length > 0 && (
            <div className="flex flex-wrap gap-1.5 justify-center">
              {suggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => { setName(s); setError(""); setSuggestions([]); tryRegister(s); }}
                  className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/60 text-xs hover:bg-neon-blue/10 hover:border-neon-blue/30 hover:text-white transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <motion.button
            type="submit"
            disabled={loading}
            className="bg-neon-blue/15 border border-neon-blue/40 text-neon-blue font-bold text-sm py-3 rounded-xl disabled:opacity-50"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {loading ? <Loader2 size={16} className="animate-spin mx-auto" /> : "Let's go!"}
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
