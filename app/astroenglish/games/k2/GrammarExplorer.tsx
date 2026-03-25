"use client";
// GrammarExplorer.tsx — AstroEnglish Grade 2: i8 Grammar Galaxy
// Topics: 1) The Big Three (Noun, Verb, Adjective) 2) Spot the Adjective 3) Action Verbs 4) Sentence Scramble 5) Star Cruiser Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Three Planets: Noun, Verb, Adjective */}
      <g transform="translate(40, 70)">
        <circle cx="0" cy="0" r="20" fill="#3B82F6" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#93C5FD">Noun</text>
      </g>
      <g transform="translate(120, 70)">
        <polygon points="0,-20 20,15 -20,15" fill="#EF4444" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FCA5A5">Verb</text>
      </g>
      <g transform="translate(200, 70)">
        <rect x="-15" y="-15" width="30" height="30" fill="#10B981" rx="5" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#6EE7B7">Adjective</text>
      </g>
      <path d="M 65,70 L 95,70 M 145,70 L 175,70" fill="none" stroke="#475569" strokeWidth="2" strokeDasharray="4,4" />
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Adjective describing a Noun */}
      <g transform="translate(120, 60)">
        <rect x="-60" y="-20" width="120" height="40" fill="#312E81" rx="10" />
        <text x="-25" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#34D399">shiny</text>
        <text x="25" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#60A5FA">star</text>
        <path d="M -25,-20 Q 0,-40 25,-20" fill="none" stroke="#FBBF24" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="0" y="-35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FDE047">describes</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#450A0A" rx="20" />
      {/* Action Verb (Rocket Launch) */}
      <g transform="translate(120, 80)">
        <path d="M -15,0 L 0,-30 L 15,0 Z" fill="#EAB308" />
        <rect x="-10" y="0" width="20" height="20" fill="#F87171" />
        <polygon points="-10,20 10,20 0,40" fill="#DC2626" />
        <text x="-40" y="-10" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FCA5A5">ZOOOOOM!</text>
        <path d="M 20,-10 L 40,-20" fill="none" stroke="#FCA5A5" strokeWidth="2" strokeDasharray="3,3" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#022C22" rx="20" />
      {/* Sentence Scramble Order */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="40" height="30" fill="#047857" rx="5" />
        <rect x="-45" y="-15" width="50" height="30" fill="#10B981" rx="5" />
        <rect x="10" y="-15" width="40" height="30" fill="#3B82F6" rx="5" />
        <rect x="55" y="-15" width="40" height="30" fill="#EF4444" rx="5" />
        
        <text x="-70" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#D1FAE5">The</text>
        <text x="-20" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#D1FAE5">fast</text>
        <text x="30" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#EFF6FF">ship</text>
        <text x="75" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FEF2F2">flew.</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#2E1065" rx="20" />
      {/* Galactic Cruiser Background */}
      <ellipse cx="120" cy="70" rx="100" ry="30" fill="none" stroke="#6D28D9" strokeWidth="4" />
      <circle cx="120" cy="70" r="20" fill="#8B5CF6" />
      <polygon points="40,50 60,60 40,70" fill="#C084FC" />
      <polygon points="200,80 180,70 200,60" fill="#C084FC" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#E9D5FF">Tap the cruisers!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Grammar Galaxy",
    
    // T1: The Big Three
    t1_title: "The Big Three",
    t1_text: "Welcome to the Grammar Galaxy! Let's review the Big Three: Nouns (things), Verbs (actions), and Adjectives (describing words).",
    t1_b1: "Noun: astronaut, star, ship.",
    t1_b2: "Verb: fly, jump, sleep.",
    t1_b3: "Adjective: big, red, shiny.",
    t1_inst: "Sort the words! Is it a Noun (Thing) or a Verb (Action)?",
    t1_bucket_noun: "Noun (Thing)",
    t1_bucket_verb: "Verb (Action)",
    t1_item_n1: "planet", t1_item_n2: "moon",
    t1_item_v1: "launch", t1_item_v2: "orbit",
    t1_q: "Which word is an Adjective?",
    t1_q_a: "huge", t1_q_b: "rocket", t1_q_c: "ran", t1_q_d: "they",

    // T2: Spot the Adjective
    t2_title: "Adjective Detectives",
    t2_text: "Remember, Adjectives make our Nouns more interesting. They usually come right before the noun they are describing.",
    t2_b1: "The 'cold' moon.",
    t2_b2: "The 'brave' explorer.",
    t2_b3: "Find the describing word!",
    t2_inst: "Highlight the Adjective (describing word) in the sentence!",
    t2_tok0: "We", t2_tok1: "saw", t2_tok2: "a", t2_tok3: "bright", t2_tok4: "comet.",
    t2_q: "What does an Adjective do?",
    t2_q_a: "Describes a noun.", t2_q_b: "Shows an action.", t2_q_c: "Ends a sentence.", t2_q_d: "Replaces a name.",

    // T3: Action Verbs
    t3_title: "Action Stations!",
    t3_text: "Sentences can't move without Verbs! Verbs are the engines of our sentences.",
    t3_b1: "Present tense: I look.",
    t3_b2: "Past tense: I looked.",
    t3_b3: "Irregular past: I went.",
    t3_inst: "Fill in the gap with the correct action verb!",
    t3_sentence: "Yesterday, the astronaut ___ across the crater.",
    t3_c1: "jumped", t3_c2: "jump", t3_c3: "jumping",
    t3_q: "Which of these is an irregular past tense verb?",
    t3_q_a: "saw", t3_q_b: "played", t3_q_c: "looked", t3_q_d: "walked",

    // T4: Sentence Scramble
    t4_title: "Galaxy Sentence Scramble",
    t4_text: "Let's put the Big Three together! A great sentence needs an article (The), an Adjective, a Noun, and a Verb.",
    t4_b1: "Start with a capital letter.",
    t4_b2: "Adjective comes before the Noun.",
    t4_b3: "Finish with the Verb and a period.",
    t4_inst: "Drag the blocks to build a perfect sentence!",
    t4_w1: "The", t4_w2: "fast", t4_w3: "ship", t4_w4: "flew.",
    t4_q: "Which sentence order is correct?",
    t4_q_a: "The green alien waved.", t4_q_b: "The alien green waved.", t4_q_c: "Waved the green alien.", t4_q_d: "Green the alien waved.",

    // T5: Fun Catch
    t5_title: "Cruiser Catch",
    t5_text: "You have mastered the Grammar Galaxy! Help the fleet gather the star cruisers before the Big Test.",
    t5_b1: "Noun: Cruiser.",
    t5_b2: "Adjective: Fast.",
    t5_b3: "Verb: Catch!",
    t5_inst: "Tap the 5 Star Cruisers (🛸) in the galaxy!",
    t5_q: "In the phrase 'Fast cruiser', what part of speech is 'Fast'?",
    t5_q_a: "Adjective", t5_q_b: "Noun", t5_q_c: "Verb", t5_q_d: "Pronoun",
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
        { id: "noun", label: "t1_bucket_noun" },
        { id: "verb", label: "t1_bucket_verb" },
      ],
      items: [
        { text: "t1_item_n1", bucketId: "noun" },
        { text: "t1_item_v1", bucketId: "verb" },
        { text: "t1_item_n2", bucketId: "noun" },
        { text: "t1_item_v2", bucketId: "verb" },
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
      type: "highlight-text",
      tokens: ["t2_tok0", "t2_tok1", "t2_tok2", "t2_tok3", "t2_tok4"],
      correctIndices: [3], // "bright"
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
      correctIndex: 0, // "jumped"
      instruction: "t3_inst",
      hint1: "t3_b2",
      hint2: "t3_b3",
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
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"],
      correctOrder: [0, 1, 2, 3], // The fast ship flew.
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
      tapCount: { emoji: "🛸", count: 5 }, // Cruisers
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
  icon: "🌌",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const GrammarExplorer = memo(function GrammarExplorer({
  color = "#D946EF", // Fuchsia-500 for the mixed Grammar Galaxy
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
      explorerId="english_k2_grammar_galaxy" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default GrammarExplorer;
