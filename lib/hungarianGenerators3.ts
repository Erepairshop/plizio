// lib/hungarianGenerators3.ts
// Grade 3 (3. osztály) Hungarian generators
// 18 subtopics covering verb tenses, noun declension, compound words, text comprehension, idioms, spelling, composition, sentence analysis
// All in Hungarian, appropriate for 8-9 year olds

import type { CurriculumMCQ, CurriculumTyping, CurriculumQuestion } from "./curriculumTypes";

type MagyarMCQ = CurriculumMCQ & { type: "mcq" };
type MagyarTyping = CurriculumTyping & { type: "typing" };

// â”€â”€â”€ HELPER FUNCTIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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

// â”€â”€â”€ DATA LISTS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

// New data structures for additional generators
const VERBS_IMPERATIVE = [
  { inf: "írni", te_sg: "írj", o_sg: "írjon", mi: "írjunk", ti: "írjatok", ok: "írjanak" },
  { inf: "futni", te_sg: "fuss", o_sg: "fusson", mi: "fussunk", ti: "fussatok", ok: "fussanak" },
  { inf: "olvasni", te_sg: "olvass", o_sg: "olvasson", mi: "olvassunk", ti: "olvassatok", ok: "olvassanak" },
  { inf: "játszani", te_sg: "játssz", o_sg: "játsszon", mi: "játsszunk", ti: "játszatok", ok: "játszanak" },
  { inf: "enni", te_sg: "egyél", o_sg: "egyen", mi: "együnk", ti: "egyetek", ok: "egyenek" },
  { inf: "inni", te_sg: "igyál", o_sg: "igyon", mi: "igyunk", ti: "igyatok", ok: "igyanak" },
];

const VERBS_CONDITIONAL = [
  { inf: "irni", jelen: "irnek", mult: "irtam volna", vagyok: "volna" },
  { inf: "futni", jelen: "futnek", mult: "futottam volna", vagyok: "volna" },
  { inf: "olvasni", jelen: "olvasnek", mult: "olvastam volna", vagyok: "volna" },
  { inf: "jatszani", jelen: "jatszanek", mult: "jatszottam volna", vagyok: "volna" },
  { inf: "enni", jelen: "ennek", mult: "ettem volna", vagyok: "volna" },
  { inf: "inni", jelen: "innek", mult: "ittam volna", vagyok: "volna" },
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
  { nom: "iskola", comitative: "iskolával", ablative: "iskolából", delative: "iskoláról" },
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
  { emotion: "vidám", opposite: "mérges", example: "Vidám és nevetős volt az egész nap." },
  { emotion: "kíváncsi", opposite: "közömbös", example: "Kíváncsiak voltunk az új játékra." },
];

const TIME_EXPRESSIONS = [
  { word: "tegnap", meaning: "az előző napon", example: "Tegnap futottunk az iskolában." },
  { word: "ma", meaning: "az aktuális napon", example: "Ma szép az idő." },
  { word: "holnap", meaning: "a következő napon", example: "Holnap lesz az iskola." },
  { word: "reggel", meaning: "napkelte és dél között", example: "Reggel korán kelünk fel." },
  { word: "éjjel", meaning: "sötét van, mindenki alszik", example: "Éjjel csillagok fénylenek az égen." },
  { word: "délután", meaning: "déltől alkonyig", example: "Délután kint játszottunk." },
  { word: "este", meaning: "a nap vége előtt", example: "Este vacsora után játszunk." },
];

const IKES_VERBS = [
  { inf: "eszik", jelen: "eszem", múlt: "ettem" },
  { inf: "iszik", jelen: "iszom", múlt: "ittam" },
  { inf: "alszik", jelen: "alszom", múlt: "aludtam" },
  { inf: "jatszik", jelen: "jatszom", múlt: "jatszottam" },
  { inf: "fekszik", jelen: "fekszem", múlt: "fekudtem" },
  { inf: "szuletik", jelen: "szuletek", múlt: "szulettem" },
];

const CONSONANT_HARMONY_RULES = [
  { word: "szepség", rule: "mássalhangzók találkozása" },
  { word: "egeszség", rule: "mássalhangzó-kapcsolat egyszerűsödése" },
  { word: "jatssz", rule: "teljes hasonulás" },
  { word: "otthon", rule: "részleges hasonulás" },
  { word: "kezzel", rule: "teljes hasonulás" },
];

const COMPOUND_SENTENCE_BASICS = [
  { connector: "es", example: "Peter olvas es Mari ir.", meaning: "hozzaadas" },
  { connector: "de", example: "Szep az ido, de hideg van.", meaning: "ellentet" },
  { connector: "mert", example: "Maradtunk otthon, mert esett az eso.", meaning: "ok" },
  { connector: "hogy", example: "Azt akarom, hogy jatszunk.", meaning: "alarendeles" },
  { connector: "vagy", example: "Almat vagy kortet akarsz?", meaning: "valasztas" },
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
  { inf: "tanítani", jelen: "tanít", múlt: "tanított", jövő: "fog tanítani" },
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
  { comp: "osztalyterem", parts: ["osztaly", "terem"] },
  { comp: "szovegertes", parts: ["szoveg", "ertes"] },
  { comp: "mondatalkotas", parts: ["mondat", "alkotas"] },
  { comp: "iskolataska", parts: ["iskola", "taska"] },
  { comp: "konyvespolc", parts: ["konyv", "polc"] },
  { comp: "hoember", parts: ["ho", "ember"] },
  { comp: "fogkefe", parts: ["fog", "kefe"] },
  { comp: "gyerekjatek", parts: ["gyerek", "jatek"] },
];

const WORD_FAMILIES = [
  { root: "fut", words: ["futás", "futó", "futball", "futott"] },
  { root: "ír", words: ["írás", "író", "írott", "írt"] },
  { root: "olvas", words: ["olvasás", "olvasó", "olvasott", "felolvas"] },
  { root: "tanul", words: ["tanulás", "tanuló", "tanult", "megtanul"] },
];

const IDIOMS = [
  { idiom: "éhes mint a farkas", meaning: "nagyon éhes" },
  { idiom: "tanácstalan, mint a kismadár", meaning: "nem tudja, mit csináljon" },
  { idiom: "lóvá tette", meaning: "megtévesztette, becsapta" },
  { idiom: "a szívébe zárta", meaning: "nagyon megszerette" },
  { idiom: "majd kiugrik a bőréből", meaning: "nagyon boldog vagy izgatott" },
  { idiom: "sűrű lett a levegő", meaning: "feszült, kellemetlen lett a helyzet" },
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
  { sentence: "Mari megtalálta a ceruzáját.", target: "a ceruzáját", role: "tárgy" },
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

// â”€â”€â”€ GENERATOR FUNCTIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function generateTensePresent(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Mi a jelen idő?", "most folyó cselekvést jelöl"],
    ["'ír' jelen ideje, én?", "írok"],
    ["'fut' jelen ideje, ő?", "fut"],
    ["'olvas' jelen ideje, mi?", "olvasunk"],
    ["'tanít' jelen ideje, te?", "tanítasz"],
    ["'kérdez' jelen ideje, ők?", "kérdeznek"],
    ["Mire kérdez a jelen idő?", "most mit csinál?"],
    ["'felel' jelen ideje, én?", "felelek"],
    ["'száll' jelen ideje, ő?", "száll"],
    ["Jelen idejű ige: 'A gyerek ... az iskolában.'", "tanul"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("igeidok", "jelen", t[0], t[1])));
  return q;
}

export function generateTensePast(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Mi a múlt idő?", "korábban végbement cselekvést jelöl"],
    ["'ír' múlt ideje?", "írt"],
    ["'fut' múlt ideje?", "futott"],
    ["'olvas' múlt ideje?", "olvasott"],
    ["'játszik' múlt ideje?", "játszott"],
    ["'eszik' múlt ideje?", "evett"],
    ["'iszik' múlt ideje?", "ivott"],
    ["Mire kérdez a múlt idő?", "mit csinált?"],
    ["'tanít' múlt ideje?", "tanított"],
    ["Múlt idejű ige: 'Tegnap a gyerek ...'", ["futott", "olvasott", "tanult"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("igeidok", "mult", t[0], t[1])));
  return q;
}

export function generateTenseFuture(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Mi a jövő idő?", "ezután bekövetkező cselekvést jelöl"],
    ["'ír' jövő ideje?", "fog írni"],
    ["'fut' jövő ideje?", "fog futni"],
    ["'olvas' jövő ideje?", "fog olvasni"],
    ["'játszik' jövő ideje?", "fog játszani"],
    ["'eszik' jövő ideje?", "fog enni"],
    ["Mire kérdez a jövő idő?", "majd mit fog csinálni?"],
    ["'tanít' jövő ideje?", "fog tanítani"],
    ["Jövő idő jele?", "fog"],
    ["Jövő idejű mondat: 'Holnap ...'", ["fog futni", "fog olvasni", "fog tanulni"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("igeidok", "jovo", t[0], t[1])));
  return q;
}

export function generateNounDeclension(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["'kutya' tárgyesete?", "kutyát"],
    ["'macska' tárgyesete?", "macskát"],
    ["'ház' tárgyesete?", "házat"],
    ["'könyv' tárgyesete?", "könyvet"],
    ["'lány' eszközragos alakja?", "lánnyal"],
    ["'fiú' eszközragos alakja?", "fiúval"],
    ["Mi a tárgyrag?", "-t"],
    ["'szék' helyragos alakja?", "székben"],
    ["'asztal' eszközragos alakja?", "asztallal"],
    ["'ház' részeshatározója?", "háznak"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("nevszok", "fonevragozas", t[0], t[1])));
  return q;
}

export function generateAdjectiveDegree(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["'szép' középfoka?", "szebb"],
    ["'szép' felsőfoka?", "legszebb"],
    ["'nagy' középfoka?", "nagyobb"],
    ["'nagy' felsőfoka?", "legnagyobb"],
    ["'kicsi' középfoka?", "kisebb"],
    ["'gyors' felsőfoka?", "leggyorsabb"],
    ["'magas' középfoka?", "magasabb"],
    ["'hideg' középfoka?", "hidegebb"],
    ["Melléknév felsőfoka milyen előtaggal kezdődik?", "leg-"],
    ["'lassú' középfoka?", "lassabb"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("nevszok", "melleknevfokozas", t[0], t[1])));
  return q;
}

export function generateCompoundWordsAdvanced(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Hány részből áll az összetett szó?", "kettő"],
    ["'osztályterem' első tagja?", "osztály"],
    ["'szövegértés' második tagja?", "értés"],
    ["Írj egy összetett szót!", ["osztályterem", "szövegértés", "mondatalkotás"]],
    ["Mi az összetett szó?", "két szóból álló szó"],
    ["'önálló' tagjai?", ["ön", "álló"]],
    ["'közös' összetett szó?", "nem"],
    ["Milyen szó a 'nappal'?", "összetett szó"],
    ["'gondolkodás' első tagja?", "gondol"],
    ["Miért hasznos az összetett szó?", "új fogalmak jelölésére"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szo", "osszetett_haladó", t[0], t[1])));
  return q;
}

export function generateWordFamilies(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Mi a szócsalád?", "azonos gyökből származó szavak"],
    ["'fut' szócsaládjába tartozik?", ["futás", "futó", "futball"]],
    ["'ír' szócsaládjába tartozik?", ["írás", "író", "írott"]],
    ["'olvas' szócsaládjának gyöke?", "olvas"],
    ["'tanul' szócsaládjából írj egyet!", ["tanulás", "tanuló", "tanult"]],
    ["Mi a szócsalád gyöke?", "az alap szótő"],
    ["'futás' gyöke?", "fut"],
    ["'olvasás' gyöke?", "olvas"],
    ["'tanulás' gyöke?", "tanul"],
    ["Miért fontos a szócsalád ismerete?", "segít a szavak megértésében"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szo", "szocsaladok", t[0], t[1])));
  return q;
}

export function generateTextComprehension(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    const text = "A fiú a parkban játszott. Egy labdát dobott magasra. A labda a fák között landolt. A fiú nevetett és ismét dobott.";

    if (type === 0) {
      q.push(createMCQ("szoveg", "megertés", `"Hol játszott a fiú?" Válasz a szövegből:`,
        "a parkban", ["az iskolában", "az utcán", "az udvaron"]));
    } else if (type === 1) {
      q.push(createMCQ("szoveg", "megertés", `"Mit dobott a fiú?" Válasz a szövegből:`,
        "labdát", ["könyvet", "kővet", "fát"]));
    } else {
      q.push(createMCQ("szoveg", "megertés", `"Milyen volt a fiú hangulata?" A szöveg alapján:`,
        "boldog", ["szomorú", "mérges", "ijedt"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Hol játszott a fiú?", "a parkban"],
    ["Mit dobott a fiú?", "labdát"],
    ["Milyen volt a fiú hangulata?", "boldog"],
    ["Hova landolt a labda?", "a fák között"],
    ["Mit csinált a fiú újra?", "dobott"],
    ["Mi a szövegértés?", "a szöveg megértése"],
    ["Mi a fő esemény a szövegben?", ["labdadobás", "játék a parkban"]],
    ["Ki nevetett a szövegben?", "a fiú"],
    ["Hány szót kell odafigyelni olvasásnál?", "minden szóra"],
    ["Mit csinált a fiú a parkban?", "játszott"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szoveg", "megertés", t[0], t[1])));
  return q;
}

export function generateTextSummary(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
        "A fiú a parkban játszott",
        ["Sok gyerek volt ott", "Szivárvány volt az égen", "Eső volt"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a szöveg lényege?", "a fiú jól szórakozott"],
    ["Mit tanulunk a szöveg összefoglalásánál?", "a fő esemény kiemelése"],
    ["Mivel lehet összefoglalni egy szöveget?", "1-2 mondattal"],
    ["Mire figyelünk szöveg összefoglalásnál?", "a fő eseményre"],
    ["Hogyan kezdjük az összefoglalást?", ["A szöveg arról szól...", "A főszereplő..."]],
    ["Mi a szöveg főmondanivalója?", "A fiú jól szórakozott"],
    ["Ki volt a szöveg főszereplője?", "a fiú"],
    ["Hol játszódott a szöveg?", "parkban"],
    ["Mikor játszódott?", ["nappal", "valószínűleg nappal"]],
    ["Mit tanulsz szöveg összefoglalásából?", "lényeglátást"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szoveg", "osszefoglalas", t[0], t[1])));
  return q;
}

export function generateIdioms(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
        "átvitt értelemben használatosak",
        ["szó szerintiek", "mindig igaz", "archaikusak"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a szólás?", "átvitt értelmű kifejezés"],
    ["'éhes mint a farkas' jelentése?", "nagyon éhes"],
    ["'lóvá tette' jelentése?", "megtévesztette"],
    ["'a szívébe zárta' jelentése?", "nagyon megszerette"],
    ["'majd kiugrik a bőréből' jelentése?", "nagyon boldog vagy izgatott"],
    ["'sűrű lett a levegő' jelentése?", "feszült lett a helyzet"],
    ["Szólások szó szerint értendők?", "nem"],
    ["Mi a szólás és a közmondás különbsége?", "a közmondás tanulságot is tartalmaz"],
    ["Írj egy szólást!", ["éhes mint a farkas", "lóvá tette", "a szívébe zárta"]],
    ["Miért nehéz a szólásokat érteni?", "átvitt értelmük van"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szokincs", "szolasok", t[0], t[1])));
  return q;
}

export function generateProverbs(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
        ["a történelmet", "a földrajzot", "a matekot"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a közmondás?", "népi bölcsesség rövid mondatban"],
    ["'Ki korán kel, aranyat lel' jelentése?", "a szorgalom hasznos"],
    ["'Sok kicsi sokra megy' jelentése?", "a kicsi dolgok összeadódnak"],
    ["'Nem minden arany, ami fénylik' jelentése?", "nem minden olyan jó, ahogy néz ki"],
    ["Írj egy közmondást!", ["Ki korán kel aranyat lel", "Sok kicsi sokra megy"]],
    ["Mire tanítanak a közmondások?", "az élet bölcsességére"],
    ["Ki alkotja a közmondásokat?", "a nép"],
    ["Hány részből áll egy közmondás?", "általában egy mondatból"],
    ["Mi a különbség a szólás és a közmondás között?", "a közmondás tanulságot tartalmaz"],
    ["Közmondásokat mikor szoktuk mondani?", "bölcs tanácsként"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szokincs", "kozmondasok", t[0], t[1])));
  return q;
}

export function generateSpellingTogether(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Egybe vagy külön: 'mindenhol'?", "egybe"],
    ["Egybe vagy külön: 'végig'?", "egybe"],
    ["Egybe vagy külön: 'össze'?", "egybe"],
    ["Egybe vagy külön: 'visszaír'?", "egybe"],
    ["Mi az egybeírás szabálya igekötős szavaknál?", "az igekötő az igéhez kapcsolódik"],
    ["Egybe vagy külön: 'ki-visszatart'?", "kötőjellel"],
    ["Mikor írunk egybe igekötős szavakat?", "ha nem hangsúlyos az igekötő"],
    ["Írj egy egybeírt szót!", ["mindenhol", "végig", "visszaír", "össze"]],
    ["Egybe vagy külön: 'fel-felkapcsolódik'?", "kötőjellel"],
    ["Mikor írunk egybe?", "ha szorosan összetartoznak"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("helyesiras", "egybeíras", t[0], t[1])));
  return q;
}

export function generateSpellingApart(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Külön vagy egybe: 'más és más'?", "külön"],
    ["Külön vagy egybe: 'olyan és olyan'?", "külön"],
    ["Külön vagy egybe: 'így és úgy'?", "külön"],
    ["Mi az elkülönített írás?", "szavak külön írása"],
    ["Mikor írunk külön?", "ha szavak önállóak"],
    ["Külön vagy egybe: 'és'?", "külön szó"],
    ["Írj egy külön írandó szókapcsolatot!", ["más és más", "így és úgy"]],
    ["Miért írunk külön?", "ha a szavak önálló fogalmak"],
    ["'Így és úgy' összesen hány szó?", "három"],
    ["Külön vagy egybe: 'valami más'?", "külön"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("helyesiras", "kuloniras", t[0], t[1])));
  return q;
}

export function generateCompositionNarrative(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Mi az elbeszélés első része?", "kezdet"],
    ["Mi az elbeszélés fejlesztő része?", "cselekmény"],
    ["Mi az elbeszélés vége?", "befejezés"],
    ["Hogyan kezdődik sok mese?", "Egyszer volt, hol nem volt..."],
    ["Mi a fordulópont az elbeszélésben?", "váratlan esemény"],
    ["Miből áll egy elbeszélés?", "kezdet, cselekmény, befejezés"],
    ["Mire kell figyelni elbeszélésnél?", "az eseményekre és az időrendre"],
    ["Mi a cselekmény?", "a fő esemény a történetben"],
    ["Mire utal a 'kezdet' az elbeszélésben?", "a történet indulása"],
    ["Hogyan végzik a jó mesék?", "boldogan"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("fogalmazas", "elbeszeles", t[0], t[1])));
  return q;
}

export function generateCompositionDescription(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Mire figyelünk személyleírásnál?", "külső és személyiség"],
    ["Mi a leírás első eleme?", "a külső megjelenés"],
    ["Mire figyelünk tárgy leírásakor?", "szín, alak, méret"],
    ["Milyen szófajokat használunk leírásnál?", "mellékneveket"],
    ["Hogyan írunk le egy személyt?", "külső, személyiség, viselkedés"],
    ["Mi a leírás célja?", "hogy az olvasó el tudja képzelni"],
    ["Mit írunk le egy helyszínnél?", "mi látható ott"],
    ["Írj egy leírást az iskoládról!", ["Az iskola szép épület...", "Sok ablaka van..."]],
    ["Miért fontos a részletes leírás?", "hogy pontosabb képet adjon"],
    ["Mit szoktunk leírni egy személyről?", ["szeme színét", "ruháját", "hajának hosszát"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("fogalmazas", "leiras", t[0], t[1])));
  return q;
}

export function generateObjectRole(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Mi a tárgy a mondatban?", "amit az ige jelöl"],
    ["Mi a tárgyrag?", "-t"],
    ["'Péter egy könyvet olvas.' - mi a tárgy?", "egy könyvet"],
    ["'A lány az asztalt tolta.' - mi a tárgy?", "az asztalt"],
    ["'Mari megtalálta a ceruzáját.' - mi a tárgy?", "a ceruzáját"],
    ["Mire kérdezünk a tárgyra?", "kit? mit?"],
    ["A tárgy milyen esetben áll?", "tárgyesetben"],
    ["Írd tárgyesetbe: 'könyv'", "könyvet"],
    ["Írd tárgyesetbe: 'labda'", "labdát"],
    ["Tárgy a mondatban: 'A gyerek almát eszik.' - mi a tárgy?", "almát"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("mondat", "targy", t[0], t[1])));
  return q;
}

export function generateAdverbialRole(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 45; i++) {
    const adv = pick(ADVERBIAL_ROLE, rng);
    const type = i % 3;

    if (type === 0) {
      q.push(createMCQ("mondat", "hatarozo", `"${adv.sentence}" Mi a határozó?`,
        adv.target,
        ["az ige", "a főnév", "az alany"]));
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
  const typingPool: [string, string | string[]][] = [
    ["Mi a határozó a mondatban?", "az ige körülményét jelöli"],
    ["Mi a helyhatározó?", "ahol valami történik"],
    ["Mi az időhatározó?", "mikor történik valami"],
    ["Mi a módhatározó?", "hogyan történik valami"],
    ["'A gyerek az iskolában játszik.' - mi a határozó?", "az iskolában"],
    ["'Reggel elindultunk.' - mi a határozó?", "Reggel"],
    ["'Gyorsan futottak.' - mi a határozó?", "Gyorsan"],
    ["Mire kérdez a helyhatározó?", "hol?"],
    ["Mire kérdez az időhatározó?", "mikor?"],
    ["Mire kérdez a módhatározó?", "hogyan?"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("mondat", "hatarozo", t[0], t[1])));
  return q;
}

export function generateAdjectiveRole(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Mi a jelző a mondatban?", "a főnév minőségét jelöli"],
    ["'A piros virág szép.' - mi a jelző?", "piros"],
    ["'Az okos fiú tanul.' - mi a jelző?", "okos"],
    ["'A nagy ház áll az úton.' - mi a jelző?", "nagy"],
    ["Mire kérdez a jelzőre?", "milyen?"],
    ["A jelző általában milyen szófaj?", "melléknév"],
    ["Hova kerül a jelző?", "a főnév elé"],
    ["'A szép alma piros.' - mi a jelző?", "szép"],
    ["Adj jelzőt: 'A ___ kutya fut.'", ["gyors", "kicsi", "fekete"]],
    ["Jelző: 'Az ___ gyerek játszik.'", ["vidám", "okos", "kisebb"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("mondat", "jelzo", t[0], t[1])));
  return q;
}

export function generateImperativeMood(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Mi a felszólító mód?", "parancsot, kérést fejez ki"],
    ["'írni' felszólító módja (te)?", "írj"],
    ["'futni' felszólító módja (te)?", "fuss"],
    ["'olvasni' felszólító módja (te)?", "olvass"],
    ["'enni' felszólító módja (te)?", "egyél"],
    ["'játszani' felszólító módja (ő)?", "játsszon"],
    ["Felszólító módú mondat jellemzője?", "felkiáltójel"],
    ["'inni' felszólító módja (mi)?", "igyunk"],
    ["Mikor használjuk a felszólító módot?", "parancs, kérés esetén"],
    ["'futni' felszólító módja (ők)?", "fussanak"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("igeidok", "felszolito", t[0], t[1])));
  return q;
}

export function generateConditionalMood(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Mi a feltételes mód?", "feltételes cselekvést jelöl"],
    ["'írni' feltételes módja (jelen)?", "írnék"],
    ["'futni' feltételes módja (jelen)?", "futnék"],
    ["'olvasni' feltételes módja (jelen)?", "olvasnék"],
    ["Feltételes módú mondat jellemzője?", "ha... akkor..."],
    ["'enni' feltételes módja (jelen)?", "ennék"],
    ["'inni' feltételes módja (jelen)?", "innék"],
    ["Mikor használjuk a feltételes módot?", "ha valami nem biztos"],
    ["'játszani' feltételes módja (jelen)?", "játszanék"],
    ["Feltételes mód jele?", "-na/-ne/-ná/-né"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("igeidok", "felteteles", t[0], t[1])));
  return q;
}

export function generatePossessivePersonal(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Mi a birtok jele?", "-m, -d, -ja/je..."],
    ["'ház' - enyém (1. sz.)?", "házam"],
    ["'könyv' - enyém (1. sz.)?", "könyvem"],
    ["'macska' - övé (3. sz.)?", "macskája"],
    ["'ceruza' - övé (3. sz.)?", "ceruzája"],
    ["'játék' - miénk (1. sz. plur.)?", "játékunk"],
    ["'ház' - tiétek (2. sz. plur.)?", "házatok"],
    ["Mire utal a birtok?", "kié a dolog"],
    ["'könyv' - övék (3. sz. plur.)?", "könyvük"],
    ["'macska' - tiéd (2. sz.)?", "macskád"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("nevszok", "birtokos", t[0], t[1])));
  return q;
}

export function generateAdverbialCasesAdvanced(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["'ház' eszközragos alakja (-val/-vel)?", "házzal"],
    ["'iskola' eszközragos alakja?", "iskolával"],
    ["'szék' eszközragos alakja?", "székkel"],
    ["'asztal' kiindulási esete (-ból/-ből)?", "asztalból"],
    ["'toll' kiindulási esete?", "tollból"],
    ["'ház' felőle eseté (-ról/-ről)?", "házról"],
    ["Mi az eszközrag?", "-val/-vel"],
    ["Mi a kiindulási rag?", "-ból/-ből"],
    ["Mi a felőle rag?", "-ról/-ről"],
    ["'iskola' felőle eseté?", "iskoláról"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("nevszok", "hatarozaragu", t[0], t[1])));
  return q;
}

export function generateEmotionsVocabulary(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Mi az ellentéte a 'boldog' szónak?", "szomorú"],
    ["Mi az ellentéte a 'mérges' szónak?", "vidám"],
    ["Mi az ellentéte a 'félénk' szónak?", "bátor"],
    ["Mi az ellentéte a 'szorongó' szónak?", "nyugodt"],
    ["Milyen érzelem: 'Nagyon éhes vagyok!'?", "éhség"],
    ["Milyen érzelem: 'Nagyon boldog vagyok!'?", "boldogság"],
    ["Milyen érzelem: 'Elveszett a játékom.'?", "szomorúság"],
    ["Írj egy pozitív érzelem szót!", ["boldog", "vidám", "örömteli"]],
    ["Írj egy negatív érzelem szót!", ["szomorú", "mérges", "félénk"]],
    ["Mi az ellentéte a 'vidám' szónak?", "szomorú"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szokincs", "erzelmek", t[0], t[1])));
  return q;
}

export function generateTimeExpressions(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Mi a 'tegnap' szó?", "időkifejezés"],
    ["'tegnap' mikor volt?", "az előző napon"],
    ["'holnap' mikor lesz?", "a következő napon"],
    ["'ma' mikor van?", "az aktuális napon"],
    ["'reggel' mikor van?", "napkelte és dél között"],
    ["'éjjel' mikor van?", "sötét van, mindenki alszik"],
    ["'délután' mikor van?", "déltől alkonyig"],
    ["'este' mikor van?", "a nap vége előtt"],
    ["Írj egy időkifejezést!", ["tegnap", "ma", "holnap", "reggel", "este"]],
    ["Mi a különbség 'ma' és 'tegnap' között?", "egy nap"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szokincs", "idokifejezesek", t[0], t[1])));
  return q;
}

export function generateIkesVerbs(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 45; i++) {
    const verb = pick(IKES_VERBS, rng);
    const type = i % 3;

    if (type === 0) {
      // Melyik NEM ikes ige?
      const correct = "olvas";
      const wrongs = shuffle(IKES_VERBS, rng).slice(0, 3).map(v => v.inf);
      q.push(createMCQ("helyesiras", "ikes_igek", `Melyik NEM ikes ige?`, correct, wrongs));
    } else if (type === 1) {
      // Jelen ideje
      const correct = verb.jelen;
      const wrongs = shuffle(IKES_VERBS, rng).slice(0, 3).map(v => v.múlt);
      q.push(createMCQ("helyesiras", "ikes_igek", `"${verb.inf}" jelen ideje (E/1):`, correct, wrongs));
    } else {
      // Múlt ideje
      const correct = verb.múlt;
      const wrongs = shuffle(IKES_VERBS, rng).slice(0, 3).map(v => v.jelen);
      q.push(createMCQ("helyesiras", "ikes_igek", `"${verb.inf}" múlt ideje:`, correct, wrongs));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi az ikes ige?", "ik-re végződő ige"],
    ["'eszik' ikes ige?", "igen"],
    ["'iszik' jelen ideje (1. sz.)?", "iszom"],
    ["'alszik' múlt ideje?", "aludt"],
    ["'játszik' jelen ideje (1. sz.)?", "játszom"],
    ["'fekszik' ikes ige?", "igen"],
    ["'születik' múlt ideje?", "született"],
    ["Ikes igék jellemzője?", "ik végű"],
    ["'eszik' múlt ideje?", "evett"],
    ["'iszik' múlt ideje?", "ivott"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("helyesiras", "ikes_igek", t[0], t[1])));
  return q;
}

export function generateConsonantHarmony(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

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
  const typingPool: [string, string | string[]][] = [
    ["Mi a mássalhangzó-törvény?", "hangváltozás toldalékoláskor"],
    ["'szép' + '-ség' = ?", "szépség"],
    ["'boldog' + '-ság' = ?", "boldogság"],
    ["'könnyű' + '-ség' = ?", "könnyűség"],
    ["Mikor változik a mássalhangzó?", "toldalékoláskor"],
    ["'egészség' milyen mássalhangzó-változást mutat?", "z â†’ s váltakozás"],
    ["Miért fontos a mássalhangzó-törvény?", "a helyes kiejtés és írás miatt"],
    ["'szép' szócsaládjából egy példa?", ["szépség", "szépen", "szebb"]],
    ["'könnyű' szócsaládjából egy példa?", ["könnyűség", "könnyebb", "könnyedén"]],
    ["'boldog' + '-talan' = ?", "boldogtalan"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("helyesiras", "masshangzo_torveny", t[0], t[1])));
  return q;
}

export function generateCompoundSentenceBasics(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 45; i++) {
    const sent = pick(COMPOUND_SENTENCE_BASICS, rng);
    const type = i % 3;

    if (type === 0) {
      // Mi az kötőszó jelentése?
      const correct = sent.meaning;
      const wrongs = shuffle(COMPOUND_SENTENCE_BASICS, rng).slice(0, 3).map(s => s.meaning);
      q.push(createMCQ("mondat", "osszetett_alap", `A(z) â€ž${sent.connector}" kötőszó jelentése:`, correct, wrongs));
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
        ["szóból", "szócsoportból", "szótagból"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi az összetett mondat?", "két vagy több egyszerű mondatból áll"],
    ["Milyen kötőszó jelöl összeadást?", "és"],
    ["Milyen kötőszó jelöl ellentétet?", "de"],
    ["Milyen kötőszó jelöl okot?", "mert"],
    ["Milyen kötőszó jelöl választást?", "vagy"],
    ["Milyen kötőszó jelöl célzást?", "hogy"],
    ["'Péter olvas és Mari ír.' - hány mondat?", "kettő"],
    ["Megjelöld az 'és' kötőszót ebben: 'Péter és Mari ír.'", "és"],
    ["Mi az alárendelt mondat?", "a főmondathoz kapcsolódó mellékmondat"],
    ["Mire utal a 'mert'?", "ok-okozati kapcsolatra"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("mondat", "osszetett_alap", t[0], t[1])));
  return q;
}

export function generateDialogueVerbs(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 45; i++) {
    const dverb = pick(DIALOGUE_VERBS, rng);
    const type = i % 3;

    if (type === 0) {
      // Melyik igét használjuk a párbeszédben?
      const correct = dverb.verb;
      const wrongs = shuffle(DIALOGUE_VERBS, rng).slice(0, 3).map(d => d.verb);
      q.push(createMCQ("fogalmazas", "parbeszed", `Melyik parbeszed-ige illik a mondatba?`,
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
      q.push(createMCQ("fogalmazas", "parbeszed", `â€žJátszunk!" â€“ ___ a tanár. (Melyik párbeszéd-ige illik ide?)`, correct, wrongs));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a párbeszéd?", "két személy közötti beszélgetés"],
    ["Milyen igét használunk, ha valaki mond valamit?", "mondta"],
    ["Milyen igét használunk, ha valaki kérdez?", "kérdezte"],
    ["Milyen igét használunk, ha valaki kiált?", "felkiáltott"],
    ["Milyen igét használunk, ha valaki suttog?", "suttogta"],
    ["Párbeszédben az idézet elé mit teszünk?", "idézőjelet"],
    ["Milyen igét használunk, ha valaki mosolyogva mond valamit?", "mosolygott"],
    ["Mi a párbeszéd jelölője?", "idézőjel vagy gondolatjel"],
    ["Milyen igét használunk, ha valaki visít?", "visított"],
    ["Írj egy párbeszéd-igét!", ["mondta", "kérdezte", "felkiáltott", "suttogta"]],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("fogalmazas", "parbeszed", t[0], t[1])));
  return q;
}

// â”€â”€â”€ Export generator map â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export const G3_Generators_Hungarian = {
  jelen: generateTensePresent,
  mult: generateTensePast,
  jovo: generateTenseFuture,
  felszolito: generateImperativeMood,
  felteteles: generateConditionalMood,
  fonevragozas: generateNounDeclension,
  melleknevfokozas: generateAdjectiveDegree,
  birtokos: generatePossessivePersonal,
  hatarozaragu: generateAdverbialCasesAdvanced,
  osszetett_halado: generateCompoundWordsAdvanced,
  szocsaladok: generateWordFamilies,
  "megertés": generateTextComprehension,
  osszefoglalas: generateTextSummary,
  szolasok: generateIdioms,
  kozmondasok: generateProverbs,
  erzelmek: generateEmotionsVocabulary,
  idokifejezesek: generateTimeExpressions,
  "egybeíras": generateSpellingTogether,
  kuloniras: generateSpellingApart,
  ikes_igek: generateIkesVerbs,
  masshangzo_torveny: generateConsonantHarmony,
  elbeszeles: generateCompositionNarrative,
  leiras: generateCompositionDescription,
  parbeszed: generateDialogueVerbs,
  targy: generateObjectRole,
  hatarozo: generateAdverbialRole,
  jelzo: generateAdjectiveRole,
  osszetett_alap: generateCompoundSentenceBasics,
};



