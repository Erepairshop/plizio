"use client";
// FractionExplorer5 — Fractions for Grade 5 (island i4)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="fracGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#fracGrad1)" rx="16" />
      {/* Equivalent Fractions: 1/2 = 2/4 */}
      <g transform="translate(40, 40)">
        {/* 1/2 */}
        <rect x="0" y="0" width="60" height="20" fill="#CCFBF1" stroke="#0D9488" strokeWidth="2" />
        <rect x="0" y="0" width="30" height="20" fill="#0D9488" />
        <text x="30" y="-10" fontSize="12" fontWeight="bold" fill="#0D9488" textAnchor="middle">1/2</text>
        
        <text x="80" y="15" fontSize="16" fontWeight="bold" fill="#0F766E" textAnchor="middle">=</text>
        
        {/* 2/4 */}
        <rect x="100" y="0" width="60" height="20" fill="#CCFBF1" stroke="#0D9488" strokeWidth="2" />
        <rect x="100" y="0" width="15" height="20" fill="#0D9488" />
        <rect x="115" y="0" width="15" height="20" fill="#0D9488" stroke="#CCFBF1" strokeWidth="1" />
        <line x1="115" y1="0" x2="115" y2="20" stroke="#0F766E" strokeWidth="2" />
        <line x1="130" y1="0" x2="130" y2="20" stroke="#0F766E" strokeWidth="2" />
        <line x1="145" y1="0" x2="145" y2="20" stroke="#0F766E" strokeWidth="2" />
        <text x="130" y="-10" fontSize="12" fontWeight="bold" fill="#0D9488" textAnchor="middle">2/4</text>
      </g>
      <text x="120" y="110" fontSize="14" fontWeight="bold" fill="#0F766E" textAnchor="middle">Ugyanaz a mennyiség!</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="fracGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FDBA74" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#fracGrad2)" rx="16" />
      {/* Adding fractions: 1/5 + 2/5 = 3/5 */}
      <g transform="translate(30, 60)">
        <text x="10" y="0" fontSize="16" fontWeight="bold" fill="#C2410C" textAnchor="middle">1/5</text>
        <text x="50" y="0" fontSize="16" fontWeight="bold" fill="#C2410C" textAnchor="middle">+</text>
        <text x="90" y="0" fontSize="16" fontWeight="bold" fill="#C2410C" textAnchor="middle">2/5</text>
        <text x="130" y="0" fontSize="16" fontWeight="bold" fill="#C2410C" textAnchor="middle">=</text>
        <text x="170" y="0" fontSize="20" fontWeight="900" fill="#9A3412" textAnchor="middle">3/5</text>
        
        <path d="M 0,15 L 20,15 M 80,15 L 100,15 M 160,15 L 180,15" stroke="#C2410C" strokeWidth="2" opacity="0.5" />
        <text x="90" y="35" fontSize="12" fill="#C2410C" textAnchor="middle">A nevező marad!</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="fracGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#fracGrad3)" rx="16" />
      {/* Mixed Numbers: 1 1/2 */}
      <g transform="translate(80, 50)">
        <circle cx="0" cy="0" r="20" fill="#7C3AED" opacity="0.8" />
        <circle cx="50" cy="0" r="20" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="2" />
        <path d="M 50,-20 A 20,20 0 0,0 50,20 L 50,0 Z" fill="#7C3AED" opacity="0.8" />
        
        <text x="-40" y="5" fontSize="16" fontWeight="bold" fill="#5B21B6">1</text>
        <text x="85" y="5" fontSize="16" fontWeight="bold" fill="#5B21B6">1/2</text>
        <text x="25" y="45" fontSize="18" fontWeight="900" fill="#4C1D95" textAnchor="middle">1 1/2 = 3/2</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Fractions Explorer",
    t1_title: "Equivalent Fractions",
    t1_text: "Fractions can look different but have the same value! 1/2 is exactly the same amount as 2/4 or 4/8.",
    t1_b1: "Multiply top and bottom by the same number",
    t1_b2: "They represent the same part of a whole",
    t1_b3: "Simplifying means dividing them back",
    t1_inst: "Use the slider! If 1 part out of 2 is colored, how many out of 8 is that?",
    t1_h1: "Multiply the numerator (1) and denominator (2) by 4.",
    t1_h2: "1 x 4 = 4. Set the slider to 4.",
    t1_q: "Which fraction is equivalent to 1/3?",
    t1_q_a: "2/6",
    t1_q_b: "3/8",
    t1_q_c: "1/4",
    t1_q_d: "4/9",
    t2_title: "Adding Fractions",
    t2_text: "When fractions have the same bottom number (denominator), you just add the top numbers (numerators). The bottom stays the same!",
    t2_b1: "Only add the numerators (top)",
    t2_b2: "Keep the denominator (bottom) the same",
    t2_b3: "1/4 + 2/4 = 3/4",
    t2_inst: "Combine blocks to add: 1/4 + 2/4. How many fourths do you have?",
    t2_h1: "You have one block of 1/4 and two more blocks of 1/4.",
    t2_h2: "1 + 2 = 3. Drag three blocks to the center.",
    t2_q: "What is 2/7 + 3/7?",
    t2_q_a: "5/14",
    t2_q_b: "5/7",
    t2_q_c: "6/7",
    t2_q_d: "1/7",
    t3_title: "Mixed Numbers",
    t3_text: "A mixed number has a whole number and a fraction, like 1 ½. It means you have one full pizza and half of another!",
    t3_b1: "Whole number + Fraction",
    t3_b2: "Can be written as an improper fraction",
    t3_b3: "1 ½ is the same as 3/2",
    t3_inst: "Find the number 1.5 (which is 1 ½) on the number line!",
    t3_h1: "Look halfway between 1 and 2.",
    t3_h2: "Tap the mark at 1.5.",
    t3_q: "Which improper fraction is equal to 1 ¼?",
    t3_q_a: "3/4",
    t3_q_b: "5/4",
    t3_q_c: "6/4",
    t3_q_d: "2/4",
  },
  de: {
    explorer_title: "Brüche Entdecker",
    t1_title: "Gleichwertige Brüche",
    t1_text: "Brüche können unterschiedlich aussehen, aber denselben Wert haben! 1/2 ist genau so viel wie 2/4 oder 4/8.",
    t1_b1: "Zähler und Nenner mit derselben Zahl multiplizieren",
    t1_b2: "Sie stellen denselben Teil eines Ganzen dar",
    t1_b3: "Kürzen bedeutet, sie wieder zu teilen",
    t1_inst: "Nutze den Regler! Wenn 1 von 2 Teilen gefärbt ist, wie viele von 8 sind das?",
    t1_h1: "Multipliziere Zähler (1) und Nenner (2) mit 4.",
    t1_h2: "1 x 4 = 4. Stelle den Regler auf 4.",
    t1_q: "Welcher Bruch ist gleichwertig mit 1/3?",
    t1_q_a: "2/6",
    t1_q_b: "3/8",
    t1_q_c: "1/4",
    t1_q_d: "4/9",
    t2_title: "Brüche addieren",
    t2_text: "Wenn Brüche denselben Nenner (unten) haben, addierst du einfach die Zähler (oben). Der Nenner bleibt gleich!",
    t2_b1: "Nur die Zähler (oben) addieren",
    t2_b2: "Der Nenner (unten) bleibt gleich",
    t2_b3: "1/4 + 2/4 = 3/4",
    t2_inst: "Kombiniere Blöcke: 1/4 + 2/4. Wie viele Viertel hast du?",
    t2_h1: "Du hast einen 1/4-Block und noch zwei weitere 1/4-Blöcke.",
    t2_h2: "1 + 2 = 3. Ziehe drei Blöcke in die Mitte.",
    t2_q: "Was ist 2/7 + 3/7?",
    t2_q_a: "5/14",
    t2_q_b: "5/7",
    t2_q_c: "6/7",
    t2_q_d: "1/7",
    t3_title: "Gemischte Zahlen",
    t3_text: "Eine gemischte Zahl besteht aus einer ganzen Zahl und einem Bruch, wie 1 ½. Das bedeutet eine ganze Pizza und noch eine halbe!",
    t3_b1: "Ganze Zahl + Bruch",
    t3_b2: "Kann als unechter Bruch geschrieben werden",
    t3_b3: "1 ½ ist das Gleiche wie 3/2",
    t3_inst: "Finde die Zahl 1.5 (was 1 ½ ist) auf dem Zahlenstrahl!",
    t3_h1: "Suche genau in der Mitte zwischen 1 und 2.",
    t3_h2: "Tippe auf die Markierung bei 1.5.",
    t3_q: "Welcher unechte Bruch entspricht 1 ¼?",
    t3_q_a: "3/4",
    t3_q_b: "5/4",
    t3_q_c: "6/4",
    t3_q_d: "2/4",
  },
  hu: {
    explorer_title: "Törtek felfedezése",
    t1_title: "Egyenértékű törtek",
    t1_text: "A törtek kinézhetnek máshogy, mégis érhetik ugyanazt! Az 1/2 pontosan ugyanannyi, mint a 2/4 vagy a 4/8.",
    t1_b1: "Szorozd a számlálót és a nevezőt ugyanazzal a számmal",
    t1_b2: "Ugyanazt a mennyiséget jelölik",
    t1_b3: "Az egyszerűsítés ennek a fordítottja (osztás)",
    t1_inst: "Használd a csúszkát! Ha 2 részből 1 van színezve, az 8 rész esetén mennyi?",
    t1_h1: "Szorozd meg a számlálót (1) és a nevezőt (2) is 4-gyel.",
    t1_h2: "1 × 4 = 4. Állítsd a csúszkát 4-re.",
    t1_q: "Melyik tört egyenértékű az 1/3-dal?",
    t1_q_a: "2/6",
    t1_q_b: "3/8",
    t1_q_c: "1/4",
    t1_q_d: "4/9",
    t2_title: "Törtek összeadása",
    t2_text: "Ha a törtek nevezője (alsó szám) azonos, csak a számlálókat (felső szám) kell összeadnod. A nevező marad ugyanaz!",
    t2_b1: "Csak a felső számokat (számláló) add össze",
    t2_b2: "Az alsó szám (nevező) változatlan marad",
    t2_b3: "1/4 + 2/4 = 3/4",
    t2_inst: "Vond össze a blokkokat: 1/4 + 2/4. Hány negyeded van?",
    t2_h1: "Van egy 1/4-es blokkod, és még kettő 1/4-es.",
    t2_h2: "1 + 2 = 3. Húzz be három blokkot.",
    t2_q: "Mennyi 2/7 + 3/7?",
    t2_q_a: "5/14",
    t2_q_b: "5/7",
    t2_q_c: "6/7",
    t2_q_d: "1/7",
    t3_title: "Vegyes számok",
    t3_text: "A vegyes szám egy egészből és egy törtből áll, mint például az 1 ½. Ez egy egész pizzát és egy felet jelent!",
    t3_b1: "Egész szám + Tört",
    t3_b2: "Átírható áltörtté is (ahol a felső szám nagyobb)",
    t3_b3: "Az 1 ½ ugyanaz, mint a 3/2",
    t3_inst: "Keresd meg az 1,5-öt (vagyis 1 ½-et) a számegyenesen!",
    t3_h1: "Keresd az 1 és a 2 között pontosan félúton.",
    t3_h2: "Koppints az 1,5 jelzésre.",
    t3_q: "Melyik áltört egyenlő 1 ¼-del?",
    t3_q_a: "3/4",
    t3_q_b: "5/4",
    t3_q_c: "6/4",
    t3_q_d: "2/4",
  },
  ro: {
    explorer_title: "Explorator Fracții",
    t1_title: "Fracții Echivalente",
    t1_text: "Fracțiile pot arăta diferit, dar au aceeași valoare! 1/2 înseamnă exact la fel ca 2/4 sau 4/8.",
    t1_b1: "Înmulțește numărătorul și numitorul cu același număr",
    t1_b2: "Ele reprezintă aceeași parte dintr-un întreg",
    t1_b3: "Simplificarea înseamnă să le împarți înapoi",
    t1_inst: "Dacă 1 parte din 2 este colorată, câte din 8 reprezintă același lucru?",
    t1_h1: "Înmulțește numărătorul (1) și numitorul (2) cu 4.",
    t1_h2: "1 × 4 = 4. Setează cursorul la 4.",
    t1_q: "Care fracție este echivalentă cu 1/3?",
    t1_q_a: "2/6",
    t1_q_b: "3/8",
    t1_q_c: "1/4",
    t1_q_d: "4/9",
    t2_title: "Adunarea Fracțiilor",
    t2_text: "Când fracțiile au același numitor (numărul de jos), pur și simplu aduni numărătorii (numerele de sus). Numitorul rămâne la fel!",
    t2_b1: "Adună doar numărătorii (sus)",
    t2_b2: "Păstrează același numitor (jos)",
    t2_b3: "1/4 + 2/4 = 3/4",
    t2_inst: "Combină blocurile: 1/4 + 2/4. Câte pătrimi ai în total?",
    t2_h1: "Ai un bloc de 1/4 și încă două blocuri de 1/4.",
    t2_h2: "1 + 2 = 3. Trage trei blocuri în centru.",
    t2_q: "Cât fac 2/7 + 3/7?",
    t2_q_a: "5/14",
    t2_q_b: "5/7",
    t2_q_c: "6/7",
    t2_q_d: "1/7",
    t3_title: "Numere Mixte",
    t3_text: "Un număr mixt are un număr întreg și o fracție, cum ar fi 1 ½. Asta înseamnă o pizza întreagă și încă jumătate!",
    t3_b1: "Număr întreg + Fracție",
    t3_b2: "Poate fi scris ca o fracție supraunitară",
    t3_b3: "1 ½ este la fel cu 3/2",
    t3_inst: "Găsește numărul 1.5 (adică 1 ½) pe linia numerelor!",
    t3_h1: "Caută exact la jumătatea distanței dintre 1 și 2.",
    t3_h2: "Atinge marcajul de la 1.5.",
    t3_q: "Ce fracție supraunitară este egală cu 1 ¼?",
    t3_q_a: "3/4",
    t3_q_b: "5/4",
    t3_q_c: "6/4",
    t3_q_d: "2/4",
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
      type: "ratio-slider",
      baseValue: 2,   // Base denominator
      basePrice: 1,   // Base numerator
      targetValue: 8, // Target denominator
      targetPrice: 4, // Target numerator (1/2 = 4/8)
      unitName: "parts",
      currency: "colored",
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
      type: "block-drag",
      mode: "combine",
      groups: [1, 1, 1], // Represents 1/4 each, user needs 3 to make 3/4
      answer: 3,
      blockIcon: "🍕",
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
      type: "number-line",
      min: 0,
      max: 3,
      start: 0,
      target: 1.5,
      step: 0.5,
      showJumps: true,
      jumpCount: 3,
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
  icon: "🍰",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const FractionExplorer5 = memo(function FractionExplorer5({
  color = "#14B8A6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={5} explorerId="math_g5_fractions" color={color} lang={lang} onDone={onDone} />;
});

export default FractionExplorer5;
