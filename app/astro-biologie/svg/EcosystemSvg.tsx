"use client";
// ─── EcosystemSvg — Ecosystem & ecology illustrations ───────────────────────
// Exports:
//   ForestLayersSvg   — forest stratification (canopy, understory, floor)
//   FoodWebSvg        — food web (producer, consumer, decomposer)
//   WaterEcosystemSvg — aquatic ecosystems (freshwater vs saltwater)
//   DecomposerSvg     — decomposers (fungi, bacteria)

import { memo } from "react";

// ─── SHARED DEFS ────────────────────────────────────────────────────────────
const LabelGlow = () => (
  <filter id="lblGlow">
    <feGaussianBlur stdDeviation="1.2" result="b" />
    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
  </filter>
);

// ─── FOREST LAYERS ──────────────────────────────────────────────────────────

const FOREST_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Forest Layers", canopy: "Canopy", understory: "Understory", shrub: "Shrub Layer", floor: "Forest Floor", emergent: "Emergent Layer" },
  de: { title: "Waldschichten", canopy: "Kronendach", understory: "Unterholz", shrub: "Strauchschicht", floor: "Waldboden", emergent: "Überständer" },
  hu: { title: "Erdő szintjei", canopy: "Lombkorona", understory: "Alsó lombkorona", shrub: "Cserjeszint", floor: "Erdőtalaj", emergent: "Kiemelkedő szint" },
  ro: { title: "Straturile pădurii", canopy: "Coronament", understory: "Subarboret", shrub: "Strat arbustiv", floor: "Sol forestier", emergent: "Strat emergent" },
};

export const ForestLayersSvg = memo(function ForestLayersSvg({ lang = "de" }: { lang?: string }) {
  const l = FOREST_LABELS[lang as keyof typeof FOREST_LABELS] || FOREST_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="forLayBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#022c22" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
        <linearGradient id="treeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#forLayBg)" rx="12" />
      
      {/* Background trees */}
      <path d="M 40 130 L 40 50 M 180 130 L 180 30" stroke="#065f46" strokeWidth="6" strokeLinecap="round" opacity="0.5" />
      <ellipse cx="40" cy="50" rx="20" ry="30" fill="#065f46" opacity="0.5" />
      <ellipse cx="180" cy="30" rx="30" ry="25" fill="#065f46" opacity="0.5" />

      {/* 5. Forest Floor */}
      <rect x="0" y="125" width="240" height="15" fill="#451a03" />
      <path d="M 10 125 L 20 120 L 30 125 M 60 125 L 70 122 L 80 125 M 150 125 L 160 118 L 170 125" fill="none" stroke="#65a30d" strokeWidth="1.5" />
      
      {/* 4. Shrub Layer */}
      <ellipse cx="100" cy="115" rx="15" ry="10" fill="url(#treeGrad)" opacity="0.8" />
      <ellipse cx="140" cy="120" rx="12" ry="8" fill="url(#treeGrad)" opacity="0.7" />
      <path d="M 100 125 L 100 115 M 140 125 L 140 120" stroke="#78350f" strokeWidth="2" />

      {/* 3. Understory */}
      <path d="M 60 125 L 60 70" stroke="#78350f" strokeWidth="4" />
      <ellipse cx="60" cy="70" rx="20" ry="15" fill="url(#treeGrad)" />
      
      <path d="M 160 125 L 160 60" stroke="#78350f" strokeWidth="5" />
      <ellipse cx="160" cy="60" rx="25" ry="18" fill="url(#treeGrad)" />

      {/* 2. Canopy Layer */}
      <path d="M 90 125 L 90 35 M 130 125 L 130 40 M 190 125 L 190 30" stroke="#451a03" strokeWidth="7" />
      <path d="M 60 40 Q 90 15 120 40 Q 150 10 180 35 Q 210 20 220 50 Q 190 60 160 55 Q 120 65 90 50 Q 50 60 40 45 Z" fill="url(#treeGrad)" />
      
      {/* 1. Emergent Layer */}
      <path d="M 120 125 L 120 15" stroke="#451a03" strokeWidth="8" />
      <path d="M 100 25 C 100 0, 140 0, 140 25 C 150 35, 130 40, 120 40 C 110 40, 90 35, 100 25 Z" fill="#34d399" />

      {/* ── Labels ── */}
      {/* Emergent */}
      <line x1="120" y1="20" x2="60" y2="15" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="50" y="13" textAnchor="middle" fontSize="6" fontWeight="700" fill="#a7f3d0" filter="url(#lblGlow)">{l.emergent}</text>

      {/* Canopy */}
      <line x1="150" y1="35" x2="195" y2="25" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="210" y="22" textAnchor="middle" fontSize="6" fontWeight="700" fill="#6ee7b7" filter="url(#lblGlow)">{l.canopy}</text>

      {/* Understory */}
      <line x1="160" y1="65" x2="200" y2="65" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="215" y="67" textAnchor="middle" fontSize="6" fontWeight="700" fill="#34d399" filter="url(#lblGlow)">{l.understory}</text>

      {/* Shrub */}
      <line x1="100" y1="110" x2="60" y2="100" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="45" y="98" textAnchor="middle" fontSize="6" fontWeight="700" fill="#10b981" filter="url(#lblGlow)">{l.shrub}</text>

      {/* Floor */}
      <line x1="140" y1="130" x2="190" y2="130" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="210" y="132" textAnchor="middle" fontSize="6" fontWeight="700" fill="#d97706" filter="url(#lblGlow)">{l.floor}</text>
    </svg>
  );
});

// ─── FOOD WEB ───────────────────────────────────────────────────────────────

const FOODWEB_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Food Web", producer: "Producers", primary: "Primary Consumers", secondary: "Secondary Consumers", decomposer: "Decomposers", energy: "Energy Flow" },
  de: { title: "Nahrungsnetz", producer: "Produzenten", primary: "Primärkonsumenten", secondary: "Sekundärkonsumenten", decomposer: "Destruenten", energy: "Energiefluss" },
  hu: { title: "Táplálékháló", producer: "Termelők", primary: "Elsődleges fogyasztók", secondary: "Másodlagos fogyasztók", decomposer: "Lebontók", energy: "Energiaáramlás" },
  ro: { title: "Rețea trofică", producer: "Producători", primary: "Consumatori primari", secondary: "Consumatori secundari", decomposer: "Descompunători", energy: "Flux de energie" },
};

export const FoodWebSvg = memo(function FoodWebSvg({ lang = "de" }: { lang?: string }) {
  const l = FOODWEB_LABELS[lang as keyof typeof FOODWEB_LABELS] || FOODWEB_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="fdWebBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#020617" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
        {/* Arrowhead marker */}
        <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#fbbf24" />
        </marker>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#fdWebBg)" rx="12" />
      
      {/* ── Arrows (Energy Flow) ── */}
      <g fill="none" stroke="#fbbf24" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.8">
        <path d="M 120 105 L 80 80" />  {/* Plant -> Caterpillar */}
        <path d="M 120 105 L 160 80" /> {/* Plant -> Rabbit */}
        <path d="M 75 60 L 115 35" />   {/* Caterpillar -> Bird */}
        <path d="M 165 60 L 125 35" />  {/* Rabbit -> Hawk/Bird */}
        <path d="M 110 25 L 50 45" />   {/* Bird -> Decomposer (Fungi) */}
        <path d="M 120 115 L 45 60" />  {/* Plant -> Decomposer */}
      </g>

      {/* ── Organisms (Stylized) ── */}
      {/* 1. Producer (Plant/Grass) */}
      <circle cx="120" cy="115" r="16" fill="#047857" stroke="#34d399" strokeWidth="1" />
      <path d="M 115 120 Q 120 105 125 120" fill="none" stroke="#6ee7b7" strokeWidth="2" />
      <path d="M 118 115 Q 110 110 112 108 M 122 115 Q 130 110 128 108" fill="none" stroke="#6ee7b7" strokeWidth="1.5" />

      {/* 2. Primary Consumers (Herbivores) */}
      <circle cx="70" cy="70" r="14" fill="#1e40af" stroke="#60a5fa" strokeWidth="1" />
      {/* Caterpillar shape */}
      <path d="M 64 70 A 3 3 0 1 1 68 70 A 3 3 0 1 1 72 70 A 3 3 0 1 1 76 70" fill="#93c5fd" />

      <circle cx="170" cy="70" r="14" fill="#1e40af" stroke="#60a5fa" strokeWidth="1" />
      {/* Rabbit shape */}
      <ellipse cx="170" cy="72" rx="6" ry="4" fill="#93c5fd" />
      <circle cx="174" cy="68" r="3" fill="#93c5fd" />
      <path d="M 173 66 L 171 60 M 175 66 L 177 60" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round" />

      {/* 3. Secondary Consumer (Carnivore/Omnivore) */}
      <circle cx="120" cy="25" r="16" fill="#991b1b" stroke="#f87171" strokeWidth="1" />
      {/* Bird shape */}
      <path d="M 112 25 Q 120 15 128 25 Q 120 30 112 25 Z" fill="#fca5a5" />
      <path d="M 128 25 L 132 24 L 128 27 Z" fill="#fef08a" />

      {/* 4. Decomposer (Fungi) */}
      <circle cx="35" cy="50" r="14" fill="#78350f" stroke="#d97706" strokeWidth="1" />
      {/* Mushroom shape */}
      <path d="M 33 55 L 33 48 M 37 55 L 37 48" stroke="#fcd34d" strokeWidth="2" />
      <path d="M 28 48 C 28 40, 42 40, 42 48 Z" fill="#fbbf24" />

      {/* ── Labels ── */}
      <text x="120" y="138" textAnchor="middle" fontSize="6" fontWeight="700" fill="#6ee7b7" filter="url(#lblGlow)">{l.producer}</text>
      
      <rect x="5" y="75" width="55" height="10" rx="5" fill="rgba(0,0,0,0.5)" />
      <text x="32.5" y="82" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.primary}</text>
      
      <rect x="185" y="65" width="50" height="10" rx="5" fill="rgba(0,0,0,0.5)" />
      <text x="210" y="72" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.secondary}</text>

      <text x="35" y="32" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#fcd34d" filter="url(#lblGlow)">{l.decomposer}</text>

      {/* Legend */}
      <line x1="180" y1="120" x2="200" y2="120" stroke="#fbbf24" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <text x="215" y="122" textAnchor="middle" fontSize="5.5" fill="#fbbf24" filter="url(#lblGlow)">{l.energy}</text>
    </svg>
  );
});

// ─── WATER ECOSYSTEM ────────────────────────────────────────────────────────

const WATER_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Aquatic Ecosystems", freshwater: "Freshwater", saltwater: "Saltwater", plankton: "Plankton", coral: "Coral Reef", riverbed: "Riverbed" },
  de: { title: "Wasserökosysteme", freshwater: "Süßwasser", saltwater: "Salzwasser", plankton: "Plankton", coral: "Korallenriff", riverbed: "Flussbett" },
  hu: { title: "Vízi ökoszisztémák", freshwater: "Édesvíz", saltwater: "Sósvíz", plankton: "Plankton", coral: "Korallzátony", riverbed: "Folyómeder" },
  ro: { title: "Ecosisteme acvatice", freshwater: "Apă dulce", saltwater: "Apă sărată", plankton: "Plancton", coral: "Recif de corali", riverbed: "Albie" },
};

export const WaterEcosystemSvg = memo(function WaterEcosystemSvg({ lang = "de" }: { lang?: string }) {
  const l = WATER_LABELS[lang as keyof typeof WATER_LABELS] || WATER_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        {/* River (Fresh) gradient */}
        <linearGradient id="freshWater" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0369a1" />
        </linearGradient>
        {/* Ocean (Salt) gradient */}
        <linearGradient id="saltWater" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#1e3a8a" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="#1e3a8a" rx="12" />
      
      {/* Background split */}
      <path d="M 0 0 L 100 0 L 120 140 L 0 140 Z" fill="url(#freshWater)" />
      <path d="M 100 0 L 240 0 L 240 140 L 120 140 Z" fill="url(#saltWater)" />

      {/* Surface Waves */}
      <path d="M 0 20 Q 20 15 40 20 T 80 20 T 120 20 T 160 20 T 200 20 T 240 20 L 240 0 L 0 0 Z" fill="#e0f2fe" opacity="0.3" />

      {/* ── Freshwater Side (Left) ── */}
      {/* Reeds */}
      <path d="M 15 140 L 20 80 M 25 140 L 25 70 M 35 140 L 30 85" stroke="#166534" strokeWidth="2.5" strokeLinecap="round" />
      <ellipse cx="20" cy="85" rx="2" ry="8" fill="#78350f" />
      <ellipse cx="25" cy="75" rx="2" ry="7" fill="#78350f" />
      
      {/* Riverbed (Stones) */}
      <path d="M -10 140 Q 20 120 60 135 Q 90 125 120 140 Z" fill="#78350f" />
      <circle cx="30" cy="130" r="4" fill="#a8a29e" />
      <circle cx="45" cy="135" r="5" fill="#78716c" />
      <circle cx="70" cy="132" r="3" fill="#a8a29e" />

      {/* ── Saltwater Side (Right) ── */}
      {/* Coral Reef */}
      <path d="M 120 140 Q 150 110 180 125 Q 210 100 250 140 Z" fill="#831843" />
      <path d="M 160 125 Q 155 105 150 100 M 160 125 Q 165 110 170 105 M 160 115 Q 150 110 145 105" fill="none" stroke="#f472b6" strokeWidth="3" strokeLinecap="round" />
      <path d="M 190 130 Q 185 110 190 95 M 190 115 Q 180 105 175 100 M 190 105 Q 200 95 205 90" fill="none" stroke="#fb923c" strokeWidth="3" strokeLinecap="round" />
      <circle cx="215" cy="125" r="12" fill="#be185d" />
      <circle cx="215" cy="125" r="6" fill="#f472b6" />

      {/* Plankton (Floating in middle/right column) */}
      <g fill="#86efac" opacity="0.8">
        {[...Array(12)].map((_, i) => (
          <circle key={i} cx={100 + Math.random()*80} cy={30 + Math.random()*50} r={0.5 + Math.random()*1} />
        ))}
      </g>
      <path d="M 130 50 Q 132 48 134 50 M 150 60 Q 152 58 154 60" fill="none" stroke="#86efac" strokeWidth="0.5" />

      {/* ── Labels ── */}
      <rect x="20" y="30" width="55" height="14" rx="7" fill="rgba(3,105,161,0.6)" />
      <text x="47.5" y="39" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#bae6fd" filter="url(#lblGlow)">{l.freshwater}</text>

      <rect x="165" y="30" width="55" height="14" rx="7" fill="rgba(30,58,138,0.6)" />
      <text x="192.5" y="39" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.saltwater}</text>

      <line x1="60" y1="125" x2="80" y2="105" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="90" y="103" textAnchor="middle" fontSize="6" fontWeight="700" fill="#d6d3d1" filter="url(#lblGlow)">{l.riverbed}</text>

      <line x1="180" y1="100" x2="160" y2="80" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="155" y="77" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fbcfe8" filter="url(#lblGlow)">{l.coral}</text>

      <line x1="120" y1="55" x2="100" y2="65" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="90" y="68" textAnchor="middle" fontSize="6" fontWeight="700" fill="#86efac" filter="url(#lblGlow)">{l.plankton}</text>
    </svg>
  );
});

// ─── DECOMPOSER ─────────────────────────────────────────────────────────────

const DECOMPOSER_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Decomposers", fungi: "Fungi", bacteria: "Bacteria", hyphae: "Hyphae", spores: "Spores", nutrientCycle: "Nutrient Cycle" },
  de: { title: "Destruenten", fungi: "Pilze", bacteria: "Bakterien", hyphae: "Hyphen", spores: "Sporen", nutrientCycle: "Nährstoffkreislauf" },
  hu: { title: "Lebontók", fungi: "Gombák", bacteria: "Baktériumok", hyphae: "Hifák", spores: "Spórák", nutrientCycle: "Tápanyagkörforgás" },
  ro: { title: "Descompunători", fungi: "Ciuperci", bacteria: "Bacterii", hyphae: "Hife", spores: "Spori", nutrientCycle: "Ciclul nutrienților" },
};

export const DecomposerSvg = memo(function DecomposerSvg({ lang = "de" }: { lang?: string }) {
  const l = DECOMPOSER_LABELS[lang as keyof typeof DECOMPOSER_LABELS] || DECOMPOSER_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="decompBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#decompBg)" rx="12" />
      
      {/* Ground / Soil Layer */}
      <path d="M 0 90 Q 60 85 120 95 T 240 90 L 240 140 L 0 140 Z" fill="#3f2717" />
      <path d="M 0 90 Q 60 85 120 95 T 240 90" fill="none" stroke="#65a30d" strokeWidth="2" />

      {/* ── Hyphae (Mycelial Network underground) ── */}
      <g fill="none" stroke="#d6d3d1" strokeWidth="1.2" opacity="0.6">
        <path d="M 120 95 L 120 110 L 100 125 M 120 110 L 140 120 M 100 125 L 80 120 M 100 125 L 110 135 M 140 120 L 150 135 M 140 120 L 160 115" />
      </g>

      {/* ── Fungi (Mushroom) ── */}
      {/* Stem */}
      <path d="M 115 95 Q 115 60 120 50 Q 125 60 125 95 Z" fill="#fef3c7" />
      {/* Gills under cap */}
      <ellipse cx="120" cy="50" rx="25" ry="6" fill="#b45309" />
      {/* Cap */}
      <path d="M 95 50 C 95 20, 145 20, 145 50 Z" fill="#ef4444" />
      <circle cx="110" cy="35" r="3" fill="#fef3c7" />
      <circle cx="130" cy="40" r="4" fill="#fef3c7" />
      <circle cx="122" cy="28" r="2.5" fill="#fef3c7" />

      {/* Spores falling */}
      <circle cx="105" cy="58" r="1.5" fill="#fcd34d" opacity="0.8" />
      <circle cx="112" cy="65" r="1" fill="#fcd34d" opacity="0.8" />
      <circle cx="128" cy="62" r="1.5" fill="#fcd34d" opacity="0.8" />
      <circle cx="135" cy="55" r="1" fill="#fcd34d" opacity="0.8" />

      {/* ── Bacteria (in soil) ── */}
      <g fill="#34d399">
        <rect x="40" y="110" width="8" height="4" rx="2" transform="rotate(-20 44 112)" />
        <rect x="50" y="115" width="8" height="4" rx="2" transform="rotate(30 54 117)" />
        <rect x="180" y="105" width="8" height="4" rx="2" transform="rotate(10 184 107)" />
        <rect x="190" y="112" width="8" height="4" rx="2" transform="rotate(-40 194 114)" />
      </g>

      {/* ── Nutrient Cycle Arrows ── */}
      <path d="M 60 100 C 30 90, 30 40, 60 30" fill="none" stroke="#6ee7b7" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrow)" />
      <path d="M 180 30 C 210 40, 210 90, 180 100" fill="none" stroke="#6ee7b7" strokeWidth="1.5" strokeDasharray="4 3" markerEnd="url(#arrow)" />

      {/* ── Labels ── */}
      <line x1="120" y1="20" x2="120" y2="10" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="120" y="8" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.fungi}</text>

      <line x1="100" y1="60" x2="80" y2="60" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="65" y="62" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fcd34d" filter="url(#lblGlow)">{l.spores}</text>

      <line x1="130" y1="120" x2="160" y2="125" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="175" y="127" textAnchor="middle" fontSize="6" fontWeight="700" fill="#d6d3d1" filter="url(#lblGlow)">{l.hyphae}</text>

      <line x1="55" y1="115" x2="70" y2="125" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="85" y="127" textAnchor="middle" fontSize="6" fontWeight="700" fill="#6ee7b7" filter="url(#lblGlow)">{l.bacteria}</text>

      <rect x="90" y="130" width="60" height="10" rx="5" fill="rgba(6,78,59,0.8)" />
      <text x="120" y="137" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#a7f3d0" filter="url(#lblGlow)">{l.nutrientCycle}</text>
    </svg>
  );
});
