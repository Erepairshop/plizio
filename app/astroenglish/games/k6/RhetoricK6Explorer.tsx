"use client";
// RhetoricK6Explorer.tsx — AstroEnglish Grade 6: i9 Rhetoric Reef
// Topics: 1) Ethos, Pathos, Logos 2) Formal vs Informal 3) Claims & Evidence 4) Logical Fallacies 5) Megaphone Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* The Triangle of Persuasion */}
      <g transform="translate(120, 75)">
        <polygon points="0,-45 45,35 -45,35" fill="none" stroke="#FDE047" strokeWidth="3" />
        <circle cx="0" cy="-45" r="8" fill="#F43F5E" /> {/* Pathos - Heart/Top */}
        <circle cx="45" cy="35" r="8" fill="#3B82F6" />  {/* Logos - Brain/Right */}
        <circle cx="-45" cy="35" r="8" fill="#10B981" /> {/* Ethos - Shield/Left */}
        <text x="0" y="-55" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#F43F5E">PATHOS</text>
        <text x="55" y="50" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#3B82F6">LOGOS</text>
        <text x="-55" y="50" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#10B981">ETHOS</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Rhetorical Waves (Speaker/Mic) */}
      <g transform="translate(120, 70)">
        <rect x="-10" y="-20" width="20" height="40" fill="#94A3B8" rx="10" />
        <path d="M 15,-15 Q 30,0 15,15" fill="none" stroke="#38BDF8" strokeWidth="3" />
        <path d="M 25,-25 Q 45,0 25,25" fill="none" stroke="#38BDF8" strokeWidth="2" opacity="0.6" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BAE6FD">Choose your words!</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4C1D95" rx="20" />
      {/* Megaphones / Communication */}
      <g transform="translate(120, 70)">
        <path d="M -20,0 L 20,-20 L 20,20 L -20,0" fill="#FBBF24" />
        <rect x="-25" y="-5" width="10" height="15" fill="#F59E0B" />
        <circle cx="25" cy="0" r="10" fill="none" stroke="#FDE047" strokeWidth="2" />
        <text x="0" y="55" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">Tap the Megaphones!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Rhetoric Reef",
    
    // T1: Ethos, Pathos, Logos (PHYSICS BUCKET)
    t1_title: "The Pillars of Persuasion",
    t1_text: "To convince an audience, you need three things: ETHOS (trust/authority), PATHOS (feelings/emotion), and LOGOS (facts/logic).",
    t1_b1: "Ethos: 'As a doctor with 20 years of experience...'",
    t1_b2: "Pathos: 'Think of the poor, hungry puppies...'",
    t1_b3: "Logos: 'Data shows that 80% of orbits are safe.'",
    t1_inst: "Catch the arguments and drop them into the correct pillar!",
    t1_bucket_eth: "Ethos (Trust)",
    t1_bucket_pat: "Pathos (Emotion)",
    t1_bucket_log: "Logos (Logic)",
    t1_item_e1: "Trust me, I'm an expert.", t1_item_e2: "The Captain recommends it.",
    t1_item_p1: "Your family will be proud.", t1_item_p2: "Don't let them suffer.",
    t1_item_l1: "9 out of 10 stars agree.", t1_item_l2: "It costs 50% less fuel.",
    t1_q: "Which pillar uses statistics and facts to persuade?",
    t1_q_a: "Logos", t1_q_b: "Ethos", t1_q_c: "Pathos", t1_q_d: "Apostrophe",

    // T2: Formal vs Informal (MAGNET MATCH)
    t2_title: "Tone & Audience",
    t2_text: "Rhetoric is about choosing the right tone for your audience. Formal language is precise and respectful. Informal language is casual and uses slang.",
    t2_b1: "Formal: 'I apologize for the delay.'",
    t2_b2: "Informal: 'Sorry I'm late!'",
    t2_b3: "Match the pairs to see the difference.",
    t2_inst: "Magnet Match: Connect the informal phrase to its formal professional version!",
    t2_l1: "Hey, what's up?", t2_r1: "Greetings, how are you?",
    t2_l2: "This is cool.", t2_r2: "This is remarkable.",
    t2_l3: "Thanks a lot!", t2_r3: "I appreciate your help.",
    t2_q: "When would you use a FORMAL tone?",
    t2_q_a: "In a letter to a Principal.", t2_q_b: "Texting a friend.", t2_q_c: "At a birthday party.", t2_q_d: "Playing video games.",

    // T3: Claims & Evidence (HIGHLIGHT)
    t3_title: "Claims & Evidence",
    t3_text: "A 'Claim' is your main argument. 'Evidence' is the proof that supports your claim. Without evidence, a claim is just an opinion!",
    t3_b1: "Claim: Space travel is important.",
    t3_b2: "Evidence: It leads to new technology like GPS.",
    t3_b3: "Always back up your words with facts.",
    t3_inst: "Highlight the sentence that represents the MAIN CLAIM of the paragraph!",
    t3_tok0: "Mars", t3_tok1: "is", t3_tok2: "the", t3_tok3: "best", t3_tok4: "place", t3_tok5: "to", t3_tok6: "live.", t3_tok7: "It", t3_tok8: "has", t3_tok9: "frozen", t3_tok10: "water", t3_tok11: "and", t3_tok12: "rocks.",
    t3_q: "What do you call a statement that tells the reader your position on an issue?",
    t3_q_a: "Claim", t3_q_b: "Evidence", t3_q_c: "Greeting", t3_q_d: "Climax",

    // T4: Logical Fallacies (SLINGSHOT)
    t4_title: "Weak Arguments",
    t4_text: "A logical fallacy is a mistake in reasoning. Some people use them to trick you! For example, the 'Bandwagon' fallacy says you should do something just because everyone else is doing it.",
    t4_b1: "Avoid 'hasty generalizations'.",
    t4_b2: "Don't attack the person, attack the idea.",
    t4_b3: "Shoot the fallacy to clear the air!",
    t4_inst: "Shoot the asteroid that contains a LOGICAL FALLACY (a weak argument)!",
    t4_target_1: "Everyone loves it, so it's good!", // Bandwagon Fallacy
    t4_target_2: "Studies show it is safe.",
    t4_target_3: "I saw the evidence myself.",
    t4_q: "What is a 'Logical Fallacy'?",
    t4_q_a: "A flaw or error in reasoning.", t4_q_b: "A very strong fact.", t4_q_c: "A beautiful poem.", t4_q_d: "A type of punctuation.",

    // T5: Fun Catch
    t5_title: "Great Orator",
    t5_text: "You've mastered the Rhetoric Reef! You can now speak with the authority of a Saturnian Senator.",
    t5_b1: "Ethos, Pathos, Logos.",
    t5_b2: "Mind your tone.",
    t5_b3: "Catch 6 Megaphones!",
    t5_inst: "Tap the 6 golden megaphones (📢) floating in the reef!",
    t5_q: "Which pillar of rhetoric appeals to the audience's emotions?",
    t5_q_a: "Pathos", t5_q_b: "Ethos", t5_q_c: "Logos", t5_q_d: "Chronos",
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
      type: "physics-bucket", // GRAVITÁCIÓS SZÓ-ESÉS
      buckets: [
        { id: "eth", label: "t1_bucket_eth" },
        { id: "pat", label: "t1_bucket_pat" },
        { id: "log", label: "t1_bucket_log" },
      ],
      items: [
        { text: "t1_item_e1", bucketId: "eth" },
        { text: "t1_item_p1", bucketId: "pat" },
        { text: "t1_item_l1", bucketId: "log" },
        { text: "t1_item_e2", bucketId: "eth" },
        { text: "t1_item_p2", bucketId: "pat" },
        { text: "t1_item_l2", bucketId: "log" },
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
      type: "physics-magnet", // MÁGNESES PÁROSÍTÓ
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6"],
      correctIndices: [0, 1, 2, 3, 4, 5, 6], // "Mars is the best place to live."
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
    svg: () => <Topic2Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "physics-slingshot", // ASZTEROIDA CSÚZLI
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
      tapCount: { emoji: "📢", count: 6 }, 
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

const RhetoricK6Explorer = memo(function RhetoricK6Explorer({
  color = "#C026D3", // Fuchsia-600
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
      explorerId="english_k6_rhetoric_reef" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default RhetoricK6Explorer;
