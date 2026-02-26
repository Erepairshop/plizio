"use client";

import { motion } from "framer-motion";

interface ModeSelectorProps {
  onSolo: () => void;
  onDuel: () => void;
}

export default function ModeSelector({ onSolo, onDuel }: ModeSelectorProps) {
  return (
    <motion.div
      className="flex items-center justify-center gap-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.4 }}
    >
      <motion.button
        onClick={onSolo}
        className="flex items-center gap-2 bg-neon-green/10 border border-neon-green/40 text-neon-green px-6 py-3 rounded-xl font-bold text-lg tracking-wider glow-green"
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,136,0.4)" }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl">▶</span>
        PLAY
      </motion.button>

      <motion.button
        onClick={onDuel}
        className="flex items-center gap-2 bg-neon-pink/10 border border-neon-pink/40 text-neon-pink px-6 py-3 rounded-xl font-bold text-lg tracking-wider glow-pink"
        whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,45,120,0.4)" }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl">⚡</span>
        DUEL
      </motion.button>
    </motion.div>
  );
}
