"use client";
// DoubleHalfExplorer — Doubling & Halving visualized (G1 i4)
// Now powered by ExplorerEngine v2

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const noSvg = () => null;

const LABELS = {
  en: {
    title: "Double & Half Explorer",
    doubleIntro: "DOUBLE means × 2 — two groups the same!",
    halfIntro: "HALF means ÷ 2 — split into two equal parts!",
    dblOf3: "Double of 3 = ?",
    dblOf4: "Double of 4 = ?",
    dblOf5: "Double of 5 = ?",
    halfOf6: "Half of 6 = ?",
    halfOf8: "Half of 8 = ?",
    halfOf4: "Half of 4 = ?",
  },
  hu: {
    title: "Dupla & Fele felfedezés",
    doubleIntro: "DUPLA azt jelenti × 2 — két egyforma csoport!",
    halfIntro: "FELE azt jelenti ÷ 2 — feloszlott két egyenlő részre!",
    dblOf3: "3 duplája = ?",
    dblOf4: "4 duplája = ?",
    dblOf5: "5 duplája = ?",
    halfOf6: "6 fele = ?",
    halfOf8: "8 fele = ?",
    halfOf4: "4 fele = ?",
  },
  de: {
    title: "Verdoppeln & Halbieren",
    doubleIntro: "VERDOPPELN heißt × 2 — zwei gleiche Gruppen!",
    halfIntro: "HALBIEREN heißt ÷ 2 — aufgeteilt in zwei gleiche Teile!",
    dblOf3: "Das Doppelte von 3 = ?",
    dblOf4: "Das Doppelte von 4 = ?",
    dblOf5: "Das Doppelte von 5 = ?",
    halfOf6: "Die Hälfte von 6 = ?",
    halfOf8: "Die Hälfte von 8 = ?",
    halfOf4: "Die Hälfte von 4 = ?",
  },
  ro: {
    title: "Dublare & Înjumătățire",
    doubleIntro: "DUBLA înseamnă × 2 — două grupuri identice!",
    halfIntro: "JUMĂTATE înseamnă ÷ 2 — împărțit în două părți egale!",
    dblOf3: "Dublul lui 3 = ?",
    dblOf4: "Dublul lui 4 = ?",
    dblOf5: "Dublul lui 5 = ?",
    halfOf6: "Jumătatea lui 6 = ?",
    halfOf8: "Jumătatea lui 8 = ?",
    halfOf4: "Jumătatea lui 4 = ?",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "title",
      infoText: "doubleIntro",
      svg: noSvg,
      bulletKeys: ["dblOf3"],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "dblOf3",
      svg: noSvg,
      questions: [{ question: "dblOf3", choices: ["6", "5", "7", "4"], answer: "6" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "dblOf4",
      svg: noSvg,
      questions: [{ question: "dblOf4", choices: ["8", "7", "9", "6"], answer: "8" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "dblOf5",
      svg: noSvg,
      questions: [{ question: "dblOf5", choices: ["10", "9", "11", "8"], answer: "10" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "halfIntro",
      svg: noSvg,
      questions: [
        { question: "halfOf6", choices: ["3", "2", "4", "5"], answer: "3" },
        { question: "halfOf8", choices: ["4", "5", "3", "6"], answer: "4" },
        { question: "halfOf4", choices: ["2", "1", "3", "4"], answer: "2" },
      ],
    },
  ],
};

const DoubleHalfExplorer = memo(function DoubleHalfExplorer({
  color = "#10B981",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_doublehalf" color={color} lang={lang} onDone={onDone} />;
});

export default DoubleHalfExplorer;
