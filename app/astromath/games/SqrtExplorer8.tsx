"use client";
// SqrtExplorer8 — Square Roots for Grade 8 (island i1)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Modern, matematikai precizitás) ─────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="sqrtGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#A855F7" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#sqrtGrad1)" rx="20" />
    <g transform="translate(120, 80)">
      {/* Square and its side */}
      <rect x="-40" y="-40" width="80" height="80" fill="none" stroke="#6366F1" strokeWidth="3" />
      <text x="0" y="5" fontSize="16" fontWeight="bold" fill="#4F46E5" textAnchor="middle">Terület: 64</text>
      <line x1="-40" y1="50" x2="40" y2="50" stroke="#A855F7" strokeWidth="2" />
      <text x="0" y="65" fontSize="14" fontWeight="black" fill="#9333EA" textAnchor="middle">Oldal: √64 = 8</text>
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#F5F3FF" rx="20" />
    <g transform="translate(120, 70)">
      <line x1="-100" y1="20" x2="100" y2="20" stroke="#7C3AED" strokeWidth="2" />
      <text x="-60" y="45" fontSize="12" fontWeight="bold" fill="#6D28D9" textAnchor="middle">7 (√49)</text>
      <text x="60" y="45" fontSize="12" fontWeight="bold" fill="#6D28D9" textAnchor="middle">8 (√64)</text>
      <circle cx="-50" cy="20" r="5" fill="#C084FC" />
      <text x="-50" y="-5" fontSize="14" fontWeight="black" fill="#7C3AED" textAnchor="middle">√50 ≈ 7,07</text>
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#FAF5FF" rx="20" />
    <g transform="translate(120, 60)">
      <text x="0" y="0" fontSize="22" fontWeight="black" fill="#6B21A8" textAnchor="middle">√12 = 2√3</text>
      <path d="M -40,15 Q 0,40 40,15" fill="none" stroke="#A855F7" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
      <text x="0" y="45" fontSize="12" fill="#7E22CE" textAnchor="middle">√4 · √3</text>
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Négyzetgyökök",
    t1_title: "A gyökvonás fogalma",
    t1_text: "A négyzetgyökvonás a négyzetre emelés ellentéte. Azt a nemnegatív számot keressük, aminek a négyzete az adott szám. Például √64 = 8, mert 8² = 64.",
    t1_b1: "√x: Melyik szám négyzete x?",
    t1_b2: "Csak nemnegatív számból vonhatunk gyököt",
    t1_b3: "A négyzetszámok gyöke egész szám",
    t1_inst: "Keresd meg az oldal hosszát! Ha a négyzet területe 144, mennyi az oldala?",
    t1_h1: "Melyik számot kell önmagával szorozni, hogy 144-et kapjunk?",
    t1_h2: "12 · 12 = 144. Állítsd a csúszkát 12-re.",
    t1_q: "Mennyi √121 értéke?",
    t1_q_a: "11", t1_q_b: "12", t1_q_c: "10", t1_q_d: "21",
    t2_title: "Becslés: Hol a gyök?",
    t2_text: "A legtöbb szám nem négyzetszám, így a gyökük nem egész. Ilyenkor megkeressük a két legközelebbi négyzetszámot, amik közé esik.",
    t2_b1: "√50 nincs meg pontosan",
    t2_b2: "√49 = 7 és √64 = 8",
    t2_b3: "Így √50 egy kicsivel több, mint 7",
    t2_inst: "Becsüld meg √20 helyét a számegyenesen!",
    t2_h1: "√16 = 4 és √25 = 5.",
    t2_h2: "A 20 a 16-hoz és a 25-höz is közel van, tehát 4 és 5 között keresd.",
    t2_q: "Melyik két egész szám közé esik √80?",
    t2_q_a: "8 és 9", t2_q_b: "7 és 8", t2_q_c: "9 és 10", t2_q_d: "80 és 81",
    t3_title: "Kiemelés a gyökjel alól",
    t3_text: "Ha a szám nem négyzetszám, de van négyzetszám osztója, egyszerűsíthetjük a kifejezést. Például √12 = √(4 · 3) = 2√3.",
    t3_b1: "Bontsd fel a számot szorzatokra",
    t3_b2: "Keresd a négyzetszám szorzót (4, 9, 16...)",
    t3_b3: "Vond ki a gyök elé a négyzetszám gyökét",
    t3_inst: "Egyszerűsítsd: √18",
    t3_step1: "Bontsd fel: √(9 · ?)",
    t3_step2: "Vond ki a 9-et a gyök elé (3√?)",
    t3_h1: "18 = 9 · 2.",
    t3_h2: "A 9 gyöke 3, így az eredmény 3√2.",
    t3_q: "Mennyi √20 egyszerűsített alakja?",
    t3_q_a: "2√5", t3_q_b: "4√5", t3_q_c: "5√2", t3_q_d: "2√10",
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
      type: "ratio-slider",
      baseValue: 1,
      basePrice: 1,
      targetValue: 12,
      targetPrice: 144,
      unitName: "oldal",
      currency: "terület",
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
      type: "number-line",
      min: 0,
      max: 10,
      start: 0,
      target: 4.47, // sqrt(20)
      step: 0.1,
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
      type: "equation-solver",
      equation: "√18 = √(9 · 2)",
      steps: [
        { instruction: "t3_step1", choices: [2, 3, 6, 9], answer: 2, equation: "√9 · √2" },
        { instruction: "t3_step2", choices: [2, 3, 4, 9], answer: 3, equation: "3√2" }
      ],
      finalAnswer: 3,
      variable: "√2 szorzója",
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
  icon: "√",
  topics: TOPICS,
  rounds: [],
};

const SqrtExplorer8 = memo(function SqrtExplorer8({
  color = "#6366F1",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="math_g8_sqrt" color={color} lang={lang} onDone={onDone} />;
});

export default SqrtExplorer8;
