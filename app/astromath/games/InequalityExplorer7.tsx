"use client";
// InequalityExplorer7 — Inequalities for Grade 7 (island i4)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#F0F9FF" rx="16" />
    <g transform="translate(120, 70)">
      <line x1="-100" y1="0" x2="100" y2="0" stroke="#0369A1" strokeWidth="2" />
      <circle cx="20" cy="0" r="6" fill="white" stroke="#0369A1" strokeWidth="2" />
      <path d="M 26,0 L 100,0" stroke="#0EA5E9" strokeWidth="6" strokeLinecap="round" />
      <text x="20" y="25" fontSize="12" fontWeight="bold" fill="#0369A1" textAnchor="middle">3</text>
      <text x="60" y="-15" fontSize="14" fontWeight="bold" fill="#0EA5E9" textAnchor="middle">x {">"} 3</text>
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#FFF7ED" rx="16" />
    <text x="120" y="60" fontSize="20" fontWeight="bold" fill="#C2410C" textAnchor="middle">2x + 4 {"<"} 12</text>
    <path d="M 120,70 L 120,90" stroke="#EA580C" strokeWidth="2" markerEnd="url(#arrow)" />
    <text x="120" y="115" fontSize="18" fontWeight="bold" fill="#9A3412" textAnchor="middle">2x {"<"} 8</text>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#F5F3FF" rx="16" />
    <g transform="translate(120, 70)">
      <text x="0" y="-20" fontSize="16" fontWeight="bold" fill="#5B21B6" textAnchor="middle">x ≤ -2</text>
      <line x1="-100" y1="10" x2="100" y2="10" stroke="#7C3AED" strokeWidth="2" />
      <circle cx="-40" cy="10" r="6" fill="#7C3AED" />
      <path d="M -100,10 L -46,10" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" />
      <text x="-40" y="30" fontSize="12" fontWeight="bold" fill="#5B21B6" textAnchor="middle">-2</text>
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Egyenlőtlenségek",
    t1_title: "Mi az az egyenlőtlenség?",
    t1_text: "Az egyenlőtlenség azt mutatja meg, hogy egy kifejezés nagyobb, kisebb, vagy egyenlő is lehet egy másiknál. A megoldás nem egy szám, hanem egy tartomány a számegyenesen.",
    t1_b1: "nagyobb, kisebb",
    t1_b2: "nagyobb vagy egyenlő, kisebb vagy egyenlő",
    t1_b3: "A megoldásokat számtartománnyal ábrázoljuk",
    t1_inst: "Keresd meg az x > 5 tartományt a számegyenesen!",
    t1_h1: "Az 5-nél nagyobb számok jobbra vannak.",
    t1_h2: "Koppints a 6-os értékre vagy az 5-től jobbra lévő részre.",
    t1_q: "Melyik szám megoldása az x < -2 egyenlőtlenségnek?",
    t1_q_a: "-3", t1_q_b: "0", t1_q_c: "-1", t1_q_d: "2",
    t2_title: "Rendezés szabályai",
    t2_text: "Az egyenlőtlenségeket majdnem ugyanúgy rendezzük, mint az egyenleteket. De vigyázz: ha negatív számmal szorzol vagy osztasz, a relációs jel megfordul!",
    t2_b1: "Kivonás/összeadás mindkét oldalból",
    t2_b2: "Osztás/szorzás pozitív számmal: a jel marad",
    t2_b3: "Osztás/szorzás negatívval: a jel megfordul",
    t2_inst: "Oldd meg: 2x + 4 < 12",
    t2_step1: "Vonj ki 4-et mindkét oldalból!",
    t2_step2: "Oszd el mindkét oldalt 2-vel!",
    t2_h1: "12 - 4 = 8, majd 8 / 2 = 4.",
    t2_h2: "Válaszd a 8-at, majd a 4-et.",
    t2_q: "Mi történik a jellel, ha az egyenlőtlenséget elosztjuk -2-vel?",
    t2_q_a: "Megfordul", t2_q_b: "Változatlan marad",
    t3_title: "Zárt és nyitott kör",
    t3_text: "A grafikus ábrázolásnál fontos, hogy a határpont része-e a megoldásnak. Ha igen, teli kört rajzolunk, ha nem, akkor üreset.",
    t3_b1: "Üres kör: a szám nem megoldás",
    t3_b2: "Teli kör: a szám is megoldás",
    t3_b3: "A vonal iránya mutatja a tartományt",
    t3_inst: "Ábrázold az x ≤ 4 megoldást! Keresd meg a 4-et!",
    t3_h1: "Mivel vagy egyenlő van, a 4-es pontnál teli kör lesz.",
    t3_h2: "A megoldások balra tartanak. Koppints a 4-re a számegyenesen.",
    t3_q: "Melyik jelhez tartozik teli kör a számegyenesen?",
    t3_q_a: "nagyobb vagy egyenlő", t3_q_b: "nagyobb",
  },
  de: {
    explorer_title: "Ungleichungen",
    t1_title: "Was ist eine Ungleichung?",
    t1_text: "Eine Ungleichung zeigt, ob ein Ausdruck größer, kleiner oder gleich einem anderen sein kann. Die Lösung ist kein einzelner Wert, sondern ein Bereich auf der Zahlenlinie.",
    t1_b1: "Größer, kleiner",
    t1_b2: "Größer oder gleich, kleiner oder gleich",
    t1_b3: "Lösungen werden mit Zahlenbereichen dargestellt",
    t1_inst: "Finde den Bereich x > 5 auf der Zahlenlinie!",
    t1_h1: "Zahlen größer als 5 sind rechts.",
    t1_h2: "Tippe auf 6 oder auf den Bereich rechts von 5.",
    t1_q: "Welche Zahl ist eine Lösung von x < -2?",
    t1_q_a: "-3", t1_q_b: "0", t1_q_c: "-1", t1_q_d: "2",
    t2_title: "Regeln zum Lösen",
    t2_text: "Ungleichungen lösen wir fast wie Gleichungen. Aber Achtung: Wenn wir mit negativen Zahlen multiplizieren oder dividieren, dreht sich das Ungleichheitszeichen um!",
    t2_b1: "Subtraktion/Addition von beiden Seiten",
    t2_b2: "Division/Multiplikation mit positiven Zahlen: Zeichen bleibt",
    t2_b3: "Division/Multiplikation mit negativen Zahlen: Zeichen dreht sich um",
    t2_inst: "Löse: 2x + 4 < 12",
    t2_step1: "Subtrahiere 4 von beiden Seiten!",
    t2_step2: "Dividiere beide Seiten durch 2!",
    t2_h1: "12 - 4 = 8, dann 8 / 2 = 4.",
    t2_h2: "Wähle 8, dann 4.",
    t2_q: "Was passiert mit dem Zeichen, wenn wir durch -2 dividieren?",
    t2_q_a: "Es dreht sich um", t2_q_b: "Es bleibt gleich",
    t3_title: "Offene und geschlossene Kreise",
    t3_text: "Bei der grafischen Darstellung ist wichtig, ob der Grenzpunkt Teil der Lösung ist. Wenn ja, zeichnen wir einen vollen Kreis, wenn nein, einen leeren.",
    t3_b1: "Leerer Kreis: Die Zahl ist keine Lösung",
    t3_b2: "Voller Kreis: Die Zahl ist auch eine Lösung",
    t3_b3: "Die Richtung der Linie zeigt den Bereich",
    t3_inst: "Zeichne die Lösung x ≤ 4! Finde die 4!",
    t3_h1: "Da wir oder gleich haben, ist bei 4 ein voller Kreis.",
    t3_h2: "Die Lösungen gehen nach links. Tippe auf 4 auf der Zahlenlinie.",
    t3_q: "Welches Zeichen hat einen vollen Kreis auf der Zahlenlinie?",
    t3_q_a: "Größer oder gleich", t3_q_b: "Größer",
  },
  en: {
    explorer_title: "Inequalities",
    t1_title: "What is an Inequality?",
    t1_text: "An inequality shows whether an expression is greater than, less than, or equal to another. The solution is not a single number, but a range on the number line.",
    t1_b1: "Greater than, less than",
    t1_b2: "Greater than or equal to, less than or equal to",
    t1_b3: "Solutions are shown with number ranges",
    t1_inst: "Find the range x > 5 on the number line!",
    t1_h1: "Numbers greater than 5 are to the right.",
    t1_h2: "Tap on 6 or on the area to the right of 5.",
    t1_q: "Which number is a solution of x < -2?",
    t1_q_a: "-3", t1_q_b: "0", t1_q_c: "-1", t1_q_d: "2",
    t2_title: "Solving Rules",
    t2_text: "We solve inequalities almost like equations. But be careful: if we multiply or divide by negative numbers, the sign flips!",
    t2_b1: "Subtract/Add from both sides",
    t2_b2: "Divide/Multiply by positive numbers: sign stays",
    t2_b3: "Divide/Multiply by negative numbers: sign flips",
    t2_inst: "Solve: 2x + 4 < 12",
    t2_step1: "Subtract 4 from both sides!",
    t2_step2: "Divide both sides by 2!",
    t2_h1: "12 - 4 = 8, then 8 / 2 = 4.",
    t2_h2: "Choose 8, then 4.",
    t2_q: "What happens to the sign when we divide by -2?",
    t2_q_a: "It flips", t2_q_b: "It stays the same",
    t3_title: "Open and Closed Circles",
    t3_text: "In graphing, it matters whether the boundary point is part of the solution. If yes, we draw a filled circle, if no, an empty one.",
    t3_b1: "Empty circle: The number is not a solution",
    t3_b2: "Filled circle: The number is also a solution",
    t3_b3: "The direction of the line shows the range",
    t3_inst: "Graph the solution x ≤ 4! Find 4!",
    t3_h1: "Since we have or equal to, there is a filled circle at 4.",
    t3_h2: "Solutions go to the left. Tap on 4 on the number line.",
    t3_q: "Which sign has a filled circle on the number line?",
    t3_q_a: "Greater than or equal to", t3_q_b: "Greater than",
  },
  ro: {
    explorer_title: "Inecuații",
    t1_title: "Ce este o Inecuație?",
    t1_text: "O inecuație arată dacă o expresie este mai mare, mai mică sau egală cu alta. Soluția nu este un singur număr, ci un interval pe axa numerelor.",
    t1_b1: "Mai mare, mai mic",
    t1_b2: "Mai mare sau egal, mai mic sau egal",
    t1_b3: "Soluțiile sunt reprezentate cu intervale numerice",
    t1_inst: "Găsește intervalul x > 5 pe axa numerelor!",
    t1_h1: "Numerele mai mari de 5 sunt la dreapta.",
    t1_h2: "Apasă pe 6 sau pe zona din dreapta lui 5.",
    t1_q: "Care număr este soluție a lui x < -2?",
    t1_q_a: "-3", t1_q_b: "0", t1_q_c: "-1", t1_q_d: "2",
    t2_title: "Reguli de Rezolvare",
    t2_text: "Rezolvăm inecuații aproape ca ecuații. Dar atenție: dacă înmulțim sau împărțim cu numere negative, semnul se inversează!",
    t2_b1: "Scădere/Adunare din ambele părți",
    t2_b2: "Împărțire/Înmulțire cu numere pozitive: semnul rămâne",
    t2_b3: "Împărțire/Înmulțire cu numere negative: semnul se inversează",
    t2_inst: "Rezolvă: 2x + 4 < 12",
    t2_step1: "Scade 4 din ambele părți!",
    t2_step2: "Împarte ambele părți la 2!",
    t2_h1: "12 - 4 = 8, apoi 8 / 2 = 4.",
    t2_h2: "Alege 8, apoi 4.",
    t2_q: "Ce se întâmplă cu semnul când împărțim la -2?",
    t2_q_a: "Se inversează", t2_q_b: "Rămâne la fel",
    t3_title: "Cercuri Deschise și Închise",
    t3_text: "La reprezentare grafică, este important dacă punctul de limită este parte a soluției. Dacă da, desenăm un cerc plin, dacă nu, unul gol.",
    t3_b1: "Cerc gol: Numărul nu este o soluție",
    t3_b2: "Cerc plin: Numărul este și o soluție",
    t3_b3: "Direcția liniei arată intervalul",
    t3_inst: "Reprezintă soluția x ≤ 4! Găsește 4!",
    t3_h1: "Deoarece avem sau egal, este un cerc plin la 4.",
    t3_h2: "Soluțiile merg la stânga. Apasă pe 4 pe axa numerelor.",
    t3_q: "Care semn are un cerc plin pe axa numerelor?",
    t3_q_a: "Mai mare sau egal", t3_q_b: "Mai mare",
  }
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
      min: 0,
      max: 10,
      start: 0,
      target: 6, // Any number > 5
      step: 1,
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
      type: "equation-solver",
      equation: "2x + 4 < 12",
      steps: [
        { instruction: "t2_step1", choices: [16, 8, 4, 12], answer: 8, equation: "2x < 8" },
        { instruction: "t2_step2", choices: [2, 4, 6, 8], answer: 4, equation: "x < 4" }
      ],
      finalAnswer: 4,
      variable: "x <",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b"],
      answer: "t2_q_a",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 10,
      start: 10,
      target: 4,
      step: 1,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b"],
      answer: "t3_q_a",
    },
  },
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "⚖️",
  topics: TOPICS,
  rounds: [],
};

const InequalityExplorer7 = memo(function InequalityExplorer7({
  color = "#F97316",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="math_g7_ineq" color={color} lang={lang} onDone={onDone} />;
});

export default InequalityExplorer7;
