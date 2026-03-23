"use client";
// FunctionExplorer8 — Linear Functions for Grade 8 (island i5)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK (Cyber-Slate precíziós stílus) ──────────────

const Topic1Svg = memo(({ labels }: { labels: Record<string, string> }) => (
  <svg width="100%" viewBox="0 0 240 160">
    <defs>
      <linearGradient id="funcGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" />
      </linearGradient>
    </defs>
    <rect width="240" height="160" fill="url(#funcGrad1)" rx="24" />
    <g transform="translate(120, 80)">
      {/* Koordinátarendszer */}
      <line x1="-90" y1="0" x2="90" y2="0" stroke="#94A3B8" strokeWidth="1" />
      <line x1="0" y1="-60" x2="0" y2="60" stroke="#94A3B8" strokeWidth="1" />
      {/* f(x) = x + 20 */}
      <line x1="-60" y1="40" x2="60" y2="-80" stroke="#8B5CF6" strokeWidth="3" />
      <circle cx="0" cy="-20" r="5" fill="#EC4899" />
      <text x="10" y="-25" fontSize="12" fontWeight="bold" fill="#EC4899">{labels.t1_svg_label}</text>
      <path d="M 20,-40 L 40,-40 L 40,-60" fill="none" stroke="#F472B6" strokeWidth="2" />
      <text x="50" y="-45" fontSize="10" fill="#F472B6">{labels.t1_svg_slope}</text>
    </g>
  </svg>
));

const Topic2Svg = memo(({ labels }: { labels: Record<string, string> }) => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#0F172A" rx="24" />
    <g transform="translate(120, 70)">
      <line x1="-80" y1="30" x2="80" y2="-30" stroke="#10B981" strokeWidth="3" />
      <text x="0" y="-40" fontSize="16" fontWeight="bold" fill="#34D399" textAnchor="middle">f(x) = mx + b</text>
      <text x="-50" y="45" fontSize="12" fill="#94A3B8" textAnchor="middle">{labels.t2_svg_increasing}</text>
      <text x="50" y="45" fontSize="12" fill="#94A3B8" textAnchor="middle">{labels.t2_svg_decreasing}</text>
    </g>
  </svg>
));

const Topic3Svg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#1E293B" rx="24" />
    <g transform="translate(120, 60)">
      <text x="0" y="-15" fontSize="14" fill="#A5B4FC" textAnchor="middle">A(1; 3) és B(2; 5)</text>
      <path d="M 0,-5 L 0,15" stroke="#6366F1" strokeWidth="2" markerEnd="url(#arrow)" />
      <text x="0" y="45" fontSize="20" fontWeight="black" fill="#818CF8" textAnchor="middle">m = (5-3)/(2-1) = 2</text>
    </g>
  </svg>
));

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Linear Functions",
    t1_title: "Slope and Y-Intercept",
    t1_text: "A linear function has the form f(x) = mx + b. The 'm' (slope) shows how much we move up/down for each unit we move right. The 'b' shows where the graph crosses the y-axis.",
    t1_b1: "m: positive means increasing, negative means decreasing",
    t1_b2: "b: the starting point on the y-axis (at x=0)",
    t1_b3: "The graph is always a straight line",
    t1_inst: "Look at the graph! What is the y-intercept (b) value?",
    t1_h1: "Find where the line crosses the vertical axis.",
    t1_h2: "The y value here is 20. Click on 20.",
    t1_svg_label: "b (y-intercept)",
    t1_svg_slope: "m (slope)",
    t1_q: "What does the 'm' parameter determine?",
    t1_q_a: "The slope", t1_q_b: "The shift", t1_q_c: "The line color", t1_q_d: "The zero",
    t2_title: "The Effect of Slope",
    t2_text: "Change the 'm' value! If m=0, the line is horizontal. If m is large, the line is steep. If negative, the function decreases.",
    t2_b1: "m = 1: 45-degree rise",
    t2_b2: "m = 0: constant function",
    t2_b3: "m = -2: steep decline",
    t2_inst: "Adjust the slope! How does the line become steeper?",
    t2_h1: "Increase the 'm' value on the slider.",
    t2_h2: "The larger the number, the steeper the line.",
    t2_svg_increasing: "m > 0: Increasing",
    t2_svg_decreasing: "m < 0: Decreasing",
    t2_q: "What is the line like when m = 0?",
    t2_q_a: "Horizontal", t2_q_b: "Vertical", t2_q_c: "Increasing", t2_q_d: "Does not exist",
    t3_title: "Equation from Two Points",
    t3_text: "If you know two points on the line, you can calculate the slope: m = (y2 - y1) / (x2 - x1). Then finding 'b' is easy.",
    t3_b1: "First calculate the slope (m)",
    t3_b2: "Substitute one point to find b",
    t3_b3: "Write the complete equation",
    t3_inst: "Calculate 'm' if A(1;3) and B(2;5)!",
    t3_step1: "Calculate the difference in y values: 5 - 3",
    t3_step2: "Calculate the difference in x values: 2 - 1",
    t3_h1: "m = 2 / 1 = 2.",
    t3_h2: "Choose the value 2.",
    t3_q: "What is the slope of the line through (1;2) and (3;6)?",
    t3_q_a: "2", t3_q_b: "4", t3_q_c: "1", t3_q_d: "3",
  },
  de: {
    explorer_title: "Lineare Funktionen",
    t1_title: "Steigung und y-Achsenabschnitt",
    t1_text: "Eine lineare Funktion hat die Form f(x) = mx + b. Das 'm' (Steigung) zeigt, wie viel wir pro Einheit nach rechts hoch/runter gehen. Das 'b' zeigt, wo der Graph die y-Achse schneidet.",
    t1_b1: "m: positiv = steigend, negativ = fallend",
    t1_b2: "b: der Startpunkt auf der y-Achse (bei x=0)",
    t1_b3: "Der Graph ist immer eine gerade Linie",
    t1_inst: "Schau auf den Graphen! Wie groß ist der y-Achsenabschnitt (b)?",
    t1_h1: "Finde, wo die Linie die vertikale Achse schneidet.",
    t1_h2: "Der y-Wert hier ist 20. Klick auf 20.",
    t1_svg_label: "b (y-Achsenabschnitt)",
    t1_svg_slope: "m (Steigung)",
    t1_q: "Was bestimmt der Parameter 'm'?",
    t1_q_a: "Die Steigung", t1_q_b: "Die Verschiebung", t1_q_c: "Die Linienfarbe", t1_q_d: "Die Nullstelle",
    t2_title: "Die Auswirkung der Steigung",
    t2_text: "Ändere den 'm'-Wert! Wenn m=0, ist die Linie waagerecht. Wenn m groß ist, ist die Linie steil. Wenn negativ, fällt die Funktion.",
    t2_b1: "m = 1: 45-Grad-Anstieg",
    t2_b2: "m = 0: konstante Funktion",
    t2_b3: "m = -2: steiler Abstieg",
    t2_inst: "Stelle die Steigung ein! Wie wird die Linie steiler?",
    t2_h1: "Erhöhe den 'm'-Wert am Schieber.",
    t2_h2: "Je größer die Zahl, desto steiler die Linie.",
    t2_svg_increasing: "m > 0: Wachsend",
    t2_svg_decreasing: "m < 0: Fallend",
    t2_q: "Wie ist die Linie, wenn m = 0?",
    t2_q_a: "Waagerecht", t2_q_b: "Senkrecht", t2_q_c: "Wachsend", t2_q_d: "Existiert nicht",
    t3_title: "Gleichung aus zwei Punkten",
    t3_text: "Wenn du zwei Punkte kennst, kannst du die Steigung berechnen: m = (y2 - y1) / (x2 - x1). Dann ist 'b' leicht zu finden.",
    t3_b1: "Berechne zuerst die Steigung (m)",
    t3_b2: "Setze einen Punkt ein um b zu finden",
    t3_b3: "Schreibe die komplette Gleichung",
    t3_inst: "Berechne 'm' wenn A(1;3) und B(2;5)!",
    t3_step1: "Berechne die y-Differenz: 5 - 3",
    t3_step2: "Berechne die x-Differenz: 2 - 1",
    t3_h1: "m = 2 / 1 = 2.",
    t3_h2: "Wähle den Wert 2.",
    t3_q: "Was ist die Steigung der Linie durch (1;2) und (3;6)?",
    t3_q_a: "2", t3_q_b: "4", t3_q_c: "1", t3_q_d: "3",
  },
  hu: {
    explorer_title: "Lineáris Függvények",
    t1_title: "Meredekség és Metszet",
    t1_text: "A lineáris függvény általános alakja f(x) = mx + b. Az 'm' (meredekség) azt mutatja, mennyit lépünk fel/le egy egységnyi jobbra lépéskor. A 'b' pedig azt, hol metszi a grafikon az y-tengelyt.",
    t1_b1: "m: ha pozitív növekszik, ha negatív csökken",
    t1_b2: "b: a kezdőpont az y-tengelyen (x=0-nál)",
    t1_b3: "A grafikon mindig egy egyenes",
    t1_inst: "Nézd a grafikont! Mennyi az y-tengelymetszet (b) értéke?",
    t1_h1: "Keresd meg azt a pontot, ahol az egyenes metszi a függőleges tengelyt.",
    t1_h2: "Az y érték itt 20. Koppints a 20-ra.",
    t1_q: "Mit határoz meg az 'm' paraméter?",
    t1_q_a: "A meredekséget", t1_q_b: "Az eltolást", t1_q_c: "A vonal színét", t1_q_d: "A nullahelyet",
    t2_title: "A meredekség hatása",
    t2_text: "Változtassuk az 'm' értékét! Ha m=0, az egyenes vízszintes. Ha m nagy, az egyenes meredek. Ha negatív, a függvény csökkenni fog.",
    t2_b1: "m = 1: 45 fokos emelkedés",
    t2_b2: "m = 0: konstans függvény",
    t2_b3: "m = -2: meredek süllyedés",
    t2_inst: "Állítsd be a meredekséget! Hogyan lesz meredekebb az egyenes?",
    t2_h1: "Növeld az 'm' értékét a csúszkán.",
    t2_h2: "Minél nagyobb a szám, annál meredekebb a vonal.",
    t2_q: "Milyen az egyenes, ha m = 0?",
    t2_q_a: "Vízszintes", t2_q_b: "Függőleges", t2_q_c: "Növekvő", t2_q_d: "Nem létezik",
    t3_title: "Egyenlet két pontból",
    t3_text: "Ha ismersz két pontot az egyenesen, ki tudod számolni a meredekséget: m = (y2 - y1) / (x2 - x1). Ezután a 'b' értéke is könnyen megadható.",
    t3_b1: "Először számold ki a meredekséget (m)",
    t3_b2: "Helyettesíts be az egyik pontot a b-hez",
    t3_b3: "Írd fel a teljes egyenletet",
    t3_inst: "Számold ki 'm' értékét, ha A(1;3) és B(2;5)!",
    t3_step1: "Számold ki az y-ok különbségét: 5 - 3",
    t3_step2: "Számold ki az x-ek különbségét: 2 - 1",
    t3_h1: "m = 2 / 1 = 2.",
    t3_h2: "Válaszd a 2-es értéket.",
    t3_q: "Mennyi a meredeksége az (1;2) és (3;6) pontokon átmenő egyenesnek?",
    t3_q_a: "2", t3_q_b: "4", t3_q_c: "1", t3_q_d: "3",
  },
  ro: {
    explorer_title: "Funcții Liniare",
    t1_title: "Panta și Intersecția cu Axa Y",
    t1_text: "O funcție liniară are forma f(x) = mx + b. 'm' (panta) arată cât de sus/jos ne deplasăm pentru fiecare unitate spre dreapta. 'b' arată unde graficul intersectează axa y.",
    t1_b1: "m: pozitiv = crescător, negativ = descrescător",
    t1_b2: "b: punctul de plecare pe axa y (la x=0)",
    t1_b3: "Graficul este întotdeauna o linie dreaptă",
    t1_inst: "Uita-te la grafic! Care este valoarea intersecției cu axa y (b)?",
    t1_h1: "Găsiți unde linia intersectează axa verticală.",
    t1_h2: "Valoarea y aici este 20. Clic pe 20.",
    t1_svg_label: "b (intersecție cu axa y)",
    t1_svg_slope: "m (panta)",
    t1_q: "Ce determină parametrul 'm'?",
    t1_q_a: "Panta", t1_q_b: "Deplasarea", t1_q_c: "Culoarea liniei", t1_q_d: "Zero",
    t2_title: "Efectul Pantei",
    t2_text: "Schimbă valoarea 'm'! Dacă m=0, linia este orizontală. Dacă m este mare, linia este abruptă. Dacă negativă, funcția scade.",
    t2_b1: "m = 1: creștere de 45 de grade",
    t2_b2: "m = 0: funcție constantă",
    t2_b3: "m = -2: scădere abruptă",
    t2_inst: "Ajustează panta! Cum devine linia mai abruptă?",
    t2_h1: "Crește valoarea 'm' pe glissor.",
    t2_h2: "Cu cât e mai mare numărul, cu atât mai abruptă e linia.",
    t2_svg_increasing: "m > 0: Crescător",
    t2_svg_decreasing: "m < 0: Descrescător",
    t2_q: "Cum este linia când m = 0?",
    t2_q_a: "Orizontală", t2_q_b: "Verticală", t2_q_c: "Crescătoare", t2_q_d: "Nu există",
    t3_title: "Ecuație din Două Puncte",
    t3_text: "Dacă cunoști două puncte pe linie, poți calcula panta: m = (y2 - y1) / (x2 - x1). Apoi găsirea 'b' e ușoară.",
    t3_b1: "Calculează mai întâi panta (m)",
    t3_b2: "Substituie un punct pentru a găsi b",
    t3_b3: "Scrie ecuația completă",
    t3_inst: "Calculează 'm' dacă A(1;3) și B(2;5)!",
    t3_step1: "Calculează diferența valorilor y: 5 - 3",
    t3_step2: "Calculează diferența valorilor x: 2 - 1",
    t3_h1: "m = 2 / 1 = 2.",
    t3_h2: "Alege valoarea 2.",
    t3_q: "Care este panta liniei prin (1;2) și (3;6)?",
    t3_q_a: "2", t3_q_b: "4", t3_q_c: "1", t3_q_d: "3",
  }
};

// ─── TOPIC DEFINÍCIÓK ────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: ({ labels }) => <Topic1Svg labels={labels} />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "graph-plotter",
      points: [
        { x: -2, y: 0 },
        { x: -1, y: 10 },
        { x: 0, y: 20 }, // b = 20
        { x: 1, y: 30 },
        { x: 2, y: 40 }
      ],
      targetX: 0,
      targetY: 20,
      chartType: "line",
      xLabel: "x",
      yLabel: "f(x)",
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
    svg: ({ labels }) => <Topic2Svg labels={labels} />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "ratio-slider",
      baseValue: 1, // m = 1
      basePrice: 45, // visual angle-like price
      targetValue: 3, // steeper
      targetPrice: 70, // visually steeper
      unitName: "meredekség (m)",
      currency: "hajlásszög",
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
      type: "equation-solver",
      equation: "m = (5 - 3) / (2 - 1)",
      steps: [
        { instruction: "t3_step1", choices: [1, 2, 3, 5], answer: 2, equation: "m = 2 / (2 - 1)" },
        { instruction: "t3_step2", choices: [1, 2, 0.5, 4], answer: 2, equation: "m = 2" }
      ],
      finalAnswer: 2,
      variable: "m",
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

const FunctionExplorer8 = memo(function FunctionExplorer8({
  color = "#8B5CF6",
  onDone,
  lang = "hu",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={8} explorerId="math_g8_functions" color={color} lang={lang} onDone={onDone} />;
});

export default FunctionExplorer8;
