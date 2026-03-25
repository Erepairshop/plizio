"use client";
// SpeechK4Explorer.tsx — AstroEnglish Grade 4: i5 Speech Spiral
// Topics: 1) Direct vs Indirect 2) Affect vs Effect 3) Its vs It's 4) There, Their, They're 5) Soundwave Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Direct vs Indirect bubbles */}
      <g transform="translate(60, 60)">
        <path d="M -40,-15 L 40,-15 L 40,15 L -20,15 L -40,30 Z" fill="#D946EF" />
        <text x="0" y="3" textAnchor="middle" fontSize="10" fontWeight="bold" fill="white">"I am here"</text>
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="#F5D0FE">Direct</text>
      </g>
      <path d="M 100,60 L 130,60" stroke="#475569" strokeWidth="2" markerEnd="url(#arrow)" />
      <g transform="translate(180, 60)">
        <rect x="-45" y="-15" width="90" height="30" fill="#701A75" rx="5" />
        <text x="0" y="3" textAnchor="middle" fontSize="9" fontWeight="bold" fill="white">He said he was there</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fill="#F5D0FE">Indirect</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Affect (Action) vs Effect (End result) */}
      <g transform="translate(70, 70)">
        <path d="M -20,-10 L 10,-10 L 25,0 L 10,10 L -20,10 Z" fill="#F43F5E" />
        <text x="-5" y="4" textAnchor="middle" fontSize="10" fontWeight="black" fill="white">AFFECT</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fill="#FDA4AF">The Action</text>
      </g>
      <text x="120" y="75" textAnchor="middle" fontSize="14" fill="#6366F1">➜</text>
      <g transform="translate(175, 70)">
        <circle cx="0" cy="0" r="25" fill="#10B981" />
        <text x="0" y="4" textAnchor="middle" fontSize="10" fontWeight="black" fill="white">EFFECT</text>
        <text x="0" y="40" textAnchor="middle" fontSize="10" fill="#6EE7B7">The Result</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#171717" rx="20" />
      {/* Spiral / Soundwave background */}
      <path d="M 40,70 Q 60,30 80,70 T 120,70 T 160,70 T 200,70" fill="none" stroke="#D946EF" strokeWidth="2" opacity="0.6" />
      <path d="M 40,80 Q 60,40 80,80 T 120,80 T 160,80 T 200,80" fill="none" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" />
      <circle cx="120" cy="70" r="5" fill="#FDF4FF" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#F0ABFC">Tap the voice waves!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Speech Spiral",
    
    // T1: Direct vs Indirect
    t1_title: "Reported Speech",
    t1_text: "Direct speech uses quotation marks to show exact words. Indirect (Reported) speech tells what someone said without using their exact words. Usually, the tense 'steps back' into the past.",
    t1_b1: "Direct: 'I am happy,' she said.",
    t1_b2: "Indirect: She said that she WAS happy.",
    t1_b3: "Indirect speech doesn't need quotation marks.",
    t1_inst: "Is the sentence Direct Speech or Indirect (Reported) Speech?",
    t1_bucket_dir: "Direct (\"\")",
    t1_bucket_ind: "Indirect (Reported)",
    t1_item_d1: "He said, \"I like space.\"", t1_item_d2: "\"Look!\" she yelled.",
    t1_item_i1: "He said that he liked space.", t1_item_i2: "She told us to look.",
    t1_q: "Which word is often used to join a reported speech sentence?",
    t1_q_a: "that", t1_q_b: "and", t1_q_c: "but", t1_q_d: "because",

    // T2: Affect vs Effect
    t2_title: "Affect or Effect?",
    t2_text: "These two are very tricky! 'Affect' is usually a VERB (the action). 'Effect' is usually a NOUN (the result).",
    t2_b1: "The cold will AFFECT (verb) the engine.",
    t2_b2: "The cold had a bad EFFECT (noun) on the engine.",
    t2_b3: "Remember: A is for Action (Affect), E is for End Result (Effect).",
    t2_inst: "Match the word to its correct usage in the sentence!",
    t2_l1: "How will the sun ___ us?", t2_r1: "affect",
    t2_l2: "The sound ___ was loud.", t2_r2: "effect",
    t2_l3: "Sunlight can ___ your skin.", t2_r3: "affect",
    t2_q: "In 'The moon's gravity has an effect on tides', what is 'effect'?",
    t2_q_a: "A noun (the result)", t2_q_b: "A verb (the action)", t2_q_c: "An adjective", t2_q_d: "A pronoun",

    // T3: Its vs It's
    t3_title: "Its and It's",
    t3_text: "'Its' (no apostrophe) shows that something belongs to it. 'It's' (with apostrophe) is short for 'It is' or 'It has'.",
    t3_b1: "The rocket lost ITS fuel. (Belongs to it).",
    t3_b2: "IT'S a long way home. (It is).",
    t3_b3: "Try saying 'it is'—if it sounds right, use the apostrophe!",
    t3_inst: "Fill in the gap with the correct spelling!",
    t3_sentence: "The planet is far away, and ___ atmosphere is thin.",
    t3_c1: "its", t3_c2: "it's", t3_c3: "its'",
    t3_q: "What is 'It's' short for?",
    t3_q_a: "It is", t3_q_b: "Its own", t3_q_c: "In the", t3_q_d: "It was",

    // T4: There, Their, They're
    t4_title: "The Triple Trouble",
    t4_text: "Let's master the most famous homophones one more time for Grade 4. Place, Possession, or 'They are'?",
    t4_b1: "There = Place (over there).",
    t4_b2: "Their = Belonging to them (their ship).",
    t4_b3: "They're = They are (they're ready).",
    t4_inst: "Highlight the correct word in the sentence!",
    t4_tok0: "The", t4_tok1: "astronauts", t4_tok2: "said", t4_tok3: "that", t4_tok4: "they're", t4_tok5: "going", t4_tok6: "outside.",
    t4_q: "Which word means 'belongs to them'?",
    t4_q_a: "their", t4_q_b: "there", t4_q_c: "they're", t4_q_d: "they",

    // T5: Fun Catch
    t5_title: "Voice Waves",
    t5_text: "Communication is key in the Speech Spiral! Catch the voice waves to send your message back to Earth.",
    t5_b1: "Direct speech uses quotes.",
    t5_b2: "Indirect speech uses 'that'.",
    t5_b3: "Catch 6 voice waves!",
    t5_inst: "Tap the 6 voice waves (〰️) before they disappear!",
    t5_q: "What does the 'A' in Affect stand for to help you remember?",
    t5_q_a: "Action", t5_q_b: "Apple", t5_q_c: "After", t5_q_d: "Always",
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
        { id: "dir", label: "t1_bucket_dir" },
        { id: "ind", label: "t1_bucket_ind" },
      ],
      items: [
        { text: "t1_item_d1", bucketId: "dir" },
        { text: "t1_item_i1", bucketId: "ind" },
        { text: "t1_item_d2", bucketId: "dir" },
        { text: "t1_item_i2", bucketId: "ind" },
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" },
        { left: "t2_l2", right: "t2_r2" },
        { left: "t2_l3", right: "t2_r3" },
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sentence",
      choices: ["t3_c1", "t3_c2", "t3_c3"],
      correctIndex: 0, // "its"
      instruction: "t3_inst",
      hint1: "t3_b1",
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t4_tok0", "t4_tok1", "t4_tok2", "t4_tok3", "t4_tok4", "t4_tok5", "t4_tok6"],
      correctIndices: [4], // "they're"
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
      tapCount: { emoji: "〰️", count: 6 }, // Voice waves
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
  icon: "🗣️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const SpeechK4Explorer = memo(function SpeechK4Explorer({
  color = "#D946EF", 
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
      explorerId="english_k4_speech_spiral" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default SpeechK4Explorer;
