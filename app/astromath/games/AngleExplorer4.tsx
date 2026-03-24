"use client";
// SymmetryExplorer4 — Angles & Symmetry for Grade 4 (island i8)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="symGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#818CF8" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#symGrad1)" rx="16" />
      {/* Right angle visual */}
      <g transform="translate(100, 90)">
        <path d="M 0,-60 L 0,0 L 60,0" fill="none" stroke="#4338CA" strokeWidth="3" strokeLinecap="round" />
        <rect x="0" y="-10" width="10" height="10" fill="none" stroke="#4338CA" strokeWidth="1" />
        <circle cx="4" cy="-4" r="1" fill="#4338CA" />
        <text x="70" y="5" fontSize="12" fontWeight="bold" fill="#4338CA">90°</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="symGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F472B6" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#symGrad2)" rx="16" />
      {/* Symmetry visual - Butterfly/Shape */}
      <g transform="translate(120, 70)">
        <path d="M -40,-30 Q -60,0 -40,30 L 0,0 Z" fill="#EC4899" opacity="0.6" stroke="#BE185D" />
        <path d="M 40,-30 Q 60,0 40,30 L 0,0 Z" fill="#EC4899" opacity="0.6" stroke="#BE185D" />
        <line x1="0" y1="-45" x2="0" y2="45" stroke="#BE185D" strokeWidth="2" strokeDasharray="5 3" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="symGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#5EEAD4" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#symGrad3)" rx="16" />
      {/* Acute vs Obtuse angle visual */}
      <g transform="translate(70, 90)">
        <path d="M 0,-40 L 0,0 L 30,0" fill="none" stroke="#0D9488" strokeWidth="3" opacity="0.5" />
        <text x="0" y="15" fontSize="10" fill="#0D9488" textAnchor="middle">ACUTE</text>
      </g>
      <g transform="translate(170, 90)">
        <path d="M -30,-30 L 0,0 L 40,0" fill="none" stroke="#0D9488" strokeWidth="3" />
        <text x="0" y="15" fontSize="10" fill="#0D9488" textAnchor="middle">OBTUSE</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Angles & Symmetry",
    t1_title: "Types of Angles",
    t1_text: "An angle is formed where two lines meet. A 'Right Angle' looks like the corner of a square and is exactly 90 degrees.",
    t1_b1: "Right angle = exactly 90°",
    t1_b2: "Acute angle = less than 90°",
    t1_b3: "Obtuse angle = more than 90°",
    t1_inst: "Find 90 on the number line to mark a right angle!",
    t1_h1: "A right angle is exactly 90 degrees.",
    t1_h2: "Tap the number 90.",
    t1_q: "Which angle is smaller than a right angle?",
    t1_q_a: "Obtuse angle",
    t1_q_b: "Acute angle",
    t1_q_c: "Straight angle",
    t1_q_d: "Square angle",
    t2_title: "Line of Symmetry",
    t2_text: "A shape has symmetry if you can fold it in half and both sides match perfectly. The fold line is called the 'Axis of Symmetry'.",
    t2_b1: "Both halves are mirror images",
    t2_b2: "Some shapes have many lines",
    t2_b3: "Nature is full of symmetry",
    t2_inst: "Combine blocks to find out: How many lines of symmetry does a square have?",
    t2_h1: "You can fold a square vertically, horizontally, and diagonally.",
    t2_h2: "A square has exactly 4 lines of symmetry.",
    t2_q: "Which of these letters is usually symmetrical?",
    t2_q_a: "F",
    t2_q_b: "A",
    t2_q_c: "P",
    t2_q_d: "S",
    t3_title: "Angles in Shapes",
    t3_text: "Shapes are built using different angles. A rectangle always has four right angles, while a triangle can have acute or obtuse angles too!",
    t3_b1: "Square: 4 right angles",
    t3_b2: "Triangle: 3 angles total",
    t3_b3: "Angles help define the shape",
    t3_inst: "Use blocks to show the sum of two 45° angles!",
    t3_h1: "45 + 45 = 90 (a right angle).",
    t3_h2: "You need two blocks of 45 to reach 90.",
    t3_q: "How many degrees are in a straight line?",
    t3_q_a: "90°",
    t3_q_b: "180°",
    t3_q_c: "360°",
    t3_q_d: "45°",
  },
  de: {
    explorer_title: "Winkel & Symmetrie",
    t1_title: "Winkelarten",
    t1_text: "Ein Winkel entsteht, wo zwei Linien aufeinandertreffen. Ein 'rechter Winkel' sieht aus wie eine Quadratecke und hat genau 90 Grad.",
    t1_b1: "Rechter Winkel = genau 90°",
    t1_b2: "Spitzer Winkel = weniger als 90°",
    t1_b3: "Stumpfer Winkel = mehr als 90°",
    t1_inst: "Finde 90 auf dem Zahlenstrahl (rechter Winkel)!",
    t1_h1: "Ein rechter Winkel hat exakt 90 Grad.",
    t1_h2: "Tippe auf die 90.",
    t1_q: "Welcher Winkel ist kleiner als ein rechter Winkel?",
    t1_q_a: "Stumpfer Winkel",
    t1_q_b: "Spitzer Winkel",
    t1_q_c: "Gestreckter Winkel",
    t1_q_d: "Quadratwinkel",
    t2_title: "Symmetrieachsen",
    t2_text: "Eine Form ist symmetrisch, wenn man sie falten kann und beide Seiten genau deckungsgleich sind. Die Linie heißt Symmetrieachse.",
    t2_b1: "Beide Hälften sind Spiegelbilder",
    t2_b2: "Manche Formen haben viele Achsen",
    t2_b3: "Symmetrie gibt es oft in der Natur",
    t2_inst: "Wie viele Symmetrieachsen hat ein Quadrat?",
    t2_h1: "Du kannst es senkrecht, waagerecht und diagonal falten.",
    t2_h2: "Ein Quadrat hat genau 4 Achsen.",
    t2_q: "Welcher dieser Buchstaben ist meist symmetrisch?",
    t2_q_a: "F",
    t2_q_b: "A",
    t2_q_c: "P",
    t2_q_d: "S",
    t3_title: "Winkel in Formen",
    t3_text: "Formen bestehen aus verschiedenen Winkeln. Ein Rechteck hat immer vier rechte Winkel, ein Dreieck kann verschiedene haben!",
    t3_b1: "Quadrat: 4 rechte Winkel",
    t3_b2: "Dreieck: insgesamt 3 Winkel",
    t3_b3: "Winkel bestimmen die Form",
    t3_inst: "Addiere zwei 45° Winkel mit Blöcken!",
    t3_h1: "45 + 45 = 90 (ein rechter Winkel).",
    t3_h2: "Nutze zwei 45er Blöcke, um 90 zu erreichen.",
    t3_q: "Wie viel Grad hat eine gerade Linie?",
    t3_q_a: "90°",
    t3_q_b: "180°",
    t3_q_c: "360°",
    t3_q_d: "45°",
  },
  hu: {
    explorer_title: "Szögek és szimmetria",
    t1_title: "Szögfajták",
    t1_text: "Szög ott keletkezik, ahol két vonal találkozik. A 'derékszög' pont olyan, mint egy négyzet sarka, és pontosan 90 fokos.",
    t1_b1: "Derékszög = pontosan 90°",
    t1_b2: "Hegyesszög = kisebb, mint 90°",
    t1_b3: "Tompaszög = nagyobb, mint 90°",
    t1_inst: "Keresd meg a 90-et a számegyenesen (derékszög)!",
    t1_h1: "A derékszög pontosan 90 fokos.",
    t1_h2: "Koppints a 90-es számra.",
    t1_q: "Melyik szög kisebb a derékszögnél?",
    t1_q_a: "Tompaszög",
    t1_q_b: "Hegyesszög",
    t1_q_c: "Egyenesszög",
    t1_q_d: "Négyzetszög",
    t2_title: "Szimmetriatengely",
    t2_text: "Egy alakzat akkor szimmetrikus, ha félbe tudod hajtani úgy, hogy a két oldal pontosan fedje egymást. A vonalat szimmetriatengelynek hívjuk.",
    t2_b1: "A két fél egymás tükörképe",
    t2_b2: "Némely alakzatnak több tengelye is van",
    t2_b3: "A természet tele van szimmetriával",
    t2_inst: "Vond össze a blokkokat: hány szimmetriatengelye van a négyzetnek?",
    t2_h1: "A négyzetet félbehajthatod függőlegesen, vízszintesen és átlósan is.",
    t2_h2: "A négyzetnek pontosan 4 tengelye van.",
    t2_q: "Melyik betű szimmetrikus az alábbiak közül?",
    t2_q_a: "F",
    t2_q_b: "A",
    t2_q_c: "P",
    t2_q_d: "S",
    t3_title: "Szögek az alakzatokban",
    t3_text: "Az alakzatokat szögek építik fel. A téglalapnak mindig négy derékszöge van, de egy háromszögnek lehet hegyes- vagy tompaszöge is!",
    t3_b1: "Négyzet: 4 derékszög",
    t3_b2: "Háromszög: összesen 3 szög",
    t3_b3: "A szögek határozzák meg a formát",
    t3_inst: "Használj blokkokat két 45°-os szög összeadásához!",
    t3_h1: "45 + 45 = 90 (egy derékszög).",
    t3_h2: "Két darab 45-ös blokkra lesz szükséged a 90-hez.",
    t3_q: "Hány fokos az egyenesszög (egy egyenes vonal)?",
    t3_q_a: "90°",
    t3_q_b: "180°",
    t3_q_c: "360°",
    t3_q_d: "45°",
  },
  ro: {
    explorer_title: "Unghiuri și simetrie",
    t1_title: "Tipuri de unghiuri",
    t1_text: "Un unghi se formează acolo unde se întâlnesc două linii. Un 'unghi drept' arată ca colțul unui pătrat și are exact 90 de grade.",
    t1_b1: "Unghi drept = exact 90°",
    t1_b2: "Unghi ascuțit = mai mic de 90°",
    t1_b3: "Unghi obtuze = mai mare de 90°",
    t1_inst: "Găsește 90 pe linia numerelor (unghiul drept)!",
    t1_h1: "Un unghi drept are exact 90 de grade.",
    t1_h2: "Atinge numărul 90.",
    t1_q: "Care unghi este mai mic decât unghiul drept?",
    t1_q_a: "Unghiul obtuz",
    t1_q_b: "Unghiul ascuțit",
    t1_q_c: "Unghiul alungit",
    t1_q_d: "Unghiul pătrat",
    t2_title: "Axa de simetrie",
    t2_text: "O formă este simetrică dacă o poți îndoi astfel încât cele două părți să coincidă perfect. Linia de îndoire se numește axă de simetrie.",
    t2_b1: "Cele două jumătăți sunt în oglindă",
    t2_b2: "Unele forme au mai multe axe",
    t2_b3: "Natura este plină de simetrie",
    t2_inst: "Câte axe de simetrie are un pătrat?",
    t2_h1: "Poți îndoi pătratul pe verticală, orizontală și diagonală.",
    t2_h2: "Un pătrat are exact 4 axe de simetrie.",
    t2_q: "Care dintre aceste litere este de obicei simetrică?",
    t2_q_a: "F",
    t2_q_b: "A",
    t2_q_c: "P",
    t2_q_d: "S",
    t3_title: "Unghiuri în forme",
    t3_text: "Formele sunt construite din unghiuri. Un dreptunghi are patru unghiuri drepte, în timp ce un triunghi poate avea unghiuri ascuțite sau obtuze!",
    t3_b1: "Pătrat: 4 unghiuri drepte",
    t3_b2: "Triunghi: 3 unghiuri în total",
    t3_b3: "Unghiurile definesc forma",
    t3_inst: "Folosește blocuri pentru a arăta suma a două unghiuri de 45°!",
    t3_h1: "45 + 45 = 90 (un unghi drept).",
    t3_h2: "Ai nevoie de două blocuri de 45 pentru a ajunge la 90.",
    t3_q: "Câte grade are un unghi alungit (o linie dreaptă)?",
    t3_q_a: "90°",
    t3_q_b: "180°",
    t3_q_c: "360°",
    t3_q_d: "45°",
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
      min: 0,
      max: 180,
      start: 0,
      target: 90,
      step: 15,
      showJumps: true,
      jumpCount: 6,
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
      type: "block-drag",
      mode: "combine",
      groups: [1, 1, 1, 1], // 4 lines of symmetry
      answer: 4,
      blockIcon: "🦋",
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
      groups: [45, 45],
      answer: 90,
      blockIcon: "📐",
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
  icon: "📐",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const SymmetryExplorer4 = memo(function SymmetryExplorer4({
  color = "#6366F1",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="math_g4_symmetry" color={color} lang={lang} onDone={onDone} />;
});

export default SymmetryExplorer4;
