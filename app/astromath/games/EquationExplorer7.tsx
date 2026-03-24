"use client";
// EquationExplorer7 — Solving Equations for Grade 7 (island i3)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#F0F9FF" rx="16" />
    <g transform="translate(120, 70)">
      <path d="M -80,20 L 80,20 M 0,20 L 0,-40" stroke="#0369A1" strokeWidth="2" />
      <circle cx="-50" cy="5" r="15" fill="#0EA5E9" />
      <text x="-50" y="10" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">x</text>
      <rect x="35" y="-10" width="30" height="30" fill="#0284C7" rx="4" />
      <text x="50" y="10" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">10</text>
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#FDF2F8" rx="16" />
    <text x="120" y="60" fontSize="20" fontWeight="bold" fill="#BE185D" textAnchor="middle">3x + 5 = 20</text>
    <path d="M 120,70 L 120,90" stroke="#DB2777" strokeWidth="2" markerEnd="url(#arrow)" />
    <text x="120" y="115" fontSize="18" fontWeight="bold" fill="#9D174D" textAnchor="middle">3x = 15</text>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#F0FDF4" rx="16" />
    <text x="120" y="50" fontSize="16" fill="#166534" textAnchor="middle">Bal = Jobb</text>
    <text x="120" y="85" fontSize="22" fontWeight="black" fill="#15803D" textAnchor="middle">✔</text>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Egyenletek Megoldása",
    t1_title: "Az egyensúly elve",
    t1_text: "Az egyenlet olyan, mint egy mérleg. Ha az egyik oldalon változtatsz valamit, a másikon is meg kell tenned, hogy az egyensúly megmaradjon.",
    t1_b1: "Mindkét oldalból ugyanazt vonjuk ki",
    t1_b2: "Mindkét oldalt ugyanazzal osztjuk",
    t1_b3: "A cél az x magányossá tétele",
    t1_inst: "Oldd meg az x + 10 = 25 egyenletet a mérlegen!",
    t1_h1: "Vond ki a 10-et mindkét oldalból.",
    t1_h2: "25 - 10 = 15. Állítsd be az x értékét.",
    t1_q: "Ha x + 12 = 20, mennyi az x?",
    t1_q_a: "8", t1_q_b: "32", t1_q_c: "12", t1_q_d: "10",
    t2_title: "Kétlépéses egyenletek",
    t2_text: "Néha több lépésre van szükség. Először a szabad számokat tüntetjük el, utána pedig a változó melletti szorzót.",
    t2_b1: "Fordított műveleti sorrendben haladunk",
    t2_b2: "Összeadás/kivonás az első lépés",
    t2_b3: "Szorzás/osztás a második lépés",
    t2_inst: "Oldd meg: 3x + 5 = 20",
    t2_step1: "Vonj ki 5-öt mindkét oldalból!",
    t2_step2: "Oszd el mindkét oldalt 3-mal!",
    t2_h1: "20 - 5 = 15, majd 15 / 3 = 5.",
    t2_h2: "Válaszd a 15-öt, majd az 5-öt.",
    t2_q: "Mennyi x értéke: 2x - 4 = 10?",
    t2_q_a: "7", t2_q_b: "3", t2_q_c: "14", t2_q_d: "6",
    t3_title: "Ellenőrzés",
    t3_text: "Az egyenlet megoldása után mindig behelyettesítünk az eredeti egyenletbe, hogy lássuk, jól számoltunk-e.",
    t3_b1: "Írd be x helyére a kapott számot",
    t3_b2: "Számold ki a bal oldalt",
    t3_b3: "Vesd össze a jobb oldallal",
    t3_inst: "Ellenőrizd a 4x = 24 megoldását! Ha x = 6, egyensúlyban van?",
    t3_h1: "4 szorozva 6-tal az 24.",
    t3_h2: "Mivel 24 = 24, a megoldás helyes. Válaszd a 24-et.",
    t3_q: "Jó megoldás-e az x = 4 a 3x + 2 = 14 egyenletre?",
    t3_q_a: "Igen", t3_q_b: "Nem",
  },
  de: {
    explorer_title: "Gleichungen Lösen",
    t1_title: "Das Prinzip des Gleichgewichts",
    t1_text: "Eine Gleichung ist wie eine Waage. Wenn du auf einer Seite etwas änderst, musst du das gleiche auf der anderen Seite tun.",
    t1_b1: "Subtrahiere von beiden Seiten dasselbe",
    t1_b2: "Dividiere beide Seiten durch dasselbe",
    t1_b3: "Das Ziel ist, x allein zu haben",
    t1_inst: "Löse x + 10 = 25 auf der Waage!",
    t1_h1: "Subtrahiere 10 von beiden Seiten.",
    t1_h2: "25 - 10 = 15. Stelle den x-Wert ein.",
    t1_q: "Wenn x + 12 = 20, wie viel ist x?",
    t1_q_a: "8", t1_q_b: "32", t1_q_c: "12", t1_q_d: "10",
    t2_title: "Zweistufige Gleichungen",
    t2_text: "Manchmal brauchst du mehr Schritte. Zuerst entfernst du die freien Zahlen, dann den Multiplikator von x.",
    t2_b1: "Wir gehen in umgekehrter Operationsreihenfolge vor",
    t2_b2: "Addition/Subtraktion ist der erste Schritt",
    t2_b3: "Multiplikation/Division ist der zweite Schritt",
    t2_inst: "Löse: 3x + 5 = 20",
    t2_step1: "Subtrahiere 5 von beiden Seiten!",
    t2_step2: "Dividiere beide Seiten durch 3!",
    t2_h1: "20 - 5 = 15, dann 15 / 3 = 5.",
    t2_h2: "Wähle 15, dann 5.",
    t2_q: "Wie viel ist x in: 2x - 4 = 10?",
    t2_q_a: "7", t2_q_b: "3", t2_q_c: "14", t2_q_d: "6",
    t3_title: "Überprüfung",
    t3_text: "Nach dem Lösen einer Gleichung setzt du die Lösung in die ursprüngliche Gleichung ein, um zu überprüfen.",
    t3_b1: "Ersetze x durch die Lösung",
    t3_b2: "Berechne die linke Seite",
    t3_b3: "Vergleiche mit der rechten Seite",
    t3_inst: "Überprüfe 4x = 24! Wenn x = 6, ist die Gleichung ausgewogen?",
    t3_h1: "4 mal 6 ist 24.",
    t3_h2: "Da 24 = 24, ist die Lösung korrekt. Wähle 24.",
    t3_q: "Ist x = 4 eine Lösung von 3x + 2 = 14?",
    t3_q_a: "Ja", t3_q_b: "Nein",
  },
  en: {
    explorer_title: "Solving Equations",
    t1_title: "The Balance Principle",
    t1_text: "An equation is like a balance scale. If you change something on one side, you must do the same on the other side.",
    t1_b1: "Subtract the same from both sides",
    t1_b2: "Divide both sides by the same",
    t1_b3: "The goal is to isolate x",
    t1_inst: "Solve x + 10 = 25 on the balance!",
    t1_h1: "Subtract 10 from both sides.",
    t1_h2: "25 - 10 = 15. Set the x value.",
    t1_q: "If x + 12 = 20, what is x?",
    t1_q_a: "8", t1_q_b: "32", t1_q_c: "12", t1_q_d: "10",
    t2_title: "Two-Step Equations",
    t2_text: "Sometimes you need more steps. First remove the free numbers, then the multiplier of x.",
    t2_b1: "We use reverse order of operations",
    t2_b2: "Addition/Subtraction is the first step",
    t2_b3: "Multiplication/Division is the second step",
    t2_inst: "Solve: 3x + 5 = 20",
    t2_step1: "Subtract 5 from both sides!",
    t2_step2: "Divide both sides by 3!",
    t2_h1: "20 - 5 = 15, then 15 / 3 = 5.",
    t2_h2: "Choose 15, then 5.",
    t2_q: "What is x in: 2x - 4 = 10?",
    t2_q_a: "7", t2_q_b: "3", t2_q_c: "14", t2_q_d: "6",
    t3_title: "Verification",
    t3_text: "After solving, substitute the solution back into the original equation to check.",
    t3_b1: "Replace x with the solution",
    t3_b2: "Calculate the left side",
    t3_b3: "Compare with the right side",
    t3_inst: "Verify 4x = 24! If x = 6, is the equation balanced?",
    t3_h1: "4 times 6 is 24.",
    t3_h2: "Since 24 = 24, the solution is correct. Choose 24.",
    t3_q: "Is x = 4 a solution of 3x + 2 = 14?",
    t3_q_a: "Yes", t3_q_b: "No",
  },
  ro: {
    explorer_title: "Rezolvarea Ecuațiilor",
    t1_title: "Principiul Echilibrului",
    t1_text: "O ecuație este ca o balanță. Dacă schimbi ceva pe o parte, trebuie să faci la fel pe cealaltă parte.",
    t1_b1: "Scade același lucru din ambele părți",
    t1_b2: "Împarte ambele părți la aceeași valoare",
    t1_b3: "Scopul este să izolezi x",
    t1_inst: "Rezolvă x + 10 = 25 pe balanță!",
    t1_h1: "Scade 10 din ambele părți.",
    t1_h2: "25 - 10 = 15. Setează valoarea lui x.",
    t1_q: "Dacă x + 12 = 20, cât este x?",
    t1_q_a: "8", t1_q_b: "32", t1_q_c: "12", t1_q_d: "10",
    t2_title: "Ecuații în Doi Pași",
    t2_text: "Uneori ai nevoie de mai mulți pași. Întâi elimină numerele libere, apoi multiplicatorul lui x.",
    t2_b1: "Folosim ordinea inversă a operațiilor",
    t2_b2: "Adunare/Scădere este pasul întâi",
    t2_b3: "Înmulțire/Împărțire este pasul doi",
    t2_inst: "Rezolvă: 3x + 5 = 20",
    t2_step1: "Scade 5 din ambele părți!",
    t2_step2: "Împarte ambele părți la 3!",
    t2_h1: "20 - 5 = 15, apoi 15 / 3 = 5.",
    t2_h2: "Alege 15, apoi 5.",
    t2_q: "Cât este x în: 2x - 4 = 10?",
    t2_q_a: "7", t2_q_b: "3", t2_q_c: "14", t2_q_d: "6",
    t3_title: "Verificare",
    t3_text: "După rezolvare, substituie soluția în ecuația originală pentru a verifica.",
    t3_b1: "Înlocuiește x cu soluția",
    t3_b2: "Calculează partea stângă",
    t3_b3: "Compară cu partea dreaptă",
    t3_inst: "Verifică 4x = 24! Dacă x = 6, este ecuația echilibrată?",
    t3_h1: "4 ori 6 este 24.",
    t3_h2: "Deoarece 24 = 24, soluția este corectă. Alege 24.",
    t3_q: "Este x = 4 o soluție a lui 3x + 2 = 14?",
    t3_q_a: "Da", t3_q_b: "Nu",
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
      type: "balance-scale",
      leftWeight: 25,
      rightInitial: 10,
      unitIcon: "x",
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
      equation: "3x + 5 = 20",
      steps: [
        { instruction: "t2_step1", choices: [10, 15, 25, 20], answer: 15, equation: "3x = 15" },
        { instruction: "t2_step2", choices: [3, 4, 5, 15], answer: 5, equation: "x = 5" }
      ],
      finalAnswer: 5,
      variable: "x",
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
      type: "equation-solver",
      equation: "4 · 6 = ?",
      steps: [
        { instruction: "t3_inst", choices: [20, 24, 28, 12], answer: 24, equation: "24 = 24" }
      ],
      finalAnswer: 24,
      variable: "Eredmény",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b"],
      answer: "t3_q_a",
    },
  },
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔑",
  topics: TOPICS,
  rounds: [],
};

const EquationExplorer7 = memo(function EquationExplorer7({
  color = "#0EA5E9",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="math_g7_eq" color={color} lang={lang} onDone={onDone} />;
});

export default EquationExplorer7;
