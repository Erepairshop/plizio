"use client";
// ─── MammalSvg — Mammal & Food Chain illustrations ───────────────────────────
// Exports:
//   MammalGroupsSvg    — herbivore / carnivore / omnivore groups
//   MammalAnatomySvg   — mammal body (fur, lungs, milk)
//   FoodChainSvg       — simple food chain diagram
//
// TODO: Replace placeholder SVGs with detailed illustrations

import { memo } from "react";

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
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#5c2a0a" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#mammalGroupsBg)" rx="12" />
      {/* TODO: detailed mammal groups illustration */}
      <text x="50" y="52" textAnchor="middle" fontSize="24">🐄</text>
      <text x="120" y="52" textAnchor="middle" fontSize="24">🦁</text>
      <text x="190" y="52" textAnchor="middle" fontSize="24">🐻</text>
      <text x="50" y="74" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fcd34d">{l.herbivore}</text>
      <text x="120" y="74" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fcd34d">{l.carnivore}</text>
      <text x="190" y="74" textAnchor="middle" fontSize="7" fontWeight="700" fill="#fcd34d">{l.omnivore}</text>
      <text x="120" y="96" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fcd34d">{l.title}</text>
    </svg>
  );
});

// ─── MAMMAL ANATOMY ───────────────────────────────────────────────────────────

const ANATOMY_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Mammal Anatomy", fur: "Fur", lungs: "Lungs", milk: "Milk", warmBlooded: "Warm-blooded", backbone: "Backbone", brain: "Large brain" },
  de: { title: "Säugetier-Anatomie", fur: "Fell", lungs: "Lungen", milk: "Milch", warmBlooded: "Warmblütig", backbone: "Wirbelsäule", brain: "Großes Gehirn" },
  hu: { title: "Emlősök anatómiája", fur: "Szőrzet", lungs: "Tüdő", milk: "Tej", warmBlooded: "Melegvérű", backbone: "Gerinc", brain: "Nagy agy" },
  ro: { title: "Anatomia mamiferelor", fur: "Blană", lungs: "Plămâni", milk: "Lapte", warmBlooded: "Cu sânge cald", backbone: "Coloană vertebrală", brain: "Creier mare" },
};

export const MammalAnatomySvg = memo(function MammalAnatomySvg({ lang = "de" }: { lang?: string }) {
  const l = ANATOMY_LABELS[lang as keyof typeof ANATOMY_LABELS] || ANATOMY_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="mammalAnatomyBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350f" />
          <stop offset="100%" stopColor="#633011" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#mammalAnatomyBg)" rx="12" />
      {/* TODO: detailed mammal anatomy illustration */}
      <text x="120" y="62" textAnchor="middle" fontSize="32">🐕</text>
      <text x="120" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fcd34d">{l.title}</text>
      <text x="120" y="104" textAnchor="middle" fontSize="7" fill="#fcd34d" opacity="0.6">{l.fur} · {l.lungs} · {l.milk}</text>
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
          <stop offset="0%" stopColor="#5c2a0a" />
          <stop offset="100%" stopColor="#451e08" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#foodChainBg)" rx="12" />
      {/* TODO: detailed food chain illustration */}
      <text x="40" y="55" textAnchor="middle" fontSize="20">☀️</text>
      <text x="90" y="55" textAnchor="middle" fontSize="20">🌿</text>
      <text x="145" y="55" textAnchor="middle" fontSize="20">🐇</text>
      <text x="200" y="55" textAnchor="middle" fontSize="20">🦊</text>
      {/* Arrows */}
      <line x1="55" y1="50" x2="75" y2="50" stroke="#fcd34d" strokeWidth="1.5" markerEnd="url(#foodChainArrow)" opacity="0.5" />
      <line x1="105" y1="50" x2="130" y2="50" stroke="#fcd34d" strokeWidth="1.5" opacity="0.5" />
      <line x1="160" y1="50" x2="185" y2="50" stroke="#fcd34d" strokeWidth="1.5" opacity="0.5" />
      <text x="120" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#fcd34d">{l.title}</text>
      <text x="120" y="104" textAnchor="middle" fontSize="7" fill="#fcd34d" opacity="0.6">{l.energy}: {l.producer} → {l.consumer1} → {l.consumer2}</text>
    </svg>
  );
});
