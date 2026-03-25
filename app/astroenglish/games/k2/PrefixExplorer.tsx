"use client";
// PrefixExplorer.tsx — AstroEnglish Grade 2: i6 Prefix Planet
// Topics: 1) What is a Prefix? 2) Using un- and re- 3) What is a Suffix? (-ful, -less) 4) Spelling Rules 5) Gear Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Prefix + Root Word */}
      <g transform="translate(60, 60)">
        <rect x="-25" y="-15" width="50" height="30" fill="#F43F5E" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FFF1F2">re</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FDA4AF">Prefix</text>
      </g>
      <text x="100" y="65" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#94A3B8">+</text>
      <g transform="translate(150, 60)">
        <rect x="-35" y="-15" width="70" height="30" fill="#3B82F6" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#EFF6FF">build</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#93C5FD">Root Word</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4C1D95" rx="20" />
      {/* re- (loop) vs un- (cross) */}
      <g transform="translate(60, 70)">
        <path d="M -15,0 A 15,15 0 1,1 15,0 A 15,15 0 0,1 -5,15" fill="none" stroke="#34D399" strokeWidth="4" markerEnd="url(#arrow)" />
        <text x="0" y="-25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#A7F3D0">re- (again)</text>
      </g>
      <g transform="translate(180, 70)">
        <circle cx="0" cy="0" r="18" fill="none" stroke="#F87171" strokeWidth="4" />
        <line x1="-12" y1="-12" x2="12" y2="12" stroke="#F87171" strokeWidth="4" />
        <text x="0" y="-25" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#FECACA">un- (not)</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#164E63" rx="20" />
      {/* Root Word + Suffix */}
      <g transform="translate(70, 60)">
        <rect x="-35" y="-15" width="70" height="30" fill="#3B82F6" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#EFF6FF">hope</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#93C5FD">Root Word</text>
      </g>
      <text x="120" y="65" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#94A3B8">+</text>
      <g transform="translate(170, 60)">
        <rect x="-25" y="-15" width="50" height="30" fill="#10B981" rx="5" />
        <text x="0" y="4" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ECFDF5">ful</text>
        <text x="0" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#6EE7B7">Suffix</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#78350F" rx="20" />
      {/* Spelling Rule: Drop the 'e' */}
      <g transform="translate(120, 60)">
        <text x="-60" y="0" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#FDE68A">make</text>
        <line x1="-50" y1="-10" x2="-35" y2="5" stroke="#EF4444" strokeWidth="3" /> {/* Cross out 'e' */}
        <text x="-15" y="0" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#D4D4D8">+</text>
        <text x="20" y="0" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#6EE7B7">ing</text>
        <path d="M -40,25 Q 0,45 40,25" fill="none" stroke="#FCD34D" strokeWidth="3" markerEnd="url(#arrow)" />
        <text x="0" y="55" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#FEF3C7">making</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1C1917" rx="20" />
      {/* Factory / Planet Gears */}
      <circle cx="50" cy="50" r="25" fill="none" stroke="#57534E" strokeWidth="4" strokeDasharray="10,5" />
      <circle cx="180" cy="90" r="30" fill="none" stroke="#78716C" strokeWidth="6" strokeDasharray="15,8" />
      <circle cx="110" cy="80" r="15" fill="none" stroke="#44403C" strokeWidth="3" strokeDasharray="5,3" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#D6D3D1">Tap the gears!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Prefix Planet",
    
    // T1: What is a Prefix?
    t1_title: "Word Starters (Prefixes)",
    t1_text: "A prefix is a small word part added to the BEGINNING of a word to change its meaning.",
    t1_b1: "The main word is called the 'Root Word'.",
    t1_b2: "Prefixes change the root word's meaning.",
    t1_b3: "Match the prefix to its secret meaning!",
    t1_inst: "Match the prefix to what it means!",
    t1_l1: "re- (rebuild)", t1_r1: "do it again",
    t1_l2: "un- (unhappy)", t1_r2: "not",
    t1_l3: "pre- (preview)", t1_r3: "before",
    t1_q: "If 'heat' means to make warm, what does 'preheat' mean?",
    t1_q_a: "To heat before", t1_q_b: "To heat again", t1_q_c: "Not hot", t1_q_d: "To cool down",

    // T2: Using un- and re-
    t2_title: "Using 'un-' and 're-'",
    t2_text: "Let's use our two favorite prefixes! Add 're-' to do something again, or add 'un-' if something is NOT true or undone.",
    t2_b1: "Tie -> Untie (undo the knot).",
    t2_b2: "Write -> Rewrite (write it again).",
    t2_b3: "Sort the words by their prefix!",
    t2_inst: "Is the word using 're-' (again) or 'un-' (not)?",
    t2_bucket_re: "re- (Again)",
    t2_bucket_un: "un- (Not)",
    t2_item_r1: "repack", t2_item_r2: "rebuild",
    t2_item_u1: "unsafe", t2_item_u2: "unfair",
    t2_q: "Which word means 'to paint again'?",
    t2_q_a: "repaint", t2_q_b: "unpaint", t2_q_c: "painter", t2_q_d: "painting",

    // T3: What is a Suffix?
    t3_title: "Word Enders (Suffixes)",
    t3_text: "A suffix is a small word part added to the END of a root word. '-ful' means full of, and '-less' means without.",
    t3_b1: "Hopeful = full of hope.",
    t3_b2: "Fearless = without fear.",
    t3_b3: "Find the suffix at the end of the word!",
    t3_inst: "Highlight the suffix (-ful or -less) in the word!",
    t3_tok0: "The", t3_tok1: "brave", t3_tok2: "pilot", t3_tok3: "was", t3_tok4: "fear", t3_tok5: "less.",
    t3_q: "What does 'colorless' mean?",
    t3_q_a: "Without color", t3_q_b: "Full of color", t3_q_c: "To color again", t3_q_d: "A bright color",

    // T4: Spelling Rules
    t4_title: "Tricky Spelling Rules",
    t4_text: "Sometimes, when we add a suffix that starts with a vowel (like -ing or -ed), the root word changes its spelling!",
    t4_b1: "Rule 1: Drop the silent 'e' (make -> making).",
    t4_b2: "Rule 2: Double the last consonant if it's a short word (hop -> hopping).",
    t4_b3: "Don't get tricked!",
    t4_inst: "Fill in the gap to spell the word correctly!",
    t4_sentence: "The spaceship is ___ on the moon. (land + ing)",
    t4_c1: "landing", t4_c2: "landding", t4_c3: "landeig",
    t4_q: "How do you spell 'bake' with an '-ing' suffix?",
    t4_q_a: "baking", t4_q_b: "bakeing", t4_q_c: "bakking", t4_q_d: "baeking",

    // T5: Fun Catch
    t5_title: "Gear Catch",
    t5_text: "You are a master word builder! Help us collect the gears we need to 'rebuild' our robot friend.",
    t5_b1: "'Rebuild' has the prefix 're-'.",
    t5_b2: "It means to build again.",
    t5_b3: "Catch 6 gears!",
    t5_inst: "Tap the 6 gears (⚙️) floating on the planet!",
    t5_q: "Which part of the word is added to the BEGINNING?",
    t5_q_a: "Prefix", t5_q_b: "Suffix", t5_q_c: "Root Word", t5_q_d: "Vowel",
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
        { left: "t1_l1", right: "t1_r1" }, // re -> again
        { left: "t1_l2", right: "t1_r2" }, // un -> not
        { left: "t1_l3", right: "t1_r3" }, // pre -> before
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
        { id: "re", label: "t2_bucket_re" },
        { id: "un", label: "t2_bucket_un" },
      ],
      items: [
        { text: "t2_item_r1", bucketId: "re" },
        { text: "t2_item_u1", bucketId: "un" },
        { text: "t2_item_r2", bucketId: "re" },
        { text: "t2_item_u2", bucketId: "un" },
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5"],
      correctIndices: [5], // "less"
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
      type: "gap-fill",
      sentence: "t4_sentence",
      choices: ["t4_c1", "t4_c2", "t4_c3"],
      correctIndex: 0, // "landing"
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
      tapCount: { emoji: "⚙️", count: 6 }, // Gears
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
  icon: "🔡",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PrefixExplorer = memo(function PrefixExplorer({
  color = "#F43F5E", // Rose-500 for the mechanical/building theme
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
      explorerId="english_k2_prefix_planet" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default PrefixExplorer;
