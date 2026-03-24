"use client";
// StatExplorer7 — Advanced Statistics for Grade 7 (island i8)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Profi, analitikai stílus) ──────────────────

const Topic1Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="statGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.05" />
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#statGrad1)" rx="20" />
    <g transform="translate(40, 120)">
      <line x1="0" y1="0" x2="160" y2="0" stroke="#4338CA" strokeWidth="2" />
      <line x1="0" y1="0" x2="0" y2="-100" stroke="#4338CA" strokeWidth="2" />
      <rect x="10" y="-40" width="20" height="40" fill="#6366F1" rx="2" />
      <rect x="40" y="-70" width="20" height="70" fill="#6366F1" rx="2" />
      <rect x="70" y="-30" width="20" height="30" fill="#6366F1" rx="2" />
      <rect x="100" y="-90" width="20" height="90" fill="#4F46E5" rx="2" />
      <text x="110" y="-100" fontSize="10" fontWeight="bold" fill="#312E81" textAnchor="middle">Max</text>
    </g>
  </svg>
));

const Topic2Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#EEF2FF" rx="20" />
    <g transform="translate(120, 70)">
      <text x="0" y="-20" fontSize="14" fill="#3730A3" textAnchor="middle">Számtani közép</text>
      <text x="0" y="15" fontSize="22" fontWeight="black" fill="#4338CA" textAnchor="middle">x̄ = Σx / n</text>
      <path d="M -60,25 L 60,25" stroke="#6366F1" strokeWidth="2" strokeDasharray="4 2" />
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#F5F3FF" rx="20" />
    <g transform="translate(40, 110)">
      <path d="M 0,0 L 40,-30 L 80,-20 L 120,-70 L 160,-50" fill="none" stroke="#8B5CF6" strokeWidth="3" />
      <circle cx="120" cy="-70" r="4" fill="#7C3AED" />
      <text x="120" y="-85" fontSize="10" fontWeight="bold" fill="#5B21B6" textAnchor="middle">Trend</text>
      <line x1="0" y1="0" x2="160" y2="0" stroke="#C4B5FD" strokeWidth="1" />
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Statisztikai Elemzés",
    t1_title: "Adatok leolvasása",
    t1_text: "A statisztika első lépése az adatok pontos leolvasása a grafikonokról. Az oszlopdiagram segít összehasonlítani különböző csoportok értékeit.",
    t1_b1: "Az oszlop magassága jelzi az értéket",
    t1_b2: "Az X tengelyen a kategóriák vannak",
    t1_b3: "Az Y tengelyen a gyakoriság látható",
    t1_inst: "Nézd meg a grafikonon! Hány egység tartozik a 4. kategóriához (x=4)?",
    t1_h1: "Keresd meg a negyedik oszlopot.",
    t1_h2: "Az értéke 90. Koppints a 90-es számra.",
    t1_q: "Melyik oszlop a legmagasabb a diagramon?",
    t1_q_a: "A 4. oszlop", t1_q_b: "Az 1. oszlop", t1_q_c: "A 2. oszlop", t1_q_d: "A 3. oszlop",
    t2_title: "Összetett átlag",
    t2_text: "Az átlag kiszámításához összeadjuk az összes adatot, és elosztjuk az adatok számával. Ez megmutatja a halmaz központi értékét.",
    t2_b1: "Összeadás, majd osztás",
    t2_b2: "Kiszűri az egyedi kiugrásokat",
    t2_b3: "Jele: x-vonás",
    t2_inst: "Számold ki az átlagot: 10, 20, 30, 40! Lépésről lépésre!",
    t2_step1: "Add össze a négy számot (10+20+30+40 = ?)",
    t2_step2: "Oszd el a 100-at 4-gyel!",
    t2_h1: "Az összeg 100. Ezt kell elosztanod 4 felé.",
    t2_h2: "Az átlag 25 lesz.",
    t2_q: "Mennyi a számtani közepe a 4, 8, 12 számoknak?",
    t2_q_a: "8", t2_q_b: "24", t2_q_c: "6", t2_q_d: "10",
    t3_title: "Trendek és változások",
    t3_text: "A vonaldiagram a legjobb eszköz a változások követésére, például az idő múlásával. Segít észrevenni a trendeket.",
    t3_b1: "A pontok közötti vonal mutatja az irányt",
    t3_b2: "Emelkedő vonal jelent növekedést",
    t3_b3: "Süllyedő vonal jelent csökkenést",
    t3_inst: "Keresd meg a csúcspontot! Melyik x értéknél a legmagasabb az y a vonaldiagramon?",
    t3_h1: "Keresd a legmagasabb pontot a töröttvonalon.",
    t3_h2: "Ez az x=3 pontnál van. Koppints a 3-asra.",
    t3_q: "Mire használjuk leggyakrabban a vonaldiagramot?",
    t3_q_a: "Időbeli változások szemléltetésére", t3_q_b: "Két fix szám összeadására", t3_q_c: "Színek összehasonlítására", t3_q_d: "Körök rajzolására",
  },
  de: {
    explorer_title: "Statistische Analyse",
    t1_title: "Daten ablesen",
    t1_text: "Der erste Schritt in der Statistik ist das genaue Ablesen von Daten aus Grafiken. Ein Balkendiagramm hilft, Werte verschiedener Gruppen zu vergleichen.",
    t1_b1: "Die Höhe des Balkens zeigt den Wert",
    t1_b2: "Auf der X-Achse sind die Kategorien",
    t1_b3: "Auf der Y-Achse ist die Häufigkeit sichtbar",
    t1_inst: "Schau auf den Graphen! Wie viele Einheiten gehören zur 4. Kategorie (x=4)?",
    t1_h1: "Finde den vierten Balken.",
    t1_h2: "Sein Wert ist 90. Tippe auf die 90.",
    t1_q: "Welcher Balken ist der höchste im Diagramm?",
    t1_q_a: "Der 4. Balken", t1_q_b: "Der 1. Balken", t1_q_c: "Der 2. Balken", t1_q_d: "Der 3. Balken",
    t2_title: "Arithmetischer Durchschnitt",
    t2_text: "Um den Durchschnitt zu berechnen, addieren wir alle Daten und dividieren durch die Anzahl der Daten. Dies zeigt den zentralen Wert der Menge.",
    t2_b1: "Addieren, dann dividieren",
    t2_b2: "Filtert Ausreißer heraus",
    t2_b3: "Zeichen: x-Strich",
    t2_inst: "Berechne den Durchschnitt: 10, 20, 30, 40! Schritt für Schritt!",
    t2_step1: "Addiere die vier Zahlen (10+20+30+40 = ?)",
    t2_step2: "Teile 100 durch 4!",
    t2_h1: "Die Summe ist 100. Du musst sie durch 4 teilen.",
    t2_h2: "Der Durchschnitt wird 25 sein.",
    t2_q: "Was ist der Durchschnitt der Zahlen 4, 8, 12?",
    t2_q_a: "8", t2_q_b: "24", t2_q_c: "6", t2_q_d: "10",
    t3_title: "Trends und Veränderungen",
    t3_text: "Ein Liniendiagramm ist das beste Werkzeug, um Veränderungen zu verfolgen, zum Beispiel im Laufe der Zeit. Es hilft, Trends zu erkennen.",
    t3_b1: "Die Linie zwischen den Punkten zeigt die Richtung",
    t3_b2: "Steigende Linie bedeutet Wachstum",
    t3_b3: "Fallende Linie bedeutet Rückgang",
    t3_inst: "Finde den höchsten Punkt! Bei welchem x-Wert ist y im Liniendiagramm am höchsten?",
    t3_h1: "Finde den höchsten Punkt auf der gestrichelten Linie.",
    t3_h2: "Es ist beim Punkt x=3. Tippe auf die 3.",
    t3_q: "Wofür verwenden wir am häufigsten ein Liniendiagramm?",
    t3_q_a: "Um zeitliche Veränderungen zu zeigen", t3_q_b: "Um zwei feste Zahlen zu addieren", t3_q_c: "Um Farben zu vergleichen", t3_q_d: "Um Kreise zu zeichnen",
  },
  en: {
    explorer_title: "Statistical Analysis",
    t1_title: "Reading Data",
    t1_text: "The first step in statistics is to read data accurately from graphs. A bar chart helps compare values of different groups.",
    t1_b1: "The height of the bar shows the value",
    t1_b2: "On the X-axis are the categories",
    t1_b3: "On the Y-axis is the frequency",
    t1_inst: "Look at the graph! How many units belong to the 4th category (x=4)?",
    t1_h1: "Find the fourth bar.",
    t1_h2: "Its value is 90. Tap on 90.",
    t1_q: "Which bar is the tallest in the diagram?",
    t1_q_a: "The 4th bar", t1_q_b: "The 1st bar", t1_q_c: "The 2nd bar", t1_q_d: "The 3rd bar",
    t2_title: "Arithmetic Mean",
    t2_text: "To calculate the average, we add all the data and divide by the number of data points. This shows the central value of the set.",
    t2_b1: "Add, then divide",
    t2_b2: "Filters out outliers",
    t2_b3: "Symbol: x-bar",
    t2_inst: "Calculate the average: 10, 20, 30, 40! Step by step!",
    t2_step1: "Add the four numbers (10+20+30+40 = ?)",
    t2_step2: "Divide 100 by 4!",
    t2_h1: "The sum is 100. You need to divide it by 4.",
    t2_h2: "The average will be 25.",
    t2_q: "What is the average of 4, 8, 12?",
    t2_q_a: "8", t2_q_b: "24", t2_q_c: "6", t2_q_d: "10",
    t3_title: "Trends and Changes",
    t3_text: "A line chart is the best tool for tracking changes over time. It helps spot trends.",
    t3_b1: "The line between points shows direction",
    t3_b2: "Rising line means growth",
    t3_b3: "Falling line means decline",
    t3_inst: "Find the highest point! At which x value is y highest in the line graph?",
    t3_h1: "Find the highest point on the broken line.",
    t3_h2: "It is at the point x=3. Tap on 3.",
    t3_q: "What is the most common use of a line graph?",
    t3_q_a: "To show changes over time", t3_q_b: "To add two fixed numbers", t3_q_c: "To compare colors", t3_q_d: "To draw circles",
  },
  ro: {
    explorer_title: "Analiza Statistică",
    t1_title: "Citirea Datelor",
    t1_text: "Primul pas în statistică este citirea precisă a datelor din grafice. Un grafic cu bare ajută la compararea valorilor diferitelor grupuri.",
    t1_b1: "Înălțimea barei arată valoarea",
    t1_b2: "Pe axa X sunt categoriile",
    t1_b3: "Pe axa Y este frecvența",
    t1_inst: "Privește graficul! Câte unități aparțin categoriei a 4-a (x=4)?",
    t1_h1: "Găsește a patra bară.",
    t1_h2: "Valoarea sa este 90. Apasă pe 90.",
    t1_q: "Care bară este cea mai înaltă din diagramă?",
    t1_q_a: "A 4-a bară", t1_q_b: "Prima bară", t1_q_c: "A 2-a bară", t1_q_d: "A 3-a bară",
    t2_title: "Media Aritmetică",
    t2_text: "Pentru a calcula media, adunăm toate datele și împărțim la numărul de date. Aceasta arată valoarea centrală a setului.",
    t2_b1: "Adunare, apoi împărțire",
    t2_b2: "Filtrează valorile extreme",
    t2_b3: "Simbol: x-bară",
    t2_inst: "Calculează media: 10, 20, 30, 40! Pas cu pas!",
    t2_step1: "Adună patru numere (10+20+30+40 = ?)",
    t2_step2: "Împarte 100 la 4!",
    t2_h1: "Suma este 100. Trebuie să o împarți la 4.",
    t2_h2: "Media va fi 25.",
    t2_q: "Care este media numerelor 4, 8, 12?",
    t2_q_a: "8", t2_q_b: "24", t2_q_c: "6", t2_q_d: "10",
    t3_title: "Tendințe și Schimbări",
    t3_text: "Un grafic cu linii este cel mai bun instrument pentru urmărirea schimbărilor în timp. Ajută la identificarea tendințelor.",
    t3_b1: "Linia dintre puncte arată direcția",
    t3_b2: "Linia ascendentă înseamnă creștere",
    t3_b3: "Linia descendentă înseamnă scădere",
    t3_inst: "Găsește punctul cel mai înalt! La care valoare x este y cea mai mare în graficul cu linii?",
    t3_h1: "Găsește punctul cel mai înalt pe linia întreruptă.",
    t3_h2: "Este la punctul x=3. Apasă pe 3.",
    t3_q: "Care este cel mai frecvent uz al unui grafic cu linii?",
    t3_q_a: "Pentru a arăta schimbările în timp", t3_q_b: "Pentru a aduna două numere fixe", t3_q_c: "Pentru a compara culori", t3_q_d: "Pentru a desena cercuri",
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
      type: "graph-plotter",
      points: [
        { x: 1, y: 40 },
        { x: 2, y: 70 },
        { x: 3, y: 30 },
        { x: 4, y: 90 }
      ],
      targetX: 4,
      targetY: 90,
      chartType: "bar",
      xLabel: "Kategória",
      yLabel: "Érték",
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
      equation: "(10+20+30+40) / 4 = x̄",
      steps: [
        { instruction: "t2_step1", choices: [80, 100, 120, 150], answer: 100, equation: "100 / 4 = x̄" },
        { instruction: "t2_step2", choices: [20, 25, 30, 40], answer: 25, equation: "x̄ = 25" }
      ],
      finalAnswer: 25,
      variable: "Átlag",
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
        { x: 0, y: 10 },
        { x: 1, y: 30 },
        { x: 2, y: 25 },
        { x: 3, y: 50 },
        { x: 4, y: 40 }
      ],
      targetX: 3,
      targetY: 50,
      chartType: "line",
      xLabel: "Idő",
      yLabel: "Mért érték",
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
  icon: "📊",
  topics: TOPICS,
  rounds: [],
};

const StatExplorer7 = memo(function StatExplorer7({
  color = "#4F46E5",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={7} explorerId="math_g7_stats" color={color} lang={lang} onDone={onDone} />;
});

export default StatExplorer7;
