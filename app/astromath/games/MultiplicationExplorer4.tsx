"use client";
// MultiplicationExplorer4 — Multiplication concepts for Grade 4 (island i2)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="mulGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FB7185" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#mulGrad1)" rx="16" />
      {/* 3 groups of 4 dots */}
      {[0, 1, 2].map((g) => (
        <g key={g} transform={`translate(${60 + g * 60}, 70)`}>
          <circle r="25" fill="none" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 2" opacity="0.4" />
          <circle cx="-8" cy="-8" r="5" fill="#F59E0B" />
          <circle cx="8" cy="-8" r="5" fill="#F59E0B" />
          <circle cx="-8" cy="8" r="5" fill="#F59E0B" />
          <circle cx="8" cy="8" r="5" fill="#F59E0B" />
        </g>
      ))}
      <text x="120" y="125" fontSize="14" fontWeight="bold" fill="#B45309" textAnchor="middle">3 × 4 = 12</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="mulGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#mulGrad2)" rx="16" />
      {/* Area model / Grid */}
      <g transform="translate(85, 35)">
        {Array.from({ length: 5 }).map((_, r) => 
          Array.from({ length: 7 }).map((_, c) => (
            <rect key={`${r}-${c}`} x={c * 10} y={r * 10} width="8" height="8" fill="#10B981" rx="1" opacity={0.6} />
          ))
        )}
        <text x="-15" y="30" fontSize="12" fill="#059669" fontWeight="bold">5</text>
        <text x="35" y="-10" fontSize="12" fill="#059669" fontWeight="bold">7</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="mulGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#mulGrad3)" rx="16" />
      {/* 10x logic visual */}
      <g transform="translate(120, 70)">
        <text x="-50" y="5" fontSize="20" fontWeight="800" fill="#DB2777" textAnchor="middle">42</text>
        <text x="0" y="5" fontSize="20" fontWeight="300" fill="#9CA3AF" textAnchor="middle">×</text>
        <text x="35" y="5" fontSize="20" fontWeight="800" fill="#DB2777" textAnchor="middle">10</text>
        <path d="M 60,0 L 80,0 L 75,-5 M 80,0 L 75,5" stroke="#DB2777" fill="none" strokeWidth="2" />
        <text x="105" y="5" fontSize="20" fontWeight="800" fill="#DB2777" textAnchor="middle">420</text>
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Multiplication Explorer",
    t1_title: "Repeated Addition",
    t1_text: "Multiplication is a shortcut for adding the same number many times. If you have 3 groups of 4, you have 12 in total!",
    t1_b1: "The numbers multiplied are factors",
    t1_b2: "The result is called the product",
    t1_b3: "Order doesn't change the result",
    t1_inst: "Combine blocks to show 4 groups of 5 (Total: 20)!",
    t1_h1: "Each block is worth 5 units.",
    t1_h2: "You need 4 such blocks to reach 20.",
    t1_q: "What is 6 × 3 equivalent to?",
    t1_q_a: "6 + 6",
    t1_q_b: "3 + 3 + 3 + 3 + 3 + 3",
    t1_q_c: "6 + 3",
    t1_q_d: "3 × 3",
    t2_title: "The Area Model",
    t2_text: "You can imagine multiplication as a rectangle. A 5 by 7 grid contains 35 small squares in total.",
    t2_b1: "Rows × Columns = Total area",
    t2_b2: "Great for visualizing larger products",
    t2_b3: "Length times width equals the product",
    t2_inst: "Find 24 on the number line by jumping in steps of 6!",
    t2_h1: "Start at 0 and jump 4 times by 6.",
    t2_h2: "6, 12, 18... what is the next step?",
    t2_q: "If a grid has 4 rows and 8 columns, how many squares are there?",
    t2_q_a: "12",
    t2_q_b: "32",
    t2_q_c: "28",
    t2_q_d: "40",
    t3_title: "Multiplying by 10 and 100",
    t3_text: "When you multiply a whole number by 10, every digit moves one place to the left, and a zero fills the ones place.",
    t3_b1: "× 10: add one zero at the end",
    t3_b2: "× 100: add two zeros at the end",
    t3_b3: "The value becomes 10 times larger",
    t3_inst: "Use 100-value blocks to create 500!",
    t3_h1: "Each block represents 100.",
    t3_h2: "Drag 5 blocks into the area.",
    t3_q: "What is 57 × 100?",
    t3_q_a: "570",
    t3_q_b: "5,700",
    t3_q_c: "5,007",
    t3_q_d: "57,000",
  },
  de: {
    explorer_title: "Multiplikations-Entdecker",
    t1_title: "Wiederholte Addition",
    t1_text: "Multiplikation ist eine Abkürzung, um dieselbe Zahl mehrmals zu addieren. 3 Gruppen von 4 ergeben zusammen 12!",
    t1_b1: "Die Zahlen heißen Faktoren",
    t1_b2: "Das Ergebnis ist das Produkt",
    t1_b3: "Reihenfolge ändert nichts am Ergebnis",
    t1_inst: "Kombiniere Blöcke, um 4 Gruppen von 5 zu zeigen (Gesamt: 20)!",
    t1_h1: "Jeder Block ist 5 Einheiten wert.",
    t1_h2: "Du brauchst 4 solche Blöcke.",
    t1_q: "Was ist das Gleiche wie 6 × 3?",
    t1_q_a: "6 + 6",
    t1_q_b: "3 + 3 + 3 + 3 + 3 + 3",
    t1_q_c: "6 + 3",
    t1_q_d: "3 × 3",
    t2_title: "Das Flächenmodell",
    t2_text: "Multiplikation kann man sich wie ein Rechteck vorstellen. Ein 5x7 Gitter hat insgesamt 35 kleine Quadrate.",
    t2_b1: "Zeilen × Spalten = Gesamtfläche",
    t2_b2: "Ideal für große Zahlen",
    t2_b3: "Länge mal Breite ergibt das Produkt",
    t2_inst: "Finde 24 auf dem Zahlenstrahl in 6er-Schritten!",
    t2_h1: "Starte bei 0 und springe 4-mal um 6.",
    t2_h2: "6, 12, 18... was ist der nächste Schritt?",
    t2_q: "Ein Gitter hat 4 Zeilen und 8 Spalten. Wie viele Quadrate sind es?",
    t2_q_a: "12",
    t2_q_b: "32",
    t2_q_c: "28",
    t2_q_d: "40",
    t3_title: "Multiplizieren mit 10 und 100",
    t3_text: "Bei der Multiplikation mit 10 rückt jede Ziffer eine Stelle nach links, und eine Null wird hinten angefügt.",
    t3_b1: "× 10: eine Null anhängen",
    t3_b2: "× 100: zwei Nullen anhängen",
    t3_b3: "Der Wert wird 10-mal größer",
    t3_inst: "Nutze 100er-Blöcke, um 500 zu bilden!",
    t3_h1: "Jeder Block steht für 100.",
    t3_h2: "Ziehe 5 Blöcke in den Bereich.",
    t3_q: "Was ist 57 × 100?",
    t3_q_a: "570",
    t3_q_b: "5.700",
    t3_q_c: "5.007",
    t3_q_d: "57.000",
  },
  hu: {
    explorer_title: "Szorzás felfedezése",
    t1_title: "Ismételt összeadás",
    t1_text: "A szorzás nem más, mint ugyanannak a számnak a többszöri összeadása. 3 darab 4-es csoport összesen 12-t ér!",
    t1_b1: "A szorzásban részt vevő számok a tényezők",
    t1_b2: "A szorzás eredménye a szorzat",
    t1_b3: "A tényezők felcserélhetők",
    t1_inst: "Vond össze a blokkokat: 4 darab 5-ös csoportot hozz létre (Összesen: 20)!",
    t1_h1: "Minden blokk 5 egységet ér.",
    t1_h2: "4 darab ilyen blokkra lesz szükséged.",
    t1_q: "Melyik egyenlő 6 × 3-mal?",
    t1_q_a: "6 + 6",
    t1_q_b: "3 + 3 + 3 + 3 + 3 + 3",
    t1_q_c: "6 + 3",
    t1_q_d: "3 × 3",
    t2_title: "A területi modell",
    t2_text: "A szorzást elképzelheted egy téglalapként is. Egy 5x7-es rács összesen 35 kis négyzetből áll.",
    t2_b1: "Sorok × Oszlopok = Teljes terület",
    t2_b2: "Segít a nagyobb szorzatok szemléltetésében",
    t2_b3: "Hosszúság szorozva szélességgel",
    t2_inst: "Keresd meg a 24-et a számegyenesen 6-os ugrásokkal!",
    t2_h1: "Indulj 0-ról és ugorj 4-et hatosával.",
    t2_h2: "6, 12, 18... mi a következő szám?",
    t2_q: "Ha egy rács 4 sorból és 8 oszlopból áll, hány négyzet van benne?",
    t2_q_a: "12",
    t2_q_b: "32",
    t2_q_c: "28",
    t2_q_d: "40",
    t3_title: "Szorzás 10-zel és 100-zal",
    t3_text: "Ha egy egész számot megszorzol 10-zel, minden számjegy egy helyiértékkel balra lép, a végére pedig egy nulla kerül.",
    t3_b1: "× 10: egy nullát írunk a végére",
    t3_b2: "× 100: két nullát írunk a végére",
    t3_b3: "Az érték tízszeresére nő",
    t3_inst: "Használj 100-as blokkokat az 500 létrehozásához!",
    t3_h1: "Minden blokk 100-at ér.",
    t3_h2: "Húzz 5 blokkot a területre.",
    t3_q: "Mennyi 57 × 100?",
    t3_q_a: "570",
    t3_q_b: "5700",
    t3_q_c: "5007",
    t3_q_d: "57 000",
  },
  ro: {
    explorer_title: "Explorator Înmulțire",
    t1_title: "Adunarea repetată",
    t1_text: "Înmulțirea este o metodă rapidă de a aduna același număr de mai multe ori. 3 grupuri de câte 4 fac 12 în total!",
    t1_b1: "Numerele care se înmulțesc sunt factori",
    t1_b2: "Rezultatul se numește produs",
    t1_b3: "Ordinea factorilor nu schimbă produsul",
    t1_inst: "Combină blocurile pentru a arăta 4 grupuri de 5 (Total: 20)!",
    t1_h1: "Fiecare bloc valorează 5 unități.",
    t1_h2: "Ai nevoie de 4 astfel de blocuri.",
    t1_q: "Cu ce este echivalent 6 × 3?",
    t1_q_a: "6 + 6",
    t1_q_b: "3 + 3 + 3 + 3 + 3 + 3",
    t1_q_c: "6 + 3",
    t1_q_d: "3 × 3",
    t2_title: "Modelul ariei",
    t2_text: "Poți imagina înmulțirea ca pe un dreptunghi. O grilă de 5 pe 7 conține în total 35 de pătrățele.",
    t2_b1: "Rânduri × Coloane = Aria totală",
    t2_b2: "Util pentru vizualizarea produselor mari",
    t2_b3: "Lungimea înmulțită cu lățimea",
    t2_inst: "Găsește 24 pe linia numerelor sărind din 6 în 6!",
    t2_h1: "Începe de la 0 și sari de 4 ori câte 6 unități.",
    t2_h2: "6, 12, 18... care este următorul pas?",
    t2_q: "Dacă o grilă are 4 rânduri și 8 coloane, câte pătrățele sunt?",
    t2_q_a: "12",
    t2_q_b: "32",
    t2_q_c: "28",
    t2_q_d: "40",
    t3_title: "Înmulțirea cu 10 și 100",
    t3_text: "Când înmulțești un număr cu 10, fiecare cifră se mută cu o poziție la stânga și se adaugă un zero la sfârșit.",
    t3_b1: "× 10: adaugă un zero la final",
    t3_b2: "× 100: adaugă două zerouri la final",
    t3_b3: "Valoarea devine de 10 ori mai mare",
    t3_inst: "Folosește blocuri de 100 pentru a crea 500!",
    t3_h1: "Fiecare bloc reprezintă 100.",
    t3_h2: "Trage 5 blocuri în zonă.",
    t3_q: "Cât este 57 × 100?",
    t3_q_a: "570",
    t3_q_b: "5.700",
    t3_q_c: "5.007",
    t3_q_d: "57.000",
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
      type: "block-drag",
      mode: "combine",
      groups: [5, 5, 5, 5],
      answer: 20,
      blockIcon: "🟡",
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
      max: 30,
      start: 0,
      target: 24,
      step: 6,
      showJumps: true,
      jumpCount: 4,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_b",
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
      groups: [1, 1, 1, 1, 1], // each block logic handle by engine to represent 100
      answer: 5,
      blockIcon: "💎",
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

const MultiplicationExplorer4 = memo(function MultiplicationExplorer4({
  color = "#F59E0B",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={4} explorerId="math_g4_multiplication" color={color} lang={lang} onDone={onDone} />;
});

export default MultiplicationExplorer4;
