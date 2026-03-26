"use client";
// WordTypesExplorer.tsx — AstroMagyar Grade 2: i1 Szófajok Szigete
// Témák: 1) Főnév (Ki? Mi?) 2) Ige (Mit csinál?) 3) Melléknév (Milyen?) 4) Nevelők és Névutók 5) Tallér-kapó

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── ILUSZTRÁCIÓK (Geometrikus SVG) ───────────────────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4C0519" rx="20" />
      <g transform="translate(120, 70)">
        {/* Főnév szimbólum: Ház és Alma */}
        <rect x="-50" y="-10" width="30" height="30" fill="#E11D48" rx="2" />
        <polygon points="-55,-10 -20,-10 -37,-30" fill="#FB7185" />
        <circle cx="40" cy="5" r="15" fill="#F43F5E" />
        <path d="M 40,-10 L 40,-18" stroke="#4C0519" strokeWidth="3" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FECDD3">FŐNÉV (Tárgyak, élőlények)</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#881337" rx="20" />
      <g transform="translate(120, 70)">
        {/* Névutó ábrázolás: Doboz és labda (alatt/felett) */}
        <rect x="-20" y="0" width="40" height="30" fill="#FB7185" opacity="0.5" stroke="#FFF" strokeWidth="2" />
        <circle cx="0" cy="-20" r="8" fill="#FFF" /> {/* felett */}
        <circle cx="0" cy="40" r="8" fill="#FFF" opacity="0.3" /> {/* alatt */}
        <text x="0" y="-35" textAnchor="middle" fontSize="10" fill="#FFF">felett</text>
        <text x="0" y="55" textAnchor="middle" fontSize="10" fill="#FFF" opacity="0.6">alatt</text>
      </g>
    </svg>
  );
});

// ─── CÍMKÉK (MAGYAR NYELVEN) ──────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  hu: {
    explorer_title: "Szófajok Szigete",
    
    // T1: Főnév (Bucket)
    t1_title: "A Főnév",
    t1_text: "A főnevek embereket, állatokat, tárgyakat vagy helyszíneket neveznek meg. Kérdései: Ki ez? Mi ez?",
    t1_b1: "Élőlények: fiú, kislány, kutya.",
    t1_b2: "Élettelen dolgok: asztal, vár, erdő.",
    t1_inst: "Válogasd szét a főneveket: Élőlény (Ki?) vagy Tárgy (Mi?)!",
    t1_bucket_ki: "Ki? (Élő)",
    t1_bucket_mi: "Mi? (Élettelen)",
    t1_item_k1: "orvos", t1_item_k2: "medve",
    t1_item_m1: "könyv", t1_item_m2: "felhő",
    t1_q: "Melyik szó FŐNÉV az alábbiak közül?",
    t1_q_a: "iskola", t1_q_b: "olvas", t1_q_c: "gyors", t1_q_d: "tegnap",

    // T2: Ige (Slingshot)
    t2_title: "Az Ige",
    t2_text: "Az igék cselekvést, történést vagy létezést fejeznek ki. Azt mondják meg, hogy valaki mit csinál, vagy mi történik vele.",
    t2_b1: "Cselekvés: fut, ír, tanul.",
    t2_b2: "Történés: esik az eső, virágzik.",
    t2_inst: "Lődd le az aszteroidát, ami IGÉT (cselekvést) tartalmaz!",
    t2_target_1: "énekel", // Helyes
    t2_target_2: "dal",
    t2_target_3: "szép",
    t2_q: "Mi az IGE kérdése?",
    t2_q_a: "Mit csinál?", t2_q_b: "Milyen?", t2_q_c: "Hány?", t2_q_d: "Mikor?",

    // T3: Melléknév (Magnet)
    t3_title: "A Melléknév",
    t3_text: "A melléknevek tulajdonságokat fejeznek ki. Megmutatják, hogy egy főnév milyen színű, alakú, mekkora vagy milyen belső tulajdonsága van.",
    t3_b1: "Kérdése: Milyen?",
    t3_b2: "Például: okos, kék, hatalmas.",
    t3_inst: "Párosítsd a főnevet egy hozzá illő melléknévvel!",
    t3_l1: "Citrom", t3_r1: "savanyú",
    t3_l2: "Róka", t3_r2: "ravasz",
    t3_l3: "Hegy", t3_r3: "magas",
    t3_q: "Melyik szó MELLÉKNÉV?",
    t3_q_a: "szorgalmas", t3_q_b: "tanuló", t3_q_c: "tanul", t3_q_d: "toll",

    // T4: Nevelő és Névutó (Highlight)
    t4_title: "Pici, de fontos szavak",
    t4_text: "A NEVELŐK (a, az, egy) a főnevek előtt állnak. A NÉVUTÓK (alatt, felett, mellett) pedig megmutatják, hol helyezkedik el valami.",
    t4_b1: "Nevelő: a ház, az alma.",
    t4_b2: "Névutó: a ház MÖGÖTT.",
    t4_inst: "Jelöld ki a mondatban a NÉVUTÓT (ami megmutatja a helyet)!",
    t4_tok0: "A", t4_tok1: "kismacska", t4_tok2: "az", t4_tok3: "asztal", t4_tok4: "alatt", t4_tok5: "alszik.",
    t4_q: "Melyik egy NÉVUTÓ az alábbiak közül?",
    t4_q_a: "mellett", t4_q_b: "piros", t4_q_c: "szalad", t4_q_d: "asztal",

    // T5: Fun Catch
    t5_title: "Szófaj-szakértő",
    t5_text: "Gratulálok! Már felismered a legfontosabb szófajokat: a főnevet, az igét és a melléknevet is.",
    t5_b1: "Tudod a kérdéseiket.",
    t5_b2: "Ismered a névutókat is.",
    t5_inst: "Kapj el 6 aranytallért a győzelemhez!",
    t5_q: "Hány nevelő van ebben a mondatban: 'A kutya és egy cica játszik.'",
    t5_q_a: "2", t5_q_b: "1", t5_q_c: "3", t5_q_d: "0",
  }
};

// ─── TOPICS ──────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: (lang) => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2"],
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "ki", label: "t1_bucket_ki" },
        { id: "mi", label: "t1_bucket_mi" },
      ],
      items: [
        { text: "t1_item_k1", bucketId: "ki" },
        { text: "t1_item_m1", bucketId: "mi" },
        { text: "t1_item_k2", bucketId: "ki" },
        { text: "t1_item_m2", bucketId: "mi" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b1",
      hint2: "t1_b2",
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
    svg: (lang) => <Topic1Svg />,
    bulletKeys: ["t2_b1", "t2_b2"],
    interactive: {
      type: "physics-slingshot",
      question: "t2_inst",
      targets: [
        { id: "tgt1", text: "t2_target_1", isCorrect: true },
        { id: "tgt2", text: "t2_target_2", isCorrect: false },
        { id: "tgt3", text: "t2_target_3", isCorrect: false },
      ],
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b2",
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
    svg: (lang) => <Topic1Svg />,
    bulletKeys: ["t3_b1", "t3_b2"],
    interactive: {
      type: "physics-magnet",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
      ],
      instruction: "t3_inst",
      hint1: "t3_b1",
      hint2: "t3_b2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_q_a", "t3_q_b", "t3_q_c", "t3_q_d"],
      answer: "t3_q_a",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: (lang) => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"],
      correctIndices: [4], // "alatt"
      instruction: "t4_inst",
      hint1: "t4_b1",
      hint2: "t4_b2",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_q_a", "t4_q_b", "t4_q_c", "t4_q_d"],
      answer: "t4_q_a",
    },
  },
  {
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: (lang) => <Topic1Svg />,
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "💰", count: 6 },
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a",
    },
  },
];

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🔤",
  topics: TOPICS,
  rounds: [],
};

export default function WordTypesExplorer({ onDone, lang = "hu" }: { onDone: (s: number, t: number) => void; lang?: string }) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={2} 
      explorerId="magyar_o2_i1" 
      color="#FF2D78" 
      lang={lang} 
      onDone={onDone} 
    />
  );
}
