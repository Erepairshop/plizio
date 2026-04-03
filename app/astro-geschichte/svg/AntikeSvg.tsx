"use client";
import { memo } from "react";

// ─── PYRAMID SVG ──────────────────────────────────────────────────────────
export const PyramidSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#fefce8" rx="12" />
    <path d="M 120 20 L 190 110 L 50 110 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
    <path d="M 120 20 L 190 110 L 150 110 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
  </svg>
));

// ─── NILE SVG ─────────────────────────────────────────────────────────────
export const NileSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#ecfdf5" rx="12" />
    <path d="M 0 70 Q 60 20 120 70 T 240 70" fill="none" stroke="#3b82f6" strokeWidth="20" strokeLinecap="round" />
    <path d="M 180 40 L 180 60 M 170 50 L 190 50" stroke="#059669" strokeWidth="2" /> {/* Palm symbol */}
    <circle cx="180" cy="35" r="5" fill="#059669" />
  </svg>
));

// ─── COLOSSEUM SVG ────────────────────────────────────────────────────────
export const ColosseumSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#f1f5f9" rx="12" />
    <ellipse cx="120" cy="80" rx="80" ry="40" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
    <rect x="60" y="60" width="120" height="30" fill="#94a3b8" />
    {[70, 90, 110, 130, 150, 170].map((x, i) => (
      <path key={i} d={`M ${x-5} 75 Q ${x} 65 ${x+5} 75 L ${x+5} 90 L ${x-5} 90 Z`} fill="#f1f5f9" />
    ))}
  </svg>
));

// ─── ROMAN SOLDIER SVG ────────────────────────────────────────────────────
export const RomanSoldierSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#fef2f2" rx="12" />
    <g transform="translate(120, 70)">
      <rect x="-20" y="-30" width="40" height="60" rx="2" fill="#b91c1c" stroke="#7f1d1d" strokeWidth="2" /> {/* Scutum */}
      <circle cx="0" cy="0" r="8" fill="#fbbf24" stroke="#d97706" />
      <path d="M 25 -40 L 25 50" stroke="#475569" strokeWidth="3" strokeLinecap="round" /> {/* Pilum */}
      <path d="M -10 -45 L 10 -45 L 10 -30 L -10 -30 Z" fill="#94a3b8" stroke="#475569" /> {/* Helmet top */}
    </g>
  </svg>
));

// ─── GERMAN VILLAGE SVG ───────────────────────────────────────────────────
export const GermanVillageSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#f0fdf4" rx="12" />
    <path d="M 40 100 L 100 100 L 100 70 L 70 40 L 40 70 Z" fill="#78350f" stroke="#451a03" strokeWidth="2" />
    <path d="M 120 100 L 200 100 L 200 60 L 160 30 L 120 60 Z" fill="#92400e" stroke="#451a03" strokeWidth="2" />
    <line x1="20" y1="105" x2="220" y2="105" stroke="#166534" strokeWidth="4" />
  </svg>
));

// ─── SCROLL SVG ───────────────────────────────────────────────────────────
export const ScrollSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#fff7ed" rx="12" />
    <g transform="translate(120, 70)">
      <rect x="-50" y="-40" width="100" height="80" fill="#fed7aa" rx="2" />
      <rect x="-60" y="-45" width="15" height="90" rx="5" fill="#ea580c" />
      <rect x="45" y="-45" width="15" height="90" rx="5" fill="#ea580c" />
      {[ -20, -5, 10 ].map((y, i) => (
        <line key={i} x1="-30" y1={y} x2="30" y2={y} stroke="#c2410c" strokeWidth="1.5" opacity="0.4" />
      ))}
    </g>
  </svg>
));
