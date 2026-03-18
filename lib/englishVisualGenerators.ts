"use client";

// ─── ENGLISH VISUAL GENERATORS ───────────────────────────────────────────────
// Generates visual/interactive question data for English tests (G1–G8).
// Reuses deutsch-visual components: SatzOrdnen, FehlerFinden, WortfamilienBaum
//
// These generators produce TestQuestion-like objects that the LanguageTestEngine
// renders using the pluggable visualTypes config.

import SatzOrdnen from "@/components/deutsch-visual/SatzOrdnen";
import FehlerFinden from "@/components/deutsch-visual/FehlerFinden";
import WortfamilienBaum from "@/components/deutsch-visual/WortfamilienBaum";
import type { VisualQuestionType } from "@/lib/languageTestTypes";

// ─── HELPER ──────────────────────────────────────────────────────────────────

function shuffleArr<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickN<T>(arr: T[], n: number): T[] {
  return shuffleArr(arr).slice(0, n);
}

// ─── SENTENCE BUILDER DATA (put English words in the correct order) ──────────

interface SentenceItem {
  answer: string;
  shuffled: string[];
  question: string;
}

// G1–G3: simple sentences
const SENTENCES_SIMPLE = [
  "The cat is big.",
  "I like to read.",
  "She has a dog.",
  "The sun is hot.",
  "We go to school.",
  "He can run fast.",
  "The bird can fly.",
  "My mom is kind.",
  "The fish is small.",
  "I see a red ball.",
  "The dog eats food.",
  "It is a cold day.",
  "The frog jumps high.",
  "We play in the park.",
  "She has two apples.",
  "The sky is very blue.",
  "He rides his bike.",
  "They love to swim.",
  "The baby is asleep.",
  "I drink cold water.",
];

// G4–G6: medium complexity sentences
const SENTENCES_MEDIUM = [
  "She quickly ran to the store.",
  "My sister loves chocolate ice cream.",
  "The dog barked loudly at the mailman.",
  "We finished our homework before dinner.",
  "He always forgets his lunch at home.",
  "The teacher wrote the answer on the board.",
  "They played soccer in the rain yesterday.",
  "My best friend lives next to the library.",
  "The tall tree fell down during the storm.",
  "She borrowed three books from the library.",
  "The students listened carefully to the lesson.",
  "He painted his bedroom a bright yellow color.",
  "We ate sandwiches and fruit for our picnic.",
  "The little girl smiled at her baby brother.",
  "Our class went on a trip to the museum.",
];

// G7–G8: complex sentences with subordinate clauses
const SENTENCES_COMPLEX = [
  "Although it was raining, we went outside.",
  "She studied hard because she wanted good grades.",
  "When the bell rang, everyone rushed to the door.",
  "He could not sleep since he had drunk too much coffee.",
  "Unless you hurry, you will miss the school bus.",
  "The project was difficult, but they finished it on time.",
  "After the game ended, the players shook hands.",
  "She was nervous before she gave her first speech.",
  "Even though he was tired, he kept on running.",
  "The book that she read last week was unforgettable.",
  "As soon as the rain stopped, the children went outside.",
  "We will go camping if the weather is good this weekend.",
  "The scientist who discovered penicillin changed medicine forever.",
  "Because the library was closed, she borrowed a book from a friend.",
  "Whenever he felt sad, he would play his favorite music.",
];

const ALL_SENTENCES = [
  ...SENTENCES_SIMPLE,
  ...SENTENCES_MEDIUM,
  ...SENTENCES_COMPLEX,
];

function genSentenceBuilder(count: number): SentenceItem[] {
  const picked = pickN(ALL_SENTENCES, count);
  return picked.map(sentence => {
    const words = sentence.split(" ");
    return {
      answer: sentence,
      shuffled: shuffleArr(words),
      question: "Put the words in the correct order:",
    };
  });
}

// ─── FIND THE ERROR DATA (find the one wrong word in the sentence) ────────────

interface ErrorItem {
  words: string[];
  errorIndex: number;
  hint: string;
  question: string;
}

const ERRORS_SPELLING: ErrorItem[] = [
  // Spelling errors
  { words: ["He", "beleived", "the", "story."], errorIndex: 1, hint: "Correct spelling: believed (i before e, except after c).", question: "Find the word with a mistake:" },
  { words: ["She", "recieved", "a", "gift."], errorIndex: 1, hint: "Correct spelling: received (ei after c).", question: "Find the word with a mistake:" },
  { words: ["The", "goverment", "made", "a", "decision."], errorIndex: 1, hint: "Correct spelling: government (don't drop the 'n').", question: "Find the word with a mistake:" },
  { words: ["I", "will", "writte", "a", "letter."], errorIndex: 2, hint: "Correct spelling: write (one 't').", question: "Find the word with a mistake:" },
  { words: ["She", "is", "a", "buetiful", "singer."], errorIndex: 3, hint: "Correct spelling: beautiful.", question: "Find the word with a mistake:" },
  { words: ["He", "studdied", "all", "night."], errorIndex: 1, hint: "Correct spelling: studied (drop 'y', add 'ied').", question: "Find the word with a mistake:" },
  { words: ["The", "libary", "is", "closed."], errorIndex: 1, hint: "Correct spelling: library (two r's).", question: "Find the word with a mistake:" },
  { words: ["We", "had", "a", "wonderfull", "day."], errorIndex: 3, hint: "Correct spelling: wonderful (one 'l' at the end).", question: "Find the word with a mistake:" },
  { words: ["I", "ate", "a", "peice", "of", "cake."], errorIndex: 3, hint: "Correct spelling: piece (i before e).", question: "Find the word with a mistake:" },
  { words: ["She", "was", "very", "suprise", "to", "see", "him."], errorIndex: 3, hint: "Correct spelling: surprised.", question: "Find the word with a mistake:" },
];

const ERRORS_GRAMMAR: ErrorItem[] = [
  // Subject-verb agreement errors
  { words: ["The", "dogs", "runs", "fast."], errorIndex: 2, hint: "Correct: run (plural subject 'dogs' → plural verb).", question: "Find the word with a mistake:" },
  { words: ["She", "don't", "like", "pizza."], errorIndex: 1, hint: "Correct: doesn't (she/he/it → doesn't).", question: "Find the word with a mistake:" },
  { words: ["They", "was", "at", "the", "park."], errorIndex: 1, hint: "Correct: were (plural subject 'they' → were).", question: "Find the word with a mistake:" },
  { words: ["He", "have", "a", "red", "bike."], errorIndex: 1, hint: "Correct: has (he/she/it → has).", question: "Find the word with a mistake:" },
  { words: ["We", "is", "going", "to", "school."], errorIndex: 1, hint: "Correct: are (plural subject 'we' → are).", question: "Find the word with a mistake:" },
  // Tense errors
  { words: ["Yesterday,", "she", "eats", "an", "apple."], errorIndex: 2, hint: "Correct: ate (past tense for 'yesterday').", question: "Find the word with a mistake:" },
  { words: ["He", "runned", "very", "fast."], errorIndex: 1, hint: "Correct: ran (irregular past tense of 'run').", question: "Find the word with a mistake:" },
  { words: ["She", "has", "goed", "to", "the", "store."], errorIndex: 2, hint: "Correct: gone (past participle of 'go').", question: "Find the word with a mistake:" },
  { words: ["They", "buyed", "new", "shoes."], errorIndex: 1, hint: "Correct: bought (irregular past tense of 'buy').", question: "Find the word with a mistake:" },
  { words: ["I", "sawed", "a", "shooting", "star."], errorIndex: 1, hint: "Correct: saw (irregular past tense of 'see').", question: "Find the word with a mistake:" },
];

const ERRORS_CAPITALIZATION: ErrorItem[] = [
  // Capitalization errors
  { words: ["i", "went", "to", "New", "York."], errorIndex: 0, hint: "Correct: I (the pronoun 'I' is always capitalized).", question: "Find the word with a mistake:" },
  { words: ["She", "visited", "paris", "last", "summer."], errorIndex: 2, hint: "Correct: Paris (proper nouns are capitalized).", question: "Find the word with a mistake:" },
  { words: ["We", "celebrate", "christmas", "every", "year."], errorIndex: 2, hint: "Correct: Christmas (holiday names are capitalized).", question: "Find the word with a mistake:" },
  { words: ["My", "teacher", "is", "mrs.", "johnson."], errorIndex: 3, hint: "Correct: Mrs. (titles before names are capitalized).", question: "Find the word with a mistake:" },
  { words: ["On", "monday,", "we", "have", "gym", "class."], errorIndex: 1, hint: "Correct: Monday (days of the week are capitalized).", question: "Find the word with a mistake:" },
  { words: ["She", "speaks", "french", "and", "Spanish."], errorIndex: 2, hint: "Correct: French (language names are capitalized).", question: "Find the word with a mistake:" },
  { words: ["They", "live", "on", "oak", "street."], errorIndex: 3, hint: "Correct: Oak (street names are capitalized).", question: "Find the word with a mistake:" },
  { words: ["We", "visited", "the", "amazon", "river."], errorIndex: 3, hint: "Correct: Amazon (proper place names are capitalized).", question: "Find the word with a mistake:" },
  { words: ["she", "is", "my", "best", "friend."], errorIndex: 0, hint: "Correct: She (sentences start with a capital letter).", question: "Find the word with a mistake:" },
  { words: ["His", "birthday", "is", "in", "january."], errorIndex: 4, hint: "Correct: January (months of the year are capitalized).", question: "Find the word with a mistake:" },
];

const ALL_ERRORS: ErrorItem[] = [
  ...ERRORS_SPELLING,
  ...ERRORS_GRAMMAR,
  ...ERRORS_CAPITALIZATION,
];

function genFindError(count: number): ErrorItem[] {
  return pickN(ALL_ERRORS, count);
}

// ─── WORD FAMILIES DATA (find all words that belong to the same family) ───────

interface WordFamilyItem {
  stamm: string;       // root/base shown as label
  options: string[];   // all chips to display (family + distractors)
  correctSet: number[]; // indices of family members
  question: string;
}

const WORD_FAMILIES_POOL: Array<{
  root: string;
  family: string[];
  distractors: string[];
}> = [
  // Common base words
  { root: "play",   family: ["player", "playing", "played", "playful"],     distractors: ["place", "plan", "plain"] },
  { root: "help",   family: ["helper", "helpful", "helping", "helped"],     distractors: ["hello", "health", "heel"] },
  { root: "teach",  family: ["teacher", "teaching", "taught", "teaches"],   distractors: ["team", "reach", "beach"] },
  { root: "read",   family: ["reader", "reading", "readable", "reread"],    distractors: ["lead", "bread", "ready"] },
  { root: "write",  family: ["writer", "writing", "written", "rewrite"],    distractors: ["white", "quite", "kite"] },
  { root: "run",    family: ["runner", "running", "ran", "runs"],            distractors: ["sun", "fun", "bun"] },
  { root: "build",  family: ["builder", "building", "built", "rebuild"],    distractors: ["bold", "mild", "bilge"] },
  { root: "care",   family: ["careful", "carefully", "careless", "caring"], distractors: ["core", "dare", "bare"] },
  { root: "hope",   family: ["hopeful", "hopeless", "hoping", "hoped"],     distractors: ["home", "hole", "cope"] },
  { root: "friend", family: ["friendly", "friendship", "unfriendly", "befriend"], distractors: ["trend", "fiend", "fringe"] },
  { root: "work",   family: ["worker", "working", "worked", "homework"],    distractors: ["word", "worm", "fork"] },
  { root: "move",   family: ["mover", "moving", "movement", "remove"],      distractors: ["love", "cove", "prove"] },
  { root: "kind",   family: ["kinder", "kindness", "unkind", "kindly"],     distractors: ["mind", "find", "blind"] },
  { root: "heat",   family: ["heater", "heating", "heated", "preheat"],     distractors: ["heart", "head", "eat"] },
  { root: "farm",   family: ["farmer", "farming", "farmed", "farmland"],    distractors: ["form", "firm", "harm"] },
  { root: "fish",   family: ["fisher", "fishing", "fisherman", "fished"],   distractors: ["dish", "wish", "finish"] },
  { root: "lock",   family: ["locker", "locking", "locked", "unlock"],      distractors: ["look", "rock", "sock"] },
  { root: "paint",  family: ["painter", "painting", "painted", "repaint"],  distractors: ["point", "pant", "faint"] },
  { root: "use",    family: ["useful", "useless", "using", "reuse"],        distractors: ["fuse", "muse", "used"] },
  { root: "agree",  family: ["agreeable", "agreement", "disagree", "agreed"], distractors: ["degree", "free", "tree"] },
  { root: "count",  family: ["counter", "counting", "counted", "recount"],  distractors: ["court", "mount", "found"] },
  { root: "print",  family: ["printer", "printing", "printed", "reprint"],  distractors: ["point", "pint", "sprint"] },
  { root: "visit",  family: ["visitor", "visiting", "visited", "revisit"],  distractors: ["vicious", "mist", "list"] },
  { root: "light",  family: ["lighter", "lighting", "lightly", "daylight"], distractors: ["right", "night", "might"] },
  { root: "dark",   family: ["darker", "darkness", "darken", "darkly"],     distractors: ["park", "mark", "lark"] },
  { root: "happy",  family: ["happier", "happiness", "unhappy", "happily"], distractors: ["nappy", "hap", "hip"] },
  { root: "sad",    family: ["sadder", "sadness", "sadly", "saddened"],     distractors: ["mad", "bad", "add"] },
  { root: "color",  family: ["colorful", "colorless", "colored", "coloring"], distractors: ["collar", "cold", "coral"] },
  { root: "power",  family: ["powerful", "powerless", "powered", "empower"], distractors: ["tower", "flower", "lower"] },
  { root: "wonder", family: ["wonderful", "wondering", "wondered", "wonderland"], distractors: ["wander", "wander", "blunder"] },
];

function buildWordFamilyItem(entry: typeof WORD_FAMILIES_POOL[number]): WordFamilyItem {
  // Pick 3–4 family members and 2–3 distractors
  const familyPicked = shuffleArr(entry.family).slice(0, Math.min(4, entry.family.length));
  const distractorPicked = shuffleArr(entry.distractors).slice(0, Math.min(3, entry.distractors.length));
  const allOptions = shuffleArr([...familyPicked, ...distractorPicked]);
  const correctSet = familyPicked.map(w => allOptions.indexOf(w));
  return {
    stamm: entry.root,
    options: allOptions,
    correctSet,
    question: "Tap all words from the same word family:",
  };
}

function genWordFamilies(count: number): WordFamilyItem[] {
  return pickN(WORD_FAMILIES_POOL, count).map(buildWordFamilyItem);
}

// ─── VISUAL TYPE REGISTRATIONS ───────────────────────────────────────────────

export const ENGLISH_VISUAL_TYPES: VisualQuestionType[] = [
  // ── Sentence Builder (tap shuffled word chips into correct order) ──
  {
    type: "en-sentence-order",
    label: "Sentence Builder ✏️",
    printLabel: "Build the Sentence",
    component: SatzOrdnen,
    subtopicIds: [
      // G1
      "end_punctuation_g1",
      "sentence_vs_not_g1",
      "declarative_interrogative_g1",
      "imperative_exclamatory_g1",
      // G2
      "simple_compound_g2",
      "expanding_g2",
      "sentence_order_g2",
      "sentence_completion_g2",
      // G3
      "subject_predicate_g3",
      // G4
      "compound_sentences_g4",
      "sentence_types_g4",
      // G5
      "complex_sentences_g5",
      // G6
      "sentence_patterns_g6",
      "complex_sentences_g6",
      // G7
      "sentence_types_g7",
    ],
    generate: (count) => {
      return genSentenceBuilder(count).map(item => ({
        type: "en-sentence-order",
        question: item.question,
        shuffled: item.shuffled,
        answer: item.answer,
      }));
    },
    gradeAnswer: (q: Record<string, unknown>, given: string) => {
      const correct = Array.isArray(q.answer) ? (q.answer as string[])[0] : (q.answer as string) ?? "";
      return { correct: given === correct, expected: correct };
    },
    mapProps: (q: Record<string, unknown>, userAnswer: string, submitted: boolean, onAnswer: (a: string) => void) => ({
      shuffled: q.shuffled as string[],
      answer: Array.isArray(q.answer) ? (q.answer as string[])[0] : (q.answer as string) ?? "",
      userAnswer,
      submitted,
      onAnswer,
      placeholder: "Tap the words…",
      allUsedLabel: "all words placed",
      correctLabel: "Correct:",
    }),
  },

  // ── Find the Error (tap the one wrong word in the sentence) ──
  {
    type: "en-find-error",
    label: "Find the Error 🔍",
    printLabel: "Find the Mistake",
    component: FehlerFinden,
    subtopicIds: [
      // G1
      "capitalization_g1",
      // G2
      "vowel_patterns_g2",
      "vowel_teams_g2",
      "prefixes_suffixes_g2",
      "irregular_spelling_g2",
      // G3
      "prefixes_g3",
      "suffixes_g3",
      // G4
      "capitalization_g4",
      "spelling_g4",
      // G5
      "spelling_strategies_g5",
      // G6
      "prefixes_suffixes_g6",
      // G2 grammar ext
      "sentence_completion_g2",
      // G4 grammar
      "compound_sentences_g4",
      "direct_speech_g4",
    ],
    generate: (count) => {
      return genFindError(count).map(item => ({
        type: "en-find-error",
        question: item.question,
        words: item.words,
        errorIndex: item.errorIndex,
        hint: item.hint,
      }));
    },
    gradeAnswer: (q: Record<string, unknown>, given: string) => {
      const isCorrect = parseInt(given) === (q.errorIndex as number);
      return { correct: isCorrect, expected: String(q.errorIndex) };
    },
    mapProps: (q: Record<string, unknown>, userAnswer: string, submitted: boolean, onAnswer: (a: string) => void) => ({
      words: q.words as string[],
      errorIndex: q.errorIndex as number,
      hint: (q.hint as string) ?? "",
      userAnswer,
      submitted,
      onAnswer,
    }),
  },

  // ── Word Families (tap all words that belong to the same root) ──
  {
    type: "en-word-families",
    label: "Word Families 🌳",
    printLabel: "Word Families",
    component: WortfamilienBaum,
    subtopicIds: [
      // G2
      "prefixes_suffixes_g2",
      "word_families_g2",
      // G3
      "prefixes_g3",
      "suffixes_g3",
      "word_families_g3",
      "vocab_g3",
      // G4
      "domain_vocab_g4",
      "science_vocab_g4",
      // G5
      "prefixes_suffixes_g5",
      // G6
      "prefixes_suffixes_g6",
      "academic_vocab_g6",
      // G7
      "academic_vocab_g7",
      "research_vocab_g7",
      // G8
      "domain_vocab_g8",
    ],
    generate: (count) => {
      return genWordFamilies(count).map(item => ({
        type: "en-word-families",
        question: item.question,
        stamm: item.stamm,
        options: item.options,
        correctSet: item.correctSet,
      }));
    },
    gradeAnswer: (q: Record<string, unknown>, given: string) => {
      const correctSet = q.correctSet as number[];
      const givenIndices = given
        ? given.split(",").map(Number).filter((n) => !isNaN(n))
        : [];
      const givenSet = new Set(givenIndices);
      const correctSetObj = new Set(correctSet);
      const isCorrect =
        correctSet.every((i) => givenSet.has(i)) &&
        givenIndices.every((i) => correctSetObj.has(i));
      const expected = [...correctSet].sort((a, b) => a - b).join(",");
      return { correct: isCorrect, expected };
    },
    mapProps: (q: Record<string, unknown>, userAnswer: string, submitted: boolean, onAnswer: (a: string) => void) => ({
      stamm: q.stamm as string,
      options: q.options as string[],
      correctSet: q.correctSet as number[],
      userAnswer,
      submitted,
      onAnswer,
      rootLabel: "Root word:",
      instructionLabel: "Tap all words from the same family",
    }),
  },
];
