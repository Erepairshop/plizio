"use client";
import { memo } from "react";

// ─── LABELS ────────────────────────────────────────────────────────────────

const ATOM_LABELS = {
  de: { nucleus: "Kern", electron: "Elektron", shell: "Schale" },
  en: { nucleus: "Nucleus", electron: "Electron", shell: "Shell" },
  hu: { nucleus: "Mag", electron: "Elektron", shell: "Héj" },
  ro: { nucleus: "Nucleu", electron: "Electron", shell: "Înveliș" },
};

const PH_LABELS = {
  de: { acid: "Sauer", base: "Basisch", neutral: "Neutral" },
  en: { acid: "Acidic", base: "Basic", neutral: "Neutral" },
  hu: { acid: "Savas", base: "Lúgos", neutral: "Semleges" },
  ro: { acid: "Acid", base: "Bazic", neutral: "Neutru" },
};

const SAFETY_LABELS = {
  de: { goggles: "Schutzbrille", caution: "Achtung" },
  en: { goggles: "Goggles", caution: "Caution" },
  hu: { goggles: "Védőszemüveg", caution: "Vigyázat" },
  ro: { goggles: "Ochelari", caution: "Atenție" },
};

// ─── ATOM SVG ──────────────────────────────────────────────────────────────

export const AtomSvg = memo(({ lang = "hu" }: { lang?: string }) => {
  const l = (ATOM_LABELS as any)[lang] || ATOM_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <radialGradient id="nucGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#991b1b" />
        </radialGradient>
      </defs>
      <rect width="240" height="140" fill="#0f172a" rx="12" />
      
      {/* Orbits */}
      <circle cx="120" cy="70" r="30" fill="none" stroke="#334155" strokeWidth="1" />
      <circle cx="120" cy="70" r="50" fill="none" stroke="#334155" strokeWidth="1" />
      
      {/* Nucleus */}
      <circle cx="120" cy="70" r="12" fill="url(#nucGrad)" />
      
      {/* Electrons */}
      <circle cx="120" cy="40" r="4" fill="#60a5fa" />
      <circle cx="120" cy="100" r="4" fill="#60a5fa" />
      <circle cx="70" cy="70" r="4" fill="#60a5fa" />
      <circle cx="170" cy="70" r="4" fill="#60a5fa" />

      {/* Labels */}
      <text x="120" y="25" fontSize="8" fill="#94a3b8" textAnchor="middle">{l.electron}</text>
      <text x="120" y="73" fontSize="8" fontWeight="bold" fill="white" textAnchor="middle">{l.nucleus}</text>
    </svg>
  );
});

// ─── BEAKER SVG ────────────────────────────────────────────────────────────

export const BeakerSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#f8fafc" rx="12" />
      
      {/* Beaker Outline */}
      <path d="M 90 30 L 90 110 Q 90 120, 100 120 L 140 120 Q 150 120, 150 110 L 150 30" fill="none" stroke="#64748b" strokeWidth="2" />
      
      {/* Liquid */}
      <path d="M 92 70 L 148 70 L 148 110 Q 148 118, 140 118 L 100 118 Q 92 118, 92 110 Z" fill="#3b82f6" opacity="0.4" />
      
      {/* Bubbles */}
      <circle cx="110" cy="90" r="3" fill="white" opacity="0.6" />
      <circle cx="130" cy="80" r="2" fill="white" opacity="0.6" />
      <circle cx="120" cy="100" r="4" fill="white" opacity="0.6" />
      
      {/* Measurements */}
      <line x1="140" y1="40" x2="150" y2="40" stroke="#94a3b8" strokeWidth="1" />
      <line x1="140" y1="60" x2="150" y2="60" stroke="#94a3b8" strokeWidth="1" />
      <line x1="140" y1="80" x2="150" y2="80" stroke="#94a3b8" strokeWidth="1" />
      <line x1="140" y1="100" x2="150" y2="100" stroke="#94a3b8" strokeWidth="1" />
    </svg>
  );
});

// ─── PH SCALE SVG ──────────────────────────────────────────────────────────

export const PhScaleSvg = memo(({ lang = "hu" }: { lang?: string }) => {
  const l = (PH_LABELS as any)[lang] || PH_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="phGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="#fafafa" rx="12" />
      
      <rect x="20" y="60" width="200" height="20" rx="10" fill="url(#phGrad)" />
      
      <text x="25" y="95" fontSize="8" fill="#64748b" textAnchor="middle">0</text>
      <text x="120" y="95" fontSize="8" fill="#64748b" textAnchor="middle">7</text>
      <text x="215" y="95" fontSize="8" fill="#64748b" textAnchor="middle">14</text>
      
      <text x="25" y="50" fontSize="10" fontWeight="bold" fill="#ef4444" textAnchor="middle">{l.acid}</text>
      <text x="120" y="50" fontSize="10" fontWeight="bold" fill="#10b981" textAnchor="middle">{l.neutral}</text>
      <text x="215" y="50" fontSize="10" fontWeight="bold" fill="#1e3a8a" textAnchor="middle">{l.base}</text>
    </svg>
  );
});

// ─── MOLECULE SVG ──────────────────────────────────────────────────────────

export const MoleculeSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#f1f5f9" rx="12" />
      
      <line x1="120" y1="60" x2="90" y2="100" stroke="#cbd5e1" strokeWidth="8" strokeLinecap="round" />
      <line x1="120" y1="60" x2="150" y2="100" stroke="#cbd5e1" strokeWidth="8" strokeLinecap="round" />
      
      <circle cx="120" cy="60" r="25" fill="#ef4444" /> 
      <text x="120" y="68" fontSize="20" fontWeight="bold" fill="white" textAnchor="middle">O</text>
      
      <circle cx="90" cy="100" r="15" fill="#64748b" /> 
      <text x="90" y="105" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">H</text>
      
      <circle cx="150" cy="100" r="15" fill="#64748b" /> 
      <text x="150" y="105" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">H</text>
    </svg>
  );
});

// ─── LAB SAFETY SVG ────────────────────────────────────────────────────────

export const LabSafetySvg = memo(({ lang = "hu" }: { lang?: string }) => {
  const l = (SAFETY_LABELS as any)[lang] || SAFETY_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#fff7ed" rx="12" />
      
      {/* Warning Triangle */}
      <path d="M 120 20 L 160 90 L 80 90 Z" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
      <text x="120" y="75" fontSize="30" fontWeight="bold" fill="#78350f" textAnchor="middle">!</text>
      
      {/* Goggles */}
      <rect x="90" y="100" width="25" height="15" rx="5" fill="#e0f2fe" stroke="#0369a1" strokeWidth="1.5" />
      <rect x="125" y="100" width="25" height="15" rx="5" fill="#e0f2fe" stroke="#0369a1" strokeWidth="1.5" />
      <line x1="115" y1="107" x2="125" y2="107" stroke="#0369a1" strokeWidth="2" />
      
      <text x="120" y="128" fontSize="10" fontWeight="bold" fill="#92400e" textAnchor="middle">{l.goggles}</text>
    </svg>
  );
});

// ─── STATES OF MATTER SVG ──────────────────────────────────────────────────

export const StatesSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#f0fdfa" rx="12" />
      
      {/* Solid */}
      <g transform="translate(40, 70)">
        <rect x="-15" y="-15" width="30" height="30" fill="#94a3b8" rx="2" />
        {[...Array(9)].map((_, i) => (
          <circle key={i} cx={-8 + (i % 3) * 8} cy={-8 + Math.floor(i / 3) * 8} r="3" fill="#334155" />
        ))}
      </g>
      
      {/* Liquid */}
      <g transform="translate(120, 70)">
        <path d="M -20 15 L 20 15 L 20 5 Q 20 -15, 0 -15 Q -20 -15, -20 5 Z" fill="#38bdf8" opacity="0.6" />
        <circle cx="-5" cy="5" r="3" fill="#0284c7" />
        <circle cx="8" cy="-2" r="2.5" fill="#0284c7" />
        <circle cx="-2" cy="-10" r="2" fill="#0284c7" />
      </g>
      
      {/* Gas */}
      <g transform="translate(200, 70)">
        <circle cx="-15" cy="-10" r="3" fill="#818cf8" />
        <circle cx="10" cy="-15" r="3" fill="#818cf8" />
        <circle cx="0" cy="10" r="3" fill="#818cf8" />
        <circle cx="15" cy="5" r="3" fill="#818cf8" />
        <path d="M -5 -5 Q 0 0 5 -5" fill="none" stroke="#6366f1" strokeWidth="1" opacity="0.4" />
      </g>
    </svg>
  );
});

// ─── REACTION ENERGY SVG ───────────────────────────────────────────────────

export const ReactionSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#fff1f2" rx="12" />
      
      {/* Flame */}
      <path d="M 120 100 Q 140 80 120 40 Q 100 80 120 100" fill="#f43f5e" />
      <path d="M 120 95 Q 130 85 120 60 Q 110 85 120 95" fill="#fbbf24" />
      
      {/* Energy Bolt */}
      <path d="M 160 40 L 145 65 L 155 65 L 140 95" fill="none" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      
      {/* Particles */}
      <circle cx="80" cy="60" r="5" fill="#ef4444" />
      <circle cx="100" cy="40" r="5" fill="#3b82f6" />
      <path d="M 85 55 L 95 45" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 2" />
    </svg>
  );
});

// ─── ORGANIC CHAIN SVG ─────────────────────────────────────────────────────

export const OrganicSvg = memo(() => {
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <rect width="240" height="140" fill="#f8fafc" rx="12" />
      
      {/* Chain */}
      <g transform="translate(40, 70)">
        {[0, 40, 80, 120, 160].map((x, i) => (
          <g key={i} transform={`translate(${x}, 0)`}>
            {i < 4 && <line x1="12" y1="0" x2="28" y2="0" stroke="#475569" strokeWidth="3" />}
            <circle r="12" fill="#1e293b" />
            <text y="5" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">C</text>
            
            <line x1="0" y1="-12" x2="0" y2="-25" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="0" cy="-28" r="6" fill="#64748b" />
            <text y="-26" fontSize="7" fontWeight="bold" fill="white" textAnchor="middle">H</text>
            
            <line x1="0" y1="12" x2="0" y2="25" stroke="#94a3b8" strokeWidth="2" />
            <circle cx="0" cy="-28" r="6" fill="#64748b" transform="translate(0, 56)" />
            <text y="30" fontSize="7" fontWeight="bold" fill="white" textAnchor="middle">H</text>
          </g>
        ))}
      </g>
    </svg>
  );
});
