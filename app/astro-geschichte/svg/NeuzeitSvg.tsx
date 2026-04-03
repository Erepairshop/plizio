"use client";
import { memo } from "react";

// ─── VERSAILLES SVG ───────────────────────────────────────────────────────
export const VersaillesSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#fdf2f8" rx="12" />
    <rect x="40" y="50" width="160" height="60" fill="#fce7f3" stroke="#be185d" strokeWidth="2" />
    <rect x="90" y="30" width="60" height="20" fill="#fce7f3" stroke="#be185d" strokeWidth="2" />
    {[50, 70, 90, 110, 130, 150, 170, 190].map((x, i) => (
      <rect key={i} x={x-3} y="60" width="6" height="10" fill="#be185d" opacity="0.3" />
    ))}
    <path d="M 20 110 L 220 110" stroke="#9d174d" strokeWidth="4" /> {/* Garden line */}
  </svg>
));

// ─── BASTILLE SVG ─────────────────────────────────────────────────────────
export const BastilleSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#f1f5f9" rx="12" />
    <rect x="70" y="40" width="100" height="70" fill="#64748b" stroke="#334155" strokeWidth="2" />
    {[70, 170].map(x => (
      <rect key={x} x={x-15} y="30" width="30" height="80" rx="2" fill="#475569" stroke="#334155" strokeWidth="2" />
    ))}
    <rect x="110" y="80" width="20" height="30" fill="#1e293b" /> {/* Dark gate */}
  </svg>
));

// ─── STEAM ENGINE SVG ─────────────────────────────────────────────────────
export const SteamEngineSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#f8fafc" rx="12" />
    <circle cx="80" cy="90" r="30" fill="none" stroke="#475569" strokeWidth="8" /> {/* Flywheel */}
    <rect x="120" y="60" width="60" height="40" fill="#94a3b8" stroke="#475569" strokeWidth="2" /> {/* Piston box */}
    <path d="M 80 90 L 120 80" stroke="#1e293b" strokeWidth="4" strokeLinecap="round" />
    <rect x="160" y="30" width="15" height="30" fill="#334155" /> {/* Chimney */}
  </svg>
));

// ─── FACTORY SVG ──────────────────────────────────────────────────────────
export const FactorySvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#fff7ed" rx="12" />
    <path d="M 40 110 L 40 70 L 70 50 L 70 70 L 100 50 L 100 70 L 130 50 L 130 110 Z" fill="#9a3412" stroke="#7c2d12" strokeWidth="2" />
    <rect x="150" y="30" width="20" height="80" fill="#7c2d12" /> {/* Chimney */}
    <circle cx="160" cy="20" r="8" fill="#d1d5db" opacity="0.6" /> {/* Smoke */}
    <circle cx="175" cy="10" r="10" fill="#d1d5db" opacity="0.4" />
  </svg>
));

// ─── NAPOLEON SVG ─────────────────────────────────────────────────────────
export const NapoleonSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#eff6ff" rx="12" />
    <g transform="translate(120, 70)">
      <path d="M -40 0 Q 0 -40 40 0 L 40 10 L -40 10 Z" fill="#1e293b" stroke="#0f172a" strokeWidth="2" /> {/* Bicorne hat */}
      <rect x="-15" y="10" width="30" height="40" fill="#1e3a8a" stroke="#1e293b" strokeWidth="2" /> {/* Uniform */}
      <rect x="-20" y="15" width="40" height="8" fill="#fbbf24" /> {/* Epaulettes */}
    </g>
  </svg>
));

// ─── REVOLUTION SVG ───────────────────────────────────────────────────────
export const RevolutionSvg = memo(() => (
  <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
    <rect width="240" height="140" fill="#fdf2f8" rx="12" />
    <g transform="translate(120, 70)">
      <rect x="-45" y="-30" width="30" height="60" fill="#2563eb" /> {/* Tricolore Blue */}
      <rect x="-15" y="-30" width="30" height="60" fill="#ffffff" /> {/* Tricolore White */}
      <rect x="15" y="-30" width="30" height="60" fill="#dc2626" />  {/* Tricolore Red */}
      <path d="M -10 -40 Q 0 -60 10 -40 L 15 -35 Q 0 -45 -15 -35 Z" fill="#dc2626" /> {/* Phrygian cap symbol */}
    </g>
  </svg>
));
