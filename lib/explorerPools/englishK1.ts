import type { PoolTopicDef } from "./types";

// ─── AstroEnglish K1 Pool ──────────────────────────────────────────────────────
// Islands:
//   i1 = Phonics Island      🔤  short/long vowels, digraphs, vowel teams
//   i2 = Letter Land         🅰️  uppercase/lowercase, syllables, alphabet order
//   i3 = Blend Bay           🌊  consonant blends, rhyming words
//   i4 = Word World          📝  sight words, nouns, articles (a/an/the)
//   i5 = Action Cove         🏃  verbs, action words, present tense
//   i6 = Compound Cape       🔗  compound words, adjectives
//   i7 = Sentence Shore      💬  punctuation (period/question mark/exclamation)
//   i8 = Grammar Gulf        📖  capitalization, sentence vs non-sentence, word order
//   i9 = Story Summit        🌟  story structure, characters, settings, retelling
//
// RULES:
//   • LABELS has ONLY "en" key (English-only content)
//   • 15 topics per island (PoolTopicDef[])
//   • difficulty: "easy" | "medium" | "hard" — per island: ~5 easy, ~5 medium, ~5 hard
//   • Every topic MUST have: infoTitle, infoText, svg, interactive, quiz
//   • Optional: bulletKeys (array of label keys), hintKey (single label key)
//
// ── SvgConfig Types ────────────────────────────────────────────────────────────
//
//   { type: "letter-circles"; letters: string[]; color: string; showNotes?: boolean }
//      ⚠️ color REQUIRED
//      letters: actual text (not keys!), e.g. ["a", "e", "i", "o", "u"]
//
//   { type: "two-groups"; left: { items: string[]; bg: string; border: string };
//                          right: { items: string[]; bg: string; border: string }; bg?: string }
//      ⚠️ bg AND border REQUIRED in left/right — NO title field!
//      items: actual text, e.g. ["cat", "dog", "hat"]
//
//   { type: "text-bubbles"; items: { text: string; emoji?: string; color: string; bg: string }[] }
//      ⚠️ color AND bg REQUIRED in each item
//      text: actual text, e.g. "sh"
//
//   { type: "word-card"; word: string; translation: string }
//      word: the target word, translation: definition/example sentence
//
//   { type: "rhyme-pair"; word1: string; word2: string; emoji1?: string; emoji2?: string; color: string }
//      ⚠️ color REQUIRED
//
//   { type: "word-syllables"; parts: string[]; color: string; showClap?: boolean }
//      ⚠️ color REQUIRED; parts: actual syllables, e.g. ["beau", "ti", "ful"]
//
//   { type: "word-display"; word: string; highlightChars?: string[]; color: string; subtitle?: string }
//      ⚠️ color REQUIRED
//
//   { type: "sentence-display"; words: string[]; highlightIndices?: number[]; color: string }
//      ⚠️ color REQUIRED; words: individual words (not label keys)
//
//   { type: "simple-icon"; icon: string; title?: string; bg?: string; color?: string }
//
//   { type: "icon-grid"; items: { emoji: string; label?: string }[]; bg?: string }
//      label: actual text (optional)
//
//   { type: "compound-word"; word1: string; word2: string; result: string; color: string }
//      ⚠️ color REQUIRED
//
//   { type: "letter-pairs"; pairs: [string, string][]; color: string; dimColor?: string }
//      ⚠️ color REQUIRED; pairs: [uppercase, lowercase] e.g. ["A","a"]
//
// ── TopicInteractive Types ─────────────────────────────────────────────────────
//
//   { type: "word-order"; words: string[]; correctOrder: number[];
//     instruction: string; hint1: string; hint2: string }
//     words: label keys for each word; correctOrder: indices in correct sequence
//
//   { type: "gap-fill"; sentence: string; choices: string[]; correctIndex: number;
//     instruction: string; hint1: string; hint2: string }
//     sentence: label key (sentence with "___" placeholder); choices: 4 label keys
//
//   { type: "match-pairs"; pairs: { left: string; right: string }[];
//     instruction: string; hint1: string; hint2: string }
//     left/right: label keys (3–5 pairs recommended)
//
//   { type: "drag-to-bucket"; buckets: { id: string; label: string }[];
//     items: { text: string; bucketId: string }[];
//     instruction: string; hint1: string; hint2: string }
//     label: label key for bucket name; text: label key for item; bucketId: matches bucket id
//
//   { type: "highlight-text"; tokens: string[]; correctIndices: number[];
//     instruction: string; hint1: string; hint2: string }
//     tokens: label keys for each token in a sentence; correctIndices: which to tap
//
//   { type: "sentence-build"; fragments: string[];
//     instruction: string; hint1: string; hint2: string }
//     fragments: label keys in CORRECT order (scrambled automatically)
//
// ── Quiz Modes ─────────────────────────────────────────────────────────────────
//
//   Manual:    { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
//   Generator: { generate: "short_long_vowels_k1" }
//
//   Available English K1 generators (from deutschGenerators.ts):
//     "short_long_vowels_k1"  — short vs long vowel identification
//     "digraphs_k1"           — sh/ch/th/wh digraph recognition
//     "uppercase_k1"          — uppercase vs lowercase rule
//     "syllables_k1"          — syllable counting (1–3 syllables)
//     "blends_k1"             — consonant blend identification
//     "rhyming_k1"            — rhyming word pairs
//     "sight_words_k1"        — common sight word recognition
//     "nouns_k1"              — noun identification
//     "verbs_k1"              — verb identification
//     "articles_k1"           — a vs an rule
//     "compound_words_k1"     — compound word building
//     "adjectives_k1"         — describing words
//     "end_punctuation_k1"    — period/question mark/exclamation
//     "capitalization_k1"     — capitalization rules
//     "sentence_vs_not_k1"    — sentence vs fragment
//     "declarative_k1"        — declarative sentences
//     "imperative_k1"         — imperative/command sentences
//     "story_k1"              — story elements (character/setting/plot)
//     "colors_k1"             — color vocabulary
//     "numbers_words_k1"      — number words (one–ten)
//     "days_months_k1"        — days of week / months of year
//     "animals_k1"            — animal vocabulary
//     "body_parts_k1"         — body parts
//     "family_k1"             — family member vocabulary
//     "food_k1"               — food vocabulary
//     "classroom_k1"          — classroom object vocabulary
//
// ── Label Key Convention ───────────────────────────────────────────────────────
//   t{N}_title    — topic title shown on info screen
//   t{N}_text     — teaching paragraph (1–3 short sentences, age-appropriate for 6–7 year olds)
//   t{N}_inst     — interactive instruction (short imperative, e.g. "Tap all the vowels!")
//   t{N}_h1       — hint 1 (gentle nudge)
//   t{N}_h2       — hint 2 (stronger hint with example)
//   t{N}_b1/b2/b3 — optional bullet point facts (used in bulletKeys)
//   t{N}_q        — quiz question
//   t{N}_qa       — correct answer choice
//   t{N}_qb/qc/qd — wrong answer choices
//   + any extra keys the interactive needs (word-order words, gap-fill sentence, etc.)
//
// ── Export Names ───────────────────────────────────────────────────────────────
//   i1: PHONICS_LABELS,  PHONICS_POOL
//   i2: LETTER_LABELS,   LETTER_POOL
//   i3: BLEND_LABELS,    BLEND_POOL
//   i4: WORD_LABELS,     WORD_POOL
//   i5: ACTION_LABELS,   ACTION_POOL
//   i6: COMPOUND_LABELS, COMPOUND_POOL
//   i7: SENTENCE_LABELS, SENTENCE_POOL
//   i8: GRAMMAR_LABELS,  GRAMMAR_POOL
//   i9: STORY_LABELS,    STORY_POOL
// ──────────────────────────────────────────────────────────────────────────────


import type { PoolTopicDef } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i1 — Phonics Island (🔤, #FF2D78)
// Topics: short vowels, long vowels, digraphs, ending sounds
// ─────────────────────────────────────────────────────────────────────────────

export const PHONICS_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Phonics Island",

    // T1 - Short A
    t1_title: "Short 'a' Sound",
    t1_text: "The letter A can make a short sound, like in 'cat' or 'apple'.",
    t1_inst: "Find the word with the short 'a' sound!",
    t1_h1: "Listen for the sound in 'hat'.",
    t1_h2: "Look for 'cat'.",
    t1_q1: "Which word has a short 'a'?",
    t1_ans1: "cat", t1_ans1_2: "dog", t1_ans1_3: "pig",

    // T2 - Short E
    t2_title: "Short 'e' Sound",
    t2_text: "The letter E can make a short sound, like in 'bed' or 'red'.",
    t2_inst: "Fill in the missing letter!",
    t2_h1: "It sounds like 'eh'.",
    t2_h2: "The color is r-e-d.",
    t2_sent2: "The apple is r___d.",
    t2_c2_1: "e", t2_c2_2: "a", t2_c2_3: "o", t2_c2_4: "i",

    // T3 - Short I
    t3_title: "Short 'i' Sound",
    t3_text: "The letter I can make a short sound, like in 'pig' or 'dig'.",
    t3_inst: "Match the rhyming short 'i' words!",
    t3_h1: "Words that sound the same at the end.",
    t3_h2: "pig and dig.",
    t3_ml3_1: "pig", t3_mr3_1: "dig",
    t3_ml3_2: "sit", t3_mr3_2: "hit",
    t3_ml3_3: "lip", t3_mr3_3: "zip",

    // T4 - Short O
    t4_title: "Short 'o' Sound",
    t4_text: "The letter O can make a short sound, like in 'dog' or 'log'.",
    t4_inst: "Put the words in order!",
    t4_h1: "Start with 'The'.",
    t4_h2: "The dog runs.",
    t4_sw4_1: "The", t4_sw4_2: "dog", t4_sw4_3: "runs.",

    // T5 - Short U
    t5_title: "Short 'u' Sound",
    t5_text: "The letter U can make a short sound, like in 'sun' or 'run'.",
    t5_inst: "Sort the words by their vowel sound!",
    t5_h1: "Sun has a 'u'. Cat has an 'a'.",
    t5_h2: "Listen carefully to the middle sound.",
    t5_b5_1: "Short U ☀️", t5_b5_2: "Short A 🍎",
    t5_i5_1: "sun", t5_i5_2: "run", t5_i5_3: "cat", t5_i5_4: "hat",

    // T6 - Magic E (a_e)
    t6_title: "Magic 'E' (a_e)",
    t6_text: "A Magic 'E' at the end makes the vowel say its name. 'can' becomes 'cane'!",
    t6_inst: "Tap the Magic 'E' word!",
    t6_h1: "Look for an 'e' at the end.",
    t6_h2: "cake has a Magic 'E'.",
    t6_w6_1: "I", t6_w6_2: "like", t6_w6_3: "to", t6_w6_4: "eat", t6_w6_5: "cake",

    // T7 - Magic E (i_e)
    t7_title: "Magic 'E' (i_e)",
    t7_text: "The Magic 'E' makes 'i' say its name. 'bit' becomes 'bite'.",
    t7_inst: "Shoot the Magic 'E' word!",
    t7_h1: "Look for the sneaky 'e'.",
    t7_h2: "kite.",
    t7_q7: "Find the Magic E word:",
    t7_t7_1: "kite", t7_t7_2: "pig", t7_t7_3: "sit",

    // T8 - Vowel Team: ai / ay
    t8_title: "Vowel Team: ai & ay",
    t8_text: "When two vowels go walking, the first one does the talking! 'ai' and 'ay' say /A/.",
    t8_inst: "Sort the /A/ words!",
    t8_h1: "'ai' is usually in the middle, 'ay' is at the end.",
    t8_h2: "rain (ai) vs play (ay).",
    t8_b8_1: "Middle 'ai' 🌧️", t8_b8_2: "Ending 'ay' 🎮",
    t8_i8_1: "rain", t8_i8_2: "train", t8_i8_3: "play", t8_i8_4: "day",

    // T9 - Vowel Team: ee / ea
    t9_title: "Vowel Team: ee & ea",
    t9_text: "Both 'ee' and 'ea' say the long /E/ sound. Like in 'tree' or 'leaf'.",
    t9_inst: "Match the word to its team!",
    t9_h1: "Look at the letters inside the word.",
    t9_h2: "tree -> ee.",
    t9_ml9_1: "tree", t9_mr9_1: "ee",
    t9_ml9_2: "leaf", t9_mr9_2: "ea",
    t9_ml9_3: "bee", t9_mr9_3: "ee",

    // T10 - Vowel Team: oa / ow
    t10_title: "Vowel Team: oa & ow",
    t10_text: "'oa' and 'ow' can make the long /O/ sound. Like in 'boat' or 'snow'.",
    t10_inst: "Build the word!",
    t10_h1: "s-n-o-w.",
    t10_h2: "Put the parts together.",
    t10_f10_1: "I", t10_f10_2: "see", t10_f10_3: "the", t10_f10_4: "snow.",

    // T11 - Digraph: sh
    t11_title: "Digraph: sh",
    t11_text: "S and H together say /sh/, like when you tell someone to be quiet! 'ship', 'shoe'.",
    t11_inst: "Fill in the missing digraph!",
    t11_h1: "It sounds like a quiet sound.",
    t11_h2: "sh-op.",
    t11_sent11: "I go to the ___op.",
    t11_c11_1: "sh", t11_c11_2: "ch", t11_c11_3: "th", t11_c11_4: "wh",

    // T12 - Digraph: ch
    t12_title: "Digraph: ch",
    t12_text: "C and H together make a chopping sound: /ch/! Like in 'chip' or 'cheese'.",
    t12_inst: "Find the word starting with 'ch'!",
    t12_h1: "Look for c-h.",
    t12_h2: "cheese.",
    t12_q12: "Which word starts with ch?",
    t12_t12_1: "cheese", t12_t12_2: "shoe", t12_t12_3: "tree",

    // T13 - Digraphs: th / wh
    t13_title: "Digraphs: th & wh",
    t13_text: "'th' says /th/ (thumb). 'wh' says /w/ (whale).",
    t13_inst: "Sort the words by their start!",
    t13_h1: "Look at the first two letters.",
    t13_h2: "thumb -> th.",
    t13_b13_1: "Starts with 'th' 👍", t13_b13_2: "Starts with 'wh' 🐋",
    t13_i13_1: "thumb", t13_i13_2: "this", t13_i13_3: "whale", t13_i13_4: "what",

    // T14 - Ending: -ck
    t14_title: "Ending Sound: -ck",
    t14_text: "After a short vowel, we use 'ck' at the end of a word. Like 'duck' or 'sock'.",
    t14_inst: "Complete the word!",
    t14_h1: "It ends with -ck.",
    t14_h2: "d-u-c-k.",
    t14_sent14: "The yellow du___ swims.",
    t14_c14_1: "ck", t14_c14_2: "k", t14_c14_3: "c", t14_c14_4: "ch",

    // T15 - Endings: -ng / -nk
    t15_title: "Endings: -ng & -nk",
    t15_text: "These are sticky ending sounds! 'ring', 'king', 'pink', 'bank'.",
    t15_inst: "Match the word to the picture!",
    t15_h1: "Read carefully: ng or nk.",
    t15_h2: "ring goes with ng.",
    t15_ml15_1: "ring", t15_mr15_1: "-ng",
    t15_ml15_2: "pink", t15_mr15_2: "-nk",
    t15_ml15_3: "king", t15_mr15_3: "-ng"
  }
};

export const PHONICS_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "cat", color: "#FF2D78" },
    interactive: { type: "physics-slingshot", question: "t1_q1", targets: [{ id: "1", text: "t1_ans1", isCorrect: true }, { id: "2", text: "t1_ans1_2", isCorrect: false }, { id: "3", text: "t1_ans1_3", isCorrect: false }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "short_long_vowels_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "e", color: "#FFFFFF", bg: "#FF2D78" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "short_long_vowels_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "rhyme-pair", word1: "pig", word2: "dig", color: "#FF2D78" },
    interactive: { type: "match-pairs", pairs: [{ left: "t3_ml3_1", right: "t3_mr3_1" }, { left: "t3_ml3_2", right: "t3_mr3_2" }, { left: "t3_ml3_3", right: "t3_mr3_3" }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "short_long_vowels_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "letter-circles", letters: ["o", "o", "o"], color: "#FF2D78" },
    interactive: { type: "word-order", words: ["t4_sw4_1", "t4_sw4_2", "t4_sw4_3"], correctOrder: [0, 1, 2], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "short_long_vowels_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "☀️", color: "#FF2D78" },
    interactive: { type: "physics-bucket", buckets: [{ id: "u", label: "t5_b5_1" }, { id: "a", label: "t5_b5_2" }], items: [{ text: "t5_i5_1", bucketId: "u" }, { text: "t5_i5_2", bucketId: "u" }, { text: "t5_i5_3", bucketId: "a" }, { text: "t5_i5_4", bucketId: "a" }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "short_long_vowels_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Magic", "E"], color: "#FF2D78" },
    interactive: { type: "highlight-text", tokens: ["t6_w6_1", "t6_w6_2", "t6_w6_3", "t6_w6_4", "t6_w6_5"], correctIndices: [4], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "short_long_vowels_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "letter-pairs", pairs: [["i", "e"]], color: "#FF2D78" },
    interactive: { type: "physics-slingshot", question: "t7_q7", targets: [{ id: "1", text: "t7_t7_1", isCorrect: true }, { id: "2", text: "t7_t7_2", isCorrect: false }, { id: "3", text: "t7_t7_3", isCorrect: false }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "short_long_vowels_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "two-groups", left: { items: ["ai"], bg: "#FCE7F3", border: "#FF2D78" }, right: { items: ["ay"], bg: "#FDF2F8", border: "#DB2777" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "ai", label: "t8_b8_1" }, { id: "ay", label: "t8_b8_2" }], items: [{ text: "t8_i8_1", bucketId: "ai" }, { text: "t8_i8_2", bucketId: "ai" }, { text: "t8_i8_3", bucketId: "ay" }, { text: "t8_i8_4", bucketId: "ay" }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "short_long_vowels_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "ee", color: "#FFFFFF", bg: "#FF2D78" }, { text: "ea", color: "#FFFFFF", bg: "#DB2777" }] },
    interactive: { type: "physics-magnet", pairs: [{ left: "t9_ml9_1", right: "t9_mr9_1" }, { left: "t9_ml9_2", right: "t9_mr9_2" }, { left: "t9_ml9_3", right: "t9_mr9_3" }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "short_long_vowels_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🚤", color: "#FF2D78" },
    interactive: { type: "sentence-build", fragments: ["t10_f10_1", "t10_f10_2", "t10_f10_3", "t10_f10_4"], instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "short_long_vowels_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-syllables", parts: ["sh", "ip"], color: "#FF2D78" },
    interactive: { type: "gap-fill", sentence: "t11_sent11", choices: ["t11_c11_1", "t11_c11_2", "t11_c11_3", "t11_c11_4"], correctIndex: 0, instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "digraphs_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "icon-grid", items: [{ emoji: "🧀", label: "cheese" }] },
    interactive: { type: "physics-slingshot", question: "t12_q12", targets: [{ id: "1", text: "t12_t12_1", isCorrect: true }, { id: "2", text: "t12_t12_2", isCorrect: false }, { id: "3", text: "t12_t12_3", isCorrect: false }], instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "digraphs_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "two-groups", left: { items: ["th"], bg: "#FCE7F3", border: "#FF2D78" }, right: { items: ["wh"], bg: "#FDF2F8", border: "#DB2777" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "th", label: "t13_b13_1" }, { id: "wh", label: "t13_b13_2" }], items: [{ text: "t13_i13_1", bucketId: "th" }, { text: "t13_i13_2", bucketId: "th" }, { text: "t13_i13_3", bucketId: "wh" }, { text: "t13_i13_4", bucketId: "wh" }], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "digraphs_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "duck", color: "#FF2D78" },
    interactive: { type: "gap-fill", sentence: "t14_sent14", choices: ["t14_c14_1", "t14_c14_2", "t14_c14_3", "t14_c14_4"], correctIndex: 0, instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "digraphs_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "compound-word", word1: "ri", word2: "ng", result: "t15_ml15_1", color: "#FF2D78" },
    interactive: { type: "match-pairs", pairs: [{ left: "t15_ml15_1", right: "t15_mr15_1" }, { left: "t15_ml15_2", right: "t15_mr15_2" }, { left: "t15_ml15_3", right: "t15_mr15_3" }], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "digraphs_k1" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i2 — Letter Land (🅰️, #00D4FF)
// Topics: uppercase/lowercase, vowels vs consonants, syllables, alphabet order
// ─────────────────────────────────────────────────────────────────────────────

export const LETTER_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Letter Land",

    // T1 - Uppercase vs Lowercase (A-M)
    t1_title: "Big and Small Letters",
    t1_text: "Every letter has a big (uppercase) and a small (lowercase) friend. A and a.",
    t1_inst: "Match the big letter to the small letter!",
    t1_h1: "Look for the same shape or sound.",
    t1_h2: "Big B goes with small b.",
    t1_ml1_1: "A", t1_mr1_1: "a",
    t1_ml1_2: "B", t1_mr1_2: "b",
    t1_ml1_3: "D", t1_mr1_3: "d",

    // T2 - Uppercase vs Lowercase (N-Z)
    t2_title: "More Big and Small",
    t2_text: "Let's practice the rest of the alphabet! R and r, T and t.",
    t2_inst: "Shoot the uppercase (big) letter!",
    t2_h1: "It is taller than the small letters.",
    t2_h2: "Look for capital M.",
    t2_q2: "Which one is an uppercase letter?",
    t2_t2_1: "M", t2_t2_2: "n", t2_t2_3: "o",

    // T3 - Capital for Names
    t3_title: "Names Need Big Letters",
    t3_text: "Important words like your name always start with a big uppercase letter. 'Sam', 'Mia'.",
    t3_inst: "Which name is written correctly?",
    t3_h1: "The first letter must be big.",
    t3_h2: "Tom, not tom.",
    t3_q3: "Find the correct name:",
    t3_t3_1: "Sam", t3_t3_2: "sam", t3_t3_3: "sAm",

    // T4 - Capital for "I"
    t4_title: "The Magic 'I'",
    t4_text: "When you talk about yourself, the word 'I' is always uppercase!",
    t4_inst: "Fill in the correct 'I'!",
    t4_h1: "Always use the BIG I.",
    t4_h2: "I am happy.",
    t4_sent4: "___ am six years old.",
    t4_c4_1: "I", t4_c4_2: "i", t4_c4_3: "A", t4_c4_4: "Me",

    // T5 - Alphabet Order 1
    t5_title: "The ABC Song",
    t5_text: "The alphabet has an order. A, B, C, D, E, F, G...",
    t5_inst: "Put the letters in ABC order!",
    t5_h1: "Sing the ABC song in your head.",
    t5_h2: "A comes before B.",
    t5_sw5_1: "A", t5_sw5_2: "B", t5_sw5_3: "C",

    // T6 - Alphabet Order 2
    t6_title: "What comes next?",
    t6_text: "What comes after L? M, N, O, P...",
    t6_inst: "Fill in the missing letter!",
    t6_h1: "L, M, N...",
    t6_h2: "It is O.",
    t6_sent6: "L, M, N, ___ , P",
    t6_c6_1: "O", t6_c6_2: "Q", t6_c6_3: "K", t6_c6_4: "A",

    // T7 - Vowels vs Consonants 1
    t7_title: "The 5 Vowels",
    t7_text: "There are 5 special superhero letters: A, E, I, O, U. They are called vowels.",
    t7_inst: "Find the vowel!",
    t7_h1: "A, E, I, O, or U.",
    t7_h2: "The letter 'E'.",
    t7_q7: "Which letter is a vowel?",
    t7_t7_1: "E", t7_t7_2: "B", t7_t7_3: "S",

    // T8 - Vowels vs Consonants 2
    t8_title: "The Consonants",
    t8_text: "All the other letters (like B, C, D, M, S) are called consonants.",
    t8_inst: "Sort the letters into vowels and consonants!",
    t8_h1: "Vowels: a, e, i, o, u. Consonants: the rest.",
    t8_h2: "A is a vowel. C is a consonant.",
    t8_b8_1: "Vowels 🌟", t8_b8_2: "Consonants 🪨",
    t8_i8_1: "A", t8_i8_2: "C", t8_i8_3: "O", t8_i8_4: "S",

    // T9 - Syllables: 1 Clap
    t9_title: "Clapping Words (1)",
    t9_text: "We can clap the parts of a word. These parts are called syllables. 'Cat' has 1 clap.",
    t9_inst: "Which word has only 1 clap?",
    t9_h1: "Say it out loud and clap once.",
    t9_h2: "dog.",
    t9_q9: "Find the 1-syllable word:",
    t9_t9_1: "dog", t9_t9_2: "ap-ple", t9_t9_3: "ba-na-na",

    // T10 - Syllables: 2 Claps
    t10_title: "Clapping Words (2)",
    t10_text: "Some words are longer and have 2 claps. 'Ap-ple', 'Pen-cil'.",
    t10_inst: "Find the word with 2 claps!",
    t10_h1: "Clap as you say it: ti-ger.",
    t10_h2: "tiger.",
    t10_q10: "Find the 2-syllable word:",
    t10_t10_1: "ti-ger", t10_t10_2: "cat", t10_t10_3: "el-e-phant",

    // T11 - Syllables: 3 Claps
    t11_title: "Clapping Words (3)",
    t11_text: "Big words can have 3 claps! 'E-le-phant', 'Um-brel-la'.",
    t11_inst: "Match the word to its parts!",
    t11_h1: "Look at how the word is broken up.",
    t11_h2: "ba-na-na.",
    t11_ml11_1: "banana", t11_mr11_1: "ba-na-na",
    t11_ml11_2: "elephant", t11_mr11_2: "e-le-phant",

    // T12 - Tricky Letters: b vs d
    t12_title: "Tricky Letters: b & d",
    t12_text: "'b' has a belly. 'd' has a diaper! Don't mix them up.",
    t12_inst: "Find the letter 'b'!",
    t12_h1: "The stick is on the left.",
    t12_h2: "It looks like a bat and a ball.",
    t12_q12: "Which one is 'b'?",
    t12_t12_1: "b", t12_t12_2: "d", t12_t12_3: "p",

    // T13 - Tricky Letters: p vs q
    t13_title: "Tricky Letters: p & q",
    t13_text: "'p' looks down. 'q' looks back!",
    t13_inst: "Fill in the missing letter for 'pig'!",
    t13_h1: "It starts with p.",
    t13_h2: "p-i-g.",
    t13_sent13: "The ___ig is pink.",
    t13_c13_1: "p", t13_c13_2: "q", t13_c13_3: "b", t13_c13_4: "d",

    // T14 - Alphabet Review
    t14_title: "Alphabet Master",
    t14_text: "You know all the letters now! From A to Z.",
    t14_inst: "Put these letters in order!",
    t14_h1: "Sing the song: X, Y, Z.",
    t14_h2: "X comes first.",
    t14_sw14_1: "X", t14_sw14_2: "Y", t14_sw14_3: "Z",

    // T15 - Syllable Challenge
    t15_title: "Syllable Challenge",
    t15_text: "Let's test your clapping skills!",
    t15_inst: "Sort the words by their syllables (claps)!",
    t15_h1: "1 clap vs 2 claps.",
    t15_h2: "dog (1), ap-ple (2).",
    t15_b15_1: "1 Clap 👏", t15_b15_2: "2 Claps 👏👏",
    t15_i15_1: "cat", t15_i15_2: "pig", t15_i15_3: "ap-ple", t15_i15_4: "ti-ger"
  }
};

export const LETTER_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "letter-pairs", pairs: [["A", "a"], ["B", "b"]], color: "#00D4FF" },
    interactive: { type: "match-pairs", pairs: [{ left: "t1_ml1_1", right: "t1_mr1_1" }, { left: "t1_ml1_2", right: "t1_mr1_2" }, { left: "t1_ml1_3", right: "t1_mr1_3" }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "uppercase_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "letter-circles", letters: ["M", "n", "o"], color: "#00D4FF" },
    interactive: { type: "physics-slingshot", question: "t2_q2", targets: [{ id: "1", text: "t2_t2_1", isCorrect: true }, { id: "2", text: "t2_t2_2", isCorrect: false }, { id: "3", text: "t2_t2_3", isCorrect: false }], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "uppercase_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "Sam", color: "#00D4FF" },
    interactive: { type: "physics-slingshot", question: "t3_q3", targets: [{ id: "1", text: "t3_t3_1", isCorrect: true }, { id: "2", text: "t3_t3_2", isCorrect: false }, { id: "3", text: "t3_t3_3", isCorrect: false }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "uppercase_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "letter-circles", letters: ["I", "a", "m"], color: "#00D4FF" },
    interactive: { type: "gap-fill", sentence: "t4_sent4", choices: ["t4_c4_1", "t4_c4_2", "t4_c4_3", "t4_c4_4"], correctIndex: 0, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "uppercase_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "sentence-display", words: ["A", "B", "C"], color: "#00D4FF" },
    interactive: { type: "word-order", words: ["t5_sw5_1", "t5_sw5_2", "t5_sw5_3"], correctOrder: [0, 1, 2], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "uppercase_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "sentence-display", words: ["L", "M", "N", "O"], color: "#00D4FF" },
    interactive: { type: "gap-fill", sentence: "t6_sent6", choices: ["t6_c6_1", "t6_c6_2", "t6_c6_3", "t6_c6_4"], correctIndex: 0, instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "uppercase_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "letter-circles", letters: ["A", "E", "I", "O", "U"], color: "#00D4FF" },
    interactive: { type: "physics-slingshot", question: "t7_q7", targets: [{ id: "1", text: "t7_t7_1", isCorrect: true }, { id: "2", text: "t7_t7_2", isCorrect: false }, { id: "3", text: "t7_t7_3", isCorrect: false }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "short_long_vowels_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "two-groups", left: { items: ["A", "E"], bg: "#E0F2FE", border: "#00D4FF" }, right: { items: ["B", "C"], bg: "#F1F5F9", border: "#64748B" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "v", label: "t8_b8_1" }, { id: "c", label: "t8_b8_2" }], items: [{ text: "t8_i8_1", bucketId: "v" }, { text: "t8_i8_2", bucketId: "c" }, { text: "t8_i8_3", bucketId: "v" }, { text: "t8_i8_4", bucketId: "c" }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "uppercase_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "👏", color: "#00D4FF" },
    interactive: { type: "physics-slingshot", question: "t9_q9", targets: [{ id: "1", text: "t9_t9_1", isCorrect: true }, { id: "2", text: "t9_t9_2", isCorrect: false }, { id: "3", text: "t9_t9_3", isCorrect: false }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "syllables_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-syllables", parts: ["ti", "ger"], color: "#00D4FF" },
    interactive: { type: "physics-slingshot", question: "t10_q10", targets: [{ id: "1", text: "t10_t10_1", isCorrect: true }, { id: "2", text: "t10_t10_2", isCorrect: false }, { id: "3", text: "t10_t10_3", isCorrect: false }], instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "syllables_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-syllables", parts: ["ba", "na", "na"], color: "#00D4FF" },
    interactive: { type: "match-pairs", pairs: [{ left: "t11_ml11_1", right: "t11_mr11_1" }, { left: "t11_ml11_2", right: "t11_mr11_2" }], instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "syllables_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "text-bubbles", items: [{ text: "b", color: "#FFFFFF", bg: "#00D4FF" }, { text: "d", color: "#FFFFFF", bg: "#0284C7" }] },
    interactive: { type: "physics-slingshot", question: "t12_q12", targets: [{ id: "1", text: "t12_t12_1", isCorrect: true }, { id: "2", text: "t12_t12_2", isCorrect: false }, { id: "3", text: "t12_t12_3", isCorrect: false }], instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "uppercase_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "letter-circles", letters: ["p", "q"], color: "#00D4FF" },
    interactive: { type: "gap-fill", sentence: "t13_sent13", choices: ["t13_c13_1", "t13_c13_2", "t13_c13_3", "t13_c13_4"], correctIndex: 0, instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "uppercase_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "sentence-display", words: ["X", "Y", "Z"], color: "#00D4FF" },
    interactive: { type: "word-order", words: ["t14_sw14_1", "t14_sw14_2", "t14_sw14_3"], correctOrder: [0, 1, 2], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "uppercase_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "two-groups", left: { items: ["dog"], bg: "#E0F2FE", border: "#00D4FF" }, right: { items: ["ap-ple"], bg: "#F1F5F9", border: "#64748B" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "c1", label: "t15_b15_1" }, { id: "c2", label: "t15_b15_2" }], items: [{ text: "t15_i15_1", bucketId: "c1" }, { text: "t15_i15_2", bucketId: "c1" }, { text: "t15_i15_3", bucketId: "c2" }, { text: "t15_i15_4", bucketId: "c2" }], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "syllables_k1" }
  }
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i3 — Blend Bay (🌊, #00FF88)
// Topics: L-blends, R-blends, S-blends, rhyming words & families
// ─────────────────────────────────────────────────────────────────────────────

export const BLEND_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Blend Bay",

    // T1 - L-blends (bl, cl)
    t1_title: "L-Blends: bl & cl",
    t1_text: "When two letters stand together, you can hear both sounds fast. Like 'bl' in block or 'cl' in clock.",
    t1_inst: "Find the word with the 'bl' blend!",
    t1_h1: "Listen to the start of the word: b-l.",
    t1_h2: "Look for 'block'.",
    t1_q1: "Which word starts with 'bl'?",
    t1_ans1: "block", t1_ans1_2: "clock", t1_ans1_3: "sock",

    // T2 - L-blends (fl, gl, pl)
    t2_title: "More L-Blends",
    t2_text: "Other letters like to play with L too! Like 'flag', 'globe', and 'plane'.",
    t2_inst: "Match the blend to the word!",
    t2_h1: "Look at the first two letters.",
    t2_h2: "fl goes with flag.",
    t2_ml2_1: "fl", t2_mr2_1: "flag",
    t2_ml2_2: "gl", t2_mr2_2: "globe",
    t2_ml2_3: "pl", t2_mr2_3: "plane",

    // T3 - R-blends (br, cr, dr)
    t3_title: "R-Blends: br, cr, dr",
    t3_text: "When 'R' joins in, it makes a rolling sound. Like 'brown', 'crab', or 'drum'.",
    t3_inst: "Fill in the missing R-blend!",
    t3_h1: "It sounds like c-r.",
    t3_h2: "crab starts with cr.",
    t3_sent3: "The red ___ab walks on the sand.",
    t3_c3_1: "cr", t3_c3_2: "br", t3_c3_3: "dr", t3_c3_4: "tr",

    // T4 - R-blends (fr, gr, pr, tr)
    t4_title: "More R-Blends",
    t4_text: "Let's learn more R-blends! Like 'frog', 'grape', 'prize', and 'tree'.",
    t4_inst: "Shoot the word that starts with 'tr'!",
    t4_h1: "Look for t and r together.",
    t4_h2: "tree.",
    t4_q4: "Which word has a 'tr' blend?",
    t4_t4_1: "tree", t4_t4_2: "free", t4_t4_3: "green",

    // T5 - S-blends (sp, st, sn)
    t5_title: "S-Blends: sp, st, sn",
    t5_text: "S is a friendly letter! It makes words like 'spider', 'star', and 'snail'.",
    t5_inst: "Put the word together!",
    t5_h1: "Start with 'st'.",
    t5_h2: "st-ar.",
    t5_f5_1: "st", t5_f5_2: "ar",

    // T6 - S-blends (sk, sm, sw)
    t6_title: "More S-Blends",
    t6_text: "Let's swim and smile! 'skate', 'smile', and 'swim' all start with S-blends.",
    t6_inst: "Sort the S-blends!",
    t6_h1: "Look at the letter after S.",
    t6_h2: "swim starts with sw.",
    t6_b6_1: "Starts with sm 😃", t6_b6_2: "Starts with sw 🏊",
    t6_i6_1: "smile", t6_i6_2: "smell", t6_i6_3: "swim", t6_i6_4: "swan",

    // T7 - Rhyming: -at family
    t7_title: "The -at Family",
    t7_text: "Words that end the same way rhyme! 'cat', 'hat', and 'bat' all rhyme.",
    t7_inst: "Find the word that rhymes with 'cat'!",
    t7_h1: "It must end in -at.",
    t7_h2: "hat.",
    t7_q7: "What rhymes with cat?",
    t7_t7_1: "hat", t7_t7_2: "dog", t7_t7_3: "cap",

    // T8 - Rhyming: -og family
    t8_title: "The -og Family",
    t8_text: "'dog', 'log', and 'frog'. They all have '-og' at the end! They are a rhyming family.",
    t8_inst: "Match the rhyming words!",
    t8_h1: "Match words that sound the same at the end.",
    t8_h2: "dog and log.",
    t8_ml8_1: "dog", t8_mr8_1: "log",
    t8_ml8_2: "cat", t8_mr8_2: "hat",
    t8_ml8_3: "pig", t8_mr8_3: "dig",

    // T9 - Rhyming: -ing family
    t9_title: "The -ing Family",
    t9_text: "'ring', 'sing', 'king'. They have a sticky '-ing' sound!",
    t9_inst: "Highlight the rhyming word!",
    t9_h1: "Look for the word ending in -ing.",
    t9_h2: "sing.",
    t9_w9_1: "The", t9_w9_2: "king", t9_w9_3: "likes", t9_w9_4: "to", t9_w9_5: "sing.",

    // T10 - Rhyme Check
    t10_title: "Rhyme Master",
    t10_text: "Let's check your rhyming skills! Words rhyme if their endings sound the same.",
    t10_inst: "Sort the words by their rhyme!",
    t10_h1: "Look at the last letters.",
    t10_h2: "-ug vs -en.",
    t10_b10_1: "Rhymes with bug 🐛", t10_b10_2: "Rhymes with pen 🖊️",
    t10_i10_1: "rug", t10_i10_2: "mug", t10_i10_3: "ten", t10_i10_4: "hen",

    // T11 - Blend vs Digraph
    t11_title: "Blend or Digraph?",
    t11_text: "In a blend (bl), you hear BOTH letters. In a digraph (sh), two letters make ONE new sound.",
    t11_inst: "Which one is a digraph (one new sound)?",
    t11_h1: "sh, ch, th are digraphs.",
    t11_h2: "sh as in shoe.",
    t11_q11: "Find the digraph:",
    t11_t11_1: "sh", t11_t11_2: "bl", t11_t11_3: "tr",

    // T12 - Final Blends (-nd)
    t12_title: "Ending Blends: -nd",
    t12_text: "Blends can be at the end too! Like in 'sand' and 'hand'.",
    t12_inst: "Fill in the missing ending blend!",
    t12_h1: "It ends with -nd.",
    t12_h2: "sa-nd.",
    t12_sent12: "I play in the sa___ .",
    t12_c12_1: "nd", t12_c12_2: "st", t12_c12_3: "mp", t12_c12_4: "nt",

    // T13 - Final Blends (-st)
    t13_title: "Ending Blends: -st",
    t13_text: "Let's run fast! 'fast' and 'nest' end with the 'st' blend.",
    t13_inst: "Put the letters in order!",
    t13_h1: "n-e-s-t.",
    t13_h2: "nest.",
    t13_sw13_1: "n", t13_sw13_2: "e", t13_sw13_3: "st",

    // T14 - Final Blends (-mp)
    t14_title: "Ending Blends: -mp",
    t14_text: "Let's jump at the camp! 'jump' and 'camp' end with 'mp'.",
    t14_inst: "Which word ends with 'mp'?",
    t14_h1: "Look at the last two letters.",
    t14_h2: "jump.",
    t14_q14: "Find the -mp word:",
    t14_t14_1: "jump", t14_t14_2: "fast", t14_t14_3: "hand",

    // T15 - Blend Master
    t15_title: "Blend Master",
    t15_text: "You are a blend master! Let's build one more word.",
    t15_inst: "Build the word 'clock'!",
    t15_h1: "Start with the 'cl' blend.",
    t15_h2: "cl-o-ck.",
    t15_f15_1: "cl", t15_f15_2: "o", t15_f15_3: "ck"
  }
};

export const BLEND_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "bl", color: "#00FF88" },
    interactive: { type: "physics-slingshot", question: "t1_q1", targets: [{ id: "1", text: "t1_ans1", isCorrect: true }, { id: "2", text: "t1_ans1_2", isCorrect: false }, { id: "3", text: "t1_ans1_3", isCorrect: false }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "blends_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "icon-grid", items: [{ emoji: "✈️", label: "plane" }, { emoji: "🌍", label: "globe" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_ml2_1", right: "t2_mr2_1" }, { left: "t2_ml2_2", right: "t2_mr2_2" }, { left: "t2_ml2_3", right: "t2_mr2_3" }], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "blends_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "compound-word", word1: "cr", word2: "ab", result: "crab", color: "#00FF88" },
    interactive: { type: "gap-fill", sentence: "t3_sent3", choices: ["t3_c3_1", "t3_c3_2", "t3_c3_3", "t3_c3_4"], correctIndex: 0, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "blends_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "text-bubbles", items: [{ text: "tr", color: "#FFFFFF", bg: "#00FF88" }, { text: "gr", color: "#FFFFFF", bg: "#10B981" }] },
    interactive: { type: "physics-slingshot", question: "t4_q4", targets: [{ id: "1", text: "t4_t4_1", isCorrect: true }, { id: "2", text: "t4_t4_2", isCorrect: false }, { id: "3", text: "t4_t4_3", isCorrect: false }], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "blends_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-syllables", parts: ["st", "ar"], color: "#00FF88" },
    interactive: { type: "sentence-build", fragments: ["t5_f5_1", "t5_f5_2"], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "blends_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "two-groups", left: { items: ["sm"], bg: "#DCFCE7", border: "#10B981" }, right: { items: ["sw"], bg: "#F1F5F9", border: "#64748B" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "sm", label: "t6_b6_1" }, { id: "sw", label: "t6_b6_2" }], items: [{ text: "t6_i6_1", bucketId: "sm" }, { text: "t6_i6_2", bucketId: "sm" }, { text: "t6_i6_3", bucketId: "sw" }, { text: "t6_i6_4", bucketId: "sw" }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "blends_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "rhyme-pair", word1: "cat", word2: "hat", color: "#00FF88" },
    interactive: { type: "physics-slingshot", question: "t7_q7", targets: [{ id: "1", text: "t7_t7_1", isCorrect: true }, { id: "2", text: "t7_t7_2", isCorrect: false }, { id: "3", text: "t7_t7_3", isCorrect: false }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "rhyming_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "rhyme-pair", word1: "dog", word2: "log", color: "#10B981" },
    interactive: { type: "match-pairs", pairs: [{ left: "t8_ml8_1", right: "t8_mr8_1" }, { left: "t8_ml8_2", right: "t8_mr8_2" }, { left: "t8_ml8_3", right: "t8_mr8_3" }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "rhyming_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "sentence-display", words: ["The", "king", "sings"], color: "#00FF88" },
    interactive: { type: "highlight-text", tokens: ["t9_w9_1", "t9_w9_2", "t9_w9_3", "t9_w9_4", "t9_w9_5"], correctIndices: [1, 4], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "rhyming_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "two-groups", left: { items: ["bug"], bg: "#DCFCE7", border: "#10B981" }, right: { items: ["pen"], bg: "#F1F5F9", border: "#64748B" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "u", label: "t10_b10_1" }, { id: "e", label: "t10_b10_2" }], items: [{ text: "t10_i10_1", bucketId: "u" }, { text: "t10_i10_2", bucketId: "u" }, { text: "t10_i10_3", bucketId: "e" }, { text: "t10_i10_4", bucketId: "e" }], instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "rhyming_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "text-bubbles", items: [{ text: "bl", color: "#FFFFFF", bg: "#00FF88" }, { text: "sh", color: "#FFFFFF", bg: "#10B981" }] },
    interactive: { type: "physics-slingshot", question: "t11_q11", targets: [{ id: "1", text: "t11_t11_1", isCorrect: true }, { id: "2", text: "t11_t11_2", isCorrect: false }, { id: "3", text: "t11_t11_3", isCorrect: false }], instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "blends_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "compound-word", word1: "sa", word2: "nd", result: "sand", color: "#00FF88" },
    interactive: { type: "gap-fill", sentence: "t12_sent12", choices: ["t12_c12_1", "t12_c12_2", "t12_c12_3", "t12_c12_4"], correctIndex: 0, instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "blends_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "letter-circles", letters: ["n", "e", "s", "t"], color: "#00FF88" },
    interactive: { type: "word-order", words: ["t13_sw13_1", "t13_sw13_2", "t13_sw13_3"], correctOrder: [0, 1, 2], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "blends_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "-mp", color: "#00FF88" },
    interactive: { type: "physics-slingshot", question: "t14_q14", targets: [{ id: "1", text: "t14_t14_1", isCorrect: true }, { id: "2", text: "t14_t14_2", isCorrect: false }, { id: "3", text: "t14_t14_3", isCorrect: false }], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "blends_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏆", color: "#00FF88" },
    interactive: { type: "sentence-build", fragments: ["t15_f15_1", "t15_f15_2", "t15_f15_3"], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "blends_k1" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i4 — Word World (📝, #B44DFF)
// Topics: sight words, nouns (person/place/thing), articles (a/an/the)
// ─────────────────────────────────────────────────────────────────────────────

export const WORD_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Word World",

    // T1 - Sight Words (the, a, is)
    t1_title: "Sight Words: the, a, is",
    t1_text: "Sight words are words we see a lot! We just have to remember them. Like 'the', 'a', and 'is'.",
    t1_inst: "Shoot the sight word 'the'!",
    t1_h1: "It starts with t-h.",
    t1_h2: "Look for t-h-e.",
    t1_q1: "Find the word 'the':",
    t1_t1_1: "the", t1_t1_2: "cat", t1_t1_3: "run",

    // T2 - Sight Words (he, she, we)
    t2_title: "Sight Words: he, she, we",
    t2_text: "These words tell us who is doing something. 'He' is a boy, 'she' is a girl, 'we' is all of us!",
    t2_inst: "Fill in the blank with 'she'!",
    t2_h1: "It starts with s-h.",
    t2_h2: "s-h-e.",
    t2_sent2: "___ is my friend.",
    t2_c2_1: "She", t2_c2_2: "Dog", t2_c2_3: "Is", t2_c2_4: "Play",

    // T3 - Sight Words (can, do, go)
    t3_title: "Sight Words: can, do, go",
    t3_text: "More words to remember! 'I can do it!', 'Let's go!'",
    t3_inst: "Match the word to its letters!",
    t3_h1: "c-a-n makes can.",
    t3_h2: "Match the exact same words.",
    t3_ml3_1: "can", t3_mr3_1: "can",
    t3_ml3_2: "do", t3_mr3_2: "do",
    t3_ml3_3: "go", t3_mr3_3: "go",

    // T4 - Sight Words (you, have, my)
    t4_title: "Sight Words: you, have, my",
    t4_text: "Let's build a sentence with these words! 'You have my book.'",
    t4_inst: "Put the sentence in order!",
    t4_h1: "Start with You.",
    t4_h2: "You have my dog.",
    t4_sw4_1: "You", t4_sw4_2: "have", t4_sw4_3: "my", t4_sw4_4: "dog.",

    // T5 - Nouns: Person
    t5_title: "Nouns: People",
    t5_text: "A noun is a naming word. It can name a person, like 'teacher', 'boy', or 'mom'.",
    t5_inst: "Which word is a person?",
    t5_h1: "Who is alive?",
    t5_h2: "A boy is a person.",
    t5_q5: "Find the person:",
    t5_t5_1: "boy", t5_t5_2: "chair", t5_t5_3: "run",

    // T6 - Nouns: Place
    t6_title: "Nouns: Places",
    t6_text: "A noun can name a place you can visit. Like 'park', 'school', or 'home'.",
    t6_inst: "Highlight the place in the sentence!",
    t6_h1: "Where do you play?",
    t6_h2: "The park.",
    t6_w6_1: "I", t6_w6_2: "play", t6_w6_3: "at", t6_w6_4: "the", t6_w6_5: "park",

    // T7 - Nouns: Thing
    t7_title: "Nouns: Things",
    t7_text: "A noun can name a thing you can touch. Like 'book', 'car', or 'apple'.",
    t7_inst: "Which word is a thing?",
    t7_h1: "What can you hold in your hand?",
    t7_h2: "A book.",
    t7_q7: "Find the thing:",
    t7_t7_1: "book", t7_t7_2: "happy", t7_t7_3: "jump",

    // T8 - Nouns: Animal
    t8_title: "Nouns: Animals",
    t8_text: "A noun can also name an animal! Like 'cat', 'dog', or 'elephant'.",
    t8_inst: "Fill in the animal noun!",
    t8_h1: "It says meow.",
    t8_h2: "The cat.",
    t8_sent8: "The ___ likes to sleep.",
    t8_c8_1: "cat", t8_c8_2: "fast", t8_c8_3: "run", t8_c8_4: "very",

    // T9 - Noun Sort
    t9_title: "Noun Sorter",
    t9_text: "Let's sort the nouns! Is it a person or a thing?",
    t9_inst: "Sort the nouns into the buckets!",
    t9_h1: "Mom is a person. Car is a thing.",
    t9_h2: "People are alive.",
    t9_b9_1: "Person 🧑", t9_b9_2: "Thing 🚗",
    t9_i9_1: "Mom", t9_i9_2: "boy", t9_i9_3: "car", t9_i9_4: "book",

    // T10 - Articles: 'a'
    t10_title: "Using 'a'",
    t10_text: "We use 'a' before words that start with a consonant. 'A cat', 'a dog'.",
    t10_inst: "Fill in the missing word!",
    t10_h1: "'dog' starts with 'd', so we use 'a'.",
    t10_h2: "a dog.",
    t10_sent10: "I see ___ dog.",
    t10_c10_1: "a", t10_c10_2: "an", t10_c10_3: "is", t10_c10_4: "do",

    // T11 - Articles: 'an'
    t11_title: "Using 'an'",
    t11_text: "We use 'an' before words that start with a vowel (a, e, i, o, u). 'An apple', 'an egg'.",
    t11_inst: "Shoot the correct word!",
    t11_h1: "'apple' starts with 'a' (a vowel).",
    t11_h2: "Use 'an'.",
    t11_q11: "I eat ___ apple.",
    t11_t11_1: "an", t11_t11_2: "a", t11_t11_3: "the",

    // T12 - Articles: a vs an
    t12_title: "A or An?",
    t12_text: "Look at the first letter of the word to choose 'a' or 'an'.",
    t12_inst: "Match the article to the word!",
    t12_h1: "cat -> a. elephant -> an.",
    t12_h2: "Vowels need 'an'.",
    t12_ml12_1: "a", t12_mr12_1: "cat",
    t12_ml12_2: "an", t12_mr12_2: "elephant",

    // T13 - Articles: The
    t13_title: "The Word 'The'",
    t13_text: "'The' points to a specific thing. 'The big dog'. We use it for things we already know.",
    t13_inst: "Highlight 'the' in the sentence!",
    t13_h1: "Look for t-h-e.",
    t13_h2: "The.",
    t13_w13_1: "Look", t13_w13_2: "at", t13_w13_3: "the", t13_w13_4: "sun.",

    // T14 - Sight Word Hunt
    t14_title: "Sight Word Hunt",
    t14_text: "Let's find some tricky sight words!",
    t14_inst: "Which word is 'said'?",
    t14_h1: "It starts with s-a.",
    t14_h2: "s-a-i-d.",
    t14_q14: "Find the word 'said':",
    t14_t14_1: "said", t14_t14_2: "sad", t14_t14_3: "sand",

    // T15 - Sentence Builder
    t15_title: "Sentence Builder",
    t15_text: "You know so many words now! Let's build a sentence.",
    t15_inst: "Put the blocks in order to make a sentence!",
    t15_h1: "Start with 'The'.",
    t15_h2: "The cat is big.",
    t15_f15_1: "The", t15_f15_2: "cat", t15_f15_3: "is", t15_f15_4: "big."
  }
};

export const WORD_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{ text: "the", color: "#FFFFFF", bg: "#B44DFF" }] },
    interactive: { type: "physics-slingshot", question: "t1_q1", targets: [{ id: "1", text: "t1_t1_1", isCorrect: true }, { id: "2", text: "t1_t1_2", isCorrect: false }, { id: "3", text: "t1_t1_3", isCorrect: false }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "sight_words_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "she", color: "#B44DFF" },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "sight_words_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "icon-grid", items: [{ emoji: "👍", label: "can" }, { emoji: "🏃", label: "go" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t3_ml3_1", right: "t3_mr3_1" }, { left: "t3_ml3_2", right: "t3_mr3_2" }, { left: "t3_ml3_3", right: "t3_mr3_3" }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "sight_words_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "sentence-display", words: ["You", "have", "my"], color: "#B44DFF" },
    interactive: { type: "word-order", words: ["t4_sw4_1", "t4_sw4_2", "t4_sw4_3", "t4_sw4_4"], correctOrder: [0, 1, 2, 3], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "sight_words_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "simple-icon", icon: "🧑", color: "#B44DFF" },
    interactive: { type: "physics-slingshot", question: "t5_q5", targets: [{ id: "1", text: "t5_t5_1", isCorrect: true }, { id: "2", text: "t5_t5_2", isCorrect: false }, { id: "3", text: "t5_t5_3", isCorrect: false }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "nouns_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "sentence-display", words: ["the", "park"], color: "#B44DFF" },
    interactive: { type: "highlight-text", tokens: ["t6_w6_1", "t6_w6_2", "t6_w6_3", "t6_w6_4", "t6_w6_5"], correctIndices: [4], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "nouns_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "📚", color: "#B44DFF" },
    interactive: { type: "physics-slingshot", question: "t7_q7", targets: [{ id: "1", text: "t7_t7_1", isCorrect: true }, { id: "2", text: "t7_t7_2", isCorrect: false }, { id: "3", text: "t7_t7_3", isCorrect: false }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "nouns_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "cat", color: "#B44DFF" },
    interactive: { type: "gap-fill", sentence: "t8_sent8", choices: ["t8_c8_1", "t8_c8_2", "t8_c8_3", "t8_c8_4"], correctIndex: 0, instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "nouns_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "two-groups", left: { items: ["Mom"], bg: "#F3E8FF", border: "#B44DFF" }, right: { items: ["car"], bg: "#F1F5F9", border: "#64748B" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "p", label: "t9_b9_1" }, { id: "t", label: "t9_b9_2" }], items: [{ text: "t9_i9_1", bucketId: "p" }, { text: "t9_i9_2", bucketId: "p" }, { text: "t9_i9_3", bucketId: "t" }, { text: "t9_i9_4", bucketId: "t" }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "nouns_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "compound-word", word1: "a", word2: "dog", result: "a dog", color: "#B44DFF" },
    interactive: { type: "gap-fill", sentence: "t10_sent10", choices: ["t10_c10_1", "t10_c10_2", "t10_c10_3", "t10_c10_4"], correctIndex: 0, instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "articles_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "an apple", color: "#B44DFF" },
    interactive: { type: "physics-slingshot", question: "t11_q11", targets: [{ id: "1", text: "t11_t11_1", isCorrect: true }, { id: "2", text: "t11_t11_2", isCorrect: false }, { id: "3", text: "t11_t11_3", isCorrect: false }], instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "articles_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "two-groups", left: { items: ["a"], bg: "#F3E8FF", border: "#B44DFF" }, right: { items: ["an"], bg: "#FCE7F3", border: "#DB2777" } },
    interactive: { type: "match-pairs", pairs: [{ left: "t12_ml12_1", right: "t12_mr12_1" }, { left: "t12_ml12_2", right: "t12_mr12_2" }], instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "articles_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "letter-circles", letters: ["t", "h", "e"], color: "#B44DFF" },
    interactive: { type: "highlight-text", tokens: ["t13_w13_1", "t13_w13_2", "t13_w13_3", "t13_w13_4"], correctIndices: [2], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "sight_words_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "text-bubbles", items: [{ text: "said", color: "#FFFFFF", bg: "#B44DFF" }] },
    interactive: { type: "physics-slingshot", question: "t14_q14", targets: [{ id: "1", text: "t14_t14_1", isCorrect: true }, { id: "2", text: "t14_t14_2", isCorrect: false }, { id: "3", text: "t14_t14_3", isCorrect: false }], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "sight_words_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🧱", color: "#B44DFF" },
    interactive: { type: "sentence-build", fragments: ["t15_f15_1", "t15_f15_2", "t15_f15_3", "t15_f15_4"], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "articles_k1" }
  }
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i5 — Action Cove (🏃, #FF9500)
// Topics: action verbs, present tense, am/is/are, verb vs noun
// ─────────────────────────────────────────────────────────────────────────────

export const ACTION_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Action Cove",

    // T1 - Action Verbs
    t1_title: "Action Words (Verbs)",
    t1_text: "Verbs are action words! They tell us what someone or something is doing. Like 'run' or 'jump'.",
    t1_inst: "Shoot the action word!",
    t1_h1: "What can you do with your legs?",
    t1_h2: "jump.",
    t1_q1: "Which word is an action?",
    t1_t1_1: "jump", t1_t1_2: "apple", t1_t1_3: "red",

    // T2 - Finding Verbs
    t2_title: "Find the Verb",
    t2_text: "Let's find the action! 'The frog swims.' What does the frog do? It swims!",
    t2_inst: "Highlight the action word (verb)!",
    t2_h1: "What is the dog doing?",
    t2_h2: "barks.",
    t2_w2_1: "The", t2_w2_2: "brown", t2_w2_3: "dog", t2_w2_4: "barks",

    // T3 - Verb vs Noun
    t3_title: "Noun or Verb?",
    t3_text: "A noun is a thing (like 'cat'). A verb is an action (like 'run').",
    t3_inst: "Sort the words into Nouns and Verbs!",
    t3_h1: "Can you touch it (Noun) or do it (Verb)?",
    t3_h2: "Dog is a noun. Swim is a verb.",
    t3_b3_1: "Noun (Thing) 📦", t3_b3_2: "Verb (Action) 🏃",
    t3_i3_1: "car", t3_i3_2: "hat", t3_i3_3: "swim", t3_i3_4: "play",

    // T4 - Present Tense (He/She/It + s)
    t4_title: "Adding 's' to Verbs",
    t4_text: "When 'he', 'she', or 'it' does something, we often add an 's' to the verb. 'He runs.'",
    t4_inst: "Fill in the correct verb!",
    t4_h1: "The cat is an 'it', so add 's'.",
    t4_h2: "sleeps.",
    t4_sent4: "The cat ___ on the mat.",
    t4_c4_1: "sleeps", t4_c4_2: "sleep", t4_c4_3: "sleeping", t4_c4_4: "sleeped",

    // T5 - Present Tense (I/We/They)
    t5_title: "No 's' for I and You",
    t5_text: "When 'I', 'you', 'we', or 'they' do something, we do NOT add an 's'. 'I run.'",
    t5_inst: "Match the pronoun to the correct verb!",
    t5_h1: "He gets an 's'. I does not.",
    t5_h2: "I play. She plays.",
    t5_ml5_1: "I", t5_mr5_1: "play",
    t5_ml5_2: "She", t5_mr5_2: "plays",
    t5_ml5_3: "They", t5_mr5_3: "jump",

    // T6 - Am / Is / Are (I am)
    t6_title: "The Verb 'To Be': am",
    t6_text: "We use 'am' only when talking about ourselves. 'I am happy.'",
    t6_inst: "Put the sentence in order!",
    t6_h1: "Start with 'I'.",
    t6_h2: "I am six.",
    t6_sw6_1: "I", t6_sw6_2: "am", t6_sw6_3: "six.",

    // T7 - Am / Is / Are (She is)
    t7_title: "The Verb 'To Be': is",
    t7_text: "We use 'is' for one person or thing (he, she, it). 'She is fast.'",
    t7_inst: "Fill in the blank with 'is'!",
    t7_h1: "The sun is one thing.",
    t7_h2: "The sun is hot.",
    t7_sent7: "The sun ___ hot.",
    t7_c7_1: "is", t7_c7_2: "am", t7_c7_3: "are", t7_c7_4: "be",

    // T8 - Am / Is / Are (We are)
    t8_title: "The Verb 'To Be': are",
    t8_text: "We use 'are' for 'you', 'we', and 'they' (more than one). 'We are friends.'",
    t8_inst: "Shoot the correct word!",
    t8_h1: "We means more than one person.",
    t8_h2: "We are.",
    t8_q8: "We ___ jumping.",
    t8_t8_1: "are", t8_t8_2: "is", t8_t8_3: "am",

    // T9 - Am / Is / Are Sorting
    t9_title: "Sorting am, is, are",
    t9_text: "Let's see if you remember! I am, He is, We are.",
    t9_inst: "Sort the pronouns to the correct bucket!",
    t9_h1: "She goes with 'is'. They goes with 'are'.",
    t9_h2: "He is, They are.",
    t9_b9_1: "goes with 'is' 👤", t9_b9_2: "goes with 'are' 👥",
    t9_i9_1: "He", t9_i9_2: "She", t9_i9_3: "We", t9_i9_4: "They",

    // T10 - Animal Actions
    t10_title: "Animal Actions",
    t10_text: "Different animals do different things! Birds fly, frogs jump.",
    t10_inst: "Match the animal to its action!",
    t10_h1: "What does a fish do?",
    t10_h2: "Fish swim.",
    t10_ml10_1: "bird", t10_mr10_1: "flies",
    t10_ml10_2: "fish", t10_mr10_2: "swims",
    t10_ml10_3: "frog", t10_mr10_3: "jumps",

    // T11 - Action Sentence Builder
    t11_title: "Action Sentences",
    t11_text: "Let's build a sentence with an action word!",
    t11_inst: "Put the words in order!",
    t11_h1: "Start with 'The boy'.",
    t11_h2: "The boy kicks the ball.",
    t11_f11_1: "The boy", t11_f11_2: "kicks", t11_f11_3: "the", t11_f11_4: "ball.",

    // T12 - Continuous Actions (-ing)
    t12_title: "Happening Now (-ing)",
    t12_text: "When something is happening right now, we add '-ing' to the verb. 'She is reading.'",
    t12_inst: "Highlight the '-ing' action word!",
    t12_h1: "Look for the word ending in i-n-g.",
    t12_h2: "playing.",
    t12_w12_1: "He", t12_w12_2: "is", t12_w12_3: "playing", t12_w12_4: "outside.",

    // T13 - Identifying Actions in text
    t13_title: "Action Detective",
    t13_text: "Can you find the action in this sentence?",
    t13_inst: "Find the action word (verb)!",
    t13_h1: "What does Mom do?",
    t13_h2: "bakes.",
    t13_q13: "Mom bakes a cake. What is the verb?",
    t13_t13_1: "bakes", t13_t13_2: "Mom", t13_t13_3: "cake",

    // T14 - Gap Fill Action
    t14_title: "Missing Action",
    t14_text: "This sentence is missing its action word!",
    t14_inst: "Fill in the missing verb!",
    t14_h1: "What do you do with a book?",
    t14_h2: "read.",
    t14_sent14: "I ___ a book before bed.",
    t14_c14_1: "read", t14_c14_2: "run", t14_c14_3: "apple", t14_c14_4: "is",

    // T15 - Action Master
    t15_title: "Action Master",
    t15_text: "You know all about verbs! You are an Action Master.",
    t15_inst: "Shoot the word that is NOT an action!",
    t15_h1: "Find the noun (thing).",
    t15_h2: "tree is a thing, not an action.",
    t15_q15: "Which word is NOT a verb?",
    t15_t15_1: "tree", t15_t15_2: "run", t15_t15_3: "jump",
  }
};

export const ACTION_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🏃", color: "#FF9500" },
    interactive: { type: "physics-slingshot", question: "t1_q1", targets: [{ id: "1", text: "t1_t1_1", isCorrect: true }, { id: "2", text: "t1_t1_2", isCorrect: false }, { id: "3", text: "t1_t1_3", isCorrect: false }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "verbs_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "sentence-display", words: ["The", "brown", "dog", "barks"], color: "#FF9500" },
    interactive: { type: "highlight-text", tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"], correctIndices: [3], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "verbs_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "two-groups", left: { items: ["cat", "car"], bg: "#FFF7ED", border: "#FF9500" }, right: { items: ["run", "sit"], bg: "#FEF3C7", border: "#F59E0B" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "n", label: "t3_b3_1" }, { id: "v", label: "t3_b3_2" }], items: [{ text: "t3_i3_1", bucketId: "n" }, { text: "t3_i3_2", bucketId: "n" }, { text: "t3_i3_3", bucketId: "v" }, { text: "t3_i3_4", bucketId: "v" }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "verbs_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "text-bubbles", items: [{ text: "cat", color: "#FFFFFF", bg: "#FF9500" }, { text: "sleeps", color: "#FFFFFF", bg: "#D97706" }] },
    interactive: { type: "gap-fill", sentence: "t4_sent4", choices: ["t4_c4_1", "t4_c4_2", "t4_c4_3", "t4_c4_4"], correctIndex: 0, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "verbs_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "icon-grid", items: [{ emoji: "👧", label: "She plays" }, { emoji: "🙋‍♂️", label: "I play" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_ml5_1", right: "t5_mr5_1" }, { left: "t5_ml5_2", right: "t5_mr5_2" }, { left: "t5_ml5_3", right: "t5_mr5_3" }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "verbs_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "I am", color: "#FF9500" },
    interactive: { type: "word-order", words: ["t6_sw6_1", "t6_sw6_2", "t6_sw6_3"], correctOrder: [0, 1, 2], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "verbs_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "is", color: "#FF9500" },
    interactive: { type: "gap-fill", sentence: "t7_sent7", choices: ["t7_c7_1", "t7_c7_2", "t7_c7_3", "t7_c7_4"], correctIndex: 0, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "verbs_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "are", color: "#FF9500" },
    interactive: { type: "physics-slingshot", question: "t8_q8", targets: [{ id: "1", text: "t8_t8_1", isCorrect: true }, { id: "2", text: "t8_t8_2", isCorrect: false }, { id: "3", text: "t8_t8_3", isCorrect: false }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "verbs_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "two-groups", left: { items: ["He", "She"], bg: "#FFF7ED", border: "#FF9500" }, right: { items: ["We", "They"], bg: "#FEF3C7", border: "#F59E0B" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "is", label: "t9_b9_1" }, { id: "are", label: "t9_b9_2" }], items: [{ text: "t9_i9_1", bucketId: "is" }, { text: "t9_i9_2", bucketId: "is" }, { text: "t9_i9_3", bucketId: "are" }, { text: "t9_i9_4", bucketId: "are" }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "verbs_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🐸", color: "#FF9500" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t10_ml10_1", right: "t10_mr10_1" }, { left: "t10_ml10_2", right: "t10_mr10_2" }, { left: "t10_ml10_3", right: "t10_mr10_3" }], instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "verbs_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "sentence-display", words: ["The", "boy", "kicks"], color: "#FF9500" },
    interactive: { type: "sentence-build", fragments: ["t11_f11_1", "t11_f11_2", "t11_f11_3", "t11_f11_4"], instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "verbs_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-syllables", parts: ["play", "ing"], color: "#FF9500" },
    interactive: { type: "highlight-text", tokens: ["t12_w12_1", "t12_w12_2", "t12_w12_3", "t12_w12_4"], correctIndices: [2], instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "verbs_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "🕵️", color: "#FF9500" },
    interactive: { type: "physics-slingshot", question: "t13_q13", targets: [{ id: "1", text: "t13_t13_1", isCorrect: true }, { id: "2", text: "t13_t13_2", isCorrect: false }, { id: "3", text: "t13_t13_3", isCorrect: false }], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "verbs_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "read", color: "#FF9500" },
    interactive: { type: "gap-fill", sentence: "t14_sent14", choices: ["t14_c14_1", "t14_c14_2", "t14_c14_3", "t14_c14_4"], correctIndex: 0, instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "verbs_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏆", color: "#FF9500" },
    interactive: { type: "physics-slingshot", question: "t15_q15", targets: [{ id: "1", text: "t15_t15_1", isCorrect: true }, { id: "2", text: "t15_t15_2", isCorrect: false }, { id: "3", text: "t15_t15_3", isCorrect: false }], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "verbs_k1" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i6 — Compound Cape (🔗, #10B981)
// Topics: compound words, adjectives (colors, size, feeling), opposites
// ─────────────────────────────────────────────────────────────────────────────

export const COMPOUND_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Compound Cape",

    // T1 - Compound Word Intro
    t1_title: "Compound Words",
    t1_text: "A compound word is made when two smaller words join together to make a new word! 'sun' + 'flower' = 'sunflower'.",
    t1_inst: "Which word is a compound word?",
    t1_h1: "Look for a big word made of two small words.",
    t1_h2: "sunflower.",
    t1_q1: "Find the compound word:",
    t1_t1_1: "sunflower", t1_t1_2: "apple", t1_t1_3: "happy",

    // T2 - Build Compound Word
    t2_title: "Building Words",
    t2_text: "Let's put two words together! What do you get when you add 'rain' and 'bow'?",
    t2_inst: "Match the words to build a new one!",
    t2_h1: "rain + bow.",
    t2_h2: "rainbow.",
    t2_ml2_1: "rain", t2_mr2_1: "bow",
    t2_ml2_2: "bed", t2_mr2_2: "room",
    t2_ml2_3: "snow", t2_mr2_3: "man",

    // T3 - Break Compound Word
    t3_title: "Breaking Words",
    t3_text: "We can break them apart too! 'Pancake' breaks into 'pan' and 'cake'.",
    t3_inst: "Fill in the missing part of 'pancake'!",
    t3_h1: "pan + ___ = pancake.",
    t3_h2: "cake.",
    t3_sent3: "pan + ___ = pancake",
    t3_c3_1: "cake", t3_c3_2: "dog", t3_c3_3: "room", t3_c3_4: "bow",

    // T4 - Adjectives (Intro / Colors)
    t4_title: "Describing Words",
    t4_text: "Adjectives are words that describe nouns. Colors are adjectives! 'A red apple.'",
    t4_inst: "Find the describing word (adjective)!",
    t4_h1: "Look for the color word.",
    t4_h2: "red.",
    t4_q4: "Which word is a color adjective?",
    t4_t4_1: "red", t4_t4_2: "apple", t4_t4_3: "eat",

    // T5 - Adjectives (Size)
    t5_title: "Size Words",
    t5_text: "Adjectives can tell us how big or small something is. 'The big elephant.'",
    t5_inst: "Highlight the size word!",
    t5_h1: "Which word tells us the size?",
    t5_h2: "small.",
    t5_w5_1: "I", t5_w5_2: "see", t5_w5_3: "a", t5_w5_4: "small", t5_w5_5: "bug.",

    // T6 - Adjectives (Feeling)
    t6_title: "Feeling Words",
    t6_text: "Adjectives can tell us how we feel. 'The happy boy.'",
    t6_inst: "Sort the words: Feelings or Things?",
    t6_h1: "Happy is a feeling. Car is a thing.",
    t6_h2: "Feelings describe us.",
    t6_b6_1: "Feelings (Adjectives) 😊", t6_b6_2: "Things (Nouns) 📦",
    t6_i6_1: "happy", t6_i6_2: "sad", t6_i6_3: "book", t6_i6_4: "tree",

    // T7 - Finding Adjectives in a sentence
    t7_title: "Adjective Hunt",
    t7_text: "Adjectives usually come right before the noun they describe. 'The fast car.'",
    t7_inst: "Put the words in order!",
    t7_h1: "Start with 'The'. Then the adjective.",
    t7_h2: "The fast car.",
    t7_sw7_1: "The", t7_sw7_2: "fast", t7_sw7_3: "car.",

    // T8 - Adjective vs Noun
    t8_title: "Describing vs Naming",
    t8_text: "Remember: Nouns name things (dog). Adjectives describe them (brown).",
    t8_inst: "Shoot the describing word (adjective)!",
    t8_h1: "Which word describes the dog?",
    t8_h2: "brown.",
    t8_q8: "Find the adjective:",
    t8_t8_1: "brown", t8_t8_2: "dog", t8_t8_3: "run",

    // T9 - Opposites: Big vs Small
    t9_title: "Opposites (Big/Small)",
    t9_text: "Some adjectives are opposites. The opposite of 'big' is 'small'.",
    t9_inst: "Match the opposites!",
    t9_h1: "Match words that mean totally different things.",
    t9_h2: "big goes with small.",
    t9_ml9_1: "big", t9_mr9_1: "small",
    t9_ml9_2: "hot", t9_mr9_2: "cold",
    t9_ml9_3: "fast", t9_mr9_3: "slow",

    // T10 - Opposites: Hot vs Cold
    t10_title: "Opposites (Hot/Cold)",
    t10_text: "Fire is hot. Ice is cold. Hot and cold are opposites!",
    t10_inst: "Fill in the opposite word!",
    t10_h1: "The opposite of cold.",
    t10_h2: "hot.",
    t10_sent10: "Ice is cold, but fire is ___ .",
    t10_c10_1: "hot", t10_c10_2: "big", t10_c10_3: "fast", t10_c10_4: "sad",

    // T11 - Opposites: Fast vs Slow
    t11_title: "Opposites (Fast/Slow)",
    t11_text: "A cheetah is fast. A turtle is slow.",
    t11_inst: "Which word is the opposite of 'fast'?",
    t11_h1: "Think of a turtle.",
    t11_h2: "slow.",
    t11_q11: "The opposite of fast is:",
    t11_t11_1: "slow", t11_t11_2: "hot", t11_t11_3: "big",

    // T12 - Compound Word Matching
    t12_title: "Compound Builder",
    t12_text: "Let's build some more compound words! Tooth + brush = toothbrush.",
    t12_inst: "Match to make compound words!",
    t12_h1: "star + fish = starfish.",
    t12_h2: "tooth + brush.",
    t12_ml12_1: "star", t12_mr12_1: "fish",
    t12_ml12_2: "tooth", t12_mr12_2: "brush",
    t12_ml12_3: "pancake", t12_mr12_3: "cake",

    // T13 - Adjective Gap Fill
    t13_title: "Pick the Adjective",
    t13_text: "Choose the best describing word for the sentence.",
    t13_inst: "Fill in the blank with an adjective!",
    t13_h1: "Grass is usually this color.",
    t13_h2: "green.",
    t13_sent13: "The grass is very ___ .",
    t13_c13_1: "green", t13_c13_2: "run", t13_c13_3: "boy", t13_c13_4: "jump",

    // T14 - Adjectives in Compound Words
    t14_title: "Adjectives + Nouns",
    t14_text: "Sometimes a compound word is made of an adjective and a noun! Black + berry = blackberry.",
    t14_inst: "Put the word together!",
    t14_h1: "Start with black.",
    t14_h2: "black-board.",
    t14_sw14_1: "black", t14_sw14_2: "board",

    // T15 - Sentence Builder (Combo)
    t15_title: "Compound Cape Master",
    t15_text: "Let's build a sentence using an adjective and a compound word!",
    t15_inst: "Build the sentence!",
    t15_h1: "Start with 'The'.",
    t15_h2: "The yellow sunflower.",
    t15_f15_1: "The", t15_f15_2: "yellow", t15_f15_3: "sunflower", t15_f15_4: "grows."
  }
};

export const COMPOUND_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "compound-word", word1: "sun", word2: "flower", result: "sunflower", color: "#10B981" },
    interactive: { type: "physics-slingshot", question: "t1_q1", targets: [{ id: "1", text: "t1_t1_1", isCorrect: true }, { id: "2", text: "t1_t1_2", isCorrect: false }, { id: "3", text: "t1_t1_3", isCorrect: false }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "compound_words_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "compound-word", word1: "rain", word2: "bow", result: "rainbow", color: "#10B981" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_ml2_1", right: "t2_mr2_1" }, { left: "t2_ml2_2", right: "t2_mr2_2" }, { left: "t2_ml2_3", right: "t2_mr2_3" }], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "compound_words_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-syllables", parts: ["pan", "cake"], color: "#10B981" },
    interactive: { type: "gap-fill", sentence: "t3_sent3", choices: ["t3_c3_1", "t3_c3_2", "t3_c3_3", "t3_c3_4"], correctIndex: 0, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "compound_words_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "text-bubbles", items: [{ text: "red", color: "#FFFFFF", bg: "#EF4444" }, { text: "apple", color: "#FFFFFF", bg: "#10B981" }] },
    interactive: { type: "physics-slingshot", question: "t4_q4", targets: [{ id: "1", text: "t4_t4_1", isCorrect: true }, { id: "2", text: "t4_t4_2", isCorrect: false }, { id: "3", text: "t4_t4_3", isCorrect: false }], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "adjectives_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "sentence-display", words: ["a", "small", "bug"], color: "#10B981" },
    interactive: { type: "highlight-text", tokens: ["t5_w5_1", "t5_w5_2", "t5_w5_3", "t5_w5_4", "t5_w5_5"], correctIndices: [3], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "adjectives_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "two-groups", left: { items: ["happy"], bg: "#DCFCE7", border: "#10B981" }, right: { items: ["book"], bg: "#F1F5F9", border: "#64748B" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "f", label: "t6_b6_1" }, { id: "t", label: "t6_b6_2" }], items: [{ text: "t6_i6_1", bucketId: "f" }, { text: "t6_i6_2", bucketId: "f" }, { text: "t6_i6_3", bucketId: "t" }, { text: "t6_i6_4", bucketId: "t" }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "adjectives_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "fast car", color: "#10B981" },
    interactive: { type: "word-order", words: ["t7_sw7_1", "t7_sw7_2", "t7_sw7_3"], correctOrder: [0, 1, 2], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "adjectives_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{ emoji: "🟤", label: "brown" }, { emoji: "🐶", label: "dog" }] },
    interactive: { type: "physics-slingshot", question: "t8_q8", targets: [{ id: "1", text: "t8_t8_1", isCorrect: true }, { id: "2", text: "t8_t8_2", isCorrect: false }, { id: "3", text: "t8_t8_3", isCorrect: false }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "adjectives_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🐘", color: "#10B981" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t9_ml9_1", right: "t9_mr9_1" }, { left: "t9_ml9_2", right: "t9_mr9_2" }, { left: "t9_ml9_3", right: "t9_mr9_3" }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "adjectives_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "text-bubbles", items: [{ text: "hot", color: "#FFFFFF", bg: "#EF4444" }, { text: "cold", color: "#FFFFFF", bg: "#3B82F6" }] },
    interactive: { type: "gap-fill", sentence: "t10_sent10", choices: ["t10_c10_1", "t10_c10_2", "t10_c10_3", "t10_c10_4"], correctIndex: 0, instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "adjectives_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "slow", color: "#10B981" },
    interactive: { type: "physics-slingshot", question: "t11_q11", targets: [{ id: "1", text: "t11_t11_1", isCorrect: true }, { id: "2", text: "t11_t11_2", isCorrect: false }, { id: "3", text: "t11_t11_3", isCorrect: false }], instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "adjectives_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "compound-word", word1: "star", word2: "fish", result: "starfish", color: "#10B981" },
    interactive: { type: "match-pairs", pairs: [{ left: "t12_ml12_1", right: "t12_mr12_1" }, { left: "t12_ml12_2", right: "t12_mr12_2" }, { left: "t12_ml12_3", right: "t12_mr12_3" }], instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "compound_words_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "sentence-display", words: ["The", "grass", "is", "green"], color: "#10B981" },
    interactive: { type: "gap-fill", sentence: "t13_sent13", choices: ["t13_c13_1", "t13_c13_2", "t13_c13_3", "t13_c13_4"], correctIndex: 0, instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "adjectives_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-syllables", parts: ["black", "board"], color: "#10B981" },
    interactive: { type: "word-order", words: ["t14_sw14_1", "t14_sw14_2"], correctOrder: [0, 1], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "compound_words_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏆", color: "#10B981" },
    interactive: { type: "sentence-build", fragments: ["t15_f15_1", "t15_f15_2", "t15_f15_3", "t15_f15_4"], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "compound_words_k1" }
  }
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i7 — Sentence Shore (💬, #F59E0B)
// Topics: period (.), question mark (?), exclamation (!), statements vs questions
// ─────────────────────────────────────────────────────────────────────────────

export const SENTENCE_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Sentence Shore",

    // T1 - The Period
    t1_title: "The Period (.)",
    t1_text: "A period is a little dot at the end of a sentence. It tells us to stop!",
    t1_inst: "Shoot the period!",
    t1_h1: "It looks like a small dot.",
    t1_h2: ".",
    t1_q1: "Which one is a period?",
    t1_t1_1: ".", t1_t1_2: "?", t1_t1_3: "!",

    // T2 - The Question Mark
    t2_title: "The Question Mark (?)",
    t2_text: "We use a question mark when we ask something. 'How are you?'",
    t2_inst: "Find the question mark!",
    t2_h1: "It looks like a hook with a dot.",
    t2_h2: "?",
    t2_q2: "Which one is a question mark?",
    t2_t2_1: "?", t2_t2_2: ".", t2_t2_3: "!",

    // T3 - The Exclamation Mark
    t3_title: "The Exclamation Mark (!)",
    t3_text: "Use an exclamation mark when you are excited, loud, or surprised! 'Wow!'",
    t3_inst: "Choose the exclamation mark!",
    t3_h1: "It looks like a line with a dot under it.",
    t3_h2: "!",
    t3_q3: "Which one shows excitement?",
    t3_t3_1: "!", t3_t3_2: "?", t3_t3_3: ".",

    // T4 - Sorting Marks
    t4_title: "Sorting Marks",
    t4_text: "Sentences can tell, ask, or yell. Let's sort the marks!",
    t4_inst: "Sort the stopping marks!",
    t4_h1: "A period tells. A question mark asks.",
    t4_h2: ". goes with Tells. ? goes with Asks.",
    t4_b4_1: "Tells a thought (.) 💬", t4_b4_2: "Asks a question (?) ❓",
    t4_i4_1: ".", t4_i4_2: ".", t4_i4_3: "?", t4_i4_4: "?",

    // T5 - Period Practice
    t5_title: "Stopping a Sentence",
    t5_text: "A telling sentence (statement) always ends with a period.",
    t5_inst: "Fill in the missing period!",
    t5_h1: "It is just a normal sentence, so it needs a dot.",
    t5_h2: "I see a cat.",
    t5_sent5: "I see a cat ___",
    t5_c5_1: ".", t5_c5_2: "?", t5_c5_3: "!", t5_c5_4: ",",

    // T6 - Question Practice
    t6_title: "Asking a Question",
    t6_text: "If a sentence asks something, it needs a question mark.",
    t6_inst: "Choose the correct mark!",
    t6_h1: "Is it asking you something?",
    t6_h2: "Do you like apples?",
    t6_sent6: "Do you like apples ___",
    t6_c6_1: "?", t6_c6_2: ".", t6_c6_3: "!", t6_c6_4: "a",

    // T7 - Exclamation Practice
    t7_title: "Showing Feeling",
    t7_text: "Wow! That is amazing! Use an exclamation mark for big feelings.",
    t7_inst: "Choose the exclamation mark!",
    t7_h1: "It shows excitement.",
    t7_h2: "Happy birthday!",
    t7_sent7: "Happy birthday ___",
    t7_c7_1: "!", t7_c7_2: ".", t7_c7_3: "?", t7_c7_4: "s",

    // T8 - Match Mark to Sentence
    t8_title: "Match the Mark",
    t8_text: "Match the sentence to its perfect stopping mark.",
    t8_inst: "Match them up!",
    t8_h1: "Yelling gets ! Asking gets ? Telling gets .",
    t8_h2: "Stop! gets !",
    t8_ml8_1: "I like dogs", t8_mr8_1: ".",
    t8_ml8_2: "Where is it", t8_mr8_2: "?",
    t8_ml8_3: "Watch out", t8_mr8_3: "!",

    // T9 - Statement vs Question 1
    t9_title: "Statement or Question?",
    t9_text: "A statement tells you something. A question asks you something.",
    t9_inst: "Is this a statement or a question?",
    t9_h1: "Look at the punctuation mark at the end.",
    t9_h2: "It has a question mark, so it is a question.",
    t9_q9: "'Can we play?' is a...",
    t9_t9_1: "Question", t9_t9_2: "Statement", t9_t9_3: "Word",

    // T10 - Statement vs Question 2
    t10_title: "Telling or Asking?",
    t10_text: "Let's sort telling sentences and asking sentences.",
    t10_inst: "Sort the sentences!",
    t10_h1: "Sentences with ? are questions.",
    t10_h2: "I run (Statement). Can you run? (Question).",
    t10_b10_1: "Telling (.) 💬", t10_b10_2: "Asking (?) ❓",
    t10_i10_1: "I have a hat.", t10_i10_2: "The bug is red.", t10_i10_3: "Are you sad?", t10_i10_4: "Is it hot?",

    // T11 - Find the missing mark
    t11_title: "Missing Mark",
    t11_text: "Oh no! The sentence forgot how to stop.",
    t11_inst: "Fill in the blank!",
    t11_h1: "It is a normal statement.",
    t11_h2: "It needs a period.",
    t11_sent11: "The frog jumps ___",
    t11_c11_1: ".", t11_c11_2: "?", t11_c11_3: "!", t11_c11_4: "d",

    // T12 - Punctuation Hunt
    t12_title: "Punctuation Hunt",
    t12_text: "Look at the end of the sentence to find the mark.",
    t12_inst: "Highlight the end mark!",
    t12_h1: "It is the very last thing in the sentence.",
    t12_h2: "The question mark at the end.",
    t12_w12_1: "Can", t12_w12_2: "I", t12_w12_3: "go", t12_w12_4: "now", t12_w12_5: "?",

    // T13 - Sentence Builder (.)
    t13_title: "Build a Telling Sentence",
    t13_text: "Put the words in order. Remember, the period comes at the very end!",
    t13_inst: "Build the sentence!",
    t13_h1: "Start with 'The'. End with the period.",
    t13_h2: "The sun is hot.",
    t13_f13_1: "The", t13_f13_2: "sun", t13_f13_3: "is", t13_f13_4: "hot.",

    // T14 - Sentence Builder (?)
    t14_title: "Build an Asking Sentence",
    t14_text: "Put the words in order. The question mark comes last!",
    t14_inst: "Build the question!",
    t14_h1: "Start with 'Do'. End with the question mark.",
    t14_h2: "Do you like cats?",
    t14_f14_1: "Do", t14_f14_2: "you", t14_f14_3: "like", t14_f14_4: "cats?",

    // T15 - Punctuation Master
    t15_title: "Punctuation Master",
    t15_text: "You know all the stopping marks now! You are a master.",
    t15_inst: "Shoot the correct mark for a loud yell!",
    t15_h1: "Loud feelings need an exclamation mark.",
    t15_h2: "!",
    t15_q15: "Which mark shows a loud yell?",
    t15_t15_1: "!", t15_t15_2: "?", t15_t15_3: ".",
  }
};

export const SENTENCE_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: ".", color: "#F59E0B" },
    interactive: { type: "physics-slingshot", question: "t1_q1", targets: [{ id: "1", text: "t1_t1_1", isCorrect: true }, { id: "2", text: "t1_t1_2", isCorrect: false }, { id: "3", text: "t1_t1_3", isCorrect: false }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "end_punctuation_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "?", color: "#F59E0B" },
    interactive: { type: "physics-slingshot", question: "t2_q2", targets: [{ id: "1", text: "t2_t2_1", isCorrect: true }, { id: "2", text: "t2_t2_2", isCorrect: false }, { id: "3", text: "t2_t2_3", isCorrect: false }], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "end_punctuation_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "!", color: "#F59E0B" },
    interactive: { type: "physics-slingshot", question: "t3_q3", targets: [{ id: "1", text: "t3_t3_1", isCorrect: true }, { id: "2", text: "t3_t3_2", isCorrect: false }, { id: "3", text: "t3_t3_3", isCorrect: false }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "end_punctuation_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["."], bg: "#FEF3C7", border: "#F59E0B" }, right: { items: ["?"], bg: "#F1F5F9", border: "#64748B" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "p", label: "t4_b4_1" }, { id: "q", label: "t4_b4_2" }], items: [{ text: "t4_i4_1", bucketId: "p" }, { text: "t4_i4_2", bucketId: "p" }, { text: "t4_i4_3", bucketId: "q" }, { text: "t4_i4_4", bucketId: "q" }], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "end_punctuation_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "sentence-display", words: ["I", "see", "a", "cat"], color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t5_sent5", choices: ["t5_c5_1", "t5_c5_2", "t5_c5_3", "t5_c5_4"], correctIndex: 0, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "end_punctuation_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "sentence-display", words: ["Do", "you", "like", "apples"], color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t6_sent6", choices: ["t6_c6_1", "t6_c6_2", "t6_c6_3", "t6_c6_4"], correctIndex: 0, instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "end_punctuation_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "text-bubbles", items: [{ text: "Happy", color: "#FFFFFF", bg: "#F59E0B" }, { text: "birthday", color: "#FFFFFF", bg: "#D97706" }] },
    interactive: { type: "gap-fill", sentence: "t7_sent7", choices: ["t7_c7_1", "t7_c7_2", "t7_c7_3", "t7_c7_4"], correctIndex: 0, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "end_punctuation_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "icon-grid", items: [{ emoji: "💬", label: "Telling" }, { emoji: "❓", label: "Asking" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t8_ml8_1", right: "t8_mr8_1" }, { left: "t8_ml8_2", right: "t8_mr8_2" }, { left: "t8_ml8_3", right: "t8_mr8_3" }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "end_punctuation_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "sentence-display", words: ["Can", "we", "play", "?"], color: "#F59E0B" },
    interactive: { type: "physics-slingshot", question: "t9_q9", targets: [{ id: "1", text: "t9_t9_1", isCorrect: true }, { id: "2", text: "t9_t9_2", isCorrect: false }, { id: "3", text: "t9_t9_3", isCorrect: false }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "declarative_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "two-groups", left: { items: ["Telling"], bg: "#FEF3C7", border: "#F59E0B" }, right: { items: ["Asking"], bg: "#E0F2FE", border: "#0EA5E9" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "s", label: "t10_b10_1" }, { id: "q", label: "t10_b10_2" }], items: [{ text: "t10_i10_1", bucketId: "s" }, { text: "t10_i10_2", bucketId: "s" }, { text: "t10_i10_3", bucketId: "q" }, { text: "t10_i10_4", bucketId: "q" }], instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "declarative_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🐸", color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t11_sent11", choices: ["t11_c11_1", "t11_c11_2", "t11_c11_3", "t11_c11_4"], correctIndex: 0, instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "end_punctuation_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "sentence-display", words: ["Can", "I", "go", "now", "?"], color: "#F59E0B" },
    interactive: { type: "highlight-text", tokens: ["t12_w12_1", "t12_w12_2", "t12_w12_3", "t12_w12_4", "t12_w12_5"], correctIndices: [4], instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "end_punctuation_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "🧱", color: "#F59E0B" },
    interactive: { type: "sentence-build", fragments: ["t13_f13_1", "t13_f13_2", "t13_f13_3", "t13_f13_4"], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "declarative_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🐱", color: "#F59E0B" },
    interactive: { type: "sentence-build", fragments: ["t14_f14_1", "t14_f14_2", "t14_f14_3", "t14_f14_4"], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "declarative_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏆", color: "#F59E0B" },
    interactive: { type: "physics-slingshot", question: "t15_q15", targets: [{ id: "1", text: "t15_t15_1", isCorrect: true }, { id: "2", text: "t15_t15_2", isCorrect: false }, { id: "3", text: "t15_t15_3", isCorrect: false }], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "end_punctuation_k1" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i8 — Grammar Gulf (📖, #EF4444)
// Topics: capitalization, sentence vs fragment, word order
// ─────────────────────────────────────────────────────────────────────────────

export const GRAMMAR_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Grammar Gulf",

    // T1 - Starting Capitals
    t1_title: "Starting with a Capital",
    t1_text: "Every sentence must start with a big, capital letter. 'The dog barks.'",
    t1_inst: "Find the capital letter!",
    t1_h1: "Look at the very first letter of the sentence.",
    t1_h2: "Big T.",
    t1_q1: "Which one is a capital letter?",
    t1_t1_1: "T", t1_t1_2: "t", t1_t1_3: "s",

    // T2 - Fix the Start
    t2_title: "Fix the Start",
    t2_text: "Oh no, this sentence starts with a small letter! Let's fix it.",
    t2_inst: "Choose the big letter!",
    t2_h1: "We need an uppercase letter to start.",
    t2_h2: "Big H.",
    t2_sent2: "___e is happy.",
    t2_c2_1: "H", t2_c2_2: "h", t2_c2_3: "A", t2_c2_4: "S",

    // T3 - Capital 'I'
    t3_title: "The Big 'I'",
    t3_text: "The word 'I' is always a big capital letter, no matter where it is!",
    t3_inst: "Find the correct 'I'!",
    t3_h1: "It must be uppercase.",
    t3_h2: "Big I.",
    t3_q3: "Which 'I' is always correct?",
    t3_t3_1: "I", t3_t3_2: "i", t3_t3_3: "l",

    // T4 - Names get Capitals
    t4_title: "Capital Names",
    t4_text: "Names of people and pets always start with a capital letter. 'Max', 'Bella'.",
    t4_inst: "Which name is written correctly?",
    t4_h1: "The first letter must be big.",
    t4_h2: "Max, not max.",
    t4_q4: "Find the correct name:",
    t4_t4_1: "Max", t4_t4_2: "max", t4_t4_3: "mAx",

    // T5 - Capital Sort
    t5_title: "Capital Sort",
    t5_text: "Let's sort! Names and the word 'I' need capitals. Other words don't.",
    t5_inst: "Sort the words!",
    t5_h1: "Sam is a name, so it gets a capital.",
    t5_h2: "'dog' is just a thing, small letter.",
    t5_b5_1: "Needs Capital ⬆️", t5_b5_2: "Small Letter ⬇️",
    t5_i5_1: "Sam", t5_i5_2: "I", t5_i5_3: "dog", t5_i5_4: "run",

    // T6 - Sentence or Not? 1
    t6_title: "Sentence or Not?",
    t6_text: "A sentence is a complete thought. 'The dog' is not complete. 'The dog runs' is complete!",
    t6_inst: "Which one is a full sentence?",
    t6_h1: "It needs a 'who' and a 'what they do'.",
    t6_h2: "The cat sleeps.",
    t6_q6: "Find the sentence:",
    t6_t6_1: "The cat sleeps.", t6_t6_2: "The cat", t6_t6_3: "Sleeps",

    // T7 - Sentence or Not? 2
    t7_title: "Missing Parts",
    t7_text: "If a sentence is missing the action (verb) or the person (noun), it is a fragment (broken).",
    t7_inst: "Sort into sentences and broken parts!",
    t7_h1: "Full sentences make sense on their own.",
    t7_h2: "I run (sentence). The big red apple (broken).",
    t7_b7_1: "Sentence ✅", t7_b7_2: "Broken (Fragment) ❌",
    t7_i7_1: "I like dogs.", t7_i7_2: "She jumps.", t7_i7_3: "The red ball.", t7_i7_4: "Is running.",

    // T8 - Word Order 1
    t8_title: "Word Order",
    t8_text: "Words need to be in the right order to make sense.",
    t8_inst: "Put the words in order!",
    t8_h1: "Start with 'The'.",
    t8_h2: "The bug is little.",
    t8_sw8_1: "The", t8_sw8_2: "bug", t8_sw8_3: "is", t8_sw8_4: "little.",

    // T9 - Word Order 2
    t9_title: "Making Sense",
    t9_text: "Does 'Cat the runs' make sense? No! It should be 'The cat runs.'",
    t9_inst: "Build the sentence!",
    t9_h1: "Start with 'I'.",
    t9_h2: "I see a bird.",
    t9_f9_1: "I", t9_f9_2: "see", t9_f9_3: "a", t9_f9_4: "bird.",

    // T10 - Highlighting Capitals
    t10_title: "Capital Hunt",
    t10_text: "Can you find the capital letter in the sentence?",
    t10_inst: "Highlight the capital letter!",
    t10_h1: "Look at the very beginning.",
    t10_h2: "The big 'M'.",
    t10_w10_1: "My", t10_w10_2: "dog", t10_w10_3: "is", t10_w10_4: "fast.",

    // T11 - Fix the Sentence
    t11_title: "Fix It Up",
    t11_text: "A perfect sentence starts with a capital and ends with a stopping mark.",
    t11_inst: "Which sentence is perfect?",
    t11_h1: "Look for a big letter at the start and a dot at the end.",
    t11_h2: "We like to play.",
    t11_q11: "Find the perfect sentence:",
    t11_t11_1: "We like to play.", t11_t11_2: "we like to play", t11_t11_3: "We like to play",

    // T12 - Scrambled Sentence
    t12_title: "Scrambled Words",
    t12_text: "Unscramble the words to make a complete thought.",
    t12_inst: "Put the words in order!",
    t12_h1: "Start with the capital letter 'She'.",
    t12_h2: "She has a book.",
    t12_sw12_1: "She", t12_sw12_2: "has", t12_sw12_3: "a", t12_sw12_4: "book.",

    // T13 - Naming part vs Action part
    t13_title: "Who and What?",
    t13_text: "Every sentence has a 'who' part (noun) and a 'what they do' part (verb).",
    t13_inst: "Match the Who to the What!",
    t13_h1: "The bird -> flies. The fish -> swims.",
    t13_h2: "Match the animal to its action.",
    t13_ml13_1: "The bird", t13_mr13_1: "flies.",
    t13_ml13_2: "The fish", t13_mr13_2: "swims.",
    t13_ml13_3: "The boy", t13_mr13_3: "jumps.",

    // T14 - Word Order Mix
    t14_title: "Mix It Up",
    t14_text: "Let's build a longer sentence!",
    t14_inst: "Build the sentence!",
    t14_h1: "Start with the capital 'The'. End with 'fast.'",
    t14_h2: "The red car is fast.",
    t14_f14_1: "The", t14_f14_2: "red", t14_f14_3: "car", t14_f14_4: "is", t14_f14_5: "fast.",

    // T15 - Grammar Master
    t15_title: "Grammar Master",
    t15_text: "You are a sentence builder! Remember your capitals and periods.",
    t15_inst: "Shoot the perfect sentence!",
    t15_h1: "Capital 'I', period at the end.",
    t15_h2: "I see a cat.",
    t15_q15: "Which sentence is correct?",
    t15_t15_1: "I see a cat.", t15_t15_2: "i see a cat.", t15_t15_3: "I see a cat",
  }
};

export const GRAMMAR_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "T", color: "#EF4444" },
    interactive: { type: "physics-slingshot", question: "t1_q1", targets: [{ id: "1", text: "t1_t1_1", isCorrect: true }, { id: "2", text: "t1_t1_2", isCorrect: false }, { id: "3", text: "t1_t1_3", isCorrect: false }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "capitalization_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "H", color: "#FFFFFF", bg: "#EF4444" }, { text: "h", color: "#FFFFFF", bg: "#B91C1C" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "capitalization_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🙋", color: "#EF4444" },
    interactive: { type: "physics-slingshot", question: "t3_q3", targets: [{ id: "1", text: "t3_t3_1", isCorrect: true }, { id: "2", text: "t3_t3_2", isCorrect: false }, { id: "3", text: "t3_t3_3", isCorrect: false }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "capitalization_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "Max", color: "#EF4444" },
    interactive: { type: "physics-slingshot", question: "t4_q4", targets: [{ id: "1", text: "t4_t4_1", isCorrect: true }, { id: "2", text: "t4_t4_2", isCorrect: false }, { id: "3", text: "t4_t4_3", isCorrect: false }], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "capitalization_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["Sam", "I"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["dog", "run"], bg: "#F1F5F9", border: "#64748B" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "c", label: "t5_b5_1" }, { id: "s", label: "t5_b5_2" }], items: [{ text: "t5_i5_1", bucketId: "c" }, { text: "t5_i5_2", bucketId: "c" }, { text: "t5_i5_3", bucketId: "s" }, { text: "t5_i5_4", bucketId: "s" }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "capitalization_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "sentence-display", words: ["The", "cat", "sleeps."], color: "#EF4444" },
    interactive: { type: "physics-slingshot", question: "t6_q6", targets: [{ id: "1", text: "t6_t6_1", isCorrect: true }, { id: "2", text: "t6_t6_2", isCorrect: false }, { id: "3", text: "t6_t6_3", isCorrect: false }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "sentence_vs_not_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "icon-grid", items: [{ emoji: "✅", label: "Sentence" }, { emoji: "❌", label: "Broken" }] },
    interactive: { type: "physics-bucket", buckets: [{ id: "s", label: "t7_b7_1" }, { id: "b", label: "t7_b7_2" }], items: [{ text: "t7_i7_1", bucketId: "s" }, { text: "t7_i7_2", bucketId: "s" }, { text: "t7_i7_3", bucketId: "b" }, { text: "t7_i7_4", bucketId: "b" }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "sentence_vs_not_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🧱", color: "#EF4444" },
    interactive: { type: "word-order", words: ["t8_sw8_1", "t8_sw8_2", "t8_sw8_3", "t8_sw8_4"], correctOrder: [0, 1, 2, 3], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "sentence_vs_not_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "sentence-display", words: ["I", "see", "a", "bird"], color: "#EF4444" },
    interactive: { type: "sentence-build", fragments: ["t9_f9_1", "t9_f9_2", "t9_f9_3", "t9_f9_4"], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "sentence_vs_not_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "My", color: "#EF4444" },
    interactive: { type: "highlight-text", tokens: ["t10_w10_1", "t10_w10_2", "t10_w10_3", "t10_w10_4"], correctIndices: [0], instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "capitalization_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "🛠️", color: "#EF4444" },
    interactive: { type: "physics-slingshot", question: "t11_q11", targets: [{ id: "1", text: "t11_t11_1", isCorrect: true }, { id: "2", text: "t11_t11_2", isCorrect: false }, { id: "3", text: "t11_t11_3", isCorrect: false }], instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "capitalization_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🧩", color: "#EF4444" },
    interactive: { type: "word-order", words: ["t12_sw12_1", "t12_sw12_2", "t12_sw12_3", "t12_sw12_4"], correctOrder: [0, 1, 2, 3], instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "sentence_vs_not_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐦", label: "bird" }, { emoji: "👦", label: "boy" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t13_ml13_1", right: "t13_mr13_1" }, { left: "t13_ml13_2", right: "t13_mr13_2" }, { left: "t13_ml13_3", right: "t13_mr13_3" }], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "sentence_vs_not_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "sentence-display", words: ["The", "red", "car", "is", "fast."], color: "#EF4444" },
    interactive: { type: "sentence-build", fragments: ["t14_f14_1", "t14_f14_2", "t14_f14_3", "t14_f14_4", "t14_f14_5"], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "sentence_vs_not_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏆", color: "#EF4444" },
    interactive: { type: "physics-slingshot", question: "t15_q15", targets: [{ id: "1", text: "t15_t15_1", isCorrect: true }, { id: "2", text: "t15_t15_2", isCorrect: false }, { id: "3", text: "t15_t15_3", isCorrect: false }], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "sentence_vs_not_k1" }
  }
];
// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i9 — Story Summit (🌟, #8B5CF6)
// Topics: character (who), setting (where/when), plot (what),
//         beginning/middle/end, retelling, predictions
// ─────────────────────────────────────────────────────────────────────────────

export const STORY_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Story Summit",

    // T1 - Characters (Who)
    t1_title: "Who is in the story?",
    t1_text: "Characters are the people, animals, or creatures in a story. Like a princess or a talking dog!",
    t1_inst: "Shoot the character!",
    t1_h1: "Who can talk or act in a story?",
    t1_h2: "A king is a person.",
    t1_q1: "Which one is a character?",
    t1_t1_1: "A king", t1_t1_2: "A chair", t1_t1_3: "A red apple",

    // T2 - Setting (Where)
    t2_title: "Where does it happen?",
    t2_text: "The setting is WHERE the story takes place. It could be a castle, a forest, or a school.",
    t2_inst: "Find the setting!",
    t2_h1: "Where can you go?",
    t2_h2: "A dark forest.",
    t2_q2: "Which one is a setting?",
    t2_t2_1: "A dark forest", t2_t2_2: "A happy boy", t2_t2_3: "A blue hat",

    // T3 - Setting (When)
    t3_title: "When does it happen?",
    t3_text: "The setting is also WHEN the story happens. In the morning, at night, or long ago.",
    t3_inst: "Which words tell us 'when'?",
    t3_h1: "Look for time words.",
    t3_h2: "At night.",
    t3_q3: "Which one is a time setting?",
    t3_t3_1: "At night", t3_t3_2: "In the park", t3_t3_3: "The fast car",

    // T4 - Character vs Setting Sort
    t4_title: "Who or Where?",
    t4_text: "Let's sort! Is it a character (who) or a setting (where)?",
    t4_inst: "Sort the words into the right bucket!",
    t4_h1: "A bear is an animal (who). A cave is a place (where).",
    t4_h2: "Put 'bear' in Character.",
    t4_b4_1: "Character (Who) 🐻", t4_b4_2: "Setting (Where) 🏕️",
    t4_i4_1: "A bear", t4_i4_2: "A queen", t4_i4_3: "A cave", t4_i4_4: "A castle",

    // T5 - The Plot (What happens)
    t5_title: "What happens?",
    t5_text: "The plot is WHAT happens in the story. It is the action or the problem.",
    t5_inst: "Match the story part to its name!",
    t5_h1: "Who = Character. Where = Setting. What = Plot.",
    t5_h2: "Plot means the action.",
    t5_ml5_1: "Who?", t5_mr5_1: "Character",
    t5_ml5_2: "Where?", t5_mr5_2: "Setting",
    t5_ml5_3: "What happens?", t5_mr5_3: "Plot",

    // T6 - Beginning
    t6_title: "The Beginning",
    t6_text: "The beginning is how the story starts. We meet the characters and see the setting.",
    t6_inst: "Which words often start a story?",
    t6_h1: "Think of fairy tales.",
    t6_h2: "Once upon a time...",
    t6_q6: "How do fairy tales often start?",
    t6_t6_1: "Once upon a time...", t6_t6_2: "The End.", t6_t6_3: "Suddenly, a monster came!",

    // T7 - Middle (The Problem)
    t7_title: "The Middle",
    t7_text: "In the middle of the story, there is usually a problem or an exciting event! 'Oh no, the dog ran away!'",
    t7_inst: "Highlight the problem!",
    t7_h1: "What went wrong?",
    t7_h2: "The dog ran away.",
    t7_w7_1: "We", t7_w7_2: "played.", t7_w7_3: "Then,", t7_w7_4: "the", t7_w7_5: "dog", t7_w7_6: "ran", t7_w7_7: "away.",

    // T8 - End (The Fix)
    t8_title: "The End",
    t8_text: "At the end, the problem is fixed! 'We found the dog and went home.'",
    t8_inst: "Which sentence is a good ending?",
    t8_h1: "It finishes the story.",
    t8_h2: "They lived happily.",
    t8_q8: "Which one is an ending?",
    t8_t8_1: "They lived happily.", t8_t8_2: "Once upon a time...", t8_t8_3: "Then, he lost his hat.",

    // T9 - Sequence: First, Next, Last
    t9_title: "Putting it in Order",
    t9_text: "Stories go in order: First, Next, and Last.",
    t9_inst: "Put the story words in order!",
    t9_h1: "Start with First.",
    t9_h2: "First -> Next -> Last.",
    t9_sw9_1: "First", t9_sw9_2: "Next", t9_sw9_3: "Last",

    // T10 - Story Building
    t10_title: "Build a Story",
    t10_text: "Let's build a tiny story about a cat.",
    t10_inst: "Put the sentences in order!",
    t10_h1: "First see the cat. Then it sleeps. Finally it wakes up.",
    t10_h2: "1. I see a cat. 2. It sleeps. 3. It wakes up.",
    t10_sw10_1: "I see a cat.", t10_sw10_2: "It goes to sleep.", t10_sw10_3: "Then it wakes up.",

    // T11 - Retelling
    t11_title: "Telling it Again",
    t11_text: "When you retell a story, you tell the most important parts in your own words.",
    t11_inst: "Shoot the word that means 'telling it again'!",
    t11_h1: "It starts with 're-'.",
    t11_h2: "retell.",
    t11_q11: "What do we call telling a story again?",
    t11_t11_1: "Retell", t11_t11_2: "Setting", t11_t11_3: "Character",

    // T12 - Predictions
    t12_title: "Guess What Happens!",
    t12_text: "Making a prediction means guessing what will happen next! 'The boy drops his ice cream. He will probably cry.'",
    t12_inst: "Guess what happens next!",
    t12_h1: "If it rains, what do you need?",
    t12_h2: "An umbrella.",
    t12_sent12: "It starts to rain. She will open her ___ .",
    t12_c12_1: "umbrella", t12_c12_2: "book", t12_c12_3: "shoe", t12_c12_4: "sun",

    // T13 - Title and Author
    t13_title: "Who wrote it?",
    t13_text: "The TITLE is the name of the book. The AUTHOR is the person who wrote it.",
    t13_inst: "Match the word to its meaning!",
    t13_h1: "Author writes the book.",
    t13_h2: "Title is the name.",
    t13_ml13_1: "Title", t13_mr13_1: "Name of the book",
    t13_ml13_2: "Author", t13_mr13_2: "Person who wrote it",

    // T14 - Story Elements Match
    t14_title: "Story Elements Match",
    t14_text: "Let's see if you remember all the story parts!",
    t14_inst: "Match the words!",
    t14_h1: "Setting = where. Character = who.",
    t14_h2: "Match them up.",
    t14_ml14_1: "Setting", t14_mr14_1: "Where it happens",
    t14_ml14_2: "Character", t14_mr14_2: "Who is in it",
    t14_ml14_3: "Plot", t14_mr14_3: "What happens",

    // T15 - Story Master
    t15_title: "Story Master",
    t15_text: "You are a Story Master! You know characters, settings, and plots.",
    t15_inst: "Shoot the correct answer for the 'setting'!",
    t15_h1: "Setting means where.",
    t15_h2: "A big castle.",
    t15_q15: "Which of these is a setting?",
    t15_t15_1: "A big castle", t15_t15_2: "A smart dog", t15_t15_3: "They ate an apple",
  }
};

export const STORY_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "👑", color: "#8B5CF6" },
    interactive: { type: "physics-slingshot", question: "t1_q1", targets: [{ id: "1", text: "t1_t1_1", isCorrect: true }, { id: "2", text: "t1_t1_2", isCorrect: false }, { id: "3", text: "t1_t1_3", isCorrect: false }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "story_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "simple-icon", icon: "🌲", color: "#8B5CF6" },
    interactive: { type: "physics-slingshot", question: "t2_q2", targets: [{ id: "1", text: "t2_t2_1", isCorrect: true }, { id: "2", text: "t2_t2_2", isCorrect: false }, { id: "3", text: "t2_t2_3", isCorrect: false }], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "story_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "When?", color: "#8B5CF6" },
    interactive: { type: "physics-slingshot", question: "t3_q3", targets: [{ id: "1", text: "t3_t3_1", isCorrect: true }, { id: "2", text: "t3_t3_2", isCorrect: false }, { id: "3", text: "t3_t3_3", isCorrect: false }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "story_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["bear"], bg: "#EDE9FE", border: "#8B5CF6" }, right: { items: ["cave"], bg: "#F3E8FF", border: "#A855F7" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "c", label: "t4_b4_1" }, { id: "s", label: "t4_b4_2" }], items: [{ text: "t4_i4_1", bucketId: "c" }, { text: "t4_i4_2", bucketId: "c" }, { text: "t4_i4_3", bucketId: "s" }, { text: "t4_i4_4", bucketId: "s" }], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "story_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "icon-grid", items: [{ emoji: "📖", label: "Plot" }, { emoji: "👤", label: "Who" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t5_ml5_1", right: "t5_mr5_1" }, { left: "t5_ml5_2", right: "t5_mr5_2" }, { left: "t5_ml5_3", right: "t5_mr5_3" }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "story_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "Beginning", color: "#8B5CF6" },
    interactive: { type: "physics-slingshot", question: "t6_q6", targets: [{ id: "1", text: "t6_t6_1", isCorrect: true }, { id: "2", text: "t6_t6_2", isCorrect: false }, { id: "3", text: "t6_t6_3", isCorrect: false }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "story_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "sentence-display", words: ["The", "dog", "ran", "away."], color: "#8B5CF6" },
    interactive: { type: "highlight-text", tokens: ["t7_w7_1", "t7_w7_2", "t7_w7_3", "t7_w7_4", "t7_w7_5", "t7_w7_6", "t7_w7_7"], correctIndices: [4, 5, 6], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "story_k1" }
  },
  {
    difficulty: "easy", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "The End", color: "#FFFFFF", bg: "#8B5CF6" }] },
    interactive: { type: "physics-slingshot", question: "t8_q8", targets: [{ id: "1", text: "t8_t8_1", isCorrect: true }, { id: "2", text: "t8_t8_2", isCorrect: false }, { id: "3", text: "t8_t8_3", isCorrect: false }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "story_k1" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "🧱", color: "#8B5CF6" },
    interactive: { type: "word-order", words: ["t9_sw9_1", "t9_sw9_2", "t9_sw9_3"], correctOrder: [0, 1, 2], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "story_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "sentence-display", words: ["1.", "2.", "3."], color: "#8B5CF6" },
    interactive: { type: "word-order", words: ["t10_sw10_1", "t10_sw10_2", "t10_sw10_3"], correctOrder: [0, 1, 2], instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "story_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "Retell", color: "#8B5CF6" },
    interactive: { type: "physics-slingshot", question: "t11_q11", targets: [{ id: "1", text: "t11_t11_1", isCorrect: true }, { id: "2", text: "t11_t11_2", isCorrect: false }, { id: "3", text: "t11_t11_3", isCorrect: false }], instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "story_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "☂️", color: "#8B5CF6" },
    interactive: { type: "gap-fill", sentence: "t12_sent12", choices: ["t12_c12_1", "t12_c12_2", "t12_c12_3", "t12_c12_4"], correctIndex: 0, instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "story_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "✍️", color: "#8B5CF6" },
    interactive: { type: "match-pairs", pairs: [{ left: "t13_ml13_1", right: "t13_mr13_1" }, { left: "t13_ml13_2", right: "t13_mr13_2" }], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "story_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🧲", color: "#8B5CF6" },
    interactive: { type: "physics-magnet", pairs: [{ left: "t14_ml14_1", right: "t14_mr14_1" }, { left: "t14_ml14_2", right: "t14_mr14_2" }, { left: "t14_ml14_3", right: "t14_mr14_3" }], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "story_k1" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏆", color: "#8B5CF6" },
    interactive: { type: "physics-slingshot", question: "t15_q15", targets: [{ id: "1", text: "t15_t15_1", isCorrect: true }, { id: "2", text: "t15_t15_2", isCorrect: false }, { id: "3", text: "t15_t15_3", isCorrect: false }], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "story_k1" }
  }
];
