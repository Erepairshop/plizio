"use client";

import { motion } from "framer-motion";

// ─── ICON MARK ────────────────────────────────────────────────────────────────
// Rounded dark square · geometric P · lightning bolt in bowl · neon glow

export function PlizioMark({ size = 64, className = "" }: { size?: number; className?: string }) {
  const id = "pm"; // short unique prefix for gradient IDs
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
        {/* Background gradient */}
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#12122e" />
          <stop offset="100%" stopColor="#0A0A1A" />
        </linearGradient>

        {/* Lightning bolt gradient */}
        <linearGradient id={`${id}-bolt`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="100%" stopColor="#B44DFF" />
        </linearGradient>

        {/* Glow filter */}
        <filter id={`${id}-glow`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Border glow */}
        <filter id={`${id}-border-glow`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── Background ── */}
      <rect width="100" height="100" rx="22" fill={`url(#${id}-bg)`} />

      {/* ── Neon border ── */}
      <rect
        width="100" height="100" rx="22"
        fill="none"
        stroke="#00D4FF"
        strokeWidth="2"
        opacity="0.25"
        filter={`url(#${id}-border-glow)`}
      />

      {/* ── P letter (solid geometric, no inner hole — bolt fills it) ──
          Stem: x 14–38, y 12–88
          Bowl: center (38, 36), outer r=24
            top  = (38, 12)
            bottom = (38, 60)
            rightmost = (62, 36)
      */}
      <path
        d="M 14,88 L 38,88 L 38,60 A 24,24 0 0,1 38,12 L 14,12 Z"
        fill="white"
        opacity="0.96"
      />

      {/* ── Lightning bolt (inside the P bowl, x≈42-62, y≈16-58) ──
          Classic Z-shape pointing downward, confined to the semicircle.
      */}
      <polygon
        points="58,20 45,41 53,41 42,62 56,40 48,40"
        fill={`url(#${id}-bolt)`}
        filter={`url(#${id}-glow)`}
      />

      {/* ── Accent sparkles ── */}
      <circle cx="74" cy="18" r="2.2" fill="#FF2D78" opacity="0.75" />
      <circle cx="83" cy="36" r="1.6" fill="#00FF88" opacity="0.7" />
      <circle cx="78" cy="56" r="1.8" fill="#FFD700" opacity="0.65" />
      <circle cx="68" cy="72" r="1.4" fill="#B44DFF" opacity="0.6" />
    </svg>
  );
}

// ─── FULL LOGO (icon + wordmark + tagline) ────────────────────────────────────

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
      {/* Icon mark */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 14, delay: 0.1 }}
        style={{ filter: "drop-shadow(0 0 22px rgba(0,212,255,0.45))" }}
      >
        <PlizioMark size={88} />
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
