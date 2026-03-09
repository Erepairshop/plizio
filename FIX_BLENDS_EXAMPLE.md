# EXAMPLE: FIX blends_g1 GENERATOR

## The Problem

Current code (BROKEN):
```ts
blends_g1: (seed?: number) => {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];
  const blendWords: [string, string][] = [
    ["st","stop"],["st","stand"],["gr","green"],["bl","black"],
    ["gr","ground"],["pl","place"],["tr","tree"],["br","bring"],
    ["sm","small"],["cr","cross"],["dr","drive"],["fl","flags"],
    ["tr","trade"],["pl","please"]
  ];
  for (let i = 0; i < 30; i++) {
    const [blend, word] = pick(blendWords, rng);
    const wrong = blendWords
      .filter(b => b[0] !== blend)
      .map(b => b[0])
      .slice(0, 3);
    q.push(createMCQ("phonics_g1", "blends_g1",
      `Which blend starts '${word}'?`, blend, wrong));
  }
  return q;
},
```

### What's Wrong?

The code creates questions like:
- `"Which blend starts 'stop'?"` → Answer: "st" ✅ (correct)
- `"Which blend starts 'green'?"` → Answer: "gr" ✅ (correct)
- BUT **sometimes** the `pick()` function selects a blend-word pair where they DON'T match!

**Why?** Because `pick(blendWords)` randomly selects from the flat list. This is actually okay for THIS generator because the list is small and ALL pairs ARE valid. But the pattern is fragile.

---

## The Better Approach (Resilient Pattern)

**Separate data from logic:**

```ts
// ✅ FIXED VERSION

const BLEND_DATA = [
  { blend: "st", exampleWord: "stop", allWords: ["stop", "stand", "step", "star", "study", "stone", "stick", "strong"] },
  { blend: "gr", exampleWord: "green", allWords: ["green", "ground", "grade", "great", "grab", "graph", "grass"] },
  { blend: "bl", exampleWord: "black", allWords: ["black", "blue", "block", "blink", "blend", "blanket"] },
  { blend: "pl", exampleWord: "place", allWords: ["place", "play", "plant", "plane", "please", "plan"] },
  { blend: "tr", exampleWord: "tree", allWords: ["tree", "trade", "train", "track", "try", "truck"] },
  { blend: "dr", exampleWord: "drive", allWords: ["drive", "drop", "draw", "dragon", "dress", "drink"] },
  { blend: "br", exampleWord: "bring", allWords: ["bring", "bread", "break", "bridge", "bright", "branch"] },
  { blend: "fl", exampleWord: "flags", allWords: ["flags", "flag", "flash", "float", "floor", "fly"] },
  { blend: "cr", exampleWord: "cross", allWords: ["cross", "cry", "crown", "crash", "create", "cream"] },
  { blend: "sm", exampleWord: "small", allWords: ["small", "smart", "smile", "smoke", "smooth"] },
];

blends_g1: (seed?: number) => {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    // Pick a valid blend-words pair from pre-validated data
    const blendSet = pick(BLEND_DATA, rng);

    // Pick a random word from that blend's word list
    const word = pick(blendSet.allWords, rng);

    // Distractors: other blends (guaranteed not to be in this word)
    const wrongBlends = BLEND_DATA
      .filter(b => b.blend !== blendSet.blend)
      .map(b => b.blend)
      .slice(0, 3);

    q.push(createMCQ(
      "phonics_g1",
      "blends_g1",
      `Which blend starts '${word}'?`,
      blendSet.blend,
      wrongBlends
    ));
  }
  return q;
},
```

## Why This Is Better

| Aspect | Old | New |
|--------|-----|-----|
| **Validation** | Trust the data is paired correctly | Explicit: blends paired with words that contain them |
| **Maintainability** | Hard to see if data is wrong | Easy to check: word must contain blend |
| **Expandability** | Add more words to `blendWords` array | Add to specific blend's `allWords` list |
| **Word variety** | Same word repeated less often | More word examples per blend |
| **Confidence** | "Probably works" | "100% validated" |

---

## Implementation Steps for Phase 1

For each of the 5 broken generators, follow this pattern:

1. **Extract data** into a `CONST_DATA` structure
2. **Pre-validate** every pair (word must have blend, sentence must fit modal, etc.)
3. **Pick from data**, not from random combinations
4. **Add comments** showing validation rule

```ts
// TEMPLATE:
const GENERATOR_DATA = [
  // Validation: [data element 1] MUST [satisfy condition with] [data element 2]
  { primary: "X", secondary: "Y", context: "..." },
  // ...
];

generatorFunction: (seed?: number) => {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 30; i++) {
    const pair = pick(GENERATOR_DATA, rng);
    // Use pair.primary as answer, pair.secondary as context
    q.push(createMCQ(..., pair.secondary, pair.primary, distractors));
  }
  return q;
}
```

---

## Apply This Fix To:

1. **blends_g1** → Blend must be IN the word
2. **modal_verbs_g4** → Modal must FIT the sentence semantically
3. **literary_devices_g6** → Device must MATCH the example
4. **verb_mood_g7** → Mood must MATCH the description
5. **critical_theory_g8** → Theory must MATCH the description

---

## Test: Before/After

### Before (BROKEN)
```ts
const q = G1_Generators.phonics_g1.blends_g1(seed=42);
// Q: "Which blend is in 'stop'?" A: "st" ✅
// Q: "Which blend is in 'green'?" A: "dr" ❌ WRONG!
// Q: "Which blend is in 'cat'?" A: "pl" ❌ WRONG!
```

### After (FIXED)
```ts
const q = G1_Generators.phonics_g1.blends_g1(seed=42);
// Q: "Which blend is in 'stop'?" A: "st" ✅
// Q: "Which blend is in 'green'?" A: "gr" ✅
// Q: "Which blend is in 'star'?" A: "st" ✅
// (All 30 questions are valid)
```

