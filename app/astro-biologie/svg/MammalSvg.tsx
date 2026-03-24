"use client";
// ─── MammalSvg — Mammal & Food Chain illustrations ───────────────────────────
// Exports:
//   MammalGroupsSvg    — herbivore / carnivore / omnivore groups
//   MammalAnatomySvg   — mammal body (fur, lungs, milk)
//   FoodChainSvg       — simple food chain diagram

import { memo } from "react";

// ─── SHARED DEFS ────────────────────────────────────────────────────────────
const LabelGlow = () => (
  <filter id="lblGlow">
    <feGaussianBlur stdDeviation="1.2" result="b" />
    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
  </filter>
);

// ─── MAMMAL GROUPS ────────────────────────────────────────────────────────────

const GROUPS_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Mammal Groups", herbivore: "Herbivore", carnivore: "Carnivore", omnivore: "Omnivore", eatsPlants: "Eats plants", eatsMeat: "Eats meat", eatsBoth: "Eats both" },
  de: { title: "Säugetiergruppen", herbivore: "Pflanzenfresser", carnivore: "Fleischfresser", omnivore: "Allesfresser", eatsPlants: "Frisst Pflanzen", eatsMeat: "Frisst Fleisch", eatsBoth: "Frisst beides" },
  hu: { title: "Emlőscsoportok", herbivore: "Növényevő", carnivore: "Ragadozó", omnivore: "Mindenevő", eatsPlants: "Növényt eszik", eatsMeat: "Húst eszik", eatsBoth: "Mindent eszik" },
  ro: { title: "Grupuri de mamifere", herbivore: "Erbivor", carnivore: "Carnivor", omnivore: "Omnivor", eatsPlants: "Mănâncă plante", eatsMeat: "Mănâncă carne", eatsBoth: "Mănâncă ambele" },
};

export const MammalGroupsSvg = memo(function MammalGroupsSvg({ lang = "de" }: { lang?: string }) {
  const l = GROUPS_LABELS[lang as keyof typeof GROUPS_LABELS] || GROUPS_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="mammalGroupsBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#mammalGroupsBg)" rx="12" />
      
      {/* ── Herbivore (Cow/Deer shape) ── */}
      <g transform="translate(50, 50)">
        <circle cx="0" cy="0" r="22" fill="#064e3b" stroke="#34d399" strokeWidth="1" />
        <path d="M -10 -5 Q 0 -15 10 -5 Q 12 10 0 15 Q -12 10 -10 -5 Z" fill="#6ee7b7" />
        {/* Ears/Horns */}
        <path d="M -8 -8 Q -15 -15 -20 -10 Q -15 -5 -10 -2" fill="#6ee7b7" />
        <path d="M 8 -8 Q 15 -15 20 -10 Q 15 -5 10 -2" fill="#6ee7b7" />
        {/* Eyes & Nose */}
        <circle cx="-4" cy="0" r="1.5" fill="#064e3b" />
        <circle cx="4" cy="0" r="1.5" fill="#064e3b" />
        <ellipse cx="0" cy="10" rx="4" ry="2" fill="#047857" />
        
        <text x="0" y="32" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#a7f3d0" filter="url(#lblGlow)">{l.herbivore}</text>
        <text x="0" y="40" textAnchor="middle" fontSize="5" fill="#6ee7b7">{l.eatsPlants}</text>
      </g>

      {/* ── Carnivore (Lion/Cat shape) ── */}
      <g transform="translate(120, 50)">
        <circle cx="0" cy="0" r="22" fill="#7f1d1d" stroke="#f87171" strokeWidth="1" />
        {/* Mane/Fur */}
        <path d="M -15 -15 L -20 -10 L -18 0 L -22 10 L -12 15 L 0 20 L 12 15 L 22 10 L 18 0 L 20 -10 L 15 -15 Z" fill="#991b1b" />
        {/* Face */}
        <path d="M -10 -5 Q 0 -10 10 -5 Q 12 10 0 15 Q -12 10 -10 -5 Z" fill="#fca5a5" />
        {/* Ears */}
        <path d="M -8 -5 Q -12 -12 -5 -10 Z" fill="#fca5a5" />
        <path d="M 8 -5 Q 12 -12 5 -10 Z" fill="#fca5a5" />
        {/* Eyes & Nose */}
        <path d="M -5 0 L -2 2" stroke="#7f1d1d" strokeWidth="1" />
        <path d="M 5 0 L 2 2" stroke="#7f1d1d" strokeWidth="1" />
        <path d="M -2 8 L 2 8 L 0 12 Z" fill="#7f1d1d" />

        <text x="0" y="32" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#fecaca" filter="url(#lblGlow)">{l.carnivore}</text>
        <text x="0" y="40" textAnchor="middle" fontSize="5" fill="#fca5a5">{l.eatsMeat}</text>
      </g>

      {/* ── Omnivore (Bear shape) ── */}
      <g transform="translate(190, 50)">
        <circle cx="0" cy="0" r="22" fill="#78350f" stroke="#fbbf24" strokeWidth="1" />
        {/* Face */}
        <circle cx="0" cy="2" r="14" fill="#d97706" />
        {/* Ears */}
        <circle cx="-10" cy="-8" r="5" fill="#d97706" />
        <circle cx="10" cy="-8" r="5" fill="#d97706" />
        <circle cx="-10" cy="-8" r="2.5" fill="#78350f" />
        <circle cx="10" cy="-8" r="2.5" fill="#78350f" />
        {/* Eyes & Nose/Snout */}
        <circle cx="-5" cy="0" r="1.5" fill="#451a03" />
        <circle cx="5" cy="0" r="1.5" fill="#451a03" />
        <ellipse cx="0" cy="10" rx="6" ry="4" fill="#fcd34d" />
        <circle cx="0" cy="8" r="2" fill="#451a03" />

        <text x="0" y="32" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#fde68a" filter="url(#lblGlow)">{l.omnivore}</text>
        <text x="0" y="40" textAnchor="middle" fontSize="5" fill="#fbbf24">{l.eatsBoth}</text>
      </g>
      
      {/* Title */}
      <rect x="90" y="112" width="60" height="14" rx="7" fill="rgba(0,0,0,0.4)" />
      <text x="120" y="122" textAnchor="middle" fontSize="8" fontWeight="700" fill="#cbd5e1" filter="url(#lblGlow)">{l.title}</text>
    </svg>
  );
});

// ─── MAMMAL ANATOMY ───────────────────────────────────────────────────────────

const ANATOMY_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Mammal Anatomy", fur: "Fur / Hair", lungs: "Lungs", milk: "Mammary glands", warmBlooded: "Warm-blooded", backbone: "Backbone", brain: "Large brain" },
  de: { title: "Säugetier-Anatomie", fur: "Fell / Haare", lungs: "Lungen", milk: "Milchdrüsen", warmBlooded: "Warmblütig", backbone: "Wirbelsäule", brain: "Großes Gehirn" },
  hu: { title: "Emlősök anatómiája", fur: "Szőrzet", lungs: "Tüdő", milk: "Emlőmirigy", warmBlooded: "Melegvérű", backbone: "Gerinc", brain: "Nagy agy" },
  ro: { title: "Anatomia mamiferelor", fur: "Blană / Păr", lungs: "Plămâni", milk: "Glande mamare", warmBlooded: "Cu sânge cald", backbone: "Coloană vertebrală", brain: "Creier mare" },
};

export const MammalAnatomySvg = memo(function MammalAnatomySvg({ lang = "de" }: { lang?: string }) {
  const l = ANATOMY_LABELS[lang as keyof typeof ANATOMY_LABELS] || ANATOMY_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="mammalAnatomyBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#171540" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#mammalAnatomyBg)" rx="12" />
      
      {/* ── Dog/Wolf Anatomy Base ── */}
      <g stroke="#cbd5e1" strokeWidth="1" strokeLinejoin="round" fill="none">
        {/* Silhouette/Fur Outline */}
        <path d="M 60 45 C 50 45, 45 55, 40 60 L 45 65 C 50 65, 55 60, 65 60 L 80 65 C 100 65, 140 60, 160 65 C 170 65, 175 75, 180 80 L 185 75 L 180 65 C 185 55, 180 45, 160 45 C 140 40, 100 45, 80 45 C 70 40, 65 45, 60 45 Z" strokeDasharray="2 2" stroke="#64748b" />
        
        {/* Legs Outline */}
        <path d="M 65 60 L 60 90 M 80 65 L 75 90 M 150 62 L 150 90 M 165 64 L 165 90" strokeDasharray="2 2" stroke="#64748b" />
      </g>

      {/* Internal Organs */}
      <g>
        {/* Brain */}
        <path d="M 52 48 C 58 45, 62 48, 60 52 C 55 54, 50 52, 52 48 Z" fill="#fca5a5" />
        
        {/* Backbone */}
        <path d="M 60 50 Q 80 45 110 48 T 165 50 Q 175 50 180 60 L 182 65" fill="none" stroke="#e2e8f0" strokeWidth="3" strokeDasharray="3 1" />
        
        {/* Heart & Lungs */}
        <ellipse cx="105" cy="58" rx="8" ry="5" fill="#ef4444" />
        <path d="M 105 52 C 115 50, 125 55, 120 62 C 115 65, 105 65, 105 52 Z" fill="#f472b6" opacity="0.8" />
        
        {/* Stomach / Digestion */}
        <path d="M 125 60 Q 135 55 140 65 Q 130 65 125 60 Z" fill="#fbbf24" opacity="0.8" />
        
        {/* Mammary Glands (bottom belly area) */}
        <path d="M 120 70 A 5 5 0 0 0 130 70 M 135 70 A 5 5 0 0 0 145 70" fill="none" stroke="#fbcfe8" strokeWidth="2" strokeLinecap="round" />
      </g>

      {/* ── Labels ── */}
      <line x1="56" y1="48" x2="45" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="35" y="32" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.brain}</text>

      <line x1="110" y1="48" x2="130" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="145" y="23" textAnchor="middle" fontSize="6" fontWeight="700" fill="#e2e8f0" filter="url(#lblGlow)">{l.backbone}</text>

      <line x1="160" y1="45" x2="185" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="200" y="33" textAnchor="middle" fontSize="6" fontWeight="700" fill="#cbd5e1" filter="url(#lblGlow)">{l.fur}</text>

      <line x1="115" y1="58" x2="80" y2="80" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="70" y="85" textAnchor="middle" fontSize="6" fontWeight="700" fill="#f472b6" filter="url(#lblGlow)">{l.lungs}</text>

      <line x1="135" y1="72" x2="160" y2="95" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="175" y="98" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fbcfe8" filter="url(#lblGlow)">{l.milk}</text>

      <rect x="90" y="115" width="60" height="12" rx="6" fill="rgba(239,68,68,0.2)" />
      <text x="120" y="123.5" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.warmBlooded}</text>
    </svg>
  );
});

// ─── FOOD CHAIN ───────────────────────────────────────────────────────────────

const CHAIN_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Food Chain", sun: "Sun", plant: "Plant", herbivore: "Herbivore", carnivore: "Carnivore", producer: "Producer", consumer1: "Primary consumer", consumer2: "Secondary consumer", energy: "Energy flow" },
  de: { title: "Nahrungskette", sun: "Sonne", plant: "Pflanze", herbivore: "Pflanzenfresser", carnivore: "Fleischfresser", producer: "Erzeuger", consumer1: "Erstverbraucher", consumer2: "Zweitverbraucher", energy: "Energiefluss" },
  hu: { title: "Tápláléklánc", sun: "Nap", plant: "Növény", herbivore: "Növényevő", carnivore: "Ragadozó", producer: "Termelő", consumer1: "Elsődleges fogyasztó", consumer2: "Másodlagos fogyasztó", energy: "Energiaáramlás" },
  ro: { title: "Lanțul trofic", sun: "Soare", plant: "Plantă", herbivore: "Erbivor", carnivore: "Carnivor", producer: "Producător", consumer1: "Consumator primar", consumer2: "Consumator secundar", energy: "Flux de energie" },
};

export const FoodChainSvg = memo(function FoodChainSvg({ lang = "de" }: { lang?: string }) {
  const l = CHAIN_LABELS[lang as keyof typeof CHAIN_LABELS] || CHAIN_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="foodChainBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#022c22" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
        <marker id="arrowFC" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#fcd34d" />
        </marker>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#foodChainBg)" rx="12" />
      
      {/* ── Nodes ── */}
      
      {/* Sun */}
      <circle cx="35" cy="50" r="16" fill="#fbbf24" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
        <line key={angle} x1="35" y1="50" x2={35 + Math.cos(angle * Math.PI / 180)*22} y2={50 + Math.sin(angle * Math.PI / 180)*22} stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" />
      ))}

      {/* Plant */}
      <path d="M 90 65 L 90 45" stroke="#34d399" strokeWidth="3" strokeLinecap="round" />
      <path d="M 90 55 C 80 50, 80 35, 90 40 C 95 35, 100 45, 90 55 Z" fill="#10b981" />
      <path d="M 90 60 C 95 55, 105 50, 100 60 C 95 65, 85 65, 90 60 Z" fill="#34d399" />

      {/* Herbivore (Rabbit) */}
      <ellipse cx="145" cy="55" rx="10" ry="8" fill="#cbd5e1" />
      <circle cx="152" cy="50" r="5" fill="#cbd5e1" />
      <ellipse cx="154" cy="43" rx="1.5" ry="5" fill="#94a3b8" />
      <ellipse cx="151" cy="44" rx="1.5" ry="4" fill="#94a3b8" />
      <circle cx="135" cy="55" r="3" fill="#e2e8f0" /> {/* tail */}

      {/* Carnivore (Fox/Wolf) */}
      <ellipse cx="200" cy="55" rx="12" ry="7" fill="#ea580c" />
      <circle cx="192" cy="50" r="6" fill="#ea580c" />
      <path d="M 190 46 L 188 40 L 194 45 Z" fill="#c2410c" />
      <path d="M 185 52 L 180 55 L 185 56 Z" fill="#1e293b" /> {/* nose */}
      <path d="M 210 53 Q 220 50 215 58 Q 210 58 210 53" fill="#f97316" /> {/* bushy tail */}

      {/* ── Arrows ── */}
      <line x1="60" y1="50" x2="72" y2="50" stroke="#fcd34d" strokeWidth="2" markerEnd="url(#arrowFC)" />
      <line x1="110" y1="50" x2="125" y2="50" stroke="#fcd34d" strokeWidth="2" markerEnd="url(#arrowFC)" />
      <line x1="165" y1="50" x2="180" y2="50" stroke="#fcd34d" strokeWidth="2" markerEnd="url(#arrowFC)" />

      {/* ── Labels ── */}
      {/* Top Titles */}
      <text x="35" y="20" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#fbbf24" filter="url(#lblGlow)">{l.sun}</text>
      <text x="90" y="20" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#6ee7b7" filter="url(#lblGlow)">{l.plant}</text>
      <text x="145" y="20" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#cbd5e1" filter="url(#lblGlow)">{l.herbivore}</text>
      <text x="200" y="20" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#fba918" filter="url(#lblGlow)">{l.carnivore}</text>

      {/* Bottom Roles */}
      <text x="90" y="78" textAnchor="middle" fontSize="5.5" fill="#34d399">{l.producer}</text>
      <text x="145" y="78" textAnchor="middle" fontSize="5.5" fill="#94a3b8">{l.consumer1}</text>
      <text x="200" y="78" textAnchor="middle" fontSize="5.5" fill="#ea580c">{l.consumer2}</text>

      {/* Energy Flow Text */}
      <rect x="90" y="112" width="60" height="14" rx="7" fill="rgba(0,0,0,0.4)" />
      <text x="120" y="122" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fcd34d" filter="url(#lblGlow)">{l.energy}</text>
      <line x1="155" y1="119" x2="165" y2="119" stroke="#fcd34d" strokeWidth="1" markerEnd="url(#arrowFC)" />
    </svg>
  );
});
