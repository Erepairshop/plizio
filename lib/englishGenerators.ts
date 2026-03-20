// ─── ENGLISH GENERATORS ───────────────────────────────────────────────────────
// Procedural MCQ + Typing question generators for English ELA curriculum
// Grade 1-8, all topics: Phonics, Grammar, Vocabulary, Comprehension, etc.
//
// Generates 30 questions per subtopic using seeded PRNG for reproducibility.
// Grade-appropriate mix: G1=100% MCQ, G2-3=60% MCQ/40% Typing, G4-6=50/50, G7-8=40% MCQ/60% Typing

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

/** Seeded PRNG (Mulberry32) */
function mulberry32(seed: number) {
  return function() {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Shuffle array using given RNG */
function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Pick random element from array */
function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

/** Create MCQ question */
function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrongOptions: string[]
): CurriculumMCQ {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of wrongOptions) {
    if (w !== correct && !seen.has(w)) {
      seen.add(w);
      unique.push(w);
    }
  }
  const opts = shuffle([correct, ...unique.slice(0, 3)], Math.random);
  return {
    type: "mcq",
    topic,
    subtopic,
    question,
    options: opts,
    correct: opts.indexOf(correct)
  };
}

/** Create typing question */
function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): CurriculumTyping {
  return {
    type: "typing",
    topic,
    subtopic,
    question,
    answer
  };
}

// ─── DATA LISTS (Grade-specific word banks) ─────────────────────────────────

const GRADE1_WORDS = {
  shortVowel: ["cat", "dog", "hat", "sun", "bed", "pig", "log", "cup", "top", "sit", "mat", "bat", "bin", "man", "fun"],
  longVowel: ["cake", "bike", "home", "tree", "blue", "rope", "kite", "nose", "take", "make", "bone", "five", "mine", "stone", "cute"],
  digraphs: ["ship", "chat", "them", "when", "shop", "chin", "that", "white", "show", "chop", "thin", "what", "sheet", "thick", "wheat"],
  blends: ["stop", "green", "black", "ground", "place", "tree", "bring", "stand", "small", "cross", "drive", "flags", "strong", "trade", "please"],
  uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O"],
  lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o"]
};

const GRADE2_WORDS = {
  sightWords: ["the", "was", "were", "have", "has", "had", "is", "are", "be", "been", "said", "could", "would", "should", "might"],
  longVowels: ["day", "say", "play", "way", "made", "fade", "shade", "lake", "wake", "take", "feet", "meet", "need", "seed", "keep"],
  vowelTeams: ["rain", "main", "pain", "boat", "coat", "goat", "seed", "feed", "read", "head", "bread", "thread", "sleep", "deep", "sheep"],
  prefixes: ["unhappy", "redo", "retake", "unlock", "unfair", "untie", "remake", "refill", "undo", "rerun"],
  contractions: ["don't", "can't", "won't", "isn't", "aren't", "wasn't", "weren't", "haven't", "hasn't", "hadn't", "doesn't", "didn't", "wouldn't", "shouldn't", "couldn't"]
};

const GRADE3_WORDS = {
  plurals: ["cats", "dogs", "boxes", "buses", "glasses", "dishes", "wishes", "brushes", "passes", "patches", "benches", "churches", "peaches", "beaches", "pitches"],
  regularVerbs: ["play", "played", "playing", "walk", "walked", "walking", "jump", "jumped", "jumping", "laugh", "laughed", "laughing"],
  irregularVerbs: ["go", "went", "gone", "eat", "ate", "eaten", "see", "saw", "seen", "take", "took", "taken", "write", "wrote", "written"],
  compounds: ["baseball", "football", "classroom", "something", "someone", "sunlight", "moonlight", "rainbow", "butterfly", "watermelon", "strawberry", "playground", "anybody"],
  prefixes: ["un-", "re-", "pre-", "dis-", "mis-"],
  suffixes: ["-ing", "-ed", "-er", "-est", "-ly", "-ness", "-ful", "-less"]
};

const GRADE4_WORDS = {
  modals: ["can", "could", "may", "might", "must", "should", "would", "will", "shall"],
  perfectTenses: ["has been", "have been", "has done", "have done", "has gone", "have gone"],
  comparatives: ["big", "small", "pretty", "happy", "fast", "slow", "cold", "warm", "beautiful", "ugly"],
  abstracts: ["courage", "honesty", "kindness", "friendship", "beauty", "justice", "freedom", "wisdom"],
  figurative: ["metaphor", "simile", "personification", "hyperbole", "alliteration"],
  homophones: ["to", "two", "too", "there", "their", "they're", "its", "it's", "know", "no"]
};

const GRADE5_WORDS = {
  relativePronouns: ["who", "which", "that", "whom", "whose"],
  subordinatingConj: ["because", "although", "while", "since", "if", "unless", "until", "when", "after", "before"],
  indefinitePro: ["someone", "something", "anybody", "anything", "nobody", "nothing", "everyone", "everything"],
  transitiveVerbs: ["give", "send", "tell", "ask", "show", "make", "read", "write", "bring", "take"],
  intransitiveVerbs: ["go", "come", "arrive", "happen", "sit", "stand", "walk", "run", "jump", "sleep"],
  abstractNouns: ["education", "happiness", "freedom", "knowledge", "justice", "truth", "courage", "loyalty", "integrity", "dignity"]
};

const GRADE6_WORDS = {
  literaryTerms: ["alliteration", "assonance", "consonance", "onomatopoeia", "metonymy", "synecdoche", "oxymoron", "paradox", "irony"],
  rhetoricalDevices: ["rhetorical question", "repetition", "parallel structure", "antithesis", "chiasmus"],
  etymology: ["Greek", "Latin", "French", "German", "Norse", "Spanish", "Italian"]
};

const GRADE7_WORDS = {
  verbMood: ["indicative", "imperative", "subjunctive", "conditional"],
  verbVoice: ["active voice", "passive voice", "middle voice"],
  complexSentences: ["independent clause", "dependent clause", "subordinate clause", "relative clause"],
  logicalFallacies: ["ad hominem", "straw man", "false dilemma", "begging the question", "appeal to authority"]
};

const GRADE8_WORDS = {
  syntax: ["parataxis", "hypotaxis", "anacoluthon", "inversion", "anaphora", "epistrophe"],
  semantics: ["denotation", "connotation", "semantic field", "collocation", "idiom"],
  criticalTheory: ["New Historicism", "Marxist Criticism", "Feminist Criticism", "Queer Theory", "Postcolonial Theory"],
  discourse: ["register", "idiolect", "sociolect", "dialect", "code-switching"]
};

// ─── HELPER: Grade-based question type decision ─────────────────────────────

function isMCQ(grade: number, rng: () => number): boolean {
  if (grade === 1) return true; // Grade 1: 100% MCQ
  if (grade === 2) return rng() < 0.4; // Grade 2: 40% MCQ, 60% Typing (+20% typing)
  if (grade === 3) return rng() < 0.3; // Grade 3: 30% MCQ, 70% Typing (+30% typing)
  if (grade === 4) return rng() < 0.1; // Grade 4: 10% MCQ, 90% Typing (+40% typing)
  if (grade <= 6) return rng() < 0.5; // Grade 5-6: 50% MCQ
  return rng() < 0.4; // Grade 7-8: 40% MCQ
}


// ─── GRADE 1 GENERATORS ───────────────────────────────────────────────────

export const G1_Generators = {
  phonics_g1: {
    short_long_vowels_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const isLong = rng() > 0.5;
        const word = pick(isLong ? GRADE1_WORDS.longVowel : GRADE1_WORDS.shortVowel, rng);
        const wrong = (isLong ? GRADE1_WORDS.shortVowel : GRADE1_WORDS.longVowel).filter(w => w !== word).slice(0, 3);
        q.push(createMCQ("phonics_g1", "short_long_vowels_g1",
          `Which word has a ${isLong ? "LONG" : "SHORT"} vowel sound?`, word, wrong));
      }
      return q;
    },
    digraphs_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pairs: [string, string][] = [["sh", "ship"], ["ch", "chat"], ["th", "them"], ["wh", "when"],
        ["sh", "shop"], ["ch", "chin"], ["th", "that"], ["wh", "white"],
        ["sh", "show"], ["ch", "chop"], ["th", "thin"], ["wh", "what"]];
      for (let i = 0; i < 30; i++) {
        const [dg, word] = pick(pairs, rng);
        const allDigraphs = ["sh", "ch", "th", "wh"];
        const wrong = allDigraphs.filter(d => d !== dg);
        q.push(createMCQ("phonics_g1", "digraphs_g1",
          `Which two letters make ONE sound in '${word}'?`, dg, wrong));
      }
      return q;
    },
    uppercase_lowercase_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const idx = Math.floor(rng() * GRADE1_WORDS.uppercase.length);
        const isUpper = rng() > 0.5;
        const correct = isUpper ? GRADE1_WORDS.uppercase[idx] : GRADE1_WORDS.lowercase[idx];
        const wrong = isUpper
          ? [GRADE1_WORDS.lowercase[idx], pick(GRADE1_WORDS.lowercase, rng), pick(GRADE1_WORDS.lowercase, rng)]
          : [GRADE1_WORDS.uppercase[idx], pick(GRADE1_WORDS.uppercase, rng), pick(GRADE1_WORDS.uppercase, rng)];
        q.push(createMCQ("phonics_g1", "uppercase_lowercase_g1",
          `Which letter is ${isUpper ? "UPPERCASE" : "lowercase"}?`, correct, wrong));
      }
      return q;
    },
    syllables_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const syllableData = [
        { word: "cat", count: "1" }, { word: "dog", count: "1" }, { word: "sun", count: "1" },
        { word: "hat", count: "1" }, { word: "fish", count: "1" }, { word: "book", count: "1" },
        { word: "apple", count: "2" }, { word: "happy", count: "2" }, { word: "butter", count: "2" },
        { word: "kitten", count: "2" }, { word: "rabbit", count: "2" }, { word: "window", count: "2" },
        { word: "basket", count: "2" }, { word: "pumpkin", count: "2" }, { word: "monkey", count: "2" },
        { word: "banana", count: "3" }, { word: "elephant", count: "3" }, { word: "umbrella", count: "3" },
        { word: "butterfly", count: "3" }, { word: "dinosaur", count: "3" }, { word: "wonderful", count: "3" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(syllableData, rng);
        const allCounts = ["1", "2", "3", "4"];
        const wrong = allCounts.filter(c => c !== data.count);
        q.push(createMCQ("phonics_g1", "syllables_g1",
          `How many syllables does the word '${data.word}' have?`, data.count, wrong));
      }
      return q;
    },
    blends_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const blendData = [
        { blend: "st", words: ["stop", "stand", "step", "star", "study", "stone", "stick", "strong"] },
        { blend: "gr", words: ["green", "ground", "grade", "great", "grab", "graph", "grass", "grow"] },
        { blend: "bl", words: ["black", "blue", "block", "blink", "blend", "blanket", "blurry"] },
        { blend: "pl", words: ["place", "play", "plant", "plane", "please", "plan", "plot", "plum"] },
        { blend: "tr", words: ["tree", "trade", "train", "track", "try", "truck", "trash", "treat"] },
        { blend: "dr", words: ["drive", "drop", "draw", "dragon", "dress", "drink", "dream", "drip"] },
        { blend: "br", words: ["bring", "bread", "break", "bridge", "bright", "branch", "brick", "brown"] },
        { blend: "fl", words: ["flags", "flag", "flash", "float", "floor", "fly", "flip", "flow"] },
        { blend: "cr", words: ["cross", "cry", "crown", "crash", "create", "cream", "crop", "crawl"] },
        { blend: "sm", words: ["small", "smart", "smile", "smoke", "smooth", "smell"] },
      ];
      for (let i = 0; i < 30; i++) {
        const blendSet = pick(blendData, rng);
        const word = pick(blendSet.words, rng);
        const wrong = blendData.filter(b => b.blend !== blendSet.blend).map(b => b.blend).slice(0, 3);
        q.push(createMCQ("phonics_g1", "blends_g1", `Which blend starts '${word}'?`, blendSet.blend, wrong));
      }
      return q;
    },
    rhyming_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rhymes: [string, string][] = [
        ["cat", "bat"], ["dog", "log"], ["hat", "mat"], ["sit", "fit"],
        ["sun", "fun"], ["bed", "red"], ["pig", "dig"], ["cup", "pup"],
        ["man", "fan"], ["top", "hop"], ["big", "wig"], ["net", "pet"],
      ];
      for (let i = 0; i < 30; i++) {
        const [w1, w2] = pick(rhymes, rng);
        const correct = rng() > 0.5 ? w1 : w2;
        const target = correct === w1 ? w2 : w1;
        const wrong = rhymes.filter(r => !r.includes(target) && !r.includes(correct)).map(r => pick(r, rng)).slice(0, 3);
        q.push(createMCQ("phonics_g1", "rhyming_g1", `Which word rhymes with '${correct}'?`, target, wrong));
      }
      return q;
    },
    digraphs_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const digraphData = [
        { word: "ship", dg: "sh" }, { word: "chat", dg: "ch" }, { word: "them", dg: "th" }, { word: "when", dg: "wh" },
        { word: "shop", dg: "sh" }, { word: "chin", dg: "ch" }, { word: "that", dg: "th" }, { word: "white", dg: "wh" },
        { word: "show", dg: "sh" }, { word: "chop", dg: "ch" }, { word: "thin", dg: "th" }, { word: "what", dg: "wh" },
        { word: "sheet", dg: "sh" }, { word: "cheese", dg: "ch" }, { word: "thick", dg: "th" }, { word: "where", dg: "wh" },
        { word: "shell", dg: "sh" }, { word: "church", dg: "ch" }, { word: "think", dg: "th" }, { word: "wheat", dg: "wh" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(digraphData, rng);
        q.push(createTyping("phonics_g1", "digraphs_g1",
          `Type the two letters that make ONE sound in '${data.word}':`, data.dg));
      }
      return q;
    },
    blends_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const blendData = [
        { blend: "st", words: ["stop", "stand", "step", "star", "study", "stone", "stick", "strong"] },
        { blend: "gr", words: ["green", "ground", "grade", "great", "grab", "graph", "grass", "grow"] },
        { blend: "bl", words: ["black", "blue", "block", "blink", "blend", "blanket", "blurry"] },
        { blend: "pl", words: ["place", "play", "plant", "plane", "please", "plan", "plot", "plum"] },
        { blend: "tr", words: ["tree", "trade", "train", "track", "try", "truck", "trash", "treat"] },
        { blend: "dr", words: ["drive", "drop", "draw", "dragon", "dress", "drink", "dream", "drip"] },
        { blend: "br", words: ["bring", "bread", "break", "bridge", "bright", "branch", "brick", "brown"] },
        { blend: "fl", words: ["flags", "flag", "flash", "float", "floor", "fly", "flip", "flow"] },
      ];
      for (let i = 0; i < 25; i++) {
        const blendSet = pick(blendData, rng);
        const word = pick(blendSet.words, rng);
        q.push(createTyping("phonics_g1", "blends_g1",
          `Type the two letters that start '${word}':`, blendSet.blend));
      }
      return q;
    },
    rhyming_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rhymeMap: Record<string, string[]> = {
        cat: ["bat", "hat", "mat", "sat", "rat", "fat", "pat"],
        dog: ["log", "hog", "fog", "jog", "bog"],
        sun: ["fun", "run", "bun", "gun", "done"],
        bed: ["red", "led", "shed", "bread", "head", "thread"],
        pig: ["dig", "big", "rig", "fig", "wig"],
        top: ["hop", "stop", "pop", "drop", "shop"],
        book: ["look", "cook", "hook", "took", "shook"],
        ball: ["call", "fall", "tall", "wall", "small"],
      };
      const words = Object.keys(rhymeMap);
      for (let i = 0; i < 25; i++) {
        const word = pick(words, rng);
        const rhymes = rhymeMap[word];
        q.push(createTyping("phonics_g1", "rhyming_g1",
          `Type a word that rhymes with '${word}':`, rhymes));
      }
      return q;
    },
  },
  words_g1: {
    sight_words_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sightWords = ["the", "and", "is", "it", "you", "that", "he", "was", "for", "on",
        "are", "with", "his", "they", "at", "be", "this", "have", "from", "one",
        "had", "not", "but", "what", "all", "were", "we", "when", "can", "said"];
      const nonsense = ["zop", "bif", "muk", "gax", "tev", "pon", "wug", "hib", "jaf", "dex"];
      for (let i = 0; i < 30; i++) {
        const word = pick(sightWords, rng);
        const wrong = shuffle(nonsense, rng).slice(0, 3);
        q.push(createMCQ("words_g1", "sight_words_g1",
          `Which is a real word you should know by sight?`, word, wrong));
      }
      return q;
    },
    sight_words_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "___ cat is black.", answers: ["The", "the"] },
        { sentence: "I ___ happy.", answers: ["am", "Am"] },
        { sentence: "___ you my friend?", answers: ["Are", "are"] },
        { sentence: "___ plays outside.", answers: ["He", "he"] },
        { sentence: "___ have a dog.", answers: ["I", "i"] },
        { sentence: "___ like ice cream.", answers: ["We", "we"] },
        { sentence: "___ is my book.", answers: ["This", "this"] },
        { sentence: "___ go to school.", answers: ["They", "they"] },
        { sentence: "I can ___ fast.", answers: ["run", "Run"] },
        { sentence: "___ is your name?", answers: ["What", "what"] },
        { sentence: "I ___ not go.", answers: ["will", "Will"] },
        { sentence: "___ is a cat.", answers: ["It", "it"] },
        { sentence: "She ___ a book.", answers: ["has", "Has"] },
        { sentence: "___ and blue.", answers: ["Red", "red"] },
        { sentence: "I ___ at home.", answers: ["am", "Am"] },
        { sentence: "___ day is sunny.", answers: ["One", "one"] },
        { sentence: "They ___ happy.", answers: ["are", "Are"] },
        { sentence: "___ you help me?", answers: ["Can", "can"] },
        { sentence: "I ___ good.", answers: ["am", "Am"] },
        { sentence: "___ is it?", answers: ["What", "what"] },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentenceData, rng);
        q.push(createTyping("words_g1", "sight_words_g1",
          `Fill in the blank: "${data.sentence}"`, data.answers));
      }
      return q;
    },
    nouns_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const nouns = ["dog", "cat", "ball", "tree", "house", "book", "girl", "boy", "car", "bird",
        "school", "park", "mom", "dad", "baby", "fish", "milk", "chair", "table", "bed",
        "pen", "apple", "shoe", "desk", "window", "flower", "sun", "star", "water", "hand"];
      const notNouns = ["run", "big", "fast", "happy", "jump", "slowly", "under", "and", "very", "the",
        "walk", "quickly", "above", "or", "also", "slow", "hot", "cold", "new", "good"];
      for (let i = 0; i < 30; i++) {
        const noun = pick(nouns, rng);
        const wrong = shuffle(notNouns, rng).slice(0, 3);
        q.push(createMCQ("words_g1", "nouns_g1",
          `Which word is a NOUN (a person, place, or thing)?`, noun, wrong));
      }
      return q;
    },
    verbs_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const verbs = ["run", "jump", "eat", "play", "read", "sing", "walk", "swim", "draw", "sleep",
        "write", "dance", "kick", "throw", "catch", "sit", "stand", "talk", "laugh", "cry",
        "skip", "hop", "paint", "build", "climb", "ride", "fly", "help", "listen", "watch"];
      const notVerbs = ["dog", "big", "red", "happy", "ball", "slowly", "under", "the", "very", "chair",
        "table", "blue", "hot", "small", "fast", "above", "because", "and", "very", "yellow"];
      for (let i = 0; i < 30; i++) {
        const verb = pick(verbs, rng);
        const wrong = shuffle(notVerbs, rng).slice(0, 3);
        q.push(createMCQ("words_g1", "verbs_g1",
          `Which word is a VERB (an action word)?`, verb, wrong));
      }
      return q;
    },
    articles_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const articleData = [
        { sentence: "I see ___ cat.", answer: "a", wrong: ["an", "the", "is"] },
        { sentence: "She ate ___ apple.", answer: "an", wrong: ["a", "the", "is"] },
        { sentence: "___ elephant is big.", answer: "An", wrong: ["A", "The", "Is"] },
        { sentence: "I read ___ book.", answer: "a", wrong: ["an", "the", "is"] },
        { sentence: "He found ___ egg.", answer: "an", wrong: ["a", "the", "is"] },
        { sentence: "___ sun is bright.", answer: "The", wrong: ["A", "An", "Is"] },
        { sentence: "She has ___ umbrella.", answer: "an", wrong: ["a", "the", "is"] },
        { sentence: "I want ___ cookie.", answer: "a", wrong: ["an", "the", "is"] },
        { sentence: "___ ice cream is cold.", answer: "The", wrong: ["A", "An", "Is"] },
        { sentence: "He is ___ honest boy.", answer: "an", wrong: ["a", "the", "is"] },
        { sentence: "We saw ___ orange bird.", answer: "an", wrong: ["a", "the", "is"] },
        { sentence: "I need ___ pencil.", answer: "a", wrong: ["an", "the", "is"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(articleData, rng);
        q.push(createMCQ("words_g1", "articles_g1",
          `Fill in the blank: "${data.sentence}"`, data.answer, data.wrong));
      }
      return q;
    },
    articles_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "I see ___ cat.", answers: ["a", "A"] },
        { sentence: "She ate ___ apple.", answers: ["an", "An"] },
        { sentence: "___ elephant is big.", answers: ["An", "an"] },
        { sentence: "I read ___ book.", answers: ["a", "A"] },
        { sentence: "He found ___ egg.", answers: ["an", "An"] },
        { sentence: "___ sun is bright.", answers: ["The", "the"] },
        { sentence: "She has ___ umbrella.", answers: ["an", "An"] },
        { sentence: "I want ___ cookie.", answers: ["a", "A"] },
        { sentence: "___ ice cream is cold.", answers: ["The", "the"] },
        { sentence: "He is ___ honest boy.", answers: ["an", "An"] },
        { sentence: "We saw ___ orange bird.", answers: ["an", "An"] },
        { sentence: "I need ___ pencil.", answers: ["a", "A"] },
        { sentence: "___ cat is black.", answers: ["The", "the"] },
        { sentence: "___ dog is mine.", answers: ["The", "the"] },
        { sentence: "I have ___ toy.", answers: ["a", "A"] },
        { sentence: "___ ant is small.", answers: ["An", "an"] },
        { sentence: "She is ___ girl.", answers: ["a", "A"] },
        { sentence: "___ owl can fly.", answers: ["An", "an"] },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentenceData, rng);
        q.push(createTyping("words_g1", "articles_g1",
          `Fill in the blank: "${data.sentence}"`, data.answers));
      }
      return q;
    },
    compound_words_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pairs: [string, string, string][] = [
        ["sun", "flower", "sunflower"], ["rain", "bow", "rainbow"], ["foot", "ball", "football"],
        ["some", "one", "someone"], ["any", "thing", "anything"], ["back", "ground", "background"],
        ["cup", "cake", "cupcake"], ["bed", "room", "bedroom"], ["pop", "corn", "popcorn"],
        ["snow", "man", "snowman"], ["tooth", "brush", "toothbrush"], ["gold", "fish", "goldfish"],
        ["base", "ball", "baseball"], ["play", "ground", "playground"], ["butter", "fly", "butterfly"],
      ];
      for (let i = 0; i < 30; i++) {
        const [w1, w2, compound] = pick(pairs, rng);
        const wrong = pairs.filter(p => p[2] !== compound).map(p => p[2]).slice(0, 3);
        q.push(createMCQ("words_g1", "compound_words_g1",
          `What compound word is made from '${w1}' + '${w2}'?`, compound, wrong));
      }
      return q;
    },
    compound_words_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pairs: [string, string, string][] = [
        ["sun", "flower", "sunflower"], ["rain", "bow", "rainbow"], ["foot", "ball", "football"],
        ["some", "one", "someone"], ["any", "thing", "anything"], ["back", "ground", "background"],
        ["cup", "cake", "cupcake"], ["bed", "room", "bedroom"], ["pop", "corn", "popcorn"],
        ["snow", "man", "snowman"], ["tooth", "brush", "toothbrush"], ["gold", "fish", "goldfish"],
        ["base", "ball", "baseball"], ["play", "ground", "playground"], ["butter", "fly", "butterfly"],
        ["hair", "cut", "haircut"], ["cat", "fish", "catfish"], ["star", "fish", "starfish"],
        ["rain", "drop", "raindrop"], ["water", "melon", "watermelon"], ["straw", "berry", "strawberry"],
      ];
      for (let i = 0; i < 25; i++) {
        const [w1, w2, compound] = pick(pairs, rng);
        q.push(createTyping("words_g1", "compound_words_g1",
          `Type the compound word: '${w1}' + '${w2}' =`, compound));
      }
      return q;
    },
    adjectives_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const adjectives = ["big", "happy", "fast", "soft", "cold", "hot", "small", "loud", "quiet", "sweet",
        "sour", "sharp", "dull", "long", "short", "tall", "wide", "narrow", "heavy", "light",
        "bright", "dark", "clean", "dirty", "new", "old", "beautiful", "ugly", "delicious", "yummy",
        "tasty", "bitter", "funny", "sad", "blue", "red", "green", "yellow", "pink", "orange",
        "gentle", "rough", "smooth", "rough", "small", "strong", "weak", "brave", "lazy", "busy"];
      const notAdjectives = ["dog", "run", "jump", "ball", "cat", "eat", "walk", "play", "book", "swim",
        "sit", "stand", "rock", "fire", "mouse", "sound", "room", "talk", "snowman", "house",
        "sleep", "dance", "read", "sing", "skip", "hop", "paint", "climb", "ride", "build"];
      for (let i = 0; i < 35; i++) {
        const adj = pick(adjectives, rng);
        const wrong = shuffle(notAdjectives, rng).slice(0, 3);
        q.push(createMCQ("words_g1", "adjectives_g1",
          `Which word is an ADJECTIVE (describes a noun)?`, adj, wrong));
      }
      return q;
    },
  },
  vocab_g1: {
    colors_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const colorItems = [
        { color: "red", thing: "apple" }, { color: "blue", thing: "sky" }, { color: "green", thing: "grass" },
        { color: "yellow", thing: "sun" }, { color: "orange", thing: "orange" }, { color: "purple", thing: "grape" },
        { color: "pink", thing: "pig" }, { color: "brown", thing: "tree trunk" }, { color: "white", thing: "snow" },
        { color: "black", thing: "night" }, { color: "gray", thing: "cloud" }, { color: "gold", thing: "coin" },
        { color: "red", thing: "tomato" }, { color: "blue", thing: "ocean" }, { color: "green", thing: "leaf" },
        { color: "yellow", thing: "banana" }, { color: "purple", thing: "plum" }, { color: "pink", thing: "flamingo" },
      ];
      const allColors = colorItems.map(c => c.color);
      for (let i = 0; i < 20; i++) {
        const item = pick(colorItems, rng);
        const wrong = shuffle(allColors.filter(c => c !== item.color), rng).slice(0, 3);
        q.push(createMCQ("vocab_g1", "colors_g1",
          `What color is a ${item.thing}?`, item.color, wrong));
      }
      return q;
    },
    colors_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const colorItems = [
        { color: "red", thing: "apple" }, { color: "blue", thing: "sky" }, { color: "green", thing: "grass" },
        { color: "yellow", thing: "sun" }, { color: "orange", thing: "orange" }, { color: "purple", thing: "grape" },
        { color: "pink", thing: "pig" }, { color: "brown", thing: "tree" }, { color: "white", thing: "snow" },
        { color: "black", thing: "night" }, { color: "gray", thing: "cloud" },
      ];
      for (let i = 0; i < 15; i++) {
        const item = pick(colorItems, rng);
        q.push(createTyping("vocab_g1", "colors_g1",
          `What color is a ${item.thing}?`, item.color));
      }
      return q;
    },
    numbers_words_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const numberData = [
        { num: "1", word: "one" }, { num: "2", word: "two" }, { num: "3", word: "three" },
        { num: "4", word: "four" }, { num: "5", word: "five" }, { num: "6", word: "six" },
        { num: "7", word: "seven" }, { num: "8", word: "eight" }, { num: "9", word: "nine" },
        { num: "10", word: "ten" },
      ];
      const allWords = numberData.map(n => n.word);
      for (let i = 0; i < 20; i++) {
        const data = pick(numberData, rng);
        const wrong = shuffle(allWords.filter(w => w !== data.word), rng).slice(0, 3);
        q.push(createMCQ("vocab_g1", "numbers_words_g1",
          `How do you write the number ${data.num}?`, data.word, wrong));
      }
      return q;
    },
    numbers_words_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const numberData = [
        { num: "1", word: "one" }, { num: "2", word: "two" }, { num: "3", word: "three" },
        { num: "4", word: "four" }, { num: "5", word: "five" }, { num: "6", word: "six" },
        { num: "7", word: "seven" }, { num: "8", word: "eight" }, { num: "9", word: "nine" },
        { num: "10", word: "ten" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(numberData, rng);
        q.push(createTyping("vocab_g1", "numbers_words_g1",
          `Type the word for the number ${data.num}:`, data.word));
      }
      return q;
    },
    days_months_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      const daySequences = [
        { q: "What day comes after Monday?", a: "Tuesday" },
        { q: "What day comes after Wednesday?", a: "Thursday" },
        { q: "What day comes after Friday?", a: "Saturday" },
        { q: "What day comes after Sunday?", a: "Monday" },
        { q: "What day comes before Friday?", a: "Thursday" },
        { q: "What day comes before Sunday?", a: "Saturday" },
        { q: "What is the first day of the week?", a: "Monday" },
        { q: "What is the last day of the week?", a: "Sunday" },
      ];
      const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      for (let i = 0; i < 20; i++) {
        if (rng() < 0.6) {
          const seq = pick(daySequences, rng);
          const wrong = days.filter(d => d !== seq.a);
          q.push(createMCQ("vocab_g1", "days_months_g1", seq.q, seq.a, shuffle(wrong, rng).slice(0, 3)));
        } else {
          const month = pick(months, rng);
          const monthNum = months.indexOf(month) + 1;
          const wrong = months.filter(m => m !== month);
          q.push(createMCQ("vocab_g1", "days_months_g1",
            `What is month number ${monthNum}?`, month, shuffle(wrong, rng).slice(0, 3)));
        }
      }
      return q;
    },
    days_months_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      const daySequences = [
        { q: "What day comes after Monday?", a: "Tuesday" },
        { q: "What day comes after Wednesday?", a: "Thursday" },
        { q: "What day comes after Friday?", a: "Saturday" },
        { q: "What day comes before Friday?", a: "Thursday" },
        { q: "What is the first day of the week?", a: "Monday" },
        { q: "What is the last day of the week?", a: "Sunday" },
      ];
      for (let i = 0; i < 15; i++) {
        const seq = pick(daySequences, rng);
        q.push(createTyping("vocab_g1", "days_months_g1", seq.q, seq.a));
      }
      return q;
    },
    animals_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const animals = ["dog", "cat", "bird", "fish", "elephant", "lion", "monkey", "bear", "tiger", "zebra", "giraffe", "horse",
        "rabbit", "whale", "penguin", "panda", "deer", "fox", "owl", "frog"];
      const otherWords = ["house", "tree", "car", "book", "ball", "cup", "pen", "desk", "chair", "wall", "door", "window",
        "table", "flower", "cloud", "star", "water", "fire", "rock", "sand"];
      for (let i = 0; i < 20; i++) {
        const animal = pick(animals, rng);
        const wrong = shuffle(otherWords, rng).slice(0, 3);
        q.push(createMCQ("vocab_g1", "animals_g1",
          `Which word is an ANIMAL?`, animal, wrong));
      }
      return q;
    },
    animals_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const animalClues = [
        { clue: "A pet that barks", answer: "dog" },
        { clue: "A pet that meows", answer: "cat" },
        { clue: "A large animal with a long neck", answer: "giraffe" },
        { clue: "A large animal with a trunk", answer: "elephant" },
        { clue: "A big cat that roars", answer: "lion" },
        { clue: "A striped animal", answer: "zebra" },
        { clue: "A small jumping animal with a tail", answer: "monkey" },
        { clue: "It says 'moo'", answer: "cow" },
        { clue: "It can fly and has wings", answer: "bird" },
        { clue: "It lives in water", answer: "fish" },
        { clue: "A large brown animal", answer: "bear" },
        { clue: "It has stripes and roars", answer: "tiger" },
      ];
      for (let i = 0; i < 15; i++) {
        const clue = pick(animalClues, rng);
        q.push(createTyping("vocab_g1", "animals_g1", clue.clue + ":", clue.answer));
      }
      return q;
    },
    body_parts_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const bodyPartClues = [
        { clue: "You see with your", answer: "eyes" },
        { clue: "You hear with your", answer: "ears" },
        { clue: "You smell with your", answer: "nose" },
        { clue: "You taste with your", answer: "mouth" },
        { clue: "You touch with your", answer: "hands" },
        { clue: "You walk with your", answer: "feet" },
        { clue: "Your hair grows on your", answer: "head" },
        { clue: "Your teeth are in your", answer: "mouth" },
        { clue: "You bend your", answer: "arm" },
        { clue: "You kick with your", answer: "leg" },
        { clue: "Your heart is in your", answer: "chest" },
        { clue: "Your fingers are at the end of your", answer: "hand" },
      ];
      const wrongWords = ["book", "house", "tree", "car", "table", "chair", "door", "window", "wall", "floor"];
      for (let i = 0; i < 20; i++) {
        const clue = pick(bodyPartClues, rng);
        const wrong = shuffle(wrongWords, rng).slice(0, 3);
        q.push(createMCQ("vocab_g1", "body_parts_g1", clue.clue + ":", clue.answer, wrong));
      }
      return q;
    },
    body_parts_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const bodyPartClues = [
        { clue: "You see with your", answer: "eyes" },
        { clue: "You hear with your", answer: "ears" },
        { clue: "You smell with your", answer: "nose" },
        { clue: "You taste with your", answer: "mouth" },
        { clue: "You touch with your", answer: "hands" },
        { clue: "You walk with your", answer: "feet" },
        { clue: "Your hair grows on your", answer: "head" },
        { clue: "You bend your", answer: "arm" },
        { clue: "You kick with your", answer: "leg" },
        { clue: "Your heart is in your", answer: "chest" },
      ];
      for (let i = 0; i < 15; i++) {
        const clue = pick(bodyPartClues, rng);
        q.push(createTyping("vocab_g1", "body_parts_g1", clue.clue + ":", clue.answer));
      }
      return q;
    },
    family_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const familyClues = [
        { clue: "Your mother's mother is your", answer: "grandmother" },
        { clue: "Your father's father is your", answer: "grandfather" },
        { clue: "Your father's or mother's sister is your", answer: "aunt" },
        { clue: "Your father's or mother's brother is your", answer: "uncle" },
        { clue: "Your mother is your mom or", answer: "mother" },
        { clue: "Your father is your dad or", answer: "father" },
        { clue: "Your mother's daughter is your", answer: "sister" },
        { clue: "Your mother's son is your", answer: "brother" },
        { clue: "Your aunt's son is your", answer: "cousin" },
        { clue: "Your mother's husband is your", answer: "father" },
        { clue: "Your father's wife is your", answer: "mother" },
        { clue: "Your parents' parents are your", answer: "grandparents" },
      ];
      const wrongWords = ["teacher", "friend", "doctor", "neighbor", "student", "cook", "farmer", "worker"];
      for (let i = 0; i < 20; i++) {
        const clue = pick(familyClues, rng);
        const wrong = shuffle(wrongWords, rng).slice(0, 3);
        q.push(createMCQ("vocab_g1", "family_g1", clue.clue + ":", clue.answer, wrong));
      }
      return q;
    },
    family_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const familyClues = [
        { clue: "Your mother is your", answer: "mom" },
        { clue: "Your father is your", answer: "dad" },
        { clue: "Your mother's sister is your", answer: "aunt" },
        { clue: "Your father's brother is your", answer: "uncle" },
        { clue: "Your brother or sister is your", answer: "sibling" },
        { clue: "Your mother's mother is your", answer: "grandmother" },
        { clue: "Your father's father is your", answer: "grandfather" },
        { clue: "Your aunt's son is your", answer: "cousin" },
        { clue: "Your grandmother's husband is your", answer: "grandfather" },
        { clue: "Your parents are your", answer: "family" },
      ];
      for (let i = 0; i < 15; i++) {
        const clue = pick(familyClues, rng);
        q.push(createTyping("vocab_g1", "family_g1", clue.clue + ":", clue.answer));
      }
      return q;
    },
    food_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const foodClues = [
        { clue: "A yellow fruit you peel", answer: "banana" },
        { clue: "A red fruit that grows on trees", answer: "apple" },
        { clue: "A round orange vegetable", answer: "orange" },
        { clue: "A long yellow vegetable", answer: "banana" },
        { clue: "A green vegetable you eat in salads", answer: "lettuce" },
        { clue: "A small red vegetable", answer: "tomato" },
        { clue: "A yellow grain you pop", answer: "corn" },
        { clue: "White food from cows", answer: "milk" },
        { clue: "Yellow food you spread on bread", answer: "butter" },
        { clue: "Sweet food bees make", answer: "honey" },
        { clue: "Crunchy food made from wheat", answer: "bread" },
        { clue: "Orange vegetable rabbits eat", answer: "carrot" },
        { clue: "A green fruit with a pit", answer: "avocado" },
        { clue: "Yellow curved tropical fruit", answer: "plantain" },
        { clue: "Small red berries", answer: "strawberry" },
        { clue: "Purple grape-like berry", answer: "blueberry" },
        { clue: "Crunchy orange root vegetable", answer: "carrot" },
        { clue: "Green leafy salad vegetable", answer: "spinach" },
      ];
      const wrongWords = ["chair", "house", "book", "car", "desk", "window", "door", "wall", "floor", "tree"];
      for (let i = 0; i < 20; i++) {
        const clue = pick(foodClues, rng);
        const wrong = shuffle(wrongWords, rng).slice(0, 3);
        q.push(createMCQ("vocab_g1", "food_g1", clue.clue + ":", clue.answer, wrong));
      }
      return q;
    },
    food_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const foodClues = [
        { clue: "A yellow fruit you peel", answer: "banana" },
        { clue: "A red fruit on trees", answer: "apple" },
        { clue: "A round orange fruit", answer: "orange" },
        { clue: "A green vegetable in salads", answer: "lettuce" },
        { clue: "A small red vegetable", answer: "tomato" },
        { clue: "White food from cows", answer: "milk" },
        { clue: "Yellow food you spread on bread", answer: "butter" },
        { clue: "Sweet food bees make", answer: "honey" },
        { clue: "Orange vegetable rabbits eat", answer: "carrot" },
        { clue: "Yellow grain you pop", answer: "corn" },
        { clue: "Round green vegetable", answer: "pea" },
        { clue: "Small red fruit", answer: "strawberry" },
      ];
      for (let i = 0; i < 15; i++) {
        const clue = pick(foodClues, rng);
        q.push(createTyping("vocab_g1", "food_g1", clue.clue + ":", clue.answer));
      }
      return q;
    },
    classroom_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const classroomClues = [
        { clue: "You write with a", answer: "pencil" },
        { clue: "You erase with an", answer: "eraser" },
        { clue: "You sit on a", answer: "chair" },
        { clue: "You write on a", answer: "desk" },
        { clue: "You read a", answer: "book" },
        { clue: "You write on a", answer: "board" },
        { clue: "The teacher writes on the", answer: "board" },
        { clue: "You keep your pencils in a", answer: "pencil case" },
        { clue: "You carry your books in a", answer: "backpack" },
        { clue: "You write on paper with a", answer: "pen" },
        { clue: "You draw with a", answer: "crayon" },
        { clue: "Scissors cut", answer: "paper" },
      ];
      const wrongWords = ["bed", "car", "house", "tree", "dog", "cat", "apple", "water", "glass", "plate"];
      for (let i = 0; i < 20; i++) {
        const clue = pick(classroomClues, rng);
        const wrong = shuffle(wrongWords, rng).slice(0, 3);
        q.push(createMCQ("vocab_g1", "classroom_g1", clue.clue + ":", clue.answer, wrong));
      }
      return q;
    },
    classroom_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const classroomClues = [
        { clue: "You write with a", answer: "pencil" },
        { clue: "You erase with an", answer: "eraser" },
        { clue: "You sit on a", answer: "chair" },
        { clue: "You write on a", answer: "desk" },
        { clue: "You read a", answer: "book" },
        { clue: "The teacher writes on the", answer: "board" },
        { clue: "You carry your books in a", answer: "backpack" },
        { clue: "You write on paper with a", answer: "pen" },
        { clue: "You draw with a", answer: "crayon" },
        { clue: "You draw with a", answer: "marker" },
        { clue: "You cut paper with", answer: "scissors" },
        { clue: "You work at your", answer: "desk" },
      ];
      for (let i = 0; i < 15; i++) {
        const clue = pick(classroomClues, rng);
        q.push(createTyping("vocab_g1", "classroom_g1", clue.clue + ":", clue.answer));
      }
      return q;
    },
  },
  sentences_g1: {
    end_punctuation_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "Where do you live", mark: "?", type: "question" },
        { sentence: "I like cats", mark: ".", type: "statement" },
        { sentence: "Run fast", mark: "!", type: "exclamation" },
        { sentence: "What is your name", mark: "?", type: "question" },
        { sentence: "The sky is blue", mark: ".", type: "statement" },
        { sentence: "Watch out", mark: "!", type: "exclamation" },
        { sentence: "How old are you", mark: "?", type: "question" },
        { sentence: "I have a dog", mark: ".", type: "statement" },
        { sentence: "What a great day", mark: "!", type: "exclamation" },
        { sentence: "Do you like ice cream", mark: "?", type: "question" },
        { sentence: "She is my friend", mark: ".", type: "statement" },
        { sentence: "Help me", mark: "!", type: "exclamation" },
      ];
      const allMarks = [".", "?", "!"];
      for (let i = 0; i < 30; i++) {
        const data = pick(sentenceData, rng);
        const wrong = allMarks.filter(m => m !== data.mark);
        wrong.push(";");
        q.push(createMCQ("sentences_g1", "end_punctuation_g1",
          `Which punctuation mark goes at the end? "${data.sentence}___"`, data.mark, wrong));
      }
      return q;
    },
    end_punctuation_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "Where do you live", mark: "?" },
        { sentence: "I like cats", mark: "." },
        { sentence: "Run fast", mark: "!" },
        { sentence: "What is your name", mark: "?" },
        { sentence: "The sky is blue", mark: "." },
        { sentence: "Watch out", mark: "!" },
        { sentence: "How old are you", mark: "?" },
        { sentence: "I have a dog", mark: "." },
        { sentence: "What a great day", mark: "!" },
        { sentence: "Do you like ice cream", mark: "?" },
        { sentence: "She is my friend", mark: "." },
        { sentence: "Help me", mark: "!" },
        { sentence: "Can you help", mark: "?" },
        { sentence: "It is sunny", mark: "." },
        { sentence: "Look out", mark: "!" },
        { sentence: "When will you come", mark: "?" },
        { sentence: "I am happy", mark: "." },
        { sentence: "What amazing", mark: "!" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentenceData, rng);
        q.push(createTyping("sentences_g1", "end_punctuation_g1",
          `Type the punctuation mark that goes at the end: "${data.sentence}___"`, data.mark));
      }
      return q;
    },
    capitalization_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { wrong: "the cat sat on the mat.", correct: "The cat sat on the mat." },
        { wrong: "my name is john.", correct: "My name is John." },
        { wrong: "she lives in new york.", correct: "She lives in New York." },
        { wrong: "monday is the first day.", correct: "Monday is the first day." },
        { wrong: "i like to play.", correct: "I like to play." },
        { wrong: "the dog is big.", correct: "The dog is big." },
        { wrong: "we go to school.", correct: "We go to school." },
        { wrong: "my friend sam is nice.", correct: "My friend Sam is nice." },
        { wrong: "today is friday.", correct: "Today is Friday." },
        { wrong: "he lives in texas.", correct: "He lives in Texas." },
      ];
      for (let i = 0; i < 30; i++) {
        const sent = pick(sentenceData, rng);
        const otherCorrect = shuffle(sentenceData, rng).filter(s => s.correct !== sent.correct);
        const wrong = [sent.wrong, otherCorrect[0]?.correct || "the cat.", otherCorrect[1]?.correct || "a Dog."].slice(0, 3);
        q.push(createMCQ("sentences_g1", "capitalization_g1",
          `Which sentence is capitalized correctly?`, sent.correct, wrong));
      }
      return q;
    },
    capitalization_g1_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { wrong: "the cat sat on the mat.", correct: "The cat sat on the mat." },
        { wrong: "my name is john.", correct: "My name is John." },
        { wrong: "she lives in new york.", correct: "She lives in New York." },
        { wrong: "monday is the first day.", correct: "Monday is the first day." },
        { wrong: "i like to play.", correct: "I like to play." },
        { wrong: "the dog is big.", correct: "The dog is big." },
        { wrong: "we go to school.", correct: "We go to school." },
        { wrong: "my friend sam is nice.", correct: "My friend Sam is nice." },
        { wrong: "today is friday.", correct: "Today is Friday." },
        { wrong: "he lives in texas.", correct: "He lives in Texas." },
        { wrong: "we play in the park.", correct: "We play in the park." },
        { wrong: "tom likes apples.", correct: "Tom likes apples." },
        { wrong: "she is from london.", correct: "She is from London." },
        { wrong: "i go to school on monday.", correct: "I go to school on Monday." },
        { wrong: "january is cold.", correct: "January is cold." },
        { wrong: "he is my friend.", correct: "He is my friend." },
        { wrong: "sarah likes to read.", correct: "Sarah likes to read." },
        { wrong: "they play in france.", correct: "They play in France." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentenceData, rng);
        q.push(createTyping("sentences_g1", "capitalization_g1",
          `Fix the capitalization: "${data.wrong}"`, data.correct));
      }
      return q;
    },
    sentence_vs_not_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        "The cat sat on the mat.", "I like to play.", "She is my friend.",
        "The dog is big.", "We go to school.", "He can run fast.",
        "My mom is nice.", "The sun is bright.", "I see a bird.",
        "They play outside.", "She reads a book.", "We eat lunch.",
      ];
      const fragments = [
        "big dog", "ran fast", "red ball", "the very", "under the",
        "running and", "cat happy", "to the park", "green and", "my old",
        "jumping high", "so very big",
      ];
      for (let i = 0; i < 30; i++) {
        const isSentenceQ = rng() > 0.5;
        if (isSentenceQ) {
          const correct = pick(sentences, rng);
          const wrong = shuffle(fragments, rng).slice(0, 3);
          q.push(createMCQ("sentences_g1", "sentence_vs_not_g1",
            `Which is a COMPLETE sentence?`, correct, wrong));
        } else {
          const correct = pick(fragments, rng);
          const wrong = shuffle(sentences, rng).slice(0, 3);
          q.push(createMCQ("sentences_g1", "sentence_vs_not_g1",
            `Which is NOT a complete sentence?`, correct, wrong));
        }
      }
      return q;
    },
    declarative_interrogative_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { text: "What is your name?", type: "interrogative" },
        { text: "The cat is sleeping.", type: "declarative" },
        { text: "Do you like apples?", type: "interrogative" },
        { text: "She runs very fast.", type: "declarative" },
        { text: "Where do you live?", type: "interrogative" },
        { text: "I have a red ball.", type: "declarative" },
        { text: "Is it raining outside?", type: "interrogative" },
        { text: "My dog likes to play.", type: "declarative" },
        { text: "Can you help me?", type: "interrogative" },
        { text: "The sun is shining.", type: "declarative" },
        { text: "How old are you?", type: "interrogative" },
        { text: "We eat lunch at noon.", type: "declarative" },
      ];
      for (let i = 0; i < 30; i++) {
        const sent = pick(sentenceData, rng);
        const wrong = [
          sent.type === "declarative" ? "interrogative" : "declarative",
          "exclamatory",
          "imperative",
        ];
        q.push(createMCQ("sentences_g1", "declarative_interrogative_g1",
          `What type of sentence is this? "${sent.text}"`, sent.type, wrong));
      }
      return q;
    },
    imperative_exclamatory_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const imperativeData = [
        "Sit down!", "Close the door!", "Come here!", "Help me!", "Listen carefully!",
        "Stop running!", "Eat your vegetables!", "Be quiet!", "Show me your work!", "Pick up the toy!",
        "Wash your hands!", "Go to bed!", "Stand up!", "Try your best!", "Look at me!",
      ];
      const exclamatoryData = [
        "What a great day!", "I love ice cream!", "This is amazing!", "Watch out!", "I won the game!",
        "That is so funny!", "I can not believe it!", "This is so exciting!", "How wonderful!", "That is incredible!",
        "I love this so much!", "How happy I am!", "This is the best!", "What great news!", "That is incredible!",
      ];
      const wrongImperative = [
        "You sit down.", "Do you sit?", "Sitting is fun!", "The door is closed.", "Is the door closed?", "Closing the door!",
        "You come here.", "Are you coming?", "Come here please.", "You help me.", "Can you help?", "He helps me!",
      ];
      const wrongExclamatory = [
        "It is a great day.", "Is it a great day?", "Have a great day!", "I like ice cream.", "Do you like ice cream?",
        "You love ice cream!", "This is something.", "Is this amazing?", "That is amazing!", "You watch out.", "Are you watching?",
      ];
      for (let i = 0; i < 30; i++) {
        const isImperative = rng() > 0.5;
        if (isImperative) {
          const correct = pick(imperativeData, rng);
          const wrong = shuffle(wrongImperative, rng).slice(0, 3);
          q.push(createMCQ("sentences_g1", "imperative_exclamatory_g1",
            `Which is an IMPERATIVE sentence (a command)?`, correct, wrong));
        } else {
          const correct = pick(exclamatoryData, rng);
          const wrong = shuffle(wrongExclamatory, rng).slice(0, 3);
          q.push(createMCQ("sentences_g1", "imperative_exclamatory_g1",
            `Which is an EXCLAMATORY sentence (shows strong feeling)?`, correct, wrong));
        }
      }
      return q;
    },
  },
  reading_g1: {
    story_comprehension_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const stories: { title: string; text: string; questions: { q: string; correct: string; wrong: string[] }[] }[] = [
        {
          title: "Tom's Day",
          text: "Tom ate breakfast. Then he went to school. After school, he came home.",
          questions: [
            { q: "What did Tom do FIRST?", correct: "Ate breakfast", wrong: ["Went to school", "Came home", "Played outside"] },
            { q: "When did Tom go to school?", correct: "After breakfast", wrong: ["First thing", "After coming home", "Before eating"] },
            { q: "What is the MAIN IDEA?", correct: "Tom's daily activities", wrong: ["Tom ate a lot", "Tom went to school", "Tom came home"] },
          ]
        },
        {
          title: "Sarah's Morning",
          text: "Sarah put on her shoes. She opened the door. Then she went outside.",
          questions: [
            { q: "What happened FIRST?", correct: "Put on her shoes", wrong: ["Opened the door", "Went outside", "Came back home"] },
            { q: "When did Sarah go outside?", correct: "After opening the door", wrong: ["Before putting on shoes", "First", "Before opening door"] },
            { q: "What is the ORDER of events?", correct: "Shoes, door, outside", wrong: ["Outside, shoes, door", "Door, shoes, outside", "All together"] },
          ]
        },
        {
          title: "John's Lunch",
          text: "John made a sandwich. He poured juice. Then he ate lunch.",
          questions: [
            { q: "What is the MAIN IDEA?", correct: "John prepared and ate lunch", wrong: ["John made a sandwich", "John poured juice", "John was hungry"] },
            { q: "What did John make FIRST?", correct: "A sandwich", wrong: ["Juice", "Lunch", "Food"] },
            { q: "What did John do SECOND?", correct: "Poured juice", wrong: ["Made sandwich", "Ate lunch", "Cleaned up"] },
          ]
        },
        {
          title: "The Ball Game",
          text: "The boy found a ball. He threw it. His friend caught it.",
          questions: [
            { q: "What did the FRIEND do?", correct: "Caught the ball", wrong: ["Threw the ball", "Found the ball", "Played outside"] },
            { q: "Who FOUND the ball?", correct: "The boy", wrong: ["His friend", "Both", "The girl"] },
            { q: "What happened LAST?", correct: "His friend caught it", wrong: ["He threw it", "The boy found it", "They played"] },
          ]
        },
        {
          title: "Emma's Reading",
          text: "Emma read a book. She sat in a chair. The cat sat next to her.",
          questions: [
            { q: "Who was in the story?", correct: "Emma, a cat, and a book", wrong: ["Emma and a dog", "A cat and chair", "Emma alone"] },
            { q: "Where did Emma sit?", correct: "In a chair", wrong: ["On the floor", "On a couch", "Outside"] },
            { q: "What was the cat doing?", correct: "Sitting next to Emma", wrong: ["Reading with her", "Playing", "Sleeping"] },
          ]
        },
        {
          title: "Outdoor Play",
          text: "The sun came up. The birds sang. Children played outside.",
          questions: [
            { q: "What is the SETTING?", correct: "Outside in the morning", wrong: ["Inside the house", "At night", "In a store"] },
            { q: "What did the BIRDS do?", correct: "Sang", wrong: ["Played", "Sat down", "Flew"] },
            { q: "When did this happen?", correct: "In the morning", wrong: ["At night", "In afternoon", "Evening"] },
          ]
        },
        {
          title: "A Girl's Toy",
          text: "A girl had no toy. She made one from a box. Then she played happily.",
          questions: [
            { q: "What is TRUE?", correct: "She made a toy", wrong: ["She had a toy", "She had a box", "She was sad"] },
            { q: "What did she use to make the toy?", correct: "A box", wrong: ["Paper", "Wood", "Plastic"] },
            { q: "How did she FEEL at the end?", correct: "Happy", wrong: ["Sad", "Angry", "Scared"] },
          ]
        },
        {
          title: "The Dog at Park",
          text: "The dog ran to the park. He played with other dogs. Then he came home tired.",
          questions: [
            { q: "What HAPPENED LAST?", correct: "He came home tired", wrong: ["He played with dogs", "He ran to park", "He slept"] },
            { q: "Where did the dog GO?", correct: "To the park", wrong: ["To school", "To the store", "Nowhere"] },
            { q: "How did the dog feel at the END?", correct: "Tired", wrong: ["Happy", "Sad", "Angry"] },
          ]
        },
        {
          title: "Cookie Time",
          text: "Mom made cookies. Dad helped. The kids ate them.",
          questions: [
            { q: "Who MADE the cookies?", correct: "Mom", wrong: ["Dad", "The kids", "Everyone"] },
            { q: "Who HELPED?", correct: "Dad", wrong: ["Mom", "The kids", "Brother"] },
            { q: "What did the kids do?", correct: "Ate them", wrong: ["Made them", "Helped", "Shared"] },
          ]
        },
        {
          title: "Rain and Flowers",
          text: "It rained hard. The flowers got water. They grew big.",
          questions: [
            { q: "What helped the flowers GROW?", correct: "The rain", wrong: ["The sun", "The wind", "The soil"] },
            { q: "What is TRUE?", correct: "The flowers grew big", wrong: ["The flowers died", "No rain fell", "Flowers were small"] },
            { q: "What happened FIRST?", correct: "It rained", wrong: ["Flowers grew", "Flowers got water", "It was sunny"] },
          ]
        },
        {
          title: "Sam Falls Down",
          text: "Sam fell down. His friend helped him up. Sam felt better.",
          questions: [
            { q: "What was the PROBLEM?", correct: "Sam fell down", wrong: ["Sam was sad", "His friend fell", "They were outside"] },
            { q: "Who HELPED Sam?", correct: "His friend", wrong: ["His mom", "His teacher", "Himself"] },
            { q: "How did Sam feel at the END?", correct: "Better", wrong: ["Hurt", "Sad", "Angry"] },
          ]
        },
        {
          title: "The Bird's Nest",
          text: "A bird built a nest. She laid eggs. The eggs hatched.",
          questions: [
            { q: "What is the ORDER of events?", correct: "Built nest, laid eggs, hatched", wrong: ["Hatched, built nest, laid eggs", "Laid eggs, built nest, hatched", "All at once"] },
            { q: "What did the bird BUILD?", correct: "A nest", wrong: ["Eggs", "A home", "A tree"] },
            { q: "What HATCHED?", correct: "The eggs", wrong: ["The nest", "The bird", "The tree"] },
          ]
        },
        {
          title: "The Hungry Cat",
          text: "The cat was hungry. She ate food. Then she slept.",
          questions: [
            { q: "What is the MAIN IDEA?", correct: "The cat ate and slept", wrong: ["The cat was hungry", "The cat ate food", "The cat slept"] },
            { q: "How did the CAT FEEL at first?", correct: "Hungry", wrong: ["Sad", "Happy", "Tired"] },
            { q: "What did the cat do LAST?", correct: "Slept", wrong: ["Ate", "Played", "Woke up"] },
          ]
        },
        {
          title: "James' Pencil",
          text: "James lost his pencil. He looked everywhere. He found it under his desk.",
          questions: [
            { q: "Where was the PENCIL?", correct: "Under the desk", wrong: ["In his hand", "On the table", "In his pocket"] },
            { q: "What did James DO first?", correct: "Lost his pencil", wrong: ["Looked for it", "Found it", "Cleaned desk"] },
            { q: "Where did he FIND it?", correct: "Under his desk", wrong: ["In his bag", "On the table", "On the floor"] },
          ]
        },
        {
          title: "Growing Plant",
          text: "A boy planted a seed. He watered it. It grew into a plant.",
          questions: [
            { q: "What WILL HAPPEN NEXT?", correct: "It will get bigger", wrong: ["It will die", "It will disappear", "It will turn brown"] },
            { q: "What did the boy do FIRST?", correct: "Planted a seed", wrong: ["Watered it", "It grew", "Picked it"] },
            { q: "What is the MAIN IDEA?", correct: "Growing a plant from a seed", wrong: ["Watering a plant", "Planting seeds", "A boy plays"] },
          ]
        },
        {
          title: "Lisa's Candy",
          text: "Lisa wanted to buy candy. She saved her money. She bought the candy.",
          questions: [
            { q: "What is TRUE?", correct: "Lisa saved money to buy candy", wrong: ["Lisa found candy", "Lisa got candy free", "Lisa made candy"] },
            { q: "What did Lisa WANT?", correct: "To buy candy", wrong: ["To save money", "To give candy", "To sell candy"] },
            { q: "How did she GET the money?", correct: "By saving it", wrong: ["She found it", "Her parents gave it", "She earned it"] },
          ]
        },
        {
          title: "School Trip",
          text: "The class went on a trip. They saw animals. They had fun.",
          questions: [
            { q: "What is the MAIN IDEA?", correct: "The class had fun on a trip", wrong: ["The class went to the zoo", "They saw animals", "They traveled"] },
            { q: "What did they SEE?", correct: "Animals", wrong: ["Plants", "People", "Cars"] },
            { q: "Did they have FUN?", correct: "Yes", wrong: ["No", "Maybe", "Sometimes"] },
          ]
        },
        {
          title: "Jack and Cold",
          text: "It was cold outside. Jack wore a coat. He built a snowman.",
          questions: [
            { q: "Why did Jack wear a COAT?", correct: "It was cold", wrong: ["It was raining", "He liked coats", "He was playing"] },
            { q: "What did Jack BUILD?", correct: "A snowman", wrong: ["A fort", "A house", "A door"] },
            { q: "What is the SETTING?", correct: "Outside in winter", wrong: ["Inside", "At the beach", "In spring"] },
          ]
        },
        {
          title: "Ruby's Apples",
          text: "Ruby had apples. She shared them with friends. Everyone was happy.",
          questions: [
            { q: "What HAPPENED at the END?", correct: "Everyone was happy", wrong: ["She had apples", "She shared apples", "Friends came over"] },
            { q: "What did Ruby DO with the apples?", correct: "Shared them", wrong: ["Ate them", "Sold them", "Hid them"] },
            { q: "Who was HAPPY?", correct: "Everyone", wrong: ["Just Ruby", "Just friends", "Nobody"] },
          ]
        },
        {
          title: "Light in the Dark",
          text: "A girl was scared of the dark. Her mom left a light on. Now she felt safe.",
          questions: [
            { q: "What helped her feel SAFE?", correct: "The light", wrong: ["Her mom", "The dark", "Her bed"] },
            { q: "Why was the girl SCARED?", correct: "Of the dark", wrong: ["Of her mom", "Of the light", "Of nothing"] },
            { q: "What did her MOM DO?", correct: "Left a light on", wrong: ["Came to her", "Told a story", "Sang a song"] },
          ]
        },
      ];
      for (let i = 0; i < 19; i++) {
        const story = pick(stories, rng);
        const question = pick(story.questions, rng);
        q.push(createMCQ("reading_g1", "story_comprehension_g1",
          question.q, question.correct, question.wrong));
      }
      return q;
    },
  },
};

// ─── GRADE 2 GENERATORS ───────────────────────────────────────────────────

export const G2_Generators = {
  pos_g2: {
    nouns_common_proper_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const properNouns = ["London", "Sarah", "Monday", "January", "Texas", "Amazon", "Christmas", "Mr. Smith", "France", "Disney", "Tokyo", "John", "Friday", "March", "California", "Nile", "Thanksgiving", "Ms. Johnson", "Germany", "Universal", "Paris", "Emma", "Wednesday", "July", "Florida", "River", "Halloween", "Dr. Brown", "Italy", "Warner Bros"];
      const commonNouns = ["city", "girl", "day", "month", "state", "river", "holiday", "teacher", "country", "park", "animal", "boy", "time", "season", "town", "lake", "celebration", "student", "nation", "playground"];
      for (let i = 0; i < 30; i++) {
        const isProper = rng() > 0.5;
        if (isMCQ(2, rng)) {
          if (isProper) {
            const correct = pick(properNouns, rng);
            const wrong = shuffle(commonNouns, rng).slice(0, 3);
            q.push(createMCQ("pos_g2", "nouns_common_proper_g2",
              `Which is a PROPER noun (needs a capital letter)?`, correct, wrong));
          } else {
            const correct = pick(commonNouns, rng);
            const wrong = shuffle(properNouns, rng).slice(0, 3);
            q.push(createMCQ("pos_g2", "nouns_common_proper_g2",
              `Which is a COMMON noun (no capital letter needed)?`, correct, wrong));
          }
        } else {
          if (isProper) {
            q.push(createTyping("pos_g2", "nouns_common_proper_g2",
              `Is 'London' a common noun or a proper noun?`, "proper noun"));
          } else {
            q.push(createTyping("pos_g2", "nouns_common_proper_g2",
              `Is 'dog' a common noun or a proper noun?`, "common noun"));
          }
        }
      }
      return q;
    },
    nouns_plural_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const regularPlurals: [string, string][] = [
        ["cat", "cats"], ["dog", "dogs"], ["book", "books"], ["tree", "trees"],
        ["car", "cars"], ["ball", "balls"], ["bird", "birds"], ["cup", "cups"],
        ["hat", "hats"], ["desk", "desks"], ["pen", "pens"], ["flower", "flowers"],
        ["apple", "apples"], ["house", "houses"], ["girl", "girls"], ["boy", "boys"],
      ];
      const esPlurals: [string, string][] = [
        ["box", "boxes"], ["bus", "buses"], ["dish", "dishes"], ["glass", "glasses"],
        ["watch", "watches"], ["fox", "foxes"], ["brush", "brushes"], ["bench", "benches"],
        ["church", "churches"], ["class", "classes"], ["dress", "dresses"], ["kiss", "kisses"],
      ];
      const irregularPlurals: [string, string][] = [
        ["child", "children"], ["man", "men"], ["woman", "women"], ["mouse", "mice"],
        ["tooth", "teeth"], ["foot", "feet"], ["goose", "geese"], ["person", "people"],
        ["ox", "oxen"], ["leaf", "leaves"], ["knife", "knives"], ["half", "halves"],
      ];
      const allPlurals = [...regularPlurals, ...esPlurals, ...irregularPlurals];
      for (let i = 0; i < 30; i++) {
        const [singular, plural] = pick(allPlurals, rng);
        if (isMCQ(2, rng)) {
          const wrong = allPlurals
            .filter(p => p[1] !== plural)
            .map(p => p[1])
            .slice(0, 2);
          wrong.push(singular + "s" === plural ? singular + "es" : singular + "s");
          q.push(createMCQ("pos_g2", "nouns_plural_g2",
            `What is the PLURAL of '${singular}'?`, plural, wrong));
        } else {
          q.push(createTyping("pos_g2", "nouns_plural_g2",
            `Write the plural of '${singular}':`, plural));
        }
      }
      return q;
    },
    collective_nouns_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const collectiveData = [
        { noun: "flock", context: "A ___ of birds flew overhead.", singular: "birds" },
        { noun: "pack", context: "A ___ of wolves howled in the forest.", singular: "wolves" },
        { noun: "school", context: "A ___ of fish swam together.", singular: "fish" },
        { noun: "herd", context: "A ___ of cows stood in the field.", singular: "cows" },
        { noun: "colony", context: "A ___ of ants built a nest.", singular: "ants" },
        { noun: "team", context: "A ___ of players won the game.", singular: "players" },
        { noun: "swarm", context: "A ___ of bees buzzed around the garden.", singular: "bees" },
        { noun: "litter", context: "A ___ of kittens played on the rug.", singular: "kittens" },
        { noun: "bunch", context: "A ___ of grapes hung from the vine.", singular: "grapes" },
        { noun: "pride", context: "A ___ of lions rested in the shade.", singular: "lions" },
        { noun: "gaggle", context: "A ___ of geese flew south for winter.", singular: "geese" },
        { noun: "pod", context: "A ___ of dolphins swam in the ocean.", singular: "dolphins" },
        { noun: "army", context: "A ___ of ants marched across the ground.", singular: "ants" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(2, rng)) {
          const data = pick(collectiveData, rng);
          const wrong = collectiveData.filter(d => d.noun !== data.noun).map(d => d.noun).slice(0, 3);
          q.push(createMCQ("pos_g2", "collective_nouns_g2",
            `Fill in: "${data.context}"`, data.noun, wrong));
        } else {
          const data = pick(collectiveData, rng);
          q.push(createTyping("pos_g2", "collective_nouns_g2",
            `What is the collective noun for a group of ${data.singular}?`, data.noun));
        }
      }
      return q;
    },
    verbs_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const actionVerbs = ["run", "jump", "play", "eat", "sleep", "read", "write", "sing", "dance", "swim", "walk", "talk", "listen", "watch", "laugh", "cry", "draw", "paint"];
      const linkingVerbs = ["is", "am", "are", "was", "were", "seem", "become", "feel", "look", "appear", "taste", "sound"];
      const notVerbs = ["happy", "blue", "quickly", "small", "cat", "the", "under", "very", "green", "slowly", "book", "tree"];
      for (let i = 0; i < 30; i++) {
        const qType = rng();
        if (isMCQ(2, rng)) {
          if (qType < 0.33) {
            const verb = pick(actionVerbs, rng);
            const wrong = shuffle(notVerbs, rng).slice(0, 3);
            q.push(createMCQ("pos_g2", "verbs_g2", "Which is an ACTION verb?", verb, wrong));
          } else if (qType < 0.66) {
            const verb = pick(linkingVerbs, rng);
            const wrong = shuffle(actionVerbs, rng).slice(0, 3);
            q.push(createMCQ("pos_g2", "verbs_g2", "Which is a LINKING verb?", verb, wrong));
          } else {
            const verb = pick([...actionVerbs, ...linkingVerbs], rng);
            const wrong = shuffle(notVerbs, rng).slice(0, 3);
            q.push(createMCQ("pos_g2", "verbs_g2", "Which word is a VERB?", verb, wrong));
          }
        } else {
          q.push(createTyping("pos_g2", "verbs_g2", "Write an action verb:", pick(actionVerbs, rng)));
        }
      }
      return q;
    },
    irregular_past_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const irregulars: [string, string, string][] = [
        ["run", "ran", "runned"], ["go", "went", "goed"], ["eat", "ate", "eated"],
        ["see", "saw", "seed"], ["come", "came", "comed"], ["give", "gave", "gived"],
        ["take", "took", "taked"], ["make", "made", "maked"], ["sing", "sang", "singed"],
        ["swim", "swam", "swimmed"], ["write", "wrote", "writed"], ["sit", "sat", "sitted"],
        ["fly", "flew", "flied"], ["drink", "drank", "drinked"], ["think", "thought", "thinked"],
        ["buy", "bought", "buyed"], ["bring", "brought", "bringed"], ["catch", "caught", "catched"],
      ];
      for (let i = 0; i < 30; i++) {
        const [present, past, wrongPast] = pick(irregulars, rng);
        if (isMCQ(2, rng)) {
          const otherPasts = irregulars.filter(v => v[1] !== past).map(v => v[1]).slice(0, 2);
          const wrong = [wrongPast, ...otherPasts];
          q.push(createMCQ("pos_g2", "irregular_past_g2",
            `What is the past tense of '${present}'?`, past, wrong));
        } else {
          q.push(createTyping("pos_g2", "irregular_past_g2",
            `Write the past tense of '${present}':`, past));
        }
      }
      return q;
    },
    adj_adv_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const adjectives = ["happy", "big", "small", "fast", "slow", "cold", "warm", "pretty", "tall", "soft"];
      const adverbs = ["quickly", "slowly", "happily", "loudly", "softly", "quietly", "gently", "brightly", "sadly", "eagerly"];
      const adjAdvPairs = [
        { adj: "happy", adv: "happily" }, { adj: "quick", adv: "quickly" },
        { adj: "slow", adv: "slowly" }, { adj: "loud", adv: "loudly" },
        { adj: "soft", adv: "softly" }, { adj: "quiet", adv: "quietly" },
        { adj: "gentle", adv: "gently" }, { adj: "bright", adv: "brightly" },
        { adj: "sad", adv: "sadly" }, { adj: "eager", adv: "eagerly" },
      ];
      const notAdj = ["run", "cat", "quickly", "jump", "the", "under"];
      const notAdv = ["cat", "big", "run", "ball", "the", "under"];
      for (let i = 0; i < 30; i++) {
        const qType = rng();
        if (isMCQ(2, rng)) {
          if (qType < 0.33) {
            const adj = pick(adjectives, rng);
            const wrong = shuffle(notAdj, rng).slice(0, 3);
            q.push(createMCQ("pos_g2", "adj_adv_g2",
              `Which word is an ADJECTIVE (describing word)?`, adj, wrong));
          } else if (qType < 0.66) {
            const adv = pick(adverbs, rng);
            const wrong = shuffle(notAdv, rng).slice(0, 3);
            q.push(createMCQ("pos_g2", "adj_adv_g2",
              `Which word is an ADVERB (tells how)?`, adv, wrong));
          } else {
            const pair = pick(adjAdvPairs, rng);
            const wrong = adjAdvPairs.filter(p => p.adv !== pair.adv).map(p => p.adv).slice(0, 3);
            q.push(createMCQ("pos_g2", "adj_adv_g2",
              `What is the adverb form of '${pair.adj}'?`, pair.adv, wrong));
          }
        } else {
          const pair = pick(adjAdvPairs, rng);
          q.push(createTyping("pos_g2", "adj_adv_g2",
            `Write the adverb form of '${pair.adj}':`, pair.adv));
        }
      }
      return q;
    },
    pronouns_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pronounData = [
        { pronoun: "myself", sentences: ["I hurt ___ yesterday.", "I talked to ___ in the mirror."] },
        { pronoun: "yourself", sentences: ["You did that by ___.", "Did you introduce ___ to him?"] },
        { pronoun: "himself", sentences: ["He cleaned ___ up.", "He told ___ to be brave."] },
        { pronoun: "herself", sentences: ["She enjoyed ___ at the party.", "She is proud of ___."] },
        { pronoun: "itself", sentences: ["The cat licked ___ clean.", "The door closed by ___."] },
        { pronoun: "ourselves", sentences: ["We taught ___ to swim.", "We prepared ___ for the test."] },
        { pronoun: "themselves", sentences: ["They enjoyed ___ very much.", "They helped ___."] },
      ];
      const subjectPronouns = [
        { pronoun: "he", sentence: "___ is a good boy.", wrong: ["him", "his", "her"] },
        { pronoun: "she", sentence: "___ went to the store.", wrong: ["her", "hers", "him"] },
        { pronoun: "they", sentence: "___ are my friends.", wrong: ["them", "their", "us"] },
        { pronoun: "we", sentence: "___ like to play.", wrong: ["us", "our", "them"] },
        { pronoun: "I", sentence: "___ have a pet.", wrong: ["me", "my", "mine"] },
      ];
      for (let i = 0; i < 30; i++) {
        const isReflexive = rng() > 0.4;
        if (isMCQ(2, rng)) {
          if (isReflexive) {
            const pronSet = pick(pronounData, rng);
            const wrong = pronounData.filter(p => p.pronoun !== pronSet.pronoun).map(p => p.pronoun).slice(0, 3);
            const sentence = pick(pronSet.sentences, rng);
            q.push(createMCQ("pos_g2", "pronouns_g2",
              `Fill in: "${sentence}"`, pronSet.pronoun, wrong));
          } else {
            const data = pick(subjectPronouns, rng);
            q.push(createMCQ("pos_g2", "pronouns_g2",
              `Fill in: "${data.sentence}"`, data.pronoun, data.wrong));
          }
        } else {
          const pronSet = pick(pronounData, rng);
          q.push(createTyping("pos_g2", "pronouns_g2",
            "Name a reflexive pronoun:", pronSet.pronoun));
        }
      }
      return q;
    },
    question_words_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const questionWords = [
        { word: "who", example: "___ is your best friend?", meaning: "asking about a person" },
        { word: "what", example: "___ is your favorite color?", meaning: "asking about a thing" },
        { word: "where", example: "___ do you live?", meaning: "asking about a place" },
        { word: "when", example: "___ is your birthday?", meaning: "asking about time" },
        { word: "why", example: "___ do you like ice cream?", meaning: "asking for a reason" },
        { word: "how", example: "___ are you today?", meaning: "asking about manner or condition" },
      ];
      const allWords = questionWords.map(q => q.word);
      for (let i = 0; i < 20; i++) {
        const data = pick(questionWords, rng);
        const wrong = shuffle(allWords.filter(w => w !== data.word), rng).slice(0, 3);
        q.push(createMCQ("pos_g2", "question_words_g2",
          `Complete the question: "${data.example}"`, data.word, wrong));
      }
      return q;
    },
    question_words_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const questionExamples = [
        { example: "___ is your name?", answer: "what" },
        { example: "___ do you live?", answer: "where" },
        { example: "___ is your birthday?", answer: "when" },
        { example: "___ is your best friend?", answer: "who" },
        { example: "___ do you like pizza?", answer: "why" },
        { example: "___ are you?", answer: "how" },
        { example: "___ is your favorite animal?", answer: "what" },
        { example: "___ do you go to school?", answer: "where" },
        { example: "___ do you wake up?", answer: "when" },
        { example: "___ is your teacher?", answer: "who" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(questionExamples, rng);
        q.push(createTyping("pos_g2", "question_words_g2",
          `Complete: "${data.example}"`, data.answer));
      }
      return q;
    },
    conjunctions_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const conjunctionData = [
        { word: "and", sentence: "I like cats ___ dogs.", meaning: "connects two similar ideas" },
        { word: "but", sentence: "She likes soccer ___ she doesn't like basketball.", meaning: "shows contrast" },
        { word: "or", sentence: "Do you want coffee ___ tea?", meaning: "shows choice" },
        { word: "because", sentence: "I was tired ___ I stayed home.", meaning: "gives a reason" },
        { word: "so", sentence: "It was raining ___ we stayed inside.", meaning: "shows result" },
      ];
      const allConjunctions = conjunctionData.map(c => c.word);
      for (let i = 0; i < 20; i++) {
        const data = pick(conjunctionData, rng);
        const wrong = shuffle(allConjunctions.filter(w => w !== data.word), rng).slice(0, 3);
        q.push(createMCQ("pos_g2", "conjunctions_g2",
          `Complete: "${data.sentence}"`, data.word, wrong));
      }
      return q;
    },
    conjunctions_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const conjunctionExamples = [
        { sentence: "I like apples ___ oranges.", answer: "and" },
        { sentence: "She is tall ___ her brother is short.", answer: "but" },
        { sentence: "Do you want milk ___ juice?", answer: "or" },
        { sentence: "I was happy ___ I won the game.", answer: "because" },
        { sentence: "It was cold ___ we wore coats.", answer: "so" },
        { sentence: "You can read ___ watch TV.", answer: "or" },
        { sentence: "He wanted to go out ___ it was raining.", answer: "but" },
        { sentence: "She ran fast ___ she could catch the ball.", answer: "so" },
        { sentence: "We went to the park ___ played soccer ___ ate ice cream.", answer: "and" },
        { sentence: "I don't like math ___ I do like science.", answer: "but" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(conjunctionExamples, rng);
        q.push(createTyping("pos_g2", "conjunctions_g2",
          `Complete: "${data.sentence}"`, data.answer));
      }
      return q;
    },
    word_families_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const familyData = [
        { root: "play", words: ["play", "plays", "playing", "played", "player"] },
        { root: "walk", words: ["walk", "walks", "walking", "walked", "walker"] },
        { root: "run", words: ["run", "runs", "running", "ran", "runner"] },
        { root: "jump", words: ["jump", "jumps", "jumping", "jumped", "jumper"] },
        { root: "teach", words: ["teach", "teaches", "teaching", "taught", "teacher"] },
        { root: "build", words: ["build", "builds", "building", "built", "builder"] },
        { root: "write", words: ["write", "writes", "writing", "wrote", "writer"] },
        { root: "sing", words: ["sing", "sings", "singing", "sang", "singer"] },
      ];
      for (let i = 0; i < 20; i++) {
        const family = pick(familyData, rng);
        const word = pick(family.words, rng);
        const others = family.words.filter(w => w !== word);
        const wrong = shuffle(others, rng).slice(0, 3);
        q.push(createMCQ("pos_g2", "word_families_g2",
          `Which word is in the family of '${family.root}'?`, pick(others, rng), wrong));
      }
      return q;
    },
    word_families_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const familyData = [
        { root: "play", examples: ["play", "playing", "played", "player"] },
        { root: "walk", examples: ["walk", "walking", "walked", "walker"] },
        { root: "run", examples: ["run", "running", "ran", "runner"] },
        { root: "jump", examples: ["jump", "jumping", "jumped", "jumper"] },
        { root: "teach", examples: ["teach", "teaching", "taught", "teacher"] },
        { root: "build", examples: ["build", "building", "built", "builder"] },
        { root: "write", examples: ["write", "writing", "wrote", "writer"] },
        { root: "sing", examples: ["sing", "singing", "sang", "singer"] },
      ];
      for (let i = 0; i < 15; i++) {
        const family = pick(familyData, rng);
        const clue = pick(family.examples, rng);
        q.push(createTyping("pos_g2", "word_families_g2",
          `Name another form in the word family of '${family.root}':`, pick(family.examples, rng)));
      }
      return q;
    },
    sentence_order_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { words: ["happy", "is", "She"], correct: "She is happy", wrong: ["Is happy she", "Happy she is", "She happy is"] },
        { words: ["to", "likes", "He", "read"], correct: "He likes to read", wrong: ["He to read likes", "Likes he to read", "To read he likes"] },
        { words: ["school", "go", "We", "to"], correct: "We go to school", wrong: ["Go we to school", "School we go to", "To school we go"] },
        { words: ["cat", "a", "have", "I"], correct: "I have a cat", wrong: ["Have I a cat", "A cat I have", "I cat have a"] },
        { words: ["pizza", "likes", "Tom", "eating"], correct: "Tom likes eating pizza", wrong: ["Eating likes Tom pizza", "Likes Tom eating pizza", "Tom eating pizza likes"] },
        { words: ["run", "can", "fast", "Dogs"], correct: "Dogs can run fast", wrong: ["Can dogs run fast", "Run can dogs fast", "Dogs fast run can"] },
        { words: ["beautiful", "is", "day", "The"], correct: "The day is beautiful", wrong: ["Is the day beautiful", "Beautiful the day is", "The is day beautiful"] },
        { words: ["swimming", "like", "They", "pool", "the", "in"], correct: "They like swimming in the pool", wrong: ["Like they swimming pool in the", "They pool like swimming in the", "In the pool they like swimming"] },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(sentenceData, rng);
        q.push(createMCQ("pos_g2", "sentence_order_g2",
          `Which word order is CORRECT?`, data.correct, data.wrong));
      }
      return q;
    },
    sentence_order_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { scrambled: "happy / is / She", correct: "She is happy" },
        { scrambled: "read / to / likes / He", correct: "He likes to read" },
        { scrambled: "school / to / go / We", correct: "We go to school" },
        { scrambled: "cat / a / have / I", correct: "I have a cat" },
        { scrambled: "pizza / eating / likes / Tom", correct: "Tom likes eating pizza" },
        { scrambled: "fast / run / can / Dogs", correct: "Dogs can run fast" },
        { scrambled: "beautiful / is / day / The", correct: "The day is beautiful" },
        { scrambled: "pool / the / in / swimming / like / They", correct: "They like swimming in the pool" },
        { scrambled: "morning / go / I / school / to / every", correct: "I go to school every morning" },
        { scrambled: "likes / basketball / play / He / to", correct: "He likes to play basketball" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(sentenceData, rng);
        q.push(createTyping("pos_g2", "sentence_order_g2",
          `Put in correct order: "${data.scrambled}"`, data.correct));
      }
      return q;
    },
  },
  sentences_g2: {
    simple_compound_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { text: "I like cats.", type: "simple" },
        { text: "She plays soccer.", type: "simple" },
        { text: "The dog barked.", type: "simple" },
        { text: "He reads every day.", type: "simple" },
        { text: "My mom cooks dinner.", type: "simple" },
        { text: "The bird sings.", type: "simple" },
        { text: "I like cats, and she likes dogs.", type: "compound" },
        { text: "He can play guitar, but I play piano.", type: "compound" },
        { text: "We went to the park, so we had fun.", type: "compound" },
        { text: "She studied hard, and she passed the test.", type: "compound" },
        { text: "I was tired, but I kept running.", type: "compound" },
        { text: "He likes pizza, or he likes pasta.", type: "compound" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(2, rng)) {
          const sentSet = pick(sentenceData, rng);
          const wrong = [
            sentSet.type === "simple" ? "compound" : "simple",
            "fragment",
            "run-on",
          ];
          q.push(createMCQ("sentences_g2", "simple_compound_g2",
            `Is this a SIMPLE or COMPOUND sentence? "${sentSet.text}"`, sentSet.type, wrong));
        } else {
          const sentSet = pick(sentenceData, rng);
          q.push(createTyping("sentences_g2", "simple_compound_g2",
            `Is this simple or compound? "${sentSet.text}"`, sentSet.type));
        }
      }
      return q;
    },
    expanding_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const expandData = [
        {
          basic: "The dog ran.",
          expanded: "The big brown dog ran quickly across the yard.",
          wrong: ["Dog.", "The dog.", "Ran fast."],
        },
        {
          basic: "A bird sang.",
          expanded: "A beautiful little bird sang sweetly in the tall tree.",
          wrong: ["Bird.", "A bird.", "Sang a song."],
        },
        {
          basic: "The cat slept.",
          expanded: "The fluffy gray cat slept peacefully on the warm couch.",
          wrong: ["Cat.", "The cat.", "Slept all day."],
        },
        {
          basic: "She read.",
          expanded: "She read an exciting adventure book in her cozy room.",
          wrong: ["Read.", "She read.", "Reading books."],
        },
        {
          basic: "The boy played.",
          expanded: "The happy young boy played loudly in the sunny park.",
          wrong: ["Boy.", "The boy.", "Playing fun."],
        },
        {
          basic: "It rained.",
          expanded: "It rained heavily all afternoon during the dark storm.",
          wrong: ["Rain.", "It rained.", "Raining hard."],
        },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(expandData, rng);
        if (isMCQ(2, rng)) {
          q.push(createMCQ("sentences_g2", "expanding_g2",
            `Which sentence is the MOST expanded (most descriptive) version of "${data.basic}"?`,
            data.expanded, [data.basic, ...data.wrong.slice(0, 2)]));
        } else {
          q.push(createTyping("sentences_g2", "expanding_g2",
            `Add details to expand this sentence: "${data.basic}" (write a longer version)`,
            data.expanded));
        }
      }
      return q;
    },
  },
  spelling_g2: {
    vowel_patterns_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const longVowels: [string, string][] = [
        ["a", "cake"], ["a", "lake"], ["a", "make"], ["a", "take"], ["a", "gate"], ["a", "name"],
        ["e", "feet"], ["e", "meet"], ["e", "need"], ["e", "keep"], ["e", "see"], ["e", "tree"],
        ["i", "bike"], ["i", "kite"], ["i", "five"], ["i", "mine"], ["i", "time"], ["i", "nice"],
        ["o", "home"], ["o", "bone"], ["o", "rope"], ["o", "nose"], ["o", "code"], ["o", "rose"],
        ["u", "cute"], ["u", "blue"], ["u", "tube"], ["u", "mule"], ["u", "huge"], ["u", "rule"],
      ];
      const shortVowels: [string, string][] = [
        ["a", "cat"], ["a", "hat"], ["a", "bat"], ["a", "man"], ["a", "bag"], ["a", "map"],
        ["e", "pet"], ["e", "bed"], ["e", "red"], ["e", "wet"], ["e", "egg"], ["e", "leg"],
        ["i", "sit"], ["i", "pig"], ["i", "bin"], ["i", "big"], ["i", "fit"], ["i", "win"],
        ["o", "dog"], ["o", "log"], ["o", "top"], ["o", "hot"], ["o", "pot"], ["o", "box"],
        ["u", "cup"], ["u", "sun"], ["u", "fun"], ["u", "bus"], ["u", "hut"], ["u", "run"],
      ];
      for (let i = 0; i < 30; i++) {
        const isLong = rng() > 0.5;
        const vowel = pick(["a", "e", "i", "o", "u"], rng);
        const matchingLong = longVowels.filter(v => v[0] === vowel);
        const matchingShort = shortVowels.filter(v => v[0] === vowel);
        const correct = pick(isLong ? matchingLong : matchingShort, rng);
        const wrongPool = (isLong ? matchingShort : matchingLong);
        const wrong = shuffle(wrongPool, rng).map(w => w[1]).slice(0, 3);
        if (isMCQ(2, rng)) {
          q.push(createMCQ("spelling_g2", "vowel_patterns_g2",
            `Which word has a ${isLong ? "LONG" : "SHORT"} '${vowel}' sound?`, correct[1], wrong));
        } else {
          q.push(createTyping("spelling_g2", "vowel_patterns_g2",
            `Name a word with a ${isLong ? "LONG" : "SHORT"} '${vowel}' sound:`, correct[1]));
        }
      }
      return q;
    },
    vowel_teams_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const teamData = [
        { team: "ai", words: ["rain", "main", "pain", "wait", "tail", "mail", "sail", "train", "brain", "gain"] },
        { team: "ea", words: ["beat", "meat", "seat", "read", "team", "clean", "dream", "stream", "bean", "mean"] },
        { team: "oa", words: ["boat", "coat", "goat", "road", "load", "soap", "toast", "float", "cloak", "groan"] },
        { team: "oo", words: ["moon", "food", "cool", "pool", "room", "tool", "school", "spoon", "book", "look"] },
        { team: "ee", words: ["tree", "free", "deep", "keep", "sleep", "feet", "need", "seed", "week", "seek"] },
        { team: "ou", words: ["out", "loud", "cloud", "house", "mouse", "found", "round", "sound", "about", "count"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(teamData, rng);
        const word = pick(data.words, rng);
        const allTeams = teamData.map(t => t.team);
        const wrong = allTeams.filter(t => t !== data.team).slice(0, 3);
        if (isMCQ(2, rng)) {
          q.push(createMCQ("spelling_g2", "vowel_teams_g2",
            `What VOWEL TEAM do you see in '${word}'?`, data.team, wrong));
        } else {
          q.push(createTyping("spelling_g2", "vowel_teams_g2",
            `What vowel team is in the word '${word}'?`, data.team));
        }
      }
      return q;
    },
    prefixes_suffixes_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const prefixData = [
        { prefix: "un-", meaning: "not", words: ["unhappy", "unfair", "unkind", "unlock", "untie", "unable"] },
        { prefix: "re-", meaning: "again", words: ["redo", "retake", "remake", "refill", "rerun", "rewrite"] },
        { prefix: "pre-", meaning: "before", words: ["preview", "preheat", "prepay", "preschool", "pretest"] },
        { prefix: "dis-", meaning: "not / opposite", words: ["dislike", "disagree", "disappear", "disconnect"] },
      ];
      const suffixData = [
        { suffix: "-ful", meaning: "full of", words: ["helpful", "cheerful", "hopeful", "thankful", "careful", "beautiful"] },
        { suffix: "-less", meaning: "without", words: ["helpless", "careless", "hopeless", "fearless", "useless"] },
        { suffix: "-er", meaning: "one who / more", words: ["teacher", "singer", "taller", "faster", "bigger"] },
        { suffix: "-est", meaning: "most", words: ["tallest", "fastest", "biggest", "smartest", "loudest"] },
        { suffix: "-ly", meaning: "in a way", words: ["quickly", "slowly", "happily", "sadly", "loudly"] },
      ];
      for (let i = 0; i < 30; i++) {
        const isPrefix = rng() > 0.5;
        if (isMCQ(2, rng)) {
          if (isPrefix) {
            const data = pick(prefixData, rng);
            const wrong = prefixData.filter(p => p.meaning !== data.meaning).map(p => p.meaning);
            wrong.push("after");
            q.push(createMCQ("spelling_g2", "prefixes_suffixes_g2",
              `What does the prefix '${data.prefix}' mean in '${pick(data.words, rng)}'?`,
              data.meaning, wrong.slice(0, 3)));
          } else {
            const data = pick(suffixData, rng);
            const wrong = suffixData.filter(s => s.meaning !== data.meaning).map(s => s.meaning);
            q.push(createMCQ("spelling_g2", "prefixes_suffixes_g2",
              `What does the suffix '${data.suffix}' mean in '${pick(data.words, rng)}'?`,
              data.meaning, wrong.slice(0, 3)));
          }
        } else {
          if (isPrefix) {
            const data = pick(prefixData, rng);
            q.push(createTyping("spelling_g2", "prefixes_suffixes_g2",
              `What does the prefix '${data.prefix}' mean?`, data.meaning));
          } else {
            const data = pick(suffixData, rng);
            q.push(createTyping("spelling_g2", "prefixes_suffixes_g2",
              `What does the suffix '${data.suffix}' mean?`, data.meaning));
          }
        }
      }
      return q;
    },
    irregular_spelling_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const spellingData = [
        { misspelled: "frend", correct: "friend", sentence: "My frend came to visit." },
        { misspelled: "sed", correct: "said", sentence: "She sed hello to me." },
        { misspelled: "becuz", correct: "because", sentence: "I stayed home becuz it rained." },
        { misspelled: "peple", correct: "people", sentence: "Many peple were at the park." },
        { misspelled: "enuf", correct: "enough", sentence: "I have enuf food." },
        { misspelled: "wuz", correct: "was", sentence: "She wuz very happy." },
        { misspelled: "cud", correct: "could", sentence: "He cud run fast." },
        { misspelled: "thay", correct: "they", sentence: "Thay went to school." },
        { misspelled: "agen", correct: "again", sentence: "Do it agen please." },
        { misspelled: "buzy", correct: "busy", sentence: "She is very buzy today." },
        { misspelled: "erly", correct: "early", sentence: "We woke up erly." },
        { misspelled: "evry", correct: "every", sentence: "Evry student passed the test." },
        { misspelled: "nite", correct: "night", sentence: "Good nite, sleep well." },
        { misspelled: "anser", correct: "answer", sentence: "Write your anser here." },
        { misspelled: "bild", correct: "build", sentence: "Let's bild a house." },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(spellingData, rng);
        if (isMCQ(2, rng)) {
          const wrong = shuffle(spellingData, rng)
            .filter(d => d.correct !== data.correct)
            .map(d => d.misspelled)
            .slice(0, 3);
          q.push(createMCQ("spelling_g2", "irregular_spelling_g2",
            `Which is the CORRECT spelling? The sentence says: "${data.sentence}"`,
            data.correct, wrong));
        } else {
          q.push(createTyping("spelling_g2", "irregular_spelling_g2",
            `Correct the underlined misspelling: "${data.sentence}"`, data.correct));
        }
      }
      return q;
    },
  },
  vocab_g2: {
    shades_of_meaning_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const shadesData = [
        { words: ["annoyed", "angry", "furious"], strongest: "furious", weakest: "annoyed", category: "anger" },
        { words: ["happy", "glad", "overjoyed"], strongest: "overjoyed", weakest: "glad", category: "happiness" },
        { words: ["toss", "throw", "hurl"], strongest: "hurl", weakest: "toss", category: "throwing" },
        { words: ["walk", "jog", "sprint"], strongest: "sprint", weakest: "walk", category: "moving" },
        { words: ["chilly", "cold", "freezing"], strongest: "freezing", weakest: "chilly", category: "cold" },
        { words: ["warm", "hot", "boiling"], strongest: "boiling", weakest: "warm", category: "heat" },
        { words: ["like", "love", "adore"], strongest: "adore", weakest: "like", category: "liking" },
        { words: ["sad", "unhappy", "devastated"], strongest: "devastated", weakest: "sad", category: "sadness" },
        { words: ["big", "large", "enormous"], strongest: "enormous", weakest: "big", category: "size" },
        { words: ["small", "tiny", "microscopic"], strongest: "microscopic", weakest: "small", category: "smallness" },
        { words: ["scared", "afraid", "terrified"], strongest: "terrified", weakest: "scared", category: "fear" },
        { words: ["tired", "exhausted", "drained"], strongest: "drained", weakest: "tired", category: "tiredness" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(shadesData, rng);
        const askStrongest = rng() > 0.5;
        if (isMCQ(2, rng)) {
          if (askStrongest) {
            const wrong = data.words.filter(w => w !== data.strongest);
            wrong.push("okay");
            q.push(createMCQ("vocab_g2", "shades_of_meaning_g2",
              `Which word has the STRONGEST meaning?`, data.strongest, wrong.slice(0, 3)));
          } else {
            const wrong = data.words.filter(w => w !== data.weakest);
            wrong.push("extremely");
            q.push(createMCQ("vocab_g2", "shades_of_meaning_g2",
              `Which word has the WEAKEST meaning?`, data.weakest, wrong.slice(0, 3)));
          }
        } else {
          if (askStrongest) {
            q.push(createTyping("vocab_g2", "shades_of_meaning_g2",
              `Which word means the MOST? ${data.words.join(", ")}`, data.strongest));
          } else {
            q.push(createTyping("vocab_g2", "shades_of_meaning_g2",
              `Which word means the LEAST? ${data.words.join(", ")}`, data.weakest));
          }
        }
      }
      return q;
    },
    context_clues_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "The ancient ruins were very old and crumbling.", word: "ancient", answer: "very old", wrong: ["very new", "very big", "very far"] },
        { sentence: "She spoke in a loud, thunderous voice that shook the room.", word: "thunderous", answer: "very loud", wrong: ["very soft", "very high", "very strange"] },
        { sentence: "The swift rabbit raced past the slow turtle.", word: "swift", answer: "fast", wrong: ["strong", "tall", "slow"] },
        { sentence: "He is a loyal friend who is always there when I need him.", word: "loyal", answer: "faithful and true", wrong: ["funny", "smart", "rich"] },
        { sentence: "Water was scarce in the desert because it rarely rained.", word: "scarce", answer: "rare and hard to find", wrong: ["common and easy", "expensive", "valuable"] },
        { sentence: "She felt elated when she won first place in the contest.", word: "elated", answer: "very happy", wrong: ["very sad", "very tired", "very scared"] },
        { sentence: "The timid kitten hid under the bed when the doorbell rang.", word: "timid", answer: "shy and fearful", wrong: ["brave", "angry", "playful"] },
        { sentence: "The enormous elephant towered over all the other animals.", word: "enormous", answer: "very large", wrong: ["very small", "very fast", "very light"] },
        { sentence: "She was famished after not eating all day.", word: "famished", answer: "very hungry", wrong: ["very tired", "very happy", "very cold"] },
        { sentence: "The gloomy sky was dark and gray before the storm.", word: "gloomy", answer: "dark and sad", wrong: ["bright and sunny", "warm", "colorful"] },
        { sentence: "The fragile glass broke when it fell on the floor.", word: "fragile", answer: "breaks easily", wrong: ["unbreakable", "heavy", "clear"] },
        { sentence: "His modest house was small but cozy.", word: "modest", answer: "not large or fancy", wrong: ["huge", "expensive", "empty"] },
        { sentence: "The vivid colors in the painting were very bright and striking.", word: "vivid", answer: "bright and clear", wrong: ["dull", "dark", "plain"] },
        { sentence: "She had a grave expression on her face during the serious meeting.", word: "grave", answer: "serious and solemn", wrong: ["happy", "excited", "confused"] },
        { sentence: "The stale bread had been sitting on the counter for days.", word: "stale", answer: "old and not fresh", wrong: ["new", "fresh", "soft"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(sentenceData, rng);
        if (isMCQ(2, rng)) {
          q.push(createMCQ("vocab_g2", "context_clues_g2",
            `"${data.sentence}" What does '${data.word}' mean?`, data.answer, data.wrong));
        } else {
          q.push(createTyping("vocab_g2", "context_clues_g2",
            `"${data.sentence}" What does '${data.word}' mean?`, data.answer));
        }
      }
      return q;
    },
    dictionary_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordData = [
        { word: "bat", def1: "a stick used to hit a ball", def2: "a flying animal that comes out at night" },
        { word: "bank", def1: "a place to keep money safe", def2: "the land along the side of a river" },
        { word: "jam", def1: "a sweet spread made from fruit", def2: "to push or squeeze tightly" },
        { word: "ring", def1: "jewelry worn on a finger", def2: "the sound a bell makes" },
        { word: "fall", def1: "to drop down to the ground", def2: "the season after summer" },
        { word: "light", def1: "not heavy", def2: "brightness from the sun or a lamp" },
        { word: "bark", def1: "the outer cover of a tree", def2: "the sound a dog makes" },
        { word: "play", def1: "to have fun doing an activity", def2: "a show performed on a stage" },
        { word: "spring", def1: "the season after winter", def2: "a coil of metal that bounces" },
        { word: "letter", def1: "a written message", def2: "a symbol in the alphabet" },
        { word: "date", def1: "a day on the calendar", def2: "time spent together" },
        { word: "file", def1: "a tool for smoothing", def2: "documents or records" },
      ];
      const abcOrderData = [
        { words: ["apple", "banana", "cherry"], first: "apple", question: "Which word comes FIRST in the dictionary?" },
        { words: ["dog", "cat", "bird"], first: "bird", question: "Which word comes FIRST in the dictionary?" },
        { words: ["zoo", "yard", "xray"], first: "xray", question: "Which word comes FIRST in the dictionary?" },
        { words: ["milk", "money", "map"], first: "map", question: "Which word comes FIRST in the dictionary?" },
        { words: ["sun", "star", "sky"], first: "sky", question: "Which word comes FIRST in the dictionary?" },
        { words: ["lion", "lamp", "leaf"], first: "lamp", question: "Which word comes FIRST in the dictionary?" },
        { words: ["jump", "jelly", "jet"], first: "jelly", question: "Which word comes FIRST in the dictionary?" },
        { words: ["turtle", "time", "tiger"], first: "tiger", question: "Which word comes FIRST in the dictionary?" },
        { words: ["pen", "pig", "park"], first: "park", question: "Which word comes FIRST in the dictionary?" },
      ];
      for (let i = 0; i < 30; i++) {
        const qType = rng();
        if (isMCQ(2, rng)) {
          if (qType < 0.4) {
            // Multiple meanings
            const data = pick(wordData, rng);
            const wrongDefs = wordData.filter(w => w.word !== data.word).map(w => w.def1).slice(0, 3);
            q.push(createMCQ("vocab_g2", "dictionary_g2",
              `The word '${data.word}' has more than one meaning. Which is one of them?`,
              data.def1, wrongDefs));
          } else if (qType < 0.7) {
            // ABC order
            const data = pick(abcOrderData, rng);
            const wrong = data.words.filter(w => w !== data.first);
            wrong.push("zzz");
            q.push(createMCQ("vocab_g2", "dictionary_g2",
              `${data.question} ${data.words.join(", ")}`, data.first, wrong.slice(0, 3)));
          } else {
            // Guide words
            const data = pick(wordData, rng);
            q.push(createMCQ("vocab_g2", "dictionary_g2",
              `How many different meanings does '${data.word}' have?`,
              "2 or more", ["exactly 1", "none", "only letters"]));
          }
        } else {
          if (qType < 0.5) {
            const data = pick(wordData, rng);
            q.push(createTyping("vocab_g2", "dictionary_g2",
              `Name one meaning of the word '${data.word}':`, [data.def1, data.def2]));
          } else {
            const data = pick(abcOrderData, rng);
            q.push(createTyping("vocab_g2", "dictionary_g2",
              `Which word comes first in ABC order: ${data.words.join(", ")}?`, data.first));
          }
        }
      }
      return q;
    },
    rhyming_words_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rhymeData = [
        { word: "cat", rhymes: ["bat", "hat", "mat", "rat", "fat", "sat", "pat"] },
        { word: "dog", rhymes: ["log", "fog", "hog", "jog", "bog", "cog"] },
        { word: "tree", rhymes: ["bee", "see", "free", "tea", "sea", "me", "we", "key"] },
        { word: "play", rhymes: ["day", "way", "say", "ray", "pay", "lay", "bay", "may", "stay"] },
        { word: "blue", rhymes: ["true", "glue", "new", "flew", "grew", "knew", "shoe", "two"] },
        { word: "light", rhymes: ["night", "might", "fight", "right", "sight", "bright", "flight", "tight"] },
        { word: "moon", rhymes: ["soon", "spoon", "noon", "June", "balloon", "cartoon", "tune"] },
        { word: "hand", rhymes: ["sand", "land", "band", "stand", "grand", "brand", "strand"] },
        { word: "rain", rhymes: ["brain", "train", "main", "pain", "gain", "chain"] },
        { word: "bear", rhymes: ["care", "share", "fair", "hair", "pair", "square"] },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(rhymeData, rng);
        q.push(createTyping("vocab_g2", "rhyming_words_g2",
          `Write a word that rhymes with '${data.word}':`, pick(data.rhymes, rng)));
      }
      return q;
    },
    word_families_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const familyData = [
        { root: "play", words: ["play", "player", "played", "playing", "playtime"] },
        { root: "read", words: ["read", "reader", "reading", "reads"] },
        { root: "walk", words: ["walk", "walker", "walked", "walking", "walks"] },
        { root: "jump", words: ["jump", "jumper", "jumped", "jumping", "jumps"] },
        { root: "sing", words: ["sing", "singer", "sang", "singing", "sings"] },
        { root: "run", words: ["run", "runner", "ran", "running", "runs"] },
        { root: "help", words: ["help", "helper", "helped", "helping", "helpful", "helps"] },
        { root: "farm", words: ["farm", "farmer", "farmed", "farming", "farms"] },
      ];
      for (let i = 0; i < 20; i++) {
        const family = pick(familyData, rng);
        const word = pick(family.words, rng);
        const others = family.words.filter(w => w !== word);
        q.push(createTyping("vocab_g2", "word_families_g2",
          `Name another word in the family of '${family.root}':`, pick(others, rng)));
      }
      return q;
    },
    sentence_completion_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "The cat is sleeping on the ___.", answer: "bed" },
        { sentence: "I like to eat ___ for breakfast.", answer: "eggs" },
        { sentence: "The sky is ___ on a sunny day.", answer: "blue" },
        { sentence: "My ___ is my best friend.", answer: "friend" },
        { sentence: "I like to play in the ___.", answer: "park" },
        { sentence: "The ___ is hot in summer.", answer: "sun" },
        { sentence: "I read a ___ at night.", answer: "book" },
        { sentence: "The dog likes to chase a ___.", answer: "ball" },
        { sentence: "I like to go to ___ every day.", answer: "school" },
        { sentence: "My favorite color is ___.", answer: "blue" },
        { sentence: "I wear ___ on my feet.", answer: "shoes" },
        { sentence: "The ___ is a wild animal.", answer: "lion" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(sentenceData, rng);
        q.push(createTyping("sentences_g2", "sentence_completion_g2",
          `Complete the sentence: "${data.sentence}"`, data.answer));
      }
      return q;
    },
    clothing_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const clothingItems = ["shirt", "pants", "shoes", "hat", "dress", "jacket", "socks", "shorts", "coat", "gloves", "scarf", "boots"];
      const wrongItems = ["bed", "chair", "table", "tree", "dog", "car", "house", "book", "apple", "water"];
      for (let i = 0; i < 20; i++) {
        const item = pick(clothingItems, rng);
        const wrong = shuffle(wrongItems, rng).slice(0, 3);
        q.push(createMCQ("vocab_g2", "clothing_g2", `Which is a piece of clothing?`, item, wrong));
      }
      return q;
    },
    clothing_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const clothingClues = [
        { clue: "You wear this on your feet", answer: "shoes" },
        { clue: "You wear this on your head", answer: "hat" },
        { clue: "You wear this on your hands when it's cold", answer: "gloves" },
        { clue: "Girls wear this dress-like garment", answer: "dress" },
        { clue: "You wear this to stay warm outside", answer: "coat" },
        { clue: "Boys wear this below the waist", answer: "pants" },
        { clue: "You wear this on your body", answer: "shirt" },
        { clue: "You wear these on your feet for warmth", answer: "boots" },
        { clue: "You wear this around your neck when it's cold", answer: "scarf" },
        { clue: "You wear these on your feet under shoes", answer: "socks" },
        { clue: "You wear this sleeveless over a shirt", answer: "vest" },
        { clue: "Short pants you wear in summer", answer: "shorts" },
      ];
      for (let i = 0; i < 15; i++) {
        const clue = pick(clothingClues, rng);
        q.push(createTyping("vocab_g2", "clothing_g2", clue.clue + ":", clue.answer));
      }
      return q;
    },
    weather_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const weatherClues = [
        { clue: "When the sun shines and there are no clouds", answer: "sunny" },
        { clue: "When water falls from the sky", answer: "rainy" },
        { clue: "When the sky is covered with clouds", answer: "cloudy" },
        { clue: "When frozen rain falls from the sky", answer: "snowy" },
        { clue: "When the air moves fast around us", answer: "windy" },
        { clue: "When the air is very hot", answer: "hot" },
        { clue: "When the air is very cold", answer: "cold" },
        { clue: "When there is a strong, dangerous windstorm", answer: "stormy" },
        { clue: "When ice forms on ground and grass", answer: "frosty" },
        { clue: "When there is fog or mist in the air", answer: "foggy" },
      ];
      const wrongItems = ["happy", "fast", "blue", "tall", "small", "loud", "soft", "clean"];
      for (let i = 0; i < 20; i++) {
        const clue = pick(weatherClues, rng);
        const wrong = shuffle(wrongItems, rng).slice(0, 3);
        q.push(createMCQ("vocab_g2", "weather_g2", clue.clue + ":", clue.answer, wrong));
      }
      return q;
    },
    weather_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const weatherClues = [
        { clue: "The sun is shining", answer: "sunny" },
        { clue: "Water is falling from the sky", answer: "rainy" },
        { clue: "The sky is covered with clouds", answer: "cloudy" },
        { clue: "Snow is falling", answer: "snowy" },
        { clue: "The wind is blowing hard", answer: "windy" },
        { clue: "The temperature is very high", answer: "hot" },
        { clue: "The temperature is very low", answer: "cold" },
        { clue: "There is a dangerous storm", answer: "stormy" },
        { clue: "Ice forms in the morning", answer: "frosty" },
        { clue: "You cannot see far because of mist", answer: "foggy" },
      ];
      for (let i = 0; i < 15; i++) {
        const clue = pick(weatherClues, rng);
        q.push(createTyping("vocab_g2", "weather_g2", clue.clue + ":", clue.answer));
      }
      return q;
    },
    seasons_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const seasonData = [
        { season: "spring", characteristics: "flowers bloom, warm weather", clue: "Season when flowers bloom and weather gets warm" },
        { season: "summer", characteristics: "hot, sunny, school is off", clue: "Hottest season when school is off" },
        { season: "fall", characteristics: "leaves change, harvest", clue: "Season when leaves change color and it gets cooler" },
        { season: "winter", characteristics: "cold, snowy, Christmas", clue: "Coldest season with snow and ice" },
      ];
      const wrongSeasons = ["month", "day", "week", "year", "time", "hour"];
      for (let i = 0; i < 20; i++) {
        const data = pick(seasonData, rng);
        const wrong = shuffle(wrongSeasons, rng).slice(0, 3);
        q.push(createMCQ("vocab_g2", "seasons_g2", data.clue + ":", data.season, wrong));
      }
      return q;
    },
    seasons_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const seasonClues = [
        { clue: "Season when flowers bloom and weather gets warm", answer: "spring" },
        { clue: "Hottest season when school is off", answer: "summer" },
        { clue: "Season when leaves change color and fall down", answer: "fall" },
        { clue: "Coldest season with snow and ice", answer: "winter" },
        { clue: "Season for picking crops", answer: "harvest" },
        { clue: "Season for Christmas holidays", answer: "winter" },
        { clue: "Season when you go swimming", answer: "summer" },
        { clue: "Season when you wear shorts and t-shirts", answer: "summer" },
      ];
      for (let i = 0; i < 15; i++) {
        const clue = pick(seasonClues, rng);
        q.push(createTyping("vocab_g2", "seasons_g2", clue.clue + ":", clue.answer));
      }
      return q;
    },
    time_of_day_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const timeClues = [
        { time: "morning", clue: "Time when you wake up and the sun rises" },
        { time: "afternoon", clue: "Time after lunch and before evening" },
        { time: "evening", clue: "Time when it gets dark and the sun goes down" },
        { time: "night", clue: "Time when it is dark and people sleep" },
        { time: "midnight", clue: "12 o'clock at night" },
        { time: "noon", clue: "12 o'clock during the day" },
        { time: "sunrise", clue: "Time when the sun comes up" },
        { time: "sunset", clue: "Time when the sun goes down" },
      ];
      const wrongTimes = ["school", "play", "eat", "book", "park", "home"];
      for (let i = 0; i < 20; i++) {
        const data = pick(timeClues, rng);
        const wrong = shuffle(wrongTimes, rng).slice(0, 3);
        q.push(createMCQ("vocab_g2", "time_of_day_g2", data.clue + ":", data.time, wrong));
      }
      return q;
    },
    time_of_day_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const timeClues = [
        { clue: "Time when you wake up and get breakfast", answer: "morning" },
        { clue: "Time after lunch", answer: "afternoon" },
        { clue: "Time when the sun goes down", answer: "evening" },
        { clue: "Time when you sleep", answer: "night" },
        { clue: "12 o'clock during the day", answer: "noon" },
        { clue: "12 o'clock at night", answer: "midnight" },
        { clue: "When the sun comes up", answer: "sunrise" },
        { clue: "When the sun goes down", answer: "sunset" },
      ];
      for (let i = 0; i < 15; i++) {
        const clue = pick(timeClues, rng);
        q.push(createTyping("vocab_g2", "time_of_day_g2", clue.clue + ":", clue.answer));
      }
      return q;
    },
    jobs_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const jobClues = [
        { job: "teacher", clue: "Person who teaches students in school" },
        { job: "doctor", clue: "Person who helps sick people feel better" },
        { job: "firefighter", clue: "Person who puts out fires" },
        { job: "farmer", clue: "Person who grows crops and raises animals" },
        { job: "nurse", clue: "Person who helps the doctor in the hospital" },
        { job: "chef", clue: "Person who cooks food in a restaurant" },
        { job: "pilot", clue: "Person who flies an airplane" },
        { job: "police officer", clue: "Person who keeps people safe" },
        { job: "dentist", clue: "Person who takes care of your teeth" },
        { job: "carpenter", clue: "Person who builds things from wood" },
      ];
      const wrongJobs = ["student", "friend", "family", "parent"];
      for (let i = 0; i < 20; i++) {
        const data = pick(jobClues, rng);
        const wrong = shuffle(wrongJobs, rng).slice(0, 3);
        q.push(createMCQ("vocab_g2", "jobs_g2", data.clue + ":", data.job, wrong));
      }
      return q;
    },
    jobs_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const jobClues = [
        { clue: "Person who teaches in a school", answer: "teacher" },
        { clue: "Person who helps sick people", answer: "doctor" },
        { clue: "Person who puts out fires", answer: "firefighter" },
        { clue: "Person who grows food", answer: "farmer" },
        { clue: "Person who helps the doctor", answer: "nurse" },
        { clue: "Person who cooks food", answer: "chef" },
        { clue: "Person who flies planes", answer: "pilot" },
        { clue: "Person who keeps people safe", answer: "police officer" },
        { clue: "Person who fixes your teeth", answer: "dentist" },
        { clue: "Person who builds houses", answer: "carpenter" },
      ];
      for (let i = 0; i < 15; i++) {
        const clue = pick(jobClues, rng);
        q.push(createTyping("vocab_g2", "jobs_g2", clue.clue + ":", clue.answer));
      }
      return q;
    },
    opposites_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const oppositePairs = [
        { word: "hot", opposite: "cold" },
        { word: "big", opposite: "small" },
        { word: "fast", opposite: "slow" },
        { word: "happy", opposite: "sad" },
        { word: "loud", opposite: "quiet" },
        { word: "tall", opposite: "short" },
        { word: "clean", opposite: "dirty" },
        { word: "old", opposite: "new" },
        { word: "light", opposite: "dark" },
        { word: "wet", opposite: "dry" },
      ];
      const allOpposites = oppositePairs.map(p => p.opposite);
      for (let i = 0; i < 20; i++) {
        const pair = pick(oppositePairs, rng);
        const wrong = shuffle(allOpposites.filter(o => o !== pair.opposite), rng).slice(0, 3);
        q.push(createMCQ("vocab_g2", "opposites_g2", `What is the opposite of '${pair.word}'?`, pair.opposite, wrong));
      }
      return q;
    },
    opposites_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const oppositePairs = [
        { word: "hot", opposite: "cold" },
        { word: "big", opposite: "small" },
        { word: "fast", opposite: "slow" },
        { word: "happy", opposite: "sad" },
        { word: "loud", opposite: "quiet" },
        { word: "tall", opposite: "short" },
        { word: "clean", opposite: "dirty" },
        { word: "old", opposite: "new" },
        { word: "light", opposite: "dark" },
        { word: "wet", opposite: "dry" },
      ];
      for (let i = 0; i < 15; i++) {
        const pair = pick(oppositePairs, rng);
        q.push(createTyping("vocab_g2", "opposites_g2", `What is the opposite of '${pair.word}'?`, pair.opposite));
      }
      return q;
    },
    synonyms_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const synonymSets = [
        { word: "happy", synonyms: ["glad", "joyful", "cheerful"] },
        { word: "big", synonyms: ["large", "huge", "giant"] },
        { word: "fast", synonyms: ["quick", "speedy", "swift"] },
        { word: "smart", synonyms: ["clever", "intelligent", "bright"] },
        { word: "pretty", synonyms: ["beautiful", "lovely", "gorgeous"] },
        { word: "scared", synonyms: ["afraid", "frightened", "terrified"] },
        { word: "tired", synonyms: ["sleepy", "exhausted", "weary"] },
        { word: "angry", synonyms: ["mad", "furious", "upset"] },
      ];
      const wrongWords = ["cat", "run", "blue", "tree", "house", "book"];
      for (let i = 0; i < 20; i++) {
        const set = pick(synonymSets, rng);
        const synonym = pick(set.synonyms, rng);
        const wrong = shuffle(wrongWords, rng).slice(0, 3);
        q.push(createMCQ("vocab_g2", "synonyms_g2", `Which word means almost the same as '${set.word}'?`, synonym, wrong));
      }
      return q;
    },
    synonyms_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const synonymSets = [
        { word: "happy", synonyms: ["glad", "joyful", "cheerful"] },
        { word: "big", synonyms: ["large", "huge", "giant"] },
        { word: "fast", synonyms: ["quick", "speedy", "swift"] },
        { word: "smart", synonyms: ["clever", "intelligent", "bright"] },
        { word: "pretty", synonyms: ["beautiful", "lovely", "gorgeous"] },
        { word: "scared", synonyms: ["afraid", "frightened", "terrified"] },
        { word: "tired", synonyms: ["sleepy", "exhausted", "weary"] },
        { word: "angry", synonyms: ["mad", "furious", "upset"] },
      ];
      for (let i = 0; i < 15; i++) {
        const set = pick(synonymSets, rng);
        const synonym = pick(set.synonyms, rng);
        q.push(createTyping("vocab_g2", "synonyms_g2", `Write a word that means the same as '${set.word}':`, synonym));
      }
      return q;
    },
    locations_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const locationClues = [
        { location: "in", clue: "The cat is ___ the box." },
        { location: "on", clue: "The book is ___ the table." },
        { location: "under", clue: "The dog is ___ the bed." },
        { location: "next to", clue: "I sit ___ my friend at school." },
        { location: "behind", clue: "The tree is ___ the house." },
        { location: "in front of", clue: "The car is ___ the house." },
        { location: "between", clue: "The ball is ___ the two trees." },
        { location: "above", clue: "The bird is ___ the clouds." },
      ];
      const wrongLocations = ["play", "run", "fast", "blue", "big", "happy"];
      for (let i = 0; i < 20; i++) {
        const data = pick(locationClues, rng);
        const wrong = shuffle(wrongLocations, rng).slice(0, 3);
        q.push(createMCQ("vocab_g2", "locations_g2", `Complete: "${data.clue}"`, data.location, wrong));
      }
      return q;
    },
    locations_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const locationClues = [
        { clue: "The cat is ___ the box.", answer: "in" },
        { clue: "The book is ___ the table.", answer: "on" },
        { clue: "The dog is ___ the bed.", answer: "under" },
        { clue: "I sit ___ my friend.", answer: "next to" },
        { clue: "The tree is ___ the house.", answer: "behind" },
        { clue: "The car is ___ the house.", answer: "in front of" },
        { clue: "The ball is ___ the two trees.", answer: "between" },
        { clue: "The bird is ___ the clouds.", answer: "above" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(locationClues, rng);
        q.push(createTyping("vocab_g2", "locations_g2", `Complete: "${data.clue}"`, data.answer));
      }
      return q;
    },
    daily_routine_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const routineClues = [
        { activity: "wake up", clue: "Time to get out of bed in the morning" },
        { activity: "brush teeth", clue: "Clean your teeth with a toothbrush" },
        { activity: "eat breakfast", clue: "Eat food in the morning" },
        { activity: "go to school", clue: "Travel to where you learn" },
        { activity: "study", clue: "Learn new things in class" },
        { activity: "eat lunch", clue: "Eat food at noon" },
        { activity: "play", clue: "Have fun doing an activity" },
        { activity: "eat dinner", clue: "Eat food in the evening" },
        { activity: "do homework", clue: "Complete work from school at home" },
        { activity: "sleep", clue: "Rest at night" },
      ];
      const wrongActivities = ["rain", "car", "blue", "table", "tree", "book"];
      for (let i = 0; i < 20; i++) {
        const data = pick(routineClues, rng);
        const wrong = shuffle(wrongActivities, rng).slice(0, 3);
        q.push(createMCQ("vocab_g2", "daily_routine_g2", data.clue + ":", data.activity, wrong));
      }
      return q;
    },
    daily_routine_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const routineClues = [
        { clue: "Get out of bed in the morning", answer: "wake up" },
        { clue: "Clean your teeth", answer: "brush teeth" },
        { clue: "Eat food in the morning", answer: "eat breakfast" },
        { clue: "Go to where you learn", answer: "go to school" },
        { clue: "Learn new things", answer: "study" },
        { clue: "Eat food at noon", answer: "eat lunch" },
        { clue: "Have fun", answer: "play" },
        { clue: "Eat food in the evening", answer: "eat dinner" },
        { clue: "Complete school work at home", answer: "do homework" },
        { clue: "Rest with your eyes closed at night", answer: "sleep" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(routineClues, rng);
        q.push(createTyping("vocab_g2", "daily_routine_g2", data.clue + ":", data.answer));
      }
      return q;
    },
    house_rooms_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const roomClues = [
        { room: "kitchen", clue: "Place where you cook and eat food" },
        { room: "bedroom", clue: "Place where you sleep" },
        { room: "bathroom", clue: "Place where you take a shower and use the toilet" },
        { room: "living room", clue: "Place where the family sits together" },
        { room: "dining room", clue: "Place where you eat meals at a table" },
        { room: "hallway", clue: "Long passage that connects rooms" },
        { room: "garage", clue: "Place where you park a car" },
        { room: "basement", clue: "Room under the main floor of a house" },
      ];
      const wrongRooms = ["table", "window", "door", "tree", "car", "school"];
      for (let i = 0; i < 20; i++) {
        const data = pick(roomClues, rng);
        const wrong = shuffle(wrongRooms, rng).slice(0, 3);
        q.push(createMCQ("vocab_g2", "house_rooms_g2", data.clue + ":", data.room, wrong));
      }
      return q;
    },
    house_rooms_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const roomClues = [
        { clue: "Place where you cook", answer: "kitchen" },
        { clue: "Place where you sleep", answer: "bedroom" },
        { clue: "Place where you take a shower", answer: "bathroom" },
        { clue: "Place where the family sits together", answer: "living room" },
        { clue: "Place where you eat meals", answer: "dining room" },
        { clue: "Long passage in a house", answer: "hallway" },
        { clue: "Place where you park a car", answer: "garage" },
        { clue: "Room under the house", answer: "basement" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(roomClues, rng);
        q.push(createTyping("vocab_g2", "house_rooms_g2", data.clue + ":", data.answer));
      }
      return q;
    },
    hobbies_sports_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const hobbyClues = [
        { hobby: "reading", clue: "Looking at words and pictures in a book" },
        { hobby: "drawing", clue: "Making pictures with a pencil or crayon" },
        { hobby: "painting", clue: "Making pictures with paint and a brush" },
        { hobby: "singing", clue: "Making music with your voice" },
        { hobby: "dancing", clue: "Moving your body to music" },
        { hobby: "playing soccer", clue: "Sport where you kick a ball with teammates" },
        { hobby: "swimming", clue: "Moving through water for exercise" },
        { hobby: "riding a bike", clue: "Traveling on a bicycle" },
      ];
      const wrongHobbies = ["sleep", "eat", "school", "table", "blue", "fast"];
      for (let i = 0; i < 20; i++) {
        const data = pick(hobbyClues, rng);
        const wrong = shuffle(wrongHobbies, rng).slice(0, 3);
        q.push(createMCQ("vocab_g2", "hobbies_sports_g2", data.clue + ":", data.hobby, wrong));
      }
      return q;
    },
    hobbies_sports_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const hobbyClues = [
        { clue: "Looking at words in a book", answer: "reading" },
        { clue: "Making pictures with a pencil", answer: "drawing" },
        { clue: "Making pictures with paint", answer: "painting" },
        { clue: "Making music with your voice", answer: "singing" },
        { clue: "Moving to music", answer: "dancing" },
        { clue: "Sport with a ball and teammates", answer: "playing soccer" },
        { clue: "Moving through water", answer: "swimming" },
        { clue: "Traveling on two wheels", answer: "riding a bike" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(hobbyClues, rng);
        q.push(createTyping("vocab_g2", "hobbies_sports_g2", data.clue + ":", data.answer));
      }
      return q;
    },
    community_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const placeClues = [
        { place: "school", clue: "Place where you learn from teachers" },
        { place: "hospital", clue: "Place where doctors help sick people" },
        { place: "library", clue: "Place where you borrow books" },
        { place: "park", clue: "Place with grass, trees, and playground" },
        { place: "store", clue: "Place where you buy things" },
        { place: "church", clue: "Place of worship" },
        { place: "police station", clue: "Place where police officers work" },
        { place: "fire station", clue: "Place where firefighters work" },
      ];
      const wrongPlaces = ["car", "table", "flower", "pencil", "blue", "fast"];
      for (let i = 0; i < 20; i++) {
        const data = pick(placeClues, rng);
        const wrong = shuffle(wrongPlaces, rng).slice(0, 3);
        q.push(createMCQ("vocab_g2", "community_g2", data.clue + ":", data.place, wrong));
      }
      return q;
    },
    community_g2_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const placeClues = [
        { clue: "Place where you learn", answer: "school" },
        { clue: "Place where doctors help people", answer: "hospital" },
        { clue: "Place where you borrow books", answer: "library" },
        { clue: "Place with a playground", answer: "park" },
        { clue: "Place where you buy things", answer: "store" },
        { clue: "Place for religious services", answer: "church" },
        { clue: "Place where police officers work", answer: "police station" },
        { clue: "Place where firefighters work", answer: "fire station" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(placeClues, rng);
        q.push(createTyping("vocab_g2", "community_g2", data.clue + ":", data.answer));
      }
      return q;
    },
  },
};


// ─── GRADE 3 GENERATORS ───────────────────────────────────────────────────

export const G3_Generators = {
  pos_g3: {
    nouns_plural_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const regularPairs = [
        ["cat", "cats"], ["dog", "dogs"], ["box", "boxes"], ["bus", "buses"],
        ["glass", "glasses"], ["dish", "dishes"], ["wish", "wishes"], ["brush", "brushes"],
        ["pass", "passes"], ["patch", "patches"], ["bench", "benches"], ["church", "churches"],
        ["peach", "peaches"], ["beach", "beaches"], ["pitch", "pitches"],
        ["toy", "toys"], ["key", "keys"], ["baby", "babies"], ["city", "cities"],
        ["story", "stories"], ["leaf", "leaves"], ["knife", "knives"],
      ];
      const irregularPairs = [
        ["child", "children"], ["foot", "feet"], ["tooth", "teeth"], ["man", "men"],
        ["woman", "women"], ["mouse", "mice"], ["goose", "geese"], ["person", "people"],
        ["ox", "oxen"], ["sheep", "sheep"], ["fish", "fish"], ["deer", "deer"],
      ];
      const allPairs = [...regularPairs, ...irregularPairs];
      for (let i = 0; i < 30; i++) {
        const [sing, plur] = pick(allPairs, rng);
        if (isMCQ(3, rng)) {
          const wrong = allPairs.filter(p => p[0] !== sing).map(p => p[1]).slice(0, 3);
          q.push(createMCQ("pos_g3", "nouns_plural_g3", `What is the plural of '${sing}'?`, plur, wrong));
        } else {
          q.push(createTyping("pos_g3", "nouns_plural_g3", `Write the plural of '${sing}':`, plur));
        }
      }
      return q;
    },
    abstract_nouns_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const abstractNouns = ["love", "happiness", "courage", "friendship", "freedom", "beauty", "kindness", "honesty", "wisdom", "anger", "fear", "hope", "joy", "patience", "trust", "loyalty", "justice", "peace", "success", "growth", "pride", "sorrow", "excitement", "curiosity", "creativity", "bravery", "gratitude", "determination"];
      const concreteNouns = ["table", "dog", "book", "pencil", "flower", "car", "house", "ball", "chair", "tree", "rock", "apple", "desk", "phone", "door", "window", "lamp", "cup", "shoe", "hat", "shirt", "key", "bottle", "spoon", "clock", "blanket", "skateboard"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const abstract = pick(abstractNouns, rng);
          const wrong = shuffle(concreteNouns, rng).slice(0, 3);
          q.push(createMCQ("pos_g3", "abstract_nouns_g3",
            "Which is an ABSTRACT noun (something you cannot touch or see)?", abstract, wrong));
        } else {
          q.push(createTyping("pos_g3", "abstract_nouns_g3",
            "Name an abstract noun (an idea, feeling, or quality):", pick(abstractNouns, rng)));
        }
      }
      return q;
    },
    verb_tenses_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const verbData = [
        { verb: "go", past: "went", future: "will go", present: "goes" },
        { verb: "eat", past: "ate", future: "will eat", present: "eats" },
        { verb: "play", past: "played", future: "will play", present: "plays" },
        { verb: "run", past: "ran", future: "will run", present: "runs" },
        { verb: "see", past: "saw", future: "will see", present: "sees" },
        { verb: "make", past: "made", future: "will make", present: "makes" },
        { verb: "write", past: "wrote", future: "will write", present: "writes" },
        { verb: "take", past: "took", future: "will take", present: "takes" },
        { verb: "swim", past: "swam", future: "will swim", present: "swims" },
        { verb: "sing", past: "sang", future: "will sing", present: "sings" },
      ];
      const tenseLabels: Record<string, string> = { past: "PAST", future: "FUTURE", present: "PRESENT" };
      for (let i = 0; i < 30; i++) {
        const verbSet = pick(verbData, rng);
        const tenseKey = pick(["past", "future", "present"], rng) as "past" | "future" | "present";
        const tenseValue = verbSet[tenseKey];
        if (isMCQ(3, rng)) {
          const wrongTenses = (["past", "future", "present"] as const).filter(t => t !== tenseKey).map(t => verbSet[t]);
          q.push(createMCQ("pos_g3", "verb_tenses_g3",
            `Which is the ${tenseLabels[tenseKey]} tense of '${verbSet.verb}'?`, tenseValue, wrongTenses));
        } else {
          q.push(createTyping("pos_g3", "verb_tenses_g3",
            `Write the ${tenseKey} tense of '${verbSet.verb}':`, tenseValue));
        }
      }
      return q;
    },
    adj_comparative_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const adjData = [
        { adj: "big", comparative: "bigger", superlative: "biggest" },
        { adj: "small", comparative: "smaller", superlative: "smallest" },
        { adj: "fast", comparative: "faster", superlative: "fastest" },
        { adj: "slow", comparative: "slower", superlative: "slowest" },
        { adj: "hot", comparative: "hotter", superlative: "hottest" },
        { adj: "cold", comparative: "colder", superlative: "coldest" },
        { adj: "tall", comparative: "taller", superlative: "tallest" },
        { adj: "short", comparative: "shorter", superlative: "shortest" },
        { adj: "happy", comparative: "happier", superlative: "happiest" },
        { adj: "pretty", comparative: "prettier", superlative: "prettiest" },
        { adj: "beautiful", comparative: "more beautiful", superlative: "most beautiful" },
        { adj: "interesting", comparative: "more interesting", superlative: "most interesting" },
      ];
      for (let i = 0; i < 30; i++) {
        const adjSet = pick(adjData, rng);
        const formType = pick(["comparative", "superlative"], rng) as "comparative" | "superlative";
        const formValue = adjSet[formType];
        const formLabel = formType === "comparative" ? "COMPARATIVE" : "SUPERLATIVE";
        if (isMCQ(3, rng)) {
          const otherForm = formType === "comparative" ? adjSet.superlative : adjSet.comparative;
          q.push(createMCQ("pos_g3", "adj_comparative_g3",
            `Which is the ${formLabel} form of '${adjSet.adj}'?`, formValue, [otherForm, adjSet.adj, "more " + adjSet.adj]));
        } else {
          q.push(createTyping("pos_g3", "adj_comparative_g3",
            `Write the ${formType} form of '${adjSet.adj}':`, formValue));
        }
      }
      return q;
    },
    adverbs_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const advData = [
        { adverb: "quickly", adjective: "quick", sentence: "She ran ___.", type: "how" },
        { adverb: "slowly", adjective: "slow", sentence: "He walked ___.", type: "how" },
        { adverb: "loudly", adjective: "loud", sentence: "She spoke ___.", type: "how" },
        { adverb: "happily", adjective: "happy", sentence: "They played ___.", type: "how" },
        { adverb: "carefully", adjective: "careful", sentence: "She drove ___.", type: "how" },
        { adverb: "easily", adjective: "easy", sentence: "He won ___.", type: "how" },
        { adverb: "never", adjective: "", sentence: "I ___ eat spinach.", type: "when" },
        { adverb: "always", adjective: "", sentence: "She ___ does her homework.", type: "when" },
        { adverb: "often", adjective: "", sentence: "We ___ play together.", type: "when" },
        { adverb: "very", adjective: "", sentence: "The cake is ___ delicious.", type: "degree" },
      ];
      const howAdverbs = advData.filter(a => a.type === "how");
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const advSet = pick(advData, rng);
          const wrong = advData.filter(a => a.adverb !== advSet.adverb).map(a => a.adverb).slice(0, 3);
          q.push(createMCQ("pos_g3", "adverbs_g3",
            `Fill in with the correct adverb: "${advSet.sentence}"`, advSet.adverb, wrong));
        } else {
          const advSet = pick(howAdverbs, rng);
          q.push(createTyping("pos_g3", "adverbs_g3",
            `Form an adverb from '${advSet.adjective}':`, advSet.adverb));
        }
      }
      return q;
    },
    conjunctions_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const conjData = [
        { conj: "and", sentence: "I like apples ___ oranges.", use: "adds information" },
        { conj: "but", sentence: "I wanted to go, ___ it rained.", use: "shows contrast" },
        { conj: "or", sentence: "Do you want cake ___ ice cream?", use: "shows choice" },
        { conj: "so", sentence: "He studied hard, ___ he passed the test.", use: "shows result" },
        { conj: "for", sentence: "She was tired, ___ she had worked all day.", use: "shows reason" },
        { conj: "nor", sentence: "She doesn't like tea, ___ does she like coffee.", use: "adds negative" },
        { conj: "yet", sentence: "It was cold, ___ they went outside.", use: "shows contrast" },
      ];
      const allConjs = conjData.map(c => c.conj);
      for (let i = 0; i < 30; i++) {
        const data = pick(conjData, rng);
        if (isMCQ(3, rng)) {
          const wrong = allConjs.filter(c => c !== data.conj).slice(0, 3);
          q.push(createMCQ("pos_g3", "conjunctions_g3",
            `Fill in: "${data.sentence}"`, data.conj, wrong));
        } else {
          q.push(createTyping("pos_g3", "conjunctions_g3",
            `Which conjunction completes: "${data.sentence}"`, data.conj));
        }
      }
      return q;
    },
    nouns_plural_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const plurals = [
        { singular: "cat", plural: "cats" },
        { singular: "dog", plural: "dogs" },
        { singular: "box", plural: "boxes" },
        { singular: "bus", plural: "buses" },
        { singular: "glass", plural: "glasses" },
        { singular: "dish", plural: "dishes" },
        { singular: "child", plural: "children" },
        { singular: "foot", plural: "feet" },
        { singular: "tooth", plural: "teeth" },
        { singular: "man", plural: "men" },
      ];
      for (let i = 0; i < 25; i++) {
        const pair = pick(plurals, rng);
        q.push(createTyping("pos_g3", "nouns_plural_g3", `Write the plural of '${pair.singular}':`, pair.plural));
      }
      return q;
    },
    abstract_nouns_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const abstractNouns = ["love", "happiness", "courage", "friendship", "freedom", "beauty", "kindness", "honesty", "wisdom", "anger", "fear", "hope", "joy", "patience", "trust"];
      for (let i = 0; i < 25; i++) {
        q.push(createTyping("pos_g3", "abstract_nouns_g3", "Name an abstract noun (an idea, feeling, or quality):", pick(abstractNouns, rng)));
      }
      return q;
    },
    verb_tenses_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const verbData = [
        { verb: "go", past: "went", present: "go/goes", future: "will go" },
        { verb: "eat", past: "ate", present: "eat/eats", future: "will eat" },
        { verb: "play", past: "played", present: "play/plays", future: "will play" },
        { verb: "run", past: "ran", present: "run/runs", future: "will run" },
        { verb: "see", past: "saw", present: "see/sees", future: "will see" },
        { verb: "make", past: "made", present: "make/makes", future: "will make" },
        { verb: "write", past: "wrote", present: "write/writes", future: "will write" },
        { verb: "take", past: "took", present: "take/takes", future: "will take" },
      ];
      for (let i = 0; i < 25; i++) {
        const verb = pick(verbData, rng);
        const tense = pick(["past", "present", "future"] as const, rng);
        const answer = verb[tense];
        q.push(createTyping("pos_g3", "verb_tenses_g3", `Write the ${tense} tense of '${verb.verb}':`, answer));
      }
      return q;
    },
    adj_comparative_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const adjData = [
        { adj: "big", comparative: "bigger", superlative: "biggest" },
        { adj: "fast", comparative: "faster", superlative: "fastest" },
        { adj: "hot", comparative: "hotter", superlative: "hottest" },
        { adj: "tall", comparative: "taller", superlative: "tallest" },
        { adj: "happy", comparative: "happier", superlative: "happiest" },
        { adj: "beautiful", comparative: "more beautiful", superlative: "most beautiful" },
        { adj: "interesting", comparative: "more interesting", superlative: "most interesting" },
        { adj: "slow", comparative: "slower", superlative: "slowest" },
      ];
      for (let i = 0; i < 25; i++) {
        const adjSet = pick(adjData, rng);
        const formType = pick(["comparative", "superlative"] as const, rng);
        const answer = adjSet[formType];
        q.push(createTyping("pos_g3", "adj_comparative_g3", `Write the ${formType} form of '${adjSet.adj}':`, answer));
      }
      return q;
    },
    adverbs_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const adverbData = [
        { adverb: "quickly", adjective: "quick" },
        { adverb: "slowly", adjective: "slow" },
        { adverb: "carefully", adjective: "careful" },
        { adverb: "happily", adjective: "happy" },
        { adverb: "easily", adjective: "easy" },
        { adverb: "loudly", adjective: "loud" },
        { adverb: "quietly", adjective: "quiet" },
        { adverb: "beautifully", adjective: "beautiful" },
        { adverb: "bravely", adjective: "brave" },
        { adverb: "kindly", adjective: "kind" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(adverbData, rng);
        q.push(createTyping("pos_g3", "adverbs_g3", `Convert the adjective to an adverb: '${data.adjective}' → ___`, data.adverb));
      }
      return q;
    },
    conjunctions_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const conjunctionData = [
        { sentence: "I like cats ___ dogs.", answer: "and" },
        { sentence: "She is tall ___ her brother is short.", answer: "but" },
        { sentence: "Do you want milk ___ juice?", answer: "or" },
        { sentence: "I was happy ___ I won the game.", answer: "because" },
        { sentence: "It was cold ___ we wore coats.", answer: "so" },
        { sentence: "You can read ___ watch TV.", answer: "or" },
        { sentence: "He wanted to go out ___ it was raining.", answer: "but" },
        { sentence: "She ran fast ___ she could catch the ball.", answer: "so" },
        { sentence: "We went to the park ___ played soccer.", answer: "and" },
        { sentence: "I don't like math ___ I do like science.", answer: "but" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(conjunctionData, rng);
        q.push(createTyping("pos_g3", "conjunctions_g3", `Complete: "${data.sentence}"`, data.answer));
      }
      return q;
    },
  },
  sentences_g3: {
    subject_predicate_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "The dog barked loudly.", subject: "The dog", predicate: "barked loudly" },
        { sentence: "My sister plays piano.", subject: "My sister", predicate: "plays piano" },
        { sentence: "The tall tree fell down.", subject: "The tall tree", predicate: "fell down" },
        { sentence: "A little bird sang sweetly.", subject: "A little bird", predicate: "sang sweetly" },
        { sentence: "The red car drove fast.", subject: "The red car", predicate: "drove fast" },
        { sentence: "All the children laughed.", subject: "All the children", predicate: "laughed" },
        { sentence: "My best friend moved away.", subject: "My best friend", predicate: "moved away" },
        { sentence: "The old clock stopped working.", subject: "The old clock", predicate: "stopped working" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(sentenceData, rng);
        const askSubject = rng() > 0.5;
        if (isMCQ(3, rng)) {
          if (askSubject) {
            q.push(createMCQ("sentences_g3", "subject_predicate_g3",
              `In '${data.sentence}', what is the SUBJECT?`, data.subject,
              [data.predicate, sentenceData.filter(s => s !== data).map(s => s.subject)[0], sentenceData.filter(s => s !== data).map(s => s.subject)[1]]));
          } else {
            q.push(createMCQ("sentences_g3", "subject_predicate_g3",
              `In '${data.sentence}', what is the PREDICATE?`, data.predicate,
              [data.subject, sentenceData.filter(s => s !== data).map(s => s.predicate)[0], sentenceData.filter(s => s !== data).map(s => s.predicate)[1]]));
          }
        } else {
          if (askSubject) {
            q.push(createTyping("sentences_g3", "subject_predicate_g3",
              `What is the SUBJECT of: '${data.sentence}'`, data.subject));
          } else {
            q.push(createTyping("sentences_g3", "subject_predicate_g3",
              `What is the PREDICATE of: '${data.sentence}'`, data.predicate));
          }
        }
      }
      return q;
    },
    simple_compound_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { text: "The cat sat on the mat.", type: "simple" },
        { text: "She walked to school.", type: "simple" },
        { text: "The big dog chased the ball.", type: "simple" },
        { text: "Birds fly south in winter.", type: "simple" },
        { text: "I like apples, and she likes oranges.", type: "compound" },
        { text: "We went to the park, but it started raining.", type: "compound" },
        { text: "He studied hard, so he passed the test.", type: "compound" },
        { text: "She can sing, or she can dance.", type: "compound" },
        { text: "It was cold outside, yet they went swimming.", type: "compound" },
      ];
      for (let i = 0; i < 30; i++) {
        const sentSet = pick(sentenceData, rng);
        if (isMCQ(3, rng)) {
          const wrong = sentenceData.filter(s => s.type !== sentSet.type).map(s => s.text).slice(0, 3);
          const typeLabel = sentSet.type === "simple" ? "SIMPLE" : "COMPOUND";
          q.push(createMCQ("sentences_g3", "simple_compound_g3",
            `Which is a ${typeLabel} sentence?`, sentSet.text, wrong));
        } else {
          q.push(createTyping("sentences_g3", "simple_compound_g3",
            `Is this simple or compound? '${sentSet.text}'`, sentSet.type));
        }
      }
      return q;
    },
    direct_quotations_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const quoteData = [
        { correct: '"Come here," she said.', wrong: ['Come here, she said.', '"Come here, she said.', 'Come here," she said.'] },
        { correct: '"I love pizza!" he shouted.', wrong: ['I love pizza! he shouted.', '"I love pizza! he shouted.', 'I love pizza!" he shouted.'] },
        { correct: 'She asked, "Where are you going?"', wrong: ['She asked, Where are you going?', 'She asked "Where are you going?"', 'She asked, "Where are you going?'] },
        { correct: '"Let\'s go," said Mom.', wrong: ['Let\'s go, said Mom.', '"Let\'s go, said Mom.', 'Let\'s go," said Mom.'] },
        { correct: 'The teacher said, "Open your books."', wrong: ['The teacher said Open your books.', 'The teacher said, "Open your books.', 'The teacher said, Open your books."'] },
        { correct: '"Watch out!" yelled Dad.', wrong: ['Watch out! yelled Dad.', '"Watch out! yelled Dad.', 'Watch out!" yelled Dad.'] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(quoteData, rng);
        if (isMCQ(3, rng)) {
          q.push(createMCQ("sentences_g3", "direct_quotations_g3",
            "Which sentence correctly uses quotation marks?", data.correct, data.wrong));
        } else {
          const speakers = ["she said", "he asked", "Mom yelled", "the teacher replied"];
          const words = ["Hello", "Stop", "Come back", "Wait for me"];
          const sp = pick(speakers, rng);
          const w = pick(words, rng);
          q.push(createTyping("sentences_g3", "direct_quotations_g3",
            `Add quotation marks: ${w}, ${sp}.`, `"${w}," ${sp}.`));
        }
      }
      return q;
    },
    fragments_runons_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceTypes = [
        { text: "Running through the park.", type: "fragment", reason: "no subject or verb" },
        { text: "Because it was raining.", type: "fragment", reason: "dependent clause alone" },
        { text: "The big yellow.", type: "fragment", reason: "incomplete thought" },
        { text: "After the game ended.", type: "fragment", reason: "dependent clause alone" },
        { text: "Under the old bridge.", type: "fragment", reason: "prepositional phrase only" },
        { text: "I went home it was late I was tired.", type: "run-on", reason: "no punctuation between clauses" },
        { text: "She ran fast he ran faster.", type: "run-on", reason: "two sentences with no connector" },
        { text: "The dog barked the cat hid under the bed.", type: "run-on", reason: "missing conjunction or punctuation" },
        { text: "The sun was warm, and the birds sang.", type: "complete", reason: "proper compound sentence" },
        { text: "She went to the store.", type: "complete", reason: "proper simple sentence" },
        { text: "After lunch, we played outside.", type: "complete", reason: "proper sentence with intro phrase" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(sentenceTypes, rng);
        if (isMCQ(3, rng)) {
          const wrong = sentenceTypes.filter(s => s.type !== data.type).map(s => s.text).slice(0, 3);
          const typeLabel = data.type === "fragment" ? "FRAGMENT" : data.type === "run-on" ? "RUN-ON" : "COMPLETE";
          q.push(createMCQ("sentences_g3", "fragments_runons_g3",
            `Which is a ${typeLabel} sentence?`, data.text, wrong));
        } else {
          q.push(createTyping("sentences_g3", "fragments_runons_g3",
            `Is this a fragment, run-on, or complete sentence? '${data.text}'`, data.type));
        }
      }
      return q;
    },
    subject_predicate_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "The dog barked loudly.", subject: "The dog", predicate: "barked loudly" },
        { sentence: "My sister plays piano.", subject: "My sister", predicate: "plays piano" },
        { sentence: "The tall tree fell down.", subject: "The tall tree", predicate: "fell down" },
        { sentence: "A little bird sang sweetly.", subject: "A little bird", predicate: "sang sweetly" },
        { sentence: "All the children laughed.", subject: "All the children", predicate: "laughed" },
        { sentence: "My best friend moved away.", subject: "My best friend", predicate: "moved away" },
        { sentence: "The old clock stopped working.", subject: "The old clock", predicate: "stopped working" },
        { sentence: "Lightning struck suddenly.", subject: "Lightning", predicate: "struck suddenly" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentenceData, rng);
        const isSubject = rng() > 0.5;
        if (isSubject) {
          q.push(createTyping("sentences_g3", "subject_predicate_g3", `Identify the subject: '${data.sentence}'`, data.subject));
        } else {
          q.push(createTyping("sentences_g3", "subject_predicate_g3", `Identify the predicate: '${data.sentence}'`, data.predicate));
        }
      }
      return q;
    },
    simple_compound_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { text: "I like cats.", type: "simple" },
        { text: "She plays soccer.", type: "simple" },
        { text: "They went to the park.", type: "simple" },
        { text: "I like cats, and she likes dogs.", type: "compound" },
        { text: "He studied hard, but he still failed.", type: "compound" },
        { text: "The cat sat on the mat.", type: "simple" },
        { text: "The cat sat on the mat, and the dog slept nearby.", type: "compound" },
        { text: "We went swimming, or we went to the movies.", type: "compound" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentenceData, rng);
        q.push(createTyping("sentences_g3", "simple_compound_g3", `Is this simple or compound? '${data.text}'`, data.type));
      }
      return q;
    },
    direct_quotations_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const quoteData = [
        { correct: '"Come here," she said.' },
        { correct: '"I love pizza!" he shouted.' },
        { correct: 'She asked, "Where are you going?"' },
        { correct: '"Turn off the lights," Mom said.' },
        { correct: 'Dad said, "We are going to the beach."' },
        { correct: '"Be quiet!" he whispered.' },
        { correct: '"What time is it?" she asked.' },
        { correct: '"I\'m so happy!" Tom exclaimed.' },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(quoteData, rng);
        q.push(createTyping("sentences_g3", "direct_quotations_g3", `Write the correct quotation:`, data.correct));
      }
      return q;
    },
    fragments_runons_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceTypes = [
        { text: "Ran down the street.", type: "fragment" },
        { text: "We played soccer and we ate ice cream.", type: "run-on" },
        { text: "The cat sat on the mat.", type: "complete" },
        { text: "Barked at the mailman.", type: "fragment" },
        { text: "I like pizza I eat it every day.", type: "run-on" },
        { text: "She wrote a letter.", type: "complete" },
        { text: "Because it was raining.", type: "fragment" },
        { text: "He ran to the store and he bought milk and he came back home.", type: "run-on" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentenceTypes, rng);
        q.push(createTyping("sentences_g3", "fragments_runons_g3", `Is this a fragment, run-on, or complete sentence? '${data.text}'`, data.type));
      }
      return q;
    },
  },
  spelling_g3: {
    prefixes_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const prefixData = [
        { prefix: "un-", meaning: "not", examples: ["unhappy", "unclean", "unsafe", "unfair", "unlock", "untie", "unusual"] },
        { prefix: "re-", meaning: "again", examples: ["redo", "restart", "rebuild", "rewrite", "retell", "refill", "replay"] },
        { prefix: "pre-", meaning: "before", examples: ["preview", "preschool", "preheat", "prefix", "prepay", "pretest"] },
        { prefix: "dis-", meaning: "not / opposite", examples: ["disagree", "dislike", "disconnect", "disappear", "dishonest", "discomfort"] },
        { prefix: "mis-", meaning: "wrong / badly", examples: ["misspell", "misunderstand", "miscount", "misplace", "mislead", "mismatch"] },
      ];
      for (let i = 0; i < 30; i++) {
        const prefixSet = pick(prefixData, rng);
        const example = pick(prefixSet.examples, rng);
        if (isMCQ(3, rng)) {
          const wrong = prefixData.filter(p => p.prefix !== prefixSet.prefix).map(p => p.meaning).slice(0, 3);
          q.push(createMCQ("spelling_g3", "prefixes_g3",
            `What does the prefix '${prefixSet.prefix}' mean in '${example}'?`, prefixSet.meaning, wrong));
        } else {
          q.push(createTyping("spelling_g3", "prefixes_g3",
            `What does the prefix '${prefixSet.prefix}' mean?`, prefixSet.meaning));
        }
      }
      return q;
    },
    suffixes_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const suffixData = [
        { suffix: "-ness", meaning: "state or quality of", examples: ["happiness", "darkness", "kindness", "sadness", "weakness"] },
        { suffix: "-ful", meaning: "full of", examples: ["hopeful", "careful", "beautiful", "joyful", "thankful", "powerful"] },
        { suffix: "-less", meaning: "without", examples: ["hopeless", "careless", "helpless", "fearless", "homeless", "useless"] },
        { suffix: "-ly", meaning: "in a way that is", examples: ["quickly", "slowly", "happily", "sadly", "bravely", "kindly"] },
        { suffix: "-tion", meaning: "act or process of", examples: ["action", "creation", "education", "invention", "celebration"] },
        { suffix: "-able", meaning: "able to be", examples: ["readable", "washable", "enjoyable", "breakable", "comfortable"] },
      ];
      for (let i = 0; i < 30; i++) {
        const suffixSet = pick(suffixData, rng);
        const example = pick(suffixSet.examples, rng);
        if (isMCQ(3, rng)) {
          const wrong = suffixData.filter(s => s.suffix !== suffixSet.suffix).map(s => s.meaning).slice(0, 3);
          q.push(createMCQ("spelling_g3", "suffixes_g3",
            `What does the suffix '${suffixSet.suffix}' mean in '${example}'?`, suffixSet.meaning, wrong));
        } else {
          q.push(createTyping("spelling_g3", "suffixes_g3",
            `What does the suffix '${suffixSet.suffix}' mean?`, suffixSet.meaning));
        }
      }
      return q;
    },
    word_families_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const familyData = [
        { root: "play", related: ["play", "player", "played", "playing", "playful", "replay"] },
        { root: "run", related: ["run", "runner", "ran", "running", "rerun"] },
        { root: "happy", related: ["happy", "happily", "happiness", "unhappy", "happier"] },
        { root: "teach", related: ["teach", "teacher", "taught", "teaching", "reteach"] },
        { root: "kind", related: ["kind", "kindly", "kindness", "unkind", "kinder", "kindest"] },
        { root: "help", related: ["help", "helped", "helping", "helpful", "helpless", "helper"] },
        { root: "care", related: ["care", "careful", "careless", "caring", "cared", "carefree"] },
        { root: "friend", related: ["friend", "friendly", "friendship", "unfriendly", "befriend"] },
      ];
      for (let i = 0; i < 30; i++) {
        const familySet = pick(familyData, rng);
        const word = pick(familySet.related, rng);
        if (isMCQ(3, rng)) {
          const otherWords = familySet.related.filter(w => w !== word);
          const correct = pick(otherWords, rng);
          const wrong = familyData.filter(f => f.root !== familySet.root).map(f => pick(f.related, rng)).slice(0, 3);
          q.push(createMCQ("spelling_g3", "word_families_g3",
            `Which word belongs in the same WORD FAMILY as '${word}'?`, correct, wrong));
        } else {
          q.push(createTyping("spelling_g3", "word_families_g3",
            `Name another word in the family of '${familySet.root}':`, pick(familySet.related.filter(w => w !== familySet.root), rng)));
        }
      }
      return q;
    },
    homophones_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const homophoneData = [
        { correct: "they're", sentence: "___ going to the park.", wrong: ["there", "their"] },
        { correct: "their", sentence: "The students packed ___ bags.", wrong: ["there", "they're"] },
        { correct: "there", sentence: "Look over ___.", wrong: ["their", "they're"] },
        { correct: "too", sentence: "I want to come ___.", wrong: ["to", "two"] },
        { correct: "to", sentence: "She went ___ the store.", wrong: ["too", "two"] },
        { correct: "two", sentence: "I have ___ cats.", wrong: ["to", "too"] },
        { correct: "know", sentence: "Do you ___ the answer?", wrong: ["no", "now"] },
        { correct: "write", sentence: "Please ___ your name here.", wrong: ["right", "rite"] },
        { correct: "here", sentence: "Come ___, please.", wrong: ["hear", "hare"] },
        { correct: "see", sentence: "I can ___ the mountains.", wrong: ["sea", "si"] },
        { correct: "wear", sentence: "What should I ___ today?", wrong: ["where", "were"] },
        { correct: "its", sentence: "The dog wagged ___ tail.", wrong: ["it's", "its'"] },
      ];
      for (let i = 0; i < 30; i++) {
        const homoSet = pick(homophoneData, rng);
        if (isMCQ(3, rng)) {
          q.push(createMCQ("spelling_g3", "homophones_g3",
            `Fill in: "${homoSet.sentence}"`, homoSet.correct, homoSet.wrong));
        } else {
          q.push(createTyping("spelling_g3", "homophones_g3",
            `Fill in: "${homoSet.sentence}"`, homoSet.correct));
        }
      }
      return q;
    },
    prefixes_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const prefixData = [
        { word: "disagree", prefix: "dis", base: "agree", meaning: "opposite of agree" },
        { word: "unhappy", prefix: "un", base: "happy", meaning: "not happy" },
        { word: "reread", prefix: "re", base: "read", meaning: "read again" },
        { word: "misbehave", prefix: "mis", base: "behave", meaning: "behave badly" },
        { word: "preview", prefix: "pre", base: "view", meaning: "view before" },
        { word: "nonfiction", prefix: "non", base: "fiction", meaning: "not fiction" },
        { word: "overeat", prefix: "over", base: "eat", meaning: "eat too much" },
        { word: "underfed", prefix: "under", base: "fed", meaning: "fed insufficiently" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(prefixData, rng);
        q.push(createTyping("spelling_g3", "prefixes_g3", `Identify the prefix in '${data.word}':`, data.prefix));
      }
      return q;
    },
    suffixes_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const suffixData = [
        { word: "happiness", suffix: "ness", base: "happy" },
        { word: "teacher", suffix: "er", base: "teach" },
        { word: "quickly", suffix: "ly", base: "quick" },
        { word: "playful", suffix: "ful", base: "play" },
        { word: "carefully", suffix: "fully", base: "care" },
        { word: "hopeless", suffix: "less", base: "hope" },
        { word: "creative", suffix: "ive", base: "create" },
        { word: "movement", suffix: "ment", base: "move" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(suffixData, rng);
        q.push(createTyping("spelling_g3", "suffixes_g3", `Identify the suffix in '${data.word}':`, data.suffix));
      }
      return q;
    },
    word_families_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const familyData = [
        { root: "play", words: ["play", "plays", "playing", "played", "player"] },
        { root: "walk", words: ["walk", "walks", "walking", "walked", "walker"] },
        { root: "run", words: ["run", "runs", "running", "ran", "runner"] },
        { root: "jump", words: ["jump", "jumps", "jumping", "jumped", "jumper"] },
        { root: "teach", words: ["teach", "teaches", "teaching", "taught", "teacher"] },
        { root: "build", words: ["build", "builds", "building", "built", "builder"] },
        { root: "write", words: ["write", "writes", "writing", "wrote", "writer"] },
        { root: "sing", words: ["sing", "sings", "singing", "sang", "singer"] },
      ];
      for (let i = 0; i < 25; i++) {
        const family = pick(familyData, rng);
        const wordInFamily = pick(family.words, rng);
        q.push(createTyping("spelling_g3", "word_families_g3", `Name another form in the word family of '${family.root}':`, pick(family.words, rng)));
      }
      return q;
    },
    homophones_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const homoData = [
        { correct: "their", wrong: "there", sentence: "___ dog is very friendly." },
        { correct: "see", wrong: "sea", sentence: "I can ___ the ocean." },
        { correct: "know", wrong: "no", sentence: "Do you ___ the answer?" },
        { correct: "to", wrong: "too", sentence: "I want ___ go to the park." },
        { correct: "be", wrong: "bee", sentence: "I want to ___ a teacher." },
        { correct: "here", wrong: "hear", sentence: "Come ___! I'm waiting for you." },
        { correct: "piece", wrong: "peace", sentence: "Can I have a ___ of cake?" },
        { correct: "right", wrong: "write", sentence: "You are ___!" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(homoData, rng);
        q.push(createTyping("spelling_g3", "homophones_g3", `Choose the correct word: "${data.sentence}"`, data.correct));
      }
      return q;
    },
  },
  vocab_g3: {
    literal_nonliteral_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const idiomData = [
        { phrase: "It's raining cats and dogs.", literal: "Animals are falling from the sky.", nonliteral: "It's raining very hard." },
        { phrase: "She has a heart of gold.", literal: "Her heart is made of gold metal.", nonliteral: "She is very kind and generous." },
        { phrase: "Break a leg!", literal: "Fracture your leg bone.", nonliteral: "Good luck!" },
        { phrase: "He let the cat out of the bag.", literal: "He released a cat from a bag.", nonliteral: "He revealed a secret." },
        { phrase: "She's feeling under the weather.", literal: "She is standing below the weather.", nonliteral: "She is feeling sick." },
        { phrase: "That test was a piece of cake.", literal: "The test was a slice of cake.", nonliteral: "The test was very easy." },
        { phrase: "Hold your horses!", literal: "Grab onto some horses.", nonliteral: "Be patient and wait!" },
        { phrase: "He hit the books.", literal: "He struck the books with his hand.", nonliteral: "He studied hard." },
        { phrase: "She's on cloud nine.", literal: "She is sitting on a cloud.", nonliteral: "She is extremely happy." },
        { phrase: "Time flies.", literal: "Time has wings and flies.", nonliteral: "Time passes quickly." },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(idiomData, rng);
        if (isMCQ(3, rng)) {
          q.push(createMCQ("vocab_g3", "literal_nonliteral_g3",
            `What does this phrase REALLY mean? '${data.phrase}'`,
            data.nonliteral, [data.literal, "Nobody knows", "It has no meaning"]));
        } else {
          q.push(createTyping("vocab_g3", "literal_nonliteral_g3",
            `What is the nonliteral meaning of '${data.phrase}'`, data.nonliteral));
        }
      }
      return q;
    },
    word_relationships_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const categoryData = [
        { category: "fruit", words: ["apple", "banana", "grape", "orange", "strawberry"], oddOne: "carrot" },
        { category: "animals", words: ["dog", "cat", "horse", "rabbit", "hamster"], oddOne: "chair" },
        { category: "vehicles", words: ["car", "bus", "truck", "bicycle", "train"], oddOne: "table" },
        { category: "colors", words: ["red", "blue", "green", "yellow", "purple"], oddOne: "happy" },
        { category: "weather", words: ["rain", "snow", "wind", "sunshine", "hail"], oddOne: "pencil" },
        { category: "school supplies", words: ["pencil", "eraser", "ruler", "notebook", "crayon"], oddOne: "banana" },
        { category: "sports", words: ["soccer", "basketball", "baseball", "tennis", "swimming"], oddOne: "cake" },
      ];
      const synonymData = [
        { word: "big", synonym: "large", antonym: "small" },
        { word: "happy", synonym: "glad", antonym: "sad" },
        { word: "fast", synonym: "quick", antonym: "slow" },
        { word: "brave", synonym: "courageous", antonym: "cowardly" },
        { word: "old", synonym: "ancient", antonym: "new" },
        { word: "start", synonym: "begin", antonym: "finish" },
        { word: "hot", synonym: "warm", antonym: "cold" },
        { word: "beautiful", synonym: "pretty", antonym: "ugly" },
      ];
      for (let i = 0; i < 30; i++) {
        if (rng() > 0.5) {
          const cat = pick(categoryData, rng);
          const items = shuffle([...cat.words.slice(0, 3), cat.oddOne], rng);
          if (isMCQ(3, rng)) {
            q.push(createMCQ("vocab_g3", "word_relationships_g3",
              `Which word does NOT belong in the group: ${items.join(", ")}?`,
              cat.oddOne, cat.words.slice(0, 3)));
          } else {
            q.push(createTyping("vocab_g3", "word_relationships_g3",
              `Which word does NOT belong? ${items.join(", ")}`, cat.oddOne));
          }
        } else {
          const pair = pick(synonymData, rng);
          const isAntonym = rng() > 0.5;
          const label = isAntonym ? "ANTONYM (opposite)" : "SYNONYM (similar meaning)";
          const answer = isAntonym ? pair.antonym : pair.synonym;
          if (isMCQ(3, rng)) {
            const wrong = synonymData.filter(s => s.word !== pair.word).map(s => isAntonym ? s.antonym : s.synonym).slice(0, 3);
            q.push(createMCQ("vocab_g3", "word_relationships_g3",
              `What is a ${label} of '${pair.word}'?`, answer, wrong));
          } else {
            q.push(createTyping("vocab_g3", "word_relationships_g3",
              `Write a ${label.toLowerCase()} of '${pair.word}':`, answer));
          }
        }
      }
      return q;
    },
    glossaries_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const refData = [
        { q: "Where is a GLOSSARY usually found in a textbook?", a: "at the back of the book", wrong: ["at the front", "in the middle", "on the cover"] },
        { q: "What does a GLOSSARY contain?", a: "definitions of key words", wrong: ["pictures only", "page numbers", "the author's biography"] },
        { q: "How are words in a glossary organized?", a: "alphabetical order", wrong: ["by chapter", "by color", "by size"] },
        { q: "What is a DICTIONARY used for?", a: "finding the meaning and spelling of words", wrong: ["finding locations on a map", "solving math problems", "drawing pictures"] },
        { q: "What is a GUIDE WORD in a dictionary?", a: "a word at the top of the page showing first and last entries", wrong: ["a word in bold", "the longest word on the page", "a word with pictures"] },
        { q: "Which comes FIRST in alphabetical order: 'banana' or 'cherry'?", a: "banana", wrong: ["cherry", "they are the same", "neither"] },
        { q: "What does a THESAURUS help you find?", a: "synonyms and antonyms", wrong: ["spelling only", "definitions only", "pronunciation only"] },
        { q: "In which reference would you find word meanings specific to a science textbook?", a: "the glossary in the textbook", wrong: ["a phone book", "a cookbook", "an atlas"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(refData, rng);
        if (isMCQ(3, rng)) {
          q.push(createMCQ("vocab_g3", "glossaries_g3", data.q, data.a, data.wrong));
        } else {
          q.push(createTyping("vocab_g3", "glossaries_g3", data.q, data.a));
        }
      }
      return q;
    },
    context_clues_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const contextData = [
        { sentence: "The old car was **dilapidated**, falling apart piece by piece.", answer: "broken" },
        { sentence: "She **trudged** slowly through the snow, barely lifting her feet.", answer: "walked slowly" },
        { sentence: "The **fragrant** flowers smelled wonderful in the garden.", answer: "sweet-smelling" },
        { sentence: "He was **timid** and nervously avoided talking to anyone.", answer: "shy" },
        { sentence: "The **austere** room had no decorations, just plain walls.", answer: "plain" },
        { sentence: "She felt **jubilant** after winning the race, jumping with joy.", answer: "happy" },
        { sentence: "The **tranquil** lake was calm and peaceful.", answer: "calm" },
        { sentence: "He gave a **succinct** speech, speaking only a few words.", answer: "short" },
        { sentence: "The **meager** meal was not enough to fill their hungry stomachs.", answer: "small" },
        { sentence: "Her **inquisitive** nature made her ask many questions.", answer: "curious" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(contextData, rng);
        const word = data.sentence.match(/\*\*(\w+)\*\*/)?.[1] || "word";
        const cleanSentence = data.sentence.replace(/\*\*\w+\*\*/g, "_____");
        q.push(createTyping("vocab_g3", "context_clues_g3",
          `What does '${word}' mean in this context? "${cleanSentence}"`, [data.answer, word]));
      }
      return q;
    },
    descriptive_words_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const descriptiveData = [
        { question: "Write an adjective that describes a cold day:", answer: "freezing" },
        { question: "Write an adjective that describes a fast runner:", answer: "quick" },
        { question: "Write an adjective that describes a beautiful sunset:", answer: "gorgeous" },
        { question: "Write an adjective that describes a scary movie:", answer: "terrifying" },
        { question: "Write an adjective that describes delicious food:", answer: "tasty" },
        { question: "Write an adjective that describes a tired person:", answer: "exhausted" },
        { question: "Write an adjective that describes a crowded place:", answer: "packed" },
        { question: "Write an adjective that describes a loud noise:", answer: "deafening" },
        { question: "Write an adjective that describes a busy schedule:", answer: "hectic" },
        { question: "Write an adjective that describes a peaceful place:", answer: "serene" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(descriptiveData, rng);
        q.push(createTyping("vocab_g3", "descriptive_words_g3", data.question, data.answer));
      }
      return q;
    },
    literal_nonliteral_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const idiomData = [
        { phrase: "It's raining cats and dogs.", answer: "It's raining very hard." },
        { phrase: "She has a heart of gold.", answer: "She is very kind and generous." },
        { phrase: "Break a leg!", answer: "Good luck!" },
        { phrase: "He let the cat out of the bag.", answer: "He revealed a secret." },
        { phrase: "She's feeling under the weather.", answer: "She is feeling sick." },
        { phrase: "That test was a piece of cake.", answer: "The test was very easy." },
        { phrase: "Hold your horses!", answer: "Be patient and wait!" },
        { phrase: "He hit the books.", answer: "He studied hard." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(idiomData, rng);
        q.push(createTyping("vocab_g3", "literal_nonliteral_g3", `What does '${data.phrase}' really mean?`, data.answer));
      }
      return q;
    },
    word_relationships_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const synonymData = [
        { word: "big", synonym: "large", antonym: "small" },
        { word: "happy", synonym: "glad", antonym: "sad" },
        { word: "fast", synonym: "quick", antonym: "slow" },
        { word: "brave", synonym: "courageous", antonym: "cowardly" },
        { word: "old", synonym: "ancient", antonym: "new" },
        { word: "start", synonym: "begin", antonym: "finish" },
        { word: "beautiful", synonym: "pretty", antonym: "ugly" },
        { word: "loud", synonym: "noisy", antonym: "quiet" },
      ];
      for (let i = 0; i < 25; i++) {
        const pair = pick(synonymData, rng);
        const isAntonym = rng() > 0.5;
        const answer = isAntonym ? pair.antonym : pair.synonym;
        const label = isAntonym ? "ANTONYM" : "SYNONYM";
        q.push(createTyping("vocab_g3", "word_relationships_g3", `Write a ${label} (${isAntonym ? "opposite" : "similar meaning"}) of '${pair.word}':`, answer));
      }
      return q;
    },
    glossaries_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const refData = [
        { q: "Where is a GLOSSARY usually found in a textbook?", a: "at the back of the book" },
        { q: "What does a GLOSSARY contain?", a: "definitions of key words" },
        { q: "How are words in a glossary organized?", a: "alphabetical order" },
        { q: "What is a DICTIONARY used for?", a: "finding the meaning and spelling of words" },
        { q: "What is a GUIDE WORD in a dictionary?", a: "a word at the top of the page showing first and last entries" },
        { q: "What does a THESAURUS help you find?", a: "synonyms and antonyms" },
        { q: "Which reference tool would help you find word meanings in a science book?", a: "glossary" },
        { q: "What is the difference between a glossary and a dictionary?", a: "a glossary is specific to a book, a dictionary is general" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(refData, rng);
        q.push(createTyping("vocab_g3", "glossaries_g3", data.q, data.a));
      }
      return q;
    },
    nature_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const natureVocab = [
        { word: "forest", definition: "a large area covered with many trees" },
        { word: "mountain", definition: "a very high hill with steep sides" },
        { word: "river", definition: "a large flow of water that moves toward the sea" },
        { word: "ocean", definition: "a very large body of salt water" },
        { word: "desert", definition: "a dry, sandy area with little rain" },
        { word: "valley", definition: "a low area between hills or mountains" },
        { word: "meadow", definition: "an open area of grass" },
        { word: "cliff", definition: "a high, steep rock face" },
        { word: "waterfall", definition: "water falling down from a high place" },
        { word: "prairie", definition: "a large flat area of grass with few trees" },
      ];
      for (let i = 0; i < 20; i++) {
        const vocab = pick(natureVocab, rng);
        const wrong = shuffle(natureVocab.filter(v => v.word !== vocab.word), rng).map(v => v.definition).slice(0, 3);
        q.push(createMCQ("vocab_g3", "nature_g3",
          `What is a '${vocab.word}'?`, vocab.definition, wrong));
      }
      return q;
    },
    nature_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const natureVocab = [
        { word: "forest", hint: "A large area covered with many trees" },
        { word: "mountain", hint: "A very high hill with steep sides" },
        { word: "river", hint: "A large flow of water toward the sea" },
        { word: "ocean", hint: "A very large body of salt water" },
        { word: "desert", hint: "A dry, sandy area with little rain" },
        { word: "valley", hint: "A low area between hills or mountains" },
        { word: "meadow", hint: "An open area of grass" },
        { word: "cliff", hint: "A high, steep rock face" },
      ];
      for (let i = 0; i < 15; i++) {
        const vocab = pick(natureVocab, rng);
        q.push(createTyping("vocab_g3", "nature_g3", `What is this? "${vocab.hint}"`, vocab.word));
      }
      return q;
    },
    travel_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const travelVocab = [
        { word: "train", definition: "a long vehicle on tracks that carries people or goods" },
        { word: "airport", definition: "a place where planes take off and land" },
        { word: "map", definition: "a drawing that shows locations and distances" },
        { word: "direction", definition: "the way to go (north, south, east, west)" },
        { word: "passport", definition: "an official document needed for international travel" },
        { word: "hotel", definition: "a building where travelers stay overnight" },
        { word: "luggage", definition: "bags and suitcases you carry when traveling" },
        { word: "itinerary", definition: "a plan of the places you will visit" },
        { word: "tourist", definition: "a person traveling for pleasure" },
        { word: "compass", definition: "a tool that shows direction using a needle" },
      ];
      for (let i = 0; i < 20; i++) {
        const vocab = pick(travelVocab, rng);
        const wrong = shuffle(travelVocab.filter(v => v.word !== vocab.word), rng).map(v => v.definition).slice(0, 3);
        q.push(createMCQ("vocab_g3", "travel_g3",
          `What is '${vocab.word}' in travel?`, vocab.definition, wrong));
      }
      return q;
    },
    travel_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const travelVocab = [
        { word: "train", hint: "A long vehicle on tracks" },
        { word: "airport", hint: "A place where planes take off and land" },
        { word: "map", hint: "A drawing showing locations" },
        { word: "hotel", hint: "A building where travelers stay" },
        { word: "luggage", hint: "Bags and suitcases for travel" },
        { word: "tourist", hint: "A person traveling for pleasure" },
        { word: "passport", hint: "A document for international travel" },
        { word: "compass", hint: "A tool showing direction" },
      ];
      for (let i = 0; i < 15; i++) {
        const vocab = pick(travelVocab, rng);
        q.push(createTyping("vocab_g3", "travel_g3", `Travel word: "${vocab.hint}"`, vocab.word));
      }
      return q;
    },
    health_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const healthVocab = [
        { word: "doctor", definition: "a person who treats sick people" },
        { word: "medicine", definition: "a substance used to cure illness" },
        { word: "exercise", definition: "physical activity to stay healthy" },
        { word: "healthy", definition: "in good physical condition" },
        { word: "hospital", definition: "a building where sick people are treated" },
        { word: "symptom", definition: "a sign that you have an illness" },
        { word: "vaccine", definition: "a medicine that prevents disease" },
        { word: "nutrition", definition: "food and what your body needs to be healthy" },
        { word: "virus", definition: "a tiny living thing that causes illness" },
        { word: "recovery", definition: "becoming healthy again after being sick" },
      ];
      for (let i = 0; i < 20; i++) {
        const vocab = pick(healthVocab, rng);
        const wrong = shuffle(healthVocab.filter(v => v.word !== vocab.word), rng).map(v => v.definition).slice(0, 3);
        q.push(createMCQ("vocab_g3", "health_g3",
          `What is '${vocab.word}'?`, vocab.definition, wrong));
      }
      return q;
    },
    health_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const healthVocab = [
        { word: "doctor", hint: "A person who treats sick people" },
        { word: "medicine", hint: "A substance used to cure illness" },
        { word: "exercise", hint: "Physical activity to stay healthy" },
        { word: "hospital", hint: "A building for treating sick people" },
        { word: "vaccine", hint: "A medicine that prevents disease" },
        { word: "symptom", hint: "A sign that you are ill" },
        { word: "healthy", hint: "In good physical condition" },
        { word: "virus", hint: "A tiny thing that causes illness" },
      ];
      for (let i = 0; i < 15; i++) {
        const vocab = pick(healthVocab, rng);
        q.push(createTyping("vocab_g3", "health_g3", `Health word: "${vocab.hint}"`, vocab.word));
      }
      return q;
    },
    emotions_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const emotionVocab = [
        { word: "nervous", definition: "worried or anxious about something" },
        { word: "proud", definition: "feeling pleased about an accomplishment" },
        { word: "embarrassed", definition: "feeling ashamed or self-conscious" },
        { word: "jealous", definition: "upset because someone has something you want" },
        { word: "grateful", definition: "feeling thankful" },
        { word: "frustrated", definition: "feeling annoyed when you can't do something" },
        { word: "relieved", definition: "feeling better after worry ends" },
        { word: "amazed", definition: "very surprised and impressed" },
        { word: "confused", definition: "not understanding something" },
        { word: "excited", definition: "very happy and eager about something" },
      ];
      for (let i = 0; i < 20; i++) {
        const vocab = pick(emotionVocab, rng);
        const wrong = shuffle(emotionVocab.filter(v => v.word !== vocab.word), rng).map(v => v.definition).slice(0, 3);
        q.push(createMCQ("vocab_g3", "emotions_g3",
          `What does '${vocab.word}' mean?`, vocab.definition, wrong));
      }
      return q;
    },
    emotions_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const emotionVocab = [
        { word: "nervous", hint: "Worried or anxious" },
        { word: "proud", hint: "Pleased about an accomplishment" },
        { word: "embarrassed", hint: "Feeling ashamed" },
        { word: "jealous", hint: "Upset because someone has something you want" },
        { word: "grateful", hint: "Feeling thankful" },
        { word: "frustrated", hint: "Annoyed when you can't do something" },
        { word: "amazed", hint: "Very surprised and impressed" },
        { word: "confused", hint: "Not understanding something" },
      ];
      for (let i = 0; i < 15; i++) {
        const vocab = pick(emotionVocab, rng);
        q.push(createTyping("vocab_g3", "emotions_g3", `Emotion: "${vocab.hint}"`, vocab.word));
      }
      return q;
    },
    environment_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const envVocab = [
        { word: "recycle", definition: "to process used materials to make new products" },
        { word: "pollution", definition: "harmful substances that damage the air, water, or land" },
        { word: "energy", definition: "power to make things work or move" },
        { word: "plants", definition: "living things that grow in soil and need sunlight" },
        { word: "climate", definition: "the typical weather pattern of a place" },
        { word: "extinct", definition: "no longer existing (a species that has died out)" },
        { word: "ecosystem", definition: "a community of living things in an environment" },
        { word: "fossil", definition: "the preserved remains of ancient plants or animals" },
        { word: "renewable", definition: "able to be replaced or replenished" },
        { word: "carbon", definition: "a natural element found in all living things" },
      ];
      for (let i = 0; i < 20; i++) {
        const vocab = pick(envVocab, rng);
        const wrong = shuffle(envVocab.filter(v => v.word !== vocab.word), rng).map(v => v.definition).slice(0, 3);
        q.push(createMCQ("vocab_g3", "environment_g3",
          `What is '${vocab.word}'?`, vocab.definition, wrong));
      }
      return q;
    },
    environment_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const envVocab = [
        { word: "recycle", hint: "Process used materials to make new products" },
        { word: "pollution", hint: "Harmful substances damaging air, water, or land" },
        { word: "energy", hint: "Power to make things work" },
        { word: "plants", hint: "Living things that grow in soil" },
        { word: "climate", hint: "The typical weather pattern of a place" },
        { word: "ecosystem", hint: "A community of living things" },
        { word: "fossil", hint: "The remains of ancient life forms" },
        { word: "extinct", hint: "No longer existing" },
      ];
      for (let i = 0; i < 15; i++) {
        const vocab = pick(envVocab, rng);
        q.push(createTyping("vocab_g3", "environment_g3", `Environment word: "${vocab.hint}"`, vocab.word));
      }
      return q;
    },
    technology_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const techVocab = [
        { word: "computer", definition: "an electronic machine that processes information" },
        { word: "internet", definition: "a global network connecting computers worldwide" },
        { word: "device", definition: "a machine or tool designed for a specific purpose" },
        { word: "screen", definition: "a display that shows images or text" },
        { word: "keyboard", definition: "an input device with keys for typing" },
        { word: "software", definition: "programs that run on a computer" },
        { word: "password", definition: "a secret code to access an account" },
        { word: "download", definition: "to transfer files from internet to your device" },
        { word: "upload", definition: "to transfer files from your device to the internet" },
        { word: "robot", definition: "a machine that can perform tasks automatically" },
      ];
      for (let i = 0; i < 20; i++) {
        const vocab = pick(techVocab, rng);
        const wrong = shuffle(techVocab.filter(v => v.word !== vocab.word), rng).map(v => v.definition).slice(0, 3);
        q.push(createMCQ("vocab_g3", "technology_g3",
          `What is a '${vocab.word}'?`, vocab.definition, wrong));
      }
      return q;
    },
    technology_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const techVocab = [
        { word: "computer", hint: "An electronic machine that processes information" },
        { word: "internet", hint: "A global network connecting computers" },
        { word: "device", hint: "A machine designed for a purpose" },
        { word: "screen", hint: "A display showing images or text" },
        { word: "keyboard", hint: "An input device with keys for typing" },
        { word: "software", hint: "Programs that run on a computer" },
        { word: "download", hint: "Transfer files to your device from the internet" },
        { word: "upload", hint: "Transfer files from your device to the internet" },
      ];
      for (let i = 0; i < 15; i++) {
        const vocab = pick(techVocab, rng);
        q.push(createTyping("vocab_g3", "technology_g3", `Tech word: "${vocab.hint}"`, vocab.word));
      }
      return q;
    },
    food_cooking_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const foodVocab = [
        { word: "ingredients", definition: "the items used to make a recipe" },
        { word: "recipe", definition: "instructions for preparing a dish" },
        { word: "bake", definition: "to cook in an oven with dry heat" },
        { word: "fry", definition: "to cook in hot oil or fat" },
        { word: "boil", definition: "to heat liquid until it bubbles" },
        { word: "roast", definition: "to cook with dry heat in an oven" },
        { word: "seasoning", definition: "spices or herbs that add flavor" },
        { word: "portion", definition: "an amount of food served" },
        { word: "nutrition", definition: "the food needed for health" },
        { word: "cuisine", definition: "a style of cooking from a particular region" },
      ];
      for (let i = 0; i < 20; i++) {
        const vocab = pick(foodVocab, rng);
        const wrong = shuffle(foodVocab.filter(v => v.word !== vocab.word), rng).map(v => v.definition).slice(0, 3);
        q.push(createMCQ("vocab_g3", "food_cooking_g3",
          `What is '${vocab.word}' in cooking?`, vocab.definition, wrong));
      }
      return q;
    },
    food_cooking_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const foodVocab = [
        { word: "ingredients", hint: "Items used to make a recipe" },
        { word: "recipe", hint: "Instructions for preparing a dish" },
        { word: "bake", hint: "Cook in an oven with dry heat" },
        { word: "fry", hint: "Cook in hot oil or fat" },
        { word: "boil", hint: "Heat liquid until it bubbles" },
        { word: "seasoning", hint: "Spices that add flavor" },
        { word: "roast", hint: "Cook with dry heat in an oven" },
        { word: "portion", hint: "An amount of food served" },
      ];
      for (let i = 0; i < 15; i++) {
        const vocab = pick(foodVocab, rng);
        q.push(createTyping("vocab_g3", "food_cooking_g3", `Cooking: "${vocab.hint}"`, vocab.word));
      }
      return q;
    },
    time_dates_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const timeVocab = [
        { word: "calendar", definition: "a chart showing days, weeks, and months" },
        { word: "decade", definition: "a period of ten years" },
        { word: "century", definition: "a period of one hundred years" },
        { word: "schedule", definition: "a plan showing times for events" },
        { word: "chronological", definition: "arranged in order of time from first to last" },
        { word: "era", definition: "a long period of history" },
        { word: "milestone", definition: "an important event in time" },
        { word: "punctual", definition: "arriving on time" },
        { word: "temporary", definition: "lasting for a short time only" },
        { word: "permanent", definition: "lasting forever or for a long time" },
      ];
      for (let i = 0; i < 20; i++) {
        const vocab = pick(timeVocab, rng);
        const wrong = shuffle(timeVocab.filter(v => v.word !== vocab.word), rng).map(v => v.definition).slice(0, 3);
        q.push(createMCQ("vocab_g3", "time_dates_g3",
          `What is '${vocab.word}'?`, vocab.definition, wrong));
      }
      return q;
    },
    time_dates_g3_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const timeVocab = [
        { word: "calendar", hint: "A chart showing days and months" },
        { word: "decade", hint: "A period of ten years" },
        { word: "century", hint: "A period of one hundred years" },
        { word: "schedule", hint: "A plan showing times for events" },
        { word: "era", hint: "A long period of history" },
        { word: "milestone", hint: "An important event in time" },
        { word: "chronological", hint: "Arranged in order of time" },
        { word: "permanent", hint: "Lasting forever or for a long time" },
      ];
      for (let i = 0; i < 15; i++) {
        const vocab = pick(timeVocab, rng);
        q.push(createTyping("vocab_g3", "time_dates_g3", `Time/dates: "${vocab.hint}"`, vocab.word));
      }
      return q;
    },
  },
};

// ─── GRADE 4 GENERATORS ───────────────────────────────────────────────────

export const G4_Generators = {
  pos_g4: {
    relative_pronouns_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rpData = [
        { pronoun: "who", sentence: "The girl ___ won the race is my friend.", use: "refers to people (subject)" },
        { pronoun: "whom", sentence: "The person ___ I called didn't answer.", use: "refers to people (object)" },
        { pronoun: "whose", sentence: "The boy ___ dog ran away was sad.", use: "shows possession" },
        { pronoun: "which", sentence: "The book, ___ was very long, was exciting.", use: "refers to things (non-restrictive)" },
        { pronoun: "that", sentence: "The car ___ was parked outside is mine.", use: "refers to things (restrictive)" },
        { pronoun: "who", sentence: "Students ___ study hard get good grades.", use: "refers to people (subject)" },
        { pronoun: "whose", sentence: "The teacher ___ class won the award smiled.", use: "shows possession" },
        { pronoun: "which", sentence: "The cake, ___ Mom baked, tasted amazing.", use: "refers to things (non-restrictive)" },
        { pronoun: "that", sentence: "The movie ___ we watched was funny.", use: "refers to things (restrictive)" },
        { pronoun: "whom", sentence: "The friend ___ she invited came early.", use: "refers to people (object)" },
      ];
      const allPronouns = ["who", "whom", "whose", "which", "that"];
      for (let i = 0; i < 30; i++) {
        const data = pick(rpData, rng);
        if (isMCQ(4, rng)) {
          const wrong = allPronouns.filter(p => p !== data.pronoun).slice(0, 3);
          q.push(createMCQ("pos_g4", "relative_pronouns_g4",
            `Which relative pronoun fits: '${data.sentence}'`, data.pronoun, wrong));
        } else {
          q.push(createTyping("pos_g4", "relative_pronouns_g4",
            `Fill in the relative pronoun: '${data.sentence}'`, data.pronoun));
        }
      }
      return q;
    },
    relative_adverbs_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const raData = [
        { adverb: "where", sentence: "The park ___ we play is nearby.", use: "tells about a place" },
        { adverb: "when", sentence: "I remember the day ___ we met.", use: "tells about a time" },
        { adverb: "why", sentence: "The reason ___ she left is unclear.", use: "tells about a reason" },
        { adverb: "where", sentence: "The school ___ I study is large.", use: "tells about a place" },
        { adverb: "when", sentence: "Summer is the time ___ we go on vacation.", use: "tells about a time" },
        { adverb: "why", sentence: "Tell me ___ you are late.", use: "tells about a reason" },
        { adverb: "where", sentence: "This is the store ___ we buy groceries.", use: "tells about a place" },
        { adverb: "when", sentence: "Do you know ___ the movie starts?", use: "tells about a time" },
      ];
      const allAdverbs = ["where", "when", "why"];
      for (let i = 0; i < 30; i++) {
        const data = pick(raData, rng);
        if (isMCQ(4, rng)) {
          const wrong = [...allAdverbs.filter(a => a !== data.adverb), "how"];
          q.push(createMCQ("pos_g4", "relative_adverbs_g4",
            `Which relative adverb fits: '${data.sentence}'`, data.adverb, wrong));
        } else {
          q.push(createTyping("pos_g4", "relative_adverbs_g4",
            `Fill in the relative adverb: '${data.sentence}'`, data.adverb));
        }
      }
      return q;
    },
    modal_aux_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const modalData = [
        { modal: "can", sentences: ["I ___ swim.", "You ___ help.", "She ___ run fast.", "Dogs ___ bark.", "He ___ play the guitar.", "We ___ speak French."], meaning: "ability" },
        { modal: "could", sentences: ["She ___ help us.", "I ___ swim when I was younger.", "He ___ run faster then.", "They ___ fix the car.", "You ___ understand that."], meaning: "past ability / possibility" },
        { modal: "may", sentences: ["You ___ leave now.", "___ I go to the party?", "She ___ have a second piece.", "I ___ borrow your pen?", "We ___ use the computer."], meaning: "permission / possibility" },
        { modal: "might", sentences: ["It ___ rain tomorrow.", "They ___ come later.", "I ___ be late.", "She ___ call you.", "We ___ win the game."], meaning: "possibility" },
        { modal: "must", sentences: ["You ___ study hard.", "We ___ arrive on time.", "She ___ finish her homework.", "Children ___ obey their parents.", "Everyone ___ follow the rules."], meaning: "necessity / obligation" },
        { modal: "should", sentences: ["You ___ rest.", "He ___ practice more.", "We ___ call our parents.", "She ___ see a doctor.", "They ___ leave earlier."], meaning: "advice" },
        { modal: "would", sentences: ["I ___ like tea.", "She ___ prefer coffee.", "They ___ enjoy the movie.", "I ___ help if I could.", "You ___ like this book."], meaning: "polite request / conditional" },
        { modal: "shall", sentences: ["___ we dance?", "___ I open the door?", "We ___ overcome this.", "I ___ call you tomorrow.", "___ I help you?"], meaning: "suggestion / future" },
      ];
      const allModals = modalData.map(m => m.modal);
      for (let i = 0; i < 30; i++) {
        const modalSet = pick(modalData, rng);
        if (isMCQ(4, rng)) {
          const sentence = pick(modalSet.sentences, rng);
          const wrong = allModals.filter(m => m !== modalSet.modal).slice(0, 3);
          q.push(createMCQ("pos_g4", "modal_aux_g4",
            `Fill in: "${sentence}"`, modalSet.modal, wrong));
        } else {
          q.push(createTyping("pos_g4", "modal_aux_g4",
            `Name a modal auxiliary verb that expresses ${modalSet.meaning}:`, modalSet.modal));
        }
      }
      return q;
    },
    progressive_tenses_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const progData = [
        { verb: "run", pastProg: "was running", presProg: "is running", futProg: "will be running" },
        { verb: "eat", pastProg: "was eating", presProg: "is eating", futProg: "will be eating" },
        { verb: "play", pastProg: "was playing", presProg: "is playing", futProg: "will be playing" },
        { verb: "read", pastProg: "was reading", presProg: "is reading", futProg: "will be reading" },
        { verb: "sleep", pastProg: "was sleeping", presProg: "is sleeping", futProg: "will be sleeping" },
        { verb: "write", pastProg: "was writing", presProg: "is writing", futProg: "will be writing" },
        { verb: "sing", pastProg: "was singing", presProg: "is singing", futProg: "will be singing" },
        { verb: "swim", pastProg: "was swimming", presProg: "is swimming", futProg: "will be swimming" },
        { verb: "dance", pastProg: "was dancing", presProg: "is dancing", futProg: "will be dancing" },
        { verb: "walk", pastProg: "was walking", presProg: "is walking", futProg: "will be walking" },
        { verb: "talk", pastProg: "was talking", presProg: "is talking", futProg: "will be talking" },
        { verb: "laugh", pastProg: "was laughing", presProg: "is laughing", futProg: "will be laughing" },
        { verb: "work", pastProg: "was working", presProg: "is working", futProg: "will be working" },
        { verb: "watch", pastProg: "was watching", presProg: "is watching", futProg: "will be watching" },
        { verb: "cook", pastProg: "was cooking", presProg: "is cooking", futProg: "will be cooking" },
        { verb: "study", pastProg: "was studying", presProg: "is studying", futProg: "will be studying" },
      ];
      const tenseContexts = [
        { tense: "past progressive", key: "pastProg" as const, context: "She ___ when I called." },
        { tense: "present progressive", key: "presProg" as const, context: "He ___ right now." },
        { tense: "future progressive", key: "futProg" as const, context: "They ___ tomorrow at noon." },
      ];
      for (let i = 0; i < 30; i++) {
        const verbSet = pick(progData, rng);
        const tenseInfo = pick(tenseContexts, rng);
        const answer = verbSet[tenseInfo.key];
        if (isMCQ(4, rng)) {
          const wrong = tenseContexts.filter(t => t.key !== tenseInfo.key).map(t => verbSet[t.key]);
          wrong.push(verbSet.verb);
          q.push(createMCQ("pos_g4", "progressive_tenses_g4",
            `What is the ${tenseInfo.tense} of '${verbSet.verb}'?`, answer, wrong.slice(0, 3)));
        } else {
          q.push(createTyping("pos_g4", "progressive_tenses_g4",
            `Write the ${tenseInfo.tense} of '${verbSet.verb}':`, answer));
        }
      }
      return q;
    },
    adjective_order_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      // Correct order: opinion, size, age, shape, color, origin, material, purpose
      const orders = [
        { correct: "a small red apple", wrong: ["a red small apple", "an apple small red", "a red apple small"] },
        { correct: "three big wooden chairs", wrong: ["three wooden big chairs", "wooden three big chairs", "big three wooden chairs"] },
        { correct: "an old leather jacket", wrong: ["a leather old jacket", "an old jacket leather", "leather an old jacket"] },
        { correct: "two soft blue pillows", wrong: ["two blue soft pillows", "soft two blue pillows", "blue two soft pillows"] },
        { correct: "a beautiful large round table", wrong: ["a large round beautiful table", "a round beautiful large table", "a large beautiful round table"] },
        { correct: "a tiny green Italian car", wrong: ["a green tiny Italian car", "an Italian tiny green car", "a tiny Italian green car"] },
        { correct: "a lovely old French painting", wrong: ["an old lovely French painting", "a French old lovely painting", "an old French lovely painting"] },
        { correct: "some delicious hot chicken soup", wrong: ["some hot delicious chicken soup", "some chicken hot delicious soup", "some hot chicken delicious soup"] },
      ];
      for (let i = 0; i < 30; i++) {
        const order = pick(orders, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("pos_g4", "adjective_order_g4",
            "Which phrase has adjectives in the CORRECT order?", order.correct, order.wrong));
        } else {
          q.push(createTyping("pos_g4", "adjective_order_g4",
            `Rearrange the adjectives correctly: '${pick(order.wrong, rng)}'`, order.correct));
        }
      }
      return q;
    },
    prep_phrases_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const prepData = [
        { sentence: "The cat sat on the mat.", phrase: "on the mat", prep: "on" },
        { sentence: "She walked through the park.", phrase: "through the park", prep: "through" },
        { sentence: "The book is under the table.", phrase: "under the table", prep: "under" },
        { sentence: "He ran around the building.", phrase: "around the building", prep: "around" },
        { sentence: "We played after school.", phrase: "after school", prep: "after" },
        { sentence: "The bird flew over the house.", phrase: "over the house", prep: "over" },
        { sentence: "She hid behind the door.", phrase: "behind the door", prep: "behind" },
        { sentence: "They traveled across the country.", phrase: "across the country", prep: "across" },
        { sentence: "We waited until midnight.", phrase: "until midnight", prep: "until" },
        { sentence: "The flowers bloomed during spring.", phrase: "during spring", prep: "during" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(prepData, rng);
        if (isMCQ(4, rng)) {
          const wrong = prepData.filter(p => p.phrase !== data.phrase).map(p => p.phrase).slice(0, 3);
          q.push(createMCQ("pos_g4", "prep_phrases_g4",
            `Which is the PREPOSITIONAL PHRASE in: '${data.sentence}'`, data.phrase, wrong));
        } else {
          q.push(createTyping("pos_g4", "prep_phrases_g4",
            `What is the prepositional phrase in: '${data.sentence}'`, data.phrase));
        }
      }
      return q;
    },
  },
  sentences_g4: {
    fragments_runons_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceTypes = [
        { text: "Because she was tired.", type: "fragment" },
        { text: "Running in the rain.", type: "fragment" },
        { text: "The big red.", type: "fragment" },
        { text: "Although we tried our best.", type: "fragment" },
        { text: "Under the old oak tree near the pond.", type: "fragment" },
        { text: "I went home it was late I was tired.", type: "run-on" },
        { text: "She likes pizza he likes burgers they like tacos.", type: "run-on" },
        { text: "The dog barked the cat hid the bird flew away.", type: "run-on" },
        { text: "We went to the store we bought milk.", type: "run-on" },
        { text: "She studied hard, so she passed the test.", type: "complete" },
        { text: "After the rain stopped, we went outside.", type: "complete" },
        { text: "The children played in the yard.", type: "complete" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(sentenceTypes, rng);
        if (isMCQ(4, rng)) {
          const typeLabel = data.type === "fragment" ? "FRAGMENT" : data.type === "run-on" ? "RUN-ON" : "COMPLETE";
          const wrong = sentenceTypes.filter(s => s.type !== data.type).map(s => s.text).slice(0, 3);
          q.push(createMCQ("sentences_g4", "fragments_runons_g4",
            `Which is a ${typeLabel} sentence?`, data.text, wrong));
        } else {
          q.push(createTyping("sentences_g4", "fragments_runons_g4",
            `Is this a fragment, run-on, or complete sentence? '${data.text}'`, data.type));
        }
      }
      return q;
    },
    compound_sentences_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { correct: "I wanted to go, but it was raining.", wrong: ["I wanted to go but it was raining.", "I wanted to go, it was raining.", "I wanted to go. But it was raining."] },
        { correct: "She likes reading, and he likes writing.", wrong: ["She likes reading and he likes writing.", "She likes reading, he likes writing.", "She likes reading and, he likes writing."] },
        { correct: "We can go now, or we can wait.", wrong: ["We can go now or we can wait.", "We can go now, we can wait.", "We can go now or, we can wait."] },
        { correct: "He studied hard, so he passed the test.", wrong: ["He studied hard so he passed the test.", "He studied hard, he passed the test.", "He studied, hard so he passed the test."] },
        { correct: "It was sunny, yet it was cold.", wrong: ["It was sunny yet it was cold.", "It was sunny, it was cold.", "It was sunny yet, it was cold."] },
        { correct: "She didn't study, for she was ill.", wrong: ["She didn't study for she was ill.", "She didn't study, she was ill.", "She didn't study for, she was ill."] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(sentenceData, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("sentences_g4", "compound_sentences_g4",
            "Which COMPOUND sentence is punctuated correctly?", data.correct, data.wrong));
        } else {
          q.push(createTyping("sentences_g4", "compound_sentences_g4",
            `Add the correct punctuation: '${data.wrong[0]}'`, data.correct));
        }
      }
      return q;
    },
    direct_speech_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const speechData = [
        { correct: '"I\'m hungry," said Tom.', wrong: ["I'm hungry, said Tom.", '"I\'m hungry, said Tom.', "I'm hungry\" said Tom."] },
        { correct: '"Let\'s go!" shouted Sarah.', wrong: ["Let's go! shouted Sarah.", '"Let\'s go! shouted Sarah.', "Let's go!\" shouted Sarah."] },
        { correct: 'Mom asked, "Are you ready?"', wrong: ['Mom asked, Are you ready?', 'Mom asked "Are you ready?"', 'Mom asked, "Are you ready?'] },
        { correct: '"Please sit down," the teacher said.', wrong: ['Please sit down, the teacher said.', '"Please sit down, the teacher said.', 'Please sit down," the teacher said.'] },
        { correct: '"Watch out!" yelled the firefighter.', wrong: ['Watch out! yelled the firefighter.', '"Watch out! yelled the firefighter.', 'Watch out!" yelled the firefighter.'] },
        { correct: 'He whispered, "Follow me."', wrong: ['He whispered, Follow me.', 'He whispered "Follow me."', 'He whispered, "Follow me.'] },
        { correct: '"Where is my book?" she wondered.', wrong: ['Where is my book? she wondered.', '"Where is my book? she wondered.', 'Where is my book?" she wondered.'] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(speechData, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("sentences_g4", "direct_speech_g4",
            "Which sentence correctly punctuates DIRECT SPEECH?", data.correct, data.wrong));
        } else {
          q.push(createTyping("sentences_g4", "direct_speech_g4",
            `Add quotation marks to: ${data.wrong[0]}`, data.correct));
        }
      }
      return q;
    },
    confused_words_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const confusedData = [
        { correct: "their", sentence: "The students finished ___ homework.", wrong: ["there", "they're"] },
        { correct: "there", sentence: "Put the book over ___.", wrong: ["their", "they're"] },
        { correct: "they're", sentence: "___ going to the movies tonight.", wrong: ["their", "there"] },
        { correct: "its", sentence: "The dog wagged ___ tail.", wrong: ["it's", "its'"] },
        { correct: "it's", sentence: "___ raining outside.", wrong: ["its", "its'"] },
        { correct: "to", sentence: "I went ___ the store.", wrong: ["too", "two"] },
        { correct: "too", sentence: "This soup is ___ hot to eat.", wrong: ["to", "two"] },
        { correct: "two", sentence: "She has ___ brothers.", wrong: ["to", "too"] },
        { correct: "your", sentence: "___ book is on the shelf.", wrong: ["you're", "your's"] },
        { correct: "you're", sentence: "___ going to love this movie.", wrong: ["your", "your's"] },
        { correct: "than", sentence: "She is taller ___ her brother.", wrong: ["then", "that"] },
        { correct: "then", sentence: "First we ate, ___ we played.", wrong: ["than", "that"] },
        { correct: "affect", sentence: "The rain will ___ the game.", wrong: ["effect", "afect"] },
        { correct: "effect", sentence: "The ___ of the storm was devastating.", wrong: ["affect", "efect"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(confusedData, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("sentences_g4", "confused_words_g4",
            `Fill in: "${data.sentence}"`, data.correct, data.wrong));
        } else {
          q.push(createTyping("sentences_g4", "confused_words_g4",
            `Fill in the correct word: "${data.sentence}"`, data.correct));
        }
      }
      return q;
    },
  },
  spelling_g4: {
    capitalization_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { correct: "The United States is a country.", wrong: "the united states is a country.", rule: "proper nouns" },
        { correct: "I like Dr. Smith because he is kind.", wrong: "i like dr. smith because he is kind.", rule: "titles and names" },
        { correct: "She was born on Monday in July.", wrong: "she was born on monday in july.", rule: "days and months" },
        { correct: "We read the book Alice in Wonderland.", wrong: "we read the book alice in wonderland.", rule: "book titles" },
        { correct: "My family visited the Grand Canyon.", wrong: "my family visited the grand canyon.", rule: "landmark names" },
        { correct: "We celebrate Thanksgiving in November.", wrong: "we celebrate thanksgiving in november.", rule: "holidays" },
        { correct: "She speaks English and Spanish fluently.", wrong: "she speaks english and spanish fluently.", rule: "languages" },
        { correct: "President Lincoln was a great leader.", wrong: "president lincoln was a great leader.", rule: "titles before names" },
        { correct: "Paris is the capital of France.", wrong: "paris is the capital of france.", rule: "city and country names" },
        { correct: "I live on Maple Street in Boston.", wrong: "i live on maple street in boston.", rule: "streets and cities" },
        { correct: "My birthday is in December.", wrong: "my birthday is in december.", rule: "months" },
        { correct: "We went to the Statue of Liberty.", wrong: "we went to the statue of liberty.", rule: "famous landmarks" },
      ];
      for (let i = 0; i < 30; i++) {
        const sent = pick(sentenceData, rng);
        if (isMCQ(4, rng)) {
          const others = shuffle(sentenceData.filter(s => s !== sent), rng).slice(0, 2);
          q.push(createMCQ("spelling_g4", "capitalization_g4",
            "Which sentence has CORRECT capitalization?", sent.correct,
            [sent.wrong, others[0].wrong, others[1].correct]));
        } else {
          q.push(createTyping("spelling_g4", "capitalization_g4",
            `Fix the capitalization: '${sent.wrong}'`, sent.correct));
        }
      }
      return q;
    },
    commas_compound_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const commaData = [
        { correct: "I like apples, but she likes oranges.", wrong: ["I like apples but she likes oranges.", "I like apples but, she likes oranges.", "I, like apples but she likes oranges."] },
        { correct: "He studied hard, so he passed the test.", wrong: ["He studied hard so he passed the test.", "He studied hard, so he, passed the test.", "He studied, hard so he passed the test."] },
        { correct: "She wanted to go, yet she stayed home.", wrong: ["She wanted to go yet she stayed home.", "She wanted, to go yet she stayed home.", "She wanted to go yet, she stayed home."] },
        { correct: "We can play inside, or we can go outside.", wrong: ["We can play inside or we can go outside.", "We can play inside or, we can go outside.", "We, can play inside or we can go outside."] },
        { correct: "It rained all day, and the river flooded.", wrong: ["It rained all day and the river flooded.", "It rained all day and, the river flooded.", "It rained, all day and the river flooded."] },
        { correct: "I was tired, for I had worked all day.", wrong: ["I was tired for I had worked all day.", "I was tired for, I had worked all day.", "I was, tired for I had worked all day."] },
        { correct: "The weather was nice, so we went for a walk.", wrong: ["The weather was nice so we went for a walk.", "The weather was nice so, we went for a walk.", "The weather, was nice so we went for a walk."] },
        { correct: "She loves cookies, and she loves cake.", wrong: ["She loves cookies and she loves cake.", "She loves cookies and, she loves cake.", "She, loves cookies and she loves cake."] },
        { correct: "He wanted to come, but he was busy.", wrong: ["He wanted to come but he was busy.", "He wanted to come but, he was busy.", "He, wanted to come but he was busy."] },
        { correct: "I could stay, yet I must go home.", wrong: ["I could stay yet I must go home.", "I could stay yet, I must go home.", "I, could stay yet I must go home."] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(commaData, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("spelling_g4", "commas_compound_g4",
            "Which sentence uses commas CORRECTLY in a compound sentence?", data.correct, data.wrong));
        } else {
          q.push(createTyping("spelling_g4", "commas_compound_g4",
            `Add the missing comma: '${data.wrong[0]}'`, data.correct));
        }
      }
      return q;
    },
    spelling_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const spellingData = [
        { correct: "necessary", wrong: ["necesary", "neccessary", "nessecary"] },
        { correct: "separate", wrong: ["seperate", "seperete", "separete"] },
        { correct: "believe", wrong: ["beleive", "belive", "beleave"] },
        { correct: "receive", wrong: ["recieve", "receve", "recive"] },
        { correct: "different", wrong: ["diffrent", "diferent", "differant"] },
        { correct: "beginning", wrong: ["begining", "beggining", "beginng"] },
        { correct: "calendar", wrong: ["calender", "calander", "calandar"] },
        { correct: "library", wrong: ["libary", "liberry", "libery"] },
        { correct: "because", wrong: ["becuase", "becouse", "becuz"] },
        { correct: "February", wrong: ["Febuary", "Feburary", "Febrary"] },
        { correct: "Wednesday", wrong: ["Wendsday", "Wensday", "Wendesday"] },
        { correct: "tomorrow", wrong: ["tommorow", "tomorow", "tommorrow"] },
        { correct: "business", wrong: ["buisness", "busness", "bussiness"] },
        { correct: "beautiful", wrong: ["beautful", "beutiful", "beautyful"] },
        { correct: "important", wrong: ["importent", "importint", "importnt"] },
        { correct: "government", wrong: ["goverment", "govermnent", "governmant"] },
        { correct: "friend", wrong: ["frend", "freind", "frand"] },
        { correct: "height", wrong: ["hieght", "heigt", "hight"] },
        { correct: "interest", wrong: ["intrest", "intreset", "interes"] },
        { correct: "patience", wrong: ["patiance", "patience", "patiense"] },
        { correct: "rhythm", wrong: ["rythm", "rhythem", "rithem"] },
        { correct: "achieve", wrong: ["acheive", "achive", "aceve"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(spellingData, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("spelling_g4", "spelling_g4",
            "Which word is spelled CORRECTLY?", data.correct, data.wrong));
        } else {
          const misspelled = pick(data.wrong, rng);
          q.push(createTyping("spelling_g4", "spelling_g4",
            `Correct the spelling: '${misspelled}'`, data.correct));
        }
      }
      return q;
    },
  },
  vocab_g4: {
    synonyms_antonyms_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordData = [
        { word: "big", synonym: "large", antonym: "small" },
        { word: "fast", synonym: "quick", antonym: "slow" },
        { word: "happy", synonym: "joyful", antonym: "sad" },
        { word: "hot", synonym: "warm", antonym: "cold" },
        { word: "clean", synonym: "tidy", antonym: "dirty" },
        { word: "begin", synonym: "start", antonym: "end" },
        { word: "brave", synonym: "courageous", antonym: "cowardly" },
        { word: "beautiful", synonym: "gorgeous", antonym: "ugly" },
        { word: "ancient", synonym: "old", antonym: "modern" },
        { word: "generous", synonym: "giving", antonym: "selfish" },
        { word: "calm", synonym: "peaceful", antonym: "anxious" },
        { word: "difficult", synonym: "hard", antonym: "easy" },
        { word: "bright", synonym: "shiny", antonym: "dark" },
        { word: "loud", synonym: "noisy", antonym: "quiet" },
        { word: "strong", synonym: "powerful", antonym: "weak" },
        { word: "kind", synonym: "gentle", antonym: "mean" },
        { word: "rich", synonym: "wealthy", antonym: "poor" },
        { word: "clever", synonym: "smart", antonym: "foolish" },
        { word: "quiet", synonym: "silent", antonym: "loud" },
        { word: "heavy", synonym: "weighty", antonym: "light" },
        { word: "soft", synonym: "gentle", antonym: "hard" },
        { word: "tall", synonym: "high", antonym: "short" },
      ];
      for (let i = 0; i < 30; i++) {
        const wordSet = pick(wordData, rng);
        const isAntonym = rng() > 0.5;
        if (isMCQ(4, rng)) {
          if (isAntonym) {
            const wrong = wordData.filter(w => w.word !== wordSet.word).map(w => w.antonym).slice(0, 3);
            q.push(createMCQ("vocab_g4", "synonyms_antonyms_g4",
              `What is an ANTONYM (opposite) of '${wordSet.word}'?`, wordSet.antonym, wrong));
          } else {
            const wrong = wordData.filter(w => w.word !== wordSet.word).map(w => w.synonym).slice(0, 3);
            q.push(createMCQ("vocab_g4", "synonyms_antonyms_g4",
              `What is a SYNONYM (similar meaning) of '${wordSet.word}'?`, wordSet.synonym, wrong));
          }
        } else {
          const answer = isAntonym ? wordSet.antonym : wordSet.synonym;
          const label = isAntonym ? "antonym" : "synonym";
          q.push(createTyping("vocab_g4", "synonyms_antonyms_g4",
            `Write a ${label} of '${wordSet.word}':`, answer));
        }
      }
      return q;
    },
    similes_metaphors_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const figData = [
        { text: "She is as fast as lightning.", type: "simile", clue: "uses 'as...as'" },
        { text: "The moon is like a pearl in the sky.", type: "simile", clue: "uses 'like'" },
        { text: "He runs like a cheetah.", type: "simile", clue: "uses 'like'" },
        { text: "Her smile was as bright as the sun.", type: "simile", clue: "uses 'as...as'" },
        { text: "The boy was as quiet as a mouse.", type: "simile", clue: "uses 'as...as'" },
        { text: "Time is money.", type: "metaphor", clue: "says something IS something else" },
        { text: "The classroom was a zoo.", type: "metaphor", clue: "says something IS something else" },
        { text: "Her voice is music to my ears.", type: "metaphor", clue: "says something IS something else" },
        { text: "Life is a roller coaster.", type: "metaphor", clue: "says something IS something else" },
        { text: "The world is a stage.", type: "metaphor", clue: "says something IS something else" },
        { text: "He has a heart of stone.", type: "metaphor", clue: "says something IS something else" },
        { text: "She swims like a fish.", type: "simile", clue: "uses 'like'" },
        { text: "His hand is as cold as ice.", type: "simile", clue: "uses 'as...as'" },
        { text: "The snow is like a blanket.", type: "simile", clue: "uses 'like'" },
        { text: "She works like a bee.", type: "simile", clue: "uses 'like'" },
        { text: "The teacher is a guide.", type: "metaphor", clue: "says something IS something else" },
        { text: "Memories are treasures.", type: "metaphor", clue: "says something IS something else" },
        { text: "He has a wall around his heart.", type: "metaphor", clue: "says something IS something else" },
        { text: "Her eyes are like stars.", type: "simile", clue: "uses 'like'" },
        { text: "The night is as dark as coal.", type: "simile", clue: "uses 'as...as'" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(figData, rng);
        if (isMCQ(4, rng)) {
          const wrong = ["hyperbole", "alliteration", "personification"];
          q.push(createMCQ("vocab_g4", "similes_metaphors_g4",
            `Is this a SIMILE or METAPHOR? '${data.text}'`, data.type, wrong));
        } else {
          q.push(createTyping("vocab_g4", "similes_metaphors_g4",
            `Is this a simile or metaphor? '${data.text}'`, data.type));
        }
      }
      return q;
    },
    context_clues_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const clueData = [
        { sentence: "The parched earth cracked from lack of rain.", word: "parched", answer: "extremely dry", wrong: ["very wet", "very cold", "very dark"] },
        { sentence: "The teacher gave praise for the excellent work.", word: "praise", answer: "approval and encouragement", wrong: ["criticism", "punishment", "confusion"] },
        { sentence: "The winding path twisted through the forest.", word: "winding", answer: "curving and turning", wrong: ["straight", "short", "broken"] },
        { sentence: "She was astute and made clever decisions.", word: "astute", answer: "smart and perceptive", wrong: ["lazy", "confused", "stubborn"] },
        { sentence: "The desolate landscape had no trees or people.", word: "desolate", answer: "empty and lonely", wrong: ["crowded", "beautiful", "hilly"] },
        { sentence: "He was tenacious and refused to give up.", word: "tenacious", answer: "persistent and determined", wrong: ["lazy", "weak", "careless"] },
        { sentence: "The vivid colors of the sunset were breathtaking.", word: "vivid", answer: "bright and intense", wrong: ["dull", "dark", "faded"] },
        { sentence: "Her gregarious personality made her many friends.", word: "gregarious", answer: "friendly and outgoing", wrong: ["shy", "angry", "lazy"] },
        { sentence: "The frigid wind made everyone shiver.", word: "frigid", answer: "extremely cold", wrong: ["very hot", "very wet", "very dry"] },
        { sentence: "The laborious task took all day to complete.", word: "laborious", answer: "requiring hard work", wrong: ["easy", "fun", "quick"] },
        { sentence: "The benevolent old man helped many people.", word: "benevolent", answer: "kind and generous", wrong: ["mean", "selfish", "angry"] },
        { sentence: "His meticulous work showed great attention to detail.", word: "meticulous", answer: "very careful and precise", wrong: ["careless", "sloppy", "rushed"] },
        { sentence: "The ephemeral flowers bloomed for only a few days.", word: "ephemeral", answer: "lasting for a short time", wrong: ["permanent", "eternal", "strong"] },
        { sentence: "The ambiguous instructions confused everyone.", word: "ambiguous", answer: "unclear or unclear meaning", wrong: ["clear", "obvious", "simple"] },
        { sentence: "Her obstinate refusal to listen frustrated us.", word: "obstinate", answer: "stubbornly refusing to change", wrong: ["flexible", "easy", "cooperative"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(clueData, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("vocab_g4", "context_clues_g4",
            `'${data.sentence}' What does '${data.word}' mean?`, data.answer, data.wrong));
        } else {
          q.push(createTyping("vocab_g4", "context_clues_g4",
            `What does '${data.word}' mean in: '${data.sentence}'`, data.answer));
        }
      }
      return q;
    },
    domain_vocab_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const domainData = [
        { word: "photosynthesis", domain: "science", meaning: "how plants make food from sunlight", wrong: ["math", "music", "art"] },
        { word: "equation", domain: "math", meaning: "a statement that two things are equal", wrong: ["science", "history", "music"] },
        { word: "democracy", domain: "social studies", meaning: "government by the people", wrong: ["science", "math", "art"] },
        { word: "composer", domain: "music", meaning: "a person who writes music", wrong: ["science", "math", "social studies"] },
        { word: "habitat", domain: "science", meaning: "where an animal naturally lives", wrong: ["math", "music", "art"] },
        { word: "fraction", domain: "math", meaning: "a part of a whole number", wrong: ["science", "history", "music"] },
        { word: "revolution", domain: "social studies", meaning: "a big change in government or society", wrong: ["science", "math", "music"] },
        { word: "sculpture", domain: "art", meaning: "a 3D work of art", wrong: ["science", "math", "social studies"] },
        { word: "erosion", domain: "science", meaning: "wearing away of rock or soil", wrong: ["math", "music", "art"] },
        { word: "perimeter", domain: "math", meaning: "the distance around a shape", wrong: ["science", "music", "social studies"] },
        { word: "continent", domain: "social studies", meaning: "a large area of land on Earth", wrong: ["science", "math", "art"] },
        { word: "rhythm", domain: "music", meaning: "a pattern of beats in music", wrong: ["science", "math", "social studies"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(domainData, rng);
        if (rng() > 0.5) {
          // Ask about domain
          if (isMCQ(4, rng)) {
            q.push(createMCQ("vocab_g4", "domain_vocab_g4",
              `Which subject does the word '${data.word}' belong to?`, data.domain, data.wrong));
          } else {
            q.push(createTyping("vocab_g4", "domain_vocab_g4",
              `Which subject uses the word '${data.word}'?`, data.domain));
          }
        } else {
          // Ask about meaning
          if (isMCQ(4, rng)) {
            const wrongMeanings = domainData.filter(d => d.word !== data.word).map(d => d.meaning).slice(0, 3);
            q.push(createMCQ("vocab_g4", "domain_vocab_g4",
              `What does '${data.word}' mean in ${data.domain}?`, data.meaning, wrongMeanings));
          } else {
            q.push(createTyping("vocab_g4", "domain_vocab_g4",
              `What does '${data.word}' mean?`, data.meaning));
          }
        }
      }
      return q;
    },
    sentence_types_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "Please pass the salt.", type: "imperative", purpose: "a request or command" },
        { sentence: "I hope you win the game.", type: "declarative", purpose: "a statement of hope" },
        { sentence: "Would you like some tea?", type: "interrogative", purpose: "a polite question" },
        { sentence: "What an amazing discovery!", type: "exclamatory", purpose: "shows strong emotion" },
        { sentence: "Close the door quietly.", type: "imperative", purpose: "gives instructions" },
        { sentence: "The sunset was beautiful.", type: "declarative", purpose: "makes a statement" },
        { sentence: "Did you finish your homework?", type: "interrogative", purpose: "asks a question" },
        { sentence: "That's incredible!", type: "exclamatory", purpose: "expresses excitement" },
        { sentence: "Never give up on your dreams.", type: "imperative", purpose: "gives advice" },
        { sentence: "She runs faster than anyone in the class.", type: "declarative", purpose: "makes a comparison" },
      ];
      const allTypes = ["imperative", "declarative", "interrogative", "exclamatory"];
      for (let i = 0; i < 20; i++) {
        const data = pick(sentenceData, rng);
        if (isMCQ(4, rng)) {
          const wrong = allTypes.filter(t => t !== data.type);
          q.push(createMCQ("sentences_g4", "sentence_types_g4",
            `What type is this sentence? '${data.sentence}'`, data.type, wrong));
        } else {
          q.push(createTyping("sentences_g4", "sentence_types_g4",
            `Identify the type of this sentence: '${data.sentence}'`, data.type));
        }
      }
      return q;
    },
    paragraph_elements_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const elementData = [
        { element: "topic sentence", definition: "the main idea of a paragraph" },
        { element: "supporting detail", definition: "information that explains the main idea" },
        { element: "concluding sentence", definition: "a sentence that summarizes the paragraph" },
        { element: "transition", definition: "a word that connects ideas between sentences" },
        { element: "thesis statement", definition: "the main point of an entire essay" },
        { element: "evidence", definition: "facts or examples that support a claim" },
        { element: "counterargument", definition: "an opposing view to the main argument" },
        { element: "conclusion", definition: "the final part that summarizes the main points" },
      ];
      const allElements = elementData.map(e => e.element);
      for (let i = 0; i < 20; i++) {
        const data = pick(elementData, rng);
        if (isMCQ(4, rng)) {
          const wrong = allElements.filter(e => e !== data.element).slice(0, 3);
          q.push(createMCQ("sentences_g4", "paragraph_elements_g4",
            `Which is a paragraph element that ${data.definition}?`, data.element, wrong));
        } else {
          q.push(createTyping("sentences_g4", "paragraph_elements_g4",
            `What is a '${data.element}'?`, data.element));
        }
      }
      return q;
    },
    dialogue_punctuation_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const dialogueData = [
        { correct: '"I love this song," said Maria.', options: ['"I love this song," said Maria.', '"I love this song" said Maria.', 'I love this song," said Maria.'] },
        { correct: '"Watch out!" screamed Tom.', options: ['"Watch out!" screamed Tom.', '"Watch out!" screamed Tom', '"Watch out" screamed Tom.'] },
        { correct: 'Sarah asked, "Where are you going?"', options: ['Sarah asked, "Where are you going?"', 'Sarah asked "Where are you going?"', '"Sarah asked where are you going?"'] },
        { correct: '"Come back here," Mom said.', options: ['"Come back here," Mom said.', '"Come back here" Mom said.', '"Come back here," mom said.'] },
        { correct: '"I don\'t know," admitted Jake.', options: ['"I don\'t know," admitted Jake.', '"I don\'t know" admitted Jake.', 'I don\'t know," admitted Jake.'] },
        { correct: '"This is amazing!" cheered the crowd.', options: ['"This is amazing!" cheered the crowd.', '"This is amazing" cheered the crowd.', '"This is amazing"! cheered the crowd.'] },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(dialogueData, rng);
        if (isMCQ(4, rng)) {
          const options = shuffle([...data.options], rng);
          q.push(createMCQ("spelling_g4", "dialogue_punctuation_g4",
            "Which dialogue is punctuated correctly?", data.correct, options.filter(o => o !== data.correct)));
        } else {
          q.push(createTyping("spelling_g4", "dialogue_punctuation_g4",
            "Punctuate correctly: I love this song said Maria", data.correct));
        }
      }
      return q;
    },
    relative_pronouns_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rpData = [
        { pronoun: "who", sentence: "The girl ___ won the race is my friend." },
        { pronoun: "whom", sentence: "The person ___ I called didn't answer." },
        { pronoun: "whose", sentence: "The boy ___ dog ran away was sad." },
        { pronoun: "which", sentence: "The book, ___ was very long, was exciting." },
        { pronoun: "that", sentence: "The car ___ was parked outside is mine." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(rpData, rng);
        q.push(createTyping("pos_g4", "relative_pronouns_g4", `Fill in: '${data.sentence}'`, data.pronoun));
      }
      return q;
    },
    relative_adverbs_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const raData = [
        { adverb: "where", sentence: "The park ___ we play is nearby." },
        { adverb: "when", sentence: "I remember the day ___ we met." },
        { adverb: "why", sentence: "The reason ___ she left is unclear." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(raData, rng);
        q.push(createTyping("pos_g4", "relative_adverbs_g4", `Fill in: '${data.sentence}'`, data.adverb));
      }
      return q;
    },
    adjective_order_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const orderData = [
        { correct: "a beautiful blue dress" },
        { correct: "three small red balls" },
        { correct: "an old wooden house" },
        { correct: "five large silver coins" },
        { correct: "a soft yellow blanket" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(orderData, rng);
        q.push(createTyping("pos_g4", "adjective_order_g4", "Write with correct adjective order:", data.correct));
      }
      return q;
    },
    confused_words_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const confusedData = [
        { word: "too", sentence: "I have ___ many cookies." },
        { word: "your", sentence: "Is this ___ backpack?" },
        { word: "there", sentence: "Let's go over ___." },
        { word: "its", sentence: "The cat licked ___ paws." },
        { word: "they're", sentence: "___ coming to the party." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(confusedData, rng);
        q.push(createTyping("vocab_g4", "confused_words_g4", `Choose the correct word: '${data.sentence}'`, data.word));
      }
      return q;
    },
    progressive_tenses_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const progressiveData = [
        { progressive: "is reading", sentence: "She ___ right now." },
        { progressive: "was playing", sentence: "They ___ when I arrived." },
        { progressive: "will be watching", sentence: "We ___ the movie tomorrow." },
        { progressive: "has been running", sentence: "He ___ for an hour." },
        { progressive: "are building", sentence: "The workers ___ a bridge." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(progressiveData, rng);
        q.push(createTyping("pos_g4", "progressive_tenses_g4", `Complete: '${data.sentence}'`, data.progressive));
      }
      return q;
    },
    modal_aux_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const modalData = [
        { modal: "must", sentence: "You ___ wear a seatbelt." },
        { modal: "should", sentence: "You ___ eat your vegetables." },
        { modal: "can", sentence: "She ___ speak three languages." },
        { modal: "would", sentence: "If it rained, we ___ stay inside." },
        { modal: "may", sentence: "You ___ leave when you finish." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(modalData, rng);
        q.push(createTyping("pos_g4", "modal_aux_g4", `Fill in the modal auxiliary: '${data.sentence}'`, data.modal));
      }
      return q;
    },
    compound_sentences_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const compoundData = [
        { sentence: "I like cats, and she likes dogs.", type: "compound" },
        { sentence: "He studied hard, but he still failed.", type: "compound" },
        { sentence: "You can read a book, or you can watch TV.", type: "compound" },
        { sentence: "It was raining, so we stayed inside.", type: "compound" },
        { sentence: "The sun was shining.", type: "simple" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(compoundData, rng);
        q.push(createTyping("sentences_g4", "compound_sentences_g4", `Is this simple or compound? '${data.sentence}'`, data.type));
      }
      return q;
    },
    fragments_runons_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const fragmentData = [
        { text: "Ran down the street.", type: "fragment" },
        { text: "We played soccer and we ate ice cream.", type: "run-on" },
        { text: "The cat sat on the mat.", type: "complete" },
        { text: "Because it was raining.", type: "fragment" },
        { text: "I like pizza I eat it every day.", type: "run-on" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(fragmentData, rng);
        q.push(createTyping("sentences_g4", "fragments_runons_g4", `Fragment, run-on, or complete? '${data.text}'`, data.type));
      }
      return q;
    },
    commas_compound_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const commaData = [
        { correct: "I like cats, dogs, and birds.", answer: "yes" },
        { correct: "She bought apples oranges and bread.", answer: "no" },
        { correct: "He went to the store, and he bought milk.", answer: "yes" },
        { correct: "We can go to the park or the beach.", answer: "no" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(commaData, rng);
        q.push(createTyping("spelling_g4", "commas_compound_g4", `Is this comma usage correct? '${data.correct}'`, data.answer));
      }
      return q;
    },
    direct_speech_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const speechData = [
        { correct: '"Hello!" said John.' },
        { correct: 'Maria asked, "What is your name?"' },
        { correct: '"I am excited," she exclaimed.' },
        { correct: '"Be careful," warned Mom.' },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(speechData, rng);
        q.push(createTyping("spelling_g4", "direct_speech_g4", "Write direct speech correctly:", data.correct));
      }
      return q;
    },
    capitalization_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const capData = [
        { wrong: "i like to play soccer.", correct: "I like to play soccer." },
        { wrong: "sarah lives in new york.", correct: "Sarah lives in New York." },
        { wrong: "the mississippi river is long.", correct: "The Mississippi River is long." },
        { wrong: "we visited the statue of liberty.", correct: "We visited the Statue of Liberty." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(capData, rng);
        q.push(createTyping("spelling_g4", "capitalization_g4", `Fix capitalization: '${data.wrong}'`, data.correct));
      }
      return q;
    },
    prep_phrases_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const prepData = [
        { prep: "under", sentence: "The cat is ___ the table." },
        { prep: "on", sentence: "The book is ___ the shelf." },
        { prep: "between", sentence: "The house is ___ two trees." },
        { prep: "through", sentence: "We walked ___ the forest." },
        { prep: "behind", sentence: "The dog is hiding ___ the door." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(prepData, rng);
        q.push(createTyping("pos_g4", "prep_phrases_g4", `Fill in: '${data.sentence}'`, data.prep));
      }
      return q;
    },
    synonyms_antonyms_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const synonData = [
        { word: "ancient", antonym: "modern" },
        { word: "beautiful", antonym: "ugly" },
        { word: "brave", antonym: "cowardly" },
        { word: "bright", antonym: "dark" },
        { word: "clean", antonym: "dirty" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(synonData, rng);
        q.push(createTyping("vocab_g4", "synonyms_antonyms_g4", `What is an antonym of '${data.word}'?`, data.antonym));
      }
      return q;
    },
    similes_metaphors_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const simileData = [
        { simile: "cheetah", sentence: "She ran as fast as a ___." },
        { simile: "feather", sentence: "The pillow was as soft as a ___." },
        { simile: "ice", sentence: "His heart was as cold as ___." },
        { simile: "ocean", sentence: "Her eyes were like the ___." },
        { simile: "mountain", sentence: "His love was as strong as a ___." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(simileData, rng);
        q.push(createTyping("vocab_g4", "similes_metaphors_g4", `Complete the simile: '${data.sentence}'`, data.simile));
      }
      return q;
    },
    context_clues_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const contextData = [
        { word: "benevolent", definition: "kind and generous" },
        { word: "meticulous", definition: "very careful and precise" },
        { word: "ephemeral", definition: "lasting for a very short time" },
        { word: "ambiguous", definition: "unclear or having multiple meanings" },
        { word: "obstinate", definition: "stubbornly refusing to change" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(contextData, rng);
        q.push(createTyping("vocab_g4", "context_clues_g4", `What does '${data.word}' mean?`, data.definition));
      }
      return q;
    },
    domain_vocab_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const domainData = [
        { word: "photosynthesis", definition: "process by which plants make food using sunlight" },
        { word: "democracy", definition: "a system of government by the people" },
        { word: "denominator", definition: "the number below the line in a fraction" },
        { word: "metaphor", definition: "a figure of speech comparing two things" },
        { word: "hypothesis", definition: "a proposed explanation based on limited evidence" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(domainData, rng);
        q.push(createTyping("vocab_g4", "domain_vocab_g4", `Define '${data.word}':`, data.definition));
      }
      return q;
    },
    spelling_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const spellingData = [
        { correct: "believe" },
        { correct: "receive" },
        { correct: "necessary" },
        { correct: "separate" },
        { correct: "rhythm" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(spellingData, rng);
        q.push(createTyping("spelling_g4", "spelling_g4", `Spell correctly: ${data.correct.toUpperCase()}`, data.correct));
      }
      return q;
    },
    idioms_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const idiomData = [
        { idiom: "piece of cake", meaning: "something very easy" },
        { idiom: "under the weather", meaning: "feeling sick or unwell" },
        { idiom: "break the ice", meaning: "start a conversation" },
        { idiom: "hit the books", meaning: "study hard" },
        { idiom: "burning the midnight oil", meaning: "working late into the night" },
        { idiom: "cost an arm and a leg", meaning: "be very expensive" },
        { idiom: "raining cats and dogs", meaning: "raining very heavily" },
        { idiom: "let the cat out of the bag", meaning: "reveal a secret" },
      ];
      for (let i = 0; i < 20; i++) {
        const idiom = pick(idiomData, rng);
        const wrong = idiomData.filter(id => id.idiom !== idiom.idiom).map(id => id.meaning).slice(0, 3);
        q.push(createMCQ("vocab_g4", "idioms_g4",
          `What does '${idiom.idiom}' mean?`, idiom.meaning, wrong));
      }
      return q;
    },
    idioms_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const idiomData = [
        { idiom: "piece of cake", meaning: "something very easy" },
        { idiom: "under the weather", meaning: "feeling sick" },
        { idiom: "break the ice", meaning: "start a conversation" },
        { idiom: "hit the books", meaning: "study hard" },
        { idiom: "raining cats and dogs", meaning: "raining heavily" },
        { idiom: "let the cat out of the bag", meaning: "reveal a secret" },
        { idiom: "cost an arm and a leg", meaning: "very expensive" },
        { idiom: "burning the midnight oil", meaning: "working late" },
      ];
      for (let i = 0; i < 15; i++) {
        const idiom = pick(idiomData, rng);
        q.push(createTyping("vocab_g4", "idioms_g4", `What does '${idiom.idiom}' mean?`, idiom.meaning));
      }
      return q;
    },
    transition_words_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const transData = [
        { word: "however", use: "to contrast or show a different idea" },
        { word: "therefore", use: "to show a result or conclusion" },
        { word: "meanwhile", use: "to show something happening at the same time" },
        { word: "finally", use: "to show the last item in a sequence" },
        { word: "furthermore", use: "to add more information" },
        { word: "in conclusion", use: "to summarize or finish" },
        { word: "for example", use: "to provide an example" },
        { word: "as a result", use: "to show cause and effect" },
      ];
      for (let i = 0; i < 20; i++) {
        const trans = pick(transData, rng);
        const wrong = transData.filter(t => t.word !== trans.word).map(t => t.word).slice(0, 3);
        q.push(createMCQ("vocab_g4", "transition_words_g4",
          `Choose the best transition word for: "${trans.use}"`, trans.word, wrong));
      }
      return q;
    },
    transition_words_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const transData = [
        { word: "however", meaning: "shows contrast" },
        { word: "therefore", meaning: "shows result" },
        { word: "meanwhile", meaning: "at the same time" },
        { word: "finally", meaning: "last in sequence" },
        { word: "furthermore", meaning: "adds information" },
        { word: "in conclusion", meaning: "summarizes" },
      ];
      for (let i = 0; i < 15; i++) {
        const trans = pick(transData, rng);
        q.push(createTyping("vocab_g4", "transition_words_g4", `Transition word meaning '${trans.meaning}':`, trans.word));
      }
      return q;
    },
    science_vocab_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sciData = [
        { word: "experiment", definition: "a test to discover something" },
        { word: "hypothesis", definition: "a suggested explanation to be tested" },
        { word: "organism", definition: "a living thing (animal or plant)" },
        { word: "energy", definition: "the power to do work or cause change" },
        { word: "photosynthesis", definition: "process plants use to make food from sunlight" },
        { word: "ecosystem", definition: "a community of living things in an area" },
        { word: "gravity", definition: "the force that pulls objects toward Earth" },
        { word: "biodiversity", definition: "the variety of different species" },
      ];
      for (let i = 0; i < 20; i++) {
        const sci = pick(sciData, rng);
        const wrong = sciData.filter(s => s.word !== sci.word).map(s => s.definition).slice(0, 3);
        q.push(createMCQ("vocab_g4", "science_vocab_g4",
          `What is '${sci.word}'?`, sci.definition, wrong));
      }
      return q;
    },
    science_vocab_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sciData = [
        { word: "experiment", hint: "a test to discover something" },
        { word: "hypothesis", hint: "suggested explanation to be tested" },
        { word: "organism", hint: "a living thing" },
        { word: "energy", hint: "power to do work" },
        { word: "ecosystem", hint: "community of living things" },
        { word: "gravity", hint: "force pulling toward Earth" },
      ];
      for (let i = 0; i < 15; i++) {
        const sci = pick(sciData, rng);
        q.push(createTyping("vocab_g4", "science_vocab_g4", `Science: "${sci.hint}"`, sci.word));
      }
      return q;
    },
    geography_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const geoData = [
        { word: "continent", definition: "one of the seven large areas of land" },
        { word: "equator", definition: "an imaginary line around the middle of Earth" },
        { word: "hemisphere", definition: "half of Earth divided by the equator" },
        { word: "capital", definition: "the city where a government is located" },
        { word: "latitude", definition: "distance north or south of the equator" },
        { word: "longitude", definition: "distance east or west of a starting point" },
        { word: "continent", definition: "one of seven large areas of land" },
        { word: "peninsula", definition: "land surrounded by water on three sides" },
      ];
      for (let i = 0; i < 20; i++) {
        const geo = pick(geoData, rng);
        const wrong = geoData.filter(g => g.word !== geo.word).map(g => g.definition).slice(0, 3);
        q.push(createMCQ("vocab_g4", "geography_g4",
          `What is a '${geo.word}'?`, geo.definition, wrong));
      }
      return q;
    },
    geography_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const geoData = [
        { word: "continent", hint: "One of seven large areas of land" },
        { word: "equator", hint: "Imaginary line around Earth's middle" },
        { word: "hemisphere", hint: "Half of Earth" },
        { word: "capital", hint: "City where government is located" },
        { word: "latitude", hint: "Distance north or south" },
        { word: "peninsula", hint: "Land surrounded by water on three sides" },
      ];
      for (let i = 0; i < 15; i++) {
        const geo = pick(geoData, rng);
        q.push(createTyping("vocab_g4", "geography_g4", `Geography: "${geo.hint}"`, geo.word));
      }
      return q;
    },
    government_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const govData = [
        { word: "president", definition: "the elected leader of a country" },
        { word: "law", definition: "a rule that must be followed" },
        { word: "vote", definition: "to make a choice in an election" },
        { word: "democracy", definition: "a system where people have power through voting" },
        { word: "citizen", definition: "a person who legally belongs to a country" },
        { word: "government", definition: "the system that makes and enforces rules" },
        { word: "constitution", definition: "a document that outlines a country's rules" },
        { word: "amendment", definition: "an official change to a constitution or law" },
      ];
      for (let i = 0; i < 20; i++) {
        const gov = pick(govData, rng);
        const wrong = govData.filter(g => g.word !== gov.word).map(g => g.definition).slice(0, 3);
        q.push(createMCQ("vocab_g4", "government_g4",
          `What is a '${gov.word}'?`, gov.definition, wrong));
      }
      return q;
    },
    government_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const govData = [
        { word: "president", hint: "Elected leader of a country" },
        { word: "law", hint: "A rule that must be followed" },
        { word: "vote", hint: "Make a choice in an election" },
        { word: "democracy", hint: "System where people have power" },
        { word: "citizen", hint: "Person who belongs to a country" },
        { word: "constitution", hint: "Document outlining country's rules" },
      ];
      for (let i = 0; i < 15; i++) {
        const gov = pick(govData, rng);
        q.push(createTyping("vocab_g4", "government_g4", `Government: "${gov.hint}"`, gov.word));
      }
      return q;
    },
    persuasive_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const persuadeData = [
        { word: "opinion", definition: "a belief or judgment that may not be fact" },
        { word: "evidence", definition: "facts or examples that support an argument" },
        { word: "argument", definition: "a set of reasons to support a position" },
        { word: "convince", definition: "to make someone believe something" },
        { word: "persuade", definition: "to influence someone to do something" },
        { word: "claim", definition: "a statement that something is true" },
        { word: "reason", definition: "an explanation for why something is true" },
        { word: "counterargument", definition: "an argument against another position" },
      ];
      for (let i = 0; i < 20; i++) {
        const pers = pick(persuadeData, rng);
        const wrong = persuadeData.filter(p => p.word !== pers.word).map(p => p.definition).slice(0, 3);
        q.push(createMCQ("vocab_g4", "persuasive_g4",
          `What is a '${pers.word}' in writing?`, pers.definition, wrong));
      }
      return q;
    },
    persuasive_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const persuadeData = [
        { word: "opinion", hint: "A belief or judgment" },
        { word: "evidence", hint: "Facts that support an argument" },
        { word: "argument", hint: "Reasons to support a position" },
        { word: "convince", hint: "Make someone believe something" },
        { word: "claim", hint: "A statement that is true" },
        { word: "reason", hint: "Explanation for why something is true" },
      ];
      for (let i = 0; i < 15; i++) {
        const pers = pick(persuadeData, rng);
        q.push(createTyping("vocab_g4", "persuasive_g4", `Persuasive writing: "${pers.hint}"`, pers.word));
      }
      return q;
    },
    word_origins_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rootData = [
        { word: "biography", root: "bio-", meaning: "life" },
        { word: "geology", root: "geo-", meaning: "earth" },
        { word: "telephone", root: "tele-", meaning: "far/distance" },
        { word: "microscope", root: "micro-", meaning: "small" },
        { word: "unicorn", root: "uni-", meaning: "one" },
        { word: "bicycle", root: "bi-", meaning: "two" },
        { word: "marine", root: "mar-", meaning: "sea" },
        { word: "aquarium", root: "aqua-", meaning: "water" },
      ];
      for (let i = 0; i < 20; i++) {
        const root = pick(rootData, rng);
        q.push(createMCQ("vocab_g4", "word_origins_g4",
          `What does the root '${root.root}' mean? (${root.word})`, root.meaning, ["color", "shape", "size"]));
      }
      return q;
    },
    word_origins_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rootData = [
        { word: "biography", root: "bio", meaning: "life" },
        { word: "geology", root: "geo", meaning: "earth" },
        { word: "telephone", root: "tele", meaning: "far/distance" },
        { word: "microscope", root: "micro", meaning: "small" },
        { word: "unicorn", root: "uni", meaning: "one" },
        { word: "aquarium", root: "aqua", meaning: "water" },
      ];
      for (let i = 0; i < 15; i++) {
        const root = pick(rootData, rng);
        q.push(createTyping("vocab_g4", "word_origins_g4", `Root '${root.root}' means:`, root.meaning));
      }
      return q;
    },
    figurative_lang_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const figData = [
        { device: "alliteration", example: "The big brown bear bounced by the bridge." },
        { device: "onomatopoeia", example: "The bees buzzed loudly around the flowers." },
        { device: "hyperbole", example: "I've told you a million times!" },
        { device: "personification", example: "The wind whispered through the trees." },
        { device: "simile", example: "Her smile was as bright as the sun." },
        { device: "metaphor", example: "The classroom was a zoo during the lesson." },
        { device: "idiom", example: "It's raining cats and dogs." },
        { device: "pun", example: "I used to be a banker, but I lost interest." },
      ];
      for (let i = 0; i < 20; i++) {
        const fig = pick(figData, rng);
        const wrong = figData.filter(f => f.device !== fig.device).map(f => f.device).slice(0, 3);
        q.push(createMCQ("vocab_g4", "figurative_lang_g4",
          `What figurative device is used? "${fig.example}"`, fig.device, wrong));
      }
      return q;
    },
    figurative_lang_g4_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const figData = [
        { device: "alliteration", example: "Big brown bear bounced" },
        { device: "onomatopoeia", example: "The bees buzzed" },
        { device: "hyperbole", example: "I've told you a million times" },
        { device: "personification", example: "The wind whispered" },
        { device: "simile", example: "Bright as the sun" },
        { device: "metaphor", example: "The classroom was a zoo" },
      ];
      for (let i = 0; i < 15; i++) {
        const fig = pick(figData, rng);
        q.push(createTyping("vocab_g4", "figurative_lang_g4", `Device used: "${fig.example}"`, fig.device));
      }
      return q;
    },
  },
};
// ─── GRADE 5 GENERATORS ───────────────────────────────────────────────────

export const G5_Generators = {
  pos_g5: {
    conjunctions_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const subConj = [
        { conj: "although", sentence: "___ it was cold, she wore a dress.", type: "subordinating" },
        { conj: "because", sentence: "He stayed home ___ he was sick.", type: "subordinating" },
        { conj: "while", sentence: "___ I was sleeping, it started to rain.", type: "subordinating" },
        { conj: "unless", sentence: "You can't go ___ you finish your homework.", type: "subordinating" },
        { conj: "since", sentence: "___ you asked nicely, I'll help you.", type: "subordinating" },
        { conj: "if", sentence: "I'll come ___ you invite me.", type: "subordinating" },
        { conj: "until", sentence: "Wait here ___ I get back.", type: "subordinating" },
        { conj: "after", sentence: "___ the movie ended, we went home.", type: "subordinating" },
        { conj: "before", sentence: "Wash your hands ___ you eat.", type: "subordinating" },
        { conj: "when", sentence: "Call me ___ you arrive.", type: "subordinating" },
        { conj: "once", sentence: "___ you finish eating, we can leave.", type: "subordinating" },
        { conj: "whereas", sentence: "___ cats are independent, dogs are loyal.", type: "subordinating" },
        { conj: "provided", sentence: "You can borrow my bike ___ you return it by noon.", type: "subordinating" },
        { conj: "supposing", sentence: "___ it rains tomorrow, will you still come?", type: "subordinating" },
        { conj: "as", sentence: "___ you know, I'm interested in science.", type: "subordinating" },
        { conj: "wherever", sentence: "___ you go, I will follow.", type: "subordinating" },
      ];
      const coordConj = ["and", "but", "or", "so", "yet", "for", "nor"];
      for (let i = 0; i < 30; i++) {
        const variant = Math.floor(rng() * 3);
        if (isMCQ(5, rng)) {
          if (variant === 0) {
            const data = pick(subConj, rng);
            const wrong = subConj.filter(c => c.conj !== data.conj).map(c => c.conj).slice(0, 3);
            q.push(createMCQ("pos_g5", "conjunctions_g5",
              `Which SUBORDINATING conjunction best fills the blank? "${data.sentence}"`, data.conj, wrong));
          } else if (variant === 1) {
            const data = pick(subConj, rng);
            q.push(createMCQ("pos_g5", "conjunctions_g5",
              `Is '${data.conj}' a coordinating or subordinating conjunction?`, "subordinating",
              ["coordinating", "correlative", "adverbial"]));
          } else {
            const coord = pick(coordConj, rng);
            q.push(createMCQ("pos_g5", "conjunctions_g5",
              `Is '${coord}' a coordinating or subordinating conjunction?`, "coordinating",
              ["subordinating", "correlative", "preposition"]));
          }
        } else {
          if (variant === 0) {
            const data = pick(subConj, rng);
            q.push(createTyping("pos_g5", "conjunctions_g5",
              `Fill in the subordinating conjunction: "${data.sentence}"`, data.conj));
          } else {
            q.push(createTyping("pos_g5", "conjunctions_g5",
              "Name a subordinating conjunction:", pick(subConj, rng).conj));
          }
        }
      }
      return q;
    },
    interjections_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const interjData = [
        { word: "Wow", emotion: "amazement", sentence: "___! That was incredible!", wrong: ["Run", "The", "Quickly"] },
        { word: "Ouch", emotion: "pain", sentence: "___! I stubbed my toe!", wrong: ["Walk", "Happy", "Slowly"] },
        { word: "Hooray", emotion: "joy", sentence: "___! We won the game!", wrong: ["Sad", "Because", "Very"] },
        { word: "Yikes", emotion: "surprise", sentence: "___! There's a spider!", wrong: ["Slow", "He", "Jumped"] },
        { word: "Alas", emotion: "sorrow", sentence: "___! The good times have ended.", wrong: ["Run", "Very", "Happy"] },
        { word: "Bravo", emotion: "approval", sentence: "___! What a great performance!", wrong: ["Walk", "Sad", "Under"] },
        { word: "Oops", emotion: "mistake", sentence: "___! I dropped the plate.", wrong: ["The", "Quickly", "Happy"] },
        { word: "Hurrah", emotion: "excitement", sentence: "___! School is out for summer!", wrong: ["Run", "Blue", "Under"] },
        { word: "Phew", emotion: "relief", sentence: "___! That was a close call.", wrong: ["Fast", "Because", "Green"] },
        { word: "Shh", emotion: "quieting", sentence: "___! The baby is sleeping.", wrong: ["Loud", "Run", "Big"] },
        { word: "Ouch", emotion: "shock", sentence: "___! I can't believe it!", wrong: ["Go", "Really", "Maybe"] },
        { word: "Hey", emotion: "attention", sentence: "___! Over here!", wrong: ["Stop", "Look", "Good"] },
        { word: "Gosh", emotion: "wonder", sentence: "___! That's amazing!", wrong: ["No", "But", "Yet"] },
        { word: "Hmm", emotion: "thinking", sentence: "___! Let me consider that.", wrong: ["Yes", "See", "Go"] },
        { word: "Ouch", emotion: "regret", sentence: "___! I shouldn't have done that.", wrong: ["Oh", "Yes", "Sure"] },
        { word: "Wow", emotion: "admiration", sentence: "___! What a beautiful view!", wrong: ["Run", "No", "Stop"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(interjData, rng);
        if (isMCQ(5, rng)) {
          const variant = Math.floor(rng() * 3);
          if (variant === 0) {
            q.push(createMCQ("pos_g5", "interjections_g5",
              `Which word is an INTERJECTION? "${data.sentence}"`, data.word, data.wrong));
          } else if (variant === 1) {
            q.push(createMCQ("pos_g5", "interjections_g5",
              `What emotion does the interjection '${data.word}!' express?`, data.emotion,
              interjData.filter(d => d.word !== data.word).map(d => d.emotion).slice(0, 3)));
          } else {
            q.push(createMCQ("pos_g5", "interjections_g5",
              `Which interjection best fills the blank? "${data.sentence}"`, data.word,
              interjData.filter(d => d.word !== data.word).map(d => d.word).slice(0, 3)));
          }
        } else {
          if (rng() > 0.5) {
            q.push(createTyping("pos_g5", "interjections_g5",
              `What interjection expresses ${data.emotion}?`, data.word));
          } else {
            q.push(createTyping("pos_g5", "interjections_g5",
              `What emotion does '${data.word}!' express?`, data.emotion));
          }
        }
      }
      return q;
    },
    perfect_tenses_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const tenseData = [
        { tense: "present perfect", sentence: "She has finished her homework.", helper: "has/have + past participle" },
        { tense: "present perfect", sentence: "They have traveled to France.", helper: "has/have + past participle" },
        { tense: "present perfect", sentence: "I have eaten lunch already.", helper: "has/have + past participle" },
        { tense: "past perfect", sentence: "She had already left when I arrived.", helper: "had + past participle" },
        { tense: "past perfect", sentence: "They had finished dinner before the movie started.", helper: "had + past participle" },
        { tense: "past perfect", sentence: "He had studied hard before the test.", helper: "had + past participle" },
        { tense: "future perfect", sentence: "By Friday, I will have completed the project.", helper: "will have + past participle" },
        { tense: "future perfect", sentence: "She will have graduated by next June.", helper: "will have + past participle" },
        { tense: "future perfect", sentence: "They will have arrived by noon.", helper: "will have + past participle" },
      ];
      const allTenses = ["present perfect", "past perfect", "future perfect", "simple past", "simple present"];
      const fillBlanks = [
        { sentence: "She ___ (finish) her homework already.", answer: "has finished", tense: "present perfect" },
        { sentence: "By the time he arrived, we ___ (leave).", answer: "had left", tense: "past perfect" },
        { sentence: "By next week, they ___ (complete) the project.", answer: "will have completed", tense: "future perfect" },
        { sentence: "I ___ (visit) Paris three times.", answer: "have visited", tense: "present perfect" },
        { sentence: "She ___ (read) the book before the test.", answer: "had read", tense: "past perfect" },
      ];
      for (let i = 0; i < 30; i++) {
        const variant = Math.floor(rng() * 3);
        if (isMCQ(5, rng)) {
          if (variant === 0) {
            const data = pick(tenseData, rng);
            const wrong = allTenses.filter(t => t !== data.tense).slice(0, 3);
            q.push(createMCQ("pos_g5", "perfect_tenses_g5",
              `What tense is used in: "${data.sentence}"?`, data.tense, wrong));
          } else if (variant === 1) {
            const data = pick(tenseData, rng);
            q.push(createMCQ("pos_g5", "perfect_tenses_g5",
              `The ${data.tense} tense is formed with:`, data.helper,
              ["was + verb", "will + verb", "verb + -ed", "is + verb + -ing"]));
          } else {
            const fb = pick(fillBlanks, rng);
            const wrong = fillBlanks.filter(f => f.answer !== fb.answer).map(f => f.answer).slice(0, 3);
            q.push(createMCQ("pos_g5", "perfect_tenses_g5",
              `Fill in the correct form: "${fb.sentence}"`, fb.answer, wrong));
          }
        } else {
          if (variant === 0) {
            const data = pick(tenseData, rng);
            q.push(createTyping("pos_g5", "perfect_tenses_g5",
              `What tense is: "${data.sentence}"?`, data.tense));
          } else {
            const fb = pick(fillBlanks, rng);
            q.push(createTyping("pos_g5", "perfect_tenses_g5",
              `Fill in the correct perfect tense form: "${fb.sentence}"`, fb.answer));
          }
        }
      }
      return q;
    },
    tense_shifts_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const shiftData = [
        { sentence: "She walked in and sits down.", hasShift: true, fix: "She walked in and sat down." },
        { sentence: "He runs to the store and bought milk.", hasShift: true, fix: "He ran to the store and bought milk." },
        { sentence: "The dog barked and then runs away.", hasShift: true, fix: "The dog barked and then ran away." },
        { sentence: "I was reading when she calls me.", hasShift: true, fix: "I was reading when she called me." },
        { sentence: "She is cooking dinner and watches TV.", hasShift: true, fix: "She is cooking dinner and watching TV." },
        { sentence: "They played outside and came home at six.", hasShift: false, fix: "" },
        { sentence: "She walks to school and eats lunch there.", hasShift: false, fix: "" },
        { sentence: "He will study tonight and will take the test tomorrow.", hasShift: false, fix: "" },
        { sentence: "We went swimming and then we ate ice cream.", hasShift: false, fix: "" },
        { sentence: "The teacher explains the lesson and assigns homework.", hasShift: false, fix: "" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(shiftData, rng);
        if (isMCQ(5, rng)) {
          if (rng() > 0.5) {
            q.push(createMCQ("pos_g5", "tense_shifts_g5",
              `Does this sentence have an INCORRECT tense shift? "${data.sentence}"`,
              data.hasShift ? "yes" : "no", data.hasShift ? ["no", "cannot tell", "maybe"] : ["yes", "cannot tell", "maybe"]));
          } else if (data.hasShift) {
            const wrong = shiftData.filter(d => d.hasShift && d.fix !== data.fix).map(d => d.fix).slice(0, 2);
            wrong.push(data.sentence);
            q.push(createMCQ("pos_g5", "tense_shifts_g5",
              `Which CORRECTLY fixes the tense shift? "${data.sentence}"`, data.fix, wrong));
          } else {
            const shifted = pick(shiftData.filter(d => d.hasShift), rng);
            q.push(createMCQ("pos_g5", "tense_shifts_g5",
              "Which sentence has an INCORRECT tense shift?", shifted.sentence,
              shiftData.filter(d => !d.hasShift).map(d => d.sentence).slice(0, 3)));
          }
        } else {
          if (data.hasShift) {
            q.push(createTyping("pos_g5", "tense_shifts_g5",
              `Fix the tense shift: "${data.sentence}"`, data.fix));
          } else {
            q.push(createTyping("pos_g5", "tense_shifts_g5",
              `Does this sentence have a tense shift? (yes/no) "${data.sentence}"`, "no"));
          }
        }
      }
      return q;
    },
    correlative_conj_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const corrData = [
        { pair: "either...or", first: "either", second: "or", sentence: "___ you study hard ___ you will fail." },
        { pair: "neither...nor", first: "neither", second: "nor", sentence: "___ the teacher ___ the students could solve it." },
        { pair: "both...and", first: "both", second: "and", sentence: "___ Sarah ___ Tom passed the test." },
        { pair: "not only...but also", first: "not only", second: "but also", sentence: "He is ___ smart ___ kind." },
        { pair: "whether...or", first: "whether", second: "or", sentence: "I don't know ___ to go ___ to stay." },
      ];
      const allPairs = corrData.map(c => c.pair);
      for (let i = 0; i < 30; i++) {
        const data = pick(corrData, rng);
        if (isMCQ(5, rng)) {
          const variant = Math.floor(rng() * 3);
          if (variant === 0) {
            const wrong = allPairs.filter(p => p !== data.pair).slice(0, 3);
            q.push(createMCQ("pos_g5", "correlative_conj_g5",
              `Which correlative conjunction pair fills the blanks? "${data.sentence}"`, data.pair, wrong));
          } else if (variant === 1) {
            q.push(createMCQ("pos_g5", "correlative_conj_g5",
              "Which is a CORRELATIVE conjunction pair?", data.pair,
              ["because...so", "and...but", "if...then", "since...when"]));
          } else {
            q.push(createMCQ("pos_g5", "correlative_conj_g5",
              `What is the second part of '${data.first}...'?`, data.second,
              corrData.filter(c => c.second !== data.second).map(c => c.second).slice(0, 3)));
          }
        } else {
          if (rng() > 0.5) {
            q.push(createTyping("pos_g5", "correlative_conj_g5",
              `Complete the pair: '${data.first}...'`, data.second));
          } else {
            q.push(createTyping("pos_g5", "correlative_conj_g5",
              "Name a correlative conjunction pair:", pick(allPairs, rng)));
          }
        }
      }
      return q;
    }
  },
  sentences_g5: {
    complex_sentences_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceTypes = [
        { sentence: "Although it was raining, she went outside.", type: "complex" },
        { sentence: "She went outside.", type: "simple" },
        { sentence: "She went outside, and it started raining.", type: "compound" },
        { sentence: "Because he was tired, he went to bed, and his mom turned off the light.", type: "compound-complex" },
        { sentence: "When the bell rings, students leave the classroom.", type: "complex" },
        { sentence: "I will go if you come with me.", type: "complex" },
        { sentence: "The cat sat on the mat.", type: "simple" },
        { sentence: "The sun set, and the stars appeared.", type: "compound" },
        { sentence: "Since it was late, we left early, but Tom stayed behind.", type: "compound-complex" },
        { sentence: "Unless you hurry, you will miss the bus.", type: "complex" },
      ];
      const allTypes = ["simple", "compound", "complex", "compound-complex"];
      for (let i = 0; i < 30; i++) {
        const data = pick(sentenceTypes, rng);
        if (isMCQ(5, rng)) {
          if (rng() > 0.5) {
            const wrong = allTypes.filter(t => t !== data.type).slice(0, 3);
            q.push(createMCQ("sentences_g5", "complex_sentences_g5",
              `What type of sentence is this? "${data.sentence}"`, data.type, wrong));
          } else {
            const complexOnly = sentenceTypes.filter(s => s.type === "complex");
            const notComplex = sentenceTypes.filter(s => s.type !== "complex");
            const correct = pick(complexOnly, rng);
            const wrongSents = shuffle(notComplex, rng).slice(0, 3).map(s => s.sentence);
            q.push(createMCQ("sentences_g5", "complex_sentences_g5",
              "Which is a COMPLEX sentence?", correct.sentence, wrongSents));
          }
        } else {
          q.push(createTyping("sentences_g5", "complex_sentences_g5",
            `What type of sentence? (simple/compound/complex/compound-complex) "${data.sentence}"`, data.type));
        }
      }
      return q;
    },
    intro_clauses_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const introData = [
        { correct: "When I got home, I ate dinner.", incorrect: "When I got home I ate dinner.", intro: "When I got home" },
        { correct: "After the game ended, we went out to eat.", incorrect: "After the game ended we went out to eat.", intro: "After the game ended" },
        { correct: "Because it was raining, we stayed inside.", incorrect: "Because it was raining we stayed inside.", intro: "Because it was raining" },
        { correct: "Before you leave, please lock the door.", incorrect: "Before you leave please lock the door.", intro: "Before you leave" },
        { correct: "If you study hard, you will pass the test.", incorrect: "If you study hard you will pass the test.", intro: "If you study hard" },
        { correct: "Although she was tired, she finished her work.", incorrect: "Although she was tired she finished her work.", intro: "Although she was tired" },
        { correct: "During the summer, we visit our grandparents.", incorrect: "During the summer we visit our grandparents.", intro: "During the summer" },
        { correct: "While waiting for the bus, I read a book.", incorrect: "While waiting for the bus I read a book.", intro: "While waiting for the bus" },
        { correct: "In the morning, the birds sing loudly.", incorrect: "In the morning the birds sing loudly.", intro: "In the morning" },
        { correct: "Since you asked, I'll tell you the truth.", incorrect: "Since you asked I'll tell you the truth.", intro: "Since you asked" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(introData, rng);
        if (isMCQ(5, rng)) {
          if (rng() > 0.5) {
            q.push(createMCQ("sentences_g5", "intro_clauses_g5",
              "Which sentence correctly uses a comma after the introductory clause?",
              data.correct, [data.incorrect,
                pick(introData.filter(d => d !== data), rng).incorrect,
                pick(introData.filter(d => d !== data), rng).incorrect]));
          } else {
            q.push(createMCQ("sentences_g5", "intro_clauses_g5",
              `What is the introductory clause in: "${data.correct}"?`, data.intro,
              introData.filter(d => d.intro !== data.intro).map(d => d.intro).slice(0, 3)));
          }
        } else {
          if (rng() > 0.5) {
            q.push(createTyping("sentences_g5", "intro_clauses_g5",
              `Add the missing comma: "${data.incorrect}"`, data.correct));
          } else {
            q.push(createTyping("sentences_g5", "intro_clauses_g5",
              `What is the introductory element in: "${data.correct}"?`, data.intro));
          }
        }
      }
      return q;
    },
    combining_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const combineData = [
        { sent1: "The cat was black.", sent2: "It had blue eyes.", combined: "The black cat had blue eyes." },
        { sent1: "She likes pizza.", sent2: "She likes pasta.", combined: "She likes both pizza and pasta." },
        { sent1: "He ran fast.", sent2: "He was tired.", combined: "Although he was tired, he ran fast." },
        { sent1: "The movie was long.", sent2: "The movie was boring.", combined: "The movie was long and boring." },
        { sent1: "We went to the park.", sent2: "We played soccer.", combined: "We went to the park and played soccer." },
        { sent1: "It was raining.", sent2: "She went for a walk.", combined: "Even though it was raining, she went for a walk." },
        { sent1: "He studied all night.", sent2: "He passed the exam.", combined: "Because he studied all night, he passed the exam." },
        { sent1: "The book was interesting.", sent2: "I finished it quickly.", combined: "The book was so interesting that I finished it quickly." },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(combineData, rng);
        if (isMCQ(5, rng)) {
          const wrong = combineData.filter(c => c.combined !== data.combined).map(c => c.combined).slice(0, 3);
          q.push(createMCQ("sentences_g5", "combining_g5",
            `Best way to combine: "${data.sent1}" + "${data.sent2}"?`, data.combined, wrong));
        } else {
          q.push(createTyping("sentences_g5", "combining_g5",
            `Combine: "${data.sent1}" "${data.sent2}"`, data.combined));
        }
      }
      return q;
    }
  },
  spelling_g5: {
    commas_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const commaRules = [
        { correct: "I bought apples, oranges, and bananas.", incorrect: "I bought apples oranges and bananas.", rule: "items in a series" },
        { correct: "She packed shirts, pants, and shoes.", incorrect: "She packed shirts pants and shoes.", rule: "items in a series" },
        { correct: "After the movie, we went to dinner.", incorrect: "After the movie we went to dinner.", rule: "after introductory element" },
        { correct: "Running quickly, the dog chased the cat.", incorrect: "Running quickly the dog chased the cat.", rule: "after introductory phrase" },
        { correct: "My sister, who lives in Texas, is visiting.", incorrect: "My sister who lives in Texas is visiting.", rule: "nonessential clause" },
        { correct: "The tall, dark building loomed ahead.", incorrect: "The tall dark building loomed ahead.", rule: "coordinate adjectives" },
        { correct: "Yes, I would like some water.", incorrect: "Yes I would like some water.", rule: "after introductory word" },
        { correct: "We went hiking, and then we had a picnic.", incorrect: "We went hiking and then we had a picnic.", rule: "compound sentence" },
        { correct: "Dear Mom, I miss you very much.", incorrect: "Dear Mom I miss you very much.", rule: "after greeting" },
        { correct: "The test is on March 5, 2026.", incorrect: "The test is on March 5 2026.", rule: "in dates" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(commaRules, rng);
        if (isMCQ(5, rng)) {
          if (rng() > 0.5) {
            q.push(createMCQ("spelling_g5", "commas_g5",
              "Which sentence uses commas correctly?", data.correct,
              [data.incorrect,
                pick(commaRules.filter(r => r !== data), rng).incorrect,
                pick(commaRules.filter(r => r !== data), rng).incorrect]));
          } else {
            q.push(createMCQ("spelling_g5", "commas_g5",
              `What comma rule applies in: "${data.correct}"?`, data.rule,
              commaRules.filter(r => r.rule !== data.rule).map(r => r.rule).slice(0, 3)));
          }
        } else {
          if (rng() > 0.5) {
            q.push(createTyping("spelling_g5", "commas_g5",
              `Add commas where needed: "${data.incorrect}"`, data.correct));
          } else {
            q.push(createTyping("spelling_g5", "commas_g5",
              `What comma rule applies? "${data.correct}"`, data.rule));
          }
        }
      }
      return q;
    },
    titles_italics_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const titleData = [
        { title: "Harry Potter", type: "book", format: "italics or underline" },
        { title: "The Lion King", type: "movie", format: "italics or underline" },
        { title: "Time", type: "magazine", format: "italics or underline" },
        { title: "The Star-Spangled Banner", type: "song", format: "quotation marks" },
        { title: "The Road Not Taken", type: "poem", format: "quotation marks" },
        { title: "My Summer Vacation", type: "short story", format: "quotation marks" },
        { title: "The New York Times", type: "newspaper", format: "italics or underline" },
        { title: "Minecraft", type: "video game", format: "italics or underline" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(titleData, rng);
        if (isMCQ(5, rng)) {
          if (rng() > 0.5) {
            q.push(createMCQ("spelling_g5", "titles_italics_g5",
              `How should a ${data.type} title be written?`, data.format,
              ["in bold", "in all capitals", data.format === "italics or underline" ? "quotation marks" : "italics or underline", "in parentheses"]));
          } else {
            q.push(createMCQ("spelling_g5", "titles_italics_g5",
              `'${data.title}' is a ${data.type}. How should it be formatted?`, data.format,
              ["in bold", "in all capitals", "no special formatting", data.format === "italics or underline" ? "quotation marks" : "italics or underline"]));
          }
        } else {
          q.push(createTyping("spelling_g5", "titles_italics_g5",
            `How should a ${data.type} title like '${data.title}' be formatted? (italics or underline / quotation marks)`, data.format));
        }
      }
      return q;
    },
    apostrophes_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const possessiveData = [
        { noun: "dog", type: "singular", possessive: "dog's", example: "The dog's bone is hidden." },
        { noun: "cat", type: "singular", possessive: "cat's", example: "The cat's tail is fluffy." },
        { noun: "children", type: "irregular plural", possessive: "children's", example: "The children's books are on the shelf." },
        { noun: "dogs", type: "regular plural", possessive: "dogs'", example: "The dogs' barking was loud." },
        { noun: "James", type: "singular ending in s", possessive: "James's", example: "James's car is red." },
        { noun: "women", type: "irregular plural", possessive: "women's", example: "The women's team won." },
        { noun: "teachers", type: "regular plural", possessive: "teachers'", example: "The teachers' lounge is upstairs." },
        { noun: "baby", type: "singular", possessive: "baby's", example: "The baby's toy fell on the floor." },
      ];
      const contractionData = [
        { contraction: "it's", expansion: "it is", confused: "its", sentence: "___ raining outside." },
        { contraction: "they're", expansion: "they are", confused: "their", sentence: "___ going to the park." },
        { contraction: "you're", expansion: "you are", confused: "your", sentence: "___ my best friend." },
        { contraction: "who's", expansion: "who is", confused: "whose", sentence: "___ coming to dinner?" },
      ];
      for (let i = 0; i < 30; i++) {
        const variant = Math.floor(rng() * 3);
        if (isMCQ(5, rng)) {
          if (variant === 0) {
            const data = pick(possessiveData, rng);
            const wrong = possessiveData.filter(d => d.possessive !== data.possessive).map(d => d.possessive).slice(0, 3);
            q.push(createMCQ("spelling_g5", "apostrophes_g5",
              `What is the possessive form of '${data.noun}' (${data.type})?`, data.possessive, wrong));
          } else if (variant === 1) {
            const data = pick(contractionData, rng);
            q.push(createMCQ("spelling_g5", "apostrophes_g5",
              `Fill in: "${data.sentence}" (meaning: ${data.expansion})`, data.contraction,
              [data.confused, "its'", "there"]));
          } else {
            const data = pick(possessiveData, rng);
            const wrongSentences = possessiveData.filter(d => d !== data).map(d =>
              d.example.replace(d.possessive, d.noun + "s")).slice(0, 3);
            q.push(createMCQ("spelling_g5", "apostrophes_g5",
              "Which sentence uses the apostrophe correctly?", data.example, wrongSentences));
          }
        } else {
          if (variant === 0) {
            const data = pick(possessiveData, rng);
            q.push(createTyping("spelling_g5", "apostrophes_g5",
              `Write the possessive form of '${data.noun}' (${data.type}):`, data.possessive));
          } else {
            const data = pick(contractionData, rng);
            q.push(createTyping("spelling_g5", "apostrophes_g5",
              `What does '${data.contraction}' stand for?`, data.expansion));
          }
        }
      }
      return q;
    },
    spelling_strategies_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const strategyData = [
        { rule: "i before e except after c", examples: ["receive", "ceiling", "deceive"] },
        { rule: "drop silent e before -ing", examples: ["make to making", "write to writing", "hope to hoping"] },
        { rule: "double final consonant (CVC)", examples: ["run to running", "stop to stopping", "swim to swimming"] },
        { rule: "change y to i before suffix", examples: ["carry to carried", "baby to babies", "study to studied"] },
        { rule: "add -es after s, sh, ch, x, z", examples: ["box to boxes", "wish to wishes", "church to churches"] },
      ];
      const misspelledPairs = [
        { wrong: "recieve", correct: "receive", rule: "i before e except after c" },
        { wrong: "belive", correct: "believe", rule: "i before e" },
        { wrong: "runing", correct: "running", rule: "double final consonant (CVC)" },
        { wrong: "stoping", correct: "stopping", rule: "double final consonant (CVC)" },
        { wrong: "happyness", correct: "happiness", rule: "change y to i before suffix" },
        { wrong: "beautifull", correct: "beautiful", rule: "suffix -ful has one l" },
        { wrong: "writting", correct: "writing", rule: "drop silent e before -ing" },
        { wrong: "occured", correct: "occurred", rule: "double final consonant (CVC)" },
        { wrong: "definately", correct: "definitely", rule: "no a in definitely" },
        { wrong: "seperate", correct: "separate", rule: "separate has a in the middle" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(5, rng)) {
          const variant = Math.floor(rng() * 3);
          if (variant === 0) {
            const data = pick(misspelledPairs, rng);
            q.push(createMCQ("spelling_g5", "spelling_strategies_g5",
              "Which is spelled correctly?", data.correct,
              [data.wrong, pick(misspelledPairs.filter(m => m !== data), rng).wrong,
                pick(misspelledPairs.filter(m => m !== data), rng).wrong]));
          } else if (variant === 1) {
            const data = pick(strategyData, rng);
            const example = pick(data.examples, rng);
            const wrong = strategyData.filter(s => s.rule !== data.rule).map(s => s.rule).slice(0, 3);
            q.push(createMCQ("spelling_g5", "spelling_strategies_g5",
              `Which spelling rule applies to '${example}'?`, data.rule, wrong));
          } else {
            const data = pick(misspelledPairs, rng);
            q.push(createMCQ("spelling_g5", "spelling_strategies_g5",
              `What spelling rule helps with '${data.correct}'?`, data.rule,
              misspelledPairs.filter(m => m.rule !== data.rule).map(m => m.rule).slice(0, 3)));
          }
        } else {
          const data = pick(misspelledPairs, rng);
          q.push(createTyping("spelling_g5", "spelling_strategies_g5",
            `Correct the misspelling: '${data.wrong}'`, data.correct));
        }
      }
      return q;
    }
  },
  vocab_g5: {
    greek_latin_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rootData = [
        { root: "port", origin: "Latin", meaning: "carry", examples: ["transport", "portable", "export", "import"] },
        { root: "aqua", origin: "Latin", meaning: "water", examples: ["aquarium", "aquatic", "aqueduct"] },
        { root: "geo", origin: "Greek", meaning: "earth", examples: ["geography", "geology", "geometry"] },
        { root: "bio", origin: "Greek", meaning: "life", examples: ["biography", "biology", "biosphere"] },
        { root: "photo", origin: "Greek", meaning: "light", examples: ["photograph", "photosynthesis", "photon"] },
        { root: "chron", origin: "Greek", meaning: "time", examples: ["chronological", "chronicle", "synchronize"] },
        { root: "graph", origin: "Greek", meaning: "write", examples: ["autograph", "paragraph", "graphite"] },
        { root: "tele", origin: "Greek", meaning: "far", examples: ["telephone", "television", "telescope"] },
        { root: "aud", origin: "Latin", meaning: "hear", examples: ["audience", "audio", "auditorium"] },
        { root: "vis", origin: "Latin", meaning: "see", examples: ["visible", "vision", "visual"] },
        { root: "dict", origin: "Latin", meaning: "say", examples: ["dictionary", "dictate", "predict"] },
        { root: "scrib", origin: "Latin", meaning: "write", examples: ["describe", "script", "manuscript"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(rootData, rng);
        const example = pick(data.examples, rng);
        if (isMCQ(5, rng)) {
          const variant = Math.floor(rng() * 3);
          if (variant === 0) {
            const wrong = rootData.filter(r => r.meaning !== data.meaning).map(r => r.meaning).slice(0, 3);
            q.push(createMCQ("vocab_g5", "greek_latin_g5",
              `The ${data.origin} root '${data.root}' means:`, data.meaning, wrong));
          } else if (variant === 1) {
            const wrong = rootData.filter(r => r.root !== data.root).map(r => r.root).slice(0, 3);
            q.push(createMCQ("vocab_g5", "greek_latin_g5",
              `Which root means '${data.meaning}'?`, data.root, wrong));
          } else {
            const wrong = rootData.filter(r => r.meaning !== data.meaning).map(r => r.meaning).slice(0, 3);
            q.push(createMCQ("vocab_g5", "greek_latin_g5",
              `What does the root in '${example}' mean?`, data.meaning, wrong));
          }
        } else {
          if (rng() > 0.5) {
            q.push(createTyping("vocab_g5", "greek_latin_g5",
              `What does the root '${data.root}' mean?`, data.meaning));
          } else {
            q.push(createTyping("vocab_g5", "greek_latin_g5",
              `What root in '${example}' means '${data.meaning}'?`, data.root));
          }
        }
      }
      return q;
    },
    prefixes_suffixes_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const affixData = [
        { affix: "un-", type: "prefix", meaning: "not", word: "unhappy", def: "not happy" },
        { affix: "re-", type: "prefix", meaning: "again", word: "rewrite", def: "write again" },
        { affix: "dis-", type: "prefix", meaning: "not or opposite", word: "disagree", def: "not agree" },
        { affix: "mis-", type: "prefix", meaning: "wrong", word: "misspell", def: "spell wrongly" },
        { affix: "pre-", type: "prefix", meaning: "before", word: "preview", def: "view before" },
        { affix: "-tion", type: "suffix", meaning: "act or state of", word: "celebration", def: "act of celebrating" },
        { affix: "-ment", type: "suffix", meaning: "state or result of", word: "agreement", def: "state of agreeing" },
        { affix: "-ness", type: "suffix", meaning: "state of being", word: "happiness", def: "state of being happy" },
        { affix: "-able", type: "suffix", meaning: "able to be", word: "comfortable", def: "able to provide comfort" },
        { affix: "-ful", type: "suffix", meaning: "full of", word: "beautiful", def: "full of beauty" },
        { affix: "-less", type: "suffix", meaning: "without", word: "careless", def: "without care" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(affixData, rng);
        if (isMCQ(5, rng)) {
          const variant = Math.floor(rng() * 3);
          if (variant === 0) {
            const wrong = affixData.filter(a => a.meaning !== data.meaning).map(a => a.meaning).slice(0, 3);
            q.push(createMCQ("vocab_g5", "prefixes_suffixes_g5",
              `What does the ${data.type} '${data.affix}' mean?`, data.meaning, wrong));
          } else if (variant === 1) {
            const wrong = affixData.filter(a => a.def !== data.def).map(a => a.def).slice(0, 3);
            q.push(createMCQ("vocab_g5", "prefixes_suffixes_g5",
              `What does '${data.word}' mean?`, data.def, wrong));
          } else {
            q.push(createMCQ("vocab_g5", "prefixes_suffixes_g5",
              `Is '${data.affix}' a prefix or suffix?`, data.type,
              [data.type === "prefix" ? "suffix" : "prefix", "root word", "conjunction"]));
          }
        } else {
          if (rng() > 0.5) {
            q.push(createTyping("vocab_g5", "prefixes_suffixes_g5",
              `What does the ${data.type} '${data.affix}' mean?`, data.meaning));
          } else {
            q.push(createTyping("vocab_g5", "prefixes_suffixes_g5",
              `What does '${data.word}' mean? (${data.affix} = ${data.meaning})`, data.def));
          }
        }
      }
      return q;
    },
    figurative_language_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const figData = [
        { phrase: "The world is a stage.", device: "metaphor" },
        { phrase: "She is as brave as a lion.", device: "simile" },
        { phrase: "The wind whispered through the trees.", device: "personification" },
        { phrase: "I've told you a million times!", device: "hyperbole" },
        { phrase: "The bees buzzed in the garden.", device: "onomatopoeia" },
        { phrase: "Life is a roller coaster.", device: "metaphor" },
        { phrase: "He was as cool as a cucumber.", device: "simile" },
        { phrase: "The sun smiled down on us.", device: "personification" },
        { phrase: "This bag weighs a ton!", device: "hyperbole" },
        { phrase: "The thunder clapped overhead.", device: "onomatopoeia" },
        { phrase: "Time is money.", device: "metaphor" },
        { phrase: "Her smile was like sunshine.", device: "simile" },
        { phrase: "The flowers danced in the breeze.", device: "personification" },
        { phrase: "I could eat a horse!", device: "hyperbole" },
        { phrase: "The snake hissed at the cat.", device: "onomatopoeia" },
      ];
      const proverbData = [
        { proverb: "Don't bite the hand that feeds you.", meaning: "don't harm those who help you" },
        { proverb: "The early bird catches the worm.", meaning: "arriving early gives an advantage" },
        { proverb: "Actions speak louder than words.", meaning: "what you do matters more than what you say" },
        { proverb: "Don't count your chickens before they hatch.", meaning: "don't assume success before it happens" },
        { proverb: "A penny saved is a penny earned.", meaning: "saving money is as valuable as earning it" },
      ];
      const allDevices = ["metaphor", "simile", "personification", "hyperbole", "onomatopoeia"];
      for (let i = 0; i < 30; i++) {
        const useProverb = rng() < 0.2;
        if (isMCQ(5, rng)) {
          if (useProverb) {
            const data = pick(proverbData, rng);
            const wrong = proverbData.filter(p => p.meaning !== data.meaning).map(p => p.meaning).slice(0, 3);
            q.push(createMCQ("vocab_g5", "figurative_language_g5",
              `What does the proverb mean? "${data.proverb}"`, data.meaning, wrong));
          } else {
            const data = pick(figData, rng);
            const wrong = allDevices.filter(d => d !== data.device).slice(0, 3);
            q.push(createMCQ("vocab_g5", "figurative_language_g5",
              `What figurative device is used? "${data.phrase}"`, data.device, wrong));
          }
        } else {
          if (useProverb) {
            const data = pick(proverbData, rng);
            q.push(createTyping("vocab_g5", "figurative_language_g5",
              `What does this proverb mean? "${data.proverb}"`, data.meaning));
          } else {
            const data = pick(figData, rng);
            q.push(createTyping("vocab_g5", "figurative_language_g5",
              `What figurative device is: "${data.phrase}"?`, data.device));
          }
        }
      }
      return q;
    },
    connotation_denotation_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordSets = [
        { denotation: "spending little money", positive: "thrifty", negative: "cheap", neutral: "economical" },
        { denotation: "thin body type", positive: "slender", negative: "skinny", neutral: "thin" },
        { denotation: "not moving quickly", positive: "leisurely", negative: "sluggish", neutral: "slow" },
        { denotation: "having strong opinions", positive: "confident", negative: "stubborn", neutral: "firm" },
        { denotation: "talking a lot", positive: "outgoing", negative: "chatty", neutral: "talkative" },
        { denotation: "old in age", positive: "mature", negative: "old", neutral: "elderly" },
        { denotation: "having a lot of interest", positive: "curious", negative: "nosy", neutral: "inquisitive" },
        { denotation: "using few words", positive: "concise", negative: "blunt", neutral: "brief" },
        { denotation: "not afraid", positive: "courageous", negative: "reckless", neutral: "bold" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(wordSets, rng);
        if (isMCQ(5, rng)) {
          const variant = Math.floor(rng() * 3);
          if (variant === 0) {
            q.push(createMCQ("vocab_g5", "connotation_denotation_g5",
              `Which word meaning '${data.denotation}' has a POSITIVE connotation?`, data.positive,
              [data.negative, data.neutral, pick(wordSets.filter(w => w !== data), rng).negative]));
          } else if (variant === 1) {
            q.push(createMCQ("vocab_g5", "connotation_denotation_g5",
              `Which word meaning '${data.denotation}' has a NEGATIVE connotation?`, data.negative,
              [data.positive, data.neutral, pick(wordSets.filter(w => w !== data), rng).positive]));
          } else {
            q.push(createMCQ("vocab_g5", "connotation_denotation_g5",
              `'${data.positive}' and '${data.negative}' both mean '${data.denotation}.' Which is more positive?`,
              data.positive, [data.negative, "both are equal", "neither"]));
          }
        } else {
          if (rng() > 0.5) {
            q.push(createTyping("vocab_g5", "connotation_denotation_g5",
              `Does '${data.negative}' have a positive or negative connotation?`, "negative"));
          } else {
            q.push(createTyping("vocab_g5", "connotation_denotation_g5",
              `Does '${data.positive}' have a positive or negative connotation?`, "positive"));
          }
        }
      }
      return q;
    },
    conjunctions_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const subConj = ["although", "because", "while", "unless", "since", "if", "until", "after", "before", "when"];
      const coordConj = ["and", "but", "or", "so", "yet", "for", "nor"];
      for (let i = 0; i < 30; i++) {
        const variant = Math.floor(rng() * 3);
        if (variant === 0) {
          const correct = pick(subConj, rng);
          const wrong = subConj.filter(c => c !== correct).slice(0, 3);
          q.push(createMCQ("pos_g5", "conjunctions_g5", `Which subordinating conjunction: "___it was cold, she went."`, correct, wrong));
        } else if (variant === 1) {
          const correct = pick(subConj, rng);
          q.push(createMCQ("pos_g5", "conjunctions_g5", `Is '${correct}' coordinating or subordinating?`, "subordinating", ["coordinating", "correlative", "adverbial"]));
        } else {
          const correct = pick(coordConj, rng);
          q.push(createMCQ("pos_g5", "conjunctions_g5", `Is '${correct}' coordinating or subordinating?`, "coordinating", ["subordinating", "correlative", "preposition"]));
        }
      }
      return q;
    },
    interjections_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const interjections = [
        { word: "Wow", use: "amazement" }, { word: "Ouch", use: "pain" }, { word: "Hey", use: "attention" },
        { word: "Oh", use: "surprise" }, { word: "Alas", use: "sorrow" }, { word: "Hooray", use: "joy" },
      ];
      for (let i = 0; i < 30; i++) {
        const intj = pick(interjections, rng);
        const wrong = interjections.filter(j => j.word !== intj.word).map(j => j.word).slice(0, 3);
        q.push(createMCQ("pos_g5", "interjections_g5",`Which interjection expresses '${intj.use}'?`, intj.word, wrong));
      }
      return q;
    },
    perfect_tenses_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const perfectData = [
        { tense: "present perfect", example: "has walked" },
        { tense: "past perfect", example: "had walked" },
        { tense: "future perfect", example: "will have walked" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(perfectData, rng);
        const wrong = perfectData.filter(p => p.tense !== data.tense).map(p => p.example);
        q.push(createMCQ("pos_g5", "perfect_tenses_g5", `Which perfect tense: "She ___"?`, data.example, wrong));
      }
      return q;
    },
    tense_shifts_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const data = [
        { correct: "She walks to school and eats lunch.", wrong: "She walks to school and ate lunch." },
        { correct: "He ran fast and jumped over the fence.", wrong: "He ran fast and jumps over the fence." },
      ];
      for (let i = 0; i < 30; i++) {
        const d = pick(data, rng);
        q.push(createMCQ("sentences_g5", "tense_shifts_g5", `Which has consistent tense?`, d.correct, [d.wrong, "They were happy and will celebrate.", "He goes and went home."]));
      }
      return q;
    },
    correlative_conj_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const correlData = ["either...or", "neither...nor", "both...and", "not only...but also"];
      for (let i = 0; i < 30; i++) {
        const correct = pick(correlData, rng);
        const wrong = correlData.filter(c => c !== correct).slice(0, 3);
        q.push(createMCQ("pos_g5", "correlative_conj_g5", `Complete: "You can have ___ chocolate ___ vanilla."`, correct, wrong));
      }
      return q;
    },
    complex_sentences_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "I like pizza.", type: "simple" },
        { sentence: "I like pizza, and she likes tacos.", type: "compound" },
        { sentence: "I like pizza because it tastes good.", type: "complex" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(sentenceData, rng);
        const types = ["simple", "compound", "complex"];
        const wrong = types.filter(t => t !== data.type);
        q.push(createMCQ("sentences_g5", "complex_sentences_g5", `Type: "${data.sentence}"`, data.type, wrong));
      }
      return q;
    },
    intro_clauses_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const correct = "After the movie ended, we went home.";
      const wrong = "After the movie ended we went home.";
      for (let i = 0; i < 30; i++) {
        q.push(createMCQ("spelling_g5", "intro_clauses_g5", `Correct comma use after intro clause?`, correct, [wrong, "Although it was late she continued working.", "When I arrived everyone cheered."]));
      }
      return q;
    },
    combining_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const combineData = ["The happy dog ran.", "Because she studied hard, she passed.", "He likes both pizza and tacos."];
      for (let i = 0; i < 30; i++) {
        const correct = pick(combineData, rng);
        q.push(createMCQ("sentences_g5", "combining_g5", `Best way to combine sentences?`, correct, ["The dog ran and was happy.", "She studied and passed.", "Pizza and tacos he likes."]));
      }
      return q;
    },
    commas_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const commaData = ["I like apples, oranges, and bananas.", "However, I also like grapes.", "Since you arrived, we can start."];
      for (let i = 0; i < 30; i++) {
        const correct = pick(commaData, rng);
        q.push(createMCQ("spelling_g5", "commas_g5", `Which comma usage is correct?`, correct, ["I like apples oranges and bananas.", "However I also like grapes.", "Since you arrived we can start."]));
      }
      return q;
    },
    titles_italics_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const titleData = ["I read *Harry Potter* last summer.", 'She said, "Hello world."', "The movie *Avatar* was amazing."];
      for (let i = 0; i < 30; i++) {
        const correct = pick(titleData, rng);
        q.push(createMCQ("spelling_g5", "titles_italics_g5", `Correct title formatting?`, correct, ['I read "Harry Potter" last summer.', "The movie Avatar was amazing.", 'She said, Hello world.']));
      }
      return q;
    },
    apostrophes_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const apostropheData = ["The dog's tail wagged.", "She can't swim.", "The boys' books are here.", "It's a sunny day."];
      for (let i = 0; i < 30; i++) {
        const correct = pick(apostropheData, rng);
        const wrong = apostropheData.filter(a => a !== correct);
        q.push(createMCQ("spelling_g5", "apostrophes_g5", `Correct apostrophe use?`, correct, wrong.slice(0, 3)));
      }
      return q;
    },
    spelling_strategies_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const spellingData = ["accommodate", "separate", "definitely", "necessary"];
      for (let i = 0; i < 30; i++) {
        const correct = pick(spellingData, rng);
        q.push(createMCQ("spelling_g5", "spelling_strategies_g5", `Spell correctly:`, correct, ["acomodate", "seperate", "definitly", "neccessary"]));
      }
      return q;
    },
    greek_latin_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rootData = [
        { root: "aud", meaning: "hear" }, { root: "vis", meaning: "see" },
        { root: "port", meaning: "carry" }, { root: "rupt", meaning: "break" },
        { root: "scrib", meaning: "write" }, { root: "ject", meaning: "throw" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(rootData, rng);
        q.push(createMCQ("vocab_g5", "greek_latin_g5", `Root '${data.root}' means:`, data.meaning, ["move", "feel", "think", "know"]));
      }
      return q;
    },
    prefixes_suffixes_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const affixData = [
        { word: "unhappy", affix: "un", meaning: "not" },
        { word: "beautiful", affix: "ful", meaning: "full of" },
        { word: "rewrite", affix: "re", meaning: "again" },
        { word: "careless", affix: "less", meaning: "without" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(affixData, rng);
        q.push(createMCQ("vocab_g5", "prefixes_suffixes_g5", `Affix '${data.affix}' in '${data.word}' means:`, data.meaning, ["over", "under", "before", "after"]));
      }
      return q;
    },
    figurative_language_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const figData = [
        { phrase: "A penny for your thoughts", type: "idiom" },
        { phrase: "The early bird catches the worm", type: "adage" },
        { phrase: "Actions speak louder than words", type: "proverb" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(figData, rng);
        const types = ["idiom", "adage", "proverb", "simile"];
        const wrong = types.filter(t => t !== data.type);
        q.push(createMCQ("vocab_g5", "figurative_language_g5", `Type: "${data.phrase}"`, data.type, wrong));
      }
      return q;
    },
    connotation_denotation_g5_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const connData = [
        { negative: "scrawny", positive: "slender", neutral: "thin" },
        { negative: "nosy", positive: "inquiring", neutral: "curious" },
        { negative: "stubborn", positive: "determined", neutral: "persistent" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(connData, rng);
        q.push(createMCQ("vocab_g5", "connotation_denotation_g5", `Which has positive connotation?`, data.positive, [data.negative, data.neutral, "offensive"]));
      }
      return q;
    },
    conjunctions_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const subConj = ["although", "because", "while", "unless", "since", "if", "until", "after", "before", "when"];
      const coordConj = ["and", "but", "or", "so", "yet", "for", "nor"];
      const sentences = [
        { blank: "___ it was raining, we went outside.", answer: "Although" },
        { blank: "I studied hard ___ I wanted to pass.", answer: "because" },
        { blank: "We can go to the park ___ the beach.", answer: "or" },
        { blank: "___ he was tired, he kept working.", answer: "Although" },
        { blank: "You can stay ___ leave, I don't mind.", answer: "or" },
        { blank: "She waited ___ he arrived.", answer: "until" },
        { blank: "I like pizza ___ I don't like olives.", answer: "but" },
        { blank: "___ we finish homework, we can play.", answer: "After" },
        { blank: "He runs fast ___ he can catch the bus.", answer: "so" },
        { blank: "We'll go ___ it stops raining.", answer: "when" },
      ];
      for (let i = 0; i < 25; i++) {
        const sent = pick(sentences, rng);
        q.push(createTyping("pos_g5", "conjunctions_g5", `Fill in: ${sent.blank}`, sent.answer));
      }
      return q;
    },
    interjections_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const intjData = [
        { use: "amazement", word: "Wow" },
        { use: "pain", word: "Ouch" },
        { use: "attention", word: "Hey" },
        { use: "surprise", word: "Oh" },
        { use: "sorrow", word: "Alas" },
        { use: "joy", word: "Hooray" },
        { use: "greeting", word: "Hello" },
        { use: "understanding", word: "Ah" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(intjData, rng);
        if (rng() > 0.5) {
          q.push(createTyping("pos_g5", "interjections_g5", `What interjection expresses ${data.use}?`, data.word));
        } else {
          q.push(createTyping("pos_g5", "interjections_g5", `"${data.word}" expresses what emotion?`, data.use));
        }
      }
      return q;
    },
    perfect_tenses_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const tenseData = [
        { context: "By Monday, she ___ the book.", answer: "will have finished" },
        { context: "They ___ already eaten lunch.", answer: "have" },
        { context: "He ___ worked here for five years.", answer: "has" },
        { context: "By the time we arrive, they ___ left.", answer: "will have" },
        { context: "She ___ finished her homework.", answer: "has" },
        { context: "We ___ been waiting for an hour.", answer: "have" },
        { context: "He ___ had three chances to succeed.", answer: "has" },
        { context: "By next Friday, I ___ completed the project.", answer: "will have" },
        { context: "They ___ gone to the store already.", answer: "have" },
        { context: "She ___ been studying all week.", answer: "has" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(tenseData, rng);
        q.push(createTyping("pos_g5", "perfect_tenses_g5", `Fill in the auxiliary verb: ${data.context}`, data.answer));
      }
      return q;
    },
    tense_shifts_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "She walks to school and eats lunch there.", tense: "present" },
        { sentence: "He ran fast and jumped over the fence.", tense: "past" },
        { sentence: "They will go to the park and play games.", tense: "future" },
        { sentence: "I study hard and help my friends.", tense: "present" },
        { sentence: "We went home and watched a movie.", tense: "past" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentenceData, rng);
        q.push(createTyping("sentences_g5", "tense_shifts_g5", `What tense is used consistently in: "${data.sentence}"?`, data.tense));
      }
      return q;
    },
    correlative_conj_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pairs = [
        { first: "Neither", second: "nor", context: "___ she ___ I was ready." },
        { first: "Both", second: "and", context: "___ cats ___ dogs are pets." },
        { first: "Either", second: "or", context: "___ tea ___ coffee for me, please." },
        { first: "Not only", second: "but also", context: "It's ___ fun ___ educational." },
      ];
      for (let i = 0; i < 25; i++) {
        const pair = pick(pairs, rng);
        if (rng() > 0.5) {
          q.push(createTyping("pos_g5", "correlative_conj_g5", `Fill in: ${pair.context}`, pair.first));
        } else {
          q.push(createTyping("pos_g5", "correlative_conj_g5", `Complete: "Neither..." with what?`, pair.second));
        }
      }
      return q;
    },
    complex_sentences_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { sentence: "She studied hard because she wanted to pass.", type: "complex" },
        { sentence: "The dog barked when the mailman arrived.", type: "complex" },
        { sentence: "He ate lunch and then went to class.", type: "compound" },
        { sentence: "Although it rained, we went to the park.", type: "complex" },
        { sentence: "The cat sat on the mat.", type: "simple" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("sentences_g5", "complex_sentences_g5", `Is this simple, compound, or complex? "${data.sentence}"`, data.type));
      }
      return q;
    },
    intro_clauses_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const intros = [
        { sentence: "Running down the hill, she laughed.", intro: "Running down the hill" },
        { sentence: "Before the game started, we ate snacks.", intro: "Before the game started" },
        { sentence: "While singing, he danced.", intro: "While singing" },
        { sentence: "After school ends, we go home.", intro: "After school ends" },
        { sentence: "In the morning, birds sing.", intro: "In the morning" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(intros, rng);
        q.push(createTyping("sentences_g5", "intro_clauses_g5", `What is the introductory phrase in: "${data.sentence}"?`, data.intro));
      }
      return q;
    },
    combining_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const combos = [
        { sent1: "I like pizza.", sent2: "I don't like pineapple on it.", combine: "but" },
        { sent1: "We can go to the park.", sent2: "We can stay home.", combine: "or" },
        { sent1: "He studied.", sent2: "He passed the test.", combine: "and" },
        { sent1: "You must finish homework.", sent2: "You can't watch TV.", combine: "or" },
        { sent1: "She was tired.", sent2: "She kept working.", combine: "but" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(combos, rng);
        q.push(createTyping("sentences_g5", "combining_g5", `Combine with a conjunction: "${data.sent1} ___ ${data.sent2}"`, data.combine));
      }
      return q;
    },
    commas_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const contextData = [
        { context: "introductory phrase", example: "After the game___ we celebrated.", answer: "," },
        { context: "series of items", example: "We need apples___ oranges___ and bananas.", answer: "," },
        { context: "before a conjunction", example: "I wanted to go___ but it was raining.", answer: "," },
        { context: "direct address", example: "Maria___ can you help me?", answer: "," },
        { context: "dates", example: "January 15___ 2024", answer: "," },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(contextData, rng);
        q.push(createTyping("sentences_g5", "commas_g5", `Add comma for ${data.context}: "${data.example}"`, data.answer));
      }
      return q;
    },
    titles_italics_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const titleData = [
        { title: "The Lion King", type: "movie" },
        { title: "Harry Potter", type: "book" },
        { title: "The New York Times", type: "newspaper" },
        { title: "Cinderella", type: "story" },
        { title: "Frozen", type: "movie" },
        { title: "Charlotte's Web", type: "book" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(titleData, rng);
        if (rng() > 0.5) {
          q.push(createTyping("sentences_g5", "titles_italics_g5", `Should "${data.title}" (${data.type}) be italicized?`, "yes"));
        } else {
          q.push(createTyping("sentences_g5", "titles_italics_g5", `Is the poem "Roses Are Red" italicized?`, "no"));
        }
      }
      return q;
    },
    apostrophes_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const apostropheData = [
        { blank: "The ___ coat (belonging to 3 dogs)", answer: "dogs'" },
        { blank: "The ___ toys (belonging to 1 child)", answer: "child's" },
        { blank: "___ arriving soon (Mary is)", answer: "Mary's" },
        { blank: "The ___ house (belonging to 2 girls)", answer: "girls'" },
        { blank: "___ not working (It is)", answer: "It's" },
        { blank: "The ___ desk (belonging to 1 teacher)", answer: "teacher's" },
        { blank: "___ not here (We are)", answer: "We're" },
        { blank: "The ___ games (belonging to 2 teams)", answer: "teams'" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(apostropheData, rng);
        q.push(createTyping("sentences_g5", "apostrophes_g5", `Fill in with correct apostrophe: ${data.blank}`, data.answer));
      }
      return q;
    },
    spelling_strategies_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const words = [
        { word: "happened", rule: "double final consonant before adding suffix" },
        { word: "hoping", rule: "drop silent e before adding vowel suffix" },
        { word: "studying", rule: "change y to i before adding suffix" },
        { word: "stopped", rule: "double final consonant before adding suffix" },
        { word: "baking", rule: "drop silent e before adding vowel suffix" },
        { word: "tried", rule: "change y to i before adding suffix" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(words, rng);
        if (rng() > 0.5) {
          q.push(createTyping("spelling_g5", "spelling_strategies_g5", `Spell: hope + ing`, data.word));
        } else {
          q.push(createTyping("spelling_g5", "spelling_strategies_g5", `What spelling rule applies to "${data.word}"?`, data.rule));
        }
      }
      return q;
    },
    greek_latin_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rootData = [
        { root: "port", meaning: "carry" },
        { root: "dict", meaning: "speak" },
        { root: "graph", meaning: "write" },
        { root: "phon", meaning: "sound" },
        { root: "geo", meaning: "earth" },
        { root: "bio", meaning: "life" },
        { root: "auto", meaning: "self" },
        { root: "trans", meaning: "across" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(rootData, rng);
        q.push(createTyping("vocab_g5", "greek_latin_g5", `The root "${data.root}" means what?`, data.meaning));
      }
      return q;
    },
    prefixes_suffixes_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const affixData = [
        { word: "unhappy", affix: "un", meaning: "not" },
        { word: "beautiful", affix: "ful", meaning: "full of" },
        { word: "rewrite", affix: "re", meaning: "again" },
        { word: "careless", affix: "less", meaning: "without" },
        { word: "misspell", affix: "mis", meaning: "wrong" },
        { word: "interactive", affix: "inter", meaning: "between" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(affixData, rng);
        if (rng() > 0.5) {
          q.push(createTyping("vocab_g5", "prefixes_suffixes_g5", `What does the affix "${data.affix}" mean?`, data.meaning));
        } else {
          q.push(createTyping("vocab_g5", "prefixes_suffixes_g5", `The prefix "un" in "${data.word}" means what?`, data.meaning));
        }
      }
      return q;
    },
    figurative_language_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const figData = [
        { phrase: "The thunder clapped overhead.", device: "onomatopoeia" },
        { phrase: "Time is money.", device: "metaphor" },
        { phrase: "Her smile was like sunshine.", device: "simile" },
        { phrase: "The flowers danced in the breeze.", device: "personification" },
        { phrase: "I could eat a horse!", device: "hyperbole" },
        { phrase: "The snake hissed at the cat.", device: "onomatopoeia" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(figData, rng);
        q.push(createTyping("vocab_g5", "figurative_language_g5", `What device: "${data.phrase}"?`, data.device));
      }
      return q;
    },
    connotation_denotation_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordSets = [
        { denotation: "spending little money", positive: "thrifty", negative: "cheap" },
        { denotation: "thin body type", positive: "slender", negative: "skinny" },
        { denotation: "not moving quickly", positive: "leisurely", negative: "sluggish" },
        { denotation: "having strong opinions", positive: "confident", negative: "stubborn" },
        { denotation: "talking a lot", positive: "outgoing", negative: "chatty" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(wordSets, rng);
        if (rng() > 0.5) {
          q.push(createTyping("vocab_g5", "connotation_denotation_g5", `Does "${data.negative}" have positive or negative connotation?`, "negative"));
        } else {
          q.push(createTyping("vocab_g5", "connotation_denotation_g5", `Does "${data.positive}" have positive or negative connotation?`, "positive"));
        }
      }
      return q;
    },
    media_literacy_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const mediaData = [
        { term: "headline", definition: "main title of a news story" },
        { term: "caption", definition: "text describing a photo or image" },
        { term: "source", definition: "where information comes from" },
        { term: "bias", definition: "unfair preference for one side" },
        { term: "fact", definition: "something proven to be true" },
        { term: "opinion", definition: "a personal belief or viewpoint" },
        { term: "credible", definition: "trustworthy and reliable" },
        { term: "media", definition: "channels for communication (TV, radio, internet)" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(mediaData, rng);
        const wrong = mediaData.filter(m => m.term !== data.term).map(m => m.definition).slice(0, 3);
        q.push(createMCQ("vocab_g5", "media_literacy_g5", `What is a ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    science_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const scienceData = [
        { term: "photosynthesis", definition: "process by which plants make food using sunlight" },
        { term: "gravity", definition: "force that pulls objects toward Earth" },
        { term: "molecule", definition: "smallest unit of a substance" },
        { term: "ecosystem", definition: "community of living things and their environment" },
        { term: "energy", definition: "ability to do work or cause change" },
        { term: "organism", definition: "living thing" },
        { term: "habitat", definition: "place where an animal or plant lives" },
        { term: "photosynthesis", definition: "how plants use light, water, and air to make food" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(scienceData, rng);
        const wrong = scienceData.filter(s => s.term !== data.term).map(s => s.definition).slice(0, 3);
        q.push(createMCQ("vocab_g5", "science_g5", `What is ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    history_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const historyData = [
        { term: "colony", definition: "settlement established by people from another country" },
        { term: "revolution", definition: "sudden, drastic change in government or society" },
        { term: "democracy", definition: "government by the people, for the people" },
        { term: "treaty", definition: "formal agreement between countries" },
        { term: "empire", definition: "group of countries ruled by one leader" },
        { term: "independence", definition: "freedom from control by another country" },
        { term: "civilization", definition: "advanced society with cities and government" },
        { term: "migration", definition: "movement of people from one place to another" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(historyData, rng);
        const wrong = historyData.filter(h => h.term !== data.term).map(h => h.definition).slice(0, 3);
        q.push(createMCQ("vocab_g5", "history_g5", `What is a ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    geography_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const geoData = [
        { term: "latitude", definition: "imaginary lines that run east-west around Earth" },
        { term: "longitude", definition: "imaginary lines that run north-south around Earth" },
        { term: "climate zone", definition: "region with similar weather patterns" },
        { term: "migration", definition: "movement from one place to another" },
        { term: "continent", definition: "large landmass (Africa, Europe, Asia)" },
        { term: "equator", definition: "imaginary line dividing Earth into north and south" },
        { term: "desert", definition: "dry region with very little rainfall" },
        { term: "coastline", definition: "edge where land meets ocean" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(geoData, rng);
        const wrong = geoData.filter(g => g.term !== data.term).map(g => g.definition).slice(0, 3);
        q.push(createMCQ("vocab_g5", "geography_g5", `What is ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    academic_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const academicData = [
        { term: "analyze", definition: "break down into parts and study carefully" },
        { term: "compare", definition: "show how things are alike" },
        { term: "summarize", definition: "give a brief statement of main points" },
        { term: "evidence", definition: "facts or examples that support a claim" },
        { term: "conclude", definition: "reach a final decision or opinion" },
        { term: "inference", definition: "conclusion based on evidence and reasoning" },
        { term: "thesis", definition: "main idea or argument in writing" },
        { term: "cite", definition: "reference or quote a source" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(academicData, rng);
        const wrong = academicData.filter(a => a.term !== data.term).map(a => a.definition).slice(0, 3);
        q.push(createMCQ("vocab_g5", "academic_g5", `What does it mean to ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    idioms_proverbs_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const idiomsData = [
        { idiom: "bite the bullet", meaning: "accept something difficult" },
        { idiom: "every cloud has a silver lining", meaning: "every bad situation has something good" },
        { idiom: "break the ice", meaning: "start a conversation" },
        { idiom: "a piece of cake", meaning: "something easy" },
        { idiom: "under the weather", meaning: "feeling sick" },
        { idiom: "hit the books", meaning: "study hard" },
        { idiom: "raining cats and dogs", meaning: "raining heavily" },
        { idiom: "lost in translation", meaning: "meaning gets confused in communication" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(idiomsData, rng);
        const wrong = idiomsData.filter(id => id.idiom !== data.idiom).map(id => id.meaning).slice(0, 3);
        q.push(createMCQ("vocab_g5", "idioms_proverbs_g5", `What does "${data.idiom}" mean?`, data.meaning, wrong));
      }
      return q;
    },
    wordplay_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordplayData = [
        { term: "pun", definition: "play on words using similar sounds or meanings" },
        { term: "alliteration", definition: "repetition of beginning sounds (Peter Piper picked...)" },
        { term: "onomatopoeia", definition: "word that imitates a sound (buzz, hiss, splash)" },
        { term: "oxymoron", definition: "combination of contradictory words (jumbo shrimp)" },
        { term: "rhyme", definition: "words with matching ending sounds" },
        { term: "metaphor", definition: "comparison without using 'like' or 'as'" },
        { term: "idiom", definition: "phrase with special meaning different from literal meaning" },
        { term: "assonance", definition: "repetition of vowel sounds (I like tight socks)" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(wordplayData, rng);
        const wrong = wordplayData.filter(w => w.term !== data.term).map(w => w.definition).slice(0, 3);
        q.push(createMCQ("vocab_g5", "wordplay_g5", `What is a ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    formal_informal_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const registerData = [
        { informal: "got", formal: "received", context: "she ___ the package" },
        { informal: "kids", formal: "children", context: "the ___ played outside" },
        { informal: "gonna", formal: "going to", context: "I'm ___ help you" },
        { informal: "yeah", formal: "yes", context: "___, I agree" },
        { informal: "wanna", formal: "want to", context: "I ___ go to the park" },
        { informal: "cool", formal: "excellent", context: "That's ___!" },
        { informal: "stuff", formal: "items", context: "Put your ___ away" },
        { informal: "kinda", formal: "somewhat", context: "It's ___ hard" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(registerData, rng);
        if (rng() > 0.5) {
          q.push(createMCQ("vocab_g5", "formal_informal_g5", `Replace "${data.informal}" with formal: ${data.context}`, data.formal, ["will", "did", "does"]));
        } else {
          q.push(createMCQ("vocab_g5", "formal_informal_g5", `What is the informal version of "${data.formal}"?`, data.informal, ["was", "are", "have"]));
        }
      }
      return q;
    },
    media_literacy_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const mediaQuestions = [
        { question: "Main title of a news story:", answer: "headline" },
        { question: "Text describing a photo:", answer: "caption" },
        { question: "Unfair preference in reporting:", answer: "bias" },
        { question: "Proven to be true:", answer: "fact" },
        { question: "Personal belief about something:", answer: "opinion" },
        { question: "Where information comes from:", answer: "source" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(mediaQuestions, rng);
        q.push(createTyping("vocab_g5", "media_literacy_g5", `${data.question}`, data.answer));
      }
      return q;
    },
    science_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const scienceQuestions = [
        { question: "Process plants use to make food from sunlight:", answer: "photosynthesis" },
        { question: "Force that pulls objects toward Earth:", answer: "gravity" },
        { question: "Smallest unit of a substance:", answer: "molecule" },
        { question: "Community of living things and their environment:", answer: "ecosystem" },
        { question: "Living thing:", answer: "organism" },
        { question: "Place where an animal lives:", answer: "habitat" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(scienceQuestions, rng);
        q.push(createTyping("vocab_g5", "science_g5", `${data.question}`, data.answer));
      }
      return q;
    },
    history_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const historyQuestions = [
        { question: "Settlement from another country:", answer: "colony" },
        { question: "Sudden change in government:", answer: "revolution" },
        { question: "Government by the people:", answer: "democracy" },
        { question: "Formal agreement between countries:", answer: "treaty" },
        { question: "Countries ruled by one leader:", answer: "empire" },
        { question: "Freedom from another country's control:", answer: "independence" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(historyQuestions, rng);
        q.push(createTyping("vocab_g5", "history_g5", `${data.question}`, data.answer));
      }
      return q;
    },
    geography_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const geoQuestions = [
        { question: "Lines running east-west around Earth:", answer: "latitude" },
        { question: "Lines running north-south around Earth:", answer: "longitude" },
        { question: "Region with similar weather patterns:", answer: "climate zone" },
        { question: "Large landmass like Africa or Asia:", answer: "continent" },
        { question: "Imaginary line dividing Earth into north and south:", answer: "equator" },
        { question: "Dry region with little rainfall:", answer: "desert" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(geoQuestions, rng);
        q.push(createTyping("vocab_g5", "geography_g5", `${data.question}`, data.answer));
      }
      return q;
    },
    academic_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const academicQuestions = [
        { question: "Break down into parts and study:", answer: "analyze" },
        { question: "Show how things are alike:", answer: "compare" },
        { question: "Give brief statement of main points:", answer: "summarize" },
        { question: "Facts or examples supporting a claim:", answer: "evidence" },
        { question: "Reach a final decision based on facts:", answer: "conclude" },
        { question: "Conclusion based on evidence:", answer: "inference" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(academicQuestions, rng);
        q.push(createTyping("vocab_g5", "academic_g5", `${data.question}`, data.answer));
      }
      return q;
    },
    idioms_proverbs_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const idiomQuestions = [
        { idiom: "bite the bullet", answer: "accept something difficult" },
        { idiom: "every cloud has a silver lining", answer: "every bad situation has something good" },
        { idiom: "break the ice", answer: "start a conversation" },
        { idiom: "a piece of cake", answer: "something easy" },
        { idiom: "under the weather", answer: "feeling sick" },
        { idiom: "hit the books", answer: "study hard" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(idiomQuestions, rng);
        q.push(createTyping("vocab_g5", "idioms_proverbs_g5", `What does "${data.idiom}" mean?`, data.answer));
      }
      return q;
    },
    wordplay_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordplayQuestions = [
        { question: "Play on words using similar sounds:", answer: "pun" },
        { question: "Repetition of beginning sounds:", answer: "alliteration" },
        { question: "Word that imitates a sound:", answer: "onomatopoeia" },
        { question: "Combination of contradictory words:", answer: "oxymoron" },
        { question: "Words with matching ending sounds:", answer: "rhyme" },
        { question: "Comparison without 'like' or 'as':", answer: "metaphor" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(wordplayQuestions, rng);
        q.push(createTyping("vocab_g5", "wordplay_g5", `${data.question}`, data.answer));
      }
      return q;
    },
    formal_informal_g5_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const registerQuestions = [
        { informal: "got", formal: "received" },
        { informal: "kids", formal: "children" },
        { informal: "gonna", formal: "going to" },
        { informal: "wanna", formal: "want to" },
        { informal: "cool", formal: "excellent" },
        { informal: "kinda", formal: "somewhat" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(registerQuestions, rng);
        if (rng() > 0.5) {
          q.push(createTyping("vocab_g5", "formal_informal_g5", `Formal word for "${data.informal}":`, data.formal));
        } else {
          q.push(createTyping("vocab_g5", "formal_informal_g5", `Informal version of "${data.formal}":`, data.informal));
        }
      }
      return q;
    }
  }
};

// ─── GRADE 6 GENERATORS ───────────────────────────────────────────────────

export const G6_Generators = {
  grammar_g6: {
    pronoun_cases_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const caseData = [
        { sentence: "The teacher gave ___ the homework.", correct: "him", case_name: "objective", wrong: ["he", "his", "himself"] },
        { sentence: "___ went to the store.", correct: "She", case_name: "subjective", wrong: ["Her", "Hers", "Herself"] },
        { sentence: "The prize belongs to ___.", correct: "them", case_name: "objective", wrong: ["they", "their", "themselves"] },
        { sentence: "___ and I went to the park.", correct: "He", case_name: "subjective", wrong: ["Him", "His", "Himself"] },
        { sentence: "Please give the book to ___.", correct: "me", case_name: "objective", wrong: ["I", "my", "myself"] },
        { sentence: "The package is for ___.", correct: "us", case_name: "objective", wrong: ["we", "our", "ourselves"] },
        { sentence: "___ wrote the letter.", correct: "I", case_name: "subjective", wrong: ["Me", "My", "Myself"] },
        { sentence: "The dog followed ___ home.", correct: "her", case_name: "objective", wrong: ["she", "hers", "herself"] },
      ];
      const pronounCases = [
        { pronoun: "I", case_name: "subjective" }, { pronoun: "me", case_name: "objective" }, { pronoun: "my", case_name: "possessive" },
        { pronoun: "he", case_name: "subjective" }, { pronoun: "him", case_name: "objective" }, { pronoun: "his", case_name: "possessive" },
        { pronoun: "she", case_name: "subjective" }, { pronoun: "her", case_name: "objective" }, { pronoun: "hers", case_name: "possessive" },
        { pronoun: "they", case_name: "subjective" }, { pronoun: "them", case_name: "objective" }, { pronoun: "their", case_name: "possessive" },
        { pronoun: "we", case_name: "subjective" }, { pronoun: "us", case_name: "objective" }, { pronoun: "our", case_name: "possessive" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(6, rng)) {
          if (rng() > 0.4) {
            const data = pick(caseData, rng);
            q.push(createMCQ("grammar_g6", "pronoun_cases_g6",
              `Which pronoun (${data.case_name} case) fills the blank? "${data.sentence}"`, data.correct, data.wrong));
          } else {
            const pc = pick(pronounCases, rng);
            const wrong = ["subjective", "objective", "possessive"].filter(c => c !== pc.case_name);
            q.push(createMCQ("grammar_g6", "pronoun_cases_g6",
              `What case is the pronoun '${pc.pronoun}'?`, pc.case_name, wrong));
          }
        } else {
          if (rng() > 0.5) {
            const data = pick(caseData, rng);
            q.push(createTyping("grammar_g6", "pronoun_cases_g6",
              `Fill in the ${data.case_name} pronoun: "${data.sentence}"`, data.correct));
          } else {
            const pc = pick(pronounCases, rng);
            q.push(createTyping("grammar_g6", "pronoun_cases_g6",
              `What case is '${pc.pronoun}'? (subjective/objective/possessive)`, pc.case_name));
          }
        }
      }
      return q;
    },
    intensive_pronouns_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const intensiveData = [
        { correct: "She herself baked the cake.", wrong: "Herself baked the cake.", pronoun: "herself", emphasizes: "She" },
        { correct: "I myself saw the accident.", wrong: "Myself saw the accident.", pronoun: "myself", emphasizes: "I" },
        { correct: "The president himself signed the letter.", wrong: "Himself signed the letter.", pronoun: "himself", emphasizes: "The president" },
        { correct: "They themselves admitted the mistake.", wrong: "Themselves admitted the mistake.", pronoun: "themselves", emphasizes: "They" },
        { correct: "We ourselves painted the room.", wrong: "Ourselves painted the room.", pronoun: "ourselves", emphasizes: "We" },
        { correct: "You yourself said it was fine.", wrong: "Yourself said it was fine.", pronoun: "yourself", emphasizes: "You" },
      ];
      const reflexiveData = [
        { sentence: "She hurt herself.", type: "reflexive", reason: "the pronoun receives the action" },
        { sentence: "He taught himself to play guitar.", type: "reflexive", reason: "the pronoun receives the action" },
        { sentence: "She herself wrote the poem.", type: "intensive", reason: "the pronoun emphasizes the subject" },
        { sentence: "The king himself visited the village.", type: "intensive", reason: "the pronoun emphasizes the subject" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(6, rng)) {
          const variant = Math.floor(rng() * 3);
          if (variant === 0) {
            const data = pick(intensiveData, rng);
            q.push(createMCQ("grammar_g6", "intensive_pronouns_g6",
              "Which sentence uses an INTENSIVE pronoun correctly?", data.correct,
              [data.wrong, pick(intensiveData.filter(d => d !== data), rng).wrong,
                pick(intensiveData.filter(d => d !== data), rng).wrong]));
          } else if (variant === 1) {
            const data = pick(reflexiveData, rng);
            q.push(createMCQ("grammar_g6", "intensive_pronouns_g6",
              `Is the -self pronoun in this sentence REFLEXIVE or INTENSIVE? "${data.sentence}"`, data.type,
              [data.type === "intensive" ? "reflexive" : "intensive", "possessive", "demonstrative"]));
          } else {
            const data = pick(intensiveData, rng);
            q.push(createMCQ("grammar_g6", "intensive_pronouns_g6",
              `In "${data.correct}", what does '${data.pronoun}' emphasize?`, data.emphasizes,
              ["the object", "the verb", "the adverb"]));
          }
        } else {
          if (rng() > 0.5) {
            const data = pick(reflexiveData, rng);
            q.push(createTyping("grammar_g6", "intensive_pronouns_g6",
              `Is the -self pronoun REFLEXIVE or INTENSIVE? "${data.sentence}"`, data.type));
          } else {
            const data = pick(intensiveData, rng);
            q.push(createTyping("grammar_g6", "intensive_pronouns_g6",
              `What intensive pronoun fits? "___ baked the cake." (emphasizing she)`, data.pronoun));
          }
        }
      }
      return q;
    },
    pronoun_agreement_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const agreementData = [
        { correct: "Each student must bring their notebook.", incorrect: "Each student must bring its notebook.", rule: "singular indefinite uses their (accepted)" },
        { correct: "The team celebrated their victory.", incorrect: "The team celebrated its victory.", rule: "collective noun with plural sense" },
        { correct: "Everyone should do their best.", incorrect: "Everyone should do his best.", rule: "gender-neutral singular they" },
        { correct: "Neither of the boys brought his lunch.", incorrect: "Neither of the boys brought their lunch.", rule: "neither + singular pronoun" },
        { correct: "The dogs wagged their tails.", incorrect: "The dogs wagged its tails.", rule: "plural subject needs plural pronoun" },
        { correct: "Somebody left their bag here.", incorrect: "Somebody left his bag here.", rule: "indefinite pronoun with their" },
        { correct: "Both girls finished their homework.", incorrect: "Both girls finished her homework.", rule: "both needs plural pronoun" },
        { correct: "The cat cleaned its paws.", incorrect: "The cat cleaned their paws.", rule: "singular animal uses its" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(agreementData, rng);
        if (isMCQ(6, rng)) {
          if (rng() > 0.5) {
            q.push(createMCQ("grammar_g6", "pronoun_agreement_g6",
              "Which sentence has correct pronoun-antecedent agreement?", data.correct,
              [data.incorrect,
                pick(agreementData.filter(d => d !== data), rng).incorrect,
                pick(agreementData.filter(d => d !== data), rng).incorrect]));
          } else {
            q.push(createMCQ("grammar_g6", "pronoun_agreement_g6",
              `Why is this correct? "${data.correct}"`, data.rule,
              agreementData.filter(d => d.rule !== data.rule).map(d => d.rule).slice(0, 3)));
          }
        } else {
          if (rng() > 0.5) {
            q.push(createTyping("grammar_g6", "pronoun_agreement_g6",
              `Fix the pronoun agreement: "${data.incorrect}"`, data.correct));
          } else {
            q.push(createTyping("grammar_g6", "pronoun_agreement_g6",
              `Is this correct? (yes/no) "${data.correct}"`, "yes"));
          }
        }
      }
      return q;
    },
    pronoun_shifts_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const shiftData = [
        { sentence: "When one exercises, you feel better.", hasShift: true, fix: "When one exercises, one feels better.", problem: "shifts from one to you" },
        { sentence: "When you exercise, you feel better.", hasShift: false, fix: "" },
        { sentence: "If a student studies, they will succeed.", hasShift: false, fix: "" },
        { sentence: "When a person votes, you make a difference.", hasShift: true, fix: "When a person votes, they make a difference.", problem: "shifts from a person to you" },
        { sentence: "I love hiking because you get fresh air.", hasShift: true, fix: "I love hiking because I get fresh air.", problem: "shifts from I to you" },
        { sentence: "We went to the store, and you could find everything.", hasShift: true, fix: "We went to the store, and we could find everything.", problem: "shifts from we to you" },
        { sentence: "She likes reading because she learns new things.", hasShift: false, fix: "" },
        { sentence: "They practice daily, and you can see improvement.", hasShift: true, fix: "They practice daily, and they can see improvement.", problem: "shifts from they to you" },
        { sentence: "He studies hard, and he gets good grades.", hasShift: false, fix: "" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(shiftData, rng);
        if (isMCQ(6, rng)) {
          if (rng() > 0.5) {
            q.push(createMCQ("grammar_g6", "pronoun_shifts_g6",
              `Does this sentence have an inappropriate pronoun shift? "${data.sentence}"`,
              data.hasShift ? "yes" : "no", data.hasShift ? ["no", "cannot tell", "maybe"] : ["yes", "cannot tell", "maybe"]));
          } else if (data.hasShift) {
            const wrong = shiftData.filter(d => d.hasShift && d.fix !== data.fix).map(d => d.fix).slice(0, 2);
            wrong.push(data.sentence);
            q.push(createMCQ("grammar_g6", "pronoun_shifts_g6",
              `Which fixes the pronoun shift? "${data.sentence}"`, data.fix, wrong));
          } else {
            const shifted = pick(shiftData.filter(d => d.hasShift), rng);
            q.push(createMCQ("grammar_g6", "pronoun_shifts_g6",
              "Which sentence has an INAPPROPRIATE pronoun shift?", shifted.sentence,
              shiftData.filter(d => !d.hasShift).map(d => d.sentence).slice(0, 3)));
          }
        } else {
          if (data.hasShift) {
            q.push(createTyping("grammar_g6", "pronoun_shifts_g6",
              `Fix the pronoun shift: "${data.sentence}"`, data.fix));
          } else {
            q.push(createTyping("grammar_g6", "pronoun_shifts_g6",
              `Does this sentence have a pronoun shift? (yes/no) "${data.sentence}"`, "no"));
          }
        }
      }
      return q;
    },
    sentence_patterns_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const patternData = [
        { original: "She sat down. She was tired. She was hungry.", revised: "Tired and hungry, she sat down.", technique: "combining with participial phrase" },
        { original: "The dog barked. The dog ran. The dog jumped.", revised: "The dog barked, ran, and jumped.", technique: "combining predicates" },
        { original: "He is smart. He studies hard. He gets good grades.", revised: "Because he is smart and studies hard, he gets good grades.", technique: "subordination" },
        { original: "It was raining. We stayed inside. We played games.", revised: "Since it was raining, we stayed inside and played games.", technique: "subordination with predicate combining" },
        { original: "The sunset was beautiful. It had red and orange colors.", revised: "The sunset, with its red and orange colors, was beautiful.", technique: "embedding with appositives" },
        { original: "She opened the door. She saw a surprise.", revised: "Opening the door, she saw a surprise.", technique: "participial phrase" },
      ];
      const sentenceStarts = [
        { type: "subject first", example: "The dog ran across the yard.", label: "subject-verb" },
        { type: "adverb first", example: "Quickly, the dog ran across the yard.", label: "adverb opening" },
        { type: "prepositional phrase", example: "Across the yard, the dog ran.", label: "prepositional phrase opening" },
        { type: "participial phrase", example: "Running fast, the dog crossed the yard.", label: "participial phrase opening" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(6, rng)) {
          if (rng() > 0.5) {
            const data = pick(patternData, rng);
            const wrong = patternData.filter(p => p.revised !== data.revised).map(p => p.revised).slice(0, 3);
            q.push(createMCQ("grammar_g6", "sentence_patterns_g6",
              `Which revision VARIES the sentence pattern? Original: "${data.original}"`, data.revised, wrong));
          } else {
            const data = pick(sentenceStarts, rng);
            const wrong = sentenceStarts.filter(s => s.label !== data.label).map(s => s.label).slice(0, 3);
            q.push(createMCQ("grammar_g6", "sentence_patterns_g6",
              `What type of opening does this sentence use? "${data.example}"`, data.label, wrong));
          }
        } else {
          if (rng() > 0.5) {
            const data = pick(patternData, rng);
            q.push(createTyping("grammar_g6", "sentence_patterns_g6",
              `Combine into one varied sentence: "${data.original}"`, data.revised));
          } else {
            const data = pick(patternData, rng);
            q.push(createTyping("grammar_g6", "sentence_patterns_g6",
              `What technique was used? "${data.original}" became "${data.revised}"`, data.technique));
          }
        }
      }
      return q;
    }
  },
  vocab_g6: {
    synonyms_homographs_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const homographData = [
        { word: "bat", meaning1: "a flying mammal", meaning2: "a stick for hitting a ball" },
        { word: "bark", meaning1: "the sound a dog makes", meaning2: "the outer covering of a tree" },
        { word: "lead", meaning1: "to guide or show the way", meaning2: "a heavy metal" },
        { word: "bow", meaning1: "to bend forward", meaning2: "a weapon for shooting arrows" },
        { word: "tear", meaning1: "a drop from the eye", meaning2: "to rip apart" },
        { word: "wind", meaning1: "moving air", meaning2: "to turn or twist" },
        { word: "close", meaning1: "near", meaning2: "to shut" },
        { word: "dove", meaning1: "a type of bird", meaning2: "past tense of dive" },
        { word: "present", meaning1: "a gift", meaning2: "to show or introduce" },
        { word: "record", meaning1: "a written account", meaning2: "to capture on video or audio" },
      ];
      const synData = [
        { word: "brilliant", synonym: "bright", context: "The ___ light filled the room." },
        { word: "graceful", synonym: "elegant", context: "She was a ___ dancer." },
        { word: "profound", synonym: "deep", context: "He made a ___ observation." },
        { word: "vivid", synonym: "bright", context: "She had a ___ memory of the event." },
        { word: "meticulous", synonym: "careful", context: "She was ___ in her work." },
      ];
      for (let i = 0; i < 30; i++) {
        const useHomograph = rng() > 0.4;
        if (isMCQ(6, rng)) {
          if (useHomograph) {
            const data = pick(homographData, rng);
            if (rng() > 0.5) {
              const wrong = homographData.filter(h => h.word !== data.word).map(h => `${h.word} (${h.meaning1})`).slice(0, 3);
              q.push(createMCQ("vocab_g6", "synonyms_homographs_g6",
                `Which pair are HOMOGRAPHS (same spelling, different meaning)?`,
                `${data.word} (${data.meaning1}) / ${data.word} (${data.meaning2})`, wrong));
            } else {
              q.push(createMCQ("vocab_g6", "synonyms_homographs_g6",
                `The word '${data.word}' is a homograph. Which is one of its meanings?`, data.meaning1,
                homographData.filter(h => h.word !== data.word).map(h => h.meaning1).slice(0, 3)));
            }
          } else {
            const data = pick(synData, rng);
            const wrong = synData.filter(s => s.synonym !== data.synonym).map(s => s.synonym).slice(0, 3);
            q.push(createMCQ("vocab_g6", "synonyms_homographs_g6",
              `What is a synonym of '${data.word}' in: "${data.context}"?`, data.synonym, wrong));
          }
        } else {
          if (useHomograph) {
            const data = pick(homographData, rng);
            q.push(createTyping("vocab_g6", "synonyms_homographs_g6",
              `Give one meaning of the homograph '${data.word}':`, [data.meaning1, data.meaning2]));
          } else {
            const data = pick(synData, rng);
            q.push(createTyping("vocab_g6", "synonyms_homographs_g6",
              `What is a synonym of '${data.word}'?`, data.synonym));
          }
        }
      }
      return q;
    },
    analogies_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const analogyData = [
        { analogy: "Hand is to arm as foot is to ___.", answer: "leg", wrong: ["shoe", "toe", "ankle"], relationship: "part to whole" },
        { analogy: "Teacher is to student as doctor is to ___.", answer: "patient", wrong: ["hospital", "nurse", "medicine"], relationship: "person to recipient" },
        { analogy: "Book is to author as painting is to ___.", answer: "artist", wrong: ["canvas", "museum", "brush"], relationship: "creation to creator" },
        { analogy: "Small is to big as cold is to ___.", answer: "hot", wrong: ["warm", "cool", "ice"], relationship: "antonym" },
        { analogy: "Puppy is to dog as kitten is to ___.", answer: "cat", wrong: ["mouse", "animal", "pet"], relationship: "young to adult" },
        { analogy: "Inch is to foot as second is to ___.", answer: "minute", wrong: ["hour", "day", "time"], relationship: "smaller unit to larger unit" },
        { analogy: "Pen is to write as knife is to ___.", answer: "cut", wrong: ["sharp", "fork", "slice"], relationship: "tool to function" },
        { analogy: "Eye is to see as ear is to ___.", answer: "hear", wrong: ["sound", "nose", "music"], relationship: "organ to function" },
        { analogy: "Fish is to swim as bird is to ___.", answer: "fly", wrong: ["wing", "nest", "feather"], relationship: "animal to movement" },
        { analogy: "Glove is to hand as sock is to ___.", answer: "foot", wrong: ["shoe", "leg", "toe"], relationship: "clothing to body part" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(analogyData, rng);
        if (isMCQ(6, rng)) {
          if (rng() > 0.3) {
            q.push(createMCQ("vocab_g6", "analogies_g6", data.analogy, data.answer, data.wrong));
          } else {
            q.push(createMCQ("vocab_g6", "analogies_g6",
              `What is the RELATIONSHIP in: "${data.analogy}"`, data.relationship,
              analogyData.filter(a => a.relationship !== data.relationship).map(a => a.relationship).slice(0, 3)));
          }
        } else {
          q.push(createTyping("vocab_g6", "analogies_g6", data.analogy, data.answer));
        }
      }
      return q;
    },
    connotation_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const connotData = [
        { words: ["stubborn", "firm", "determined", "confident"], most_negative: "stubborn", most_positive: "confident", denotation: "not easily changing one's mind" },
        { words: ["cheap", "thrifty", "stingy", "economical"], most_negative: "stingy", most_positive: "thrifty", denotation: "careful with money" },
        { words: ["nosy", "curious", "inquisitive", "prying"], most_negative: "prying", most_positive: "inquisitive", denotation: "wanting to know things" },
        { words: ["childish", "youthful", "immature", "playful"], most_negative: "childish", most_positive: "youthful", denotation: "having qualities of youth" },
        { words: ["skinny", "slender", "scrawny", "lean"], most_negative: "scrawny", most_positive: "slender", denotation: "thin body type" },
        { words: ["chatty", "talkative", "articulate", "gossipy"], most_negative: "gossipy", most_positive: "articulate", denotation: "speaking a lot" },
        { words: ["aggressive", "assertive", "pushy", "bold"], most_negative: "pushy", most_positive: "bold", denotation: "taking strong action" },
        { words: ["old", "vintage", "ancient", "outdated"], most_negative: "outdated", most_positive: "vintage", denotation: "not new" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(connotData, rng);
        if (isMCQ(6, rng)) {
          const variant = Math.floor(rng() * 3);
          if (variant === 0) {
            q.push(createMCQ("vocab_g6", "connotation_g6",
              `Which word has the most NEGATIVE connotation?`, data.most_negative,
              data.words.filter(w => w !== data.most_negative).slice(0, 3)));
          } else if (variant === 1) {
            q.push(createMCQ("vocab_g6", "connotation_g6",
              `Which word has the most POSITIVE connotation?`, data.most_positive,
              data.words.filter(w => w !== data.most_positive).slice(0, 3)));
          } else {
            const word = pick(data.words, rng);
            const isNeg = word === data.most_negative;
            const isPos = word === data.most_positive;
            const connotation = isNeg ? "negative" : isPos ? "positive" : "neutral";
            q.push(createMCQ("vocab_g6", "connotation_g6",
              `What connotation does '${word}' have?`, connotation,
              ["positive", "negative", "neutral"].filter(c => c !== connotation)));
          }
        } else {
          if (rng() > 0.5) {
            q.push(createTyping("vocab_g6", "connotation_g6",
              `Which has the most negative connotation: ${data.words.join(", ")}?`, data.most_negative));
          } else {
            q.push(createTyping("vocab_g6", "connotation_g6",
              `Which has the most positive connotation: ${data.words.join(", ")}?`, data.most_positive));
          }
        }
      }
      return q;
    },
    academic_vocab_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordData = [
        { word: "analyze", meaning: "examine closely and in detail", context: "science", sentence: "We need to ___ the data from the experiment." },
        { word: "evaluate", meaning: "assess the value or quality", context: "any subject", sentence: "The teacher asked us to ___ the author's argument." },
        { word: "hypothesis", meaning: "a proposed explanation to be tested", context: "science", sentence: "Our ___ was that plants grow faster with more light." },
        { word: "democracy", meaning: "government by the people", context: "social studies", sentence: "The United States is a ___." },
        { word: "diverse", meaning: "varied or different", context: "social studies", sentence: "Our school has a ___ student body." },
        { word: "conclude", meaning: "to reach a decision by reasoning", context: "any subject", sentence: "Based on the evidence, we can ___ that the theory is correct." },
        { word: "infer", meaning: "to deduce from evidence", context: "reading", sentence: "We can ___ from the clues that the character is nervous." },
        { word: "perspective", meaning: "a point of view", context: "reading/social studies", sentence: "The author writes from a first-person ___." },
        { word: "elaborate", meaning: "to explain in more detail", context: "writing", sentence: "Please ___ on your answer with examples." },
        { word: "significant", meaning: "important or meaningful", context: "any subject", sentence: "The discovery was ___ for medical science." },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(wordData, rng);
        if (isMCQ(6, rng)) {
          const variant = Math.floor(rng() * 3);
          if (variant === 0) {
            const wrong = wordData.filter(w => w.meaning !== data.meaning).map(w => w.meaning).slice(0, 3);
            q.push(createMCQ("vocab_g6", "academic_vocab_g6",
              `What does '${data.word}' mean?`, data.meaning, wrong));
          } else if (variant === 1) {
            const wrong = wordData.filter(w => w.word !== data.word).map(w => w.word).slice(0, 3);
            q.push(createMCQ("vocab_g6", "academic_vocab_g6",
              `Which word means '${data.meaning}'?`, data.word, wrong));
          } else {
            const wrong = wordData.filter(w => w.word !== data.word).map(w => w.word).slice(0, 3);
            q.push(createMCQ("vocab_g6", "academic_vocab_g6",
              `Fill in: "${data.sentence}"`, data.word, wrong));
          }
        } else {
          if (rng() > 0.5) {
            q.push(createTyping("vocab_g6", "academic_vocab_g6",
              `Define '${data.word}':`, data.meaning));
          } else {
            q.push(createTyping("vocab_g6", "academic_vocab_g6",
              `What academic word means '${data.meaning}'?`, data.word));
          }
        }
      }
      return q;
    },
    greek_latin_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rootData = [
        { root: "graph", origin: "Greek", meaning: "write", examples: ["biography", "autograph", "paragraph", "graphite"] },
        { root: "auto", origin: "Greek", meaning: "self", examples: ["automobile", "automatic", "autobiography", "autonomy"] },
        { root: "bene", origin: "Latin", meaning: "good", examples: ["benefit", "benevolent", "benediction", "benign"] },
        { root: "mal", origin: "Latin", meaning: "bad", examples: ["malfunction", "malicious", "malnutrition", "malware"] },
        { root: "micro", origin: "Greek", meaning: "small", examples: ["microscope", "microphone", "microbe", "microchip"] },
        { root: "macro", origin: "Greek", meaning: "large", examples: ["macroeconomics", "macroscopic", "macro"] },
        { root: "cred", origin: "Latin", meaning: "believe", examples: ["credit", "incredible", "credentials", "creed"] },
        { root: "rupt", origin: "Latin", meaning: "break", examples: ["interrupt", "erupt", "bankrupt", "corrupt"] },
        { root: "spect", origin: "Latin", meaning: "look", examples: ["inspect", "spectacle", "respect", "perspective"] },
        { root: "tract", origin: "Latin", meaning: "pull or drag", examples: ["attract", "tractor", "extract", "subtract"] },
        { root: "morph", origin: "Greek", meaning: "form or shape", examples: ["metamorphosis", "morphology", "amorphous"] },
        { root: "path", origin: "Greek", meaning: "feeling", examples: ["sympathy", "empathy", "apathy", "pathetic"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(rootData, rng);
        const example = pick(data.examples, rng);
        if (isMCQ(6, rng)) {
          if (rng() > 0.5) {
            const wrong = rootData.filter(r => r.meaning !== data.meaning).map(r => r.meaning).slice(0, 3);
            q.push(createMCQ("vocab_g6", "greek_latin_g6",
              `The ${data.origin} root '${data.root}' means:`, data.meaning, wrong));
          } else {
            const wrong = rootData.filter(r => r.root !== data.root).map(r => r.root).slice(0, 3);
            q.push(createMCQ("vocab_g6", "greek_latin_g6",
              `What root in '${example}' means '${data.meaning}'?`, data.root, wrong));
          }
        } else {
          if (rng() > 0.5) {
            q.push(createTyping("vocab_g6", "greek_latin_g6",
              `What does the root '${data.root}' mean?`, data.meaning));
          } else {
            q.push(createTyping("vocab_g6", "greek_latin_g6",
              `What ${data.origin} root in '${example}' means '${data.meaning}'?`, data.root));
          }
        }
      }
      return q;
    }
  },
  structures_g6: {
    clauses_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const clauseData = [
        { clause: "because she was tired", type: "dependent", reason: "starts with subordinating conjunction, cannot stand alone" },
        { clause: "when the bell rang", type: "dependent", reason: "starts with subordinating conjunction" },
        { clause: "although he studied hard", type: "dependent", reason: "starts with subordinating conjunction" },
        { clause: "if it rains tomorrow", type: "dependent", reason: "starts with subordinating conjunction" },
        { clause: "while we were eating", type: "dependent", reason: "starts with subordinating conjunction" },
        { clause: "The dog barked loudly", type: "independent", reason: "expresses a complete thought" },
        { clause: "He studied all night", type: "independent", reason: "expresses a complete thought" },
        { clause: "She finished the project", type: "independent", reason: "expresses a complete thought" },
        { clause: "The sun was shining brightly", type: "independent", reason: "expresses a complete thought" },
        { clause: "They won the championship", type: "independent", reason: "expresses a complete thought" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(clauseData, rng);
        if (isMCQ(6, rng)) {
          if (rng() > 0.5) {
            q.push(createMCQ("structures_g6", "clauses_g6",
              `Is this an INDEPENDENT or DEPENDENT clause? "${data.clause}"`, data.type,
              [data.type === "independent" ? "dependent" : "independent", "phrase", "fragment"]));
          } else {
            const depClauses = clauseData.filter(c => c.type === "dependent");
            const indClauses = clauseData.filter(c => c.type === "independent");
            const target = rng() > 0.5 ? "dependent" : "independent";
            const correct = pick(target === "dependent" ? depClauses : indClauses, rng);
            const wrongPool = target === "dependent" ? indClauses : depClauses;
            q.push(createMCQ("structures_g6", "clauses_g6",
              `Which is a ${target.toUpperCase()} clause?`, correct.clause,
              wrongPool.map(c => c.clause).slice(0, 3)));
          }
        } else {
          q.push(createTyping("structures_g6", "clauses_g6",
            `Is this independent or dependent? "${data.clause}"`, data.type));
        }
      }
      return q;
    },
    complex_sentences_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentTypes = [
        { sentence: "She went home.", type: "simple" },
        { sentence: "She went home, and he stayed at school.", type: "compound" },
        { sentence: "Although it rained, she went outside.", type: "complex" },
        { sentence: "Although it rained, she went out, and she got wet.", type: "compound-complex" },
        { sentence: "The cat sat on the mat while the dog slept.", type: "complex" },
        { sentence: "He ran, she walked, and they arrived together.", type: "compound" },
        { sentence: "Because the road was icy, he drove slowly, but he still skidded.", type: "compound-complex" },
        { sentence: "If you study, you will pass the test.", type: "complex" },
        { sentence: "She sang and he danced.", type: "compound" },
        { sentence: "When the alarm rang, everyone evacuated, and the firefighters arrived.", type: "compound-complex" },
      ];
      const allTypes = ["simple", "compound", "complex", "compound-complex"];
      for (let i = 0; i < 30; i++) {
        const data = pick(sentTypes, rng);
        if (isMCQ(6, rng)) {
          const wrong = allTypes.filter(t => t !== data.type).slice(0, 3);
          q.push(createMCQ("structures_g6", "complex_sentences_g6",
            `What type of sentence? "${data.sentence}"`, data.type, wrong));
        } else {
          q.push(createTyping("structures_g6", "complex_sentences_g6",
            `Identify: simple, compound, complex, or compound-complex? "${data.sentence}"`, data.type));
        }
      }
      return q;
    },
    relative_clauses_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const relData = [
        { sentence: "The book that I read was great.", relClause: "that I read", pronoun: "that", type: "restrictive" },
        { sentence: "My sister, who lives in Texas, is visiting.", relClause: "who lives in Texas", pronoun: "who", type: "nonrestrictive" },
        { sentence: "The car which was parked outside is mine.", relClause: "which was parked outside", pronoun: "which", type: "restrictive" },
        { sentence: "The teacher whose class I enjoy teaches math.", relClause: "whose class I enjoy", pronoun: "whose", type: "restrictive" },
        { sentence: "The movie, which won an Oscar, is now on TV.", relClause: "which won an Oscar", pronoun: "which", type: "nonrestrictive" },
        { sentence: "The girl whom I met yesterday is very kind.", relClause: "whom I met yesterday", pronoun: "whom", type: "restrictive" },
        { sentence: "The city where I was born is beautiful.", relClause: "where I was born", pronoun: "where", type: "restrictive" },
        { sentence: "My dog, who is very old, still loves to play.", relClause: "who is very old", pronoun: "who", type: "nonrestrictive" },
      ];
      const relPronouns = ["who", "whom", "whose", "which", "that", "where"];
      for (let i = 0; i < 30; i++) {
        const data = pick(relData, rng);
        if (isMCQ(6, rng)) {
          const variant = Math.floor(rng() * 3);
          if (variant === 0) {
            const hasClauses = relData.filter(r => r.sentence !== data.sentence);
            const noClauses = ["I read a great book.", "My sister is visiting.", "The car is mine."];
            q.push(createMCQ("structures_g6", "relative_clauses_g6",
              "Which sentence contains a RELATIVE CLAUSE?", data.sentence,
              noClauses.slice(0, 3)));
          } else if (variant === 1) {
            q.push(createMCQ("structures_g6", "relative_clauses_g6",
              `What is the relative clause in: "${data.sentence}"?`, data.relClause,
              relData.filter(r => r.relClause !== data.relClause).map(r => r.relClause).slice(0, 3)));
          } else {
            const wrong = relPronouns.filter(p => p !== data.pronoun).slice(0, 3);
            q.push(createMCQ("structures_g6", "relative_clauses_g6",
              `Which relative pronoun is used in: "${data.sentence}"?`, data.pronoun, wrong));
          }
        } else {
          if (rng() > 0.5) {
            q.push(createTyping("structures_g6", "relative_clauses_g6",
              `Identify the relative clause in: "${data.sentence}"`, data.relClause));
          } else {
            q.push(createTyping("structures_g6", "relative_clauses_g6",
              `What relative pronoun is used in: "${data.sentence}"?`, data.pronoun));
          }
        }
      }
      return q;
    }
  },
  word_formation_g6: {
    prefixes_suffixes_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const affixData = [
        { affix: "-tion", type: "suffix", base: "celebrate", result: "celebration", meaning: "act of celebrating" },
        { affix: "-ment", type: "suffix", base: "achieve", result: "achievement", meaning: "result of achieving" },
        { affix: "-ness", type: "suffix", base: "dark", result: "darkness", meaning: "state of being dark" },
        { affix: "-ity", type: "suffix", base: "equal", result: "equality", meaning: "state of being equal" },
        { affix: "-ous", type: "suffix", base: "courage", result: "courageous", meaning: "full of courage" },
        { affix: "-ive", type: "suffix", base: "create", result: "creative", meaning: "having the quality of creating" },
        { affix: "inter-", type: "prefix", base: "national", result: "international", meaning: "between nations" },
        { affix: "anti-", type: "prefix", base: "social", result: "antisocial", meaning: "against social behavior" },
        { affix: "over-", type: "prefix", base: "react", result: "overreact", meaning: "react too much" },
        { affix: "under-", type: "prefix", base: "estimate", result: "underestimate", meaning: "estimate too low" },
        { affix: "semi-", type: "prefix", base: "circle", result: "semicircle", meaning: "half a circle" },
        { affix: "trans-", type: "prefix", base: "form", result: "transform", meaning: "change form" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(affixData, rng);
        if (isMCQ(6, rng)) {
          const variant = Math.floor(rng() * 3);
          if (variant === 0) {
            const wrong = affixData.filter(a => a.result !== data.result).map(a => a.result).slice(0, 3);
            q.push(createMCQ("word_formation_g6", "prefixes_suffixes_g6",
              `What does adding '${data.affix}' to '${data.base}' create?`, data.result, wrong));
          } else if (variant === 1) {
            const wrong = affixData.filter(a => a.meaning !== data.meaning).map(a => a.meaning).slice(0, 3);
            q.push(createMCQ("word_formation_g6", "prefixes_suffixes_g6",
              `What does '${data.result}' mean?`, data.meaning, wrong));
          } else {
            q.push(createMCQ("word_formation_g6", "prefixes_suffixes_g6",
              `Is '${data.affix}' a prefix or suffix?`, data.type,
              [data.type === "prefix" ? "suffix" : "prefix", "root", "base word"]));
          }
        } else {
          if (rng() > 0.5) {
            q.push(createTyping("word_formation_g6", "prefixes_suffixes_g6",
              `Add '${data.affix}' to '${data.base}':`, data.result));
          } else {
            q.push(createTyping("word_formation_g6", "prefixes_suffixes_g6",
              `What does '${data.result}' mean?`, data.meaning));
          }
        }
      }
      return q;
    },
    root_words_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rootData = [
        { root: "rupt", meaning: "break", examples: ["interrupt", "erupt", "bankrupt", "corrupt", "disrupt"] },
        { root: "struct", meaning: "build", examples: ["construct", "instruct", "structure", "destroy", "obstruct"] },
        { root: "ject", meaning: "throw", examples: ["project", "reject", "inject", "eject", "object"] },
        { root: "duc/duct", meaning: "lead", examples: ["conduct", "produce", "introduce", "reduce", "educate"] },
        { root: "mit/miss", meaning: "send", examples: ["transmit", "mission", "submit", "permit", "dismiss"] },
        { root: "scrib/script", meaning: "write", examples: ["describe", "script", "manuscript", "subscribe", "inscription"] },
        { root: "port", meaning: "carry", examples: ["transport", "import", "export", "portable", "report"] },
        { root: "form", meaning: "shape", examples: ["transform", "uniform", "reform", "inform", "formula"] },
        { root: "vers/vert", meaning: "turn", examples: ["reverse", "convert", "universe", "invert", "divert"] },
        { root: "cap/cept", meaning: "take or seize", examples: ["capture", "accept", "concept", "capable", "intercept"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(rootData, rng);
        const example = pick(data.examples, rng);
        if (isMCQ(6, rng)) {
          if (rng() > 0.5) {
            const wrong = rootData.filter(r => r.meaning !== data.meaning).map(r => r.meaning).slice(0, 3);
            q.push(createMCQ("word_formation_g6", "root_words_g6",
              `The root '${data.root}' (as in '${example}') means:`, data.meaning, wrong));
          } else {
            const wrong = rootData.filter(r => r.root !== data.root).map(r => r.root).slice(0, 3);
            q.push(createMCQ("word_formation_g6", "root_words_g6",
              `Which root means '${data.meaning}'?`, data.root, wrong));
          }
        } else {
          if (rng() > 0.5) {
            q.push(createTyping("word_formation_g6", "root_words_g6",
              `What does the root '${data.root}' mean?`, data.meaning));
          } else {
            q.push(createTyping("word_formation_g6", "root_words_g6",
              `What root in '${example}' means '${data.meaning}'?`, data.root));
          }
        }
      }
      return q;
    }
  },
  punctuation_g6: {
    commas_dashes_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const punctData = [
        { sentence: "The event (held annually) was canceled.", mark: "parentheses", purpose: "adds nonessential information" },
        { sentence: "The event, held annually, was canceled.", mark: "commas", purpose: "sets off nonessential information" },
        { sentence: "The event — held annually — was canceled.", mark: "dashes", purpose: "emphasizes nonessential information" },
        { sentence: "She bought three things: eggs, milk, and bread.", mark: "colon", purpose: "introduces a list" },
        { sentence: "It was a well-known fact.", mark: "hyphen", purpose: "joins compound adjective" },
        { sentence: "My brother — the tall one — won the race.", mark: "dashes", purpose: "emphasizes an aside" },
        { sentence: "The results (see Table 1) were surprising.", mark: "parentheses", purpose: "adds a reference" },
        { sentence: "There's one thing I need: sleep.", mark: "colon", purpose: "introduces an explanation" },
        { sentence: "The red, white, and blue flag flew high.", mark: "commas", purpose: "separates items in a series" },
        { sentence: "The self-driving car was impressive.", mark: "hyphen", purpose: "joins compound adjective" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(punctData, rng);
        if (isMCQ(6, rng)) {
          if (rng() > 0.5) {
            q.push(createMCQ("punctuation_g6", "commas_dashes_g6",
              `What punctuation is used in: "${data.sentence}"?`, data.mark,
              ["parentheses", "dashes", "commas", "colon", "hyphen"].filter(m => m !== data.mark).slice(0, 3)));
          } else {
            q.push(createMCQ("punctuation_g6", "commas_dashes_g6",
              `What is the PURPOSE of the ${data.mark} in: "${data.sentence}"?`, data.purpose,
              punctData.filter(p => p.purpose !== data.purpose).map(p => p.purpose).slice(0, 3)));
          }
        } else {
          if (rng() > 0.5) {
            q.push(createTyping("punctuation_g6", "commas_dashes_g6",
              `What punctuation mark is used in: "${data.sentence}"?`, data.mark));
          } else {
            q.push(createTyping("punctuation_g6", "commas_dashes_g6",
              `What is the purpose of ${data.mark} in: "${data.sentence}"?`, data.purpose));
          }
        }
      }
      return q;
    },
    punct_effect_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const effectData = [
        { mark: "exclamation mark", effect: "expresses strong emotion or emphasis", example: "What an amazing goal!" },
        { mark: "question mark", effect: "asks a question or creates uncertainty", example: "Did you really see that?" },
        { mark: "ellipsis", effect: "shows a pause or trailing off", example: "I wonder if..." },
        { mark: "semicolon", effect: "connects closely related independent clauses", example: "She studied all night; she passed the exam." },
        { mark: "colon", effect: "introduces what follows", example: "He had one goal: to win." },
        { mark: "dash", effect: "adds emphasis or interruption", example: "He was going to win — or so he thought." },
        { mark: "period", effect: "ends a statement with finality", example: "It was over." },
        { mark: "comma", effect: "creates a brief pause", example: "Slowly, carefully, she opened the box." },
      ];
      const sentPairs = [
        { with_mark: "Stop!", without: "Stop.", difference: "The exclamation mark adds urgency and emotion." },
        { with_mark: "She was beautiful...", without: "She was beautiful.", difference: "The ellipsis creates mystery and suggests more to come." },
        { with_mark: "He won — barely.", without: "He won, barely.", difference: "The dash adds dramatic emphasis." },
        { with_mark: "Really?", without: "Really.", difference: "The question mark changes a statement to a question showing doubt." },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(6, rng)) {
          if (rng() > 0.4) {
            const data = pick(effectData, rng);
            const wrong = effectData.filter(e => e.effect !== data.effect).map(e => e.effect).slice(0, 3);
            q.push(createMCQ("punctuation_g6", "punct_effect_g6",
              `What effect does a ${data.mark} create?`, data.effect, wrong));
          } else {
            const data = pick(sentPairs, rng);
            q.push(createMCQ("punctuation_g6", "punct_effect_g6",
              `What is the difference between "${data.with_mark}" and "${data.without}"?`, data.difference,
              sentPairs.filter(s => s.difference !== data.difference).map(s => s.difference).slice(0, 3)));
          }
        } else {
          if (rng() > 0.5) {
            const data = pick(effectData, rng);
            q.push(createTyping("punctuation_g6", "punct_effect_g6",
              `What effect does a ${data.mark} create in: "${data.example}"?`, data.effect));
          } else {
            const data = pick(effectData, rng);
            q.push(createTyping("punctuation_g6", "punct_effect_g6",
              `Which punctuation mark ${data.effect}?`, data.mark));
          }
        }
      }
      return q;
    },
    pronoun_cases_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const caseData = [
        { sentence: "The teacher gave ___ the homework.", correct: "him", case: "objective" },
        { sentence: "___ went to the store.", correct: "She", case: "subjective" },
        { sentence: "The prize belongs to ___.", correct: "them", case: "objective" },
        { sentence: "___ and I went to the park.", correct: "He", case: "subjective" },
        { sentence: "Please give the book to ___.", correct: "me", case: "objective" },
        { sentence: "The package is for ___.", correct: "us", case: "objective" },
        { sentence: "___ wrote the letter.", correct: "I", case: "subjective" },
        { sentence: "The dog followed ___ home.", correct: "her", case: "objective" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(caseData, rng);
        const wrong = caseData.filter(c => c.correct !== data.correct).map(c => c.correct).slice(0, 3);
        q.push(createMCQ("grammar_g6", "pronoun_cases_g6", `Which pronoun fills the blank? "${data.sentence}"`, data.correct, wrong));
      }
      return q;
    },
    intensive_pronouns_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const intensiveData = [
        { sentence: "I ___ baked this cake.", correct: "myself", use: "emphasis" },
        { sentence: "He ___ told me the truth.", correct: "himself", use: "emphasis" },
        { sentence: "The president ___ attended the event.", correct: "herself", use: "emphasis" },
        { sentence: "They ___ decided to help.", correct: "themselves", use: "emphasis" },
        { sentence: "We ___ cleaned the house.", correct: "ourselves", use: "emphasis" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(intensiveData, rng);
        const wrong = ["me", "him", "her", "them"].slice(0, 3);
        q.push(createMCQ("grammar_g6", "intensive_pronouns_g6", `Which intensive pronoun emphasizes: "${data.sentence}"?`, data.correct, wrong));
      }
      return q;
    },
    pronoun_agreement_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const agreementData = [
        { sentence: "Everyone has ___ own opinion.", correct: "their", agreement: "singular antecedent, plural pronoun" },
        { sentence: "Each student should bring ___ pencil.", correct: "their", agreement: "singular, plural pronoun" },
        { sentence: "Neither Jane nor Tom brought ___ homework.", correct: "their", agreement: "neither...nor, plural" },
        { sentence: "Anyone can share ___ ideas.", correct: "their", agreement: "indefinite pronoun" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(agreementData, rng);
        const wrong = ["his", "its", "her"].slice(0, 3);
        q.push(createMCQ("grammar_g6", "pronoun_agreement_g6", `Fill in: ${data.sentence}`, data.correct, wrong));
      }
      return q;
    },
    pronoun_shifts_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const shiftData = [
        { original: "You shouldn't eat junk food.", formal: "One should not eat junk food.", shift: "you → one" },
        { original: "If you want to succeed, you must work hard.", formal: "If one wants to succeed, one must work hard.", shift: "you → one" },
        { original: "You never know what will happen.", formal: "One never knows what will happen.", shift: "you → one" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(shiftData, rng);
        q.push(createMCQ("grammar_g6", "pronoun_shifts_g6", `Convert to formal (you→one): "${data.original}"`, data.formal, ["One shouldn't eat junk.", "You must eat well.", "Eating junk is bad."]));
      }
      return q;
    },
    sentence_patterns_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const patternData = [
        { sentence: "Dogs bark.", pattern: "S-V", type: "simple" },
        { sentence: "She loves ice cream.", pattern: "S-V-O", type: "transitive" },
        { sentence: "He is a teacher.", pattern: "S-V-C", type: "linking" },
        { sentence: "She gave him a book.", pattern: "S-V-IO-DO", type: "indirect object" },
        { sentence: "The cat sleeps.", pattern: "S-V", type: "simple" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(patternData, rng);
        const wrong = ["S-V", "S-V-O", "S-V-C", "S-V-IO-DO"].filter(p => p !== data.pattern).slice(0, 3);
        q.push(createMCQ("grammar_g6", "sentence_patterns_g6", `What pattern: "${data.sentence}"?`, data.pattern, wrong));
      }
      return q;
    },
    clauses_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const clauseData = [
        { sentence: "Although it rained, we went out.", clause: "Although it rained", type: "dependent" },
        { sentence: "We went out and played games.", clause: "We went out", type: "independent" },
        { sentence: "Because she studied hard, she passed.", clause: "Because she studied hard", type: "dependent" },
        { sentence: "He likes pizza because it is tasty.", clause: "because it is tasty", type: "dependent" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(clauseData, rng);
        const wrong = ["independent", "dependent"].filter(t => t !== data.type);
        q.push(createMCQ("grammar_g6", "clauses_g6", `Is "${data.clause}" independent or dependent?`, data.type, wrong.concat(["adjective", "adverbial"])));
      }
      return q;
    },
    complex_sentences_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "She studied hard and passed the test, which made her happy.", type: "compound-complex" },
        { sentence: "He ran fast, and she danced gracefully.", type: "compound" },
        { sentence: "Although he was tired, he finished the work because he was determined.", type: "complex" },
        { sentence: "The cat slept while the dog played.", type: "complex" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(sentenceData, rng);
        const wrong = ["simple", "compound", "complex", "compound-complex"].filter(t => t !== data.type).slice(0, 3);
        q.push(createMCQ("grammar_g6", "complex_sentences_g6", `Type: "${data.sentence}"?`, data.type, wrong));
      }
      return q;
    },
    relative_clauses_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const relativeData = [
        { sentence: "The girl ___ lives next door is my friend.", correct: "who", antecedent: "girl (person)" },
        { sentence: "The book ___ he recommended is great.", correct: "that", antecedent: "book (thing)" },
        { sentence: "The dog ___ barks loudly is outside.", correct: "that", antecedent: "dog" },
        { sentence: "The teacher ___ helped me was kind.", correct: "who", antecedent: "teacher (person)" },
        { sentence: "This is the place ___ we met.", correct: "where", antecedent: "place (location)" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(relativeData, rng);
        const wrong = ["who", "which", "that", "whose", "whom"].filter(w => w !== data.correct).slice(0, 3);
        q.push(createMCQ("grammar_g6", "relative_clauses_g6", `Fill in: ${data.sentence}`, data.correct, wrong));
      }
      return q;
    },
    prefixes_suffixes_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const affixData = [
        { word: "unity", affix: "-ity", meaning: "state of being" },
        { word: "socialism", affix: "-ism", meaning: "belief system" },
        { word: "artist", affix: "-ist", meaning: "one who practices" },
        { word: "unhappy", affix: "un-", meaning: "not" },
        { word: "rewrite", affix: "re-", meaning: "again" },
        { word: "misunderstand", affix: "mis-", meaning: "wrong" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(affixData, rng);
        const wrong = ["state of being", "not", "again", "wrong", "one who"].filter(m => m !== data.meaning).slice(0, 3);
        q.push(createMCQ("grammar_g6", "prefixes_suffixes_g6", `What does '${data.affix}' mean in '${data.word}'?`, data.meaning, wrong));
      }
      return q;
    },
    commas_dashes_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const punctData = [
        { sentence: "My friend Sarah, the best athlete, won the race.", mark: "commas", use: "apposition" },
        { sentence: "The winner — surprisingly — was the youngest competitor.", mark: "dashes", use: "parenthetical remark" },
        { sentence: "I need three things: pencils, paper, and notebooks.", mark: "colon", use: "series introduction" },
        { sentence: "He was tall; she was short.", mark: "semicolon", use: "connect related clauses" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(punctData, rng);
        const wrong = ["commas", "dashes", "semicolon", "colon"].filter(m => m !== data.mark).slice(0, 3);
        q.push(createMCQ("punctuation_g6", "commas_dashes_g6", `What mark is used for ${data.use}? "${data.sentence}"`, data.mark, wrong));
      }
      return q;
    },
    synonyms_homographs_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordData = [
        { word: "bank", meaning1: "financial institution", meaning2: "side of river", type: "homograph" },
        { word: "lead", meaning1: "guide", meaning2: "metal element", type: "homograph" },
        { word: "tear", meaning1: "rip", meaning2: "drop from eye", type: "homograph" },
        { word: "bow", meaning1: "bend forward", meaning2: "front of ship", type: "homograph" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(wordData, rng);
        q.push(createMCQ("vocab_g6", "synonyms_homographs_g6", `"${data.word}" can mean:`, `"${data.meaning1}" or "${data.meaning2}"`,
          [`"${data.meaning1}" only`, "just a pronoun", "always a verb"]));
      }
      return q;
    },
    analogies_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const analogyData = [
        { pair1: "hot", pair2: "cold", pair3: "dark", answer: "light" },
        { pair1: "tall", pair2: "short", pair3: "fast", answer: "slow" },
        { pair1: "happy", pair2: "sad", pair3: "clean", answer: "dirty" },
        { pair1: "big", pair2: "small", pair3: "loud", answer: "quiet" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(analogyData, rng);
        q.push(createMCQ("vocab_g6", "analogies_g6", `${data.pair1}:${data.pair2} :: ${data.pair3}:___`, data.answer,
          ["bright", "dark", "wet"]));
      }
      return q;
    },
    connotation_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const connData = [
        { denotation: "not spending money", positive: "thrifty", negative: "stingy" },
        { denotation: "calm", positive: "serene", negative: "indifferent" },
        { denotation: "persuasive", positive: "eloquent", negative: "manipulative" },
        { denotation: "adventurous", positive: "bold", negative: "reckless" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(connData, rng);
        q.push(createMCQ("vocab_g6", "connotation_g6", `Which synonym of "${data.denotation}" has positive connotation?`, data.positive,
          [data.negative, "neutral", "unclear"]));
      }
      return q;
    },
    academic_vocab_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const acadData = [
        { term: "hypothesis", definition: "educated guess or prediction" },
        { term: "infer", definition: "conclude based on evidence" },
        { term: "contrast", definition: "show differences between things" },
        { term: "evaluate", definition: "assess or judge quality" },
        { term: "interpret", definition: "explain the meaning of something" },
        { term: "analyze", definition: "break down into parts" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(acadData, rng);
        const wrong = acadData.filter(a => a.term !== data.term).map(a => a.definition).slice(0, 3);
        q.push(createMCQ("vocab_g6", "academic_vocab_g6", `What does '${data.term}' mean?`, data.definition, wrong));
      }
      return q;
    },
    greek_latin_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rootData = [
        { word: "biology", parts: "bio (life) + logy (study)", meaning: "study of life" },
        { word: "astronomy", parts: "astro (star) + nomy (law/system)", meaning: "study of stars" },
        { word: "geography", parts: "geo (earth) + graphy (writing/description)", meaning: "description of Earth" },
        { word: "telephone", parts: "tele (far) + phone (sound)", meaning: "distant sound device" },
        { word: "microscope", parts: "micro (small) + scope (view)", meaning: "tool to view small things" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(rootData, rng);
        q.push(createMCQ("vocab_g6", "greek_latin_g6", `What does "${data.word}" mean? (${data.parts})`, data.meaning,
          ["something different", "opposite meaning", "unrelated concept"]));
      }
      return q;
    },
    root_words_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rootData = [
        { root: "scrib", meaning: "write", examples: "describe, prescribe, transcript" },
        { root: "dict", meaning: "speak", examples: "predict, contradict, dictionary" },
        { root: "spect", meaning: "look/see", examples: "inspect, respect, spectator" },
        { root: "struct", meaning: "build", examples: "construct, instruct, structure" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(rootData, rng);
        q.push(createMCQ("vocab_g6", "root_words_g6", `The root "${data.root}" means:`, data.meaning,
          ["opposite", "different", "unknown"]));
      }
      return q;
    },
    punct_effect_g6_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const effectData = [
        { mark: "exclamation mark", effect: "strong emotion or emphasis" },
        { mark: "question mark", effect: "asks a question" },
        { mark: "ellipsis", effect: "pause or trailing off" },
        { mark: "semicolon", effect: "connects related independent clauses" },
        { mark: "colon", effect: "introduces what follows" },
        { mark: "dash", effect: "adds emphasis or shows interruption" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(effectData, rng);
        const wrong = effectData.filter(e => e.mark !== data.mark).map(e => e.effect).slice(0, 3);
        q.push(createMCQ("punctuation_g6", "punct_effect_g6", `What effect does ${data.mark} have?`, data.effect, wrong));
      }
      return q;
    },
    pronoun_cases_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { blank: "Give ___ (I/me) the book.", answer: "me" },
        { blank: "She asked ___ (he/him) a question.", answer: "him" },
        { blank: "___ (I/me) will help you.", answer: "I" },
        { blank: "This is for ___ (she/her).", answer: "her" },
        { blank: "Between you and ___ (I/me), it was great.", answer: "me" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("grammar_g6", "pronoun_cases_g6", `Fill in: ${data.blank}`, data.answer));
      }
      return q;
    },
    intensive_pronouns_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { blank: "I ___ made this cake.", answer: "myself" },
        { blank: "He ___ told me.", answer: "himself" },
        { blank: "She ___ solved the problem.", answer: "herself" },
        { blank: "We ___ decided to go.", answer: "ourselves" },
        { blank: "They ___ built the house.", answer: "themselves" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("grammar_g6", "intensive_pronouns_g6", `Fill in intensive pronoun: ${data.blank}`, data.answer));
      }
      return q;
    },
    pronoun_agreement_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { blank: "Each student must bring ___ own lunch.", answer: "their" },
        { blank: "Everyone has ___ own opinion.", answer: "their" },
        { blank: "Neither Jane nor Tom brought ___ homework.", answer: "their" },
        { blank: "Anyone can share ___ ideas.", answer: "their" },
        { blank: "Each person should do ___ best.", answer: "their" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("grammar_g6", "pronoun_agreement_g6", `Fill in: ${data.blank}`, data.answer));
      }
      return q;
    },
    pronoun_shifts_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { sentence: "You shouldn't waste time.", formal: "One should not waste time." },
        { sentence: "If you want success, you must work hard.", formal: "If one wants success, one must work hard." },
        { sentence: "You never know what will happen.", formal: "One never knows what will happen." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("grammar_g6", "pronoun_shifts_g6", `Convert to formal: "${data.sentence}"`, data.formal));
      }
      return q;
    },
    sentence_patterns_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const patterns = [
        { sentence: "Dogs bark.", pattern: "S-V" },
        { sentence: "She loves pizza.", pattern: "S-V-O" },
        { sentence: "He is happy.", pattern: "S-V-C" },
        { sentence: "She gave him a book.", pattern: "S-V-IO-DO" },
        { sentence: "The cat sleeps.", pattern: "S-V" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(patterns, rng);
        q.push(createTyping("grammar_g6", "sentence_patterns_g6", `Pattern of "${data.sentence}":`, data.pattern));
      }
      return q;
    },
    clauses_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const clauses = [
        { clause: "Because it rained", type: "dependent" },
        { clause: "She studied hard", type: "independent" },
        { clause: "Although he was tired", type: "dependent" },
        { clause: "We went to the park", type: "independent" },
        { clause: "When the bell rang", type: "dependent" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(clauses, rng);
        q.push(createTyping("grammar_g6", "clauses_g6", `Is "${data.clause}" independent or dependent?`, data.type));
      }
      return q;
    },
    complex_sentences_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { sentence: "She studied hard and passed the test.", type: "compound" },
        { sentence: "Although he was tired, he finished the work.", type: "complex" },
        { sentence: "She studied and he played.", type: "compound" },
        { sentence: "He ran because he was late.", type: "complex" },
        { sentence: "She sang while he danced.", type: "complex" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("grammar_g6", "complex_sentences_g6", `Type: "${data.sentence}"?`, data.type));
      }
      return q;
    },
    relative_clauses_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { blank: "The girl ___ lives next door is my friend.", answer: "who" },
        { blank: "The book ___ he read was excellent.", answer: "that" },
        { blank: "The man ___ is tall plays basketball.", answer: "who" },
        { blank: "This is the place ___ we met.", answer: "where" },
        { blank: "The dog ___ barks loudly is outside.", answer: "that" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("grammar_g6", "relative_clauses_g6", `Fill in: ${data.blank}`, data.answer));
      }
      return q;
    },
    prefixes_suffixes_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const words = [
        { word: "unity", affix: "-ity", meaning: "state of being" },
        { word: "socialism", affix: "-ism", meaning: "belief system" },
        { word: "artist", affix: "-ist", meaning: "one who practices" },
        { word: "unhappy", affix: "un-", meaning: "not" },
        { word: "rewrite", affix: "re-", meaning: "again" },
        { word: "misunderstand", affix: "mis-", meaning: "wrong" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(words, rng);
        q.push(createTyping("grammar_g6", "prefixes_suffixes_g6", `What does "${data.affix}" mean in "${data.word}"?`, data.meaning));
      }
      return q;
    },
    commas_dashes_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const punctData = [
        { sentence: "My friend Sarah, the best athlete, won the race.", use: "apposition" },
        { sentence: "The winner — surprisingly — was the youngest.", use: "parenthetical remark" },
        { sentence: "I need three things: pencils, paper, and notebooks.", use: "series introduction" },
        { sentence: "He was tall; she was short.", use: "connect independent clauses" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(punctData, rng);
        q.push(createTyping("punctuation_g6", "commas_dashes_g6", `Identify the punctuation use: "${data.sentence}"`, data.use));
      }
      return q;
    },
    synonyms_homographs_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const words = [
        { word: "bank", meaning1: "financial institution", meaning2: "side of river" },
        { word: "lead", meaning1: "guide", meaning2: "metal element" },
        { word: "tear", meaning1: "rip", meaning2: "drop from eye" },
        { word: "bow", meaning1: "bend forward", meaning2: "front of ship" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(words, rng);
        if (rng() > 0.5) {
          q.push(createTyping("vocab_g6", "synonyms_homographs_g6", `"${data.word}" can mean:`, `${data.meaning1} or ${data.meaning2}`));
        } else {
          q.push(createTyping("vocab_g6", "synonyms_homographs_g6", `What is a word spelled the same but with different meanings?`, "homograph"));
        }
      }
      return q;
    },
    analogies_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const analogies = [
        { blank: "Loud : quiet :: tall : ___", answer: "short" },
        { blank: "Happy : sad :: clean : ___", answer: "dirty" },
        { blank: "Fast : slow :: big : ___", answer: "small" },
        { blank: "Hot : cold :: dark : ___", answer: "light" },
        { blank: "Good : bad :: hot : ___", answer: "cold" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(analogies, rng);
        q.push(createTyping("vocab_g6", "analogies_g6", `Complete: ${data.blank}`, data.answer));
      }
      return q;
    },
    connotation_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordPairs = [
        { word: "thrifty", connotation: "positive" },
        { word: "stingy", connotation: "negative" },
        { word: "serene", connotation: "positive" },
        { word: "indifferent", connotation: "negative" },
        { word: "bold", connotation: "positive" },
        { word: "reckless", connotation: "negative" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(wordPairs, rng);
        q.push(createTyping("vocab_g6", "connotation_g6", `Does "${data.word}" have positive or negative connotation?`, data.connotation));
      }
      return q;
    },
    academic_vocab_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const definitions = [
        { definition: "educated guess or prediction", word: "hypothesis" },
        { definition: "conclude based on evidence", word: "infer" },
        { definition: "show differences between things", word: "contrast" },
        { definition: "assess or judge quality", word: "evaluate" },
        { definition: "explain the meaning of something", word: "interpret" },
        { definition: "break down into parts", word: "analyze" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(definitions, rng);
        q.push(createTyping("vocab_g6", "academic_vocab_g6", `${data.definition}`, data.word));
      }
      return q;
    },
    greek_latin_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const roots = [
        { combination: "bio + logy", answer: "biology" },
        { combination: "astro + nomy", answer: "astronomy" },
        { combination: "geo + graphy", answer: "geography" },
        { combination: "tele + phone", answer: "telephone" },
        { combination: "micro + scope", answer: "microscope" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(roots, rng);
        q.push(createTyping("vocab_g6", "greek_latin_g6", `Combine: ${data.combination}`, data.answer));
      }
      return q;
    },
    root_words_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const roots = [
        { root: "scrib", meaning: "write" },
        { root: "dict", meaning: "speak" },
        { root: "spect", meaning: "look or see" },
        { root: "struct", meaning: "build" },
        { root: "port", meaning: "carry" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(roots, rng);
        q.push(createTyping("vocab_g6", "root_words_g6", `The root "${data.root}" means what?`, data.meaning));
      }
      return q;
    },
    punct_effect_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const effects = [
        { mark: "exclamation mark", effect: "strong emotion or emphasis" },
        { mark: "question mark", effect: "asks a question" },
        { mark: "ellipsis", effect: "pause or trailing off" },
        { mark: "semicolon", effect: "connects related independent clauses" },
        { mark: "colon", effect: "introduces what follows" },
        { mark: "dash", effect: "adds emphasis or shows interruption" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(effects, rng);
        q.push(createTyping("punctuation_g6", "punct_effect_g6", `What effect does the ${data.mark} create?`, data.effect));
      }
      return q;
    },
    debate_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const debateData = [
        { term: "claim", definition: "statement presented as truth in a debate" },
        { term: "counterclaim", definition: "opposing argument to a claim" },
        { term: "rebuttal", definition: "response that challenges an argument" },
        { term: "perspective", definition: "point of view or standpoint" },
        { term: "bias", definition: "unfair preference for one side" },
        { term: "evidence", definition: "facts supporting an argument" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(debateData, rng);
        const wrong = debateData.filter(d => d.term !== data.term).map(d => d.definition).slice(0, 3);
        q.push(createMCQ("vocab_g6", "debate_g6", `What is a ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    literature_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const litData = [
        { term: "narrator", definition: "person telling the story" },
        { term: "protagonist", definition: "main character" },
        { term: "antagonist", definition: "character opposing the protagonist" },
        { term: "theme", definition: "central idea of a story" },
        { term: "plot", definition: "sequence of events in a story" },
        { term: "foreshadowing", definition: "hint of something to come later" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(litData, rng);
        const wrong = litData.filter(l => l.term !== data.term).map(l => l.definition).slice(0, 3);
        q.push(createMCQ("vocab_g6", "literature_g6", `What is the ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    science_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sciData = [
        { term: "cell", definition: "smallest living unit of an organism" },
        { term: "organism", definition: "living thing" },
        { term: "atom", definition: "smallest unit of matter" },
        { term: "force", definition: "push or pull on an object" },
        { term: "variable", definition: "factor that can change in an experiment" },
        { term: "hypothesis", definition: "prediction or educated guess" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(sciData, rng);
        const wrong = sciData.filter(s => s.term !== data.term).map(s => s.definition).slice(0, 3);
        q.push(createMCQ("vocab_g6", "science_g6", `What is a ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    social_studies_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const ssData = [
        { term: "civilization", definition: "advanced society with cities and government" },
        { term: "trade route", definition: "path used for buying and selling goods" },
        { term: "democracy", definition: "government by the people" },
        { term: "republic", definition: "government where power rests with citizens" },
        { term: "monarchy", definition: "government ruled by a king or queen" },
        { term: "culture", definition: "beliefs, customs, and way of life" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(ssData, rng);
        const wrong = ssData.filter(s => s.term !== data.term).map(s => s.definition).slice(0, 3);
        q.push(createMCQ("vocab_g6", "social_studies_g6", `What is a ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    formal_writing_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const fwData = [
        { term: "thesis", definition: "main argument in an essay" },
        { term: "paragraph", definition: "group of sentences about one idea" },
        { term: "transition", definition: "word/phrase connecting ideas" },
        { term: "evidence", definition: "facts supporting a claim" },
        { term: "citation", definition: "reference to a source" },
        { term: "topic sentence", definition: "main idea of a paragraph" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(fwData, rng);
        const wrong = fwData.filter(f => f.term !== data.term).map(f => f.definition).slice(0, 3);
        q.push(createMCQ("vocab_g6", "formal_writing_g6", `What is a ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    word_nuance_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const nuanceData = [
        { slow: "walk", fast: "stride", tired: "trudge", casual: "stroll" },
        { weak: "whisper", normal: "speak", loud: "shout", harsh: "yell" },
        { nervous: "fidget", tired: "slump", angry: "stomp", happy: "bounce" },
        { little: "glance", normal: "look", intense: "stare", curious: "peek" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(nuanceData, rng);
        const words = Object.values(data);
        const correct = pick(words, rng);
        const wrong = words.filter(w => w !== correct).slice(0, 3);
        q.push(createMCQ("vocab_g6", "word_nuance_g6", `Which word means "move slowly and heavily"?`, "trudge", ["walk", "stride", "stroll"]));
      }
      return q;
    },
    etymology_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const etymData = [
        { word: "psychology", origin: "Greek", parts: "psyche (mind) + logos (study)" },
        { word: "telephone", origin: "Greek", parts: "tele (far) + phone (sound)" },
        { word: "agriculture", origin: "Latin", parts: "ager (field) + cultura (cultivation)" },
        { word: "birthday", origin: "Old English", parts: "birth (origin) + day (24 hours)" },
        { word: "understand", origin: "Old English", parts: "under (beneath) + stand (position)" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(etymData, rng);
        q.push(createMCQ("vocab_g6", "etymology_g6", `"${data.word}" comes from ${data.origin}. True or false?`, "true", ["false", "unknown", "mixed"]));
      }
      return q;
    },
    rhetorical_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rhetoData = [
        { device: "rhetorical question", example: "Don't you want to succeed?", effect: "persuade without expecting answer" },
        { device: "repetition", example: "Yes, yes, YES!", effect: "emphasize importance" },
        { device: "appeal to emotion", example: "Think of the children!", effect: "use feelings instead of logic" },
        { device: "hyperbole", example: "I'm dying of hunger!", effect: "exaggerate for effect" },
        { device: "alliteration", example: "Pretty pink petals", effect: "repeat beginning sounds" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(rhetoData, rng);
        const wrong = rhetoData.filter(r => r.device !== data.device).map(r => r.device).slice(0, 3);
        q.push(createMCQ("vocab_g6", "rhetorical_g6", `What device is "${data.example}"?`, data.device, wrong));
      }
      return q;
    },
    debate_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const debateQ = [
        { question: "Statement presented as truth:", answer: "claim" },
        { question: "Opposing argument to a claim:", answer: "counterclaim" },
        { question: "Response that challenges an argument:", answer: "rebuttal" },
        { question: "Point of view or standpoint:", answer: "perspective" },
        { question: "Unfair preference for one side:", answer: "bias" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(debateQ, rng);
        q.push(createTyping("vocab_g6", "debate_g6", `${data.question}`, data.answer));
      }
      return q;
    },
    literature_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const litQ = [
        { question: "Person telling the story:", answer: "narrator" },
        { question: "Main character:", answer: "protagonist" },
        { question: "Character opposing the protagonist:", answer: "antagonist" },
        { question: "Central idea of a story:", answer: "theme" },
        { question: "Sequence of events in a story:", answer: "plot" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(litQ, rng);
        q.push(createTyping("vocab_g6", "literature_g6", `${data.question}`, data.answer));
      }
      return q;
    },
    science_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sciQ = [
        { question: "Smallest living unit of an organism:", answer: "cell" },
        { question: "Living thing:", answer: "organism" },
        { question: "Smallest unit of matter:", answer: "atom" },
        { question: "Push or pull on an object:", answer: "force" },
        { question: "Factor that can change in an experiment:", answer: "variable" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(sciQ, rng);
        q.push(createTyping("vocab_g6", "science_g6", `${data.question}`, data.answer));
      }
      return q;
    },
    social_studies_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const ssQ = [
        { question: "Advanced society with cities and government:", answer: "civilization" },
        { question: "Path used for buying and selling goods:", answer: "trade route" },
        { question: "Government by the people:", answer: "democracy" },
        { question: "Government where power rests with citizens:", answer: "republic" },
        { question: "Government ruled by a king or queen:", answer: "monarchy" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(ssQ, rng);
        q.push(createTyping("vocab_g6", "social_studies_g6", `${data.question}`, data.answer));
      }
      return q;
    },
    formal_writing_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const fwQ = [
        { question: "Main argument in an essay:", answer: "thesis" },
        { question: "Group of sentences about one idea:", answer: "paragraph" },
        { question: "Word/phrase connecting ideas:", answer: "transition" },
        { question: "Facts supporting a claim:", answer: "evidence" },
        { question: "Reference to a source:", answer: "citation" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(fwQ, rng);
        q.push(createTyping("vocab_g6", "formal_writing_g6", `${data.question}`, data.answer));
      }
      return q;
    },
    word_nuance_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const nuanceQ = [
        { question: "Move slowly and heavily:", answer: "trudge" },
        { question: "Move with confident steps:", answer: "stride" },
        { question: "Walk in a relaxed way:", answer: "stroll" },
        { question: "Speak in a very soft voice:", answer: "whisper" },
        { question: "Speak in a very loud voice:", answer: "shout" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(nuanceQ, rng);
        q.push(createTyping("vocab_g6", "word_nuance_g6", `${data.question}`, data.answer));
      }
      return q;
    },
    etymology_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const etymQ = [
        { word: "psychology", origin: "Greek" },
        { word: "telephone", origin: "Greek" },
        { word: "agriculture", origin: "Latin" },
        { word: "birthday", origin: "Old English" },
        { word: "understand", origin: "Old English" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(etymQ, rng);
        q.push(createTyping("vocab_g6", "etymology_g6", `"${data.word}" comes from which language origin?`, data.origin));
      }
      return q;
    },
    rhetorical_g6_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rhetoQ = [
        { device: "rhetorical question", example: "Don't you want to succeed?" },
        { device: "repetition", example: "Yes, yes, YES!" },
        { device: "appeal to emotion", example: "Think of the children!" },
        { device: "hyperbole", example: "I'm dying of hunger!" },
        { device: "alliteration", example: "Pretty pink petals" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(rhetoQ, rng);
        q.push(createTyping("vocab_g6", "rhetorical_g6", `What device is used: "${data.example}"?`, data.device));
      }
      return q;
    }
  }
};

// ─── GRADE 7 GENERATORS ───────────────────────────────────────────────────

export const G7_Generators = {
  grammar_g7: {
    phrases_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const phraseData = [
        { sentence: "Running fast, he caught the bus.", phrase: "Running fast", type: "participial phrase", wrong: ["noun phrase", "verb phrase", "prepositional phrase"] },
        { sentence: "The tall boy in the red hat smiled.", phrase: "The tall boy in the red hat", type: "noun phrase", wrong: ["participial phrase", "adverbial phrase", "prepositional phrase"] },
        { sentence: "She spoke with great confidence.", phrase: "with great confidence", type: "prepositional phrase", wrong: ["noun phrase", "adjectival phrase", "verb phrase"] },
        { sentence: "Tired from the long journey, they rested.", phrase: "Tired from the long journey", type: "participial phrase", wrong: ["noun phrase", "adverbial phrase", "verb phrase"] },
        { sentence: "The very expensive car broke down.", phrase: "very expensive", type: "adjectival phrase", wrong: ["adverbial phrase", "noun phrase", "participial phrase"] },
        { sentence: "She ran incredibly quickly.", phrase: "incredibly quickly", type: "adverbial phrase", wrong: ["adjectival phrase", "noun phrase", "verb phrase"] },
        { sentence: "To finish on time, she skipped lunch.", phrase: "To finish on time", type: "infinitive phrase", wrong: ["gerund phrase", "participial phrase", "noun phrase"] },
        { sentence: "The dog under the porch barked loudly.", phrase: "under the porch", type: "prepositional phrase", wrong: ["adjectival phrase", "noun phrase", "adverbial phrase"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(phraseData, rng);
          q.push(createMCQ("grammar_g7", "phrases_g7",
            `In "${data.sentence}", what type of phrase is "${data.phrase}"?`, data.type, data.wrong));
        } else {
          const data = pick(phraseData, rng);
          q.push(createTyping("grammar_g7", "phrases_g7",
            `Identify the phrase type of "${data.phrase}" in: "${data.sentence}"`, data.type));
        }
      }
      return q;
    },
    clauses_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const clauseData = [
        { sentence: "Although she was tired, she finished the project.", indCount: 1, depCount: 1, depClause: "Although she was tired", indClause: "she finished the project" },
        { sentence: "The dog barked because it heard a noise.", indCount: 1, depCount: 1, depClause: "because it heard a noise", indClause: "The dog barked" },
        { sentence: "I will go to the store, and I will buy some milk.", indCount: 2, depCount: 0, depClause: "", indClause: "I will go to the store / I will buy some milk" },
        { sentence: "When the bell rings, the students leave.", indCount: 1, depCount: 1, depClause: "When the bell rings", indClause: "the students leave" },
        { sentence: "She sings.", indCount: 1, depCount: 0, depClause: "", indClause: "She sings" },
        { sentence: "After we eat dinner, we will play games, and then we will sleep.", indCount: 2, depCount: 1, depClause: "After we eat dinner", indClause: "we will play games / we will sleep" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(clauseData, rng);
          const askInd = rng() > 0.5;
          if (askInd) {
            const wrong = ["zero", "two", "three"].filter(w => w !== String(data.indCount)).slice(0, 3);
            q.push(createMCQ("grammar_g7", "clauses_g7",
              `How many INDEPENDENT clauses? "${data.sentence}"`, String(data.indCount), wrong));
          } else {
            const wrong = ["zero", "two", "three"].filter(w => w !== String(data.depCount)).slice(0, 3);
            q.push(createMCQ("grammar_g7", "clauses_g7",
              `How many DEPENDENT clauses? "${data.sentence}"`, String(data.depCount), wrong));
          }
        } else {
          const data = pick(clauseData.filter(d => d.depClause !== ""), rng);
          q.push(createTyping("grammar_g7", "clauses_g7",
            `What is the dependent clause in: "${data.sentence}"?`, data.depClause));
        }
      }
      return q;
    },
    sentence_types_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentData = [
        { sentence: "She ran.", type: "simple", wrong: ["compound", "complex", "compound-complex"] },
        { sentence: "She studied, so she passed.", type: "compound", wrong: ["simple", "complex", "compound-complex"] },
        { sentence: "Because it rained, the game was cancelled.", type: "complex", wrong: ["simple", "compound", "compound-complex"] },
        { sentence: "Although he was tired, he finished his homework, and he went to bed.", type: "compound-complex", wrong: ["simple", "compound", "complex"] },
        { sentence: "The cat sat on the mat and purred.", type: "simple", wrong: ["compound", "complex", "compound-complex"] },
        { sentence: "I wanted to go, but I stayed home.", type: "compound", wrong: ["simple", "complex", "compound-complex"] },
        { sentence: "When the alarm rang, everyone evacuated.", type: "complex", wrong: ["simple", "compound", "compound-complex"] },
        { sentence: "While she sang, he played guitar, and the audience cheered.", type: "compound-complex", wrong: ["simple", "compound", "complex"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(sentData, rng);
          q.push(createMCQ("grammar_g7", "sentence_types_g7",
            `What type of sentence? "${data.sentence}"`, data.type, data.wrong));
        } else {
          const data = pick(sentData, rng);
          q.push(createTyping("grammar_g7", "sentence_types_g7",
            `Identify the sentence type: "${data.sentence}"`, data.type));
        }
      }
      return q;
    },
    modifiers_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const modData = [
        { misplaced: "She almost drove her children to school every day.", corrected: "She drove her children to school almost every day.", issue: "misplaced modifier" },
        { misplaced: "He nearly earned a thousand dollars.", corrected: "He earned nearly a thousand dollars.", issue: "misplaced modifier" },
        { misplaced: "Walking through the park, the flowers were beautiful.", corrected: "Walking through the park, she saw beautiful flowers.", issue: "dangling modifier" },
        { misplaced: "Covered in mud, the teacher scolded the children.", corrected: "The teacher scolded the children, who were covered in mud.", issue: "dangling modifier" },
        { misplaced: "Having finished lunch, the bill was paid.", corrected: "Having finished lunch, we paid the bill.", issue: "dangling modifier" },
        { misplaced: "The boy only ate three cookies.", corrected: "The boy ate only three cookies.", issue: "misplaced modifier" },
        { misplaced: "Barking loudly, the mailman was scared by the dog.", corrected: "Barking loudly, the dog scared the mailman.", issue: "dangling modifier" },
        { misplaced: "She just wanted to finish one chapter.", corrected: "She wanted to finish just one chapter.", issue: "misplaced modifier" },
        { misplaced: "I only have time for one task.", corrected: "I have time for only one task.", issue: "misplaced modifier" },
        { misplaced: "Tired after the game, the trophy was heavy to carry.", corrected: "Tired after the game, the players found the trophy heavy to carry.", issue: "dangling modifier" },
        { misplaced: "She completely finished all her work.", corrected: "She finished all her work completely.", issue: "misplaced modifier" },
        { misplaced: "Dancing in the rain, the street became slippery.", corrected: "Dancing in the rain, they found the street slippery.", issue: "dangling modifier" },
        { misplaced: "He barely could see the board.", corrected: "He could barely see the board.", issue: "misplaced modifier" },
        { misplaced: "Having studied all night, the exam seemed easy.", corrected: "Having studied all night, she found the exam easy.", issue: "dangling modifier" },
        { misplaced: "The team only won by one point.", corrected: "The team won by only one point.", issue: "misplaced modifier" },
        { misplaced: "Waiting for the bus, the rain started.", corrected: "While waiting for the bus, she noticed the rain starting.", issue: "dangling modifier" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(modData, rng);
          const askType = rng() > 0.5;
          if (askType) {
            q.push(createMCQ("grammar_g7", "modifiers_g7",
              `What is wrong with: "${data.misplaced}"?`, data.issue,
              ["dangling modifier", "misplaced modifier", "split infinitive", "run-on sentence"].filter(w => w !== data.issue).slice(0, 3)));
          } else {
            q.push(createMCQ("grammar_g7", "modifiers_g7",
              `Which sentence CORRECTS the modifier error in: "${data.misplaced}"?`, data.corrected,
              [data.misplaced, "The sentence is already correct.", "Remove the modifier entirely."].slice(0, 3)));
          }
        } else {
          const data = pick(modData, rng);
          q.push(createTyping("grammar_g7", "modifiers_g7",
            `What type of modifier error is in: "${data.misplaced}"?`, data.issue));
        }
      }
      return q;
    },
    tense_voice_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const shiftData = [
        { incorrect: "She opens the door and smiled.", correct: "She opened the door and smiled.", error: "tense shift (present to past)" },
        { incorrect: "He was running and jumps over the fence.", correct: "He was running and jumped over the fence.", error: "tense shift (past to present)" },
        { incorrect: "The cake was baked by her and she decorated it.", correct: "She baked and decorated the cake.", error: "voice shift (passive to active)" },
        { incorrect: "They will finish the report, and the results are published.", correct: "They will finish the report, and the results will be published.", error: "tense shift (future to present)" },
        { incorrect: "Study for the test, and you should review your notes.", correct: "Study for the test, and review your notes.", error: "mood shift (imperative to indicative)" },
        { incorrect: "She wrote the letter, and then it was mailed by her.", correct: "She wrote the letter and then mailed it.", error: "voice shift (active to passive)" },
        { incorrect: "The team practiced daily and wins the championship.", correct: "The team practiced daily and won the championship.", error: "tense shift (past to present)" },
        { incorrect: "First, mix the ingredients, and then you should bake it.", correct: "First, mix the ingredients, and then bake it.", error: "mood shift (imperative to indicative)" },
        { incorrect: "He walks to school and takes the bus home.", correct: "He walks to school and takes the bus home.", error: "tense consistency (correct)" },
        { incorrect: "The author wrote the story, and the publisher prints it.", correct: "The author wrote the story, and the publisher printed it.", error: "tense shift (past to present)" },
        { incorrect: "The house was painted by the workers and they added shutters.", correct: "The workers painted the house and added shutters.", error: "voice shift (passive to active)" },
        { incorrect: "Please clean your room, and you must make your bed.", correct: "Please clean your room and make your bed.", error: "mood shift (imperative to indicative)" },
        { incorrect: "She had finished her homework and watches TV.", correct: "She had finished her homework and watched TV.", error: "tense shift (past perfect to present)" },
        { incorrect: "They will arrive tomorrow, and they are excited.", correct: "They will arrive tomorrow, and they will be excited.", error: "tense shift (future to present)" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(shiftData, rng);
          const askWhich = rng() > 0.5;
          if (askWhich) {
            q.push(createMCQ("grammar_g7", "tense_voice_g7",
              `Which sentence has an INCORRECT shift?`, data.incorrect,
              [data.correct, "She opened the door and walked in.", "They ran and played outside."].slice(0, 3)));
          } else {
            q.push(createMCQ("grammar_g7", "tense_voice_g7",
              `What error is in: "${data.incorrect}"?`, data.error,
              ["tense shift (past to present)", "voice shift (active to passive)", "mood shift (imperative to indicative)", "tense shift (present to past)"].filter(e => e !== data.error).slice(0, 3)));
          }
        } else {
          const data = pick(shiftData, rng);
          q.push(createTyping("grammar_g7", "tense_voice_g7",
            `Correct: "${data.incorrect}"`, data.correct));
        }
      }
      return q;
    },
  },
  punctuation_g7: {
    commas_phrases_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const commaData = [
        { correct: "My brother, who lives in Boston, is a doctor.", wrong: ["My brother who lives in Boston is a doctor.", "My brother, who lives in Boston is a doctor.", "My brother who, lives in Boston, is a doctor."] },
        { correct: "Feeling tired, she went to bed early.", wrong: ["Feeling tired she went to bed early.", "Feeling, tired she went to bed early.", "Feeling tired, she went, to bed early."] },
        { correct: "Standing on the corner, we waited for the bus.", wrong: ["Standing on the corner we waited for the bus.", "Standing, on the corner we waited for the bus.", "Standing on the corner, we, waited for the bus."] },
        { correct: "The student, having finished her work, left early.", wrong: ["The student having finished her work left early.", "The student, having finished her work left early.", "The student having finished, her work, left early."] },
        { correct: "Mr. Johnson, our neighbor, is very friendly.", wrong: ["Mr. Johnson our neighbor is very friendly.", "Mr. Johnson, our neighbor is very friendly.", "Mr. Johnson our neighbor, is very friendly."] },
        { correct: "After the long hike, we were exhausted.", wrong: ["After the long hike we were exhausted.", "After, the long hike we were exhausted.", "After the long hike, we were, exhausted."] },
        { correct: "The teacher, Ms. Chen, praised our work.", wrong: ["The teacher Ms. Chen praised our work.", "The teacher, Ms. Chen praised our work.", "The teacher Ms. Chen, praised our work."] },
        { correct: "Walking slowly, he enjoyed the scenery.", wrong: ["Walking slowly he enjoyed the scenery.", "Walking, slowly he enjoyed the scenery.", "Walking slowly, he enjoyed, the scenery."] },
        { correct: "Sarah, my best friend, is visiting next week.", wrong: ["Sarah my best friend is visiting next week.", "Sarah, my best friend is visiting next week.", "Sarah my best friend, is visiting next week."] },
        { correct: "Before the meeting, everyone arrived early.", wrong: ["Before the meeting everyone arrived early.", "Before, the meeting everyone arrived early.", "Before the meeting, everyone arrived, early."] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(commaData, rng);
        q.push(createMCQ("punctuation_g7", "commas_phrases_g7",
          "Which uses commas with phrases/clauses correctly?", data.correct, data.wrong));
      }
      return q;
    },
    semicolons_colons_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const scData = [
        { correct: "She studied hard; she passed the test.", rule: "semicolon between independent clauses", wrong: ["She studied hard: she passed the test.", "She studied hard, she passed the test.", "She studied hard. She; passed the test."] },
        { correct: "We need the following: paper, pens, and glue.", rule: "colon before a list", wrong: ["We need the following; paper, pens, and glue.", "We need the following paper, pens, and glue.", "We need: the following paper, pens, and glue."] },
        { correct: "I love two sports: soccer and basketball.", rule: "colon introducing items", wrong: ["I love two sports; soccer and basketball.", "I love: two sports soccer and basketball.", "I love two sports, soccer and basketball."] },
        { correct: "The weather was terrible; however, we still went outside.", rule: "semicolon before conjunctive adverb", wrong: ["The weather was terrible, however, we still went outside.", "The weather was terrible: however, we still went outside.", "The weather was terrible; however we still went outside."] },
        { correct: "He had one goal: to graduate with honors.", rule: "colon before explanation", wrong: ["He had one goal; to graduate with honors.", "He had one goal, to graduate with honors.", "He had one goal to: graduate with honors."] },
        { correct: "She wanted to travel; he preferred to stay home.", rule: "semicolon between independent clauses", wrong: ["She wanted to travel: he preferred to stay home.", "She wanted to travel, he preferred to stay home.", "She wanted to travel. He; preferred to stay home."] },
        { correct: "Three qualities matter most: honesty, kindness, and courage.", rule: "colon introducing list", wrong: ["Three qualities matter most; honesty, kindness, and courage.", "Three qualities matter most honesty, kindness, and courage.", "Three qualities: matter most honesty, kindness, and courage."] },
        { correct: "The plants need care; therefore, water them daily.", rule: "semicolon before conjunctive adverb", wrong: ["The plants need care, therefore, water them daily.", "The plants need care: therefore, water them daily.", "The plants need care; therefore water them daily."] },
        { correct: "There is one reason: she forgot her keys.", rule: "colon before explanation", wrong: ["There is one reason; she forgot her keys.", "There is one reason, she forgot her keys.", "There is one reason she: forgot her keys."] },
        { correct: "We worked hard; we achieved our goal.", rule: "semicolon between independent clauses", wrong: ["We worked hard: we achieved our goal.", "We worked hard, we achieved our goal.", "We worked hard. We; achieved our goal."] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(scData, rng);
          q.push(createMCQ("punctuation_g7", "semicolons_colons_g7",
            "Which correctly uses a semicolon or colon?", data.correct, data.wrong));
        } else {
          const data = pick(scData, rng);
          q.push(createTyping("punctuation_g7", "semicolons_colons_g7",
            `What punctuation rule applies in: "${data.correct}"?`, data.rule));
        }
      }
      return q;
    },
    dashes_hyphens_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const dashData = [
        { correct: "a well-known author", wrong: "a well known author", rule: "hyphen in compound adjective before noun" },
        { correct: "She wanted to go—but decided to stay.", wrong: "She wanted to go - but decided to stay.", rule: "em dash for emphasis or interruption" },
        { correct: "The following items—books, pens, and paper—were on sale.", wrong: "The following items - books, pens, and paper - were on sale.", rule: "em dashes for parenthetical" },
        { correct: "My twenty-three-year-old sister is a teacher.", wrong: "My twenty three year old sister is a teacher.", rule: "hyphens in compound numbers/ages" },
        { correct: "a state-of-the-art facility", wrong: "a state of the art facility", rule: "hyphens in compound modifier" },
        { correct: "He is a self-taught musician.", wrong: "He is a self taught musician.", rule: "hyphen with self- prefix" },
        { correct: "The president—once a teacher—gave a speech.", wrong: "The president, once a teacher, gave a speech.", rule: "em dashes for stronger parenthetical" },
        { correct: "a high-quality product", wrong: "a high quality product", rule: "hyphen in compound adjective before noun" },
        { correct: "This is an up-to-date report—the latest version.", wrong: "This is an up to date report - the latest version.", rule: "hyphens in compound and em dashes" },
        { correct: "My thirty-year-old brother lives here.", wrong: "My thirty year old brother lives here.", rule: "hyphens in compound ages" },
        { correct: "The goal—success—was within reach.", wrong: "The goal - success - was within reach.", rule: "em dashes for emphasis or apposition" },
        { correct: "a brand-new idea", wrong: "a brand new idea", rule: "hyphen in compound adjective before noun" },
        { correct: "The ex-president—now retired—wrote a book.", wrong: "The ex-president, now retired, wrote a book.", rule: "em dashes for parenthetical info" },
        { correct: "a two-word phrase", wrong: "a two word phrase", rule: "hyphen in compound number-word" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(dashData, rng);
          q.push(createMCQ("punctuation_g7", "dashes_hyphens_g7",
            "Which uses dashes or hyphens correctly?", data.correct,
            [data.wrong, "a well—known author", "twenty three-year old"].slice(0, 3)));
        } else {
          const data = pick(dashData, rng);
          q.push(createTyping("punctuation_g7", "dashes_hyphens_g7",
            `What punctuation rule applies in: "${data.correct}"?`, data.rule));
        }
      }
      return q;
    },
  },
  vocab_g7: {
    figurative_language_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const figData = [
        { phrase: "The wind whispered through the trees.", device: "personification", wrong: ["simile", "alliteration", "hyperbole"] },
        { phrase: "Her voice dripped with sarcasm.", device: "metaphor", wrong: ["simile", "personification", "alliteration"] },
        { phrase: "The city is a jungle.", device: "metaphor", wrong: ["simile", "personification", "hyperbole"] },
        { phrase: "As silent as the grave.", device: "simile", wrong: ["metaphor", "personification", "alliteration"] },
        { phrase: "I have a million things to do.", device: "hyperbole", wrong: ["metaphor", "simile", "personification"] },
        { phrase: "Peter Piper picked a peck of pickled peppers.", device: "alliteration", wrong: ["metaphor", "simile", "onomatopoeia"] },
        { phrase: "The stars danced across the sky.", device: "personification", wrong: ["metaphor", "simile", "alliteration"] },
        { phrase: "Life is a roller coaster.", device: "metaphor", wrong: ["simile", "hyperbole", "personification"] },
        { phrase: "He ran faster than the speed of light.", device: "hyperbole", wrong: ["simile", "metaphor", "personification"] },
        { phrase: "The soft sound of silk sliding smoothly.", device: "alliteration", wrong: ["onomatopoeia", "simile", "metaphor"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(figData, rng);
          q.push(createMCQ("vocab_g7", "figurative_language_g7",
            `What figurative device? "${data.phrase}"`, data.device, data.wrong));
        } else {
          const data = pick(figData, rng);
          q.push(createTyping("vocab_g7", "figurative_language_g7",
            `Identify the figurative device: "${data.phrase}"`, data.device));
        }
      }
      return q;
    },
    connotation_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordPairs = [
        { positive: "thrifty", negative: "stingy", neutral: "economical", meaning: "careful with money" },
        { positive: "determined", negative: "stubborn", neutral: "persistent", meaning: "unwilling to change course" },
        { positive: "curious", negative: "nosy", neutral: "inquisitive", meaning: "wanting to know" },
        { positive: "slender", negative: "scrawny", neutral: "thin", meaning: "not heavy or wide" },
        { positive: "confident", negative: "arrogant", neutral: "self-assured", meaning: "believing in oneself" },
        { positive: "youthful", negative: "immature", neutral: "young", meaning: "not old" },
        { positive: "assertive", negative: "aggressive", neutral: "direct", meaning: "strong in expressing views" },
        { positive: "frugal", negative: "cheap", neutral: "careful with money", meaning: "spending little" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const pair = pick(wordPairs, rng);
          const askPositive = rng() > 0.5;
          if (askPositive) {
            q.push(createMCQ("vocab_g7", "connotation_g7",
              `Which word has a POSITIVE connotation for "${pair.meaning}"?`, pair.positive,
              [pair.negative, pair.neutral, "unknown"]));
          } else {
            q.push(createMCQ("vocab_g7", "connotation_g7",
              `Which word has a NEGATIVE connotation for "${pair.meaning}"?`, pair.negative,
              [pair.positive, pair.neutral, "unknown"]));
          }
        } else {
          const pair = pick(wordPairs, rng);
          const askPos = rng() > 0.5;
          q.push(createTyping("vocab_g7", "connotation_g7",
            `Name a word with ${askPos ? "POSITIVE" : "NEGATIVE"} connotation meaning "${pair.meaning}":`,
            askPos ? pair.positive : pair.negative));
        }
      }
      return q;
    },
    academic_vocab_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordData = [
        { word: "substantiate", meaning: "provide evidence for", context: "You need to ___ your claim with data.", wrong: ["contradict", "summarize", "ignore"] },
        { word: "coherent", meaning: "logical and consistent", context: "Her argument was clear and ___.", wrong: ["random", "confusing", "vague"] },
        { word: "juxtapose", meaning: "place side by side for comparison", context: "The author chose to ___ the two characters.", wrong: ["separate", "ignore", "combine"] },
        { word: "elaborate", meaning: "explain in more detail", context: "Please ___ on your main point.", wrong: ["shorten", "delete", "skip"] },
        { word: "cite", meaning: "refer to as evidence or authority", context: "Remember to ___ your sources.", wrong: ["ignore", "hide", "forget"] },
        { word: "infer", meaning: "conclude from evidence and reasoning", context: "We can ___ the character's feelings from his actions.", wrong: ["state directly", "ignore", "guess randomly"] },
        { word: "paraphrase", meaning: "restate in your own words", context: "Try to ___ the author's main argument.", wrong: ["copy exactly", "ignore", "delete"] },
        { word: "synthesize", meaning: "combine ideas from multiple sources", context: "Your essay should ___ information from all three articles.", wrong: ["copy from one", "ignore", "separate"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(wordData, rng);
          q.push(createMCQ("vocab_g7", "academic_vocab_g7",
            `What does '${data.word}' mean?`, data.meaning, data.wrong));
        } else {
          const data = pick(wordData, rng);
          q.push(createTyping("vocab_g7", "academic_vocab_g7",
            `Define '${data.word}':`, data.meaning));
        }
      }
      return q;
    },
    analogies_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const analogyData = [
        { pair1: "author", pair2: "book", pair3: "composer", answer: "symphony", wrong: ["note", "musician", "instrument"] },
        { pair1: "painter", pair2: "canvas", pair3: "sculptor", answer: "marble", wrong: ["chisel", "clay", "statue"] },
        { pair1: "teacher", pair2: "student", pair3: "coach", answer: "athlete", wrong: ["training", "sport", "gym"] },
        { pair1: "architect", pair2: "building", pair3: "engineer", answer: "bridge", wrong: ["concrete", "design", "structure"] },
        { pair1: "chef", pair2: "restaurant", pair3: "conductor", answer: "orchestra", wrong: ["music", "instrument", "concert"] },
        { pair1: "chapter", pair2: "book", pair3: "scene", answer: "play", wrong: ["actor", "stage", "movie"] },
        { pair1: "telescope", pair2: "stars", pair3: "microscope", answer: "cells", wrong: ["lens", "glass", "small"] },
        { pair1: "oasis", pair2: "desert", pair3: "island", answer: "ocean", wrong: ["sand", "water", "beach"] },
        { pair1: "pilot", pair2: "airplane", pair3: "captain", answer: "ship", wrong: ["ocean", "crew", "harbor"] },
        { pair1: "prologue", pair2: "beginning", pair3: "epilogue", answer: "ending", wrong: ["middle", "chapter", "story"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(analogyData, rng);
          q.push(createMCQ("vocab_g7", "analogies_g7",
            `${data.pair1} is to ${data.pair2} as ${data.pair3} is to ___?`,
            data.answer, data.wrong));
        } else {
          const data = pick(analogyData, rng);
          q.push(createTyping("vocab_g7", "analogies_g7",
            `${data.pair1} : ${data.pair2} :: ${data.pair3} : ___`,
            data.answer));
        }
      }
      return q;
    },
  },
  clause_types_g7: {
    cause_effect_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const ceData = [
        { sentence: "Because it was raining, the game was cancelled.", conjunction: "because", cause: "it was raining", effect: "the game was cancelled" },
        { sentence: "Since she studied hard, she passed the exam.", conjunction: "since", cause: "she studied hard", effect: "she passed the exam" },
        { sentence: "The road was closed due to an accident.", conjunction: "due to", cause: "an accident", effect: "the road was closed" },
        { sentence: "He was late because the traffic was terrible.", conjunction: "because", cause: "the traffic was terrible", effect: "he was late" },
        { sentence: "Since the power went out, we used candles.", conjunction: "since", cause: "the power went out", effect: "we used candles" },
        { sentence: "The flowers wilted because nobody watered them.", conjunction: "because", cause: "nobody watered them", effect: "the flowers wilted" },
      ];
      const conjunctions = ["because", "since", "due to", "as a result of", "therefore", "consequently"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(ceData, rng);
          const wrong = ["although", "unless", "while"].slice(0, 3);
          q.push(createMCQ("clause_types_g7", "cause_effect_g7",
            `Which conjunction introduces a cause in: "${data.sentence}"?`, data.conjunction, wrong));
        } else {
          const data = pick(ceData, rng);
          q.push(createTyping("clause_types_g7", "cause_effect_g7",
            `What is the CAUSE in: "${data.sentence}"?`, data.cause));
        }
      }
      return q;
    },
    conditional_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const condData = [
        { sentence: "If it rains, we will stay inside.", type: "first conditional (real/likely)", condition: "If it rains", result: "we will stay inside" },
        { sentence: "Unless you study, you will not pass.", type: "first conditional (negative)", condition: "Unless you study", result: "you will not pass" },
        { sentence: "If I were a bird, I would fly south.", type: "second conditional (unreal)", condition: "If I were a bird", result: "I would fly south" },
        { sentence: "If she had called, I would have answered.", type: "third conditional (past unreal)", condition: "If she had called", result: "I would have answered" },
        { sentence: "If you heat ice, it melts.", type: "zero conditional (fact)", condition: "If you heat ice", result: "it melts" },
        { sentence: "Unless they hurry, they will miss the bus.", type: "first conditional (negative)", condition: "Unless they hurry", result: "they will miss the bus" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(condData, rng);
          const askType = rng() > 0.5;
          if (askType) {
            const wrong = condData.filter(c => c.type !== data.type).map(c => c.type).slice(0, 3);
            q.push(createMCQ("clause_types_g7", "conditional_g7",
              `What type of conditional? "${data.sentence}"`, data.type, wrong));
          } else {
            q.push(createMCQ("clause_types_g7", "conditional_g7",
              `Which is a CONDITIONAL sentence?`, data.sentence,
              ["It is raining today.", "She likes rain.", "We stayed inside yesterday."]));
          }
        } else {
          const data = pick(condData, rng);
          q.push(createTyping("clause_types_g7", "conditional_g7",
            `What is the condition in: "${data.sentence}"?`, data.condition));
        }
      }
      return q;
    },
    concessive_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const concData = [
        { sentence: "Although it was late, he continued working.", conjunction: "although" },
        { sentence: "Even though she was tired, she finished the race.", conjunction: "even though" },
        { sentence: "Though he studied, he did not pass.", conjunction: "though" },
        { sentence: "Despite being young, she showed great maturity.", conjunction: "despite" },
        { sentence: "While I understand your point, I disagree.", conjunction: "while" },
        { sentence: "Even though the weather was bad, we had fun.", conjunction: "even though" },
        { sentence: "Although the price was high, they bought it.", conjunction: "although" },
      ];
      const concessiveConj = ["although", "even though", "though", "despite", "while", "in spite of"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(concData, rng);
          const wrong = ["because", "so that", "when"].slice(0, 3);
          q.push(createMCQ("clause_types_g7", "concessive_g7",
            `Which conjunction introduces a CONCESSIVE clause in: "${data.sentence}"?`, data.conjunction, wrong));
        } else {
          q.push(createTyping("clause_types_g7", "concessive_g7",
            "Name a conjunction that introduces a concessive clause (showing contrast):", pick(concessiveConj, rng)));
        }
      }
      return q;
    },
    purpose_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const purposeData = [
        { sentence: "She studied so that she could pass the test.", conjunction: "so that", purpose: "she could pass the test" },
        { sentence: "He left early in order to catch the bus.", conjunction: "in order to", purpose: "catch the bus" },
        { sentence: "They saved money so that they could travel.", conjunction: "so that", purpose: "they could travel" },
        { sentence: "She practiced daily in order to improve.", conjunction: "in order to", purpose: "improve" },
        { sentence: "He spoke loudly so that everyone could hear.", conjunction: "so that", purpose: "everyone could hear" },
        { sentence: "We arrived early to get good seats.", conjunction: "to", purpose: "get good seats" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(purposeData, rng);
          q.push(createMCQ("clause_types_g7", "purpose_g7",
            `Which correctly uses a PURPOSE clause?`, data.sentence,
            ["She studied because she failed.", "She studied although she was tired.", "She studied when she had time."]));
        } else {
          const data = pick(purposeData, rng);
          q.push(createTyping("clause_types_g7", "purpose_g7",
            `What is the purpose in: "${data.sentence}"?`, data.purpose));
        }
      }
      return q;
    },
    time_clauses_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const timeData = [
        { sentence: "After she arrived, we started dinner.", conjunction: "after", wrong: ["because", "although", "so that"] },
        { sentence: "While he was reading, she was cooking.", conjunction: "while", wrong: ["because", "unless", "so that"] },
        { sentence: "Before the bell rings, finish your work.", conjunction: "before", wrong: ["although", "because", "if"] },
        { sentence: "When the sun set, the stars appeared.", conjunction: "when", wrong: ["because", "although", "unless"] },
        { sentence: "Until she returns, we will wait here.", conjunction: "until", wrong: ["because", "although", "if"] },
        { sentence: "As soon as the movie started, the audience fell silent.", conjunction: "as soon as", wrong: ["although", "because", "unless"] },
        { sentence: "Since we moved here, we have made many friends.", conjunction: "since", wrong: ["although", "if", "so that"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(timeData, rng);
          q.push(createMCQ("clause_types_g7", "time_clauses_g7",
            `Which conjunction introduces a TIME clause in: "${data.sentence}"?`, data.conjunction, data.wrong));
        } else {
          const data = pick(timeData, rng);
          q.push(createTyping("clause_types_g7", "time_clauses_g7",
            `What is the time conjunction in: "${data.sentence}"?`, data.conjunction));
        }
      }
      return q;
    },
  },
  verbal_phrases_g7: {
    infinitive_phrases_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const infData = [
        { sentence: "To win the game is her goal.", phrase: "To win the game", function: "subject", wrong: ["direct object", "adverb", "adjective"] },
        { sentence: "She wants to finish her homework.", phrase: "to finish her homework", function: "direct object", wrong: ["subject", "adverb", "adjective"] },
        { sentence: "He went to the store to buy milk.", phrase: "to buy milk", function: "adverb (purpose)", wrong: ["subject", "direct object", "adjective"] },
        { sentence: "The best way to learn is to practice.", phrase: "to practice", function: "predicate nominative", wrong: ["subject", "direct object", "adverb"] },
        { sentence: "To travel the world is my dream.", phrase: "To travel the world", function: "subject", wrong: ["direct object", "adverb", "adjective"] },
        { sentence: "I need to study for the exam.", phrase: "to study for the exam", function: "direct object", wrong: ["subject", "adverb", "adjective"] },
        { sentence: "She is the person to ask about that.", phrase: "to ask about that", function: "adjective (modifying person)", wrong: ["subject", "direct object", "adverb"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(infData, rng);
          const askId = rng() > 0.5;
          if (askId) {
            q.push(createMCQ("verbal_phrases_g7", "infinitive_phrases_g7",
              `Which is an INFINITIVE PHRASE in: "${data.sentence}"?`, data.phrase,
              ["running quickly", "the tall boy", "with great care"]));
          } else {
            q.push(createMCQ("verbal_phrases_g7", "infinitive_phrases_g7",
              `What is the FUNCTION of "${data.phrase}" in: "${data.sentence}"?`, data.function, data.wrong));
          }
        } else {
          const data = pick(infData, rng);
          q.push(createTyping("verbal_phrases_g7", "infinitive_phrases_g7",
            `What is the infinitive phrase in: "${data.sentence}"?`, data.phrase));
        }
      }
      return q;
    },
    gerund_phrases_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const gerData = [
        { sentence: "Swimming every day is healthy.", phrase: "Swimming every day", function: "subject", wrong: ["direct object", "object of preposition", "predicate nominative"] },
        { sentence: "She enjoys reading novels.", phrase: "reading novels", function: "direct object", wrong: ["subject", "object of preposition", "predicate nominative"] },
        { sentence: "He talked about running the marathon.", phrase: "running the marathon", function: "object of preposition", wrong: ["subject", "direct object", "predicate nominative"] },
        { sentence: "Her favorite hobby is painting landscapes.", phrase: "painting landscapes", function: "predicate nominative", wrong: ["subject", "direct object", "object of preposition"] },
        { sentence: "Playing chess requires concentration.", phrase: "Playing chess", function: "subject", wrong: ["direct object", "object of preposition", "predicate nominative"] },
        { sentence: "I am tired of waiting.", phrase: "waiting", function: "object of preposition", wrong: ["subject", "direct object", "predicate nominative"] },
        { sentence: "Writing clearly is an important skill.", phrase: "Writing clearly", function: "subject", wrong: ["direct object", "object of preposition", "predicate nominative"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(gerData, rng);
          const askFunc = rng() > 0.5;
          if (askFunc) {
            q.push(createMCQ("verbal_phrases_g7", "gerund_phrases_g7",
              `What is the FUNCTION of the gerund phrase in: "${data.sentence}"?`, data.function, data.wrong));
          } else {
            q.push(createMCQ("verbal_phrases_g7", "gerund_phrases_g7",
              `In "${data.sentence}", the gerund phrase is:`, data.phrase,
              ["to swim every day", "she enjoys", "the marathon"]));
          }
        } else {
          const data = pick(gerData, rng);
          q.push(createTyping("verbal_phrases_g7", "gerund_phrases_g7",
            `What is the gerund phrase in: "${data.sentence}"?`, data.phrase));
        }
      }
      return q;
    },
    participial_phrases_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const partData = [
        { sentence: "Exhausted from the race, she sat down.", phrase: "Exhausted from the race", modifies: "she", wrong: ["the race", "sat down", "down"] },
        { sentence: "Running quickly, he caught the bus.", phrase: "Running quickly", modifies: "he", wrong: ["the bus", "quickly", "caught"] },
        { sentence: "The letter, written in haste, contained errors.", phrase: "written in haste", modifies: "letter", wrong: ["errors", "haste", "contained"] },
        { sentence: "Surprised by the noise, the cat jumped.", phrase: "Surprised by the noise", modifies: "cat", wrong: ["noise", "jumped", "the"] },
        { sentence: "Singing softly, the mother rocked the baby.", phrase: "Singing softly", modifies: "mother", wrong: ["baby", "softly", "rocked"] },
        { sentence: "The students, having finished the test, left early.", phrase: "having finished the test", modifies: "students", wrong: ["test", "early", "left"] },
        { sentence: "Damaged by the storm, the roof needed repair.", phrase: "Damaged by the storm", modifies: "roof", wrong: ["storm", "repair", "needed"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const data = pick(partData, rng);
          const askPhrase = rng() > 0.5;
          if (askPhrase) {
            q.push(createMCQ("verbal_phrases_g7", "participial_phrases_g7",
              `What is the participial phrase in: "${data.sentence}"?`, data.phrase,
              ["to sit down", "she sat", "from the race"]));
          } else {
            q.push(createMCQ("verbal_phrases_g7", "participial_phrases_g7",
              `In "${data.sentence}", the participial phrase "${data.phrase}" modifies:`, data.modifies, data.wrong));
          }
        } else {
          const data = pick(partData, rng);
          q.push(createTyping("verbal_phrases_g7", "participial_phrases_g7",
            `What does the participial phrase modify in: "${data.sentence}"?`, data.modifies));
        }
      }
      return q;
    },
    phrases_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const phraseTypes = [
        { phrase: "The tall boy", type: "noun phrase" },
        { phrase: "runs quickly", type: "verb phrase" },
        { phrase: "very intelligent", type: "adjectival phrase" },
        { phrase: "under the table", type: "prepositional phrase" },
        { phrase: "The girl with red hair", type: "noun phrase" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(phraseTypes, rng);
        const wrong = ["noun phrase", "verb phrase", "adjectival phrase", "prepositional phrase"].filter(t => t !== data.type).slice(0, 3);
        q.push(createMCQ("grammar_g7", "phrases_g7", `Type of "${data.phrase}":`, data.type, wrong));
      }
      return q;
    },
    clauses_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const clauseData = [
        { clause: "She studied hard", type: "independent" },
        { clause: "Although it rained", type: "dependent" },
        { clause: "because he was tired", type: "subordinate" },
        { clause: "The dog barked loudly", type: "independent" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(clauseData, rng);
        const wrong = ["independent", "dependent", "subordinate"].filter(t => t !== data.type).slice(0, 3);
        q.push(createMCQ("grammar_g7", "clauses_g7", `"${data.clause}" is:`, data.type, wrong));
      }
      return q;
    },
    sentence_types_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "She ate an apple.", type: "simple" },
        { sentence: "She ate an apple and he drank milk.", type: "compound" },
        { sentence: "Although it rained, we went out.", type: "complex" },
        { sentence: "She studied hard, and although she was tired, she finished the work.", type: "compound-complex" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(sentenceData, rng);
        const wrong = ["simple", "compound", "complex", "compound-complex"].filter(t => t !== data.type).slice(0, 3);
        q.push(createMCQ("grammar_g7", "sentence_types_g7", `Type: "${data.sentence}"?`, data.type, wrong));
      }
      return q;
    },
    modifiers_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const modData = [
        { sentence: "Running down the street, the dog barked loudly.", problem: "dangling modifier", fix: "As the dog ran down the street, it barked loudly." },
        { sentence: "The car hit the tree driving too fast.", problem: "misplaced modifier", fix: "The car, driving too fast, hit the tree." },
        { sentence: "Excited about the party, she danced all night.", problem: "correct", fix: "correct" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(modData, rng);
        q.push(createMCQ("grammar_g7", "modifiers_g7", `"${data.sentence}" has:`, data.problem, ["parallel structure error", "pronoun error", "tense error"]));
      }
      return q;
    },
    tense_voice_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const voiceData = [
        { active: "She wrote the letter.", passive: "The letter was written by her.", voice: "active" },
        { active: "He ate the pizza.", passive: "The pizza was eaten by him.", voice: "passive" },
        { active: "They built the house.", passive: "The house was built by them.", voice: "active" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(voiceData, rng);
        const wrongVoice = data.voice === "active" ? "passive" : "active";
        q.push(createMCQ("grammar_g7", "tense_voice_g7", `"${data.active}" is:`, data.voice, [wrongVoice, "conditional", "subjunctive"]));
      }
      return q;
    },
    commas_phrases_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const commaData = [
        { sentence: "After the storm the sun came out.", correction: "After the storm, the sun came out.", use: "introductory phrase" },
        { sentence: "My brother John is a doctor.", correction: "My brother, John, is a doctor.", use: "parenthetical" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(commaData, rng);
        q.push(createMCQ("punctuation_g7", "commas_phrases_g7", `Commas needed for ${data.use}:`, "yes", ["no", "maybe", "only one"]));
      }
      return q;
    },
    semicolons_colons_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const punctData = [
        { sentence: "She studied hard; she passed the exam.", use: "semicolon" },
        { sentence: "I need three things: pencils, paper, and notebooks.", use: "colon" },
        { sentence: "He was confident; however, he still studied.", use: "semicolon" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(punctData, rng);
        const wrong = ["semicolon", "colon", "comma"].filter(u => u !== data.use).slice(0, 3);
        q.push(createMCQ("punctuation_g7", "semicolons_colons_g7", `"${data.sentence}" uses:`, data.use, wrong));
      }
      return q;
    },
    dashes_hyphens_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const dashData = [
        { sentence: "She was — surprisingly — honest.", mark: "dash", use: "parenthetical insert" },
        { sentence: "well-known author", mark: "hyphen", use: "compound word" },
        { sentence: "He ran — or so he claimed.", mark: "dash", use: "emphasis" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(dashData, rng);
        q.push(createMCQ("punctuation_g7", "dashes_hyphens_g7", `"${data.sentence}" uses ${data.mark} for:`, data.use, ["list intro", "time shift", "quotation"]));
      }
      return q;
    },
    figurative_language_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const figData = [
        { device: "extended metaphor", example: "Life is a journey with many roads." },
        { device: "symbolism", example: "The dove represents peace." },
        { device: "allegory", example: "Animal Farm represents Russian Revolution" },
        { device: "irony", example: "The firefighter was afraid of fire." },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(figData, rng);
        const wrong = ["extended metaphor", "symbolism", "allegory", "irony"].filter(d => d !== data.device).slice(0, 3);
        q.push(createMCQ("vocab_g7", "figurative_language_g7", `"${data.example}" is:`, data.device, wrong));
      }
      return q;
    },
    connotation_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const connData = [
        { denotation: "not spending money", positive: "frugal", negative: "miserly" },
        { denotation: "curious", positive: "inquisitive", negative: "nosy" },
        { denotation: "calm", positive: "serene", negative: "apathetic" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(connData, rng);
        q.push(createMCQ("vocab_g7", "connotation_g7", `"${data.positive}" and "${data.negative}" both mean "${data.denotation}". Which has positive connotation?`, data.positive, [data.negative, "both equal", "neither"]));
      }
      return q;
    },
    academic_vocab_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const acadData = [
        { term: "analyze", definition: "examine something in detail" },
        { term: "evaluate", definition: "judge the value or worth" },
        { term: "synthesize", definition: "combine parts into a whole" },
        { term: "infer", definition: "conclude from evidence" },
        { term: "justify", definition: "provide reasons for" },
        { term: "contrast", definition: "show differences" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(acadData, rng);
        const wrong = acadData.filter(a => a.term !== data.term).map(a => a.definition).slice(0, 3);
        q.push(createMCQ("vocab_g7", "academic_vocab_g7", `What does "${data.term}" mean?`, data.definition, wrong));
      }
      return q;
    },
    analogies_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const analogyData = [
        { rel: "part:whole", ex: "chapter:book" },
        { rel: "cause:effect", ex: "fire:heat" },
        { rel: "tool:purpose", ex: "hammer:nail" },
        { rel: "synonym", ex: "happy:joyful" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(analogyData, rng);
        q.push(createMCQ("vocab_g7", "analogies_g7", `"${data.ex}" is a:`, data.rel, ["antonym", "homonym", "homograph"]));
      }
      return q;
    },
    cause_effect_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const ceData = [
        { sentence: "Because it rained, the game was cancelled.", connector: "because", type: "cause-effect" },
        { sentence: "Since she studied, she passed.", connector: "since", type: "cause-effect" },
        { sentence: "Therefore, he went home.", connector: "therefore", type: "effect-cause" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(ceData, rng);
        q.push(createMCQ("grammar_g7", "cause_effect_g7", `Identify connector in: "${data.sentence}"`, data.connector, ["but", "however", "although"]));
      }
      return q;
    },
    conditional_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const condData = [
        { sentence: "If you study, you will pass.", condition: "if" },
        { sentence: "Unless you hurry, you will be late.", condition: "unless" },
        { sentence: "Provided that you work hard, you will succeed.", condition: "provided that" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(condData, rng);
        const wrong = ["if", "unless", "provided that"].filter(c => c !== data.condition).slice(0, 3);
        q.push(createMCQ("grammar_g7", "conditional_g7", `Conditional word in: "${data.sentence}"`, data.condition, wrong));
      }
      return q;
    },
    concessive_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const concData = [
        { sentence: "Although he was tired, he continued.", connector: "although" },
        { sentence: "Even though it rained, we went out.", connector: "even though" },
        { sentence: "Despite the pain, she finished the race.", connector: "despite" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(concData, rng);
        const wrong = ["although", "even though", "despite"].filter(c => c !== data.connector).slice(0, 3);
        q.push(createMCQ("grammar_g7", "concessive_g7", `Concessive word in: "${data.sentence}"`, data.connector, wrong));
      }
      return q;
    },
    purpose_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const purposeData = [
        { sentence: "She studied in order to pass the test.", purpose: "in order to" },
        { sentence: "We left early so that we could arrive on time.", purpose: "so that" },
        { sentence: "Lock the door lest someone enter.", purpose: "lest" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(purposeData, rng);
        const wrong = ["in order to", "so that", "lest"].filter(p => p !== data.purpose).slice(0, 3);
        q.push(createMCQ("grammar_g7", "purpose_g7", `Purpose connector in: "${data.sentence}"`, data.purpose, wrong));
      }
      return q;
    },
    time_clauses_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const timeData = [
        { sentence: "When she arrived, everyone greeted her.", connector: "when" },
        { sentence: "While I was sleeping, he left.", connector: "while" },
        { sentence: "After the movie ended, we went home.", connector: "after" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(timeData, rng);
        const wrong = ["when", "while", "after", "before", "until"].filter(t => t !== data.connector).slice(0, 3);
        q.push(createMCQ("grammar_g7", "time_clauses_g7", `Time connector in: "${data.sentence}"`, data.connector, wrong));
      }
      return q;
    },
    infinitive_phrases_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const infData = [
        { sentence: "To win is her goal.", function: "subject" },
        { sentence: "She wants to leave.", function: "direct object" },
        { sentence: "To understand this concept, you must study.", function: "modifier" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(infData, rng);
        const wrong = ["subject", "direct object", "modifier"].filter(f => f !== data.function).slice(0, 3);
        q.push(createMCQ("grammar_g7", "infinitive_phrases_g7", `Function in: "${data.sentence}"?`, data.function, wrong));
      }
      return q;
    },
    gerund_phrases_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const gerundData = [
        { sentence: "Swimming is great exercise.", function: "subject" },
        { sentence: "She enjoys reading novels.", function: "direct object" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(gerundData, rng);
        q.push(createMCQ("grammar_g7", "gerund_phrases_g7", `Gerund function in: "${data.sentence}"?`, data.function, ["modifier", "complement", "predicate"]));
      }
      return q;
    },
    participial_phrases_g7_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const partData = [
        { sentence: "The broken vase lay on the floor.", phrase: "broken", form: "-ed participle" },
        { sentence: "Running quickly, he caught the bus.", phrase: "running", form: "-ing participle" },
        { sentence: "Excited about the game, she danced.", phrase: "excited", form: "-ed participle" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(partData, rng);
        const wrong = ["-ing participle", "-ed participle", "gerund"].filter(f => f !== data.form).slice(0, 3);
        q.push(createMCQ("grammar_g7", "participial_phrases_g7", `"${data.phrase}" is an:`, data.form, wrong));
      }
      return q;
    },
    phrases_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const phrases = [
        { type: "noun phrase", example: "The tall boy" },
        { type: "verb phrase", example: "runs quickly" },
        { type: "adjectival phrase", example: "very intelligent" },
        { type: "prepositional phrase", example: "under the table" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(phrases, rng);
        q.push(createTyping("grammar_g7", "phrases_g7", `Type of phrase "${data.example}":`, data.type));
      }
      return q;
    },
    tense_voice_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const voiceData = [
        { blank: "The cake ___ baked by her.", answer: "was" },
        { blank: "The letter ___ written carefully.", answer: "was" },
        { blank: "They ___ invited to the party.", answer: "were" },
        { blank: "The book ___ published last year.", answer: "was" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(voiceData, rng);
        q.push(createTyping("grammar_g7", "tense_voice_g7", `Fill in passive voice: ${data.blank}`, data.answer));
      }
      return q;
    },
    modifiers_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { wrong: "Running down the street, the dog barked.", correct: "As the dog ran down the street, it barked." },
        { wrong: "Excited about the party, her smile was big.", correct: "Excited about the party, she smiled broadly." },
        { wrong: "Walking to school, the backpack fell.", correct: "While walking to school, I dropped my backpack." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("grammar_g7", "modifiers_g7", `Correct: "${data.wrong}"`, data.correct));
      }
      return q;
    },
    conditional_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { blank: "If it rains, we ___ stay inside.", answer: "will" },
        { blank: "Unless you study, you ___ fail.", answer: "will" },
        { blank: "If she arrives, I ___ be happy.", answer: "will" },
        { blank: "Provided you work hard, you ___ succeed.", answer: "will" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("grammar_g7", "conditional_g7", `Fill in: ${data.blank}`, data.answer));
      }
      return q;
    },
    concessive_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { blank: "___ he was tired, he kept working.", answer: "Although" },
        { blank: "Even ___ the weather was bad, we went out.", answer: "though" },
        { blank: "___ the pain, she continued the race.", answer: "Despite" },
        { blank: "___ she had doubts, she succeeded.", answer: "Although" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("grammar_g7", "concessive_g7", `Fill in: ${data.blank}`, data.answer));
      }
      return q;
    },
    cause_effect_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { blank: "She studied hard; ___, she passed.", answer: "therefore" },
        { blank: "It rained heavily; ___, the game was cancelled.", answer: "as a result" },
        { blank: "He was late; ___, everyone was upset.", answer: "consequently" },
        { blank: "The storm arrived; ___, we stayed home.", answer: "therefore" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("grammar_g7", "cause_effect_g7", `Fill in cause-effect: ${data.blank}`, data.answer));
      }
      return q;
    },
    commas_phrases_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const phrases = [
        { sentence: "After the storm___ the sun came out.", answer: "," },
        { sentence: "My best friend___ Sarah___ helped me.", answer: "," },
        { sentence: "Because of the weather___ we stayed inside.", answer: "," },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(phrases, rng);
        q.push(createTyping("punctuation_g7", "commas_phrases_g7", `Add comma if needed: ${data.sentence}`, data.answer));
      }
      return q;
    },
    semicolons_colons_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { sentence: "She studied hard; she passed.", mark: "semicolon" },
        { sentence: "I need three things: pencils, paper, and notebooks.", mark: "colon" },
        { sentence: "He was confident; however, he studied.", mark: "semicolon" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("punctuation_g7", "semicolons_colons_g7", `Is this a semicolon or colon sentence? "${data.sentence}"`, data.mark));
      }
      return q;
    },
    dashes_hyphens_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const examples = [
        { phrase: "well-known author", answer: "hyphen" },
        { phrase: "She was — surprisingly — honest.", answer: "dash" },
        { phrase: "mother-in-law", answer: "hyphen" },
        { phrase: "He ran — or so he said.", answer: "dash" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(examples, rng);
        q.push(createTyping("punctuation_g7", "dashes_hyphens_g7", `Is this a hyphen or dash? "${data.phrase}"`, data.answer));
      }
      return q;
    },
    figurative_language_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const figures = [
        { example: "Life is a journey with many roads.", device: "extended metaphor" },
        { example: "The dove represents peace.", device: "symbolism" },
        { example: "Animal Farm represents the Russian Revolution.", device: "allegory" },
        { example: "He is literally dying of hunger.", device: "hyperbole" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(figures, rng);
        q.push(createTyping("vocab_g7", "figurative_language_g7", `Identify device: "${data.example}"`, data.device));
      }
      return q;
    },
    connotation_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const words = [
        { word: "frugal", connotation: "positive" },
        { word: "miserly", connotation: "negative" },
        { word: "serene", connotation: "positive" },
        { word: "apathetic", connotation: "negative" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(words, rng);
        q.push(createTyping("vocab_g7", "connotation_g7", `Is "${data.word}" positive or negative connotation?`, data.connotation));
      }
      return q;
    },
    academic_vocab_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const vocabData = [
        { definition: "Examine something in detail:", answer: "analyze" },
        { definition: "Judge the value or worth:", answer: "evaluate" },
        { definition: "Combine parts into a whole:", answer: "synthesize" },
        { definition: "Conclude from evidence:", answer: "infer" },
        { definition: "Provide reasons for:", answer: "justify" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(vocabData, rng);
        q.push(createTyping("vocab_g7", "academic_vocab_g7", `${data.definition}`, data.answer));
      }
      return q;
    },
    analogies_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const analogies = [
        { blank: "Chapter : book :: ___", answer: "part : whole" },
        { blank: "Fire : heat :: ___", answer: "cause : effect" },
        { blank: "Hammer : nail :: ___", answer: "tool : purpose" },
        { blank: "Happy : joyful :: ___", answer: "synonym" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(analogies, rng);
        q.push(createTyping("vocab_g7", "analogies_g7", `Complete: ${data.blank}`, data.answer));
      }
      return q;
    },
    infinitive_phrases_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { sentence: "To win is her goal.", function: "subject" },
        { sentence: "She wants to leave.", function: "direct object" },
        { sentence: "To understand this, you must study.", function: "modifier" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("grammar_g7", "infinitive_phrases_g7", `Function of infinitive in: "${data.sentence}"`, data.function));
      }
      return q;
    },
    gerund_phrases_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const blanks = [
        { blank: "___ is good for your health.", answer: "Running" },
        { blank: "___ novels is her favorite hobby.", answer: "Reading" },
        { blank: "___ is a relaxing activity.", answer: "Swimming" },
        { blank: "___ every day helps you stay fit.", answer: "Exercising" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(blanks, rng);
        q.push(createTyping("grammar_g7", "gerund_phrases_g7", `Fill in (gerund as subject): ${data.blank}`, data.answer));
      }
      return q;
    },
    participial_phrases_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const phrases = [
        { blank: "___ about the game, she danced.", answer: "Excited" },
        { blank: "The ___ vase lay on the floor.", answer: "broken" },
        { blank: "___ quickly, he caught the bus.", answer: "Running" },
        { blank: "The ___ children played outside.", answer: "laughing" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(phrases, rng);
        q.push(createTyping("grammar_g7", "participial_phrases_g7", `Fill in participle: ${data.blank}`, data.answer));
      }
      return q;
    },
    clauses_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const clauses = [
        { clause: "She studied hard", type: "independent" },
        { clause: "Although it rained", type: "dependent" },
        { clause: "Because he was tired", type: "dependent" },
        { clause: "The dog barked loudly", type: "independent" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(clauses, rng);
        q.push(createTyping("grammar_g7", "clauses_g7", `Is this independent or dependent? "${data.clause}"`, data.type));
      }
      return q;
    },
    sentence_types_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { sentence: "She ate an apple.", type: "simple" },
        { sentence: "She ate and he drank.", type: "compound" },
        { sentence: "Although it rained, we went out.", type: "complex" },
        { sentence: "She studied and passed the test.", type: "compound" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("grammar_g7", "sentence_types_g7", `Type: "${data.sentence}"?`, data.type));
      }
      return q;
    },
    purpose_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { blank: "She studied ___ pass the test.", answer: "in order to" },
        { blank: "He left early ___ arrive on time.", answer: "so that" },
        { blank: "Lock the door ___ no one enters.", answer: "lest" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("grammar_g7", "purpose_g7", `Fill in purpose clause: ${data.blank}`, data.answer));
      }
      return q;
    },
    time_clauses_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentences = [
        { blank: "___ she arrived, everyone greeted her.", answer: "When" },
        { blank: "___ I was sleeping, he left.", answer: "While" },
        { blank: "___ the movie ended, we went home.", answer: "After" },
        { blank: "___ you finish, we can leave.", answer: "When" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(sentences, rng);
        q.push(createTyping("grammar_g7", "time_clauses_g7", `Fill in temporal connector: ${data.blank}`, data.answer));
      }
      return q;
    },
    literary_devices_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const deviceData = [
        { term: "foreshadowing", definition: "hint of something to come later" },
        { term: "flashback", definition: "return to an earlier event in the story" },
        { term: "motif", definition: "recurring image, pattern, or theme" },
        { term: "symbol", definition: "object representing something abstract" },
        { term: "allusion", definition: "indirect reference to another work or person" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(deviceData, rng);
        const wrong = deviceData.filter(d => d.term !== data.term).map(d => d.definition).slice(0, 3);
        q.push(createMCQ("vocab_g7", "literary_devices_g7", `What is ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    argument_structure_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const argData = [
        { term: "claim", definition: "statement presented as truth" },
        { term: "evidence", definition: "facts supporting a claim" },
        { term: "warrant", definition: "connection between evidence and claim" },
        { term: "rebuttal", definition: "response that challenges an argument" },
        { term: "logical fallacy", definition: "flawed reasoning in an argument" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(argData, rng);
        const wrong = argData.filter(a => a.term !== data.term).map(a => a.definition).slice(0, 3);
        q.push(createMCQ("vocab_g7", "argument_structure_g7", `What is a ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    media_literacy_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const mediaData = [
        { term: "bias", definition: "unfair preference in media" },
        { term: "perspective", definition: "point of view presented in media" },
        { term: "primary source", definition: "original document or account" },
        { term: "secondary source", definition: "analysis or interpretation of primary sources" },
        { term: "propaganda", definition: "biased information to influence opinion" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(mediaData, rng);
        const wrong = mediaData.filter(m => m.term !== data.term).map(m => m.definition).slice(0, 3);
        q.push(createMCQ("vocab_g7", "media_literacy_g7", `What is ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    research_vocab_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const researchData = [
        { term: "citation", definition: "reference to a source" },
        { term: "paraphrase", definition: "restate in own words" },
        { term: "summarize", definition: "give brief statement of main points" },
        { term: "credibility", definition: "trustworthiness of a source" },
        { term: "plagiarism", definition: "using others' ideas without credit" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(researchData, rng);
        const wrong = researchData.filter(r => r.term !== data.term).map(r => r.definition).slice(0, 3);
        q.push(createMCQ("vocab_g7", "research_vocab_g7", `What is a ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    social_issues_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const socialData = [
        { term: "equality", definition: "state of being equal in rights" },
        { term: "justice", definition: "fair treatment under the law" },
        { term: "discrimination", definition: "unfair treatment based on characteristics" },
        { term: "community", definition: "group of people sharing location or values" },
        { term: "advocacy", definition: "support for a cause or person" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(socialData, rng);
        const wrong = socialData.filter(s => s.term !== data.term).map(s => s.definition).slice(0, 3);
        q.push(createMCQ("vocab_g7", "social_issues_g7", `What is ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    science_adv_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sciData = [
        { term: "hypothesis", definition: "prediction in an experiment" },
        { term: "variable", definition: "factor that changes in an experiment" },
        { term: "experiment", definition: "test to prove or disprove hypothesis" },
        { term: "conclusion", definition: "final result of an experiment" },
        { term: "theory", definition: "well-tested explanation" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(sciData, rng);
        const wrong = sciData.filter(s => s.term !== data.term).map(s => s.definition).slice(0, 3);
        q.push(createMCQ("vocab_g7", "science_adv_g7", `What is a ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    history_adv_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const histData = [
        { term: "colonialism", definition: "control of one country by another" },
        { term: "revolution", definition: "sudden change in government" },
        { term: "reform", definition: "improvement or change in system" },
        { term: "propaganda", definition: "biased information for political goal" },
        { term: "ideology", definition: "system of beliefs and values" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(histData, rng);
        const wrong = histData.filter(h => h.term !== data.term).map(h => h.definition).slice(0, 3);
        q.push(createMCQ("vocab_g7", "history_adv_g7", `What is ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    digital_literacy_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const digitalData = [
        { term: "algorithm", definition: "step-by-step procedure for solving a problem" },
        { term: "data", definition: "information collected or stored" },
        { term: "privacy", definition: "right to keep information private" },
        { term: "copyright", definition: "legal right to use original work" },
        { term: "cyberbullying", definition: "bullying using digital technology" },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(digitalData, rng);
        const wrong = digitalData.filter(d => d.term !== data.term).map(d => d.definition).slice(0, 3);
        q.push(createMCQ("vocab_g7", "digital_literacy_g7", `What is ${data.term}?`, data.definition, wrong));
      }
      return q;
    },
    literary_devices_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const deviceQ = [
        { question: "Hint of something to come later:", answer: "foreshadowing" },
        { question: "Return to an earlier event:", answer: "flashback" },
        { question: "Recurring image or pattern:", answer: "motif" },
        { question: "Object representing something abstract:", answer: "symbol" },
        { question: "Indirect reference to another work:", answer: "allusion" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(deviceQ, rng);
        q.push(createTyping("vocab_g7", "literary_devices_g7", `${data.question}`, data.answer));
      }
      return q;
    },
    argument_structure_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const argQ = [
        { question: "Statement presented as truth:", answer: "claim" },
        { question: "Facts supporting a claim:", answer: "evidence" },
        { question: "Connection between evidence and claim:", answer: "warrant" },
        { question: "Response that challenges an argument:", answer: "rebuttal" },
        { question: "Flawed reasoning in an argument:", answer: "logical fallacy" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(argQ, rng);
        q.push(createTyping("vocab_g7", "argument_structure_g7", `${data.question}`, data.answer));
      }
      return q;
    },
    media_literacy_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const mediaQ = [
        { question: "Unfair preference in media:", answer: "bias" },
        { question: "Point of view presented in media:", answer: "perspective" },
        { question: "Original document or account:", answer: "primary source" },
        { question: "Analysis of primary sources:", answer: "secondary source" },
        { question: "Biased information to influence opinion:", answer: "propaganda" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(mediaQ, rng);
        q.push(createTyping("vocab_g7", "media_literacy_g7", `${data.question}`, data.answer));
      }
      return q;
    },
    research_vocab_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const researchQ = [
        { question: "Reference to a source:", answer: "citation" },
        { question: "Restate in own words:", answer: "paraphrase" },
        { question: "Brief statement of main points:", answer: "summarize" },
        { question: "Trustworthiness of a source:", answer: "credibility" },
        { question: "Using others' ideas without credit:", answer: "plagiarism" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(researchQ, rng);
        q.push(createTyping("vocab_g7", "research_vocab_g7", `${data.question}`, data.answer));
      }
      return q;
    },
    social_issues_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const socialQ = [
        { question: "State of being equal in rights:", answer: "equality" },
        { question: "Fair treatment under the law:", answer: "justice" },
        { question: "Unfair treatment based on characteristics:", answer: "discrimination" },
        { question: "Group sharing location or values:", answer: "community" },
        { question: "Support for a cause or person:", answer: "advocacy" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(socialQ, rng);
        q.push(createTyping("vocab_g7", "social_issues_g7", `${data.question}`, data.answer));
      }
      return q;
    },
    science_adv_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sciQ = [
        { question: "Prediction in an experiment:", answer: "hypothesis" },
        { question: "Factor that changes in an experiment:", answer: "variable" },
        { question: "Test to prove or disprove hypothesis:", answer: "experiment" },
        { question: "Final result of an experiment:", answer: "conclusion" },
        { question: "Well-tested explanation:", answer: "theory" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(sciQ, rng);
        q.push(createTyping("vocab_g7", "science_adv_g7", `${data.question}`, data.answer));
      }
      return q;
    },
    history_adv_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const histQ = [
        { question: "Control of one country by another:", answer: "colonialism" },
        { question: "Sudden change in government:", answer: "revolution" },
        { question: "Improvement or change in system:", answer: "reform" },
        { question: "Biased information for political goal:", answer: "propaganda" },
        { question: "System of beliefs and values:", answer: "ideology" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(histQ, rng);
        q.push(createTyping("vocab_g7", "history_adv_g7", `${data.question}`, data.answer));
      }
      return q;
    },
    digital_literacy_g7_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const digitalQ = [
        { question: "Step-by-step procedure for solving a problem:", answer: "algorithm" },
        { question: "Information collected or stored:", answer: "data" },
        { question: "Right to keep information private:", answer: "privacy" },
        { question: "Legal right to use original work:", answer: "copyright" },
        { question: "Bullying using digital technology:", answer: "cyberbullying" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(digitalQ, rng);
        q.push(createTyping("vocab_g7", "digital_literacy_g7", `${data.question}`, data.answer));
      }
      return q;
    }
  },
};

// ─── GRADE 8 GENERATORS ───────────────────────────────────────────────────

export const G8_Generators = {
  complex_grammar_g8: {
    verbals_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const verbalData = [
        { sentence: "To win is her goal.", verbal: "To win", type: "infinitive used as a noun (subject)", wrong: ["gerund", "participle", "adverb"] },
        { sentence: "Swimming is great exercise.", verbal: "Swimming", type: "gerund (subject)", wrong: ["infinitive", "participle", "adjective"] },
        { sentence: "The broken vase lay on the floor.", verbal: "broken", type: "participle (adjective)", wrong: ["gerund", "infinitive", "adverb"] },
        { sentence: "She wants to leave early.", verbal: "to leave early", type: "infinitive (direct object)", wrong: ["gerund", "participle", "noun"] },
        { sentence: "Reading novels is her favorite hobby.", verbal: "Reading novels", type: "gerund (subject)", wrong: ["infinitive", "participle", "adjective"] },
        { sentence: "The howling wind kept us awake.", verbal: "howling", type: "participle (adjective)", wrong: ["gerund", "infinitive", "adverb"] },
        { sentence: "He decided to study medicine.", verbal: "to study medicine", type: "infinitive (direct object)", wrong: ["gerund", "participle", "noun"] },
        { sentence: "She enjoys painting landscapes.", verbal: "painting landscapes", type: "gerund (direct object)", wrong: ["infinitive", "participle", "adjective"] },
        { sentence: "Confused by the directions, he stopped.", verbal: "Confused by the directions", type: "participle (modifier)", wrong: ["gerund", "infinitive", "adverb"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(verbalData, rng);
          q.push(createMCQ("complex_grammar_g8", "verbals_g8",
            `In "${data.sentence}", "${data.verbal}" is a:`, data.type, data.wrong));
        } else {
          const data = pick(verbalData, rng);
          q.push(createTyping("complex_grammar_g8", "verbals_g8",
            `What type of verbal is "${data.verbal}" in: "${data.sentence}"?`, data.type));
        }
      }
      return q;
    },
    participial_modifiers_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const partData = [
        { correct: "Singing loudly, she walked down the street.", dangling: "Singing loudly, the street seemed empty.", issue: "dangling modifier (street can't sing)" },
        { correct: "Exhausted from the race, the runner sat down.", dangling: "Exhausted from the race, the bench looked inviting.", issue: "dangling modifier (bench can't be exhausted)" },
        { correct: "Having finished the exam, the students left.", dangling: "Having finished the exam, the room was empty.", issue: "dangling modifier (room can't finish exam)" },
        { correct: "Amazed by the view, she took a photograph.", dangling: "Amazed by the view, the camera started clicking.", issue: "dangling modifier (camera can't be amazed)" },
        { correct: "Walking through the park, I noticed the flowers.", dangling: "Walking through the park, the flowers were beautiful.", issue: "dangling modifier (flowers can't walk)" },
        { correct: "Covered in snow, the children built a snowman.", dangling: "Covered in snow, the day was perfect for play.", issue: "dangling modifier (day can't be covered in snow)" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(partData, rng);
          const askCorrect = rng() > 0.5;
          if (askCorrect) {
            q.push(createMCQ("complex_grammar_g8", "participial_modifiers_g8",
              "Which sentence uses a participial phrase CORRECTLY (no dangling modifier)?", data.correct,
              [data.dangling, "The street, singing loudly, seemed empty.", "Singing loudly the street."]));
          } else {
            q.push(createMCQ("complex_grammar_g8", "participial_modifiers_g8",
              `What is wrong with: "${data.dangling}"?`, data.issue,
              ["run-on sentence", "comma splice", "sentence fragment"]));
          }
        } else {
          const data = pick(partData, rng);
          q.push(createTyping("complex_grammar_g8", "participial_modifiers_g8",
            `Correct the dangling modifier: "${data.dangling}"`, data.correct));
        }
      }
      return q;
    },
    absolute_phrases_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const phraseData = [
        { sentence: "His homework finished, he went to bed.", absolute: "His homework finished", wrong: ["he went to bed", "His homework", "finished"] },
        { sentence: "The storm having passed, we ventured outside.", absolute: "The storm having passed", wrong: ["we ventured outside", "The storm", "having passed"] },
        { sentence: "All things considered, she made a wise choice.", absolute: "All things considered", wrong: ["she made a wise choice", "All things", "a wise choice"] },
        { sentence: "Weather permitting, we will have a picnic.", absolute: "Weather permitting", wrong: ["we will have a picnic", "a picnic", "permitting"] },
        { sentence: "Her voice trembling, she began her speech.", absolute: "Her voice trembling", wrong: ["she began her speech", "Her voice", "trembling"] },
        { sentence: "The sun having set, we lit the campfire.", absolute: "The sun having set", wrong: ["we lit the campfire", "the campfire", "having set"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(phraseData, rng);
          q.push(createMCQ("complex_grammar_g8", "absolute_phrases_g8",
            `Which is the ABSOLUTE PHRASE in: "${data.sentence}"?`, data.absolute, data.wrong));
        } else {
          const data = pick(phraseData, rng);
          q.push(createTyping("complex_grammar_g8", "absolute_phrases_g8",
            `Identify the absolute phrase in: "${data.sentence}"`, data.absolute));
        }
      }
      return q;
    },
    active_passive_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const voiceData = [
        { active: "The scientist discovered a new element.", passive: "A new element was discovered by the scientist." },
        { active: "The chef prepared a delicious meal.", passive: "A delicious meal was prepared by the chef." },
        { active: "The committee approved the proposal.", passive: "The proposal was approved by the committee." },
        { active: "The dog chased the cat.", passive: "The cat was chased by the dog." },
        { active: "She wrote the report.", passive: "The report was written by her." },
        { active: "The storm destroyed several buildings.", passive: "Several buildings were destroyed by the storm." },
        { active: "The teacher assigned homework.", passive: "Homework was assigned by the teacher." },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const voice = pick(voiceData, rng);
          const isActive = rng() > 0.5;
          const sent = isActive ? voice.active : voice.passive;
          const type = isActive ? "active" : "passive";
          q.push(createMCQ("complex_grammar_g8", "active_passive_g8",
            `Identify the voice: "${sent}"`, type, ["active", "passive"].filter(v => v !== type)));
        } else {
          const voice = pick(voiceData, rng);
          const toPassive = rng() > 0.5;
          if (toPassive) {
            q.push(createTyping("complex_grammar_g8", "active_passive_g8",
              `Convert to PASSIVE: "${voice.active}"`, voice.passive));
          } else {
            q.push(createTyping("complex_grammar_g8", "active_passive_g8",
              `Convert to ACTIVE: "${voice.passive}"`, voice.active));
          }
        }
      }
      return q;
    },
    subjunctive_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const subjData = [
        { correct: "If I were you, I would apologize.", incorrect: "If I was you, I would apologize.", rule: "subjunctive 'were' after 'if' for unreal conditions" },
        { correct: "I wish she were here.", incorrect: "I wish she was here.", rule: "subjunctive 'were' after 'wish'" },
        { correct: "The teacher insisted that he study harder.", incorrect: "The teacher insisted that he studies harder.", rule: "base form after verbs of demand/suggestion" },
        { correct: "It is essential that she be present.", incorrect: "It is essential that she is present.", rule: "base form after 'it is essential that'" },
        { correct: "If he were taller, he could reach the shelf.", incorrect: "If he was taller, he could reach the shelf.", rule: "subjunctive 'were' for hypothetical" },
        { correct: "I suggest that he take the early train.", incorrect: "I suggest that he takes the early train.", rule: "base form after 'suggest'" },
        { correct: "If it were possible, I would travel the world.", incorrect: "If it was possible, I would travel the world.", rule: "subjunctive 'were' for wishes" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(subjData, rng);
          q.push(createMCQ("complex_grammar_g8", "subjunctive_g8",
            "Which sentence uses the SUBJUNCTIVE mood correctly?", data.correct,
            [data.incorrect, "If I am you, I would apologize.", "If I be you, I would apologize."]));
        } else {
          const data = pick(subjData, rng);
          q.push(createTyping("complex_grammar_g8", "subjunctive_g8",
            `What rule explains the subjunctive in: "${data.correct}"?`, data.rule));
        }
      }
      return q;
    },
    voice_mood_shifts_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const shiftData = [
        { inconsistent: "She made the cake, and the dishes were washed by her.", consistent: "She made the cake and washed the dishes.", error: "voice shift (active to passive)" },
        { inconsistent: "The report was written by the student, and she presented it.", consistent: "The student wrote the report and presented it.", error: "voice shift (passive to active)" },
        { inconsistent: "Study for the test, and you should review your notes.", consistent: "Study for the test and review your notes.", error: "mood shift (imperative to indicative)" },
        { inconsistent: "If I were rich, I will buy a mansion.", consistent: "If I were rich, I would buy a mansion.", error: "mood shift (subjunctive to indicative)" },
        { inconsistent: "He ran the race and was awarded a medal by the judges.", consistent: "He ran the race and the judges awarded him a medal.", error: "voice shift (active to passive)" },
        { inconsistent: "Please sit down, and you should be quiet.", consistent: "Please sit down and be quiet.", error: "mood shift (imperative to indicative)" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(shiftData, rng);
          const askWhich = rng() > 0.5;
          if (askWhich) {
            q.push(createMCQ("complex_grammar_g8", "voice_mood_shifts_g8",
              "Which sentence has an INCONSISTENT voice or mood shift?", data.inconsistent,
              [data.consistent, "She made the cake and washed the dishes.", "They ran and played outside."]));
          } else {
            q.push(createMCQ("complex_grammar_g8", "voice_mood_shifts_g8",
              `What error is in: "${data.inconsistent}"?`, data.error,
              ["voice shift (active to passive)", "mood shift (imperative to indicative)", "mood shift (subjunctive to indicative)", "voice shift (passive to active)"].filter(e => e !== data.error).slice(0, 3)));
          }
        } else {
          const data = pick(shiftData, rng);
          q.push(createTyping("complex_grammar_g8", "voice_mood_shifts_g8",
            `Correct the shift: "${data.inconsistent}"`, data.consistent));
        }
      }
      return q;
    },
    verbals_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const verbalData = [
        { sentence: "To win is her goal.", verbal: "To win", type: "infinitive used as a noun (subject)", wrong: ["gerund", "participle", "adverb"] },
        { sentence: "Swimming is great exercise.", verbal: "Swimming", type: "gerund (subject)", wrong: ["infinitive", "participle", "adjective"] },
        { sentence: "The broken vase lay on the floor.", verbal: "broken", type: "participle (adjective)", wrong: ["gerund", "infinitive", "adverb"] },
        { sentence: "She wants to leave early.", verbal: "to leave early", type: "infinitive (direct object)", wrong: ["gerund", "participle", "noun"] },
        { sentence: "Reading novels is her favorite hobby.", verbal: "Reading novels", type: "gerund (subject)", wrong: ["infinitive", "participle", "adjective"] },
        { sentence: "The howling wind kept us awake.", verbal: "howling", type: "participle (adjective)", wrong: ["gerund", "infinitive", "adverb"] },
        { sentence: "He decided to study medicine.", verbal: "to study medicine", type: "infinitive (direct object)", wrong: ["gerund", "participle", "noun"] },
        { sentence: "She enjoys painting landscapes.", verbal: "painting landscapes", type: "gerund (direct object)", wrong: ["infinitive", "participle", "adjective"] },
        { sentence: "Confused by the directions, he stopped.", verbal: "Confused by the directions", type: "participle (modifier)", wrong: ["gerund", "infinitive", "adverb"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(verbalData, rng);
        q.push(createMCQ("complex_grammar_g8", "verbals_g8",
          `In "${data.sentence}", "${data.verbal}" is a:`, data.type, data.wrong));
      }
      return q;
    },
    participial_modifiers_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const partData = [
        { correct: "Singing loudly, she walked down the street.", dangling: "Singing loudly, the street seemed empty.", issue: "dangling modifier (street can't sing)" },
        { correct: "Exhausted from the race, the runner sat down.", dangling: "Exhausted from the race, the bench looked inviting.", issue: "dangling modifier (bench can't be exhausted)" },
        { correct: "Having finished the exam, the students left.", dangling: "Having finished the exam, the room was empty.", issue: "dangling modifier (room can't finish exam)" },
        { correct: "Amazed by the view, she took a photograph.", dangling: "Amazed by the view, the camera started clicking.", issue: "dangling modifier (camera can't be amazed)" },
        { correct: "Walking through the park, I noticed the flowers.", dangling: "Walking through the park, the flowers were beautiful.", issue: "dangling modifier (flowers can't walk)" },
        { correct: "Covered in snow, the children built a snowman.", dangling: "Covered in snow, the day was perfect for play.", issue: "dangling modifier (day can't be covered in snow)" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(partData, rng);
        const askCorrect = rng() > 0.5;
        if (askCorrect) {
          q.push(createMCQ("complex_grammar_g8", "participial_modifiers_g8",
            "Which sentence uses a participial phrase CORRECTLY (no dangling modifier)?", data.correct,
            [data.dangling, "The street, singing loudly, seemed empty.", "Singing loudly the street."]));
        } else {
          q.push(createMCQ("complex_grammar_g8", "participial_modifiers_g8",
            `What is wrong with: "${data.dangling}"?`, data.issue,
            ["run-on sentence", "comma splice", "sentence fragment"]));
        }
      }
      return q;
    },
    absolute_phrases_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const phraseData = [
        { sentence: "His homework finished, he went to bed.", absolute: "His homework finished", wrong: ["he went to bed", "His homework", "finished"] },
        { sentence: "The storm having passed, we ventured outside.", absolute: "The storm having passed", wrong: ["we ventured outside", "The storm", "having passed"] },
        { sentence: "All things considered, she made a wise choice.", absolute: "All things considered", wrong: ["she made a wise choice", "All things", "a wise choice"] },
        { sentence: "Weather permitting, we will have a picnic.", absolute: "Weather permitting", wrong: ["we will have a picnic", "a picnic", "permitting"] },
        { sentence: "Her voice trembling, she began her speech.", absolute: "Her voice trembling", wrong: ["she began her speech", "Her voice", "trembling"] },
        { sentence: "The sun having set, we lit the campfire.", absolute: "The sun having set", wrong: ["we lit the campfire", "the campfire", "having set"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(phraseData, rng);
        q.push(createMCQ("complex_grammar_g8", "absolute_phrases_g8",
          `Which is the ABSOLUTE PHRASE in: "${data.sentence}"?`, data.absolute, data.wrong));
      }
      return q;
    },
    active_passive_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const voiceData = [
        { active: "The scientist discovered a new element.", passive: "A new element was discovered by the scientist." },
        { active: "The chef prepared a delicious meal.", passive: "A delicious meal was prepared by the chef." },
        { active: "The committee approved the proposal.", passive: "The proposal was approved by the committee." },
        { active: "The dog chased the cat.", passive: "The cat was chased by the dog." },
        { active: "She wrote the report.", passive: "The report was written by her." },
        { active: "The storm destroyed several buildings.", passive: "Several buildings were destroyed by the storm." },
        { active: "The teacher assigned homework.", passive: "Homework was assigned by the teacher." },
      ];
      for (let i = 0; i < 30; i++) {
        const voice = pick(voiceData, rng);
        const isActive = rng() > 0.5;
        const sent = isActive ? voice.active : voice.passive;
        const type = isActive ? "active" : "passive";
        q.push(createMCQ("complex_grammar_g8", "active_passive_g8",
          `Identify the voice: "${sent}"`, type, ["active", "passive"].filter(v => v !== type)));
      }
      return q;
    },
    subjunctive_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const subjData = [
        { correct: "If I were you, I would apologize.", incorrect: "If I was you, I would apologize.", rule: "subjunctive 'were' after 'if' for unreal conditions" },
        { correct: "I wish she were here.", incorrect: "I wish she was here.", rule: "subjunctive 'were' after 'wish'" },
        { correct: "The teacher insisted that he study harder.", incorrect: "The teacher insisted that he studies harder.", rule: "base form after verbs of demand/suggestion" },
        { correct: "It is essential that she be present.", incorrect: "It is essential that she is present.", rule: "base form after 'it is essential that'" },
        { correct: "If he were taller, he could reach the shelf.", incorrect: "If he was taller, he could reach the shelf.", rule: "subjunctive 'were' for hypothetical" },
        { correct: "I suggest that he take the early train.", incorrect: "I suggest that he takes the early train.", rule: "base form after 'suggest'" },
        { correct: "If it were possible, I would travel the world.", incorrect: "If it was possible, I would travel the world.", rule: "subjunctive 'were' for wishes" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(subjData, rng);
        q.push(createMCQ("complex_grammar_g8", "subjunctive_g8",
          "Which sentence uses the SUBJUNCTIVE mood correctly?", data.correct,
          [data.incorrect, "If I am you, I would apologize.", "If I be you, I would apologize."]));
      }
      return q;
    },
    voice_mood_shifts_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const shiftData = [
        { inconsistent: "She made the cake, and the dishes were washed by her.", consistent: "She made the cake and washed the dishes.", error: "voice shift (active to passive)" },
        { inconsistent: "The report was written by the student, and she presented it.", consistent: "The student wrote the report and presented it.", error: "voice shift (passive to active)" },
        { inconsistent: "Study for the test, and you should review your notes.", consistent: "Study for the test and review your notes.", error: "mood shift (imperative to indicative)" },
        { inconsistent: "If I were rich, I will buy a mansion.", consistent: "If I were rich, I would buy a mansion.", error: "mood shift (subjunctive to indicative)" },
        { inconsistent: "He ran the race and was awarded a medal by the judges.", consistent: "He ran the race and the judges awarded him a medal.", error: "voice shift (active to passive)" },
        { inconsistent: "Please sit down, and you should be quiet.", consistent: "Please sit down and be quiet.", error: "mood shift (imperative to indicative)" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(shiftData, rng);
        const askWhich = rng() > 0.5;
        if (askWhich) {
          q.push(createMCQ("complex_grammar_g8", "voice_mood_shifts_g8",
            "Which sentence has an INCONSISTENT voice or mood shift?", data.inconsistent,
            [data.consistent, "She made the cake and washed the dishes.", "They ran and played outside."]));
        } else {
          q.push(createMCQ("complex_grammar_g8", "voice_mood_shifts_g8",
            `What error is in: "${data.inconsistent}"?`, data.error,
            ["voice shift (active to passive)", "mood shift (imperative to indicative)", "mood shift (subjunctive to indicative)", "voice shift (passive to active)"].filter(e => e !== data.error).slice(0, 3)));
        }
      }
      return q;
    },
    verbals_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const verbalData = [
        { sentence: "To win is her goal.", verbal: "To win", type: "infinitive used as noun" },
        { sentence: "Swimming is great exercise.", verbal: "Swimming", type: "gerund" },
        { sentence: "The broken vase lay on the floor.", verbal: "broken", type: "participle" },
        { sentence: "She wants to leave early.", verbal: "to leave early", type: "infinitive" },
        { sentence: "Reading novels is her hobby.", verbal: "Reading novels", type: "gerund" },
        { sentence: "The howling wind kept us awake.", verbal: "howling", type: "participle" },
        { sentence: "He decided to study medicine.", verbal: "to study medicine", type: "infinitive" },
        { sentence: "She enjoys painting landscapes.", verbal: "painting landscapes", type: "gerund" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(verbalData, rng);
        q.push(createTyping("complex_grammar_g8", "verbals_g8_typing",
          `In "${data.sentence}", "${data.verbal}" is a ___?`, data.type));
      }
      return q;
    },
    participial_modifiers_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const partData = [
        { dangling: "Singing loudly, the street seemed empty.", correct: "Singing loudly, she walked down the street." },
        { dangling: "Exhausted from the race, the bench looked inviting.", correct: "Exhausted from the race, the runner sat down." },
        { dangling: "Having finished the exam, the room was empty.", correct: "Having finished the exam, the students left." },
        { dangling: "Amazed by the view, the camera started clicking.", correct: "Amazed by the view, she took a photograph." },
        { dangling: "Walking through the park, the flowers were beautiful.", correct: "Walking through the park, I noticed the flowers." },
        { dangling: "Covered in snow, the day was perfect.", correct: "Covered in snow, the children built a snowman." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(partData, rng);
        q.push(createTyping("complex_grammar_g8", "participial_modifiers_g8_typing",
          `Correct this dangling modifier: "${data.dangling}"`, data.correct));
      }
      return q;
    },
    absolute_phrases_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const phraseData = [
        { sentence: "His homework finished, he went to bed.", absolute: "His homework finished" },
        { sentence: "The storm having passed, we ventured outside.", absolute: "The storm having passed" },
        { sentence: "All things considered, she made a wise choice.", absolute: "All things considered" },
        { sentence: "Weather permitting, we will have a picnic.", absolute: "Weather permitting" },
        { sentence: "Her voice trembling, she began her speech.", absolute: "Her voice trembling" },
        { sentence: "The sun having set, we lit the campfire.", absolute: "The sun having set" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(phraseData, rng);
        q.push(createTyping("complex_grammar_g8", "absolute_phrases_g8_typing",
          `Identify the absolute phrase in: "${data.sentence}"`, data.absolute));
      }
      return q;
    },
    active_passive_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const voiceData = [
        { active: "The scientist discovered a new element.", passive: "A new element was discovered by the scientist." },
        { active: "The chef prepared a delicious meal.", passive: "A delicious meal was prepared by the chef." },
        { active: "The committee approved the proposal.", passive: "The proposal was approved by the committee." },
        { active: "The dog chased the cat.", passive: "The cat was chased by the dog." },
        { active: "She wrote the report.", passive: "The report was written by her." },
        { active: "The storm destroyed several buildings.", passive: "Several buildings were destroyed by the storm." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(voiceData, rng);
        const toPassive = rng() > 0.5;
        if (toPassive) {
          q.push(createTyping("complex_grammar_g8", "active_passive_g8_typing",
            `Convert to PASSIVE: "${data.active}"`, data.passive));
        } else {
          q.push(createTyping("complex_grammar_g8", "active_passive_g8_typing",
            `Convert to ACTIVE: "${data.passive}"`, data.active));
        }
      }
      return q;
    },
    subjunctive_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const subjData = [
        { correct: "If I were you, I would apologize.", incorrect: "If I was you, I would apologize." },
        { correct: "I wish she were here.", incorrect: "I wish she was here." },
        { correct: "The teacher insisted that he study harder.", incorrect: "The teacher insisted that he studies harder." },
        { correct: "It is essential that she be present.", incorrect: "It is essential that she is present." },
        { correct: "If he were taller, he could reach.", incorrect: "If he was taller, he could reach." },
        { correct: "I suggest that he take the train.", incorrect: "I suggest that he takes the train." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(subjData, rng);
        q.push(createTyping("complex_grammar_g8", "subjunctive_g8_typing",
          `Correct the mood error: "${data.incorrect}"`, data.correct));
      }
      return q;
    },
    voice_mood_shifts_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const shiftData = [
        { inconsistent: "She made the cake, and the dishes were washed by her.", consistent: "She made the cake and washed the dishes." },
        { inconsistent: "The report was written by the student, and she presented it.", consistent: "The student wrote the report and presented it." },
        { inconsistent: "Study for the test, and you should review your notes.", consistent: "Study for the test and review your notes." },
        { inconsistent: "If I were rich, I will buy a mansion.", consistent: "If I were rich, I would buy a mansion." },
        { inconsistent: "He ran the race and was awarded a medal.", consistent: "He ran the race and the judges awarded him a medal." },
        { inconsistent: "Please sit down, and you should be quiet.", consistent: "Please sit down and be quiet." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(shiftData, rng);
        q.push(createTyping("complex_grammar_g8", "voice_mood_shifts_g8_typing",
          `Fix the shift: "${data.inconsistent}"`, data.consistent));
      }
      return q;
    },
  },
  writing_g8: {
    argumentative_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const argData = [
        { question: "What is the purpose of a CLAIM in an argumentative essay?", answer: "to state the writer's main position", wrong: ["to provide background information", "to list counterarguments", "to summarize the story"] },
        { question: "What is a COUNTERCLAIM?", answer: "an opposing argument that the writer addresses", wrong: ["a supporting detail", "the thesis statement", "the conclusion"] },
        { question: "Which provides the STRONGEST evidence in an argument?", answer: "a statistic from a reliable study", wrong: ["a personal opinion", "an emotional appeal", "a popular saying"] },
        { question: "What should a REBUTTAL do?", answer: "respond to and refute the counterclaim", wrong: ["repeat the thesis", "introduce a new topic", "end the essay"] },
        { question: "Where does the THESIS typically appear?", answer: "at the end of the introduction paragraph", wrong: ["in the conclusion", "in the middle of the essay", "in the title"] },
        { question: "What is the purpose of a TRANSITION in argumentative writing?", answer: "to connect ideas and guide the reader", wrong: ["to introduce new evidence", "to state the claim", "to summarize the essay"] },
        { question: "Which is an example of ETHOS (ethical appeal)?", answer: "citing a respected expert in the field", wrong: ["using emotional language", "presenting statistics", "telling a personal story"] },
        { question: "Which is an example of LOGOS (logical appeal)?", answer: "presenting data and logical reasoning", wrong: ["sharing a sad story", "using vivid imagery", "quoting a celebrity"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(argData, rng);
          q.push(createMCQ("writing_g8", "argumentative_g8", data.question, data.answer, data.wrong));
        } else {
          const data = pick(argData, rng);
          q.push(createTyping("writing_g8", "argumentative_g8", data.question, data.answer));
        }
      }
      return q;
    },
    informational_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const infoData = [
        { question: "The PRIMARY purpose of informational writing is to:", answer: "explain or inform the reader", wrong: ["entertain with a story", "persuade the reader to agree", "express personal feelings"] },
        { question: "Which text structure presents events in time order?", answer: "chronological order", wrong: ["cause and effect", "compare and contrast", "problem and solution"] },
        { question: "What is a TOPIC SENTENCE?", answer: "the main idea of a paragraph", wrong: ["the first sentence of any essay", "the thesis statement", "a concluding thought"] },
        { question: "Which is a feature of INFORMATIONAL writing?", answer: "headings and subheadings to organize information", wrong: ["dialogue between characters", "rhyme and meter", "a narrative arc"] },
        { question: "What does 'synthesizing sources' mean?", answer: "combining information from multiple sources into a unified explanation", wrong: ["copying from one source", "paraphrasing a single author", "writing a bibliography"] },
        { question: "Which is an example of a PRIMARY source?", answer: "a diary entry from a historical figure", wrong: ["a textbook summary", "a Wikipedia article", "a documentary film"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(infoData, rng);
          q.push(createMCQ("writing_g8", "informational_g8", data.question, data.answer, data.wrong));
        } else {
          const data = pick(infoData, rng);
          q.push(createTyping("writing_g8", "informational_g8", data.question, data.answer));
        }
      }
      return q;
    },
    narrative_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const narrData = [
        { question: "Which element is MOST important in narrative writing?", answer: "plot with a beginning, conflict, and resolution", wrong: ["a clear thesis statement", "factual data and evidence", "counterarguments"] },
        { question: "What is the CLIMAX of a story?", answer: "the turning point or most intense moment", wrong: ["the beginning", "the conclusion", "the setting description"] },
        { question: "What does PACING refer to in narrative writing?", answer: "how quickly or slowly events unfold", wrong: ["the number of characters", "the length of paragraphs", "the font size"] },
        { question: "Which technique develops a character's personality?", answer: "showing their actions, thoughts, and dialogue", wrong: ["listing their physical features only", "stating their age", "describing the weather"] },
        { question: "What is FORESHADOWING?", answer: "hints about events that will happen later in the story", wrong: ["a flashback to the past", "the moral of the story", "the setting description"] },
        { question: "What is the purpose of DIALOGUE in narrative writing?", answer: "to reveal character and advance the plot", wrong: ["to fill space", "to list facts", "to state the thesis"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(narrData, rng);
          q.push(createMCQ("writing_g8", "narrative_g8", data.question, data.answer, data.wrong));
        } else {
          const data = pick(narrData, rng);
          q.push(createTyping("writing_g8", "narrative_g8", data.question, data.answer));
        }
      }
      return q;
    },
    report_story_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const compData = [
        { question: "Which feature belongs to a REPORT, not a story?", answer: "topic sentences with factual evidence", wrong: ["dialogue between characters", "a narrative arc with rising action", "a first-person narrator"] },
        { question: "Which uses OBJECTIVE language?", answer: "The experiment yielded conclusive results.", wrong: ["I felt the experiment was amazing!", "The incredible experiment blew my mind.", "Everyone loved the experiment."] },
        { question: "A report typically uses which point of view?", answer: "third person (he, she, it, they)", wrong: ["first person (I, we)", "second person (you)", "mixed perspectives"] },
        { question: "Which organizational pattern is most common in reports?", answer: "logical categories with headings", wrong: ["chronological narrative", "stream of consciousness", "flashbacks"] },
        { question: "What distinguishes a story's CONCLUSION from a report's?", answer: "a story resolves the conflict; a report summarizes findings", wrong: ["they are identical", "reports have no conclusion", "stories never end"] },
        { question: "Which sentence belongs in a STORY, not a report?", answer: "'She felt her heart racing as she opened the door.'", wrong: ["'The data indicates a 15% increase.'", "'Three factors contributed to the outcome.'", "'The population grew steadily from 2010 to 2020.'"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(compData, rng);
          q.push(createMCQ("writing_g8", "report_story_g8", data.question, data.answer, data.wrong));
        } else {
          const data = pick(compData, rng);
          q.push(createTyping("writing_g8", "report_story_g8", data.question, data.answer));
        }
      }
      return q;
    },
    argumentative_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const argData = [
        { question: "What is the purpose of a CLAIM in an argumentative essay?", answer: "to state the writer's main position", wrong: ["to provide background information", "to list counterarguments", "to summarize the story"] },
        { question: "What is a COUNTERCLAIM?", answer: "an opposing argument that the writer addresses", wrong: ["a supporting detail", "the thesis statement", "the conclusion"] },
        { question: "Which provides the STRONGEST evidence in an argument?", answer: "a statistic from a reliable study", wrong: ["a personal opinion", "an emotional appeal", "a popular saying"] },
        { question: "What should a REBUTTAL do?", answer: "respond to and refute the counterclaim", wrong: ["repeat the thesis", "introduce a new topic", "end the essay"] },
        { question: "Where does the THESIS typically appear?", answer: "at the end of the introduction paragraph", wrong: ["in the conclusion", "in the middle of the essay", "in the title"] },
        { question: "What is the purpose of a TRANSITION in argumentative writing?", answer: "to connect ideas and guide the reader", wrong: ["to introduce new evidence", "to state the claim", "to summarize the essay"] },
        { question: "Which is an example of ETHOS (ethical appeal)?", answer: "citing a respected expert in the field", wrong: ["using emotional language", "presenting statistics", "telling a personal story"] },
        { question: "Which is an example of LOGOS (logical appeal)?", answer: "presenting data and logical reasoning", wrong: ["sharing a sad story", "using vivid imagery", "quoting a celebrity"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(argData, rng);
        q.push(createMCQ("writing_g8", "argumentative_g8", data.question, data.answer, data.wrong));
      }
      return q;
    },
    informational_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const infoData = [
        { question: "The main purpose of INFORMATIONAL writing is to:", answer: "explain or provide facts about a topic", wrong: ["tell a personal story", "convince the reader", "entertain with humor"] },
        { question: "What is a TOPIC SENTENCE?", answer: "a sentence stating the main idea of a paragraph", wrong: ["the first sentence of an essay", "a transition statement", "a concluding remark"] },
        { question: "In informational writing, SUPPORTING DETAILS should be:", answer: "relevant, specific, and fact-based", wrong: ["emotional and personal", "brief and vague", "surprising and entertaining"] },
        { question: "What is the purpose of HEADINGS in informational text?", answer: "to organize content and guide the reader", wrong: ["to decorate the page", "to replace topic sentences", "to list key terms"] },
        { question: "Which is OBJECTIVE language?", answer: "'The temperature dropped to freezing.'", wrong: ["'I loved the cold!'", "'It was miserably cold.'", "'Everyone hated the freezing weather.'"] },
        { question: "What should an INTRODUCTION do in informational writing?", answer: "hook the reader and present the topic", wrong: ["provide all details", "state the conclusion", "list sources"] },
        { question: "What is the purpose of a CONCLUSION in informational writing?", answer: "to summarize key points and reinforce the topic", wrong: ["to introduce new ideas", "to show personal opinion", "to list references"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(infoData, rng);
        q.push(createMCQ("writing_g8", "informational_g8", data.question, data.answer, data.wrong));
      }
      return q;
    },
    narrative_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const narData = [
        { question: "What is the EXPOSITION in a narrative?", answer: "background information about characters and setting", wrong: ["the turning point", "the climax", "the resolution"] },
        { question: "What is RISING ACTION?", answer: "events that build tension toward the climax", wrong: ["the introduction", "the ending", "the dialogue"] },
        { question: "Where is the CLIMAX of a story?", answer: "the moment of highest tension or the turning point", wrong: ["the beginning", "the middle", "the ending"] },
        { question: "What does FALLING ACTION do?", answer: "shows consequences after the climax", wrong: ["introduces the conflict", "explains the setting", "introduces characters"] },
        { question: "What is RESOLUTION?", answer: "the conclusion where conflicts are resolved", wrong: ["the main problem", "the turning point", "the setting"] },
        { question: "FLASHBACK is a narrative technique that:", answer: "interrupts the story to show something from the past", wrong: ["skips ahead in time", "slows down action", "introduces a new character"] },
        { question: "What is FORESHADOWING?", answer: "hints about events that will happen later", wrong: ["recalling past events", "describing the setting", "introducing characters"] },
        { question: "POINT OF VIEW in a narrative refers to:", answer: "the perspective from which the story is told", wrong: ["the author's opinion", "the setting of the story", "the main character's goal"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(narData, rng);
        q.push(createMCQ("writing_g8", "narrative_g8", data.question, data.answer, data.wrong));
      }
      return q;
    },
    report_story_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const compData = [
        { question: "Which feature belongs to a REPORT, not a story?", answer: "topic sentences with factual evidence", wrong: ["dialogue between characters", "a narrative arc with rising action", "a first-person narrator"] },
        { question: "Which uses OBJECTIVE language?", answer: "The experiment yielded conclusive results.", wrong: ["I felt the experiment was amazing!", "The incredible experiment blew my mind.", "Everyone loved the experiment."] },
        { question: "A report typically uses which point of view?", answer: "third person (he, she, it, they)", wrong: ["first person (I, we)", "second person (you)", "mixed perspectives"] },
        { question: "Which organizational pattern is most common in reports?", answer: "logical categories with headings", wrong: ["chronological narrative", "stream of consciousness", "flashbacks"] },
        { question: "What distinguishes a story's CONCLUSION from a report's?", answer: "a story resolves the conflict; a report summarizes findings", wrong: ["they are identical", "reports have no conclusion", "stories never end"] },
        { question: "Which sentence belongs in a STORY, not a report?", answer: "'She felt her heart racing as she opened the door.'", wrong: ["'The data indicates a 15% increase.'", "'Three factors contributed to the outcome.'", "'The population grew steadily from 2010 to 2020.'"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(compData, rng);
        q.push(createMCQ("writing_g8", "report_story_g8", data.question, data.answer, data.wrong));
      }
      return q;
    },
    argumentative_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const argData = [
        { question: "What is the purpose of a CLAIM in argumentative writing?", answer: "to state the writer's main position" },
        { question: "What is a COUNTERCLAIM?", answer: "an opposing argument the writer addresses" },
        { question: "What is a REBUTTAL in argumentative writing?", answer: "a response that refutes the counterclaim" },
        { question: "Where does the THESIS typically appear?", answer: "at the end of the introduction" },
        { question: "Give an example of ETHOS (ethical appeal).", answer: "citing a respected expert" },
        { question: "Give an example of LOGOS (logical appeal).", answer: "presenting data and reasoning" },
        { question: "What is PATHOS in persuasive writing?", answer: "emotional appeal to the audience" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(argData, rng);
        q.push(createTyping("writing_g8", "argumentative_g8_typing",
          data.question, data.answer));
      }
      return q;
    },
    informational_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const infData = [
        { question: "What is the main function of a TOPIC SENTENCE?", answer: "to introduce the main idea of a paragraph" },
        { question: "What should a THESIS STATEMENT in informational writing do?", answer: "clearly state the central topic" },
        { question: "What is the difference between PRIMARY and SECONDARY sources?", answer: "primary are firsthand, secondary are about primary sources" },
        { question: "What does SYNTHESIS mean in research writing?", answer: "combining multiple sources into a coherent argument" },
        { question: "What is PARAPHRASING?", answer: "restating information in your own words" },
        { question: "What is SUMMARIZATION?", answer: "condensing main ideas into a brief overview" },
        { question: "What are SUPPORTING DETAILS?", answer: "examples and evidence that back up the main idea" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(infData, rng);
        q.push(createTyping("writing_g8", "informational_g8_typing",
          data.question, data.answer));
      }
      return q;
    },
    narrative_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const narData = [
        { question: "What is POINT OF VIEW in narrative writing?", answer: "the perspective from which the story is told" },
        { question: "What is CONFLICT in a narrative?", answer: "the central problem or tension driving the story" },
        { question: "What is CLIMAX in a narrative?", answer: "the turning point or most intense moment" },
        { question: "What is RESOLUTION?", answer: "how the conflict is settled at the end" },
        { question: "What is DIALOGUE in narrative?", answer: "conversation between characters" },
        { question: "What is PACING in storytelling?", answer: "the speed at which events unfold" },
        { question: "What is a FLASHBACK in narrative?", answer: "returning to an earlier event in the story" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(narData, rng);
        q.push(createTyping("writing_g8", "narrative_g8_typing",
          data.question, data.answer));
      }
      return q;
    },
    report_story_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const repData = [
        { question: "What is the purpose of a REPORT?", answer: "to present factual information on a topic" },
        { question: "What is an INTRODUCTION in report writing?", answer: "the section that previews the main topic" },
        { question: "What should the BODY of a report contain?", answer: "detailed information organized by subtopic" },
        { question: "What is the function of a CONCLUSION in a report?", answer: "to summarize key findings" },
        { question: "What is CREDIBILITY in report writing?", answer: "using reliable sources and evidence" },
        { question: "What is OBJECTIVITY in report writing?", answer: "presenting facts without personal bias" },
        { question: "What is CITATION in academic reports?", answer: "acknowledging the sources of information" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(repData, rng);
        q.push(createTyping("writing_g8", "report_story_g8_typing",
          data.question, data.answer));
      }
      return q;
    },
  },
  literature_g8: {
    point_of_view_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const povData = [
        { text: "I walked into the room and saw my old friend.", pov: "first person", wrong: ["second person", "third person limited", "third person omniscient"] },
        { text: "You open the door and step into the darkness.", pov: "second person", wrong: ["first person", "third person limited", "third person omniscient"] },
        { text: "She wondered if he would ever understand her feelings.", pov: "third person limited", wrong: ["first person", "second person", "third person omniscient"] },
        { text: "Sarah felt nervous. Meanwhile, across town, Jake was excited about his plan.", pov: "third person omniscient", wrong: ["first person", "second person", "third person limited"] },
        { text: "We decided to take the longer route through the forest.", pov: "first person", wrong: ["second person", "third person limited", "third person omniscient"] },
        { text: "He sat alone, thinking about his choices, unaware that she was watching.", pov: "third person omniscient", wrong: ["first person", "second person", "third person limited"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(povData, rng);
          q.push(createMCQ("literature_g8", "point_of_view_g8",
            `What point of view? "${data.text}"`, data.pov, data.wrong));
        } else {
          const data = pick(povData, rng);
          q.push(createTyping("literature_g8", "point_of_view_g8",
            `Identify the point of view: "${data.text}"`, data.pov));
        }
      }
      return q;
    },
    genres_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const genreData = [
        { description: "A story with supernatural creatures like vampires and werewolves.", genre: "horror/fantasy", wrong: ["realistic fiction", "biography", "historical fiction"] },
        { description: "A text that explains the life of a real person.", genre: "biography", wrong: ["fantasy", "science fiction", "mystery"] },
        { description: "A story set in the future with advanced technology.", genre: "science fiction", wrong: ["historical fiction", "mystery", "biography"] },
        { description: "A play written in verse about a hero's downfall.", genre: "tragedy", wrong: ["comedy", "mystery", "memoir"] },
        { description: "A story where the main character solves a crime.", genre: "mystery", wrong: ["romance", "fantasy", "biography"] },
        { description: "A personal account of the author's own life.", genre: "memoir/autobiography", wrong: ["biography", "fiction", "fantasy"] },
        { description: "A story that uses humor and ends happily.", genre: "comedy", wrong: ["tragedy", "horror", "mystery"] },
        { description: "A story set during a real historical period.", genre: "historical fiction", wrong: ["science fiction", "fantasy", "mystery"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(genreData, rng);
          q.push(createMCQ("literature_g8", "genres_g8",
            `What genre? "${data.description}"`, data.genre, data.wrong));
        } else {
          const data = pick(genreData, rng);
          q.push(createTyping("literature_g8", "genres_g8",
            `Name the genre: "${data.description}"`, data.genre));
        }
      }
      return q;
    },
    allusion_irony_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const litData = [
        { text: "He is a real Sherlock Holmes when it comes to solving puzzles.", device: "allusion", wrong: ["verbal irony", "situational irony", "satire"] },
        { text: "She said 'What wonderful weather!' during a thunderstorm.", device: "verbal irony", wrong: ["allusion", "situational irony", "satire"] },
        { text: "A fire station burns down.", device: "situational irony", wrong: ["verbal irony", "allusion", "satire"] },
        { text: "He's a regular Romeo when it comes to romance.", device: "allusion", wrong: ["verbal irony", "situational irony", "satire"] },
        { text: "The pilot had a fear of heights.", device: "situational irony", wrong: ["verbal irony", "allusion", "dramatic irony"] },
        { text: "A news article exaggerates politicians' behavior to mock them.", device: "satire", wrong: ["allusion", "verbal irony", "situational irony"] },
        { text: "She opened her Pandora's box of old memories.", device: "allusion", wrong: ["verbal irony", "satire", "situational irony"] },
        { text: "The audience knows the killer is behind the door, but the character does not.", device: "dramatic irony", wrong: ["verbal irony", "situational irony", "allusion"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(litData, rng);
          q.push(createMCQ("literature_g8", "allusion_irony_g8",
            `Identify the literary device: "${data.text}"`, data.device, data.wrong));
        } else {
          const data = pick(litData, rng);
          q.push(createTyping("literature_g8", "allusion_irony_g8",
            `What device is used? "${data.text}"`, data.device));
        }
      }
      return q;
    },
    theme_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const themeData = [
        { question: "The THEME of a story is best described as:", answer: "the central message or life lesson", wrong: ["the plot summary", "the setting of the story", "the main character's name"] },
        { question: "Which is a THEME (not a topic)?", answer: "True friendship requires sacrifice.", wrong: ["friendship", "the beach", "a dog"] },
        { question: "How is theme DIFFERENT from the topic?", answer: "theme is the message about the topic; topic is just the subject", wrong: ["they are the same thing", "topic is more specific", "theme is stated directly"] },
        { question: "In a story where a character overcomes fear, a likely theme is:", answer: "courage means acting despite being afraid", wrong: ["fear is always bad", "everyone is afraid", "fear makes you weak"] },
        { question: "Where is the theme usually STATED in a text?", answer: "it is usually implied, not directly stated", wrong: ["in the title", "in the first sentence", "in the last paragraph"] },
        { question: "Which detail would BEST support a theme about perseverance?", answer: "a character failing multiple times but continuing to try", wrong: ["a beautiful sunset", "a character eating lunch", "a description of a house"] },
        { question: "A story about a character who lies and loses friends likely has the theme:", answer: "honesty builds trust and relationships", wrong: ["lying is sometimes necessary", "friends are not important", "everyone lies"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(themeData, rng);
          q.push(createMCQ("literature_g8", "theme_g8", data.question, data.answer, data.wrong));
        } else {
          const data = pick(themeData, rng);
          q.push(createTyping("literature_g8", "theme_g8", data.question, data.answer));
        }
      }
      return q;
    },
    point_of_view_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const povData = [
        { text: "I walked into the room and saw my old friend.", pov: "first person", wrong: ["second person", "third person limited", "third person omniscient"] },
        { text: "You open the door and step into the darkness.", pov: "second person", wrong: ["first person", "third person limited", "third person omniscient"] },
        { text: "She wondered if he would ever understand her feelings.", pov: "third person limited", wrong: ["first person", "second person", "third person omniscient"] },
        { text: "Sarah felt nervous. Meanwhile, across town, Jake was excited about his plan.", pov: "third person omniscient", wrong: ["first person", "second person", "third person limited"] },
        { text: "We decided to take the longer route through the forest.", pov: "first person", wrong: ["second person", "third person limited", "third person omniscient"] },
        { text: "He sat alone, thinking about his choices, unaware that she was watching.", pov: "third person omniscient", wrong: ["first person", "second person", "third person limited"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(povData, rng);
        q.push(createMCQ("literature_g8", "point_of_view_g8",
          `What point of view? "${data.text}"`, data.pov, data.wrong));
      }
      return q;
    },
    genres_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const genreData = [
        { description: "A story with supernatural creatures like vampires and werewolves.", genre: "horror/fantasy", wrong: ["realistic fiction", "biography", "historical fiction"] },
        { description: "A text that explains the life of a real person.", genre: "biography", wrong: ["fantasy", "science fiction", "mystery"] },
        { description: "A story set in the future with advanced technology.", genre: "science fiction", wrong: ["historical fiction", "mystery", "biography"] },
        { description: "A play written in verse about a hero's downfall.", genre: "tragedy", wrong: ["comedy", "mystery", "memoir"] },
        { description: "A story where the main character solves a crime.", genre: "mystery", wrong: ["romance", "fantasy", "biography"] },
        { description: "A personal account of the author's own life.", genre: "memoir/autobiography", wrong: ["biography", "fiction", "fantasy"] },
        { description: "A story that uses humor and ends happily.", genre: "comedy", wrong: ["tragedy", "horror", "mystery"] },
        { description: "A story set during a real historical period.", genre: "historical fiction", wrong: ["science fiction", "fantasy", "mystery"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(genreData, rng);
        q.push(createMCQ("literature_g8", "genres_g8",
          `What genre? "${data.description}"`, data.genre, data.wrong));
      }
      return q;
    },
    allusion_irony_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const litData = [
        { text: "He is a real Sherlock Holmes when it comes to solving puzzles.", device: "allusion", wrong: ["verbal irony", "situational irony", "satire"] },
        { text: "She said 'What wonderful weather!' during a thunderstorm.", device: "verbal irony", wrong: ["allusion", "situational irony", "satire"] },
        { text: "A fire station burns down.", device: "situational irony", wrong: ["verbal irony", "allusion", "satire"] },
        { text: "He's a regular Romeo when it comes to romance.", device: "allusion", wrong: ["verbal irony", "situational irony", "satire"] },
        { text: "The pilot had a fear of heights.", device: "situational irony", wrong: ["verbal irony", "allusion", "dramatic irony"] },
        { text: "A news article exaggerates politicians' behavior to mock them.", device: "satire", wrong: ["allusion", "verbal irony", "situational irony"] },
        { text: "She opened her Pandora's box of old memories.", device: "allusion", wrong: ["verbal irony", "satire", "situational irony"] },
        { text: "The audience knows the killer is behind the door, but the character does not.", device: "dramatic irony", wrong: ["verbal irony", "situational irony", "allusion"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(litData, rng);
        q.push(createMCQ("literature_g8", "allusion_irony_g8",
          `Identify the literary device: "${data.text}"`, data.device, data.wrong));
      }
      return q;
    },
    theme_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const themeData = [
        { question: "The THEME of a story is best described as:", answer: "the central message or life lesson", wrong: ["the plot summary", "the setting of the story", "the main character's name"] },
        { question: "Which is a THEME (not a topic)?", answer: "True friendship requires sacrifice.", wrong: ["friendship", "the beach", "a dog"] },
        { question: "How is theme DIFFERENT from the topic?", answer: "theme is the message about the topic; topic is just the subject", wrong: ["they are the same thing", "topic is more specific", "theme is stated directly"] },
        { question: "In a story where a character overcomes fear, a likely theme is:", answer: "courage means acting despite being afraid", wrong: ["fear is always bad", "everyone is afraid", "fear makes you weak"] },
        { question: "Where is the theme usually STATED in a text?", answer: "it is usually implied, not directly stated", wrong: ["in the title", "in the first sentence", "in the last paragraph"] },
        { question: "Which detail would BEST support a theme about perseverance?", answer: "a character failing multiple times but continuing to try", wrong: ["a beautiful sunset", "a character eating lunch", "a description of a house"] },
        { question: "A story about a character who lies and loses friends likely has the theme:", answer: "honesty builds trust and relationships", wrong: ["lying is sometimes necessary", "friends are not important", "everyone lies"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(themeData, rng);
        q.push(createMCQ("literature_g8", "theme_g8", data.question, data.answer, data.wrong));
      }
      return q;
    },
    point_of_view_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const povData = [
        { text: "I walked into the room and saw my old friend.", pov: "first person" },
        { text: "You open the door and step into the darkness.", pov: "second person" },
        { text: "She wondered if he would ever understand her feelings.", pov: "third person limited" },
        { text: "Sarah felt nervous. Meanwhile, across town, Jake was excited about his plan.", pov: "third person omniscient" },
        { text: "We decided to take the longer route through the forest.", pov: "first person" },
        { text: "He sat alone, thinking about his choices, unaware that she was watching.", pov: "third person omniscient" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(povData, rng);
        q.push(createTyping("literature_g8", "point_of_view_g8_typing",
          `Identify the point of view: "${data.text}"`, data.pov));
      }
      return q;
    },
    genres_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const genreData = [
        { description: "A story with supernatural creatures like vampires and werewolves.", genre: "horror/fantasy" },
        { description: "A text that explains the life of a real person.", genre: "biography" },
        { description: "A story set in the future with advanced technology.", genre: "science fiction" },
        { description: "A play written in verse about a hero's downfall.", genre: "tragedy" },
        { description: "A story where the main character solves a crime.", genre: "mystery" },
        { description: "A personal account of the author's own life.", genre: "memoir/autobiography" },
        { description: "A story that uses humor and ends happily.", genre: "comedy" },
        { description: "A story set during a real historical period.", genre: "historical fiction" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(genreData, rng);
        q.push(createTyping("literature_g8", "genres_g8_typing",
          `Name the genre: "${data.description}"`, data.genre));
      }
      return q;
    },
    allusion_irony_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const litData = [
        { text: "He is a real Sherlock Holmes when it comes to solving puzzles.", device: "allusion" },
        { text: "She said 'What wonderful weather!' during a thunderstorm.", device: "verbal irony" },
        { text: "A fire station burns down.", device: "situational irony" },
        { text: "He's a regular Romeo when it comes to romance.", device: "allusion" },
        { text: "The pilot had a fear of heights.", device: "situational irony" },
        { text: "A news article exaggerates politicians' behavior to mock them.", device: "satire" },
        { text: "She opened her Pandora's box of old memories.", device: "allusion" },
        { text: "The audience knows the killer is behind the door, but the character does not.", device: "dramatic irony" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(litData, rng);
        q.push(createTyping("literature_g8", "allusion_irony_g8_typing",
          `What device is used? "${data.text}"`, data.device));
      }
      return q;
    },
    theme_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const themeData = [
        { question: "The THEME of a story is best described as:", answer: "the central message or life lesson" },
        { question: "Which is a THEME (not a topic)?", answer: "True friendship requires sacrifice." },
        { question: "How is theme DIFFERENT from the topic?", answer: "theme is the message about the topic; topic is just the subject" },
        { question: "In a story where a character overcomes fear, a likely theme is:", answer: "courage means acting despite being afraid" },
        { question: "Where is the theme usually STATED in a text?", answer: "it is usually implied, not directly stated" },
        { question: "Which detail would BEST support a theme about perseverance?", answer: "a character failing multiple times but continuing to try" },
        { question: "A story about a character who lies and loses friends likely has the theme:", answer: "honesty builds trust and relationships" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(themeData, rng);
        q.push(createTyping("literature_g8", "theme_g8_typing", data.question, data.answer));
      }
      return q;
    },
  },
  style_g8: {
    formal_register_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const regData = [
        { formal: "The committee has approved the proposal.", informal: "They said yes to the idea.", wrong: ["The committee was like, yeah, sure.", "Yep, the plan got approved.", "They totally said yes."] },
        { formal: "I would like to request a meeting.", informal: "Can we meet up?", wrong: ["Hey, let's chat.", "Wanna hang?", "We should totally meet."] },
        { formal: "The results indicate a significant improvement.", informal: "Things got way better.", wrong: ["Stuff improved a ton.", "It's like, so much better now.", "The numbers are crazy good."] },
        { formal: "Furthermore, the evidence supports this conclusion.", informal: "Also, the proof backs this up.", wrong: ["Plus, it totally checks out.", "And yeah, it's true.", "So basically it works."] },
        { formal: "We respectfully disagree with the findings.", informal: "We don't agree with that.", wrong: ["That's totally wrong.", "Nah, we disagree.", "No way that's right."] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(regData, rng);
          q.push(createMCQ("style_g8", "formal_register_g8",
            "Which sentence uses FORMAL register?", data.formal, [data.informal, ...data.wrong.slice(0, 2)]));
        } else {
          const data = pick(regData, rng);
          q.push(createTyping("style_g8", "formal_register_g8",
            `Rewrite formally: "${data.informal}"`, data.formal));
        }
      }
      return q;
    },
    academic_vs_conv_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const acData = [
        { academic: "The data suggests a correlation between the variables.", conversational: "The numbers kind of match up.", wrong: ["It seems like they go together.", "The stats look the same.", "Stuff is related I guess."] },
        { academic: "The protagonist undergoes significant character development.", conversational: "The main character really changes a lot.", wrong: ["The guy totally transforms.", "He's like a different person.", "The character changes or whatever."] },
        { academic: "The author employs vivid imagery to convey the setting.", conversational: "The writer uses cool descriptions for the place.", wrong: ["The author paints a pretty picture.", "The writer makes you see stuff.", "Cool words describe the setting."] },
        { academic: "Research indicates that exercise improves cognitive function.", conversational: "Studies show working out helps your brain.", wrong: ["Exercise is good for thinking.", "Working out makes you smarter.", "Moving around helps your head."] },
        { academic: "The evidence substantiates the hypothesis.", conversational: "The proof backs up the guess.", wrong: ["The facts check out.", "It proves the idea.", "Everything matches up."] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(acData, rng);
          q.push(createMCQ("style_g8", "academic_vs_conv_g8",
            "Which phrase is more appropriate in ACADEMIC writing?", data.academic,
            [data.conversational, ...data.wrong.slice(0, 2)]));
        } else {
          const data = pick(acData, rng);
          q.push(createTyping("style_g8", "academic_vs_conv_g8",
            `Rewrite in academic style: "${data.conversational}"`, data.academic));
        }
      }
      return q;
    },
    domain_vocab_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const domainData = [
        { domain: "biology", term: "mitosis", general: "cell division", wrong: ["growth", "change", "split"] },
        { domain: "chemistry", term: "oxidation", general: "chemical reaction with oxygen", wrong: ["burning", "rusting", "melting"] },
        { domain: "literature", term: "protagonist", general: "main character", wrong: ["hero", "villain", "narrator"] },
        { domain: "mathematics", term: "coefficient", general: "the number multiplied by a variable", wrong: ["answer", "total", "equation"] },
        { domain: "history", term: "imperialism", general: "a policy of extending power over other nations", wrong: ["war", "trade", "exploration"] },
        { domain: "music", term: "crescendo", general: "gradually getting louder", wrong: ["rhythm", "melody", "tempo"] },
        { domain: "computer science", term: "algorithm", general: "a step-by-step procedure for solving a problem", wrong: ["a computer program", "a math equation", "a code language"] },
        { domain: "earth science", term: "erosion", general: "the gradual wearing away of land by natural forces", wrong: ["earthquake", "volcano", "flooding"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(domainData, rng);
          q.push(createMCQ("style_g8", "domain_vocab_g8",
            `In a ${data.domain} essay, which term is DOMAIN-SPECIFIC?`, data.term, data.wrong));
        } else {
          const data = pick(domainData, rng);
          q.push(createTyping("style_g8", "domain_vocab_g8",
            `Define the ${data.domain} term '${data.term}':`, data.general));
        }
      }
      return q;
    },
    formal_register_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const regData = [
        { formal: "The committee has approved the proposal.", informal: "They said yes to the idea.", wrong: ["The committee was like, yeah, sure.", "Yep, the plan got approved.", "They totally said yes."] },
        { formal: "I would like to request a meeting.", informal: "Can we meet up?", wrong: ["Hey, let's chat.", "Wanna hang?", "We should totally meet."] },
        { formal: "The results indicate a significant improvement.", informal: "Things got way better.", wrong: ["Stuff improved a ton.", "It's like, so much better now.", "The numbers are crazy good."] },
        { formal: "Furthermore, the evidence supports this conclusion.", informal: "Also, the proof backs this up.", wrong: ["Plus, it totally checks out.", "And yeah, it's true.", "So basically it works."] },
        { formal: "We respectfully disagree with the findings.", informal: "We don't agree with that.", wrong: ["That's totally wrong.", "Nah, we disagree.", "No way that's right."] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(regData, rng);
        q.push(createMCQ("style_g8", "formal_register_g8",
          "Which sentence uses FORMAL register?", data.formal, [data.informal, ...data.wrong.slice(0, 2)]));
      }
      return q;
    },
    academic_vs_conv_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const acData = [
        { academic: "The data suggests a correlation between the variables.", conversational: "The numbers kind of match up.", wrong: ["It seems like they go together.", "The stats look the same.", "Stuff is related I guess."] },
        { academic: "The protagonist undergoes significant character development.", conversational: "The main character really changes a lot.", wrong: ["The guy totally transforms.", "He's like a different person.", "The character changes or whatever."] },
        { academic: "The author employs vivid imagery to convey the setting.", conversational: "The writer uses cool descriptions for the place.", wrong: ["The author paints a pretty picture.", "The writer makes you see stuff.", "Cool words describe the setting."] },
        { academic: "Research indicates that exercise improves cognitive function.", conversational: "Studies show working out helps your brain.", wrong: ["Exercise is good for thinking.", "Working out makes you smarter.", "Moving around helps your head."] },
        { academic: "The evidence substantiates the hypothesis.", conversational: "The proof backs up the guess.", wrong: ["The facts check out.", "It proves the idea.", "Everything matches up."] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(acData, rng);
        q.push(createMCQ("style_g8", "academic_vs_conv_g8",
          "Which phrase is more appropriate in ACADEMIC writing?", data.academic,
          [data.conversational, ...data.wrong.slice(0, 2)]));
      }
      return q;
    },
    domain_vocab_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const domainData = [
        { domain: "biology", term: "mitosis", general: "cell division", wrong: ["growth", "change", "split"] },
        { domain: "chemistry", term: "oxidation", general: "chemical reaction with oxygen", wrong: ["burning", "rusting", "melting"] },
        { domain: "literature", term: "protagonist", general: "main character", wrong: ["hero", "villain", "narrator"] },
        { domain: "mathematics", term: "coefficient", general: "the number multiplied by a variable", wrong: ["answer", "total", "equation"] },
        { domain: "history", term: "imperialism", general: "a policy of extending power over other nations", wrong: ["war", "trade", "exploration"] },
        { domain: "music", term: "crescendo", general: "gradually getting louder", wrong: ["rhythm", "melody", "tempo"] },
        { domain: "computer science", term: "algorithm", general: "a step-by-step procedure for solving a problem", wrong: ["a computer program", "a math equation", "a code language"] },
        { domain: "earth science", term: "erosion", general: "the gradual wearing away of land by natural forces", wrong: ["earthquake", "volcano", "flooding"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(domainData, rng);
        q.push(createMCQ("style_g8", "domain_vocab_g8",
          `In a ${data.domain} essay, which term is DOMAIN-SPECIFIC?`, data.term, data.wrong));
      }
      return q;
    },
    formal_register_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const regData = [
        { formal: "The committee has approved the proposal.", informal: "They said yes to the idea." },
        { formal: "I would like to request a meeting.", informal: "Can we meet up?" },
        { formal: "The results indicate a significant improvement.", informal: "Things got way better." },
        { formal: "Furthermore, the evidence supports this conclusion.", informal: "Also, the proof backs this up." },
        { formal: "We respectfully disagree with the findings.", informal: "We don't agree with that." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(regData, rng);
        q.push(createTyping("style_g8", "formal_register_g8_typing",
          `Rewrite formally: "${data.informal}"`, data.formal));
      }
      return q;
    },
    academic_vs_conv_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const acData = [
        { academic: "The data suggests a correlation between the variables.", conversational: "The numbers kind of match up." },
        { academic: "The protagonist undergoes significant character development.", conversational: "The main character really changes a lot." },
        { academic: "The author employs vivid imagery to convey the setting.", conversational: "The writer uses cool descriptions for the place." },
        { academic: "Research indicates that exercise improves cognitive function.", conversational: "Studies show working out helps your brain." },
        { academic: "The evidence substantiates the hypothesis.", conversational: "The proof backs up the guess." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(acData, rng);
        q.push(createTyping("style_g8", "academic_vs_conv_g8_typing",
          `Rewrite in ACADEMIC style: "${data.conversational}"`, data.academic));
      }
      return q;
    },
    domain_vocab_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const domainData = [
        { domain: "biology", term: "mitosis", description: "the process of cell division" },
        { domain: "chemistry", term: "oxidation", description: "a chemical reaction involving oxygen" },
        { domain: "literature", term: "protagonist", description: "the main character of a story" },
        { domain: "mathematics", term: "coefficient", description: "the number multiplied by a variable" },
        { domain: "history", term: "imperialism", description: "a policy of extending power over other nations" },
        { domain: "music", term: "crescendo", description: "gradually getting louder" },
        { domain: "computer science", term: "algorithm", description: "a step-by-step procedure for solving a problem" },
        { domain: "earth science", term: "erosion", description: "the gradual wearing away of land" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(domainData, rng);
        q.push(createTyping("style_g8", "domain_vocab_g8_typing",
          `In ${data.domain}, what is the term for: ${data.description}?`, data.term));
      }
      return q;
    },
  },
  punctuation_g8: {
    ellipsis_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const ellData = [
        { question: "An ELLIPSIS (...) is used to indicate:", answer: "an omission or trailing thought", wrong: ["a strong exclamation", "the end of a sentence", "a question"] },
        { question: "Which uses an ellipsis CORRECTLY?", answer: "'I wonder if... never mind.'", wrong: ["'I wonder if. never mind.'", "'I wonder if, never mind.'", "'I wonder if; never mind.'"] },
        { question: "In quoting, an ellipsis shows that:", answer: "words have been left out from the original text", wrong: ["the quote is paraphrased", "the speaker paused", "the quote is a lie"] },
        { question: "'She looked at him and said, \"Well...\"' The ellipsis here suggests:", answer: "hesitation or an unfinished thought", wrong: ["anger", "excitement", "a complete thought"] },
        { question: "How many dots are in a standard ellipsis?", answer: "three", wrong: ["two", "four", "one"] },
        { question: "Which is the CORRECT way to write an ellipsis in formal writing?", answer: "three spaced periods: . . .", wrong: ["three dots with no spaces: ...", "four dots: ....", "two dots: .."] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(ellData, rng);
          q.push(createMCQ("punctuation_g8", "ellipsis_g8", data.question, data.answer, data.wrong));
        } else {
          const data = pick(ellData, rng);
          q.push(createTyping("punctuation_g8", "ellipsis_g8", data.question, data.answer));
        }
      }
      return q;
    },
    dashes_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const dashData = [
        { correct: "She had one goal\u2014to win.", incorrect: "She had one goal-to win.", rule: "em dash for emphasis before a dramatic element" },
        { correct: "The author\u2014known for his wit\u2014published a new book.", incorrect: "The author, known for his wit, published a new book.", rule: "em dashes for stronger parenthetical" },
        { correct: "She wanted three things\u2014honesty, loyalty, and respect.", incorrect: "She wanted three things: honesty, loyalty, and respect.", rule: "em dash to introduce a list with emphasis" },
        { correct: "The answer\u2014surprisingly\u2014was no.", incorrect: "The answer surprisingly was no.", rule: "em dashes around an interjection" },
        { correct: "He was determined\u2014nothing would stop him.", incorrect: "He was determined, nothing would stop him.", rule: "em dash to connect dramatic independent clauses" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(dashData, rng);
          q.push(createMCQ("punctuation_g8", "dashes_g8",
            "Which correctly uses an EM DASH?", data.correct,
            [data.incorrect, "She had one goal...to win.", "She had one goal; to win."]));
        } else {
          const data = pick(dashData, rng);
          q.push(createTyping("punctuation_g8", "dashes_g8",
            `What rule applies in: "${data.correct}"?`, data.rule));
        }
      }
      return q;
    },
    commas_complex_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const commaData = [
        { correct: "My teacher, Mr. Smith, is very kind.", wrong: ["My teacher Mr. Smith, is very kind.", "My teacher, Mr. Smith is very kind.", "My teacher Mr. Smith is very kind."] },
        { correct: "After the long, exhausting hike, we rested.", wrong: ["After the long exhausting hike we rested.", "After, the long exhausting hike, we rested.", "After the long, exhausting hike we rested."] },
        { correct: "The book, which was published in 1920, became a classic.", wrong: ["The book which was published in 1920 became a classic.", "The book, which was published in 1920 became a classic.", "The book which, was published in 1920, became a classic."] },
        { correct: "Yes, I believe that is correct.", wrong: ["Yes I believe that is correct.", "Yes I believe, that is correct.", "Yes, I believe, that is correct."] },
        { correct: "However, the results were inconclusive.", wrong: ["However the results were inconclusive.", "However the results, were inconclusive.", "However, the results, were inconclusive."] },
        { correct: "She visited Paris, France; London, England; and Rome, Italy.", wrong: ["She visited Paris France, London England, and Rome Italy.", "She visited Paris, France, London, England, and Rome, Italy.", "She visited Paris France; London England; and Rome Italy."] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(commaData, rng);
        q.push(createMCQ("punctuation_g8", "commas_complex_g8",
          "Which sentence uses commas CORRECTLY in a complex structure?", data.correct, data.wrong));
      }
      return q;
    },
    ellipsis_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const ellData = [
        { question: "An ELLIPSIS (...) is used to indicate:", answer: "an omission or trailing thought", wrong: ["a strong exclamation", "the end of a sentence", "a question"] },
        { question: "Which uses an ellipsis CORRECTLY?", answer: "'I wonder if... never mind.'", wrong: ["'I wonder if. never mind.'", "'I wonder if, never mind.'", "'I wonder if; never mind.'"] },
        { question: "In quoting, an ellipsis shows that:", answer: "words have been left out from the original text", wrong: ["the quote is paraphrased", "the speaker paused", "the quote is a lie"] },
        { question: "'She looked at him and said, \"Well...\"' The ellipsis here suggests:", answer: "hesitation or an unfinished thought", wrong: ["anger", "excitement", "a complete thought"] },
        { question: "How many dots are in a standard ellipsis?", answer: "three", wrong: ["two", "four", "one"] },
        { question: "Which is the CORRECT way to write an ellipsis in formal writing?", answer: "three spaced periods: . . .", wrong: ["three dots with no spaces: ...", "four dots: ....", "two dots: .."] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(ellData, rng);
        q.push(createMCQ("punctuation_g8", "ellipsis_g8", data.question, data.answer, data.wrong));
      }
      return q;
    },
    dashes_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const dashData = [
        { correct: "She had one goal—to win.", incorrect: "She had one goal-to win.", rule: "em dash for emphasis before a dramatic element" },
        { correct: "The author—known for his wit—published a new book.", incorrect: "The author, known for his wit, published a new book.", rule: "em dashes for stronger parenthetical" },
        { correct: "She wanted three things—honesty, loyalty, and respect.", incorrect: "She wanted three things: honesty, loyalty, and respect.", rule: "em dash to introduce a list with emphasis" },
        { correct: "The answer—surprisingly—was no.", incorrect: "The answer surprisingly was no.", rule: "em dashes around an interjection" },
        { correct: "He was determined—nothing would stop him.", incorrect: "He was determined, nothing would stop him.", rule: "em dash to connect dramatic independent clauses" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(dashData, rng);
        q.push(createMCQ("punctuation_g8", "dashes_g8",
          "Which correctly uses an EM DASH?", data.correct,
          [data.incorrect, "She had one goal...to win.", "She had one goal; to win."]));
      }
      return q;
    },
    commas_complex_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const commaData = [
        { correct: "My teacher, Mr. Smith, is very kind.", wrong: ["My teacher Mr. Smith, is very kind.", "My teacher, Mr. Smith is very kind.", "My teacher Mr. Smith is very kind."] },
        { correct: "After the long, exhausting hike, we rested.", wrong: ["After the long exhausting hike we rested.", "After, the long exhausting hike, we rested.", "After the long, exhausting hike we rested."] },
        { correct: "The book, which was published in 1920, became a classic.", wrong: ["The book which was published in 1920 became a classic.", "The book, which was published in 1920 became a classic.", "The book which, was published in 1920, became a classic."] },
        { correct: "Yes, I believe that is correct.", wrong: ["Yes I believe that is correct.", "Yes I believe, that is correct.", "Yes, I believe, that is correct."] },
        { correct: "However, the results were inconclusive.", wrong: ["However the results were inconclusive.", "However the results, were inconclusive.", "However, the results, were inconclusive."] },
        { correct: "She visited Paris, France; London, England; and Rome, Italy.", wrong: ["She visited Paris France, London England, and Rome Italy.", "She visited Paris, France, London, England, and Rome, Italy.", "She visited Paris France; London England; and Rome Italy."] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(commaData, rng);
        q.push(createMCQ("punctuation_g8", "commas_complex_g8",
          "Which sentence uses commas CORRECTLY in a complex structure?", data.correct, data.wrong));
      }
      return q;
    },
    ellipsis_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const ellData = [
        { question: "An ELLIPSIS (...) is used to indicate:", answer: "an omission or trailing thought" },
        { question: "In quoting, an ellipsis shows that:", answer: "words have been left out from the original text" },
        { question: "'She looked at him and said, \"Well...\"' The ellipsis here suggests:", answer: "hesitation or an unfinished thought" },
        { question: "How many dots are in a standard ellipsis?", answer: "three" },
        { question: "Which is the CORRECT way to write an ellipsis in formal writing?", answer: "three spaced periods: . . ." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(ellData, rng);
        q.push(createTyping("punctuation_g8", "ellipsis_g8_typing", data.question, data.answer));
      }
      return q;
    },
    dashes_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const dashData = [
        { correct: "She had one goal—to win.", rule: "em dash before a dramatic element" },
        { correct: "The author—known for his wit—published a new book.", rule: "em dashes for stronger parenthetical" },
        { correct: "She wanted three things—honesty, loyalty, and respect.", rule: "em dash to introduce a list with emphasis" },
        { correct: "The answer—surprisingly—was no.", rule: "em dashes around an interjection" },
        { correct: "He was determined—nothing would stop him.", rule: "em dash to connect dramatic independent clauses" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(dashData, rng);
        q.push(createTyping("punctuation_g8", "dashes_g8_typing",
          `Add an em dash to this sentence: "${data.correct.replace('—', '___')}"`, data.correct));
      }
      return q;
    },
    commas_complex_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const commaData = [
        { correct: "My teacher, Mr. Smith, is very kind.", incomplete: "My teacher Mr. Smith is very kind." },
        { correct: "After the long, exhausting hike, we rested.", incomplete: "After the long exhausting hike we rested." },
        { correct: "The book, which was published in 1920, became a classic.", incomplete: "The book which was published in 1920 became a classic." },
        { correct: "Yes, I believe that is correct.", incomplete: "Yes I believe that is correct." },
        { correct: "However, the results were inconclusive.", incomplete: "However the results were inconclusive." },
        { correct: "She visited Paris, France; London, England; and Rome, Italy.", incomplete: "She visited Paris France London England and Rome Italy." },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(commaData, rng);
        q.push(createTyping("punctuation_g8", "commas_complex_g8_typing",
          `Add commas correctly: "${data.incomplete}"`, data.correct));
      }
      return q;
    },
  },
  vocab_g8: {
    greek_latin_adv_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rootData = [
        { root: "chron", meaning: "time", examples: ["chronology", "chronic", "synchronize"], wrong: ["place", "people", "thought"] },
        { root: "morph", meaning: "shape or form", examples: ["metamorphosis", "morphology", "amorphous"], wrong: ["time", "mind", "light"] },
        { root: "path", meaning: "feeling or suffering", examples: ["empathy", "apathy", "pathology"], wrong: ["shape", "mind", "time"] },
        { root: "psych", meaning: "mind or soul", examples: ["psychology", "psyche", "psychiatry"], wrong: ["body", "time", "shape"] },
        { root: "bene", meaning: "good or well", examples: ["benefit", "benevolent", "benediction"], wrong: ["bad", "small", "large"] },
        { root: "mal", meaning: "bad or evil", examples: ["malice", "malfunction", "malevolent"], wrong: ["good", "large", "time"] },
        { root: "scrib/script", meaning: "to write", examples: ["manuscript", "inscription", "prescribe"], wrong: ["to read", "to speak", "to think"] },
        { root: "spec/spect", meaning: "to look or see", examples: ["spectator", "inspect", "perspective"], wrong: ["to hear", "to touch", "to write"] },
        { root: "dict", meaning: "to say or speak", examples: ["dictate", "predict", "verdict"], wrong: ["to write", "to see", "to think"] },
        { root: "aud", meaning: "to hear", examples: ["audience", "audible", "auditorium"], wrong: ["to see", "to speak", "to write"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(rootData, rng);
          const example = pick(data.examples, rng);
          q.push(createMCQ("vocab_g8", "greek_latin_adv_g8",
            `The root '${data.root}' (as in '${example}') means:`, data.meaning, data.wrong));
        } else {
          const data = pick(rootData, rng);
          q.push(createTyping("vocab_g8", "greek_latin_adv_g8",
            `What does the root '${data.root}' mean?`, data.meaning));
        }
      }
      return q;
    },
    context_clues_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const clueData = [
        { sentence: "The scientist's hypothesis, or educated guess, was later proven correct.", word: "hypothesis", meaning: "an educated guess", clueType: "appositive (definition after comma)", wrong: ["a proven fact", "a random thought", "a final answer"] },
        { sentence: "Unlike her gregarious sister, Maria was shy and reserved.", word: "gregarious", meaning: "outgoing and sociable", clueType: "antonym/contrast clue (unlike)", wrong: ["quiet and shy", "angry and loud", "smart and studious"] },
        { sentence: "The parched earth, cracked and dry from weeks without rain, needed water.", word: "parched", meaning: "extremely dry", clueType: "description/explanation clue", wrong: ["wet and muddy", "cold and frozen", "green and lush"] },
        { sentence: "She was so elated after winning the award that she couldn't stop smiling.", word: "elated", meaning: "extremely happy and excited", clueType: "cause/effect clue", wrong: ["sad and disappointed", "angry and frustrated", "tired and bored"] },
        { sentence: "The teacher used a mnemonic device, like 'ROY G BIV' for rainbow colors, to help students remember.", word: "mnemonic", meaning: "a memory aid or trick", clueType: "example clue", wrong: ["a punishment", "a test question", "a textbook"] },
        { sentence: "His verbose speech, filled with unnecessary repetition and overly long sentences, bored the audience.", word: "verbose", meaning: "using too many words", clueType: "description clue", wrong: ["brief and clear", "exciting and engaging", "quiet and soft"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(clueData, rng);
          const askMeaning = rng() > 0.4;
          if (askMeaning) {
            q.push(createMCQ("vocab_g8", "context_clues_g8",
              `Based on context, '${data.word}' in "${data.sentence}" means:`, data.meaning, data.wrong));
          } else {
            q.push(createMCQ("vocab_g8", "context_clues_g8",
              `What TYPE of context clue helps define '${data.word}'?`, data.clueType,
              ["no clue is given", "root word clue", "illustration clue"]));
          }
        } else {
          const data = pick(clueData, rng);
          q.push(createTyping("vocab_g8", "context_clues_g8",
            `Use context to define '${data.word}': "${data.sentence}"`, data.meaning));
        }
      }
      return q;
    },
    figurative_adv_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const figData = [
        { text: "'Oh great, another Monday!' (said sarcastically)", device: "verbal irony", wrong: ["a pun", "an allusion", "personification"] },
        { text: "'I'm reading about anti-gravity. It's impossible to put down!'", device: "pun", wrong: ["verbal irony", "allusion", "hyperbole"] },
        { text: "'She opened Pandora's box when she asked that question.'", device: "allusion", wrong: ["verbal irony", "pun", "metaphor"] },
        { text: "'Time flies when you're having fun' — but time doesn't really fly!", device: "personification", wrong: ["verbal irony", "pun", "allusion"] },
        { text: "'He met his Waterloo in the final exam.'", device: "allusion", wrong: ["pun", "verbal irony", "simile"] },
        { text: "'I used to be a banker, but I lost interest.'", device: "pun", wrong: ["verbal irony", "allusion", "metaphor"] },
        { text: "'Nice job!' (said to someone who just dropped all the plates)", device: "verbal irony", wrong: ["pun", "allusion", "hyperbole"] },
        { text: "'He's a real Einstein' (said about someone who did something foolish)", device: "verbal irony", wrong: ["allusion only", "pun", "simile"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(figData, rng);
          q.push(createMCQ("vocab_g8", "figurative_adv_g8",
            `What figurative device? ${data.text}`, data.device, data.wrong));
        } else {
          const data = pick(figData, rng);
          q.push(createTyping("vocab_g8", "figurative_adv_g8",
            `Identify the figurative device: ${data.text}`, data.device));
        }
      }
      return q;
    },
    word_nuances_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const nuanceData = [
        { words: ["commence", "start", "begin", "kick off"], mostFormal: "commence", leastFormal: "kick off", wrong: ["start", "begin"] },
        { words: ["residence", "home", "house", "pad"], mostFormal: "residence", leastFormal: "pad", wrong: ["home", "house"] },
        { words: ["inquire", "ask", "question", "grill"], mostFormal: "inquire", leastFormal: "grill", wrong: ["ask", "question"] },
        { words: ["deceased", "dead", "passed away", "gone"], mostFormal: "deceased", leastFormal: "gone", wrong: ["dead", "passed away"] },
        { words: ["intoxicated", "drunk", "tipsy", "wasted"], mostFormal: "intoxicated", leastFormal: "wasted", wrong: ["drunk", "tipsy"] },
        { words: ["perspire", "sweat", "glow"], mostFormal: "perspire", leastFormal: "sweat", wrong: ["glow"] },
        { words: ["famished", "hungry", "starving", "peckish"], mostFormal: "famished", leastFormal: "peckish", wrong: ["hungry", "starving"] },
        { words: ["slender", "thin", "skinny", "scrawny"], positive: "slender", negative: "scrawny", neutral: "thin", wrong: ["skinny"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(nuanceData, rng);
          if ("mostFormal" in data) {
            const askFormal = rng() > 0.5;
            if (askFormal) {
              q.push(createMCQ("vocab_g8", "word_nuances_g8",
                `Which word has the MOST FORMAL tone? ${data.words.join(", ")}`, data.mostFormal!, data.wrong));
            } else {
              q.push(createMCQ("vocab_g8", "word_nuances_g8",
                `Which word has the LEAST FORMAL tone? ${data.words.join(", ")}`, data.leastFormal!, data.wrong));
            }
          } else {
            q.push(createMCQ("vocab_g8", "word_nuances_g8",
              `Which word has a POSITIVE connotation? ${data.words.join(", ")}`, data.positive!,
              [data.negative!, data.neutral!, ...data.wrong]));
          }
        } else {
          const data = pick(nuanceData, rng);
          if ("mostFormal" in data) {
            q.push(createTyping("vocab_g8", "word_nuances_g8",
              `Which is most FORMAL: ${data.words.join(", ")}?`, data.mostFormal!));
          } else {
            q.push(createTyping("vocab_g8", "word_nuances_g8",
              `Which has the most POSITIVE connotation: ${data.words.join(", ")}?`, data.positive!));
          }
        }
      }
      return q;
    },
    greek_latin_adv_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rootData = [
        { root: "chron", meaning: "time", examples: ["chronology", "chronic", "synchronize"], wrong: ["place", "people", "thought"] },
        { root: "morph", meaning: "shape or form", examples: ["metamorphosis", "morphology", "amorphous"], wrong: ["time", "mind", "light"] },
        { root: "path", meaning: "feeling or suffering", examples: ["empathy", "apathy", "pathology"], wrong: ["shape", "mind", "time"] },
        { root: "psych", meaning: "mind or soul", examples: ["psychology", "psyche", "psychiatry"], wrong: ["body", "time", "shape"] },
        { root: "bene", meaning: "good or well", examples: ["benefit", "benevolent", "benediction"], wrong: ["bad", "small", "large"] },
        { root: "mal", meaning: "bad or evil", examples: ["malice", "malfunction", "malevolent"], wrong: ["good", "large", "time"] },
        { root: "scrib/script", meaning: "to write", examples: ["manuscript", "inscription", "prescribe"], wrong: ["to read", "to speak", "to think"] },
        { root: "spec/spect", meaning: "to look or see", examples: ["spectator", "inspect", "perspective"], wrong: ["to hear", "to touch", "to write"] },
        { root: "dict", meaning: "to say or speak", examples: ["dictate", "predict", "verdict"], wrong: ["to write", "to see", "to think"] },
        { root: "aud", meaning: "to hear", examples: ["audience", "audible", "auditorium"], wrong: ["to see", "to speak", "to write"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(rootData, rng);
        const example = pick(data.examples, rng);
        q.push(createMCQ("vocab_g8", "greek_latin_adv_g8",
          `The root '${data.root}' (as in '${example}') means:`, data.meaning, data.wrong));
      }
      return q;
    },
    context_clues_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const clueData = [
        { sentence: "The scientist's hypothesis, or educated guess, was later proven correct.", word: "hypothesis", meaning: "an educated guess", clueType: "appositive (definition after comma)", wrong: ["a proven fact", "a random thought", "a final answer"] },
        { sentence: "Unlike her gregarious sister, Maria was shy and reserved.", word: "gregarious", meaning: "outgoing and sociable", clueType: "antonym/contrast clue (unlike)", wrong: ["quiet and shy", "angry and loud", "smart and studious"] },
        { sentence: "The parched earth, cracked and dry from weeks without rain, needed water.", word: "parched", meaning: "extremely dry", clueType: "description/explanation clue", wrong: ["wet and muddy", "cold and frozen", "green and lush"] },
        { sentence: "She was so elated after winning the award that she couldn't stop smiling.", word: "elated", meaning: "extremely happy and excited", clueType: "cause/effect clue", wrong: ["sad and disappointed", "angry and frustrated", "tired and bored"] },
        { sentence: "The teacher used a mnemonic device, like 'ROY G BIV' for rainbow colors, to help students remember.", word: "mnemonic", meaning: "a memory aid or trick", clueType: "example clue", wrong: ["a punishment", "a test question", "a textbook"] },
        { sentence: "His verbose speech, filled with unnecessary repetition and overly long sentences, bored the audience.", word: "verbose", meaning: "using too many words", clueType: "description clue", wrong: ["brief and clear", "exciting and engaging", "quiet and soft"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(clueData, rng);
        const askMeaning = rng() > 0.4;
        if (askMeaning) {
          q.push(createMCQ("vocab_g8", "context_clues_g8",
            `Based on context, '${data.word}' in "${data.sentence}" means:`, data.meaning, data.wrong));
        } else {
          q.push(createMCQ("vocab_g8", "context_clues_g8",
            `What TYPE of context clue helps define '${data.word}'?`, data.clueType,
            ["no clue is given", "root word clue", "illustration clue"]));
        }
      }
      return q;
    },
    figurative_adv_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const figData = [
        { text: "'Oh great, another Monday!' (said sarcastically)", device: "verbal irony", wrong: ["a pun", "an allusion", "personification"] },
        { text: "'I'm reading about anti-gravity. It's impossible to put down!'", device: "pun", wrong: ["verbal irony", "allusion", "hyperbole"] },
        { text: "'She opened Pandora's box when she asked that question.'", device: "allusion", wrong: ["verbal irony", "pun", "metaphor"] },
        { text: "'Time flies when you're having fun' — but time doesn't really fly!", device: "personification", wrong: ["verbal irony", "pun", "allusion"] },
        { text: "'He met his Waterloo in the final exam.'", device: "allusion", wrong: ["pun", "verbal irony", "simile"] },
        { text: "'I used to be a banker, but I lost interest.'", device: "pun", wrong: ["verbal irony", "allusion", "metaphor"] },
        { text: "'Nice job!' (said to someone who just dropped all the plates)", device: "verbal irony", wrong: ["pun", "allusion", "hyperbole"] },
        { text: "'He's a real Einstein' (said about someone who did something foolish)", device: "verbal irony", wrong: ["allusion only", "pun", "simile"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(figData, rng);
        q.push(createMCQ("vocab_g8", "figurative_adv_g8",
          `What figurative device? ${data.text}`, data.device, data.wrong));
      }
      return q;
    },
    word_nuances_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const nuanceData = [
        { words: ["commence", "start", "begin", "kick off"], mostFormal: "commence", leastFormal: "kick off", wrong: ["start", "begin"] },
        { words: ["residence", "home", "house", "pad"], mostFormal: "residence", leastFormal: "pad", wrong: ["home", "house"] },
        { words: ["inquire", "ask", "question", "grill"], mostFormal: "inquire", leastFormal: "grill", wrong: ["ask", "question"] },
        { words: ["deceased", "dead", "passed away", "gone"], mostFormal: "deceased", leastFormal: "gone", wrong: ["dead", "passed away"] },
        { words: ["intoxicated", "drunk", "tipsy", "wasted"], mostFormal: "intoxicated", leastFormal: "wasted", wrong: ["drunk", "tipsy"] },
        { words: ["perspire", "sweat", "glow"], mostFormal: "perspire", leastFormal: "sweat", wrong: ["glow"] },
        { words: ["famished", "hungry", "starving", "peckish"], mostFormal: "famished", leastFormal: "peckish", wrong: ["hungry", "starving"] },
        { words: ["slender", "thin", "skinny", "scrawny"], positive: "slender", negative: "scrawny", neutral: "thin", wrong: ["skinny"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(nuanceData, rng);
        if ("mostFormal" in data) {
          const askFormal = rng() > 0.5;
          if (askFormal) {
            q.push(createMCQ("vocab_g8", "word_nuances_g8",
              `Which word has the MOST FORMAL tone? ${data.words.join(", ")}`, data.mostFormal!, data.wrong));
          } else {
            q.push(createMCQ("vocab_g8", "word_nuances_g8",
              `Which word has the LEAST FORMAL tone? ${data.words.join(", ")}`, data.leastFormal!, data.wrong));
          }
        } else {
          q.push(createMCQ("vocab_g8", "word_nuances_g8",
            `Which word has a POSITIVE connotation? ${data.words.join(", ")}`, data.positive!,
            [data.negative!, data.neutral!, ...data.wrong]));
        }
      }
      return q;
    },
    greek_latin_adv_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rootData = [
        { root: "chron", meaning: "time" },
        { root: "morph", meaning: "shape or form" },
        { root: "path", meaning: "feeling or suffering" },
        { root: "psych", meaning: "mind or soul" },
        { root: "bene", meaning: "good or well" },
        { root: "mal", meaning: "bad or evil" },
        { root: "scrib/script", meaning: "to write" },
        { root: "spec/spect", meaning: "to look or see" },
        { root: "dict", meaning: "to say or speak" },
        { root: "aud", meaning: "to hear" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(rootData, rng);
        q.push(createTyping("vocab_g8", "greek_latin_adv_g8_typing",
          `What does the root '${data.root}' mean?`, data.meaning));
      }
      return q;
    },
    context_clues_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const clueData = [
        { sentence: "The scientist's hypothesis, or educated guess, was later proven correct.", word: "hypothesis", meaning: "an educated guess" },
        { sentence: "Unlike her gregarious sister, Maria was shy and reserved.", word: "gregarious", meaning: "outgoing and sociable" },
        { sentence: "The parched earth, cracked and dry from weeks without rain, needed water.", word: "parched", meaning: "extremely dry" },
        { sentence: "She was so elated after winning the award that she couldn't stop smiling.", word: "elated", meaning: "extremely happy and excited" },
        { sentence: "The teacher used a mnemonic device, like 'ROY G BIV' for rainbow colors, to help students remember.", word: "mnemonic", meaning: "a memory aid or trick" },
        { sentence: "His verbose speech, filled with unnecessary repetition and overly long sentences, bored the audience.", word: "verbose", meaning: "using too many words" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(clueData, rng);
        q.push(createTyping("vocab_g8", "context_clues_g8_typing",
          `Based on context, '${data.word}' means:`, data.meaning));
      }
      return q;
    },
    figurative_adv_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const figData = [
        { text: "'Oh great, another Monday!' (said sarcastically)", device: "verbal irony" },
        { text: "'I'm reading about anti-gravity. It's impossible to put down!'", device: "pun" },
        { text: "'She opened Pandora's box when she asked that question.'", device: "allusion" },
        { text: "'Time flies when you're having fun' — but time doesn't really fly!", device: "personification" },
        { text: "'He met his Waterloo in the final exam.'", device: "allusion" },
        { text: "'I used to be a banker, but I lost interest.'", device: "pun" },
        { text: "'Nice job!' (said to someone who just dropped all the plates)", device: "verbal irony" },
        { text: "'He's a real Einstein' (said about someone who did something foolish)", device: "verbal irony" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(figData, rng);
        q.push(createTyping("vocab_g8", "figurative_adv_g8_typing",
          `What figurative device? ${data.text}`, data.device));
      }
      return q;
    },
    word_nuances_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const nuanceData = [
        { question: "Which word means 'to begin' and is the MOST FORMAL?", answer: "commence" },
        { question: "Which word means 'a place to live' and is the MOST FORMAL?", answer: "residence" },
        { question: "Which word means 'to ask' and is the MOST FORMAL?", answer: "inquire" },
        { question: "Which word means 'dead' and is the MOST FORMAL?", answer: "deceased" },
        { question: "Which word means 'drunk' and is the MOST FORMAL?", answer: "intoxicated" },
        { question: "Which word means 'thin' and has a POSITIVE connotation?", answer: "slender" },
        { question: "Which word means 'very hungry' and is the MOST FORMAL?", answer: "famished" },
        { question: "Which word means 'very thin' and has a NEGATIVE connotation?", answer: "scrawny" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(nuanceData, rng);
        q.push(createTyping("vocab_g8", "word_nuances_g8_typing", data.question, data.answer));
      }
      return q;
    },
    synonyms_distinctions_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const synData = [
        { question: "What is the difference between 'irritated' and 'furious'?", answer: "irritated is mildly annoyed; furious is extremely angry" },
        { question: "What is the difference between 'confident' and 'arrogant'?", answer: "confident is self-assured; arrogant is excessively proud" },
        { question: "What is the difference between 'brave' and 'reckless'?", answer: "brave is courageous; reckless is dangerously careless" },
        { question: "What is the difference between 'thrifty' and 'stingy'?", answer: "thrifty is wise with money; stingy is unwilling to spend" },
        { question: "What is the difference between 'curious' and 'nosy'?", answer: "curious is interested to learn; nosy is intrusively interested" },
        { question: "What is the difference between 'ancient' and 'archaic'?", answer: "ancient means very old; archaic means outdated or old-fashioned" },
        { question: "What is the difference between 'small' and 'petite'?", answer: "small is generic; petite is small and delicate" },
      ];
      for (let i = 0; i < 25; i++) {
        const data = pick(synData, rng);
        q.push(createTyping("vocab_g8", "synonyms_distinctions_g8_typing",
          data.question, data.answer));
      }
      return q;
    },
    // ───── NEW VOCABULARY SUBTOPICS (8 topics, 16 generators) ─────
    rhetoric_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rhetoricalData = [
        { appeal: "ethos", example: "As a doctor with 20 years of experience, I recommend this treatment.", wrong: ["pathos", "logos", "metonymy"] },
        { appeal: "pathos", example: "Think of starving children in developing nations while you waste food.", wrong: ["ethos", "logos", "irony"] },
        { appeal: "logos", example: "Studies show that 9 out of 10 dentists recommend this toothpaste.", wrong: ["ethos", "pathos", "alliteration"] },
        { appeal: "ethos", example: "As a Nobel Prize winner, I believe climate change requires immediate action.", wrong: ["pathos", "logos", "chiasmus"] },
        { appeal: "pathos", example: "Imagine losing your home to a natural disaster.", wrong: ["ethos", "logos", "anaphora"] },
        { appeal: "logos", example: "If A equals B and B equals C, then A must equal C.", wrong: ["ethos", "pathos", "parallelism"] },
        { appeal: "rhetorical question", example: "Do you really want to ignore the evidence before you?", wrong: ["anaphora", "chiasmus", "alliteration"] },
        { appeal: "anaphora", example: "We will fight, we will prevail, we will triumph.", wrong: ["ethos", "epistrophe", "metaphor"] },
        { appeal: "chiasmus", example: "Ask not what your country can do for you, but what you can do for your country.", wrong: ["logos", "anaphora", "assonance"] },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(rhetoricalData, rng);
        q.push(createMCQ("vocab_g8", "rhetoric_g8_mcq",
          `What rhetorical appeal or device is used in: "${data.example}"?`, data.appeal, data.wrong));
      }
      return q;
    },
    rhetoric_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rhetoricExamples = [
        { example: "Trust me, I've been doing this for decades.", term: "ethos" },
        { example: "Picture a lonely puppy in a shelter.", term: "pathos" },
        { example: "Facts and statistics prove this is effective.", term: "logos" },
        { example: "Wouldn't you agree this is obvious?", term: "rhetorical question" },
        { example: "Forget it, forget the past, forget the pain.", term: "anaphora" },
        { example: "Never surrender, never submit, never stop fighting.", term: "anaphora" },
        { example: "Ask not what your country can do for you, but what you can do for your country.", term: "chiasmus" },
        { example: "Good morning comes after dark night.", term: "chiasmus" },
        { example: "When in Rome, do as the Romans do.", term: "aphorism" },
        { example: "The fear is real, the pain is real.", term: "parallelism" },
        { example: "Genius is 1% inspiration and 99% perspiration.", term: "parallelism" },
        { example: "Give and take, love and loss, joy and sorrow.", term: "antithesis" },
        { example: "The sweet song sang sweetly.", term: "alliteration" },
        { example: "Soft as silk, smooth as stone.", term: "simile" },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(rhetoricExamples, rng);
        q.push(createTyping("vocab_g8", "rhetoric_g8_typing",
          `What rhetorical term or device is demonstrated in: "${data.example}"?`, data.term));
      }
      return q;
    },
    philosophy_ethics_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const philosophyData = [
        { term: "justice", definition: "Fair treatment and respect for rights; giving people what they deserve.", wrong: ["happiness", "wisdom", "honesty"] },
        { term: "morality", definition: "Principles concerning the distinction between right and wrong behavior.", wrong: ["law", "custom", "opinion"] },
        { term: "utilitarianism", definition: "An ethical theory that states actions are right if they promote happiness for the greatest number.", wrong: ["stoicism", "existentialism", "relativism"] },
        { term: "ethics", definition: "The study of what is right and wrong; moral philosophy.", wrong: ["psychology", "politics", "sociology"] },
        { term: "virtue", definition: "A morally excellent quality or trait, such as courage or honesty.", wrong: ["vice", "power", "intelligence"] },
        { term: "consequentialism", definition: "An ethical view that judges actions by their consequences.", wrong: ["deontology", "virtue ethics", "relativism"] },
        { term: "deontology", definition: "An ethical theory based on rules and duties, regardless of consequences.", wrong: ["utilitarianism", "virtue ethics", "pragmatism"] },
        { term: "integrity", definition: "Adherence to moral principles; being honest and having strong moral values.", wrong: ["strength", "intelligence", "beauty"] },
        { term: "compassion", definition: "Sympathetic concern for the sufferings of others; empathy.", wrong: ["pride", "ambition", "confidence"] },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(philosophyData, rng);
        q.push(createMCQ("vocab_g8", "philosophy_ethics_g8_mcq",
          `What does "${data.term}" mean in ethics?`, data.definition, data.wrong));
      }
      return q;
    },
    philosophy_ethics_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const ethics_data = [
        { definition: "The belief that actions should be judged by whether they produce the greatest good for the greatest number.", term: ["utilitarianism", "utilitarism"] },
        { definition: "Moral principles based on duty and rules, not consequences.", term: ["deontology", "deontological ethics"] },
        { definition: "The quality of being honest and having strong moral principles.", term: ["integrity", "integraty"] },
        { definition: "The study of right and wrong behavior.", term: ["ethics", "moral philosophy"] },
        { definition: "A morally praiseworthy quality like honesty or courage.", term: ["virtue", "virtues"] },
        { definition: "Fair and impartial treatment; giving people what they deserve.", term: ["justice", "justness"] },
        { definition: "The system of moral principles governing a person's behavior.", term: ["morality", "moral code"] },
        { definition: "Deep awareness of another person's feelings and experiences.", term: ["empathy", "sympathy"] },
        { definition: "A desire to help others who are suffering.", term: ["compassion", "mercy"] },
        { definition: "The quality of being honest and frank; honesty.", term: ["candor", "candour", "honesty"] },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(ethics_data, rng);
        q.push(createTyping("vocab_g8", "philosophy_ethics_g8_typing",
          `Define: ${data.definition}`, data.term));
      }
      return q;
    },
    world_literature_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const litData = [
        { term: "archetype", example: "The wise mentor who guides the young hero.", wrong: ["protagonist", "symbol", "allusion"] },
        { term: "myth", example: "A traditional story explaining natural phenomena or cultural beliefs.", wrong: ["novel", "fable", "legend"] },
        { term: "epic", example: "A long narrative poem about heroic deeds, like Beowulf or The Odyssey.", wrong: ["sonnet", "elegy", "ballad"] },
        { term: "tragedy", example: "A drama depicting the downfall of a noble character due to a fatal flaw.", wrong: ["comedy", "farce", "melodrama"] },
        { term: "comedy", example: "A dramatic work intended to be amusing and end happily.", wrong: ["tragedy", "satire", "irony"] },
        { term: "protagonist", example: "The main character who drives the action of the story.", wrong: ["antagonist", "observer", "narrator"] },
        { term: "antagonist", example: "The character who opposes or conflicts with the protagonist.", wrong: ["protagonist", "ally", "mentor"] },
        { term: "metaphor", example: "A comparison between two unlike things without using 'like' or 'as'.", wrong: ["simile", "personification", "symbol"] },
        { term: "symbolism", example: "The use of objects, colors, or actions to represent deeper meanings.", wrong: ["foreshadowing", "irony", "hyperbole"] },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(litData, rng);
        q.push(createMCQ("vocab_g8", "world_literature_g8_mcq",
          `What literary term is described: "${data.example}"?`, data.term, data.wrong));
      }
      return q;
    },
    world_literature_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const lit_terms = [
        { definition: "A universal character type that appears in stories across cultures.", term: ["archetype", "archetypal character"] },
        { definition: "A traditional story used to explain natural phenomena or values.", term: ["myth", "mythology"] },
        { definition: "A long narrative poem celebrating heroic deeds and adventures.", term: ["epic", "epic poem"] },
        { definition: "A dramatic work showing a noble character's downfall.", term: ["tragedy", "tragic drama"] },
        { definition: "A dramatic work meant to amuse the audience with a happy ending.", term: ["comedy", "comic play"] },
        { definition: "The main character of a story.", term: ["protagonist", "hero", "heroine"] },
        { definition: "The character opposing the protagonist.", term: ["antagonist", "villain"] },
        { definition: "A simple story with a moral lesson.", term: ["fable", "moral tale"] },
        { definition: "An object or action representing something deeper or abstract.", term: ["symbol", "symbolism"] },
        { definition: "A clue or hint suggesting what will happen later.", term: ["foreshadowing", "forshadowing"] },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(lit_terms, rng);
        q.push(createTyping("vocab_g8", "world_literature_g8_typing",
          `What is: ${data.definition}`, data.term));
      }
      return q;
    },
    economics_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const econ_data = [
        { term: "supply", definition: "The amount of goods available for purchase.", wrong: ["demand", "price", "cost"] },
        { term: "demand", definition: "The desire and ability of consumers to buy goods.", wrong: ["supply", "profit", "revenue"] },
        { term: "inflation", definition: "A sustained increase in the price level of goods and services.", wrong: ["deflation", "recession", "growth"] },
        { term: "trade", definition: "The exchange of goods and services between countries or individuals.", wrong: ["tariff", "import", "export"] },
        { term: "GDP", definition: "Gross Domestic Product; total value of goods and services produced in a country.", wrong: ["GNP", "income", "wealth"] },
        { term: "capitalism", definition: "An economic system based on private ownership and free markets.", wrong: ["socialism", "communism", "feudalism"] },
        { term: "profit", definition: "Revenue minus costs; the financial gain from a business.", wrong: ["revenue", "income", "expense"] },
        { term: "monopoly", definition: "A market controlled by a single seller with no competition.", wrong: ["oligopoly", "competition", "cartel"] },
        { term: "tariff", definition: "A tax on imported goods to protect domestic industries.", wrong: ["subsidy", "quota", "embargo"] },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(econ_data, rng);
        q.push(createMCQ("vocab_g8", "economics_g8_mcq",
          `What does "${data.term}" mean in economics?`, data.definition, data.wrong));
      }
      return q;
    },
    economics_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const econ_terms = [
        { definition: "The amount of goods available for buyers.", term: ["supply", "product supply"] },
        { definition: "Consumers' willingness and ability to purchase.", term: ["demand", "consumer demand"] },
        { definition: "A rise in prices of goods and services over time.", term: ["inflation", "price inflation"] },
        { definition: "The exchange of goods and services between people or countries.", term: ["trade", "commerce"] },
        { definition: "Total value of all goods and services produced in a country.", term: ["GDP", "Gross Domestic Product"] },
        { definition: "Economic system based on private ownership and competition.", term: ["capitalism", "capitalist economy"] },
        { definition: "Money earned after paying all costs and expenses.", term: ["profit", "net profit"] },
        { definition: "Complete control of a product or service by one company.", term: ["monopoly", "monopolistic control"] },
        { definition: "A tax imposed on imported goods.", term: ["tariff", "import tariff", "duty"] },
        { definition: "A period of declining economic growth and rising unemployment.", term: ["recession", "economic recession"] },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(econ_terms, rng);
        q.push(createTyping("vocab_g8", "economics_g8_typing",
          `Define: ${data.definition}`, data.term));
      }
      return q;
    },
    science_adv_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sci_data = [
        { term: "evolution", definition: "The gradual change of species over time through natural selection.", wrong: ["adaptation", "mutation", "extinction"] },
        { term: "genetics", definition: "The study of heredity and genes.", wrong: ["genomics", "biochemistry", "evolution"] },
        { term: "quantum", definition: "Relating to the physics of atoms and subatomic particles.", wrong: ["classical", "relativistic", "thermal"] },
        { term: "photon", definition: "A particle of light or electromagnetic radiation.", wrong: ["electron", "neutron", "quark"] },
        { term: "empirical", definition: "Based on observation, experience, or experiment rather than theory.", wrong: ["theoretical", "hypothetical", "abstract"] },
        { term: "mutation", definition: "A change in DNA that can alter an organism's traits.", wrong: ["adaptation", "evolution", "variation"] },
        { term: "species", definition: "A group of organisms that can reproduce together.", wrong: ["genus", "family", "ecosystem"] },
        { term: "adaptation", definition: "A trait that helps an organism survive in its environment.", wrong: ["mutation", "evolution", "instinct"] },
        { term: "DNA", definition: "Deoxyribonucleic acid; the molecule that carries genetic information.", wrong: ["RNA", "protein", "enzyme"] },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(sci_data, rng);
        q.push(createMCQ("vocab_g8", "science_adv_g8_mcq",
          `What does "${data.term}" mean?`, data.definition, data.wrong));
      }
      return q;
    },
    science_adv_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sci_terms = [
        { definition: "The process by which organisms change over generations.", term: ["evolution", "evolutionary change"] },
        { definition: "The study of inherited traits and genes.", term: ["genetics", "heredity"] },
        { definition: "Physics dealing with atoms and subatomic particles.", term: ["quantum mechanics", "quantum physics"] },
        { definition: "A discrete unit of light energy.", term: ["photon", "light particle"] },
        { definition: "Based on real observations and experiments.", term: ["empirical", "evidence-based"] },
        { definition: "A permanent change in DNA sequences.", term: ["mutation", "genetic mutation"] },
        { definition: "A group of organisms that can breed together.", term: ["species", "biological species"] },
        { definition: "A characteristic that helps survival in an environment.", term: ["adaptation", "adaptive trait"] },
        { definition: "The molecule containing genetic instructions.", term: ["DNA", "deoxyribonucleic acid"] },
        { definition: "Genetic variation within a population.", term: ["variation", "genetic variation"] },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(sci_terms, rng);
        q.push(createTyping("vocab_g8", "science_adv_g8_typing",
          `Define: ${data.definition}`, data.term));
      }
      return q;
    },
    advanced_writing_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const writing_data = [
        { term: "thesis", definition: "The main argument or central idea of an essay.", wrong: ["topic", "conclusion", "evidence"] },
        { term: "synthesis", definition: "Combining information from multiple sources to form new understanding.", wrong: ["analysis", "summary", "paraphrase"] },
        { term: "annotation", definition: "Adding notes or comments to a text to explain or analyze it.", wrong: ["citation", "quotation", "paraphrase"] },
        { term: "peer review", definition: "Evaluation of work by people of equal standing.", wrong: ["plagiarism", "editing", "revision"] },
        { term: "citation", definition: "A formal reference to a source of information.", wrong: ["quotation", "paraphrase", "summary"] },
        { term: "evidence", definition: "Facts or examples used to support an argument.", wrong: ["opinion", "bias", "assumption"] },
        { term: "paraphrase", definition: "Restate someone's ideas in your own words.", wrong: ["quote", "summarize", "cite"] },
        { term: "plagiarism", definition: "Using someone's words or ideas without giving credit.", wrong: ["citation", "paraphrase", "analysis"] },
        { term: "bias", definition: "Prejudice or unfair favor toward a particular viewpoint.", wrong: ["evidence", "logic", "objectivity"] },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(writing_data, rng);
        q.push(createMCQ("vocab_g8", "advanced_writing_g8_mcq",
          `What does "${data.term}" mean in writing?`, data.definition, data.wrong));
      }
      return q;
    },
    advanced_writing_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const writing_terms = [
        { definition: "The main claim or argument of an essay.", term: ["thesis", "thesis statement"] },
        { definition: "Combining ideas from multiple sources into a unified whole.", term: ["synthesis", "synthesize"] },
        { definition: "Adding comments and marks to a text for analysis.", term: ["annotation", "annotate"] },
        { definition: "Evaluation of work by colleagues or equals.", term: ["peer review", "peer editing"] },
        { definition: "A formal reference acknowledging a source.", term: ["citation", "cite"] },
        { definition: "Facts, examples, or statistics supporting an argument.", term: ["evidence", "supporting evidence"] },
        { definition: "Restating an idea using different words.", term: ["paraphrase", "rephrasing"] },
        { definition: "Taking credit for someone else's work or ideas.", term: ["plagiarism", "plagiarize"] },
        { definition: "An unfair preference for one side or viewpoint.", term: ["bias", "prejudice"] },
        { definition: "Presenting information without favoritism or judgment.", term: ["objectivity", "objective writing"] },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(writing_terms, rng);
        q.push(createTyping("vocab_g8", "advanced_writing_g8_typing",
          `Define: ${data.definition}`, data.term));
      }
      return q;
    },
    syntax_style_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const syntax_data = [
        { term: "anaphora", example: "I came, I saw, I conquered.", wrong: ["epistrophe", "alliteration", "metaphor"] },
        { term: "epistrophe", example: "When I was a child, I thought as a child; when I became a man, I put away childish things.", wrong: ["anaphora", "parallelism", "simile"] },
        { term: "parallelism", example: "She loves hiking, swimming, and reading.", wrong: ["anaphora", "antithesis", "assonance"] },
        { term: "periodic sentence", example: "After walking for hours, hungry and tired, they finally reached the village.", wrong: ["cumulative sentence", "simple sentence", "compound sentence"] },
        { term: "cumulative sentence", example: "They reached the village, hungry and tired, after walking for hours.", wrong: ["periodic sentence", "simple sentence", "fragment"] },
        { term: "antithesis", example: "It was the best of times, it was the worst of times.", wrong: ["parallelism", "oxymoron", "paradox"] },
        { term: "assonance", example: "The rain in Spain falls mainly on the plain.", wrong: ["alliteration", "consonance", "rhyme"] },
        { term: "alliteration", example: "The beautiful butterfly bounced by the bush.", wrong: ["assonance", "consonance", "rhythm"] },
        { term: "inversion", example: "Never have I seen such beauty.", wrong: ["ellipsis", "anaphora", "chiasmus"] },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(syntax_data, rng);
        q.push(createMCQ("vocab_g8", "syntax_style_g8_mcq",
          `What syntactic or stylistic device is in: "${data.example}"?`, data.term, data.wrong));
      }
      return q;
    },
    syntax_style_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const syntax_terms = [
        { definition: "Repetition of the same word or phrase at the beginning of clauses.", term: ["anaphora", "anaphor"] },
        { definition: "Repetition of words at the end of successive clauses.", term: ["epistrophe", "epistrophic"] },
        { definition: "Similar grammatical structures in successive phrases.", term: ["parallelism", "parallel structure"] },
        { definition: "A sentence where the main idea comes at the end.", term: ["periodic sentence", "periodic"] },
        { definition: "A sentence where the main idea comes early, then is elaborated.", term: ["cumulative sentence", "cumulative"] },
        { definition: "Contrasting ideas in similar grammatical structures.", term: ["antithesis", "antithetic"] },
        { definition: "Repetition of vowel sounds in nearby words.", term: ["assonance", "assonant"] },
        { definition: "Repetition of consonant sounds at word beginnings.", term: ["alliteration", "alliterative"] },
        { definition: "Reversing normal word order for emphasis.", term: ["inversion", "inverted order"] },
        { definition: "Joining independent clauses with coordinating conjunctions.", term: ["coordination", "parataxis"] },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(syntax_terms, rng);
        q.push(createTyping("vocab_g8", "syntax_style_g8_typing",
          `What is: ${data.definition}`, data.term));
      }
      return q;
    },
    critical_thinking_g8_mcq: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const ct_data = [
        { term: "inference", definition: "A conclusion drawn from evidence and reasoning.", wrong: ["assumption", "guess", "fact"] },
        { term: "deduction", definition: "Reasoning from general principles to a specific conclusion.", wrong: ["induction", "abduction", "analogy"] },
        { term: "induction", definition: "Reasoning from specific examples to a general conclusion.", wrong: ["deduction", "abduction", "assumption"] },
        { term: "assumption", definition: "Something accepted as true without proof.", wrong: ["inference", "evidence", "fact"] },
        { term: "fallacy", definition: "A logical error in reasoning.", wrong: ["bias", "assumption", "inference"] },
        { term: "bias", definition: "A preference or prejudice that affects judgment.", wrong: ["objectivity", "fact", "evidence"] },
        { term: "ad hominem fallacy", definition: "Attacking the person instead of their argument.", wrong: ["straw man", "appeal to authority", "begging the question"] },
        { term: "straw man fallacy", definition: "Misrepresenting someone's argument to attack it.", wrong: ["ad hominem", "slippery slope", "false dilemma"] },
        { term: "false dilemma", definition: "Presenting only two options when more exist.", wrong: ["straw man", "begging the question", "red herring"] },
      ];
      for (let i = 0; i < 20; i++) {
        const data = pick(ct_data, rng);
        q.push(createMCQ("vocab_g8", "critical_thinking_g8_mcq",
          `What does "${data.term}" mean?`, data.definition, data.wrong));
      }
      return q;
    },
    critical_thinking_g8_typing: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const ct_terms = [
        { definition: "A conclusion based on evidence and reasoning.", term: ["inference", "inferential"] },
        { definition: "Logic from general rules to specific conclusions.", term: ["deduction", "deductive reasoning"] },
        { definition: "Logic from specific examples to general conclusions.", term: ["induction", "inductive reasoning"] },
        { definition: "Something believed without proof or evidence.", term: ["assumption", "assumptive"] },
        { definition: "A flaw in logical reasoning or argument.", term: ["fallacy", "logical fallacy"] },
        { definition: "Unfair preference affecting judgment.", term: ["bias", "biased"] },
        { definition: "Attacking the person instead of the argument.", term: ["ad hominem", "ad hominem fallacy"] },
        { definition: "Misrepresenting someone's argument to attack it.", term: ["straw man", "straw man fallacy"] },
        { definition: "Presenting only two options when more exist.", term: ["false dilemma", "false dichotomy"] },
        { definition: "Information that distracts from the main issue.", term: ["red herring", "irrelevant"] },
      ];
      for (let i = 0; i < 15; i++) {
        const data = pick(ct_terms, rng);
        q.push(createTyping("vocab_g8", "critical_thinking_g8_typing",
          `Define: ${data.definition}`, data.term));
      }
      return q;
    },
  },
};

// ─── EXPORT & CONVENIENCE FUNCTION ──────────────────────────────────────────

export const ALL_GENERATORS = {
  G1: G1_Generators,
  G2: G2_Generators,
  G3: G3_Generators,
  G4: G4_Generators,
  G5: G5_Generators,
  G6: G6_Generators,
  G7: G7_Generators,
  G8: G8_Generators
};

/** Get generator by grade and topic.subtopic */
export function getEnglishGenerator(
  grade: number,
  topic: string,
  subtopic: string
): ((seed?: number) => CurriculumQuestion[]) | null {
  const genGrade = ALL_GENERATORS[`G${grade}` as keyof typeof ALL_GENERATORS];
  if (!genGrade) return null;
  const genTopic = genGrade[topic as keyof typeof genGrade];
  if (!genTopic) return null;
  const genSub = genTopic[subtopic as keyof typeof genTopic];
  return genSub || null;
}
