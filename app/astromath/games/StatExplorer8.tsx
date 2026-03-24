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
  en: {
    explorer_title: "Data Analysis (Pro)",
    t1_title: "Box Plot",
    t1_text: "A box plot shows 5 key numbers about a dataset: minimum, lower quartile (Q1), median, upper quartile (Q3), and maximum. It reveals how data is distributed.",
    t1_b1: "The 'box' contains the middle 50% of data",
    t1_b2: "Box length is the interquartile range (IQR)",
    t1_b3: "The median divides the entire dataset",
    t1_inst: "Find the upper quartile (Q3)! If the box goes from 10 to 30, where is Q3?",
    t1_h1: "The right edge of the box marks Q3.",
    t1_h2: "Q3 is 30. Click on 30 on the number line.",
    t1_q: "What does the line inside the box show?",
    t1_q_a: "The median", t1_q_b: "The average", t1_q_c: "The maximum", t1_q_d: "The mode",
    t2_title: "Spread (Standard Deviation)",
    t2_text: "The average does not tell the whole story. Two classes may have an average of 3.0, but in one everyone got 3, in the other only 1 or 5. Spread measures average distance from the mean.",
    t2_b1: "Large spread: data is scattered",
    t2_b2: "Small spread: data clusters around the average",
    t2_b3: "Calculation is based on squared distances",
    t2_inst: "If average is 10 and a data point is 14, what is the distance from the average?",
    t2_step1: "Subtract average from data: 14 - 10",
    t2_step2: "That's the distance.",
    t2_h1: "14 - 10 = 4.",
    t2_h2: "The distance is 4. Choose 4.",
    t2_q: "What is the spread if all test scores were exactly 80?",
    t2_q_a: "Zero", t2_q_b: "Very large", t2_q_c: "Negative", t2_q_d: "80",
    t3_title: "Comparing Data",
    t3_text: "The main goal of statistics is making decisions. We often compare two or more groups of data on diagrams. Watch both the averages and how spread out the data is.",
    t3_b1: "Always compare on the same scale",
    t3_b2: "Look at the difference in averages",
    t3_b3: "Also notice the distribution (outliers)",
    t3_inst: "Read from the graph! What is the value of group B's blue (right) bar?",
    t3_h1: "Find the value for group B (x=2) on the graph.",
    t3_h2: "The value is 80. Click on 80.",
    t3_q: "Why is it dangerous to only compare averages?",
    t3_q_a: "Because spread (variation) can be completely different", t3_q_b: "Because average is always wrong", t3_q_c: "Because median is better", t3_q_d: "It is not dangerous",
  },
  de: {
    explorer_title: "Datenanalyse (Pro)",
    t1_title: "Boxplot",
    t1_text: "Ein Boxplot zeigt 5 Schlüsselzahlen eines Datensatzes: Minimum, unteres Quartil (Q1), Median, oberes Quartil (Q3) und Maximum. Es zeigt, wie die Daten verteilt sind.",
    t1_b1: "Die 'Box' enthält die mittleren 50% der Daten",
    t1_b2: "Box-Länge ist der Interquartilsabstand (IQR)",
    t1_b3: "Der Median teilt den gesamten Datensatz",
    t1_inst: "Finde das obere Quartil (Q3)! Wenn die Box von 10 bis 30 reicht, wo ist Q3?",
    t1_h1: "Der rechte Rand der Box markiert Q3.",
    t1_h2: "Q3 ist 30. Klick auf 30 auf der Zahlengeraden.",
    t1_q: "Was zeigt die Linie innerhalb der Box?",
    t1_q_a: "Den Median", t1_q_b: "Den Durchschnitt", t1_q_c: "Das Maximum", t1_q_d: "Den Modus",
    t2_title: "Streuung (Standardabweichung)",
    t2_text: "Der Durchschnitt sagt nicht alles. Zwei Klassen können einen Durchschnitt von 3,0 haben, aber in einer bekamen alle 3, in der anderen nur 1 oder 5. Streuung misst die durchschnittliche Entfernung vom Mittelwert.",
    t2_b1: "Große Streuung: Daten sind zerstreut",
    t2_b2: "Kleine Streuung: Daten clustern um den Durchschnitt",
    t2_b3: "Berechnung basiert auf quadrierten Abständen",
    t2_inst: "Wenn der Durchschnitt 10 ist und ein Datenpunkt 14, wie groß ist die Entfernung vom Durchschnitt?",
    t2_step1: "Durchschnitt von Datenpunkt subtrahieren: 14 - 10",
    t2_step2: "Das ist die Entfernung.",
    t2_h1: "14 - 10 = 4.",
    t2_h2: "Die Entfernung ist 4. Wähle 4.",
    t2_q: "Wie groß ist die Streuung, wenn alle Testergebnisse exakt 80 waren?",
    t2_q_a: "Null", t2_q_b: "Sehr groß", t2_q_c: "Negativ", t2_q_d: "80",
    t3_title: "Daten Vergleichen",
    t3_text: "Das Hauptziel von Statistik ist Entscheidungsfindung. Wir vergleichen oft zwei oder mehr Datengruppen auf Diagrammen. Achte auf Durchschnitte und wie verstreut die Daten sind.",
    t3_b1: "Immer auf der gleichen Skala vergleichen",
    t3_b2: "Auf Unterschied in Durchschnitten achten",
    t3_b3: "Auch die Verteilung beobachten (Ausreißer)",
    t3_inst: "Lies aus dem Graphen! Was ist der Wert des blauen (rechten) Balkens von Gruppe B?",
    t3_h1: "Finde den Wert für Gruppe B (x=2) im Graphen.",
    t3_h2: "Der Wert ist 80. Klick auf 80.",
    t3_q: "Warum ist es gefährlich, nur Durchschnitte zu vergleichen?",
    t3_q_a: "Weil die Streuung (Variation) völlig verschieden sein kann", t3_q_b: "Weil Durchschnitt immer falsch ist", t3_q_c: "Weil Median besser ist", t3_q_d: "Es ist nicht gefährlich",
  },
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
  },
  ro: {
    explorer_title: "Analiză de Date (Pro)",
    t1_title: "Grafic Cutie",
    t1_text: "Un grafic cutie arată 5 numere cheie ale unui set de date: minim, quartila inferioară (Q1), mediana, quartila superioară (Q3) și maxim. Relevă cum sunt distribuite datele.",
    t1_b1: "'Cutia' conține mijlocul 50% din date",
    t1_b2: "Lungimea cutiei este amplitudinea interquartilă (IQR)",
    t1_b3: "Mediana împarte întregul set de date",
    t1_inst: "Găsiți quartila superioară (Q3)! Dacă cutia merge de la 10 la 30, unde este Q3?",
    t1_h1: "Marginea dreaptă a cutiei marchează Q3.",
    t1_h2: "Q3 este 30. Clic pe 30 pe linia numerelor.",
    t1_q: "Ce arată linia din interiorul cutiei?",
    t1_q_a: "Mediana", t1_q_b: "Media", t1_q_c: "Maximul", t1_q_d: "Modul",
    t2_title: "Dispersie (Deviație Standard)",
    t2_text: "Media nu spune totul. Două clase pot avea o medie de 3,0, dar într-una toți au 3, în cealaltă doar 1 sau 5. Dispersia măsoară distanța medie de la medie.",
    t2_b1: "Dispersie mare: datele sunt împrăștiate",
    t2_b2: "Dispersie mică: datele se grupează în jurul mediei",
    t2_b3: "Calculul se bazează pe distanțe pătrate",
    t2_inst: "Dacă media este 10 și un punct de date este 14, care este distanța de la medie?",
    t2_step1: "Scade media din date: 14 - 10",
    t2_step2: "Aceea e distanța.",
    t2_h1: "14 - 10 = 4.",
    t2_h2: "Distanța este 4. Alege 4.",
    t2_q: "Care este dispersia dacă toate scorurile de test sunt exact 80?",
    t2_q_a: "Zero", t2_q_b: "Foarte mare", t2_q_c: "Negativ", t2_q_d: "80",
    t3_title: "Compararea Datelor",
    t3_text: "Scopul principal al statisticii este luarea deciziilor. Adesea comparăm două sau mai multe grupuri de date pe diagrame. Atenție la medii și la cât de răspândite sunt datele.",
    t3_b1: "Întotdeauna compară pe aceeași scală",
    t3_b2: "Privește diferența mediilor",
    t3_b3: "Observă și distribuția (valori aberante)",
    t3_inst: "Citește din grafic! Care este valoarea barei albastre (dreapta) a grupului B?",
    t3_h1: "Găsiți valoarea pentru grupul B (x=2) în grafic.",
    t3_h2: "Valoarea este 80. Clic pe 80.",
    t3_q: "De ce e periculos să compari doar mediile?",
    t3_q_a: "Pentru că dispersia (variația) poate fi complet diferită", t3_q_b: "Pentru că media e întotdeauna greșit", t3_q_c: "Pentru că mediana e mai bun", t3_q_d: "Nu e periculos",
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
