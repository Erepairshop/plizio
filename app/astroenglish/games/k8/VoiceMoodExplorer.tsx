"use client";
// VoiceMoodExplorer.tsx — AstroEnglish Grade 8: i3 Voice & Mood
// Topics: 1) Indicative vs Imperative 2) Subjunctive & Conditional 3) Spot the Subjunctive 4) Mood Identification 5) Mask Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#4C0519" rx="20" />
      {/* Indicative (Fact) vs Imperative (Command) */}
      <g transform="translate(70, 70)">
        <rect x="-30" y="-20" width="60" height="40" fill="#E11D48" rx="4" />
        <circle cx="0" cy="0" r="10" fill="#FDA4AF" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#FECDD3">Indicative (Fact)</text>
      </g>
      <g transform="translate(170, 70)">
        <polygon points="-30,-20 30,-20 0,20" fill="#BE123C" />
        <text x="0" y="-2" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#FFE4E6">!</text>
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#FECDD3">Imperative (Command)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#171717" rx="20" />
      {/* Subjunctive / Conditional Crossroads */}
      <g transform="translate(120, 70)">
        <path d="M -50,0 Q 0,-30 50,0" fill="none" stroke="#FBBF24" strokeWidth="4" strokeDasharray="6,6" />
        <text x="0" y="-20" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FDE047">IF...</text>
        <circle cx="-50" cy="0" r="8" fill="#D97706" />
        <circle cx="50" cy="0" r="8" fill="#D97706" />
        <path d="M -30,20 L 30,20" stroke="#9CA3AF" strokeWidth="2" />
        <text x="0" y="35" textAnchor="middle" fontSize="10" fill="#D1D5DB">Conditional Paths</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#2A040D" rx="20" />
      {/* Theater Masks representing moods */}
      <g transform="translate(120, 70)">
        {/* Happy Mask */}
        <path d="M -25,-15 Q -10,-20 5,-15 Q 10,5 -10,15 Q -30,5 -25,-15" fill="#F43F5E" />
        <circle cx="-15" cy="-5" r="3" fill="#000" />
        <circle cx="-5" cy="-5" r="3" fill="#000" />
        <path d="M -15,5 Q -10,10 -5,5" fill="none" stroke="#000" strokeWidth="2" />
        {/* Sad Mask */}
        <path d="M 5,-5 Q 20,-10 35,-5 Q 40,15 20,25 Q 0,15 5,-5" fill="#3B82F6" />
        <circle cx="15" cy="5" r="3" fill="#000" />
        <circle cx="25" cy="5" r="3" fill="#000" />
        <path d="M 15,18 Q 20,13 25,18" fill="none" stroke="#000" strokeWidth="2" />
        <text x="5" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#FDA4AF">Tap the Masks!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Voice & Mood",
    
    // T1: Indicative vs Imperative (DROP GAME)
    t1_title: "Facts vs. Commands",
    t1_text: "Verb MOOD shows the speaker's attitude. The INDICATIVE mood states a fact or asks a simple question. The IMPERATIVE mood gives a command or request (usually missing the subject 'You').",
    t1_b1: "Indicative: 'The ship is fast.'",
    t1_b2: "Imperative: 'Stop the ship immediately.'",
    t1_b3: "Look for the hidden 'You' in commands.",
    t1_inst: "Sort the sentences into the Indicative (Fact) or Imperative (Command) buckets!",
    t1_bucket_ind: "Indicative (Fact)",
    t1_bucket_imp: "Imperative (Command)",
    t1_item_i1: "The stars are bright.", t1_item_i2: "We landed safely.",
    t1_item_m1: "Turn off the engine.", t1_item_m2: "Listen to the captain.",
    t1_q: "Which mood is used to state a fact?",
    t1_q_a: "Indicative", t1_q_b: "Imperative", t1_q_c: "Subjunctive", t1_q_d: "Conditional",

    // T2: Subjunctive & Conditional (MAGNET MATCH)
    t2_title: "The World of 'If'",
    t2_text: "The CONDITIONAL mood depends on something else happening ('If it rains, we will stay'). The SUBJUNCTIVE mood explores wishes, suggestions, or things that aren't true ('If I were a bird', 'I demand he apologize').",
    t2_b1: "Conditional: 'If X happens, Y will happen.'",
    t2_b2: "Subjunctive (Wish): 'I wish I were there.'",
    t2_b3: "Subjunctive (Demand): 'It is vital that she leave.'",
    t2_inst: "Magnet Match: Connect the sentence to its correct verb mood!",
    t2_l1: "If I were the captain...", t2_r1: "Subjunctive (Unreal/Wish)",
    t2_l2: "If you study, you will pass.", t2_r2: "Conditional (Cause/Effect)",
    t2_l3: "Where is the map?", t2_r3: "Interrogative (Question)",
    t2_q: "Why do we say 'If I WERE you' instead of 'If I WAS you'?",
    t2_q_a: "Because it's in the subjunctive mood (contrary to fact).", t2_q_b: "Because it happened in the past.", t2_q_c: "Because it is a command.", t2_q_d: "It's a grammatical mistake.",

    // T3: Spot the Subjunctive (HIGHLIGHT)
    t3_title: "Radar Scan: Subjunctive",
    t3_text: "The subjunctive mood often ignores normal subject-verb agreement! It uses 'were' instead of 'was' for singular subjects, or drops the 's' on present tense verbs after demands (e.g., 'I insist he GO' not 'goes').",
    t3_b1: "Look for the verb that breaks normal rules.",
    t3_b2: "Find the 'were' used with 'I', 'He', 'She', or 'It'.",
    t3_b3: "Highlight that strange verb!",
    t3_inst: "Highlight the SUBJUNCTIVE verb in this sentence!",
    t3_tok0: "If", t3_tok1: "the", t3_tok2: "alien", t3_tok3: "were", t3_tok4: "friendly,", t3_tok5: "we", t3_tok6: "would", t3_tok7: "say", t3_tok8: "hello.",
    t3_q: "In the sentence 'I demand that she stop', what mood is the verb 'stop'?",
    t3_q_a: "Subjunctive", t3_q_b: "Indicative", t3_q_c: "Imperative", t3_q_d: "Conditional",

    // T4: Mood Identification (SLINGSHOT)
    t4_title: "Mood Targeting",
    t4_text: "Can you identify the mood of a sentence instantly? Let's test your skills on the Conditional mood, which always sets up a condition and a result.",
    t4_b1: "Look for 'If... then...' or 'might/would'.",
    t4_b2: "Don't confuse it with a simple question.",
    t4_b3: "Shoot the Conditional asteroid!",
    t4_inst: "Shoot the asteroid that is in the CONDITIONAL mood!",
    t4_target_1: "If the shield fails, we will retreat.", // Correct
    t4_target_2: "Retreat to the base!",
    t4_target_3: "I wish the shield were stronger.",
    t4_q: "Which mood asks a question?",
    t4_q_a: "Interrogative", t4_q_b: "Indicative", t4_q_c: "Subjunctive", t4_q_d: "Imperative",

    // T5: Fun Catch
    t5_title: "Master of Moods",
    t5_text: "Encore! You've mastered the complex world of English verb moods. You can now express facts, commands, conditions, and impossible wishes perfectly.",
    t5_b1: "Indicative states facts.",
    t5_b2: "Subjunctive dreams and demands.",
    t5_b3: "Catch 6 Masks!",
    t5_inst: "Tap the 6 theater masks (🎭) to close the show!",
    t5_q: "How many primary verb moods are there in English grammar?",
    t5_q_a: "Five (Indicative, Imperative, Interrogative, Conditional, Subjunctive)", t5_q_b: "Two (Past and Present)", t5_q_c: "Three (Good, Bad, Neutral)", t5_q_d: "Ten",
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
        { id: "ind", label: "t1_bucket_ind" },
        { id: "imp", label: "t1_bucket_imp" },
      ],
      items: [
        { text: "t1_item_i1", bucketId: "ind" },
        { text: "t1_item_m1", bucketId: "imp" },
        { text: "t1_item_i2", bucketId: "ind" },
        { text: "t1_item_m2", bucketId: "imp" },
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
      tokens: ["t3_tok0", "t3_tok1", "t3_tok2", "t3_tok3", "t3_tok4", "t3_tok5", "t3_tok6", "t3_tok7", "t3_tok8"],
      correctIndices: [3], // "were"
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
      tapCount: { emoji: "🎭", count: 6 }, 
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
  icon: "🎭",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const VoiceMoodExplorer = memo(function VoiceMoodExplorer({
  color = "#E11D48", // Rose-600 (Theatrical Red)
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
      explorerId="english_k8_voice_mood" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default VoiceMoodExplorer;
