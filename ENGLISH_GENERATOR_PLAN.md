# ENGLISH CURRICULUM GENERATOR FIX & IMPLEMENTATION PLAN

**Date:** 2026-03-09
**Status:** PLANNING PHASE
**Scope:** Fix 5 broken generators + implement ~120 missing generators (146 total subtopics)

---

## CRITICAL PROBLEM: "WORD PAIRING" BUG

### What's Broken

Current generators randomly pick **question context** and **answer** independently:
```ts
// ❌ WRONG:
const blend = pick(blends, rng);        // random blend
const word = pick(blendWords, rng);     // random word (DOESN'T contain blend!)
q.push(createMCQ(..., `Which blend is in '${word}'?`, blend, wrong));
```

This produces invalid questions like:
- "Which blend is in 'cat'?" → "st" (wrong! cat has no blend)
- "Which modal verb shows possibility?" → "must" (wrong! must = obligation)
- "What device is 'singing softly'?" → "metaphor" (wrong! it's alliteration)

### Root Cause

**Assumption:** Question context is decoupled from answer.
**Reality:** Most curriculum questions require **validity binding** — the question must be answerable.

### Solution Pattern

**Pre-validate all combinations, THEN randomize:**

```ts
// ✅ CORRECT:
const validPairs = [
  { question: "Which blend is in 'stop'?", answer: "st", distractors: ["dr", "fl", "gr"] },
  { question: "Which blend is in 'green'?", answer: "gr", distractors: ["st", "bl", "dr"] },
  // ... all valid pairs pre-verified
];
for (let i = 0; i < 30; i++) {
  const pair = pick(validPairs, rng);
  q.push(createMCQ("phonics_g1", "blends_g1", pair.question, pair.answer, pair.distractors));
}
```

---

## AFFECTED GENERATORS (5 Broken)

| ID | Grade | Issue | Fix Strategy |
|---|---|---|---|
| `blends_g1` | G1 | Random blend + random word (word may not have blend) | Pre-pair [blend, words-that-have-it] |
| `modal_verbs_g4` | G4 | Random modal + vague sentence (modal may not fit) | Pre-pair [modal, contexts-where-modal-works] |
| `literary_devices_g6` | G6 | Random device + random example (may not match) | Pre-pair [device, examples-that-show-it] |
| `verb_mood_g7` | G7 | Random mood + description (may not match) | Pre-pair [mood, descriptions-that-fit] |
| `critical_theory_g8` | G8 | Random theory + description (may not match) | Pre-pair [theory, descriptions-that-fit] |

---

## IMPLEMENTATION STRATEGY

### Phase 1: FIX BROKEN GENERATORS (Week 1)

**What to do:**
1. For each of the 5 broken generators, create a `ValidPairs[]` structure
2. Manually verify each pair matches (e.g., word actually contains blend)
3. Replace random selection with pair-based selection
4. Add comments explaining validation

**Example: `blends_g1` fix**
```ts
const blendWordPairs = [
  { blend: "st", words: ["stop", "stand", "step", "star"], examples: ["stop"] },
  { blend: "gr", words: ["green", "ground", "grade", "great"], examples: ["green"] },
  { blend: "bl", words: ["black", "blue", "block", "blink"], examples: ["black"] },
  { blend: "pl", words: ["place", "play", "plant", "plane"], examples: ["place"] },
  // ... all consonant blends
];

for (let i = 0; i < 30; i++) {
  const pairSet = pick(blendWordPairs, rng);
  const word = pick(pairSet.words, rng);
  const distractors = blendWordPairs
    .filter(p => p.blend !== pairSet.blend)
    .map(p => p.blend)
    .slice(0, 3);
  q.push(createMCQ("phonics_g1", "blends_g1",
    `Which blend is in '${word}'?`, pairSet.blend, distractors));
}
```

**Time estimate:** ~2 hours per generator = 10 hours total for Phase 1

---

### Phase 2: TIER 1 GENERATORS (High Impact, ~20 subtopics)

These are foundational and required for higher grades:

#### 2.1 PRONOUNS (6 subtopics)
- G2: `pronouns_g2` — reflexive pronouns (myself, yourself, etc.)
- G3: (add missing subtopic structure)
- G4: (relative pronouns already exists, needs expansion)
- G6: `pronoun_cases_g6`, `intensive_pronouns_g6`, `pronoun_agreement_g6`, `pronoun_shifts_g6`

**Data validation:** Simple — pronouns are a closed set.
```ts
type PronounType = "personal" | "possessive" | "reflexive" | "relative" | "intensive" | "indefinite";
const pronounData = {
  personal: ["I", "you", "he", "she", "it", "we", "they"],
  reflexive: ["myself", "yourself", "himself", "herself", "itself", "ourselves", "themselves"],
  // ...
};
```

#### 2.2 VERB TENSES (8 subtopics)
- G2: `irregular_past_g2` (already has generator, enhance)
- G3: `verb_tenses_g3`
- G4: `progressive_tenses_g4`, `perfect_tenses_g4`
- G5: `tense_shifts_g5`, `perfect_tenses_g5`
- G7: `tense_voice_g7`

**Data validation:** Need verb conjugation tables
```ts
const verbConjugations = [
  { base: "go", past: "went", pastParticiple: "gone", progressive: "going" },
  { base: "run", past: "ran", pastParticiple: "run", progressive: "running" },
  // ... irregular verbs
];
```

#### 2.3 SENTENCE TYPES (6 subtopics)
- G2: `simple_compound_g2`
- G3: `simple_compound_g3`
- G4: `compound_sentences_g4`, `fragments_runons_g4`
- G5: `complex_sentences_g5`
- G7: `sentence_types_g7`

**Data validation:** Pre-write sentence examples for each type
```ts
const sentenceExamples = {
  simple: [
    { text: "The dog barked.", type: "simple" },
    // ...
  ],
  compound: [
    { text: "I like cats, and she likes dogs.", type: "compound" },
    // ...
  ],
  complex: [
    { text: "Although it rained, we went out.", type: "complex" },
    // ...
  ],
};
```

#### 2.4 COMMAS & PUNCTUATION (4 subtopics)
- G5: `commas_g5`
- G6: `commas_dashes_g6`
- G7: `commas_phrases_g7`, `semicolons_colons_g7`

**Data validation:** Rule-based with sentence examples
```ts
const commaRules = [
  { rule: "in lists", example: "I like apples, oranges, and bananas.", correct: true },
  // ...
];
```

**Time estimate:** Phase 2 = 30–40 hours (3 people × 2 weeks OR 1 person × 6 weeks)

---

### Phase 3: TIER 2 GENERATORS (~25 subtopics)

- **Clause types** (G5–G7): cause/effect, conditional, temporal, concessive, purpose
- **Word roots & affixes** (G2–G6): prefixes, suffixes, Greek/Latin roots
- **Context clues** (G2–G3, G5, G8)
- **Figurative language** (G5, G7–G8)
- **Synonyms/antonyms/homophones** (G2, G3, G4, G6)

**Pattern:** Similar to Tier 1 — pre-pair questions with valid answers

**Time estimate:** 40–50 hours

---

### Phase 4: TIER 3 GENERATORS (~20 subtopics)

- **Advanced punctuation** (dashes, ellipsis, apostrophes)
- **Verbal phrases** (infinitives, gerunds, participials) — G7
- **Literary analysis** (themes, point of view, allusion, irony) — G8
- **Writing types** (argumentative, informational, narrative) — G8
- **Register & style** (formal vs. conversational, academic language) — G8

**Pattern:** More essay-style questions, often typing-based

**Time estimate:** 30–40 hours

---

## FILE ORGANIZATION

### Current Files
- `lib/englishCurriculum.ts` — Defines all 146 subtopic structures
- `lib/englishGenerators.ts` — Contains only 26 generators (needs expansion)

### New Files (Recommended)
```
lib/english/
  ├── generators/
  │   ├── phonics.ts          # Blends, digraphs, vowels, etc.
  │   ├── pos.ts              # Pronouns, verbs, adjectives, etc.
  │   ├── sentences.ts        # Types, fragments, run-ons, etc.
  │   ├── punctuation.ts      # Commas, dashes, apostrophes, etc.
  │   ├── vocabulary.ts       # Word roots, synonyms, context clues, etc.
  │   ├── figurative.ts       # Metaphor, simile, alliteration, etc.
  │   ├── literature.ts       # Themes, POV, devices, etc.
  │   └── types.ts            # ValidPair, DataPair interfaces
  └── data/
      ├── phonicsData.ts      # Blend-word pairs, digraph examples, etc.
      ├── verbData.ts         # Verb conjugations, tenses, etc.
      ├── sentenceData.ts     # Pre-written sentence examples
      ├── vocabData.ts        # Word roots, synonyms, antonyms, etc.
      └── literaryData.ts     # Device examples, themes, etc.
```

**Reasoning:**
- `englishGenerators.ts` becomes too large (500+ KB)
- Separation of data from logic makes validation easier
- Data files can be pre-verified by hand
- New contributors can add data independently

---

## VALIDATION CHECKLIST (Before Committing)

For **each** new generator:

- [ ] Generator function exists and exports from `G*_Generators`
- [ ] All 30 questions are distinct (no duplicates)
- [ ] For MCQ: Correct answer is always in `options`
- [ ] For MCQ: All 3 wrong options are plausible but incorrect
- [ ] For Typing: Answer matches curriculum definition
- [ ] Grade-appropriate question type (G1: 100% MCQ, G7-8: 40% MCQ)
- [ ] Seeded PRNG is used (reproducible across runs)
- [ ] Word pairing is **pre-validated** (question + answer must match)
- [ ] At least 5 test runs with different seeds produce all valid questions
- [ ] Curriculum.ts subtopic is referenced correctly (topic/subtopic IDs match)

---

## TEST STRATEGY

### Manual Testing
```ts
// Test each new generator with 10 different seeds
for (let seed = 1; seed <= 10; seed++) {
  const questions = G*_Generators[topic][subtopic](seed);
  for (const q of questions) {
    console.assert(
      q.type === "mcq" ? q.options.includes(q.options[q.correct]) : true,
      `Invalid question: ${q.question}`
    );
  }
}
```

### Integration Testing
1. Run full test suite for `/english-test` page
2. Generate questions from each subtopic
3. Verify each question is answerable + matches curriculum definition

### CI/CD Integration (Optional)
- Add GitHub Actions workflow to test generators on commit
- Run 100× tests per generator to catch edge cases

---

## ROLL-OUT STRATEGY

### Week 1: Phase 1 (Fix Broken)
- Fix 5 broken generators
- Commit & push to `claude/fix-blend-word-pairing-cIJEQ`
- Test on staging

### Weeks 2–4: Phase 2 (Tier 1)
- Implement pronouns, verbs, sentences, commas
- ~20 generators added
- Commit incrementally (per subtopic group)

### Weeks 5–8: Phase 2–3 Continuation
- Word roots, clauses, figurative language
- ~50 generators added

### Week 9+: Phase 3–4 (Polish)
- Advanced features, literary analysis, writing types
- Final ~50 generators

---

## QUESTIONS FOR CLARIFICATION

Before starting Phase 1, confirm:

1. **Data file location:** Move data to separate `lib/english/data/` or keep in `englishGenerators.ts`?
2. **Question complexity:** Should "What is the plural of X?" have randomized word pools, or fixed examples?
3. **Typing answer validation:** For Typing questions, should we accept minor variations (spaces, capitalization)?
4. **Seeded tests:** Should we add regression tests in CI/CD?
5. **Priority order:** Start with Phase 1 bugs first, OR jump to Tier 1 generators?

---

## SUMMARY TABLE

| Phase | Task | Generators | Time | Priority |
|-------|------|-----------|------|----------|
| 1 | Fix broken (word pairing) | 5 | 10 hrs | 🔴 CRITICAL |
| 2a | Pronouns, verbs, sentences, commas | 20 | 40 hrs | 🟠 HIGH |
| 2b | Word roots, clauses, figurative | 25 | 40 hrs | 🟡 MEDIUM |
| 3 | Advanced: punctuation, phrases, lit, writing | 20 | 30 hrs | 🟢 NICE-TO-HAVE |
| **TOTAL** | | **~120 new** | **~150 hrs** | |

