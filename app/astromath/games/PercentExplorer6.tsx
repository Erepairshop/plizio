"use client";
// PercentExplorer6 — Percentages & Changes for Grade 6 (island i3)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="perGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#perGrad1)" rx="16" />
      {/* 100 grid with 25% shaded */}
      <g transform="translate(80, 20)">
        <rect width="80" height="80" fill="white" stroke="#059669" strokeWidth="1" />
        {/* Simplified grid */}
        {Array.from({ length: 4 }).map((_, i) => (
          <g key={i}>
            <line x1={(i + 1) * 20} y1="0" x2={(i + 1) * 20} y2="80" stroke="#A7F3D0" strokeWidth="1" />
            <line x1="0" y1={(i + 1) * 20} x2="80" y2={(i + 1) * 20} stroke="#A7F3D0" strokeWidth="1" />
          </g>
        ))}
        <rect width="40" height="40" fill="#10B981" opacity="0.6" />
        <text x="40" y="100" fontSize="14" fontWeight="bold" fill="#065F46" textAnchor="middle">25% = 25 / 100</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="perGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#perGrad2)" rx="16" />
      {/* Calculating part: 20% of 200 = 40 */}
      <g transform="translate(120, 70)">
        <text x="0" y="-15" fontSize="18" fontWeight="bold" fill="#B45309" textAnchor="middle">20% of 200</text>
        <text x="0" y="15" fontSize="22" fontWeight="900" fill="#92400E" textAnchor="middle">40</text>
        <path d="M -40,0 Q 0,30 40,0" fill="none" stroke="#D97706" strokeWidth="2" strokeDasharray="4 2" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="perGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#perGrad3)" rx="16" />
      {/* Percentage change: 100 -> 120 (+20%) */}
      <g transform="translate(40, 70)">
        <line x1="0" y1="0" x2="160" y2="0" stroke="#1D4ED8" strokeWidth="3" />
        <circle cx="0" cy="0" r="5" fill="#1D4ED8" />
        <text x="0" y="25" fontSize="12" fontWeight="bold" fill="#1E40AF" textAnchor="middle">100%</text>
        
        <circle cx="120" cy="0" r="5" fill="#2563EB" />
        <text x="120" y="25" fontSize="12" fontWeight="bold" fill="#1E40AF" textAnchor="middle">120%</text>
        
        <path d="M 0,-10 Q 60,-40 120,-10" fill="none" stroke="#059669" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="60" y="-35" fontSize="14" fontWeight="black" fill="#059669" textAnchor="middle">+20%</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Percentages Explorer",
    t1_title: "The Meaning of Percent",
    t1_text: "Percent means 'per hundred'. 1% is just 1 part out of 100. It is a special way to write fractions with a denominator of 100.",
    t1_b1: "The symbol % means /100",
    t1_b2: "50% is half, 25% is a quarter",
    t1_b3: "100% is the whole thing",
    t1_inst: "Use the slider! If 100% is 400 coins, how much is 25%?",
    t1_h1: "25% is one quarter of the total.",
    t1_h2: "Divide 400 by 4. Set the slider to 100.",
    t1_q: "What is 10% written as a fraction?",
    t1_q_a: "1/10",
    t1_q_b: "1/100",
    t1_q_c: "10/10",
    t1_q_d: "1/2",
    t2_title: "Finding the Base Value",
    t2_text: "Sometimes we know the percentage but not the total. If 10% of a number is 20, what is the full number (100%)? Let's solve it with an equation!",
    t2_b1: "10% = 20",
    t2_b2: "Multiply by 10 to get 100%",
    t2_b3: "The result is 200",
    t2_inst: "Solve the equation: 0.1 * x = 20 (If 10% is 20, find x!)",
    t2_step1: "Divide both sides by 0.1",
    t2_h1: "Dividing by 0.1 is the same as multiplying by 10.",
    t2_h2: "20 * 10 = 200.",
    t2_q: "If 50% of a number is 30, what is the number?",
    t2_q_a: "60",
    t2_q_b: "15",
    t2_q_c: "300",
    t2_q_d: "100",
    t3_title: "Percentage Change",
    t3_text: "Prices go up and down! If a 100$ shoes price increases by 20%, the new price is 120$. This is a percentage increase.",
    t3_b1: "Increase: 100% + % change",
    t3_b2: "Decrease: 100% - % change",
    t3_b3: "Always calculate the % from the original price",
    t3_inst: "A price of 200$ drops by 10%. Find the new price on the number line!",
    t3_h1: "10% of 200 is 20.",
    t3_h2: "Subtract 20 from 200. Tap 180.",
    t3_q: "A 50$ shirt is 50% off. What is the sale price?",
    t3_q_a: "25$",
    t3_q_b: "10$",
    t3_q_c: "45$",
    t3_q_d: "5$",
  },
  hu: {
    explorer_title: "Százalékszámítás",
    t1_title: "A százalék fogalma",
    t1_text: "A százalék azt jelenti: 'százból'. Az 1% pontosan 1 rész a 100-ból. Ez egy speciális tört, aminek a nevezője mindig 100.",
    t1_b1: "A % jel jelentése: /100",
    t1_b2: "Az 50% a fele, a 25% a negyede",
    t1_b3: "A 100% a teljes egészet jelenti",
    t1_inst: "Használd a csúszkát! Ha a 100% az 400 érme, mennyi a 25%?",
    t1_h1: "A 25% a teljes összeg negyede.",
    t1_h2: "Oszd el a 400-at 4-gyel. Állítsd a csúszkát 100-ra.",
    t1_q: "Mennyi a 10% törtalakban?",
    t1_q_a: "1/10",
    t1_q_b: "1/100",
    t1_q_c: "10/10",
    t1_q_d: "1/2",
    t2_title: "Az alapérték kiszámítása",
    t2_text: "Néha tudjuk a százalékot, de az eredeti összeget nem. Ha egy szám 10%-a 20, mennyi a teljes szám (100%)? Oldjuk meg egyenlettel!",
    t2_b1: "10% = 20",
    t2_b2: "Szorozd meg 10-zel a 100%-hoz",
    t2_b3: "Az eredmény 200",
    t2_inst: "Oldd meg az egyenletet: 0.1 * x = 20 (Ha a 10% az 20, keresd az x-et!)",
    t2_step1: "Oszd el mindkét oldalt 0.1-gyel",
    t2_h1: "A 0.1-gyel való osztás ugyanaz, mint a 10-zel való szorzás.",
    t2_h2: "20 * 10 = 200.",
    t2_q: "Ha egy szám 50%-a 30, mennyi az eredeti szám?",
    t2_q_a: "60",
    t2_q_b: "15",
    t2_q_c: "300",
    t2_q_d: "100",
    t3_title: "Százalékos változás",
    t3_text: "Az árak változnak! Ha egy 100 Ft-os cipő ára 20%-kal nő, az új ár 120 Ft lesz. Ez a százalékos növekedés.",
    t3_b1: "Növekedés: 100% + változás %-a",
    t3_b2: "Csökkenés: 100% - változás %-a",
    t3_b3: "Mindig az eredeti árból számoljuk a százalékot",
    t3_inst: "Egy 200 Ft-os ár 10%-kal csökken. Keresd meg az új árat a számegyenesen!",
    t3_h1: "A 200-nak a 10%-a pontosan 20.",
    t3_h2: "Vond ki a 20-at a 200-ból. Koppints a 180-ra.",
    t3_q: "Egy 50 Ft-os póló ára 50%-kal csökken. Mennyi az akciós ár?",
    t3_q_a: "25 Ft",
    t3_q_b: "10 Ft",
    t3_q_c: "45 Ft",
    t3_q_d: "5 Ft",
  },
  de: {
    explorer_title: "Prozentrechnung",
    t1_title: "Was bedeutet Prozent?",
    t1_text: "Prozent bedeutet 'von hundert'. 1% ist genau 1 Teil von 100. Es ist ein spezieller Bruch mit dem Nenner 100.",
    t1_b1: "Das Zeichen % bedeutet /100",
    t1_b2: "50% ist die Hälfte, 25% ein Viertel",
    t1_b3: "100% ist das Ganze",
    t1_inst: "Nutze den Regler! Wenn 100% 400 Münzen sind, wie viel sind 25%?",
    t1_h1: "25% ist ein Viertel des Ganzen.",
    t1_h2: "Teile 400 durch 4. Stelle den Regler auf 100.",
    t1_q: "Was ist 10% als Bruch?",
    t1_q_a: "1/10",
    t1_q_b: "1/100",
    t1_q_c: "10/10",
    t1_q_d: "1/2",
    t2_title: "Den Grundwert berechnen",
    t2_text: "Manchmal kennen wir den Prozentsatz, aber nicht das Ganze. Wenn 10% einer Zahl 20 sind, was ist die ganze Zahl (100%)?",
    t2_b1: "10% = 20",
    t2_b2: "Multipliziere mit 10 für 100%",
    t2_b3: "Das Ergebnis ist 200",
    t2_inst: "Löse die Gleichung: 0.1 * x = 20 (Wenn 10% gleich 20 sind, finde x!)",
    t2_step1: "Teile beide Seiten durch 0.1",
    t2_h1: "Durch 0.1 teilen ist wie mit 10 multiplizieren.",
    t2_h2: "20 * 10 = 200.",
    t2_q: "Wenn 50% einer Zahl 30 sind, wie lautet die Zahl?",
    t2_q_a: "60",
    t2_q_b: "15",
    t2_q_c: "300",
    t2_q_d: "100",
    t3_title: "Prozentuale Änderung",
    t3_text: "Preise steigen und fallen! Wenn ein Schuh für 100€ um 20% teurer wird, kostet er 120€. Das ist eine Zunahme.",
    t3_b1: "Zunahme: 100% + Änderung in %",
    t3_b2: "Abnahme: 100% - Änderung in %",
    t3_b3: "Berechne den %-Wert immer vom Originalpreis",
    t3_inst: "Ein Preis von 200€ sinkt um 10%. Finde den neuen Preis auf dem Zahlenstrahl!",
    t3_h1: "10% von 200 sind 20.",
    t3_h2: "Ziehe 20 von 200 ab. Tippe auf 180.",
    t3_q: "Ein 50€ Shirt ist 50% reduziert. Was kostet es?",
    t3_q_a: "25€",
    t3_q_b: "10€",
    t3_q_c: "45€",
    t3_q_d: "5€",
  },
  ro: {
    explorer_title: "Explorator Procente",
    t1_title: "Înțelesul Procentului",
    t1_text: "Procent înseamnă 'la sută'. 1% este exact o parte din 100. Este o fracție specială cu numitorul 100.",
    t1_b1: "Simbolul % înseamnă /100",
    t1_b2: "50% este jumătate, 25% este un sfert",
    t1_b3: "100% înseamnă întregul",
    t1_inst: "Folosește cursorul! Dacă 100% înseamnă 400 monede, cât este 25%?",
    t1_h1: "25% este un sfert din total.",
    t1_h2: "Împarte 400 la 4. Setează cursorul la 100.",
    t1_q: "Cât înseamnă 10% sub formă de fracție?",
    t1_q_a: "1/10",
    t1_q_b: "1/100",
    t1_q_c: "10/10",
    t1_q_d: "1/2",
    t2_title: "Aflarea Valorii de Bază",
    t2_text: "Uneori știm procentul, dar nu și totalul. Dacă 10% dintr-un număr este 20, cât este întregul (100%)?",
    t2_b1: "10% = 20",
    t2_b2: "Înmulțește cu 10 pentru a afla 100%",
    t2_b3: "Rezultatul este 200",
    t2_inst: "Rezolvă ecuația: 0.1 * x = 20 (Dacă 10% este 20, află-l pe x!)",
    t2_step1: "Împarte ambele părți la 0.1",
    t2_h1: "Împărțirea la 0.1 este la fel ca înmulțirea cu 10.",
    t2_h2: "20 * 10 = 200.",
    t2_q: "Dacă 50% dintr-un număr este 30, care este numărul?",
    t2_q_a: "60",
    t2_q_b: "15",
    t2_q_c: "300",
    t2_q_d: "100",
    t3_title: "Modificare Procentuală",
    t3_text: "Prețurile cresc și scad! Dacă o pereche de pantofi de 100 lei se scumpesc cu 20%, noul preț este 120 lei.",
    t3_b1: "Creștere: 100% + procentul de schimbare",
    t3_b2: "Scădere: 100% - procentul de schimbare",
    t3_b3: "Calculează mereu procentul din prețul original",
    t3_inst: "Un preț de 200 lei scade cu 10%. Găsește noul preț pe axă!",
    t3_h1: "10% din 200 este 20.",
    t3_h2: "Scade 20 din 200. Atinge 180.",
    t3_q: "O cămașă de 50 lei se reduce cu 50%. Care este prețul de vânzare?",
    t3_q_a: "25 lei",
    t3_q_b: "10 lei",
    t3_q_c: "45 lei",
    t3_q_d: "5 lei",
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
      type: "ratio-slider",
      baseValue: 100,
      basePrice: 400,
      targetValue: 25,
      targetPrice: 100,
      unitName: "%",
      currency: "coins",
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
      equation: "0.1 * x = 20",
      steps: [
        { 
          instruction: "t2_step1", 
          choices: [2, 20, 200, 2000], 
          answer: 200, 
          equation: "x = 200" 
        }
      ],
      finalAnswer: 200,
      variable: "x",
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
      type: "number-line",
      min: 0,
      max: 200,
      start: 200,
      target: 180,
      step: 10,
      showJumps: true,
      jumpCount: 2,
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
  icon: "🏷️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const PercentExplorer6 = memo(function PercentExplorer6({
  color = "#10B981",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="math_g6_percent" color={color} lang={lang} onDone={onDone} />;
});

export default PercentExplorer6;
