"use client";
// PunctuationPeakK6Explorer.tsx — AstroEnglish Grade 6: i8 Punctuation Peak
// Topics: 1) Semicolons 2) Colons 3) Quotation Marks 4) Apostrophes 5) Ink Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Semicolon Mountain Peak */}
      <g transform="translate(120, 70)">
        <polygon points="0,-40 50,40 -50,40" fill="#CBD5E1" />
        <circle cx="0" cy="-10" r="4" fill="#1E293B" />
        <path d="M 0,5 Q 0,15 -5,15" fill="none" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />
        <text x="0" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#475569">The Mighty Semicolon</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Colon Gateway */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="-20" r="6" fill="#FDE047" />
        <circle cx="0" cy="20" r="6" fill="#FDE047" />
        <path d="M -40,0 L 40,0" stroke="#334155" strokeWidth="2" strokeDasharray="4,4" />
        <text x="0" y="50" textAnchor="middle" fontSize="10" fill="#94A3B8">List Ahead</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F1F5F9" rx="20" />
      {/* Ink Droplets */}
      <g transform="translate(120, 70)">
        <path d="M 0,-20 Q 15,0 0,15 Q -15,0 0,-20" fill="#0F172A" />
        <circle cx="0" cy="0" r="30" fill="none" stroke="#94A3B8" strokeWidth="1" opacity="0.3" />
        <text x="0" y="50" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1E293B">Tap the Ink Drops!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Punctuation Peak",
    
    // T1: Semicolons (MAGNET MATCH)
    t1_title: "The Semicolon Link",
    t1_text: "A semicolon (;) connects two independent clauses that are closely related. It acts like a period, but keeps the connection stronger between the ideas.",
    t1_b1: "I like space; it is very big.",
    t1_b2: "Don't use a capital letter after it!",
    t1_b3: "It replaces a period or a comma + FANBOYS.",
    t1_inst: "Magnet Match: Connect the two related thoughts using the power of the semicolon!",
    t1_l1: "The sun is a star;", t1_r1: "it provides light.",
    t1_l2: "I am ready;", t2_r2: "let's launch.",
    t1_l3: "Mars is red;", t3_r3: "it has iron oxide.",
    t1_q: "Which mark is used to join two closely related independent clauses?",
    t1_q_a: "Semicolon (;)", t1_q_b: "Comma (,)", t1_q_c: "Hyphen (-)", t1_q_d: "Question Mark (?)",

    // T2: Colons (SLINGSHOT)
    t2_title: "The Colon Gate",
    t2_text: "A colon (:) introduces a list, a quote, or an explanation. Think of it as a gate that says 'look at what is coming next!'.",
    t2_b1: "List: I need three things: fuel, food, and air.",
    t2_b2: "Explanation: He was late: he missed the shuttle.",
    t2_b3: "The part before the colon must be a full sentence.",
    t2_inst: "Shoot the correctly punctuated sentence asteroid!",
    t2_target_1: "Bring these: water and a map.", // Correct
    t2_target_2: "Bring: water and a map.",
    t2_target_3: "I need, water: and a map.",
    t2_q: "What can a colon introduce?",
    t2_q_a: "A list or explanation.", t2_q_b: "Only a name.", t2_q_c: "A question.", t2_q_d: "Nothing.",

    // T3: Quotation Marks (HIGHLIGHT)
    t3_title: "Dialogue & Quotes",
    t3_text: "Quotation marks (\" \") wrap around the exact words someone says. Punctuation like commas and periods usually go INSIDE the marks.",
    t3_b1: "\"We are landing,\" said the pilot.",
    t3_b2: "Use a comma to separate the quote from the speaker.",
    t3_b3: "Always capitalize the first word of a direct quote.",
    t3_inst: "Highlight the EXACT WORDS that the captain said!",
    t3_tok0: "The", t3_tok1: "captain", t3_tok2: "shouted,", t3_tok3: "\"", t3_tok4: "Brace", t3_tok5: "for", t3_tok6: "impact!", t3_tok7: "\"",
    t3_q: "Where does the period go at the end of a quote?",
    t3_q_a: "Inside the quotation marks.", t3_q_b: "Outside the quotation marks.", t3_q_c: "In the middle of the quote.", t3_q_d: "Nowhere.",

    // T4: Advanced Apostrophes (PHYSICS BUCKET)
    t4_title: "Possession & Plurals",
    t4_text: "Apostrophes show possession. If the word is plural and ends in S, put the apostrophe AFTER the S. (The girls' room).",
    t4_b1: "Singular: The boy's hat.",
    t4_b2: "Plural (ends in S): The boys' room.",
    t4_b3: "Plural (no S): The children's toys.",
    t4_inst: "Sort the words into the correct bucket based on the apostrophe rule!",
    t4_bucket_sing: "Singular Owner",
    t4_bucket_plur: "Plural Owner (Ends in S)",
    t4_item_s1: "Robot's hand", t4_item_s2: "Pilot's chair",
    t4_item_p1: "Students' desks", t4_item_p2: "Rockets' engines",
    t4_q: "Which shows that ONE cat owns a toy?",
    t4_q_a: "The cat's toy.", t4_q_b: "The cats' toy.", t4_q_c: "The cats toy.", t4_q_d: "The cat toy's.",

    // T5: Fun Catch
    t5_title: "Summit Reached",
    t5_text: "Congratulations! You have mastered the highest peak of punctuation. Your writing is now sharp and clear.",
    t5_b1: "Semicolons connect.",
    t5_b2: "Apostrophes possess.",
    t5_b3: "Catch 6 Ink Drops!",
    t5_inst: "Tap the 6 dark ink drops (💧) falling on the snow!",
    t5_q: "Which sentence is punctuated correctly?",
    t5_q_a: "I'm tired; I'll sleep.", t5_q_b: "I'm tired: I'll sleep.", t5_q_c: "I'm tired, I'll sleep.", t5_q_d: "I'm tired I'll sleep.",
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
      type: "physics-magnet",
      pairs: [
        { left: "t1_l1", right: "t1_r1" },
        { left: "t1_l2", right: "t1_r2" },
        { left: "t1_l3", right: "t1_r3" },
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
      type: "physics-slingshot",
      question: "t2_inst",
      targets: [
        { id: "tgt1", text: "t2_target_1", isCorrect: true }, 
        { id: "tgt2", text: "t2_target_2", isCorrect: false },
        { id: "tgt3", text: "t2_target_3", isCorrect: false },
      ],
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7"],
      correctIndices: [4, 5, 6], // "Brace for impact!"
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "physics-bucket",
      buckets: [
        { id: "sing", label: "t4_bucket_sing" },
        { id: "plur", label: "t4_bucket_plur" },
      ],
      items: [
        { text: "t4_item_s1", bucketId: "sing" },
        { text: "t4_item_p1", bucketId: "plur" },
        { text: "t4_item_s2", bucketId: "sing" },
        { text: "t4_item_p2", bucketId: "plur" },
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
  icon: "✒️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PunctuationPeakK6Explorer = memo(function PunctuationPeakK6Explorer({
  color = "#64748B", // Slate-500
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
      grade={6} 
      explorerId="english_k6_punctuation_peak" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default PunctuationPeakK6Explorer;
