"use client";
// StatExplorer7 — Advanced Statistics for Grade 7 (island i8)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Profi, analitikai stílus) ──────────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="statGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#statGrad1)" rx="20" />
    <g transform="translate(40, 120)">
      <line x1="0" y1="0" x2="160" y2="0" stroke="#4338CA" strokeWidth="2" />
      <line x1="0" y1="0" x2="0" y2="-100" stroke="#4338CA" strokeWidth="2" />
      <rect x="10" y="-40" width="20" height="40" fill="#6366F1" rx="2" />
      <rect x="40" y="-70" width="20" height="70" fill="#6366F1" rx="2" />
      <rect x="70" y="-30" width="20" height="30" fill="#6366F1" rx="2" />
      <rect x="100" y="-90" width="20" height="90" fill="#4F46E5" rx="2" />
      <text x="110" y="-100" fontSize="10" fontWeight="bold" fill="#312E81" textAnchor="middle">Max</text>
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#EEF2FF" rx="20" />
    <g transform="translate(120, 70)">
      <text x="0" y="-20" fontSize="14" fill="#3730A3" textAnchor="middle">Számtani közép</text>
      <text x="0" y="15" fontSize="22" fontWeight="black" fill="#4338CA" textAnchor="middle">x̄ = Σx / n</text>
      <path d="M -60,25 L 60,25" stroke="#6366F1" strokeWidth="2" strokeDasharray="4 2" />
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#F5F3FF" rx="20" />
    <g transform="translate(40, 110)">
      <path d="M 0,0 L 40,-30 L 80,-20 L 120,-70 L 160,-50" fill="none" stroke="#8B5CF6" strokeWidth="3" />
      <circle cx="120" cy="-70" r="4" fill="#7C3AED" />
      <text x="120" y="-85" fontSize="10" fontWeight="bold" fill="#5B21B6" textAnchor="middle">Trend</text>
      <line x1="0" y1="0" x2="160" y2="0" stroke="#C4B5FD" strokeWidth="1" />
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Statisztikai Elemzés",
    t1_title: "Adatok leolvasása",
    t1_text: "A statisztika első lépése az adatok pontos leolvasása a grafikonokról. Az oszlopdiagram (bar chart) segít összehasonlítani különböző csoportok értékeit.",
    t1_b1: "Az oszlop magassága jelzi az értéket",
    t1_b2: "Az X tengelyen a kategóriák vannak",
    t1_b3: "Az Y tengelyen a gyakoriság látható",
    t1_inst: "Nézd meg a grafikonon! Hány egység tartozik a 4. kategóriához (x=4)?",
    t1_h1: "Keresd meg a negyedik oszlopot.",
    t1_h2: "Az értéke 90. Koppints a 90-es számra.",
    t1_q: "Melyik oszlop a legmagasabb a diagramon?",
    t1_q_a: "A 4. oszlop", t1_q_b: "Az 1. oszlop", t1_q_c: "A 2. oszlop", t1_q_d: "A 3. oszlop",
    t2_title: "Összetett átlag",
    t2_text: "Az átlag kiszámításához összeadjuk az összes adatot, és elosztjuk az adatok számával. Ez megmutatja a halmaz központi értékét.",
    t2_b1: "Összeadás -> Osztás",
    t2_b2: "Kiszűri az egyedi kiugrásokat",
    t2_b3: "Jele: x̄ (x-vonás)",
    t2_inst: "Számold ki az átlagot: 10, 20, 30, 40! Lépésről lépésre!",
    t2_step1: "Add össze a négy számot (10+20+30+40 = ?)",
    t2_step2: "Oszd el a 100-at 4-gyel!",
    t2_h1: "Az összeg 100. Ezt kell elosztanod 4 felé.",
    t2_h2: "Az átlag 25 lesz.",
    t2_q: "Mennyi a számtani közepe a 4, 8, 12 számoknak?",
    t2_q_a: "8", t2_q_b: "24", t2_q_c: "6", t2_q_d: "10",
    t3_title: "Trendek és változások",
    t3_text: "A vonaldiagram (line chart) a legjobb eszköz a változások követésére, például az idő múlásával. Segít észrevenni a trendeket.",
    t3_b1: "A pontok közötti vonal mutatja az irányt",
    t3_b2: "Emelkedő vonal = növekedés",
    t3_b3: "Süllyedő vonal = csökkenés",
    t3_inst: "Keresd meg a csúcspontot! Melyik x értéknél a legmagasabb az y a vonaldiagramon?",
    t3_h1: "Keresd a legmagasabb pontot a töröttvonalon.",
    t3_h2: "Ez az x=3 pontnál van. Koppints a 3-asra.",
    t3_q: "Mire használjuk leggyakrabban a vonaldiagramot?",
    t3_q_a: "Időbeli változások szemléltetésére", t3_q_b: "Két fix szám összeadására", t3_q_c: "Színek összehasonlítására", t3_q_d: "Körök rajzolására",
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
        { x: 1, y: 40 },
        { x: 2, y: 70 },
        { x: 3, y: 30 },
        { x: 4, y: 90 }
      ],
      targetX: 4,
      targetY: 90,
      chartType: "bar",
      xLabel: "Kategória",
      yLabel: "Érték",
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
      equation: "(10+20+30+40) / 4 = x̄",
      steps: [
        { instruction: "t2_step1", choices: [80, 100, 120, 150], answer: 100, equation: "100 / 4 = x̄" },
        { instruction: "t2_step2", choices: [20, 25, 30, 40], answer: 25, equation: "x̄ = 25" }
      ],
      finalAnswer: 25,
      variable: "Átlag",
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
        { x: 0, y: 10 },
        { x: 1, y: 30 },
        { x: 2, y: 25 },
        { x: 3, y: 50 },
        { x: 4, y: 40 }
      ],
      targetX: 3,
      targetY: 50,
      chartType: "line",
      xLabel: "Idő",
      yLabel: "Mért érték",
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
  icon: "📊",
  topics: TOPICS,
  rounds: [],
};

const StatExplorer7 = memo(function StatExplorer7({
  color = "#4F46E5",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="math_g7_stats" color={color} lang={lang} onDone={onDone} />;
});

export default StatExplorer7;
