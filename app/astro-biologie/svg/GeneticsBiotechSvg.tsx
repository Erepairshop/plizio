"use client";
// ─── GeneticsBiotechSvg — K8 Genetics, Biotech & Systems ────────────────────
// Exports:
//   MutationSvg             — DNA mutation (base pair change)
//   EnzymeSvg               — lock and key model, substrate to products
//   HomeostasisSvg          — balance, thermoregulation (37°C)
//   PopulationGeneticsSvg   — allele frequency change, gene pool
//   PhylogeneticTreeSvg     — evolutionary branching, common ancestors
//   SexDeterminationSvg     — XX and XY chromosomes

import { memo } from "react";

// ─── SHARED DEFS ────────────────────────────────────────────────────────────
const LabelGlow = () => (
  <filter id="lblGlow">
    <feGaussianBlur stdDeviation="1.2" result="b" />
    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
  </filter>
);

// ─── MUTATION ───────────────────────────────────────────────────────────────

const MUTATION_LABELS: Record<string, Record<string, string>> = {
  en: { title: "DNA Mutation", normal: "Original DNA", mutated: "Mutated DNA", basePair: "Base Pair Change", uv: "UV / Radiation" },
  de: { title: "DNA-Mutation", normal: "Original-DNA", mutated: "Mutierte DNA", basePair: "Basenpaaraustausch", uv: "UV / Strahlung" },
  hu: { title: "DNS Mutáció", normal: "Eredeti DNS", mutated: "Mutálódott DNS", basePair: "Bázispár csere", uv: "UV / Sugárzás" },
  ro: { title: "Mutație ADN", normal: "ADN original", mutated: "ADN suferit mutație", basePair: "Schimbare pereche de baze", uv: "UV / Radiații" },
};

export const MutationSvg = memo(function MutationSvg({ lang = "de" }: { lang?: string }) {
  const l = MUTATION_LABELS[lang as keyof typeof MUTATION_LABELS] || MUTATION_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="mutBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#mutBg)" rx="12" />
      
      {/* ── Original DNA (Top) ── */}
      <g transform="translate(30, 40)">
        <path d="M 0 -10 Q 40 -10 40 10 T 80 -10 T 120 10 T 160 -10 T 200 10" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.6" />
        <path d="M 0 10 Q 40 10 40 -10 T 80 10 T 120 -10 T 160 10 T 200 -10" fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.6" />
        {/* Base pairs */}
        <line x1="20" y1="-5" x2="20" y2="5" stroke="#34d399" strokeWidth="2" />
        <line x1="60" y1="-5" x2="60" y2="5" stroke="#ef4444" strokeWidth="2" /> {/* Target to mutate */}
        <line x1="100" y1="-5" x2="100" y2="5" stroke="#facc15" strokeWidth="2" />
        <line x1="140" y1="-5" x2="140" y2="5" stroke="#3b82f6" strokeWidth="2" />
        <line x1="180" y1="-5" x2="180" y2="5" stroke="#34d399" strokeWidth="2" />
      </g>

      {/* ── Arrow & Radiation ── */}
      <path d="M 120 60 L 120 80" fill="none" stroke="#fcd34d" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M 100 65 L 110 70 L 105 75 L 115 80" fill="none" stroke="#fcd34d" strokeWidth="1.5" />

      {/* ── Mutated DNA (Bottom) ── */}
      <g transform="translate(30, 100)">
        <path d="M 0 -10 Q 40 -10 40 10 T 80 -10 T 120 10 T 160 -10 T 200 10" fill="none" stroke="#60a5fa" strokeWidth="2" opacity="0.6" />
        <path d="M 0 10 Q 40 10 40 -10 T 80 10 T 120 -10 T 160 10 T 200 -10" fill="none" stroke="#a78bfa" strokeWidth="2" opacity="0.6" />
        {/* Base pairs */}
        <line x1="20" y1="-5" x2="20" y2="5" stroke="#34d399" strokeWidth="2" />
        <line x1="60" y1="-5" x2="60" y2="5" stroke="#facc15" strokeWidth="2.5" /> {/* Mutated Base */}
        <line x1="100" y1="-5" x2="100" y2="5" stroke="#facc15" strokeWidth="2" />
        <line x1="140" y1="-5" x2="140" y2="5" stroke="#3b82f6" strokeWidth="2" />
        <line x1="180" y1="-5" x2="180" y2="5" stroke="#34d399" strokeWidth="2" />
        {/* Mutation Highlight */}
        <circle cx="60" cy="0" r="10" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="2 2" />
      </g>

      {/* ── Labels ── */}
      <text x="120" y="20" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.normal}</text>
      <text x="120" y="125" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.mutated}</text>
      <text x="150" y="72" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fde047" filter="url(#lblGlow)">{l.uv}</text>
      
      <line x1="70" y1="100" x2="90" y2="90" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="95" y="88" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#fef08a" filter="url(#lblGlow)">{l.basePair}</text>
      
      <rect x="15" y="8" width="60" height="12" rx="6" fill="rgba(0,0,0,0.5)" />
      <text x="45" y="16.5" textAnchor="middle" fontSize="7" fontWeight="700" fill="#c4b5fd" filter="url(#lblGlow)">{l.title}</text>
    </svg>
  );
});

// ─── ENZYME ─────────────────────────────────────────────────────────────────

const ENZYME_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Enzyme Action", enzyme: "Enzyme", substrate: "Substrate", activeSite: "Active Site", products: "Products", complex: "Enzyme-Substrate Complex" },
  de: { title: "Enzymwirkung", enzyme: "Enzym", substrate: "Substrat", activeSite: "Aktives Zentrum", products: "Produkte", complex: "Enzym-Substrat-Komplex" },
  hu: { title: "Enzimműködés", enzyme: "Enzim", substrate: "Szubsztrát", activeSite: "Aktív centrum", products: "Termékek", complex: "Enzim-Szubsztrát Komplex" },
  ro: { title: "Acțiunea enzimelor", enzyme: "Enzimă", substrate: "Substrat", activeSite: "Situs activ", products: "Produși", complex: "Complex Enzimă-Substrat" },
};

export const EnzymeSvg = memo(function EnzymeSvg({ lang = "de" }: { lang?: string }) {
  const l = ENZYME_LABELS[lang as keyof typeof ENZYME_LABELS] || ENZYME_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="enzBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#022c22" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#enzBg)" rx="12" />
      
      {/* ── Step 1: Substrate + Enzyme ── */}
      <g transform="translate(30, 80)">
        {/* Enzyme */}
        <path d="M -15 -10 A 18 18 0 1 0 15 -10 L 8 -10 L 8 0 L -8 0 L -8 -10 Z" fill="#3b82f6" />
        {/* Substrate */}
        <path d="M -8 -20 L -8 -13 L 8 -13 L 8 -20 C 8 -25, -8 -25, -8 -20 Z" fill="#facc15" />
      </g>

      <path d="M 60 75 L 80 75" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* ── Step 2: Complex ── */}
      <g transform="translate(120, 80)">
        <path d="M -15 -10 A 18 18 0 1 0 15 -10 L 8 -10 L 8 0 L -8 0 L -8 -10 Z" fill="#3b82f6" />
        <path d="M -8 -10 L -8 -3 L 8 -3 L 8 -10 C 8 -15, -8 -15, -8 -10 Z" fill="#facc15" />
        {/* Reaction spark */}
        <path d="M -10 -5 L 10 5 M 10 -5 L -10 5" stroke="#ef4444" strokeWidth="1.5" />
      </g>

      <path d="M 160 75 L 180 75" fill="none" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrow)" />

      {/* ── Step 3: Products ── */}
      <g transform="translate(210, 80)">
        <path d="M -15 -10 A 18 18 0 1 0 15 -10 L 8 -10 L 8 0 L -8 0 L -8 -10 Z" fill="#3b82f6" />
        {/* Split products */}
        <path d="M -10 -18 L -10 -12 L 0 -12 L 0 -18 C 0 -22, -10 -22, -10 -18 Z" fill="#4ade80" />
        <path d="M 2 -16 L 2 -10 L 12 -10 L 12 -16 C 12 -20, 2 -20, 2 -16 Z" fill="#f97316" />
      </g>

      {/* ── Labels ── */}
      <text x="30" y="45" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fef08a" filter="url(#lblGlow)">{l.substrate}</text>
      <text x="30" y="115" textAnchor="middle" fontSize="6" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.enzyme}</text>

      <line x1="30" y1="70" x2="15" y2="55" stroke="rgba(255,255,255,0.4)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="20" y="52" textAnchor="middle" fontSize="5" fontWeight="700" fill="#cbd5e1" filter="url(#lblGlow)">{l.activeSite}</text>

      <rect x="80" y="115" width="80" height="12" rx="6" fill="rgba(0,0,0,0.5)" />
      <text x="120" y="123.5" textAnchor="middle" fontSize="6" fontWeight="700" fill="#a7f3d0" filter="url(#lblGlow)">{l.complex}</text>

      <text x="210" y="45" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.products}</text>

      <text x="120" y="20" textAnchor="middle" fontSize="8" fontWeight="700" fill="#6ee7b7" filter="url(#lblGlow)">{l.title}</text>
    </svg>
  );
});

// ─── HOMEOSTASIS ────────────────────────────────────────────────────────────

const HOMEO_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Homeostasis", bodyTemp: "Core Temp: 37°C", hot: "Too Hot (Sweating)", cold: "Too Cold (Shivering)", balance: "Dynamic Balance" },
  de: { title: "Homöostase", bodyTemp: "Kerntemperatur: 37°C", hot: "Zu heiß (Schwitzen)", cold: "Zu kalt (Zittern)", balance: "Dynamisches Gleichgewicht" },
  hu: { title: "Homeosztázis", bodyTemp: "Maghőmérséklet: 37°C", hot: "Túl meleg (Izzadás)", cold: "Túl hideg (Reszketés)", balance: "Dinamikus egyensúly" },
  ro: { title: "Homeostazie", bodyTemp: "Temp. corpului: 37°C", hot: "Prea cald (Transpirație)", cold: "Prea rece (Frisoane)", balance: "Echilibru dinamic" },
};

export const HomeostasisSvg = memo(function HomeostasisSvg({ lang = "de" }: { lang?: string }) {
  const l = HOMEO_LABELS[lang as keyof typeof HOMEO_LABELS] || HOMEO_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="homeoBg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#450a0a" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#homeoBg)" rx="12" />
      
      {/* ── Seesaw / Balance ── */}
      <polygon points="120,110 110,125 130,125" fill="#64748b" />
      <line x1="40" y1="110" x2="200" y2="110" stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" />

      {/* ── Hot Side (Left) ── */}
      <g transform="translate(60, 95)">
        <circle cx="0" cy="-10" r="16" fill="#ef4444" opacity="0.8" />
        {/* Sweat drops */}
        <path d="M -8 -15 C -12 -10, -8 -5, -4 -10 Z" fill="#bae6fd" />
        <path d="M 8 -5 C 4 0, 8 5, 12 0 Z" fill="#bae6fd" />
        {/* Sun symbol */}
        <circle cx="0" cy="-10" r="6" fill="#fde047" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map(a => (
          <line key={a} x1="0" y1="-10" x2={Math.cos(a*Math.PI/180)*10} y2={-10+Math.sin(a*Math.PI/180)*10} stroke="#fde047" strokeWidth="1.5" />
        ))}
      </g>

      {/* ── Cold Side (Right) ── */}
      <g transform="translate(180, 95)">
        <circle cx="0" cy="-10" r="16" fill="#3b82f6" opacity="0.8" />
        {/* Shiver lines */}
        <path d="M -15 -15 L -12 -5 M 15 -15 L 12 -5" stroke="#fff" strokeWidth="1.5" strokeDasharray="2 1" />
        {/* Snowflake */}
        {[0, 60, 120, 180, 240, 300].map(a => (
          <line key={a} x1="0" y1="-10" x2={Math.cos(a*Math.PI/180)*8} y2={-10+Math.sin(a*Math.PI/180)*8} stroke="#fff" strokeWidth="1.5" />
        ))}
      </g>

      {/* ── Central Target (37°C) ── */}
      <g transform="translate(120, 60)">
        <circle cx="0" cy="0" r="22" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
        <rect x="-4" y="-12" width="8" height="24" rx="4" fill="rgba(255,255,255,0.1)" stroke="#94a3b8" strokeWidth="1" />
        <circle cx="0" cy="8" r="4" fill="#ef4444" />
        <rect x="-1" y="-2" width="2" height="10" fill="#ef4444" />
        <text x="0" y="-16" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#f8fafc" filter="url(#lblGlow)">37°C</text>
      </g>

      {/* ── Arrows (Feedback loop) ── */}
      <path d="M 60 55 C 60 30, 100 20, 120 35" fill="none" stroke="#fca5a5" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow)" />
      <path d="M 180 55 C 180 30, 140 20, 120 35" fill="none" stroke="#93c5fd" strokeWidth="1.5" strokeDasharray="4 2" markerEnd="url(#arrow)" />

      {/* ── Labels ── */}
      <text x="60" y="128" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">{l.hot}</text>
      <text x="180" y="128" textAnchor="middle" fontSize="6" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.cold}</text>
      
      <text x="120" y="132" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#94a3b8" filter="url(#lblGlow)">{l.balance}</text>

      <rect x="80" y="8" width="80" height="14" rx="7" fill="rgba(0,0,0,0.5)" />
      <text x="120" y="18" textAnchor="middle" fontSize="7" fontWeight="700" fill="#e2e8f0" filter="url(#lblGlow)">{l.title}</text>
    </svg>
  );
});

// ─── POPULATION GENETICS ────────────────────────────────────────────────────

const POPGEN_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Population Genetics", gen1: "Generation 1 (50/50)", gen2: "Generation 2 (80/20)", alleleA: "Allele A", alleleB: "Allele a", geneticDrift: "Selection / Genetic Drift" },
  de: { title: "Populationsgenetik", gen1: "Generation 1 (50/50)", gen2: "Generation 2 (80/20)", alleleA: "Allel A", alleleB: "Allel a", geneticDrift: "Selektion / Gendrift" },
  hu: { title: "Populációgenetika", gen1: "1. Generáció (50/50)", gen2: "2. Generáció (80/20)", alleleA: "A allél", alleleB: "a allél", geneticDrift: "Szelekció / Géndrift" },
  ro: { title: "Genetica populației", gen1: "Generația 1 (50/50)", gen2: "Generația 2 (80/20)", alleleA: "Alela A", alleleB: "Alela a", geneticDrift: "Selecție / Derivă genetică" },
};

export const PopulationGeneticsSvg = memo(function PopulationGeneticsSvg({ lang = "de" }: { lang?: string }) {
  const l = POPGEN_LABELS[lang as keyof typeof POPGEN_LABELS] || POPGEN_LABELS.en;
  
  // Helpers to generate random dots within a circle
  const genDots = (count: number, color: string, cx: number, cy: number, r: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.sqrt(Math.random()) * (r - 2);
      return <circle key={`${color}${i}`} cx={cx + Math.cos(angle)*dist} cy={cy + Math.sin(angle)*dist} r="2" fill={color} />;
    });
  };

  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="popGenBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#popGenBg)" rx="12" />
      
      {/* ── Gene Pool 1 (Left) ── */}
      <circle cx="60" cy="70" r="35" fill="rgba(255,255,255,0.05)" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 2" />
      {genDots(15, "#ef4444", 60, 70, 35)} {/* Red alleles A */}
      {genDots(15, "#3b82f6", 60, 70, 35)} {/* Blue alleles a */}

      {/* ── Transition Arrow ── */}
      <path d="M 105 70 L 135 70" fill="none" stroke="#fcd34d" strokeWidth="2" markerEnd="url(#arrow)" />
      
      {/* ── Gene Pool 2 (Right) ── */}
      <circle cx="180" cy="70" r="35" fill="rgba(255,255,255,0.05)" stroke="#6366f1" strokeWidth="2" strokeDasharray="4 2" />
      {genDots(24, "#ef4444", 180, 70, 35)} {/* Red alleles increased */}
      {genDots(6, "#3b82f6", 180, 70, 35)}  {/* Blue alleles decreased */}

      {/* ── Labels ── */}
      <text x="60" y="25" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#a5b4fc" filter="url(#lblGlow)">{l.gen1}</text>
      <text x="180" y="25" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#a5b4fc" filter="url(#lblGlow)">{l.gen2}</text>
      
      <text x="120" y="65" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#fcd34d" filter="url(#lblGlow)">{l.geneticDrift}</text>

      {/* Legend */}
      <rect x="85" y="115" width="70" height="15" rx="4" fill="rgba(0,0,0,0.5)" />
      <circle cx="95" cy="122.5" r="3" fill="#ef4444" />
      <text x="102" y="125" fontSize="6" fill="#fca5a5">{l.alleleA}</text>
      <circle cx="135" cy="122.5" r="3" fill="#3b82f6" />
      <text x="142" y="125" fontSize="6" fill="#93c5fd">{l.alleleB}</text>

      <text x="120" y="12" textAnchor="middle" fontSize="7" fontWeight="700" fill="#c4b5fd" filter="url(#lblGlow)">{l.title}</text>
    </svg>
  );
});

// ─── PHYLOGENETIC TREE ──────────────────────────────────────────────────────

const PHYLO_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Phylogenetic Tree", commonAncestor: "Common Ancestor", trait1: "Jaws", trait2: "Lungs", trait3: "Fur", spA: "Fish", spB: "Amphibian", spC: "Mammal" },
  de: { title: "Stammbaum", commonAncestor: "Gemeinsamer Vorfahr", trait1: "Kiefer", trait2: "Lungen", trait3: "Fell", spA: "Fisch", spB: "Amphibie", spC: "Säugetier" },
  hu: { title: "Evolúciós Törzsfa", commonAncestor: "Közös ős", trait1: "Állkapocs", trait2: "Tüdő", trait3: "Szőrzet", spA: "Hal", spB: "Kétéltű", spC: "Emlős" },
  ro: { title: "Arbore filogenetic", commonAncestor: "Strămoș comun", trait1: "Fălci", trait2: "Plămâni", trait3: "Blană", spA: "Pește", spB: "Amfibian", spC: "Mamifer" },
};

export const PhylogeneticTreeSvg = memo(function PhylogeneticTreeSvg({ lang = "de" }: { lang?: string }) {
  const l = PHYLO_LABELS[lang as keyof typeof PHYLO_LABELS] || PHYLO_LABELS.en;
  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="phyloBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#064e3b" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#phyloBg)" rx="12" />
      
      {/* ── Tree Branches (Lines) ── */}
      <g stroke="#34d399" strokeWidth="2.5" fill="none" strokeLinejoin="round" strokeLinecap="round">
        <path d="M 20 110 L 100 110" /> {/* Root to node 1 */}
        <path d="M 100 110 L 100 85 L 140 85" /> {/* Node 1 to Node 2 */}
        <path d="M 140 85 L 140 60 L 200 60" /> {/* Node 2 to Node 3 */}
        
        {/* Terminals */}
        <path d="M 100 110 L 200 110" /> {/* Fish line */}
        <path d="M 140 85 L 200 85" />   {/* Amphibian line */}
      </g>

      {/* ── Nodes (Common Ancestors) ── */}
      <circle cx="20" cy="110" r="4" fill="#10b981" />
      <circle cx="100" cy="110" r="3" fill="#10b981" />
      <circle cx="140" cy="85" r="3" fill="#10b981" />

      {/* ── Trait Markers (Hashes on branches) ── */}
      <line x1="60" y1="105" x2="60" y2="115" stroke="#fcd34d" strokeWidth="2" />
      <line x1="120" y1="80" x2="120" y2="90" stroke="#fcd34d" strokeWidth="2" />
      <line x1="170" y1="55" x2="170" y2="65" stroke="#fcd34d" strokeWidth="2" />

      {/* ── Labels ── */}
      <text x="25" y="125" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#a7f3d0" filter="url(#lblGlow)">{l.commonAncestor}</text>
      
      {/* Traits */}
      <text x="60" y="102" textAnchor="middle" fontSize="5.5" fill="#fde047">{l.trait1}</text>
      <text x="120" y="77" textAnchor="middle" fontSize="5.5" fill="#fde047">{l.trait2}</text>
      <text x="170" y="52" textAnchor="middle" fontSize="5.5" fill="#fde047">{l.trait3}</text>

      {/* Species/Groups */}
      <text x="210" y="112" fontSize="6.5" fontWeight="700" fill="#bae6fd" filter="url(#lblGlow)">🐟 {l.spA}</text>
      <text x="210" y="87" fontSize="6.5" fontWeight="700" fill="#a3e635" filter="url(#lblGlow)">🐸 {l.spB}</text>
      <text x="210" y="62" fontSize="6.5" fontWeight="700" fill="#fca5a5" filter="url(#lblGlow)">🐕 {l.spC}</text>

      <rect x="80" y="10" width="80" height="14" rx="7" fill="rgba(0,0,0,0.5)" />
      <text x="120" y="20" textAnchor="middle" fontSize="7" fontWeight="700" fill="#6ee7b7" filter="url(#lblGlow)">{l.title}</text>
    </svg>
  );
});

// ─── SEX DETERMINATION ──────────────────────────────────────────────────────

const SEX_LABELS: Record<string, Record<string, string>> = {
  en: { title: "Sex Determination", female: "Female (XX)", male: "Male (XY)", chrX: "X Chromosome", chrY: "Y Chromosome" },
  de: { title: "Geschlechtsbestimmung", female: "Weiblich (XX)", male: "Männlich (XY)", chrX: "X-Chromosom", chrY: "Y-Chromosom" },
  hu: { title: "Ivarmeghatározás", female: "Nő (XX)", male: "Férfi (XY)", chrX: "X Kromoszóma", chrY: "Y Kromoszóma" },
  ro: { title: "Determinarea sexului", female: "Femeie (XX)", male: "Bărbat (XY)", chrX: "Cromozomul X", chrY: "Cromozomul Y" },
};

export const SexDeterminationSvg = memo(function SexDeterminationSvg({ lang = "de" }: { lang?: string }) {
  const l = SEX_LABELS[lang as keyof typeof SEX_LABELS] || SEX_LABELS.en;
  
  // Chromosome drawing helper
  const ChromosomeX = ({ x, y, color }: { x: number, y: number, color: string }) => (
    <g transform={`translate(${x}, ${y})`} fill={color} stroke="#000" strokeWidth="0.5">
      <path d="M -5 -20 C -2 -15, -2 -5, -4 0 C -2 5, -2 15, -5 20 A 4 4 0 0 0 2 20 C 0 15, 0 5, 2 0 C 0 -5, 0 -15, 2 -20 A 4 4 0 0 0 -5 -20 Z" />
      <path d="M 5 -20 C 2 -15, 2 -5, 4 0 C 2 5, 2 15, 5 20 A 4 4 0 0 1 -2 20 C 0 15, 0 5, -2 0 C 0 -5, 0 -15, -2 -20 A 4 4 0 0 1 5 -20 Z" />
      <circle cx="0" cy="0" r="2.5" fill="#f8fafc" /> {/* Centromere */}
    </g>
  );

  const ChromosomeY = ({ x, y, color }: { x: number, y: number, color: string }) => (
    <g transform={`translate(${x}, ${y})`} fill={color} stroke="#000" strokeWidth="0.5">
      <path d="M -5 -10 C -2 -5, -2 0, -4 5 C -2 10, -2 15, -5 18 A 3 3 0 0 0 2 18 C 0 15, 0 5, 2 0 C 0 -5, 0 -10, 2 -10 A 3 3 0 0 0 -5 -10 Z" />
      <path d="M 5 -10 C 2 -5, 2 0, 4 5 C 2 10, 2 15, 5 18 A 3 3 0 0 1 -2 18 C 0 15, 0 5, -2 0 C 0 -5, 0 -10, -2 -10 A 3 3 0 0 1 5 -10 Z" />
      <circle cx="0" cy="4" r="2.5" fill="#f8fafc" />
    </g>
  );

  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="sexDetBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#171540" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#sexDetBg)" rx="12" />
      
      {/* ── Female (XX) ── */}
      <g transform="translate(60, 70)">
        <circle cx="0" cy="0" r="35" fill="rgba(236,72,153,0.1)" stroke="#ec4899" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Venus Symbol (Bg) */}
        <circle cx="0" cy="-5" r="10" fill="none" stroke="rgba(236,72,153,0.3)" strokeWidth="3" />
        <path d="M 0 5 L 0 20 M -6 14 L 6 14" fill="none" stroke="rgba(236,72,153,0.3)" strokeWidth="3" />
        
        {/* Chromosomes */}
        <ChromosomeX x="-12" y="5" color="#f472b6" />
        <ChromosomeX x="12" y="5" color="#f472b6" />
      </g>

      {/* ── Male (XY) ── */}
      <g transform="translate(180, 70)">
        <circle cx="0" cy="0" r="35" fill="rgba(59,130,246,0.1)" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Mars Symbol (Bg) */}
        <circle cx="-3" cy="3" r="10" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="3" />
        <path d="M 4 -4 L 14 -14 M 14 -14 L 8 -14 M 14 -14 L 14 -8" fill="none" stroke="rgba(59,130,246,0.3)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        
        {/* Chromosomes */}
        <ChromosomeX x="-10" y="5" color="#60a5fa" />
        <ChromosomeY x="15" y="10" color="#38bdf8" />
      </g>

      {/* ── Labels ── */}
      <text x="60" y="25" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#fbcfe8" filter="url(#lblGlow)">{l.female}</text>
      <text x="180" y="25" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#bfdbfe" filter="url(#lblGlow)">{l.male}</text>

      <rect x="95" y="115" width="50" height="15" rx="4" fill="rgba(0,0,0,0.5)" />
      <text x="120" y="121" textAnchor="middle" fontSize="5" fill="#f472b6">{l.chrX}</text>
      <text x="120" y="127" textAnchor="middle" fontSize="5" fill="#38bdf8">{l.chrY}</text>

      <text x="120" y="12" textAnchor="middle" fontSize="7" fontWeight="700" fill="#c4b5fd" filter="url(#lblGlow)">{l.title}</text>
    </svg>
  );
});
