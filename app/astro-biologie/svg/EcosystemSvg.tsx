"use client";
// ─── EcosystemSvg — Ecosystem & ecology illustrations ───────────────────────
// Exports:
//   ForestLayersSvg   — forest stratification (canopy, understory, floor)
//   FoodWebSvg        — food web (producer, consumer, decomposer)
//   WaterEcosystemSvg — aquatic ecosystems (freshwater vs saltwater)
//   DecomposerSvg     — decomposers (fungi, bacteria)
//
// TODO: Replace placeholder SVGs with detailed illustrations

import { memo } from "react";

// ─── FOREST LAYERS ──────────────────────────────────────────────────────────

const FOREST_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Forest Layers", canopy: "Canopy", understory: "Understory", shrub: "Shrub Layer", floor: "Forest Floor", emergent: "Emergent Layer" },
  de: { title: "Waldschichten", canopy: "Kronendach", understory: "Unterholz", shrub: "Strauchschicht", floor: "Waldboden", emergent: "Überständer" },
  hu: { title: "Erdő szintjei", canopy: "Lombkorona", understory: "Alombszint", shrub: "Cserje szint", floor: "Erdőtalaj", emergent: "Felső szint" },
  ro: { title: "Straturile pădurii", canopy: "Coronament", understory: "Subarboret", shrub: "Strat arbustiv", floor: "Sol forestier", emergent: "Strat emergent" },
};

export const ForestLayersSvg = memo(function ForestLayersSvg({ lang = "de" }: { lang?: string }) {
  const l = FOREST_LABELS[lang as keyof typeof FOREST_LABELS] || FOREST_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="forLayBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#052e16" />
          <stop offset="100%" stopColor="#064e3b" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#forLayBg)" rx="12" />
      {/* TODO: detailed forest layers illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🌳</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#6ee7b7">{l.title}</text>
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
          <stop offset="0%" stopColor="#052e16" />
          <stop offset="100%" stopColor="#065f46" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#fdWebBg)" rx="12" />
      {/* TODO: detailed food web illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🕸️</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#6ee7b7">{l.title}</text>
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
        <linearGradient id="watEcoBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#052e16" />
          <stop offset="100%" stopColor="#0f766e" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#watEcoBg)" rx="12" />
      {/* TODO: detailed water ecosystem illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🌊</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#6ee7b7">{l.title}</text>
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
          <stop offset="0%" stopColor="#052e16" />
          <stop offset="100%" stopColor="#3f6212" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#decompBg)" rx="12" />
      {/* TODO: detailed decomposer illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🍄</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#6ee7b7">{l.title}</text>
    </svg>
  );
});
