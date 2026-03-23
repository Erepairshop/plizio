"use client";
// PlaceValueExplorer3 — Place value discovery for Grade 3 (island i1)
// Uses ExplorerEngine with 3 topics: hundreds/tens/ones decomposition

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Place value visualization (3-digit breakdown) ─────────────────────

const PlaceValueSvg = memo(function PlaceValueSvg({ number = 347 }: { number?: number }) {
  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;

  return (
    <svg width="100%" viewBox="0 0 240 150">
      <defs>
        <linearGradient id="pvG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B44DFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#E6ACFF" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="150" fill="url(#pvG)" rx="16" />

      {/* Hundreds column */}
      <g transform="translate(40, 55)">
        {Array.from({ length: hundreds }, (_, i) => (
          <g key={i} transform={`translate(${(i % 2) * 12}, ${Math.floor(i / 2) * 12})`}>
            <rect width="10" height="10" fill="#B44DFF" opacity="0.7" rx="1" />
          </g>
        ))}
        <text x="0" y="45" fontSize="12" fontWeight="bold" fill="#B44DFF" textAnchor="start">{hundreds}00</text>
      </g>

      {/* Tens column */}
      <g transform="translate(110, 55)">
        {Array.from({ length: tens }, (_, i) => (
          <rect key={i} x={i * 12} y="0" width="10" height="10" fill="#FF6B6B" opacity="0.7" rx="1" />
        ))}
        <text x="0" y="45" fontSize="12" fontWeight="bold" fill="#FF6B6B" textAnchor="start">{tens}0</text>
      </g>

      {/* Ones column */}
      <g transform="translate(180, 55)">
        {Array.from({ length: ones }, (_, i) => (
          <circle key={i} cx={i * 8 + 4} cy="5" r="3" fill="#FFD700" opacity="0.8" />
        ))}
        <text x="0" y="45" fontSize="12" fontWeight="bold" fill="#FFD700" textAnchor="start">{ones}</text>
      </g>

      {/* Number display */}
      <text x="120" y="135" fontSize="18" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">{number}</text>
    </svg>
  );
});

// ─── SVG: Decomposition equation ────────────────────────────────────────────

const DecompositionSvg = memo(function DecompositionSvg({
  number = 347,
  highlighted = -1,
}: {
  number?: number;
  highlighted?: number;
}) {
  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;

  const parts = [hundreds * 100, tens * 10, ones];
  const colors = ["#B44DFF", "#FF6B6B", "#FFD700"];
  const labels = ["hundreds", "tens", "ones"];

  return (
    <svg width="100%" viewBox="0 0 240 100">
      <text x="120" y="20" fontSize="14" fontWeight="bold" fill="rgba(255,255,255,0.7)" textAnchor="middle">
        {number} = {parts.join(" + ")}
      </text>

      <g transform="translate(60, 45)">
        {parts.map((part, i) => (
          <g key={i} transform={`translate(${i * 50}, 0)`} opacity={highlighted === i || highlighted === -1 ? 1 : 0.5}>
            <rect width="40" height="28" fill={colors[i]} opacity="0.15" rx="6" />
            <text x="20" y="10" fontSize="11" fontWeight="bold" fill={colors[i]} textAnchor="middle">
              {part}
            </text>
            <text x="20" y="22" fontSize="9" fill={colors[i]} textAnchor="middle" opacity="0.8">
              {labels[i]}
            </text>
          </g>
        ))}
      </g>
    </svg>
  );
});

// ─── SVG: Number line with place values ──────────────────────────────────────

const NumberLinePVSvg = memo(function NumberLinePVSvg({ number = 347 }: { number?: number }) {
  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;

  return (
    <svg width="100%" viewBox="0 0 240 110">
      <defs>
        <linearGradient id="nlpvG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#7FE3DE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="110" fill="url(#nlpvG)" rx="16" />

      {/* Number line scale 0-400 */}
      <line x1="20" y1="50" x2="220" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />

      {/* Hundred marks */}
      {[0, 100, 200, 300, 400].map((val) => (
        <g key={val}>
          <line x1={20 + (val / 400) * 200} y1="45" x2={20 + (val / 400) * 200} y2="55" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
          <text x={20 + (val / 400) * 200} y="72" fontSize="10" fill="rgba(255,255,255,0.6)" textAnchor="middle">
            {val}
          </text>
        </g>
      ))}

      {/* Target position mark */}
      <circle
        cx={20 + (number / 400) * 200}
        cy="50"
        r="6"
        fill="rgba(255, 215, 0, 0.9)"
        stroke="rgba(255, 255, 255, 0.5)"
        strokeWidth="2"
      />
      <text x={20 + (number / 400) * 200} y="28" fontSize="12" fontWeight="bold" fill="#FFD700" textAnchor="middle">
        {number}
      </text>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Explorer meta
    explorer_title: "Place Value Explorer",
    // Topic 1: Hundreds-tens-ones
    t1_title: "Hundreds, Tens, and Ones",
    t1_text: "A three-digit number is made of three place values: hundreds, tens, and ones. For example, 347 = 3 hundreds + 4 tens + 7 ones.",
    t1_b1: "Each digit has a place value",
    t1_b2: "The leftmost digit is hundreds",
    t1_b3: "Add the parts together to get the number",
    t1_inst: "What is 5 hundreds + 3 tens + 2 ones?",
    t1_h1: "Think: 500 + 30 + 2",
    t1_h2: "5 hundreds = 500, 3 tens = 30, 2 ones = 2",
    t1_q: "Which number is 2 hundreds + 6 tens + 8 ones?",
    t1_q_268: "268",
    t1_q_286: "286",
    t1_q_628: "628",
    t1_q_862: "862",
    // Topic 2: Breaking numbers apart
    t2_title: "Breaking Numbers Apart",
    t2_text: "We can split any number into its hundreds, tens, and ones. This is called decomposition. For 534: 534 = 500 + 30 + 4",
    t2_b1: "Decomposition shows the place values",
    t2_b2: "Hundreds always go first",
    t2_b3: "Zeros mean 'no tens' or 'no ones'",
    t2_inst: "Break 407 into hundreds, tens, and ones.",
    t2_h1: "407 has 4 hundreds and 7 ones",
    t2_h2: "No tens, so it's 400 + 0 + 7",
    t2_q: "Which decomposition is correct for 520?",
    t2_q_500_20: "500 + 20 + 0",
    t2_q_500_2: "500 + 2 + 0",
    t2_q_50_20: "50 + 20 + 0",
    t2_q_5_2: "5 + 2 + 0",
    // Topic 3: Reading the number line
    t3_title: "Place Values on the Number Line",
    t3_text: "Numbers grow from left to right on a number line. Each hundred is 100 steps. Knowing place values helps us find numbers quickly on the line.",
    t3_b1: "The number line goes from 0 to 400 (or more)",
    t3_b2: "Hundreds are big jumps (0, 100, 200, 300...)",
    t3_b3: "We can locate any 3-digit number",
    t3_inst: "Where is 275 on a number line from 0 to 400?",
    t3_h1: "275 = 2 hundreds + 75, so it's past 200",
    t3_h2: "It's between 200 and 300, closer to 300",
    t3_q: "Which number is between 300 and 400 on the number line?",
    t3_q_250: "250",
    t3_q_350: "350",
    t3_q_150: "150",
    t3_q_450: "450",
  },
  de: {
    explorer_title: "Stellenwert-Entdecker",
    t1_title: "Hunderter, Zehner und Einer",
    t1_text: "Eine dreistellige Zahl besteht aus drei Stellenwerten: Hunderter, Zehner und Einer. Zum Beispiel: 347 = 3 Hunderter + 4 Zehner + 7 Einer.",
    t1_b1: "Jede Ziffer hat einen Stellenwert",
    t1_b2: "Die linke Ziffer ist der Hunderter",
    t1_b3: "Addiere die Teile zusammen",
    t1_inst: "Was ist 5 Hunderter + 3 Zehner + 2 Einer?",
    t1_h1: "Denk: 500 + 30 + 2",
    t1_h2: "5 Hunderter = 500, 3 Zehner = 30, 2 Einer = 2",
    t1_q: "Welche Zahl ist 2 Hunderter + 6 Zehner + 8 Einer?",
    t1_q_268: "268",
    t1_q_286: "286",
    t1_q_628: "628",
    t1_q_862: "862",
    t2_title: "Zahlen zerlegen",
    t2_text: "Wir können jede Zahl in Hunderter, Zehner und Einer aufteilen. Das heißt Zerlegung. Für 534: 534 = 500 + 30 + 4",
    t2_b1: "Zerlegung zeigt die Stellenwerte",
    t2_b2: "Hunderter kommen immer zuerst",
    t2_b3: "Nullen bedeuten 'keine Zehner' oder 'keine Einer'",
    t2_inst: "Zerlege 407 in Hunderter, Zehner und Einer.",
    t2_h1: "407 hat 4 Hunderter und 7 Einer",
    t2_h2: "Keine Zehner, also 400 + 0 + 7",
    t2_q: "Welche Zerlegung ist richtig für 520?",
    t2_q_500_20: "500 + 20 + 0",
    t2_q_500_2: "500 + 2 + 0",
    t2_q_50_20: "50 + 20 + 0",
    t2_q_5_2: "5 + 2 + 0",
    t3_title: "Stellenwerte auf dem Zahlenstrahl",
    t3_text: "Zahlen wachsen von links nach rechts auf einem Zahlenstrahl. Jeder Hunderter ist 100 Schritte. Wenn man Stellenwerte kennt, findet man Zahlen schnell.",
    t3_b1: "Der Zahlenstrahl geht von 0 bis 400 (oder mehr)",
    t3_b2: "Hunderter sind große Sprünge (0, 100, 200, 300...)",
    t3_b3: "Wir können jede dreistellige Zahl finden",
    t3_inst: "Wo ist 275 auf einem Zahlenstrahl von 0 bis 400?",
    t3_h1: "275 = 2 Hunderter + 75, also nach 200",
    t3_h2: "Es ist zwischen 200 und 300, näher bei 300",
    t3_q: "Welche Zahl liegt zwischen 300 und 400?",
    t3_q_250: "250",
    t3_q_350: "350",
    t3_q_150: "150",
    t3_q_450: "450",
  },
  hu: {
    explorer_title: "Helyiérték-felfedező",
    t1_title: "Százas, tízes és egyes",
    t1_text: "Egy háromjegyű szám három helyiértékből áll: százas, tízes és egyes. Például: 347 = 3 százas + 4 tízes + 7 egyes.",
    t1_b1: "Minden számjegynek van helyiértéke",
    t1_b2: "A bal szélső számjegy a százas",
    t1_b3: "Add össze az részeket",
    t1_inst: "Mi az 5 százas + 3 tízes + 2 egyes?",
    t1_h1: "Gondolkozz: 500 + 30 + 2",
    t1_h2: "5 százas = 500, 3 tízes = 30, 2 egyes = 2",
    t1_q: "Melyik szám az 2 százas + 6 tízes + 8 egyes?",
    t1_q_268: "268",
    t1_q_286: "286",
    t1_q_628: "628",
    t1_q_862: "862",
    t2_title: "Számok szétbontása",
    t2_text: "Bármilyen számot fel lehet bontani százasra, tízesre és egyesre. Ez a szétbontás. A 534-nél: 534 = 500 + 30 + 4",
    t2_b1: "A szétbontás mutatja a helyiértékeket",
    t2_b2: "A százas mindig az első",
    t2_b3: "A nullák azt jelentik, hogy 'nincsenek tízesek' vagy 'nincsenek egyesek'",
    t2_inst: "Bontsd szét a 407-et százasra, tízesre és egyesre.",
    t2_h1: "A 407-ben van 4 százas és 7 egyes",
    t2_h2: "Nincsenek tízesek, szóval 400 + 0 + 7",
    t2_q: "Melyik szétbontás helyes az 520-ra?",
    t2_q_500_20: "500 + 20 + 0",
    t2_q_500_2: "500 + 2 + 0",
    t2_q_50_20: "50 + 20 + 0",
    t2_q_5_2: "5 + 2 + 0",
    t3_title: "Helyiértékek a számegyenesen",
    t3_text: "A számok balról jobbra nőnek a számegyenesen. Mindegyik százas 100 lépés. Ha ismerjük a helyiértékeket, gyorsan találunk számokat.",
    t3_b1: "A számegyenes 0-tól 400-ig megy (vagy több)",
    t3_b2: "A százasok nagy ugrások (0, 100, 200, 300...)",
    t3_b3: "Bármelyik háromjegyű számot meg tudjuk találni",
    t3_inst: "Hol van a 275 a 0-tól 400-ig tartó számegyenesen?",
    t3_h1: "275 = 2 százas + 75, szóval a 200 után",
    t3_h2: "A 200 és 300 között van, közelebb a 300-hoz",
    t3_q: "Melyik szám van 300 és 400 között?",
    t3_q_250: "250",
    t3_q_350: "350",
    t3_q_150: "150",
    t3_q_450: "450",
  },
  ro: {
    explorer_title: "Explorare valori poziționale",
    t1_title: "Sute, zeci și unități",
    t1_text: "Un număr cu trei cifre este format din trei valori poziționale: sute, zeci și unități. De exemplu: 347 = 3 sute + 4 zeci + 7 unități.",
    t1_b1: "Fiecare cifră are o valoare pozițională",
    t1_b2: "Cifra din stânga sunt sutele",
    t1_b3: "Adaugă părțile pentru a obține numărul",
    t1_inst: "Ce este 5 sute + 3 zeci + 2 unități?",
    t1_h1: "Gândește: 500 + 30 + 2",
    t1_h2: "5 sute = 500, 3 zeci = 30, 2 unități = 2",
    t1_q: "Care este numărul cu 2 sute + 6 zeci + 8 unități?",
    t1_q_268: "268",
    t1_q_286: "286",
    t1_q_628: "628",
    t1_q_862: "862",
    t2_title: "Descompunerea numerelor",
    t2_text: "Putem descompune orice număr în sute, zeci și unități. Aceasta se numește descompunere. Pentru 534: 534 = 500 + 30 + 4",
    t2_b1: "Descompunerea arată valorile poziționale",
    t2_b2: "Sutele vin întotdeauna primele",
    t2_b3: "Zerourile înseamnă 'fără zeci' sau 'fără unități'",
    t2_inst: "Descompune 407 în sute, zeci și unități.",
    t2_h1: "407 are 4 sute și 7 unități",
    t2_h2: "Fără zeci, deci 400 + 0 + 7",
    t2_q: "Care descompunere este corectă pentru 520?",
    t2_q_500_20: "500 + 20 + 0",
    t2_q_500_2: "500 + 2 + 0",
    t2_q_50_20: "50 + 20 + 0",
    t2_q_5_2: "5 + 2 + 0",
    t3_title: "Valori poziționale pe linia numerelor",
    t3_text: "Numerele cresc de la stânga la dreapta pe linia numerelor. Fiecare sută este 100 pași. Dacă cunoaștem valorile poziționale, găsim numerele rapid.",
    t3_b1: "Linia numerelor merge de la 0 la 400 (sau mai mult)",
    t3_b2: "Sutele sunt salturi mari (0, 100, 200, 300...)",
    t3_b3: "Putem localiza orice număr cu trei cifre",
    t3_inst: "Unde este 275 pe o linie de numere de la 0 la 400?",
    t3_h1: "275 = 2 sute + 75, deci după 200",
    t3_h2: "Este între 200 și 300, mai aproape de 300",
    t3_q: "Care număr este între 300 și 400?",
    t3_q_250: "250",
    t3_q_350: "350",
    t3_q_150: "150",
    t3_q_450: "450",
  },
};

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔢",
  rounds: [
    // ─ R1: Hundreds-tens-ones composition ─
    {
      type: "info",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <PlaceValueSvg number={347} />,
      bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <PlaceValueSvg number={347} />,
      questions: [
        {
          question: "t1_q",
          choices: ["t1_q_268", "t1_q_286", "t1_q_628", "t1_q_862"],
          answer: "t1_q_268",
        },
      ],
    },

    // ─ R2: Decomposing numbers ─
    {
      type: "info",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <DecompositionSvg number={534} />,
      bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <DecompositionSvg number={534} />,
      questions: [
        {
          question: "t2_q",
          choices: ["t2_q_500_20", "t2_q_500_2", "t2_q_50_20", "t2_q_5_2"],
          answer: "t2_q_500_20",
        },
      ],
    },

    // ─ R3: Number line and place values ─
    {
      type: "info",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <NumberLinePVSvg number={275} />,
      bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <NumberLinePVSvg number={275} />,
      questions: [
        {
          question: "t3_q",
          choices: ["t3_q_250", "t3_q_350", "t3_q_150", "t3_q_450"],
          answer: "t3_q_350",
        },
        {
          question: "t1_q",
          choices: ["t1_q_268", "t1_q_286", "t1_q_628", "t1_q_862"],
          answer: "t1_q_268",
        },
        {
          question: "t2_q",
          choices: ["t2_q_500_20", "t2_q_500_2", "t2_q_50_20", "t2_q_5_2"],
          answer: "t2_q_500_20",
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

export default function PlaceValueExplorer3({ color = "#B44DFF", lang, onDone, onClose }: Props) {
  return (
    <ExplorerEngine
      def={EXPLORER_DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
      grade={3}
    />
  );
}
