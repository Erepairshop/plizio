// lib/explorerPools/englishK5.ts
import type { PoolTopicDef } from "./types";

// ═══════════════════════════════════════════════════════════════════════════
// i1 — CONJUNCTION COVE
// Topics: FANBOYS (for/and/nor/but/or/yet/so), subordinating conjunctions
//         (because/although/while/since/unless/if/when),
//         correlative conjunctions (either-or, neither-nor, both-and, not only-but also)
// ═══════════════════════════════════════════════════════════════════════════

export const CONJUNCTION_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Conjunction Cove",
    
    // T1 - FANBOYS (intro)
    t1_title: "Meet the FANBOYS",
    t1_text: "Coordinating conjunctions connect words or phrases. Remember them with the acronym FANBOYS: For, And, Nor, But, Or, Yet, So.",
    t1_h1: "Think of the acronym: F-A-N-B-O-Y-S.",
    t1_h2: "B stands for But.",
    t1_w1: "Conjunctions", t1_w2: "are", t1_w3: "joining", t1_w4: "words.",
    t1_q: "What does the 'B' in FANBOYS stand for?",
    t1_c1: "but", t1_c2: "because", t1_c3: "before", t1_c4: "both",
    t1_svg_1: "F-A-N", t1_svg_2: "B-O-Y-S",

    // T2 - "for"
    t2_title: "\"For\" - The Reason",
    t2_text: "The conjunction 'for' means 'because'. It introduces a reason or purpose. Example: 'I drank some water, for I was thirsty.'",
    t2_inst: "Fill in the blank!",
    t2_h1: "'For' gives a reason.",
    t2_h2: "It means the same as 'because'.",
    t2_sent: "She went to bed early, ___ she was very tired.",
    t2_c1: "for", t2_c2: "but", t2_c3: "or", t2_c4: "yet",
    t2_q: "Which conjunction can mean the same as 'because'?",
    t2_svg_w1: "for",

    // T3 - "and"
    t3_title: "\"And\" - Addition",
    t3_text: "'And' is used to add one thing to another. Example: 'I like apples and bananas.'",
    t3_inst: "Highlight the conjunction!",
    t3_h1: "Find the word that adds things together.",
    t3_h2: "The word is 'and'.",
    t3_sent: "My brother and I played soccer.",
    t3_target: "and",
    t3_q: "Which conjunction is used to add items together?",
    t3_c1: "and", t3_c2: "but", t3_c3: "or", t3_c4: "yet",
    t3_svg_w1: "and",

    // T4 - "nor"
    t4_title: "\"Nor\" - Negative Addition",
    t4_text: "'Nor' is used to continue a negative idea. It often follows a negative word. 'He doesn't eat meat, nor does he drink milk.'",
    t4_inst: "Fill in the negative conjunction!",
    t4_h1: "It adds a second negative thing.",
    t4_h2: "Use 'nor'.",
    t4_sent: "I do not like peas, ___ do I like carrots.",
    t4_c1: "nor", t4_c2: "for", t4_c3: "but", t4_c4: "so",
    t4_q: "Which FANBOYS conjunction is used for negative additions?",
    t4_qc1: "nor", t4_qc2: "or", t4_qc3: "for", t4_qc4: "yet",
    t4_svg_l1: "Not this", t4_svg_l2: "Nor this",

    // T5 - "but"
    t5_title: "\"But\" - Contrast",
    t5_text: "'But' shows a contrast or exception. It connects two different or opposing ideas. 'It is sunny, but it is cold.'",
    t5_h1: "Match the opposite ideas.",
    t5_h2: "I wanted to go, but it rained.",
    t5_l1: "I wanted to go,", t5_r1: "but it rained.",
    t5_l2: "She is fast,", t5_r2: "but he is slow.",
    t5_q: "What does the conjunction 'but' show?",
    t5_c1: "contrast", t5_c2: "addition", t5_c3: "reason", t5_c4: "choice",
    t5_svg_w1: "but",

    // T6 - "or"
    t6_title: "\"Or\" - Giving Choices",
    t6_text: "Use 'or' when you are presenting a choice or an alternative. 'Do you want tea or coffee?'",
    t6_inst: "Fill in the blank with the choice word!",
    t6_h1: "Which word gives you a choice?",
    t6_h2: "Use 'or'.",
    t6_sent: "You can read a book ___ play outside.",
    t6_c1: "or", t6_c2: "nor", t6_c3: "for", t6_c4: "so",
    t6_q: "Which conjunction presents a choice?",
    t6_qc1: "or", t6_qc2: "and", t6_qc3: "but", t6_qc4: "so",
    t6_svg_1: "Tea", t6_svg_2: "or", t6_svg_3: "Coffee",

    // T7 - "yet"
    t7_title: "\"Yet\" - Unexpected Contrast",
    t7_text: "'Yet' is very similar to 'but'. It introduces a surprising or unexpected contrast. 'He is slow, yet he always wins.'",
    t7_h1: "Order the words to show a surprise.",
    t7_h2: "The test was hard, yet I passed.",
    t7_w1: "The test", t7_w2: "was hard,", t7_w3: "yet", t7_w4: "I passed.",
    t7_q: "Which conjunction shows an unexpected contrast?",
    t7_c1: "yet", t7_c2: "for", t7_c3: "nor", t7_c4: "or",
    t7_svg_w1: "yet",

    // T8 - "so"
    t8_title: "\"So\" - The Result",
    t8_text: "'So' shows the result or consequence of an action. 'I was tired, so I went to sleep.'",
    t8_inst: "Highlight the result conjunction!",
    t8_h1: "Find the word that shows a result.",
    t8_h2: "Highlight the word 'so'.",
    t8_sent: "It was raining, so we stayed indoors.",
    t8_target: "so",
    t8_q: "What does the conjunction 'so' show?",
    t8_c1: "result", t8_c2: "reason", t8_c3: "contrast", t8_c4: "choice",
    t8_svg_w1: "so",

    // T9 - Subordinating intro
    t9_title: "Subordinating Conjunctions",
    t9_text: "Subordinating conjunctions connect an independent clause with a dependent clause. (Examples: because, although, while).",
    t9_h1: "Sort the conjunctions.",
    t9_h2: "FANBOYS are coordinating. Because/although are subordinating.",
    t9_i1: "because", t9_i2: "although", t9_i3: "and", t9_i4: "but",
    t9_b1: "Subordinating", t9_b2: "Coordinating",
    t9_q: "Which of these is a subordinating conjunction?",
    t9_c1: "because", t9_c2: "and", t9_c3: "but", t9_c4: "or",
    t9_svg_w1: "because", t9_svg_w2: "although",

    // T10 - "because" vs "so"
    t10_title: "Cause vs. Result",
    t10_text: "'Because' shows the cause. 'So' shows the result. 'I ate because I was hungry.' vs 'I was hungry, so I ate.'",
    t10_inst: "Choose the correct word!",
    t10_h1: "Which word fits the blank?",
    t10_h2: "We stayed inside because it was raining.",
    t10_sent: "We stayed inside _______ it was raining.",
    t10_c1: "because", t10_c2: "so", t10_c3: "but", t10_c4: "or",
    t10_q: "'I studied hard, ___ I got an A.' Which word fits best?",
    t10_qc1: "so", t10_qc2: "because", t10_qc3: "although", t10_qc4: "nor",
    t10_svg_l1: "Cause (Because)", t10_svg_r1: "Result (So)",

    // T11 - "although" / "even though"
    t11_title: "Concession: Although",
    t11_text: "'Although' and 'even though' introduce a contrast or concession. 'Although it was raining, we still played baseball.'",
    t11_h1: "Match the halves of the sentence.",
    t11_h2: "Although it was late -> we kept working.",
    t11_l1: "Although it was late,", t11_r1: "we kept working.",
    t11_l2: "Even though he was tired,", t11_r2: "he finished the race.",
    t11_q: "Which conjunction means the same as 'even though'?",
    t11_c1: "although", t11_c2: "because", t11_c3: "since", t11_c4: "or",
    t11_svg_w1: "although",

    // T12 - "while" / "when" / "after"
    t12_title: "Conjunctions of Time",
    t12_text: "Some conjunctions tell us WHEN something happens. Examples: while, when, after, before, until. 'I will wait until you are ready.'",
    t12_inst: "Fill in the missing time word!",
    t12_h1: "What do you do first?",
    t12_h2: "Brush your teeth before you go to bed.",
    t12_sent: "Brush your teeth _______ you go to bed.",
    t12_c1: "before", t12_c2: "while", t12_c3: "although", t12_c4: "because",
    t12_q: "Which of these is a time conjunction?",
    t12_qc1: "until", t12_qc2: "because", t12_qc3: "although", t12_qc4: "if",
    t12_svg_w1: "when", t12_svg_w2: "while", t12_svg_w3: "after",

    // T13 - "if" / "unless"
    t13_title: "Conditions: If & Unless",
    t13_text: "'If' and 'unless' set a condition. A condition must be met for the result to happen. 'You will fail unless you study.' ('unless' means 'if not').",
    t13_inst: "Select the correct condition!",
    t13_h1: "Which word means a condition?",
    t13_h2: "We will go to the park if it stops raining.",
    t13_sent: "We will go to the park ___ it stops raining.",
    t13_c1: "if", t13_c2: "unless", t13_c3: "although", t13_c4: "before",
    t13_q: "What does the conjunction 'unless' mean?",
    t13_qc1: "if not", t13_qc2: "because", t13_qc3: "while", t13_qc4: "after",
    t13_svg_lbl: "Conditions",

    // T14 - Correlative conjunctions
    t14_title: "Correlative Conjunctions",
    t14_text: "Correlative conjunctions work in pairs to connect parts of a sentence. Examples: either/or, neither/nor, both/and.",
    t14_h1: "Match the correct pairs together.",
    t14_h2: "Either pairs with or. Neither pairs with nor.",
    t14_l1: "either", t14_r1: "or",
    t14_l2: "neither", t14_r2: "nor",
    t14_l3: "both", t14_r3: "and",
    t14_q: "Which word pairs with 'neither'?",
    t14_c1: "nor", t14_c2: "or", t14_c3: "and", t14_c4: "but",
    t14_svg_l1: "either", t14_svg_r1: "or",

    // T15 - "not only … but also"
    t15_title: "Not Only... But Also",
    t15_text: "'Not only... but also' is a correlative pair used to emphasize that two things are true. 'She is not only smart but also very kind.'",
    t15_h1: "Order the parts of the sentence.",
    t15_h2: "He is not only fast but also strong.",
    t15_w1: "He is", t15_w2: "not only", t15_w3: "fast", t15_w4: "but also", t15_w5: "strong.",
    t15_q: "Which words complete the pair: 'Not only...'?",
    t15_c1: "...but also", t15_c2: "...and then", t15_c3: "...or else", t15_c4: "...nor that",
    t15_svg_p1: "Not only...", t15_svg_p2: "but also..."
  }
};

export const CONJUNCTION_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "text-bubbles", items: [
      { text: "t1_svg_1", color: "#1e293b", bg: "#DBEAFE" },
      { text: "t1_svg_2", color: "#1e293b", bg: "#FEF3C7" }
    ]},
    hintKey: "t1_h1",
    interactive: {
      type: "sentence-build",
      fragments: ["t1_w1", "t1_w2", "t1_w3", "t1_w4"],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2"
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"],
      answer: "t1_c1"
    }
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "word-display", word: "t2_svg_w1", color: "#3B82F6" },
    hintKey: "t2_h1",
    interactive: {
      type: "gap-fill",
      sentence: "t2_sent",
      choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"],
      correctIndex: 0,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2"
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"],
      answer: "t2_c1"
    }
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "t3_svg_w1", color: "#10B981" },
    hintKey: "t3_h1",
    interactive: {
      type: "highlight-text",
      tokens: ["t3_sent"],
      correctIndices: [0],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2"
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"],
      answer: "t3_c1"
    }
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "two-groups",
      left: { items: ["t4_svg_l1"], bg: "#FEE2E2", border: "#EF4444" },
      right: { items: ["t4_svg_l2"], bg: "#FEF2F2", border: "#B91C1C" }
    },
    hintKey: "t4_h1",
    interactive: {
      type: "gap-fill",
      sentence: "t4_sent",
      choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"],
      correctIndex: 0,
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2"
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_qc1", "t4_qc2", "t4_qc3", "t4_qc4"],
      answer: "t4_qc1"
    }
  },
  {
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "t5_svg_w1", color: "#F59E0B" },
    hintKey: "t5_h1",
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t5_l1", right: "t5_r1" },
        { left: "t5_l2", right: "t5_r2" }
      ],
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2"
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"],
      answer: "t5_c1"
    }
  },
  {
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "text-bubbles", items: [
      { text: "t6_svg_1", color: "#1e293b", bg: "#DBEAFE" },
      { text: "t6_svg_2", color: "#ffffff", bg: "#3B82F6" },
      { text: "t6_svg_3", color: "#1e293b", bg: "#FEF3C7" }
    ]},
    hintKey: "t6_h1",
    interactive: {
      type: "gap-fill",
      sentence: "t6_sent",
      choices: ["t6_c1", "t6_c2", "t6_c3", "t6_c4"],
      correctIndex: 0,
      instruction: "t6_inst",
      hint1: "t6_h1",
      hint2: "t6_h2"
    },
    quiz: {
      question: "t6_q",
      choices: ["t6_qc1", "t6_qc2", "t6_qc3", "t6_qc4"],
      answer: "t6_qc1"
    }
  },
  {
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "word-display", word: "t7_svg_w1", color: "#8B5CF6" },
    hintKey: "t7_h1",
    interactive: {
      type: "sentence-build",
      fragments: ["t7_w1", "t7_w2", "t7_w3", "t7_w4"],
      instruction: "t7_inst",
      hint1: "t7_h1",
      hint2: "t7_h2"
    },
    quiz: {
      question: "t7_q",
      choices: ["t7_c1", "t7_c2", "t7_c3", "t7_c4"],
      answer: "t7_c1"
    }
  },
  {
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "word-display", word: "t8_svg_w1", color: "#EC4899" },
    hintKey: "t8_h1",
    interactive: {
      type: "highlight-text",
      tokens: ["t8_sent"],
      correctIndices: [0],
      instruction: "t8_inst",
      hint1: "t8_h1",
      hint2: "t8_h2"
    },
    quiz: {
      question: "t8_q",
      choices: ["t8_c1", "t8_c2", "t8_c3", "t8_c4"],
      answer: "t8_c1"
    }
  },
  {
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "word-display", word: "t9_svg_w1", color: "#6366F1" },
    hintKey: "t9_h1",
    interactive: {
      type: "drag-to-bucket",
      items: [{ text: "t9_i1", bucketId: "b1" }, { text: "t9_i2", bucketId: "b1" }, { text: "t9_i3", bucketId: "b2" }, { text: "t9_i4", bucketId: "b2" }],
      buckets: [
        { id: "b1", label: "t9_b1" },
        { id: "b2", label: "t9_b2" }
      ],
      instruction: "t9_inst",
      hint1: "t9_h1",
      hint2: "t9_h2"
    },
    quiz: {
      question: "t9_q",
      choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"],
      answer: "t9_c1"
    }
  },
  {
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "two-groups",
      left: { items: ["t10_c1"], bg: "#DBEAFE", border: "#3B82F6" },
      right: { items: ["t10_c2"], bg: "#FEF3C7", border: "#F59E0B" }
    },
    hintKey: "t10_h1",
    interactive: {
      type: "gap-fill",
      sentence: "t10_sent",
      choices: ["t10_c1", "t10_c2", "t10_c3", "t10_c4"],
      correctIndex: 0,
      instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2"
    },
    quiz: {
      question: "t10_q",
      choices: ["t10_qc1", "t10_qc2", "t10_qc3", "t10_qc4"],
      answer: "t10_qc1"
    }
  },
  {
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "word-display", word: "t11_svg_w1", color: "#06B6D4" },
    hintKey: "t11_h1",
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t11_l1", right: "t11_r1" },
        { left: "t11_l2", right: "t11_r2" }
      ],
      instruction: "t11_inst",
      hint1: "t11_h1",
      hint2: "t11_h2"
    },
    quiz: {
      question: "t11_q",
      choices: ["t11_c1", "t11_c2", "t11_c3", "t11_c4"],
      answer: "t11_c1"
    }
  },
  {
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "text-bubbles", items: [
      { text: "t12_svg_w1", color: "#1e293b", bg: "#DBEAFE" },
      { text: "t12_svg_w2", color: "#1e293b", bg: "#D1FAE5" },
      { text: "t12_svg_w3", color: "#1e293b", bg: "#FEF3C7" }
    ]},
    hintKey: "t12_h1",
    interactive: {
      type: "gap-fill",
      sentence: "t12_sent",
      choices: ["t12_c1", "t12_c2", "t12_c3", "t12_c4"],
      correctIndex: 0,
      instruction: "t12_inst",
      hint1: "t12_h1",
      hint2: "t12_h2"
    },
    quiz: {
      question: "t12_q",
      choices: ["t12_qc1", "t12_qc2", "t12_qc3", "t12_qc4"],
      answer: "t12_qc1"
    }
  },
  {
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "simple-icon", icon: "❓", title: "t13_svg_lbl", color: "#F43F5E" },
    hintKey: "t13_h1",
    interactive: {
      type: "gap-fill",
      sentence: "t13_sent",
      choices: ["t13_c1", "t13_c2", "t13_c3", "t13_c4"],
      correctIndex: 0,
      instruction: "t13_inst",
      hint1: "t13_h1",
      hint2: "t13_h2"
    },
    quiz: {
      question: "t13_q",
      choices: ["t13_qc1", "t13_qc2", "t13_qc3", "t13_qc4"],
      answer: "t13_qc1"
    }
  },
  {
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "two-groups",
      left: { items: ["t14_svg_l1"], bg: "#DBEAFE", border: "#3B82F6" },
      right: { items: ["t14_svg_r1"], bg: "#FEF3C7", border: "#F59E0B" }
    },
    hintKey: "t14_h1",
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "t14_l1", right: "t14_r1" },
        { left: "t14_l2", right: "t14_r2" },
        { left: "t14_l3", right: "t14_r3" }
      ],
      instruction: "t14_inst",
      hint1: "t14_h1",
      hint2: "t14_h2"
    },
    quiz: {
      question: "t14_q",
      choices: ["t14_c1", "t14_c2", "t14_c3", "t14_c4"],
      answer: "t14_c1"
    }
  },
  {
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "sentence-display", words: ["t15_svg_p1", "t15_svg_p2"], color: "#1e293b" },
    hintKey: "t15_h1",
    interactive: {
      type: "sentence-build",
      fragments: ["t15_w1", "t15_w2", "t15_w3", "t15_w4", "t15_w5"],
      instruction: "t15_inst",
      hint1: "t15_h1",
      hint2: "t15_h2"
    },
    quiz: {
      question: "t15_q",
      choices: ["t15_c1", "t15_c2", "t15_c3", "t15_c4"],
      answer: "t15_c1"
    }
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// i2 — INTERJECTION ISLE
// Topics: common interjections, strong vs mild, punctuation, formal vs informal
// ═══════════════════════════════════════════════════════════════════════════

export const INTERJECTION_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Interjection Isle",

    // T1 - What is an interjection?
    t1_title: "What is an Interjection?",
    t1_text: "An interjection is a word added to a sentence to convey strong emotion or surprise. Examples: Wow, Ouch, Oh.",
    t1_inst: "Fill in the blank with an interjection!",
    t1_h1: "Look for a word that shows sudden emotion.",
    t1_h2: "'Wow' shows amazement.",
    t1_sent: "___! That is a massive dinosaur.",
    t1_c1: "Wow", t1_c2: "And", t1_c3: "The", t1_c4: "Run",
    t1_q: "Which of the following is an interjection?",
    t1_svg_1: "Wow", t1_svg_2: "Ouch",

    // T2 - Strong Interjections (!)
    t2_title: "Strong Interjections",
    t2_text: "Strong interjections show intense emotion and are usually followed by an exclamation mark (!). Example: 'Ouch! That hurt.'",
    t2_inst: "Highlight the strong interjection!",
    t2_h1: "Find the word right before the exclamation mark.",
    t2_h2: "The word is 'Hooray'.",
    t2_sent: "Hooray! We won the championship game.",
    t2_target: "Hooray!",
    t2_q: "What punctuation mark usually follows a strong interjection?",
    t2_c1: "exclamation mark (!)", t2_c2: "comma (,)", t2_c3: "period (.)", t2_c4: "question mark (?)",
    t2_svg_icon: "!", t2_svg_lbl: "Strong Emotion",

    // T3 - Mild Interjections (,)
    t3_title: "Mild Interjections",
    t3_text: "Mild interjections show less emotion and are followed by a comma. Example: 'Well, I guess we can go now.'",
    t3_inst: "Highlight the mild interjection!",
    t3_h1: "Look for the word before the comma at the beginning.",
    t3_h2: "The word is 'Oh'.",
    t3_sent: "Oh, I forgot my backpack.",
    t3_target: "Oh,",
    t3_q: "What punctuation mark follows a mild interjection?",
    t3_c1: "comma (,)", t3_c2: "exclamation mark (!)", t3_c3: "semicolon (;)", t3_c4: "colon (:)",
    t3_svg_icon: ",", t3_svg_lbl: "Mild Emotion",

    // T4 - "Wow" (Surprise)
    t4_title: "Showing Surprise",
    t4_text: "We use interjections like 'Wow', 'Whoa', or 'Oh' to show surprise or amazement.",
    t4_inst: "Match the interjection to its feeling!",
    t4_h1: "'Wow' matches with surprise.",
    t4_h2: "Match 'Wow' to 'Surprise'.",
    t4_l1: "Wow!", t4_r1: "Surprise",
    t4_l2: "Ouch!", t4_r2: "Pain",
    t4_l3: "Ew!", t4_r3: "Disgust",
    t4_q: "Which interjection best shows amazement or surprise?",
    t4_c1: "Wow!", t4_c2: "Ouch!", t4_c3: "Ugh!", t4_c4: "Oops!",
    t4_svg_w1: "Wow!",

    // T5 - "Oops" (Mistake)
    t5_title: "Oops! Making a Mistake",
    t5_text: "'Oops' and 'Uh-oh' are interjections used when someone makes a mistake or drops something.",
    t5_inst: "Fill in the blank with the correct interjection!",
    t5_h1: "What do you say when you drop a glass?",
    t5_h2: "'Oops' is for a mistake.",
    t5_sent: "___! I dropped the eggs.",
    t5_c1: "Oops", t5_c2: "Hooray", t5_c3: "Yay", t5_c4: "Phew",
    t5_q: "Which interjection is used when you make a small mistake?",
    t5_svg_w1: "Oops!",

    // T6 - "Hey" (Greeting)
    t6_title: "Greetings as Interjections",
    t6_text: "Words like 'Hey', 'Hi', and 'Hello' can act as interjections when used to get someone's attention.",
    t6_inst: "Sort the interjections into the correct categories!",
    t6_h1: "'Hey' is a greeting. 'Ouch' is a feeling.",
    t6_h2: "Put 'Hi' in Greetings.",
    t6_i1: "Hey!", t6_i2: "Hi!", t6_i3: "Ouch!", t6_i4: "Yuck!",
    t6_b1: "Greetings", t6_b2: "Feelings",
    t6_q: "Which of these is an interjection used as a greeting?",
    t6_c1: "Hey!", t6_c2: "Ouch!", t6_c3: "Ugh!", t6_c4: "Oops!",
    t6_svg_l1: "Greetings", t6_svg_r1: "Feelings",

    // T7 - "Ugh" (Disgust)
    t7_title: "Disgust and Annoyance",
    t7_text: "We use 'Ugh', 'Yuck', and 'Ew' to show disgust, dislike, or annoyance.",
    t7_inst: "Order the sentence correctly!",
    t7_h1: "Start with the interjection 'Ugh,'.",
    t7_h2: "Ugh, this milk is sour.",
    t7_w1: "Ugh,", t7_w2: "this", t7_w3: "milk", t7_w4: "is", t7_w5: "sour.",
    t7_q: "Which interjection expresses disgust?",
    t7_c1: "Yuck!", t7_c2: "Wow!", t7_c3: "Yay!", t7_c4: "Phew!",
    t7_svg_w1: "Ugh!",

    // T8 - "Hooray" (Celebration)
    t8_title: "Celebrating Success",
    t8_text: "'Hooray', 'Yay', and 'Woohoo' are used to celebrate or show extreme happiness.",
    t8_inst: "Fill in the blank with the celebration word!",
    t8_h1: "Which word shows excitement for winning?",
    t8_h2: "'Hooray' fits best.",
    t8_sent: "___! Tomorrow is the last day of school.",
    t8_c1: "Hooray", t8_c2: "Ouch", t8_c3: "Oops", t8_c4: "Alas",
    t8_q: "Which interjection expresses celebration?",
    t8_svg_w1: "Hooray!",

    // T9 - "Ouch" (Pain)
    t9_title: "Expressing Pain",
    t9_text: "'Ouch' and 'Ow' are interjections used to express sudden physical pain.",
    t9_inst: "Highlight the interjection in the sentence!",
    t9_h1: "Look for the word that expresses pain.",
    t9_h2: "Highlight 'Ow!'.",
    t9_sent: "Ow! A bee just stung my arm.",
    t9_target: "Ow!",
    t9_q: "Which interjection would you use if you stubbed your toe?",
    t9_c1: "Ouch!", t9_c2: "Wow!", t9_c3: "Hey!", t9_c4: "Yay!",
    t9_svg_w1: "Ow!", t9_svg_w2: "Ouch!",

    // T10 - "Hmm" (Thinking)
    t10_title: "Thinking and Hesitation",
    t10_text: "Words like 'Hmm', 'Uh', and 'Um' are interjections that show hesitation or that you are thinking.",
    t10_inst: "Match the interjections to their purpose!",
    t10_h1: "'Hmm' goes with Thinking.",
    t10_h2: "'Yay' goes with Celebration.",
    t10_l1: "Hmm...", t10_r1: "Thinking",
    t10_l2: "Yay!", t10_r2: "Celebration",
    t10_l3: "Ew!", t10_r3: "Disgust",
    t10_q: "Which interjection shows that someone is thinking?",
    t10_c1: "Hmm", t10_c2: "Ouch", t10_c3: "Oops", t10_c4: "Hooray",
    t10_svg_icon: "🤔", t10_svg_lbl: "Hmm...",

    // T11 - Punctuation Rules
    t11_title: "Punctuation Rules",
    t11_text: "If an interjection is followed by an exclamation mark, the next word MUST start with a capital letter. 'Ouch! My foot hurts.'",
    t11_inst: "Fill in the blank with the correct capitalization!",
    t11_h1: "Look at the punctuation before the blank. It is an exclamation mark (!).",
    t11_h2: "Use the capital 'That'.",
    t11_sent: "Wow! ___ was a great movie.",
    t11_c1: "That", t11_c2: "that", t11_c3: "the", t11_c4: "it",
    t11_q: "What must follow a strong interjection (ending in '!')?",
    t11_qc1: "A capital letter", t11_qc2: "A comma", t11_qc3: "A lowercase letter", t11_qc4: "A semicolon",
    t11_svg_p1: "Wow!", t11_svg_p2: "It is big.",

    // T12 - Interjections in Dialogue
    t12_title: "Interjections in Quotes",
    t12_text: "Interjections are very common in spoken dialogue. '\"Oops, I dropped it,\" said Tim.'",
    t12_inst: "Build the dialogue sentence!",
    t12_h1: "Start with the quotation marks.",
    t12_h2: "“Wow, that is huge,” she said.",
    t12_p1: "“Wow,", t12_p2: "that is", t12_p3: "huge,”", t12_p4: "she said.",
    t12_q: "Where do we most often find interjections?",
    t12_c1: "In spoken dialogue", t12_c2: "In formal essays", t12_c3: "In science reports", t12_c4: "In legal documents",
    t12_svg_w1: "Dialogue",

    // T13 - Formal vs Informal
    t13_title: "Formal vs Informal",
    t13_text: "Most interjections are informal. You wouldn't write 'Yuck!' in a science essay. Some, like 'Alas', are formal and old-fashioned.",
    t13_inst: "Sort the interjections by formality!",
    t13_h1: "'Alas' and 'Indeed' are formal. 'Yuck' is informal.",
    t13_h2: "Put 'Yay' in Informal.",
    t13_i1: "Alas", t13_i2: "Indeed", t13_i3: "Yuck", t13_i4: "Yay",
    t13_b1: "Formal / Old", t13_b2: "Informal",
    t13_q: "Which interjection is considered formal and old-fashioned?",
    t13_c1: "Alas", t13_c2: "Yay", t13_c3: "Oops", t13_c4: "Ew",
    t13_svg_l1: "Formal", t13_svg_r1: "Informal",

    // T14 - Choosing the Right Interjection
    t14_title: "Context Clues",
    t14_text: "You must choose the right interjection based on the context of the sentence.",
    t14_inst: "Fill in the blank with the best interjection!",
    t14_h1: "The speaker is finding out they failed a test.",
    t14_h2: "They are upset, so use 'Oh no!'.",
    t14_sent: "___ I failed my math test.",
    t14_c1: "Oh no!", t14_c2: "Hooray!", t14_c3: "Yay!", t14_c4: "Wow!",
    t14_q: "If someone spills milk, what are they most likely to say?",
    t14_qc1: "Oops!", t14_qc2: "Hooray!", t14_qc3: "Yay!", t14_qc4: "Wow!",
    t14_svg_w1: "Context",

    // T15 - Mixed Review
    t15_title: "Interjection Mastery",
    t15_text: "Review time! Combine what you know about emotion, punctuation, and capitalization.",
    t15_inst: "Put the sentence parts in the correct order!",
    t15_h1: "Start with the strong interjection.",
    t15_h2: "Ouch! That bee stung me.",
    t15_p1: "Ouch!", t15_p2: "That", t15_p3: "bee", t15_p4: "stung", t15_p5: "me.",
    t15_q: "Which sentence is punctuated correctly?",
    t15_c1: "Wow! That is amazing.", t15_c2: "Wow! that is amazing.", t15_c3: "Wow, That is amazing.", t15_c4: "wow! That is amazing.",
    t15_svg_icon: "🏆", t15_svg_lbl: "Mastery",
  }
};

export const INTERJECTION_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{ text: "t1_svg_1", color: "#1e293b", bg: "#DBEAFE" }, { text: "t1_svg_2", color: "#1e293b", bg: "#FECACA" }] },
    hintKey: "t1_h1",
    interactive: { type: "gap-fill", sentence: "t1_sent", choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], correctIndex: 0, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { question: "t1_q", choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], answer: "t1_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "simple-icon", icon: "t2_svg_icon", title: "t2_svg_lbl", color: "#EF4444" },
    hintKey: "t2_h1",
    interactive: { type: "highlight-text", tokens: ["t2_sent"], correctIndices: [0], instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2" },
    quiz: { question: "t2_q", choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], answer: "t2_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "simple-icon", icon: "t3_svg_icon", title: "t3_svg_lbl", color: "#3B82F6" },
    hintKey: "t3_h1",
    interactive: { type: "highlight-text", tokens: ["t3_sent"], correctIndices: [0], instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2" },
    quiz: { question: "t3_q", choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"], answer: "t3_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "t4_svg_w1", color: "#F59E0B" },
    hintKey: "t4_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t4_l1", right: "t4_r1" }, { left: "t4_l2", right: "t4_r2" }, { left: "t4_l3", right: "t4_r3" }],
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2" },
    quiz: { question: "t4_q", choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"], answer: "t4_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "t5_svg_w1", color: "#8B5CF6" },
    hintKey: "t5_h1",
    interactive: { type: "gap-fill", sentence: "t5_sent", choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"], correctIndex: 0, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { question: "t5_q", choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"], answer: "t5_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "two-groups", left: { items: ["t6_i1", "t6_i2"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t6_i3", "t6_i4"], bg: "#FCE7F3", border: "#EC4899" } },
    hintKey: "t6_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b1" }, { text: "t6_i3", bucketId: "b2" }, { text: "t6_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t6_b1" }, { id: "b2", label: "t6_b2" }],
      instruction: "t6_inst",
      hint1: "t6_h1",
      hint2: "t6_h2" },
    quiz: { question: "t6_q", choices: ["t6_c1", "t6_c2", "t6_c3", "t6_c4"], answer: "t6_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "word-display", word: "t7_svg_w1", color: "#10B981" },
    hintKey: "t7_h1",
    interactive: { type: "word-order", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5"], correctOrder: [0, 1, 2, 3, 4],
      instruction: "t7_inst",
      hint1: "t7_h1",
      hint2: "t7_h2" },
    quiz: { question: "t7_q", choices: ["t7_c1", "t7_c2", "t7_c3", "t7_c4"], answer: "t7_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "word-display", word: "t8_svg_w1", color: "#F43F5E" },
    hintKey: "t8_h1",
    interactive: { type: "gap-fill", sentence: "t8_sent", choices: ["t8_c1", "t8_c2", "t8_c3", "t8_c4"], correctIndex: 0, instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { question: "t8_q", choices: ["t8_c1", "t8_c2", "t8_c3", "t8_c4"], answer: "t8_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "t9_svg_w1", color: "#1e293b", bg: "#FECACA" }, { text: "t9_svg_w2", color: "#1e293b", bg: "#FCA5A5" }] },
    hintKey: "t9_h1",
    interactive: { type: "highlight-text", tokens: ["t9_sent"], correctIndices: [0], instruction: "t9_inst",
      hint1: "t9_h1",
      hint2: "t9_h2" },
    quiz: { question: "t9_q", choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"], answer: "t9_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "simple-icon", icon: "t10_svg_icon", title: "t10_svg_lbl", color: "#6366F1" },
    hintKey: "t10_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t10_l1", right: "t10_r1" }, { left: "t10_l2", right: "t10_r2" }, { left: "t10_l3", right: "t10_r3" }],
      instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2" },
    quiz: { question: "t10_q", choices: ["t10_c1", "t10_c2", "t10_c3", "t10_c4"], answer: "t10_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "sentence-display", words: ["t11_svg_p1", "t11_svg_p2"], color: "#1e293b" },
    hintKey: "t11_h1",
    interactive: { type: "gap-fill", sentence: "t11_sent", choices: ["t11_c1", "t11_c2", "t11_c3", "t11_c4"], correctIndex: 0, instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { question: "t11_q", choices: ["t11_qc1", "t11_qc2", "t11_qc3", "t11_qc4"], answer: "t11_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "word-display", word: "t12_svg_w1", color: "#06B6D4" },
    hintKey: "t12_h1",
    interactive: { type: "sentence-build", fragments: ["t12_p1", "t12_p2", "t12_p3", "t12_p4"],
      instruction: "t12_inst",
      hint1: "t12_h1",
      hint2: "t12_h2" },
    quiz: { question: "t12_q", choices: ["t12_c1", "t12_c2", "t12_c3", "t12_c4"], answer: "t12_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "two-groups", left: { items: ["t13_i1", "t13_i2"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t13_i3", "t13_i4"], bg: "#FEF3C7", border: "#F59E0B" } },
    hintKey: "t13_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t13_i1", bucketId: "b1" }, { text: "t13_i2", bucketId: "b1" }, { text: "t13_i3", bucketId: "b2" }, { text: "t13_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t13_b1" }, { id: "b2", label: "t13_b2" }],
      instruction: "t13_inst",
      hint1: "t13_h1",
      hint2: "t13_h2" },
    quiz: { question: "t13_q", choices: ["t13_c1", "t13_c2", "t13_c3", "t13_c4"], answer: "t13_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "word-display", word: "t14_svg_w1", color: "#8B5CF6" },
    hintKey: "t14_h1",
    interactive: { type: "gap-fill", sentence: "t14_sent", choices: ["t14_c1", "t14_c2", "t14_c3", "t14_c4"], correctIndex: 0, instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { question: "t14_q", choices: ["t14_qc1", "t14_qc2", "t14_qc3", "t14_qc4"], answer: "t14_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "t15_svg_icon", title: "t15_svg_lbl", color: "#F59E0B" },
    hintKey: "t15_h1",
    interactive: { type: "sentence-build", fragments: ["t15_p1", "t15_p2", "t15_p3", "t15_p4", "t15_p5"],
      instruction: "t15_inst",
      hint1: "t15_h1",
      hint2: "t15_h2" },
    quiz: { question: "t15_q", choices: ["t15_c1", "t15_c2", "t15_c3", "t15_c4"], answer: "t15_c1" }
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// i3 — TENSE TEMPLE
// Topics: Present perfect, past perfect, future perfect, tense consistency, active/passive voice
// ═══════════════════════════════════════════════════════════════════════════

export const TENSE5_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Tense Temple",

    // T1 - Present Perfect Intro
    t1_title: "Present Perfect",
    t1_text: "The present perfect tense describes an action that happened at an unspecified time before now. Use 'have' or 'has' + the past participle. 'I have walked.'",
    t1_inst: "Build the present perfect sentence!",
    t1_h1: "Start with the pronoun 'They'.",
    t1_h2: "They have finished.",
    t1_p1: "They", t1_p2: "have", t1_p3: "finished", t1_p4: "the test.",
    t1_q: "Which helping verbs are used in the present perfect tense?",
    t1_c1: "have / has", t1_c2: "had", t1_c3: "will have", t1_c4: "was / were",
    t1_svg_1: "have", t1_svg_2: "walked",

    // T2 - Regular Past Participles
    t2_title: "Regular Past Participles",
    t2_text: "For regular verbs, the past participle is the same as the past tense (ends in -ed). Example: play -> played. 'I have played.'",
    t2_inst: "Fill in the blank with the present perfect tense!",
    t2_h1: "Use 'have' + 'played'.",
    t2_h2: "We have played.",
    t2_sent: "We ___ soccer all afternoon.",
    t2_c1: "have played", t2_c2: "has play", t2_c3: "had playing", t2_c4: "have play",
    t2_q: "What is the past participle of the regular verb 'jump'?",
    t2_qc1: "jumped", t2_qc2: "jump", t2_qc3: "jumping", t2_qc4: "jumps",
    t2_svg_w1: "-ed",

    // T3 - Irregular Past Participles
    t3_title: "Irregular Past Participles",
    t3_text: "Many common verbs are irregular. Their past participles don't end in -ed! Example: go -> gone, see -> seen, do -> done.",
    t3_inst: "Match the verb to its irregular past participle!",
    t3_h1: "'go' matches with 'gone'.",
    t3_h2: "'see' matches with 'seen'.",
    t3_l1: "go", t3_r1: "gone",
    t3_l2: "see", t3_r2: "seen",
    t3_l3: "do", t3_r3: "done",
    t3_q: "What is the past participle of 'write'?",
    t3_c1: "written", t3_c2: "wrote", t3_c3: "writed", t3_c4: "writing",
    t3_svg_w1: "Irregular",

    // T4 - Present Perfect (Experience)
    t4_title: "Life Experiences",
    t4_text: "We often use the present perfect to talk about life experiences. 'I have visited France.' It means sometime in your life up to now.",
    t4_inst: "Put the words in order!",
    t4_h1: "Start with 'She has'.",
    t4_h2: "She has visited London.",
    t4_w1: "She", t4_w2: "has", t4_w3: "visited", t4_w4: "London.",
    t4_q: "Which sentence talks about a life experience using present perfect?",
    t4_c1: "I have eaten sushi.", t4_c2: "I ate sushi yesterday.", t4_c3: "I will eat sushi.", t4_c4: "I am eating sushi.",
    t4_svg_lbl: "Experience",

    // T5 - Present Perfect (Recent Past)
    t5_title: "Recent Actions",
    t5_text: "We use present perfect with 'just' to talk about something that happened very recently. 'She has just left the building.'",
    t5_inst: "Highlight the word that shows it happened recently!",
    t5_h1: "Find the word 'just'.",
    t5_h2: "Highlight 'just'.",
    t5_sent: "The train has just arrived at the station.",
    t5_target: "just",
    t5_q: "Which word is often used with present perfect to show a very recent action?",
    t5_c1: "just", t5_c2: "yesterday", t5_c3: "tomorrow", t5_c4: "never",
    t5_svg_w1: "just",

    // T6 - Ever, Never, Already, Yet
    t6_title: "Ever, Never, Already, Yet",
    t6_text: "These words frequently travel with the present perfect. 'Have you EVER seen a ghost?' 'I have ALREADY finished my homework.'",
    t6_inst: "Fill in the blank with the correct word!",
    t6_h1: "The sentence is negative.",
    t6_h2: "Use 'yet' at the end of a negative sentence.",
    t6_sent: "I haven't cleaned my room ___.",
    t6_c1: "yet", t6_c2: "already", t6_c3: "just", t6_c4: "ever",
    t6_q: "Which word means 'at any time in your life'?",
    t6_qc1: "ever", t6_qc2: "never", t6_qc3: "already", t6_qc4: "yet",
    t6_svg_l1: "Already", t6_svg_r1: "Yet",

    // T7 - Past Perfect Intro
    t7_title: "Past Perfect",
    t7_text: "The past perfect describes an action that finished BEFORE another action in the past. Use 'had' + past participle. 'I had finished my dinner before he arrived.'",
    t7_inst: "Build the past perfect sentence!",
    t7_h1: "Use 'had' before the past participle.",
    t7_h2: "He had left early.",
    t7_p1: "He", t7_p2: "had", t7_p3: "left", t7_p4: "early.",
    t7_q: "Which helping verb is used in the past perfect tense?",
    t7_c1: "had", t7_c2: "have", t7_c3: "has", t7_c4: "will have",
    t7_svg_1: "had", t7_svg_2: "finished",

    // T8 - Sequence of Past Events
    t8_title: "Sequence of Events",
    t8_text: "Use past perfect for the older action, and simple past for the newer action. 'By the time I WOKE up (newer), the sun HAD RISEN (older).'",
    t8_inst: "Fill in the blank with the older action!",
    t8_h1: "The older action needs past perfect (had + pp).",
    t8_h2: "had started.",
    t8_sent: "When we arrived, the movie ___ ___.",
    t8_c1: "had started", t8_c2: "has started", t8_c3: "started", t8_c4: "will start",
    t8_q: "In a sentence with past perfect and simple past, which tense happened first?",
    t8_qc1: "past perfect", t8_qc2: "simple past", t8_qc3: "they happen at the same time", t8_qc4: "neither",
    t8_svg_w1: "Older Action",

    // T9 - Future Perfect Intro
    t9_title: "Future Perfect",
    t9_text: "The future perfect describes an action that will be finished BEFORE a certain time in the future. Use 'will have' + past participle.",
    t9_inst: "Order the words to make a future perfect phrase!",
    t9_h1: "will + have + past participle.",
    t9_h2: "will have finished.",
    t9_w1: "will", t9_w2: "have", t9_w3: "finished",
    t9_q: "Which of these is in the future perfect tense?",
    t9_c1: "will have gone", t9_c2: "will go", t9_c3: "had gone", t9_c4: "have gone",
    t9_svg_w1: "will have",

    // T10 - Future Perfect Deadline
    t10_title: "Deadlines in the Future",
    t10_text: "We often use future perfect with words like 'by'. 'By tomorrow, I will have finished my project.'",
    t10_inst: "Highlight the deadline phrase!",
    t10_h1: "Find the words that tell us WHEN it will be done.",
    t10_h2: "Highlight 'By tomorrow,'.",
    t10_sent: "By tomorrow, we will have painted the room.",
    t10_target: "By tomorrow,",
    t10_q: "What does future perfect show?",
    t10_qc1: "An action completed before a future deadline", t10_qc2: "An action happening right now", t10_qc3: "A routine action in the future", t10_qc4: "An action that happened in the past",
    t10_svg_lbl: "Deadline",

    // T11 - Tense Consistency
    t11_title: "Tense Consistency",
    t11_text: "When writing a paragraph, don't switch tenses randomly! If you start in the past tense, stay in the past tense.",
    t11_inst: "Fill in the blank to keep the tense consistent!",
    t11_h1: "The first sentence is in the past ('walked'). The second must also be past.",
    t11_h2: "Use 'saw'.",
    t11_sent: "I walked to the park. Suddenly, I ___ a huge dog.",
    t11_c1: "saw", t11_c2: "see", t11_c3: "will see", t11_c4: "have seen",
    t11_q: "Why is it important to maintain tense consistency?",
    t11_qc1: "It prevents confusing the reader.", t11_qc2: "It makes the story shorter.", t11_qc3: "It uses more vocabulary.", t11_qc4: "It sounds more poetic.",
    t11_svg_w1: "Consistency",

    // T12 - Shifting Tenses Mistake
    t12_title: "Fix the Shift",
    t12_text: "A common mistake is shifting from past to present. Incorrect: 'She OPENED the door and LOOKS inside.' Correct: 'She OPENED the door and LOOKED inside.'",
    t12_inst: "Match the incorrect shift to its corrected version!",
    t12_h1: "Make both verbs past tense.",
    t12_h2: "He ran and jumps -> He ran and jumped.",
    t12_l1: "He ran and jumps.", t12_r1: "He ran and jumped.",
    t12_l2: "She smiled and says hi.", t12_r2: "She smiled and said hi.",
    t12_l3: "I look and saw it.", t12_r3: "I looked and saw it.",
    t12_q: "Identify the incorrect shift: 'The cat jumped on the table and knocks over the glass.'",
    t12_c1: "jumped / knocks", t12_c2: "cat / glass", t12_c3: "on / over", t12_c4: "table / glass",
    t12_svg_l1: "Incorrect", t12_svg_r1: "Correct",

    // T13 - Active Voice
    t13_title: "Active Voice",
    t13_text: "In the active voice, the subject of the sentence DOES the action. 'The dog chased the ball.' (The dog is doing the chasing).",
    t13_inst: "Sort the sentences into Active or Passive!",
    t13_h1: "Active: Subject does it. Passive: Subject receives it.",
    t13_h2: "The boy kicks the ball (Active).",
    t13_i1: "The chef baked a cake.", t13_i2: "The boy caught the fish.", t13_i3: "The cake was baked.", t13_i4: "The fish was caught.",
    t13_b1: "Active 🏃", t13_b2: "Passive 🛡️",
    t13_q: "In an active sentence, what does the subject do?",
    t13_c1: "Performs the action", t13_c2: "Receives the action", t13_c3: "Nothing", t13_c4: "Describes the noun",
    t13_svg_l1: "Active", t13_svg_r1: "Passive",

    // T14 - Passive Voice
    t14_title: "Passive Voice",
    t14_text: "In the passive voice, the subject RECEIVES the action. It is acted upon. 'The ball was chased by the dog.'",
    t14_inst: "Fill in the blank to make the sentence passive!",
    t14_h1: "Use the 'to be' verb + past participle.",
    t14_h2: "was eaten.",
    t14_sent: "The pizza ___ ___ by the kids.",
    t14_c1: "was eaten", t14_c2: "ate", t14_c3: "has eating", t14_c4: "eats",
    t14_q: "Which of the following is in the passive voice?",
    t14_qc1: "The car was washed.", t14_qc2: "I washed the car.", t14_qc3: "The dog barks.", t14_qc4: "She reads a book.",
    t14_svg_w1: "Passive",

    // T15 - Active vs Passive
    t15_title: "When to use which?",
    t15_text: "Active voice is usually clearer and stronger. Use passive voice when the person doing the action is unknown or unimportant. 'The bank was robbed.'",
    t15_inst: "Build a strong ACTIVE sentence!",
    t15_h1: "Start with who did it: 'The cat'.",
    t15_h2: "The cat caught the mouse.",
    t15_w1: "The", t15_w2: "cat", t15_w3: "caught", t15_w4: "the", t15_w5: "mouse.",
    t15_q: "Why do writers usually prefer the active voice?",
    t15_c1: "It is more direct and energetic.", t15_c2: "It hides who did the action.", t15_c3: "It is longer and fancier.", t15_c4: "It uses more helping verbs.",
    t15_svg_icon: "⚖️", t15_svg_lbl: "Active vs Passive",
  }
};

export const TENSE5_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{ text: "t1_svg_1", color: "#1e293b", bg: "#DBEAFE" }, { text: "t1_svg_2", color: "#1e293b", bg: "#FEF3C7" }] },
    hintKey: "t1_h1",
    interactive: { type: "sentence-build", fragments: ["t1_p1", "t1_p2", "t1_p3", "t1_p4"],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2" },
    quiz: { question: "t1_q", choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], answer: "t1_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "word-display", word: "t2_svg_w1", color: "#3B82F6" },
    hintKey: "t2_h1",
    interactive: { type: "gap-fill", sentence: "t2_sent", choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { question: "t2_q", choices: ["t2_qc1", "t2_qc2", "t2_qc3", "t2_qc4"], answer: "t2_qc1" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "t3_svg_w1", color: "#EF4444" },
    hintKey: "t3_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t3_l1", right: "t3_r1" }, { left: "t3_l2", right: "t3_r2" }, { left: "t3_l3", right: "t3_r3" }],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2" },
    quiz: { question: "t3_q", choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"], answer: "t3_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🌍", title: "t4_svg_lbl", color: "#10B981" },
    hintKey: "t4_h1",
    interactive: { type: "word-order", words: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"], correctOrder: [0, 1, 2, 3],
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2" },
    quiz: { question: "t4_q", choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"], answer: "t4_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "t5_svg_w1", color: "#F59E0B" },
    hintKey: "t5_h1",
    interactive: { type: "highlight-text", tokens: ["t5_sent"], correctIndices: [0], instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2" },
    quiz: { question: "t5_q", choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"], answer: "t5_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "two-groups", left: { items: ["t6_svg_l1"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t6_svg_r1"], bg: "#FCE7F3", border: "#EC4899" } },
    hintKey: "t6_h1",
    interactive: { type: "gap-fill", sentence: "t6_sent", choices: ["t6_c1", "t6_c2", "t6_c3", "t6_c4"], correctIndex: 0, instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { question: "t6_q", choices: ["t6_qc1", "t6_qc2", "t6_qc3", "t6_qc4"], answer: "t6_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "text-bubbles", items: [{ text: "t7_svg_1", color: "#1e293b", bg: "#FEF3C7" }, { text: "t7_svg_2", color: "#1e293b", bg: "#D1FAE5" }] },
    hintKey: "t7_h1",
    interactive: { type: "sentence-build", fragments: ["t7_p1", "t7_p2", "t7_p3", "t7_p4"],
      instruction: "t7_inst",
      hint1: "t7_h1",
      hint2: "t7_h2" },
    quiz: { question: "t7_q", choices: ["t7_c1", "t7_c2", "t7_c3", "t7_c4"], answer: "t7_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "word-display", word: "t8_svg_w1", color: "#6366F1" },
    hintKey: "t8_h1",
    interactive: { type: "gap-fill", sentence: "t8_sent", choices: ["t8_c1", "t8_c2", "t8_c3", "t8_c4"], correctIndex: 0, instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { question: "t8_q", choices: ["t8_qc1", "t8_qc2", "t8_qc3", "t8_qc4"], answer: "t8_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "word-display", word: "t9_svg_w1", color: "#8B5CF6" },
    hintKey: "t9_h1",
    interactive: { type: "word-order", words: ["t9_w1", "t9_w2", "t9_w3"], correctOrder: [0, 1, 2],
      instruction: "t9_inst",
      hint1: "t9_h1",
      hint2: "t9_h2" },
    quiz: { question: "t9_q", choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"], answer: "t9_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "simple-icon", icon: "⏳", title: "t10_svg_lbl", color: "#F43F5E" },
    hintKey: "t10_h1",
    interactive: { type: "highlight-text", tokens: ["t10_sent"], correctIndices: [0], instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2" },
    quiz: { question: "t10_q", choices: ["t10_qc1", "t10_qc2", "t10_qc3", "t10_qc4"], answer: "t10_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "word-display", word: "t11_svg_w1", color: "#14B8A6" },
    hintKey: "t11_h1",
    interactive: { type: "gap-fill", sentence: "t11_sent", choices: ["t11_c1", "t11_c2", "t11_c3", "t11_c4"], correctIndex: 0, instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { question: "t11_q", choices: ["t11_qc1", "t11_qc2", "t11_qc3", "t11_qc4"], answer: "t11_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "two-groups", left: { items: ["t12_svg_l1"], bg: "#FECACA", border: "#EF4444" }, right: { items: ["t12_svg_r1"], bg: "#D1FAE5", border: "#10B981" } },
    hintKey: "t12_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t12_l1", right: "t12_r1" }, { left: "t12_l2", right: "t12_r2" }, { left: "t12_l3", right: "t12_r3" }],
      instruction: "t12_inst",
      hint1: "t12_h1",
      hint2: "t12_h2" },
    quiz: { question: "t12_q", choices: ["t12_c1", "t12_c2", "t12_c3", "t12_c4"], answer: "t12_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "two-groups", left: { items: ["t13_i1", "t13_i2"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t13_i3", "t13_i4"], bg: "#FEF3C7", border: "#F59E0B" } },
    hintKey: "t13_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t13_i1", bucketId: "b1" }, { text: "t13_i2", bucketId: "b1" }, { text: "t13_i3", bucketId: "b2" }, { text: "t13_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t13_b1" }, { id: "b2", label: "t13_b2" }],
      instruction: "t13_inst",
      hint1: "t13_h1",
      hint2: "t13_h2" },
    quiz: { question: "t13_q", choices: ["t13_c1", "t13_c2", "t13_c3", "t13_c4"], answer: "t13_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "word-display", word: "t14_svg_w1", color: "#A855F7" },
    hintKey: "t14_h1",
    interactive: { type: "gap-fill", sentence: "t14_sent", choices: ["t14_c1", "t14_c2", "t14_c3", "t14_c4"], correctIndex: 0, instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { question: "t14_q", choices: ["t14_qc1", "t14_qc2", "t14_qc3", "t14_qc4"], answer: "t14_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "t15_svg_icon", title: "t15_svg_lbl", color: "#3B82F6" },
    hintKey: "t15_h1",
    interactive: { type: "word-order", words: ["t15_w1", "t15_w2", "t15_w3", "t15_w4", "t15_w5"], correctOrder: [0, 1, 2, 3, 4],
      instruction: "t15_inst",
      hint1: "t15_h1",
      hint2: "t15_h2" },
    quiz: { question: "t15_q", choices: ["t15_c1", "t15_c2", "t15_c3", "t15_c4"], answer: "t15_c1" }
  }
];
// ═══════════════════════════════════════════════════════════════════════════
// i4 — SENTENCE SUMMIT
// Topics: independent vs dependent clauses, subordinate clauses, relative clauses,
//         noun clauses, adverbial clauses, sentence structure (simple/compound/complex)
// ═══════════════════════════════════════════════════════════════════════════

export const SENTENCE5_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Sentence Summit",

    // T1 - Independent Clause
    t1_title: "Independent Clauses",
    t1_text: "An independent clause is a complete thought. It has a subject and a verb, and it can stand alone as a sentence. Example: 'The sun is shining.'",
    t1_inst: "Highlight the independent clause!",
    t1_h1: "Find the part that makes sense all by itself.",
    t1_h2: "Highlight 'I wore a jacket'.",
    t1_sent: "Because it was cold, I wore a jacket.",
    t1_target: "I wore a jacket.",
    t1_q: "What makes an independent clause different from a dependent clause?",
    t1_c1: "It can stand alone as a complete sentence.", t1_c2: "It is always very long.", t1_c3: "It has no verbs.", t1_c4: "It starts with 'because'.",
    t1_svg_w1: "Independent",

    // T2 - Dependent Clause
    t2_title: "Dependent Clauses",
    t2_text: "A dependent clause has a subject and a verb, but it CANNOT stand alone. It usually starts with a subordinating word like 'because', 'if', or 'when'.",
    t2_inst: "Fill in the blank with a subordinating word!",
    t2_h1: "Which word makes the clause dependent?",
    t2_h2: "Use 'When'.",
    t2_sent: "___ the bell rings, we will leave.",
    t2_c1: "When", t2_c2: "The", t2_c3: "Run", t2_c4: "It",
    t2_q: "Which of the following is a dependent clause?",
    t2_qc1: "If it rains tomorrow", t2_qc2: "The dog barked loudly", t2_qc3: "She went to the store", t2_qc4: "I like pizza",
    t2_svg_w1: "Dependent",

    // T3 - Indep vs Depend Sort
    t3_title: "Clause Sorter",
    t3_text: "Let's test your skills! Sort these clauses into Independent (stands alone) and Dependent (needs help).",
    t3_inst: "Sort the clauses into the correct buckets!",
    t3_h1: "If it starts with 'because' or 'although', it is dependent.",
    t3_h2: "'I am happy' is independent.",
    t3_b1: "Independent ✅", t3_b2: "Dependent ❌",
    t3_i1: "I like cats", t3_i2: "He ran fast", t3_i3: "because I was late", t3_i4: "when she arrived",
    t3_q: "Is 'although he was tired' independent or dependent?",
    t3_qc1: "Dependent", t3_qc2: "Independent", t3_qc3: "Both", t3_qc4: "Neither",
    t3_svg_l1: "Independent", t3_svg_r1: "Dependent",

    // T4 - Relative Clauses (who)
    t4_title: "Relative Clauses: Who",
    t4_text: "A relative clause gives more info about a noun. We use 'who' to give more information about PEOPLE. 'The boy WHO won the race is my friend.'",
    t4_inst: "Fill in the blank!",
    t4_h1: "The sentence is about a person (the girl).",
    t4_h2: "Use 'who'.",
    t4_sent: "The girl ___ sits next to me is nice.",
    t4_c1: "who", t4_c2: "which", t4_c3: "where", t4_c4: "when",
    t4_q: "Which relative pronoun is used for people?",
    t4_qc1: "who", t4_qc2: "which", t4_qc3: "whose", t4_qc4: "where",
    t4_svg_w1: "who",

    // T5 - Relative Clauses (which)
    t5_title: "Relative Clauses: Which",
    t5_text: "We use 'which' to give more information about THINGS or ANIMALS. 'The book, WHICH is on the table, is mine.'",
    t5_inst: "Choose the correct relative pronoun!",
    t5_h1: "The sentence is about a thing (the car).",
    t5_h2: "Use 'which'.",
    t5_sent: "The car, ___ is painted red, is very fast.",
    t5_c1: "which", t5_c2: "who", t5_c3: "whom", t5_c4: "where",
    t5_q: "Which relative pronoun is used for things?",
    t5_qc1: "which", t5_qc2: "who", t5_qc3: "whom", t5_qc4: "whoever",
    t5_svg_w1: "which",

    // T6 - Relative Clauses (that)
    t6_title: "Relative Clauses: That",
    t6_text: "We use 'that' for essential (restrictive) information about people or things. Do NOT use commas with 'that'. 'The house THAT has a red door is mine.'",
    t6_inst: "Build the sentence!",
    t6_h1: "Start with 'The dog'.",
    t6_h2: "The dog that barks is mine.",
    t6_w1: "The", t6_w2: "dog", t6_w3: "that", t6_w4: "barks", t6_w5: "is", t6_w6: "mine.",
    t6_q: "Do we use commas around a relative clause starting with 'that'?",
    t6_qc1: "No", t6_qc2: "Yes", t6_qc3: "Only at the end", t6_qc4: "Only at the beginning",
    t6_svg_w1: "that",

    // T7 - Noun Clauses
    t7_title: "Noun Clauses",
    t7_text: "A noun clause is a dependent clause that acts like a noun (a subject or an object). 'I know THAT YOU ARE TIRED.'",
    t7_inst: "Highlight the noun clause!",
    t7_h1: "Find the part that answers 'what do you believe?'.",
    t7_h2: "Highlight 'that she will win'.",
    t7_sent: "I believe that she will win.",
    t7_target: "that she will win.",
    t7_q: "What role does a noun clause play in a sentence?",
    t7_c1: "It acts as a noun (subject or object).", t7_c2: "It acts as a verb.", t7_c3: "It describes an adjective.", t7_c4: "It replaces a preposition.",
    t7_svg_w1: "Noun Clause",

    // T8 - Adverbial Clauses (Time)
    t8_title: "Adverbial Clauses of Time",
    t8_text: "These clauses tell us WHEN something happens. They start with words like when, while, after, before, until.",
    t8_inst: "Match the time conjunction to its meaning!",
    t8_h1: "'before' means earlier. 'while' means at the same time.",
    t8_h2: "'after' means later.",
    t8_l1: "before", t8_r1: "earlier than",
    t8_l2: "while", t8_r2: "at the same time",
    t8_l3: "after", t8_r3: "later than",
    t8_q: "Which of the following is an adverbial clause of time?",
    t8_c1: "When the sun set", t8_c2: "Because I was cold", t8_c3: "If it rains", t8_c4: "That he is smart",
    t8_svg_w1: "Time",

    // T9 - Adverbial Clauses (Reason)
    t9_title: "Adverbial Clauses of Reason",
    t9_text: "These clauses tell us WHY something happens. They start with words like because, since, or as.",
    t9_inst: "Fill in the blank with a reason word!",
    t9_h1: "Which word explains why?",
    t9_h2: "Use 'since'.",
    t9_sent: "We stayed home ___ it was raining.",
    t9_c1: "since", t9_c2: "while", t9_c3: "unless", t9_c4: "before",
    t9_q: "What question does an adverbial clause of reason answer?",
    t9_qc1: "Why?", t9_qc2: "When?", t9_qc3: "Where?", t9_qc4: "How?",
    t9_svg_w1: "Reason",

    // T10 - Adverbial Clauses (Condition)
    t10_title: "Adverbial Clauses of Condition",
    t10_text: "These clauses tell us UNDER WHAT CONDITIONS something happens. They start with if, unless, or as long as.",
    t10_inst: "Put the sentence in the correct order!",
    t10_h1: "Start with 'If'.",
    t10_h2: "If you study, you will pass.",
    t10_w1: "If", t10_w2: "you", t10_w3: "study,", t10_w4: "you", t10_w5: "will", t10_w6: "pass.",
    t10_q: "Which word starts an adverbial clause of condition?",
    t10_c1: "unless", t10_c2: "because", t10_c3: "where", t10_c4: "although",
    t10_svg_w1: "Condition",

    // T11 - Adverbial Clauses (Concession)
    t11_title: "Adverbial Clauses of Concession",
    t11_text: "These clauses show an unexpected contrast. They start with although, even though, or while. 'Although he is small, he is very strong.'",
    t11_inst: "Highlight the concession clause!",
    t11_h1: "Find the part that starts with 'Even though'.",
    t11_h2: "Highlight 'Even though it was raining'.",
    t11_sent: "Even though it was raining, we played outside.",
    t11_target: "Even though it was raining,",
    t11_q: "What does an adverbial clause of concession show?",
    t11_c1: "An unexpected contrast", t11_c2: "The reason for an action", t11_c3: "The time an action happened", t11_c4: "A condition",
    t11_svg_w1: "Concession",

    // T12 - Simple vs Compound
    t12_title: "Simple vs Compound Sentences",
    t12_text: "A simple sentence has one independent clause. A compound sentence joins TWO independent clauses with a FANBOYS conjunction.",
    t12_inst: "Sort the sentences!",
    t12_h1: "Look for FANBOYS (and, but, or) connecting two full sentences.",
    t12_h2: "'I ran and he jumped' is compound.",
    t12_b1: "Simple 📝", t12_b2: "Compound 🔗",
    t12_i1: "The cat slept.", t12_i2: "I like pizza.", t12_i3: "I ran, but she walked.", t12_i4: "We sang, and they danced.",
    t12_q: "How many independent clauses does a compound sentence have?",
    t12_c1: "Two or more", t12_c2: "Exactly one", t12_c3: "Zero", t12_c4: "Only dependent clauses",
    t12_svg_l1: "Simple", t12_svg_r1: "Compound",

    // T13 - Complex Sentences
    t13_title: "Complex Sentences",
    t13_text: "A complex sentence has ONE independent clause and AT LEAST ONE dependent clause. 'When the bell rings (dependent), we leave (independent).'",
    t13_inst: "Match the dependent clause to the independent clause to make a complex sentence!",
    t13_h1: "Match causes to logical results.",
    t13_h2: "If you try hard, you will succeed.",
    t13_l1: "Because it rained,", t13_r1: "the grass is wet.",
    t13_l2: "If you try hard,", t13_r2: "you will succeed.",
    t13_l3: "When she arrived,", t13_r3: "the dog barked.",
    t13_q: "What makes a sentence 'complex'?",
    t13_c1: "One independent clause + one dependent clause", t13_c2: "Two independent clauses", t13_c3: "Only one independent clause", t13_c4: "No verbs",
    t13_svg_w1: "Complex",

    // T14 - Dangling Modifiers
    t14_title: "Dangling Modifiers",
    t14_text: "A dangling modifier is a descriptive phrase that doesn't logically attach to any word in the sentence. INCORRECT: 'Walking to the park, the trees were beautiful.' (Trees don't walk!)",
    t14_inst: "Choose the correct, fixed sentence!",
    t14_h1: "The person walking must be the subject.",
    t14_h2: "Walking to the park, I saw the beautiful trees.",
    t14_sent: "Fix this: 'Eating the pizza, the dog watched.'",
    t14_c1: "Eating the pizza, I watched the dog.", t14_c2: "Eating the pizza, the dog was watching.", t14_c3: "The dog watched eating the pizza.", t14_c4: "Watched the dog, eating the pizza.",
    t14_q: "Why is 'Flying through the air, the boy watched the bird' incorrect?",
    t14_qc1: "It sounds like the boy is flying.", t14_qc2: "It needs a semicolon.", t14_qc3: "It is a compound sentence.", t14_qc4: "Birds can't fly.",
    t14_svg_w1: "Dangling",

    // T15 - Sentence Summit Master
    t15_title: "Summit Master",
    t15_text: "You've climbed the Sentence Summit! Let's build a compound-complex sentence.",
    t15_inst: "Put the sentence parts in order!",
    t15_h1: "Start with the dependent clause: 'Because it was late,'",
    t15_h2: "Because it was late, we went home, and we slept.",
    t15_w1: "Because", t15_w2: "it was late,", t15_w3: "we", t15_w4: "went home,", t15_w5: "and", t15_w6: "we slept.",
    t15_q: "What is a compound-complex sentence?",
    t15_c1: "Two independent clauses + one dependent clause", t15_c2: "One independent clause", t15_c3: "Two dependent clauses", t15_c4: "Only fragments",
    t15_svg_icon: "🏔️", t15_svg_lbl: "Summit",
  }
};

export const SENTENCE5_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "t1_svg_w1", color: "#10B981" },
    hintKey: "t1_h1",
    interactive: { type: "highlight-text", tokens: ["t1_sent"], correctIndices: [0], instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2" },
    quiz: { question: "t1_q", choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], answer: "t1_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "word-display", word: "t2_svg_w1", color: "#EF4444" },
    hintKey: "t2_h1",
    interactive: { type: "gap-fill", sentence: "t2_sent", choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { question: "t2_q", choices: ["t2_qc1", "t2_qc2", "t2_qc3", "t2_qc4"], answer: "t2_qc1" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "two-groups", left: { items: ["t3_svg_l1"], bg: "#D1FAE5", border: "#10B981" }, right: { items: ["t3_svg_r1"], bg: "#FEE2E2", border: "#EF4444" } },
    hintKey: "t3_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t3_i1", bucketId: "b1" }, { text: "t3_i2", bucketId: "b1" }, { text: "t3_i3", bucketId: "b2" }, { text: "t3_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t3_b1" }, { id: "b2", label: "t3_b2" }],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2" },
    quiz: { question: "t3_q", choices: ["t3_qc1", "t3_qc2", "t3_qc3", "t3_qc4"], answer: "t3_qc1" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "t4_svg_w1", color: "#3B82F6" },
    hintKey: "t4_h1",
    interactive: { type: "gap-fill", sentence: "t4_sent", choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"], correctIndex: 0, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { question: "t4_q", choices: ["t4_qc1", "t4_qc2", "t4_qc3", "t4_qc4"], answer: "t4_qc1" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "t5_svg_w1", color: "#8B5CF6" },
    hintKey: "t5_h1",
    interactive: { type: "gap-fill", sentence: "t5_sent", choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"], correctIndex: 0, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { question: "t5_q", choices: ["t5_qc1", "t5_qc2", "t5_qc3", "t5_qc4"], answer: "t5_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "word-display", word: "t6_svg_w1", color: "#F59E0B" },
    hintKey: "t6_h1",
    interactive: { type: "sentence-build", fragments: ["t6_w1", "t6_w2", "t6_w3", "t6_w4", "t6_w5", "t6_w6"],
      instruction: "t6_inst",
      hint1: "t6_h1",
      hint2: "t6_h2" },
    quiz: { question: "t6_q", choices: ["t6_qc1", "t6_qc2", "t6_qc3", "t6_qc4"], answer: "t6_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "word-display", word: "t7_svg_w1", color: "#14B8A6" },
    hintKey: "t7_h1",
    interactive: { type: "highlight-text", tokens: ["t7_sent"], correctIndices: [0], instruction: "t7_inst",
      hint1: "t7_h1",
      hint2: "t7_h2" },
    quiz: { question: "t7_q", choices: ["t7_c1", "t7_c2", "t7_c3", "t7_c4"], answer: "t7_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "word-display", word: "t8_svg_w1", color: "#F43F5E" },
    hintKey: "t8_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }],
      instruction: "t8_inst",
      hint1: "t8_h1",
      hint2: "t8_h2" },
    quiz: { question: "t8_q", choices: ["t8_c1", "t8_c2", "t8_c3", "t8_c4"], answer: "t8_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "word-display", word: "t9_svg_w1", color: "#0EA5E9" },
    hintKey: "t9_h1",
    interactive: { type: "gap-fill", sentence: "t9_sent", choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"], correctIndex: 0, instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { question: "t9_q", choices: ["t9_qc1", "t9_qc2", "t9_qc3", "t9_qc4"], answer: "t9_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "word-display", word: "t10_svg_w1", color: "#EC4899" },
    hintKey: "t10_h1",
    interactive: { type: "sentence-build", fragments: ["t10_w1", "t10_w2", "t10_w3", "t10_w4", "t10_w5", "t10_w6"],
      instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2" },
    quiz: { question: "t10_q", choices: ["t10_c1", "t10_c2", "t10_c3", "t10_c4"], answer: "t10_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "word-display", word: "t11_svg_w1", color: "#84CC16" },
    hintKey: "t11_h1",
    interactive: { type: "highlight-text", tokens: ["t11_sent"], correctIndices: [0], instruction: "t11_inst",
      hint1: "t11_h1",
      hint2: "t11_h2" },
    quiz: { question: "t11_q", choices: ["t11_c1", "t11_c2", "t11_c3", "t11_c4"], answer: "t11_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "two-groups", left: { items: ["t12_svg_l1"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t12_svg_r1"], bg: "#FCE7F3", border: "#EC4899" } },
    hintKey: "t12_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b1" }, { text: "t12_i3", bucketId: "b2" }, { text: "t12_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t12_b1" }, { id: "b2", label: "t12_b2" }],
      instruction: "t12_inst",
      hint1: "t12_h1",
      hint2: "t12_h2" },
    quiz: { question: "t12_q", choices: ["t12_c1", "t12_c2", "t12_c3", "t12_c4"], answer: "t12_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "word-display", word: "t13_svg_w1", color: "#A855F7" },
    hintKey: "t13_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t13_l1", right: "t13_r1" }, { left: "t13_l2", right: "t13_r2" }, { left: "t13_l3", right: "t13_r3" }],
      instruction: "t13_inst",
      hint1: "t13_h1",
      hint2: "t13_h2" },
    quiz: { question: "t13_q", choices: ["t13_c1", "t13_c2", "t13_c3", "t13_c4"], answer: "t13_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "word-display", word: "t14_svg_w1", color: "#EF4444" },
    hintKey: "t14_h1",
    interactive: { type: "gap-fill", sentence: "t14_sent", choices: ["t14_c1", "t14_c2", "t14_c3", "t14_c4"], correctIndex: 0, instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { question: "t14_q", choices: ["t14_qc1", "t14_qc2", "t14_qc3", "t14_qc4"], answer: "t14_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "t15_svg_icon", title: "t15_svg_lbl", color: "#F59E0B" },
    hintKey: "t15_h1",
    interactive: { type: "sentence-build", fragments: ["t15_w1", "t15_w2", "t15_w3", "t15_w4", "t15_w5", "t15_w6"],
      instruction: "t15_inst",
      hint1: "t15_h1",
      hint2: "t15_h2" },
    quiz: { question: "t15_q", choices: ["t15_c1", "t15_c2", "t15_c3", "t15_c4"], answer: "t15_c1" }
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// i5 — PUNCTUATION PORT
// Topics: semicolons, colons, apostrophes, hyphens, dashes, parentheses
// ═══════════════════════════════════════════════════════════════════════════

export const PUNCTUATION5_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Punctuation Port",

    // T1 - Semicolon (Joining Sentences)
    t1_title: "The Semicolon (;)",
    t1_text: "A semicolon is used to join two closely related independent clauses without using a conjunction (like 'and' or 'but'). 'It rained; we stayed inside.'",
    t1_inst: "Fill in the blank with a semicolon!",
    t1_h1: "Look for the symbol that looks like a comma with a dot above it.",
    t1_h2: "Use ';'.",
    t1_sent: "My dog is friendly ___ my cat is shy.",
    t1_c1: ";", t1_c2: ",", t1_c3: ":", t1_c4: "-",
    t1_q: "What does a semicolon connect?",
    t1_qc1: "Two related independent clauses", t1_qc2: "A dependent and an independent clause", t1_qc3: "A noun and a verb", t1_qc4: "Items in a simple list",
    t1_svg_w1: ";",

    // T2 - Colon (Lists)
    t2_title: "The Colon (:)",
    t2_text: "A colon is often used to introduce a list of items. 'Please buy three things: apples, milk, and bread.'",
    t2_inst: "Highlight the colon in the sentence!",
    t2_h1: "Find the symbol with two dots stacked on top of each other.",
    t2_h2: "Highlight ':'.",
    t2_sent: "I need: pens, paper, and tape.",
    t2_target: ":",
    t2_q: "Which punctuation mark is used to introduce a list?",
    t2_c1: "colon (:)", t2_c2: "semicolon (;)", t2_c3: "comma (,)", t2_c4: "hyphen (-)",
    t2_svg_w1: ":",

    // T3 - Apostrophe (Contractions)
    t3_title: "Apostrophes: Contractions",
    t3_text: "An apostrophe shows where letters have been left out in a contraction. 'Do not' becomes 'don't'. 'They are' becomes 'they're'.",
    t3_inst: "Match the words to their contraction!",
    t3_h1: "cannot = can't. it is = it's.",
    t3_h2: "Match 'did not' to 'didn't'.",
    t3_l1: "can not", t3_r1: "can't",
    t3_l2: "it is", t3_r2: "it's",
    t3_l3: "did not", t3_r3: "didn't",
    t3_q: "What does the apostrophe in 'it's' stand for?",
    t3_qc1: "The missing letter 'i' from 'is'", t3_qc2: "Ownership", t3_qc3: "A plural noun", t3_qc4: "A pause",
    t3_svg_w1: "'",

    // T4 - Apostrophe (Singular Possessive)
    t4_title: "Apostrophes: Singular Possessive",
    t4_text: "To show that ONE person or thing owns something, add an apostrophe and an 's' ('s). 'The dog's bone' = the bone belonging to the dog.",
    t4_inst: "Build the possessive phrase!",
    t4_h1: "The toy belonging to the boy.",
    t4_h2: "The boy's toy.",
    t4_w1: "The", t4_w2: "boy's", t4_w3: "toy",
    t4_q: "How do you make a singular noun possessive?",
    t4_c1: "Add 's", t4_c2: "Add s'", t4_c3: "Add s", t4_c4: "Add es",
    t4_svg_w1: "'s",

    // T5 - Apostrophe (Plural Possessive)
    t5_title: "Apostrophes: Plural Possessive",
    t5_text: "If a plural noun already ends in 's', just add an apostrophe after the 's' (s') to show ownership. 'The dogs' bones' = bones belonging to multiple dogs.",
    t5_inst: "Choose the correct plural possessive!",
    t5_h1: "The room belongs to multiple teachers.",
    t5_h2: "The teachers' room.",
    t5_sent: "This is the ___ room. (belonging to many teachers)",
    t5_c1: "teachers'", t5_c2: "teacher's", t5_c3: "teachers", t5_c4: "teacher",
    t5_q: "How do you show ownership for a plural noun ending in 's' (like 'cats')?",
    t5_qc1: "Add an apostrophe after the s (cats')", t5_qc2: "Add 's (cats's)", t5_qc3: "Do not add anything", t5_qc4: "Add es' (catses')",
    t5_svg_w1: "s'",

    // T6 - its vs it's
    t6_title: "Its vs. It's",
    t6_text: "'It's' means 'it is'. 'Its' shows ownership (no apostrophe!). 'It's a dog, and its fur is brown.'",
    t6_inst: "Sort the words into Contraction and Possessive!",
    t6_h1: "It's = it is. Its = belonging to it.",
    t6_h2: "Put 'it's' in Contraction.",
    t6_b1: "Contraction (It is) ✂️", t6_b2: "Possessive (Ownership) 🐾",
    t6_i1: "It's cold.", t6_i2: "It's mine.", t6_i3: "Its tail.", t6_i4: "Its food.",
    t6_q: "Which sentence uses 'its' correctly?",
    t6_c1: "The cat licked its paw.", t6_c2: "Its raining outside.", t6_c3: "I think its broken.", t6_c4: "Its going to be fun.",
    t6_svg_l1: "it's", t6_svg_r1: "its",

    // T7 - your vs you're
    t7_title: "Your vs. You're",
    t7_text: "'You're' means 'you are'. 'Your' shows ownership. 'You're wearing your new shoes.'",
    t7_inst: "Fill in the blank with the correct word!",
    t7_h1: "Can you replace the blank with 'you are'?",
    t7_h2: "You are my best friend -> You're my best friend.",
    t7_sent: "___ my best friend.",
    t7_c1: "You're", t7_c2: "Your", t7_c3: "Yours", t7_c4: "You",
    t7_q: "What does 'you're' stand for?",
    t7_qc1: "you are", t7_qc2: "belonging to you", t7_qc3: "you will", t7_qc4: "you have",
    t7_svg_l1: "you're", t7_svg_r1: "your",

    // T8 - their vs they're vs there
    t8_title: "Their, They're, There",
    t8_text: "'They're' = they are. 'Their' = ownership. 'There' = a place. 'They're leaving their bags over there.'",
    t8_inst: "Match the word to its meaning!",
    t8_h1: "Their = ownership. There = place.",
    t8_h2: "They're = they are.",
    t8_l1: "They're", t8_r1: "They are",
    t8_l2: "Their", t8_r2: "Belongs to them",
    t8_l3: "There", t8_r3: "In that place",
    t8_q: "Which word indicates a place?",
    t8_c1: "there", t8_c2: "their", t8_c3: "they're", t8_c4: "theirs",
    t8_svg_w1: "they're / their / there",

    // T9 - Hyphen (Compound Numbers)
    t9_title: "The Hyphen: Numbers",
    t9_text: "Use a hyphen (-) to connect compound numbers from twenty-one to ninety-nine.",
    t9_inst: "Build the compound number!",
    t9_h1: "Connect twenty and four with a hyphen.",
    t9_h2: "twenty-four.",
    t9_w1: "twenty", t9_w2: "-", t9_w3: "four",
    t9_q: "Which number is punctuated correctly?",
    t9_c1: "forty-two", t9_c2: "forty two", t9_c3: "forty_two", t9_c4: "forty,two",
    t9_svg_w1: "-",

    // T10 - Hyphen (Compound Adjectives)
    t10_title: "The Hyphen: Adjectives",
    t10_text: "Use a hyphen to join two words working together as ONE adjective BEFORE a noun. 'He is a well-known actor.'",
    t10_inst: "Highlight the hyphenated adjective!",
    t10_h1: "Find the two words joined by a short line.",
    t10_h2: "Highlight 'part-time'.",
    t10_sent: "She has a part-time job.",
    t10_target: "part-time",
    t10_q: "Why do we write 'a well-behaved dog' with a hyphen?",
    t10_qc1: "Because 'well-behaved' acts as a single adjective before the noun.", t10_qc2: "Because 'well' is a verb.", t10_qc3: "To make it a compound noun.", t10_qc4: "It is a typo.",
    t10_svg_lbl: "Adjectives",

    // T11 - Semicolon with Conjunctive Adverbs
    t11_title: "Semicolons & However",
    t11_text: "Use a semicolon before words like 'however' or 'therefore' when they connect two independent clauses. Follow them with a comma. 'I was tired; however, I finished the race.'",
    t11_inst: "Fill in the blank with the correct punctuation!",
    t11_h1: "You need a semicolon before 'therefore'.",
    t11_h2: "; therefore,",
    t11_sent: "It rained heavily ___ therefore, the game was canceled.",
    t11_c1: ";", t11_c2: ",", t11_c3: ":", t11_c4: "-",
    t11_q: "Which sentence is punctuated correctly?",
    t11_qc1: "I studied; therefore, I passed.", t11_qc2: "I studied, therefore, I passed.", t11_qc3: "I studied: therefore I passed.", t11_qc4: "I studied therefore I passed.",
    t11_svg_w1: "; however,",

    // T12 - The Dash
    t12_title: "The Em Dash (—)",
    t12_text: "A dash (longer than a hyphen) is used to show a sudden interruption or to add dramatic emphasis. 'He won the prize — a million dollars!'",
    t12_inst: "Match the punctuation mark to its function!",
    t12_h1: "Hyphen connects words. Dash interrupts. Semicolon connects sentences.",
    t12_h2: "Dash -> Emphasis or interruption.",
    t12_l1: "Dash (—)", t12_r1: "Emphasis or interruption",
    t12_l2: "Hyphen (-)", t12_r2: "Connects words (e.g., twenty-two)",
    t12_l3: "Semicolon (;)", t12_r3: "Connects independent clauses",
    t12_q: "What is the purpose of an em dash?",
    t12_c1: "To show a sudden interruption or emphasis", t12_c2: "To end a sentence", t12_c3: "To connect numbers", t12_c4: "To introduce a list",
    t12_svg_w1: "—",

    // T13 - Parentheses
    t13_title: "Parentheses ( )",
    t13_text: "Parentheses are used to enclose extra, non-essential information in a sentence. 'My uncle (who lives in Texas) is visiting us.'",
    t13_inst: "Highlight the extra information inside the parentheses!",
    t13_h1: "Find the words between the ( ).",
    t13_h2: "Highlight '(the blue one)'.",
    t13_sent: "The car (the blue one) is mine.",
    t13_target: "(the blue one)",
    t13_q: "What do parentheses do in a sentence?",
    t13_qc1: "Add extra, non-essential information", t13_qc2: "Show strong emotion", t13_qc3: "Indicate a question", t13_qc4: "Join two sentences",
    t13_svg_w1: "( )",

    // T14 - Quotation Marks (Titles)
    t14_title: "Quoting Short Titles",
    t14_text: "Use quotation marks around the titles of short works, like poems, songs, or articles. (Long works like books are italicized).",
    t14_inst: "Fill in the missing quotation marks!",
    t14_h1: "Put quotes around the poem title 'The Raven'.",
    t14_h2: "\"The Raven\"",
    t14_sent: "We read the poem ___The Raven___ in class.",
    t14_c1: "\"", t14_c2: "'", t14_c3: "( )", t14_c4: "-",
    t14_q: "Which title should be placed in quotation marks?",
    t14_qc1: "A short poem", t14_qc2: "A long novel", t14_qc3: "A movie", t14_qc4: "A newspaper name",
    t14_svg_w1: "\" \"",

    // T15 - Punctuation Master
    t15_title: "Punctuation Master",
    t15_text: "You are a punctuation master! Let's review.",
    t15_inst: "Sort the punctuation marks into their correct jobs!",
    t15_h1: "Colon introduces lists. Apostrophe shows ownership.",
    t15_h2: "Colon (:). Apostrophe (').",
    t15_b1: "Shows Ownership (') 🐾", t15_b2: "Introduces a List (:) 📋",
    t15_i1: "the dog's bone", t15_i2: "Sarah's book", t15_i3: "I need: milk, eggs", t15_i4: "Steps: one, two",
    t15_q: "Which punctuation mark is used to connect two related independent clauses?",
    t15_c1: "Semicolon (;)", t15_c2: "Comma (,)", t15_c3: "Apostrophe (')", t15_c4: "Hyphen (-)",
    t15_svg_icon: "🏆", t15_svg_lbl: "Port Master",
  }
};

export const PUNCTUATION5_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "t1_svg_w1", color: "#F59E0B" },
    hintKey: "t1_h1",
    interactive: { type: "gap-fill", sentence: "t1_sent", choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], correctIndex: 0, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { question: "t1_q", choices: ["t1_qc1", "t1_qc2", "t1_qc3", "t1_qc4"], answer: "t1_qc1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "word-display", word: "t2_svg_w1", color: "#10B981" },
    hintKey: "t2_h1",
    interactive: { type: "highlight-text", tokens: ["t2_sent"], correctIndices: [0], instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2" },
    quiz: { question: "t2_q", choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], answer: "t2_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "t3_svg_w1", color: "#3B82F6" },
    hintKey: "t3_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t3_l1", right: "t3_r1" }, { left: "t3_l2", right: "t3_r2" }, { left: "t3_l3", right: "t3_r3" }],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2" },
    quiz: { question: "t3_q", choices: ["t3_qc1", "t3_qc2", "t3_qc3", "t3_qc4"], answer: "t3_qc1" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "t4_svg_w1", color: "#EF4444" },
    hintKey: "t4_h1",
    interactive: { type: "sentence-build", fragments: ["t4_w1", "t4_w2", "t4_w3"],
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2" },
    quiz: { question: "t4_q", choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"], answer: "t4_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "t5_svg_w1", color: "#8B5CF6" },
    hintKey: "t5_h1",
    interactive: { type: "gap-fill", sentence: "t5_sent", choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"], correctIndex: 0, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { question: "t5_q", choices: ["t5_qc1", "t5_qc2", "t5_qc3", "t5_qc4"], answer: "t5_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "two-groups", left: { items: ["t6_i1", "t6_i2"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t6_i3", "t6_i4"], bg: "#FEF3C7", border: "#F59E0B" } },
    hintKey: "t6_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b1" }, { text: "t6_i3", bucketId: "b2" }, { text: "t6_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t6_b1" }, { id: "b2", label: "t6_b2" }],
      instruction: "t6_inst",
      hint1: "t6_h1",
      hint2: "t6_h2" },
    quiz: { question: "t6_q", choices: ["t6_c1", "t6_c2", "t6_c3", "t6_c4"], answer: "t6_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "two-groups", left: { items: ["t7_c1"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t7_c2"], bg: "#D1FAE5", border: "#10B981" } },
    hintKey: "t7_h1",
    interactive: { type: "gap-fill", sentence: "t7_sent", choices: ["t7_c1", "t7_c2", "t7_c3", "t7_c4"], correctIndex: 0, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { question: "t7_q", choices: ["t7_qc1", "t7_qc2", "t7_qc3", "t7_qc4"], answer: "t7_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "word-display", word: "t8_svg_w1", color: "#F43F5E" },
    hintKey: "t8_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }],
      instruction: "t8_inst",
      hint1: "t8_h1",
      hint2: "t8_h2" },
    quiz: { question: "t8_q", choices: ["t8_c1", "t8_c2", "t8_c3", "t8_c4"], answer: "t8_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "word-display", word: "t9_svg_w1", color: "#0EA5E9" },
    hintKey: "t9_h1",
    interactive: { type: "sentence-build", fragments: ["t9_w1", "t9_w2", "t9_w3"],
      instruction: "t9_inst",
      hint1: "t9_h1",
      hint2: "t9_h2" },
    quiz: { question: "t9_q", choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"], answer: "t9_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🔗", title: "t10_svg_lbl", color: "#EC4899" },
    hintKey: "t10_h1",
    interactive: { type: "highlight-text", tokens: ["t10_sent"], correctIndices: [0], instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2" },
    quiz: { question: "t10_q", choices: ["t10_qc1", "t10_qc2", "t10_qc3", "t10_qc4"], answer: "t10_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "word-display", word: "t11_svg_w1", color: "#14B8A6" },
    hintKey: "t11_h1",
    interactive: { type: "gap-fill", sentence: "t11_sent", choices: ["t11_c1", "t11_c2", "t11_c3", "t11_c4"], correctIndex: 0, instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { question: "t11_q", choices: ["t11_qc1", "t11_qc2", "t11_qc3", "t11_qc4"], answer: "t11_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "word-display", word: "t12_svg_w1", color: "#F97316" },
    hintKey: "t12_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t12_l1", right: "t12_r1" }, { left: "t12_l2", right: "t12_r2" }, { left: "t12_l3", right: "t12_r3" }],
      instruction: "t12_inst",
      hint1: "t12_h1",
      hint2: "t12_h2" },
    quiz: { question: "t12_q", choices: ["t12_c1", "t12_c2", "t12_c3", "t12_c4"], answer: "t12_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "word-display", word: "t13_svg_w1", color: "#6366F1" },
    hintKey: "t13_h1",
    interactive: { type: "highlight-text", tokens: ["t13_sent"], correctIndices: [0], instruction: "t13_inst",
      hint1: "t13_h1",
      hint2: "t13_h2" },
    quiz: { question: "t13_q", choices: ["t13_qc1", "t13_qc2", "t13_qc3", "t13_qc4"], answer: "t13_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "word-display", word: "t14_svg_w1", color: "#8B5CF6" },
    hintKey: "t14_h1",
    interactive: { type: "gap-fill", sentence: "t14_sent", choices: ["t14_c1", "t14_c2", "t14_c3", "t14_c4"], correctIndex: 0, instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { question: "t14_q", choices: ["t14_qc1", "t14_qc2", "t14_qc3", "t14_qc4"], answer: "t14_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "t15_svg_icon", title: "t15_svg_lbl", color: "#10B981" },
    hintKey: "t15_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t15_i1", bucketId: "b1" }, { text: "t15_i2", bucketId: "b1" }, { text: "t15_i3", bucketId: "b2" }, { text: "t15_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t15_b1" }, { id: "b2", label: "t15_b2" }],
      instruction: "t15_inst",
      hint1: "t15_h1",
      hint2: "t15_h2" },
    quiz: { question: "t15_q", choices: ["t15_c1", "t15_c2", "t15_c3", "t15_c4"], answer: "t15_c1" }
  }
];
// ═══════════════════════════════════════════════════════════════════════════
// i6 — SPELLING SHORE
// Topics: "i before e" rules, silent letters, doubling consonants, 
//         suffixes (-ible/-able, -tion/-sion, -ent/-ant), commonly misspelled words
// ═══════════════════════════════════════════════════════════════════════════

export const SPELLING5_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Spelling Shore",

    // T1 - i before e
    t1_title: "I Before E",
    t1_text: "The famous rule: 'I before E, except after C.' Examples: believe, piece, field. But after C: receive, ceiling.",
    t1_inst: "Fill in the blank with the correct spelling!",
    t1_h1: "Is there a 'C' before the vowel sound?",
    t1_h2: "There is no C, so use 'ie'.",
    t1_sent: "I ___ you can do it!",
    t1_c1: "believe", t1_c2: "beleive", t1_c3: "beleve", t1_c4: "believ",
    t1_q: "Which word follows the 'I before E' rule correctly?",
    t1_qc1: "piece", t1_qc2: "peice", t1_qc3: "recieve", t1_qc4: "cieling",
    t1_svg_w1: "believe",

    // T2 - Exceptions to ie/ei
    t2_title: "Weird Exceptions",
    t2_text: "Sometimes the rule breaks! When it sounds like 'A' (as in neighbor or weigh), we use 'ei'. Also, 'weird' is just weird!",
    t2_inst: "Highlight the exception word!",
    t2_h1: "Find the word where 'ei' sounds like 'A'.",
    t2_h2: "Highlight the word 'weight'.",
    t2_sent: "The weight of the box was heavy.",
    t2_target: "weight",
    t2_q: "Which word is an exception because it makes an 'A' sound?",
    t2_c1: "weigh", t2_c2: "piece", t2_c3: "thief", t2_c4: "field",
    t2_svg_w1: "weigh",

    // T3 - Silent k
    t3_title: "Silent K",
    t3_text: "When a word starts with 'kn', the 'k' is completely silent! Examples: know, knee, knife, knight.",
    t3_inst: "Match the silent K word to its meaning!",
    t3_h1: "A knight wears armor. A knife cuts.",
    t3_h2: "Knee is on your leg.",
    t3_l1: "knight", t3_r1: "wears armor",
    t3_l2: "knife", t3_r2: "used to cut",
    t3_l3: "knee", t3_r3: "part of your leg",
    t3_q: "Which word contains a silent 'k'?",
    t3_qc1: "knock", t3_qc2: "king", t3_qc3: "keep", t3_qc4: "kite",
    t3_svg_w1: "kn",

    // T4 - Silent w
    t4_title: "Silent W",
    t4_text: "When a word starts with 'wr', the 'w' is silent! Examples: write, wrong, wrap, wrist.",
    t4_inst: "Fill in the missing silent letter!",
    t4_h1: "You use a pen to ___rite.",
    t4_h2: "The word starts with 'w'.",
    t4_sent: "Please ___rite your name here.",
    t4_c1: "w", t4_c2: "r", t4_c3: "k", t4_c4: "h",
    t4_q: "Which word starts with a silent 'w'?",
    t4_qc1: "wrist", t4_qc2: "wait", t4_qc3: "water", t4_qc4: "window",
    t4_svg_w1: "wr",

    // T5 - Silent gh
    t5_title: "Silent GH",
    t5_text: "The letters 'gh' are often silent, especially after 'i'. Examples: night, light, high, thought.",
    t5_inst: "Build the word with a silent GH!",
    t5_h1: "Combine the parts to make the word 'light'.",
    t5_h2: "l + i + gh + t.",
    t5_w1: "l", t5_w2: "i", t5_w3: "gh", t5_w4: "t",
    t5_q: "Which word has a silent 'gh'?",
    t5_c1: "thought", t5_c2: "ghost", t5_c3: "laugh", t5_c4: "rough",
    t5_svg_w1: "gh",

    // T6 - Doubling final consonant (-ing)
    t6_title: "Doubling Consonants (-ing)",
    t6_text: "If a short word ends in CVC (consonant-vowel-consonant), double the last letter before adding '-ing'. Run -> running.",
    t6_inst: "Choose the correct spelling!",
    t6_h1: "Sit is CVC. Double the 't'.",
    t6_h2: "sitting.",
    t6_sent: "She is ___ on the chair.",
    t6_c1: "sitting", t6_c2: "siting", t6_c3: "siteting", t6_c4: "seting",
    t6_q: "What is the correct spelling when adding -ing to 'swim'?",
    t6_qc1: "swimming", t6_qc2: "swiming", t6_qc3: "swimmming", t6_qc4: "sweeming",
    t6_svg_w1: "running",

    // T7 - Doubling final consonant (-ed)
    t7_title: "Doubling Consonants (-ed)",
    t7_text: "The CVC rule also works for past tense (-ed). Stop -> stopped. Plan -> planned.",
    t7_inst: "Sort the words into Double or No Double!",
    t7_h1: "CVC words get doubled. Words ending in two vowels or two consonants do not.",
    t7_h2: "'Stop' becomes 'stopped'. 'Jump' becomes 'jumped'.",
    t7_b1: "Double the letter", t7_b2: "Do NOT double",
    t7_i1: "stopped", t7_i2: "planned", t7_i3: "jumped", t7_i4: "looked",
    t7_q: "Which verb requires doubling the final consonant for the past tense?",
    t7_c1: "drop", t7_c2: "walk", t7_c3: "play", t7_c4: "clean",
    t7_svg_l1: "stop -> stopped", t7_svg_r1: "jump -> jumped",

    // T8 - Drop silent e
    t8_title: "Dropping the Silent E",
    t8_text: "When adding a suffix that starts with a VOWEL (like -ing or -ed), drop the silent 'e'. Make -> making. Love -> loving.",
    t8_inst: "Highlight the correctly spelled word!",
    t8_h1: "Drop the 'e' from 'make'.",
    t8_h2: "Highlight 'making'.",
    t8_sent: "He is making a cake.",
    t8_target: "making",
    t8_q: "What is the correct spelling of write + ing?",
    t8_qc1: "writing", t8_qc2: "writeing", t8_qc3: "writting", t8_qc4: "writteing",
    t8_svg_w1: "make -> making",

    // T9 - Keep silent e
    t9_title: "Keeping the Silent E",
    t9_text: "If the suffix starts with a CONSONANT (like -ful or -ment), keep the silent 'e'. Hope -> hopeful. Move -> movement.",
    t9_inst: "Fill in the blank!",
    t9_h1: "Keep the 'e' before '-ful'.",
    t9_h2: "careful.",
    t9_sent: "Please be very ___.",
    t9_c1: "careful", t9_c2: "carful", t9_c3: "carefull", t9_c4: "carrful",
    t9_q: "Which word correctly keeps the silent 'e'?",
    t9_qc1: "movement", t9_qc2: "moveing", t9_qc3: "movment", t9_qc4: "movable",
    t9_svg_w1: "hope -> hopeful",

    // T10 - -ible vs -able
    t10_title: "-ible vs -able",
    t10_text: "If you remove the suffix and are left with a full word, usually use '-able' (comfortable). If it's not a full word, use '-ible' (terrible).",
    t10_inst: "Match the words to their correct ending!",
    t10_h1: "Comfort + able. Terr + ible.",
    t10_h2: "Possible uses ible.",
    t10_l1: "comfort", t10_r1: "able",
    t10_l2: "terr", t10_r2: "ible",
    t10_l3: "poss", t10_r3: "ible",
    t10_q: "Which is the correct spelling?",
    t10_qc1: "adorable", t10_qc2: "adorible", t10_qc3: "terable", t10_qc4: "possable",
    t10_svg_l1: "-able", t10_svg_r1: "-ible",

    // T11 - -tion vs -sion
    t11_title: "-tion vs -sion",
    t11_text: "Most words use '-tion' (action, nation). Use '-sion' if the base word ends in -d, -de, -se, or -ss (decide -> decision, confuse -> confusion).",
    t11_inst: "Sort the words into the correct ending buckets!",
    t11_h1: "Ac-tion, Na-tion vs Deci-sion, Confu-sion.",
    t11_h2: "Action uses -tion.",
    t11_b1: "Ends in -tion", t11_b2: "Ends in -sion",
    t11_i1: "action", t11_i2: "nation", t11_i3: "decision", t11_i4: "vision",
    t11_q: "What is the noun form of 'divide'?",
    t11_c1: "division", t11_c2: "divition", t11_c3: "dividion", t11_c4: "divison",
    t11_svg_w1: "-tion / -sion",

    // T12 - -ent vs -ant
    t12_title: "-ent vs -ant",
    t12_text: "These are tricky! Common words: different, excellent, confident (-ent) vs important, pleasant, distant (-ant). Memorize these patterns!",
    t12_inst: "Fill in the blank with the correct spelling!",
    t12_h1: "The word is 'important'.",
    t12_h2: "It ends in -ant.",
    t12_sent: "This test is very ___.",
    t12_c1: "important", t12_c2: "importent", t12_c3: "importint", t12_c4: "importont",
    t12_q: "Which word is spelled correctly?",
    t12_qc1: "different", t12_qc2: "differant", t12_qc3: "exceelant", t12_qc4: "pleasent",
    t12_svg_l1: "-ent", t12_svg_r1: "-ant",

    // T13 - -ence vs -ance
    t13_title: "-ence vs -ance",
    t13_text: "Nouns follow the same pattern as their adjectives. Confident -> confidence. Important -> importance.",
    t13_inst: "Build the word 'independence'!",
    t13_h1: "in-de-pen-dence.",
    t13_h2: "It ends in -ence.",
    t13_w1: "in", t13_w2: "de", t13_w3: "pen", t13_w4: "dence",
    t13_q: "What is the correct noun form of 'distant'?",
    t13_c1: "distance", t13_c2: "distence", t13_c3: "distancy", t13_c4: "distency",
    t13_svg_w1: "independence",

    // T14 - Commonly misspelled words
    t14_title: "Tricky Words",
    t14_text: "Some words are just famous for being hard to spell! Examples: separate (has 'a rat' in it), definitely, necessary.",
    t14_inst: "Choose the correctly spelled word!",
    t14_h1: "Remember: s-e-p-A-R-A-T-e.",
    t14_h2: "It has 'a rat' in the middle.",
    t14_sent: "Please keep them ___.",
    t14_c1: "separate", t14_c2: "seperate", t14_c3: "separete", t14_c4: "seperete",
    t14_q: "Which word is spelled correctly?",
    t14_qc1: "definitely", t14_qc2: "definately", t14_qc3: "definitly", t14_qc4: "defenitely",
    t14_svg_w1: "separate",

    // T15 - Mixed Spelling Review
    t15_title: "Spelling Master",
    t15_text: "Let's review everything! I before E, silent letters, doubling, and suffixes.",
    t15_inst: "Match the spelling rule to the correct example word!",
    t15_h1: "I before E -> believe. Double consonant -> stopping.",
    t15_h2: "Silent K -> knight.",
    t15_l1: "I before E", t15_r1: "believe",
    t15_l2: "Double consonant", t15_r2: "stopping",
    t15_l3: "Silent K", t15_r3: "knight",
    t15_q: "Which word drops the silent 'e' correctly?",
    t15_c1: "writing", t15_c2: "writeing", t15_c3: "hopeful", t15_c4: "useing",
    t15_svg_icon: "🏆", t15_svg_lbl: "Spelling Master",
  }
};

export const SPELLING5_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "t1_svg_w1", color: "#3B82F6" },
    hintKey: "t1_h1",
    interactive: { type: "gap-fill", sentence: "t1_sent", choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], correctIndex: 0, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { question: "t1_q", choices: ["t1_qc1", "t1_qc2", "t1_qc3", "t1_qc4"], answer: "t1_qc1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "word-display", word: "t2_svg_w1", color: "#EF4444" },
    hintKey: "t2_h1",
    interactive: { type: "highlight-text", tokens: ["t2_sent"], correctIndices: [0], instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2" },
    quiz: { question: "t2_q", choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], answer: "t2_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "t3_svg_w1", color: "#10B981" },
    hintKey: "t3_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t3_l1", right: "t3_r1" }, { left: "t3_l2", right: "t3_r2" }, { left: "t3_l3", right: "t3_r3" }],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2" },
    quiz: { question: "t3_q", choices: ["t3_qc1", "t3_qc2", "t3_qc3", "t3_qc4"], answer: "t3_qc1" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "t4_svg_w1", color: "#F59E0B" },
    hintKey: "t4_h1",
    interactive: { type: "gap-fill", sentence: "t4_sent", choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"], correctIndex: 0, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { question: "t4_q", choices: ["t4_qc1", "t4_qc2", "t4_qc3", "t4_qc4"], answer: "t4_qc1" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "t5_svg_w1", color: "#8B5CF6" },
    hintKey: "t5_h1",
    interactive: { type: "sentence-build", fragments: ["t5_w1", "t5_w2", "t5_w3", "t5_w4"],
      instruction: "t5_inst",
      hint1: "t5_h1",
      hint2: "t5_h2" },
    quiz: { question: "t5_q", choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"], answer: "t5_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "word-display", word: "t6_svg_w1", color: "#EC4899" },
    hintKey: "t6_h1",
    interactive: { type: "gap-fill", sentence: "t6_sent", choices: ["t6_c1", "t6_c2", "t6_c3", "t6_c4"], correctIndex: 0, instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { question: "t6_q", choices: ["t6_qc1", "t6_qc2", "t6_qc3", "t6_qc4"], answer: "t6_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "two-groups", left: { items: ["t7_i1", "t7_i2"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t7_i3", "t7_i4"], bg: "#FCE7F3", border: "#EC4899" } },
    hintKey: "t7_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t7_i1", bucketId: "b1" }, { text: "t7_i2", bucketId: "b1" }, { text: "t7_i3", bucketId: "b2" }, { text: "t7_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t7_b1" }, { id: "b2", label: "t7_b2" }],
      instruction: "t7_inst",
      hint1: "t7_h1",
      hint2: "t7_h2" },
    quiz: { question: "t7_q", choices: ["t7_c1", "t7_c2", "t7_c3", "t7_c4"], answer: "t7_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "word-display", word: "t8_svg_w1", color: "#06B6D4" },
    hintKey: "t8_h1",
    interactive: { type: "highlight-text", tokens: ["t8_sent"], correctIndices: [0], instruction: "t8_inst",
      hint1: "t8_h1",
      hint2: "t8_h2" },
    quiz: { question: "t8_q", choices: ["t8_qc1", "t8_qc2", "t8_qc3", "t8_qc4"], answer: "t8_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "word-display", word: "t9_svg_w1", color: "#F97316" },
    hintKey: "t9_h1",
    interactive: { type: "gap-fill", sentence: "t9_sent", choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"], correctIndex: 0, instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { question: "t9_q", choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"], answer: "t9_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "two-groups", left: { items: ["t10_l1"], bg: "#D1FAE5", border: "#10B981" }, right: { items: ["t10_l2"], bg: "#FEF3C7", border: "#F59E0B" } },
    hintKey: "t10_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t10_l1", right: "t10_r1" }, { left: "t10_l2", right: "t10_r2" }, { left: "t10_l3", right: "t10_r3" }],
      instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2" },
    quiz: { question: "t10_q", choices: ["t10_qc1", "t10_qc2", "t10_qc3", "t10_qc4"], answer: "t10_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "word-display", word: "t11_svg_w1", color: "#3B82F6" },
    hintKey: "t11_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t11_i1", bucketId: "b1" }, { text: "t11_i2", bucketId: "b1" }, { text: "t11_i3", bucketId: "b2" }, { text: "t11_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t11_b1" }, { id: "b2", label: "t11_b2" }],
      instruction: "t11_inst",
      hint1: "t11_h1",
      hint2: "t11_h2" },
    quiz: { question: "t11_q", choices: ["t11_c1", "t11_c2", "t11_c3", "t11_c4"], answer: "t11_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "two-groups", left: { items: ["t12_c1"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t12_c2"], bg: "#FCE7F3", border: "#EC4899" } },
    hintKey: "t12_h1",
    interactive: { type: "gap-fill", sentence: "t12_sent", choices: ["t12_c1", "t12_c2", "t12_c3", "t12_c4"], correctIndex: 0, instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { question: "t12_q", choices: ["t12_qc1", "t12_qc2", "t12_qc3", "t12_qc4"], answer: "t12_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "word-display", word: "t13_svg_w1", color: "#10B981" },
    hintKey: "t13_h1",
    interactive: { type: "sentence-build", fragments: ["t13_w1", "t13_w2", "t13_w3", "t13_w4"],
      instruction: "t13_inst",
      hint1: "t13_h1",
      hint2: "t13_h2" },
    quiz: { question: "t13_q", choices: ["t13_c1", "t13_c2", "t13_c3", "t13_c4"], answer: "t13_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "word-display", word: "t14_svg_w1", color: "#EF4444" },
    hintKey: "t14_h1",
    interactive: { type: "gap-fill", sentence: "t14_sent", choices: ["t14_c1", "t14_c2", "t14_c3", "t14_c4"], correctIndex: 0, instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { question: "t14_q", choices: ["t14_qc1", "t14_qc2", "t14_qc3", "t14_qc4"], answer: "t14_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "t15_svg_icon", title: "t15_svg_lbl", color: "#F59E0B" },
    hintKey: "t15_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t15_l1", right: "t15_r1" }, { left: "t15_l2", right: "t15_r2" }, { left: "t15_l3", right: "t15_r3" }],
      instruction: "t15_inst",
      hint1: "t15_h1",
      hint2: "t15_h2" },
    quiz: { question: "t15_q", choices: ["t15_c1", "t15_c2", "t15_c3", "t15_c4"], answer: "t15_c1" }
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// i7 — ROOT WORD REEF
// Topics: Latin roots (aud, vis, dict, port, rupt), Greek roots (bio, geo, graph, photo, tele),
//         prefixes (pre, post, mis, over, under, trans, inter), suffixes (-ful, -less, -ness, -ment, -ous)
// ═══════════════════════════════════════════════════════════════════════════

export const ROOTWORD_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Root Word Reef",

    // T1 - Latin root "aud"
    t1_title: "Latin Root: aud",
    t1_text: "The Latin root 'aud' means 'to hear'. Words with 'aud' relate to sound. Examples: audio, auditory, audience.",
    t1_inst: "Fill in the blank with the 'aud' word!",
    t1_h1: "Which word means people listening?",
    t1_h2: "The audience clapped.",
    t1_sent: "The ___ clapped loudly after the concert.",
    t1_c1: "audience", t1_c2: "vision", t1_c3: "dictator", t1_c4: "porter",
    t1_q: "What does the root 'aud' mean?",
    t1_qc1: "to hear", t1_qc2: "to see", t1_qc3: "to speak", t1_qc4: "to carry",
    t1_svg_w1: "aud (hear)",

    // T2 - Latin root "vis/vid"
    t2_title: "Latin Root: vis/vid",
    t2_text: "The roots 'vis' and 'vid' mean 'to see'. Examples: vision, video, visible, evident.",
    t2_inst: "Match the word to its meaning!",
    t2_h1: "Vision relates to seeing. Video is something you watch.",
    t2_h2: "Visible means able to be seen.",
    t2_l1: "visible", t2_r1: "able to be seen",
    t2_l2: "video", t2_r2: "moving pictures to watch",
    t2_l3: "invisible", t2_r3: "unable to be seen",
    t2_q: "Which word contains a root meaning 'to see'?",
    t2_c1: "vision", t2_c2: "audio", t2_c3: "rupture", t2_c4: "geography",
    t2_svg_w1: "vis/vid (see)",

    // T3 - Latin root "dict"
    t3_title: "Latin Root: dict",
    t3_text: "The root 'dict' means 'to say' or 'speak'. Examples: dictate, predict (say before), contradict (say against).",
    t3_inst: "Build the word that means 'to say what will happen before it does'!",
    t3_h1: "pre (before) + dict (say).",
    t3_h2: "pre + dict.",
    t3_w1: "pre", t3_w2: "dict",
    t3_q: "What does 'contradict' mean?",
    t3_c1: "to speak against", t3_c2: "to hear clearly", t3_c3: "to carry away", t3_c4: "to see far",
    t3_svg_w1: "dict (say)",

    // T4 - Latin root "port"
    t4_title: "Latin Root: port",
    t4_text: "The root 'port' means 'to carry'. Examples: transport (carry across), portable (able to be carried), import.",
    t4_inst: "Highlight the 'port' word in the sentence!",
    t4_h1: "Find the word that means 'able to be carried'.",
    t4_h2: "Highlight 'portable'.",
    t4_sent: "I brought my portable speaker to the beach.",
    t4_target: "portable",
    t4_q: "What does the root 'port' mean?",
    t4_qc1: "to carry", t4_qc2: "to break", t4_qc3: "to see", t4_qc4: "to write",
    t4_svg_w1: "port (carry)",

    // T5 - Latin root "rupt"
    t5_title: "Latin Root: rupt",
    t5_text: "The root 'rupt' means 'to break' or 'burst'. Examples: erupt (burst out), interrupt (break between), bankrupt.",
    t5_inst: "Fill in the blank with the 'rupt' word!",
    t5_h1: "Which word means a volcano bursting out?",
    t5_h2: "erupt.",
    t5_sent: "The volcano is going to ___!",
    t5_c1: "erupt", t5_c2: "predict", t5_c3: "transport", t5_c4: "audio",
    t5_q: "What does 'interrupt' mean?",
    t5_qc1: "to break into a conversation", t5_qc2: "to carry something heavy", t5_qc3: "to see something hidden", t5_qc4: "to write something down",
    t5_svg_w1: "rupt (break)",

    // T6 - Greek root "bio"
    t6_title: "Greek Root: bio",
    t6_text: "The Greek root 'bio' means 'life'. Examples: biology (study of life), biography (writing about someone's life).",
    t6_inst: "Match the word to its definition!",
    t6_h1: "Biology is a science. Biography is a book.",
    t6_h2: "Match biology to study of life.",
    t6_l1: "biology", t6_r1: "study of life",
    t6_l2: "biography", t6_r2: "writing about a life",
    t6_l3: "biome", t6_r3: "community of living things",
    t6_q: "Which word means 'the study of living things'?",
    t6_c1: "biology", t6_c2: "geology", t6_c3: "telegraph", t6_c4: "photograph",
    t6_svg_w1: "bio (life)",

    // T7 - Greek root "geo"
    t7_title: "Greek Root: geo",
    t7_text: "The root 'geo' means 'earth'. Examples: geography (writing/mapping the earth), geology (study of rocks/earth).",
    t7_inst: "Fill in the blank with a 'geo' word!",
    t7_h1: "Which class studies maps of the earth?",
    t7_h2: "Geography.",
    t7_sent: "In ___ class, we learned about the continents.",
    t7_c1: "geography", t7_c2: "biology", t7_c3: "telepathy", t7_c4: "audio",
    t7_q: "What does the root 'geo' mean?",
    t7_qc1: "earth", t7_qc2: "light", t7_qc3: "far off", t7_qc4: "life",
    t7_svg_w1: "geo (earth)",

    // T8 - Greek root "graph"
    t8_title: "Greek Root: graph/gram",
    t8_text: "The roots 'graph' and 'gram' mean 'to write' or 'draw'. Examples: autograph (self-writing), paragraph, telegram.",
    t8_inst: "Sort the words by their Greek roots!",
    t8_h1: "Bio = life. Graph = write.",
    t8_h2: "Biology goes to 'bio'. Autograph goes to 'graph'.",
    t8_b1: "Means 'life' (bio)", t8_b2: "Means 'write' (graph)",
    t8_i1: "biology", t8_i2: "biography", t8_i3: "autograph", t8_i4: "paragraph",
    t8_q: "What does an 'autograph' literally translate to?",
    t8_c1: "self-writing", t8_c2: "light-writing", t8_c3: "earth-writing", t8_c4: "far-writing",
    t8_svg_l1: "bio", t8_svg_r1: "graph",

    // T9 - Greek root "photo"
    t9_title: "Greek Root: photo",
    t9_text: "The root 'photo' means 'light'. Examples: photograph (light-writing), photosynthesis (plants making food from light).",
    t9_inst: "Fill in the blank!",
    t9_h1: "Plants use light.",
    t9_h2: "photosynthesis.",
    t9_sent: "Plants make food using ___.",
    t9_c1: "photosynthesis", t9_c2: "geography", t9_c3: "biology", t9_c4: "telephone",
    t9_q: "What does the root 'photo' mean?",
    t9_qc1: "light", t9_qc2: "life", t9_qc3: "earth", t9_qc4: "sound",
    t9_svg_w1: "photo (light)",

    // T10 - Greek root "tele"
    t10_title: "Greek Root: tele",
    t10_text: "The root 'tele' means 'far off' or 'distance'. Examples: television (seeing from afar), telephone (sound from afar), telescope.",
    t10_inst: "Build the word for looking at distant stars!",
    t10_h1: "tele + scope.",
    t10_h2: "telescope.",
    t10_w1: "tele", t10_w2: "scope",
    t10_q: "Which word means 'sound from afar'?",
    t10_c1: "telephone", t10_c2: "television", t10_c3: "telescope", t10_c4: "telegram",
    t10_svg_w1: "tele (far)",

    // T11 - Prefixes: pre/post
    t11_title: "Prefixes: pre- & post-",
    t11_text: "The prefix 'pre-' means BEFORE (preview). The prefix 'post-' means AFTER (postgame).",
    t11_inst: "Sort the words into Before or After!",
    t11_h1: "Pre = before. Post = after.",
    t11_h2: "Preview goes to Before.",
    t11_b1: "Before (pre)", t11_b2: "After (post)",
    t11_i1: "preview", t11_i2: "predict", t11_i3: "postgame", t11_i4: "postpone",
    t11_q: "If you 'predict' something, what are you doing?",
    t11_c1: "Saying it before it happens", t11_c2: "Saying it after it happens", t11_c3: "Writing it down", t11_c4: "Hearing it clearly",
    t11_svg_l1: "pre-", t11_svg_r1: "post-",

    // T12 - Prefixes: mis/over/under
    t12_title: "Prefixes: mis-, over-, under-",
    t12_text: "'Mis-' means wrong (mistake). 'Over-' means too much (overcook). 'Under-' means too little or below (underestimate).",
    t12_inst: "Match the prefix to its meaning!",
    t12_h1: "mis = wrong. over = too much. under = too little.",
    t12_h2: "Match 'mis-' to 'wrong'.",
    t12_l1: "mis-", t12_r1: "wrong or bad",
    t12_l2: "over-", t12_r2: "too much",
    t12_l3: "under-", t12_r3: "too little or below",
    t12_q: "What does 'misunderstand' mean?",
    t12_c1: "to understand wrongly", t12_c2: "to understand too much", t12_c3: "to understand completely", t12_c4: "to not hear",
    t12_svg_w1: "mis / over / under",

    // T13 - Prefixes: trans/inter
    t13_title: "Prefixes: trans- & inter-",
    t13_text: "'Trans-' means across or beyond (transport). 'Inter-' means between or among (international).",
    t13_inst: "Fill in the blank with the correct prefix!",
    t13_h1: "Flights between nations are called ___national.",
    t13_h2: "inter.",
    t13_sent: "An ___national flight goes between different countries.",
    t13_c1: "inter", t13_c2: "trans", t13_c3: "pre", t13_c4: "post",
    t13_q: "What does the prefix 'trans-' mean?",
    t13_qc1: "across", t13_qc2: "between", t13_qc3: "wrong", t13_qc4: "after",
    t13_svg_w1: "trans / inter",

    // T14 - Suffixes: -ful / -less
    t14_title: "Suffixes: -ful & -less",
    t14_text: "Suffixes go at the end of a word. '-ful' means full of (hopeful). '-less' means without (careless).",
    t14_inst: "Sort the adjectives by their meaning!",
    t14_h1: "Hopeful means full of hope. Hopeless means without hope.",
    t14_h2: "Careful -> Full of. Fearless -> Without.",
    t14_b1: "Full of (+)", t14_b2: "Without (-)",
    t14_i1: "hopeful", t14_i2: "careful", t14_i3: "fearless", t14_i4: "careless",
    t14_q: "What does 'powerless' mean?",
    t14_c1: "without power", t14_c2: "full of power", t14_c3: "before power", t14_c4: "across power",
    t14_svg_l1: "-ful", t14_svg_r1: "-less",

    // T15 - Suffixes: -ness, -ment, -ous
    t15_title: "Noun & Adjective Suffixes",
    t15_text: "'-ness' and '-ment' turn words into nouns (happiness, movement). '-ous' turns words into adjectives (famous, dangerous).",
    t15_inst: "Fill in the correct suffix to make a noun!",
    t15_h1: "The state of being happy.",
    t15_h2: "happiness.",
    t15_sent: "Her happi___ filled the room.",
    t15_c1: "ness", t15_c2: "ment", t15_c3: "ous", t15_c4: "less",
    t15_q: "Which suffix usually turns a word into an adjective?",
    t15_qc1: "-ous", t15_qc2: "-ness", t15_qc3: "-ment", t15_qc4: "-tion",
    t15_svg_w1: "suffixes",
  }
};

export const ROOTWORD_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "t1_svg_w1", color: "#3B82F6" },
    hintKey: "t1_h1",
    interactive: { type: "gap-fill", sentence: "t1_sent", choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], correctIndex: 0, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { question: "t1_q", choices: ["t1_qc1", "t1_qc2", "t1_qc3", "t1_qc4"], answer: "t1_qc1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "word-display", word: "t2_svg_w1", color: "#10B981" },
    hintKey: "t2_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2" },
    quiz: { question: "t2_q", choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], answer: "t2_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "t3_svg_w1", color: "#EF4444" },
    hintKey: "t3_h1",
    interactive: { type: "sentence-build", fragments: ["t3_w1", "t3_w2"],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2" },
    quiz: { question: "t3_q", choices: ["t3_c1", "t3_c2", "t3_c3", "t3_c4"], answer: "t3_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "t4_svg_w1", color: "#F59E0B" },
    hintKey: "t4_h1",
    interactive: { type: "highlight-text", tokens: ["t4_sent"], correctIndices: [0], instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2" },
    quiz: { question: "t4_q", choices: ["t4_qc1", "t4_qc2", "t4_qc3", "t4_qc4"], answer: "t4_qc1" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "t5_svg_w1", color: "#8B5CF6" },
    hintKey: "t5_h1",
    interactive: { type: "gap-fill", sentence: "t5_sent", choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"], correctIndex: 0, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { question: "t5_q", choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"], answer: "t5_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "word-display", word: "t6_svg_w1", color: "#EC4899" },
    hintKey: "t6_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t6_l1", right: "t6_r1" }, { left: "t6_l2", right: "t6_r2" }, { left: "t6_l3", right: "t6_r3" }],
      instruction: "t6_inst",
      hint1: "t6_h1",
      hint2: "t6_h2" },
    quiz: { question: "t6_q", choices: ["t6_c1", "t6_c2", "t6_c3", "t6_c4"], answer: "t6_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "word-display", word: "t7_svg_w1", color: "#14B8A6" },
    hintKey: "t7_h1",
    interactive: { type: "gap-fill", sentence: "t7_sent", choices: ["t7_c1", "t7_c2", "t7_c3", "t7_c4"], correctIndex: 0, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { question: "t7_q", choices: ["t7_qc1", "t7_qc2", "t7_qc3", "t7_qc4"], answer: "t7_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "two-groups", left: { items: ["t8_i1", "t8_i2"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t8_i3", "t8_i4"], bg: "#FCE7F3", border: "#EC4899" } },
    hintKey: "t8_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t8_i1", bucketId: "b1" }, { text: "t8_i2", bucketId: "b1" }, { text: "t8_i3", bucketId: "b2" }, { text: "t8_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t8_b1" }, { id: "b2", label: "t8_b2" }],
      instruction: "t8_inst",
      hint1: "t8_h1",
      hint2: "t8_h2" },
    quiz: { question: "t8_q", choices: ["t8_c1", "t8_c2", "t8_c3", "t8_c4"], answer: "t8_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "word-display", word: "t9_svg_w1", color: "#F43F5E" },
    hintKey: "t9_h1",
    interactive: { type: "gap-fill", sentence: "t9_sent", choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"], correctIndex: 0, instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { question: "t9_q", choices: ["t9_qc1", "t9_qc2", "t9_qc3", "t9_qc4"], answer: "t9_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "word-display", word: "t10_svg_w1", color: "#0EA5E9" },
    hintKey: "t10_h1",
    interactive: { type: "sentence-build", fragments: ["t10_w1", "t10_w2"],
      instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2" },
    quiz: { question: "t10_q", choices: ["t10_c1", "t10_c2", "t10_c3", "t10_c4"], answer: "t10_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "two-groups", left: { items: ["t11_i1", "t11_i2"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t11_i3", "t11_i4"], bg: "#FEF3C7", border: "#F59E0B" } },
    hintKey: "t11_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t11_i1", bucketId: "b1" }, { text: "t11_i2", bucketId: "b1" }, { text: "t11_i3", bucketId: "b2" }, { text: "t11_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t11_b1" }, { id: "b2", label: "t11_b2" }],
      instruction: "t11_inst",
      hint1: "t11_h1",
      hint2: "t11_h2" },
    quiz: { question: "t11_q", choices: ["t11_c1", "t11_c2", "t11_c3", "t11_c4"], answer: "t11_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "word-display", word: "t12_svg_w1", color: "#EF4444" },
    hintKey: "t12_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t12_l1", right: "t12_r1" }, { left: "t12_l2", right: "t12_r2" }, { left: "t12_l3", right: "t12_r3" }],
      instruction: "t12_inst",
      hint1: "t12_h1",
      hint2: "t12_h2" },
    quiz: { question: "t12_q", choices: ["t12_c1", "t12_c2", "t12_c3", "t12_c4"], answer: "t12_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "word-display", word: "t13_svg_w1", color: "#10B981" },
    hintKey: "t13_h1",
    interactive: { type: "gap-fill", sentence: "t13_sent", choices: ["t13_c1", "t13_c2", "t13_c3", "t13_c4"], correctIndex: 0, instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { question: "t13_q", choices: ["t13_qc1", "t13_qc2", "t13_qc3", "t13_qc4"], answer: "t13_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "two-groups", left: { items: ["t14_i1", "t14_i2"], bg: "#D1FAE5", border: "#10B981" }, right: { items: ["t14_i3", "t14_i4"], bg: "#FECACA", border: "#EF4444" } },
    hintKey: "t14_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t14_i1", bucketId: "b1" }, { text: "t14_i2", bucketId: "b1" }, { text: "t14_i3", bucketId: "b2" }, { text: "t14_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t14_b1" }, { id: "b2", label: "t14_b2" }],
      instruction: "t14_inst",
      hint1: "t14_h1",
      hint2: "t14_h2" },
    quiz: { question: "t14_q", choices: ["t14_c1", "t14_c2", "t14_c3", "t14_c4"], answer: "t14_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "word-display", word: "t15_svg_w1", color: "#8B5CF6" },
    hintKey: "t15_h1",
    interactive: { type: "gap-fill", sentence: "t15_sent", choices: ["t15_c1", "t15_c2", "t15_c3", "t15_c4"], correctIndex: 0, instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { question: "t15_q", choices: ["t15_qc1", "t15_qc2", "t15_qc3", "t15_qc4"], answer: "t15_qc1" }
  }
];
// ═══════════════════════════════════════════════════════════════════════════
// i8 — FIGURATIVE FALLS
// Topics: similes vs metaphors, personification, hyperbole, alliteration,
//         onomatopoeia, idioms, proverbs, imagery (visual/sound/smell)
// ═══════════════════════════════════════════════════════════════════════════

export const FIGURATIVE_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Figurative Falls",

    // T1 - Simile
    t1_title: "Similes",
    t1_text: "A simile compares two different things using the words 'like' or 'as'. Example: 'He is as fast as lightning.'",
    t1_inst: "Highlight the word that makes this a simile!",
    t1_h1: "Look for 'like' or 'as'.",
    t1_h2: "Highlight 'like'.",
    t1_sent: "She swims like a fish.",
    t1_target: "like",
    t1_q: "What words do similes always use to make a comparison?",
    t1_c1: "like or as", t1_c2: "is or are", t1_c3: "has or have", t1_c4: "then or than",
    t1_svg_w1: "Simile",

    // T2 - Metaphor
    t2_title: "Metaphors",
    t2_text: "A metaphor compares two things directly WITHOUT using 'like' or 'as'. It says one thing IS another. Example: 'He is a rock.'",
    t2_inst: "Fill in the blank to complete the metaphor!",
    t2_h1: "We are saying the classroom IS a zoo.",
    t2_h2: "Use 'is' or 'was'.",
    t2_sent: "The classroom ___ a zoo today.",
    t2_c1: "was", t2_c2: "like", t2_c3: "as", t2_c4: "than",
    t2_q: "Which of the following is a metaphor?",
    t2_qc1: "The snow is a white blanket.", t2_qc2: "The snow is like a blanket.", t2_qc3: "The snow is as white as milk.", t2_qc4: "The snow is cold.",
    t2_svg_w1: "Metaphor",

    // T3 - Simile vs Metaphor
    t3_title: "Simile or Metaphor?",
    t3_text: "Remember: Similes use 'like' or 'as'. Metaphors do not.",
    t3_inst: "Sort the sentences into Similes and Metaphors!",
    t3_h1: "'As brave as a lion' uses 'as'. 'Life is a rollercoaster' uses 'is'.",
    t3_h2: "Simile = like/as.",
    t3_b1: "Simile (like/as)", t3_b2: "Metaphor (is/are)",
    t3_i1: "As cold as ice", t3_i2: "Slept like a log", t3_i3: "Time is money", t3_i4: "You are my sunshine",
    t3_q: "Is 'Her smile is like the sun' a simile or a metaphor?",
    t3_qc1: "Simile", t3_qc2: "Metaphor", t3_qc3: "Both", t3_qc4: "Neither",
    t3_svg_l1: "Simile", t3_svg_r1: "Metaphor",

    // T4 - Personification
    t4_title: "Personification",
    t4_text: "Personification is giving human qualities to animals, objects, or ideas. Example: 'The wind whispered in my ear.' (The wind can't really whisper!)",
    t4_inst: "Highlight the human action in the sentence!",
    t4_h1: "What is the fire doing that only a human can do?",
    t4_h2: "Highlight 'danced'.",
    t4_sent: "The fire danced in the dark.",
    t4_target: "danced",
    t4_q: "Which sentence uses personification?",
    t4_c1: "The stars winked at me.", t4_c2: "The stars are bright.", t4_c3: "I saw a shooting star.", t4_c4: "The star is like a diamond.",
    t4_svg_w1: "Personification",

    // T5 - Hyperbole
    t5_title: "Hyperbole",
    t5_text: "A hyperbole is an extreme exaggeration used for effect. Example: 'I've told you a million times!' (You haven't really said it a million times).",
    t5_inst: "Fill in the blank to make an extreme exaggeration!",
    t5_h1: "Choose the most exaggerated option.",
    t5_h2: "A ton weighs a lot!",
    t5_sent: "My backpack weighs a ___!",
    t5_c1: "ton", t5_c2: "pound", t5_c3: "kilogram", t5_c4: "gram",
    t5_q: "What is a hyperbole?",
    t5_qc1: "An extreme exaggeration", t5_qc2: "A comparison using 'like'", t5_qc3: "A human trait given to an object", t5_qc4: "A sound word",
    t5_svg_w1: "Hyperbole",

    // T6 - Alliteration
    t6_title: "Alliteration",
    t6_text: "Alliteration is the repetition of the same starting sound in a group of words. Example: 'Peter Piper picked a peck of pickled peppers.'",
    t6_inst: "Highlight the words that start with the same sound!",
    t6_h1: "Look for the words starting with the letter 's'.",
    t6_h2: "Highlight 'seven silly sheep'.",
    t6_sent: "I saw seven silly sheep.",
    t6_target: "seven silly sheep.",
    t6_q: "Which phrase is an example of alliteration?",
    t6_c1: "Big brown bear", t6_c2: "Fast red car", t6_c3: "Happy little dog", t6_c4: "Tall green tree",
    t6_svg_w1: "Alliteration",

    // T7 - Onomatopoeia
    t7_title: "Onomatopoeia",
    t7_text: "Onomatopoeia refers to words that imitate sounds. Examples: buzz, crash, sizzle, hiss.",
    t7_inst: "Match the sound word to its source!",
    t7_h1: "A bee goes buzz. A snake goes hiss.",
    t7_h2: "A glass breaking goes smash.",
    t7_l1: "buzz", t7_r1: "a bee",
    t7_l2: "hiss", t7_r2: "a snake",
    t7_l3: "smash", t7_r3: "breaking glass",
    t7_q: "Which word is an example of onomatopoeia?",
    t7_qc1: "sizzle", t7_qc2: "loud", t7_qc3: "quiet", t7_qc4: "music",
    t7_svg_w1: "Onomatopoeia",

    // T8 - Idiom
    t8_title: "Idioms",
    t8_text: "An idiom is a phrase that has a hidden meaning, different from its literal words. Example: 'It's raining cats and dogs' means it is raining heavily.",
    t8_inst: "Match the idiom to its real meaning!",
    t8_h1: "'A piece of cake' means it is very easy.",
    t8_h2: "'Under the weather' means sick.",
    t8_l1: "Piece of cake", t8_r1: "Very easy",
    t8_l2: "Under the weather", t8_r2: "Feeling sick",
    t8_l3: "Cold feet", t8_r3: "Feeling nervous",
    t8_q: "If something is a 'piece of cake', what is it?",
    t8_c1: "Very easy", t8_c2: "A sweet dessert", t8_c3: "Very difficult", t8_c4: "Expensive",
    t8_svg_w1: "Idiom",

    // T9 - Common idioms
    t9_title: "More Idioms",
    t9_text: "Idioms can be confusing if you translate them word for word. 'Break a leg' actually means 'Good luck'!",
    t9_inst: "Fill in the blank for this common idiom!",
    t9_h1: "Don't let the secret out!",
    t9_h2: "Spill the beans.",
    t9_sent: "Don't spill the ___! Keep it a secret.",
    t9_c1: "beans", t9_c2: "water", t9_c3: "milk", t9_c4: "juice",
    t9_q: "What does 'spill the beans' mean?",
    t9_qc1: "Reveal a secret", t9_qc2: "Drop your food", t9_qc3: "Cook dinner", t9_qc4: "Tell a lie",
    t9_svg_w1: "Spill the beans",

    // T10 - Proverbs
    t10_title: "Proverbs",
    t10_text: "A proverb is a short, traditional saying that offers advice or a truth about life. Example: 'Actions speak louder than words.'",
    t10_inst: "Put the proverb in the correct order!",
    t10_h1: "Start with 'Don't judge'.",
    t10_h2: "Don't judge a book by its cover.",
    t10_w1: "Don't", t10_w2: "judge", t10_w3: "a book", t10_w4: "by", t10_w5: "its", t10_w6: "cover.",
    t10_q: "What is the purpose of a proverb?",
    t10_c1: "To give advice or state a truth", t10_c2: "To exaggerate", t10_c3: "To imitate a sound", t10_c4: "To compare two things",
    t10_svg_w1: "Proverbs",

    // T11 - Visual Imagery
    t11_title: "Imagery (Sight)",
    t11_text: "Imagery uses descriptive words to paint a picture in the reader's mind. Visual imagery appeals to the sense of sight.",
    t11_inst: "Highlight the visual imagery!",
    t11_h1: "Find the words that describe what you see.",
    t11_h2: "Highlight 'bright, golden sun'.",
    t11_sent: "The bright, golden sun sank below the hills.",
    t11_target: "bright, golden sun",
    t11_q: "Which phrase contains visual imagery?",
    t11_qc1: "The sparkling blue water", t11_qc2: "The loud crash", t11_qc3: "The sweet taste", t11_qc4: "The soft blanket",
    t11_svg_w1: "Imagery",

    // T12 - Sound and Smell Imagery
    t12_title: "Imagery (Sound & Smell)",
    t12_text: "Imagery can also appeal to our hearing (auditory) and smelling (olfactory) senses. 'The sweet scent of fresh cookies.'",
    t12_inst: "Sort the phrases by the sense they appeal to!",
    t12_h1: "A boom is a sound. Vanilla is a smell.",
    t12_h2: "Scent and aroma go to Smell.",
    t12_b1: "Sound 👂", t12_b2: "Smell 👃",
    t12_i1: "loud rumbling", t12_i2: "crashing waves", t12_i3: "sweet vanilla", t12_i4: "smoky scent",
    t12_q: "Which sense does 'the loud, screeching siren' appeal to?",
    t12_c1: "Sound", t12_c2: "Sight", t12_c3: "Smell", t12_c4: "Taste",
    t12_svg_l1: "Sound", t12_svg_r1: "Smell",

    // T13 - Literal vs Figurative
    t13_title: "Literal vs. Figurative",
    t13_text: "Literal language means exactly what it says ('The car is fast'). Figurative language uses comparisons or exaggerations ('The car is a rocket').",
    t13_inst: "Sort the sentences into Literal and Figurative!",
    t13_h1: "If it can actually happen exactly as written, it's literal.",
    t13_h2: "'I am hungry' is literal. 'I could eat a horse' is figurative.",
    t13_b1: "Literal 📖", t13_b2: "Figurative 🎨",
    t13_i1: "He ran quickly.", t13_i2: "I am very tired.", t13_i3: "He ran like the wind.", t13_i4: "I am a zombie today.",
    t13_q: "Is 'My backpack is heavy' literal or figurative?",
    t13_qc1: "Literal", t13_qc2: "Figurative", t13_qc3: "Both", t13_qc4: "Neither",
    t13_svg_l1: "Literal", t13_svg_r1: "Figurative",

    // T14 - Effect of Figurative Language
    t14_title: "Why use it?",
    t14_text: "Authors use figurative language to make their writing more exciting, emotional, and vivid for the reader.",
    t14_inst: "Fill in the blank!",
    t14_h1: "Figurative language makes the text more...",
    t14_h2: "Exciting.",
    t14_sent: "Figurative language makes a story more ___.",
    t14_c1: "exciting", t14_c2: "boring", t14_c3: "short", t14_c4: "confusing",
    t14_q: "What is the main purpose of using figurative language?",
    t14_qc1: "To create vivid images and emotions", t14_qc2: "To write faster", t14_qc3: "To give exact, literal facts", t14_qc4: "To avoid using adjectives",
    t14_svg_w1: "Effects",

    // T15 - Mixed Review
    t15_title: "Figurative Master",
    t15_text: "You've learned all the tricks! Let's match the terms to their examples.",
    t15_inst: "Match the term to the correct example!",
    t15_h1: "Simile uses like. Hyperbole exaggerates.",
    t15_h2: "Personification gives human traits.",
    t15_l1: "Simile", t15_r1: "brave as a lion",
    t15_l2: "Personification", t15_r2: "the trees danced",
    t15_l3: "Hyperbole", t15_r3: "weighs a ton",
    t15_q: "Which term describes 'The bees buzzed'?",
    t15_c1: "Onomatopoeia", t15_c2: "Simile", t15_c3: "Metaphor", t15_c4: "Idiom",
    t15_svg_w1: "Review",
  }
};

export const FIGURATIVE_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "t1_svg_w1", color: "#3B82F6" },
    hintKey: "t1_h1",
    interactive: { type: "highlight-text", tokens: ["t1_sent"], correctIndices: [0], instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2" },
    quiz: { question: "t1_q", choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], answer: "t1_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "word-display", word: "t2_svg_w1", color: "#10B981" },
    hintKey: "t2_h1",
    interactive: { type: "gap-fill", sentence: "t2_sent", choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { question: "t2_q", choices: ["t2_qc1", "t2_qc2", "t2_qc3", "t2_qc4"], answer: "t2_qc1" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "two-groups", left: { items: ["t3_svg_l1"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t3_svg_r1"], bg: "#D1FAE5", border: "#10B981" } },
    hintKey: "t3_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t3_i1", bucketId: "b1" }, { text: "t3_i2", bucketId: "b1" }, { text: "t3_i3", bucketId: "b2" }, { text: "t3_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t3_b1" }, { id: "b2", label: "t3_b2" }],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2" },
    quiz: { question: "t3_q", choices: ["t3_qc1", "t3_qc2", "t3_qc3", "t3_qc4"], answer: "t3_qc1" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "t4_svg_w1", color: "#F59E0B" },
    hintKey: "t4_h1",
    interactive: { type: "highlight-text", tokens: ["t4_sent"], correctIndices: [0], instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2" },
    quiz: { question: "t4_q", choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"], answer: "t4_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "t5_svg_w1", color: "#EF4444" },
    hintKey: "t5_h1",
    interactive: { type: "gap-fill", sentence: "t5_sent", choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"], correctIndex: 0, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { question: "t5_q", choices: ["t5_qc1", "t5_qc2", "t5_qc3", "t5_qc4"], answer: "t5_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "word-display", word: "t6_svg_w1", color: "#8B5CF6" },
    hintKey: "t6_h1",
    interactive: { type: "highlight-text", tokens: ["t6_sent"], correctIndices: [0], instruction: "t6_inst",
      hint1: "t6_h1",
      hint2: "t6_h2" },
    quiz: { question: "t6_q", choices: ["t6_c1", "t6_c2", "t6_c3", "t6_c4"], answer: "t6_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "word-display", word: "t7_svg_w1", color: "#EC4899" },
    hintKey: "t7_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t7_l1", right: "t7_r1" }, { left: "t7_l2", right: "t7_r2" }, { left: "t7_l3", right: "t7_r3" }],
      instruction: "t7_inst",
      hint1: "t7_h1",
      hint2: "t7_h2" },
    quiz: { question: "t7_q", choices: ["t7_qc1", "t7_qc2", "t7_qc3", "t7_qc4"], answer: "t7_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "word-display", word: "t8_svg_w1", color: "#06B6D4" },
    hintKey: "t8_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }],
      instruction: "t8_inst",
      hint1: "t8_h1",
      hint2: "t8_h2" },
    quiz: { question: "t8_q", choices: ["t8_c1", "t8_c2", "t8_c3", "t8_c4"], answer: "t8_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "word-display", word: "t9_svg_w1", color: "#F97316" },
    hintKey: "t9_h1",
    interactive: { type: "gap-fill", sentence: "t9_sent", choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"], correctIndex: 0, instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { question: "t9_q", choices: ["t9_qc1", "t9_qc2", "t9_qc3", "t9_qc4"], answer: "t9_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "word-display", word: "t10_svg_w1", color: "#64748B" },
    hintKey: "t10_h1",
    interactive: { type: "sentence-build", fragments: ["t10_w1", "t10_w2", "t10_w3", "t10_w4", "t10_w5", "t10_w6"],
      instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2" },
    quiz: { question: "t10_q", choices: ["t10_c1", "t10_c2", "t10_c3", "t10_c4"], answer: "t10_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "word-display", word: "t11_svg_w1", color: "#14B8A6" },
    hintKey: "t11_h1",
    interactive: { type: "highlight-text", tokens: ["t11_sent"], correctIndices: [0], instruction: "t11_inst",
      hint1: "t11_h1",
      hint2: "t11_h2" },
    quiz: { question: "t11_q", choices: ["t11_qc1", "t11_qc2", "t11_qc3", "t11_qc4"], answer: "t11_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "two-groups", left: { items: ["t12_svg_l1"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t12_svg_r1"], bg: "#FEF3C7", border: "#F59E0B" } },
    hintKey: "t12_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b1" }, { text: "t12_i3", bucketId: "b2" }, { text: "t12_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t12_b1" }, { id: "b2", label: "t12_b2" }],
      instruction: "t12_inst",
      hint1: "t12_h1",
      hint2: "t12_h2" },
    quiz: { question: "t12_q", choices: ["t12_c1", "t12_c2", "t12_c3", "t12_c4"], answer: "t12_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "two-groups", left: { items: ["t13_svg_l1"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t13_svg_r1"], bg: "#FCE7F3", border: "#EC4899" } },
    hintKey: "t13_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t13_i1", bucketId: "b1" }, { text: "t13_i2", bucketId: "b1" }, { text: "t13_i3", bucketId: "b2" }, { text: "t13_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t13_b1" }, { id: "b2", label: "t13_b2" }],
      instruction: "t13_inst",
      hint1: "t13_h1",
      hint2: "t13_h2" },
    quiz: { question: "t13_q", choices: ["t13_qc1", "t13_qc2", "t13_qc3", "t13_qc4"], answer: "t13_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "word-display", word: "t14_svg_w1", color: "#A855F7" },
    hintKey: "t14_h1",
    interactive: { type: "gap-fill", sentence: "t14_sent", choices: ["t14_c1", "t14_c2", "t14_c3", "t14_c4"], correctIndex: 0, instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { question: "t14_q", choices: ["t14_qc1", "t14_qc2", "t14_qc3", "t14_qc4"], answer: "t14_qc1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "word-display", word: "t15_svg_w1", color: "#3B82F6" },
    hintKey: "t15_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t15_l1", right: "t15_r1" }, { left: "t15_l2", right: "t15_r2" }, { left: "t15_l3", right: "t15_r3" }],
      instruction: "t15_inst",
      hint1: "t15_h1",
      hint2: "t15_h2" },
    quiz: { question: "t15_q", choices: ["t15_c1", "t15_c2", "t15_c3", "t15_c4"], answer: "t15_c1" }
  }
];

// ═══════════════════════════════════════════════════════════════════════════
// i9 — ACADEMIC ATOLL
// Topics: Mixed review of K5 (Conjunctions, Tenses, Clauses, Punctuation, Roots, Figurative)
// ═══════════════════════════════════════════════════════════════════════════

export const BIGTEST5_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Academic Atoll",

    // T1 - Conjunctions (FANBOYS)
    t1_title: "FANBOYS Review",
    t1_text: "Let's review! Use 'and' for addition, 'but' for contrast, and 'so' for result.",
    t1_inst: "Fill in the blank!",
    t1_h1: "He liked it, which is the reason he bought it.",
    t1_h2: "Use 'so' to show result.",
    t1_sent: "He liked the shirt, ___ he bought it.",
    t1_c1: "so", t1_c2: "but", t1_c3: "or", t1_c4: "nor",
    t1_q: "Which conjunction shows a result?",
    t1_qc1: "so", t1_qc2: "and", t1_qc3: "but", t1_qc4: "yet",
    t1_svg_w1: "FANBOYS",

    // T2 - Subordinating Conjunctions
    t2_title: "Subordinating Review",
    t2_text: "'Because' gives a reason. 'Although' shows a surprising contrast.",
    t2_inst: "Highlight the subordinating conjunction!",
    t2_h1: "Find the word that gives a reason.",
    t2_h2: "Highlight 'because'.",
    t2_sent: "We won the game because we practiced hard.",
    t2_target: "because",
    t2_q: "Which of the following is a subordinating conjunction?",
    t2_c1: "although", t2_c2: "and", t2_c3: "but", t2_c4: "so",
    t2_svg_w1: "Subordinating",

    // T3 - Interjections
    t3_title: "Interjections Review",
    t3_text: "Strong interjections show intense emotion and use an exclamation mark (!).",
    t3_inst: "Sort into Strong and Mild!",
    t3_h1: "Ouch! is strong. Oh, is mild.",
    t3_h2: "Punctuation helps! ! = Strong, , = Mild.",
    t3_b1: "Strong (!)", t3_b2: "Mild (,)",
    t3_i1: "Wow!", t3_i2: "Ouch!", t3_i3: "Well,", t3_i4: "Oh,",
    t3_q: "What punctuation follows a mild interjection?",
    t3_qc1: "Comma", t3_qc2: "Exclamation mark", t3_qc3: "Period", t3_qc4: "Question mark",
    t3_svg_l1: "Strong", t3_svg_r1: "Mild",

    // T4 - Tenses (Present Perfect)
    t4_title: "Present Perfect Review",
    t4_text: "Present perfect uses 'have/has' + past participle. 'I have seen that movie.'",
    t4_inst: "Build the sentence!",
    t4_h1: "Start with 'They have'.",
    t4_h2: "They have finished the test.",
    t4_w1: "They", t4_w2: "have", t4_w3: "finished", t4_w4: "the test.",
    t4_q: "Which sentence is in the present perfect tense?",
    t4_c1: "I have eaten.", t4_c2: "I ate.", t4_c3: "I will eat.", t4_c4: "I had eaten.",
    t4_svg_w1: "Present Perfect",

    // T5 - Tenses (Past Perfect)
    t5_title: "Past Perfect Review",
    t5_text: "Past perfect uses 'had' + past participle for an older past action. 'She had already left when I arrived.'",
    t5_inst: "Fill in the blank!",
    t5_h1: "Use 'had' + past participle.",
    t5_h2: "had started.",
    t5_sent: "By the time we got there, the show ___ ___.",
    t5_c1: "had started", t5_c2: "has started", t5_c3: "started", t5_c4: "will start",
    t5_q: "When do we use the past perfect tense?",
    t5_qc1: "For an action completed before another past action", t5_qc2: "For an action happening now", t5_qc3: "For a future action", t5_qc4: "For a daily habit",
    t5_svg_w1: "Past Perfect",

    // T6 - Relative Clauses
    t6_title: "Relative Clause Review",
    t6_text: "Use 'who' for people and 'which' or 'that' for things.",
    t6_inst: "Fill in the blank!",
    t6_h1: "The sentence describes a thing (the book).",
    t6_h2: "Use 'which'.",
    t6_sent: "The book, ___ is on the desk, is mine.",
    t6_c1: "which", t6_c2: "who", t6_c3: "whom", t6_c4: "where",
    t6_q: "Which relative pronoun is used for people?",
    t6_qc1: "who", t6_qc2: "which", t6_qc3: "what", t6_qc4: "where",
    t6_svg_w1: "Relative Clauses",

    // T7 - Semicolons
    t7_title: "Semicolon Review",
    t7_text: "A semicolon (;) joins two related independent clauses. 'It was dark; we turned on the lights.'",
    t7_inst: "Fill in the correct punctuation!",
    t7_h1: "These are two full, related sentences.",
    t7_h2: "Use the semicolon (;).",
    t7_sent: "I love reading ___ my brother loves sports.",
    t7_c1: ";", t7_c2: ",", t7_c3: ":", t7_c4: "-",
    t7_q: "What can a semicolon replace?",
    t7_qc1: "A period or a comma with a conjunction", t7_qc2: "An exclamation mark", t7_qc3: "A question mark", t7_qc4: "An apostrophe",
    t7_svg_w1: "Semicolon (;)",

    // T8 - Apostrophes
    t8_title: "Apostrophe Review",
    t8_text: "Apostrophes show contractions (it's = it is) or ownership (the dog's toy).",
    t8_inst: "Match the word to its meaning!",
    t8_h1: "It's = it is. Its = belonging to it.",
    t8_h2: "They're = they are.",
    t8_l1: "It's", t8_r1: "It is",
    t8_l2: "Its", t8_r2: "Belonging to it",
    t8_l3: "They're", t8_r3: "They are",
    t8_q: "Which word shows ownership?",
    t8_c1: "their", t8_c2: "they're", t8_c3: "there", t8_c4: "it's",
    t8_svg_w1: "Apostrophe (')",

    // T9 - Spelling (ie vs ei)
    t9_title: "Spelling Review (ie/ei)",
    t9_text: "I before E, except after C! (believe vs receive).",
    t9_inst: "Fill in the blank!",
    t9_h1: "There is no C, so use 'ie'.",
    t9_h2: "p-i-e-c-e.",
    t9_sent: "Can I have a ___ of cake?",
    t9_c1: "piece", t9_c2: "peice", t9_c3: "peese", t9_c4: "peace",
    t9_q: "Which word is an exception to the 'I before E' rule because of a 'C'?",
    t9_qc1: "receive", t9_qc2: "believe", t9_qc3: "chief", t9_qc4: "field",
    t9_svg_w1: "I before E",

    // T10 - Spelling (Suffixes)
    t10_title: "Suffix Review",
    t10_text: "Drop the silent 'e' before a vowel suffix (make -> making). Keep it before a consonant suffix (hope -> hopeful).",
    t10_inst: "Sort into Drop E and Keep E!",
    t10_h1: "-ing starts with a vowel (Drop). -ful starts with a consonant (Keep).",
    t10_h2: "making (Drop), careful (Keep).",
    t10_b1: "Drop 'e'", t10_b2: "Keep 'e'",
    t10_i1: "making", t10_i2: "writing", t10_i3: "hopeful", t10_i4: "careful",
    t10_q: "What is the correct spelling of 'move' + 'ment'?",
    t10_c1: "movement", t10_c2: "movment", t10_c3: "moveing", t10_c4: "movable",
    t10_svg_l1: "Drop 'E'", t10_svg_r1: "Keep 'E'",

    // T11 - Latin Roots
    t11_title: "Latin Roots Review",
    t11_text: "aud = hear (audio). vis = see (vision). port = carry (transport).",
    t11_inst: "Match the root to its meaning!",
    t11_h1: "aud = hear. port = carry.",
    t11_h2: "vis = see.",
    t11_l1: "aud", t11_r1: "hear",
    t11_l2: "vis", t11_r2: "see",
    t11_l3: "port", t11_r3: "carry",
    t11_q: "What does the root 'rupt' mean?",
    t11_c1: "break", t11_c2: "say", t11_c3: "carry", t11_c4: "see",
    t11_svg_w1: "Latin Roots",

    // T12 - Greek Roots
    t12_title: "Greek Roots Review",
    t12_text: "bio = life. geo = earth. photo = light. tele = far.",
    t12_inst: "Match the Greek root to its meaning!",
    t12_h1: "bio = life. geo = earth.",
    t12_h2: "photo = light.",
    t12_l1: "bio", t12_r1: "life",
    t12_l2: "geo", t12_r2: "earth",
    t12_l3: "photo", t12_r3: "light",
    t12_q: "Which word means 'the study of earth'?",
    t12_c1: "geology", t12_c2: "biology", t12_c3: "telepathy", t12_c4: "photography",
    t12_svg_w1: "Greek Roots",

    // T13 - Figurative Language 1
    t13_title: "Simile & Metaphor",
    t13_text: "Similes use 'like' or 'as'. Metaphors say one thing IS another.",
    t13_inst: "Match the type to the example!",
    t13_h1: "Simile = as brave as a lion.",
    t13_h2: "Metaphor = he is a rock.",
    t13_l1: "Simile", t13_r1: "As cold as ice",
    t13_l2: "Metaphor", t13_r2: "The snow is a blanket",
    t13_q: "What is a direct comparison that does not use 'like' or 'as'?",
    t13_c1: "Metaphor", t13_c2: "Simile", t13_c3: "Personification", t13_c4: "Hyperbole",
    t13_svg_w1: "Comparisons",

    // T14 - Figurative Language 2
    t14_title: "Personification & Hyperbole",
    t14_text: "Personification = human traits. Hyperbole = extreme exaggeration.",
    t14_inst: "Match the term to the example!",
    t14_h1: "Hyperbole = weighs a ton.",
    t14_h2: "Personification = trees danced.",
    t14_l1: "Hyperbole", t14_r1: "I've told you a million times!",
    t14_l2: "Personification", t14_r2: "The wind whispered.",
    t14_q: "Giving human qualities to non-human things is called...",
    t14_c1: "Personification", t14_c2: "Alliteration", t14_c3: "Hyperbole", t14_c4: "Simile",
    t14_svg_w1: "Figurative Lang",

    // T15 - Ultimate K5 Master
    t15_title: "K5 Ultimate Master",
    t15_text: "Congratulations! You've mastered English K5! Let's do one final sentence build.",
    t15_inst: "Build the complex sentence!",
    t15_h1: "Start with 'Although'.",
    t15_h2: "Although it was difficult, we finished the test.",
    t15_w1: "Although", t15_w2: "it was difficult,", t15_w3: "we", t15_w4: "finished", t15_w5: "the test.",
    t15_q: "Which clause type cannot stand alone as a sentence?",
    t15_c1: "Dependent clause", t15_c2: "Independent clause", t15_c3: "Main clause", t15_c4: "Simple sentence",
    t15_svg_icon: "🎓", t15_svg_lbl: "K5 Graduate",
  }
};

export const BIGTEST5_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "t1_svg_w1", color: "#3B82F6" },
    hintKey: "t1_h1",
    interactive: { type: "gap-fill", sentence: "t1_sent", choices: ["t1_c1", "t1_c2", "t1_c3", "t1_c4"], correctIndex: 0, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { question: "t1_q", choices: ["t1_qc1", "t1_qc2", "t1_qc3", "t1_qc4"], answer: "t1_qc1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "word-display", word: "t2_svg_w1", color: "#10B981" },
    hintKey: "t2_h1",
    interactive: { type: "highlight-text", tokens: ["t2_sent"], correctIndices: [0], instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2" },
    quiz: { question: "t2_q", choices: ["t2_c1", "t2_c2", "t2_c3", "t2_c4"], answer: "t2_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "two-groups", left: { items: ["t3_i1", "t3_i2"], bg: "#FECACA", border: "#EF4444" }, right: { items: ["t3_i3", "t3_i4"], bg: "#DBEAFE", border: "#3B82F6" } },
    hintKey: "t3_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t3_i1", bucketId: "b1" }, { text: "t3_i2", bucketId: "b1" }, { text: "t3_i3", bucketId: "b2" }, { text: "t3_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t3_b1" }, { id: "b2", label: "t3_b2" }],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2" },
    quiz: { question: "t3_q", choices: ["t3_qc1", "t3_qc2", "t3_qc3", "t3_qc4"], answer: "t3_qc1" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "t4_svg_w1", color: "#F59E0B" },
    hintKey: "t4_h1",
    interactive: { type: "sentence-build", fragments: ["t4_w1", "t4_w2", "t4_w3", "t4_w4"],
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2" },
    quiz: { question: "t4_q", choices: ["t4_c1", "t4_c2", "t4_c3", "t4_c4"], answer: "t4_c1" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "t5_svg_w1", color: "#8B5CF6" },
    hintKey: "t5_h1",
    interactive: { type: "gap-fill", sentence: "t5_sent", choices: ["t5_c1", "t5_c2", "t5_c3", "t5_c4"], correctIndex: 0, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { question: "t5_q", choices: ["t5_qc1", "t5_qc2", "t5_qc3", "t5_qc4"], answer: "t5_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "word-display", word: "t6_svg_w1", color: "#EC4899" },
    hintKey: "t6_h1",
    interactive: { type: "gap-fill", sentence: "t6_sent", choices: ["t6_c1", "t6_c2", "t6_c3", "t6_c4"], correctIndex: 0, instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { question: "t6_q", choices: ["t6_qc1", "t6_qc2", "t6_qc3", "t6_qc4"], answer: "t6_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "word-display", word: "t7_svg_w1", color: "#14B8A6" },
    hintKey: "t7_h1",
    interactive: { type: "gap-fill", sentence: "t7_sent", choices: ["t7_c1", "t7_c2", "t7_c3", "t7_c4"], correctIndex: 0, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { question: "t7_q", choices: ["t7_qc1", "t7_qc2", "t7_qc3", "t7_qc4"], answer: "t7_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "word-display", word: "t8_svg_w1", color: "#F43F5E" },
    hintKey: "t8_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }],
      instruction: "t8_inst",
      hint1: "t8_h1",
      hint2: "t8_h2" },
    quiz: { question: "t8_q", choices: ["t8_c1", "t8_c2", "t8_c3", "t8_c4"], answer: "t8_c1" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "word-display", word: "t9_svg_w1", color: "#0EA5E9" },
    hintKey: "t9_h1",
    interactive: { type: "gap-fill", sentence: "t9_sent", choices: ["t9_c1", "t9_c2", "t9_c3", "t9_c4"], correctIndex: 0, instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { question: "t9_q", choices: ["t9_qc1", "t9_qc2", "t9_qc3", "t9_qc4"], answer: "t9_qc1" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "two-groups", left: { items: ["t10_i1", "t10_i2"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["t10_i3", "t10_i4"], bg: "#FEF3C7", border: "#F59E0B" } },
    hintKey: "t10_h1",
    interactive: { type: "drag-to-bucket", items: [{ text: "t10_i1", bucketId: "b1" }, { text: "t10_i2", bucketId: "b1" }, { text: "t10_i3", bucketId: "b2" }, { text: "t10_i4", bucketId: "b2" }], buckets: [{ id: "b1", label: "t10_b1" }, { id: "b2", label: "t10_b2" }],
      instruction: "t10_inst",
      hint1: "t10_h1",
      hint2: "t10_h2" },
    quiz: { question: "t10_q", choices: ["t10_c1", "t10_c2", "t10_c3", "t10_c4"], answer: "t10_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "word-display", word: "t11_svg_w1", color: "#3B82F6" },
    hintKey: "t11_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t11_l1", right: "t11_r1" }, { left: "t11_l2", right: "t11_r2" }, { left: "t11_l3", right: "t11_r3" }],
      instruction: "t11_inst",
      hint1: "t11_h1",
      hint2: "t11_h2" },
    quiz: { question: "t11_q", choices: ["t11_c1", "t11_c2", "t11_c3", "t11_c4"], answer: "t11_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "word-display", word: "t12_svg_w1", color: "#10B981" },
    hintKey: "t12_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t12_l1", right: "t12_r1" }, { left: "t12_l2", right: "t12_r2" }, { left: "t12_l3", right: "t12_r3" }],
      instruction: "t12_inst",
      hint1: "t12_h1",
      hint2: "t12_h2" },
    quiz: { question: "t12_q", choices: ["t12_c1", "t12_c2", "t12_c3", "t12_c4"], answer: "t12_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "word-display", word: "t13_svg_w1", color: "#F59E0B" },
    hintKey: "t13_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t13_l1", right: "t13_r1" }, { left: "t13_l2", right: "t13_r2" }],
      instruction: "t13_inst",
      hint1: "t13_h1",
      hint2: "t13_h2" },
    quiz: { question: "t13_q", choices: ["t13_c1", "t13_c2", "t13_c3", "t13_c4"], answer: "t13_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "word-display", word: "t14_svg_w1", color: "#EF4444" },
    hintKey: "t14_h1",
    interactive: { type: "match-pairs", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }],
      instruction: "t14_inst",
      hint1: "t14_h1",
      hint2: "t14_h2" },
    quiz: { question: "t14_q", choices: ["t14_c1", "t14_c2", "t14_c3", "t14_c4"], answer: "t14_c1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "t15_svg_icon", title: "t15_svg_lbl", color: "#8B5CF6" },
    hintKey: "t15_h1",
    interactive: { type: "sentence-build", fragments: ["t15_w1", "t15_w2", "t15_w3", "t15_w4", "t15_w5"],
      instruction: "t15_inst",
      hint1: "t15_h1",
      hint2: "t15_h2" },
    quiz: { question: "t15_q", choices: ["t15_c1", "t15_c2", "t15_c3", "t15_c4"], answer: "t15_c1" }
  }
];