"use client";
// PatternExplorer — Pattern & Sequence discovery (G1 i9)
// Now powered by ExplorerEngine v2

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const noSvg = () => null;

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
      svg: noSvg,
      bulletKeys: ["pat1"],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "pat1",
      svg: noSvg,
      questions: [{ question: "pat1", choices: ["🔴", "🔵", "🟢", "🟡"], answer: "🔴" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "pat2",
      svg: noSvg,
      questions: [{ question: "pat2", choices: ["⭐", "🌙", "🟢", "🔴"], answer: "⭐" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "seq1",
      svg: noSvg,
      questions: [{ question: "seq1", choices: ["10", "9", "12", "8"], answer: "10" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "intro",
      svg: noSvg,
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
