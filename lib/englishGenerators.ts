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
      const pairs = [["sh", "ship"], ["ch", "chat"], ["th", "them"], ["wh", "when"]];
      for (let i = 0; i < 30; i++) {
        const [dg, word] = pick(pairs, rng);
        const wrong = pairs.filter(p => p[0] !== dg).map(p => p[0]);
        q.push(createMCQ("phonics_g1", "digraphs_g1",
          `Which two letters make ONE sound in '${word}'?`, dg, wrong));
      }
      return q;
    },
    blends_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      // Pre-paired: each blend with its valid words (VALIDÁLT — minden szó valóban tartalmazza a blend-et)
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
    rhyming_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rhymes = [["cat", "bat"], ["dog", "log"], ["hat", "mat"], ["sit", "fit"], ["sun", "fun"], ["bed", "red"], ["pig", "dig"]];
      for (let i = 0; i < 30; i++) {
        const [w1, w2] = pick(rhymes, rng);
        const correct = rng() > 0.5 ? w1 : w2;
        const target = correct === w1 ? w2 : w1;
        const wrong = rhymes.filter(r => !r.includes(target)).map(r => pick(r, rng)).slice(0, 3);
        q.push(createMCQ("phonics_g1", "rhyming_g1", `Which word rhymes with '${correct}'?`, target, wrong));
      }
      return q;
    }
  },
  grammar_g1: {
    articles_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "___ cat is sleeping.", answer: "A", wrong: ["The", "An", "Is"] },
        { sentence: "___ elephant is large.", answer: "An", wrong: ["A", "The", "It"] },
        { sentence: "___ book on the shelf is mine.", answer: "The", wrong: ["A", "An", "That"] },
        { sentence: "I see ___ apple and ___ orange.", answer: "an|an", wrong: ["a|a", "the|the", "an|a"] },
        { sentence: "___ dog barked at the mailman.", answer: "A", wrong: ["The", "An", "This"] }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(1, rng)) {
          const sent = pick(sentenceData, rng);
          q.push(createMCQ("grammar_g1", "articles_g1", `Fill in: "${sent.sentence}"`, sent.answer, sent.wrong));
        } else {
          const sent = pick(sentenceData, rng);
          q.push(createTyping("grammar_g1", "articles_g1", `Fill in: "${sent.sentence}"`, sent.answer));
        }
      }
      return q;
    },
    capitalization_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { wrong: "the cat sat on the mat.", correct: "The cat sat on the mat.", word: "The" },
        { wrong: "my name is john.", correct: "My name is John.", word: "John" },
        { wrong: "she lives in new york.", correct: "She lives in New York.", word: "New York" },
        { wrong: "monday is the first day.", correct: "Monday is the first day.", word: "Monday" },
        { wrong: "i like to play.", correct: "I like to play.", word: "I" }
      ];
      for (let i = 0; i < 30; i++) {
        const sent = pick(sentenceData, rng);
        const correct = sent.correct;
        const wrong = [sent.wrong, shuffle(sentenceData, rng)[0].correct, shuffle(sentenceData, rng)[0].correct].slice(0, 3);
        q.push(createMCQ("grammar_g1", "capitalization_g1", `Which sentence is capitalized correctly?`, correct, wrong));
      }
      return q;
    }
  },
  writing_g1: {
    compound_words_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pairs = [["sun", "flower", "sunflower"], ["rain", "bow", "rainbow"], ["foot", "ball", "football"], ["some", "one", "someone"], ["any", "thing", "anything"], ["back", "ground", "background"]];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(1, rng)) {
          const [w1, w2, compound] = pick(pairs, rng);
          const wrong = pairs.filter(p => p[2] !== compound).map(p => p[2]).slice(0, 3);
          q.push(createMCQ("writing_g1", "compound_words_g1", `What compound word is made from '${w1}' and '${w2}'?`, compound, wrong));
        } else {
          const [w1, w2, compound] = pick(pairs, rng);
          q.push(createTyping("writing_g1", "compound_words_g1", `Make a compound word from '${w1}' and '${w2}':`, compound));
        }
      }
      return q;
    }
  },
  sentences_g1: {
    declarative_interrogative_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { text: "What is your name?", type: "interrogative" },
        { text: "The cat is sleeping.", type: "declarative" },
        { text: "Do you like apples?", type: "interrogative" },
        { text: "She runs very fast.", type: "declarative" },
        { text: "Where do you live?", type: "interrogative" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(1, rng)) {
          const sent = pick(sentenceData, rng);
          const wrong = sentenceData.filter(s => s.type !== sent.type).map(s => s.type).slice(0, 3);
          q.push(createMCQ("sentences_g1", "declarative_interrogative_g1", `Is this statement or question? "${sent.text}"`, sent.type, wrong));
        } else {
          const sent = pick(sentenceData, rng);
          q.push(createTyping("sentences_g1", "declarative_interrogative_g1", "Name: declarative or interrogative:", pick(["declarative", "interrogative"], rng)));
        }
      }
      return q;
    }
  }
};

// ─── GRADE 2 GENERATORS ───────────────────────────────────────────────────

export const G2_Generators = {
  pos_g2: {
    pronouns_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pronounData = [
        { pronoun: "myself", type: "reflexive", sentences: ["I hurt ___ yesterday.", "I talked to ___ in the mirror."] },
        { pronoun: "yourself", type: "reflexive", sentences: ["You did that ___.", "Did you introduce ___ to him?"] },
        { pronoun: "himself", type: "reflexive", sentences: ["He cleaned ___ up.", "He told ___ a story."] },
        { pronoun: "herself", type: "reflexive", sentences: ["She enjoyed ___ at the party.", "She is proud of ___."] },
        { pronoun: "itself", type: "reflexive", sentences: ["The cat licked ___ clean.", "The dog hurt ___."] },
        { pronoun: "ourselves", type: "reflexive", sentences: ["We taught ___ to swim.", "We prepared ___ for the test."] },
        { pronoun: "themselves", type: "reflexive", sentences: ["They enjoyed ___ very much.", "They helped ___ out."] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(2, rng)) {
          const pronSet = pick(pronounData, rng);
          const wrong = pronounData.filter(p => p.pronoun !== pronSet.pronoun).map(p => p.pronoun).slice(0, 3);
          const sentence = pick(pronSet.sentences, rng);
          q.push(createMCQ("pos_g2", "pronouns_g2", `Fill in: "${sentence}"`, pronSet.pronoun, wrong));
        } else {
          q.push(createTyping("pos_g2", "pronouns_g2", "Name a reflexive pronoun:", pick(pronounData, rng).pronoun));
        }
      }
      return q;
    },
    nouns_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const nouns = ["cat", "dog", "house", "book", "tree", "school", "teacher", "friend"];
      const notNouns = ["quickly", "run", "happy", "blue", "under"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(2, rng)) {
          const noun = pick(nouns, rng);
          const wrong = shuffle(notNouns, rng).slice(0, 3);
          q.push(createMCQ("pos_g2", "nouns_g2", "Which is a NOUN?", noun, wrong));
        } else {
          q.push(createTyping("pos_g2", "nouns_g2", "Name a person, place, or thing:", pick(nouns, rng)));
        }
      }
      return q;
    },
    verbs_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const verbs = ["run", "jump", "play", "eat", "sleep", "read", "write", "sing"];
      const notVerbs = ["happy", "blue", "quickly", "small"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(2, rng)) {
          const verb = pick(verbs, rng);
          const wrong = shuffle(notVerbs, rng).slice(0, 3);
          q.push(createMCQ("pos_g2", "verbs_g2", "Which is an ACTION VERB?", verb, wrong));
        } else {
          q.push(createTyping("pos_g2", "verbs_g2", "Write an action verb:", pick(verbs, rng)));
        }
      }
      return q;
    },
    adjectives_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const adjs = ["happy", "blue", "small", "big", "fast", "slow", "cold", "warm"];
      const notAdjs = ["run", "cat", "quickly", "jump"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(2, rng)) {
          const adj = pick(adjs, rng);
          const wrong = shuffle(notAdjs, rng).slice(0, 3);
          q.push(createMCQ("pos_g2", "adjectives_g2", "Which is an ADJECTIVE?", adj, wrong));
        } else {
          q.push(createTyping("pos_g2", "adjectives_g2", "Name a describing word:", pick(adjs, rng)));
        }
      }
      return q;
    },
    simple_compound_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { text: "I like cats.", type: "simple" },
        { text: "She plays soccer.", type: "simple" },
        { text: "The dog barked.", type: "simple" },
        { text: "I like cats, and she likes dogs.", type: "compound" },
        { text: "He can play guitar, but I play piano.", type: "compound" },
        { text: "We went to the park, so we had fun.", type: "compound" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(2, rng)) {
          const sentSet = pick(sentenceData, rng);
          const wrong = sentenceData.filter(s => s.type !== sentSet.type).map(s => s.type).slice(0, 3);
          const typeLabel = sentSet.type === "simple" ? "SIMPLE" : "COMPOUND";
          q.push(createMCQ("sentences_g2", "simple_compound_g2",
            `Is this a ${typeLabel} sentence? "${sentSet.text}"`, sentSet.type, wrong));
        } else {
          q.push(createTyping("sentences_g2", "simple_compound_g2",
            "Name a type of sentence:", pick(["simple", "compound"], rng)));
        }
      }
      return q;
    }
  },
  vocab_g2: {
    context_clues_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "'The ancient ruins were very old.' What does 'ancient' mean?", answer: "very old", wrong: ["very new", "very big", "very far"] },
        { sentence: "'She spoke in a loud, thunderous voice.' What does 'thunderous' mean?", answer: "very loud", wrong: ["very soft", "very high", "very strange"] },
        { sentence: "'The athlete was very swift and fast.' What does 'swift' mean?", answer: "fast", wrong: ["strong", "tall", "slow"] },
        { sentence: "'He is a loyal friend who is always there for me.' What does 'loyal' mean?", answer: "faithful and true", wrong: ["funny", "smart", "rich"] },
        { sentence: "'The scarce resources were hard to find.' What does 'scarce' mean?", answer: "rare and hard to find", wrong: ["common and easy", "expensive", "valuable"] },
        { sentence: "'She felt elated when she won the prize.' What does 'elated' mean?", answer: "very happy", wrong: ["very sad", "very tired", "very scared"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(2, rng)) {
          const sentSet = pick(sentenceData, rng);
          q.push(createMCQ("vocab_g2", "context_clues_g2", sentSet.sentence, sentSet.answer, sentSet.wrong));
        } else {
          const sentSet = pick(sentenceData, rng);
          q.push(createTyping("vocab_g2", "context_clues_g2", sentSet.sentence, sentSet.answer));
        }
      }
      return q;
    }
  },
  spelling_g2: {
    vowel_patterns_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const longE = ["feet", "meet", "need", "seed", "keep"];
      const shortE = ["pet", "bed", "red", "wet", "net"];
      for (let i = 0; i < 30; i++) {
        const isLong = rng() > 0.5;
        const word = pick(isLong ? longE : shortE, rng);
        const wrong = (isLong ? shortE : longE).slice(0, 3);
        q.push(createMCQ("spelling_g2", "vowel_patterns_g2",
          `Which word has a ${isLong ? "LONG" : "SHORT"} 'e' sound?`, word, wrong));
      }
      return q;
    },
    vowel_teams_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const teams = [["ai", "rain"], ["ea", "beat"], ["oa", "boat"], ["oo", "moon"]];
      for (let i = 0; i < 30; i++) {
        const [team, word] = pick(teams, rng);
        const wrong = teams.filter(t => t[0] !== team).map(t => t[0]);
        q.push(createMCQ("spelling_g2", "vowel_teams_g2", `What vowel team is in '${word}'?`, team, wrong));
      }
      return q;
    },
    contractions_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pairs = [["do not", "don't"], ["can not", "can't"], ["will not", "won't"]];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(2, rng)) {
          const [expanded, contra] = pick(pairs, rng);
          const wrong = pairs.filter(p => p[1] !== contra).map(p => p[1]);
          q.push(createMCQ("spelling_g2", "contractions_g2",
            `What is the contraction of '${expanded}'?`, contra, wrong));
        } else {
          const [expanded] = pick(pairs, rng);
          const answer = pairs.find(p => p[0] === expanded)?.[1] || "";
          q.push(createTyping("spelling_g2", "contractions_g2",
            `Write the contraction of '${expanded}':`, answer));
        }
      }
      return q;
    }
  },
  grammar_g2: {
    adj_adv_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pairs = [
        { adj: "happy", adv: "happily", context: "She was ___.", type: "adj" },
        { adj: "quick", adv: "quickly", context: "He ran ___.", type: "adv" },
        { adj: "beautiful", adv: "beautifully", context: "The flowers are ___.", type: "adj" },
        { adj: "slow", adv: "slowly", context: "She spoke ___.", type: "adv" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(2, rng)) {
          const pair = pick(pairs, rng);
          const word = pair.type === "adj" ? pair.adj : pair.adv;
          const wrong = pairs.filter(p => (p.type === "adj" ? p.adj : p.adv) !== word).map(p => p.type === "adj" ? p.adj : p.adv).slice(0, 3);
          q.push(createMCQ("grammar_g2", "adj_adv_g2", `Fill in: "${pair.context}"`, word, wrong));
        } else {
          const pair = pick(pairs, rng);
          q.push(createTyping("grammar_g2", "adj_adv_g2", `Name an adverb form of '${pair.adj}':`, pair.adv));
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
        { noun: "team", context: "A ___ of players won the game.", singular: "players" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(2, rng)) {
          const data = pick(collectiveData, rng);
          const wrong = collectiveData.filter(d => d.noun !== data.noun).map(d => d.noun).slice(0, 3);
          q.push(createMCQ("grammar_g2", "collective_nouns_g2", `Fill in: "${data.context}"`, data.noun, wrong));
        } else {
          const data = pick(collectiveData, rng);
          q.push(createTyping("grammar_g2", "collective_nouns_g2", `Name a collective noun for ${data.singular}:`, data.noun));
        }
      }
      return q;
    }
  }
};

// ─── GRADE 3 GENERATORS ───────────────────────────────────────────────────

export const G3_Generators = {
  pos_g3: {
    plurals_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pairs = [["cat", "cats"], ["dog", "dogs"], ["box", "boxes"], ["bus", "buses"], ["glass", "glasses"], ["dish", "dishes"]];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const [sing, plur] = pick(pairs, rng);
          const wrong = pairs.filter(p => p[0] !== sing).map(p => p[1]).slice(0, 3);
          q.push(createMCQ("pos_g3", "plurals_g3", `What is the plural of '${sing}'?`, plur, wrong));
        } else {
          const [sing, plur] = pick(pairs, rng);
          q.push(createTyping("pos_g3", "plurals_g3", `Write the plural of '${sing}':`, plur));
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
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const verbSet = pick(verbData, rng);
          const tenseKey = pick(["past", "future", "present"], rng);
          const tenseValue = verbSet[tenseKey as keyof typeof verbSet];
          const tenseLabels = { past: "PAST", future: "FUTURE", present: "PRESENT" };
          const wrongTenses = (["past", "future", "present"] as const).filter(t => t !== tenseKey).map(t => verbSet[t]).slice(0, 3);
          q.push(createMCQ("pos_g3", "verb_tenses_g3",
            `Which is the ${tenseLabels[tenseKey as keyof typeof tenseLabels]} tense of '${verbSet.verb}'?`, tenseValue, wrongTenses));
        } else {
          const verbSet = pick(verbData, rng);
          const tenseKey = pick(["past", "future", "present"], rng);
          const answer = verbSet[tenseKey as keyof typeof verbSet];
          q.push(createTyping("pos_g3", "verb_tenses_g3", `Write the ${tenseKey} tense of '${verbSet.verb}':`, answer));
        }
      }
      return q;
    },
    verbs_past_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const verbs = [["play", "played"], ["jump", "jumped"], ["walk", "walked"], ["talk", "talked"]];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const [base, past] = pick(verbs, rng);
          const wrong = verbs.filter(v => v[0] !== base).map(v => v[1]).slice(0, 3);
          q.push(createMCQ("pos_g3", "verbs_past_g3", `What is the past tense of '${base}'?`, past, wrong));
        } else {
          const [base, past] = pick(verbs, rng);
          q.push(createTyping("pos_g3", "verbs_past_g3", `Write the past tense of '${base}':`, past));
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
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const adjSet = pick(adjData, rng);
          const formType = pick(["comparative", "superlative"], rng);
          const formValue = adjSet[formType as keyof typeof adjSet];
          const otherForm = formType === "comparative" ? adjSet.superlative : adjSet.comparative;
          const formLabel = formType === "comparative" ? "COMPARATIVE" : "SUPERLATIVE";
          q.push(createMCQ("pos_g3", "adj_comparative_g3",
            `Which is the ${formLabel} form of '${adjSet.adj}'?`, formValue, [otherForm, adjSet.adj, "more " + adjSet.adj]));
        } else {
          const adjSet = pick(adjData, rng);
          const formType = pick(["comparative", "superlative"], rng);
          const answer = adjSet[formType as keyof typeof adjSet];
          q.push(createTyping("pos_g3", "adj_comparative_g3", `Write the ${formType} of '${adjSet.adj}':`, answer));
        }
      }
      return q;
    },
    adverbs_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const advData = [
        { adverb: "quickly", adjective: "quick", sentence: "She ran ___." },
        { adverb: "slowly", adjective: "slow", sentence: "He walked ___." },
        { adverb: "loudly", adjective: "loud", sentence: "She spoke ___." },
        { adverb: "happily", adjective: "happy", sentence: "They played ___." },
        { adverb: "carefully", adjective: "careful", sentence: "She drove ___." },
        { adverb: "easily", adjective: "easy", sentence: "He won ___." },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const advSet = pick(advData, rng);
          const wrong = advData.filter(a => a.adverb !== advSet.adverb).map(a => a.adverb).slice(0, 3);
          q.push(createMCQ("pos_g3", "adverbs_g3",
            `Fill in: "${advSet.sentence}"`, advSet.adverb, wrong));
        } else {
          const advSet = pick(advData, rng);
          q.push(createTyping("pos_g3", "adverbs_g3", `Form an adverb from '${advSet.adjective}':`, advSet.adverb));
        }
      }
      return q;
    }
  },
  sentences_g3: {
    simple_compound_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { text: "The cat sat on the mat.", type: "simple" },
        { text: "She walked to school.", type: "simple" },
        { text: "I like apples, and she likes oranges.", type: "compound" },
        { text: "We went to the park, but it was rainy.", type: "compound" },
        { text: "He studied hard, so he passed the test.", type: "compound" },
        { text: "The dog ran fast.", type: "simple" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const sentSet = pick(sentenceData, rng);
          const typeLabel = sentSet.type === "simple" ? "SIMPLE" : "COMPOUND";
          const wrong = sentenceData.filter(s => s.type !== sentSet.type).map(s => s.type).slice(0, 3);
          q.push(createMCQ("sentences_g3", "simple_compound_g3",
            `Is this a ${typeLabel} or compound sentence? "${sentSet.text}"`, sentSet.type, wrong));
        } else {
          q.push(createTyping("sentences_g3", "simple_compound_g3",
            "Name a sentence type:", pick(["simple", "compound"], rng)));
        }
      }
      return q;
    }
  },
  spelling_g3: {
    prefixes_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const prefixData = [
        { prefix: "un-", meaning: "not", examples: ["unhappy", "unclean", "unsafe"] },
        { prefix: "re-", meaning: "again", examples: ["redo", "restart", "rebuild"] },
        { prefix: "pre-", meaning: "before", examples: ["preview", "preschool", "prepare"] },
        { prefix: "dis-", meaning: "not / opposite", examples: ["disagree", "dislike", "disconnect"] },
        { prefix: "mis-", meaning: "wrong", examples: ["misspell", "misunderstand", "miscount"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const prefixSet = pick(prefixData, rng);
          const example = pick(prefixSet.examples, rng);
          const wrong = prefixData.filter(p => p.prefix !== prefixSet.prefix).map(p => p.meaning).slice(0, 3);
          q.push(createMCQ("spelling_g3", "prefixes_g3",
            `What does the prefix '${prefixSet.prefix}' mean in '${example}'?`, prefixSet.meaning, wrong));
        } else {
          const prefixSet = pick(prefixData, rng);
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
        { suffix: "-ness", meaning: "state or quality of", examples: ["happiness", "darkness", "kindness"] },
        { suffix: "-ful", meaning: "full of", examples: ["hopeful", "careful", "beautiful"] },
        { suffix: "-less", meaning: "without", examples: ["hopeless", "careless", "helpless"] },
        { suffix: "-ly", meaning: "in a manner of", examples: ["quickly", "slowly", "happily"] },
        { suffix: "-ing", meaning: "action or process", examples: ["running", "playing", "singing"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const suffixSet = pick(suffixData, rng);
          const example = pick(suffixSet.examples, rng);
          const wrong = suffixData.filter(s => s.suffix !== suffixSet.suffix).map(s => s.meaning).slice(0, 3);
          q.push(createMCQ("spelling_g3", "suffixes_g3",
            `What does the suffix '${suffixSet.suffix}' mean in '${example}'?`, suffixSet.meaning, wrong));
        } else {
          const suffixSet = pick(suffixData, rng);
          q.push(createTyping("spelling_g3", "suffixes_g3",
            `What does the suffix '${suffixSet.suffix}' mean?`, suffixSet.meaning));
        }
      }
      return q;
    },
    homophones_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const homophoneData = [
        { pair: "there/their/they're", correct: "they're", sentence: "'___ going to the park.' Which is correct?" },
        { pair: "to/two/too", correct: "too", sentence: "'I want to go ___.'" },
        { pair: "know/no", correct: "know", sentence: "'Do you ___ the answer?'" },
        { pair: "right/write", correct: "write", sentence: "'Please ___ your name here.'" },
        { pair: "hear/here", correct: "here", sentence: "'Come ___, please.'" },
        { pair: "sea/see", correct: "see", sentence: "'I can ___ the mountains.'" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const homoSet = pick(homophoneData, rng);
          const options = homoSet.pair.split("/");
          const wrong = options.filter(o => o !== homoSet.correct).slice(0, 3);
          q.push(createMCQ("spelling_g3", "homophones_g3", homoSet.sentence, homoSet.correct, wrong));
        } else {
          const homoSet = pick(homophoneData, rng);
          q.push(createTyping("spelling_g3", "homophones_g3", homoSet.sentence, homoSet.correct));
        }
      }
      return q;
    },
    word_families_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const familyData = [
        { family: "play", related: ["play", "player", "played", "playing"], root: "play" },
        { family: "run", related: ["run", "runner", "ran", "running"], root: "run" },
        { family: "happy", related: ["happy", "happily", "happiness", "unhappy"], root: "happy" },
        { family: "teach", related: ["teach", "teacher", "taught", "teaching"], root: "teach" },
        { family: "jump", related: ["jump", "jumped", "jumper", "jumping"], root: "jump" },
        { family: "kind", related: ["kind", "kindly", "kindness", "unkind"], root: "kind" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const familySet = pick(familyData, rng);
          const word = pick(familySet.related, rng);
          const question = `Which word is in the same word family as '${word}'?`;
          const otherWords = familySet.related.filter(w => w !== word);
          const wrong = familyData.filter(f => f.root !== familySet.root).map(f => pick(f.related, rng)).slice(0, 3);
          q.push(createMCQ("spelling_g3", "word_families_g3", question, pick(otherWords, rng), wrong));
        } else {
          const familySet = pick(familyData, rng);
          q.push(createTyping("spelling_g3", "word_families_g3",
            `Name a word in the family of '${familySet.root}':`, pick(familySet.related, rng)));
        }
      }
      return q;
    }
  },
  vocab_g3: {
    compound_words_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const compounds = [["base", "ball"], ["foot", "ball"], ["class", "room"], ["sun", "light"], ["rain", "bow"]];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const [p1, p2] = pick(compounds, rng);
          const compound = p1 + p2;
          const wrong = compounds.filter(c => !(c[0] === p1 && c[1] === p2)).map(c => c[0] + c[1]).slice(0, 3);
          q.push(createMCQ("vocab_g3", "compound_words_g3", "Which is a compound word?", compound, wrong));
        } else {
          const [p1, p2] = pick(compounds, rng);
          q.push(createTyping("vocab_g3", "compound_words_g3", `Combine '${p1}' + '${p2}':`, p1 + p2));
        }
      }
      return q;
    },
    homophones_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pairs = [
        { correct: "to", wrong: ["too", "two"], context: "I want to go ___ the park." },
        { correct: "be", wrong: ["bee", "bea"], context: "I want to ___ a teacher." },
        { correct: "there", wrong: ["their", "they're"], context: "Look over ___." },
        { correct: "write", wrong: ["right", "rite"], context: "I like to ___ stories." }
      ];
      for (let i = 0; i < 30; i++) {
        const pair = pick(pairs, rng);
        q.push(createMCQ("vocab_g3", "homophones_g3", `Fill in: "${pair.context}"`, pair.correct, pair.wrong));
      }
      return q;
    }
  },
  grammar_g3: {
    abstract_nouns_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const abstractNouns = ["love", "happiness", "courage", "friendship", "freedom", "beauty", "kindness"];
      const concreteNouns = ["table", "dog", "book", "pencil", "flower", "car", "house"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const abstract = pick(abstractNouns, rng);
          const wrong = shuffle(concreteNouns, rng).slice(0, 3);
          q.push(createMCQ("grammar_g3", "abstract_nouns_g3", "Which is an ABSTRACT noun?", abstract, wrong));
        } else {
          q.push(createTyping("grammar_g3", "abstract_nouns_g3", "Name an abstract noun (idea, feeling, quality):", pick(abstractNouns, rng)));
        }
      }
      return q;
    },
    conjunctions_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const conjData = [
        { conj: "and", sentence: "I like apples ___ oranges.", example: "I like apples and oranges." },
        { conj: "but", sentence: "I wanted to go ___ it rained.", example: "I wanted to go but it rained." },
        { conj: "or", sentence: "Do you want cake ___ ice cream?", example: "Do you want cake or ice cream?" },
        { conj: "because", sentence: "I stayed home ___ I was sick.", example: "I stayed home because I was sick." },
        { conj: "so", sentence: "He studied hard ___ he passed the test.", example: "He studied hard so he passed the test." }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const data = pick(conjData, rng);
          const wrong = conjData.filter(d => d.conj !== data.conj).map(d => d.conj).slice(0, 3);
          q.push(createMCQ("grammar_g3", "conjunctions_g3", `Fill in: "${data.sentence}"`, data.conj, wrong));
        } else {
          const data = pick(conjData, rng);
          q.push(createTyping("grammar_g3", "conjunctions_g3", `Fill in: "${data.sentence}"`, data.conj));
        }
      }
      return q;
    },
    adverbs_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const advData = [
        { adv: "quickly", word: "quick", context: "She ran ___." },
        { adv: "slowly", word: "slow", context: "He walked ___." },
        { adv: "happily", word: "happy", context: "They danced ___." },
        { adv: "carefully", word: "careful", context: "She climbed ___." },
        { adv: "loudly", word: "loud", context: "He shouted ___." }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const data = pick(advData, rng);
          const wrong = advData.filter(d => d.adv !== data.adv).map(d => d.adv).slice(0, 3);
          q.push(createMCQ("grammar_g3", "adverbs_g3", `Fill in: "${data.context}"`, data.adv, wrong));
        } else {
          const data = pick(advData, rng);
          q.push(createTyping("grammar_g3", "adverbs_g3", `Make an adverb from '${data.word}':`, data.adv));
        }
      }
      return q;
    }
  }
};

// ─── GRADE 4 GENERATORS ───────────────────────────────────────────────────

export const G4_Generators = {
  pos_g4: {
    modal_verbs_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      // Pre-paired: modal with its valid sentence contexts (VALIDÁLT — szöveg-modal megfelelés)
      const modalData = [
        { modal: "can", sentences: ["I ___ swim.", "You ___ help.", "She ___ run fast.", "Dogs ___ bark."] },
        { modal: "could", sentences: ["She ___ help us.", "I ___ swim when I was younger.", "He ___ run faster then.", "They ___ dance well."] },
        { modal: "may", sentences: ["You ___ leave now.", "I ___ go to the party?", "She ___ have a second piece."] },
        { modal: "might", sentences: ["It ___ rain tomorrow.", "They ___ come later.", "I ___ be late.", "He ___ win the race."] },
        { modal: "must", sentences: ["You ___ study hard.", "We ___ arrive on time.", "She ___ finish her homework.", "Everyone ___ follow rules."] },
        { modal: "should", sentences: ["You ___ rest.", "He ___ practice more.", "We ___ call our parents.", "I ___ drink water."] },
        { modal: "would", sentences: ["I ___ like tea.", "She ___ prefer coffee.", "They ___ enjoy the movie.", "We ___ help if we could."] },
      ];
      const modals = modalData.map(m => m.modal);
      for (let i = 0; i < 30; i++) {
        if (isMCQ(4, rng)) {
          const modalSet = pick(modalData, rng);
          const sentence = pick(modalSet.sentences, rng);
          const wrong = modals.filter(m => m !== modalSet.modal).slice(0, 3);
          q.push(createMCQ("pos_g4", "modal_verbs_g4",
            `Fill in: "${sentence}"`, modalSet.modal, wrong));
        } else {
          q.push(createTyping("pos_g4", "modal_verbs_g4",
            "Name a modal verb:", pick(modals, rng)));
        }
      }
      return q;
    }
  },
  figurative_g4: {
    simile_metaphor_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const examples = [
        ["like", "The moon is like a pearl", "simile"],
        ["is", "Time is money", "metaphor"],
        ["as...as", "He is as brave as a lion", "simile"]
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(4, rng)) {
          const [_, example, type] = pick(examples, rng);
          const wrong = ["hyperbole", "alliteration", "personification"];
          q.push(createMCQ("figurative_g4", "simile_metaphor_g4",
            `Is this a simile or metaphor? "${example}"`, type, wrong));
        } else {
          q.push(createTyping("figurative_g4", "simile_metaphor_g4",
            "Write a simile (use 'like' or 'as'):",
            ["The moon is like a pearl", "She runs like a cheetah"]));
        }
      }
      return q;
    }
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
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(4, rng)) {
          const wordSet = pick(wordData, rng);
          const isAntoym = rng() > 0.5;
          if (isAntoym) {
            const wrong = wordData.filter(w => w.word !== wordSet.word).map(w => w.antonym).slice(0, 3);
            q.push(createMCQ("vocab_g4", "synonyms_antonyms_g4",
              `What is the ANTONYM of '${wordSet.word}'?`, wordSet.antonym, wrong));
          } else {
            const wrong = wordData.filter(w => w.word !== wordSet.word).map(w => w.synonym).slice(0, 3);
            q.push(createMCQ("vocab_g4", "synonyms_antonyms_g4",
              `What is the SYNONYM of '${wordSet.word}'?`, wordSet.synonym, wrong));
          }
        } else {
          const wordSet = pick(wordData, rng);
          const isAntonym = rng() > 0.5;
          const answer = isAntonym ? wordSet.antonym : wordSet.synonym;
          const label = isAntonym ? "antonym" : "synonym";
          q.push(createTyping("vocab_g4", "synonyms_antonyms_g4",
            `Write a ${label} of '${wordSet.word}':`, answer));
        }
      }
      return q;
    },
    context_clues_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { sentence: "'The teacher gave praise for the excellent work.' What does 'praise' mean?", answer: "approval and encouragement", wrong: ["criticism", "punishment", "confusion"] },
        { sentence: "'The path was winding and twisted.' What does 'winding' mean?", answer: "curving and turning", wrong: ["straight", "short", "broken"] },
        { sentence: "'She was astute and clever in her decisions.' What does 'astute' mean?", answer: "smart and perceptive", wrong: ["lazy", "confused", "stubborn"] },
        { sentence: "'The desolate landscape had no trees or people.' What does 'desolate' mean?", answer: "empty and lonely", wrong: ["crowded", "beautiful", "hilly"] },
        { sentence: "'He was tenacious and refused to give up.' What does 'tenacious' mean?", answer: "persistent and determined", wrong: ["lazy", "weak", "careless"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(4, rng)) {
          const sentSet = pick(sentenceData, rng);
          q.push(createMCQ("vocab_g4", "context_clues_g4", sentSet.sentence, sentSet.answer, sentSet.wrong));
        } else {
          const sentSet = pick(sentenceData, rng);
          q.push(createTyping("vocab_g4", "context_clues_g4", sentSet.sentence, sentSet.answer));
        }
      }
      return q;
    },
    homophones_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const homophoneData = [
        { correct: "meat", sentence: "We had ___ for dinner.", wrong: ["meet", "mete"] },
        { correct: "knight", sentence: "The ___ fought bravely.", wrong: ["night", "knite"] },
        { correct: "hear", sentence: "Can you ___ me?", wrong: ["here", "heer"] },
        { correct: "brake", sentence: "Step on the ___ to stop.", wrong: ["break", "brak"] },
        { correct: "wear", sentence: "I ___ a jacket.", wrong: ["where", "ware"] }
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(homophoneData, rng);
        q.push(createMCQ("vocab_g4", "homophones_g4", `Fill in: "${data.sentence}"`, data.correct, data.wrong));
      }
      return q;
    }
  },
  grammar_g4: {
    capitalization_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { wrong: "the united states is a country.", correct: "The United States is a country." },
        { wrong: "i like dr. smith because he is kind.", correct: "I like Dr. Smith because he is kind." },
        { wrong: "she was born on monday in july.", correct: "She was born on Monday in July." },
        { wrong: "we read the book 'alice in wonderland'.", correct: "We read the book 'Alice in Wonderland'." }
      ];
      for (let i = 0; i < 30; i++) {
        const sent = pick(sentenceData, rng);
        const wrong = shuffle(sentenceData.filter(s => s !== sent), rng).map(s => s.correct).slice(0, 3);
        q.push(createMCQ("grammar_g4", "capitalization_g4", "Which sentence has correct capitalization?", sent.correct, wrong));
      }
      return q;
    },
    adjective_order_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const orders = [
        { correct: "a small red apple", wrong: ["a red small apple", "a apple small red", "a red apple small"] },
        { correct: "three big wooden chairs", wrong: ["three wooden big chairs", "wooden three big chairs", "big three wooden chairs"] },
        { correct: "an old leather jacket", wrong: ["a leather old jacket", "an old jacket leather", "leather an old jacket"] },
        { correct: "two soft blue pillows", wrong: ["two blue soft pillows", "soft two blue pillows", "blue two soft pillows"] }
      ];
      for (let i = 0; i < 30; i++) {
        const order = pick(orders, rng);
        q.push(createMCQ("grammar_g4", "adjective_order_g4", "Which has the CORRECT adjective order?", order.correct, order.wrong));
      }
      return q;
    },
    compound_sentences_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const sentenceData = [
        { text: "I wanted to go to the beach, and she wanted to stay home.", type: "compound" },
        { text: "He studied hard, so he got a good grade.", type: "compound" },
        { text: "The dog was hungry, but there was no food.", type: "compound" },
        { text: "She ran quickly.", type: "simple" },
        { text: "They played in the park.", type: "simple" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(4, rng)) {
          const sent = pick(sentenceData, rng);
          const wrong = sentenceData.filter(s => s.type !== sent.type).map(s => s.type).slice(0, 3);
          q.push(createMCQ("grammar_g4", "compound_sentences_g4", `Is this SIMPLE or COMPOUND? "${sent.text}"`, sent.type, wrong));
        } else {
          const sent = pick(sentenceData, rng);
          q.push(createTyping("grammar_g4", "compound_sentences_g4", "Name a type: simple or compound:", pick(["simple", "compound"], rng)));
        }
      }
      return q;
    },
    confused_words_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const confusedData = [
        { correct: "their", sentence: "The students finished ___ homework.", wrong: ["there", "they're"] },
        { correct: "its", sentence: "The dog wagged ___ tail.", wrong: ["it's", "its'"] },
        { correct: "to", sentence: "I went ___ the store.", wrong: ["too", "two"] },
        { correct: "be", sentence: "I want to ___ a teacher.", wrong: ["bee", "bea"] },
        { correct: "your", sentence: "___ book is on the shelf.", wrong: ["you're", "your's"] }
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(confusedData, rng);
        q.push(createMCQ("grammar_g4", "confused_words_g4", `Fill in: "${data.sentence}"`, data.correct, data.wrong));
      }
      return q;
    },
    commas_compound_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const commaData = [
        { correct: "I like apples, but she likes oranges.", wrong: ["I like apples but she likes oranges.", "I like apples, and but she likes oranges.", "I like apples but, she likes oranges."] },
        { correct: "He studied hard, so he passed the test.", wrong: ["He studied hard so he passed the test.", "He studied hard, so he, passed the test.", "He studied, hard so he passed the test."] },
        { correct: "She wanted to go, yet she stayed home.", wrong: ["She wanted to go yet she stayed home.", "She wanted, to go yet she stayed home.", "She wanted to go yet, she stayed home."] }
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(commaData, rng);
        q.push(createMCQ("grammar_g4", "commas_compound_g4", "Which sentence has correct commas?", data.correct, data.wrong));
      }
      return q;
    }
  }
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
  syntax_g7: {
    verb_mood_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      // Pre-paired: mood with valid descriptions & examples (VALIDÁLT — leírás a mood-nak megfelelő)
      const moodData = [
        { mood: "indicative", descriptions: ["states a fact", "declares reality", "makes a statement of truth", "presents what is true"], examples: ["'The cat is sleeping.'", "'She went to school.'", "'It rains today.'"] },
        { mood: "imperative", descriptions: ["gives a command", "makes a request", "tells someone what to do", "issues an instruction"], examples: ["'Go to bed!'", "'Please help me.'", "'Sit down now!'"] },
        { mood: "subjunctive", descriptions: ["expresses a wish or hypothetical", "shows doubt or contrary fact", "uses 'if' or 'were'", "expresses desire or condition"], examples: ["'If I were you...'", "'I wish it were Friday.'", "'Though he be poor...'"] },
        { mood: "conditional", descriptions: ["depends on a condition", "uses 'would' or 'could'", "expresses hypothetical result", "shows if-then relationship"], examples: ["'If you study, you would pass.'", "'I would help if I could.'", "'They would come if invited.'"] },
      ];
      const moods = moodData.map(m => m.mood);
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const moodSet = pick(moodData, rng);
          const description = pick(moodSet.descriptions, rng);
          const wrong = moods.filter(m => m !== moodSet.mood).slice(0, 3);
          q.push(createMCQ("syntax_g7", "verb_mood_g7",
            `Which mood ${description}?`, moodSet.mood, wrong));
        } else {
          q.push(createTyping("syntax_g7", "verb_mood_g7",
            "Name a verb mood:", pick(moods, rng)));
        }
      }
      return q;
    }
  },
  rhetoric_g7: {
    rhetorical_devices_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const devices = ["rhetorical question", "repetition", "parallel structure", "antithesis"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const device = pick(devices, rng);
          const wrong = devices.filter(d => d !== device).slice(0, 3);
          const rhetExamples: Record<string, string> = { "rhetorical question":"'Isn't it obvious?'", repetition:"'Never, never, never give up'", "parallel structure":"'I came, I saw, I conquered'", antithesis:"'It was the best of times, it was the worst of times'" };
          q.push(createMCQ("rhetoric_g7", "rhetorical_devices_g7",
            `What device is ${rhetExamples[device] || "'To be or not to be'"}?`, device, wrong));
        } else {
          q.push(createTyping("rhetoric_g7", "rhetorical_devices_g7",
            "Name a rhetorical device:", pick(devices, rng)));
        }
      }
      return q;
    }
  },
  vocab_g7: {
    figurative_language_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const figData = [
        { phrase: "'Her voice dripped with sarcasm'", device: "metaphor", meaning: "her tone was mocking" },
        { phrase: "'The city is a jungle'", device: "metaphor", meaning: "the city is wild and chaotic" },
        { phrase: "'As silent as the grave'", device: "simile", meaning: "completely silent" },
        { phrase: "'His words were poison'", device: "metaphor", meaning: "his words were harmful" },
        { phrase: "'The wind whispered secrets'", device: "personification", meaning: "the breeze made soft sounds" },
        { phrase: "'I have a million things to do'", device: "hyperbole", meaning: "I have very many things to do" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const figSet = pick(figData, rng);
          const wrong = figData.filter(f => f.device !== figSet.device).map(f => f.device).slice(0, 3);
          q.push(createMCQ("vocab_g7", "figurative_language_g7",
            `What figurative device is ${figSet.phrase}?`, figSet.device, wrong));
        } else {
          const figSet = pick(figData, rng);
          q.push(createTyping("vocab_g7", "figurative_language_g7",
            `What device is ${figSet.phrase}?`, figSet.device));
        }
      }
      return q;
    },
    connotation_denotation_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordData = [
        { word: "persistent", denotation: "continuing despite difficulty", connotation: "positive (determined)" },
        { word: "stubborn", denotation: "refusing to change", connotation: "negative (inflexible)" },
        { word: "thrifty", denotation: "spending carefully", connotation: "positive (wise)" },
        { word: "stingy", denotation: "spending very little", connotation: "negative (miserly)" },
        { word: "curious", denotation: "wanting to know", connotation: "positive (inquisitive)" },
        { word: "nosy", denotation: "showing interest in others' affairs", connotation: "negative (intrusive)" },
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const wordSet = pick(wordData, rng);
          const isConnotation = rng() > 0.5;
          if (isConnotation) {
            const wrong = ["neutral meaning", "dictionary definition", "literal sense"].slice(0, 3);
            q.push(createMCQ("vocab_g7", "connotation_denotation_g7",
              `What is the CONNOTATION of '${wordSet.word}'?`, wordSet.connotation, wrong));
          } else {
            const wrong = ["emotional feeling", "implied meaning", "cultural sense"].slice(0, 3);
            q.push(createMCQ("vocab_g7", "connotation_denotation_g7",
              `What is the DENOTATION of '${wordSet.word}'?`, wordSet.denotation, wrong));
          }
        } else {
          const wordSet = pick(wordData, rng);
          q.push(createTyping("vocab_g7", "connotation_denotation_g7",
            `What does '${wordSet.word}' literally mean (denotation)?`, wordSet.denotation));
        }
      }
      return q;
    },
    synonyms_antonyms_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordData = [
        { word: "nefarious", synonym: "villainous", antonym: "virtuous" },
        { word: "ephemeral", synonym: "fleeting", antonym: "permanent" },
        { word: "voracious", synonym: "greedy", antonym: "abstemious" },
        { word: "serene", synonym: "tranquil", antonym: "chaotic" }
      ];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const wordSet = pick(wordData, rng);
          const isAntonym = rng() > 0.5;
          if (isAntonym) {
            const wrong = wordData.filter(w => w.word !== wordSet.word).map(w => w.antonym).slice(0, 3);
            q.push(createMCQ("vocab_g7", "synonyms_antonyms_g7", `What is the ANTONYM of '${wordSet.word}'?`, wordSet.antonym, wrong));
          } else {
            const wrong = wordData.filter(w => w.word !== wordSet.word).map(w => w.synonym).slice(0, 3);
            q.push(createMCQ("vocab_g7", "synonyms_antonyms_g7", `What is the SYNONYM of '${wordSet.word}'?`, wordSet.synonym, wrong));
          }
        } else {
          const wordSet = pick(wordData, rng);
          const isAntonym = rng() > 0.5;
          q.push(createTyping("vocab_g7", "synonyms_antonyms_g7",
            `Name a ${isAntonym ? "antonym" : "synonym"} of '${wordSet.word}':`,
            isAntonym ? wordSet.antonym : wordSet.synonym));
        }
      }
      return q;
    }
  },
  punctuation_g7: {
    dashes_hyphens_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const dashData = [
        { correct: "She wanted to go—but decided to stay.", meaning: "em dash for emphasis" },
        { correct: "The well-known author arrived.", meaning: "hyphen in compound adjective" },
        { correct: "The following items—books, pens, and paper—were on sale.", meaning: "em dashes for appositive" },
        { correct: "My twenty-three-year-old sister is a teacher.", meaning: "hyphens in compound numbers" }
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(dashData, rng);
        const wrong = dashData.filter(d => d !== data).map(d => d.correct).slice(0, 3);
        q.push(createMCQ("punctuation_g7", "dashes_hyphens_g7", "Which uses dashes/hyphens correctly?", data.correct, wrong));
      }
      return q;
    },
    commas_phrases_g7: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const commaData = [
        { correct: "Feeling tired, she went to bed early.", wrong: ["Feeling tired she went to bed early.", "Feeling, tired she went to bed early.", "Feeling tired, she went, to bed early."] },
        { correct: "Standing on the corner, we waited for the bus.", wrong: ["Standing on the corner we waited for the bus.", "Standing, on the corner we waited for the bus.", "Standing on the corner, we, waited for the bus."] },
        { correct: "The student, having finished her work, left early.", wrong: ["The student having finished her work left early.", "The student, having finished her work left early.", "The student having finished, her work, left early."] }
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(commaData, rng);
        q.push(createMCQ("punctuation_g7", "commas_phrases_g7", "Which uses commas with phrases correctly?", data.correct, data.wrong));
      }
      return q;
    }
  }
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
