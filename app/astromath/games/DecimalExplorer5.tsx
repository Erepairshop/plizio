"use client";
// DecimalExplorer5 — Decimals for Grade 5 (island i5)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="decGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#decGrad1)" rx="16" />
      {/* 10x10 Grid for Hundredths */}
      <g transform="translate(60, 20)">
        <rect width="100" height="100" fill="white" stroke="#0284C7" strokeWidth="2" />
        {/* Draw 10 columns */}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`c${i}`} x1={(i + 1) * 10} y1="0" x2={(i + 1) * 10} y2="100" stroke="#BAE6FD" strokeWidth="1" />
        ))}
        {/* Draw 10 rows */}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`r${i}`} x1="0" y1={(i + 1) * 10} x2="100" y2={(i + 1) * 10} stroke="#BAE6FD" strokeWidth="1" />
        ))}
        {/* Fill 45 squares (4 full columns + 5 squares) */}
        <rect x="0" y="0" width="40" height="100" fill="#0EA5E9" opacity="0.6" />
        <rect x="40" y="0" width="10" height="50" fill="#0EA5E9" opacity="0.6" />
        
        <text x="-25" y="55" fontSize="16" fontWeight="bold" fill="#0369A1">0.45</text>
        <path d="M -5,50 L 35,50" stroke="#0369A1" strokeWidth="2" markerEnd="url(#arrow)" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="decGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#decGrad2)" rx="16" />
      {/* Comparing 0.5 and 0.45 */}
      <g transform="translate(120, 70)">
        <text x="-50" y="-10" fontSize="24" fontWeight="bold" fill="#B45309" textAnchor="middle">0.50</text>
        <text x="0" y="-10" fontSize="24" fontWeight="bold" fill="#B45309" textAnchor="middle">&gt;</text>
        <text x="50" y="-10" fontSize="24" fontWeight="bold" fill="#B45309" textAnchor="middle">0.45</text>
        
        <text x="-50" y="25" fontSize="12" fill="#D97706" textAnchor="middle">50 század</text>
        <text x="50" y="25" fontSize="12" fill="#D97706" textAnchor="middle">45 század</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="decGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#decGrad3)" rx="16" />
      {/* Aligning the decimal points */}
      <g transform="translate(100, 40)">
        <text x="-30" y="20" fontSize="20" fontWeight="bold" fill="#047857">+</text>
        <text x="40" y="0" fontSize="20" fontWeight="bold" fill="#065F46" textAnchor="end" letterSpacing="4">12.50</text>
        <text x="40" y="25" fontSize="20" fontWeight="bold" fill="#065F46" textAnchor="end" letterSpacing="4">3.45</text>
        <line x1="-35" y1="35" x2="45" y2="35" stroke="#047857" strokeWidth="2" />
        <text x="40" y="55" fontSize="20" fontWeight="900" fill="#059669" textAnchor="end" letterSpacing="4">15.95</text>
        
        {/* Highlight decimal point */}
        <rect x="12" y="-15" width="6" height="75" fill="#34D399" opacity="0.3" rx="3" />
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Decimals Explorer",
    t1_title: "Tenths & Hundredths",
    t1_text: "Decimals are just another way to write fractions! The first digit after the dot is tenths, and the second is hundredths. 0.45 means 45 out of 100.",
    t1_b1: "0.1 is one tenth (1/10)",
    t1_b2: "0.01 is one hundredth (1/100)",
    t1_b3: "10 hundredths make 1 tenth",
    t1_inst: "Find 0.75 on the number line! It is exactly between 0.70 and 0.80.",
    t1_h1: "Look past 0.7.",
    t1_h2: "Tap the mark exactly halfway between 0.7 and 0.8.",
    t1_q: "What fraction is the same as 0.25?",
    t1_q_a: "1/4",
    t1_q_b: "1/2",
    t1_q_c: "2/5",
    t1_q_d: "1/5",
    t2_title: "Comparing Decimals",
    t2_text: "Be careful! 0.5 is bigger than 0.45. To compare them easily, add a zero to the end: compare 0.50 with 0.45.",
    t2_b1: "Zeros at the end don't change the value",
    t2_b2: "0.5 is the same as 0.50",
    t2_b3: "Compare tenths first, then hundredths",
    t2_inst: "Balance the scale! The left is 0.50. The right is 0.25. Add weights to balance it!",
    t2_h1: "You need to add 0.25 to the right side.",
    t2_h2: "Combine 25 parts to make it 50.",
    t2_q: "Which decimal is the largest?",
    t2_q_a: "0.9",
    t2_q_b: "0.89",
    t2_q_c: "0.09",
    t2_q_d: "0.99",
    t3_title: "Adding Decimals",
    t3_text: "Adding decimals is like adding money. The most important rule is to ALWAYS line up the decimal dots vertically!",
    t3_b1: "Line up the dots",
    t3_b2: "Fill empty spaces with zeros",
    t3_b3: "Add normally from right to left",
    t3_inst: "Combine blocks to add 1.2 + 0.3! How many tenths do you have in total?",
    t3_h1: "1.2 means 12 tenths. 0.3 means 3 tenths.",
    t3_h2: "12 + 3 = 15 tenths (which is 1.5). Drag 15 blocks.",
    t3_q: "What is 2.5 + 1.25?",
    t3_q_a: "3.75",
    t3_q_b: "3.30",
    t3_q_c: "2.75",
    t3_q_d: "1.50",
  },
  de: {
    explorer_title: "Dezimalzahlen Entdecker",
    t1_title: "Zehntel & Hundertstel",
    t1_text: "Dezimalzahlen sind eine andere Art, Brüche zu schreiben! Die erste Ziffer nach dem Komma sind Zehntel, die zweite Hundertstel. 0.45 bedeutet 45 von 100.",
    t1_b1: "0.1 ist ein Zehntel (1/10)",
    t1_b2: "0.01 ist ein Hundertstel (1/100)",
    t1_b3: "10 Hundertstel ergeben 1 Zehntel",
    t1_inst: "Finde 0.75 auf dem Zahlenstrahl! Es liegt genau zwischen 0.70 und 0.80.",
    t1_h1: "Suche nach der 0.7.",
    t1_h2: "Tippe auf die Mitte zwischen 0.7 und 0.8.",
    t1_q: "Welcher Bruch entspricht 0.25?",
    t1_q_a: "1/4",
    t1_q_b: "1/2",
    t1_q_c: "2/5",
    t1_q_d: "1/5",
    t2_title: "Dezimalzahlen vergleichen",
    t2_text: "Achtung! 0.5 ist größer als 0.45. Hänge einfach eine Null an, um sie besser zu vergleichen: 0.50 vs 0.45.",
    t2_b1: "Nullen am Ende ändern den Wert nicht",
    t2_b2: "0.5 ist das Gleiche wie 0.50",
    t2_b3: "Vergleiche zuerst Zehntel, dann Hundertstel",
    t2_inst: "Gleiche die Waage aus! Links sind 0.50, rechts 0.25.",
    t2_h1: "Du musst 0.25 auf der rechten Seite hinzufügen.",
    t2_h2: "Füge 25 Teile hinzu, um 50 zu erreichen.",
    t2_q: "Welche Dezimalzahl ist am größten?",
    t2_q_a: "0.9",
    t2_q_b: "0.89",
    t2_q_c: "0.09",
    t2_q_d: "0.99",
    t3_title: "Dezimalzahlen addieren",
    t3_text: "Die wichtigste Regel beim Addieren von Dezimalzahlen: Schreibe das Komma IMMER genau unter das Komma!",
    t3_b1: "Komma unter Komma schreiben",
    t3_b2: "Leere Stellen mit Nullen auffüllen",
    t3_b3: "Wie gewohnt von rechts nach links addieren",
    t3_inst: "Kombiniere Blöcke für 1.2 + 0.3! Wie viele Zehntel hast du insgesamt?",
    t3_h1: "1.2 bedeutet 12 Zehntel. 0.3 bedeutet 3 Zehntel.",
    t3_h2: "12 + 3 = 15 Zehntel (also 1.5). Ziehe 15 Blöcke.",
    t3_q: "Was ist 2.5 + 1.25?",
    t3_q_a: "3.75",
    t3_q_b: "3.30",
    t3_q_c: "2.75",
    t3_q_d: "1.50",
  },
  hu: {
    explorer_title: "Tizedes számok",
    t1_title: "Tizedek és századok",
    t1_text: "A tizedestörtek a törtek egy másik írásmódja. A pont utáni első szám a tized, a második a század. A 0,45 azt jelenti: 45 a 100-ból.",
    t1_b1: "A 0,1 egy tizedet jelent (1/10)",
    t1_b2: "A 0,01 egy századot jelent (1/100)",
    t1_b3: "10 század egyenlő 1 tizeddel",
    t1_inst: "Keresd meg a 0,75-öt a számegyenesen! Pontosan a 0,70 és a 0,80 között van.",
    t1_h1: "Keress a 0,7 után.",
    t1_h2: "Koppints pontosan a 0,7 és a 0,8 közé.",
    t1_q: "Melyik tört egyenlő a 0,25-tel?",
    t1_q_a: "1/4",
    t1_q_b: "1/2",
    t1_q_c: "2/5",
    t1_q_d: "1/5",
    t2_title: "Tizedestörtek összehasonlítása",
    t2_text: "Vigyázz! A 0,5 nagyobb, mint a 0,45. Hogy könnyebb legyen összehasonlítani, írj a végére egy nullát: 0,50 és 0,45.",
    t2_b1: "A végére írt nullák nem változtatják meg az értéket",
    t2_b2: "A 0,5 pontosan ugyanannyi, mint a 0,50",
    t2_b3: "Először a tizedeket nézd, aztán a századokat",
    t2_inst: "Egyenlítsd ki a mérleget! A bal oldal 50 (0,50). A jobb oldal 25 (0,25).",
    t2_h1: "Még 25-öt kell hozzáadnod a jobb oldalhoz.",
    t2_h2: "Adj hozzá 25-öt, hogy a jobb oldal is 50 legyen.",
    t2_q: "Melyik tizedes szám a legnagyobb?",
    t2_q_a: "0,9",
    t2_q_b: "0,89",
    t2_q_c: "0,09",
    t2_q_d: "0,99",
    t3_title: "Tizedes számok összeadása",
    t3_text: "A legfontosabb szabály: írásbeli összeadásnál a tizedesvessző MINDIG pontosan a tizedesvessző alá kerüljön!",
    t3_b1: "Vessző a vessző alá",
    t3_b2: "Az üres helyeket töltsd fel nullával",
    t3_b3: "Számolj ugyanúgy jobbról balra",
    t3_inst: "Vond össze a blokkokat: 1,2 + 0,3. Hány tizeded van összesen?",
    t3_h1: "Az 1,2 az 12 tized. A 0,3 az 3 tized.",
    t3_h2: "12 + 3 = 15 tized (vagyis 1,5). Húzz be 15 blokkot.",
    t3_q: "Mennyi 2,5 + 1,25?",
    t3_q_a: "3,75",
    t3_q_b: "3,30",
    t3_q_c: "2,75",
    t3_q_d: "1,50",
  },
  ro: {
    explorer_title: "Numere Zecimale",
    t1_title: "Zecimi și Sutimi",
    t1_text: "Zecimalele sunt o altă modalitate de a scrie fracțiile. Prima cifră după punct reprezintă zecimile, a doua sutimile. 0.45 înseamnă 45 din 100.",
    t1_b1: "0.1 este o zecime (1/10)",
    t1_b2: "0.01 este o sutime (1/100)",
    t1_b3: "10 sutimi formează 1 zecime",
    t1_inst: "Găsește 0.75 pe linia numerelor! Este exact între 0.70 și 0.80.",
    t1_h1: "Caută după 0.7.",
    t1_h2: "Atinge marcajul de la jumătatea distanței dintre 0.7 și 0.8.",
    t1_q: "Ce fracție este egală cu 0.25?",
    t1_q_a: "1/4",
    t1_q_b: "1/2",
    t1_q_c: "2/5",
    t1_q_d: "1/5",
    t2_title: "Compararea Zecimalelor",
    t2_text: "Fii atent! 0.5 este mai mare decât 0.45. Pentru a le compara ușor, adaugă un zero la final: compară 0.50 cu 0.45.",
    t2_b1: "Zerourile de la final nu schimbă valoarea",
    t2_b2: "0.5 este exact același lucru cu 0.50",
    t2_b3: "Compară mai întâi zecimile, apoi sutimile",
    t2_inst: "Echilibrează balanța! Stânga este 50 (0.50). Dreapta este 25 (0.25).",
    t2_h1: "Trebuie să adaugi 25 pe partea dreaptă.",
    t2_h2: "Adaugă greutăți până ajungi la 50.",
    t2_q: "Care număr zecimal este cel mai mare?",
    t2_q_a: "0.9",
    t2_q_b: "0.89",
    t2_q_c: "0.09",
    t2_q_d: "0.99",
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
      type: "number-line",
      min: 0,
      max: 100, // Representing 0.00 to 1.00 as whole numbers for easier engine handling
      start: 0,
      target: 75,
      step: 5,
      showJumps: true,
      jumpCount: 15,
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
      type: "balance-scale",
      leftWeight: 50, // representing 0.50
      rightInitial: 25, // representing 0.25
      unitIcon: "",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_d", // 0.99
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
      groups: [5, 5, 5], // 15 blocks total to represent 1.5 (15 tenths)
      answer: 15,
      blockIcon: "🟦",
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
  icon: "🧮",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const DecimalExplorer5 = memo(function DecimalExplorer5({
  color = "#0EA5E9",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={5} explorerId="math_g5_decimals" color={color} lang={lang} onDone={onDone} />;
});

export default DecimalExplorer5;
