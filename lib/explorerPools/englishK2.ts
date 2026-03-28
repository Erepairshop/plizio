import type { PoolTopicDef } from "./types";

// ─── AstroEnglish K2 Pool ──────────────────────────────────────────────────────
// Islands:
//   i1 = Noun Nebula         🏷️  common/proper nouns, plural nouns, collective nouns
//   i2 = Verb Vortex         ⚡  action verbs, irregular past tense (ran/saw/went)
//   i3 = Adjective Asteroid  🎨  adjectives, adverbs, pronouns (he/she/they/it)
//   i4 = Sentence Station    💬  simple sentences, compound sentences (and/but/or), expanding
//   i5 = Vowel Valley        🌈  vowel teams (ee/ea, oa/ow, ai/ay, oo/ui), vowel patterns
//   i6 = Prefix Planet       🔡  prefixes (un-/re-/pre-), suffixes (-ing/-ed/-er/-est), irregular spelling
//   i7 = Meaning Moon        🌙  synonyms, antonyms, shades of meaning, context clues
//   i8 = Grammar Galaxy      🌌  grammar review (nouns + verbs + adj), pronouns, conjunctions
//   i9 = Big Test            🌟  final mixed review — all K2 topics
//
// RULES:
//   • LABELS has ONLY "en" key (English-only content)
//   • 15 topics per island (PoolTopicDef[])
//   • difficulty: "easy" | "medium" | "hard" — per island: ~5 easy, ~5 medium, ~5 hard
//   • Every topic MUST have: infoTitle, infoText, svg, interactive, quiz
//   • Optional: bulletKeys (array of label keys), hintKey (single label key)
//   • Age target: 7–8 year olds (Grade 2)
//
// ── SvgConfig Types ────────────────────────────────────────────────────────────
//
//   { type: "letter-circles"; letters: string[]; color: string; showNotes?: boolean }
//      ⚠️ color REQUIRED
//      letters: actual text (not keys!), e.g. ["un", "re", "pre"]
//
//   { type: "two-groups"; left: { items: string[]; bg: string; border: string };
//                          right: { items: string[]; bg: string; border: string }; bg?: string }
//      ⚠️ bg AND border REQUIRED in left/right — NO title field!
//      items: actual text, e.g. ["London", "Sarah", "Monday"]
//
//   { type: "text-bubbles"; items: { text: string; emoji?: string; color: string; bg: string }[] }
//      ⚠️ color AND bg REQUIRED in each item
//
//   { type: "word-card"; word: string; translation: string }
//      word: target word/phrase, translation: definition or example sentence
//
//   { type: "rhyme-pair"; word1: string; word2: string; emoji1?: string; emoji2?: string; color: string }
//      ⚠️ color REQUIRED
//
//   { type: "word-syllables"; parts: string[]; color: string; showClap?: boolean }
//      ⚠️ color REQUIRED; parts: actual syllables, e.g. ["re", "mem", "ber"]
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
//      ⚠️ color REQUIRED; pairs: [base, modified] e.g. ["happy","unhappy"]
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
//   Generator: { generate: "nouns_common_proper_k2" }
//
//   Available English K2 generators — ADD to deutschGenerators.ts first!
//   Pattern: `pickFromEnglish(2, ["subtopic_id_g2"])`
//
//   Suggested generator keys to register (add to GENERATORS map in deutschGenerators.ts):
//     "nouns_common_proper_k2"  → pickFromEnglish(2, ["nouns_common_proper_g2"])
//     "nouns_plural_k2"         → pickFromEnglish(2, ["nouns_plural_g2"])
//     "collective_nouns_k2"     → pickFromEnglish(2, ["collective_nouns_g2"])
//     "verbs_k2"                → pickFromEnglish(2, ["verbs_g2"])
//     "irregular_past_k2"       → pickFromEnglish(2, ["irregular_past_g2"])
//     "adj_adv_k2"              → pickFromEnglish(2, ["adj_adv_g2"])
//     "pronouns_k2"             → pickFromEnglish(2, ["pronouns_g2"])
//     "simple_compound_k2"      → pickFromEnglish(2, ["simple_compound_g2"])
//     "expanding_k2"            → pickFromEnglish(2, ["expanding_g2"])
//     "vowel_patterns_k2"       → pickFromEnglish(2, ["vowel_patterns_g2"])
//     "vowel_teams_k2"          → pickFromEnglish(2, ["vowel_teams_g2"])
//     "prefixes_suffixes_k2"    → pickFromEnglish(2, ["prefixes_suffixes_g2"])
//     "irregular_spelling_k2"   → pickFromEnglish(2, ["irregular_spelling_g2"])
//     "synonyms_k2"             → pickFromEnglish(2, ["synonyms_g2"])
//     "antonyms_k2"             → pickFromEnglish(2, ["opposites_g2"])
//     "shades_of_meaning_k2"    → pickFromEnglish(2, ["shades_of_meaning_g2"])
//     "context_clues_k2"        → pickFromEnglish(2, ["context_clues_g2"])
//     "conjunctions_k2"         → pickFromEnglish(2, ["conjunctions_g2"])
//     "rhyming_words_k2"        → pickFromEnglish(2, ["rhyming_words_g2"])
//     "word_families_k2"        → pickFromEnglish(2, ["word_families_g2"])
//
//   Available G2 subtopic IDs (all usable with pickFromEnglish(2, [...])):
//     nouns_common_proper_g2, nouns_plural_g2, collective_nouns_g2
//     verbs_g2, irregular_past_g2
//     adj_adv_g2, pronouns_g2
//     simple_compound_g2, expanding_g2, sentence_completion_g2, sentence_order_g2
//     vowel_patterns_g2, vowel_teams_g2
//     prefixes_suffixes_g2, irregular_spelling_g2
//     synonyms_g2, opposites_g2, shades_of_meaning_g2, context_clues_g2, dictionary_g2
//     conjunctions_g2, question_words_g2, rhyming_words_g2, word_families_g2
//     — vocab topics: clothing_g2, community_g2, daily_routine_g2, everyday_g2,
//       hobbies_sports_g2, house_rooms_g2, jobs_g2, locations_g2, seasons_g2,
//       time_of_day_g2, weather_g2
//
// ── Label Key Convention ───────────────────────────────────────────────────────
//   t{N}_title    — topic title shown on info screen
//   t{N}_text     — teaching paragraph (1–3 short sentences, age-appropriate for 7–8 year olds)
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
//   i1: NOUN_LABELS,      NOUN_POOL
//   i2: VERB_LABELS,      VERB_POOL
//   i3: ADJ_LABELS,       ADJ_POOL
//   i4: SENTENCE2_LABELS, SENTENCE2_POOL
//   i5: VOWEL_LABELS,     VOWEL_POOL
//   i6: PREFIX_LABELS,    PREFIX_POOL
//   i7: MEANING_LABELS,   MEANING_POOL
//   i8: GRAMMAR2_LABELS,  GRAMMAR2_POOL
//   i9: BIGTEST_LABELS,   BIGTEST_POOL
//
// ⚠️  BEFORE WRITING CONTENT: Register all generator keys in
//     lib/deutschGenerators.ts GENERATORS map (see "Suggested generator keys" above)
// ──────────────────────────────────────────────────────────────────────────────


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i1 — Noun Nebula (🏷️, #3B82F6)
// Topics: common nouns, proper nouns (capitalized names/places/days),
//         plural nouns (-s/-es/irregular), collective nouns (flock/herd/bunch)
// ─────────────────────────────────────────────────────────────────────────────

export const NOUN_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Noun Nebula",
    // TODO: t1–t15 labels
  },
};

export const NOUN_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t5:  common nouns (person/place/thing/animal/idea) (easy)
  // t6-t8:  proper nouns — names, cities, days, months (easy/medium)
  // t9-t11: plural nouns — regular (-s/-es) and irregular (mice/feet/children) (medium)
  // t12-t13: collective nouns — flock of birds, herd of cows, bunch of flowers (medium)
  // t14: possessive nouns — cat's tail, teacher's desk (hard)
  // t15: abstract nouns — happiness, freedom, love (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i2 — Verb Vortex (⚡, #EF4444)
// Topics: action verbs, linking verbs (am/is/are/was/were),
//         present tense (-s for he/she/it), irregular past tense (ran/saw/went/came/ate)
// ─────────────────────────────────────────────────────────────────────────────

export const VERB_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Verb Vortex",
    // TODO: t1–t15 labels
  },
};

export const VERB_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t4:  action verbs — run, jump, eat, think, feel (easy)
  // t5-t6:  linking verbs — am/is/are/was/were (easy)
  // t7-t9:  present tense + he/she/it rule (she runs, he eats) (medium)
  // t10-t12: irregular past tense — go→went, see→saw, run→ran, eat→ate, come→came (medium)
  // t13: regular past tense (-ed) — walked, jumped, played (medium)
  // t14: helping verbs — will, can, should, would (hard)
  // t15: verb tense sorting (present/past/future) (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i3 — Adjective Asteroid (🎨, #10B981)
// Topics: adjectives (size/color/shape/texture/number),
//         comparative/superlative (big→bigger→biggest),
//         adverbs (quickly, slowly, carefully),
//         pronouns (he/she/they/it/we/I/you)
// ─────────────────────────────────────────────────────────────────────────────

export const ADJ_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Adjective Asteroid",
    // TODO: t1–t15 labels
  },
};

export const ADJ_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t4:  adjectives — size, color, shape, texture (easy)
  // t5-t6:  adjectives with numbers — three cats, first place (easy)
  // t7-t9:  comparative: big→bigger, tall→taller, fast→faster (medium)
  // t10-t11: superlative: biggest, tallest, fastest (medium)
  // t12-t13: adverbs — quickly, softly, loudly, carefully (medium)
  // t14: pronouns — subject (I/he/she/we/they) vs object (me/him/her/us/them) (hard)
  // t15: adjective or adverb? (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i4 — Sentence Station (💬, #F59E0B)
// Topics: simple sentences (subject + predicate), compound sentences
//         (joined with and/but/or), expanding sentences (when/where/why/how),
//         sentence order (subject first)
// ─────────────────────────────────────────────────────────────────────────────

export const SENTENCE2_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Sentence Station",
    // TODO: t1–t15 labels
  },
};

export const SENTENCE2_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t4:  simple sentences — subject + predicate identification (easy)
  // t5-t6:  compound sentences with "and" (easy/medium)
  // t7-t8:  compound sentences with "but" and "or" (medium)
  // t9-t10: expanding sentences — adding when/where/why details (medium)
  // t11-t12: sentence vs fragment vs run-on (medium)
  // t13: sentence order — which word comes first? (medium)
  // t14: joining two sentences with a conjunction (hard)
  // t15: question sentences (interrogative) — word order inverts (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i5 — Vowel Valley (🌈, #6366F1)
// Topics: long vowel teams (ee/ea, oa/ow, ai/ay, oo, ui/ue),
//         short vowel review, silent-e pattern, vowel + r (ar/or/er/ir/ur)
// ─────────────────────────────────────────────────────────────────────────────

export const VOWEL_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Vowel Valley",
    // TODO: t1–t15 labels
  },
};

export const VOWEL_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t3:  vowel teams ee/ea (feet, bead, sleep, read) (easy)
  // t4-t5:  vowel teams oa/ow (boat, snow, coat, grow) (easy)
  // t6-t7:  vowel teams ai/ay (rain, play, tail, day) (easy/medium)
  // t8-t9:  oo vowel — moon/food vs book/foot (medium)
  // t10-t11: vowel + r: ar/or (car, corn, star, fort) (medium)
  // t12-t13: vowel + r: er/ir/ur (her, bird, turn) — all sound the same! (medium)
  // t14: silent-e review (cake/cake, Pete/pet, pine/pin) (hard)
  // t15: vowel team sorting challenge (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i6 — Prefix Planet (🔡, #EC4899)
// Topics: prefix un- (unhappy, undo, unlike), prefix re- (redo, rewrite, replay),
//         prefix pre- (preview, prepay), suffix -ing/-ed/-er/-est,
//         irregular spelling (said/was/were/their/there/they're)
// ─────────────────────────────────────────────────────────────────────────────

export const PREFIX_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Prefix Planet",
    // TODO: t1–t15 labels
  },
};

export const PREFIX_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t4:  prefix un- (unhappy, unlock, undo, unsafe) (easy)
  // t5-t6:  prefix re- (redo, replay, rewrite, reread) (easy/medium)
  // t7-t8:  prefix pre- (preview, prepay, premix) (medium)
  // t9-t10: suffix -ing (running, jumping, reading) (medium)
  // t11-t12: suffix -ed (walked, played, talked) (medium)
  // t13: suffix -er/-est (taller/tallest, faster/fastest) (medium)
  // t14: irregular spelling — there/their/they're (hard)
  // t15: irregular spelling — said/was/were/could/would/should (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i7 — Meaning Moon (🌙, #14B8A6)
// Topics: synonyms (big=large, fast=quick, happy=glad),
//         antonyms (hot↔cold, fast↔slow, dark↔light),
//         shades of meaning (angry/furious, good/great/fantastic),
//         context clues (guess meaning from sentence)
// ─────────────────────────────────────────────────────────────────────────────

export const MEANING_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Meaning Moon",
    // TODO: t1–t15 labels
  },
};

export const MEANING_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t4:  synonyms — big/large, fast/quick, happy/glad, sad/upset (easy)
  // t5-t7:  antonyms — hot↔cold, night↔day, full↔empty, open↔closed (easy)
  // t8-t9:  shades of meaning — good/great/fantastic; bad/terrible/awful (medium)
  // t10-t11: shades of meaning — angry/furious; warm/hot/boiling (medium)
  // t12-t13: context clues — guess the word from the sentence (medium)
  // t14: multiple meanings (homonyms) — bank, bat, light, watch (hard)
  // t15: using a dictionary — alphabetical order, entry format (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i8 — Grammar Galaxy (🌌, #A855F7)
// Topics: pronouns review (I/me/he/him/she/her/they/them),
//         conjunctions (and/but/or/because/so),
//         question words (who/what/where/when/why/how),
//         grammar mixed review
// ─────────────────────────────────────────────────────────────────────────────

export const GRAMMAR2_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Grammar Galaxy",
    // TODO: t1–t15 labels
  },
};

export const GRAMMAR2_POOL: PoolTopicDef[] = [
  // TODO: 15 topics
  // t1-t4:  pronoun review — subject vs object pronouns (easy/medium)
  // t5-t6:  conjunction "and" vs "but" (easy)
  // t7-t8:  conjunction "because" and "so" (medium)
  // t9-t10: question words — who/what/where/when/why/how (medium)
  // t11-t12: noun + verb agreement (The dogs run. She runs.) (medium)
  // t13: prepositions — in/on/under/behind/next to (medium)
  // t14: mixed grammar — identify part of speech (hard)
  // t15: sentence correction — find and fix the error (hard)
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i9 — Big Test (🌟, #4ECDC4)
// Topics: comprehensive review of all K2 topics — nouns, verbs, adjectives,
//         sentences, vowel teams, prefixes/suffixes, synonyms/antonyms, grammar
// ─────────────────────────────────────────────────────────────────────────────

export const BIGTEST_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Big Test",
    // TODO: t1–t15 labels
  },
};

export const BIGTEST_POOL: PoolTopicDef[] = [
  // TODO: 15 topics — mixed difficulty, covering all 8 previous islands
  // 2 topics from each island category + 1 bonus challenge topic
  // t1-t2:  nouns review (common/proper + plural)
  // t3-t4:  verbs review (irregular past + present tense)
  // t5-t6:  adjectives + adverbs review
  // t7-t8:  sentences review (compound + expanding)
  // t9-t10: vowels review (vowel teams + vowel+r)
  // t11-t12: prefix/suffix review
  // t13-t14: synonyms/antonyms/shades of meaning review
  // t15:    super challenge — mixed grammar sprint (hard)
];
