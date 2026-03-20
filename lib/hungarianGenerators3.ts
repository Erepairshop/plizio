// lib/hungarianGenerators3.ts
// Grade 3 (3. osztály) Hungarian generators
// 18 subtopics covering verb tenses, noun declension, compound words, text comprehension, idioms, spelling, composition, sentence analysis
// All in Hungarian, appropriate for 8-9 year olds

import type { CurriculumMCQ } from "./curriculumTypes";

type MagyarMCQ = CurriculumMCQ & { type: "mcq" };

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

function mulberry32(seed: number) {
  return function() {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrongOptions: string[]): CurriculumMCQ {
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

// New data structures for additional generators
const VERBS_IMPERATIVE = [
  { inf: "írni", te_sg: "írj", o_sg: "írjon", mi: "írjunk", ti: "írjatok", ok: "írjanak" },
  { inf: "futni", te_sg: "fuss", o_sg: "fusson", mi: "fussunk", ti: "fussatok", ok: "fussanak" },
  { inf: "olvasni", te_sg: "olvass", o_sg: "olvasson", mi: "olvassunk", ti: "olvassatok", ok: "olvasnak" },
  { inf: "játszani", te_sg: "játssz", o_sg: "játsszon", mi: "játsszunk", ti: "játszatok", ok: "játszanak" },
  { inf: "enni", te_sg: "egyél", o_sg: "egyen", mi: "együnk", ti: "egyetek", ok: "egyenek" },
  { inf: "inni", te_sg: "igyon", o_sg: "igyon", mi: "igyunk", ti: "igyatok", ok: "igyanak" },
];

const VERBS_CONDITIONAL = [
  { inf: "írni", jelen: "írnék", mult: "írnám", vagyok: "volna" },
  { inf: "futni", jelen: "futnék", mult: "futnám", vagyok: "volna" },
  { inf: "olvasni", jelen: "olvasnék", mult: "olvasnám", vagyok: "volna" },
  { inf: "játszani", jelen: "játszanék", mult: "játszanám", vagyok: "volna" },
  { inf: "enni", jelen: "ennék", mult: "ennék", vagyok: "volna" },
  { inf: "inni", jelen: "innék", mult: "innám", vagyok: "volna" },
];

const NOUNS_POSSESSIVE = [
  { nom: "ház", sg1: "házam", sg2: "házad", sg3: "háza", pl1: "házunk", pl2: "házatok", pl3: "házuk" },
  { nom: "könyv", sg1: "könyvem", sg2: "könyved", sg3: "könyve", pl1: "könyvünk", pl2: "könyvetek", pl3: "könyvük" },
  { nom: "macska", sg1: "macskám", sg2: "macskád", sg3: "macskája", pl1: "macskánk", pl2: "macskátok", pl3: "macskájuk" },
  { nom: "ceruza", sg1: "ceruzám", sg2: "ceruzád", sg3: "ceruzája", pl1: "ceruzánk", pl2: "ceruzátok", pl3: "ceruzájuk" },
  { nom: "játék", sg1: "játékom", sg2: "játékod", sg3: "játéka", pl1: "játékunk", pl2: "játékotok", pl3: "játékuk" },
];

const ADVERBIAL_CASE_ADVANCED = [
  { nom: "ház", comitative: "házzal", ablative: "házból", delative: "házról" },
  { nom: "iskolа", comitative: "iskolával", ablative: "iskolából", delative: "iskoláról" },
  { nom: "szék", comitative: "székkel", ablative: "székből", delative: "székről" },
  { nom: "asztal", comitative: "asztallal", ablative: "asztalból", delative: "asztalról" },
  { nom: "toll", comitative: "tollal", ablative: "tollból", delative: "tollról" },
];

const EMOTIONS_VOCABULARY = [
  { emotion: "boldog", opposite: "szomorú", example: "A gyerek boldog volt a csokiért." },
  { emotion: "szomorú", opposite: "boldog", example: "Szomorú volt, mert elveszett a játéka." },
  { emotion: "mérges", opposite: "vidám", example: "Mérges lett, mert nem lehetett játszani." },
  { emotion: "félénk", opposite: "bátor", example: "Félénk gyerek nem szeret nagyobbakkal játszani." },
  { emotion: "szorongó", opposite: "nyugodt", example: "Szorongó volt az első nap az iskolában." },
  { emotion: "vidám", opposite: "mérges", example: "Vidám és nevetsé lett az egész nap." },
  { emotion: "kíváncsi", opposite: "közömbös", example: "Kíváncsiak voltunk az új játékra." },
];

const TIME_EXPRESSIONS = [
  { word: "tegnap", meaning: "az előző napon", example: "Tegnap futottunk az iskolában." },
  { word: "ma", meaning: "az aktuális napon", example: "Ma szép az idő." },
  { word: "holnap", meaning: "az következő napon", example: "Holnap lesz az iskola." },
  { word: "reggel", meaning: "napkelte és déli 12 között", example: "Reggel korai kelés." },
  { word: "éjjel", meaning: "sötét, alváshoz idő", example: "Éjjel csillagok fénylenek." },
  { word: "délután", meaning: "12-tól alkonyig", example: "Délután játszottunk ki." },
  { word: "este", meaning: "az nap vége előtt", example: "Este vacsora után játszunk." },
];

const IKES_VERBS = [
  { inf: "eszik", jelen: "esz", múlt: "evett" },
  { inf: "iszik", jelen: "isz", múlt: "ivott" },
  { inf: "alszik", jelen: "alsz", múlt: "aludt" },
  { inf: "játszik", jelen: "játsz", múlt: "játszott" },
  { inf: "fekszik", jelen: "lesz", múlt: "feküdt" },
  { inf: "fordul", jelen: "fordul", múlt: "fordult" },
];

const CONSONANT_HARMONY_RULES = [
  { word: "szép", rule: "mássalhangzó-törvény nem vonatkozik" },
  { word: "szépség", rule: "ség rag megváltasztja a zöngét" },
  { word: "egészség", rule: "z → s váltakozás" },
  { word: "boldog", rule: "boldog → bolondság" },
  { word: "könnyű", rule: "könnyű → könnyűség" },
];

const COMPOUND_SENTENCE_BASICS = [
  { connector: "és", example: "Péter olvas és Mari ír.", meaning: "összeadás" },
  { connector: "de", example: "Szép az idő, de hideg van.", meaning: "ellentét" },
  { connector: "mert", example: "Maradtunk otthon, mert esett az eső.", meaning: "ok-okozati" },
  { connector: "hogy", example: "Azt akarom, hogy játsszunk.", meaning: "mellérendelés" },
  { connector: "vagy", example: "Almát vagy körtet akarsz?", meaning: "választás" },
];

const DIALOGUE_VERBS = [
  { verb: "mondta", example: "\"Ma játszunk\" mondta a tanár." },
  { verb: "kérdezte", example: "\"Kinek van ceruzája?\" kérdezte Péter." },
  { verb: "felkiáltott", example: "\"Futjunk!\" felkiáltott Mari." },
  { verb: "suttogta", example: "\"Nézd meg!\" suttogta Pál." },
  { verb: "visított", example: "\"Nem!\" visított a gyerek." },
  { verb: "mosolygott", example: "\"Köszönöm\" mosolygott az öregasszony." },
];

const VERBS_TENSE = [
  { inf: "írni", jelen: "ír", múlt: "írt", jövő: "fog írni" },
  { inf: "futni", jelen: "fut", múlt: "futott", jövő: "fog futni" },
  { inf: "olvasni", jelen: "olvas", múlt: "olvasott", jövő: "fog olvasni" },
  { inf: "játszani", jelen: "játszik", múlt: "játszott", jövő: "fog játszani" },
  { inf: "enni", jelen: "eszik", múlt: "evett", jövő: "fog enni" },
  { inf: "inni", jelen: "iszik", múlt: "ivott", jövő: "fog inni" },
  { inf: "szállni", jelen: "száll", múlt: "szállt", jövő: "fog szállni" },
  { inf: "szállni", jelen: "száll", múlt: "szállt", jövő: "fog szállni" },
  { inf: "kérdezni", jelen: "kérdez", múlt: "kérdezett", jövő: "fog kérdezni" },
  { inf: "felelni", jelen: "felel", múlt: "felelt", jövő: "fog felelni" },
];

const NOUNS_DECLINE = [
  { nom: "kutya", acc: "kutyát", dat: "kutyának", loc: "kutyánál", ins: "kutyával" },
  { nom: "macska", acc: "macskát", dat: "macskának", loc: "macskánál", ins: "macskával" },
  { nom: "ház", acc: "házat", dat: "háznak", loc: "házban", ins: "házzal" },
  { nom: "szék", acc: "széket", dat: "széknek", loc: "székben", ins: "székkel" },
  { nom: "asztal", acc: "asztalt", dat: "asztalnak", loc: "asztalon", ins: "asztallal" },
  { nom: "könyv", acc: "könyvet", dat: "könyvnek", loc: "könyvben", ins: "könyvvel" },
  { nom: "lány", acc: "lányt", dat: "lánynak", loc: "lánynál", ins: "lánnyal" },
  { nom: "fiú", acc: "fiút", dat: "fiúnak", loc: "fiúnál", ins: "fiúval" },
];

const ADJECTIVES_DEGREE = [
  { base: "szép", comp: "szebb", sup: "legszebb" },
  { base: "nagy", comp: "nagyobb", sup: "legnagyobb" },
  { base: "kicsi", comp: "kisebb", sup: "legkisebb" },
  { base: "gyors", comp: "gyorsabb", sup: "leggyorsabb" },
  { base: "lassú", comp: "lassabb", sup: "leglassabb" },
  { base: "magas", comp: "magasabb", sup: "legmagasabb" },
  { base: "hideg", comp: "hidegebb", sup: "leghidegebb" },
  { base: "meleg", comp: "melegebb", sup: "legmelegebb" },
];

const COMPOUND_WORDS = [
  { comp: "osztályterem", parts: ["osztály", "terem"] },
  { comp: "szövegértés", parts: ["szöveg", "értés"] },
  { comp: "mondatalkotás", parts: ["mondat", "alkotás"] },
  { comp: "önálló", parts: ["ön", "álló"] },
  { comp: "jól", parts: ["jó", "l"] },
  { comp: "gondolkodás", parts: ["gondol", "kodás"] },
  { comp: "közös", parts: ["közös"] },
  { comp: "nappal", parts: ["nap", "pal"] },
];

const WORD_FAMILIES = [
  { root: "fut", words: ["futás", "futó", "futball", "futott"] },
  { root: "ír", words: ["írás", "író", "írott", "írt"] },
  { root: "olvas", words: ["olvasás", "olvasó", "olvasott", "olvasott"] },
  { root: "tanul", words: ["tanulás", "tanuló", "tanult", "tanult"] },
];

const IDIOMS = [
  { idiom: "éhes mint a farkas", meaning: "nagyon éhes" },
  { idiom: "tanácstalan", meaning: "nem tudja mit csináljon" },
  { idiom: "kékre festette", meaning: "megtévesztette" },
  { idiom: "összenőtt vele", meaning: "nagyon szereti" },
  { idiom: "fejre áll", meaning: "nagyon boldog" },
  { idiom: "szív alatt van", meaning: "zavaros a helyzet" },
];

const PROVERBS = [
  { proverb: "Ki korán kel, aranyat lel", meaning: "a szorgalom hasznos" },
  { proverb: "Sok kicsi sokra megy", meaning: "a kicsi dolgok összeadódnak" },
  { proverb: "Nem minden arany, ami fénylik", meaning: "nem minden olyan jó, ahogy néz ki" },
  { proverb: "Megvert kutya nyalogatja az ura kezét", meaning: "a gyenge beletörődik a sorsába" },
];

const SPELLING_TOGETHER = [
  { word: "mindenhol", rule: "egybe" },
  { word: "végig", rule: "egybe" },
  { word: "össze", rule: "egybe" },
  { word: "visszaír", rule: "egybe" },
];

const SPELLING_APART = [
  { word: "más és más", rule: "külön" },
  { word: "olyan és olyan", rule: "külön" },
  { word: "így és úgy", rule: "külön" },
];

const COMPOSITION_NARRATIVE = [
  { element: "kezdet", example: "Egyszer volt, hol nem volt..." },
  { element: "cselekmény", example: "A hős kalandokat élt meg" },
  { element: "fordulópont", example: "De akkor történt valami váratlan" },
  { element: "befejezés", example: "Így véget ért a történet" },
];

const COMPOSITION_DESCRIPTION = [
  { element: "külső", example: "Kék szemei voltak" },
  { element: "személyiség", example: "Okos és kedves volt" },
  { element: "viselkedés", example: "Mindig segítőkész" },
  { element: "egyéb", example: "Szerette az előadásokat" },
];

const TEXT_COMPREH = [
  { question: "Mi volt a fő esemény?", type: "lényeg" },
  { question: "Mikor történt?", type: "idő" },
  { question: "Hol történt?", type: "hely" },
  { question: "Ki volt a főszereplő?", type: "személy" },
  { question: "Miért történt ez?", type: "ok" },
];

const OBJECT_ROLE = [
  { sentence: "Péter egy könyvet olvas.", target: "egy könyvet", role: "tárgy" },
  { sentence: "A lány az asztalt tolta.", target: "az asztalt", role: "tárgy" },
  { sentence: "Marinak egy ceruzája van.", target: "egy ceruzát", role: "tárgy" },
];

const ADVERBIAL_ROLE = [
  { sentence: "A gyerek az iskolában játszik.", target: "az iskolában", role: "határozó (hely)" },
  { sentence: "Reggel elindultunk.", target: "Reggel", role: "határozó (idő)" },
  { sentence: "Gyorsan futottak.", target: "Gyorsan", role: "határozó (mód)" },
];

const ADJECTIVE_ROLE = [
  { sentence: "A piros virág szép.", target: "piros", role: "jelző" },
  { sentence: "Az okos fiú tanul.", target: "okos", role: "jelző" },
  { sentence: "A nagy ház áll az úton.", target: "nagy", role: "jelző" },
];

// ─── GENERATOR FUNCTIONS ───────────────────────────────────────────────────

export function generateTensePresent(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    const verb = pick(VERBS_TENSE, rng);

    if (type === 0) {
      // Melyik a jelen idő?
      const correct = verb.jelen;
      const wrongs = shuffle(VERBS_TENSE, rng).slice(0, 3).map(v => v.múlt);
      q.push(createMCQ("igeidok", "jelen", `"${verb.inf}" jelen ideje:`, correct, wrongs));
    } else if (type === 1) {
      // Melyik mondatban van jelen idő?
      const correct = `Az ember ${verb.jelen} naponta.`;
      const wrongs = [
        `Az ember ${verb.múlt} tegnap.`,
        `Az ember ${verb.jövő} majd.`,
        "A macska nyávog naponta.",
      ];
      q.push(createMCQ("igeidok", "jelen", "Melyik mondatban van jelen idő?", correct, wrongs));
    } else {
      // Egészítsd ki!
      const correct = verb.jelen;
      const wrongs = shuffle(VERBS_TENSE, rng).slice(0, 3).map(v => v.múlt);
      q.push(createMCQ("igeidok", "jelen", `A gyerek... a játékkal. (${verb.inf})`, correct, wrongs));
    }
  }

  return q;
}

export function generateTensePast(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    const verb = pick(VERBS_TENSE, rng);

    if (type === 0) {
      const correct = verb.múlt;
      const wrongs = shuffle(VERBS_TENSE, rng).slice(0, 3).map(v => v.jelen);
      q.push(createMCQ("igeidok", "mult", `"${verb.inf}" múlt ideje:`, correct, wrongs));
    } else if (type === 1) {
      const correct = `Tegnap ${verb.múlt} órákon át.`;
      const wrongs = [
        `Tegnap ${verb.jelen} órákon át.`,
        `Holnap ${verb.jövő} órákon át.`,
        "Ma olvasok egy könyvet.",
      ];
      q.push(createMCQ("igeidok", "mult", "Melyik mondatban van múlt idő?", correct, wrongs));
    } else {
      const correct = verb.múlt;
      const wrongs = shuffle(VERBS_TENSE, rng).slice(0, 3).map(v => v.jelen);
      q.push(createMCQ("igeidok", "mult", `Az előző nap... a házat. (${verb.inf})`, correct, wrongs));
    }
  }

  return q;
}

export function generateTenseFuture(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    const verb = pick(VERBS_TENSE, rng);

    if (type === 0) {
      const correct = verb.jövő;
      const wrongs = [verb.jelen, verb.múlt, "fogunk enni"];
      q.push(createMCQ("igeidok", "jovo", `"${verb.inf}" jövő ideje:`, correct, wrongs));
    } else if (type === 1) {
      const correct = `Holnap ${verb.jövő}.`;
      const wrongs = [
        `Ma ${verb.jelen}.`,
        `Tegnap ${verb.múlt}.`,
        "Holnap olvasni fogunk.",
      ];
      q.push(createMCQ("igeidok", "jovo", "Melyik mondatban van jövő idő?", correct, wrongs));
    } else {
      const correct = verb.jövő;
      const wrongs = [verb.jelen, verb.múlt, "fog futni"];
      q.push(createMCQ("igeidok", "jovo", `A gyerek... majd otthon. (${verb.inf})`, correct, wrongs));
    }
  }

  return q;
}

export function generateNounDeclension(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    const noun = pick(NOUNS_DECLINE, rng);

    if (type === 0) {
      const correct = noun.acc;
      const wrongs = shuffle(NOUNS_DECLINE, rng).slice(0, 3).map(n => n.dat);
      q.push(createMCQ("nevszok", "fonevragozas", `"${noun.nom}" tárgyrag (tárgyeset):`, correct, wrongs));
    } else if (type === 1) {
      const correct = noun.loc;
      const wrongs = shuffle(NOUNS_DECLINE, rng).slice(0, 3).map(n => n.ins);
      q.push(createMCQ("nevszok", "fonevragozas", `"${noun.nom}" helyrag:`, correct, wrongs));
    } else {
      const correct = noun.ins;
      const wrongs = shuffle(NOUNS_DECLINE, rng).slice(0, 3).map(n => n.dat);
      q.push(createMCQ("nevszok", "fonevragozas", `"${noun.nom}" eszközrag:`, correct, wrongs));
    }
  }

  return q;
}

export function generateAdjectiveDegree(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    const adj = pick(ADJECTIVES_DEGREE, rng);

    if (type === 0) {
      const correct = adj.comp;
      const wrongs = shuffle(ADJECTIVES_DEGREE, rng).slice(0, 3).map(a => a.sup);
      q.push(createMCQ("nevszok", "melleknevfokozas", `"${adj.base}" középfoka:`, correct, wrongs));
    } else if (type === 1) {
      const correct = adj.sup;
      const wrongs = shuffle(ADJECTIVES_DEGREE, rng).slice(0, 3).map(a => a.comp);
      q.push(createMCQ("nevszok", "melleknevfokozas", `"${adj.base}" felsőfoka:`, correct, wrongs));
    } else {
      const correct = adj.base;
      const wrongs = shuffle(ADJECTIVES_DEGREE, rng).slice(0, 3).map(a => a.comp);
      q.push(createMCQ("nevszok", "melleknevfokozas", `Melyik az alapfok? "${adj.comp}"-ből:`, correct, wrongs));
    }
  }

  return q;
}

export function generateCompoundWordsAdvanced(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const comp = pick(COMPOUND_WORDS, rng);
    const type = i % 3;

    if (type === 0) {
      const correct = comp.comp;
      const wrongs = shuffle(COMPOUND_WORDS, rng).slice(0, 3).map(c => c.comp);
      q.push(createMCQ("szo", "osszetett_haladó", `Melyik az összetett szó? "${comp.parts.join('+')}"`, correct, wrongs));
    } else if (type === 1) {
      const correct = "összetett szó";
      const wrongs = ["egyszerű szó", "ragozott szó", "előtaggal ellátott"];
      q.push(createMCQ("szo", "osszetett_haladó", `"${comp.comp}" milyen szó?`, correct, wrongs));
    } else {
      const correct = comp.parts[0];
      const wrongs = shuffle(COMPOUND_WORDS, rng).slice(0, 3).map(c => c.comp);
      q.push(createMCQ("szo", "osszetett_haladó", `"${comp.comp}" első része:`, correct, wrongs));
    }
  }

  return q;
}

export function generateWordFamilies(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const fam = pick(WORD_FAMILIES, rng);
    const type = i % 3;

    if (type === 0) {
      const correct = pick(fam.words, rng);
      const wrongs = shuffle(WORD_FAMILIES, rng).slice(0, 3).flatMap(f => f.words).slice(0, 3);
      q.push(createMCQ("szo", "szocsaladok", `"${fam.root}" szócsaládjába tartozik:`, correct, wrongs));
    } else if (type === 1) {
      const correct = "szócsalád";
      const wrongs = ["szótár", "összetett szó", "homonímák"];
      q.push(createMCQ("szo", "szocsaladok", `Az olyan szavak, amelyek ugyanabból a gyökérből jönnek:`, correct, wrongs));
    } else {
      const correct = fam.root;
      const wrongs = shuffle(WORD_FAMILIES, rng).slice(0, 3).map(f => f.root);
      q.push(createMCQ("szo", "szocsaladok", `"${pick(fam.words, rng)}" szócsaládjának gyöke:`, correct, wrongs));
    }
  }

  return q;
}

export function generateTextComprehension(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    const text = "A fiú a parkban játszott. Egy labdát dobott magasra. Összeomlottak a fák között. A fiú nevetett és ismét dobott.";

    if (type === 0) {
      q.push(createMCQ("szoveg", "megertés", `"Hol játszott a fiú?" Válasz a szövegből:`,
        "a parkban", ["az iskolában", "az utcán", "az udvaron"]));
    } else if (type === 1) {
      q.push(createMCQ("szoveg", "megertés", `"Mit dobott a fiú?" Válasz a szövegből:`,
        "labdát", ["könyvet", "kővet", "fát"]));
    } else {
      q.push(createMCQ("szoveg", "megertés", `"Milyen volt a fiú hangulata?" A szöveg alapján:`,
        "boldog", ["szomorú", "szomorú", "szomorú"]));
    }
  }

  return q;
}

export function generateTextSummary(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;

    if (type === 0) {
      q.push(createMCQ("szoveg", "osszefoglalas", "A szöveg lényege egy mondatban:",
        "a fiú játszott",
        ["a fiú fut", "a fiú alszik", "a fiú eszik"]));
    } else if (type === 1) {
      q.push(createMCQ("szoveg", "osszefoglalas", "Melyik a szöveg főmondanivalója?",
        "A fiú jól szórakozott",
        ["A park szép", "A labda piros", "Az idő meleg volt"]));
    } else {
      q.push(createMCQ("szoveg", "osszefoglalas", "Mit tudunk meg a szövegből?",
        "A fiú egyedül játszott",
        ["Sok gyerek volt ott", "Szivárvány volt az égen", "Eső volt"]));
    }
  }

  return q;
}

export function generateIdioms(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const idiom = pick(IDIOMS, rng);
    const type = i % 3;

    if (type === 0) {
      q.push(createMCQ("szokincs", "szolasok", `"${idiom.idiom}" jelentése:`,
        idiom.meaning,
        ["valami mást jelent", "nem tudjuk", "más szólás"]));
    } else if (type === 1) {
      const correct = idiom.idiom;
      const wrongs = shuffle(IDIOMS, rng).slice(0, 3).map(i => i.idiom);
      q.push(createMCQ("szokincs", "szolasok", `Melyik szólás jelenti ezt: "${idiom.meaning}"?`, correct, wrongs));
    } else {
      q.push(createMCQ("szokincs", "szolasok", `A szólások olyan kifejezések, amelyek:`,
        "переносati értelemben használódnak",
        ["szó szerintiek", "mindig igaz", "archaikusak"]));
    }
  }

  return q;
}

export function generateProverbs(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const prov = pick(PROVERBS, rng);
    const type = i % 3;

    if (type === 0) {
      q.push(createMCQ("szokincs", "kozmondasok", `"${prov.proverb}" jelentése:`,
        prov.meaning,
        ["más", "ismeretlen", "nevetséges"]));
    } else if (type === 1) {
      const correct = prov.proverb;
      const wrongs = shuffle(PROVERBS, rng).slice(0, 3).map(p => p.proverb);
      q.push(createMCQ("szokincs", "kozmondasok", `Melyik a közmondás?`, correct, wrongs));
    } else {
      q.push(createMCQ("szokincs", "kozmondasok", "A közmondás tanítja:",
        "az élet bölcsességét",
        ["a történelmet", "a географиát", "a matekot"]));
    }
  }

  return q;
}

export function generateSpellingTogether(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const word = pick(SPELLING_TOGETHER, rng);
    const type = i % 3;

    if (type === 0) {
      q.push(createMCQ("helyesiras", "egybeíras", `"${word.word}" helyesen:`,
        word.word,
        [`${word.word.split('').join('-')}`, "szétbontva", "rosszul"]));
    } else if (type === 1) {
      q.push(createMCQ("helyesiras", "egybeíras", `Melyik szó írható össze?`,
        "mindenhol",
        ["már nem", "régen volt", "talán"]));
    } else {
      q.push(createMCQ("helyesiras", "egybeíras", "Az alábbiak közül melyik írható össze?",
        "végig",
        ["más mint", "talán", "vagy"]));
    }
  }

  return q;
}

export function generateSpellingApart(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const word = pick(SPELLING_APART, rng);
    const type = i % 3;

    if (type === 0) {
      q.push(createMCQ("helyesiras", "kuloniras", `"${word.word}" helyesen:`,
        word.word,
        [`${word.word.replace(/ és /g, '+')}`, "össze", "rosszul"]));
    } else if (type === 1) {
      q.push(createMCQ("helyesiras", "kuloniras", "Melyik kifejezés írható külön?",
        "más és más",
        ["össze-vissza", "ugyan-olyan", "egy-más"]));
    } else {
      q.push(createMCQ("helyesiras", "kuloniras", "A kötőszóval összekapcsolt szavak:",
        "külön írhatók",
        ["mindig összefüggnek", "kitalálható", "nem írható"]));
    }
  }

  return q;
}

export function generateCompositionNarrative(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;

    if (type === 0) {
      q.push(createMCQ("fogalmazas", "elbeszeles", "Az elbeszélés első része a:",
        "kezdet",
        ["fejlődés", "csúcspont", "befejezés"]));
    } else if (type === 1) {
      q.push(createMCQ("fogalmazas", "elbeszeles", "Az elbeszélés fejlesztő része a:",
        "cselekmény",
        ["előbeszéd", "utószó", "alaptörténet"]));
    } else {
      q.push(createMCQ("fogalmazas", "elbeszeles", "Melyik része a történetnek a \"befejezés\"?",
        "a végeredmény",
        ["az első mondat", "a közepső rész", "az előszó"]));
    }
  }

  return q;
}

export function generateCompositionDescription(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;

    if (type === 0) {
      q.push(createMCQ("fogalmazas", "leiras", "A leírásban először szoktuk számba venni:",
        "a külső megjelenést",
        ["a történetét", "a jövőjét", "az ígéretét"]));
    } else if (type === 1) {
      q.push(createMCQ("fogalmazas", "leiras", "A személyleírás elemei:",
        "külső és személyiség",
        ["csak magasság", "csak szín", "csak kor"]));
    } else {
      q.push(createMCQ("fogalmazas", "leiras", "Mit nem szoktunk leírni egy személyről?",
        "a jövőbeni terveit",
        ["a szeme színét", "a ruháját", "a hajának hosszát"]));
    }
  }

  return q;
}

export function generateObjectRole(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const obj = pick(OBJECT_ROLE, rng);
    const type = i % 3;

    if (type === 0) {
      q.push(createMCQ("mondat", "targy", `A mondatban: "${obj.sentence}" Mi a tárgy?`,
        obj.target,
        ["a melléknév", "az ige", "a határozó"]));
    } else if (type === 1) {
      q.push(createMCQ("mondat", "targy", "A tárgy a mondatban általában:",
        "tárgyeseti formában van",
        ["nominatívuszban", "genitivuszban", "ablatívuszban"]));
    } else {
      q.push(createMCQ("mondat", "targy", "A tárgy azt jelenti, amit az ige:",
        "megnevez vagy szenved el",
        ["leír", "jelent", "mutat"]));
    }
  }

  return q;
}

export function generateAdverbialRole(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const adv = pick(ADVERBIAL_ROLE, rng);
    const type = i % 3;

    if (type === 0) {
      q.push(createMCQ("mondat", "hatarozo", `"${adv.sentence}" Mi a határozó?`,
        adv.target,
        ["az ige", "a főnév", "az alanyi"]));
    } else if (type === 1) {
      q.push(createMCQ("mondat", "hatarozo", "A határozó fejti ki az ige:",
        "körülményeit",
        ["számát", "nemét", "ragozását"]));
    } else {
      q.push(createMCQ("mondat", "hatarozo", "A határozó fajtái lehetnek:",
        "hely, idő, mód",
        ["egyedül", "kettős", "virtuális"]));
    }
  }

  return q;
}

export function generateAdjectiveRole(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const adj = pick(ADJECTIVE_ROLE, rng);
    const type = i % 3;

    if (type === 0) {
      q.push(createMCQ("mondat", "jelzo", `"${adj.sentence}" Mi a jelző?`,
        adj.target,
        ["az alany", "az ige", "a mondat"]));
    } else if (type === 1) {
      q.push(createMCQ("mondat", "jelzo", "A jelző a mondatban általában:",
        "a főnév előtt vagy után áll",
        ["mindig az ige után", "mindig egyedül", "az ige helyén"]));
    } else {
      q.push(createMCQ("mondat", "jelzo", "A jelző azt fejti ki:",
        "a főnév minőségét",
        ["az ige módját", "az alanyt", "a tárgyat"]));
    }
  }

  return q;
}

export function generateImperativeMood(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const verb = pick(VERBS_IMPERATIVE, rng);
    const type = i % 3;

    if (type === 0) {
      // Melyik a felszólító mód?
      const correct = verb.te_sg;
      const wrongs = shuffle(VERBS_IMPERATIVE, rng).slice(0, 3).map(v => v.o_sg);
      q.push(createMCQ("igeidok", "felszolito", `"${verb.inf}" felszólító módja (te):`, correct, wrongs));
    } else if (type === 1) {
      // Mi a parancs alakja?
      const correct = verb.o_sg;
      const wrongs = shuffle(VERBS_IMPERATIVE, rng).slice(0, 3).map(v => v.mi);
      q.push(createMCQ("igeidok", "felszolito", `"${verb.inf}" felszólító módja (ő/3. sz. sing.):`, correct, wrongs));
    } else {
      // Komplettálj!
      const correct = verb.mi;
      const wrongs = shuffle(VERBS_IMPERATIVE, rng).slice(0, 3).map(v => v.te_sg);
      q.push(createMCQ("igeidok", "felszolito", `"Gyerekek, ... össze!" (${verb.inf})`, correct, wrongs));
    }
  }

  return q;
}

export function generateConditionalMood(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const verb = pick(VERBS_CONDITIONAL, rng);
    const type = i % 3;

    if (type === 0) {
      // Melyik a feltételes mód?
      const correct = verb.jelen;
      const wrongs = shuffle(VERBS_CONDITIONAL, rng).slice(0, 3).map(v => v.mult);
      q.push(createMCQ("igeidok", "felteteles", `"${verb.inf}" feltételes módja (jelen):`, correct, wrongs));
    } else if (type === 1) {
      // Múlt feltételes
      const correct = verb.mult;
      const wrongs = shuffle(VERBS_CONDITIONAL, rng).slice(0, 3).map(v => v.jelen);
      q.push(createMCQ("igeidok", "felteteles", `"${verb.inf}" feltételes módja (múlt):`, correct, wrongs));
    } else {
      // Mondatban
      const correct = verb.jelen;
      const wrongs = shuffle(VERBS_CONDITIONAL, rng).slice(0, 3).map(v => v.mult);
      q.push(createMCQ("igeidok", "felteteles", `"Ha lenne pénzem, ..." (${verb.inf})`, correct, wrongs));
    }
  }

  return q;
}

export function generatePossessivePersonal(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const noun = pick(NOUNS_POSSESSIVE, rng);
    const type = i % 3;

    if (type === 0) {
      // Birtokos személyjelezés (1. sz. sing.)
      const correct = noun.sg1;
      const wrongs = [noun.sg2, noun.sg3, noun.pl1];
      q.push(createMCQ("nevszok", "birtokos", `"${noun.nom}" - enyém (1. sz. sing.):`, correct, wrongs));
    } else if (type === 1) {
      // Birtokos személyjelezés (3. sz. sing.)
      const correct = noun.sg3;
      const wrongs = [noun.sg1, noun.sg2, noun.pl3];
      q.push(createMCQ("nevszok", "birtokos", `"${noun.nom}" - övé (3. sz. sing.):`, correct, wrongs));
    } else {
      // Több alany
      const correct = noun.pl1;
      const wrongs = [noun.sg1, noun.pl2, noun.sg3];
      q.push(createMCQ("nevszok", "birtokos", `"${noun.nom}" - mienk (1. sz. plur.):`, correct, wrongs));
    }
  }

  return q;
}

export function generateAdverbialCasesAdvanced(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const noun = pick(ADVERBIAL_CASE_ADVANCED, rng);
    const type = i % 3;

    if (type === 0) {
      // Eszközrag (-val/-vel)
      const correct = noun.comitative;
      const wrongs = shuffle(ADVERBIAL_CASE_ADVANCED, rng).slice(0, 3).map(n => n.ablative);
      q.push(createMCQ("nevszok", "hatarozaragu", `"${noun.nom}" eszközrag (-val/-vel):`, correct, wrongs));
    } else if (type === 1) {
      // Kiegyüttlégi rag (-ból/-ből)
      const correct = noun.ablative;
      const wrongs = shuffle(ADVERBIAL_CASE_ADVANCED, rng).slice(0, 3).map(n => n.delative);
      q.push(createMCQ("nevszok", "hatarozaragu", `"${noun.nom}" ablativus (-ból/-ből):`, correct, wrongs));
    } else {
      // Helyhatározó rag (-ról/-ről)
      const correct = noun.delative;
      const wrongs = shuffle(ADVERBIAL_CASE_ADVANCED, rng).slice(0, 3).map(n => n.comitative);
      q.push(createMCQ("nevszok", "hatarozaragu", `"${noun.nom}" delativus (-ról/-ről):`, correct, wrongs));
    }
  }

  return q;
}

export function generateEmotionsVocabulary(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const emot = pick(EMOTIONS_VOCABULARY, rng);
    const type = i % 3;

    if (type === 0) {
      // Mi az ellentéte?
      const correct = emot.opposite;
      const wrongs = shuffle(EMOTIONS_VOCABULARY, rng).slice(0, 3).map(e => e.emotion);
      q.push(createMCQ("szokincs", "erzelmek", `"${emot.emotion}" ellentéte:`, correct, wrongs));
    } else if (type === 1) {
      // Melyik mondat mutatja az érzelmét?
      const correct = emot.example;
      const wrongs = shuffle(EMOTIONS_VOCABULARY, rng).slice(0, 3).map(e => e.example);
      q.push(createMCQ("szokincs", "erzelmek", `Melyik mondat mutatja, hogy valaki "${emot.emotion}"?`,
        correct, wrongs));
    } else {
      // Szó alapján
      q.push(createMCQ("szokincs", "erzelmek", `"${emot.emotion}" érzelmi állapot jelentése:`,
        "az adott érzelmet fejezi ki",
        ["az időt mutatja", "egy szín", "egy tárgy"]));
    }
  }

  return q;
}

export function generateTimeExpressions(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const time = pick(TIME_EXPRESSIONS, rng);
    const type = i % 3;

    if (type === 0) {
      // Mi az időkifejezés jelentése?
      const correct = time.meaning;
      const wrongs = shuffle(TIME_EXPRESSIONS, rng).slice(0, 3).map(t => t.meaning);
      q.push(createMCQ("szokincs", "idokifejezesek", `"${time.word}" jelentése:`, correct, wrongs));
    } else if (type === 1) {
      // Melyik időkifejezést kellene ide?
      const correct = time.word;
      const wrongs = shuffle(TIME_EXPRESSIONS, rng).slice(0, 3).map(t => t.word);
      q.push(createMCQ("szokincs", "idokifejezesek", `${time.example.replace(time.word, "___")}`,
        correct, wrongs));
    } else {
      // Mikor használjuk?
      q.push(createMCQ("szokincs", "idokifejezesek", `"${time.word}" azt jelenti:`,
        time.meaning,
        ["valami más időpontot", "helyet jelent", "érzelmeket"]));
    }
  }

  return q;
}

export function generateIkesVerbs(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const verb = pick(IKES_VERBS, rng);
    const type = i % 3;

    if (type === 0) {
      // Melyik az ikes ige?
      const correct = verb.inf;
      const wrongs = shuffle(IKES_VERBS, rng).slice(0, 3).map(v => v.inf);
      q.push(createMCQ("helyesiras", "ikes_igek", `Melyik az ikes ige?`, correct, wrongs));
    } else if (type === 1) {
      // Jelen ideje
      const correct = verb.jelen;
      const wrongs = shuffle(IKES_VERBS, rng).slice(0, 3).map(v => v.múlt);
      q.push(createMCQ("helyesiras", "ikes_igek", `"${verb.inf}" jelen ideje (1. sz. sing.):`, correct, wrongs));
    } else {
      // Múlt ideje
      const correct = verb.múlt;
      const wrongs = shuffle(IKES_VERBS, rng).slice(0, 3).map(v => v.jelen);
      q.push(createMCQ("helyesiras", "ikes_igek", `"${verb.inf}" múlt ideje:`, correct, wrongs));
    }
  }

  return q;
}

export function generateConsonantHarmony(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const rule = pick(CONSONANT_HARMONY_RULES, rng);
    const type = i % 3;

    if (type === 0) {
      // Mi a mássalhangzó-törvény?
      q.push(createMCQ("helyesiras", "masshangzo_torveny", `"${rule.word}" milyen szabályt követi?`,
        rule.rule,
        ["magánhangzó-harmónia", "ragozási rag", "összetett szó"]));
    } else if (type === 1) {
      // Meddig okoz változást?
      q.push(createMCQ("helyesiras", "masshangzo_torveny", `A mássalhangzó-törvény miért fontos a magyar helyesírásban?`,
        "a hangok tisztaságáért",
        ["a sebességért", "az egyszerűségért", "az archaikus formáért"]));
    } else {
      // Példa
      q.push(createMCQ("helyesiras", "masshangzo_torveny", `Melyik szó követi a mássalhangzó-törvényt?`,
        "szépség",
        ["boldog", "játszik", "írás"]));
    }
  }

  return q;
}

export function generateCompoundSentenceBasics(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const sent = pick(COMPOUND_SENTENCE_BASICS, rng);
    const type = i % 3;

    if (type === 0) {
      // Mi az kötőszó jelentése?
      const correct = sent.meaning;
      const wrongs = shuffle(COMPOUND_SENTENCE_BASICS, rng).slice(0, 3).map(s => s.meaning);
      q.push(createMCQ("mondat", "osszetett_alap", `"${sent.connector}" kötőszó jelentése:`, correct, wrongs));
    } else if (type === 1) {
      // Melyik a helyes kötőszó?
      const correct = sent.connector;
      const wrongs = shuffle(COMPOUND_SENTENCE_BASICS, rng).slice(0, 3).map(s => s.connector);
      q.push(createMCQ("mondat", "osszetett_alap", `${sent.example.replace(sent.connector, "___")}`,
        correct, wrongs));
    } else {
      // Összetett mondat fogalma
      q.push(createMCQ("mondat", "osszetett_alap", `Az összetett mondat két vagy több ... áll.`,
        "egyszerű mondatból",
        ["szóból", "szó csoportból", "szótagból"]));
    }
  }

  return q;
}

export function generateDialogueVerbs(seed?: number): MagyarMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: MagyarMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const dverb = pick(DIALOGUE_VERBS, rng);
    const type = i % 3;

    if (type === 0) {
      // Melyik igét használjuk a párbeszédben?
      const correct = dverb.verb;
      const wrongs = shuffle(DIALOGUE_VERBS, rng).slice(0, 3).map(d => d.verb);
      q.push(createMCQ("fogalmazas", "parbeszed", `Melyik ige mutatja, hogy valaki valamit ${dverb.verb.slice(0, -2)}?`,
        correct, wrongs));
    } else if (type === 1) {
      // Párbeszéd ige jelentése
      q.push(createMCQ("fogalmazas", "parbeszed", `"${dverb.verb}" igét a párbeszédben azért használjuk, mert:`,
        "mutatja, hogy valaki beszél",
        ["mutatja az időt", "mutatja a helyet", "mutatja az írásmódot"]));
    } else {
      // Mondat kiegészítés
      const correct = dverb.verb;
      const wrongs = shuffle(DIALOGUE_VERBS, rng).slice(0, 3).map(d => d.verb);
      q.push(createMCQ("fogalmazas", "parbeszed", `"Játszunk!" ... a tanár.`, correct, wrongs));
    }
  }

  return q;
}

// ─── Export generator map ──────────────────────────────────────────────────

export const G3_Generators_Hungarian = {
  "igeidok/jelen": generateTensePresent,
  "igeidok/mult": generateTensePast,
  "igeidok/jovo": generateTenseFuture,
  "igeidok/felszolito": generateImperativeMood,
  "igeidok/felteteles": generateConditionalMood,
  "nevszok/fonevragozas": generateNounDeclension,
  "nevszok/melleknevfokozas": generateAdjectiveDegree,
  "nevszok/birtokos": generatePossessivePersonal,
  "nevszok/hatarozaragu": generateAdverbialCasesAdvanced,
  "szo/osszetett_haladó": generateCompoundWordsAdvanced,
  "szo/szocsaladok": generateWordFamilies,
  "szoveg/megertés": generateTextComprehension,
  "szoveg/osszefoglalas": generateTextSummary,
  "szokincs/szolasok": generateIdioms,
  "szokincs/kozmondasok": generateProverbs,
  "szokincs/erzelmek": generateEmotionsVocabulary,
  "szokincs/idokifejezesek": generateTimeExpressions,
  "helyesiras/egybeíras": generateSpellingTogether,
  "helyesiras/kuloniras": generateSpellingApart,
  "helyesiras/ikes_igek": generateIkesVerbs,
  "helyesiras/masshangzo_torveny": generateConsonantHarmony,
  "fogalmazas/elbeszeles": generateCompositionNarrative,
  "fogalmazas/leiras": generateCompositionDescription,
  "fogalmazas/parbeszed": generateDialogueVerbs,
  "mondat/targy": generateObjectRole,
  "mondat/hatarozo": generateAdverbialRole,
  "mondat/jelzo": generateAdjectiveRole,
  "mondat/osszetett_alap": generateCompoundSentenceBasics,
};
