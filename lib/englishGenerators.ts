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
  if (grade <= 3) return rng() < 0.6; // Grade 2-3: 60% MCQ
  if (grade <= 6) return rng() < 0.5; // Grade 4-6: 50% MCQ
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
    nouns_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const nouns = ["dog", "cat", "ball", "tree", "house", "book", "girl", "boy", "car", "bird",
        "school", "park", "mom", "dad", "baby", "fish", "milk", "chair", "table", "bed"];
      const notNouns = ["run", "big", "fast", "happy", "jump", "slowly", "under", "and", "very", "the"];
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
        "write", "dance", "kick", "throw", "catch", "sit", "stand", "talk", "laugh", "cry"];
      const notVerbs = ["dog", "big", "red", "happy", "ball", "slowly", "under", "the", "very", "chair"];
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
  },
};

// ─── GRADE 2 GENERATORS ───────────────────────────────────────────────────

export const G2_Generators = {
  pos_g2: {
    nouns_common_proper_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const properNouns = ["London", "Sarah", "Monday", "January", "Texas", "Amazon", "Christmas", "Mr. Smith", "France", "Disney"];
      const commonNouns = ["city", "girl", "day", "month", "state", "river", "holiday", "teacher", "country", "park"];
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
      ];
      const esPlurals: [string, string][] = [
        ["box", "boxes"], ["bus", "buses"], ["dish", "dishes"], ["glass", "glasses"],
        ["watch", "watches"], ["fox", "foxes"], ["brush", "brushes"], ["bench", "benches"],
      ];
      const irregularPlurals: [string, string][] = [
        ["child", "children"], ["man", "men"], ["woman", "women"], ["mouse", "mice"],
        ["tooth", "teeth"], ["foot", "feet"], ["goose", "geese"], ["person", "people"],
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
      const actionVerbs = ["run", "jump", "play", "eat", "sleep", "read", "write", "sing", "dance", "swim"];
      const linkingVerbs = ["is", "am", "are", "was", "were", "seem", "become", "feel", "look", "appear"];
      const notVerbs = ["happy", "blue", "quickly", "small", "cat", "the", "under", "very"];
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
        ["a", "cake"], ["a", "lake"], ["a", "make"], ["a", "take"],
        ["e", "feet"], ["e", "meet"], ["e", "need"], ["e", "keep"],
        ["i", "bike"], ["i", "kite"], ["i", "five"], ["i", "mine"],
        ["o", "home"], ["o", "bone"], ["o", "rope"], ["o", "nose"],
        ["u", "cute"], ["u", "blue"], ["u", "tube"], ["u", "mule"],
      ];
      const shortVowels: [string, string][] = [
        ["a", "cat"], ["a", "hat"], ["a", "bat"], ["a", "man"],
        ["e", "pet"], ["e", "bed"], ["e", "red"], ["e", "wet"],
        ["i", "sit"], ["i", "pig"], ["i", "bin"], ["i", "big"],
        ["o", "dog"], ["o", "log"], ["o", "top"], ["o", "hot"],
        ["u", "cup"], ["u", "sun"], ["u", "fun"], ["u", "bus"],
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
        { team: "ai", words: ["rain", "main", "pain", "wait", "tail", "mail", "sail", "train"] },
        { team: "ea", words: ["beat", "meat", "seat", "read", "team", "clean", "dream", "stream"] },
        { team: "oa", words: ["boat", "coat", "goat", "road", "load", "soap", "toast", "float"] },
        { team: "oo", words: ["moon", "food", "cool", "pool", "room", "tool", "school", "spoon"] },
        { team: "ee", words: ["tree", "free", "deep", "keep", "sleep", "feet", "need", "seed"] },
        { team: "ou", words: ["out", "loud", "cloud", "house", "mouse", "found", "round", "sound"] },
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
      ];
      const abcOrderData = [
        { words: ["apple", "banana", "cherry"], first: "apple", question: "Which word comes FIRST in the dictionary?" },
        { words: ["dog", "cat", "bird"], first: "bird", question: "Which word comes FIRST in the dictionary?" },
        { words: ["zoo", "yard", "xray"], first: "xray", question: "Which word comes FIRST in the dictionary?" },
        { words: ["milk", "money", "map"], first: "map", question: "Which word comes FIRST in the dictionary?" },
        { words: ["sun", "star", "sky"], first: "sky", question: "Which word comes FIRST in the dictionary?" },
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
      const abstractNouns = ["love", "happiness", "courage", "friendship", "freedom", "beauty", "kindness", "honesty", "wisdom", "anger", "fear", "hope", "joy", "patience", "trust"];
      const concreteNouns = ["table", "dog", "book", "pencil", "flower", "car", "house", "ball", "chair", "tree", "rock", "apple"];
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
      ];
      const synonymData = [
        { word: "big", synonym: "large", antonym: "small" },
        { word: "happy", synonym: "glad", antonym: "sad" },
        { word: "fast", synonym: "quick", antonym: "slow" },
        { word: "brave", synonym: "courageous", antonym: "cowardly" },
        { word: "old", synonym: "ancient", antonym: "new" },
        { word: "start", synonym: "begin", antonym: "finish" },
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
        { modal: "can", sentences: ["I ___ swim.", "You ___ help.", "She ___ run fast.", "Dogs ___ bark."], meaning: "ability" },
        { modal: "could", sentences: ["She ___ help us.", "I ___ swim when I was younger.", "He ___ run faster then."], meaning: "past ability / possibility" },
        { modal: "may", sentences: ["You ___ leave now.", "___ I go to the party?", "She ___ have a second piece."], meaning: "permission / possibility" },
        { modal: "might", sentences: ["It ___ rain tomorrow.", "They ___ come later.", "I ___ be late."], meaning: "possibility" },
        { modal: "must", sentences: ["You ___ study hard.", "We ___ arrive on time.", "She ___ finish her homework."], meaning: "necessity / obligation" },
        { modal: "should", sentences: ["You ___ rest.", "He ___ practice more.", "We ___ call our parents."], meaning: "advice" },
        { modal: "would", sentences: ["I ___ like tea.", "She ___ prefer coffee.", "They ___ enjoy the movie."], meaning: "polite request / conditional" },
        { modal: "shall", sentences: ["___ we dance?", "___ I open the door?", "We ___ overcome this."], meaning: "suggestion / future" },
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
  },
};
// ─── GRADE 5 GENERATORS ───────────────────────────────────────────────────

export const G5_Generators = {
  pos_g5: {
    relative_pronouns_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pronouns = ["who", "which", "that", "whom", "whose"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(5, rng)) {
          const pro = pick(pronouns, rng);
          const wrong = pronouns.filter(p => p !== pro).slice(0, 3);
          q.push(createMCQ("pos_g5", "relative_pronouns_g5",
            "Which is a relative pronoun?", pro, wrong));
        } else {
          q.push(createTyping("pos_g5", "relative_pronouns_g5",
            "Name a relative pronoun:", pick(pronouns, rng)));
        }
      }
      return q;
    }
  },
  syntax_g5: {
    complex_sentences_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const conjunctions = ["because", "although", "while", "since", "if"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(5, rng)) {
          const conj = pick(conjunctions, rng);
          const wrong = conjunctions.filter(c => c !== conj).slice(0, 3);
          q.push(createMCQ("syntax_g5", "complex_sentences_g5",
            "Which shows cause and effect?", conj, wrong));
        } else {
          q.push(createTyping("syntax_g5", "complex_sentences_g5",
            "Write a complex sentence using 'because':",
            ["I eat because I am hungry", "Because I am hungry"]));
        }
      }
      return q;
    },
    commas_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const commaData = [
        { text: "I like apples, oranges, and bananas.", rule: "items in a list", correct: true },
        { text: "I like apples oranges and bananas.", rule: "items in a list", correct: false },
        { text: "On Monday, we went to the park.", rule: "intro clause", correct: true },
        { text: "On Monday we went to the park.", rule: "intro clause", correct: false },
        { text: "She ran quickly, and he walked slowly.", rule: "joining clauses", correct: true },
        { text: "She ran quickly and he walked slowly.", rule: "joining clauses", correct: false },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(5, rng)) {
          const commaSet = pick(commaData, rng);
          const correctAnswer = commaSet.correct ? "correct" : "incorrect";
          const wrong = commaData.filter(c => c.correct !== commaSet.correct).map(c => c.correct ? "correct" : "incorrect").slice(0, 3);
          q.push(createMCQ("syntax_g5", "commas_g5",
            `Is this comma usage correct? "${commaSet.text}"`, correctAnswer, wrong));
        } else {
          const commaSet = pick(commaData, rng);
          const answer = commaSet.correct ? "correct" : "incorrect";
          q.push(createTyping("syntax_g5", "commas_g5",
            `Is comma usage here correct or incorrect? "${commaSet.text}"`, answer));
        }
      }
      return q;
    }
  },
  vocab_g5: {
    greek_latin_roots_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rootData = [
        { root: "aqua", meaning: "water", examples: ["aquarium", "aquatic", "aqueduct"] },
        { root: "geo", meaning: "earth", examples: ["geography", "geology", "geometry"] },
        { root: "bio", meaning: "life", examples: ["biography", "biology", "biosphere"] },
        { root: "photo", meaning: "light", examples: ["photograph", "photosynthesis", "photocopier"] },
        { root: "chron", meaning: "time", examples: ["chronological", "chronicle", "synchronize"] },
        { root: "graph", meaning: "write", examples: ["biography", "geography", "paragraph"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(5, rng)) {
          const rootSet = pick(rootData, rng);
          const example = pick(rootSet.examples, rng);
          const wrong = rootData.filter(r => r.root !== rootSet.root).map(r => r.meaning).slice(0, 3);
          q.push(createMCQ("vocab_g5", "greek_latin_roots_g5",
            `What does the root '${rootSet.root}' mean in '${example}'?`, rootSet.meaning, wrong));
        } else {
          const rootSet = pick(rootData, rng);
          q.push(createTyping("vocab_g5", "greek_latin_roots_g5",
            `What does the root '${rootSet.root}' mean?`, rootSet.meaning));
        }
      }
      return q;
    },
    figurative_language_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const figData = [
        { phrase: "'The world is my oyster'", device: "metaphor", meaning: "everything is possible for me" },
        { phrase: "'She is as quiet as a mouse'", device: "simile", meaning: "very quiet" },
        { phrase: "'The trees danced in the wind'", device: "personification", meaning: "trees moved gracefully" },
        { phrase: "'I've told you a million times'", device: "hyperbole", meaning: "I've told you many times" },
        { phrase: "'The rain poured down'", device: "onomatopoeia", meaning: "rain fell heavily" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(5, rng)) {
          const figSet = pick(figData, rng);
          const wrong = figData.filter(f => f.device !== figSet.device).map(f => f.device).slice(0, 3);
          q.push(createMCQ("vocab_g5", "figurative_language_g5",
            `What figurative device is ${figSet.phrase}?`, figSet.device, wrong));
        } else {
          const figSet = pick(figData, rng);
          q.push(createTyping("vocab_g5", "figurative_language_g5",
            `What figurative device is ${figSet.phrase}?`, figSet.device));
        }
      }
      return q;
    },
    synonyms_antonyms_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordData = [
        { word: "ancient", synonym: "old", antonym: "modern" },
        { word: "brilliant", synonym: "bright", antonym: "dull" },
        { word: "humble", synonym: "modest", antonym: "proud" },
        { word: "scarce", synonym: "rare", antonym: "abundant" },
        { word: "feeble", synonym: "weak", antonym: "strong" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(5, rng)) {
          const wordSet = pick(wordData, rng);
          const isAntonym = rng() > 0.5;
          if (isAntonym) {
            const wrong = wordData.filter(w => w.word !== wordSet.word).map(w => w.antonym).slice(0, 3);
            q.push(createMCQ("vocab_g5", "synonyms_antonyms_g5",
              `What is the ANTONYM of '${wordSet.word}'?`, wordSet.antonym, wrong));
          } else {
            const wrong = wordData.filter(w => w.word !== wordSet.word).map(w => w.synonym).slice(0, 3);
            q.push(createMCQ("vocab_g5", "synonyms_antonyms_g5",
              `What is the SYNONYM of '${wordSet.word}'?`, wordSet.synonym, wrong));
          }
        } else {
          const wordSet = pick(wordData, rng);
          const isAntonym = rng() > 0.5;
          q.push(createTyping("vocab_g5", "synonyms_antonyms_g5",
            `Name a ${isAntonym ? "antonym" : "synonym"} of '${wordSet.word}':`,
            isAntonym ? wordSet.antonym : wordSet.synonym));
        }
      }
      return q;
    },
    prefixes_suffixes_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const affixData = [
        { affix: "multi", word: "multilingual", meaning: "many languages" },
        { affix: "trans", word: "translate", meaning: "carry across" },
        { affix: "ible/able", word: "responsible", meaning: "able to respond" },
        { affix: "ment", word: "agreement", meaning: "state of agreeing" },
        { affix: "ity", word: "stability", meaning: "quality of being stable" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(5, rng)) {
          const data = pick(affixData, rng);
          const wrong = ["prefix", "suffix", "root"].slice(0, 3);
          q.push(createMCQ("vocab_g5", "prefixes_suffixes_g5",
            `What does '${data.affix}' contribute to the meaning of '${data.word}'?`, data.meaning, wrong));
        } else {
          const data = pick(affixData, rng);
          q.push(createTyping("vocab_g5", "prefixes_suffixes_g5",
            `What does '${data.affix}' mean in '${data.word}'?`, data.meaning));
        }
      }
      return q;
    }
  },
  grammar_g5: {
    apostrophes_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const apostropheData = [
        { correct: "The cat's tail is fluffy.", wrong: ["The cats tail is fluffy.", "The cats' tail is fluffy.", "The catsss tail is fluffy."] },
        { correct: "The children's books are on the shelf.", wrong: ["The children books are on the shelf.", "The childrens books are on the shelf.", "The childs books are on the shelf."] },
        { correct: "Sarah's pencil is red.", wrong: ["Sarahs pencil is red.", "Sarah pencil is red.", "Sarah's' pencil is red."] },
        { correct: "The dogs' barking was loud.", wrong: ["The dogs barking was loud.", "The dogs's barking was loud.", "The dog's barking was loud."] }
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(apostropheData, rng);
        q.push(createMCQ("grammar_g5", "apostrophes_g5", "Which sentence uses apostrophes correctly?", data.correct, data.wrong));
      }
      return q;
    },
    correlative_conj_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const corrData = [
        { pair: "either...or", sentence: "___ you like apples ___ you like oranges.", wrong: ["neither...nor", "both...and", "not only...but also"] },
        { pair: "neither...nor", sentence: "___ John ___ Mary can come to the party.", wrong: ["either...or", "both...and", "not only...but also"] },
        { pair: "both...and", sentence: "___ Sarah ___ Tom passed the test.", wrong: ["either...or", "neither...nor", "not only...but also"] },
        { pair: "not only...but also", sentence: "He is ___ smart ___ hardworking.", wrong: ["either...or", "both...and", "neither...nor"] }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(5, rng)) {
          const data = pick(corrData, rng);
          q.push(createMCQ("grammar_g5", "correlative_conj_g5", `Fill in: "${data.sentence}"`, data.pair, data.wrong));
        } else {
          const data = pick(corrData, rng);
          q.push(createTyping("grammar_g5", "correlative_conj_g5", `Name a correlative conjunction pair:`, pick(["either...or", "neither...nor", "both...and"], rng)));
        }
      }
      return q;
    },
    combining_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pairData = [
        { sent1: "The cat was black.", sent2: "It had blue eyes.", combined: "The black cat had blue eyes." },
        { sent1: "She likes pizza.", sent2: "She likes pasta.", combined: "She likes both pizza and pasta." },
        { sent1: "He ran fast.", sent2: "He was tired.", combined: "Although he was tired, he ran fast." }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(5, rng)) {
          const data = pick(pairData, rng);
          const wrong = pairData.filter(p => p !== data).map(p => p.combined).slice(0, 3);
          q.push(createMCQ("grammar_g5", "combining_g5", `Combine: "${data.sent1}" + "${data.sent2}"`, data.combined, wrong));
        } else {
          const data = pick(pairData, rng);
          q.push(createTyping("grammar_g5", "combining_g5", `Combine these sentences: "${data.sent1}" "${data.sent2}"`, data.combined));
        }
      }
      return q;
    }
  },
  literary_g5: {
    theme_g5: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const themeData = [
        { excerpt: "The boy worked hard every day and achieved his dreams despite many obstacles.", theme: "perseverance" },
        { excerpt: "The friends stuck together through good times and bad, always supporting each other.", theme: "friendship" },
        { excerpt: "She realized that money couldn't buy happiness; she found joy in simple things.", theme: "material things aren't everything" },
        { excerpt: "He forgave his enemy and found peace, understanding that revenge brings more pain.", theme: "forgiveness" },
        { excerpt: "The lost child learned to find her way home by trusting herself and her instincts.", theme: "self-reliance" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(5, rng)) {
          const data = pick(themeData, rng);
          const wrong = ["conflict", "suspense", "mystery"].slice(0, 3);
          q.push(createMCQ("literary_g5", "theme_g5",
            `What is the theme shown in this passage? "${data.excerpt}"`, data.theme, wrong));
        } else {
          const data = pick(themeData, rng);
          q.push(createTyping("literary_g5", "theme_g5",
            `Identify the theme: "${data.excerpt}"`, data.theme));
        }
      }
      return q;
    }
  }
};

// ─── GRADE 6 GENERATORS ───────────────────────────────────────────────────

export const G6_Generators = {
  syntax_g6: {
    active_passive_voice_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pairs = [
        ["The dog ate the food", "The food was eaten by the dog"],
        ["She wrote the book", "The book was written by her"]
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(6, rng)) {
          const [active, passive] = pick(pairs, rng);
          const wrong = ["It was wrote", "She was written", "The book wrote"];
          q.push(createMCQ("syntax_g6", "active_passive_voice_g6",
            `Which is PASSIVE? "${active}"`, passive, wrong));
        } else {
          const [active] = pick(pairs, rng);
          q.push(createTyping("syntax_g6", "active_passive_voice_g6",
            `Convert to passive: "${active}"`,
            ["was eaten", "was written"]));
        }
      }
      return q;
    }
  },
  literary_g6: {
    literary_devices_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      // Pre-paired: device with valid examples (VALIDÁLT — példa valóban azt az elemet mutatja)
      const deviceData = [
        { device: "alliteration", examples: ["'Peter Piper picked peppers'", "'Sally sells seashells'", "'The big brown bear'", "'Silly Sally swam swiftly'"] },
        { device: "metaphor", examples: ["'Time is money'", "'The world is a stage'", "'His heart is ice'", "'She is a flower'"] },
        { device: "simile", examples: ["'Fast as lightning'", "'Bright like a star'", "'Heavy as lead'", "'Sleep like a baby'"] },
        { device: "personification", examples: ["'The wind whispered'", "'The stars danced'", "'The tree swayed gracefully'", "'The sun smiled down'"] },
        { device: "hyperbole", examples: ["'I've told you a million times'", "'I'm dying of hunger'", "'That's the best thing ever'", "'I could sleep for a year'"] },
      ];
      const devices = deviceData.map(d => d.device);
      for (let i = 0; i < 30; i++) {
        if (isMCQ(6, rng)) {
          const deviceSet = pick(deviceData, rng);
          const example = pick(deviceSet.examples, rng);
          const wrong = devices.filter(d => d !== deviceSet.device).slice(0, 3);
          q.push(createMCQ("literary_g6", "literary_devices_g6",
            `What device is ${example}?`, deviceSet.device, wrong));
        } else {
          q.push(createTyping("literary_g6", "literary_devices_g6",
            "Name a literary device:", pick(devices, rng)));
        }
      }
      return q;
    },
    character_traits_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const characterData = [
        { description: "She always helps others and shows kindness.", trait: "compassionate", wrong: ["selfish", "arrogant", "lazy"] },
        { description: "He never gives up, even when faced with challenges.", trait: "determined", wrong: ["fearful", "stubborn", "weak"] },
        { description: "She speaks truthfully and keeps her promises.", trait: "honest", wrong: ["deceitful", "unreliable", "sneaky"] },
        { description: "He remains calm and thinks carefully before acting.", trait: "wise", wrong: ["impulsive", "foolish", "hasty"] },
        { description: "She faces difficult situations with courage.", trait: "brave", wrong: ["timid", "cowardly", "nervous"] }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(6, rng)) {
          const data = pick(characterData, rng);
          q.push(createMCQ("literary_g6", "character_traits_g6",
            `What character trait does this show? "${data.description}"`, data.trait, data.wrong));
        } else {
          const data = pick(characterData, rng);
          q.push(createTyping("literary_g6", "character_traits_g6",
            `Identify the trait: "${data.description}"`, data.trait));
        }
      }
      return q;
    }
  },
  vocab_g6: {
    synonyms_homographs_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordPairData = [
        { pair: "brilliant", syn1: "bright", syn2: "intelligent", sentence: "The ___ light filled the room." },
        { pair: "graceful", syn1: "elegant", syn2: "moving with poise", sentence: "She was a ___ dancer." },
        { pair: "profound", syn1: "deep", syn2: "wise and meaningful", sentence: "He made a ___ observation about life." },
        { pair: "vivid", syn1: "bright colors", syn2: "clear and sharp", sentence: "She had a ___ memory of the event." },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(6, rng)) {
          const wordSet = pick(wordPairData, rng);
          const synonym = pick([wordSet.syn1, wordSet.syn2], rng);
          const wrong = ["opposite meaning", "unknown word", "too difficult"].slice(0, 3);
          q.push(createMCQ("vocab_g6", "synonyms_homographs_g6",
            `What is a synonym of '${wordSet.pair}' in context?`, synonym, wrong));
        } else {
          const wordSet = pick(wordPairData, rng);
          q.push(createTyping("vocab_g6", "synonyms_homographs_g6",
            `What is a synonym of '${wordSet.pair}'?`, [wordSet.syn1, wordSet.syn2]));
        }
      }
      return q;
    },
    analogies_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const analogyData = [
        { analogy: "Hand is to arm as foot is to", answer: "leg", wrong: ["shoe", "toe", "ankle"] },
        { analogy: "Teacher is to student as doctor is to", answer: "patient", wrong: ["hospital", "nurse", "medicine"] },
        { analogy: "Book is to author as painting is to", answer: "artist", wrong: ["canvas", "museum", "brush"] },
        { analogy: "Small is to big as cold is to", answer: "hot", wrong: ["warm", "cool", "ice"] },
        { analogy: "Puppy is to dog as kitten is to", answer: "cat", wrong: ["mouse", "animal", "pet"] },
        { analogy: "Inch is to foot as second is to", answer: "minute", wrong: ["hour", "day", "time"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(6, rng)) {
          const analogySet = pick(analogyData, rng);
          q.push(createMCQ("vocab_g6", "analogies_g6",
            analogySet.analogy, analogySet.answer, analogySet.wrong));
        } else {
          const analogySet = pick(analogyData, rng);
          q.push(createTyping("vocab_g6", "analogies_g6",
            analogySet.analogy, analogySet.answer));
        }
      }
      return q;
    },
    synonyms_antonyms_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordData = [
        { word: "meticulous", synonym: "careful", antonym: "careless" },
        { word: "tenacious", synonym: "persistent", antonym: "quitter" },
        { word: "benevolent", synonym: "kind", antonym: "cruel" },
        { word: "sagacious", synonym: "wise", antonym: "foolish" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(6, rng)) {
          const wordSet = pick(wordData, rng);
          const isAntonym = rng() > 0.5;
          if (isAntonym) {
            const wrong = wordData.filter(w => w.word !== wordSet.word).map(w => w.antonym).slice(0, 3);
            q.push(createMCQ("vocab_g6", "synonyms_antonyms_g6", `What is the ANTONYM of '${wordSet.word}'?`, wordSet.antonym, wrong));
          } else {
            const wrong = wordData.filter(w => w.word !== wordSet.word).map(w => w.synonym).slice(0, 3);
            q.push(createMCQ("vocab_g6", "synonyms_antonyms_g6", `What is the SYNONYM of '${wordSet.word}'?`, wordSet.synonym, wrong));
          }
        } else {
          const wordSet = pick(wordData, rng);
          const isAntonym = rng() > 0.5;
          q.push(createTyping("vocab_g6", "synonyms_antonyms_g6",
            `Name a ${isAntonym ? "antonym" : "synonym"} of '${wordSet.word}':`,
            isAntonym ? wordSet.antonym : wordSet.synonym));
        }
      }
      return q;
    },
    academic_vocab_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordData = [
        { word: "curriculum", meaning: "courses offered by a school" },
        { word: "diverse", meaning: "varied or different" },
        { word: "analyze", meaning: "examine closely and in detail" },
        { word: "hypothesis", meaning: "proposed explanation" },
        { word: "evaluate", meaning: "assess the value or quality" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(6, rng)) {
          const data = pick(wordData, rng);
          const wrong = ["irrelevant", "temporal", "hypothetical"].slice(0, 3);
          q.push(createMCQ("vocab_g6", "academic_vocab_g6", `What does '${data.word}' mean?`, data.meaning, wrong));
        } else {
          const data = pick(wordData, rng);
          q.push(createTyping("vocab_g6", "academic_vocab_g6", `Define '${data.word}':`, data.meaning));
        }
      }
      return q;
    }
  },
  grammar_g6: {
    articles_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const articleData = [
        { correct: "I saw a movie and an apple.", wrong: ["I saw a movie and a apple.", "I saw an movie and an apple.", "I saw the movie and the apple."] },
        { correct: "The teacher gave the class their homework.", wrong: ["A teacher gave a class their homework.", "An teacher gave an class their homework.", "The teacher gave a class their homework."] },
        { correct: "She is an engineer and a musician.", wrong: ["She is a engineer and a musician.", "She is the engineer and the musician.", "She is an engineer and an musician."] }
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(articleData, rng);
        q.push(createMCQ("grammar_g6", "articles_g6", "Which sentence uses articles correctly?", data.correct, data.wrong));
      }
      return q;
    },
    clauses_g6: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const clauseData = [
        { type: "dependent", example: "because it was raining", id: "dep1" },
        { type: "dependent", example: "when she arrived", id: "dep2" },
        { type: "independent", example: "The dog barked loudly", id: "ind1" },
        { type: "independent", example: "He studied all night", id: "ind2" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(6, rng)) {
          const clause = pick(clauseData, rng);
          const typeLabel = clause.type === "independent" ? "INDEPENDENT" : "DEPENDENT";
          const wrong = clauseData.filter(c => c.type !== clause.type).map(c => c.type).slice(0, 3);
          q.push(createMCQ("grammar_g6", "clauses_g6", `Is this an ${typeLabel} clause? "${clause.example}"`, clause.type, wrong));
        } else {
          const clause = pick(clauseData, rng);
          q.push(createTyping("grammar_g6", "clauses_g6", "Name a type of clause: independent or dependent:", pick(["independent", "dependent"], rng)));
        }
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
  },
};

// ─── GRADE 8 GENERATORS ───────────────────────────────────────────────────

export const G8_Generators = {
  syntax_g8: {
    syntax_devices_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const devices = ["anaphora", "epistrophe", "parataxis", "hypotaxis", "inversion"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const device = pick(devices, rng);
          const wrong = devices.filter(d => d !== device).slice(0, 3);
          q.push(createMCQ("syntax_g8", "syntax_devices_g8",
            "Which repeats at line beginnings?", device, wrong));
        } else {
          q.push(createTyping("syntax_g8", "syntax_devices_g8",
            "Name a syntactic device:", pick(devices, rng)));
        }
      }
      return q;
    }
  },
  analysis_g8: {
    critical_theory_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      // Pre-paired: theory with valid descriptions (VALIDÁLT — leírás valóban azt a teóriát jellemzi)
      const theoryData = [
        { theory: "New Historicism", descriptions: ["examines texts in historical context", "connects literature to its time period", "studies historical events alongside texts", "analyzes cultural and social conditions"] },
        { theory: "Marxist Criticism", descriptions: ["analyzes power, class, and economics", "focuses on wealth inequality", "examines working-class perspectives", "studies capital and labor relations"] },
        { theory: "Feminist Criticism", descriptions: ["examines gender roles and representation", "studies women's perspectives in texts", "analyzes how women are portrayed", "focuses on gender equality issues"] },
        { theory: "Queer Theory", descriptions: ["challenges norms of gender and sexuality", "questions traditional identity categories", "examines LGBTQ+ perspectives", "disrupts conventional thinking about sexuality"] },
      ];
      const theories = theoryData.map(t => t.theory);
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const theorySet = pick(theoryData, rng);
          const description = pick(theorySet.descriptions, rng);
          const wrong = theories.filter(t => t !== theorySet.theory).slice(0, 3);
          q.push(createMCQ("analysis_g8", "critical_theory_g8",
            `Which theory ${description}?`, theorySet.theory, wrong));
        } else {
          q.push(createTyping("analysis_g8", "critical_theory_g8",
            "Name a critical theory:", pick(theories, rng)));
        }
      }
      return q;
    }
  },
  vocab_g8: {
    greek_latin_advanced_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rootData = [
        { root: "morph", meaning: "shape or form", examples: ["metamorphosis", "morphology", "anthropomorphic"] },
        { root: "psych", meaning: "mind", examples: ["psychology", "psychotic", "psychoanalysis"] },
        { root: "path", meaning: "feeling or disease", examples: ["empathy", "apathy", "pathology"] },
        { root: "arch", meaning: "ancient or chief", examples: ["archaeology", "architect", "monarch"] },
        { root: "scop", meaning: "to see or look", examples: ["telescope", "microscope", "horoscope"] },
        { root: "logue", meaning: "word or study", examples: ["dialogue", "monologue", "catalog"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const rootSet = pick(rootData, rng);
          const example = pick(rootSet.examples, rng);
          const wrong = rootData.filter(r => r.root !== rootSet.root).map(r => r.meaning).slice(0, 3);
          q.push(createMCQ("vocab_g8", "greek_latin_advanced_g8",
            `What does the root '${rootSet.root}' mean in '${example}'?`, rootSet.meaning, wrong));
        } else {
          const rootSet = pick(rootData, rng);
          q.push(createTyping("vocab_g8", "greek_latin_advanced_g8",
            `What does '${rootSet.root}' mean?`, rootSet.meaning));
        }
      }
      return q;
    },
    context_clues_advanced_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "'His obsequious behavior, always flattering and submissive, made others uncomfortable.' What does 'obsequious' mean?", answer: "overly flattering and submissive", wrong: ["confident", "rude", "independent"] },
        { sentence: "'The author's verbose writing style, full of unnecessary words and lengthy descriptions, became tedious.' What does 'verbose' mean?", answer: "using too many words", wrong: ["concise", "poetic", "creative"] },
        { sentence: "'Her sanguine outlook, despite evidence to the contrary, remained optimistic.' What does 'sanguine' mean?", answer: "optimistic and hopeful", wrong: ["pessimistic", "angry", "confused"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const sentSet = pick(sentenceData, rng);
          q.push(createMCQ("vocab_g8", "context_clues_advanced_g8", sentSet.sentence, sentSet.answer, sentSet.wrong));
        } else {
          const sentSet = pick(sentenceData, rng);
          q.push(createTyping("vocab_g8", "context_clues_advanced_g8", sentSet.sentence, sentSet.answer));
        }
      }
      return q;
    },
    synonyms_antonyms_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordData = [
        { word: "obfuscate", synonym: "obscure", antonym: "clarify" },
        { word: "perfunctory", synonym: "cursory", antonym: "thorough" },
        { word: "taciturn", synonym: "reticent", antonym: "verbose" },
        { word: "magnanimous", synonym: "generous", antonym: "petty" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const wordSet = pick(wordData, rng);
          const isAntonym = rng() > 0.5;
          if (isAntonym) {
            const wrong = wordData.filter(w => w.word !== wordSet.word).map(w => w.antonym).slice(0, 3);
            q.push(createMCQ("vocab_g8", "synonyms_antonyms_g8", `What is the ANTONYM of '${wordSet.word}'?`, wordSet.antonym, wrong));
          } else {
            const wrong = wordData.filter(w => w.word !== wordSet.word).map(w => w.synonym).slice(0, 3);
            q.push(createMCQ("vocab_g8", "synonyms_antonyms_g8", `What is the SYNONYM of '${wordSet.word}'?`, wordSet.synonym, wrong));
          }
        } else {
          const wordSet = pick(wordData, rng);
          const isAntonym = rng() > 0.5;
          q.push(createTyping("vocab_g8", "synonyms_antonyms_g8",
            `Name a ${isAntonym ? "antonym" : "synonym"} of '${wordSet.word}':`,
            isAntonym ? wordSet.antonym : wordSet.synonym));
        }
      }
      return q;
    },
    academic_vocab_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordData = [
        { word: "paradigm", meaning: "a typical example or pattern", context: "Kuhn introduced a new ___ in science." },
        { word: "facilitate", meaning: "to make easier", context: "Technology can ___ communication." },
        { word: "pragmatic", meaning: "practical and realistic", context: "We need a ___ approach to solve this problem." },
        { word: "inherent", meaning: "built-in or natural", context: "There is an ___ risk in any investment." },
        { word: "synthesize", meaning: "to combine parts into a whole", context: "The researcher will ___ the findings." }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(wordData, rng);
          const wrong = ["irrelevant", "temporal", "hypothetical"].slice(0, 3);
          q.push(createMCQ("vocab_g8", "academic_vocab_g8", `What does '${data.word}' mean?`, data.meaning, wrong));
        } else {
          const data = pick(wordData, rng);
          q.push(createTyping("vocab_g8", "academic_vocab_g8", `Define '${data.word}':`, data.meaning));
        }
      }
      return q;
    },
    nuances_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const nuanceData = [
        { sentence: "'Slender' vs 'scrawny' - She has a ___ figure (positive connotation).", answer: "slender", wrong: ["scrawny"] },
        { sentence: "'Modest' vs 'humble' - He was ___ about his achievements (slightly different meaning).", answer: "modest", wrong: ["humble"] },
        { sentence: "'Inquisitive' vs 'nosy' - The child was ___ about nature (positive connotation).", answer: "inquisitive", wrong: ["nosy"] },
        { sentence: "'Thrifty' vs 'stingy' - She is ___ with her money (positive connotation).", answer: "thrifty", wrong: ["stingy"] },
        { sentence: "'Determined' vs 'stubborn' - He remained ___ despite obstacles (positive).", answer: "determined", wrong: ["stubborn"] }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(nuanceData, rng);
          const wrongOptions = [...data.wrong, "neutral", "irrelevant"].slice(0, 3);
          q.push(createMCQ("vocab_g8", "nuances_g8",
            `Which word fits best? ${data.sentence}`, data.answer, wrongOptions));
        } else {
          const data = pick(nuanceData, rng);
          q.push(createTyping("vocab_g8", "nuances_g8",
            `Complete: ${data.sentence}`, data.answer));
        }
      }
      return q;
    }
  },
  grammar_g8: {
    dashes_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const dashData = [
        { correct: "The author—known for his wit—published a new book.", wrong: ["The author—known for his wit published a new book.", "The author known for his wit—published a new book.", "The author—known for his wit—published, a new book."] },
        { correct: "She wanted three things—honesty, loyalty, and respect.", wrong: ["She wanted three things—honesty loyalty and respect.", "She wanted three things: honesty, loyalty, and respect.", "She wanted three things,—honesty, loyalty, and respect."] },
        { correct: "The storm—which lasted for hours—caused damage.", wrong: ["The storm which lasted for hours caused damage.", "The storm—which lasted for hours caused damage.", "The storm, which lasted for hours, caused damage."] }
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(dashData, rng);
        q.push(createMCQ("grammar_g8", "dashes_g8", "Which uses em dashes correctly?", data.correct, data.wrong));
      }
      return q;
    },
    active_passive_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const voiceData = [
        { active: "The scientist discovered a new element.", passive: "A new element was discovered by the scientist." },
        { active: "The chef prepared a delicious meal.", passive: "A delicious meal was prepared by the chef." },
        { active: "The committee approved the proposal.", passive: "The proposal was approved by the committee." }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const voice = pick(voiceData, rng);
          const isActive = rng() > 0.5;
          const sent = isActive ? voice.active : voice.passive;
          const type = isActive ? "active" : "passive";
          q.push(createMCQ("grammar_g8", "active_passive_g8", `Identify the voice: "${sent}"`, type, ["active", "passive"].filter(v => v !== type)));
        } else {
          const voice = pick(voiceData, rng);
          const isActive = rng() > 0.5;
          const sent = isActive ? voice.active : voice.passive;
          const type = isActive ? "active" : "passive";
          q.push(createTyping("grammar_g8", "active_passive_g8", `Is this active or passive? "${sent}"`, type));
        }
      }
      return q;
    },
    absolute_phrases_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const phraseData = [
        { sentence: "The storm having passed, we ventured outside.", meaning: "With the storm passed, we went out" },
        { sentence: "All things considered, she made a wise choice.", meaning: "When we think about everything, the choice was wise" },
        { sentence: "The work complete, they celebrated.", meaning: "After the work was done, they celebrated" },
        { sentence: "Weather permitting, we'll have a picnic tomorrow.", meaning: "If the weather allows, we'll have a picnic" },
        { sentence: "His patience exhausted, he finally spoke up.", meaning: "After losing patience, he finally spoke" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(phraseData, rng);
          const wrong = ["participial phrase", "appositional phrase", "prepositional phrase"].slice(0, 3);
          q.push(createMCQ("grammar_g8", "absolute_phrases_g8",
            `Identify the absolute phrase: "${data.sentence}"`, "absolute phrase", wrong));
        } else {
          const data = pick(phraseData, rng);
          q.push(createTyping("grammar_g8", "absolute_phrases_g8",
            `What does the absolute phrase mean in: "${data.sentence}"?`, data.meaning));
        }
      }
      return q;
    },
    appositives_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { correct: "My friend Sarah, the soccer player, won the championship.", noun: "Sarah", appositive: "the soccer player" },
        { correct: "The novel 'Pride and Prejudice,' a classic romance, was published in 1813.", noun: "Pride and Prejudice", appositive: "a classic romance" },
        { correct: "Dr. Martinez, our history teacher, assigned a research project.", noun: "Dr. Martinez", appositive: "our history teacher" },
        { correct: "Paris, the capital of France, is famous for its art.", noun: "Paris", appositive: "the capital of France" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(sentenceData, rng);
          const wrong = data.correct.split(",").filter(p => p.trim() !== data.appositive.trim()).slice(0, 3);
          q.push(createMCQ("grammar_g8", "appositives_g8",
            `Which appositive correctly renames the noun in: "${data.correct}"?`, data.appositive, wrong));
        } else {
          const data = pick(sentenceData, rng);
          q.push(createTyping("grammar_g8", "appositives_g8",
            `What is the appositive phrase in: "${data.correct}"?`, data.appositive));
        }
      }
      return q;
    },
    clausal_complements_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const clauseData = [
        { sentence: "The teacher explained what the assignment required.", complement: "what the assignment required", type: "noun clause" },
        { sentence: "She hoped that he would arrive on time.", complement: "that he would arrive on time", type: "noun clause" },
        { sentence: "We discovered where the lost key was hiding.", complement: "where the lost key was hiding", type: "noun clause" },
        { sentence: "His comment that rain was coming proved accurate.", complement: "that rain was coming", type: "appositive clause" },
        { sentence: "The fact that she succeeded shows her determination.", complement: "that she succeeded", type: "appositive clause" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(clauseData, rng);
          const wrong = ["prepositional phrase", "participial phrase", "absolute phrase"].slice(0, 3);
          q.push(createMCQ("grammar_g8", "clausal_complements_g8",
            `In "${data.sentence}", the complement clause is:`, data.complement, wrong));
        } else {
          const data = pick(clauseData, rng);
          q.push(createTyping("grammar_g8", "clausal_complements_g8",
            `Identify the clause in: "${data.sentence}"`, data.complement));
        }
      }
      return q;
    }
  },
  punctuation_g8: {
    semicolons_colons_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const data = [
        { correct: "She had many talents: singing, dancing, and painting.", rule: "colon before a list" },
        { correct: "He studied for hours; therefore, he passed the test.", rule: "semicolon between independent clauses" },
        { correct: "The schedule was as follows: Monday at 10, Tuesday at 2.", rule: "colon introducing a series" },
        { correct: "I bought groceries; she cooked dinner.", rule: "semicolon joining independent clauses" }
      ];
      for (let i = 0; i < 30; i++) {
        const item = pick(data, rng);
        const wrong = data.filter(d => d !== item).map(d => d.correct).slice(0, 3);
        q.push(createMCQ("punctuation_g8", "semicolons_colons_g8", "Which sentence uses semicolons/colons correctly?", item.correct, wrong));
      }
      return q;
    }
  },
  literature_g8: {
    allusion_irony_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const literaryData = [
        { text: "He is a real Sherlock Holmes.", type: "allusion", example: "reference to detective" },
        { text: "The traffic was moving at a snail's pace.", type: "irony", example: "metaphor for slowness" },
        { text: "She said 'What wonderful weather!' during a thunderstorm.", type: "irony", example: "opposite meaning" },
        { text: "He's a regular Romeo when it comes to romance.", type: "allusion", example: "reference to lover" },
        { text: "The prison guard was a real humanitarian.", type: "irony", example: "sarcastic" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(literaryData, rng);
          const wrong = ["metaphor", "simile", "hyperbole"].slice(0, 3);
          q.push(createMCQ("literature_g8", "allusion_irony_g8",
            `Is this allusion or irony? "${data.text}"`, data.type, wrong));
        } else {
          const data = pick(literaryData, rng);
          q.push(createTyping("literature_g8", "allusion_irony_g8",
            `Identify: "${data.text}"`, data.type));
        }
      }
      return q;
    },
    assonance_consonance_g8: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const soundData = [
        { text: "The light of the kite", device: "assonance", vowel: "long i sound" },
        { text: "She sells seashells by the seashore", device: "sibilance", sound: "s consonant" },
        { text: "The wind whistled through the willows", device: "consonance", consonant: "w consonant" },
        { text: "Fleet feet sweep by sleeping soldiers", device: "consonance", consonant: "f and s sounds" },
        { text: "The sad, sweet scent of summer", device: "assonance", vowel: "short e sound" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const data = pick(soundData, rng);
          const wrong = ["alliteration", "onomatopoeia", "rhyme"].slice(0, 3);
          q.push(createMCQ("literature_g8", "assonance_consonance_g8",
            `What sound device is used in: "${data.text}"?`, data.device, wrong));
        } else {
          const data = pick(soundData, rng);
          q.push(createTyping("literature_g8", "assonance_consonance_g8",
            `Identify the sound device: "${data.text}"`, data.device));
        }
      }
      return q;
    }
  }
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
