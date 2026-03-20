// ─── HUNGARIAN GENERATORS ──────────────────────────────────────────────────────
// Procedural MCQ question generators for Hungarian Grade 1 (1. osztály) curriculum
// Generates 45 questions per subtopic using seeded PRNG for reproducibility.
//
// 20 subtopics: Letters, Words, Sentences, Vocabulary
// All questions in Hungarian (Magyar nyelv)
// Grade-appropriate for 6-7 year old students

import type { CurriculumMCQ } from "./curriculumTypes";

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

// ─── DATA LISTS ─────────────────────────────────────────────────────────────

const HUNGARIAN_VOWELS = ["a", "á", "e", "é", "i", "í", "o", "ó", "ö", "ő", "u", "ú", "ü", "ű"];
const HUNGARIAN_SHORT_VOWELS = ["a", "e", "i", "o", "u"];
const HUNGARIAN_LONG_VOWELS = ["á", "é", "í", "ó", "ö", "ő", "ú", "ü", "ű"];

const HUNGARIAN_CONSONANTS = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "r", "s", "t", "v", "z"];

const WORDS_WITH_VOWELS = {
  a: ["alma", "apa", "agy", "asztal", "ábra"],
  á: ["árpa", "áll", "ár", "állat", "ágyú"],
  e: ["egér", "eper", "erdő", "eső", "edény"],
  é: ["élet", "él", "éj", "éhes", "érzés"],
  i: ["iskola", "ikon", "idő", "igaz", "ilyen"],
  í: ["ír", "ívás", "illetve", "íj"],
  o: ["olló", "orca", "oroszlán", "oka", "otthon"],
  ó: ["óra", "ól", "ót", "óvodai"],
  ö: ["öt", "ön", "ömlik", "öltözet"],
  ő: ["őz", "őri", "őrangyal"],
  u: ["utca", "uszoda", "urlop", "úr"],
  ú: ["úszni", "út", "úti", "úrnő"],
  ü: ["üdül", "ügy", "ütem", "üveg"],
  ű: ["űr", "üzenet"]
};

const CONSONANT_WORDS = ["ball", "cica", "daru", "fák", "gólya", "ház", "játék", "kapu", "létra", "maci", "nyírfa", "pók", "rák", "sunyi", "tűz", "vízcsap", "zsiraf"];
const CONSONANT_START = { b: "ball", c: "cica", d: "daru", f: "fák", g: "gólya", h: "ház", j: "játék", k: "kapu", l: "létra", m: "maci", n: "nyírfa", p: "pók", r: "rák", s: "sunyi", t: "tűz", v: "vízcsap", z: "zsiraf" };

const ALPHABET = "aábcdeéfghijíjkklmnoóöőpqrststuúüűvwxyz".split("");
const ALPHABET_WORDS = {
  a: "alma", b: "ball", c: "cica", d: "daru", e: "egér", f: "fák", g: "gólya", h: "ház",
  i: "iskola", j: "játék", k: "kapu", l: "létra", m: "maci", n: "nyírfa", o: "olló", p: "pók",
  q: "quia", r: "rák", s: "sunyi", t: "tűz", u: "utca", v: "vízcsap", w: "williams", x: "xilofon",
  y: "yardstick", z: "zsiraf"
};

const DIGRAPHS_HU = ["cs", "dz", "dzs", "gy", "ly", "ny", "sz", "ty", "zs"];
const DIGRAPH_WORDS = {
  cs: "csiga", dz: "dzs", dzs: "dzsinglisz", gy: "gyík", ly: "lyuk",
  ny: "nyuszi", sz: "szék", ty: "tyúk", zs: "zsiraf"
};

const SYLLABLE_WORDS = [
  { word: "apa", count: 2 }, { word: "nap", count: 1 }, { word: "alma", count: 2 },
  { word: "ábra", count: 2 }, { word: "agyú", count: 2 }, { word: "állat", count: 2 },
  { word: "aranyhaj", count: 3 }, { word: "aranyalma", count: 4 }, { word: "apa", count: 2 },
  { word: "kalács", count: 2 }, { word: "kukorica", count: 4 }, { word: "kakaó", count: 3 },
  { word: "karabély", count: 4 }, { word: "körülbelül", count: 4 }, { word: "kutya", count: 2 },
];

const J_LY_WORDS = [
  { word: "játék", correct: "j" }, { word: "járda", correct: "j" }, { word: "jó", correct: "j" },
  { word: "járni", correct: "j" }, { word: "jégkenyó", correct: "j" }, { word: "lyuk", correct: "ly" },
  { word: "lya", correct: "ly" }, { word: "mély", correct: "ly" }, { word: "gólya", correct: "ly" },
  { word: "szály", correct: "ly" }, { word: "király", correct: "ly" }, { word: "nyájbeli", correct: "ly" },
];

const NOUNS = ["kutya", "macska", "ló", "tehén", "tyúk", "kacsa", "liba", "disznó", "bárány", "kecske", "asztal", "szék", "ágy", "ajtó", "ablak", "könyv", "ceruza", "radír", "toll", "füzet", "alma", "körte", "banán", "szamóca", "eper"];
const NOUN_CONTEXT = [
  { noun: "kutya", context: "A kutya ugat. Mi az a kutya?" },
  { noun: "macska", context: "A macska nyávog. Mi az a macska?" },
  { noun: "asztal", context: "Az asztal erős. Mi az az asztal?" },
  { noun: "könyv", context: "Az könyv érdekes. Mi az a könyv?" }
];

const VERBS = ["fut", "eszik", "alszik", "olvas", "játszik", "ír", "rajzol", "úszik", "ugat", "nyávog", "nyel", "tölt", "ír", "mond", "néz", "hallgat"];
const VERB_CONTEXT = [
  { verb: "fut", context: "A gyerek gyorsan fut." },
  { verb: "eszik", context: "A kutya eteti magát." },
  { verb: "alszik", context: "A baba aluszik." }
];

const ADJECTIVES = ["nagy", "kicsi", "szép", "piros", "gyors", "lassú", "meleg", "hideg", "jó", "rossz", "boldog", "szomorú", "okos", "hosszú", "rövid", "puha", "kemény"];
const ADJECTIVE_CONTEXT = [
  { adj: "nagy", context: "Az elefánt nagy." },
  { adj: "kicsi", context: "Az egér kicsi." },
  { adj: "piros", context: "Az alma piros." }
];

const OPPOSITES = [
  { word: "nagy", opposite: "kicsi" }, { word: "meleg", opposite: "hideg" },
  { word: "gyors", opposite: "lassú" }, { word: "szép", opposite: "csúnya" },
  { word: "jó", opposite: "rossz" }, { word: "boldog", opposite: "szomorú" },
  { word: "hosszú", opposite: "rövid" }, { word: "világos", opposite: "sötét" },
  { word: "új", opposite: "régi" }, { word: "könnyű", opposite: "nehéz" }
];

const SENTENCE_TYPES = [
  { type: "kijelentő", example: "A kutya fut.", punctuation: "." },
  { type: "kérdő", example: "Hol van a kutya?", punctuation: "?" },
  { type: "felkiáltó", example: "Milyen szép!", punctuation: "!" },
  { type: "felszólító", example: "Kérlek, ülj le!", punctuation: "!" }
];

const ANIMALS = ["kutya", "macska", "ló", "tehén", "tyúk", "kacsa", "liba", "disznó", "bárány", "kecske", "rák", "hal", "madár", "oroszlán", "elefánt", "zsiraf"];
const ANIMAL_CONTEXT = [
  { animal: "kutya", type: "háziállat", legs: 4 },
  { animal: "madár", type: "madár", legs: 2 },
  { animal: "oroszlán", type: "vadon élő", legs: 4 },
  { animal: "hal", type: "vízben élő", legs: 0 }
];

const COLORS = ["piros", "kék", "zöld", "sárga", "fehér", "fekete", "narancssárga", "barna", "lila", "rózsaszín", "szürke", "türkiz"];
const COLOR_ASSOCIATION = [
  { color: "piros", item: "paradicsom" },
  { color: "kék", item: "ég" },
  { color: "zöld", item: "fű" },
  { color: "sárga", item: "banán" },
  { color: "fehér", item: "hó" },
  { color: "fekete", item: "szénszor" },
  { color: "narancssárga", item: "narancs" }
];

const FAMILY = [
  { relative: "édesanya", relation: "az apám szülője" },
  { relative: "édesapa", relation: "az anyám szülője" },
  { relative: "nagymama", relation: "az apám anyja" },
  { relative: "nagypapa", relation: "az apám apja" },
  { relative: "húg", relation: "a lánytestvérem" },
  { relative: "öcs", relation: "a fiútestvérem" }
];

const BODY_PARTS = ["fej", "szem", "fül", "orr", "száj", "kéz", "láb", "has", "hát", "térd", "ujj", "lábujj", "szív", "tüdő", "agy"];
const BODY_FUNCTION = [
  { part: "szem", function: "látunk vele" },
  { part: "fül", function: "hallunk vele" },
  { part: "orr", function: "szagolunk vele" },
  { part: "száj", function: "evünk vele" },
  { part: "láb", function: "járunk vele" }
];

const FOOD = ["alma", "körte", "banán", "szamóca", "eper", "kenyér", "tejföl", "tej", "sajt", "tojás", "répa", "krumpli", "paradicsom", "uborka", "víz", "leves"];
const FOOD_CATEGORY = [
  { food: "alma", category: "gyümölcs" },
  { food: "répa", category: "zöldség" },
  { food: "tejföl", category: "tejtermék" },
  { food: "kenyér", category: "gabonás" }
];

// ─── GENERATOR FUNCTIONS ────────────────────────────────────────────────────

export function generateMaganhangzok(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  // Questions about vowels
  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik magánhangzó?"
      const correct = pick(HUNGARIAN_VOWELS, rng);
      const wrong = HUNGARIAN_CONSONANTS.slice(0, 3);
      q.push(createMCQ("betuk", "maganhangzok",
        "Melyik magánhangzó?", correct, wrong));
    } else if (type === 1) {
      // "Hány magánhangzó van a szóban?"
      const word = pick(Object.keys(WORDS_WITH_VOWELS), rng);
      const words = (WORDS_WITH_VOWELS as Record<string, string[]>)[word];
      const target = pick(words, rng);
      const count = target.split(/[aáeéiíoóöőuúüű]/).length - 1;
      const wrong = ["1", "2", "3", "4"].filter(c => c !== String(count));
      q.push(createMCQ("betuk", "maganhangzok",
        `Hány magánhangzó van a "${target}" szóban?`, String(count), wrong));
    } else {
      // "Melyik szóban van á hang?"
      const allVowels = [...HUNGARIAN_SHORT_VOWELS, ...HUNGARIAN_LONG_VOWELS];
      const target = pick(HUNGARIAN_LONG_VOWELS, rng);
      const targetWords = (WORDS_WITH_VOWELS as Record<string, string[]>)[target] || [];
      const correct = pick(targetWords, rng) || "áll";
      const wrongOpts = allVowels.filter(v => v !== target).map(v =>
        ((WORDS_WITH_VOWELS as Record<string, string[]>)[v]?.[0] || "szó")
      ).slice(0, 3);
      q.push(createMCQ("betuk", "maganhangzok",
        `Melyik szóban van '${target}' hang?`, correct, wrongOpts));
    }
  }

  return q;
}

export function generateMassalhangzok(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik mássalhangzó?"
      const correct = pick(HUNGARIAN_CONSONANTS, rng);
      const wrong = HUNGARIAN_VOWELS.slice(0, 3);
      q.push(createMCQ("betuk", "massalhangzok",
        "Melyik mássalhangzó?", correct, wrong));
    } else if (type === 1) {
      // "Mivel kezdődik a szó?"
      const words = ["alma", "ball", "cica", "daru", "egér", "fák", "gólya", "ház", "igaz", "játék"];
      const word = pick(words, rng);
      const correct = word[0];
      const wrong = pick(HUNGARIAN_CONSONANTS, rng);
      const wrong2 = pick(HUNGARIAN_CONSONANTS, rng);
      const wrong3 = pick(HUNGARIAN_CONSONANTS, rng);
      q.push(createMCQ("betuk", "massalhangzok",
        `Mivel kezdődik az "${word}" szó?`, correct, [wrong, wrong2, wrong3]));
    } else {
      // "Melyik szóban van m hang?"
      const target = pick(HUNGARIAN_CONSONANTS, rng);
      const words = CONSONANT_WORDS.filter(w => w.includes(target));
      const correct = words.length > 0 ? pick(words, rng) : "maci";
      const wrong = CONSONANT_WORDS.filter(w => !w.includes(target)).slice(0, 3);
      q.push(createMCQ("betuk", "massalhangzok",
        `Melyik szóban van '${target}' hang?`, correct, wrong));
    }
  }

  return q;
}

export function generateAbcSorrend(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik betű jön az A után?"
      const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
      const idx = Math.floor(rng() * (letters.length - 1));
      const correct = letters[idx + 1];
      const wrong = ["X", "Y", "Z"].slice(0, 3);
      q.push(createMCQ("betuk", "abc_sorrend",
        `Melyik betű jön az '${letters[idx]}' után az ABC-ben?`, correct, wrong));
    } else if (type === 1) {
      // "Melyik van előbb az ABC-ben?"
      const l1 = pick(["a", "b", "c", "d", "e"], rng);
      const l2 = pick(["f", "g", "h", "i", "j"], rng);
      const correct = l1 < l2 ? l1 : l2;
      const wrong = [l1, l2].filter(x => x !== correct).concat(pick(["k", "l", "m"], rng));
      q.push(createMCQ("betuk", "abc_sorrend",
        `Melyik jön előbb az ABC-ben: '${l1}' vagy '${l2}'?`, correct, wrong));
    } else {
      // Multiple choice: sort 3 letters
      const letters = shuffle(["a", "b", "c"], rng);
      const correct = "a, b, c";
      const wrong = ["b, a, c", "c, b, a", "b, c, a"];
      q.push(createMCQ("betuk", "abc_sorrend",
        `Melyik sorrend helyes az ABC-ben? (${letters.join(", ")})`, correct, wrong));
    }
  }

  return q;
}

export function generateBetuparok(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Hány betű van a 'cs' hangban?"
      const dg = pick(DIGRAPHS_HU, rng);
      const correct = "2";
      const wrong = ["1", "3", "4"];
      q.push(createMCQ("betuk", "betuparok",
        `Hány betű van a '${dg}' hangban?`, correct, wrong));
    } else if (type === 1) {
      // "Melyik szóban van 'gy'?"
      const dg = pick(DIGRAPHS_HU, rng);
      const dgWords = {
        cs: "csiga", dz: "szél", dzs: "dzsinglisz", gy: "gyík", ly: "lyuk",
        ny: "nyuszi", sz: "szék", ty: "tyúk", zs: "zsiraf"
      };
      const correct = (dgWords as Record<string, string>)[dg] || "szó";
      const wrong = CONSONANT_WORDS.filter(w => !w.includes(dg)).slice(0, 3);
      q.push(createMCQ("betuk", "betuparok",
        `Melyik szóban van '${dg}' betűpár?`, correct, wrong));
    } else {
      // "Melyik betűpár?"
      const word = pick(["csiga", "gyík", "lyuk", "nyuszi", "szék", "tyúk", "zsiraf"], rng);
      const dgMap: Record<string, string> = {
        csiga: "cs", gyík: "gy", lyuk: "ly", nyuszi: "ny", szék: "sz", tyúk: "ty", zsiraf: "zs"
      };
      const correct = dgMap[word];
      const wrong = DIGRAPHS_HU.filter(d => d !== correct).slice(0, 3);
      q.push(createMCQ("betuk", "betuparok",
        `Melyik betűpárt kell a '${word}' szóban?`, correct, wrong));
    }
  }

  return q;
}

export function generateSzotagszam(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const data = pick(SYLLABLE_WORDS, rng);
    const allCounts = ["1", "2", "3", "4"];
    const wrong = allCounts.filter(c => c !== String(data.count));
    q.push(createMCQ("betuk", "szotagszam",
      `Hány szótagból áll a "${data.word}" szó?`, String(data.count), wrong));
  }

  return q;
}

export function generateElvalasztas(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const elvalasztasData = [
    { word: "asztal", correct: "asz-tal", wrong: ["a-sztal", "ast-al", "aszt-al"] },
    { word: "mesteri", correct: "mes-te-ri", wrong: ["me-ste-ri", "mest-eri", "mes-ter-i"] },
    { word: "kalács", correct: "ka-lács", wrong: ["kal-ács", "k-alács", "ka-lacs"] },
    { word: "kutya", correct: "ku-tya", wrong: ["kut-ya", "k-utya", "ku-tya"] },
    { word: "szék", correct: "szék", wrong: ["szé-k", "sz-ék", "sz-e-k"] },
  ];

  for (let i = 0; i < 45; i++) {
    const data = pick(elvalasztasData, rng);
    q.push(createMCQ("betuk", "elvalasztas",
      `Hogyan választjuk el a "${data.word}" szót?`, data.correct, data.wrong));
  }

  return q;
}

export function generateRovidHosszú(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const pairs = [
    { short: "apa", long: "ápát", shortVowel: "a", longVowel: "á" },
    { short: "meg", long: "mégé", shortVowel: "e", longVowel: "é" },
    { short: "alma", long: "almá", shortVowel: "a", longVowel: "á" },
  ];

  for (let i = 0; i < 45; i++) {
    const type = i % 2;
    if (type === 0) {
      // Rövid vagy hosszú?
      const pair = pick(pairs, rng);
      const isShort = rng() > 0.5;
      const word = isShort ? pair.short : pair.long;
      const correct = isShort ? "rövid" : "hosszú";
      const wrong = ["rövid", "hosszú"].filter(x => x !== correct);
      q.push(createMCQ("betuk", "rovid_hosszu",
        `Rövid vagy hosszú az '${pair.shortVowel}' hang az "${word}" szóban?`, correct, wrong));
    } else {
      // Melyik szóban van hosszú...
      const pair = pick(pairs, rng);
      const correct = pair.long;
      const wrong = [pair.short, pick(NOUNS, rng), pick(NOUNS, rng)];
      q.push(createMCQ("betuk", "rovid_hosszu",
        `Melyik szóban van hosszú '${pair.longVowel}' hang?`, correct, wrong));
    }
  }

  return q;
}

export function generateJly(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const data = pick(J_LY_WORDS, rng);
    const correct = data.correct;
    const wrong = data.correct === "j" ? ["ly", "y", "gy"] : ["j", "y", "gy"];
    q.push(createMCQ("betuk", "j_ly",
      `J-vel vagy ly-nal írjuk a "${data.word}" szót?`, correct, wrong));
  }

  return q;
}

export function generateFonevek(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik főnév?"
      const correct = pick(NOUNS, rng);
      const wrong = VERBS.slice(0, 3);
      q.push(createMCQ("szavak", "fonevek",
        "Melyik főnév?", correct, wrong));
    } else if (type === 1) {
      // "Melyik élőlényt jelöl?"
      const correct = pick(ANIMALS, rng);
      const wrong = ["asztal", "szék", "ablak", "ajtó"];
      q.push(createMCQ("szavak", "fonevek",
        "Melyik élőlényt jelöl?", correct, wrong));
    } else {
      // "Melyik tárgyat jelöl?"
      const correct = pick(["asztal", "szék", "ágy", "könyv", "ceruza"], rng);
      const wrong = ANIMALS.slice(0, 3);
      q.push(createMCQ("szavak", "fonevek",
        "Melyik tárgyat jelöl?", correct, wrong));
    }
  }

  return q;
}

export function generateIgek(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik ige?"
      const correct = pick(VERBS, rng);
      const wrong = NOUNS.slice(0, 3);
      q.push(createMCQ("szavak", "igek",
        "Melyik ige?", correct, wrong));
    } else if (type === 1) {
      // "Melyik szó jelöl cselekvést?"
      const correct = pick(VERBS, rng);
      const wrong = ADJECTIVES.slice(0, 3);
      q.push(createMCQ("szavak", "igek",
        "Melyik szó jelöl cselekvést?", correct, wrong));
    } else {
      // "Mit csinál...?"
      const verb = pick(VERBS, rng);
      const action = { fut: "fut", eszik: "isszik", alszik: "alszik", olvas: "olvas", játszik: "játszik" };
      const correct = (action as Record<string, string>)[verb] || verb;
      const wrong = VERBS.filter(v => v !== verb).slice(0, 3);
      q.push(createMCQ("szavak", "igek",
        `Mit csinál? (${verb})`, correct, wrong));
    }
  }

  return q;
}

export function generateMelleknevek(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik melléknév?"
      const correct = pick(ADJECTIVES, rng);
      const wrong = NOUNS.slice(0, 3);
      q.push(createMCQ("szavak", "melleknevek",
        "Melyik melléknév?", correct, wrong));
    } else if (type === 1) {
      // "Milyen a...?"
      const context = pick(ADJECTIVE_CONTEXT, rng);
      const correct = context.adj;
      const wrong = ADJECTIVES.filter(a => a !== context.adj).slice(0, 3);
      q.push(createMCQ("szavak", "melleknevek",
        "Milyen az elefánt?", correct, wrong));
    } else {
      // "Melyik szó ír le tulajdonságot?"
      const correct = pick(ADJECTIVES, rng);
      const wrong = VERBS.slice(0, 3);
      q.push(createMCQ("szavak", "melleknevek",
        "Melyik szó ír le tulajdonságot?", correct, wrong));
    }
  }

  return q;
}

export function generateEllentetek(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const pair = pick(OPPOSITES, rng);
    const correct = pair.opposite;
    const wrong = OPPOSITES.filter(p => p.word !== pair.word && p.opposite !== pair.opposite)
      .slice(0, 3)
      .map(p => p.word);
    q.push(createMCQ("szavak", "ellentetek",
      `Mi az ellentéte a "${pair.word}" szónak?`, correct, wrong));
  }

  return q;
}

export function generateMondatfajtak(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const sentences = [
    { sentence: "A kutya fut.", type: "kijelentő" },
    { sentence: "Hol van a kutya?", type: "kérdő" },
    { sentence: "Milyen szép!", type: "felkiáltó" },
    { sentence: "Ülj le!", type: "felszólító" },
    { sentence: "A macska alszik.", type: "kijelentő" },
    { sentence: "Szeretsz játszani?", type: "kérdő" }
  ];

  for (let i = 0; i < 45; i++) {
    const sent = pick(sentences, rng);
    const types = ["kijelentő", "kérdő", "felkiáltó", "felszólító"];
    const wrong = types.filter(t => t !== sent.type);
    q.push(createMCQ("mondatok", "mondatfajtak",
      `Milyen mondat ez? "${sent.sentence}"`, sent.type, wrong));
  }

  return q;
}

export function generateIrasjelek(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const punctData = [
    { sentence: "A kutya fut", punctuation: ".", type: "kijelentő" },
    { sentence: "Hol vagy", punctuation: "?", type: "kérdő" },
    { sentence: "Ez csodálatos", punctuation: "!", type: "felkiáltó" },
    { sentence: "Kérlek, ülj le", punctuation: "!", type: "felszólító" }
  ];

  for (let i = 0; i < 45; i++) {
    const data = pick(punctData, rng);
    const correct = data.punctuation;
    const wrong = [".", "?", "!"].filter(p => p !== correct);
    q.push(createMCQ("mondatok", "irasjelek",
      `Melyik írásjel kell a mondat végére? "${data.sentence}"`, correct, wrong));
  }

  return q;
}

export function generateNagybetu(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const sentencesWithProper = [
    { sentence: "Az Anna macskát szeretne.", properWord: "Anna" },
    { sentence: "A Budapest szép város.", properWord: "Budapest" },
    { sentence: "A kutyám jó.", properWord: "A" },
    { sentence: "Péter és Márta együtt játszanak.", properWord: "Péter" }
  ];

  for (let i = 0; i < 45; i++) {
    const type = i % 2;
    if (type === 0) {
      // "Melyik szót írjuk nagybetűvel?"
      const data = pick(sentencesWithProper, rng);
      const words = data.sentence.split(" ").map(w => w.replace(/[.,!?]/g, ""));
      const correct = data.properWord;
      const wrong = words.filter(w => w !== correct && w !== "A" && w !== "Az").slice(0, 3);
      q.push(createMCQ("mondatok", "nagybetu",
        `Melyik szót írjuk nagybetűvel? "${data.sentence}"`, correct, wrong));
    } else {
      // "Miért kell nagybetű?"
      const correct = "Mert mondat kezdete / tulajdonnév";
      const wrong = ["Mert nehéz szó", "Mert hosszú", "Mert siker"];
      q.push(createMCQ("mondatok", "nagybetu",
        `Miért kell nagybetű a mondat elején?`, correct, wrong));
    }
  }

  return q;
}

export function generateAllatok(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik háziállat?"
      const correct = pick(["kutya", "macska", "ló", "tehén", "tyúk"], rng);
      const wrong = ["oroszlán", "elefánt", "zsiraf", "medve"];
      q.push(createMCQ("szokincs", "allatok",
        "Melyik háziállat?", correct, wrong));
    } else if (type === 1) {
      // "Melyik vadon élő?"
      const correct = pick(["oroszlán", "elefánt", "zsiraf", "medve", "tigris"], rng);
      const wrong = ["kutya", "macska", "ló", "kacsa"];
      q.push(createMCQ("szokincs", "allatok",
        "Melyik vadon élő állat?", correct, wrong));
    } else {
      // "Hány lába van...?"
      const animalData = [
        { animal: "kutya", legs: 4 }, { animal: "madár", legs: 2 },
        { animal: "hal", legs: 0 }, { animal: "kacsa", legs: 2 }
      ];
      const data = pick(animalData, rng);
      const correct = String(data.legs);
      const wrong = ["1", "2", "3", "4", "0"].filter(l => l !== correct).slice(0, 3);
      q.push(createMCQ("szokincs", "allatok",
        `Hány lába van a ${data.animal}-nak?`, correct, wrong));
    }
  }

  return q;
}

export function generateSzinek(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 2;
    if (type === 0) {
      // "Milyen színű a...?"
      const assoc = pick(COLOR_ASSOCIATION, rng);
      const correct = assoc.color;
      const wrong = COLORS.filter(c => c !== correct).slice(0, 3);
      q.push(createMCQ("szokincs", "szinek",
        `Milyen színű a ${assoc.item}?`, correct, wrong));
    } else {
      // "Mi ... szín?"
      const color = pick(COLORS, rng);
      const correct = pick(COLOR_ASSOCIATION, rng).item;
      const wrong = COLOR_ASSOCIATION.filter(a => a.color !== color)
        .slice(0, 3)
        .map(a => a.item);
      q.push(createMCQ("szokincs", "szinek",
        `Mi ${color} szín?`, correct, wrong.length > 0 ? wrong : ["valami"]));
    }
  }

  return q;
}

export function generateCsalad(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Ki az...?"
      const person = pick(FAMILY, rng);
      const correct = person.relation;
      const wrong = FAMILY.filter(f => f.relative !== person.relative)
        .slice(0, 3)
        .map(f => f.relation);
      q.push(createMCQ("szokincs", "csalad",
        `Ki az ${person.relative}?`, correct, wrong));
    } else if (type === 1) {
      // "Hogyan hívjuk...?"
      const correct = pick(["fiútestvér", "lánytestvér", "nagymama", "nagypapa"], rng);
      const wrong = ["barát", "tanár", "orvos", "szomszéd"];
      q.push(createMCQ("szokincs", "csalad",
        `Hogyan hívjuk az apám apját?`, "nagypapa", wrong));
    } else {
      // Család tagjai
      const correct = pick(["anya", "apa", "nagymama", "húg", "öcs"], rng);
      const wrong = ["barát", "tanár", "orvos", "szomszéd"];
      q.push(createMCQ("szokincs", "csalad",
        "Melyik család tagja?", correct, wrong));
    }
  }

  return q;
}

export function generateTestresz(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Mivel látunk?"
      const correct = "szem";
      const wrong = ["fül", "orr", "száj"];
      q.push(createMCQ("szokincs", "testresz",
        "Mivel látunk?", correct, wrong));
    } else if (type === 1) {
      // "Melyik testrész?"
      const correct = pick(BODY_PARTS, rng);
      const wrong = ANIMALS.slice(0, 3);
      q.push(createMCQ("szokincs", "testresz",
        "Melyik testrész?", correct, wrong));
    } else {
      // "Hol van...?"
      const context = pick(BODY_FUNCTION, rng);
      const correct = context.part;
      const wrong = BODY_PARTS.filter(b => b !== correct).slice(0, 3);
      q.push(createMCQ("szokincs", "testresz",
        `Hol van az, amivel ${context.function}?`, correct, wrong));
    }
  }

  return q;
}

export function generateElelmiszer(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // "Melyik gyümölcs?"
      const correct = pick(["alma", "körte", "banán", "szamóca", "eper"], rng);
      const wrong = ["répa", "krumpli", "paradicsom", "uborka"];
      q.push(createMCQ("szokincs", "elelmiszer",
        "Melyik gyümölcs?", correct, wrong));
    } else if (type === 1) {
      // "Melyik zöldség?"
      const correct = pick(["répa", "krumpli", "paradicsom", "uborka", "borsó"], rng);
      const wrong = ["alma", "körte", "banán", "szamóca"];
      q.push(createMCQ("szokincs", "elelmiszer",
        "Melyik zöldség?", correct, wrong));
    } else {
      // "Mit iszunk?"
      const correct = pick(["tej", "vízcsap", "lé", "kávé"], rng);
      const wrong = ["alma", "kenyér", "sajt", "tojás"];
      q.push(createMCQ("szokincs", "elelmiszer",
        "Mit iszunk reggelire?", correct, wrong));
    }
  }

  return q;
}

// ─── EXPORTING ALL GENERATORS ───────────────────────────────────────────────

export const G1_Generators_Hungarian = {
  maganhangzok: generateMaganhangzok,
  massalhangzok: generateMassalhangzok,
  abc_sorrend: generateAbcSorrend,
  betuparok: generateBetuparok,
  szotagszam: generateSzotagszam,
  elvalasztas: generateElvalasztas,
  rovid_hosszu: generateRovidHosszú,
  j_ly: generateJly,
  fonevek: generateFonevek,
  igek: generateIgek,
  melleknevek: generateMelleknevek,
  ellentetek: generateEllentetek,
  mondatfajtak: generateMondatfajtak,
  irasjelek: generateIrasjelek,
  nagybetu: generateNagybetu,
  allatok: generateAllatok,
  szinek: generateSzinek,
  csalad: generateCsalad,
  testresz: generateTestresz,
  elelmiszer: generateElelmiszer,
};
