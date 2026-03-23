"use client";
// UnitExplorer4 — Units & Measurement conversions for Grade 4 (island i7)
// Uses ExplorerEngine with 3 topics: length conversions, weight/volume, real-world applications

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Ruler with inches and centimeters ──────────────────────────────────

const RulerSvg = memo(function RulerSvg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="rulerG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#rulerG)" rx="16" />

      {/* Centimeter ruler */}
      <g transform="translate(20, 30)">
        <rect width="200" height="20" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" strokeWidth="2" rx="2" />

        {/* CM marks */}
        {Array.from({ length: 21 }, (_, i) => {
          const x = i * 10;
          const isBig = i % 5 === 0;
          const height = isBig ? 8 : 4;
          return (
            <g key={`cm-${i}`}>
              <line x1={x} y1="20" x2={x} y2={20 + height} stroke="#3B82F6" strokeWidth="1" />
              {isBig && <text x={x} y="38" fontSize="9" fill="#3B82F6" textAnchor="middle">{i} cm</text>}
            </g>
          );
        })}
      </g>

      {/* Inch ruler */}
      <g transform="translate(20, 70)">
        <rect width="200" height="20" fill="rgba(239, 68, 68, 0.3)" stroke="#EF4444" strokeWidth="2" rx="2" />

        {/* Inch marks */}
        {Array.from({ length: 9 }, (_, i) => {
          const x = i * 25;
          return (
            <g key={`in-${i}`}>
              <line x1={x} y1="20" x2={x} y2="28" stroke="#EF4444" strokeWidth="2" />
              <text x={x} y="40" fontSize="9" fill="#EF4444" textAnchor="middle">{i}"</text>
            </g>
          );
        })}
      </g>

      {/* Labels */}
      <text x="15" y="25" fontSize="10" fontWeight="bold" fill="#3B82F6">Centimeters:</text>
      <text x="15" y="65" fontSize="10" fontWeight="bold" fill="#EF4444">Inches:</text>
    </svg>
  );
});

// ─── SVG: Conversion chart (length, weight, volume) ────────────────────────────

const ConversionChartSvg = memo(function ConversionChartSvg() {
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="convG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6EE7B7" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#convG)" rx="16" />

      {/* Length */}
      <g transform="translate(10, 20)">
        <text x="0" y="0" fontSize="11" fontWeight="bold" fill="#10B981">Length</text>
        <text x="0" y="14" fontSize="9" fill="rgba(255,255,255,0.7)">12 inches = 1 foot</text>
        <text x="0" y="26" fontSize="9" fill="rgba(255,255,255,0.7)">100 cm = 1 meter</text>
        <text x="0" y="38" fontSize="9" fill="rgba(255,255,255,0.7)">1 foot ≈ 30 cm</text>
      </g>

      {/* Weight */}
      <g transform="translate(130, 20)">
        <text x="0" y="0" fontSize="11" fontWeight="bold" fill="#F59E0B">Weight</text>
        <text x="0" y="14" fontSize="9" fill="rgba(255,255,255,0.7)">16 ounces = 1 pound</text>
        <text x="0" y="26" fontSize="9" fill="rgba(255,255,255,0.7)">1000 g = 1 kilogram</text>
        <text x="0" y="38" fontSize="9" fill="rgba(255,255,255,0.7)">1 lb ≈ 450 g</text>
      </g>

      {/* Volume */}
      <g transform="translate(10, 90)">
        <text x="0" y="0" fontSize="11" fontWeight="bold" fill="#8B5CF6">Volume</text>
        <text x="0" y="14" fontSize="9" fill="rgba(255,255,255,0.7)">1000 mL = 1 liter</text>
        <text x="0" y="26" fontSize="9" fill="rgba(255,255,255,0.7)">16 cups = 1 gallon</text>
        <text x="0" y="38" fontSize="9" fill="rgba(255,255,255,0.7)">1 liter ≈ 1 quart</text>
      </g>

      {/* Time */}
      <g transform="translate(130, 90)">
        <text x="0" y="0" fontSize="11" fontWeight="bold" fill="#EF4444">Time</text>
        <text x="0" y="14" fontSize="9" fill="rgba(255,255,255,0.7)">60 seconds = 1 minute</text>
        <text x="0" y="26" fontSize="9" fill="rgba(255,255,255,0.7)">60 minutes = 1 hour</text>
        <text x="0" y="38" fontSize="9" fill="rgba(255,255,255,0.7)">24 hours = 1 day</text>
      </g>
    </svg>
  );
});

// ─── SVG: Real-world measurement examples ─────────────────────────────────────

const RealWorldSvg = memo(function RealWorldSvg() {
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="rwG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#F472B6" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#rwG)" rx="16" />

      {/* Pencil (6 inches / 15 cm) */}
      <g transform="translate(20, 30)">
        <rect x="0" y="0" width="4" height="50" fill="#F59E0B" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
        <circle cx="2" cy="52" r="3" fill="#333" />
        <text x="20" y="30" fontSize="9" fontWeight="bold" fill="rgba(255,255,255,0.8)">Pencil</text>
        <text x="20" y="42" fontSize="8" fill="rgba(255,255,255,0.6)">6 inches</text>
        <text x="20" y="52" fontSize="8" fill="rgba(255,255,255,0.6)">15 cm</text>
      </g>

      {/* Milk jug (1 gallon / ~4 liters) */}
      <g transform="translate(100, 20)">
        <rect x="0" y="0" width="25" height="50" fill="rgba(100, 150, 255, 0.3)" stroke="#3B82F6" strokeWidth="2" rx="2" />
        <path d="M 8 0 L 12 -5 L 18 -5 L 22 0" fill="none" stroke="#3B82F6" strokeWidth="1" />
        <text x="35" y="30" fontSize="9" fontWeight="bold" fill="rgba(255,255,255,0.8)">Milk Jug</text>
        <text x="35" y="42" fontSize="8" fill="rgba(255,255,255,0.6)">1 gallon</text>
        <text x="35" y="52" fontSize="8" fill="rgba(255,255,255,0.6)">~4 liters</text>
      </g>

      {/* Apple (100-150 grams) */}
      <g transform="translate(170, 30)">
        <circle cx="0" cy="0" r="12" fill="#EF4444" opacity="0.4" stroke="#EF4444" strokeWidth="2" />
        <circle cx="-3" cy="-10" r="2" fill="#8B5CF6" opacity="0.6" />
        <text x="20" y="0" fontSize="9" fontWeight="bold" fill="rgba(255,255,255,0.8)">Apple</text>
        <text x="20" y="12" fontSize="8" fill="rgba(255,255,255,0.6)">~100g</text>
        <text x="20" y="22" fontSize="8" fill="rgba(255,255,255,0.6)">~3.5 oz</text>
      </g>

      {/* Conversions practice */}
      <text x="120" y="130" fontSize="11" fontWeight="bold" fill="rgba(255,255,255,0.8)" textAnchor="middle">
        Master conversions with practice!
      </text>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Units & Measurement Explorer",
    // Topic 1: Length conversions (inches, feet, cm, meters)
    t1_title: "Measuring Length",
    t1_text: "Length is how long something is. We measure it in inches, feet, centimeters, and meters. 12 inches = 1 foot. 100 centimeters = 1 meter. Knowing conversions helps us compare measurements!",
    t1_b1: "12 inches = 1 foot",
    t1_b2: "100 centimeters = 1 meter",
    t1_b3: "1 foot ≈ 30 centimeters",
    t1_q: "How many inches are in 3 feet?",
    t1_q_24: "24 inches",
    t1_q_36: "36 inches",
    t1_q_30: "30 inches",
    t1_q_15: "15 inches",
    // Topic 2: Weight & volume conversions
    t2_title: "Measuring Weight & Volume",
    t2_text: "Weight measures how heavy something is. Volume measures how much space something takes up. Common conversions: 16 ounces = 1 pound. 1000 milliliters = 1 liter. These help us cook, measure, and compare!",
    t2_b1: "16 ounces = 1 pound",
    t2_b2: "1000 mL = 1 liter",
    t2_b3: "1 liter ≈ 1 quart",
    t2_q: "A jug holds 4 liters. How many milliliters is that?",
    t2_q_400: "400 mL",
    t2_q_4000: "4000 mL",
    t2_q_40: "40 mL",
    t2_q_40000: "40000 mL",
    // Topic 3: Real-world applications
    t3_title: "Units in Real Life",
    t3_text: "Measurements are everywhere! A pencil is about 6 inches or 15 cm. An apple weighs about 100 grams or 3.5 ounces. A gallon of milk is about 4 liters. Understanding units helps us shop, cook, and build!",
    t3_b1: "Choose the right unit for the job",
    t3_b2: "Compare using the same units",
    t3_b3: "Practice conversions regularly",
    t3_q: "A recipe needs 2 cups of milk. About how many milliliters is that?",
    t3_q_200: "200 mL",
    t3_q_500: "500 mL",
    t3_q_2000: "2000 mL",
    t3_q_250: "250 mL",
    // Review questions (R5)
    r5_q1: "If 1 foot = 12 inches, how many inches are in 5 feet?",
    r5_q1_a: "17 inches",
    r5_q1_b: "50 inches",
    r5_q1_c: "60 inches",
    r5_q1_d: "5 inches",
    r5_q2: "A container holds 3 liters. How many milliliters is that?",
    r5_q2_a: "30 mL",
    r5_q2_b: "300 mL",
    r5_q2_c: "3000 mL",
    r5_q2_d: "30000 mL",
    r5_q3: "Which is heavier: 1 pound or 500 grams?",
    r5_q3_a: "1 pound (≈450g)",
    r5_q3_b: "500 grams",
    r5_q3_c: "They are equal",
    r5_q3_d: "Cannot compare",
  },
  de: {
    explorer_title: "Einheiten & Messung Entdecker",
    t1_title: "Länge messen",
    t1_text: "Länge ist, wie lang etwas ist. Wir messen es in Zoll, Fuß, Zentimetern und Metern. 12 Zoll = 1 Fuß. 100 Zentimeter = 1 Meter. Umwandlungswissen hilft uns, Messungen zu vergleichen!",
    t1_b1: "12 Zoll = 1 Fuß",
    t1_b2: "100 Zentimeter = 1 Meter",
    t1_b3: "1 Fuß ≈ 30 Zentimeter",
    t1_q: "Wie viele Zoll sind in 3 Fuß?",
    t1_q_24: "24 Zoll",
    t1_q_36: "36 Zoll",
    t1_q_30: "30 Zoll",
    t1_q_15: "15 Zoll",
    t2_title: "Gewicht & Volumen messen",
    t2_text: "Gewicht misst, wie schwer etwas ist. Volumen misst, wie viel Platz etwas einnimmt. Häufige Umwandlungen: 16 Unzen = 1 Pfund. 1000 Milliliter = 1 Liter. Dies hilft uns beim Kochen, Messen und Vergleichen!",
    t2_b1: "16 Unzen = 1 Pfund",
    t2_b2: "1000 mL = 1 Liter",
    t2_b3: "1 Liter ≈ 1 Quart",
    t2_q: "Ein Krug hält 4 Liter. Wie viele Milliliter sind das?",
    t2_q_400: "400 mL",
    t2_q_4000: "4000 mL",
    t2_q_40: "40 mL",
    t2_q_40000: "40000 mL",
    t3_title: "Einheiten im echten Leben",
    t3_text: "Messungen sind überall! Ein Bleistift ist etwa 6 Zoll oder 15 cm. Ein Apfel wiegt etwa 100 Gramm oder 3,5 Unzen. Eine Gallone Milch ist etwa 4 Liter. Das Verstehen von Einheiten hilft uns beim Einkaufen, Kochen und Bauen!",
    t3_b1: "Wähle die richtige Einheit für die Arbeit",
    t3_b2: "Vergleichen mit den gleichen Einheiten",
    t3_b3: "Übe Umwandlungen regelmäßig",
    t3_q: "Ein Rezept braucht 2 Tassen Milch. Etwa wie viele Milliliter sind das?",
    t3_q_200: "200 mL",
    t3_q_500: "500 mL",
    t3_q_2000: "2000 mL",
    t3_q_250: "250 mL",
    r5_q1: "Wenn 1 Fuß = 12 Zoll, wie viele Zoll sind in 5 Fuß?",
    r5_q1_a: "17 Zoll",
    r5_q1_b: "50 Zoll",
    r5_q1_c: "60 Zoll",
    r5_q1_d: "5 Zoll",
    r5_q2: "Ein Behälter hält 3 Liter. Wie viele Milliliter sind das?",
    r5_q2_a: "30 mL",
    r5_q2_b: "300 mL",
    r5_q2_c: "3000 mL",
    r5_q2_d: "30000 mL",
    r5_q3: "Was ist schwerer: 1 Pfund oder 500 Gramm?",
    r5_q3_a: "1 Pfund (≈450g)",
    r5_q3_b: "500 Gramm",
    r5_q3_c: "Sie sind gleich",
    r5_q3_d: "Kann nicht vergleichen",
  },
  hu: {
    explorer_title: "Egységek & Mérés Felfedező",
    t1_title: "Hossz mérése",
    t1_text: "A hossz azt jelenti, hogy valameddig hosszú. Colláb, láb, centiméterben és méterben mérjük. 12 coll = 1 láb. 100 centiméter = 1 méter. Az átváltási tudás segít az összehasonlításban!",
    t1_b1: "12 coll = 1 láb",
    t1_b2: "100 centiméter = 1 méter",
    t1_b3: "1 láb ≈ 30 centiméter",
    t1_q: "Hány coll van 3 láb-ban?",
    t1_q_24: "24 coll",
    t1_q_36: "36 coll",
    t1_q_30: "30 coll",
    t1_q_15: "15 coll",
    t2_title: "Tömeg & térfogat mérése",
    t2_text: "A tömeg azt méri, milyen nehéz valamit. A térfogat azt méri, mennyi helyet foglal el valamit. Gyakori átváltások: 16 uncia = 1 font. 1000 milliliter = 1 liter. Ez segít a főzésben, mérésben és összehasonlításban!",
    t2_b1: "16 uncia = 1 font",
    t2_b2: "1000 mL = 1 liter",
    t2_b3: "1 liter ≈ 1 quart",
    t2_q: "Egy kancsó 4 litertartalmú. Hány milliliter az?",
    t2_q_400: "400 mL",
    t2_q_4000: "4000 mL",
    t2_q_40: "40 mL",
    t2_q_40000: "40000 mL",
    t3_title: "Egységek az igazi életben",
    t3_text: "A mérések mindenhol vannak! Egy ceruza körülbelül 6 coll vagy 15 cm. Egy alma körülbelül 100 gramm vagy 3,5 uncia. Egy gallon tej körülbelül 4 liter. Az egységek megértése segít vásárlásban, főzésben és építésben!",
    t3_b1: "Válassza ki a megfelelő egységet",
    t3_b2: "Összehasonlítás ugyanazzal az egységgel",
    t3_b3: "Gyakorolja az átváltásokat rendszeresen",
    t3_q: "Egy recept 2 csésze tejet igényel. Körülbelül hány milliliter?",
    t3_q_200: "200 mL",
    t3_q_500: "500 mL",
    t3_q_2000: "2000 mL",
    t3_q_250: "250 mL",
    r5_q1: "Ha 1 láb = 12 coll, hány coll van 5 láb-ban?",
    r5_q1_a: "17 coll",
    r5_q1_b: "50 coll",
    r5_q1_c: "60 coll",
    r5_q1_d: "5 coll",
    r5_q2: "Egy tartály 3 literhez. Hány milliliter?",
    r5_q2_a: "30 mL",
    r5_q2_b: "300 mL",
    r5_q2_c: "3000 mL",
    r5_q2_d: "30000 mL",
    r5_q3: "Mi a nehezebb: 1 font vagy 500 gramm?",
    r5_q3_a: "1 font (≈450g)",
    r5_q3_b: "500 gramm",
    r5_q3_c: "Egyformák",
    r5_q3_d: "Nem lehet összehasonlítani",
  },
  ro: {
    explorer_title: "Explorare unități și măsurare",
    t1_title: "Măsurarea lungimii",
    t1_text: "Lungimea este cât de lung este ceva. O măsurăm în inci, picioare, centimetri și metri. 12 inci = 1 picior. 100 centimetri = 1 metru. Cunoașterea conversiilor ne ajută să comparăm măsurătorile!",
    t1_b1: "12 inci = 1 picior",
    t1_b2: "100 centimetri = 1 metru",
    t1_b3: "1 picior ≈ 30 centimetri",
    t1_q: "Câți inci sunt în 3 picioare?",
    t1_q_24: "24 inci",
    t1_q_36: "36 inci",
    t1_q_30: "30 inci",
    t1_q_15: "15 inci",
    t2_title: "Măsurarea greutății și volumului",
    t2_text: "Greutatea măsoară cât de greu este ceva. Volumul măsoară cât spațiu ocupă ceva. Conversii comune: 16 uncii = 1 livră. 1000 mililitri = 1 litru. Acestea ne ajută la gătit, măsurare și comparare!",
    t2_b1: "16 uncii = 1 livră",
    t2_b2: "1000 mL = 1 litru",
    t2_b3: "1 litru ≈ 1 quart",
    t2_q: "Un ulcior conține 4 litri. Câți mililitri sunt ăia?",
    t2_q_400: "400 mL",
    t2_q_4000: "4000 mL",
    t2_q_40: "40 mL",
    t2_q_40000: "40000 mL",
    t3_title: "Unități în viața reală",
    t3_text: "Măsurătorile sunt peste tot! Un creion este de aproximativ 6 inci sau 15 cm. Un măr cântărește aproximativ 100 de grame sau 3,5 uncii. Un galon de lapte este de aproximativ 4 litri. Înțelegerea unităților ne ajută să cumpărăm, gătim și construim!",
    t3_b1: "Alege unitatea potrivită pentru treabă",
    t3_b2: "Compară folosind aceleași unități",
    t3_b3: "Practichează conversiile regulat",
    t3_q: "O rețetă necesită 2 căni de lapte. Aproximativ câți mililitri?",
    t3_q_200: "200 mL",
    t3_q_500: "500 mL",
    t3_q_2000: "2000 mL",
    t3_q_250: "250 mL",
    r5_q1: "Dacă 1 picior = 12 inci, câți inci sunt în 5 picioare?",
    r5_q1_a: "17 inci",
    r5_q1_b: "50 inci",
    r5_q1_c: "60 inci",
    r5_q1_d: "5 inci",
    r5_q2: "Un recipient conține 3 litri. Câți mililitri sunt?",
    r5_q2_a: "30 mL",
    r5_q2_b: "300 mL",
    r5_q2_c: "3000 mL",
    r5_q2_d: "30000 mL",
    r5_q3: "Care este mai greu: 1 livră sau 500 de grame?",
    r5_q3_a: "1 livră (≈450g)",
    r5_q3_b: "500 grame",
    r5_q3_c: "Sunt egale",
    r5_q3_d: "Nu pot compara",
  },
};

// ─── EXPLORER DEFINITION ───────────────────────────────────────────────────

const EXPLORER_DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "⚖️",
  rounds: [
    // ─ R1: Length conversions ─
    {
      type: "info",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <RulerSvg />,
      bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <RulerSvg />,
      questions: [
        {
          question: "t1_q",
          choices: ["t1_q_24", "t1_q_36", "t1_q_30", "t1_q_15"],
          answer: "t1_q_36",
        },
      ],
    },

    // ─ R2: Weight & volume conversions ─
    {
      type: "info",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <ConversionChartSvg />,
      bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t2_title",
      infoText: "t2_text",
      svg: () => <ConversionChartSvg />,
      questions: [
        {
          question: "t2_q",
          choices: ["t2_q_400", "t2_q_4000", "t2_q_40", "t2_q_40000"],
          answer: "t2_q_4000",
        },
      ],
    },

    // ─ R3: Real-world applications ─
    {
      type: "info",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <RealWorldSvg />,
      bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    },
    {
      type: "mcq",
      infoTitle: "t3_title",
      infoText: "t3_text",
      svg: () => <RealWorldSvg />,
      questions: [
        {
          question: "t3_q",
          choices: ["t3_q_200", "t3_q_500", "t3_q_2000", "t3_q_250"],
          answer: "t3_q_500",
        },
      ],
    },

    // ─ R5: Review (3 questions) ─
    {
      type: "mcq",
      infoTitle: "t1_title",
      infoText: "t1_text",
      svg: () => <ConversionChartSvg />,
      questions: [
        {
          question: "r5_q1",
          choices: ["r5_q1_a", "r5_q1_b", "r5_q1_c", "r5_q1_d"],
          answer: "r5_q1_c",
        },
        {
          question: "r5_q2",
          choices: ["r5_q2_a", "r5_q2_b", "r5_q2_c", "r5_q2_d"],
          answer: "r5_q2_c",
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

export default function UnitExplorer4({ color = "#3B82F6", lang, onDone, onClose }: Props) {
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
