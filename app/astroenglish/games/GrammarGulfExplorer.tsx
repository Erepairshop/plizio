"use client";
// GrammarGulfExplorer.tsx — AstroEnglish Grade 1: i8 Grammar Gulf
// Topics: 1) Sentence or Not? 2) Question Words 3) Ending Marks 4) Building a Question 5) Book Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFEFF" rx="20" />
      {/* Complete Sentence vs Fragment */}
      <g transform="translate(120, 45)">
        <rect x="-80" y="-15" width="160" height="30" fill="#22C55E" rx="5" />
        <text x="0" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">The dog runs fast.</text>
        <circle cx="95" cy="0" r="10" fill="#16A34A" />
        <path d="M 90,0 L 93,5 L 102,-5" fill="none" stroke="white" strokeWidth="2" /> {/* Checkmark */}
      </g>
      <g transform="translate(120, 95)">
        <rect x="-80" y="-15" width="90" height="30" fill="#EF4444" rx="5" />
        <text x="-35" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="white">runs fast</text>
        <circle cx="35" cy="0" r="10" fill="#DC2626" />
        <path d="M 30,-5 L 40,5 M 40,-5 L 30,5" fill="none" stroke="white" strokeWidth="2" /> {/* X mark */}
        {/* Missing part outline */}
        <rect x="-80" y="-15" width="160" height="30" fill="none" stroke="#FCA5A5" strokeWidth="2" strokeDasharray="4 4" rx="5" />
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F0F9FF" rx="20" />
      {/* Question Word Focus */}
      <g transform="translate(120, 70)">
        <rect x="-80" y="-20" width="160" height="40" fill="#BAE6FD" rx="10" />
        <text x="-45" y="6" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0369A1">DO</text>
        <text x="25" y="6" textAnchor="middle" fontSize="16" fill="#0284C7">you like cats?</text>
        {/* Magnifying glass over DO */}
        <circle cx="-45" cy="0" r="20" fill="none" stroke="#0284C7" strokeWidth="4" />
        <line x1="-30" y1="15" x2="-15" y2="30" stroke="#0284C7" strokeWidth="6" strokeLinecap="round" />
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Punctuation Sorting */}
      <g transform="translate(60, 70)">
        <circle cx="0" cy="0" r="25" fill="#38BDF8" />
        <circle cx="0" cy="0" r="4" fill="#0C4A6E" />
      </g>
      <g transform="translate(120, 70)">
        <circle cx="0" cy="0" r="25" fill="#F472B6" />
        <path d="M -5,-10 C -5,-20 5,-20 5,-10 C 5,0 0,0 0,5" fill="none" stroke="#831843" strokeWidth="4" strokeLinecap="round" />
        <circle cx="0" cy="15" r="3" fill="#831843" />
      </g>
      <g transform="translate(180, 70)">
        <circle cx="0" cy="0" r="25" fill="#FBBF24" />
        <line x1="0" y1="-15" x2="0" y2="5" stroke="#78350F" strokeWidth="4" strokeLinecap="round" />
        <circle cx="0" cy="15" r="3" fill="#78350F" />
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      {/* Building a Question */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="45" height="30" fill="#FDE047" rx="4" />
        <text x="-67" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#A16207">Where</text>
        
        <rect x="-40" y="-15" width="25" height="30" fill="#FCD34D" rx="4" />
        <text x="-27" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#A16207">is</text>
        
        <rect x="-10" y="-15" width="30" height="30" fill="#FBBF24" rx="4" />
        <text x="5" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#A16207">my</text>

        <rect x="25" y="-15" width="50" height="30" fill="#F59E0B" rx="4" />
        <text x="50" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#78350F">book?</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#CFFAFE" rx="20" />
      {/* The Gulf Waters */}
      <path d="M 0,80 Q 40,60 80,80 T 160,80 T 240,80 L 240,140 L 0,140 Z" fill="#38BDF8" opacity="0.5" />
      <path d="M 0,100 Q 60,80 120,100 T 240,100 L 240,140 L 0,140 Z" fill="#0284C7" opacity="0.6" />
      {/* A geometric book floating */}
      <g transform="translate(120, 110) rotate(-10)">
        <rect x="-20" y="-10" width="20" height="15" fill="#FFFFFF" stroke="#0C4A6E" strokeWidth="2" />
        <rect x="0" y="-10" width="20" height="15" fill="#FFFFFF" stroke="#0C4A6E" strokeWidth="2" />
        <path d="M -20,-10 C -10,-15 0,-10 0,-10 C 10,-15 20,-10 20,-10" fill="none" stroke="#0C4A6E" strokeWidth="2" />
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Grammar Gulf",
    
    // T1: Sentence or Not?
    t1_title: "Sentence or Not?",
    t1_text: "A complete sentence tells a whole idea. It tells us WHO did something, and WHAT they did. If a part is missing, it is NOT a sentence!",
    t1_b1: "'The dog runs' is a complete sentence.",
    t1_b2: "'big dog' is NOT a sentence (what is it doing?).",
    t1_b3: "'runs fast' is NOT a sentence (who runs?).",
    t1_inst: "Sort these into Complete Sentences or Not a Sentence!",
    t1_bucket_yes: "Sentence",
    t1_bucket_no: "Not a Sentence",
    t1_item_y1: "I see a cat.", t1_item_y2: "The boy jumps.",
    t1_item_n1: "blue bird", t1_item_n2: "is running",
    t1_q: "What does a complete sentence need to have?",
    t1_q_a: "A whole idea (Who and What)", t1_q_b: "Only one word", t1_q_c: "A number in it", t1_q_d: "No spaces",

    // T2: Question Words
    t2_title: "Question Detectives",
    t2_text: "Some words are special! When you put them at the start, they turn your sentence into a question. Words like Who, What, Where, and Do.",
    t2_b1: "'Do you like apples?' is an asking sentence.",
    t2_b2: "The word 'Do' tells us a question is coming.",
    t2_b3: "Questions always end with a question mark (?).",
    t2_inst: "Find and mark the question word in this sentence!",
    t2_tok0: "Do", t2_tok1: "you", t2_tok2: "like", t2_tok3: "dogs?",
    t2_q: "Which of these words is often used to start a question?",
    t2_q_a: "Where", t2_q_b: "Apple", t2_q_c: "Jump", t2_q_d: "Blue",

    // T3: Ending Marks Match
    t3_title: "Pick the Right Mark",
    t3_text: "We need to put the right mark at the end of our sentences. A period (.) tells. A question mark (?) asks. An exclamation mark (!) yells!",
    t3_b1: "'I have a dog' gets a period (.).",
    t3_b2: "'Where is the cat' gets a question mark (?).",
    t3_b3: "'Look out' gets an exclamation mark (!).",
    t3_inst: "Match the sentence to the correct ending mark!",
    t3_l1: "I like milk", t3_r1: "Period (.)",
    t3_l2: "How old are you", t3_r2: "Question Mark (?)",
    t3_l3: "Watch out", t3_r3: "Exclamation Mark (!)",
    t3_q: "What ending mark do you use for 'Where is my hat'?",
    t3_q_a: "?", t3_q_b: ".", t3_q_c: "!", t3_q_d: ",",

    // T4: Building a Question
    t4_title: "Build a Question",
    t4_text: "Let's build a question! Remember to start with a capital letter (and a question word) and end with a question mark.",
    t4_b1: "Read the words first.",
    t4_b2: "Find the capital letter to start.",
    t4_b3: "Find the question mark to end.",
    t4_inst: "Put the words in order to ask a question!",
    t4_w1: "Where", t4_w2: "is", t4_w3: "my", t4_w4: "book?",
    t4_q: "Which mark belongs at the end of an asking sentence?",
    t4_q_a: "?", t4_q_b: ".", t4_q_c: "!", t4_q_d: ",",

    // T5: Book Catch
    t5_title: "Gulf of Grammar",
    t5_text: "Oh no! Some grammar books fell into the Gulf. We need them to learn how to write perfect sentences.",
    t5_b1: "Grammar tells us the rules of language.",
    t5_b2: "Reading books makes you a great writer.",
    t5_b3: "Let's save them from the water!",
    t5_inst: "Tap the 5 floating books (📖) to rescue them!",
    t5_q: "What does reading books help you with?",
    t5_q_a: "Learning words and grammar", t5_q_b: "Learning to swim", t5_q_c: "Running faster", t5_q_d: "Sleeping better",
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
        { id: "yes", label: "t1_bucket_yes" },
        { id: "no", label: "t1_bucket_no" },
      ],
      items: [
        { text: "t1_item_y1", bucketId: "yes" },
        { text: "t1_item_n1", bucketId: "no" },
        { text: "t1_item_y2", bucketId: "yes" },
        { text: "t1_item_n2", bucketId: "no" },
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
      type: "highlight-text",
      tokens: ["t2_tok0", "t2_tok1", "t2_tok2", "t2_tok3"],
      correctIndices: [0], // "Do"
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
        { left: "t3_l1", right: "t3_r1" }, // I like milk -> Period
        { left: "t3_l2", right: "t3_r2" }, // How old are you -> Question Mark
        { left: "t3_l3", right: "t3_r3" }, // Watch out -> Exclamation Mark
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
      correctOrder: [0, 1, 2, 3], // "Where" "is" "my" "book?"
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
      tapCount: { emoji: "📖", count: 5 }, // Books
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
  icon: "📖",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const GrammarGulfExplorer = memo(function GrammarGulfExplorer({
  color = "#0891B2", // Cyan-600 for the deep Gulf water
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
      explorerId="english_k1_grammar_gulf" 
      color={color} 
      lang="en" // Forcing English ELA
      onDone={onDone} 
    />
  );
});

export default GrammarGulfExplorer;
