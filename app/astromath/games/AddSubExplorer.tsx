"use client";
// AddSubExplorer — Addition Island (Tauschaufgabe, Zahlzerlegung, Addition to 10)
// Uses new topic-based ExplorerEngine mode

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Tauschaufgabe (Commutative property) ───────────────────────────────

const TauschSvg = memo(function TauschSvg({ group1 = 4, group2 = 3 }: { group1?: number; group2?: number }) {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="taushG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#taushG)" rx="16" />
      {/* Left group */}
      <g transform="translate(60, 50)">
        {Array.from({ length: group1 }, (_, i) => {
          const cols = Math.min(group1, 4);
          const row = Math.floor(i / cols);
          const col = i % cols;
          const x = (col - (Math.min(group1 - row * cols, cols)) / 2 + 0.5) * 24;
          const y = (row - Math.ceil(group1 / cols) / 2 + 0.5) * 24;
          return (
            <text key={i} x={x} y={y} fontSize="24" textAnchor="middle" dominantBaseline="middle">
              ⭐
            </text>
          );
        })}
      </g>
      {/* Equals */}
      <text x="120" y="65" fontSize="16" fontWeight="bold" fill="#00D4FF" textAnchor="middle" opacity="0.6">
        =
      </text>
      {/* Right group */}
      <g transform="translate(180, 50)">
        {Array.from({ length: group2 }, (_, i) => {
          const cols = Math.min(group2, 4);
          const row = Math.floor(i / cols);
          const col = i % cols;
          const x = (col - (Math.min(group2 - row * cols, cols)) / 2 + 0.5) * 24;
          const y = (row - Math.ceil(group2 / cols) / 2 + 0.5) * 24;
          return (
            <text key={i} x={x} y={y} fontSize="24" textAnchor="middle" dominantBaseline="middle">
              ⭐
            </text>
          );
        })}
      </g>
      <text x="120" y="128" fontSize="13" fontWeight="bold" fill="#0891B2" textAnchor="middle" opacity="0.7">
        {group1} + {group2} = {group1 + group2}
      </text>
    </svg>
  );
});

// ─── SVG: Zahlzerlegung (Number decomposition) ────────────────────────────────

const ZahlzerlegungSvg = memo(function ZahlzerlegungSvg({ total = 7, part1 = 3 }: { total?: number; part1?: number }) {
  const part2 = total - part1;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="zahlG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#zahlG)" rx="16" />
      {/* Total group top */}
      <g transform="translate(120, 30)">
        {Array.from({ length: total }, (_, i) => {
          const cols = Math.min(total, 5);
          const row = Math.floor(i / cols);
          const col = i % cols;
          const x = (col - (Math.min(total - row * cols, cols)) / 2 + 0.5) * 20;
          const y = (row - Math.ceil(total / cols) / 2 + 0.5) * 20;
          const isFirst = i < part1;
          return (
            <text key={i} x={x} y={y} fontSize="20" textAnchor="middle" dominantBaseline="middle" opacity={isFirst ? 1 : 0.5}>
              🔵
            </text>
          );
        })}
      </g>
      <text x="120" y="85" fontSize="14" fontWeight="bold" fill="#00D4FF" textAnchor="middle" opacity="0.7">
        = {part1} + {part2}
      </text>
      {/* Part groups bottom */}
      <g transform="translate(70, 110)">
        {Array.from({ length: part1 }, (_, i) => (
          <text key={i} x={i * 16} y="0" fontSize="18" textAnchor="middle" dominantBaseline="middle">
            🔵
          </text>
        ))}
      </g>
      <text x="120" y="120" fontSize="12" fontWeight="bold" fill="#0891B2">
        +
      </text>
      <g transform="translate(150, 110)">
        {Array.from({ length: part2 }, (_, i) => (
          <text key={i} x={i * 16} y="0" fontSize="18" textAnchor="middle" dominantBaseline="middle" opacity="0.6">
            🔵
          </text>
        ))}
      </g>
    </svg>
  );
});

// ─── SVG: Addition to 10 (Number line) ──────────────────────────────────────

const AdditionLineSvg = memo(function AdditionLineSvg({ start = 4, jumps = 3 }: { start?: number; jumps?: number }) {
  const end = start + jumps;
  return (
    <svg width="100%" viewBox="0 0 240 90">
      <defs>
        <linearGradient id="addLineG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="90" fill="url(#addLineG)" rx="16" />
      {/* Number line */}
      <line x1="20" y1="45" x2="220" y2="45" stroke="rgba(255,255,255,0.3)" strokeWidth="2" strokeLinecap="round" />
      {Array.from({ length: 11 }, (_, i) => {
        const x = 20 + i * 20;
        const isStart = i === start;
        const isEnd = i === end;
        return (
          <g key={i}>
            <line x1={x} y1="39" x2={x} y2="51" stroke={isStart || isEnd ? "#00D4FF" : "rgba(255,255,255,0.3)"} strokeWidth={isStart || isEnd ? 2.5 : 1.5} />
            <text x={x} y="67" fontSize={isStart || isEnd ? "12" : "10"} fontWeight={isStart || isEnd ? "800" : "500"} fill={isStart || isEnd ? "#00D4FF" : "rgba(255,255,255,0.5)"} textAnchor="middle">
              {i}
            </text>
            {isStart && <circle cx={x} cy="33" r="5" fill="#00D4FF" opacity="0.8" />}
            {isEnd && <circle cx={x} cy="33" r="5" fill="#00D4FF" />}
          </g>
        );
      })}
      {/* Jump arrows */}
      {Array.from({ length: jumps }, (_, j) => {
        const fromX = 20 + (start + j) * 20;
        const toX = 20 + (start + j + 1) * 20;
        return (
          <g key={`jump-${j}`}>
            <path d={`M ${fromX} 20 Q ${(fromX + toX) / 2} 10 ${toX} 20`} stroke="#00D4FF" strokeWidth="1.5" fill="none" />
            <polygon points={`${toX},20 ${toX - 3},17 ${toX - 2},20`} fill="#00D4FF" />
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
    explorer_title: "Addition Explorer",
    // Topic 1: Tauschaufgabe (Commutative)
    t1_title: "Swap Groups",
    t1_text: "When we ADD, the order doesn't matter! 3 + 5 is the same as 5 + 3. The answer is always the same!",
    t1_b1: "Groups can swap places",
    t1_b2: "The answer stays the same",
    t1_b3: "Try: 4 + 3 and 3 + 4",
    t1_inst: "Drag the groups together — answer 7!",
    t1_h1: "4 stars here, 3 stars there",
    t1_h2: "Put them together = 7 total",
    t1_q: "4 + 3 = 3 + ?",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_7: "7",
    t1_q_1: "1",
    // Topic 2: Zahlzerlegung (Decomposition)
    t2_title: "Break Numbers Apart",
    t2_text: "Big numbers are made from smaller numbers! 7 can split into 3 and 4. 7 can also split into 5 and 2. Same number, different splits!",
    t2_b1: "One big number splits",
    t2_b2: "Into two smaller numbers",
    t2_b3: "Add them back = original",
    t2_inst: "Remove 3 from 8 — how many left?",
    t2_h1: "Start with 8, take away 3",
    t2_h2: "Count remaining = 5",
    t2_q: "8 = 3 + ?",
    t2_q_4: "4",
    t2_q_5: "5",
    t2_q_6: "6",
    t2_q_3: "3",
    // Topic 3: Addition to 10
    t3_title: "Adding to 10",
    t3_text: "Use a number line to add! Start at 4, jump forward 3 steps. Where do you land? 4 + 3 = 7!",
    t3_b1: "Start at the first number",
    t3_b2: "Jump forward by the second",
    t3_b3: "Where you land = the answer",
    t3_inst: "Tap number 7 on the line!",
    t3_h1: "Start at 4, jump 3 times",
    t3_h2: "Count up: 5, 6, 7 — tap 7!",
    t3_q: "5 + 4 = ?",
    t3_q_8: "8",
    t3_q_9: "9",
    t3_q_10: "10",
    t3_q_7: "7",
  },
  de: {
    explorer_title: "Addition entdecken",
    t1_title: "Gruppen tauschen",
    t1_text: "Beim ADDIEREN ist die Reihenfolge egal! 3 + 5 ist dasselbe wie 5 + 3. Das Ergebnis bleibt gleich!",
    t1_b1: "Gruppen können Plätze tauschen",
    t1_b2: "Das Ergebnis bleibt gleich",
    t1_b3: "Versuche: 4 + 3 und 3 + 4",
    t1_inst: "Ziehe die Gruppen zusammen — Antwort 7!",
    t1_h1: "4 Sterne hier, 3 Sterne dort",
    t1_h2: "Zusammen = 7 insgesamt",
    t1_q: "4 + 3 = 3 + ?",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_7: "7",
    t1_q_1: "1",
    t2_title: "Zahlen auseinander nehmen",
    t2_text: "Große Zahlen bestehen aus kleineren Zahlen! 7 teilt sich in 3 und 4. 7 kann sich auch in 5 und 2 teilen. Gleiche Zahl, unterschiedliche Aufteilungen!",
    t2_b1: "Eine große Zahl teilt sich auf",
    t2_b2: "In zwei kleinere Zahlen",
    t2_b3: "Zusammengezählt = Original",
    t2_inst: "Nimm 3 von 8 — wie viele bleiben?",
    t2_h1: "Starte mit 8, nimm 3 weg",
    t2_h2: "Zähle übrig = 5",
    t2_q: "8 = 3 + ?",
    t2_q_4: "4",
    t2_q_5: "5",
    t2_q_6: "6",
    t2_q_3: "3",
    t3_title: "Addition bis 10",
    t3_text: "Benutze eine Zahlenlinie zum Addieren! Starte bei 4, springe vorwärts 3 Schritte. Wo landest du? 4 + 3 = 7!",
    t3_b1: "Starte bei der ersten Zahl",
    t3_b2: "Springe vorwärts um die zweite",
    t3_b3: "Wo du landest = die Antwort",
    t3_inst: "Tippe auf 7 auf der Linie!",
    t3_h1: "Starte bei 4, springe 3 mal",
    t3_h2: "Zähle hoch: 5, 6, 7 — tippe 7!",
    t3_q: "5 + 4 = ?",
    t3_q_8: "8",
    t3_q_9: "9",
    t3_q_10: "10",
    t3_q_7: "7",
  },
  hu: {
    explorer_title: "Összeadás felfedezés",
    t1_title: "Csoportok cseréje",
    t1_text: "Az ÖSSZEADÁSNÁL a sorrend nem számít! 3 + 5 ugyanaz, mint 5 + 3. Az eredmény mindig ugyanaz!",
    t1_b1: "A csoportok helyet cserélhetnek",
    t1_b2: "Az eredmény ugyanaz marad",
    t1_b3: "Próbáld: 4 + 3 és 3 + 4",
    t1_inst: "Húzd össze a csoportokat — válasz 7!",
    t1_h1: "4 csillag itt, 3 csillag ott",
    t1_h2: "Együtt = 7 összesen",
    t1_q: "4 + 3 = 3 + ?",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_7: "7",
    t1_q_1: "1",
    t2_title: "Számok szétszedetése",
    t2_text: "A nagy számok kis számokból vannak! A 7 3-ra és 4-re bomlik. A 7 5-re és 2-re is bomlik. Ugyanaz a szám, más feldarabolás!",
    t2_b1: "Egy nagy szám felhasználódik",
    t2_b2: "Két kis számra",
    t2_b3: "Összeadva = az eredeti",
    t2_inst: "Vegyél 3-at az 8-ból — mennyi marad?",
    t2_h1: "Kezdj 8-tól, vegyél el 3-at",
    t2_h2: "Számold meg a maradékot = 5",
    t2_q: "8 = 3 + ?",
    t2_q_4: "4",
    t2_q_5: "5",
    t2_q_6: "6",
    t2_q_3: "3",
    t3_title: "Összeadás 10-ig",
    t3_text: "Használj számegyenest az összeadáshoz! Indulj a 4-ből, ugorj előre 3 lépést. Hol érsz? 4 + 3 = 7!",
    t3_b1: "Indulj az első számnál",
    t3_b2: "Ugorj előre a másodikkal",
    t3_b3: "Ahol érsz = a válasz",
    t3_inst: "Koppints a 7-re a soron!",
    t3_h1: "Indulj 4-ből, ugorj 3-szor",
    t3_h2: "Számolj fel: 5, 6, 7 — koppints 7-re!",
    t3_q: "5 + 4 = ?",
    t3_q_8: "8",
    t3_q_9: "9",
    t3_q_10: "10",
    t3_q_7: "7",
  },
  ro: {
    explorer_title: "Explorare adunare",
    t1_title: "Schimbă grupurile",
    t1_text: "La ADUNARE, ordinea nu contează! 3 + 5 este la fel ca 5 + 3. Răspunsul este întotdeauna același!",
    t1_b1: "Grupurile pot schimba locul",
    t1_b2: "Răspunsul rămâne același",
    t1_b3: "Încearcă: 4 + 3 și 3 + 4",
    t1_inst: "Trage grupurile împreună — răspuns 7!",
    t1_h1: "4 stele aici, 3 stele acolo",
    t1_h2: "Împreună = 7 total",
    t1_q: "4 + 3 = 3 + ?",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_7: "7",
    t1_q_1: "1",
    t2_title: "Sparge numerele în bucăți",
    t2_text: "Numerele mari sunt făcute din numere mici! 7 se împarte în 3 și 4. 7 se poate și împărți în 5 și 2. Același număr, alte diviziuni!",
    t2_b1: "Un număr mare se descompune",
    t2_b2: "În două numere mici",
    t2_b3: "Adunate la loc = originalul",
    t2_inst: "Ia 3 din 8 — câte rămân?",
    t2_h1: "Începe cu 8, ia 3 deoparte",
    t2_h2: "Numără rămase = 5",
    t2_q: "8 = 3 + ?",
    t2_q_4: "4",
    t2_q_5: "5",
    t2_q_6: "6",
    t2_q_3: "3",
    t3_title: "Adunare până la 10",
    t3_text: "Folosește o linie numerică pentru adunare! Începe la 4, sari înainte 3 pași. Unde aterizezi? 4 + 3 = 7!",
    t3_b1: "Începe la primul număr",
    t3_b2: "Sari înainte cu al doilea",
    t3_b3: "Unde aterizezi = răspunsul",
    t3_inst: "Atingi 7 pe linie!",
    t3_h1: "Începe la 4, sari 3 ori",
    t3_h2: "Numără: 5, 6, 7 — atingi 7!",
    t3_q: "5 + 4 = ?",
    t3_q_8: "8",
    t3_q_9: "9",
    t3_q_10: "10",
    t3_q_7: "7",
  },
};

// ─── Topic definitions ───────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // Topic 1: Tauschaufgabe (Commutative property)
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <TauschSvg group1={4} group2={3} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [4, 3],
      answer: 7,
      blockIcon: "⭐",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_1", "t1_q_3", "t1_q_4", "t1_q_7"],
      answer: "t1_q_4",
    },
  },

  // Topic 2: Zahlzerlegung (Number decomposition)
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <ZahlzerlegungSvg total={8} part1={3} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "block-drag",
      mode: "split",
      groups: [8, 3],
      answer: 5,
      blockIcon: "🔵",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_3", "t2_q_4", "t2_q_5", "t2_q_6"],
      answer: "t2_q_5",
    },
  },

  // Topic 3: Addition to 10
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <AdditionLineSvg start={4} jumps={3} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 10,
      start: 5,
      target: 9,
      showJumps: true,
      jumpCount: 4,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_7", "t3_q_8", "t3_q_9", "t3_q_10"],
      answer: "t3_q_9",
    },
  },
];

// ─── Explorer definition ─────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "➕",
  topics: TOPICS,
  rounds: [], // legacy — not used in topic mode
};

// ─── Export ──────────────────────────────────────────────────────────────────

const AddSubExplorer = memo(function AddSubExplorer({
  color = "#00D4FF",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_addsub" color={color} lang={lang} onDone={onDone} />;
});

export default AddSubExplorer;
