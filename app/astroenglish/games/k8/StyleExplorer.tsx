"use client";
// StyleExplorer.tsx — AstroEnglish Grade 8: i6 Style Studio
// Topics: 1) Allusion & Satire 2) The Three Ironies 3) Spot the Allusion 4) Theme vs Topic 5) Palette Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#7F1D1D" rx="20" />
      {/* Abstract Art Canvas */}
      <g transform="translate(120, 70)">
        <rect x="-40" y="-30" width="80" height="60" fill="#FEF2F2" stroke="#B91C1C" strokeWidth="4" />
        <circle cx="-10" cy="-10" r="15" fill="#3B82F6" opacity="0.8" />
        <polygon points="10,0 30,20 0,20" fill="#F59E0B" opacity="0.8" />
        <path d="M -30,10 Q 0,30 20,-20" fill="none" stroke="#10B981" strokeWidth="4" strokeLinecap="round" />
        <text x="0" y="45" textAnchor="middle" fontSize="10" fill="#FECACA">Literary Devices</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E3A8A" rx="20" />
      {/* Theme (Lightbulb) vs Topic (Book) */}
      <g transform="translate(70, 70)">
        <rect x="-20" y="-15" width="40" height="30" fill="#3B82F6" rx="2" />
        <path d="M 0,-15 L 0,15" stroke="#1E3A8A" strokeWidth="2" />
        <text x="0" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#93C5FD">TOPIC (1 word)</text>
      </g>
      <g transform="translate(170, 70)">
        <circle cx="0" cy="-10" r="15" fill="#FBBF24" />
        <rect x="-5" y="5" width="10" height="10" fill="#D97706" />
        <path d="M -20,-20 L -10,-15 M 20,-20 L 10,-15 M 0,-35 L 0,-25" stroke="#FDE047" strokeWidth="2" strokeLinecap="round" />
        <text x="0" y="30" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FDE68A">THEME (Message)</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Paint Palette */}
      <g transform="translate(120, 70)">
        <ellipse cx="0" cy="0" rx="40" ry="30" fill="#FDE047" />
        <circle cx="-20" cy="5" r="5" fill="#064E3B" /> {/* Thumb hole */}
        <circle cx="15" cy="-15" r="6" fill="#EF4444" />
        <circle cx="25" cy="0" r="6" fill="#3B82F6" />
        <circle cx="10" cy="15" r="6" fill="#10B981" />
        <circle cx="-5" cy="-15" r="6" fill="#8B5CF6" />
        <text x="0" y="50" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#A7F3D0">Tap the Palettes!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Style Studio",
    
    // T1: Allusion & Satire (DROP GAME)
    t1_title: "Allusion & Satire",
    t1_text: "An ALLUSION is a quick reference to a famous person, place, or story (e.g., 'He has a Midas touch'). SATIRE uses humor, irony, or exaggeration to make fun of society's flaws.",
    t1_b1: "Allusion: Drops a famous name or event.",
    t1_b2: "Satire: Mocks people or politics to show their stupidity.",
    t1_b3: "Both are powerful tools in a writer's studio.",
    t1_inst: "Sort the examples into the Allusion or Satire buckets!",
    t1_bucket_all: "Allusion (Reference)",
    t1_bucket_sat: "Satire (Mockery)",
    t1_item_a1: "She was a real Cinderella.", t1_item_a2: "My own personal Kryptonite.",
    t1_item_s1: "A show mocking politicians.", t1_item_s2: "A comic making fun of greed.",
    t1_q: "What literary device is used when an author references a famous myth or historical event?",
    t1_q_a: "Allusion", t1_q_b: "Satire", t1_q_c: "Irony", t1_q_d: "Personification",

    // T2: The Three Ironies (MAGNET MATCH)
    t2_title: "The Irony Trio",
    t2_text: "Irony is when things are the opposite of what is expected. VERBAL Irony: Saying the opposite of what you mean (sarcasm). SITUATIONAL Irony: The opposite of what you expect happens. DRAMATIC Irony: The reader knows a secret the characters don't.",
    t2_b1: "Verbal: 'Oh, great!' (when you drop your phone).",
    t2_b2: "Situational: A fire station burns down.",
    t2_b3: "Dramatic: We know the killer is hiding in the closet.",
    t2_inst: "Magnet Match: Connect the type of irony to its definition!",
    t2_l1: "Verbal Irony", t2_r1: "Saying the opposite of what you mean",
    t2_l2: "Situational Irony", t2_r2: "The outcome is the opposite of what was expected",
    t2_l3: "Dramatic Irony", t2_r3: "The audience knows something the character doesn't",
    t2_q: "A fire chief's house burning down while he is at work is an example of:",
    t2_q_a: "Situational Irony", t2_q_b: "Verbal Irony", t2_q_c: "Dramatic Irony", t2_q_d: "Allusion",

    // T3: Spot the Allusion (HIGHLIGHT)
    t3_title: "Radar Scan: Spot the Allusion",
    t3_text: "Authors use allusions so they don't have to explain everything. If they call someone 'Sherlock Holmes', you immediately know that person is a good detective.",
    t3_b1: "Read the sentence.",
    t3_b2: "Look for the famous name or character being referenced.",
    t3_b3: "Highlight the name!",
    t3_inst: "Highlight the ALLUSION (the famous reference) in this sentence!",
    t3_tok0: "When", t3_tok1: "it", t3_tok2: "came", t3_tok3: "to", t3_tok4: "finding", t3_tok5: "lost", t3_tok6: "keys,", t3_tok7: "he", t3_tok8: "was", t3_tok9: "a", t3_tok10: "real", t3_tok11: "Sherlock", t3_tok12: "Holmes.",
    t3_q: "What literary device is used in this quote: 'He is a real Sherlock Holmes when it comes to solving puzzles'?",
    t3_q_a: "Allusion", t3_q_b: "Situational Irony", t3_q_c: "Satire", t3_q_d: "Theme",

    // T4: Theme vs Topic (SLINGSHOT)
    t4_title: "Theme vs. Topic",
    t4_text: "A TOPIC is what the story is about (Explicit, 1-2 words like 'Love' or 'War'). A THEME is the underlying message or lesson the author wants you to learn (Implicit, a full sentence like 'Love conquers all').",
    t4_b1: "Topic = Subject (e.g., Friendship).",
    t4_b2: "Theme = Message (e.g., True friendship requires sacrifice).",
    t4_b3: "A theme is always a complete thought!",
    t4_inst: "Shoot the asteroid that contains a THEME (an underlying message), NOT just a topic!",
    t4_target_1: "True friendship requires sacrifice.", // Correct
    t4_target_2: "Friendship and loyalty.",
    t4_target_3: "Two friends going on a trip.",
    t4_q: "Which of the following is a THEME (not just a topic)?",
    t4_q_a: "True friendship requires sacrifice.", t4_q_b: "Friendship.", t4_q_c: "The story of two friends.", t4_q_d: "Sacrifice in war.",

    // T5: Fun Catch
    t5_title: "Master Artist",
    t5_text: "You've painted a masterpiece in the Style Studio! You can now identify allusions, the three types of irony, satire, and the deep themes hidden in literature.",
    t5_b1: "Allusion = Famous reference.",
    t5_b2: "Theme = Hidden message.",
    t5_b3: "Catch 6 Palettes!",
    t5_inst: "Tap the 6 paint palettes (🎨) to display your art!",
    t5_q: "What is the difference between a topic and a theme?",
    t5_q_a: "A topic is the subject, a theme is the underlying message.", t5_q_b: "A theme is one word, a topic is a sentence.", t5_q_c: "There is no difference.", t5_q_d: "A topic is a character, a theme is the setting.",
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
        { id: "all", label: "t1_bucket_all" },
        { id: "sat", label: "t1_bucket_sat" },
      ],
      items: [
        { text: "t1_item_a1", bucketId: "all" },
        { text: "t1_item_s1", bucketId: "sat" },
        { text: "t1_item_a2", bucketId: "all" },
        { text: "t1_item_s2", bucketId: "sat" },
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7", "t3_tok8", "t3_tok9", "t3_tok10", "t3_tok11", "t3_tok12"],
      correctIndices: [11, 12], // "Sherlock Holmes."
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
      tapCount: { emoji: "🎨", count: 6 }, 
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
  icon: "🎨",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const StyleExplorer = memo(function StyleExplorer({
  color = "#DC2626", // Red-600 (Művészi, festői piros)
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
      explorerId="english_k8_style_studio" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default StyleExplorer;
