"use client";
// RatioExplorer6 — Ratios & Proportional Distribution for Grade 6 (island i2)

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG ILLUSZTRÁCIÓK ──────────────────────────────────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="ratGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F97316" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FDBA74" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#ratGrad1)" rx="16" />
      {/* Visualizing 3:4 ratio */}
      <g transform="translate(40, 40)">
        {/* 3 Red Circles */}
        <circle cx="10" cy="10" r="8" fill="#EA580C" />
        <circle cx="30" cy="10" r="8" fill="#EA580C" />
        <circle cx="50" cy="10" r="8" fill="#EA580C" />

        <text x="80" y="15" fontSize="20" fontWeight="bold" fill="#9A3412" textAnchor="middle">:</text>

        {/* 4 Blue Circles */}
        <circle cx="110" cy="10" r="8" fill="#3B82F6" />
        <circle cx="130" cy="10" r="8" fill="#3B82F6" />
        <circle cx="150" cy="10" r="8" fill="#3B82F6" />
        <circle cx="170" cy="10" r="8" fill="#3B82F6" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="ratGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#C4B5FD" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#ratGrad2)" rx="16" />
      {/* Equivalent Ratios: Finding the missing term */}
      <g transform="translate(120, 70)">
        <text x="-40" y="-10" fontSize="20" fontWeight="bold" fill="#5B21B6" textAnchor="middle">2 : 5</text>
        <text x="0" y="-10" fontSize="20" fontWeight="bold" fill="#5B21B6" textAnchor="middle">=</text>
        <text x="40" y="-10" fontSize="20" fontWeight="bold" fill="#5B21B6" textAnchor="middle">x : 15</text>
        
        {/* Arrows to show multiplier */}
        <path d="M -20,5 Q 10,30 50,5" fill="none" stroke="#7C3AED" strokeWidth="2" markerEnd="url(#arrow)" />
        <text x="15" y="40" fontSize="12" fontWeight="bold" fill="#6D28D9" textAnchor="middle">× 3</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <defs>
        <linearGradient id="ratGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#34D399" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="240" height="140" fill="url(#ratGrad3)" rx="16" />
      {/* Proportional Distribution: 20 into 2:3 */}
      <g transform="translate(120, 40)">
        
        <rect x="-80" y="10" width="160" height="20" fill="#A7F3D0" rx="4" />
        <line x1="-16" y1="10" x2="-16" y2="30" stroke="#059669" strokeWidth="2" />
        <line x1="48" y1="10" x2="48" y2="30" stroke="#059669" strokeWidth="2" />
        
        {/* 2 parts */}
        <path d="M -80,40 L -80,45 L -16,45 L -16,40" fill="none" stroke="#059669" strokeWidth="2" />

        {/* 3 parts */}
        <path d="M -16,40 L -16,45 L 80,45 L 80,40" fill="none" stroke="#059669" strokeWidth="2" />
      </g>
    </svg>
  );
});

// ─── LABELS ──────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Ratios Explorer",
    t1_title: "What is a Ratio?",
    t1_text: "A ratio compares two quantities. If a recipe calls for 3 cups of flour for every 2 cups of sugar, the ratio of flour to sugar is 3:2. We can simplify ratios just like fractions!",
    t1_b1: "Written as 3:2 or '3 to 2'",
    t1_b2: "Order is very important",
    t1_b3: "Multiply or divide both sides to scale it",
    t1_inst: "Use the slider! If the ratio of red to blue is 3:4, how many blue do you need for 6 red?",
    t1_h1: "6 is double of 3.",
    t1_h2: "You must double the 4 as well. Set the slider to 8.",
    t1_q: "Simplify the ratio 10:15.",
    t1_q_a: "2:3",
    t1_q_b: "1:2",
    t1_q_c: "5:3",
    t1_q_d: "3:2",
    t2_title: "Finding the Missing Term",
    t2_text: "Sometimes we know the ratio, but a number is missing! If 2:5 = x:15, you ask yourself: 'What did I multiply 5 by to get 15?' The answer is 3. So, multiply 2 by 3 as well!",
    t2_b1: "Find the multiplier between the known parts",
    t2_b2: "Apply the same multiplier to the other side",
    t2_b3: "It works just like equivalent fractions",
    t2_inst: "Solve the equation to find x if x/15 = 2/5!",
    t2_step1: "Multiply both sides by 15",
    t2_h1: "To isolate x, multiply by 15.",
    t2_h2: "15 divided by 5 is 3. 3 times 2 is 6.",
    t2_q: "If 3:4 = 9:y, what is y?",
    t2_q_a: "12",
    t2_q_b: "8",
    t2_q_c: "16",
    t2_q_d: "15",
    t3_title: "Proportional Distribution",
    t3_text: "To divide an amount in a ratio (like sharing 20 coins in a 2:3 ratio), first find the TOTAL parts! 2 + 3 = 5 parts. Divide 20 by 5 to find that 1 part = 4 coins.",
    t3_b1: "Add the ratio numbers to find total parts",
    t3_b2: "Divide the total amount by the total parts",
    t3_b3: "Multiply to find each share",
    t3_inst: "Combine blocks! Share 20 coins in a 2:3 ratio. Build the smaller share (2 parts)!",
    t3_h1: "Total parts = 5. One part is 20 ÷ 5 = 4.",
    t3_h2: "The smaller share is 2 parts. 2 × 4 = 8. Build 8.",
    t3_q: "Divide 30 in a 1:4 ratio. What is the larger share?",
    t3_q_a: "24",
    t3_q_b: "6",
    t3_q_c: "20",
    t3_q_d: "25",
  },
  hu: {
    explorer_title: "Arányok felfedezése",
    t1_title: "Mi az az arány?",
    t1_text: "Az arány két mennyiséget hasonlít össze. Ha egy recept 3 pohár lisztet kér 2 pohár cukorhoz, a liszt és a cukor arány 3:2. Az arányokat ugyanúgy egyszerűsíthetjük, mint a törteket!",
    t1_b1: "Írásmód: 3:2 vagy '3 aránylik a 2-höz'",
    t1_b2: "A sorrend nagyon fontos!",
    t1_b3: "Szorozd/oszd mindkét oldalt a bővítéshez",
    t1_inst: "Használd a csúszkát! Ha a piros és kék aránya 3:4, hány kék kell 6 piroshoz?",
    t1_h1: "A 6 a 3-nak a duplája.",
    t1_h2: "A 4-et is dupláznod kell. Húzd a csúszkát 8-ra.",
    t1_q: "Egyszerűsítsd a 10:15 arányt!",
    t1_q_a: "2:3",
    t1_q_b: "1:2",
    t1_q_c: "5:3",
    t1_q_d: "3:2",
    t2_title: "A hiányzó tag",
    t2_text: "Néha tudjuk az arányt, de egy szám hiányzik! Ha 2:5 = x:15, tedd fel a kérdést: 'Mivel szoroztam az 5-öt, hogy 15 legyen?' A válasz 3. Tehát a 2-t is 3-mal kell szorozni!",
    t2_b1: "Keresd meg a szorzót az ismert részek között",
    t2_b2: "Alkalmazd ugyanezt a szorzót a másik oldalon is",
    t2_b3: "Ugyanúgy működik, mint a törtek bővítése",
    t2_inst: "Oldd meg az egyenletet, ha x / 15 = 2 / 5!",
    t2_step1: "Szorozd meg mindkét oldalt 15-tel",
    t2_h1: "Hogy az x egyedül maradjon, szorozz 15-tel.",
    t2_h2: "A 15 osztva 5-tel az 3. És 3-szor 2 az 6.",
    t2_q: "Ha 3:4 = 9:y, mennyi az y?",
    t2_q_a: "12",
    t2_q_b: "8",
    t2_q_c: "16",
    t2_q_d: "15",
    t3_title: "Arányos elosztás",
    t3_text: "Ha szét akarunk osztani valamit arányosan (pl. 20 érmét 2:3 arányban), először add össze az arányszámokat! 2+3 = 5 rész. Oszd el a 20-at 5-tel, így 1 rész = 4 érme.",
    t3_b1: "Add össze az arányszámokat az összes részhez",
    t3_b2: "Oszd el a teljes mennyiséget a részek számával",
    t3_b3: "Szorozz vissza, hogy megkapd az egyes részesedéseket",
    t3_inst: "Vond össze a blokkokat! Oszd el a 20-at 2:3 arányban, és építsd meg a kisebbik (2-es) részt!",
    t3_h1: "Összesen 5 rész van. Egy rész: 20 ÷ 5 = 4.",
    t3_h2: "A kisebbik részesedés 2 rész. 2 × 4 = 8. Építs meg 8-at.",
    t3_q: "Oszd el a 30-at 1:4 arányban! Mennyi a nagyobbik rész?",
    t3_q_a: "24",
    t3_q_b: "6",
    t3_q_c: "20",
    t3_q_d: "25",
  },
  de: {
    explorer_title: "Verhältnisse Entdecker",
    t1_title: "Was ist ein Verhältnis?",
    t1_text: "Ein Verhältnis vergleicht zwei Mengen. Wenn ein Rezept 3 Tassen Mehl für 2 Tassen Zucker verlangt, ist das Verhältnis 3:2. Man kann Verhältnisse kürzen wie Brüche!",
    t1_b1: "Geschrieben als 3:2",
    t1_b2: "Die Reihenfolge ist sehr wichtig",
    t1_b3: "Multipliziere oder dividiere beide Seiten",
    t1_inst: "Nutze den Regler! Wenn das Verhältnis Rot zu Blau 3:4 ist, wie viele Blaue brauchst du für 6 Rote?",
    t1_h1: "6 ist das Doppelte von 3.",
    t1_h2: "Du musst die 4 auch verdoppeln. Stelle 8 ein.",
    t1_q: "Kürze das Verhältnis 10:15.",
    t1_q_a: "2:3",
    t1_q_b: "1:2",
    t1_q_c: "5:3",
    t1_q_d: "3:2",
    t2_title: "Fehlendes Glied finden",
    t2_text: "Manchmal fehlt eine Zahl im Verhältnis! Bei 2:5 = x:15 frage dich: 'Womit wurde 5 multipliziert, um 15 zu erhalten?' Mit 3. Also rechne auch 2 mal 3!",
    t2_b1: "Finde den Faktor zwischen den bekannten Teilen",
    t2_b2: "Wende denselben Faktor auf die andere Seite an",
    t2_b3: "Funktioniert genau wie das Erweitern von Brüchen",
    t2_inst: "Löse die Gleichung für x, wenn x/15 = 2/5!",
    t2_step1: "Multipliziere beide Seiten mit 15",
    t2_h1: "Multipliziere mit 15, um x zu isolieren.",
    t2_h2: "15 geteilt durch 5 ist 3. Und 3 mal 2 ist 6.",
    t2_q: "Wenn 3:4 = 9:y, was ist y?",
    t2_q_a: "12",
    t2_q_b: "8",
    t2_q_c: "16",
    t2_q_d: "15",
    t3_title: "Proportionale Aufteilung",
    t3_text: "Um eine Menge im Verhältnis aufzuteilen (z.B. 20 Münzen im Verhältnis 2:3), finde die Gesamtteile! 2+3=5 Teile. 20 ÷ 5 = 4 Münzen pro Teil.",
    t3_b1: "Addiere die Zahlen für die Gesamtteile",
    t3_b2: "Teile die Gesamtmenge durch diese Teile",
    t3_b3: "Multipliziere, um jeden Anteil zu finden",
    t3_inst: "Kombiniere Blöcke! Teile 20 im Verhältnis 2:3. Bilde den kleineren Anteil (2 Teile)!",
    t3_h1: "Gesamt = 5 Teile. Ein Teil ist 20 ÷ 5 = 4.",
    t3_h2: "Der kleinere Teil hat 2 Anteile. 2 × 4 = 8. Baue 8.",
    t3_q: "Teile 30 im Verhältnis 1:4. Wie groß ist der größere Anteil?",
    t3_q_a: "24",
    t3_q_b: "6",
    t3_q_c: "20",
    t3_q_d: "25",
  },
  ro: {
    explorer_title: "Explorator Rapoarte",
    t1_title: "Ce este un Raport?",
    t1_text: "Un raport compară două cantități. Dacă o rețetă cere 3 căni de făină la 2 căni de zahăr, raportul este 3:2. Rapoartele se pot simplifica exact ca fracțiile!",
    t1_b1: "Scris ca 3:2 sau '3 la 2'",
    t1_b2: "Ordinea este foarte importantă",
    t1_b3: "Înmulțește sau împarte ambele părți",
    t1_inst: "Dacă raportul roșu:albastru este 3:4, câți albaștri ai nevoie pentru 6 roșii?",
    t1_h1: "6 este dublul lui 3.",
    t1_h2: "Trebuie să dublezi și 4. Setează cursorul la 8.",
    t1_q: "Simplifică raportul 10:15.",
    t1_q_a: "2:3",
    t1_q_b: "1:2",
    t1_q_c: "5:3",
    t1_q_d: "3:2",
    t2_title: "Găsirea termenului lipsă",
    t2_text: "Uneori cunoaștem raportul, dar lipsește un număr! Dacă 2:5 = x:15, te întrebi: 'Cu cât s-a înmulțit 5 pentru a deveni 15?' Cu 3. Așa că înmulțești și 2 cu 3!",
    t2_b1: "Găsește multiplicatorul",
    t2_b2: "Aplică-l pe cealaltă parte",
    t2_b3: "Este exact ca la fracțiile echivalente",
    t2_inst: "Rezolvă ecuația pentru a-l găsi pe x, dacă x/15 = 2/5!",
    t2_step1: "Înmulțește ambele părți cu 15",
    t2_h1: "Pentru a-l lăsa singur pe x, înmulțește cu 15.",
    t2_h2: "15 împărțit la 5 este 3. 3 ori 2 este 6.",
    t2_q: "Dacă 3:4 = 9:y, cât este y?",
    t2_q_a: "12",
    t2_q_b: "8",
    t2_q_c: "16",
    t2_q_d: "15",
    t3_title: "Distribuție Proporțională",
    t3_text: "Pentru a împărți o cantitate (ex. 20 monede în raport 2:3), află TOTALUL părților! 2+3 = 5 părți. Împarte 20 la 5, deci 1 parte = 4 monede.",
    t3_b1: "Adună numerele din raport",
    t3_b2: "Împarte totalul la suma obținută",
    t3_b3: "Înmulțește pentru a afla fiecare parte",
    t3_inst: "Combină blocurile! Împarte 20 în raport 2:3. Construiește partea mai mică (2 părți)!",
    t3_h1: "Total = 5 părți. O parte este 20 ÷ 5 = 4.",
    t3_h2: "Partea mai mică înseamnă 2 părți. 2 × 4 = 8. Construiește 8.",
    t3_q: "Împarte 30 în raport 1:4. Cât este partea mai mare?",
    t3_q_a: "24",
    t3_q_b: "6",
    t3_q_c: "20",
    t3_q_d: "25",
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
      baseValue: 3,      // 3 red
      basePrice: 4,      // 4 blue
      targetValue: 6,    // 6 red
      targetPrice: 8,    // 8 blue
      unitName: "red",
      currency: "blue",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_a", "t1_q_b", "t1_q_c", "t1_q_d"],
      answer: "t1_q_a", // 2:3
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      // Az új Equation Solver használata!
      type: "equation-solver",
      equation: "x / 15 = 2 / 5",
      steps: [
        { 
          instruction: "t2_step1", 
          choices: [3, 6, 10, 15], 
          answer: 6, 
          equation: "x = 6" 
        }
      ],
      finalAnswer: 6,
      variable: "x",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_a", "t2_q_b", "t2_q_c", "t2_q_d"],
      answer: "t2_q_a", // 12
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
      groups: [4, 4], // 2 parts, each part is 4 (total 8)
      answer: 8,
      blockIcon: "🪙",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a", // 24 (since 30 / 5 = 6. 6 * 4 = 24)
    },
  },
];

// ─── EXPLORER DEFINÍCIÓ ──────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "⚖️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ──────────────────────────────────────────────────────────

const RatioExplorer6 = memo(function RatioExplorer6({
  color = "#F97316",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={6} explorerId="math_g6_ratios" color={color} lang={lang} onDone={onDone} />;
});

export default RatioExplorer6;
