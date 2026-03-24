"use client";
// ─── CellSvg — Cell biology illustrations ───────────────────────────────────
// Exports:
//   CellStructureSvg  — cell organelles (nucleus, membrane, cytoplasm)
//   MitosisSvg        — mitosis phases (prophase, metaphase, anaphase, telophase)
//   ChloroplastSvg    — chloroplast structure (thylakoid, stroma)
//   MitochondriaSvg   — mitochondria structure (matrix, cristae)
//   DNAHelixSvg       — DNA double helix (base pairs)

import { memo } from "react";

// ─── SHARED DEFS ────────────────────────────────────────────────────────────
const LabelGlow = () => (
  <filter id="lblGlow">
    <feGaussianBlur stdDeviation="1.2" result="b" />
    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
  </filter>
);

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
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#1e1b4b" />
        </linearGradient>
        <radialGradient id="cytoGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#4c1d95" stopOpacity="0.2" />
        </radialGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#cellStrBg)" rx="12" />
      
      {/* ── Cell Graphic ── */}
      {/* Cell Membrane & Cytoplasm */}
      <path d="M 120 20 C 180 15, 210 50, 195 95 C 180 130, 70 135, 45 95 C 20 60, 60 25, 120 20 Z" fill="url(#cytoGrad)" stroke="#8b5cf6" strokeWidth="2" />
      
      {/* Nucleus */}
      <circle cx="100" cy="70" r="22" fill="#c4b5fd" stroke="#ddd6fe" strokeWidth="1.5" opacity="0.9" />
      <circle cx="106" cy="66" r="8" fill="#5b21b6" /> {/* Nucleolus */}
      
      {/* Endoplasmic Reticulum (ER) */}
      <path d="M 125 55 Q 140 45 130 65 Q 145 60 135 75 Q 150 80 130 85 Q 135 95 120 90" fill="none" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Golgi Apparatus */}
      <path d="M 155 45 Q 175 55 160 65 M 165 52 Q 180 60 168 70 M 172 60 Q 185 68 175 75" fill="none" stroke="#10b981" strokeWidth="3.5" strokeLinecap="round" />
      
      {/* Mitochondria (Small) */}
      <ellipse cx="65" cy="50" rx="10" ry="5" fill="#f43f5e" transform="rotate(-30 65 50)" />
      <path d="M 58 48 Q 65 45 72 52" fill="none" stroke="#fff" strokeWidth="0.8" transform="rotate(-30 65 50)" />
      
      <ellipse cx="145" cy="100" rx="9" ry="4.5" fill="#f43f5e" transform="rotate(15 145 100)" />

      {/* Ribosomes (Dots) */}
      {[...Array(15)].map((_, i) => (
        <circle key={i} cx={125 + Math.random()*20} cy={55 + Math.random()*35} r="1" fill="#fbbf24" />
      ))}
      <circle cx="70" cy="90" r="1" fill="#fbbf24" />
      <circle cx="75" cy="85" r="1" fill="#fbbf24" />
      <circle cx="160" cy="85" r="1" fill="#fbbf24" />

      {/* ── Labels ── */}
      <line x1="100" y1="48" x2="80" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="65" y="22" textAnchor="middle" fontSize="6" fontWeight="700" fill="#ddd6fe" filter="url(#lblGlow)">{l.nucleus}</text>

      <line x1="40" y1="75" x2="25" y2="55" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="25" y="50" textAnchor="middle" fontSize="6" fontWeight="700" fill="#a78bfa" filter="url(#lblGlow)">{l.membrane}</text>

      <line x1="80" y1="105" x2="60" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="50" y="125" textAnchor="middle" fontSize="6" fontWeight="700" fill="#c4b5fd" filter="url(#lblGlow)">{l.cytoplasm}</text>

      <line x1="135" y1="65" x2="165" y2="25" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="180" y="22" textAnchor="middle" fontSize="6" fontWeight="700" fill="#93c5fd" filter="url(#lblGlow)">{l.er}</text>

      <line x1="170" y1="60" x2="200" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="215" y="48" textAnchor="middle" fontSize="6" fontWeight="700" fill="#6ee7b7" filter="url(#lblGlow)">{l.golgi}</text>

      <line x1="140" y1="90" x2="175" y2="115" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="190" y="120" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fde68a" filter="url(#lblGlow)">{l.ribosome}</text>
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
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#mitosBg)" rx="12" />
      
      {/* 1. Prophase */}
      <circle cx="35" cy="70" r="18" fill="rgba(139,92,246,0.2)" stroke="#a78bfa" strokeWidth="1" strokeDasharray="3 2" />
      <path d="M 30 65 L 40 75 M 40 65 L 30 75" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />
      <path d="M 33 60 L 40 68 M 40 60 L 33 68" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" transform="translate(-2, 8)" />

      {/* 2. Metaphase */}
      <circle cx="90" cy="70" r="18" fill="rgba(139,92,246,0.15)" stroke="#a78bfa" strokeWidth="1" />
      {/* Spindle fibers */}
      <line x1="90" y1="52" x2="90" y2="88" stroke="#fbbf24" strokeWidth="0.5" strokeDasharray="1 1" />
      <line x1="85" y1="55" x2="95" y2="85" stroke="#fbbf24" strokeWidth="0.5" strokeDasharray="1 1" />
      <line x1="95" y1="55" x2="85" y2="85" stroke="#fbbf24" strokeWidth="0.5" strokeDasharray="1 1" />
      {/* Centrosomes */}
      <circle cx="90" cy="52" r="1.5" fill="#fbbf24" />
      <circle cx="90" cy="88" r="1.5" fill="#fbbf24" />
      {/* Chromosomes aligned */}
      <path d="M 87 63 L 93 67 M 93 63 L 87 67" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" />
      <path d="M 87 73 L 93 77 M 93 73 L 87 77" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />

      {/* 3. Anaphase */}
      <circle cx="145" cy="70" r="18" fill="rgba(139,92,246,0.15)" stroke="#a78bfa" strokeWidth="1" />
      {/* Spindle fibers */}
      <line x1="145" y1="52" x2="145" y2="62" stroke="#fbbf24" strokeWidth="0.5" />
      <line x1="145" y1="88" x2="145" y2="78" stroke="#fbbf24" strokeWidth="0.5" />
      <circle cx="145" cy="52" r="1.5" fill="#fbbf24" />
      <circle cx="145" cy="88" r="1.5" fill="#fbbf24" />
      {/* Pulled chromatids */}
      <path d="M 142 59 L 145 62 L 148 59" fill="none" stroke="#f472b6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 142 81 L 145 78 L 148 81" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

      {/* 4. Telophase / Cytokinesis */}
      <path d="M 200 52 C 215 52, 222 65, 222 70 C 222 75, 215 88, 200 88 C 190 88, 195 75, 195 70 C 195 65, 190 52, 200 52 Z" fill="rgba(139,92,246,0.15)" stroke="#a78bfa" strokeWidth="1" />
      <path d="M 200 52 C 185 52, 178 65, 178 70 C 178 75, 185 88, 200 88" fill="rgba(139,92,246,0.15)" stroke="#a78bfa" strokeWidth="1" transform="scale(-1, 1) translate(-400, 0)" />
      {/* Forming nuclei */}
      <circle cx="190" cy="70" r="7" stroke="#a78bfa" strokeWidth="0.5" strokeDasharray="2 1" fill="none" />
      <circle cx="210" cy="70" r="7" stroke="#a78bfa" strokeWidth="0.5" strokeDasharray="2 1" fill="none" />
      {/* Uncoiling chromosomes */}
      <path d="M 188 68 Q 192 70 188 72" fill="none" stroke="#f472b6" strokeWidth="1.5" />
      <path d="M 208 68 Q 212 70 208 72" fill="none" stroke="#38bdf8" strokeWidth="1.5" />

      {/* ── Labels ── */}
      <text x="35" y="105" textAnchor="middle" fontSize="6" fontWeight="700" fill="#c4b5fd" filter="url(#lblGlow)">{l.prophase}</text>
      <text x="90" y="105" textAnchor="middle" fontSize="6" fontWeight="700" fill="#c4b5fd" filter="url(#lblGlow)">{l.metaphase}</text>
      <text x="145" y="105" textAnchor="middle" fontSize="6" fontWeight="700" fill="#c4b5fd" filter="url(#lblGlow)">{l.anaphase}</text>
      
      <line x1="200" y1="88" x2="200" y2="105" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="200" y="112" textAnchor="middle" fontSize="6" fontWeight="700" fill="#c4b5fd" filter="url(#lblGlow)">{l.telophase} / {l.cytokinesis}</text>

      <line x1="35" y1="65" x2="35" y2="40" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <rect x="15" y="25" width="40" height="12" rx="6" fill="rgba(0,0,0,0.5)" />
      <text x="35" y="33" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#f472b6" filter="url(#lblGlow)">{l.chromosome}</text>
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
          <stop offset="0%" stopColor="#064e3b" />
          <stop offset="100%" stopColor="#022c22" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#chloroBg)" rx="12" />
      
      {/* ── Chloroplast Graphic ── */}
      {/* Outer Membrane */}
      <ellipse cx="120" cy="70" rx="75" ry="45" fill="#047857" stroke="#34d399" strokeWidth="2" />
      {/* Inner Membrane & Stroma */}
      <ellipse cx="120" cy="70" rx="70" ry="40" fill="#065f46" stroke="#6ee7b7" strokeWidth="1" />
      
      {/* Granum Stacks (Thylakoids) */}
      <g stroke="#022c22" strokeWidth="0.5">
        {/* Stack 1 */}
        <rect x="75" y="55" width="16" height="5" rx="2.5" fill="#34d399" />
        <rect x="75" y="62" width="16" height="5" rx="2.5" fill="#34d399" />
        <rect x="75" y="69" width="16" height="5" rx="2.5" fill="#34d399" />
        <rect x="75" y="76" width="16" height="5" rx="2.5" fill="#34d399" />

        {/* Stack 2 */}
        <rect x="112" y="50" width="16" height="5" rx="2.5" fill="#34d399" />
        <rect x="112" y="57" width="16" height="5" rx="2.5" fill="#34d399" />
        <rect x="112" y="64" width="16" height="5" rx="2.5" fill="#34d399" />
        <rect x="112" y="71" width="16" height="5" rx="2.5" fill="#34d399" />
        <rect x="112" y="78" width="16" height="5" rx="2.5" fill="#34d399" />

        {/* Stack 3 */}
        <rect x="150" y="58" width="16" height="5" rx="2.5" fill="#34d399" />
        <rect x="150" y="65" width="16" height="5" rx="2.5" fill="#34d399" />
        <rect x="150" y="72" width="16" height="5" rx="2.5" fill="#34d399" />
      </g>

      {/* Stroma Lamellae (Connecting bridges) */}
      <line x1="91" y1="64" x2="112" y2="59" stroke="#34d399" strokeWidth="2" />
      <line x1="91" y1="78" x2="112" y2="73" stroke="#34d399" strokeWidth="2" />
      <line x1="128" y1="66" x2="150" y2="60" stroke="#34d399" strokeWidth="2" />
      <line x1="128" y1="80" x2="150" y2="74" stroke="#34d399" strokeWidth="2" />

      {/* ── Labels ── */}
      <line x1="120" y1="25" x2="80" y2="15" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="60" y="14" textAnchor="middle" fontSize="6" fontWeight="700" fill="#a7f3d0" filter="url(#lblGlow)">{l.outerMembrane}</text>

      <line x1="120" y1="30" x2="160" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="180" y="19" textAnchor="middle" fontSize="6" fontWeight="700" fill="#6ee7b7" filter="url(#lblGlow)">{l.innerMembrane}</text>

      <line x1="83" y1="55" x2="55" y2="35" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="40" y="33" textAnchor="middle" fontSize="6" fontWeight="700" fill="#34d399" filter="url(#lblGlow)">{l.thylakoid}</text>

      <line x1="120" y1="83" x2="120" y2="115" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="120" y="123" textAnchor="middle" fontSize="6" fontWeight="700" fill="#10b981" filter="url(#lblGlow)">{l.granum}</text>

      <line x1="140" y1="90" x2="175" y2="110" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="190" y="113" textAnchor="middle" fontSize="6" fontWeight="700" fill="#6ee7b7" filter="url(#lblGlow)">{l.stroma}</text>
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
          <stop offset="0%" stopColor="#1e1b4b" />
          <stop offset="100%" stopColor="#4c1d95" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#mitochBg)" rx="12" />
      
      {/* ── Mitochondria Graphic ── */}
      {/* Outer Membrane */}
      <ellipse cx="120" cy="70" rx="80" ry="40" fill="#701a75" stroke="#f472b6" strokeWidth="2" />
      
      {/* Inner Membrane (Matrix Background) */}
      <path d="M 46 70 C 46 38, 194 38, 194 70 C 194 102, 46 102, 46 70 Z" fill="#4a044e" stroke="#fbcfe8" strokeWidth="1" />
      
      {/* Cristae Folds */}
      <path d="M 60 40 L 60 65 M 75 100 L 75 65 M 90 38 L 90 70 M 110 102 L 110 65 M 130 38 L 130 75 M 150 100 L 150 60 M 170 42 L 170 70" fill="none" stroke="#fbcfe8" strokeWidth="4" strokeLinecap="round" />
      
      {/* ATP Synthase (Small dots on cristae) */}
      {[60, 90, 130, 170].map(x => (
        <circle key={`atp1${x}`} cx={x} cy="65" r="1.5" fill="#fde047" />
      ))}
      {[75, 110, 150].map(x => (
        <circle key={`atp2${x}`} cx={x} cy="75" r="1.5" fill="#fde047" />
      ))}

      {/* ── Labels ── */}
      <line x1="120" y1="30" x2="80" y2="15" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="60" y="14" textAnchor="middle" fontSize="6" fontWeight="700" fill="#f472b6" filter="url(#lblGlow)">{l.outerMembrane}</text>

      <line x1="120" y1="38" x2="160" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="180" y="19" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fbcfe8" filter="url(#lblGlow)">{l.innerMembrane}</text>

      <line x1="110" y1="65" x2="90" y2="115" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="80" y="122" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fbcfe8" filter="url(#lblGlow)">{l.cristae}</text>

      <line x1="140" y1="70" x2="165" y2="115" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="175" y="122" textAnchor="middle" fontSize="6" fontWeight="700" fill="#c084fc" filter="url(#lblGlow)">{l.matrix}</text>

      <line x1="150" y1="75" x2="195" y2="65" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="210" y="62" textAnchor="middle" fontSize="6" fontWeight="700" fill="#fde047" filter="url(#lblGlow)">{l.atp}</text>
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
  
  // A, T, G, C színek
  const colors = ["#ef4444", "#3b82f6", "#10b981", "#eab308"]; 

  return (
    <svg viewBox="0 0 240 140" className="w-full h-auto max-h-36">
      <defs>
        <linearGradient id="dnaHelBg" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#172554" />
          <stop offset="100%" stopColor="#3b0764" />
        </linearGradient>
        <LabelGlow />
      </defs>
      <rect width="240" height="140" fill="url(#dnaHelBg)" rx="12" />
      
      {/* ── DNA Graphic ── */}
      <g transform="translate(15, 0)">
        {/* Base Pairs (Rungs) */}
        {[35, 45, 55, 65, 75, 85, 95, 105, 115, 125, 135, 145, 155, 165, 175].map((x, i) => {
          // Kis matek a szinuszos Y pozícióhoz
          const y1 = 70 + Math.sin(x * 0.05) * 30;
          const y2 = 70 + Math.sin(x * 0.05 + Math.PI) * 30;
          const isVisible = Math.abs(y1 - y2) > 5; // Ne rajzoljuk, ahol pont fedik egymást
          
          if (!isVisible) return null;

          const c1 = colors[i % 4];
          const c2 = colors[(i + 2) % 4]; // Komplementer pár (pl. Piros-Kék, Zöld-Sárga)

          return (
            <g key={`bp${x}`}>
              <line x1={x} y1={y1} x2={x} y2={(y1+y2)/2} stroke={c1} strokeWidth="3" />
              <line x1={x} y1={(y1+y2)/2} x2={x} y2={y2} stroke={c2} strokeWidth="3" />
            </g>
          );
        })}

        {/* Sugar-Phosphate Backbones */}
        <path d="M 25 70 C 45 10, 65 10, 85 70 C 105 130, 125 130, 145 70 C 165 10, 185 10, 205 70" fill="none" stroke="#c4b5fd" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
        <path d="M 25 70 C 45 130, 65 130, 85 70 C 105 10, 125 10, 145 70 C 165 130, 185 130, 205 70" fill="none" stroke="#8b5cf6" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      </g>

      {/* ── Labels ── */}
      <line x1="60" y1="95" x2="40" y2="120" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="35" y="128" textAnchor="middle" fontSize="6" fontWeight="700" fill="#c4b5fd" filter="url(#lblGlow)">{l.backbone}</text>

      <line x1="140" y1="65" x2="165" y2="30" stroke="rgba(255,255,255,0.3)" strokeWidth="0.6" strokeDasharray="2 1.5" />
      <text x="180" y="27" textAnchor="middle" fontSize="6" fontWeight="700" fill="#e2e8f0" filter="url(#lblGlow)">{l.basePairs}</text>

      {/* Legend */}
      <rect x="185" y="90" width="45" height="35" rx="4" fill="rgba(0,0,0,0.4)" />
      <circle cx="192" cy="97" r="2" fill="#ef4444" />
      <text x="197" y="99" fontSize="5" fill="#e2e8f0">{l.adenine}</text>
      <circle cx="192" cy="105" r="2" fill="#3b82f6" />
      <text x="197" y="107" fontSize="5" fill="#e2e8f0">{l.thymine}</text>
      <circle cx="192" cy="113" r="2" fill="#10b981" />
      <text x="197" y="115" fontSize="5" fill="#e2e8f0">{l.guanine}</text>
      <circle cx="192" cy="121" r="2" fill="#eab308" />
      <text x="197" y="123" fontSize="5" fill="#e2e8f0">{l.cytosine}</text>
    </svg>
  );
});
