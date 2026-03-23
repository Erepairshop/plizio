"use client";
// CountingExplorer — Counting, comparing & position for Grade 1 (island i1)
// Uses new topic-based mode: teach → interact → quiz per topic

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Counting Grid ─────────────────────────────────────────────────────

const CountingSvg = memo(function CountingSvg({ emoji = "🍎", count = 4 }: { emoji?: string; count?: number }) {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="cntG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#cntG)" rx="16" />
      <g transform="translate(120, 60)">
        {Array.from({ length: count }, (_, i) => {
          const cols = Math.min(count, 5);
          const rows = Math.ceil(count / cols);
          const row = Math.floor(i / cols);
          const col = i % cols;
          const x = (col - (Math.min(count - row * cols, cols)) / 2 + 0.5) * 36;
          const y = (row - rows / 2 + 0.5) * 36;
          return (
            <text key={i} x={x} y={y} fontSize="28" textAnchor="middle" dominantBaseline="middle" opacity="0.9">
              {emoji}
            </text>
          );
        })}
      </g>
      <text x="120" y="128" fontSize="13" fontWeight="bold" fill="#0891B2" textAnchor="middle" opacity="0.7">
        = {count}
      </text>
    </svg>
  );
});

// ─── SVG: Comparison ─────────────────────────────────────────────────────────

const CompareSvg = memo(function CompareSvg({
  leftEmoji = "🐱", leftCount = 3, rightEmoji = "🐶", rightCount = 5,
}: { leftEmoji?: string; leftCount?: number; rightEmoji?: string; rightCount?: number }) {
  const renderGroup = (emoji: string, count: number, cx: number) => (
    <g transform={`translate(${cx}, 55)`}>
      {Array.from({ length: count }, (_, i) => {
        const cols = Math.min(count, 3);
        const row = Math.floor(i / cols);
        const col = i % cols;
        return (
          <text key={i} x={(col - Math.min(count - row * cols, cols) / 2 + 0.5) * 22} y={(row - Math.ceil(count / cols) / 2 + 0.5) * 24} fontSize="20" textAnchor="middle" dominantBaseline="middle">
            {emoji}
          </text>
        );
      })}
      <text x={0} y={50} fontSize="14" fontWeight="bold" fill="#06B6D4" textAnchor="middle">{count}</text>
    </g>
  );
  return (
    <svg width="100%" viewBox="0 0 240 130">
      <defs>
        <linearGradient id="cmpG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="130" fill="url(#cmpG)" rx="16" />
      {renderGroup(leftEmoji, leftCount, 65)}
      <text x="120" y="60" fontSize="16" fontWeight="bold" fill="#10B981" textAnchor="middle" opacity="0.5">?</text>
      {renderGroup(rightEmoji, rightCount, 175)}
    </svg>
  );
});

// ─── SVG: Number Line ────────────────────────────────────────────────────────

const NumberLineSvg = memo(function NumberLineSvg({ highlight = 5 }: { highlight?: number }) {
  return (
    <svg width="100%" viewBox="0 0 240 90">
      <defs>
        <linearGradient id="nlG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B44DFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D88FFF" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="90" fill="url(#nlG)" rx="16" />
      {/* Number line */}
      <line x1="20" y1="45" x2="220" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
      {Array.from({ length: 11 }, (_, i) => {
        const x = 20 + i * 20;
        const isHl = i === highlight;
        return (
          <g key={i}>
            <line x1={x} y1="39" x2={x} y2="51" stroke={isHl ? "#B44DFF" : "rgba(255,255,255,0.3)"} strokeWidth={isHl ? 2.5 : 1.5} />
            <text x={x} y="67" fontSize={isHl ? "12" : "10"} fontWeight={isHl ? "800" : "500"} fill={isHl ? "#B44DFF" : "rgba(255,255,255,0.5)"} textAnchor="middle">
              {i}
            </text>
            {isHl && <circle cx={x} cy="33" r="5" fill="#B44DFF" opacity="0.8" />}
          </g>
        );
      })}
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Explorer meta
    explorer_title: "Counting Explorer",
    // Topic 1: Counting
    t1_title: "Counting Objects",
    t1_text: "To count objects, touch each one and say the number out loud: 1, 2, 3... The last number you say is how many there are!",
    t1_b1: "Always start from 1",
    t1_b2: "Count each object exactly once",
    t1_b3: "The last number is the total",
    t1_inst: "Move 5 apples into the basket!",
    t1_h1: "Count them one by one — how many do you need?",
    t1_h2: "You need exactly 5 apples in the basket",
    t1_q: "How many stars are in this picture?",
    t1_q_7: "7",
    t1_q_5: "5",
    t1_q_6: "6",
    t1_q_8: "8",
    // Topic 2: Comparing
    t2_title: "Comparing Numbers",
    t2_text: "To compare two groups, count each group. The group with the bigger number has MORE. If both numbers are the same, they are EQUAL!",
    t2_b1: "Count each group separately",
    t2_b2: "The bigger number = more objects",
    t2_b3: "Same number = equal",
    t2_inst: "Tap the number where 3 + 4 lands on the number line!",
    t2_h1: "Start at 3 and jump 4 steps forward",
    t2_h2: "3 + 4 = 7 — tap number 7!",
    t2_q: "Which group has MORE: 6 cats or 4 dogs?",
    t2_q_cats: "6 cats",
    t2_q_dogs: "4 dogs",
    t2_q_equal: "They are equal",
    t2_q_idk: "Can't tell",
    // Topic 3: Number neighbors
    t3_title: "Number Neighbors",
    t3_text: "Every number has neighbors! The number BEFORE is one less, the number AFTER is one more. For example: 4 is before 5, and 6 is after 5.",
    t3_b1: "The number before = one less",
    t3_b2: "The number after = one more",
    t3_b3: "Together: before – number – after",
    t3_inst: "Tap the number that comes AFTER 6 on the number line!",
    t3_h1: "What is one more than 6?",
    t3_h2: "6 + 1 = 7 — tap number 7!",
    t3_q: "What number comes BEFORE 8?",
    t3_q_7: "7",
    t3_q_9: "9",
    t3_q_6: "6",
    t3_q_8: "8",
  },
  de: {
    explorer_title: "Zählen entdecken",
    t1_title: "Gegenstände zählen",
    t1_text: "Um Gegenstände zu zählen, berühre jeden einzelnen und sage die Zahl laut: 1, 2, 3... Die letzte Zahl ist die Gesamtzahl!",
    t1_b1: "Fang immer bei 1 an",
    t1_b2: "Zähle jeden Gegenstand genau einmal",
    t1_b3: "Die letzte Zahl ist die Gesamtzahl",
    t1_inst: "Lege 5 Äpfel in den Korb!",
    t1_h1: "Zähle sie einzeln — wie viele brauchst du?",
    t1_h2: "Du brauchst genau 5 Äpfel im Korb",
    t1_q: "Wie viele Sterne sind auf dem Bild?",
    t1_q_7: "7",
    t1_q_5: "5",
    t1_q_6: "6",
    t1_q_8: "8",
    t2_title: "Zahlen vergleichen",
    t2_text: "Um zwei Gruppen zu vergleichen, zähle jede Gruppe. Die Gruppe mit der größeren Zahl hat MEHR. Wenn beide Zahlen gleich sind, sind sie GLEICH!",
    t2_b1: "Zähle jede Gruppe einzeln",
    t2_b2: "Die größere Zahl = mehr Gegenstände",
    t2_b3: "Gleiche Zahl = gleich viele",
    t2_inst: "Tippe auf die Zahl, wo 3 + 4 auf dem Zahlenstrahl landet!",
    t2_h1: "Starte bei 3 und springe 4 Schritte vorwärts",
    t2_h2: "3 + 4 = 7 — tippe auf die 7!",
    t2_q: "Welche Gruppe hat MEHR: 6 Katzen oder 4 Hunde?",
    t2_q_cats: "6 Katzen",
    t2_q_dogs: "4 Hunde",
    t2_q_equal: "Gleich viele",
    t2_q_idk: "Kann man nicht sagen",
    t3_title: "Zahlennachbarn",
    t3_text: "Jede Zahl hat Nachbarn! Die Zahl DAVOR ist eins weniger, die Zahl DANACH ist eins mehr. Zum Beispiel: 4 kommt vor 5, und 6 kommt nach 5.",
    t3_b1: "Die Zahl davor = eins weniger",
    t3_b2: "Die Zahl danach = eins mehr",
    t3_b3: "Zusammen: davor – Zahl – danach",
    t3_inst: "Tippe auf die Zahl, die NACH der 6 kommt!",
    t3_h1: "Was ist eins mehr als 6?",
    t3_h2: "6 + 1 = 7 — tippe auf die 7!",
    t3_q: "Welche Zahl kommt VOR der 8?",
    t3_q_7: "7",
    t3_q_9: "9",
    t3_q_6: "6",
    t3_q_8: "8",
  },
  hu: {
    explorer_title: "Számolás felfedezés",
    t1_title: "Tárgyak számolása",
    t1_text: "A tárgyak számolásához érintsd meg mindegyiket, és mondd hangosan a számot: 1, 2, 3... Az utolsó szám a tárgyak száma!",
    t1_b1: "Mindig 1-től kezdj",
    t1_b2: "Minden tárgyat pontosan egyszer számolj",
    t1_b3: "Az utolsó szám az összesen",
    t1_inst: "Tegyél 5 almát a kosárba!",
    t1_h1: "Számold meg egyenként — hányra van szükséged?",
    t1_h2: "Pontosan 5 alma kell a kosárba",
    t1_q: "Hány csillag van a képen?",
    t1_q_7: "7",
    t1_q_5: "5",
    t1_q_6: "6",
    t1_q_8: "8",
    t2_title: "Számok összehasonlítása",
    t2_text: "Két csoport összehasonlításához számold meg mindkettőt. A nagyobb számú csoportban van TÖBB. Ha mindkét szám ugyanaz, akkor EGYENLŐEK!",
    t2_b1: "Számold meg külön mindkét csoportot",
    t2_b2: "A nagyobb szám = több tárgy",
    t2_b3: "Ugyanaz a szám = egyenlő",
    t2_inst: "Koppints arra a számra, ahova a 3 + 4 esik a számegyenesen!",
    t2_h1: "Indulj a 3-tól és ugorj 4 lépést előre",
    t2_h2: "3 + 4 = 7 — koppints a 7-re!",
    t2_q: "Melyik csoportban van TÖBB: 6 macska vagy 4 kutya?",
    t2_q_cats: "6 macska",
    t2_q_dogs: "4 kutya",
    t2_q_equal: "Egyenlő",
    t2_q_idk: "Nem tudom",
    t3_title: "Számszomszédok",
    t3_text: "Minden számnak van szomszédja! Az ELŐTTE lévő szám eggyel kisebb, az UTÁNA lévő eggyel nagyobb. Például: 4 van az 5 előtt, 6 van az 5 után.",
    t3_b1: "Az előtte lévő szám = eggyel kisebb",
    t3_b2: "Az utána lévő szám = eggyel nagyobb",
    t3_b3: "Együtt: előtte – szám – utána",
    t3_inst: "Koppints arra a számra, ami a 6 UTÁN jön a számegyenesen!",
    t3_h1: "Mi az eggyel több mint 6?",
    t3_h2: "6 + 1 = 7 — koppints a 7-re!",
    t3_q: "Melyik szám van a 8 ELŐTT?",
    t3_q_7: "7",
    t3_q_9: "9",
    t3_q_6: "6",
    t3_q_8: "8",
  },
  ro: {
    explorer_title: "Explorare numărare",
    t1_title: "Numărarea obiectelor",
    t1_text: "Pentru a număra obiectele, atinge fiecare și spune numărul cu voce tare: 1, 2, 3... Ultimul număr este totalul!",
    t1_b1: "Începe întotdeauna de la 1",
    t1_b2: "Numără fiecare obiect o singură dată",
    t1_b3: "Ultimul număr este totalul",
    t1_inst: "Pune 5 mere în coș!",
    t1_h1: "Numără-le pe rând — câte ai nevoie?",
    t1_h2: "Ai nevoie de exact 5 mere în coș",
    t1_q: "Câte stele sunt în imagine?",
    t1_q_7: "7",
    t1_q_5: "5",
    t1_q_6: "6",
    t1_q_8: "8",
    t2_title: "Compararea numerelor",
    t2_text: "Pentru a compara două grupuri, numără fiecare. Grupul cu numărul mai mare are MAI MULTE. Dacă sunt egale, sunt EGALE!",
    t2_b1: "Numără fiecare grup separat",
    t2_b2: "Numărul mai mare = mai multe obiecte",
    t2_b3: "Același număr = egale",
    t2_inst: "Atinge numărul unde 3 + 4 ajunge pe linia numerelor!",
    t2_h1: "Începe de la 3 și sari 4 pași înainte",
    t2_h2: "3 + 4 = 7 — atinge numărul 7!",
    t2_q: "Care grup are MAI MULTE: 6 pisici sau 4 câini?",
    t2_q_cats: "6 pisici",
    t2_q_dogs: "4 câini",
    t2_q_equal: "Sunt egale",
    t2_q_idk: "Nu se poate spune",
    t3_title: "Vecinii numerelor",
    t3_text: "Fiecare număr are vecini! Numărul DINAINTEA este cu unu mai mic, numărul DE DUPĂ este cu unu mai mare. De exemplu: 4 vine înainte de 5, iar 6 vine după 5.",
    t3_b1: "Numărul dinaintea = cu unu mai mic",
    t3_b2: "Numărul de după = cu unu mai mare",
    t3_b3: "Împreună: înainte – număr – după",
    t3_inst: "Atinge numărul care vine DUPĂ 6!",
    t3_h1: "Ce este cu unu mai mult decât 6?",
    t3_h2: "6 + 1 = 7 — atinge numărul 7!",
    t3_q: "Ce număr vine ÎNAINTE de 8?",
    t3_q_7: "7",
    t3_q_9: "9",
    t3_q_6: "6",
    t3_q_8: "8",
  },
};

// ─── Topic definitions ───────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // Topic 1: Counting objects (1-10)
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <CountingSvg emoji="🍎" count={7} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [3, 2],
      answer: 5,
      blockIcon: "🍎",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_5", "t1_q_6", "t1_q_7", "t1_q_8"],
      answer: "t1_q_7",
    },
    quizSvg: () => <CountingSvg emoji="⭐" count={7} />,
  },

  // Topic 2: Comparing numbers
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <CompareSvg leftEmoji="🐱" leftCount={6} rightEmoji="🐶" rightCount={4} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 10,
      start: 3,
      target: 7,
      showJumps: true,
      jumpCount: 4,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_cats", "t2_q_dogs", "t2_q_equal", "t2_q_idk"],
      answer: "t2_q_cats",
    },
    quizSvg: () => <CompareSvg leftEmoji="🐱" leftCount={6} rightEmoji="🐶" rightCount={4} />,
  },

  // Topic 3: Number neighbors (before/after)
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <NumberLineSvg highlight={5} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 10,
      start: 6,
      target: 7,
      showJumps: true,
      jumpCount: 1,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_6", "t3_q_7", "t3_q_8", "t3_q_9"],
      answer: "t3_q_7",
    },
    quizSvg: () => <NumberLineSvg highlight={8} />,
  },
];

// ─── Explorer definition ─────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔢",
  topics: TOPICS,
  rounds: [], // legacy — not used in topic mode
};

// ─── Export ──────────────────────────────────────────────────────────────────

const CountingExplorer = memo(function CountingExplorer({
  color = "#4ECDC4",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_counting" color={color} lang={lang} onDone={onDone} />;
});

export default CountingExplorer;
