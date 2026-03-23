"use client";
// ShapesExplorer — Shape discovery for Grade 1 (island i7)
// Uses new topic-based mode: teach → interact → quiz per topic

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Basic Shapes Introduction ──────────────────────────────────────────────

const BasicShapesSvg = memo(function BasicShapesSvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="shapeG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#shapeG)" rx="16" />

      {/* Triangle (left) */}
      <g transform="translate(50, 65)">
        <polygon points="0,-20 22,18 -22,18" fill="#EC4899" opacity="0.8" stroke="#BE185D" strokeWidth="2" />
        <text x="0" y="38" fontSize="10" fontWeight="bold" fill="#8B5CF6" textAnchor="middle">{t.svg_triangle}</text>
      </g>

      {/* Square (center) */}
      <g transform="translate(120, 65)">
        <rect x="-15" y="-15" width="30" height="30" fill="#3B82F6" opacity="0.8" stroke="#1E40AF" strokeWidth="2" />
        <text x="0" y="38" fontSize="10" fontWeight="bold" fill="#8B5CF6" textAnchor="middle">{t.svg_square}</text>
      </g>

      {/* Circle (right) */}
      <g transform="translate(190, 65)">
        <circle cx="0" cy="0" r="18" fill="#F59E0B" opacity="0.8" stroke="#D97706" strokeWidth="2" />
        <text x="0" y="38" fontSize="10" fontWeight="bold" fill="#8B5CF6" textAnchor="middle">{t.svg_circle}</text>
      </g>

      <text x="120" y="20" fontSize="13" fontWeight="900" fill="#8B5CF6" textAnchor="middle">{t.svg_basic_shapes}</text>
    </svg>
  );
});

// ─── SVG: Spatial Awareness - Positioning ────────────────────────────────────────

const SpatialAwarenessSvg = memo(function SpatialAwarenessSvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="spatialG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#spatialG)" rx="16" />

      {/* Center reference square */}
      <rect x="105" y="55" width="30" height="30" fill="#10B981" opacity="0.8" stroke="#059669" strokeWidth="2" />
      <text x="120" y="120" fontSize="11" fontWeight="bold" fill="#0891B2" textAnchor="middle">{t.svg_center}</text>

      {/* Above */}
      <circle cx="120" cy="25" r="8" fill="#06B6D4" opacity="0.7" stroke="#0891B2" strokeWidth="1.5" />
      <text x="120" y="8" fontSize="9" fontWeight="bold" fill="#0891B2" textAnchor="middle">{t.svg_above}</text>

      {/* Left */}
      <circle cx="60" cy="70" r="8" fill="#06B6D4" opacity="0.7" stroke="#0891B2" strokeWidth="1.5" />
      <text x="38" y="75" fontSize="9" fontWeight="bold" fill="#0891B2" textAnchor="middle">{t.svg_left}</text>

      {/* Right */}
      <circle cx="180" cy="70" r="8" fill="#06B6D4" opacity="0.7" stroke="#0891B2" strokeWidth="1.5" />
      <text x="202" y="75" fontSize="9" fontWeight="bold" fill="#0891B2" textAnchor="middle">{t.svg_right}</text>

      {/* Below */}
      <circle cx="120" cy="105" r="8" fill="#06B6D4" opacity="0.7" stroke="#0891B2" strokeWidth="1.5" />
    </svg>
  );
});

// ─── SVG: Patterns - Repetition ──────────────────────────────────────────────────

const PatternsSvg = memo(function PatternsSvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="patternG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#patternG)" rx="16" />

      {/* Pattern row: circle, square, circle, square, ? */}
      <g transform="translate(25, 55)">
        {/* Circle 1 */}
        <circle cx="0" cy="0" r="10" fill="#EC4899" opacity="0.8" stroke="#BE185D" strokeWidth="1.5" />
        <text x="0" y="20" fontSize="9" fontWeight="bold" fill="#B45309" textAnchor="middle">1</text>

        {/* Square 2 */}
        <rect x="36" y="-10" width="20" height="20" fill="#3B82F6" opacity="0.8" stroke="#1E40AF" strokeWidth="1.5" />
        <text x="46" y="20" fontSize="9" fontWeight="bold" fill="#B45309" textAnchor="middle">2</text>

        {/* Circle 3 */}
        <circle cx="92" cy="0" r="10" fill="#EC4899" opacity="0.8" stroke="#BE185D" strokeWidth="1.5" />
        <text x="92" y="20" fontSize="9" fontWeight="bold" fill="#B45309" textAnchor="middle">3</text>

        {/* Square 4 */}
        <rect x="128" y="-10" width="20" height="20" fill="#3B82F6" opacity="0.8" stroke="#1E40AF" strokeWidth="1.5" />
        <text x="138" y="20" fontSize="9" fontWeight="bold" fill="#B45309" textAnchor="middle">4</text>

        {/* Question mark */}
        <text x="174" y="8" fontSize="24" fontWeight="900" fill="#B45309" textAnchor="middle">?</text>
      </g>

      <text x="120" y="128" fontSize="11" fontWeight="bold" fill="#B45309" textAnchor="middle">{t.svg_next}</text>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Explorer meta
    explorer_title: "Shapes Explorer",
    // SVG labels
    svg_triangle: "Triangle",
    svg_square: "Square",
    svg_circle: "Circle",
    svg_basic_shapes: "4 BASIC SHAPES",
    svg_above: "ABOVE",
    svg_left: "LEFT",
    svg_right: "RIGHT",
    svg_center: "CENTER",
    svg_next: "WHAT COMES NEXT?",
    // Topic 1: Basic shapes
    t1_title: "Basic Shapes",
    t1_text: "There are four basic shapes: triangle (3 sides), square (4 equal sides), circle (round, no sides), and rectangle (4 sides, longer than wide). Each shape has special features!",
    t1_b1: "Triangle has 3 sides and 3 corners",
    t1_b2: "Square has 4 equal sides and 4 corners",
    t1_b3: "Circle is round with no sides or corners",
    t1_inst: "Count 3 triangles and 3 squares — how many shapes total?",
    t1_h1: "3 triangles + 3 squares = how many?",
    t1_h2: "Count them all together — the answer is 6!",
    t1_q: "How many corners does a triangle have?",
    t1_q_2: "2",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_5: "5",
    // Topic 2: Spatial awareness
    t2_title: "Where Are Things?",
    t2_text: "Shapes can be in different places: ABOVE (up), BELOW (down), LEFT (left side), RIGHT (right side), and CENTER (middle). Learning positions helps us understand directions!",
    t2_b1: "Left = the left side",
    t2_b2: "Right = the right side",
    t2_b3: "Above = higher up; Below = lower down",
    t2_inst: "Tap position 3 on the line — the middle!",
    t2_h1: "Count from 1 to 5, find the middle",
    t2_h2: "1, 2, 3 (middle!) — tap number 3!",
    t2_q: "Which shape has 4 equal sides?",
    t2_q_triangle: "triangle",
    t2_q_square: "square",
    t2_q_circle: "circle",
    t2_q_rectangle: "rectangle",
    // Topic 3: Patterns
    t3_title: "Patterns & Repetition",
    t3_text: "A pattern repeats the same shapes or colors in order: circle, square, circle, square... When you see a pattern, you can guess what comes next! Patterns are all around us.",
    t3_b1: "Patterns repeat in order",
    t3_b2: "Look for what repeats",
    t3_b3: "Guess the next shape in the pattern",
    t3_inst: "Move 4 blocks to complete the pattern!",
    t3_h1: "Circle-square-circle-square-?",
    t3_h2: "The next shape is a circle! Drag 4 circles!",
    t3_q: "What comes next: red square, blue circle, red square, blue circle, ?",
    t3_q_red_sq: "red square",
    t3_q_blue_circ: "blue circle",
    t3_q_red_circ: "red circle",
    t3_q_blue_sq: "blue square",
  },
  de: {
    explorer_title: "Formen entdecken",
    svg_triangle: "Dreieck",
    svg_square: "Quadrat",
    svg_circle: "Kreis",
    svg_basic_shapes: "4 GRUNDFORMEN",
    svg_above: "OBEN",
    svg_left: "LINKS",
    svg_right: "RECHTS",
    svg_center: "MITTE",
    svg_next: "WAS KOMMT ALS NÄCHSTES?",
    t1_title: "Grundformen",
    t1_text: "Es gibt vier Grundformen: Dreieck (3 Seiten), Quadrat (4 gleiche Seiten), Kreis (rund, keine Seiten) und Rechteck (4 Seiten, länger als breit). Jede Form hat besondere Merkmale!",
    t1_b1: "Dreieck hat 3 Seiten und 3 Ecken",
    t1_b2: "Quadrat hat 4 gleiche Seiten und 4 Ecken",
    t1_b3: "Kreis ist rund ohne Seiten oder Ecken",
    t1_inst: "Zähle 3 Dreiecke und 3 Quadrate — wie viele Formen insgesamt?",
    t1_h1: "3 Dreiecke + 3 Quadrate = wie viele?",
    t1_h2: "Zähle sie zusammen — die Antwort ist 6!",
    t1_q: "Wie viele Ecken hat ein Dreieck?",
    t1_q_2: "2",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_5: "5",
    t2_title: "Wo sind die Formen?",
    t2_text: "Formen können an verschiedenen Stellen sein: OBEN (nach oben), UNTEN (nach unten), LINKS (linke Seite), RECHTS (rechte Seite) und MITTE (Mitte). Das Lernen von Positionen hilft uns, Richtungen zu verstehen!",
    t2_b1: "Links = die linke Seite",
    t2_b2: "Rechts = die rechte Seite",
    t2_b3: "Oben = höher oben; Unten = weiter unten",
    t2_inst: "Tippe auf Position 3 auf der Linie — die Mitte!",
    t2_h1: "Zähle von 1 bis 5, finde die Mitte",
    t2_h2: "1, 2, 3 (Mitte!) — tippe auf 3!",
    t2_q: "Welche Form hat 4 gleiche Seiten?",
    t2_q_triangle: "Dreieck",
    t2_q_square: "Quadrat",
    t2_q_circle: "Kreis",
    t2_q_rectangle: "Rechteck",
    t3_title: "Muster & Wiederholung",
    t3_text: "Ein Muster wiederholt die gleichen Formen oder Farben der Reihe nach: Kreis, Quadrat, Kreis, Quadrat... Wenn du ein Muster siehst, kannst du erraten, was als nächstes kommt! Muster sind überall um uns herum.",
    t3_b1: "Muster wiederholen sich in Reihenfolge",
    t3_b2: "Schau, was sich wiederholt",
    t3_b3: "Erraten Sie die nächste Form im Muster",
    t3_inst: "Verschiebe 4 Blöcke, um das Muster zu vervollständigen!",
    t3_h1: "Kreis-Quadrat-Kreis-Quadrat-?",
    t3_h2: "Die nächste Form ist ein Kreis! Verschiebe 4 Kreise!",
    t3_q: "Was kommt als nächstes: rotes Quadrat, blauer Kreis, rotes Quadrat, blauer Kreis, ?",
    t3_q_red_sq: "rotes Quadrat",
    t3_q_blue_circ: "blauer Kreis",
    t3_q_red_circ: "roter Kreis",
    t3_q_blue_sq: "blaues Quadrat",
  },
  hu: {
    explorer_title: "Alakzatok felfedezése",
    svg_triangle: "Háromszög",
    svg_square: "Négyzet",
    svg_circle: "Kör",
    svg_basic_shapes: "4 ALAPFORMA",
    svg_above: "FELÜL",
    svg_left: "BALRA",
    svg_right: "JOBBRA",
    svg_center: "KÖZÉP",
    svg_next: "MI JÖN LEGKÖZELEBB?",
    t1_title: "Alapalakzatok",
    t1_text: "Négy alapalakzat van: háromszög (3 oldal), négyzet (4 egyenlő oldal), kör (kerek, nincs oldala) és téglalap (4 oldal, hosszabb, mint széles). Minden alakzatnak különleges jellemzői vannak!",
    t1_b1: "Háromszögnek 3 oldala és 3 sarka van",
    t1_b2: "Négyzetnek 4 egyenlő oldala és 4 sarka van",
    t1_b3: "A kör kerek, nincs oldala vagy sarka",
    t1_inst: "Számold meg a 3 háromszöget és 3 négyzetet — összesen hány alakzat?",
    t1_h1: "3 háromszög + 3 négyzet = hány?",
    t1_h2: "Számold össze őket — a válasz 6!",
    t1_q: "Hány sarka van egy háromszögnek?",
    t1_q_2: "2",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_5: "5",
    t2_title: "Hol vannak az alakzatok?",
    t2_text: "Az alakzatok különböző helyeken lehetnek: FELÜL (felül), ALUL (alul), BALRA (bal oldal), JOBBRA (jobb oldal) és KÖZÉPEN (közepén). A pozíciók tanulása segít megérteni az irányokat!",
    t2_b1: "Balra = a bal oldal",
    t2_b2: "Jobbra = a jobb oldal",
    t2_b3: "Felül = fentebb; Alul = lejjebb",
    t2_inst: "Koppints a 3. pozícióra a vonalon — a közepére!",
    t2_h1: "Számolj 1-től 5-ig, találd meg a közepét",
    t2_h2: "1, 2, 3 (közepén!) — koppints a 3-ra!",
    t2_q: "Melyik alakzatnak van 4 egyenlő oldala?",
    t2_q_triangle: "háromszög",
    t2_q_square: "négyzet",
    t2_q_circle: "kör",
    t2_q_rectangle: "téglalap",
    t3_title: "Minták & Ismétlés",
    t3_text: "A minta ugyanazt az alakzatot vagy színt ismétli: kör, négyzet, kör, négyzet... Ha meglátod a mintát, kitalálhatod, mi jön a következő! A minták mindenütt körülöttünk vannak.",
    t3_b1: "A minták sorrendben ismétlődnek",
    t3_b2: "Nézd meg, mi ismétlődik",
    t3_b3: "Találd meg a következő alakzatot a mintában",
    t3_inst: "Mozgass 4 blokkot a minta befejezéséhez!",
    t3_h1: "Kör-négyzet-kör-négyzet-?",
    t3_h2: "A következő alakzat egy kör! Mozgass 4 kört!",
    t3_q: "Mi jön a következő: piros négyzet, kék kör, piros négyzet, kék kör, ?",
    t3_q_red_sq: "piros négyzet",
    t3_q_blue_circ: "kék kör",
    t3_q_red_circ: "piros kör",
    t3_q_blue_sq: "kék négyzet",
  },
  ro: {
    explorer_title: "Explorarea formelor",
    svg_triangle: "Triunghi",
    svg_square: "Pătrat",
    svg_circle: "Cerc",
    svg_basic_shapes: "4 FORME DE BAZĂ",
    svg_above: "SUS",
    svg_left: "STÂNGA",
    svg_right: "DREAPTA",
    svg_center: "CENTRU",
    svg_next: "CE URMEAZĂ?",
    t1_title: "Forme de bază",
    t1_text: "Există patru forme de bază: triunghi (3 laturi), pătrat (4 laturi egale), cerc (rotund, fără laturi) și dreptunghi (4 laturi, mai lung decât larg). Fiecare formă are caracteristici speciale!",
    t1_b1: "Triunghiul are 3 laturi și 3 colțuri",
    t1_b2: "Pătratul are 4 laturi egale și 4 colțuri",
    t1_b3: "Cercul este rotund, fără laturi sau colțuri",
    t1_inst: "Numără 3 triunghiuri și 3 pătrate — câte forme în total?",
    t1_h1: "3 triunghiuri + 3 pătrate = câte?",
    t1_h2: "Numără-le împreună — răspunsul este 6!",
    t1_q: "Câte colțuri are un triunghi?",
    t1_q_2: "2",
    t1_q_3: "3",
    t1_q_4: "4",
    t1_q_5: "5",
    t2_title: "Unde sunt formele?",
    t2_text: "Formele pot fi în locuri diferite: SUS (deasupra), JOS (dedesubt), STÂNGA (stânga), DREAPTA (dreapta) și CENTRU (în mijloc). Învățarea pozițiilor ne ajută să înțelegem direcțiile!",
    t2_b1: "Stânga = partea stângă",
    t2_b2: "Dreapta = partea dreaptă",
    t2_b3: "Sus = mai sus; Jos = mai jos",
    t2_inst: "Atinge poziția 3 pe linie — mijlocul!",
    t2_h1: "Numără de la 1 la 5, găsește mijlocul",
    t2_h2: "1, 2, 3 (mijloc!) — atinge 3!",
    t2_q: "Care formă are 4 laturi egale?",
    t2_q_triangle: "triunghi",
    t2_q_square: "pătrat",
    t2_q_circle: "cerc",
    t2_q_rectangle: "dreptunghi",
    t3_title: "Modele & Repetare",
    t3_text: "Un model repetă aceleași forme sau culori în ordine: cerc, pătrat, cerc, pătrat... Când vezi un model, poți ghici ce vine mai departe! Modelele sunt peste tot în jurul nostru.",
    t3_b1: "Modelele se repetă în ordine",
    t3_b2: "Uită-te la ceea ce se repetă",
    t3_b3: "Ghicește următoarea formă din model",
    t3_inst: "Mută 4 blocuri pentru a completa modelul!",
    t3_h1: "Cerc-pătrat-cerc-pătrat-?",
    t3_h2: "Următoarea formă este un cerc! Mută 4 cercuri!",
    t3_q: "Ce vine mai departe: pătrat roșu, cerc albastru, pătrat roșu, cerc albastru, ?",
    t3_q_red_sq: "pătrat roșu",
    t3_q_blue_circ: "cerc albastru",
    t3_q_red_circ: "cerc roșu",
    t3_q_blue_sq: "pătrat albastru",
  },
};

// ─── Topic definitions ───────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // Topic 1: Basic shapes (4 shapes)
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <BasicShapesSvg lang={lang} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [3, 3],
      answer: 6,
      blockIcon: "🔷",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_2", "t1_q_3", "t1_q_4", "t1_q_5"],
      answer: "t1_q_3",
    },
  },

  // Topic 2: Spatial awareness (left/right/above/below)
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: (lang) => <SpatialAwarenessSvg lang={lang} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "number-line",
      min: 1,
      max: 5,
      start: 1,
      target: 3,
      showJumps: true,
      jumpCount: 2,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_triangle", "t2_q_square", "t2_q_circle", "t2_q_rectangle"],
      answer: "t2_q_square",
    },
  },

  // Topic 3: Patterns & repetition
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: (lang) => <PatternsSvg lang={lang} />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [2, 2],
      answer: 4,
      blockIcon: "🔴",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_red_sq", "t3_q_blue_circ", "t3_q_red_circ", "t3_q_blue_sq"],
      answer: "t3_q_blue_circ",
    },
  },
];

// ─── Explorer definition ─────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔷",
  topics: TOPICS,
  rounds: [], // legacy — not used in topic mode
};

// ─── Export ──────────────────────────────────────────────────────────────────────

const ShapesExplorer = memo(function ShapesExplorer({
  color = "#10B981",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_shapes" color={color} lang={lang} onDone={onDone} />;
});

export default ShapesExplorer;
