"use client";
// IdiomsExplorer.tsx — AstroMagyar Grade 3: i5 Szólások szigete
// Témák: Szólások, Közmondások, Érzelmek, Időkifejezések

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── PLACEHOLDER (SVG helyett) ───────────────────
const PlaceholderSvg = memo(({ emoji, color }: { emoji: string; color: string }) => (
  <svg width="100%" viewBox="0 0 240 140">
    <rect width="240" height="140" fill={color} rx="20" opacity="0.2" />
    <text x="50%" y="60%" textAnchor="middle" fontSize="60">{emoji}</text>
  </svg>
));

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Szólások szigete",
    
    // T1: Szólások
    t1_title: "Mit jelent valójában?",
    t1_text: "A szólásokat nem szabad szó szerint érteni! Ha valaki 'itatja az egereket', az valójában azt jelenti, hogy sír.",
    t1_inst: "Párosítsd a szólást a valódi jelentésével!",
    t1_l1: "Kereket old", t1_r1: "Elmenekül",
    t1_l2: "Csapja a szelet", t1_r2: "Udvarol",
    t1_l3: "Farkasszemet néz", t1_r3: "Bátran szembenéz",
    
    // T2: Közmondások
    t2_title: "Régi bölcsességek",
    t2_text: "A közmondások rövid, tanító célú mondatok. Pl: 'Sok lúd disznót győz.' Ez azt jelenti, hogy a sok gyengébb legyőzheti az erősebbet.",
    t2_inst: "Lődd le a közmondás hiányzó szavát!",
    t2_target_1: "arany", // Aki korán kel, aranyat lel.
    t2_target_2: "ezüst",
    t2_target_3: "gyémánt",

    // T3: Érzelmek
    t3_title: "Hogy érzi magát?",
    t3_text: "Az érzelmeket is ki lehet fejezni szólásokkal. Ha valaki nagyon dühös, arra azt mondjuk: 'Majd szétveti a méreg'.",
    t3_inst: "Melyik szólás illik a mondatba?",
    t3_sentence: "Amikor a kisfiú megkapta az ajándékot, a fülig ért a ___.",
    t3_opt1: "szája", t3_opt2: "keze", t3_opt3: "füle", t3_opt4: "orra",
  }
};

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <PlaceholderSvg emoji="🎭" color="#B44DFF" />,
    // imageUrl: "/images/islands/k3_i5_robot_mask.webp", 
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
      ],
      instruction: "t1_inst",
      hint1: "Gondolj a jelentésére!",
      hint2: "Nem szó szerint értjük!",
    },
    quiz: {
      question: "Mit jelent: 'Köpni-nyelni nem tud'?",
      choices: ["Nagyon meglepődik", "Éhes", "Szomjas", "Beteg"],
      answer: "Nagyon meglepődik",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => <PlaceholderSvg emoji="🦉" color="#B44DFF" />,
    interactive: {
      type: "physics-slingshot",
      question: "Aki korán kel, ___at lel.",
      targets: [
        { id: "tgt1", text: "t2_target_1", isCorrect: true },
        { id: "tgt2", text: "t2_target_2", isCorrect: false },
        { id: "tgt3", text: "t2_target_3", isCorrect: false },
      ],
      instruction: "t2_inst",
      hint1: "Értékes fém.",
      hint2: "Sárgán csillog.",
    },
    quiz: {
      question: "Hogyan fejeződik be: 'Aki mer, az...'?",
      choices: ["nyer", "fut", "alszik", "veszít"],
      answer: "nyer",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => <PlaceholderSvg emoji="❤️" color="#B44DFF" />,
    interactive: {
      type: "gap-fill",
      sentence: "t3_sentence",
      choices: ["t3_opt1", "t3_opt2", "t3_opt3", "t3_opt4"],
      correctIndex: 0,
      instruction: "t3_inst",
      hint1: "Testrész.",
      hint2: "Amivel mosolygunk.",
    },
    quiz: {
      question: "Melyik érzelmet fejezi ki: 'Kiborult a bili'?",
      choices: ["Düh / Harag", "Öröm", "Félelem", "Bánat"],
      answer: "Düh / Harag",
    },
  },
  {
    infoTitle: "Színházi bemutató",
    infoText: "Szuper! Már te is érted a magyar nyelv titkos kódjait.",
    svg: () => <PlaceholderSvg emoji="🎫" color="#B44DFF" />,
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "🎭", count: 6 },
      instruction: "Gyűjts össze 6 színházi maszkot!",
      hint1: "Kattints rájuk gyorsan!",
      hint2: "Még egy kicsit!",
    },
    quiz: {
      question: "Mire tanítanak a közmondások?",
      choices: ["Élettapasztalatra, bölcsességre", "Helyesírásra", "Számolásra", "Főzésre"],
      answer: "Élettapasztalatra, bölcsességre",
    }
  }
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🎭",
  topics: TOPICS,
  rounds: [],
};

export default function IdiomsExplorer({ onDone, lang = "hu", color }: { onDone: (s: number, t: number) => void; lang?: string; color?: string }) {
  return <ExplorerEngine def={DEF} grade={3} explorerId="magyar_o3_i5" color="#B44DFF" lang={lang} onDone={onDone} />;
}
