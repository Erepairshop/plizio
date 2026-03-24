"use client";
// ─── CellSvg — Cell biology illustrations ───────────────────────────────────
// Exports:
//   CellStructureSvg  — cell organelles (nucleus, membrane, cytoplasm)
//   MitosisSvg        — mitosis phases (prophase, metaphase, anaphase, telophase)
//   ChloroplastSvg    — chloroplast structure (thylakoid, stroma)
//   MitochondriaSvg   — mitochondria structure (matrix, cristae)
//   DNAHelixSvg       — DNA double helix (base pairs)
//
// TODO: Replace placeholder SVGs with detailed illustrations

import { memo } from "react";

// ─── CELL STRUCTURE ─────────────────────────────────────────────────────────

const CELL_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Cell Structure", nucleus: "Nucleus", membrane: "Cell Membrane", cytoplasm: "Cytoplasm", er: "Endoplasmic Reticulum", golgi: "Golgi Apparatus", ribosome: "Ribosomes" },
  de: { title: "Zellaufbau", nucleus: "Zellkern", membrane: "Zellmembran", cytoplasm: "Zytoplasma", er: "Endoplasmatisches Retikulum", golgi: "Golgi-Apparat", ribosome: "Ribosomen" },
  hu: { title: "Sejtszerkezet", nucleus: "Sejtmag", membrane: "Sejtmembrán", cytoplasm: "Citoplazma", er: "Endoplazmatikus retikulum", golgi: "Golgi-készülék", ribosome: "Riboszómák" },
  ro: { title: "Structura celulei", nucleus: "Nucleu", membrane: "Membrană celulară", cytoplasm: "Citoplasmă", er: "Reticulul endoplasmatic", golgi: "Aparatul Golgi", ribosome: "Ribozomi" },
};

export const CellStructureSvg = memo(function CellStructureSvg({ lang = "de" }: { lang?: string }) {
  const l = CELL_LABELS[lang as keyof typeof CELL_LABELS] || CELL_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="cellStrBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2e1065" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#cellStrBg)" rx="12" />
      {/* TODO: detailed cell structure illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🔬</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c4b5fd">{l.title}</text>
    </svg>
  );
});

// ─── MITOSIS ────────────────────────────────────────────────────────────────

const MITOSIS_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Mitosis", prophase: "Prophase", metaphase: "Metaphase", anaphase: "Anaphase", telophase: "Telophase", cytokinesis: "Cytokinesis", chromosome: "Chromosomes" },
  de: { title: "Mitose", prophase: "Prophase", metaphase: "Metaphase", anaphase: "Anaphase", telophase: "Telophase", cytokinesis: "Zytokinese", chromosome: "Chromosomen" },
  hu: { title: "Mitózis", prophase: "Profázis", metaphase: "Metafázis", anaphase: "Anafázis", telophase: "Telofázis", cytokinesis: "Citokinézis", chromosome: "Kromoszómák" },
  ro: { title: "Mitoză", prophase: "Profază", metaphase: "Metafază", anaphase: "Anafază", telophase: "Telofază", cytokinesis: "Citokineză", chromosome: "Cromozomi" },
};

export const MitosisSvg = memo(function MitosisSvg({ lang = "de" }: { lang?: string }) {
  const l = MITOSIS_LABELS[lang as keyof typeof MITOSIS_LABELS] || MITOSIS_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="mitosBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2e1065" />
          <stop offset="100%" stopColor="#581c87" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#mitosBg)" rx="12" />
      {/* TODO: detailed mitosis phases illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🧬</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c4b5fd">{l.title}</text>
    </svg>
  );
});

// ─── CHLOROPLAST ────────────────────────────────────────────────────────────

const CHLORO_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Chloroplast", thylakoid: "Thylakoid", stroma: "Stroma", granum: "Granum", outerMembrane: "Outer Membrane", innerMembrane: "Inner Membrane" },
  de: { title: "Chloroplast", thylakoid: "Thylakoid", stroma: "Stroma", granum: "Granum", outerMembrane: "Äußere Membran", innerMembrane: "Innere Membran" },
  hu: { title: "Kloroplasztisz", thylakoid: "Tilakoid", stroma: "Sztróma", granum: "Gránum", outerMembrane: "Külső membrán", innerMembrane: "Belső membrán" },
  ro: { title: "Cloroplast", thylakoid: "Tilacoid", stroma: "Stromă", granum: "Granum", outerMembrane: "Membrană externă", innerMembrane: "Membrană internă" },
};

export const ChloroplastSvg = memo(function ChloroplastSvg({ lang = "de" }: { lang?: string }) {
  const l = CHLORO_LABELS[lang as keyof typeof CHLORO_LABELS] || CHLORO_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="chloroBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2e1065" />
          <stop offset="100%" stopColor="#3b0764" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#chloroBg)" rx="12" />
      {/* TODO: detailed chloroplast illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🌿</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c4b5fd">{l.title}</text>
    </svg>
  );
});

// ─── MITOCHONDRIA ───────────────────────────────────────────────────────────

const MITO_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Mitochondria", matrix: "Matrix", cristae: "Cristae", outerMembrane: "Outer Membrane", innerMembrane: "Inner Membrane", atp: "ATP Synthase" },
  de: { title: "Mitochondrium", matrix: "Matrix", cristae: "Cristae", outerMembrane: "Äußere Membran", innerMembrane: "Innere Membran", atp: "ATP-Synthase" },
  hu: { title: "Mitokondrium", matrix: "Mátrix", cristae: "Kriszták", outerMembrane: "Külső membrán", innerMembrane: "Belső membrán", atp: "ATP-szintáz" },
  ro: { title: "Mitocondrie", matrix: "Matrice", cristae: "Criste", outerMembrane: "Membrană externă", innerMembrane: "Membrană internă", atp: "ATP sintetază" },
};

export const MitochondriaSvg = memo(function MitochondriaSvg({ lang = "de" }: { lang?: string }) {
  const l = MITO_LABELS[lang as keyof typeof MITO_LABELS] || MITO_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="mitochBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2e1065" />
          <stop offset="100%" stopColor="#6b21a8" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#mitochBg)" rx="12" />
      {/* TODO: detailed mitochondria illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">⚡</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c4b5fd">{l.title}</text>
    </svg>
  );
});

// ─── DNA HELIX ──────────────────────────────────────────────────────────────

const DNA_LABELS: Record<string, Record<string, string>> = {
  en: { title: "DNA Double Helix", doubleHelix: "Double Helix", basePairs: "Base Pairs", adenine: "Adenine (A)", thymine: "Thymine (T)", guanine: "Guanine (G)", cytosine: "Cytosine (C)", backbone: "Sugar-Phosphate Backbone" },
  de: { title: "DNA-Doppelhelix", doubleHelix: "Doppelhelix", basePairs: "Basenpaare", adenine: "Adenin (A)", thymine: "Thymin (T)", guanine: "Guanin (G)", cytosine: "Cytosin (C)", backbone: "Zucker-Phosphat-Rückgrat" },
  hu: { title: "DNS kettős hélix", doubleHelix: "Kettős hélix", basePairs: "Bázispárok", adenine: "Adenin (A)", thymine: "Timin (T)", guanine: "Guanin (G)", cytosine: "Citozin (C)", backbone: "Cukor-foszfát gerinc" },
  ro: { title: "Dublu helix ADN", doubleHelix: "Dublu helix", basePairs: "Perechi de baze", adenine: "Adenină (A)", thymine: "Timină (T)", guanine: "Guanină (G)", cytosine: "Citozină (C)", backbone: "Schelet zahăr-fosfat" },
};

export const DNAHelixSvg = memo(function DNAHelixSvg({ lang = "de" }: { lang?: string }) {
  const l = DNA_LABELS[lang as keyof typeof DNA_LABELS] || DNA_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="dnaHelBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2e1065" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#dnaHelBg)" rx="12" />
      {/* TODO: detailed DNA helix illustration */}
      <text x="120" y="60" textAnchor="middle" fontSize="32">🧬</text>
      <text x="120" y="85" textAnchor="middle" fontSize="9" fontWeight="700" fill="#c4b5fd">{l.title}</text>
    </svg>
  );
});
