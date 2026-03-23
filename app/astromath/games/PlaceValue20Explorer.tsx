"use client";
// PlaceValue20Explorer — Tens & Ones discovery (G1 i5)
// Now powered by ExplorerEngine v2

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

const noSvg = () => null;

const LABELS = {
  en: {
    title: "Place Value (11-20)",
    intro: "Numbers 11-20 = 1 TEN + some ONES!",
    num13: "13 = 1 ten + 3 ones",
    num15: "15 = 1 ten + 5 ones",
    num17: "17 = 1 ten + 7 ones",
    q1: "14 = 1 ten + ? ones",
    q2: "1 ten + 6 ones = ?",
    q3: "19 = 1 ten + ? ones",
  },
  hu: {
    title: "Helyiérték (11-20)",
    intro: "A 11-20 közötti számok = 1 TÍZES + néhány EGYES!",
    num13: "13 = 1 tízes + 3 egyes",
    num15: "15 = 1 tízes + 5 egyes",
    num17: "17 = 1 tízes + 7 egyes",
    q1: "14 = 1 tízes + ? egyes",
    q2: "1 tízes + 6 egyes = ?",
    q3: "19 = 1 tízes + ? egyes",
  },
  de: {
    title: "Stellenwert (11-20)",
    intro: "Zahlen 11-20 = 1 ZEHNER + einige EINER!",
    num13: "13 = 1 Zehner + 3 Einer",
    num15: "15 = 1 Zehner + 5 Einer",
    num17: "17 = 1 Zehner + 7 Einer",
    q1: "14 = 1 Zehner + ? Einer",
    q2: "1 Zehner + 6 Einer = ?",
    q3: "19 = 1 Zehner + ? Einer",
  },
  ro: {
    title: "Valoare pozițională (11-20)",
    intro: "Numerele 11-20 = 1 ZECE + câteva UNITĂȚI!",
    num13: "13 = 1 zece + 3 unități",
    num15: "15 = 1 zece + 5 unități",
    num17: "17 = 1 zece + 7 unități",
    q1: "14 = 1 zece + ? unități",
    q2: "1 zece + 6 unități = ?",
    q3: "19 = 1 zece + ? unități",
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
      bulletKeys: ["num13", "num15"],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "q1",
      svg: noSvg,
      questions: [{ question: "q1", choices: ["4", "3", "5", "6"], answer: "4" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "q2",
      svg: noSvg,
      questions: [{ question: "q2", choices: ["16", "15", "17", "18"], answer: "16" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "num17",
      svg: noSvg,
      questions: [{ question: "num17", choices: ["17", "16", "18", "15"], answer: "17" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "intro",
      svg: noSvg,
      questions: [
        { question: "q1", choices: ["4", "3", "5", "6"], answer: "4" },
        { question: "q2", choices: ["16", "15", "17", "18"], answer: "16" },
        { question: "q3", choices: ["9", "8", "10", "7"], answer: "9" },
      ],
    },
  ],
};

const PlaceValue20Explorer = memo(function PlaceValue20Explorer({
  color = "#F59E0B",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_placevalue20" color={color} lang={lang} onDone={onDone} />;
});

export default PlaceValue20Explorer;
