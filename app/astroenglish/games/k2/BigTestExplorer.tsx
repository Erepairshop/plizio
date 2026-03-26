"use client";
// BigTestExplorer.tsx — AstroEnglish Grade 2: i9 Big Test
// Topics: 1) Noun or Verb? 2) Sentence Builder 3) Spelling Check 4) Reading Comprehension 5) Victory Trophy

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Noun vs Verb Sorting Machine */}
      <rect x="70" y="40" width="100" height="60" fill="#334155" rx="10" />
      <polygon points="120,20 140,40 100,40" fill="#94A3B8" />
      <rect x="70" y="100" width="40" height="20" fill="#3B82F6" rx="5" />
      <text x="90" y="114" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#EFF6FF">Noun</text>
      <rect x="130" y="100" width="40" height="20" fill="#EF4444" rx="5" />
      <text x="150" y="114" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FEF2F2">Verb</text>
      <circle cx="120" cy="70" r="15" fill="#EAB308" />
      <text x="120" y="74" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#713F12">?</text>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Sentence Puzzle */}
      <g transform="translate(120, 70)">
        <path d="M -60,-15 L -20,-15 L -15,-5 L -20,5 L -60,5 Z" fill="#10B981" />
        <path d="M -20,-15 L 20,-15 L 25,-5 L 20,5 L -20,5 L -15,-5 Z" fill="#3B82F6" />
        <path d="M 20,-15 L 60,-15 L 60,5 L 20,5 L 25,-5 Z" fill="#F59E0B" />
        <text x="-40" y="-1" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#ECFDF5">The big</text>
        <text x="0" y="-1" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#EFF6FF">rocket</text>
        <text x="40" y="-1" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#FFFBEB">landed.</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Spelling Check with missing letter */}
      <g transform="translate(120, 70)">
        <rect x="-50" y="-20" width="100" height="40" fill="#047857" rx="5" />
        <text x="-30" y="6" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#D1FAE5">s</text>
        <rect x="-15" y="-10" width="20" height="20" fill="#10B981" rx="3" />
        <text x="-5" y="6" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#064E3B">?</text>
        <text x="15" y="6" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#D1FAE5">i</text>
        <text x="30" y="6" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#D1FAE5">l</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#450A0A" rx="20" />
      {/* Reading Comprehension (Book/Screen) */}
      <g transform="translate(120, 70)">
        <rect x="-60" y="-30" width="120" height="60" fill="#7F1D1D" rx="5" />
        <line x1="-50" y1="-15" x2="30" y2="-15" stroke="#FCA5A5" strokeWidth="4" strokeLinecap="round" />
        <line x1="-50" y1="0" x2="50" y2="0" stroke="#FCA5A5" strokeWidth="4" strokeLinecap="round" />
        <line x1="-50" y1="15" x2="10" y2="15" stroke="#FCA5A5" strokeWidth="4" strokeLinecap="round" />
        <circle cx="40" cy="-15" r="8" fill="#F87171" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1C1917" rx="20" />
      {/* Golden Victory Trophy */}
      <g transform="translate(120, 70)">
        <polygon points="-20,-20 20,-20 10,10 -10,10" fill="#FBBF24" />
        <rect x="-15" y="10" width="30" height="5" fill="#B45309" />
        <rect x="-25" y="15" width="50" height="10" fill="#F59E0B" rx="2" />
        <path d="M -20,-15 C -40,-15 -30,5 -10,5" fill="none" stroke="#FBBF24" strokeWidth="4" />
        <path d="M 20,-15 C 40,-15 30,5 10,5" fill="none" stroke="#FBBF24" strokeWidth="4" />
        <text x="0" y="0" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#78350F">1</text>
        <circle cx="-50" cy="-30" r="4" fill="#FEF08A" />
        <circle cx="60" cy="-10" r="3" fill="#FEF08A" />
        <circle cx="-40" cy="30" r="5" fill="#FEF08A" />
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "The Big Test",
    
    // T1: Noun or Verb?
    t1_title: "1. Nouns & Verbs",
    t1_text: "Let's see what you remember! Nouns are things or people (like 'rocket' or 'astronaut'). Verbs are action words (like 'jump' or 'fly').",
    t1_b1: "Can you touch it? Probably a noun.",
    t1_b2: "Can you do it? Probably a verb.",
    t1_b3: "Sort the words perfectly!",
    t1_inst: "Sort the words into Nouns (Things) and Verbs (Actions)!",
    t1_bucket_noun: "Noun",
    t1_bucket_verb: "Verb",
    t1_item_n1: "galaxy", t1_item_n2: "comet",
    t1_item_v1: "explore", t1_item_v2: "land",
    t1_q: "Which word is an action verb?",
    t1_q_a: "zoom", t1_q_b: "moon", t1_q_c: "star", t1_q_d: "ship",

    // T2: Sentence Builder
    t2_title: "2. Build a Sentence",
    t2_text: "A complete sentence needs to be in the right order. It needs a subject, an action, and it should make sense!",
    t2_b1: "Start with a capital letter.",
    t2_b2: "Put the adjective before the noun.",
    t2_b3: "End with a period.",
    t2_inst: "Put the words in the correct order to make a sentence!",
    t2_w1: "The", t2_w2: "brave", t2_w3: "pilot", t2_w4: "smiled.",
    t2_q: "What must every sentence have at the end?",
    t2_q_a: "Punctuation (like a period)", t2_q_b: "A capital letter", t2_q_c: "A number", t2_q_d: "An adjective",

    // T3: Spelling Check
    t3_title: "3. Spelling & Vowels",
    t3_text: "Do you remember the Vowel Valley? Think about Magic E and vowel teams like 'ai', 'ea', and 'oa'!",
    t3_b1: "When two vowels go walking, the first does the talking.",
    t3_b2: "Magic E makes the vowel say its name.",
    t3_b3: "Fill in the missing letters!",
    t3_inst: "Fill in the gap with the correct vowel team!",
    t3_sentence: "The astronaut ate a big piece of c___ke. (Magic E!)",
    t3_c1: "a", t3_c2: "ai", t3_c3: "ea",
    t3_q: "How do you spell the word for the bright thing in the day sky?",
    t3_q_a: "sun", t3_q_b: "son", t3_q_c: "sune", t3_q_d: "suun",

    // T4: Reading Comprehension
    t4_title: "4. Reading Mission",
    t4_text: "Read the sentence carefully like a true space detective. Then find the answer hidden inside the sentence!",
    t4_b1: "Read slowly.",
    t4_b2: "Look for the specific information.",
    t4_b3: "Highlight the correct word.",
    t4_inst: "Read: 'The red rover drove on Mars.' Highlight the PROPER NOUN (the name of the planet)!",
    t4_tok0: "The", t4_tok1: "red", t4_tok2: "rover", t4_tok3: "drove", t4_tok4: "on", t4_tok5: "Mars.",
    t4_q: "If the rover is 'red', what part of speech is 'red'?",
    t4_q_a: "Adjective", t4_q_b: "Noun", t4_q_c: "Verb", t4_q_d: "Pronoun",

    // T5: Victory
    t5_title: "Victory Celebration!",
    t5_text: "CONGRATULATIONS! You have passed the Big Test and completed the AstroEnglish K2 mission!",
    t5_b1: "You are a Grammar Master.",
    t5_b2: "You are a Spelling Champion.",
    t5_b3: "Catch your golden trophies!",
    t5_inst: "Tap the 5 golden trophies (🏆) to celebrate!",
    t5_q: "Are you ready for the next grade?",
    t5_q_a: "Yes!", t5_q_b: "Absolutely!", t5_q_c: "Of course!", t5_q_d: "Always!",
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
      type: "word-order",
      words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4"],
      correctOrder: [0, 1, 2, 3], // The brave pilot smiled.
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
      correctIndex: 0, // "a"
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
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"],
      correctIndices: [5], // "Mars."
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
      tapCount: { emoji: "🏆", count: 5 }, // Trophies
      instruction: "t5_inst",
      hint1: "t5_b1",
      hint2: "t5_b2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_q_a", "t5_q_b", "t5_q_c", "t5_q_d"],
      answer: "t5_q_a", // all choices are basically "Yes"
    },
  },
];

// ─── DEF ────────────────────────────────────────────────────────────

const DEF: ExplorerDef = {
  labels: LABELS,
  title: "explorer_title",
  icon: "🌟",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const BigTestExplorer = memo(function BigTestExplorer({
  color = "#F59E0B", // Amber-500 for the Golden Victory/Test theme
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
      explorerId="english_k2_big_test" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default BigTestExplorer;
