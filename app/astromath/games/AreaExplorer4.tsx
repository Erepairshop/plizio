"use client";
// GeometryExplorer4 — Perimeter & Area for Grade 4 (island i5)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="geoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#geoGrad1)" rx="16" />
      {/* Perimeter visual - highlighting the border */}
      <g transform="translate(80, 40)">
        <rect width="80" height="60" fill="none" stroke="#059669" strokeWidth="4" rx="2" />
        <path d="M 0,0 L 80,0 L 80,60 L 0,60 Z" fill="none" stroke="#34D399" strokeWidth="1" strokeDasharray="4 2" />
        <text x="40" y="-10" fontSize="12" fill="#059669" textAnchor="middle" fontWeight="bold">8</text>
        <text x="95" y="35" fontSize="12" fill="#059669" textAnchor="middle" fontWeight="bold">6</text>
      </g>
      <text x="120" y="125" fontSize="13" fontWeight="bold" fill="#065F46" textAnchor="middle">P = 8 + 6 + 8 + 6 = 28</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="geoGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#geoGrad2)" rx="16" />
      {/* Area visual - grid inside */}
      <g transform="translate(85, 35)">
        <rect width="70" height="50" fill="#3B82F6" fillOpacity="0.2" stroke="#2563EB" strokeWidth="2" />
        {Array.from({ length: 5 }).map((_, r) => (
          <line key={`r${r}`} x1="0" y1={r * 10} x2="70" y2={r * 10} stroke="#2563EB" strokeWidth="0.5" opacity="0.5" />
        ))}
        {Array.from({ length: 7 }).map((_, c) => (
          <line key={`c${c}`} x1={c * 10} y1="0" x2={c * 10} y2="50" stroke="#2563EB" strokeWidth="0.5" opacity="0.5" />
        ))}
        <text x="35" y="-10" fontSize="12" fill="#1E40AF" textAnchor="middle" fontWeight="bold">7</text>
        <text x="-12" y="30" fontSize="12" fill="#1E40AF" textAnchor="middle" fontWeight="bold">5</text>
      </g>
      <text x="120" y="125" fontSize="13" fontWeight="bold" fill="#1E40AF" textAnchor="middle">A = 7 × 5 = 35</text>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="geoGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FB7185" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#geoGrad3)" rx="16" />
      {/* Square visual - P vs A */}
      <g transform="translate(90, 30)">
        <rect width="60" height="60" fill="#F43F5E" fillOpacity="0.1" stroke="#E11D48" strokeWidth="2" />
        <text x="30" y="35" fontSize="10" fill="#E11D48" textAnchor="middle">AREA</text>
        <path d="M -5,0 L -5,60" stroke="#E11D48" strokeWidth="1" />
        <text x="-15" y="35" fontSize="12" fill="#E11D48" textAnchor="middle" fontWeight="bold">4</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Geometry Explorer",
    t1_title: "Perimeter: The Border",
    t1_text: "The perimeter is the total distance around the outside of a shape. Imagine walking along the fence of a playground!",
    t1_b1: "Add all side lengths together",
    t1_b2: "Measured in units like cm or m",
    t1_b3: "It is a 1D length measurement",
    t1_inst: "Build a shape with a perimeter of 12 by combining side blocks!",
    t1_h1: "Each block represents a side of length 3.",
    t1_h2: "For a square, 4 sides of 3 units each = 12.",
    t1_q: "What is the perimeter of a square with 5 cm sides?",
    t1_q_a: "10 cm",
    t1_q_b: "20 cm",
    t1_q_c: "25 cm",
    t1_q_d: "15 cm",
    t2_title: "Area: The Surface",
    t2_text: "Area measures the space inside a shape. We count how many square units are needed to cover the entire surface.",
    t2_b1: "Rectangle: Length × Width",
    t2_b2: "Measured in square units (e.g., cm²)",
    t2_b3: "It is a 2D surface measurement",
    t2_inst: "Find 24 on the number line to mark the area of a 4×6 rectangle!",
    t2_h1: "Multiply 4 and 6 to get the target.",
    t2_h2: "4 times 6 equals 24. Tap it!",
    t2_q: "A rectangle is 3m wide and 6m long. What is its area?",
    t2_q_a: "9 m²",
    t2_q_b: "18 m²",
    t2_q_c: "20 m²",
    t2_q_d: "12 m²",
    t3_title: "Comparing P & A",
    t3_text: "Shapes can have the same area but different perimeters. A square is a special shape where all sides are equal!",
    t3_b1: "Area = inside space",
    t3_b2: "Perimeter = outside boundary",
    t3_b3: "Square Area: side × side",
    t3_inst: "Combine blocks to create an area of 16 square units!",
    t3_h1: "Use four blocks that each represent 4 units.",
    t3_h2: "4 blocks × 4 units = 16.",
    t3_q: "A square has an area of 16. What is the length of one side?",
    t3_q_a: "2",
    t3_q_b: "4",
    t3_q_c: "8",
    t3_q_d: "16",
  },
  de: {
    explorer_title: "Geometrie-Entdecker",
    t1_title: "Umfang: Der Rand",
    t1_text: "Der Umfang ist die gesamte Strecke um eine Form herum. Stell dir vor, du läufst am Zaun eines Spielplatzes entlang!",
    t1_b1: "Addiere alle Seitenlängen",
    t1_b2: "Gemessen in Einheiten wie cm oder m",
    t1_b3: "Es ist eine 1D-Längenmessung",
    t1_inst: "Bilde eine Form mit Umfang 12, indem du Blöcke kombinierst!",
    t1_h1: "Jeder Block steht für eine Seite der Länge 3.",
    t1_h2: "Ein Quadrat mit 4 Seiten à 3 Einheiten = 12.",
    t1_q: "Wie groß ist der Umfang eines Quadrats mit 5 cm Seitenlänge?",
    t1_q_a: "10 cm",
    t1_q_b: "20 cm",
    t1_q_c: "25 cm",
    t1_q_d: "15 cm",
    t2_title: "Flächeninhalt: Die Fläche",
    t2_text: "Der Flächeninhalt misst den Raum innerhalb einer Form. Wir zählen, wie viele Quadrate nötig sind, um die Fläche zu bedecken.",
    t2_b1: "Rechteck: Länge × Breite",
    t2_b2: "Gemessen in Quadrateinheiten (z.B. cm²)",
    t2_b3: "Es ist eine 2D-Flächenmessung",
    t2_inst: "Finde 24 auf dem Zahlenstrahl für ein 4×6 Rechteck!",
    t2_h1: "Multipliziere 4 und 6.",
    t2_h2: "4 mal 6 ist 24. Tippe darauf!",
    t2_q: "Ein Rechteck ist 3m breit und 6m lang. Wie groß ist die Fläche?",
    t2_q_a: "9 m²",
    t2_q_b: "18 m²",
    t2_q_c: "20 m²",
    t2_q_d: "12 m²",
    t3_title: "Umfang vs. Fläche",
    t3_text: "Formen können die gleiche Fläche, aber unterschiedliche Umfänge haben. Ein Quadrat ist eine besondere Form!",
    t3_b1: "Fläche = innen",
    t3_b2: "Umfang = außen",
    t3_b3: "Quadratfläche: Seite × Seite",
    t3_inst: "Kombiniere Blöcke für eine Fläche von 16 Einheiten!",
    t3_h1: "Nutze vier Blöcke, die jeweils 4 Einheiten wert sind.",
    t3_h2: "4 Blöcke × 4 Einheiten = 16.",
    t3_q: "Ein Quadrat hat eine Fläche von 16. Wie lang ist eine Seite?",
    t3_q_a: "2",
    t3_q_b: "4",
    t3_q_c: "8",
    t3_q_d: "16",
  },
  hu: {
    explorer_title: "Geometria felfedezése",
    t1_title: "Kerület: A határ",
    t1_text: "A kerület az alakzatot körbevevő vonal teljes hossza. Képzeld el, mintha körbesétálnál egy játszótér kerítése mentén!",
    t1_b1: "Add össze az összes oldal hosszát",
    t1_b2: "Mértékegysége pl. a cm vagy m",
    t1_b3: "Ez egy egydimenziós hosszúságmérés",
    t1_inst: "Állíts össze egy 12 egység kerületű alakzatot blokkokból!",
    t1_h1: "Minden blokk egy 3 egység hosszú oldalt jelöl.",
    t1_h2: "Egy négyzetnek 4 darab 3-as oldala összesen 12.",
    t1_q: "Mennyi a kerülete egy 5 cm oldalhosszúságú négyzetnek?",
    t1_q_a: "10 cm",
    t1_q_b: "20 cm",
    t1_q_c: "25 cm",
    t1_q_d: "15 cm",
    t2_title: "Terület: A felszín",
    t2_text: "A terület az alakzat belsejében lévő helyet méri. Megszámoljuk, hány egységnégyzet fedi le a teljes felületet.",
    t2_b1: "Téglalap: Hosszúság × Szélesség",
    t2_b2: "Négyzetegységben mérjük (pl. cm²)",
    t2_b3: "Ez egy kétdimenziós felületmérés",
    t2_inst: "Keresd meg a 24-et a számegyenesen a 4×6-os téglalap területéhez!",
    t2_h1: "Szorozd össze a 4-et és a 6-ot.",
    t2_h2: "4-szer 6 az 24. Koppints rá!",
    t2_q: "Egy téglalap 3m széles és 6m hosszú. Mennyi a területe?",
    t2_q_a: "9 m²",
    t2_q_b: "18 m²",
    t2_q_c: "20 m²",
    t2_q_d: "12 m²",
    t3_title: "Kerület vs. Terület",
    t3_text: "Különböző alakzatoknak lehet ugyanakkora a területe, de más a kerülete. A négyzet minden oldala egyenlő!",
    t3_b1: "Terület = belső rész",
    t3_b2: "Kerület = külső határ",
    t3_b3: "Négyzet területe: oldal × oldal",
    t3_inst: "Vond össze a blokkokat, hogy 16 legyen a terület!",
    t3_h1: "Használj négy blokkot, amik egyenként 4-et érnek.",
    t3_h2: "4 blokk × 4 egység = 16.",
    t3_q: "Egy négyzet területe 16. Milyen hosszú egy oldala?",
    t3_q_a: "2",
    t3_q_b: "4",
    t3_q_c: "8",
    t3_q_d: "16",
  },
  ro: {
    explorer_title: "Explorator Geometrie",
    t1_title: "Perimetrul: Frontiera",
    t1_text: "Perimetrul este distanța totală în jurul unei forme. Imaginează-ți că mergi de-a lungul gardului unui loc de joacă!",
    t1_b1: "Adună lungimile tuturor laturilor",
    t1_b2: "Măsurat în unități precum cm sau m",
    t1_b3: "Este o măsurătoare de lungime (1D)",
    t1_inst: "Construiește o formă cu perimetrul 12 combinând blocurile!",
    t1_h1: "Fiecare bloc reprezintă o latură de lungime 3.",
    t1_h2: "Un pătrat cu 4 laturi de 3 unități fiecare = 12.",
    t1_q: "Care este perimetrul unui pătrat cu latura de 5 cm?",
    t1_q_a: "10 cm",
    t1_q_b: "20 cm",
    t1_q_c: "25 cm",
    t1_q_d: "15 cm",
    t2_title: "Aria: Suprafața",
    t2_text: "Aria măsoară spațiul din interiorul unei forme. Numărăm câte pătrate unitate sunt necesare pentru a acoperi suprafața.",
    t2_b1: "Dreptunghi: Lungime × Lățime",
    t2_b2: "Măsurată în unități pătrate (ex: cm²)",
    t2_b3: "Este o măsurătoare de suprafață (2D)",
    t2_inst: "Găsește 24 pe linia numerelor pentru aria unui dreptunghi 4×6!",
    t2_h1: "Înmulțește 4 cu 6 pentru a obține ținta.",
    t2_h2: "4 ori 6 fac 24. Atinge numărul!",
    t2_q: "Un dreptunghi are 3m lățime și 6m lungime. Care este aria sa?",
    t2_q_a: "9 m²",
    t2_q_b: "18 m²",
    t2_q_c: "20 m²",
    t2_q_d: "12 m²",
    t3_title: "Perimetru vs. Arie",
    t3_text: "Formele pot avea aceeași arie dar perimetre diferite. Pătratul este o formă specială cu toate laturile egale!",
    t3_b1: "Aria = spațiul interior",
    t3_b2: "Perimetrul = limita exterioară",
    t3_b3: "Aria pătratului: latură × latură",
    t3_inst: "Combină blocurile pentru a crea o arie de 16 unități!",
    t3_h1: "Folosește patru blocuri care valorează câte 4 unități fiecare.",
    t3_h2: "4 blocuri × 4 unități = 16.",
    t3_q: "Un pătrat are aria 16. Care este lungimea unei laturi?",
    t3_q_a: "2",
    t3_q_b: "4",
    t3_q_c: "8",
    t3_q_d: "16",
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
      type: "block-drag",
      mode: "combine",
      groups: [3, 3, 3, 3],
      answer: 12,
      blockIcon: "📏",
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
      type: "number-line",
      min: 0,
      max: 40,
      start: 0,
      target: 24,
      step: 4,
      showJumps: true,
      jumpCount: 6,
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
      groups: [4, 4, 4, 4],
      answer: 16,
      blockIcon: "🟩",
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

const GeometryExplorer4 = memo(function GeometryExplorer4({
  color = "#10B981",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="math_g4_geometry" color={color} lang={lang} onDone={onDone} />;
});

export default GeometryExplorer4;
