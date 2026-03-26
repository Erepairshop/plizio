"use client";
// WordFamilyExplorer.tsx — AstroEnglish Grade 3: i7 Word Family Falls
// Topics: 1) Word Families 2) To, Too, Two 3) There, Their, They're 4) Homophone Hunt 5) Droplet Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#022C22" rx="20" />
      {/* Word Family Tree */}
      <g transform="translate(120, 110)">
        <rect x="-10" y="-30" width="20" height="40" fill="#78350F" />
        <text x="0" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FDE68A">play</text>
        
        {/* Branches */}
        <circle cx="-35" cy="-50" r="20" fill="#047857" />
        <text x="-35" y="-46" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#D1FAE5">player</text>
        
        <circle cx="0" cy="-65" r="22" fill="#059669" />
        <text x="0" y="-61" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#D1FAE5">playing</text>
        
        <circle cx="35" cy="-50" r="20" fill="#10B981" />
        <text x="35" y="-46" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#D1FAE5">played</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* To vs Too vs Two */}
      <g transform="translate(40, 70)">
        <path d="M -15,0 L 5,0 L 5,-10 L 20,5 L 5,20 L 5,10 L -15,10 Z" fill="#3B82F6" />
        <text x="0" y="-15" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#93C5FD">to</text>
      </g>
      <g transform="translate(120, 70)">
        <circle cx="-10" cy="5" r="8" fill="#F59E0B" />
        <circle cx="10" cy="5" r="8" fill="#F59E0B" />
        <circle cx="0" cy="-5" r="8" fill="#F59E0B" />
        <text x="0" y="-20" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FDE68A">too (much)</text>
      </g>
      <g transform="translate(200, 70)">
        <text x="0" y="10" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#10B981">2</text>
        <text x="0" y="-15" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#6EE7B7">two</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#312E81" rx="20" />
      {/* There, Their, They're */}
      <g transform="translate(50, 50)">
        <circle cx="0" cy="0" r="10" fill="#F43F5E" />
        <line x1="0" y1="10" x2="0" y2="25" stroke="#F43F5E" strokeWidth="4" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDA4AF">their ship</text>
      </g>
      <g transform="translate(120, 50)">
        <text x="0" y="10" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#38BDF8">They are</text>
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BAE6FD">they're</text>
      </g>
      <g transform="translate(190, 50)">
        <path d="M 0,-10 C 10,-10 10,10 0,10 C -10,10 -10,-10 0,-10 Z" fill="#A855F7" />
        <circle cx="0" cy="0" r="3" fill="#312E81" />
        <path d="M 0,10 L 0,20" stroke="#A855F7" strokeWidth="3" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#D8B4FE">over there</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Homophone Hunt (Magnifying Glass) */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-20" width="180" height="40" fill="#047857" rx="10" />
        <text x="0" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#A7F3D0">
          I ate <tspan fill="#FBBF24" textDecoration="underline">too</tspan> much pizza!
        </text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0284C7" rx="20" />
      {/* Waterfall Background */}
      <rect x="80" y="0" width="80" height="140" fill="#38BDF8" opacity="0.6" />
      <path d="M 80,0 Q 120,50 80,140 L 160,140 Q 120,50 160,0 Z" fill="#0EA5E9" opacity="0.8" />
      <circle cx="120" cy="100" r="5" fill="#E0F2FE" />
      <circle cx="100" cy="60" r="4" fill="#E0F2FE" />
      <circle cx="140" cy="80" r="6" fill="#E0F2FE" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0369A1">Tap the drops!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Word Family Falls",
    
    // T1: Word Families
    t1_title: "Word Families",
    t1_text: "A Word Family is a group of words that share the same base (root) word. They just have different prefixes or suffixes!",
    t1_b1: "Base: Play. Family: Player, playing, played.",
    t1_b2: "Base: Run. Family: Runner, running.",
    t1_b3: "Match the base word to its family member!",
    t1_inst: "Match the short base word to its longer family member!",
    t1_l1: "jump", t1_r1: "jumping",
    t1_l2: "teach", t1_r2: "teacher",
    t1_l3: "help", t1_r3: "helpful",
    t1_q: "Which word is in the same family as 'build'?",
    t1_q_a: "builder", t1_q_b: "bird", t1_q_c: "bold", t1_q_d: "button",

    // T2: To, Too, Two
    t2_title: "The Tricky T-W-O's",
    t2_text: "Homophones are words that SOUND the same, but are spelled differently. 'To', 'Too', and 'Two' are famous homophones!",
    t2_b1: "'Two' is the number 2.",
    t2_b2: "'Too' means also, or very much (too hot).",
    t2_b3: "'To' shows direction (go to space).",
    t2_inst: "Fill in the gap with the correct spelling!",
    t2_sentence: "I want to go to the moon, ___!",
    t2_c1: "too", t2_c2: "two", t2_c3: "to",
    t2_q: "How do you spell the number 2?",
    t2_q_a: "two", t2_q_b: "too", t2_q_c: "to", t2_q_d: "tow",

    // T3: There, Their, They're
    t3_title: "The Tricky T-H-E-R-E's",
    t3_text: "Here is another set of famous homophones! 'There', 'Their', and 'They're' sound exactly the same.",
    t3_b1: "'There' points to a place (over there).",
    t3_b2: "'Their' means it belongs to them (their ship).",
    t3_b3: "'They're' is short for 'They are'.",
    t3_inst: "Sort the words! Is it a PLACE or does it BELONG to someone?",
    t3_bucket_place: "A Place (There)",
    t3_bucket_own: "Belongs to them (Their)",
    t3_item_p1: "Look over there", t3_item_p2: "Go there",
    t3_item_o1: "Their dog", t3_item_o2: "Their rocket",
    t3_q: "Which word is short for 'They are'?",
    t3_q_a: "They're", t3_q_b: "There", t3_q_c: "Their", t3_q_d: "There's",

    // T4: Homophone Hunt
    t4_title: "Homophone Hunt",
    t4_text: "You have to be a detective to use homophones correctly. Read the sentence and think about what the word means before you spell it.",
    t4_b1: "I have (two/too) apples. (Number!)",
    t4_b2: "Look over (there/their). (Place!)",
    t4_b3: "Find the correct word.",
    t4_inst: "Highlight the correct homophone in the sentence!",
    t4_tok0: "Look!", t4_tok1: "The", t4_tok2: "aliens", t4_tok3: "parked", t4_tok4: "their", t4_tok5: "UFO.",
    t4_q: "Which sentence uses the correct spelling?",
    t4_q_a: "It is too hot.", t4_q_b: "It is two hot.", t4_q_c: "It is to hot.", t4_q_d: "It is tow hot.",

    // T5: Droplet Catch
    t5_title: "Waterfall Droplets",
    t5_text: "You solved the homophone puzzle! Let's collect some fresh water droplets from the Word Family Falls.",
    t5_b1: "Water falls down.",
    t5_b2: "Catch them before they splash.",
    t5_b3: "Tap 6 droplets!",
    t5_inst: "Tap the 6 water droplets (💧) from the waterfall!",
    t5_q: "Words that sound the same but are spelled differently are called...",
    t5_q_a: "Homophones", t5_q_b: "Synonyms", t5_q_c: "Antonyms", t5_q_d: "Prefixes",
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
      type: "match-pairs",
      pairs: [
        { left: "t1_l1", right: "t1_r1" }, // jump - jumping
        { left: "t1_l2", right: "t1_r2" }, // teach - teacher
        { left: "t1_l3", right: "t1_r3" }, // help - helpful
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
      type: "gap-fill",
      sentence: "t2_sentence",
      choices: ["t2_c1", "t2_c2", "t2_c3"],
      correctIndex: 0, // "too"
      instruction: "t2_inst",
      hint1: "t2_b2",
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
      type: "drag-to-bucket",
      buckets: [
        { id: "place", label: "t3_bucket_place" },
        { id: "own", label: "t3_bucket_own" },
      ],
      items: [
        { text: "t3_item_p1", bucketId: "place" },
        { text: "t3_item_o1", bucketId: "own" },
        { text: "t3_item_p2", bucketId: "place" },
        { text: "t3_item_o2", bucketId: "own" },
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
    svg: () => <Topic4Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5"],
      correctIndices: [4], // "their"
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
      tapCount: { emoji: "💧", count: 6 },
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
  icon: "🌿",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const WordFamilyExplorer = memo(function WordFamilyExplorer({
  color = "#14B8A6",
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
      grade={3}
      explorerId="english_k3_word_family_falls"
      color={color}
      lang="en"
      onDone={onDone}
    />
  );
});

export default WordFamilyExplorer;
