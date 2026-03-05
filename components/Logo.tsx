"use client";

import { motion } from "framer-motion";

// ─── SQUARE MARK (for small icon contexts) ───────────────────────────────────
export function PlizioMark({ size = 64, className = "" }: { size?: number; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/icon-512.png" alt="Plizio" width={size} height={size} className={className} />;
}

// ─── FULL LOGO (homepage) ─────────────────────────────────────────────────────

const LETTER_COLORS = ["#FF2D78", "#00D4FF", "#00FF88", "#FFD700", "#B44DFF", "#FF2D78"];
const LETTERS = ["P", "L", "I", "Z", "I", "O"];

export default function Logo() {
  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Real logo image (static export: sima img tag kell, next/image nem működik) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 175, damping: 14, delay: 0.1 }}
        style={{ filter: "drop-shadow(0 0 28px rgba(44,111,255,0.45))" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo_plizio.webp"
          alt="Plizio"
          className="w-[220px] sm:w-[280px]"
        />
      </motion.div>

      {/* Színes PLIZIO wordmark */}
      <div className="flex items-center gap-0.5">
        {LETTERS.map((letter, i) => (
          <motion.span
            key={i}
            className="text-5xl sm:text-6xl font-black tracking-wider select-none"
            style={{
              color: LETTER_COLORS[i],
              textShadow: `0 0 12px ${LETTER_COLORS[i]}90, 0 0 24px ${LETTER_COLORS[i]}40`,
            }}
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i + 0.35, duration: 0.4, type: "spring" }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Tagline */}
      <motion.p
        className="text-white/25 text-[10px] tracking-[0.25em] uppercase font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        play · learn · think
      </motion.p>
    </motion.div>
  );
}
