"use client";
// PythagorasExplorer7 — Pythagorean Theorem for Grade 7 (island i6)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Modern Neon Geometria) ─────────────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="pytGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#pytGrad1)" rx="20" />
    <g transform="translate(100, 90)">
      {/* Derékszögű háromszög */}
      <path d="M 0,0 L 40,0 L 0,-30 Z" fill="none" stroke="#2DD4BF" strokeWidth="3" />
      <rect x="0" y="-5" width="5" height="5" fill="none" stroke="#2DD4BF" strokeWidth="1" />
      
      {/* Négyzetek az oldalakon */}
      <rect x="0" y="0" width="40" height="40" fill="#3B82F6" fillOpacity="0.3" stroke="#3B82F6" strokeWidth="1" />
      <rect x="-30" y="-30" width="30" height="30" fill="#3B82F6" fillOpacity="0.3" stroke="#3B82F6" strokeWidth="1" />
      <path d="M 0,-30 L 40,0 L 70,-40 L 30,-70 Z" fill="#2DD4BF" fillOpacity="0.3" stroke="#2DD4BF" strokeWidth="1" />
      
      <text x="20" y="25" fontSize="10" fontWeight="bold" fill="#1E40AF" textAnchor="middle">a²</text>
      <text x="-15" y="-15" fontSize="10" fontWeight="bold" fill="#1E40AF" textAnchor="middle">b²</text>
      <text x="35" y="-35" fontSize="10" fontWeight="bold" fill="#0D9488" textAnchor="middle">c²</text>
    </g>
    <text x="120" y="25" fontSize="16" fontWeight="900" fill="#0F766E" textAnchor="middle">a² + b² = c²</text>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#F0FDFA" rx="20" />
    <g transform="translate(120, 70)">
      <path d="M -30,20 L 30,20 L -30,-20 Z" fill="none" stroke="#0D9488" strokeWidth="3" />
      <text x="0" y="35" fontSize="12" fontWeight="bold" fill="#0F766E" textAnchor="middle">6</text>
      <text x="-45" y="0" fontSize="12" fontWeight="bold" fill="#0F766E" textAnchor="middle">8</text>
      <text x="10" y="-5" fontSize="14" fontWeight="black" fill="#0D9488">c = ?</text>
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#ECFEFF" rx="20" />
    <g transform="translate(120, 70)">
      <text x="0" y="-20" fontSize="14" fill="#0891B2" textAnchor="middle">Pitagoraszi számhármasok</text>
      <text x="0" y="15" fontSize="24" fontWeight="black" fill="#0E7490" textAnchor="middle">3, 4, 5</text>
      <line x1="-40" y1="25" x2="40" y2="25" stroke="#0891B2" strokeWidth="2" />
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Pitagorasz-tétel",
    t1_title: "A tétel lényege",
    t1_text: "Bármely derékszögű háromszögben a két befogó (a és b) hosszak négyzetének összege egyenlő az átfogó (c) hosszának négyzetével. Ez a geometria alapköve!",
    t1_b1: "Csak derékszögű háromszögre igaz",
    t1_b2: "a² + b² = c²",
    t1_b3: "Az átfogó (c) mindig a leghosszabb oldal",
    t1_inst: "Használd a csúszkát! Ha a = 3 és b = 4, mennyi lesz a négyzeteik összege (c²)?",
    t1_h1: "3² = 9 és 4² = 16. Add össze őket!",
    t1_h2: "9 + 16 = 25. Állítsd a csúszkát 25-re.",
    t1_q: "Melyik oldal az átfogó (c) a képletben?",
    t1_q_a: "A derékszöggel szemközti oldal", t1_q_b: "A legrövidebb oldal", t1_q_c: "A vízszintes oldal", t1_q_d: "Bármelyik oldal",
    t2_title: "Hiányzó oldal számítása",
    t2_text: "Ha ismersz két oldalt, a tétel segítségével a harmadikat is kiszámolhatod. Behelyettesítünk, összeadunk, majd gyököt vonunk.",
    t2_b1: "Emeld négyzetre az ismert oldalakat",
    t2_b2: "Add össze őket (vagy vond ki, ha befogót keresel)",
    t2_b3: "Végül vonj négyzetgyököt",
    t2_inst: "Számold ki az átfogót: a=6, b=8. Lépésről lépésre!",
    t2_step1: "Számold ki a négyzetösszeget (36 + 64 = ?)",
    t2_step2: "Vonj gyököt a 100-ból!",
    t2_h1: "6x6 = 36, 8x8 = 64. Az összeg 100.",
    t2_h2: "Melyik szám négyzete a 100? A válasz 10.",
    t2_q: "Mennyi az átfogó, ha a befogók 5 cm és 12 cm?",
    t2_q_a: "13 cm", t2_q_b: "17 cm", t2_q_c: "15 cm", t2_q_d: "169 cm",
    t3_title: "Ábrázolás grafikonon",
    t3_text: "Nézd meg, hogyan változik az átfogó (c) hossza, ha az egyik befogó (a) növekszik, miközben a másik (b) állandó!",
    t3_b1: "A növekedés nem lineáris",
    t3_b2: "A görbe alakja a négyzetes összefüggést mutatja",
    t3_b3: "Minél nagyobb az alap, annál hosszabb az átfogó",
    t3_inst: "Nézd a grafikont! Ha az 'a' oldal 12, a 'b' pedig 5, mennyi lesz az átfogó (y)?",
    t3_h1: "Az 5-12-13 egy ismert számhármas.",
    t3_h2: "Keresd az y tengelyen a 13-as értéket.",
    t3_q: "Igaz-e: a 3, 4, 5 számhármas egy derékszögű háromszöget alkot?",
    t3_q_a: "Igaz", t3_q_b: "Hamis",
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
      baseValue: 5,
      basePrice: 25,
      targetValue: 5,
      targetPrice: 25,
      unitName: "c",
      currency: "c²",
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
      equation: "6² + 8² = c²",
      steps: [
        { instruction: "t2_step1", choices: [80, 100, 120, 144], answer: 100, equation: "100 = c²" },
        { instruction: "t2_step2", choices: [8, 10, 12, 20], answer: 10, equation: "c = 10" }
      ],
      finalAnswer: 10,
      variable: "c",
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
      type: "graph-plotter",
      points: [
        { x: 0, y: 5 },
        { x: 3, y: 5.8 },
        { x: 6, y: 7.8 },
        { x: 9, y: 10.3 },
        { x: 12, y: 13 }
      ],
      targetX: 12,
      targetY: 13,
      chartType: "line",
      xLabel: "a oldal",
      yLabel: "c oldal",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b"],
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

const PythagorasExplorer7 = memo(function PythagorasExplorer7({
  color = "#2DD4BF",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="math_g7_pyth" color={color} lang={lang} onDone={onDone} />;
});

export default PythagorasExplorer7;
