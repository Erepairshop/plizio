"use client";
// FractionsExplorer4 — Basic fractions for Grade 4 (island i4)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="fracGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FB923C" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F87171" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#fracGrad1)" rx="16" />
      {/* Circle divided into 4 parts, 1 shaded */}
      <g transform="translate(120, 70)">
        <circle r="40" fill="none" stroke="#FB923C" strokeWidth="2" />
        <path d="M 0,0 L 40,0 A 40,40 0 0 1 0,40 Z" fill="#FB923C" opacity="0.6" />
        <line x1="-40" y1="0" x2="40" y2="0" stroke="#FB923C" strokeWidth="1" />
        <line x1="0" y1="-40" x2="0" y2="40" stroke="#FB923C" strokeWidth="1" />
      </g>
      <text x="120" y="125" fontSize="14" fontWeight="bold" fill="#C2410C" textAnchor="middle">1 / 4</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="fracGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#818CF8" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#fracGrad2)" rx="16" />
      {/* Rectangle divided into 3 parts, 2 shaded */}
      <g transform="translate(70, 45)">
        <rect width="100" height="50" fill="none" stroke="#0891B2" strokeWidth="2" />
        <rect width="33.3" height="50" fill="#0891B2" opacity="0.5" />
        <rect x="33.3" width="33.3" height="50" fill="#0891B2" opacity="0.5" />
        <line x1="33.3" y1="0" x2="33.3" y2="50" stroke="#0891B2" strokeWidth="1" />
        <line x1="66.6" y1="0" x2="66.6" y2="50" stroke="#0891B2" strokeWidth="1" />
      </g>
      <text x="120" y="125" fontSize="14" fontWeight="bold" fill="#0E7490" textAnchor="middle">2 / 3</text>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="fracGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ADE80" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#fracGrad3)" rx="16" />
      {/* Number line with 1/2 marked */}
      <g transform="translate(20, 70)">
        <line x1="0" y1="0" x2="200" y2="0" stroke="#059669" strokeWidth="2" />
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#059669" strokeWidth="2" />
        <line x1="200" y1="-5" x2="200" y2="5" stroke="#059669" strokeWidth="2" />
        <line x1="100" y1="-8" x2="100" y2="8" stroke="#059669" strokeWidth="2" />
        <text x="0" y="25" fontSize="12" fill="#059669" textAnchor="middle">0</text>
        <text x="100" y="25" fontSize="12" fill="#059669" fontWeight="bold" textAnchor="middle">1/2</text>
        <text x="200" y="25" fontSize="12" fill="#059669" textAnchor="middle">1</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Fractions Explorer",
    t1_title: "Parts of a Whole",
    t1_text: "A fraction tells us how many equal parts an object is divided into. The top number is the numerator, the bottom is the denominator.",
    t1_b1: "The denominator shows total parts",
    t1_b2: "The numerator shows shaded parts",
    t1_b3: "All parts must be exactly equal",
    t1_inst: "Combine 3 blocks of 1/4 to make 3/4!",
    t1_h1: "Each block represents one quarter.",
    t1_h2: "You need three blocks to reach 3/4.",
    t1_q: "In the fraction 3/8, what is the denominator?",
    t1_q_a: "3",
    t1_q_b: "8",
    t1_q_c: "11",
    t1_q_d: "5",
    t2_title: "Reading Fractions",
    t2_text: "When you see 2/3, it means you have two out of three equal pieces. It is more than half, but less than a whole!",
    t2_b1: "2/2 or 4/4 is equal to 1 whole",
    t2_b2: "Larger denominator means smaller parts",
    t2_b3: "Fractions can describe shapes or groups",
    t2_inst: "Find 1/2 on the number line!",
    t2_h1: "1/2 is exactly in the middle of 0 and 1.",
    t2_h2: "Look for the mark that splits the line in two.",
    t2_q: "Which fraction represents a whole?",
    t2_q_a: "1/2",
    t2_q_b: "4/4",
    t2_q_c: "3/4",
    t2_q_d: "1/4",
    t3_title: "Comparing Fractions",
    t3_text: "If the denominators are the same, the fraction with the larger numerator is bigger. 3/4 is more than 1/4!",
    t3_b1: "Same denominator? Compare the top",
    t3_b2: "Numerator 0 means nothing",
    t3_b3: "Fractions live between 0 and 1",
    t3_inst: "Move blocks to show 2/4 + 1/4 = 3/4!",
    t3_h1: "Start with 2 blocks and add 1 more.",
    t3_h2: "The total will be 3 blocks of 1/4.",
    t3_q: "Which fraction is the smallest?",
    t3_q_a: "3/4",
    t3_q_b: "1/4",
    t3_q_c: "2/4",
    t3_q_d: "4/4",
  },
  de: {
    explorer_title: "Bruchrechnungs-Entdecker",
    t1_title: "Teile eines Ganzen",
    t1_text: "Ein Bruch sagt uns, in wie viele gleiche Teile ein Objekt geteilt ist. Die obere Zahl ist der Zähler, die untere der Nenner.",
    t1_b1: "Der Nenner zeigt die Gesamtteile",
    t1_b2: "Der Zähler zeigt die markierten Teile",
    t1_b3: "Alle Teile müssen exakt gleich groß sein",
    t1_inst: "Kombiniere 3 Blöcke von 1/4, um 3/4 zu erhalten!",
    t1_h1: "Jeder Block stellt ein Viertel dar.",
    t1_h2: "Du brauchst drei Blöcke für 3/4.",
    t1_q: "Was ist der Nenner im Bruch 3/8?",
    t1_q_a: "3",
    t1_q_b: "8",
    t1_q_c: "11",
    t1_q_d: "5",
    t2_title: "Brüche lesen",
    t2_text: "2/3 bedeutet, dass du zwei von drei gleichen Teilen hast. Das ist mehr als die Hälfte, deaber weniger als ein Ganzes!",
    t2_b1: "2/2 oder 4/4 entspricht 1 Ganzem",
    t2_b2: "Größerer Nenner bedeutet kleinere Teile",
    t2_b3: "Brüche beschreiben Formen oder Gruppen",
    t2_inst: "Finde 1/2 auf dem Zahlenstrahl!",
    t2_h1: "1/2 liegt genau in der Mitte zwischen 0 und 1.",
    t2_h2: "Suche die Markierung, die die Linie halbiert.",
    t2_q: "Welcher Bruch entspricht einem Ganzen?",
    t2_q_a: "1/2",
    t2_q_b: "4/4",
    t2_q_c: "3/4",
    t2_q_d: "1/4",
    t3_title: "Brüche vergleichen",
    t3_text: "Wenn die Nenner gleich sind, ist der Bruch mit dem größeren Zähler größer. 3/4 ist mehr als 1/4!",
    t3_b1: "Gleicher Nenner? Vergleiche oben",
    t3_b2: "Zähler 0 bedeutet nichts",
    t3_b3: "Brüche liegen zwischen 0 und 1",
    t3_inst: "Bewege Blöcke: 2/4 + 1/4 = 3/4!",
    t3_h1: "Beginne mit 2 Blöcken und füge 1 hinzu.",
    t3_h2: "Das Ergebnis sind 3 Blöcke von 1/4.",
    t3_q: "Welcher Bruch ist am kleinsten?",
    t3_q_a: "3/4",
    t3_q_b: "1/4",
    t3_q_c: "2/4",
    t3_q_d: "4/4",
  },
  hu: {
    explorer_title: "Törtek felfedezése",
    t1_title: "Az egész részei",
    t1_text: "A tört megmutatja, hány egyenlő részre osztottunk fel egy egészet. A felső szám a számláló, az alsó a nevező.",
    t1_b1: "A nevező az összes részt mutatja",
    t1_b2: "A számláló a kiválasztott részeket",
    t1_b3: "Minden résznek pontosan egyformának kell lennie",
    t1_inst: "Vond össze a blokkokat: 3 darab 1/4-est, hogy 3/4 legyen!",
    t1_h1: "Minden blokk egy negyedet ér.",
    t1_h2: "Három darab blokkra lesz szükséged.",
    t1_q: "A 3/8-as törtben melyik szám a nevező?",
    t1_q_a: "3",
    t1_q_b: "8",
    t1_q_c: "11",
    t1_q_d: "5",
    t2_title: "Törtek értelmezése",
    t2_text: "A 2/3 azt jelenti, hogy a három egyenlő részből kettő a tiéd. Ez több, mint a fele, de kevesebb, mint egy egész!",
    t2_b1: "A 2/2 vagy 4/4 egyenlő 1 egésszel",
    t2_b2: "A nagyobb nevező kisebb részeket jelent",
    t2_b3: "A törtek alakzatokat vagy csoportokat írnak le",
    t2_inst: "Keresd meg az 1/2-et a számegyenesen!",
    t2_h1: "Az 1/2 pontosan középen van 0 és 1 között.",
    t2_h2: "Keresd azt a jelet, ami kettéosztja a vonalat.",
    t2_q: "Melyik tört ér fel egy egésszel?",
    t2_q_a: "1/2",
    t2_q_b: "4/4",
    t2_q_c: "3/4",
    t2_q_d: "1/4",
    t3_title: "Törtek összehasonlítása",
    t3_text: "Ha a nevezők megegyeznek, az a tört a nagyobb, amelyiknek a számlálója nagyobb. A 3/4 több, mint az 1/4!",
    t3_b1: "Azonos nevező? A felsőt hasonlítsd össze",
    t3_b2: "A 0 számláló semmit sem jelent",
    t3_b3: "A törtek a 0 és az 1 között laknak",
    t3_inst: "Húzz be blokkokat: 2/4 + 1/4 = 3/4!",
    t3_h1: "Kezdj 2 blokkal, majd adj hozzá még egyet.",
    t3_h2: "Összesen 3 darab 1/4-es blokkod lesz.",
    t3_q: "Melyik tört a legkisebb?",
    t3_q_a: "3/4",
    t3_q_b: "1/4",
    t3_q_c: "2/4",
    t3_q_d: "4/4",
  },
  ro: {
    explorer_title: "Explorator Fracții",
    t1_title: "Părți dintr-un întreg",
    t1_text: "O fracție ne spune în câte părți egale este împărțit un obiect. Numărul de sus este numărătorul, cel de jos este numitorul.",
    t1_b1: "Numitorul arată totalul părților",
    t1_b2: "Numărătorul arată părțile selectate",
    t1_b3: "Toate părțile trebuie să fie identice",
    t1_inst: "Combină 3 blocuri de 1/4 pentru a face 3/4!",
    t1_h1: "Fiecare bloc reprezintă un sfert.",
    t1_h2: "Ai nevoie de trei blocuri pentru 3/4.",
    t1_q: "În fracția 3/8, care este numitorul?",
    t1_q_a: "3",
    t1_q_b: "8",
    t1_q_c: "11",
    t1_q_d: "5",
    t2_title: "Citirea fracțiilor",
    t2_text: "Când vezi 2/3, înseamnă că ai două părți din trei. Este mai mult de jumătate, dar mai puțin de un întreg!",
    t2_b1: "2/2 sau 4/4 este egal cu un întreg",
    t2_b2: "Un numitor mai mare înseamnă părți mai mici",
    t2_b3: "Fracțiile descriu forme sau grupuri",
    t2_inst: "Găsește 1/2 pe linia numerelor!",
    t2_h1: "1/2 este exact la mijloc între 0 și 1.",
    t2_h2: "Caută semnul care împarte linia în două.",
    t2_q: "Care fracție reprezintă un întreg?",
    t2_q_a: "1/2",
    t2_q_b: "4/4",
    t2_q_c: "3/4",
    t2_q_d: "1/4",
    t3_title: "Compararea fracțiilor",
    t3_text: "Dacă numitorii sunt aceiași, fracția cu numărătorul mai mare este mai mare. 3/4 este mai mult decât 1/4!",
    t3_b1: "Același numitor? Compară numărul de sus",
    t3_b2: "Numărătorul 0 înseamnă nimic",
    t3_b3: "Fracțiile se află între 0 și 1",
    t3_inst: "Mută blocurile: 2/4 + 1/4 = 3/4!",
    t3_h1: "Începe cu 2 blocuri și mai adaugă unul.",
    t3_h2: "Totalul va fi de 3 blocuri de 1/4.",
    t3_q: "Care fracție este cea mai mică?",
    t3_q_a: "3/4",
    t3_q_b: "1/4",
    t3_q_c: "2/4",
    t3_q_d: "4/4",
  },
};

// ─── TOPIC DEFINÍCIÓK ────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [1, 1, 1], // Engine handle fractional parts visually
      answer: 3,
      blockIcon: "🍕",
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
      type: "number-line",
      min: 0,
      max: 100, // Normalized for precision
      start: 0,
      target: 50,
      step: 10,
      showJumps: true,
      jumpCount: 5,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_b",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [2, 1],
      answer: 3,
      blockIcon: "🍫",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_b",
    },
  },
];

// ─── EXPLORER DEFINÍCIÓ ──────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🍕",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const FractionsExplorer4 = memo(function FractionsExplorer4({
  color = "#FB923C",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="math_g4_fractions" color={color} lang={lang} onDone={onDone} />;
});

export default FractionsExplorer4;
