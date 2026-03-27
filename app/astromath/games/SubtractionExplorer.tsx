"use client";
// SubtractionExplorer — Subtraction Island (sub10, Ergänzen/complement to 10)
// Uses topic-based ExplorerEngine mode

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Take-Away (Subtraction on number line, jumping backwards) ──────────

const SubtractLineSvg = memo(function SubtractLineSvg({ start = 8, jumps = 3 }: { start?: number; jumps?: number }) {
  const end = start - jumps;
  return (
    <svg width="100%" viewBox="0 0 240 90">
      <defs>
        <linearGradient id="subLineG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF8A8A" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="90" fill="url(#subLineG)" rx="16" />
      {/* Number line */}
      <line x1="20" y1="45" x2="220" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
      {Array.from({ length: 11 }, (_, i) => {
        const x = 20 + i * 20;
        const isStart = i === start;
        const isEnd = i === end;
        return (
          <g key={i}>
            <line x1={x} y1="39" x2={x} y2="51" stroke={isStart || isEnd ? "#FF6B6B" : "rgba(255,255,255,0.3)"} strokeWidth={isStart || isEnd ? 2.5 : 1.5} />
            <text x={x} y="67" fontSize={isStart || isEnd ? "12" : "10"} fontWeight={isStart || isEnd ? "800" : "500"} fill={isStart || isEnd ? "#FF6B6B" : "rgba(255,255,255,0.5)"} textAnchor="middle">
              {i}
            </text>
            {isStart && <circle cx={x} cy="33" r="5" fill="#FF6B6B" opacity="0.8" />}
            {isEnd && <circle cx={x} cy="33" r="5" fill="#FF6B6B" />}
          </g>
        );
      })}
      {/* Backward jump arrows */}
      {Array.from({ length: jumps }, (_, j) => {
        const fromX = 20 + (start - j) * 20;
        const toX = 20 + (start - j - 1) * 20;
        return (
          <g key={`jump-${j}`}>
            <path d={`M ${fromX} 20 Q ${(fromX + toX) / 2} 8 ${toX} 20`} stroke="#FF6B6B" strokeWidth="1.5" fill="none" />
            <polygon points={`${toX},20 ${toX + 3},17 ${toX + 2},20`} fill="#FF6B6B" />
          </g>
        );
      })}
    </svg>
  );
});

// ─── SVG: Crossing Out (Visual subtraction by crossing items) ────────────────

const CrossOutSvg = memo(function CrossOutSvg({ total = 7, remove = 3 }: { total?: number; remove?: number }) {
  return (
    <svg width="100%" viewBox="0 0 240 120">
      <defs>
        <linearGradient id="crossG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF8A8A" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="120" fill="url(#crossG)" rx="16" />
      {/* Items in a row */}
      {Array.from({ length: total }, (_, i) => {
        const cols = Math.min(total, 7);
        const x = 120 + (i - (cols - 1) / 2) * 28;
        const y = 45;
        const isCrossed = i >= total - remove;
        return (
          <g key={i}>
            <text x={x} y={y} fontSize="22" textAnchor="middle" dominantBaseline="middle" opacity={isCrossed ? 0.35 : 1}>
              🍎
            </text>
            {isCrossed && (
              <>
                <line x1={x - 10} y1={y - 10} x2={x + 10} y2={y + 10} stroke="#FF6B6B" strokeWidth="2.5" strokeLinecap="round" />
                <line x1={x + 10} y1={y - 10} x2={x - 10} y2={y + 10} stroke="#FF6B6B" strokeWidth="2.5" strokeLinecap="round" />
              </>
            )}
          </g>
        );
      })}
      {/* Equation */}
      <text x="120" y="95" fontSize="14" fontWeight="bold" fill="#FF6B6B" textAnchor="middle" opacity="0.7">
        {total} − {remove} = {total - remove}
      </text>
    </svg>
  );
});

// ─── SVG: Ergänzen (Complement — fill up to target) ─────────────────────────

const ErgaenzenSvg = memo(function ErgaenzenSvg({ have = 6, target = 10 }: { have?: number; target?: number }) {
  const need = target - have;
  return (
    <svg width="100%" viewBox="0 0 240 130">
      <defs>
        <linearGradient id="ergG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF8A8A" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="130" fill="url(#ergG)" rx="16" />
      {/* Ten-frame: 2 rows × 5 cols */}
      {Array.from({ length: 10 }, (_, i) => {
        const col = i % 5;
        const row = Math.floor(i / 5);
        const x = 50 + col * 32;
        const y = 28 + row * 32;
        const filled = i < have;
        const missing = i >= have && i < target;
        return (
          <g key={i}>
            <rect x={x} y={y} width="26" height="26" rx="5"
              fill={filled ? "rgba(255,107,107,0.25)" : "rgba(255,255,255,0.08)"}
              stroke={missing ? "#FF6B6B" : "rgba(255,255,255,0.2)"}
              strokeWidth={missing ? "2" : "1"}
              strokeDasharray={missing ? "4 3" : "none"}
            />
            {filled && (
              <circle cx={x + 13} cy={y + 13} r="8" fill="#FF6B6B" opacity="0.8" />
            )}
            {missing && (
              <text x={x + 13} y={y + 14} fontSize="12" fill="#FF6B6B" textAnchor="middle" dominantBaseline="middle" opacity="0.5">?</text>
            )}
          </g>
        );
      })}
      {/* Label */}
      <text x="120" y="115" fontSize="13" fontWeight="bold" fill="#FF6B6B" textAnchor="middle" opacity="0.7">
        {have} + ? = {target}
      </text>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Subtraction Explorer",
    // Topic 1: Taking Away (basic subtraction on number line)
    t1_title: "Taking Away",
    t1_text: "To subtract, we jump BACKWARDS on the number line! Start at 8, jump back 3 steps. Where do you land? 8 − 3 = 5!",
    t1_b1: "Start at the bigger number",
    t1_b2: "Jump backwards to subtract",
    t1_b3: "Where you land = the answer",
    t1_inst: "Tap number 5 on the line!",
    t1_h1: "Start at 8, jump back 3 times",
    t1_h2: "Count down: 7, 6, 5 — tap 5!",
    t1_q: "9 − 4 = ?",
    t1_q_4: "4",
    t1_q_5: "5",
    t1_q_6: "6",
    t1_q_3: "3",
    // Topic 2: Crossing Out (visual subtraction)
    t2_title: "Cross It Out",
    t2_text: "Subtraction means taking some away! You have 7 apples, you eat 3. Cross out 3 apples. Count what's left: 7 − 3 = 4!",
    t2_b1: "Start with all the items",
    t2_b2: "Cross out the ones removed",
    t2_b3: "Count what's left = answer",
    t2_inst: "Remove 3 from 8 — how many left?",
    t2_h1: "Start with 8, take away 3",
    t2_h2: "Count remaining = 5",
    t2_q: "10 − 4 = ?",
    t2_q_5: "5",
    t2_q_6: "6",
    t2_q_7: "7",
    t2_q_4: "4",
    // Topic 3: Ergänzen (Complement — what's missing to reach a target?)
    t3_title: "What's Missing?",
    t3_text: "How many more do you need? You have 6 dots and need 10. Count the empty spots: 6 + ? = 10. You need 4 more!",
    t3_b1: "Look at how many you have",
    t3_b2: "Count the empty spots",
    t3_b3: "That's the missing number!",
    t3_inst: "Drag 4 dots to fill the frame!",
    t3_h1: "6 filled, 4 empty",
    t3_h2: "Add 4 to reach 10!",
    t3_q: "7 + ? = 10",
    t3_q_2: "2",
    t3_q_3: "3",
    t3_q_4: "4",
    t3_q_5: "5",
  },
  de: {
    explorer_title: "Subtraktion entdecken",
    t1_title: "Wegnehmen",
    t1_text: "Zum Subtrahieren springen wir RÜCKWÄRTS auf der Zahlenlinie! Starte bei 8, springe 3 Schritte zurück. Wo landest du? 8 − 3 = 5!",
    t1_b1: "Starte bei der größeren Zahl",
    t1_b2: "Springe rückwärts zum Subtrahieren",
    t1_b3: "Wo du landest = die Antwort",
    t1_inst: "Tippe auf 5 auf der Linie!",
    t1_h1: "Starte bei 8, springe 3 mal zurück",
    t1_h2: "Zähle runter: 7, 6, 5 — tippe 5!",
    t1_q: "9 − 4 = ?",
    t1_q_4: "4",
    t1_q_5: "5",
    t1_q_6: "6",
    t1_q_3: "3",
    t2_title: "Durchstreichen",
    t2_text: "Subtraktion heißt etwas wegnehmen! Du hast 7 Äpfel, du isst 3. Streiche 3 Äpfel durch. Zähle was übrig bleibt: 7 − 3 = 4!",
    t2_b1: "Starte mit allen Gegenständen",
    t2_b2: "Streiche durch was weggenommen wird",
    t2_b3: "Zähle was übrig bleibt = Antwort",
    t2_inst: "Nimm 3 von 8 weg — wie viele bleiben?",
    t2_h1: "Starte mit 8, nimm 3 weg",
    t2_h2: "Zähle übrig = 5",
    t2_q: "10 − 4 = ?",
    t2_q_5: "5",
    t2_q_6: "6",
    t2_q_7: "7",
    t2_q_4: "4",
    t3_title: "Was fehlt? (Ergänzen)",
    t3_text: "Wie viele brauchst du noch? Du hast 6 Punkte und brauchst 10. Zähle die leeren Plätze: 6 + ? = 10. Du brauchst noch 4!",
    t3_b1: "Schau wie viele du hast",
    t3_b2: "Zähle die leeren Plätze",
    t3_b3: "Das ist die fehlende Zahl!",
    t3_inst: "Ziehe 4 Punkte in den Rahmen!",
    t3_h1: "6 gefüllt, 4 leer",
    t3_h2: "Füge 4 hinzu um 10 zu erreichen!",
    t3_q: "7 + ? = 10",
    t3_q_2: "2",
    t3_q_3: "3",
    t3_q_4: "4",
    t3_q_5: "5",
  },
  hu: {
    explorer_title: "Kivonás felfedezés",
    t1_title: "Elvétel",
    t1_text: "A kivonáshoz HÁTRAFELÉ ugrunk a számegyenesen! Indulj 8-tól, ugorj hátra 3 lépést. Hol érsz? 8 − 3 = 5!",
    t1_b1: "Indulj a nagyobb számtól",
    t1_b2: "Ugorj hátrafelé a kivonáshoz",
    t1_b3: "Ahol érsz = a válasz",
    t1_inst: "Koppints az 5-re a soron!",
    t1_h1: "Indulj 8-ból, ugorj hátra 3-szor",
    t1_h2: "Számolj vissza: 7, 6, 5 — koppints 5-re!",
    t1_q: "9 − 4 = ?",
    t1_q_4: "4",
    t1_q_5: "5",
    t1_q_6: "6",
    t1_q_3: "3",
    t2_title: "Húzd át!",
    t2_text: "A kivonás azt jelenti, elveszünk belőle! Van 7 almád, megeszel 3-at. Húzd át a 3 almát. Számold, ami maradt: 7 − 3 = 4!",
    t2_b1: "Kezdj az összes tárggyal",
    t2_b2: "Húzd át az elvett darabokat",
    t2_b3: "Számold a maradékot = válasz",
    t2_inst: "Vegyél 3-at a 8-ból — mennyi marad?",
    t2_h1: "Kezdj 8-tól, vegyél el 3-at",
    t2_h2: "Számold meg a maradékot = 5",
    t2_q: "10 − 4 = ?",
    t2_q_5: "5",
    t2_q_6: "6",
    t2_q_7: "7",
    t2_q_4: "4",
    t3_title: "Mi hiányzik? (Kiegészítés)",
    t3_text: "Mennyi kell még? Van 6 pontod és 10 kell. Számold az üres helyeket: 6 + ? = 10. Még 4 kell!",
    t3_b1: "Nézd meg mennyid van",
    t3_b2: "Számold az üres helyeket",
    t3_b3: "Ez a hiányzó szám!",
    t3_inst: "Húzz 4 pontot a keretbe!",
    t3_h1: "6 kitöltve, 4 üres",
    t3_h2: "Adj hozzá 4-et, hogy 10 legyen!",
    t3_q: "7 + ? = 10",
    t3_q_2: "2",
    t3_q_3: "3",
    t3_q_4: "4",
    t3_q_5: "5",
  },
  ro: {
    explorer_title: "Explorare scădere",
    t1_title: "Luăm înapoi",
    t1_text: "Pentru scădere, sărim ÎNAPOI pe linia numerică! Începe la 8, sari înapoi 3 pași. Unde aterizezi? 8 − 3 = 5!",
    t1_b1: "Începe la numărul mai mare",
    t1_b2: "Sari înapoi pentru a scădea",
    t1_b3: "Unde aterizezi = răspunsul",
    t1_inst: "Atingi 5 pe linie!",
    t1_h1: "Începe la 8, sari înapoi de 3 ori",
    t1_h2: "Numără înapoi: 7, 6, 5 — atingi 5!",
    t1_q: "9 − 4 = ?",
    t1_q_4: "4",
    t1_q_5: "5",
    t1_q_6: "6",
    t1_q_3: "3",
    t2_title: "Taie-le!",
    t2_text: "Scăderea înseamnă a lua din ele! Ai 7 mere, mănânci 3. Taie 3 mere. Numără ce a rămas: 7 − 3 = 4!",
    t2_b1: "Începe cu toate obiectele",
    t2_b2: "Taie-le pe cele scoase",
    t2_b3: "Numără ce a rămas = răspunsul",
    t2_inst: "Ia 3 din 8 — câte rămân?",
    t2_h1: "Începe cu 8, ia 3",
    t2_h2: "Numără rămase = 5",
    t2_q: "10 − 4 = ?",
    t2_q_5: "5",
    t2_q_6: "6",
    t2_q_7: "7",
    t2_q_4: "4",
    t3_title: "Ce lipsește? (Completare)",
    t3_text: "Câte mai trebuie? Ai 6 puncte și ai nevoie de 10. Numără locurile goale: 6 + ? = 10. Mai ai nevoie de 4!",
    t3_b1: "Uită-te câte ai",
    t3_b2: "Numără locurile goale",
    t3_b3: "Acesta este numărul lipsă!",
    t3_inst: "Trage 4 puncte în cadru!",
    t3_h1: "6 completate, 4 goale",
    t3_h2: "Adaugă 4 pentru a ajunge la 10!",
    t3_q: "7 + ? = 10",
    t3_q_2: "2",
    t3_q_3: "3",
    t3_q_4: "4",
    t3_q_5: "5",
  },
};

// ─── Topic definitions ───────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // Topic 1: Taking Away (subtraction on number line — backwards jumps)
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <SubtractLineSvg start={8} jumps={3} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 10,
      start: 8,
      target: 5,
      showJumps: true,
      jumpCount: 3,
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_3", "t1_q_4", "t1_q_5", "t1_q_6"],
      answer: "t1_q_5",
    },
  },

  // Topic 2: Crossing Out (visual subtraction — remove items)
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <CrossOutSvg total={7} remove={3} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "block-drag",
      mode: "split",
      groups: [8, 3],
      answer: 5,
      blockIcon: "🍎",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_4", "t2_q_5", "t2_q_6", "t2_q_7"],
      answer: "t2_q_6",
    },
  },

  // Topic 3: Ergänzen (Complement — find what's missing to reach the target)
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <ErgaenzenSvg have={6} target={10} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [6, 4],
      answer: 10,
      blockIcon: "🔴",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_2", "t3_q_3", "t3_q_4", "t3_q_5"],
      answer: "t3_q_3",
    },
  },
];

// ─── Explorer definition ─────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "➖",
  topics: TOPICS,
  rounds: [], // legacy — not used in topic mode
};

// ─── Export ──────────────────────────────────────────────────────────────────

const SubtractionExplorer = memo(function SubtractionExplorer({
  color = "#FF6B6B",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_subtraction" color={color} lang={lang} onDone={onDone} />;
});

export default SubtractionExplorer;
