"use client";
// DoubleHalfExplorer — Doubling & Halving for Grade 1 (island i4)
// Modernized with centralized SVG library

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Double & Half Explorer",
    t1_title: "Doubling (×2)",
    t1_text: "Double means adding the same number twice. When you double, you make two equal groups and count them together: 4 + 4 = 8.",
    t1_b1: "Double = two equal groups",
    t1_b2: "Add them together",
    t1_b3: "2 × the number",
    t1_inst: "Combine 5 stars with 5 more stars — how many total?",
    t1_h1: "Count both groups together",
    t1_h2: "5 + 5 = 10 — double of 5!",
    t1_q: "What is the double of 6?",
    t1_q_10: "10", t1_q_12: "12", t1_q_11: "11", t1_q_14: "14",
    t2_title: "Halving (÷2)",
    t2_text: "Half means splitting into two equal parts. When you halve, you divide a number equally: 8 ÷ 2 = 4, so half of 8 is 4.",
    t2_b1: "Half = split into 2 equal parts",
    t2_b2: "Each part is the same size",
    t2_b3: "Half = ÷ by 2",
    t2_inst: "Split 8 cookies equally with a friend — how many does each get?",
    t2_h1: "Share them equally into 2 groups",
    t2_h2: "8 ÷ 2 = 4 — each gets 4 cookies!",
    t2_q: "What is half of 14?",
    t2_q_6: "6", t2_q_7: "7", t2_q_8: "8", t2_q_5: "5",
    t3_title: "Simple Fractions (1/2)",
    t3_text: "A fraction is a part of a whole. When you split something in half, you have two equal parts. One part is 1/2 (one half) of the whole.",
    t3_b1: "1/2 = one of two equal parts",
    t3_b2: "The top number tells the parts you have",
    t3_b3: "The bottom number tells the total parts",
    t3_inst: "Half of 6 candies = tap the candy on the right!",
    t3_h1: "Split 6 equally into 2 groups",
    t3_h2: "6 ÷ 2 = 3 in each group!",
    t3_q: "If you share 6 candies equally with a friend, how many does each get?",
    t3_q_2: "2", t3_q_3: "3", t3_q_4: "4", t3_q_5: "5",
  },
  de: {
    explorer_title: "Verdoppeln & Halbieren Entdeckung",
    t1_title: "Verdoppeln (×2)",
    t1_text: "Verdoppeln bedeutet, die gleiche Zahl zweimal hinzuzufügen. Wenn du verdoppelst, machst du zwei gleiche Gruppen und zählst sie zusammen: 4 + 4 = 8.",
    t1_b1: "Verdoppeln = zwei gleiche Gruppen",
    t1_b2: "Zähle sie zusammen",
    t1_b3: "2 × die Zahl",
    t1_inst: "Kombiniere 5 Sterne mit 5 weiteren Sternen — wie viele insgesamt?",
    t1_h1: "Zähle beide Gruppen zusammen",
    t1_h2: "5 + 5 = 10 — das Doppelte von 5!",
    t1_q: "Was ist das Doppelte von 6?",
    t1_q_10: "10", t1_q_12: "12", t1_q_11: "11", t1_q_14: "14",
    t2_title: "Halbieren (÷2)",
    t2_text: "Halbieren bedeutet, in zwei gleiche Teile zu teilen. Wenn du halbierst, teilst du eine Zahl gleichmäßig: 8 ÷ 2 = 4, also ist die Hälfte von 8 gleich 4.",
    t2_b1: "Halbieren = in 2 gleiche Teile teilen",
    t2_b2: "Jeder Teil ist gleich groß",
    t2_b3: "Hälfte = ÷ 2",
    t2_inst: "Teile 8 Kekse gleichmäßig mit einem Freund — wie viele bekommt jeder?",
    t2_h1: "Teile sie gleichermaßen in 2 Gruppen",
    t2_h2: "8 ÷ 2 = 4 — jeder bekommt 4 Kekse!",
    t2_q: "Was ist die Hälfte von 14?",
    t2_q_6: "6", t2_q_7: "7", t2_q_8: "8", t2_q_5: "5",
    t3_title: "Einfache Brüche (1/2)",
    t3_text: "Ein Bruch ist ein Teil eines Ganzen. Wenn du etwas in zwei Hälften teilst, hast du zwei gleiche Teile. Ein Teil ist 1/2 (ein Halb) des Ganzen.",
    t3_b1: "1/2 = einer von zwei gleichen Teilen",
    t3_b2: "Die obere Zahl zeigt die Teile, die du hast",
    t3_b3: "Die untere Zahl zeigt die Gesamtteile",
    t3_inst: "Hälfte von 6 Bonbons = tippe auf das Bonbon rechts!",
    t3_h1: "Teile 6 gleichmäßig in 2 Gruppen",
    t3_h2: "6 ÷ 2 = 3 in jeder Gruppe!",
    t3_q: "Wenn du 6 Bonbons gleichmäßig mit einem Freund teilst, wie viele bekommt jeder?",
    t3_q_2: "2", t3_q_3: "3", t3_q_4: "4", t3_q_5: "5",
  },
  hu: {
    explorer_title: "Dupla & Fele Felfedezés",
    t1_title: "Megduplázás (×2)",
    t1_text: "A megduplázás azt jelenti, hogy az ugyanazt a számot kétszer hozzáadod. Amikor megduplázol, két egyenlő csoportot készítesz és összeadod őket: 4 + 4 = 8.",
    t1_b1: "Megduplázás = két egyenlő csoport",
    t1_b2: "Összeadod őket",
    t1_b3: "2 × a szám",
    t1_inst: "Kombinálj 5 csillagot 5 másik csillaggal — összesen hány?",
    t1_h1: "Számold össze mindkét csoportot",
    t1_h2: "5 + 5 = 10 — az 5 duplája!",
    t1_q: "Mi az 6 duplája?",
    t1_q_10: "10", t1_q_12: "12", t1_q_11: "11", t1_q_14: "14",
    t2_title: "Felezés (÷2)",
    t2_text: "A felezés azt jelenti, hogy két egyenlő részre osztasz. Amikor felezol, egyenlően osztasz el egy számot: 8 ÷ 2 = 4, tehát a 8 fele 4.",
    t2_b1: "Felezés = 2 egyenlő részre osztás",
    t2_b2: "Minden rész egyforma",
    t2_b3: "Fele = ÷ 2",
    t2_inst: "Oszd meg 8 sütit egyenlően egy baráttal — hányan kapja meg?",
    t2_h1: "Oszd meg őket egyenlően 2 csoportra",
    t2_h2: "8 ÷ 2 = 4 — mindenki 4 sütit kap!",
    t2_q: "Mi a 14 fele?",
    t2_q_6: "6", t2_q_7: "7", t2_q_8: "8", t2_q_5: "5",
    t3_title: "Egyszerű Törtek (1/2)",
    t3_text: "A tört az egész egy része. Amikor valamit két felére osztasz, két egyenlő részed van. Egy rész az 1/2 (egy fél) az egésznek.",
    t3_b1: "1/2 = az egyik a két egyenlő részből",
    t3_b2: "A felső szám a részeket mutatja, amelyeid van",
    t3_b3: "Az alsó szám az összes részeket mutatja",
    t3_inst: "6 cukor fele = kattints a jobb oldali cukorra!",
    t3_h1: "Oszd meg a 6-ot egyenlően 2 csoportra",
    t3_h2: "6 ÷ 2 = 3 minden csoportban!",
    t3_q: "Ha 6 cukrot egyenlően osztasz meg egy baráttal, hányat kap mindenki?",
    t3_q_2: "2", t3_q_3: "3", t3_q_4: "4", t3_q_5: "5",
  },
  ro: {
    explorer_title: "Explorare Dublu & Jumătate",
    t1_title: "Dublare (×2)",
    t1_text: "Dublarea înseamnă adunarea aceluiași număr de două ori. Când dublezi, faci două grupuri egale și le numeri împreună: 4 + 4 = 8.",
    t1_b1: "Dublare = două grupuri egale",
    t1_b2: "Adună-le împreună",
    t1_b3: "2 × numărul",
    t1_inst: "Combină 5 stele cu 5 stele în plus — câte în total?",
    t1_h1: "Numără ambele grupuri împreună",
    t1_h2: "5 + 5 = 10 — dublul lui 5!",
    t1_q: "Care este dublul lui 6?",
    t1_q_10: "10", t1_q_12: "12", t1_q_11: "11", t1_q_14: "14",
    t2_title: "Înjumătățire (÷2)",
    t2_text: "Înjumătățirea înseamnă împărțirea în două părți egale. Când înjumătățești, împarți un număr egal: 8 ÷ 2 = 4, deci jumătatea lui 8 este 4.",
    t2_b1: "Înjumătățire = împărțire în 2 părți egale",
    t2_b2: "Fiecare parte este la fel de mare",
    t2_b3: "Jumătate = ÷ 2",
    t2_inst: "Împarte 8 biscuiți egal cu un prieten — câți primește fiecare?",
    t2_h1: "Împarte-i egal în 2 grupuri",
    t2_h2: "8 ÷ 2 = 4 — fiecare primește 4 biscuiți!",
    t2_q: "Care este jumătatea lui 14?",
    t2_q_6: "6", t2_q_7: "7", t2_q_8: "8", t2_q_5: "5",
    t3_title: "Fracții Simple (1/2)",
    t3_text: "O fracție este o parte a unui întreg. Când împarți ceva în jumătate, ai două părți egale. O parte este 1/2 (o jumătate) din întreg.",
    t3_b1: "1/2 = una din două părți egale",
    t3_b2: "Numărul de sus arată părțile pe care le ai",
    t3_b3: "Numărul de jos arată totalul de părți",
    t3_inst: "Jumătatea din 6 bomboane = atinge bomboana din dreapta!",
    t3_h1: "Împarte 6 egal în 2 grupuri",
    t3_h2: "6 ÷ 2 = 3 în fiecare grup!",
    t3_q: "Dacă împarți 6 bomboane egal cu un prieten, câte primește fiecare?",
    t3_q_2: "2", t3_q_3: "3", t3_q_4: "4", t3_q_5: "5",
  },
};

// ─── Topic definitions ───────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => null,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [5, 5],
      answer: 10,
      blockIcon: "⭐",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_10", "t1_q_12", "t1_q_11", "t1_q_14"],
      answer: "t1_q_12",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => null,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "block-drag",
      mode: "split",
      groups: [8, 4],
      answer: 4,
      blockIcon: "🍪",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_6", "t2_q_7", "t2_q_8", "t2_q_5"],
      answer: "t2_q_7",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => null,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 10,
      start: 0,
      target: 3,
      showJumps: true,
      jumpCount: 3,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_2", "t3_q_3", "t3_q_4", "t3_q_5"],
      answer: "t3_q_3",
    },
  },
];

// ─── Explorer definition ─────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "✌️",
  topics: TOPICS,
  rounds: [],
};

// ─── Export ──────────────────────────────────────────────────────────────────

const DoubleHalfExplorer = memo(function DoubleHalfExplorer({
  color = "#B44DFF",
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
