"use client";
// ActionCoveExplorer.tsx — AstroEnglish Grade 1: i5 Action Cove
// Topics: 1) What is a Verb? 2) Spot the Verb 3) 'A' vs 'An' 4) The Article 'The' 5) Action Hunt

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFF7ED" rx="20" />
      {/* Running Stick Figure for "Action" */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="-20" r="10" fill="#F97316" />
        <line x1="0" y1="-10" x2="0" y2="15" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
        {/* Arms */}
        <line x1="0" y1="-5" x2="-15" y2="-15" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
        <line x1="0" y1="-5" x2="15" y2="5" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
        {/* Legs */}
        <line x1="0" y1="15" x2="-10" y2="30" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
        <line x1="-10" y1="30" x2="-20" y2="25" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
        <line x1="0" y1="15" x2="15" y2="25" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
        <line x1="15" y1="25" x2="15" y2="35" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
        {/* Motion lines */}
        <path d="M -30,0 L -45,0 M -25,15 L -40,15" stroke="#FDBA74" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0FDF4" rx="20" />
      {/* Jumping Frog (Action) */}
      <g transform="translate(120, 90)">
        {/* Jump Path */}
        <path d="M -60,10 Q 0,-50 60,10" fill="none" stroke="#86EFAC" strokeWidth="3" strokeDasharray="5 5" />
        {/* Frog */}
        <g transform="translate(0, -20) rotate(15)">
          <ellipse cx="0" cy="0" rx="15" ry="10" fill="#22C55E" />
          <circle cx="-8" cy="-8" r="4" fill="#16A34A" />
          <circle cx="8" cy="-8" r="4" fill="#16A34A" />
          <path d="M -10,5 Q -20,15 -15,20" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
          <path d="M 10,5 Q 20,15 15,20" fill="none" stroke="#22C55E" strokeWidth="3" strokeLinecap="round" />
        </g>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EFF6FF" rx="20" />
      {/* A vs An */}
      <g transform="translate(60, 70)">
        <text x="0" y="-15" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#1E40AF">A</text>
        <rect x="-20" y="5" width="40" height="20" fill="#60A5FA" rx="4" />
        <text x="0" y="20" textAnchor="middle" fontSize="12" fill="#FFFFFF">CAT</text>
      </g>
      <g transform="translate(180, 70)">
        <text x="0" y="-15" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#B91C1C">AN</text>
        <rect x="-25" y="5" width="50" height="20" fill="#F87171" rx="4" />
        <text x="0" y="20" textAnchor="middle" fontSize="12" fill="#FFFFFF">APPLE</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FEFCE8" rx="20" />
      {/* The Sun */}
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="25" fill="#FBBF24" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
          <line key={deg} x1="0" y1="-30" x2="0" y2="-45" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" transform={`rotate(${deg})`} />
        ))}
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#BAE6FD" rx="20" />
      {/* The Cove / Beach */}
      <path d="M 0,80 Q 60,60 120,90 T 240,70 L 240,140 L 0,140 Z" fill="#FDE047" />
      <path d="M 0,100 Q 80,80 160,110 T 240,90 L 240,140 L 0,140 Z" fill="#FCD34D" />
      {/* Runners (🏃) will be placed here via tap-count */}
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Action Cove",
    
    // T1: What is a Verb?
    t1_title: "Action Words (Verbs)",
    t1_text: "A verb is an action word. It tells us what someone or something is DOING!",
    t1_b1: "Words like 'run', 'jump', and 'swim' are verbs.",
    t1_b2: "If you can DO it, it is a verb.",
    t1_b3: "Remember, nouns are things, verbs are actions.",
    t1_inst: "Sort the words into Nouns and Verbs!",
    t1_bucket_noun: "Noun (Thing)",
    t1_bucket_verb: "Verb (Action)",
    t1_item_n1: "Apple", t1_item_n2: "Dog",
    t1_item_v1: "Jump", t1_item_v2: "Run",
    t1_q: "Which of these words is a VERB (an action)?",
    t1_q_a: "Swim", t1_q_b: "Cat", t1_q_c: "Table", t1_q_d: "Sun",

    // T2: Spot the Verb
    t2_title: "Spot the Verb",
    t2_text: "Every complete sentence needs a verb. The verb brings the sentence to life by showing action!",
    t2_b1: "In 'The dog barks', 'barks' is the action.",
    t2_b2: "Look for the word that shows movement.",
    t2_b3: "Find the action word in the sentence below.",
    t2_inst: "Find and mark the VERB in this sentence!",
    t2_tok0: "The", t2_tok1: "green", t2_tok2: "frog", t2_tok3: "jumps", t2_tok4: "high.",
    t2_q: "In the sentence 'The bird flies', what is the verb?",
    t2_q_a: "flies", t2_q_b: "The", t2_q_c: "bird", t2_q_d: "None of them",

    // T3: A vs An
    t3_title: "'A' vs 'An'",
    t3_text: "We use the words 'a' and 'an' when we talk about ONE thing. But there is a special rule!",
    t3_b1: "Use 'a' before words starting with a consonant (a cat).",
    t3_b2: "Use 'an' before words starting with a vowel (an apple).",
    t3_b3: "Vowels are a, e, i, o, u.",
    t3_inst: "Match the correct article to the word!",
    t3_l1: "a", t3_r1: "dog",
    t3_l2: "an", t3_r2: "elephant",
    t3_l3: "an", t3_r3: "orange",
    t3_q: "Which one is correct?",
    t3_q_a: "an apple", t3_q_b: "a apple", t3_q_c: "an cat", t3_q_d: "a elephant",

    // T4: The Article 'The'
    t4_title: "The Word 'The'",
    t4_text: "We use 'the' when we are talking about a specific thing, or something there is only ONE of (like the sun).",
    t4_b1: "'The' is a very common sight word.",
    t4_b2: "You can use 'the' with consonants and vowels.",
    t4_b3: "Let's build a sentence using 'The'!",
    t4_inst: "Put the words in order to make a sentence!",
    t4_w1: "The", t4_w2: "sun", t4_w3: "is", t4_w4: "hot.",
    t4_q: "When do we use the word 'the'?",
    t4_q_a: "When talking about a specific thing", t4_q_b: "Only before vowels", t4_q_c: "Only before consonants", t4_q_d: "Only with action words",

    // T5: Action Hunt
    t5_title: "Action Cove Race",
    t5_text: "Welcome to Action Cove! People come here to run, jump, and play. Let's catch the runners!",
    t5_b1: "Running is a great action word (verb).",
    t5_b2: "Look around the sandy beach.",
    t5_b3: "Tap them as fast as you can!",
    t5_inst: "Tap the 5 runners (🏃) moving around the cove!",
    t5_q: "What part of speech is the word 'run'?",
    t5_q_a: "Verb", t5_q_b: "Noun", t5_q_c: "Adjective", t5_q_d: "Vowel",
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
        { id: "verb", label: "t1_bucket_verb" },
      ],
      items: [
        { text: "t1_item_n1", bucketId: "noun" },
        { text: "t1_item_v1", bucketId: "verb" },
        { text: "t1_item_n2", bucketId: "noun" },
        { text: "t1_item_v2", bucketId: "verb" },
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
      type: "highlight-text",
      tokens: ["t2_tok0", "t2_tok1", "t2_tok2", "t2_tok3", "t2_tok4"],
      correctIndices: [3], // jumps
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
      type: "match-pairs",
      pairs: [
        { left: "t3_l1", right: "t3_r1" }, // a -> dog
        { left: "t3_l2", right: "t3_r2" }, // an -> elephant
        { left: "t3_l3", right: "t3_r3" }, // an -> orange
      ],
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
      correctOrder: [0, 1, 2, 3],
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
      tapCount: { emoji: "🏃", count: 5 }, // Runners for action
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
  icon: "🏃",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const ActionCoveExplorer = memo(function ActionCoveExplorer({
  color = "#F97316", // Orange-500 for Action
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
      explorerId="english_k1_action_cove" 
      color={color} 
      lang="en" // Forcing English
      onDone={onDone} 
    />
  );
});

export default ActionCoveExplorer;
