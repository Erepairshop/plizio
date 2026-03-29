// lib/explorerPools/englishK3.ts

import type { PoolTopicDef } from "./types";

// ═══════════════════════════════════════════════════════════════════════════
// i1 — PLURAL
// ═══════════════════════════════════════════════════════════════════════════

export const PLURAL_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Plural Puzzles",
    t1_title: "Regular Plurals: -S",
    t1_text: "Most nouns just add -s to become plural. Example: 'cat' -> 'cats'.",
    t1_inst: "Match singular to plural:",
    t1_h1: "Just add -s at the end.",
    t1_h2: "Find the pair for each word.",
    t1_q: "Which is the plural of 'dog'?",
    t1_qa: "dogs", t1_qb: "doges", t1_qc: "dogses", t1_qd: "dog",
    t1_l1: "Apple", t1_r1: "Apples",
    t1_l2: "Book", t1_r2: "Books",
    t1_l3: "Pen", t1_r3: "Pens",

    t2_title: "Nouns ending in -SH, -CH",
    t2_text: "Nouns ending in -sh, -ch, -x, or -s add -es. Example: 'bus' -> 'buses'.",
    t2_inst: "Order the words for a plural sentence:",
    t2_h1: "Start with 'There are'.",
    t2_h2: "Use 'buses' as the plural form.",
    t2_q: "Plural of 'brush'?",
    t2_qa: "brushes", t2_qb: "brushs", t2_qc: "brushies", t2_qd: "brushess",
    t2_w1: "There", t2_w2: "are", t2_w3: "three", t2_w4: "buses", t2_w5: "at", t2_w6: "the", t2_w7: "stop.",

    t3_title: "Nouns ending in -Y",
    t3_text: "If a noun ends in consonant + y, change y to -ies. Example: 'baby' -> 'babies'.",
    t3_inst: "Choose for a plural noun:",
    t3_h1: "Change 'y' to 'i' then add 'es'.",
    t3_h2: "Look for the '-ies' ending.",
    t3_q: "Plural of 'city'?",
    t3_qa: "cities", t3_qb: "citys", t3_qc: "cityes", t3_qd: "cites",
    t3_sent: "There are many ___ in the library.",
    t3_qa2: "stories", t3_qb2: "storys", t3_qc2: "storyes", t3_qd2: "storyies",

    t4_title: "Irregular: Men and Women",
    t4_text: "Some plurals don't use -s. Example: 'man' -> 'men', 'woman' -> 'women'.",
    t4_inst: "Highlight the irregular plural:",
    t4_h1: "Look for 'men' or 'women'.",
    t4_h2: "These words change internally.",
    t4_q: "Plural of 'woman'?",
    t4_qa: "women", t4_qb: "womans", t4_qc: "womens", t4_qd: "womem",
    t4_tk1: "Many", t4_tk2: "men", t4_tk3: "and", t4_tk4: "women", t4_tk5: "work", t4_tk6: "in", t4_tk7: "this", t4_tk8: "office.",

    t5_title: "Irregular: Teeth and Feet",
    t5_text: "'Foot' becomes 'feet' and 'tooth' becomes 'teeth'.",
    t5_inst: "Build a plural sentence:",
    t5_h1: "Start with 'The baby'.",
    t5_h2: "Use 'teeth' for plural.",
    t5_q: "Plural of 'foot'?",
    t5_qa: "feet", t5_qb: "foots", t5_qc: "feets", t5_qd: "footies",
    t5_f1: "The baby", t5_f2: "has", t5_f3: "two", t5_f4: "little teeth.",

    t6_title: "Plural Sorter",
    t6_text: "Group by -S vs -ES endings.",
    t6_inst: "Sort by Plural Ending:",
    t6_h1: "Does it end in -s or -es?",
    t6_h2: "Check the singular ending first.",
    t6_q: "Which needs -es?",
    t6_qa: "box", t6_qb: "cat", t6_qc: "desk", t6_qd: "cup",
    t6_bl1: "-S", t6_bl2: "-ES",
    t6_i1: "Cats", t6_i2: "Boxes",
    t6_i3: "Dogs", t6_i4: "Buses",

    t7_title: "Nouns ending in -F",
    t7_text: "Many nouns ending in -f change to -ves. Example: 'leaf' -> 'leaves'.",
    t7_inst: "Order the words for leaves:",
    t7_h1: "Start with 'The'.",
    t7_h2: "Plural of 'leaf' is 'leaves'.",
    t7_q: "Plural of 'wolf'?",
    t7_qa: "wolves", t7_qb: "wolfs", t7_qc: "wolfes", t7_qd: "wolvies",
    t7_w1: "The", t7_w2: "green", t7_w3: "leaves", t7_w4: "fell", t7_w5: "from", t7_w6: "the", t7_w7: "tree.",

    t8_title: "Irregular: Children",
    t8_text: "'Child' becomes 'children' in the plural.",
    t8_inst: "Match singular to irregular plural:",
    t8_h1: "Think about words that change completely.",
    t8_h2: "Child -> Children, Person -> People.",
    t8_q: "Plural of 'child'?",
    t8_qa: "children", t8_qb: "childs", t8_qc: "childrens", t8_qd: "childes",
    t8_l1: "Child", t8_r1: "Children",
    t8_l2: "Person", t8_r2: "People",
    t8_l3: "Mouse", t8_r3: "Mice",

    t9_title: "Plural Choice",
    t9_text: "Choosing the correct plural form.",
    t9_inst: "Pick the correct word:",
    t9_h1: "Check the grammar rule.",
    t9_h2: "Is it -s, -es, or irregular?",
    t9_q: "Which is correct?",
    t9_qa: "three mice", t9_qb: "three mouses", t9_qc: "three mices", t9_qd: "three mouse",
    t9_sent: "I saw three ___ in the garden.",
    t9_qa2: "mice", t9_qb2: "mouses", t9_qc2: "mices", t9_qd2: "mouse",

    t10_title: "Same Singular/Plural",
    t10_text: "Some words are the same in singular and plural. Example: 'sheep', 'fish', 'deer'.",
    t10_inst: "Highlight the unchanging plural:",
    t10_h1: "Look for 'sheep' or 'fish'.",
    t10_h2: "It doesn't have an -s.",
    t10_q: "Plural of 'sheep'?",
    t10_qa: "sheep", t10_qb: "sheeps", t10_qc: "sheepes", t10_qd: "ship",
    t10_tk1: "Look", t10_tk2: "at", t10_tk3: "those", t10_tk4: "ten", t10_tk5: "sheep", t10_tk6: "on", t10_tk7: "the", t10_tk8: "hill.",

    t11_title: "Plural Build",
    t11_text: "Build a plural sentence about people.",
    t11_inst: "Build a 'people' sentence:",
    t11_h1: "Start with 'There are'.",
    t11_h2: "Use 'people' for plural.",
    t11_q: "Plural of 'person'?",
    t11_qa: "people", t11_qb: "persons", t11_qc: "peoples", t11_qd: "persones",
    t11_f1: "There are", t11_f2: "many people", t11_f3: "at the", t11_f4: "park.",

    t12_title: "Category Sorter",
    t12_text: "Sort by Regular vs Irregular plurals.",
    t12_inst: "Sort by Plural Type:",
    t12_h1: "Does it follow the -s rule?",
    t12_h2: "Irregular words change form.",
    t12_q: "Which is irregular?",
    t12_qa: "teeth", t12_qb: "books", t12_qc: "tables", t12_qd: "phones",
    t12_bl1: "Regular", t12_bl2: "Irregular",
    t12_i1: "Dogs", t12_i2: "Children",
    t12_i3: "Cats", t12_i4: "Men",

    t13_title: "Plural Gap-Fill",
    t13_text: "Fill in the correct plural form.",
    t13_inst: "Choose for the blank:",
    t13_h1: "Look at the number (two).",
    t13_h2: "Use the plural form.",
    t13_q: "Two ___?",
    t13_qa: "knives", t13_qb: "knifes", t13_qc: "knifeses", t13_qd: "knive",
    t13_sent: "Please give me two ___.",
    t13_qa2: "knives", t13_qb2: "knifes", t13_qc2: "knifeses", t13_qd2: "knive",

    t14_title: "Plural Match",
    t14_text: "Final plural matching practice.",
    t14_inst: "Match the pairs:",
    t14_h1: "Singular on left, Plural on right.",
    t14_h2: "Check irregulars carefully.",
    t14_q: "Which is correct?",
    t14_qa: "Tooth -> Teeth", t14_qb: "Foot -> Foots", t14_qc: "Mouse -> Mouses", t14_qd: "Man -> Mans",
    t14_l1: "Goose", t14_r1: "Geese",
    t14_l2: "Tomato", t14_r2: "Tomatoes",
    t14_l3: "Box", t14_r3: "Boxes",

    t15_title: "Plural Review",
    t15_text: "Final review of all plural rules.",
    t15_inst: "Pick the best plural form:",
    t15_h1: "Think about the ending of the word.",
    t15_h2: "Is it a special case?",
    t15_q: "Plural of 'half'?",
    t15_qa: "halves", t15_qb: "halfs", t15_qc: "halfes", t15_qd: "halvies",
    t15_sent: "We cut the pizza into two ___.",
    t15_qa2: "halves", t15_qb2: "halfs", t15_qc2: "halfes", t15_qd2: "halvies",
  },
};

export const PLURAL_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "plural", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", pairs: [{ left: "t1_l1", right: "t1_r1" }, { left: "t1_l2", right: "t1_r2" }, { left: "t1_l3", right: "t1_r3" }] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "buses", color: "#10B981" },
    interactive: { type: "word-order", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", words: ["t2_w1", "t2_w2", "t2_w3", "t2_w4", "t2_w5", "t2_w6", "t2_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "-ies", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "women", color: "#10B981" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8"], correctIndices: [1, 3] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "teeth", color: "#10B981" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#10B981" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "leaves", color: "#10B981" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "child", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "choice", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "sheep", color: "#10B981" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8"], correctIndices: [4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "people", color: "#10B981" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#10B981" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "two", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#10B981" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#10B981" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i2 — TENSE
// ═══════════════════════════════════════════════════════════════════════════

export const TENSE_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Tense Time",
    t1_title: "Present Continuous",
    t1_text: "Use am/is/are + -ing for actions happening now. Example: 'I am playing.'",
    t1_inst: "Order for an action now:",
    t1_h1: "Start with 'I am'.",
    t1_h2: "Use the -ing form of the verb.",
    t1_q: "Which is happening now?",
    t1_qa: "I am reading.", t1_qb: "I read.", t1_qc: "I was reading.", t1_qd: "I will read.",
    t1_w1: "I", t1_w2: "am", t1_w3: "eating", t1_w4: "my", t1_w5: "lunch", t1_w6: "now.",

    t2_title: "Past Simple: Regular",
    t2_text: "Add -ed for regular past verbs. Example: 'walk' -> 'walked'.",
    t2_inst: "Match present to past:",
    t2_h1: "Add -ed at the end.",
    t2_h2: "Walk -> Walked.",
    t2_q: "Past of 'play'?",
    t2_qa: "played", t2_qb: "playes", t2_qc: "playing", t2_qd: "playied",
    t2_l1: "Walk", t2_r1: "Walked",
    t2_l2: "Jump", t2_r2: "Jumped",
    t2_l3: "Cook", t2_r3: "Cooked",

    t3_title: "Past Simple: Irregular",
    t3_text: "Some verbs change completely in the past. Example: 'go' -> 'went'.",
    t3_inst: "Choose for a past action:",
    t3_h1: "It happened yesterday.",
    t3_h2: "The past of 'eat' is 'ate'.",
    t3_q: "Past of 'go'?",
    t3_qa: "went", t3_qb: "goed", t3_qc: "gone", t3_qd: "going",
    t3_sent: "Yesterday, I ___ to the park.",
    t3_qa2: "went", t3_qb2: "go", t3_qc2: "goed", t3_qd2: "was go",

    t4_title: "Future Simple: WILL",
    t4_text: "Use 'will' + verb for future plans. Example: 'I will help you.'",
    t4_inst: "Highlight the future marker:",
    t4_h1: "Look for 'will'.",
    t4_h2: "It shows what will happen later.",
    t4_q: "Which is a future plan?",
    t4_qa: "I will call you.", t4_qb: "I called you.", t4_qc: "I call you.", t4_qd: "I am call you.",
    t4_tk1: "Tomorrow", t4_tk2: "we", t4_tk3: "will", t4_tk4: "visit", t4_tk5: "the", t4_tk6: "zoo", t4_tk7: "with", t4_tk8: "Grandpa.",

    t5_title: "Tense Sorter",
    t5_text: "Group by Past, Present, or Future.",
    t5_inst: "Sort by Time:",
    t5_h1: "When did it happen?",
    t5_h2: "Look at the verb ending or helper.",
    t5_q: "Which is past?",
    t5_qa: "cooked", t5_qb: "eating", t5_qc: "will go", t5_qd: "run",
    t5_bl1: "Past", t5_bl2: "Future",
    t5_i1: "Walked", t5_i2: "Will jump",
    t5_i3: "Played", t5_i4: "Will eat",

    t6_title: "Going to: Future",
    t6_text: "Use 'am/is/are going to' for planned actions.",
    t6_inst: "Build a planned future sentence:",
    t6_h1: "Start with 'He is'.",
    t6_h2: "Use 'going to' before the verb.",
    t6_q: "Which is a plan?",
    t6_qa: "He is going to run.", t6_qb: "He runs.", t6_qc: "He ran.", t6_qd: "He going run.",
    t6_f1: "He is", t6_f2: "going to", t6_f3: "play", t6_f4: "football.",

    t7_title: "Present Simple: Habits",
    t7_text: "Use present simple for daily habits. Example: 'I brush my teeth.'",
    t7_inst: "Order for a habit:",
    t7_h1: "Start with 'She'.",
    t7_h2: "Add -s for 'she/he/it'.",
    t7_q: "Which is a habit?",
    t7_qa: "He walks daily.", t7_qb: "He is walk.", t7_qc: "He walking.", t7_qd: "He walk.",
    t7_w1: "She", t7_w2: "drinks", t7_w3: "milk", t7_w4: "every", t7_w5: "morning", t7_w6: "at", t7_w7: "eight.",

    t8_title: "Verb Match: Irregular",
    t8_text: "Match the base form to the past irregular form.",
    t8_inst: "Match base to past:",
    t8_h1: "Think about how the word changes.",
    t8_h2: "See -> Saw, Buy -> Bought.",
    t8_q: "Past of 'buy'?",
    t8_qa: "bought", t8_qb: "buyed", t8_qc: "buying", t8_qd: "buys",
    t8_l1: "See", t8_r1: "Saw",
    t8_l2: "Buy", t8_r2: "Bought",
    t8_l3: "Do", t8_r3: "Did",

    t9_title: "Tense Gap-Fill",
    t9_text: "Choosing the right helper.",
    t9_inst: "Choose for the blank:",
    t9_h1: "Is it now or later?",
    t9_h2: "Check the helper word.",
    t9_q: "I ___ going now.",
    t9_qa: "am", t9_qb: "will", t9_qc: "is", t9_qd: "do",
    t9_sent: "They ___ playing in the garden now.",
    t9_qa2: "are", t9_qb2: "is", t9_qc2: "am", t9_qd2: "be",

    t10_title: "Negative Helper",
    t10_text: "Use 'not' with helper verbs. Example: 'I am not', 'I did not'.",
    t10_inst: "Highlight the negative part:",
    t10_h1: "Look for 'not' or 'didn't'.",
    t10_h2: "It shows someone is NOT doing something.",
    t10_q: "Which is negative?",
    t10_qa: "I didn't go.", t10_qb: "I go.", t10_qc: "I went.", t10_qd: "I will go.",
    t10_tk1: "He", t10_tk2: "does", t10_tk3: "not", t10_tk4: "like", t10_tk5: "to", t10_tk6: "eat", t10_tk7: "green", t10_tk8: "beans.",

    t11_title: "Present/Past Build",
    t11_text: "Build a past tense sentence.",
    t11_inst: "Build a past sentence:",
    t11_h1: "Start with 'We saw'.",
    t11_h2: "Add the object at the end.",
    t11_q: "Past of 'see'?",
    t11_qa: "saw", t11_qb: "seed", t11_qc: "seeing", t11_qd: "sees",
    t11_f1: "We saw", t11_f2: "a big", t11_f3: "movie", t11_f4: "yesterday.",

    t12_title: "Type Sorter",
    t12_text: "Sort by Simple vs Continuous tenses.",
    t12_inst: "Sort by Tense Form:",
    t12_h1: "Does it have -ing?",
    t12_h2: "Continuous needs 'am/is/are' + -ing.",
    t12_q: "Which is continuous?",
    t12_qa: "is playing", t12_qb: "plays", t12_qc: "played", t12_qd: "will play",
    t12_bl1: "Simple", t12_bl2: "Continuous",
    t12_i1: "I run", t12_i2: "I am running",
    t12_i3: "He jumps", t12_i4: "He is jumping",

    t13_title: "Question Helper",
    t13_text: "Use helpers for questions. Example: 'Did you go?'",
    t13_inst: "Choose for a question:",
    t13_h1: "It starts the question.",
    t13_h2: "Use 'Do' or 'Did'.",
    t13_q: "___ you like it?",
    t13_qa: "Do", t13_qb: "Am", t13_qc: "Is", t13_qd: "Are",
    t13_sent: "___ you see the cat yesterday?",
    t13_qa2: "Did", t13_qb2: "Do", t13_qc2: "Are", t13_qd2: "Were",

    t14_title: "Final Tense Match",
    t14_text: "Review of all verb shifts.",
    t14_inst: "Match the tense shift:",
    t14_h1: "Now vs. Yesterday vs. Tomorrow.",
    t14_h2: "Look at the time markers.",
    t14_q: "Shift for 'run'?",
    t14_qa: "Run -> Ran", t14_qb: "Run -> Runned", t14_qc: "Run -> Runs", t14_qd: "Run -> Running",
    t14_l1: "Now", t14_r1: "I am doing",
    t14_l2: "Past", t14_r2: "I did",
    t14_l3: "Future", t14_r3: "I will do",

    t15_title: "Tense Review",
    t15_text: "Final review of Grade 3 tenses.",
    t15_inst: "Pick the best verb form:",
    t15_h1: "Check the time word (tomorrow).",
    t15_h2: "Use 'will' for future.",
    t15_q: "What will you do?",
    t15_qa: "I will go.", t15_qb: "I go.", t15_qc: "I went.", t15_qd: "I was go.",
    t15_sent: "Tomorrow, we ___ go to the beach.",
    t15_qa2: "will", t15_qb2: "are", t15_qc2: "did", t15_qd2: "do",
  },
};

export const TENSE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "now", color: "#3B82F6" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "-ed", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "went", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "will", color: "#3B82F6" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8"], correctIndices: [2] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "sort", color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", buckets: [{ id: "b1", label: "t5_bl1" }, { id: "b2", label: "t5_bl2" }], items: [{ text: "t5_i1", bucketId: "b1" }, { text: "t5_i2", bucketId: "b2" }, { text: "t5_i3", bucketId: "b1" }, { text: "t5_i4", bucketId: "b2" }] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "plan", color: "#3B82F6" },
    interactive: { type: "sentence-build", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", fragments: ["t6_f1", "t6_f2", "t6_f3", "t6_f4"] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "daily", color: "#3B82F6" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "are", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "not", color: "#3B82F6" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8"], correctIndices: [2] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "saw", color: "#3B82F6" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "form", color: "#3B82F6" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "did", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#3B82F6" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#3B82F6" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i3 — ADVERB
// ═══════════════════════════════════════════════════════════════════════════

export const ADVERB_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Adverb Action",
    t1_title: "Adverbs of Manner",
    t1_text: "Adverbs describe how an action is done. Example: 'He runs quickly.'",
    t1_inst: "Order for an adverb sentence:",
    t1_h1: "Start with 'The dog'.",
    t1_h2: "Use 'loudly' at the end.",
    t1_q: "Which is an adverb?",
    t1_qa: "quietly", t1_qb: "quiet", t1_qc: "quiets", t1_qd: "quies",
    t1_w1: "The", t1_w2: "dog", t1_w3: "was", t1_w4: "barking", t1_w5: "very", t1_w6: "loudly.",

    t2_title: "Adjective to Adverb",
    t2_text: "Most adverbs add -ly to the adjective. Example: 'slow' -> 'slowly'.",
    t2_inst: "Match adjective to adverb:",
    t2_h1: "Add -ly to the adjective.",
    t2_h2: "Happy -> Happily.",
    t2_q: "Adverb of 'bad'?",
    t2_qa: "badly", t2_qb: "bad", t2_qc: "baddies", t2_qd: "badlie",
    t2_l1: "Quick", t2_r1: "Quickly",
    t2_l2: "Slow", t2_r2: "Slowly",
    t2_l3: "Happy", t2_r3: "Happily",

    t3_title: "Irregular Adverbs",
    t3_text: "Some adverbs are different. Example: 'good' -> 'well', 'fast' -> 'fast'.",
    t3_inst: "Choose for a good result:",
    t3_h1: "He is good at it.",
    t3_h2: "He plays 'well'.",
    t3_q: "Adverb of 'good'?",
    t3_qa: "well", t3_qb: "goodly", t3_qc: "wellly", t3_qd: "goods",
    t3_sent: "She speaks English very ___.",
    t3_qa2: "well", t3_qb2: "good", t3_qc2: "goodly", t3_qd2: "better",

    t4_title: "Adverbs of Frequency",
    t4_text: "Words like: always, sometimes, never.",
    t4_inst: "Highlight the frequency word:",
    t4_h1: "Look for 'always' or 'often'.",
    t4_h2: "It tells how often it happens.",
    t4_q: "Which shows frequency?",
    t4_qa: "often", t4_qb: "slowly", t4_qc: "well", t4_qd: "loudly",
    t4_tk1: "I", t4_tk2: "always", t4_tk3: "brush", t4_tk4: "my", t4_tk5: "teeth", t4_tk6: "before", t4_tk7: "bed.",

    t5_title: "Adverb Build",
    t5_text: "Build a sentence describing speed.",
    t5_inst: "Build a 'slowly' sentence:",
    t5_h1: "Start with 'The turtle'.",
    t5_h2: "Use 'walked slowly'.",
    t5_q: "Adverb of 'careful'?",
    t5_qa: "carefully", t5_qb: "carefuly", t5_qc: "careful", t5_qd: "care",
    t5_f1: "The turtle", t5_f2: "walked", t5_f3: "very slowly", t5_f4: "on the road.",

    t6_title: "Adverb Sorter",
    t6_text: "Group by Manner vs Frequency.",
    t6_inst: "Sort by Adverb Type:",
    t6_h1: "How vs How often.",
    t6_h2: "Manner ends in -ly usually.",
    t6_q: "Which is manner?",
    t6_qa: "softly", t6_qb: "never", t6_qc: "sometimes", t6_qd: "always",
    t6_bl1: "Manner (How)", t6_bl2: "Frequency",
    t6_i1: "Quickly", t6_i2: "Always",
    t6_i3: "Loudly", t6_i4: "Often",

    t7_title: "Adverbs of Time",
    t7_text: "Words like: today, yesterday, soon, now.",
    t7_inst: "Order for a time sentence:",
    t7_h1: "Start with 'We'.",
    t7_h2: "Use 'soon' at the end.",
    t7_q: "Which is a time adverb?",
    t7_qa: "soon", t7_qb: "softly", t7_qc: "never", t7_qd: "fast",
    t7_w1: "We", t7_w2: "will", t7_w3: "be", t7_w4: "at", t7_w5: "school", t7_w6: "very", t7_w7: "soon.",

    t8_title: "Frequency Match",
    t8_text: "Match the adverb to its percentage.",
    t8_inst: "Match Word to Frequency:",
    t8_h1: "Think about the scale 0-100%.",
    t8_h2: "Always = 100%, Never = 0%.",
    t8_q: "Which means 0%?",
    t8_qa: "never", t8_qb: "always", t8_qc: "often", t8_qd: "sometimes",
    t8_l1: "Always", t8_r1: "100%",
    t8_l2: "Sometimes", t8_r2: "50%",
    t8_l3: "Never", t8_r3: "0%",

    t9_title: "Manner Choice",
    t9_text: "Choosing the best way to describe an action.",
    t9_inst: "Choose for the blank:",
    t9_h1: "How did he sing?",
    t9_h2: "He has a beautiful voice.",
    t9_q: "He sings ___.",
    t9_qa: "beautifully", t9_qb: "beauty", t9_qc: "beautiful", t9_qd: "beauties",
    t9_sent: "The choir sang ___ during the show.",
    t9_qa2: "beautifully", t9_qb2: "beautiful", t9_qc2: "beauty", t9_qd2: "more beauty",

    t10_title: "Adverb Highlight",
    t10_text: "Finding adverbs in long sentences.",
    t10_inst: "Highlight the adverb:",
    t10_h1: "Look for the word describing 'closed'.",
    t10_h2: "It ends in -ly.",
    t10_q: "Which is an adverb?",
    t10_qa: "gently", t10_qb: "gentle", t10_qc: "gent", t10_qd: "gentry",
    t10_tk1: "Please", t10_tk2: "close", t10_tk3: "the", t10_tk4: "door", t10_tk5: "gently", t10_tk6: "while", t10_tk7: "the", t10_tk8: "baby", t10_tk9: "sleeps.",

    t11_title: "Frequency Build",
    t11_text: "Build a frequency sentence.",
    t11_inst: "Build an 'often' sentence:",
    t11_h1: "Start with 'They often'.",
    t11_h2: "Use 'play at the park'.",
    t11_q: "Where does 'always' go?",
    t11_qa: "before the verb", t11_qb: "at the end", t11_qc: "at the start", t11_qd: "after the object",
    t11_f1: "They often", t11_f2: "play soccer", t11_f3: "at the", t11_f4: "park.",

    t12_title: "Category Sorter 2",
    t12_text: "Sort by Adverb vs Adjective.",
    t12_inst: "Sort by Word Class:",
    t12_h1: "Describing thing vs action?",
    t12_h2: "Adverbs usually have -ly.",
    t12_q: "Which is an adjective?",
    t12_qa: "happy", t12_qb: "happily", t12_qc: "well", t12_qd: "fastly",
    t12_bl1: "Adjective", t12_bl2: "Adverb",
    t12_i1: "Quick", t12_i2: "Quickly",
    t12_i3: "Sad", t12_i4: "Sadly",

    t13_title: "Time Gap-Fill",
    t13_text: "Fill in the time adverb.",
    t13_inst: "Choose for the time:",
    t13_h1: "It will happen in the future.",
    t13_h2: "Use 'soon'.",
    t13_q: "See you ___!",
    t13_qa: "soon", t13_qb: "softly", t13_qc: "slowly", t13_qd: "always",
    t13_sent: "We are leaving for vacation ___.",
    t13_qa2: "soon", t13_qb2: "already", t13_qc2: "yesterday", t13_qd2: "well",

    t14_title: "Adverb Match 2",
    t14_text: "Final adverb matching practice.",
    t14_inst: "Match the pairs:",
    t14_h1: "Adjective on left, Adverb on right.",
    t14_h2: "Check irregulars.",
    t14_q: "Which is correct?",
    t14_qa: "Good -> Well", t14_qb: "Fast -> Fastly", t14_qc: "Hard -> Hardly", t14_qd: "Quick -> Quicker",
    t14_l1: "Bad", t14_r1: "Badly",
    t14_l2: "Real", t14_r2: "Really",
    t14_l3: "Good", t14_r3: "Well",

    t15_title: "Adverb Review",
    t15_text: "Final review of Grade 3 adverbs.",
    t15_inst: "Pick the best adverb:",
    t15_h1: "Think about how he is walking.",
    t15_h2: "Use an adverb of manner.",
    t15_q: "He walks ___.",
    t15_qa: "quickly", t15_qb: "quick", t15_qc: "quicks", t15_qd: "quickest",
    t15_sent: "The cat crept ___ toward the mouse.",
    t15_qa2: "silently", t15_qb2: "silent", t15_qc2: "silence", t15_qd2: "silents",
  },
};

export const ADVERB_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "how?", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6"], correctOrder: [0,1,2,3,4,5] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "-ly", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "well", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "always", color: "#F59E0B" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8"], correctIndices: [1] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "slowly", color: "#F59E0B" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#F59E0B" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "soon", color: "#F59E0B" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "beautifully", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "gently", color: "#F59E0B" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8", "t10_tk9"], correctIndices: [4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "often", color: "#F59E0B" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#F59E0B" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "soon", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#F59E0B" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#F59E0B" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i4 — SUBJECT
// ═══════════════════════════════════════════════════════════════════════════

export const SUBJECT_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Subject Search",
    t1_title: "Simple Subject",
    t1_text: "The subject is who or what the sentence is about. Example: 'The cat sleeps.'",
    t1_inst: "Order for a subject sentence:",
    t1_h1: "Start with 'The bird'.",
    t1_h2: "The subject comes at the start.",
    t1_q: "What is the subject of 'The boy runs'?",
    t1_qa: "The boy", t1_qb: "runs", t1_qc: "the", t1_qd: "boy runs",
    t1_w1: "The", t1_w2: "bird", t1_w3: "is", t1_w4: "singing", t1_w5: "in", t1_w6: "the", t1_w7: "tree.",

    t2_title: "Subject and Verb Match",
    t2_text: "Match the subject with the correct verb form.",
    t2_inst: "Match subject to verb:",
    t2_h1: "Think about singular vs plural.",
    t2_h2: "He/She/It needs -s.",
    t2_q: "Which matches 'They'?",
    t2_qa: "play", t2_qb: "plays", t2_qc: "playing", t2_qd: "is play",
    t2_l1: "He", t2_r1: "eats",
    t2_l2: "We", t2_r2: "eat",
    t2_l3: "She", t2_r3: "eats",

    t3_title: "Compound Subject",
    t3_text: "Two subjects joined by 'and'. Example: 'Tom and Jerry are friends.'",
    t3_inst: "Choose for a plural subject:",
    t3_h1: "Two people = 'are'.",
    t3_h2: "Look for the plural helper.",
    t3_q: "Which is a compound subject?",
    t3_qa: "Mark and Sarah", t3_qb: "Mark", t3_qc: "The boys", t3_qd: "We",
    t3_sent: "Mom and Dad ___ going to the store.",
    t3_qa2: "are", t3_qb2: "is", t3_qc2: "am", t3_qd2: "be",

    t4_title: "Subject Pronouns",
    t4_text: "I, you, he, she, it, we, they.",
    t4_inst: "Highlight the subject pronoun:",
    t4_h1: "Look for 'They' or 'We'.",
    t4_h2: "It replaces the name.",
    t4_q: "Which is a subject pronoun?",
    t4_qa: "They", t4_qb: "them", t4_qc: "their", t4_qd: "theirs",
    t4_tk1: "They", t4_tk2: "finished", t4_tk3: "their", t4_tk4: "dinner", t4_tk5: "very", t4_tk6: "quickly", t4_tk7: "tonight.",

    t5_title: "Subject Build",
    t5_text: "Build a sentence with a clear subject.",
    t5_inst: "Build a 'teacher' sentence:",
    t5_h1: "Start with 'The teacher'.",
    t5_h2: "Add the verb 'is helping'.",
    t5_q: "Subject of 'Dogs bark'?",
    t5_qa: "Dogs", t5_qb: "bark", t5_qc: "the dogs", t5_qd: "barking",
    t5_f1: "The teacher", t5_f2: "is helping", t5_f3: "the students", t5_f4: "today.",

    t6_title: "Subject Sorter",
    t6_text: "Group by Singular vs Plural subjects.",
    t6_inst: "Sort by Number:",
    t6_h1: "One or more than one?",
    t6_h2: "Check if there is an -s or 'and'.",
    t6_q: "Which is plural?",
    t6_qa: "The girls", t6_qb: "The girl", t6_qc: "A bird", t6_qd: "He",
    t6_bl1: "Singular", t6_bl2: "Plural",
    t6_i1: "He", t6_i2: "They",
    t6_i3: "A dog", t6_i4: "Birds",

    t7_title: "Dummy Subject: IT",
    t7_text: "Use 'It' for weather and time. Example: 'It is raining.'",
    t7_inst: "Order for a weather sentence:",
    t7_h1: "Start with 'It is'.",
    t7_h2: "Use 'very cold'.",
    t7_q: "Subject of 'It is 5 PM'?",
    t7_qa2: "It", t7_qb2: "is", t7_qc2: "5 PM", t7_qd2: "Time",
    t7_w1: "It", t7_w2: "is", t7_w3: "going", t7_w4: "to", t7_w5: "be", t7_w6: "very", t7_w7: "cold.",

    t8_title: "Pronoun Match",
    t8_text: "Match the name to the pronoun.",
    t8_inst: "Match Name to Pronoun:",
    t8_h1: "Boy = He, Girl = She.",
    t8_h2: "Group = They.",
    t8_q: "Pronoun for 'Mary'?",
    t8_qa: "She", t8_qb: "He", t8_qc: "It", t8_qd: "They",
    t8_l1: "Tom", t8_r1: "He",
    t8_l2: "Sarah", t8_r2: "She",
    t8_l3: "The dogs", t8_r3: "They",

    t9_title: "Subject Choice",
    t9_text: "Choosing the correct subject for the verb.",
    t9_inst: "Choose for the verb 'are':",
    t9_h1: "Verb is 'are', so subject must be plural.",
    t9_h2: "Look for 'and' or -s.",
    t9_q: "___ are playing.",
    t9_qa: "The kids", t9_qb: "The kid", t9_qc: "He", t9_qd: "She",
    t9_sent: "___ is my favorite color.",
    t9_qa2: "Blue", t9_qb2: "Apples", t9_qc2: "They", t9_qd2: "We",

    t10_title: "Subject Highlight 2",
    t10_text: "Finding complex subjects.",
    t10_inst: "Highlight the full subject:",
    t10_h1: "The subject includes 'The big red car'.",
    t10_h2: "It's everything before the verb.",
    t10_q: "Subject of 'The big red car stopped'?",
    t10_qa: "The big red car", t10_qb: "car", t10_qc: "stopped", t10_qd: "the car",
    t10_tk1: "The", t10_tk2: "big", t10_tk3: "red", t10_tk4: "car", t10_tk5: "stopped", t10_tk6: "at", t10_tk7: "the", t10_tk8: "light.",

    t11_title: "Compound Build",
    t11_text: "Build a compound subject sentence.",
    t11_inst: "Build a 'Tom and I' sentence:",
    t11_h1: "Start with 'Tom and I'.",
    t11_h2: "Use 'are going'.",
    t11_q: "Which is a plural subject?",
    t11_qa: "You and I", t11_qb: "He", t11_qc: "She", t11_qd: "It",
    t11_f1: "Tom and I", t11_f2: "are going", t11_f3: "to the", t11_f4: "cinema.",

    t12_title: "Subject Sorter 2",
    t12_text: "Sort by Person vs Thing subjects.",
    t12_inst: "Sort by Subject Category:",
    t12_h1: "Is it a human or an object?",
    t12_h2: "Look at the noun.",
    t12_q: "Which is a thing?",
    t12_qa: "The table", t12_qb: "The man", t12_qc: "The doctor", t12_qd: "She",
    t12_bl1: "Person", t12_bl2: "Thing",
    t12_i1: "The boy", t12_i2: "The ball",
    t12_i3: "My mom", t12_i4: "A book",

    t13_title: "It/There Gap-Fill",
    t13_text: "Using 'It' and 'There' as subjects.",
    t13_inst: "Choose the correct starter:",
    t13_h1: "Use 'There' for location/existence.",
    t13_h2: "Use 'It' for weather.",
    t13_q: "___ is a bird.",
    t13_qa: "There", t13_qb: "It", t13_qc: "Is", t13_qd: "Are",
    t13_sent: "___ is a bird in the tree.",
    t13_qa2: "There", t13_qb2: "It", t13_qc2: "He", t13_qd2: "She",

    t14_title: "Subject Verb Match 2",
    t14_text: "Final subject-verb practice.",
    t14_inst: "Match the pairs:",
    t14_h1: "Check the helper verb.",
    t14_h2: "I am, You are, He is.",
    t14_q: "Which is correct?",
    t14_qa: "I am", t14_qb: "I is", t14_qc: "He am", t14_qd: "They is",
    t14_l1: "I ", t14_r1: "am",
    t14_l2: "You ", t14_r2: "are",
    t14_l3: "He ", t14_r3: "is",

    t15_title: "Subject Review",
    t15_text: "Final review of Grade 3 subjects.",
    t15_inst: "Pick the best subject:",
    t15_h1: "The verb is 'bark'.",
    t15_h2: "Who barks?",
    t15_q: "___ bark loudly.",
    t15_qa: "Dogs", t15_qb: "Cat", t15_qc: "It", t15_qd: "He",
    t15_sent: "___ are the best students.",
    t15_qa3: "They", t15_qb3: "He", t15_qc3: "It", t15_qd3: "She",
  },
};

export const SUBJECT_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "who?", color: "#EF4444" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "match", color: "#EF4444" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "and", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "they", color: "#EF4444" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7"], correctIndices: [0] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#EF4444" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#EF4444" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "it", color: "#EF4444" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t7_q", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], answer: "t7_qa2" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "he/she", color: "#EF4444" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "are", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "car", color: "#EF4444" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8"], correctIndices: [0, 1, 2, 3] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "we", color: "#EF4444" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#EF4444" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "starter", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#EF4444" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#EF4444" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa3", "t15_qb3", "t15_qc3", "t15_qd3"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i5 — QUOTE
// ═══════════════════════════════════════════════════════════════════════════

export const QUOTE_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Quote Quest",
    t1_title: "Using Quotes",
    t1_text: "Quotes are used to show someone is speaking. Example: 'I am here,' said Tom.",
    t1_inst: "Order for a quote sentence:",
    t1_h1: "Start with the quoted part.",
    t1_h2: "Use 'said Mary' at the end.",
    t1_q: "Where do quotes go?",
    t1_qa: "around the spoken words", t1_qb: "around the names", t1_qc: "at the end", t1_qd: "at the start only",
    t1_w1: "\"I", t1_w2: "am", t1_w3: "hungry,\"", t1_w4: "said", t1_w5: "Mary", t1_w6: "to", t1_w7: "her", t1_w8: "mom.",

    t2_title: "Speaker Match",
    t2_text: "Match the quote to the person who might say it.",
    t2_inst: "Match Quote to Speaker:",
    t2_h1: "Think about jobs and roles.",
    t2_h2: "Doctor -> 'Say Ah', Teacher -> 'Open books'.",
    t2_q: "Who says 'Open your books'?",
    t2_qa: "Teacher", t2_qb: "Chef", t2_qc: "Pilot", t2_qd: "Dog",
    t2_l1: "\"Say Ah!\"", t2_r1: "Doctor",
    t2_l2: "\"Tickets, please\"", t2_r2: "Conductor",
    t2_l3: "\"Goal!\"", t2_r3: "Player",

    t3_title: "Comma in Quotes",
    t3_text: "Use a comma before or after the spoken part. Example: He said, 'Hello.'",
    t3_inst: "Choose for correct punctuation:",
    t3_h1: "Look for the comma placement.",
    t3_h2: "It goes after 'said'.",
    t3_q: "Which is correct?",
    t3_qa: "He said, \"Wait!\"", t3_qb: "He said \"Wait!\"", t3_qc: "He, said \"Wait!\"", t3_qd: "He said \"Wait,\"",
    t3_sent: "She cried, \"___ me!\"",
    t3_qa2: "Help", t3_qb2: "helping", t3_qc2: "helps", t3_qd2: "helped",

    t4_title: "Surprise in Quotes",
    t4_text: "Use exclamation marks for surprise. Example: \"Wow!\" he shouted.",
    t4_inst: "Highlight the exclamation:",
    t4_h1: "Look for the '!' mark.",
    t4_h2: "It shows excitement.",
    t4_q: "Which shows surprise?",
    t4_qa: "\"Wow!\"", t4_qb: "\"Yes.\"", t4_qc: "\"No.\"", t4_qd: "\"Maybe.\"",
    t4_tk1: "\"Look", t4_tk2: "out!\"", t4_tk3: "shouted", t4_tk4: "the", t4_tk5: "man", t4_tk6: "from", t4_tk7: "the", t4_tk8: "window.",

    t5_title: "Quote Build",
    t5_text: "Build a sentence with a question quote.",
    t5_inst: "Build a 'question' quote:",
    t5_h1: "Start with '\"Where is\"'.",
    t5_h2: "Add 'asked Tom' at the end.",
    t5_q: "Correct punctuation?",
    t5_qa: "\"Where?\" he asked.", t5_qb: "Where? he asked.", t5_qc: "\"Where\"? he asked.", t5_qd: "\"Where?\" he asked",
    t5_f1: "\"Where is", t5_f2: "the cat?\"", t5_f3: "asked", t5_f4: "Tom.",

    t6_title: "Quote Sorter",
    t6_text: "Group by Said vs Shouted.",
    t6_inst: "Sort by Loudness:",
    t6_h1: "Normal voice vs. Loud voice?",
    t6_h2: "Check the reporting verb.",
    t6_q: "Which is loud?",
    t6_qa: "yelled", t6_qb: "whispered", t6_qc: "said", t6_qd: "told",
    t6_bl1: "Normal", t6_bl2: "Loud",
    t6_i1: "He said", t6_i2: "He shouted",
    t6_i3: "She replied", t6_i4: "She yelled",

    t7_title: "Reporting Verbs Mix",
    t7_text: "Use better words than 'said': whispered, muttered, replied.",
    t7_inst: "Order for a whisper:",
    t7_h1: "Start with '\"Be quiet,\"'",
    t7_h2: "Use 'whispered' as the verb.",
    t7_q: "Which means speaking softly?",
    t7_qa: "whispered", t7_qb: "shouted", t7_qc: "screamed", t7_qd: "called",
    t7_w1: "\"Be", t7_w2: "quiet,\"", t7_w3: "she", t7_w4: "whispered", t7_w5: "in", t7_w6: "the", t7_w7: "dark.",

    t8_title: "Verb Match 2",
    t8_text: "Match the quote to the feeling.",
    t8_inst: "Match Quote to Feeling:",
    t8_h1: "Check the punctuation and words.",
    t8_h2: "Happy, Angry, or Scared?",
    t8_q: "Feeling of 'Yay!'?",
    t8_qa: "Excited", t8_qb: "Sad", t8_qc: "Angry", t8_qd: "Bored",
    t8_l1: "\"Get out!\"", t8_r1: "Angry",
    t8_l2: "\"I'm scared,\"", t8_r2: "Afraid",
    t8_l3: "\"I love it!\"", t8_r3: "Happy",

    t9_title: "Quote Choice 2",
    t9_text: "Choosing the right reporting verb.",
    t9_inst: "Choose for the blank:",
    t9_h1: "He was very angry.",
    t9_h2: "He spoke very loudly.",
    t9_q: "\"Go away!\" he ___.",
    t9_qa: "roared", t9_qb: "whispered", t9_qc: "said", t9_qd: "sighed",
    t9_sent: "\"I'm so happy!\" she ___.",
    t9_qa2: "cheered", t9_qb2: "cried", t9_qc2: "moaned", t9_qd2: "muttered",

    t10_title: "Punctuation Highlight",
    t10_text: "Finding quotes and commas.",
    t10_inst: "Highlight the spoken part:",
    t10_h1: "Look for everything inside \" \".",
    t10_h2: "It is the direct speech.",
    t10_q: "What is spoken?",
    t10_qa: "I am ready", t10_qb: "he said", t10_qc: "ready", t10_qd: "I am",
    t10_tk1: "He", t10_tk2: "said,", t10_tk3: "\"I", t10_tk4: "am", t10_tk5: "ready", t10_tk6: "to", t10_tk7: "go", t10_tk8: "now.\"",

    t11_title: "Polite Quote Build",
    t11_text: "Build a polite request quote.",
    t11_inst: "Build a 'please' quote:",
    t11_h1: "Start with '\"Please\"'.",
    t11_h2: "Use 'said the boy'.",
    t11_q: "Which is polite?",
    t11_qa: "\"Please help.\"", t11_qb: "\"Help me!\"", t11_qc: "Help.", t11_qd: "Do it.",
    t11_f1: "\"Please", t11_f2: "help me,\"", t11_f3: "said", t11_f4: "the boy.",

    t12_title: "Quote Sorter 2",
    t12_text: "Sort by Start vs End reporting.",
    t12_inst: "Sort by 'Said' position:",
    t12_h1: "Is the name at the start or end?",
    t12_h2: "Look for the comma.",
    t12_q: "Where is 'said' in '\"Hi,\" he said'?",
    t12_qa: "At the end", t12_qb: "At the start", t12_qc: "In the middle", t12_qd: "None",
    t12_bl1: "Start", t12_bl2: "End",
    t12_i1: "He said, \"Hi\"", t12_i2: "\"Hi,\" he said",
    t12_i3: "She cried, \"No\"", t12_i4: "\"No,\" she cried",

    t13_title: "Quotation Gap-Fill",
    t13_text: "Fill in the missing quote mark.",
    t13_inst: "Choose the missing mark:",
    t13_h1: "Quote must be closed.",
    t13_h2: "Use \" at the end of speech.",
    t13_q: "Missing mark in '\"Hello'? ",
    t13_qa: "\"", t13_qb: ",", t13_qc: ".", t13_qd: "!",
    t13_sent: "He said, \"Wait for me___",
    t13_qa2: "!\"", t13_qb2: "!", t13_qc2: "\"", t13_qd2: ", \"",

    t14_title: "Final Quote Match",
    t14_text: "Final practice with quotes.",
    t14_inst: "Match the pairs:",
    t14_h1: "Start of sentence to End.",
    t14_h2: "Check punctuation.",
    t14_q: "Which is correct?",
    t14_qa: "He said, \"Hi.\"", t14_qb: "He said \"Hi.\"", t14_qc: "He said, Hi.", t14_qd: "He said Hi.",
    t14_l1: "He whispered,", t14_r1: "\"Be quiet.\"",
    t14_l2: "She shouted,", t14_r2: "\"Stop!\"",
    t14_l3: "They asked,", t14_r3: "\"Why?\"",

    t15_title: "Quote Review",
    t15_text: "Final review of Grade 3 quotation marks.",
    t15_inst: "Pick the best quote form:",
    t15_h1: "Check the whole sentence structure.",
    t15_h2: "Comma after 'said' is key.",
    t15_q: "Correct way to write speech?",
    t15_qa: "Dad said, \"Let's go.\"", t15_qb: "Dad said \"Let's go.\"", t15_qc: "Dad, said \"Let's go.\"", t15_qd: "Dad said Let's go.",
    t15_sent: "___ I'm here!\" shouted Sam.",
    t15_qa2: "\"Look,", t15_qb2: "Look,", t15_qc2: "\"Look", t15_qd2: "Look",
  },
};

export const QUOTE_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "\" \"", color: "#8B5CF6" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "says", color: "#8B5CF6" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "comma", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "!", color: "#8B5CF6" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8"], correctIndices: [0, 1] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#8B5CF6" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "loud", color: "#8B5CF6" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "whisper", color: "#8B5CF6" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "feel", color: "#8B5CF6" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "roar", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "highlight", color: "#8B5CF6" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8"], correctIndices: [2, 3, 4, 5, 6, 7] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "please", color: "#8B5CF6" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#8B5CF6" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "marks", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#8B5CF6" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#8B5CF6" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i6 — PREFIX3
// ═══════════════════════════════════════════════════════════════════════════

export const PREFIX3_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Prefix Powers",
    t1_title: "Prefix: UN-",
    t1_text: "UN- means 'not'. Example: 'happy' -> 'unhappy'.",
    t1_inst: "Order for an 'un-' word sentence:",
    t1_h1: "Start with 'The result'.",
    t1_h2: "Use 'unexpected' at the end.",
    t1_q: "Meaning of 'unlucky'?",
    t1_qa: "not lucky", t1_qb: "very lucky", t1_qc: "lucky again", t1_qd: "was lucky",
    t1_w1: "The", t1_w2: "news", t1_w3: "was", t1_w4: "completely", t1_w5: "unexpected", t1_w6: "to", t1_w7: "me.",

    t2_title: "Prefix: RE-",
    t2_text: "RE- means 'again'. Example: 'play' -> 'replay'.",
    t2_inst: "Match word to its 're-' meaning:",
    t2_h1: "Think about doing it again.",
    t2_h2: "Write again -> Rewrite.",
    t2_q: "What is 'retell'?",
    t2_qa: "tell again", t2_qb: "tell first", t2_qc: "stop telling", t2_qd: "tell loud",
    t2_l1: "Fill", t2_r1: "Refill",
    t2_l2: "Read", t2_r2: "Reread",
    t2_l3: "Build", t2_r3: "Rebuild",

    t3_title: "Prefix: PRE-",
    t3_text: "PRE- means 'before'. Example: 'view' -> 'preview'.",
    t3_inst: "Choose for 'before school':",
    t3_h1: "It happens before.",
    t3_h2: "Use the 'pre-' prefix.",
    t3_q: "What is 'preheat'?",
    t3_qa: "heat before", t3_qb: "heat after", t3_qc: "heat again", t3_qd: "stop heating",
    t3_sent: "We had a ___ of the movie yesterday.",
    t3_qa2: "preview", t3_qb2: "review", t3_qc2: "unview", t3_qd2: "repreview",

    t4_title: "Prefix: DIS-",
    t4_text: "DIS- often means 'not' or 'opposite'. Example: 'like' -> 'dislike'.",
    t4_inst: "Highlight the 'dis-' word:",
    t4_h1: "Look for a word starting with 'dis'.",
    t4_h2: "It means someone doesn't agree.",
    t4_q: "Meaning of 'disappear'?",
    t4_qa: "vanish", t4_qb: "show up", t4_qc: "move fast", t4_qd: "stay still",
    t4_tk1: "He", t4_tk2: "does", t4_tk3: "disagree", t4_tk4: "with", t4_tk5: "the", t4_tk6: "new", t4_tk7: "rules", t4_tk8: "at", t4_tk9: "school.",

    t5_title: "Prefix Build",
    t5_text: "Build a sentence with an 'un-' word.",
    t5_inst: "Build an 'unhappy' sentence:",
    t5_h1: "Start with 'The boy'.",
    t5_h2: "Use 'is unhappy'.",
    t5_q: "Prefix for 'not kind'?",
    t5_qa: "unkind", t5_qb: "rekind", t5_qc: "diskind", t5_qd: "prekind",
    t5_f1: "The boy", t5_f2: "is very", t5_f3: "unhappy", t5_f4: "today.",

    t6_title: "Prefix Sorter",
    t6_text: "Group by UN- vs RE-.",
    t6_inst: "Sort by Prefix:",
    t6_h1: "Not or Again?",
    t6_h2: "Check the first two letters.",
    t6_q: "Which means again?",
    t6_qa: "replay", t6_qb: "untrue", t6_qc: "unkind", t6_qd: "unwell",
    t6_bl1: "UN- (Not)", t6_bl2: "RE- (Again)",
    t6_i1: "Unhappy", t6_i2: "Rewrite",
    t6_i3: "Unfair", t6_i4: "Refill",

    t7_title: "Prefix: MIS-",
    t7_text: "MIS- means 'wrongly'. Example: 'spell' -> 'misspell'.",
    t7_inst: "Order for a mistake:",
    t7_h1: "Start with 'I'.",
    t7_h2: "Use 'misunderstood' as the verb.",
    t7_q: "What is 'miscount'?",
    t7_qa2: "count wrong", t7_qb2: "count right", t7_qc2: "count again", t7_qd2: "stop counting",
    t7_w1: "I", t7_w2: "totally", t7_w3: "misunderstood", t7_w4: "what", t7_w5: "you", t7_w6: "just", t7_w7: "said.",

    t8_title: "Prefix Match 2",
    t8_text: "Match word to its opposite/action.",
    t8_inst: "Match Root to Prefix:",
    t8_h1: "Think about the meaning change.",
    t8_h2: "Appear -> Disappear.",
    t8_q: "Opposite of 'honest'?",
    t8_qa: "dishonest", t8_qb: "unhonest", t8_qc: "rehonest", t8_qd: "prehonest",
    t8_l1: "Happy", t8_r1: "Unhappy",
    t8_l2: "Like", t8_r2: "Dislike",
    t8_l3: "Write", t8_r3: "Rewrite",

    t9_title: "Prefix Choice 2",
    t9_text: "Choosing the right prefix for the sentence.",
    t9_inst: "Choose for the blank:",
    t9_h1: "You need to do the test again.",
    t9_h2: "Use 're-'.",
    t9_q: "I need to ___ my test.",
    t9_qa: "retake", t9_qb: "untake", t9_qc: "pretake", t9_qd: "distake",
    t9_sent: "The movie was very ___ to watch.",
    t9_qa2: "unpleasant", t9_qb2: "repleasant", t9_qc2: "displeasant", t9_qd2: "prepleasant",

    t10_title: "Prefix Highlight 2",
    t10_text: "Finding prefixes in sentences.",
    t10_inst: "Highlight the prefix word:",
    t10_h1: "Look for 'untie'.",
    t10_h2: "It means to loosen.",
    t10_q: "Which word has a prefix?",
    t10_qa: "untie", t10_qb: "table", t10_qc: "book", t10_qd: "shoes",
    t10_tk1: "Please", t10_tk2: "help", t10_tk3: "me", t10_tk4: "to", t10_tk5: "untie", t10_tk6: "my", t10_tk7: "shoelaces", t10_tk8: "now.",

    t11_title: "Prefix Build 2",
    t11_text: "Build a sentence with 'disappear'.",
    t11_inst: "Build a 'vanish' sentence:",
    t11_h1: "Start with 'The sun'.",
    t11_h2: "Use 'did disappear'.",
    t11_q: "Prefix for 'not obey'?",
    t11_qa: "disobey", t11_qb: "unobey", t11_qc: "reobey", t11_qd: "preobey",
    t11_f1: "The sun", t11_f2: "did", t11_f3: "disappear", t11_f4: "behind clouds.",

    t12_title: "Category Sorter 3",
    t12_text: "Sort by PRE- vs DIS-.",
    t12_inst: "Sort by Prefix Type:",
    t12_h1: "Before or Opposite?",
    t12_h2: "Check the first three letters.",
    t12_q: "Which means before?",
    t12_qa: "preheat", t12_qb: "disagree", t12_qc: "dislike", t12_qd: "dishonest",
    t12_bl1: "PRE- (Before)", t12_bl2: "DIS- (Not)",
    t12_i1: "Preview", t12_i2: "Disagree",
    t12_i3: "Pretest", t12_i4: "Dislike",

    t13_title: "Prefix Gap-Fill 2",
    t13_text: "Fill in the missing prefix word.",
    t13_inst: "Choose for the blank:",
    t13_h1: "It was a wrong spelling.",
    t13_h2: "Use 'mis-'.",
    t13_q: "It was a ___.",
    t13_qa: "misspelling", t13_qb: "unspelling", t13_qc: "respelling", t13_qd: "prespelling",
    t13_sent: "I made a ___ on my paper.",
    t13_qa2: "misprint", t13_qb2: "reprint", t13_qc2: "unprint", t13_qd2: "preprint",

    t14_title: "Final Prefix Match",
    t14_text: "Final practice with all prefixes.",
    t14_inst: "Match the pairs:",
    t14_h1: "Prefix word on left, Meaning on right.",
    t14_h2: "Check the 're-' and 'un-' rules.",
    t14_q: "Which is correct?",
    t14_qa: "Rewrite -> Write again", t14_qb: "Unkind -> Very kind", t14_qc: "Dislike -> Like again", t14_qd: "Preheat -> Heat after",
    t14_l1: "Unwrap", t14_r1: "Take off paper",
    t14_l2: "Reread", t14_r2: "Read once more",
    t14_l3: "Dishonest", t14_r3: "Not telling truth",

    t15_title: "Prefix Review",
    t15_text: "Final review of Grade 3 prefixes.",
    t15_inst: "Pick the best prefix word:",
    t15_h1: "The cat was not happy.",
    t15_h2: "Use 'un-'.",
    t15_q: "The cat was ___.",
    t15_qa3: "unhappy", t15_qb3: "rehappy", t15_qc3: "dishappy", t15_qd3: "prehappy",
    t15_sent: "I need to ___ the bottle with water.",
    t15_qa2: "refill", t15_qb2: "unfill", t15_qc2: "disfill", t15_qd2: "prefill",
  },
};

export const PREFIX3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "un-", color: "#6366F1" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "re-", color: "#6366F1" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "pre-", color: "#6366F1" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "dis-", color: "#6366F1" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8", "t4_tk9"], correctIndices: [2] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#6366F1" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#6366F1" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "mis-", color: "#6366F1" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t7_q", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], answer: "t7_qa2" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#6366F1" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "choice", color: "#6366F1" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "untie", color: "#6366F1" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8"], correctIndices: [4] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "vanish", color: "#6366F1" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#6366F1" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "wrongly", color: "#6366F1" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#6366F1" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#6366F1" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa3", "t15_qb3", "t15_qc3", "t15_qd3"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i7 — WORDFAM
// ═══════════════════════════════════════════════════════════════════════════

export const WORDFAM_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Word Families",
    t1_title: "Verb to Noun",
    t1_text: "Change an action into a thing. Example: 'act' -> 'action'.",
    t1_inst: "Order for a word family sentence:",
    t1_h1: "Start with 'The final'.",
    t1_h2: "Use 'decision' at the end.",
    t1_q: "Noun form of 'play'?",
    t1_qa: "player", t1_qb: "play", t1_qc: "playing", t1_qd: "plays",
    t1_w1: "The", t1_w2: "final", t1_w3: "decision", t1_w4: "was", t1_w5: "very", t1_w6: "hard", t1_w7: "to", t1_w8: "make.",

    t2_title: "Noun to Adjective",
    t2_text: "Change a thing into a describing word. Example: 'care' -> 'careful'.",
    t2_inst: "Match noun to adjective:",
    t2_h1: "Think about how it describes.",
    t2_h2: "Beauty -> Beautiful.",
    t2_q: "Adjective form of 'peace'?",
    t2_qa: "peaceful", t2_qb: "peaces", t2_qc: "peacely", t2_qd: "peacing",
    t2_l1: "Beauty", t2_r1: "Beautiful",
    t2_l2: "Power", t2_r2: "Powerful",
    t2_l3: "Help", t2_r3: "Helpful",

    t3_title: "Adjective to Adverb",
    t3_text: "Add -ly to describe how an action is done. Example: 'sad' -> 'sadly'.",
    t3_inst: "Choose for the blank:",
    t3_h1: "He was very quiet.",
    t3_h2: "He spoke 'quietly'.",
    t3_q: "Adverb form of 'proud'?",
    t3_qa: "proudly", t3_qb: "proud", t3_qc: "proudies", t3_qd: "prouding",
    t3_sent: "He smiled ___ when he won the prize.",
    t3_qa2: "proudly", t3_qb2: "proud", t3_qc2: "proudlyer", t3_qd2: "proudies",

    t4_title: "Verb to Adjective",
    t4_text: "Change an action into a description. Example: 'create' -> 'creative'.",
    t4_inst: "Highlight the adjective:",
    t4_h1: "Look for 'creative'.",
    t4_h2: "It describes the girl.",
    t4_q: "Adjective of 'create'?",
    t4_qa: "creative", t4_qb: "creation", t4_qc: "creator", t4_qd: "creatively",
    t4_tk1: "The", t4_tk2: "creative", t4_tk3: "girl", t4_tk4: "drew", t4_tk5: "a", t4_tk6: "beautiful", t4_tk7: "picture", t4_tk8: "today.",

    t5_title: "Word Family Build",
    t5_text: "Build a sentence with 'happily'.",
    t5_inst: "Build a 'happy' family sentence:",
    t5_h1: "Start with 'They played'.",
    t5_h2: "Use 'happily together'.",
    t5_q: "Root of 'happiness'?",
    t5_qa: "happy", t5_qb: "happen", t5_qc: "hap", t5_qd: "ness",
    t5_f1: "They played", t5_f2: "happily", t5_f3: "together", t5_f4: "all afternoon.",

    t6_title: "Family Sorter",
    t6_text: "Group by Noun vs Adjective.",
    t6_inst: "Sort by Word Family Type:",
    t6_h1: "Is it a thing or a description?",
    t6_h2: "Nouns end in -ness/-ion, Adjectives in -ful/-ive.",
    t6_q: "Which is a noun?",
    t6_qa: "happiness", t6_qb: "happy", t6_qc: "happily", t6_qd: "happen",
    t6_bl1: "Noun (Thing)", t6_bl2: "Adjective",
    t6_i1: "Action", t6_i2: "Active",
    t6_i3: "Kindness", t6_i4: "Kind",

    t7_title: "Suffix: -NESS",
    t7_text: "-NESS changes an adjective to a noun. Example: 'dark' -> 'darkness'.",
    t7_inst: "Order for a -ness noun:",
    t7_h1: "Start with 'The'.",
    t7_h2: "Use 'darkness' at the end.",
    t7_q: "Noun of 'kind'?",
    t7_qa: "kindness", t7_qb: "kindly", t7_qc: "kindes", t7_qd: "kinden",
    t7_w1: "The", t7_w2: "forest", t7_w3: "was", t7_w4: "filled", t7_w5: "with", t7_w6: "total", t7_w7: "darkness.",

    t8_title: "Verb Match 2",
    t8_text: "Match the verb to its related noun.",
    t8_inst: "Match Verb to Noun:",
    t8_h1: "Think about the action and the person/thing.",
    t8_h2: "Write -> Writer, Act -> Actor.",
    t8_q: "Noun of 'teach'?",
    t8_qa: "teacher", t8_qb: "teaches", t8_qc: "teaching", t8_qd: "teached",
    t8_l1: "Teach", t8_r1: "Teacher",
    t8_l2: "Sing", t8_r2: "Singer",
    t8_l3: "Dance", t8_r3: "Dancer",

    t9_title: "Choice 3",
    t9_text: "Choosing the correct form for the context.",
    t9_inst: "Choose for the blank:",
    t9_h1: "He is a person who creates.",
    t9_h2: "Use 'creator'.",
    t9_q: "He is the ___.",
    t9_qa: "creator", t9_qb: "create", t9_qc: "creative", t9_qd: "creates",
    t9_sent: "She is a very ___ person.",
    t9_qa2: "active", t9_qb2: "action", t9_qc2: "act", t9_qd2: "actor",

    t10_title: "Highlight 3",
    t10_text: "Finding word family members.",
    t10_inst: "Highlight the noun:",
    t10_h1: "Look for 'kindness'.",
    t10_h2: "It describes his quality.",
    t10_q: "Which is a noun?",
    t10_qa: "kindness", t10_qb: "kind", t10_qc: "kindly", t10_qd: "kinds",
    t10_tk1: "His", t10_tk2: "great", t10_tk3: "kindness", t10_tk4: "surprised", t10_tk5: "everyone", t10_tk6: "at", t10_tk7: " the", t10_tk8: "party.",

    t11_title: "Build 3",
    t11_text: "Build a sentence with 'careful'.",
    t11_inst: "Build a 'care' family sentence:",
    t11_h1: "Start with 'Please be'.",
    t11_h2: "Use 'careful with'.",
    t11_q: "Adverb of 'care'?",
    t11_qa: "carefully", t11_qb: "careful", t11_qc: "carefuly", t11_qd: "cares",
    t11_f1: "Please be", t11_f2: "very careful", t11_f3: "with the", t11_f4: "glass vase.",

    t12_title: "Sorter 4",
    t12_text: "Sort by Verb vs Noun.",
    t12_inst: "Sort by Category:",
    t12_h1: "Action vs Thing?",
    t12_h2: "Verbs show doing, nouns show being.",
    t12_q: "Which is a verb?",
    t12_qa: "dance", t12_qb: "dancer", t12_qc: "dancing", t12_qd: "danceable",
    t12_bl1: "Verb", t12_bl2: "Noun",
    t12_i1: "Paint", t12_i2: "Painter",
    t12_i3: "Write", t12_i4: "Writer",

    t13_title: "Gap-Fill 3",
    t13_text: "Fill in the correct family member.",
    t13_inst: "Choose for the blank:",
    t13_h1: "How did he run?",
    t13_h2: "Use the adverb form.",
    t13_q: "He ran ___.",
    t13_qa: "quickly", t13_qb: "quick", t13_qc: "quickness", t13_qd: "quicker",
    t13_sent: "She showed a lot of ___ today.",
    t13_qa2: "bravery", t13_qb2: "brave", t13_qc2: "bravely", t13_qd2: "braves",

    t14_title: "Final Match 3",
    t14_text: "Final word family review.",
    t14_inst: "Match the pairs:",
    t14_h1: "Verb on left, Related word on right.",
    t14_h2: "Check the suffixes.",
    t14_q: "Which is correct?",
    t14_qa: "Sing -> Singer", t14_qb: "Act -> Active", t14_qc: "Care -> Carefully", t14_qd: "All are correct",
    t14_l1: "Agree", t14_r1: "Agreement",
    t14_l2: "Excited", t14_r2: "Excitement",
    t14_l3: "Sad", t14_r3: "Sadness",

    t15_title: "Word Review",
    t15_text: "Final review of Grade 3 word families.",
    t15_inst: "Pick the best word:",
    t15_h1: "She has a lot of talent.",
    t15_h2: "She is a ___ artist.",
    t15_q: "She is a ___ artist.",
    t15_qa4: "talented", t15_qb4: "talent", t15_qc4: "talents", t15_qd4: "talently",
    t15_sent: "The children played ___ outside.",
    t15_qa2: "happily", t15_qb2: "happy", t15_qc2: "happiness", t15_qd2: "happier",
  },
};

export const WORDFAM_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "family", color: "#EC4899" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "adj", color: "#EC4899" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "adv", color: "#EC4899" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "creative", color: "#EC4899" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8"], correctIndices: [1] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#EC4899" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#EC4899" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "-ness", color: "#EC4899" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t7_q", choices: ["t7_qa", "t7_qb", "t7_qc", "t7_qd"], answer: "t7_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "person", color: "#EC4899" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "choice", color: "#EC4899" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "noun", color: "#EC4899" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8"], correctIndices: [2] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "care", color: "#EC4899" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#EC4899" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "how?", color: "#EC4899" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#EC4899" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#EC4899" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i8 — VOCAB3
// ═══════════════════════════════════════════════════════════════════════════

export const VOCAB3_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Vocab Voyage",
    t1_title: "Nature Words",
    t1_text: "Forest, ocean, mountain, desert.",
    t1_inst: "Order for a nature sentence:",
    t1_h1: "Start with 'The high'.",
    t1_h2: "Use 'mountains' as the subject.",
    t1_q: "Where is there lots of sand?",
    t1_qa: "desert", t1_qb: "ocean", t1_qc: "forest", t1_qd: "city",
    t1_w1: "The", t1_w2: "high", t1_w3: "mountains", t1_w4: "were", t1_w5: "covered", t1_w6: "in", t1_w7: "white", t1_w8: "snow.",

    t2_title: "Animal Habitats",
    t2_text: "Match the animal to where it lives.",
    t2_inst: "Match Animal to Home:",
    t2_h1: "Fish live in water.",
    t2_h2: "Birds live in nests.",
    t2_q: "Where does a whale live?",
    t2_qa: "ocean", t2_qb: "forest", t2_qc: "desert", t2_qd: "farm",
    t2_l1: "Lion", t2_r1: "Savannah",
    t2_l2: "Fish", t2_r2: "Ocean",
    t2_l3: "Bird", t2_r3: "Nest",

    t3_title: "Weather Words",
    t3_text: "Sunny, rainy, foggy, stormy.",
    t3_inst: "Choose for a rainy day:",
    t3_h1: "You need an umbrella.",
    t3_h2: "It is wet outside.",
    t3_q: "Which is weather?",
    t3_qa: "stormy", t3_qb: "table", t3_qc: "run", t3_qd: "happy",
    t3_sent: "It is very ___ today, so stay inside.",
    t3_qa2: "stormy", t3_qb2: "sunny", t3_qc2: "hot", t3_qd2: "dry",

    t4_title: "School Supplies",
    t4_text: "Eraser, stapler, notebook, folder.",
    t4_inst: "Highlight the supply:",
    t4_h1: "Look for 'eraser'.",
    t4_h2: "You use it to fix mistakes.",
    t4_q: "Which do you write in?",
    t4_qa: "notebook", t4_qb: "eraser", t4_qc: "stapler", t4_qd: "ruler",
    t4_tk1: "Please", t4_tk2: "use", t4_tk3: "your", t4_tk4: "new", t4_tk5: "eraser", t4_tk6: "to", t4_tk7: "fix", t4_tk8: "that.",

    t5_title: "Food Build",
    t5_text: "Build a sentence about a healthy meal.",
    t5_inst: "Build a 'fruit' sentence:",
    t5_h1: "Start with 'I ate'.",
    t5_h2: "Use 'for breakfast'.",
    t5_q: "Which is a fruit?",
    t5_qa: "Apple", t5_qb: "Bread", t5_qc: "Milk", t5_qd: "Egg",
    t5_f1: "I ate", t5_f2: "a fresh apple", t5_f3: "for my", t5_f4: "breakfast.",

    t6_title: "Vocab Sorter",
    t6_text: "Group by Fruit vs Vegetable.",
    t6_inst: "Sort by Food Type:",
    t6_h1: "Sweet vs Savory?",
    t6_h2: "Apples are fruit, carrots are vegetables.",
    t6_q: "Which is a vegetable?",
    t6_qa: "Carrot", t6_qb: "Grape", t6_qc: "Mango", t6_qd: "Pear",
    t6_bl1: "Fruit", t6_bl2: "Vegetable",
    t6_i1: "Banana", t6_i2: "Broccoli",
    t6_i3: "Orange", t6_i4: "Spinach",

    t7_title: "City Words",
    t7_text: "Traffic, building, sidewalk, subway.",
    t7_inst: "Order for a city sentence:",
    t7_h1: "Start with 'There'.",
    t7_h2: "Use 'heavy traffic' at the end.",
    t7_q: "What is a 'subway'?",
    t7_qa4: "underground train", t7_qb4: "a plane", t7_qc4: "a boat", t7_qd4: "a car",
    t7_w1: "There", t7_w2: "was", t7_w3: "a", t7_w4: "lot", t7_w5: "of", t7_w6: "heavy", t7_w7: "traffic", t7_w8: "today.",

    t8_title: "Body Match",
    t8_text: "Match the body part to the sense.",
    t8_inst: "Match Part to Sense:",
    t8_h1: "Eyes are for seeing.",
    t8_h2: "Ears are for hearing.",
    t8_q: "What do ears do?",
    t8_qa: "hear", t8_qb: "see", t8_qc: "taste", t8_qd: "smell",
    t8_l1: "Eyes", t8_r1: "See",
    t8_l2: "Ears", t8_r2: "Hear",
    t8_l3: "Nose", t8_r3: "Smell",

    t9_title: "Clothing Choice",
    t9_text: "Choosing the right clothes for weather.",
    t9_inst: "Choose for the blank:",
    t9_h1: "It is cold outside.",
    t9_h2: "You need something warm.",
    t9_q: "Wear a ___.",
    t9_qa: "jacket", t9_qb: "shorts", t9_qc: "t-shirt", t9_qd: "swimsuit",
    t9_sent: "Put on your ___ before you go out in snow.",
    t9_qa2: "jacket", t9_qb2: "hat", t9_qc2: "socks", t9_qd2: "boots",

    t10_title: "Action Highlight",
    t10_text: "Finding movement words.",
    t10_inst: "Highlight the action word:",
    t10_h1: "Look for 'galloped'.",
    t10_h2: "It's what the horse did.",
    t10_q: "Which is a fast movement?",
    t10_qa: "galloped", t10_qb: "crawled", t10_qc: "sat", t10_qd: "slept",
    t10_tk1: "The", t10_tk2: "fast", t10_tk3: "horse", t10_tk4: "galloped", t10_tk5: "across", t10_tk6: "the", t10_tk7: "wide", t10_tk8: "field.",

    t11_title: "Job Build",
    t11_text: "Build a sentence about a job.",
    t11_inst: "Build a 'dentist' sentence:",
    t11_h1: "Start with 'The dentist'.",
    t11_h2: "Use 'checks my teeth'.",
    t11_q: "Who helps sick people?",
    t11_qa: "Doctor", t11_qb: "Baker", t11_qc: "Pilot", t11_qd: "Clown",
    t11_f1: "The dentist", t11_f2: "checks", t11_f3: "my teeth", t11_f4: "every year.",

    t12_title: "Home Sorter",
    t12_text: "Sort by Kitchen vs Bedroom items.",
    t12_inst: "Sort by Room:",
    t12_h1: "Where do you find it?",
    t12_h2: "Stove is in the kitchen, Bed is in the bedroom.",
    t12_q: "Which is in the kitchen?",
    t12_qa: "Fridge", t12_qb: "Pillow", t12_qc: "Blanket", t12_qd: "Wardrobe",
    t12_bl1: "Kitchen", t12_bl2: "Bedroom",
    t12_i1: "Stove", t12_i2: "Bed",
    t12_i3: "Fridge", t12_i4: "Pillow",

    t13_title: "Transport Gap-Fill",
    t13_text: "Fill in the vehicle name.",
    t13_inst: "Choose for the blank:",
    t13_h1: "It flies in the sky.",
    t13_h2: "Use 'helicopter'.",
    t13_q: "Which flies?",
    t13_qa: "Helicopter", t13_qb: "Car", t13_qc: "Boat", t13_qd: "Train",
    t13_sent: "The ___ flew over the city.",
    t13_qa2: "helicopter", t13_qb2: "bus", t13_qc2: "bicycle", t13_qd2: "van",

    t14_title: "Final Vocab Match",
    t14_text: "Final vocab review.",
    t14_inst: "Match the pairs:",
    t14_h1: "Object on left, Use on right.",
    t14_h2: "Pencil -> Write, Knife -> Cut.",
    t14_q: "Which is correct?",
    t14_qa: "Pencil -> Write", t14_qb: "Cup -> Eat", t14_qc: "Shoe -> Hand", t14_qd: "Car -> Fly",
    t14_l1: "Key", t14_r1: "Unlock door",
    t14_l2: "Spoon", t14_r2: "Eat soup",
    t14_l3: "Watch", t14_r3: "Tell time",

    t15_title: "Vocab Review",
    t15_text: "Final review of Grade 3 vocabulary.",
    t15_inst: "Pick the best word:",
    t15_h1: "Think about the garden.",
    t15_h2: "Bees collect ___.",
    t15_q: "What do bees collect?",
    t15_qa5: "nectar", t15_qb5: "water", t15_qc5: "rocks", t15_qd5: "dirt",
    t15_sent: "The busy bees were collecting ___.",
    t15_qa2: "nectar", t15_qb2: "honey", t15_qc2: "leaves", t15_qd2: "milk",
  },
};

export const VOCAB3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "nature", color: "#6B7280" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t1_q", choices: ["t1_qa", "t1_qb", "t1_qc", "t1_qd"], answer: "t1_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "home", color: "#6B7280" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "weather", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "eraser", color: "#6B7280" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8"], correctIndices: [4] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "build", color: "#6B7280" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "sort", color: "#6B7280" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "city", color: "#6B7280" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7", "t7_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t7_q", choices: ["t7_qa4", "t7_qb4", "t7_qc4", "t7_qd4"], answer: "t7_qa4" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "match", color: "#6B7280" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "jacket", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "horse", color: "#6B7280" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8"], correctIndices: [3] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "dentist", color: "#6B7280" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#6B7280" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "fly", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#6B7280" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa5", "t15_qb5", "t15_qc5", "t15_qd5"], answer: "t15_qa5" },
    difficulty: "hard"
  },
];

// ═══════════════════════════════════════════════════════════════════════════
// i9 — BIGTEST3
// ═══════════════════════════════════════════════════════════════════════════

export const BIGTEST3_LABELS: Record<string, Record<string, string>> = {
  en: {
    explorer_title: "Big Test 3",
    t1_title: "Plural Mix",
    t1_text: "Final test of plural rules.",
    t1_inst: "Order for a plural sentence:",
    t1_h1: "Start with 'There are'.",
    t1_h2: "Check the plural form of 'sheep'.",
    t1_q: "Plural of 'child'?",
    t1_qa6: "children", t1_qb6: "childs", t1_qc6: "childrens", t1_qd6: "childes",
    t1_w1: "There", t1_w2: "are", t1_w3: "five", t1_w4: "white", t1_w5: "sheep", t1_w6: "in", t1_w7: "the", t1_w8: "field.",

    t2_title: "Tense Mix",
    t2_text: "Final test of all tenses.",
    t2_inst: "Match present to past:",
    t2_h1: "Find the matching past form.",
    t2_h2: "Eat -> Ate.",
    t2_q: "Past of 'run'?",
    t2_qa: "ran", t2_qb: "runned", t2_qc: "running", t2_qd: "runs",
    t2_l1: "Eat", t2_r1: "Ate",
    t2_l2: "Drink", t2_r2: "Drank",
    t2_l3: "See", t2_r3: "Saw",

    t3_title: "Adverb Mix",
    t3_text: "Final test of adverbs.",
    t3_inst: "Choose for the blank:",
    t3_h1: "How often does it happen?",
    t3_h2: "Use a frequency adverb.",
    t3_q: "Which is a manner adverb?",
    t3_qa: "quickly", t3_qb: "always", t3_qc: "soon", t3_qd: "today",
    t3_sent: "I ___ go to the park on Saturdays.",
    t3_qa2: "often", t3_qb2: "quick", t3_qc2: "slowly", t3_qd2: "well",

    t4_title: "Prefix Mix",
    t4_text: "Final test of prefixes.",
    t4_inst: "Highlight the prefix word:",
    t4_h1: "Look for 'rewrite'.",
    t4_h2: "It means write again.",
    t4_q: "Meaning of 'untie'?",
    t4_qa: "loosen", t4_qb: "tighten", t4_qc: "cut", t4_qd: "buy",
    t4_tk1: "Please", t4_tk2: "rewrite", t4_tk3: "your", t4_tk4: "sentences", t4_tk5: "neatly", t4_tk6: "on", t4_tk7: "the", t4_tk8: "line.",

    t5_title: "Subject Mix",
    t5_text: "Final test of subjects.",
    t5_inst: "Build a subject sentence:",
    t5_h1: "Start with 'My family'.",
    t5_h2: "Use 'is happy'.",
    t5_q: "Subject of 'Birds fly'?",
    t5_qa: "Birds", t5_qb: "fly", t5_qc: "the birds", t5_qd: "flying",
    t5_f1: "My family", t5_f2: "is very", t5_f3: "happy", t5_f4: "to see you.",

    t6_title: "General Sorter",
    t6_text: "Group by Part of Speech.",
    t6_inst: "Sort by Category:",
    t6_h1: "Noun, Verb, or Adverb?",
    t6_h2: "Check the word's job.",
    t6_q: "Which is a verb?",
    t6_qa: "run", t6_qb: "apple", t6_qc: "loudly", t6_qd: "happy",
    t6_bl1: "Noun", t6_bl2: "Adverb",
    t6_i1: "Cat", t6_i2: "Quickly",
    t6_i3: "Desk", t6_i4: "Sadly",

    t7_title: "Plural Choice 2",
    t7_text: "Mixed plural choice.",
    t7_inst: "Order for irregular plural:",
    t7_h1: "Start with 'Three'.",
    t7_h2: "Use 'mice' for plural.",
    t7_q: "Correct plural?",
    t7_qa2: "mice", t7_qb2: "mouses", t7_qc2: "mices", t7_qd2: "mouse",
    t7_w1: "Three", t7_w2: "mice", t7_w3: "ran", t7_w4: "under", t7_w5: "the", t7_w6: "wooden", t7_w7: "table.",

    t8_title: "Tense Match 2",
    t8_text: "Mixed tense matching.",
    t8_inst: "Match Timeline to Action:",
    t8_h1: "Check the helper verb.",
    t8_h2: "Now vs. Future.",
    t8_q: "Which is future?",
    t8_qa: "I will go", t8_qb: "I went", t8_qc: "I go", t8_qd: "I am going",
    t8_l1: "Happening now", t8_r1: "is playing",
    t8_l2: "Already done", t8_r2: "played",
    t8_l3: "Plan for later", t8_r3: "will play",

    t9_title: "Vocab Choice 2",
    t9_text: "Mixed vocabulary choice.",
    t9_inst: "Choose for the blank:",
    t9_h1: "It is a vehicle for sky.",
    t9_h2: "Use 'airplane'.",
    t9_q: "Which is transport?",
    t9_qa: "airplane", t9_qb: "apple", t9_qc: "river", t9_qd: "doctor",
    t9_sent: "The large ___ landed at the airport.",
    t9_qa2: "airplane", t9_qb2: "bicycle", t9_qc2: "train", t9_qd2: "boat",

    t10_title: "Quote Highlight",
    t10_text: "Mixed quote highlight.",
    t10_inst: "Highlight the spoken part:",
    t10_h1: "Look for everything inside \" \".",
    t10_h2: "It is the direct speech.",
    t10_q: "What is spoken?",
    t10_qa: "Hello everyone", t10_qb: "she said", t10_qc: "everyone", t10_qd: "Hello",
    t10_tk1: "She", t10_tk2: "said,", t10_tk3: "\"Hello", t10_tk4: "everyone,", t10_tk5: "how", t10_tk6: "are", t10_tk7: "you", t10_tk8: "all?\"",

    t11_title: "Sentence Build Mix",
    t11_text: "Build a mixed grammar sentence.",
    t11_inst: "Build a 'will be' sentence:",
    t11_h1: "Start with 'It will'.",
    t11_h2: "Use 'be sunny'.",
    t11_q: "Correct future form?",
    t11_qa: "will be", t11_qb: "is be", t11_qc: "was be", t11_qd: "be",
    t11_f1: "It will", t11_f2: "be very", t11_f3: "sunny and hot", t11_f4: "tomorrow.",

    t12_title: "Final Sorter Mix",
    t12_text: "Mixed category sort.",
    t12_inst: "Sort by Grammar Part:",
    t12_h1: "Verb vs Adverb?",
    t12_h2: "Check the -ly ending.",
    t12_q: "Which is manner adverb?",
    t12_qa: "quietly", t12_qb: "quiet", t12_qc: "quies", t12_qd: "quieter",
    t12_bl1: "Action (Verb)", t12_bl2: "How (Adverb)",
    t12_i1: "Jump", t12_i2: "Quickly",
    t12_i3: "Cook", t12_i4: "Slowly",

    t13_title: "Review Gap-Fill",
    t13_text: "Mixed review gap-fill.",
    t13_inst: "Choose the best word:",
    t13_h1: "Check the plural rule.",
    t13_h2: "Many ___.",
    t13_q: "Many ___ are here.",
    t13_qa: "children", t13_qb: "childs", t13_qc: "childrens", t13_qd: "child",
    t13_sent: "There are many ___ at the park today.",
    t13_qa2: "children", t13_qb2: "people", t13_qc2: "childs", t13_qd2: "persons",

    t14_title: "Advanced Match Mix",
    t14_text: "Mixed review matching.",
    t14_inst: "Match the pairs:",
    t14_h1: "Singular on left, Plural on right.",
    t14_h2: "Irregular plurals review.",
    t14_q: "Correct plural?",
    t14_qa: "Goose -> Geese", t14_qb: "Goose -> Gooses", t14_qc: "Goose -> Geeses", t14_qd: "Goose -> Goosen",
    t14_l1: "Mouse", t14_r1: "Mice",
    t14_l2: "Tooth", t14_r2: "Teeth",
    t14_l3: "Foot", t14_r3: "Feet",

    t15_title: "Grade 3 Review",
    t15_text: "Complete review of Grade 3 English.",
    t15_inst: "Pick the best final answer:",
    t15_h1: "Think about everything we learned.",
    t15_h2: "Last question!",
    t15_q: "Which is plural?",
    t15_qa: "geese", t15_qb: "goose", t15_qc: "gooses", t15_qd: "geeses",
    t15_sent: "The ___ were swimming in the lake.",
    t15_qa2: "geese", t15_qb2: "goose", t15_qc2: "gooses", t15_qd2: "geeses",
  },
};

export const BIGTEST3_POOL: PoolTopicDef[] = [
  {
    infoTitle: "t1_title", infoText: "t1_text",
    svg: { type: "word-display", word: "plural", color: "#6B7280" },
    interactive: { type: "word-order", instruction: "t1_inst", hint1: "t1_h1", hint2: "t1_h2", words: ["t1_w1", "t1_w2", "t1_w3", "t1_w4", "t1_w5", "t1_w6", "t1_w7", "t1_w8"], correctOrder: [0,1,2,3,4,5,6,7] },
    quiz: { question: "t1_q", choices: ["t1_qa6", "t1_qb6", "t1_qc6", "t1_qd6"], answer: "t1_qa6" },
    difficulty: "easy"
  },
  {
    infoTitle: "t2_title", infoText: "t2_text",
    svg: { type: "word-display", word: "tense", color: "#6B7280" },
    interactive: { type: "match-pairs", instruction: "t2_inst", hint1: "t2_h1", hint2: "t2_h2", pairs: [{ left: "t2_l1", right: "t2_r1" }, { left: "t2_l2", right: "t2_r2" }, { left: "t2_l3", right: "t2_r3" }] },
    quiz: { question: "t2_q", choices: ["t2_qa", "t2_qb", "t2_qc", "t2_qd"], answer: "t2_qa" },
    difficulty: "easy"
  },
  {
    infoTitle: "t3_title", infoText: "t3_text",
    svg: { type: "word-display", word: "adverb", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t3_inst", hint1: "t3_h1", hint2: "t3_h2", sentence: "t3_sent", choices: ["t3_qa2", "t3_qb2", "t3_qc2", "t3_qd2"], correctIndex: 0 },
    quiz: { question: "t3_q", choices: ["t3_qa", "t3_qb", "t3_qc", "t3_qd"], answer: "t3_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t4_title", infoText: "t4_text",
    svg: { type: "word-display", word: "prefix", color: "#6B7280" },
    interactive: { type: "highlight-text", instruction: "t4_inst", hint1: "t4_h1", hint2: "t4_h2", tokens: ["t4_tk1", "t4_tk2", "t4_tk3", "t4_tk4", "t4_tk5", "t4_tk6", "t4_tk7", "t4_tk8"], correctIndices: [1] },
    quiz: { question: "t4_q", choices: ["t4_qa", "t4_qb", "t4_qc", "t4_qd"], answer: "t4_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t5_title", infoText: "t5_text",
    svg: { type: "word-display", word: "subject", color: "#6B7280" },
    interactive: { type: "sentence-build", instruction: "t5_inst", hint1: "t5_h1", hint2: "t5_h2", fragments: ["t5_f1", "t5_f2", "t5_f3", "t5_f4"] },
    quiz: { question: "t5_q", choices: ["t5_qa", "t5_qb", "t5_qc", "t5_qd"], answer: "t5_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t6_title", infoText: "t6_text",
    svg: { type: "word-display", word: "type", color: "#6B7280" },
    interactive: { type: "drag-to-bucket", instruction: "t6_inst", hint1: "t6_h1", hint2: "t6_h2", buckets: [{ id: "b1", label: "t6_bl1" }, { id: "b2", label: "t6_bl2" }], items: [{ text: "t6_i1", bucketId: "b1" }, { text: "t6_i2", bucketId: "b2" }, { text: "t6_i3", bucketId: "b1" }, { text: "t6_i4", bucketId: "b2" }] },
    quiz: { question: "t6_q", choices: ["t6_qa", "t6_qb", "t6_qc", "t6_qd"], answer: "t6_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t7_title", infoText: "t7_text",
    svg: { type: "word-display", word: "mice", color: "#6B7280" },
    interactive: { type: "word-order", instruction: "t7_inst", hint1: "t7_h1", hint2: "t7_h2", words: ["t7_w1", "t7_w2", "t7_w3", "t7_w4", "t7_w5", "t7_w6", "t7_w7"], correctOrder: [0,1,2,3,4,5,6] },
    quiz: { question: "t7_q", choices: ["t7_qa2", "t7_qb2", "t7_qc2", "t7_qd2"], answer: "t7_qa2" },
    difficulty: "easy"
  },
  {
    infoTitle: "t8_title", infoText: "t8_text",
    svg: { type: "word-display", word: "will play", color: "#6B7280" },
    interactive: { type: "match-pairs", instruction: "t8_inst", hint1: "t8_h1", hint2: "t8_h2", pairs: [{ left: "t8_l1", right: "t8_r1" }, { left: "t8_l2", right: "t8_r2" }, { left: "t8_l3", right: "t8_r3" }] },
    quiz: { question: "t8_q", choices: ["t8_qa", "t8_qb", "t8_qc", "t8_qd"], answer: "t8_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t9_title", infoText: "t9_text",
    svg: { type: "word-display", word: "airplane", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t9_inst", hint1: "t9_h1", hint2: "t9_h2", sentence: "t9_sent", choices: ["t9_qa2", "t9_qb2", "t9_qc2", "t9_qd2"], correctIndex: 0 },
    quiz: { question: "t9_q", choices: ["t9_qa", "t9_qb", "t9_qc", "t9_qd"], answer: "t9_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t10_title", infoText: "t10_text",
    svg: { type: "word-display", word: "hello", color: "#6B7280" },
    interactive: { type: "highlight-text", instruction: "t10_inst", hint1: "t10_h1", hint2: "t10_h2", tokens: ["t10_tk1", "t10_tk2", "t10_tk3", "t10_tk4", "t10_tk5", "t10_tk6", "t10_tk7", "t10_tk8"], correctIndices: [2, 3, 4, 5, 6, 7] },
    quiz: { question: "t10_q", choices: ["t10_qa", "t10_qb", "t10_qc", "t10_qd"], answer: "t10_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t11_title", infoText: "t11_text",
    svg: { type: "word-display", word: "sunny", color: "#6B7280" },
    interactive: { type: "sentence-build", instruction: "t11_inst", hint1: "t11_h1", hint2: "t11_h2", fragments: ["t11_f1", "t11_f2", "t11_f3", "t11_f4"] },
    quiz: { question: "t11_q", choices: ["t11_qa", "t11_qb", "t11_qc", "t11_qd"], answer: "t11_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t12_title", infoText: "t12_text",
    svg: { type: "word-display", word: "type", color: "#6B7280" },
    interactive: { type: "drag-to-bucket", instruction: "t12_inst", hint1: "t12_h1", hint2: "t12_h2", buckets: [{ id: "b1", label: "t12_bl1" }, { id: "b2", label: "t12_bl2" }], items: [{ text: "t12_i1", bucketId: "b1" }, { text: "t12_i2", bucketId: "b2" }, { text: "t12_i3", bucketId: "b1" }, { text: "t12_i4", bucketId: "b2" }] },
    quiz: { question: "t12_q", choices: ["t12_qa", "t12_qb", "t12_qc", "t12_qd"], answer: "t12_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t13_title", infoText: "t13_text",
    svg: { type: "word-display", word: "children", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t13_inst", hint1: "t13_h1", hint2: "t13_h2", sentence: "t13_sent", choices: ["t13_qa2", "t13_qb2", "t13_qc2", "t13_qd2"], correctIndex: 0 },
    quiz: { question: "t13_q", choices: ["t13_qa", "t13_qb", "t13_qc", "t13_qd"], answer: "t13_qa" },
    difficulty: "hard"
  },
  {
    infoTitle: "t14_title", infoText: "t14_text",
    svg: { type: "word-display", word: "match", color: "#6B7280" },
    interactive: { type: "match-pairs", instruction: "t14_inst", hint1: "t14_h1", hint2: "t14_h2", pairs: [{ left: "t14_l1", right: "t14_r1" }, { left: "t14_l2", right: "t14_r2" }, { left: "t14_l3", right: "t14_r3" }] },
    quiz: { question: "t14_q", choices: ["t14_qa", "t14_qb", "t14_qc", "t14_qd"], answer: "t14_qa" },
    difficulty: "medium"
  },
  {
    infoTitle: "t15_title", infoText: "t15_text",
    svg: { type: "word-display", word: "review", color: "#6B7280" },
    interactive: { type: "gap-fill", instruction: "t15_inst", hint1: "t15_h1", hint2: "t15_h2", sentence: "t15_sent", choices: ["t15_qa2", "t15_qb2", "t15_qc2", "t15_qd2"], correctIndex: 0 },
    quiz: { question: "t15_q", choices: ["t15_qa", "t15_qb", "t15_qc", "t15_qd"], answer: "t15_qa" },
    difficulty: "hard"
  },
];
