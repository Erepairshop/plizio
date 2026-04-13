"use client";

import { motion } from "framer-motion";
import { Gamepad2 } from "lucide-react";

export default function Logo() {
  const letters = "PLIZIO".split("");

  const colors = [
    "#FF2D78",
    "#00D4FF",
    "#00FF88",
    "#FFD700",
    "#B44DFF",
    "#FF2D78",
  ];

  return (
    <motion.div
      className="animate-float flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
      >
        <Gamepad2
          size={48}
          className="text-neon-blue"
          style={{ filter: "drop-shadow(0 0 12px rgba(0,212,255,0.6))" }}
        />
      </motion.div>

      <div className="flex items-center gap-0.5">
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            className="text-5xl sm:text-6xl font-black tracking-wider"
            style={{
              color: colors[i],
              textShadow: `0 0 10px ${colors[i]}80, 0 0 20px ${colors[i]}40`,
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.3, duration: 0.4, type: "spring" }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
