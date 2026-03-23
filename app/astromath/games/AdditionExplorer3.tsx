"use client";
// AdditionExplorer3 — Addition Island (Commutative Property, Decomposition, Mental Math to 1000)
// Uses new topic-based ExplorerEngine mode

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Commutative property (Tauschaufgabe) ────────────────────────────────

const CommutativeSvg = memo(function CommutativeSvg({ group1 = 200, group2 = 300 }: { group1?: number; group2?: number }) {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="commG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#commG)" rx="16" />
      {/* Left group */}
      <g transform="translate(50, 50)">
        <rect width="50" height="50" fill="#00D4FF" opacity="0.3" rx="4" />
        <text x="25" y="28" fontSize="20" fontWeight="bold" fill="#00D4FF" textAnchor="middle">
          {group1}
        </text>
      </g>
      {/* Plus */}
      <text x="120" y="65" fontSize="16" fontWeight="bold" fill="#00D4FF" textAnchor="middle" opacity="0.6">
        +
      </text>
      {/* Right group */}
      <g transform="translate(140, 50)">
        <rect width="50" height="50" fill="#4ECDC4" opacity="0.3" rx="4" />
        <text x="25" y="28" fontSize="20" fontWeight="bold" fill="#4ECDC4" textAnchor="middle">
          {group2}
        </text>
      </g>
      <text x="120" y="128" fontSize="13" fontWeight="bold" fill="#0891B2" textAnchor="middle" opacity="0.7">
        = {group1 + group2}
      </text>
    </svg>
  );
});

// ─── SVG: Decomposition (Zahlzerlegung) ──────────────────────────────────────

const DecompositionAddSvg = memo(function DecompositionAddSvg({ total = 500, part1 = 200 }: { total?: number; part1?: number }) {
  const part2 = total - part1;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="decompG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#decompG)" rx="16" />
      {/* Total box top */}
      <g transform="translate(70, 20)">
        <rect width="100" height="35" fill="#10B981" opacity="0.2" rx="4" />
        <text x="50" y="22" fontSize="18" fontWeight="bold" fill="#10B981" textAnchor="middle">
          {total}
        </text>
      </g>
      {/* Arrow down */}
      <line x1="120" y1="60" x2="120" y2="75" stroke="#10B981" strokeWidth="2" opacity="0.4" markerEnd="url(#arrowhead)" />
      {/* Two parts bottom */}
      <g transform="translate(30, 85)">
        <rect width="45" height="35" fill="#10B981" opacity="0.3" rx="4" />
        <text x="22.5" y="22" fontSize="16" fontWeight="bold" fill="#10B981" textAnchor="middle">
          {part1}
        </text>
      </g>
      <text x="120" y="108" fontSize="12" fontWeight="bold" fill="#10B981" textAnchor="middle" opacity="0.5">
        +
      </text>
      <g transform="translate(165, 85)">
        <rect width="45" height="35" fill="#10B981" opacity="0.3" rx="4" />
        <text x="22.5" y="22" fontSize="16" fontWeight="bold" fill="#10B981" textAnchor="middle">
          {part2}
        </text>
      </g>
    </svg>
  );
});

// ─── SVG: Mental math on number line ──────────────────────────────────────────

const MentalMathLineSvg = memo(function MentalMathLineSvg({ start = 234, jump = 100 }: { start?: number; jump?: number }) {
  const end = start + jump;
  const min = Math.floor(start / 100) * 100;
  const max = Math.ceil(end / 100) * 100;

  return (
    <svg width="100%" viewBox="0 0 240 100">
      <defs>
        <linearGradient id="mentG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF9999" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="100" fill="url(#mentG)" rx="16" />

      {/* Number line 0-400 */}
      <line x1="20" y1="50" x2="220" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />

      {/* Hundred marks */}
      {[0, 100, 200, 300, 400].map((val) => {
        const pct = val / 400;
        return (
          <g key={val}>
            <line x1={20 + pct * 200} y1="45" x2={20 + pct * 200} y2="55" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
            <text x={20 + pct * 200} y="72" fontSize="9" fill="rgba(255,255,255,0.6)" textAnchor="middle">
              {val}
            </text>
          </g>
        );
      })}

      {/* Start marker */}
      <circle cx={20 + (start / 400) * 200} cy="50" r="5" fill="#FF6B6B" opacity="0.8" />
      <text x={20 + (start / 400) * 200} y="28" fontSize="11" fontWeight="bold" fill="#FF6B6B" textAnchor="middle">
        Start: {start}
      </text>

      {/* Jump arrow */}
      <path
        d={`M ${20 + (start / 400) * 200} 50 L ${20 + (end / 400) * 200} 50`}
        stroke="#FF6B6B"
        strokeWidth="2"
        fill="none"
        markerEnd="url(#arrowRed)"
        opacity="0.6"
      />

      {/* End marker */}
      <circle cx={20 + (end / 400) * 200} cy="50" r="5" fill="#00FF88" opacity="0.8" />
      <text x={20 + (end / 400) * 200} y="28" fontSize="11" fontWeight="bold" fill="#00FF88" textAnchor="middle">
        End: {end}
      </text>

      <defs>
        <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" fill="#FF6B6B" opacity="0.6" />
        </marker>
      </defs>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Addition Explorer",
    // Topic 1: Commutative property
    t1_title: "Swap & Still Same",
    t1_text: "When ADDING, order doesn't matter! 200 + 300 = 500 and 300 + 200 = 500. The answer is always the same!",
    t1_b1: "Numbers can swap places",
    t1_b2: "The sum stays the same",
    t1_b3: "Try: 100 + 400 and 400 + 100",
    t1_inst: "Add 300 + 200 to make 500!",
    t1_h1: "200 here, 300 there",
    t1_h2: "Together = 500 total",
    t1_q: "200 + 300 = 300 + ?",
    t1_q_200: "200",
    t1_q_300: "300",
    t1_q_500: "500",
    t1_q_100: "100",
    // Topic 2: Decomposition
    t2_title: "Break Apart Numbers",
    t2_text: "Big numbers are made from smaller numbers! 500 breaks into 200 and 300. It can also break into 100 and 400. Same number, different parts!",
    t2_b1: "A big number splits",
    t2_b2: "Into two smaller parts",
    t2_b3: "Add them = original",
    t2_inst: "If 500 = 200 + ?, what fills the blank?",
    t2_h1: "Start with 500, take away 200",
    t2_h2: "What's left = 300",
    t2_q: "600 = 400 + ?",
    t2_q_200: "200",
    t2_q_300: "300",
    t2_q_100: "100",
    t2_q_400: "400",
    // Topic 3: Mental math
    t3_title: "Number Line Addition",
    t3_text: "Use a number line to add! Start at 234, jump forward 100. Where do you land? 234 + 100 = 334!",
    t3_b1: "Start at the first number",
    t3_b2: "Jump forward by the second",
    t3_b3: "Where you land = answer",
    t3_inst: "What is 234 + 100?",
    t3_h1: "Start at 234, move 100 to the right",
    t3_h2: "You land at 334",
    t3_q: "345 + 100 = ?",
    t3_q_445: "445",
    t3_q_355: "355",
    t3_q_345: "345",
    t3_q_435: "435",
  },
  de: {
    explorer_title: "Addition entdecken",
    t1_title: "Tauschen und gleich",
    t1_text: "Beim ADDIEREN ist die Reihenfolge egal! 200 + 300 = 500 und 300 + 200 = 500. Das Ergebnis bleibt gleich!",
    t1_b1: "Zahlen können Plätze tauschen",
    t1_b2: "Die Summe bleibt gleich",
    t1_b3: "Versuche: 100 + 400 und 400 + 100",
    t1_inst: "Addiere 300 + 200, um 500 zu machen!",
    t1_h1: "200 hier, 300 dort",
    t1_h2: "Zusammen = 500 insgesamt",
    t1_q: "200 + 300 = 300 + ?",
    t1_q_200: "200",
    t1_q_300: "300",
    t1_q_500: "500",
    t1_q_100: "100",
    t2_title: "Zahlen auseinander nehmen",
    t2_text: "Große Zahlen bestehen aus kleineren! 500 teilt sich in 200 und 300. Es kann sich auch in 100 und 400 teilen. Gleiche Zahl, verschiedene Teile!",
    t2_b1: "Eine große Zahl teilt sich",
    t2_b2: "In zwei kleinere Teile",
    t2_b3: "Addiere sie = original",
    t2_inst: "Wenn 500 = 200 + ?, was ist das Fragezeichen?",
    t2_h1: "Beginne mit 500, nimm 200 weg",
    t2_h2: "Was bleibt = 300",
    t2_q: "600 = 400 + ?",
    t2_q_200: "200",
    t2_q_300: "300",
    t2_q_100: "100",
    t2_q_400: "400",
    t3_title: "Zahlenstrahl-Addition",
    t3_text: "Benutze einen Zahlenstrahl zum Addieren! Starte bei 234, springe 100 vorwärts. Wo landest du? 234 + 100 = 334!",
    t3_b1: "Starte bei der ersten Zahl",
    t3_b2: "Springe vorwärts um die zweite",
    t3_b3: "Wo du landest = die Antwort",
    t3_inst: "Was ist 234 + 100?",
    t3_h1: "Starte bei 234, gehe 100 nach rechts",
    t3_h2: "Du landest bei 334",
    t3_q: "345 + 100 = ?",
    t3_q_445: "445",
    t3_q_355: "355",
    t3_q_345: "345",
    t3_q_435: "435",
  },
  hu: {
    explorer_title: "Összeadás felfedezés",
    t1_title: "Cserélj és ugyanaz",
    t1_text: "Az ÖSSZEADÁSNÁL a sorrend nem számít! 200 + 300 = 500 és 300 + 200 = 500. Az eredmény mindig ugyanaz!",
    t1_b1: "Számok helyet cserélhetnek",
    t1_b2: "Az összeg ugyanaz marad",
    t1_b3: "Próbáld: 100 + 400 és 400 + 100",
    t1_inst: "Adj össze 300 + 200-at, hogy 500 legyen!",
    t1_h1: "200 itt, 300 ott",
    t1_h2: "Együtt = 500 összesen",
    t1_q: "200 + 300 = 300 + ?",
    t1_q_200: "200",
    t1_q_300: "300",
    t1_q_500: "500",
    t1_q_100: "100",
    t2_title: "Számok szétdarabolása",
    t2_text: "A nagy számok kis számokból vannak! Az 500 200-ra és 300-ra bomlik. Bomolódhat 100-ra és 400-ra is. Ugyanaz a szám, más részek!",
    t2_b1: "Egy nagy szám szétválik",
    t2_b2: "Két kis részre",
    t2_b3: "Add össze = eredeti",
    t2_inst: "Ha 500 = 200 + ?, mi a kérdőjel?",
    t2_h1: "Indulj 500-tól, vegyél el 200-at",
    t2_h2: "Mi marad = 300",
    t2_q: "600 = 400 + ?",
    t2_q_200: "200",
    t2_q_300: "300",
    t2_q_100: "100",
    t2_q_400: "400",
    t3_title: "Számegyenes-összeadás",
    t3_text: "Használj számegyenest az összeadáshoz! Indulj 234-ből, ugorj előre 100-at. Hol érsz? 234 + 100 = 334!",
    t3_b1: "Indulj az első számnál",
    t3_b2: "Ugorj előre a másodikkal",
    t3_b3: "Ahol érsz = a válasz",
    t3_inst: "Mi az 234 + 100?",
    t3_h1: "Indulj 234-ből, menj 100-at jobbra",
    t3_h2: "334-nél érsz",
    t3_q: "345 + 100 = ?",
    t3_q_445: "445",
    t3_q_355: "355",
    t3_q_345: "345",
    t3_q_435: "435",
  },
  ro: {
    explorer_title: "Explorare adunare",
    t1_title: "Schimbă și rămâi la fel",
    t1_text: "La ADUNARE, ordinea nu contează! 200 + 300 = 500 și 300 + 200 = 500. Răspunsul este întotdeauna același!",
    t1_b1: "Numerele pot schimba locul",
    t1_b2: "Suma rămâne aceeași",
    t1_b3: "Încearcă: 100 + 400 și 400 + 100",
    t1_inst: "Adună 300 + 200 pentru a face 500!",
    t1_h1: "200 aici, 300 acolo",
    t1_h2: "Împreună = 500 total",
    t1_q: "200 + 300 = 300 + ?",
    t1_q_200: "200",
    t1_q_300: "300",
    t1_q_500: "500",
    t1_q_100: "100",
    t2_title: "Sparge numerele în bucăți",
    t2_text: "Numerele mari sunt din numere mici! 500 se împarte în 200 și 300. Se poate și în 100 și 400. Același număr, alte bucăți!",
    t2_b1: "Un număr mare se despică",
    t2_b2: "În două numere mici",
    t2_b3: "Adună = originalul",
    t2_inst: "Dacă 500 = 200 + ?, ce e semnul întrebării?",
    t2_h1: "Începe cu 500, ia 200",
    t2_h2: "Ce rămâne = 300",
    t2_q: "600 = 400 + ?",
    t2_q_200: "200",
    t2_q_300: "300",
    t2_q_100: "100",
    t2_q_400: "400",
    t3_title: "Adunare pe linia numerelor",
    t3_text: "Folosește o linie de numere pentru adunare! Începe la 234, sari 100 înainte. Unde aterizezi? 234 + 100 = 334!",
    t3_b1: "Începe la primul număr",
    t3_b2: "Sari înainte cu al doilea",
    t3_b3: "Unde aterizezi = răspuns",
    t3_inst: "Ce este 234 + 100?",
    t3_h1: "Începe la 234, mergi 100 la dreapta",
    t3_h2: "Aterizezi la 334",
    t3_q: "345 + 100 = ?",
    t3_q_445: "445",
    t3_q_355: "355",
    t3_q_345: "345",
    t3_q_435: "435",
  },
};

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    // ─ R1: Commutative property ─
    {
      type: "info",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <CommutativeSvg group1={200} group2={300} />,
      bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t1_title",
      questions: [
        {
          question: "t1_q",
          choices: ["t1_q_100", "t1_q_200", "t1_q_300", "t1_q_500"],
          answer: "t1_q_200",
        },
      ],
    },

    // ─ R2: Decomposition ─
    {
      type: "info",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <DecompositionAddSvg total={500} part1={200} />,
      bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t2_title",
      questions: [
        {
          question: "t2_q",
          choices: ["t2_q_100", "t2_q_200", "t2_q_300", "t2_q_400"],
          answer: "t2_q_200",
        },
      ],
    },

    // ─ R3: Mental math on number line ─
    {
      type: "info",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <MentalMathLineSvg start={234} jump={100} />,
      bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t3_title",
      questions: [
        {
          question: "t3_q",
          choices: ["t3_q_345", "t3_q_355", "t3_q_435", "t3_q_445"],
          answer: "t3_q_445",
        },
        {
          question: "t1_q",
          choices: ["t1_q_100", "t1_q_200", "t1_q_300", "t1_q_500"],
          answer: "t1_q_200",
        },
        {
          question: "t2_q",
          choices: ["t2_q_100", "t2_q_200", "t2_q_300", "t2_q_400"],
          answer: "t2_q_200",
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

export default function AdditionExplorer3({ color = "#00D4FF", lang, onDone, onClose }: Props) {
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
