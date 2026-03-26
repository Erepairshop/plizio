"use client";
// InterjectionExplorer.tsx — AstroEnglish Grade 5: i2 Interjection Isle
// Topics: 1) What is an Interjection? 2) Strong vs Mild (Punctuation) 3) Context Matters 4) Spot the Interjection 5) Exclamation Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Explosive WOW! */}
      <g transform="translate(120, 70)">
        <polygon points="0,-40 15,-15 40,-20 20,0 40,20 15,15 0,40 -15,15 -40,20 -20,0 -40,-20 -15,-15" fill="#FDE047" />
        <polygon points="0,-30 10,-10 30,-15 15,0 30,15 10,10 0,30 -10,10 -30,15 -15,0 -30,-15 -10,-10" fill="#F59E0B" />
        <text x="0" y="8" textAnchor="middle" fontSize="24" fontWeight="black" fill="#78350F">WOW!</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Strong (!) vs Mild (,) */}
      <g transform="translate(60, 70)">
        <circle cx="0" cy="0" r="30" fill="#EF4444" opacity="0.8" />
        <text x="0" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">Ouch!</text>
        <text x="0" y="45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FCA5A5">Strong Emotion</text>
      </g>
      <text x="120" y="75" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#6B7280">VS</text>
      <g transform="translate(180, 70)">
        <circle cx="0" cy="0" r="30" fill="#3B82F6" opacity="0.8" />
        <text x="0" y="5" textAnchor="middle" fontSize="16" fontWeight="bold" fill="white">Oh,</text>
        <text x="0" y="45" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#93C5FD">Mild Emotion</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4A044E" rx="20" />
      {/* Context Context clues (Oops vs Phew) */}
      <g transform="translate(70, 60)">
        <circle cx="0" cy="0" r="15" fill="#F59E0B" />
        <path d="M -5,-5 L 5,5 M 5,-5 L -5,5" stroke="#78350F" strokeWidth="2" />
        <text x="0" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">Oops! (Mistake)</text>
      </g>
      <g transform="translate(170, 60)">
        <path d="M -15,0 Q 0,-15 15,0" fill="none" stroke="#38BDF8" strokeWidth="4" strokeLinecap="round" />
        <circle cx="20" cy="-5" r="3" fill="#BAE6FD" />
        <text x="0" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BAE6FD">Phew! (Relief)</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Highlighting the interjection */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="180" height="30" fill="#047857" rx="5" />
        <rect x="-85" y="-10" width="35" height="20" fill="#10B981" rx="3" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#D1FAE5">
          <tspan fill="#064E3B">Hey,</tspan> look at that planet!
        </text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#7F1D1D" rx="20" />
      {/* Island with Exclamation Marks */}
      <path d="M 40,120 Q 120,50 200,120 L 240,140 L 0,140 Z" fill="#991B1B" />
      <path d="M 60,130 Q 120,80 180,130 L 200,140 L 40,140 Z" fill="#B91C1C" />
      <circle cx="120" cy="110" r="10" fill="#EF4444" />
      <text x="120" y="50" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FECACA">Tap the Exclamation Marks!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Interjection Isle",
    
    // T1: What is an Interjection?
    t1_title: "Sudden Emotions!",
    t1_text: "An interjection is a word that shows strong or sudden emotion. It has no real grammatical connection to the rest of the sentence—it just adds feeling!",
    t1_b1: "Wow! (Surprise or amazement).",
    t1_b2: "Ouch! (Pain or getting hurt).",
    t1_b3: "Phew! (Relief).",
    t1_inst: "Match the interjection to the feeling it describes!",
    t1_l1: "Ouch!", t1_r1: "Pain",
    t1_l2: "Wow!", t1_r2: "Surprise",
    t1_l3: "Phew!", t1_r3: "Relief",
    t1_q: "What is the main job of an interjection?",
    t1_q_a: "To show sudden emotion or feeling.", t1_q_b: "To name a person, place, or thing.", t1_q_c: "To describe a noun.", t1_q_d: "To connect two sentences.",

    // T2: Strong vs Mild
    t2_title: "Strong vs. Mild Punctuation",
    t2_text: "If the feeling is very STRONG, we use an exclamation mark (!). If the feeling is MILD, we just use a comma (,).",
    t2_b1: "Strong: Stop! That is dangerous.",
    t2_b2: "Mild: Well, we can try again.",
    t2_b3: "Look at the punctuation mark.",
    t2_inst: "Sort the interjections: Are they Strong (!) or Mild (,)?",
    t2_bucket_strong: "Strong (!)",
    t2_bucket_mild: "Mild (,)",
    t2_item_s1: "Yikes!", t2_item_s2: "Hooray!",
    t2_item_m1: "Oh,", t2_item_m2: "Well,",
    t2_q: "How do you punctuate a MILD interjection?",
    t2_q_a: "With a comma (,).", t2_q_b: "With an exclamation mark (!).", t2_q_c: "With a question mark (?).", t2_q_d: "With a period (.).",

    // T3: Context Matters
    t3_title: "Context Matters",
    t3_text: "You must choose the right interjection for the situation. You wouldn't say 'Hooray!' if you dropped your ice cream!",
    t3_b1: "Mistake -> Oops!",
    t3_b2: "Victory -> Yay!",
    t3_b3: "Disgust -> Ew!",
    t3_inst: "Fill in the gap with the interjection that makes the most sense!",
    t3_sentence: "___, that asteroid almost hit our ship!",
    t3_c1: "Phew", t3_c2: "Yay", t3_c3: "Oops",
    t3_q: "Which interjection would you use if you saw a beautiful galaxy?",
    t3_q_a: "Wow!", t3_q_b: "Ouch!", t3_q_c: "Ew!", t3_q_d: "Oops!",

    // T4: Spot the Interjection
    t4_title: "Spot the Interjection",
    t4_text: "Interjections usually sit at the very beginning of a sentence. Let's find them!",
    t4_b1: "Look at the start of the sentence.",
    t4_b2: "Look for a comma or exclamation mark right after a short word.",
    t4_b3: "Highlight the emotion word.",
    t4_inst: "Highlight the interjection in this sentence!",
    t4_tok0: "Alas,", t4_tok1: "our", t4_tok2: "spaceship", t4_tok3: "is", t4_tok4: "out", t4_tok5: "of", t4_tok6: "fuel.",
    t4_q: "In the sentence 'Hey, look at that comet!', what is 'Hey'?",
    t4_q_a: "An interjection", t4_q_b: "A verb", t4_q_c: "An adjective", t4_q_d: "A noun",

    // T5: Fun Catch
    t5_title: "Exclamation Catch",
    t5_text: "Yippee! You mastered the Interjection Isle. Now catch the exclamation marks erupting from the volcano.",
    t5_b1: "Interjections add energy.",
    t5_b2: "Catch them fast!",
    t5_b3: "Tap 6 marks!",
    t5_inst: "Tap the 6 exclamation marks (❗) erupting from the island!",
    t5_q: "Which of the following is an interjection?",
    t5_q_a: "Ouch!", t5_q_b: "Run", t5_q_c: "Quickly", t5_q_d: "Beautiful",
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
        { left: "t1_l1", right: "t1_r1" }, // Ouch - Pain
        { left: "t1_l2", right: "t1_r2" }, // Wow - Surprise
        { left: "t1_l3", right: "t1_r3" }, // Phew - Relief
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
      type: "drag-to-bucket",
      buckets: [
        { id: "strong", label: "t2_bucket_strong" },
        { id: "mild", label: "t2_bucket_mild" },
      ],
      items: [
        { text: "t2_item_s1", bucketId: "strong" },
        { text: "t2_item_m1", bucketId: "mild" },
        { text: "t2_item_s2", bucketId: "strong" },
        { text: "t2_item_m2", bucketId: "mild" },
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
      correctIndex: 0, // "Phew"
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
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6"],
      correctIndices: [0], // "Alas,"
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
      tapCount: { emoji: "❗", count: 6 }, // Exclamation marks
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
  icon: "❗",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const InterjectionExplorer = memo(function InterjectionExplorer({
  color = "#EF4444", // Red-500 for the strong emotion/exclamation theme
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
      explorerId="english_k5_interjection_isle" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default InterjectionExplorer;
