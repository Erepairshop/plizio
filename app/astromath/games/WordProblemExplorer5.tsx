"use client";
// WordProblemExplorer5 — Word Problems & Logic for Grade 5 (island i8)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="wpGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#wpGrad1)" rx="16" />
      {/* Multi-step problem: Buying items and getting change */}
      <g transform="translate(40, 40)">
        {/* Books purchased */}
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="30" height="40" fill="#D97706" rx="2" />
          <text x="15" y="25" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">15$</text>
        </g>
        <g transform="translate(35, 0)">
          <rect x="0" y="0" width="30" height="40" fill="#D97706" rx="2" />
          <text x="15" y="25" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">15$</text>
        </g>
        <g transform="translate(70, 0)">
          <rect x="0" y="0" width="30" height="40" fill="#D97706" rx="2" />
          <text x="15" y="25" fontSize="12" fill="white" textAnchor="middle" fontWeight="bold">15$</text>
        </g>
        
        {/* Payment and Change */}
        <text x="130" y="25" fontSize="24" fontWeight="bold" fill="#B45309">→</text>
        <circle cx="170" cy="20" r="18" fill="#FCD34D" stroke="#B45309" strokeWidth="2" />
        <text x="170" y="25" fontSize="14" fontWeight="bold" fill="#92400E" textAnchor="middle">50$</text>
      </g>
      <text x="120" y="110" fontSize="14" fontWeight="bold" fill="#B45309" textAnchor="middle">3 × 15 = 45  →  50 - 45 = ?</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="wpGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#wpGrad2)" rx="16" />
      {/* Interpreting Remainders: 22 students, 4 per car */}
      <g transform="translate(30, 40)">
        {/* Cars */}
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(${i * 35}, 0)`}>
            <rect x="0" y="10" width="25" height="15" fill="#7C3AED" rx="4" />
            <circle cx="5" cy="25" r="4" fill="#4C1D95" />
            <circle cx="20" cy="25" r="4" fill="#4C1D95" />
            <text x="12" y="5" fontSize="10" fill="#5B21B6" textAnchor="middle">4</text>
          </g>
        ))}
        {/* Leftover students needing one more car */}
        <g transform="translate(175, 10)">
          <circle cx="5" cy="5" r="4" fill="#C4B5FD" />
          <circle cx="15" cy="5" r="4" fill="#C4B5FD" />
          <text x="10" y="25" fontSize="10" fontWeight="bold" fill="#5B21B6" textAnchor="middle">+1 car</text>
        </g>
      </g>
      <text x="120" y="110" fontSize="14" fontWeight="bold" fill="#5B21B6" textAnchor="middle">22 ÷ 4 = 5 (marad 2) → 6 autó kell!</text>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="wpGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#wpGrad3)" rx="16" />
      {/* Mean / Average bar chart */}
      <g transform="translate(30, 25)">
        {/* Bars representing test scores */}
        {[70, 90, 80, 60].map((val, i) => (
          <g key={i} transform={`translate(${i * 42}, 0)`}>
            <rect x="0" y={90 - val * 0.8} width="30" height={val * 0.8} fill="#059669" rx="3" opacity={0.7 + i * 0.05} />
            <text x="15" y={85 - val * 0.8} fontSize="10" fontWeight="bold" fill="#065F46" textAnchor="middle">{val}</text>
          </g>
        ))}
        {/* Average line */}
        <line x1="0" y1={90 - 75 * 0.8} x2="168" y2={90 - 75 * 0.8} stroke="#047857" strokeWidth="2" strokeDasharray="6 3" />
        <text x="180" y={90 - 75 * 0.8 + 4} fontSize="12" fontWeight="900" fill="#047857">75</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Word Problems Explorer",
    t1_title: "Multi-Step Problems",
    t1_text: "Some problems need more than one step. If you buy 3 books for 15 dollars each and pay with a 50 dollar bill, first calculate the total cost, then subtract to find your change!",
    t1_b1: "Step 1: 3 × 15 = 45 (Total Cost)",
    t1_b2: "Step 2: 50 - 45 = 5 (Change)",
    t1_b3: "Read the question carefully to spot all steps",
    t1_inst: "Balance the scale! Left is the 50$ you paid. Right is the 45$ cost. Add weights to find the change!",
    t1_h1: "The cost is 45, but you gave 50.",
    t1_h2: "You need 5 more on the right side to balance it.",
    t1_q: "You buy 4 toys for 8 coins each. You pay with 40 coins. What is your change?",
    t1_q_a: "6",
    t1_q_b: "8",
    t1_q_c: "10",
    t1_q_d: "12",
    t2_title: "Interpreting Remainders",
    t2_text: "In the real world, remainders change the answer. If 22 students go on a trip and each car holds 4 students, 22 ÷ 4 = 5 remainder 2. Those 2 students still need a car, so you need 6 cars in total!",
    t2_b1: "Sometimes round up (ordering cars/boxes)",
    t2_b2: "Sometimes ignore it (buying items with exact money)",
    t2_b3: "Think about what the remainder represents",
    t2_inst: "Find the next multiple of 4 after 22 on the number line to see how many seats are needed in total!",
    t2_h1: "You need enough seats for 22 kids. 20 is not enough.",
    t2_h2: "Tap 24 (which means 6 cars of 4).",
    t2_q: "You have 25 apples. Each box holds 6 apples. How many boxes do you need to pack ALL apples?",
    t2_q_a: "4",
    t2_q_b: "5",
    t2_q_c: "6",
    t2_q_d: "3",
    t3_title: "Mean (Average)",
    t3_text: "The mean is the average value. Add all the numbers together, then divide by how many numbers there are. It tells you what each person would get if everything was shared equally.",
    t3_b1: "Mean = Sum of all values / Count",
    t3_b2: "Example: (70 + 90 + 80 + 60) / 4 = 75",
    t3_b3: "The mean helps summarize data with one number",
    t3_inst: "Find the mean of 4 test scores: 70, 90, 80, 60. Balance the scale to the average!",
    t3_h1: "First add: 70 + 90 + 80 + 60 = 300.",
    t3_h2: "Then divide by 4: 300 / 4 = 75. Add weights to reach 75.",
    t3_q: "What is the mean of 10, 20, and 30?",
    t3_q_a: "20",
    t3_q_b: "30",
    t3_q_c: "15",
    t3_q_d: "60",
  },
  de: {
    explorer_title: "Sachaufgaben Entdecker",
    t1_title: "Mehrschrittige Aufgaben",
    t1_text: "Manche Aufgaben erfordern mehrere Schritte. Wenn du 3 Bücher für je 15 Euro kaufst und mit 50 Euro zahlst: Berechne erst die Kosten, dann ziehe sie ab, um dein Rückgeld zu finden!",
    t1_b1: "Schritt 1: 3 × 15 = 45 (Kosten)",
    t1_b2: "Schritt 2: 50 - 45 = 5 (Rückgeld)",
    t1_b3: "Lies genau, um alle Schritte zu erkennen",
    t1_inst: "Gleiche die Waage aus! Links sind die 50€, rechts die 45€ Kosten. Finde das Rückgeld!",
    t1_h1: "Die Kosten sind 45, aber du hast 50 gegeben.",
    t1_h2: "Du brauchst 5 mehr auf der rechten Seite.",
    t1_q: "Du kaufst 4 Spielzeuge für je 8 Münzen und zahlst mit 40. Wie viel Rückgeld bekommst du?",
    t1_q_a: "6",
    t1_q_b: "8",
    t1_q_c: "10",
    t1_q_d: "12",
    t2_title: "Restwerte richtig deuten",
    t2_text: "In der echten Welt verändert der Rest die Antwort! Wenn 22 Schüler 4er-Autos brauchen: 22 ÷ 4 = 5 Rest 2. Diese 2 brauchen auch ein Auto, also brauchst du 6 Autos!",
    t2_b1: "Manchmal aufrunden (Autos/Boxen bestellen)",
    t2_b2: "Manchmal ignorieren (Sachen passend kaufen)",
    t2_b3: "Überlege, was der Rest bedeutet",
    t2_inst: "Finde das nächste Vielfache von 4 nach 22 auf dem Zahlenstrahl (für die benötigten Sitzplätze)!",
    t2_h1: "20 Plätze reichen nicht für 22 Kinder.",
    t2_h2: "Tippe auf 24 (das bedeutet 6 Autos).",
    t2_q: "Du hast 25 Äpfel. Eine Box fasst 6. Wie viele Boxen brauchst du für ALLE Äpfel?",
    t2_q_a: "4",
    t2_q_b: "5",
    t2_q_c: "6",
    t2_q_d: "3",
    t3_title: "Durchschnitt (Mittelwert)",
    t3_text: "Der Durchschnitt ist der Mittelwert. Addiere alle Zahlen und teile durch die Anzahl. So siehst du, was jeder bekommen würde, wenn alles gleichmäßig verteilt wäre.",
    t3_b1: "Durchschnitt = Summe aller Werte / Anzahl",
    t3_b2: "Beispiel: (70 + 90 + 80 + 60) / 4 = 75",
    t3_b3: "Der Durchschnitt fasst Daten in einer Zahl zusammen",
    t3_inst: "Finde den Durchschnitt von 4 Testnoten: 70, 90, 80, 60. Balanciere die Waage!",
    t3_h1: "Zuerst addieren: 70 + 90 + 80 + 60 = 300.",
    t3_h2: "Dann durch 4 teilen: 300 / 4 = 75. Lege Gewichte bis 75.",
    t3_q: "Wie ist der Durchschnitt von 10, 20 und 30?",
    t3_q_a: "20",
    t3_q_b: "30",
    t3_q_c: "15",
    t3_q_d: "60",
  },
  hu: {
    explorer_title: "Szöveges feladatok",
    t1_title: "Többlépéses feladatok",
    t1_text: "Néhány feladat több lépésből áll. Ha veszel 3 könyvet 15 dollárért, és egy 50-essel fizetsz: először számold ki a végösszeget, majd vond ki az 50-ből a visszajáróért!",
    t1_b1: "1. lépés: 3 × 15 = 45 (Végösszeg)",
    t1_b2: "2. lépés: 50 - 45 = 5 (Visszajáró)",
    t1_b3: "Olvasd el figyelmesen a kérdést",
    t1_inst: "Egyenlítsd ki a mérleget! Bal oldalon az 50-es van, jobb oldalon a 45-ös számla. Mennyi a visszajáró?",
    t1_h1: "A számla 45, de te 50-et adtál.",
    t1_h2: "Adj hozzá 5-öt a jobb oldalhoz.",
    t1_q: "Veszel 4 játékot darabonként 8 érméért. 40 érmével fizetsz. Mennyi a visszajáró?",
    t1_q_a: "6",
    t1_q_b: "8",
    t1_q_c: "10",
    t1_q_d: "12",
    t2_title: "A maradék értelmezése",
    t2_text: "A való életben a maradék megváltoztatja a választ! Ha 22 diák utazik 4 fős autókban: 22 ÷ 4 = 5 marad a 2. A 2 diáknak is kell autó, tehát 6 autóra van szükség!",
    t2_b1: "Néha felfelé kerekítünk (autók/dobozok rendelése)",
    t2_b2: "Néha figyelmen kívül hagyjuk (ha csak teljeset vehetünk)",
    t2_b3: "Gondold át, mit jelent a maradék a valóságban",
    t2_inst: "Keresd meg a 4 következő többszörösét a 22 után a számegyenesen (összes szükséges ülőhely)!",
    t2_h1: "A 20 ülőhely nem elég a 22 gyereknek.",
    t2_h2: "Koppints a 24-re (ez jelent 6 db autót).",
    t2_q: "Van 25 almád. Egy dobozba 6 fér. Hány doboz kell, hogy AZ ÖSSZES almát elpakold?",
    t2_q_a: "4",
    t2_q_b: "5",
    t2_q_c: "6",
    t2_q_d: "3",
    t3_title: "Átlag (Középérték)",
    t3_text: "Az átlag megmutatja az adatok középső értékét. Add össze az összes számot, aztán oszd el a darabszámmal. Így kiderül, mennyit kapna mindenki, ha egyenlően osztanánk el.",
    t3_b1: "Átlag = Összeg / Darabszám",
    t3_b2: "Példa: (70 + 90 + 80 + 60) / 4 = 75",
    t3_b3: "Az átlag egyetlen számmal foglalja össze az adatokat",
    t3_inst: "Számold ki 4 teszteredmény átlagát: 70, 90, 80, 60. Egyenlítsd ki a mérleget!",
    t3_h1: "Először add össze: 70 + 90 + 80 + 60 = 300.",
    t3_h2: "Majd oszd el 4-gyel: 300 / 4 = 75. Tégy rá súlyokat 75-ig.",
    t3_q: "Mennyi a 10, 20 és 30 átlaga?",
    t3_q_a: "20",
    t3_q_b: "30",
    t3_q_c: "15",
    t3_q_d: "60",
  },
  ro: {
    explorer_title: "Probleme cu Text",
    t1_title: "Probleme cu mai mulți pași",
    t1_text: "Unele probleme necesită mai mulți pași. Dacă cumperi 3 cărți la 15 dolari bucata și plătești cu 50: calculează întâi costul, apoi scade-l pentru rest!",
    t1_b1: "Pasul 1: 3 × 15 = 45 (Cost total)",
    t1_b2: "Pasul 2: 50 - 45 = 5 (Rest)",
    t1_b3: "Citește cu atenție pentru a vedea toți pașii",
    t1_inst: "Echilibrează balanța! Stânga este bancnota de 50. Dreapta e costul de 45. Adaugă restul!",
    t1_h1: "Costul este 45, dar ai dat 50.",
    t1_h2: "Mai ai nevoie de 5 pe dreapta pentru a echilibra.",
    t1_q: "Cumperi 4 jucării cu 8 monede fiecare. Plătești cu 40. Care este restul tău?",
    t1_q_a: "6",
    t1_q_b: "8",
    t1_q_c: "10",
    t1_q_d: "12",
    t2_title: "Interpretarea Restului",
    t2_text: "În viața reală, restul schimbă răspunsul! Dacă 22 de elevi merg în mașini de 4 locuri: 22 ÷ 4 = 5 rest 2. Cei 2 elevi au nevoie de o mașină, deci trebuie 6 mașini!",
    t2_b1: "Uneori rotunjești în sus (când comanzi mașini/cutii)",
    t2_b2: "Alteori îl ignori (când cumperi obiecte întregi)",
    t2_b3: "Gândește-te ce reprezintă restul",
    t2_inst: "Găsește următorul multiplu de 4 după 22 pe axă (locurile necesare în total)!",
    t2_h1: "20 de locuri nu sunt suficiente pentru 22 de copii.",
    t2_h2: "Atinge 24 (ceea ce înseamnă 6 mașini).",
    t2_q: "Ai 25 de mere. O cutie ține 6. De câte cutii ai nevoie pentru a pune TOATE merele?",
    t2_q_a: "4",
    t2_q_b: "5",
    t2_q_c: "6",
    t2_q_d: "3",
    t3_title: "Media (Medie Aritmetică)",
    t3_text: "Media arată valoarea centrală a datelor. Aduni toate numerele, apoi împarți la câte numere sunt. Așa afli cât ar primi fiecare dacă totul ar fi împărțit egal.",
    t3_b1: "Media = Suma valorilor / Numărul de valori",
    t3_b2: "Exemplu: (70 + 90 + 80 + 60) / 4 = 75",
    t3_b3: "Media rezumă datele într-un singur număr",
    t3_inst: "Calculează media a 4 note: 70, 90, 80, 60. Echilibrează balanța la medie!",
    t3_h1: "Mai întâi adună: 70 + 90 + 80 + 60 = 300.",
    t3_h2: "Apoi împarte la 4: 300 / 4 = 75. Adaugă greutăți până la 75.",
    t3_q: "Care este media de 10, 20 și 30?",
    t3_q_a: "20",
    t3_q_b: "30",
    t3_q_c: "15",
    t3_q_d: "60",
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
      leftWeight: 50,
      rightInitial: 45, // Cost of 3 * 15
      unitIcon: "$",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_b", // 40 - (4*8) = 40 - 32 = 8
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 32,
      start: 0,
      target: 24, // Next multiple of 4 after 22
      step: 4,
      showJumps: true,
      jumpCount: 6,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_b", // 25 / 6 = 4 R 1 -> needs 5 boxes
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "balance-scale",
      leftWeight: 75, // Mean of 70, 90, 80, 60 = 300/4 = 75
      rightInitial: 0,
      unitIcon: "📊",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // 1 ticket = 9, 5 tickets = 45
    },
  },
];

// ─── EXPLORER DEFINÍCIÓ ──────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🛒",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const WordProblemExplorer5 = memo(function WordProblemExplorer5({
  color = "#F59E0B",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={5} explorerId="math_g5_wordproblems" color={color} lang={lang} onDone={onDone} />;
});

export default WordProblemExplorer5;
