"use client";
// VowelExplorer.tsx — AstroEnglish Grade 2: i5 Vowel Valley
// Topics: 1) Short & Long Vowels 2) Magic E 3) Vowel Teams (ai, ea, oa) 4) The 'ou' Sound 5) Crystal Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#2E1065" rx="20" />
      {/* Short vs Long Vowel */}
      <g transform="translate(60, 70)">
        <rect x="-25" y="-20" width="50" height="40" fill="#8B5CF6" rx="5" />
        <text x="0" y="5" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#F3E8FF">a</text>
        <text x="0" y="40" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#C4B5FD">Short (cat)</text>
      </g>
      <text x="120" y="75" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#A78BFA">VS</text>
      <g transform="translate(180, 70)">
        <rect x="-25" y="-20" width="50" height="40" fill="#D946EF" rx="5" />
        <text x="0" y="5" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#FDF4FF">A</text>
        <text x="0" y="40" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#F0ABFC">Long (cake)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Magic E jumping */}
      <g transform="translate(120, 80)">
        <text x="-40" y="0" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#64748B">c</text>
        <text x="-15" y="0" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#38BDF8">a</text>
        <text x="10" y="0" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#64748B">p</text>
        <text x="40" y="0" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#FBBF24">e</text>
        
        {/* Magic spark from E to A */}
        <path d="M 40,-15 Q 12,-40 -15,-15" fill="none" stroke="#FBBF24" strokeWidth="3" strokeDasharray="4,4" markerEnd="url(#arrow)" />
        <circle cx="20" cy="-25" r="3" fill="#FEF08A" />
        <circle cx="0" cy="-30" r="2" fill="#FEF08A" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Vowel Team: 'ai' holding hands */}
      <g transform="translate(120, 70)">
        <rect x="-30" y="-20" width="30" height="40" fill="#10B981" rx="5" />
        <rect x="0" y="-20" width="30" height="40" fill="#047857" rx="5" />
        <text x="-15" y="8" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#D1FAE5">a</text>
        <text x="15" y="8" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#A7F3D0">i</text>
        <path d="M -15,25 Q 0,35 15,25" fill="none" stroke="#34D399" strokeWidth="3" />
        <text x="0" y="50" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#6EE7B7">"A"</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E3A8A" rx="20" />
      {/* Cloud with 'ou' sound */}
      <g transform="translate(120, 60)">
        <path d="M -30,0 A 15,15 0 0,1 -10,-15 A 20,20 0 0,1 20,-10 A 15,15 0 0,1 30,10 A 10,10 0 0,1 20,20 L -20,20 A 10,10 0 0,1 -30,0 Z" fill="#93C5FD" opacity="0.8" />
        <text x="0" y="8" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#1E40AF">ou</text>
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BFDBFE">cloud</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4C1D95" rx="20" />
      {/* Alien Crystal Valley */}
      <polygon points="0,140 60,60 120,140" fill="#5B21B6" />
      <polygon points="100,140 180,50 240,140" fill="#6D28D9" />
      <circle cx="120" cy="40" r="15" fill="#DDD6FE" opacity="0.8" />
      <polygon points="60,110 70,90 80,110" fill="#F472B6" />
      <polygon points="170,120 185,80 200,120" fill="#38BDF8" />
      <text x="120" y="130" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#E9D5FF">Tap the crystals!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Vowel Valley",
    
    // T1: Short vs Long Vowels
    t1_title: "Short and Long Vowels",
    t1_text: "Vowels (A, E, I, O, U) can make a short sound or a long sound. When a vowel is long, it says its own alphabet name!",
    t1_b1: "Short 'A': hat, cat, bat.",
    t1_b2: "Long 'A': cake, alien, space.",
    t1_b3: "Listen closely to the middle sound.",
    t1_inst: "Is the vowel in the word making a SHORT sound or a LONG sound?",
    t1_bucket_short: "Short Sound",
    t1_bucket_long: "Long Sound",
    t1_item_s1: "ship", t1_item_s2: "sun",
    t1_item_l1: "bike", t1_item_l2: "bone",
    t1_q: "Which word has a LONG 'O' sound?",
    t1_q_a: "hope", t1_q_b: "hop", t1_q_c: "hot", t1_q_d: "box",

    // T2: Magic E
    t2_title: "The Magic 'E'",
    t2_text: "When an 'e' sits at the end of a short word, it doesn't make a sound. Instead, it uses its magic to make the other vowel LONG!",
    t2_b1: "Cap becomes Cape.",
    t2_b2: "Pin becomes Pine.",
    t2_b3: "Cub becomes Cube.",
    t2_inst: "Match the short word to its Magic E partner!",
    t2_l1: "Tap", t2_r1: "Tape",
    t2_l2: "Kit", t2_r2: "Kite",
    t2_l3: "Tub", t2_r3: "Tube",
    t2_q: "What does the word 'plan' become when you add a Magic E?",
    t2_q_a: "plane", t2_q_b: "planet", t2_q_c: "plen", t2_q_d: "plant",

    // T3: Vowel Teams
    t3_title: "Vowel Teams",
    t3_text: "Sometimes two vowels team up! 'When two vowels go walking, the first one does the talking.' It says its long name, and the second is silent.",
    t3_b1: "'ai' makes the long A sound (rain).",
    t3_b2: "'ea' makes the long E sound (team).",
    t3_b3: "'oa' makes the long O sound (boat).",
    t3_inst: "Fill in the gap to complete the Vowel Team word!",
    t3_sentence: "The astronauts want to s___l across the cosmic sea.",
    t3_c1: "sail", t3_c2: "seal", t3_c3: "soil",
    t3_q: "Which vowel team completes the word for something you wear in the cold? (c__t)",
    t3_q_a: "oa (coat)", t3_q_b: "ea (ceat)", t3_q_c: "ai (cait)", t3_q_d: "ee (ceet)",

    // T4: The 'ou' Sound
    t4_title: "Sliding Sounds (ou/ow)",
    t4_text: "Some vowel pairs make a brand new sliding sound! The letters 'ou' and 'ow' make the sound you hear in 'cloud' or 'cow'.",
    t4_b1: "Out, loud, ground (ou).",
    t4_b2: "Town, down, brown (ow).",
    t4_b3: "They both sound like 'OW!'.",
    t4_inst: "Highlight the word that has the 'ou' sliding sound!",
    t4_tok0: "The", t4_tok1: "loud", t4_tok2: "rocket", t4_tok3: "took", t4_tok4: "off.",
    t4_q: "Which word has the same vowel sound as 'cloud'?",
    t4_q_a: "mouse", t4_q_b: "moon", t4_q_c: "boat", t4_q_d: "snow",

    // T5: Fun Catch
    t5_title: "Crystal Catch",
    t5_text: "Great job in the Vowel Valley! The crystals here glow with vowel energy. Let's collect them before we leave.",
    t5_b1: "A, E, I, O, U.",
    t5_b2: "And sometimes Y!",
    t5_b3: "Catch 5 crystals!",
    t5_inst: "Tap the 5 glowing crystals (💎) in the valley!",
    t5_q: "How many main vowels are in the English alphabet?",
    t5_q_a: "5", t5_q_b: "21", t5_q_c: "10", t5_q_d: "26",
  }
};

// ─── TOPICS ─────────────────────────────────────────────────────────

const TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => <Topic1Svg />,
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "short", label: "t1_bucket_short" },
        { id: "long", label: "t1_bucket_long" },
      ],
      items: [
        { text: "t1_item_s1", bucketId: "short" },
        { text: "t1_item_l1", bucketId: "long" },
        { text: "t1_item_s2", bucketId: "short" },
        { text: "t1_item_l2", bucketId: "long" },
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" }, // Tap - Tape
        { left: "t2_l2", right: "t2_r2" }, // Kit - Kite
        { left: "t2_l3", right: "t2_r3" }, // Tub - Tube
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"],
      correctIndex: 0, // "sail"
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4"],
      correctIndices: [1], // "loud"
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
    svg: () => <Topic5Svg />,
    bulletKeys: ["t5_b1", "t5_b2", "t5_b3"],
    interactive: {
      type: "tap-count",
      tapCount: { emoji: "💎", count: 5 }, // Crystals
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

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🌈",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const VowelExplorer = memo(function VowelExplorer({
  color = "#8B5CF6", // Violet-500 for the magical crystal valley
  onDone,
  lang = "en",
}: {
  color?: string;
  onDone: (s: number, t: number) => void;
  lang?: string;
}) {
  return (
    <ExplorerEngine 
      def={DEF} 
      grade={2} 
      explorerId="english_k2_vowel_valley" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default VowelExplorer;
