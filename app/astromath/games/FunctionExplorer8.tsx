"use client";
// FunctionExplorer8 — Linear Functions for Grade 8 (island i5)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Cyber-Slate precíziós stílus) ──────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="funcGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#funcGrad1)" rx="24" />
    <g transform="translate(120, 80)">
      {/* Koordinátarendszer */}
      <line x1="-90" y1="0" x2="90" y2="0" stroke="#94A3B8" strokeWidth="1" />
      <line x1="0" y1="-60" x2="0" y2="60" stroke="#94A3B8" strokeWidth="1" />
      {/* f(x) = x + 20 */}
      <line x1="-60" y1="40" x2="60" y2="-80" stroke="#8B5CF6" strokeWidth="3" />
      <circle cx="0" cy="-20" r="5" fill="#EC4899" />
      <text x="10" y="-25" fontSize="12" fontWeight="bold" fill="#EC4899">b (tengelymetszet)</text>
      <path d="M 20,-40 L 40,-40 L 40,-60" fill="none" stroke="#F472B6" strokeWidth="2" />
      <text x="50" y="-45" fontSize="10" fill="#F472B6">m (meredekség)</text>
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#0F172A" rx="24" />
    <g transform="translate(120, 70)">
      <line x1="-80" y1="30" x2="80" y2="-30" stroke="#10B981" strokeWidth="3" />
      <text x="0" y="-40" fontSize="16" fontWeight="bold" fill="#34D399" textAnchor="middle">f(x) = mx + b</text>
      <text x="-50" y="45" fontSize="12" fill="#94A3B8" textAnchor="middle">m {">"} 0: Növekvő</text>
      <text x="50" y="45" fontSize="12" fill="#94A3B8" textAnchor="middle">m {"<"} 0: Csökkenő</text>
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#1E293B" rx="24" />
    <g transform="translate(120, 60)">
      <text x="0" y="-15" fontSize="14" fill="#A5B4FC" textAnchor="middle">A(1; 3) és B(2; 5)</text>
      <path d="M 0,-5 L 0,15" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="0" y="45" fontSize="20" fontWeight="black" fill="#818CF8" textAnchor="middle">m = (5-3)/(2-1) = 2</text>
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Lineáris Függvények",
    t1_title: "Meredekség és Metszet",
    t1_text: "A lineáris függvény általános alakja f(x) = mx + b. Az 'm' (meredekség) azt mutatja, mennyit lépünk fel/le egy egységnyi jobbra lépéskor. A 'b' pedig azt, hol metszi a grafikon az y-tengelyt.",
    t1_b1: "m: ha pozitív növekszik, ha negatív csökken",
    t1_b2: "b: a kezdőpont az y-tengelyen (x=0-nál)",
    t1_b3: "A grafikon mindig egy egyenes",
    t1_inst: "Nézd a grafikont! Mennyi az y-tengelymetszet (b) értéke?",
    t1_h1: "Keresd meg azt a pontot, ahol az egyenes metszi a függőleges tengelyt.",
    t1_h2: "Az y érték itt 20. Koppints a 20-ra.",
    t1_q: "Mit határoz meg az 'm' paraméter?",
    t1_q_a: "A meredekséget", t1_q_b: "Az eltolást", t1_q_c: "A vonal színét", t1_q_d: "A nullahelyet",
    t2_title: "A meredekség hatása",
    t2_text: "Változtassuk az 'm' értékét! Ha m=0, az egyenes vízszintes. Ha m nagy, az egyenes meredek. Ha negatív, a függvény csökkenni fog.",
    t2_b1: "m = 1: 45 fokos emelkedés",
    t2_b2: "m = 0: konstans függvény",
    t2_b3: "m = -2: meredek süllyedés",
    t2_inst: "Állítsd be a meredekséget! Hogyan lesz meredekebb az egyenes?",
    t2_h1: "Növeld az 'm' értékét a csúszkán.",
    t2_h2: "Minél nagyobb a szám, annál meredekebb a vonal.",
    t2_q: "Milyen az egyenes, ha m = 0?",
    t2_q_a: "Vízszintes", t2_q_b: "Függőleges", t2_q_c: "Növekvő", t2_q_d: "Nem létezik",
    t3_title: "Egyenlet két pontból",
    t3_text: "Ha ismersz két pontot az egyenesen, ki tudod számolni a meredekséget: m = (y2 - y1) / (x2 - x1). Ezután a 'b' értéke is könnyen megadható.",
    t3_b1: "Először számold ki a meredekséget (m)",
    t3_b2: "Helyettesíts be az egyik pontot a b-hez",
    t3_b3: "Írd fel a teljes egyenletet",
    t3_inst: "Számold ki 'm' értékét, ha A(1;3) és B(2;5)!",
    t3_step1: "Számold ki az y-ok különbségét: 5 - 3",
    t3_step2: "Számold ki az x-ek különbségét: 2 - 1",
    t3_h1: "m = 2 / 1 = 2.",
    t3_h2: "Válaszd a 2-es értéket.",
    t3_q: "Mennyi a meredeksége az (1;2) és (3;6) pontokon átmenő egyenesnek?",
    t3_q_a: "2", t3_q_b: "4", t3_q_c: "1", t3_q_d: "3",
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
        { x: -2, y: 0 },
        { x: -1, y: 10 },
        { x: 0, y: 20 }, // b = 20
        { x: 1, y: 30 },
        { x: 2, y: 40 }
      ],
      targetX: 0,
      targetY: 20,
      chartType: "line",
      xLabel: "x",
      yLabel: "f(x)",
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
      type: "ratio-slider",
      baseValue: 1, // m = 1
      basePrice: 45, // visual angle-like price
      targetValue: 3, // steeper
      targetPrice: 70, // visually steeper
      unitName: "meredekség (m)",
      currency: "hajlásszög",
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
      equation: "m = (5 - 3) / (2 - 1)",
      steps: [
        { instruction: "t3_step1", choices: [1, 2, 3, 5], answer: 2, equation: "m = 2 / (2 - 1)" },
        { instruction: "t3_step2", choices: [1, 2, 0.5, 4], answer: 2, equation: "m = 2" }
      ],
      finalAnswer: 2,
      variable: "m",
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
  icon: "📈",
  topics: TOPICS,
  rounds: [],
};

const FunctionExplorer8 = memo(function FunctionExplorer8({
  color = "#8B5CF6",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="math_g8_functions" color={color} lang={lang} onDone={onDone} />;
});

export default FunctionExplorer8;
