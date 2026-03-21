// ─── HUNGARIAN GRADE 5 GENERATORS ───────────────────────────────────────────
// Procedural MCQ question generators for Hungarian Grade 5 (5. osztály) curriculum
// Generates 45 questions per subtopic using seeded PRNG for reproducibility.
//
// 25 subtopics (expanded): Hangtani elemzés, szóelemzés, szófajok, mondatrészek, szövegtan,
// stílus, helyesírás, irodalom, igeidők, igemódok, igekötők, mondatfajták, szószerkezet,
// visszaható névmások, célhatározó, okhatározó
// All questions in Hungarian (Magyar nyelv)
// Grade-appropriate for 10-11 year old students

import type { CurriculumMCQ } from "./curriculumTypes";

// Type alias for Hungarian MCQ
type MagyarMCQ = CurriculumMCQ & { type: "mcq" };

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

const VOWELS_HARMONY = {
  high: ["szék", "víz", "tüköp", "füst", "kör"],          // magas hangrendű (e/i/ö/ü)
  neutral: ["alma", "apa", "szoknya", "ablak", "szalvéta"], // vegyes hangrendű
  low: ["osztály", "tanár", "óra", "sál", "utca"],        // mély hangrendű (a/á/o/ó/u/ú)
};

const CONSONANTS_ASSIMILATION = [
  { word: "fázni", sound: "z", explanation: "sziszegő mássalhangzó" },
  { word: "futni", sound: "t", explanation: "zárómássalhangzó" },
  { word: "csoport", sound: "cs", explanation: "affrikáta" },
  { word: "könnyű", sound: "ny", explanation: "palatális mássalhangzó" },
  { word: "szerem", sound: "sz", explanation: "sibiláns" },
];

const ROOT_SUFFIXES = [
  // plurális jel
  { word: "házak", root: "ház", suffix: "-ak", type: "plurális jel" },
  { word: "szépek", root: "szép", suffix: "-ek", type: "plurális jel" },
  { word: "gyerekek", root: "gyerek", suffix: "-ek", type: "plurális jel" },
  { word: "asztalok", root: "asztal", suffix: "-ok", type: "plurális jel" },
  { word: "kertek", root: "kert", suffix: "-ek", type: "plurális jel" },
  // igei végződés
  { word: "futunk", root: "fut", suffix: "-unk", type: "igei végződés" },
  { word: "olvasott", root: "olvas", suffix: "-ott", type: "igei végződés" },
  { word: "látott", root: "lát", suffix: "-ott", type: "igei végződés" },
  { word: "írunk", root: "ír", suffix: "-unk", type: "igei végződés" },
  { word: "tanulunk", root: "tanul", suffix: "-unk", type: "igei végződés" },
  { word: "sétált", root: "sétál", suffix: "-t", type: "igei végződés" },
  // személyjel / birtokos végződés
  { word: "könyvei", root: "könyv", suffix: "-e, -i", type: "személyjel" },
  { word: "barátom", root: "barát", suffix: "-om", type: "személyjel" },
  { word: "házam", root: "ház", suffix: "-am", type: "személyjel" },
  { word: "testvéreim", root: "testvér", suffix: "-eim", type: "személyjel" },
];

const SUFFIXES_TYPES = [
  { word: "olvasható", suffix: "-ható", type: "képző" },
  { word: "szép-e", suffix: "-e", type: "jel" },
  { word: "házak-at", suffix: "-at", type: "rag" },
  { word: "futó", suffix: "-ó", type: "képző" },
  { word: "nőies", suffix: "-es", type: "képző" },
];

const PARTICIPLES = [
  { word: "futó", type: "melléknévi igenév", sentence: "A futó gyerek gyors volt." },
  { word: "olvasva", type: "határozói igenév", sentence: "Olvasva a könyvet, elaludt." },
  { word: "írni", type: "főnévi igenév", sentence: "Szeret írni." },
  { word: "szilárdan", type: "határozói igenév", sentence: "Szilárdan állt." },
];

const ADVERBS_TYPES = [
  { adverb: "gyorsan", type: "mód", example: "Gyorsan fut." },
  { adverb: "holnap", type: "idő", example: "Holnap megyünk." },
  { adverb: "ott", type: "hely", example: "Ott lakunk." },
  { adverb: "nagyon", type: "fokozás", example: "Nagyon szerettem." },
  { adverb: "miért", type: "kérdő", example: "Miért sírsz?" },
];

const SUBJECT_PREDICATE = [
  { sentence: "A kutya játszik.", subject: "a kutya", predicate: "játszik" },
  { sentence: "Az Anna szép.", subject: "az Anna", predicate: "szép" },
  { sentence: "A gyerekek futnak.", subject: "a gyerekek", predicate: "futnak" },
];

const OBJECT_ADVERB = [
  { sentence: "Péter könyvet olvas.", object: "könyvet", type: "tárgy" },
  { sentence: "A macska szalonnát szereti.", object: "szalonnát", type: "tárgy" },
  { sentence: "Itt lakunk boldogan.", object: "boldogan", type: "határozó" },
];

const TEXT_TYPES = [
  { type: "elbeszélő", example: "A király egyszer meglátott egy szép lányt." },
  { type: "leíró", example: "Az erdő sötét és sűrű volt, tele szép virágokkal." },
  { type: "érvelő", example: "A környezetvédelem fontos, mivel ezt a földet ránk bízták." },
  { type: "tudományos", example: "A fotoszintézis egy kémiai folyamat, amelyben a zöld növények napenergiát használnak." },
];

const COHESION_DEVICES = [
  { device: "azonban", type: "ellentétes kötőszó" },
  { device: "ezért", type: "ok-okozat kötőszó" },
  { device: "viszont", type: "ellentétes kötőszó" },
  { device: "akkor", type: "időhatározó" },
  { device: "így", type: "módhatározó" },
];

const STYLE_LEVELS = [
  { sentence: "Halló! Mit csinálsz?", level: "köznyelvű", type: "informális" },
  { sentence: "Jó napot! Hogyan érzi magát?", level: "irodalmi / formális", type: "formális" },
  { sentence: "Szalo, te? Miegy?", level: "szleng / dialektus", type: "informális" },
];

const COMPOUND_WORDS = [
  { word: "szoknyaöltözet", parts: "szoknya + öltözet", rule: "szóvégi magánhangzót kihagyjuk" },
  { word: "napszúnyog", parts: "nap + szúnyog", rule: "szóvégi 'p' helyén suttogó 'f'" },
  { word: "vasút", parts: "vas + út", rule: "szóvégi 's' helyén suttogó 'f'" },
];

const POEM_FORMS = [
  { form: "szonett", lines: 14, characteristic: "szerelem és vágy tárgyai" },
  { form: "tercett", lines: 3, characteristic: "háromsorosvers" },
  { form: "strófavers", lines: 4, characteristic: "négysorosvers" },
  { form: "haiku", lines: 3, characteristic: "5-7-5 szótagszám" },
];

const STYLISTIC_DEVICES = [
  { device: "metafora", example: "Az acél szen szíve", definition: "kifejezés átérzékelésével" },
  { device: "metonímia", example: "Egy pohár tea", definition: "a tartalom helyett a tartályt említjük" },
  { device: "hiperbola", example: "Millióannyi csillag", definition: "túlzás" },
  { device: "szimbolika", example: "A rózsa a szépség szimbóluma", definition: "szimbólumhasználat" },
];

// ─── GENERATOR FUNCTIONS ────────────────────────────────────────────────────

export function generateHangrendszer(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Melyik szó magas hangrendű?
      const correct = pick(VOWELS_HARMONY.high, rng);
      const wrong = [pick(VOWELS_HARMONY.neutral, rng), pick(VOWELS_HARMONY.low, rng), "tanár"];
      q.push(createMCQ("hangtan", "hangrendsz",
        `Melyik szó magas hangrendű?`, correct, wrong));
    } else if (type === 1) {
      // Melyik szó mély hangrendű?
      const correct = pick(VOWELS_HARMONY.low, rng);
      const wrong = [pick(VOWELS_HARMONY.high, rng), pick(VOWELS_HARMONY.neutral, rng), "szék"];
      q.push(createMCQ("hangtan", "hangrendsz",
        `Melyik szó mély hangrendű?`, correct, wrong));
    } else {
      // Melyik szó vegyes hangrendű?
      const correct = pick(VOWELS_HARMONY.neutral, rng);
      const wrong = [pick(VOWELS_HARMONY.high, rng), pick(VOWELS_HARMONY.low, rng), "osztály"];
      q.push(createMCQ("hangtan", "hangrendsz",
        `Melyik szó vegyes hangrendű?`, correct, wrong));
    }
  }

  return q;
}

export function generateHasonulas(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Melyik szóban van hangtani hasonulás?
      const words = ["képző", "köznyelvű", "szílárdan", "futás"];
      const correct = pick(words, rng);
      const wrong = ["szék", "almafa", "terített"];
      q.push(createMCQ("hangtan", "hasonulas",
        `Melyik szóban van hangtani hasonulás?`, correct, wrong));
    } else if (type === 1) {
      // Mit jelent az asszmilláció?
      const correct = "a szomszédos hangok egymásra hatása";
      const wrong = ["két szótagú szó", "egy szó megváltozása", "kiejtési szabály"];
      q.push(createMCQ("hangtan", "hasonulas",
        `Mit jelent az asszimiláció?`, correct, wrong));
    } else {
      // Írásbeli vs szóbeli különbség?
      const correct = "írjuk: 'napszúnyog', ejtjük: 'napsúnyog'";
      const wrong = ["írjuk: 'szék', ejtjük: 'szék'", "nincs különbség", "csak szövegben van"];
      q.push(createMCQ("hangtan", "hasonulas",
        `Mi az írásbeli és szóbeli különbség az asszimiláció miatt?`, correct, wrong));
    }
  }

  return q;
}

export function generateToToldalek(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  // Build all unique combinations (word × question type) then shuffle — no repeats
  type Combo = [typeof ROOT_SUFFIXES[0], number];
  const combos: Combo[] = [];
  for (const data of ROOT_SUFFIXES) {
    combos.push([data, 0], [data, 1], [data, 2]);
  }
  const shuffled = shuffle(combos, rng);

  for (const [data, type] of shuffled) {
    if (type === 0) {
      // Mi a szó töve?
      const correct = data.root;
      const wrong = [data.suffix, data.type, "szó"];
      q.push(createMCQ("szoelem", "to_toldalek",
        `Melyik a "${data.word}" szó töve?`, correct, wrong));
    } else if (type === 1) {
      // Mi a szó toldaléka?
      const correct = data.suffix;
      const wrong = [data.root, data.type, "szó"];
      q.push(createMCQ("szoelem", "to_toldalek",
        `Melyik a "${data.word}" szó toldaléka?`, correct, wrong));
    } else {
      // Mit fejez ki a toldalék?
      const correct = data.type;
      const wrong = [data.root, "hang", "szó értelme"];
      q.push(createMCQ("szoelem", "to_toldalek",
        `Mit fejez ki a "${data.suffix}" toldalék a szóban?`, correct, wrong));
    }
  }

  return q;
}

export function generateKepzoJelRag(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const data = pick(SUFFIXES_TYPES, rng);
    const type = i % 3;
    if (type === 0) {
      // Képző, jel, vagy rag?
      const correct = data.type;
      const wrong = data.type === "képző" ? ["jel", "rag", "tő"] : ["képző", "jel", "rag"];
      q.push(createMCQ("szoelem", "kepzo_jel_rag",
        `A "${data.suffix}" a szóban képző, jel, vagy rag?`, correct, wrong));
    } else if (type === 1) {
      // Mi a különbség a képző és a jel között?
      const correct = "a képző szófajt, a jel számot fejez ki";
      const wrong = ["a képző tővel összeáll, a jel végig", "nincs különbség", "szórendre van hatása"];
      q.push(createMCQ("szoelem", "kepzo_jel_rag",
        `Mi a különbség a képző és a jel között?`, correct, wrong));
    } else {
      // Mi a rag feladata?
      const correct = "a szó mondatbeli szerepét jelzi";
      const wrong = ["szófajt jelöl", "szótagszámot jelöl", "szóejtést határozza meg"];
      q.push(createMCQ("szoelem", "kepzo_jel_rag",
        `Mi a rag feladata a szóban?`, correct, wrong));
    }
  }

  return q;
}

export function generateIgenev(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const data = pick(PARTICIPLES, rng);
    const type = i % 3;
    if (type === 0) {
      // Milyen igenév?
      const correct = data.type;
      const wrong = ["ige", "melléknév", "határozó"];
      q.push(createMCQ("szofaj", "igenev",
        `Milyen igenév az "${data.word}"?`, correct, wrong));
    } else if (type === 1) {
      // Melyik a főnévi igenév?
      const correct = "írni";
      const wrong = ["futó", "olvasva", "fut"];
      q.push(createMCQ("szofaj", "igenev",
        `Melyik a főnévi igenév?`, correct, wrong));
    } else {
      // Mit fejez ki a melléknévi igenév?
      const correct = "egy cselekvés során létrejött tulajdonságot";
      const wrong = ["egy cselekvést", "egy közös cselekvést", "ok-okozat kapcsolatot"];
      q.push(createMCQ("szofaj", "igenev",
        `Mit fejez ki a melléknévi igenév?`, correct, wrong));
    }
  }

  return q;
}

export function generateHatarozoSzo(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const data = pick(ADVERBS_TYPES, rng);
    const type = i % 3;
    if (type === 0) {
      // Milyen határozó?
      const correct = data.type;
      const wrong = data.type === "mód" ? ["idő", "hely", "fokozás"] : ["mód", "idő", "hely"];
      q.push(createMCQ("szofaj", "határozószó",
        `Milyen határozó az "${data.adverb}" a következő mondatban: "${data.example}"?`, correct, wrong));
    } else if (type === 1) {
      // Hogyan képzünk határozót?
      const correct = "a melléknévhez -an/-en végződést adunk";
      const wrong = ["a főnévhez -nak/-nek végződést adunk", "igézünk egy melléknevét", "toldalékolunk"];
      q.push(createMCQ("szofaj", "határozószó",
        `Hogyan képzünk határozót a melléknevekből?`, correct, wrong));
    } else {
      // Melyik mondat tartalmazza a helyhatározót?
      const correct = "Ott lakunk.";
      const wrong = ["Holnap jövök.", "Nagyon szép.", "Gyorsan fut."];
      q.push(createMCQ("szofaj", "határozószó",
        `Melyik mondat tartalmazza a helyhatározót?`, correct, wrong));
    }
  }

  return q;
}

export function generateAlanyAllitmany(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const data = pick(SUBJECT_PREDICATE, rng);
    const type = i % 3;
    if (type === 0) {
      // Mi az alany?
      const correct = data.subject;
      const wrong = [data.predicate, "mondat", "szó"];
      q.push(createMCQ("mondatresz", "alany_allitmany",
        `Mi az alany a következő mondatban: "${data.sentence}"?`, correct, wrong));
    } else if (type === 1) {
      // Mi az állítmány?
      const correct = data.predicate;
      const wrong = [data.subject, "mellékmondatrész", "szó"];
      q.push(createMCQ("mondatresz", "alany_allitmany",
        `Mi az állítmány a következő mondatban: "${data.sentence}"?`, correct, wrong));
    } else {
      // Alany-állítmány egyeztetés
      const correct = "az alany és az állítmány számában és személyében egyezzék";
      const wrong = ["az alany és az állítmány szófajában egyezzék", "mindig azonos szín szótagszám", "nincs szabály"];
      q.push(createMCQ("mondatresz", "alany_allitmany",
        `Mit jelent az alany-állítmány egyeztetés?`, correct, wrong));
    }
  }

  return q;
}

export function generateTargyHatarozo(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const data = pick(OBJECT_ADVERB, rng);
    const type = i % 3;
    if (type === 0) {
      // Mi a tárgy vagy határozó?
      const correct = data.object;
      const wrong = ["igét", "melléknevet", "előljárószót"];
      q.push(createMCQ("mondatresz", "targy_hatarozo",
        `Mi az adott szó szerepe a mondatban: "${data.sentence}"? - "${data.object}"`, correct, wrong));
    } else if (type === 1) {
      // Mi a tárgy feladata?
      const correct = "az ige tárgyát fejezi ki";
      const wrong = ["az ige helyét fejezi ki", "az ige módját jelzi", "az ige azonosságát adja"];
    } else {
      // Mit fejez ki a határozó?
      const correct = "az ige körülményeit: hely, idő, mód, stb.";
      const wrong = ["az ige tárgya", "az ige alanya", "az ige személye"];
      q.push(createMCQ("mondatresz", "targy_hatarozo",
        `Mit fejez ki a határozó a mondatban?`, correct, wrong));
    }
  }

  return q;
}

export function generateSzovegtipusok(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const data = pick(TEXT_TYPES, rng);
    const type = i % 3;
    if (type === 0) {
      // Melyik szövegtípus?
      const correct = data.type;
      const wrong = data.type === "elbeszélő" ? ["leíró", "érvelő", "tudományos"] : ["elbeszélő", "leíró", "érvelő"];
      q.push(createMCQ("szoveg", "szovegtipusok",
        `Melyik szövegtípus az alábbi? "${data.example.substring(0, 30)}..."`, correct, wrong));
    } else if (type === 1) {
      // Mi az elbeszélő szöveg célja?
      const correct = "egy történetet elmesél";
      const wrong = ["egy tárgyat leír", "egy véleményt bizonyít", "tudományos tényeket közöl"];
      q.push(createMCQ("szoveg", "szovegtipusok",
        `Mi az elbeszélő szöveg célja?`, correct, wrong));
    } else {
      // Mi a leíró szöveg jellemzője?
      const correct = "részletesen leírja a tárgyat, személyt vagy helyet";
      const wrong = ["gyorsan meséli az történetet", "érvelő jellegű", "rövid és tömör"];
      q.push(createMCQ("szoveg", "szovegtipusok",
        `Mi a leíró szöveg jellemzője?`, correct, wrong));
    }
  }

  return q;
}

export function generateKohezio(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const device = pick(COHESION_DEVICES, rng);
    const type = i % 3;
    if (type === 0) {
      // Mit fejez ki az alábbi kötőszó?
      const correct = device.type;
      const wrong = device.type === "ellentétes kötőszó" ? ["ok-okozat", "időhatározó", "módhatározó"] : ["ellentétes", "ok-okozat", "időhatározó"];
      q.push(createMCQ("szoveg", "kohezio",
        `Mit fejez ki az "${device.device}" szó?`, correct, wrong));
    } else if (type === 1) {
      // Mi a szövegkohézió?
      const correct = "a mondatok közötti értelmi és szerkezeti kapcsolat";
      const wrong = ["egy mondat szótagszáma", "egy szó helyes írása", "egy szó hangtani szabálya"];
      q.push(createMCQ("szoveg", "kohezio",
        `Mi a szövegkohézió?`, correct, wrong));
    } else {
      // Melyik kötőszó fejezi ki az ok-okozat kapcsolatot?
      const correct = "ezért";
      const wrong = ["azonban", "viszont", "akkor"];
      q.push(createMCQ("szoveg", "kohezio",
        `Melyik kötőszó fejezi ki az ok-okozat kapcsolatot?`, correct, wrong));
    }
  }

  return q;
}

export function generateKoznyelv(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const data = pick(STYLE_LEVELS, rng);
    const type = i % 3;
    if (type === 0) {
      // Melyik stílusszint?
      const correct = data.level;
      const wrong = data.level === "köznyelvű / informális" ? ["irodalmi", "szleng", "formális"] : ["köznyelvű", "irodalmi", "szleng"];
      q.push(createMCQ("stilus", "koznyelv_irodalmi",
        `Melyik stílusszint? "${data.sentence}"`, correct, wrong));
    } else if (type === 1) {
      // Mi a köznyelvű szöveg jellemzője?
      const correct = "informális, spontán, mindennapokra jellemző";
      const wrong = ["formális, irodalmi", "szleng és dialektus", "tudományos és precíz"];
      q.push(createMCQ("stilus", "koznyelv_irodalmi",
        `Mi a köznyelvű szöveg jellemzője?`, correct, wrong));
    } else {
      // Mi az irodalmi stílus?
      const correct = "formális, gondosan megválasztott szavak";
      const wrong = ["informális, spontán", "szleng és vulgarizmusa", "tudományos és szigorú"];
      q.push(createMCQ("stilus", "koznyelv_irodalmi",
        `Mi az irodalmi stílus jellemzője?`, correct, wrong));
    }
  }

  return q;
}

export function generateOsszetételIras(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const data = pick(COMPOUND_WORDS, rng);
    const type = i % 3;
    if (type === 0) {
      // Mi az összetett szó?
      const correct = data.word;
      const wrong = ["szó", "tő", "toldalék"];
      q.push(createMCQ("helyesiras", "osszetetel_iras",
        `Melyik az összetett szó az alábbiak közül?`, correct, wrong));
    } else if (type === 1) {
      // Mi az összetételírási szabály?
      const correct = data.rule;
      const wrong = ["szótagszám nem változik", "új magánhangzót adunk", "szó végig zárul"];
      q.push(createMCQ("helyesiras", "osszetetel_iras",
        `Az "${data.word}" szó összetétel esetén milyen szabályt követünk?`, correct, wrong));
    } else {
      // Melyik nem összetett szó?
      const correct = "szőnyeg";
      const wrong = ["szoknyaöltözet", "napszúnyog", "vasút"];
      q.push(createMCQ("helyesiras", "osszetetel_iras",
        `Melyik nem összetett szó?`, correct, wrong));
    }
  }

  return q;
}

export function generateVersformak(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const data = pick(POEM_FORMS, rng);
    const type = i % 3;
    if (type === 0) {
      // Melyik versforma?
      const correct = data.form;
      const wrong = data.form === "szonett" ? ["tercett", "strófavers", "haiku"] : ["szonett", "tercett", "haiku"];
      q.push(createMCQ("irodalom", "versformak",
        `Melyik versforma jellemzője: ${data.lines} sor?`, correct, wrong));
    } else if (type === 1) {
      // Mi a haiku?
      const correct = "5-7-5 szótagszámú verses forma";
      const wrong = ["14 soros vers", "3 soros vers", "négysorosvers"];
      q.push(createMCQ("irodalom", "versformak",
        `Mi a haiku?`, correct, wrong));
    } else {
      // Mi a szonett?
      const correct = "14 sorból álló szerelmi vers";
      const wrong = ["3 soros vers", "négysorosvers", "hosszú elbeszélő vers"];
      q.push(createMCQ("irodalom", "versformak",
        `Mi a szonett jellemzője?`, correct, wrong));
    }
  }

  return q;
}

export function generateStiluseszk(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const data = pick(STYLISTIC_DEVICES, rng);
    const type = i % 3;
    if (type === 0) {
      // Melyik stilisztikai eszköz?
      const correct = data.device;
      const wrong = data.device === "metafora" ? ["metonímia", "hiperbola", "szimbolika"] : ["metafora", "metonímia", "hiperbola"];
      q.push(createMCQ("irodalom", "stiluseszk",
        `Melyik stilisztikai eszköz az alábbi? "${data.example}"`, correct, wrong));
    } else if (type === 1) {
      // Mi a metafora?
      const correct = data.device === "metafora" ? data.definition : "kifejezés átérzékelésével";
      const wrong = ["szó helyettesítése", "szó ismétlése", "szó elhagyása"];
      q.push(createMCQ("irodalom", "stiluseszk",
        `Mi a metafora?`, correct, wrong));
    } else {
      // Mi a hiperbola?
      const correct = "túlzás";
      const wrong = ["csökkentés", "szó ismétlése", "szó körülírása"];
      q.push(createMCQ("irodalom", "stiluseszk",
        `Mi a hiperbola?`, correct, wrong));
    }
  }

  return q;
}

// ─── NEW GENERATORS FOR EXPANDED GRADE 5 (10+ SUBTOPICS) ──────────────────────

export function generateIgeIgeidok(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const tenses = [
    { tense: "jelen idő", verb: "futok", example: "Ma futok az erdőben." },
    { tense: "múlt idő", verb: "futottam", example: "Tegnap futottam az erdőben." },
    { tense: "jövő idő", verb: "futni fogok", example: "Holnap futni fogok az erdőben." },
  ];

  for (let i = 0; i < 45; i++) {
    const data = pick(tenses, rng);
    const type = i % 3;
    if (type === 0) {
      const correct = data.tense;
      const wrong = tenses.filter(t => t.tense !== data.tense).map(t => t.tense);
      q.push(createMCQ("ige", "ige_igeidok",
        `Melyik igeidőt fejezi ki? "${data.example}"`, correct, wrong));
    } else if (type === 1) {
      const correct = data.verb;
      const wrong = ["futá", "fut", "futás"];
      q.push(createMCQ("ige", "ige_igeidok",
        `A "${data.tense}" alapján melyik az igealak?`, correct, wrong));
    } else {
      const correct = "a cselekvés időbeli helyét";
      const wrong = ["a cselekvés módját", "a cselekvés intenzitását", "a cselekvés tárgyát"];
      q.push(createMCQ("ige", "ige_igeidok",
        `Mit fejez ki az igeidő?`, correct, wrong));
    }
  }

  return q;
}

export function generateIgeIgemódok(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const moods = [
    { mood: "kijelentő mód", example: "Futok az erdőben.", description: "valódi cselekvést jelent" },
    { mood: "felszólító mód", example: "Fuss az erdőben!", description: "parancsot vagy kérést fejez ki" },
    { mood: "feltételes mód", example: "Ha futhatnék, futna az erdőben.", description: "lehetséges vagy képzelt cselekvést jelent" },
  ];

  for (let i = 0; i < 45; i++) {
    const data = pick(moods, rng);
    const type = i % 3;
    if (type === 0) {
      const correct = data.mood;
      const wrong = moods.filter(m => m.mood !== data.mood).map(m => m.mood);
      q.push(createMCQ("ige", "ige_igemódok",
        `Melyik igemód van a mondatban? "${data.example}"`, correct, wrong));
    } else if (type === 1) {
      const correct = data.description;
      const wrong = ["a cselekvés időpontját jelenti", "az igecsoport típusát jelenti", "a cselekvés módjára utal"];
      q.push(createMCQ("ige", "ige_igemódok",
        `Mit fejez ki a ${data.mood}?`, correct, wrong));
    } else {
      const correct = "valódi, megtörtént vagy megtörténő cselekvést";
      const wrong = ["kívánságot vagy feltételt", "parancsot", "időbeli helyzetét"];
      q.push(createMCQ("ige", "ige_igemódok",
        `Mit fejez ki a kijelentő mód?`, correct, wrong));
    }
  }

  return q;
}

export function generateIgeneves(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const structures = [
    { structure: "futni szeretünk", type: "főnévi igenév", sentence: "Futni szeretünk nyáron." },
    { structure: "futva haladunk", type: "határozói igenév", sentence: "Futva haladunk az úton." },
    { structure: "futó gyerek", type: "melléknévi igenév", sentence: "A futó gyerek fáradt." },
  ];

  for (let i = 0; i < 45; i++) {
    const data = pick(structures, rng);
    const type = i % 3;
    if (type === 0) {
      const correct = data.type;
      const wrong = structures.filter(s => s.type !== data.type).map(s => s.type);
      q.push(createMCQ("igenev", "igeneves_szerkezetek",
        `Milyen igenév a következő? "${data.structure}"`, correct, wrong));
    } else if (type === 1) {
      const correct = data.sentence;
      const wrong = ["Fut a gyerek.", "A futás szép sport.", "Akarom futni."];
      q.push(createMCQ("igenev", "igeneves_szerkezetek",
        `Melyik mondat tartalmazza az igeneves szerkezetet?`, correct, wrong));
    } else {
      const correct = "egy cselekvést főnévként vagy melléknevként használunk";
      const wrong = ["két igét egymás után írunk", "az igét nem konjugáljuk", "a mondat végét jelöljük"];
      q.push(createMCQ("igenev", "igeneves_szerkezetek",
        `Mi az igeneves szerkezet lényege?`, correct, wrong));
    }
  }

  return q;
}

export function generateMondatfajtak(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const sentenceTypes = [
    { type: "közlő mondat", example: "Péter futnak az erdőben.", mark: "." },
    { type: "kérdő mondat", example: "Péter fut az erdőben?", mark: "?" },
    { type: "felszólító mondat", example: "Péter, fuss az erdőben!", mark: "!" },
  ];

  for (let i = 0; i < 45; i++) {
    const data = pick(sentenceTypes, rng);
    const type = i % 3;
    if (type === 0) {
      const correct = data.type;
      const wrong = sentenceTypes.filter(s => s.type !== data.type).map(s => s.type);
      q.push(createMCQ("mondattan", "mondatfajtak",
        `Milyen mondatfajta? "${data.example}"`, correct, wrong));
    } else if (type === 1) {
      const correct = data.mark;
      const wrong = sentenceTypes.filter(s => s.mark !== data.mark).map(s => s.mark);
      q.push(createMCQ("mondattan", "mondatfajtak",
        `Milyen írásjelcsalád jelöli a ${data.type}-ot?`, correct, wrong));
    } else {
      const correct = "információt közöl";
      const wrong = ["kérdést tesz fel", "parancsot ad", "óhajtást fejez ki"];
      q.push(createMCQ("mondattan", "mondatfajtak",
        `Mit csinál a közlő mondat?`, correct, wrong));
    }
  }

  return q;
}

export function generateIgekoto(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const particles = [
    { particle: "meg-", verb: "futni", result: "megfutni", meaning: "befejezettség" },
    { particle: "fel-", verb: "futni", result: "futni", meaning: "felfelé irányultság" },
    { particle: "ki-", verb: "futni", result: "kifutni", meaning: "kifelé irányultság" },
    { particle: "be-", verb: "futni", result: "befutni", meaning: "befelé irányultság" },
  ];

  for (let i = 0; i < 45; i++) {
    const data = pick(particles, rng);
    const type = i % 3;
    if (type === 0) {
      const correct = data.result;
      const wrong = ["futni", "futás", "futó"];
      q.push(createMCQ("ige", "igekoto",
        `Mit jelent az igekötő? "${data.particle}" + "${data.verb}"`, correct, wrong));
    } else if (type === 1) {
      const correct = data.meaning;
      const wrong = ["időbeli helyzet", "múlt idő jelölése", "mondatszerkezet"];
      q.push(createMCQ("ige", "igekoto",
        `Mit fejez ki a "${data.particle}" igekötő?`, correct, wrong));
    } else {
      const correct = "az igealak elé";
      const wrong = ["az igealak után", "az ige közepébe", "az igealak helyére"];
      q.push(createMCQ("ige", "igekoto",
        `Hova kerül az igekötő?`, correct, wrong));
    }
  }

  return q;
}

export function generateHelyesIrasVesszo(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const examples = [
    { correct: "Az alma, a körte és a banán gyümölcsök.", incorrect: "Az alma a körte és a banán gyümölcsök.", rule: "sorolás" },
    { correct: "Péter, gyere ide!", incorrect: "Péter gyere ide!", rule: "szólítás" },
    { correct: "Szép volt, de fárasztó nap volt.", incorrect: "Szép volt de fárasztó nap volt.", rule: "ellentétes kötőszó" },
  ];

  for (let i = 0; i < 45; i++) {
    const data = pick(examples, rng);
    const type = i % 3;
    if (type === 0) {
      const correct = data.correct;
      const wrong = [data.incorrect, "nincs vessző szükséges", "mindkettő egyenlően helyes"];
      q.push(createMCQ("helyesiras", "helyesiras_vesszö",
        `Melyik mondatban van helyesen a vessző?`, correct, wrong));
    } else if (type === 1) {
      const correct = data.rule;
      const wrong = ["szóelhatárolás", "mondatjelölés", "magánhangzó után"];
      q.push(createMCQ("helyesiras", "helyesiras_vesszö",
        `Milyen szabály alapján van vessző? "${data.correct}"`, correct, wrong));
    } else {
      const correct = "a vesszővel elválasztott szavak között szünet van";
      const wrong = ["a vessző mindig kötelező", "csak végén lehet vessző", "az ejtés alapján van vesszö"];
      q.push(createMCQ("helyesiras", "helyesiras_vesszö",
        `Mit fejez ki a helyesen használt vessző?`, correct, wrong));
    }
  }

  return q;
}

export function generateSzoszerkezet(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const structures = [
    { structure: "szép ház", type: "melléknévi szerkezet", main: "ház", modifier: "szép" },
    { structure: "gyors futás", type: "melléknévi szerkezet", main: "futás", modifier: "gyors" },
    { structure: "az iskola udvar", type: "birtokos szerkezet", main: "udvar", modifier: "iskola" },
    { structure: "a könnyű feladat", type: "névelős szerkezet", main: "feladat", modifier: "könnyű" },
  ];

  for (let i = 0; i < 45; i++) {
    const data = pick(structures, rng);
    const type = i % 3;
    if (type === 0) {
      const correct = data.main;
      const wrong = [data.modifier, "kettő egyenrangú", "nincs fő szó"];
      q.push(createMCQ("mondattan", "szoszerkezet",
        `Mi a fő szó ebben a szószerkezetben? "${data.structure}"`, correct, wrong));
    } else if (type === 1) {
      const correct = data.type;
      const wrong = ["igei szerkezet", "segédszóval képzett", "mondat"];
      q.push(createMCQ("mondattan", "szoszerkezet",
        `Milyen típusú szószerkezet? "${data.structure}"`, correct, wrong));
    } else {
      const correct = "a fő szó + módosító szó kombinációja";
      const wrong = ["független szavak sora", "grammatikai alanyantartalom", "képzéselhető szó"];
      q.push(createMCQ("mondattan", "szoszerkezet",
        `Mi a szószerkezet jellegzetessége?`, correct, wrong));
    }
  }

  return q;
}

export function generateVisszahatiNevmas(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const reflexiveExamples = [
    { reflexive: "magam", person: "1. személy egyes", example: "Magam készítetttem az ebédet." },
    { reflexive: "magad", person: "2. személy egyes", example: "Magad csinálod a házitörvényt?" },
    { reflexive: "maga", person: "3. személy egyes", example: "Ő maga írta ezt az e-mailt." },
  ];

  for (let i = 0; i < 45; i++) {
    const data = pick(reflexiveExamples, rng);
    const type = i % 3;
    if (type === 0) {
      const correct = data.reflexive;
      const wrong = ["őt", "neki", "vele"];
      q.push(createMCQ("nevmas", "visszahato_nevmas",
        `Melyik a visszaható névmás? "${data.example}"`, correct, wrong));
    } else if (type === 1) {
      const correct = data.person;
      const wrong = reflexiveExamples.filter(r => r.person !== data.person).map(r => r.person);
      q.push(createMCQ("nevmas", "visszahato_nevmas",
        `Melyik személyé a "${data.reflexive}" névmás?`, correct, wrong));
    } else {
      const correct = "az alanyra vonatkozik";
      const wrong = ["bármely szóra vonatkozik", "csak az igére vonatkozik", "hangsúlytalanul jön elő"];
      q.push(createMCQ("nevmas", "visszahato_nevmas",
        `Mit jelent a visszaható névmás?`, correct, wrong));
    }
  }

  return q;
}

export function generateHatarozoCelOk(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const adverbials = [
    { adverbial: "azért, hogy...", type: "célhatározó", example: "Tanulok azért, hogy sikeres legyek." },
    { adverbial: "mert...", type: "okhatározó", example: "Tanulok, mert szeretlek tanulni." },
    { adverbial: "mivel...", type: "okhatározó", example: "Tanulok, mivel fontos a tudás." },
  ];

  for (let i = 0; i < 45; i++) {
    const data = pick(adverbials, rng);
    const type = i % 3;
    if (type === 0) {
      const correct = data.type;
      const wrong = adverbials.filter(a => a.type !== data.type).map(a => a.type);
      q.push(createMCQ("hatarozo", "hatarozo_cel_ok",
        `Milyen határozó? "${data.example}"`, correct, wrong));
    } else if (type === 1) {
      const correct = data.adverbial;
      const wrong = ["hogyan?", "mikor?", "hol?"];
      q.push(createMCQ("hatarozo", "hatarozo_cel_ok",
        `Melyik kötőszó jelzi a ${data.type}-ot?`, correct, wrong));
    } else {
      const correct = "a célhatározó a cselekvés célját, az okhatározó az okát fejezi ki";
      const wrong = ["mindkettő ugyanazt jelenti", "az okhatározó korábbi, a célhatározó későbbi", "a sorrend határozza meg a jelentést"];
      q.push(createMCQ("hatarozo", "hatarozo_cel_ok",
        `Mi a különbség a célhatározó és az okhatározó között?`, correct, wrong));
    }
  }

  return q;
}

export function generateSzoelemzesMelyi(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const words = [
    { word: "házak", root: "ház", suffix: "-ak", analysis: "ház (tő) + -ak (plurális jel)" },
    { word: "szépséges", root: "szép", suffixes: "-ség + -es", analysis: "szép (tő) + -ség (képző) + -es (képző)" },
    { word: "olvasottam", root: "olvas", suffixes: "-ott + -am", analysis: "olvas (tő) + -ott (múlt idő jel) + -am (személyjel)" },
  ];

  for (let i = 0; i < 45; i++) {
    const data = pick(words, rng);
    const type = i % 3;
    if (type === 0) {
      const correct = data.analysis;
      const wrong = ["szó alapalakja nem szétválasztható", "csak képzőből áll", "csak ragokból áll"];
      q.push(createMCQ("szoelem", "szoelemzés_melyi",
        `Melyik a helyes szóelemzés? "${data.word}"`, correct, wrong));
    } else if (type === 1) {
      const correct = data.root;
      const wrong = ["végződés", "képző", "rag"];
      q.push(createMCQ("szoelem", "szoelemzés_melyi",
        `Mi a töve a "${data.word}" szónak?`, correct, wrong));
    } else {
      const correct = "a szó jelentésére és szerkezetére";
      const wrong = ["csak a kiejtésére", "csak az írásra", "csak az eredetre"];
      q.push(createMCQ("szoelem", "szoelemzés_melyi",
        `Mit befolyásolnak a szóelemek?`, correct, wrong));
    }
  }

  return q;
}

// ─── TYPING GENERATORS (Open-ended questions) ─────────────────────────────────

type CurriculumTyping = {
  type: "typing";
  topic: string;
  subtopic: string;
  question: string;
  answer: string | string[];
  hint?: string;
};

function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[],
  hint?: string
): CurriculumTyping {
  return { type: "typing", topic, subtopic, question, answer, hint };
}

export function generateHangrendsz_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createTyping("hangtan", "hangrendsz", "Írd be a mély hangrendű magánhangzók közül egyet!", ["a", "á", "o", "ó", "u", "ú"], "pl. a, á, o, ó, u, ú"));
    } else if (type === 1) {
      q.push(createTyping("hangtan", "hangrendsz", "Melyik szóban van magasrendű magánhangzó? Írd be: szék vagy alma!", "szék", "A magas hangrendű szavak e/i/ö/ü hangokkal"));
    } else {
      q.push(createTyping("hangtan", "hangrendsz", "Mondj egy szót, amelyikben vegyes hangrendű magánhangzók vannak!", ["szalma", "szoknya", "ablak"], "Pl. szalma, szoknya, ablak"));
    }
  }
  return q;
}

export function generateHasonulas_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("hangtan", "hasonulas", "Írd be az asszimiláció jelentését!", ["szomszédos hangok egymásra hatása"], "Szomszédos hangok hatása egymásra"));
    } else {
      q.push(createTyping("hangtan", "hasonulas", "Mondj egy szót hangtani hasonulással!", ["képző", "köznyelvű", "szívárványszín"], "Pl. képző, köznyelvű"));
    }
  }
  return q;
}

export function generateToToldalek_typing(seed?: number): CurriculumTyping[] {
  const pool: CurriculumTyping[] = [
    createTyping("szoelem", "to_toldalek", "Mi a 'házak' szó töve?", ["ház"], "A szó alapalakja (tőalak)"),
    createTyping("szoelem", "to_toldalek", "Mi az 'olvasott' szó toldaléka?", ["-ott"], "Az igét módosító végződés"),
    createTyping("szoelem", "to_toldalek", "Mi a 'kertek' szó töve?", ["kert"], "A szó alapalakja toldaék nélkül"),
    createTyping("szoelem", "to_toldalek", "Mi a 'futunk' szó toldaléka?", ["-unk"], "Az igei személyrag"),
    createTyping("szoelem", "to_toldalek", "Mi a 'látott' szó töve?", ["lát"], "A szó alapalakja (tőalak)"),
    createTyping("szoelem", "to_toldalek", "Mi a 'gyerekek' szó toldaléka?", ["-ek"], "A többes szám jele"),
    createTyping("szoelem", "to_toldalek", "Mi a 'barátom' szó toldaléka?", ["-om"], "A személyjel"),
    createTyping("szoelem", "to_toldalek", "Mi az 'asztalok' szó töve?", ["asztal"], "A szó alapalakja toldalék nélkül"),
  ];
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  return shuffle(pool, rng);
}

export function generateKepzoJelRag_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("szoelem", "kepzo_jel_rag", "Az '-es' végződés képző, jel vagy rag?", ["képző"], "A '-es' új szófajt hoz létre"));
    } else {
      q.push(createTyping("szoelem", "kepzo_jel_rag", "Mi a különbség képző és jel között?", ["képző szófajt hoz létre, jel számot fejez ki"], "Képző: szófaj; Jel: szám"));
    }
  }
  return q;
}

export function generateIgenev_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createTyping("szofaj", "igenev", "Mi az 'futó' igenév típusa?", ["melléknévi"], "A 'futó' melléknévi igenév"));
    } else if (type === 1) {
      q.push(createTyping("szofaj", "igenev", "Írd be a főnévi igenevet: fut, futva, futó közül!", ["fut", "futni"], "A főnévi igenév -ni végződésű"));
    } else {
      q.push(createTyping("szofaj", "igenev", "Mit fejez ki a melléknévi igenév?", ["cselekvés során keletkezett tulajdonságot"], "Pl. futó gyerek = aki fut"));
    }
  }
  return q;
}

export function generateIgeIgeidok_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createTyping("ige", "ige_igeidok", "Írd be az 'olvas' ige jelen idejű, 1. személyű alakját!", ["olvasok"], "jelen idő + 1. személyű végződés"));
    } else if (type === 1) {
      q.push(createTyping("ige", "ige_igeidok", "Mit fejez ki az igeidő?", ["a cselekvés időbeli helyzetét"], "Jelen, múlt, jövő"));
    } else {
      q.push(createTyping("ige", "ige_igeidok", "Mondj egy szót múlt időben: futni alapján!", ["futottam", "futottak"], "Pl. futottam (1. személy)"));
    }
  }
  return q;
}

export function generateIgeIgemódok_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("ige", "ige_igemódok", "Mit fejez ki az igemód?", ["a cselekvés valósságtartalmát"], "Kijelentő, felszólító, feltételes"));
    } else {
      q.push(createTyping("ige", "ige_igemódok", "Mondj egy szót felszólító módban: futni alapján!", ["fuss"], "Felszólító parancs forma"));
    }
  }
  return q;
}

export function generateSzoszerkezet_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("mondattan", "szoszerkezet", "Mi a fő szó a 'szép ház' szószerkezetben?", ["ház"], "A főnév a szószerkezet központja"));
    } else {
      q.push(createTyping("mondattan", "szoszerkezet", "Mondj egy szószerkezetet: melléknevek + főnév!", ["szép ház", "nagy ablak", "sötét erdő"], "Pl. szép ház, nagy ablak"));
    }
  }
  return q;
}

export function generateVisszahatiNevmas_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("nevmas", "visszahato_nevmas", "Mit jelent a visszaható névmás?", ["az alanyra vonatkozik"], "Az alanyra vonatkozik (maga)"));
    } else {
      q.push(createTyping("nevmas", "visszahato_nevmas", "Írd be az 1. személy egyes szám visszaható névmást!", ["magam"], "Magam = én magam"));
    }
  }
  return q;
}

export function generateHatarozoCelOk_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("hatarozo", "hatarozo_cel_ok", "Mit fejez ki a célhatározó?", ["a cselekvés célját"], "Az azért, hogy szerkezet"));
    } else {
      q.push(createTyping("hatarozo", "hatarozo_cel_ok", "Mondj egy mondatot okhatározóval!", ["tanulok, mert szeretlek tanulni"], "Pl. tanulok, mert/mivel..."));
    }
  }
  return q;
}

// ─── EXPORTING ALL GENERATORS ───────────────────────────────────────────────

export const G5_Generators_Hungarian = {
  // MCQ generators
  hangrendsz: generateHangrendszer,
  hangrendsz_typing: generateHangrendsz_typing,
  hasonulas: generateHasonulas,
  hasonulas_typing: generateHasonulas_typing,
  to_toldalek: generateToToldalek,
  to_toldalek_typing: generateToToldalek_typing,
  kepzo_jel_rag: generateKepzoJelRag,
  kepzo_jel_rag_typing: generateKepzoJelRag_typing,
  igenev: generateIgenev,
  igenev_typing: generateIgenev_typing,
  hatarozoSzo: generateHatarozoSzo,
  alany_allitmany: generateAlanyAllitmany,
  targy_hatarozo: generateTargyHatarozo,
  szovegtipusok: generateSzovegtipusok,
  kohezio: generateKohezio,
  koznyelv_irodalmi: generateKoznyelv,
  osszetetel_iras: generateOsszetételIras,
  versformak: generateVersformak,
  stiluseszk: generateStiluseszk,
  ige_igeidok: generateIgeIgeidok,
  ige_igeidok_typing: generateIgeIgeidok_typing,
  ige_igemódok: generateIgeIgemódok,
  ige_igemódok_typing: generateIgeIgemódok_typing,
  igeneves_szerkezetek: generateIgeneves,
  mondatfajtak: generateMondatfajtak,
  igekoto: generateIgekoto,
  helyesiras_vesszö: generateHelyesIrasVesszo,
  szoszerkezet: generateSzoszerkezet,
  szoszerkezet_typing: generateSzoszerkezet_typing,
  visszahato_nevmas: generateVisszahatiNevmas,
  visszahato_nevmas_typing: generateVisszahatiNevmas_typing,
  hatarozo_cel_ok: generateHatarozoCelOk,
  hatarozo_cel_ok_typing: generateHatarozoCelOk_typing,
  szoelemzés_melyi: generateSzoelemzesMelyi,
};
