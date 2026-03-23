"use client";
// EquationExplorer8 — Advanced Equations & Inequalities for Grade 8 (island i3)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Pro-stílusú, letisztult grafika) ──────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="eq8Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#eq8Grad1)" rx="24" />
    <g transform="translate(120, 80)">
      {/* Fractional Equation Visualization */}
      <text x="0" y="-10" fontSize="24" fontWeight="900" fill="#312E81" textAnchor="middle">x / 3 + 2 = 5</text>
      <path d="M -40,15 L 40,15" stroke="#4F46E5" strokeWidth="2" strokeDasharray="4 2" />
      <text x="0" y="40" fontSize="14" fontWeight="bold" fill="#0891B2" textAnchor="middle">Szorozzunk 3-mal!</text>
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#F8FAFC" rx="24" />
    <g transform="translate(120, 70)">
      <rect x="-100" y="-25" width="200" height="50" fill="white" stroke="#64748B" strokeWidth="1" rx="12" />
      <text x="-45" y="8" fontSize="18" fontWeight="bold" fill="#1E293B" textAnchor="middle">5x - 8</text>
      <text x="0" y="8" fontSize="22" fontWeight="black" fill="#4F46E5" textAnchor="middle">=</text>
      <text x="45" y="8" fontSize="18" fontWeight="bold" fill="#1E293B" textAnchor="middle">2x + 7</text>
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#F0FDF4" rx="24" />
    <g transform="translate(120, 70)">
      <text x="0" y="-25" fontSize="16" fontWeight="bold" fill="#15803D" textAnchor="middle">-2x < 6</text>
      <path d="M -30,0 L 30,0" stroke="#166534" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="0" y="25" fontSize="18" fontWeight="black" fill="#10B981" textAnchor="middle">x > -3</text>
      <circle cx="0" cy="40" r="3" fill="#DC2626" />
      <text x="0" y="55" fontSize="10" fill="#DC2626" textAnchor="middle">JEL MEGFORDUL!</text>
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Egyenletek & Egyenlőtlenségek",
    t1_title: "Törtes egyenletek",
    t1_text: "Ha az egyenletben törtet látsz, az első lépés általában a nevező eltüntetése. Szorozd meg az egyenlet minden tagját a nevezővel (vagy a közös nevezővel)!",
    t1_b1: "A nevezővel való szorzás minden tagra vonatkozik",
    t1_b2: "Eltünteti a törteket, így egyszerűbbé válik a dolgod",
    t1_b3: "Vigyázz a zárójelekre szorzáskor!",
    t1_inst: "Oldd meg: x / 3 + 2 = 5. Első lépés a szorzás 3-mal!",
    t1_step1: "Szorozd meg a 2-t és az 5-öt is 3-mal!",
    t1_step2: "Vond ki a 6-ot a 15-ből!",
    t1_h1: "Az egyenlet így néz ki: x + 6 = 15.",
    t1_h2: "x = 15 - 6, azaz 9.",
    t2_title: "Változók mindkét oldalon",
    t2_text: "Profi technika: rendezd úgy az egyenletet, hogy az ismeretlenek (x) az egyik oldalon, a számok a másikon legyenek. Ezt 'mérlegelvvel' érjük el.",
    t2_b1: "Vond ki a kisebb x-es tagot mindkét oldalból",
    t2_b2: "Végezd el a számok rendezését is",
    t2_b3: "Végül oszd el az x együtthatójával",
    t2_inst: "Oldd meg: 5x - 8 = 2x + 7",
    t2_step1: "Vond ki a 2x-et mindkét oldalból! (5x - 2x = ?)",
    t2_step2: "Add hozzá a 8-at a 7-hez! (3x = ?)",
    t2_h1: "Kapsz egy 3x - 8 = 7 egyenletet, majd 3x = 15.",
    t2_h2: "A 15 osztva 3-mal lesz a megoldás: 5.",
    t3_title: "Egyenlőtlenségek 'csapdája'",
    t3_text: "Az egyenlőtlenségek megoldása hasonló az egyenletekéhez, de van egy kritikus szabály: ha negatív számmal szorzol vagy osztasz, a relációs jel megfordul!",
    t3_b1: "Ha -2x < 6, akkor x > -3",
    t3_b2: "A számegyenesen nyitott vagy zárt kört használunk",
    t3_b3: "A megoldás egy számtartomány",
    t3_inst: "Ábrázold a számegyenesen: x > -3. Melyik irányba indul a nyíl?",
    t3_h1: "A 'nagyobb' azt jelenti, hogy a ponttól jobbra haladunk.",
    t3_h2: "Koppints a -3-tól jobbra lévő tartományra.",
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
      equation: "x/3 + 2 = 5",
      steps: [
        { instruction: "t1_step1", choices: [6, 15, 21, 9], answer: 6, equation: "x + 6 = 15" },
        { instruction: "t1_step2", choices: [3, 9, 12, 15], answer: 9, equation: "x = 9" }
      ],
      finalAnswer: 9,
      variable: "x",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "Mivel érdemes beszorozni az x/4 = 5 egyenletet?",
      choices: ["4", "5", "x", "20"],
      answer: "4",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "equation-solver",
      equation: "5x - 8 = 2x + 7",
      steps: [
        { instruction: "t2_step1", choices: [3, 7, 2, 8], answer: 3, equation: "3x - 8 = 7" },
        { instruction: "t2_step2", choices: [10, 15, 1, 5], answer: 15, equation: "3x = 15" }
      ],
      finalAnswer: 5,
      variable: "x",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "Mi a megoldása a 2x = x + 4 egyenletnek?",
      choices: ["4", "2", "8", "0"],
      answer: "4",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: -10,
      max: 10,
      start: 0,
      target: 5, // Any value > -3
      step: 1,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "Hogyan változik a jel a -3x < 9 egyenlőtlenségben osztás után?",
      choices: ["Megfordul (>)", "Nem változik (<)", "Egyenlőség lesz belőle", "Eltűnik"],
      answer: "Megfordul (>)",
    },
  },
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "⚙️",
  topics: TOPICS,
  rounds: [],
};

const EquationExplorer8 = memo(function EquationExplorer8({
  color = "#4F46E5",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="math_g8_eq_adv" color={color} lang={lang} onDone={onDone} />;
});

export default EquationExplorer8;
