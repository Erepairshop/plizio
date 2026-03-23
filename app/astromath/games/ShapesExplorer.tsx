"use client";
// ShapesExplorer — Shape discovery (G1 i7)
// Now powered by ExplorerEngine v2

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG Illustrations ──────────────────────────────────────────────────────────────

// R2: Triangle focus - how many sides?
const TriangleSvg = memo(function TriangleSvg() {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      <defs>
        <linearGradient id="triGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F472B6" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#triGrad)" rx="12" />
      {/* Large triangle */}
      <g transform="translate(100, 55)">
        <polygon points="0,-25 35,20 -35,20" fill="#EC4899" opacity="0.8" stroke="#BE185D" strokeWidth="2.5" />
        {/* Side labels */}
        <line x1="0" y1="-25" x2="35" y2="20" stroke="#BE185D" strokeWidth="1.5" opacity="0.5" />
        <line x1="35" y1="20" x2="-35" y2="20" stroke="#BE185D" strokeWidth="1.5" opacity="0.5" />
        <line x1="-35" y1="20" x2="0" y2="-25" stroke="#BE185D" strokeWidth="1.5" opacity="0.5" />
        {/* Side count markers */}
        <text x="5" y="-8" fontSize="10" fontWeight="bold" fill="#BE185D">1</text>
        <text x="-20" y="35" fontSize="10" fontWeight="bold" fill="#BE185D">2</text>
        <text x="20" y="35" fontSize="10" fontWeight="bold" fill="#BE185D">3</text>
      </g>
      <text x="100" y="105" fontSize="12" fontWeight="bold" fill="#BE185D" textAnchor="middle">3 SIDES</text>
    </svg>
  );
});

// R3: Square focus - how many corners?
const SquareSvg = memo(function SquareSvg() {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      <defs>
        <linearGradient id="sqGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#sqGrad)" rx="12" />
      {/* Large square */}
      <g transform="translate(100, 55)">
        <rect x="-22" y="-22" width="44" height="44" fill="#3B82F6" opacity="0.8" stroke="#1E40AF" strokeWidth="2.5" />
        {/* Corner markers */}
        <circle cx="-22" cy="-22" r="3.5" fill="#FCD34D" stroke="#1E40AF" strokeWidth="1.5" />
        <text x="-22" y="-28" fontSize="9" fontWeight="bold" fill="#1E40AF" textAnchor="middle">1</text>

        <circle cx="22" cy="-22" r="3.5" fill="#FCD34D" stroke="#1E40AF" strokeWidth="1.5" />
        <text x="22" y="-28" fontSize="9" fontWeight="bold" fill="#1E40AF" textAnchor="middle">2</text>

        <circle cx="22" cy="22" r="3.5" fill="#FCD34D" stroke="#1E40AF" strokeWidth="1.5" />
        <text x="22" y="34" fontSize="9" fontWeight="bold" fill="#1E40AF" textAnchor="middle">3</text>

        <circle cx="-22" cy="22" r="3.5" fill="#FCD34D" stroke="#1E40AF" strokeWidth="1.5" />
        <text x="-22" y="34" fontSize="9" fontWeight="bold" fill="#1E40AF" textAnchor="middle">4</text>
      </g>
      <text x="100" y="105" fontSize="12" fontWeight="bold" fill="#1E40AF" textAnchor="middle">4 CORNERS</text>
    </svg>
  );
});

// R4: Circle focus - round, no sides
const CircleSvg = memo(function CircleSvg() {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      <defs>
        <linearGradient id="cirGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#cirGrad)" rx="12" />
      {/* Large circle */}
      <g transform="translate(100, 55)">
        <circle cx="0" cy="0" r="26" fill="#F59E0B" opacity="0.8" stroke="#D97706" strokeWidth="2.5" />
        {/* Highlight */}
        <circle cx="-8" cy="-12" r="7" fill="#FBBF24" opacity="0.5" />
        {/* Smooth edge indicators */}
        <path d="M -26 0 A 26 26 0 0 0 26 0" stroke="#D97706" strokeWidth="1.5" fill="none" opacity="0.5" strokeDasharray="8,4" />
      </g>
      <text x="100" y="105" fontSize="12" fontWeight="bold" fill="#D97706" textAnchor="middle">ROUND! NO SIDES</text>
    </svg>
  );
});

// R5: Review - rectangle, pentagon, hexagon mini examples
const ShapeReviewSvg = memo(function ShapeReviewSvg() {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      <defs>
        <linearGradient id="revGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#revGrad)" rx="12" />

      {/* Rectangle (left) */}
      <g transform="translate(35, 45)">
        <rect x="-16" y="-12" width="32" height="24" fill="#EF4444" opacity="0.75" stroke="#8B5CF6" strokeWidth="1.5" />
        <text x="0" y="32" fontSize="8" fontWeight="bold" fill="#8B5CF6" textAnchor="middle">4 sides</text>
      </g>

      {/* Pentagon (center) */}
      <g transform="translate(100, 45)">
        <polygon points="0,-15 14,-5 10,12 -10,12 -14,-5" fill="#06B6D4" opacity="0.75" stroke="#8B5CF6" strokeWidth="1.5" />
        <text x="0" y="32" fontSize="8" fontWeight="bold" fill="#8B5CF6" textAnchor="middle">5 sides</text>
      </g>

      {/* Hexagon (right) */}
      <g transform="translate(165, 45)">
        <polygon points="0,-14 12,-7 12,7 0,14 -12,7 -12,-7" fill="#10B981" opacity="0.75" stroke="#8B5CF6" strokeWidth="1.5" />
        <text x="0" y="32" fontSize="8" fontWeight="bold" fill="#8B5CF6" textAnchor="middle">6 sides</text>
      </g>

      <text x="100" y="105" fontSize="10" fontWeight="bold" fill="#8B5CF6" textAnchor="middle" opacity="0.8">SIDES & CORNERS</text>
    </svg>
  );
});

// R1: All basic shapes (triangle, square, circle) — intro
const ShapesIntroSvg = memo(function ShapesIntroSvg() {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      <defs>
        <linearGradient id="shGradIntro" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#DDD6FE" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#shGradIntro)" rx="12" />

      {/* Triangle (left) */}
      <g transform="translate(35, 55)">
        {/* Shape */}
        <polygon points="0,-18 18,15 -18,15" fill="#EC4899" opacity="0.75" stroke="#8B5CF6" strokeWidth="2" />
        {/* Label */}
        <text x="0" y="32" fontSize="10" fontWeight="bold" fill="#8B5CF6" textAnchor="middle">
          TRIANGLE
        </text>
      </g>

      {/* Square (center) */}
      <g transform="translate(100, 55)">
        {/* Shape */}
        <rect x="-12" y="-12" width="24" height="24" fill="#3B82F6" opacity="0.75" stroke="#8B5CF6" strokeWidth="2" />
        {/* Glow */}
        <rect x="-12" y="-12" width="24" height="24" fill="#60A5FA" opacity="0.2" />
        {/* Label */}
        <text x="0" y="32" fontSize="10" fontWeight="bold" fill="#8B5CF6" textAnchor="middle">
          SQUARE
        </text>
      </g>

      {/* Circle (right) */}
      <g transform="translate(165, 55)">
        {/* Shape */}
        <circle cx="0" cy="0" r="14" fill="#F59E0B" opacity="0.75" stroke="#8B5CF6" strokeWidth="2" />
        {/* Highlight */}
        <circle cx="-5" cy="-6" r="4" fill="#FBBF24" opacity="0.4" />
        {/* Label */}
        <text x="0" y="32" fontSize="10" fontWeight="bold" fill="#8B5CF6" textAnchor="middle">
          CIRCLE
        </text>
      </g>

      {/* Title at top */}
      <text x="100" y="18" fontSize="13" fontWeight="900" fill="#8B5CF6" textAnchor="middle">
        3 SHAPES
      </text>
    </svg>
  );
});

const LABELS = {
  en: {
    title: "Shapes",
    intro: "Shapes have sides and corners!",
    q1: "How many sides does a triangle have?",
    q2: "How many corners does a square have?",
    q3: "Which shape is round with no sides?",
    q4: "A rectangle has ? sides",
    q5: "A pentagon has ? corners",
    q6: "How many sides does a hexagon have?",
    triangle: "triangle",
    square: "square",
    circle: "circle",
    rectangle: "rectangle",
    pentagon: "pentagon",
    hexagon: "hexagon",
  },
  hu: {
    title: "Alakzatok",
    intro: "Az alakzatoknak oldalai és sarkaik vannak!",
    q1: "Hány oldala van egy háromszögnek?",
    q2: "Hány sarka van egy négyzetnek?",
    q3: "Melyik alakzat kerek és nincs oldala?",
    q4: "Egy téglalapnak ? oldala van",
    q5: "Egy ötszögnek ? sarka van",
    q6: "Hány oldala van egy hatszögnek?",
    triangle: "háromszög",
    square: "négyzet",
    circle: "kör",
    rectangle: "téglalap",
    pentagon: "ötszög",
    hexagon: "hatszög",
  },
  de: {
    title: "Formen",
    intro: "Formen haben Seiten und Ecken!",
    q1: "Wie viele Seiten hat ein Dreieck?",
    q2: "Wie viele Ecken hat ein Quadrat?",
    q3: "Welche Form ist rund und hat keine Seiten?",
    q4: "Ein Rechteck hat ? Seiten",
    q5: "Ein Fünfeck hat ? Ecken",
    q6: "Wie viele Seiten hat ein Sechseck?",
    triangle: "Dreieck",
    square: "Quadrat",
    circle: "Kreis",
    rectangle: "Rechteck",
    pentagon: "Fünfeck",
    hexagon: "Sechseck",
  },
  ro: {
    title: "Forme",
    intro: "Formele au laturi și colțuri!",
    q1: "Câte laturi are un triunghi?",
    q2: "Câte colțuri are un pătrat?",
    q3: "Care formă este rotundă și nu are laturi?",
    q4: "Un dreptunghi are ? laturi",
    q5: "Un pentagon are ? colțuri",
    q6: "Câte laturi are un hexagon?",
    triangle: "triunghi",
    square: "pătrat",
    circle: "cerc",
    rectangle: "dreptunghi",
    pentagon: "pentagon",
    hexagon: "hexagon",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "title",
      infoText: "intro",
      svg: () => <ShapesIntroSvg />,
      bulletKeys: ["q1", "q2"],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "q1",
      svg: () => <TriangleSvg />,
      questions: [{ question: "q1", choices: ["3", "4", "5", "6"], answer: "3" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "q2",
      svg: () => <SquareSvg />,
      questions: [{ question: "q2", choices: ["4", "3", "5", "6"], answer: "4" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "q3",
      svg: () => <CircleSvg />,
      questions: [{ question: "q3", choices: ["circle", "triangle", "square", "rectangle"], answer: "circle" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "intro",
      svg: () => <ShapeReviewSvg />,
      questions: [
        { question: "q4", choices: ["4", "3", "5", "6"], answer: "4" },
        { question: "q5", choices: ["5", "4", "6", "3"], answer: "5" },
        { question: "q6", choices: ["6", "5", "4", "7"], answer: "6" },
      ],
    },
  ],
};

const ShapesExplorer = memo(function ShapesExplorer({
  color = "#8B5CF6",
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
