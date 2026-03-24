"use client";
// PythagorasExplorer7 — Pythagorean Theorem for Grade 7 (island i6)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Modern Neon Geometria) ─────────────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="pytGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#pytGrad1)" rx="20" />
    <g transform="translate(100, 90)">
      {/* Derékszögű háromszög */}
      <path d="M 0,0 L 40,0 L 0,-30 Z" fill="none" stroke="#2DD4BF" strokeWidth="3" />
      <rect x="0" y="-5" width="5" height="5" fill="none" stroke="#2DD4BF" strokeWidth="1" />
      
      {/* Négyzetek az oldalakon */}
      <rect x="0" y="0" width="40" height="40" fill="#3B82F6" fillOpacity="0.3" stroke="#3B82F6" strokeWidth="1" />
      <rect x="-30" y="-30" width="30" height="30" fill="#3B82F6" fillOpacity="0.3" stroke="#3B82F6" strokeWidth="1" />
      <path d="M 0,-30 L 40,0 L 70,-40 L 30,-70 Z" fill="#2DD4BF" fillOpacity="0.3" stroke="#2DD4BF" strokeWidth="1" />
      
      <text x="20" y="25" fontSize="10" fontWeight="bold" fill="#1E40AF" textAnchor="middle">a²</text>
      <text x="-15" y="-15" fontSize="10" fontWeight="bold" fill="#1E40AF" textAnchor="middle">b²</text>
      <text x="35" y="-35" fontSize="10" fontWeight="bold" fill="#0D9488" textAnchor="middle">c²</text>
    </g>
    <text x="120" y="25" fontSize="16" fontWeight="900" fill="#0F766E" textAnchor="middle">a² + b² = c²</text>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#F0FDFA" rx="20" />
    <g transform="translate(120, 70)">
      <path d="M -30,20 L 30,20 L -30,-20 Z" fill="none" stroke="#0D9488" strokeWidth="3" />
      <text x="0" y="35" fontSize="12" fontWeight="bold" fill="#0F766E" textAnchor="middle">6</text>
      <text x="-45" y="0" fontSize="12" fontWeight="bold" fill="#0F766E" textAnchor="middle">8</text>
      <text x="10" y="-5" fontSize="14" fontWeight="black" fill="#0D9488">c = ?</text>
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#ECFEFF" rx="20" />
    <g transform="translate(120, 70)">
      <text x="0" y="-20" fontSize="14" fill="#0891B2" textAnchor="middle">Pitagoraszi számhármasok</text>
      <text x="0" y="15" fontSize="24" fontWeight="black" fill="#0E7490" textAnchor="middle">3, 4, 5</text>
      <line x1="-40" y1="25" x2="40" y2="25" stroke="#0891B2" strokeWidth="2" />
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Pitagorasz-tétel",
    t1_title: "A tétel lényege",
    t1_text: "Bármely derékszögű háromszögben a két befogó (a és b) hosszak négyzetének összege egyenlő az átfogó (c) hosszának négyzetével. Ez a geometria alapköve!",
    t1_b1: "Csak derékszögű háromszögre igaz",
    t1_b2: "a² + b² = c²",
    t1_b3: "Az átfogó (c) mindig a leghosszabb oldal",
    t1_inst: "Használd a csúszkát! Ha a = 3 és b = 4, mennyi lesz a négyzeteik összege (c²)?",
    t1_h1: "3² = 9 és 4² = 16. Add össze őket!",
    t1_h2: "9 + 16 = 25. Állítsd a csúszkát 25-re.",
    t1_q: "Melyik oldal az átfogó (c) a képletben?",
    t1_q_a: "A derékszöggel szemközti oldal", t1_q_b: "A legrövidebb oldal", t1_q_c: "A vízszintes oldal", t1_q_d: "Bármelyik oldal",
    t2_title: "Hiányzó oldal számítása",
    t2_text: "Ha ismersz két oldalt, a tétel segítségével a harmadikat is kiszámolhatod. Behelyettesítünk, összeadunk, majd gyököt vonunk.",
    t2_b1: "Emeld négyzetre az ismert oldalakat",
    t2_b2: "Add össze őket vagy vond ki, ha befogót keresel",
    t2_b3: "Végül vonj négyzetgyököt",
    t2_inst: "Számold ki az átfogót: a=6, b=8. Lépésről lépésre!",
    t2_step1: "Számold ki a négyzetösszeget (36 + 64 = ?)",
    t2_step2: "Vonj gyököt a 100-ból!",
    t2_h1: "6x6 = 36, 8x8 = 64. Az összeg 100.",
    t2_h2: "Melyik szám négyzete a 100? A válasz 10.",
    t2_q: "Mennyi az átfogó, ha a befogók 5 cm és 12 cm?",
    t2_q_a: "13 cm", t2_q_b: "17 cm", t2_q_c: "15 cm", t2_q_d: "169 cm",
    t3_title: "Ábrázolás grafikonon",
    t3_text: "Nézd meg, hogyan változik az átfogó (c) hossza, ha az egyik befogó (a) növekszik, miközben a másik (b) állandó!",
    t3_b1: "A növekedés nem lineáris",
    t3_b2: "A görbe alakja a négyzetes összefüggést mutatja",
    t3_b3: "Minél nagyobb az alap, annál hosszabb az átfogó",
    t3_inst: "Nézd a grafikont! Ha az a oldal 12, a b pedig 5, mennyi lesz az átfogó (y)?",
    t3_h1: "Az 5-12-13 egy ismert számhármas.",
    t3_h2: "Keresd az y tengelyen a 13-as értéket.",
    t3_q: "Igaz-e: a 3, 4, 5 számhármas egy derékszögű háromszöget alkot?",
    t3_q_a: "Igaz", t3_q_b: "Hamis",
  },
  de: {
    explorer_title: "Satz des Pythagoras",
    t1_title: "Die Essenz des Satzes",
    t1_text: "In jedem rechtwinkligen Dreieck ist die Summe der Quadrate der beiden Katheten (a und b) gleich dem Quadrat der Hypotenuse (c). Dies ist die Grundlage der Geometrie!",
    t1_b1: "Gilt nur für rechtwinklige Dreiecke",
    t1_b2: "a² + b² = c²",
    t1_b3: "Die Hypotenuse (c) ist immer die längste Seite",
    t1_inst: "Verwende den Schieberegler! Wenn a = 3 und b = 4, wie viel ist die Summe ihrer Quadrate (c²)?",
    t1_h1: "3² = 9 und 4² = 16. Addiere sie!",
    t1_h2: "9 + 16 = 25. Stelle den Schieberegler auf 25.",
    t1_q: "Welche Seite ist die Hypotenuse (c) in der Formel?",
    t1_q_a: "Die dem rechten Winkel gegenüberliegende Seite", t1_q_b: "Die kürzeste Seite", t1_q_c: "Die horizontale Seite", t1_q_d: "Jede beliebige Seite",
    t2_title: "Berechnung der fehlenden Seite",
    t2_text: "Wenn du zwei Seiten kennst, kannst du die dritte mit dem Satz berechnen. Wir setzen ein, addieren und ziehen dann die Quadratwurzel.",
    t2_b1: "Quadriere die bekannten Seiten",
    t2_b2: "Addiere sie oder subtrahiere, wenn du eine Kathete suchst",
    t2_b3: "Ziehe schließlich die Quadratwurzel",
    t2_inst: "Berechne die Hypotenuse: a=6, b=8. Schritt für Schritt!",
    t2_step1: "Berechne die Quadratsumme (36 + 64 = ?)",
    t2_step2: "Ziehe die Quadratwurzel aus 100!",
    t2_h1: "6x6 = 36, 8x8 = 64. Die Summe ist 100.",
    t2_h2: "Welche Zahl hat 100 als Quadrat? Die Antwort ist 10.",
    t2_q: "Wie viel ist die Hypotenuse, wenn die Katheten 5 cm und 12 cm sind?",
    t2_q_a: "13 cm", t2_q_b: "17 cm", t2_q_c: "15 cm", t2_q_d: "169 cm",
    t3_title: "Darstellung im Graphen",
    t3_text: "Schau, wie die Länge der Hypotenuse (c) wächst, wenn eine Kathete (a) größer wird, während die andere (b) konstant bleibt!",
    t3_b1: "Das Wachstum ist nicht linear",
    t3_b2: "Die Form der Kurve zeigt die quadratische Beziehung",
    t3_b3: "Je größer die Basis, desto länger die Hypotenuse",
    t3_inst: "Schaue auf den Graphen! Wenn die Seite a 12 ist und b 5, wie viel ist die Hypotenuse (y)?",
    t3_h1: "5-12-13 ist ein bekanntes Zahlentripel.",
    t3_h2: "Finde den Wert 13 auf der y-Achse.",
    t3_q: "Stimmt es: Das Zahlentripel 3, 4, 5 bildet ein rechtwinkliges Dreieck?",
    t3_q_a: "Stimmt", t3_q_b: "Stimmt nicht",
  },
  en: {
    explorer_title: "Pythagorean Theorem",
    t1_title: "The Essence of the Theorem",
    t1_text: "In any right triangle, the sum of the squares of the two legs (a and b) equals the square of the hypotenuse (c). This is the foundation of geometry!",
    t1_b1: "True only for right triangles",
    t1_b2: "a² + b² = c²",
    t1_b3: "The hypotenuse (c) is always the longest side",
    t1_inst: "Use the slider! If a = 3 and b = 4, what is the sum of their squares (c²)?",
    t1_h1: "3² = 9 and 4² = 16. Add them!",
    t1_h2: "9 + 16 = 25. Set the slider to 25.",
    t1_q: "Which side is the hypotenuse (c) in the formula?",
    t1_q_a: "The side opposite the right angle", t1_q_b: "The shortest side", t1_q_c: "The horizontal side", t1_q_d: "Any side",
    t2_title: "Calculating the Missing Side",
    t2_text: "If you know two sides, you can calculate the third using the theorem. We substitute, add, then take the square root.",
    t2_b1: "Square the known sides",
    t2_b2: "Add them or subtract if you are looking for a leg",
    t2_b3: "Finally take the square root",
    t2_inst: "Calculate the hypotenuse: a=6, b=8. Step by step!",
    t2_step1: "Calculate the sum of squares (36 + 64 = ?)",
    t2_step2: "Take the square root of 100!",
    t2_h1: "6x6 = 36, 8x8 = 64. The sum is 100.",
    t2_h2: "Which number has 100 as its square? The answer is 10.",
    t2_q: "What is the hypotenuse if the legs are 5 cm and 12 cm?",
    t2_q_a: "13 cm", t2_q_b: "17 cm", t2_q_c: "15 cm", t2_q_d: "169 cm",
    t3_title: "Graphing the Relationship",
    t3_text: "Watch how the hypotenuse length (c) changes as one leg (a) increases while the other (b) stays constant!",
    t3_b1: "The growth is not linear",
    t3_b2: "The curve shape shows the quadratic relationship",
    t3_b3: "The larger the base, the longer the hypotenuse",
    t3_inst: "Look at the graph! If side a is 12 and b is 5, what is the hypotenuse (y)?",
    t3_h1: "5-12-13 is a well-known number triplet.",
    t3_h2: "Find the value 13 on the y-axis.",
    t3_q: "Is it true: The triplet 3, 4, 5 forms a right triangle?",
    t3_q_a: "True", t3_q_b: "False",
  },
  ro: {
    explorer_title: "Teorema lui Pitagora",
    t1_title: "Esența Teoremei",
    t1_text: "În orice triunghi dreptunghic, suma pătratelor celor două catete (a și b) este egală cu pătratul ipotenuzei (c). Aceasta este fundamentul geometriei!",
    t1_b1: "Adevărat doar pentru triunghiuri dreptunghice",
    t1_b2: "a² + b² = c²",
    t1_b3: "Ipotenuza (c) este întotdeauna cea mai lungă latură",
    t1_inst: "Folosește glisierul! Dacă a = 3 și b = 4, care este suma pătratelor lor (c²)?",
    t1_h1: "3² = 9 și 4² = 16. Adună-le!",
    t1_h2: "9 + 16 = 25. Setează glisierul la 25.",
    t1_q: "Care latură este ipotenuza (c) în formula?",
    t1_q_a: "Latura opusă unghiului drept", t1_q_b: "Cea mai scurtă latură", t1_q_c: "Latura orizontală", t1_q_d: "Orice latură",
    t2_title: "Calcularea Laturii Lipsă",
    t2_text: "Dacă cunoști două laturi, poți calcula a treia folosind teorema. Substituim, adunăm, apoi extragem rădăcina pătrată.",
    t2_b1: "Ridică la pătrat laturile cunoscute",
    t2_b2: "Adună-le sau scade dacă cauți o catetă",
    t2_b3: "În final extrage rădăcina pătrată",
    t2_inst: "Calculează ipotenuza: a=6, b=8. Pas cu pas!",
    t2_step1: "Calculează suma pătratelor (36 + 64 = ?)",
    t2_step2: "Extrage rădăcina pătrată din 100!",
    t2_h1: "6x6 = 36, 8x8 = 64. Suma este 100.",
    t2_h2: "Ce număr are 100 ca pătrat? Răspunsul este 10.",
    t2_q: "Care este ipotenuza dacă catetele sunt 5 cm și 12 cm?",
    t2_q_a: "13 cm", t2_q_b: "17 cm", t2_q_c: "15 cm", t2_q_d: "169 cm",
    t3_title: "Reprezentarea Grafică",
    t3_text: "Observă cum se schimbă lungimea ipotenuzei (c) pe măsură ce o catetă (a) crește, în timp ce cealaltă (b) rămâne constantă!",
    t3_b1: "Creșterea nu este liniară",
    t3_b2: "Forma curbei arată relația pătratică",
    t3_b3: "Cu cât mai mare baza, cu atât mai lungă ipotenuza",
    t3_inst: "Privește graficul! Dacă latura a este 12 și b este 5, care este ipotenuza (y)?",
    t3_h1: "5-12-13 este un triplet de numere cunoscut.",
    t3_h2: "Găsește valoarea 13 pe axa y.",
    t3_q: "Este adevărat: tripletul 3, 4, 5 formează un triunghi dreptunghic?",
    t3_q_a: "Adevărat", t3_q_b: "Fals",
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
      type: "ratio-slider",
      baseValue: 5,
      basePrice: 25,
      targetValue: 5,
      targetPrice: 25,
      unitName: "c",
      currency: "c²",
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
      equation: "6² + 8² = c²",
      steps: [
        { instruction: "t2_step1", choices: [80, 100, 120, 144], answer: 100, equation: "100 = c²" },
        { instruction: "t2_step2", choices: [8, 10, 12, 20], answer: 10, equation: "c = 10" }
      ],
      finalAnswer: 10,
      variable: "c",
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
        { x: 0, y: 5 },
        { x: 3, y: 5.8 },
        { x: 6, y: 7.8 },
        { x: 9, y: 10.3 },
        { x: 12, y: 13 }
      ],
      targetX: 12,
      targetY: 13,
      chartType: "line",
      xLabel: "a oldal",
      yLabel: "c oldal",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b"],
      answer: "t3_q_a",
    },
  },
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📐",
  topics: TOPICS,
  rounds: [],
};

const PythagorasExplorer7 = memo(function PythagorasExplorer7({
  color = "#2DD4BF",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="math_g7_pyth" color={color} lang={lang} onDone={onDone} />;
});

export default PythagorasExplorer7;
