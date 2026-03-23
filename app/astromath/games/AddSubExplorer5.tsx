"use client";
// AddSubExplorer5 — Addition & Subtraction for Grade 5 (island i2)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="addGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#addGrad1)" rx="16" />
      {/* Column Addition Visual */}
      <g transform="translate(100, 40)">
        <text x="-30" y="20" fontSize="20" fontWeight="bold" fill="#047857">+</text>
        <text x="30" y="0" fontSize="20" fontWeight="bold" fill="#065F46" textAnchor="end" letterSpacing="4">4560</text>
        <text x="30" y="25" fontSize="20" fontWeight="bold" fill="#065F46" textAnchor="end" letterSpacing="4">2830</text>
        <line x1="-35" y1="35" x2="35" y2="35" stroke="#047857" strokeWidth="2" />
        <text x="30" y="55" fontSize="20" fontWeight="900" fill="#059669" textAnchor="end" letterSpacing="4">7390</text>
        {/* Carry over indicator */}
        <text x="-5" y="-15" fontSize="10" fontWeight="bold" fill="#EF4444" textAnchor="middle">1</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="addGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#F87171" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#addGrad2)" rx="16" />
      {/* Column Subtraction Visual */}
      <g transform="translate(100, 40)">
        <text x="-30" y="20" fontSize="20" fontWeight="bold" fill="#B91C1C">-</text>
        <text x="30" y="0" fontSize="20" fontWeight="bold" fill="#7F1D1D" textAnchor="end" letterSpacing="4">8000</text>
        <text x="30" y="25" fontSize="20" fontWeight="bold" fill="#7F1D1D" textAnchor="end" letterSpacing="4">3400</text>
        <line x1="-35" y1="35" x2="35" y2="35" stroke="#B91C1C" strokeWidth="2" />
        <text x="30" y="55" fontSize="20" fontWeight="900" fill="#DC2626" textAnchor="end" letterSpacing="4">4600</text>
        {/* Borrowing indicators */}
        <line x1="-5" y1="-8" x2="5" y2="-2" stroke="#DC2626" strokeWidth="1" />
        <text x="-5" y="-15" fontSize="10" fontWeight="bold" fill="#DC2626" textAnchor="middle">9</text>
        <text x="-20" y="-15" fontSize="10" fontWeight="bold" fill="#DC2626" textAnchor="middle">7</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="addGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#addGrad3)" rx="16" />
      {/* Estimation Visual */}
      <g transform="translate(120, 70)">
        <text x="-40" y="-10" fontSize="16" fontWeight="bold" fill="#5B21B6" textAnchor="middle">4980</text>
        <text x="0" y="-10" fontSize="16" fontWeight="bold" fill="#5B21B6" textAnchor="middle">+</text>
        <text x="40" y="-10" fontSize="16" fontWeight="bold" fill="#5B21B6" textAnchor="middle">3050</text>
        
        <path d="M -40,5 Q -40,20 -20,25 T 0,35" fill="none" stroke="#7C3AED" strokeWidth="2" strokeDasharray="3 3" />
        <path d="M 40,5 Q 40,20 20,25 T 0,35" fill="none" stroke="#7C3AED" strokeWidth="2" strokeDasharray="3 3" />
        
        <text x="0" y="55" fontSize="18" fontWeight="900" fill="#4C1D95" textAnchor="middle">≈ 8000</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Addition & Subtraction",
    t1_title: "Column Addition",
    t1_text: "When adding large numbers, write them in columns. Always start from the ones on the right! If a column adds up to 10 or more, carry the extra to the next column.",
    t1_b1: "Line up the place values vertically",
    t1_b2: "Always start adding from the right",
    t1_b3: "Carry over digits when needed",
    t1_inst: "Balance the scale! The left side needs to be 5000. Add weights to the right!",
    t1_h1: "The right side starts at 2500.",
    t1_h2: "You need 2500 more to make exactly 5000.",
    t1_q: "What is 4500 + 2600?",
    t1_q_a: "6100",
    t1_q_b: "7100",
    t1_q_c: "6000",
    t1_q_d: "8100",
    t2_title: "Column Subtraction",
    t2_text: "Subtraction also works in columns from right to left. If the top digit is smaller than the bottom one, you have to borrow from the neighbor on the left!",
    t2_b1: "The larger number goes on top",
    t2_b2: "Borrow from the left if the top is smaller",
    t2_b3: "Zeros require borrowing across multiple columns",
    t2_inst: "Find the result of 10000 - 3500 on the number line!",
    t2_h1: "Start at 10000 and move backwards by 3500.",
    t2_h2: "10000 minus 3000 is 7000, minus 500 is 6500.",
    t2_q: "What is 8000 - 1500?",
    t2_q_a: "6500",
    t2_q_b: "7500",
    t2_q_c: "7000",
    t2_q_d: "5500",
    t3_title: "Estimation & Mental Math",
    t3_text: "Before calculating exactly, it helps to estimate. Round the numbers to the nearest thousand or hundred first, then add them quickly in your head!",
    t3_b1: "Round up if the next digit is 5 or more",
    t3_b2: "Round down if the next digit is 4 or less",
    t3_b3: "Estimation prevents big mistakes",
    t3_inst: "Combine 3 blocks to reach an estimated sum of 12000!",
    t3_h1: "Each block represents 1000.",
    t3_h2: "You need 12 blocks in total to reach 12000.",
    t3_q: "Estimate the sum of 5980 + 2030.",
    t3_q_a: "7000",
    t3_q_b: "8000",
    t3_q_c: "9000",
    t3_q_d: "6000",
  },
  de: {
    explorer_title: "Addition & Subtraktion",
    t1_title: "Schriftliche Addition",
    t1_text: "Schreibe große Zahlen untereinander. Beginne immer rechts bei den Einern! Ist die Summe 10 oder größer, übertrage den Rest in die nächste Spalte.",
    t1_b1: "Stellenwerte genau untereinander schreiben",
    t1_b2: "Immer von rechts nach links rechnen",
    t1_b3: "Den Übertrag nicht vergessen",
    t1_inst: "Gleiche die Waage aus! Die linke Seite wiegt 5000.",
    t1_h1: "Auf der rechten Seite sind bereits 2500.",
    t1_h2: "Du brauchst noch 2500, um genau 5000 zu erreichen.",
    t1_q: "Was ist 4500 + 2600?",
    t1_q_a: "6100",
    t1_q_b: "7100",
    t1_q_c: "6000",
    t1_q_d: "8100",
    t2_title: "Schriftliche Subtraktion",
    t2_text: "Auch hier rechnest du von rechts nach links. Ist die obere Ziffer kleiner als die untere, musst du dir vom linken Nachbarn einen Zehner leihen!",
    t2_b1: "Die größere Zahl steht oben",
    t2_b2: "Leihen, wenn die obere Ziffer zu klein ist",
    t2_b3: "Bei Nullen musst du oft mehrfach leihen",
    t2_inst: "Finde das Ergebnis von 10000 - 3500 auf dem Zahlenstrahl!",
    t2_h1: "Starte bei 10000 und gehe 3500 zurück.",
    t2_h2: "10000 minus 3000 ist 7000, minus 500 ist 6500.",
    t2_q: "Was ist 8000 - 1500?",
    t2_q_a: "6500",
    t2_q_b: "7500",
    t2_q_c: "7000",
    t2_q_d: "5500",
    t3_title: "Überschlagen im Kopf",
    t3_text: "Bevor du genau rechnest, solltest du überschlagen. Runde die Zahlen auf Tausender oder Hunderter und addiere sie dann im Kopf!",
    t3_b1: "Bei 5 oder mehr wird aufgerundet",
    t3_b2: "Bei 4 oder weniger wird abgerundet",
    t3_b3: "Überschlagen verhindert große Fehler",
    t3_inst: "Kombiniere Blöcke für eine geschätzte Summe von 12000!",
    t3_h1: "Jeder Block steht für 1000.",
    t3_h2: "Du brauchst insgesamt 12 Blöcke für 12000.",
    t3_q: "Überschlage die Summe von 5980 + 2030.",
    t3_q_a: "7000",
    t3_q_b: "8000",
    t3_q_c: "9000",
    t3_q_d: "6000",
  },
  hu: {
    explorer_title: "Összeadás és kivonás",
    t1_title: "Írásbeli összeadás",
    t1_text: "Nagy számok összeadásakor írd őket egymás alá. Mindig jobbról, az egyesektől kezdj! Ha egy oszlop összege 10 vagy több, vidd át a maradékot a következő helyiértékre.",
    t1_b1: "A helyiértékeket pontosan egymás alá írd",
    t1_b2: "Mindig jobbról balra haladj a számolással",
    t1_b3: "Ne felejtsd el az átvitelt (a maradékot)",
    t1_inst: "Egyenlítsd ki a mérleget! A bal oldal 5000-et mutat.",
    t1_h1: "A jobb oldalon 2500 van.",
    t1_h2: "Még 2500-ra van szükséged, hogy egyensúlyba kerüljön.",
    t1_q: "Mennyi 4500 + 2600?",
    t1_q_a: "6100",
    t1_q_b: "7100",
    t1_q_c: "6000",
    t1_q_d: "8100",
    t2_title: "Írásbeli kivonás",
    t2_text: "A kivonás is oszlopokban, jobbról balra történik. Ha a felső számjegy kisebb, mint az alsó, kölcsön kell kérned a bal oldali szomszédtól!",
    t2_b1: "A nagyobb szám kerül felülre",
    t2_b2: "Kérj kölcsön balról, ha a felső szám kisebb",
    t2_b3: "A nulláknál több oszlopon át kell kölcsönkérni",
    t2_inst: "Keresd meg a 10000 - 3500 eredményét a számegyenesen!",
    t2_h1: "Indulj 10000-től és haladj visszafelé 3500-at.",
    t2_h2: "10000 mínusz 3000 az 7000, mínusz 500 az 6500.",
    t2_q: "Mennyi 8000 - 1500?",
    t2_q_a: "6500",
    t2_q_b: "7500",
    t2_q_c: "7000",
    t2_q_d: "5500",
    t3_title: "Fejben számolás és becslés",
    t3_text: "Mielőtt pontosan számolnál, érdemes becsülni. Kerekítsd a számokat a legközelebbi ezresre vagy százasra, és add össze őket fejben!",
    t3_b1: "Ha a következő számjegy 5 vagy több, kerekíts felfelé",
    t3_b2: "Ha 4 vagy kevesebb, kerekíts lefelé",
    t3_b3: "A becslés segít elkerülni a nagy hibákat",
    t3_inst: "Vond össze a blokkokat úgy, hogy 12000 legyen az eredmény!",
    t3_h1: "Minden blokk 1000-et ér.",
    t3_h2: "Összesen 12 blokkra lesz szükséged a 12000-hez.",
    t3_q: "Becsüld meg az 5980 + 2030 összegét!",
    t3_q_a: "7000",
    t3_q_b: "8000",
    t3_q_c: "9000",
    t3_q_d: "6000",
  },
  ro: {
    explorer_title: "Adunare și Scădere",
    t1_title: "Adunarea în coloană",
    t1_text: "Când aduni numere mari, scrie-le în coloană. Începe mereu de la unități, din dreapta! Dacă o coloană trece de 10, transferă surplusul la următoarea coloană.",
    t1_b1: "Aliniază corect ordinele numerelor",
    t1_b2: "Adună mereu de la dreapta la stânga",
    t1_b3: "Nu uita să aduni 'ceea ce ții minte'",
    t1_inst: "Echilibrează balanța! Partea stângă are 5000.",
    t1_h1: "În partea dreaptă ai deja 2500.",
    t1_h2: "Mai ai nevoie de 2500 pentru a echilibra balanța.",
    t1_q: "Cât fac 4500 + 2600?",
    t1_q_a: "6100",
    t1_q_b: "7100",
    t1_q_c: "6000",
    t1_q_d: "8100",
    t2_title: "Scăderea în coloană",
    t2_text: "Scăderea se face tot de la dreapta la stânga. Dacă cifra de sus este mai mică decât cea de jos, trebuie să te împrumuți de la vecinul din stânga!",
    t2_b1: "Numărul mai mare stă deasupra",
    t2_b2: "Împrumută-te dacă cifra de sus e prea mică",
    t2_b3: "Zerourile necesită împrumuturi succesive",
    t2_inst: "Găsește rezultatul pentru 10000 - 3500 pe linia numerelor!",
    t2_h1: "Pornește de la 10000 și mergi înapoi 3500.",
    t2_h2: "10000 minus 3000 fac 7000, minus încă 500 fac 6500.",
    t2_q: "Cât fac 8000 - 1500?",
    t2_q_a: "6500",
    t2_q_b: "7500",
    t2_q_c: "7000",
    t2_q_d: "5500",
    t3_title: "Calcul mental și estimare",
    t3_text: "Înainte de a calcula exact, este util să estimezi. Rotunjește numerele la mii sau sute și apoi adună-le rapid în minte!",
    t3_b1: "Dacă următoarea cifră e 5 sau mai mare, rotunjește în sus",
    t3_b2: "Dacă este 4 sau mai mică, rotunjește în jos",
    t3_b3: "Estimarea previne greșelile mari",
    t3_inst: "Combină blocurile pentru a obține suma estimată de 12000!",
    t3_h1: "Fiecare bloc reprezintă 1000.",
    t3_h2: "Ai nevoie de un total de 12 blocuri pentru a ajunge la 12000.",
    t3_q: "Estimează suma 5980 + 2030.",
    t3_q_a: "7000",
    t3_q_b: "8000",
    t3_q_c: "9000",
    t3_q_d: "6000",
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
      leftWeight: 5000,
      rightInitial: 2500,
      unitIcon: "📦",
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
      max: 10000,
      start: 10000,
      target: 6500,
      step: 500,
      showJumps: true,
      jumpCount: 7,
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
      type: "block-drag",
      mode: "combine",
      groups: [4, 4, 4], // A kód 12 blokkot vár a "12 ezer" logikájához
      answer: 12,
      blockIcon: "🟡",
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
  icon: "➕",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const AddSubExplorer5 = memo(function AddSubExplorer5({
  color = "#10B981",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={5} explorerId="math_g5_addsub" color={color} lang={lang} onDone={onDone} />;
});

export default AddSubExplorer5;
