"use client";
// AcademicHarborK6Explorer.tsx — AstroEnglish Grade 6: i7 Academic Harbor
// Topics: 1) Formal vs Informal 2) Transition Words 3) Domain Vocabulary 4) Academic Precision 5) Scroll Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Scroll and Quill */}
      <g transform="translate(120, 70)">
        <rect x="-30" y="-40" width="60" height="80" fill="#F8FAFC" rx="2" />
        <line x1="-20" y1="-25" x2="20" y2="-25" stroke="#94A3B8" strokeWidth="2" />
        <line x1="-20" y1="-15" x2="10" y2="-15" stroke="#94A3B8" strokeWidth="2" />
        <line x1="-20" y1="-5" x2="20" y2="-5" stroke="#94A3B8" strokeWidth="2" />
        <path d="M 40,-30 L 20,30" stroke="#FBBF24" strokeWidth="3" strokeLinecap="round" />
        <text x="0" y="55" textAnchor="middle" fontSize="10" fill="#94A3B8">Formal Record</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Transition Bridge */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-10" width="60" height="20" fill="#6366F1" rx="4" />
        <rect x="30" y="-10" width="60" height="20" fill="#6366F1" rx="4" />
        <path d="M -30,0 L 30,0" stroke="#FDE047" strokeWidth="4" strokeDasharray="6,3" />
        <text x="0" y="-20" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FDE047">HOWEVER</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E293B" rx="20" />
      {/* Floating Graduation Scrolls */}
      <g transform="translate(120, 70)">
        <rect x="-20" y="-10" width="40" height="15" fill="#FEF3C7" rx="5" />
        <rect x="15" y="-12" width="5" height="20" fill="#EF4444" />
        <circle cx="0" cy="0" r="30" fill="none" stroke="#FDE047" strokeWidth="1" strokeDasharray="5,5" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">Tap the Academic Scrolls!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Academic Harbor",
    
    // T1: Formal vs Informal (PHYSICS BUCKET)
    t1_title: "The Professional Tone",
    t1_text: "In the Academic Harbor, we speak with precision. Formal language avoids slang and contractions (don't, can't) and uses professional verbs.",
    t1_b1: "Informal: 'I'll look into it.'",
    t1_b2: "Formal: 'I will investigate the matter.'",
    t1_b3: "Keep it objective and clear.",
    t1_inst: "Sort the phrases into the correct tone bucket!",
    t1_bucket_form: "Formal (Professional)",
    t1_bucket_inf: "Informal (Casual)",
    t1_item_f1: "It is evident that...", t1_item_f2: "Please provide assistance.",
    t1_item_i1: "You can see that...", t1_item_i2: "Help me out, okay?",
    t1_q: "Which word is more academic than 'bad'?",
    t1_q_a: "detrimental", t1_q_b: "awful", t1_q_c: "terrible", t1_q_d: "gross",

    // T2: Transition Words (MAGNET MATCH)
    t2_title: "Logical Bridges",
    t2_text: "Transition words help your ideas flow together. Use 'Furthermore' to add info, 'Consequently' for results, and 'However' for contrast.",
    t2_b1: "Furthermore = Also.",
    t2_b2: "Consequently = As a result.",
    t2_b3: "However = But.",
    t2_inst: "Magnet Match: Connect the cause to its formal consequence!",
    t2_l1: "Fuel is low;", t2_r1: "consequently, we land.",
    t2_l2: "Mars is cold;", t2_r2: "however, it is beautiful.",
    t2_l3: "We found ice;", t2_r3: "furthermore, we found air.",
    t2_q: "Which transition word shows a result?",
    t2_q_a: "Consequently", t2_q_b: "However", t2_q_c: "In contrast", t2_q_d: "Although",

    // T3: Domain Vocabulary (HIGHLIGHT)
    t3_title: "Subject Precision",
    t3_text: "Every subject has its own 'Domain Vocabulary'. In 6th grade, you should use specific terms for science and math instead of general words.",
    t3_b1: "General: 'The part moved.'",
    t3_b2: "Precise: 'The mechanism rotated.'",
    t3_b3: "Use words that show your expertise.",
    t3_inst: "Highlight the ACADEMIC/SCIENTIFIC term in this sentence!",
    t3_tok0: "The", t3_tok1: "experiment", t3_tok2: "produced", t3_tok3: "a", t3_tok4: "significant", t3_tok5: "amount", t3_tok6: "of", t3_tok7: "energy.",
    t3_q: "What is 'domain vocabulary'?",
    t3_q_a: "Words specific to a subject area.", t3_q_b: "Slang words.", t3_q_c: "Short words.", t3_q_d: "Words that rhyme.",

    // T4: Academic Sentence Construction (STACKER)
    t4_title: "Building Arguments",
    t4_text: "Let's build a formal academic claim. Start with your subject, use a precise verb, and add a logical conclusion.",
    t4_b1: "Evidence suggests...",
    t4_b2: "...that gravity impacts...",
    t4_b3: "...orbital velocity.",
    t4_inst: "Stack the blocks to build a formal academic sentence! (Bottom to top)",
    t4_w0: "Scientific research", // Index 0
    t4_w1: "demonstrates",      // Index 1
    t4_w2: "clear results.",     // Index 2
    t4_q: "Which verb is most appropriate for a formal report?",
    t4_q_a: "demonstrates", t4_q_b: "shows off", t4_q_c: "tells about", t4_q_d: "points at",

    // T5: Fun Catch
    t5_title: "Academic Honor",
    t5_text: "Brilliant! You have successfully docked at the Academic Harbor. Your professional communication skills are now top-tier.",
    t5_b1: "Transition with grace.",
    t5_b2: "Speak with precision.",
    t5_b3: "Catch 5 Scrolls!",
    t5_inst: "Tap the 5 floating academic scrolls (📜) in the harbor!",
    t5_q: "What is the main goal of academic language?",
    t5_q_a: "To be clear and precise.", t5_q_b: "To be funny.", t5_q_c: "To be short.", t5_q_d: "To use slang.",
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
      type: "physics-bucket",
      buckets: [
        { id: "form", label: "t1_bucket_form" },
        { id: "inf", label: "t1_bucket_inf" },
      ],
      items: [
        { text: "t1_item_f1", bucketId: "form" },
        { text: "t1_item_i1", bucketId: "inf" },
        { text: "t1_item_f2", bucketId: "form" },
        { text: "t1_item_i2", bucketId: "inf" },
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
      type: "physics-magnet",
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7"],
      correctIndices: [4], // "significant"
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "physics-stacker",
      words: ["t4_w0", "t4_w1", "t4_w2"],
      correctOrder: [0, 1, 2],
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
      tapCount: { emoji: "📜", count: 5 }, 
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
  icon: "🎓",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const AcademicHarborK6Explorer = memo(function AcademicHarborK6Explorer({
  color = "#1E3A8A", // Blue-900 (Professional Harbor feel)
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
      explorerId="english_k6_academic_harbor" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default AcademicHarborK6Explorer;
