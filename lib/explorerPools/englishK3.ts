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

    // T1: add -s
    t1_title: "Regular Plurals: Just Add -s",
    t1_text: "Most of the time, to make a word mean more than one, we just add an 's' to the end. One cat becomes two cats. One book becomes three books.",
    t1_inst: "Make the word plural by adding 's'.",
    t1_h1: "Just add the letter 's' to the end of 'dog'.",
    t1_h2: "The plural of 'dog' is 'dogs'.",
    t1_q: "What is the plural of 'car'?",
    t1_qa: "cars",
    t1_qb: "caries",
    t1_qc: "car",
    t1_qd: "cares",

    // T2: add -es
    t2_title: "Plurals: Add -es",
    t2_text: "For words that end in s, x, z, ch, or sh, we add '-es' to make them plural. One box becomes two boxes. One witch becomes three witches.",
    t2_inst: "Make 'fox' plural by adding 'es'.",
    t2_h1: "Since 'fox' ends in 'x', you need to add '-es'.",
    t2_h2: "The answer is 'foxes'.",
    t2_q: "What is the plural of 'church'?",
    t2_qa: "churches",
    t2_qb: "churchs",
    t2_qc: "church",
    t2_qd: "churchies",

    // T3: -y to -ies
    t3_title: "Plurals: -y becomes -ies",
    t3_text: "If a word ends in a consonant and then 'y', we change the 'y' to 'i' and add 'es'. One baby becomes two babies. One puppy becomes three puppies.",
    t3_inst: "Change 'city' to its plural form.",
    t3_h1: "Drop the 'y' and add 'ies'.",
    t3_h2: "The plural of 'city' is 'cities'.",
    t3_q: "What is the plural of 'story'?",
    t3_qa: "stories",
    t3_qb: "storys",
    t3_qc: "storyes",
    t3_qd: "storie",

    // T4: -f to -ves
    t4_title: "Plurals: -f becomes -ves",
    t4_text: "For many words ending in 'f' or 'fe', we change the 'f' or 'fe' to 'ves'. One leaf becomes many leaves. One wolf becomes a pack of wolves.",
    t4_inst: "Match the singular to its plural form.",
    t4_h1: "Remember, 'f' often changes to 'ves'.",
t4_h2: "leaf matches with leaves.",
    t4_ml1: "leaf", t4_mr1: "leaves",
    t4_ml2: "knife", t4_mr2: "knives",
    t4_ml3: "shelf", t4_mr3: "shelves",
    t4_q: "What is the plural of 'life'?",
    t4_qa: "lives",
    t4_qb: "lifes",
    t4_qc: "lifees",
    t4_qd: "livs",

    // T5: irregular child/children
    t5_title: "Irregular Plurals: child",
    t5_text: "Some words are tricky! They don't follow any rules. The plural of 'child' is not 'childs', it's 'children'.",
    t5_inst: "What is the plural of 'child'?",
    t5_h1: "It's an irregular word, so you don't just add 's'.",
    t5_h2: "One child, two children.",
    t5_q: "One child, many...",
    t5_qa: "children",
    t5_qb: "childs",
    t5_qc: "childes",
    t5_qd: "child",

    // T6: irregular foot/feet, tooth/teeth
    t6_title: "Irregular Plurals: foot & tooth",
    t6_text: "The vowels change in some irregular plurals. One foot becomes two feet. One tooth becomes a whole set of teeth.",
    t6_inst: "Sort the words into singular or plural.",
    t6_h1: "'foot' is one, 'feet' is more than one.",
    t6_h2: "'tooth' is singular, 'teeth' is plural.",
    t6_b1: "Singular (One)", t6_b2: "Plural (Many)",
    t6_i1: "foot", t6_i2: "tooth", t6_i3: "feet", t6_i4: "teeth",

    // T7: irregular mouse/mice, sheep/sheep
    t7_title: "Irregular Plurals: mouse & sheep",
    t7_text: "Some words change completely, like 'mouse' to 'mice'. And some don't change at all, like one 'sheep', two 'sheep'!",
    t7_inst: "Match the singular to the plural.",
    t7_h1: "mouse becomes mice, but sheep stays the same!",
    t7_h2: "One mouse, many mice.",
    t7_ml1: "mouse", t7_mr1: "mice",
    t7_ml2: "sheep", t7_mr2: "sheep",
    t7_ml3: "fish", t7_mr3: "fish",

    // T8: collective nouns (flock)
    t8_title: "Collective Nouns: Groups",
    t8_text: "A collective noun is a special word for a group of things. For example, a group of birds is called a 'flock'.",
    t8_inst: "A group of birds is a...",
    t8_h1: "It starts with the 'fl' blend.",
    t8_h2: "A flock of birds.",
    t8_q: "What do you call a group of birds flying together?",
    t8_qa: "A flock",
    t8_qb: "A school",
    t8_qc: "A pack",
    t8_qd: "A team",

    // T9: collective nouns (pack)
    t9_title: "Collective Nouns: pack",
    t9_text: "A group of wolves is called a 'pack'. A group of playing cards is also a 'pack'.",
    t9_inst: "Match the group to its collective noun.",
    t9_h1: "Wolves travel in a pack. Fish swim in a school.",
    t9_h2: "A pack of wolves.",
    t9_ml1: "wolves", t9_mr1: "pack",
    t9_ml2: "fish", t9_mr2: "school",
    t9_ml3: "lions", t9_mr3: "pride",

    // T10: collective nouns (school)
    t10_title: "Collective Nouns: school",
    t10_text: "Did you know a group of fish is called a 'school'? It's not the kind of school you go to learn!",
    t10_inst: "A large group of fish is called a ___.",
    t10_h1: "It's a place you go to learn, but for fish!",
    t10_h2: "A school of fish.",
    t10_q: "I saw a huge ___ of tuna in the ocean.",
    t10_qa: "school",
    t10_qb: "class",
    t10_qc: "flock",
    t10_qd: "bunch",
    
    // T11: abstract nouns (kindness)
    t11_title: "Abstract Nouns: Ideas & Feelings",
    t11_text: "Some nouns are things you can't see or touch. They are ideas or feelings, like 'love', 'happiness', or 'kindness'. These are called abstract nouns.",
    t11_inst: "Which of these is an abstract noun you can't touch?",
    t11_h1: "Can you hold 'love' in your hand?",
    t11_h2: "'Love' is a feeling, so it's an abstract noun.",
    t11_q: "Which word is an idea or feeling?",
    t11_qa: "Kindness",
    t11_qb: "Chair",
    t11_qc: "Water",
    t11_qd: "Tree",

    // T12: abstract nouns (bravery, happiness)
    t12_title: "More Abstract Nouns",
    t12_text: "Showing 'bravery' in a scary situation is an abstract noun. Feeling 'happiness' on your birthday is another one. You feel them, but you can't see them.",
    t12_inst: "Sort the words into things you can touch and things you can't.",
    t12_h1: "Can you touch bravery? Can you touch a ball?",
    t12_h2: "'Bravery' and 'happiness' are feelings. 'Ball' and 'book' are objects.",
    t12_b1: "Can Touch (Concrete)", t12_b2: "Can't Touch (Abstract)",
    t12_i1: "ball", t12_i2: "book", t12_i3: "bravery", t12_i4: "happiness",

    // T13: abstract nouns (freedom, love)
    t13_title: "Abstract Nouns: freedom & love",
    t13_text: "'Freedom' is the idea of being able to do what you want. 'Love' is a powerful feeling. Both are important abstract nouns.",
    t13_inst: "Fill in the blank with the correct abstract noun.",
    t13_h1: "What feeling do you have for your family and friends?",
    t13_h2: "The answer is 'love'.",
    t13_q: "A heart is often a symbol of ___.",
    t13_qa: "love",
    t13_qb: "chair",
    t13_qc: "water",
    t13_qd: "freedom",
    
    // T14: possessive nouns
    t14_title: "Possessive Nouns",
    t14_text: "To show that something belongs to someone, we use an apostrophe 's. For example, 'the dog's bone' means the bone belongs to the dog.",
    t14_inst: "Which phrase shows the toy belongs to the cat?",
    t14_h1: "Add an apostrophe 's' to 'cat'.",
    t14_h2: "The correct answer is 'the cat's toy'.",
    t14_q: "The bone belongs to the dog. This is...",
    t14_qa: "the dog's bone",
    t14_qb: "the dogs bone",
    t14_qc: "the dog bones",
    t14_qd: "the dogs' bone",

    // T15: mixed review
    t15_title: "Plural & Abstract Review",
    t15_text: "Let's test your knowledge! Remember the rules for plurals, and remember that abstract nouns are ideas or feelings.",
    t15_inst: "Which sentence is correct?",
    t15_h1: "Look at the plural of 'child' and the abstract noun 'happiness'.",
    t15_h2: "The children felt great happiness.",
    t15_q: "Which sentence is grammatically correct?",
    t15_qa: "The children felt great happiness.",
t15_qb: "The childs felt great happinesses.",
    t15_qc: "The children felt great happinesses.",
    t15_qd: "The childs felt great happiness.",
  },
};

export const PLURAL_POOL: PoolTopicDef[] = [
  // t1-t4: regular plurals
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "rhyme-pair", word1: "cat", word2: "cats", color: "#3B82F6" },
    interactive: { type: "gap-fill", sentence: "I have two dog___.", choices: ["s", "es", "ies", ""], correctIndex: 0, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "rhyme-pair", word1: "box", word2: "boxes", color: "#3B82F6" },
    interactive: { type: "gap-fill", sentence: "A group of fox___.", choices: ["es", "s", "ies", "s'"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "rhyme-pair", word1: "baby", word2: "babies", color: "#3B82F6" },
    interactive: { type: "gap-fill", sentence: "The country has many big cit___.", choices: ["ies", "ys", "s", "es"], correctIndex: 0, instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "rhyme-pair", word1: "wolf", word2: "wolves", color: "#3B82F6" },
    interactive: { type: "match-pairs", pairs: [{ left: "t4_ml1", right: "t4_mr1" }, { left: "t4_ml2", right: "t4_mr2" }, { left: "t4_ml3", right: "t4_mr3" }], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" }
  },
  // t5-t7: irregular plurals
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "rhyme-pair", word1: "child", word2: "children", color: "#3B82F6" },
    interactive: { type: "physics-slingshot", question: "t5_q", targets: [{ id: "a", text: "t5_qa", isCorrect: true }, { id: "b", text: "t5_qb", isCorrect: false }, { id: "c", text: "t5_qc", isCorrect: false }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "plurals_k3" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "two-groups", left: { items: ["foot", "tooth"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["feet", "teeth"], bg: "#E0F2FE", border: "#0EA5E9" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "s", label: "t6_b1" }, { id: "p", label: "t6_b2" }], items: [{ text: "t6_i1", bucketId: "s" }, { text: "t6_i2", bucketId: "s" }, { text: "t6_i3", bucketId: "p" }, { text: "t6_i4", bucketId: "p" }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "plurals_k3" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "rhyme-pair", word1: "mouse", word2: "mice", emoji1: "🐭", color: "#3B82F6" },
    interactive: { type: "match-pairs", pairs: [{ left: "t7_ml1", right: "t7_mr1" }, { left: "t7_ml2", right: "t7_mr2" }, { left: "t7_ml3", right: "t7_mr3" }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "plurals_k3" }
  },
  // t8-t10: collective nouns
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "simple-icon", icon: "🐦", title: "flock", bg: "#DBEAFE", color: "#3B82F6" },
    interactive: { type: "physics-slingshot", question: "t8_q", targets: [{ id: "a", text: "t8_qa", isCorrect: true }, { id: "b", text: "t8_qb", isCorrect: false }, { id: "c", text: "t8_qc", isCorrect: false }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "nouns_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐺", label: "pack" }, { emoji: "🐟", label: "school" }, { emoji: "🦁", label: "pride" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t9_ml1", right: "t9_mr1" }, { left: "t9_ml2", right: "t9_mr2" }, { left: "t9_ml3", right: "t9_mr3" }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "nouns_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "🐟", title: "school", bg: "#DBEAFE", color: "#3B82F6" },
    interactive: { type: "gap-fill", sentence: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], correctIndex: 0, instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "nouns_k2" }
  },
  // t11-t13: abstract nouns
  {
    difficulty: "medium", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "love", subtitle: "(an idea)", color: "#3B82F6" },
    interactive: { type: "physics-slingshot", question: "t11_q", targets: [{ id: "a", text: "t11_qa", isCorrect: true }, { id: "b", text: "t11_qb", isCorrect: false }, { id: "c", text: "t11_qc", isCorrect: false }], instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "nouns_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "two-groups", left: { items: ["ball", "book"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["bravery", "happiness"], bg: "#E0F2FE", border: "#0EA5E9" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "c", label: "t12_b1" }, { id: "a", label: "t12_b2" }], items: [{ text: "t12_i1", bucketId: "c" }, { text: "t12_i2", bucketId: "c" }, { text: "t12_i3", bucketId: "a" }, { text: "t12_i4", bucketId: "a" }], instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "nouns_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "❤️", title: "love", bg: "#DBEAFE", color: "#3B82F6" },
    interactive: { type: "gap-fill", sentence: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], correctIndex: 0, instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "nouns_k2" }
  },
  // t14: possessive nouns
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "dog's", subtitle: "(belongs to the dog)", color: "#3B82F6" },
    interactive: { type: "physics-slingshot", question: "t14_q", targets: [{ id: "a", text: "t14_qa", isCorrect: true }, { id: "b", text: "t14_qb", isCorrect: false }, { id: "c", text: "t14_qc", isCorrect: false }], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "plurals_k3" }
  },
  // t15: mixed review
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏆", title: "Review", bg: "#DBEAFE", color: "#3B82F6" },
    interactive: { type: "physics-slingshot", question: "t15_q", targets: [{ id: "a", text: "t15_qa", isCorrect: true }, { id: "b", text: "t15_qb", isCorrect: false }, { id: "c", text: "t15_qc", isCorrect: false }], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "plurals_k3" }
  },
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
