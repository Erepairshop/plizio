"use client";
// SystemExplorer8 — Systems of Equations for Grade 8 (island i4)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (High-end analitikai grafika) ────────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="sysGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#sysGrad1)" rx="24" />
    <g transform="translate(120, 80)">
      {/* Koordináta rendszer skicc */}
      <line x1="-80" y1="0" x2="80" y2="0" stroke="#94A3B8" strokeWidth="1" />
      <line x1="0" y1="-60" x2="0" y2="60" stroke="#94A3B8" strokeWidth="1" />
      {/* Két metsző egyenes */}
      <line x1="-60" y1="40" x2="60" y2="-40" stroke="#06B6D4" strokeWidth="3" />
      <line x1="-60" y1="-20" x2="60" y2="40" stroke="#3B82F6" strokeWidth="3" />
      <circle cx="20" cy="13.3" r="6" fill="#F43F5E" />
      <text x="35" y="30" fontSize="12" fontWeight="bold" fill="#F43F5E">P(x;y)</text>
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#0F172A" rx="24" />
    <g transform="translate(120, 70)">
      <text x="0" y="-20" fontSize="16" fontWeight="bold" fill="#38BDF8" textAnchor="middle">y = 2x + 1</text>
      <path d="M 0,-5 L 0,15" stroke="#38BDF8" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="0" y="35" fontSize="14" fill="#94A3B8" textAnchor="middle">3x + (2x + 1) = 11</text>
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#1E293B" rx="24" />
    <g transform="translate(120, 60)">
      <text x="0" y="-15" fontSize="14" fill="#818CF8" textAnchor="middle">  x + y = 10</text>
      <text x="0" y="10" fontSize="14" fill="#818CF8" textAnchor="middle">+ x - y = 4</text>
      <line x1="-40" y1="20" x2="40" y2="20" stroke="#4F46E5" strokeWidth="2" />
      <text x="0" y="45" fontSize="18" fontWeight="black" fill="#A5B4FC" textAnchor="middle">2x = 14</text>
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Egyenletrendszerek",
    t1_title: "A közös megoldás",
    t1_text: "Az egyenletrendszer két vagy több olyan összefüggés, amelynek közös megoldását keressük. Grafikusan ez a két egyenes metszéspontja: az a pont, aminek koordinátái mindkét egyenletet igazzá teszik.",
    t1_b1: "A megoldás egy számpár: (x; y)",
    t1_b2: "Grafikusan: ahol a vonalak találkoznak",
    t1_b3: "Ha az egyenesek párhuzamosak, nincs megoldás",
    t1_inst: "Keresd meg a metszéspontot! Olvasd le az y értékét az x=2 helyen!",
    t1_h1: "Keresd meg, hol találkozik a két színes vonal.",
    t1_h2: "A metszéspont magassága (y) pontosan 4. Koppints a 4-esre.",
    t1_q: "Mit jelent grafikusan az egyenletrendszer megoldása?",
    t1_q_a: "A metszéspontot", t1_q_b: "Az y-tengelymetszetet", t1_q_c: "A vonalak hosszát", t1_q_d: "A területet",
    t2_title: "Behelyettesítéses módszer",
    t2_text: "Ezt akkor használjuk, ha az egyik ismeretlent (pl. y-t) könnyen ki tudjuk fejezni. Ezt a kifejezést 'beültetjük' a másik egyenletbe a betű helyére.",
    t2_b1: "Fejezd ki az egyik változót",
    t2_b2: "Helyettesítsd be a másik egyenletbe",
    t2_b3: "Így egyetlen ismeretlenes egyenletet kapsz",
    t2_inst: "y = 2x. A másik egyenlet: x + y = 6. Mennyi az x?",
    t2_step1: "Helyettesíts: x + 2x = 6",
    t2_step2: "Vond össze az x-eket: 3x = 6",
    t2_h1: "Az egyenlet 3x = 6 lesz.",
    t2_h2: "Ha 3x=6, akkor x=2.",
    t2_q: "Ha y = 3 és x + y = 10, mennyi az x?",
    t2_q_a: "7", t2_q_b: "13", t2_q_c: "3", t2_q_d: "10",
    t3_title: "Összeadásos módszer",
    t3_text: "Ha az egyenletekben az egyik ismeretlen együtthatói ellentettek (pl. +y és -y), egyszerűen összeadjuk a két egyenletet. Így az egyik változó 'kiesik'.",
    t3_b1: "Rendezd az egyenleteket egymás alá",
    t3_b2: "Add össze a bal és jobb oldalakat",
    t3_b3: "Az egyik változó tűnjön el (elimináció)",
    t3_inst: "Adjuk össze: (x + y = 10) és (x - y = 4)!",
    t3_step1: "x + x = 2x, y + (-y) = 0. Mennyi 10 + 4?",
    t3_step2: "Oszd el a 14-et 2-vel!",
    t3_h1: "Az összeadás után 2x = 14 marad.",
    t3_h2: "x = 7. Válaszd a 14-et, majd a 7-et.",
    t3_q: "Mikor érdemes az összeadásos módszert választani?",
    t3_q_a: "Ha az egyik változó együtthatói ellentettek", t3_q_b: "Csak ha nincs benne y", t3_q_c: "Ha az eredmény nulla", t3_q_d: "Mindig",
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
        { x: 0, y: 0 },
        { x: 1, y: 2 },
        { x: 2, y: 4 }, // Intersection
        { x: 3, y: 6 }
      ],
      targetX: 2,
      targetY: 4,
      chartType: "line",
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
      equation: "x + 2x = 6",
      steps: [
        { instruction: "t2_step1", choices: [2, 3, 4, 6], answer: 3, equation: "3x = 6" },
        { instruction: "t2_step2", choices: [1, 2, 3, 6], answer: 2, equation: "x = 2" }
      ],
      finalAnswer: 2,
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
      type: "equation-solver",
      equation: "(x+y) + (x-y) = 10 + 4",
      steps: [
        { instruction: "t3_step1", choices: [6, 10, 14, 20], answer: 14, equation: "2x = 14" },
        { instruction: "t3_step2", choices: [2, 5, 7, 14], answer: 7, equation: "x = 7" }
      ],
      finalAnswer: 7,
      variable: "x",
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
  icon: "⛓️",
  topics: TOPICS,
  rounds: [],
};

const SystemExplorer8 = memo(function SystemExplorer8({
  color = "#06B6D4",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="math_g8_systems" color={color} lang={lang} onDone={onDone} />;
});

export default SystemExplorer8;
