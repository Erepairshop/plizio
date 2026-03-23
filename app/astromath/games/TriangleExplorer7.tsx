"use client";
// TriangleExplorer7 — Advanced Triangles for Grade 7 (island i5)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Modern, tiszta stílus) ──────────────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <defs>
      <linearGradient id="triGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F472B6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#DB2777" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect width="240" height="140" fill="url(#triGrad1)" rx="20" />
    <g transform="translate(120, 75)">
      <path d="M -60,30 L 60,30 L 0,-50 Z" fill="none" stroke="#DB2777" strokeWidth="3" strokeLinejoin="round" />
      <path d="M -45,30 A 15,15 0 0,0 -53,18" fill="none" stroke="#9D174D" strokeWidth="2" />
      <path d="M 45,30 A 15,15 0 0,1 53,18" fill="none" stroke="#9D174D" strokeWidth="2" />
      <path d="M -8,-38 A 15,15 0 0,0 8,-38" fill="none" stroke="#9D174D" strokeWidth="2" />
      <text x="0" y="55" fontSize="14" fontWeight="900" fill="#9D174D" textAnchor="middle">α + β + γ = 180°</text>
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#FDF2F8" rx="20" />
    <g transform="translate(120, 70)">
      <circle cx="0" cy="0" r="45" fill="none" stroke="#EC4899" strokeWidth="2" strokeDasharray="5 5" />
      <text x="0" y="5" fontSize="22" fontWeight="black" fill="#BE185D" textAnchor="middle">180°</text>
      <path d="M -45,0 A 45,45 0 0,1 0,-45" fill="none" stroke="#DB2777" strokeWidth="8" strokeLinecap="round" />
      <text x="-35" y="-35" fontSize="12" fontWeight="bold" fill="#DB2777">90°</text>
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#FFF1F2" rx="20" />
    <g transform="translate(60, 80)">
      <line x1="0" y1="0" x2="120" y2="0" stroke="#E11D48" strokeWidth="4" />
      <text x="60" y="20" fontSize="12" fontWeight="bold" fill="#9F1239" textAnchor="middle">a + b > c</text>
      <path d="M 0,-10 L 50,-40 L 120,-10" fill="none" stroke="#FB7185" strokeWidth="2" strokeDasharray="4 2" />
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Háromszögek Titkai",
    t1_title: "Belső szögek összege",
    t1_text: "Bármilyen háromszöget is rajzolsz, a három belső szögének összege mindig pontosan 180 fok lesz. Ez olyan, mint egy matematikai vastörvény!",
    t1_b1: "α + β + γ = 180°",
    t1_b2: "Ha két szöget ismersz, a harmadik kiszámítható",
    t1_b3: "Egy derékszögű háromszögben a két hegyesszög összege 90°",
    t1_inst: "Egyenlítsd ki a mérleget! Két szög 50° és 60°. Mennyi a harmadik, hogy kijöjjön a 180°?",
    t1_h1: "Az eddigi összeg 110°.",
    t1_h2: "A 180-hoz még 70° hiányzik.",
    t1_q: "Egy háromszög két szöge 45° és 45°. Milyen típusú ez a háromszög a szögei alapján?",
    t1_q_a: "Derékszögű", t1_q_b: "Tompaszögű", t1_q_c: "Szabályos", t1_q_d: "Hegyesszögű",
    t2_title: "Hiányzó szög keresése",
    t2_text: "Használjuk az egyenletmegoldó módszerét! Ha tudjuk az összeget, kivonással könnyen megkapjuk a keresett szöget.",
    t2_b1: "Vond ki az ismert szögeket a 180-ból",
    t2_b2: "Ügyelj a precíz számolásra",
    t2_b3: "Ellenőrizd az összeget a végén",
    t2_inst: "Számold ki x értékét: x + 120° = 180°",
    t2_step1: "Vond ki a 120-at mindkét oldalból!",
    t2_h1: "A 180 - 120 műveletet kell elvégezned.",
    t2_h2: "Az eredmény 60 lesz.",
    t2_q: "Mennyi a harmadik szög, ha α=100° és β=30°?",
    t2_q_a: "50°", t2_q_b: "60°", t2_q_c: "70°", t2_q_d: "180°",
    t3_title: "Háromszög-egyenlőtlenség",
    t3_text: "Nem minden három oldalból lehet háromszöget építeni! A szabály: bármely két oldal összegének nagyobbnak kell lennie a harmadik oldalnál.",
    t3_b1: "a + b > c",
    t3_b2: "a + c > b",
    t3_b3: "b + c > a",
    t3_inst: "Lehet-e háromszöget építeni 3, 4 és 10 cm-es oldalakból? Keresd meg a 7-est a számegyenesen (3+4)!",
    t3_h1: "A 3+4 csak 7, ami kisebb mint 10.",
    t3_h2: "Mivel 7 < 10, ebből nem lesz háromszög. Koppints a 7-esre.",
    t3_q: "Melyik oldalhármasból építhető háromszög?",
    t3_q_a: "3, 4, 5", t3_q_b: "1, 2, 5", t3_q_c: "2, 2, 4", t3_q_d: "10, 2, 2",
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
      type: "balance-scale",
      leftWeight: 180,
      rightInitial: 110,
      unitIcon: "°",
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
      type: "equation-solver",
      equation: "x + 120° = 180°",
      steps: [
        { instruction: "t2_step1", choices: [40, 60, 80, 100], answer: 60, equation: "x = 60°" }
      ],
      finalAnswer: 60,
      variable: "x",
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
      type: "number-line",
      min: 0,
      max: 15,
      start: 0,
      target: 7,
      step: 1,
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
  icon: "📐",
  topics: TOPICS,
  rounds: [],
};

const TriangleExplorer7 = memo(function TriangleExplorer7({
  color = "#DB2777",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="math_g7_triangles" color={color} lang={lang} onDone={onDone} />;
});

export default TriangleExplorer7;
