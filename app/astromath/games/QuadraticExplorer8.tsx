"use client";
// QuadraticExplorer8 — Quadratic Equations for Grade 8 (island i2)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Modern, technikai stílus) ──────────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="quadGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#EF4444" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#quadGrad1)" rx="20" />
    <g transform="translate(120, 80)">
      {/* Parabola rajz */}
      <path d="M -50,-40 Q 0,60 50,-40" fill="none" stroke="#EF4444" strokeWidth="3" />
      <text x="0" y="-30" fontSize="18" fontWeight="black" fill="#B45309" textAnchor="middle">ax² + bx + c = 0</text>
      <circle cx="-28" cy="15" r="4" fill="#F59E0B" />
      <circle cx="28" cy="15" r="4" fill="#F59E0B" />
      <text x="0" y="45" fontSize="10" fill="#991B1B" textAnchor="middle">Zérushelyek (Gyökök)</text>
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#FFF7ED" rx="20" />
    <g transform="translate(120, 70)">
      <text x="0" y="-20" fontSize="14" fill="#9A3412" textAnchor="middle">Diszkrimináns</text>
      <text x="0" y="15" fontSize="24" fontWeight="black" fill="#C2410C" textAnchor="middle">D = b² - 4ac</text>
      <rect x="-60" y="25" width="120" height="2" fill="#EA580C" />
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#FEF2F2" rx="20" />
    <g transform="translate(120, 70)">
      <text x="0" y="-30" fontSize="12" fill="#991B1B" textAnchor="middle">Megoldóképlet</text>
      <text x="0" y="10" fontSize="18" fontWeight="bold" fill="#DC2626" textAnchor="middle">x₁,₂ = (-b ± √D) / 2a</text>
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Másodfokú Egyenletek",
    t1_title: "Az alapalak és a Parabola",
    t1_text: "A másodfokú egyenlet általános alakja ax² + bx + c = 0. A grafikonja egy parabola. Az 'a' értéke határozza meg, hogy a parabola felfelé vagy lefelé nyílik.",
    t1_b1: "a ≠ 0 (különben elsőfokú lenne)",
    t1_b2: "Ha a > 0, a parabola 'mosolyog' (felfelé nyílik)",
    t1_b3: "A c érték mutatja meg az y-tengelymetszetet",
    t1_inst: "Nézd a parabolát! Keresd meg a zérushelyet! Mennyi az y értéke, ha x = 2?",
    t1_h1: "Keresd meg az x tengelyen a 2-est.",
    t1_h2: "A parabola pontja itt y = 0. Koppints a 0-ra.",
    t1_q: "Milyen alakú a másodfokú függvény grafikonja?",
    t1_q_a: "Parabola", t1_q_b: "Egyenes", t1_q_c: "Hiperbola", t1_q_d: "Kör",
    t2_title: "A Diszkrimináns (D)",
    t2_text: "A diszkrimináns segít eldönteni, hány megoldása van az egyenletnek anélkül, hogy végigszámolnánk. Kiszámítása: D = b² - 4ac.",
    t2_b1: "D > 0: Két különböző valós gyök",
    t2_b2: "D = 0: Egy (kettős) valós gyök",
    t2_b3: "D < 0: Nincs valós megoldás",
    t2_inst: "Számold ki a diszkriminánst: x² - 6x + 9 = 0 (a=1, b=-6, c=9)",
    t2_step1: "Számold ki b² értékét (-6 · -6)",
    t2_step2: "Vond ki belőle a 4ac-t (4 · 1 · 9)",
    t2_h1: "(-6)² = 36. 4 · 1 · 9 = 36.",
    t2_h2: "36 - 36 = 0. A diszkrimináns 0.",
    t2_q: "Hány megoldása van az egyenletnek, ha D = 16?",
    t2_q_a: "2", t2_q_b: "1", t2_q_c: "0", t2_q_d: "Végtelen",
    t3_title: "A Megoldóképlet",
    t3_text: "A megoldóképlet segítségével megkapjuk az x értékeket. Fontos a sorrend: először a gyökjel alatti részt (D) számoljuk ki, majd jöhet a többi.",
    t3_b1: "Használd a ± jelet a két gyökhöz",
    t3_b2: "A nevezőben mindig 2a szerepel",
    t3_b3: "Mindig ellenőrizd a megoldást behelyettesítéssel",
    t3_inst: "Hogyan változik a parabola, ha növeljük az 'a' értékét? Állítsd be!",
    t3_h1: "Minél nagyobb az 'a', annál szűkebb lesz a parabola.",
    t3_h2: "Húzd a csúszkát magasabb értékre.",
    t3_q: "Mennyi az x értéke, ha x² = 25?",
    t3_q_a: "5 és -5", t3_q_b: "Csak 5", t3_q_c: "25", t3_q_d: "0",
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
      type: "graph-plotter",
      points: [
        { x: -1, y: 3 },
        { x: 0, y: 0 },
        { x: 1, y: -1 },
        { x: 2, y: 0 },
        { x: 3, y: 3 }
      ],
      targetX: 2,
      targetY: 0,
      chartType: "line", // smooth curve simulated by points
      xLabel: "x",
      yLabel: "y",
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
      equation: "D = (-6)² - 4 · 1 · 9",
      steps: [
        { instruction: "t2_step1", choices: [12, -12, 36, -36], answer: 36, equation: "D = 36 - 4 · 1 · 9" },
        { instruction: "t2_step2", choices: [0, 4, 36, 72], answer: 0, equation: "D = 0" }
      ],
      finalAnswer: 0,
      variable: "D",
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
      baseValue: 1,
      basePrice: 10, // width visual
      targetValue: 4,
      targetPrice: 2, // narrower visual
      unitName: "a együttható",
      currency: "szélesség",
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
  icon: "∪",
  topics: TOPICS,
  rounds: [],
};

const QuadraticExplorer8 = memo(function QuadraticExplorer8({
  color = "#EF4444",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="math_g8_quad" color={color} lang={lang} onDone={onDone} />;
});

export default QuadraticExplorer8;
