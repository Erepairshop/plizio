"use client";
// MulDivExplorer5 — Multiplication & Division for Grade 5 (island i3)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="mdGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#mdGrad1)" rx="16" />
      {/* Column Multiplication Visual */}
      <g transform="translate(100, 45)">
        <text x="0" y="0" fontSize="22" fontWeight="bold" fill="#5B21B6" textAnchor="end" letterSpacing="6">124</text>
        <text x="35" y="0" fontSize="22" fontWeight="bold" fill="#5B21B6" textAnchor="end">×</text>
        <text x="60" y="0" fontSize="22" fontWeight="bold" fill="#5B21B6" textAnchor="end">3</text>
        <line x1="-50" y1="15" x2="65" y2="15" stroke="#6D28D9" strokeWidth="2" />
        <text x="60" y="40" fontSize="24" fontWeight="900" fill="#4C1D95" textAnchor="end" letterSpacing="6">372</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="mdGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#mdGrad2)" rx="16" />
      {/* Long Division Visual */}
      <g transform="translate(120, 65)">
        <text x="-40" y="0" fontSize="22" fontWeight="bold" fill="#0369A1" textAnchor="middle">840</text>
        <text x="0" y="0" fontSize="22" fontWeight="bold" fill="#0369A1" textAnchor="middle">÷</text>
        <text x="30" y="0" fontSize="22" fontWeight="bold" fill="#0369A1" textAnchor="middle">4</text>
        <text x="60" y="0" fontSize="22" fontWeight="bold" fill="#0369A1" textAnchor="middle">=</text>
        <text x="100" y="0" fontSize="24" fontWeight="900" fill="#0284C7" textAnchor="middle">210</text>
        
        {/* Step highlights */}
        <path d="M -55,10 Q -45,25 -35,10" fill="none" stroke="#0284C7" strokeWidth="2" />
        <text x="-45" y="40" fontSize="14" fontWeight="bold" fill="#0284C7" textAnchor="middle">8÷4=2</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="mdGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F43F5E" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FB7185" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#mdGrad3)" rx="16" />
      {/* Remainder Visual: 14 = 3 x 4 + 2 */}
      <g transform="translate(30, 60)">
        {/* 3 groups of 4 */}
        {[0, 1, 2].map((g) => (
          <g key={g} transform={`translate(${g * 50}, 0)`}>
            <rect x="0" y="0" width="36" height="36" fill="none" stroke="#E11D48" strokeWidth="2" strokeDasharray="4 2" rx="4" />
            <circle cx="10" cy="10" r="5" fill="#E11D48" />
            <circle cx="26" cy="10" r="5" fill="#E11D48" />
            <circle cx="10" cy="26" r="5" fill="#E11D48" />
            <circle cx="26" cy="26" r="5" fill="#E11D48" />
          </g>
        ))}
        {/* The remainder (2 circles outside) */}
        <g transform="translate(160, 0)">
          <circle cx="10" cy="18" r="5" fill="#BE185D" />
          <circle cx="26" cy="18" r="5" fill="#BE185D" />
        </g>
        <text x="100" y="70" fontSize="16" fontWeight="bold" fill="#9F1239" textAnchor="middle">14 = (3 × 4) + 2</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Multiplication & Division",
    t1_title: "Multi-Digit Multiplication",
    t1_text: "To multiply large numbers, break them down. Multiply the ones, then the tens, then the hundreds, and add them all together!",
    t1_b1: "Multiply step by step from right to left",
    t1_b2: "Remember to carry over values",
    t1_b3: "Zeros act as important placeholders",
    t1_inst: "If 1 box costs 120 coins, use the slider to find the cost of 5 boxes!",
    t1_h1: "Multiply 120 by 5.",
    t1_h2: "100 × 5 = 500, and 20 × 5 = 100. Total is 600.",
    t1_q: "What is 200 × 4?",
    t1_q_a: "600",
    t1_q_b: "800",
    t1_q_c: "400",
    t1_q_d: "1000",
    t2_title: "Long Division",
    t2_text: "Division is sharing a large number into equal groups. Work from left to right: divide the biggest place value first, then move to the next.",
    t2_b1: "Divide from left to right",
    t2_b2: "Divide, multiply, subtract, bring down",
    t2_b3: "Check your work with multiplication",
    t2_inst: "Find 250 on the number line to show the answer for 1000 ÷ 4!",
    t2_h1: "Think of a 1000 as four quarters of 250.",
    t2_h2: "Jump 4 times by 250 to reach 1000.",
    t2_q: "What is 600 ÷ 3?",
    t2_q_a: "300",
    t2_q_b: "100",
    t2_q_c: "200",
    t2_q_d: "150",
    t3_title: "Division with Remainders",
    t3_text: "Sometimes numbers don't share perfectly! If you divide 14 by 4, you get 3 groups of 4, and 2 are left over. We call this the remainder.",
    t3_b1: "The remainder is what's left over",
    t3_b2: "Remainder must be smaller than the divisor",
    t3_b3: "Total = (Quotient × Divisor) + Remainder",
    t3_inst: "Balance the scale for 14! (3 × 4 = 12, so what is the remainder?)",
    t3_h1: "The left side is 14. The right side is 0.",
    t3_h2: "Add 10, then add 1s to make exactly 14.",
    t3_q: "If you divide 17 by 5, what is the remainder?",
    t3_q_a: "1",
    t3_q_b: "2",
    t3_q_c: "3",
    t3_q_d: "0",
  },
  de: {
    explorer_title: "Multiplikation & Division",
    t1_title: "Schriftliche Multiplikation",
    t1_text: "Zerlege große Zahlen zum Multiplizieren. Multipliziere zuerst die Einer, dann die Zehner, dann die Hunderter und zähle alles zusammen!",
    t1_b1: "Schrittweise von rechts nach links rechnen",
    t1_b2: "Denke an den Übertrag",
    t1_b3: "Nullen sind wichtige Platzhalter",
    t1_inst: "Wenn 1 Box 120 Münzen kostet, finde mit dem Schieberegler die Kosten für 5 Boxen!",
    t1_h1: "Multipliziere 120 mit 5.",
    t1_h2: "100 × 5 = 500, und 20 × 5 = 100. Das macht 600.",
    t1_q: "Was ist 200 × 4?",
    t1_q_a: "600",
    t1_q_b: "800",
    t1_q_c: "400",
    t1_q_d: "1000",
    t2_title: "Schriftliche Division",
    t2_text: "Division bedeutet, eine große Zahl gerecht aufzuteilen. Arbeite von links nach rechts: Teile zuerst den höchsten Stellenwert.",
    t2_b1: "Von links nach rechts teilen",
    t2_b2: "Teilen, Malnehmen, Abziehen, Herunterholen",
    t2_b3: "Prüfe dein Ergebnis mit der Umkehraufgabe",
    t2_inst: "Finde 250 auf dem Zahlenstrahl für das Ergebnis von 1000 ÷ 4!",
    t2_h1: "Denke an 1000 als vier Viertel zu je 250.",
    t2_h2: "Tippe auf die 250.",
    t2_q: "Was ist 600 ÷ 3?",
    t2_q_a: "300",
    t2_q_b: "100",
    t2_q_c: "200",
    t2_q_d: "150",
    t3_title: "Division mit Rest",
    t3_text: "Manchmal lässt sich etwas nicht perfekt teilen! Wenn du 14 durch 4 teilst, erhältst du 3 Gruppen, und 2 bleiben übrig. Das ist der Rest.",
    t3_b1: "Der Rest ist das, was übrig bleibt",
    t3_b2: "Der Rest muss kleiner als der Divisor sein",
    t3_b3: "Gesamt = (Quotient × Divisor) + Rest",
    t3_inst: "Gleiche die Waage für 14 aus! (3 × 4 = 12, was ist der Rest?)",
    t3_h1: "Die linke Seite ist 14. Die rechte ist 0.",
    t3_h2: "Füge Gewicht hinzu, bis du genau 14 hast.",
    t3_q: "Wenn du 17 durch 5 teilst, was ist der Rest?",
    t3_q_a: "1",
    t3_q_b: "2",
    t3_q_c: "3",
    t3_q_d: "0",
  },
  hu: {
    explorer_title: "Szorzás és osztás",
    t1_title: "Többjegyű szorzás",
    t1_text: "Nagy számok szorzásakor bontsd fel őket! Szorozd meg az egyeseket, majd a tízeseket, százasokat, és végül add össze!",
    t1_b1: "Lépésről lépésre haladj jobbról balra",
    t1_b2: "Ne felejtsd el az átvitelt",
    t1_b3: "A nullák fontos helyfoglalók",
    t1_inst: "Ha 1 doboz 120 érmébe kerül, állítsd be a csúszkán 5 doboz árát!",
    t1_h1: "Szorozd meg a 120-at 5-tel.",
    t1_h2: "100 × 5 = 500, és 20 × 5 = 100. Összesen 600.",
    t1_q: "Mennyi 200 × 4?",
    t1_q_a: "600",
    t1_q_b: "800",
    t1_q_c: "400",
    t1_q_d: "1000",
    t2_title: "Írásbeli osztás",
    t2_text: "Az osztás során egy nagy számot osztunk egyenlő részekre. Balról jobbra haladunk: először a legnagyobb helyiértéket osztjuk.",
    t2_b1: "Balról jobbra végezzük",
    t2_b2: "Osztás, szorzás, kivonás, lehozás",
    t2_b3: "Ellenőrizd szorzással az eredményt",
    t2_inst: "Keresd meg a 250-et a számegyenesen (ez az 1000 ÷ 4 eredménye)!",
    t2_h1: "Gondolj az 1000-re mint négyszer 250-re.",
    t2_h2: "Koppints a 250-es értékre a vonalon.",
    t2_q: "Mennyi 600 ÷ 3?",
    t2_q_a: "300",
    t2_q_b: "100",
    t2_q_c: "200",
    t2_q_d: "150",
    t3_title: "Maradékos osztás",
    t3_text: "Néha nem lehet pontosan elosztani mindent! Ha a 14-et elosztod 4-gyel, 3 csoportot kapsz, és 2 kimarad. Ez a maradék.",
    t3_b1: "A maradék az, ami felosztás után kimarad",
    t3_b2: "A maradék mindig kisebb, mint az osztó",
    t3_b3: "Összes = (Hányados × Osztó) + Maradék",
    t3_inst: "Egyenlítsd ki a mérleget 14-re! Miből áll össze?",
    t3_h1: "A bal oldal 14. A jobb oldal 0.",
    t3_h2: "Adj hozzá súlyokat, míg pontosan 14 nem lesz a jobb oldalon is.",
    t3_q: "Ha a 17-et elosztod 5-tel, mennyi a maradék?",
    t3_q_a: "1",
    t3_q_b: "2",
    t3_q_c: "3",
    t3_q_d: "0",
  },
  ro: {
    explorer_title: "Înmulțire și Împărțire",
    t1_title: "Înmulțirea cu mai multe cifre",
    t1_text: "Pentru a înmulți numere mari, descompune-le. Înmulțește unitățile, apoi zecile, apoi sutele și adună-le la final!",
    t1_b1: "Înmulțește pas cu pas de la dreapta la stânga",
    t1_b2: "Nu uita de cifrele reținute (transferate)",
    t1_b3: "Zerourile sunt substituenți importanți",
    t1_inst: "Dacă 1 cutie costă 120 de monede, folosește cursorul pentru a afla costul a 5 cutii!",
    t1_h1: "Înmulțește 120 cu 5.",
    t1_h2: "100 × 5 = 500, iar 20 × 5 = 100. Totalul este 600.",
    t1_q: "Cât fac 200 × 4?",
    t1_q_a: "600",
    t1_q_b: "800",
    t1_q_c: "400",
    t1_q_d: "1000",
    t2_title: "Împărțirea în coloană",
    t2_text: "Împărțirea înseamnă distribuirea unui număr în grupuri egale. Lucrează de la stânga la dreapta: împarte mai întâi cel mai mare ordin.",
    t2_b1: "Împarte de la stânga la dreapta",
    t2_b2: "Împarte, înmulțește, scade, coboară cifra",
    t2_b3: "Verifică rezultatul prin înmulțire",
    t2_inst: "Găsește 250 pe linia numerelor pentru a arăta răspunsul la 1000 ÷ 4!",
    t2_h1: "Gândește-te la 1000 ca la patru sferturi de 250.",
    t2_h2: "Atinge numărul 250 pe linie.",
    t2_q: "Cât fac 600 ÷ 3?",
    t2_q_a: "300",
    t2_q_b: "100",
    t2_q_c: "200",
    t2_q_d: "150",
    t3_title: "Împărțirea cu rest",
    t3_text: "Uneori numerele nu se împart perfect! Dacă împarți 14 la 4, obții 3 grupuri de 4, și mai rămân 2. Acesta se numește rest.",
    t3_b1: "Restul este ceea ce rămâne la final",
    t3_b2: "Restul trebuie să fie mai mic decât împărțitorul",
    t3_b3: "Total = (Cât × Împărțitor) + Rest",
    t3_inst: "Echilibrează balanța pentru 14! (3 × 4 = 12, deci cât e restul?)",
    t3_h1: "Partea stângă este 14. Partea dreaptă este 0.",
    t3_h2: "Adaugă greutăți până ajungi exact la 14.",
    t3_q: "Dacă împarți 17 la 5, care este restul?",
    t3_q_a: "1",
    t3_q_b: "2",
    t3_q_c: "3",
    t3_q_d: "0",
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
      baseValue: 1,
      basePrice: 120,
      targetValue: 5,
      targetPrice: 600,
      unitName: "box",
      currency: "coins",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_b",
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
      max: 1000,
      start: 0,
      target: 250,
      step: 250,
      showJumps: true,
      jumpCount: 4,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_c",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "balance-scale",
      leftWeight: 14,
      rightInitial: 0,
      unitIcon: "📦",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_b",
    },
  },
];

// ─── EXPLORER DEFINÍCIÓ ──────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "✖️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const MulDivExplorer5 = memo(function MulDivExplorer5({
  color = "#8B5CF6",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={5} explorerId="math_g5_muldiv" color={color} lang={lang} onDone={onDone} />;
});

export default MulDivExplorer5;
