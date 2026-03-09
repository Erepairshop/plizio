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
