"use client";
// CompoundWordsExplorer.tsx — AstroMagyar Grade 3: i3 Összetett szavak szigete
// POOL-Powered ⚡: SZÓCSALÁD_POOL és MONDATOK_POOL használatával

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";
// IMPORTÁLJUK A POOL-OKAT
import { SZÓCSALÁD_POOL, MONDATOK_POOL } from "@/lib/visualGenerators";

// ─── EGYEDI ILUSZTRÁCIÓK ───────────────────

const FamilyTreeSvg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#064E3B" rx="20" />
    <g transform="translate(120, 80)">
      {/* Szócsalád fa szimbólum */}
      <path d="M -5,20 L -5,-10 L -30,-30 M 5,20 L 5,-10 L 30,-30 M 0,-10 L 0,-40" stroke="#00FF88" strokeWidth="6" strokeLinecap="round" />
      <circle cx="-30" cy="-35" r="12" fill="#059669" />
      <circle cx="30" cy="-35" r="12" fill="#059669" />
      <circle cx="0" cy="-45" r="15" fill="#10B981" />
      <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#D1FAE5">SZÓCSALÁDOK</text>
    </g>
  </svg>
));

const PuzzleChainSvg = memo(() => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill="#065F46" rx="20" />
    <g transform="translate(120, 70)">
      {/* Összekapcsolódó szavak (Puzzle) */}
      <rect x="-60" y="-15" width="50" height="30" fill="#10B981" rx="4" />
      <rect x="10" y="-15" width="50" height="30" fill="#34D399" rx="4" />
      <circle cx="5" cy="0" r="8" fill="#065F46" /> {/* A kivágás a puzzle-höz */}
      <circle cx="10" cy="0" r="8" fill="#10B981" /> {/* A fül */}
      <text x="0" y="40" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#D1FAE5">SZÓÖSSZETÉTEL</text>
    </g>
  </svg>
));

// ─── ADATOK ELŐKÉSZÍTÉSE ───────────────────

const csalad1 = SZÓCSALÁD_POOL[0]; // pl. "szép"
const mondat1 = MONDATOK_POOL[0]; // pl. "A macska alszik..."

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Összetett szavak szigete",
    t1_title: "A Szócsaládok",
    t1_text: "A szócsaládba olyan szavak tartoznak, amiknek ugyanaz a töve, és a jelentésük is összefügg. Mint egy igazi család!",
    t1_inst: "Válaszd ki a szótövet és a hozzá tartozó családtagokat!",
    
    t2_title: "Hosszú mondatok",
    t2_text: "Az összetett szavak segítenek, hogy pontosabban fogalmazzunk. Nézzük, fel tudod-e ismerni őket a mondatban!",
    t2_inst: "Rakd sorba a szavakat, hogy megkapd a mondatot!",
  }
};

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <FamilyTreeSvg />, // EGYEDI ÁBRA
    bulletKeys: [],
    interactive: {
      type: "highlight-text",
      // A POOL-ból vesszük a szavakat
      tokens: [csalad1.root, ...csalad1.words],
      correctIndices: [1, 2, 3], // Az első 3 származék
      instruction: `Jelöld ki a(z) '${csalad1.root}' szó rokonait!`,
      hint1: "Keresd a közös szótövet!",
      hint2: "Amik hasonlóan kezdődnek...",
    },
    quiz: {
      question: `Mi a közös szótő ebben a csoportban: sétál, sétány, séta?`,
      choices: ["sét", "séta", "sétál", "tál"],
      answer: "sét",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <PuzzleChainSvg />, // EGYEDI ÁBRA
    interactive: {
      type: "word-order",
      // Mondatrendezés POOL-ból
      words: mondat1.words,
      correctOrder: mondat1.words.map((_, i) => i),
      instruction: "t2_inst",
      hint1: "Keresd a nagybetűt!",
      hint2: "A pont a végén legyen!",
    },
    quiz: {
      question: "Hány szóból állt az előző mondat?",
      choices: [String(mondat1.words.length), "3", "10", "1"],
      answer: String(mondat1.words.length),
    },
  },
  {
    infoTitle: "Memória-torna",
    infoText: "Az összetett szavak két szóból állnak. Pl: vas + út = vasút.",
    svg: () => <PuzzleChainSvg />,
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: "vas", right: "út" },
        { left: "hó", right: "ember" },
        { left: "fali", right: "óra" },
      ],
      instruction: "Kapcsold össze a szópárokat!",
      hint1: "Mi jön ki belőlük?",
      hint2: "Értelmes szót keress!",
    },
    quiz: {
      question: "Melyik egy összetett szó?",
      choices: ["hóember", "futás", "piros", "asztal"],
      answer: "hóember",
    },
  },
  {
    infoTitle: "Siker!",
    infoText: "Már mestere vagy a szavak építésének! Gyűjts be 6 tollat az íráshoz!",
    svg: () => <FamilyTreeSvg />,
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "📝", count: 6 },
      instruction: "Kapd el a füzeteket!",
      hint1: "Már csak pár darab!",
      hint2: "Ügyes!",
    },
    quiz: {
      question: "Szereted a magyar nyelvtant?",
      choices: ["Igen!", "Nagyon!", "Persze!", "Imádom!"],
      answer: "Igen!",
    }
  }
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "📝",
  topics: TOPICS,
  rounds: [],
};

export default function CompoundWordsExplorer({ onDone, lang = "hu", color }: { onDone: (s: number, t: number) => void; lang?: string; color?: string }) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="magyar_o3_i3" color="#00FF88" lang={lang} onDone={onDone} />;
}
