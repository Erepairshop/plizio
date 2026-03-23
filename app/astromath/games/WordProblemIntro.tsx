"use client";
// WordProblemIntro — Word problem reading (G1 i6)
// Uses new topic-based mode: teach → interact → quiz per topic

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG: Addition Word Problem (Anna's Apples) ──────────────────────────────────

const AdditionSvg = memo(function AdditionSvg() {
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="addG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FCD34D" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#addG)" rx="16" />

      {/* Girl with 5 apples */}
      <g transform="translate(40, 50)">
        <circle cx="0" cy="-8" r="5" fill="#FCD34D" />
        <circle cx="-1.5" cy="-9" r="0.8" fill="#1F2937" />
        <circle cx="1.5" cy="-9" r="0.8" fill="#1F2937" />
        <path d="M -1 -6 Q 0 -5 1 -6" stroke="#1F2937" strokeWidth="0.6" fill="none" />
        <rect x="-2.5" y="0" width="5" height="6" fill="#EF4444" rx="1" />
        <line x1="-3" y1="1.5" x2="-6" y2="0.5" stroke="#FCD34D" strokeWidth="1.2" />
        <line x1="3" y1="1.5" x2="6" y2="0.5" stroke="#FCD34D" strokeWidth="1.2" />
      </g>

      {/* 5 apples */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={`a1-${i}`} transform={`translate(${70 + i * 12}, 40)` }>
          <circle cx="0" cy="0" r="3.5" fill="#DC2626" />
          <path d="M 0 -2 L 0.2 -3.5 Q 0.3 -3.8 0.5 -3.5" stroke="#7C2D12" strokeWidth="0.5" fill="none" />
        </g>
      ))}

      {/* Plus sign */}
      <text x="125" y="55" fontSize="18" fontWeight="900" fill="#FCD34D" textAnchor="middle">+</text>

      {/* 3 more apples arriving */}
      {[0, 1, 2].map((i) => (
        <g key={`a2-${i}`} transform={`translate(${145 + i * 12}, 35)`}>
          <circle cx="0" cy="0" r="3.5" fill="#DC2626" opacity="0.6" />
          <path d="M 0 -2 L 0.2 -3.5 Q 0.3 -3.8 0.5 -3.5" stroke="#7C2D12" strokeWidth="0.5" fill="none" />
        </g>
      ))}

      {/* Arrow pointing down */}
      <line x1="120" y1="70" x2="120" y2="110" stroke="#FCD34D" strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="120,110 116,102 124,102" fill="#FCD34D" />

      {/* Answer box */}
      <rect x="80" y="115" width="80" height="32" fill="#FEF3C7" rx="8" />
      <text x="120" y="142" fontSize="16" fontWeight="900" fill="#D97706" textAnchor="middle">= 8 🍎</text>
    </svg>
  );
});

// ─── SVG: Subtraction Word Problem (Birds on Fence) ──────────────────────────────

const SubtractionSvg = memo(function SubtractionSvg() {
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="subG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#F472B6" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#subG)" rx="16" />

      {/* Fence */}
      <line x1="20" y1="70" x2="220" y2="70" stroke="#8B6F4E" strokeWidth="4" />
      <line x1="20" y1="60" x2="220" y2="60" stroke="#6B5344" strokeWidth="2" />

      {/* 9 birds total (5 on fence, 4 flying away) */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        const onFence = i < 5;
        const y = onFence ? 65 : 40 + Math.sin(i * 0.5) * 8;
        const opacity = onFence ? 1 : 0.5;
        return (
          <g key={`b-${i}`} transform={`translate(${25 + i * 22}, ${y})`} opacity={opacity}>
            <circle cx="0" cy="0" r="3" fill="#1F2937" />
            <ellipse cx="0" cy="0" rx="5.5" ry="2.5" fill="#374151" opacity="0.7" />
            <circle cx="1.5" cy="-1.5" r="0.7" fill="#FCD34D" />
          </g>
        );
      })}

      {/* Minus sign */}
      <text x="125" y="125" fontSize="18" fontWeight="900" fill="#EC4899" textAnchor="middle">−</text>

      {/* Number 4 */}
      <text x="155" y="125" fontSize="16" fontWeight="900" fill="#EC4899" textAnchor="middle">4</text>

      {/* Arrow pointing down */}
      <line x1="120" y1="110" x2="120" y2="130" stroke="#EC4899" strokeWidth="2.5" strokeLinecap="round" />
      <polygon points="120,130 116,122 124,122" fill="#EC4899" />

      {/* Answer box */}
      <rect x="80" y="135" width="80" height="32" fill="#FCE7F3" rx="8" />
      <text x="120" y="162" fontSize="16" fontWeight="900" fill="#BE185D" textAnchor="middle">= 5 🔮</text>
    </svg>
  );
});

// ─── SVG: Mixed Problem (Number Line) ─────────────────────────────────────────────

const MixedSvg = memo(function MixedSvg() {
  return (
    <svg width="100%" viewBox="0 0 240 160">
      <defs>
        <linearGradient id="mixG" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#818CF8" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="240" height="160" fill="url(#mixG)" rx="16" />

      {/* Number line */}
      <line x1="20" y1="60" x2="220" y2="60" stroke="rgba(255,255,255,0.3)" strokeWidth="2.5" strokeLinecap="round" />

      {/* Tick marks and numbers */}
      {Array.from({ length: 21 }, (_, i) => {
        const x = 20 + i * 10;
        return (
          <g key={`tick-${i}`}>
            <line x1={x} y1="54" x2={x} y2="66" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
            {i % 5 === 0 && (
              <text x={x} y="80" fontSize="11" fontWeight="600" fill="rgba(255,255,255,0.5)" textAnchor="middle">
                {i}
              </text>
            )}
          </g>
        );
      })}

      {/* Start position: 8 (highlighted) */}
      <circle cx="100" cy="47" r="4.5" fill="#6366F1" />
      <text x="100" y="35" fontSize="12" fontWeight="bold" fill="#6366F1" textAnchor="middle">Start: 8</text>

      {/* Jump indicator: +5 */}
      <path d="M 100 47 Q 140 20 180 47" stroke="#6366F1" strokeWidth="2.5" fill="none" strokeDasharray="5,3" />
      <text x="140" y="15" fontSize="11" fontWeight="900" fill="#6366F1" textAnchor="middle">+5</text>

      {/* End position: 13 (highlighted) */}
      <circle cx="180" cy="47" r="4.5" fill="#10B981" />
      <text x="180" y="35" fontSize="12" fontWeight="bold" fill="#10B981" textAnchor="middle">End: 13</text>

      {/* Question text */}
      <rect x="50" y="100" width="140" height="50" fill="rgba(99,102,241,0.1)" rx="8" />
      <text x="120" y="120" fontSize="13" fontWeight="bold" fill="#6366F1" textAnchor="middle">6 birds on fence</text>
      <text x="120" y="138" fontSize="13" fontWeight="bold" fill="#6366F1" textAnchor="middle">3 fly away → How many left?</text>
    </svg>
  );
});

// ─── Labels (4 languages) ────────────────────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    // Explorer meta
    explorer_title: "Word Problems",
    // Topic 1: Addition
    t1_title: "Addition Word Problems",
    t1_text: "Addition word problems ask 'how many altogether?' Read carefully and find what you need to add together!",
    t1_b1: "Find the first amount",
    t1_b2: "Find what you add to it",
    t1_b3: "Add them: first + added = total",
    t1_inst: "Drag 3 apples to the 5 apples! How many in total?",
    t1_h1: "You start with 5 apples",
    t1_h2: "Adding 3 more gives you 8 apples total",
    t1_q: "Tom has 7 stickers. He gets 4 more. How many does he have?",
    t1_q_10: "10",
    t1_q_11: "11",
    t1_q_12: "12",
    t1_q_9: "9",
    // Topic 2: Subtraction
    t2_title: "Subtraction Word Problems",
    t2_text: "Subtraction word problems ask 'how many are left?' Read carefully and find what is being taken away!",
    t2_b1: "Find the starting amount",
    t2_b2: "Find what goes away",
    t2_b3: "Subtract: starting - going away = left",
    t2_inst: "Tap the marbles that are LEFT when 4 fly away from 9!",
    t2_h1: "You start with 9 marbles",
    t2_h2: "Taking away 4 leaves you with 5",
    t2_q: "Lisa has 12 cookies. She eats 5. How many are left?",
    t2_q_6: "6",
    t2_q_7: "7",
    t2_q_8: "8",
    t2_q_5: "5",
    // Topic 3: Mixed
    t3_title: "Read & Solve",
    t3_text: "Some word problems tell a story! Read carefully to find: Do we add or subtract? Use the number line to jump from start to end!",
    t3_b1: "Read the whole story",
    t3_b2: "Decide: add or subtract?",
    t3_b3: "Use a number line or blocks to solve",
    t3_inst: "Jump from 8 to 13 on the number line! How many jumps?",
    t3_h1: "Start at 8, need to reach 13",
    t3_h2: "Count the jumps: 8→9→10→11→12→13 = 5 jumps",
    t3_q: "6 birds sit on a fence. 3 fly away. How many remain?",
    t3_q_2: "2",
    t3_q_3: "3",
    t3_q_4: "4",
    t3_q_9: "9",
  },
  de: {
    explorer_title: "Sachaufgaben",
    t1_title: "Additionsaufgaben",
    t1_text: "Additionsaufgaben fragen 'wie viele insgesamt?' Lies genau und finde heraus, was du zusammenzählen musst!",
    t1_b1: "Finde die erste Menge",
    t1_b2: "Finde, was hinzukommt",
    t1_b3: "Addiere: erste + hinzugefügt = insgesamt",
    t1_inst: "Ziehe 3 Äpfel zu den 5 Äpfeln! Wie viele insgesamt?",
    t1_h1: "Du fängst mit 5 Äpfeln an",
    t1_h2: "Wenn du 3 mehr addierst, hast du 8 Äpfel",
    t1_q: "Tom hat 7 Sticker. Er bekommt 4 mehr. Wie viele hat er?",
    t1_q_10: "10",
    t1_q_11: "11",
    t1_q_12: "12",
    t1_q_9: "9",
    t2_title: "Subtraktionsaufgaben",
    t2_text: "Subtraktionsaufgaben fragen 'wie viele sind noch da?' Lies genau und finde heraus, was weggeht!",
    t2_b1: "Finde die Anfangsmenge",
    t2_b2: "Finde, was weggeht",
    t2_b3: "Subtrahiere: anfang - weggeht = bleibt",
    t2_inst: "Tippe auf die Murmeln, die BLEIBEN, wenn 4 wegfliegen!",
    t2_h1: "Du fängst mit 9 Murmeln an",
    t2_h2: "Wenn 4 wegfliegen, bleiben 5",
    t2_q: "Lisa hat 12 Kekse. Sie isst 5. Wie viele bleiben?",
    t2_q_6: "6",
    t2_q_7: "7",
    t2_q_8: "8",
    t2_q_5: "5",
    t3_title: "Lesen & Lösen",
    t3_text: "Manche Sachaufgaben erzählen eine Geschichte! Lies sorgfältig und entscheide: Addieren oder subtrahieren? Nutze den Zahlenstrahl zum Springen!",
    t3_b1: "Lese die ganze Geschichte",
    t3_b2: "Entscheide: addieren oder subtrahieren?",
    t3_b3: "Nutze einen Zahlenstrahl oder Bausteine zum Lösen",
    t3_inst: "Springe von 8 zu 13 auf dem Zahlenstrahl! Wie viele Sprünge?",
    t3_h1: "Beginne bei 8, erreiche 13",
    t3_h2: "Zähle die Sprünge: 8→9→10→11→12→13 = 5 Sprünge",
    t3_q: "6 Vögel sitzen auf einem Zaun. 3 fliegen weg. Wie viele bleiben?",
    t3_q_2: "2",
    t3_q_3: "3",
    t3_q_4: "4",
    t3_q_9: "9",
  },
  hu: {
    explorer_title: "Szöveges feladatok",
    t1_title: "Összeadásos szöveges feladatok",
    t1_text: "Az összeadásos feladatok azt kérdezik: 'hány van összesen?' Olvasd el figyelmesen és találd meg, mit kell összeadni!",
    t1_b1: "Találd meg az első mennyiséget",
    t1_b2: "Találd meg, mit adunk hozzá",
    t1_b3: "Összeadás: első + hozzáadott = összesen",
    t1_inst: "Húzz 3 almát az 5 almához! Hány van összesen?",
    t1_h1: "5 almával kezdesz",
    t1_h2: "Ha 3-at hozzáadod, 8 alma lesz",
    t1_q: "Tamásnak 7 matricája van. Még 4-et kap. Hány matricája van?",
    t1_q_10: "10",
    t1_q_11: "11",
    t1_q_12: "12",
    t1_q_9: "9",
    t2_title: "Kivonásos szöveges feladatok",
    t2_text: "A kivonásos feladatok azt kérdezik: 'hány maradt?' Olvasd el figyelmesen és találd meg, mit veszünk el!",
    t2_b1: "Találd meg a kezdő mennyiséget",
    t2_b2: "Találd meg, mit veszünk el",
    t2_b3: "Kivonás: kezdő - elveszünk = marad",
    t2_inst: "Koppints azokra a golyókra, amelyek MARADNAK, ha 4 elrepül!",
    t2_h1: "9 golyóval kezdesz",
    t2_h2: "Ha 4 elrepül, 5 marad",
    t2_q: "Anikónak 12 cukorkája van. Megeszik 5-öt. Hány marad?",
    t2_q_6: "6",
    t2_q_7: "7",
    t2_q_8: "8",
    t2_q_5: "5",
    t3_title: "Olvass & Oldd meg",
    t3_text: "Néhány feladat egy történetet mesél! Olvasd el gondosan és dönts: összeadunk vagy kivonunk? Használd a számegyenest a számok közötti ugráláshoz!",
    t3_b1: "Olvasd el az egész történetet",
    t3_b2: "Döntsd el: összeadás vagy kivonás?",
    t3_b3: "Számegyenessel vagy kockákkal oldd meg",
    t3_inst: "Ugraj 8-ról 13-ra a számegyenesen! Hány ugrás?",
    t3_h1: "Kezdj a 8-nál, érj el 13-hoz",
    t3_h2: "Számold az ugrásokat: 8→9→10→11→12→13 = 5 ugrás",
    t3_q: "6 madár ül a kerítésen. 3 elrepül. Hány maradt?",
    t3_q_2: "2",
    t3_q_3: "3",
    t3_q_4: "4",
    t3_q_9: "9",
  },
  ro: {
    explorer_title: "Probleme",
    t1_title: "Probleme cu adunare",
    t1_text: "Problemele cu adunare întreabă 'câte sunt în total?' Citește cu atenție și găsește ce trebuie să aduni!",
    t1_b1: "Găsește prima cantitate",
    t1_b2: "Găsește ceea ce se adaugă",
    t1_b3: "Adună: prima + adăugată = total",
    t1_inst: "Trage 3 mere la 5 mere! Câte sunt în total?",
    t1_h1: "Începi cu 5 mere",
    t1_h2: "Dacă adaugi 3 mai mult, ai 8 mere",
    t1_q: "Tom are 7 abțibilduri. Primește încă 4. Câte are?",
    t1_q_10: "10",
    t1_q_11: "11",
    t1_q_12: "12",
    t1_q_9: "9",
    t2_title: "Probleme cu scădere",
    t2_text: "Problemele cu scădere întreabă 'câte au rămas?' Citește cu atenție și găsește ceea ce se ia!",
    t2_b1: "Găsește cantitatea inițială",
    t2_b2: "Găsește ceea ce se ia",
    t2_b3: "Scade: inițial - luat = rămâne",
    t2_inst: "Atinge bilele care RĂMÂN când 4 zboară!",
    t2_h1: "Începi cu 9 bile",
    t2_h2: "Când 4 zboară, rămân 5",
    t2_q: "Lisa are 12 biscuiți. Mănâncă 5. Câți rămân?",
    t2_q_6: "6",
    t2_q_7: "7",
    t2_q_8: "8",
    t2_q_5: "5",
    t3_title: "Citește & Rezolvă",
    t3_text: "Unele probleme povestesc o poveste! Citește cu grijă și decide: adunăm sau scădem? Folosește linia numerelor pentru a sări de la început la final!",
    t3_b1: "Citește toată povestea",
    t3_b2: "Decide: adunare sau scădere?",
    t3_b3: "Folosește linia numerelor sau blocuri pentru a rezolva",
    t3_inst: "Sări de la 8 la 13 pe linia numerelor! Câți sărituri?",
    t3_h1: "Începe la 8, ajunge la 13",
    t3_h2: "Numără săriturile: 8→9→10→11→12→13 = 5 sărituri",
    t3_q: "6 păsări stau pe gard. 3 zboară. Câte rămân?",
    t3_q_2: "2",
    t3_q_3: "3",
    t3_q_4: "4",
    t3_q_9: "9",
  },
};

// ─── Topic definitions ───────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  // Topic 1: Addition word problems
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <AdditionSvg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [5, 3],
      answer: 8,
      blockIcon: "🍎",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_q_9", "t1_q_10", "t1_q_11", "t1_q_12"],
      answer: "t1_q_11",
    },
  },

  // Topic 2: Subtraction word problems
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <SubtractionSvg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "block-drag",
      mode: "split",
      groups: [9, 4],
      answer: 5,
      blockIcon: "🔮",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_q_5", "t2_q_6", "t2_q_7", "t2_q_8"],
      answer: "t2_q_7",
    },
  },

  // Topic 3: Mixed (add/subtract decision)
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <MixedSvg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 20,
      start: 8,
      target: 13,
      showJumps: true,
      jumpCount: 5,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_2", "t3_q_3", "t3_q_4", "t3_q_9"],
      answer: "t3_q_3",
    },
  },
];

// ─── Explorer definition ─────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📖",
  topics: TOPICS,
  rounds: [], // legacy — not used in topic mode
};

// ─── Export ──────────────────────────────────────────────────────────────────────

const WordProblemIntro = memo(function WordProblemIntro({
  color = "#FFD700",
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return <ExplorerEngine def={DEF} grade={1} explorerId="math_g1_wordproblem" color={color} lang={lang} onDone={onDone} />;
});

export default WordProblemIntro;
