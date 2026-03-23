"use client";
// TransformExplorer8 — Geometric Transformations for Grade 8 (island i8)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Neon-Grid Cyber stílus) ──────────────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="transGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0F172A" stopOpacity="1" />
        <stop offset="100%" stopColor="#1E293B" stopOpacity="1" />
      </linearGradient>
      <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#334155" strokeWidth="0.5" />
      </pattern>
    </defs>
    <rect width="240" height="160" fill="url(#transGrad1)" rx="24" />
    <rect width="240" height="160" fill="url(#grid1)" rx="24" />
    <g transform="translate(120, 80)">
      {/* Eredeti alakzat */}
      <polygon points="-40,20 -20,20 -30,-10" fill="none" stroke="#94A3B8" strokeWidth="2" strokeDasharray="2 2" />
      {/* Eltolás vektor */}
      <path d="M -30,-10 L 30,-30" fill="none" stroke="#38BDF8" strokeWidth="2" markerEnd="url(#arrow)" />
      {/* Új alakzat */}
      <polygon points="20,0 40,0 30,-30" fill="#0EA5E9" fillOpacity="0.4" stroke="#38BDF8" strokeWidth="2" />
      <text x="0" y="-30" fontSize="10" fontWeight="bold" fill="#38BDF8" textAnchor="middle">v(60; -20)</text>
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#0F172A" rx="24" />
    <defs>
      <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#1E293B" strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="240" height="140" fill="url(#grid2)" rx="24" />
    <g transform="translate(120, 70)">
      {/* Tengelyek */}
      <line x1="-120" y1="0" x2="120" y2="0" stroke="#475569" strokeWidth="2" />
      <line x1="0" y1="-70" x2="0" y2="70" stroke="#475569" strokeWidth="2" />
      
      {/* Eredeti (jobb) */}
      <polygon points="20,20 60,20 20,-40" fill="none" stroke="#A78BFA" strokeWidth="2" strokeDasharray="3 3" />
      <text x="40" y="-10" fontSize="12" fill="#A78BFA">A</text>
      
      {/* Tükrözött (bal) y tengelyre */}
      <polygon points="-20,20 -60,20 -20,-40" fill="#8B5CF6" fillOpacity="0.4" stroke="#C084FC" strokeWidth="2" />
      <text x="-40" y="-10" fontSize="12" fontWeight="bold" fill="#C084FC">A'</text>
      
      <path d="M 20,-40 Q 0,-60 -20,-40" fill="none" stroke="#F472B6" strokeWidth="2" strokeDasharray="2 2" markerEnd="url(#arrow)" />
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#020617" rx="24" />
    <g transform="translate(60, 100)">
      {/* Kicsinyítés-Nagyítás (Dilation) */}
      <rect x="0" y="-30" width="40" height="30" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="2 2" />
      <rect x="0" y="-60" width="80" height="60" fill="#059669" fillOpacity="0.3" stroke="#34D399" strokeWidth="2" />
      
      <line x1="0" y1="0" x2="100" y2="-75" stroke="#64748B" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="0" cy="0" r="4" fill="#FDE047" />
      <text x="-15" y="15" fontSize="10" fill="#FDE047">Középpont</text>
      <text x="50" y="-70" fontSize="14" fontWeight="black" fill="#10B981">k = 2</text>
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Transzformációk",
    t1_title: "Eltolás (Transzláció)",
    t1_text: "Eltolásnál egy alakzat minden pontját ugyanabba az irányba, ugyanolyan távolságra mozdítjuk el. A koordináta-rendszerben ezt a koordinátákhoz való hozzáadással (vagy kivonással) érjük el.",
    t1_b1: "Ha jobbra tolunk: az x koordináta nő",
    t1_b2: "Ha felfelé tolunk: az y koordináta nő",
    t1_b3: "Az alakzat mérete és tájolása nem változik",
    t1_inst: "Egy pont koordinátája P(3; 4). Toljuk el jobbra 5 egységgel! Mi lesz az új x koordináta?",
    t1_step1: "Add hozzá az 5-öt a régi x koordinátához (3+5)!",
    t1_h1: "Az eredeti x érték 3 volt.",
    t1_h2: "3 + 5 = 8. Az új x koordináta 8 lesz.",
    t1_q: "Mi történik a pont y koordinátájával, ha az alakzatot csak vízszintesen toljuk el?",
    t1_q_a: "Nem változik", t1_q_b: "Nő", t1_q_c: "Csökken", t1_q_d: "Nulla lesz",
    t2_title: "Tükrözés és Forgatás",
    t2_text: "Tükrözésnél (reflexió) az alakzatot átfordítjuk egy tengelyen. Ha az y-tengelyre tükrözünk, az x koordináták előjele megváltozik. Forgatásnál a pontokat egy középpont körül elfordítjuk.",
    t2_b1: "Tükrözés y-tengelyre: (x; y) -> (-x; y)",
    t2_b2: "Tükrözés x-tengelyre: (x; y) -> (x; -y)",
    t2_b3: "Az alakzat orientációja (irányítottsága) megfordul",
    t2_inst: "Tükrözd a P(2; 3) pontot az y-tengelyre! Keresd meg a célpont (x) koordinátáját!",
    t2_h1: "Az y-tengelyes tükrözésnél az x érték előjele megfordul.",
    t2_h2: "A 2-ből -2 lesz. Koppints a -2-es értékre a grafikonon.",
    t2_q: "Hová kerül a (4; 5) pont, ha az x-tengelyre tükrözzük?",
    t2_q_a: "(4; -5)", t2_q_b: "(-4; 5)", t2_q_c: "(-4; -5)", t2_q_d: "(5; 4)",
    t3_title: "Kicsinyítés és Nagyítás",
    t3_text: "A skálázás (dilatáció) során az alakzat alakja megmarad, de a mérete megváltozik. Minden koordinátát megszorzunk egy 'k' arányszámmal.",
    t3_b1: "Ha k > 1, az alakzat nagyodik",
    t3_b2: "Ha 0 < k < 1, az alakzat kicsinyedik",
    t3_b3: "A szögek nem változnak, csak az oldalhosszak",
    t3_inst: "Egy háromszög alapja 4 cm. Kétszeresére nagyítjuk (k=2). Milyen hosszú lesz az új alap?",
    t3_h1: "Szorozd meg az eredeti hosszt a 'k' arányszámmal.",
    t3_h2: "4 · 2 = 8. Állítsd a csúszkát 8-ra.",
    t3_q: "Hogyan változik a terület, ha a téglalap minden oldalát kétszeresére (k=2) nagyítjuk?",
    t3_q_a: "Négyszeresére nő", t3_q_b: "Kétszeresére nő", t3_q_c: "Nem változik", t3_q_d: "Nyolcszorosára nő",
  }
};

// ─── TOPIC DEFINÍCIÓK ────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "equation-solver",
      equation: "x' = 3 + 5",
      steps: [
        { instruction: "t1_step1", choices: [2, 5, 8, 15], answer: 8, equation: "x' = 8" }
      ],
      finalAnswer: 8,
      variable: "x koordináta",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "graph-plotter",
      points: [
        { x: 2, y: 3 }, // Eredeti
        { x: -2, y: 3 } // Tükrözött (target)
      ],
      targetX: -2,
      targetY: 3,
      chartType: "scatter",
      xLabel: "x tengely",
      yLabel: "y tengely",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "ratio-slider",
      baseValue: 1,      // k=1
      basePrice: 4,      // Eredeti hossz
      targetValue: 2,    // k=2
      targetPrice: 8,    // Új hossz
      unitName: "Skála (k)",
      currency: "Hossz",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔄",
  topics: TOPICS,
  rounds: [],
};

const TransformExplorer8 = memo(function TransformExplorer8({
  color = "#0EA5E9",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="math_g8_transform" color={color} lang={lang} onDone={onDone} />;
});

export default TransformExplorer8;
