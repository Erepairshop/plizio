// ─── HUNGARIAN GENERATORS — GRADE 2 ─────────────────────────────────────
// Procedural MCQ question generators for Hungarian Grade 2 (2. osztály) curriculum
// Generates 30+ questions per subtopic using varied word pools
//
// 18 subtopics: Word types, Spelling, Grammar, Vocabulary, Reading
// All questions in Hungarian (Magyar nyelv)
// Grade-appropriate for 7-8 year old students

import type { CurriculumMCQ } from "./curriculumTypes";

// Type alias for Hungarian MCQ
type MagyarMCQ = CurriculumMCQ & { type: "mcq" };

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────

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
  const shuffled = shuffle([correct, ...unique.slice(0, 3)]);
  return {
    type: "mcq",
    topic,
    subtopic,
    question,
    options: shuffled,
    correct: shuffled.indexOf(correct)
  };
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// ─── DATA LISTS FOR GRADE 2 ────────────────────────────────────────────

// Nouns for szófajok/fonev
const NOUNS_G2 = [
  "kutya", "macska", "madár", "hal", "ló", "könyv", "ceruza", "toll", "radír",
  "asztal", "szék", "ágy", "ajtó", "ablak", "ház", "iskola", "osztály",
  "alma", "körte", "banán", "narancs", "szamóca", "eper",
  "kenyér", "tej", "víz", "tej", "édesség", "csoki",
  "fejsze", "kapa", "kalapács", "szög",
];

// Verbs for szófajok/ige
const VERBS_G2 = [
  "fut", "szalad", "sétál", "állít", "ül", "fekszik", "áll",
  "eszik", "iszik", "alszik", "játszik", "tanul", "ír", "olvas",
  "rajzol", "festo", "dal", "ugat", "nyávog", "száll", "repül",
  "nevet", "sír", "énekél", "tánc", "úszik", "fog", "vet",
];

// Adjectives for szófajok/melleknev
const ADJECTIVES_G2 = [
  "nagy", "kicsi", "szép", "csúnya", "gyors", "lassú",
  "meleg", "hideg", "hosszú", "rövid",
  "piros", "kék", "zöld", "sárga", "fehér", "fekete",
  "jó", "rossz", "okos", "balga", "finom", "keserű",
  "kemény", "puha", "nehéz", "könnyű",
];

// Word opposites for helyesiras/ly_j context (J vs LY)
const LY_J_WORDS = [
  { word: "játék", letter: "j" },
  { word: "járda", letter: "j" },
  { word: "járda", letter: "j" },
  { word: "jól", letter: "j" },
  { word: "jó", letter: "j" },
  { word: "járni", letter: "j" },
  { word: "lyuk", letter: "ly" },
  { word: "lya", letter: "ly" },
  { word: "mély", letter: "ly" },
  { word: "gólya", letter: "ly" },
  { word: "királynő", letter: "ly" },
  { word: "gyöngy", letter: "gy" }, // special case, not j/ly
];

// Short vs long vowels (helyesiras/rovid_hosszu)
const SHORT_LONG_VOWELS = [
  { short: "a", long: "á", word_s: "alma", word_l: "árpa" },
  { short: "e", long: "é", word_s: "egér", word_l: "élet" },
  { short: "i", long: "í", word_s: "iskola", word_l: "írás" },
  { short: "o", long: "ó", word_s: "olló", word_l: "óra" },
  { short: "u", long: "ú", word_s: "utca", word_l: "út" },
];

// Sentence types (mondat/mondatfajtak)
const SENTENCE_TYPES = [
  { type: "kijelentő", mark: ".", example: "A kutya futott." },
  { type: "kérdő", mark: "?", example: "Hol van a macska?" },
  { type: "felkiáltó", mark: "!", example: "Milyen szép a virág!" },
];

// Sentence parts (mondat/mondatresz)
const SENTENCE_PARTS = [
  { part: "alany", example: "A kutya", context: "A kutya fut." },
  { part: "állítmány", example: "fut", context: "A kutya fut." },
  { part: "tárgy", example: "labdát", context: "A fiú labdát dob." },
];

// Compound words (szo/osszetetel)
const COMPOUNDS = [
  { compound: "szobatisztító", parts: ["szoba", "tisztító"] },
  { compound: "könyves", parts: ["könyv", "es"] },
  { compound: "papírkosár", parts: ["papír", "kosár"] },
  { compound: "napfény", parts: ["nap", "fény"] },
  { compound: "vízcsap", parts: ["víz", "csap"] },
  { compound: "asztallábszékláb", parts: ["asztal", "láb"] },
  { compound: "szódavíz", parts: ["szóda", "víz"] },
];

// Affixes (szo/kepzok)
const AFFIXES = [
  { base: "könyv", affix: "-es", result: "könyves", meaning: "with books" },
  { base: "szép", affix: "-en", result: "szépen", meaning: "beautifully" },
  { base: "szín", affix: "-es", result: "színes", meaning: "colorful" },
  { base: "gyors", affix: "-an", result: "gyorsan", meaning: "quickly" },
];

// Noun declension (ragozas/fonevreg)
const NOUN_CASES = [
  { noun: "ház", case: "nominativ", form: "ház" },
  { noun: "ház", case: "inessive", form: "házban" },
  { noun: "ház", case: "dative", form: "háznak" },
  { noun: "asztal", case: "nominativ", form: "asztal" },
  { noun: "asztal", case: "inessive", form: "asztalon" },
];

// Verb conjugation (ragozas/igereg)
const VERB_CONJUGATION = [
  { verb: "fut", subject: "ő", form: "fut" },
  { verb: "fut", subject: "mi", form: "futunk" },
  { verb: "fut", subject: "ők", form: "futnak" },
  { verb: "eszik", subject: "én", form: "eszem" },
  { verb: "eszik", subject: "te", form: "eszel" },
  { verb: "eszik", subject: "ő", form: "eszik" },
];

// Synonyms (szokincs/szinonimak)
const SYNONYMS = [
  { word: "szép", synonym: "szép" },
  { word: "nagy", synonym: "óriási" },
  { word: "kicsi", synonym: "apró" },
  { word: "gyors", synonym: "sebes" },
  { word: "boldog", synonym: "vidám" },
  { word: "szomorú", synonym: "búskomor" },
];

// Antonyms (szokincs/ellentetek2)
const ANTONYMS_G2 = [
  { word: "nagy", opposite: "kicsi" },
  { word: "gyors", opposite: "lassú" },
  { word: "jó", opposite: "rossz" },
  { word: "meleg", opposite: "hideg" },
  { word: "fent", opposite: "lent" },
  { word: "elöl", opposite: "hátul" },
];

// Occupations (szokincs/foglalkozasok)
const OCCUPATIONS = [
  "tanár", "orvos", "bácsi", "nővér", "rendőr", "tűzoltó",
  "cukrász", "pék", "fodrász", "autóbuszvezető", "pilóta", "festő",
];

// Seasons (szokincs/evszakok)
const SEASONS = [
  { season: "tavasz", months: ["március", "április", "május"] },
  { season: "nyár", months: ["június", "július", "augusztus"] },
  { season: "ősz", months: ["szeptember", "október", "november"] },
  { season: "tél", months: ["december", "január", "február"] },
];

// School vocabulary (szokincs/iskola)
const SCHOOL_VOCAB = [
  "tanár", "diák", "füzet", "ceruza", "radír", "vonalzó", "osztály",
  "tanterem", "könyvtár", "tornaterem", "öltöző", "kert", "menza",
];

// ─── GENERATOR FUNCTIONS (30+ questions each) ─────────────────────────

function genNounRecognition(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const noun = pick(NOUNS_G2);
    const others = shuffle(NOUNS_G2.filter(n => n !== noun)).slice(0, 3);
    qs.push(createMCQ("szofajok", "fonev", `Melyik főnév? "${noun}"`, noun, others));
  }
  return qs;
}

function genVerbRecognition(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const verb = pick(VERBS_G2);
    const others = shuffle(ADJECTIVES_G2.concat(NOUNS_G2)).slice(0, 3);
    qs.push(createMCQ("szofajok", "ige", `Melyik ige? "${verb}"`, verb, others));
  }
  return qs;
}

function genAdjectiveRecognition(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const adj = pick(ADJECTIVES_G2);
    const others = shuffle(NOUNS_G2.concat(VERBS_G2)).slice(0, 3);
    qs.push(createMCQ("szofajok", "melleknev", `Melyik melléknév? "${adj}"`, adj, others));
  }
  return qs;
}

function genLyJDistinction(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const item = pick(LY_J_WORDS);
    const wrong = shuffle(["j", "ly", "y"]).filter(x => x !== item.letter).slice(0, 3);
    qs.push(createMCQ("helyesiras", "ly_j", `Melyik jó? "${item.word}"`, item.letter, wrong));
  }
  return qs;
}

function genShortLongVowels(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const pair = pick(SHORT_LONG_VOWELS);
    const options = [pair.word_s, pair.word_l, ...shuffle(NOUNS_G2).slice(0, 2)];
    qs.push(createMCQ("helyesiras", "rovid_hosszu", `Melyik szóban a rövid "${pair.short}"?`, pair.word_s, options.filter(o => o !== pair.word_s)));
  }
  return qs;
}

function genSentenceTypes(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const st = pick(SENTENCE_TYPES);
    const others = shuffle(SENTENCE_TYPES.filter(s => s.type !== st.type)).map(s => s.type).slice(0, 3);
    qs.push(createMCQ("mondat", "mondatfajtak", `Melyik mondatfajta? "${st.example}"`, st.type, others));
  }
  return qs;
}

function genSentenceParts(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const sp = pick(SENTENCE_PARTS);
    const others = shuffle(SENTENCE_PARTS.filter(s => s.part !== sp.part)).map(s => s.part).slice(0, 3);
    qs.push(createMCQ("mondat", "mondatresz", `Mi az alany ebben: "${sp.context}"`, "A kutya", ["futott", "a", "után"]));
  }
  return qs;
}

function genCompoundWords(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const comp = pick(COMPOUNDS);
    const others = shuffle(NOUNS_G2).slice(0, 3);
    qs.push(createMCQ("szo", "osszetetel", `Melyik összetett szó?`, comp.compound, others));
  }
  return qs;
}

function genAffixes(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const aff = pick(AFFIXES);
    const others = shuffle(ADJECTIVES_G2).slice(0, 3);
    qs.push(createMCQ("szo", "kepzok", `"${aff.base}" + "${aff.affix}" = ?`, aff.result, others));
  }
  return qs;
}

function genNounDeclension(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const nc = pick(NOUN_CASES);
    const others = shuffle(NOUN_CASES.filter(n => n.case !== nc.case)).map(n => n.form).slice(0, 3);
    qs.push(createMCQ("ragozas", "fonevreg", `"${nc.noun}" (${nc.case}) = ?`, nc.form, others));
  }
  return qs;
}

function genVerbConjugation(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const vc = pick(VERB_CONJUGATION);
    const others = shuffle(VERB_CONJUGATION.filter(v => v.form !== vc.form)).map(v => v.form).slice(0, 3);
    qs.push(createMCQ("ragozas", "igereg", `"${vc.verb}" + "${vc.subject}" = ?`, vc.form, others));
  }
  return qs;
}

function genSynonyms(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const syn = pick(SYNONYMS);
    const others = shuffle(ADJECTIVES_G2.filter(a => a !== syn.word)).slice(0, 3);
    qs.push(createMCQ("szokincs", "szinonimak", `Mi a szinonimája a(z) "${syn.word}"-nak?`, syn.synonym, others));
  }
  return qs;
}

function genAntonyms(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const ant = pick(ANTONYMS_G2);
    const others = shuffle(ANTONYMS_G2.filter(a => a.word !== ant.word)).map(a => a.opposite).slice(0, 3);
    qs.push(createMCQ("szokincs", "ellentetek2", `Mi az ellentéke a(z) "${ant.word}"-nak?`, ant.opposite, others));
  }
  return qs;
}

function genOccupations(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const occ = pick(OCCUPATIONS);
    const others = shuffle(OCCUPATIONS.filter(o => o !== occ)).slice(0, 3);
    qs.push(createMCQ("szokincs", "foglalkozasok", `Melyik foglalkozás?`, occ, others));
  }
  return qs;
}

function genSeasons(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const seas = pick(SEASONS);
    const others = shuffle(SEASONS.filter(s => s.season !== seas.season)).map(s => s.season).slice(0, 3);
    const month = pick(seas.months);
    qs.push(createMCQ("szokincs", "evszakok", `Melyik évszak az "${month}"?`, seas.season, others));
  }
  return qs;
}

function genSchoolVocab(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const vocab = pick(SCHOOL_VOCAB);
    const others = shuffle(SCHOOL_VOCAB.filter(v => v !== vocab)).slice(0, 3);
    qs.push(createMCQ("szokincs", "iskola", `Mit használsz az iskolában?`, vocab, others));
  }
  return qs;
}

function genReadingVocab(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const word = pick(NOUNS_G2.concat(ADJECTIVES_G2));
    const context = `Az "${word}" szó azt jelenti...`;
    const others = shuffle(NOUNS_G2.concat(ADJECTIVES_G2).filter(w => w !== word)).slice(0, 3);
    qs.push(createMCQ("olvasas", "szokincs", context, word, others));
  }
  return qs;
}

function genReadingComprehension(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  const stories = [
    { text: "A kutya fut az erdőben.", question: "Mit csinál a kutya?", answer: "fut" },
    { text: "Az alma piros és édes.", question: "Milyen az alma?", answer: "piros és édes" },
    { text: "A tanár olvas az osztálynak.", question: "Ki olvas?", answer: "A tanár" },
  ];
  for (let i = 0; i < 30; i++) {
    const story = pick(stories);
    const others = shuffle(["eszik", "alszik", "játszik", "szépítget", "vár"]).slice(0, 3);
    qs.push(createMCQ("olvasas", "szovegertes", story.question, story.answer, others));
  }
  return qs;
}

// ─── EXPORT GENERATORS ───────────────────────────────────────────────────

export const G2_Generators_Hungarian = {
  "szofajok/fonev": genNounRecognition,
  "szofajok/ige": genVerbRecognition,
  "szofajok/melleknev": genAdjectiveRecognition,
  "helyesiras/ly_j": genLyJDistinction,
  "helyesiras/rovid_hosszu": genShortLongVowels,
  "mondat/mondatfajtak": genSentenceTypes,
  "mondat/mondatresz": genSentenceParts,
  "szo/osszetetel": genCompoundWords,
  "szo/kepzok": genAffixes,
  "ragozas/fonevreg": genNounDeclension,
  "ragozas/igereg": genVerbConjugation,
  "szokincs/szinonimak": genSynonyms,
  "szokincs/ellentetek2": genAntonyms,
  "szokincs/foglalkozasok": genOccupations,
  "szokincs/evszakok": genSeasons,
  "szokincs/iskola": genSchoolVocab,
  "olvasas/szokincs": genReadingVocab,
  "olvasas/szovegertes": genReadingComprehension,
};
