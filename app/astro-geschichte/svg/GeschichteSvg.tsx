"use client";
import { memo } from "react";

// ─── PYRAMID SVG ──────────────────────────────────────────────────────────

export const PyramidSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#fefce8" rx="12" />
      <path d="M 120 20 L 190 110 L 50 110 Z" fill="#facc15" stroke="#ca8a04" strokeWidth="2" />
      <path d="M 120 20 L 190 110 L 150 110 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="1" />
      <line x1="80" y1="110" x2="120" y2="20" stroke="#ca8a04" strokeWidth="0.5" opacity="0.3" />
      <line x1="100" y1="110" x2="120" y2="20" stroke="#ca8a04" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
});

// ─── GREEK TEMPLE SVG ──────────────────────────────────────────────────────

export const TempleSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#f8fafc" rx="12" />
      <rect x="60" y="100" width="120" height="15" fill="#94a3b8" />
      <path d="M 50 40 L 120 15 L 190 40 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
      <rect x="65" y="40" width="110" height="8" fill="#94a3b8" />
      {[75, 95, 120, 145, 165].map((x, i) => (
        <rect key={i} x={x - 4} y="48" width="8" height="52" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1" />
      ))}
    </svg>
  );
});

// ─── ROMAN COLUMN SVG ──────────────────────────────────────────────────────

export const ColumnSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#f1f5f9" rx="12" />
      <g transform="translate(120, 70)">
        <rect x="-20" y="-50" width="40" height="10" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
        <rect x="-15" y="-40" width="30" height="80" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
        <rect x="-20" y="40" width="40" height="10" rx="2" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
        {[ -8, 0, 8 ].map((x, i) => (
          <line key={i} x1={x} y1="-40" x2={x} y2="40" stroke="#94a3b8" strokeWidth="1" />
        ))}
      </g>
    </svg>
  );
});

// ─── KNIGHT SVG ────────────────────────────────────────────────────────────

export const KnightSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#f5f3ff" rx="12" />
      <g transform="translate(120, 70)">
        {/* Helmet */}
        <path d="M -15 -30 L 15 -30 L 15 -5 A 15 15 0 0 1 -15 -5 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
        <rect x="-10" y="-20" width="20" height="3" fill="#1e293b" />
        {/* Plume */}
        <path d="M 0 -30 Q 15 -45 30 -35" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
        {/* Body */}
        <rect x="-20" y="0" width="40" height="45" rx="5" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
        {/* Shield */}
        <path d="M 25 10 L 50 10 L 50 35 Q 37.5 50 25 35 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
        <path d="M 37.5 10 L 37.5 43" stroke="#fff" strokeWidth="2" opacity="0.5" />
      </g>
    </svg>
  );
});

// ─── SHIELD SVG ────────────────────────────────────────────────────────────

export const ShieldSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#fff1f2" rx="12" />
      <g transform="translate(120, 70)">
        <path d="M -30 -40 L 30 -40 L 30 10 Q 30 40 0 55 Q -30 40 -30 10 Z" fill="#be185d" stroke="#881337" strokeWidth="3" />
        <path d="M 0 -40 L 0 55" stroke="#9d174d" strokeWidth="2" opacity="0.5" />
        <path d="M -30 0 L 30 0" stroke="#9d174d" strokeWidth="2" opacity="0.5" />
        <circle cx="0" cy="0" r="10" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
      </g>
    </svg>
  );
});

// ─── SCROLL SVG ────────────────────────────────────────────────────────────

export const ScrollSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#fff7ed" rx="12" />
      <g transform="translate(120, 70)">
        <rect x="-50" y="-40" width="100" height="80" fill="#fed7aa" rx="2" />
        <rect x="-60" y="-45" width="15" height="90" rx="5" fill="#ea580c" />
        <rect x="45" y="-45" width="15" height="90" rx="5" fill="#ea580c" />
        {[ -25, -10, 5, 20 ].map((y, i) => (
          <line key={i} x1="-35" y1={y} x2="35" y2={y} stroke="#c2410c" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
        ))}
      </g>
    </svg>
  );
});
