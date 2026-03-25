"use client";
// StorySummitExplorer.tsx — AstroEnglish Grade 1: i9 Story Summit (Grand Finale)
// Topics: 1) Commands & Exclamations 2) Story Elements 3) Spot the Character 4) Grand Review 5) Summit Celebration

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      {/* Command (Stop Sign) vs Exclamation (Wow) */}
      <g transform="translate(70, 70)">
        <polygon points="-20,-10 -10,-20 10,-20 20,-10 20,10 10,20 -10,20 -20,10" fill="#EF4444" />
        <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">DO IT</text>
        <text x="0" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B45309">COMMAND</text>
      </g>
      <line x1="120" y1="30" x2="120" y2="110" stroke="#FDE047" strokeWidth="4" strokeDasharray="4 4" />
      <g transform="translate(170, 70)">
        <line x1="0" y1="-25" x2="0" y2="10" stroke="#3B82F6" strokeWidth="8" strokeLinecap="round" />
        <circle cx="0" cy="25" r="4" fill="#3B82F6" />
        <path d="M -15,-30 Q 0,-40 15,-30" fill="none" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
        <path d="M -20,-15 Q -30,-5 -20,5" fill="none" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
        <path d="M 20,-15 Q 30,-5 20,5" fill="none" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1D4ED8">EXCLAIM!</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Story Elements: Book Opening */}
      <g transform="translate(120, 80)">
        <path d="M -50,0 L -10,10 L -10,-30 L -50,-40 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
        <path d="M 50,0 L 10,10 L 10,-30 L 50,-40 Z" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
        <path d="M -10,10 L 0,15 L 10,10 L 10,-30 L 0,-25 L -10,-30 Z" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />
        {/* Character (Stick figure) on left page */}
        <circle cx="-30" cy="-20" r="4" fill="#F59E0B" />
        <line x1="-30" y1="-16" x2="-30" y2="-5" stroke="#F59E0B" strokeWidth="2" />
        <line x1="-30" y1="-12" x2="-35" y2="-8" stroke="#F59E0B" strokeWidth="2" />
        <line x1="-30" y1="-12" x2="-25" y2="-8" stroke="#F59E0B" strokeWidth="2" />
        {/* Setting (Tree) on right page */}
        <rect x="28" y="-10" width="4" height="10" fill="#78350F" />
        <circle cx="30" cy="-15" r="8" fill="#22C55E" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* Magnifying Glass over Text */}
      <g transform="translate(120, 70)">
        <rect x="-60" y="-20" width="120" height="40" fill="#FFFFFF" rx="5" />
        <line x1="-50" y1="-5" x2="50" y2="-5" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
        <line x1="-50" y1="10" x2="20" y2="10" stroke="#CBD5E1" strokeWidth="4" strokeLinecap="round" />
        {/* Glass */}
        <circle cx="10" cy="0" r="25" fill="#BBF7D0" opacity="0.4" stroke="#22C55E" strokeWidth="4" />
        <line x1="28" y1="18" x2="45" y2="35" stroke="#16A34A" strokeWidth="6" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EEF2FF" rx="20" />
      {/* Puzzle Pieces forming a sentence */}
      <g transform="translate(120, 70)">
        <rect x="-70" y="-15" width="40" height="30" fill="#60A5FA" rx="4" />
        <circle cx="-30" cy="0" r="10" fill="#60A5FA" />
        
        <rect x="-20" y="-15" width="40" height="30" fill="#3B82F6" rx="4" />
        <circle cx="-20" cy="0" r="10" fill="#EEF2FF" />
        <circle cx="20" cy="0" r="10" fill="#3B82F6" />
        
        <rect x="30" y="-15" width="40" height="30" fill="#2563EB" rx="4" />
        <circle cx="30" cy="0" r="10" fill="#EEF2FF" />
        <circle cx="70" cy="0" r="4" fill="#1E3A8A" /> {/* Punctuation */}
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E293B" rx="20" />
      {/* Summit / Mountain Peak */}
      <path d="M 120,40 L 220,140 L 20,140 Z" fill="#475569" />
      <path d="M 120,40 L 160,80 L 140,90 L 120,70 L 100,90 L 80,80 Z" fill="#F8FAFC" /> {/* Snow cap */}
      {/* Flag */}
      <line x1="120" y1="40" x2="120" y2="10" stroke="#94A3B8" strokeWidth="2" />
      <polygon points="120,10 140,15 120,25" fill="#EF4444" />
      {/* Tap-count stars (⭐) will appear in the sky! */}
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Story Summit",
    
    // T1: Commands & Exclamations
    t1_title: "Commands & Exclamations",
    t1_text: "A COMMAND tells someone to do something (Sit down.). An EXCLAMATION shows strong feeling and ends with an exclamation mark (I love this!).",
    t1_b1: "Commands can end with a period or exclamation mark.",
    t1_b2: "Exclamations always show excitement or surprise.",
    t1_b3: "Both are different from asking questions.",
    t1_inst: "Sort the sentences: Is it a Command (telling someone to do something) or an Exclamation (strong feeling)?",
    t1_bucket_com: "Command (Do it)",
    t1_bucket_exc: "Exclamation (Wow!)",
    t1_item_c1: "Read the book.", t1_item_c2: "Stop running.",
    t1_item_e1: "I am so happy!", t1_item_e2: "What a big dog!",
    t1_q: "Which of these is a COMMAND?",
    t1_q_a: "Wash your hands.", t1_q_b: "Are you okay?", t1_q_c: "I like cats.", t1_q_d: "Wow, a rainbow!",

    // T2: Story Elements
    t2_title: "Parts of a Story",
    t2_text: "Every great story has three main parts: Characters (WHO is in the story), Setting (WHERE it happens), and Events (WHAT happens).",
    t2_b1: "Characters can be people, animals, or creatures.",
    t2_b2: "The setting is the place and time.",
    t2_b3: "The events are the action of the story.",
    t2_inst: "Match the question to the correct story part!",
    t2_l1: "Who is in it?", t2_r1: "Character",
    t2_l2: "Where is it?", t2_r2: "Setting",
    t2_l3: "What happens?", t2_r3: "Event",
    t2_q: "If a story takes place in a dark forest, the forest is the...",
    t2_q_a: "Setting", t2_q_b: "Character", t2_q_c: "Event", t2_q_d: "Author",

    // T3: Spot the Character
    t3_title: "Spot the Character",
    t3_text: "Let's test your reading comprehension! A good reader always knows who the story is about.",
    t3_b1: "Read the sentence carefully.",
    t3_b2: "Find the noun that acts as the character.",
    t3_b3: "Use your detective skills!",
    t3_inst: "Find and mark the CHARACTER in this sentence!",
    t3_tok0: "The", t3_tok1: "brave", t3_tok2: "dog", t3_tok3: "ran", t3_tok4: "fast.",
    t3_q: "In the sentence 'The funny pig rolled in the mud', who is the character?",
    t3_q_a: "pig", t3_q_b: "funny", t3_q_c: "mud", t3_q_d: "rolled",

    // T4: Grand Review
    t4_title: "Grand Review",
    t4_text: "You have learned phonics, sight words, nouns, verbs, adjectives, and punctuation. Let's put it all together to build one final sentence!",
    t4_b1: "Start with a capital letter.",
    t4_b2: "Make sure the words make sense.",
    t4_b3: "End with an exclamation mark!",
    t4_inst: "Put the words in order to finish the story!",
    t4_w1: "We", t4_w2: "read", t4_w3: "a", t4_w4: "great", t4_w5: "story!",
    t4_q: "What makes you a great reader?",
    t4_q_a: "Practicing letters, words, and sentences", t4_q_b: "Reading with my eyes closed", t4_q_c: "Eating lots of apples", t4_q_d: "Running very fast",

    // T5: Summit Celebration
    t5_title: "To The Summit!",
    t5_text: "Congratulations! You have reached the top of Story Summit. You are officially a Grade 1 English Master!",
    t5_b1: "You learned all your letters and sounds.",
    t5_b2: "You can read and write sentences.",
    t5_b3: "Celebrate your victory!",
    t5_inst: "Catch the 5 shooting stars (⭐) at the top of the mountain!",
    t5_q: "What is the best way to get even better at English?",
    t5_q_a: "Keep reading books every day!", t5_q_b: "Never read again", t5_q_c: "Forget the alphabet", t5_q_d: "Only look at pictures",
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
        { id: "com", label: "t1_bucket_com" },
        { id: "exc", label: "t1_bucket_exc" },
      ],
      items: [
        { text: "t1_item_c1", bucketId: "com" },
        { text: "t1_item_e1", bucketId: "exc" },
        { text: "t1_item_c2", bucketId: "com" },
        { text: "t1_item_e2", bucketId: "exc" },
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
        { left: "t2_l1", right: "t2_r1" }, // Who -> Character
        { left: "t2_l2", right: "t2_r2" }, // Where -> Setting
        { left: "t2_l3", right: "t2_r3" }, // What -> Event
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
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4"],
      correctIndices: [2], // "dog"
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
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4", "t4_w5"],
      correctOrder: [0, 1, 2, 3, 4], // "We" "read" "a" "great" "story!"
      instruction: "t4_inst",
      hint1: "t4_b1",
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
      tapCount: { emoji: "⭐", count: 5 }, // Stars at the summit
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
  icon: "🌟",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const StorySummitExplorer = memo(function StorySummitExplorer({
  color = "#F59E0B", // Amber-500 for the golden summit celebration
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
      grade={1} 
      explorerId="english_k1_story_summit" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default StorySummitExplorer;
