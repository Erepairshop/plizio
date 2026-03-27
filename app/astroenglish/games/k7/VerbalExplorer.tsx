"use client";
// VerbalExplorer.tsx — AstroEnglish Grade 7: i9 Verbal Valley
// Topics: 1) Gerunds vs Verbs 2) Infinitives 3) Participles 4) Verbal Hunt 5) Valley Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Gerund vs Verb Action */}
      <g transform="translate(120, 70)">
        <rect x="-60" y="-20" width="40" height="40" fill="#10B981" rx="8" />
        <text x="-40" y="5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#022C22">-ING</text>
        <text x="-40" y="35" textAnchor="middle" fontSize="10" fill="#6EE7B7">Noun (Gerund)</text>

        <rect x="20" y="-20" width="40" height="40" fill="#3B82F6" rx="8" />
        <text x="40" y="5" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#EFF6FF">-ING</text>
        <text x="40" y="35" textAnchor="middle" fontSize="10" fill="#93C5FD">Action (Verb)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#78350F" rx="20" />
      {/* Infinitive Bridge */}
      <g transform="translate(120, 70)">
        <path d="M -50,20 Q 0,-30 50,20" fill="none" stroke="#FBBF24" strokeWidth="6" />
        <rect x="-20" y="-20" width="40" height="20" fill="#B45309" rx="4" />
        <text x="0" y="-6" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FEF3C7">TO + VERB</text>
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#FDE68A">The Infinitive</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#020617" rx="20" />
      {/* Sunrise over Valley */}
      <g transform="translate(120, 90)">
        <circle cx="0" cy="0" r="30" fill="#F59E0B" />
        <polygon points="-80,20 -30,-20 0,20" fill="#047857" />
        <polygon points="-10,20 40,-30 80,20" fill="#065F46" />
        <text x="0" y="40" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDE68A">Tap the Sunrise!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Verbal Valley",
    
    // T1: Gerunds vs Verbs (DROP GAME)
    t1_title: "Gerund or Action Verb?",
    t1_text: "A GERUND is a verb ending in '-ing' that acts like a NOUN (e.g., 'Flying is fun'). If the '-ing' word is doing the action with a helping verb (e.g., 'He is flying'), it's just a regular verb.",
    t1_b1: "Gerund: Acts as a subject or object.",
    t1_b2: "Verb: Needs a helper (am, is, are, was).",
    t1_b3: "Both end in -ing!",
    t1_inst: "Sort the sentences into the Gerund or Action Verb buckets!",
    t1_bucket_ger: "Gerund (Noun)",
    t1_bucket_vrb: "Action Verb",
    t1_item_g1: "Reading is my hobby.", t1_item_g2: "I enjoy swimming.",
    t1_item_v1: "She is reading a book.", t1_item_v2: "They are swimming now.",
    t1_q: "In the sentence 'Walking is good exercise', what is 'Walking'?",
    t1_q_a: "A Gerund", t1_q_b: "An Action Verb", t1_q_c: "An Infinitive", t1_q_d: "A Preposition",

    // T2: Infinitives (MAGNET MATCH)
    t2_title: "The Infinitive Bridge",
    t2_text: "An INFINITIVE is the base form of a verb preceded by the word 'to' (e.g., 'to jump', 'to explore'). It can act as a noun, adjective, or adverb. Don't confuse it with a prepositional phrase starting with 'to'!",
    t2_b1: "Infinitive: 'To' + Action Verb.",
    t2_b2: "Preposition: 'To' + Noun/Place.",
    t2_b3: "Example: 'I want to sleep.'",
    t2_inst: "Magnet Match: Connect the phrase to what it is!",
    t2_l1: "...to win the game.", t2_r1: "Infinitive Phrase",
    t2_l2: "...to the store.", t2_r2: "Prepositional Phrase",
    t2_l3: "...is sleeping.", t2_r3: "Verb Phrase",
    t2_q: "Which of the following contains an INFINITIVE?",
    t2_q_a: "She loves to sing.", t2_q_b: "She went to the park.", t2_q_c: "She gave it to him.", t2_q_d: "She is singing.",

    // T3: Participles (HIGHLIGHT)
    t3_title: "Radar Scan: Participles",
    t3_text: "A PARTICIPLE is a verb form that acts like an ADJECTIVE to describe a noun. Present participles end in '-ing' (the falling snow). Past participles end in '-ed' or '-en' (the broken window).",
    t3_b1: "Find the noun in the sentence.",
    t3_b2: "Find the action word that describes it.",
    t3_b3: "Highlight only the participle!",
    t3_inst: "Highlight the PARTICIPLE (the verb acting as an adjective)!",
    t3_tok0: "The", t3_tok1: "exhausted", t3_tok2: "astronaut", t3_tok3: "slept", t3_tok4: "in", t3_tok5: "the", t3_tok6: "shuttle.",
    t3_q: "In 'the crying baby', what is the word 'crying'?",
    t3_q_a: "A Participle", t3_q_b: "A Gerund", t3_q_c: "An Infinitive", t3_q_d: "A Noun",

    // T4: Verbal Hunt (SLINGSHOT)
    t4_title: "The Verbal Hunt",
    t4_text: "You now know all three verbals: Gerunds (nouns), Infinitives (to+verb), and Participles (adjectives). Time to prove your skills!",
    t4_b1: "Gerund = Noun.",
    t4_b2: "Infinitive = To + Verb.",
    t4_b3: "Participle = Adjective.",
    t4_inst: "Shoot the asteroid that contains a GERUND!",
    t4_target_1: "Running takes a lot of energy.", // Correct (Gerund)
    t4_target_2: "I want to run away.", // Infinitive
    t4_target_3: "The running water was cold.", // Participle
    t4_q: "Which verbal always begins with the word 'to'?",
    t4_q_a: "Infinitive", t4_q_b: "Gerund", t4_q_c: "Participle", t4_q_d: "Preposition",

    // T5: Fun Catch
    t5_title: "Valley Explorer",
    t5_text: "Incredible! You have reached the end of Verbal Valley. You can now bend verbs to your will, using them as nouns, adjectives, or adverbs.",
    t5_b1: "Gerunds end in -ing.",
    t5_b2: "Infinitives use 'to'.",
    t5_b3: "Catch 6 Sunrises!",
    t5_inst: "Tap the 6 beautiful sunrises (🌄) over the valley!",
    t5_q: "What do we call a verb that acts like a different part of speech?",
    t5_q_a: "A Verbal", t5_q_b: "A Clause", t5_q_c: "A Phrase", t5_q_d: "A Conjunction",
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
        { id: "ger", label: "t1_bucket_ger" },
        { id: "vrb", label: "t1_bucket_vrb" },
      ],
      items: [
        { text: "t1_item_g1", bucketId: "ger" },
        { text: "t1_item_v1", bucketId: "vrb" },
        { text: "t1_item_g2", bucketId: "ger" },
        { text: "t1_item_v2", bucketId: "vrb" },
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6"],
      correctIndices: [1], // "exhausted"
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
      tapCount: { emoji: "🌄", count: 6 }, 
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
  icon: "🌄",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const VerbalExplorer = memo(function VerbalExplorer({
  color = "#D97706", // Amber-600 (Napfelkelte narancs)
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
      explorerId="english_k7_verbal_valley" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default VerbalExplorer;
