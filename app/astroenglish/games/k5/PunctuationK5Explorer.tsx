"use client";
// PunctuationK5Explorer.tsx — AstroEnglish Grade 5: i5 Punctuation Port
// Topics: 1) The Comma Review 2) The Colon (:) 3) The Semicolon (;) 4) The Dash (—) 5) Anchor Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Commas sorting cargo */}
      <g transform="translate(120, 70)">
        <rect x="-80" y="-15" width="40" height="30" fill="#3B82F6" rx="4" />
        <text x="-25" y="10" fontSize="30" fontWeight="black" fill="#FDE047">,</text>
        <rect x="-10" y="-15" width="40" height="30" fill="#3B82F6" rx="4" />
        <text x="45" y="10" fontSize="30" fontWeight="black" fill="#FDE047">,</text>
        <rect x="60" y="-15" width="40" height="30" fill="#3B82F6" rx="4" />
        <text x="10" y="40" textAnchor="middle" fontSize="10" fill="#93C5FD">Separating the cargo</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#164E63" rx="20" />
      {/* The Colon Opening a Gate */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="60" height="30" fill="#0891B2" rx="4" />
        <text x="-60" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">I need:</text>
        
        <circle cx="-10" cy="-10" r="5" fill="#FDE047" />
        <circle cx="-10" cy="10" r="5" fill="#FDE047" />
        
        <path d="M 0,0 L 20,-20 L 20,20 Z" fill="#22D3EE" />
        
        <rect x="30" y="-25" width="60" height="10" fill="#06B6D4" rx="2" />
        <rect x="30" y="-5" width="50" height="10" fill="#06B6D4" rx="2" />
        <rect x="30" y="15" width="40" height="10" fill="#06B6D4" rx="2" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* The Semicolon Bridge */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-20" width="70" height="40" fill="#6366F1" rx="5" />
        <text x="-55" y="4" textAnchor="middle" fontSize="10" fill="white">Idea 1</text>
        
        <circle cx="0" cy="-10" r="4" fill="#F43F5E" />
        <path d="M 0,10 A 4,4 0 1,1 0,2 L 0,15 L -3,15 A 4,4 0 0,1 0,10" fill="#F43F5E" />
        
        <rect x="20" y="-20" width="70" height="40" fill="#8B5CF6" rx="5" />
        <text x="55" y="4" textAnchor="middle" fontSize="10" fill="white">Idea 2</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#312E81" rx="20" />
      {/* The Dash for emphasis */}
      <g transform="translate(120, 70)">
        <rect x="-80" y="-10" width="60" height="20" fill="#4F46E5" rx="4" />
        <rect x="-10" y="-3" width="40" height="6" fill="#F59E0B" />
        <rect x="40" y="-15" width="50" height="30" fill="#FDE68A" rx="4" />
        <text x="65" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350F">SURPRISE!</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#082F49" rx="20" />
      {/* Port background with anchors */}
      <rect x="0" y="100" width="240" height="40" fill="#0284C7" />
      <path d="M 0,100 Q 30,90 60,100 T 120,100 T 180,100 T 240,100 L 240,140 L 0,140 Z" fill="#0369A1" />
      <g transform="translate(120, 60)">
        <circle cx="0" cy="-15" r="5" fill="none" stroke="#FDE047" strokeWidth="2" />
        <line x1="0" y1="-10" x2="0" y2="15" stroke="#FDE047" strokeWidth="2" />
        <path d="M -15,5 Q 0,20 15,5" fill="none" stroke="#FDE047" strokeWidth="2" />
        <polygon points="-15,5 -18,0 -12,0" fill="#FDE047" />
        <polygon points="15,5 12,0 18,0" fill="#FDE047" />
        <line x1="-10" y1="0" x2="10" y2="0" stroke="#FDE047" strokeWidth="2" />
      </g>
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#E0F2FE">Tap the space anchors!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Punctuation Port",
    
    // T1: The Comma Review
    t1_title: "Comma Cargo",
    t1_text: "Let's review the comma (,). We use it to separate items in a list, to connect independent clauses (with a FANBOYS word), and when directly addressing someone.",
    t1_b1: "List: We need fuel, food, and water.",
    t1_b2: "Address: Houston, we have a problem.",
    t1_b3: "Compound: We ran, but we were late.",
    t1_inst: "Highlight the comma in the sentence!",
    t1_tok0: "Captain,", t1_tok1: "the", t1_tok2: "engines", t1_tok3: "are", t1_tok4: "ready", t1_tok5: "for", t1_tok6: "launch.",
    t1_q: "Why is there a comma in 'John, please sit down'?",
    t1_q_a: "Because someone is being directly addressed.", t1_q_b: "Because it's a list.", t1_q_c: "Because it connects two long sentences.", t1_q_d: "It's a mistake.",

    // T2: The Colon
    t2_title: "The Colon Gate (:)",
    t2_text: "A colon (:) looks like two dots stacked up. It is used to introduce a list of items or to give a strong explanation. It acts like a gate opening up to new information.",
    t2_b1: "Rule 1: Use it before a list.",
    t2_b2: "Example: I have three favorite planets: Mars, Venus, and Earth.",
    t2_b3: "Rule 2: The sentence before the colon must be complete.",
    t2_inst: "Fill in the gap to properly introduce the list!",
    t2_sentence: "The astronaut packed her bag ___ a helmet, gloves, and boots.",
    t2_c1: ":", t2_c2: ";", t2_c3: ",",
    t2_q: "Which punctuation mark is used to introduce a list?",
    t2_q_a: "Colon (:)", t2_q_b: "Semicolon (;)", t2_q_c: "Comma (,)", t2_q_d: "Period (.)",

    // T3: The Semicolon
    t3_title: "The Semicolon Bridge (;)",
    t3_text: "A semicolon (;) looks like a dot over a comma. It links TWO independent clauses that are closely related, without using a joining word (like 'and' or 'but').",
    t3_b1: "Sentence 1 ; Sentence 2.",
    t3_b2: "Example: The stars are bright; the moon is full.",
    t3_b3: "It is stronger than a comma, but softer than a period.",
    t3_inst: "Match the closely related sentences to join them with a semicolon!",
    t3_l1: "It is freezing outside;", t3_r1: "you must wear a spacesuit.",
    t3_l2: "The engine is broken;", t3_r2: "we cannot launch today.",
    t3_l3: "Mars is red;", t3_r3: "Neptune is blue.",
    t3_q: "What does a semicolon connect?",
    t3_q_a: "Two complete, related sentences.", t3_q_b: "A subject and a verb.", t3_q_c: "Items in a simple list.", t3_q_d: "A prefix and a root word.",

    // T4: The Dash
    t4_title: "The Dramatic Dash (—)",
    t4_text: "A dash (—) is a long line used to show a sudden break in thought, or to add extra emphasis to the end of a sentence.",
    t4_b1: "It creates drama or surprise!",
    t4_b2: "Example: We opened the cargo bay—it was completely empty!",
    t4_b3: "Don't confuse it with a short hyphen (-).",
    t4_inst: "Sort the sentences: Do they use a Colon (List) or a Dash (Surprise/Emphasis)?",
    t4_bucket_colon: "Colon (:)",
    t4_bucket_dash: "Dash (—)",
    t4_item_c1: "We need: air, food, and water.", t4_item_c2: "He saw two things: a star and a comet.",
    t4_item_d1: "I looked up—a UFO was there!", t4_item_d2: "We won the race—barely.",
    t4_q: "Which mark is best to show a sudden break in thought?",
    t4_q_a: "Dash (—)", t4_q_b: "Colon (:)", t4_q_c: "Period (.)", t4_q_d: "Comma (,)",

    // T5: Fun Catch
    t5_title: "Anchor Catch",
    t5_text: "You have securely docked at the Punctuation Port! Now, help the space-ships drop their anchors.",
    t5_b1: "Colons point forward.",
    t5_b2: "Semicolons bridge the gap.",
    t5_b3: "Catch 6 anchors!",
    t5_inst: "Tap the 6 golden space anchors (⚓) in the port!",
    t5_q: "Which punctuation mark is made of a dot above a comma?",
    t5_q_a: "Semicolon", t5_q_b: "Colon", t5_q_c: "Dash", t5_q_d: "Apostrophe",
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
      correctIndices: [0], // "Captain,"
      instruction: "t1_inst",
      hint1: "t1_b2",
      hint2: "t1_b1",
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
      correctIndex: 0, // ":"
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
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
      ],
      instruction: "t3_inst",
      hint1: "t3_b2",
      hint2: "t3_b1",
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
        { id: "colon", label: "t4_bucket_colon" },
        { id: "dash", label: "t4_bucket_dash" },
      ],
      items: [
        { text: "t4_item_c1", bucketId: "colon" },
        { text: "t4_item_d1", bucketId: "dash" },
        { text: "t4_item_c2", bucketId: "colon" },
        { text: "t4_item_d2", bucketId: "dash" },
      ],
      instruction: "t4_inst",
      hint1: "t4_b2",
      hint2: "t4_b1",
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
      tapCount: { emoji: "⚓", count: 6 }, 
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
  icon: "✏️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PunctuationK5Explorer = memo(function PunctuationK5Explorer({
  color = "#0891B2", // Cyan-600 for the Port/Nautical tech vibe
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
      grade={5} 
      explorerId="english_k5_punctuation_port" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default PunctuationK5Explorer;
