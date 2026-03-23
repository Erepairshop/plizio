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
      {/* Coordinate System Grid */}
      <g transform="translate(120, 70)">
        {/* Grid lines */}
        {[-40, -20, 20, 40].map((pos) => (
          <g key={pos}>
            <line x1={pos} y1="-50" x2={pos} y2="50" stroke="#A7F3D0" strokeWidth="1" />
            <line x1="-50" y1={pos} x2="50" y2={pos} stroke="#A7F3D0" strokeWidth="1" />
          </g>
        ))}
        {/* Axes */}
        <line x1="0" y1="-50" x2="0" y2="50" stroke="#059669" strokeWidth="2" />
        <line x1="-50" y1="0" x2="50" y2="0" stroke="#059669" strokeWidth="2" />
        
        {/* Point at (2, 3) where 1 unit = 10px */}
        <circle cx="20" cy="-30" r="4" fill="#047857" />
        <text x="25" y="-35" fontSize="12" fontWeight="bold" fill="#065F46">(2, 3)</text>
        
        {/* Axis labels */}
        <text x="45" y="-5" fontSize="10" fontWeight="bold" fill="#059669">x</text>
        <text x="-5" y="-45" fontSize="10" fontWeight="bold" fill="#059669">y</text>
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
    t3_title: "The Coordinate Plane",
    t3_text: "The coordinate system is like a map. The horizontal line is the X-axis (left/right), and the vertical line is the Y-axis (up/down). We write points as (X, Y).",
    t3_b1: "Always go along the X-axis first",
    t3_b2: "Then go up or down the Y-axis",
    t3_b3: "The center point (0, 0) is the Origin",
    t3_inst: "Plot the point (3, 4) on the coordinate grid!",
    t3_h1: "Move 3 steps to the right on the horizontal (X) axis.",
    t3_h2: "Then move 4 steps UP on the vertical (Y) axis.",
    t3_q: "In the coordinates (5, 2), which number is the Y-axis?",
    t3_q_a: "5",
    t3_q_b: "2",
    t3_q_c: "7",
    t3_q_d: "0",
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
    t3_title: "Das Koordinatensystem",
    t3_text: "Das Koordinatensystem ist wie eine Karte. Die waagerechte Linie ist die X-Achse (links/rechts), die senkrechte die Y-Achse (oben/unten). Ein Punkt ist (X, Y).",
    t3_b1: "Gehe immer zuerst entlang der X-Achse",
    t3_b2: "Gehe dann die Y-Achse hoch oder runter",
    t3_b3: "Der Mittelpunkt (0, 0) heißt Ursprung",
    t3_inst: "Markiere den Punkt (3, 4) im Koordinatensystem!",
    t3_h1: "Gehe 3 Schritte nach rechts auf der waagerechten (X) Achse.",
    t3_h2: "Gehe dann 4 Schritte NACH OBEN auf der senkrechten (Y) Achse.",
    t3_q: "Welche Zahl ist bei (5, 2) die Y-Koordinate?",
    t3_q_a: "5",
    t3_q_b: "2",
    t3_q_c: "7",
    t3_q_d: "0",
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
    t3_title: "A koordináta-rendszer",
    t3_text: "A koordináta-rendszer olyan, mint egy térkép. A vízszintes vonal az X-tengely (jobbra/balra), a függőleges az Y-tengely (fel/le). Egy pontot (X, Y) formában írunk le.",
    t3_b1: "Mindig az X-tengelyen indulj el először",
    t3_b2: "Aztán menj fel vagy le az Y-tengelyen",
    t3_b3: "A középpont (0, 0) az Origó",
    t3_inst: "Keresd meg a (3, 4) pontot a koordináta-rácson!",
    t3_h1: "Lépj 3-at jobbra a vízszintes (X) tengelyen.",
    t3_h2: "Aztán lépj 4-et FELFELÉ a függőleges (Y) tengelyen.",
    t3_q: "Az (5, 2) koordinátában melyik szám az Y érték?",
    t3_q_a: "5",
    t3_q_b: "2",
    t3_q_c: "7",
    t3_q_d: "0",
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
    t3_title: "Sistemul de Coordonate",
    t3_text: "Sistemul de coordonate este ca o hartă. Linia orizontală este axa X (stânga/dreapta), iar cea verticală axa Y (sus/jos). Punctele se scriu (X, Y).",
    t3_b1: "Mergi mereu mai întâi pe axa X",
    t3_b2: "Apoi urcă sau coboară pe axa Y",
    t3_b3: "Punctul central (0, 0) este Originea",
    t3_inst: "Marchează punctul (3, 4) pe grila de coordonate!",
    t3_h1: "Mergi 3 pași la dreapta pe axa orizontală (X).",
    t3_h2: "Apoi mergi 4 pași ÎN SUS pe axa verticală (Y).",
    t3_q: "În coordonatele (5, 2), care număr este axa Y?",
    t3_q_a: "5",
    t3_q_b: "2",
    t3_q_c: "7",
    t3_q_d: "0",
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
      type: "coordinate-picker",
      targetX: 3,
      targetY: 4,
      range: 5, // Grid from -5 to +5
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
