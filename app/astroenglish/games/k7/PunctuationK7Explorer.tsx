"use client";
// PunctuationK7Explorer.tsx — AstroEnglish Grade 7: i4 Punctuation Planet
// Topics: 1) Hyphens vs Dashes 2) Parentheses & Brackets 3) Spot the Interruption 4) Correct Connection 5) Planet Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#2E1065" rx="20" />
      {/* Hyphen vs Dash */}
      <g transform="translate(120, 70)">
        <rect x="-70" y="-30" width="40" height="20" fill="#8B5CF6" rx="4" />
        <rect x="-20" y="-30" width="40" height="20" fill="#8B5CF6" rx="4" />
        <line x1="-25" y1="-20" x2="-15" y2="-20" stroke="#FBBF24" strokeWidth="3" />
        <text x="-20" y="5" textAnchor="middle" fontSize="10" fill="#EED2EE">Hyphen (Joins)</text>
        
        <rect x="-50" y="20" width="30" height="15" fill="#6D28D9" rx="2" />
        <rect x="20" y="20" width="30" height="15" fill="#6D28D9" rx="2" />
        <line x1="-10" y1="27" x2="10" y2="27" stroke="#F43F5E" strokeWidth="3" />
        <text x="0" y="50" textAnchor="middle" fontSize="10" fill="#FDA4AF">Dash (Interrupts)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Parentheses & Brackets */}
      <g transform="translate(120, 70)">
        <text x="-40" y="10" textAnchor="middle" fontSize="40" fontWeight="bold" fill="#38BDF8">( )</text>
        <text x="40" y="10" textAnchor="middle" fontSize="40" fontWeight="bold" fill="#10B981">[ ]</text>
        <text x="-40" y="40" textAnchor="middle" fontSize="10" fill="#BAE6FD">Parentheses</text>
        <text x="40" y="40" textAnchor="middle" fontSize="10" fill="#A7F3D0">Brackets</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Ringed Planet */}
      <g transform="translate(120, 70)">
        <ellipse cx="0" cy="0" rx="45" ry="12" fill="none" stroke="#FDE047" strokeWidth="4" transform="rotate(-20)" />
        <circle cx="0" cy="0" r="25" fill="#F59E0B" />
        <ellipse cx="0" cy="0" rx="45" ry="12" fill="none" stroke="#FEF08A" strokeWidth="4" strokeDasharray="60 100" transform="rotate(-20)" />
        <text x="0" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FEF08A">Tap the Planets!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Punctuation Planet",
    
    // T1: Hyphens vs Dashes (DROP GAME)
    t1_title: "Hyphen vs. Dash",
    t1_text: "A hyphen (-) is short and joins two words together (like 'co-pilot'). A dash (—) is longer and shows a break in thought or adds emphasis.",
    t1_b1: "Hyphen (-): Joins words or numbers.",
    t1_b2: "Dash (—): Shows a sudden break or pause.",
    t1_b3: "A dash is twice as long as a hyphen.",
    t1_inst: "Sort the examples into Hyphen or Dash buckets!",
    t1_bucket_hyp: "Hyphen (-)",
    t1_bucket_dsh: "Dash (—)",
    t1_item_h1: "twenty-two", t1_item_h2: "well-known",
    t1_item_d1: "The ship — a huge cruiser — landed.", t1_item_d2: "I saw it — over there!",
    t1_q: "Which mark is used to connect the parts of a compound word?",
    t1_q_a: "Hyphen", t1_q_b: "Dash", t1_q_c: "Comma", t1_q_d: "Apostrophe",

    // T2: Parentheses & Brackets (MAGNET MATCH)
    t2_title: "Extra Cargo",
    t2_text: "Parentheses ( ) hold extra information that isn't necessary for the sentence to make sense. Brackets [ ] are used by editors to add clarifying words into a direct quote.",
    t2_b1: "Parentheses ( ): Extra, non-essential info.",
    t2_b2: "Brackets [ ]: Added words inside a quote.",
    t2_b3: "Ellipsis (...): Shows omitted (missing) text.",
    t2_inst: "Magnet Match: Connect the punctuation mark to its correct use!",
    t2_l1: "Parentheses ( )", t2_r1: "Extra background info",
    t2_l2: "Brackets [ ]", t2_r2: "Clarification in a quote",
    t2_l3: "Ellipsis ...", t2_r3: "Trailing off or missing words",
    t2_q: "Which punctuation mark would you use to show that a speaker trailed off into silence?",
    t2_q_a: "Ellipsis (...)", t2_q_b: "Dash (—)", t2_q_c: "Parentheses ( )", t2_q_d: "Period (.)",

    // T3: Spot the Interruption (HIGHLIGHT)
    t3_title: "Radar Scan: Dash Interruptions",
    t3_text: "A pair of dashes can be used instead of commas to set off a dramatic interruption or extra information in the middle of a sentence.",
    t3_b1: "Find the two long dashes.",
    t3_b2: "Highlight the dashes AND the words between them.",
    t3_b3: "This makes the interruption pop out!",
    t3_inst: "Highlight the interruption (including the dashes) in this sentence!",
    t3_tok0: "The", t3_tok1: "alien", t3_tok2: "—", t3_tok3: "despite", t3_tok4: "its", t3_tok5: "scary", t3_tok6: "teeth", t3_tok7: "—", t3_tok8: "was", t3_tok9: "friendly.",
    t3_q: "If you remove the words between the dashes, does the sentence still make sense?",
    t3_q_a: "Yes", t3_q_b: "No", t3_q_c: "Only in the past tense", t3_q_d: "It becomes a question",

    // T4: Correct Connection (SLINGSHOT)
    t4_title: "Asteroid Connection",
    t4_text: "A compound adjective uses a hyphen when it comes BEFORE the noun it describes (e.g., 'a man-eating alien'). If it comes after the noun, no hyphen is needed.",
    t4_b1: "Before noun: Hyphen needed.",
    t4_b2: "After noun: No hyphen.",
    t4_b3: "Watch out for sneaky dashes trying to act like hyphens!",
    t4_inst: "Shoot the asteroid that correctly uses a hyphen for a compound adjective!",
    t4_target_1: "We explored a little-known planet.", // Correct
    t4_target_2: "We explored a little known planet.",
    t4_target_3: "The planet was little-known.",
    t4_q: "Which phrase is correctly hyphenated?",
    t4_q_a: "A high-speed rocket", t4_q_b: "A high speed rocket", t4_q_c: "A high—speed rocket", t4_q_d: "A high speed-rocket",

    // T5: Fun Catch
    t5_title: "Planet Explorer",
    t5_text: "You have successfully navigated the rings of Punctuation Planet! Your sentences will now flow perfectly, with the right pauses and connections.",
    t5_b1: "Hyphens connect.",
    t5_b2: "Dashes interrupt.",
    t5_b3: "Catch 6 Planets!",
    t5_inst: "Tap the 6 ringed planets (🪐) to establish a colony!",
    t5_q: "Which mark is longer?",
    t5_q_a: "Dash (—)", t5_q_b: "Hyphen (-)", t5_q_c: "They are the same length", t5_q_d: "Comma (,)",
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
        { id: "hyp", label: "t1_bucket_hyp" },
        { id: "dsh", label: "t1_bucket_dsh" },
      ],
      items: [
        { text: "t1_item_h1", bucketId: "hyp" },
        { text: "t1_item_d1", bucketId: "dsh" },
        { text: "t1_item_h2", bucketId: "hyp" },
        { text: "t1_item_d2", bucketId: "dsh" },
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
    svg: () => <Topic1Svg />,
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7", "t3_tok8", "t3_tok9"],
      correctIndices: [2, 3, 4, 5, 6, 7], // "— despite its scary teeth —"
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
      type: "physics-slingshot",
      question: "t4_inst",
      targets: [
        { id: "tgt1", text: "t4_target_1", isCorrect: true }, 
        { id: "tgt2", text: "t4_target_2", isCorrect: false },
        { id: "tgt3", text: "t4_target_3", isCorrect: false },
      ],
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
      tapCount: { emoji: "🪐", count: 6 }, 
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
  icon: "🪐",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const PunctuationK7Explorer = memo(function PunctuationK7Explorer({
  color = "#8B5CF6", // Violet-500
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
      grade={7} 
      explorerId="english_k7_punctuation_planet" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default PunctuationK7Explorer;
