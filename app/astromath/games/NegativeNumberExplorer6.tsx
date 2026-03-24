"use client";
// NegativeNumbersExplorer6 — Negative Numbers & Absolute Value for Grade 6 (island i1)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="negGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#negGrad1)" rx="16" />
      {/* Number Line showing negatives */}
      <g transform="translate(120, 70)">
        <line x1="-100" y1="0" x2="100" y2="0" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" />
        
        {/* Tick marks */}
        {[-80, -40, 0, 40, 80].map((x, i) => {
          const val = (x / 40) * 5; // -10, -5, 0, 5, 10
          const isZero = val === 0;
          return (
            <g key={x} transform={`translate(${x}, 0)`}>
              <line x1="0" y1="-8" x2="0" y2="8" stroke={isZero ? "#0F172A" : "#0284C7"} strokeWidth={isZero ? 3 : 2} />
              <text x="0" y="25" fontSize={isZero ? "14" : "12"} fontWeight="bold" fill={val < 0 ? "#DC2626" : "#0F172A"} textAnchor="middle">
                {val}
              </text>
            </g>
          );
        })}
        
        {/* Highlight negative zone */}
        <path d="M -100,-15 L -10,-15" stroke="#EF4444" strokeWidth="2" strokeDasharray="4 2" markerEnd="url(#arrow)" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="negGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C084FC" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#negGrad2)" rx="16" />
      {/* Absolute Value Visual: |-4| = 4 */}
      <g transform="translate(120, 70)">
        <text x="0" y="-25" fontSize="22" fontWeight="bold" fill="#5B21B6" textAnchor="middle">|-4| = 4</text>
        
        <line x1="-80" y1="15" x2="80" y2="15" stroke="#7C3AED" strokeWidth="2" />
        
        {/* Zero */}
        <line x1="0" y1="10" x2="0" y2="20" stroke="#4C1D95" strokeWidth="2" />
        <text x="0" y="35" fontSize="12" fontWeight="bold" fill="#4C1D95" textAnchor="middle">0</text>
        
        {/* -4 and 4 */}
        <circle cx="-60" cy="15" r="5" fill="#EF4444" />
        <text x="-60" y="35" fontSize="12" fontWeight="bold" fill="#DC2626" textAnchor="middle">-4</text>
        
        <circle cx="60" cy="15" r="5" fill="#10B981" />
        <text x="60" y="35" fontSize="12" fontWeight="bold" fill="#059669" textAnchor="middle">4</text>

        {/* Distance representation */}
        <path d="M -60,5 L -60,0 L 0,0 L 0,5" fill="none" stroke="#6D28D9" strokeWidth="2" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="negGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#negGrad3)" rx="16" />
      {/* Adding negatives: -3 + 5 = 2 */}
      <g transform="translate(120, 80)">
        <line x1="-80" y1="0" x2="80" y2="0" stroke="#B45309" strokeWidth="2" />
        
        <line x1="0" y1="-5" x2="0" y2="5" stroke="#B45309" strokeWidth="2" />
        <text x="0" y="20" fontSize="12" fill="#B45309" textAnchor="middle">0</text>
        
        <circle cx="-45" cy="0" r="5" fill="#EF4444" />
        <text x="-45" y="20" fontSize="12" fontWeight="bold" fill="#DC2626" textAnchor="middle">-3</text>
        
        <circle cx="30" cy="0" r="5" fill="#10B981" />
        <text x="30" y="20" fontSize="12" fontWeight="bold" fill="#059669" textAnchor="middle">2</text>
        
        {/* Jump arrow */}
        <path d="M -45,-10 Q -7,-40 30,-10" fill="none" stroke="#059669" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="-7" y="-30" fontSize="14" fontWeight="bold" fill="#047857" textAnchor="middle">{"+"}5</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Negative Numbers",
    t1_title: "Below Zero",
    t1_text: "Numbers don't stop at zero! Negative numbers are smaller than zero. They have a minus sign (-) and show things like freezing temperatures or debt.",
    t1_b1: "Zero is neither positive nor negative",
    t1_b2: "Negative numbers have a minus sign (-)",
    t1_b3: "The further left you go, the smaller they get",
    t1_inst: "Find the number -6 on the number line!",
    t1_h1: "Start at 0 and move to the left.",
    t1_h2: "Look for the number 6 with a minus sign in front of it.",
    t1_q: "Which temperature is the coldest?",
    t1_q_a: "-10°C",
    t1_q_b: "-2°C",
    t1_q_c: "0°C",
    t1_q_d: "5°C",
    t2_title: "Absolute Value",
    t2_text: "Absolute value is the distance a number is from zero. Since distance cannot be negative, the absolute value is always positive! We write it with straight lines: |-4| = 4.",
    t2_b1: "Absolute value measures distance",
    t2_b2: "It is always a positive number (or zero)",
    t2_b3: "|-5| is 5, and |5| is also 5",
    t2_inst: "What is the absolute value of -8? Find it on the number line!",
    t2_h1: "The absolute value of -8 is its distance from zero.",
    t2_h2: "It is exactly 8 steps away. Find the positive 8.",
    t2_q: "What is the absolute value of -15?",
    t2_q_a: "15",
    t2_q_b: "-15",
    t2_q_c: "0",
    t2_q_d: "-1",
    t3_title: "Adding & Subtracting",
    t3_text: "Adding a negative number is like subtracting. Subtracting a negative number is like adding! Let's solve a simple equation to find the starting temperature.",
    t3_b1: "Moving right makes numbers larger",
    t3_b2: "Moving left makes numbers smaller",
    t3_b3: "Two negatives make a positive: 5 - (-2) = 7",
    t3_inst: "Solve the equation: x + 6 = 2 (If it warms up by 6° to reach 2°, what was the starting temp?)",
    t3_h1: "Subtract 6 from both sides of the equation.",
    t3_h2: "2 minus 6 goes below zero! It equals -4.",
    t3_step1: "Subtract 6 from both sides (2 - 6 = ?)",
    t3_q: "What is -4 + 7?",
    t3_q_a: "3",
    t3_q_b: "11",
    t3_q_c: "-11",
    t3_q_d: "-3",
  },
  de: {
    explorer_title: "Negative Zahlen",
    t1_title: "Unter Null",
    t1_text: "Zahlen enden nicht bei Null! Negative Zahlen sind kleiner als Null. Sie haben ein Minuszeichen (-) und zeigen z.B. Frosttemperaturen oder Schulden an.",
    t1_b1: "Null ist weder positiv noch negativ",
    t1_b2: "Negative Zahlen haben ein Minuszeichen (-)",
    t1_b3: "Je weiter links, desto kleiner ist die Zahl",
    t1_inst: "Finde die Zahl -6 auf dem Zahlenstrahl!",
    t1_h1: "Starte bei 0 und gehe nach links.",
    t1_h2: "Suche die 6 mit dem Minuszeichen davor.",
    t1_q: "Welche Temperatur ist am kältesten?",
    t1_q_a: "-10°C",
    t1_q_b: "-2°C",
    t1_q_c: "0°C",
    t1_q_d: "5°C",
    t2_title: "Betrag einer Zahl",
    t2_text: "Der Betrag (Absolutwert) ist der Abstand einer Zahl von Null. Da ein Abstand nie negativ ist, ist der Betrag immer positiv! Wir schreiben: |-4| = 4.",
    t2_b1: "Der Betrag misst den Abstand zur Null",
    t2_b2: "Er ist immer positiv (oder null)",
    t2_b3: "|-5| ist 5, und |5| ist auch 5",
    t2_inst: "Was ist der Betrag von -8? Finde ihn auf dem Zahlenstrahl!",
    t2_h1: "Der Betrag von -8 ist der Abstand zu Null.",
    t2_h2: "Er ist genau 8 Schritte entfernt. Finde die positive 8.",
    t2_q: "Was ist der Betrag von -15?",
    t2_q_a: "15",
    t2_q_b: "-15",
    t2_q_c: "0",
    t2_q_d: "-1",
    t3_title: "Addieren & Subtrahieren",
    t3_text: "Eine negative Zahl zu addieren ist wie subtrahieren. Lösen wir eine Gleichung, um die Starttemperatur zu finden!",
    t3_b1: "Nach rechts gehen macht Zahlen größer",
    t3_b2: "Nach links gehen macht Zahlen kleiner",
    t3_b3: "Minus mal Minus gibt Plus: 5 - (-2) = 7",
    t3_inst: "Löse die Gleichung: x + 6 = 2 (Wenn es um 6° wärmer wird und 2° erreicht, was war die Starttemperatur?)",
    t3_h1: "Subtrahiere 6 von beiden Seiten.",
    t3_h2: "2 minus 6 geht unter Null! Es ist -4.",
    t3_step1: "Subtrahiere 6 auf beiden Seiten (2 - 6 = ?)",
    t3_q: "Was ist -4 + 7?",
    t3_q_a: "3",
    t3_q_b: "11",
    t3_q_c: "-11",
    t3_q_d: "-3",
  },
  hu: {
    explorer_title: "Negatív számok",
    t1_title: "A nulla alatt",
    t1_text: "A számok nem érnek véget a nullánál! A negatív számok kisebbek a nullánál. Mínuszjellel (-) jelöljük őket, és például fagyos időt vagy adósságot mutatnak.",
    t1_b1: "A nulla se nem pozitív, se nem negatív",
    t1_b2: "A negatív számok előtt mínuszjel (-) áll",
    t1_b3: "Minél balrább mész, annál kisebb a szám",
    t1_inst: "Keresd meg a -6-ot a számegyenesen!",
    t1_h1: "Indulj a nullától balra.",
    t1_h2: "Keresd a 6-ost, ami előtt mínuszjel van.",
    t1_q: "Melyik hőmérséklet a leghidegebb?",
    t1_q_a: "-10°C",
    t1_q_b: "-2°C",
    t1_q_c: "0°C",
    t1_q_d: "5°C",
    t2_title: "Abszolút érték",
    t2_text: "Az abszolút érték egy szám távolsága a nullától. Mivel a távolság sosem negatív, az abszolút érték mindig pozitív! Így jelöljük: |-4| = 4.",
    t2_b1: "Az abszolút érték a távolságot méri",
    t2_b2: "Mindig pozitív szám (vagy nulla)",
    t2_b3: "A |-5| is 5, és a |5| is 5",
    t2_inst: "Mennyi a -8 abszolút értéke? Keresd meg a számegyenesen!",
    t2_h1: "A -8 abszolút értéke a nullától vett távolsága.",
    t2_h2: "Pontosan 8 lépésre van. Keresd meg a pozitív 8-at.",
    t2_q: "Mennyi a -15 abszolút értéke?",
    t2_q_a: "15",
    t2_q_b: "-15",
    t2_q_c: "0",
    t2_q_d: "-1",
    t3_title: "Összeadás és kivonás",
    t3_text: "A negatív számok összeadása olyan, mint a kivonás. Egy negatív szám kivonása pedig olyan, mint az összeadás! Oldjunk meg egy egyenletet!",
    t3_b1: "Jobbra haladva a számok nőnek",
    t3_b2: "Balra haladva a számok csökkennek",
    t3_b3: "Két mínusz pluszt ad: 5 - (-2) = 7",
    t3_inst: "Oldd meg az egyenletet: x + 6 = 2 (Ha 6 fokot melegszik és 2 fok lesz, mennyi volt az induló hőmérséklet?)",
    t3_h1: "Vonj ki 6-ot az egyenlet mindkét oldalából.",
    t3_h2: "A 2 mínusz 6 nulla alá megy! Az eredmény -4.",
    t3_step1: "Vonj ki 6-ot mindkét oldalból (2 - 6 = ?)",
    t3_q: "Mennyi -4 + 7?",
    t3_q_a: "3",
    t3_q_b: "11",
    t3_q_c: "-11",
    t3_q_d: "-3",
  },
  ro: {
    explorer_title: "Numere Negative",
    t1_title: "Sub Zero",
    t1_text: "Numerele nu se opresc la zero! Numerele negative sunt mai mici decât zero. Ele au un semn minus (-) și indică temperaturi de îngheț sau datorii.",
    t1_b1: "Zero nu este nici pozitiv, nici negativ",
    t1_b2: "Numerele negative au un semn minus (-)",
    t1_b3: "Cu cât mergi mai la stânga, cu atât devin mai mici",
    t1_inst: "Găsește numărul -6 pe linia numerelor!",
    t1_h1: "Începe de la 0 și mergi la stânga.",
    t1_h2: "Caută numărul 6 cu un semn minus în fața lui.",
    t1_q: "Care temperatură este cea mai rece?",
    t1_q_a: "-10°C",
    t1_q_b: "-2°C",
    t1_q_c: "0°C",
    t1_q_d: "5°C",
    t2_title: "Valoarea Absolută",
    t2_text: "Valoarea absolută reprezintă distanța unui număr față de zero. Deoarece distanța nu poate fi negativă, valoarea absolută este mereu pozitivă: |-4| = 4.",
    t2_b1: "Valoarea absolută măsoară distanța",
    t2_b2: "Este întotdeauna un număr pozitiv (sau zero)",
    t2_b3: "|-5| este 5, iar |5| este tot 5",
    t2_inst: "Care este valoarea absolută a lui -8? Găsește-o pe axă!",
    t2_h1: "Valoarea absolută a lui -8 este distanța sa față de zero.",
    t2_h2: "Este la exact 8 pași distanță. Caută numărul 8 pozitiv.",
    t2_q: "Care este valoarea absolută a lui -15?",
    t2_q_a: "15",
    t2_q_b: "-15",
    t2_q_c: "0",
    t2_q_d: "-1",
    t3_title: "Adunare și Scădere",
    t3_text: "Să aduni un număr negativ este ca o scădere. Să scazi un număr negativ este ca o adunare! Să rezolvăm o ecuație pentru a exersa.",
    t3_b1: "Spre dreapta numerele devin mai mari",
    t3_b2: "Spre stânga numerele devin mai mici",
    t3_b3: "Minus cu minus face plus: 5 - (-2) = 7",
    t3_inst: "Rezolvă ecuația: x + 6 = 2 (Dacă se încălzește cu 6° și ajunge la 2°, cât a fost inițial?)",
    t3_h1: "Scade 6 din ambele părți ale ecuației.",
    t3_h2: "2 minus 6 coboară sub zero! Rezultatul este -4.",
    t3_step1: "Scade 6 din ambele părți (2 - 6 = ?)",
    t3_q: "Cât face -4 + 7?",
    t3_q_a: "3",
    t3_q_b: "11",
    t3_q_c: "-11",
    t3_q_d: "-3",
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
      type: "number-line",
      min: -10,
      max: 10,
      start: 0,
      target: -6,
      step: 1,
      showJumps: false,
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // -10 is the coldest
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "number-line",
      min: -10,
      max: 10,
      start: -8, // Start at the negative number
      target: 8, // Target is its absolute value (distance)
      step: 1,
      showJumps: false,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // 15
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      // ÚJ TÍPUS: Equation Solver használata!
      type: "equation-solver",
      equation: "x + 6 = 2",
      steps: [
        { 
          instruction: "t3_step1", 
          choices: [-4, 4, 8, -8], 
          answer: -4, 
          equation: "x = -4" 
        }
      ],
      finalAnswer: -4,
      variable: "x",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // 3
    },
  },
];

// ─── EXPLORER DEFINÍCIÓ ──────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🌡️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const NegativeNumbersExplorer6 = memo(function NegativeNumbersExplorer6({
  color = "#06B6D4",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="math_g6_negatives" color={color} lang={lang} onDone={onDone} />;
});

export default NegativeNumbersExplorer6;
