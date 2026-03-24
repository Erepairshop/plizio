"use client";
// ─── PlantSvg — Plant biology illustrations ──────────────────────────────────
// Exports:
//   PlantAnatomySvg    — root / stem / leaf structure
//   PhotosynthesisSvg  — CO2 + water + sunlight → O2 + glucose
//   FlowerPartsSvg     — petal / stamen / pistil / sepal
//   PollinationSvg     — bee + pollen transfer
//
// TODO: Replace placeholder SVGs with detailed illustrations

import { memo } from "react";

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
          <stop offset="0%" stopColor="#052e16" />
          <stop offset="100%" stopColor="#042211" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#plantAnatomyBg)" rx="12" />
      {/* TODO: detailed plant anatomy illustration */}
      <text x="120" y="62" textAnchor="middle" fontSize="32">🌱</text>
      <text x="120" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#86efac">{l.title}</text>
      <text x="120" y="104" textAnchor="middle" fontSize="7" fill="#86efac" opacity="0.6">{l.root} · {l.stem} · {l.leaf} · {l.flower}</text>
    </svg>
  );
});

// ─── PHOTOSYNTHESIS ───────────────────────────────────────────────────────────

const PHOTO_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Photosynthesis", co2: "CO₂", o2: "O₂", water: "Water", sunlight: "Sunlight", glucose: "Glucose", chlorophyll: "Chlorophyll", formula: "CO₂ + H₂O + Light → O₂ + Glucose" },
  de: { title: "Photosynthese", co2: "CO₂", o2: "O₂", water: "Wasser", sunlight: "Sonnenlicht", glucose: "Glukose", chlorophyll: "Chlorophyll", formula: "CO₂ + H₂O + Licht → O₂ + Glukose" },
  hu: { title: "Fotoszintézis", co2: "CO₂", o2: "O₂", water: "Víz", sunlight: "Napfény", glucose: "Glükóz", chlorophyll: "Klorofill", formula: "CO₂ + H₂O + Fény → O₂ + Glükóz" },
  ro: { title: "Fotosinteza", co2: "CO₂", o2: "O₂", water: "Apă", sunlight: "Lumina soarelui", glucose: "Glucoză", chlorophyll: "Clorofilă", formula: "CO₂ + H₂O + Lumină → O₂ + Glucoză" },
};

export const PhotosynthesisSvg = memo(function PhotosynthesisSvg({ lang = "de" }: { lang?: string }) {
  const l = PHOTO_LABELS[lang as keyof typeof PHOTO_LABELS] || PHOTO_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="photosynthesisBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#052e16" />
          <stop offset="100%" stopColor="#0a3d1e" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#photosynthesisBg)" rx="12" />
      {/* TODO: detailed photosynthesis diagram */}
      <text x="50" y="48" textAnchor="middle" fontSize="18">☀️</text>
      <text x="120" y="48" textAnchor="middle" fontSize="18">🍃</text>
      <text x="190" y="48" textAnchor="middle" fontSize="18">💨</text>
      <text x="50" y="68" textAnchor="middle" fontSize="7" fontWeight="600" fill="#86efac">{l.sunlight}</text>
      <text x="120" y="68" textAnchor="middle" fontSize="7" fontWeight="600" fill="#86efac">{l.chlorophyll}</text>
      <text x="190" y="68" textAnchor="middle" fontSize="7" fontWeight="600" fill="#86efac">{l.o2}</text>
      <text x="120" y="92" textAnchor="middle" fontSize="9" fontWeight="700" fill="#86efac">{l.title}</text>
      <text x="120" y="108" textAnchor="middle" fontSize="6" fill="#86efac" opacity="0.6">{l.formula}</text>
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
          <stop offset="0%" stopColor="#042211" />
          <stop offset="100%" stopColor="#052e16" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#flowerPartsBg)" rx="12" />
      {/* TODO: detailed flower cross-section illustration */}
      <text x="120" y="62" textAnchor="middle" fontSize="32">🌸</text>
      <text x="120" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#86efac">{l.title}</text>
      <text x="120" y="104" textAnchor="middle" fontSize="7" fill="#86efac" opacity="0.6">{l.petal} · {l.stamen} · {l.pistil} · {l.sepal}</text>
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
          <stop offset="0%" stopColor="#0a3d1e" />
          <stop offset="100%" stopColor="#052e16" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#pollinationBg)" rx="12" />
      {/* TODO: detailed pollination illustration */}
      <text x="80" y="55" textAnchor="middle" fontSize="24">🌺</text>
      <text x="120" y="40" textAnchor="middle" fontSize="20">🐝</text>
      <text x="160" y="55" textAnchor="middle" fontSize="24">🌻</text>
      <text x="120" y="88" textAnchor="middle" fontSize="9" fontWeight="700" fill="#86efac">{l.title}</text>
      <text x="120" y="104" textAnchor="middle" fontSize="7" fill="#86efac" opacity="0.6">{l.insectPoll}: {l.bee} + {l.pollen}</text>
    </svg>
  );
});
