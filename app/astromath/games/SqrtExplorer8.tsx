"use client";
// SqrtExplorer8 — Square Roots for Grade 8 (island i1)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Modern, matematikai precizitás) ─────────────

const Topic1Svg = memo(({ labels }: { labels: Record<string, string> }) => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="sqrtGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#A855F7" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#sqrtGrad1)" rx="20" />
    <g transform="translate(120, 80)">
      {/* Square and its side */}
      <rect x="-40" y="-40" width="80" height="80" fill="none" stroke="#6366F1" strokeWidth="3" />
      <text x="0" y="5" fontSize="16" fontWeight="bold" fill="#4F46E5" textAnchor="middle">{labels.t1_svg_area}</text>
      <line x1="-40" y1="50" x2="40" y2="50" stroke="#A855F7" strokeWidth="2" />
      <text x="0" y="65" fontSize="14" fontWeight="black" fill="#9333EA" textAnchor="middle">{labels.t1_svg_side}</text>
    </g>
  </svg>
));

const Topic2Svg = memo(({ labels }: { labels: Record<string, string> }) => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#F5F3FF" rx="20" />
    <g transform="translate(120, 70)">
      <line x1="-100" y1="20" x2="100" y2="20" stroke="#7C3AED" strokeWidth="2" />
      <text x="-60" y="45" fontSize="12" fontWeight="bold" fill="#6D28D9" textAnchor="middle">{labels.t2_svg_low}</text>
      <text x="60" y="45" fontSize="12" fontWeight="bold" fill="#6D28D9" textAnchor="middle">{labels.t2_svg_high}</text>
      <circle cx="-50" cy="20" r="5" fill="#C084FC" />
      <text x="-50" y="-5" fontSize="14" fontWeight="black" fill="#7C3AED" textAnchor="middle">{labels.t2_svg_est}</text>
    </g>
  </svg>
));

const Topic3Svg = memo(({ labels }: { labels: Record<string, string> }) => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#FAF5FF" rx="20" />
    <g transform="translate(120, 60)">
      <text x="0" y="0" fontSize="22" fontWeight="black" fill="#6B21A8" textAnchor="middle">{labels.t3_svg_simp}</text>
      <path d="M -40,15 Q 0,40 40,15" fill="none" stroke="#A855F7" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
      <text x="0" y="45" fontSize="12" fill="#7E22CE" textAnchor="middle">{labels.t3_svg_factor}</text>
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Square Roots",
    t1_title: "Understanding Square Roots",
    t1_text: "Square roots are the opposite of squaring. We look for the non-negative number whose square equals the given number. For example, √64 = 8, because 8² = 64.",
    t1_b1: "√x: What number squared equals x?",
    t1_b2: "We can only take roots of non-negative numbers",
    t1_b3: "The square root of a perfect square is always a whole number",
    t1_inst: "Find the side length! If a square has area 144, what is its side?",
    t1_h1: "What number multiplied by itself gives 144?",
    t1_h2: "12 · 12 = 144. Move the slider to 12.",
    t1_svg_area: "Area: 64",
    t1_svg_side: "Side: √64 = 8",
    t1_q: "What is √121?",
    t1_q_a: "11", t1_q_b: "12", t1_q_c: "10", t1_q_d: "21",
    t2_title: "Estimation: Where is the root?",
    t2_text: "Most numbers are not perfect squares, so their roots are not whole numbers. We find the nearest perfect squares to estimate the root.",
    t2_b1: "√50 is not exact",
    t2_b2: "√49 = 7 and √64 = 8",
    t2_b3: "So √50 is slightly more than 7",
    t2_inst: "Estimate where √20 falls on the number line!",
    t2_h1: "√16 = 4 and √25 = 5.",
    t2_h2: "20 is close to both 16 and 25, so look between 4 and 5.",
    t2_svg_low: "7 (√49)",
    t2_svg_high: "8 (√64)",
    t2_svg_est: "√50 ≈ 7.07",
    t2_q: "Between which two whole numbers does √80 fall?",
    t2_q_a: "8 and 9", t2_q_b: "7 and 8", t2_q_c: "9 and 10", t2_q_d: "80 and 81",
    t3_title: "Simplifying Radicals",
    t3_text: "If a number is not a perfect square but has a perfect square factor, we can simplify the expression. For example, √12 = √(4 · 3) = 2√3.",
    t3_b1: "Break the number into factors",
    t3_b2: "Find the perfect square factor (4, 9, 16...)",
    t3_b3: "Move the square root of the perfect square outside",
    t3_inst: "Simplify: √18",
    t3_step1: "Break it down: √(9 · ?)",
    t3_step2: "Move 9 outside the radical (3√?)",
    t3_h1: "18 = 9 · 2.",
    t3_h2: "The square root of 9 is 3, so the answer is 3√2.",
    t3_svg_simp: "√12 = 2√3",
    t3_svg_factor: "√4 · √3",
    t3_q: "What is the simplified form of √20?",
    t3_q_a: "2√5", t3_q_b: "4√5", t3_q_c: "5√2", t3_q_d: "2√10",
  },
  de: {
    explorer_title: "Quadratwurzeln",
    t1_title: "Das Konzept der Quadratwurzel",
    t1_text: "Das Ziehen der Quadratwurzel ist das Gegenteil des Quadrierens. Wir suchen die nicht-negative Zahl, deren Quadrat der gegebenen Zahl entspricht. Zum Beispiel √64 = 8, weil 8² = 64.",
    t1_b1: "√x: Welche Zahl zum Quadrat ist x?",
    t1_b2: "Wir können nur aus nicht-negativen Zahlen die Wurzel ziehen",
    t1_b3: "Die Quadratwurzel einer Quadratzahl ist immer eine ganze Zahl",
    t1_inst: "Finde die Seitenlänge! Wenn ein Quadrat die Fläche 144 hat, wie lang ist die Seite?",
    t1_h1: "Welche Zahl muss mit sich selbst multipliziert werden, um 144 zu erhalten?",
    t1_h2: "12 · 12 = 144. Stelle den Schieber auf 12.",
    t1_svg_area: "Fläche: 64",
    t1_svg_side: "Seite: √64 = 8",
    t1_q: "Was ist √121?",
    t1_q_a: "11", t1_q_b: "12", t1_q_c: "10", t1_q_d: "21",
    t2_title: "Schätzung: Wo liegt die Wurzel?",
    t2_text: "Die meisten Zahlen sind keine Quadratzahlen, also sind ihre Wurzeln keine ganzen Zahlen. Wir finden die nächstliegenden Quadratzahlen zur Schätzung.",
    t2_b1: "√50 ist nicht exakt",
    t2_b2: "√49 = 7 und √64 = 8",
    t2_b3: "Also ist √50 etwas mehr als 7",
    t2_inst: "Schätze, wo √20 auf dem Zahlenstrahl liegt!",
    t2_h1: "√16 = 4 und √25 = 5.",
    t2_h2: "20 liegt nah bei 16 und 25, also suche zwischen 4 und 5.",
    t2_svg_low: "7 (√49)",
    t2_svg_high: "8 (√64)",
    t2_svg_est: "√50 ≈ 7,07",
    t2_q: "Zwischen welchen zwei ganzen Zahlen liegt √80?",
    t2_q_a: "8 und 9", t2_q_b: "7 und 8", t2_q_c: "9 und 10", t2_q_d: "80 und 81",
    t3_title: "Wurzeln vereinfachen",
    t3_text: "Wenn eine Zahl keine Quadratzahl ist, aber einen Quadratzahlfaktor hat, können wir den Ausdruck vereinfachen. Zum Beispiel √12 = √(4 · 3) = 2√3.",
    t3_b1: "Zerlege die Zahl in Faktoren",
    t3_b2: "Finde den Quadratzahlfaktor (4, 9, 16...)",
    t3_b3: "Ziehe die Quadratwurzel des Quadratzahlfaktors heraus",
    t3_inst: "Vereinfache: √18",
    t3_step1: "Zerlege: √(9 · ?)",
    t3_step2: "Ziehe 9 heraus (3√?)",
    t3_h1: "18 = 9 · 2.",
    t3_h2: "Die Quadratwurzel von 9 ist 3, also ist das Ergebnis 3√2.",
    t3_svg_simp: "√12 = 2√3",
    t3_svg_factor: "√4 · √3",
    t3_q: "Was ist die vereinfachte Form von √20?",
    t3_q_a: "2√5", t3_q_b: "4√5", t3_q_c: "5√2", t3_q_d: "2√10",
  },
  hu: {
    explorer_title: "Négyzetgyökök",
    t1_title: "A gyökvonás fogalma",
    t1_text: "A négyzetgyökvonás a négyzetre emelés ellentéte. Azt a nemnegatív számot keressük, aminek a négyzete az adott szám. Például √64 = 8, mert 8² = 64.",
    t1_b1: "√x: Melyik szám négyzete x?",
    t1_b2: "Csak nemnegatív számból vonhatunk gyököt",
    t1_b3: "A négyzetszámok gyöke egész szám",
    t1_inst: "Keresd meg az oldal hosszát! Ha a négyzet területe 144, mennyi az oldala?",
    t1_h1: "Melyik számot kell önmagával szorozni, hogy 144-et kapjunk?",
    t1_h2: "12 · 12 = 144. Állítsd a csúszkát 12-re.",
    t1_svg_area: "Terület: 64",
    t1_svg_side: "Oldal: √64 = 8",
    t1_q: "Mennyi √121 értéke?",
    t1_q_a: "11", t1_q_b: "12", t1_q_c: "10", t1_q_d: "21",
    t2_title: "Becslés: Hol a gyök?",
    t2_text: "A legtöbb szám nem négyzetszám, így a gyökük nem egész. Ilyenkor megkeressük a két legközelebbi négyzetszámot, amik közé esik.",
    t2_b1: "√50 nincs meg pontosan",
    t2_b2: "√49 = 7 és √64 = 8",
    t2_b3: "Így √50 egy kicsivel több, mint 7",
    t2_inst: "Becsüld meg √20 helyét a számegyenesen!",
    t2_h1: "√16 = 4 és √25 = 5.",
    t2_h2: "A 20 a 16-hoz és a 25-höz is közel van, tehát 4 és 5 között keresd.",
    t2_svg_low: "7 (√49)",
    t2_svg_high: "8 (√64)",
    t2_svg_est: "√50 ≈ 7,07",
    t2_q: "Melyik két egész szám közé esik √80?",
    t2_q_a: "8 és 9", t2_q_b: "7 és 8", t2_q_c: "9 és 10", t2_q_d: "80 és 81",
    t3_title: "Kiemelés a gyökjel alól",
    t3_text: "Ha a szám nem négyzetszám, de van négyzetszám osztója, egyszerűsíthetjük a kifejezést. Például √12 = √(4 · 3) = 2√3.",
    t3_b1: "Bontsd fel a számot szorzatokra",
    t3_b2: "Keresd a négyzetszám szorzót (4, 9, 16...)",
    t3_b3: "Vond ki a gyök elé a négyzetszám gyökét",
    t3_inst: "Egyszerűsítsd: √18",
    t3_step1: "Bontsd fel: √(9 · ?)",
    t3_step2: "Vond ki a 9-et a gyök elé (3√?)",
    t3_h1: "18 = 9 · 2.",
    t3_h2: "A 9 gyöke 3, így az eredmény 3√2.",
    t3_svg_simp: "√12 = 2√3",
    t3_svg_factor: "√4 · √3",
    t3_q: "Mennyi √20 egyszerűsített alakja?",
    t3_q_a: "2√5", t3_q_b: "4√5", t3_q_c: "5√2", t3_q_d: "2√10",
  },
  ro: {
    explorer_title: "Rădăcini Pătrate",
    t1_title: "Conceptul de rădăcină pătrată",
    t1_text: "Extragerea rădăcinii pătrate este opusul ridicării la pătrat. Căutăm numărul non-negativ al cărui pătrat este egal cu numărul dat. De exemplu, √64 = 8, deoarece 8² = 64.",
    t1_b1: "√x: Ce număr la pătrat este x?",
    t1_b2: "Putem extrage rădăcini doar din numere non-negative",
    t1_b3: "Rădăcina pătrată a unui pătrat perfect este întotdeauna un număr întreg",
    t1_inst: "Găsiți lungimea laturii! Dacă un pătrat are aria 144, care este lungimea laturii?",
    t1_h1: "Ce număr înmulțit cu sine însuși dă 144?",
    t1_h2: "12 · 12 = 144. Setați glisorul pe 12.",
    t1_svg_area: "Aria: 64",
    t1_svg_side: "Latura: √64 = 8",
    t1_q: "Care este √121?",
    t1_q_a: "11", t1_q_b: "12", t1_q_c: "10", t1_q_d: "21",
    t2_title: "Estimare: Unde este rădăcina?",
    t2_text: "Majoritatea numerelor nu sunt pătrate perfecte, deci rădăcinile lor nu sunt numere întregi. Găsim pătratele perfecte apropiate pentru a estima rădăcina.",
    t2_b1: "√50 nu este exact",
    t2_b2: "√49 = 7 și √64 = 8",
    t2_b3: "Deci √50 este puțin mai mult decât 7",
    t2_inst: "Estimați unde se situează √20 pe linia numerelor!",
    t2_h1: "√16 = 4 și √25 = 5.",
    t2_h2: "20 este aproape de 16 și 25, deci căutați între 4 și 5.",
    t2_svg_low: "7 (√49)",
    t2_svg_high: "8 (√64)",
    t2_svg_est: "√50 ≈ 7,07",
    t2_q: "Între ce două numere întregi se situează √80?",
    t2_q_a: "8 și 9", t2_q_b: "7 și 8", t2_q_c: "9 și 10", t2_q_d: "80 și 81",
    t3_title: "Simplificarea radicalilor",
    t3_text: "Dacă un număr nu este un pătrat perfect, dar are un factor pătrat perfect, putem simplifica expresia. De exemplu, √12 = √(4 · 3) = 2√3.",
    t3_b1: "Descompuneți numărul în factori",
    t3_b2: "Găsiți factorul pătrat perfect (4, 9, 16...)",
    t3_b3: "Extrageți rădăcina pătrată a factorului pătrat perfect",
    t3_inst: "Simplificați: √18",
    t3_step1: "Descompuneți: √(9 · ?)",
    t3_step2: "Extrageți 9 afară (3√?)",
    t3_h1: "18 = 9 · 2.",
    t3_h2: "Rădăcina pătrată a lui 9 este 3, deci răspunsul este 3√2.",
    t3_svg_simp: "√12 = 2√3",
    t3_svg_factor: "√4 · √3",
    t3_q: "Care este forma simplificată a √20?",
    t3_q_a: "2√5", t3_q_b: "4√5", t3_q_c: "5√2", t3_q_d: "2√10",
  }
};

// ─── TOPIC DEFINÍCIÓK ────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: ({ labels }) => <Topic1Svg labels={labels} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "ratio-slider",
      baseValue: 1,
      basePrice: 1,
      targetValue: 12,
      targetPrice: 144,
      unitName: "oldal",
      currency: "terület",
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
    svg: ({ labels }) => <Topic2Svg labels={labels} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 10,
      start: 0,
      target: 4.47, // sqrt(20)
      step: 0.1,
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
    svg: ({ labels }) => <Topic3Svg labels={labels} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "equation-solver",
      equation: "√18 = √(9 · 2)",
      steps: [
        { instruction: "t3_step1", choices: [2, 3, 6, 9], answer: 2, equation: "√9 · √2" },
        { instruction: "t3_step2", choices: [2, 3, 4, 9], answer: 3, equation: "3√2" }
      ],
      finalAnswer: 3,
      variable: "√2 szorzója",
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

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "√",
  topics: TOPICS,
  rounds: [],
};

const SqrtExplorer8 = memo(function SqrtExplorer8({
  color = "#6366F1",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="math_g8_sqrt" color={color} lang={lang} onDone={onDone} />;
});

export default SqrtExplorer8;
