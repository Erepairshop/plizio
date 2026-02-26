"use client";

import { motion } from "framer-motion";

export default function Logo() {
  const letters = "PLIZIO".split("");

  const colors = [
    "text-neon-pink",
    "text-neon-blue",
    "text-neon-green",
    "text-gold",
    "text-neon-purple",
    "text-neon-pink",
  ];

  const glows = [
    "text-glow-pink",
    "text-glow-blue",
    "text-glow-green",
    "",
    "",
    "text-glow-pink",
  ];

  return (
    <motion.div
      className="animate-float flex items-center justify-center gap-1"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          className={`text-5xl sm:text-6xl font-black tracking-wider ${colors[i]} ${glows[i]}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i, duration: 0.4, type: "spring" }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
