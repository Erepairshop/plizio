"use client";
// MultiplicationExplorer4 — Multiplication strategies for Grade 4 (island i2)
// Uses ExplorerEngine with 3 topics: arrays, skip counting, number line jumps

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Array model (rows × columns) ────────────────────────────────────────

const ArrayModelSvg = memo(function ArrayModelSvg({ rows = 4, cols = 5 }: { rows?: number; cols?: number }) {
  const cellSize = Math.min(32, 160 / Math.max(rows, cols));
  const totalWidth = cols * cellSize;
  const totalHeight = rows * cellSize;
  const startX = (240 - totalWidth) / 2;
  const startY = (160 - totalHeight) / 2 + 10;

  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="arrG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B9D" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFB1D1" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#arrG)" rx="16" />

      {/* Array grid */}
      {Array.from({ length: rows }, (_, r) =>
        Array.from({ length: cols }, (_, c) => (
          <rect
            key={`${r}-${c}`}
            x={startX + c * cellSize}
            y={startY + r * cellSize}
            width={cellSize - 2}
            height={cellSize - 2}
            fill="#FF6B9D"
            opacity="0.75"
            rx="2"
          />
        ))
      )}

      {/* Labels */}
      <text x="120" y="140" fontSize="14" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">
        {rows} rows × {cols} columns = {rows * cols}
      </text>
    </svg>
  );
});

// ─── SVG: Skip counting visualization ──────────────────────────────────────────

const SkipCountingSvg = memo(function SkipCountingSvg({ skip = 5, count = 6 }: { skip?: number; count?: number }) {
  const numbers = Array.from({ length: count }, (_, i) => skip * (i + 1));
  const spacing = 200 / count;
  const startX = 20;

  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="skipG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4ECDC4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#7FE3DE" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#skipG)" rx="16" />

      {/* Number line with jumps */}
      <line x1="20" y1="50" x2="220" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />

      {/* Jumps and numbers */}
      {numbers.map((num, i) => {
        const x = startX + i * spacing;
        return (
          <g key={i}>
            {i > 0 && <path d={`M ${startX + (i - 1) * spacing} 50 Q ${x} 30 ${x} 50`} stroke="#4ECDC4" strokeWidth="2" fill="none" opacity="0.6" />}
            <circle cx={x} cy="50" r="5" fill="#4ECDC4" opacity="0.8" />
            <text x={x} y="80" fontSize="12" fontWeight="bold" fill="#4ECDC4" textAnchor="middle">
              {num}
            </text>
          </g>
        );
      })}

      {/* Title */}
      <text x="120" y="130" fontSize="13" fontWeight="bold" fill="rgba(255,255,255,0.75)" textAnchor="middle">
        Skip counting by {skip}: {numbers.join(", ")}
      </text>
    </svg>
  );
});

// ─── SVG: Number line with multiplication jumps ───────────────────────────────

const MultiplicationNumberLineSvg = memo(function MultiplicationNumberLineSvg({
  multiplier = 6,
  factor = 4,
}: {
  multiplier?: number;
  factor?: number;
}) {
  const product = multiplier * factor;
  const maxLine = Math.max(50, product * 1.5);
  const tickInterval = Math.ceil(maxLine / 5 / 10) * 10;
  const ticks = Array.from({ length: Math.floor(maxLine / tickInterval) + 1 }, (_, i) => i * tickInterval);

  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="mnlG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FFEA99" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#mnlG)" rx="16" />

      {/* Number line */}
      <line x1="20" y1="60" x2="220" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />

      {/* Ticks and labels */}
      {ticks.map((tick) => (
        <g key={tick}>
          <line x1={20 + (tick / maxLine) * 200} y1="55" x2={20 + (tick / maxLine) * 200} y2="65" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
          <text x={20 + (tick / maxLine) * 200} y="85" fontSize="9" fill="rgba(255,255,255,0.6)" textAnchor="middle">
            {tick}
          </text>
        </g>
      ))}

      {/* Jumps */}
      {Array.from({ length: factor }, (_, i) => {
        const from = i * multiplier;
        const to = (i + 1) * multiplier;
        const x1 = 20 + (from / maxLine) * 200;
        const x2 = 20 + (to / maxLine) * 200;
        const jumpHeight = 15 + i * 2;

        return (
          <path
            key={i}
            d={`M ${x1} 60 Q ${(x1 + x2) / 2} ${60 - jumpHeight} ${x2} 60`}
            stroke="#FFD700"
            strokeWidth="2"
            fill="none"
            opacity="0.8"
          />
        );
      })}

      {/* Result marker */}
      <circle cx={20 + (product / maxLine) * 200} cy="60" r="6" fill="#FFD700" opacity="0.9" />
      <text x={20 + (product / maxLine) * 200} y="35" fontSize="13" fontWeight="bold" fill="#FFD700" textAnchor="middle">
        {multiplier} × {factor} = {product}
      </text>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Multiplication Explorer",

    // Topic 1: Array model
    t1_title: "Multiplication Arrays",
    t1_text: "An array is a rectangular arrangement of objects in rows and columns. Arrays help us see multiplication. For example, 4 rows of 5 equals 4 × 5 = 20.",
    t1_b1: "Each row has the same number of objects",
    t1_b2: "Count the rows and columns to find the product",
    t1_b3: "Arrays work for any multiplication fact",
    t1_inst: "How many dots are in a 3 × 7 array?",
    t1_h1: "Three rows, seven columns, count all dots",
    t1_q: "What is 6 rows × 4 columns?",
    t1_q_24: "24",
    t1_q_10: "10",
    t1_q_26: "26",
    t1_q_20: "20",

    // Topic 2: Skip counting
    t2_title: "Skip Counting Strategy",
    t2_text: "Skip counting is counting by a number repeatedly. For multiplication, we skip count by one factor and count how many times. For example, 6 × 4 means skip by 6 four times: 6, 12, 18, 24.",
    t2_b1: "Skip counting helps us multiply without memorizing",
    t2_b2: "The jump size is the first number (factor)",
    t2_b3: "Count the jumps to find the product",
    t2_inst: "Skip count by 7 four times. What's the last number?",
    t2_h1: "7, 14, 21, 28 — the last number is 28",
    t2_q: "If we skip count by 8 three times, what do we get?",
    t2_q_24: "24",
    t2_q_32: "32",
    t2_q_16: "16",
    t2_q_40: "40",

    // Topic 3: Number line jumps
    t3_title: "Number Line Jumps for Multiplication",
    t3_text: "On a number line, we can show multiplication with jumps. Each jump represents one factor, and we make as many jumps as the other factor. For 5 × 3, we make 3 jumps of 5.",
    t3_b1: "Each jump is the same size (the first factor)",
    t3_b2: "The number of jumps equals the second factor",
    t3_b3: "Where we land is the product",
    t3_inst: "On a number line, make 4 jumps of 6. Where do you land?",
    t3_h1: "Jump: 6, 12, 18, 24 — you land on 24",
    t3_q: "What is 5 jumps of 7?",
    t3_q_35: "35",
    t3_q_40: "40",
    t3_q_30: "30",
    t3_q_42: "42",
  },
  de: {
    explorer_title: "Multiplikation Entdecker",
    t1_title: "Multiplikations-Arrays",
    t1_text: "Ein Array ist eine rechteckige Anordnung von Objekten in Reihen und Spalten. Arrays helfen uns, Multiplikation zu sehen. Zum Beispiel: 4 Reihen von 5 = 4 × 5 = 20.",
    t1_b1: "Jede Reihe hat die gleiche Anzahl von Objekten",
    t1_b2: "Zähle die Reihen und Spalten, um das Produkt zu finden",
    t1_b3: "Arrays funktionieren für jede Multiplikation",
    t1_inst: "Wie viele Punkte sind in einem 3 × 7 Array?",
    t1_h1: "Drei Reihen, sieben Spalten, alle Punkte zählen",
    t1_q: "Was ist 6 Reihen × 4 Spalten?",
    t1_q_24: "24",
    t1_q_10: "10",
    t1_q_26: "26",
    t1_q_20: "20",
    t2_title: "Zählstrategie in Schritten",
    t2_text: "Zählen in Schritten bedeutet, immer wieder um eine Zahl weiterzählen. Bei Multiplikation zählen wir in Schritten um einen Faktor. Zum Beispiel: 6 × 4 bedeutet viermal in Schritten von 6: 6, 12, 18, 24.",
    t2_b1: "Zählen in Schritten hilft, ohne zu memorieren",
    t2_b2: "Die Schrittgröße ist die erste Zahl (Faktor)",
    t2_b3: "Zähle die Schritte, um das Produkt zu finden",
    t2_inst: "Zähle viermal in Schritten von 7. Was ist die letzte Zahl?",
    t2_h1: "7, 14, 21, 28 — die letzte Zahl ist 28",
    t2_q: "Wenn wir dreimal in Schritten von 8 zählen, was bekommen wir?",
    t2_q_24: "24",
    t2_q_32: "32",
    t2_q_16: "16",
    t2_q_40: "40",
    t3_title: "Zahlenstrahl-Sprünge für Multiplikation",
    t3_text: "Auf einem Zahlenstrahl können wir Multiplikation mit Sprüngen zeigen. Jeder Sprung ist ein Faktor, und wir machen so viele Sprünge wie der andere Faktor. Für 5 × 3 machen wir 3 Sprünge von 5.",
    t3_b1: "Jeder Sprung ist gleich groß (der erste Faktor)",
    t3_b2: "Die Anzahl der Sprünge ist der zweite Faktor",
    t3_b3: "Wo wir landen, ist das Produkt",
    t3_inst: "Auf einem Zahlenstrahl mache 4 Sprünge von 6. Wo landest du?",
    t3_h1: "Sprünge: 6, 12, 18, 24 — du landest auf 24",
    t3_q: "Was ist 5 Sprünge von 7?",
    t3_q_35: "35",
    t3_q_40: "40",
    t3_q_30: "30",
    t3_q_42: "42",
  },
  hu: {
    explorer_title: "Szorzás felfedezője",
    t1_title: "Szorzás-táblázatok",
    t1_text: "A táblázat objektumoknak egy téglalap alakú elrendezése sorokba és oszlopokba. A táblázatok segítenek látni a szorzást. Például: 4 sor × 5 = 4 × 5 = 20.",
    t1_b1: "Minden sornak ugyanannyi objektuma van",
    t1_b2: "Számold meg a sorokat és oszlopokat a szorzat megtalálásához",
    t1_b3: "A táblázatok minden szorzásra működnek",
    t1_inst: "Hány pont van egy 3 × 7 táblázatban?",
    t1_h1: "Három sor, hét oszlop, minden pont számolása",
    t1_q: "Mi az 6 sor × 4 oszlop?",
    t1_q_24: "24",
    t1_q_10: "10",
    t1_q_26: "26",
    t1_q_20: "20",
    t2_title: "Lépésenkénti számolás",
    t2_text: "A lépésenkénti számolás azt jelenti, hogy ismételten egy számmal számolunk. Szorzásnál a lépésenkénti számolás az egyik tényezővel történik. Például: 6 × 4 azt jelenti, hogy 4-szer lépünk 6-tal: 6, 12, 18, 24.",
    t2_b1: "A lépésenkénti számolás segít memorizálás nélkül szorzni",
    t2_b2: "A lépés mérete az első szám (tényező)",
    t2_b3: "Számold meg a lépéseket a szorzat megtalálásához",
    t2_inst: "Lépésenként számolj 7-tel négyszer. Mi az utolsó szám?",
    t2_h1: "7, 14, 21, 28 — az utolsó szám 28",
    t2_q: "Ha 8-cal számolunk háromszor, mit kapunk?",
    t2_q_24: "24",
    t2_q_32: "32",
    t2_q_16: "16",
    t2_q_40: "40",
    t3_title: "Számegyenes ugrások szorzáshoz",
    t3_text: "Egy számegyenesen a szorzást ugrásokkal mutathatjuk. Minden ugrás egy tényező, és annyi ugrást csinálunk, mint a másik tényező. Az 5 × 3-nál 3 ugrást csinálunk 5-tel.",
    t3_b1: "Minden ugrás azonos méretű (az első tényező)",
    t3_b2: "Az ugrások száma a második tényező",
    t3_b3: "Ahol landolunk, az a szorzat",
    t3_inst: "Egy számegyenesen csináls 4 ugrást 6-tal. Hol leszel?",
    t3_h1: "Ugrások: 6, 12, 18, 24 — a 24-en leszel",
    t3_q: "Mi az 5 ugrás 7-tel?",
    t3_q_35: "35",
    t3_q_40: "40",
    t3_q_30: "30",
    t3_q_42: "42",
  },
  ro: {
    explorer_title: "Explorare înmulțire",
    t1_title: "Matrice de înmulțire",
    t1_text: "O matrice este o dispunere dreptunghiulară a obiectelor în rânduri și coloane. Matricele ne ajută să vedem înmulțirea. De exemplu: 4 rânduri de 5 = 4 × 5 = 20.",
    t1_b1: "Fiecare rând are același număr de obiecte",
    t1_b2: "Numără rândurile și coloanele pentru a găsi produsul",
    t1_b3: "Matricele funcționează pentru orice înmulțire",
    t1_inst: "Câte puncte sunt într-o matrice 3 × 7?",
    t1_h1: "Trei rânduri, șapte coloane, numără toate punctele",
    t1_q: "Ce este 6 rânduri × 4 coloane?",
    t1_q_24: "24",
    t1_q_10: "10",
    t1_q_26: "26",
    t1_q_20: "20",
    t2_title: "Strategie de numărare în salturi",
    t2_text: "Numărarea în salturi înseamnă să numeri repetat cu o număr. Pentru înmulțire, numărăm în salturi cu un factor. De exemplu: 6 × 4 înseamnă de 4 ori salturi de 6: 6, 12, 18, 24.",
    t2_b1: "Numărarea în salturi ne ajută fără a memora",
    t2_b2: "Dimensiunea saltului este primul număr (factor)",
    t2_b3: "Numără salturile pentru a găsi produsul",
    t2_inst: "Numără în salturi de 7 de patru ori. Care este ultimul număr?",
    t2_h1: "7, 14, 21, 28 — ultimul număr este 28",
    t2_q: "Dacă numărăm în salturi de 8 de trei ori, ce obținem?",
    t2_q_24: "24",
    t2_q_32: "32",
    t2_q_16: "16",
    t2_q_40: "40",
    t3_title: "Salturi pe linia numerelor pentru înmulțire",
    t3_text: "Pe o linie de numere, putem arăta înmulțirea cu salturi. Fiecare salt este un factor, și facem atâtea salturi cât celălalt factor. Pentru 5 × 3, facem 3 salturi de 5.",
    t3_b1: "Fiecare salt este aceeași dimensiune (primul factor)",
    t3_b2: "Numărul de salturi este egal cu al doilea factor",
    t3_b3: "Unde aterizăm este produsul",
    t3_inst: "Pe o linie de numere, fă 4 salturi de 6. Unde aterizezi?",
    t3_h1: "Salturi: 6, 12, 18, 24 — aterizezi pe 24",
    t3_q: "Ce sunt 5 salturi de 7?",
    t3_q_35: "35",
    t3_q_40: "40",
    t3_q_30: "30",
    t3_q_42: "42",
  },
};

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    // ─ R1: Array model ─
    {
      type: "info",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <ArrayModelSvg rows={4} cols={5} />,
      bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <ArrayModelSvg rows={6} cols={4} />,
      questions: [
        {
          question: "t1_q",
          choices: ["t1_q_24", "t1_q_10", "t1_q_26", "t1_q_20"],
          answer: "t1_q_24",
        },
      ],
    },

    // ─ R2: Skip counting ─
    {
      type: "info",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <SkipCountingSvg skip={6} count={4} />,
      bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <SkipCountingSvg skip={8} count={3} />,
      questions: [
        {
          question: "t2_q",
          choices: ["t2_q_24", "t2_q_32", "t2_q_16", "t2_q_40"],
          answer: "t2_q_24",
        },
      ],
    },

    // ─ R3: Number line jumps ─
    {
      type: "info",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <MultiplicationNumberLineSvg multiplier={5} factor={3} />,
      bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <MultiplicationNumberLineSvg multiplier={7} factor={5} />,
      questions: [
        {
          question: "t3_q",
          choices: ["t3_q_35", "t3_q_40", "t3_q_30", "t3_q_42"],
          answer: "t3_q_35",
        },
        {
          question: "t1_q",
          choices: ["t1_q_24", "t1_q_10", "t1_q_26", "t1_q_20"],
          answer: "t1_q_24",
        },
        {
          question: "t2_q",
          choices: ["t2_q_24", "t2_q_32", "t2_q_16", "t2_q_40"],
          answer: "t2_q_24",
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

export default function MultiplicationExplorer4({ color = "#FF6B9D", lang, onDone, onClose }: Props) {
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
