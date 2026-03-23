"use client";
// ProbabilityExplorer8 — Probability for Grade 8 (island i6)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Cyber-Casino stílus) ──────────────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="probGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#probGrad1)" rx="24" />
    <g transform="translate(120, 80)">
      {/* Kocka sziluett */}
      <rect x="-25" y="-25" width="50" height="50" fill="none" stroke="#06B6D4" strokeWidth="3" rx="8" />
      <circle cx="0" cy="0" r="4" fill="#06B6D4" />
      <circle cx="-12" cy="-12" r="4" fill="#06B6D4" />
      <circle cx="12" cy="12" r="4" fill="#06B6D4" />
      
      <text x="0" y="55" fontSize="18" fontWeight="black" fill="#A5B4FC" textAnchor="middle">P(A) = k / n</text>
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#0F172A" rx="24" />
    <g transform="translate(120, 70)">
      {/* Fa-diagram vázlat */}
      <circle cx="-60" cy="0" r="5" fill="#3B82F6" />
      <line x1="-60" y1="0" x2="0" y2="-30" stroke="#3B82F6" strokeWidth="2" />
      <line x1="-60" y1="0" x2="0" y2="30" stroke="#3B82F6" strokeWidth="2" />
      <text x="20" y="-30" fontSize="12" fill="#94A3B8" textAnchor="start">Fej (1/2)</text>
      <text x="20" y="30" fontSize="12" fill="#94A3B8" textAnchor="start">Írás (1/2)</text>
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#1E293B" rx="24" />
    <g transform="translate(120, 70)">
      <circle cx="0" cy="0" r="45" fill="none" stroke="#F43F5E" strokeWidth="2" strokeDasharray="4 2" />
      <path d="M 0,-45 A 45,45 0 0,1 45,0 L 0,0 Z" fill="#F43F5E" fillOpacity="0.4" />
      <text x="0" y="5" fontSize="14" fontWeight="bold" fill="#FDA4AF" textAnchor="middle">Esemény + Ellentett = 1</text>
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Valószínűségszámítás",
    t1_title: "Klasszikus valószínűség",
    t1_text: "A valószínűség ($P$) megmutatja, mekkora esélye van egy eseménynek. Kiszámítása: kedvező esetek száma ($k$) osztva az összes lehetséges esettel ($n$).",
    t1_b1: "$0 \leq P \leq 1$ (vagy 0% - 100%)",
    t1_b2: "P = 0: lehetetlen esemény",
    t1_b3: "P = 1: biztos esemény",
    t1_inst: "Dobjunk egy kockával! Mennyi az esélye, hogy páros számot (2, 4, 6) dobunk?",
    t1_h1: "A kedvező esetek száma 3, az összes eset 6.",
    t1_h2: "3 / 6 = 0,5. Állítsd a csúszkát 0,5-re!",
    t1_q: "Mennyi az esélye a 'fej' dobásnak egy érmével?",
    t1_q_a: "0,5 (50%)", t1_q_b: "1 (100%)", t1_q_c: "0,25 (25%)", t1_q_d: "0,1 (10%)",
    t2_title: "Egymás utáni események",
    t2_text: "Ha két esemény egymás után történik (pl. kétszer dobunk érmével), a valószínűségeket összeszorozzuk. Ezt fa-diagrammal szemléltetjük.",
    t2_b1: "Az ágakon lévő esélyeket szorozni kell",
    t2_b2: "Egy csomópontból induló ágak összege mindig 1",
    t2_b3: "Segít átlátni az összetett kimeneteleket",
    t2_inst: "Kétszer dobunk érmével. Mennyi az esélye, hogy mindkétszer 'fej' lesz?",
    t2_step1: "Első dobás esélye (1/2)",
    t2_step2: "Második dobás esélye (1/2)",
    t2_h1: "Szorozd össze: 0,5 · 0,5.",
    t2_h2: "Az eredmény 0,25 (vagyis 1/4).",
    t2_q: "Egy zsákban 2 piros és 3 kék golyó van. Mennyi az esélye, hogy elsőre pirosat húzunk?",
    t2_q_a: "2/5", t2_q_b: "3/5", t2_q_c: "1/2", t2_q_d: "1/5",
    t3_title: "Komplementer események",
    t3_text: "Néha könnyebb kiszámolni annak az esélyét, hogy valami NEM történik meg. Az esemény és az ellentett esemény (komplementer) összege mindig 1.",
    t3_b1: "$P(A) + P(\text{nem } A) = 1$",
    t3_b2: "Ha 20% az eső esélye, 80% hogy nem esik",
    t3_b3: "Használd a 'legalább egy' típusú feladatoknál",
    t3_inst: "Egy dobozban 10 golyóból 1 hibás. Mekkora az esélye, hogy jót húzunk? Vond össze a blokkokat!",
    t3_h1: "A hibás húzás esélye 1/10 = 0,1.",
    t3_h2: "A jó húzás esélye: 1 - 0,1 = 0,9. Húzz be 9 blokkot!",
    t3_q: "Ha egy esemény valószínűsége 0,7, mennyi a komplementeré?",
    t3_q_a: "0,3", t3_q_b: "0,7", t3_q_c: "1", t3_q_d: "0",
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
      baseValue: 0,
      basePrice: 0,
      targetValue: 0.5,
      targetPrice: 1,
      unitName: "P",
      currency: "Esély",
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
      equation: "P(F,F) = 0,5 · 0,5",
      steps: [
        { instruction: "t2_step1", choices: [0.5, 0.25, 0.1, 1], answer: 0.25, equation: "P = 0,25" }
      ],
      finalAnswer: 0.25,
      variable: "Valószínűség",
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
      type: "block-drag",
      mode: "combine",
      groups: [4, 5], // making 9 blocks for 0.9
      answer: 9,
      blockIcon: "✔️",
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
  icon: "🎲",
  topics: TOPICS,
  rounds: [],
};

const ProbabilityExplorer8 = memo(function ProbabilityExplorer8({
  color = "#8B5CF6",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="math_g8_prob" color={color} lang={lang} onDone={onDone} />;
});

export default ProbabilityExplorer8;
