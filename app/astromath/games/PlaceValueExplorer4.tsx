"use client";
// PlaceValueExplorer4 — Place value discovery for Grade 4 (island i1: Large Numbers)
// Uses ExplorerEngine with 3 topics: thousands/hundreds/tens/ones decomposition (4-digit)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: 4-digit place value grid visualization ─────────────────────────────

const PlaceValueGridSvg = memo(function PlaceValueGridSvg({ number = 3847 }: { number?: number }) {
  const thousands = Math.floor(number / 1000);
  const hundreds = Math.floor((number % 1000) / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;

  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="pvg4G" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFB84D" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFD699" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#pvg4G)" rx="16" />

      {/* Thousands column (10×10 grid) */}
      <g transform="translate(15, 40)">
        {Array.from({ length: Math.min(thousands, 9) }, (_, i) => (
          <rect key={i} x={(i % 3) * 18} y={Math.floor(i / 3) * 18} width="16" height="16" fill="#FF6B9D" opacity="0.8" rx="2" />
        ))}
        <text x="24" y="65" fontSize="11" fontWeight="bold" fill="#FF6B9D" textAnchor="middle">{thousands}000</text>
      </g>

      {/* Hundreds column */}
      <g transform="translate(70, 40)">
        {Array.from({ length: hundreds }, (_, i) => (
          <rect key={i} x={(i % 3) * 18} y={Math.floor(i / 3) * 18} width="16" height="16" fill="#FFB84D" opacity="0.8" rx="2" />
        ))}
        <text x="24" y="65" fontSize="11" fontWeight="bold" fill="#FFB84D" textAnchor="middle">{hundreds}00</text>
      </g>

      {/* Tens column */}
      <g transform="translate(125, 40)">
        {Array.from({ length: tens }, (_, i) => (
          <rect key={i} x={(i % 5) * 12} y={Math.floor(i / 5) * 12} width="10" height="10" fill="#4ECDC4" opacity="0.8" rx="1" />
        ))}
        <text x="24" y="65" fontSize="11" fontWeight="bold" fill="#4ECDC4" textAnchor="middle">{tens}0</text>
      </g>

      {/* Ones column */}
      <g transform="translate(180, 40)">
        {Array.from({ length: ones }, (_, i) => (
          <circle key={i} cx={(i % 5) * 8 + 4} cy={Math.floor(i / 5) * 8 + 4} r="3" fill="#FFD700" opacity="0.85" />
        ))}
        <text x="19" y="65" fontSize="11" fontWeight="bold" fill="#FFD700" textAnchor="middle">{ones}</text>
      </g>

      {/* Number display */}
      <text x="120" y="145" fontSize="20" fontWeight="bold" fill="rgba(255,255,255,0.85)" textAnchor="middle">{number}</text>
    </svg>
  );
});

// ─── SVG: 4-digit decomposition equation ──────────────────────────────────────

const DecompositionSvg4 = memo(function DecompositionSvg4({
  number = 3847,
  highlighted = -1,
}: {
  number?: number;
  highlighted?: number;
}) {
  const thousands = Math.floor(number / 1000);
  const hundreds = Math.floor((number % 1000) / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;

  const parts = [thousands * 1000, hundreds * 100, tens * 10, ones];
  const colors = ["#FF6B9D", "#FFB84D", "#4ECDC4", "#FFD700"];
  const labels = ["thousands", "hundreds", "tens", "ones"];

  return (
    <svg width="100%" viewBox="0 0 240 120">
      <text x="120" y="20" fontSize="13" fontWeight="bold" fill="rgba(255,255,255,0.75)" textAnchor="middle">
        {number} = {parts.join(" + ")}
      </text>

      <g transform="translate(20, 40)">
        {parts.map((part, i) => (
          <g key={i} transform={`translate(${i * 53}, 0)`} opacity={highlighted === i || highlighted === -1 ? 1 : 0.5}>
            <rect width="48" height="30" fill={colors[i]} opacity="0.16" rx="6" />
            <text x="24" y="10" fontSize="10" fontWeight="bold" fill={colors[i]} textAnchor="middle">
              {part}
            </text>
            <text x="24" y="24" fontSize="8" fill={colors[i]} textAnchor="middle" opacity="0.8">
              {labels[i]}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
});

// ─── SVG: Number line (0-5000) with 4-digit numbers ────────────────────────────

const NumberLineSvg4 = memo(function NumberLineSvg4({ number = 3847 }: { number?: number }) {
  return (
    <svg width="100%" viewBox="0 0 240 110">
      <defs>
        <linearGradient id="nl4G" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7FE3DE" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#A8F5F0" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="110" fill="url(#nl4G)" rx="16" />

      {/* Number line 0-5000 */}
      <line x1="20" y1="50" x2="220" y2="50" stroke="rgba(255,255,255,0.35)" strokeWidth="2" strokeLinecap="round" />

      {/* Thousand marks (0, 1000, 2000, 3000, 4000, 5000) */}
      {[0, 1000, 2000, 3000, 4000, 5000].map((val) => (
        <g key={val}>
          <line x1={20 + (val / 5000) * 200} y1="45" x2={20 + (val / 5000) * 200} y2="55" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <text x={20 + (val / 5000) * 200} y="72" fontSize="9" fill="rgba(255,255,255,0.65)" textAnchor="middle">
            {val / 1000}k
          </text>
        </g>
      ))}

      {/* Target position mark */}
      <circle
        cx={20 + (number / 5000) * 200}
        cy="50"
        r="6"
        fill="rgba(255, 215, 0, 0.9)"
        stroke="rgba(255, 255, 255, 0.6)"
        strokeWidth="2"
      />
      <text x={20 + (number / 5000) * 200} y="28" fontSize="12" fontWeight="bold" fill="#FFD700" textAnchor="middle">
        {number}
      </text>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Explorer meta
    explorer_title: "Large Numbers Explorer",

    // Topic 1: Building 4-digit numbers
    t1_title: "Thousands, Hundreds, Tens, and Ones",
    t1_text: "A four-digit number has four place values: thousands, hundreds, tens, and ones. For example, 3847 = 3 thousands + 8 hundreds + 4 tens + 7 ones.",
    t1_b1: "Thousands are the biggest place value",
    t1_b2: "Each place value is 10 times the one to its right",
    t1_b3: "Add all four parts together to get the number",
    t1_inst: "What is 4 thousands + 2 hundreds + 5 tens + 9 ones?",
    t1_h1: "Think: 4000 + 200 + 50 + 9",
    t1_q: "Which number is 5 thousands + 6 hundreds + 3 tens + 1 one?",
    t1_q_5631: "5631",
    t1_q_5361: "5361",
    t1_q_5163: "5163",
    t1_q_5136: "5136",

    // Topic 2: Decomposing 4-digit numbers
    t2_title: "Breaking Apart Large Numbers",
    t2_text: "We can break any 4-digit number into its place values. For 2643: 2643 = 2000 + 600 + 40 + 3. This helps us understand the number better.",
    t2_b1: "Decomposition shows all four place values",
    t2_b2: "Zeros mean 'no hundreds' or 'no tens'",
    t2_b3: "The thousands place is always the leftmost digit",
    t2_inst: "Break 4105 into thousands, hundreds, tens, and ones.",
    t2_h1: "4105 has 4 thousands, 1 hundred, no tens, 5 ones",
    t2_q: "Which decomposition is correct for 3240?",
    t2_q_3240: "3000 + 200 + 40 + 0",
    t2_q_3204: "3000 + 200 + 0 + 4",
    t2_q_3024: "3000 + 0 + 20 + 4",
    t2_q_3200: "3000 + 200 + 4",

    // Topic 3: Number line up to 5000
    t3_title: "4-Digit Numbers on the Number Line",
    t3_text: "Numbers grow from left to right on a number line. On a line from 0 to 5000, each thousand is a big jump. Use place values to find numbers quickly.",
    t3_b1: "The number line goes 0, 1000, 2000, 3000, 4000, 5000",
    t3_b2: "Thousands help us find the right section",
    t3_b3: "We locate any 4-digit number by understanding its thousands first",
    t3_inst: "Where is 2800 on a number line from 0 to 5000?",
    t3_h1: "2800 = 2 thousands + 800, so it's between 2000 and 3000",
    t3_q: "Which number is closest to 3500 on the number line?",
    t3_q_2500: "2500",
    t3_q_3400: "3400",
    t3_q_4500: "4500",
    t3_q_1500: "1500",
  },
  de: {
    explorer_title: "Große Zahlen Entdecker",
    t1_title: "Tausender, Hunderter, Zehner und Einer",
    t1_text: "Eine vierstellige Zahl hat vier Stellenwerte: Tausender, Hunderter, Zehner und Einer. Zum Beispiel: 3847 = 3 Tausender + 8 Hunderter + 4 Zehner + 7 Einer.",
    t1_b1: "Tausender sind der größte Stellenwert",
    t1_b2: "Jeder Stellenwert ist 10 mal größer als der rechts",
    t1_b3: "Addiere alle vier Teile zusammen",
    t1_inst: "Was ist 4 Tausender + 2 Hunderter + 5 Zehner + 9 Einer?",
    t1_h1: "Denk: 4000 + 200 + 50 + 9",
    t1_q: "Welche Zahl ist 5 Tausender + 6 Hunderter + 3 Zehner + 1 Einer?",
    t1_q_5631: "5631",
    t1_q_5361: "5361",
    t1_q_5163: "5163",
    t1_q_5136: "5136",
    t2_title: "Große Zahlen zerlegen",
    t2_text: "Wir können jede vierstellige Zahl in ihre Stellenwerte aufteilen. Für 2643: 2643 = 2000 + 600 + 40 + 3. Das hilft uns, die Zahl zu verstehen.",
    t2_b1: "Zerlegung zeigt alle vier Stellenwerte",
    t2_b2: "Nullen bedeuten 'keine Hunderter' oder 'keine Zehner'",
    t2_b3: "Der Tausender ist immer die linke Ziffer",
    t2_inst: "Zerlege 4105 in Tausender, Hunderter, Zehner und Einer.",
    t2_h1: "4105 hat 4 Tausender, 1 Hunderter, keine Zehner, 5 Einer",
    t2_q: "Welche Zerlegung ist richtig für 3240?",
    t2_q_3240: "3000 + 200 + 40 + 0",
    t2_q_3204: "3000 + 200 + 0 + 4",
    t2_q_3024: "3000 + 0 + 20 + 4",
    t2_q_3200: "3000 + 200 + 4",
    t3_title: "Vierstellige Zahlen auf dem Zahlenstrahl",
    t3_text: "Zahlen wachsen von links nach rechts auf einem Zahlenstrahl. Von 0 bis 5000 sind Tausender große Sprünge. Verwende Stellenwerte, um Zahlen schnell zu finden.",
    t3_b1: "Der Zahlenstrahl geht 0, 1000, 2000, 3000, 4000, 5000",
    t3_b2: "Tausender helfen uns, den richtigen Bereich zu finden",
    t3_b3: "Wir finden jede vierstellige Zahl durch den Tausender",
    t3_inst: "Wo ist 2800 auf einem Zahlenstrahl von 0 bis 5000?",
    t3_h1: "2800 = 2 Tausender + 800, also zwischen 2000 und 3000",
    t3_q: "Welche Zahl ist am nächsten bei 3500?",
    t3_q_2500: "2500",
    t3_q_3400: "3400",
    t3_q_4500: "4500",
    t3_q_1500: "1500",
  },
  hu: {
    explorer_title: "Nagy számok felfedezője",
    t1_title: "Ezresek, százasok, tízesek és egyesek",
    t1_text: "Egy négyjegyű szám négy helyiértékből áll: ezres, százas, tízes és egyes. Például: 3847 = 3 ezres + 8 százas + 4 tízes + 7 egyes.",
    t1_b1: "Az ezres a legnagyobb helyiérték",
    t1_b2: "Minden helyiérték 10-szer nagyobb a jobb oldali helyiértéknél",
    t1_b3: "Add össze mind a négy részt",
    t1_inst: "Mi az 4 ezres + 2 százas + 5 tízes + 9 egyes?",
    t1_h1: "Gondolkozz: 4000 + 200 + 50 + 9",
    t1_q: "Melyik szám az 5 ezres + 6 százas + 3 tízes + 1 egyes?",
    t1_q_5631: "5631",
    t1_q_5361: "5361",
    t1_q_5163: "5163",
    t1_q_5136: "5136",
    t2_title: "Nagy számok szétbontása",
    t2_text: "Bármilyen négyjegyű számot fel lehet bontani helyiértékeire. A 2643-nál: 2643 = 2000 + 600 + 40 + 3. Ez segít megérteni a számot.",
    t2_b1: "A szétbontás mutatja mind a négy helyiértéket",
    t2_b2: "A nullák azt jelentik, hogy nincsenek százasok vagy tízesek",
    t2_b3: "Az ezres az első számjegy",
    t2_inst: "Bontsd szét a 4105-öt ezresekre, százasokra, tízesekre és egyesekre.",
    t2_h1: "A 4105-ben: 4 ezres, 1 százas, 0 tízes, 5 egyes",
    t2_q: "Melyik szétbontás helyes a 3240-re?",
    t2_q_3240: "3000 + 200 + 40 + 0",
    t2_q_3204: "3000 + 200 + 0 + 4",
    t2_q_3024: "3000 + 0 + 20 + 4",
    t2_q_3200: "3000 + 200 + 4",
    t3_title: "Négyjegyű számok a számegyenesen",
    t3_text: "A számok balról jobbra nőnek a számegyenesen. A 0-tól 5000-ig terjedő számegyenesen az ezresek nagy ugrások. Helyiértékek segítségével gyorsan találunk számokat.",
    t3_b1: "A számegyenes: 0, 1000, 2000, 3000, 4000, 5000",
    t3_b2: "Az ezresek segítik a helyes szakasz megtalálásában",
    t3_b3: "Bármilyen négyjegyű számot az ezrese segítségével találunk",
    t3_inst: "Hol van a 2800 a 0-tól 5000-ig terjedő számegyenesen?",
    t3_h1: "2800 = 2 ezres + 800, szóval a 2000 és 3000 között",
    t3_q: "Melyik szám van legközelebb a 3500-hoz?",
    t3_q_2500: "2500",
    t3_q_3400: "3400",
    t3_q_4500: "4500",
    t3_q_1500: "1500",
  },
  ro: {
    explorer_title: "Explorare numere mari",
    t1_title: "Mii, sute, zeci și unități",
    t1_text: "Un număr cu patru cifre are patru valori poziționale: mii, sute, zeci și unități. De exemplu: 3847 = 3 mii + 8 sute + 4 zeci + 7 unități.",
    t1_b1: "Miile sunt cea mai mare valoare pozițională",
    t1_b2: "Fiecare valoare pozițională este de 10 ori mai mare decât cea din dreapta",
    t1_b3: "Adaugă toate patru părți împreună",
    t1_inst: "Ce este 4 mii + 2 sute + 5 zeci + 9 unități?",
    t1_h1: "Gândește: 4000 + 200 + 50 + 9",
    t1_q: "Care este numărul cu 5 mii + 6 sute + 3 zeci + 1 unitate?",
    t1_q_5631: "5631",
    t1_q_5361: "5361",
    t1_q_5163: "5163",
    t1_q_5136: "5136",
    t2_title: "Descompunerea numerelor mari",
    t2_text: "Putem descompune orice număr cu patru cifre în valorile sale poziționale. Pentru 2643: 2643 = 2000 + 600 + 40 + 3. Aceasta ne ajută să înțelegem numărul.",
    t2_b1: "Descompunerea arată toate patru valorile poziționale",
    t2_b2: "Zerourile înseamnă 'fără sute' sau 'fără zeci'",
    t2_b3: "Valoarea miilor este întotdeauna prima cifră",
    t2_inst: "Descompune 4105 în mii, sute, zeci și unități.",
    t2_h1: "4105 are 4 mii, 1 sută, fără zeci, 5 unități",
    t2_q: "Care descompunere este corectă pentru 3240?",
    t2_q_3240: "3000 + 200 + 40 + 0",
    t2_q_3204: "3000 + 200 + 0 + 4",
    t2_q_3024: "3000 + 0 + 20 + 4",
    t2_q_3200: "3000 + 200 + 4",
    t3_title: "Numere cu patru cifre pe linia numerelor",
    t3_text: "Numerele cresc de la stânga la dreapta pe linia numerelor. Pe o linie de la 0 la 5000, fiecare mie este un salt mare. Folosește valorile poziționale pentru a găsi numerele rapid.",
    t3_b1: "Linia numerelor merge 0, 1000, 2000, 3000, 4000, 5000",
    t3_b2: "Miile ne ajută să găsim secțiunea corectă",
    t3_b3: "Găsim orice număr cu patru cifre prin miile sale",
    t3_inst: "Unde este 2800 pe o linie de numere de la 0 la 5000?",
    t3_h1: "2800 = 2 mii + 800, deci între 2000 și 3000",
    t3_q: "Care este cel mai apropiat număr de 3500?",
    t3_q_2500: "2500",
    t3_q_3400: "3400",
    t3_q_4500: "4500",
    t3_q_1500: "1500",
  },
};

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    // ─ R1: Building thousands ─
    {
      type: "info",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <PlaceValueGridSvg number={3847} />,
      bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <PlaceValueGridSvg number={3847} />,
      questions: [
        {
          question: "t1_q",
          choices: ["t1_q_5631", "t1_q_5361", "t1_q_5163", "t1_q_5136"],
          answer: "t1_q_5631",
        },
      ],
    },

    // ─ R2: Decomposing 4-digit numbers ─
    {
      type: "info",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <DecompositionSvg4 number={2643} />,
      bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <DecompositionSvg4 number={2643} />,
      questions: [
        {
          question: "t2_q",
          choices: ["t2_q_3240", "t2_q_3204", "t2_q_3024", "t2_q_3200"],
          answer: "t2_q_3240",
        },
      ],
    },

    // ─ R3: Number line (0-5000) ─
    {
      type: "info",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <NumberLineSvg4 number={2800} />,
      bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <NumberLineSvg4 number={2800} />,
      questions: [
        {
          question: "t3_q",
          choices: ["t3_q_2500", "t3_q_3400", "t3_q_4500", "t3_q_1500"],
          answer: "t3_q_3400",
        },
        {
          question: "t1_q",
          choices: ["t1_q_5631", "t1_q_5361", "t1_q_5163", "t1_q_5136"],
          answer: "t1_q_5631",
        },
        {
          question: "t2_q",
          choices: ["t2_q_3240", "t2_q_3204", "t2_q_3024", "t2_q_3200"],
          answer: "t2_q_3240",
        },
      ],
    },
  ],
};

// ─── WRAPPER COMPONENT ─────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function PlaceValueExplorer4({ color = "#FFB84D", lang, onDone, onClose }: Props) {
  return (
    <ExplorerEngine
      def={EXPLORER_DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
      grade={4}
    />
  );
}
