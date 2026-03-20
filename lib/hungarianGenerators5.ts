// ─── HUNGARIAN GRADE 5 GENERATORS ───────────────────────────────────────────
// Procedural MCQ question generators for Hungarian Grade 5 (5. osztály) curriculum
// Generates 45 questions per subtopic using seeded PRNG for reproducibility.
//
// 10 subtopics: Hangtani elemzés, szóelemzés, szófajok, mondatrészek, szövegtan, stílus, helyesírás, irodalom
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
  { word: "házak", root: "ház", suffix: "-ak", type: "plurális jel" },
  { word: "szépek", root: "szép", suffix: "-ek", type: "plurális jel" },
  { word: "könyvei", root: "könyv", suffix: "-e, -i", type: "birtokos végződés" },
  { word: "futunk", root: "fut", suffix: "-unk", type: "igei végződés" },
  { word: "olvasott", root: "olvas", suffix: "-ott", type: "igei végződés" },
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

  for (let i = 0; i < 45; i++) {
    const data = pick(ROOT_SUFFIXES, rng);
    const type = i % 3;
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

// ─── EXPORTING ALL GENERATORS ───────────────────────────────────────────────

export const G5_Generators_Hungarian = {
  hangrendsz: generateHangrendszer,
  hasonulas: generateHasonulas,
  to_toldalek: generateToToldalek,
  kepzo_jel_rag: generateKepzoJelRag,
  igenev: generateIgenev,
  hatarozoSzo: generateHatarozoSzo,
  alany_allitmany: generateAlanyAllitmany,
  targy_hatarozo: generateTargyHatarozo,
  szovegtipusok: generateSzovegtipusok,
  kohezio: generateKohezio,
  koznyelv_irodalmi: generateKoznyelv,
  osszetetel_iras: generateOsszetételIras,
  versformak: generateVersformak,
  stiluseszk: generateStiluseszk,
};
