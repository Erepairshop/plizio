"use client";
// DivisionExplorer4 — Division concepts for Grade 4 (island i3)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="divGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#divGrad1)" rx="16" />
      {/* 12 dots being divided into 3 groups */}
      <g transform="translate(40, 50)">
        {[0, 1, 2].map((g) => (
          <g key={g} transform={`translate(${g * 80}, 0)`}>
            <rect x="-30" y="-30" width="60" height="60" fill="white" fillOpacity="0.2" stroke="#3B82F6" strokeWidth="1" rx="8" />
            <circle cx="-12" cy="-12" r="6" fill="#3B82F6" />
            <circle cx="12" cy="-12" r="6" fill="#3B82F6" />
            <circle cx="-12" cy="12" r="6" fill="#3B82F6" />
            <circle cx="12" cy="12" r="6" fill="#3B82F6" />
          </g>
        ))}
      </g>
      <text x="120" y="125" fontSize="14" fontWeight="bold" fill="#1E40AF" textAnchor="middle">12 ÷ 3 = 4</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="divGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#EF4444" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#divGrad2)" rx="16" />
      {/* Inverse operation visual */}
      <g transform="translate(120, 70)">
        <text x="-60" y="-15" fontSize="16" fontWeight="bold" fill="#B45309" textAnchor="middle">5 × 4 = 20</text>
        <path d="M -30,5 Q 0,25 30,5" stroke="#B45309" fill="none" strokeWidth="2" strokeDasharray="4 2" />
        <text x="60" y="-15" fontSize="16" fontWeight="bold" fill="#B45309" textAnchor="middle">20 ÷ 4 = 5</text>
        <path d="M 30,-35 Q 0,-55 -30,-35" stroke="#B45309" fill="none" strokeWidth="2" markerEnd="url(#arrow)" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="divGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#D946EF" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#divGrad3)" rx="16" />
      {/* Grouping / Bennfoglalás */}
      <g transform="translate(45, 60)">
        {Array.from({ length: 15 }).map((_, i) => (
          <circle key={i} cx={(i % 5) * 35} cy={Math.floor(i / 5) * 25} r="8" fill="#8B5CF6" opacity="0.7" />
        ))}
        <rect x="-10" y="-10" width="160" height="20" rx="10" fill="none" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5 3" />
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Division Explorer",
    t1_title: "Sharing Equally",
    t1_text: "Division means splitting a large number into equal groups. If you share 12 cookies among 3 friends, everyone gets 4!",
    t1_b1: "The total is called the dividend",
    t1_b2: "The number you divide by is the divisor",
    t1_b3: "The result is called the quotient",
    t1_inst: "Divide 15 blocks into 3 equal groups. How many in each?",
    t1_h1: "Try to move the same number of blocks to each spot.",
    t1_h2: "15 divided by 3 is 5.",
    t1_q: "If 20 apples are divided into 4 baskets, how many are in each?",
    t1_q_a: "4",
    t1_q_b: "5",
    t1_q_c: "6",
    t1_q_d: "10",
    t2_title: "Inverse of Multiplication",
    t2_text: "Division is the opposite of multiplication. If you know that 5 × 4 = 20, then you already know that 20 ÷ 4 = 5!",
    t2_b1: "Multiplication and division are a family",
    t2_b2: "Use your multiplication table to divide",
    t2_b3: "Check your answer by multiplying back",
    t2_inst: "Jump in steps of 8 to reach 32 on the number line!",
    t2_h1: "Start at 0 and count: 8, 16, 24, 32.",
    t2_h2: "Tap the number 32.",
    t2_q: "Which multiplication helps solve 42 ÷ 6?",
    t2_q_a: "6 × 5 = 30",
    t2_q_b: "6 × 7 = 42",
    t2_q_c: "6 × 8 = 48",
    t2_q_d: "6 × 6 = 36",
    t3_title: "Division as Grouping",
    t3_text: "Division also asks: 'How many groups of this size can I make?' For 15 objects, how many groups of 5 are there?",
    t3_b1: "Count how many groups you can fit",
    t3_b2: "No objects should be left over here",
    t3_b3: "Each group must be the same size",
    t3_inst: "Create groups of 10 to reach 40!",
    t3_h1: "Each block represents 10 units.",
    t3_h2: "You need 4 blocks to make 40.",
    t3_q: "How many groups of 10 are in 100?",
    t3_q_a: "1",
    t3_q_b: "10",
    t3_q_c: "5",
    t3_q_d: "100",
  },
  de: {
    explorer_title: "Dividieren Entdecker",
    t1_title: "Gerecht Teilen",
    t1_text: "Division bedeutet, eine große Zahl in gleich große Gruppen aufzuteilen. Wenn du 12 Kekse mit 3 Freunden teilst, bekommt jeder 4!",
    t1_b1: "Die Gesamtzahl heißt Dividend",
    t1_b2: "Die Zahl, durch die man teilt, ist der Divisor",
    t1_b3: "Das Ergebnis heißt Quotient",
    t1_inst: "Teile 15 Blöcke in 3 gleiche Gruppen auf!",
    t1_h1: "Versuche, in jede Gruppe gleich viele zu legen.",
    t1_h2: "15 geteilt durch 3 ist 5.",
    t1_q: "Wenn 20 Äpfel auf 4 Körbe verteilt werden, wie viele sind in jedem?",
    t1_q_a: "4",
    t1_q_b: "5",
    t1_q_c: "6",
    t1_q_d: "10",
    t2_title: "Umkehrung der Multiplikation",
    t2_text: "Division ist das Gegenteil von Multiplikation. Wenn du weißt, dass 5 × 4 = 20 ist, dann weißt du auch, dass 20 ÷ 4 = 5 ist!",
    t2_b1: "Malnehmen und Teilen gehören zusammen",
    t2_b2: "Nutze das Einmaleins zum Teilen",
    t2_b3: "Prüfe dein Ergebnis mit der Malrechnung",
    t2_inst: "Springe in 8er-Schritten bis zur 32 auf dem Zahlenstrahl!",
    t2_h1: "Starte bei 0 und zähle: 8, 16, 24, 32.",
    t2_h2: "Tippe auf die 32.",
    t2_q: "Welche Malaufgabe hilft bei 42 ÷ 6?",
    t2_q_a: "6 × 5 = 30",
    t2_q_b: "6 × 7 = 42",
    t2_q_c: "6 × 8 = 48",
    t2_q_d: "6 × 6 = 36",
    t3_title: "Division als Aufteilen",
    t3_text: "Division fragt auch: 'Wie viele Gruppen dieser Größe kann ich bilden?' Wie viele 5er-Gruppen passen in 15?",
    t3_b1: "Zähle, wie viele Gruppen hineinpassen",
    t3_b2: "Es sollte nichts übrig bleiben",
    t3_b3: "Jede Gruppe muss gleich groß sein",
    t3_inst: "Bilde 10er Gruppen, um 40 zu erreichen!",
    t3_h1: "Jeder Block steht für 10 Einheiten.",
    t3_h2: "Du brauchst 4 Blöcke für 40.",
    t3_q: "Wie viele 10er-Gruppen sind in 100?",
    t3_q_a: "1",
    t3_q_b: "10",
    t3_q_c: "5",
    t3_q_d: "100",
  },
  hu: {
    explorer_title: "Osztás felfedezése",
    t1_title: "Egyenlő részekre osztás",
    t1_text: "Az osztás azt jelenti, hogy egy nagyobb mennyiséget egyenlő csoportokra bontunk. Ha 12 sütit szétosztasz 3 barátod között, mindenki 4-et kap!",
    t1_b1: "Az osztandó a teljes mennyiség",
    t1_b2: "Az osztó mutatja meg a csoportok számát",
    t1_b3: "A hányados az osztás eredménye",
    t1_inst: "Ossz szét 15 blokkot 3 egyenlő csoportba!",
    t1_h1: "Minden helyre ugyanannyi blokkot tegyél.",
    t1_h2: "15 osztva 3-mal az 5.",
    t1_q: "Ha 20 almát szétosztunk 4 kosárba, hány alma lesz egyben?",
    t1_q_a: "4",
    t1_q_b: "5",
    t1_q_c: "6",
    t1_q_d: "10",
    t2_title: "A szorzás fordítottja",
    t2_text: "Az osztás a szorzás ellentéte. Ha tudod, hogy 5 × 4 = 20, akkor azt is tudod, hogy 20 ÷ 4 = 5!",
    t2_b1: "A szorzás és az osztás egy családot alkot",
    t2_b2: "Használd a szorzótáblát az osztáshoz",
    t2_b3: "Ellenőrizd az eredményt szorzással",
    t2_inst: "Ugorj 8-asával a 32-ig a számegyenesen!",
    t2_h1: "Indulj 0-ról és számolj: 8, 16, 24, 32.",
    t2_h2: "Koppints a 32-re.",
    t2_q: "Melyik szorzás segít a 42 ÷ 6 megoldásában?",
    t2_q_a: "6 × 5 = 30",
    t2_q_b: "6 × 7 = 42",
    t2_q_c: "6 × 8 = 48",
    t2_q_d: "6 × 6 = 36",
    t3_title: "Osztás mint bennfoglalás",
    t3_text: "Az osztás azt is kérdezheti: 'Hány ilyen méretű csoportot tudok csinálni?' 15 tárgyból hány 5-ös csoport jön ki?",
    t3_b1: "Számold meg, hány csoport fér bele",
    t3_b2: "Most még nem marad semmi az osztás végén",
    t3_b3: "Minden csoportnak ugyanakkorának kell lennie",
    t3_inst: "Hozz létre 10-es csoportokat, hogy elérd a 40-et!",
    t3_h1: "Minden blokk 10-et ér.",
    t3_h2: "4 darab blokkra lesz szükséged a 40-hez.",
    t3_q: "Hány darab 10-es csoport van 100-ban?",
    t3_q_a: "1",
    t3_q_b: "10",
    t3_q_c: "5",
    t3_q_d: "100",
  },
  ro: {
    explorer_title: "Explorator Împărțire",
    t1_title: "Împărțirea egală",
    t1_text: "Împărțirea înseamnă a separa un număr mare în grupuri egale. Dacă împarți 12 biscuiți la 3 prieteni, fiecare primește 4!",
    t1_b1: "Deîmpărțitul este cantitatea totală",
    t1_b2: "Împărțitorul este numărul de grupuri",
    t1_b3: "Câtul este rezultatul împărțirii",
    t1_inst: "Împarte 15 blocuri în 3 grupuri egale!",
    t1_h1: "Pune același număr de blocuri în fiecare loc.",
    t1_h2: "15 împărțit la 3 este 5.",
    t1_q: "Dacă 20 de mere sunt împărțite în 4 coșuri, câte sunt în fiecare?",
    t1_q_a: "4",
    t1_q_b: "5",
    t1_q_c: "6",
    t1_q_d: "10",
    t2_title: "Inversa înmulțirii",
    t2_text: "Împărțirea este opusul înmulțirii. Dacă știi că 5 × 4 = 20, atunci știi deja că 20 ÷ 4 = 5!",
    t2_b1: "Înmulțirea și împărțirea fac parte din aceeași familie",
    t2_b2: "Folosește tabla înmulțirii pentru a împărți",
    t2_b3: "Verifică rezultatul prin înmulțire",
    t2_inst: "Găsește rezultatul lui 32 ÷ 8 pe linia numerelor!",
    t2_h1: "De câte ori intră 8 în 32?",
    t2_h2: "8, 16, 24... următorul pas este 32!",
    t2_q: "Care înmulțire te ajută să rezolvi 42 ÷ 6?",
    t2_q_a: "6 × 5 = 30",
    t2_q_b: "6 × 7 = 42",
    t2_q_c: "6 × 8 = 48",
    t2_q_d: "6 × 6 = 36",
    t3_title: "Împărțirea ca grupare",
    t3_text: "Împărțirea mai întreabă: 'Câte grupuri de această mărime pot face?' Din 15 obiecte, câte grupuri de 5 sunt?",
    t3_b1: "Numără câte grupuri încap",
    t3_b2: "Nu trebuie să rămână rest aici",
    t3_b3: "Fiecare grup trebuie să fie de aceeași mărime",
    t3_inst: "Creează grupuri de 10 pentru a ajunge la 40!",
    t3_h1: "Fiecare bloc reprezintă 10 unități.",
    t3_h2: "Ai nevoie de 4 blocuri pentru a face 40.",
    t3_q: "Câte grupuri de 10 sunt în 100?",
    t3_q_a: "1",
    t3_q_b: "10",
    t3_q_c: "5",
    t3_q_d: "100",
  },
};

// ─── TOPIC DEFINÍCIÓK ────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [5, 5, 5],
      answer: 15,
      blockIcon: "🍪",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_b",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 40,
      start: 0,
      target: 32,
      step: 8,
      showJumps: true,
      jumpCount: 4,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_b",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [1, 1, 1, 1], // Engine logic: 4 blocks of value 10
      answer: 4,
      blockIcon: "📦",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_b",
    },
  },
];

// ─── EXPLORER DEFINÍCIÓ ──────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "➗",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const DivisionExplorer4 = memo(function DivisionExplorer4({
  color = "#3B82F6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="math_g4_division" color={color} lang={lang} onDone={onDone} />;
});

export default DivisionExplorer4;
