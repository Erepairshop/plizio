"use client";
// RegisterExplorer.tsx — AstroEnglish Grade 8: i7 Register Range
// Topics: 1) Formal vs Informal 2) Academic Vocab 3) Spot the Slang 4) Formal Rewrite 5) Radio Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#422006" rx="20" />
      {/* Formal Suit vs Casual T-Shirt */}
      <g transform="translate(70, 70)">
        {/* T-Shirt (Informal) */}
        <path d="M -20,-15 L 20,-15 L 30,0 L 15,10 L 15,30 L -15,30 L -15,10 L -30,0 Z" fill="#FDE047" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="#FEF08A">Informal (Casual)</text>
      </g>
      <g transform="translate(170, 70)">
        {/* Suit/Tie (Formal) */}
        <path d="M -20,-15 L 20,-15 L 25,30 L -25,30 Z" fill="#1E293B" />
        <polygon points="-10,-15 10,-15 0,10" fill="#F8FAFC" />
        <polygon points="-3,-15 3,-15 0,5" fill="#DC2626" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="#CBD5E1">Formal (Academic)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#172554" rx="20" />
      {/* Brain & Data (Academic Words) */}
      <g transform="translate(120, 70)">
        <path d="M -30,0 Q -15,-30 0,0 Q 15,30 30,0" fill="none" stroke="#3B82F6" strokeWidth="4" />
        <circle cx="-15" cy="-15" r="5" fill="#60A5FA" />
        <circle cx="15" cy="15" r="5" fill="#60A5FA" />
        <rect x="-40" y="20" width="80" height="2" fill="#93C5FD" />
        <text x="0" y="-20" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BFDBFE">Cognitive Correlation</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Vintage Radio */}
      <g transform="translate(120, 80)">
        <rect x="-30" y="-20" width="60" height="40" fill="#D97706" rx="4" />
        <circle cx="-15" cy="0" r="10" fill="#1E293B" />
        <circle cx="15" cy="0" r="10" fill="#1E293B" />
        <rect x="-10" y="-15" width="20" height="5" fill="#FDE047" />
        <line x1="-20" y1="-20" x2="-30" y2="-40" stroke="#94A3B8" strokeWidth="2" />
        <circle cx="-30" cy="-40" r="2" fill="#EF4444" />
        <text x="0" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">Tap the Radios!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Register Range",
    
    // T1: Formal vs Informal (DROP GAME)
    t1_title: "Tune Your Register",
    t1_text: "Register is the level of formality you use. INFORMAL register is for texts and friends ('Things got way better'). FORMAL register is for essays and reports ('The results indicate a significant improvement').",
    t1_b1: "Informal: Uses slang, contractions, and simple words.",
    t1_b2: "Formal: Uses precise vocabulary and full sentences.",
    t1_b3: "Know your audience!",
    t1_inst: "Sort the sentences into the Formal or Informal buckets!",
    t1_bucket_for: "Formal (Academic)",
    t1_bucket_inf: "Informal (Everyday)",
    t1_item_f1: "The results indicate a significant improvement.", t1_item_f2: "The committee approved the proposal.",
    t1_item_i1: "Things got way better.", t1_item_i2: "They finally said yes to it.",
    t1_q: "Rewrite this formally: 'Things got way better.'",
    t1_q_a: "The results indicate a significant improvement.", t1_q_b: "Stuff improved a lot.", t1_q_c: "It became super good.", t1_q_d: "Everything is awesome now.",

    // T2: Academic Vocab (MAGNET MATCH)
    t2_title: "Academic Vocabulary",
    t2_text: "To sound academic, upgrade your vocabulary! Instead of 'educated guess', use 'hypothesis'. Instead of 'the numbers match up', use 'correlation'.",
    t2_b1: "Cognitive = Related to thinking and the brain.",
    t2_b2: "Correlation = A connection between two sets of data.",
    t2_b3: "Hypothesis = A proposed explanation (educated guess).",
    t2_inst: "Magnet Match: Connect the conversational phrase to its ACADEMIC upgrade!",
    t2_l1: "An educated guess", t2_r1: "Hypothesis",
    t2_l2: "The numbers matching up", t2_r2: "Correlation",
    t2_l3: "Related to thinking", t2_r3: "Cognitive",
    t2_q: "Which sentence is more ACADEMIC?",
    t2_q_a: "The data suggests a strong correlation.", t2_q_b: "The numbers kind of match up.", t2_q_c: "It looks like they go together.", t2_q_d: "The stats are pretty similar.",

    // T3: Spot the Slang (HIGHLIGHT)
    t3_title: "Radar Scan: Unprofessional Words",
    t3_text: "Sometimes casual words slip into formal writing. Words like 'super', 'really', 'kids', or 'cops' should be replaced with 'highly', 'significantly', 'children', or 'police'.",
    t3_b1: "Read the academic sentence.",
    t3_b2: "Find the word that sounds like it belongs on a playground.",
    t3_b3: "Highlight the informal word!",
    t3_inst: "Highlight the INFORMAL word that ruins this academic sentence!",
    t3_tok0: "The", t3_tok1: "researchers", t3_tok2: "concluded", t3_tok3: "that", t3_tok4: "the", t3_tok5: "new", t3_tok6: "method", t3_tok7: "was", t3_tok8: "super", t3_tok9: "effective.",
    t3_q: "Why should you avoid words like 'super' or 'really' in formal writing?",
    t3_q_a: "They are too conversational and lack precision.", t3_q_b: "They are too hard to spell.", t3_q_c: "They make the sentence too long.", t3_q_d: "They are academic words.",

    // T4: Formal Rewrite (SLINGSHOT)
    t4_title: "The Rewrite",
    t4_text: "When translating from informal to formal, you must keep the exact same meaning but change the tone. Avoid contractions (don't -> do not) and emotional punctuation (!!!).",
    t4_b1: "Find the most professional option.",
    t4_b2: "Check for precise verbs and nouns.",
    t4_b3: "Shoot the best rewrite!",
    t4_inst: "Shoot the asteroid that is the BEST formal rewrite for: 'The cops caught the bad guy.'",
    t4_target_1: "The police apprehended the suspect.", // Correct
    t4_target_2: "The police grabbed the bad guy.",
    t4_target_3: "The cops arrested the criminal.",
    t4_q: "What makes a register 'formal'?",
    t4_q_a: "It uses precise vocabulary and an objective tone.", t4_q_b: "It uses a lot of exclamation points.", t4_q_c: "It includes emojis.", t4_q_d: "It uses slang and abbreviations.",

    // T5: Fun Catch
    t5_title: "Broadcast Master",
    t5_text: "Loud and clear! You have mastered the Register Range. You know exactly how to tune your language for your friends, your teachers, and the scientific community.",
    t5_b1: "Use formal for essays.",
    t5_b2: "Use precise academic vocabulary.",
    t5_b3: "Catch 6 Radios!",
    t5_inst: "Tap the 6 radios (📻) to broadcast your success!",
    t5_q: "What does 'register' mean in English language arts?",
    t5_q_a: "The level of formality used in writing or speech.", t5_q_b: "A book where you sign your name.", t5_q_c: "The machine at a grocery store.", t5_q_d: "The volume of your voice.",
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
        { id: "for", label: "t1_bucket_for" },
        { id: "inf", label: "t1_bucket_inf" },
      ],
      items: [
        { text: "t1_item_f1", bucketId: "for" },
        { text: "t1_item_i1", bucketId: "inf" },
        { text: "t1_item_f2", bucketId: "for" },
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
      correctIndices: [8], // "super"
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
      tapCount: { emoji: "📻", count: 6 }, 
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
  icon: "📻",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const RegisterExplorer = memo(function RegisterExplorer({
  color = "#D97706", // Amber-600 (Rádió / Fa doboz szín)
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
      grade={8} 
      explorerId="english_k8_register_range" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default RegisterExplorer;
