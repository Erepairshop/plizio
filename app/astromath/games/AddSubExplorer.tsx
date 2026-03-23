"use client";
// AddSubExplorer — Addition/Subtraction visualized (G1 i2, i3)
// Now powered by ExplorerEngine v2

import { memo } from "react";
import ExplorerEngine from "@/app/astro-biologie/games/ExplorerEngine";
import type { ExplorerDef } from "@/app/astro-biologie/games/ExplorerEngine";

// ─── SVG Intro ──────────────────────────────────────────────────────────────
const AddSubSvg = memo(function AddSubSvg({ isAdd }: { isAdd: boolean }) {
  return (
    <svg width={200} height={120} viewBox="0 0 200 120">
      {/* Background */}
      <defs>
        <linearGradient id="addGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={isAdd ? "#FBBF24" : "#F87171"} stopOpacity="0.15" />
          <stop offset="100%" stopColor={isAdd ? "#FCD34D" : "#FCA5A5"} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect width="200" height="120" fill="url(#addGrad)" rx="12" />

      {/* Apples left group (3 or 7) */}
      {isAdd
        ? [0, 1, 2].map((i) => (
            <g key={`a-${i}`} transform={`translate(${20 + i * 25}, 30)`}>
              <circle cx="0" cy="0" r="12" fill="#DC2626" />
              <circle cx="-4" cy="-3" r="2.5" fill="#991B1B" />
              <circle cx="4" cy="-3" r="2.5" fill="#991B1B" />
              <path d="M -2 2 Q 0 4 2 2" stroke="#991B1B" strokeWidth="1" fill="none" />
              <path d="M -1 -8 L -0.5 -12 Q 0.5 -13 1 -12" stroke="#7C2D12" strokeWidth="1.5" fill="none" />
            </g>
          ))
        : [0, 1, 2, 3, 4, 5, 6].map((i) => (
            <g key={`a-${i}`} transform={`translate(${8 + i * 13}, 35)`}>
              <circle cx="0" cy="0" r="6" fill="#DC2626" opacity={i < 5 ? 1 : 0.4} />
              <path d="M -0.5 -4 L 0 -5 Q 0.3 -5.5 0.5 -5" stroke="#7C2D12" strokeWidth="0.8" fill="none" opacity={i < 5 ? 1 : 0.4} />
            </g>
          ))}

      {/* Operator symbol */}
      <g transform="translate(130, 60)">
        <text x="0" y="8" fontSize="28" fontWeight="900" fill={isAdd ? "#FBBF24" : "#F87171"} textAnchor="middle">
          {isAdd ? "+" : "−"}
        </text>
      </g>

      {/* Apples right group (2 or 3) */}
      {isAdd
        ? [0, 1].map((i) => (
            <g key={`b-${i}`} transform={`translate(${155 + i * 25}, 30)`}>
              <circle cx="0" cy="0" r="12" fill="#DC2626" />
              <circle cx="-4" cy="-3" r="2.5" fill="#991B1B" />
              <circle cx="4" cy="-3" r="2.5" fill="#991B1B" />
              <path d="M -2 2 Q 0 4 2 2" stroke="#991B1B" strokeWidth="1" fill="none" />
              <path d="M -1 -8 L -0.5 -12 Q 0.5 -13 1 -12" stroke="#7C2D12" strokeWidth="1.5" fill="none" />
            </g>
          ))
        : [0, 1, 2].map((i) => (
            <g key={`b-${i}`} transform={`translate(${155 + i * 13}, 35)`}>
              <circle cx="0" cy="0" r="6" fill="#DC2626" />
              <path d="M -0.5 -4 L 0 -5 Q 0.3 -5.5 0.5 -5" stroke="#7C2D12" strokeWidth="0.8" fill="none" />
            </g>
          ))}

      {/* Equals */}
      <g transform="translate(100, 90)">
        <line x1="-12" y1="-2" x2="12" y2="-2" stroke={isAdd ? "#FBBF24" : "#F87171"} strokeWidth="2.5" />
        <line x1="-12" y1="2" x2="12" y2="2" stroke={isAdd ? "#FBBF24" : "#F87171"} strokeWidth="2.5" />
      </g>
      <text x="130" y="100" fontSize="14" fontWeight="bold" fill={isAdd ? "#FBBF24" : "#F87171"} textAnchor="middle">
        {isAdd ? "5" : "4"}
      </text>
    </svg>
  );
});

const LABELS = {
  en: {
    addTitle: "Addition Explorer",
    subTitle: "Subtraction Explorer",
    addIntro: "When we ADD, numbers get BIGGER!",
    subIntro: "When we SUBTRACT, numbers get SMALLER!",
    add3plus2: "3 apples + 2 apples = ?",
    add4plus3: "4 stars + 3 stars = ?",
    add2plus5: "2 flowers + 5 flowers = ?",
    sub7minus3: "7 birds - 3 birds = ?",
    sub6minus2: "6 stars - 2 stars = ?",
    sub8minus5: "8 flowers - 5 flowers = ?",
  },
  hu: {
    addTitle: "Összeadás felfedezés",
    subTitle: "Kivonás felfedezés",
    addIntro: "Ha HOZZÁADUNK, a számok NAGYOBBAK lesznek!",
    subIntro: "Ha ELVESZÜNK, a számok KISEBBEK lesznek!",
    add3plus2: "3 alma + 2 alma = ?",
    add4plus3: "4 csillag + 3 csillag = ?",
    add2plus5: "2 virág + 5 virág = ?",
    sub7minus3: "7 madár - 3 madár = ?",
    sub6minus2: "6 csillag - 2 csillag = ?",
    sub8minus5: "8 virág - 5 virág = ?",
  },
  de: {
    addTitle: "Addition entdecken",
    subTitle: "Subtraktion entdecken",
    addIntro: "Wenn wir ADDIEREN, werden Zahlen GRÖSSER!",
    subIntro: "Wenn wir SUBTRAHIEREN, werden Zahlen KLEINER!",
    add3plus2: "3 Äpfel + 2 Äpfel = ?",
    add4plus3: "4 Sterne + 3 Sterne = ?",
    add2plus5: "2 Blumen + 5 Blumen = ?",
    sub7minus3: "7 Vögel - 3 Vögel = ?",
    sub6minus2: "6 Sterne - 2 Sterne = ?",
    sub8minus5: "8 Blumen - 5 Blumen = ?",
  },
  ro: {
    addTitle: "Explorare adunare",
    subTitle: "Explorare scădere",
    addIntro: "Când ADUNĂM, numerele devin MAI MARI!",
    subIntro: "Când SCĂDEM, numerele devin MAI MICI!",
    add3plus2: "3 mere + 2 mere = ?",
    add4plus3: "4 stele + 3 stele = ?",
    add2plus5: "2 flori + 5 flori = ?",
    sub7minus3: "7 păsări - 3 păsări = ?",
    sub6minus2: "6 stele - 2 stele = ?",
    sub8minus5: "8 flori - 5 flori = ?",
  },
};

const ADD_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "addTitle",
      infoText: "addIntro",
      svg: () => <AddSubSvg isAdd={true} />,
      bulletKeys: ["add3plus2"],
    },
    {
      type: "mcq",
      infoTitle: "addTitle",
      infoText: "add3plus2",
      svg: noSvg,
      questions: [{ question: "add3plus2", choices: ["5", "3", "6", "2"], answer: "5" }],
    },
    {
      type: "mcq",
      infoTitle: "addTitle",
      infoText: "add4plus3",
      svg: noSvg,
      questions: [{ question: "add4plus3", choices: ["7", "5", "8", "6"], answer: "7" }],
    },
    {
      type: "mcq",
      infoTitle: "addTitle",
      infoText: "add2plus5",
      svg: noSvg,
      questions: [{ question: "add2plus5", choices: ["7", "5", "8", "6"], answer: "7" }],
    },
    {
      type: "mcq",
      infoTitle: "addTitle",
      infoText: "addIntro",
      svg: noSvg,
      questions: [
        { question: "add3plus2", choices: ["5", "3", "6", "2"], answer: "5" },
        { question: "add4plus3", choices: ["7", "5", "8", "6"], answer: "7" },
        { question: "add2plus5", choices: ["7", "5", "8", "6"], answer: "7" },
      ],
    },
  ],
};

const SUB_DEF: ExplorerDef = {
  labels: LABELS,
  rounds: [
    {
      type: "info",
      infoTitle: "subTitle",
      infoText: "subIntro",
      svg: () => <AddSubSvg isAdd={false} />,
      bulletKeys: ["sub7minus3"],
    },
    {
      type: "mcq",
      infoTitle: "subTitle",
      infoText: "sub7minus3",
      svg: noSvg,
      questions: [{ question: "sub7minus3", choices: ["4", "5", "6", "3"], answer: "4" }],
    },
    {
      type: "mcq",
      infoTitle: "subTitle",
      infoText: "sub6minus2",
      svg: noSvg,
      questions: [{ question: "sub6minus2", choices: ["4", "3", "5", "2"], answer: "4" }],
    },
    {
      type: "mcq",
      infoTitle: "subTitle",
      infoText: "sub8minus5",
      svg: noSvg,
      questions: [{ question: "sub8minus5", choices: ["3", "4", "5", "2"], answer: "3" }],
    },
    {
      type: "mcq",
      infoTitle: "subTitle",
      infoText: "subIntro",
      svg: noSvg,
      questions: [
        { question: "sub7minus3", choices: ["4", "5", "6", "3"], answer: "4" },
        { question: "sub6minus2", choices: ["4", "3", "5", "2"], answer: "4" },
        { question: "sub8minus5", choices: ["3", "4", "5", "2"], answer: "3" },
      ],
    },
  ],
};

const AddSubExplorer = memo(function AddSubExplorer({
  color = "#3B82F6",
  onDone,
  lang = "en",
  isAdd = true,
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
  isAdd?: boolean;
}) {
  const def = isAdd ? ADD_DEF : SUB_DEF;
  return <ExplorerEngine def={def} grade={1} explorerId="math_g1_addsub" color={color} lang={lang} onDone={onDone} />;
});

export default AddSubExplorer;
