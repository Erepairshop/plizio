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


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i1 — Phonics Island (🔤, #FF2D78)
// Topics: short vowels (a/e/i/o/u), long vowels (magic-e, ai/ay, ee/ea, oa/ow),
//         digraphs (sh, ch, th, wh), final blends
// ─────────────────────────────────────────────────────────────────────────────

export const PHONICS_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Phonics Island",
    // TODO: t1–t15 labels
  },
};

export const PHONICS_POOL: PoolTopicDef[] = [
  // TODO: 15 topics — see header for format
  // t1-t5:  short vowels a, e, i, o, u (easy)
  // t6-t10: long vowels: magic-e, ai/ay, ee/ea, oa/ow, ui/ue (easy/medium)
  // t11-t13: digraphs sh, ch, th/wh (medium)
  // t14: ending sounds (-ck, -ng, -nk) (hard)
  // t15: vowel teams review / mixed phonics (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i2 — Letter Land (🅰️, #00D4FF)
// Topics: uppercase/lowercase, vowels vs consonants, syllables, alphabet order
// ─────────────────────────────────────────────────────────────────────────────

export const LETTER_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Letter Land",
    // TODO: t1–t15 labels
  },
};

export const LETTER_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t4:  uppercase vs lowercase for letter groups (easy)
  // t5-t6:  names and sentences start with uppercase (easy)
  // t7-t9:  counting syllables 1/2/3 syllables (medium)
  // t10-t11: alphabet order A-M / N-Z (medium)
  // t12-t13: vowels (a,e,i,o,u) vs consonants (medium)
  // t14: confusing letters b/d and p/q (hard)
  // t15: alphabet patterns and letter counting (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i3 — Blend Bay (🌊, #00FF88)
// Topics: L-blends (bl/cl/fl/gl/pl/sl), R-blends (br/cr/dr/fr/gr/pr/tr),
//         S-blends (sp/st/sn/sk/sm/sw), rhyming words & families
// ─────────────────────────────────────────────────────────────────────────────

export const BLEND_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Blend Bay",
    // TODO: t1–t15 labels
  },
};

export const BLEND_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t3:  L-blends: bl/cl/fl, gl/pl/sl, identification (easy/medium)
  // t4-t6:  R-blends: br/cr/dr, fr/gr/pr/tr, identification (medium)
  // t7-t8:  S-blends: sp/st/sn, sk/sm/sw (medium)
  // t9-t11: Rhyming — -at family, -og family, -ing family (easy/medium)
  // t12-t13: Rhyming families (-ack/-ick/-ock) (medium)
  // t14: Blends vs digraphs (hard)
  // t15: Final blends (nd/st/lt/mp) (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i4 — Word World (📝, #B44DFF)
// Topics: sight words (the/a/is/in/it, he/she/we, can/do/go, you/have/my),
//         nouns (person/place/thing), articles a vs an
// ─────────────────────────────────────────────────────────────────────────────

export const WORD_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Word World",
    // TODO: t1–t15 labels
  },
};

export const WORD_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i5 — Action Cove (🏃, #FF9500)
// Topics: action verbs, naming verbs, present tense (I run / she runs),
//         linking verbs (am/is/are), verb vs noun distinction
// ─────────────────────────────────────────────────────────────────────────────

export const ACTION_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Action Cove",
    // TODO: t1–t15 labels
  },
};

export const ACTION_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i6 — Compound Cape (🔗, #10B981)
// Topics: compound words (sunshine/rainfall/bedroom), adjectives (colors,
//         size, feeling), opposites (big/small, hot/cold, fast/slow)
// ─────────────────────────────────────────────────────────────────────────────

export const COMPOUND_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Compound Cape",
    // TODO: t1–t15 labels
  },
};

export const COMPOUND_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i7 — Sentence Shore (💬, #F59E0B)
// Topics: period (.), question mark (?), exclamation (!),
//         identifying end punctuation, statements vs questions
// ─────────────────────────────────────────────────────────────────────────────

export const SENTENCE_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Sentence Shore",
    // TODO: t1–t15 labels
  },
};

export const SENTENCE_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i8 — Grammar Gulf (📖, #EF4444)
// Topics: capitalization (sentence start, names, "I"),
//         sentence vs fragment, word order in a sentence,
//         subject + verb agreement (I am / she is)
// ─────────────────────────────────────────────────────────────────────────────

export const GRAMMAR_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Grammar Gulf",
    // TODO: t1–t15 labels
  },
};

export const GRAMMAR_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i9 — Story Summit (🌟, #8B5CF6)
// Topics: character (who), setting (where/when), plot (what happens),
//         beginning/middle/end, retelling, making predictions
// ─────────────────────────────────────────────────────────────────────────────

export const STORY_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Story Summit",
    // TODO: t1–t15 labels
  },
};

export const STORY_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
];
