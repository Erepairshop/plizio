"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ─── SQUARE MARK (for small icon contexts) ───────────────────────────────────
// Uses the center-cropped square version (icon-512.png)
export function PlizioMark({ size = 64, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/icon-512.png"
      alt="Plizio"
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}

// ─── FULL LOGO (homepage) ─────────────────────────────────────────────────────
// Shows the actual logo at natural 3:2 aspect ratio (transparent background)

export default function Logo() {
  return (
    <motion.div
      className="flex flex-col items-center gap-3"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Full logo image (natural 3:2 ratio, transparent bg) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 175, damping: 14, delay: 0.1 }}
        style={{ filter: "drop-shadow(0 0 28px rgba(44,111,255,0.45))" }}
      >
        <Image
          src="/logo_plizio.webp"
          alt="Plizio – play, learn, think"
          width={300}
          height={200}
          className="w-[240px] sm:w-[300px]"
          priority
        />
      </motion.div>

      {/* Tagline */}
      <motion.p
        className="text-white/25 text-[10px] tracking-[0.25em] uppercase font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        play · learn · think
      </motion.p>
    </motion.div>
  );
}
