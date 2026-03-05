"use client";

import { motion } from "framer-motion";

// ─── ICON MARK ─────────────────────────────────────────────────────────────────
// Rounded square · gradient bg (blue→purple) · bold white P (open bowl) · white arrow

export function PlizioMark({ size = 64, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Plizio"
    >
      <defs>
        {/* Background: electric blue → deep purple */}
        <linearGradient id="pm-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%"   stopColor="#2C6FFF" />
          <stop offset="100%" stopColor="#8833EE" />
        </linearGradient>

        {/* Subtle drop shadow on the P */}
        <filter id="pm-pshadow" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="1" dy="2" stdDeviation="2.5"
            floodColor="#000066" floodOpacity="0.30" />
        </filter>

        {/* Soft glow on arrow */}
        <filter id="pm-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Background ── */}
      <rect width="100" height="100" rx="20" fill="url(#pm-bg)" />

      {/* ── Bold white P with open bowl (fill-rule evenodd) ──
          Outer silhouette:
            stem  x 11–40, y 12–90
            bowl  center(40,38) outer-r=26 → top(40,12) bottom(40,64) right(66,38)
          Inner hole (D-shape, right half of circle):
            center(40,34) r=12 → top(40,22) bottom(40,46) rightmost(52,34)
            Path: arc CW from top to bottom, close with straight line back
      */}
      <path
        fillRule="evenodd"
        fill="white"
        filter="url(#pm-pshadow)"
        d="
          M 11,12 L 40,12 A 26,26 0 0,1 40,64 L 40,90 L 11,90 Z
          M 40,22 A 12,12 0 0,1 40,46 L 40,22 Z
        "
      />

      {/* ── White arrow: lower-left (27,76) → upper-right (78,20) ──
          Direction unit vec  ≈ (0.68, -0.73)
          Perp unit vec       ≈ (0.73,  0.68)
          Arrow body ends 12px before tip.
          Arrowhead: apex(78,20), base-L(66,26), base-R(74,33)
      */}
      <g filter="url(#pm-glow)" opacity="0.96">
        {/* Body */}
        <line
          x1="27" y1="76"
          x2="70" y2="29"
          stroke="white"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        {/* Head */}
        <polygon points="78,20 66,26 74,33" fill="white" />
      </g>
    </svg>
  );
}

// ─── FULL LOGO (homepage) ─────────────────────────────────────────────────────

const LETTER_COLORS = ["#FF2D78", "#00D4FF", "#00FF88", "#FFD700", "#B44DFF", "#FF2D78"];
const LETTERS      = ["P", "L", "I", "Z", "I", "O"];

export default function Logo() {
  return (
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Icon mark */}
      <motion.div
        initial={{ scale: 0, rotate: -15 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 175, damping: 14, delay: 0.1 }}
        style={{ filter: "drop-shadow(0 0 26px rgba(44,111,255,0.55))" }}
      >
        <PlizioMark size={92} />
      </motion.div>

      {/* Wordmark */}
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
