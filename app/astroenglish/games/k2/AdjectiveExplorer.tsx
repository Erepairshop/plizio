"use client";
// AdjectiveExplorer.tsx — AstroEnglish Grade 2: i3 Adjective Asteroid
// Topics: 1) Adjectives (Describing words) 2) Pronouns (He/She/It/They) 3) Adverbs (How actions happen) 4) Sentence Building 5) Asteroid Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Boring Noun vs Described Noun */}
      <g transform="translate(60, 60)">
        <circle cx="0" cy="0" r="25" fill="#64748B" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#94A3B8">asteroid</text>
      </g>
      <path d="M 95,60 L 135,60" fill="none" stroke="#F472B6" strokeWidth="3" markerEnd="url(#arrow)" />
      <g transform="translate(170, 60)">
        <path d="M 0,-25 Q 10,-30 20,-15 Q 30,0 20,15 Q 5,30 -15,20 Q -30,5 -20,-15 Z" fill="#10B981" />
        <circle cx="-5" cy="-5" r="4" fill="#047857" opacity="0.5" />
        <circle cx="10" cy="5" r="6" fill="#047857" opacity="0.5" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#34D399">huge, green</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#1E1B4B" rx="20" />
      {/* Pronouns replacing Nouns */}
      <g transform="translate(60, 50)">
        <rect x="-15" y="-15" width="30" height="30" fill="#3B82F6" rx="5" />
        <circle cx="0" cy="-25" r="10" fill="#93C5FD" />
        <text x="0" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#60A5FA">The boy</text>
      </g>
      <text x="120" y="45" textAnchor="middle" fontSize="24" fill="#A78BFA">➜</text>
      <g transform="translate(180, 50)">
        <text x="0" y="10" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#F472B6">HE</text>
        <text x="0" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#F9A8D4">Pronoun</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Adverbs: Slowly vs Quickly */}
      <g transform="translate(40, 40)">
        <polygon points="0,-8 15,0 0,8" fill="#FBBF24" />
        <path d="M -30,0 L -10,0" fill="none" stroke="#D1FAE5" strokeWidth="2" strokeDasharray="2,2" />
        <text x="40" y="4" fontSize="12" fontWeight="bold" fill="#6EE7B7">slowly</text>
      </g>
      <g transform="translate(40, 100)">
        <polygon points="0,-8 15,0 0,8" fill="#EF4444" />
        <path d="M -80,0 L -10,0" fill="none" stroke="#FCA5A5" strokeWidth="3" />
        <text x="40" y="4" fontSize="12" fontWeight="bold" fill="#FCA5A5">quickly!</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#450A0A" rx="20" />
      {/* Sentence Building Word Order */}
      <g transform="translate(120, 70)">
        <rect x="-100" y="-15" width="40" height="30" fill="#94A3B8" rx="5" />
        <rect x="-50" y="-15" width="50" height="30" fill="#10B981" rx="5" />
        <rect x="10" y="-15" width="45" height="30" fill="#3B82F6" rx="5" />
        <rect x="65" y="-15" width="40" height="30" fill="#F59E0B" rx="5" />
        
        <text x="-80" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#0F172A">The</text>
        <text x="-25" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#022C22">green</text>
        <text x="32" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#EFF6FF">alien</text>
        <text x="85" y="4" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#78350F">waved.</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#292524" rx="20" />
      {/* Asteroid field */}
      <circle cx="40" cy="40" r="20" fill="#57534E" opacity="0.6" />
      <circle cx="200" cy="100" r="30" fill="#78716C" opacity="0.5" />
      <circle cx="150" cy="30" r="15" fill="#44403C" opacity="0.8" />
      <text x="120" y="125" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#D6D3D1">Tap the asteroids!</text>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Adjective Asteroid",
    
    // T1: Adjectives
    t1_title: "Paint the Galaxy (Adjectives)",
    t1_text: "Adjectives are describing words. They tell us how a noun looks, feels, sounds, or tastes!",
    t1_b1: "Colors (red, blue) and sizes (huge, tiny) are adjectives.",
    t1_b2: "Without adjectives, sentences are boring.",
    t1_b3: "Adjectives make the galaxy colorful!",
    t1_inst: "Is the word a Noun (Thing) or an Adjective (Describing word)?",
    t1_bucket_noun: "Noun",
    t1_bucket_adj: "Adjective",
    t1_item_n1: "asteroid", t1_item_n2: "star",
    t1_item_a1: "huge", t1_item_a2: "green",
    t1_q: "Which word describes the SIZE of the rocket?",
    t1_q_a: "gigantic", t1_q_b: "ship", t1_q_c: "fly", t1_q_d: "space",

    // T2: Pronouns
    t2_title: "Shortcut Words (Pronouns)",
    t2_text: "Pronouns take the place of nouns so we don't have to say the same name over and over again.",
    t2_b1: "'He' is for a boy, 'She' is for a girl.",
    t2_b2: "'It' is for a thing or an animal.",
    t2_b3: "'They' is for more than one person or thing.",
    t2_inst: "Match the Noun to the correct Pronoun shortcut!",
    t2_l1: "The astronaut (boy)", t2_r1: "He",
    t2_l2: "The spaceship", t2_r2: "It",
    t2_l3: "The aliens (many)", t2_r3: "They",
    t2_q: "What pronoun can replace 'Anna' in a sentence?",
    t2_q_a: "She", t2_q_b: "He", t2_q_c: "It", t2_q_d: "They",

    // T3: Adverbs
    t3_title: "How does it happen? (Adverbs)",
    t3_text: "Adverbs tell us HOW an action (verb) happens. They often end in '-ly'.",
    t3_b1: "The rocket flew... quickly!",
    t3_b2: "The rover moved... slowly.",
    t3_b3: "'Quickly' and 'slowly' are adverbs.",
    t3_inst: "Find and highlight the adverb (how it happened) in the sentence!",
    t3_tok0: "The", t3_tok1: "rover", t3_tok2: "moved", t3_tok3: "slowly", t3_tok4: "over", t3_tok5: "the", t3_tok6: "rocks.",
    t3_q: "Which word is an adverb?",
    t3_q_a: "loudly", t3_q_b: "loud", t3_q_c: "sound", t3_q_d: "hear",

    // T4: Sentence Building
    t4_title: "Building Great Sentences",
    t4_text: "Let's put everything together! We need an article (The), an adjective, a noun, and a verb.",
    t4_b1: "Start with a capital letter.",
    t4_b2: "The describing word (adjective) comes before the noun.",
    t4_b3: "Finish with a period.",
    t4_inst: "Drag the blocks to build the perfect descriptive sentence!",
    t4_w1: "The", t4_w2: "green", t4_w3: "alien", t4_w4: "waved.",
    t4_q: "Which sentence order is correct?",
    t4_q_a: "The red rocket flew.", t4_q_b: "The rocket red flew.", t4_q_c: "Flew the red rocket.", t4_q_d: "Red the rocket flew.",

    // T5: Fun Catch
    t5_title: "Asteroid Field",
    t5_text: "You navigated the Adjective Asteroid perfectly! Now let's clear the path.",
    t5_b1: "'Asteroid' is a noun.",
    t5_b2: "'Heavy' is an adjective.",
    t5_b3: "Tap the heavy asteroids!",
    t5_inst: "Tap the 4 asteroids (🪨) blocking the ship!",
    t5_q: "Which word is a pronoun?",
    t5_q_a: "They", t5_q_b: "Asteroid", t5_q_c: "Quickly", t5_q_d: "Blue",
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
        { id: "noun", label: "t1_bucket_noun" },
        { id: "adj", label: "t1_bucket_adj" },
      ],
      items: [
        { text: "t1_item_n1", bucketId: "noun" },
        { text: "t1_item_a1", bucketId: "adj" },
        { text: "t1_item_n2", bucketId: "noun" },
        { text: "t1_item_a2", bucketId: "adj" },
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
      type: "match-pairs",
      pairs: [
        { left: "t2_l1", right: "t2_r1" }, // boy - He
        { left: "t2_l2", right: "t2_r2" }, // spaceship - It
        { left: "t2_l3", right: "t2_r3" }, // aliens - They
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6"],
      correctIndices: [3], // "slowly"
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
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"],
      correctOrder: [0, 1, 2, 3], // The green alien waved.
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
      tapCount: { emoji: "🪨", count: 4 }, // Asteroids
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

const AdjectiveExplorer = memo(function AdjectiveExplorer({
  color = "#10B981", // Emerald-500 for the colorful adjectives
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
      explorerId="english_k2_adjective_asteroid" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default AdjectiveExplorer;
