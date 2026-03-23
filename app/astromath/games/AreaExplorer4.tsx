"use client";
// AreaExplorer4 — Area & Perimeter for Grade 4 (island i5)
// Uses ExplorerEngine with 3 topics: grid area, perimeter calculation, area vs perimeter

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Grid square counting (area) ─────────────────────────────────────────

const GridAreaSvg = memo(function GridAreaSvg({ width = 4, height = 3 }: { width?: number; height?: number }) {
  const cellSize = 30;
  const totalWidth = width * cellSize + 40;
  const totalHeight = height * cellSize + 40;

  return (
    <svg width="100%" viewBox={`0 0 ${totalWidth} ${totalHeight}`}>
      <defs>
        <linearGradient id="gaG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width={totalWidth} height={totalHeight} fill="url(#gaG)" rx="16" />

      {/* Grid */}
      <g transform="translate(20, 20)">
        {/* Cells */}
        {Array.from({ length: height }, (_, row) =>
          Array.from({ length: width }, (_, col) => (
            <rect
              key={`${row}-${col}`}
              x={col * cellSize}
              y={row * cellSize}
              width={cellSize}
              height={cellSize}
              fill="#10B981"
              opacity="0.6"
              stroke="rgba(255,255,255,0.4)"
              strokeWidth="2"
            />
          ))
        )}

        {/* Grid border */}
        <rect
          x="0"
          y="0"
          width={width * cellSize}
          height={height * cellSize}
          fill="none"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
        />

        {/* Labels */}
        <text x={width * cellSize / 2} y={height * cellSize + 20} fontSize="13" fontWeight="bold" fill="#10B981" textAnchor="middle">
          {width} × {height} = {width * height} squares
        </text>
      </g>
    </svg>
  );
});

// ─── SVG: Rectangle perimeter with labeled sides ─────────────────────────────────

const PerimeterSvg = memo(function PerimeterSvg({ width = 6, height = 4 }: { width?: number; height?: number }) {
  const scale = 20;
  const w = width * scale;
  const h = height * scale;
  const px = 50;
  const py = 30;

  const perimeter = 2 * (width + height);

  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="pG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#pG)" rx="16" />

      {/* Rectangle */}
      <g transform={`translate(${px}, ${py})`}>
        <rect width={w} height={h} fill="rgba(245,158,11,0.2)" stroke="#F59E0B" strokeWidth="3" rx="2" />

        {/* Top side label */}
        <text x={w / 2} y="-8" fontSize="12" fontWeight="bold" fill="#F59E0B" textAnchor="middle">
          {width}
        </text>

        {/* Right side label */}
        <text x={w + 16} y={h / 2} fontSize="12" fontWeight="bold" fill="#F59E0B" dominantBaseline="middle">
          {height}
        </text>

        {/* Bottom side label */}
        <text x={w / 2} y={h + 20} fontSize="12" fontWeight="bold" fill="#F59E0B" textAnchor="middle">
          {width}
        </text>

        {/* Left side label */}
        <text x="-16" y={h / 2} fontSize="12" fontWeight="bold" fill="#F59E0B" textAnchor="end" dominantBaseline="middle">
          {height}
        </text>
      </g>

      {/* Perimeter calculation */}
      <text x="120" y="135" fontSize="13" fontWeight="bold" fill="rgba(255,255,255,0.7)" textAnchor="middle">
        Perimeter = 2 × ({width} + {height}) = {perimeter}
      </text>
    </svg>
  );
});

// ─── SVG: Area vs Perimeter comparison ────────────────────────────────────────────

const AreaVsPerimeterSvg = memo(function AreaVsPerimeterSvg() {
  return (
    <svg width="100%" viewBox="0 0 240 150">
      <defs>
        <linearGradient id="avpG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="150" fill="url(#avpG)" rx="16" />

      {/* Square 1: 3×3 */}
      <g transform="translate(20, 30)">
        <rect width="60" height="60" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" strokeWidth="2" />
        <text x="30" y="35" fontSize="11" fontWeight="bold" fill="#8B5CF6" textAnchor="middle" dominantBaseline="middle">
          3×3
        </text>
        <text x="30" y="75" fontSize="10" fill="#8B5CF6" textAnchor="middle">
          Area=9
        </text>
        <text x="30" y="88" fontSize="10" fill="#8B5CF6" textAnchor="middle">
          Perim=12
        </text>
      </g>

      {/* Arrow */}
      <text x="120" y="65" fontSize="14" fontWeight="bold" fill="rgba(255,255,255,0.5)" textAnchor="middle">
        vs
      </text>

      {/* Rectangle: 5×2 */}
      <g transform="translate(150, 30)">
        <rect width="60" height="30" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" strokeWidth="2" />
        <text x="30" y="20" fontSize="11" fontWeight="bold" fill="#8B5CF6" textAnchor="middle" dominantBaseline="middle">
          5×2
        </text>
        <text x="30" y="65" fontSize="10" fill="#8B5CF6" textAnchor="middle">
          Area=10
        </text>
        <text x="30" y="78" fontSize="10" fill="#8B5CF6" textAnchor="middle">
          Perim=14
        </text>
      </g>

      {/* Explanation */}
      <text x="120" y="130" fontSize="11" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        Same area ≠ Same perimeter!
      </text>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Area & Perimeter Explorer",
    // Topic 1: Grid area counting
    t1_title: "Counting Square Units (Area)",
    t1_text: "Area is how much space a shape covers. We measure area by counting square units inside. A 4×3 rectangle has 12 square units inside.",
    t1_b1: "Area = length × width",
    t1_b2: "Count all the squares inside",
    t1_b3: "Square units could be cm² or m²",
    t1_q: "What is the area of a 5×4 rectangle?",
    t1_q_9: "9 square units",
    t1_q_20: "20 square units",
    t1_q_18: "18 square units",
    t1_q_16: "16 square units",
    // Topic 2: Perimeter with labeled sides
    t2_title: "Measuring Around the Edge (Perimeter)",
    t2_text: "Perimeter is the distance around a shape. To find the perimeter, add all the side lengths. For a 6×4 rectangle: P = 6 + 4 + 6 + 4 = 20",
    t2_b1: "Perimeter = sum of all sides",
    t2_b2: "Rectangle: P = 2 × (length + width)",
    t2_b3: "Walk around the shape to find it",
    t2_q: "What is the perimeter of a 7×3 rectangle?",
    t2_q_20: "20 units",
    t2_q_10: "10 units",
    t2_q_21: "21 units",
    t2_q_14: "14 units",
    // Topic 3: Area vs Perimeter
    t3_title: "Area vs Perimeter",
    t3_text: "A shape's area and perimeter are different! Two shapes can have the same area but different perimeters, or vice versa. A 3×3 square and a 4×2 rectangle have different areas AND perimeters.",
    t3_b1: "Area and perimeter are independent",
    t3_b2: "A bigger area doesn't mean bigger perimeter",
    t3_b3: "Always check what the question asks for",
    t3_q: "Which shape has the larger area: 4×2 or 3×3?",
    t3_q_4x2: "4×2 (area = 8)",
    t3_q_3x3: "3×3 (area = 9)",
    t3_q_same: "They are the same",
    t3_q_need_info: "Need more information",
    // Review questions (R5)
    r5_q1: "A square has sides of 5 cm. What is its area?",
    r5_q1_20: "20 cm²",
    r5_q1_25: "25 cm²",
    r5_q1_10: "10 cm²",
    r5_q1_15: "15 cm²",
    r5_q2: "A rectangle is 8 meters long and 5 meters wide. What is its perimeter?",
    r5_q2_26: "26 meters",
    r5_q2_40: "40 meters",
    r5_q2_13: "13 meters",
    r5_q2_20: "20 meters",
    r5_q3: "Which pair has the same perimeter?",
    r5_q3_a: "3×4 and 2×5",
    r5_q3_b: "2×6 and 3×4",
    r5_q3_c: "4×4 and 3×5",
    r5_q3_d: "2×3 and 1×4",
  },
  de: {
    explorer_title: "Fläche & Umfang Entdecker",
    t1_title: "Quadratische Einheiten zählen (Fläche)",
    t1_text: "Fläche ist der Platz, den eine Form einnimmt. Wir messen Fläche durch das Zählen von Quadrateinheiten. Ein 4×3 Rechteck hat 12 Quadrateinheiten.",
    t1_b1: "Fläche = Länge × Breite",
    t1_b2: "Zähle alle Quadrate innen",
    t1_b3: "Quadrateinheiten können cm² oder m² sein",
    t1_q: "Wie groß ist die Fläche eines 5×4 Rechtecks?",
    t1_q_9: "9 Quadrateinheiten",
    t1_q_20: "20 Quadrateinheiten",
    t1_q_18: "18 Quadrateinheiten",
    t1_q_16: "16 Quadrateinheiten",
    t2_title: "Messung um den Rand (Umfang)",
    t2_text: "Der Umfang ist die Entfernung um eine Form. Um den Umfang zu finden, addiere alle Seitenlängen. Für ein 6×4 Rechteck: U = 6 + 4 + 6 + 4 = 20",
    t2_b1: "Umfang = Summe aller Seiten",
    t2_b2: "Rechteck: U = 2 × (Länge + Breite)",
    t2_b3: "Gehe um die Form, um es zu finden",
    t2_q: "Wie groß ist der Umfang eines 7×3 Rechtecks?",
    t2_q_20: "20 Einheiten",
    t2_q_10: "10 Einheiten",
    t2_q_21: "21 Einheiten",
    t2_q_14: "14 Einheiten",
    t3_title: "Fläche vs Umfang",
    t3_text: "Fläche und Umfang einer Form sind verschieden! Zwei Formen können die gleiche Fläche aber andere Umfänge haben, oder umgekehrt. Ein 3×3 Quadrat und ein 4×2 Rechteck haben andere Flächen UND Umfänge.",
    t3_b1: "Fläche und Umfang sind unabhängig",
    t3_b2: "Eine größere Fläche bedeutet nicht größeren Umfang",
    t3_b3: "Überprüfe immer, was die Frage fragt",
    t3_q: "Welche Form hat größere Fläche: 4×2 oder 3×3?",
    t3_q_4x2: "4×2 (Fläche = 8)",
    t3_q_3x3: "3×3 (Fläche = 9)",
    t3_q_same: "Sie sind gleich",
    t3_q_need_info: "Brauche mehr Information",
    r5_q1: "Ein Quadrat hat Seiten von 5 cm. Wie groß ist seine Fläche?",
    r5_q1_20: "20 cm²",
    r5_q1_25: "25 cm²",
    r5_q1_10: "10 cm²",
    r5_q1_15: "15 cm²",
    r5_q2: "Ein Rechteck ist 8 Meter lang und 5 Meter breit. Wie groß ist sein Umfang?",
    r5_q2_26: "26 Meter",
    r5_q2_40: "40 Meter",
    r5_q2_13: "13 Meter",
    r5_q2_20: "20 Meter",
    r5_q3: "Welches Paar hat den gleichen Umfang?",
    r5_q3_a: "3×4 und 2×5",
    r5_q3_b: "2×6 und 3×4",
    r5_q3_c: "4×4 und 3×5",
    r5_q3_d: "2×3 und 1×4",
  },
  hu: {
    explorer_title: "Terület & Kerület Felfedező",
    t1_title: "Négyzet egységek számlálása (terület)",
    t1_text: "A terület az az élettér, amit egy forma elfoglal. A területet négyzet egységek számlálásával mérjük. Egy 4×3 téglalap 12 négyzet egységet tartalmaz.",
    t1_b1: "Terület = hosszúság × szélesség",
    t1_b2: "Számold meg az összes négyzetet belül",
    t1_b3: "Négyzet egységek lehetnek cm² vagy m²",
    t1_q: "Mekkora egy 5×4 téglalap területe?",
    t1_q_9: "9 négyzet egység",
    t1_q_20: "20 négyzet egység",
    t1_q_18: "18 négyzet egység",
    t1_q_16: "16 négyzet egység",
    t2_title: "Mérés az él körül (kerület)",
    t2_text: "A kerület az a távolság egy forma körül. A kerület megtalálásához add hozzá az összes oldalhosszat. Egy 6×4 téglalap esetén: K = 6 + 4 + 6 + 4 = 20",
    t2_b1: "Kerület = az összes oldal összege",
    t2_b2: "Téglalap: K = 2 × (hosszúság + szélesség)",
    t2_b3: "Járj körbe a forma körül",
    t2_q: "Mekkora egy 7×3 téglalap kerülete?",
    t2_q_20: "20 egység",
    t2_q_10: "10 egység",
    t2_q_21: "21 egység",
    t2_q_14: "14 egység",
    t3_title: "Terület vs Kerület",
    t3_text: "Egy forma területe és kerülete különbözőek! Két forma lehet ugyanolyan terület de eltérő kerület, vagy fordítva. Egy 3×3 négyzet és egy 4×2 téglalap más területtel ÉS kerülettel rendelkezik.",
    t3_b1: "Terület és kerület függetlenek",
    t3_b2: "Nagyobb terület nem jelent nagyobb kerületet",
    t3_b3: "Mindig ellenőrizd, mit kérdez a feladat",
    t3_q: "Melyik forma nagyobb: 4×2 vagy 3×3?",
    t3_q_4x2: "4×2 (terület = 8)",
    t3_q_3x3: "3×3 (terület = 9)",
    t3_q_same: "Egyformák",
    t3_q_need_info: "Több információ kell",
    r5_q1: "Egy négyzet oldala 5 cm. Mekkora a területe?",
    r5_q1_20: "20 cm²",
    r5_q1_25: "25 cm²",
    r5_q1_10: "10 cm²",
    r5_q1_15: "15 cm²",
    r5_q2: "Egy téglalap 8 méter hosszú és 5 méter széles. Mekkora a kerülete?",
    r5_q2_26: "26 méter",
    r5_q2_40: "40 méter",
    r5_q2_13: "13 méter",
    r5_q2_20: "20 méter",
    r5_q3: "Melyik párosnak van azonos kerülete?",
    r5_q3_a: "3×4 és 2×5",
    r5_q3_b: "2×6 és 3×4",
    r5_q3_c: "4×4 és 3×5",
    r5_q3_d: "2×3 és 1×4",
  },
  ro: {
    explorer_title: "Explorare arie și perimetru",
    t1_title: "Numărarea unităților pătrate (arie)",
    t1_text: "Aria este spațiul pe care o formă îl ocupă. Măsurăm aria prin numărarea unităților pătrate din interior. Un dreptunghi 4×3 are 12 unități pătrate.",
    t1_b1: "Arie = lungime × lățime",
    t1_b2: "Numără toate pătratele din interior",
    t1_b3: "Unități pătrate pot fi cm² sau m²",
    t1_q: "Care este aria unui dreptunghi 5×4?",
    t1_q_9: "9 unități pătrate",
    t1_q_20: "20 unități pătrate",
    t1_q_18: "18 unități pătrate",
    t1_q_16: "16 unități pătrate",
    t2_title: "Măsurarea în jurul marginii (perimetru)",
    t2_text: "Perimetrul este distanța în jurul unei forme. Pentru a găsi perimetrul, adaugă toate lungimile laturilor. Pentru dreptunghi 6×4: P = 6 + 4 + 6 + 4 = 20",
    t2_b1: "Perimetru = suma tuturor laturilor",
    t2_b2: "Dreptunghi: P = 2 × (lungime + lățime)",
    t2_b3: "Mergi în jurul formei pentru a o găsi",
    t2_q: "Care este perimetrul unui dreptunghi 7×3?",
    t2_q_20: "20 unități",
    t2_q_10: "10 unități",
    t2_q_21: "21 unități",
    t2_q_14: "14 unități",
    t3_title: "Arie vs Perimetru",
    t3_text: "Aria și perimetrul unei forme sunt diferite! Două forme pot avea aceeași arie dar perimetri diferiți, sau invers. Un pătrat 3×3 și un dreptunghi 4×2 au arii ȘI perimetre diferite.",
    t3_b1: "Arie și perimetru sunt independente",
    t3_b2: "O arie mai mare nu înseamnă perimetru mai mare",
    t3_b3: "Verifică mereu ce întreabă problema",
    t3_q: "Care formă are arie mai mare: 4×2 sau 3×3?",
    t3_q_4x2: "4×2 (arie = 8)",
    t3_q_3x3: "3×3 (arie = 9)",
    t3_q_same: "Sunt identice",
    t3_q_need_info: "Trebuie mai multe informații",
    r5_q1: "Un pătrat are laturile de 5 cm. Care este aria sa?",
    r5_q1_20: "20 cm²",
    r5_q1_25: "25 cm²",
    r5_q1_10: "10 cm²",
    r5_q1_15: "15 cm²",
    r5_q2: "Un dreptunghi este de 8 metri lungime și 5 metri lățime. Care este perimetrul?",
    r5_q2_26: "26 de metri",
    r5_q2_40: "40 de metri",
    r5_q2_13: "13 metri",
    r5_q2_20: "20 de metri",
    r5_q3: "Care pereche are același perimetru?",
    r5_q3_a: "3×4 și 2×5",
    r5_q3_b: "2×6 și 3×4",
    r5_q3_c: "4×4 și 3×5",
    r5_q3_d: "2×3 și 1×4",
  },
};

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    // ─ R1: Grid area counting ─
    {
      type: "info",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <GridAreaSvg width={4} height={3} />,
      bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <GridAreaSvg width={5} height={4} />,
      questions: [
        {
          question: "t1_q",
          choices: ["t1_q_9", "t1_q_20", "t1_q_18", "t1_q_16"],
          answer: "t1_q_20",
        },
      ],
    },

    // ─ R2: Perimeter with labeled sides ─
    {
      type: "info",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <PerimeterSvg width={6} height={4} />,
      bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <PerimeterSvg width={7} height={3} />,
      questions: [
        {
          question: "t2_q",
          choices: ["t2_q_20", "t2_q_10", "t2_q_21", "t2_q_14"],
          answer: "t2_q_20",
        },
      ],
    },

    // ─ R3: Area vs Perimeter ─
    {
      type: "info",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <AreaVsPerimeterSvg />,
      bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <AreaVsPerimeterSvg />,
      questions: [
        {
          question: "t3_q",
          choices: ["t3_q_4x2", "t3_q_3x3", "t3_q_same", "t3_q_need_info"],
          answer: "t3_q_3x3",
        },
      ],
    },

    // ─ R5: Review (2-3 questions) ─
    {
      type: "mcq",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <GridAreaSvg width={5} height={5} />,
      questions: [
        {
          question: "r5_q1",
          choices: ["r5_q1_20", "r5_q1_25", "r5_q1_10", "r5_q1_15"],
          answer: "r5_q1_25",
        },
        {
          question: "r5_q2",
          choices: ["r5_q2_26", "r5_q2_40", "r5_q2_13", "r5_q2_20"],
          answer: "r5_q2_26",
        },
        {
          question: "r5_q3",
          choices: ["r5_q3_a", "r5_q3_b", "r5_q3_c", "r5_q3_d"],
          answer: "r5_q3_b",
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

export default function AreaExplorer4({ color = "#10B981", lang, onDone, onClose }: Props) {
  return (
    <ExplorerEngine
      def={EXPLORER_DEF}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
      grade={4}
    />
  );
}
