"use client";
// GeometryAreaExplorer6 — Area & Volume for Grade 6 (island i6)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="areaGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F472B6" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#areaGrad1)" rx="16" />
      {/* Parallelogram to Rectangle transition */}
      <g transform="translate(60, 40)">
        <path d="M 0,60 L 80,60 L 110,0 L 30,0 Z" fill="#FCE7F3" stroke="#DB2777" strokeWidth="2" />
        <line x1="30" y1="0" x2="30" y2="60" stroke="#DB2777" strokeWidth="2" strokeDasharray="4 2" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="areaGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#areaGrad2)" rx="16" />
      {/* Trapezoid Area */}
      <g transform="translate(70, 40)">
        <path d="M 0,60 L 100,60 L 80,0 L 20,0 Z" fill="#D1FAE5" stroke="#059669" strokeWidth="2" />
        <line x1="20" y1="0" x2="20" y2="60" stroke="#059669" strokeWidth="1" strokeDasharray="3 3" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="areaGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#areaGrad3)" rx="16" />
      {/* Rectangular Prism (3D) */}
      <g transform="translate(90, 40)">
        <rect x="0" y="20" width="40" height="40" fill="#DBEAFE" stroke="#2563EB" strokeWidth="2" />
        <path d="M 0,20 L 20,0 L 60,0 L 60,40 L 40,60 L 0,60 Z" fill="none" stroke="#2563EB" strokeWidth="2" />
        <path d="M 40,20 L 60,0 M 40,60 L 60,40" stroke="#2563EB" strokeWidth="2" />
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Area & Volume",
    t1_title: "Triangles & Parallelograms",
    t1_text: "A parallelogram's area is the same as a rectangle's: base times height. For triangles, it's half of that because every triangle is half of a parallelogram!",
    t1_b1: "Parallelogram: A = base × height",
    t1_b2: "Triangle: A = (base × height) / 2",
    t1_b3: "Height must be perpendicular to the base",
    t1_inst: "Find the height! If the area is 40 and the base is 8, what is the height?",
    t1_h1: "Use the formula: 8 * h = 40.",
    t1_h2: "Set the slider to 5.",
    t1_q: "What is the area of a triangle with base 10 and height 6?",
    t1_q_a: "30",
    t1_q_b: "60",
    t1_q_c: "16",
    t1_q_d: "20",
    t2_title: "Trapezoids",
    t2_text: "A trapezoid has two parallel bases (a and c). To find its area, we take the average of the bases and multiply by the height.",
    t2_b1: "Add the two bases first",
    t2_b2: "Multiply by height, then divide by 2",
    t2_b3: "Formula: ((a + c) * m) / 2",
    t2_inst: "Solve the trapezoid area: bases are 4 and 6, height is 5.",
    t2_step1: "Add bases (4 + 6 = ?)",
    t2_step2: "Multiply by height and divide by 2 (10 * 5 / 2 = ?)",
    t2_h1: "Sum of bases is 10. 10 * 5 is 50.",
    t2_h2: "50 divided by 2 is 25.",
    t2_q: "Area of trapezoid: bases 3 and 7, height 4.",
    t2_q_a: "20",
    t2_q_b: "40",
    t2_q_c: "14",
    t2_q_d: "25",
    t3_title: "Volume of Prisms",
    t3_text: "Volume measures the space inside a 3D object. For a rectangular prism, you multiply the three dimensions: length, width, and height.",
    t3_b1: "Volume is measured in cubic units (e.g., cm³)",
    t3_b2: "V = length × width × height",
    t3_b3: "Think of it as layers of unit cubes",
    t3_inst: "Build a prism with volume 12! Drag the unit cubes.",
    t3_h1: "You need 12 cubes in total.",
    t3_h2: "Try a 3x2x2 arrangement or just drag 12 blocks.",
    t3_q: "Volume of a box with sides 2, 3, and 5?",
    t3_q_a: "30",
    t3_q_b: "10",
    t3_q_c: "25",
    t3_q_d: "15",
  },
  hu: {
    explorer_title: "Terület és térfogat",
    t1_title: "Háromszög és parallelogramma",
    t1_text: "A parallelogramma területe olyan, mint a téglalapé: alap szorozva a magassággal. A háromszögé ennek a fele, mert minden háromszög egy parallelogramma fele!",
    t1_b1: "Parallelogramma: T = alap × magasság",
    t1_b2: "Háromszög: T = (alap × magasság) / 2",
    t1_b3: "A magasság mindig merőleges az alapra",
    t1_inst: "Keresd a magasságot! Ha a terület 40 és az alap 8, mennyi a magasság?",
    t1_h1: "Használd a képletet: 8 * m = 40.",
    t1_h2: "Állítsd a csúszkát 5-re.",
    t1_q: "Mennyi a háromszög területe, ha az alapja 10, a magassága pedig 6?",
    t1_q_a: "30",
    t1_q_b: "60",
    t1_q_c: "16",
    t1_q_d: "20",
    t2_title: "A trapéz területe",
    t2_text: "A trapéznak két párhuzamos alapja van (a és c). A területhez összeadjuk az alapokat, megszorozzuk a magassággal, majd elosztjuk kettővel.",
    t2_b1: "Előbb add össze a két alapot",
    t2_b2: "Szorozd a magassággal, majd oszd el kettővel",
    t2_b3: "Képlet: ((a + c) * m) / 2",
    t2_inst: "Számold ki a trapéz területét: alapok 4 és 6, magasság 5.",
    t2_step1: "Alapok összege (4 + 6 = ?)",
    t2_step2: "Szorzás és osztás (10 * 5 / 2 = ?)",
    t2_h1: "Az alapok összege 10. 10 * 5 az 50.",
    t2_h2: "50 osztva 2-vel az 25.",
    t2_q: "Trapéz területe: alapok 3 és 7, magasság 4.",
    t2_q_a: "20",
    t2_q_b: "40",
    t2_q_c: "14",
    t2_q_d: "25",
    t3_title: "A téglatest térfogata",
    t3_text: "A térfogat megmutatja, mennyi hely van egy 3D-s testben. Téglatestnél a három élt (hossz, szélesség, magasság) szorozzuk össze.",
    t3_b1: "A térfogatot köbmértékben mérjük (pl. cm³)",
    t3_b2: "V = a · b · c",
    t3_b3: "Gondolj rá úgy, mint egységkockák rétegeire",
    t3_inst: "Építs fel egy 12 egységnyi térfogatú testet! Húzd be a kockákat.",
    t3_h1: "Összesen 12 kockára van szükséged.",
    t3_h2: "Például egy 3x2x2-es elrendezés jó lesz.",
    t3_q: "Mennyi a térfogata egy 2, 3 és 5 oldalú doboznak?",
    t3_q_a: "30",
    t3_q_b: "10",
    t3_q_c: "25",
    t3_q_d: "15",
  },
  de: {
    explorer_title: "Fläche & Volumen",
    t1_title: "Dreiecke & Parallelogramme",
    t1_text: "Die Fläche eines Parallelogramms ist wie die eines Rechtecks: Grundlinie mal Höhe. Die Fläche eines Dreiecks ist halb davon, da jedes Dreieck die Hälfte eines Parallelogramms ist!",
    t1_b1: "Parallelogramm: A = Grundlinie × Höhe",
    t1_b2: "Dreieck: A = (Grundlinie × Höhe) / 2",
    t1_b3: "Die Höhe muss senkrecht zur Grundlinie sein",
    t1_inst: "Finde die Höhe! Wenn die Fläche 40 ist und die Grundlinie 8, wie groß ist die Höhe?",
    t1_h1: "Nutze die Formel: 8 * h = 40.",
    t1_h2: "Stelle den Regler auf 5.",
    t1_q: "Wie ist die Fläche eines Dreiecks mit Grundlinie 10 und Höhe 6?",
    t1_q_a: "30",
    t1_q_b: "60",
    t1_q_c: "16",
    t1_q_d: "20",
    t2_title: "Trapezfläche",
    t2_text: "Ein Trapez hat zwei parallele Grundlinien (a und c). Um seine Fläche zu finden, addieren wir die Grundlinien, multiplizieren mit der Höhe und teilen durch 2.",
    t2_b1: "Addiere die beiden Grundlinien zuerst",
    t2_b2: "Multipliziere mit der Höhe, dann teile durch 2",
    t2_b3: "Formel: ((a + c) * h) / 2",
    t2_inst: "Berechne die Trapezfläche: Grundlinien 4 und 6, Höhe 5.",
    t2_step1: "Grundlinien addieren (4 + 6 = ?)",
    t2_step2: "Multiplizieren und dividieren (10 * 5 / 2 = ?)",
    t2_h1: "Summe der Grundlinien ist 10. 10 * 5 ist 50.",
    t2_h2: "50 geteilt durch 2 ist 25.",
    t2_q: "Trapezfläche: Grundlinien 3 und 7, Höhe 4.",
    t2_q_a: "20",
    t2_q_b: "40",
    t2_q_c: "14",
    t2_q_d: "25",
    t3_title: "Volumen eines Prismas",
    t3_text: "Das Volumen zeigt, wie viel Platz ein 3D-Objekt einnimmt. Bei einem Quader multiplizierst du drei Dimensionen: Länge, Breite und Höhe.",
    t3_b1: "Volumen wird in Kubikeinheiten gemessen (z.B. cm³)",
    t3_b2: "V = a · b · c",
    t3_b3: "Stelle dir es als Schichten von Einheitswürfeln vor",
    t3_inst: "Baue ein Prisma mit Volumen 12! Ziehe die Einheitswürfel.",
    t3_h1: "Du brauchst insgesamt 12 Würfel.",
    t3_h2: "Versuche z.B. eine 3x2x2-Anordnung.",
    t3_q: "Volumen einer Box mit Kanten 2, 3 und 5?",
    t3_q_a: "30",
    t3_q_b: "10",
    t3_q_c: "25",
    t3_q_d: "15",
  },
  ro: {
    explorer_title: "Arie și Volum",
    t1_title: "Triunghiuri și Paralelograme",
    t1_text: "Aria unui paralelogram este ca a unui dreptunghi: bază ori înălțime. Aria unui triunghi este jumătate din asta, pentru că fiecare triunghi este jumătatea unui paralelogram!",
    t1_b1: "Paralelogram: A = bază × înălțime",
    t1_b2: "Triunghi: A = (bază × înălțime) / 2",
    t1_b3: "Înălțimea trebuie să fie perpendiculară pe bază",
    t1_inst: "Găsește înălțimea! Dacă aria este 40 și baza 8, cât este înălțimea?",
    t1_h1: "Folosește formula: 8 * h = 40.",
    t1_h2: "Setează cursorul la 5.",
    t1_q: "Care este aria unui triunghi cu bază 10 și înălțime 6?",
    t1_q_a: "30",
    t1_q_b: "60",
    t1_q_c: "16",
    t1_q_d: "20",
    t2_title: "Aria Trapezului",
    t2_text: "Un trapez are două baze paralele (a și c). Pentru a-i găsi aria, adunăm bazele, înmulțim cu înălțimea și împărțim la 2.",
    t2_b1: "Adună mai întâi cele două baze",
    t2_b2: "Înmulțește cu înălțimea, apoi împarte la 2",
    t2_b3: "Formula: ((a + c) * h) / 2",
    t2_inst: "Calculează aria trapezului: baze 4 și 6, înălțime 5.",
    t2_step1: "Adună bazele (4 + 6 = ?)",
    t2_step2: "Înmulțește și împarte (10 * 5 / 2 = ?)",
    t2_h1: "Suma bazelor este 10. 10 * 5 este 50.",
    t2_h2: "50 împărțit la 2 este 25.",
    t2_q: "Aria trapezului: baze 3 și 7, înălțime 4.",
    t2_q_a: "20",
    t2_q_b: "40",
    t2_q_c: "14",
    t2_q_d: "25",
    t3_title: "Volumul unui Prism",
    t3_text: "Volumul măsoară spațiul din interiorul unui obiect 3D. Pentru o prismă dreptunghiulară, înmulțești trei dimensiuni: lungime, lățime și înălțime.",
    t3_b1: "Volumul se măsoară în unități cubice (ex. cm³)",
    t3_b2: "V = a · b · c",
    t3_b3: "Gândește-te la straturi de cuburi unitare",
    t3_inst: "Construiește o prismă cu volum 12! Trage cuburile.",
    t3_h1: "Ai nevoie de 12 cuburi în total.",
    t3_h2: "Încearcă o aranjare 3x2x2.",
    t3_q: "Volumul unei cutii cu laturi 2, 3 și 5?",
    t3_q_a: "30",
    t3_q_b: "10",
    t3_q_c: "25",
    t3_q_d: "15",
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
      type: "ratio-slider",
      baseValue: 1,      // unit area
      basePrice: 8,      // base
      targetValue: 5,    // height we want to find
      targetPrice: 40,   // target area
      unitName: "unit",
      currency: "area",
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
      equation: "((4 + 6) * 5) / 2 = T",
      steps: [
        { instruction: "t2_step1", choices: [8, 10, 12, 24], answer: 10, equation: "(10 * 5) / 2 = T" },
        { instruction: "t2_step2", choices: [20, 25, 50, 100], answer: 25, equation: "T = 25" },
      ],
      finalAnswer: 25,
      variable: "T",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a",
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
      groups: [4, 4, 4], // 3 groups of 4 cubes for 12 volume
      answer: 12,
      blockIcon: "🧊",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
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

const GeometryAreaExplorer6 = memo(function GeometryAreaExplorer6({
  color = "#EC4899",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="math_g6_area_vol" color={color} lang={lang} onDone={onDone} />;
});

export default GeometryAreaExplorer6;
