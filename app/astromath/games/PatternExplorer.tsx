"use client";
// PatternExplorer — Pattern & Sequence discovery (G1 i9)
// Now powered by ExplorerEngine v2

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG Pattern Visualization ────────────────────────────────────────────────────────
const PatternSvg = memo(function PatternSvg({
  pattern = [1, 2, 1, 2, 1, 2],
  colors = ["#EF4444", "#3B82F6"],
  label = ""
}: {
  pattern?: number[];
  colors?: string[];
  label?: string;
}) {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      {/* Background gradient */}
      <defs>
        <linearGradient id="patGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#patGrad)" rx="12" />

      {/* Pattern circles */}
      {pattern.map((colorIdx, i) => (
        <g key={`circle-${i}`} transform={`translate(${30 + i * 24}, 45)`}>
          {/* Circle */}
          <circle
            cx="0"
            cy="0"
            r="10"
            fill={colors[(colorIdx - 1) % colors.length]}
            opacity="0.85"
            stroke={colors[(colorIdx - 1) % colors.length]}
            strokeWidth="1.5"
          />
          {/* Shine effect */}
          <circle cx="-3" cy="-3" r="2.5" fill="white" opacity="0.4" />
        </g>
      ))}

      {/* Question mark for next */}
      <g transform="translate(192, 45)">
        <circle cx="0" cy="0" r="10" fill="none" stroke="#06B6D4" strokeWidth="2" strokeDasharray="3,2" opacity="0.6" />
        <text x="0" y="5" fontSize="14" fontWeight="900" fill="#06B6D4" textAnchor="middle" opacity="0.7">?</text>
      </g>

      {/* Pattern rule label */}
      {label && (
        <text x="100" y="105" fontSize="10" fontWeight="bold" fill="#0891B2" textAnchor="middle" opacity="0.8">
          {label}
        </text>
      )}
    </svg>
  );
});

// ─── SVG Sequence Visualization ───────────────────────────────────────────────────────
const SequenceSvg = memo(function SequenceSvg({
  numbers = [2, 4, 6, 8],
  rule = "+2"
}: {
  numbers?: number[];
  rule?: string;
}) {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      {/* Background gradient */}
      <defs>
        <linearGradient id="seqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#seqGrad)" rx="12" />

      {/* Number circles */}
      {numbers.map((num, i) => (
        <g key={`num-${i}`} transform={`translate(${35 + i * 45}, 50)`}>
          {/* Circle */}
          <circle cx="0" cy="0" r="12" fill="#10B981" opacity="0.85" stroke="#059669" strokeWidth="2" />
          {/* Number */}
          <text x="0" y="5" fontSize="14" fontWeight="900" fill="white" textAnchor="middle">
            {num}
          </text>
          {/* Arrow to next */}
          {i < numbers.length - 1 && (
            <g transform={`translate(20, 0)`}>
              <line x1="0" y1="0" x2="8" y2="0" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" />
              <polygon points="8,0 5,-2.5 5,2.5" fill="#059669" />
            </g>
          )}
        </g>
      ))}

      {/* Question mark for next */}
      <g transform="translate(170, 50)">
        <circle cx="0" cy="0" r="12" fill="none" stroke="#10B981" strokeWidth="2" strokeDasharray="3,2" opacity="0.6" />
        <text x="0" y="5" fontSize="14" fontWeight="900" fill="#10B981" textAnchor="middle" opacity="0.7">?</text>
      </g>

      {/* Rule label */}
      <text x="100" y="105" fontSize="11" fontWeight="bold" fill="#059669" textAnchor="middle">
        Rule: {rule}
      </text>
    </svg>
  );
});

const LABELS = {
  en: {
    title: "Patterns & Sequences",
    intro: "Patterns repeat! Let's find the rule and continue them!",
    pat1: "🔴🔵🔴🔵🔴🔵 — What comes next?",
    pat2: "⭐⭐🌙⭐⭐🌙 — What comes next?",
    pat3: "🟢🟡🔴🟢🟡🔴 — What comes next?",
    seq1: "2, 4, 6, 8 — What is next?",
    seq2: "5, 10, 15, 20 — What is next?",
    seq3: "1, 3, 5, 7 — What is next?",
  },
  hu: {
    title: "Minták & Sorozatok",
    intro: "A minták ismétlődnek! Találjuk meg a szabályt!",
    pat1: "🔴🔵🔴🔵🔴🔵 — Mi jön ezután?",
    pat2: "⭐⭐🌙⭐⭐🌙 — Mi jön ezután?",
    pat3: "🟢🟡🔴🟢🟡🔴 — Mi jön ezután?",
    seq1: "2, 4, 6, 8 — Mi a következő?",
    seq2: "5, 10, 15, 20 — Mi a következő?",
    seq3: "1, 3, 5, 7 — Mi a következő?",
  },
  de: {
    title: "Muster & Reihen",
    intro: "Muster wiederholen sich! Finden wir die Regel!",
    pat1: "🔴🔵🔴🔵🔴🔵 — Was kommt als nächstes?",
    pat2: "⭐⭐🌙⭐⭐🌙 — Was kommt als nächstes?",
    pat3: "🟢🟡🔴🟢🟡🔴 — Was kommt als nächstes?",
    seq1: "2, 4, 6, 8 — Was ist die nächste?",
    seq2: "5, 10, 15, 20 — Was ist die nächste?",
    seq3: "1, 3, 5, 7 — Was ist die nächste?",
  },
  ro: {
    title: "Tipare & Secvențe",
    intro: "Tiparele se repetă! Să găsim regula!",
    pat1: "🔴🔵🔴🔵🔴🔵 — Ce urmează?",
    pat2: "⭐⭐🌙⭐⭐🌙 — Ce urmează?",
    pat3: "🟢🟡🔴🟢🟡🔴 — Ce urmează?",
    seq1: "2, 4, 6, 8 — Ce este următorul?",
    seq2: "5, 10, 15, 20 — Ce este următorul?",
    seq3: "1, 3, 5, 7 — Ce este următorul?",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "title",
      infoText: "intro",
      svg: () => <PatternSvg pattern={[1, 2, 1, 2, 1, 2]} colors={["#EF4444", "#3B82F6"]} label="Repeats!" />,
      bulletKeys: ["pat1"],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "pat1",
      svg: () => <PatternSvg pattern={[1, 2, 1, 2, 1, 2]} colors={["#EF4444", "#3B82F6"]} label="Red & Blue" />,
      questions: [{ question: "pat1", choices: ["🔴", "🔵", "🟢", "🟡"], answer: "🔴" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "pat2",
      svg: () => <PatternSvg pattern={[1, 1, 2, 1, 1, 2]} colors={["#FBBF24", "#1F2937"]} label="Star & Moon" />,
      questions: [{ question: "pat2", choices: ["⭐", "🌙", "🟢", "🔴"], answer: "⭐" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "seq1",
      svg: () => <SequenceSvg numbers={[2, 4, 6, 8]} rule="+2" />,
      questions: [{ question: "seq1", choices: ["10", "9", "12", "8"], answer: "10" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "intro",
      svg: () => <PatternSvg pattern={[1, 2, 3, 1, 2, 3]} colors={["#10B981", "#FBBF24", "#EF4444"]} label="3-part cycle" />,
      questions: [
        { question: "pat3", choices: ["🟢", "🟡", "🔴", "⭐"], answer: "🟢" },
        { question: "seq2", choices: ["25", "24", "26", "23"], answer: "25" },
        { question: "seq3", choices: ["9", "8", "10", "7"], answer: "9" },
      ],
    },
  ],
};

const PatternExplorer = memo(function PatternExplorer({
  color = "#06B6D4",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_patterns" color={color} lang={lang} onDone={onDone} />;
});

export default PatternExplorer;
