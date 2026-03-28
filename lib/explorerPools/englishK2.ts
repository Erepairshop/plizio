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

    // T1 - Common Nouns (Person) - Easy
    t1_title: "Nouns: People",
    t1_text: "A noun is a naming word. It can be a person, like a teacher, a boy, or a friend!",
    t1_inst: "Shoot the noun that is a person!",
    t1_h1: "Look for a word that names a human.",
    t1_h2: "A teacher is a person.",
    t1_q1: "Which word is a person?",
    t1_ans1: "teacher", t1_ans1_2: "run", t1_ans1_3: "big",

    // T2 - Common Nouns (Place) - Easy
    t2_title: "Nouns: Places",
    t2_text: "A noun can also name a place. A park, a school, and a city are all places.",
    t2_inst: "Fill in the missing place noun!",
    t2_h1: "Where can you play outside?",
    t2_h2: "You play on the swings at the p-a-r-k.",
    t2_sent2: "I like to play at the ___.",
    t2_c2_1: "park", t2_c2_2: "eat", t2_c2_3: "happy", t2_c2_4: "fast",

    // T3 - Common Nouns (Thing) - Easy
    t3_title: "Nouns: Things",
    t3_text: "Things are nouns too! A book, an apple, and a toy are all things you can touch.",
    t3_inst: "Put the sentence in the correct order!",
    t3_h1: "Start with 'The'.",
    t3_h2: "The apple is red.",
    t3_sw3_1: "The", t3_sw3_2: "apple", t3_sw3_3: "is", t3_sw3_4: "red.",

    // T4 - Common Nouns (Animal) - Easy
    t4_title: "Nouns: Animals",
    t4_text: "Every animal is a noun! Dogs, cats, and birds are naming words.",
    t4_inst: "Match the animal to its name!",
    t4_h1: "Look at the letters carefully.",
    t4_h2: "Match 'dog' with the dog.",
    t4_ml4_1: "dog", t4_mr4_1: "dog",
    t4_ml4_2: "cat", t4_mr4_2: "cat",
    t4_ml4_3: "bird", t4_mr4_3: "bird",

    // T5 - Proper Nouns (Names) - Easy
    t5_title: "Proper Nouns: Names",
    t5_text: "Special names for people are called proper nouns. They always start with a BIG capital letter! Like 'Tom'.",
    t5_inst: "Sort the common and proper nouns!",
    t5_h1: "Proper nouns have a capital letter.",
    t5_h2: "Tom is a proper noun, boy is a common noun.",
    t5_b5_1: "Common Noun", t5_b5_2: "Proper Noun",
    t5_i5_1: "boy", t5_i5_2: "girl", t5_i5_3: "Tom", t5_i5_4: "Anna",

    // T6 - Proper Nouns (Days) - Medium
    t6_title: "Proper Nouns: Days",
    t6_text: "Days of the week are proper nouns too. Monday and Friday must start with a capital letter!",
    t6_inst: "Tap the proper noun in the sentence!",
    t6_h1: "Look for the day of the week.",
    t6_h2: "Monday has a big 'M'.",
    t6_w6_1: "We", t6_w6_2: "play", t6_w6_3: "games", t6_w6_4: "on", t6_w6_5: "Monday.",

    // T7 - Proper Nouns (Months) - Medium
    t7_title: "Proper Nouns: Months",
    t7_text: "The months of the year are proper nouns. April, May, and June are special names.",
    t7_inst: "Fill in the proper noun!",
    t7_h1: "Look for the word with a capital letter.",
    t7_h2: "April is a month.",
    t7_sent7: "My birthday is in ___.",
    t7_c7_1: "April", t7_c7_2: "april", t7_c7_3: "dog", t7_c7_4: "run",

    // T8 - Plural Nouns (Add -s) - Medium
    t8_title: "Plural Nouns (-s)",
    t8_text: "To make a noun mean 'more than one', we usually add an 's' at the end. One cat, two cats!",
    t8_inst: "Match the singular noun to its plural!",
    t8_h1: "Find the word that has an 's' added.",
    t8_h2: "cat -> cats.",
    t8_ml8_1: "cat", t8_mr8_1: "cats",
    t8_ml8_2: "dog", t8_mr8_2: "dogs",
    t8_ml8_3: "pig", t8_mr8_3: "pigs",

    // T9 - Plural Nouns (Add -es) - Medium
    t9_title: "Plural Nouns (-es)",
    t9_text: "If a word ends in s, sh, ch, or x, we add 'es' to make it plural. One box, two boxes!",
    t9_inst: "Shoot the correct plural word!",
    t9_h1: "Box ends with 'x', so we add 'es'.",
    t9_h2: "The plural of box is boxes.",
    t9_q9: "What is more than one box?",
    t9_ans9_1: "boxes", t9_ans9_2: "boxs", t9_ans9_3: "box",

    // T10 - Irregular Plurals (mouse -> mice) - Medium
    t10_title: "Irregular Plurals",
    t10_text: "Some nouns change their whole spelling when there is more than one! One mouse, two mice.",
    t10_inst: "Sort the words into One or Many!",
    t10_h1: "Mouse is one, mice means many.",
    t10_h2: "Tooth is one, teeth means many.",
    t10_b10_1: "One (Singular)", t10_b10_2: "Many (Plural)",
    t10_i10_1: "mouse", t10_i10_2: "tooth", t10_i10_3: "mice", t10_i10_4: "teeth",

    // T11 - Irregular Plurals (child -> children) - Hard
    t11_title: "More Irregular Plurals",
    t11_text: "Some words are very tricky! One child, but many children. One person, but many people.",
    t11_inst: "Fill in the missing plural noun!",
    t11_h1: "The plural of child is children.",
    t11_h2: "Choose 'children'.",
    t11_sent11: "The three ___ are playing.",
    t11_c11_1: "children", t11_c11_2: "childs", t11_c11_3: "child", t11_c11_4: "childrens",

    // T12 - Collective Nouns (flock) - Hard
    t12_title: "Collective Nouns",
    t12_text: "A collective noun names a group. A group of birds flying together is called a flock!",
    t12_inst: "Build the sentence!",
    t12_h1: "Start with 'I see'.",
    t12_h2: "I see a flock of birds.",
    t12_f12_1: "I", t12_f12_2: "see", t12_f12_3: "a", t12_f12_4: "flock", t12_f12_5: "of birds.",

    // T13 - Collective Nouns (herd & bunch) - Hard
    t13_title: "Herds and Bunches",
    t13_text: "A group of cows or elephants is a herd. A group of bananas or grapes is a bunch!",
    t13_inst: "Sort the items into their correct group names!",
    t13_h1: "Animals usually go in a herd.",
    t13_h2: "Fruit goes in a bunch.",
    t13_b13_1: "Herd", t13_b13_2: "Bunch",
    t13_i13_1: "cows", t13_i13_2: "elephants", t13_i13_3: "bananas", t13_i13_4: "grapes",

    // T14 - Possessive Nouns ('s) - Hard
    t14_title: "Possessive Nouns ('s)",
    t14_text: "We add an apostrophe and an 's' ('s) to show that something belongs to a noun. Like 'the dog's bone'.",
    t14_inst: "Tap the possessive noun!",
    t14_h1: "Look for the word with the little mark and an 's' ('s).",
    t14_h2: "The word is dog's.",
    t14_w14_1: "The", t14_w14_2: "dog's", t14_w14_3: "bone", t14_w14_4: "is", t14_w14_5: "big.",

    // T15 - Abstract Nouns - Hard
    t15_title: "Abstract Nouns",
    t15_text: "Abstract nouns are things you can feel or think about, but cannot touch. Like love, time, or happiness!",
    t15_inst: "Shoot the abstract noun!",
    t15_h1: "Which word is a feeling or idea, not an object?",
    t15_h2: "You can't touch 'love'.",
    t15_q15: "Find the abstract noun:",
    t15_ans15_1: "love", t15_ans15_2: "desk", t15_ans15_3: "apple"
  }
};

export const NOUN_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "👩‍🏫", color: "#3B82F6" },
    interactive: { type: "physics-slingshot", question: "t1_q1", targets: [{ id: "1", text: "t1_ans1", isCorrect: true }, { id: "2", text: "t1_ans1_2", isCorrect: false }, { id: "3", text: "t1_ans1_3", isCorrect: false }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "nouns_common_proper_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "park", color: "#3B82F6" },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "nouns_common_proper_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "🍎", color: "#3B82F6" },
    interactive: { type: "word-order", words: ["t3_sw3_1", "t3_sw3_2", "t3_sw3_3", "t3_sw3_4"], correctOrder: [0, 1, 2, 3], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "nouns_common_proper_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "icon-grid", items: [{ emoji: "🐶", label: "dog" }, { emoji: "🐱", label: "cat" }, { emoji: "🐦", label: "bird" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t4_ml4_1", right: "t4_mr4_1" }, { left: "t4_ml4_2", right: "t4_mr4_2" }, { left: "t4_ml4_3", right: "t4_mr4_3" }], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "nouns_common_proper_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "text-bubbles", items: [{ text: "Tom", color: "#FFFFFF", bg: "#3B82F6" }, { text: "Sarah", color: "#FFFFFF", bg: "#2563EB" }] },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "common", label: "t5_b5_1" }, { id: "proper", label: "t5_b5_2" }], items: [{ text: "t5_i5_1", bucketId: "common" }, { text: "t5_i5_2", bucketId: "common" }, { text: "t5_i5_3", bucketId: "proper" }, { text: "t5_i5_4", bucketId: "proper" }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "nouns_common_proper_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "two-groups", left: { items: ["Monday"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["Friday"], bg: "#EFF6FF", border: "#2563EB" } },
    interactive: { type: "highlight-text", tokens: ["t6_w6_1", "t6_w6_2", "t6_w6_3", "t6_w6_4", "t6_w6_5"], correctIndices: [4], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "nouns_common_proper_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "sentence-display", words: ["April", "is", "warm"], color: "#3B82F6" },
    interactive: { type: "gap-fill", sentence: "t7_sent7", choices: ["t7_c7_1", "t7_c7_2", "t7_c7_3", "t7_c7_4"], correctIndex: 0, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "nouns_common_proper_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "compound-word", word1: "cat", word2: "s", result: "cats", color: "#3B82F6" },
    interactive: { type: "match-pairs", pairs: [{ left: "t8_ml8_1", right: "t8_mr8_1" }, { left: "t8_ml8_2", right: "t8_mr8_2" }, { left: "t8_ml8_3", right: "t8_mr8_3" }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "nouns_plural_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "compound-word", word1: "box", word2: "es", result: "boxes", color: "#3B82F6" },
    interactive: { type: "physics-slingshot", question: "t9_q9", targets: [{ id: "1", text: "t9_ans9_1", isCorrect: true }, { id: "2", text: "t9_ans9_2", isCorrect: false }, { id: "3", text: "t9_ans9_3", isCorrect: false }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "nouns_plural_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "letter-pairs", pairs: [["mouse", "mice"], ["tooth", "teeth"]], color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "one", label: "t10_b10_1" }, { id: "many", label: "t10_b10_2" }], items: [{ text: "t10_i10_1", bucketId: "one" }, { text: "t10_i10_2", bucketId: "one" }, { text: "t10_i10_3", bucketId: "many" }, { text: "t10_i10_4", bucketId: "many" }], instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "nouns_plural_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-syllables", parts: ["chil", "dren"], color: "#3B82F6" },
    interactive: { type: "gap-fill", sentence: "t11_sent11", choices: ["t11_c11_1", "t11_c11_2", "t11_c11_3", "t11_c11_4"], correctIndex: 0, instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "nouns_plural_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "🐦", color: "#3B82F6" },
    interactive: { type: "sentence-build", fragments: ["t12_f12_1", "t12_f12_2", "t12_f12_3", "t12_f12_4", "t12_f12_5"], instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "collective_nouns_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "two-groups", left: { items: ["herd"], bg: "#DBEAFE", border: "#3B82F6" }, right: { items: ["bunch"], bg: "#FEF3C7", border: "#F59E0B" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "herd", label: "t13_b13_1" }, { id: "bunch", label: "t13_b13_2" }], items: [{ text: "t13_i13_1", bucketId: "herd" }, { text: "t13_i13_2", bucketId: "herd" }, { text: "t13_i13_3", bucketId: "bunch" }, { text: "t13_i13_4", bucketId: "bunch" }], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "collective_nouns_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "dog's", color: "#3B82F6" },
    interactive: { type: "highlight-text", tokens: ["t14_w14_1", "t14_w14_2", "t14_w14_3", "t14_w14_4", "t14_w14_5"], correctIndices: [1], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "nouns_common_proper_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "text-bubbles", items: [{ text: "love", color: "#FFFFFF", bg: "#3B82F6" }, { text: "time", color: "#FFFFFF", bg: "#2563EB" }] },
    interactive: { type: "physics-slingshot", question: "t15_q15", targets: [{ id: "1", text: "t15_ans15_1", isCorrect: true }, { id: "2", text: "t15_ans15_2", isCorrect: false }, { id: "3", text: "t15_ans15_3", isCorrect: false }], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "nouns_common_proper_k2" }
  }
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i2 — Verb Vortex (⚡, #EF4444)
// Topics: action verbs, linking verbs (am/is/are/was/were),
//         present tense (-s for he/she/it), irregular past tense (ran/saw/went/came/ate)
// ─────────────────────────────────────────────────────────────────────────────

export const VERB_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Verb Vortex",

    // T1 - Action Verbs 1 (Easy)
    t1_title: "Action Verbs",
    t1_text: "A verb is an action word! It tells us what someone or something is doing. Like run, jump, or play!",
    t1_inst: "Shoot the action verb!",
    t1_h1: "Look for a word that shows action.",
    t1_h2: "You can 'jump', but you can't 'apple'.",
    t1_q1: "Which word is a verb?",
    t1_ans1_1: "jump", t1_ans1_2: "apple", t1_ans1_3: "red",

    // T2 - Action Verbs 2 (Easy)
    t2_title: "More Action Verbs",
    t2_text: "Verbs can be things you do with your body, like dancing, singing, or swimming.",
    t2_inst: "Match the verbs!",
    t2_h1: "Find the words that match.",
    t2_h2: "Match 'sing' with 'sing'.",
    t2_ml2_1: "sing", t2_mr2_1: "sing",
    t2_ml2_2: "dance", t2_mr2_2: "dance",
    t2_ml2_3: "swim", t2_mr2_3: "swim",

    // T3 - Finding the Verb (Easy)
    t3_title: "Finding the Verb",
    t3_text: "Every sentence needs a verb. Can you find the action word in a sentence?",
    t3_inst: "Tap the verb in the sentence!",
    t3_h1: "What is the frog doing?",
    t3_h2: "The frog 'jumps'.",
    t3_w3_1: "The", t3_w3_2: "frog", t3_w3_3: "jumps", t3_w3_4: "high.",

    // T4 - Action Verbs - Mental (Easy)
    t4_title: "Thinking Verbs",
    t4_text: "Some verbs happen inside your head! Think, guess, and feel are also action words.",
    t4_inst: "Put the words in order!",
    t4_h1: "Start with 'I'.",
    t4_h2: "I think about you.",
    t4_sw4_1: "I", t4_sw4_2: "think", t4_sw4_3: "about", t4_sw4_4: "you.",

    // T5 - Linking Verbs (Easy)
    t5_title: "Linking Verbs",
    t5_text: "Some verbs don't show action. They link things together! 'am', 'is', and 'are' are linking verbs.",
    t5_inst: "Fill in the missing linking verb!",
    t5_h1: "Use 'is' for one thing.",
    t5_h2: "The cat is sleeping.",
    t5_sent5: "The cat ___ sleeping.",
    t5_c5_1: "is", t5_c5_2: "are", t5_c5_3: "am", t5_c5_4: "run",

    // T6 - Linking Verbs Past (Medium)
    t6_title: "Linking Verbs in the Past",
    t6_text: "When we talk about the past, 'is' becomes 'was', and 'are' becomes 'were'.",
    t6_inst: "Fill in the past tense verb!",
    t6_h1: "It happened yesterday. We use 'were' for 'we'.",
    t6_h2: "We were happy.",
    t6_sent6: "Yesterday, we ___ happy.",
    t6_c6_1: "were", t6_c6_2: "was", t6_c6_3: "are", t6_c6_4: "is",

    // T7 - Present Tense +s (Medium)
    t7_title: "Adding 's' to Verbs",
    t7_text: "When we use 'he', 'she', or 'it', we usually add an 's' to the verb. He runs, she plays!",
    t7_inst: "Match the word parts to build the verb!",
    t7_h1: "Add 's' to the action word.",
    t7_h2: "walk + s = walks",
    t7_ml7_1: "walk", t7_mr7_1: "+ s",
    t7_ml7_2: "jump", t7_mr7_2: "+ s",
    t7_ml7_3: "play", t7_mr7_3: "+ s",

    // T8 - Present Tense Practice (Medium)
    t8_title: "He, She, and It",
    t8_text: "Remember, 'I run', but 'she runs'. The verb changes just a little bit!",
    t8_inst: "Sort the verbs!",
    t8_h1: "Does it have an 's' at the end?",
    t8_h2: "Put 'runs' in the '+s' bucket.",
    t8_b8_1: "Needs 's' (He/She)", t8_b8_2: "No 's' (I/You)",
    t8_i8_1: "runs", t8_i8_2: "eats", t8_i8_3: "run", t8_i8_4: "eat",

    // T9 - Irregular Past: go/went (Medium)
    t9_title: "Irregular Past: go",
    t9_text: "Some verbs change completely in the past! 'go' becomes 'went'. We don't say 'goed'.",
    t9_inst: "Fill in the past tense verb!",
    t9_h1: "The past tense of 'go' is 'went'.",
    t9_h2: "Choose 'went'.",
    t9_sent9: "Yesterday, I ___ to the park.",
    t9_c9_1: "went", t9_c9_2: "go", t9_c9_3: "goed", t9_c9_4: "goes",

    // T10 - Irregular Past: see/saw (Medium)
    t10_title: "Irregular Past: see",
    t10_text: "Today I see a bird. Yesterday I saw a bird. 'see' changes to 'saw'!",
    t10_inst: "Tap the past tense verb!",
    t10_h1: "Look for the word that means you did it yesterday.",
    t10_h2: "The word is 'saw'.",
    t10_w10_1: "I", t10_w10_2: "saw", t10_w10_3: "a", t10_w10_4: "big", t10_w10_5: "dog.",

    // T11 - Irregular Past: run/ran (Hard)
    t11_title: "Irregular Past: run",
    t11_text: "Today I run fast. Yesterday I ran fast. 'run' changes to 'ran'!",
    t11_inst: "Shoot the past tense word!",
    t11_h1: "What is the past tense of run?",
    t11_h2: "Shoot the word 'ran'.",
    t11_q11: "Which is in the past?",
    t11_ans11_1: "ran", t11_ans11_2: "run", t11_ans11_3: "runs",

    // T12 - Irregular Past: eat/ate (Hard)
    t12_title: "Irregular Past: eat",
    t12_text: "If you are eating now, you say 'eat'. If you did it yesterday, you say 'ate'.",
    t12_inst: "Sort the verbs into Present and Past!",
    t12_h1: "Eat is now. Ate is in the past.",
    t12_h2: "Put 'ate' in the Past bucket.",
    t12_b12_1: "Present (Now)", t12_b12_2: "Past (Yesterday)",
    t12_i12_1: "eat", t12_i12_2: "see", t12_i12_3: "ate", t12_i12_4: "saw",

    // T13 - Regular Past (-ed) (Hard)
    t13_title: "Regular Past Tense",
    t13_text: "For most verbs, we just add '-ed' to show it happened in the past. Walk becomes walked.",
    t13_inst: "Build the past tense sentence!",
    t13_h1: "Start with 'We'.",
    t13_h2: "We played a game.",
    t13_f13_1: "We", t13_f13_2: "played", t13_f13_3: "a", t13_f13_4: "game.",

    // T14 - Helping Verbs (Hard)
    t14_title: "Helping Verbs",
    t14_text: "Helping verbs help the main verb! Words like 'can', 'will', and 'should' are helping verbs.",
    t14_inst: "Sort the helping verbs and action verbs!",
    t14_h1: "Can you 'will'? No! It's a helping verb.",
    t14_h2: "'will' and 'can' are helping verbs.",
    t14_b14_1: "Helping Verb", t14_b14_2: "Action Verb",
    t14_i14_1: "will", t14_i14_2: "can", t14_i14_3: "jump", t14_i14_4: "run",

    // T15 - Verb Tense Sorting (Hard)
    t15_title: "Verb Tense Sorting",
    t15_text: "Verbs tell us WHEN something happens: in the past (jumped) or right now (jumps)!",
    t15_inst: "Shoot the verb that is in the PAST tense!",
    t15_h1: "Look for the word that ends in '-ed'.",
    t15_h2: "The word is 'jumped'.",
    t15_q15: "Find the past tense verb:",
    t15_ans15_1: "jumped", t15_ans15_2: "jumps", t15_ans15_3: "jump"
  }
};

export const VERB_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🏃", color: "#EF4444" },
    interactive: { type: "physics-slingshot", question: "t1_q1", targets: [{ id: "1", text: "t1_ans1_1", isCorrect: true }, { id: "2", text: "t1_ans1_2", isCorrect: false }, { id: "3", text: "t1_ans1_3", isCorrect: false }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "verbs_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "dance", color: "#FFFFFF", bg: "#EF4444" }, { text: "swim", color: "#FFFFFF", bg: "#DC2626" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_ml2_1", right: "t2_mr2_1" }, { left: "t2_ml2_2", right: "t2_mr2_2" }, { left: "t2_ml2_3", right: "t2_mr2_3" }], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "verbs_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "sentence-display", words: ["The", "frog", "jumps."], color: "#EF4444" },
    interactive: { type: "highlight-text", tokens: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4"], correctIndices: [2], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "verbs_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🤔", color: "#EF4444" },
    interactive: { type: "word-order", words: ["t4_sw4_1", "t4_sw4_2", "t4_sw4_3", "t4_sw4_4"], correctOrder: [0, 1, 2, 3], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "verbs_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "text-bubbles", items: [{ text: "am", color: "#FFFFFF", bg: "#EF4444" }, { text: "is", color: "#FFFFFF", bg: "#DC2626" }, { text: "are", color: "#FFFFFF", bg: "#B91C1C" }] },
    interactive: { type: "gap-fill", sentence: "t5_sent5", choices: ["t5_c5_1", "t5_c5_2", "t5_c5_3", "t5_c5_4"], correctIndex: 0, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "verbs_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "letter-pairs", pairs: [["is", "was"], ["are", "were"]], color: "#EF4444" },
    interactive: { type: "gap-fill", sentence: "t6_sent6", choices: ["t6_c6_1", "t6_c6_2", "t6_c6_3", "t6_c6_4"], correctIndex: 0, instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "verbs_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "compound-word", word1: "walk", word2: "s", result: "walks", color: "#EF4444" },
    interactive: { type: "match-pairs", pairs: [{ left: "t7_ml7_1", right: "t7_mr7_1" }, { left: "t7_ml7_2", right: "t7_mr7_2" }, { left: "t7_ml7_3", right: "t7_mr7_3" }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "verbs_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "two-groups", left: { items: ["He", "She", "It"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["I", "You", "We"], bg: "#FEF2F2", border: "#F87171" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "adds", label: "t8_b8_1" }, { id: "nos", label: "t8_b8_2" }], items: [{ text: "t8_i8_1", bucketId: "adds" }, { text: "t8_i8_2", bucketId: "adds" }, { text: "t8_i8_3", bucketId: "nos" }, { text: "t8_i8_4", bucketId: "nos" }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "verbs_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "letter-pairs", pairs: [["go", "went"]], color: "#EF4444" },
    interactive: { type: "gap-fill", sentence: "t9_sent9", choices: ["t9_c9_1", "t9_c9_2", "t9_c9_3", "t9_c9_4"], correctIndex: 0, instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "irregular_past_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "sentence-display", words: ["I", "saw", "a", "bird."], color: "#EF4444" },
    interactive: { type: "highlight-text", tokens: ["t10_w10_1", "t10_w10_2", "t10_w10_3", "t10_w10_4", "t10_w10_5"], correctIndices: [1], instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "irregular_past_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "ran", color: "#EF4444" },
    interactive: { type: "physics-slingshot", question: "t11_q11", targets: [{ id: "1", text: "t11_ans11_1", isCorrect: true }, { id: "2", text: "t11_ans11_2", isCorrect: false }, { id: "3", text: "t11_ans11_3", isCorrect: false }], instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "irregular_past_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "text-bubbles", items: [{ text: "eat", color: "#FFFFFF", bg: "#EF4444" }, { text: "ate", color: "#FFFFFF", bg: "#DC2626" }] },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "present", label: "t12_b12_1" }, { id: "past", label: "t12_b12_2" }], items: [{ text: "t12_i12_1", bucketId: "present" }, { text: "t12_i12_2", bucketId: "present" }, { text: "t12_i12_3", bucketId: "past" }, { text: "t12_i12_4", bucketId: "past" }], instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "irregular_past_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "compound-word", word1: "walk", word2: "ed", result: "walked", color: "#EF4444" },
    interactive: { type: "sentence-build", fragments: ["t13_f13_1", "t13_f13_2", "t13_f13_3", "t13_f13_4"], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "verbs_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "two-groups", left: { items: ["will", "can"], bg: "#FEE2E2", border: "#EF4444" }, right: { items: ["run", "eat"], bg: "#FEF2F2", border: "#F87171" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "help", label: "t14_b14_1" }, { id: "action", label: "t14_b14_2" }], items: [{ text: "t14_i14_1", bucketId: "help" }, { text: "t14_i14_2", bucketId: "help" }, { text: "t14_i14_3", bucketId: "action" }, { text: "t14_i14_4", bucketId: "action" }], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "verbs_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-syllables", parts: ["jump", "ed"], color: "#EF4444" },
    interactive: { type: "physics-slingshot", question: "t15_q15", targets: [{ id: "1", text: "t15_ans15_1", isCorrect: true }, { id: "2", text: "t15_ans15_2", isCorrect: false }, { id: "3", text: "t15_ans15_3", isCorrect: false }], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "verbs_k2" }
  }
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

    // T1 - Adjectives (Size) - Easy
    t1_title: "Adjectives: Size",
    t1_text: "An adjective is a describing word! It tells us more about a noun. Words like 'big' or 'small' are adjectives.",
    t1_inst: "Shoot the word that describes size!",
    t1_h1: "Which word tells you how big something is?",
    t1_h2: "An elephant is 'big'.",
    t1_q1: "Find the adjective:",
    t1_ans1_1: "big", t1_ans1_2: "dog", t1_ans1_3: "run",

    // T2 - Adjectives (Color) - Easy
    t2_title: "Adjectives: Colors",
    t2_text: "Colors are adjectives too! They describe how things look, like a 'red' apple or a 'blue' sky.",
    t2_inst: "Tap the adjective in the sentence!",
    t2_h1: "Look for the color word.",
    t2_h2: "The word is 'blue'.",
    t2_w2_1: "The", t2_w2_2: "blue", t2_w2_3: "bird", t2_w2_4: "sings.",

    // T3 - Adjectives (Shape) - Easy
    t3_title: "Adjectives: Shape",
    t3_text: "Words that describe shapes, like 'round', 'square', or 'flat', are adjectives.",
    t3_inst: "Match the shape adjective to the noun!",
    t3_h1: "A ball is round. A box is square.",
    t3_h2: "Match 'round' with 'ball'.",
    t3_ml3_1: "round", t3_mr3_1: "ball",
    t3_ml3_2: "square", t3_mr3_2: "box",
    t3_ml3_3: "flat", t3_mr3_3: "paper",

    // T4 - Adjectives (Texture) - Easy
    t4_title: "Adjectives: Texture",
    t4_text: "Texture means how something feels. A bunny is 'soft', but a rock is 'hard'!",
    t4_inst: "Sort the describing words!",
    t4_h1: "Think about how it feels when you touch it.",
    t4_h2: "Put 'soft' in the Soft bucket.",
    t4_b4_1: "Soft Things", t4_b4_2: "Hard Things",
    t4_i4_1: "pillow", t4_i4_2: "bunny", t4_i4_3: "rock", t4_i4_4: "brick",

    // T5 - Adjectives (Numbers) - Easy
    t5_title: "Adjectives: Numbers",
    t5_text: "Numbers can be adjectives when they tell us 'how many'. Like 'three' cats or 'two' dogs.",
    t5_inst: "Fill in the number adjective!",
    t5_h1: "How many cats do you see?",
    t5_h2: "The word is 'three'.",
    t5_sent5: "I have ___ cats.",
    t5_c5_1: "three", t5_c5_2: "run", t5_c5_3: "happy", t5_c5_4: "dog",

    // T6 - Comparative (-er) - Medium
    t6_title: "Comparing Two Things",
    t6_text: "When we compare two things, we add '-er' to the adjective. A horse is 'faster' than a dog.",
    t6_inst: "Fill in the missing word!",
    t6_h1: "Add '-er' to 'fast'.",
    t6_h2: "The word is 'faster'.",
    t6_sent6: "A cheetah is ___ than a cat.",
    t6_c6_1: "faster", t6_c6_2: "fast", t6_c6_3: "fastest", t6_c6_4: "fasts",

    // T7 - Comparative (taller) - Medium
    t7_title: "Adding '-er'",
    t7_text: "If a tree is tall, a building is tall-er. We use '-er' for comparing two nouns.",
    t7_inst: "Match the word to its '-er' form!",
    t7_h1: "Find the word with '-er' at the end.",
    t7_h2: "Match tall with taller.",
    t7_ml7_1: "tall", t7_mr7_1: "taller",
    t7_ml7_2: "small", t7_mr7_2: "smaller",
    t7_ml7_3: "old", t7_mr7_3: "older",

    // T8 - Superlative (-est) - Medium
    t8_title: "Comparing Many Things",
    t8_text: "When we compare three or more things, we add '-est'. The whale is the 'biggest' animal!",
    t8_inst: "Put the sentence in order!",
    t8_h1: "Start with 'The'.",
    t8_h2: "The elephant is the biggest.",
    t8_sw8_1: "The", t8_sw8_2: "elephant", t8_sw8_3: "is", t8_sw8_4: "the", t8_sw8_5: "biggest.",

    // T9 - Superlative (-est) Practice - Medium
    t9_title: "Using '-est'",
    t9_text: "Remember, use '-er' for two things, and '-est' for the absolute most!",
    t9_inst: "Shoot the '-est' word!",
    t9_h1: "Look for the word ending in '-est'.",
    t9_h2: "The word is 'tallest'.",
    t9_q9: "Which word means the most tall?",
    t9_ans9_1: "tallest", t9_ans9_2: "taller", t9_ans9_3: "tall",

    // T10 - Adverbs (-ly) - Medium
    t10_title: "Adverbs",
    t10_text: "Adverbs describe VERBS! They tell us HOW something is done. They often end in '-ly'. Like 'quickly'.",
    t10_inst: "Tap the adverb in the sentence!",
    t10_h1: "Look for the word ending in '-ly'.",
    t10_h2: "The turtle walks 'slowly'.",
    t10_w10_1: "The", t10_w10_2: "turtle", t10_w10_3: "walks", t10_w10_4: "slowly.",

    // T11 - Adverbs (More Practice) - Hard
    t11_title: "More Adverbs",
    t11_text: "If you sing loud, you sing 'loudly'. If you are careful, you walk 'carefully'.",
    t11_inst: "Match the adjective to its adverb!",
    t11_h1: "Add '-ly' to make it an adverb.",
    t11_h2: "Match quiet with quietly.",
    t11_ml11_1: "quiet", t11_mr11_1: "quietly",
    t11_ml11_2: "safe", t11_mr11_2: "safely",
    t11_ml11_3: "loud", t11_mr11_3: "loudly",

    // T12 - Pronouns (Subject) - Hard
    t12_title: "Pronouns",
    t12_text: "A pronoun takes the place of a noun. Instead of saying 'Tom runs', we say 'He runs'.",
    t12_inst: "Fill in the missing pronoun!",
    t12_h1: "Use 'She' for a girl.",
    t12_h2: "Sarah is a girl, so use 'She'.",
    t12_sent12: "Sarah is my friend. ___ is nice.",
    t12_c12_1: "She", t12_c12_2: "He", t12_c12_3: "It", t12_c12_4: "They",

    // T13 - Pronouns (Plural) - Hard
    t13_title: "Plural Pronouns",
    t13_text: "When talking about more than one person, we use 'we' (if you are included) or 'they'.",
    t13_inst: "Shoot the correct pronoun!",
    t13_h1: "What do we call a group of other people?",
    t13_h2: "The pronoun is 'they'.",
    t13_q13: "What replaces 'The boys'?",
    t13_ans13_1: "They", t13_ans13_2: "He", t13_ans13_3: "It",

    // T14 - Adjective or Adverb? - Hard
    t14_title: "Adjective or Adverb?",
    t14_text: "Adjectives describe NOUNS (a quick boy). Adverbs describe VERBS (he runs quickly).",
    t14_inst: "Sort the words into Adjectives and Adverbs!",
    t14_h1: "Adverbs often end in '-ly'.",
    t14_h2: "'Quickly' is an adverb. 'Quick' is an adjective.",
    t14_b14_1: "Adjectives", t14_b14_2: "Adverbs (-ly)",
    t14_i14_1: "happy", t14_i14_2: "loud", t14_i14_3: "happily", t14_i14_4: "loudly",

    // T15 - Pronouns (Subject vs Object) - Hard
    t15_title: "Subject vs Object Pronouns",
    t15_text: "'I' do the action (Subject). Give it to 'me' (Object). He/Him, She/Her, We/Us!",
    t15_inst: "Sort the pronouns!",
    t15_h1: "Subject pronouns start the sentence. Object pronouns come after the verb.",
    t15_h2: "Put 'I' and 'She' in the Subject bucket.",
    t15_b15_1: "Subject (I/She)", t15_b15_2: "Object (Me/Her)",
    t15_i15_1: "I", t15_i15_2: "She", t15_i15_3: "me", t15_i15_4: "her"
  }
};

export const ADJ_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "🐘", color: "#10B981" },
    interactive: { type: "physics-slingshot", question: "t1_q1", targets: [{ id: "1", text: "t1_ans1_1", isCorrect: true }, { id: "2", text: "t1_ans1_2", isCorrect: false }, { id: "3", text: "t1_ans1_3", isCorrect: false }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "adj_adv_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "sentence-display", words: ["The", "blue", "bird", "sings."], color: "#10B981" },
    interactive: { type: "highlight-text", tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"], correctIndices: [1], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "adj_adv_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "text-bubbles", items: [{ text: "round", color: "#FFFFFF", bg: "#10B981" }, { text: "square", color: "#FFFFFF", bg: "#059669" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t3_ml3_1", right: "t3_mr3_1" }, { left: "t3_ml3_2", right: "t3_mr3_2" }, { left: "t3_ml3_3", right: "t3_mr3_3" }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "adj_adv_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "two-groups", left: { items: ["soft"], bg: "#D1FAE5", border: "#10B981" }, right: { items: ["hard"], bg: "#ECFDF5", border: "#059669" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "soft", label: "t4_b4_1" }, { id: "hard", label: "t4_b4_2" }], items: [{ text: "t4_i4_1", bucketId: "soft" }, { text: "t4_i4_2", bucketId: "soft" }, { text: "t4_i4_3", bucketId: "hard" }, { text: "t4_i4_4", bucketId: "hard" }], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "adj_adv_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "three", color: "#10B981" },
    interactive: { type: "gap-fill", sentence: "t5_sent5", choices: ["t5_c5_1", "t5_c5_2", "t5_c5_3", "t5_c5_4"], correctIndex: 0, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "adj_adv_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "compound-word", word1: "fast", word2: "er", result: "faster", color: "#10B981" },
    interactive: { type: "gap-fill", sentence: "t6_sent6", choices: ["t6_c6_1", "t6_c6_2", "t6_c6_3", "t6_c6_4"], correctIndex: 0, instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "adj_adv_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "letter-pairs", pairs: [["tall", "taller"], ["small", "smaller"]], color: "#10B981" },
    interactive: { type: "match-pairs", pairs: [{ left: "t7_ml7_1", right: "t7_mr7_1" }, { left: "t7_ml7_2", right: "t7_mr7_2" }, { left: "t7_ml7_3", right: "t7_mr7_3" }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "adj_adv_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "compound-word", word1: "big", word2: "gest", result: "biggest", color: "#10B981" },
    interactive: { type: "word-order", words: ["t8_sw8_1", "t8_sw8_2", "t8_sw8_3", "t8_sw8_4", "t8_sw8_5"], correctOrder: [0, 1, 2, 3, 4], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "adj_adv_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "text-bubbles", items: [{ text: "tall", color: "#FFFFFF", bg: "#10B981" }, { text: "taller", color: "#FFFFFF", bg: "#059669" }, { text: "tallest", color: "#FFFFFF", bg: "#047857" }] },
    interactive: { type: "physics-slingshot", question: "t9_q9", targets: [{ id: "1", text: "t9_ans9_1", isCorrect: true }, { id: "2", text: "t9_ans9_2", isCorrect: false }, { id: "3", text: "t9_ans9_3", isCorrect: false }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "adj_adv_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "sentence-display", words: ["The", "turtle", "walks", "slowly."], color: "#10B981" },
    interactive: { type: "highlight-text", tokens: ["t10_w10_1", "t10_w10_2", "t10_w10_3", "t10_w10_4"], correctIndices: [3], instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "adj_adv_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "compound-word", word1: "quiet", word2: "ly", result: "quietly", color: "#10B981" },
    interactive: { type: "match-pairs", pairs: [{ left: "t11_ml11_1", right: "t11_mr11_1" }, { left: "t11_ml11_2", right: "t11_mr11_2" }, { left: "t11_ml11_3", right: "t11_mr11_3" }], instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "adj_adv_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "simple-icon", icon: "👧", color: "#10B981" },
    interactive: { type: "gap-fill", sentence: "t12_sent12", choices: ["t12_c12_1", "t12_c12_2", "t12_c12_3", "t12_c12_4"], correctIndex: 0, instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "pronouns_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "text-bubbles", items: [{ text: "they", color: "#FFFFFF", bg: "#10B981" }, { text: "we", color: "#FFFFFF", bg: "#059669" }] },
    interactive: { type: "physics-slingshot", question: "t13_q13", targets: [{ id: "1", text: "t13_ans13_1", isCorrect: true }, { id: "2", text: "t13_ans13_2", isCorrect: false }, { id: "3", text: "t13_ans13_3", isCorrect: false }], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "pronouns_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "two-groups", left: { items: ["happy"], bg: "#D1FAE5", border: "#10B981" }, right: { items: ["happily"], bg: "#ECFDF5", border: "#059669" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "adj", label: "t14_b14_1" }, { id: "adv", label: "t14_b14_2" }], items: [{ text: "t14_i14_1", bucketId: "adj" }, { text: "t14_i14_2", bucketId: "adj" }, { text: "t14_i14_3", bucketId: "adv" }, { text: "t14_i14_4", bucketId: "adv" }], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "adj_adv_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "two-groups", left: { items: ["I", "She"], bg: "#D1FAE5", border: "#10B981" }, right: { items: ["me", "her"], bg: "#ECFDF5", border: "#059669" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "sub", label: "t15_b15_1" }, { id: "obj", label: "t15_b15_2" }], items: [{ text: "t15_i15_1", bucketId: "sub" }, { text: "t15_i15_2", bucketId: "sub" }, { text: "t15_i15_3", bucketId: "obj" }, { text: "t15_i15_4", bucketId: "obj" }], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "pronouns_k2" }
  }
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i4 — Sentence Station (💬, #F59E0B)
// Topics: simple sentences, compound sentences (and/but/or), expanding,
//         sentence order, fragments vs complete sentences
// ─────────────────────────────────────────────────────────────────────────────

export const SENTENCE2_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Sentence Station",

    // T1 - What is a sentence? (Easy)
    t1_title: "What is a Sentence?",
    t1_text: "A complete sentence has a WHO and a DO! It tells a whole idea. 'The dog runs' is a complete sentence.",
    t1_inst: "Sort into Complete Sentence or Not a Sentence!",
    t1_h1: "Does it have a 'who' and an action?",
    t1_h2: "The dog barks is complete. Just 'the dog' is not.",
    t1_b1_1: "Complete Sentence", t1_b1_2: "Not a Sentence",
    t1_i1_1: "The cat jumps.", t1_i1_2: "He is happy.", t1_i1_3: "The red apple", t1_i1_4: "Runs fast",

    // T2 - Subject (Who) (Easy)
    t2_title: "The Subject",
    t2_text: "The subject is WHO or WHAT the sentence is about. Every sentence needs a subject!",
    t2_inst: "Tap the subject of the sentence!",
    t2_h1: "Who is doing the action?",
    t2_h2: "The 'bird' is the one flying.",
    t2_w2_1: "The", t2_w2_2: "bird", t2_w2_3: "flies", t2_w2_4: "high.",

    // T3 - Predicate (Action) (Easy)
    t3_title: "The Action",
    t3_text: "The predicate is the action part! It tells us what the subject DOES or IS.",
    t3_inst: "Match the subject to its action!",
    t3_h1: "Find the action that makes sense.",
    t3_h2: "A frog jumps.",
    t3_ml3_1: "The frog", t3_mr3_1: "jumps.",
    t3_ml3_2: "The sun", t3_mr3_2: "shines.",
    t3_ml3_3: "The baby", t3_mr3_3: "cries.",

    // T4 - Sentence Order (Easy)
    t4_title: "Sentence Order",
    t4_text: "Sentences usually start with the subject (Who), then the action (Do). Put the words in order!",
    t4_inst: "Build the sentence in the right order!",
    t4_h1: "Start with the capital letter.",
    t4_h2: "The boy jumps.",
    t4_sw4_1: "The", t4_sw4_2: "boy", t4_sw4_3: "jumps.",

    // T5 - Compound 'and' (Easy)
    t5_title: "Joining with 'and'",
    t5_text: "We use 'and' to join two ideas that go together. I like apples AND I like bananas!",
    t5_inst: "Fill in the connecting word!",
    t5_h1: "Which word adds things together?",
    t5_h2: "Use 'and'.",
    t5_sent5: "I have a cat ___ a dog.",
    t5_c5_1: "and", t5_c5_2: "but", t5_c5_3: "or", t5_c5_4: "so",

    // T6 - Compound 'but' (Medium)
    t6_title: "Joining with 'but'",
    t6_text: "We use 'but' when things are different or unexpected. It is raining, BUT I am not wet.",
    t6_inst: "Choose the correct word!",
    t6_h1: "It's cold, so you wouldn't expect to eat ice cream.",
    t6_h2: "Use 'but' to show a difference.",
    t6_sent6: "It is cold, ___ I want ice cream.",
    t6_c6_1: "but", t6_c6_2: "and", t6_c6_3: "or", t6_c6_4: "because",

    // T7 - Compound 'or' (Medium)
    t7_title: "Making Choices: 'or'",
    t7_text: "We use 'or' when we have a choice between two things. Do you want milk OR juice?",
    t7_inst: "Shoot the word that shows a choice!",
    t7_h1: "Which word asks you to choose?",
    t7_h2: "The word is 'or'.",
    t7_q7: "Find the choice word:",
    t7_ans7_1: "or", t7_ans7_2: "and", t7_ans7_3: "but",

    // T8 - Expanding (Where) (Medium)
    t8_title: "Expanding: Where?",
    t8_text: "We can make a simple sentence bigger by adding WHERE it happens. 'The cat sleeps on the bed.'",
    t8_inst: "Build the expanded sentence!",
    t8_h1: "Put the 'Where' part at the end.",
    t8_h2: "The cat sleeps on the bed.",
    t8_f8_1: "The cat", t8_f8_2: "sleeps", t8_f8_3: "on", t8_f8_4: "the bed.",

    // T9 - Expanding (When) (Medium)
    t9_title: "Expanding: When?",
    t9_text: "Make your sentence better by telling WHEN something happens! Like 'today', 'now', or 'yesterday'.",
    t9_inst: "Tap the word that tells WHEN!",
    t9_h1: "Look for a time word.",
    t9_h2: "The word is 'today'.",
    t9_w9_1: "We", t9_w9_2: "will", t9_w9_3: "play", t9_w9_4: "outside", t9_w9_5: "today.",

    // T10 - Fragments (Medium)
    t10_title: "Fixing Fragments",
    t10_text: "A sentence fragment is missing a part. 'Runs to the park' is a fragment because we don't know WHO is running!",
    t10_inst: "Match the fragment to make a complete sentence!",
    t10_h1: "Give each action a subject.",
    t10_h2: "The dog -> barks loud.",
    t10_ml10_1: "The dog", t10_mr10_1: "barks loud.",
    t10_ml10_2: "My mom", t10_mr10_2: "drives a car.",
    t10_ml10_3: "The bird", t10_mr10_3: "sings a song.",

    // T11 - Question Sentences (Hard)
    t11_title: "Asking Questions",
    t11_text: "To ask a question, we sometimes put the verb first! Instead of 'He is happy', we ask 'Is he happy?'",
    t11_inst: "Put the words in order to make a question!",
    t11_h1: "Start with 'Is'.",
    t11_h2: "Is the cat sleeping?",
    t11_sw11_1: "Is", t11_sw11_2: "the", t11_sw11_3: "cat", t11_sw11_4: "sleeping?",

    // T12 - Expanding (Why) (Hard)
    t12_title: "Expanding: Why?",
    t12_text: "Tell WHY something happens by using the word 'because'. 'I am wet because it is raining.'",
    t12_inst: "Fill in the word that tells why!",
    t12_h1: "Which word explains a reason?",
    t12_h2: "The word is 'because'.",
    t12_sent12: "I am happy ___ I won!",
    t12_c12_1: "because", t12_c12_2: "but", t12_c12_3: "or", t12_c12_4: "and",

    // T13 - Joining Sentences (Hard)
    t13_title: "Joining Sentences",
    t13_text: "You can take two short sentences and make one big one. 'He was tired, SO he went to bed.'",
    t13_inst: "Shoot the correct connecting word!",
    t13_h1: "Which word means 'for that reason'?",
    t13_h2: "Shoot 'so'.",
    t13_q13: "He was hungry, ___ he ate.",
    t13_ans13_1: "so", t13_ans13_2: "or", t13_ans13_3: "but",

    // T14 - Punctuation (Hard)
    t14_title: "Ending Marks",
    t14_text: "A statement ends with a period (.). A question ends with a question mark (?). An exclamation ends with (!).",
    t14_inst: "Sort the sentences by their ending mark!",
    t14_h1: "Look at what the sentence does.",
    t14_h2: "'Who are you?' asks a question.",
    t14_b14_1: "Question (?)", t14_b14_2: "Statement (.)",
    t14_i14_1: "Who are you?", t14_i14_2: "Is it raining?", t14_i14_3: "I like dogs.", t14_i14_4: "The car is fast.",

    // T15 - Mixed Expanding (Hard)
    t15_title: "Super Sentences",
    t15_text: "A super sentence tells us WHO, DOES WHAT, WHEN, and WHERE! 'The cat sleeps on the bed today.'",
    t15_inst: "Build the super sentence!",
    t15_h1: "Start with Who, then What they do, then Where.",
    t15_h2: "The boy plays at the park.",
    t15_f15_1: "The boy", t15_f15_2: "plays", t15_f15_3: "at", t15_f15_4: "the park."
  }
};

export const SENTENCE2_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "simple-icon", icon: "💬", color: "#F59E0B" },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "yes", label: "t1_b1_1" }, { id: "no", label: "t1_b1_2" }], items: [{ text: "t1_i1_1", bucketId: "yes" }, { text: "t1_i1_2", bucketId: "yes" }, { text: "t1_i1_3", bucketId: "no" }, { text: "t1_i1_4", bucketId: "no" }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "simple_compound_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "sentence-display", words: ["The", "bird", "flies", "high."], color: "#F59E0B" },
    interactive: { type: "highlight-text", tokens: ["t2_w2_1", "t2_w2_2", "t2_w2_3", "t2_w2_4"], correctIndices: [1], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "simple_compound_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "text-bubbles", items: [{ text: "Who?", color: "#FFFFFF", bg: "#F59E0B" }, { text: "Action", color: "#FFFFFF", bg: "#D97706" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t3_ml3_1", right: "t3_mr3_1" }, { left: "t3_ml3_2", right: "t3_mr3_2" }, { left: "t3_ml3_3", right: "t3_mr3_3" }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "simple_compound_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "🧩", color: "#F59E0B" },
    interactive: { type: "word-order", words: ["t4_sw4_1", "t4_sw4_2", "t4_sw4_3"], correctOrder: [0, 1, 2], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "simple_compound_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "and", color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t5_sent5", choices: ["t5_c5_1", "t5_c5_2", "t5_c5_3", "t5_c5_4"], correctIndex: 0, instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "simple_compound_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "but", color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t6_sent6", choices: ["t6_c6_1", "t6_c6_2", "t6_c6_3", "t6_c6_4"], correctIndex: 0, instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "simple_compound_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "two-groups", left: { items: ["milk"], bg: "#FEF3C7", border: "#F59E0B" }, right: { items: ["juice"], bg: "#FFFBEB", border: "#D97706" } },
    interactive: { type: "physics-slingshot", question: "t7_q7", targets: [{ id: "1", text: "t7_ans7_1", isCorrect: true }, { id: "2", text: "t7_ans7_2", isCorrect: false }, { id: "3", text: "t7_ans7_3", isCorrect: false }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "simple_compound_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "Where?", color: "#FFFFFF", bg: "#F59E0B" }] },
    interactive: { type: "sentence-build", fragments: ["t8_f8_1", "t8_f8_2", "t8_f8_3", "t8_f8_4"], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "expanding_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "sentence-display", words: ["We", "will", "play", "outside", "today."], color: "#F59E0B" },
    interactive: { type: "highlight-text", tokens: ["t9_w9_1", "t9_w9_2", "t9_w9_3", "t9_w9_4", "t9_w9_5"], correctIndices: [4], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "expanding_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "letter-pairs", pairs: [["The dog", "barks."]], color: "#F59E0B" },
    interactive: { type: "match-pairs", pairs: [{ left: "t10_ml10_1", right: "t10_mr10_1" }, { left: "t10_ml10_2", right: "t10_mr10_2" }, { left: "t10_ml10_3", right: "t10_mr10_3" }], instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "simple_compound_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "simple-icon", icon: "❓", color: "#F59E0B" },
    interactive: { type: "word-order", words: ["t11_sw11_1", "t11_sw11_2", "t11_sw11_3", "t11_sw11_4"], correctOrder: [0, 1, 2, 3], instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "expanding_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "because", color: "#F59E0B" },
    interactive: { type: "gap-fill", sentence: "t12_sent12", choices: ["t12_c12_1", "t12_c12_2", "t12_c12_3", "t12_c12_4"], correctIndex: 0, instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "expanding_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "text-bubbles", items: [{ text: "so", color: "#FFFFFF", bg: "#F59E0B" }, { text: "but", color: "#FFFFFF", bg: "#D97706" }] },
    interactive: { type: "physics-slingshot", question: "t13_q13", targets: [{ id: "1", text: "t13_ans13_1", isCorrect: true }, { id: "2", text: "t13_ans13_2", isCorrect: false }, { id: "3", text: "t13_ans13_3", isCorrect: false }], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "simple_compound_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "two-groups", left: { items: ["?", "?"], bg: "#FEF3C7", border: "#F59E0B" }, right: { items: [".", "."], bg: "#FFFBEB", border: "#D97706" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "q", label: "t14_b14_1" }, { id: "s", label: "t14_b14_2" }], items: [{ text: "t14_i14_1", bucketId: "q" }, { text: "t14_i14_2", bucketId: "q" }, { text: "t14_i14_3", bucketId: "s" }, { text: "t14_i14_4", bucketId: "s" }], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "simple_compound_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "sentence-display", words: ["The", "boy", "plays", "at", "the", "park."], color: "#F59E0B" },
    interactive: { type: "sentence-build", fragments: ["t15_f15_1", "t15_f15_2", "t15_f15_3", "t15_f15_4"], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "expanding_k2" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i5 — Vowel Valley (🌈, #6366F1)
// Topics: long vowel teams (ee/ea, oa/ow, ai/ay, oo), 
//         silent-e pattern, vowel + r (ar/or/er/ir/ur)
// ─────────────────────────────────────────────────────────────────────────────

export const VOWEL_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Vowel Valley",

    // T1 - Vowel Team: ee (Easy)
    t1_title: "Vowel Team: ee",
    t1_text: "When two vowels go walking, the first one does the talking! 'e' and 'e' together say the long /E/ sound.",
    t1_inst: "Match the 'ee' words!",
    t1_h1: "Look for the words with 'ee' in the middle.",
    t1_h2: "Match 'tree' with 'tree'.",
    t1_ml1_1: "tree", t1_mr1_1: "tree",
    t1_ml1_2: "see", t1_mr1_2: "see",
    t1_ml1_3: "bee", t1_mr1_3: "bee",

    // T2 - Vowel Team: ea (Easy)
    t2_title: "Vowel Team: ea",
    t2_text: "'e' and 'a' together also make the long /E/ sound! Like in 'leaf' or 'read'.",
    t2_inst: "Fill in the missing vowel team!",
    t2_h1: "It makes the long E sound.",
    t2_h2: "Use 'ea' to spell 'leaf'.",
    t2_sent2: "The green l___f fell from the tree.",
    t2_c2_1: "ea", t2_c2_2: "ee", t2_c2_3: "ai", t2_c2_4: "oa",

    // T3 - ee vs ea (Easy)
    t3_title: "Sorting /E/ Sounds",
    t3_text: "Both 'ee' and 'ea' say their name! Let's sort the words by how they are spelled.",
    t3_inst: "Sort the words into 'ee' and 'ea'!",
    t3_h1: "Look closely at the letters inside the word.",
    t3_h2: "Put 'sleep' in the 'ee' bucket.",
    t3_b3_1: "Spelled 'ee'", t3_b3_2: "Spelled 'ea'",
    t3_i3_1: "sleep", t3_i3_2: "green", t3_i3_3: "eat", t3_i3_4: "read",

    // T4 - Vowel Team: oa (Easy)
    t4_title: "Vowel Team: oa",
    t4_text: "'o' and 'a' together make the long /O/ sound. The 'o' does the talking! Like in 'boat'.",
    t4_inst: "Put the sentence in order!",
    t4_h1: "Start with 'The'.",
    t4_h2: "The boat floats.",
    t4_sw4_1: "The", t4_sw4_2: "boat", t4_sw4_3: "floats.",

    // T5 - Vowel Team: ow (Easy)
    t5_title: "Vowel Team: ow",
    t5_text: "'o' and 'w' at the end of a word can make the long /O/ sound. Like in 'snow' or 'grow'.",
    t5_inst: "Shoot the 'ow' word!",
    t5_h1: "Look for the word that ends with 'ow'.",
    t5_h2: "The word is 'snow'.",
    t5_q5: "Which word has the long O sound?",
    t5_ans5_1: "snow", t5_ans5_2: "cat", t5_ans5_3: "pig",

    // T6 - Vowel Team: ai (Medium)
    t6_title: "Vowel Team: ai",
    t6_text: "'a' and 'i' together in the middle of a word say the long /A/ sound. Like in 'rain'.",
    t6_inst: "Tap the word with the 'ai' team!",
    t6_h1: "Look for the letters 'a' and 'i' next to each other.",
    t6_h2: "The word is 'rain'.",
    t6_w6_1: "The", t6_w6_2: "rain", t6_w6_3: "is", t6_w6_4: "cold.",

    // T7 - Vowel Team: ay (Medium)
    t7_title: "Vowel Team: ay",
    t7_text: "When you hear the long /A/ sound at the END of a word, it is usually spelled 'ay'. Like 'play'.",
    t7_inst: "Build the sentence!",
    t7_h1: "Start with 'We'.",
    t7_h2: "We play all day.",
    t7_f7_1: "We", t7_f7_2: "play", t7_f7_3: "all", t7_f7_4: "day.",

    // T8 - The 'oo' Sound (Long) (Medium)
    t8_title: "The Long 'oo' Sound",
    t8_text: "Two o's together can make the sound you hear in 'moon' or 'food'.",
    t8_inst: "Fill in the missing word!",
    t8_h1: "Look for the long 'oo' word.",
    t8_h2: "The rocket goes to the 'moon'.",
    t8_sent8: "I see the bright ___.",
    t8_c8_1: "moon", t8_c8_2: "sun", t8_c8_3: "star", t8_c8_4: "sky",

    // T9 - The 'oo' Sound (Short) (Medium)
    t9_title: "The Short 'oo' Sound",
    t9_text: "Sometimes 'oo' makes a shorter sound, like in 'book' or 'foot'!",
    t9_inst: "Shoot the word with the short 'oo' sound!",
    t9_h1: "Which word sounds like 'look'?",
    t9_h2: "The word is 'book'.",
    t9_q9: "Find the short 'oo' word:",
    t9_ans9_1: "book", t9_ans9_2: "moon", t9_ans9_3: "food",

    // T10 - Vowel + r: ar (Medium)
    t10_title: "Bossy 'R': ar",
    t10_text: "When an 'r' comes after a vowel, it bosses the vowel around! 'ar' says /ar/ like a pirate! (car, star)",
    t10_inst: "Match the 'ar' words!",
    t10_h1: "Find the rhyming words.",
    t10_h2: "Car rhymes with star.",
    t10_ml10_1: "car", t10_mr10_1: "star",
    t10_ml10_2: "farm", t10_mr10_2: "harm",
    t10_ml10_3: "dark", t10_mr10_3: "park",

    // T11 - Vowel + r: or (Hard)
    t11_title: "Bossy 'R': or",
    t11_text: "The letters 'or' together make the sound in 'corn' or 'fork'.",
    t11_inst: "Fill in the missing bossy R team!",
    t11_h1: "It sounds like 'or'.",
    t11_h2: "Use 'or' to make 'corn'.",
    t11_sent11: "I like to eat sweet c___n.",
    t11_c11_1: "or", t11_c11_2: "ar", t11_c11_3: "er", t11_c11_4: "ur",

    // T12 - Vowel + r: er, ir, ur (Hard)
    t12_title: "Bossy 'R': er, ir, ur",
    t12_text: "These three teams all make the exact SAME sound: /er/! Like in 'her', 'bird', and 'turn'.",
    t12_inst: "Match the word to its spelling!",
    t12_h1: "Look closely at the vowel before the 'r'.",
    t12_h2: "Bird has an 'ir'.",
    t12_ml12_1: "her", t12_mr12_1: "er",
    t12_ml12_2: "bird", t12_mr12_2: "ir",
    t12_ml12_3: "turn", t12_mr12_3: "ur",

    // T13 - Bossy R Practice (Hard)
    t13_title: "Finding Bossy 'R'",
    t13_text: "Remember, the 'r' changes the vowel's sound. Let's find the bossy 'R' word in a sentence.",
    t13_inst: "Tap the word with a bossy 'R'!",
    t13_h1: "Look for 'er', 'ir', or 'ur'.",
    t13_h2: "The word is 'bird'.",
    t13_w13_1: "The", t13_w13_2: "little", t13_w13_3: "bird", t13_w13_4: "flew", t13_w13_5: "away.",

    // T14 - Silent E Review (Hard)
    t14_title: "Magic 'E' Review",
    t14_text: "Don't forget the Magic 'E'! It jumps over one consonant to make the vowel say its name. Pin becomes pine!",
    t14_inst: "Shoot the Magic 'E' word!",
    t14_h1: "Look for the 'e' at the end.",
    t14_h2: "The word is 'pine'.",
    t14_q14: "Find the Magic E word:",
    t14_ans14_1: "pine", t14_ans14_2: "pin", t14_ans14_3: "pig",

    // T15 - Vowel Team Sorting (Hard)
    t15_title: "Vowel Team Challenge",
    t15_text: "You know so many vowel teams now! Let's sort the long /A/ sounds and the long /O/ sounds.",
    t15_inst: "Sort the words into their vowel teams!",
    t15_h1: "ai/ay says A. oa/ow says O.",
    t15_h2: "Rain has an 'ai'. Boat has an 'oa'.",
    t15_b15_1: "Long A (ai/ay)", t15_b15_2: "Long O (oa/ow)",
    t15_i15_1: "rain", t15_i15_2: "play", t15_i15_3: "boat", t15_i15_4: "snow"
  }
};

export const VOWEL_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "tree", color: "#6366F1" },
    interactive: { type: "match-pairs", pairs: [{ left: "t1_ml1_1", right: "t1_mr1_1" }, { left: "t1_ml1_2", right: "t1_mr1_2" }, { left: "t1_ml1_3", right: "t1_mr1_3" }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "vowel_teams_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "text-bubbles", items: [{ text: "ea", color: "#FFFFFF", bg: "#6366F1" }] },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "vowel_teams_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "two-groups", left: { items: ["ee"], bg: "#E0E7FF", border: "#6366F1" }, right: { items: ["ea"], bg: "#EEF2FF", border: "#4F46E5" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "ee", label: "t3_b3_1" }, { id: "ea", label: "t3_b3_2" }], items: [{ text: "t3_i3_1", bucketId: "ee" }, { text: "t3_i3_2", bucketId: "ee" }, { text: "t3_i3_3", bucketId: "ea" }, { text: "t3_i3_4", bucketId: "ea" }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "vowel_teams_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "⛵", color: "#6366F1" },
    interactive: { type: "word-order", words: ["t4_sw4_1", "t4_sw4_2", "t4_sw4_3"], correctOrder: [0, 1, 2], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "vowel_teams_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "compound-word", word1: "sn", word2: "ow", result: "snow", color: "#6366F1" },
    interactive: { type: "physics-slingshot", question: "t5_q5", targets: [{ id: "1", text: "t5_ans5_1", isCorrect: true }, { id: "2", text: "t5_ans5_2", isCorrect: false }, { id: "3", text: "t5_ans5_3", isCorrect: false }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "vowel_teams_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "sentence-display", words: ["The", "rain", "is", "cold."], color: "#6366F1" },
    interactive: { type: "highlight-text", tokens: ["t6_w6_1", "t6_w6_2", "t6_w6_3", "t6_w6_4"], correctIndices: [1], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "vowel_teams_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "text-bubbles", items: [{ text: "ay", color: "#FFFFFF", bg: "#6366F1" }] },
    interactive: { type: "sentence-build", fragments: ["t7_f7_1", "t7_f7_2", "t7_f7_3", "t7_f7_4"], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "vowel_teams_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "rhyme-pair", word1: "moon", word2: "soon", color: "#6366F1" },
    interactive: { type: "gap-fill", sentence: "t8_sent8", choices: ["t8_c8_1", "t8_c8_2", "t8_c8_3", "t8_c8_4"], correctIndex: 0, instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "vowel_teams_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "simple-icon", icon: "📖", color: "#6366F1" },
    interactive: { type: "physics-slingshot", question: "t9_q9", targets: [{ id: "1", text: "t9_ans9_1", isCorrect: true }, { id: "2", text: "t9_ans9_2", isCorrect: false }, { id: "3", text: "t9_ans9_3", isCorrect: false }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "vowel_teams_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "letter-circles", letters: ["a", "r"], color: "#6366F1" },
    interactive: { type: "match-pairs", pairs: [{ left: "t10_ml10_1", right: "t10_mr10_1" }, { left: "t10_ml10_2", right: "t10_mr10_2" }, { left: "t10_ml10_3", right: "t10_mr10_3" }], instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "vowel_patterns_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "corn", color: "#6366F1" },
    interactive: { type: "gap-fill", sentence: "t11_sent11", choices: ["t11_c11_1", "t11_c11_2", "t11_c11_3", "t11_c11_4"], correctIndex: 0, instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "vowel_patterns_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "text-bubbles", items: [{ text: "er", color: "#FFFFFF", bg: "#6366F1" }, { text: "ir", color: "#FFFFFF", bg: "#4F46E5" }, { text: "ur", color: "#FFFFFF", bg: "#4338CA" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t12_ml12_1", right: "t12_mr12_1" }, { left: "t12_ml12_2", right: "t12_mr12_2" }, { left: "t12_ml12_3", right: "t12_mr12_3" }], instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "vowel_patterns_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "sentence-display", words: ["The", "little", "bird", "flew", "away."], color: "#6366F1" },
    interactive: { type: "highlight-text", tokens: ["t13_w13_1", "t13_w13_2", "t13_w13_3", "t13_w13_4", "t13_w13_5"], correctIndices: [2], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "vowel_patterns_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "letter-pairs", pairs: [["pin", "pine"]], color: "#6366F1" },
    interactive: { type: "physics-slingshot", question: "t14_q14", targets: [{ id: "1", text: "t14_ans14_1", isCorrect: true }, { id: "2", text: "t14_ans14_2", isCorrect: false }, { id: "3", text: "t14_ans14_3", isCorrect: false }], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "vowel_patterns_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "two-groups", left: { items: ["ai", "ay"], bg: "#E0E7FF", border: "#6366F1" }, right: { items: ["oa", "ow"], bg: "#EEF2FF", border: "#4F46E5" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "a", label: "t15_b15_1" }, { id: "o", label: "t15_b15_2" }], items: [{ text: "t15_i15_1", bucketId: "a" }, { text: "t15_i15_2", bucketId: "a" }, { text: "t15_i15_3", bucketId: "o" }, { text: "t15_i15_4", bucketId: "o" }], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "vowel_teams_k2" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i6 — Prefix Planet (🔡, #EC4899)
// Topics: prefixes (un-/re-/pre-), suffixes (-ing/-ed/-er/-est), 
//         irregular spelling (said/was/were/their/there/they're)
// ─────────────────────────────────────────────────────────────────────────────

export const PREFIX_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Prefix Planet",

    // T1 - Prefix un- (not) - Easy
    t1_title: "Prefix: un-",
    t1_text: "A prefix is a small word part added to the START of a word. 'un-' means 'not'. So, 'unhappy' means NOT happy!",
    t1_inst: "Match the word to its 'un-' word!",
    t1_h1: "Add 'un-' to the beginning.",
    t1_h2: "Match 'kind' with 'unkind'.",
    t1_ml1_1: "happy", t1_mr1_1: "unhappy",
    t1_ml1_2: "kind", t1_mr1_2: "unkind",
    t1_ml1_3: "safe", t1_mr1_3: "unsafe",

    // T2 - Prefix un- (action) - Easy
    t2_title: "More 'un-' Words",
    t2_text: "'un-' can also mean doing the opposite action. If you lock a door, you can 'unlock' it!",
    t2_inst: "Fill in the missing word!",
    t2_h1: "Use the word that means the opposite of pack.",
    t2_h2: "The word is 'unpack'.",
    t2_sent2: "I need to ___ my bag after school.",
    t2_c2_1: "unpack", t2_c2_2: "pack", t2_c2_3: "repack", t2_c2_4: "packing",

    // T3 - Prefix re- (again) - Easy
    t3_title: "Prefix: re-",
    t3_text: "The prefix 're-' means 'again'. If you 'redo' your drawing, you do it again!",
    t3_inst: "Shoot the word that means 'read again'!",
    t3_h1: "Add 're-' to the word 'read'.",
    t3_h2: "The word is 'reread'.",
    t3_q3: "Which word means to read again?",
    t3_ans3_1: "reread", t3_ans3_2: "unread", t3_ans3_3: "reading",

    // T4 - Prefix re- practice - Easy
    t4_title: "Using 're-'",
    t4_text: "If you make a mistake writing, you can 'rewrite' it. You write it one more time!",
    t4_inst: "Tap the word with the 're-' prefix!",
    t4_h1: "Look for the word that starts with 're-'.",
    t4_h2: "The word is 'rewrite'.",
    t4_w4_1: "I", t4_w4_2: "will", t4_w4_3: "rewrite", t4_w4_4: "my", t4_w4_5: "story.",

    // T5 - Prefix pre- (before) - Easy
    t5_title: "Prefix: pre-",
    t5_text: "The prefix 'pre-' means 'before'. A 'preview' is what you view BEFORE a movie starts!",
    t5_inst: "Put the sentence in order!",
    t5_h1: "Start with 'We'.",
    t5_h2: "We saw a preview.",
    t5_sw5_1: "We", t5_sw5_2: "saw", t5_sw5_3: "a", t5_sw5_4: "preview.",

    // T6 - Suffix -ing (now) - Medium
    t6_title: "Suffix: -ing",
    t6_text: "A suffix goes at the END of a word. '-ing' means it is happening right now! Like 'jumping'.",
    t6_inst: "Build the word!",
    t6_h1: "Add the suffix to the base word.",
    t6_h2: "jump + ing = jumping.",
    t6_ml6_1: "jump", t6_mr6_1: "+ ing",
    t6_ml6_2: "play", t6_mr6_2: "+ ing",
    t6_ml6_3: "read", t6_mr6_3: "+ ing",

    // T7 - Suffix -ed (past) - Medium
    t7_title: "Suffix: -ed",
    t7_text: "The suffix '-ed' means the action already happened in the past. Today I walk, yesterday I walked.",
    t7_inst: "Fill in the past tense word!",
    t7_h1: "Look for the word that ends with '-ed'.",
    t7_h2: "Choose 'played'.",
    t7_sent7: "Yesterday, we ___ a fun game.",
    t7_c7_1: "played", t7_c7_2: "play", t7_c7_3: "playing", t7_c7_4: "plays",

    // T8 - Suffix -er (more) - Medium
    t8_title: "Suffix: -er",
    t8_text: "We use the suffix '-er' to compare two things. If you are fast, your friend might be fast-er!",
    t8_inst: "Sort the words by their ending!",
    t8_h1: "Look at the end of the word.",
    t8_h2: "'Faster' ends in -er.",
    t8_b8_1: "Base Word", t8_b8_2: "Ends in -er",
    t8_i8_1: "fast", t8_i8_2: "tall", t8_i8_3: "faster", t8_i8_4: "taller",

    // T9 - Suffix -est (most) - Medium
    t9_title: "Suffix: -est",
    t9_text: "We use '-est' when something is the MOST! The cheetah is the fast-est animal of all.",
    t9_inst: "Shoot the word that means the MOST fast!",
    t9_h1: "Look for the word ending in '-est'.",
    t9_h2: "The word is 'fastest'.",
    t9_q9: "Which means the most fast?",
    t9_ans9_1: "fastest", t9_ans9_2: "faster", t9_ans9_3: "fast",

    // T10 - Sorting Suffixes - Medium
    t10_title: "Sorting Suffixes",
    t10_text: "Does the word mean it's happening now (-ing), or did it happen in the past (-ed)?",
    t10_inst: "Sort the words into Now or Past!",
    t10_h1: "'-ing' is now. '-ed' is past.",
    t10_h2: "Put 'jumping' in Now, and 'jumped' in Past.",
    t10_b10_1: "Happening Now (-ing)", t10_b10_2: "In the Past (-ed)",
    t10_i10_1: "jumping", t10_i10_2: "playing", t10_i10_3: "jumped", t10_i10_4: "played",

    // T11 - Irregular: there / their - Hard
    t11_title: "Tricky Words: there & their",
    t11_text: "'There' points to a place (over there). 'Their' means it belongs to them (their dog).",
    t11_inst: "Fill in the correct word!",
    t11_h1: "Are we pointing to a place?",
    t11_h2: "Use 'there' to point to the park.",
    t11_sent11: "Look over ___ at the park!",
    t11_c11_1: "there", t11_c11_2: "their", t11_c11_3: "they're", t11_c11_4: "the",

    // T12 - Irregular: they're - Hard
    t12_title: "Tricky Word: they're",
    t12_text: "'They're' has a little mark called an apostrophe. It is a short way to say 'they are'!",
    t12_inst: "Shoot what 'they're' means!",
    t12_h1: "It is short for two words.",
    t12_h2: "They're means 'they are'.",
    t12_q12: "What does they're mean?",
    t12_ans12_1: "they are", t12_ans12_2: "their dog", t12_ans12_3: "over there",

    // T13 - Irregular: said - Hard
    t13_title: "Irregular Spelling: said",
    t13_text: "Some words don't follow the rules! We don't spell it 'sayed'. We spell it 'said'.",
    t13_inst: "Tap the word 'said'!",
    t13_h1: "Look for s-a-i-d.",
    t13_h2: "Tap the second word.",
    t13_w13_1: "Mom", t13_w13_2: "said", t13_w13_3: "it", t13_w13_4: "is", t13_w13_5: "time.",

    // T14 - Irregular: was / were - Hard
    t14_title: "Irregular Words: was & were",
    t14_text: "These words tell us about the past. 'I was happy', but 'we were happy'.",
    t14_inst: "Build the sentence!",
    t14_h1: "Start with 'We'.",
    t14_h2: "We were at the park.",
    t14_f14_1: "We", t14_f14_2: "were", t14_f14_3: "at", t14_f14_4: "the park.",

    // T15 - Prefix or Suffix? - Hard
    t15_title: "Prefix or Suffix?",
    t15_text: "Remember: A prefix is at the START (un-). A suffix is at the END (-ing).",
    t15_inst: "Sort the word parts!",
    t15_h1: "Does it go at the beginning or the end?",
    t15_h2: "'un-' is a prefix, '-ed' is a suffix.",
    t15_b15_1: "Prefix (Start)", t15_b15_2: "Suffix (End)",
    t15_i15_1: "un-", t15_i15_2: "re-", t15_i15_3: "-ing", t15_i15_4: "-ed"
  }
};

export const PREFIX_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "letter-pairs", pairs: [["happy", "unhappy"], ["kind", "unkind"]], color: "#EC4899" },
    interactive: { type: "match-pairs", pairs: [{ left: "t1_ml1_1", right: "t1_mr1_1" }, { left: "t1_ml1_2", right: "t1_mr1_2" }, { left: "t1_ml1_3", right: "t1_mr1_3" }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "prefixes_suffixes_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "compound-word", word1: "un", word2: "pack", result: "unpack", color: "#EC4899" },
    interactive: { type: "gap-fill", sentence: "t2_sent2", choices: ["t2_c2_1", "t2_c2_2", "t2_c2_3", "t2_c2_4"], correctIndex: 0, instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "prefixes_suffixes_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "text-bubbles", items: [{ text: "re", color: "#FFFFFF", bg: "#EC4899" }, { text: "read", color: "#FFFFFF", bg: "#DB2777" }] },
    interactive: { type: "physics-slingshot", question: "t3_q3", targets: [{ id: "1", text: "t3_ans3_1", isCorrect: true }, { id: "2", text: "t3_ans3_2", isCorrect: false }, { id: "3", text: "t3_ans3_3", isCorrect: false }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "prefixes_suffixes_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "sentence-display", words: ["I", "will", "rewrite", "my", "story."], color: "#EC4899" },
    interactive: { type: "highlight-text", tokens: ["t4_w4_1", "t4_w4_2", "t4_w4_3", "t4_w4_4", "t4_w4_5"], correctIndices: [2], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "prefixes_suffixes_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "compound-word", word1: "pre", word2: "view", result: "preview", color: "#EC4899" },
    interactive: { type: "word-order", words: ["t5_sw5_1", "t5_sw5_2", "t5_sw5_3", "t5_sw5_4"], correctOrder: [0, 1, 2, 3], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "prefixes_suffixes_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "compound-word", word1: "jump", word2: "ing", result: "jumping", color: "#EC4899" },
    interactive: { type: "match-pairs", pairs: [{ left: "t6_ml6_1", right: "t6_mr6_1" }, { left: "t6_ml6_2", right: "t6_mr6_2" }, { left: "t6_ml6_3", right: "t6_mr6_3" }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "prefixes_suffixes_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "letter-pairs", pairs: [["play", "played"]], color: "#EC4899" },
    interactive: { type: "gap-fill", sentence: "t7_sent7", choices: ["t7_c7_1", "t7_c7_2", "t7_c7_3", "t7_c7_4"], correctIndex: 0, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "prefixes_suffixes_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "two-groups", left: { items: ["fast"], bg: "#FCE7F3", border: "#EC4899" }, right: { items: ["faster"], bg: "#FBCFE8", border: "#DB2777" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "base", label: "t8_b8_1" }, { id: "er", label: "t8_b8_2" }], items: [{ text: "t8_i8_1", bucketId: "base" }, { text: "t8_i8_2", bucketId: "base" }, { text: "t8_i8_3", bucketId: "er" }, { text: "t8_i8_4", bucketId: "er" }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "prefixes_suffixes_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-syllables", parts: ["fast", "est"], color: "#EC4899" },
    interactive: { type: "physics-slingshot", question: "t9_q9", targets: [{ id: "1", text: "t9_ans9_1", isCorrect: true }, { id: "2", text: "t9_ans9_2", isCorrect: false }, { id: "3", text: "t9_ans9_3", isCorrect: false }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "prefixes_suffixes_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "text-bubbles", items: [{ text: "ing", color: "#FFFFFF", bg: "#EC4899" }, { text: "ed", color: "#FFFFFF", bg: "#DB2777" }] },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "now", label: "t10_b10_1" }, { id: "past", label: "t10_b10_2" }], items: [{ text: "t10_i10_1", bucketId: "now" }, { text: "t10_i10_2", bucketId: "now" }, { text: "t10_i10_3", bucketId: "past" }, { text: "t10_i10_4", bucketId: "past" }], instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "prefixes_suffixes_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "two-groups", left: { items: ["there"], bg: "#FCE7F3", border: "#EC4899" }, right: { items: ["their"], bg: "#FBCFE8", border: "#DB2777" } },
    interactive: { type: "gap-fill", sentence: "t11_sent11", choices: ["t11_c11_1", "t11_c11_2", "t11_c11_3", "t11_c11_4"], correctIndex: 0, instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "irregular_spelling_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "they're", color: "#EC4899" },
    interactive: { type: "physics-slingshot", question: "t12_q12", targets: [{ id: "1", text: "t12_ans12_1", isCorrect: true }, { id: "2", text: "t12_ans12_2", isCorrect: false }, { id: "3", text: "t12_ans12_3", isCorrect: false }], instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "irregular_spelling_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "sentence-display", words: ["Mom", "said", "it", "is", "time."], color: "#EC4899" },
    interactive: { type: "highlight-text", tokens: ["t13_w13_1", "t13_w13_2", "t13_w13_3", "t13_w13_4", "t13_w13_5"], correctIndices: [1], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "irregular_spelling_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "letter-circles", letters: ["w", "e", "r", "e"], color: "#EC4899" },
    interactive: { type: "sentence-build", fragments: ["t14_f14_1", "t14_f14_2", "t14_f14_3", "t14_f14_4"], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "irregular_spelling_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "two-groups", left: { items: ["un-", "re-"], bg: "#FCE7F3", border: "#EC4899" }, right: { items: ["-ing", "-ed"], bg: "#FBCFE8", border: "#DB2777" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "pre", label: "t15_b15_1" }, { id: "suf", label: "t15_b15_2" }], items: [{ text: "t15_i15_1", bucketId: "pre" }, { text: "t15_i15_2", bucketId: "pre" }, { text: "t15_i15_3", bucketId: "suf" }, { text: "t15_i15_4", bucketId: "suf" }], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "prefixes_suffixes_k2" }
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i7 — Meaning Moon (🌙, #14B8A6)
// Topics: synonyms (big=large), antonyms (hot↔cold),
//         shades of meaning (good/great/fantastic), context clues
// ─────────────────────────────────────────────────────────────────────────────

export const MEANING_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Meaning Moon",

    // T1 - Synonyms: Intro (Easy)
    t1_title: "Synonyms",
    t1_text: "Synonyms are words that mean the SAME thing, or almost the same thing! 'Big' and 'large' are synonyms.",
    t1_inst: "Match the words that mean the same!",
    t1_h1: "Find the words that have the same meaning.",
    t1_h2: "Match 'big' with 'large'.",
    t1_ml1_1: "big", t1_mr1_1: "large",
    t1_ml1_2: "fast", t1_mr1_2: "quick",
    t1_ml1_3: "happy", t1_mr1_3: "glad",

    // T2 - Synonyms: fast/quick (Easy)
    t2_title: "More Synonyms",
    t2_text: "If you run fast, you run quick! Using synonyms makes your sentences more interesting.",
    t2_inst: "Shoot the synonym for 'fast'!",
    t2_h1: "Which word means the same as 'fast'?",
    t2_h2: "The word is 'quick'.",
    t2_q2: "Find the word that means FAST:",
    t2_ans2_1: "quick", t2_ans2_2: "slow", t2_ans2_3: "sad",

    // T3 - Synonyms: happy/glad (Easy)
    t3_title: "Happy Words",
    t3_text: "There are many ways to say you are happy! You can say you are glad, or joyful.",
    t3_inst: "Build the sentence!",
    t3_h1: "Start with 'I'.",
    t3_h2: "I am very glad.",
    t3_sw3_1: "I", t3_sw3_2: "am", t3_sw3_3: "very", t3_sw3_4: "glad.",

    // T4 - Synonyms: sad/upset (Easy)
    t4_title: "Sad Words",
    t4_text: "If you lose your toy, you might be sad. Another word for sad is upset.",
    t4_inst: "Fill in the missing synonym!",
    t4_h1: "Which word means the same as sad?",
    t4_h2: "Choose 'upset'.",
    t4_sent4: "The little boy was ___ when he dropped his ice cream.",
    t4_c4_1: "upset", t4_c4_2: "happy", t4_c4_3: "fast", t4_c4_4: "glad",

    // T5 - Antonyms: Intro (Easy)
    t5_title: "Antonyms",
    t5_text: "Antonyms are words that mean the OPPOSITE! 'Hot' is the opposite of 'cold'.",
    t5_inst: "Sort the opposite words!",
    t5_h1: "Put words about heat together, and words about cold together.",
    t5_h2: "Fire is hot, ice is cold.",
    t5_b5_1: "Hot", t5_b5_2: "Cold",
    t5_i5_1: "fire", t5_i5_2: "sun", t5_i5_3: "ice", t5_i5_4: "snow",

    // T6 - Antonyms: night/day (Medium)
    t6_title: "Opposites Everywhere",
    t6_text: "We see opposites all the time. Day and night, up and down, open and closed!",
    t6_inst: "Match the opposites!",
    t6_h1: "Find the words that are completely different.",
    t6_h2: "Match 'day' with 'night'.",
    t6_ml6_1: "day", t6_mr6_1: "night",
    t6_ml6_2: "up", t6_mr6_2: "down",
    t6_ml6_3: "open", t6_mr6_3: "closed",

    // T7 - Antonyms: full/empty (Medium)
    t7_title: "Full and Empty",
    t7_text: "If your glass has water, it is full. If you drink it all, it is empty! Full and empty are antonyms.",
    t7_inst: "Tap the opposite of 'empty' in the sentence!",
    t7_h1: "Look for the word that means there is a lot inside.",
    t7_h2: "The word is 'full'.",
    t7_w7_1: "My", t7_w7_2: "cup", t7_w7_3: "is", t7_w7_4: "very", t7_w7_5: "full.",

    // T8 - Shades of Meaning: Good (Medium)
    t8_title: "Shades of Meaning",
    t8_text: "Some words mean the same thing, but one is STRONGER! 'Good' is nice, but 'fantastic' is super good!",
    t8_inst: "Put the words in order from weakest to strongest!",
    t8_h1: "Start with good, end with fantastic.",
    t8_h2: "Good, then great, then fantastic.",
    t8_sw8_1: "good", t8_sw8_2: "great", t8_sw8_3: "fantastic",

    // T9 - Shades of Meaning: Bad (Medium)
    t9_title: "Stronger Words",
    t9_text: "If your shoe gets muddy, that is bad. If a monster eats your house, that is terrible or awful!",
    t9_inst: "Shoot the STRONGEST word!",
    t9_h1: "Which word means very, very bad?",
    t9_h2: "The word is 'awful'.",
    t9_q9: "Which word is stronger than bad?",
    t9_ans9_1: "awful", t9_ans9_2: "bad", t9_ans9_3: "sad",

    // T10 - Shades of Meaning: Angry (Medium)
    t10_title: "Angry vs Furious",
    t10_text: "If someone breaks your toy, you are angry. If they break all your toys on purpose, you are furious!",
    t10_inst: "Fill in the strongest feeling word!",
    t10_h1: "Which word means super angry?",
    t10_h2: "Choose 'furious'.",
    t10_sent10: "The giant was ___ when they stole his gold.",
    t10_c10_1: "furious", t10_c10_2: "mad", t10_c10_3: "sad", t10_c10_4: "happy",

    // T11 - Shades of Meaning: Warm (Hard)
    t11_title: "Warm, Hot, Boiling",
    t11_text: "A blanket is warm. The sun is hot. Water on the stove is boiling! They are different shades of heat.",
    t11_inst: "Sort the words by how hot they are!",
    t11_h1: "Warm is nice. Boiling is dangerous!",
    t11_h2: "Put 'warm' in Just a Little, and 'boiling' in Very Hot.",
    t11_b11_1: "Just a Little", t11_b11_2: "Very Hot",
    t11_i11_1: "warm", t11_i11_2: "cool", t11_i11_3: "boiling", t11_i11_4: "burning",

    // T12 - Context Clues (Hard)
    t12_title: "Context Clues",
    t12_text: "If you don't know a word, look at the words around it to guess what it means! The sentence gives you clues.",
    t12_inst: "Tap the word that helps you know what 'huge' means!",
    t12_h1: "What tells you the elephant's size?",
    t12_h2: "The word is 'giant'.",
    t12_w12_1: "The", t12_w12_2: "huge", t12_w12_3: "elephant", t12_w12_4: "was", t12_w12_5: "a", t12_w12_6: "giant.",

    // T13 - Context Clues 2 (Hard)
    t13_title: "Guess the Meaning",
    t13_text: "Read this: 'The tiny mouse hid in a small hole.' The word 'tiny' must mean something like 'small'!",
    t13_inst: "Build the sentence with clues!",
    t13_h1: "Start with 'The'.",
    t13_h2: "The tiny mouse is small.",
    t13_f13_1: "The", t13_f13_2: "tiny", t13_f13_3: "mouse", t13_f13_4: "is small.",

    // T14 - Multiple Meanings (Hard)
    t14_title: "Multiple Meanings",
    t14_text: "Some words have two different meanings! A 'bat' can be an animal that flies, or a stick used in baseball.",
    t14_inst: "Match the word to its meanings!",
    t14_h1: "Think about the two things a bat can be.",
    t14_h2: "Match 'bat' with 'animal' and 'baseball'.",
    t14_ml14_1: "bat", t14_mr14_1: "animal",
    t14_ml14_2: "bat", t14_mr14_2: "baseball stick",
    t14_ml14_3: "bank", t14_mr14_3: "river edge",

    // T15 - Dictionary ABC Order (Hard)
    t15_title: "Using a Dictionary",
    t15_text: "A dictionary tells you what words mean. Words in a dictionary are in Alphabetical (ABC) order!",
    t15_inst: "Put the words in ABC order!",
    t15_h1: "Look at the first letter of each word.",
    t15_h2: "Apple (A), then Bear (B), then Cat (C).",
    t15_sw15_1: "apple", t15_sw15_2: "bear", t15_sw15_3: "cat"
  }
};

export const MEANING_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{ text: "big", color: "#FFFFFF", bg: "#14B8A6" }, { text: "large", color: "#FFFFFF", bg: "#0D9488" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t1_ml1_1", right: "t1_mr1_1" }, { left: "t1_ml1_2", right: "t1_mr1_2" }, { left: "t1_ml1_3", right: "t1_mr1_3" }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "synonyms_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "letter-pairs", pairs: [["fast", "quick"]], color: "#14B8A6" },
    interactive: { type: "physics-slingshot", question: "t2_q2", targets: [{ id: "1", text: "t2_ans2_1", isCorrect: true }, { id: "2", text: "t2_ans2_2", isCorrect: false }, { id: "3", text: "t2_ans2_3", isCorrect: false }], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "synonyms_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "simple-icon", icon: "😀", color: "#14B8A6" },
    interactive: { type: "word-order", words: ["t3_sw3_1", "t3_sw3_2", "t3_sw3_3", "t3_sw3_4"], correctOrder: [0, 1, 2, 3], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "synonyms_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "upset", color: "#14B8A6" },
    interactive: { type: "gap-fill", sentence: "t4_sent4", choices: ["t4_c4_1", "t4_c4_2", "t4_c4_3", "t4_c4_4"], correctIndex: 0, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "synonyms_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["hot"], bg: "#CCFBF1", border: "#14B8A6" }, right: { items: ["cold"], bg: "#E0F2FE", border: "#0284C7" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "hot", label: "t5_b5_1" }, { id: "cold", label: "t5_b5_2" }], items: [{ text: "t5_i5_1", bucketId: "hot" }, { text: "t5_i5_2", bucketId: "hot" }, { text: "t5_i5_3", bucketId: "cold" }, { text: "t5_i5_4", bucketId: "cold" }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "antonyms_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "rhyme-pair", word1: "day", word2: "night", color: "#14B8A6" },
    interactive: { type: "match-pairs", pairs: [{ left: "t6_ml6_1", right: "t6_mr6_1" }, { left: "t6_ml6_2", right: "t6_mr6_2" }, { left: "t6_ml6_3", right: "t6_mr6_3" }], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "antonyms_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "sentence-display", words: ["My", "cup", "is", "very", "full."], color: "#14B8A6" },
    interactive: { type: "highlight-text", tokens: ["t7_w7_1", "t7_w7_2", "t7_w7_3", "t7_w7_4", "t7_w7_5"], correctIndices: [4], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "antonyms_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "good", color: "#FFFFFF", bg: "#14B8A6" }, { text: "great", color: "#FFFFFF", bg: "#0D9488" }, { text: "fantastic", color: "#FFFFFF", bg: "#0F766E" }] },
    interactive: { type: "word-order", words: ["t8_sw8_1", "t8_sw8_2", "t8_sw8_3"], correctOrder: [0, 1, 2], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "shades_of_meaning_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "awful", color: "#14B8A6" },
    interactive: { type: "physics-slingshot", question: "t9_q9", targets: [{ id: "1", text: "t9_ans9_1", isCorrect: true }, { id: "2", text: "t9_ans9_2", isCorrect: false }, { id: "3", text: "t9_ans9_3", isCorrect: false }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "shades_of_meaning_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "letter-pairs", pairs: [["angry", "furious"]], color: "#14B8A6" },
    interactive: { type: "gap-fill", sentence: "t10_sent10", choices: ["t10_c10_1", "t10_c10_2", "t10_c10_3", "t10_c10_4"], correctIndex: 0, instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "shades_of_meaning_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "two-groups", left: { items: ["warm"], bg: "#CCFBF1", border: "#14B8A6" }, right: { items: ["boiling"], bg: "#FEE2E2", border: "#EF4444" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "little", label: "t11_b11_1" }, { id: "hot", label: "t11_b11_2" }], items: [{ text: "t11_i11_1", bucketId: "little" }, { text: "t11_i11_2", bucketId: "little" }, { text: "t11_i11_3", bucketId: "hot" }, { text: "t11_i11_4", bucketId: "hot" }], instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "shades_of_meaning_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "sentence-display", words: ["The", "huge", "elephant", "was", "a", "giant."], color: "#14B8A6" },
    interactive: { type: "highlight-text", tokens: ["t12_w12_1", "t12_w12_2", "t12_w12_3", "t12_w12_4", "t12_w12_5", "t12_w12_6"], correctIndices: [5], instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "context_clues_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "simple-icon", icon: "🕵️", color: "#14B8A6" },
    interactive: { type: "sentence-build", fragments: ["t13_f13_1", "t13_f13_2", "t13_f13_3", "t13_f13_4"], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "context_clues_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "text-bubbles", items: [{ text: "bat", color: "#FFFFFF", bg: "#14B8A6" }, { text: "bank", color: "#FFFFFF", bg: "#0D9488" }] },
    interactive: { type: "match-pairs", pairs: [{ left: "t14_ml14_1", right: "t14_mr14_1" }, { left: "t14_ml14_2", right: "t14_mr14_2" }, { left: "t14_ml14_3", right: "t14_mr14_3" }], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "context_clues_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "letter-circles", letters: ["A", "B", "C"], color: "#14B8A6" },
    interactive: { type: "word-order", words: ["t15_sw15_1", "t15_sw15_2", "t15_sw15_3"], correctOrder: [0, 1, 2], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "context_clues_k2" }
  }
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

    // T1 - Pronoun Review: I vs Me (Easy)
    t1_title: "Pronouns: I and Me",
    t1_text: "Use 'I' when you do the action! Use 'me' when the action happens to you. 'I jump', but 'He gave it to me'.",
    t1_inst: "Fill in the correct pronoun!",
    t1_h1: "Are you doing the action?",
    t1_h2: "Use 'I' at the start of the sentence.",
    t1_sent1: "___ like to play games.",
    t1_c1_1: "I", t1_c1_2: "Me", t1_c1_3: "My", t1_c1_4: "He",

    // T2 - Pronoun Review: He vs Him (Easy)
    t2_title: "Pronouns: He and Him",
    t2_text: "'He' does the action. Give it to 'him'! They both talk about a boy.",
    t2_inst: "Match the sentences!",
    t2_h1: "Look at where the pronoun is in the sentence.",
    t2_h2: "Match 'He runs' and 'Help him'.",
    t2_ml2_1: "He", t2_mr2_1: "runs fast.",
    t2_ml2_2: "I saw", t2_mr2_2: "him yesterday.",
    t2_ml2_3: "She", t2_mr2_3: "is nice.",

    // T3 - Conjunction: and vs but (Easy)
    t3_title: "Joining Words: and & but",
    t3_text: "Use 'and' to add things together. Use 'but' to show a difference!",
    t3_inst: "Sort the joining words!",
    t3_h1: "Does it add something, or change it?",
    t3_h2: "'And' adds. 'But' changes.",
    t3_b3_1: "Adds (and)", t3_b3_2: "Changes (but)",
    t3_i3_1: "and", t3_i3_2: "also", t3_i3_3: "but", t3_i3_4: "however",

    // T4 - Question Word: Who (Easy)
    t4_title: "Question Words: Who",
    t4_text: "When you ask 'Who?', the answer is always a PERSON! Like a teacher or a friend.",
    t4_inst: "Shoot the answer for a 'Who' question!",
    t4_h1: "Which one is a person?",
    t4_h2: "The answer is 'the teacher'.",
    t4_q4: "Who can help you learn?",
    t4_ans4_1: "the teacher", t4_ans4_2: "a book", t4_ans4_3: "the school",

    // T5 - Question Word: Where (Easy)
    t5_title: "Question Words: Where",
    t5_text: "When you ask 'Where?', the answer is always a PLACE! Like the park or your house.",
    t5_inst: "Tap the 'Where' answer!",
    t5_h1: "Look for a place.",
    t5_h2: "The word is 'park'.",
    t5_w5_1: "I", t5_w5_2: "play", t5_w5_3: "at", t5_w5_4: "the", t5_w5_5: "park.",

    // T6 - Conjunction: because (Medium)
    t6_title: "Joining Words: because",
    t6_text: "Use 'because' to answer the question 'Why?'. It tells you the reason something happened.",
    t6_inst: "Build the sentence!",
    t6_h1: "Start with 'I sleep'.",
    t6_h2: "I sleep because I am tired.",
    t6_f6_1: "I sleep", t6_f6_2: "because", t6_f6_3: "I am", t6_f6_4: "tired.",

    // T7 - Conjunction: so (Medium)
    t7_title: "Joining Words: so",
    t7_text: "Use 'so' to show what happened next! 'It was raining, SO I took my umbrella.'",
    t7_inst: "Fill in the joining word!",
    t7_h1: "Which word tells you what happens next?",
    t7_h2: "Choose 'so'.",
    t7_sent7: "I was hungry, ___ I ate an apple.",
    t7_c7_1: "so", t7_c7_2: "because", t7_c7_3: "or", t7_c7_4: "but",

    // T8 - Question Words: When & Why (Medium)
    t8_title: "When and Why",
    t8_text: "'When' asks for a TIME (tomorrow). 'Why' asks for a REASON (because it's fun).",
    t8_inst: "Sort the answers!",
    t8_h1: "Is it a time or a reason?",
    t8_h2: "'Today' is a time.",
    t8_b8_1: "When (Time)", t8_b8_2: "Why (Reason)",
    t8_i8_1: "today", t8_i8_2: "tomorrow", t8_i8_3: "because", t8_i8_4: "so I can win",

    // T9 - Noun & Verb Agreement (Medium)
    t9_title: "Nouns and Verbs Working Together",
    t9_text: "If there is ONE noun, the verb gets an 's' (The dog barks). If there are MANY, no 's' (The dogs bark).",
    t9_inst: "Match the noun to the correct verb!",
    t9_h1: "One dog gets an 's' on the action.",
    t9_h2: "Match 'The cat' with 'sleeps'.",
    t9_ml9_1: "The cat", t9_mr9_1: "sleeps.",
    t9_ml9_2: "The cats", t9_mr9_2: "sleep.",
    t9_ml9_3: "The boy", t9_mr9_3: "runs.",

    // T10 - Prepositions: in, on, under (Medium)
    t10_title: "Prepositions",
    t10_text: "Prepositions tell us WHERE something is! A bug can be 'in' a box, 'on' a box, or 'under' a box.",
    t10_inst: "Shoot the preposition!",
    t10_h1: "Which word tells you where something is?",
    t10_h2: "The word is 'under'.",
    t10_q10: "The cat is under the bed. Which word tells where?",
    t10_ans10_1: "under", t10_ans10_2: "cat", t10_ans10_3: "bed",

    // T11 - Prepositions Practice (Hard)
    t11_title: "More Prepositions",
    t11_text: "Words like 'behind', 'next to', and 'above' are also prepositions. They show position!",
    t11_inst: "Put the sentence in order!",
    t11_h1: "Start with 'The'.",
    t11_h2: "The ball is behind the box.",
    t11_sw11_1: "The ball", t11_sw11_2: "is", t11_sw11_3: "behind", t11_sw11_4: "the box.",

    // T12 - Agreement Practice (Hard)
    t12_title: "Fix the Sentence",
    t12_text: "Make sure the noun and verb match! We say 'She plays', not 'She play'.",
    t12_inst: "Tap the correct verb!",
    t12_h1: "There is one girl, so the action needs an 's'.",
    t12_h2: "Tap 'plays'.",
    t12_w12_1: "The", t12_w12_2: "girl", t12_w12_3: "plays", t12_w12_4: "with", t12_w12_5: "toys.",

    // T13 - Nouns, Verbs, Adjectives (Hard)
    t13_title: "Parts of Speech",
    t13_text: "Let's review! Nouns are things (dog), verbs are actions (runs), and adjectives describe (fast).",
    t13_inst: "Sort the words into Nouns, Verbs, and Adjectives!",
    t13_h1: "Can you do it? It's a verb. Can you touch it? It's a noun.",
    t13_h2: "Apple is a noun. Jump is a verb.",
    t13_b13_1: "Nouns (Things)", t13_b13_2: "Verbs (Actions)",
    t13_i13_1: "apple", t13_i13_2: "dog", t13_i13_3: "jump", t13_i13_4: "run",

    // T14 - Sentence Correction (Hard)
    t14_title: "Find the Mistake",
    t14_text: "Sometimes sentences have mistakes. Look closely for missing capital letters or wrong ending marks!",
    t14_inst: "Fill in the missing correct word!",
    t14_h1: "Days of the week need a big letter.",
    t14_h2: "Choose 'Friday'.",
    t14_sent14: "We have fun on ___.",
    t14_c14_1: "Friday", t14_c14_2: "friday", t14_c14_3: "Day", t14_c14_4: "day",

    // T15 - Grammar Master (Hard)
    t15_title: "Grammar Master",
    t15_text: "You know so much grammar! A super sentence has a subject, a verb, and correct punctuation.",
    t15_inst: "Build the perfect sentence!",
    t15_h1: "Start with the capital letter.",
    t15_h2: "The fast dog runs away.",
    t15_f15_1: "The", t15_f15_2: "fast dog", t15_f15_3: "runs", t15_f15_4: "away."
  }
};

export const GRAMMAR2_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{ text: "I", color: "#FFFFFF", bg: "#A855F7" }, { text: "Me", color: "#FFFFFF", bg: "#9333EA" }] },
    interactive: { type: "gap-fill", sentence: "t1_sent1", choices: ["t1_c1_1", "t1_c1_2", "t1_c1_3", "t1_c1_4"], correctIndex: 0, instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "pronouns_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "letter-pairs", pairs: [["He", "Him"]], color: "#A855F7" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_ml2_1", right: "t2_mr2_1" }, { left: "t2_ml2_2", right: "t2_mr2_2" }, { left: "t2_ml2_3", right: "t2_mr2_3" }], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "pronouns_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "two-groups", left: { items: ["and"], bg: "#F3E8FF", border: "#A855F7" }, right: { items: ["but"], bg: "#FAF5FF", border: "#9333EA" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "add", label: "t3_b3_1" }, { id: "change", label: "t3_b3_2" }], items: [{ text: "t3_i3_1", bucketId: "add" }, { text: "t3_i3_2", bucketId: "add" }, { text: "t3_i3_3", bucketId: "change" }, { text: "t3_i3_4", bucketId: "change" }], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "conjunctions_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "simple-icon", icon: "👤", color: "#A855F7" },
    interactive: { type: "physics-slingshot", question: "t4_q4", targets: [{ id: "1", text: "t4_ans4_1", isCorrect: true }, { id: "2", text: "t4_ans4_2", isCorrect: false }, { id: "3", text: "t4_ans4_3", isCorrect: false }], instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "question_words_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "sentence-display", words: ["I", "play", "at", "the", "park."], color: "#A855F7" },
    interactive: { type: "highlight-text", tokens: ["t5_w5_1", "t5_w5_2", "t5_w5_3", "t5_w5_4", "t5_w5_5"], correctIndices: [4], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "question_words_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "because", color: "#A855F7" },
    interactive: { type: "sentence-build", fragments: ["t6_f6_1", "t6_f6_2", "t6_f6_3", "t6_f6_4"], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "conjunctions_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "text-bubbles", items: [{ text: "so", color: "#FFFFFF", bg: "#A855F7" }] },
    interactive: { type: "gap-fill", sentence: "t7_sent7", choices: ["t7_c7_1", "t7_c7_2", "t7_c7_3", "t7_c7_4"], correctIndex: 0, instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "conjunctions_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "two-groups", left: { items: ["When?"], bg: "#F3E8FF", border: "#A855F7" }, right: { items: ["Why?"], bg: "#FAF5FF", border: "#9333EA" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "when", label: "t8_b8_1" }, { id: "why", label: "t8_b8_2" }], items: [{ text: "t8_i8_1", bucketId: "when" }, { text: "t8_i8_2", bucketId: "when" }, { text: "t8_i8_3", bucketId: "why" }, { text: "t8_i8_4", bucketId: "why" }], instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "question_words_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "letter-pairs", pairs: [["One cat", "sleeps"], ["Two cats", "sleep"]], color: "#A855F7" },
    interactive: { type: "match-pairs", pairs: [{ left: "t9_ml9_1", right: "t9_mr9_1" }, { left: "t9_ml9_2", right: "t9_mr9_2" }, { left: "t9_ml9_3", right: "t9_mr9_3" }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "verbs_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "simple-icon", icon: "📦", color: "#A855F7" },
    interactive: { type: "physics-slingshot", question: "t10_q10", targets: [{ id: "1", text: "t10_ans10_1", isCorrect: true }, { id: "2", text: "t10_ans10_2", isCorrect: false }, { id: "3", text: "t10_ans10_3", isCorrect: false }], instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "locations_g2" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "text-bubbles", items: [{ text: "behind", color: "#1e293b", bg: "#F3E8FF" }] },
    interactive: { type: "word-order", words: ["t11_sw11_1", "t11_sw11_2", "t11_sw11_3", "t11_sw11_4"], correctOrder: [0, 1, 2, 3], instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "locations_g2" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "sentence-display", words: ["The", "girl", "plays", "with", "toys."], color: "#A855F7" },
    interactive: { type: "highlight-text", tokens: ["t12_w12_1", "t12_w12_2", "t12_w12_3", "t12_w12_4", "t12_w12_5"], correctIndices: [2], instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "verbs_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "two-groups", left: { items: ["apple"], bg: "#F3E8FF", border: "#A855F7" }, right: { items: ["run"], bg: "#FAF5FF", border: "#9333EA" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "noun", label: "t13_b13_1" }, { id: "verb", label: "t13_b13_2" }], items: [{ text: "t13_i13_1", bucketId: "noun" }, { text: "t13_i13_2", bucketId: "noun" }, { text: "t13_i13_3", bucketId: "verb" }, { text: "t13_i13_4", bucketId: "verb" }], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "adj_adv_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "compound-word", word1: "Fri", word2: "day", result: "Friday", color: "#A855F7" },
    interactive: { type: "gap-fill", sentence: "t14_sent14", choices: ["t14_c14_1", "t14_c14_2", "t14_c14_3", "t14_c14_4"], correctIndex: 0, instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "nouns_common_proper_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🌟", color: "#A855F7" },
    interactive: { type: "sentence-build", fragments: ["t15_f15_1", "t15_f15_2", "t15_f15_3", "t15_f15_4"], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "expanding_k2" }
  }
];


// ─────────────────────────────────────────────────────────────────────────────
// ISLAND i9 — Big Test (🌟, #4ECDC4)
// Topics: comprehensive review of all K2 topics — nouns, verbs, adjectives,
//         sentences, vowel teams, prefixes/suffixes, synonyms/antonyms, grammar
// ─────────────────────────────────────────────────────────────────────────────

export const BIGTEST_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Big Test",

    // T1 - Nouns Review (Easy)
    t1_title: "Noun Review",
    t1_text: "Let's review! A noun is a person, place, or thing. A proper noun is a special name with a capital letter.",
    t1_inst: "Shoot the Proper Noun!",
    t1_h1: "Look for the word with a big capital letter.",
    t1_h2: "London is a proper noun.",
    t1_q1: "Which one is a proper noun?",
    t1_ans1_1: "London", t1_ans1_2: "city", t1_ans1_3: "park",

    // T2 - Plural Nouns Review (Easy)
    t2_title: "Plurals Review",
    t2_text: "To show more than one, we usually add '-s' or '-es'. Remember the tricky ones like 'mice' and 'children'!",
    t2_inst: "Match the singular to its plural!",
    t2_h1: "Find the word that means more than one.",
    t2_h2: "Dog -> dogs. Child -> children.",
    t2_ml2_1: "dog", t2_mr2_1: "dogs",
    t2_ml2_2: "box", t2_mr2_2: "boxes",
    t2_ml2_3: "child", t2_mr2_3: "children",

    // T3 - Verbs Review (Medium)
    t3_title: "Verb Review",
    t3_text: "Verbs are action words (run, jump) or linking words (is, was).",
    t3_inst: "Tap the verb in the sentence!",
    t3_h1: "What action is happening?",
    t3_h2: "The action is 'jumped'.",
    t3_w3_1: "The", t3_w3_2: "frog", t3_w3_3: "jumped", t3_w3_4: "high.",

    // T4 - Irregular Past Review (Medium)
    t4_title: "Past Tense Review",
    t4_text: "Some verbs change completely in the past! 'Go' becomes 'went'. 'See' becomes 'saw'.",
    t4_inst: "Fill in the past tense word!",
    t4_h1: "What is the past tense of 'see'?",
    t4_h2: "I 'saw' a bird.",
    t4_sent4: "Yesterday, I ___ a bird.",
    t4_c4_1: "saw", t4_c4_2: "see", t4_c4_3: "seed", t4_c4_4: "look",

    // T5 - Adjectives Review (Medium)
    t5_title: "Adjective Review",
    t5_text: "Adjectives describe nouns! They tell us about size, color, and shape.",
    t5_inst: "Sort the adjectives and verbs!",
    t5_h1: "Is it an action (verb) or a describing word (adjective)?",
    t5_h2: "Blue is an adjective. Run is a verb.",
    t5_b5_1: "Adjectives", t5_b5_2: "Verbs",
    t5_i5_1: "blue", t5_i5_2: "big", t5_i5_3: "run", t5_i5_4: "eat",

    // T6 - Adverbs Review (Medium)
    t6_title: "Adverb Review",
    t6_text: "Adverbs describe verbs. They often end in '-ly', like 'quickly' or 'loudly'.",
    t6_inst: "Build the sentence!",
    t6_h1: "Start with 'She'.",
    t6_h2: "She runs quickly.",
    t6_sw6_1: "She", t6_sw6_2: "runs", t6_sw6_3: "quickly.",

    // T7 - Sentences Review (Medium)
    t7_title: "Sentences Review",
    t7_text: "A complete sentence has a subject (who) and a predicate (do).",
    t7_inst: "Match to make a complete sentence!",
    t7_h1: "Connect the subject to the correct action.",
    t7_h2: "The sun -> shines bright.",
    t7_ml7_1: "The sun", t7_mr7_1: "shines bright.",
    t7_ml7_2: "My dog", t7_mr7_2: "barks loud.",
    t7_ml7_3: "The car", t7_mr7_3: "drives fast.",

    // T8 - Compound Sentences Review (Hard)
    t8_title: "Joining Words Review",
    t8_text: "We use 'and', 'but', 'or', and 'because' to make our sentences bigger!",
    t8_inst: "Fill in the best joining word!",
    t8_h1: "It explains the reason why.",
    t8_h2: "Use 'because'.",
    t8_sent8: "I am wet ___ it is raining.",
    t8_c8_1: "because", t8_c8_2: "but", t8_c8_3: "or", t8_c8_4: "and",

    // T9 - Vowels Review 1 (Hard)
    t9_title: "Vowel Team Review",
    t9_text: "Remember your teams: ee/ea say /E/, oa/ow say /O/, and ai/ay say /A/!",
    t9_inst: "Sort the words by their vowel sound!",
    t9_h1: "Listen to the vowel in the middle.",
    t9_h2: "Rain has an A. Boat has an O.",
    t9_b9_1: "Long A", t9_b9_2: "Long O",
    t9_i9_1: "rain", t9_i9_2: "play", t9_i9_3: "boat", t9_i9_4: "snow",

    // T10 - Vowels Review 2 (Hard)
    t10_title: "Bossy 'R' Review",
    t10_text: "'ar' says /ar/. 'or' says /or/. 'er', 'ir', and 'ur' all say /er/!",
    t10_inst: "Shoot the word with the Bossy 'R'!",
    t10_h1: "Look for an 'r' right after a vowel.",
    t10_h2: "The word is 'bird'.",
    t10_q10: "Find the Bossy R word:",
    t10_ans10_1: "bird", t10_ans10_2: "cat", t10_ans10_3: "dog",

    // T11 - Prefix/Suffix Review (Hard)
    t11_title: "Word Parts Review",
    t11_text: "Prefixes (un-, re-) go at the start. Suffixes (-ing, -ed, -er, -est) go at the end!",
    t11_inst: "Sort into Prefixes and Suffixes!",
    t11_h1: "Where does it attach to the word?",
    t11_h2: "'un-' is a prefix. '-ing' is a suffix.",
    t11_b11_1: "Prefix (Start)", t11_b11_2: "Suffix (End)",
    t11_i11_1: "un-", t11_i11_2: "re-", t11_i11_3: "-ing", t11_i11_4: "-est",

    // T12 - Irregular Spelling Review (Hard)
    t12_title: "Tricky Spelling Review",
    t12_text: "Some words just need to be memorized! Like 'said', 'there', and 'they're'.",
    t12_inst: "Fill in the missing tricky word!",
    t12_h1: "Which word means 'they are'?",
    t12_h2: "Choose 'They're'.",
    t12_sent12: "___ playing outside today.",
    t12_c12_1: "They're", t12_c12_2: "There", t12_c12_3: "Their", t12_c12_4: "The",

    // T13 - Synonyms/Antonyms Review (Hard)
    t13_title: "Synonyms & Antonyms",
    t13_text: "Synonyms mean the same (big/large). Antonyms are opposites (hot/cold).",
    t13_inst: "Match the antonyms (opposites)!",
    t13_h1: "Find the words that are totally different.",
    t13_h2: "Match hot with cold.",
    t13_ml13_1: "hot", t13_mr13_1: "cold",
    t13_ml13_2: "fast", t13_mr13_2: "slow",
    t13_ml13_3: "up", t13_mr13_3: "down",

    // T14 - Meaning Review (Hard)
    t14_title: "Meaning Review",
    t14_text: "Use the words around a new word to figure out what it means!",
    t14_inst: "Tap the word that helps you know what 'furious' means!",
    t14_h1: "What word tells you he was mad?",
    t14_h2: "The word is 'angry'.",
    t14_w14_1: "He", t14_w14_2: "was", t14_w14_3: "so", t14_w14_4: "angry", t14_w14_5: "and", t14_w14_6: "furious.",

    // T15 - Final Super Challenge (Hard)
    t15_title: "Final Challenge!",
    t15_text: "You are a Grammar Galaxy Master! Let's build one final super sentence.",
    t15_inst: "Build the super sentence!",
    t15_h1: "Start with the capital letter, end with the period.",
    t15_h2: "The happy children played outside.",
    t15_f15_1: "The", t15_f15_2: "happy", t15_f15_3: "children", t15_f15_4: "played outside."
  }
};

export const BIGTEST_POOL: PoolTopicDef[] = [
  {
    difficulty: "easy", infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "text-bubbles", items: [{ text: "London", color: "#FFFFFF", bg: "#4ECDC4" }, { text: "city", color: "#FFFFFF", bg: "#45B7AF" }] },
    interactive: { type: "physics-slingshot", question: "t1_q1", targets: [{ id: "1", text: "t1_ans1_1", isCorrect: true }, { id: "2", text: "t1_ans1_2", isCorrect: false }, { id: "3", text: "t1_ans1_3", isCorrect: false }], instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2" },
    quiz: { generate: "nouns_common_proper_k2" }
  },
  {
    difficulty: "easy", infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "letter-pairs", pairs: [["dog", "dogs"]], color: "#4ECDC4" },
    interactive: { type: "match-pairs", pairs: [{ left: "t2_ml2_1", right: "t2_mr2_1" }, { left: "t2_ml2_2", right: "t2_mr2_2" }, { left: "t2_ml2_3", right: "t2_mr2_3" }], instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2" },
    quiz: { generate: "nouns_plural_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "sentence-display", words: ["The", "frog", "jumped", "high."], color: "#4ECDC4" },
    interactive: { type: "highlight-text", tokens: ["t3_w3_1", "t3_w3_2", "t3_w3_3", "t3_w3_4"], correctIndices: [2], instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2" },
    quiz: { generate: "verbs_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "saw", color: "#4ECDC4" },
    interactive: { type: "gap-fill", sentence: "t4_sent4", choices: ["t4_c4_1", "t4_c4_2", "t4_c4_3", "t4_c4_4"], correctIndex: 0, instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2" },
    quiz: { generate: "irregular_past_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "two-groups", left: { items: ["blue"], bg: "#E0F2FE", border: "#4ECDC4" }, right: { items: ["run"], bg: "#CCFBF1", border: "#45B7AF" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "adj", label: "t5_b5_1" }, { id: "verb", label: "t5_b5_2" }], items: [{ text: "t5_i5_1", bucketId: "adj" }, { text: "t5_i5_2", bucketId: "adj" }, { text: "t5_i5_3", bucketId: "verb" }, { text: "t5_i5_4", bucketId: "verb" }], instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2" },
    quiz: { generate: "adj_adv_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "compound-word", word1: "quick", word2: "ly", result: "quickly", color: "#4ECDC4" },
    interactive: { type: "word-order", words: ["t6_sw6_1", "t6_sw6_2", "t6_sw6_3"], correctOrder: [0, 1, 2], instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2" },
    quiz: { generate: "adj_adv_k2" }
  },
  {
    difficulty: "medium", infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "simple-icon", icon: "🔗", color: "#4ECDC4" },
    interactive: { type: "match-pairs", pairs: [{ left: "t7_ml7_1", right: "t7_mr7_1" }, { left: "t7_ml7_2", right: "t7_mr7_2" }, { left: "t7_ml7_3", right: "t7_mr7_3" }], instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2" },
    quiz: { generate: "simple_compound_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "text-bubbles", items: [{ text: "because", color: "#FFFFFF", bg: "#4ECDC4" }] },
    interactive: { type: "gap-fill", sentence: "t8_sent8", choices: ["t8_c8_1", "t8_c8_2", "t8_c8_3", "t8_c8_4"], correctIndex: 0, instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2" },
    quiz: { generate: "conjunctions_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "two-groups", left: { items: ["ai"], bg: "#E0F2FE", border: "#4ECDC4" }, right: { items: ["oa"], bg: "#CCFBF1", border: "#45B7AF" } },
    interactive: { type: "physics-bucket", buckets: [{ id: "a", label: "t9_b9_1" }, { id: "o", label: "t9_b9_2" }], items: [{ text: "t9_i9_1", bucketId: "a" }, { text: "t9_i9_2", bucketId: "a" }, { text: "t9_i9_3", bucketId: "o" }, { text: "t9_i9_4", bucketId: "o" }], instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2" },
    quiz: { generate: "vowel_teams_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "letter-circles", letters: ["e", "r"], color: "#4ECDC4" },
    interactive: { type: "physics-slingshot", question: "t10_q10", targets: [{ id: "1", text: "t10_ans10_1", isCorrect: true }, { id: "2", text: "t10_ans10_2", isCorrect: false }, { id: "3", text: "t10_ans10_3", isCorrect: false }], instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2" },
    quiz: { generate: "vowel_patterns_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "two-groups", left: { items: ["un-"], bg: "#E0F2FE", border: "#4ECDC4" }, right: { items: ["-ed"], bg: "#CCFBF1", border: "#45B7AF" } },
    interactive: { type: "drag-to-bucket", buckets: [{ id: "pre", label: "t11_b11_1" }, { id: "suf", label: "t11_b11_2" }], items: [{ text: "t11_i11_1", bucketId: "pre" }, { text: "t11_i11_2", bucketId: "pre" }, { text: "t11_i11_3", bucketId: "suf" }, { text: "t11_i11_4", bucketId: "suf" }], instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2" },
    quiz: { generate: "prefixes_suffixes_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "they're", color: "#4ECDC4" },
    interactive: { type: "gap-fill", sentence: "t12_sent12", choices: ["t12_c12_1", "t12_c12_2", "t12_c12_3", "t12_c12_4"], correctIndex: 0, instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2" },
    quiz: { generate: "irregular_spelling_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "rhyme-pair", word1: "hot", word2: "cold", color: "#4ECDC4" },
    interactive: { type: "match-pairs", pairs: [{ left: "t13_ml13_1", right: "t13_mr13_1" }, { left: "t13_ml13_2", right: "t13_mr13_2" }, { left: "t13_ml13_3", right: "t13_mr13_3" }], instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2" },
    quiz: { generate: "antonyms_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "sentence-display", words: ["He", "was", "so", "angry", "and", "furious."], color: "#4ECDC4" },
    interactive: { type: "highlight-text", tokens: ["t14_w14_1", "t14_w14_2", "t14_w14_3", "t14_w14_4", "t14_w14_5", "t14_w14_6"], correctIndices: [3], instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2" },
    quiz: { generate: "context_clues_k2" }
  },
  {
    difficulty: "hard", infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "simple-icon", icon: "🏆", color: "#4ECDC4" },
    interactive: { type: "sentence-build", fragments: ["t15_f15_1", "t15_f15_2", "t15_f15_3", "t15_f15_4"], instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2" },
    quiz: { generate: "expanding_k2" }
  }
];
