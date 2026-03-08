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
      const blends = ["st", "sp", "sn", "sl", "sm", "sw", "sk", "sc", "bl", "br", "cl", "cr", "dr", "fr", "gr"];
      for (let i = 0; i < 30; i++) {
        const blend = pick(blends, rng);
        const word = pick(GRADE1_WORDS.blends, rng);
        const wrong = blends.filter(b => b !== blend).slice(0, 3);
        q.push(createMCQ("phonics_g1", "blends_g1", `Which blend is in '${word}'?`, blend, wrong));
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
      const modals = ["can", "could", "may", "might", "must", "should", "would"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(4, rng)) {
          const modal = pick(modals, rng);
          const wrong = modals.filter(m => m !== modal).slice(0, 3);
          q.push(createMCQ("pos_g4", "modal_verbs_g4",
            "Which modal verb shows possibility?", modal, wrong));
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
      const devices = ["alliteration", "metaphor", "simile", "personification", "hyperbole"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(6, rng)) {
          const device = pick(devices, rng);
          const wrong = devices.filter(d => d !== device).slice(0, 3);
          q.push(createMCQ("literary_g6", "literary_devices_g6",
            "What device is 'singing softly'?", device, wrong));
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
      const moods = ["indicative", "imperative", "subjunctive", "conditional"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(7, rng)) {
          const mood = pick(moods, rng);
          const wrong = moods.filter(m => m !== mood).slice(0, 3);
          q.push(createMCQ("syntax_g7", "verb_mood_g7",
            "Which mood expresses a wish?", mood, wrong));
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
          q.push(createMCQ("rhetoric_g7", "rhetorical_devices_g7",
            "What device is 'To be or not to be'?", device, wrong));
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
      const theories = ["New Historicism", "Marxist Criticism", "Feminist Criticism", "Queer Theory"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const theory = pick(theories, rng);
          const wrong = theories.filter(t => t !== theory).slice(0, 3);
          q.push(createMCQ("analysis_g8", "critical_theory_g8",
            "Which examines power and class?", theory, wrong));
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
