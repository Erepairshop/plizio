"use client";
// AcademicK7Explorer.tsx — AstroEnglish Grade 7: i6 Academic Arena
// Topics: 1) Formal vs Casual 2) Vocabulary Upgrade 3) Spot the Slang 4) Academic Transitions 5) Cap Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Formal vs Casual - Speech Bubbles */}
      <g transform="translate(70, 70)">
        <path d="M -30,-20 L 30,-20 L 30,10 L 10,10 L 0,25 L -10,10 L -30,10 Z" fill="#34D399" />
        <text x="0" y="-1" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#064E3B">Hey guys!</text>
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#A7F3D0">Casual</text>
      </g>
      <g transform="translate(170, 70)">
        <rect x="-35" y="-20" width="70" height="30" fill="#FBBF24" rx="5" />
        <polygon points="-10,10 0,20 10,10" fill="#FBBF24" />
        <text x="0" y="-1" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350F">Greetings.</text>
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#FDE68A">Formal</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E293B" rx="20" />
      {/* Academic Book */}
      <g transform="translate(120, 70)">
        <path d="M -40,10 L 0,20 L 40,10 L 40,-20 L 0,-10 L -40,-20 Z" fill="#0EA5E9" />
        <path d="M 0,20 L 0,-10" stroke="#0284C7" strokeWidth="2" />
        <path d="M -30,-10 L -10,-5 M 30,-10 L 10,-5" stroke="#BAE6FD" strokeWidth="2" strokeLinecap="round" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="#94A3B8">Upgrade Vocabulary</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Graduation Cap */}
      <g transform="translate(120, 70)">
        <polygon points="0,-20 40,0 0,20 -40,0" fill="#10B981" />
        <path d="M -20,10 L -20,25 Q 0,35 20,25 L 20,10" fill="none" stroke="#059669" strokeWidth="8" />
        <line x1="35" y1="-2" x2="35" y2="20" stroke="#FDE047" strokeWidth="2" />
        <circle cx="35" cy="22" r="3" fill="#FDE047" />
        <text x="0" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#A7F3D0">Tap the Caps!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Academic Arena",
    
    // T1: Formal vs Casual (DROP GAME)
    t1_title: "Formal vs. Casual",
    t1_text: "In the Academic Arena, we use FORMAL language. This means no slang, no text-speak, and using complete, polite sentences. CASUAL language is fine for friends, but not for essays!",
    t1_b1: "Casual: 'That's totally awesome.'",
    t1_b2: "Formal: 'That is fascinating.'",
    t1_b3: "Avoid abbreviations like 'ASAP' in essays.",
    t1_inst: "Sort the phrases into the Formal or Casual buckets!",
    t1_bucket_for: "Formal (Academic)",
    t1_bucket_cas: "Casual (Everyday)",
    t1_item_f1: "I strongly believe...", t1_item_f2: "Therefore, we must...",
    t1_item_c1: "I totally think...", t1_item_c2: "So, yeah, we gotta...",
    t1_q: "Which greeting is most appropriate for a formal email to a teacher?",
    t1_q_a: "Dear Mr. Smith,", t1_q_b: "Hey Mr. Smith,", t1_q_c: "What's up Smith,", t1_q_d: "Yo Teacher,",

    // T2: Vocabulary Upgrade (MAGNET MATCH)
    t2_title: "Vocabulary Upgrade",
    t2_text: "To sound more academic, replace simple, everyday verbs with more precise, advanced verbs. For example, instead of saying 'look into', say 'investigate'.",
    t2_b1: "'Find out' becomes 'Discover'.",
    t2_b2: "'Set up' becomes 'Establish'.",
    t2_b3: "Precise words make your writing stronger.",
    t2_inst: "Magnet Match: Connect the casual phrasal verb to its Academic upgrade!",
    t2_l1: "Find out", t2_r1: "Discover",
    t2_l2: "Give out", t2_r2: "Distribute",
    t2_l3: "Talk about", t2_r3: "Discuss",
    t2_q: "What is a more academic way to say 'He got a prize'?",
    t2_q_a: "He received an award.", t2_q_b: "He grabbed a prize.", t2_q_c: "He took the win.", t2_q_d: "He snatched a trophy.",

    // T3: Spot the Slang (HIGHLIGHT)
    t3_title: "Radar Scan: Slang Detector",
    t3_text: "Sometimes, informal slang slips into an academic sentence. Slang includes words like 'cool', 'awesome', 'cops', or 'kids'. You need to edit them out!",
    t3_b1: "Read the sentence carefully.",
    t3_b2: "Find the words that sound like playground talk.",
    t3_b3: "Highlight the slang words!",
    t3_inst: "Highlight the SLANG (informal words) that ruins this academic sentence!",
    t3_tok0: "The", t3_tok1: "researchers", t3_tok2: "conducted", t3_tok3: "a", t3_tok4: "totally", t3_tok5: "awesome", t3_tok6: "experiment", t3_tok7: "yesterday.",
    t3_q: "What would be a good formal replacement for 'kids' in an essay?",
    t3_q_a: "Children", t3_q_b: "Little guys", t3_q_c: "Tykes", t3_q_d: "Youths (but only sometimes)",

    // T4: Academic Transitions (SLINGSHOT)
    t4_title: "Transition Targets",
    t4_text: "Transition words connect your ideas. Instead of saying 'But', an academic writer uses 'However'. Instead of 'Also', they might use 'Furthermore' or 'In addition'.",
    t4_b1: "To add info: Furthermore, Moreover.",
    t4_b2: "To show contrast: However, Nevertheless.",
    t4_b3: "To show result: Therefore, Consequently.",
    t4_inst: "Shoot the asteroid that contains a formal transition word for CONTRAST (meaning 'But')!",
    t4_target_1: "However", // Correct
    t4_target_2: "Furthermore",
    t4_target_3: "Anyway",
    t4_q: "Which transition word is best to show a RESULT?",
    t4_q_a: "Therefore", t4_q_b: "But", t4_q_c: "In contrast", t4_q_d: "On the other hand",

    // T5: Fun Catch
    t5_title: "Graduation Day",
    t5_text: "Excellent work! You have mastered the Academic Register. Your essays will sound professional, precise, and highly intelligent.",
    t5_b1: "Use formal tone.",
    t5_b2: "Avoid slang.",
    t5_b3: "Catch 5 Caps!",
    t5_inst: "Tap the 5 graduation caps (🎓) to earn your diploma!",
    t5_q: "When should you use an academic register?",
    t5_q_a: "In essays and formal presentations.", t5_q_b: "When texting friends.", t5_q_c: "At a sports game.", t5_q_d: "While playing video games.",
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
        { id: "cas", label: "t1_bucket_cas" },
      ],
      items: [
        { text: "t1_item_f1", bucketId: "for" },
        { text: "t1_item_c1", bucketId: "cas" },
        { text: "t1_item_f2", bucketId: "for" },
        { text: "t1_item_c2", bucketId: "cas" },
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7"],
      correctIndices: [4, 5], // "totally awesome"
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
      hint1: "t4_b2",
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
      tapCount: { emoji: "🎓", count: 5 }, 
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

const AcademicK7Explorer = memo(function AcademicK7Explorer({
  color = "#0F766E", // Teal-700 (Okos, egyetemi szín)
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
      explorerId="english_k7_academic_arena" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default AcademicK7Explorer;
