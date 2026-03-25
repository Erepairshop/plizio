"use client";
// AdjectiveK4Explorer.tsx — AstroEnglish Grade 4: i3 Adjective Orbit
// Topics: 1) Opinion, Size, Color 2) Adjective Order 3) Prepositions of Place 4) Prepositional Phrases 5) Orbit Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Layers of Adjectives */}
      <g transform="translate(120, 70)">
        <rect x="-80" y="-30" width="160" height="60" fill="none" stroke="#475569" strokeWidth="1" rx="10" />
        <rect x="-70" y="-20" width="40" height="40" fill="#F43F5E" rx="5" />
        <text x="-50" y="5" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">OPINION</text>
        <rect x="-20" y="-20" width="40" height="40" fill="#3B82F6" rx="5" />
        <text x="0" y="5" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">SIZE</text>
        <rect x="30" y="-20" width="40" height="40" fill="#10B981" rx="5" />
        <text x="50" y="5" textAnchor="middle" fontSize="8" fontWeight="bold" fill="white">COLOR</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Prepositions illustration */}
      <circle cx="120" cy="80" r="25" fill="#6366F1" /> {/* Planet */}
      <g transform="translate(120, 40)"> {/* Ship ON */}
        <polygon points="0,-10 -8,5 8,5" fill="#FBBF24" />
        <text x="25" y="0" fontSize="10" fontWeight="bold" fill="#FDE047">ON</text>
      </g>
      <g transform="translate(165, 80)"> {/* Ship NEXT TO */}
        <polygon points="0,-10 -8,5 8,5" fill="#FBBF24" transform="rotate(90)" />
        <text x="0" y="25" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FDE047">NEXT TO</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#171717" rx="20" />
      {/* Orbits background */}
      <ellipse cx="120" cy="70" rx="90" ry="30" fill="none" stroke="#334155" strokeWidth="1" />
      <ellipse cx="120" cy="70" rx="60" ry="20" fill="none" stroke="#334155" strokeWidth="1" />
      <circle cx="120" cy="70" r="10" fill="#F43F5E" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#94A3B8">Tap the glowing orbs!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Adjective Orbit",
    
    // T1: Opinion, Size, Color
    t1_title: "The Order of Words",
    t1_text: "When we use more than one adjective, we must follow a special order. Usually, it is: Opinion, then Size, then Color.",
    t1_b1: "Opinion: beautiful, silly, brave.",
    t1_b2: "Size: huge, tiny, long.",
    t1_b3: "Color: red, silver, green.",
    t1_inst: "Sort the adjectives into the correct buckets!",
    t1_bucket_op: "Opinion (Feeling)",
    t1_bucket_col: "Color",
    t1_item_o1: "beautiful", t1_item_o2: "strange",
    t1_item_c1: "silver", t1_item_c2: "purple",
    t1_q: "Which group of adjectives is in the correct order?",
    t1_q_a: "A beautiful tiny silver ship", t1_q_b: "A silver tiny beautiful ship", t1_q_c: "A tiny silver beautiful ship", t1_q_d: "A silver beautiful tiny ship",

    // T2: Adjective Order Practice
    t2_title: "Building the Chain",
    t2_text: "Let's practice building the adjective chain. Remember: Opinion -> Size -> Color -> NOUN.",
    t2_b1: "A 'brave' (opinion) 'little' (size) 'green' (color) 'alien' (noun).",
    t2_b2: "Don't mix them up!",
    t2_b3: "Drag the words in the right order.",
    t2_inst: "Build the sentence in the correct adjective order!",
    t2_w1: "The", t2_w2: "funny", t2_w3: "little", t2_w4: "red", t2_w5: "robot.",
    t2_q: "Where does 'size' go in the adjective order?",
    t2_q_a: "After opinion, before color", t2_q_b: "At the very beginning", t2_q_c: "After color", t2_q_d: "After the noun",

    // T3: Prepositions of Place
    t3_title: "Where is it? (Prepositions)",
    t3_text: "Prepositions tell us the location of something. Common ones are: in, on, under, next to, behind, and in front of.",
    t3_b1: "The rocket is 'on' the planet.",
    t3_b2: "The moon is 'behind' the clouds.",
    t3_b3: "Match the preposition to its position!",
    t3_inst: "Match the preposition to where the object is!",
    t3_l1: "Inside the box", t3_r1: "in",
    t3_l2: "Touching the top", t3_r2: "on",
    t3_l3: "Below the surface", t3_r3: "under",
    t3_q: "Which word is a preposition of place?",
    t3_q_a: "behind", t3_q_b: "beautiful", t3_q_c: "quickly", t3_q_d: "they",

    // T4: Prepositional Phrases
    t4_title: "Prepositional Phrases",
    t4_text: "A prepositional phrase starts with a preposition and ends with a noun. It gives us extra details about WHERE or WHEN.",
    t4_b1: "'In the morning' (Time).",
    t4_b2: "'On the station' (Place).",
    t4_b3: "Find the phrase in the sentence.",
    t4_inst: "Highlight the Prepositional Phrase in the sentence!",
    t4_tok0: "The", t4_tok1: "captain", t4_tok2: "is", t4_tok3: "sleeping", t4_tok4: "on", t4_tok5: "the", t4_tok6: "comet.",
    t4_q: "Which part of 'We saw a star in the sky' is the prepositional phrase?",
    t4_q_a: "in the sky", t4_q_b: "We saw", t4_q_c: "a star", t4_q_d: "saw a star",

    // T5: Fun Catch
    t5_title: "Orbit Catch",
    t5_text: "Great work! You have aligned the adjectives and found the prepositions. Now, let's catch the glowing energy orbs in orbit.",
    t5_b1: "The orbs are 'in' orbit.",
    t5_b2: "They move 'around' the star.",
    t5_b3: "Catch 6 orbs!",
    t5_inst: "Tap the 6 glowing orbs (✨) floating in the orbits!",
    t5_q: "In the phrase 'A lovely small blue star', what is 'lovely'?",
    t5_q_a: "Opinion", t5_q_b: "Size", t5_q_c: "Color", t5_q_d: "Noun",
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
        { id: "op", label: "t1_bucket_op" },
        { id: "col", label: "t1_bucket_col" },
      ],
      items: [
        { text: "t1_item_o1", bucketId: "op" },
        { text: "t1_item_c1", bucketId: "col" },
        { text: "t1_item_o2", bucketId: "op" },
        { text: "t1_item_c2", bucketId: "col" },
      ],
      instruction: "t1_inst",
      hint1: "t1_b1",
      hint2: "t1_b3",
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"],
      correctOrder: [0, 1, 2, 3, 4], // The funny little red robot.
      instruction: "t2_inst",
      hint1: "t2_b1",
      hint2: "t2_b3",
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
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" }, // Inside - in
        { left: "t3_l2", right: "t3_r2" }, // Touching top - on
        { left: "t3_l3", right: "t3_r3" }, // Below - under
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6"],
      correctIndices: [4, 5, 6], // "on the comet."
      instruction: "t4_inst",
      hint1: "t4_b2",
      hint2: "t4_b3",
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
      tapCount: { emoji: "✨", count: 6 }, // Orbs
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
  icon: "🎨",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const AdjectiveK4Explorer = memo(function AdjectiveK4Explorer({
  color = "#F43F5E", // Rose-500 for the Adjective Orbit
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
      grade={4} 
      explorerId="english_k4_adjective_orbit" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default AdjectiveK4Explorer;
