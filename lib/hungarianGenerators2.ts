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

// Articles (szófajok/nevelő) — a, az, egy usage
const ARTICLES_USAGE = [
  { sentence: "A kutya nagy.", article: "a", context: "definite, consonant" },
  { sentence: "Az alma piros.", article: "az", context: "definite, vowel" },
  { sentence: "Egy ház van.", article: "egy", context: "indefinite" },
  { sentence: "A iskola szép.", article: "az", context: "definite, vowel sound" },
  { sentence: "Egy ember jött.", article: "egy", context: "indefinite" },
  { sentence: "Az óra van.", article: "az", context: "definite, vowel" },
];

// Postpositions (szófajok/nevuto) — spatial relations
const POSTPOSITIONS = [
  { word: "mellett", meaning: "beside", example: "A ház mellett van egy fa." },
  { word: "mögött", meaning: "behind", example: "A kutya mögött szalad." },
  { word: "alatt", meaning: "under", example: "Az asztal alatt egy labda van." },
  { word: "felett", meaning: "above", example: "A madár felett az ég kék." },
  { word: "között", meaning: "between", example: "A két fa között egy patak van." },
  { word: "előtt", meaning: "in front of", example: "Az iskola előtt játékos vannak." },
];

// Vowel harmony (helyesiras/maganhangzo_harmonia) — mély/magas rag
const VOWEL_HARMONY = [
  { word: "ház", dim: "házak", ragClass: "mély" },
  { word: "szék", dim: "székek", ragClass: "magas" },
  { word: "kutya", dim: "kutyák", ragClass: "mély" },
  { word: "kenyér", dim: "kenyerek", ragClass: "magas" },
  { word: "virág", dim: "virágok", ragClass: "mély" },
  { word: "tündér", dim: "tündérek", ragClass: "magas" },
];

// Long consonants (helyesiras/hosszu_massalhangzo) — összeesz, hasznos, vaddisznó
const LONG_CONSONANTS = [
  { word: "összes", hasLong: true, pattern: "ss" },
  { word: "vasárnap", hasLong: false, pattern: "single" },
  { word: "szükséges", hasLong: false, pattern: "single" },
  { word: "osztály", hasLong: false, pattern: "single" },
  { word: "történet", hasLong: false, pattern: "single" },
  { word: "rossz", hasLong: true, pattern: "ss" },
  { word: "kellemes", hasLong: true, pattern: "ll" },
  { word: "uttort", hasLong: true, pattern: "tt" },
];

// Nature vocabulary (szokincs/termeszet) — erdő, mező, tó, hegy, patak
const NATURE_WORDS = [
  "erdő", "mező", "tó", "hegy", "patak", "folyó", "fa", "fű", "virág",
  "madár", "hal", "szarvas", "mókus", "völgy", "hegycsúcs",
];

// Sports (szokincs/sport) — focizik, úszik, fut, ugrik, labda
const SPORTS_VOCAB = [
  "focizik", "úszik", "fut", "ugrik", "labda", "rúgás", "kapu", "játék",
  "verseny", "győzelem", "vesztes", "csapat", "edző", "pályázik",
];

// Word order (mondat/szorend) — ki mit csinál hol mikor
const WORD_ORDER_EXAMPLES = [
  { correct: "A fiú az iskolában tanul.", parts: ["A fiú", "az iskolában", "tanul"] },
  { correct: "A macska az ágy alatt alszik.", parts: ["A macska", "az ágy alatt", "alszik"] },
  { correct: "Mari kedden tornaórára megy.", parts: ["Mari", "kedden", "tornaórára", "megy"] },
  { correct: "Az apa a konyhában főz.", parts: ["Az apa", "a konyhában", "főz"] },
];

// Story elements (olvasas/mesek) — hős, gonosz, varázslat, tanulság
const STORY_ELEMENTS = [
  { element: "hős", description: "fő szereplő" },
  { element: "gonosz", description: "rossz szereplő" },
  { element: "varázslat", description: "természetfeletti erő" },
  { element: "tanulság", description: "a történet üzenete" },
  { element: "kaland", description: "érdekes esemény" },
  { element: "bizottság", description: "döntéshozó csoport" },
];

// Plural formation (szo/tobbesszam) — -k, -ok/-ek/-ök
const PLURAL_FORMS = [
  { singular: "kutya", plural: "kutyák", ending: "-k" },
  { singular: "ház", plural: "házak", ending: "-ak" },
  { singular: "szék", plural: "székek", ending: "-ek" },
  { singular: "böl", plural: "bölök", ending: "-ök" },
  { singular: "virág", plural: "virágok", ending: "-ok" },
  { singular: "kenyér", plural: "kenyerek", ending: "-ek" },
];

// Hyphenation (szo/kotojelek) — összeesz, végigmegy, stb.
const HYPHENATED_WORDS = [
  { word: "helyesen", needsHyphen: false },
  { word: "végigmegy", needsHyphen: false },
  { word: "ki-visszatart", needsHyphen: true },
  { word: "fel-felkapcsolódik", needsHyphen: true },
  { word: "összeesz", needsHyphen: false },
  { word: "újra-kezd", needsHyphen: true },
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

function genArticles(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const usage = pick(ARTICLES_USAGE);
    const others = shuffle(["a", "az", "egy"]).filter(x => x !== usage.article).slice(0, 3);
    const blankSentence = usage.sentence.replace(usage.article, "___");
    qs.push(createMCQ("szofajok", "nevelő", `Melyik a helyes? "${blankSentence}"`, usage.article, others));
  }
  return qs;
}

function genPostpositions(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const pp = pick(POSTPOSITIONS);
    const others = shuffle(POSTPOSITIONS.filter(p => p.word !== pp.word)).map(p => p.word).slice(0, 3);
    const blankExample = pp.example.replace(pp.word, "___");
    qs.push(createMCQ("szofajok", "nevuto", `Melyik nevető a helyes? "${blankExample}"`, pp.word, others));
  }
  return qs;
}

function genVowelHarmony(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const vh = pick(VOWEL_HARMONY);
    const others = shuffle(VOWEL_HARMONY.filter(v => v.word !== vh.word)).map(v => v.dim).slice(0, 3);
    qs.push(createMCQ("helyesiras", "maganhangzo_harmonia", `"${vh.word}" többes száma:`, vh.dim, others));
  }
  return qs;
}

function genLongConsonants(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const lc = pick(LONG_CONSONANTS);
    const answer = lc.hasLong ? "Igen" : "Nem";
    const others = [lc.hasLong ? "Nem" : "Igen"];
    qs.push(createMCQ("helyesiras", "hosszu_massalhangzo", `Van-e hosszú mássalhangzó a "${lc.word}"-ban?`, answer, others));
  }
  return qs;
}

function genNatureVocab(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const word = pick(NATURE_WORDS);
    const others = shuffle(NATURE_WORDS.filter(w => w !== word)).slice(0, 3);
    qs.push(createMCQ("szokincs", "termeszet", `Melyik a természeti szó?`, word, others));
  }
  return qs;
}

function genSportsVocab(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const word = pick(SPORTS_VOCAB);
    const others = shuffle(SPORTS_VOCAB.filter(w => w !== word)).slice(0, 3);
    qs.push(createMCQ("szokincs", "sport", `Melyik a sporttal kapcsolatos szó?`, word, others));
  }
  return qs;
}

function genWordOrder(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const example = pick(WORD_ORDER_EXAMPLES);
    const options = [example.correct, ...shuffle(WORD_ORDER_EXAMPLES.filter(e => e.correct !== example.correct)).map(e => e.correct).slice(0, 3)];
    qs.push(createMCQ("mondat", "szorend", `Melyik a helyes szórend?`, example.correct, options.filter(o => o !== example.correct)));
  }
  return qs;
}

function genStoryElements(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const elem = pick(STORY_ELEMENTS);
    const others = shuffle(STORY_ELEMENTS.filter(e => e.element !== elem.element)).map(e => e.element).slice(0, 3);
    qs.push(createMCQ("olvasas", "mesek", `Mi a meséhez tartozó elem? (${elem.description})`, elem.element, others));
  }
  return qs;
}

function genPluralForms(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const pf = pick(PLURAL_FORMS);
    const others = shuffle(PLURAL_FORMS.filter(p => p.singular !== pf.singular)).map(p => p.plural).slice(0, 3);
    qs.push(createMCQ("szo", "tobbesszam", `"${pf.singular}" többes száma:`, pf.plural, others));
  }
  return qs;
}

function genHyphenation(): CurriculumMCQ[] {
  const qs: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const hw = pick(HYPHENATED_WORDS);
    const answer = hw.needsHyphen ? "Igen, szükséges a kötőjel" : "Nem, nem szükséges a kötőjel";
    const others = [hw.needsHyphen ? "Nem, nem szükséges a kötőjel" : "Igen, szükséges a kötőjel"];
    qs.push(createMCQ("szo", "kotojelek", `Szükséges-e kötőjel a "${hw.word}"-ban?`, answer, others));
  }
  return qs;
}

// ─── EXPORT GENERATORS ───────────────────────────────────────────────────

export const G2_Generators_Hungarian = {
  fonev: genNounRecognition,
  ige: genVerbRecognition,
  melleknev: genAdjectiveRecognition,
  "nevelő": genArticles,
  nevuto: genPostpositions,
  ly_j: genLyJDistinction,
  rovid_hosszu: genShortLongVowels,
  maganhangzo_harmonia: genVowelHarmony,
  hosszu_massalhangzo: genLongConsonants,
  mondatfajtak: genSentenceTypes,
  mondatresz: genSentenceParts,
  szorend: genWordOrder,
  osszetetel: genCompoundWords,
  kepzok: genAffixes,
  tobbesszam: genPluralForms,
  kotojelek: genHyphenation,
  fonevreg: genNounDeclension,
  igereg: genVerbConjugation,
  szinonimak: genSynonyms,
  ellentetek: genAntonyms,
  foglalkozasok: genOccupations,
  evszakok: genSeasons,
  iskola: genSchoolVocab,
  termeszet: genNatureVocab,
  sport: genSportsVocab,
  szokincs: genReadingVocab,
  szovegertes: genReadingComprehension,
  mesek: genStoryElements,
};
