// ─── HUNGARIAN GENERATORS — GRADE 2 ─────────────────────────────────────
// Procedural MCQ question generators for Hungarian Grade 2 (2. osztály) curriculum
// Generates 30+ questions per subtopic using varied word pools
//
// 18 subtopics: Word types, Spelling, Grammar, Vocabulary, Reading
// All questions in Hungarian (Magyar nyelv)
// Grade-appropriate for 7-8 year old students

import type { CurriculumMCQ, CurriculumTyping, CurriculumQuestion } from "./curriculumTypes";

// Type alias for Hungarian MCQ
type MagyarMCQ = CurriculumMCQ & { type: "mcq" };
type MagyarTyping = CurriculumTyping & { type: "typing" };

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

function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): MagyarTyping {
  return {
    type: "typing",
    topic,
    subtopic,
    question,
    answer,
  } as MagyarTyping;
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
  "rajzol", "fest", "énekel", "ugat", "nyávog", "száll", "repül",
  "nevet", "sír", "táncol", "ugrik", "úszik", "fog", "vet",
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
  { word: "jobb", letter: "j" },
  { word: "jól", letter: "j" },
  { word: "jó", letter: "j" },
  { word: "járni", letter: "j" },
  { word: "lyuk", letter: "ly" },
  { word: "folyó", letter: "ly" },
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
  { word: "szép", synonym: "csinos" },
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
  "tanár", "orvos", "mérnök", "nővér", "rendőr", "tűzoltó",
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
  { sentence: "Az iskola szép.", article: "az", context: "definite, vowel sound" },
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
  { word: "előtt", meaning: "in front of", example: "Az iskola előtt játékosok vannak." },
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
  { word: "úttörő", hasLong: true, pattern: "tt" },
];

// Nature vocabulary (szokincs/termeszet) — erdő, mező, tó, hegy, patak
const NATURE_WORDS = [
  "erdő", "mező", "tó", "hegy", "patak", "folyó", "fa", "fű", "virág",
  "madár", "hal", "szarvas", "mókus", "völgy", "hegycsúcs",
];

// Sports (szokincs/sport) — focizik, úszik, fut, ugrik, labda
const SPORTS_VOCAB = [
  "focizik", "úszik", "fut", "ugrik", "labda", "rúgás", "kapu", "játék",
  "verseny", "győzelem", "vesztes", "csapat", "edző", "kosárlabda",
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
  { element: "befejezés", description: "a történet vége" },
];

// Plural formation (szo/tobbesszam) — -k, -ok/-ek/-ök
const PLURAL_FORMS = [
  { singular: "kutya", plural: "kutyák", ending: "-k" },
  { singular: "ház", plural: "házak", ending: "-ak" },
  { singular: "szék", plural: "székek", ending: "-ek" },
  { singular: "öröm", plural: "örömök", ending: "-ök" },
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

function genNounRecognition(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const noun = pick(NOUNS_G2);
    const others = shuffle(NOUNS_G2.filter(n => n !== noun)).slice(0, 3);
    qs.push(createMCQ("szofajok", "fonev", `Melyik főnév? "${noun}"`, noun, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a főnév?", "élőlény, tárgy vagy fogalom neve"],
    ["Írd le: egy állat neve!", ["kutya", "macska", "madár", "ló", "hal"]],
    ["Mondd meg: 'alma' milyen szó?", "főnév"],
    ["Adj meg egy bútor nevét!", ["asztal", "szék", "ágy"]],
    ["Írj egy főnevet az iskolából!", ["könyv", "ceruza", "toll", "radír"]],
    ["Mi a neve annak, ahol tanulsz?", "iskola"],
    ["Melyik szó jelöl élőlényt: kutya, fut, szép?", "kutya"],
    ["Milyen szó a 'ház'?", "főnév"],
    ["Írj egy gyümölcs nevét!", ["alma", "körte", "banán", "eper"]],
    ["A 'könyv' szó milyen szófaj?", "főnév"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szofajok", "fonev", t[0], t[1])));
  return qs;
}

function genVerbRecognition(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const verb = pick(VERBS_G2);
    const others = shuffle(ADJECTIVES_G2.concat(NOUNS_G2)).slice(0, 3);
    qs.push(createMCQ("szofajok", "ige", `Melyik ige? "${verb}"`, verb, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi az ige?", "cselekvést, történést jelöl"],
    ["Milyen szó a 'fut'?", "ige"],
    ["Írd le egy mozgás igéjét!", ["fut", "sétál", "ugrik", "úszik"]],
    ["Melyik szó cselekvés: kutya, fut, szép?", "fut"],
    ["Milyen szó az 'eszik'?", "ige"],
    ["Írj egy igét, amit a macska csinál!", ["nyávog", "alszik", "eszik"]],
    ["A 'tanul' szó milyen szófaj?", "ige"],
    ["Mit csinál az, aki rajzol?", "rajzol"],
    ["Írj egy ige jelen idejű alakját!", ["fut", "olvas", "ír", "játszik"]],
    ["Milyen szó az 'énekel'?", "ige"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szofajok", "ige", t[0], t[1])));
  return qs;
}

function genAdjectiveRecognition(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const adj = pick(ADJECTIVES_G2);
    const others = shuffle(NOUNS_G2.concat(VERBS_G2)).slice(0, 3);
    qs.push(createMCQ("szofajok", "melleknev", `Melyik melléknév? "${adj}"`, adj, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a melléknév?", "tulajdonságot jelöl"],
    ["Milyen szó a 'piros'?", "melléknév"],
    ["Írj egy szín nevét (melléknév)!", ["piros", "kék", "zöld", "sárga", "fehér"]],
    ["Melyik szó tulajdonságot jelöl: alma, fut, nagy?", "nagy"],
    ["Milyen szó a 'szép'?", "melléknév"],
    ["Milyen lehet a kutya?", ["nagy", "kicsi", "szép", "okos"]],
    ["A 'hideg' szó milyen szófaj?", "melléknév"],
    ["Írj egy ellentétpárt melléknevekkel!", ["nagy-kicsi", "meleg-hideg", "szép-csúnya"]],
    ["Milyen az alma, ha megérik?", "piros"],
    ["Adj meg egy melléknevet, ami gyorsaságot jelöl!", "gyors"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szofajok", "melleknev", t[0], t[1])));
  return qs;
}

function genLyJDistinction(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const item = pick(LY_J_WORDS);
    const wrong = shuffle(["j", "ly", "y"]).filter(x => x !== item.letter).slice(0, 3);
    qs.push(createMCQ("helyesiras", "ly_j", `Melyik jó? "${item.word}"`, item.letter, wrong));
  }
  const typingPool: [string, string | string[]][] = [
    ["Melyik betűvel írjuk: 'játék'?", "j"],
    ["Melyik betűvel írjuk: 'lyuk'?", "ly"],
    ["Melyik betűvel írjuk: 'gólya'?", "ly"],
    ["Melyik betűvel írjuk: 'folyó'?", "ly"],
    ["J vagy ly? 'jobb' szóban:", "j"],
    ["J vagy ly? 'mély' szóban:", "ly"],
    ["J vagy ly? 'járda' szóban:", "j"],
    ["J vagy ly? 'királynő' szóban:", "ly"],
    ["Melyik betűvel írjuk: 'jó'?", "j"],
    ["J vagy ly? 'gólya' szóban:", "ly"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("helyesiras", "ly_j", t[0], t[1])));
  return qs;
}

function genShortLongVowels(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const pair = pick(SHORT_LONG_VOWELS);
    const options = [pair.word_s, pair.word_l, ...shuffle(NOUNS_G2).slice(0, 2)];
    qs.push(createMCQ("helyesiras", "rovid_hosszu", `Melyik szóban a rövid "${pair.short}"?`, pair.word_s, options.filter(o => o !== pair.word_s)));
  }
  const typingPool: [string, string | string[]][] = [
    ["Rövid vagy hosszú a magánhangzó 'alma' szóban?", "rövid"],
    ["Rövid vagy hosszú az 'á' betű?", "hosszú"],
    ["Írj egy szót hosszú á-val!", ["árpa", "ár", "álom"]],
    ["Rövid vagy hosszú a magánhangzó 'óra' szóban?", "hosszú"],
    ["Írj egy szót rövid i-vel!", ["iskola", "is", "itt"]],
    ["Rövid vagy hosszú az 'í' betű?", "hosszú"],
    ["Miért fontos a hosszú magánhangzó?", "megváltoztatja a szó jelentését"],
    ["Írj egy szót hosszú ú-val!", ["út", "úr", "úgy"]],
    ["Rövid vagy hosszú a magánhangzó 'egér' szóban?", "hosszú"],
    ["Rövid vagy hosszú a magánhangzó 'utca' szóban?", "rövid"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("helyesiras", "rovid_hosszu", t[0], t[1])));
  return qs;
}

function genSentenceTypes(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const st = pick(SENTENCE_TYPES);
    const others = shuffle(SENTENCE_TYPES.filter(s => s.type !== st.type)).map(s => s.type).slice(0, 3);
    qs.push(createMCQ("mondat", "mondatfajtak", `Melyik mondatfajta? "${st.example}"`, st.type, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Milyen jelet teszünk a kérdő mondat végére?", "?"],
    ["Milyen mondatfajta: 'A kutya fut.'?", "kijelentő"],
    ["Milyen mondatfajta: 'Hol van a macska?'?", "kérdő"],
    ["Milyen mondatfajta: 'Gyere ide!'?", "felszólító"],
    ["Milyen jelet teszünk a felszólító mondat végére?", "!"],
    ["Milyen mondatfajta: 'Milyen szép a virág!'?", "felkiáltó"],
    ["Milyen jelet teszünk a kijelentő mondat végére?", "."],
    ["Írj egy kérdő mondatot!", ["Hol van a kutya?", "Mi a neved?", "Hány éves vagy?"]],
    ["A kérdő mondat mindig mit kér?", "választ"],
    ["Milyen mondatfajta egy kérés?", "felszólító"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("mondat", "mondatfajtak", t[0], t[1])));
  return qs;
}

function genSentenceParts(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const sp = pick(SENTENCE_PARTS);
    const others = shuffle(SENTENCE_PARTS.filter(s => s.part !== sp.part)).map(s => s.part).slice(0, 3);
    qs.push(createMCQ("mondat", "mondatresz", `Mi az alany ebben: "${sp.context}"`, "A kutya", ["futott", "a", "után"]));
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi az alany a mondatban?", "aki vagy ami csinál valamit"],
    ["Mi az állítmány a mondatban?", "amit az alany csinál"],
    ["Mi az alany ebben: 'A kutya fut.'?", "A kutya"],
    ["Mi az állítmány ebben: 'A macska alszik.'?", "alszik"],
    ["Ki a mondat alanyt jelöl: 'A fiú labdát dob.'?", "A fiú"],
    ["Mi a tárgy ebben: 'A fiú labdát dob.'?", "labdát"],
    ["Mi kérdez az alanyra?", "ki? mi?"],
    ["Mi kérdez az állítmányra?", "mit csinál?"],
    ["Mi az alany ebben: 'Mari énekel.'?", "Mari"],
    ["Egészítsd ki: Az alany azt jelöli, aki ... a cselekvést.", "végzi"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("mondat", "mondatresz", t[0], t[1])));
  return qs;
}

function genCompoundWords(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const comp = pick(COMPOUNDS);
    const others = shuffle(NOUNS_G2).slice(0, 3);
    qs.push(createMCQ("szo", "osszetetel", `Melyik összetett szó?`, comp.compound, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi az összetett szó?", "két szóból áll össze"],
    ["Írd le: 'nap' + 'fény' = ?", "napfény"],
    ["Írd le: 'víz' + 'csap' = ?", "vízcsap"],
    ["Írd le: 'papír' + 'kosár' = ?", "papírkosár"],
    ["Hány szóból áll az összetett szó?", "kettő"],
    ["Írd le: 'könyv' + ... = könyves?", "könyv"],
    ["Mi a 'szódavíz' első tagja?", "szóda"],
    ["Mi a 'napfény' második tagja?", "fény"],
    ["Írj egy összetett szót!", ["napfény", "vízcsap", "papírkosár"]],
    ["Összetett szó: 'iskola' + 'táska' = ?", "iskolatáska"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szo", "osszetetel", t[0], t[1])));
  return qs;
}

function genAffixes(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const aff = pick(AFFIXES);
    const others = shuffle(ADJECTIVES_G2).slice(0, 3);
    qs.push(createMCQ("szo", "kepzok", `"${aff.base}" + "${aff.affix}" = ?`, aff.result, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["'könyv' + '-es' = ?", "könyves"],
    ["'szín' + '-es' = ?", "színes"],
    ["'szép' + '-en' = ?", "szépen"],
    ["'gyors' + '-an' = ?", "gyorsan"],
    ["Mi a képző?", "szó végéhez ragasztott toldalék"],
    ["'barna' + '-s' = ?", "barnas"],
    ["A képző ... a szó jelentését.", "módosítja"],
    ["'kék' + '-es' = ?", "kékes"],
    ["'szép' képzős alakja?", "szépség"],
    ["Melyik toldalék: '-es', '-en', '-ság', '-ság'?", ["-es", "-en", "-ság"]],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szo", "kepzok", t[0], t[1])));
  return qs;
}

function genNounDeclension(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const nc = pick(NOUN_CASES);
    const others = shuffle(NOUN_CASES.filter(n => n.case !== nc.case)).map(n => n.form).slice(0, 3);
    qs.push(createMCQ("ragozas", "fonevreg", `"${nc.noun}" (${nc.case}) = ?`, nc.form, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["'ház' benne van = ?", "házban"],
    ["'asztal' felette = ?", "asztalon"],
    ["Hogyan ragozzuk a főneveket?", "toldalékkal"],
    ["'szék' benne van = ?", "székben"],
    ["'ház' részeshatározója?", "háznak"],
    ["A főnévragozás mire kérdez?", "hol? kinek? minek?"],
    ["'kutya' tárgyesete?", "kutyát"],
    ["'könyv' benne van = ?", "könyvben"],
    ["Mi a tárgyrag?", "-t"],
    ["'víz' részeshatározója?", "víznek"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("ragozas", "fonevreg", t[0], t[1])));
  return qs;
}

function genVerbConjugation(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const vc = pick(VERB_CONJUGATION);
    const others = shuffle(VERB_CONJUGATION.filter(v => v.form !== vc.form)).map(v => v.form).slice(0, 3);
    qs.push(createMCQ("ragozas", "igereg", `"${vc.verb}" + "${vc.subject}" = ?`, vc.form, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["'fut' - én = ?", "futok"],
    ["'fut' - ők = ?", "futnak"],
    ["'fut' - mi = ?", "futunk"],
    ["'eszik' - én = ?", "eszem"],
    ["'eszik' - te = ?", "eszel"],
    ["'eszik' - ő = ?", "eszik"],
    ["Az igeragozás mire kérdez?", "ki csinálja?"],
    ["'olvas' - mi = ?", "olvasunk"],
    ["'ír' - ők = ?", "írnak"],
    ["'játszik' - én = ?", "játszom"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("ragozas", "igereg", t[0], t[1])));
  return qs;
}

function genSynonyms(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const syn = pick(SYNONYMS);
    const others = shuffle(ADJECTIVES_G2.filter(a => a !== syn.word)).slice(0, 3);
    qs.push(createMCQ("szokincs", "szinonimak", `Mi a szinonimája a(z) "${syn.word}"-nak?`, syn.synonym, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a szinonima?", "azonos vagy hasonló jelentésű szó"],
    ["'szép' szinonimája?", ["csinos", "tetszetős", "gyönyörű"]],
    ["'nagy' szinonimája?", ["óriási", "hatalmas", "tekintélyes"]],
    ["'kicsi' szinonimája?", ["apró", "kisméretű", "parányi"]],
    ["'gyors' szinonimája?", ["sebes", "fürge", "gyorsan mozgó"]],
    ["'boldog' szinonimája?", ["vidám", "örömteli", "megelégedett"]],
    ["'szomorú' szinonimája?", ["búskomor", "bánatos", "levert"]],
    ["Írj egy szinonimát a 'futni' igére!", ["szaladni", "rohanni", "sietni"]],
    ["Miért fontosak a szinonimák?", "változatossá teszik a szöveget"],
    ["'jó' szinonimája?", ["helyes", "rendes", "kiváló"]],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szokincs", "szinonimak", t[0], t[1])));
  return qs;
}

function genAntonyms(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const ant = pick(ANTONYMS_G2);
    const others = shuffle(ANTONYMS_G2.filter(a => a.word !== ant.word)).map(a => a.opposite).slice(0, 3);
    qs.push(createMCQ("szokincs", "ellentetek2", `Mi az ellentéte a(z) "${ant.word}"-nak?`, ant.opposite, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi az ellentéte a 'nagy' szónak?", "kicsi"],
    ["Mi az ellentéte a 'gyors' szónak?", "lassú"],
    ["Mi az ellentéte a 'jó' szónak?", "rossz"],
    ["Mi az ellentéte a 'meleg' szónak?", "hideg"],
    ["Mi az ellentéte a 'fent' szónak?", "lent"],
    ["Mi az ellentéte az 'elöl' szónak?", "hátul"],
    ["Mi az ellentét szó?", "két szó ellenkező jelentésű"],
    ["Írj ellentétpárt!", ["nagy-kicsi", "gyors-lassú", "meleg-hideg"]],
    ["Mi az ellentéte a 'szép' szónak?", "csúnya"],
    ["Mi az ellentéte a 'fekete' szónak?", "fehér"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szokincs", "ellentetek2", t[0], t[1])));
  return qs;
}

function genOccupations(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const occ = pick(OCCUPATIONS);
    const others = shuffle(OCCUPATIONS.filter(o => o !== occ)).slice(0, 3);
    qs.push(createMCQ("szokincs", "foglalkozasok", `Melyik foglalkozás?`, occ, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Ki gyógyítja a betegeket?", "orvos"],
    ["Ki tanít az iskolában?", "tanár"],
    ["Ki oltja el a tüzet?", "tűzoltó"],
    ["Ki védi a rendet az utcán?", "rendőr"],
    ["Ki süt kenyeret?", "pék"],
    ["Ki vágja a hajat?", "fodrász"],
    ["Ki vezeti a repülőt?", "pilóta"],
    ["Írj egy foglalkozást!", ["tanár", "orvos", "tűzoltó", "pék", "pilóta"]],
    ["Ki süt tortát és süteményt?", "cukrász"],
    ["Ki festi a képeket?", "festő"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szokincs", "foglalkozasok", t[0], t[1])));
  return qs;
}

function genSeasons(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const seas = pick(SEASONS);
    const others = shuffle(SEASONS.filter(s => s.season !== seas.season)).map(s => s.season).slice(0, 3);
    const month = pick(seas.months);
    qs.push(createMCQ("szokincs", "evszakok", `Melyik évszak az "${month}"?`, seas.season, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Melyik évszak a nyár?", "nyár"],
    ["Melyik hónapban van a tél?", ["december", "január", "február"]],
    ["Hány évszak van?", "négy"],
    ["Melyik évszakban virágzik a fa?", "tavasz"],
    ["Melyik hónapban kezdődik az ősz?", "szeptember"],
    ["Melyik évszakban esik a hó?", "tél"],
    ["Melyik hónap tartozik a tavaszhoz?", ["március", "április", "május"]],
    ["Melyik évszakban nyaralunk a tónál?", "nyár"],
    ["Melyik hónapban kezdődik a tél?", "december"],
    ["Melyik évszak jön a tél után?", "tavasz"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szokincs", "evszakok", t[0], t[1])));
  return qs;
}

function genSchoolVocab(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const vocab = pick(SCHOOL_VOCAB);
    const others = shuffle(SCHOOL_VOCAB.filter(v => v !== vocab)).slice(0, 3);
    qs.push(createMCQ("szokincs", "iskola", `Mit használsz az iskolában?`, vocab, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Mivel írunk az iskolában?", ["ceruza", "toll"]],
    ["Hol törlik le a hibát?", "radír"],
    ["Hol olvassuk a leckét?", ["könyv", "tankönyv"]],
    ["Hol írjuk a dolgozatot?", "füzet"],
    ["Mivel húzunk egyenes vonalat?", "vonalzó"],
    ["Hol tanulunk?", "osztály"],
    ["Ki vezeti az osztályt?", "tanár"],
    ["Hogyan hívják azt a termet, ahol tornázunk?", "tornaterem"],
    ["Hol ebédelünk az iskolában?", "menza"],
    ["Írj egy iskolai eszközt!", ["ceruza", "radír", "vonalzó", "könyv"]],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szokincs", "iskola", t[0], t[1])));
  return qs;
}

function genReadingVocab(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const word = pick(NOUNS_G2.concat(ADJECTIVES_G2));
    const context = `Az "${word}" szó azt jelenti...`;
    const others = shuffle(NOUNS_G2.concat(ADJECTIVES_G2).filter(w => w !== word)).slice(0, 3);
    qs.push(createMCQ("olvasas", "szokincs", context, word, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Írj egy szót, ami kicsi állatot jelent!", ["egér", "madár", "hal"]],
    ["Milyen szó az 'alma'?", "főnév"],
    ["Mi a jelentése a 'boldog' szónak?", "örömteli"],
    ["Írj egy szót, ami nagyságot jelent!", ["nagy", "óriási", "hatalmas"]],
    ["Mi a jelentése az 'erdő' szónak?", "fákkal teli terület"],
    ["Írj egy szót, ami egy gyümölcs neve!", ["alma", "körte", "banán", "eper"]],
    ["Mi a jelentése a 'kicsi' szónak?", "kis méretű"],
    ["Írj egy szót, ami egy testrész neve!", ["kéz", "láb", "fej", "szem"]],
    ["Mi a jelentése a 'szép' szónak?", "tetszetős, vonzó"],
    ["Írj egy szót, amit a tornában csinálunk!", ["fut", "ugrik", "dobja"]],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("olvasas", "szokincs", t[0], t[1])));
  return qs;
}

function genReadingComprehension(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
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
  const typingPool: [string, string | string[]][] = [
    ["Mit csinál a kutya az erdőben?", "fut"],
    ["Milyen az alma?", "piros és édes"],
    ["Ki olvas az osztálynak?", "A tanár"],
    ["Hol fut a kutya?", "az erdőben"],
    ["Mit jelent a 'szövegértés'?", "szöveg megértése"],
    ["Mi a szöveg fő szereplője: 'A macska az ágyon alszik.'?", "A macska"],
    ["Mit csinál a macska: 'A macska az ágyon alszik.'?", "alszik"],
    ["Hol alszik a macska: 'A macska az ágyon alszik.'?", "az ágyon"],
    ["Ki megy iskolába: 'A gyerek iskolába megy.'?", "A gyerek"],
    ["Mit csinál a gyerek: 'A gyerek iskolába megy.'?", "megy iskolába"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("olvasas", "szovegertes", t[0], t[1])));
  return qs;
}

function genArticles(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const usage = pick(ARTICLES_USAGE);
    const others = shuffle(["a", "az", "egy"]).filter(x => x !== usage.article).slice(0, 3);
    const blankSentence = usage.sentence.replace(usage.article, "___");
    qs.push(createMCQ("szofajok", "nevelő", `Melyik a helyes? "${blankSentence}"`, usage.article, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Mikor írunk 'a' névelőt?", "mássalhangzó előtt"],
    ["Mikor írunk 'az' névelőt?", "magánhangzó előtt"],
    ["Mi a határozatlan névelő?", "egy"],
    ["___ alma piros. (névelő)", "Az"],
    ["___ kutya fut. (névelő)", "A"],
    ["___ óra van. (névelő)", "Az"],
    ["Melyik névelő jön 'iskola' elé?", "az"],
    ["Melyik névelő jön 'kutya' elé?", "a"],
    ["Melyik névelő jön 'éjszaka' elé?", "az"],
    ["Mi a határozott névelő?", ["a", "az"]],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szofajok", "nevelő", t[0], t[1])));
  return qs;
}

function genPostpositions(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const pp = pick(POSTPOSITIONS);
    const others = shuffle(POSTPOSITIONS.filter(p => p.word !== pp.word)).map(p => p.word).slice(0, 3);
    const blankExample = pp.example.replace(pp.word, "___");
    qs.push(createMCQ("szofajok", "nevuto", `Melyik névutó a helyes? "${blankExample}"`, pp.word, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Milyen névutó: 'A ház ___ van egy fa.'?", "mellett"],
    ["Milyen névutó: 'Az asztal ___ egy labda.'?", "alatt"],
    ["Mi a névutó?", "viszonyszó a főnév után"],
    ["Milyen névutó jelöli, hogy valami mögött van?", "mögött"],
    ["Milyen névutó jelöli, hogy valami felette van?", "felett"],
    ["Milyen névutó jelöli, hogy valami előtte van?", "előtt"],
    ["Milyen névutó jelöli, hogy valami közte van?", "között"],
    ["Mondd meg a névutóval: a kutya az ágy ... alszik.", "alatt"],
    ["Mondd meg a névutóval: a virág az asztal ... van.", "mellett"],
    ["Írj egy névutót!", ["mellett", "mögött", "alatt", "felett", "között", "előtt"]],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szofajok", "nevuto", t[0], t[1])));
  return qs;
}

function genVowelHarmony(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const vh = pick(VOWEL_HARMONY);
    const others = shuffle(VOWEL_HARMONY.filter(v => v.word !== vh.word)).map(v => v.dim).slice(0, 3);
    qs.push(createMCQ("helyesiras", "maganhangzo_harmonia", `"${vh.word}" többes száma:`, vh.dim, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["'ház' többes száma?", "házak"],
    ["'szék' többes száma?", "székek"],
    ["'kutya' többes száma?", "kutyák"],
    ["'kenyér' többes száma?", "kenyerek"],
    ["'virág' többes száma?", "virágok"],
    ["Mi a magánhangzó-harmónia?", "mély és magas hangok váltakozása"],
    ["'tündér' többes száma?", "tündérek"],
    ["Mély hangú szóhoz milyen rag jár?", "mély rag"],
    ["Magas hangú szóhoz milyen rag jár?", "magas rag"],
    ["'alma' többes száma?", "almák"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("helyesiras", "maganhangzo_harmonia", t[0], t[1])));
  return qs;
}

function genLongConsonants(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const lc = pick(LONG_CONSONANTS);
    const answer = lc.hasLong ? "Igen" : "Nem";
    const others = [lc.hasLong ? "Nem" : "Igen"];
    qs.push(createMCQ("helyesiras", "hosszu_massalhangzo", `Van-e hosszú mássalhangzó a "${lc.word}"-ban?`, answer, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Van hosszú mássalhangzó az 'összes' szóban?", "igen"],
    ["Van hosszú mássalhangzó a 'rossz' szóban?", "igen"],
    ["Hogyan jelöljük a hosszú mássalhangzót?", "kettőzéssel"],
    ["Van hosszú mássalhangzó a 'kellemes' szóban?", "igen"],
    ["Írj egy szót hosszú ll-el!", ["kellemes", "állat", "talál"]],
    ["Van hosszú mássalhangzó az 'úttörő' szóban?", "igen"],
    ["Van hosszú mássalhangzó a 'vasárnap' szóban?", "nem"],
    ["Mi a hosszú mássalhangzó?", "kétszer ejtett hang"],
    ["Írj egy szót hosszú ss-el!", ["összes", "rossz"]],
    ["Van hosszú mássalhangzó az 'iskola' szóban?", "nem"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("helyesiras", "hosszu_massalhangzo", t[0], t[1])));
  return qs;
}

function genNatureVocab(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const word = pick(NATURE_WORDS);
    const others = shuffle(NATURE_WORDS.filter(w => w !== word)).slice(0, 3);
    qs.push(createMCQ("szokincs", "termeszet", `Melyik a természeti szó?`, word, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Írj egy erdőben élő állat nevét!", ["mókus", "szarvas", "madár"]],
    ["Mi a neve a folyóvíznél kisebb vízfolyásnak?", "patak"],
    ["Milyen természeti dolog adja a fényt nappal?", "nap"],
    ["Írj egy természeti vizet!", ["tó", "folyó", "patak", "tenger"]],
    ["Mi nő a réten?", ["fű", "virág"]],
    ["Milyen természeti szó jelöl magas hegycsúcsot?", "hegycsúcs"],
    ["Írj egy természetben élő állat nevét!", ["madár", "hal", "szarvas", "mókus"]],
    ["Mi a neve annak a területnek, ahol sok fa nő?", "erdő"],
    ["Mi a neve a síkvidéki zöld területnek?", "mező"],
    ["Írj egy természeti szót!", ["erdő", "mező", "tó", "hegy", "folyó"]],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szokincs", "termeszet", t[0], t[1])));
  return qs;
}

function genSportsVocab(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const word = pick(SPORTS_VOCAB);
    const others = shuffle(SPORTS_VOCAB.filter(w => w !== word)).slice(0, 3);
    qs.push(createMCQ("szokincs", "sport", `Melyik a sporttal kapcsolatos szó?`, word, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Milyen sport játszható labdával?", ["foci", "kosárlabda", "röplabda"]],
    ["Írj egy sportigét!", ["fut", "úszik", "ugrik", "focizik"]],
    ["Ki vezeti az edzéseket?", "edző"],
    ["Mi a csapat sport?", "foci"],
    ["Ki nyer a versenyen?", "győztes"],
    ["Mi az, ahol a focicsapat gólt lő?", "kapu"],
    ["Írj egy sportszót!", ["labda", "csapat", "győzelem", "verseny"]],
    ["Melyik sporthoz kell uszoda?", "úszás"],
    ["Mi a neve annak, aki elveszít?", "vesztes"],
    ["Melyik sport játszható kézzel?", ["kosárlabda", "röplabda", "kézilabda"]],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szokincs", "sport", t[0], t[1])));
  return qs;
}

function genWordOrder(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const example = pick(WORD_ORDER_EXAMPLES);
    const options = [example.correct, ...shuffle(WORD_ORDER_EXAMPLES.filter(e => e.correct !== example.correct)).map(e => e.correct).slice(0, 3)];
    qs.push(createMCQ("mondat", "szorend", `Melyik a helyes szórend?`, example.correct, options.filter(o => o !== example.correct)));
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a szórend?", "a szavak sorrendje a mondatban"],
    ["Rendezd helyes sorrendbe: 'fut parkban a kutya'", "A kutya fut a parkban."],
    ["Rendezd helyes sorrendbe: 'alszik ágyon a macska'", "A macska alszik az ágyon."],
    ["Mi kerül a mondat elejére?", "az alany"],
    ["Mi kerül általában a mondat végére?", "az ige"],
    ["Melyik helyes szórend: 'a fiú játszik' vagy 'játszik a fiú'?", "a fiú játszik"],
    ["Rendezd helyes sorrendbe: 'iskolában tanul a fiú'", "A fiú az iskolában tanul."],
    ["Mondatban ki cselekvést jelöl?", "az ige"],
    ["Rendezd helyes sorrendbe: 'megy tornaórára Mari kedden'", "Mari kedden tornaórára megy."],
    ["Mi a fontos a helyes szórendnél?", "az értelem"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("mondat", "szorend", t[0], t[1])));
  return qs;
}

function genStoryElements(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const elem = pick(STORY_ELEMENTS);
    const others = shuffle(STORY_ELEMENTS.filter(e => e.element !== elem.element)).map(e => e.element).slice(0, 3);
    qs.push(createMCQ("olvasas", "mesek", `Mi a meséhez tartozó elem? (${elem.description})`, elem.element, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Ki a mese fő szereplője?", "hős"],
    ["Ki a rossz szereplő a mesében?", "gonosz"],
    ["Mi a mese tanulsága?", "az üzenet, amit megtanulunk"],
    ["Mi a varázslat a mesében?", "természetfeletti erő"],
    ["Hogyan végződik a legtöbb mese?", "jól, boldogan"],
    ["Mi a neve a mese izgalmas eseményeinek?", "kaland"],
    ["Írj egy mesei szereplőt!", ["hős", "királyfi", "hercegnő", "sárkány"]],
    ["Mi a neve a mese legfontosabb eseményének?", "csúcspont"],
    ["Miről szól a mese?", "jó és rossz harcáról"],
    ["Mi a befejezés a mesében?", "a történet vége"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("olvasas", "mesek", t[0], t[1])));
  return qs;
}

function genPluralForms(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const pf = pick(PLURAL_FORMS);
    const others = shuffle(PLURAL_FORMS.filter(p => p.singular !== pf.singular)).map(p => p.plural).slice(0, 3);
    qs.push(createMCQ("szo", "tobbesszam", `"${pf.singular}" többes száma:`, pf.plural, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["'kutya' többes száma?", "kutyák"],
    ["'ház' többes száma?", "házak"],
    ["'szék' többes száma?", "székek"],
    ["'öröm' többes száma?", "örömök"],
    ["'virág' többes száma?", "virágok"],
    ["'kenyér' többes száma?", "kenyerek"],
    ["Mi a többes szám jele?", "-k"],
    ["'alma' többes száma?", "almák"],
    ["'ceruza' többes száma?", "ceruzák"],
    ["'fa' többes száma?", "fák"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szo", "tobbesszam", t[0], t[1])));
  return qs;
}

function genHyphenation(): CurriculumQuestion[] {
  const qs: CurriculumQuestion[] = [];
  for (let i = 0; i < 30; i++) {
    const hw = pick(HYPHENATED_WORDS);
    const answer = hw.needsHyphen ? "Igen, szükséges a kötőjel" : "Nem, nem szükséges a kötőjel";
    const others = [hw.needsHyphen ? "Nem, nem szükséges a kötőjel" : "Igen, szükséges a kötőjel"];
    qs.push(createMCQ("szo", "kotojelek", `Szükséges-e kötőjel a "${hw.word}"-ban?`, answer, others));
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a kötőjel?", "összekapcsoló írásjel"],
    ["Kell-e kötőjel a 'ki-visszatart' szóban?", "igen"],
    ["Kell-e kötőjel a 'végigmegy' szóban?", "nem"],
    ["Mikor írunk kötőjelet?", "ismétlős igekötőknél"],
    ["Kell-e kötőjel a 'helyesen' szóban?", "nem"],
    ["Kell-e kötőjel a 'fel-felkapcsolódik' szóban?", "igen"],
    ["Kell-e kötőjel az 'összeesz' szóban?", "nem"],
    ["Mit jelöl a kötőjel az igekötős szóban?", "ismétlést"],
    ["Kell-e kötőjel az 'újra-kezd' szóban?", "igen"],
    ["Mi a szerepe a kötőjelnek?", "összekapcsol szótagokat vagy szavakat"],
  ];
  shuffle(typingPool).forEach(t => qs.push(createTyping("szo", "kotojelek", t[0], t[1])));
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
