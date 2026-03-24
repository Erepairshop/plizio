"use client";
// LargeNumbersExplorer5 — Millions & Place Value for Grade 5 (island i1)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="lnGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#93C5FD" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#lnGrad1)" rx="16" />
      {/* Place Value Chart (Millions) */}
      <g transform="translate(15, 50)">
        {/* Millions */}
        <rect x="0" y="0" width="60" height="40" fill="#2563EB" rx="4" opacity="0.8" />
        <text x="30" y="25" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">1</text>
        <text x="30" y="-5" fontSize="10" fill="#1E40AF" fontWeight="bold" textAnchor="middle">M</text>
        
        {/* Thousands */}
        <rect x="70" y="0" width="60" height="40" fill="#3B82F6" rx="4" opacity="0.6" />
        <text x="100" y="25" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">000</text>
        <text x="100" y="-5" fontSize="10" fill="#1E40AF" fontWeight="bold" textAnchor="middle">TH</text>

        {/* Ones */}
        <rect x="140" y="0" width="60" height="40" fill="#60A5FA" rx="4" opacity="0.4" />
        <text x="170" y="25" fontSize="16" fontWeight="bold" fill="#1E3A8A" textAnchor="middle">000</text>
        <text x="170" y="-5" fontSize="10" fill="#1E40AF" fontWeight="bold" textAnchor="middle">1s</text>
      </g>
      <text x="120" y="120" fontSize="14" fontWeight="bold" fill="#1E40AF" textAnchor="middle">1 000 000</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="lnGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#lnGrad2)" rx="16" />
      {/* 1000 x 1000 = 1,000,000 Equation */}
      <g transform="translate(120, 70)">
        <text x="-60" y="5" fontSize="18" fontWeight="bold" fill="#047857" textAnchor="middle">1000</text>
        <text x="-25" y="5" fontSize="18" fill="#047857" textAnchor="middle">×</text>
        <text x="10" y="5" fontSize="18" fontWeight="bold" fill="#047857" textAnchor="middle">1000</text>
        <text x="45" y="5" fontSize="18" fill="#047857" textAnchor="middle">=</text>
        <text x="0" y="35" fontSize="20" fontWeight="900" fill="#065F46" textAnchor="middle">1 000 000</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="lnGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#lnGrad3)" rx="16" />
      {/* Rounding Large Numbers */}
      <g transform="translate(20, 70)">
        <line x1="0" y1="0" x2="200" y2="0" stroke="#B45309" strokeWidth="2" />
        <circle cx="160" cy="0" r="5" fill="#B45309" />
        <text x="160" y="-15" fontSize="12" fontWeight="bold" fill="#B45309" textAnchor="middle">2 800 000</text>
        <text x="0" y="20" fontSize="10" fill="#B45309" textAnchor="middle">2 000 000</text>
        <text x="200" y="20" fontSize="10" fill="#B45309" textAnchor="middle">3 000 000</text>
        <path d="M 160,-5 Q 180,-25 200,-5" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Large Numbers Explorer",
    t1_title: "The Millions Period",
    t1_text: "After thousands, we enter the millions! A million is a very large number, written with a 1 followed by six zeros: 1,000,000.",
    t1_b1: "1 million = 1,000,000",
    t1_b2: "Commas group numbers into threes",
    t1_b3: "The 7th digit from the right is the Million",
    t1_inst: "Combine the blocks to create 500,000!",
    t1_h1: "Each block represents 100,000.",
    t1_h2: "You need 5 blocks of 100k to reach 500k.",
    t1_q: "What number comes exactly after 999,999?",
    t1_q_a: "999,000",
    t1_q_b: "1,000,000",
    t1_q_c: "10,000,000",
    t1_q_d: "1,000",
    t2_title: "How Big is a Million?",
    t2_text: "To understand a million, think of thousands. If you have one thousand blocks, and each block is worth one thousand, you have a million!",
    t2_b1: "10 hundred thousands = 1 million",
    t2_b2: "1000 thousands = 1 million",
    t2_b3: "It's 1000 times bigger than 1000",
    t2_inst: "Balance the scale! Left is 1 Million (1000k). Add weights to balance it!",
    t2_h1: "The right side currently has 500k.",
    t2_h2: "Add 500k more (using the +500 button) to balance the 1000k.",
    t2_q: "How many thousands are in one million?",
    t2_q_a: "10",
    t2_q_b: "100",
    t2_q_c: "1000",
    t2_q_d: "10,000",
    t3_title: "Rounding Large Numbers",
    t3_text: "Rounding makes big numbers easier to read. If we round 2,800,000 to the nearest million, it becomes 3,000,000 because 8 is closer to the next million.",
    t3_b1: "Look at the digit to the right",
    t3_b2: "5 or more? Round up!",
    t3_b3: "4 or less? Round down!",
    t3_inst: "Find 2,700,000 on the number line!",
    t3_h1: "Start from 2,000,000 and count by 100,000s.",
    t3_h2: "It is 7 steps forward from 2 million.",
    t3_q: "Round 4,200,000 to the nearest million.",
    t3_q_a: "4,000,000",
    t3_q_b: "4,500,000",
    t3_q_c: "5,000,000",
    t3_q_d: "4,200,000",
  },
  de: {
    explorer_title: "Große Zahlen Entdecker",
    t1_title: "Die Millionen-Klasse",
    t1_text: "Nach den Tausendern kommen die Millionen! Eine Million ist eine sehr große Zahl, geschrieben als eine 1 mit sechs Nullen: 1.000.000.",
    t1_b1: "1 Million = 1.000.000",
    t1_b2: "Punkte gruppieren Zahlen in Dreierblöcke",
    t1_b3: "Die 7. Ziffer von rechts ist die Million",
    t1_inst: "Kombiniere die Blöcke, um 500.000 zu bilden!",
    t1_h1: "Jeder Block steht für 100.000.",
    t1_h2: "Du brauchst 5 Blöcke zu 100k für 500k.",
    t1_q: "Welche Zahl kommt genau nach 999.999?",
    t1_q_a: "999.000",
    t1_q_b: "1.000.000",
    t1_q_c: "10.000.000",
    t1_q_d: "1.000",
    t2_title: "Wie groß ist eine Million?",
    t2_text: "Denke an Tausender. Wenn du tausend Blöcke hast, und jeder Block ist tausend wert, hast du eine Million!",
    t2_b1: "10 Hunderttausender = 1 Million",
    t2_b2: "1000 Tausender = 1 Million",
    t2_b3: "Es ist 1000-mal größer als 1000",
    t2_inst: "Gleiche die Waage aus! Links ist 1 Million (1000k).",
    t2_h1: "Die rechte Seite hat derzeit 500k.",
    t2_h2: "Füge weitere 500k hinzu, um die 1000k auszugleichen.",
    t2_q: "Wie viele Tausender sind in einer Million?",
    t2_q_a: "10",
    t2_q_b: "100",
    t2_q_c: "1000",
    t2_q_d: "10.000",
    t3_title: "Große Zahlen runden",
    t3_text: "Runden macht große Zahlen übersichtlicher. 2.800.000 auf die nächste Million gerundet ist 3.000.000, weil 8 näher an der nächsten Million ist.",
    t3_b1: "Schau dir die Ziffer rechts daneben an",
    t3_b2: "Bei 5 oder mehr wird aufgerundet!",
    t3_b3: "Bei 4 oder weniger wird abgerundet!",
    t3_inst: "Finde 2.700.000 auf dem Zahlenstrahl!",
    t3_h1: "Starte bei 2.000.000 und zähle in 100.000er-Schritten.",
    t3_h2: "Es sind 7 Schritte vorwärts von 2 Millionen.",
    t3_q: "Runde 4.200.000 auf die nächste Million.",
    t3_q_a: "4.000.000",
    t3_q_b: "4.500.000",
    t3_q_c: "5.000.000",
    t3_q_d: "4.200.000",
  },
  hu: {
    explorer_title: "Nagy számok felfedezése",
    t1_title: "A milliók",
    t1_text: "Az ezresek után következnek a milliók! A millió egy nagyon nagy szám, egy 1-es és hat darab nulla: 1 000 000.",
    t1_b1: "1 millió = 1 000 000",
    t1_b2: "A számokat hármasával tagoljuk",
    t1_b3: "Jobbról a 7. számjegy a milliós",
    t1_inst: "Vond össze a blokkokat, hogy 500 000-et kapj!",
    t1_h1: "Minden blokk 100 000-et ér.",
    t1_h2: "5 darab 100e-es blokkra lesz szükséged.",
    t1_q: "Melyik szám következik pontosan a 999 999 után?",
    t1_q_a: "999 000",
    t1_q_b: "1 000 000",
    t1_q_c: "10 000 000",
    t1_q_d: "1000",
    t2_title: "Mekkora egy millió?",
    t2_text: "Hogy megértsd a milliót, gondolj az ezresekre. Ha van ezer blokkod, és mindegyik ezer ér, akkor az pontosan egy millió!",
    t2_b1: "10 százezres = 1 millió",
    t2_b2: "1000 ezres = 1 millió",
    t2_b3: "Ezerszer nagyobb, mint az ezer",
    t2_inst: "Egyenlítsd ki a mérleget! A bal oldalon 1 millió van (1000k).",
    t2_h1: "A jobb oldalon jelenleg 500k van.",
    t2_h2: "Adj hozzá még 500k-t a gombbal, hogy egyensúlyba kerüljön.",
    t2_q: "Hány ezres van egy millióban?",
    t2_q_a: "10",
    t2_q_b: "100",
    t2_q_c: "1000",
    t2_q_d: "10 000",
    t3_title: "Nagy számok kerekítése",
    t3_text: "A kerekítés megkönnyíti a nagy számok olvasását. Ha a 2 800 000-at kerekítjük milliókra, 3 000 000-t kapunk.",
    t3_b1: "Nézd meg a tőle jobbra álló számjegyet",
    t3_b2: "Ha 5 vagy több, kerekíts felfelé!",
    t3_b3: "Ha 4 vagy kevesebb, kerekíts lefelé!",
    t3_inst: "Keresd meg a 2 700 000-et a számegyenesen!",
    t3_h1: "Indulj a 2 milliótól és ugorj 100 000-esével.",
    t3_h2: "Hét lépést kell tenned előre a 2 milliótól.",
    t3_q: "Kerekítsd a 4 200 000-et a legközelebbi millióra!",
    t3_q_a: "4 000 000",
    t3_q_b: "4 500 000",
    t3_q_c: "5 000 000",
    t3_q_d: "4 200 000",
  },
  ro: {
    explorer_title: "Explorator Numere Mari",
    t1_title: "Clasa Milioanelor",
    t1_text: "După mii, intrăm în milioane! Un milion este un număr foarte mare, scris cu un 1 urmat de șase zerouri: 1.000.000.",
    t1_b1: "1 milion = 1.000.000",
    t1_b2: "Punctele grupează numerele câte trei",
    t1_b3: "A 7-a cifră din dreapta este Milionul",
    t1_inst: "Combină blocurile pentru a crea 500.000!",
    t1_h1: "Fiecare bloc reprezintă 100.000.",
    t1_h2: "Ai nevoie de 5 blocuri de 100k pentru a ajunge la 500k.",
    t1_q: "Ce număr urmează exact după 999.999?",
    t1_q_a: "999.000",
    t1_q_b: "1.000.000",
    t1_q_c: "10.000.000",
    t1_q_d: "1.000",
    t2_title: "Cât de mare este un milion?",
    t2_text: "Pentru a înțelege un milion, gândește-te la mii. Dacă ai o mie de blocuri, iar fiecare valorează o mie, ai un milion!",
    t2_b1: "10 sute de mii = 1 milion",
    t2_b2: "1000 de mii = 1 milion",
    t2_b3: "Este de 1000 de ori mai mare decât 1000",
    t2_inst: "Echilibrează balanța! În stânga este 1 Milion (1000k).",
    t2_h1: "Partea dreaptă are momentan 500k.",
    t2_h2: "Adaugă încă 500k pentru a echilibra balanța.",
    t2_q: "Câte mii sunt într-un milion?",
    t2_q_a: "10",
    t2_q_b: "100",
    t2_q_c: "1000",
    t2_q_d: "10.000",
    t3_title: "Rotunjirea numerelor mari",
    t3_text: "Rotunjirea face numerele mari mai ușor de citit. 2.800.000 rotunjit la cel mai apropiat milion devine 3.000.000.",
    t3_b1: "Uită-te la cifra din dreapta",
    t3_b2: "Dacă este 5 sau mai mult, rotunjește în sus!",
    t3_b3: "Dacă este 4 sau mai puțin, rotunjește în jos!",
    t3_inst: "Găsește 2.700.000 pe linia numerelor!",
    t3_h1: "Începe de la 2.000.000 și numără din 100.000 în 100.000.",
    t3_h2: "Este la 7 pași distanță de 2 milioane.",
    t3_q: "Rotunjește 4.200.000 la cel mai apropiat milion.",
    t3_q_a: "4.000.000",
    t3_q_b: "4.500.000",
    t3_q_c: "5.000.000",
    t3_q_d: "4.200.000",
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
      groups: [1, 1, 1, 1, 1], // Engine handles representing 100k blocks visually
      answer: 5,
      blockIcon: "🏢",
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
      // ÚJ TÍPUS: Balance Scale (Mérleg)
      type: "balance-scale",
      leftWeight: 1000,       // 1000k (1 Millió)
      rightInitial: 500,      // Kezdő súly a jobb oldalon
      unitIcon: "k",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_c",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 2000000,
      max: 3000000,
      start: 2000000,
      target: 2700000,
      step: 100000,
      showJumps: true,
      jumpCount: 7,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
];

// ─── EXPLORER DEFINÍCIÓ ──────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔢",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const LargeNumbersExplorer5 = memo(function LargeNumbersExplorer5({
  color = "#3B82F6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={5} explorerId="math_g5_largenumbers" color={color} lang={lang} onDone={onDone} />;
});

export default LargeNumbersExplorer5;
