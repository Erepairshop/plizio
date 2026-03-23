"use client";
// WordProblemIntro — Word problem reading (G1 i6)
// Now powered by ExplorerEngine v2

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG Illustrations ──────────────────────────────────────────────────────────────

// R2: Anna has 5 apples, gets 3 more = 8
const WpSvgR2 = memo(function WpSvgR2() {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      <defs>
        <linearGradient id="wpGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FECACA" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#wpGrad2)" rx="12" />
      {/* Girl with 5 apples */}
      <g transform="translate(35, 45)">
        <circle cx="0" cy="-8" r="5" fill="#FCD34D" />
        <circle cx="-1.5" cy="-9" r="0.8" fill="#1F2937" />
        <circle cx="1.5" cy="-9" r="0.8" fill="#1F2937" />
        <path d="M -1 -6 Q 0 -5 1 -6" stroke="#1F2937" strokeWidth="0.6" fill="none" />
        <rect x="-2.5" y="0" width="5" height="6" fill="#EF4444" rx="1" />
        <line x1="-2.5" y1="1" x2="-5" y2="0" stroke="#FCD34D" strokeWidth="1.2" />
        <line x1="2.5" y1="1" x2="5" y2="0" stroke="#FCD34D" strokeWidth="1.2" />
      </g>
      {/* 5 apples */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={`a1-${i}`} transform={`translate(${60 + i * 10}, 35)` }>
          <circle cx="0" cy="0" r="3.5" fill="#DC2626" />
          <path d="M 0 -2 L 0.2 -3.5 Q 0.3 -3.8 0.5 -3.5" stroke="#7C2D12" strokeWidth="0.5" fill="none" />
        </g>
      ))}
      {/* Plus sign */}
      <text x="110" y="50" fontSize="16" fontWeight="900" fill="#EF4444" textAnchor="middle">+</text>
      {/* 3 arriving apples */}
      {[0, 1, 2].map((i) => (
        <g key={`a2-${i}`} transform={`translate(${130 + i * 10}, 30)`}>
          <circle cx="0" cy="0" r="3.5" fill="#DC2626" opacity="0.7" />
          <path d="M 0 -2 L 0.2 -3.5 Q 0.3 -3.8 0.5 -3.5" stroke="#7C2D12" strokeWidth="0.5" fill="none" />
        </g>
      ))}
      <line x1="45" y1="75" x2="155" y2="75" stroke="#EF4444" strokeWidth="1.5" />
      <text x="100" y="95" fontSize="14" fontWeight="900" fill="#EF4444" textAnchor="middle">= 8 🍎</text>
    </svg>
  );
});

// R3: 9 birds, 4 fly away = 5
const WpSvgR3 = memo(function WpSvgR3() {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      <defs>
        <linearGradient id="wpGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FECACA" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#wpGrad3)" rx="12" />
      {/* Fence line */}
      <line x1="20" y1="60" x2="180" y2="60" stroke="#8B6F4E" strokeWidth="3" />
      {/* 9 birds (5 on fence, 4 flying away) */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
        const onFence = i < 5;
        const y = onFence ? 50 : 30 - Math.sin(i * 0.3) * 5;
        const opacity = onFence ? 1 : 0.4;
        return (
          <g key={`b-${i}`} transform={`translate(${25 + i * 19}, ${y})`} opacity={opacity}>
            <circle cx="0" cy="0" r="3.5" fill="#1F2937" />
            <ellipse cx="0" cy="0" rx="6" ry="2" fill="#374151" opacity="0.7" />
            <circle cx="2" cy="-1.5" r="0.8" fill="#FCD34D" />
          </g>
        );
      })}
      <text x="100" y="80" fontSize="16" fontWeight="900" fill="#EF4444" textAnchor="middle">− 4 ✈️</text>
      <line x1="45" y1="95" x2="155" y2="95" stroke="#EF4444" strokeWidth="1.5" />
      <text x="100" y="113" fontSize="14" fontWeight="900" fill="#EF4444" textAnchor="middle">= 5</text>
    </svg>
  );
});

// R4: Tom has 6 stickers, gets 4 more = 10
const WpSvgR4 = memo(function WpSvgR4() {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      <defs>
        <linearGradient id="wpGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FECACA" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#wpGrad4)" rx="12" />
      {/* Boy */}
      <g transform="translate(35, 45)">
        <circle cx="0" cy="-8" r="5" fill="#FCD34D" />
        <circle cx="-1.5" cy="-9" r="0.8" fill="#1F2937" />
        <circle cx="1.5" cy="-9" r="0.8" fill="#1F2937" />
        <path d="M -1 -6 Q 0 -5 1 -6" stroke="#1F2937" strokeWidth="0.6" fill="none" />
        <rect x="-2.5" y="0" width="5" height="6" fill="#3B82F6" rx="1" />
      </g>
      {/* 6 stickers (star shapes) */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={`s1-${i}`} transform={`translate(${62 + i * 11}, 36)` }>
          <polygon points="0,-4 0.8,-1.2 4,-1 1.2,1 2,4 0,2 -2,4 -1.2,1 -4,-1 -0.8,-1.2" fill="#FBBF24" />
        </g>
      ))}
      <text x="110" y="50" fontSize="16" fontWeight="900" fill="#EF4444" textAnchor="middle">+</text>
      {/* 4 more stickers */}
      {[0, 1, 2, 3].map((i) => (
        <g key={`s2-${i}`} transform={`translate(${130 + i * 11}, 32)`}>
          <polygon points="0,-3.5 0.7,-1 3.5,-0.8 1.2,0.8 1.8,3.2 0,1.8 -1.8,3.2 -1.2,0.8 -3.5,-0.8 -0.7,-1" fill="#FBBF24" opacity="0.7" />
        </g>
      ))}
      <line x1="45" y1="75" x2="155" y2="75" stroke="#EF4444" strokeWidth="1.5" />
      <text x="100" y="95" fontSize="14" fontWeight="900" fill="#EF4444" textAnchor="middle">= 10 ⭐</text>
    </svg>
  );
});

// ─── SVG Intro ──────────────────────────────────────────────────────────────
const WordProblemSvg = memo(function WordProblemSvg() {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      {/* Background gradient */}
      <defs>
        <linearGradient id="wpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EF4444" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#FECACA" stopOpacity="0.04" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#wpGrad)" rx="12" />

      {/* Character/child */}
      <g transform="translate(35, 45)">
        {/* Head */}
        <circle cx="0" cy="-8" r="6" fill="#FCD34D" stroke="#EF4444" strokeWidth="1.5" />
        {/* Eyes */}
        <circle cx="-2" cy="-9" r="1" fill="#1F2937" />
        <circle cx="2" cy="-9" r="1" fill="#1F2937" />
        {/* Smile */}
        <path d="M -2 -6 Q 0 -5 2 -6" stroke="#EF4444" strokeWidth="1" fill="none" strokeLinecap="round" />
        {/* Body */}
        <rect x="-3" y="0" width="6" height="8" fill="#EF4444" rx="1.5" />
        {/* Arms */}
        <line x1="-3" y1="2" x2="-8" y2="0" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" />
        <line x1="3" y1="2" x2="8" y2="0" stroke="#FCD34D" strokeWidth="2" strokeLinecap="round" />
        {/* Legs */}
        <line x1="-1.5" y1="8" x2="-1.5" y2="14" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="1.5" y1="8" x2="1.5" y2="14" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Apples (start with 5, then +3) */}
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={`start-${i}`} transform={`translate(${70 + i * 12}, 35)`}>
          <circle cx="0" cy="0" r="4.5" fill="#DC2626" opacity="0.85" />
          <path d="M 0 -3 L 0.3 -5 Q 0.5 -5.5 0.8 -5" stroke="#7C2D12" strokeWidth="0.6" fill="none" />
        </g>
      ))}

      {/* Plus sign */}
      <text x="145" y="50" fontSize="18" fontWeight="900" fill="#EF4444" textAnchor="middle">
        +
      </text>

      {/* More apples (3 arriving) */}
      {[0, 1, 2].map((i) => (
        <g key={`add-${i}`} transform={`translate(${160 + i * 11}, 30)` }>
          <circle cx="0" cy="0" r="4.5" fill="#DC2626" opacity="0.6" />
          <path d="M 0 -3 L 0.3 -5 Q 0.5 -5.5 0.8 -5" stroke="#7C2D12" strokeWidth="0.6" fill="none" />
          <circle cx="0" cy="0" r="4.5" fill="#FCA5A5" opacity="0.3" />
        </g>
      ))}

      {/* Thought bubble / Result area */}
      <g transform="translate(100, 85)">
        {/* Speech bubble */}
        <path d="M -30,-8 Q -30,-15 -20,-15 L 30,-15 Q 40,-15 40,-8 L 40,8 Q 40,15 30,15 L -20,15 Q -30,15 -30,8 Z" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
        {/* Tail */}
        <polygon points="-25,15 -20,20 -15,15" fill="#FEE2E2" stroke="#EF4444" strokeWidth="1.5" />
        {/* Answer */}
        <text x="0" y="8" fontSize="14" fontWeight="900" fill="#DC2626" textAnchor="middle">
          = 8 🍎
        </text>
      </g>
    </svg>
  );
});

const LABELS = {
  en: {
    title: "Story Problems",
    intro: "Let's read and solve story problems step by step!",
    problem1: "Anna has 5 apples. She gets 3 more. How many total?",
    problem2: "There are 9 birds on a fence. 4 fly away. How many left?",
    problem3: "Tom has 6 stickers. His mom gives him 4 more. How many does he have?",
    problem4: "Sara has 8 candies. She eats 3. How many are left?",
    problem5: "There are 7 flowers in a garden. 5 more bloom. How many now?",
    problem6: "A bus has 10 children. 6 get off at school. How many are still on the bus?",
  },
  hu: {
    title: "Szöveges feladatok",
    intro: "Olvassuk el és oldjuk meg a szöveges feladatokat lépésről lépésre!",
    problem1: "Annának 5 almája van. Még 3-at kap. Hány almája van összen?",
    problem2: "9 madár ül a kerítésen. 4 elrepül. Hány maradt?",
    problem3: "Tamásnak 6 matricája van. Anyja még 4-et ad. Hány matricája van?",
    problem4: "Sárának 8 cukorkája van. Megeszik 3-at. Hány maradt?",
    problem5: "7 virág van a kertben. Még 5 kinyílik. Hány van most?",
    problem6: "A buszon 10 gyerek utazik. 6 leszáll. Hány maradt a buszon?",
  },
  de: {
    title: "Sachaufgaben",
    intro: "Lass uns Sachaufgaben Schritt für Schritt lesen und lösen!",
    problem1: "Anna hat 5 Äpfel. Sie bekommt 3 mehr. Wie viele insgesamt?",
    problem2: "9 Vögel sitzen auf einem Zaun. 4 fliegen weg. Wie viele sind noch da?",
    problem3: "Tom hat 6 Sticker. Seine Mama gibt ihm 4 mehr. Wie viele hat er?",
    problem4: "Sara hat 8 Bonbons. Sie isst 3 davon. Wie viele sind noch da?",
    problem5: "Es sind 7 Blumen im Garten. 5 weitere blühen. Wie viele sind es jetzt?",
    problem6: "Im Bus sind 10 Kinder. 6 steigen an der Schule aus. Wie viele sind noch im Bus?",
  },
  ro: {
    title: "Probleme",
    intro: "Să citim și să rezolvăm problemele pas cu pas!",
    problem1: "Anna are 5 mere. Primește încă 3. Câte are în total?",
    problem2: "Pe gard sunt 9 păsări. 4 zboară. Câte au rămas?",
    problem3: "Tom are 6 abțibilduri. Mama lui îi dă încă 4. Câte are?",
    problem4: "Sara are 8 bomboane. Mănâncă 3. Câte au rămas?",
    problem5: "În grădină sunt 7 flori. Mai înfloresc 5. Câte sunt acum?",
    problem6: "În autobuz sunt 10 copii. 6 coboară. Câți au rămas în autobuz?",
  },
};

const DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "title",
      infoText: "intro",
      svg: () => <WordProblemSvg />,
      bulletKeys: ["problem1"],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "problem1",
      svg: () => <WpSvgR2 />,
      questions: [{ question: "problem1", choices: ["8", "7", "9", "6"], answer: "8" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "problem2",
      svg: () => <WpSvgR3 />,
      questions: [{ question: "problem2", choices: ["5", "4", "6", "7"], answer: "5" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "problem3",
      svg: () => <WpSvgR4 />,
      questions: [{ question: "problem3", choices: ["10", "9", "11", "8"], answer: "10" }],
    },
    {
      type: "mcq",
      infoTitle: "title",
      infoText: "intro",
      svg: () => <WordProblemSvg />,
      questions: [
        { question: "problem4", choices: ["5", "4", "6", "7"], answer: "5" },
        { question: "problem5", choices: ["12", "11", "13", "10"], answer: "12" },
        { question: "problem6", choices: ["4", "5", "3", "6"], answer: "4" },
      ],
    },
  ],
};

const WordProblemIntro = memo(function WordProblemIntro({
  color = "#EF4444",
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
