"use client";
// AlgebraExplorer7 — Algebraic Expressions for Grade 7 (island i2)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="alg7Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7C3AED" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#alg7Grad1)" rx="16" />
      {/* Combining like terms: 2a + 3a = 5a */}
      <g transform="translate(40, 50)">
        <rect x="0" y="0" width="30" height="30" fill="#7C3AED" rx="4" />
        <text x="15" y="20" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">a</text>
        <rect x="35" y="0" width="30" height="30" fill="#7C3AED" rx="4" />
        <text x="50" y="20" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">a</text>
        
        <text x="80" y="22" fontSize="20" fontWeight="bold" fill="#5B21B6">+</text>
        
        <g transform="translate(95, 0)">
          <rect x="0" y="0" width="30" height="30" fill="#8B5CF6" rx="4" />
          <text x="15" y="20" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">a</text>
          <rect x="35" y="0" width="30" height="30" fill="#8B5CF6" rx="4" />
          <text x="50" y="20" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">a</text>
          <rect x="70" y="0" width="30" height="30" fill="#8B5CF6" rx="4" />
          <text x="85" y="20" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">a</text>
        </g>
      </g>
      <text x="120" y="115" fontSize="18" fontWeight="black" fill="#4C1D95" textAnchor="middle">2a + 3a = 5a</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="alg7Grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#alg7Grad2)" rx="16" />
      {/* Distributive property: 3(x + 2) = 3x + 6 */}
      <g transform="translate(120, 60)">
        <text x="0" y="0" fontSize="20" fontWeight="bold" fill="#B45309" textAnchor="middle">3 · (x + 2)</text>
        <path d="M -30,10 Q -15,35 0,10" fill="none" stroke="#D97706" strokeWidth="2" markerEnd="url(#arrow)" />
        <path d="M -30,10 Q 0,45 30,10" fill="none" stroke="#D97706" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="0" y="45" fontSize="20" fontWeight="black" fill="#92400E" textAnchor="middle">3x + 6</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="alg7Grad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#alg7Grad3)" rx="16" />
      {/* Substitution: x = 5 -> 2x + 10 = 20 */}
      <g transform="translate(120, 70)">
        <rect x="-80" y="-30" width="160" height="60" fill="white" fillOpacity="0.5" rx="8" stroke="#059669" strokeDasharray="4 2" />
        <text x="0" y="-10" fontSize="14" fill="#065F46" textAnchor="middle">Ha x = 5</text>
        <text x="0" y="20" fontSize="18" fontWeight="black" fill="#047857" textAnchor="middle">2x + 10 = 20</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Algebrai Kifejezések",
    t1_title: "Egynemű kifejezések",
    t1_text: "Azokat a kifejezéseket, amelyekben a változó és annak hatványkitevője megegyezik, egynemű kifejezéseknek hívjuk. Ezeket összeadhatjuk vagy kivonhatjuk egymásból.",
    t1_b1: "Csak az azonos betűket vonhatod össze",
    t1_b2: "Az együtthatókat (számokat) adod össze",
    t1_b3: "Példa: 2x + 3x = 5x, de 2x + 3y nem vonható össze",
    t1_inst: "Vond össze az egyneműeket! Mennyi 4x + 2x?",
    t1_h1: "Mindkét tagnál 'x' a változó, így összeadhatod a számokat.",
    t1_h2: "4 + 2 = 6. Húzz be 6 blokkot!",
    t1_q: "Mennyi 7a - 3a + 2b?",
    t1_q_a: "4a + 2b", t1_q_b: "6a", t1_q_c: "4ab", t1_q_d: "9a",
    t2_title: "Zárójelek felbontása",
    t2_text: "A zárójel előtti szorzóval a zárójelben lévő minden egyes tagot meg kell szorozni. Ezt nevezzük disztributivitásnak.",
    t2_b1: "Szorozd meg az első tagot",
    t2_b2: "Szorozd meg a második tagot",
    t2_b3: "Ügyelj az előjelekre!",
    t2_inst: "Bontsd fel a zárójelet: 4(x + 3)",
    t2_step1: "Szorozd meg x-et 4-gyel",
    t2_step2: "Szorozd meg a 3-at 4-gyel",
    t2_h1: "4 · x = 4x és 4 · 3 = 12.",
    t2_h2: "Az eredmény: 4x + 12.",
    t2_q: "Mennyi -2(x - 5) értéke?",
    t2_q_a: "-2x + 10", t2_q_b: "-2x - 10", t2_q_c: "2x + 10", t2_q_d: "-2x - 5",
    t3_title: "Behelyettesítés",
    t3_text: "A kifejezés értékét megkapjuk, ha a változó helyére behelyettesítünk egy konkrét számot és elvégezzük a műveleteket.",
    t3_b1: "Cseréld le a betűt a számra",
    t3_b2: "Végezd el a szorzást először",
    t3_b3: "Végül add össze/vond ki a maradékot",
    t3_inst: "Számold ki a 3x + 5 értékét, ha x = 4! Állítsd be a csúszkán.",
    t3_h1: "3 · 4 = 12.",
    t3_h2: "12 + 5 = 17. Állítsd a csúszkát 17-re.",
    t3_q: "Mennyi 2x² értéke, ha x = 3?",
    t3_q_a: "18", t3_q_b: "12", t3_q_c: "36", t3_q_d: "9",
  },
  en: {
    explorer_title: "Algebraic Expressions",
    t1_title: "Like Terms",
    t1_text: "Terms that have the same variables and exponents are called like terms. We can add or subtract them together.",
    t1_b1: "Only combine terms with the same letters",
    t1_b2: "Add the coefficients (numbers) together",
    t1_b3: "Example: 2x + 3x = 5x",
    t1_inst: "Combine the like terms! What is 4x + 2x?",
    t1_h1: "Both have 'x', so add the numbers.",
    t1_h2: "4 + 2 = 6. Drag 6 blocks!",
    t1_q: "What is 7a - 3a + 2b?",
    t1_q_a: "4a + 2b", t1_q_b: "6a", t1_q_c: "4ab", t1_q_d: "9a",
    t2_title: "Expanding Brackets",
    t2_text: "To expand brackets, multiply the term outside by every term inside the brackets.",
    t2_b1: "Multiply the first term",
    t2_b2: "Multiply the second term",
    t2_b3: "Watch out for negative signs!",
    t2_inst: "Expand the bracket: 4(x + 3)",
    t2_step1: "Multiply x by 4",
    t2_step2: "Multiply 3 by 4",
    t2_h1: "4 · x = 4x and 4 · 3 = 12.",
    t2_h2: "Result: 4x + 12.",
    t2_q: "What is -2(x - 5)?",
    t2_q_a: "-2x + 10", t2_q_b: "-2x - 10", t2_q_c: "2x + 10", t2_q_d: "-2x - 5",
    t3_title: "Substitution",
    t3_text: "Find the value of an expression by replacing the variable with a given number.",
    t3_b1: "Replace the letter with the number",
    t3_b2: "Do multiplication first",
    t3_b3: "Add or subtract last",
    t3_inst: "Evaluate 3x + 5 if x = 4. Use the slider!",
    t3_h1: "3 · 4 = 12.",
    t3_h2: "12 + 5 = 17. Set the slider to 17.",
    t3_q: "What is the value of 2x² if x = 3?",
    t3_q_a: "18", t3_q_b: "12", t3_q_c: "36", t3_q_d: "9",
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
      type: "block-drag",
      mode: "combine",
      groups: [4, 2], 
      answer: 6,
      blockIcon: "X",
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
      equation: "4(x + 3) = ?",
      steps: [
        { instruction: "t2_step1", choices: ["x", "4x", "4", "3"], answer: "4x", equation: "4x + 4(3)" },
        { instruction: "t2_step2", choices: [7, 12, 4, 1], answer: 12, equation: "4x + 12" }
      ],
      finalAnswer: 12,
      variable: "4x +",
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
      basePrice: 8, // 3*1 + 5
      targetValue: 4,
      targetPrice: 17, // 3*4 + 5
      unitName: "x",
      currency: "érték",
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

const AlgebraExplorer7 = memo(function AlgebraExplorer7({
  color = "#7C3AED",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="math_g7_algebra" color={color} lang={lang} onDone={onDone} />;
});

export default AlgebraExplorer7;
