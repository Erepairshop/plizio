"use client";
// MultiplicationExplorer3 — Multiplication Island (Repeated Addition, Groups, Times Tables)
// Uses new topic-based ExplorerEngine mode

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Repeated addition (same groups) ────────────────────────────────────

const RepeatedAdditionSvg = memo(function RepeatedAdditionSvg({ groups = 4, each = 3 }: { groups?: number; each?: number }) {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="repaddG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B44DFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D88FFF" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#repaddG)" rx="16" />

      {/* Groups of objects */}
      {Array.from({ length: groups }, (_, g) => {
        const startX = 20 + (g % 2) * 110;
        const startY = 35 + Math.floor(g / 2) * 50;
        return (
          <g key={g} transform={`translate(${startX}, ${startY})`}>
            {Array.from({ length: each }, (_, i) => (
              <circle key={i} cx={i * 18 + 10} cy="10" r="6" fill="#B44DFF" opacity="0.7" />
            ))}
            <text x={each * 9 + 10} y="30" fontSize="11" fontWeight="bold" fill="#B44DFF">
              {each}
            </text>
          </g>
        );
      })}

      {/* Result */}
      <text x="120" y="128" fontSize="13" fontWeight="bold" fill="#8B5FBF" textAnchor="middle" opacity="0.8">
        {groups} × {each} = {groups * each}
      </text>
    </svg>
  );
});

// ─── SVG: Groups visualization ────────────────────────────────────────────────

const GroupsSvg = memo(function GroupsSvg({ rows = 3, cols = 5 }: { rows?: number; cols?: number }) {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="grpG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B44DFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D88FFF" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#grpG)" rx="16" />

      {/* Grid of objects */}
      <g transform="translate(40, 30)">
        {Array.from({ length: rows * cols }, (_, i) => {
          const row = Math.floor(i / cols);
          const col = i % cols;
          const x = col * 24;
          const y = row * 24;
          return (
            <circle key={i} cx={x} cy={y} r="5" fill="#B44DFF" opacity="0.7" />
          );
        })}
      </g>

      {/* Labels */}
      <text x="120" y="128" fontSize="13" fontWeight="bold" fill="#8B5FBF" textAnchor="middle" opacity="0.8">
        {rows} rows × {cols} cols = {rows * cols}
      </text>
    </svg>
  );
});

// ─── SVG: Skip counting (number line) ────────────────────────────────────────

const SkipCountingSvg = memo(function SkipCountingSvg({ step = 3, count = 4 }: { step?: number; count?: number }) {
  const max = step * count;
  const intervals = 5;

  return (
    <svg width="100%" viewBox="0 0 240 100">
      <defs>
        <linearGradient id="skipG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B44DFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D88FFF" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="100" fill="url(#skipG)" rx="16" />

      {/* Number line 0 to max+5 */}
      <line x1="20" y1="50" x2="220" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />

      {/* Tick marks */}
      {Array.from({ length: intervals + 1 }, (_, i) => {
        const val = (i * max) / intervals;
        const pct = val / max;
        const x = 20 + pct * 200;
        const isMultiple = val % step === 0 && val !== 0;
        return (
          <g key={i}>
            <line x1={x} y1={isMultiple ? 43 : 46} x2={x} y2={isMultiple ? 57 : 54} stroke={isMultiple ? "#B44DFF" : "rgba(255,255,255,0.3)"} strokeWidth={isMultiple ? 2 : 1} />
            <text x={x} y="72" fontSize="9" fill={isMultiple ? "#B44DFF" : "rgba(255,255,255,0.6)"} textAnchor="middle" fontWeight={isMultiple ? "bold" : "normal"}>
              {Math.round(val)}
            </text>
          </g>
        );
      })}

      {/* Jumps */}
      {Array.from({ length: count }, (_, i) => {
        const x1 = 20 + ((i * step) / max) * 200;
        const x2 = 20 + (((i + 1) * step) / max) * 200;
        return (
          <g key={`jump-${i}`}>
            <path
              d={`M ${x1} 50 L ${x2} 50`}
              stroke="#B44DFF"
              strokeWidth="2.5"
              fill="none"
              opacity="0.6"
              markerEnd="url(#arrowPurple)"
            />
          </g>
        );
      })}

      <defs>
        <marker id="arrowPurple" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#B44DFF" opacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Multiplication Explorer",
    // Topic 1: Repeated addition
    t1_title: "Multiplication as Repeated Addition",
    t1_text: "Multiplication is adding the same number over and over! 4 × 3 means 4 groups of 3, which is 3 + 3 + 3 + 3 = 12.",
    t1_b1: "Same groups added together",
    t1_b2: "4 × 3 means four groups of 3",
    t1_b3: "Same as 3 + 3 + 3 + 3",
    t1_inst: "Build 3 groups of 4!",
    t1_h1: "You need 3 groups, each with 4 items",
    t1_h2: "Total = 4 + 4 + 4 = 12",
    t1_q: "3 × 2 means how many total?",
    t1_q_3: "3",
    t1_q_5: "5",
    t1_q_6: "6",
    t1_q_9: "9",
    // Topic 2: Groups and arrays
    t2_title: "Rows and Columns",
    t2_text: "Arrange objects in rows and columns! A 3 × 5 array has 3 rows with 5 dots each. That's 15 dots total!",
    t2_b1: "Rows go across",
    t2_b2: "Columns go down",
    t2_b3: "Row count × column count = total",
    t2_inst: "How many dots in a 4 × 3 array?",
    t2_h1: "4 rows, 3 dots per row",
    t2_h2: "Total = 4 × 3 = 12",
    t2_q: "A 2 × 6 array has how many dots?",
    t2_q_8: "8",
    t2_q_12: "12",
    t2_q_16: "16",
    t2_q_10: "10",
    // Topic 3: Skip counting
    t3_title: "Skip Counting on a Line",
    t3_text: "Use skip counting to multiply! To find 4 × 3, skip count by 3s four times: 3, 6, 9, 12!",
    t3_b1: "Start at 0",
    t3_b2: "Jump by the second number",
    t3_b3: "Count the jumps",
    t3_inst: "What is 5 × 2? Skip count by 2s!",
    t3_h1: "Jump by 2 five times: 2, 4, 6, 8, 10",
    t3_h2: "You land at 10",
    t3_q: "4 × 3 = ? (skip count by 3s)",
    t3_q_7: "7",
    t3_q_12: "12",
    t3_q_15: "15",
    t3_q_16: "16",
  },
  de: {
    explorer_title: "Einmaleins entdecken",
    t1_title: "Multiplikation als wiederholte Addition",
    t1_text: "Multiplikation ist das Addieren der gleichen Zahl immer wieder! 4 × 3 bedeutet 4 Gruppen von 3, das ist 3 + 3 + 3 + 3 = 12.",
    t1_b1: "Gleiche Gruppen addiert",
    t1_b2: "4 × 3 bedeutet vier Gruppen von 3",
    t1_b3: "Gleich wie 3 + 3 + 3 + 3",
    t1_inst: "Baue 3 Gruppen von 4!",
    t1_h1: "Du brauchst 3 Gruppen, jede mit 4 Gegenständen",
    t1_h2: "Insgesamt = 4 + 4 + 4 = 12",
    t1_q: "3 × 2 bedeutet wie viele insgesamt?",
    t1_q_3: "3",
    t1_q_5: "5",
    t1_q_6: "6",
    t1_q_9: "9",
    t2_title: "Zeilen und Spalten",
    t2_text: "Ordne Gegenstände in Zeilen und Spalten! Ein 3 × 5 Feld hat 3 Zeilen mit je 5 Punkten. Das sind 15 Punkte insgesamt!",
    t2_b1: "Zeilen gehen quer",
    t2_b2: "Spalten gehen runter",
    t2_b3: "Zeilenzahl × Spaltenzahl = insgesamt",
    t2_inst: "Wie viele Punkte in einem 4 × 3 Feld?",
    t2_h1: "4 Zeilen, 3 Punkte pro Zeile",
    t2_h2: "Insgesamt = 4 × 3 = 12",
    t2_q: "Ein 2 × 6 Feld hat wie viele Punkte?",
    t2_q_8: "8",
    t2_q_12: "12",
    t2_q_16: "16",
    t2_q_10: "10",
    t3_title: "Zählen in Schritten auf der Linie",
    t3_text: "Benutze Schrittweise zum Multiplizieren! Um 4 × 3 zu finden, zähle in 3er-Schritten viermal: 3, 6, 9, 12!",
    t3_b1: "Starte bei 0",
    t3_b2: "Springe um die zweite Zahl",
    t3_b3: "Zähle die Sprünge",
    t3_inst: "Was ist 5 × 2? Zähle in 2er-Schritten!",
    t3_h1: "Springe 2er fünfmal: 2, 4, 6, 8, 10",
    t3_h2: "Du landest bei 10",
    t3_q: "4 × 3 = ? (zähle in 3er-Schritten)",
    t3_q_7: "7",
    t3_q_12: "12",
    t3_q_15: "15",
    t3_q_16: "16",
  },
  hu: {
    explorer_title: "Szorzás felfedezés",
    t1_title: "Szorzás mint ismételt összeadás",
    t1_text: "A szorzás ugyanolyan szám újra és újra összeadása! 4 × 3 azt jelenti, 4 csoport 3-ból, ami 3 + 3 + 3 + 3 = 12.",
    t1_b1: "Azonos csoportok összeadva",
    t1_b2: "4 × 3 jelentése: négy csoport 3-ból",
    t1_b3: "Ugyanaz, mint 3 + 3 + 3 + 3",
    t1_inst: "Építsd meg a 3 csoport 4-ből!",
    t1_h1: "3 csoportra van szükséged, mindegyikben 4 tárgy",
    t1_h2: "Összesen = 4 + 4 + 4 = 12",
    t1_q: "3 × 2 hány összesen?",
    t1_q_3: "3",
    t1_q_5: "5",
    t1_q_6: "6",
    t1_q_9: "9",
    t2_title: "Sorok és oszlopok",
    t2_text: "Rendezd az objektumokat sorokba és oszlopokba! Egy 3 × 5-ös tábla 3 sorral, mindegyikben 5 pont. Ez 15 pont összesen!",
    t2_b1: "Sorok jobbra mennek",
    t2_b2: "Oszlopok lefelé mennek",
    t2_b3: "Sororszám × oszloposzám = összesen",
    t2_inst: "Hány pont van egy 4 × 3-as táblában?",
    t2_h1: "4 sor, 3 pont soronként",
    t2_h2: "Összesen = 4 × 3 = 12",
    t2_q: "Egy 2 × 6-os tábla hány pontot tartalmaz?",
    t2_q_8: "8",
    t2_q_12: "12",
    t2_q_16: "16",
    t2_q_10: "10",
    t3_title: "Lépegető számolás a vonalon",
    t3_text: "Használj lépegető számolást a szorzáshoz! 4 × 3 megtalálásához számolj 3-asával négyszer: 3, 6, 9, 12!",
    t3_b1: "Indulj a 0-tól",
    t3_b2: "Ugorj a második számmal",
    t3_b3: "Számold meg az ugrásokat",
    t3_inst: "Mi az 5 × 2? Számolj 2-esével!",
    t3_h1: "Ugorj 2-esen ötször: 2, 4, 6, 8, 10",
    t3_h2: "10-nél érsz",
    t3_q: "4 × 3 = ? (számolj 3-asával)",
    t3_q_7: "7",
    t3_q_12: "12",
    t3_q_15: "15",
    t3_q_16: "16",
  },
  ro: {
    explorer_title: "Explorare înmulțire",
    t1_title: "Înmulțire ca adunare repetată",
    t1_text: "Înmulțirea este adunarea aceluiași număr iar și iar! 4 × 3 înseamnă 4 grupuri de 3, care este 3 + 3 + 3 + 3 = 12.",
    t1_b1: "Aceleași grupuri adunate",
    t1_b2: "4 × 3 înseamnă patru grupuri de 3",
    t1_b3: "La fel ca 3 + 3 + 3 + 3",
    t1_inst: "Construiește 3 grupuri de 4!",
    t1_h1: "Ai nevoie de 3 grupuri, fiecare cu 4 obiecte",
    t1_h2: "Total = 4 + 4 + 4 = 12",
    t1_q: "3 × 2 înseamnă câte total?",
    t1_q_3: "3",
    t1_q_5: "5",
    t1_q_6: "6",
    t1_q_9: "9",
    t2_title: "Rânduri și coloane",
    t2_text: "Aranjează obiectele în rânduri și coloane! Un tablou 3 × 5 are 3 rânduri cu 5 puncte fiecare. Asta e 15 puncte total!",
    t2_b1: "Rândurile merg orizontal",
    t2_b2: "Coloanele merg vertical",
    t2_b3: "Rânduri × coloane = total",
    t2_inst: "Câte puncte într-un tablou 4 × 3?",
    t2_h1: "4 rânduri, 3 puncte pe rând",
    t2_h2: "Total = 4 × 3 = 12",
    t2_q: "Un tablou 2 × 6 are câte puncte?",
    t2_q_8: "8",
    t2_q_12: "12",
    t2_q_16: "16",
    t2_q_10: "10",
    t3_title: "Numărare cu salt pe linie",
    t3_text: "Folosește numărarea cu salt pentru înmulțire! Pentru a găsi 4 × 3, numără din 3 în 3 de patru ori: 3, 6, 9, 12!",
    t3_b1: "Început la 0",
    t3_b2: "Salt după al doilea număr",
    t3_b3: "Numără salturile",
    t3_inst: "Ce este 5 × 2? Numără din 2 în 2!",
    t3_h1: "Sari din 2 în 2 de cinci ori: 2, 4, 6, 8, 10",
    t3_h2: "Aterizezi la 10",
    t3_q: "4 × 3 = ? (numără din 3 în 3)",
    t3_q_7: "7",
    t3_q_12: "12",
    t3_q_15: "15",
    t3_q_16: "16",
  },
};

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    // ─ R1: Repeated addition ─
    {
      type: "info",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <RepeatedAdditionSvg groups={4} each={3} />,
      bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t1_title",
      questions: [
        {
          question: "t1_q",
          choices: ["t1_q_3", "t1_q_5", "t1_q_6", "t1_q_9"],
          answer: "t1_q_6",
        },
      ],
    },

    // ─ R2: Groups/array ─
    {
      type: "info",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <GroupsSvg rows={3} cols={5} />,
      bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t2_title",
      questions: [
        {
          question: "t2_q",
          choices: ["t2_q_8", "t2_q_10", "t2_q_12", "t2_q_16"],
          answer: "t2_q_12",
        },
      ],
    },

    // ─ R3: Skip counting ─
    {
      type: "info",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <SkipCountingSvg step={3} count={4} />,
      bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t3_title",
      questions: [
        {
          question: "t3_q",
          choices: ["t3_q_7", "t3_q_12", "t3_q_15", "t3_q_16"],
          answer: "t3_q_12",
        },
        {
          question: "t1_q",
          choices: ["t1_q_3", "t1_q_5", "t1_q_6", "t1_q_9"],
          answer: "t1_q_6",
        },
        {
          question: "t2_q",
          choices: ["t2_q_8", "t2_q_10", "t2_q_12", "t2_q_16"],
          answer: "t2_q_12",
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

export default function MultiplicationExplorer3({ color = "#B44DFF", lang, onDone, onClose }: Props) {
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
