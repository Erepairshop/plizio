"use client";
// UnitExplorer5 — Measurement Units for Grade 5 (island i7)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="unitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#unitGrad1)" rx="16" />
      {/* Length/Distance Visual */}
      <g transform="translate(20, 70)">
        <line x1="0" y1="0" x2="200" y2="0" stroke="#2563EB" strokeWidth="4" />
        {/* Tick marks */}
        {[0, 100, 200].map((x, i) => (
          <g key={x} transform={`translate(${x}, 0)`}>
            <line x1="0" y1="-10" x2="0" y2="10" stroke="#1E40AF" strokeWidth="2" />
            <text x="0" y="25" fontSize="12" fontWeight="bold" fill="#1E40AF" textAnchor="middle">{i} km</text>
            <text x="0" y="-15" fontSize="10" fill="#2563EB" textAnchor="middle">{i * 1000} m</text>
          </g>
        ))}
        {/* Highlight 1.5 km */}
        <circle cx="150" cy="0" r="6" fill="#EF4444" />
        <text x="150" y="-15" fontSize="12" fontWeight="bold" fill="#EF4444" textAnchor="middle">1.5 km</text>
        <text x="150" y="25" fontSize="12" fontWeight="bold" fill="#EF4444" textAnchor="middle">1500 m</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="unitGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#unitGrad2)" rx="16" />
      {/* Mass/Weight Visual: 1 kg = 1000 g */}
      <g transform="translate(120, 80)">
        <path d="M -40,0 L 40,0 L 0,-40 Z" fill="#D97706" opacity="0.6" />
        <rect x="-50" y="-45" width="100" height="10" fill="#B45309" rx="2" />
        
        {/* Left weight (1 kg) */}
        <rect x="-40" y="-75" width="20" height="30" fill="#92400E" rx="2" />
        <text x="-30" y="-50" fontSize="10" fill="white" textAnchor="middle">1kg</text>
        
        {/* Right weights (2x 500g) */}
        <rect x="10" y="-65" width="15" height="20" fill="#F59E0B" rx="2" />
        <rect x="25" y="-65" width="15" height="20" fill="#F59E0B" rx="2" />
        
        <text x="0" y="30" fontSize="16" fontWeight="bold" fill="#92400E" textAnchor="middle">1 kg = 1000 g</text>
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
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#unitGrad3)" rx="16" />
      {/* Capacity/Volume Visual */}
      <g transform="translate(100, 30)">
        {/* Measuring Jug */}
        <path d="M 0,0 L 0,80 A 10,10 0 0,0 10,90 L 30,90 A 10,10 0 0,0 40,80 L 40,0" fill="none" stroke="#047857" strokeWidth="3" />
        <path d="M 0,30 L 40,30 L 40,80 A 10,10 0 0,1 30,90 L 10,90 A 10,10 0 0,1 0,80 Z" fill="#34D399" opacity="0.6" />
        
        {/* Liquid lines */}
        <line x1="-5" y1="70" x2="0" y2="70" stroke="#047857" strokeWidth="2" />
        <line x1="-5" y1="50" x2="0" y2="50" stroke="#047857" strokeWidth="2" />
        <line x1="-10" y1="30" x2="0" y2="30" stroke="#047857" strokeWidth="2" />
        
        <text x="-15" y="35" fontSize="12" fontWeight="bold" fill="#065F46" textAnchor="end">1 L</text>
        <text x="-15" y="55" fontSize="10" fill="#065F46" textAnchor="end">500 ml</text>
        <text x="70" y="60" fontSize="16" fontWeight="bold" fill="#047857" textAnchor="middle">1 L = 1000 ml</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Units Explorer",
    t1_title: "Length & Distance",
    t1_text: "For long distances, we use kilometers (km). Since 1 km is exactly 1000 meters, 1.5 km means 1 full kilometer and half of another (500m)!",
    t1_b1: "1 km = 1000 m",
    t1_b2: "0.5 km = 500 m",
    t1_b3: "Multiply km by 1000 to get meters",
    t1_inst: "Find 1500 meters on the number line! It represents 1.5 km.",
    t1_h1: "Look exactly halfway between 1000 and 2000.",
    t1_h2: "Tap the mark at 1500.",
    t1_q: "How many meters are in 2.5 kilometers?",
    t1_q_a: "2500 m",
    t1_q_b: "250 m",
    t1_q_c: "2050 m",
    t1_q_d: "25 m",
    t2_title: "Mass & Weight",
    t2_text: "Weight is measured in grams (g) and kilograms (kg). Just like with distance, 1 kilogram is exactly 1000 grams.",
    t2_b1: "1 kg = 1000 g",
    t2_b2: "2.5 kg = 2500 g",
    t2_b3: "Divide grams by 1000 to get kg",
    t2_inst: "Balance the scale! Left is 2.5 kg (2500g). Right only has 1000g.",
    t2_h1: "The right side needs 1500g more.",
    t2_h2: "Add weights to the right until it reaches 2500.",
    t2_q: "Which is heavier: 1.2 kg or 1500 g?",
    t2_q_a: "1500 g",
    t2_q_b: "1.2 kg",
    t2_q_c: "They are equal",
    t2_q_d: "Cannot be compared",
    t3_title: "Capacity & Volume",
    t3_text: "Liquids are measured in milliliters (ml) and liters (L). A standard bottle of water is often 0.5 L, which is 500 ml.",
    t3_b1: "1 Liter (L) = 1000 ml",
    t3_b2: "0.25 L = 250 ml (a small glass)",
    t3_b3: "Multiply Liters by 1000 to get ml",
    t3_inst: "If 1 Liter is 1000 ml, use the slider to find how many ml are in 2.5 Liters!",
    t3_h1: "Multiply 2.5 by 1000.",
    t3_h2: "Set the slider to 2500 ml.",
    t3_q: "How many Liters is 750 ml?",
    t3_q_a: "0.75 L",
    t3_q_b: "7.5 L",
    t3_q_c: "75 L",
    t3_q_d: "0.075 L",
  },
  de: {
    explorer_title: "Einheiten Entdecker",
    t1_title: "Länge & Entfernung",
    t1_text: "Für weite Strecken nutzen wir Kilometer (km). Da 1 km genau 1000 Meter sind, bedeutet 1,5 km einen ganzen Kilometer und noch einen halben (500m)!",
    t1_b1: "1 km = 1000 m",
    t1_b2: "0,5 km = 500 m",
    t1_b3: "Multipliziere km mit 1000 für Meter",
    t1_inst: "Finde 1500 Meter auf dem Zahlenstrahl! Das entspricht 1,5 km.",
    t1_h1: "Suche genau in der Mitte zwischen 1000 und 2000.",
    t1_h2: "Tippe auf die Markierung bei 1500.",
    t1_q: "Wie viele Meter sind 2,5 Kilometer?",
    t1_q_a: "2500 m",
    t1_q_b: "250 m",
    t1_q_c: "2050 m",
    t1_q_d: "25 m",
    t2_title: "Masse & Gewicht",
    t2_text: "Gewicht wird in Gramm (g) und Kilogramm (kg) gemessen. Genau wie bei der Entfernung sind 1 Kilogramm exakt 1000 Gramm.",
    t2_b1: "1 kg = 1000 g",
    t2_b2: "2,5 kg = 2500 g",
    t2_b3: "Teile Gramm durch 1000 für kg",
    t2_inst: "Gleiche die Waage aus! Links sind 2,5 kg (2500g). Rechts nur 1000g.",
    t2_h1: "Der rechten Seite fehlen noch 1500g.",
    t2_h2: "Füge Gewichte hinzu, bis rechts 2500 steht.",
    t2_q: "Was ist schwerer: 1,2 kg oder 1500 g?",
    t2_q_a: "1500 g",
    t2_q_b: "1,2 kg",
    t2_q_c: "Beides ist gleich",
    t2_q_d: "Kann man nicht vergleichen",
    t3_title: "Hohlmaße & Volumen",
    t3_text: "Flüssigkeiten misst man in Milliliter (ml) und Liter (L). Eine normale Wasserflasche hat oft 0,5 L, das sind 500 ml.",
    t3_b1: "1 Liter (L) = 1000 ml",
    t3_b2: "0,25 L = 250 ml (ein kleines Glas)",
    t3_b3: "Multipliziere Liter mit 1000 für ml",
    t3_inst: "Wenn 1 Liter 1000 ml sind, wie viele ml sind dann 2,5 Liter? Nutze den Regler!",
    t3_h1: "Multipliziere 2,5 mit 1000.",
    t3_h2: "Stelle den Regler auf 2500 ml.",
    t3_q: "Wie viele Liter sind 750 ml?",
    t3_q_a: "0,75 L",
    t3_q_b: "7,5 L",
    t3_q_c: "75 L",
    t3_q_d: "0,075 L",
  },
  hu: {
    explorer_title: "Mértékegységek",
    t1_title: "Hosszúság és távolság",
    t1_text: "Nagy távolságokra kilométert (km) használunk. Mivel 1 km pontosan 1000 méter, az 1,5 km egy egész kilométert és egy felet (500m) jelent!",
    t1_b1: "1 km = 1000 m",
    t1_b2: "0,5 km = 500 m",
    t1_b3: "Szorozd a km-t 1000-rel a méterhez",
    t1_inst: "Keresd meg az 1500 métert a számegyenesen! Ez felel meg 1,5 km-nek.",
    t1_h1: "Keresd pontosan az 1000 és a 2000 között félúton.",
    t1_h2: "Koppints az 1500-as értékre.",
    t1_q: "Hány méter 2,5 kilométer?",
    t1_q_a: "2500 m",
    t1_q_b: "250 m",
    t1_q_c: "2050 m",
    t1_q_d: "25 m",
    t2_title: "Tömeg és súly",
    t2_text: "A tömeget grammban (g) és kilogrammban (kg) mérjük. Akárcsak a távolságnál, 1 kilogramm pontosan 1000 grammot ér.",
    t2_b1: "1 kg = 1000 g",
    t2_b2: "2,5 kg = 2500 g",
    t2_b3: "Oszd a grammot 1000-rel a kg-hoz",
    t2_inst: "Egyenlítsd ki a mérleget! A bal oldal 2,5 kg (2500g). A jobb oldal csak 1000g.",
    t2_h1: "A jobb oldalra még 1500g kell.",
    t2_h2: "Adj hozzá súlyokat a gombokkal, amíg el nem éri a 2500-at.",
    t2_q: "Melyik nehezebb: 1,2 kg vagy 1500 g?",
    t2_q_a: "1500 g",
    t2_q_b: "1,2 kg",
    t2_q_c: "Egyenlőek",
    t2_q_d: "Nem összehasonlíthatóak",
    t3_title: "Űrtartalom és térfogat",
    t3_text: "A folyadékokat milliliterben (ml) és literben (l) mérjük. Egy normál vizespalack gyakran 0,5 l, ami 500 ml-t jelent.",
    t3_b1: "1 Liter (l) = 1000 ml",
    t3_b2: "0,25 l = 250 ml (egy kis pohár)",
    t3_b3: "Szorozd a litert 1000-rel a ml-hez",
    t3_inst: "Ha 1 liter 1000 ml, állítsd be a csúszkán, hogy mennyi 2,5 liter!",
    t3_h1: "Szorozd meg a 2,5-öt 1000-rel.",
    t3_h2: "Húzd a csúszkát 2500 ml-re.",
    t3_q: "Hány liter a 750 ml?",
    t3_q_a: "0,75 l",
    t3_q_b: "7,5 l",
    t3_q_c: "75 l",
    t3_q_d: "0,075 l",
  },
  ro: {
    explorer_title: "Explorator Unități",
    t1_title: "Lungime și Distanță",
    t1_text: "Pentru distanțe lungi, folosim kilometri (km). Deoarece 1 km înseamnă exact 1000 de metri, 1.5 km reprezintă un kilometru întreg și încă jumătate (500m)!",
    t1_b1: "1 km = 1000 m",
    t1_b2: "0.5 km = 500 m",
    t1_b3: "Înmulțește km cu 1000 pentru a obține metri",
    t1_inst: "Găsește 1500 de metri pe linia numerelor! Reprezintă 1.5 km.",
    t1_h1: "Caută exact la jumătatea distanței dintre 1000 și 2000.",
    t1_h2: "Atinge marcajul de la 1500.",
    t1_q: "Câți metri sunt în 2.5 kilometri?",
    t1_q_a: "2500 m",
    t1_q_b: "250 m",
    t1_q_c: "2050 m",
    t1_q_d: "25 m",
    t2_title: "Masă și Greutate",
    t2_text: "Greutatea se măsoară în grame (g) și kilograme (kg). La fel ca la distanță, 1 kilogram înseamnă exact 1000 de grame.",
    t2_b1: "1 kg = 1000 g",
    t2_b2: "2.5 kg = 2500 g",
    t2_b3: "Împarte gramele la 1000 pentru kg",
    t2_inst: "Echilibrează balanța! Stânga are 2.5 kg (2500g). Dreapta are doar 1000g.",
    t2_h1: "Partea dreaptă mai are nevoie de 1500g.",
    t2_h2: "Adaugă greutăți până ajungi la 2500.",
    t2_q: "Care este mai greu: 1.2 kg sau 1500 g?",
    t2_q_a: "1500 g",
    t2_q_b: "1.2 kg",
    t2_q_c: "Sunt egale",
    t2_q_d: "Nu se pot compara",
    t3_title: "Capacitate și Volum",
    t3_text: "Lichidele se măsoară în mililitri (ml) și litri (L). O sticlă normală de apă are adesea 0.5 L, ceea ce înseamnă 500 ml.",
    t3_b1: "1 Litru (L) = 1000 ml",
    t3_b2: "0.25 L = 250 ml (un pahar mic)",
    t3_b3: "Înmulțește Litrii cu 1000 pentru ml",
    t3_inst: "Dacă 1 Litru are 1000 ml, folosește cursorul pentru a afla câți ml sunt în 2.5 Litri!",
    t3_h1: "Înmulțește 2.5 cu 1000.",
    t3_h2: "Setează cursorul la 2500 ml.",
    t3_q: "Câți Litri înseamnă 750 ml?",
    t3_q_a: "0.75 L",
    t3_q_b: "7.5 L",
    t3_q_c: "75 L",
    t3_q_d: "0.075 L",
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
      max: 3000,
      start: 0,
      target: 1500,
      step: 500,
      showJumps: true,
      jumpCount: 6,
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
      type: "balance-scale",
      leftWeight: 2500,    // 2.5 kg
      rightInitial: 1000,  // starts with 1 kg
      unitIcon: "g",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // 1500g is heavier than 1200g
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "ratio-slider",
      baseValue: 1,      // 1 L
      basePrice: 1000,   // 1000 ml
      targetValue: 2.5,  // 2.5 L
      targetPrice: 2500, // 2500 ml
      unitName: "L",
      currency: "ml",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // 0.75 L
    },
  },
];

// ─── EXPLORER DEFINÍCIÓ ──────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "⚖️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const UnitExplorer5 = memo(function UnitExplorer5({
  color = "#3B82F6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={5} explorerId="math_g5_units" color={color} lang={lang} onDone={onDone} />;
});

export default UnitExplorer5;
