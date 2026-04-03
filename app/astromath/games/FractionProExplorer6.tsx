"use client";
// FractionProExplorer6 — Fraction Multiplication & Division for Grade 6 (island i2)
// Teaches: multiplying fractions, dividing fractions (flip & multiply), fraction-to-percent

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRACIOK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="fracProGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#fracProGrad1)" rx="16" />
      {/* Fraction multiplication visual: 1/2 x 3/4 */}
      <g transform="translate(30, 25)">
        {/* First fraction: 1/2 as a bar */}
        <rect x="0" y="0" width="50" height="30" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="2" rx="4" />
        <rect x="0" y="0" width="25" height="30" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="2" rx="4" />
        <text x="25" y="60" fontSize="14" fontWeight="bold" fill="#5B21B6" textAnchor="middle">1/2</text>
        {/* Times sign */}
        <text x="70" y="20" fontSize="20" fontWeight="bold" fill="#5B21B6">x</text>
        {/* Second fraction: 3/4 as a bar */}
        <rect x="90" y="0" width="50" height="30" fill="#DDD6FE" stroke="#7C3AED" strokeWidth="2" rx="4" />
        <rect x="90" y="0" width="37.5" height="30" fill="#8B5CF6" stroke="#7C3AED" strokeWidth="2" rx="4" />
        <text x="115" y="60" fontSize="14" fontWeight="bold" fill="#5B21B6" textAnchor="middle">3/4</text>
        {/* Equals */}
        <text x="155" y="20" fontSize="20" fontWeight="bold" fill="#5B21B6">=</text>
        {/* Result: 3/8 */}
        <rect x="170" y="0" width="50" height="30" fill="#EDE9FE" stroke="#7C3AED" strokeWidth="2" rx="4" />
        <rect x="170" y="0" width="18.75" height="30" fill="#6D28D9" stroke="#7C3AED" strokeWidth="2" rx="4" />
        <text x="195" y="60" fontSize="14" fontWeight="900" fill="#4C1D95" textAnchor="middle">3/8</text>
      </g>
      <text x="120" y="105" fontSize="11" fontWeight="bold" fill="#5B21B6" textAnchor="middle">1x3 = 3 / 2x4 = 8</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="fracProGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F472B6" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#fracProGrad2)" rx="16" />
      {/* Fraction division: flip & multiply */}
      <g transform="translate(20, 20)">
        {/* Original: 3/4 / 1/2 */}
        <text x="30" y="20" fontSize="16" fontWeight="bold" fill="#BE185D" textAnchor="middle">3/4</text>
        <text x="60" y="20" fontSize="16" fontWeight="bold" fill="#9D174D" textAnchor="middle">{"\u00F7"}</text>
        <text x="90" y="20" fontSize="16" fontWeight="bold" fill="#BE185D" textAnchor="middle">1/2</text>
        {/* Arrow down */}
        <text x="120" y="48" fontSize="20" fill="#DB2777" textAnchor="middle">{"\u2193"}</text>
        {/* Flipped: 3/4 x 2/1 */}
        <text x="30" y="80" fontSize="16" fontWeight="bold" fill="#BE185D" textAnchor="middle">3/4</text>
        <text x="60" y="80" fontSize="16" fontWeight="bold" fill="#DB2777" textAnchor="middle">x</text>
        {/* Flipped fraction highlighted */}
        <rect x="72" y="62" width="36" height="26" fill="#FCE7F3" stroke="#DB2777" strokeWidth="2" rx="6" />
        <text x="90" y="80" fontSize="16" fontWeight="900" fill="#BE185D" textAnchor="middle">2/1</text>
        <text x="120" y="80" fontSize="16" fontWeight="bold" fill="#BE185D" textAnchor="middle">=</text>
        <text x="160" y="80" fontSize="20" fontWeight="900" fill="#9D174D" textAnchor="middle">6/4</text>
      </g>
      <text x="120" y="120" fontSize="12" fontWeight="bold" fill="#9D174D" textAnchor="middle">= 3/2 = 1 1/2</text>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="fracProGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#fracProGrad3)" rx="16" />
      {/* Fraction to Percent conversion */}
      <g transform="translate(30, 30)">
        {/* Pie chart: 3/4 = 75% */}
        <circle cx="45" cy="40" r="35" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
        {/* 3/4 filled (270 degrees) */}
        <path d={`M 45,40 L 45,5 A 35,35 0 1,1 10,40 Z`} fill="#10B981" stroke="#059669" strokeWidth="2" />
        <text x="45" y="45" fontSize="14" fontWeight="900" fill="white" textAnchor="middle">3/4</text>
        {/* Arrow */}
        <text x="105" y="45" fontSize="24" fontWeight="bold" fill="#059669">=</text>
        {/* Percent */}
        <text x="155" y="50" fontSize="28" fontWeight="900" fill="#047857">75%</text>
      </g>
      <text x="120" y="115" fontSize="11" fontWeight="bold" fill="#059669" textAnchor="middle">3 / 4 = 0.75 = 75%</text>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Fractions Pro",
    t1_title: "Multiplying Fractions",
    t1_text: "To multiply fractions, multiply the top numbers (numerators) together, then multiply the bottom numbers (denominators) together. Simple!",
    t1_b1: "Multiply tops: 1 x 3 = 3",
    t1_b2: "Multiply bottoms: 2 x 4 = 8",
    t1_b3: "Result: 1/2 x 3/4 = 3/8",
    t1_inst: "What is 2/3 x 3/5? Find the answer on the number line!",
    t1_h1: "Tops: 2 x 3 = 6. Bottoms: 3 x 5 = 15.",
    t1_h2: "6/15 simplifies to 2/5. But on our line, find 6 (the numerator of the unsimplified result).",
    t1_q: "What is 1/3 x 1/2?",
    t1_q_a: "1/6",
    t1_q_b: "2/5",
    t1_q_c: "1/5",
    t1_q_d: "2/6",
    t2_title: "Dividing Fractions",
    t2_text: "To divide fractions, flip the second fraction upside down (the reciprocal) and then multiply! This trick is called 'Keep, Change, Flip'.",
    t2_b1: "Keep the first fraction as it is",
    t2_b2: "Change division to multiplication",
    t2_b3: "Flip the second fraction (1/2 becomes 2/1)",
    t2_inst: "What is 3/4 divided by 1/2? Solve it step by step!",
    t2_step1: "Flip 1/2 to get... (choose the reciprocal)",
    t2_step2: "Now multiply: 3/4 x 2/1 = ?",
    t2_h1: "Flip 1/2 to get 2/1, then multiply: 3 x 2 = 6, 4 x 1 = 4.",
    t2_h2: "6/4 = 3/2. The final answer is 6 (as numerator before simplification).",
    t2_q: "What is 2/5 divided by 1/3?",
    t2_q_a: "6/5",
    t2_q_b: "2/15",
    t2_q_c: "3/5",
    t2_q_d: "5/6",
    t3_title: "Fractions as Percentages",
    t3_text: "A percentage means 'out of 100'. To convert a fraction to a percent, divide the numerator by the denominator and multiply by 100. Or think: 3/4 = 75 out of 100 = 75%.",
    t3_b1: "Divide top by bottom: 3 / 4 = 0.75",
    t3_b2: "Multiply by 100: 0.75 x 100 = 75%",
    t3_b3: "Common: 1/2=50%, 1/4=25%, 3/4=75%, 1/5=20%",
    t3_inst: "What percent is 2/5? Find it on the number line from 0 to 100!",
    t3_h1: "2 divided by 5 = 0.40.",
    t3_h2: "0.40 times 100 = 40%. Find 40.",
    t3_q: "What is 1/4 as a percentage?",
    t3_q_a: "25%",
    t3_q_b: "40%",
    t3_q_c: "50%",
    t3_q_d: "75%",
  },
  de: {
    explorer_title: "Bruchrechnung Profi",
    t1_title: "Brüche multiplizieren",
    t1_text: "Um Brüche zu multiplizieren, multipliziere die Zähler miteinander und die Nenner miteinander. Ganz einfach!",
    t1_b1: "Zähler multiplizieren: 1 x 3 = 3",
    t1_b2: "Nenner multiplizieren: 2 x 4 = 8",
    t1_b3: "Ergebnis: 1/2 x 3/4 = 3/8",
    t1_inst: "Was ist 2/3 x 3/5? Finde die Antwort auf dem Zahlenstrahl!",
    t1_h1: "Zähler: 2 x 3 = 6. Nenner: 3 x 5 = 15.",
    t1_h2: "6/15 gekuerzt = 2/5. Finde die 6 auf dem Zahlenstrahl.",
    t1_q: "Was ist 1/3 x 1/2?",
    t1_q_a: "1/6",
    t1_q_b: "2/5",
    t1_q_c: "1/5",
    t1_q_d: "2/6",
    t2_title: "Brüche dividieren",
    t2_text: "Um Brüche zu dividieren, drehe den zweiten Bruch um (den Kehrwert) und multipliziere dann! Dieser Trick heisst 'Behalten, Aendern, Umdrehen'.",
    t2_b1: "Behalte den ersten Bruch",
    t2_b2: "Aendere Division zu Multiplikation",
    t2_b3: "Drehe den zweiten Bruch um (1/2 wird 2/1)",
    t2_inst: "Was ist 3/4 geteilt durch 1/2? Loese es Schritt fuer Schritt!",
    t2_step1: "Drehe 1/2 um zu... (wähle den Kehrwert)",
    t2_step2: "Jetzt multiplizieren: 3/4 x 2/1 = ?",
    t2_h1: "Drehe 1/2 zu 2/1, dann multipliziere: 3 x 2 = 6, 4 x 1 = 4.",
    t2_h2: "6/4 = 3/2. Die endgültige Antwort (Zähler) ist 6.",
    t2_q: "Was ist 2/5 geteilt durch 1/3?",
    t2_q_a: "6/5",
    t2_q_b: "2/15",
    t2_q_c: "3/5",
    t2_q_d: "5/6",
    t3_title: "Brüche als Prozent",
    t3_text: "Prozent bedeutet 'von 100'. Um einen Bruch in Prozent umzuwandeln, teile den Zähler durch den Nenner und multipliziere mit 100. Beispiel: 3/4 = 75 von 100 = 75%.",
    t3_b1: "Teile Zähler durch Nenner: 3 / 4 = 0,75",
    t3_b2: "Multipliziere mit 100: 0,75 x 100 = 75%",
    t3_b3: "Häufig: 1/2=50%, 1/4=25%, 3/4=75%, 1/5=20%",
    t3_inst: "Wie viel Prozent ist 2/5? Finde es auf dem Zahlenstrahl 0 bis 100!",
    t3_h1: "2 geteilt durch 5 = 0,40.",
    t3_h2: "0,40 mal 100 = 40%. Finde 40.",
    t3_q: "Was ist 1/4 als Prozent?",
    t3_q_a: "25%",
    t3_q_b: "40%",
    t3_q_c: "50%",
    t3_q_d: "75%",
  },
  hu: {
    explorer_title: "Tortek Profi",
    t1_title: "Tortek szorzasa",
    t1_text: "Tortek szorzasahoz szorozd ossze a szamlalokat (felso szamok) es szorozd ossze a nevezoket (also szamok). Ennyi az egesz!",
    t1_b1: "Szamlalok: 1 x 3 = 3",
    t1_b2: "Nevezok: 2 x 4 = 8",
    t1_b3: "Eredmeny: 1/2 x 3/4 = 3/8",
    t1_inst: "Mennyi 2/3 x 3/5? Keressed az eredmenyt a szamegyenesen!",
    t1_h1: "Szamlalok: 2 x 3 = 6. Nevezok: 3 x 5 = 15.",
    t1_h2: "6/15 egyszerusitve = 2/5. De keresd a 6-ot a vonalon.",
    t1_q: "Mennyi 1/3 x 1/2?",
    t1_q_a: "1/6",
    t1_q_b: "2/5",
    t1_q_c: "1/5",
    t1_q_d: "2/6",
    t2_title: "Tortek osztasa",
    t2_text: "Tortek osztasahoz forditsd meg a masodik tortet (a reciprokot), es szorozz! Ez a trukk neve: 'Tartsd meg, Valtoztasd, Forditsd meg'.",
    t2_b1: "Tartsd meg az elso tortet valtozatlanul",
    t2_b2: "Valtoztasd az osztast szorzasra",
    t2_b3: "Forditsd meg a masodikat (1/2 lesz 2/1)",
    t2_inst: "Mennyi 3/4 osztva 1/2-del? Oldd meg lepesrol lepesre!",
    t2_step1: "Forditsd meg 1/2-t... (valaszd a reciprokot)",
    t2_step2: "Most szorozz: 3/4 x 2/1 = ?",
    t2_h1: "Forditsd meg 1/2-t: 2/1, majd szorozz: 3 x 2 = 6, 4 x 1 = 4.",
    t2_h2: "6/4 = 3/2. A vegso valasz (szamlalo) 6.",
    t2_q: "Mennyi 2/5 osztva 1/3-dal?",
    t2_q_a: "6/5",
    t2_q_b: "2/15",
    t2_q_c: "3/5",
    t2_q_d: "5/6",
    t3_title: "Tortek szazalekban",
    t3_text: "A szazalek azt jelenti: '100-bol'. Tort atvalatasahoz oszd el a szamlalot a nevezovel, es szorozd meg 100-zal. Pelda: 3/4 = 75 a 100-bol = 75%.",
    t3_b1: "Oszd el a szamlalot a nevezovel: 3 / 4 = 0,75",
    t3_b2: "Szorozd 100-zal: 0,75 x 100 = 75%",
    t3_b3: "Gyakori: 1/2=50%, 1/4=25%, 3/4=75%, 1/5=20%",
    t3_inst: "Hany szazalek a 2/5? Keresd a szamegyenesen 0-tol 100-ig!",
    t3_h1: "2 osztva 5-tel = 0,40.",
    t3_h2: "0,40 szorozva 100-zal = 40%. Keresd a 40-et.",
    t3_q: "Hany szazalek az 1/4?",
    t3_q_a: "25%",
    t3_q_b: "40%",
    t3_q_c: "50%",
    t3_q_d: "75%",
  },
  ro: {
    explorer_title: "Fractii Pro",
    t1_title: "Inmultirea Fractiilor",
    t1_text: "Pentru a inmulti fractii, inmulteste numaratorii (numerele de sus) intre ei, apoi inmulteste numitorii (numerele de jos) intre ei. Simplu!",
    t1_b1: "Numaratori: 1 x 3 = 3",
    t1_b2: "Numitori: 2 x 4 = 8",
    t1_b3: "Rezultat: 1/2 x 3/4 = 3/8",
    t1_inst: "Cat este 2/3 x 3/5? Gaseste raspunsul pe axa numerelor!",
    t1_h1: "Numaratori: 2 x 3 = 6. Numitori: 3 x 5 = 15.",
    t1_h2: "6/15 simplificat = 2/5. Gaseste 6 pe linie.",
    t1_q: "Cat este 1/3 x 1/2?",
    t1_q_a: "1/6",
    t1_q_b: "2/5",
    t1_q_c: "1/5",
    t1_q_d: "2/6",
    t2_title: "Impartirea Fractiilor",
    t2_text: "Pentru a imparti fractii, intoarce a doua fractie pe dos (inversul) si apoi inmulteste! Trucul se numeste 'Pastreaza, Schimba, Intoarce'.",
    t2_b1: "Pastreaza prima fractie asa cum este",
    t2_b2: "Schimba impartirea in inmultire",
    t2_b3: "Intoarce a doua fractie (1/2 devine 2/1)",
    t2_inst: "Cat este 3/4 impartit la 1/2? Rezolva pas cu pas!",
    t2_step1: "Intoarce 1/2 pentru a obtine... (alege inversul)",
    t2_step2: "Acum inmulteste: 3/4 x 2/1 = ?",
    t2_h1: "Intoarce 1/2 in 2/1, apoi inmulteste: 3 x 2 = 6, 4 x 1 = 4.",
    t2_h2: "6/4 = 3/2. Raspunsul final (numarator) este 6.",
    t2_q: "Cat este 2/5 impartit la 1/3?",
    t2_q_a: "6/5",
    t2_q_b: "2/15",
    t2_q_c: "3/5",
    t2_q_d: "5/6",
    t3_title: "Fractii ca Procente",
    t3_text: "Procentul inseamna 'din 100'. Pentru a transforma o fractie in procent, imparte numaratorul la numitor si inmulteste cu 100. Exemplu: 3/4 = 75 din 100 = 75%.",
    t3_b1: "Imparte numaratorul la numitor: 3 / 4 = 0,75",
    t3_b2: "Inmulteste cu 100: 0,75 x 100 = 75%",
    t3_b3: "Frecvente: 1/2=50%, 1/4=25%, 3/4=75%, 1/5=20%",
    t3_inst: "Ce procent este 2/5? Gaseste-l pe axa de la 0 la 100!",
    t3_h1: "2 impartit la 5 = 0,40.",
    t3_h2: "0,40 ori 100 = 40%. Gaseste 40.",
    t3_q: "Cat este 1/4 ca procent?",
    t3_q_a: "25%",
    t3_q_b: "40%",
    t3_q_c: "50%",
    t3_q_d: "75%",
  },
};

// ─── TOPIC DEFINICIOK ────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 15,
      start: 0,
      target: 6, // 2/3 x 3/5 = 6/15 -> numerator is 6
      step: 1,
      showJumps: true,
      jumpCount: 6,
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // 1/6
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "equation-solver",
      equation: "3/4 ÷ 1/2 = 3/4 × 2/1 = ?",
      steps: [
        { instruction: "t2_step1", choices: [2, 1, 3, 4], answer: 2, equation: "3/4 × 2/1 = ?" },
        { instruction: "t2_step2", choices: [3, 6, 4, 8], answer: 6, equation: "6/4 = 3/2" },
      ],
      finalAnswer: 6,
      variable: "?",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // 6/5
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
      max: 100,
      start: 0,
      target: 40, // 2/5 = 40%
      step: 10,
      showJumps: true,
      jumpCount: 4,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // 25%
    },
  },
];

// ─── EXPLORER DEFINICIO ──────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🍕",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const FractionProExplorer6 = memo(function FractionProExplorer6({
  color = "#8B5CF6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="math_g6_fraction_pro" color={color} lang={lang} onDone={onDone} />;
});

export default FractionProExplorer6;
