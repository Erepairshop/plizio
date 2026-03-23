"use client";
// StatExplorer8 — Advanced Statistics & Data Analysis for Grade 8 (island i7)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Data Analyst Dashboard stílus) ──────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="stat8Grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#059669" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#10B981" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#stat8Grad1)" rx="24" />
    <g transform="translate(120, 80)">
      {/* Box Plot (Dobozábra) */}
      <line x1="-80" y1="0" x2="-40" y2="0" stroke="#10B981" strokeWidth="2" /> {/* Alsó bajusz */}
      <line x1="40" y1="0" x2="80" y2="0" stroke="#10B981" strokeWidth="2" />  {/* Felső bajusz */}
      <line x1="-80" y1="-10" x2="-80" y2="10" stroke="#10B981" strokeWidth="2" /> {/* Min */}
      <line x1="80" y1="-10" x2="80" y2="10" stroke="#10B981" strokeWidth="2" /> {/* Max */}
      
      <rect x="-40" y="-15" width="80" height="30" fill="#059669" fillOpacity="0.4" stroke="#34D399" strokeWidth="2" /> {/* Doboz */}
      <line x1="10" y1="-15" x2="10" y2="15" stroke="#A7F3D0" strokeWidth="3" /> {/* Medián */}
      
      <text x="-40" y="-20" fontSize="10" fill="#34D399" textAnchor="middle">Q1</text>
      <text x="10" y="-20" fontSize="10" fontWeight="bold" fill="#A7F3D0" textAnchor="middle">Medián</text>
      <text x="40" y="-20" fontSize="10" fill="#34D399" textAnchor="middle">Q3</text>
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#0F172A" rx="24" />
    <g transform="translate(120, 70)">
      {/* Szórás: Átlagtól való eltérés */}
      <line x1="-90" y1="0" x2="90" y2="0" stroke="#334155" strokeWidth="2" />
      <line x1="0" y1="-40" x2="0" y2="40" stroke="#818CF8" strokeWidth="2" strokeDasharray="4 2" />
      <text x="0" y="-45" fontSize="12" fontWeight="bold" fill="#818CF8" textAnchor="middle">Átlag (x̄)</text>
      
      <circle cx="-50" cy="0" r="4" fill="#C084FC" />
      <circle cx="30" cy="0" r="4" fill="#C084FC" />
      <circle cx="60" cy="0" r="4" fill="#C084FC" />
      
      <path d="M 0,-15 L -50,-15" stroke="#C084FC" strokeWidth="1" markerEnd="url(#arrow)" />
      <path d="M 0,-15 L 60,-15" stroke="#C084FC" strokeWidth="1" markerEnd="url(#arrow)" />
      <text x="-25" y="-20" fontSize="10" fill="#D8B4FE" textAnchor="middle">Eltérés</text>
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#1E293B" rx="24" />
    <g transform="translate(120, 80)">
      <rect x="-40" y="-60" width="15" height="60" fill="#F97316" rx="2" />
      <rect x="-20" y="-40" width="15" height="40" fill="#38BDF8" rx="2" />
      
      <rect x="10" y="-30" width="15" height="30" fill="#F97316" rx="2" />
      <rect x="30" y="-80" width="15" height="80" fill="#38BDF8" rx="2" />
      
      <line x1="-80" y1="0" x2="80" y2="0" stroke="#64748B" strokeWidth="2" />
      <text x="-25" y="15" fontSize="10" fill="#94A3B8" textAnchor="middle">"A" csoport</text>
      <text x="25" y="15" fontSize="10" fill="#94A3B8" textAnchor="middle">"B" csoport</text>
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Adatelemzés (Pro)",
    t1_title: "A Dobozábra (Box Plot)",
    t1_text: "A dobozábra 5 fontos számot mutat meg egy adathalmazról: a minimumot, az alsó kvartilist (Q1), a mediánt, a felső kvartilist (Q3) és a maximumot. Megmutatja, hogyan oszlanak el az adatok.",
    t1_b1: "A 'doboz' a középső 50%-ot tartalmazza",
    t1_b2: "A doboz hossza az interkvartilis terjedelem (IQR)",
    t1_b3: "A medián vágja ketté a teljes adathalmazt",
    t1_inst: "Keresd meg a felső kvartilist (Q3)! Ha a doboz 10-től 30-ig tart, hol van a Q3?",
    t1_h1: "A doboz jobb oldali széle jelenti a Q3-at.",
    t1_h2: "A Q3 értéke 30. Koppints a 30-ra a számegyenesen.",
    t1_q: "Mit mutat meg a dobozábra vonala a doboz belsejében?",
    t1_q_a: "A mediánt", t1_q_b: "Az átlagot", t1_q_c: "A maximumot", t1_q_d: "A móduszt",
    t2_title: "A Szórás (Spread)",
    t2_text: "Az átlag nem mond el mindent. Két osztály átlaga lehet 3,0, de az egyikben mindenki 3-ast kapott (kis szórás), a másikban csak 1-est és 5-öst (nagy szórás). A szórás az átlagtól való átlagos eltérést méri.",
    t2_b1: "Nagy szórás: az adatok szétszórtak",
    t2_b2: "Kis szórás: az adatok az átlag körül tömörülnek",
    t2_b3: "Kiszámítása a távolságok négyzetén alapul",
    t2_inst: "Ha az átlag 10, és egy adat 14, mennyi a távolsága (eltérése) az átlagtól?",
    t2_step1: "Vond ki az átlagot az adatból: 14 - 10",
    t2_step2: "Az eredmény a távolság.",
    t2_h1: "14 - 10 = 4.",
    t2_h2: "Az eltérés 4. Válaszd a 4-et.",
    t2_q: "Milyen a szórás, ha minden vizsgaeredmény pontosan 80 pont lett?",
    t2_q_a: "Nulla", t2_q_b: "Nagyon nagy", t2_q_c: "Negatív", t2_q_d: "80",
    t3_title: "Adatok összehasonlítása",
    t3_text: "A statisztika legfőbb célja a döntéshozatal. Ehhez gyakran két vagy több csoport adatait hasonlítjuk össze diagramokon. Figyeljük a középértékeket és az adatok szóródását is.",
    t3_b1: "Mindig azonos skálán hasonlítsunk össze",
    t3_b2: "Nézzük az átlagok különbségét",
    t3_b3: "Nézzük meg az eloszlást is (kiugró értékek)",
    t3_inst: "Olvasd le a grafikonról! Mennyi a 'B' csoport kék (jobb oldali) oszlopának értéke?",
    t3_h1: "Keresd az x=2 (B csoport) értéket a grafikonon.",
    t3_h2: "Az értéke 80. Koppints a 80-ra.",
    t3_q: "Miért veszélyes csak az átlagokat összehasonlítani két csoportnál?",
    t3_q_a: "Mert a szórás (eltérések) teljesen más lehet", t3_q_b: "Mert az átlag mindig hibás", t3_q_c: "Mert a medián jobb", t3_q_d: "Nem veszélyes",
  }
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
      max: 50,
      start: 0,
      target: 30, // Q3 position
      step: 5,
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
      equation: "Eltérés = 14 - 10",
      steps: [
        { instruction: "t2_step1", choices: [2, 4, 10, 24], answer: 4, equation: "Eltérés = 4" }
      ],
      finalAnswer: 4,
      variable: "Távolság",
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
      type: "graph-plotter",
      points: [
        { x: 1, y: 60 }, // A csoport
        { x: 2, y: 80 }  // B csoport (target)
      ],
      targetX: 2,
      targetY: 80,
      chartType: "bar",
      xLabel: "Csoport",
      yLabel: "Érték",
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

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📈",
  topics: TOPICS,
  rounds: [],
};

const StatExplorer8 = memo(function StatExplorer8({
  color = "#10B981",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="math_g8_stats" color={color} lang={lang} onDone={onDone} />;
});

export default StatExplorer8;
