"use client";
// CountingExplorer — Visual counting & comparing for Grade 1 (island i1)
// Now powered by ExplorerEngine v2 — uses tap-count + compare + mcq rounds.

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── No-op SVG (interactive rounds don't need an illustration) ───────────────
const noSvg = () => null;

// ─── Counting illustration SVG ───────────────────────────────────────────────
function countingSvg(lang: string) {
  const lbl = lang === "hu" ? "Számolj!" : lang === "de" ? "Zähle!" : lang === "ro" ? "Numără!" : "Count!";
  return (
    <svg viewBox="0 0 240 100" className="w-full h-auto max-h-28">
      <rect width="240" height="100" fill="#0a0a1a" rx="12" />
      {[0, 1, 2, 3, 4].map(i => (
        <g key={i}>
          <circle cx={40 + i * 42} cy={40} r={16} fill={`hsl(${i * 60}, 70%, 55%)`} opacity={0.8} />
          <text x={40 + i * 42} y={45} textAnchor="middle" fontSize="14" fill="white" fontWeight="bold">
            {i + 1}
          </text>
        </g>
      ))}
      <text x="120" y="85" textAnchor="middle" fontSize="12" fill="rgba(255,255,255,0.5)" fontWeight="bold">
        {lbl}
      </text>
    </svg>
  );
}

// ─── Explorer Definition ─────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    intro_title: "🔢 Let's Count!",
    intro_text: "In this adventure, you'll learn to count objects by tapping them, and compare groups to find which has more!",
    intro_b1: "Tap each object to count it",
    intro_b2: "Compare two groups — which has more?",
    intro_b3: "Numbers help us understand the world around us!",
    q1: "You counted 4 apples. Which number comes next?",
    q1_a: "5", q1_b: "3", q1_c: "6", q1_d: "4",
    q2: "Which is more: 3 cats or 5 dogs?",
    q2_a: "5 dogs", q2_b: "3 cats", q2_c: "They are equal", q2_d: "2 cats",
  },
  de: {
    intro_title: "🔢 Lass uns zählen!",
    intro_text: "In diesem Abenteuer lernst du, Gegenstände durch Antippen zu zählen und Gruppen zu vergleichen!",
    intro_b1: "Tippe auf jedes Objekt, um es zu zählen",
    intro_b2: "Vergleiche zwei Gruppen — welche hat mehr?",
    intro_b3: "Zahlen helfen uns, die Welt zu verstehen!",
    q1: "Du hast 4 Äpfel gezählt. Welche Zahl kommt als nächstes?",
    q1_a: "5", q1_b: "3", q1_c: "6", q1_d: "4",
    q2: "Was ist mehr: 3 Katzen oder 5 Hunde?",
    q2_a: "5 Hunde", q2_b: "3 Katzen", q2_c: "Sie sind gleich", q2_d: "2 Katzen",
  },
  hu: {
    intro_title: "🔢 Számoljunk!",
    intro_text: "Ebben a kalandban megtanulod megszámolni a tárgyakat koppintással, és összehasonlítani csoportokat!",
    intro_b1: "Koppints minden tárgyra a számoláshoz",
    intro_b2: "Hasonlíts össze két csoportot — melyikben van több?",
    intro_b3: "A számok segítenek megérteni a világot!",
    q1: "4 almát számoltál meg. Melyik szám jön ezután?",
    q1_a: "5", q1_b: "3", q1_c: "6", q1_d: "4",
    q2: "Melyik több: 3 macska vagy 5 kutya?",
    q2_a: "5 kutya", q2_b: "3 macska", q2_c: "Egyenlőek", q2_d: "2 macska",
  },
  ro: {
    intro_title: "🔢 Să numărăm!",
    intro_text: "În această aventură vei învăța să numeri obiectele atingându-le și să compari grupuri!",
    intro_b1: "Atinge fiecare obiect pentru a-l număra",
    intro_b2: "Compară două grupuri — care are mai multe?",
    intro_b3: "Numerele ne ajută să înțelegem lumea!",
    q1: "Ai numărat 4 mere. Ce număr urmează?",
    q1_a: "5", q1_b: "3", q1_c: "6", q1_d: "4",
    q2: "Care sunt mai multe: 3 pisici sau 5 câini?",
    q2_a: "5 câini", q2_b: "3 pisici", q2_c: "Sunt egale", q2_d: "2 pisici",
  },
};

const COUNTING_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    // R1: Intro — teach what counting is
    {
      type: "info",
      infoTitle: "intro_title",
      infoText: "intro_text",
      svg: countingSvg,
      bulletKeys: ["intro_b1", "intro_b2", "intro_b3"],
    },
    // R2: Tap to count 🍎
    {
      type: "tap-count",
      infoTitle: "intro_title",
      infoText: "intro_text",
      svg: noSvg,
      tapCount: { emoji: "🍎", count: 4 },
    },
    // R3: Compare two groups
    {
      type: "compare",
      infoTitle: "intro_title",
      infoText: "intro_text",
      svg: noSvg,
      compare: {
        left: { emoji: "🐱", count: 3 },
        right: { emoji: "🐶", count: 5 },
      },
    },
    // R4: Tap to count ⭐
    {
      type: "tap-count",
      infoTitle: "intro_title",
      infoText: "intro_text",
      svg: noSvg,
      tapCount: { emoji: "⭐", count: 6 },
    },
    // R5: Review quiz
    {
      type: "mcq",
      infoTitle: "intro_title",
      infoText: "intro_text",
      svg: noSvg,
      questions: [
        { question: "q1", choices: ["q1_a", "q1_b", "q1_c", "q1_d"], answer: "q1_a" },
        { question: "q2", choices: ["q2_a", "q2_b", "q2_c", "q2_d"], answer: "q2_a" },
      ],
    },
  ],
};

// ─── Wrapper Component ───────────────────────────────────────────────────────

const CountingExplorer = memo(function CountingExplorer({
  color, onDone, lang = "en",
}: {
  color: string;
  onDone: (score: number, total: number) => void;
  lang?: string;
}) {
  return (
    <ExplorerEngine
      def={COUNTING_DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      explorerId="math_g1_counting"
    />
  );
});

export default CountingExplorer;
