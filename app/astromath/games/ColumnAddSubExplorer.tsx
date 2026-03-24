"use client";
// ColumnAddSubExplorer — Column addition/subtraction WITHOUT carrying for Grade 2 (islands i3, i4)
// Uses new topic-based ExplorerEngine mode

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Column layout showing tens and ones separately ─────────────────────

const ColumnSvg = memo(function ColumnSvg({
  a = 34, b = 25, op = "+" as "+" | "-", lang = "en",
}: { a?: number; b?: number; op?: "+" | "-"; lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  const tensA = Math.floor(a / 10); const onesA = a % 10;
  const tensB = Math.floor(b / 10); const onesB = b % 10;
  const result = op === "+" ? a + b : a - b;
  const tensR = Math.floor(result / 10); const onesR = result % 10;
  return (
    <svg width="100%" viewBox="0 0 240 150">
      <defs>
        <linearGradient id="colG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FF88" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="150" fill="url(#colG)" rx="16" />
      {/* Column headers */}
      <text x="130" y="26" fontSize="10" fontWeight="700"
        fill="#06B6D4" textAnchor="middle" opacity="0.8">{t.col_tens}</text>
      <text x="180" y="26" fontSize="10" fontWeight="700"
        fill="#FFD700" textAnchor="middle" opacity="0.8">{t.col_ones}</text>
      {/* Divider line */}
      <line x1="100" y1="30" x2="210" y2="30"
        stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      <line x1="155" y1="28" x2="155" y2="130"
        stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
      {/* Operator */}
      <text x="90" y="60" fontSize="20" fontWeight="900"
        fill="rgba(255,255,255,0.55)" textAnchor="middle" dominantBaseline="middle">{op}</text>
      {/* Row A */}
      <text x="130" y="60" fontSize="22" fontWeight="900"
        fill="#06B6D4" textAnchor="middle" dominantBaseline="middle">{tensA}</text>
      <text x="180" y="60" fontSize="22" fontWeight="900"
        fill="#FFD700" textAnchor="middle" dominantBaseline="middle">{onesA}</text>
      {/* Row B */}
      <text x="130" y="95" fontSize="22" fontWeight="900"
        fill="#06B6D4" textAnchor="middle" dominantBaseline="middle">{tensB}</text>
      <text x="180" y="95" fontSize="22" fontWeight="900"
        fill="#FFD700" textAnchor="middle" dominantBaseline="middle">{onesB}</text>
      {/* Result line */}
      <line x1="100" y1="108" x2="210" y2="108"
        stroke="rgba(255,255,255,0.35)" strokeWidth="2" />
      {/* Result */}
      <text x="130" y="130" fontSize="22" fontWeight="900"
        fill="#00FF88" textAnchor="middle" dominantBaseline="middle">{tensR}</text>
      <text x="180" y="130" fontSize="22" fontWeight="900"
        fill="#00FF88" textAnchor="middle" dominantBaseline="middle">{onesR}</text>
    </svg>
  );
});

// ─── SVG: Visual blocks showing column subtraction ────────────────────────────

const SubColSvg = memo(function SubColSvg({ a = 57, b = 23, lang = "en" }: { a?: number; b?: number; lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  const result = a - b;
  return (
    <svg width="100%" viewBox="0 0 240 130">
      <defs>
        <linearGradient id="subColG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6B6B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FF9B9B" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="130" fill="url(#subColG)" rx="16" />
      {/* Equation visual */}
      <text x="55" y="65" fontSize="30" fontWeight="900"
        fill="rgba(255,255,255,0.85)" textAnchor="middle" dominantBaseline="middle">{a}</text>
      <text x="100" y="65" fontSize="24" fontWeight="900"
        fill="rgba(255,255,255,0.5)" textAnchor="middle" dominantBaseline="middle">−</text>
      <text x="145" y="65" fontSize="30" fontWeight="900"
        fill="rgba(255,255,255,0.85)" textAnchor="middle" dominantBaseline="middle">{b}</text>
      <text x="190" y="65" fontSize="24" fontWeight="900"
        fill="rgba(255,255,255,0.5)" textAnchor="middle" dominantBaseline="middle">=</text>
      <text x="225" y="65" fontSize="30" fontWeight="900"
        fill="#FF6B6B" textAnchor="middle" dominantBaseline="middle">{result}</text>
      {/* Hint row */}
      <text x="120" y="105" fontSize="10" fill="rgba(255,255,255,0.4)" textAnchor="middle">
        {t.col_tens}: {Math.floor(a/10)} − {Math.floor(b/10)} = {Math.floor(result/10)}
        {"   "}
        {t.col_ones}: {a%10} − {b%10} = {result%10}
      </text>
    </svg>
  );
});

// ─── SVG: Missing number ─────────────────────────────────────────────────────

const MissingNumSvg = memo(function MissingNumSvg({ a = 43, b = 21, result = 64, op = "+" as "+" | "-" }: { a?: number; b?: number; result?: number; op?: "+" | "-" }) {
  return (
    <svg width="100%" viewBox="0 0 240 110">
      <defs>
        <linearGradient id="misG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B44DFF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#D88FFF" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="110" fill="url(#misG)" rx="16" />
      <text x="55" y="60" fontSize="28" fontWeight="900"
        fill="rgba(255,255,255,0.85)" textAnchor="middle" dominantBaseline="middle">{a}</text>
      <text x="95" y="60" fontSize="22" fontWeight="900"
        fill="rgba(255,255,255,0.5)" textAnchor="middle" dominantBaseline="middle">{op}</text>
      <text x="135" y="60" fontSize="28" fontWeight="900"
        fill="#B44DFF" textAnchor="middle" dominantBaseline="middle">?</text>
      <text x="175" y="60" fontSize="22" fontWeight="900"
        fill="rgba(255,255,255,0.5)" textAnchor="middle" dominantBaseline="middle">=</text>
      <text x="215" y="60" fontSize="28" fontWeight="900"
        fill="rgba(255,255,255,0.85)" textAnchor="middle" dominantBaseline="middle">{result}</text>
      <text x="120" y="92" fontSize="11" fill="#B44DFF" textAnchor="middle" opacity="0.7">
        {a} {op} ? = {result}  →  ? = {b}
      </text>
    </svg>
  );
});

// ─── Labels ───────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    col_tens: "T",
    col_ones: "O",
    explorer_title: "Column Addition & Subtraction",
    t1_title: "Adding in Columns",
    t1_text: "In column addition, we add the ONES first, then the TENS. 34 + 25: ones: 4 + 5 = 9. Tens: 3 + 2 = 5. Answer: 59! Each column stays separate.",
    t1_b1: "Step 1: Add the ones (right column)",
    t1_b2: "Step 2: Add the tens (left column)",
    t1_b3: "Put together: tens + ones = answer",
    t1_inst: "Start at 34 and add 25 — first add ones, then tens!",
    t1_h1: "Ones: 4 + 5 = 9. Tens: 3 + 2 = 5",
    t1_h2: "5 tens and 9 ones = 59 — tap 59!",
    t1_q: "What is 43 + 25?",
    t1_q_68: "68",
    t1_q_625: "625",
    t1_q_70: "70",
    t1_q_47: "47",
    t2_title: "Subtracting in Columns",
    t2_text: "Column subtraction works the same way — subtract ONES first, then TENS. 57 − 23: ones: 7 − 3 = 4. Tens: 5 − 2 = 3. Answer: 34!",
    t2_b1: "Step 1: Subtract the ones",
    t2_b2: "Step 2: Subtract the tens",
    t2_b3: "No borrowing needed (yet)!",
    t2_inst: "Start at 57 and subtract 23 — ones first, then tens!",
    t2_h1: "Ones: 7 − 3 = 4. Tens: 5 − 2 = 3",
    t2_h2: "3 tens and 4 ones = 34 — tap 34!",
    t2_q: "What is 76 − 42?",
    t2_q_34: "34",
    t2_q_118: "118",
    t2_q_30: "30",
    t2_q_44: "44",
    t3_title: "Missing Number Problems",
    t3_text: "Sometimes we need to find the missing number. 43 + ? = 64. We know: 64 − 43 = ?. Subtract to find what's missing! Use the column method.",
    t3_b1: "Addition and subtraction are opposites",
    t3_b2: "To find ?, subtract what you know",
    t3_b3: "43 + ? = 64 → ? = 64 − 43 = 21",
    t3_inst: "Find the missing number: 35 + ? = 67",
    t3_h1: "67 − 35 = ?: ones: 7−5=2, tens: 6−3=3",
    t3_h2: "35 + 32 = 67 — tap 32!",
    t3_q: "What is the missing number? 52 + __ = 75",
    t3_q_23: "23",
    t3_q_127: "127",
    t3_q_20: "20",
    t3_q_3: "3",
  },
  de: {
    col_tens: "Z",
    col_ones: "E",
    explorer_title: "Schriftliches Rechnen",
    t1_title: "Schriftlich addieren",
    t1_text: "Beim schriftlichen Addieren addieren wir zuerst die EINER, dann die ZEHNER. 34 + 25: Einer: 4 + 5 = 9. Zehner: 3 + 2 = 5. Ergebnis: 59! Jede Spalte für sich.",
    t1_b1: "Schritt 1: Einer addieren (rechte Spalte)",
    t1_b2: "Schritt 2: Zehner addieren (linke Spalte)",
    t1_b3: "Zusammen: Zehner + Einer = Ergebnis",
    t1_inst: "Starte bei 34 und addiere 25 — erst Einer, dann Zehner!",
    t1_h1: "Einer: 4 + 5 = 9. Zehner: 3 + 2 = 5",
    t1_h2: "5 Zehner und 9 Einer = 59 — tippe auf 59!",
    t1_q: "Was ist 43 + 25?",
    t1_q_68: "68",
    t1_q_625: "625",
    t1_q_70: "70",
    t1_q_47: "47",
    t2_title: "Schriftlich subtrahieren",
    t2_text: "Schriftliche Subtraktion funktioniert genauso — erst EINER, dann ZEHNER subtrahieren. 57 − 23: Einer: 7 − 3 = 4. Zehner: 5 − 2 = 3. Ergebnis: 34!",
    t2_b1: "Schritt 1: Einer subtrahieren",
    t2_b2: "Schritt 2: Zehner subtrahieren",
    t2_b3: "Kein Entbündeln nötig (noch nicht)!",
    t2_inst: "Starte bei 57 und subtrahiere 23 — erst Einer, dann Zehner!",
    t2_h1: "Einer: 7 − 3 = 4. Zehner: 5 − 2 = 3",
    t2_h2: "3 Zehner und 4 Einer = 34 — tippe auf 34!",
    t2_q: "Was ist 76 − 42?",
    t2_q_34: "34",
    t2_q_118: "118",
    t2_q_30: "30",
    t2_q_44: "44",
    t3_title: "Fehlende Zahlen finden",
    t3_text: "Manchmal müssen wir die fehlende Zahl finden. 43 + ? = 64. Wir wissen: 64 − 43 = ?. Subtrahieren, um das Fehlende zu finden! Nutze die schriftliche Methode.",
    t3_b1: "Addition und Subtraktion sind Gegensätze",
    t3_b2: "Um ? zu finden, subtrahiere das Bekannte",
    t3_b3: "43 + ? = 64 → ? = 64 − 43 = 21",
    t3_inst: "Finde die fehlende Zahl: 35 + ? = 67",
    t3_h1: "67 − 35 = ?: Einer: 7−5=2, Zehner: 6−3=3",
    t3_h2: "35 + 32 = 67 — tippe auf 32!",
    t3_q: "Welche Zahl fehlt? 52 + __ = 75",
    t3_q_23: "23",
    t3_q_127: "127",
    t3_q_20: "20",
    t3_q_3: "3",
  },
  hu: {
    col_tens: "T",
    col_ones: "E",
    explorer_title: "Oszlopos összeadás és kivonás",
    t1_title: "Oszlopos összeadás",
    t1_text: "Oszlopos összeadáskor először az EGYESEKET adjuk össze, majd a TÍZESEKET. 34 + 25: egyesek: 4 + 5 = 9. Tízesek: 3 + 2 = 5. Eredmény: 59! Minden oszlop külön.",
    t1_b1: "1. lépés: Egyeseket összeadni (jobb oszlop)",
    t1_b2: "2. lépés: Tízeseket összeadni (bal oszlop)",
    t1_b3: "Együtt: tízesek + egyesek = eredmény",
    t1_inst: "Indulj a 34-ről és add hozzá a 25-öt — először egyesek, majd tízesek!",
    t1_h1: "Egyesek: 4 + 5 = 9. Tízesek: 3 + 2 = 5",
    t1_h2: "5 tízes és 9 egyes = 59 — koppints a 59-re!",
    t1_q: "Mennyi 43 + 25?",
    t1_q_68: "68",
    t1_q_625: "625",
    t1_q_70: "70",
    t1_q_47: "47",
    t2_title: "Oszlopos kivonás",
    t2_text: "Az oszlopos kivonás ugyanúgy működik — először EGYESEKET vonunk ki, majd TÍZESEKET. 57 − 23: egyesek: 7 − 3 = 4. Tízesek: 5 − 2 = 3. Eredmény: 34!",
    t2_b1: "1. lépés: Egyeseket kivonni",
    t2_b2: "2. lépés: Tízeseket kivonni",
    t2_b3: "Még nincs átvitel szükséges!",
    t2_inst: "Indulj az 57-ről és von ki 23-at — először egyesek, majd tízesek!",
    t2_h1: "Egyesek: 7 − 3 = 4. Tízesek: 5 − 2 = 3",
    t2_h2: "3 tízes és 4 egyes = 34 — koppints a 34-re!",
    t2_q: "Mennyi 76 − 42?",
    t2_q_34: "34",
    t2_q_118: "118",
    t2_q_30: "30",
    t2_q_44: "44",
    t3_title: "Hiányzó számok megtalálása",
    t3_text: "Néha a hiányzó számot kell megtalálni. 43 + ? = 64. Tudjuk: 64 − 43 = ?. Von ki, hogy megtaláld a hiányzót! Használd az oszlopos módszert.",
    t3_b1: "Az összeadás és kivonás egymás fordítottja",
    t3_b2: "A ? megtalálásához von ki a tudottat",
    t3_b3: "43 + ? = 64 → ? = 64 − 43 = 21",
    t3_inst: "Találd meg a hiányzó számot: 35 + ? = 67",
    t3_h1: "67 − 35 = ?: egyesek: 7−5=2, tízesek: 6−3=3",
    t3_h2: "35 + 32 = 67 — koppints a 32-re!",
    t3_q: "Melyik szám hiányzik? 52 + __ = 75",
    t3_q_23: "23",
    t3_q_127: "127",
    t3_q_20: "20",
    t3_q_3: "3",
  },
  ro: {
    col_tens: "Z",
    col_ones: "U",
    explorer_title: "Adunare și scădere în coloană",
    t1_title: "Adunare în coloană",
    t1_text: "La adunarea în coloană, adunăm mai întâi UNITĂȚILE, apoi ZECILE. 34 + 25: unități: 4 + 5 = 9. Zeci: 3 + 2 = 5. Rezultat: 59! Fiecare coloană separat.",
    t1_b1: "Pasul 1: Adunăm unitățile (coloana dreaptă)",
    t1_b2: "Pasul 2: Adunăm zecile (coloana stângă)",
    t1_b3: "Împreună: zeci + unități = rezultat",
    t1_inst: "Pornește de la 34 și adaugă 25 — mai întâi unități, apoi zeci!",
    t1_h1: "Unități: 4 + 5 = 9. Zeci: 3 + 2 = 5",
    t1_h2: "5 zeci și 9 unități = 59 — atinge 59!",
    t1_q: "Cât este 43 + 25?",
    t1_q_68: "68",
    t1_q_625: "625",
    t1_q_70: "70",
    t1_q_47: "47",
    t2_title: "Scădere în coloană",
    t2_text: "Scăderea în coloană funcționează la fel — mai întâi UNITĂȚILE, apoi ZECILE. 57 − 23: unități: 7 − 3 = 4. Zeci: 5 − 2 = 3. Rezultat: 34!",
    t2_b1: "Pasul 1: Scădem unitățile",
    t2_b2: "Pasul 2: Scădem zecile",
    t2_b3: "Nu avem nevoie de împrumut (deocamdată)!",
    t2_inst: "Pornește de la 57 și scade 23 — unități întâi, apoi zeci!",
    t2_h1: "Unități: 7 − 3 = 4. Zeci: 5 − 2 = 3",
    t2_h2: "3 zeci și 4 unități = 34 — atinge 34!",
    t2_q: "Cât este 76 − 42?",
    t2_q_34: "34",
    t2_q_118: "118",
    t2_q_30: "30",
    t2_q_44: "44",
    t3_title: "Găsirea numărului lipsă",
    t3_text: "Uneori trebuie să găsim numărul lipsă. 43 + ? = 64. Știm: 64 − 43 = ?. Scădem pentru a găsi ce lipsește! Folosim metoda coloanei.",
    t3_b1: "Adunarea și scăderea sunt opuse",
    t3_b2: "Pentru ? scădem ce știm",
    t3_b3: "43 + ? = 64 → ? = 64 − 43 = 21",
    t3_inst: "Găsește numărul lipsă: 35 + ? = 67",
    t3_h1: "67 − 35 = ?: unități: 7−5=2, zeci: 6−3=3",
    t3_h2: "35 + 32 = 67 — atinge 32!",
    t3_q: "Care este numărul lipsă? 52 + __ = 75",
    t3_q_23: "23",
    t3_q_127: "127",
    t3_q_20: "20",
    t3_q_3: "3",
  },
};

// ─── Topic definitions ────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <ColumnSvg a={34} b={25} op="+" lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "number-line",
      min: 30,
      max: 65,
      step: 1,
      start: 34,
      target: 59,
      showJumps: true,
      jumpCount: 25,
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_625", "t1_q_70", "t1_q_47", "t1_q_68"],
      answer: "t1_q_68",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: (lang) => <SubColSvg a={57} b={23} lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "number-line",
      min: 30,
      max: 60,
      step: 1,
      start: 57,
      target: 34,
      showJumps: true,
      jumpCount: 23,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_118", "t2_q_30", "t2_q_44", "t2_q_34"],
      answer: "t2_q_34",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <MissingNumSvg a={43} b={21} result={64} op="+" />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 25,
      max: 40,
      step: 1,
      start: 25,
      target: 32,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_127", "t3_q_20", "t3_q_3", "t3_q_23"],
      answer: "t3_q_23",
    },
  },
];

// ─── Explorer definition ──────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "➕",
  topics: TOPICS,
  rounds: [],
};

// ─── Export ───────────────────────────────────────────────────────────────────

const ColumnAddSubExplorer = memo(function ColumnAddSubExplorer({
  color = "#00FF88",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={2} explorerId="math_g2_columnaddsub" color={color} lang={lang} onDone={onDone} />;
});

export default ColumnAddSubExplorer;
