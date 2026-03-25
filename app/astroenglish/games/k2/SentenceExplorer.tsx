"use client";
// SentenceExplorer.tsx — AstroEnglish Grade 2: i4 Sentence Station
// Topics: 1) Simple Sentences 2) Stretching Sentences 3) Compound Sentences (and, but, or) 4) Punctuation 5) Satellite Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Train Cars representing Subject + Verb */}
      <g transform="translate(60, 60)">
        <rect x="-30" y="-15" width="60" height="30" fill="#3B82F6" rx="5" />
        <circle cx="-15" cy="20" r="8" fill="#94A3B8" />
        <circle cx="15" cy="20" r="8" fill="#94A3B8" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#EFF6FF">Subject</text>
      </g>
      <rect x="95" y="55" width="10" height="10" fill="#64748B" /> {/* Link */}
      <g transform="translate(140, 60)">
        <rect x="-30" y="-15" width="60" height="30" fill="#F59E0B" rx="5" />
        <circle cx="-15" cy="20" r="8" fill="#94A3B8" />
        <circle cx="15" cy="20" r="8" fill="#94A3B8" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FFFBEB">Verb</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#164E63" rx="20" />
      {/* Stretching a sentence */}
      <g transform="translate(120, 40)">
        <rect x="-40" y="-15" width="80" height="30" fill="#06B6D4" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ECFEFF">The dog ran.</text>
      </g>
      <path d="M 120,65 L 120,85" fill="none" stroke="#67E8F9" strokeWidth="3" markerEnd="url(#arrow)" />
      <g transform="translate(120, 110)">
        <rect x="-80" y="-15" width="160" height="30" fill="#0891B2" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ECFEFF">The big dog ran fast.</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#312E81" rx="20" />
      {/* Compound sentence bridge */}
      <g transform="translate(50, 70)">
        <rect x="-35" y="-20" width="70" height="40" fill="#6366F1" rx="8" />
        <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#E0E7FF">Sentence 1</text>
      </g>
      <g transform="translate(120, 70)">
        <polygon points="-20,-10 20,-10 25,0 20,10 -20,10 -15,0" fill="#F43F5E" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FFE4E6">BUT</text>
      </g>
      <g transform="translate(190, 70)">
        <rect x="-35" y="-20" width="70" height="40" fill="#6366F1" rx="8" />
        <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#E0E7FF">Sentence 2</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#14532D" rx="20" />
      {/* Punctuation Marks */}
      <g transform="translate(60, 70)">
        <circle cx="0" cy="0" r="20" fill="#22C55E" />
        <circle cx="0" cy="5" r="5" fill="#052E16" />
        <text x="0" y="-25" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#86EFAC">Period</text>
      </g>
      <g transform="translate(120, 70)">
        <rect x="-20" y="-20" width="40" height="40" fill="#EAB308" rx="5" />
        <text x="0" y="8" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#422006">?</text>
        <text x="0" y="-25" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FEF08A">Question</text>
      </g>
      <g transform="translate(180, 70)">
        <polygon points="0,-20 -20,20 20,20" fill="#EF4444" />
        <text x="0" y="12" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#450A0A">!</text>
        <text x="0" y="-25" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FECACA">Exclaim</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#082F49" rx="20" />
      {/* Space Station Background */}
      <rect x="100" y="50" width="40" height="40" fill="#0284C7" rx="5" />
      <rect x="40" y="60" width="60" height="20" fill="#38BDF8" rx="2" />
      <rect x="140" y="60" width="60" height="20" fill="#38BDF8" rx="2" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BAE6FD">Tap the satellites!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Sentence Station",
    
    // T1: Simple Sentences
    t1_title: "Simple Sentences",
    t1_text: "A simple sentence is a complete thought. It must have a Subject (who or what) and a Verb (the action).",
    t1_b1: "Sentence: 'The star shines.' (Has who and what they do).",
    t1_b2: "Fragment: 'The big red star.' (Missing the action!).",
    t1_b3: "A fragment is broken. A sentence is complete.",
    t1_inst: "Sort the blocks! Is it a Complete Sentence or a Broken Fragment?",
    t1_bucket_sentence: "Complete Sentence",
    t1_bucket_fragment: "Broken Fragment",
    t1_item_s1: "The alien sleeps.", t1_item_s2: "We fly.",
    t1_item_f1: "A fast rocket.", t1_item_f2: "Into the dark.",
    t1_q: "Which one is a COMPLETE simple sentence?",
    t1_q_a: "The robot walked.", t1_q_b: "The green robot.", t1_q_c: "Walked far.", t1_q_d: "In the ship.",

    // T2: Stretching Sentences
    t2_title: "Stretching Sentences",
    t2_text: "We can make short sentences much better by stretching them! We add adjectives (describing words) and adverbs.",
    t2_b1: "Short: The ship flew.",
    t2_b2: "Stretched: The silver ship flew quickly.",
    t2_b3: "Put the words in the right order to stretch it out!",
    t2_inst: "Drag the words to build a long, stretched sentence!",
    t2_w1: "The", t2_w2: "silver", t2_w3: "ship", t2_w4: "flew", t2_w5: "quickly.",
    t2_q: "Which sentence is stretched with an adjective?",
    t2_q_a: "The brave astronaut jumped.", t2_q_b: "The astronaut jumped.", t2_q_c: "She jumped.", t2_q_d: "Astronauts jump.",

    // T3: Compound Sentences
    t3_title: "Compound Sentences",
    t3_text: "We can use joining words like 'AND', 'BUT', or 'OR' to glue two simple sentences together. This makes a Compound Sentence!",
    t3_b1: "'AND' adds things together.",
    t3_b2: "'BUT' shows a difference or a problem.",
    t3_b3: "'OR' gives a choice.",
    t3_inst: "Fill in the gap with the best joining word!",
    t3_sentence: "I wanted to see the moon, ___ it was too cloudy.",
    t3_c1: "but", t3_c2: "and", t3_c3: "or",
    t3_q: "Which joining word adds two ideas together?",
    t3_q_a: "and", t3_q_b: "but", t3_q_c: "or", t3_q_d: "because",

    // T4: Punctuation
    t4_title: "End Marks",
    t4_text: "Every sentence needs a mark at the end to stop it! Period (.) for statements, Question Mark (?) for questions, and Exclamation Mark (!) for strong feelings.",
    t4_b1: "Statement: We are in space.",
    t4_b2: "Question: Where is the moon?",
    t4_b3: "Exclamation: Look out for the comet!",
    t4_inst: "Match the sentence to the correct end mark!",
    t4_l1: "Is the rocket ready", t4_r1: "? (Question Mark)",
    t4_l2: "Watch out for the fire", t4_r2: "! (Exclamation Mark)",
    t4_l3: "The stars are bright", t4_r3: ". (Period)",
    t4_q: "What punctuation mark goes at the end of a question?",
    t4_q_a: "Question mark (?)", t4_q_b: "Period (.)", t4_q_c: "Exclamation mark (!)", t4_q_d: "Comma (,)",

    // T5: Fun Catch
    t5_title: "Satellite Catch",
    t5_text: "Welcome to the Sentence Station! Help us catch the communication satellites to send our sentences back to Earth.",
    t5_b1: "Satellites orbit planets.",
    t5_b2: "They send signals.",
    t5_b3: "Catch 6 of them!",
    t5_inst: "Tap the 6 satellites (🛰️) orbiting the station!",
    t5_q: "What is a compound sentence?",
    t5_q_a: "Two sentences joined together.", t5_q_b: "A sentence with no verb.", t5_q_c: "A very short sentence.", t5_q_d: "A sentence with no punctuation.",
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
        { id: "sentence", label: "t1_bucket_sentence" },
        { id: "fragment", label: "t1_bucket_fragment" },
      ],
      items: [
        { text: "t1_item_s1", bucketId: "sentence" },
        { text: "t1_item_f1", bucketId: "fragment" },
        { text: "t1_item_s2", bucketId: "sentence" },
        { text: "t1_item_f2", bucketId: "fragment" },
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
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5"],
      correctOrder: [0, 1, 2, 3, 4], // The silver ship flew quickly.
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
      correctIndex: 0, // "but"
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
      type: "match-pairs",
      pairs: [
        { left: "t4_l1", right: "t4_r1" }, // Question
        { left: "t4_l2", right: "t4_r2" }, // Exclamation
        { left: "t4_l3", right: "t4_r3" }, // Statement
      ],
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
      tapCount: { emoji: "🛰️", count: 6 }, // Satellites
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
  icon: "💬",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SentenceExplorer = memo(function SentenceExplorer({
  color = "#06B6D4", // Cyan-500 for the techy space station
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
      explorerId="english_k2_sentence_station" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default SentenceExplorer;
