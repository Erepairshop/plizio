// lib/explorerPools/englishK5.ts
// ─────────────────────────────────────────────────────────────────────────────
// AstroEnglish K5 Explorer Pool — 9 islands × (LABELS + POOL)
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
// DIFFICULTY MIX (used by K5Explorer router):
//   mix: { easy: 2, medium: 2, hard: 1 }  — 5 topics per session
//   easy   = first 2 topics in POOL
//   medium = next 2 topics in POOL
//   hard   = last topics in POOL
// ─────────────────────────────────────────────────────────────────────────────

import type { PoolTopicDef } from "./types";

// ═══════════════════════════════════════════════════════════════════════════
// i1 — CONJUNCTION COVE (Coordinating, Subordinating & Correlative Conjunctions)
// Topics: FANBOYS (for/and/nor/but/or/yet/so), subordinating conjunctions
//         (because/although/while/since/unless/if/when),
//         correlative conjunctions (either-or, neither-nor, both-and, not only-but also)
// ═══════════════════════════════════════════════════════════════════════════

export const CONJUNCTION_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Conjunction Cove",
    // TODO: add all label keys used in CONJUNCTION_POOL
  },
  hu: {
    explorer_title: "Kötőszó-öböl",
    // TODO
  },
  de: {
    explorer_title: "Konjunktions-Bucht",
    // TODO
  },
  ro: {
    explorer_title: "Golfurile conjuncțiilor",
    // TODO
  },
};

export const CONJUNCTION_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics about coordinating, subordinating, and correlative conjunctions
  // Example skeleton:
  // {
  //   id: "t1",
  //   title: "t1_title",
  //   svg: { type: "text-bubbles", items: [
  //     { text: "t1_w1", color: "#1e293b", bg: "#DBEAFE" },
  //     { text: "t1_w2", color: "#1e293b", bg: "#FEF3C7" },
  //   ]},
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
// i2 — INTERJECTION ISLE (Interjections & Exclamations)
// Topics: common interjections (wow/ouch/hooray/ugh/oh/hey/oops),
//         strong vs mild interjections, punctuation after interjections
//         (! vs ,), interjections in dialogue, formal vs informal
// ═══════════════════════════════════════════════════════════════════════════

export const INTERJECTION_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Interjection Isle",
    // TODO
  },
  hu: {
    explorer_title: "Kiáltás-sziget",
    // TODO
  },
  de: {
    explorer_title: "Ausrufe-Insel",
    // TODO
  },
  ro: {
    explorer_title: "Insula exclamațiilor",
    // TODO
  },
};

export const INTERJECTION_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics about interjections and exclamations
];

// ═══════════════════════════════════════════════════════════════════════════
// i3 — TENSE TEMPLE (Perfect Tenses & Tense Consistency)
// Topics: present perfect (have/has + past participle), past perfect (had + pp),
//         future perfect (will have + pp), irregular past participles,
//         tense consistency in paragraphs, active vs passive voice intro
// ═══════════════════════════════════════════════════════════════════════════

export const TENSE5_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Tense Temple",
    // TODO
  },
  hu: {
    explorer_title: "Igeidő-templom",
    // TODO
  },
  de: {
    explorer_title: "Zeit-Tempel",
    // TODO
  },
  ro: {
    explorer_title: "Templul timpului",
    // TODO
  },
};

export const TENSE5_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics about perfect tenses and tense consistency
];

// ═══════════════════════════════════════════════════════════════════════════
// i4 — SENTENCE SUMMIT (Complex Sentences & Clauses)
// Topics: independent vs dependent clauses, subordinate clauses,
//         relative clauses (who/which/that), noun clauses,
//         adverbial clauses (time/reason/condition), sentence variety
// ═══════════════════════════════════════════════════════════════════════════

export const SENTENCE5_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Sentence Summit",
    // TODO
  },
  hu: {
    explorer_title: "Mondat-csúcs",
    // TODO
  },
  de: {
    explorer_title: "Satz-Gipfel",
    // TODO
  },
  ro: {
    explorer_title: "Vârful propozițiilor",
    // TODO
  },
};

export const SENTENCE5_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics about complex sentences and clause types
];

// ═══════════════════════════════════════════════════════════════════════════
// i5 — PUNCTUATION PORT (Advanced Punctuation)
// Topics: semicolons (joining related sentences), colons (lists/explanations),
//         apostrophes (possessives vs contractions), hyphens (compound adjectives),
//         dashes (emphasis/interruption), parentheses, quotation marks in titles
// ═══════════════════════════════════════════════════════════════════════════

export const PUNCTUATION5_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Punctuation Port",
    // TODO
  },
  hu: {
    explorer_title: "Írásjelek-kikötő",
    // TODO
  },
  de: {
    explorer_title: "Satzzeichen-Hafen",
    // TODO
  },
  ro: {
    explorer_title: "Portul punctuației",
    // TODO
  },
};

export const PUNCTUATION5_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics about semicolons, colons, apostrophes, hyphens, dashes
];

// ═══════════════════════════════════════════════════════════════════════════
// i6 — SPELLING SHORE (Spelling Rules & Patterns)
// Topics: ie vs ei rule ("i before e except after c"),
//         silent letters (knight/write/kneel), double consonants (running/sitting),
//         -ible vs -able, -tion vs -sion, -ent vs -ant, commonly misspelled words
// ═══════════════════════════════════════════════════════════════════════════

export const SPELLING5_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Spelling Shore",
    // TODO
  },
  hu: {
    explorer_title: "Helyesírás-part",
    // TODO
  },
  de: {
    explorer_title: "Schreib-Ufer",
    // TODO
  },
  ro: {
    explorer_title: "Țărmul ortografiei",
    // TODO
  },
};

export const SPELLING5_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics about English spelling rules and patterns
];

// ═══════════════════════════════════════════════════════════════════════════
// i7 — ROOT WORD REEF (Greek & Latin Roots, Prefixes & Suffixes)
// Topics: Latin roots (aud/vis/dict/scrib/port/rupt/struct/terr),
//         Greek roots (bio/geo/graph/photo/tele/micro/astro/hydr),
//         prefixes (pre/post/re/mis/over/under/trans/inter),
//         suffixes (-ful/-less/-ness/-tion/-ment/-ous/-ive/-ly)
// ═══════════════════════════════════════════════════════════════════════════

export const ROOTWORD_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Root Word Reef",
    // TODO
  },
  hu: {
    explorer_title: "Gyök-szó-zátony",
    // TODO
  },
  de: {
    explorer_title: "Wurzel-Riff",
    // TODO
  },
  ro: {
    explorer_title: "Aripa rădăcinii",
    // TODO
  },
};

export const ROOTWORD_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics about Greek/Latin roots, prefixes, and suffixes
];

// ═══════════════════════════════════════════════════════════════════════════
// i8 — FIGURATIVE FALLS (Figurative Language)
// Topics: similes vs metaphors, personification, hyperbole, alliteration,
//         onomatopoeia, idioms, proverbs, imagery (visual/sound/smell/taste/touch)
// ═══════════════════════════════════════════════════════════════════════════

export const FIGURATIVE_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Figurative Falls",
    // TODO
  },
  hu: {
    explorer_title: "Átvitt-értelmi esés",
    // TODO
  },
  de: {
    explorer_title: "Bildhafte-Fälle",
    // TODO
  },
  ro: {
    explorer_title: "Căderea figurativă",
    // TODO
  },
};

export const FIGURATIVE_POOL: PoolTopicDef[] = [
  // TODO: 6–9 topics about figurative language (simile, metaphor, personification, etc.)
];

// ═══════════════════════════════════════════════════════════════════════════
// i9 — ACADEMIC ATOLL (Mixed K5 Review)
// Topics: mix from i1–i8 — conjunctions, interjections, perfect tenses,
//         complex sentences, punctuation, spelling, root words, figurative language
// ═══════════════════════════════════════════════════════════════════════════

export const BIGTEST5_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Academic Atoll",
    // TODO
  },
  hu: {
    explorer_title: "Akadémiai-atoll",
    // TODO
  },
  de: {
    explorer_title: "Akademisches-Atoll",
    // TODO
  },
  ro: {
    explorer_title: "Acolul academic",
    // TODO
  },
};

export const BIGTEST5_POOL: PoolTopicDef[] = [
  // TODO: 8–9 topics, one from each island above (best representative topic)
];
