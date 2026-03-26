"use client";
// CompoundCapeExplorer.tsx — AstroEnglish Grade 1: i6 Compound Cape
// Topics: 1) Compound Words 2) What is an Adjective? 3) Spot the Adjective 4) Descriptive Sentences 5) Butterfly Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFDF5" rx="20" />
      {/* Compound Word: SUN + FLOWER = SUNFLOWER */}
      <g transform="translate(40, 70)">
        <circle cx="0" cy="0" r="15" fill="#FBBF24" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
          <line key={deg} x1="0" y1="-18" x2="0" y2="-25" stroke="#F59E0B" strokeWidth="3" transform={`rotate(${deg})`} />
        ))}
        <text x="0" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B45309">SUN</text>
      </g>
      <text x="80" y="75" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#10B981">+</text>
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="8" fill="#F97316" />
        {[0, 60, 120, 180, 240, 300].map(deg => (
          <circle key={deg} cx="0" cy="-12" r="6" fill="#F472B6" transform={`rotate(${deg})`} />
        ))}
        <text x="0" y="35" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BE185D">FLOWER</text>
      </g>
      <text x="160" y="75" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#10B981">=</text>
      <g transform="translate(200, 70)">
        <circle cx="0" cy="0" r="10" fill="#F97316" />
        {[0, 60, 120, 180, 240, 300].map(deg => (
          <path key={deg} d="M -5,-10 L 0,-22 L 5,-10 Z" fill="#FBBF24" transform={`rotate(${deg})`} />
        ))}
        <text x="0" y="35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#B45309">SUNFLOWER</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Adjectives describe nouns (Big red apple vs Small green apple) */}
      <g transform="translate(80, 70)">
        <circle cx="0" cy="0" r="25" fill="#EF4444" />
        <path d="M 0,-25 Q 5,-35 15,-30" fill="none" stroke="#16A34A" strokeWidth="3" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#B91C1C">BIG RED</text>
      </g>
      <g transform="translate(160, 70)">
        <circle cx="0" cy="10" r="15" fill="#22C55E" />
        <path d="M 0,-5 Q 3,-12 8,-10" fill="none" stroke="#15803D" strokeWidth="2" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#15803D">SMALL GREEN</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEFCE8" rx="20" />
      {/* A big dog running */}
      <g transform="translate(120, 80)">
        <rect x="-30" y="-15" width="50" height="30" fill="#8B5CF6" rx="10" />
        <circle cx="20" cy="-15" r="15" fill="#8B5CF6" />
        <ellipse cx="30" cy="-15" rx="8" ry="5" fill="#A78BFA" /> {/* Snout */}
        <line x1="-20" y1="15" x2="-25" y2="30" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" />
        <line x1="-10" y1="15" x2="-5" y2="30" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" />
        <line x1="10" y1="15" x2="5" y2="30" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" />
        <line x1="20" y1="15" x2="25" y2="30" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" />
        <path d="M -30,-5 Q -45,-10 -40,5" fill="none" stroke="#8B5CF6" strokeWidth="4" strokeLinecap="round" /> {/* Tail */}
        {/* Action lines */}
        <line x1="-60" y1="0" x2="-45" y2="0" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
        <line x1="-55" y1="10" x2="-40" y2="10" stroke="#CBD5E1" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#E0F2FE" rx="20" />
      {/* A superhero cape blowing in the wind */}
      <g transform="translate(120, 40)">
        <path d="M -20,0 L 20,0 Q 40,50 60,80 L -60,80 Q -40,50 -20,0 Z" fill="#EF4444" />
        <circle cx="0" cy="40" r="15" fill="#FBBF24" />
        <text x="0" y="45" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#B45309">C</text>
      </g>
      {/* Butterflies (🦋) will be generated here by tap-count engine */}
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Compound Cape",
    
    // T1: Compound Words
    t1_title: "Compound Words",
    t1_text: "A compound word is a big word made out of two smaller words joined together!",
    t1_b1: "Sun + Flower = Sunflower.",
    t1_b2: "Rain + Bow = Rainbow.",
    t1_b3: "They make a brand new word with a new meaning.",
    t1_inst: "Match the two small words to make a compound word!",
    t1_l1: "Sun", t1_r1: "flower",
    t1_l2: "Rain", t1_r2: "bow",
    t1_l3: "Butter", t1_r3: "fly",
    t1_q: "What do you get if you join 'pan' and 'cake'?",
    t1_q_a: "Pancake", t1_q_b: "Cupcake", t1_q_c: "Pan", t1_q_d: "Cake",

    // T2: Adjectives
    t2_title: "Describing Words (Adjectives)",
    t2_text: "Adjectives are describing words. They tell us how a noun looks, feels, sounds, or tastes!",
    t2_b1: "Colors (red, blue) are adjectives.",
    t2_b2: "Sizes (big, small) are adjectives.",
    t2_b3: "They make our sentences much more interesting.",
    t2_inst: "Sort the words: Is it a Noun (Thing) or an Adjective (Describing Word)?",
    t2_bucket_adj: "Adjective (Describing)",
    t2_bucket_noun: "Noun (Thing)",
    t2_item_a1: "Big", t2_item_a2: "Red",
    t2_item_n1: "Apple", t2_item_n2: "Dog",
    t2_q: "Which word describes the COLOR of the sky?",
    t2_q_a: "Blue", t2_q_b: "Cloud", t2_q_c: "Bird", t2_q_d: "Fly",

    // T3: Spot the Adjective
    t3_title: "Spot the Adjective",
    t3_text: "Let's be Adjective Detectives! Look for the word that describes the noun in the sentence.",
    t3_b1: "Ask yourself: What does it look like?",
    t3_b2: "The adjective usually comes right before the noun.",
    t3_b3: "Find the word that describes the dog.",
    t3_inst: "Find and mark the describing word (adjective) in the sentence!",
    t3_tok0: "The", t3_tok1: "big", t3_tok2: "dog", t3_tok3: "ran", t3_tok4: "fast.",
    t3_q: "In the sentence 'The yellow sun is hot', which word is a color adjective?",
    t3_q_a: "yellow", t3_q_b: "sun", t3_q_c: "The", t3_q_d: "is",

    // T4: Descriptive Sentences
    t4_title: "Building Better Sentences",
    t4_text: "We can build amazing sentences by mixing nouns, verbs, and adjectives. Let's put them in the right order!",
    t4_b1: "Start with a capital letter.",
    t4_b2: "Put the adjective before the noun (small cat).",
    t4_b3: "End with a period.",
    t4_inst: "Put the words in order to build a descriptive sentence!",
    t4_w1: "The", t4_w2: "small", t4_w3: "cat", t4_w4: "slept.",
    t4_q: "Which word order is correct in English?",
    t4_q_a: "The red apple", t4_q_b: "The apple red", t4_q_c: "Red the apple", t4_q_d: "Apple red the",

    // T5: Butterfly Catch
    t5_title: "Butterfly Garden",
    t5_text: "The word 'Butterfly' is a famous compound word (Butter + Fly). Look at all the beautiful butterflies by the cape!",
    t5_b1: "'Butterfly' is one long word.",
    t5_b2: "Adjectives can describe them: blue, small, pretty.",
    t5_b3: "Catch them quickly!",
    t5_inst: "Tap the 5 butterflies (🦋) flying around the cape!",
    t5_q: "Which two words make up the word 'Butterfly'?",
    t5_q_a: "Butter + Fly", t5_q_b: "But + Fly", t5_q_c: "Bug + Fly", t5_q_d: "Bat + Fly",
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
        { left: "t1_l1", right: "t1_r1" }, // Sun - flower
        { left: "t1_l2", right: "t1_r2" }, // Rain - bow
        { left: "t1_l3", right: "t1_r3" }, // Butter - fly
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
        { id: "adj", label: "t2_bucket_adj" },
        { id: "noun", label: "t2_bucket_noun" },
      ],
      items: [
        { text: "t2_item_a1", bucketId: "adj" },
        { text: "t2_item_n1", bucketId: "noun" },
        { text: "t2_item_a2", bucketId: "adj" },
        { text: "t2_item_n2", bucketId: "noun" },
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4"],
      correctIndices: [1], // "big"
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
    svg: () => <Topic3Svg />,
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "word-order",
      words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"],
      correctOrder: [0, 1, 2, 3], // The small cat slept.
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
      tapCount: { emoji: "🦋", count: 5 }, // Butterflies
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
  icon: "🦸‍♂️",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const CompoundCapeExplorer = memo(function CompoundCapeExplorer({
  color = "#10B981", // Emerald-500 for the heroic cape
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
      grade={1} 
      explorerId="english_k1_compound_cape" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default CompoundCapeExplorer;
