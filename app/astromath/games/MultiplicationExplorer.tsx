"use client";
// MultiplicationExplorer — Multiplication discovery for Grade 2 (island i7)
// Uses new topic-based ExplorerEngine mode

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Groups of objects ───────────────────────────────────────────────────

const GroupsSvg = memo(function GroupsSvg({
  groups = 3, perGroup = 4, emoji = "🍎",
}: { groups?: number; perGroup?: number; emoji?: string }) {
  const cols = Math.min(groups, 4);
  const rows = Math.ceil(groups / cols);
  return (
    <svg width="100%" viewBox="0 0 240 145">
      <defs>
        <linearGradient id="grpG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9500" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFCC02" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="145" fill="url(#grpG)" rx="16" />
      {Array.from({ length: groups }, (_, gi) => {
        const gcol = gi % cols;
        const grow = Math.floor(gi / cols);
        const bw = 52; const bh = 48;
        const bx = 10 + gcol * (bw + 8);
        const by = 10 + grow * (bh + 8);
        return (
          <g key={gi}>
            <rect x={bx} y={by} width={bw} height={bh} rx="8"
              fill="rgba(255,255,255,0.06)" stroke="rgba(255,149,0,0.4)" strokeWidth="1.5" />
            {Array.from({ length: perGroup }, (_, i) => {
              const ic = i % 2; const ir = Math.floor(i / 2);
              const ex = bx + 8 + ic * 22;
              const ey = by + 8 + ir * 18;
              return (
                <text key={i} x={ex + 8} y={ey + 10} fontSize="15"
                  textAnchor="middle" dominantBaseline="middle">{emoji}</text>
              );
            })}
          </g>
        );
      })}
      <text x="120" y="132" fontSize="11" fontWeight="800"
        fill="#FF9500" textAnchor="middle" opacity="0.85">
        {groups} × {perGroup} = {groups * perGroup}
      </text>
    </svg>
  );
});

// ─── SVG: Repeated addition → multiplication ─────────────────────────────────

const RepAddSvg = memo(function RepAddSvg({ groups = 4, perGroup = 3, lang = "en" }: { groups?: number; perGroup?: number; lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  const result = groups * perGroup;
  return (
    <svg width="100%" viewBox="0 0 240 130">
      <defs>
        <linearGradient id="repAddG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="130" fill="url(#repAddG)" rx="16" />
      {/* Repeated addition */}
      <text x="120" y="35" fontSize="12" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        {Array.from({ length: groups }, (_, i) =>
          i < groups - 1 ? `${perGroup} + ` : `${perGroup}`
        ).join("")} = {result}
      </text>
      {/* Arrow down */}
      <text x="120" y="62" fontSize="18" fill="rgba(255,255,255,0.35)"
        textAnchor="middle" dominantBaseline="middle">↕</text>
      {/* Multiplication */}
      <text x="120" y="90" fontSize="22" fontWeight="900"
        fill="#10B981" textAnchor="middle" dominantBaseline="middle">
        {groups} × {perGroup} = {result}
      </text>
      <text x="120" y="115" fontSize="10" fill="rgba(255,255,255,0.4)" textAnchor="middle">
        {(t.rep_desc || "").replace("{g}", String(groups)).replace("{p}", String(perGroup)).replace("{r}", String(result))}
      </text>
    </svg>
  );
});

// ─── SVG: Times table grid ────────────────────────────────────────────────────

const TimesTableSvg = memo(function TimesTableSvg({ table = 3 }: { table?: number }) {
  const rows = [1, 2, 3, 4, 5];
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="ttG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#ttG)" rx="16" />
      {rows.map((n, i) => {
        const y = 30 + i * 24;
        const isHighlight = n === 4;
        return (
          <g key={n}>
            <rect x="10" y={y - 10} width="220" height="20" rx="4"
              fill={isHighlight ? "rgba(0,212,255,0.15)" : "transparent"} />
            <text x="40" y={y + 5} fontSize="13" fontWeight={isHighlight ? "900" : "700"}
              fill={isHighlight ? "#00D4FF" : "rgba(255,255,255,0.7)"} textAnchor="middle">
              {n} × {table}
            </text>
            <text x="75" y={y + 5} fontSize="13" fontWeight="700"
              fill="rgba(255,255,255,0.35)" textAnchor="middle">=</text>
            <text x="110" y={y + 5} fontSize="13" fontWeight={isHighlight ? "900" : "700"}
              fill={isHighlight ? "#00D4FF" : "rgba(255,255,255,0.7)"} textAnchor="middle">
              {n * table}
            </text>
            {i < rows.length - 1 && (
              <text x="160" y={y + 5} fontSize="13" fontWeight="700"
                fill="rgba(255,255,255,0.7)" textAnchor="middle">
                {rows[i + 1]} × {table} = {rows[i + 1] * table}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
});

// ─── Labels ───────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Times Tables Explorer",
    rep_desc: "{g} groups of {p} = {r} total",
    t1_title: "Groups of Objects",
    t1_text: "Multiplication means EQUAL GROUPS! 3 × 4 means 3 groups, each with 4 objects. We can count them all, or use multiplication as a shortcut!",
    t1_b1: "3 × 4 = 3 groups of 4",
    t1_b2: "The × symbol means 'groups of'",
    t1_b3: "Total = groups × size of each group",
    t1_inst: "Count the groups: 3 boxes with 4 apples each — how many total?",
    t1_h1: "3 groups × 4 apples = ?",
    t1_h2: "4 + 4 + 4 = 12, or 3 × 4 = 12 — tap 12!",
    t1_q: "How many apples in 4 groups of 3?",
    t1_q_12: "12",
    t1_q_7: "7",
    t1_q_43: "43",
    t1_q_9: "9",
    t2_title: "Repeated Addition",
    t2_text: "Multiplication is a FASTER way to do repeated addition! Instead of 3 + 3 + 3 + 3 (four times), just write 4 × 3 = 12. It's the same!",
    t2_b1: "4 × 3 = 3 + 3 + 3 + 3 = 12",
    t2_b2: "Multiplication saves writing time",
    t2_b3: "Both give the same answer",
    t2_inst: "Jump in steps of 3 on the number line — 4 jumps total!",
    t2_h1: "Start at 0, jump +3 four times",
    t2_h2: "0 → 3 → 6 → 9 → 12 — tap 12!",
    t2_q: "5 + 5 + 5 = ?  (write as multiplication: 3 × 5)",
    t2_q_15: "15",
    t2_q_35: "35",
    t2_q_10: "10",
    t2_q_555: "555",
    t3_title: "Times Tables 1–5",
    t3_text: "The times table is a list of multiplication facts. Learn the × 3 table: 1×3=3, 2×3=6, 3×3=9 … Each step is just 3 more! Can you spot the pattern?",
    t3_b1: "Each next row = add one more group",
    t3_b2: "2×3 = 3+3 = 6; 3×3 = 3+3+3 = 9",
    t3_b3: "Knowing the table saves time!",
    t3_inst: "Start at 0, jump 4 steps of 3 — land on 4 × 3!",
    t3_h1: "1×3=3, 2×3=6, 3×3=9, 4×3=?",
    t3_h2: "9 + 3 = 12 — tap 12!",
    t3_q: "What is 5 × 3?",
    t3_q_15: "15",
    t3_q_8: "8",
    t3_q_53: "53",
    t3_q_12: "12",
  },
  de: {
    explorer_title: "Einmaleins entdecken",
    rep_desc: "{g} Gruppen zu je {p} = {r} insgesamt",
    t1_title: "Gruppen von Objekten",
    t1_text: "Multiplikation bedeutet GLEICHE GRUPPEN! 3 × 4 bedeutet 3 Gruppen mit je 4 Objekten. Wir können alle zählen oder die Multiplikation als Abkürzung nutzen!",
    t1_b1: "3 × 4 = 3 Gruppen zu je 4",
    t1_b2: "Das × steht für 'Gruppen von'",
    t1_b3: "Gesamt = Gruppen × Größe jeder Gruppe",
    t1_inst: "Zähle die Gruppen: 3 Kisten mit je 4 Äpfeln — wie viele insgesamt?",
    t1_h1: "3 Gruppen × 4 Äpfel = ?",
    t1_h2: "4 + 4 + 4 = 12, oder 3 × 4 = 12 — tippe auf 12!",
    t1_q: "Wie viele Äpfel in 4 Gruppen zu je 3?",
    t1_q_12: "12",
    t1_q_7: "7",
    t1_q_43: "43",
    t1_q_9: "9",
    t2_title: "Wiederholte Addition",
    t2_text: "Multiplikation ist ein SCHNELLERER Weg für wiederholte Addition! Statt 3 + 3 + 3 + 3 (viermal) schreibt man einfach 4 × 3 = 12. Das Ergebnis ist gleich!",
    t2_b1: "4 × 3 = 3 + 3 + 3 + 3 = 12",
    t2_b2: "Multiplikation spart Schreibzeit",
    t2_b3: "Beide geben das gleiche Ergebnis",
    t2_inst: "Springe in 3er-Schritten auf dem Zahlenstrahl — 4 Sprünge insgesamt!",
    t2_h1: "Starte bei 0, springe 4× je +3",
    t2_h2: "0 → 3 → 6 → 9 → 12 — tippe auf 12!",
    t2_q: "5 + 5 + 5 = ?  (als Multiplikation: 3 × 5)",
    t2_q_15: "15",
    t2_q_35: "35",
    t2_q_10: "10",
    t2_q_555: "555",
    t3_title: "Einmaleins 1–5",
    t3_text: "Das Einmaleins listet alle Multiplikationsaufgaben auf. Lerne die 3er-Reihe: 1×3=3, 2×3=6, 3×3=9 … Jeder Schritt ist 3 mehr! Erkennst du das Muster?",
    t3_b1: "Jede nächste Zeile = eine Gruppe mehr",
    t3_b2: "2×3 = 3+3 = 6; 3×3 = 3+3+3 = 9",
    t3_b3: "Das Einmaleins spart Zeit!",
    t3_inst: "Starte bei 0 und springe 4-mal je 3 — lande auf 4 × 3!",
    t3_h1: "1×3=3, 2×3=6, 3×3=9, 4×3=?",
    t3_h2: "9 + 3 = 12 — tippe auf 12!",
    t3_q: "Was ist 5 × 3?",
    t3_q_15: "15",
    t3_q_8: "8",
    t3_q_53: "53",
    t3_q_12: "12",
  },
  hu: {
    explorer_title: "Szorzótábla felfedezés",
    rep_desc: "{g} csoport, egyenként {p} = összesen {r}",
    t1_title: "Egyenlő csoportok",
    t1_text: "A szorzás EGYENLŐ CSOPORTOKAT jelent! A 3 × 4 azt jelenti: 3 csoport, mindegyikben 4 tárgy. Megszámolhatjuk mindegyiket, vagy a szorzást használjuk rövidítésként!",
    t1_b1: "3 × 4 = 3 csoport, egyenként 4",
    t1_b2: "A × jel azt jelenti: 'csoportja'",
    t1_b3: "Összesen = csoportok × csoport mérete",
    t1_inst: "Számold meg a csoportokat: 3 doboz, egyenként 4 alma — összesen hány?",
    t1_h1: "3 csoport × 4 alma = ?",
    t1_h2: "4 + 4 + 4 = 12, vagy 3 × 4 = 12 — koppints a 12-re!",
    t1_q: "Hány alma van 4 csoportban, ha mindegyikben 3 van?",
    t1_q_12: "12",
    t1_q_7: "7",
    t1_q_43: "43",
    t1_q_9: "9",
    t2_title: "Ismételt összeadás",
    t2_text: "A szorzás az ismételt összeadás GYORSABB módja! A 3 + 3 + 3 + 3 (négyszer) helyett egyszerűen 4 × 3 = 12. Ugyanaz az eredmény!",
    t2_b1: "4 × 3 = 3 + 3 + 3 + 3 = 12",
    t2_b2: "A szorzás időt takarít meg",
    t2_b3: "Mindkettő ugyanaz az eredmény",
    t2_inst: "Ugorj 3-as lépésekkel a számegyenesen — összesen 4 ugrás!",
    t2_h1: "Indulj a 0-ról, ugorj 4× egyenként +3-at",
    t2_h2: "0 → 3 → 6 → 9 → 12 — koppints a 12-re!",
    t2_q: "5 + 5 + 5 = ?  (szorzásként: 3 × 5)",
    t2_q_15: "15",
    t2_q_35: "35",
    t2_q_10: "10",
    t2_q_555: "555",
    t3_title: "Szorzótábla 1–5",
    t3_text: "A szorzótábla felsorolja az összes szorzást. Tanuld meg a 3-ast: 1×3=3, 2×3=6, 3×3=9 … Minden lépés 3-mal több! Látod a mintát?",
    t3_b1: "Minden következő sor = még egy csoport",
    t3_b2: "2×3 = 3+3 = 6; 3×3 = 3+3+3 = 9",
    t3_b3: "A szorzótábla időt takarít meg!",
    t3_inst: "Indulj a 0-ról és ugorj 4× egyenként 3-at — érj a 4 × 3-ra!",
    t3_h1: "1×3=3, 2×3=6, 3×3=9, 4×3=?",
    t3_h2: "9 + 3 = 12 — koppints a 12-re!",
    t3_q: "Mennyi 5 × 3?",
    t3_q_15: "15",
    t3_q_8: "8",
    t3_q_53: "53",
    t3_q_12: "12",
  },
  ro: {
    explorer_title: "Tabla înmulțirii",
    rep_desc: "{g} grupe de câte {p} = {r} în total",
    t1_title: "Grupe egale de obiecte",
    t1_text: "Înmulțirea înseamnă GRUPE EGALE! 3 × 4 înseamnă 3 grupe cu câte 4 obiecte. Putem număra toate sau folosim înmulțirea ca scurtătură!",
    t1_b1: "3 × 4 = 3 grupe cu câte 4",
    t1_b2: "Semnul × înseamnă 'grupe de'",
    t1_b3: "Total = grupe × mărimea fiecărei grupe",
    t1_inst: "Numără grupele: 3 cutii cu câte 4 mere — câte în total?",
    t1_h1: "3 grupe × 4 mere = ?",
    t1_h2: "4 + 4 + 4 = 12, sau 3 × 4 = 12 — atinge 12!",
    t1_q: "Câte mere sunt în 4 grupe de câte 3?",
    t1_q_12: "12",
    t1_q_7: "7",
    t1_q_43: "43",
    t1_q_9: "9",
    t2_title: "Adunare repetată",
    t2_text: "Înmulțirea este o modalitate MAI RAPIDĂ de adunare repetată! În loc de 3 + 3 + 3 + 3 (de patru ori), scrii 4 × 3 = 12. Rezultatul este același!",
    t2_b1: "4 × 3 = 3 + 3 + 3 + 3 = 12",
    t2_b2: "Înmulțirea economisește timp",
    t2_b3: "Ambele dau același rezultat",
    t2_inst: "Sari pași de 3 pe dreapta numerelor — 4 salturi totale!",
    t2_h1: "Pornești de la 0, sari 4× câte +3",
    t2_h2: "0 → 3 → 6 → 9 → 12 — atinge 12!",
    t2_q: "5 + 5 + 5 = ?  (ca înmulțire: 3 × 5)",
    t2_q_15: "15",
    t2_q_35: "35",
    t2_q_10: "10",
    t2_q_555: "555",
    t3_title: "Tabla înmulțirii 1–5",
    t3_text: "Tabla înmulțirii listează toate înmulțirile. Învață tabla lui 3: 1×3=3, 2×3=6, 3×3=9 … Fiecare pas este cu 3 mai mult! Observi tiparul?",
    t3_b1: "Fiecare rând următor = încă o grupă",
    t3_b2: "2×3 = 3+3 = 6; 3×3 = 3+3+3 = 9",
    t3_b3: "Tabla înmulțirii economisește timp!",
    t3_inst: "Pornește de la 0 și sari 4 pași de câte 3 — ajunge la 4 × 3!",
    t3_h1: "1×3=3, 2×3=6, 3×3=9, 4×3=?",
    t3_h2: "9 + 3 = 12 — atinge 12!",
    t3_q: "Cât este 5 × 3?",
    t3_q_15: "15",
    t3_q_8: "8",
    t3_q_53: "53",
    t3_q_12: "12",
  },
};

// ─── Topic definitions ────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <GroupsSvg groups={3} perGroup={4} emoji="🍎" />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [4, 4, 4],
      answer: 12,
      blockIcon: "🍎",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_7", "t1_q_43", "t1_q_9", "t1_q_12"],
      answer: "t1_q_12",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: (lang) => <RepAddSvg groups={4} perGroup={3} lang={lang as string} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 15,
      step: 3,
      start: 0,
      target: 12,
      showJumps: true,
      jumpCount: 4,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_35", "t2_q_10", "t2_q_555", "t2_q_15"],
      answer: "t2_q_15",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <TimesTableSvg table={3} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 15,
      step: 3,
      start: 0,
      target: 12,
      showJumps: true,
      jumpCount: 4,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_8", "t3_q_53", "t3_q_12", "t3_q_15"],
      answer: "t3_q_15",
    },
  },
];

// ─── Explorer definition ──────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "✖️",
  topics: TOPICS,
  rounds: [],
};

// ─── Export ───────────────────────────────────────────────────────────────────

const MultiplicationExplorer = memo(function MultiplicationExplorer({
  color = "#FF9500",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={2} explorerId="math_g2_multiplication" color={color} lang={lang} onDone={onDone} />;
});

export default MultiplicationExplorer;
