"use client";
// AreaExplorer4 — Area & Perimeter for Grade 4 (island i5)
// Converted to topic mode: 3 TopicDef objects with interactive blocks

import { memo, useState } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Grid square counting (area) ─────────────────────────────────────────

const GridAreaSvg = memo(function GridAreaSvg({ width = 4, height = 3, lang = "en" }: { width?: number; height?: number; lang?: string }) {
  const cellSize = 30;
  const totalWidth = width * cellSize + 40;
  const totalHeight = height * cellSize + 40;
  const t = LABELS[lang] || LABELS.en;

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
          {width} × {height} = {width * height} {t.ga_squares}
        </text>
      </g>
    </svg>
  );
});

// ─── SVG: Rectangle perimeter with labeled sides ─────────────────────────────────

const PerimeterSvg = memo(function PerimeterSvg({ width = 6, height = 4, lang = "en" }: { width?: number; height?: number; lang?: string }) {
  const scale = 20;
  const w = width * scale;
  const h = height * scale;
  const px = 50;
  const py = 30;

  const perimeter = 2 * (width + height);
  const t = LABELS[lang] || LABELS.en;

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
        {t.pm_formula} 2 × ({width} + {height}) = {perimeter}
      </text>
    </svg>
  );
});

// ─── SVG: Area vs Perimeter comparison ────────────────────────────────────────────

const AreaVsPerimeterSvg = memo(function AreaVsPerimeterSvg({ lang = "en" }: { lang?: string }) {
  const t = LABELS[lang] || LABELS.en;
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
          {t.avp_area}=9
        </text>
        <text x="30" y="88" fontSize="10" fill="#8B5CF6" textAnchor="middle">
          {t.avp_perim}=12
        </text>
      </g>

      {/* Arrow */}
      <text x="120" y="65" fontSize="14" fontWeight="bold" fill="rgba(255,255,255,0.5)" textAnchor="middle">
        {t.avp_vs}
      </text>

      {/* Rectangle: 5×2 */}
      <g transform="translate(150, 30)">
        <rect width="60" height="30" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" strokeWidth="2" />
        <text x="30" y="20" fontSize="11" fontWeight="bold" fill="#8B5CF6" textAnchor="middle" dominantBaseline="middle">
          5×2
        </text>
        <text x="30" y="65" fontSize="10" fill="#8B5CF6" textAnchor="middle">
          {t.avp_area}=10
        </text>
        <text x="30" y="78" fontSize="10" fill="#8B5CF6" textAnchor="middle">
          {t.avp_perim}=14
        </text>
      </g>

      {/* Explanation */}
      <text x="120" y="130" fontSize="11" fill="rgba(255,255,255,0.6)" textAnchor="middle">
        {t.avp_explanation}
      </text>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Area & Perimeter Explorer",
    // SVG labels
    ga_squares: "squares",
    pm_formula: "Perimeter =",
    avp_vs: "vs",
    avp_area: "Area",
    avp_perim: "Perim",
    avp_explanation: "Same area ≠ Same perimeter!",
    // Topic 1: Grid area counting
    t1_title: "Counting Square Units (Area)",
    t1_text: "Area is how much space a shape covers. We measure area by counting square units inside. A 4×3 rectangle has 12 square units inside.",
    t1_inst: "Tap the squares to count them. The total count is the area!",
    t1_h1: "Count the squares",
    t1_h2: "Area = length × width",
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
    t2_inst: "Tap each side to add them up. Find the total distance around!",
    t2_h1: "Add all the sides",
    t2_h2: "P = 2 × (length + width)",
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
    t3_inst: "Compare the two rectangles. Which has larger area? Which has larger perimeter?",
    t3_h1: "Compare shapes",
    t3_h2: "Area and perimeter are different!",
    t3_b1: "Area and perimeter are independent",
    t3_b2: "A bigger area doesn't mean bigger perimeter",
    t3_b3: "Always check what the question asks for",
    t3_q: "Which shape has the larger area: 4×2 or 3×3?",
    t3_q_4x2: "4×2 (area = 8)",
    t3_q_3x3: "3×3 (area = 9)",
    t3_q_same: "They are the same",
    t3_q_need_info: "Need more information",
  },
  de: {
    explorer_title: "Fläche & Umfang Entdecker",
    ga_squares: "Quadrate",
    pm_formula: "Umfang =",
    avp_vs: "vs",
    avp_area: "Fläche",
    avp_perim: "Umf",
    avp_explanation: "Gleiche Fläche ≠ Gleicher Umfang!",
    t1_title: "Quadratische Einheiten zählen (Fläche)",
    t1_text: "Fläche ist der Platz, den eine Form einnimmt. Wir messen Fläche durch das Zählen von Quadrateinheiten. Ein 4×3 Rechteck hat 12 Quadrateinheiten.",
    t1_inst: "Tippe auf die Quadrate, um sie zu zählen. Die Gesamtzahl ist die Fläche!",
    t1_h1: "Zähle die Quadrate",
    t1_h2: "Fläche = Länge × Breite",
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
    t2_inst: "Tippe auf jede Seite, um sie zusammenzuzählen. Finde die Gesamtentfernung herum!",
    t2_h1: "Addiere alle Seiten",
    t2_h2: "U = 2 × (Länge + Breite)",
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
    t3_inst: "Vergleiche die beiden Rechtecke. Welches hat größere Fläche? Welches hat größeren Umfang?",
    t3_h1: "Vergleiche Formen",
    t3_h2: "Fläche und Umfang sind verschieden!",
    t3_b1: "Fläche und Umfang sind unabhängig",
    t3_b2: "Eine größere Fläche bedeutet nicht größeren Umfang",
    t3_b3: "Überprüfe immer, was die Frage fragt",
    t3_q: "Welche Form hat größere Fläche: 4×2 oder 3×3?",
    t3_q_4x2: "4×2 (Fläche = 8)",
    t3_q_3x3: "3×3 (Fläche = 9)",
    t3_q_same: "Sie sind gleich",
    t3_q_need_info: "Brauche mehr Information",
  },
  hu: {
    explorer_title: "Terület & Kerület Felfedező",
    ga_squares: "négyzet",
    pm_formula: "Kerület =",
    avp_vs: "vs",
    avp_area: "Terület",
    avp_perim: "Ker",
    avp_explanation: "Azonos terület ≠ Azonos kerület!",
    t1_title: "Négyzet egységek számlálása (terület)",
    t1_text: "A terület az az élettér, amit egy forma elfoglal. A területet négyzet egységek számlálásával mérjük. Egy 4×3 téglalap 12 négyzet egységet tartalmaz.",
    t1_inst: "Érintsd meg a négyzeteket, hogy számlald meg azokat. Az összesen = terület!",
    t1_h1: "Számold meg a négyzeteket",
    t1_h2: "Terület = hosszúság × szélesség",
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
    t2_inst: "Érintsd meg az egyes oldalakat, hogy összeadhasd őket. Találd meg a teljes távolságot körül!",
    t2_h1: "Add össze az összes oldalt",
    t2_h2: "K = 2 × (hosszúság + szélesség)",
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
    t3_inst: "Hasonlítsd össze a két téglalapot. Melyiknek van nagyobb terület? Melyiknek van nagyobb kerület?",
    t3_h1: "Hasonlítsd össze az alakzatokat",
    t3_h2: "Terület és kerület különbözőek!",
    t3_b1: "Terület és kerület függetlenek",
    t3_b2: "Nagyobb terület nem jelent nagyobb kerületet",
    t3_b3: "Mindig ellenőrizd, mit kérdez a feladat",
    t3_q: "Melyik forma nagyobb: 4×2 vagy 3×3?",
    t3_q_4x2: "4×2 (terület = 8)",
    t3_q_3x3: "3×3 (terület = 9)",
    t3_q_same: "Egyformák",
    t3_q_need_info: "Több információ kell",
  },
  ro: {
    explorer_title: "Explorare arie și perimetru",
    ga_squares: "pătrate",
    pm_formula: "Perimetru =",
    avp_vs: "vs",
    avp_area: "Arie",
    avp_perim: "Perim",
    avp_explanation: "Aceeași arie ≠ Același perimetru!",
    t1_title: "Numărarea unităților pătrate (arie)",
    t1_text: "Aria este spațiul pe care o formă îl ocupă. Măsurăm aria prin numărarea unităților pătrate din interior. Un dreptunghi 4×3 are 12 unități pătrate.",
    t1_inst: "Atinge pătratele pentru a le număra. Totalul = aria!",
    t1_h1: "Numără pătratele",
    t1_h2: "Arie = lungime × lățime",
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
    t2_inst: "Atinge fiecare latură pentru a le aduna. Găsește distanța totală din jur!",
    t2_h1: "Adună toate laturile",
    t2_h2: "P = 2 × (lungime + lățime)",
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
    t3_inst: "Compară cele două dreptunghiuri. Care are arie mai mare? Care are perimetru mai mare?",
    t3_h1: "Compară formele",
    t3_h2: "Arie și perimetru sunt diferite!",
    t3_b1: "Arie și perimetru sunt independente",
    t3_b2: "O arie mai mare nu înseamnă perimetru mai mare",
    t3_b3: "Verifică mereu ce întreabă problema",
    t3_q: "Care formă are arie mai mare: 4×2 sau 3×3?",
    t3_q_4x2: "4×2 (arie = 8)",
    t3_q_3x3: "3×3 (arie = 9)",
    t3_q_same: "Sunt identice",
    t3_q_need_info: "Trebuie mai multe informații",
  },
};

// ─── INTERACTIVE BLOCK COMPONENTS ───────────────────────────────────────────

/**
 * GridAreaCounter — Tap squares to count (interactive block for T1)
 */
function GridAreaCounter({ width = 4, height = 3, lang = "en", onValueChange }: {
  width?: number; height?: number; lang?: string;
  onValueChange?: (value: string) => void;
}) {
  const [counted, setCounted] = useState<Set<number>>(new Set());
  const totalCells = width * height;
  const t = LABELS[lang] || LABELS.en;

  const toggle = (idx: number) => {
    const next = new Set(counted);
    if (next.has(idx)) next.delete(idx);
    else next.add(idx);
    setCounted(next);
    onValueChange?.(String(next.size));
  };

  return (
    <div className="flex flex-col items-center gap-3 px-4 py-4 bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-2xl border border-green-500/20">
      <p className="text-xs font-semibold text-center text-green-300">{t.t1_inst}</p>
      <svg width="100%" viewBox="0 0 200 150" className="max-w-xs">
        <g transform="translate(20, 20)">
          {Array.from({ length: height }, (_, row) =>
            Array.from({ length: width }, (_, col) => {
              const idx = row * width + col;
              const isSelected = counted.has(idx);
              return (
                <g
                  key={idx}
                  transform={`translate(${col * 32}, ${row * 32})`}
                  onClick={() => toggle(idx)}
                  style={{ cursor: "pointer" }}
                >
                  <rect
                    width="28"
                    height="28"
                    fill={isSelected ? "#10B981" : "rgba(16, 185, 129, 0.4)"}
                    stroke="rgba(255,255,255,0.5)"
                    strokeWidth="1"
                    rx="2"
                  />
                  {isSelected && (
                    <text x="14" y="18" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">
                      ✓
                    </text>
                  )}
                </g>
              );
            })
          )}
        </g>
      </svg>
      <div className="text-center">
        <p className="text-white/80 font-bold">
          {counted.size}/{totalCells}
        </p>
        <p className="text-xs text-white/50">{t.t1_h2}</p>
      </div>
    </div>
  );
}

/**
 * PerimeterAdder — Tap sides to sum perimeter (interactive block for T2)
 */
function PerimeterAdder({ width = 6, height = 4, lang = "en", onValueChange }: {
  width?: number; height?: number; lang?: string;
  onValueChange?: (value: string) => void;
}) {
  const [tappedSides, setTappedSides] = useState<Set<string>>(new Set());
  const sides = ["top", "right", "bottom", "left"];
  const values = [width, height, width, height];
  const t = LABELS[lang] || LABELS.en;

  const toggleSide = (side: string, value: number) => {
    const next = new Set(tappedSides);
    if (next.has(side)) {
      next.delete(side);
    } else {
      next.add(side);
    }
    setTappedSides(next);
    const sum = Array.from(next).reduce((acc, s) => {
      const idx = sides.indexOf(s);
      return acc + values[idx];
    }, 0);
    onValueChange?.(String(sum));
  };

  const perimeter = 2 * (width + height);
  const tappedPerimeter = Array.from(tappedSides).reduce((acc, s) => {
    const idx = sides.indexOf(s);
    return acc + values[idx];
  }, 0);

  return (
    <div className="flex flex-col items-center gap-3 px-4 py-4 bg-gradient-to-br from-amber-600/10 to-yellow-600/10 rounded-2xl border border-amber-500/20">
      <p className="text-xs font-semibold text-center text-amber-300">{t.t2_inst}</p>
      <svg width="100%" viewBox="0 0 200 150" className="max-w-xs">
        <defs>
          <linearGradient id="pG2">
            <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#FCD34D" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <g transform="translate(50, 40)">
          <rect width={width * 10} height={height * 10} fill="url(#pG2)" stroke="#F59E0B" strokeWidth="2" rx="2" />

          {/* Top */}
          <rect
            x="0"
            y="-20"
            width={width * 10}
            height="14"
            fill={tappedSides.has("top") ? "#F59E0B" : "rgba(245,158,11,0.3)"}
            onClick={() => toggleSide("top", width)}
            style={{ cursor: "pointer" }}
            rx="4"
          />
          <text x={width * 5} y="-8" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FCD34D">
            {width}
          </text>

          {/* Right */}
          <rect
            x={width * 10 + 4}
            y="0"
            width="14"
            height={height * 10}
            fill={tappedSides.has("right") ? "#F59E0B" : "rgba(245,158,11,0.3)"}
            onClick={() => toggleSide("right", height)}
            style={{ cursor: "pointer" }}
            rx="4"
          />
          <text x={width * 10 + 15} y={height * 5} textAnchor="start" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="#FCD34D">
            {height}
          </text>

          {/* Bottom */}
          <rect
            x="0"
            y={height * 10 + 4}
            width={width * 10}
            height="14"
            fill={tappedSides.has("bottom") ? "#F59E0B" : "rgba(245,158,11,0.3)"}
            onClick={() => toggleSide("bottom", width)}
            style={{ cursor: "pointer" }}
            rx="4"
          />
          <text x={width * 5} y={height * 10 + 18} textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FCD34D">
            {width}
          </text>

          {/* Left */}
          <rect
            x="-18"
            y="0"
            width="14"
            height={height * 10}
            fill={tappedSides.has("left") ? "#F59E0B" : "rgba(245,158,11,0.3)"}
            onClick={() => toggleSide("left", height)}
            style={{ cursor: "pointer" }}
            rx="4"
          />
          <text x="-10" y={height * 5} textAnchor="end" dominantBaseline="middle" fontSize="12" fontWeight="bold" fill="#FCD34D">
            {height}
          </text>
        </g>
      </svg>
      <div className="text-center">
        <p className="text-white/80 font-bold">
          {tappedPerimeter}/{perimeter}
        </p>
        <p className="text-xs text-white/50">{t.t2_h2}</p>
      </div>
    </div>
  );
}

// ─── EXPLORER DEFINITION (TOPIC MODE) ───────────────────────────────────────

const makeExplorerDef = (lang: string = "en"): ExplorerDef => ({
  labels: LABELS,
  title: "explorer_title",
  icon: "📏",
  topics: [
    // ─ Topic 1: Grid area counting ─
    {
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <GridAreaSvg width={4} height={3} lang={lang} />,
      bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
      interactive: {
        type: "block-drag",
        mode: "combine",
        groups: [5, 4],
        answer: 20,
        blockIcon: "🟦",
        instruction: "t1_inst",
        hint1: "t1_h1",
        hint2: "t1_h2",
      },
      quiz: {
        question: "t1_q",
        choices: ["t1_q_9", "t1_q_20", "t1_q_18", "t1_q_16"],
        answer: "t1_q_20",
      },
    },

    // ─ Topic 2: Perimeter with labeled sides ─
    {
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <PerimeterSvg width={6} height={4} lang={lang} />,
      bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
      interactive: {
        type: "number-line",
        min: 0,
        max: 30,
        start: 0,
        target: 20,
        step: 2,
        instruction: "t2_inst",
        hint1: "t2_h1",
        hint2: "t2_h2",
      },
      quiz: {
        question: "t2_q",
        choices: ["t2_q_20", "t2_q_10", "t2_q_21", "t2_q_14"],
        answer: "t2_q_20",
      },
    },

    // ─ Topic 3: Area vs Perimeter (review) ─
    {
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <AreaVsPerimeterSvg lang={lang} />,
      bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
      interactive: {
        type: "block-drag",
        mode: "combine",
        groups: [4, 2],
        answer: 8,
        blockIcon: "🟩",
        instruction: "t3_inst",
        hint1: "t3_h1",
        hint2: "t3_h2",
      },
      quiz: {
        question: "t3_q",
        choices: ["t3_q_4x2", "t3_q_3x3", "t3_q_same", "t3_q_need_info"],
        answer: "t3_q_3x3",
      },
    },
  ],
  rounds: [],
});

// ─── WRAPPER COMPONENT ─────────────────────────────────────────────────────

interface Props {
  color?: string;
  lang?: string;
  onDone?: (score: number, total: number) => void;
  onClose?: () => void;
}

export default function AreaExplorer4({ color = "#10B981", lang = "en", onDone, onClose }: Props) {
  return (
    <ExplorerEngine
      def={makeExplorerDef(lang)}
      color={color}
      lang={lang}
      onDone={onDone}
      onClose={onClose}
      grade={4}
    />
  );
}
