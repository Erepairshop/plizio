// lib/explorerPools/englishK6.ts
import type { PoolTopicDef } from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// AstroEnglish K6 Explorer Pool — 9 islands × (LABELS + POOL)
//
// HOW TO FILL THIS FILE:
// ──────────────────────
// Each island has:
//   1. LABELS object  — all display strings in English only  { en: { ... } }
//   2. POOL array     — PoolTopicDef[] with exactly 15 topics
//
// ── PoolTopicDef fields (REQUIRED unless marked optional) ────────────────────
//   infoTitle   — label key for the topic title (e.g. "t1_title")
//   infoText    — label key for the teaching paragraph (e.g. "t1_text")
//   svg         — SvgConfig (see valid types below)
//   interactive — TopicInteractive (see valid types below)
//   quiz        — { question, choices: [4 keys], answer } OR { generate: "key" }
//   hintKey     — (optional) label key for one hint line
//   bulletKeys  — (optional) array of label keys for bullet facts
//   difficulty  — (optional) "easy" | "medium" | "hard"
//
// ── VALID SVG TYPES ───────────────────────────────────────────────────────────
//   { type: "word-card", word: "label_key", translation: "label_key" }
//   { type: "word-display", word: "label_key", color: "#hex", highlightChars?: string[], subtitle?: "label_key" }
//      ⚠️ word is a SINGLE string (not an array!)
//   { type: "sentence-display", words: ["label_key",...], color: "#hex", highlightIndices?: number[] }
//      ⚠️ color REQUIRED; words = array of individual word keys
//   { type: "text-bubbles", items: [{ text: "label_key", color: "#hex", bg: "#hex" }, ...] }
//      ⚠️ color AND bg REQUIRED in each item
//   { type: "two-groups",
//       left:  { items: ["label_key",...], bg: "#hex", border: "#hex" },
//       right: { items: ["label_key",...], bg: "#hex", border: "#hex" } }
//      ⚠️ NO label field inside left/right!
//   { type: "simple-icon", icon: "emoji", title?: "label_key", color?: "#hex", bg?: "#hex" }
//   { type: "icon-grid", items: [{ emoji: "...", label?: "actual text" }, ...] }
//   { type: "compound-word", word1: "label_key", word2: "label_key", result: "label_key", color: "#hex" }
//   { type: "rhyme-pair", word1: "label_key", word2: "label_key", color: "#hex" }
//   { type: "word-syllables", parts: ["syl","la","ble"], color: "#hex" }
//   { type: "letter-pairs", pairs: [["A","a"], ...], color: "#hex" }
//   { type: "letter-circles", letters: ["A","B"], color: "#hex" }
//
// ── VALID INTERACTIVE TYPES ───────────────────────────────────────────────────
//   { type: "gap-fill", sentence: "label_key", choices: ["k1","k2","k3","k4"],
//     correctIndex: 0, instruction: "label_key", hint1: "label_key", hint2: "label_key" }
//
//   { type: "word-order", words: ["k1","k2","k3",...], correctOrder: [0,1,2,...],
//     instruction: "label_key", hint1: "label_key", hint2: "label_key" }
//
//   { type: "match-pairs", pairs: [{ left: "label_key", right: "label_key" }, ...],
//     instruction: "label_key", hint1: "label_key", hint2: "label_key" }
//
//   { type: "sentence-build", fragments: ["label_key",...],
//     instruction: "label_key", hint1: "label_key", hint2: "label_key" }
//     ⚠️ field is `fragments:` NOT `parts:`
//
//   { type: "drag-to-bucket",
//     buckets: [{ id: "b1", label: "label_key" }, { id: "b2", label: "label_key" }],
//     items: [{ text: "label_key", bucketId: "b1" }, { text: "label_key", bucketId: "b2" }, ...],
//     instruction: "label_key", hint1: "label_key", hint2: "label_key" }
//     ⚠️ buckets have `id` + `label`; items have `text` + `bucketId`  (NO `accepts`!)
//
//   { type: "highlight-text", tokens: ["k1","k2","k3",...], correctIndices: [0,2],
//     instruction: "label_key", hint1: "label_key", hint2: "label_key" }
//     ⚠️ field is `tokens:` NOT `sentence:`; correct items by INDEX
//
// ── QUIZ CONFIG ───────────────────────────────────────────────────────────────
//   { question: "label_key", choices: ["k1","k2","k3","k4"], answer: "k1" }
//   Always 4 choices; answer must exactly match one choice key.
//   ⚠️ Do NOT reuse the same choice keys (e.g. t1_c1) for BOTH gap-fill and quiz!
//      Use t1_c1–t1_c4 for gap-fill choices, t1_qa–t1_qd for quiz choices.
//
// ── LABEL KEY CONVENTIONS ─────────────────────────────────────────────────────
//   t{N}_title  — topic title
//   t{N}_text   — teaching paragraph (2–3 sentences)
//   t{N}_inst   — interactive instruction
//   t{N}_h1     — hint 1
//   t{N}_h2     — hint 2 (used inside interactive, NOT at PoolTopicDef level)
//   t{N}_b1/b2  — optional bullet facts
//   t{N}_sent   — gap-fill sentence (with "___" placeholder)
//   t{N}_c1–c4  — gap-fill choices
//   t{N}_qa     — quiz correct answer
//   t{N}_qb/qc/qd — quiz wrong choices
//   t{N}_q      — quiz question
//   + any extra keys your SVG or interactive needs
//
// ── DIFFICULTY MIX ────────────────────────────────────────────────────────────
//   mix: { easy: 2, medium: 2, hard: 1 }  ← 5 topics shown per session
//   easy   = t1–t5   (clear, direct examples)
//   medium = t6–t10  (application, slightly tricky)
//   hard   = t11–t15 (complex, combined, nuanced)
// ─────────────────────────────────────────────────────────────────────────────

// ═══════════════════════════════════════════════════════════════════════════
// i1 — PRONOUN PENINSULA (Subject, Object & Reflexive Pronouns)
// 15 topics:
//  t1  Subject pronouns (I/you/he/she/it/we/they)
//  t2  Object pronouns (me/you/him/her/it/us/them)
//  t3  Subject vs object pronoun (I vs me, he vs him)
//  t4  Pronoun-antecedent agreement (A dog… it, not they)
//  t5  Reflexive pronouns (myself/yourself/himself/herself/itself/ourselves/themselves)
//  t6  Intensive pronouns (I myself / She herself did it)
//  t7  Indefinite pronouns (someone/anyone/everyone/nobody/all/each)
//  t8  Indefinite pronoun + verb agreement (Everyone is, not are)
//  t9  Demonstrative pronouns (this/that/these/those)
//  t10 Interrogative pronouns (who/whom/whose/which/what)
//  t11 Reciprocal pronouns (each other / one another)
//  t12 Pronoun case: who vs whom (who=subject, whom=object)
//  t13 Avoiding pronoun ambiguity (unclear "it" or "they")
//  t14 Gender-neutral pronouns (they/them for singular)
//  t15 Mixed pronoun review
// ═══════════════════════════════════════════════════════════════════════════

export const PRONOUN6_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Pronoun Peninsula",
  },
};

export const PRONOUN6_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i2 — PRONOUN PRECISION (Pronoun Reference & Agreement)
// 15 topics:
//  t1  Pronoun-antecedent agreement: singular nouns → singular pronouns
//  t2  Pronoun-antecedent agreement: plural nouns → plural pronouns
//  t3  Collective nouns + pronouns (The team… its, not their)
//  t4  Vague pronoun reference: fixing "it", "this", "they"
//  t5  Shift in pronoun person: avoiding you/one mixing
//  t6  Relative pronouns who/which/that — choosing correctly
//  t7  Who = people, which = things, that = restrictive
//  t8  Whom (object) vs who (subject) in clauses
//  t9  Whose vs who's
//  t10 Pronoun in compound subjects (John and I vs John and me)
//  t11 Pronoun after prepositions (between you and me — not I)
//  t12 Pronoun after "to be" (It is I — formal vs It is me — informal)
//  t13 Possessive pronouns (mine/yours/his/hers/ours/theirs — no apostrophe!)
//  t14 its vs it's review
//  t15 Mixed pronoun precision review
// ═══════════════════════════════════════════════════════════════════════════

export const PRECISION_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Pronoun Precision",
  },
};

export const PRECISION_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i3 — SENTENCE STRUCTURES (Simple, Compound, Complex, Compound-Complex)
// 15 topics:
//  t1  Simple sentence (1 independent clause)
//  t2  Compound sentence (2 independent clauses + coordinating conjunction)
//  t3  Complex sentence (1 independent + 1 dependent clause)
//  t4  Compound-complex sentence (2+ independent + 1+ dependent clauses)
//  t5  Coordinating conjunctions: FANBOYS review
//  t6  Subordinating conjunctions: because/although/since/while/if/when/unless
//  t7  Conjunctive adverbs: however/therefore/moreover/furthermore/nevertheless
//  t8  Sentence combining: two simple → compound
//  t9  Sentence combining: adding a dependent clause → complex
//  t10 Parallel structure in lists (I like running, swimming, and cycling)
//  t11 Parallel structure in comparisons
//  t12 Faulty parallelism — identify and fix
//  t13 Sentence variety: mixing short and long sentences
//  t14 Sentence fragments revisited — more complex cases
//  t15 Run-on sentences — fix with semicolons, conjunctions, or periods
// ═══════════════════════════════════════════════════════════════════════════

export const SENTENCE6_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Sentence Structures",
  },
};

export const SENTENCE6_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i4 — COMPLEX CLAUSE COVE (Phrases & Clauses)
// 15 topics:
//  t1  Phrase vs clause (phrase has no subject+verb, clause does)
//  t2  Prepositional phrases as adjectives (the book on the shelf)
//  t3  Prepositional phrases as adverbs (She ran with great speed.)
//  t4  Participial phrases (Running quickly, he caught the bus.)
//  t5  Dangling participles (identify and fix)
//  t6  Infinitive phrases as nouns (To win is her goal.)
//  t7  Infinitive phrases as adjectives/adverbs
//  t8  Gerund phrases as subjects (Swimming is fun.)
//  t9  Gerund phrases as objects (She enjoys reading.)
//  t10 Appositive phrases (My brother, a doctor, lives here.)
//  t11 Restrictive vs non-restrictive clauses (no comma vs comma)
//  t12 Embedded (relative) clauses
//  t13 Adverbial clause placement (beginning vs end of sentence)
//  t14 Noun clauses as subjects and objects
//  t15 Mixed phrase/clause identification review
// ═══════════════════════════════════════════════════════════════════════════

export const CLAUSE_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Complex Clause Cove",
  },
};

export const CLAUSE_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i5 — WORD BUILDER BAY (Morphology: Roots, Prefixes, Suffixes)
// 15 topics:
//  t1  Base words vs root words
//  t2  Latin roots: aud/vis/dict/scrib/port/rupt/struct/terr review
//  t3  Greek roots: bio/geo/graph/photo/tele/micro/astro/hydr review
//  t4  New Latin roots: cred (believe)/duc (lead)/fac (make)/mit (send)
//  t5  New Greek roots: chron (time)/log (word)/path (feeling)/phon (sound)
//  t6  Prefix dis- (disagree/discover/disappear)
//  t7  Prefix ex- / extra- (exit/extraordinary)
//  t8  Prefix sub- / super- (submarine/supermarket)
//  t9  Prefix anti- / counter- (anticlockwise/counterattack)
//  t10 Suffix -ize / -ise (realize/recognise)
//  t11 Suffix -tion / -sion / -cion (action/tension/suspicion)
//  t12 Suffix -ous / -ious / -eous (famous/mysterious/courageous)
//  t13 Suffix -ary / -ery / -ory (dictionary/bakery/directory)
//  t14 Word families: act → action/active/activate/actor/react
//  t15 Using morphology to guess meaning of unknown words
// ═══════════════════════════════════════════════════════════════════════════

export const WORDBUILDER_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Word Builder Bay",
  },
};

export const WORDBUILDER_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i6 — VOCABULARY VISTA (Academic & Domain Vocabulary)
// 15 topics:
//  t1  Tier 2 academic words: analyze/evaluate/compare/contrast/describe
//  t2  Tier 2 academic words: identify/explain/summarize/predict/conclude
//  t3  Domain vocabulary: science (hypothesis/variable/observation/evidence)
//  t4  Domain vocabulary: history (chronology/civilization/era/primary source)
//  t5  Domain vocabulary: math (equation/expression/coefficient/variable)
//  t6  Formal vs informal vocabulary (assist vs help / purchase vs buy)
//  t7  Denotation vs connotation (thin vs skinny vs slender)
//  t8  Synonyms with different connotations (bold/reckless/brave/foolhardy)
//  t9  Antonyms and gradable antonyms (hot—warm—cool—cold)
//  t10 Collocations (make a decision / do homework — not make homework)
//  t11 Idioms in academic writing: to shed light on / to build on
//  t12 Transition words: addition (furthermore/moreover/in addition)
//  t13 Transition words: contrast (however/on the other hand/nevertheless)
//  t14 Transition words: cause/effect (therefore/as a result/consequently)
//  t15 Context clues for academic vocabulary
// ═══════════════════════════════════════════════════════════════════════════

export const VOCAB6_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Vocabulary Vista",
  },
};

export const VOCAB6_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i7 — ACADEMIC HARBOR (Writing & Composition Skills)
// 15 topics:
//  t1  Topic sentence: the main idea of a paragraph
//  t2  Supporting sentences: evidence and examples
//  t3  Concluding sentence: wrap up, restate, or transition
//  t4  Paragraph unity: all sentences support the topic sentence
//  t5  Paragraph coherence: logical order + transitions
//  t6  Types of paragraphs: descriptive / narrative / expository / persuasive
//  t7  Thesis statement: the main claim of an essay
//  t8  Introduction paragraph structure
//  t9  Body paragraph structure (PEEL: Point/Evidence/Explain/Link)
//  t10 Conclusion paragraph structure
//  t11 Citing evidence: "According to…" / "The author states…"
//  t12 Paraphrasing vs quoting
//  t13 Active voice vs passive voice in writing
//  t14 Varying sentence beginnings (avoid starting every sentence with "The")
//  t15 Proofreading checklist (punctuation / grammar / clarity)
// ═══════════════════════════════════════════════════════════════════════════

export const ACADEMIC_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Academic Harbor",
  },
};

export const ACADEMIC_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i8 — PUNCTUATION PEAK (Advanced Punctuation & Mechanics)
// 15 topics:
//  t1  Semicolons between independent clauses (review + harder examples)
//  t2  Semicolons in lists with internal commas (He visited Paris, France; Rome, Italy)
//  t3  Colons to introduce quotations
//  t4  Colons after "as follows" / "the following"
//  t5  Commas with introductory phrases (After the rain, the sun came out.)
//  t6  Commas with non-restrictive clauses (My sister, who is a nurse, works nights.)
//  t7  Commas in a series — Oxford comma
//  t8  Hyphen in compound adjectives (well-known author / up-to-date report)
//  t9  Em dash for emphasis or interruption (The answer—surprisingly—was yes.)
//  t10 Parentheses vs dashes vs commas for asides
//  t11 Ellipsis for omission in quotes (…)
//  t12 Brackets for clarification inside quotes ([sic])
//  t13 Italics for titles of long works (books, films, newspapers)
//  t14 Quotation marks for titles of short works (poems, articles, chapters)
//  t15 Mixed advanced punctuation review
// ═══════════════════════════════════════════════════════════════════════════

export const PUNCT6_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Punctuation Peak",
  },
};

export const PUNCT6_POOL: PoolTopicDef[] = [];

// ═══════════════════════════════════════════════════════════════════════════
// i9 — RHETORIC REEF (Mixed K6 Review)
// 15 topics — one or two from each island above:
//  t1  Pronoun: subject vs object (I vs me)
//  t2  Pronoun: who vs whom
//  t3  Pronoun: antecedent agreement
//  t4  Sentence type: simple / compound / complex / compound-complex
//  t5  Parallel structure: identify and fix
//  t6  Phrase: participial vs prepositional
//  t7  Clause: restrictive vs non-restrictive
//  t8  Morphology: Latin/Greek root meaning
//  t9  Morphology: suffix -ous/-tion/-ize
//  t10 Vocabulary: formal vs informal
//  t11 Vocabulary: transition words (contrast / cause-effect)
//  t12 Writing: topic sentence vs supporting sentence
//  t13 Writing: PEEL paragraph element
//  t14 Punctuation: semicolon vs comma
//  t15 Punctuation: em dash vs parentheses
// ═══════════════════════════════════════════════════════════════════════════

export const RHETORIC_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Rhetoric Reef",
  },
};

export const RHETORIC_POOL: PoolTopicDef[] = [];
