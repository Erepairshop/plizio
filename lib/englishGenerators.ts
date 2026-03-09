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


// THIS IS A TEMPORARY FILE — content will be spliced into englishGenerators.ts
// ─── GRADE 1 GENERATORS ───────────────────────────────────────────────────

// --- G1 extra word banks ---
const G1_SYLLABLE_WORDS: [string, number][] = [
  ["cat", 1], ["dog", 1], ["sun", 1], ["hat", 1], ["pen", 1], ["bed", 1],
  ["apple", 2], ["butter", 2], ["happy", 2], ["rabbit", 2], ["kitten", 2], ["pencil", 2],
  ["basket", 2], ["garden", 2], ["window", 2], ["morning", 2],
  ["banana", 3], ["elephant", 3], ["beautiful", 3], ["butterfly", 3], ["umbrella", 3], ["tomato", 3],
];

const G1_SIGHT_WORDS = ["the", "and", "is", "it", "to", "in", "he", "she", "was", "for", "on", "are", "you", "they", "my", "said", "have", "with", "this", "that", "from", "come", "some", "were", "what", "there"];

const G1_NOUNS = {
  people: ["mom", "dad", "teacher", "friend", "baby", "boy", "girl", "doctor"],
  places: ["school", "park", "home", "store", "zoo", "farm", "lake", "beach"],
  things: ["ball", "book", "car", "tree", "apple", "shoe", "chair", "cup"],
};

const G1_VERBS = ["run", "jump", "sit", "eat", "play", "read", "sing", "swim", "walk", "talk", "draw", "kick", "clap", "hop", "fly"];

const G1_COMPOUNDS = [
  ["sun", "shine"], ["rain", "bow"], ["cup", "cake"], ["bed", "room"], ["dog", "house"],
  ["air", "plane"], ["pop", "corn"], ["star", "fish"], ["fire", "man"], ["tooth", "brush"],
  ["snow", "man"], ["gold", "fish"], ["pan", "cake"], ["foot", "ball"], ["moon", "light"],
];

const G1_SENTENCES = {
  declarative: [
    "The cat is big.", "I like dogs.", "She can run fast.", "We go to school.",
    "The sun is hot.", "My mom is kind.", "He has a red ball.", "They play outside.",
  ],
  interrogative: [
    "Where do you live?", "Can I go outside?", "What is your name?", "Do you like pizza?",
    "How old are you?", "Is she your friend?", "When is lunch?", "Why is the sky blue?",
  ],
  exclamatory: [
    "What a great day!", "That is amazing!", "I love this game!", "Watch out!",
  ],
};

const G1_COMPLETE_SENTENCES = [
  "The dog ran fast.", "She has a red hat.", "We like to play.", "He can swim well.",
  "My cat is soft.", "They eat lunch.", "I read a book.", "The bird can fly.",
];
const G1_FRAGMENTS = [
  "big red", "ran fast", "the very tall", "under the", "happy and", "my little", "going to the", "because she",
];

// ─── G2 extra word banks ───
const G2_COMMON_NOUNS = ["city", "river", "dog", "school", "mountain", "book", "car", "teacher", "country", "lake"];
const G2_PROPER_NOUNS = ["London", "Paris", "Max", "Monday", "January", "Mexico", "Sarah", "Amazon", "Christmas", "Earth"];

const G2_SINGULAR_PLURAL: [string, string][] = [
  ["child", "children"], ["mouse", "mice"], ["foot", "feet"], ["tooth", "teeth"],
  ["man", "men"], ["woman", "women"], ["goose", "geese"], ["ox", "oxen"],
  ["leaf", "leaves"], ["wolf", "wolves"], ["knife", "knives"], ["life", "lives"],
  ["cat", "cats"], ["dog", "dogs"], ["box", "boxes"], ["bus", "buses"],
];

const G2_COLLECTIVE: [string, string][] = [
  ["birds", "flock"], ["wolves", "pack"], ["cows", "herd"], ["fish", "school"],
  ["bees", "swarm"], ["lions", "pride"], ["ants", "colony"], ["sheep", "flock"],
  ["people on a ship", "crew"], ["players", "team"], ["singers", "choir"], ["dancers", "troupe"],
];

const G2_IRREGULAR_PAST: [string, string, string][] = [
  ["run", "ran", "runned"], ["go", "went", "goed"], ["eat", "ate", "eated"],
  ["see", "saw", "seed"], ["come", "came", "comed"], ["give", "gave", "gived"],
  ["take", "took", "taked"], ["make", "made", "maked"], ["swim", "swam", "swimmed"],
  ["sit", "sat", "sitted"], ["write", "wrote", "writed"], ["sing", "sang", "singed"],
  ["fly", "flew", "flied"], ["draw", "drew", "drawed"], ["drink", "drank", "drinked"],
];

const G2_ADJ_ADV: [string, string][] = [
  ["quick", "quickly"], ["slow", "slowly"], ["loud", "loudly"], ["quiet", "quietly"],
  ["happy", "happily"], ["sad", "sadly"], ["careful", "carefully"], ["gentle", "gently"],
  ["brave", "bravely"], ["soft", "softly"], ["neat", "neatly"], ["bright", "brightly"],
];

const G2_PRONOUNS = {
  personal: ["I", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them"],
  reflexive: ["myself", "yourself", "himself", "herself", "itself", "ourselves", "themselves"],
};

const G2_PREFIX_DATA: [string, string, string, string][] = [
  ["un", "unhappy", "not happy", "not"],
  ["un", "unfair", "not fair", "not"],
  ["un", "unlock", "not locked", "not"],
  ["re", "redo", "do again", "again"],
  ["re", "retake", "take again", "again"],
  ["re", "rebuild", "build again", "again"],
  ["pre", "preview", "view before", "before"],
  ["pre", "preheat", "heat before", "before"],
];
const G2_SUFFIX_DATA: [string, string, string, string][] = [
  ["-ful", "careful", "full of care", "full of"],
  ["-ful", "hopeful", "full of hope", "full of"],
  ["-less", "careless", "without care", "without"],
  ["-less", "hopeless", "without hope", "without"],
  ["-er", "teacher", "one who teaches", "one who"],
  ["-er", "singer", "one who sings", "one who"],
  ["-ly", "quickly", "in a quick way", "in a ___ way"],
  ["-ly", "sadly", "in a sad way", "in a ___ way"],
];

const G2_COMPOUND_SIMPLE: [string, string][] = [
  ["I like cats, and she likes dogs.", "compound"],
  ["We went home, but it was raining.", "compound"],
  ["He ran fast, so he won the race.", "compound"],
  ["I like cats.", "simple"], ["She likes dogs.", "simple"],
  ["We went home.", "simple"], ["He ran fast.", "simple"],
  ["The sun is hot.", "simple"],
];

const G2_CONTEXT_CLUES: [string, string, string, string[]][] = [
  ["The ancient castle was built hundreds of years ago.", "ancient", "very old", ["very tall", "very new", "very small"]],
  ["She was exhausted after running the race.", "exhausted", "very tired", ["very happy", "very hungry", "very tall"]],
  ["The enormous elephant could barely fit through the gate.", "enormous", "very big", ["very small", "very fast", "very old"]],
  ["He was furious when someone broke his toy.", "furious", "very angry", ["very happy", "very sad", "very tired"]],
  ["The frigid wind made everyone shiver.", "frigid", "very cold", ["very hot", "very loud", "very soft"]],
  ["She was famished after not eating all day.", "famished", "very hungry", ["very tired", "very happy", "very cold"]],
];

const G2_SHADES: [string[], string, string][] = [
  [["annoyed", "angry", "furious"], "furious", "strongest"],
  [["happy", "glad", "overjoyed"], "overjoyed", "strongest"],
  [["walk", "jog", "sprint"], "sprint", "fastest"],
  [["warm", "hot", "scorching"], "scorching", "strongest"],
  [["sad", "unhappy", "heartbroken"], "heartbroken", "strongest"],
  [["toss", "throw", "hurl"], "hurl", "strongest"],
  [["rain", "downpour", "drizzle"], "drizzle", "weakest"],
  [["whisper", "talk", "shout"], "shout", "loudest"],
];

const G2_IRREGULAR_SPELL: [string, string][] = [
  ["My frend came to visit.", "friend"],
  ["She has a beautful dress.", "beautiful"],
  ["We went to the libary.", "library"],
  ["He is very happey today.", "happy"],
  ["I herd a loud noise.", "heard"],
  ["She beleives in magic.", "believes"],
  ["The anser is correct.", "answer"],
  ["They recieved a gift.", "received"],
  ["It was a surprize party.", "surprise"],
  ["He has enugh toys.", "enough"],
  ["She bougt a new book.", "bought"],
  ["The peple are kind.", "people"],
];

// ─── G3 extra word banks ───
const G3_IRREGULAR_PLURALS: [string, string, string][] = [
  ["foot", "feet", "foots"], ["tooth", "teeth", "tooths"], ["mouse", "mice", "mouses"],
  ["child", "children", "childs"], ["man", "men", "mans"], ["woman", "women", "womans"],
  ["goose", "geese", "gooses"], ["ox", "oxen", "oxes"], ["leaf", "leaves", "leafs"],
  ["wolf", "wolves", "wolfs"], ["knife", "knives", "knifes"], ["life", "lives", "lifes"],
  ["shelf", "shelves", "shelfs"], ["calf", "calves", "calfs"], ["half", "halves", "halfs"],
];

const G3_ABSTRACT_NOUNS = ["freedom", "courage", "kindness", "friendship", "beauty", "justice", "happiness", "love", "anger", "honesty", "wisdom", "peace", "pride", "fear", "hope"];
const G3_CONCRETE_NOUNS = ["table", "dog", "cloud", "rock", "car", "tree", "ball", "chair", "shoe", "river"];

const G3_COMPARATIVE: [string, string, string][] = [
  ["big", "bigger", "biggest"], ["small", "smaller", "smallest"], ["fast", "faster", "fastest"],
  ["slow", "slower", "slowest"], ["tall", "taller", "tallest"], ["short", "shorter", "shortest"],
  ["hot", "hotter", "hottest"], ["cold", "colder", "coldest"], ["nice", "nicer", "nicest"],
  ["happy", "happier", "happiest"], ["pretty", "prettier", "prettiest"], ["easy", "easier", "easiest"],
];

const G3_ADVERBS = {
  how: ["slowly", "quickly", "quietly", "loudly", "carefully", "gently", "happily", "sadly"],
  when: ["today", "yesterday", "tomorrow", "now", "soon", "later", "always", "never"],
  where: ["here", "there", "everywhere", "outside", "inside", "nearby", "away", "home"],
};
const G3_NOT_ADVERBS = ["happy", "big", "dog", "run", "table", "red"];

const G3_CONJUNCTIONS = ["and", "but", "or", "so", "yet", "for", "nor"];

const G3_VERB_TENSES: [string, string, string, string][] = [
  ["walk", "She walked to school.", "She walks to school.", "She will walk to school."],
  ["play", "He played in the park.", "He plays in the park.", "He will play in the park."],
  ["eat", "They ate dinner.", "They eat dinner.", "They will eat dinner."],
  ["run", "I ran home.", "I run home.", "I will run home."],
  ["read", "She read the book.", "She reads the book.", "She will read the book."],
  ["jump", "He jumped high.", "He jumps high.", "He will jump high."],
  ["sing", "We sang a song.", "We sing a song.", "We will sing a song."],
  ["swim", "She swam in the lake.", "She swims in the lake.", "She will swim in the lake."],
];

const G3_SUBJECTS: [string, string][] = [
  ["The dog barked loudly.", "The dog"],
  ["My sister loves ice cream.", "My sister"],
  ["The tall boy ran fast.", "The tall boy"],
  ["Our teacher reads stories.", "Our teacher"],
  ["The little bird sang.", "The little bird"],
  ["Her best friend laughed.", "Her best friend"],
  ["The old car broke down.", "The old car"],
  ["A beautiful rainbow appeared.", "A beautiful rainbow"],
];

const G3_PREDICATES: [string, string][] = [
  ["The dog barked loudly.", "barked loudly"],
  ["My sister loves ice cream.", "loves ice cream"],
  ["The tall boy ran fast.", "ran fast"],
  ["Our teacher reads stories.", "reads stories"],
  ["The little bird sang.", "sang"],
  ["Her best friend laughed.", "laughed"],
];

const G3_SIMPLE_SENTENCES_G3 = ["The cat slept.", "She ran home.", "He ate lunch.", "We played outside.", "I read a book.", "The bird flew away."];
const G3_COMPOUND_SENTENCES_G3 = [
  "The cat slept, and the dog played.", "She ran home, but he stayed.",
  "It rained, so we stayed inside.", "He sang, and she danced.",
  "I was tired, so I rested.", "We ate lunch, and then we played.",
];

const G3_FRAGMENTS_G3 = ["Running through the park.", "Because she was tired.", "The very tall.", "After the game.", "Under the big tree.", "When it rained."];
const G3_RUNONS_G3 = [
  "I like cats I like dogs too.",
  "She ran home she was tired.",
  "He ate lunch he went to school.",
  "We played it was fun we went home.",
];

const G3_QUOTATIONS_CORRECT = [
  '"Come here," she said.',
  '"I love pizza!" he shouted.',
  '"Where are you going?" Mom asked.',
  '"Let\'s play," said Tom.',
];
const G3_QUOTATIONS_WRONG = [
  'Come here, she said.',
  '"Come here, she said.',
  'Come here," she said.',
  '"Come here" she said.',
];

const G3_PREFIX_DATA: [string, string, string][] = [
  ["dis-", "disagree", "not / opposite"],
  ["dis-", "dislike", "not / opposite"],
  ["dis-", "disappear", "not / opposite"],
  ["mis-", "misunderstand", "wrong / badly"],
  ["mis-", "misspell", "wrong / badly"],
  ["mis-", "misbehave", "wrong / badly"],
  ["pre-", "preview", "before"],
  ["pre-", "preheat", "before"],
  ["pre-", "preschool", "before"],
  ["un-", "unhappy", "not"],
  ["un-", "unfair", "not"],
  ["re-", "redo", "again"],
  ["re-", "rewrite", "again"],
];

const G3_SUFFIX_DATA: [string, string, string][] = [
  ["-ness", "darkness", "state or quality of"],
  ["-ness", "kindness", "state or quality of"],
  ["-ness", "happiness", "state or quality of"],
  ["-tion", "action", "the act of"],
  ["-tion", "creation", "the act of"],
  ["-able", "washable", "able to be"],
  ["-able", "readable", "able to be"],
  ["-ful", "cheerful", "full of"],
  ["-ful", "hopeful", "full of"],
  ["-less", "fearless", "without"],
  ["-less", "homeless", "without"],
  ["-ly", "slowly", "in a ___ way"],
  ["-er", "teacher", "one who"],
  ["-est", "tallest", "most"],
];

const G3_HOMOPHONES: [string, string, string, string][] = [
  ["They're", "There", "Their", "___ going to the park."],
  ["Their", "There", "They're", "___ house is blue."],
  ["There", "Their", "They're", "The ball is over ___."],
  ["to", "too", "two", "I want ___ go home."],
  ["too", "to", "two", "She is ___ tall to ride."],
  ["two", "to", "too", "I have ___ dogs."],
  ["its", "it's", "its'", "The dog wagged ___ tail."],
  ["it's", "its", "its'", "___ raining outside."],
  ["hear", "here", "heer", "I can ___ the music."],
  ["here", "hear", "heer", "Come over ___."],
  ["write", "right", "rite", "I ___ in my journal."],
  ["right", "write", "rite", "Turn ___ at the corner."],
];

const G3_WORD_FAMILIES: [string, string[]][] = [
  ["play", ["player", "played", "playing", "playful"]],
  ["help", ["helper", "helped", "helping", "helpful"]],
  ["teach", ["teacher", "teaching", "taught"]],
  ["kind", ["kindly", "kindness", "unkind"]],
  ["happy", ["happily", "happiness", "unhappy"]],
  ["care", ["careful", "careless", "caring"]],
  ["friend", ["friendly", "friendship", "unfriendly"]],
];

const G3_IDIOMS: [string, string, string[]][] = [
  ["It's raining cats and dogs.", "It's raining very hard.", ["Cats and dogs are falling.", "It's a little rainy.", "Animals are outside."]],
  ["Break a leg!", "Good luck!", ["Go to the hospital.", "Be careful.", "Stop running."]],
  ["She let the cat out of the bag.", "She told a secret.", ["She freed a cat.", "She lost her bag.", "She went shopping."]],
  ["He's feeling under the weather.", "He feels sick.", ["He's standing in rain.", "He's cold.", "He's looking at clouds."]],
  ["That test was a piece of cake.", "That test was very easy.", ["The test had cake.", "The test was about cake.", "The test was hard."]],
  ["Hold your horses!", "Be patient! Wait!", ["Grab a horse.", "Run faster.", "Go riding."]],
];

const G3_WORD_CATEGORIES: [string[], string, string][] = [
  [["apple", "banana", "carrot", "grape"], "carrot", "It's a vegetable, not a fruit."],
  [["dog", "cat", "chair", "bird"], "chair", "It's furniture, not an animal."],
  [["red", "blue", "happy", "green"], "happy", "It's a feeling, not a color."],
  [["car", "bus", "train", "book"], "book", "It's not a vehicle."],
  [["shirt", "pants", "hat", "table"], "table", "It's furniture, not clothing."],
  [["piano", "guitar", "drum", "pencil"], "pencil", "It's not a musical instrument."],
  [["spring", "summer", "winter", "Tuesday"], "Tuesday", "It's a day, not a season."],
];

const G3_GLOSSARY_QUESTIONS: [string, string, string[]][] = [
  ["A GLOSSARY in a textbook is found:", "at the back, with word definitions", ["at the front", "in the middle", "in the index"]],
  ["Guide words in a dictionary help you:", "find words faster on a page", ["spell words", "read faster", "write sentences"]],
  ["In a dictionary, words are listed in:", "alphabetical order", ["order of importance", "random order", "size order"]],
  ["Which word comes FIRST in a dictionary?", "apple", ["banana", "cherry", "date"]],
  ["Which word comes FIRST in a dictionary?", "elephant", ["garden", "hippo", "igloo"]],
  ["The DEFINITION of a word tells you:", "what the word means", ["how to draw it", "when to use commas", "who said it"]],
];

// ─── G4 extra word banks ───
const G4_REL_PRONOUNS: [string, string, string[]][] = [
  ["who", "The girl ___ won the race is my friend.", ["which", "whose", "whom"]],
  ["which", "The book ___ I read was great.", ["who", "whom", "whose"]],
  ["whose", "The boy ___ dog ran away is sad.", ["who", "which", "whom"]],
  ["whom", "The teacher ___ I admire is leaving.", ["who", "which", "whose"]],
  ["that", "The house ___ we visited was old.", ["who", "whom", "whose"]],
  ["who", "Students ___ study hard get good grades.", ["which", "whom", "whose"]],
  ["which", "The car, ___ was red, drove fast.", ["who", "whom", "whose"]],
  ["whose", "The woman ___ purse was stolen called police.", ["who", "which", "that"]],
];

const G4_REL_ADVERBS: [string, string, string[]][] = [
  ["where", "The park ___ we play is nearby.", ["when", "why", "how"]],
  ["when", "I remember the day ___ we met.", ["where", "why", "how"]],
  ["why", "Tell me the reason ___ you are late.", ["where", "when", "how"]],
  ["where", "This is the school ___ I study.", ["when", "why", "who"]],
  ["when", "Summer is the season ___ we swim.", ["where", "why", "who"]],
  ["why", "Nobody knows ___ the sky is blue.", ["where", "when", "who"]],
];

const G4_MODAL_AUX: [string, string][] = [
  ["can", "I ___ swim very well."],
  ["could", "She ___ help us if she wanted."],
  ["may", "You ___ leave the room now."],
  ["might", "It ___ rain tomorrow."],
  ["must", "You ___ wear a seatbelt."],
  ["should", "You ___ eat more vegetables."],
  ["would", "I ___ like some tea, please."],
  ["shall", "We ___ begin the meeting."],
];

const G4_PROGRESSIVE: [string, string, string, string][] = [
  ["She is running.", "present progressive", "She ran.", "She runs."],
  ["He was eating lunch.", "past progressive", "He ate lunch.", "He eats lunch."],
  ["They will be playing.", "future progressive", "They played.", "They play."],
  ["I am reading a book.", "present progressive", "I read a book.", "I will read."],
  ["We were watching a movie.", "past progressive", "We watched.", "We watch."],
  ["She will be dancing.", "future progressive", "She danced.", "She dances."],
];

const G4_ADJ_ORDER: [string, string[]][] = [
  ["a small red bag", ["a red small bag", "a bag red small", "small a red bag"]],
  ["a beautiful old house", ["an old beautiful house", "a house old beautiful", "old a beautiful house"]],
  ["three large brown dogs", ["brown three large dogs", "large brown three dogs", "three brown large dogs"]],
  ["a lovely little French cafe", ["a French little lovely cafe", "a little lovely French cafe", "French a lovely little cafe"]],
  ["two big round balls", ["round two big balls", "big round two balls", "two round big balls"]],
  ["a tall young American man", ["an American tall young man", "a young tall American man", "young a tall American man"]],
];

const G4_PREP_PHRASES: [string, string, string[]][] = [
  ["The cat sat on the mat.", "on the mat", ["The cat", "sat", "the mat"]],
  ["She ran through the park.", "through the park", ["She ran", "She", "the park"]],
  ["He hid under the table.", "under the table", ["He hid", "He", "the table"]],
  ["We walked to the store.", "to the store", ["We walked", "We", "the store"]],
  ["The bird flew over the house.", "over the house", ["The bird", "flew", "the house"]],
  ["She sat beside her friend.", "beside her friend", ["She sat", "She", "her friend"]],
  ["The book is on the shelf.", "on the shelf", ["The book", "is", "the shelf"]],
];

const G4_COMPOUND_SENT: [string, string[]][] = [
  ["I wanted to go, but it was raining.", ["I wanted to go but it was raining.", "I wanted to go, it was raining.", "I wanted to go. But it was raining."]],
  ["She studied hard, and she passed the test.", ["She studied hard and she passed.", "She studied hard, she passed.", "She studied hard. And she passed."]],
  ["He was tired, so he went to bed.", ["He was tired so he went to bed.", "He was tired, he went to bed.", "He was tired. So he went to bed."]],
  ["We can go now, or we can wait.", ["We can go now or we can wait.", "We can go now, we can wait.", "We can go now. Or we can wait."]],
];

const G4_FRAGMENTS_G4 = [
  "Because she was late.", "Running down the street.", "The very big.",
  "After the game ended.", "Since it was cold outside.", "Although he tried hard.",
];
const G4_RUNONS_G4 = [
  "I went home it was late I was tired.",
  "She likes pizza he likes tacos they eat together.",
  "The dog ran fast the cat climbed the tree.",
  "We played games we ate snacks we had fun.",
];
const G4_COMPLETE_G4 = [
  "She ran home.", "After school, we played.", "The dog barked.", "I finished my homework.",
];

const G4_DIRECT_SPEECH: [string, string[]][] = [
  ['"I\'m hungry," said Tom.', ['"I\'m hungry said Tom.', 'I\'m hungry, said Tom.', '"I\'m hungry, said Tom."']],
  ['"Let\'s go!" shouted Amy.', ['"Let\'s go! shouted Amy.', 'Let\'s go! shouted Amy.', '"Let\'s go!" Amy shouted"']],
  ['"Where is my hat?" asked Ben.', ['Where is my hat? asked Ben.', '"Where is my hat? asked Ben.', '"Where is my hat?" Ben asked."']],
  ['"I love this book," she whispered.', ['I love this book, she whispered.', '"I love this book she whispered.', '"I love this book," she whispered"']],
];

const G4_CONFUSED_WORDS: [string, string, string, string[]][] = [
  ["too", "She is ___ tired to run.", "also / excessively", ["to", "two", "tow"]],
  ["to", "I want ___ go home.", "toward / infinitive", ["too", "two", "tow"]],
  ["two", "I have ___ dogs.", "the number 2", ["to", "too", "tow"]],
  ["their", "___ house is very big.", "belonging to them", ["there", "they're", "thier"]],
  ["there", "The ball is over ___.", "in that place", ["their", "they're", "thier"]],
  ["they're", "___ coming to the party.", "they are", ["their", "there", "thier"]],
  ["its", "The dog wagged ___ tail.", "belonging to it", ["it's", "its'", "is"]],
  ["it's", "___ going to rain today.", "it is", ["its", "its'", "is"]],
  ["your", "Is this ___ book?", "belonging to you", ["you're", "yore", "yor"]],
  ["you're", "___ doing a great job!", "you are", ["your", "yore", "yor"]],
];

const G4_CAPITALIZATION: [string, string[]][] = [
  ["We visited Washington, D.C., last July.", ["We visited washington, d.c., last july.", "we Visited Washington, D.C., Last July.", "We visited Washington, d.c., last July."]],
  ["My friend Sarah lives in Texas.", ["My friend sarah lives in texas.", "my Friend Sarah lives in Texas.", "My friend Sarah lives in texas."]],
  ["On Monday, we celebrate Thanksgiving.", ["On monday, we celebrate thanksgiving.", "on Monday, we celebrate Thanksgiving.", "On Monday, we celebrate thanksgiving."]],
  ["Dr. Smith works at Central Hospital.", ["dr. smith works at central hospital.", "Dr. smith works at Central hospital.", "dr. Smith works at central Hospital."]],
];

const G4_COMMAS_COMPOUND: [string, string, string[]][] = [
  ["She studied hard, and she passed the test.", "hard, and", ["She, studied", "passed, the", "studied, hard"]],
  ["He was tired, so he went home.", "tired, so", ["He, was", "went, home", "so, he"]],
  ["I like cats, but she prefers dogs.", "cats, but", ["I, like", "she, prefers", "but, she"]],
  ["We can go now, or we can wait.", "now, or", ["We, can", "can, wait", "or, we"]],
];

const G4_SPELLING_WORDS: [string, string[]][] = [
  ["necessary", ["necesary", "neccessary", "nessecary"]],
  ["beautiful", ["beautful", "beutiful", "beautifull"]],
  ["different", ["diffrent", "diferent", "differant"]],
  ["important", ["importent", "importint", "imortant"]],
  ["together", ["togather", "togehter", "togther"]],
  ["separate", ["seperate", "seprate", "separete"]],
  ["beginning", ["begining", "beggining", "begginning"]],
  ["probably", ["probaly", "probibly", "probabley"]],
  ["surprise", ["surprize", "surprice", "suprise"]],
  ["favorite", ["favorit", "favourate", "favrite"]],
];

const G4_SYNONYMS: [string, string, string[]][] = [
  ["happy", "joyful", ["sad", "angry", "tired"]],
  ["big", "large", ["small", "short", "thin"]],
  ["fast", "quick", ["slow", "lazy", "heavy"]],
  ["brave", "courageous", ["cowardly", "weak", "shy"]],
  ["smart", "intelligent", ["foolish", "lazy", "slow"]],
  ["angry", "furious", ["happy", "calm", "gentle"]],
  ["pretty", "beautiful", ["ugly", "dirty", "plain"]],
  ["scared", "frightened", ["brave", "bold", "calm"]],
];
const G4_ANTONYMS: [string, string, string[]][] = [
  ["brave", "cowardly", ["bold", "fearless", "daring"]],
  ["happy", "sad", ["glad", "joyful", "cheerful"]],
  ["big", "small", ["large", "huge", "giant"]],
  ["fast", "slow", ["quick", "rapid", "speedy"]],
  ["hot", "cold", ["warm", "burning", "boiling"]],
  ["light", "dark", ["bright", "sunny", "glowing"]],
  ["old", "young", ["ancient", "aged", "elderly"]],
  ["loud", "quiet", ["noisy", "blaring", "deafening"]],
];

const G4_CONTEXT_G4: [string, string, string, string[]][] = [
  ["The parched earth cracked from lack of rain.", "parched", "extremely dry", ["very wet", "very cold", "very dark"]],
  ["She sprinted down the corridor to catch the bus.", "sprinted", "ran very fast", ["walked slowly", "skipped", "crawled"]],
  ["The dilapidated house had broken windows and a sagging roof.", "dilapidated", "in bad condition / falling apart", ["brand new", "very tall", "brightly painted"]],
  ["He was elated when he won first place.", "elated", "extremely happy", ["very sad", "very tired", "very angry"]],
  ["The frigid wind made everyone shiver.", "frigid", "extremely cold", ["very hot", "very loud", "very soft"]],
  ["She scrutinized every detail of the painting.", "scrutinized", "examined very carefully", ["ignored", "painted over", "sold"]],
];

const G4_DOMAIN_VOCAB: [string, string, string[]][] = [
  ["photosynthesis", "science", ["math", "art", "music"]],
  ["equation", "math", ["science", "art", "history"]],
  ["democracy", "social studies", ["science", "math", "art"]],
  ["rhythm", "music", ["math", "science", "geography"]],
  ["habitat", "science", ["math", "music", "art"]],
  ["fraction", "math", ["science", "music", "history"]],
  ["continent", "geography", ["math", "music", "art"]],
  ["melody", "music", ["math", "science", "geography"]],
  ["volcano", "science", ["music", "art", "math"]],
  ["peninsula", "geography", ["music", "science", "math"]],
];

const G4_SIMILES: [string, string[]][] = [
  ["She is as fast as lightning.", ["She is lightning.", "Lightning is fast.", "She ran."]],
  ["He is as brave as a lion.", ["He is a lion.", "Lions are brave.", "He fought."]],
  ["The snow was like a white blanket.", ["The snow was a blanket.", "Blankets are white.", "It snowed."]],
  ["Her smile was like sunshine.", ["Her smile was sunshine.", "Sunshine is bright.", "She smiled."]],
  ["He eats like a pig.", ["He is a pig.", "Pigs eat.", "He ate."]],
];
const G4_METAPHORS: [string, string[]][] = [
  ["Time is money.", ["Time is like money.", "Money takes time.", "Time is fast."]],
  ["She is a shining star.", ["She is like a star.", "Stars shine.", "She is bright."]],
  ["Life is a roller coaster.", ["Life is like a roller coaster.", "Roller coasters are fun.", "Life moves."]],
  ["He has a heart of gold.", ["His heart is like gold.", "Gold is valuable.", "He is kind."]],
  ["The world is a stage.", ["The world is like a stage.", "Stages are big.", "We act."]],
];

export const G1_Generators = {
  phonics_g1: {
    short_long_vowels_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const isLong = rng() > 0.5;
        const word = pick(isLong ? GRADE1_WORDS.longVowel : GRADE1_WORDS.shortVowel, rng);
        const wrong = shuffle(isLong ? GRADE1_WORDS.shortVowel : GRADE1_WORDS.longVowel, rng).slice(0, 3);
        q.push(createMCQ("phonics_g1", "short_long_vowels_g1",
          `Which word has a ${isLong ? "LONG" : "SHORT"} vowel sound?`, word, wrong));
      }
      return q;
    },
    digraphs_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pairs: [string, string][] = [["sh","ship"],["sh","shop"],["sh","show"],["ch","chat"],["ch","chin"],["ch","chop"],["th","them"],["th","thin"],["th","that"],["wh","when"],["wh","what"],["wh","white"]];
      for (let i = 0; i < 30; i++) {
        const [dg, word] = pick(pairs, rng);
        const wrong = ["sh","ch","th","wh"].filter(d => d !== dg);
        q.push(createMCQ("phonics_g1", "digraphs_g1",
          `Which two letters make ONE sound in '${word}'?`, dg, wrong));
      }
      return q;
    },
    uppercase_lowercase_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const allLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for (let i = 0; i < 30; i++) {
        const idx = Math.floor(rng() * 26);
        const isUpper = rng() > 0.5;
        const correct = isUpper ? allLetters[idx] : allLetters[idx].toLowerCase();
        const wrongPool = isUpper
          ? [allLetters[idx].toLowerCase(), allLetters[(idx+3)%26].toLowerCase(), allLetters[(idx+7)%26].toLowerCase()]
          : [allLetters[idx], allLetters[(idx+3)%26], allLetters[(idx+7)%26]];
        q.push(createMCQ("phonics_g1", "uppercase_lowercase_g1",
          `Which letter is ${isUpper ? "UPPERCASE" : "lowercase"}?`, correct, wrongPool));
      }
      return q;
    },
    syllables_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [word, count] = pick(G1_SYLLABLE_WORDS, rng);
        const wrong = [1, 2, 3, 4].filter(n => n !== count).map(String).slice(0, 3);
        q.push(createMCQ("phonics_g1", "syllables_g1",
          `How many syllables does the word '${word}' have?`, String(count), wrong));
      }
      return q;
    },
    blends_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const blendWords: [string, string][] = [["st","stop"],["st","stand"],["gr","green"],["bl","black"],["gr","ground"],["pl","place"],["tr","tree"],["br","bring"],["sm","small"],["cr","cross"],["dr","drive"],["fl","flags"],["str","strong"],["tr","trade"],["pl","please"],["cl","clap"],["sl","slide"],["sp","spin"],["sn","snap"],["sw","swim"]];
      for (let i = 0; i < 30; i++) {
        const [blend, word] = pick(blendWords, rng);
        const allBlends = ["st","gr","bl","pl","tr","br","sm","cr","dr","fl","str","cl","sl","sp","sn","sw"];
        const wrong = allBlends.filter(b => b !== blend).slice(0, 5);
        q.push(createMCQ("phonics_g1", "blends_g1", `Which blend starts '${word}'?`, blend, shuffle(wrong, rng).slice(0, 3)));
      }
      return q;
    },
    rhyming_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const rhymes: [string, string][] = [["cat","bat"],["cat","hat"],["dog","log"],["dog","fog"],["hat","mat"],["sit","fit"],["sun","fun"],["sun","run"],["bed","red"],["pig","dig"],["hop","top"],["bug","rug"],["man","can"],["pen","ten"],["cake","lake"]];
      for (let i = 0; i < 30; i++) {
        const [w1, w2] = pick(rhymes, rng);
        const nonRhyming = ["tree", "fish", "bird", "door", "star", "moon", "blue", "ship", "frog", "bell"];
        const wrong = shuffle(nonRhyming, rng).slice(0, 3);
        q.push(createMCQ("phonics_g1", "rhyming_g1", `Which word rhymes with '${w1}'?`, w2, wrong));
      }
      return q;
    },
  },
  words_g1: {
    sight_words_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const nonsense = ["zxt", "qwp", "mnb", "bkf", "jlq", "xvr", "pzm", "tkw"];
      for (let i = 0; i < 30; i++) {
        const word = pick(G1_SIGHT_WORDS, rng);
        const wrong = shuffle(nonsense, rng).slice(0, 3);
        q.push(createMCQ("words_g1", "sight_words_g1",
          `Which is a real SIGHT WORD that you should know?`, word, wrong));
      }
      return q;
    },
    nouns_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const allNouns = [...G1_NOUNS.people, ...G1_NOUNS.places, ...G1_NOUNS.things];
      const notNouns = ["run", "jump", "fast", "big", "happy", "under", "quickly", "softly"];
      for (let i = 0; i < 30; i++) {
        const variant = rng();
        if (variant < 0.33) {
          const noun = pick(allNouns, rng);
          const wrong = shuffle(notNouns, rng).slice(0, 3);
          q.push(createMCQ("words_g1", "nouns_g1",
            `Which word is a NOUN (person, place, or thing)?`, noun, wrong));
        } else if (variant < 0.66) {
          const noun = pick(G1_NOUNS.people, rng);
          const wrong = [...shuffle(G1_NOUNS.places, rng).slice(0, 1), ...shuffle(G1_NOUNS.things, rng).slice(0, 2)];
          q.push(createMCQ("words_g1", "nouns_g1",
            `Which noun names a PERSON?`, noun, wrong));
        } else {
          const noun = pick(G1_NOUNS.places, rng);
          const wrong = [...shuffle(G1_NOUNS.people, rng).slice(0, 1), ...shuffle(G1_NOUNS.things, rng).slice(0, 2)];
          q.push(createMCQ("words_g1", "nouns_g1",
            `Which noun names a PLACE?`, noun, wrong));
        }
      }
      return q;
    },
    verbs_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const notVerbs = ["ball", "red", "cat", "big", "happy", "tree", "shoe", "blue"];
      for (let i = 0; i < 30; i++) {
        const verb = pick(G1_VERBS, rng);
        const wrong = shuffle(notVerbs, rng).slice(0, 3);
        q.push(createMCQ("words_g1", "verbs_g1",
          `Which word is a VERB (action word)?`, verb, wrong));
      }
      return q;
    },
    articles_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const anWords = ["apple", "egg", "ice cream", "orange", "umbrella", "elephant", "ant", "owl"];
      const aWords = ["cat", "dog", "ball", "tree", "house", "car", "book", "pen"];
      for (let i = 0; i < 30; i++) {
        const useAn = rng() > 0.5;
        const word = pick(useAn ? anWords : aWords, rng);
        const correct = useAn ? "an" : "a";
        const wrong = useAn ? ["a", "the", "some"] : ["an", "the", "some"];
        q.push(createMCQ("words_g1", "articles_g1",
          `Which article fits best? '___ ${word}'`, correct, wrong));
      }
      return q;
    },
    compound_words_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const notCompound = ["happy", "running", "beautiful", "quickly", "children", "playing", "friendly", "jumped"];
      for (let i = 0; i < 30; i++) {
        const [p1, p2] = pick(G1_COMPOUNDS, rng);
        const compound = p1 + p2;
        if (rng() > 0.5) {
          const wrong = shuffle(notCompound, rng).slice(0, 3);
          q.push(createMCQ("words_g1", "compound_words_g1",
            `Which is a COMPOUND WORD (two words joined)?`, compound, wrong));
        } else {
          const otherCompounds = G1_COMPOUNDS.filter(c => c[0] !== p1 || c[1] !== p2).map(c => c[0] + c[1]);
          const wrongParts = [`${p1}ball`, `${p2}light`, `sun${p2}`].filter(w => w !== compound);
          q.push(createMCQ("words_g1", "compound_words_g1",
            `'${p1}' + '${p2}' = ?`, compound,
            [pick(otherCompounds, rng), ...wrongParts.slice(0, 2)]));
        }
      }
      return q;
    },
  },
  sentences_g1: {
    end_punctuation_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const data: [string, string][] = [
        ["I like cats", "."], ["She is tall", "."], ["The dog is big", "."], ["We go to school", "."],
        ["Where do you live", "?"], ["Can I go outside", "?"], ["What is your name", "?"], ["Do you like pizza", "?"],
        ["Watch out", "!"], ["That is amazing", "!"], ["What a great day", "!"], ["Stop right there", "!"],
      ];
      for (let i = 0; i < 30; i++) {
        const [sentence, mark] = pick(data, rng);
        const wrong = [".", "?", "!"].filter(m => m !== mark);
        q.push(createMCQ("sentences_g1", "end_punctuation_g1",
          `Which punctuation mark goes at the end? '${sentence}___'`, mark, wrong));
      }
      return q;
    },
    capitalization_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const correct_cap = [
        ["My dog is big.", "my dog is big.", "MY DOG IS BIG.", "my Dog Is big."],
        ["She can run fast.", "she can run fast.", "SHE CAN RUN FAST.", "she Can run Fast."],
        ["The cat sat down.", "the cat sat down.", "THE CAT SAT DOWN.", "the Cat Sat down."],
        ["We like pizza.", "we like pizza.", "WE LIKE PIZZA.", "We Like Pizza."],
        ["He went to school.", "he went to school.", "HE WENT TO SCHOOL.", "he Went To school."],
        ["Tom has a red ball.", "tom has a red ball.", "TOM HAS A RED BALL.", "tom Has A Red ball."],
        ["My friend Max is tall.", "my friend max is tall.", "MY FRIEND MAX IS TALL.", "my Friend max Is tall."],
      ];
      for (let i = 0; i < 30; i++) {
        const [right, ...wrongs] = pick(correct_cap, rng);
        q.push(createMCQ("sentences_g1", "capitalization_g1",
          "Which sentence is CORRECTLY capitalized?", right, wrongs));
      }
      return q;
    },
    sentence_vs_not_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const sentence = pick(G1_COMPLETE_SENTENCES, rng);
        const wrong = shuffle(G1_FRAGMENTS, rng).slice(0, 3);
        q.push(createMCQ("sentences_g1", "sentence_vs_not_g1",
          "Which is a COMPLETE sentence?", sentence, wrong));
      }
      return q;
    },
    declarative_interrogative_g1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const askDecl = rng() > 0.5;
        if (askDecl) {
          const correct = pick(G1_SENTENCES.declarative, rng);
          const wrong = [...shuffle(G1_SENTENCES.interrogative, rng).slice(0, 2), pick(G1_SENTENCES.exclamatory, rng)];
          q.push(createMCQ("sentences_g1", "declarative_interrogative_g1",
            "Which is a DECLARATIVE sentence (tells something)?", correct, wrong));
        } else {
          const correct = pick(G1_SENTENCES.interrogative, rng);
          const wrong = [...shuffle(G1_SENTENCES.declarative, rng).slice(0, 2), pick(G1_SENTENCES.exclamatory, rng)];
          q.push(createMCQ("sentences_g1", "declarative_interrogative_g1",
            "Which is an INTERROGATIVE sentence (asks a question)?", correct, wrong));
        }
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
      for (let i = 0; i < 30; i++) {
        if (isMCQ(2, rng)) {
          const askProper = rng() > 0.5;
          if (askProper) {
            const correct = pick(G2_PROPER_NOUNS, rng);
            const wrong = shuffle(G2_COMMON_NOUNS, rng).slice(0, 3);
            q.push(createMCQ("pos_g2", "nouns_common_proper_g2",
              "Which is a PROPER noun (needs a capital letter)?", correct, wrong));
          } else {
            const correct = pick(G2_COMMON_NOUNS, rng);
            const wrong = shuffle(G2_PROPER_NOUNS, rng).slice(0, 3);
            q.push(createMCQ("pos_g2", "nouns_common_proper_g2",
              "Which is a COMMON noun?", correct, wrong));
          }
        } else {
          const word = pick([...G2_COMMON_NOUNS, ...G2_PROPER_NOUNS], rng);
          const isProper = G2_PROPER_NOUNS.includes(word);
          q.push(createTyping("pos_g2", "nouns_common_proper_g2",
            `Is '${word}' a common or proper noun? Type 'common' or 'proper':`,
            isProper ? "proper" : "common"));
        }
      }
      return q;
    },
    nouns_plural_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [sing, plur] = pick(G2_SINGULAR_PLURAL, rng);
        if (isMCQ(2, rng)) {
          const wrong = G2_SINGULAR_PLURAL.filter(p => p[0] !== sing).map(p => p[1]);
          q.push(createMCQ("pos_g2", "nouns_plural_g2",
            `What is the PLURAL of '${sing}'?`, plur, shuffle(wrong, rng).slice(0, 3)));
        } else {
          q.push(createTyping("pos_g2", "nouns_plural_g2",
            `Write the plural of '${sing}':`, plur));
        }
      }
      return q;
    },
    collective_nouns_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [group, noun] = pick(G2_COLLECTIVE, rng);
        if (isMCQ(2, rng)) {
          const wrong = G2_COLLECTIVE.filter(c => c[1] !== noun).map(c => c[1]);
          q.push(createMCQ("pos_g2", "collective_nouns_g2",
            `What is the collective noun for a group of ${group}?`, noun, shuffle(wrong, rng).slice(0, 3)));
        } else {
          q.push(createTyping("pos_g2", "collective_nouns_g2",
            `What is the collective noun for a group of ${group}?`, noun));
        }
      }
      return q;
    },
    verbs_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const actionVerbs = ["run", "jump", "play", "eat", "sleep", "read", "write", "sing", "swim", "kick"];
      const linkingVerbs = ["is", "are", "was", "were", "am", "been", "seem", "become"];
      const notVerbs = ["happy", "blue", "quickly", "small", "table", "red"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(2, rng)) {
          const askLinking = rng() > 0.6;
          if (askLinking) {
            const verb = pick(linkingVerbs, rng);
            const wrong = shuffle(actionVerbs, rng).slice(0, 3);
            q.push(createMCQ("pos_g2", "verbs_g2", "Which verb is a LINKING verb?", verb, wrong));
          } else {
            const verb = pick(actionVerbs, rng);
            const wrong = shuffle(notVerbs, rng).slice(0, 3);
            q.push(createMCQ("pos_g2", "verbs_g2", "Which is an ACTION VERB?", verb, wrong));
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
      for (let i = 0; i < 30; i++) {
        const [base, past, wrongPast] = pick(G2_IRREGULAR_PAST, rng);
        if (isMCQ(2, rng)) {
          const otherPasts = G2_IRREGULAR_PAST.filter(v => v[0] !== base).map(v => v[1]);
          q.push(createMCQ("pos_g2", "irregular_past_g2",
            `What is the past tense of '${base}'?`, past,
            [wrongPast, ...shuffle(otherPasts, rng).slice(0, 2)]));
        } else {
          q.push(createTyping("pos_g2", "irregular_past_g2",
            `Write the past tense of '${base}':`, past));
        }
      }
      return q;
    },
    adj_adv_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [adj, adv] = pick(G2_ADJ_ADV, rng);
        if (isMCQ(2, rng)) {
          const askAdv = rng() > 0.5;
          if (askAdv) {
            const wrong = [adj, adj + "ness", adj + "er"];
            q.push(createMCQ("pos_g2", "adj_adv_g2",
              `Which word is an ADVERB (tells HOW)?`, adv, wrong));
          } else {
            const wrong = [adv, adj + "ly", adj + "ness"];
            q.push(createMCQ("pos_g2", "adj_adv_g2",
              `Which word is an ADJECTIVE (describes a noun)?`, adj, wrong));
          }
        } else {
          q.push(createTyping("pos_g2", "adj_adv_g2",
            `Turn the adjective '${adj}' into an adverb:`, adv));
        }
      }
      return q;
    },
    pronouns_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(2, rng)) {
          const askReflexive = rng() > 0.5;
          if (askReflexive) {
            const correct = pick(G2_PRONOUNS.reflexive, rng);
            const wrong = shuffle(G2_PRONOUNS.personal, rng).slice(0, 3);
            q.push(createMCQ("pos_g2", "pronouns_g2",
              "Which is a REFLEXIVE pronoun?", correct, wrong));
          } else {
            const correct = pick(G2_PRONOUNS.personal, rng);
            const notPro = ["run", "happy", "dog", "blue"];
            q.push(createMCQ("pos_g2", "pronouns_g2",
              "Which word is a PRONOUN?", correct, shuffle(notPro, rng).slice(0, 3)));
          }
        } else {
          q.push(createTyping("pos_g2", "pronouns_g2",
            "Name a reflexive pronoun (ends in -self or -selves):", pick(G2_PRONOUNS.reflexive, rng)));
        }
      }
      return q;
    },
  },
  sentences_g2: {
    simple_compound_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [sent, type] = pick(G2_COMPOUND_SIMPLE, rng);
        if (isMCQ(2, rng)) {
          const askType = type;
          const wrong = G2_COMPOUND_SIMPLE.filter(s => s[1] !== askType).map(s => s[0]);
          q.push(createMCQ("sentences_g2", "simple_compound_g2",
            `Which is a ${askType.toUpperCase()} sentence?`, sent, shuffle(wrong, rng).slice(0, 3)));
        } else {
          q.push(createTyping("sentences_g2", "simple_compound_g2",
            `Is this a simple or compound sentence? '${sent}'`, type));
        }
      }
      return q;
    },
    expanding_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const expanded: [string, string, string, string][] = [
        ["The big red dog ran quickly.", "The dog ran.", "A dog.", "Dog."],
        ["My little sister happily skipped home.", "My sister skipped.", "Sister skipped.", "Sister."],
        ["The tall green tree swayed gently.", "The tree swayed.", "A tree.", "Tree."],
        ["A fluffy white cat slept peacefully.", "The cat slept.", "A cat.", "Cat."],
        ["The bright yellow sun shone warmly.", "The sun shone.", "A sun.", "Sun."],
      ];
      for (let i = 0; i < 30; i++) {
        const [most, ...less] = pick(expanded, rng);
        if (isMCQ(2, rng)) {
          q.push(createMCQ("sentences_g2", "expanding_g2",
            "Which sentence is the MOST expanded (most descriptive)?", most, less));
        } else {
          q.push(createTyping("sentences_g2", "expanding_g2",
            `Expand this sentence by adding details: '${less[0]}'`,
            [most]));
        }
      }
      return q;
    },
  },
  spelling_g2: {
    vowel_patterns_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const longA = ["cake", "lake", "make", "take", "day", "say", "play", "way"];
      const shortA = ["cat", "hat", "bat", "man", "can", "ran", "sat", "map"];
      const longI = ["bike", "kite", "five", "mine", "time", "like", "ride", "hide"];
      const shortI = ["sit", "pig", "big", "pin", "hit", "bit", "dig", "win"];
      for (let i = 0; i < 30; i++) {
        const vowelPair = rng() > 0.5 ? 0 : 1; // 0=a, 1=i
        const isLong = rng() > 0.5;
        const pool = vowelPair === 0 ? (isLong ? longA : shortA) : (isLong ? longI : shortI);
        const wrongPool = vowelPair === 0 ? (isLong ? shortA : longA) : (isLong ? shortI : longI);
        const vowel = vowelPair === 0 ? "a" : "i";
        const word = pick(pool, rng);
        const wrong = shuffle(wrongPool, rng).slice(0, 3);
        q.push(createMCQ("spelling_g2", "vowel_patterns_g2",
          `Which word has a ${isLong ? "LONG" : "SHORT"} '${vowel}' sound?`, word, wrong));
      }
      return q;
    },
    vowel_teams_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const teams: [string, string[]][] = [
        ["ai", ["rain", "main", "pain", "tail", "wait"]],
        ["ea", ["beat", "meat", "heat", "read", "seat"]],
        ["oa", ["boat", "coat", "goat", "road", "load"]],
        ["oo", ["moon", "food", "cool", "room", "pool"]],
        ["ee", ["feet", "meet", "seed", "keep", "deep"]],
      ];
      for (let i = 0; i < 30; i++) {
        const [team, words] = pick(teams, rng);
        const word = pick(words, rng);
        if (isMCQ(2, rng)) {
          const wrong = teams.filter(t => t[0] !== team).map(t => t[0]);
          q.push(createMCQ("spelling_g2", "vowel_teams_g2",
            `What VOWEL TEAM is in '${word}'?`, team, shuffle(wrong, rng).slice(0, 3)));
        } else {
          q.push(createTyping("spelling_g2", "vowel_teams_g2",
            `What vowel team is in '${word}'?`, team));
        }
      }
      return q;
    },
    prefixes_suffixes_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const usePrefix = rng() > 0.5;
        if (usePrefix) {
          const [prefix, word, , meaning] = pick(G2_PREFIX_DATA, rng);
          if (isMCQ(2, rng)) {
            const allMeanings = ["not", "again", "before", "too much", "after"];
            const wrong = allMeanings.filter(m => m !== meaning);
            q.push(createMCQ("spelling_g2", "prefixes_suffixes_g2",
              `What does the prefix '${prefix}-' mean in '${word}'?`, meaning, shuffle(wrong, rng).slice(0, 3)));
          } else {
            q.push(createTyping("spelling_g2", "prefixes_suffixes_g2",
              `What does the prefix '${prefix}-' mean? (as in '${word}')`, meaning));
          }
        } else {
          const [suffix, word, , meaning] = pick(G2_SUFFIX_DATA, rng);
          if (isMCQ(2, rng)) {
            const allMeanings = ["full of", "without", "one who", "in a ___ way", "state of"];
            const wrong = allMeanings.filter(m => m !== meaning);
            q.push(createMCQ("spelling_g2", "prefixes_suffixes_g2",
              `What does the suffix '${suffix}' mean in '${word}'?`, meaning, shuffle(wrong, rng).slice(0, 3)));
          } else {
            q.push(createTyping("spelling_g2", "prefixes_suffixes_g2",
              `What does the suffix '${suffix}' mean? (as in '${word}')`, meaning));
          }
        }
      }
      return q;
    },
    irregular_spelling_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [sentence, answer] = pick(G2_IRREGULAR_SPELL, rng);
        if (isMCQ(2, rng)) {
          const wrong = G2_IRREGULAR_SPELL.filter(s => s[1] !== answer).map(s => s[1]);
          q.push(createMCQ("spelling_g2", "irregular_spelling_g2",
            `Find the misspelled word and pick the CORRECT spelling: '${sentence}'`,
            answer, shuffle(wrong, rng).slice(0, 3)));
        } else {
          q.push(createTyping("spelling_g2", "irregular_spelling_g2",
            `Correct the spelling mistake: '${sentence}'`, answer));
        }
      }
      return q;
    },
    contractions_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const pairs: [string, string][] = [
        ["do not", "don't"], ["can not", "can't"], ["will not", "won't"],
        ["is not", "isn't"], ["are not", "aren't"], ["was not", "wasn't"],
        ["were not", "weren't"], ["have not", "haven't"], ["has not", "hasn't"],
        ["did not", "didn't"], ["does not", "doesn't"], ["would not", "wouldn't"],
        ["should not", "shouldn't"], ["could not", "couldn't"], ["I am", "I'm"],
        ["he is", "he's"], ["she is", "she's"], ["we are", "we're"], ["they are", "they're"],
      ];
      for (let i = 0; i < 30; i++) {
        const [expanded, contra] = pick(pairs, rng);
        if (isMCQ(2, rng)) {
          const wrong = pairs.filter(p => p[1] !== contra).map(p => p[1]);
          q.push(createMCQ("spelling_g2", "contractions_g2",
            `What is the contraction of '${expanded}'?`, contra, shuffle(wrong, rng).slice(0, 3)));
        } else {
          q.push(createTyping("spelling_g2", "contractions_g2",
            `Write the contraction of '${expanded}':`, contra));
        }
      }
      return q;
    },
  },
  vocab_g2: {
    shades_of_meaning_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [words, answer, label] = pick(G2_SHADES, rng);
        if (isMCQ(2, rng)) {
          const wrong = words.filter(w => w !== answer);
          q.push(createMCQ("vocab_g2", "shades_of_meaning_g2",
            `Which word has the ${label.toUpperCase()} meaning? (${words.join(", ")})`,
            answer, wrong));
        } else {
          q.push(createTyping("vocab_g2", "shades_of_meaning_g2",
            `Of these words, which is ${label}? ${words.join(", ")}`, answer));
        }
      }
      return q;
    },
    context_clues_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [sentence, word, meaning, wrongMeanings] = pick(G2_CONTEXT_CLUES, rng);
        if (isMCQ(2, rng)) {
          q.push(createMCQ("vocab_g2", "context_clues_g2",
            `'${sentence}' What does '${word}' mean?`, meaning, wrongMeanings));
        } else {
          q.push(createTyping("vocab_g2", "context_clues_g2",
            `'${sentence}' What does '${word}' mean?`, meaning));
        }
      }
      return q;
    },
    dictionary_g2: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const wordSets = [
        ["apple", "banana", "cherry", "date"],
        ["cat", "dog", "elephant", "fox"],
        ["game", "happy", "igloo", "jump"],
        ["kite", "lion", "moon", "nest"],
        ["ocean", "pizza", "queen", "rain"],
        ["snake", "tiger", "umbrella", "violin"],
      ];
      for (let i = 0; i < 30; i++) {
        const set = pick(wordSets, rng);
        const sorted = [...set].sort();
        if (isMCQ(2, rng)) {
          const first = sorted[0];
          const wrong = sorted.slice(1);
          q.push(createMCQ("vocab_g2", "dictionary_g2",
            `In a dictionary, which word comes FIRST? (${set.join(", ")})`, first, wrong));
        } else {
          const shuffled = shuffle(set, rng);
          q.push(createTyping("vocab_g2", "dictionary_g2",
            `Which word comes FIRST alphabetically? ${shuffled.join(", ")}`, sorted[0]));
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
      const regular: [string, string][] = [["cat","cats"],["dog","dogs"],["box","boxes"],["bus","buses"],["glass","glasses"],["dish","dishes"],["wish","wishes"],["bench","benches"],["patch","patches"],["church","churches"]];
      const all = [...regular.map(r => [r[0], r[1], r[0]+"s"] as [string,string,string]), ...G3_IRREGULAR_PLURALS];
      for (let i = 0; i < 30; i++) {
        const item = pick(all, rng);
        const [sing, plur] = item;
        if (isMCQ(3, rng)) {
          const wrongPlur = item[2] || sing + "es";
          const otherPlurals = all.filter(a => a[0] !== sing).map(a => a[1]);
          q.push(createMCQ("pos_g3", "nouns_plural_g3",
            `What is the plural of '${sing}'?`, plur,
            [wrongPlur, ...shuffle(otherPlurals, rng).slice(0, 2)]));
        } else {
          q.push(createTyping("pos_g3", "nouns_plural_g3",
            `Write the plural of '${sing}':`, plur));
        }
      }
      return q;
    },
    abstract_nouns_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(3, rng)) {
          const correct = pick(G3_ABSTRACT_NOUNS, rng);
          const wrong = shuffle(G3_CONCRETE_NOUNS, rng).slice(0, 3);
          q.push(createMCQ("pos_g3", "abstract_nouns_g3",
            "Which word is an ABSTRACT noun (an idea you cannot touch)?", correct, wrong));
        } else {
          q.push(createTyping("pos_g3", "abstract_nouns_g3",
            "Name an abstract noun (something you cannot touch):", pick(G3_ABSTRACT_NOUNS, rng)));
        }
      }
      return q;
    },
    verb_tenses_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [, past, present, future] = pick(G3_VERB_TENSES, rng);
        const tenseIdx = Math.floor(rng() * 3); // 0=past, 1=present, 2=future
        const tenseNames = ["PAST", "PRESENT", "FUTURE"];
        const sentences = [past, present, future];
        const correct = sentences[tenseIdx];
        const wrong = sentences.filter((_, idx) => idx !== tenseIdx);
        if (isMCQ(3, rng)) {
          q.push(createMCQ("pos_g3", "verb_tenses_g3",
            `Which sentence is in the ${tenseNames[tenseIdx]} tense?`, correct,
            [...wrong, pick(G3_VERB_TENSES.filter(v => v[1] !== past), rng)[tenseIdx === 0 ? 2 : 1]]));
        } else {
          q.push(createTyping("pos_g3", "verb_tenses_g3",
            `What tense is this sentence? '${correct}' (past, present, or future)`,
            tenseNames[tenseIdx].toLowerCase()));
        }
      }
      return q;
    },
    adj_comparative_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [base, comp, super_] = pick(G3_COMPARATIVE, rng);
        const askSuper = rng() > 0.5;
        if (isMCQ(3, rng)) {
          if (askSuper) {
            const wrong = [`most ${base}`, `more ${base}`, comp];
            q.push(createMCQ("pos_g3", "adj_comparative_g3",
              `What is the SUPERLATIVE form of '${base}'?`, super_, wrong));
          } else {
            const wrong = [`more ${base}`, `most ${base}`, super_];
            q.push(createMCQ("pos_g3", "adj_comparative_g3",
              `What is the COMPARATIVE form of '${base}'?`, comp, wrong));
          }
        } else {
          if (askSuper) {
            q.push(createTyping("pos_g3", "adj_comparative_g3",
              `Write the superlative form of '${base}':`, super_));
          } else {
            q.push(createTyping("pos_g3", "adj_comparative_g3",
              `Write the comparative form of '${base}':`, comp));
          }
        }
      }
      return q;
    },
    adverbs_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const typeIdx = Math.floor(rng() * 3);
        const types = ["how", "when", "where"] as const;
        const adverb = pick(G3_ADVERBS[types[typeIdx]], rng);
        if (isMCQ(3, rng)) {
          const wrong = shuffle(G3_NOT_ADVERBS, rng).slice(0, 3);
          q.push(createMCQ("pos_g3", "adverbs_g3",
            `Which word is an ADVERB that tells ${types[typeIdx].toUpperCase()}?`, adverb, wrong));
        } else {
          q.push(createTyping("pos_g3", "adverbs_g3",
            `Name an adverb that tells ${types[typeIdx]}:`, adverb));
        }
      }
      return q;
    },
    conjunctions_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const notConj = ["run", "fast", "big", "happy", "dog", "blue"];
      for (let i = 0; i < 30; i++) {
        const conj = pick(G3_CONJUNCTIONS, rng);
        if (isMCQ(3, rng)) {
          const wrong = shuffle(notConj, rng).slice(0, 3);
          q.push(createMCQ("pos_g3", "conjunctions_g3",
            "Which word is a COORDINATING conjunction?", conj, wrong));
        } else {
          q.push(createTyping("pos_g3", "conjunctions_g3",
            "Name a coordinating conjunction (FANBOYS):", conj));
        }
      }
      return q;
    },
  },
  sentences_g3: {
    subject_predicate_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const askSubject = rng() > 0.5;
        if (askSubject) {
          const [sent, subj] = pick(G3_SUBJECTS, rng);
          if (isMCQ(3, rng)) {
            const parts = sent.replace(".", "").split(" ");
            const wrong = [parts.slice(-1)[0], parts.slice(-2).join(" "), parts.slice(Math.floor(parts.length/2)).join(" ")];
            q.push(createMCQ("sentences_g3", "subject_predicate_g3",
              `In '${sent}' what is the SUBJECT?`, subj, wrong));
          } else {
            q.push(createTyping("sentences_g3", "subject_predicate_g3",
              `What is the SUBJECT of '${sent}'?`, subj));
          }
        } else {
          const [sent, pred] = pick(G3_PREDICATES, rng);
          if (isMCQ(3, rng)) {
            const parts = sent.replace(".", "").split(" ");
            const wrong = [parts[0], parts.slice(0, 2).join(" "), parts.slice(0, 3).join(" ")];
            q.push(createMCQ("sentences_g3", "subject_predicate_g3",
              `In '${sent}' what is the PREDICATE?`, pred, wrong));
          } else {
            q.push(createTyping("sentences_g3", "subject_predicate_g3",
              `What is the PREDICATE of '${sent}'?`, pred));
          }
        }
      }
      return q;
    },
    simple_compound_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const askSimple = rng() > 0.5;
        if (isMCQ(3, rng)) {
          if (askSimple) {
            const correct = pick(G3_SIMPLE_SENTENCES_G3, rng);
            const wrong = shuffle(G3_COMPOUND_SENTENCES_G3, rng).slice(0, 3);
            q.push(createMCQ("sentences_g3", "simple_compound_g3",
              "Which is a SIMPLE sentence (one independent clause)?", correct, wrong));
          } else {
            const correct = pick(G3_COMPOUND_SENTENCES_G3, rng);
            const wrong = shuffle(G3_SIMPLE_SENTENCES_G3, rng).slice(0, 3);
            q.push(createMCQ("sentences_g3", "simple_compound_g3",
              "Which is a COMPOUND sentence (two clauses joined)?", correct, wrong));
          }
        } else {
          const sent = askSimple ? pick(G3_SIMPLE_SENTENCES_G3, rng) : pick(G3_COMPOUND_SENTENCES_G3, rng);
          q.push(createTyping("sentences_g3", "simple_compound_g3",
            `Is this simple or compound? '${sent}'`, askSimple ? "simple" : "compound"));
        }
      }
      return q;
    },
    direct_quotations_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const correct = pick(G3_QUOTATIONS_CORRECT, rng);
        const wrong = shuffle(G3_QUOTATIONS_WRONG, rng).slice(0, 3);
        q.push(createMCQ("sentences_g3", "direct_quotations_g3",
          "Which sentence correctly uses quotation marks?", correct, wrong));
      }
      return q;
    },
    fragments_runons_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const askFragment = rng() > 0.5;
        if (askFragment) {
          const correct = pick(G3_FRAGMENTS_G3, rng);
          const wrong = shuffle(G3_SIMPLE_SENTENCES_G3, rng).slice(0, 3);
          q.push(createMCQ("sentences_g3", "fragments_runons_g3",
            "Which is a sentence FRAGMENT (incomplete sentence)?", correct, wrong));
        } else {
          const correct = pick(G3_RUNONS_G3, rng);
          const wrong = shuffle(G3_SIMPLE_SENTENCES_G3, rng).slice(0, 3);
          q.push(createMCQ("sentences_g3", "fragments_runons_g3",
            "Which is a RUN-ON sentence?", correct, wrong));
        }
      }
      return q;
    },
  },
  spelling_g3: {
    prefixes_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [prefix, word, meaning] = pick(G3_PREFIX_DATA, rng);
        if (isMCQ(3, rng)) {
          const allMeanings = ["not / opposite", "wrong / badly", "before", "again", "not"];
          const wrong = allMeanings.filter(m => m !== meaning);
          q.push(createMCQ("spelling_g3", "prefixes_g3",
            `What does the prefix '${prefix}' mean in '${word}'?`, meaning, shuffle(wrong, rng).slice(0, 3)));
        } else {
          q.push(createTyping("spelling_g3", "prefixes_g3",
            `What does '${prefix}' mean in '${word}'?`, meaning));
        }
      }
      return q;
    },
    suffixes_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [suffix, word, meaning] = pick(G3_SUFFIX_DATA, rng);
        if (isMCQ(3, rng)) {
          const allMeanings = ["state or quality of", "the act of", "able to be", "full of", "without", "in a ___ way", "one who", "most"];
          const wrong = allMeanings.filter(m => m !== meaning);
          q.push(createMCQ("spelling_g3", "suffixes_g3",
            `What does the suffix '${suffix}' mean in '${word}'?`, meaning, shuffle(wrong, rng).slice(0, 3)));
        } else {
          q.push(createTyping("spelling_g3", "suffixes_g3",
            `What does '${suffix}' mean in '${word}'?`, meaning));
        }
      }
      return q;
    },
    homophones_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [correct, wrong1, wrong2, sentence] = pick(G3_HOMOPHONES, rng);
        if (isMCQ(3, rng)) {
          q.push(createMCQ("spelling_g3", "homophones_g3",
            `Which word correctly completes: '${sentence}'?`, correct, [wrong1, wrong2, correct + "s"]));
        } else {
          q.push(createTyping("spelling_g3", "homophones_g3",
            `Fill in the correct word: '${sentence}'`, correct));
        }
      }
      return q;
    },
    word_families_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [root, family] = pick(G3_WORD_FAMILIES, rng);
        const familyStr = [root, ...family.slice(0, 2)].join(", ");
        if (isMCQ(3, rng)) {
          const otherFamilies = G3_WORD_FAMILIES.filter(f => f[0] !== root);
          const wrongStrs = otherFamilies.map(f => [f[0], ...f[1].slice(0, 2)].join(", "));
          q.push(createMCQ("spelling_g3", "word_families_g3",
            "Which words are in the same WORD FAMILY?", familyStr, shuffle(wrongStrs, rng).slice(0, 3)));
        } else {
          q.push(createTyping("spelling_g3", "word_families_g3",
            `What is the ROOT WORD in the family: ${family.slice(0,3).join(", ")}?`, root));
        }
      }
      return q;
    },
  },
  vocab_g3: {
    literal_nonliteral_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [idiom, meaning, wrongMeanings] = pick(G3_IDIOMS, rng);
        if (isMCQ(3, rng)) {
          q.push(createMCQ("vocab_g3", "literal_nonliteral_g3",
            `'${idiom}' This phrase means:`, meaning, wrongMeanings));
        } else {
          q.push(createTyping("vocab_g3", "literal_nonliteral_g3",
            `What does '${idiom}' really mean?`, meaning));
        }
      }
      return q;
    },
    word_relationships_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [words, oddOne, reason] = pick(G3_WORD_CATEGORIES, rng);
        if (isMCQ(3, rng)) {
          const wrong = words.filter(w => w !== oddOne);
          q.push(createMCQ("vocab_g3", "word_relationships_g3",
            `Which word does NOT belong? ${words.join(", ")}`, oddOne, wrong));
        } else {
          q.push(createTyping("vocab_g3", "word_relationships_g3",
            `Which word does NOT belong in this group? ${words.join(", ")}`, oddOne));
        }
      }
      return q;
    },
    glossaries_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [question, answer, wrongOpts] = pick(G3_GLOSSARY_QUESTIONS, rng);
        q.push(createMCQ("vocab_g3", "glossaries_g3", question, answer, wrongOpts));
      }
      return q;
    },
    compound_words_g3: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const compounds: [string, string][] = [["base","ball"],["foot","ball"],["class","room"],["sun","light"],["rain","bow"],["butter","fly"],["water","melon"],["straw","berry"],["play","ground"],["moon","light"],["any","body"],["some","thing"],["every","where"],["tooth","brush"],["fire","man"]];
      const notCompound = ["beautiful", "running", "quickly", "children", "jumped", "playing"];
      for (let i = 0; i < 30; i++) {
        const [p1, p2] = pick(compounds, rng);
        if (isMCQ(3, rng)) {
          if (rng() > 0.5) {
            const wrong = shuffle(notCompound, rng).slice(0, 3);
            q.push(createMCQ("vocab_g3", "compound_words_g3",
              "Which is a COMPOUND word?", p1 + p2, wrong));
          } else {
            q.push(createMCQ("vocab_g3", "compound_words_g3",
              `Which two words make up '${p1 + p2}'?`,
              `${p1} + ${p2}`,
              [`${p2} + ${p1}`, `${p1} + ${pick(["ing","ed","er"],rng)}`, `${pick(["re","un","pre"],rng)} + ${p2}`]));
          }
        } else {
          q.push(createTyping("vocab_g3", "compound_words_g3",
            `Combine '${p1}' + '${p2}':`, p1 + p2));
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
      for (let i = 0; i < 30; i++) {
        const [correct, sentence, wrongs] = pick(G4_REL_PRONOUNS, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("pos_g4", "relative_pronouns_g4",
            `Which relative pronoun fits? '${sentence}'`, correct, wrongs));
        } else {
          q.push(createTyping("pos_g4", "relative_pronouns_g4",
            `Fill in the relative pronoun: '${sentence}'`, correct));
        }
      }
      return q;
    },
    relative_adverbs_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [correct, sentence, wrongs] = pick(G4_REL_ADVERBS, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("pos_g4", "relative_adverbs_g4",
            `Which relative adverb fits? '${sentence}'`, correct, wrongs));
        } else {
          q.push(createTyping("pos_g4", "relative_adverbs_g4",
            `Fill in the relative adverb: '${sentence}'`, correct));
        }
      }
      return q;
    },
    modal_aux_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const notModals = ["run", "quickly", "happy", "dog", "play", "big"];
      for (let i = 0; i < 30; i++) {
        const [modal, sentence] = pick(G4_MODAL_AUX, rng);
        if (isMCQ(4, rng)) {
          if (rng() > 0.5) {
            const wrong = G4_MODAL_AUX.filter(m => m[0] !== modal).map(m => m[0]);
            q.push(createMCQ("pos_g4", "modal_aux_g4",
              `Fill in: '${sentence}'`, modal, shuffle(wrong, rng).slice(0, 3)));
          } else {
            q.push(createMCQ("pos_g4", "modal_aux_g4",
              "Which word is a MODAL AUXILIARY verb?", modal, shuffle(notModals, rng).slice(0, 3)));
          }
        } else {
          q.push(createTyping("pos_g4", "modal_aux_g4",
            `Fill in the modal verb: '${sentence}'`, modal));
        }
      }
      return q;
    },
    progressive_tenses_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [progSent, tense, wrong1, wrong2] = pick(G4_PROGRESSIVE, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("pos_g4", "progressive_tenses_g4",
            `Which sentence uses the PROGRESSIVE tense?`, progSent, [wrong1, wrong2, pick(G4_PROGRESSIVE.filter(p => p[0] !== progSent), rng)[2]]));
        } else {
          q.push(createTyping("pos_g4", "progressive_tenses_g4",
            `What kind of progressive tense is this? '${progSent}'`, tense));
        }
      }
      return q;
    },
    adjective_order_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [correct, wrongs] = pick(G4_ADJ_ORDER, rng);
        q.push(createMCQ("pos_g4", "adjective_order_g4",
          "Which phrase has adjectives in the CORRECT order?", correct, wrongs));
      }
      return q;
    },
    prep_phrases_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [sentence, phrase, wrongs] = pick(G4_PREP_PHRASES, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("pos_g4", "prep_phrases_g4",
            `Which is the PREPOSITIONAL PHRASE in: '${sentence}'`, phrase, wrongs));
        } else {
          q.push(createTyping("pos_g4", "prep_phrases_g4",
            `Write the prepositional phrase in: '${sentence}'`, phrase));
        }
      }
      return q;
    },
  },
  sentences_g4: {
    fragments_runons_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const askFragment = rng() > 0.5;
        if (askFragment) {
          const correct = pick(G4_FRAGMENTS_G4, rng);
          const wrong = shuffle(G4_COMPLETE_G4, rng).slice(0, 3);
          q.push(createMCQ("sentences_g4", "fragments_runons_g4",
            "Which is a sentence FRAGMENT?", correct, wrong));
        } else {
          const correct = pick(G4_RUNONS_G4, rng);
          const wrong = shuffle(G4_COMPLETE_G4, rng).slice(0, 3);
          q.push(createMCQ("sentences_g4", "fragments_runons_g4",
            "Which is a RUN-ON sentence?", correct, wrong));
        }
      }
      return q;
    },
    compound_sentences_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [correct, wrongs] = pick(G4_COMPOUND_SENT, rng);
        q.push(createMCQ("sentences_g4", "compound_sentences_g4",
          "Which sentence is correctly punctuated as a COMPOUND sentence?", correct, wrongs));
      }
      return q;
    },
    direct_speech_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [correct, wrongs] = pick(G4_DIRECT_SPEECH, rng);
        q.push(createMCQ("sentences_g4", "direct_speech_g4",
          "Which sentence correctly punctuates DIRECT SPEECH?", correct, wrongs));
      }
      return q;
    },
    confused_words_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [correct, sentence, , wrongs] = pick(G4_CONFUSED_WORDS, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("sentences_g4", "confused_words_g4",
            `Which word correctly completes: '${sentence}'`, correct, wrongs));
        } else {
          q.push(createTyping("sentences_g4", "confused_words_g4",
            `Fill in the correct word: '${sentence}'`, correct));
        }
      }
      return q;
    },
  },
  spelling_g4: {
    capitalization_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [correct, wrongs] = pick(G4_CAPITALIZATION, rng);
        q.push(createMCQ("spelling_g4", "capitalization_g4",
          "Which sentence has CORRECT capitalization?", correct, wrongs));
      }
      return q;
    },
    commas_compound_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [sentence, correct, wrongs] = pick(G4_COMMAS_COMPOUND, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("spelling_g4", "commas_compound_g4",
            `In '${sentence}' where should the COMMA go?`, correct, wrongs));
        } else {
          q.push(createTyping("spelling_g4", "commas_compound_g4",
            `In '${sentence}' — write the two words with the comma between them (e.g. 'hard, and'):`, correct));
        }
      }
      return q;
    },
    spelling_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [correct, wrongs] = pick(G4_SPELLING_WORDS, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("spelling_g4", "spelling_g4",
            "Which word is spelled CORRECTLY?", correct, wrongs));
        } else {
          const wrongSpelling = pick(wrongs, rng);
          q.push(createTyping("spelling_g4", "spelling_g4",
            `Correct the spelling: '${wrongSpelling}'`, correct));
        }
      }
      return q;
    },
  },
  vocab_g4: {
    synonyms_antonyms_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const useSyn = rng() > 0.5;
        if (useSyn) {
          const [word, syn, wrongs] = pick(G4_SYNONYMS, rng);
          if (isMCQ(4, rng)) {
            q.push(createMCQ("vocab_g4", "synonyms_antonyms_g4",
              `Which is a SYNONYM (same meaning) of '${word}'?`, syn, wrongs));
          } else {
            q.push(createTyping("vocab_g4", "synonyms_antonyms_g4",
              `Write a synonym of '${word}':`, syn));
          }
        } else {
          const [word, ant, wrongs] = pick(G4_ANTONYMS, rng);
          if (isMCQ(4, rng)) {
            q.push(createMCQ("vocab_g4", "synonyms_antonyms_g4",
              `Which is an ANTONYM (opposite) of '${word}'?`, ant, wrongs));
          } else {
            q.push(createTyping("vocab_g4", "synonyms_antonyms_g4",
              `Write an antonym of '${word}':`, ant));
          }
        }
      }
      return q;
    },
    similes_metaphors_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const useSimile = rng() > 0.5;
        if (useSimile) {
          const [example, wrongs] = pick(G4_SIMILES, rng);
          if (isMCQ(4, rng)) {
            q.push(createMCQ("vocab_g4", "similes_metaphors_g4",
              `'${example}' This is an example of a:`, "simile", ["metaphor", "personification", "alliteration"]));
          } else {
            q.push(createTyping("vocab_g4", "similes_metaphors_g4",
              `Is this a simile or metaphor? '${example}'`, "simile"));
          }
        } else {
          const [example, wrongs] = pick(G4_METAPHORS, rng);
          if (isMCQ(4, rng)) {
            q.push(createMCQ("vocab_g4", "similes_metaphors_g4",
              `'${example}' This is an example of a:`, "metaphor", ["simile", "personification", "alliteration"]));
          } else {
            q.push(createTyping("vocab_g4", "similes_metaphors_g4",
              `Is this a simile or metaphor? '${example}'`, "metaphor"));
          }
        }
      }
      return q;
    },
    context_clues_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [sentence, word, meaning, wrongs] = pick(G4_CONTEXT_G4, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("vocab_g4", "context_clues_g4",
            `'${sentence}' '${word}' means:`, meaning, wrongs));
        } else {
          q.push(createTyping("vocab_g4", "context_clues_g4",
            `'${sentence}' What does '${word}' mean?`, meaning));
        }
      }
      return q;
    },
    domain_vocab_g4: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const [word, domain, wrongs] = pick(G4_DOMAIN_VOCAB, rng);
        if (isMCQ(4, rng)) {
          q.push(createMCQ("vocab_g4", "domain_vocab_g4",
            `Which subject does '${word}' belong to?`, domain, wrongs));
        } else {
          q.push(createTyping("vocab_g4", "domain_vocab_g4",
            `'${word}' is a word from which school subject?`, domain));
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
          const examples: Record<string, string> = { alliteration:"'Peter Piper picked peppers'", metaphor:"'Time is money'", simile:"'Fast as lightning'", personification:"'The wind whispered'", hyperbole:"'I've told you a million times'" };
          q.push(createMCQ("literary_g6", "literary_devices_g6",
            `What device is ${examples[device] || "'The stars danced'"}?`, device, wrong));
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
          const moodExamples: Record<string, string> = { indicative:"states a fact", imperative:"gives a command", subjunctive:"expresses a wish or hypothetical", conditional:"depends on a condition" };
          q.push(createMCQ("syntax_g7", "verb_mood_g7",
            `Which mood ${moodExamples[mood] || "expresses a wish"}?`, mood, wrong));
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
      const theories = ["New Historicism", "Marxist Criticism", "Feminist Criticism", "Queer Theory"];
      for (let i = 0; i < 30; i++) {
        if (isMCQ(8, rng)) {
          const theory = pick(theories, rng);
          const wrong = theories.filter(t => t !== theory).slice(0, 3);
          const theoryDesc: Record<string, string> = { "New Historicism":"examines texts in historical context", "Marxist Criticism":"analyzes power, class, and economics", "Feminist Criticism":"examines gender roles and representation", "Queer Theory":"challenges norms of gender and sexuality" };
          q.push(createMCQ("analysis_g8", "critical_theory_g8",
            `Which theory ${theoryDesc[theory] || "examines social structures"}?`, theory, wrong));
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
