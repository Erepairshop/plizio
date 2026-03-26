"use client";
// SentenceShoreExplorer.tsx — AstroEnglish Grade 1: i7 Sentence Shore
// Topics: 1) Capital Letters 2) The Period 3) Questions & Exclamations 4) Asking vs Telling 5) Seashell Hunt

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      {/* Big Capital Letter Leading the Sentence */}
      <g transform="translate(120, 80)">
        {/* Big 'A' */}
        <path d="M -60,20 L -40,-30 L -20,20 Z" fill="#3B82F6" />
        <path d="M -50,5 L -30,5" stroke="#FFFFFF" strokeWidth="4" />
        {/* Small letters following */}
        <circle cx="10" cy="5" r="15" fill="#93C5FD" />
        <text x="10" y="12" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#1E3A8A">n</text>
        <circle cx="45" cy="5" r="15" fill="#93C5FD" />
        <text x="45" y="12" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#1E3A8A">t</text>
        {/* Action lines showing leadership */}
        <path d="M -70,-20 Q -40,-50 -10,-20" fill="none" stroke="#60A5FA" strokeWidth="3" strokeDasharray="4 4" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF2F2" rx="20" />
      {/* The Period (Stop Sign) */}
      <g transform="translate(120, 70)">
        <polygon points="-30,-12 -12,-30 12,-30 30,-12 30,12 12,30 -12,30 -30,12" fill="#EF4444" stroke="#B91C1C" strokeWidth="4" />
        <circle cx="0" cy="0" r="10" fill="#FFFFFF" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#991B1B">PERIOD = STOP</text>
      </g>
      <line x1="40" y1="70" x2="80" y2="70" stroke="#FCA5A5" strokeWidth="6" strokeLinecap="round" />
      <line x1="160" y1="70" x2="200" y2="70" stroke="#FCA5A5" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      {/* Question Mark & Exclamation Mark */}
      <g transform="translate(80, 70)">
        <path d="M -15,-10 C -15,-30 15,-30 15,-10 C 15,10 0,10 0,20" fill="none" stroke="#D97706" strokeWidth="8" strokeLinecap="round" />
        <circle cx="0" cy="35" r="5" fill="#D97706" />
        <text x="0" y="55" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#B45309">ASK</text>
      </g>
      <g transform="translate(160, 70)">
        <line x1="0" y1="-25" x2="0" y2="15" stroke="#059669" strokeWidth="8" strokeLinecap="round" />
        <circle cx="0" cy="35" r="5" fill="#059669" />
        <text x="0" y="55" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#047857">EXCITE</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Abstract Dialogue / Speech Bubbles */}
      <g transform="translate(70, 60)">
        <ellipse cx="0" cy="0" rx="35" ry="25" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
        <polygon points="-10,24 -20,40 5,24" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
        <circle cx="0" cy="0" r="4" fill="#64748B" />
      </g>
      <g transform="translate(170, 80)">
        <ellipse cx="0" cy="0" rx="35" ry="25" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="2" />
        <polygon points="10,24 20,40 -5,24" fill="#DBEAFE" stroke="#60A5FA" strokeWidth="2" />
        <path d="M -5,-5 C -5,-15 5,-15 5,-5 C 5,5 0,5 0,10" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
        <circle cx="0" cy="16" r="2" fill="#2563EB" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEF3C7" rx="20" />
      {/* Sandy Beach and Ocean Waves */}
      <path d="M 0,100 Q 60,80 120,110 T 240,90 L 240,140 L 0,140 Z" fill="#BAE6FD" />
      <path d="M 0,120 Q 80,100 160,125 T 240,110 L 240,140 L 0,140 Z" fill="#7DD3FC" />
      {/* Tap-count emojis (🐚) will be placed over this beach scene */}
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Sentence Shore",
    
    // T1: Capital Letters
    t1_title: "Starting Strong",
    t1_text: "Every sentence must start with a big, strong Capital Letter! It tells the reader that a new thought is beginning.",
    t1_b1: "A capital letter is the leader of the sentence.",
    t1_b2: "Example: 'The cat is sleeping.'",
    t1_b3: "Names also start with a capital letter.",
    t1_inst: "Find and mark the word that STARTS the sentence!",
    t1_tok0: "The", t1_tok1: "little", t1_tok2: "crab", t1_tok3: "walks", t1_tok4: "on", t1_tok5: "the", t1_tok6: "sand.",
    t1_q: "What must be at the very beginning of a sentence?",
    t1_q_a: "A capital letter", t1_q_b: "A period", t1_q_c: "A number", t1_q_d: "A question mark",

    // T2: The Period
    t2_title: "The Period (Stop!)",
    t2_text: "A telling sentence gives us information. It always ends with a little dot called a period (.). The period means STOP!",
    t2_b1: "A period tells your voice to stop and take a breath.",
    t2_b2: "Example: 'I see a boat.'",
    t2_b3: "Without a period, the sentence would never end!",
    t2_inst: "Put the words in order to make a telling sentence. Don't forget the period at the end!",
    t2_w1: "I", t2_w2: "see", t2_w3: "a", t2_w4: "boat.",
    t2_q: "What does a period (.) at the end of a sentence mean?",
    t2_q_a: "Stop", t2_q_b: "Go faster", t2_q_c: "Ask a question", t2_q_d: "Yell loudly",

    // T3: Questions & Exclamations
    t3_title: "Asking and Yelling",
    t3_text: "Not all sentences end with a period! If you are asking something, use a question mark (?). If you are excited or yelling, use an exclamation mark (!).",
    t3_b1: "? = Asking a question (Are you okay?).",
    t3_b2: "! = Strong feeling or excitement (Watch out!).",
    t3_b3: ". = Just telling something (The sky is blue.).",
    t3_inst: "Match the punctuation mark to its job!",
    t3_l1: ".", t3_r1: "Telling something",
    t3_l2: "?", t3_r2: "Asking something",
    t3_l3: "!", t3_r3: "Showing excitement",
    t3_q: "Which punctuation mark do you use when you are very excited?",
    t3_q_a: "Exclamation mark (!)", t3_q_b: "Period (.)", t3_q_c: "Question mark (?)", t3_q_d: "Comma (,)",

    // T4: Asking vs Telling
    t4_title: "Asking or Telling?",
    t4_text: "Let's be punctuation detectives. Look closely at how the sentence ends to know if it is asking a question or just telling a fact.",
    t4_b1: "Sentences with a '?' are questions.",
    t4_b2: "Sentences with a '.' are telling sentences.",
    t4_b3: "Sort them carefully!",
    t4_inst: "Sort the sentences: Are they Asking (?) or Telling (.)?",
    t4_bucket_ask: "Asking (?)",
    t4_bucket_tell: "Telling (.)",
    t4_item_a1: "Is it hot?", t4_item_a2: "Can you swim?",
    t4_item_t1: "It is hot.", t4_item_t2: "I can swim.",
    t4_q: "Which sentence is ASKING a question?",
    t4_q_a: "Do you like apples?", t4_q_b: "I like apples.", t4_q_c: "Apples are red.", t4_q_d: "The apple is big.",

    // T5: Seashell Hunt
    t5_title: "Seashell Search",
    t5_text: "You've learned how to start and stop sentences! Now it's time to relax on Sentence Shore and look for beautiful seashells.",
    t5_b1: "Punctuation helps us read better.",
    t5_b2: "Capitals and periods are a team.",
    t5_b3: "Look closely at the sand!",
    t5_inst: "Find and tap the 5 seashells (🐚) hidden on the shore!",
    t5_q: "What two things does every complete sentence need?",
    t5_q_a: "A capital letter and an ending mark", t5_q_b: "A number and a color", t5_q_c: "A dog and a cat", t5_q_d: "A question mark and an exclamation mark",
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
      type: "highlight-text",
      tokens: ["t1_tok0", "t1_tok1", "t1_tok2", "t1_tok3", "t1_tok4", "t1_tok5", "t1_tok6"],
      correctIndices: [0], // "The"
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
      correctOrder: [0, 1, 2, 3], // "I" "see" "a" "boat."
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
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" }, // . -> Telling
        { left: "t3_l2", right: "t3_r2" }, // ? -> Asking
        { left: "t3_l3", right: "t3_r3" }, // ! -> Excitement
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
      type: "drag-to-bucket",
      buckets: [
        { id: "ask", label: "t4_bucket_ask" },
        { id: "tell", label: "t4_bucket_tell" },
      ],
      items: [
        { text: "t4_item_a1", bucketId: "ask" },
        { text: "t4_item_t1", bucketId: "tell" },
        { text: "t4_item_a2", bucketId: "ask" },
        { text: "t4_item_t2", bucketId: "tell" },
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
      tapCount: { emoji: "🐚", count: 5 }, // Seashells
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

const SentenceShoreExplorer = memo(function SentenceShoreExplorer({
  color = "#0EA5E9", // Sky-500 for the shore/beach theme
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
      explorerId="english_k1_sentence_shore" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default SentenceShoreExplorer;
