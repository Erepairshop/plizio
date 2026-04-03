"use client";
import { memo } from "react";

// ─── TRENCH SVG (WWI) ─────────────────────────────────────────────────────
export const TrenchSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#451a03" rx="12" />
    <path d="M 0 100 L 60 80 L 120 100 L 180 80 L 240 100 L 240 140 L 0 140 Z" fill="#78350f" stroke="#451a03" strokeWidth="2" />
    <path d="M 20 60 L 40 85 M 60 55 L 80 80 M 120 60 L 140 85" stroke="#94a3b8" strokeWidth="2" /> {/* Barbed wire symbols */}
    <circle cx="100" cy="40" r="5" fill="#f87171" opacity="0.6" /> {/* Explosion distant */}
  </svg>
));

// ─── WEIMAR SVG (NATIONAL ASSEMBLY) ───────────────────────────────────────
export const WeimarSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#f8fafc" rx="12" />
    <rect x="50" y="50" width="140" height="60" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
    <path d="M 45 50 L 120 20 L 195 50 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
    {[70, 100, 140, 170].map((x, i) => (
      <rect key={i} x={x-3} y="60" width="6" height="40" fill="#475569" opacity="0.5" />
    ))}
  </svg>
));

// ─── BERLIN WALL SVG ──────────────────────────────────────────────────────
export const BerlinWallSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#f1f5f9" rx="12" />
    {[40, 80, 120, 160, 200].map((x, i) => (
      <rect key={i} x={x-18} y="30" width="36" height="90" fill="#94a3b8" stroke="#64748b" strokeWidth="1" />
    ))}
    <path d="M 50 60 L 190 60 M 60 80 L 180 80" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" opacity="0.6" /> {/* Graffiti */}
    <path d="M 80 50 L 160 100" stroke="#22c55e" strokeWidth="2" opacity="0.4" />
  </svg>
));

// ─── REICHSTAG SVG ────────────────────────────────────────────────────────
export const ReichstagSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#f8fafc" rx="12" />
    <rect x="40" y="60" width="160" height="50" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
    <path d="M 90 60 Q 120 10 150 60 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" /> {/* Dome */}
    <rect x="115" y="20" width="10" height="15" fill="#475569" />
    <rect x="50" y="40" width="20" height="20" fill="#94a3b8" stroke="#475569" />
    <rect x="170" y="40" width="20" height="20" fill="#94a3b8" stroke="#475569" />
  </svg>
));

// ─── EU FLAG SVG ──────────────────────────────────────────────────────────
export const EUFlagSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#1e3a8a" rx="12" />
    {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => {
      const rad = (deg * Math.PI) / 180;
      const x = 120 + 35 * Math.cos(rad);
      const y = 70 + 35 * Math.sin(rad);
      return (
        <path key={i} d={`M ${x} ${y-4} L ${x+1} ${y-1} L ${y+4} ${y} L ${x+1} ${y+1} L ${x} ${y+4} L ${x-1} ${y+1} L ${x-4} ${y} L ${x-1} ${y-1} Z`} fill="#facc15" transform={`translate(${x},${y}) scale(0.5) translate(${-x},${-y})`} />
      );
    })}
  </svg>
));

// ─── PEACE DOVE SVG ───────────────────────────────────────────────────────
export const PeaceDoveSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#f0f9ff" rx="12" />
    <path d="M 100 70 Q 120 40 160 60 Q 180 80 150 90 Q 120 100 100 70 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" /> {/* Body */}
    <path d="M 100 70 Q 70 50 80 90 Q 90 100 100 70 Z" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1" /> {/* Wing */}
    <path d="M 160 60 L 175 50" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" /> {/* Olive branch */}
    <circle cx="175" cy="50" r="2" fill="#16a34a" />
  </svg>
));
