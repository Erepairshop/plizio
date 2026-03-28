// lib/explorerPools/englishK4.ts
// ─────────────────────────────────────────────────────────────────────────────
// AstroEnglish K4 Explorer Pool — 9 islands × (LABELS + POOL)
//
// HOW TO FILL THIS FILE:
// ──────────────────────
// Each island has:
//   1. LABELS object  — all display strings in 4 languages (en/hu/de/ro)
//   2. POOL array     — PoolTopicDef[] with typically 6–9 topics
//
// EACH TOPIC needs:
//   id       — unique string within this pool (e.g. "t1", "t2")
//   title    — label key (e.g. "t1_title") → must be in LABELS
//   svg      — one of the valid SvgConfig types (see below)
//   hint1    — label key for first hint line
//   hint2    — label key for second hint line  ← DON'T FORGET!
//   interactive — one TopicInteractive config (see below)
//   quiz     — one MCQ quiz config (see below)
//
// ─────────────────────────────────────────────────────────────────────────────
// VALID SVG TYPES (copy exactly):
// ─────────────────────────────────────────────────────────────────────────────
//   { type: "word-card", word: "label_key", translation: "label_key" }
//   { type: "letter-circles", letters: ["A","B","C"], color: "#3B82F6" }
//   { type: "text-bubbles", items: [{ text: "label_key", color: "#1e293b", bg: "#DBEAFE" }, ...] }
//   { type: "two-groups",
//       left:  { label: "label_key", items: ["label_key",...], bg: "#DBEAFE", border: "#3B82F6" },
//       right: { label: "label_key", items: ["label_key",...], bg: "#FEF3C7", border: "#F59E0B" } }
//   { type: "sentence-display", parts: ["label_key", "label_key", ...] }
//   { type: "word-display", words: ["label_key", ...] }
//   { type: "simple-icon", icon: "📝", label: "label_key", color: "#3B82F6" }
//   { type: "icon-grid", items: [{ icon: "📝", label: "label_key" }, ...] }
//   { type: "compound-word", left: "label_key", right: "label_key", result: "label_key" }
//   { type: "rhyme-pair", word1: "label_key", word2: "label_key" }
//   { type: "word-syllables", word: "label_key", syllables: ["la","bel"] }
//   { type: "letter-pairs", pairs: [{ left: "A", right: "a" }, ...] }
//
// ─────────────────────────────────────────────────────────────────────────────
// VALID INTERACTIVE TYPES (copy exactly):
// ─────────────────────────────────────────────────────────────────────────────
//   { type: "word-order", words: ["label_key", ...], correctOrder: [0,1,2,...] }
//   { type: "gap-fill", sentence: "label_key", choices: ["label_key",...], correctIndex: 0, instruction: "label_key", hint1: "label_key", hint2: "label_key" }
//   { type: "match-pairs", pairs: [{ left: "label_key", right: "label_key" }, ...] }
//   { type: "drag-to-bucket", items: ["label_key",...], buckets: [{ label: "label_key", accepts: ["label_key",...] }, ...] }
//   { type: "highlight-text", sentence: "label_key", targets: ["label_key",...], instruction: "label_key" }
//   { type: "sentence-build", parts: ["label_key",...], correctOrder: [0,1,2,...] }
//
// ─────────────────────────────────────────────────────────────────────────────
// QUIZ CONFIG:
// ─────────────────────────────────────────────────────────────────────────────
//   { question: "label_key", choices: ["label_key","label_key","label_key","label_key"], answer: "label_key" }
//   Always 4 choices, answer must match one of the choices exactly.
//
// ─────────────────────────────────────────────────────────────────────────────
// LABELS STRUCTURE:
// ─────────────────────────────────────────────────────────────────────────────
//   Every label key used in POOL must exist in LABELS under "en", "hu", "de", "ro".
//   Include: explorer_title, t1_title, t1_h1, t1_h2, t1_q, t1_c1–t1_c4, t1_ans, ...
//   Also include all SVG label keys, interactive label keys, and quiz choice keys.
//
// ─────────────────────────────────────────────────────────────────────────────
// DIFFICULTY MIX (used by K4Explorer router):
//   mix: { easy: 2, medium: 2, hard: 1 }  — 5 topics per session
//   easy   = first 2 topics in POOL
//   medium = next 2 topics in POOL
//   hard   = last topics in POOL
// ─────────────────────────────────────────────────────────────────────────────

import type { PoolTopicDef } from "./types";

// ═══════════════════════════════════════════════════════════════════════════
// i1 — PRONOUN PLANET (Relative Pronouns & Adverbs)
// Topics: who, whom, whose, which, that, where, when, why, how
// ═══════════════════════════════════════════════════════════════════════════

export const PRONOUN_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Pronoun Planet",
    // TODO: add all label keys used in PRONOUN_POOL
  },
  hu: {
    explorer_title: "Névmás-bolygó",
    // TODO
  },
  de: {
    explorer_title: "Pronomen-Planet",
    // TODO
  },
  ro: {
    explorer_title: "Planeta pronumelor",
    // TODO
  },
};

export const PRONOUN_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics about relative pronouns (who/whom/whose/which/that) and
  //       relative adverbs (where/when/why/how)
  // Example topic skeleton:
  // {
  //   id: "t1",
  //   title: "t1_title",
  //   svg: { type: "word-card", word: "t1_word", translation: "t1_trans" },
  //   hint1: "t1_h1",
  //   hint2: "t1_h2",
  //   interactive: {
  //     type: "gap-fill",
  //     sentence: "t1_sent",
  //     choices: ["t1_c1","t1_c2","t1_c3","t1_c4"],
  //     correctIndex: 0,
  //     instruction: "t1_inst",
  //     hint1: "t1_h1",
  //     hint2: "t1_h2",
  //   },
  //   quiz: {
  //     question: "t1_q",
  //     choices: ["t1_c1","t1_c2","t1_c3","t1_c4"],
  //     answer: "t1_c1",
  //   },
  // },
];

// ═══════════════════════════════════════════════════════════════════════════
// i2 — MODAL MOON (Modal Auxiliaries & Progressive Tenses)
// Topics: can/could, will/would, shall/should, may/might, must/have to,
//         present progressive, past progressive, future progressive
// ═══════════════════════════════════════════════════════════════════════════

export const MODAL_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Modal Moon",
    // TODO
  },
  hu: {
    explorer_title: "Módbeli ige-hold",
    // TODO
  },
  de: {
    explorer_title: "Modal-Mond",
    // TODO
  },
  ro: {
    explorer_title: "Luna modalelor",
    // TODO
  },
};

export const MODAL_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics covering modal verbs and progressive tenses
];

// ═══════════════════════════════════════════════════════════════════════════
// i3 — ADJECTIVE ORBIT (Adjective Order & Prepositional Phrases)
// Topics: adjective order (opinion-size-age-shape-color-origin-material),
//         prepositional phrases, adjectives vs adverbs
// ═══════════════════════════════════════════════════════════════════════════

export const ADJECTIVE4_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Adjective Orbit",
    // TODO
  },
  hu: {
    explorer_title: "Melléknév-pályán",
    // TODO
  },
  de: {
    explorer_title: "Adjektiv-Orbit",
    // TODO
  },
  ro: {
    explorer_title: "Orbita adjectivelor",
    // TODO
  },
};

export const ADJECTIVE4_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics covering adjective order and prepositional phrases
];

// ═══════════════════════════════════════════════════════════════════════════
// i4 — SENTENCE SUPERNOVA (Fragments, Run-ons & Compound Sentences)
// Topics: sentence fragments, run-on sentences, compound sentences,
//         coordinating conjunctions (FANBOYS), complex sentences
// ═══════════════════════════════════════════════════════════════════════════

export const SENTENCE4_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Sentence Supernova",
    // TODO
  },
  hu: {
    explorer_title: "Mondat-szupernóva",
    // TODO
  },
  de: {
    explorer_title: "Satz-Supernova",
    // TODO
  },
  ro: {
    explorer_title: "Supernova propozițiilor",
    // TODO
  },
};

export const SENTENCE4_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics about sentence fragments, run-ons, and compound/complex sentences
];

// ═══════════════════════════════════════════════════════════════════════════
// i5 — SPEECH SPIRAL (Direct & Indirect Speech)
// Topics: direct speech (quotation marks, speaker tags), indirect speech,
//         say vs tell, reporting verbs, confused words
// ═══════════════════════════════════════════════════════════════════════════

export const SPEECH4_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Speech Spiral",
    // TODO
  },
  hu: {
    explorer_title: "Egyenes beszéd spirál",
    // TODO
  },
  de: {
    explorer_title: "Rede-Spirale",
    // TODO
  },
  ro: {
    explorer_title: "Spirala vorbirii directe",
    // TODO
  },
};

export const SPEECH4_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics about direct speech, quotation marks, and reporting
];

// ═══════════════════════════════════════════════════════════════════════════
// i6 — CAPITAL CRATER (Capitalization & Commas)
// Topics: proper nouns, titles/abbreviations, start of sentence,
//         commas in compound sentences, commas in lists, commas after intros
// ═══════════════════════════════════════════════════════════════════════════

export const CAPITAL_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Capital Crater",
    // TODO
  },
  hu: {
    explorer_title: "Nagybetű-kráter",
    // TODO
  },
  de: {
    explorer_title: "Großschreibungs-Krater",
    // TODO
  },
  ro: {
    explorer_title: "Craterul majusculelor",
    // TODO
  },
};

export const CAPITAL_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics about capitalization rules and comma usage
];

// ═══════════════════════════════════════════════════════════════════════════
// i7 — SYNONYM SKY (Synonyms, Antonyms & Similes/Metaphors)
// Topics: synonyms, antonyms, similes (as ... as, like), metaphors,
//         figurative vs literal language, word connotations
// ═══════════════════════════════════════════════════════════════════════════

export const SYNONYM_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Synonym Sky",
    // TODO
  },
  hu: {
    explorer_title: "Szinonima égbolt",
    // TODO
  },
  de: {
    explorer_title: "Synonym-Himmel",
    // TODO
  },
  ro: {
    explorer_title: "Cerul sinonimelor",
    // TODO
  },
};

export const SYNONYM_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics covering synonyms, antonyms, similes, and metaphors
];

// ═══════════════════════════════════════════════════════════════════════════
// i8 — CONTEXT COMET (Context Clues & Vocabulary in Context)
// Topics: using context clues, root words + suffixes/prefixes,
//         homophones (there/their/they're, your/you're, its/it's),
//         multiple-meaning words, formal vs informal language
// ═══════════════════════════════════════════════════════════════════════════

export const CONTEXT_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Context Comet",
    // TODO
  },
  hu: {
    explorer_title: "Kontextus-üstökös",
    // TODO
  },
  de: {
    explorer_title: "Kontext-Komet",
    // TODO
  },
  ro: {
    explorer_title: "Cometa contextului",
    // TODO
  },
};

export const CONTEXT_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics about context clues, homophones, and vocabulary strategies
];

// ═══════════════════════════════════════════════════════════════════════════
// i9 — BIG TEST (Mixed K4 Review)
// Topics: mix from i1–i8 — relative pronouns, modals, adjective order,
//         compound sentences, direct speech, capitalization, synonyms,
//         context clues
// ═══════════════════════════════════════════════════════════════════════════

export const BIGTEST4_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Big Test",
    // TODO
  },
  hu: {
    explorer_title: "Nagy Próba",
    // TODO
  },
  de: {
    explorer_title: "Große Prüfung",
    // TODO
  },
  ro: {
    explorer_title: "Marea probă",
    // TODO
  },
};

export const BIGTEST4_POOL: PoolTopicDef[] = [
  // TODO: 8–9 topics, one from each island above (best representative topic)
];
