"use client";
// DivisionExplorer3 — Division Island (Sharing, Grouping, Inverse of Multiplication)
// Modernized with centralized SVG library

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Division Explorer",
    t1_title: "Sharing Equally",
    t1_text: "Division is sharing fairly! If you have 12 items and 3 people, each person gets 4. That's 12 ÷ 3 = 4.",
    t1_b1: "Start with total items",
    t1_b2: "Share into equal groups",
    t1_b3: "Each gets the same amount",
    t1_inst: "Combine blocks: 12 ÷ 3 = ?",
    t1_h1: "First block is 12, second is 3",
    t1_h2: "Drag third block to show the answer",
    t1_q: "If 15 apples are shared by 5 children, how many each?",
    t1_q_3: "3", t1_q_4: "4", t1_q_5: "5", t1_q_15: "15",
    t2_title: "Making Equal Groups",
    t2_text: "Division is also making equal groups! 12 ÷ 3 means: make groups of 3 from 12 items. How many groups can you make? 4 groups!",
    t2_b1: "Start with total items",
    t2_b2: "Make groups of the same size",
    t2_b3: "Count how many groups",
    t2_inst: "Combine blocks: 16 ÷ 2 = ?",
    t2_h1: "First block is 16, second is 2",
    t2_h2: "Drag third block to show the answer",
    t2_q: "16 ÷ 2 = how many groups of 2?",
    t2_q_6: "6", t2_q_8: "8", t2_q_14: "14", t2_q_18: "18",
    t3_title: "Division is Opposite of Multiplication",
    t3_text: "Multiplication and division are opposites! If 3 × 4 = 12, then 12 ÷ 4 = 3 and 12 ÷ 3 = 4.",
    t3_b1: "Multiplication: 3 × 4 = 12",
    t3_b2: "Division: 12 ÷ 4 = 3",
    t3_b3: "They're connected!",
    t3_inst: "Combine blocks: 24 ÷ 6 = ?",
    t3_h1: "First block is 24, second is 6",
    t3_h2: "Drag third block to show the answer",
    t3_q: "If 4 × 8 = 32, what is 32 ÷ 4?",
    t3_q_4: "4", t3_q_8: "8", t3_q_32: "32", t3_q_2: "2",
  },
  de: {
    explorer_title: "Division entdecken",
    t1_title: "Gerecht teilen",
    t1_text: "Division ist gerechtes Teilen! Wenn du 12 Gegenstände und 3 Personen hast, bekommt jede Person 4. Das ist 12 ÷ 3 = 4.",
    t1_b1: "Beginne mit Gesamtgegenständen",
    t1_b2: "Teile in gleiche Gruppen",
    t1_b3: "Jeder bekommt gleich viel",
    t1_inst: "Kombiniere Blöcke: 12 ÷ 3 = ?",
    t1_h1: "Erster Block ist 12, zweiter ist 3",
    t1_h2: "Ziehe dritten Block für die Antwort",
    t1_q: "Wenn 15 Äpfel auf 5 Kinder verteilt werden, wie viele jedes?",
    t1_q_3: "3", t1_q_4: "4", t1_q_5: "5", t1_q_15: "15",
    t2_title: "Gleiche Gruppen bilden",
    t2_text: "Division ist auch das Bilden gleicher Gruppen! 12 ÷ 3 bedeutet: Mache Gruppen von 3 aus 12 Gegenständen. Wie viele Gruppen kannst du machen? 4 Gruppen!",
    t2_b1: "Beginne mit Gesamtgegenständen",
    t2_b2: "Mache Gruppen gleicher Größe",
    t2_b3: "Zähle, wie viele Gruppen",
    t2_inst: "Kombiniere Blöcke: 16 ÷ 2 = ?",
    t2_h1: "Erster Block ist 16, zweiter ist 2",
    t2_h2: "Ziehe dritten Block für die Antwort",
    t2_q: "16 ÷ 2 = wie viele Gruppen von 2?",
    t2_q_6: "6", t2_q_8: "8", t2_q_14: "14", t2_q_18: "18",
    t3_title: "Division ist das Gegenteil von Multiplikation",
    t3_text: "Multiplikation und Division sind Gegensätze! Wenn 3 × 4 = 12, dann 12 ÷ 4 = 3 und 12 ÷ 3 = 4.",
    t3_b1: "Multiplikation: 3 × 4 = 12",
    t3_b2: "Division: 12 ÷ 4 = 3",
    t3_b3: "Sie sind verbunden!",
    t3_inst: "Kombiniere Blöcke: 24 ÷ 6 = ?",
    t3_h1: "Erster Block ist 24, zweiter ist 6",
    t3_h2: "Ziehe dritten Block für die Antwort",
    t3_q: "Wenn 4 × 8 = 32, was ist 32 ÷ 4?",
    t3_q_4: "4", t3_q_8: "8", t3_q_32: "32", t3_q_2: "2",
  },
  hu: {
    explorer_title: "Osztás felfedezés",
    t1_title: "Igazságos felosztás",
    t1_text: "Az osztás igazságos felosztás! Ha 12 tárgyad van és 3 ember, mindegyik ember 4-et kap. Ez 12 ÷ 3 = 4.",
    t1_b1: "Kezd az összes tárggyal",
    t1_b2: "Oszd fel egyenlő csoportokra",
    t1_b3: "Mindenki ugyanannyit kap",
    t1_inst: "Kombináld a blokkokat: 12 ÷ 3 = ?",
    t1_h1: "Első blokk 12, második 3",
    t1_h2: "Húzd a harmadik blokkot a válaszhoz",
    t1_q: "Ha 15 almát 5 gyerek között osztod, mekkora egy-egy?",
    t1_q_3: "3", t1_q_4: "4", t1_q_5: "5", t1_q_15: "15",
    t2_title: "Egyenlő csoportok készítése",
    t2_text: "Az osztás egyenlő csoportok készítése is! 12 ÷ 3 azt jelenti: készíts 3-as csoportokat 12 tárgyból. Hány csoportot tudsz készíteni? 4 csoport!",
    t2_b1: "Kezd az összes tárggyal",
    t2_b2: "Készíts egyenlő méretű csoportokat",
    t2_b3: "Számold meg, hány csoport van",
    t2_inst: "Kombináld a blokkokat: 16 ÷ 2 = ?",
    t2_h1: "Első blokk 16, második 2",
    t2_h2: "Húzd a harmadik blokkot a válaszhoz",
    t2_q: "16 ÷ 2 = hány 2-es csoport?",
    t2_q_6: "6", t2_q_8: "8", t2_q_14: "14", t2_q_18: "18",
    t3_title: "Az osztás a szorzás ellentéte",
    t3_text: "A szorzás és az osztás ellentétes! Ha 3 × 4 = 12, akkor 12 ÷ 4 = 3 és 12 ÷ 3 = 4.",
    t3_b1: "Szorzás: 3 × 4 = 12",
    t3_b2: "Osztás: 12 ÷ 4 = 3",
    t3_b3: "Összekapcsolódnak!",
    t3_inst: "Kombináld a blokkokat: 24 ÷ 6 = ?",
    t3_h1: "Első blokk 24, második 6",
    t3_h2: "Húzd a harmadik blokkot a válaszhoz",
    t3_q: "Ha 4 × 8 = 32, mi az 32 ÷ 4?",
    t3_q_4: "4", t3_q_8: "8", t3_q_32: "32", t3_q_2: "2",
  },
  ro: {
    explorer_title: "Explorare împărțire",
    t1_title: "Împărțire corectă",
    t1_text: "Împărțirea este distribuirea corectă! Dacă ai 12 obiecte și 3 persoane, fiecare persoană primește 4. Asta e 12 ÷ 3 = 4.",
    t1_b1: "Începe cu obiecte totale",
    t1_b2: "Distribuie în grupuri egale",
    t1_b3: "Fiecare primește la fel",
    t1_inst: "Combină blocurile: 12 ÷ 3 = ?",
    t1_h1: "Primul bloc este 12, al doilea este 3",
    t1_h2: "Trage al treilea bloc pentru răspuns",
    t1_q: "Dacă 15 mere sunt distribuite între 5 copii, câte fiecare?",
    t1_q_3: "3", t1_q_4: "4", t1_q_5: "5", t1_q_15: "15",
    t2_title: "Formarea grupurilor egale",
    t2_text: "Împărțirea este și formarea de grupuri egale! 12 ÷ 3 înseamnă: formează grupuri de 3 din 12 obiecte. Câte grupuri poți forma? 4 grupuri!",
    t2_b1: "Începe cu obiecte totale",
    t2_b2: "Formează grupuri de aceeași dimensiune",
    t2_b3: "Numără câte grupuri",
    t2_inst: "Combină blocurile: 16 ÷ 2 = ?",
    t2_h1: "Primul bloc este 16, al doilea este 2",
    t2_h2: "Trage al treilea bloc pentru răspuns",
    t2_q: "16 ÷ 2 = câte grupuri de 2?",
    t2_q_6: "6", t2_q_8: "8", t2_q_14: "14", t2_q_18: "18",
    t3_title: "Împărțire este opusul înmulțirii",
    t3_text: "Înmulțirea și împărțirea sunt opuse! Dacă 3 × 4 = 12, atunci 12 ÷ 4 = 3 și 12 ÷ 3 = 4.",
    t3_b1: "Înmulțire: 3 × 4 = 12",
    t3_b2: "Împărțire: 12 ÷ 4 = 3",
    t3_b3: "Sunt conectate!",
    t3_inst: "Combină blocurile: 24 ÷ 6 = ?",
    t3_h1: "Primul bloc este 24, al doilea este 6",
    t3_h2: "Trage al treilea bloc pentru răspuns",
    t3_q: "Dacă 4 × 8 = 32, ce este 32 ÷ 4?",
    t3_q_4: "4", t3_q_8: "8", t3_q_32: "32", t3_q_2: "2",
  },
};

// ─── TOPIC DEFINITIONS ─────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "math-diagram", name: "SharingSvg", props: { total: 12, people: 3, emoji: "🍎" } },
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [4, 4, 4],
      answer: 12,
      blockIcon: "🍎",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_3", "t1_q_4", "t1_q_5", "t1_q_15"],
      answer: "t1_q_3",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "math-diagram", name: "GroupingSvg", props: { total: 16, groupSize: 4 } },
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [8, 8],
      answer: 16,
      blockIcon: "🔵",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_6", "t2_q_8", "t2_q_14", "t2_q_18"],
      answer: "t2_q_8",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "math-diagram", name: "InverseSvg", props: { a: 3, b: 4 } },
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [4, 4, 4, 4, 4, 4],
      answer: 24,
      blockIcon: "⭐",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_2", "t3_q_4", "t3_q_8", "t3_q_32"],
      answer: "t3_q_8",
    },
  },
];

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "➗",
  topics: TOPICS,
  rounds: [],
};

// ─── Export ───────────────────────────────────────────────────────────────────

const DivisionExplorer3 = memo(function DivisionExplorer3({
  color = "#00FF88",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="math_g3_division" color={color} lang={lang} onDone={onDone} />;
});

export default DivisionExplorer3;
