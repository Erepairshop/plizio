"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";
import { setUsername } from "@/lib/username";

interface UsernameModalProps {
  onDone: (name: string) => void;
}

export default function UsernameModal({ onDone }: UsernameModalProps) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length < 2) {
      setError("Min. 2 karakter");
      return;
    }
    if (trimmed.length > 16) {
      setError("Max. 16 karakter");
      return;
    }
    setUsername(trimmed);
    onDone(trimmed);
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
          <h2 className="text-white font-bold text-lg">Udvozlunk!</h2>
          <p className="text-white/30 text-xs text-center">Add meg a jatekosneved</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
          <input
            type="text"
            value={name}
            onChange={(e) => { setName(e.target.value); setError(""); }}
            placeholder="Jatekosnev..."
            maxLength={16}
            autoFocus
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-center text-lg font-bold placeholder:text-white/20 focus:outline-none focus:border-neon-blue/40"
            style={{ letterSpacing: "0.05em" }}
          />

          {error && (
            <span className="text-neon-pink text-xs text-center">{error}</span>
          )}

          <motion.button
            type="submit"
            className="bg-neon-blue/15 border border-neon-blue/40 text-neon-blue font-bold text-sm py-3 rounded-xl"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Menjunk!
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
