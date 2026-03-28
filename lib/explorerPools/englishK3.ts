import type { PoolTopicDef } from "./types";

// ─── AstroEnglish K3 Pool ──────────────────────────────────────────────────────
// Islands:
//   i1 = Plural Peak           📚  plural nouns (-s/-es/-ies), irregular plurals, abstract nouns
//   i2 = Tense Tower           ⏰  past/present/future tense, irregular verbs (ran/saw/went/came)
//   i3 = Adverb Archipelago    🌀  adverbs (how/when/where), conjunctions (because/so/but)
//   i4 = Subject Star          ⭐  subject vs predicate, simple & compound sentences
//   i5 = Quote Quasar          💬  direct quotations ("He said, '...'"), fragments & run-ons
//   i6 = Prefix Pulsar         🔡  prefixes (un-/re-/pre-/mis-), suffixes (-ful/-less/-tion/-ing/-er/-est)
//   i7 = Word Family Falls     🌊  word families (love/loving/loved), root words, compound words
//   i8 = Vocabulary Valley     🌿  literal vs nonliteral (it's raining cats and dogs), context clues
//   i9 = Big Test              🌟  mixed review — all K3 topics
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
//      ⚠️ color REQUIRED; letters: actual text (not keys!)
//
//   { type: "two-groups"; left: { items: string[]; bg: string; border: string };
//                          right: { items: string[]; bg: string; border: string }; bg?: string }
//      ⚠️ bg AND border REQUIRED in left/right — NO title field!
//
//   { type: "text-bubbles"; items: { text: string; emoji?: string; color: string; bg: string }[] }
//      ⚠️ color AND bg REQUIRED in each item
//
//   { type: "word-card"; word: string; translation: string }
//   { type: "rhyme-pair"; word1: string; word2: string; emoji1?: string; emoji2?: string; color: string }
//   { type: "word-syllables"; parts: string[]; color: string; showClap?: boolean }
//   { type: "word-display"; word: string; highlightChars?: string[]; color: string; subtitle?: string }
//   { type: "sentence-display"; words: string[]; highlightIndices?: number[]; color: string }
//   { type: "simple-icon"; icon: string; title?: string; bg?: string; color?: string }
//   { type: "icon-grid"; items: { emoji: string; label?: string }[]; bg?: string }
//   { type: "compound-word"; word1: string; word2: string; result: string; color: string }
//   { type: "letter-pairs"; pairs: [string, string][]; color: string; dimColor?: string }
//
// ── TopicInteractive Types ─────────────────────────────────────────────────────
//
//   { type: "word-order"; words: string[]; correctOrder: number[];
//     instruction: string; hint1: string; hint2: string }
//
//   { type: "gap-fill"; sentence: string; choices: string[]; correctIndex: number;
//     instruction: string; hint1: string; hint2: string }
//
//   { type: "match-pairs"; pairs: { left: string; right: string }[];
//     instruction: string; hint1: string; hint2: string }
//
//   { type: "drag-to-bucket"; buckets: { id: string; label: string }[];
//     items: { text: string; bucketId: string }[];
//     instruction: string; hint1: string; hint2: string }
//
//   { type: "highlight-text"; tokens: string[]; correctIndices: number[];
//     instruction: string; hint1: string; hint2: string }
//
//   { type: "sentence-build"; fragments: string[];
//     instruction: string; hint1: string; hint2: string }
//
// ── Quiz Modes ─────────────────────────────────────────────────────────────────
//
//   Manual:    { question: "t1_q", choices: ["t1_qa","t1_qb","t1_qc","t1_qd"], answer: "t1_qa" }
//   Generator: { generate: "plurals_k3" }
//
//   Available English K3 generators (from deutschGenerators.ts):
//     "nouns_k1", "verbs_k1", "articles_k1"   ← K1 generators still usable for review
//     "nouns_k2", "verbs_k2", "adj_adv_k2"    ← K2 generators still usable for review
//     "short_long_vowels_k1", "blends_k1", "digraphs_k1"
//     "end_punctuation_k1", "capitalization_k1"
//     "syllables_k1", "compound_words_k1", "adjectives_k1"
//     "sight_words_k1", "rhyming_k1"
//
// ── Label Key Convention ───────────────────────────────────────────────────────
//   t{N}_title    — topic title (shown on info screen)
//   t{N}_text     — teaching paragraph (2–4 sentences, appropriate for 8–9 year olds)
//   t{N}_inst     — interactive instruction (short imperative)
//   t{N}_h1       — hint 1 (gentle nudge)
//   t{N}_h2       — hint 2 (stronger hint with example)
//   t{N}_b1/b2/b3 — optional bullet point facts (used in bulletKeys)
//   t{N}_q        — quiz question
//   t{N}_qa       — correct answer choice
//   t{N}_qb/qc/qd — wrong answer choices
//   + any extra keys the interactive needs
//
// ── Export Names ───────────────────────────────────────────────────────────────
//   i1: PLURAL_LABELS,    PLURAL_POOL
//   i2: TENSE_LABELS,     TENSE_POOL
//   i3: ADVERB_LABELS,    ADVERB_POOL
//   i4: SUBJECT_LABELS,   SUBJECT_POOL
//   i5: QUOTE_LABELS,     QUOTE_POOL
//   i6: PREFIX3_LABELS,   PREFIX3_POOL
//   i7: WORDFAM_LABELS,   WORDFAM_POOL
//   i8: VOCAB3_LABELS,    VOCAB3_POOL
//   i9: BIGTEST3_LABELS,  BIGTEST3_POOL
// ──────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i1 — Plural Peak (📚, #3B82F6)
// Topics: regular plurals (-s/-es/-ies), irregular plurals (child/children,
//         foot/feet, tooth/teeth, mouse/mice), collective nouns, abstract nouns
// ─────────────────────────────────────────────────────────────────────────────

export const PLURAL_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Plural Peak",
    // TODO: t1–t15 labels
  },
};

export const PLURAL_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t4:  regular plurals: add -s (cat→cats), add -es (box→boxes), -y→-ies (baby→babies), -f→-ves (leaf→leaves) (easy)
  // t5-t7:  irregular plurals: child/children, foot/feet, tooth/teeth, mouse/mice, sheep/sheep (medium)
  // t8-t10: collective nouns: a flock of birds, a pack of wolves, a school of fish (medium)
  // t11-t13: abstract nouns: kindness, bravery, happiness, freedom, love (medium)
  // t14: possessive nouns: the dog's bone, the children's toys (hard)
  // t15: mixed plurals + abstract nouns review (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i2 — Tense Tower (⏰, #EF4444)
// Topics: present/past/future tense, regular past (-ed), irregular past
//         (run→ran, see→saw, go→went, come→came, buy→bought), adj comparative/superlative
// ─────────────────────────────────────────────────────────────────────────────

export const TENSE_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Tense Tower",
    // TODO: t1–t15 labels
  },
};

export const TENSE_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t3:  simple present tense: I walk, she walks, they walk (easy)
  // t4-t6:  regular past tense: walk→walked, play→played, jump→jumped (-ed rule) (easy)
  // t7-t9:  irregular past: run→ran, see→saw, go→went, come→came, buy→bought (medium)
  // t10-t11: future tense: will + verb (I will run, she will go) (medium)
  // t12-t13: comparative adjectives: big→bigger→biggest, good→better→best (medium/hard)
  // t14: tense identification in sentences (hard)
  // t15: mixed tense review (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i3 — Adverb Archipelago (🌀, #10B981)
// Topics: adverbs of manner (quickly/slowly/loudly), time (yesterday/now/soon),
//         place (here/there/everywhere), coordinating conjunctions (and/but/or/so/because)
// ─────────────────────────────────────────────────────────────────────────────

export const ADVERB_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Adverb Archipelago",
    // TODO: t1–t15 labels
  },
};

export const ADVERB_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t3:  adverbs of manner: fast/slowly/quietly/loudly/carefully (easy)
  // t4-t5:  adverbs of time: yesterday/today/tomorrow/soon/always/never (easy)
  // t6-t7:  adverbs of place: here/there/inside/outside/everywhere (medium)
  // t8-t10: conjunctions: and/but/or joining sentences (medium)
  // t11-t12: because/so (cause and effect): "I wore a coat because it was cold." (medium)
  // t13: adverbs modifying verbs vs adjectives (hard)
  // t14: conjunction choice in context (hard)
  // t15: adverb + conjunction mixed review (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i4 — Subject Star (⭐, #F59E0B)
// Topics: subject vs predicate, complete subject & predicate, simple sentences,
//         compound sentences (joined with and/but/or), expanding sentences
// ─────────────────────────────────────────────────────────────────────────────

export const SUBJECT_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Subject Star",
    // TODO: t1–t15 labels
  },
};

export const SUBJECT_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t3:  subject = who/what the sentence is about; predicate = what they do (easy)
  // t4-t5:  identifying the subject in a sentence (easy)
  // t6-t7:  identifying the predicate in a sentence (medium)
  // t8-t10: complete subject vs simple subject (medium)
  // t11-t12: compound sentences: joining 2 simple sentences with and/but/or (medium)
  // t13-t14: expanding sentences with adjectives and adverbs (hard)
  // t15: subject-predicate agreement (he runs / they run) (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i5 — Quote Quasar (💬, #6366F1)
// Topics: direct speech with quotation marks, comma placement,
//         sentence fragments (missing subject or predicate), run-on sentences
// ─────────────────────────────────────────────────────────────────────────────

export const QUOTE_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Quote Quasar",
    // TODO: t1–t15 labels
  },
};

export const QUOTE_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t3:  quotation marks: She said, "Hello!" — open/close, capitalize inside (easy)
  // t4-t5:  comma before/after quotation: He said, "Come here." / "Wait," she said. (medium)
  // t6-t8:  sentence fragments: "Running in the park." (no subject) → how to fix (medium)
  // t9-t11: run-on sentences: "I like cats I have three." → how to fix with period/and (medium)
  // t12-t13: fragment vs complete sentence identification (medium/hard)
  // t14: run-on vs compound sentence distinction (hard)
  // t15: mixed: fix the fragment/run-on/quotation error (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i6 — Prefix Pulsar (🔡, #EC4899)
// Topics: prefixes un-/re-/pre-/mis-, suffixes -ful/-less/-tion/-ness/-ing/-ed/-er/-est
// ─────────────────────────────────────────────────────────────────────────────

export const PREFIX3_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Prefix Pulsar",
    // TODO: t1–t15 labels
  },
};

export const PREFIX3_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t3:  prefix un-: unhappy=not happy, undo, unlock, unfair (easy)
  // t4-t5:  prefix re-: redo=do again, rewrite, replay, reread (easy)
  // t6-t7:  prefix pre-: preview, preheat, prepay; mis-: mistake, misread, misbehave (medium)
  // t8-t10: suffix -ful/-less: hopeful/hopeless, careful/careless, thankful (medium)
  // t11-t12: suffix -tion/-ness: action/kindness/sadness/nation (medium)
  // t13: suffix -er/-est: fast→faster→fastest, tall→taller→tallest (medium)
  // t14: prefix + suffix combined meaning (hard)
  // t15: choose correct prefix or suffix to complete a word (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i7 — Word Family Falls (🌊, #14B8A6)
// Topics: word families / root words (help/helpful/helpless/helper/helping),
//         compound words (sunshine/rainbow), homonyms (bear/bare, there/their/they're)
// ─────────────────────────────────────────────────────────────────────────────

export const WORDFAM_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Word Family Falls",
    // TODO: t1–t15 labels
  },
};

export const WORDFAM_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t3:  word families: help/helpful/helpless/helper/helping (easy)
  // t4-t5:  more word families: play/player/playful/playground (easy)
  // t6-t7:  compound words: sunshine/raindrop/bedroom/butterfly/rainbow (medium)
  // t8-t10: homonyms / homophones: there/their/they're; to/too/two; hear/here (medium)
  // t11-t12: synonyms: big=large=huge; sad=unhappy=gloomy (medium)
  // t13-t14: antonyms: hot↔cold, day↔night, question↔answer (medium)
  // t15: root word identification in longer words (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i8 — Vocabulary Valley (🌿, #A855F7)
// Topics: literal vs nonliteral language (idioms: "break a leg"),
//         context clues (using surrounding words to guess meaning),
//         similes (as fast as a cheetah) and metaphors (life is a journey)
// ─────────────────────────────────────────────────────────────────────────────

export const VOCAB3_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Vocabulary Valley",
    // TODO: t1–t15 labels
  },
};

export const VOCAB3_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t3:  literal language: says exactly what it means (easy)
  // t4-t5:  nonliteral/idioms: "raining cats and dogs" / "break a leg" (easy/medium)
  // t6-t8:  context clues: guess word meaning from the sentence around it (medium)
  // t9-t10: similes: "as quiet as a mouse", "run like the wind" (medium)
  // t11-t12: metaphors: "The classroom is a zoo." / "Time is money." (medium/hard)
  // t13-t14: shades of meaning: warm/hot/scorching; walk/stroll/march/sprint (hard)
  // t15: mixed figurative language review (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i9 — Big Test (🌟, #4ECDC4)
// Topics: mixed review of all K3 topics — plurals, tenses, adverbs, subjects,
//         quotations, prefixes/suffixes, word families, vocabulary
// ─────────────────────────────────────────────────────────────────────────────

export const BIGTEST3_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Big Test",
    // TODO: t1–t15 labels
  },
};

export const BIGTEST3_POOL: PoolTopicDef[] = [
  // TODO: 15 topics — 1–2 topics from each of i1–i8, covering all K3 skills
  // Mix of easy/medium/hard, good for final review before checkpoint
];
