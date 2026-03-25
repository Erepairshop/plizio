"use client";
// WordWorldExplorer.tsx — AstroEnglish Grade 1: i4 Word World
// Topics: 1) What are Sight Words? 2) Spot the Sight Word 3) What is a Noun? 4) Nouns in Sentences 5) Catch the Nouns!

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#EEF2FF" rx="20" />
      {/* Eye for "Sight" Words */}
      <g transform="translate(120, 70)">
        <path d="M -40,0 Q 0,-30 40,0 Q 0,30 -40,0 Z" fill="#FFFFFF" stroke="#4F46E5" strokeWidth="4" />
        <circle cx="0" cy="0" r="12" fill="#4338CA" />
        <circle cx="3" cy="-3" r="4" fill="#FFFFFF" />
        {/* Flashcards */}
        <rect x="-70" y="15" width="40" height="25" fill="#FEF08A" rx="3" transform="rotate(-15 -70 15)" />
        <text x="-55" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#854D0E" transform="rotate(-15 -55 30)">THE</text>
        
        <rect x="30" y="15" width="40" height="25" fill="#FEF08A" rx="3" transform="rotate(15 30 15)" />
        <text x="45" y="30" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#854D0E" transform="rotate(15 45 30)">SAID</text>
      </g>
    </svg>
  );
});

const Topic3Svg = memo(function Topic3Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#F8FAFC" rx="20" />
      {/* Person, Place, Thing */}
      {/* Person (Stick figure) */}
      <g transform="translate(60, 80)">
        <circle cx="0" cy="-20" r="10" fill="#F472B6" />
        <line x1="0" y1="-10" x2="0" y2="15" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />
        <line x1="-15" y1="0" x2="15" y2="0" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />
        <line x1="0" y1="15" x2="-10" y2="30" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />
        <line x1="0" y1="15" x2="10" y2="30" stroke="#F472B6" strokeWidth="4" strokeLinecap="round" />
        <text x="0" y="-35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#BE185D">Person</text>
      </g>
      {/* Place (House) */}
      <g transform="translate(120, 80)">
        <rect x="-15" y="-5" width="30" height="25" fill="#3B82F6" />
        <polygon points="-20,-5 0,-25 20,-5" fill="#1E3A8A" />
        <rect x="-5" y="5" width="10" height="15" fill="#93C5FD" />
        <text x="0" y="-35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1D4ED8">Place</text>
      </g>
      {/* Thing (Ball) */}
      <g transform="translate(180, 80)">
        <circle cx="0" cy="5" r="15" fill="#22C55E" />
        <path d="M -10,0 Q 0,15 10,0" fill="none" stroke="#16A34A" strokeWidth="2" />
        <text x="0" y="-35" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#15803D">Thing</text>
      </g>
    </svg>
  );
});

const Topic4Svg = memo(function Topic4Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#FFFBEB" rx="20" />
      {/* Abstract Sentence Construction */}
      <g transform="translate(120, 70)">
        <rect x="-90" y="-15" width="40" height="30" fill="#FDE047" rx="4" />
        <text x="-70" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#A16207">The</text>
        
        <rect x="-40" y="-15" width="50" height="30" fill="#FCD34D" rx="4" />
        <text x="-15" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#A16207">dog</text>
        
        <rect x="20" y="-15" width="30" height="30" fill="#FBBF24" rx="4" />
        <text x="35" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#A16207">is</text>

        <rect x="60" y="-15" width="40" height="30" fill="#F59E0B" rx="4" />
        <text x="80" y="5" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#78350F">big.</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#ECFCCB" rx="20" />
      {/* Apple Tree Background for the Tap-Count */}
      <g transform="translate(120, 110)">
        <rect x="-10" y="-60" width="20" height="60" fill="#78350F" />
        <circle cx="0" cy="-60" r="40" fill="#22C55E" />
        <circle cx="-25" cy="-50" r="25" fill="#16A34A" />
        <circle cx="25" cy="-50" r="25" fill="#16A34A" />
        <circle cx="0" cy="-90" r="25" fill="#15803D" />
      </g>
      {/* Apples (🍎) will appear as emojis via the tap-count engine */}
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Word World",
    
    // T1: Sight Words
    t1_title: "What are Sight Words?",
    t1_text: "Sight words are special words that pop up all the time! You can't always sound them out. You just have to know them by sight.",
    t1_b1: "Words like 'the', 'said', and 'of' are sight words.",
    t1_b2: "Words like 'cat' and 'pig' can be sounded out.",
    t1_b3: "Memorizing sight words makes you a fast reader!",
    t1_inst: "Sort the words: Is it a Sight Word or a Sound-out Word?",
    t1_bucket_sight: "Sight Word (Memorize)",
    t1_bucket_sound: "Sound-out (Phonics)",
    t1_item_s1: "The", t1_item_s2: "Said",
    t1_item_p1: "Cat", t1_item_p2: "Pig",
    t1_q: "Why do we call them 'Sight Words'?",
    t1_q_a: "Because you must know them by sight", t1_q_b: "Because they wear glasses", t1_q_c: "Because they are invisible", t1_q_d: "Because they are numbers",

    // T2: Spot the Sight Word
    t2_title: "Spot the Sight Word",
    t2_text: "Sight words are hiding in every sentence we read. Let's practice finding them quickly!",
    t2_b1: "Look for 'the'.",
    t2_b2: "Look for 'said'.",
    t2_b3: "Be a word detective!",
    t2_inst: "Find and mark the words 'The' and 'said' in this sentence!",
    t2_tok0: "The", t2_tok1: "little", t2_tok2: "pig", t2_tok3: "said", t2_tok4: "oink", t2_tok5: "loudly.",
    t2_q: "Which of these is a very common Sight Word?",
    t2_q_a: "The", t2_q_b: "Elephant", t2_q_c: "Helicopter", t2_q_d: "Xylophone",

    // T3: What is a Noun?
    t3_title: "What is a Noun?",
    t3_text: "A noun is a naming word. It names a PERSON (like a girl), a PLACE (like a school), or a THING (like an apple)!",
    t3_b1: "Person: Boy, Teacher, Mom.",
    t3_b2: "Place: Park, Store, City.",
    t3_b3: "Thing: Book, Dog, Apple.",
    t3_inst: "Match the noun to its type!",
    t3_l1: "Teacher", t3_r1: "Person",
    t3_l2: "School", t3_r2: "Place",
    t3_l3: "Apple", t3_r3: "Thing",
    t3_q: "Which word is a noun that names a PLACE?",
    t3_q_a: "Park", t3_q_b: "Run", t3_q_c: "Happy", t3_q_d: "Jump",

    // T4: Nouns in Sentences
    t4_title: "Nouns in Action",
    t4_text: "Every complete sentence has a noun. It tells us WHO or WHAT the sentence is about.",
    t4_b1: "In 'The dog barks', 'dog' is the noun.",
    t4_b2: "Nouns are the stars of the sentence.",
    t4_b3: "Let's build a sentence with a noun!",
    t4_inst: "Put the words in order to build the sentence!",
    t4_w1: "The", t4_w2: "dog", t4_w3: "is", t4_w4: "big.",
    t4_q: "In the sentence 'The cat is sleeping', what is the noun?",
    t4_q_a: "cat", t4_q_b: "The", t4_q_c: "is", t4_q_d: "sleeping",

    // T5: Catch the Nouns!
    t5_title: "Catch the Things!",
    t5_text: "An apple is a 'thing', which makes it a noun! The apple tree is full of delicious nouns today.",
    t5_b1: "A noun names a person, place, or thing.",
    t5_b2: "Apples are things you can eat.",
    t5_b3: "Time for a harvest!",
    t5_inst: "Find and tap the 5 apples (🍎) to collect the nouns!",
    t5_q: "Is an 'apple' a person, a place, or a thing?",
    t5_q_a: "A thing", t5_q_b: "A person", t5_q_c: "A place", t5_q_d: "An action",
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
        { id: "sight", label: "t1_bucket_sight" },
        { id: "sound", label: "t1_bucket_sound" },
      ],
      items: [
        { text: "t1_item_s1", bucketId: "sight" },
        { text: "t1_item_p1", bucketId: "sound" },
        { text: "t1_item_s2", bucketId: "sight" },
        { text: "t1_item_p2", bucketId: "sound" },
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
    svg: () => <Topic1Svg />, // Reuse Eye graphic
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["t2_tok0", "t2_tok1", "t2_tok2", "t2_tok3", "t2_tok4", "t2_tok5"],
      correctIndices: [0, 3], // The, said
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
        { left: "t3_l1", right: "t3_r1" },
        { left: "t3_l2", right: "t3_r2" },
        { left: "t3_l3", right: "t3_r3" },
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
      tapCount: { emoji: "🍎", count: 5 }, // Apples are noun "things"
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
  icon: "📝",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const WordWorldExplorer = memo(function WordWorldExplorer({
  color = "#6366F1", // Indigo-500 for Word World
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
      explorerId="english_k1_word_world" 
      color={color} 
      lang="en" // Forcing English
      onDone={onDone} 
    />
  );
});

export default WordWorldExplorer;
