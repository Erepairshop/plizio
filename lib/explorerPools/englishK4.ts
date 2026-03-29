// lib/explorerPools/englishK4.ts

import type { PoolTopicDef } from "./types";

// ═══════════════════════════════════════════════════════════════════════════
// i1 — ADJECTIVE
// ═══════════════════════════════════════════════════════════════════════════

export const ADJECTIVE_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Amazing Adjectives",
    t1_title: "Describing People",
    t1_text: "Adjectives describe nouns. Example: 'The tall man.'",
    t1_inst: "Order the words to describe a person:",
    t1_h1: "Start with 'The'.",
    t1_h2: "The adjective 'kind' comes before 'teacher'.",
    t1_q: "Which is an adjective?",
    t1_qa: "kind", t1_qb: "run", t1_qc: "slowly", t1_qd: "book",
    t1_w1: "The", t1_w2: "kind", t1_w3: "teacher", t1_w4: "helped", t1_w5: "the", t1_w6: "new", t1_w7: "student.",

    t2_title: "Colors and Sizes",
    t2_text: "We often use colors and sizes together. Example: 'A big red ball.'",
    t2_inst: "Match the object to its description:",
    t2_h1: "Think about color and size.",
    t2_h2: "Elephant -> Big, Sun -> Yellow.",
    t2_q: "Which describes an elephant?",
    t2_qa: "huge", t2_qb: "tiny", t2_qc: "yellow", t2_qd: "blue",
    t2_l1: "Elephant", t2_r1: "Huge and grey",
    t2_l2: "Mouse", t2_r2: "Small and fast",
    t2_l3: "Sun", t2_r3: "Big and yellow",

    t3_title: "Adjective Order",
    t3_text: "Opinion comes before size. Example: 'A beautiful small garden.'",
    t3_inst: "Choose the correct order:",
    t3_h1: "Opinion (nice) first, then size (big).",
    t3_h2: "Look for 'nice big house'.",
    t3_q: "Which is correct?",
    t3_qa: "a nice big house", t3_qb: "a big nice house", t3_qc: "a house nice big", t3_qd: "nice house big",
    t3_sent: "They live in a ___ garden.",
    t3_qa2: "beautiful large", t3_qb2: "large beautiful", t3_qc2: "beautifully large", t3_qd2: "large beautifully",

    t4_title: "Feelings",
    t4_text: "Adjectives can describe how we feel. Example: happy, sad, excited.",
    t4_inst: "Highlight the feeling adjective:",
    t4_h1: "Look for 'excited'.",
    t4_h2: "It describes the children.",
    t4_q: "Which is a feeling?",
    t4_qa: "excited", t4_qb: "green", t4_qc: "loudly", t4_qd: "table",
    t4_tk1: "The", t4_tk2: "children", t4_tk3: "were", t4_tk4: "very", t4_tk5: "excited", t4_tk6: "about", t4_tk7: "the", t4_tk8: "school", t4_tk9: "trip.",

    t5_title: "Opposite Adjectives",
    t5_text: "Adjectives often have opposites. Example: hot/cold, fast/slow.",
    t5_inst: "Build a sentence with an opposite:",
    t5_h1: "Start with 'The ice'.",
    t5_h2: "Use 'is very cold'.",
    t5_q: "Opposite of 'fast'?",
    t5_qa: "slow", t5_qb: "quick", t5_qc: "happy", t5_qd: "big",
    t5_f1: "The ice", t5_f2: "is very", t5_f3: "cold and", t5_f4: "hard.",

    t6_title: "Adjective Sorter",
    t6_text: "Group by Size vs Color.",
    t6_inst: "Sort by Adjective Type:",
    t6_h1: "Is it a color or a size?",
    t6_h2: "Blue vs. Large.",
    t6_q: "Which is a size?",
    t6_qa: "tiny", t6_qb: "red", t6_qc: "green", t6_qd: "purple",
    t6_bl1: "Size", t6_bl2: "Color",
    t6_i1: "Large", t6_i2: "Blue",
    t6_i3: "Small", t6_i4: "Green",

    t7_title: "Describing Places",
    t7_text: "Quiet, noisy, busy, empty.",
    t7_inst: "Order for a place description:",
    t7_h1: "Start with 'The city'.",
    t7_h2: "Use 'busy and noisy'.",
    t7_q: "Which describes a library?",
    t7_qa: "quiet", t7_qb: "noisy", t7_qc: "fast", t7_qd: "hot",
    t7_w1: "The", t7_w2: "city", t7_w3: "was", t7_w4: "very", t7_w5: "busy", t7_w6: "and", t7_w7: "noisy", t7_w8: "today.",

    t8_title: "Texture Match",
    t8_text: "Match the adjective to the object's texture.",
    t8_inst: "Match Object to Texture:",
    t8_h1: "Rock -> Hard.",
    t8_h2: "Fur -> Soft.",
    t8_q: "Which is soft?",
    t8_qa: "fur", t8_qb: "rock", t8_qc: "glass", t8_qd: "metal",
    t8_l1: "Rock", t8_r1: "Hard",
    t8_l2: "Pillow", t8_r2: "Soft",
    t8_l3: "Ice", t8_r3: "Cold",

    t9_title: "Weather Adjectives",
    t9_text: "Sunny, rainy, foggy, windy.",
    t9_inst: "Choose for a storm:",
    t9_h1: "Lots of wind and rain.",
    t9_h2: "Use 'stormy'.",
    t9_q: "Which is weather?",
    t9_qa: "sunny", t9_qb: "chair", t9_qc: "eat", t9_qd: "fast",
    t9_sent: "It is a very ___ day, let's go out.",
    t9_qa2: "sunny", t9_qb2: "rainy", t9_qc2: "windy", t9_qd2: "stormy",

    t10_title: "Adjective Highlight 2",
    t10_text: "Finding multiple adjectives in a sentence.",
    t10_inst: "Highlight the adjectives:",
    t10_h1: "Look for 'beautiful' and 'long'.",
    t10_h2: "They describe the dress.",
    t10_q: "What are the adjectives?",
    t10_qa: "beautiful, long", t10_qb: "she, wore", t10_qc: "dress, party", t10_qd: "the, a",
    t10_tk1: "She", t10_tk2: "wore", t10_tk3: "a", t10_tk4: "beautiful,", t10_tk5: "long", t10_tk6: "blue", t10_tk7: "dress", t10_tk8: "to", t10_tk9: "the", t10_tk10: "party.",

    t11_title: "Adjective Build 2",
    t11_text: "Build a sentence about a clever animal.",
    t11_inst: "Build a 'clever' sentence:",
    t11_h1: "Start with 'The dolphin'.",
    t11_h2: "Use 'is a clever animal'.",
    t11_q: "Which means smart?",
    t11_qa: "clever", t11_qb: "kind", t11_qc: "slow", t11_qd: "tall",
    t11_f1: "The dolphin", t11_f2: "is", t11_f3: "a very", t11_f4: "clever animal.",

    t12_title: "Positive Sorter",
    t12_text: "Sort by Positive vs Negative adjectives.",
    t12_inst: "Sort by Meaning:",
    t12_h1: "Good or bad feeling?",
    t12_h2: "Friendly (+) vs Angry (-).",
    t12_q: "Which is positive?",
    t12_qa: "wonderful", t12_qb: "terrible", t12_qc: "boring", t12_qd: "scary",
    t12_bl1: "Positive", t12_bl2: "Negative",
    t12_i1: "Friendly", t12_i2: "Angry",
    t12_i3: "Helpful", t12_i4: "Lazy",

    t13_title: "Food Gap-Fill",
    t13_text: "Fill in the food description.",
    t13_inst: "Choose for the taste:",
    t13_h1: "Lemons are not sweet.",
    t13_h2: "Use 'sour'.",
    t13_q: "Lemons are ___.",
    t13_qa: "sour", t13_qb: "sweet", t13_qc: "salty", t13_qd: "hot",
    t13_sent: "This cake is very ___, I love it!",
    t13_qa2: "delicious", t13_qb2: "sour", t13_qc2: "bitter", t13_qd2: "hard",

    t14_title: "Final Match 1",
    t14_text: "Final adjective review.",
    t14_inst: "Match the pairs:",
    t14_h1: "Opposites review.",
    t14_h2: "Tall -> Short.",
    t14_q: "Which is correct?",
    t14_qa: "Rich -> Poor", t14_qb: "Hot -> Heat", t14_qc: "Fast -> Speed", t14_qd: "Big -> Large",
    t14_l1: "Tall", t14_r1: "Short",
    t14_l2: "Empty", t14_r2: "Full",
    t14_l3: "Old", t14_r3: "New",

    t15_title: "Adjective Review",
    t15_text: "Final review of Grade 4 adjectives.",
    t15_inst: "Pick the best adjective:",
    t15_h1: "Think about the sky at night.",
    t15_h2: "It is dark and full of stars.",
    t15_q: "The night sky was ___.",
    t15_qa: "starry", t15_qb: "green", t15_qc: "noisy", t15_qd: "hot",
    t15_sent: "He is a ___ boy, he always helps.",
    t15_qa2: "helpful", t15_qb2: "loud", t15_qc2: "mean", t15_qd2: "slow",
  },
};

export const ADJECTIVE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "kind", color: "#10B981" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "huge", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "order", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "feeling", color: "#10B981" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9"], correctIndices: [4] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "cold", color: "#10B981" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#10B981" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "noisy", color: "#10B981" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7", "t7_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "soft", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "stormy", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "dress", color: "#10B981" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9", "t10_tk10"], correctIndices: [3, 4, 5] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "clever", color: "#10B981" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#10B981" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "lemon", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i2 — ADVERB
// ═══════════════════════════════════════════════════════════════════════════

export const ADVERB_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Active Adverbs",
    t1_title: "Manner: How?",
    t1_text: "Adverbs tell us how an action is performed. Example: 'He walks slowly.'",
    t1_inst: "Order the words for an action description:",
    t1_h1: "Start with 'The choir'.",
    t1_h2: "The adverb 'beautifully' comes at the end.",
    t1_q: "Which is an adverb?",
    t1_qa: "beautifully", t1_qb: "beauty", t1_qc: "beautiful", t1_qd: "beauties",
    t1_w1: "The", t1_w2: "choir", t1_w3: "sang", t1_w4: "the", t1_w5: "song", t1_w6: "very", t1_w7: "beautifully.",

    t2_title: "Frequency: How often?",
    t2_text: "Words like 'always', 'sometimes', 'never'. Example: 'I always study.'",
    t2_inst: "Match the frequency to its meaning:",
    t2_h1: "Think about the percentage.",
    t2_h2: "Never -> 0%, Always -> 100%.",
    t2_q: "Which shows frequency?",
    t2_qa: "often", t2_qb: "softly", t2_qc: "well", t2_qd: "fast",
    t2_l1: "Always", t2_r1: "Every time",
    t2_l2: "Sometimes", t2_r2: "Some of the time",
    t2_l3: "Never", t2_r3: "Not at any time",

    t3_title: "Adjective vs Adverb",
    t3_text: "Adjectives describe things; adverbs describe actions. Example: 'A quick runner' vs 'He runs quickly.'",
    t3_inst: "Choose for the action:",
    t3_h1: "How did he run?",
    t3_h2: "Use 'quickly' for the action.",
    t3_q: "He ran ___.",
    t3_qa: "quickly", t3_qb: "quick", t3_qc: "quicks", t3_qd: "quickness",
    t3_sent: "The turtle moved very ___.",
    t3_qa2: "slowly", t3_qb2: "slow", t3_qc2: "slowness", t3_qd2: "slowing",

    t4_title: "Adverb Highlight",
    t4_text: "Finding the adverb in a sentence.",
    t4_inst: "Highlight the adverb of manner:",
    t4_h1: "Look for 'neatly'.",
    t4_h2: "It describes how she wrote.",
    t4_q: "What is the adverb?",
    t4_qa: "neatly", t4_qb: "she", t4_qc: "wrote", t4_qd: "notes",
    t4_tk1: "She", t4_tk2: "wrote", t4_tk3: "her", t4_tk4: "class", t4_tk5: "notes", t4_tk6: "very", t4_tk7: "neatly", t4_tk8: "today.",

    t5_title: "Adverb Build",
    t5_text: "Build a sentence describing a quiet action.",
    t5_inst: "Build a 'quietly' sentence:",
    t5_h1: "Start with 'The cat'.",
    t5_h2: "Use 'walked quietly'.",
    t5_q: "Adverb of 'quiet'?",
    t5_qa: "quietly", t5_qb: "quieter", t5_qc: "quiet", t5_qd: "quietness",
    t5_f1: "The cat", t5_f2: "walked", t5_f3: "very quietly", t5_f4: "through the room.",

    t6_title: "Adverb Sorter",
    t6_text: "Group by Manner vs Time.",
    t6_inst: "Sort by Adverb Type:",
    t6_h1: "How or When?",
    t6_h2: "Fast vs Soon.",
    t6_q: "Which is time?",
    t6_qa: "soon", t6_qb: "happily", t6_qc: "sadly", t6_qd: "loudly",
    t6_bl1: "Manner", t6_bl2: "Time",
    t6_i1: "Quickly", t6_i2: "Yesterday",
    t6_i3: "Gently", t6_i4: "Soon",

    t7_title: "Adverbs of Place",
    t7_text: "Words like: here, there, inside, outside.",
    t7_inst: "Order for a place description:",
    t7_h1: "Start with 'They are'.",
    t7_h2: "Use 'outside' at the end.",
    t7_q: "Which is a place?",
    t7_qa: "outside", t7_qb: "always", t7_qc: "fast", t7_qd: "slowly",
    t7_w1: "They", t7_w2: "are", t7_w3: "playing", t7_w4: "soccer", t7_w5: "with", t7_w6: "friends", t7_w7: "outside.",

    t8_title: "Irregular Match",
    t8_text: "Match adjective to its irregular adverb.",
    t8_inst: "Match Irregular Pairs:",
    t8_h1: "Good -> Well.",
    t8_h2: "Fast -> Fast.",
    t8_q: "Adverb of 'good'?",
    t8_qa: "well", t8_qb: "goodly", t8_qc: "goods", t8_qd: "better",
    t8_l1: "Good", t8_r1: "Well",
    t8_l2: "Fast", t8_r2: "Fast",
    t8_l3: "Hard", t8_r3: "Hard",

    t9_title: "Frequency Choice",
    t9_text: "Choosing the right frequency for the context.",
    t9_inst: "Choose for the blank:",
    t9_h1: "He does it every single day.",
    t9_h2: "Use 'always'.",
    t9_q: "I ___ brush my teeth.",
    t9_qa: "always", t9_qb: "never", t9_qc: "sometimes", t9_qd: "rarely",
    t9_sent: "We ___ go to the park on Sundays.",
    t9_qa2: "often", t9_qb2: "once", t9_qc2: "never", t9_qd2: "ever",

    t10_title: "Adverb Highlight 2",
    t10_text: "Finding time adverbs in a sentence.",
    t10_inst: "Highlight the time adverb:",
    t10_h1: "Look for 'tomorrow'.",
    t10_h2: "It tells when the action happens.",
    t10_q: "What is the time?",
    t10_qa: "tomorrow", t10_qb: "we", t10_qc: "will", t10_qd: "go",
    t10_tk1: "We", t10_tk2: "will", t10_tk3: "visit", t10_tk4: "the", t10_tk5: "new", t10_tk6: "museum", t10_tk7: "tomorrow", t10_tk8: "morning.",

    t11_title: "Adverb Build 2",
    t11_text: "Build a sentence about a fast action.",
    t11_inst: "Build a 'fast' sentence:",
    t11_h1: "Start with 'The runner'.",
    t11_h2: "Use 'ran very fast'.",
    t11_q: "Which describes speed?",
    t11_qa: "fast", t11_qb: "green", t11_qc: "happy", t11_qd: "tall",
    t11_f1: "The runner", t11_f2: "ran", t11_f3: "very fast", t11_f4: "to the finish.",

    t12_title: "Manner Sorter 2",
    t12_text: "Sort by Soft vs Loud adverbs.",
    t12_inst: "Sort by Volume:",
    t12_h1: "Quiet or Noisy?",
    t12_h2: "Softly (-) vs Loudly (+).",
    t12_q: "Which is quiet?",
    t12_qa: "whispered", t12_qb: "shouted", t12_qc: "called", t12_qd: "yelled",
    t12_bl1: "Quiet", t12_bl2: "Loud",
    t12_i1: "Quietly", t12_i2: "Loudly",
    t12_i3: "Softly", t12_i4: "Shouted",

    t13_title: "Gap-Fill 2",
    t13_text: "Fill in the missing adverb form.",
    t13_inst: "Choose for the blank:",
    t13_h1: "He is a good player.",
    t13_h2: "He plays 'well'.",
    t13_q: "She plays piano ___.",
    t13_qa: "well", t13_qb: "good", t13_qc: "goodly", t13_qd: "better",
    t13_sent: "They worked ___ to finish.",
    t13_qa2: "hard", t13_qb2: "hardly", t13_qc2: "harder", t13_qd2: "hardest",

    t14_title: "Final Match 2",
    t14_text: "Final adverb review.",
    t14_inst: "Match the pairs:",
    t14_h1: "Adjective to Adverb review.",
    t14_h2: "Real -> Really.",
    t14_q: "Which is correct?",
    t14_qa: "Real -> Really", t14_qb: "Good -> Goodly", t14_qc: "Fast -> Fastly", t14_qd: "Happy -> Happyly",
    t14_l1: "Careful", t14_r1: "Carefully",
    t14_l2: "Bright", t14_r2: "Brightly",
    t14_l3: "Sudden", t14_r3: "Suddenly",

    t15_title: "Adverb Review",
    t15_text: "Final review of Grade 4 adverbs.",
    t15_inst: "Pick the best adverb:",
    t15_h1: "Think about the action of writing.",
    t15_h2: "Last adverb question!",
    t15_q: "Write ___ please.",
    t15_qa: "neatly", t15_qb: "neat", t15_qc: "neats", t15_qd: "neater",
    t15_sent: "I will see you ___.",
    t15_qa2: "later", t15_qb2: "softly", t15_qc2: "sadly", t15_qd2: "well",
  },
};

export const ADVERB_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "manner", color: "#3B82F6" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "freq.", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "action", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "find", color: "#3B82F6" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8"], correctIndices: [6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#3B82F6" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "outside", color: "#3B82F6" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "choice", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "time", color: "#3B82F6" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8"], correctIndices: [6] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "fast", color: "#3B82F6" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "volume", color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "well", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i3 — COMPARISON
// ═══════════════════════════════════════════════════════════════════════════

export const COMPARISON_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Comparison Quest",
    t1_title: "Comparative: -ER",
    t1_text: "Use -er to compare two things. Example: 'The cat is smaller than the dog.'",
    t1_inst: "Order for a comparison sentence:",
    t1_h1: "Start with 'The car'.",
    t1_h2: "Use 'faster than' to compare.",
    t1_q: "Which is a comparative?",
    t1_qa: "faster", t1_qb: "fastest", t1_qc: "fast", t1_qd: "fastly",
    t1_w1: "The", t1_w2: "blue", t1_w3: "car", t1_w4: "is", t1_w5: "much", t1_w6: "faster", t1_w7: "than", t1_w8: "the", t1_w9: "bus.",

    t2_title: "Superlative: -EST",
    t2_text: "Use -est to compare three or more things. Example: 'Mount Everest is the highest.'",
    t2_inst: "Match the word to its superlative form:",
    t2_h1: "Add -est at the end.",
    t2_h2: "Big -> Biggest, Small -> Smallest.",
    t2_q: "Which is superlative?",
    t2_qa: "tallest", t2_qb: "taller", t2_qc: "tall", t2_qd: "tally",
    t2_l1: "Tall", t2_r1: "Tallest",
    t2_l2: "Fast", t2_r2: "Fastest",
    t2_l3: "Small", t2_r3: "Smallest",

    t3_title: "Irregular: Good and Bad",
    t3_text: "'Good' becomes 'better' and 'best'. 'Bad' becomes 'worse' and 'worst'.",
    t3_inst: "Choose for the best result:",
    t3_h1: "It is better than the others.",
    t3_h2: "Use 'best' for the top one.",
    t3_q: "Superlative of 'good'?",
    t3_qa: "best", t3_qb: "goodest", t3_qc: "better", t3_qd: "goods",
    t3_sent: "This is the ___ cake I have ever eaten.",
    t3_qa2: "best", t3_qb2: "better", t3_qc2: "goodest", t3_qd2: "good",

    t4_title: "More and Most",
    t4_text: "Use 'more' and 'most' for long words. Example: 'more beautiful', 'most expensive'.",
    t4_inst: "Highlight the comparative marker 'more':",
    t4_h1: "Look for 'more' before 'difficult'.",
    t4_h2: "It is used for long adjectives.",
    t4_q: "Which uses 'more' correctly?",
    t4_qa: "more expensive", t4_qb: "expensiver", t4_qc: "most expensive", t4_qd: "expensive",
    t4_tk1: "This", t4_tk2: "math", t4_tk3: "test", t4_tk4: "is", t4_tk5: "more", t4_tk6: "difficult", t4_tk7: "than", t4_tk8: "the", t4_tk9: "last", t4_tk10: "one.",

    t5_title: "Comparison Build",
    t5_text: "Build a sentence comparing two animals.",
    t5_inst: "Build a 'stronger' sentence:",
    t5_h1: "Start with 'The lion'.",
    t5_h2: "Use 'is stronger than'.",
    t5_q: "Which compares two?",
    t5_qa: "stronger", t5_qb: "strongest", t5_qc: "strong", t5_qd: "strongly",
    t5_f1: "The lion", t5_f2: "is much", t5_f3: "stronger than", t5_f4: "the zebra.",

    t6_title: "Comparison Sorter",
    t6_text: "Group by Comparative vs Superlative.",
    t6_inst: "Sort by Form:",
    t6_h1: "-er or -est?",
    t6_h2: "Better vs Best.",
    t6_q: "Which compares two?",
    t6_qa: "taller", t6_qb: "tallest", t6_qc: "tall", t6_qd: "tally",
    t6_bl1: "Comparative (-er)", t6_bl2: "Superlative (-est)",
    t6_i1: "Higher", t6_i2: "Highest",
    t6_i3: "Slower", t6_i4: "Slowest",

    t7_title: "As... As Comparison",
    t7_text: "Use 'as... as' to show things are equal. Example: 'He is as tall as his father.'",
    t7_inst: "Order for an equal comparison:",
    t7_h1: "Start with 'The dog'.",
    t7_h2: "Use 'as big as' in the middle.",
    t7_q: "Which shows equality?",
    t7_qa: "as big as", t7_qb: "bigger than", t7_qc: "biggest", t7_qd: "big than",
    t7_w1: "The", t7_w2: "brown", t7_w3: "dog", t7_w4: "is", t7_w5: "as", t7_w6: "big", t7_w7: "as", t7_w8: "the", t7_w9: "black", t7_w10: "one.",

    t8_title: "Irregular Match 2",
    t8_text: "Match 'bad' to its comparison forms.",
    t8_inst: "Match Bad Forms:",
    t8_h1: "Bad -> Worse -> Worst.",
    t8_h2: "Check the order carefully.",
    t8_q: "Superlative of 'bad'?",
    t8_qa: "worst", t8_qb: "worse", t8_qc: "baddest", t8_qd: "badly",
    t8_l1: "Bad", t8_r1: "Base form",
    t8_l2: "Worse", t8_r2: "Comparative",
    t8_l3: "Worst", t8_r3: "Superlative",

    t9_title: "Comparative Choice 2",
    t9_text: "Choosing the right long-word form.",
    t9_inst: "Choose for the blank:",
    t9_h1: "This book is very interesting.",
    t9_h2: "Use 'more interesting' to compare.",
    t9_q: "This is ___ than that.",
    t9_qa: "more interesting", t9_qb: "interestinger", t9_qc: "most interesting", t9_qd: "interest",
    t9_sent: "She is the ___ girl in class.",
    t9_qa2: "most intelligent", t9_qb2: "more intelligent", t9_qc2: "intelligenter", t9_qd2: "intelligent",

    t10_title: "Punctuation Highlight 2",
    t10_text: "Identifying comparison phrases in text.",
    t10_inst: "Highlight the comparison phrase:",
    t10_h1: "Look for 'cheaper than'.",
    t10_h2: "It compares the two items.",
    t10_q: "What compares?",
    t10_qa: "cheaper than", t10_qb: "this book", t10_qc: "is", t10_qd: "that one",
    t10_tk1: "This", t10_tk2: "book", t10_tk3: "is", t10_tk4: "actually", t10_tk5: "cheaper", t10_tk6: "than", t10_tk7: "the", t10_tk8: "one", t10_tk9: "over", t10_tk10: "there.",

    t11_title: "Superlative Build 2",
    t11_text: "Build a sentence about the best day.",
    t11_inst: "Build a 'happiest' sentence:",
    t11_h1: "Start with 'It was the'.",
    t11_h2: "Use 'happiest day of my life'.",
    t11_q: "Which is superlative?",
    t11_qa: "happiest", t11_qb: "happier", t11_qc: "happy", t11_qd: "happily",
    t11_f1: "It was", t11_f2: "the happiest", t11_f3: "day of", t11_f4: "my entire life.",

    t12_title: "Logic Sorter",
    t12_text: "Sort by One vs Many comparisons.",
    t12_inst: "Sort by Context:",
    t12_h1: "Is it two things or a whole group?",
    t12_h2: "Comparative (2) vs Superlative (All).",
    t12_q: "Which is for 2 things?",
    t12_qa: "Comparative", t12_qb: "Superlative", t12_qc: "Noun", t12_qd: "Verb",
    t12_bl1: "Comparing Two", t12_bl2: "Comparing All",
    t12_i1: "Stronger", t12_i2: "Strongest",
    t12_i3: "Faster", t12_i4: "Fastest",

    t13_title: "Mixed Comparison Gap-Fill",
    t13_text: "Fill in the missing form.",
    t13_inst: "Choose for the blank:",
    t13_h1: "Check if it is 2 or more.",
    t13_h2: "Use the superlative for 'all'.",
    t13_q: "He is the ___ runner.",
    t13_qa: "fastest", t13_qb: "faster", t13_qc: "fast", t13_qd: "fastly",
    t13_sent: "A plane is ___ than a car.",
    t13_qa2: "faster", t13_qb2: "fastest", t13_qc2: "more fast", t13_qd2: "fast",

    t14_title: "Final Match 3",
    t14_text: "Final comparison review.",
    t14_inst: "Match the pairs:",
    t14_h1: "Base to Superlative review.",
    t14_h2: "Large -> Largest.",
    t14_q: "Which is correct?",
    t14_qa: "Good -> Best", t14_qb: "Bad -> Baddest", t14_qc: "Hot -> Hoter", t14_qd: "Small -> Smaler",
    t14_l1: "Cold", t14_r1: "Coldest",
    t14_l2: "Long", t14_r2: "Longest",
    t14_l3: "Bright", t14_r3: "Brightest",

    t15_title: "Comparison Review",
    t15_text: "Final review of Grade 4 comparison.",
    t15_inst: "Pick the best comparison form:",
    t15_h1: "Think about the rule for short vs long words.",
    t15_h2: "Last comparison question!",
    t15_q: "Which is correct?",
    t15_qa: "more expensive", t15_qb: "expensiver", t15_qc: "most expensive", t15_qd: "expensive",
    t15_sent: "She is ___ than her sister.",
    t15_qa2: "taller", t15_qb2: "tallest", t15_qc2: "more tall", t15_qd2: "tall",
  },
};

export const COMPARISON_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "-er", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8", "t1_w9"], correctOrder: [0,1,2,3,4,5,6,7,8] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "-est", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "best", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "more", color: "#F59E0B" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9", "t4_tk10"], correctIndices: [4] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#F59E0B" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#F59E0B" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "as...as", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7", "t7_w8", "t7_w9", "t7_w10"], correctOrder: [0,1,2,3,4,5,6,7,8,9] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "worse", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "most", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "find", color: "#F59E0B" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9", "t10_tk10"], correctIndices: [4, 5] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "best", color: "#F59E0B" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#F59E0B" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "higher", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i4 — PREPOSITION
// ═══════════════════════════════════════════════════════════════════════════

export const PREPOSITION_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Preposition Path",
    t1_title: "Prepositions of Place",
    t1_text: "Words that show where something is: in, on, under, between.",
    t1_inst: "Order for a position sentence:",
    t1_h1: "Start with 'The book'.",
    t1_h2: "Use 'on the table'.",
    t1_q: "Where is the book?",
    t1_qa: "on the table", t1_qb: "under the table", t1_qc: "in the table", t1_qd: "between table",
    t1_w1: "The", t1_w2: "book", t1_w3: "is", t1_w4: "lying", t1_w5: "flat", t1_w6: "on", t1_w7: "the", t1_w8: "wooden", t1_w9: "table.",

    t2_title: "Prepositions of Time",
    t2_text: "In, on, at. Example: 'at 5 o'clock', 'on Monday', 'in Summer'.",
    t2_inst: "Match time to its preposition:",
    t2_h1: "At for time, On for day, In for season.",
    t2_h2: "5 PM -> At, Monday -> On.",
    t2_q: "Which for a day?",
    t2_qa: "on", t2_qb: "at", t2_qc: "in", t2_qd: "under",
    t2_l1: "5 o'clock", t2_r1: "at",
    t2_l2: "Monday", t2_r2: "on",
    t2_l3: "Summer", t2_r3: "in",

    t3_title: "Movement Prepositions",
    t3_text: "Into, through, across, over. Example: 'He ran into the room.'",
    t3_inst: "Choose for the movement:",
    t3_h1: "Moving from outside to inside.",
    t3_h2: "Use 'into'.",
    t3_q: "He walked ___ the door.",
    t3_qa: "through", t3_qb: "on", t3_qc: "at", t3_qd: "between",
    t3_sent: "They ran ___ the bridge.",
    t3_qa2: "across", t3_qb2: "into", t3_qc2: "at", t3_qd2: "in",

    t4_title: "Preposition Highlight",
    t4_text: "Finding the preposition in a complex sentence.",
    t4_inst: "Highlight the preposition of place:",
    t4_h1: "Look for 'under'.",
    t4_h2: "It shows where the cat is.",
    t4_q: "What is the preposition?",
    t4_qa: "under", t4_qb: "the", t4_qc: "cat", t4_qd: "sleeping",
    t4_tk1: "The", t4_tk2: "lazy", t4_tk3: "cat", t4_tk4: "is", t4_tk5: "sleeping", t4_tk6: "peacefully", t4_tk7: "under", t4_tk8: "the", t4_tk9: "warm", t4_tk10: "bed.",

    t5_title: "Preposition Build",
    t5_text: "Build a sentence about location.",
    t5_inst: "Build a 'between' sentence:",
    t5_h1: "Start with 'The ball is'.",
    t5_h2: "Use 'between the chairs'.",
    t5_q: "Which shows middle?",
    t5_qa: "between", t5_qb: "on", t5_qc: "under", t5_qd: "in",
    t5_f1: "The ball", t5_f2: "is sitting", t5_f3: "between the", t5_f4: "two blue chairs.",

    t6_title: "Preposition Sorter",
    t6_text: "Group by Place vs Time.",
    t6_inst: "Sort by Category:",
    t6_h1: "Where or When?",
    t6_h2: "Under (Place) vs Monday (Time).",
    t6_q: "Which is for time?",
    t6_qa: "at 6 PM", t6_qb: "in the box", t6_qc: "on the bed", t6_qd: "under the table",
    t6_bl1: "Place", t6_bl2: "Time",
    t6_i1: "Under", t6_i2: "At 5 PM",
    t6_i3: "Inside", t6_i4: "On Tuesday",

    t7_title: "Prepositions with Verbs",
    t7_text: "Listen to, look at, wait for.",
    t7_inst: "Order for a verb-preposition pair:",
    t7_h1: "Start with 'Please'.",
    t7_h2: "Use 'listen to' the teacher.",
    t7_q: "Which goes with 'listen'?",
    t7_qa: "to", t7_qb: "at", t7_qc: "for", t7_qd: "on",
    t7_w1: "Please", t7_w2: "listen", t7_w3: "carefully", t7_w4: "to", t7_w5: "what", t7_w6: "the", t7_w7: "teacher", t7_w8: "says.",

    t8_title: "Phrase Match",
    t8_text: "Match the prepositional phrase to the image/context.",
    t8_inst: "Match Phrase to Type:",
    t8_h1: "In front of vs Behind.",
    t8_h2: "Check the direction.",
    t8_q: "Opposite of 'behind'?",
    t8_qa: "in front of", t8_qb: "under", t8_qc: "beside", t8_qd: "above",
    t8_l1: "Location", t8_r1: "Beside the tree",
    t8_l2: "Time", t8_r2: "In the morning",
    t8_l3: "Movement", t8_r3: "Into the house",

    t9_title: "Preposition Choice 2",
    t9_text: "Choosing the correct time preposition.",
    t9_inst: "Choose for the blank:",
    t9_h1: "It refers to a specific time.",
    t9_h2: "Use 'at' for hours.",
    t9_q: "The class starts ___ 9 AM.",
    t9_qa: "at", t9_qb: "on", t9_qc: "in", t9_qd: "by",
    t9_sent: "I was born ___ October.",
    t9_qa2: "in", t9_qb2: "on", t9_qc2: "at", t9_qd2: "for",

    t10_title: "Movement Highlight 2",
    t10_text: "Finding movement words in a sentence.",
    t10_inst: "Highlight the movement preposition:",
    t10_h1: "Look for 'across'.",
    t10_h2: "It shows crossing the road.",
    t10_q: "What is the movement?",
    t10_qa: "across", t10_qb: "walked", t10_qc: "the", t10_qd: "road",
    t10_tk1: "They", t10_tk2: "carefully", t10_tk3: "walked", t10_tk4: "across", t10_tk5: "the", t10_tk6: "busy", t10_tk7: "main", t10_tk8: "road", t10_tk9: "now.",

    t11_title: "Place Build 2",
    t11_text: "Build a sentence about a bird's nest.",
    t11_inst: "Build an 'above' sentence:",
    t11_h1: "Start with 'The nest is'.",
    t11_h2: "Use 'above the door'.",
    t11_q: "Which means higher?",
    t11_qa: "above", t11_qb: "under", t11_qc: "in", t11_qd: "next to",
    t11_f1: "The nest", t11_f2: "is located", t11_f3: "high above", t11_f4: "the front door.",

    t12_title: "Sorter 4",
    t12_text: "Sort by In vs At vs On.",
    t12_inst: "Sort by Time Word:",
    t12_h1: "Hour, Day, or Month?",
    t12_h2: "At (Hour) vs On (Day) vs In (Month).",
    t12_q: "Which needs 'on'?",
    t12_qa: "Friday", t12_qb: "6 o'clock", t12_qc: "April", t12_qd: "Night",
    t12_bl1: "AT / IN", t12_bl2: "ON",
    t12_i1: "At noon", t12_i2: "On Sunday",
    t12_i3: "In May", t12_i4: "On my birthday",

    t13_title: "Complex Gap-Fill",
    t13_text: "Fill in the missing preposition phrase.",
    t13_inst: "Choose for the blank:",
    t13_h1: "It's a common phrasal verb ending.",
    t13_h2: "Wait 'for'.",
    t13_q: "I am waiting ___ you.",
    t13_qa: "for", t13_qb: "to", t13_qc: "at", t13_qd: "on",
    t13_sent: "She is looking ___ her lost keys.",
    t13_qa2: "for", t13_qb2: "at", t13_qc2: "to", t13_qd2: "in",

    t14_title: "Final Match 4",
    t14_text: "Final preposition review.",
    t14_inst: "Match the pairs:",
    t14_h1: "Opposite locations review.",
    t14_h2: "Inside -> Outside.",
    t14_q: "Which is correct?",
    t14_qa: "Inside -> Outside", t14_qb: "On -> In", t14_qc: "At -> For", t14_qd: "To -> From",
    t14_l1: "Inside", t14_r1: "Outside",
    t14_l2: "Over", t14_r2: "Under",
    t14_l3: "Up", t14_r3: "Down",

    t15_title: "Preposition Review",
    t15_text: "Final review of Grade 4 prepositions.",
    t15_inst: "Pick the best preposition:",
    t15_h1: "Think about the whole sentence context.",
    t15_h2: "Last preposition question!",
    t15_q: "He is sitting ___ the chair.",
    t15_qa: "on", t15_qb: "in", t15_qc: "at", t15_qd: "between",
    t15_sent: "Meet me ___ the station at 5.",
    t15_qa2: "at", t15_qb2: "on", t15_qc2: "in", t15_qd2: "to",
  },
};

export const PREPOSITION_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "place", color: "#8B5CF6" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8", "t1_w9"], correctOrder: [0,1,2,3,4,5,6,7,8] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "time", color: "#8B5CF6" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "move", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "find", color: "#8B5CF6" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9", "t4_tk10"], correctIndices: [6] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#8B5CF6" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#8B5CF6" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "listen", color: "#8B5CF6" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7", "t7_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#8B5CF6" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "choice", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "move", color: "#8B5CF6" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9"], correctIndices: [3] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "above", color: "#8B5CF6" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#8B5CF6" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "wait", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#8B5CF6" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i5 — CONJUNCTION
// ═══════════════════════════════════════════════════════════════════════════

export const CONJUNCTION_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Conjunction Junction",
    t1_title: "Coordinating: AND, BUT",
    t1_text: "Use 'and' to add, 'but' to contrast. Example: 'I like tea and coffee, but not milk.'",
    t1_inst: "Order the words for a combined sentence:",
    t1_h1: "Start with 'She wanted'.",
    t1_h2: "Use 'but' to show contrast.",
    t1_q: "Which shows contrast?",
    t1_qa: "but", t1_qb: "and", t1_qc: "so", t1_qd: "because",
    t1_w1: "She", t1_w2: "wanted", t1_w3: "to", t1_w4: "go,", t1_w5: "but", t1_w6: "it", t1_w7: "was", t1_w8: "raining", t1_w9: "hard.",

    t2_title: "Subordinating: BECAUSE, IF",
    t2_text: "Use 'because' for reasons. Example: 'I stayed home because I was sick.'",
    t2_inst: "Match the reason to the result:",
    t2_h1: "Think about why something happened.",
    t2_h2: "Sick -> Stayed home, Late -> Hurried.",
    t2_q: "Which shows a reason?",
    t2_qa: "because", t2_qb: "and", t2_qc: "but", t2_qd: "or",
    t2_l1: "I am happy", t2_r1: "because I won",
    t2_l2: "He is sad", t2_r2: "because he lost",
    t2_l3: "We are late", t2_r3: "because of traffic",

    t3_title: "Conjunction: OR, SO",
    t3_text: "Use 'or' for choice, 'so' for results. Example: 'Tea or coffee?' 'I was tired, so I slept.'",
    t3_inst: "Choose for a result:",
    t3_h1: "He was hungry.",
    t3_h2: "Use 'so' he ate.",
    t3_q: "Which shows a result?",
    t3_qa: "so", t3_qb: "or", t3_qc: "but", t3_qd: "if",
    t3_sent: "Do you want tea ___ coffee?",
    t3_qa2: "or", t3_qb2: "so", t3_qc2: "and", t3_qd2: "but",

    t4_title: "Conjunction Highlight",
    t4_text: "Finding the linking word in a sentence.",
    t4_inst: "Highlight the conjunction 'although':",
    t4_h1: "Look for 'although' at the start.",
    t4_h2: "It shows a surprising contrast.",
    t4_q: "What is the conjunction?",
    t4_qa: "although", t4_qb: "it", t4_qc: "rained", t4_qd: "went",
    t4_tk1: "Although", t4_tk2: "it", t4_tk3: "was", t4_tk4: "cold,", t4_tk5: "we", t4_tk6: "went", t4_tk7: "for", t4_tk8: "a", t4_tk9: "long", t4_tk10: "walk.",

    t5_title: "Conjunction Build",
    t5_text: "Build a sentence with 'unless'.",
    t5_inst: "Build an 'unless' sentence:",
    t5_h1: "Start with 'We won't go'.",
    t5_h2: "Use 'unless you help'.",
    t5_q: "Meaning of 'unless'?",
    t5_qa: "if not", t5_qb: "and", t5_qc: "but", t5_qd: "so",
    t5_f1: "We won't", t5_f2: "be able", t5_f3: "to go", t5_f4: "unless you help.",

    t6_title: "Logic Sorter",
    t6_text: "Group by Reason vs Contrast vs Choice.",
    t6_inst: "Sort by Conjunction Type:",
    t6_h1: "Check the word's job.",
    t6_h2: "Because (Reason) vs But (Contrast) vs Or (Choice).",
    t6_q: "Which is for choice?",
    t6_qa: "or", t6_qb: "but", t6_qc: "so", t6_qd: "and",
    t6_bl1: "Reason / Result", t6_bl2: "Contrast / Choice",
    t6_i1: "Because", t6_i2: "But",
    t6_i3: "So", t6_i4: "Or",

    t7_title: "Correlative: BOTH... AND",
    t7_text: "Use in pairs. Example: 'Both Tom and Mary are here.'",
    t7_inst: "Order for a correlative sentence:",
    t7_h1: "Start with 'Both'.",
    t7_h2: "Use 'and' between the names.",
    t7_q: "Which goes with 'both'?",
    t7_qa: "and", t7_qb: "or", t7_qc: "but", t7_qd: "nor",
    t7_w1: "Both", t7_w2: "the", t7_w3: "cat", t7_w4: "and", t7_w5: "the", t7_w6: "dog", t7_w7: "are", t7_w8: "sleeping", t7_w9: "now.",

    t8_title: "Connector Match",
    t8_text: "Match the conjunction to its common synonym.",
    t8_inst: "Match Word to Synonym:",
    t8_h1: "Since -> Because.",
    t8_h2: "Yet -> But.",
    t8_q: "Synonym of 'but'?",
    t8_qa: "yet", t8_qb: "and", t8_qc: "so", t8_qd: "if",
    t8_l1: "Because", t8_r1: "Since",
    t8_l2: "But", t8_r2: "Yet",
    t8_l3: "So", t8_r3: "Therefore",

    t9_title: "Conjunction Choice 2",
    t9_text: "Choosing the best connector for the situation.",
    t9_inst: "Choose for the blank:",
    t9_h1: "It refers to an unexpected result.",
    t9_h2: "Use 'although' or 'even though'.",
    t9_q: "___ it was hot, he wore a coat.",
    t9_qa: "Although", t9_qb: "Because", t9_qc: "If", t9_qd: "So",
    t9_sent: "You can have tea ___ coffee.",
    t9_qa2: "or", t9_qb2: "but", t9_qc2: "so", t9_qd2: "if",

    t10_title: "Emphasis Highlight 2",
    t10_text: "Finding connectors that add emphasis.",
    t10_inst: "Highlight the connector 'moreover':",
    t10_h1: "Look for 'moreover' in the middle.",
    t10_h2: "It adds formal information.",
    t10_q: "What does 'moreover' do?",
    t10_qa: "adds information", t10_qb: "shows contrast", t10_qc: "asks a question", t10_qd: "ends sentence",
    t10_tk1: "The", t10_tk2: "car", t10_tk3: "is", t10_tk4: "fast;", t10_tk5: "moreover,", t10_tk6: "it", t10_tk7: "is", t10_tk8: "very", t10_tk9: "safe", t10_tk10: "to", t10_tk11: "drive.",

    t11_title: "Result Build 2",
    t11_text: "Build a sentence showing a result.",
    t11_inst: "Build a 'so' sentence:",
    t11_h1: "Start with 'It was late,'.",
    t11_h2: "Use 'so we went home'.",
    t11_q: "Which shows result?",
    t11_qa: "so", t11_qb: "but", t11_qc: "or", t11_qd: "because",
    t11_f1: "It was", t11_f2: "getting late,", t11_f3: "so we", t11_f4: "decided to leave.",

    t12_title: "Sorter 5",
    t12_text: "Sort by Coordinating vs Subordinating.",
    t12_inst: "Sort by Conjunction Class:",
    t12_h1: "FANBOYS (and, but, or) vs Others.",
    t12_h2: "And vs Because.",
    t12_q: "Which is coordinating?",
    t12_qa: "and", t12_qb: "because", t12_qc: "although", t12_qd: "unless",
    t12_bl1: "Coordinating", t12_bl2: "Subordinating",
    t12_i1: "But", t12_i2: "Because",
    t12_i3: "And", t12_i4: "Unless",

    t13_title: "Conjunction Gap-Fill 3",
    t13_text: "Fill in the missing logical connector.",
    t13_inst: "Choose for the blank:",
    t13_h1: "It shows a choice.",
    t13_h2: "Use 'either... or'.",
    t13_q: "___ Tom or Sam will go.",
    t13_qa: "Either", t13_qb: "Neither", t13_qc: "Both", t13_qd: "And",
    t13_sent: "___ the cat nor the dog ate it.",
    t13_qa2: "Neither", t13_qb2: "Either", t13_qc2: "Both", t13_qd2: "Or",

    t14_title: "Final Match 5",
    t14_text: "Final conjunction review.",
    t14_inst: "Match the pairs:",
    t14_h1: "Connector to its Function review.",
    t14_h2: "Although -> Surprise contrast.",
    t14_q: "Which is correct?",
    t14_qa: "Because -> Reason", t14_qb: "But -> Addition", t14_qc: "And -> Contrast", t14_qd: "So -> Choice",
    t14_l1: "Although", t14_r1: "Contrast",
    t14_l2: "Because", t14_r2: "Reason",
    t14_l3: "If", t14_r3: "Condition",

    t15_title: "Conjunction Review",
    t15_text: "Final review of Grade 4 conjunctions.",
    t15_inst: "Pick the best connector:",
    t15_h1: "Think about the whole sentence logic.",
    t15_h2: "Last conjunction question!",
    t15_q: "I'll go ___ you come too.",
    t15_qa: "if", t15_qb: "but", t15_qc: "so", t15_qd: "or",
    t15_sent: "He studied hard, ___ he passed.",
    t15_qa2: "so", t15_qb2: "but", t15_qc2: "because", t15_qd2: "if",
  },
};

export const CONJUNCTION_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "and/but", color: "#EF4444" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8", "t1_w9"], correctOrder: [0,1,2,3,4,5,6,7,8] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "reason", color: "#EF4444" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "so/or", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "find", color: "#EF4444" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9", "t4_tk10"], correctIndices: [0] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "unless", color: "#EF4444" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#EF4444" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "both", color: "#EF4444" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7", "t7_w8", "t7_w9"], correctOrder: [0,1,2,3,4,5,6,7,8] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#EF4444" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "although", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "find", color: "#EF4444" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9", "t10_tk10", "t10_tk11"], correctIndices: [4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "build", color: "#EF4444" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#EF4444" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "neither", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#EF4444" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i6 — PRONOUN
// ═══════════════════════════════════════════════════════════════════════════

export const PRONOUN_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Pronoun Paradise",
    t1_title: "Subject Pronouns",
    t1_text: "I, you, he, she, it, we, they. Example: 'He is my friend.'",
    t1_inst: "Order for a pronoun sentence:",
    t1_h1: "Start with 'They'.",
    t1_h2: "Use 'are going' as the verb.",
    t1_q: "Which is a subject pronoun?",
    t1_qa: "they", t1_qb: "them", t1_qc: "their", t1_qd: "theirs",
    t1_w1: "They", t1_w2: "are", t1_w3: "going", t1_w4: "to", t1_w5: "the", t1_w6: "cinema", t1_w7: "together", t1_w8: "now.",

    t2_title: "Object Pronouns",
    t2_text: "Me, you, him, her, it, us, them. Example: 'Help me.'",
    t2_inst: "Match subject to object pronoun:",
    t2_h1: "I -> me, He -> him.",
    t2_h2: "We -> us, They -> them.",
    t2_q: "Which is an object pronoun?",
    t2_qa: "us", t2_qb: "we", t2_qc: "our", t2_qd: "ours",
    t2_l1: "I", t2_r1: "me",
    t2_l2: "He", t2_r2: "him",
    t2_l3: "We", t2_r3: "us",

    t3_title: "Possessive Adjectives",
    t3_text: "My, your, his, her, its, our, their. Example: 'My book.'",
    t3_inst: "Choose for the possession:",
    t3_h1: "It belongs to me.",
    t3_h2: "Use 'my'.",
    t3_q: "___ book is blue.",
    t3_qa: "My", t3_qb: "Me", t3_qc: "I", t3_qd: "Mine",
    t3_sent: "She lost ___ keys at the park.",
    t3_qa2: "her", t3_qb2: "hers", t3_qc2: "she", t3_qd2: "him",

    t4_title: "Pronoun Highlight",
    t4_text: "Finding reflexive pronouns: myself, yourself, itself.",
    t4_inst: "Highlight the reflexive pronoun:",
    t4_h1: "Look for 'himself'.",
    t4_h2: "He did it to himself.",
    t4_q: "Which is reflexive?",
    t4_qa: "himself", t4_qb: "him", t4_qc: "he", t4_qd: "his",
    t4_tk1: "He", t4_tk2: "taught", t4_tk3: "himself", t4_tk4: "how", t4_tk5: "to", t4_tk6: "play", t4_tk7: "the", t4_tk8: "guitar", t4_tk9: "well.",

    t5_title: "Pronoun Build",
    t5_text: "Build a sentence with 'theirs'.",
    t5_inst: "Build a 'possessive' sentence:",
    t5_h1: "Start with 'That house is'.",
    t5_h2: "Use 'theirs' at the end.",
    t5_q: "Which is a possessive pronoun?",
    t5_qa: "theirs", t5_qb: "their", t5_qc: "them", t5_qd: "they",
    t5_f1: "That house", t5_f2: "is", t5_f3: "definitely", t5_f4: "theirs.",

    t6_title: "Pronoun Sorter",
    t6_text: "Group by Subject vs Object pronouns.",
    t6_inst: "Sort by Pronoun Type:",
    t6_h1: "Does it do the action or receive it?",
    t6_h2: "He (Subject) vs Him (Object).",
    t6_q: "Which is an object?",
    t6_qa: "them", t6_qb: "they", t6_qc: "we", t6_qd: "she",
    t6_bl1: "Subject", t6_bl2: "Object",
    t6_i1: "He", t6_i2: "Him",
    t6_i3: "We", t6_i4: "Us",

    t7_title: "Relative Pronouns",
    t7_text: "Who, which, that. Example: 'The man who lives here.'",
    t7_inst: "Order for a relative clause:",
    t7_h1: "Start with 'The car'.",
    t7_h2: "Use 'which is red' to describe it.",
    t7_q: "Which for things?",
    t7_qa: "which", t7_qb: "who", t7_qc: "whom", t7_qd: "whose",
    t7_w1: "The", t7_w2: "car", t7_w3: "which", t7_w4: "is", t7_w5: "parked", t7_w6: "there", t7_w7: "is", t7_w8: "mine.",

    t8_title: "Interrogative Match",
    t8_text: "Match the question word to its use.",
    t8_inst: "Match Word to Use:",
    t8_h1: "Who -> People, Where -> Places.",
    t8_h2: "Why -> Reasons.",
    t8_q: "Which for a reason?",
    t8_qa: "why", t8_qb: "who", t8_qc: "what", t8_qd: "where",
    t8_l1: "Who", t8_r1: "People",
    t8_l2: "Where", t8_r2: "Places",
    t8_l3: "When", t8_r3: "Times",

    t9_title: "Pronoun Choice 2",
    t9_text: "Choosing between 'who' and 'whom'.",
    t9_inst: "Choose for the blank:",
    t9_h1: "It refers to the person receiving the action.",
    t9_h2: "Use 'whom' formally.",
    t9_q: "To ___ are you speaking?",
    t9_qa: "whom", t9_qb: "who", t9_qc: "whose", t9_qd: "which",
    t9_sent: "I don't know ___ called me.",
    t9_qa2: "who", t9_qb2: "whom", t9_qc2: "whose", t9_qd2: "which",

    t10_title: "Indefinite Highlight 2",
    t10_text: "Finding words like 'someone', 'anything', 'nothing'.",
    t10_inst: "Highlight the indefinite pronoun:",
    t10_h1: "Look for 'someone'.",
    t10_h2: "It refers to an unknown person.",
    t10_q: "Which is indefinite?",
    t10_qa: "someone", t10_qb: "he", t10_qc: "they", t10_qd: "us",
    t10_tk1: "I", t10_tk2: "think", t10_tk3: "that", t10_tk4: "someone", t10_tk5: "is", t10_tk6: "knocking", t10_tk7: "at", t10_tk8: "the", t10_tk9: "back", t10_tk10: "door.",

    t11_title: "Reflexive Build 2",
    t11_text: "Build a sentence with 'myself'.",
    t11_inst: "Build a 'reflexive' sentence:",
    t11_h1: "Start with 'I can'.",
    t11_h2: "Use 'do it myself'.",
    t11_q: "Reflexive for 'she'?",
    t11_qa: "herself", t11_qb: "himself", t11_qc: "itself", t11_qd: "myself",
    t11_f1: "I can", t11_f2: "definitely", t11_f3: "do it", t11_f4: "all by myself.",

    t12_title: "Possessive Sorter 2",
    t12_text: "Sort by Adjective vs Pronoun.",
    t12_inst: "Sort by Possession Form:",
    t12_h1: "My (Adjective) vs Mine (Pronoun).",
    t12_h2: "Check if a noun follows.",
    t12_q: "Which is a pronoun?",
    t12_qa: "mine", t12_qb: "my", t12_qc: "your", t12_qd: "their",
    t12_bl1: "Adjective", t12_bl2: "Pronoun",
    t12_i1: "My book", t12_i2: "It is mine",
    t12_i3: "Your pen", t12_i4: "It is yours",

    t13_title: "Pronoun Gap-Fill 3",
    t13_text: "Fill in the missing pronoun.",
    t13_inst: "Choose for the blank:",
    t13_h1: "It refers to the group (we).",
    t13_h2: "Use 'us' as the object.",
    t13_q: "He saw ___.",
    t13_qa: "us", t13_qb: "we", t13_qc: "our", t13_qd: "ours",
    t13_sent: "Give it to ___ please.",
    t13_qa2: "them", t13_qb2: "they", t13_qc2: "their", t13_qd2: "theirs",

    t14_title: "Final Match 6",
    t14_text: "Final pronoun review.",
    t14_inst: "Match the pairs:",
    t14_h1: "Subject to Possessive review.",
    t14_h2: "They -> Theirs.",
    t14_q: "Which is correct?",
    t14_qa: "We -> Ours", t14_qb: "I -> Me", t14_qc: "He -> His", t14_qd: "All are correct",
    t14_l1: "I", t14_r1: "Mine",
    t14_l2: "You", t14_r2: "Yours",
    t14_l3: "She", t14_r3: "Hers",

    t15_title: "Pronoun Review",
    t15_text: "Final review of Grade 4 pronouns.",
    t15_inst: "Pick the best pronoun:",
    t15_h1: "Think about the person mentioned.",
    t15_h2: "Last pronoun question!",
    t15_q: "Is this ___ bag?",
    t15_qa: "your", t15_qb: "you", t15_qc: "yours", t15_qd: "me",
    t15_sent: "Help ___ with the bags.",
    t15_qa2: "me", t15_qb2: "I", t15_qc2: "my", t15_qd2: "mine",
  },
};

export const PRONOUN_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "he/she", color: "#3B82F6" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "me/us", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "my/his", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "self", color: "#3B82F6" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9"], correctIndices: [2] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#3B82F6" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "which", color: "#3B82F6" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7", "t7_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "whom", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "any.", color: "#3B82F6" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9", "t10_tk10"], correctIndices: [3] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "build", color: "#3B82F6" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "group", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i7 — QUESTION
// ═══════════════════════════════════════════════════════════════════════════

export const QUESTION_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Question Quest",
    t1_title: "Yes/No Questions",
    t1_text: "Use Do/Does/Is/Are to start. Example: 'Are you happy?'",
    t1_inst: "Order for a yes/no question:",
    t1_h1: "Start with 'Are you'.",
    t1_h2: "Use 'ready' at the end.",
    t1_q: "Which is a yes/no question?",
    t1_qa: "Are you ready?", t1_qb: "Where are you?", t1_qc: "What is it?", t1_qd: "Who is that?",
    t1_w1: "Are", t1_w2: "you", t1_w3: "ready", t1_w4: "to", t1_w5: "go", t1_w6: "to", t1_w7: "the", t1_w8: "park", t1_w9: "now?",

    t2_title: "WH- Questions",
    t2_text: "Who, what, where, when, why. Example: 'Where do you live?'",
    t2_inst: "Match the WH- word to its use:",
    t2_h1: "Who -> People.",
    t2_h2: "Where -> Places.",
    t2_q: "Which asks for a place?",
    t2_qa: "where", t2_qb: "who", t2_qc: "what", t2_qd: "when",
    t2_l1: "People", t2_r1: "Who",
    t2_l2: "Places", t2_r2: "Where",
    t2_l3: "Reasons", t2_r3: "Why",

    t3_title: "Tag Questions",
    t3_text: "Short questions at the end. Example: 'It's cold, isn't it?'",
    t3_inst: "Choose for a positive statement:",
    t3_h1: "Positive statement -> negative tag.",
    t3_h2: "Use 'don't' for 'you like'.",
    t3_q: "Tag for 'You like it'?",
    t3_qa: "don't you?", t3_qb: "is it?", t3_qc: "do you?", t3_qd: "are you?",
    t3_sent: "She is nice, ___ she?",
    t3_qa2: "isn't", t3_qb2: "is", t3_qc2: "doesn't", t3_qd2: "hasn't",

    t4_title: "Question Highlight",
    t4_text: "Finding the question word in a long sentence.",
    t4_inst: "Highlight the question word:",
    t4_h1: "Look for 'When'.",
    t4_h2: "It asks about time.",
    t4_q: "What is the question word?",
    t4_qa: "When", t4_qb: "will", t4_qc: "the", t4_qd: "arrive",
    t4_tk1: "When", t4_tk2: "will", t4_tk3: "the", t4_tk4: "very", t4_tk5: "first", t4_tk6: "train", t4_tk7: "arrive", t4_tk8: "at", t4_tk9: "this", t4_tk10: "station?",

    t5_title: "Question Build",
    t5_text: "Build a sentence asking why.",
    t5_inst: "Build a 'why' question:",
    t5_h1: "Start with 'Why are'.",
    t5_h2: "Use 'you so late'.",
    t5_q: "Which asks for a reason?",
    t5_qa: "why", t5_qb: "who", t5_qc: "what", t5_qd: "how",
    t5_f1: "Why are", t5_f2: "you always", t5_f3: "so late", t5_f4: "for breakfast?",

    t6_title: "Question Sorter",
    t6_text: "Group by Yes/No vs WH- questions.",
    t6_inst: "Sort by Question Type:",
    t6_h1: "Does it start with a WH- word?",
    t6_h2: "Are you... vs Where are...",
    t6_q: "Which is a WH- question?",
    t6_qa: "Where is it?", t6_qb: "Is it here?", t6_qc: "Are you ready?", t6_qd: "Do you like it?",
    t6_bl1: "Yes/No", t6_bl2: "WH- Question",
    t6_i1: "Are you cold?", t6_i2: "Who are you?",
    t6_i3: "Is he there?", t6_i4: "What is that?",

    t7_title: "Subject Questions",
    t7_text: "Asking about the subject. Example: 'Who called?'",
    t7_inst: "Order for a subject question:",
    t7_h1: "Start with 'Who'.",
    t7_h2: "The verb 'broke' follows immediately.",
    t7_q: "Which is a subject question?",
    t7_qa: "Who broke it?", t7_qb: "Who did break it?", t7_qc: "What did happen?", t7_qd: "Whom broke it?",
    t7_w1: "Who", t7_w2: "broke", t7_w3: "the", t7_w4: "beautiful", t7_w5: "blue", t7_w6: "glass", t7_w7: "vase", t7_w8: "yesterday?",

    t8_title: "Question Word Match",
    t8_text: "Match the word to the information it seeks.",
    t8_inst: "Match Word to Information:",
    t8_h1: "What -> Thing.",
    t8_h2: "How -> Manner.",
    t8_q: "Which for manner?",
    t8_qa: "how", t8_qb: "what", t8_qc: "when", t8_qd: "who",
    t8_l1: "How", t8_r1: "Manner",
    t8_l2: "What", t8_r2: "Thing / Object",
    t8_l3: "Which", t8_r3: "Choice",

    t9_title: "Tag Choice 2",
    t9_text: "Choosing the correct tag ending.",
    t9_inst: "Choose for the blank:",
    t9_h1: "The sentence uses 'can'.",
    t9_h2: "The tag must be 'can't he?'.",
    t9_q: "He can swim, ___?",
    t9_qa: "can't he?", t9_qb: "doesn't he?", t9_qc: "is he?", t9_qd: "aren't he?",
    t9_sent: "They won't go, ___?",
    t9_qa2: "will they", t9_qb2: "don't they", t9_qc2: "won't they", t9_qd2: "are they",

    t10_title: "Auxiliary Highlight 2",
    t10_text: "Finding the auxiliary verb in a question.",
    t10_inst: "Highlight the auxiliary verb:",
    t10_h1: "Look for 'Did'.",
    t10_h2: "It helps form the past question.",
    t10_q: "What is the auxiliary?",
    t10_qa: "Did", t10_qb: "you", t10_qc: "hear", t10_qd: "it",
    t10_tk1: "Did", t10_tk2: "you", t10_tk3: "hear", t10_tk4: "the", t10_tk5: "loud", t10_tk6: "noise", t10_tk7: "outside", t10_tk8: "last", t10_tk9: "night?",

    t11_title: "Polite Build 2",
    t11_text: "Build an indirect polite question.",
    t11_inst: "Build a 'Do you know' question:",
    t11_h1: "Start with 'Do you know'.",
    t11_h2: "Use 'where the bus is'.",
    t11_q: "Which is most polite?",
    t11_qa: "Do you know where it is?",
    t11_qb: "Where is it?",
    t11_qc: "Tell me where it is.",
    t11_qd: "Is it there?",
    t11_f1: "Do you know", t11_f2: "exactly where", t11_f3: "the nearest", t11_f4: "bus stop is?",

    t12_title: "Negative Sorter",
    t12_text: "Sort by Positive vs Negative questions.",
    t12_inst: "Sort by Question Form:",
    t12_h1: "Does it have 'Not'?",
    t12_h2: "Are you... vs Aren't you...",
    t12_q: "Which is negative?",
    t12_qa: "Aren't you cold?",
    t12_qb: "Are you cold?",
    t12_qc: "Is he here?",
    t12_qd: "Do you like it?",
    t12_bl1: "Positive", t12_bl2: "Negative",
    t12_i1: "Do you go?", t12_i2: "Don't you go?",
    t12_i3: "Is she happy?", t12_i4: "Isn't she happy?",

    t13_title: "Choice Gap-Fill",
    t13_text: "Fill in the missing question word.",
    t13_inst: "Choose for the blank:",
    t13_h1: "It asks about a specific person.",
    t13_h2: "Use 'Who'.",
    t13_q: "___ is at the door?",
    t13_qa: "Who", t13_qb: "What", t13_qc: "Where", t13_qd: "How",
    t13_sent: "___ do you want to eat?",
    t13_qa2: "What", t13_qb2: "Who", t13_qc2: "Why", t13_qd2: "When",

    t14_title: "Final Match 4",
    t14_text: "Final question review.",
    t14_inst: "Match the pairs:",
    t14_h1: "Direct to Indirect review.",
    t14_h2: "Where is he? -> ...where he is.",
    t14_q: "Which is correct?",
    t14_qa: "Direct -> Indirect", t14_qb: "Yes -> No", t14_qc: "Who -> What", t14_qd: "At -> On",
    t14_l1: "Where is it?", t14_r1: "Do you know where it is?",
    t14_l2: "Who are you?", t14_r2: "Can you tell me who you are?",
    t14_l3: "What time is it?", t14_r3: "I wonder what time it is.",

    t15_title: "Question Review",
    t15_text: "Final review of Grade 4 questions.",
    t15_inst: "Pick the best question form:",
    t15_h1: "Think about the helper verb 'did'.",
    t15_h2: "Last question of the island!",
    t15_q: "___ you see him?",
    t15_qa: "Did", t15_qb: "Do", t15_qc: "Is", t15_qd: "Am",
    t15_sent: "You're coming, ___ you?",
    t15_qa2: "aren't", t15_qb2: "isn't", t15_qc2: "don't", t15_qd2: "won't",
  },
};

export const QUESTION_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "yes/no", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8", "t1_w9"], correctOrder: [0,1,2,3,4,5,6,7,8] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "wh-", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "tag", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "find", color: "#F59E0B" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9", "t4_tk10"], correctIndices: [0] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#F59E0B" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#F59E0B" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "who", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7", "t7_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "choice", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "did", color: "#F59E0B" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9"], correctIndices: [0] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "polite", color: "#F59E0B" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#F59E0B" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "who", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i8 — VOCABULARY
// ═══════════════════════════════════════════════════════════════════════════

export const VOCABULARY_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Vocab Village",
    t1_title: "Animals and Nature",
    t1_text: "Common animal names and nature terms. Example: giraffe, forest, river.",
    t1_inst: "Order the words for a nature sentence:",
    t1_h1: "Start with 'The tall'.",
    t1_h2: "Use 'giraffe' as the subject.",
    t1_q: "Which lives in the forest?",
    t1_qa: "deer", t1_qb: "whale", t1_qc: "camel", t1_qd: "shark",
    t1_w1: "The", t1_w2: "tall", t1_w3: "giraffe", t1_w4: "is", t1_w5: "eating", t1_w6: "leaves", t1_w7: "from", t1_w8: "the", t1_w9: "tree.",

    t2_title: "Daily Activities",
    t2_text: "Words for things we do every day. Example: brushing, cooking, sleeping.",
    t2_inst: "Match the activity to the object:",
    t2_h1: "Brushing -> Teeth.",
    t2_h2: "Cooking -> Dinner.",
    t2_q: "What do you do with a book?",
    t2_qa: "read", t2_qb: "eat", t2_qc: "drive", t2_qd: "wear",
    t2_l1: "Brushing", t2_r1: "Teeth",
    t2_l2: "Cooking", t2_r2: "Dinner",
    t2_l3: "Driving", t2_r3: "Car",

    t3_title: "Around the Home",
    t3_text: "Fridge, wardrobe, attic, basement.",
    t3_inst: "Choose for the location:",
    t3_h1: "It is used for storing clothes.",
    t3_h2: "Use 'wardrobe'.",
    t3_q: "Where do you keep food cold?",
    t3_qa: "fridge", t3_qb: "wardrobe", t3_qc: "bed", t3_qd: "chair",
    t3_sent: "I put my new shirt in the ___.",
    t3_qa2: "wardrobe", t3_qb2: "fridge", t3_qc2: "sink", t3_qd2: "oven",

    t4_title: "Vocab Highlight",
    t4_text: "Finding specific terms in a paragraph.",
    t4_inst: "Highlight the name of a vehicle:",
    t4_h1: "Look for 'motorcycle'.",
    t4_h2: "It has two wheels.",
    t4_q: "Which has two wheels?",
    t4_qa: "motorcycle", t4_qb: "bus", t4_qc: "car", t4_qd: "truck",
    t4_tk1: "He", t4_tk2: "rode", t4_tk3: "his", t4_tk4: "fast", t4_tk5: "motorcycle", t4_tk6: "to", t4_tk7: "the", t4_tk8: "busy", t4_tk9: "market", t4_tk10: "today.",

    t5_title: "Vocab Build",
    t5_text: "Build a sentence about a job.",
    t5_inst: "Build a 'doctor' sentence:",
    t5_h1: "Start with 'The kind'.",
    t5_h2: "Use 'doctor helps'.",
    t5_q: "Who flies a plane?",
    t5_qa: "Pilot", t5_qb: "Chef", t5_qc: "Nurse", t5_qd: "Farmer",
    t5_f1: "The kind", t5_f2: "doctor helps", t5_f3: "all the", t5_f4: "sick children.",

    t6_title: "Vocab Sorter",
    t6_text: "Group by Fruit vs Tool.",
    t6_inst: "Sort by Vocab Category:",
    t6_h1: "Is it food or a tool?",
    t6_h2: "Apple vs. Hammer.",
    t6_q: "Which is a tool?",
    t6_qa: "hammer", t6_qb: "orange", t6_qc: "banana", t6_qd: "pear",
    t6_bl1: "Fruit", t6_bl2: "Tool",
    t6_i1: "Apple", t6_i2: "Hammer",
    t6_i3: "Grapes", t6_i4: "Saw",

    t7_title: "Sports and Hobbies",
    t7_text: "Swimming, chess, guitar, painting.",
    t7_inst: "Order for a hobby description:",
    t7_h1: "Start with 'My favorite'.",
    t7_h2: "Use 'playing guitar'.",
    t7_q: "Which is a sport?",
    t7_qa: "swimming", t7_qb: "chess", t7_qc: "reading", t7_qd: "sleeping",
    t7_w1: "My", t7_w2: "favorite", t7_w3: "hobby", t7_w4: "is", t7_w5: "playing", t7_w6: "the", t7_w7: "guitar", t7_w8: "at", t7_w9: "night.",

    t8_title: "Clothing Match",
    t8_text: "Match the clothing to the body part.",
    t8_inst: "Match Clothing to Part:",
    t8_h1: "Hat -> Head.",
    t8_h2: "Gloves -> Hands.",
    t8_q: "What do you wear on feet?",
    t8_qa: "shoes", t8_qb: "hat", t8_qc: "shirt", t8_qd: "scarf",
    t8_l1: "Head", t8_r1: "Hat",
    t8_l2: "Hands", t8_r2: "Gloves",
    t8_l3: "Feet", t8_r3: "Socks",

    t9_title: "Vocab Choice 3",
    t9_text: "Choosing the correct synonym.",
    t9_inst: "Choose for the blank:",
    t9_h1: "A very large house.",
    t9_h2: "Use 'mansion'.",
    t9_q: "A big house is a ___.",
    t9_qa: "mansion", t9_qb: "tent", t9_qc: "shack", t9_qd: "shed",
    t9_sent: "The movie was very ___, I fell asleep.",
    t9_qa2: "boring", t9_qb2: "exciting", t9_qc2: "scary", t9_qd2: "loud",

    t10_title: "Landscape Highlight 2",
    t10_text: "Finding geography words.",
    t10_inst: "Highlight the water word:",
    t10_h1: "Look for 'waterfall'.",
    t10_h2: "It is where water falls down.",
    t10_q: "Which is water?",
    t10_qa: "waterfall", t10_qb: "cliff", t10_qc: "valley", t10_qd: "desert",
    t10_tk1: "They", t10_tk2: "hiked", t10_tk3: "to", t10_tk4: "the", t10_tk5: "stunning", t10_tk6: "waterfall", t10_tk7: "deep", t10_tk8: "in", t10_tk9: "the", t10_tk10: "mountains.",

    t11_title: "Space Build 2",
    t11_text: "Build a sentence about the moon.",
    t11_inst: "Build a 'moon' sentence:",
    t11_h1: "Start with 'The moon'.",
    t11_h2: "Use 'orbits the Earth'.",
    t11_q: "What orbits the Earth?",
    t11_qa: "The Moon", t11_qb: "The Sun", t11_qc: "Mars", t11_qd: "Stars",
    t11_f1: "The moon", t11_f2: "orbits", t11_f3: "the Earth", t11_f4: "every month.",

    t12_title: "Sorter 5",
    t12_text: "Sort by Living vs Non-Living.",
    t12_inst: "Sort by Life Type:",
    t12_h1: "Does it breathe?",
    t12_h2: "Cat vs Rock.",
    t12_q: "Which is living?",
    t12_qa: "plant", t12_qb: "chair", t12_qc: "car", t12_qd: "computer",
    t12_bl1: "Living", t12_bl2: "Non-Living",
    t12_i1: "Tree", t12_i2: "Stone",
    t12_i3: "Bird", t12_i4: "Water",

    t13_title: "Gap-Fill 4",
    t13_text: "Fill in the missing hobby.",
    t13_inst: "Choose for the blank:",
    t13_h1: "She loves to move in water.",
    t13_h2: "Use 'swimming'.",
    t13_q: "She goes ___ every day.",
    t13_qa: "swimming", t13_qb: "reading", t13_qc: "cooking", t13_qd: "running",
    t13_sent: "I like ___ to music.",
    t13_qa2: "listening", t13_qb2: "watching", t13_qc2: "playing", t13_qd2: "eating",

    t14_title: "Final Match 5",
    t14_text: "Final vocab review.",
    t14_inst: "Match the pairs:",
    t14_h1: "Jobs review.",
    t14_h2: "Chef -> Food.",
    t14_q: "Which is correct?",
    t14_qa: "Chef -> Food", t14_qb: "Doctor -> Car", t14_qc: "Pilot -> Boat", t14_qd: "Farmer -> Space",
    t14_l1: "Chef", t14_r1: "Cooks food",
    t14_l2: "Pilot", t14_r2: "Flies planes",
    t14_l3: "Nurse", t14_r3: "Helps patients",

    t15_title: "Vocab Review",
    t15_text: "Final review of Grade 4 vocabulary.",
    t15_inst: "Pick the best word:",
    t15_h1: "Think about the garden.",
    t15_h2: "Butterflies have colorful ___.",
    t15_q: "Butterflies have ___.",
    t15_qa: "wings", t15_qb: "hair", t15_qc: "shoes", t15_qd: "hands",
    t15_sent: "The cat is ___ on the mat.",
    t15_qa2: "sitting", t15_qb2: "flying", t15_qc2: "singing", t15_qd2: "cooking",
  },
};

export const VOCABULARY_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "giraffe", color: "#10B981" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8", "t1_w9"], correctOrder: [0,1,2,3,4,5,6,7,8] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "daily", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "home", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "find", color: "#10B981" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9", "t4_tk10"], correctIndices: [4] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#10B981" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#10B981" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "hobby", color: "#10B981" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7", "t7_w8", "t7_w9"], correctOrder: [0,1,2,3,4,5,6,7,8] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "choice", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "water", color: "#10B981" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9", "t10_tk10"], correctIndices: [5] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "build", color: "#10B981" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#10B981" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "fly", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i9 — BIGTEST4
// ═══════════════════════════════════════════════════════════════════════════

export const BIGTEST4_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Big Test 4",
    t1_title: "Adjective Mix",
    t1_text: "Final test of adjectives.",
    t1_inst: "Order for a describing sentence:",
    t1_h1: "Start with 'The'.",
    t1_h2: "Use 'beautiful' before 'butterfly'.",
    t1_q: "Which is an adjective?",
    t1_qa: "beautiful", t1_qb: "quickly", t1_qc: "run", t1_qd: "he",
    t1_w1: "The", t1_w2: "beautiful", t1_w3: "blue", t1_w4: "butterfly", t1_w5: "flew", t1_w6: "above", t1_w7: "the", t1_w8: "garden.",

    t2_title: "Adverb Mix",
    t2_text: "Final test of adverbs.",
    t2_inst: "Match adjective to adverb:",
    t2_h1: "Add -ly usually.",
    t2_h2: "Good -> Well.",
    t2_q: "Adverb of 'fast'?",
    t2_qa: "fast", t2_qb: "fastly", t2_qc: "faster", t2_qd: "fasts",
    t2_l1: "Quick", t2_r1: "Quickly",
    t2_l2: "Good", t2_r2: "Well",
    t2_l3: "Slow", t2_r3: "Slowly",

    t3_title: "Comparison Mix",
    t3_text: "Final test of comparisons.",
    t3_inst: "Choose for the blank:",
    t3_h1: "Comparing two things.",
    t3_h2: "Use 'better than'.",
    t3_q: "Which compares two?",
    t3_qa: "better", t3_qb: "best", t3_qc: "good", t3_qd: "goodly",
    t3_sent: "This book is ___ than the other one.",
    t3_qa2: "better", t3_qb2: "best", t3_qc2: "more good", t3_qd2: "good",

    t4_title: "Preposition Mix",
    t4_text: "Final test of prepositions.",
    t4_inst: "Highlight the preposition:",
    t4_h1: "Look for 'under'.",
    t4_h2: "It shows the position.",
    t4_q: "What shows where?",
    t4_qa: "under", t4_qb: "the", t4_qc: "cat", t4_qd: "is",
    t4_tk1: "The", t4_tk2: "small", t4_tk3: "cat", t4_tk4: "is", t4_tk5: "sleeping", t4_tk6: "under", t4_tk7: "the", t4_tk8: "large", t4_tk9: "wooden", t4_tk10: "table.",

    t5_title: "Pronoun Mix",
    t5_text: "Final test of pronouns.",
    t5_inst: "Build a pronoun sentence:",
    t5_h1: "Start with 'They are'.",
    t5_h2: "Use 'my best friends'.",
    t5_q: "Which is a pronoun?",
    t5_qa: "They", t5_qb: "Their", t5_qc: "Them", t5_qd: "There",
    t5_f1: "They are", t5_f2: "my very", t5_f3: "best friends", t5_f4: "in school.",

    t6_title: "General Sorter",
    t6_text: "Group by Part of Speech.",
    t6_inst: "Sort by Category:",
    t6_h1: "Is it a thing or an action?",
    t6_h2: "Noun vs Adjective.",
    t6_q: "Which is a noun?",
    t6_qa: "Apple", t6_qb: "Green", t6_qc: "Run", t6_qd: "Softly",
    t6_bl1: "Noun", t6_bl2: "Adjective",
    t6_i1: "Cat", t6_i2: "Blue",
    t6_i3: "Chair", t6_i4: "Large",

    t7_title: "Sentence Mix",
    t7_text: "Final sentence structure review.",
    t7_inst: "Order the mixed sentence:",
    t7_h1: "Start with 'She'.",
    t7_h2: "Verb is 'is playing'.",
    t7_q: "Correct order?",
    t7_qa: "She is playing now.", t7_qb: "Playing is she now.", t7_qc: "Now she is playing.", t7_qd: "Is she playing now.",
    t7_w1: "She", t7_w2: "is", t7_w3: "happily", t7_w4: "playing", t7_w5: "with", t7_w6: "her", t7_w7: "friends", t7_w8: "outside.",

    t8_title: "Tense Match",
    t8_text: "Final review of tenses.",
    t8_inst: "Match Time to Verb:",
    t8_h1: "Check the helper word.",
    t8_h2: "Will -> Future, Was -> Past.",
    t8_q: "Which is future?",
    t8_qa: "will go", t8_qb: "went", t8_qc: "go", t8_qd: "is going",
    t8_l1: "Yesterday", t8_r1: "I went",
    t8_l2: "Now", t8_r2: "I am going",
    t8_l3: "Tomorrow", t8_r3: "I will go",

    t9_title: "Vocab Choice",
    t9_text: "Final vocabulary choice review.",
    t9_inst: "Choose for the blank:",
    t9_h1: "It refers to an animal.",
    t9_h2: "Use 'tiger'.",
    t9_q: "A ___ has stripes.",
    t9_qa: "tiger", t9_qb: "lion", t9_qc: "bear", t9_qd: "elephant",
    t9_sent: "The ___ is very high.",
    t9_qa2: "mountain", t9_qb2: "river", t9_qc2: "road", t9_qd2: "field",

    t10_title: "Adjective Highlight 3",
    t10_text: "Finding adjectives in a long sentence.",
    t10_inst: "Highlight the adjective 'magnificent':",
    t10_h1: "Look for 'magnificent'.",
    t10_h2: "It describes the castle.",
    t10_q: "What is the adjective?",
    t10_qa: "magnificent", t10_qb: "castle", t10_qc: "saw", t10_qd: "the",
    t10_tk1: "We", t10_tk2: "saw", t10_tk3: "a", t10_tk4: "truly", t10_tk5: "magnificent", t10_tk6: "castle", t10_tk7: "on", t10_tk8: "the", t10_tk9: "high", t10_tk10: "hill.",

    t11_title: "Sentence Build 2",
    t11_text: "Build a complex sentence with 'because'.",
    t11_inst: "Build a 'reason' sentence:",
    t11_h1: "Start with 'I stayed home'.",
    t11_h2: "Use 'because it rained'.",
    t11_q: "Which shows reason?",
    t11_qa: "because", t11_qb: "and", t11_qc: "but", t11_qd: "so",
    t11_f1: "I stayed home", t11_f2: "all day", t11_f3: "because it", t11_f4: "rained heavily.",

    t12_title: "Final Sorter Mix",
    t12_text: "Final category sort review.",
    t12_inst: "Sort by Grammar Part:",
    t12_h1: "Verb or Adverb?",
    t12_h2: "Check the -ly ending.",
    t12_q: "Which is an adverb?",
    t12_qa: "slowly", t12_qb: "slow", t12_qc: "slowness", t12_qd: "slowing",
    t12_bl1: "Action (Verb)", t12_bl2: "How (Adverb)",
    t12_i1: "Jump", t12_i2: "Quickly",
    t12_i3: "Run", t12_i4: "Sadly",

    t13_title: "Review Gap-Fill",
    t13_text: "Mixed review gap-fill.",
    t13_inst: "Choose the best word:",
    t13_h1: "Check the plural rule.",
    t13_h2: "Many ___.",
    t13_q: "Many ___ are here.",
    t13_qa: "children", t13_qb: "childs", t13_qc: "childrens", t13_qd: "child",
    t13_sent: "There are many ___ today.",
    t13_qa2: "people", t13_qb2: "peoples", t13_qc2: "person", t13_qd2: "persons",

    t14_title: "Final Match 6",
    t14_text: "Final mixed matching practice.",
    t14_inst: "Match the pairs:",
    t14_h1: "Synonym review.",
    t14_h2: "Big -> Huge.",
    t14_q: "Which is correct?",
    t14_qa: "Big -> Huge", t14_qb: "Small -> Tiny", t14_qc: "Fast -> Rapid", t14_qd: "All are correct",
    t14_l1: "Happy", t14_r1: "Glad",
    t14_l2: "Silly", t14_r2: "Funny",
    t14_l3: "Smart", t14_r3: "Clever",

    t15_title: "Grade 4 Review",
    t15_text: "Complete review of Grade 4 English.",
    t15_inst: "Pick the best final answer:",
    t15_h1: "Think about everything we learned.",
    t15_h2: "Last question of the test!",
    t15_q: "Which is correct?",
    t15_qa: "She runs quickly.", t15_qb: "She runs quick.", t15_qc: "She is runs.", t15_qd: "She running.",
    t15_sent: "The sky is very ___ today.",
    t15_qa2: "blue", t15_qb2: "loud", t15_qc2: "running", t15_qd2: "slowly",
  },
};

export const BIGTEST4_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "adj", color: "#6B7280" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "adv", color: "#6B7280" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "better", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "find", color: "#6B7280" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9", "t4_tk10"], correctIndices: [5] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#6B7280" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#6B7280" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "order", color: "#6B7280" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7", "t7_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#6B7280" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "choice", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "castle", color: "#6B7280" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9", "t10_tk10"], correctIndices: [4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "build", color: "#6B7280" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#6B7280" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "plural", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#6B7280" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];
