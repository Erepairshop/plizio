"use client";
// GeometryExplorer5 — Geometry & Angles for Grade 5 (island i6)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="geoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#geoGrad1)" rx="16" />
      {/* Protractor & Angles */}
      <g transform="translate(120, 110)">
        {/* Protractor base */}
        <path d="M -80,0 A 80,80 0 0,1 80,0 Z" fill="#DDD6FE" opacity="0.5" stroke="#7C3AED" strokeWidth="2" />
        <line x1="-90" y1="0" x2="90" y2="0" stroke="#7C3AED" strokeWidth="2" />
        <circle cx="0" cy="0" r="4" fill="#5B21B6" />
        
        {/* 90 degree line */}
        <line x1="0" y1="0" x2="0" y2="-80" stroke="#7C3AED" strokeWidth="1" strokeDasharray="4 2" />
        <text x="0" y="-85" fontSize="10" fill="#5B21B6" textAnchor="middle">90°</text>

        {/* An obtuse angle (e.g., 135 degrees) */}
        <line x1="0" y1="0" x2="-56" y2="-56" stroke="#4C1D95" strokeWidth="3" />
        <line x1="0" y1="0" x2="80" y2="0" stroke="#4C1D95" strokeWidth="3" />
        
        {/* Angle arc */}
        <path d="M 30,0 A 30,30 0 0,0 -21,-21" fill="none" stroke="#C084FC" strokeWidth="3" />
        <text x="10" y="-35" fontSize="14" fontWeight="bold" fill="#4C1D95">135°</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="geoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F472B6" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#geoGrad2)" rx="16" />
      {/* Triangle interior angles = 180 */}
      <g transform="translate(120, 80)">
        {/* Triangle */}
        <path d="M -50,30 L 50,30 L 0,-50 Z" fill="#FCE7F3" stroke="#DB2777" strokeWidth="3" strokeLinejoin="round" />
        
        {/* Angle arcs and labels */}
        <path d="M -30,30 A 20,20 0 0,0 -40,15" fill="none" stroke="#BE185D" strokeWidth="2" />
        <text x="-25" y="25" fontSize="10" fontWeight="bold" fill="#9D174D">60°</text>

        <path d="M 30,30 A 20,20 0 0,1 40,15" fill="none" stroke="#BE185D" strokeWidth="2" />
        <text x="25" y="25" fontSize="10" fontWeight="bold" fill="#9D174D">70°</text>

        <path d="M -10,-35 A 20,20 0 0,0 10,-35" fill="none" stroke="#BE185D" strokeWidth="2" />
        <text x="0" y="-15" fontSize="14" fontWeight="bold" fill="#BE185D" textAnchor="middle">?</text>
        
        <text x="0" y="50" fontSize="12" fontWeight="bold" fill="#9D174D" textAnchor="middle">60° + 70° + ? = 180°</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="geoGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#geoGrad3)" rx="16" />
      {/* Area & Perimeter of a Rectangle */}
      <g transform="translate(40, 30)">
        {/* Rectangle with grid */}
        <rect x="0" y="0" width="80" height="50" fill="#D1FAE5" stroke="#059669" strokeWidth="2.5" />
        {/* Grid lines inside */}
        {[16, 32, 48, 64].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="50" stroke="#A7F3D0" strokeWidth="1" />
        ))}
        {[10, 20, 30, 40].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="80" y2={y} stroke="#A7F3D0" strokeWidth="1" />
        ))}
        {/* Dimension labels */}
        <text x="40" y="68" fontSize="12" fontWeight="bold" fill="#065F46" textAnchor="middle">8 cm</text>
        <text x="95" y="28" fontSize="12" fontWeight="bold" fill="#065F46" textAnchor="middle">5 cm</text>
        {/* Formulas */}
        <text x="40" y="90" fontSize="11" fontWeight="bold" fill="#047857" textAnchor="middle">A = 8 × 5 = 40 cm²</text>
        <text x="40" y="105" fontSize="11" fontWeight="bold" fill="#047857" textAnchor="middle">P = 2 × (8 + 5) = 26 cm</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Geometry & Angles",
    t1_title: "Measuring Angles",
    t1_text: "Angles are measured in degrees (°). A right angle is 90°. If it's smaller, it's acute. If it's larger than 90° but less than 180°, it's obtuse!",
    t1_b1: "Acute angle: less than 90°",
    t1_b2: "Right angle: exactly 90°",
    t1_b3: "Obtuse angle: between 90° and 180°",
    t1_inst: "Find 120 on the number line to mark an obtuse angle!",
    t1_h1: "An obtuse angle is larger than 90.",
    t1_h2: "Look for the number 120.",
    t1_q: "What type of angle is 45°?",
    t1_q_a: "Right",
    t1_q_b: "Acute",
    t1_q_c: "Obtuse",
    t1_q_d: "Straight",
    t2_title: "Inside a Triangle",
    t2_text: "Here is a geometry secret: If you add up all three inside angles of ANY triangle, the sum is always exactly 180°!",
    t2_b1: "A triangle has 3 inside angles",
    t2_b2: "Angle 1 + Angle 2 + Angle 3 = 180°",
    t2_b3: "You can find a missing angle by subtracting",
    t2_inst: "Balance the scale! A triangle has angles of 60° and 70°. What is the third angle?",
    t2_h1: "The total must be 180. You already have 60 + 70 = 130.",
    t2_h2: "You need to add 50 to reach 180.",
    t2_q: "A triangle has a 90° and a 40° angle. What is the 3rd angle?",
    t2_q_a: "50°",
    t2_q_b: "90°",
    t2_q_c: "60°",
    t2_q_d: "180°",
    t3_title: "Area & Perimeter",
    t3_text: "Area tells us how much space a shape covers (measured in cm²). Perimeter tells us how far it is around the edge. For rectangles: Area = length x width, and Perimeter = 2 x (length + width).",
    t3_b1: "Area = length × width (e.g. 8 × 5 = 40 cm²)",
    t3_b2: "Perimeter = 2 × (length + width)",
    t3_b3: "Area uses square units (cm²), perimeter uses cm",
    t3_inst: "A rectangle is 6 cm long and 4 cm wide. Find the perimeter on the number line!",
    t3_h1: "Perimeter = 2 × (6 + 4) = 2 × 10.",
    t3_h2: "The perimeter is 20. Find 20 on the line.",
    t3_q: "A rectangle is 9 cm long and 3 cm wide. What is the area?",
    t3_q_a: "27 cm²",
    t3_q_b: "24 cm²",
    t3_q_c: "12 cm²",
    t3_q_d: "30 cm²",
  },
  de: {
    explorer_title: "Geometrie & Winkel",
    t1_title: "Winkel messen",
    t1_text: "Winkel werden in Grad (°) gemessen. Ein rechter Winkel hat 90°. Ist er kleiner, nennt man ihn spitz. Ist er größer als 90° aber kleiner als 180°, ist er stumpf!",
    t1_b1: "Spitzer Winkel: kleiner als 90°",
    t1_b2: "Rechter Winkel: genau 90°",
    t1_b3: "Stumpfer Winkel: zwischen 90° und 180°",
    t1_inst: "Finde 120 auf dem Zahlenstrahl (ein stumpfer Winkel)!",
    t1_h1: "Ein stumpfer Winkel ist größer als 90.",
    t1_h2: "Suche nach der Zahl 120.",
    t1_q: "Welche Art von Winkel ist 45°?",
    t1_q_a: "Rechter",
    t1_q_b: "Spitzer",
    t1_q_c: "Stumpfer",
    t1_q_d: "Gestreckter",
    t2_title: "Im Inneren eines Dreiecks",
    t2_text: "Hier ist ein Geometrie-Geheimnis: Wenn du alle drei Innenwinkel JEDES Dreiecks addierst, ist die Summe immer genau 180°!",
    t2_b1: "Ein Dreieck hat 3 Innenwinkel",
    t2_b2: "Winkel 1 + Winkel 2 + Winkel 3 = 180°",
    t2_b3: "Fehlende Winkel kannst du ausrechnen",
    t2_inst: "Gleiche die Waage aus! Ein Dreieck hat 60° und 70°. Wie groß ist der 3. Winkel?",
    t2_h1: "Das Ziel ist 180. Du hast bereits 60 + 70 = 130.",
    t2_h2: "Du musst 50 hinzufügen, um 180 zu erreichen.",
    t2_q: "Ein Dreieck hat 90° und 40°. Wie groß ist der 3. Winkel?",
    t2_q_a: "50°",
    t2_q_b: "90°",
    t2_q_c: "60°",
    t2_q_d: "180°",
    t3_title: "Fläche & Umfang",
    t3_text: "Die Fläche sagt, wie viel Platz eine Form bedeckt (in cm²). Der Umfang sagt, wie lang der Rand ist. Bei Rechtecken: Fläche = Länge × Breite, und Umfang = 2 × (Länge + Breite).",
    t3_b1: "Fläche = Länge × Breite (z.B. 8 × 5 = 40 cm²)",
    t3_b2: "Umfang = 2 × (Länge + Breite)",
    t3_b3: "Fläche in cm², Umfang in cm",
    t3_inst: "Ein Rechteck ist 6 cm lang und 4 cm breit. Finde den Umfang auf dem Zahlenstrahl!",
    t3_h1: "Umfang = 2 × (6 + 4) = 2 × 10.",
    t3_h2: "Der Umfang ist 20. Finde 20.",
    t3_q: "Ein Rechteck ist 9 cm lang und 3 cm breit. Wie groß ist die Fläche?",
    t3_q_a: "27 cm²",
    t3_q_b: "24 cm²",
    t3_q_c: "12 cm²",
    t3_q_d: "30 cm²",
  },
  hu: {
    explorer_title: "Geometria és szögek",
    t1_title: "Szögek mérése",
    t1_text: "A szögeket fokban (°) mérjük. A derékszög 90°. Ha kisebb, akkor hegyesszög. Ha nagyobb, mint 90°, de kisebb, mint 180°, akkor tompaszög!",
    t1_b1: "Hegyesszög: kisebb, mint 90°",
    t1_b2: "Derékszög: pontosan 90°",
    t1_b3: "Tompaszög: 90° és 180° között",
    t1_inst: "Keresd meg a 120-at a számegyenesen (ez egy tompaszög)!",
    t1_h1: "A tompaszög nagyobb, mint 90.",
    t1_h2: "Keresd a 120-as számot.",
    t1_q: "Milyen típusú szög a 45°?",
    t1_q_a: "Derékszög",
    t1_q_b: "Hegyesszög",
    t1_q_c: "Tompaszög",
    t1_q_d: "Egyenesszög",
    t2_title: "A háromszög titka",
    t2_text: "Itt egy geometriai titok: BÁRMILYEN háromszög három belső szögét ha összeadod, az összeg mindig pontosan 180° lesz!",
    t2_b1: "A háromszögnek 3 belső szöge van",
    t2_b2: "1. szög + 2. szög + 3. szög = 180°",
    t2_b3: "A hiányzó szöget kivonással találhatod meg",
    t2_inst: "Egyenlítsd ki a mérleget! Egy háromszög szögei 60° és 70°. Mennyi a harmadik?",
    t2_h1: "A célsúly 180. Már van 60 + 70 = 130 a jobb oldalon.",
    t2_h2: "Még 50-et kell hozzáadnod, hogy elérd a 180-at.",
    t2_q: "Egy háromszögnek van egy 90°-os és egy 40°-os szöge. Mennyi a 3. szög?",
    t2_q_a: "50°",
    t2_q_b: "90°",
    t2_q_c: "60°",
    t2_q_d: "180°",
    t3_title: "Terület és kerület",
    t3_text: "A terület megmutatja, mekkora helyet foglal el egy alakzat (cm²-ben). A kerület azt mondja meg, milyen hosszú a széle. Téglalapoknál: Terület = hossz × szélesség, Kerület = 2 × (hossz + szélesség).",
    t3_b1: "Terület = hossz × szélesség (pl. 8 × 5 = 40 cm²)",
    t3_b2: "Kerület = 2 × (hossz + szélesség)",
    t3_b3: "Terület cm²-ben, kerület cm-ben",
    t3_inst: "Egy téglalap 6 cm hosszú és 4 cm széles. Keresd a kerületet a számegyenesen!",
    t3_h1: "Kerület = 2 × (6 + 4) = 2 × 10.",
    t3_h2: "A kerület 20. Keresd a 20-at.",
    t3_q: "Egy téglalap 9 cm hosszú és 3 cm széles. Mennyi a területe?",
    t3_q_a: "27 cm²",
    t3_q_b: "24 cm²",
    t3_q_c: "12 cm²",
    t3_q_d: "30 cm²",
  },
  ro: {
    explorer_title: "Geometrie și Unghiuri",
    t1_title: "Măsurarea Unghiurilor",
    t1_text: "Unghiurile se măsoară în grade (°). Un unghi drept are 90°. Dacă e mai mic, e ascuțit. Dacă e mai mare de 90° dar mai mic de 180°, este obtuz!",
    t1_b1: "Unghi ascuțit: mai mic de 90°",
    t1_b2: "Unghi drept: exact 90°",
    t1_b3: "Unghi obtuz: între 90° și 180°",
    t1_inst: "Găsește 120 pe linia numerelor (un unghi obtuz)!",
    t1_h1: "Un unghi obtuz este mai mare de 90.",
    t1_h2: "Caută numărul 120.",
    t1_q: "Ce tip de unghi este cel de 45°?",
    t1_q_a: "Drept",
    t1_q_b: "Ascuțit",
    t1_q_c: "Obtuz",
    t1_q_d: "Alungit",
    t2_title: "În interiorul Triunghiului",
    t2_text: "Un secret din geometrie: Dacă aduni toate cele trei unghiuri interioare ale ORICĂRUI triunghi, suma este întotdeauna exact 180°!",
    t2_b1: "Un triunghi are 3 unghiuri interioare",
    t2_b2: "Unghiul 1 + Unghiul 2 + Unghiul 3 = 180°",
    t2_b3: "Poți afla un unghi lipsă prin scădere",
    t2_inst: "Echilibrează balanța! Un triunghi are 60° și 70°. Cât este al treilea?",
    t2_h1: "Totalul trebuie să fie 180. Ai deja 60 + 70 = 130.",
    t2_h2: "Trebuie să mai adaugi 50 pentru a ajunge la 180.",
    t2_q: "Un triunghi are un unghi de 90° și unul de 40°. Cât este al 3-lea?",
    t2_q_a: "50°",
    t2_q_b: "90°",
    t2_q_c: "60°",
    t2_q_d: "180°",
    t3_title: "Arie și Perimetru",
    t3_text: "Aria ne spune cât spațiu acoperă o formă (în cm²). Perimetrul ne spune cât de lung este conturul. La dreptunghiuri: Aria = lungime × lățime, Perimetru = 2 × (lungime + lățime).",
    t3_b1: "Aria = lungime × lățime (ex. 8 × 5 = 40 cm²)",
    t3_b2: "Perimetru = 2 × (lungime + lățime)",
    t3_b3: "Aria în cm², perimetrul în cm",
    t3_inst: "Un dreptunghi are 6 cm lungime și 4 cm lățime. Găsește perimetrul pe axă!",
    t3_h1: "Perimetru = 2 × (6 + 4) = 2 × 10.",
    t3_h2: "Perimetrul este 20. Găsește 20.",
    t3_q: "Un dreptunghi are 9 cm lungime și 3 cm lățime. Care este aria?",
    t3_q_a: "27 cm²",
    t3_q_b: "24 cm²",
    t3_q_c: "12 cm²",
    t3_q_d: "30 cm²",
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
      target: 120,
      step: 15,
      showJumps: true,
      jumpCount: 8,
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_b", // Acute
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "balance-scale",
      leftWeight: 180,
      rightInitial: 130, // 60 + 70
      unitIcon: "°",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // 50°
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
      max: 30,
      start: 0,
      target: 20, // 2 * (6 + 4) = 20
      step: 2,
      showJumps: true,
      jumpCount: 10,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_b", // 2
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

const GeometryExplorer5 = memo(function GeometryExplorer5({
  color = "#8B5CF6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={5} explorerId="math_g5_geometry" color={color} lang={lang} onDone={onDone} />;
});

export default GeometryExplorer5;
