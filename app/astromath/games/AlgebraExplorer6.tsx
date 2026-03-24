"use client";
// AlgebraExplorer6 — Variables & Simple Equations for Grade 6 (island i5)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="algGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#algGrad1)" rx="16" />
      {/* Visualizing Variables: 3x + 2 */}
      <g transform="translate(60, 50)">
        <rect x="0" y="0" width="30" height="30" fill="#7C3AED" rx="4" />
        <text x="15" y="20" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">x</text>
        <rect x="35" y="0" width="30" height="30" fill="#7C3AED" rx="4" />
        <text x="50" y="20" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">x</text>
        <rect x="70" y="0" width="30" height="30" fill="#7C3AED" rx="4" />
        <text x="85" y="20" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">x</text>
        
        <text x="115" y="22" fontSize="20" fontWeight="bold" fill="#5B21B6">+</text>
        
        <circle cx="140" cy="15" r="8" fill="#F59E0B" />
        <circle cx="160" cy="15" r="8" fill="#F59E0B" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="algGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#algGrad2)" rx="16" />
      {/* Equation Balance Visual */}
      <g transform="translate(120, 70)">
        <text x="-50" y="0" fontSize="18" fontWeight="bold" fill="#1E40AF" textAnchor="middle">x + 5</text>
        <text x="0" y="0" fontSize="22" fontWeight="bold" fill="#1E3A8A" textAnchor="middle">=</text>
        <text x="50" y="0" fontSize="18" fontWeight="bold" fill="#1E40AF" textAnchor="middle">12</text>
        <path d="M -80,20 L 80,20" stroke="#1E40AF" strokeWidth="2" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="algGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#algGrad3)" rx="16" />
      {/* Multi-step solver visual */}
      <g transform="translate(120, 45)">
        <text x="0" y="0" fontSize="18" fontWeight="bold" fill="#065F46" textAnchor="middle">2x + 4 = 10</text>
        <path d="M 0,10 L 0,25" stroke="#059669" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="0" y="45" fontSize="18" fontWeight="bold" fill="#059669" textAnchor="middle">2x = 6</text>
        <path d="M 0,55 L 0,70" stroke="#059669" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="0" y="90" fontSize="20" fontWeight="900" fill="#047857" textAnchor="middle">x = 3</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Algebra Basics",
    t1_title: "What are Variables?",
    t1_text: "In algebra, we use letters like 'x' to represent numbers we don't know yet. A 'variable' is like a placeholder or a mystery box.",
    t1_b1: "x can represent any number",
    t1_b2: "3x means 3 times x",
    t1_b3: "Expressions combine numbers and variables",
    t1_inst: "If x = 4, evaluate the expression: 2x + 3. How much is it?",
    t1_h1: "Replace x with 4: (2 * 4) + 3.",
    t1_h2: "2 * 4 = 8, and 8 + 3 = 11. Drag 11 blocks!",
    t1_q: "Evaluate 5x - 2 when x = 3.",
    t1_q_a: "13",
    t1_q_b: "15",
    t1_q_c: "10",
    t1_q_d: "17",
    t2_title: "Balance the Equation",
    t2_text: "An equation is like a balance scale. Both sides must be equal. If you do something to one side, you must do the same to the other!",
    t2_b1: "The '=' sign means 'the same as'",
    t2_b2: "Keep the scale balanced",
    t2_b3: "Isolate x to find its value",
    t2_inst: "Balance the scale! x + 7 = 15. What weight should x have?",
    t2_h1: "Left side is x + 7. Right side is 15.",
    t2_h2: "Subtract 7 from 15 to find x. It's 8.",
    t2_q: "If x - 10 = 5, what is x?",
    t2_q_a: "15",
    t2_q_b: "5",
    t2_q_c: "50",
    t2_q_d: "0",
    t3_title: "Solving Step-by-Step",
    t3_text: "To solve equations like 2x + 4 = 10, work backwards. First, remove the constant (+4) by subtracting it, then divide by the coefficient (2).",
    t3_b1: "Undo addition/subtraction first",
    t3_b2: "Undo multiplication/division second",
    t3_b3: "Check your answer by plugging it back in",
    t3_inst: "Solve the equation: 2x + 5 = 13",
    t3_step1: "Subtract 5 from both sides (13 - 5 = ?)",
    t3_step2: "Divide both sides by 2 (8 / 2 = ?)",
    t3_h1: "Step 1: 13 - 5 = 8. Step 2: 8 divided by 2 is 4.",
    t3_h2: "Select 8, then select 4.",
    t3_q: "Solve for x: 3x + 1 = 10",
    t3_q_a: "3",
    t3_q_b: "4",
    t3_q_c: "9",
    t3_q_d: "2",
  },
  hu: {
    explorer_title: "Algebra alapok",
    t1_title: "Mik azok a változók?",
    t1_text: "Az algebrában betűket (például x-et) használunk olyan számok helyett, amiket még nem ismerünk. A változó olyan, mint egy üres doboz vagy egy titkos helyfoglaló.",
    t1_b1: "Az x bármilyen számot jelenthet",
    t1_b2: "A 3x jelentése: 3-szor x",
    t1_b3: "A kifejezések számokat és betűket kombinálnak",
    t1_inst: "Ha x = 4, mennyi a 2x + 3 kifejezés értéke?",
    t1_h1: "Helyettesítsd az x-et 4-gyel: (2 * 4) + 3.",
    t1_h2: "2 * 4 = 8, és 8 + 3 = 11. Húzz be 11 blokkot!",
    t1_q: "Mennyi 5x - 2 értéke, ha x = 3?",
    t1_q_a: "13",
    t1_q_b: "15",
    t1_q_c: "10",
    t1_q_d: "17",
    t2_title: "Az egyenlet egyensúlya",
    t2_text: "Az egyenlet olyan, mint egy kétkarú mérleg. A két oldalnak mindig egyenlőnek kell lennie. Amit az egyik oldallal teszel, azt a másikkal is meg kell tenned!",
    t2_b1: "Az '=' jel azt jelenti: 'ugyanannyi, mint'",
    t2_b2: "Tartsd egyensúlyban a mérleget",
    t2_b3: "Szigeteld el az x-et, hogy megkapd az értékét",
    t2_inst: "Egyenlítsd ki a mérleget! x + 7 = 15. Mekkora súlyt ér az x?",
    t2_h1: "A bal oldalon x + 7 van, a jobb oldalon 15.",
    t2_h2: "Vond ki a 7-et a 15-ből. Az eredmény 8 lesz.",
    t2_q: "Ha x - 10 = 5, mennyi az x?",
    t2_q_a: "15",
    t2_q_b: "5",
    t2_q_c: "50",
    t2_q_d: "0",
    t3_title: "Megoldás lépésről lépésre",
    t3_text: "A 2x + 4 = 10 típusú egyenleteknél haladj visszafelé. Először szüntesd meg az összeadást kivonással, majd az osztással találd meg az x-et.",
    t3_b1: "Először az összeadást/kivonást 'fordítsd meg'",
    t3_b2: "Másodszorra a szorzást/osztást végezd el",
    t3_b3: "Ellenőrizd a megoldást behelyettesítéssel",
    t3_inst: "Oldd meg az egyenletet: 2x + 5 = 13",
    t3_step1: "Vonj ki 5-öt mindkét oldalból (13 - 5 = ?)",
    t3_step2: "Oszd el mindkét oldalt 2-vel (8 / 2 = ?)",
    t3_h1: "1. lépés: 13 - 5 = 8. 2. lépés: 8 osztva 2-vel az 4.",
    t3_h2: "Válaszd a 8-at, majd a 4-et.",
    t3_q: "Mennyi az x értéke: 3x + 1 = 10",
    t3_q_a: "3",
    t3_q_b: "4",
    t3_q_c: "9",
    t3_q_d: "2",
  },
  de: {
    explorer_title: "Grundlagen der Algebra",
    t1_title: "Was sind Variablen?",
    t1_text: "In der Algebra benutzen wir Buchstaben wie 'x' für Zahlen, die wir noch nicht kennen. Eine Variable ist wie ein Platzhalter oder eine Geheimbox.",
    t1_b1: "x kann für jede beliebige Zahl stehen",
    t1_b2: "3x bedeutet 3 mal x",
    t1_b3: "Terme kombinieren Zahlen und Variablen",
    t1_inst: "Wenn x = 4, berechne den Term: 2x + 3. Wie viel ergibt das?",
    t1_h1: "Ersetze x durch 4: (2 * 4) + 3.",
    t1_h2: "2 * 4 = 8, und 8 + 3 = 11. Ziehe 11 Blöcke!",
    t1_q: "Berechne 5x - 2 für x = 3.",
    t1_q_a: "13",
    t1_q_b: "15",
    t1_q_c: "10",
    t1_q_d: "17",
    t2_title: "Die Waage halten",
    t2_text: "Eine Gleichung ist wie eine Waage. Beide Seiten müssen gleich sein. Was du links tust, musst du auch rechts tun!",
    t2_b1: "Das '=' bedeutet 'ist das gleiche wie'",
    t2_b2: "Halte die Waage im Gleichgewicht",
    t2_b3: "Isoliere x, um seinen Wert zu finden",
    t2_inst: "Gleiche die Waage aus! x + 7 = 15. Welchen Wert hat x?",
    t2_h1: "Links ist x + 7, rechts ist 15.",
    t2_h2: "Ziehe 7 von 15 ab. Das Ergebnis ist 8.",
    t2_q: "Wenn x - 10 = 5, was ist x?",
    t2_q_a: "15",
    t2_q_b: "5",
    t2_q_c: "50",
    t2_q_d: "0",
    t3_title: "Schrittweise lösen",
    t3_text: "Um 2x + 4 = 10 zu lösen, rechne rückwärts. Erst das Plus/Minus umkehren, dann das Mal/Geteilt auflösen.",
    t3_b1: "Zuerst Strichrechnung (Plus/Minus) umkehren",
    t3_b2: "Dann Punktrechnung (Mal/Geteilt) auflösen",
    t3_b3: "Prüfe dein Ergebnis durch Einsetzen",
    t3_inst: "Löse die Gleichung: 2x + 5 = 13",
    t3_step1: "Subtrahiere 5 auf beiden Seiten (13 - 5 = ?)",
    t3_step2: "Teile beide Seiten durch 2 (8 / 2 = ?)",
    t3_h1: "Schritt 1: 13 - 5 = 8. Schritt 2: 8 geteilt durch 2 ist 4.",
    t3_h2: "Wähle 8, dann wähle 4.",
    t3_q: "Löse nach x auf: 3x + 1 = 10",
    t3_q_a: "3",
    t3_q_b: "4",
    t3_q_c: "9",
    t3_q_d: "2",
  },
  ro: {
    explorer_title: "Bazele Algebrei",
    t1_title: "Ce sunt variabilele?",
    t1_text: "În algebră folosim litere precum 'x' pentru numere pe care nu le cunoaștem încă. O variabilă este ca un spațiu liber care așteaptă să fie completat.",
    t1_b1: "x poate reprezenta orice număr",
    t1_b2: "3x înseamnă 3 ori x",
    t1_b3: "Expresiile combină numere și variabile",
    t1_inst: "Dacă x = 4, evaluează expresia: 2x + 3. Cât obții?",
    t1_h1: "Înlocuiește x cu 4: (2 * 4) + 3.",
    t1_h2: "2 * 4 = 8, iar 8 + 3 = 11. Trage 11 blocuri!",
    t1_q: "Evaluează 5x - 2 când x = 3.",
    t1_q_a: "13",
    t1_q_b: "15",
    t1_q_c: "10",
    t1_q_d: "17",
    t2_title: "Echilibrul Ecuației",
    t2_text: "O ecuație este ca o balanță. Ambele părți trebuie să fie egale. Ce faci într-o parte, trebuie să faci și în cealaltă!",
    t2_b1: "Semnul '=' înseamnă 'la fel ca'",
    t2_b2: "Păstrează balanța în echilibru",
    t2_b3: "Izolează-l pe x pentru a afla valoarea lui",
    t2_inst: "Echilibrează balanța! x + 7 = 15. Ce greutate are x?",
    t2_h1: "Partea stângă este x + 7, cea dreaptă este 15.",
    t2_h2: "Scade 7 din 15 pentru a-l afla pe x. Este 8.",
    t2_q: "Dacă x - 10 = 5, cât este x?",
    t2_q_a: "15",
    t2_q_b: "5",
    t2_q_c: "50",
    t2_q_d: "0",
    t3_title: "Rezolvare pas cu pas",
    t3_text: "Pentru ecuații ca 2x + 4 = 10, lucrăm invers. Întâi eliminăm adunarea prin scădere, apoi împărțim pentru a-l găsi pe x.",
    t3_b1: "Anulează întâi adunarea/scăderea",
    t3_b2: "Anulează apoi înmulțirea/împărțirea",
    t3_b3: "Verifică răspunsul prin înlocuire",
    t3_inst: "Rezolvă ecuația: 2x + 5 = 13",
    t3_step1: "Scade 5 din ambele părți (13 - 5 = ?)",
    t3_step2: "Împarte ambele părți la 2 (8 / 2 = ?)",
    t3_h1: "Pas 1: 13 - 5 = 8. Pas 2: 8 împărțit la 2 este 4.",
    t3_h2: "Selectează 8, apoi 4.",
    t3_q: "Rezolvă pentru x: 3x + 1 = 10",
    t3_q_a: "3",
    t3_q_b: "4",
    t3_q_c: "9",
    t3_q_d: "2",
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
      groups: [4, 4, 3], // 4+4+3 = 11 blocks (representing 2x+3 when x=4)
      answer: 11,
      blockIcon: "📦",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "balance-scale",
      leftWeight: 15,
      rightInitial: 7,
      unitIcon: "⚖️",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "equation-solver",
      equation: "2x + 5 = 13",
      steps: [
        { 
          instruction: "t3_step1", 
          choices: [18, 13, 8, 5], 
          answer: 8, 
          equation: "2x = 8" 
        },
        { 
          instruction: "t3_step2", 
          choices: [2, 4, 6, 16], 
          answer: 4, 
          equation: "x = 4" 
        }
      ],
      finalAnswer: 4,
      variable: "x",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
];

// ─── EXPLORER DEFINÍCIÓ ──────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🧬",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const AlgebraExplorer6 = memo(function AlgebraExplorer6({
  color = "#8B5CF6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="math_g6_algebra" color={color} lang={lang} onDone={onDone} />;
});

export default AlgebraExplorer6;
