// lib/explorerPools/englishK5.ts
// ─────────────────────────────────────────────────────────────────────────────
// AstroEnglish K5 Explorer Pool — 9 islands × (LABELS + POOL)
//
// HOW TO FILL THIS FILE:
// ──────────────────────
// Each island has:
//   1. LABELS object  — all display strings in English only
//   2. POOL array     — PoolTopicDef[] with exactly 15 topics
//
// EACH TOPIC needs:
//   id       — unique string within this pool (e.g. "t1", "t2" … "t15")
//   title    — label key (e.g. "t1_title") → must exist in LABELS.en
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
//   LABELS has only "en" key. Include every label key used in POOL:
//   explorer_title, t1_title, t1_h1, t1_h2, t1_q, t1_c1–t1_c4, t1_ans,
//   plus all SVG and interactive label keys (sentences, word lists, etc.)
//
// ─────────────────────────────────────────────────────────────────────────────
// DIFFICULTY MIX (used by K5Explorer router):
//   mix: { easy: 2, medium: 2, hard: 1 }  — 5 topics per session
//   easy   = topics t1–t5  (simple recall)
//   medium = topics t6–t10 (application)
//   hard   = topics t11–t15 (complex / combined)
// ─────────────────────────────────────────────────────────────────────────────
//
// EXAMPLE TOPIC (copy and adapt):
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
// ─────────────────────────────────────────────────────────────────────────────

import type { PoolTopicDef } from "./types";

// ═══════════════════════════════════════════════════════════════════════════
// i1 — CONJUNCTION COVE
// 15 topics covering:
//  t1  Coordinating conjunctions intro (FANBOYS)
//  t2  "for" — reason/purpose
//  t3  "and" — addition
//  t4  "nor" — negative addition
//  t5  "but" — contrast
//  t6  "or" — choice/alternative
//  t7  "yet" — unexpected contrast
//  t8  "so" — result/consequence
//  t9  Subordinating conjunctions intro (because/although/while)
//  t10 "because" vs "so" — cause vs result
//  t11 "although" / "even though" — concession
//  t12 "while" / "when" / "after" / "before" — time
//  t13 "if" / "unless" — condition
//  t14 Correlative conjunctions (either-or / neither-nor / both-and)
//  t15 "not only … but also" + mixed review
// ═══════════════════════════════════════════════════════════════════════════

export const CONJUNCTION_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Conjunction Cove",
  },
};

export const CONJUNCTION_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i2 — INTERJECTION ISLE
// 15 topics covering:
//  t1  What is an interjection?
//  t2  Strong interjections + exclamation mark (Wow! Ouch! Hooray!)
//  t3  Mild interjections + comma (Well, … / Oh, …)
//  t4  "Wow" and surprise
//  t5  "Oops" / "Uh-oh" — mistakes
//  t6  "Hey" / "Hi" — greetings
//  t7  "Ugh" / "Yuck" — disgust
//  t8  "Hooray" / "Yay" — celebration
//  t9  "Ouch" / "Ow" — pain
//  t10 "Hmm" / "Uh" — thinking/hesitation
//  t11 Interjections in dialogue (punctuation rules)
//  t12 Formal vs informal interjections
//  t13 Identifying interjections in sentences
//  t14 Choosing the right interjection for the feeling
//  t15 Mixed review — strong vs mild, punctuation
// ═══════════════════════════════════════════════════════════════════════════

export const INTERJECTION_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Interjection Isle",
  },
};

export const INTERJECTION_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i3 — TENSE TEMPLE
// 15 topics covering:
//  t1  Present perfect intro (have/has + past participle)
//  t2  Regular past participles (-ed)
//  t3  Irregular past participles (gone/seen/done/written/eaten…)
//  t4  Present perfect: experience (I have visited…)
//  t5  Present perfect: recent past (She has just left.)
//  t6  Present perfect: with "ever/never/already/yet"
//  t7  Past perfect intro (had + past participle)
//  t8  Past perfect: sequence of events (By the time…)
//  t9  Future perfect intro (will have + past participle)
//  t10 Future perfect: completion by a deadline
//  t11 Tense consistency — keeping one tense in a paragraph
//  t12 Shifting tenses — common mistakes
//  t13 Active voice intro (subject does the action)
//  t14 Passive voice intro (subject receives the action)
//  t15 Active vs passive — when to use which
// ═══════════════════════════════════════════════════════════════════════════

export const TENSE5_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Tense Temple",
  },
};

export const TENSE5_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i4 — SENTENCE SUMMIT
// 15 topics covering:
//  t1  Independent clause (complete thought, stands alone)
//  t2  Dependent clause (incomplete thought, needs main clause)
//  t3  Subordinate clause: definition and signal words
//  t4  Relative clause with "who" (people)
//  t5  Relative clause with "which" (things)
//  t6  Relative clause with "that" (restrictive)
//  t7  Noun clause (acts as subject or object)
//  t8  Adverbial clause of time (when/while/after/before/until)
//  t9  Adverbial clause of reason (because/since/as)
//  t10 Adverbial clause of condition (if/unless/as long as)
//  t11 Adverbial clause of concession (although/even though/while)
//  t12 Combining clauses — sentence variety
//  t13 Simple / compound / complex / compound-complex
//  t14 Avoiding dangling and misplaced modifiers
//  t15 Mixed clause review
// ═══════════════════════════════════════════════════════════════════════════

export const SENTENCE5_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Sentence Summit",
  },
};

export const SENTENCE5_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i5 — PUNCTUATION PORT
// 15 topics covering:
//  t1  Semicolon — joining two related independent clauses
//  t2  Semicolon — before conjunctive adverbs (however/therefore/moreover)
//  t3  Colon — introducing a list
//  t4  Colon — introducing an explanation or quote
//  t5  Apostrophe — contractions (it's / they're / you're)
//  t6  Apostrophe — singular possessive (dog's / girl's)
//  t7  Apostrophe — plural possessive (dogs' / girls')
//  t8  its vs it's / your vs you're / their vs they're
//  t9  Hyphen — compound adjectives before a noun (well-known actor)
//  t10 Hyphen — compound numbers (twenty-one)
//  t11 Dash (em dash) — emphasis or interruption
//  t12 Parentheses — extra information / asides
//  t13 Quotation marks — titles of short works (articles, poems)
//  t14 Ellipsis — trailing off / omission
//  t15 Mixed punctuation review
// ═══════════════════════════════════════════════════════════════════════════

export const PUNCTUATION5_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Punctuation Port",
  },
};

export const PUNCTUATION5_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i6 — SPELLING SHORE
// 15 topics covering:
//  t1  "i before e" rule (believe/piece/field)
//  t2  Exceptions to ie/ei (receive/ceiling/weight/eight)
//  t3  Silent letters: silent k (knock/knee/knife/know)
//  t4  Silent letters: silent w (write/wrong/wrap/wrist)
//  t5  Silent letters: silent gh (night/light/knight/though)
//  t6  Doubling final consonant: -ing (running/sitting/swimming)
//  t7  Doubling final consonant: -ed (planned/dropped/stopped)
//  t8  Drop silent e before vowel suffix (making/writing/loving)
//  t9  Keep e before consonant suffix (hopeful/careless/movement)
//  t10 -ible vs -able (terrible/possible vs comfortable/adorable)
//  t11 -tion vs -sion (nation/action vs television/vision)
//  t12 -ent vs -ant (confident/different vs important/pleasant)
//  t13 -ence vs -ance (independence vs importance)
//  t14 Commonly misspelled words (necessary/separate/definitely/Wednesday)
//  t15 Mixed spelling rules review
// ═══════════════════════════════════════════════════════════════════════════

export const SPELLING5_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Spelling Shore",
  },
};

export const SPELLING5_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i7 — ROOT WORD REEF
// 15 topics covering:
//  t1  Latin root "aud" (hear) → audio/auditory/audience
//  t2  Latin root "vis/vid" (see) → vision/video/evident
//  t3  Latin root "dict" (say) → dictate/predict/contradict
//  t4  Latin root "port" (carry) → transport/import/export
//  t5  Latin root "rupt" (break) → interrupt/erupt/disrupt
//  t6  Greek root "bio" (life) → biology/biography/biome
//  t7  Greek root "geo" (earth) → geography/geology/geometry
//  t8  Greek root "graph/gram" (write) → autograph/paragraph/telegram
//  t9  Greek root "photo" (light) → photograph/photosynthesis
//  t10 Greek root "tele" (far) → telescope/telephone/television
//  t11 Prefix "pre/post" (before/after) → preview/postwar
//  t12 Prefix "mis/over/under" → mistake/overcome/underestimate
//  t13 Prefix "trans/inter" → transfer/international
//  t14 Suffix "-ful/-less" → hopeful/careless/powerful/fearless
//  t15 Suffix "-ness/-ment/-ous" → happiness/movement/famous
// ═══════════════════════════════════════════════════════════════════════════

export const ROOTWORD_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Root Word Reef",
  },
};

export const ROOTWORD_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i8 — FIGURATIVE FALLS
// 15 topics covering:
//  t1  Simile (uses "like" or "as": as fast as lightning)
//  t2  Metaphor (direct comparison, no like/as: He is a rock.)
//  t3  Simile vs metaphor — identifying the difference
//  t4  Personification (giving human traits to non-human things)
//  t5  Hyperbole (extreme exaggeration: I've told you a million times!)
//  t6  Alliteration (same starting sound: Peter Piper picked…)
//  t7  Onomatopoeia (sound words: buzz/crash/sizzle/hiss)
//  t8  Idiom (fixed expression, non-literal: kick the bucket)
//  t9  Common idioms: break a leg / spill the beans / bite the bullet
//  t10 Proverb (wise saying: Actions speak louder than words.)
//  t11 Visual imagery (words that paint a picture)
//  t12 Sound and smell imagery
//  t13 Figurative vs literal language — identifying
//  t14 Effect of figurative language in poetry/prose
//  t15 Mixed figurative language review
// ═══════════════════════════════════════════════════════════════════════════

export const FIGURATIVE_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Figurative Falls",
  },
};

export const FIGURATIVE_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i9 — ACADEMIC ATOLL  (mixed K5 review — 1–2 topics per island)
// 15 topics covering:
//  t1  Conjunction — FANBOYS gap-fill
//  t2  Conjunction — subordinating (because/although/if)
//  t3  Interjection — identify strong vs mild
//  t4  Interjection — choose the right punctuation (! vs ,)
//  t5  Present perfect — have/has + past participle
//  t6  Past perfect — had + past participle
//  t7  Relative clause — who/which/that
//  t8  Adverbial clause — time/reason/condition
//  t9  Semicolon vs comma
//  t10 Apostrophe — its/it's / your/you're
//  t11 Spelling — ie/ei and silent letters
//  t12 Spelling — suffixes (-ible/-able, -tion/-sion)
//  t13 Root word — Latin roots (aud/vis/dict/port)
//  t14 Root word — Greek roots (bio/geo/photo/tele)
//  t15 Figurative language — identify simile/metaphor/personification
// ═══════════════════════════════════════════════════════════════════════════

export const BIGTEST5_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Academic Atoll",
  },
};

export const BIGTEST5_POOL: PoolTopicDef[] = [];
