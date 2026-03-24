"use client";
// ─── EcologyEvolutionSvg — K7 Ecology & Evolution ────────────────────────────
// Exports:
//   PopulationEcologySvg  — logistic growth, carrying capacity
//   SymbiosisSvg          — mutualism (+/+), commensalism (+/0), parasitism (+/-)
//   EvolutionSvg          — natural selection, adaptation

import { memo } from "react";

// ─── SHARED DEFS ────────────────────────────────────────────────────────────
const LabelGlow = () => (
  <filter id="lblGlow">
    <feGaussianBlur stdDeviation="1.2" result="b" />
    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
  </filter>
);

// ─── POPULATION ECOLOGY ─────────────────────────────────────────────────────

const POPULATION_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Population Growth", carryingCapacity: "Carrying Capacity (K)", expGrowth: "Exponential Growth", time: "Time", size: "Population Size" },
  de: { title: "Populationswachstum", carryingCapacity: "Kapazitätsgrenze (K)", expGrowth: "Exponentielles Wachstum", time: "Zeit", size: "Populationsgröße" },
  hu: { title: "Populációnövekedés", carryingCapacity: "Eltartóképesség (K)", expGrowth: "Exponenciális szakasz", time: "Idő", size: "Populáció mérete" },
  ro: { title: "Creșterea populației", carryingCapacity: "Capacitate de suport (K)", expGrowth: "Creștere exponențială", time: "Timp", size: "Mărimea populației" },
};

export const PopulationEcologySvg = memo(function PopulationEcologySvg({ lang = "de" }: { lang?: string }) {
  const l = POPULATION_LABELS[lang as keyof typeof POPULATION_LABELS] || POPULATION_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="popEcoBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#022c22" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#popEcoBg)" rx="12" />
      
      {/* ── Graph Axes ── */}
      <path d="M 30 15 L 30 115 L 220 115" fill="none" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Axis arrows */}
      <path d="M 28 20 L 30 15 L 32 20 M 215 113 L 220 115 L 215 117" fill="none" stroke="#6ee7b7" strokeWidth="2" strokeLinecap="round" />

      {/* ── Carrying Capacity Line (K) ── */}
      <line x1="30" y1="35" x2="220" y2="35" stroke="#fca5a5" strokeWidth="1.5" strokeDasharray="4 3" />
      
      {/* ── Logistic Growth Curve (S-Curve) ── */}
      <path d="M 30 115 C 80 115, 90 35, 150 35 C 180 35, 200 35, 210 35" fill="none" stroke="#fde047" strokeWidth="3" strokeLinecap="round" />

      {/* ── Labels ── */}
      <text x="125" y="127" textAnchor="middle" fontSize="6" fontWeight="700" fill="#a7f3d0" filter="url(#lblGlow)">{l.time}</text>
      <text x="20" y="65" textAnchor="middle" fontSize="6" fontWeight="700" fill="#a7f3d0" transform="rotate(-90 20 65)" filter="url(#lblGlow)">{l.size}</text>

      <rect x="135" y="20" width="75" height="10" rx="5" fill="rgba(220,38,38,0.3)" />
      <text x="172.5" y="27.5" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.carryingCapacity}</text>

      <line x1="90" y1="75" x2="130" y2="90" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="155" y="93" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fde047" filter="url(#lblGlow)">{l.expGrowth}</text>

      <rect x="145" y="60" width="80" height="14" rx="7" fill="rgba(0,0,0,0.4)" />
      <text x="185" y="70" textAnchor="middle" fontSize="8" fontWeight="700" fill="#6ee7b7" filter="url(#lblGlow)">{l.title}</text>
    </svg>
  );
});

// ─── SYMBIOSIS ──────────────────────────────────────────────────────────────

const SYMBIOSIS_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Symbiosis", mutualism: "Mutualism (+/+)", commensalism: "Commensalism (+/0)", parasitism: "Parasitism (+/-)", bothBenefit: "Both benefit", oneBenefits: "One benefits, other unaffected", harmed: "One harmed" },
  de: { title: "Symbiose", mutualism: "Mutualismus (+/+)", commensalism: "Kommensalismus (+/0)", parasitism: "Parasitismus (+/-)", bothBenefit: "Beide profitieren", oneBenefits: "Einer profitiert, der andere ist unbeeinflusst", harmed: "Einer wird geschädigt" },
  hu: { title: "Szimbiózis", mutualism: "Mutualizmus (+/+)", commensalism: "Kommenzalizmus (+/0)", parasitism: "Parazitizmus (+/-)", bothBenefit: "Mindkettő jól jár", oneBenefits: "Egyik jól jár, másik közömbös", harmed: "Egyik károsodik" },
  ro: { title: "Simbioză", mutualism: "Mutualism (+/+)", commensalism: "Comensalism (+/0)", parasitism: "Parazitism (+/-)", bothBenefit: "Ambii beneficiază", oneBenefits: "Unul beneficiază, celălalt nu este afectat", harmed: "Unul este afectat" },
};

export const SymbiosisSvg = memo(function SymbiosisSvg({ lang = "de" }: { lang?: string }) {
  const l = SYMBIOSIS_LABELS[lang as keyof typeof SYMBIOSIS_LABELS] || SYMBIOSIS_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="symbBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#172554" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#symbBg)" rx="12" />
      
      {/* ── Mutualism (+/+) ── */}
      <g transform="translate(40, 55)">
        <circle cx="-10" cy="0" r="14" fill="#10b981" opacity="0.8" />
        <circle cx="10" cy="0" r="14" fill="#3b82f6" opacity="0.8" />
        <path d="M -15 0 L -5 0 M -10 -5 L -10 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <path d="M 5 0 L 15 0 M 10 -5 L 10 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <path d="M 0 -8 L 0 8 M -5 -2 L 5 2 M -5 2 L 5 -2" stroke="#fcd34d" strokeWidth="1" opacity="0.7" /> {/* Exchange arrows */}
        
        <text x="0" y="28" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#6ee7b7" filter="url(#lblGlow)">{l.mutualism}</text>
        <text x="0" y="36" textAnchor="middle" fontSize="5" fill="#93c5fd">{l.bothBenefit}</text>
      </g>

      {/* ── Commensalism (+/0) ── */}
      <g transform="translate(120, 55)">
        <circle cx="-10" cy="0" r="14" fill="#10b981" opacity="0.8" />
        <circle cx="10" cy="0" r="14" fill="#64748b" opacity="0.8" />
        <path d="M -15 0 L -5 0 M -10 -5 L -10 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <circle cx="10" cy="0" r="3" fill="none" stroke="#fff" strokeWidth="1.5" /> {/* Zero symbol */}
        
        <text x="0" y="28" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.commensalism}</text>
        <text x="0" y="36" textAnchor="middle" fontSize="5" fill="#cbd5e1">{l.oneBenefits}</text>
      </g>

      {/* ── Parasitism (+/-) ── */}
      <g transform="translate(200, 55)">
        <circle cx="-10" cy="0" r="14" fill="#10b981" opacity="0.8" />
        <circle cx="10" cy="0" r="10" fill="#ef4444" opacity="0.8" /> {/* Shrinking/harmed host */}
        <path d="M -15 0 L -5 0 M -10 -5 L -10 5" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        <path d="M 5 0 L 15 0" stroke="#fff" strokeWidth="2" strokeLinecap="round" /> {/* Minus symbol */}
        <path d="M 5 0 Q -2 5 -8 0" fill="none" stroke="#fca5a5" strokeWidth="1.5" strokeDasharray="2 1" markerEnd="url(#arrow)" /> {/* Draining */}
        
        <text x="0" y="28" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.parasitism}</text>
        <text x="0" y="36" textAnchor="middle" fontSize="5" fill="#fecaca">{l.harmed}</text>
      </g>

      {/* Title */}
      <rect x="85" y="10" width="70" height="16" rx="8" fill="rgba(0,0,0,0.5)" />
      <text x="120" y="21" textAnchor="middle" fontSize="8" fontWeight="700" fill="#bfdbfe" filter="url(#lblGlow)">{l.title}</text>
    </svg>
  );
});

// ─── EVOLUTION ──────────────────────────────────────────────────────────────

const EVOLUTION_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Natural Selection", generation1: "Generation 1", generation2: "Generation 2", generation3: "Generation 3", variation: "Variation", selection: "Selection (Predator)", adaptation: "Adaptation" },
  de: { title: "Natürliche Selektion", generation1: "Generation 1", generation2: "Generation 2", generation3: "Generation 3", variation: "Variation", selection: "Selektion (Raubtier)", adaptation: "Anpassung" },
  hu: { title: "Természetes szelekció", generation1: "1. Generáció", generation2: "2. Generáció", generation3: "3. Generáció", variation: "Változatosság", selection: "Szelekció (Ragadozó)", adaptation: "Alkalmazkodás" },
  ro: { title: "Selecție naturală", generation1: "Generația 1", generation2: "Generația 2", generation3: "Generația 3", variation: "Variație", selection: "Selecție (Prădător)", adaptation: "Adaptare" },
};

export const EvolutionSvg = memo(function EvolutionSvg({ lang = "de" }: { lang?: string }) {
  const l = EVOLUTION_LABELS[lang as keyof typeof EVOLUTION_LABELS] || EVOLUTION_LABELS.en;
  
  // Bug component to reuse
  const Bug = ({ x, y, color }: { x: number, y: number, color: string }) => (
    <g transform={`translate(${x}, ${y}) scale(0.6)`}>
      <ellipse cx="0" cy="0" rx="8" ry="12" fill={color} stroke="#1e293b" strokeWidth="1.5" />
      <circle cx="0" cy="-10" r="4" fill="#334155" />
      <path d="M -8 -2 L -12 -5 M 8 -2 L 12 -5 M -8 5 L -12 8 M 8 5 L 12 8" stroke="#1e293b" strokeWidth="1.5" strokeLinecap="round" />
    </g>
  );

  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="evolBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2e1065" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#evolBg)" rx="12" />
      
      {/* ── Environment Backgrounds (Green Leaves) ── */}
      <circle cx="45" cy="70" r="28" fill="#166534" opacity="0.8" />
      <circle cx="120" cy="70" r="28" fill="#166534" opacity="0.8" />
      <circle cx="195" cy="70" r="28" fill="#166534" opacity="0.8" />

      {/* Time arrows */}
      <path d="M 75 70 L 88 70" fill="none" stroke="#c4b5fd" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M 150 70 L 163 70" fill="none" stroke="#c4b5fd" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* ── Gen 1: Variation (Mixed) ── */}
      <Bug x={35} y={55} color="#3b82f6" /> {/* Blue stands out */}
      <Bug x={55} y={60} color="#22c55e" /> {/* Green camouflaged */}
      <Bug x={30} y={80} color="#22c55e" />
      <Bug x={50} y={85} color="#3b82f6" />
      <Bug x={45} y={70} color="#22c55e" />
      
      {/* ── Gen 2: Selection (Predator eats blue) ── */}
      <Bug x={110} y={55} color="#3b82f6" /> 
      {/* Predator indicator (red crosshair/target on the blue bug) */}
      <circle cx="110" cy="55" r="8" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" />
      <Bug x={130} y={60} color="#22c55e" />
      <Bug x={105} y={80} color="#22c55e" />
      <Bug x={125} y={85} color="#22c55e" />
      <Bug x={120} y={70} color="#22c55e" />

      {/* ── Gen 3: Adaptation (All green) ── */}
      <Bug x={185} y={55} color="#22c55e" />
      <Bug x={205} y={60} color="#22c55e" />
      <Bug x={180} y={80} color="#22c55e" />
      <Bug x={200} y={85} color="#22c55e" />
      <Bug x={195} y={70} color="#22c55e" />

      {/* ── Labels ── */}
      <text x="45" y="32" textAnchor="middle" fontSize="6" fontWeight="700" fill="#a78bfa" filter="url(#lblGlow)">{l.generation1}</text>
      <text x="45" y="110" textAnchor="middle" fontSize="5.5" fill="#ddd6fe">{l.variation}</text>

      <text x="120" y="32" textAnchor="middle" fontSize="6" fontWeight="700" fill="#a78bfa" filter="url(#lblGlow)">{l.generation2}</text>
      <text x="120" y="110" textAnchor="middle" fontSize="5.5" fill="#fca5a5">{l.selection}</text>

      <text x="195" y="32" textAnchor="middle" fontSize="6" fontWeight="700" fill="#a78bfa" filter="url(#lblGlow)">{l.generation3}</text>
      <text x="195" y="110" textAnchor="middle" fontSize="5.5" fill="#86efac">{l.adaptation}</text>

      {/* Title */}
      <rect x="80" y="8" width="80" height="14" rx="7" fill="rgba(0,0,0,0.4)" />
      <text x="120" y="18" textAnchor="middle" fontSize="7" fontWeight="700" fill="#d8b4fe" filter="url(#lblGlow)">{l.title}</text>
    </svg>
  );
});
