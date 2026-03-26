"use client";
// LiteratureExplorer.tsx — AstroEnglish Grade 8: i5 Literature Lab
// Topics: 1) Point of View Basics 2) Advanced POV 3) 2nd Person Radar 4) Genre Identification 5) Lab Catch

import { memo } from "react";
import ExplorerEngine from "@/app/astro-sachkunde/games/ExplorerEngine";
import type { ExplorerDef, TopicDef } from "@/app/astro-sachkunde/games/ExplorerEngine";

// ─── INLINE SVG ILLUSTRATIONS (Strictly Geometric) ───────

const Topic1Svg = memo(function Topic1Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#312E81" rx="20" />
      {/* 1st vs 3rd Person View */}
      <g transform="translate(70, 70)">
        <circle cx="0" cy="-10" r="15" fill="#818CF8" />
        <rect x="-15" y="5" width="30" height="20" fill="#4F46E5" rx="4" />
        <text x="0" y="40" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#C7D2FE">1st Person (I/We)</text>
      </g>
      <g transform="translate(170, 70)">
        <circle cx="-15" cy="-10" r="10" fill="#9CA3AF" />
        <rect x="-25" y="0" width="20" height="15" fill="#6B7280" rx="2" />
        <circle cx="15" cy="-10" r="10" fill="#9CA3AF" />
        <rect x="5" y="0" width="20" height="15" fill="#6B7280" rx="2" />
        <text x="0" y="40" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#E5E7EB">3rd Person (He/She)</text>
      </g>
    </svg>
  );
});

const Topic2Svg = memo(function Topic2Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#064E3B" rx="20" />
      {/* Omniscient vs Limited Brains */}
      <g transform="translate(120, 70)">
        {/* Limited */}
        <path d="M -60,0 Q -40,-30 -20,0 Q -40,30 -60,0" fill="none" stroke="#34D399" strokeWidth="2" />
        <circle cx="-40" cy="0" r="5" fill="#10B981" />
        <text x="-40" y="25" textAnchor="middle" fontSize="8" fill="#A7F3D0">Limited (1 Mind)</text>
        
        {/* Omniscient */}
        <path d="M 20,0 Q 40,-40 60,0 Q 40,40 20,0" fill="none" stroke="#FBBF24" strokeWidth="2" />
        <circle cx="30" cy="-5" r="4" fill="#F59E0B" />
        <circle cx="50" cy="-5" r="4" fill="#F59E0B" />
        <circle cx="40" cy="10" r="4" fill="#F59E0B" />
        <text x="40" y="30" textAnchor="middle" fontSize="8" fill="#FDE68A">Omniscient (ALL Minds)</text>
      </g>
    </svg>
  );
});

const Topic5Svg = memo(function Topic5Svg() {
  return (
    <svg width="100%" viewBox="0 0 240 140">
      <rect width="240" height="140" fill="#0F172A" rx="20" />
      {/* Microscope */}
      <g transform="translate(120, 80)">
        <path d="M -15,10 L 15,10 L 20,20 L -20,20 Z" fill="#475569" />
        <rect x="-5" y="-10" width="10" height="20" fill="#94A3B8" />
        <path d="M -15,-10 Q 0,-30 15,-10" fill="none" stroke="#38BDF8" strokeWidth="6" strokeLinecap="round" />
        <circle cx="-15" cy="-10" r="4" fill="#0EA5E9" />
        <text x="0" y="45" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#BAE6FD">Tap the Microscopes!</text>
      </g>
    </svg>
  );
});

// ─── LABELS (100% ENGLISH) ──────────────────────────────────────────

const LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Literature Lab",
    
    // T1: POV Basics (DROP GAME)
    t1_title: "Point of View Basics",
    t1_text: "Who is telling the story? In 1st Person POV, the narrator is a character inside the story (uses 'I' or 'We'). In 3rd Person POV, the narrator is outside the story looking in (uses 'He', 'She', 'They').",
    t1_b1: "1st Person: I, Me, We, Us.",
    t1_b2: "3rd Person: He, She, It, They.",
    t1_b3: "Look at the pronouns outside of the dialogue quotes!",
    t1_inst: "Sort the story snippets into 1st Person or 3rd Person buckets!",
    t1_bucket_1st: "1st Person (I/We)",
    t1_bucket_3rd: "3rd Person (He/She)",
    t1_item_1a: "I walked into the dark room.", t1_item_1b: "We couldn't believe our eyes.",
    t1_item_3a: "She slowly opened the door.", t1_item_3b: "They ran as fast as they could.",
    t1_q: "What point of view is this snippet: 'I walked into the room and saw the mess.'?",
    t1_q_a: "First Person", t1_q_b: "Second Person", t1_q_c: "Third Person Limited", t1_q_d: "Third Person Omniscient",

    // T2: Advanced POV (MAGNET MATCH)
    t2_title: "Advanced Perspectives",
    t2_text: "3rd Person POV has two main types! '3rd Limited' means the narrator only knows the thoughts and feelings of ONE character. '3rd Omniscient' means the narrator is all-knowing and knows ALL characters' thoughts.",
    t2_b1: "3rd Limited: We only see into one character's brain.",
    t2_b2: "3rd Omniscient: 'Omni' = All. The narrator knows everything.",
    t2_b3: "2nd Person: Uses 'You' (like a recipe or a game instruction).",
    t2_inst: "Magnet Match: Connect the Point of View to its definition!",
    t2_l1: "1st Person", t2_r1: "Narrator uses 'I' and is in the story",
    t2_l2: "3rd Person Limited", t2_r2: "Narrator knows ONE character's thoughts",
    t2_l3: "3rd Person Omniscient", t2_r3: "Narrator knows ALL characters' thoughts",
    t2_q: "If a narrator tells you what the hero is thinking AND what the villain is thinking in secret, what POV is it?",
    t2_q_a: "Third Person Omniscient", t2_q_b: "Third Person Limited", t2_q_c: "First Person", t2_q_d: "Second Person",

    // T3: 2nd Person Radar (HIGHLIGHT)
    t3_title: "Radar Scan: 2nd Person",
    t3_text: "The 2nd Person Point of View is rare in fiction. It speaks directly to the reader using the pronoun 'You', pulling them into the story as a character.",
    t3_b1: "Look for the word 'You' or 'Your'.",
    t3_b2: "It feels like the author is talking to YOU.",
    t3_b3: "Highlight the 2nd person pronoun!",
    t3_inst: "Highlight the 2nd Person pronoun in this 'Choose Your Own Adventure' sentence!",
    t3_tok0: "Suddenly,", t3_tok1: "you", t3_tok2: "hear", t3_tok3: "a", t3_tok4: "loud", t3_tok5: "noise", t3_tok6: "behind", t3_tok7: "the", t3_tok8: "door.",
    t3_q: "Which type of writing most commonly uses the 2nd Person POV?",
    t3_q_a: "Instructions or recipes", t3_q_b: "Historical biographies", t3_q_c: "Science fiction novels", t3_q_d: "Newspaper articles",

    // T4: Genres (SLINGSHOT)
    t4_title: "Genre Identification",
    t4_text: "Literature is sorted into GENRES. Examples: Horror/Fantasy (supernatural), Biography (true story of a life), Sci-Fi (futuristic tech), Tragedy (sad ending), Mystery (solving a crime), Memoir (author's own memories), Comedy, Historical Fiction.",
    t4_b1: "Sci-Fi = Future, space, technology.",
    t4_b2: "Historical Fiction = Set in the real past, but a made-up story.",
    t4_b3: "Memoir = A true story written by the person who lived it.",
    t4_inst: "Shoot the asteroid that contains the correct genre for: 'A story with supernatural creatures like vampires and ghosts.'",
    t4_target_1: "Horror / Fantasy", // Correct
    t4_target_2: "Historical Fiction",
    t4_target_3: "Sci-Fi",
    t4_q: "Which genre tells the true story of someone's life, written by someone else?",
    t4_q_a: "Biography", t4_q_b: "Memoir", t4_q_c: "Historical Fiction", t4_q_d: "Mystery",

    // T5: Fun Catch
    t5_title: "Lab Technician",
    t5_text: "You've successfully analyzed the specimens in the Literature Lab! You can now identify who is telling the story and what kind of story it is.",
    t5_b1: "1st Person = I.",
    t5_b2: "Omniscient = Knows all.",
    t5_b3: "Catch 6 Microscopes!",
    t5_inst: "Tap the 6 microscopes (🔬) to complete your research!",
    t5_q: "Which genre involves a story set in the past that incorporates real historical events but features fictional characters?",
    t5_q_a: "Historical Fiction", t5_q_b: "Biography", t5_q_c: "Memoir", t5_q_d: "Tragedy",
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
        { id: "1st", label: "t1_bucket_1st" },
        { id: "3rd", label: "t1_bucket_3rd" },
      ],
      items: [
        { text: "t1_item_1a", bucketId: "1st" },
        { text: "t1_item_3a", bucketId: "3rd" },
        { text: "t1_item_1b", bucketId: "1st" },
        { text: "t1_item_3b", bucketId: "3rd" },
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
      correctIndices: [1], // "you"
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
      tapCount: { emoji: "🔬", count: 6 }, 
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
  icon: "🔬",
  topics: TOPICS,
  rounds: [],
};

// ─── EXPORT ─────────────────────────────────────────────────────────

const LiteratureExplorer = memo(function LiteratureExplorer({
  color = "#4338CA", // Indigo-700 (Tudományos/Irodalmi labor kék)
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
      explorerId="english_k8_literature_lab" 
      color={color} 
      lang="en" 
      onDone={onDone} 
    />
  );
});

export default LiteratureExplorer;
