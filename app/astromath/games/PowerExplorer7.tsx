"use client";
// PowerExplorer7 — Powers (x², x³, 10ⁿ) for Grade 7 (island i1)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="powGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#818CF8" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#powGrad1)" rx="16" />
      <g transform="translate(120, 70)">
        <text x="-20" y="10" fontSize="40" fontWeight="bold" fill="#312E81" textAnchor="middle">a</text>
        <text x="5" y="-15" fontSize="24" fontWeight="bold" fill="#4F46E5" textAnchor="middle">n</text>
        <text x="60" y="5" fontSize="16" fill="#3730A3" textAnchor="middle">= a · a · a ...</text>
        <path d="M -20,20 L -20,40 M -20,40 L -40,40" stroke="#312E81" strokeWidth="2" fill="none" />
        <text x="-45" y="43" fontSize="10" fill="#312E81" textAnchor="end">Alap</text>
        <path d="M 5,-25 L 5,-45 M 5,-45 L 25,-45" stroke="#4F46E5" strokeWidth="2" fill="none" />
        <text x="30" y="-42" fontSize="10" fill="#4F46E5" textAnchor="start">Kitevő</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="powGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#powGrad2)" rx="16" />
      <g transform="translate(120, 70)">
        <text x="0" y="-10" fontSize="20" fontWeight="bold" fill="#0369A1" textAnchor="middle">10³ = 10 · 10 · 10</text>
        <text x="0" y="25" fontSize="24" fontWeight="900" fill="#0284C7" textAnchor="middle">1000</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="powGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#powGrad3)" rx="16" />
      <g transform="translate(60, 100)">
        <rect x="0" y="-10" width="20" height="10" fill="#7C3AED" />
        <rect x="30" y="-20" width="20" height="20" fill="#7C3AED" />
        <rect x="60" y="-40" width="20" height="40" fill="#7C3AED" />
        <rect x="90" y="-80" width="20" height="80" fill="#7C3AED" />
        <text x="10" y="15" fontSize="10" fill="#5B21B6" textAnchor="middle">2¹</text>
        <text x="40" y="15" fontSize="10" fill="#5B21B6" textAnchor="middle">2²</text>
        <text x="70" y="15" fontSize="10" fill="#5B21B6" textAnchor="middle">2³</text>
        <text x="100" y="15" fontSize="10" fill="#5B21B6" textAnchor="middle">2⁴</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Hatványok Világa",
    t1_title: "Mi az a hatvány?",
    t1_text: "A hatványozás az azonos számok szorzásának rövidített írásmódja. Az alap mutatja meg, mit szorzunk, a kitevő pedig azt, hogy hányszor.",
    t1_b1: "Az alap a tényező, amit szorzunk",
    t1_b2: "A kitevő a szorzások száma",
    t1_b3: "Bármely szám az első hatványon önmaga",
    t1_inst: "Számold ki: 3 a négyzeten (3²). Mekkora az értéke?",
    t1_h1: "Ez annyit jelent: 3 · 3.",
    t1_h2: "Húzd az eredményt 9-re.",
    t1_q: "Mennyi 2 a negyediken (2⁴)?",
    t1_q_a: "8", t1_q_b: "16", t1_q_c: "32", t1_q_d: "12",
    t2_title: "A 10 hatványai",
    t2_text: "A 10 hatványai nagyon egyszerűek: a kitevő pontosan megmutatja, hány nulla áll az 1-es után! Ezt használjuk a nagyon nagy számok leírására.",
    t2_b1: "10² = 100 (2 nulla)",
    t2_b2: "10³ = 1000 (3 nulla)",
    t2_b3: "10⁶ = 1 000 000 (1 millió)",
    t2_inst: "Állítsd be a 10 a negyediken (10⁴) értékét!",
    t2_h1: "Az 1-es után 4 nullának kell lennie.",
    t2_h2: "Az eredmény 10 000.",
    t2_q: "Hány nulla van a 10 az ötödiken számban?",
    t2_q_a: "5", t2_q_b: "4", t2_q_c: "6", t2_q_d: "10",
    t3_title: "Exponenciális növekedés",
    t3_text: "A hatványozásnál a számok elképesztő sebességgel nőnek. Ezt hívjuk exponenciális növekedésnek.",
    t3_b1: "A grafikon egyre meredekebben emelkedik",
    t3_b2: "Minden lépésnél megduplázódik vagy megtriplázódik az érték",
    t3_b3: "Fontos a biológiában (sejtek osztódása) és a pénzügyekben is",
    t3_inst: "Nézd a 2 hatványainak grafikonját! Mennyi az y értéke, ha x = 5 (vagyis 2⁵)?",
    t3_h1: "Szorozd meg az előző értéket (16) kettővel.",
    t3_h2: "Koppints a 32-re.",
    t3_q: "Ha egy sejt percenként kettéosztódik, hány sejt lesz 3 perc után (kiindulás: 1 sejt)?",
    t3_q_a: "4", t3_q_b: "6", t3_q_c: "8", t3_q_d: "16",
  },
  en: {
    explorer_title: "World of Powers",
    t1_title: "What is a Power?",
    t1_text: "Exponentiation is a shorthand for repeated multiplication. The base shows what to multiply, and the exponent shows how many times.",
    t1_b1: "Base: the number being multiplied",
    t1_b2: "Exponent: number of multiplications",
    t1_b3: "Any number to the power of 1 is itself",
    t1_inst: "Calculate 3 squared (3²). What is the value?",
    t1_h1: "This means 3 · 3.",
    t1_h2: "Set the result to 9.",
    t1_q: "What is 2 to the power of 4 (2⁴)?",
    t1_q_a: "8", t1_q_b: "16", t1_q_c: "32", t1_q_d: "12",
    t2_title: "Powers of 10",
    t2_text: "Powers of 10 are easy: the exponent tells you exactly how many zeros follow the 1!",
    t2_b1: "10² = 100 (2 zeros)",
    t2_b2: "10³ = 1000 (3 zeros)",
    t2_b3: "10⁶ = 1,000,000 (1 million)",
    t2_inst: "Set the value of 10 to the power of 4 (10⁴)!",
    t2_h1: "There should be 4 zeros after the 1.",
    t2_h2: "The result is 10,000.",
    t2_q: "How many zeros are in 10 to the power of 5?",
    t2_q_a: "5", t2_q_b: "4", t2_q_c: "6", t2_q_d: "10",
    t3_title: "Exponential Growth",
    t3_text: "In exponentiation, numbers grow at an incredible speed. This is called exponential growth.",
    t3_b1: "The graph rises steeper and steeper",
    t3_b2: "The value doubles or triples at every step",
    t3_b3: "Important in biology and finance",
    t3_inst: "Look at the graph of powers of 2! What is y when x = 5 (2⁵)?",
    t3_h1: "Multiply the previous value (16) by 2.",
    t3_h2: "Tap on 32.",
    t3_q: "If a cell doubles every minute, how many cells after 3 minutes (starting with 1)?",
    t3_q_a: "4", t3_q_b: "6", t3_q_c: "8", t3_q_d: "16",
  },
  de: {
    explorer_title: "Welt der Potenzen",
    t1_title: "Was ist eine Potenz?",
    t1_text: "Potenzierung ist eine Kurzform für wiederholte Multiplikation. Die Basis zeigt, was multipliziert wird, und der Exponent zeigt, wie oft.",
    t1_b1: "Basis: die Zahl, die multipliziert wird",
    t1_b2: "Exponent: Anzahl der Multiplikationen",
    t1_b3: "Jede Zahl hoch 1 ist sich selbst",
    t1_inst: "Berechne 3 zum Quadrat (3²). Wie viel ist der Wert?",
    t1_h1: "Das bedeutet 3 · 3.",
    t1_h2: "Setze das Ergebnis auf 9.",
    t1_q: "Wie viel ist 2 hoch 4 (2⁴)?",
    t1_q_a: "8", t1_q_b: "16", t1_q_c: "32", t1_q_d: "12",
    t2_title: "Potenzen von 10",
    t2_text: "Potenzen von 10 sind einfach: der Exponent zeigt dir genau, wie viele Nullen nach der 1 folgen!",
    t2_b1: "10² = 100 (2 Nullen)",
    t2_b2: "10³ = 1000 (3 Nullen)",
    t2_b3: "10⁶ = 1 000 000 (1 Million)",
    t2_inst: "Stelle den Wert von 10 hoch 4 (10⁴) ein!",
    t2_h1: "Nach der 1 sollten 4 Nullen sein.",
    t2_h2: "Das Ergebnis ist 10.000.",
    t2_q: "Wie viele Nullen hat 10 hoch 5?",
    t2_q_a: "5", t2_q_b: "4", t2_q_c: "6", t2_q_d: "10",
    t3_title: "Exponentielles Wachstum",
    t3_text: "Bei Potenzen wachsen Zahlen unglaublich schnell. Das nennt man exponentielles Wachstum.",
    t3_b1: "Der Graph wird immer steiler",
    t3_b2: "Der Wert verdoppelt oder verdreifacht sich bei jedem Schritt",
    t3_b3: "Wichtig in Biologie und Finanzen",
    t3_inst: "Schau auf den Graphen der Potenzen von 2! Wie viel ist y, wenn x = 5 (2⁵)?",
    t3_h1: "Multipliziere den vorherigen Wert (16) mit 2.",
    t3_h2: "Tippe auf 32.",
    t3_q: "Wenn sich eine Zelle jede Minute teilt, wie viele Zellen nach 3 Minuten (Start: 1 Zelle)?",
    t3_q_a: "4", t3_q_b: "6", t3_q_c: "8", t3_q_d: "16",
  },
  ro: {
    explorer_title: "Lumea Puterilor",
    t1_title: "Ce este o Putere?",
    t1_text: "Exponenționarea este o notație scurtă pentru înmulțire repetată. Baza arată ce se înmulțește, iar exponentul arată de câte ori.",
    t1_b1: "Baza: numărul care se înmulțește",
    t1_b2: "Exponentul: numărul de înmulțiri",
    t1_b3: "Orice număr la puterea 1 este el însuși",
    t1_inst: "Calculează 3 la pătrat (3²). Care este valoarea?",
    t1_h1: "Aceasta înseamnă 3 · 3.",
    t1_h2: "Setează rezultatul la 9.",
    t1_q: "Cât este 2 la puterea 4 (2⁴)?",
    t1_q_a: "8", t1_q_b: "16", t1_q_c: "32", t1_q_d: "12",
    t2_title: "Puteri ale lui 10",
    t2_text: "Puterile lui 10 sunt ușoare: exponentul îți spune exact câte zerouri urmează după 1!",
    t2_b1: "10² = 100 (2 zerouri)",
    t2_b2: "10³ = 1000 (3 zerouri)",
    t2_b3: "10⁶ = 1.000.000 (1 milion)",
    t2_inst: "Setează valoarea 10 la puterea 4 (10⁴)!",
    t2_h1: "Trebuie să fie 4 zerouri după 1.",
    t2_h2: "Rezultatul este 10.000.",
    t2_q: "Câte zerouri are 10 la puterea 5?",
    t2_q_a: "5", t2_q_b: "4", t2_q_c: "6", t2_q_d: "10",
    t3_title: "Creștere Exponențială",
    t3_text: "La exponențiere, numerele cresc cu o viteză incredibilă. Aceasta se numește creștere exponențială.",
    t3_b1: "Graficul se face din ce în ce mai abrupt",
    t3_b2: "Valoarea se dublează sau se triplează la fiecare pas",
    t3_b3: "Important în biologie și finanțe",
    t3_inst: "Privește graficul puterilor lui 2! Cât este y când x = 5 (2⁵)?",
    t3_h1: "Înmulțește valoarea anterioară (16) cu 2.",
    t3_h2: "Apasă pe 32.",
    t3_q: "Dacă o celulă se împarte la fiecare minut, câte celule după 3 minute (pornind cu 1)?",
    t3_q_a: "4", t3_q_b: "6", t3_q_c: "8", t3_q_d: "16",
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
      equation: "3² = x",
      steps: [
        { instruction: "t1_inst", choices: [6, 9, 27, 3], answer: 9, equation: "x = 9" }
      ],
      finalAnswer: 9,
      variable: "x",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_b",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "ratio-slider",
      baseValue: 1,
      basePrice: 10,
      targetValue: 4,
      targetPrice: 10000,
      unitName: "n",
      currency: "10ⁿ",
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
      type: "graph-plotter",
      points: [
        { x: 1, y: 2 },
        { x: 2, y: 4 },
        { x: 3, y: 8 },
        { x: 4, y: 16 }
      ],
      targetX: 5,
      targetY: 32,
      chartType: "line",
      xLabel: "n",
      yLabel: "2ⁿ",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_c",
    },
  },
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "⚡",
  topics: TOPICS,
  rounds: [],
};

const PowerExplorer7 = memo(function PowerExplorer7({
  color = "#4F46E5",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="math_g7_powers" color={color} lang={lang} onDone={onDone} />;
});

export default PowerExplorer7;
