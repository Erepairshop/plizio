"use client";
// ─── KidsScienceSvg — K1/K2 Science, Materials & Magnetism ─────────────────
// Exports:
//   FiveSensesSvg          — Sight, Hearing, Smell, Taste, Touch
//   ExperimentStepsSvg     — Question, Hypothesis, Test, Conclusion
//   MaterialPropertiesSvg  — Hard, Soft, Transparent
//   DissolvingSvg          — Sugar (dissolves) vs Sand (doesn't dissolve)
//   MagnetismSvg           — Magnet attracts metal, not wood

import { memo } from "react";

// ─── SHARED DEFS ────────────────────────────────────────────────────────────
const LabelBg = () => (
  <filter id="labelBg" x="-10%" y="-10%" width="120%" height="120%">
    <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#000" floodOpacity="0.1" />
  </filter>
);

const SharedDefs = () => (
  <defs>
    <LabelBg />
    <linearGradient id="skyBgSc" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#bae6fd" />
      <stop offset="100%" stopColor="#e0f2fe" />
    </linearGradient>
    <linearGradient id="deskBg" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stopColor="#fef3c7" />
      <stop offset="100%" stopColor="#fcd34d" />
    </linearGradient>
  </defs>
);

const PlayfulBackground = () => (
  <>
    <rect width="240" height="140" fill="url(#skyBgSc)" rx="12" />
    <path d="M 0 100 Q 60 90 120 95 T 240 90 L 240 140 L 0 140 Z" fill="url(#deskBg)" />
  </>
);

// ════════════════════════════════════════════════════════════════════════════
// ─── 5 SENSES ───────────────────────────────────────────────────────────────
// ════════════════════════════════════════════════════════════════════════════

const SENSES_LABELS: Record<string, Record<string, string>> = {
  en: { title: "The 5 Senses", sight: "Sight", hearing: "Hearing", smell: "Smell", taste: "Taste", touch: "Touch" },
  de: { title: "Die 5 Sinne", sight: "Sehen", hearing: "Hören", smell: "Riechen", taste: "Schmecken", touch: "Fühlen" },
  hu: { title: "Az 5 Érzék", sight: "Látás", hearing: "Hallás", smell: "Szaglás", taste: "Ízlelés", touch: "Tapintás" },
  ro: { title: "Cele 5 Simțuri", sight: "Văz", hearing: "Auz", smell: "Miros", taste: "Gust", touch: "Pipăit" },
};

export const FiveSensesSvg = memo(function FiveSensesSvg({ lang = "de" }: { lang?: string }) {
  const l = SENSES_LABELS[lang as keyof typeof SENSES_LABELS] || SENSES_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      <circle cx="120" cy="70" r="35" fill="#fbcfe8" stroke="#f472b6" strokeWidth="2" opacity="0.5" />
      <text x="120" y="76" textAnchor="middle" fontSize="18">🧠</text>

      {/* Senses Icons & Labels */}
      {/* Sight */}
      <text x="50" y="45" textAnchor="middle" fontSize="20">👁️</text>
      <rect x="25" y="52" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="50" y="60" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0284c7">{l.sight}</text>

      {/* Hearing */}
      <text x="190" y="45" textAnchor="middle" fontSize="20">👂</text>
      <rect x="165" y="52" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="190" y="60" textAnchor="middle" fontSize="6" fontWeight="700" fill="#16a34a">{l.hearing}</text>

      {/* Smell */}
      <text x="45" y="105" textAnchor="middle" fontSize="20">👃</text>
      <rect x="20" y="112" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="45" y="120" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ea580c">{l.smell}</text>

      {/* Taste */}
      <text x="195" y="105" textAnchor="middle" fontSize="20">👅</text>
      <rect x="170" y="112" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="195" y="120" textAnchor="middle" fontSize="6" fontWeight="700" fill="#db2777">{l.taste}</text>

      {/* Touch */}
      <text x="120" y="115" textAnchor="middle" fontSize="20">🖐️</text>
      <rect x="95" y="122" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="120" y="130" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ca8a04">{l.touch}</text>

      {/* Lines connecting to brain */}
      <g stroke="#f472b6" strokeWidth="1.5" strokeDasharray="2 2" opacity="0.6">
        <line x1="60" y1="45" x2="95" y2="60" />
        <line x1="180" y1="45" x2="145" y2="60" />
        <line x1="55" y1="95" x2="95" y2="80" />
        <line x1="185" y1="95" x2="145" y2="80" />
        <line x1="120" y1="95" x2="120" y2="85" />
      </g>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── EXPERIMENT STEPS ───────────────────────────────────────────────────────

const EXPERIMENT_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Experiment Steps", question: "Question", idea: "Idea", test: "Test", result: "Result" },
  de: { title: "Versuchsschritte", question: "Frage", idea: "Idee", test: "Testen", result: "Ergebnis" },
  hu: { title: "Kísérlet lépései", question: "Kérdés", idea: "Ötlet", test: "Tesztelés", result: "Eredmény" },
  ro: { title: "Pașii experimentului", question: "Întrebare", idea: "Idee", test: "Test", result: "Rezultat" },
};

export const ExperimentStepsSvg = memo(function ExperimentStepsSvg({ lang = "de" }: { lang?: string }) {
  const l = EXPERIMENT_LABELS[lang as keyof typeof EXPERIMENT_LABELS] || EXPERIMENT_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      {/* Path */}
      <path d="M 40 70 L 80 70 M 100 70 L 140 70 M 160 70 L 200 70" fill="none" stroke="#fcd34d" strokeWidth="4" strokeLinecap="round" strokeDasharray="6 4" />
      
      {/* 1. Question */}
      <circle cx="35" cy="70" r="16" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />
      <text x="35" y="76" textAnchor="middle" fontSize="16">❓</text>
      <rect x="15" y="90" width="40" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="35" y="98" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#2563eb">{l.question}</text>

      {/* 2. Idea */}
      <circle cx="90" cy="70" r="16" fill="#fef08a" stroke="#eab308" strokeWidth="2" />
      <text x="90" y="76" textAnchor="middle" fontSize="16">💡</text>
      <rect x="70" y="90" width="40" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="90" y="98" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#ca8a04">{l.idea}</text>

      {/* 3. Test */}
      <circle cx="145" cy="70" r="16" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" />
      <text x="145" y="76" textAnchor="middle" fontSize="16">🧪</text>
      <rect x="125" y="90" width="40" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="145" y="98" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#16a34a">{l.test}</text>

      {/* 4. Result */}
      <circle cx="200" cy="70" r="16" fill="#fbcfe8" stroke="#ec4899" strokeWidth="2" />
      <text x="200" y="76" textAnchor="middle" fontSize="16">📋</text>
      <rect x="180" y="90" width="40" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="200" y="98" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#db2777">{l.result}</text>

      <text x="120" y="20" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── MATERIAL PROPERTIES ────────────────────────────────────────────────────

const MATERIAL_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Materials", hard: "Hard (Wood)", soft: "Soft (Sponge)", clear: "Clear (Glass)" },
  de: { title: "Materialien", hard: "Hart (Holz)", soft: "Weich (Schwamm)", clear: "Klar (Glas)" },
  hu: { title: "Anyagok", hard: "Kemény (Fa)", soft: "Puha (Szivacs)", clear: "Átlátszó (Üveg)" },
  ro: { title: "Materiale", hard: "Tare (Lemn)", soft: "Moale (Burete)", clear: "Transparent (Sticlă)" },
};

export const MaterialPropertiesSvg = memo(function MaterialPropertiesSvg({ lang = "de" }: { lang?: string }) {
  const l = MATERIAL_LABELS[lang as keyof typeof MATERIAL_LABELS] || MATERIAL_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      {/* Hard (Wood Block) */}
      <g transform="translate(45, 65)">
        <rect x="-15" y="-15" width="30" height="30" rx="2" fill="#b45309" stroke="#78350f" strokeWidth="2" />
        <path d="M -10 -5 Q 0 -10 10 -5 M -10 5 Q 0 10 10 5 M 0 -15 L 0 15" fill="none" stroke="#78350f" strokeWidth="1" opacity="0.5" />
        <rect x="-25" y="25" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="33" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#92400e">{l.hard}</text>
      </g>

      {/* Soft (Sponge) */}
      <g transform="translate(120, 65)">
        <rect x="-18" y="-15" width="36" height="30" rx="8" fill="#fde047" stroke="#eab308" strokeWidth="2" />
        <circle cx="-8" cy="-5" r="2" fill="#eab308" />
        <circle cx="5" cy="-8" r="3" fill="#eab308" />
        <circle cx="8" cy="5" r="2.5" fill="#eab308" />
        <circle cx="-5" cy="8" r="2" fill="#eab308" />
        <rect x="-25" y="25" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="33" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#ca8a04">{l.soft}</text>
      </g>

      {/* Clear (Glass Cup) */}
      <g transform="translate(195, 65)">
        <path d="M -12 -15 L 12 -15 L 8 15 L -8 15 Z" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" opacity="0.8" />
        <path d="M -5 -5 L -5 5 M 2 -10 L 2 10" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" opacity="0.8" />
        <rect x="-25" y="25" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="33" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#0284c7">{l.clear}</text>
      </g>

      <text x="120" y="20" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── DISSOLVING ─────────────────────────────────────────────────────────────

const DISSOLVING_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Does it dissolve?", salt: "Salt / Sugar", sand: "Sand / Stones", dissolves: "Dissolves", noDissolve: "Doesn't dissolve" },
  de: { title: "Löst es sich auf?", salt: "Salz / Zucker", sand: "Sand / Steine", dissolves: "Löst sich auf", noDissolve: "Löst sich nicht auf" },
  hu: { title: "Feloldódik?", salt: "Só / Cukor", sand: "Homok / Kavics", dissolves: "Feloldódik", noDissolve: "Nem oldódik fel" },
  ro: { title: "Se dizolvă?", salt: "Sare / Zahăr", sand: "Nisip / Pietre", dissolves: "Se dizolvă", noDissolve: "Nu se dizolvă" },
};

export const DissolvingSvg = memo(function DissolvingSvg({ lang = "de" }: { lang?: string }) {
  const l = DISSOLVING_LABELS[lang as keyof typeof DISSOLVING_LABELS] || DISSOLVING_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      {/* Beaker 1: Dissolving */}
      <g transform="translate(65, 75)">
        {/* Glass Beaker */}
        <path d="M -15 -25 L 15 -25 L 20 20 L -20 20 Z" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" opacity="0.6" />
        {/* Water */}
        <path d="M -18 0 L 18 0 L 18 18 L -18 18 Z" fill="#7dd3fc" opacity="0.8" />
        {/* Dissolving particles (Salt/Sugar) */}
        <circle cx="-5" cy="5" r="1.5" fill="#fff" opacity="0.8" />
        <circle cx="8" cy="10" r="1" fill="#fff" opacity="0.6" />
        <circle cx="-10" cy="12" r="1" fill="#fff" opacity="0.4" />
        <circle cx="5" cy="15" r="1.5" fill="#fff" opacity="0.7" />
        {/* Stirring lines */}
        <path d="M -8 8 Q 0 15 8 8" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" />

        <rect x="-35" y="30" width="70" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="38" textAnchor="middle" fontSize="6" fontWeight="700" fill="#0284c7">{l.dissolves}</text>
        <text x="0" y="-32" textAnchor="middle" fontSize="6" fontWeight="700" fill="#1e293b">{l.salt}</text>
      </g>

      {/* Beaker 2: Not Dissolving */}
      <g transform="translate(175, 75)">
        <path d="M -15 -25 L 15 -25 L 20 20 L -20 20 Z" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" opacity="0.6" />
        <path d="M -18 0 L 18 0 L 18 18 L -18 18 Z" fill="#7dd3fc" opacity="0.8" />
        {/* Sand and stones at bottom */}
        <path d="M -18 10 Q 0 5 18 15 L 18 18 L -18 18 Z" fill="#d97706" />
        <circle cx="-5" cy="15" r="2.5" fill="#78716c" />
        <circle cx="8" cy="16" r="1.5" fill="#a8a29e" />
        <circle cx="-12" cy="17" r="1.5" fill="#78716c" />

        <rect x="-35" y="30" width="70" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
        <text x="0" y="38" textAnchor="middle" fontSize="6" fontWeight="700" fill="#b45309">{l.noDissolve}</text>
        <text x="0" y="-32" textAnchor="middle" fontSize="6" fontWeight="700" fill="#1e293b">{l.sand}</text>
      </g>

      <text x="120" y="20" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});

// ─── MAGNETISM ──────────────────────────────────────────────────────────────

const MAGNETISM_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Magnetism", magnet: "Magnet", magnetic: "Magnetic (Metal)", notMagnetic: "Not Magnetic (Wood)" },
  de: { title: "Magnetismus", magnet: "Magnet", magnetic: "Magnetisch (Metall)", notMagnetic: "Nicht magnetisch (Holz)" },
  hu: { title: "Mágnesesség", magnet: "Mágnes", magnetic: "Mágneses (Fém)", notMagnetic: "Nem mágneses (Fa)" },
  ro: { title: "Magnetism", magnet: "Magnet", magnetic: "Magnetic (Metal)", notMagnetic: "Nu e magnetic (Lemn)" },
};

export const MagnetismSvg = memo(function MagnetismSvg({ lang = "de" }: { lang?: string }) {
  const l = MAGNETISM_LABELS[lang as keyof typeof MAGNETISM_LABELS] || MAGNETISM_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <SharedDefs />
      <PlayfulBackground />
      
      {/* ── Magnet ── */}
      <g transform="translate(120, 45)">
        <path d="M -20 -10 A 20 20 0 0 1 20 -10 L 20 15 L 10 15 L 10 -10 A 10 10 0 0 0 -10 -10 L -10 15 L -20 15 Z" fill="#ef4444" />
        <rect x="-20" y="10" width="10" height="5" fill="#f8fafc" /> {/* N pole end */}
        <rect x="10" y="10" width="10" height="5" fill="#f8fafc" /> {/* S pole end */}
        <text x="-15" y="14" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#000">N</text>
        <text x="15" y="14" textAnchor="middle" fontSize="4" fontWeight="bold" fill="#000">S</text>

        {/* Magnetic field lines pulling */}
        <path d="M -15 20 Q -5 30 -15 45" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 2" />
        <path d="M 15 20 Q 5 30 15 45" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 2" />
      </g>

      {/* ── Magnetic Item (Nails/Paperclips) ── */}
      <g transform="translate(100, 95)">
        <rect x="-2" y="-10" width="4" height="20" rx="1" fill="#94a3b8" transform="rotate(15)" />
        <path d="M -4 -12 L 2 -10 L 4 -12 Z" fill="#64748b" transform="rotate(15)" />
        <rect x="5" y="-5" width="2" height="15" rx="1" fill="#94a3b8" transform="rotate(-20)" />
      </g>

      {/* ── Not Magnetic Item (Wood block) ── */}
      <g transform="translate(160, 110)">
        <rect x="-15" y="-10" width="30" height="20" rx="2" fill="#b45309" stroke="#78350f" strokeWidth="1.5" />
        <line x1="-10" y1="-5" x2="10" y2="-5" stroke="#78350f" opacity="0.5" />
        <line x1="-5" y1="0" x2="15" y2="0" stroke="#78350f" opacity="0.5" />
        <line x1="-12" y1="5" x2="8" y2="5" stroke="#78350f" opacity="0.5" />
      </g>

      {/* ── Labels ── */}
      <rect x="95" y="20" width="50" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="120" y="28" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ef4444">{l.magnet}</text>

      <rect x="55" y="115" width="60" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="85" y="123" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#0284c7">{l.magnetic}</text>

      <rect x="135" y="125" width="70" height="12" rx="6" fill="#fff" filter="url(#labelBg)" />
      <text x="170" y="133" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#b45309">{l.notMagnetic}</text>

      <text x="120" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#0369a1">{l.title}</text>
    </svg>
  );
});
