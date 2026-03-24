"use client";
// UnitsExplorer4 — Measurement Units for Grade 4 (island i7)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="unitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#unitGrad1)" rx="16" />
      {/* Ruler visual */}
      <g transform="translate(20, 60)">
        <rect width="200" height="30" fill="#F1F5F9" stroke="#0EA5E9" rx="4" />
        {Array.from({ length: 21 }).map((_, i) => (
          <line key={i} x1={i * 10} y1="0" x2={i * 10} y2={i % 5 === 0 ? 15 : 8} stroke="#0EA5E9" strokeWidth="1" />
        ))}
        <text x="50" y="45" fontSize="10" fill="#0EA5E9" textAnchor="middle">5 cm</text>
        <text x="100" y="45" fontSize="10" fill="#0EA5E9" textAnchor="middle">10 cm</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="unitGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FDA4AF" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#unitGrad2)" rx="16" />
      {/* Weight scale visual */}
      <g transform="translate(120, 80)">
        <path d="M -40,0 L 40,0 L 0,-40 Z" fill="#E11D48" opacity="0.6" />
        <rect x="-50" y="-45" width="100" height="10" fill="#E11D48" rx="2" />
        <circle cx="-35" cy="-55" r="8" fill="#FB7185" />
        <text x="0" y="25" fontSize="14" fontWeight="bold" fill="#9F1239" textAnchor="middle">1 kg = 1000 g</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="unitGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#unitGrad3)" rx="16" />
      {/* Liquid volume visual */}
      <g transform="translate(100, 30)">
        <rect x="0" y="0" width="40" height="80" fill="none" stroke="#059669" strokeWidth="2" rx="2" />
        <rect x="2" y="40" width="36" height="38" fill="#34D399" opacity="0.5" />
        <line x1="40" y1="20" x2="45" y2="20" stroke="#059669" />
        <line x1="40" y1="40" x2="48" y2="40" stroke="#059669" />
        <line x1="40" y1="60" x2="45" y2="60" stroke="#059669" />
        <text x="65" y="45" fontSize="12" fontWeight="bold" fill="#065F46">1 L</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Units Explorer",
    t1_title: "Length: Measuring Distance",
    t1_text: "Length tells us how long something is. We use millimeters (mm) for tiny things, centimeters (cm) for medium ones, and kilometers (km) for long roads!",
    t1_b1: "1 cm = 10 mm",
    t1_b2: "1 m = 100 cm",
    t1_b3: "1 km = 1000 m",
    t1_inst: "Find 300 on the number line to show how many cm are in 3 meters!",
    t1_h1: "Since 1m = 100cm, then 3m = 300cm.",
    t1_h2: "Look for the number 300.",
    t1_q: "How many millimeters are in 5 centimeters?",
    t1_q_a: "5 mm",
    t1_q_b: "50 mm",
    t1_q_c: "500 mm",
    t1_q_d: "15 mm",
    t2_title: "Mass: Measuring Weight",
    t2_text: "Mass tells us how heavy an object is. Small things are measured in grams (g), while heavy things like people are measured in kilograms (kg).",
    t2_b1: "1 kg = 1000 g",
    t2_b2: "1 t (tonne) = 1000 kg",
    t2_b3: "Scales measure the mass",
    t2_inst: "Combine blocks to reach 2000g (equal to 2kg)!",
    t2_h1: "Each block represents 500g.",
    t2_h2: "Four blocks of 500g make 2000g.",
    t2_q: "Which object is likely to weigh about 1 kilogram?",
    t2_q_a: "A feather",
    t2_q_b: "A bag of flour",
    t2_q_c: "A car",
    t2_q_d: "A paperclip",
    t3_title: "Capacity: Liquid Volume",
    t3_text: "Capacity is the amount of liquid a container can hold. We use milliliters (ml) for small doses and liters (l) for large bottles.",
    t3_b1: "1 L = 1000 ml",
    t3_b2: "1 L is about 4 large glasses",
    t3_b3: "Liquid always takes the shape of the container",
    t3_inst: "Move 100ml blocks to fill a 400ml cup!",
    t3_h1: "Each block is 100ml.",
    t3_h2: "Drag 4 blocks to reach 400ml.",
    t3_q: "How many milliliters are in half a liter (0.5 L)?",
    t3_q_a: "100 ml",
    t3_q_b: "500 ml",
    t3_q_c: "50 ml",
    t3_q_d: "1000 ml",
  },
  de: {
    explorer_title: "Einheiten-Entdecker",
    t1_title: "Länge: Abstände messen",
    t1_text: "Länge sagt uns, wie lang etwas ist. Millimeter (mm) für Winziges, Zentimeter (cm) für Mittleres und Kilometer (km) für weite Wege!",
    t1_b1: "1 cm = 10 mm",
    t1_b2: "1 m = 100 cm",
    t1_b3: "1 km = 1000 m",
    t1_inst: "Finde 300 auf dem Zahlenstrahl (3 Meter in Zentimetern)!",
    t1_h1: "Da 1m = 100cm ist, sind 3m = 300cm.",
    t1_h2: "Suche die Zahl 300.",
    t1_q: "Wie viele Millimeter sind 5 Zentimeter?",
    t1_q_a: "5 mm",
    t1_q_b: "50 mm",
    t1_q_c: "500 mm",
    t1_q_d: "15 mm",
    t2_title: "Masse: Gewicht messen",
    t2_text: "Die Masse sagt uns, wie schwer etwas ist. Kleine Dinge messen wir in Gramm (g), schwere Dinge in Kilogramm (kg).",
    t2_b1: "1 kg = 1000 g",
    t2_b2: "1 t (Tonne) = 1000 kg",
    t2_b3: "Waagen messen die Masse",
    t2_inst: "Kombiniere Blöcke, um 2000g (2kg) zu erreichen!",
    t2_h1: "Jeder Block steht für 500g.",
    t2_h2: "Vier Blöcke zu 500g ergeben 2000g.",
    t2_q: "Welcher Gegenstand wiegt etwa 1 Kilogramm?",
    t2_q_a: "Eine Feder",
    t2_q_b: "Eine Packung Mehl",
    t2_q_c: "Ein Auto",
    t2_q_d: "Eine Büroklammer",
    t3_title: "Hohlmaße: Flüssigkeiten",
    t3_text: "Das Hohlmaß gibt an, wie viel Flüssigkeit in ein Gefäß passt. Milliliter (ml) für wenig, Liter (l) für viel.",
    t3_b1: "1 L = 1000 ml",
    t3_b2: "1 L sind etwa 4 große Gläser",
    t3_b3: "Flüssigkeit passt sich dem Gefäß an",
    t3_inst: "Nutze 100ml Blöcke, um 400ml zu füllen!",
    t3_h1: "Jeder Block ist 100ml wert.",
    t3_h2: "Ziehe 4 Blöcke hinein.",
    t3_q: "Wie viele Milliliter sind ein halber Liter (0,5 L)?",
    t3_q_a: "100 ml",
    t3_q_b: "500 ml",
    t3_q_c: "50 ml",
    t3_q_d: "1000 ml",
  },
  hu: {
    explorer_title: "Mértékegységek",
    t1_title: "Hosszúság mérése",
    t1_text: "A hosszúság megmutatja, milyen hosszú egy tárgy. Millimétert (mm) a picikhez, centimétert (cm) a közepesekhez, kilométert (km) az utakhoz használunk.",
    t1_b1: "1 cm = 10 mm",
    t1_b2: "1 m = 100 cm",
    t1_b3: "1 km = 1000 m",
    t1_inst: "Keresd meg a 300-at: hány cm van 3 méterben?",
    t1_h1: "Mivel 1m = 100cm, ezért 3m = 300cm.",
    t1_h2: "Keresd a 300-as számot.",
    t1_q: "Hány milliméter van 5 centiméterben?",
    t1_q_a: "5 mm",
    t1_q_b: "50 mm",
    t1_q_c: "500 mm",
    t1_q_d: "15 mm",
    t2_title: "Tömeg mérése",
    t2_text: "A tömeg megmutatja, milyen nehéz egy tárgy. A könnyű dolgokat grammban (g), a nehezeket kilogrammban (kg) mérjük.",
    t2_b1: "1 kg = 1000 g",
    t2_b2: "1 t (tonna) = 1000 kg",
    t2_b3: "Méréshez mérleget használunk",
    t2_inst: "Vond össze a blokkokat, hogy elérd a 2000g-ot (2kg)!",
    t2_h1: "Minden blokk 500g-ot ér.",
    t2_h2: "Négy darab 500g-os blokk kell a 2000g-hoz.",
    t2_q: "Melyik tárgy tömege kb. 1 kilogramm?",
    t2_q_a: "Egy madártoll",
    t2_q_b: "Egy csomag liszt",
    t2_q_c: "Egy autó",
    t2_q_d: "Egy gémkapocs",
    t3_title: "Űrtartalom: Folyadékok",
    t3_text: "Az űrtartalom megmutatja, mennyi folyadék fér egy edénybe. Millilitert (ml) a kevéshez, litert (l) a sokhoz használunk.",
    t3_b1: "1 L = 1000 ml",
    t3_b2: "1 L kb. 4 nagy pohárnyi víz",
    t3_b3: "A folyadék felveszi az edény alakját",
    t3_inst: "Használj 100ml-es blokkokat a 400ml megtöltéséhez!",
    t3_h1: "Minden blokk 100ml-t ér.",
    t3_h2: "Húzz be 4 blokkot.",
    t3_q: "Hány milliliter van fél literben (0,5 L)?",
    t3_q_a: "100 ml",
    t3_q_b: "500 ml",
    t3_q_c: "50 ml",
    t3_q_d: "1000 ml",
  },
  ro: {
    explorer_title: "Explorator Unități",
    t1_title: "Lungimea: Măsurarea distanței",
    t1_text: "Lungimea ne spune cât de lung este un obiect. Folosim milimetri (mm) pentru obiecte mici, centimetri (cm) pentru medii și kilometri (km) pentru drumuri.",
    t1_b1: "1 cm = 10 mm",
    t1_b2: "1 m = 100 cm",
    t1_b3: "1 km = 1000 m",
    t1_inst: "Găsește 300 pe linia numerelor (3 metri în centimetri)!",
    t1_h1: "Deoarece 1m = 100cm, atunci 3m = 300cm.",
    t1_h2: "Caută numărul 300.",
    t1_q: "Câți milimetri sunt în 5 centimetri?",
    t1_q_a: "5 mm",
    t1_q_b: "50 mm",
    t1_q_c: "500 mm",
    t1_q_d: "15 mm",
    t2_title: "Masa: Măsurarea greutății",
    t2_text: "Masa ne spune cât de greu este un obiect. Lucrurile mici se măsoară în grame (g), iar cele grele în kilograme (kg).",
    t2_b1: "1 kg = 1000 g",
    t2_b2: "1 t (tonă) = 1000 kg",
    t2_b3: "Cântarul măsoară masa",
    t2_inst: "Combină blocurile pentru a ajunge la 2000g (2kg)!",
    t2_h1: "Fiecare bloc reprezintă 500g.",
    t2_h2: "Patru blocuri de 500g fac 2000g.",
    t2_q: "Care obiect cântărește aproximativ 1 kilogram?",
    t2_q_a: "O pană",
    t2_q_b: "O pungă de făină",
    t2_q_c: "O mașină",
    t2_q_d: "O agrafă de birou",
    t3_title: "Capacitatea: Volumul lichidelor",
    t3_text: "Capacitatea este cantitatea de lichid pe care o poate ține un vas. Folosim mililitri (ml) pentru puțin și litri (l) pentru mult.",
    t3_b1: "1 L = 1000 ml",
    t3_b2: "1 L înseamnă aproximativ 4 pahare mari",
    t3_b3: "Lichidul ia forma vasului în care se află",
    t3_inst: "Folosește blocuri de 100ml pentru a umple 400ml!",
    t3_h1: "Fiecare bloc valorează 100ml.",
    t3_h2: "Trage 4 blocuri în vas.",
    t3_q: "Câți mililitri sunt în jumătate de litru (0,5 L)?",
    t3_q_a: "100 ml",
    t3_q_b: "500 ml",
    t3_q_c: "50 ml",
    t3_q_d: "1000 ml",
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
      max: 500,
      start: 0,
      target: 300,
      step: 50,
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
      groups: [1, 1, 1, 1],
      answer: 4,
      blockIcon: "⚖️",
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
      groups: [1, 1, 1, 1], // Each block 100ml
      answer: 4,
      blockIcon: "💧",
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
  icon: "📏",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const UnitsExplorer4 = memo(function UnitsExplorer4({
  color = "#0EA5E9",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="math_g4_units" color={color} lang={lang} onDone={onDone} />;
});

export default UnitsExplorer4;
