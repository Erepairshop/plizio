"use client";

import { motion } from "framer-motion";

export function PlizioMark({ size = 64, className = "" }: { size?: number; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/icon-512.png" alt="Plizio" width={size} height={size} className={className} />;
}

const LETTER_COLORS = ["#FF2D78", "#00D4FF", "#00FF88", "#FFD700", "#B44DFF", "#FF2D78"];
const LETTERS = ["P", "L", "I", "Z", "I", "O"];

export default function Logo() {
  return (
    <motion.div
      className="flex flex-row items-center gap-3"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Ikon — bal oldal, kicsi */}
      <motion.div
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.1 }}
        style={{ filter: "drop-shadow(0 0 16px rgba(44,111,255,0.55))" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo_plizio.webp"
          alt="Plizio"
          className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
        />
      </motion.div>

      {/* Wordmark — jobb oldal */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center gap-[1px]">
          {LETTERS.map((letter, i) => (
            <motion.span
              key={i}
              className="text-3xl sm:text-4xl font-black tracking-wide select-none leading-none"
              style={{
                color: LETTER_COLORS[i],
                textShadow: `0 0 10px ${LETTER_COLORS[i]}80, 0 0 20px ${LETTER_COLORS[i]}30`,
              }}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i + 0.2, duration: 0.3, type: "spring" }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
        <motion.p
          className="text-white/30 text-[9px] tracking-[0.2em] uppercase font-semibold leading-none pl-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          play · learn · think
        </motion.p>
      </div>
    </motion.div>
  );
}
