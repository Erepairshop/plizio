"use client";
import { memo } from "react";

// ─── CASTLE SVG ───────────────────────────────────────────────────────────
export const CastleSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#f8fafc" rx="12" />
    <rect x="60" y="40" width="120" height="70" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
    {[60, 90, 120, 150, 180].map((x, i) => (
      <rect key={i} x={x-5} y="30" width="10" height="10" fill="#94a3b8" stroke="#475569" />
    ))}
    <rect x="105" y="80" width="30" height="30" rx="15" fill="#475569" /> {/* Gate */}
  </svg>
));

// ─── KNIGHT SVG ────────────────────────────────────────────────────────────
export const KnightSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#f5f3ff" rx="12" />
    <g transform="translate(120, 70)">
      <path d="M -15 -30 L 15 -30 L 15 -5 A 15 15 0 0 1 -15 -5 Z" fill="#94a3b8" stroke="#475569" strokeWidth="2" />
      <rect x="-20" y="0" width="40" height="45" rx="5" fill="#cbd5e1" stroke="#475569" strokeWidth="2" />
      <path d="M 25 10 L 50 10 L 50 35 Q 37.5 50 25 35 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5" />
    </g>
  </svg>
));

// ─── MONASTERY SVG ────────────────────────────────────────────────────────
export const MonasterySvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#fffbeb" rx="12" />
    <path d="M 50 110 L 50 60 L 90 30 L 130 60 L 130 110 Z" fill="#d1d5db" stroke="#4b5563" strokeWidth="2" />
    <rect x="130" y="70" width="60" height="40" fill="#e5e7eb" stroke="#4b5563" strokeWidth="2" />
    <circle cx="90" cy="60" r="8" fill="none" stroke="#4b5563" strokeWidth="2" /> {/* Rose window */}
  </svg>
));

// ─── MEDIEVAL CITY SVG ────────────────────────────────────────────────────
export const MedievalCitySvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#f1f5f9" rx="12" />
    <path d="M 30 110 L 30 80 L 55 50 L 80 80 L 80 110 Z" fill="#fb7185" stroke="#881337" strokeWidth="2" />
    <path d="M 90 110 L 90 70 L 120 40 L 150 70 L 150 110 Z" fill="#f472b6" stroke="#831843" strokeWidth="2" />
    <path d="M 160 110 L 160 85 L 185 60 L 210 85 L 210 110 Z" fill="#fb7185" stroke="#881337" strokeWidth="2" />
    <rect x="20" y="110" width="200" height="10" fill="#94a3b8" />
  </svg>
));

// ─── MOSQUE SVG ───────────────────────────────────────────────────────────
export const MosqueSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#f0f9ff" rx="12" />
    <path d="M 70 100 L 170 100 L 170 70 Q 120 20 70 70 Z" fill="#0ea5e9" stroke="#0369a1" strokeWidth="2" />
    <rect x="180" y="30" width="10" height="70" fill="#0ea5e9" stroke="#0369a1" strokeWidth="2" /> {/* Minaret */}
    <circle cx="120" cy="55" r="15" fill="#bae6fd" opacity="0.5" />
  </svg>
));

// ─── CRUSADER SVG ─────────────────────────────────────────────────────────
export const CrusaderSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#fef2f2" rx="12" />
    <path d="M 120 20 L 170 40 L 170 90 Q 120 120 70 90 L 70 40 Z" fill="#ffffff" stroke="#475569" strokeWidth="3" />
    <rect x="110" y="35" width="20" height="70" fill="#dc2626" />
    <rect x="85" y="60" width="70" height="20" fill="#dc2626" />
  </svg>
));
