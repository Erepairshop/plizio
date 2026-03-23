"use client";
// AreaExplorer3 — Geometry, Perimeter & Area Island (3 topics)
// Uses ExplorerEngine for teach → interact → quiz flow

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Rectangle grid visualization ──────────────────────────────────────

const RectangleSvg = memo(function RectangleSvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="rectG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9500" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFBB5C" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#rectG)" rx="16" />

      {/* Rectangle with grid cells */}
      <g transform="translate(60, 35)">
        {/* Grid: 4×3 */}
        {Array.from({ length: 4 }).map((_, i) =>
          Array.from({ length: 3 }).map((_, j) => (
            <rect key={`${i}-${j}`} x={i * 20} y={j * 20} width={20} height={20}
              fill="rgba(255,149,0,0.1)" stroke="#FF9500" strokeWidth={1} opacity="0.6" />
          ))
        )}
        {/* Labels */}
        <text x={40} y={-5} fontSize="12" fontWeight="bold" fill="#FF9500" textAnchor="middle">
          {t.rect_width}
        </text>
        <text x={-15} y={35} fontSize="12" fontWeight="bold" fill="#FF9500" textAnchor="middle">
          {t.rect_height}
        </text>
      </g>

      {/* Info */}
      <text x="20" y="120" fontSize="11" fill="#FF9500" opacity="0.7">
        {t.rect_formula}
      </text>
    </svg>
  );
});

// ─── SVG: Perimeter visualization ────────────────────────────────────────────

const PerimeterSvg = memo(function PerimeterSvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="perimG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9500" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFBB5C" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#perimG)" rx="16" />

      {/* Rectangle outline with perimeter markers */}
      <rect x="50" y="35" width="140" height="70" fill="none" stroke="#FF9500" strokeWidth="3" />

      {/* Side labels */}
      <text x="120" y="25" fontSize="12" fontWeight="bold" fill="#FF9500" textAnchor="middle">
        {t.perim_side1}
      </text>
      <text x="30" y="75" fontSize="12" fontWeight="bold" fill="#FF9500" textAnchor="middle">
        {t.perim_side2}
      </text>
      <text x="120" y="120" fontSize="12" fontWeight="bold" fill="#FF9500" textAnchor="middle">
        {t.perim_side3}
      </text>
      <text x="210" y="75" fontSize="12" fontWeight="bold" fill="#FF9500" textAnchor="middle">
        {t.perim_side4}
      </text>

      {/* Info */}
      <text x="20" y="135" fontSize="10" fill="#FF9500" opacity="0.7" fontWeight="bold">
        {t.perim_formula}
      </text>
    </svg>
  );
});

// ─── SVG: Shape types visualization ─────────────────────────────────────────

const ShapesSvg = memo(function ShapesSvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="shapesG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9500" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FFBB5C" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#shapesG)" rx="16" />

      {/* Square */}
      <rect x="30" y="40" width="40" height="40" fill="rgba(255,149,0,0.15)" stroke="#FF9500" strokeWidth="2" />
      <text x="50" y="90" fontSize="10" fontWeight="bold" fill="#FF9500" textAnchor="middle">
        {t.shape_square}
      </text>

      {/* Rectangle */}
      <rect x="100" y="45" width="50" height="30" fill="rgba(255,149,0,0.15)" stroke="#FF9500" strokeWidth="2" />
      <text x="125" y="90" fontSize="10" fontWeight="bold" fill="#FF9500" textAnchor="middle">
        {t.shape_rectangle}
      </text>

      {/* Triangle */}
      <polygon points="190,75 170,45 210,45" fill="rgba(255,149,0,0.15)" stroke="#FF9500" strokeWidth="2" />
      <text x="190" y="95" fontSize="10" fontWeight="bold" fill="#FF9500" textAnchor="middle">
        {t.shape_triangle}
      </text>

      {/* Info */}
      <text x="20" y="130" fontSize="10" fill="#FF9500" opacity="0.7" fontWeight="bold">
        {t.shapes_info}
      </text>
    </svg>
  );
});

// ─── LABELS ────────────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Area & Perimeter Explorer",
    // Topic 1: Rectangle Area
    area_title: "🔲 Rectangle Area",
    area_teach: "Count the square units inside a rectangle. Multiply length × width.",
    area_hint_1: "How many unit squares fit inside?",
    area_hint_2: "Length 5, Width 3 → Area = 5 × 3 = 15 square units",
    area_hint_3: "Area tells us how much space is inside the shape",

    // SVG: Rectangle
    rect_width: "4 units",
    rect_height: "3 u",
    rect_formula: "Area = length × width = 12 square units",

    // Topic 2: Perimeter
    perim_title: "📏 Perimeter",
    perim_teach: "Walk around the edge of the shape and add all the sides.",
    perim_hint_1: "Add all four sides of the rectangle",
    perim_hint_2: "Perimeter = 6 + 4 + 6 + 4 = 20 units",
    perim_hint_3: "Perimeter is the distance around the shape",

    // SVG: Perimeter
    perim_side1: "7 units",
    perim_side2: "5u",
    perim_side3: "7 units",
    perim_side4: "5u",
    perim_formula: "Perimeter = 7 + 5 + 7 + 5 = 24 units",

    // Topic 3: Shapes Quiz
    shapes_title: "✨ Shape Quiz",
    shapes_teach: "Identify and describe different shapes and their measurements.",
    shapes_hint_1: "What do area and perimeter measure?",
    shapes_hint_2: "Area = space inside, Perimeter = distance around",
    shapes_hint_3: "Different shapes need different formulas",

    // SVG: Shapes
    shape_square: "Square",
    shape_rectangle: "Rectangle",
    shape_triangle: "Triangle",
    shapes_info: "Different shapes, different calculations",

    shapes_q1: "What is the area of a 6×4 rectangle?",
    shapes_a1: "24 square units",
    shapes_q2: "What is the perimeter of a 5×3 rectangle?",
    shapes_a2: "16 units",
    shapes_q3: "A square has sides of 4 units. What is its area?",
    shapes_a3: "16 square units",
  },
  de: {
    explorer_title: "Fläche & Umfang entdecken",
    area_title: "🔲 Rechteck-Fläche",
    area_teach: "Zähle die Quadrat-Einheiten im Rechteck. Multipliziere Länge × Breite.",
    area_hint_1: "Wie viele Einheits-Quadrate passen hinein?",
    area_hint_2: "Länge 5, Breite 3 → Fläche = 5 × 3 = 15 Quadrat-Einheiten",
    area_hint_3: "Fläche zeigt den Platz im Inneren der Form",

    // SVG: Rectangle
    rect_width: "4 Einheiten",
    rect_height: "3 E",
    rect_formula: "Fläche = Länge × Breite = 12 Quadrat-Einheiten",

    perim_title: "📏 Umfang",
    perim_teach: "Gehe um die Kante und addiere alle Seiten.",
    perim_hint_1: "Addiere alle vier Seiten des Rechtecks",
    perim_hint_2: "Umfang = 6 + 4 + 6 + 4 = 20 Einheiten",
    perim_hint_3: "Umfang ist die Entfernung um die Form",

    // SVG: Perimeter
    perim_side1: "7 Einheiten",
    perim_side2: "5E",
    perim_side3: "7 Einheiten",
    perim_side4: "5E",
    perim_formula: "Umfang = 7 + 5 + 7 + 5 = 24 Einheiten",

    shapes_title: "✨ Formen-Quiz",
    shapes_teach: "Erkenne und beschreibe verschiedene Formen und Messungen.",
    shapes_hint_1: "Was messen Fläche und Umfang?",
    shapes_hint_2: "Fläche = Platz innen, Umfang = Entfernung außen",
    shapes_hint_3: "Verschiedene Formen brauchen verschiedene Formeln",

    // SVG: Shapes
    shape_square: "Quadrat",
    shape_rectangle: "Rechteck",
    shape_triangle: "Dreieck",
    shapes_info: "Verschiedene Formen, verschiedene Berechnungen",

    shapes_q1: "Welche Fläche hat ein 6×4 Rechteck?",
    shapes_a1: "24 Quadrat-Einheiten",
    shapes_q2: "Welcher Umfang hat ein 5×3 Rechteck?",
    shapes_a2: "16 Einheiten",
    shapes_q3: "Ein Quadrat hat Seiten von 4 Einheiten. Welche Fläche?",
    shapes_a3: "16 Quadrat-Einheiten",
  },
  hu: {
    explorer_title: "Terület & Kerület felfedezés",
    area_title: "🔲 Téglalap területe",
    area_teach: "Számold meg a négyzet-egységeket a téglalapban. Szorozd a hosszúságot × szélességgel.",
    area_hint_1: "Hány egység-négyzet fér be?",
    area_hint_2: "Hosszúság 5, Szélesség 3 → Terület = 5 × 3 = 15 négyzetegység",
    area_hint_3: "A terület az alakzat belsejének méretét mutatja",

    // SVG: Rectangle
    rect_width: "4 egység",
    rect_height: "3 e",
    rect_formula: "Terület = hosszúság × szélesség = 12 négyzetegység",

    perim_title: "📏 Kerület",
    perim_teach: "Menj körül az alakzat szélén és add össze az összes oldalt.",
    perim_hint_1: "Add össze a téglalap mind a négy oldalát",
    perim_hint_2: "Kerület = 6 + 4 + 6 + 4 = 20 egység",
    perim_hint_3: "A kerület az alakzat körüli távolság",

    // SVG: Perimeter
    perim_side1: "7 egység",
    perim_side2: "5e",
    perim_side3: "7 egység",
    perim_side4: "5e",
    perim_formula: "Kerület = 7 + 5 + 7 + 5 = 24 egység",

    shapes_title: "✨ Alakzat-kvíz",
    shapes_teach: "Ismerd fel és írd le a különböző alakzatokat és méreteiket.",
    shapes_hint_1: "Mit mérnek a terület és kerület?",
    shapes_hint_2: "Terület = belső hely, Kerület = külső távolság",
    shapes_hint_3: "Különböző alakzatok eltérő képleteket igényelnek",

    // SVG: Shapes
    shape_square: "Négyzet",
    shape_rectangle: "Téglalap",
    shape_triangle: "Háromszög",
    shapes_info: "Különböző alakzatok, különböző számítások",

    shapes_q1: "Mekkora egy 6×4 téglalap területe?",
    shapes_a1: "24 négyzetegység",
    shapes_q2: "Mekkora egy 5×3 téglalap kerülete?",
    shapes_a2: "16 egység",
    shapes_q3: "Egy négyzetnek 4 egység hosszú oldalai vannak. Mekkora a területe?",
    shapes_a3: "16 négyzetegység",
  },
  ro: {
    explorer_title: "Explorare Arie & Perimetru",
    area_title: "🔲 Aria dreptunghiului",
    area_teach: "Numără unitățile pătrate din dreptunghi. Înmulțește lungimea × lățimea.",
    area_hint_1: "Câte pătrate unitare se potrivesc?",
    area_hint_2: "Lungimea 5, Lățimea 3 → Aria = 5 × 3 = 15 unități pătrate",
    area_hint_3: "Aria arată spațiul din interiorul formei",

    // SVG: Rectangle
    rect_width: "4 unități",
    rect_height: "3 u",
    rect_formula: "Aria = lungime × lățime = 12 unități pătrate",

    perim_title: "📏 Perimetru",
    perim_teach: "Merge în jurul formei și adună toate laturile.",
    perim_hint_1: "Adună toate patru laturi ale dreptunghiului",
    perim_hint_2: "Perimetru = 6 + 4 + 6 + 4 = 20 unități",
    perim_hint_3: "Perimetrul este distanța din jurul formei",

    // SVG: Perimeter
    perim_side1: "7 unități",
    perim_side2: "5u",
    perim_side3: "7 unități",
    perim_side4: "5u",
    perim_formula: "Perimetru = 7 + 5 + 7 + 5 = 24 unități",

    shapes_title: "✨ Quiz de forme",
    shapes_teach: "Identifică și descrie diferite forme și măsurătorile lor.",
    shapes_hint_1: "Ce măsoară aria și perimetrul?",
    shapes_hint_2: "Aria = spațiu interior, Perimetru = distanță exterior",
    shapes_hint_3: "Formele diferite necesită formule diferite",

    // SVG: Shapes
    shape_square: "Pătrat",
    shape_rectangle: "Dreptunghi",
    shape_triangle: "Triunghi",
    shapes_info: "Forme diferite, calcule diferite",

    shapes_q1: "Care este aria unui dreptunghi 6×4?",
    shapes_a1: "24 unități pătrate",
    shapes_q2: "Care este perimetrul unui dreptunghi 5×3?",
    shapes_a2: "16 unități",
    shapes_q3: "Un pătrat are laturi de 4 unități. Care este aria?",
    shapes_a3: "16 unități pătrate",
  },
};

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📐",
  rounds: [
    // ─ R1: Rectangle Area ─
    {
      type: "info",
      infoTitle: "area_title",
      infoText: "area_teach",
      svg: (lang) => <RectangleSvg lang={lang} />,
      bulletKeys: ["area_hint_1", "area_hint_2", "area_hint_3"],
    },
    {
      type: "mcq",
      infoTitle: "area_title",
      infoText: "area_teach",
      svg: (lang) => <RectangleSvg lang={lang} />,
      questions: [
        {
          question: "shapes_q1",
          choices: ["18 square units", "24 square units", "30 square units", "20 square units"],
          answer: "24 square units",
        },
      ],
    },

    // ─ R2: Perimeter ─
    {
      type: "info",
      infoTitle: "perim_title",
      infoText: "perim_teach",
      svg: (lang) => <PerimeterSvg lang={lang} />,
      bulletKeys: ["perim_hint_1", "perim_hint_2", "perim_hint_3"],
    },
    {
      type: "mcq",
      infoTitle: "perim_title",
      infoText: "perim_teach",
      svg: (lang) => <PerimeterSvg lang={lang} />,
      questions: [
        {
          question: "shapes_q2",
          choices: ["8 units", "15 units", "16 units", "18 units"],
          answer: "16 units",
        },
      ],
    },

    // ─ R3: Shapes ─
    {
      type: "info",
      infoTitle: "shapes_title",
      infoText: "shapes_teach",
      svg: (lang) => <ShapesSvg lang={lang} />,
      bulletKeys: ["shapes_hint_1", "shapes_hint_2", "shapes_hint_3"],
    },
    {
      type: "mcq",
      infoTitle: "shapes_title",
      infoText: "shapes_teach",
      svg: (lang) => <ShapesSvg lang={lang} />,
      questions: [
        {
          question: "shapes_q1",
          choices: ["20 square units", "24 square units", "28 square units", "32 square units"],
          answer: "24 square units",
        },
        {
          question: "shapes_q2",
          choices: ["14 units", "16 units", "18 units", "20 units"],
          answer: "16 units",
        },
        {
          question: "shapes_q3",
          choices: ["8 square units", "12 square units", "16 square units", "20 square units"],
          answer: "16 square units",
        },
      ],
    },
  ],
};

// ─── WRAPPER COMPONENT ─────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function AreaExplorer3({ color = "#FF9500", lang, onDone, onClose }: Props) {
  return (
    <ExplorerEngine
      def={EXPLORER_DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
      grade={3}
    />
  );
}
