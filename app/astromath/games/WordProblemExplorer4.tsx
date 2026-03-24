"use client";
// WordProblemsExplorer4 — Word Problems & Logic for Grade 4 (island i6)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="wpGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#D97706" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#wpGrad1)" rx="16" />
      {/* Visualizing a story: 3 baskets with 5 apples each */}
      <g transform="translate(60, 60)">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${i * 60}, 0)`}>
            <path d="M -20,0 Q -20,25 0,25 Q 20,25 20,0 L -20,0" fill="#78350F" opacity="0.6" />
            <circle cx="0" cy="-5" r="6" fill="#EF4444" />
            <circle cx="-8" cy="-12" r="6" fill="#EF4444" />
            <circle cx="8" cy="-12" r="6" fill="#EF4444" />
          </g>
        ))}
      </g>
      <text x="120" y="120" fontSize="14" fontWeight="bold" fill="#92400E" textAnchor="middle">3 × 5 = ?</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="wpGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#wpGrad2)" rx="16" />
      {/* Keywords visual */}
      <g transform="translate(120, 70)">
        <rect x="-80" y="-30" width="160" height="60" fill="white" fillOpacity="0.3" rx="8" stroke="#2563EB" strokeDasharray="4 2" />
        <text x="0" y="-5" fontSize="12" fontWeight="bold" fill="#1E40AF" textAnchor="middle">SUM • TOTAL • ALL</text>
        <line x1="-60" y1="5" x2="60" y2="5" stroke="#2563EB" strokeWidth="1" opacity="0.5" />
        <text x="0" y="22" fontSize="16" fontWeight="900" fill="#1E40AF" textAnchor="middle">+</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="wpGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#wpGrad3)" rx="16" />
      {/* Estimation: 48 + 51 -> 50 + 50 */}
      <g transform="translate(120, 70)">
        <text x="-50" y="0" fontSize="18" fontWeight="bold" fill="#6D28D9" textAnchor="middle">48 + 51</text>
        <path d="M -10,0 L 10,0" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" />
        <path d="M -10,5 L 10,5" stroke="#6D28D9" strokeWidth="2" strokeLinecap="round" />
        <text x="60" y="0" fontSize="18" fontWeight="bold" fill="#6D28D9" textAnchor="middle">≈ 100</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Word Problems Explorer",
    t1_title: "Understanding the Story",
    t1_text: "A word problem is a small story with a hidden math puzzle. To solve it, first identify what information you have and what you need to find out.",
    t1_b1: "Read the story twice carefully",
    t1_b2: "Draw a quick picture if it helps",
    t1_b3: "Look for the final question",
    t1_inst: "Combine blocks to solve: 4 friends have 6 stickers each. How many in total?",
    t1_h1: "This is a multiplication problem: 4 groups of 6.",
    t1_h2: "4 × 6 = 24. Combine four blocks of 6.",
    t1_q: "Sarah has 50 coins. She spends 12. How many are left?",
    t1_q_a: "62",
    t1_q_b: "38",
    t1_q_c: "40",
    t1_q_d: "48",
    t2_title: "Math Keywords",
    t2_text: "Certain words give you clues about the operation. 'Sum' or 'Total' usually mean addition, while 'Difference' or 'Left' mean subtraction.",
    t2_b1: "In all / Combined = Addition",
    t2_b2: "Each / Per = Often Multiplication",
    t2_b3: "Share / Split = Division",
    t2_inst: "Find 45 on the number line: A bus had 60 people, 15 got off. How many left?",
    t2_h1: "Subtract 15 from 60 (60 - 15).",
    t2_h2: "60 minus 10 is 50, minus 5 more is 45.",
    t2_q: "Which word usually points to subtraction?",
    t2_q_a: "Total",
    t2_q_b: "Difference",
    t2_q_c: "Times",
    t2_q_d: "Plus",
    t3_title: "Checking & Estimation",
    t3_text: "Before solving exactly, try to estimate. If you buy items for 48 and 51, your answer should be close to 100!",
    t3_b1: "Round numbers to the nearest 10",
    t3_b2: "Does the answer make sense?",
    t3_b3: "Check your work with the opposite operation",
    t3_inst: "Estimate 19 + 21 + 32 by combining blocks of 10!",
    t3_h1: "Round them: 20 + 20 + 30 = 70.",
    t3_h2: "Use seven 10-value blocks to show the estimate.",
    t3_q: "Estimate 98 + 103. Which is the most sensible answer?",
    t3_q_a: "100",
    t3_q_b: "200",
    t3_q_c: "300",
    t3_q_d: "150",
  },
  de: {
    explorer_title: "Sachaufgaben-Entdecker",
    t1_title: "Die Geschichte verstehen",
    t1_text: "Eine Sachaufgabe ist eine kleine Geschichte mit einem versteckten Mathe-Rätsel. Finde zuerst heraus, welche Informationen du hast.",
    t1_b1: "Lies den Text zweimal genau durch",
    t1_b2: "Skizziere die Aufgabe bei Bedarf",
    t1_b3: "Achte auf die eigentliche Frage",
    t1_inst: "4 Freunde haben je 6 Sticker. Wie viele sind es insgesamt?",
    t1_h1: "Das ist eine Malaufgabe: 4 Gruppen von 6.",
    t1_h2: "4 × 6 = 24. Kombiniere vier 6er-Blöcke.",
    t1_q: "Sarah hat 50 Münzen. Sie gibt 12 aus. Wie viele bleiben?",
    t1_q_a: "62",
    t1_q_b: "38",
    t1_q_c: "40",
    t1_q_d: "48",
    t2_title: "Mathe-Schlüsselwörter",
    t2_text: "Bestimmte Wörter geben dir Hinweise. 'Insgesamt' bedeutet oft Plus, während 'Unterschied' oder 'Rest' oft Minus bedeutet.",
    t2_b1: "Zusammen / Gesamt = Addition",
    t2_b2: "Jeder / Pro = Meist Multiplikation",
    t2_b3: "Teilen / Verteilen = Division",
    t2_inst: "Im Bus waren 60 Leute, 15 stiegen aus. Wie viele sind noch da?",
    t2_h1: "Rechne 60 minus 15.",
    t2_h2: "60 - 10 = 50, dann noch 5 weg = 45.",
    t2_q: "Welches Wort deutet auf eine Minusaufgabe hin?",
    t2_q_a: "Gesamt",
    t2_q_b: "Unterschied",
    t2_q_c: "Mal",
    t2_q_d: "Plus",
    t3_title: "Schätzen & Prüfen",
    t3_text: "Bevor du genau rechnest, schätze das Ergebnis. Wenn du Dinge für 48 és 51 kaufst, muss das Ergebnis nah bei 100 liegen!",
    t3_b1: "Runde Zahlen auf den nächsten Zehner",
    t3_b2: "Ist das Ergebnis sinnvoll?",
    t3_b3: "Prüfe mit der Umkehraufgabe",
    t3_inst: "Schätze 19 + 21 + 32 mit 10er-Blöcken!",
    t3_h1: "Runde sie: 20 + 20 + 30 = 70.",
    t3_h2: "Nutze sieben 10er-Blöcke für die Schätzung.",
    t3_q: "Schätze 98 + 103. Welches Ergebnis ist am sinnvollsten?",
    t3_q_a: "100",
    t3_q_b: "200",
    t3_q_c: "300",
    t3_q_d: "150",
  },
  hu: {
    explorer_title: "Szöveges feladatok",
    t1_title: "Értsd meg a történetet!",
    t1_text: "A szöveges feladat egy kis történet, amiben egy matekfeladvány bújik meg. Először keresd meg az adatokat és a kérdést!",
    t1_b1: "Olvasd el kétszer is a szöveget",
    t1_b2: "Rajzold le, ha az segít",
    t1_b3: "Keresd meg, mire irányul a kérdés",
    t1_inst: "4 barátnak fejenként 6 matricája van. Hány matricájuk van összesen?",
    t1_h1: "Ez egy szorzás: 4-szer a 6.",
    t1_h2: "4 × 6 = 24. Vond össze a négy darab 6-os blokkot.",
    t1_q: "Sárának 50 érméje van. Elkölt 12-t. Mennyi maradt neki?",
    t1_q_a: "62",
    t1_q_b: "38",
    t1_q_c: "40",
    t1_q_d: "48",
    t2_title: "Matematikai hívószavak",
    t2_text: "Bizonyos szavak segítenek a művelet kiválasztásában. Az 'összesen' általában összeadást, a 'különbség' vagy 'maradék' kivonást jelent.",
    t2_b1: "Együtt / Összesen = Összeadás",
    t2_b2: "Darabonként / Fejenként = Szorzás",
    t2_b3: "Szétosztunk / Elosztunk = Osztás",
    t2_inst: "A buszon 60-an voltak, 15-en leszálltak. Hányan maradtak?",
    t2_h1: "Vond ki a 15-öt a 60-ból (60 - 15).",
    t2_h2: "60-ból 10 az 50, abból még 5 az 45.",
    t2_q: "Melyik szó utal általában kivonásra?",
    t2_q_a: "Összesen",
    t2_q_b: "Különbség",
    t2_q_c: "Szorzata",
    t2_q_d: "Meg",
    t3_title: "Becslés és ellenőrzés",
    t3_text: "Mielőtt pontosan számolnál, becsüld meg az eredményt! Ha 48 és 51 forintért veszel valamit, az összeg 100 körül lesz.",
    t3_b1: "Kerekítsd a számokat a legközelebbi 10-esre",
    t3_b2: "Reális a kapott eredmény?",
    t3_b3: "Ellenőrizd a munkád fordított művelettel",
    t3_inst: "Becsüld meg a 19 + 21 + 32 összeget 10-es blokkokkal!",
    t3_h1: "Kerekíts: 20 + 20 + 30 = 70.",
    t3_h2: "Használj hét darab 10-es blokkot a becsléshez.",
    t3_q: "Becsüld meg: 98 + 103. Melyik a legésszerűbb válasz?",
    t3_q_a: "100",
    t3_q_b: "200",
    t3_q_c: "300",
    t3_q_d: "150",
  },
  ro: {
    explorer_title: "Probleme cu text",
    t1_title: "Înțelegerea poveștii",
    t1_text: "O problemă cu text este o mică poveste cu o enigmă matematică. Identifică datele problemei și ce trebuie să afli.",
    t1_b1: "Citește textul de două ori cu atenție",
    t1_b2: "Desenează problema dacă te ajută",
    t1_b3: "Caută întrebarea finală",
    t1_inst: "4 prieteni au câte 6 stickere. Câte au în total?",
    t1_h1: "Aceasta este o înmulțire: 4 grupe de 6.",
    t1_h2: "4 × 6 = 24. Combină patru blocuri de 6.",
    t1_q: "Sara are 50 de monede. Cheltuiește 12. Câte îi rămân?",
    t1_q_a: "62",
    t1_q_b: "38",
    t1_q_c: "40",
    t1_q_d: "48",
    t2_title: "Cuvinte cheie",
    t2_text: "Anumite cuvinte îți oferă indicii. 'Total' înseamnă adunare, iar 'diferență' sau 'rest' înseamnă scădere.",
    t2_b1: "În total / Împreună = Adunare",
    t2_b2: "Fiecare / Per = Deseori înmulțire",
    t2_b3: "Distribuit / Împărțit = Împărțire",
    t2_inst: "În autobuz erau 60 de oameni, 15 au coborât. Câți au rămas?",
    t2_h1: "Scade 15 din 60 (60 - 15).",
    t2_h2: "60 minus 10 fac 50, minus încă 5 fac 45.",
    t2_q: "Care cuvânt indică de obicei o scădere?",
    t2_q_a: "Total",
    t2_q_b: "Diferență",
    t2_q_c: "Ori",
    t2_q_d: "Plus",
    t3_title: "Estimare și verificare",
    t3_text: "Înainte de a calcula exact, estimează rezultatul. Dacă cumperi ceva de 48 și 51, rezultatul trebuie să fie aproape de 100!",
    t3_b1: "Rotunjește numerele la zeci",
    t3_b2: "Are sens rezultatul obținut?",
    t3_b3: "Verifică prin operația inversă",
    t3_inst: "Estimează 19 + 21 + 32 folosind blocuri de 10!",
    t3_h1: "Rotunjește: 20 + 20 + 30 = 70.",
    t3_h2: "Folosește șapte blocuri de 10 pentru estimare.",
    t3_q: "Estimează 98 + 103. Care este cel mai logic răspuns?",
    t3_q_a: "100",
    t3_q_b: "200",
    t3_q_c: "300",
    t3_q_d: "150",
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
      groups: [6, 6, 6, 6],
      answer: 24,
      blockIcon: "🏷️",
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
      max: 60,
      start: 60,
      target: 45,
      step: 5,
      showJumps: true,
      jumpCount: 3,
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
      groups: [2, 2, 3], // Representing rounded 20, 20, 30
      answer: 7, // 7 blocks of 10
      blockIcon: "🔟",
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
  icon: "📖",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const WordProblemsExplorer4 = memo(function WordProblemsExplorer4({
  color = "#F59E0B",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="math_g4_wordproblems" color={color} lang={lang} onDone={onDone} />;
});

export default WordProblemsExplorer4;
