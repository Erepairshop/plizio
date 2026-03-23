"use client";
// CountingExplorer — Counting & comparing for Grade 1 (island i1)
// Now powered by ExplorerEngine v2

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG Counting Grid ────────────────────────────────────────────────────────────
const CountingSvg = memo(function CountingSvg({ emoji = "🍎", count = 4 }: { emoji?: string; count?: number }) {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      {/* Background gradient */}
      <defs>
        <linearGradient id="countGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#countGrad)" rx="12" />

      {/* Emoji grid */}
      <g transform="translate(100, 55)">
        {Array.from({ length: count }, (_, i) => {
          const cols = Math.ceil(Math.sqrt(count));
          const row = Math.floor(i / cols);
          const col = i % cols;
          const x = (col - cols / 2 + 0.5) * 30;
          const y = (row - Math.ceil(count / cols) / 2 + 0.5) * 30;
          return (
            <text
              key={`emoji-${i}`}
              x={x}
              y={y}
              fontSize="24"
              textAnchor="middle"
              dominantBaseline="middle"
              opacity="0.9"
            >
              {emoji}
            </text>
          );
        })}
      </g>

      {/* Count label */}
      <text x="100" y="105" fontSize="12" fontWeight="bold" fill="#0891B2" textAnchor="middle">
        Total: {count}
      </text>
    </svg>
  );
});

// ─── SVG Comparison ───────────────────────────────────────────────────────────────
const CompareSvg = memo(function CompareSvg({
  leftEmoji = "🐱",
  leftCount = 3,
  rightEmoji = "🐶",
  rightCount = 5
}: {
  leftEmoji?: string;
  leftCount?: number;
  rightEmoji?: string;
  rightCount?: number;
}) {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      {/* Background gradient */}
      <defs>
        <linearGradient id="cmpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#cmpGrad)" rx="12" />

      {/* Left group */}
      <g transform="translate(50, 50)">
        {Array.from({ length: leftCount }, (_, i) => {
          const row = Math.floor(i / 2);
          const col = i % 2;
          const x = (col - 0.5) * 16;
          const y = (row - Math.ceil(leftCount / 2) / 2 + 0.5) * 18;
          return (
            <text
              key={`left-${i}`}
              x={x}
              y={y}
              fontSize="18"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {leftEmoji}
            </text>
          );
        })}
      </g>

      {/* VS text */}
      <text x="100" y="55" fontSize="11" fontWeight="bold" fill="#10B981" textAnchor="middle" opacity="0.6">
        VS
      </text>

      {/* Right group */}
      <g transform="translate(150, 50)">
        {Array.from({ length: rightCount }, (_, i) => {
          const row = Math.floor(i / 2);
          const col = i % 2;
          const x = (col - 0.5) * 16;
          const y = (row - Math.ceil(rightCount / 2) / 2 + 0.5) * 18;
          return (
            <text
              key={`right-${i}`}
              x={x}
              y={y}
              fontSize="18"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              {rightEmoji}
            </text>
          );
        })}
      </g>

      {/* Label: which is more */}
      <text x="100" y="110" fontSize="10" fontWeight="bold" fill="#059669" textAnchor="middle">
        {leftCount > rightCount ? "Left more" : rightCount > leftCount ? "Right more" : "Equal"}
      </text>
    </svg>
  );
});

// ─── Labels ──────────────────────────────────────────────────────────────────────
const LABELS = {
  en: {
    title: "Counting Explorer",
    intro: "Let's count and compare groups!",
    count4: "How many apples are there?",
    count6: "How many stars?",
    cmp3v5: "Which group has MORE?",
    cmp6v4: "Which group has MORE?",
  },
  hu: {
    title: "Számolás felfedezés",
    intro: "Számoljunk és hasonlítsunk össze csoportokat!",
    count4: "Hány alma van?",
    count6: "Hány csillag?",
    cmp3v5: "Melyik csoportban van több?",
    cmp6v4: "Melyik csoportban van több?",
  },
  de: {
    title: "Zählen entdecken",
    intro: "Zählen und Gruppen vergleichen!",
    count4: "Wie viele Äpfel sind es?",
    count6: "Wie viele Sterne?",
    cmp3v5: "Welche Gruppe hat MEHR?",
    cmp6v4: "Welche Gruppe hat MEHR?",
  },
  ro: {
    title: "Explorare numărare",
    intro: "Să numărăm și să comparăm grupuri!",
    count4: "Câte mere sunt?",
    count6: "Câte stele?",
    cmp3v5: "Care grup are MAI MULTE?",
    cmp6v4: "Care grup are MAI MULTE?",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "title",
      infoText: "intro",
      svg: () => <CountingSvg emoji="🍎" count={4} />,
      bulletKeys: [],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "count4",
      svg: () => <CountingSvg emoji="🍎" count={4} />,
      questions: [{ question: "count4", choices: ["3", "4", "5", "2"], answer: "4" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "count6",
      svg: () => <CountingSvg emoji="⭐" count={6} />,
      questions: [{ question: "count6", choices: ["5", "6", "7", "4"], answer: "6" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "cmp3v5",
      svg: () => <CompareSvg leftEmoji="🐱" leftCount={3} rightEmoji="🐶" rightCount={5} />,
      questions: [{ question: "cmp3v5", choices: ["Dogs (5)", "Cats (3)", "Equal"], answer: "Dogs (5)" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "intro",
      svg: () => <CompareSvg leftEmoji="🍊" leftCount={6} rightEmoji="🍋" rightCount={4} />,
      questions: [
        { question: "count4", choices: ["3", "4", "5", "2"], answer: "4" },
        { question: "cmp6v4", choices: ["Oranges (6)", "Lemons (4)", "Equal"], answer: "Oranges (6)" },
        { question: "count6", choices: ["5", "6", "7", "4"], answer: "6" },
      ],
    },
  ],
};

const CountingExplorer = memo(function CountingExplorer({
  color = "#06B6D4",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_counting" color={color} lang={lang} onDone={onDone} />;
});

export default CountingExplorer;
