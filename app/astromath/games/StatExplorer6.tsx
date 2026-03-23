"use client";
// DataExplorer6 — Statistics & Data for Grade 6 (island i7)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="datGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#818CF8" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#datGrad1)" rx="16" />
      {/* Mean (Average) Visual */}
      <g transform="translate(120, 70)">
        <rect x="-60" y="-20" width="30" height="40" fill="#4F46E5" rx="4" />
        <rect x="-25" y="-10" width="30" height="30" fill="#4F46E5" rx="4" />
        <rect x="10" y="-30" width="30" height="50" fill="#4F46E5" rx="4" />
        <text x="-45" y="35" fontSize="10" fill="#4338CA" textAnchor="middle">4</text>
        <text x="-10" y="35" fontSize="10" fill="#4338CA" textAnchor="middle">3</text>
        <text x="25" y="35" fontSize="10" fill="#4338CA" textAnchor="middle">5</text>
        <path d="M 50,0 L 70,0" stroke="#4338CA" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="95" y="5" fontSize="16" fontWeight="900" fill="#312E81" textAnchor="middle">4</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="datGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#datGrad2)" rx="16" />
      {/* Median & Mode Visual */}
      <g transform="translate(40, 60)">
        {[2, 3, 3, 5, 7].map((val, i) => (
          <g key={i} transform={`translate(${i * 35}, 0)`}>
            <rect x="0" y={30 - val * 5} width="25" height={val * 5} fill={i === 2 ? "#D97706" : "#F59E0B"} rx="2" />
            <text x="12" y="45" fontSize="12" fontWeight="bold" fill="#92400E" textAnchor="middle">{val}</text>
          </g>
        ))}
        <path d="M 87,-5 L 87,5" stroke="#B45309" strokeWidth="1" markerEnd="url(#arrow)" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="datGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#datGrad3)" rx="16" />
      {/* Range Visual: Max - Min */}
      <g transform="translate(120, 70)">
        <text x="-60" y="0" fontSize="14" fontWeight="bold" fill="#059669" textAnchor="middle">Min: 12</text>
        <text x="60" y="0" fontSize="14" fontWeight="bold" fill="#059669" textAnchor="middle">Max: 45</text>
        <path d="M -40,0 L 40,0" stroke="#059669" strokeWidth="2" strokeDasharray="4 2" />
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Statistics & Data",
    t1_title: "The Mean (Average)",
    t1_text: "The mean is the 'fair share'. Add all the numbers together and divide by how many numbers there are. It's like evening out piles of blocks!",
    t1_b1: "Mean = Total Sum / Count",
    t1_b2: "It represents the central value",
    t1_b3: "Useful for grades or weather averages",
    t1_inst: "Find the mean! You have 3 piles: 10, 20, and 30. Balance the scale to find the average!",
    t1_h1: "Total sum: 10 + 20 + 30 = 60.",
    t1_h2: "Divide 60 by 3. The mean is 20.",
    t1_q: "What is the mean of 5, 10, and 15?",
    t1_q_a: "10",
    t1_q_b: "15",
    t1_q_c: "30",
    t1_q_d: "5",
    t2_title: "Median & Mode",
    t2_text: "The Median is the middle number when you line them up. The Mode is the number that appears most often (the most popular!).",
    t2_b1: "Median: Sort first, then pick the middle",
    t2_b2: "Mode: The most frequent value",
    t2_b3: "Range: The difference between Max and Min",
    t2_inst: "Find the median of [2, 8, 3, 5, 8]. Sort them first, then drag the middle block!",
    t2_h1: "Sorted list: 2, 3, 5, 8, 8.",
    t2_h2: "The middle value is 5. Drag 5 blocks.",
    t2_q: "In the set [4, 7, 4, 9, 2], what is the mode?",
    t2_q_a: "4",
    t2_q_b: "7",
    t2_q_c: "2",
    t2_q_d: "9",
    t3_title: "Reading Graphs",
    t3_text: "Graphs help us see patterns. A Bar Chart shows categories, while a Line Chart shows how things change over time.",
    t3_b1: "X-axis: categories or time",
    t3_b2: "Y-axis: frequency or amount",
    t3_b3: "Range = Highest value - Lowest value",
    t3_inst: "Look at the bar chart of fruit sales. How many apples (x=1) were sold?",
    t3_h1: "Find the bar at x=1.",
    t3_h2: "Look at the y-axis height. It's 15. Tap on 15.",
    t3_q: "If the max value is 50 and the min is 10, what is the range?",
    t3_q_a: "40",
    t3_q_b: "60",
    t3_q_c: "50",
    t3_q_d: "10",
  },
  hu: {
    explorer_title: "Adatok és Statisztika",
    t1_title: "Az átlag",
    t1_text: "Az átlag az 'igazságos elosztás'. Add össze az összes számot, majd oszd el annyival, ahány számot összeadtál. Olyan, mintha kiegyenlítenéd a kockatornyokat!",
    t1_b1: "Átlag = Összeg / Darabszám",
    t1_b2: "A középső, reprezentatív értéket mutatja",
    t1_b3: "Gyakori példa a jegyek átlaga",
    t1_inst: "Számold ki az átlagot! Van 3 oszlopod: 10, 20 és 30. Egyenlítsd ki a mérleget!",
    t1_h1: "Összeg: 10 + 20 + 30 = 60.",
    t1_h2: "60 osztva 3-mal az 20. Állítsd a mérleget 20-ra.",
    t1_q: "Mennyi az 5, 10 és 15 átlaga?",
    t1_q_a: "10",
    t1_q_b: "15",
    t1_q_c: "30",
    t1_q_d: "5",
    t2_title: "Medián és módusz",
    t2_text: "A medián a középső szám a sorban (ha sorba rendezted őket). A módusz pedig a leggyakoribb szám a halmazban (a legnépszerűbb!).",
    t2_b1: "Medián: Előbb rendezd sorba, majd válaszd a középsőt",
    t2_b2: "Módusz: A leggyakrabban előforduló érték",
    t2_b3: "Terjedelem: A legnagyobb és legkisebb különbsége",
    t2_inst: "Keresd meg a mediánt: [2, 8, 3, 5, 8]. Rendezd őket, és válaszd a középsőt!",
    t2_h1: "Sorba rendezve: 2, 3, 5, 8, 8.",
    t2_h2: "A középső érték az 5. Húzz be 5 blokkot.",
    t2_q: "A [4, 7, 4, 9, 2] halmazban melyik a módusz?",
    t2_q_a: "4",
    t2_q_b: "7",
    t2_q_c: "2",
    t2_q_d: "9",
    t3_title: "Adatok olvasása",
    t3_text: "A grafikonok segítenek látni az összefüggéseket. Az oszlopdiagram kategóriákat hasonlít össze, a vonaldiagram a változást mutatja.",
    t3_b1: "X-tengely: kategóriák vagy idő",
    t3_b2: "Y-tengely: mennyiség vagy gyakoriság",
    t3_b3: "Terjedelem = Maximum - Minimum",
    t3_inst: "Nézd a gyümölcs eladásokat az oszlopdiagramon! Hány alma (x=1) fogyott?",
    t3_h1: "Keresd az x=1 oszlopot.",
    t3_h2: "Nézd meg a magasságát az Y tengelyen. 15. Koppints a 15-re.",
    t3_q: "Ha a max érték 50, a min pedig 10, mennyi a terjedelem?",
    t3_q_a: "40",
    t3_q_b: "60",
    t3_q_c: "50",
    t3_q_d: "10",
  },
  de: {
    explorer_title: "Statistik & Daten",
    t1_title: "Der Durchschnitt",
    t1_text: "Der Durchschnitt ist 'gerechte Verteilung'. Addiere alle Zahlen und teile durch die Anzahl. Es ist wie das Ausgleichen von Würfeltürmen!",
    t1_b1: "Durchschnitt = Summe / Anzahl",
    t1_b2: "Es zeigt den Mittelwert",
    t1_b3: "Häufiges Beispiel: Schulnoten",
    t1_inst: "Berechne den Durchschnitt! Du hast 3 Stapel: 10, 20 und 30. Balanciere die Waage!",
    t1_h1: "Summe: 10 + 20 + 30 = 60.",
    t1_h2: "60 geteilt durch 3 ist 20. Stelle die Waage auf 20.",
    t1_q: "Wie ist der Durchschnitt von 5, 10 und 15?",
    t1_q_a: "10",
    t1_q_b: "15",
    t1_q_c: "30",
    t1_q_d: "5",
    t2_title: "Median & Modus",
    t2_text: "Der Median ist die mittlere Zahl, wenn man sie ordnet. Der Modus ist die am häufigsten auftretende Zahl (die beliebteste!).",
    t2_b1: "Median: Sortiere zuerst, wähle die Mitte",
    t2_b2: "Modus: Der häufigste Wert",
    t2_b3: "Spannweite: Unterschied zwischen Max und Min",
    t2_inst: "Finde den Median von [2, 8, 3, 5, 8]. Sortiere sie und wähle die mittlere!",
    t2_h1: "Sortiert: 2, 3, 5, 8, 8.",
    t2_h2: "Der mittlere Wert ist 5. Ziehe 5 Blöcke.",
    t2_q: "In der Menge [4, 7, 4, 9, 2], was ist der Modus?",
    t2_q_a: "4",
    t2_q_b: "7",
    t2_q_c: "2",
    t2_q_d: "9",
    t3_title: "Graphen lesen",
    t3_text: "Graphen helfen, Muster zu erkennen. Ein Balkendiagramm vergleicht Kategorien, ein Liniendiagramm zeigt zeitliche Änderungen.",
    t3_b1: "X-Achse: Kategorien oder Zeit",
    t3_b2: "Y-Achse: Menge oder Häufigkeit",
    t3_b3: "Spannweite = Max - Min",
    t3_inst: "Schau dir das Balkendiagramm der Obstverkäufe an. Wie viele Äpfel (x=1) wurden verkauft?",
    t3_h1: "Finde den Balken bei x=1.",
    t3_h2: "Schau die Höhe auf der Y-Achse. Es ist 15. Tippe auf 15.",
    t3_q: "Wenn der max-Wert 50 und der min-Wert 10 ist, wie groß ist die Spannweite?",
    t3_q_a: "40",
    t3_q_b: "60",
    t3_q_c: "50",
    t3_q_d: "10",
  },
  ro: {
    explorer_title: "Statistică & Date",
    t1_title: "Media (Medie)",
    t1_text: "Media este 'distribuția corectă'. Adună toate numerele și împarte la câte numere sunt. Este ca și cum ai echilibra turnuri de cuburi!",
    t1_b1: "Media = Suma / Numărul de valori",
    t1_b2: "Reprezintă valoarea centrală",
    t1_b3: "Exemplu frecvent: media notelor",
    t1_inst: "Calculează media! Ai 3 stive: 10, 20 și 30. Echilibrează balanța!",
    t1_h1: "Suma: 10 + 20 + 30 = 60.",
    t1_h2: "60 împărțit la 3 este 20. Setează balanța la 20.",
    t1_q: "Care este media de 5, 10 și 15?",
    t1_q_a: "10",
    t1_q_b: "15",
    t1_q_c: "30",
    t1_q_d: "5",
    t2_title: "Mediană & Modă",
    t2_text: "Mediana este numărul din mijloc când le ordonezi. Moda este numărul care apare cel mai des (cel mai popular!).",
    t2_b1: "Mediană: Sortează mai întâi, alege mijlocul",
    t2_b2: "Modă: Valoarea cea mai frecventă",
    t2_b3: "Amplitudine: Diferența între Max și Min",
    t2_inst: "Găsește mediana din [2, 8, 3, 5, 8]. Sortează-le și alege cea din mijloc!",
    t2_h1: "Sortate: 2, 3, 5, 8, 8.",
    t2_h2: "Valoarea din mijloc este 5. Trage 5 cuburi.",
    t2_q: "În mulțimea [4, 7, 4, 9, 2], care este moda?",
    t2_q_a: "4",
    t2_q_b: "7",
    t2_q_c: "2",
    t2_q_d: "9",
    t3_title: "Citirea Graficelor",
    t3_text: "Graficele ajută să vedem modele. Un grafic cu bare compară categorii, un grafic liniar arată cum se schimbă lucrurile în timp.",
    t3_b1: "Axa X: categorii sau timp",
    t3_b2: "Axa Y: cantitate sau frecvență",
    t3_b3: "Amplitudine = Max - Min",
    t3_inst: "Uită-te la graficul cu bare al vânzărilor de fructe. Câte mere (x=1) au fost vândute?",
    t3_h1: "Găsește bara la x=1.",
    t3_h2: "Verifică înălțimea pe axa Y. Este 15. Atinge 15.",
    t3_q: "Dacă valoarea max este 50 și min este 10, care este amplitudinea?",
    t3_q_a: "40",
    t3_q_b: "60",
    t3_q_c: "50",
    t3_q_d: "10",
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
      type: "balance-scale",
      leftWeight: 20, // Mean of 10, 20, 30
      rightInitial: 0,
      unitIcon: "📊",
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
      type: "block-drag",
      mode: "combine",
      groups: [2, 3], // Helping to get to 5 (the median)
      answer: 5,
      blockIcon: "📦",
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
        { x: 1, y: 15 }, // Apples
        { x: 2, y: 10 }, // Pears
        { x: 3, y: 25 }, // Bananas
        { x: 4, y: 5 }   // Plums
      ],
      targetX: 1,
      targetY: 15,
      chartType: "bar",
      xLabel: "Fruit",
      yLabel: "Sales",
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
  icon: "📊",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const DataExplorer6 = memo(function DataExplorer6({
  color = "#6366F1",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="math_g6_data" color={color} lang={lang} onDone={onDone} />;
});

export default DataExplorer6;
