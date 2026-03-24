"use client";
// ─── PlantSvg — Plant biology illustrations ──────────────────────────────────
// Exports:
//   PlantAnatomySvg    — root / stem / leaf structure
//   PhotosynthesisSvg  — CO2 + water + sunlight -> O2 + glucose
//   FlowerPartsSvg     — petal / stamen / pistil / sepal
//   PollinationSvg     — bee + pollen transfer

import { memo } from "react";

// ─── SHARED DEFS ────────────────────────────────────────────────────────────
const LabelGlow = () => (
  <filter id="lblGlow">
    <feGaussianBlur stdDeviation="1.2" result="b" />
    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
  </filter>
);

// ─── PLANT ANATOMY ────────────────────────────────────────────────────────────

const ANATOMY_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Plant Anatomy", root: "Root", stem: "Stem", leaf: "Leaf", flower: "Flower", water: "Absorbs water", nutrients: "Transports nutrients" },
  de: { title: "Pflanzenanatomie", root: "Wurzel", stem: "Stängel", leaf: "Blatt", flower: "Blüte", water: "Nimmt Wasser auf", nutrients: "Transportiert Nährstoffe" },
  hu: { title: "Növényi felépítés", root: "Gyökér", stem: "Szár", leaf: "Levél", flower: "Virág", water: "Vizet szív fel", nutrients: "Tápanyagot szállít" },
  ro: { title: "Anatomia plantei", root: "Rădăcină", stem: "Tulpină", leaf: "Frunză", flower: "Floare", water: "Absoarbe apă", nutrients: "Transportă nutrienți" },
};

export const PlantAnatomySvg = memo(function PlantAnatomySvg({ lang = "de" }: { lang?: string }) {
  const l = ANATOMY_LABELS[lang as keyof typeof ANATOMY_LABELS] || ANATOMY_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="plantAnatomyBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#022c22" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
        <linearGradient id="stemGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#15803d" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#plantAnatomyBg)" rx="12" />
      
      {/* Soil / Ground */}
      <path d="M 0 100 Q 60 95 120 100 T 240 98 L 240 140 L 0 140 Z" fill="#3f2717" />
      <path d="M 0 100 Q 60 95 120 100 T 240 98" fill="none" stroke="#65a30d" strokeWidth="1.5" />

      {/* ── Roots ── */}
      <g stroke="#d97706" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M 120 100 L 120 130" strokeWidth="3" />
        <path d="M 120 105 Q 105 115 100 135 M 108 120 Q 95 125 90 120" strokeWidth="2" />
        <path d="M 120 110 Q 140 115 145 130 M 132 118 Q 145 120 150 115" strokeWidth="2" />
      </g>
      {/* Water particles near roots */}
      <circle cx="100" cy="125" r="1.5" fill="#38bdf8" />
      <circle cx="140" cy="125" r="1.5" fill="#38bdf8" />
      <circle cx="115" cy="135" r="1.5" fill="#38bdf8" />

      {/* ── Stem ── */}
      <line x1="120" y1="100" x2="120" y2="40" stroke="url(#stemGrad)" strokeWidth="4" strokeLinecap="round" />

      {/* ── Leaves ── */}
      <path d="M 120 80 Q 90 70 85 85 Q 100 95 120 80 Z" fill="#16a34a" stroke="#4ade80" strokeWidth="0.5" />
      <path d="M 120 80 Q 105 78 95 82" fill="none" stroke="#4ade80" strokeWidth="0.5" /> {/* leaf vein */}
      
      <path d="M 120 60 Q 155 45 160 60 Q 140 75 120 60 Z" fill="#16a34a" stroke="#4ade80" strokeWidth="0.5" />
      <path d="M 120 60 Q 140 55 150 58" fill="none" stroke="#4ade80" strokeWidth="0.5" /> {/* leaf vein */}

      {/* ── Flower ── */}
      <g transform="translate(120, 35)">
        <circle cx="0" cy="0" r="8" fill="#eab308" />
        {[0, 60, 120, 180, 240, 300].map(angle => (
          <path key={`petal${angle}`} d="M 0 0 Q 15 -10 20 0 Q 15 10 0 0" fill="#ec4899" transform={`rotate(${angle})`} opacity="0.9" />
        ))}
        <circle cx="0" cy="0" r="5" fill="#facc15" />
      </g>

      {/* ── Labels ── */}
      <line x1="125" y1="35" x2="160" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="175" y="22" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fbcfe8" filter="url(#lblGlow)">{l.flower}</text>

      <line x1="90" y1="80" x2="65" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="50" y="58" textAnchor="middle" fontSize="6" fontWeight="700" fill="#86efac" filter="url(#lblGlow)">{l.leaf}</text>

      <line x1="120" y1="70" x2="165" y2="85" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="180" y="87" textAnchor="middle" fontSize="6" fontWeight="700" fill="#4ade80" filter="url(#lblGlow)">{l.stem}</text>

      <line x1="130" y1="120" x2="165" y2="115" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="180" y="117" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fcd34d" filter="url(#lblGlow)">{l.root}</text>

      <rect x="15" y="123" width="60" height="10" rx="5" fill="rgba(2,132,199,0.5)" />
      <text x="45" y="130" textAnchor="middle" fontSize="5" fontWeight="700" fill="#bae6fd" filter="url(#lblGlow)">{l.water}</text>
    </svg>
  );
});

// ─── PHOTOSYNTHESIS ───────────────────────────────────────────────────────────

const PHOTO_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Photosynthesis", co2: "CO₂", o2: "O₂", water: "H₂O", sunlight: "Sunlight", glucose: "Glucose", chlorophyll: "Chlorophyll", formula: "CO₂ + H₂O + Light → O₂ + Glucose" },
  de: { title: "Photosynthese", co2: "CO₂", o2: "O₂", water: "H₂O", sunlight: "Sonnenlicht", glucose: "Glukose", chlorophyll: "Chlorophyll", formula: "CO₂ + H₂O + Licht → O₂ + Glukose" },
  hu: { title: "Fotoszintézis", co2: "CO₂", o2: "O₂", water: "H₂O", sunlight: "Napfény", glucose: "Glükóz", chlorophyll: "Klorofill", formula: "CO₂ + H₂O + Fény → O₂ + Glükóz" },
  ro: { title: "Fotosinteza", co2: "CO₂", o2: "O₂", water: "H₂O", sunlight: "Lumina soarelui", glucose: "Glucoză", chlorophyll: "Clorofilă", formula: "CO₂ + H₂O + Lumină → O₂ + Glucoză" },
};

export const PhotosynthesisSvg = memo(function PhotosynthesisSvg({ lang = "de" }: { lang?: string }) {
  const l = PHOTO_LABELS[lang as keyof typeof PHOTO_LABELS] || PHOTO_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="photosynthesisBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#022c22" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
        <marker id="arrowPhoto" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" />
        </marker>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#photosynthesisBg)" rx="12" />
      
      {/* Sun */}
      <circle cx="35" cy="30" r="14" fill="#fbbf24" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map(angle => (
        <line key={`sun${angle}`} x1="35" y1="30" x2={35 + Math.cos(angle * Math.PI / 180)*20} y2={30 + Math.sin(angle * Math.PI / 180)*20} stroke="#fcd34d" strokeWidth="2" strokeLinecap="round" />
      ))}

      {/* Giant Leaf */}
      <g transform="translate(120, 70) rotate(-15)">
        <path d="M -50 0 C -20 -40, 30 -30, 60 0 C 30 30, -20 40, -50 0 Z" fill="#15803d" stroke="#4ade80" strokeWidth="1" />
        <path d="M -45 0 L 55 0 M -20 0 L -10 -15 M 0 0 L 15 -12 M 20 0 L 35 -10 M -20 0 L -10 15 M 0 0 L 15 12 M 20 0 L 35 10" fill="none" stroke="#4ade80" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* ── Arrows & Inputs/Outputs ── */}
      {/* Sunlight In */}
      <g color="#fcd34d">
        <path d="M 50 45 L 90 60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" markerEnd="url(#arrowPhoto)" />
        <text x="65" y="48" textAnchor="middle" fontSize="6" fontWeight="700" fill="currentColor" filter="url(#lblGlow)">{l.sunlight}</text>
      </g>

      {/* CO2 In */}
      <g color="#94a3b8">
        <path d="M 120 20 L 120 45" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowPhoto)" />
        <text x="120" y="15" textAnchor="middle" fontSize="7" fontWeight="700" fill="currentColor" filter="url(#lblGlow)">{l.co2}</text>
      </g>

      {/* Water In */}
      <g color="#38bdf8">
        <path d="M 60 110 L 85 85" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowPhoto)" />
        <text x="55" y="118" textAnchor="middle" fontSize="7" fontWeight="700" fill="currentColor" filter="url(#lblGlow)">{l.water}</text>
      </g>

      {/* O2 Out */}
      <g color="#bae6fd">
        <path d="M 140 50 L 180 30" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowPhoto)" />
        <text x="190" y="25" textAnchor="middle" fontSize="7" fontWeight="700" fill="currentColor" filter="url(#lblGlow)">{l.o2}</text>
      </g>

      {/* Glucose Out */}
      <g color="#f472b6">
        <path d="M 150 85 L 185 105" fill="none" stroke="currentColor" strokeWidth="1.5" markerEnd="url(#arrowPhoto)" />
        <text x="200" y="112" textAnchor="middle" fontSize="7" fontWeight="700" fill="currentColor" filter="url(#lblGlow)">{l.glucose}</text>
      </g>

      {/* Chloroplast / Chlorophyll label */}
      <circle cx="120" cy="70" r="3" fill="#86efac" />
      <line x1="120" y1="73" x2="120" y2="95" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="120" y="103" textAnchor="middle" fontSize="6" fontWeight="700" fill="#86efac" filter="url(#lblGlow)">{l.chlorophyll}</text>

      {/* Title & Formula */}
      <rect x="60" y="120" width="120" height="14" rx="7" fill="rgba(0,0,0,0.5)" />
      <text x="120" y="130" textAnchor="middle" fontSize="6" fontWeight="700" fill="#6ee7b7" filter="url(#lblGlow)">{l.formula}</text>
    </svg>
  );
});

// ─── FLOWER PARTS ─────────────────────────────────────────────────────────────

const FLOWER_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Flower Parts", petal: "Petal", stamen: "Stamen", pistil: "Pistil", sepal: "Sepal", pollen: "Pollen", ovary: "Ovary", nectar: "Nectar" },
  de: { title: "Blütenteile", petal: "Blütenblatt", stamen: "Staubblatt", pistil: "Stempel", sepal: "Kelchblatt", pollen: "Pollen", ovary: "Fruchtknoten", nectar: "Nektar" },
  hu: { title: "Virág részei", petal: "Sziromlevél", stamen: "Porzó", pistil: "Termő", sepal: "Csészelevél", pollen: "Virágpor", ovary: "Magház", nectar: "Nektár" },
  ro: { title: "Părțile florii", petal: "Petală", stamen: "Stamină", pistil: "Pistil", sepal: "Sepală", pollen: "Polen", ovary: "Ovar", nectar: "Nectar" },
};

export const FlowerPartsSvg = memo(function FlowerPartsSvg({ lang = "de" }: { lang?: string }) {
  const l = FLOWER_LABELS[lang as keyof typeof FLOWER_LABELS] || FLOWER_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="flowerPartsBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2e1065" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#flowerPartsBg)" rx="12" />
      
      {/* Stem & Receptacle */}
      <path d="M 120 100 L 120 140" stroke="#22c55e" strokeWidth="6" />
      <path d="M 110 100 C 110 115, 130 115, 130 100 Z" fill="#16a34a" />

      {/* Background Petals */}
      <path d="M 120 90 C 70 80, 70 20, 120 50 C 170 20, 170 80, 120 90 Z" fill="#db2777" opacity="0.8" />
      
      {/* Pistil (Center: Ovary, Style, Stigma) */}
      <path d="M 112 95 C 105 85, 115 75, 118 60 L 117 40 L 123 40 L 122 60 C 125 75, 135 85, 128 95 Z" fill="#86efac" />
      <ellipse cx="120" cy="40" rx="6" ry="3" fill="#34d399" /> {/* Stigma */}
      <circle cx="120" cy="88" r="4" fill="#10b981" /> {/* Ovules inside Ovary */}

      {/* Stamens (Filament & Anther) */}
      {[[-30, 45], [-15, 35], [15, 35], [30, 45]].map(([dx, y], i) => (
        <g key={i}>
          <path d={`M 120 85 Q ${120 + dx*0.5} 65 ${120 + dx} ${y}`} fill="none" stroke="#fde047" strokeWidth="1.5" />
          <ellipse cx={120 + dx} cy={y} rx="4" ry="2.5" fill="#ca8a04" transform={`rotate(${dx > 0 ? 30 : -30} ${120 + dx} ${y})`} />
          <circle cx={120 + dx} cy={y - 2} r="1" fill="#fef08a" /> {/* Pollen dots */}
          <circle cx={120 + dx + 2} cy={y + 1} r="1" fill="#fef08a" />
        </g>
      ))}

      {/* Foreground Petals (Left and Right) */}
      <path d="M 115 95 C 50 100, 60 40, 115 75 Z" fill="#f472b6" opacity="0.9" />
      <path d="M 125 95 C 190 100, 180 40, 125 75 Z" fill="#f472b6" opacity="0.9" />

      {/* Sepals */}
      <path d="M 115 100 C 100 105, 90 95, 115 95 Z" fill="#22c55e" />
      <path d="M 125 100 C 140 105, 150 95, 125 95 Z" fill="#22c55e" />

      {/* ── Labels ── */}
      <line x1="80" y1="65" x2="60" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="50" y="42" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fbcfe8" filter="url(#lblGlow)">{l.petal}</text>

      <line x1="120" y1="40" x2="155" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="170" y="22" textAnchor="middle" fontSize="6" fontWeight="700" fill="#86efac" filter="url(#lblGlow)">{l.pistil}</text>

      <line x1="150" y1="45" x2="185" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="200" y="47" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fde047" filter="url(#lblGlow)">{l.stamen}</text>
      <text x="200" y="55" textAnchor="middle" fontSize="5" fill="#fef08a" filter="url(#lblGlow)">({l.pollen})</text>

      <line x1="120" y1="88" x2="160" y2="115" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="175" y="118" textAnchor="middle" fontSize="6" fontWeight="700" fill="#6ee7b7" filter="url(#lblGlow)">{l.ovary}</text>

      <line x1="105" y1="100" x2="70" y2="115" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="55" y="118" textAnchor="middle" fontSize="6" fontWeight="700" fill="#4ade80" filter="url(#lblGlow)">{l.sepal}</text>
    </svg>
  );
});

// ─── POLLINATION ──────────────────────────────────────────────────────────────

const POLLINATION_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Pollination", bee: "Bee", pollen: "Pollen", flower: "Flower", transfer: "Pollen transfer", windPoll: "Wind pollination", insectPoll: "Insect pollination", fruit: "Fruit forms" },
  de: { title: "Bestäubung", bee: "Biene", pollen: "Pollen", flower: "Blüte", transfer: "Pollenübertragung", windPoll: "Windbestäubung", insectPoll: "Insektenbestäubung", fruit: "Frucht entsteht" },
  hu: { title: "Beporzás", bee: "Méh", pollen: "Virágpor", flower: "Virág", transfer: "Pollen átadás", windPoll: "Szélbeporzás", insectPoll: "Rovarbeporzás", fruit: "Termés fejlődik" },
  ro: { title: "Polenizarea", bee: "Albină", pollen: "Polen", flower: "Floare", transfer: "Transfer de polen", windPoll: "Polenizare prin vânt", insectPoll: "Polenizare prin insecte", fruit: "Se formează fructul" },
};

export const PollinationSvg = memo(function PollinationSvg({ lang = "de" }: { lang?: string }) {
  const l = POLLINATION_LABELS[lang as keyof typeof POLLINATION_LABELS] || POLLINATION_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="pollinationBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>
        <marker id="arrowPoll" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#fde047" />
        </marker>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#pollinationBg)" rx="12" />
      
      {/* Flight Path */}
      <path d="M 60 70 Q 90 20 120 50 T 180 70" fill="none" stroke="#fde047" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" markerEnd="url(#arrowPoll)" />

      {/* Flower A (Left) */}
      <g transform="translate(50, 90)">
        <path d="M 0 0 L 0 50" stroke="#22c55e" strokeWidth="4" />
        <path d="M 0 10 Q -15 -10 -20 5 Q -15 20 0 10 Z" fill="#60a5fa" />
        <path d="M 0 10 Q 15 -10 20 5 Q 15 20 0 10 Z" fill="#60a5fa" />
        <path d="M 0 10 Q -15 30 -5 35 Q 5 20 0 10 Z" fill="#3b82f6" />
        <path d="M 0 10 Q 15 30 5 35 Q -5 20 0 10 Z" fill="#3b82f6" />
        <circle cx="0" cy="10" r="6" fill="#facc15" />
        {/* Pollen dots */}
        <circle cx="-2" cy="8" r="1.5" fill="#fef08a" />
        <circle cx="3" cy="11" r="1.5" fill="#fef08a" />
        <circle cx="0" cy="13" r="1.5" fill="#fef08a" />
      </g>

      {/* Flower B (Right) */}
      <g transform="translate(190, 90)">
        <path d="M 0 0 L 0 50" stroke="#22c55e" strokeWidth="4" />
        <path d="M 0 10 Q -15 -10 -20 5 Q -15 20 0 10 Z" fill="#f472b6" />
        <path d="M 0 10 Q 15 -10 20 5 Q 15 20 0 10 Z" fill="#f472b6" />
        <path d="M 0 10 Q -15 30 -5 35 Q 5 20 0 10 Z" fill="#ec4899" />
        <path d="M 0 10 Q 15 30 5 35 Q -5 20 0 10 Z" fill="#ec4899" />
        <circle cx="0" cy="10" r="6" fill="#facc15" />
      </g>

      {/* Bee */}
      <g transform="translate(120, 50) rotate(15)">
        {/* Wings */}
        <ellipse cx="-2" cy="-8" rx="4" ry="7" fill="#e0f2fe" opacity="0.8" transform="rotate(-30 -2 -8)" />
        <ellipse cx="4" cy="-8" rx="4" ry="7" fill="#e0f2fe" opacity="0.8" transform="rotate(30 4 -8)" />
        {/* Body */}
        <ellipse cx="0" cy="0" rx="10" ry="6" fill="#facc15" />
        <path d="M -5 -5 L -5 5 M 0 -6 L 0 6 M 5 -5 L 5 5" stroke="#1e293b" strokeWidth="2.5" />
        {/* Head */}
        <circle cx="10" cy="0" r="3.5" fill="#1e293b" />
        {/* Antennae */}
        <path d="M 12 -2 Q 15 -5 16 -3 M 12 2 Q 15 5 16 3" fill="none" stroke="#1e293b" strokeWidth="0.8" />
        {/* Pollen carried */}
        <circle cx="-4" cy="4" r="1.5" fill="#fef08a" />
        <circle cx="2" cy="5" r="1.5" fill="#fef08a" />
      </g>

      {/* Pollen falling on flower B */}
      <circle cx="185" cy="80" r="1" fill="#fef08a" />
      <circle cx="192" cy="75" r="1.5" fill="#fef08a" />
      <circle cx="188" cy="88" r="1" fill="#fef08a" />

      {/* ── Labels ── */}
      <text x="120" y="30" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#fde047" filter="url(#lblGlow)">{l.transfer}</text>

      <line x1="120" y1="40" x2="120" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="120" y="17" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fef08a" filter="url(#lblGlow)">{l.bee}</text>

      <line x1="190" y1="70" x2="215" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="222" y="52" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fef08a" filter="url(#lblGlow)">{l.pollen}</text>

      <rect x="90" y="115" width="60" height="14" rx="7" fill="rgba(0,0,0,0.5)" />
      <text x="120" y="125" textAnchor="middle" fontSize="6" fontWeight="700" fill="#bae6fd" filter="url(#lblGlow)">{l.insectPoll}</text>
    </svg>
  );
});
