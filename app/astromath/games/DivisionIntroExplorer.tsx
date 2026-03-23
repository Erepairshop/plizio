"use client";
// DivisionIntroExplorer — Division introduction for Grade 2 (island i8)
// Uses new topic-based ExplorerEngine mode

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Sharing equally ────────────────────────────────────────────────────

const SharingSvg = memo(function SharingSvg({
  total = 12, people = 3, emoji = "🍪",
}: { total?: number; people?: number; emoji?: string }) {
  const perPerson = Math.floor(total / people);
  return (
    <svg width="100%" viewBox="0 0 240 145">
      <defs>
        <linearGradient id="shareG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="145" fill="url(#shareG)" rx="16" />
      {/* People plates */}
      {Array.from({ length: people }, (_, pi) => {
        const bw = 60; const bx = 15 + pi * (bw + 10);
        return (
          <g key={pi}>
            <rect x={bx} y="16" width={bw} height="90" rx="10"
              fill="rgba(255,255,255,0.07)" stroke="rgba(16,185,129,0.4)" strokeWidth="1.5" />
            <text x={bx + bw / 2} y="30" fontSize="9" fill="#10B981"
              textAnchor="middle" opacity="0.7">Person {pi + 1}</text>
            {Array.from({ length: perPerson }, (_, i) => {
              const ic = i % 3; const ir = Math.floor(i / 3);
              return (
                <text key={i} x={bx + 12 + ic * 18} y={48 + ir * 20}
                  fontSize="16" textAnchor="middle" dominantBaseline="middle">{emoji}</text>
              );
            })}
          </g>
        );
      })}
      <text x="120" y="128" fontSize="11" fontWeight="800"
        fill="#10B981" textAnchor="middle" opacity="0.85">
        {total} ÷ {people} = {perPerson} each
      </text>
    </svg>
  );
});

// ─── SVG: Division on number line ────────────────────────────────────────────

const DivNLSvg = memo(function DivNLSvg({ total = 15, step = 3 }: { total?: number; step?: number }) {
  const jumps = total / step;
  const max = total + 2;
  return (
    <svg width="100%" viewBox="0 0 240 100">
      <defs>
        <linearGradient id="divNLG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="100" fill="url(#divNLG)" rx="16" />
      <line x1="15" y1="55" x2="225" y2="55"
        stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
      {Array.from({ length: max + 1 }, (_, n) => {
        const x = 15 + (n / max) * 210;
        const isKey = n % step === 0;
        return (
          <g key={n}>
            <line x1={x} y1={isKey ? "47" : "51"} x2={x} y2="59"
              stroke={isKey ? "#00D4FF" : "rgba(255,255,255,0.2)"}
              strokeWidth={isKey ? 2 : 1} />
            {isKey && (
              <text x={x} y="72" fontSize="10" fontWeight="800"
                fill="#00D4FF" textAnchor="middle">{n}</text>
            )}
          </g>
        );
      })}
      <text x="120" y="92" fontSize="11" fontWeight="800"
        fill="rgba(255,255,255,0.7)" textAnchor="middle">
        {total} ÷ {step} = {jumps} jumps
      </text>
    </svg>
  );
});

// ─── SVG: Division ↔ Multiplication connection ────────────────────────────────

const DivMulSvg = memo(function DivMulSvg({ a = 4, b = 3 }: { a?: number; b?: number }) {
  const result = a * b;
  return (
    <svg width="100%" viewBox="0 0 240 120">
      <defs>
        <linearGradient id="divMulG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9500" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFCC02" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="120" fill="url(#divMulG)" rx="16" />
      {/* Multiplication */}
      <text x="120" y="38" fontSize="18" fontWeight="900"
        fill="#FF9500" textAnchor="middle" dominantBaseline="middle">
        {a} × {b} = {result}
      </text>
      {/* Arrow pair */}
      <text x="75" y="65" fontSize="13" fill="rgba(255,255,255,0.4)"
        textAnchor="middle" dominantBaseline="middle">↕</text>
      <text x="120" y="65" fontSize="10" fill="rgba(255,255,255,0.35)"
        textAnchor="middle" dominantBaseline="middle">flip!</text>
      <text x="165" y="65" fontSize="13" fill="rgba(255,255,255,0.4)"
        textAnchor="middle" dominantBaseline="middle">↕</text>
      {/* Division facts */}
      <text x="70" y="93" fontSize="16" fontWeight="900"
        fill="#10B981" textAnchor="middle" dominantBaseline="middle">
        {result} ÷ {a} = {b}
      </text>
      <text x="180" y="93" fontSize="16" fontWeight="900"
        fill="#10B981" textAnchor="middle" dominantBaseline="middle">
        {result} ÷ {b} = {a}
      </text>
    </svg>
  );
});

// ─── Labels ───────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Division Explorer",
    t1_title: "Sharing Equally",
    t1_text: "Division means SHARING EQUALLY! 12 ÷ 3 means: share 12 between 3 people. Each person gets the same amount. 12 ÷ 3 = 4 each!",
    t1_b1: "÷ means 'shared between'",
    t1_b2: "Everyone gets an equal share",
    t1_b3: "12 ÷ 3 = 4  (4 each, 3 people, 12 total)",
    t1_inst: "Split 12 cookies equally between 3 people — how many each?",
    t1_h1: "12 cookies ÷ 3 people = ? each",
    t1_h2: "4 cookies each — tap 4!",
    t1_q: "Share 20 equally between 4. How many each?",
    t1_q_5: "5",
    t1_q_24: "24",
    t1_q_16: "16",
    t1_q_4: "4",
    t2_title: "Division on the Number Line",
    t2_text: "We can show division by jumping BACKWARDS in equal steps! 15 ÷ 3: start at 15, jump back by 3 each time. Count how many jumps — that's the answer!",
    t2_b1: "Start at the big number",
    t2_b2: "Jump back by the divisor each time",
    t2_b3: "Count the jumps = the quotient",
    t2_inst: "Start at 15, jump back by 3 — count the jumps to reach 0!",
    t2_h1: "15 → 12 → 9 → 6 → 3 → 0 — how many jumps?",
    t2_h2: "5 jumps of 3 = 15 ÷ 3 = 5 — tap 5!",
    t2_q: "12 ÷ 4 = ?",
    t2_q_3: "3",
    t2_q_8: "8",
    t2_q_48: "48",
    t2_q_6: "6",
    t3_title: "Division and Multiplication are Opposites",
    t3_text: "Division and multiplication are INVERSES! If you know 4 × 3 = 12, then you also know 12 ÷ 4 = 3 and 12 ÷ 3 = 4. Use the times table to divide!",
    t3_b1: "4 × 3 = 12 → 12 ÷ 4 = 3",
    t3_b2: "Multiplication and division undo each other",
    t3_b3: "Think: ? × divisor = total",
    t3_inst: "Jump back from 12 in steps of 4 to reach 0!",
    t3_h1: "12 → 8 → 4 → 0 — how many jumps of 4?",
    t3_h2: "3 jumps of 4 = 12 ÷ 4 = 3 — tap 3!",
    t3_q: "18 ÷ 3 = ?  (Hint: ? × 3 = 18)",
    t3_q_6: "6",
    t3_q_15: "15",
    t3_q_21: "21",
    t3_q_9: "9",
  },
  de: {
    explorer_title: "Division entdecken",
    t1_title: "Gleichmäßig aufteilen",
    t1_text: "Division bedeutet GLEICHMÄSSIG AUFTEILEN! 12 ÷ 3 bedeutet: teile 12 auf 3 Personen auf. Jede Person bekommt gleich viel. 12 ÷ 3 = 4 pro Person!",
    t1_b1: "÷ bedeutet 'aufgeteilt auf'",
    t1_b2: "Alle bekommen gleich viel",
    t1_b3: "12 ÷ 3 = 4  (je 4, 3 Personen, 12 gesamt)",
    t1_inst: "Teile 12 Kekse gleichmäßig auf 3 Personen auf — wie viele jeder?",
    t1_h1: "12 Kekse ÷ 3 Personen = ? pro Person",
    t1_h2: "Je 4 Kekse — tippe auf 4!",
    t1_q: "Teile 20 gleichmäßig auf 4 auf. Wie viele jeder?",
    t1_q_5: "5",
    t1_q_24: "24",
    t1_q_16: "16",
    t1_q_4: "4",
    t2_title: "Division auf dem Zahlenstrahl",
    t2_text: "Division zeigen wir durch Rückwärtssprünge in gleichen Schritten! 15 ÷ 3: bei 15 starten, jedes Mal 3 zurückspringen. Zähle die Sprünge — das ist das Ergebnis!",
    t2_b1: "Bei der großen Zahl starten",
    t2_b2: "Jedes Mal um den Divisor zurückspringen",
    t2_b3: "Sprünge zählen = Ergebnis",
    t2_inst: "Starte bei 15, springe je 3 zurück — zähle die Sprünge bis 0!",
    t2_h1: "15 → 12 → 9 → 6 → 3 → 0 — wie viele Sprünge?",
    t2_h2: "5 Sprünge à 3 = 15 ÷ 3 = 5 — tippe auf 5!",
    t2_q: "12 ÷ 4 = ?",
    t2_q_3: "3",
    t2_q_8: "8",
    t2_q_48: "48",
    t2_q_6: "6",
    t3_title: "Division und Multiplikation sind Gegensätze",
    t3_text: "Division und Multiplikation sind UMKEHROPERATIONEN! Wenn 4 × 3 = 12, dann auch 12 ÷ 4 = 3 und 12 ÷ 3 = 4. Nutze das Einmaleins zum Dividieren!",
    t3_b1: "4 × 3 = 12 → 12 ÷ 4 = 3",
    t3_b2: "Multiplikation und Division heben sich auf",
    t3_b3: "Denke: ? × Divisor = Gesamtzahl",
    t3_inst: "Springe von 12 in 4er-Schritten zurück bis 0!",
    t3_h1: "12 → 8 → 4 → 0 — wie viele Sprünge à 4?",
    t3_h2: "3 Sprünge à 4 = 12 ÷ 4 = 3 — tippe auf 3!",
    t3_q: "18 ÷ 3 = ?  (Hinweis: ? × 3 = 18)",
    t3_q_6: "6",
    t3_q_15: "15",
    t3_q_21: "21",
    t3_q_9: "9",
  },
  hu: {
    explorer_title: "Osztás felfedezés",
    t1_title: "Egyenlő elosztás",
    t1_text: "Az osztás EGYENLŐ ELOSZTÁST jelent! A 12 ÷ 3 azt jelenti: ossz el 12-t 3 ember között. Mindenki ugyanannyit kap. 12 ÷ 3 = 4 mindenkinek!",
    t1_b1: "÷ azt jelenti: 'elosztva'",
    t1_b2: "Mindenki egyenlő részt kap",
    t1_b3: "12 ÷ 3 = 4  (4 mindenki, 3 ember, 12 összesen)",
    t1_inst: "Ossz el 12 sütit egyenlően 3 ember között — mennyit kap mindenki?",
    t1_h1: "12 süti ÷ 3 ember = ? darab egyenként",
    t1_h2: "4 süti mindenkinek — koppints a 4-re!",
    t1_q: "Ossz el 20-at egyenlően 4 ember között. Mennyit kap mindenki?",
    t1_q_5: "5",
    t1_q_24: "24",
    t1_q_16: "16",
    t1_q_4: "4",
    t2_title: "Osztás a számegyenesen",
    t2_text: "Az osztást egyenlő VISSZAUGRÁSOKKAL mutatjuk! 15 ÷ 3: indulj a 15-ről, ugorj vissza 3-asával. Számold az ugrásokat — az az eredmény!",
    t2_b1: "Indulj a nagy számnál",
    t2_b2: "Minden ugrás = az osztó mérete visszafelé",
    t2_b3: "Ugrások száma = hányados",
    t2_inst: "Indulj a 15-ről, ugorj vissza 3-asával — számold az ugrásokat a 0-ig!",
    t2_h1: "15 → 12 → 9 → 6 → 3 → 0 — hány ugrás?",
    t2_h2: "5 ugrás × 3 = 15 ÷ 3 = 5 — koppints az 5-re!",
    t2_q: "12 ÷ 4 = ?",
    t2_q_3: "3",
    t2_q_8: "8",
    t2_q_48: "48",
    t2_q_6: "6",
    t3_title: "Az osztás és szorzás egymás fordítottja",
    t3_text: "Az osztás és szorzás ELLENTÉTES műveletek! Ha 4 × 3 = 12, akkor 12 ÷ 4 = 3 és 12 ÷ 3 = 4 is igaz. Használd a szorzótáblát az osztáshoz!",
    t3_b1: "4 × 3 = 12 → 12 ÷ 4 = 3",
    t3_b2: "A szorzás és osztás kiegészítik egymást",
    t3_b3: "Gondolj: ? × osztó = összesen",
    t3_inst: "Ugorj vissza a 12-ről 4-esével a 0-ig!",
    t3_h1: "12 → 8 → 4 → 0 — hány ugrás × 4?",
    t3_h2: "3 ugrás × 4 = 12 ÷ 4 = 3 — koppints a 3-ra!",
    t3_q: "18 ÷ 3 = ?  (Tipp: ? × 3 = 18)",
    t3_q_6: "6",
    t3_q_15: "15",
    t3_q_21: "21",
    t3_q_9: "9",
  },
  ro: {
    explorer_title: "Explorare împărțire",
    t1_title: "Împărțire egală",
    t1_text: "Împărțirea înseamnă DISTRIBUIRE EGALĂ! 12 ÷ 3 înseamnă: împarte 12 la 3 persoane. Fiecare primește aceeași cantitate. 12 ÷ 3 = 4 fiecare!",
    t1_b1: "÷ înseamnă 'împărțit la'",
    t1_b2: "Toți primesc o parte egală",
    t1_b3: "12 ÷ 3 = 4  (4 fiecare, 3 persoane, 12 total)",
    t1_inst: "Împarte 12 biscuiți egal la 3 persoane — câți fiecare?",
    t1_h1: "12 biscuiți ÷ 3 persoane = ? fiecare",
    t1_h2: "4 biscuiți fiecare — atinge 4!",
    t1_q: "Împarte 20 egal la 4. Câți fiecare?",
    t1_q_5: "5",
    t1_q_24: "24",
    t1_q_16: "16",
    t1_q_4: "4",
    t2_title: "Împărțirea pe dreapta numerelor",
    t2_text: "Împărțirea se arată prin salturi ÎNAPOI în pași egali! 15 ÷ 3: pornești de la 15, sari înapoi câte 3. Numără salturile — acesta este rezultatul!",
    t2_b1: "Pornești de la numărul mare",
    t2_b2: "Fiecare salt = înapoi cu împărțitorul",
    t2_b3: "Numărul salturilor = câtul",
    t2_inst: "Pornește de la 15, sari înapoi câte 3 — numără salturile până la 0!",
    t2_h1: "15 → 12 → 9 → 6 → 3 → 0 — câte salturi?",
    t2_h2: "5 salturi de 3 = 15 ÷ 3 = 5 — atinge 5!",
    t2_q: "12 ÷ 4 = ?",
    t2_q_3: "3",
    t2_q_8: "8",
    t2_q_48: "48",
    t2_q_6: "6",
    t3_title: "Împărțirea și înmulțirea sunt opuse",
    t3_text: "Împărțirea și înmulțirea sunt INVERSE! Dacă 4 × 3 = 12, atunci 12 ÷ 4 = 3 și 12 ÷ 3 = 4. Folosește tabla înmulțirii pentru împărțire!",
    t3_b1: "4 × 3 = 12 → 12 ÷ 4 = 3",
    t3_b2: "Înmulțirea și împărțirea se anulează",
    t3_b3: "Gândește: ? × împărțitor = total",
    t3_inst: "Sari înapoi de la 12 în pași de 4 până la 0!",
    t3_h1: "12 → 8 → 4 → 0 — câte salturi de 4?",
    t3_h2: "3 salturi de 4 = 12 ÷ 4 = 3 — atinge 3!",
    t3_q: "18 ÷ 3 = ?  (Indiciu: ? × 3 = 18)",
    t3_q_6: "6",
    t3_q_15: "15",
    t3_q_21: "21",
    t3_q_9: "9",
  },
};

// ─── Topic definitions ────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <SharingSvg total={12} people={3} emoji="🍪" />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "split",
      groups: [3, 3, 3, 3],
      answer: 4,
      blockIcon: "🍪",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_24", "t1_q_16", "t1_q_4", "t1_q_5"],
      answer: "t1_q_5",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <DivNLSvg total={15} step={3} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 16,
      step: 3,
      start: 15,
      target: 0,
      showJumps: true,
      jumpCount: 5,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_8", "t2_q_48", "t2_q_6", "t2_q_3"],
      answer: "t2_q_3",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <DivMulSvg a={4} b={3} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 14,
      step: 4,
      start: 12,
      target: 0,
      showJumps: true,
      jumpCount: 3,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_15", "t3_q_21", "t3_q_9", "t3_q_6"],
      answer: "t3_q_6",
    },
  },
];

// ─── Explorer definition ──────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "➗",
  topics: TOPICS,
  rounds: [],
};

// ─── Export ───────────────────────────────────────────────────────────────────

const DivisionIntroExplorer = memo(function DivisionIntroExplorer({
  color = "#10B981",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={2} explorerId="math_g2_divisionintro" color={color} lang={lang} onDone={onDone} />;
});

export default DivisionIntroExplorer;
