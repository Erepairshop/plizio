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
    t1_title: "Singular to Plural: Add -s",
    t1_text: "Many nouns become plural by simply adding an -s to the end. For example, 'cat' becomes 'cats'.",
    t1_inst: "Choose the correct plural form.",
    t1_h1: "Think about the simplest way to make a word plural.",
    t1_h2: "Just add -s! For example, 'dog' becomes 'dogs'.",
    t1_q: "What is the plural of 'book'?",
    t1_qa: "books",
    t1_qb: "bookes",
    t1_qc: "bookies",
    t1_qd: "booki",

    t2_title: "Singular to Plural: Add -es",
    t2_text: "When a noun ends with -s, -x, -ch, -sh, or -z, we usually add -es to make it plural. For example, 'box' becomes 'boxes'.",
    t2_inst: "Choose the correct plural form.",
    t2_h1: "Look at the end of the word. What letters do you see?",
    t2_h2: "Words ending in -s, -x, -ch, -sh, -z need -es. For example, 'bush' becomes 'bushes'.",
    t2_q: "What is the plural of 'watch'?",
    t2_qa: "watches",
    t2_qb: "watchs",
    t2_qc: "watchies",
    t2_qd: "watchz",

    t3_title: "Singular to Plural: -y to -ies",
    t3_text: "If a noun ends with a consonant followed by -y, we change the -y to -ies to make it plural. For example, 'baby' becomes 'babies'.",
    t3_inst: "Choose the correct plural form.",
    t3_h1: "Does the word end with a 'y'? Is there a consonant before it?",
    t3_h2: "Change -y to -ies. For example, 'fly' becomes 'flies'.",
    t3_q: "What is the plural of 'story'?",
    t3_qa: "stories",
    t3_qb: "storys",
    t3_qc: "storyes",
    t3_qd: "storiy",

    t4_title: "Singular to Plural: -f/-fe to -ves",
    t4_text: "Some nouns ending in -f or -fe change to -ves in the plural form. For example, 'leaf' becomes 'leaves', and 'knife' becomes 'knives'.",
    t4_inst: "Choose the correct plural form.",
    t4_h1: "Does the word end in 'f' or 'fe'?",
    t4_h2: "Change -f or -fe to -ves. For example, 'wolf' becomes 'wolves'.",
    t4_q: "What is the plural of 'shelf'?",
    t4_qa: "shelves",
    t4_qb: "shelfs",
    t4_qc: "shelfe",
    t4_qd: "shelfes",

    t5_title: "Irregular Plurals: Child & Foot",
    t5_text: "Some nouns have irregular plural forms that don't follow the usual rules. 'Child' becomes 'children' and 'foot' becomes 'feet'.",
    t5_inst: "Choose the correct plural form.",
    t5_h1: "These words don't just add -s or -es. They change completely!",
    t5_h2: "Remember 'child' is 'children' and 'foot' is 'feet'.",
    t5_q: "What is the plural of 'man'?",
    t5_qa: "men",
    t5_qb: "mans",
    t5_qc: "manes",
    t5_qd: "manies",

    t6_title: "Irregular Plurals: Tooth & Mouse",
    t6_text: "More irregular plurals! 'Tooth' becomes 'teeth' and 'mouse' becomes 'mice'. These are special words you need to remember.",
    t6_inst: "Choose the correct plural form.",
    t6_h1: "Think about how these words sound when there's more than one.",
    t6_h2: "'Tooth' is 'teeth', 'mouse' is 'mice'.",
    t6_q: "What is the plural of 'goose'?",
    t6_qa: "geese",
    t6_qb: "gooses",
    t6_qc: "goosies",
    t6_qd: "gooze",

    t7_title: "Irregular Plurals: Same Form",
    t7_text: "Some irregular nouns have the same form for both singular and plural. For example, 'sheep' stays 'sheep', and 'deer' stays 'deer'.",
    t7_inst: "Choose the correct plural form.",
    t7_h1: "Don't add -s or -es to these words. They don't change!",
    t7_h2: "One 'sheep', many 'sheep'. One 'fish', many 'fish'.",
    t7_q: "What is the plural of 'fish'?",
    t7_qa: "fish",
    t7_qb: "fishes",
    t7_qc: "fishs",
    t7_qd: "fishie",

    t8_title: "Collective Nouns: Groups of Animals",
    t8_text: "A collective noun is a word that names a group of people, animals, or things. For example, we say 'a flock of birds' or 'a school of fish'.",
    t8_inst: "Choose the correct collective noun.",
    t8_h1: "How do we describe a group of these animals?",
    t8_h2: "Think about 'a pack of wolves'.",
    t8_q: "What is a group of lions called?",
    t8_qa: "a pride of lions",
    t8_qb: "a school of lions",
    t8_qc: "a flock of lions",
    t8_qd: "a swarm of lions",

    t9_title: "Collective Nouns: People and Things",
    t9_text: "Collective nouns are also used for people and things. For example, 'a team of players' or 'a bundle of sticks'.",
    t9_inst: "Choose the correct collective noun.",
    t9_h1: "What word describes a group of these items?",
    t9_h2: "Think about 'a crowd of people'.",
    t9_q: "What is a group of flowers called?",
    t9_qa: "a bouquet of flowers",
    t9_qb: "a pack of flowers",
    t9_qc: "a flock of flowers",
    t9_qd: "a school of flowers",

    t10_title: "Identifying Collective Nouns",
    t10_text: "It's important to recognize collective nouns in sentences to understand which group is being referred to.",
    t10_inst: "Identify the collective noun in the sentence.",
    t10_h1: "Which word refers to a group?",
    t10_h2: "In 'A swarm of bees flew by', 'swarm' is the collective noun.",
    t10_q: "Find the collective noun: 'The jury delivered its verdict.'",
    t10_qa: "jury",
    t10_qb: "delivered",
    t10_qc: "verdict",
    t10_qd: "its",

    t11_title: "Abstract Nouns: Feelings",
    t11_text: "Abstract nouns are words that name ideas, feelings, qualities, or concepts that cannot be physically seen or touched. For example, 'happiness' is a feeling.",
    t11_inst: "Choose the abstract noun.",
    t11_h1: "Can you touch it? Can you see it? If not, it might be an abstract noun.",
    t11_h2: "Joy, sadness, and love are all abstract nouns.",
    t11_q: "Which word is an abstract noun?",
    t11_qa: "courage",
    t11_qb: "table",
    t11_qc: "dog",
    t11_qd: "tree",

    t12_title: "Abstract Nouns: Qualities",
    t12_text: "Qualities like 'bravery', 'honesty', and 'kindness' are also abstract nouns. They describe characteristics.",
    t12_inst: "Choose the abstract noun.",
    t12_h1: "Think about words that describe a person's character or a trait.",
    t12_h2: "Patience and wisdom are abstract nouns.",
    t12_q: "Which word is an abstract noun?",
    t12_qa: "freedom",
    t12_qb: "book",
    t12_qc: "car",
    t12_qd: "house",

    t13_title: "Abstract Nouns: Concepts",
    t13_text: "Concepts like 'freedom', 'justice', and 'time' are abstract nouns. They are ideas that we think about.",
    t13_inst: "Choose the abstract noun.",
    t13_h1: "Which word represents an idea or concept?",
    t13_h2: "Knowledge and peace are abstract nouns.",
    t13_q: "Which word is an abstract noun?",
    t13_qa: "truth",
    t13_qb: "chair",
    t13_qc: "apple",
    t13_qd: "cloud",

    t14_title: "Possessive Nouns",
    t14_text: "Possessive nouns show ownership. We usually add an apostrophe and an -s ('s) to a singular noun. For plural nouns ending in -s, we just add an apostrophe (s'). For irregular plural nouns, we add ('s).",
    t14_inst: "Choose the correct possessive form.",
    t14_h1: "Who owns what? How do we show it?",
    t14_h2: "The cat's toy (singular), the girls' toys (plural ending in -s), the children's toys (irregular plural).",
    t14_q: "Choose the correct possessive form for 'the car of my father'.",
    t14_qa: "my father's car",
    t14_qb: "my fathers car",
    t14_qc: "my father car",
    t14_qd: "my fathers' car",

    t15_title: "Mixed Plurals & Abstract Nouns Review",
    t15_text: "Let's review everything about plurals and abstract nouns! Remember the rules for regular and irregular plurals, and how to identify abstract nouns.",
    t15_inst: "Choose the best answer.",
    t15_h1: "Read the question carefully and recall the rules you've learned.",
    t15_h2: "Is it a regular plural? An irregular one? Or an abstract concept?",
    t15_q: "Which of these words is both a plural and an abstract noun?",
    t15_qa: "feelings",
    t15_qb: "boxes",
    t15_qc: "children",
    t15_qd: "happinesses",
  },
};

export const PLURAL_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "cat", highlightChars: ["s"], color: "#3B82F6", subtitle: "cats" },
    interactive: {
      type: "gap-fill",
      instruction: "t1_inst",
      sentence: "The plural of 'book' is ___.",
      choices: ["books", "bookes", "bookies", "booki"],
      correctIndex: 0,
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"],
      answer: "t1_qa",
    },
  },
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "word-display", word: "box", highlightChars: ["es"], color: "#3B82F6", subtitle: "boxes" },
    interactive: {
      type: "gap-fill",
      instruction: "t2_inst",
      sentence: "The plural of 'church' is ___.",
      choices: ["churches", "churchs", "churchies", "churchz"],
      correctIndex: 0,
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"],
      answer: "t2_qa",
    },
  },
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "baby", highlightChars: ["ies"], color: "#3B82F6", subtitle: "babies" },
    interactive: {
      type: "gap-fill",
      instruction: "t3_inst",
      sentence: "The plural of 'city' is ___.",
      choices: ["cities", "citys", "cityes", "citiy"],
      correctIndex: 0,
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"],
      answer: "t3_qa",
    },
  },
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "leaf", highlightChars: ["ves"], color: "#3B82F6", subtitle: "leaves" },
    interactive: {
      type: "gap-fill",
      instruction: "t4_inst",
      sentence: "The plural of 'wolf' is ___.",
      choices: ["wolves", "wolfs", "wolfe", "wolfes"],
      correctIndex: 0,
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"],
      answer: "t4_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "child", highlightChars: ["ren"], color: "#3B82F6", subtitle: "children" },
    interactive: {
      type: "gap-fill",
      instruction: "t5_inst",
      sentence: "The plural of 'person' is ___.",
      choices: ["people", "persons", "persones", "peoples"],
      correctIndex: 0,
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"],
      answer: "t5_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "word-display", word: "tooth", highlightChars: ["e"], color: "#3B82F6", subtitle: "teeth" },
    interactive: {
      type: "gap-fill",
      instruction: "t6_inst",
      sentence: "The plural of 'louse' is ___.",
      choices: ["lice", "louses", "lousees", "lousie"],
      correctIndex: 0,
      hint1: "t6_h1",
      hint2: "t6_h2",
    },
    quiz: {
      question: "t6_q",
      choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"],
      answer: "t6_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "word-display", word: "sheep", highlightChars: [], color: "#3B82F6", subtitle: "sheep" },
    interactive: {
      type: "gap-fill",
      instruction: "t7_inst",
      sentence: "The plural of 'deer' is ___.",
      choices: ["deer", "deers", "deeres", "deerie"],
      correctIndex: 0,
      hint1: "t7_h1",
      hint2: "t7_h2",
    },
    quiz: {
      question: "t7_q",
      choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"],
      answer: "t7_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐦", label: "flock" }], bg: "#3B82F6" },
    interactive: {
      type: "gap-fill",
      instruction: "t8_inst",
      sentence: "A group of birds is called a ___.",
      choices: ["flock", "pack", "school", "herd"],
      correctIndex: 0,
      hint1: "t8_h1",
      hint2: "t8_h2",
    },
    quiz: {
      question: "t8_q",
      choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"],
      answer: "t8_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "icon-grid", items: [{ emoji: "👨‍👩‍👧‍👦", label: "crowd" }], bg: "#3B82F6" },
    interactive: {
      type: "gap-fill",
      instruction: "t9_inst",
      sentence: "A group of players is called a ___.",
      choices: ["team", "band", "gang", "crew"],
      correctIndex: 0,
      hint1: "t9_h1",
      hint2: "t9_h2",
    },
    quiz: {
      question: "t9_q",
      choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"],
      answer: "t9_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "sentence-display", words: ["A", "swarm", "of", "bees", "flew", "by."], highlightIndices: [1], color: "#3B82F6" },
    interactive: {
      type: "highlight-text",
      instruction: "t10_inst",
      tokens: ["A", "herd", "of", "cows", "grazed", "in", "the", "field."],
      correctIndices: [1],
      hint1: "t10_h1",
      hint2: "t10_h2",
    },
    quiz: {
      question: "t10_q",
      choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"],
      answer: "t10_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "simple-icon", icon: "😄", title: "Happiness", bg: "#3B82F6" },
    interactive: {
      type: "gap-fill",
      instruction: "t11_inst",
      sentence: "Which of these is an abstract noun?",
      choices: ["happiness", "chair", "cat", "book"],
      correctIndex: 0,
      hint1: "t11_h1",
      hint2: "t11_h2",
    },
    quiz: {
      question: "t11_q",
      choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"],
      answer: "t11_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🧠", title: "Wisdom", bg: "#3B82F6" },
    interactive: {
      type: "gap-fill",
      instruction: "t12_inst",
      sentence: "Which of these is an abstract noun?",
      choices: ["bravery", "table", "flower", "car"],
      correctIndex: 0,
      hint1: "t12_h1",
      hint2: "t12_h2",
    },
    quiz: {
      question: "t12_q",
      choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"],
      answer: "t12_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "simple-icon", icon: "🕊️", title: "Peace", bg: "#3B82F6" },
    interactive: {
      type: "gap-fill",
      instruction: "t13_inst",
      sentence: "Which of these is an abstract noun?",
      choices: ["justice", "tree", "bird", "apple"],
      correctIndex: 0,
      hint1: "t13_h1",
      hint2: "t13_h2",
    },
    quiz: {
      question: "t13_q",
      choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"],
      answer: "t13_qa",
    },
  },
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "word-display", word: "dog's", highlightChars: ["'s"], color: "#3B82F6", subtitle: "dog's bone" },
    interactive: {
      type: "gap-fill",
      instruction: "t14_inst",
      sentence: "Choose the correct possessive form for 'the book of John'.",
      choices: ["John's book", "Johns book", "John book", "Johns' book"],
      correctIndex: 0,
      hint1: "t14_h1",
      hint2: "t14_h2",
    },
    quiz: {
      question: "t14_q",
      choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"],
      answer: "t14_qa",
    },
  },
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "✨", title: "Review", bg: "#3B82F6" },
    interactive: {
      type: "gap-fill",
      instruction: "t15_inst",
      sentence: "Which of these words is a plural form?",
      choices: ["geese", "goose", "child", "man"],
      correctIndex: 0,
      hint1: "t15_h1",
      hint2: "t15_h2",
    },
    quiz: {
      question: "t15_q",
      choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"],
      answer: "t15_qa",
    },
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
    t1_title: "Simple Present Tense",
    t1_text: "The simple present tense is used for habits, routines, and facts. For example, 'I walk' or 'She walks'.",
    t1_inst: "Complete the sentence with the correct present tense verb.",
    t1_h1: "Remember to add -s for he/she/it!",
    t1_h2: "He runs, they run.",
    t1_q: "Which is correct: 'He ___ every day.'",
    t1_qa: "runs",
    t1_qb: "run",
    t1_qc: "running",
    t1_qd: "ran",

    t2_title: "Simple Present Tense: Verbs ending in -s, -x, -ch, -sh, -z, -o",
    t2_text: "For verbs ending in -s, -x, -ch, -sh, -z, or -o, add -es for he/she/it. For example, 'She watches TV'.",
    t2_inst: "Complete the sentence with the correct present tense verb.",
    t2_h1: "Think about the ending of the verb and the subject.",
    t2_h2: "He watches, she goes.",
    t2_q: "Which is correct: 'He ___ to school every day.'",
    t2_qa: "goes",
    t2_qb: "go",
    t2_qc: "going",
    t2_qd: "went",

    t3_title: "Simple Present Tense: Negative",
    t3_text: "To make a sentence negative in the simple present tense, use 'do not' (don't) or 'does not' (doesn't). For example, 'I don't like it' or 'She doesn't run'.",
    t3_inst: "Complete the sentence with the correct negative present tense verb.",
    t3_h1: "Use 'doesn't' for he/she/it, and 'don't' for I/you/we/they.",
    t3_h2: "He doesn't play, they don't play.",
    t3_q: "Which is correct: 'They ___ play soccer.'",
    t3_qa: "don't",
    t3_qb: "doesn't",
    t3_qc: "not",
    t3_qd: "do nots",

    t4_title: "Regular Past Tense: Add -ed",
    t4_text: "For most regular verbs, we add -ed to the end to form the past tense. For example, 'walk' becomes 'walked'.",
    t4_inst: "Choose the correct past tense verb.",
    t4_h1: "Most verbs just add -ed.",
    t4_h2: "Play -> Played, Jump -> Jumped.",
    t4_q: "What is the past tense of 'talk'?",
    t4_qa: "talked",
    t4_qb: "talk",
    t4_qc: "talken",
    t4_qd: "talkt",

    t5_title: "Regular Past Tense: -e to -d",
    t5_text: "If a regular verb already ends in -e, we just add -d to form the past tense. For example, 'love' becomes 'loved'.",
    t5_inst: "Choose the correct past tense verb.",
    t5_h1: "If the verb already has an 'e', you only need to add 'd'.",
    t5_h2: "Dance -> Danced, Bake -> Baked.",
    t5_q: "What is the past tense of 'live'?",
    t5_qa: "lived",
    t5_qb: "liveed",
    t5_qc: "livd",
    t5_qd: "liven",

    t6_title: "Regular Past Tense: -y to -ied",
    t6_text: "If a regular verb ends in a consonant followed by -y, we change the -y to -ied. For example, 'study' becomes 'studied'.",
    t6_inst: "Choose the correct past tense verb.",
    t6_h1: "Similar to plural nouns, change the 'y' to 'i' and then add 'ed'.",
    t6_h2: "Cry -> Cried, Try -> Tried.",
    t6_q: "What is the past tense of 'carry'?",
    t6_qa: "carried",
    t6_qb: "carryed",
    t6_qc: "carrys",
    t6_qd: "carrid",

    t7_title: "Irregular Past Tense: Run, See, Go",
    t7_text: "Irregular verbs don't follow the -ed rule. Their past tense forms are unique. 'Run' becomes 'ran', 'see' becomes 'saw', and 'go' becomes 'went'.",
    t7_inst: "Choose the correct past tense verb.",
    t7_h1: "These verbs change completely. You need to remember them.",
    t7_h2: "Run -> Ran, See -> Saw, Go -> Went.",
    t7_q: "What is the past tense of 'eat'?",
    t7_qa: "ate",
    t7_qb: "eated",
    t7_qc: "eat",
    t7_qd: "eaten",

    t8_title: "Irregular Past Tense: Come, Buy, Take",
    t8_text: "More irregular verbs! 'Come' becomes 'came', 'buy' becomes 'bought', and 'take' becomes 'took'. Practice these to remember them.",
    t8_inst: "Choose the correct past tense verb.",
    t8_h1: "These words have special past tense forms.",
    t8_h2: "Come -> Came, Buy -> Bought, Take -> Took.",
    t8_q: "What is the past tense of 'sing'?",
    t8_qa: "sang",
    t8_qb: "singed",
    t8_qc: "sung",
    t8_qd: "singt",

    t9_title: "Irregular Past Tense: Speak, Drink, Write",
    t9_text: "Let's learn three more irregular verbs: 'speak' becomes 'spoke', 'drink' becomes 'drank', and 'write' becomes 'wrote'.",
    t9_inst: "Choose the correct past tense verb.",
    t9_h1: "These verbs are tricky, but you can learn them!",
    t9_h2: "Speak -> Spoke, Drink -> Drank, Write -> Wrote.",
    t9_q: "What is the past tense of 'swim'?",
    t9_qa: "swam",
    t9_qb: "swimed",
    t9_qc: "swum",
    t9_qd: "swimmed",

    t10_title: "Future Tense: Will + Verb",
    t10_text: "To form the future tense, we use 'will' before the base form of the verb. For example, 'I will run' or 'She will go'.",
    t10_inst: "Complete the sentence with the correct future tense verb.",
    t10_h1: "It's always 'will' + the original verb!",
    t10_h2: "He will play, they will eat.",
    t10_q: "Which is correct: 'We ___ to the park tomorrow.'",
    t10_qa: "will go",
    t10_qb: "go",
    t10_qc: "went",
    t10_qd: "going",

    t11_title: "Future Tense: Going to + Verb",
    t11_text: "We can also use 'be going to' + the base form of the verb for future plans. For example, 'I am going to read a book'.",
    t11_inst: "Complete the sentence with the correct future tense verb.",
    t11_h1: "Remember to use the correct form of 'to be' (am, is, are) before 'going to'.",
    t11_h2: "She is going to sing, they are going to dance.",
    t11_q: "Which is correct: 'He ___ to watch a movie tonight.'",
    t11_qa: "is going to",
    t11_qb: "will",
    t11_qc: "goes to",
    t11_qd: "went to",

    t12_title: "Comparative Adjectives",
    t12_text: "Comparative adjectives compare two things. For most adjectives, we add -er (e.g., 'big' becomes 'bigger'). For longer adjectives, we use 'more' (e.g., 'beautiful' becomes 'more beautiful').",
    t12_inst: "Choose the correct comparative adjective.",
    t12_h1: "Think about comparing two things. One is 'bigger' than the other.",
    t12_h2: "Fast -> Faster, happy -> happier.",
    t12_q: "Complete: 'The elephant is ___ than the mouse.'",
    t12_qa: "bigger",
    t12_qb: "big",
    t12_qc: "biggest",
    t12_qd: "more big",

    t13_title: "Superlative Adjectives",
    t13_text: "Superlative adjectives compare three or more things and show which one is the most. For most adjectives, we add -est (e.g., 'big' becomes 'biggest'). For longer adjectives, we use 'most' (e.g., 'beautiful' becomes 'most beautiful').",
    t13_inst: "Choose the correct superlative adjective.",
    t13_h1: "Think about the 'most' of something. The 'tallest' building.",
    t13_h2: "Fast -> Fastest, happy -> happiest.",
    t13_q: "Complete: 'Mount Everest is the ___ mountain in the world.'",
    t13_qa: "highest",
    t13_qb: "higher",
    t13_qc: "high",
    t13_qd: "most high",

    t14_title: "Tense Identification in Sentences",
    t14_text: "Understanding the tense of a verb helps us know when an action happened. Look for clues like -ed endings or words like 'will' and 'yesterday'.",
    t14_inst: "Identify the tense of the verb in the sentence.",
    t14_h1: "When did the action happen? Past, present, or future?",
    t14_h2: "'She sings' is present. 'She sang' is past. 'She will sing' is future.",
    t14_q: "Identify the tense: 'They will visit their grandmother tomorrow.'",
    t14_qa: "Future Tense",
    t14_qb: "Present Tense",
    t14_qc: "Past Tense",
    t14_qd: "No tense",

    t15_title: "Mixed Tense Review",
    t15_text: "Let's review all tenses! Practice identifying and using present, past, and future tense verbs correctly.",
    t15_inst: "Choose the correct verb form for the sentence.",
    t15_h1: "Think about when the action happened or will happen.",
    t15_h2: "Is it now, before, or later?",
    t15_q: "Which is correct: 'Yesterday, I ___ to the store.'",
    t15_qa: "went",
    t15_qb: "go",
    t15_qc: "will go",
    t15_qd: "going",
  },
};

export const TENSE_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "walk", highlightChars: ["s"], color: "#EF4444", subtitle: "walks" },
    interactive: {
      type: "gap-fill",
      instruction: "t1_inst",
      sentence: "She ___ books.",
      choices: ["reads", "read", "reading", "readed"],
      correctIndex: 0,
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"],
      answer: "t1_qa",
    },
  },
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "word-display", word: "watch", highlightChars: ["es"], color: "#EF4444", subtitle: "watches" },
    interactive: {
      type: "gap-fill",
      instruction: "t2_inst",
      sentence: "He ___ TV every evening.",
      choices: ["watches", "watch", "watching", "watched"],
      correctIndex: 0,
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"],
      answer: "t2_qa",
    },
  },
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "not", highlightChars: ["don't"], color: "#EF4444", subtitle: "don't" },
    interactive: {
      type: "gap-fill",
      instruction: "t3_inst",
      sentence: "I ___ like broccoli.",
      choices: ["don't", "doesn't", "not", "do nots"],
      correctIndex: 0,
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"],
      answer: "t3_qa",
    },
  },
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "walk", highlightChars: ["ed"], color: "#EF4444", subtitle: "walked" },
    interactive: {
      type: "gap-fill",
      instruction: "t4_inst",
      sentence: "Yesterday, I ___ to the park.",
      choices: ["walked", "walk", "walking", "walks"],
      correctIndex: 0,
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"],
      answer: "t4_qa",
    },
  },
  {
    difficulty: "easy",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "love", highlightChars: ["d"], color: "#EF4444", subtitle: "loved" },
    interactive: {
      type: "gap-fill",
      instruction: "t5_inst",
      sentence: "She ___ to dance last night.",
      choices: ["danced", "dance", "dancing", "dances"],
      correctIndex: 0,
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"],
      answer: "t5_qa",
    },
  },
  {
    difficulty: "easy",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "word-display", word: "study", highlightChars: ["ied"], color: "#EF4444", subtitle: "studied" },
    interactive: {
      type: "gap-fill",
      instruction: "t6_inst",
      sentence: "He ___ for his test yesterday.",
      choices: ["studied", "study", "studying", "studies"],
      correctIndex: 0,
      hint1: "t6_h1",
      hint2: "t6_h2",
    },
    quiz: {
      question: "t6_q",
      choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"],
      answer: "t6_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "word-display", word: "run", highlightChars: ["ran"], color: "#EF4444", subtitle: "ran" },
    interactive: {
      type: "gap-fill",
      instruction: "t7_inst",
      sentence: "The boy ___ very fast.",
      choices: ["ran", "run", "runs", "running"],
      correctIndex: 0,
      hint1: "t7_h1",
      hint2: "t7_h2",
    },
    quiz: {
      question: "t7_q",
      choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"],
      answer: "t7_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "word-display", word: "buy", highlightChars: ["bought"], color: "#EF4444", subtitle: "bought" },
    interactive: {
      type: "gap-fill",
      instruction: "t8_inst",
      sentence: "She ___ a new dress yesterday.",
      choices: ["bought", "buy", "buys", "buying"],
      correctIndex: 0,
      hint1: "t8_h1",
      hint2: "t8_h2",
    },
    quiz: {
      question: "t8_q",
      choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"],
      answer: "t8_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "word-display", word: "speak", highlightChars: ["spoke"], color: "#EF4444", subtitle: "spoke" },
    interactive: {
      type: "gap-fill",
      instruction: "t9_inst",
      sentence: "He ___ to his friend on the phone.",
      choices: ["spoke", "speak", "speaks", "speaking"],
      correctIndex: 0,
      hint1: "t9_h1",
      hint2: "t9_h2",
    },
    quiz: {
      question: "t9_q",
      choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"],
      answer: "t9_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "word-display", word: "go", highlightChars: ["will"], color: "#EF4444", subtitle: "will go" },
    interactive: {
      type: "gap-fill",
      instruction: "t10_inst",
      sentence: "They ___ to the beach tomorrow.",
      choices: ["will go", "go", "went", "going"],
      correctIndex: 0,
      hint1: "t10_h1",
      hint2: "t10_h2",
    },
    quiz: {
      question: "t10_q",
      choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"],
      answer: "t10_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "word-display", word: "read", highlightChars: ["going to"], color: "#EF4444", subtitle: "is going to read" },
    interactive: {
      type: "gap-fill",
      instruction: "t11_inst",
      sentence: "She ___ a book tonight.",
      choices: ["is going to read", "will read", "reads", "read"],
      correctIndex: 0,
      hint1: "t11_h1",
      hint2: "t11_h2",
    },
    quiz: {
      question: "t11_q",
      choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"],
      answer: "t11_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "word-display", word: "big", highlightChars: ["ger"], color: "#EF4444", subtitle: "bigger" },
    interactive: {
      type: "gap-fill",
      instruction: "t12_inst",
      sentence: "The dog is ___ than the cat.",
      choices: ["bigger", "big", "biggest", "more big"],
      correctIndex: 0,
      hint1: "t12_h1",
      hint2: "t12_h2",
    },
    quiz: {
      question: "t12_q",
      choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"],
      answer: "t12_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "word-display", word: "tall", highlightChars: ["est"], color: "#EF4444", subtitle: "tallest" },
    interactive: {
      type: "gap-fill",
      instruction: "t13_inst",
      sentence: "He is the ___ boy in the class.",
      choices: ["tallest", "taller", "tall", "most tall"],
      correctIndex: 0,
      hint1: "t13_h1",
      hint2: "t13_h2",
    },
    quiz: {
      question: "t13_q",
      choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"],
      answer: "t13_qa",
    },
  },
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "sentence-display", words: ["She", "walked", "to", "school", "."], highlightIndices: [1], color: "#EF4444" },
    interactive: {
      type: "highlight-text",
      instruction: "t14_inst",
      tokens: ["Yesterday", ",", "I", "ate", "an", "apple", "."],
      correctIndices: [3],
      hint1: "t14_h1",
      hint2: "t14_h2",
    },
    quiz: {
      question: "t14_q",
      choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"],
      answer: "t14_qa",
    },
  },
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "⏰", title: "Tense Review", bg: "#EF4444" },
    interactive: {
      type: "gap-fill",
      instruction: "t15_inst",
      sentence: "Tomorrow, I ___ to the beach.",
      choices: ["will go", "go", "went", "going"],
      correctIndex: 0,
      hint1: "t15_h1",
      hint2: "t15_h2",
    },
    quiz: {
      question: "t15_q",
      choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"],
      answer: "t15_qa",
    },
  },
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i3 — Adverb Archipelago (🌀, #10B981)
// Topics: adverbs of manner (how), adverbs of time (when), adverbs of place (where),
//         coordinating conjunctions (and/but/or/so/because)
// ─────────────────────────────────────────────────────────────────────────────

export const ADVERB_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Adverb Archipelago",

    // T1-T3: Adverbs of manner
    t1_title: "Adverbs of Manner: How Do Things Happen?",
    t1_text: "Adverbs of manner describe HOW an action is done. They usually end in -ly. For example, 'She ran quickly' or 'He spoke softly'.",
    t1_inst: "Choose the adverb of manner that describes how the action is done.",
    t1_h1: "Look for a word that ends in -ly and describes HOW.",
    t1_h2: "Quickly, slowly, loudly, quietly are all adverbs of manner.",
    t1_q: "Which sentence has an adverb of manner?",
    t1_qa: "She danced gracefully.",
    t1_qb: "She danced on Monday.",
    t1_qc: "She danced at school.",
    t1_qd: "She danced with friends.",

    t2_title: "Adverbs of Manner: Describing Actions",
    t2_text: "More adverbs of manner: quickly, slowly, loudly, quietly, carefully, brightly, happily, sadly, softly, harshly.",
    t2_inst: "Choose the sentence with an adverb of manner.",
    t2_h1: "Think about HOW the action is done.",
    t2_h2: "The dog ran quickly through the park.",
    t2_q: "What is the adverb of manner in 'The students worked carefully on their project'?",
    t2_qa: "carefully",
    t2_qb: "students",
    t2_qc: "project",
    t2_qd: "worked",

    t3_title: "Adverbs of Manner: -ly Words",
    t3_text: "Most adverbs of manner are formed by adding -ly to an adjective. Example: quick → quickly, sad → sadly, bright → brightly.",
    t3_inst: "Change the adjective to an adverb of manner by adding -ly.",
    t3_h1: "Add -ly to the end of the adjective.",
    t3_h2: "Slow + ly = slowly, Happy + ly = happily.",
    t3_q: "What is the adverb form of 'gentle'?",
    t3_qa: "gently",
    t3_qb: "gentlely",
    t3_qc: "gentle",
    t3_qd: "gentlily",

    // T4-T6: Adverbs of time
    t4_title: "Adverbs of Time: When Does It Happen?",
    t4_text: "Adverbs of time describe WHEN an action happens. Examples: yesterday, today, tomorrow, now, soon, earlier, later, always, never, often, sometimes.",
    t4_inst: "Choose the adverb of time that tells WHEN.",
    t4_h1: "Look for a word that answers WHEN did the action happen.",
    t4_h2: "Yesterday, today, tomorrow, now, soon are adverbs of time.",
    t4_q: "Which sentence has an adverb of time?",
    t4_qa: "We went to the beach yesterday.",
    t4_qb: "We went to the beach happily.",
    t4_qc: "We went to the beach with friends.",
    t4_qd: "We went to the beach by car.",

    t5_title: "Adverbs of Time: Past, Present, Future",
    t5_text: "Past: yesterday, earlier, before. Present: today, now, right now. Future: tomorrow, soon, later.",
    t5_inst: "Choose the correct adverb of time for the sentence.",
    t5_h1: "Think about whether it's past, present, or future.",
    t5_h2: "Yesterday is past, now is present, tomorrow is future.",
    t5_q: "Which adverb of time means 'at some point in the future'?",
    t5_qa: "soon",
    t5_qb: "already",
    t5_qc: "just",
    t5_qd: "always",

    t6_title: "Adverbs of Time: Frequency",
    t6_text: "Frequency adverbs tell HOW OFTEN: always, usually, often, sometimes, rarely, never.",
    t6_inst: "Choose the frequency adverb that fits the sentence.",
    t6_h1: "Frequency adverbs describe how often something happens.",
    t6_h2: "Always (every time), never (no time), sometimes (some times).",
    t6_q: "What does 'rarely' mean?",
    t6_qa: "Not very often",
    t6_qb: "Very often",
    t6_qc: "Never",
    t6_qd: "Always",

    // T7-T9: Adverbs of place
    t7_title: "Adverbs of Place: Where Does It Happen?",
    t7_text: "Adverbs of place describe WHERE an action happens. Examples: here, there, everywhere, somewhere, nowhere, up, down, inside, outside.",
    t7_inst: "Choose the adverb of place that tells WHERE.",
    t7_h1: "Look for a word that answers WHERE did the action happen.",
    t7_h2: "Here, there, outside, inside are adverbs of place.",
    t7_q: "Which sentence has an adverb of place?",
    t7_qa: "The ball rolled down the hill.",
    t7_qb: "The ball rolled quickly.",
    t7_qc: "The ball rolled yesterday.",
    t7_qd: "The ball rolled far.",

    t8_title: "Adverbs of Place: Directions",
    t8_text: "Adverbs of place include directions: up, down, forward, backward, left, right, east, west, north, south.",
    t8_inst: "Choose the correct adverb of place.",
    t8_h1: "Think about direction or location.",
    t8_h2: "Up, down, forward, backward, left, right are adverbs of place.",
    t8_q: "What does 'The bird flew high' tell us?",
    t8_qa: "Where the bird went (upward)",
    t8_qb: "How the bird flew",
    t8_qc: "When the bird flew",
    t8_qd: "Why the bird flew",

    t9_title: "Adverbs of Place: Near and Far",
    t9_text: "Adverbs that describe proximity: near, far, close, distant, here (near speaker), there (away from speaker).",
    t9_inst: "Choose the adverb of place about location.",
    t9_h1: "Think about how close or far something is.",
    t9_h2: "Near, far, here, there describe location.",
    t9_q: "In 'The store is nearby', what does 'nearby' tell us?",
    t9_qa: "Where the store is (close)",
    t9_qb: "When we visit the store",
    t9_qc: "How we go to the store",
    t9_qd: "Why the store exists",

    // T10-T12: Coordinating conjunctions
    t10_title: "Conjunctions: Connecting Ideas with 'And'",
    t10_text: "'And' connects two similar ideas or things. Example: 'She likes apples AND oranges.' 'I swim AND play soccer.'",
    t10_inst: "Choose a sentence with 'and' used correctly.",
    t10_h1: "'And' joins similar ideas or lists of things.",
    t10_h2: "Cats and dogs, reading and writing.",
    t10_q: "Which sentence uses 'and' correctly?",
    t10_qa: "She ate breakfast and went to school.",
    t10_qb: "She ate breakfast and therefore went to school.",
    t10_qc: "She ate breakfast and if she went to school.",
    t10_qd: "She ate breakfast and because she went to school.",

    t11_title: "Conjunctions: Connecting Contrasting Ideas with 'But'",
    t11_text: "'But' connects two contrasting ideas. Example: 'I like ice cream BUT it is cold.' 'She is tall BUT her brother is short.'",
    t11_inst: "Choose a sentence where 'but' shows contrast.",
    t11_h1: "'But' joins ideas that are opposite or different.",
    t11_h2: "I want to play, but I have homework.",
    t11_q: "Which sentence uses 'but' correctly?",
    t11_qa: "It was raining, but we went outside anyway.",
    t11_qb: "It was raining but it was sunny.",
    t11_qc: "It was raining but we saw the sky.",
    t11_qd: "It was raining but the weather was wet.",

    t12_title: "Conjunctions: Offering Choices with 'Or'",
    t12_text: "'Or' offers a choice between two ideas. Example: 'You can have tea OR coffee.' 'We can go to the park OR stay home.'",
    t12_inst: "Choose a sentence where 'or' offers a choice.",
    t12_h1: "'Or' gives options or alternatives.",
    t12_h2: "Do you want pizza or pasta?",
    t12_q: "Which sentence uses 'or' correctly?",
    t12_qa: "You can read a book or watch a movie.",
    t12_qb: "You can read a book or you already read it.",
    t12_qc: "You can read a book or I don't like books.",
    t12_qd: "You can read a book or it is interesting.",

    // T13-T15: Mixed/review
    t13_title: "Conjunctions: Cause with 'Because' and 'So'",
    t13_text: "'Because' shows WHY (cause). 'So' shows result. Example: 'We stayed inside BECAUSE it rained.' 'It rained SO we stayed inside.'",
    t13_inst: "Choose the sentence with correct use of 'because' or 'so'.",
    t13_h1: "Because = why, So = result.",
    t13_h2: "I was tired, so I slept. I slept because I was tired.",
    t13_q: "Which sentence is correct?",
    t13_qa: "She was hungry, so she ate lunch.",
    t13_qb: "She was hungry because she ate lunch.",
    t13_qc: "She ate lunch so she was hungry.",
    t13_qd: "She ate lunch and she was hungry.",

    t14_title: "Adverbs and Conjunctions Mixed Review",
    t14_text: "Review: Adverbs modify verbs (tell HOW/WHEN/WHERE). Conjunctions connect ideas (and/but/or/so/because).",
    t14_inst: "Identify the part of speech and its function.",
    t14_h1: "Is it modifying a verb (adverb) or connecting ideas (conjunction)?",
    t14_h2: "Quickly = adverb (how), and = conjunction (connect).",
    t14_q: "In 'I ran quickly and quietly', what do 'quickly' and 'quietly' do?",
    t14_qa: "Describe how the action is done (adverbs of manner)",
    t14_qb: "Connect two ideas",
    t14_qc: "Tell when the action happened",
    t14_qd: "Tell where the action happened",

    t15_title: "Complete Sentences with Adverbs and Conjunctions",
    t15_text: "A complete sentence can have: adverbs of manner, time, place, AND conjunctions joining ideas. Example: 'Yesterday, she ran quickly AND played happily outside.'",
    t15_inst: "Choose the sentence that correctly uses adverbs and conjunctions.",
    t15_h1: "Look for adverbs that modify verbs AND conjunctions that connect ideas.",
    t15_h2: "He spoke softly because he was nervous, so everyone listened carefully.",
    t15_q: "Which sentence uses adverbs and conjunctions correctly together?",
    t15_qa: "She danced gracefully, but he sat quietly because he was tired.",
    t15_qb: "She danced gracefully and he danced graceful.",
    t15_qc: "She danced because gracefully and he sat.",
    t15_qd: "She danced, so he quietly sat because.",
  },
};

export const ADVERB_POOL: PoolTopicDef[] = [
  // t1-t3: adverbs of manner (how)
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "quickly", highlightChars: ["ly"], color: "#10B981", subtitle: "adverb of manner" },
    interactive: {
      type: "multiple-choice",
      instruction: "t1_inst",
      choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"],
      correctIndex: 0,
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"],
      answer: "t1_qa",
    },
  },
  {
    difficulty: "easy",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "word-display", word: "carefully", highlightChars: ["ly"], color: "#10B981", subtitle: "adverb of manner" },
    interactive: {
      type: "multiple-choice",
      instruction: "t2_inst",
      choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"],
      correctIndex: 0,
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"],
      answer: "t2_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "gentle", highlightChars: [], color: "#10B981", subtitle: "gently" },
    interactive: {
      type: "gap-fill",
      instruction: "t3_inst",
      sentence: "She spoke ___ to the baby.",
      choices: ["gently", "gentlely", "gentle", "gentlily"],
      correctIndex: 0,
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"],
      answer: "t3_qa",
    },
  },

  // t4-t6: adverbs of time (when)
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "simple-icon", icon: "📅", title: "When?", bg: "#10B981" },
    interactive: {
      type: "multiple-choice",
      instruction: "t4_inst",
      choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"],
      correctIndex: 0,
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"],
      answer: "t4_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "text-bubbles", items: [{ text: "yesterday", emoji: "⬅️", color: "#10B981", bg: "#D1FAE5" }, { text: "now", emoji: "⏱️", color: "#10B981", bg: "#D1FAE5" }, { text: "tomorrow", emoji: "➡️", color: "#10B981", bg: "#D1FAE5" }] },
    interactive: {
      type: "gap-fill",
      instruction: "t5_inst",
      sentence: "I will see you ___.",
      choices: ["soon", "yesterday", "already", "always"],
      correctIndex: 0,
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"],
      answer: "t5_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "text-bubbles", items: [{ text: "always", emoji: "✅", color: "#10B981", bg: "#D1FAE5" }, { text: "sometimes", emoji: "⚠️", color: "#10B981", bg: "#D1FAE5" }, { text: "never", emoji: "❌", color: "#10B981", bg: "#D1FAE5" }] },
    interactive: {
      type: "multiple-choice",
      instruction: "t6_inst",
      choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"],
      correctIndex: 0,
      hint1: "t6_h1",
      hint2: "t6_h2",
    },
    quiz: {
      question: "t6_q",
      choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"],
      answer: "t6_qa",
    },
  },

  // t7-t9: adverbs of place (where)
  {
    difficulty: "easy",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "simple-icon", icon: "📍", title: "Where?", bg: "#10B981" },
    interactive: {
      type: "multiple-choice",
      instruction: "t7_inst",
      choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"],
      correctIndex: 0,
      hint1: "t7_h1",
      hint2: "t7_h2",
    },
    quiz: {
      question: "t7_q",
      choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"],
      answer: "t7_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "up", emoji: "⬆️", color: "#10B981", bg: "#D1FAE5" }, { text: "down", emoji: "⬇️", color: "#10B981", bg: "#D1FAE5" }, { text: "forward", emoji: "➡️", color: "#10B981", bg: "#D1FAE5" }] },
    interactive: {
      type: "gap-fill",
      instruction: "t8_inst",
      sentence: "The climber moved ___ the mountain.",
      choices: ["up", "down", "forward", "backward"],
      correctIndex: 0,
      hint1: "t8_h1",
      hint2: "t8_h2",
    },
    quiz: {
      question: "t8_q",
      choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"],
      answer: "t8_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "near", emoji: "📏", color: "#10B981", bg: "#D1FAE5" }, { text: "far", emoji: "🔭", color: "#10B981", bg: "#D1FAE5" }] },
    interactive: {
      type: "multiple-choice",
      instruction: "t9_inst",
      choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"],
      correctIndex: 0,
      hint1: "t9_h1",
      hint2: "t9_h2",
    },
    quiz: {
      question: "t9_q",
      choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"],
      answer: "t9_qa",
    },
  },

  // t10-t12: coordinating conjunctions
  {
    difficulty: "easy",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "text-bubbles", items: [{ text: "idea 1", emoji: "💭", color: "#10B981", bg: "#D1FAE5" }, { text: "AND", emoji: "🔗", color: "#059669", bg: "#ECF0F1" }, { text: "idea 2", emoji: "💭", color: "#10B981", bg: "#D1FAE5" }] },
    interactive: {
      type: "multiple-choice",
      instruction: "t10_inst",
      choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"],
      correctIndex: 0,
      hint1: "t10_h1",
      hint2: "t10_h2",
    },
    quiz: {
      question: "t10_q",
      choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"],
      answer: "t10_qa",
    },
  },
  {
    difficulty: "easy",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "text-bubbles", items: [{ text: "opposite 1", emoji: "👍", color: "#10B981", bg: "#D1FAE5" }, { text: "BUT", emoji: "⚡", color: "#059669", bg: "#ECF0F1" }, { text: "opposite 2", emoji: "👎", color: "#10B981", bg: "#D1FAE5" }] },
    interactive: {
      type: "multiple-choice",
      instruction: "t11_inst",
      choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"],
      correctIndex: 0,
      hint1: "t11_h1",
      hint2: "t11_h2",
    },
    quiz: {
      question: "t11_q",
      choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"],
      answer: "t11_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "text-bubbles", items: [{ text: "choice 1", emoji: "❓", color: "#10B981", bg: "#D1FAE5" }, { text: "OR", emoji: "🤔", color: "#059669", bg: "#ECF0F1" }, { text: "choice 2", emoji: "❓", color: "#10B981", bg: "#D1FAE5" }] },
    interactive: {
      type: "multiple-choice",
      instruction: "t12_inst",
      choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"],
      correctIndex: 0,
      hint1: "t12_h1",
      hint2: "t12_h2",
    },
    quiz: {
      question: "t12_q",
      choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"],
      answer: "t12_qa",
    },
  },

  // t13-t15: mixed/review
  {
    difficulty: "medium",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "text-bubbles", items: [{ text: "cause", emoji: "❓", color: "#10B981", bg: "#D1FAE5" }, { text: "BECAUSE", emoji: "🔗", color: "#059669", bg: "#ECF0F1" }, { text: "result", emoji: "✓", color: "#10B981", bg: "#D1FAE5" }] },
    interactive: {
      type: "multiple-choice",
      instruction: "t13_inst",
      choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"],
      correctIndex: 0,
      hint1: "t13_h1",
      hint2: "t13_h2",
    },
    quiz: {
      question: "t13_q",
      choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"],
      answer: "t13_qa",
    },
  },
  {
    difficulty: "hard",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "simple-icon", icon: "🔀", title: "Mixed Review", bg: "#10B981" },
    interactive: {
      type: "multiple-choice",
      instruction: "t14_inst",
      choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"],
      correctIndex: 0,
      hint1: "t14_h1",
      hint2: "t14_h2",
    },
    quiz: {
      question: "t14_q",
      choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"],
      answer: "t14_qa",
    },
  },
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🎯", title: "Complete Mastery", bg: "#10B981" },
    interactive: {
      type: "multiple-choice",
      instruction: "t15_inst",
      choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"],
      correctIndex: 0,
      hint1: "t15_h1",
      hint2: "t15_h2",
    },
    quiz: {
      question: "t15_q",
      choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"],
      answer: "t15_qa",
    },
  },
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
    t1_title: "Plurals: Add -s, -es, or -ies",
    t1_text: "Review how to make nouns plural by adding -s, -es, or changing -y to -ies.",
    t1_inst: "Choose the correct plural form.",
    t1_h1: "Remember the rules for different word endings.",
    t1_h2: "Cat -> Cats, Box -> Boxes, Baby -> Babies.",
    t1_q: "What is the plural of 'dress'?",
    t1_qa: "dresses",
    t1_qb: "dresss",
    t1_qc: "dressies",
    t1_qd: "dressz",

    t2_title: "Irregular Plurals",
    t2_text: "Some nouns have special plural forms that don't follow the regular rules.",
    t2_inst: "Choose the correct irregular plural.",
    t2_h1: "Think about words like 'child' and 'foot'.",
    t2_h2: "Child -> Children, Foot -> Feet.",
    t2_q: "What is the plural of 'mouse'?",
    t2_qa: "mice",
    t2_qb: "mouses",
    t2_qc: "mousees",
    t2_qd: "mousies",

    t3_title: "Simple Present Tense",
    t3_text: "The simple present tense is used for actions that happen regularly or are always true.",
    t3_inst: "Complete the sentence with the correct present tense verb.",
    t3_h1: "Don't forget to add -s for he/she/it.",
    t3_h2: "She sings, He eats.",
    t3_q: "Which is correct: 'Birds ___ in the sky.'",
    t3_qa: "fly",
    t3_qb: "flies",
    t3_qc: "flying",
    t3_qd: "flew",

    t4_title: "Simple Past Tense (Regular Verbs)",
    t4_text: "For most regular verbs, we add -ed to show that an action happened in the past.",
    t4_inst: "Choose the correct past tense verb.",
    t4_h1: "Think about verbs like 'walk' and 'play'.",
    t4_h2: "Walk -> Walked, Play -> Played.",
    t4_q: "What is the past tense of 'jump'?",
    t4_qa: "jumped",
    t4_qb: "jump",
    t4_qc: "jumping",
    t4_qd: "jumpen",

    t5_title: "Irregular Past Tense (Common Verbs)",
    t5_text: "Many common verbs have special past tense forms you need to remember.",
    t5_inst: "Choose the correct irregular past tense verb.",
    t5_h1: "Recall verbs like 'go', 'see', and 'eat'.",
    t5_h2: "Go -> Went, See -> Saw, Eat -> Ate.",
    t5_q: "What is the past tense of 'run'?",
    t5_qa: "ran",
    t5_qb: "runned",
    t5_qc: "run",
    t5_qd: "running",

    t6_title: "Future Tense (Will / Going to)",
    t6_text: "Use 'will' or 'be going to' to talk about actions that will happen later.",
    t6_inst: "Complete the sentence with the correct future tense verb.",
    t6_h1: "'Will' is for general future, 'going to' is for plans.",
    t6_h2: "I will read. She is going to sleep.",
    t6_q: "Which is correct: 'We ___ a movie tonight.'",
    t6_qa: "will watch",
    t6_qb: "watch",
    t6_qc: "watched",
    t6_qd: "watching",

    t7_title: "Adverbs: How, When, Where",
    t7_text: "Adverbs tell us more about verbs, adjectives, or other adverbs. They answer how, when, or where.",
    t7_inst: "Choose the adverb in the sentence.",
    t7_h1: "Adverbs often end in -ly, but not always!",
    t7_h2: "He runs quickly. She sings beautifully.",
    t7_q: "Find the adverb: 'The dog barked loudly.'",
    t7_qa: "loudly",
    t7_qb: "dog",
    t7_qc: "barked",
    t7_qd: "the",

    t8_title: "Conjunctions: And, But, Or, So, Because",
    t8_text: "Conjunctions join words, phrases, or sentences together.",
    t8_inst: "Choose the correct conjunction to complete the sentence.",
    t8_h1: "'And' adds, 'but' contrasts, 'or' gives a choice, 'so' shows result, 'because' shows reason.",
    t8_h2: "I like apples and bananas. He is tired, so he will sleep.",
    t8_q: "Complete: 'I wanted to go, ___ it was raining.'",
    t8_qa: "but",
    t8_qb: "and",
    t8_qc: "or",
    t8_qd: "so",

    t9_title: "Subject and Predicate",
    t9_text: "Every sentence has a subject (who or what it's about) and a predicate (what the subject does or is).",
    t9_inst: "Identify the subject of the sentence.",
    t9_h1: "The subject is usually a noun or pronoun.",
    t9_h2: "The boy ran. ('The boy' is the subject).",    t9_q: "What is the subject: 'The tall tree swayed in the wind.'",
    t9_qa: "The tall tree",
    t9_qb: "swayed in the wind",
    t9_qc: "tree",
    t9_qd: "wind",

    t10_title: "Direct Quotations",
    t10_text: "Direct quotations show someone's exact words using quotation marks.",
    t10_inst: "Choose the sentence with the correct direct quotation.",
    t10_h1: "Remember to use commas and quotation marks correctly.",
    t10_h2: "She said, 'I am happy.'",
    t10_q: "Which is correct?",
    t10_qa: "He asked, 'Where are you going?'",
    t10_qb: "He asked 'Where are you going'?",
    t10_qc: "He asked, Where are you going?",
    t10_qd: "He asked Where are you going.",

    t11_title: "Prefixes: Un-, Re-, Pre-, Mis-",
    t11_text: "Prefixes are added to the beginning of a word to change its meaning.",
    t11_inst: "Choose the word with the correct prefix.",
    t11_h1: "Un- means not, Re- means again, Pre- means before, Mis- means wrong.",
    t11_h2: "Unhappy, Rewrite, Preheat, Mistake.",
    t11_q: "Which prefix means 'do again'?",
    t11_qa: "re-",
    t11_qb: "un-",
    t11_qc: "pre-",
    t11_qd: "mis-",

    t12_title: "Suffixes: -ful, -less, -tion, -ness",
    t12_text: "Suffixes are added to the end of a word to change its meaning or part of speech.",
    t12_inst: "Choose the word with the correct suffix.",
    t12_h1: "-ful means full of, -less means without, -tion makes a noun, -ness makes a noun from an adjective.",
    t12_h2: "Careful, Hopeless, Action, Kindness.",
    t12_q: "Which suffix means 'full of'?",
    t12_qa: "-ful",
    t12_qb: "-less",
    t12_qc: "-tion",
    t12_qd: "-ness",

    t13_title: "Compound Words",
    t13_text: "Compound words are made by joining two smaller words together.",
    t13_inst: "Choose the compound word.",
    t13_h1: "Think of two words that combine to make a new one.",
    t13_h2: "Sun + flower = sunflower.",
    t13_q: "Which of these is a compound word?",
    t13_qa: "rainbow",
    t13_qb: "running",
    t13_qc: "beautiful",
    t13_qd: "quickly",

    t14_title: "Homonyms (Homophones)",
    t14_text: "Homonyms are words that sound the same but have different meanings and spellings.",
    t14_inst: "Choose the correct word to complete the sentence.",
    t14_h1: "Pay attention to the spelling and meaning in the context.",
    t14_h2: "There, their, they're.",
    t14_q: "Complete: 'I went ___ the store.'",
    t14_qa: "to",
    t14_qb: "too",
    t14_qc: "two",
    t14_qd: "tou",

    t15_title: "Literal vs. Nonliteral Language",
    t15_text: "Literal language means exactly what it says, while nonliteral language (like idioms) has a different meaning.",
    t15_inst: "Is the sentence literal or nonliteral?",
    t15_h1: "If it's an expression or saying, it's probably nonliteral.",
    t15_h2: "'It's raining cats and dogs' is nonliteral.",
    t15_q: "Is this sentence literal or nonliteral: 'He kicked the bucket.' (meaning he died)",
    t15_qa: "Nonliteral",
    t15_qb: "Literal",
    t15_qc: "Both",
    t15_qd: "Neither",
  },
};

export const BIGTEST3_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy",
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: { type: "word-display", word: "cat", highlightChars: ["s"], color: "#4ECDC4", subtitle: "cats" },
    interactive: {
      type: "gap-fill",
      instruction: "t1_inst",
      sentence: "The plural of 'box' is ___.",
      choices: ["boxes", "boxs", "boxies", "boxe"],
      correctIndex: 0,
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"],
      answer: "t1_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: { type: "word-display", word: "child", highlightChars: ["ren"], color: "#4ECDC4", subtitle: "children" },
    interactive: {
      type: "gap-fill",
      instruction: "t2_inst",
      sentence: "The plural of 'foot' is ___.",
      choices: ["feet", "foots", "footes", "footies"],
      correctIndex: 0,
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"],
      answer: "t2_qa",
    },
  },
  {
    difficulty: "easy",
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: { type: "word-display", word: "walk", highlightChars: ["s"], color: "#4ECDC4", subtitle: "walks" },
    interactive: {
      type: "gap-fill",
      instruction: "t3_inst",
      sentence: "He ___ a book every night.",
      choices: ["reads", "read", "reading", "readed"],
      correctIndex: 0,
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"],
      answer: "t3_qa",
    },
  },
  {
    difficulty: "easy",
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: { type: "word-display", word: "play", highlightChars: ["ed"], color: "#4ECDC4", subtitle: "played" },
    interactive: {
      type: "gap-fill",
      instruction: "t4_inst",
      sentence: "Yesterday, she ___ with her friends.",
      choices: ["played", "play", "playing", "plays"],
      correctIndex: 0,
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"],
      answer: "t4_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t5_title",
    infoText: "t5_text",
    svg: { type: "word-display", word: "go", highlightChars: ["went"], color: "#4ECDC4", subtitle: "went" },
    interactive: {
      type: "gap-fill",
      instruction: "t5_inst",
      sentence: "Last week, they ___ to the beach.",
      choices: ["went", "go", "goed", "going"],
      correctIndex: 0,
      hint1: "t5_h1",
      hint2: "t5_h2",
    },
    quiz: {
      question: "t5_q",
      choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"],
      answer: "t5_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t6_title",
    infoText: "t6_text",
    svg: { type: "word-display", word: "read", highlightChars: ["will"], color: "#4ECDC4", subtitle: "will read" },
    interactive: {
      type: "gap-fill",
      instruction: "t6_inst",
      sentence: "Tomorrow, I ___ a new book.",
      choices: ["will read", "read", "reads", "reading"],
      correctIndex: 0,
      hint1: "t6_h1",
      hint2: "t6_h2",
    },
    quiz: {
      question: "t6_q",
      choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"],
      answer: "t6_qa",
    },
  },
  {
    difficulty: "easy",
    infoTitle: "t7_title",
    infoText: "t7_text",
    svg: { type: "word-display", word: "quickly", highlightChars: ["ly"], color: "#4ECDC4", subtitle: "how" },
    interactive: {
      type: "highlight-text",
      instruction: "t7_inst",
      tokens: ["She", "sings", "beautifully", "."],
      correctIndices: [2],
      hint1: "t7_h1",
      hint2: "t7_h2",
    },
    quiz: {
      question: "t7_q",
      choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"],
      answer: "t7_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t8_title",
    infoText: "t8_text",
    svg: { type: "sentence-display", words: ["I", "like", "cats", ",", "and", "I", "have", "three", "."], highlightIndices: [4], color: "#4ECDC4" },
    interactive: {
      type: "gap-fill",
      instruction: "t8_inst",
      sentence: "I am hungry, ___ I will eat a sandwich.",
      choices: ["so", "and", "but", "or"],
      correctIndex: 0,
      hint1: "t8_h1",
      hint2: "t8_h2",
    },
    quiz: {
      question: "t8_q",
      choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"],
      answer: "t8_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t9_title",
    infoText: "t9_text",
    svg: { type: "sentence-display", words: ["The", "cat", "slept", "."], highlightIndices: [1], color: "#4ECDC4" },
    interactive: {
      type: "highlight-text",
      instruction: "t9_inst",
      tokens: ["My", "little", "brother", "loves", "to", "play."],
      correctIndices: [0, 1, 2],
      hint1: "t9_h1",
      hint2: "t9_h2",
    },
    quiz: {
      question: "t9_q",
      choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"],
      answer: "t9_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t10_title",
    infoText: "t10_text",
    svg: { type: "sentence-display", words: ["She", "said", ",", "\"Hello!\""], highlightIndices: [3], color: "#4ECDC4" },
    interactive: {
      type: "gap-fill",
      instruction: "t10_inst",
      sentence: "Choose the correct way to write a direct quotation: She shouted ___ 'Look out!'",
      choices: [", \"Look out!\"", " \"Look out!\"", " 'Look out!'", ", Look out!"],
      correctIndex: 0,
      hint1: "t10_h1",
      hint2: "t10_h2",
    },
    quiz: {
      question: "t10_q",
      choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"],
      answer: "t10_qa",
    },
  },
  {
    difficulty: "easy",
    infoTitle: "t11_title",
    infoText: "t11_text",
    svg: { type: "word-display", word: "happy", highlightChars: ["un"], color: "#4ECDC4", subtitle: "unhappy" },
    interactive: {
      type: "gap-fill",
      instruction: "t11_inst",
      sentence: "Add a prefix to 'do' to mean 'do again': ___do.",
      choices: ["re", "un", "pre", "mis"],
      correctIndex: 0,
      hint1: "t11_h1",
      hint2: "t11_h2",
    },
    quiz: {
      question: "t11_q",
      choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"],
      answer: "t11_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t12_title",
    infoText: "t12_text",
    svg: { type: "word-display", word: "care", highlightChars: ["ful"], color: "#4ECDC4", subtitle: "careful" },
    interactive: {
      type: "gap-fill",
      instruction: "t12_inst",
      sentence: "Add a suffix to 'hope' to mean 'without hope': hope___",
      choices: ["less", "ful", "tion", "ness"],
      correctIndex: 0,
      hint1: "t12_h1",
      hint2: "t12_h2",
    },
    quiz: {
      question: "t12_q",
      choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"],
      answer: "t12_qa",
    },
  },
  {
    difficulty: "easy",
    infoTitle: "t13_title",
    infoText: "t13_text",
    svg: { type: "compound-word", word1: "sun", word2: "shine", result: "sunshine", color: "#4ECDC4" },
    interactive: {
      type: "gap-fill",
      instruction: "t13_inst",
      sentence: "Which of these is a compound word?",
      choices: ["butterfly", "beautiful", "running", "quickly"],
      correctIndex: 0,
      hint1: "t13_h1",
      hint2: "t13_h2",
    },
    quiz: {
      question: "t13_q",
      choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"],
      answer: "t13_qa",
    },
  },
  {
    difficulty: "medium",
    infoTitle: "t14_title",
    infoText: "t14_text",
    svg: { type: "word-display", word: "there", highlightChars: [], color: "#4ECDC4", subtitle: "their, they're" },
    interactive: {
      type: "gap-fill",
      instruction: "t14_inst",
      sentence: "___ are many birds in the tree.",
      choices: ["There", "Their", "They're", "Thare"],
      correctIndex: 0,
      hint1: "t14_h1",
      hint2: "t14_h2",
    },
    quiz: {
      question: "t14_q",
      choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"],
      answer: "t14_qa",
    },
  },
  {
    difficulty: "hard",
    infoTitle: "t15_title",
    infoText: "t15_text",
    svg: { type: "simple-icon", icon: "☔", title: "Raining cats and dogs", bg: "#4ECDC4" },
    interactive: {
      type: "gap-fill",
      instruction: "t15_inst",
      sentence: "Is this sentence literal or nonliteral: 'She has a green thumb.' (meaning she is good at gardening)",
      choices: ["Nonliteral", "Literal", "Both", "Neither"],
      correctIndex: 0,
      hint1: "t15_h1",
      hint2: "t15_h2",
    },
    quiz: {
      question: "t15_q",
      choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"],
      answer: "t15_qa",
    },
  },
];
