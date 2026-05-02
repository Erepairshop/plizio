// lib/hungarianGenerators3.ts
// Grade 3 (3. osztÃ¡ly) Hungarian generators
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
  { inf: "Ã­rni", te_sg: "Ã­rj", o_sg: "Ã­rjon", mi: "Ã­rjunk", ti: "Ã­rjatok", ok: "Ã­rjanak" },
  { inf: "futni", te_sg: "fuss", o_sg: "fusson", mi: "fussunk", ti: "fussatok", ok: "fussanak" },
  { inf: "olvasni", te_sg: "olvass", o_sg: "olvasson", mi: "olvassunk", ti: "olvassatok", ok: "olvassanak" },
  { inf: "jÃ¡tszani", te_sg: "jÃ¡tssz", o_sg: "jÃ¡tsszon", mi: "jÃ¡tsszunk", ti: "jÃ¡tszatok", ok: "jÃ¡tszanak" },
  { inf: "enni", te_sg: "egyÃ©l", o_sg: "egyen", mi: "egyÃ¼nk", ti: "egyetek", ok: "egyenek" },
  { inf: "inni", te_sg: "igyÃ¡l", o_sg: "igyon", mi: "igyunk", ti: "igyatok", ok: "igyanak" },
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
  { nom: "hÃ¡z", sg1: "hÃ¡zam", sg2: "hÃ¡zad", sg3: "hÃ¡za", pl1: "hÃ¡zunk", pl2: "hÃ¡zatok", pl3: "hÃ¡zuk" },
  { nom: "kÃ¶nyv", sg1: "kÃ¶nyvem", sg2: "kÃ¶nyved", sg3: "kÃ¶nyve", pl1: "kÃ¶nyvÃ¼nk", pl2: "kÃ¶nyvetek", pl3: "kÃ¶nyvÃ¼k" },
  { nom: "macska", sg1: "macskÃ¡m", sg2: "macskÃ¡d", sg3: "macskÃ¡ja", pl1: "macskÃ¡nk", pl2: "macskÃ¡tok", pl3: "macskÃ¡juk" },
  { nom: "ceruza", sg1: "ceruzÃ¡m", sg2: "ceruzÃ¡d", sg3: "ceruzÃ¡ja", pl1: "ceruzÃ¡nk", pl2: "ceruzÃ¡tok", pl3: "ceruzÃ¡juk" },
  { nom: "jÃ¡tÃ©k", sg1: "jÃ¡tÃ©kom", sg2: "jÃ¡tÃ©kod", sg3: "jÃ¡tÃ©ka", pl1: "jÃ¡tÃ©kunk", pl2: "jÃ¡tÃ©kotok", pl3: "jÃ¡tÃ©kuk" },
];

const ADVERBIAL_CASE_ADVANCED = [
  { nom: "hÃ¡z", comitative: "hÃ¡zzal", ablative: "hÃ¡zbÃ³l", delative: "hÃ¡zrÃ³l" },
  { nom: "iskola", comitative: "iskolÃ¡val", ablative: "iskolÃ¡bÃ³l", delative: "iskolÃ¡rÃ³l" },
  { nom: "szÃ©k", comitative: "szÃ©kkel", ablative: "szÃ©kbÅ‘l", delative: "szÃ©krÅ‘l" },
  { nom: "asztal", comitative: "asztallal", ablative: "asztalbÃ³l", delative: "asztalrÃ³l" },
  { nom: "toll", comitative: "tollal", ablative: "tollbÃ³l", delative: "tollrÃ³l" },
];

const EMOTIONS_VOCABULARY = [
  { emotion: "boldog", opposite: "szomorÃº", example: "A gyerek boldog volt a csokiÃ©rt." },
  { emotion: "szomorÃº", opposite: "boldog", example: "SzomorÃº volt, mert elveszett a jÃ¡tÃ©ka." },
  { emotion: "mÃ©rges", opposite: "vidÃ¡m", example: "MÃ©rges lett, mert nem lehetett jÃ¡tszani." },
  { emotion: "fÃ©lÃ©nk", opposite: "bÃ¡tor", example: "FÃ©lÃ©nk gyerek nem szeret nagyobbakkal jÃ¡tszani." },
  { emotion: "szorongÃ³", opposite: "nyugodt", example: "SzorongÃ³ volt az elsÅ‘ nap az iskolÃ¡ban." },
  { emotion: "vidÃ¡m", opposite: "mÃ©rges", example: "VidÃ¡m Ã©s nevetÅ‘s volt az egÃ©sz nap." },
  { emotion: "kÃ­vÃ¡ncsi", opposite: "kÃ¶zÃ¶mbÃ¶s", example: "KÃ­vÃ¡ncsiak voltunk az Ãºj jÃ¡tÃ©kra." },
];

const TIME_EXPRESSIONS = [
  { word: "tegnap", meaning: "az elÅ‘zÅ‘ napon", example: "Tegnap futottunk az iskolÃ¡ban." },
  { word: "ma", meaning: "az aktuÃ¡lis napon", example: "Ma szÃ©p az idÅ‘." },
  { word: "holnap", meaning: "a kÃ¶vetkezÅ‘ napon", example: "Holnap lesz az iskola." },
  { word: "reggel", meaning: "napkelte Ã©s dÃ©l kÃ¶zÃ¶tt", example: "Reggel korÃ¡n kelÃ¼nk fel." },
  { word: "Ã©jjel", meaning: "sÃ¶tÃ©t van, mindenki alszik", example: "Ã‰jjel csillagok fÃ©nylenek az Ã©gen." },
  { word: "dÃ©lutÃ¡n", meaning: "dÃ©ltÅ‘l alkonyig", example: "DÃ©lutÃ¡n kint jÃ¡tszottunk." },
  { word: "este", meaning: "a nap vÃ©ge elÅ‘tt", example: "Este vacsora utÃ¡n jÃ¡tszunk." },
];

const IKES_VERBS = [
  { inf: "eszik", jelen: "eszem", mÃºlt: "ettem" },
  { inf: "iszik", jelen: "iszom", mÃºlt: "ittam" },
  { inf: "alszik", jelen: "alszom", mÃºlt: "aludtam" },
  { inf: "jatszik", jelen: "jatszom", mÃºlt: "jatszottam" },
  { inf: "fekszik", jelen: "fekszem", mÃºlt: "fekudtem" },
  { inf: "szuletik", jelen: "szuletek", mÃºlt: "szulettem" },
];

const CONSONANT_HARMONY_RULES = [
  { word: "szepsÃ©g", rule: "mÃ¡ssalhangzÃ³k talÃ¡lkozÃ¡sa" },
  { word: "egeszsÃ©g", rule: "mÃ¡ssalhangzÃ³-kapcsolat egyszerÅ±sÃ¶dÃ©se" },
  { word: "jatssz", rule: "teljes hasonulÃ¡s" },
  { word: "otthon", rule: "rÃ©szleges hasonulÃ¡s" },
  { word: "kezzel", rule: "teljes hasonulÃ¡s" },
];

const COMPOUND_SENTENCE_BASICS = [
  { connector: "es", example: "Peter olvas es Mari ir.", meaning: "hozzaadas" },
  { connector: "de", example: "Szep az ido, de hideg van.", meaning: "ellentet" },
  { connector: "mert", example: "Maradtunk otthon, mert esett az eso.", meaning: "ok" },
  { connector: "hogy", example: "Azt akarom, hogy jatszunk.", meaning: "alarendeles" },
  { connector: "vagy", example: "Almat vagy kortet akarsz?", meaning: "valasztas" },
];

const DIALOGUE_VERBS = [
  { verb: "mondta", example: "\"Ma jÃ¡tszunk\" mondta a tanÃ¡r." },
  { verb: "kÃ©rdezte", example: "\"Kinek van ceruzÃ¡ja?\" kÃ©rdezte PÃ©ter." },
  { verb: "felkiÃ¡ltott", example: "\"Futjunk!\" felkiÃ¡ltott Mari." },
  { verb: "suttogta", example: "\"NÃ©zd meg!\" suttogta PÃ¡l." },
  { verb: "visÃ­tott", example: "\"Nem!\" visÃ­tott a gyerek." },
  { verb: "mosolygott", example: "\"KÃ¶szÃ¶nÃ¶m\" mosolygott az Ã¶regasszony." },
];

const VERBS_TENSE = [
  { inf: "Ã­rni", jelen: "Ã­r", mÃºlt: "Ã­rt", jÃ¶vÅ‘: "fog Ã­rni" },
  { inf: "futni", jelen: "fut", mÃºlt: "futott", jÃ¶vÅ‘: "fog futni" },
  { inf: "olvasni", jelen: "olvas", mÃºlt: "olvasott", jÃ¶vÅ‘: "fog olvasni" },
  { inf: "jÃ¡tszani", jelen: "jÃ¡tszik", mÃºlt: "jÃ¡tszott", jÃ¶vÅ‘: "fog jÃ¡tszani" },
  { inf: "enni", jelen: "eszik", mÃºlt: "evett", jÃ¶vÅ‘: "fog enni" },
  { inf: "inni", jelen: "iszik", mÃºlt: "ivott", jÃ¶vÅ‘: "fog inni" },
  { inf: "szÃ¡llni", jelen: "szÃ¡ll", mÃºlt: "szÃ¡llt", jÃ¶vÅ‘: "fog szÃ¡llni" },
  { inf: "tanÃ­tani", jelen: "tanÃ­t", mÃºlt: "tanÃ­tott", jÃ¶vÅ‘: "fog tanÃ­tani" },
  { inf: "kÃ©rdezni", jelen: "kÃ©rdez", mÃºlt: "kÃ©rdezett", jÃ¶vÅ‘: "fog kÃ©rdezni" },
  { inf: "felelni", jelen: "felel", mÃºlt: "felelt", jÃ¶vÅ‘: "fog felelni" },
];

const NOUNS_DECLINE = [
  { nom: "kutya", acc: "kutyÃ¡t", dat: "kutyÃ¡nak", loc: "kutyÃ¡nÃ¡l", ins: "kutyÃ¡val" },
  { nom: "macska", acc: "macskÃ¡t", dat: "macskÃ¡nak", loc: "macskÃ¡nÃ¡l", ins: "macskÃ¡val" },
  { nom: "hÃ¡z", acc: "hÃ¡zat", dat: "hÃ¡znak", loc: "hÃ¡zban", ins: "hÃ¡zzal" },
  { nom: "szÃ©k", acc: "szÃ©ket", dat: "szÃ©knek", loc: "szÃ©kben", ins: "szÃ©kkel" },
  { nom: "asztal", acc: "asztalt", dat: "asztalnak", loc: "asztalon", ins: "asztallal" },
  { nom: "kÃ¶nyv", acc: "kÃ¶nyvet", dat: "kÃ¶nyvnek", loc: "kÃ¶nyvben", ins: "kÃ¶nyvvel" },
  { nom: "lÃ¡ny", acc: "lÃ¡nyt", dat: "lÃ¡nynak", loc: "lÃ¡nynÃ¡l", ins: "lÃ¡nnyal" },
  { nom: "fiÃº", acc: "fiÃºt", dat: "fiÃºnak", loc: "fiÃºnÃ¡l", ins: "fiÃºval" },
];

const ADJECTIVES_DEGREE = [
  { base: "szÃ©p", comp: "szebb", sup: "legszebb" },
  { base: "nagy", comp: "nagyobb", sup: "legnagyobb" },
  { base: "kicsi", comp: "kisebb", sup: "legkisebb" },
  { base: "gyors", comp: "gyorsabb", sup: "leggyorsabb" },
  { base: "lassÃº", comp: "lassabb", sup: "leglassabb" },
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
  { root: "fut", words: ["futÃ¡s", "futÃ³", "futball", "futott"] },
  { root: "Ã­r", words: ["Ã­rÃ¡s", "Ã­rÃ³", "Ã­rott", "Ã­rt"] },
  { root: "olvas", words: ["olvasÃ¡s", "olvasÃ³", "olvasott", "felolvas"] },
  { root: "tanul", words: ["tanulÃ¡s", "tanulÃ³", "tanult", "megtanul"] },
];

const IDIOMS = [
  { idiom: "Ã©hes mint a farkas", meaning: "nagyon Ã©hes" },
  { idiom: "tanÃ¡cstalan, mint a kismadÃ¡r", meaning: "nem tudja, mit csinÃ¡ljon" },
  { idiom: "lÃ³vÃ¡ tette", meaning: "megtÃ©vesztette, becsapta" },
  { idiom: "a szÃ­vÃ©be zÃ¡rta", meaning: "nagyon megszerette" },
  { idiom: "majd kiugrik a bÅ‘rÃ©bÅ‘l", meaning: "nagyon boldog vagy izgatott" },
  { idiom: "sÅ±rÅ± lett a levegÅ‘", meaning: "feszÃ¼lt, kellemetlen lett a helyzet" },
];

const PROVERBS = [
  { proverb: "Ki korÃ¡n kel, aranyat lel", meaning: "a szorgalom hasznos" },
  { proverb: "Sok kicsi sokra megy", meaning: "a kicsi dolgok Ã¶sszeadÃ³dnak" },
  { proverb: "Nem minden arany, ami fÃ©nylik", meaning: "nem minden olyan jÃ³, ahogy nÃ©z ki" },
  { proverb: "Megvert kutya nyalogatja az ura kezÃ©t", meaning: "a gyenge beletÃ¶rÅ‘dik a sorsÃ¡ba" },
];

const SPELLING_TOGETHER = [
  { word: "mindenhol", rule: "egybe" },
  { word: "vÃ©gig", rule: "egybe" },
  { word: "Ã¶ssze", rule: "egybe" },
  { word: "visszaÃ­r", rule: "egybe" },
];

const SPELLING_APART = [
  { word: "mÃ¡s Ã©s mÃ¡s", rule: "kÃ¼lÃ¶n" },
  { word: "olyan Ã©s olyan", rule: "kÃ¼lÃ¶n" },
  { word: "Ã­gy Ã©s Ãºgy", rule: "kÃ¼lÃ¶n" },
];

const COMPOSITION_NARRATIVE = [
  { element: "kezdet", example: "Egyszer volt, hol nem volt..." },
  { element: "cselekmÃ©ny", example: "A hÅ‘s kalandokat Ã©lt meg" },
  { element: "fordulÃ³pont", example: "De akkor tÃ¶rtÃ©nt valami vÃ¡ratlan" },
  { element: "befejezÃ©s", example: "Ãgy vÃ©get Ã©rt a tÃ¶rtÃ©net" },
];

const COMPOSITION_DESCRIPTION = [
  { element: "kÃ¼lsÅ‘", example: "KÃ©k szemei voltak" },
  { element: "szemÃ©lyisÃ©g", example: "Okos Ã©s kedves volt" },
  { element: "viselkedÃ©s", example: "Mindig segÃ­tÅ‘kÃ©sz" },
  { element: "egyÃ©b", example: "Szerette az elÅ‘adÃ¡sokat" },
];

const TEXT_COMPREH = [
  { question: "Mi volt a fÅ‘ esemÃ©ny?", type: "lÃ©nyeg" },
  { question: "Mikor tÃ¶rtÃ©nt?", type: "idÅ‘" },
  { question: "Hol tÃ¶rtÃ©nt?", type: "hely" },
  { question: "Ki volt a fÅ‘szereplÅ‘?", type: "szemÃ©ly" },
  { question: "MiÃ©rt tÃ¶rtÃ©nt ez?", type: "ok" },
];

const OBJECT_ROLE = [
  { sentence: "PÃ©ter egy kÃ¶nyvet olvas.", target: "egy kÃ¶nyvet", role: "tÃ¡rgy" },
  { sentence: "A lÃ¡ny az asztalt tolta.", target: "az asztalt", role: "tÃ¡rgy" },
  { sentence: "Mari megtalÃ¡lta a ceruzÃ¡jÃ¡t.", target: "a ceruzÃ¡jÃ¡t", role: "tÃ¡rgy" },
];

const ADVERBIAL_ROLE = [
  { sentence: "A gyerek az iskolÃ¡ban jÃ¡tszik.", target: "az iskolÃ¡ban", role: "hatÃ¡rozÃ³ (hely)" },
  { sentence: "Reggel elindultunk.", target: "Reggel", role: "hatÃ¡rozÃ³ (idÅ‘)" },
  { sentence: "Gyorsan futottak.", target: "Gyorsan", role: "hatÃ¡rozÃ³ (mÃ³d)" },
];

const ADJECTIVE_ROLE = [
  { sentence: "A piros virÃ¡g szÃ©p.", target: "piros", role: "jelzÅ‘" },
  { sentence: "Az okos fiÃº tanul.", target: "okos", role: "jelzÅ‘" },
  { sentence: "A nagy hÃ¡z Ã¡ll az Ãºton.", target: "nagy", role: "jelzÅ‘" },
];

// â”€â”€â”€ GENERATOR FUNCTIONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export function generateTensePresent(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    const verb = pick(VERBS_TENSE, rng);

    if (type === 0) {
      // Melyik a jelen idÅ‘?
      const correct = verb.jelen;
      const wrongs = shuffle(VERBS_TENSE, rng).slice(0, 3).map(v => v.mÃºlt);
      q.push(createMCQ("igeidok", "jelen", `"${verb.inf}" jelen ideje:`, correct, wrongs));
    } else if (type === 1) {
      // Melyik mondatban van jelen idÅ‘?
      const correct = `Az ember ${verb.jelen} naponta.`;
      const wrongs = [
        `Az ember ${verb.mÃºlt} tegnap.`,
        `Az ember ${verb.jÃ¶vÅ‘} majd.`,
        "A macska nyÃ¡vog naponta.",
      ];
      q.push(createMCQ("igeidok", "jelen", "Melyik mondatban van jelen idÅ‘?", correct, wrongs));
    } else {
      // EgÃ©szÃ­tsd ki!
      const correct = verb.jelen;
      const wrongs = shuffle(VERBS_TENSE, rng).slice(0, 3).map(v => v.mÃºlt);
      q.push(createMCQ("igeidok", "jelen", `A gyerek... a jÃ¡tÃ©kkal. (${verb.inf})`, correct, wrongs));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a jelen idÅ‘?", "most folyÃ³ cselekvÃ©st jelÃ¶l"],
    ["'Ã­r' jelen ideje, Ã©n?", "Ã­rok"],
    ["'fut' jelen ideje, Å‘?", "fut"],
    ["'olvas' jelen ideje, mi?", "olvasunk"],
    ["'tanÃ­t' jelen ideje, te?", "tanÃ­tasz"],
    ["'kÃ©rdez' jelen ideje, Å‘k?", "kÃ©rdeznek"],
    ["Mire kÃ©rdez a jelen idÅ‘?", "most mit csinÃ¡l?"],
    ["'felel' jelen ideje, Ã©n?", "felelek"],
    ["'szÃ¡ll' jelen ideje, Å‘?", "szÃ¡ll"],
    ["Jelen idejÅ± ige: 'A gyerek ... az iskolÃ¡ban.'", "tanul"],
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
      const correct = verb.mÃºlt;
      const wrongs = shuffle(VERBS_TENSE, rng).slice(0, 3).map(v => v.jelen);
      q.push(createMCQ("igeidok", "mult", `"${verb.inf}" mÃºlt ideje:`, correct, wrongs));
    } else if (type === 1) {
      const correct = `Tegnap ${verb.mÃºlt} Ã³rÃ¡kon Ã¡t.`;
      const wrongs = [
        `Tegnap ${verb.jelen} Ã³rÃ¡kon Ã¡t.`,
        `Holnap ${verb.jÃ¶vÅ‘} Ã³rÃ¡kon Ã¡t.`,
        "Ma olvasok egy kÃ¶nyvet.",
      ];
      q.push(createMCQ("igeidok", "mult", "Melyik mondatban van mÃºlt idÅ‘?", correct, wrongs));
    } else {
      const correct = verb.mÃºlt;
      const wrongs = shuffle(VERBS_TENSE, rng).slice(0, 3).map(v => v.jelen);
      q.push(createMCQ("igeidok", "mult", `Az elÅ‘zÅ‘ nap... a hÃ¡zat. (${verb.inf})`, correct, wrongs));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a mÃºlt idÅ‘?", "korÃ¡bban vÃ©gbement cselekvÃ©st jelÃ¶l"],
    ["'Ã­r' mÃºlt ideje?", "Ã­rt"],
    ["'fut' mÃºlt ideje?", "futott"],
    ["'olvas' mÃºlt ideje?", "olvasott"],
    ["'jÃ¡tszik' mÃºlt ideje?", "jÃ¡tszott"],
    ["'eszik' mÃºlt ideje?", "evett"],
    ["'iszik' mÃºlt ideje?", "ivott"],
    ["Mire kÃ©rdez a mÃºlt idÅ‘?", "mit csinÃ¡lt?"],
    ["'tanÃ­t' mÃºlt ideje?", "tanÃ­tott"],
    ["MÃºlt idejÅ± ige: 'Tegnap a gyerek ...'", ["futott", "olvasott", "tanult"]],
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
      const correct = verb.jÃ¶vÅ‘;
      const wrongs = [verb.jelen, verb.mÃºlt, "fogunk enni"];
      q.push(createMCQ("igeidok", "jovo", `"${verb.inf}" jÃ¶vÅ‘ ideje:`, correct, wrongs));
    } else if (type === 1) {
      const correct = `Holnap ${verb.jÃ¶vÅ‘}.`;
      const wrongs = [
        `Ma ${verb.jelen}.`,
        `Tegnap ${verb.mÃºlt}.`,
        "Holnap olvasni fogunk.",
      ];
      q.push(createMCQ("igeidok", "jovo", "Melyik mondatban van jÃ¶vÅ‘ idÅ‘?", correct, wrongs));
    } else {
      const correct = verb.jÃ¶vÅ‘;
      const wrongs = [verb.jelen, verb.mÃºlt, "fog futni"];
      q.push(createMCQ("igeidok", "jovo", `A gyerek... majd otthon. (${verb.inf})`, correct, wrongs));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a jÃ¶vÅ‘ idÅ‘?", "ezutÃ¡n bekÃ¶vetkezÅ‘ cselekvÃ©st jelÃ¶l"],
    ["'Ã­r' jÃ¶vÅ‘ ideje?", "fog Ã­rni"],
    ["'fut' jÃ¶vÅ‘ ideje?", "fog futni"],
    ["'olvas' jÃ¶vÅ‘ ideje?", "fog olvasni"],
    ["'jÃ¡tszik' jÃ¶vÅ‘ ideje?", "fog jÃ¡tszani"],
    ["'eszik' jÃ¶vÅ‘ ideje?", "fog enni"],
    ["Mire kÃ©rdez a jÃ¶vÅ‘ idÅ‘?", "majd mit fog csinÃ¡lni?"],
    ["'tanÃ­t' jÃ¶vÅ‘ ideje?", "fog tanÃ­tani"],
    ["JÃ¶vÅ‘ idÅ‘ jele?", "fog"],
    ["JÃ¶vÅ‘ idejÅ± mondat: 'Holnap ...'", ["fog futni", "fog olvasni", "fog tanulni"]],
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
      q.push(createMCQ("nevszok", "fonevragozas", `"${noun.nom}" tÃ¡rgyrag (tÃ¡rgyeset):`, correct, wrongs));
    } else if (type === 1) {
      const correct = noun.loc;
      const wrongs = shuffle(NOUNS_DECLINE, rng).slice(0, 3).map(n => n.ins);
      q.push(createMCQ("nevszok", "fonevragozas", `"${noun.nom}" helyrag:`, correct, wrongs));
    } else {
      const correct = noun.ins;
      const wrongs = shuffle(NOUNS_DECLINE, rng).slice(0, 3).map(n => n.dat);
      q.push(createMCQ("nevszok", "fonevragozas", `"${noun.nom}" eszkÃ¶zrag:`, correct, wrongs));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["'kutya' tÃ¡rgyesete?", "kutyÃ¡t"],
    ["'macska' tÃ¡rgyesete?", "macskÃ¡t"],
    ["'hÃ¡z' tÃ¡rgyesete?", "hÃ¡zat"],
    ["'kÃ¶nyv' tÃ¡rgyesete?", "kÃ¶nyvet"],
    ["'lÃ¡ny' eszkÃ¶zragos alakja?", "lÃ¡nnyal"],
    ["'fiÃº' eszkÃ¶zragos alakja?", "fiÃºval"],
    ["Mi a tÃ¡rgyrag?", "-t"],
    ["'szÃ©k' helyragos alakja?", "szÃ©kben"],
    ["'asztal' eszkÃ¶zragos alakja?", "asztallal"],
    ["'hÃ¡z' rÃ©szeshatÃ¡rozÃ³ja?", "hÃ¡znak"],
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
      q.push(createMCQ("nevszok", "melleknevfokozas", `"${adj.base}" kÃ¶zÃ©pfoka:`, correct, wrongs));
    } else if (type === 1) {
      const correct = adj.sup;
      const wrongs = shuffle(ADJECTIVES_DEGREE, rng).slice(0, 3).map(a => a.comp);
      q.push(createMCQ("nevszok", "melleknevfokozas", `"${adj.base}" felsÅ‘foka:`, correct, wrongs));
    } else {
      const correct = adj.base;
      const wrongs = shuffle(ADJECTIVES_DEGREE, rng).slice(0, 3).map(a => a.comp);
      q.push(createMCQ("nevszok", "melleknevfokozas", `Melyik az alapfok? "${adj.comp}"-bÅ‘l:`, correct, wrongs));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["'szÃ©p' kÃ¶zÃ©pfoka?", "szebb"],
    ["'szÃ©p' felsÅ‘foka?", "legszebb"],
    ["'nagy' kÃ¶zÃ©pfoka?", "nagyobb"],
    ["'nagy' felsÅ‘foka?", "legnagyobb"],
    ["'kicsi' kÃ¶zÃ©pfoka?", "kisebb"],
    ["'gyors' felsÅ‘foka?", "leggyorsabb"],
    ["'magas' kÃ¶zÃ©pfoka?", "magasabb"],
    ["'hideg' kÃ¶zÃ©pfoka?", "hidegebb"],
    ["MellÃ©knÃ©v felsÅ‘foka milyen elÅ‘taggal kezdÅ‘dik?", "leg-"],
    ["'lassÃº' kÃ¶zÃ©pfoka?", "lassabb"],
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
      q.push(createMCQ("szo", "osszetett_haladÃ³", `Melyik az Ã¶sszetett szÃ³? "${comp.parts.join('+')}"`, correct, wrongs));
    } else if (type === 1) {
      const correct = "Ã¶sszetett szÃ³";
      const wrongs = ["egyszerÅ± szÃ³", "ragozott szÃ³", "elÅ‘taggal ellÃ¡tott"];
      q.push(createMCQ("szo", "osszetett_haladÃ³", `"${comp.comp}" milyen szÃ³?`, correct, wrongs));
    } else {
      const correct = comp.parts[0];
      const wrongs = shuffle(COMPOUND_WORDS, rng).slice(0, 3).map(c => c.comp);
      q.push(createMCQ("szo", "osszetett_haladÃ³", `"${comp.comp}" elsÅ‘ rÃ©sze:`, correct, wrongs));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["HÃ¡ny rÃ©szbÅ‘l Ã¡ll az Ã¶sszetett szÃ³?", "kettÅ‘"],
    ["'osztÃ¡lyterem' elsÅ‘ tagja?", "osztÃ¡ly"],
    ["'szÃ¶vegÃ©rtÃ©s' mÃ¡sodik tagja?", "Ã©rtÃ©s"],
    ["Ãrj egy Ã¶sszetett szÃ³t!", ["osztÃ¡lyterem", "szÃ¶vegÃ©rtÃ©s", "mondatalkotÃ¡s"]],
    ["Mi az Ã¶sszetett szÃ³?", "kÃ©t szÃ³bÃ³l Ã¡llÃ³ szÃ³"],
    ["'Ã¶nÃ¡llÃ³' tagjai?", ["Ã¶n", "Ã¡llÃ³"]],
    ["'kÃ¶zÃ¶s' Ã¶sszetett szÃ³?", "nem"],
    ["Milyen szÃ³ a 'nappal'?", "Ã¶sszetett szÃ³"],
    ["'gondolkodÃ¡s' elsÅ‘ tagja?", "gondol"],
    ["MiÃ©rt hasznos az Ã¶sszetett szÃ³?", "Ãºj fogalmak jelÃ¶lÃ©sÃ©re"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szo", "osszetett_haladÃ³", t[0], t[1])));
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
      q.push(createMCQ("szo", "szocsaladok", `"${fam.root}" szÃ³csalÃ¡djÃ¡ba tartozik:`, correct, wrongs));
    } else if (type === 1) {
      const correct = "szÃ³csalÃ¡d";
      const wrongs = ["szÃ³tÃ¡r", "Ã¶sszetett szÃ³", "homonÃ­mÃ¡k"];
      q.push(createMCQ("szo", "szocsaladok", `Az olyan szavak, amelyek ugyanabbÃ³l a gyÃ¶kÃ©rbÅ‘l jÃ¶nnek:`, correct, wrongs));
    } else {
      const correct = fam.root;
      const wrongs = shuffle(WORD_FAMILIES, rng).slice(0, 3).map(f => f.root);
      q.push(createMCQ("szo", "szocsaladok", `"${pick(fam.words, rng)}" szÃ³csalÃ¡djÃ¡nak gyÃ¶ke:`, correct, wrongs));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a szÃ³csalÃ¡d?", "azonos gyÃ¶kbÅ‘l szÃ¡rmazÃ³ szavak"],
    ["'fut' szÃ³csalÃ¡djÃ¡ba tartozik?", ["futÃ¡s", "futÃ³", "futball"]],
    ["'Ã­r' szÃ³csalÃ¡djÃ¡ba tartozik?", ["Ã­rÃ¡s", "Ã­rÃ³", "Ã­rott"]],
    ["'olvas' szÃ³csalÃ¡djÃ¡nak gyÃ¶ke?", "olvas"],
    ["'tanul' szÃ³csalÃ¡djÃ¡bÃ³l Ã­rj egyet!", ["tanulÃ¡s", "tanulÃ³", "tanult"]],
    ["Mi a szÃ³csalÃ¡d gyÃ¶ke?", "az alap szÃ³tÅ‘"],
    ["'futÃ¡s' gyÃ¶ke?", "fut"],
    ["'olvasÃ¡s' gyÃ¶ke?", "olvas"],
    ["'tanulÃ¡s' gyÃ¶ke?", "tanul"],
    ["MiÃ©rt fontos a szÃ³csalÃ¡d ismerete?", "segÃ­t a szavak megÃ©rtÃ©sÃ©ben"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szo", "szocsaladok", t[0], t[1])));
  return q;
}

export function generateTextComprehension(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    const text = "A fiÃº a parkban jÃ¡tszott. Egy labdÃ¡t dobott magasra. A labda a fÃ¡k kÃ¶zÃ¶tt landolt. A fiÃº nevetett Ã©s ismÃ©t dobott.";

    if (type === 0) {
      q.push(createMCQ("szoveg", "megertÃ©s", `"Hol jÃ¡tszott a fiÃº?" VÃ¡lasz a szÃ¶vegbÅ‘l:`,
        "a parkban", ["az iskolÃ¡ban", "az utcÃ¡n", "az udvaron"]));
    } else if (type === 1) {
      q.push(createMCQ("szoveg", "megertÃ©s", `"Mit dobott a fiÃº?" VÃ¡lasz a szÃ¶vegbÅ‘l:`,
        "labdÃ¡t", ["kÃ¶nyvet", "kÅ‘vet", "fÃ¡t"]));
    } else {
      q.push(createMCQ("szoveg", "megertÃ©s", `"Milyen volt a fiÃº hangulata?" A szÃ¶veg alapjÃ¡n:`,
        "boldog", ["szomorÃº", "mÃ©rges", "ijedt"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Hol jÃ¡tszott a fiÃº?", "a parkban"],
    ["Mit dobott a fiÃº?", "labdÃ¡t"],
    ["Milyen volt a fiÃº hangulata?", "boldog"],
    ["Hova landolt a labda?", "a fÃ¡k kÃ¶zÃ¶tt"],
    ["Mit csinÃ¡lt a fiÃº Ãºjra?", "dobott"],
    ["Mi a szÃ¶vegÃ©rtÃ©s?", "a szÃ¶veg megÃ©rtÃ©se"],
    ["Mi a fÅ‘ esemÃ©ny a szÃ¶vegben?", ["labdadobÃ¡s", "jÃ¡tÃ©k a parkban"]],
    ["Ki nevetett a szÃ¶vegben?", "a fiÃº"],
    ["HÃ¡ny szÃ³t kell odafigyelni olvasÃ¡snÃ¡l?", "minden szÃ³ra"],
    ["Mit csinÃ¡lt a fiÃº a parkban?", "jÃ¡tszott"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("szoveg", "megertÃ©s", t[0], t[1])));
  return q;
}

export function generateTextSummary(seed?: number): CurriculumQuestion[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumQuestion[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;

    if (type === 0) {
      q.push(createMCQ("szoveg", "osszefoglalas", "A szÃ¶veg lÃ©nyege egy mondatban:",
        "a fiÃº jÃ¡tszott",
        ["a fiÃº fut", "a fiÃº alszik", "a fiÃº eszik"]));
    } else if (type === 1) {
      q.push(createMCQ("szoveg", "osszefoglalas", "Melyik a szÃ¶veg fÅ‘mondanivalÃ³ja?",
        "A fiÃº jÃ³l szÃ³rakozott",
        ["A park szÃ©p", "A labda piros", "Az idÅ‘ meleg volt"]));
    } else {
      q.push(createMCQ("szoveg", "osszefoglalas", "Mit tudunk meg a szÃ¶vegbÅ‘l?",
        "A fiÃº a parkban jÃ¡tszott",
        ["Sok gyerek volt ott", "SzivÃ¡rvÃ¡ny volt az Ã©gen", "EsÅ‘ volt"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a szÃ¶veg lÃ©nyege?", "a fiÃº jÃ³l szÃ³rakozott"],
    ["Mit tanulunk a szÃ¶veg Ã¶sszefoglalÃ¡sÃ¡nÃ¡l?", "a fÅ‘ esemÃ©ny kiemelÃ©se"],
    ["Mivel lehet Ã¶sszefoglalni egy szÃ¶veget?", "1-2 mondattal"],
    ["Mire figyelÃ¼nk szÃ¶veg Ã¶sszefoglalÃ¡snÃ¡l?", "a fÅ‘ esemÃ©nyre"],
    ["Hogyan kezdjÃ¼k az Ã¶sszefoglalÃ¡st?", ["A szÃ¶veg arrÃ³l szÃ³l...", "A fÅ‘szereplÅ‘..."]],
    ["Mi a szÃ¶veg fÅ‘mondanivalÃ³ja?", "A fiÃº jÃ³l szÃ³rakozott"],
    ["Ki volt a szÃ¶veg fÅ‘szereplÅ‘je?", "a fiÃº"],
    ["Hol jÃ¡tszÃ³dott a szÃ¶veg?", "parkban"],
    ["Mikor jÃ¡tszÃ³dott?", ["nappal", "valÃ³szÃ­nÅ±leg nappal"]],
    ["Mit tanulsz szÃ¶veg Ã¶sszefoglalÃ¡sÃ¡bÃ³l?", "lÃ©nyeglÃ¡tÃ¡st"],
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
      q.push(createMCQ("szokincs", "szolasok", `"${idiom.idiom}" jelentÃ©se:`,
        idiom.meaning,
        ["valami mÃ¡st jelent", "nem tudjuk", "mÃ¡s szÃ³lÃ¡s"]));
    } else if (type === 1) {
      const correct = idiom.idiom;
      const wrongs = shuffle(IDIOMS, rng).slice(0, 3).map(i => i.idiom);
      q.push(createMCQ("szokincs", "szolasok", `Melyik szÃ³lÃ¡s jelenti ezt: "${idiom.meaning}"?`, correct, wrongs));
    } else {
      q.push(createMCQ("szokincs", "szolasok", `A szÃ³lÃ¡sok olyan kifejezÃ©sek, amelyek:`,
        "Ã¡tvitt Ã©rtelemben hasznÃ¡latosak",
        ["szÃ³ szerintiek", "mindig igaz", "archaikusak"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a szÃ³lÃ¡s?", "Ã¡tvitt Ã©rtelmÅ± kifejezÃ©s"],
    ["'Ã©hes mint a farkas' jelentÃ©se?", "nagyon Ã©hes"],
    ["'lÃ³vÃ¡ tette' jelentÃ©se?", "megtÃ©vesztette"],
    ["'a szÃ­vÃ©be zÃ¡rta' jelentÃ©se?", "nagyon megszerette"],
    ["'majd kiugrik a bÅ‘rÃ©bÅ‘l' jelentÃ©se?", "nagyon boldog vagy izgatott"],
    ["'sÅ±rÅ± lett a levegÅ‘' jelentÃ©se?", "feszÃ¼lt lett a helyzet"],
    ["SzÃ³lÃ¡sok szÃ³ szerint Ã©rtendÅ‘k?", "nem"],
    ["Mi a szÃ³lÃ¡s Ã©s a kÃ¶zmondÃ¡s kÃ¼lÃ¶nbsÃ©ge?", "a kÃ¶zmondÃ¡s tanulsÃ¡got is tartalmaz"],
    ["Ãrj egy szÃ³lÃ¡st!", ["Ã©hes mint a farkas", "lÃ³vÃ¡ tette", "a szÃ­vÃ©be zÃ¡rta"]],
    ["MiÃ©rt nehÃ©z a szÃ³lÃ¡sokat Ã©rteni?", "Ã¡tvitt Ã©rtelmÃ¼k van"],
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
      q.push(createMCQ("szokincs", "kozmondasok", `"${prov.proverb}" jelentÃ©se:`,
        prov.meaning,
        ["mÃ¡s", "ismeretlen", "nevetsÃ©ges"]));
    } else if (type === 1) {
      const correct = prov.proverb;
      const wrongs = shuffle(PROVERBS, rng).slice(0, 3).map(p => p.proverb);
      q.push(createMCQ("szokincs", "kozmondasok", `Melyik a kÃ¶zmondÃ¡s?`, correct, wrongs));
    } else {
      q.push(createMCQ("szokincs", "kozmondasok", "A kÃ¶zmondÃ¡s tanÃ­tja:",
        "az Ã©let bÃ¶lcsessÃ©gÃ©t",
        ["a tÃ¶rtÃ©nelmet", "a fÃ¶ldrajzot", "a matekot"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a kÃ¶zmondÃ¡s?", "nÃ©pi bÃ¶lcsessÃ©g rÃ¶vid mondatban"],
    ["'Ki korÃ¡n kel, aranyat lel' jelentÃ©se?", "a szorgalom hasznos"],
    ["'Sok kicsi sokra megy' jelentÃ©se?", "a kicsi dolgok Ã¶sszeadÃ³dnak"],
    ["'Nem minden arany, ami fÃ©nylik' jelentÃ©se?", "nem minden olyan jÃ³, ahogy nÃ©z ki"],
    ["Ãrj egy kÃ¶zmondÃ¡st!", ["Ki korÃ¡n kel aranyat lel", "Sok kicsi sokra megy"]],
    ["Mire tanÃ­tanak a kÃ¶zmondÃ¡sok?", "az Ã©let bÃ¶lcsessÃ©gÃ©re"],
    ["Ki alkotja a kÃ¶zmondÃ¡sokat?", "a nÃ©p"],
    ["HÃ¡ny rÃ©szbÅ‘l Ã¡ll egy kÃ¶zmondÃ¡s?", "Ã¡ltalÃ¡ban egy mondatbÃ³l"],
    ["Mi a kÃ¼lÃ¶nbsÃ©g a szÃ³lÃ¡s Ã©s a kÃ¶zmondÃ¡s kÃ¶zÃ¶tt?", "a kÃ¶zmondÃ¡s tanulsÃ¡got tartalmaz"],
    ["KÃ¶zmondÃ¡sokat mikor szoktuk mondani?", "bÃ¶lcs tanÃ¡cskÃ©nt"],
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
      q.push(createMCQ("helyesiras", "egybeÃ­ras", `"${word.word}" helyesen:`,
        word.word,
        [`${word.word.split('').join('-')}`, "szÃ©tbontva", "rosszul"]));
    } else if (type === 1) {
      q.push(createMCQ("helyesiras", "egybeÃ­ras", `Melyik szÃ³ Ã­rhatÃ³ Ã¶ssze?`,
        "mindenhol",
        ["mÃ¡r nem", "rÃ©gen volt", "talÃ¡n"]));
    } else {
      q.push(createMCQ("helyesiras", "egybeÃ­ras", "Az alÃ¡bbiak kÃ¶zÃ¼l melyik Ã­rhatÃ³ Ã¶ssze?",
        "vÃ©gig",
        ["mÃ¡s mint", "talÃ¡n", "vagy"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Egybe vagy kÃ¼lÃ¶n: 'mindenhol'?", "egybe"],
    ["Egybe vagy kÃ¼lÃ¶n: 'vÃ©gig'?", "egybe"],
    ["Egybe vagy kÃ¼lÃ¶n: 'Ã¶ssze'?", "egybe"],
    ["Egybe vagy kÃ¼lÃ¶n: 'visszaÃ­r'?", "egybe"],
    ["Mi az egybeÃ­rÃ¡s szabÃ¡lya igekÃ¶tÅ‘s szavaknÃ¡l?", "az igekÃ¶tÅ‘ az igÃ©hez kapcsolÃ³dik"],
    ["Egybe vagy kÃ¼lÃ¶n: 'ki-visszatart'?", "kÃ¶tÅ‘jellel"],
    ["Mikor Ã­runk egybe igekÃ¶tÅ‘s szavakat?", "ha nem hangsÃºlyos az igekÃ¶tÅ‘"],
    ["Ãrj egy egybeÃ­rt szÃ³t!", ["mindenhol", "vÃ©gig", "visszaÃ­r", "Ã¶ssze"]],
    ["Egybe vagy kÃ¼lÃ¶n: 'fel-felkapcsolÃ³dik'?", "kÃ¶tÅ‘jellel"],
    ["Mikor Ã­runk egybe?", "ha szorosan Ã¶sszetartoznak"],
  ];
  shuffle(typingPool, rng).forEach(t => q.push(createTyping("helyesiras", "egybeÃ­ras", t[0], t[1])));
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
        [`${word.word.replace(/ Ã©s /g, '+')}`, "Ã¶ssze", "rosszul"]));
    } else if (type === 1) {
      q.push(createMCQ("helyesiras", "kuloniras", "Melyik kifejezÃ©s Ã­rhatÃ³ kÃ¼lÃ¶n?",
        "mÃ¡s Ã©s mÃ¡s",
        ["Ã¶ssze-vissza", "ugyan-olyan", "egy-mÃ¡s"]));
    } else {
      q.push(createMCQ("helyesiras", "kuloniras", "A kÃ¶tÅ‘szÃ³val Ã¶sszekapcsolt szavak:",
        "kÃ¼lÃ¶n Ã­rhatÃ³k",
        ["mindig Ã¶sszefÃ¼ggnek", "kitalÃ¡lhatÃ³", "nem Ã­rhatÃ³"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["KÃ¼lÃ¶n vagy egybe: 'mÃ¡s Ã©s mÃ¡s'?", "kÃ¼lÃ¶n"],
    ["KÃ¼lÃ¶n vagy egybe: 'olyan Ã©s olyan'?", "kÃ¼lÃ¶n"],
    ["KÃ¼lÃ¶n vagy egybe: 'Ã­gy Ã©s Ãºgy'?", "kÃ¼lÃ¶n"],
    ["Mi az elkÃ¼lÃ¶nÃ­tett Ã­rÃ¡s?", "szavak kÃ¼lÃ¶n Ã­rÃ¡sa"],
    ["Mikor Ã­runk kÃ¼lÃ¶n?", "ha szavak Ã¶nÃ¡llÃ³ak"],
    ["KÃ¼lÃ¶n vagy egybe: 'Ã©s'?", "kÃ¼lÃ¶n szÃ³"],
    ["Ãrj egy kÃ¼lÃ¶n Ã­randÃ³ szÃ³kapcsolatot!", ["mÃ¡s Ã©s mÃ¡s", "Ã­gy Ã©s Ãºgy"]],
    ["MiÃ©rt Ã­runk kÃ¼lÃ¶n?", "ha a szavak Ã¶nÃ¡llÃ³ fogalmak"],
    ["'Ãgy Ã©s Ãºgy' Ã¶sszesen hÃ¡ny szÃ³?", "hÃ¡rom"],
    ["KÃ¼lÃ¶n vagy egybe: 'valami mÃ¡s'?", "kÃ¼lÃ¶n"],
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
      q.push(createMCQ("fogalmazas", "elbeszeles", "Az elbeszÃ©lÃ©s elsÅ‘ rÃ©sze a:",
        "kezdet",
        ["fejlÅ‘dÃ©s", "csÃºcspont", "befejezÃ©s"]));
    } else if (type === 1) {
      q.push(createMCQ("fogalmazas", "elbeszeles", "Az elbeszÃ©lÃ©s fejlesztÅ‘ rÃ©sze a:",
        "cselekmÃ©ny",
        ["elÅ‘beszÃ©d", "utÃ³szÃ³", "alaptÃ¶rtÃ©net"]));
    } else {
      q.push(createMCQ("fogalmazas", "elbeszeles", "Melyik rÃ©sze a tÃ¶rtÃ©netnek a \"befejezÃ©s\"?",
        "a vÃ©geredmÃ©ny",
        ["az elsÅ‘ mondat", "a kÃ¶zepsÅ‘ rÃ©sz", "az elÅ‘szÃ³"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi az elbeszÃ©lÃ©s elsÅ‘ rÃ©sze?", "kezdet"],
    ["Mi az elbeszÃ©lÃ©s fejlesztÅ‘ rÃ©sze?", "cselekmÃ©ny"],
    ["Mi az elbeszÃ©lÃ©s vÃ©ge?", "befejezÃ©s"],
    ["Hogyan kezdÅ‘dik sok mese?", "Egyszer volt, hol nem volt..."],
    ["Mi a fordulÃ³pont az elbeszÃ©lÃ©sben?", "vÃ¡ratlan esemÃ©ny"],
    ["MibÅ‘l Ã¡ll egy elbeszÃ©lÃ©s?", "kezdet, cselekmÃ©ny, befejezÃ©s"],
    ["Mire kell figyelni elbeszÃ©lÃ©snÃ©l?", "az esemÃ©nyekre Ã©s az idÅ‘rendre"],
    ["Mi a cselekmÃ©ny?", "a fÅ‘ esemÃ©ny a tÃ¶rtÃ©netben"],
    ["Mire utal a 'kezdet' az elbeszÃ©lÃ©sben?", "a tÃ¶rtÃ©net indulÃ¡sa"],
    ["Hogyan vÃ©gzik a jÃ³ mesÃ©k?", "boldogan"],
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
      q.push(createMCQ("fogalmazas", "leiras", "A leÃ­rÃ¡sban elÅ‘szÃ¶r szoktuk szÃ¡mba venni:",
        "a kÃ¼lsÅ‘ megjelenÃ©st",
        ["a tÃ¶rtÃ©netÃ©t", "a jÃ¶vÅ‘jÃ©t", "az Ã­gÃ©retÃ©t"]));
    } else if (type === 1) {
      q.push(createMCQ("fogalmazas", "leiras", "A szemÃ©lyleÃ­rÃ¡s elemei:",
        "kÃ¼lsÅ‘ Ã©s szemÃ©lyisÃ©g",
        ["csak magassÃ¡g", "csak szÃ­n", "csak kor"]));
    } else {
      q.push(createMCQ("fogalmazas", "leiras", "Mit nem szoktunk leÃ­rni egy szemÃ©lyrÅ‘l?",
        "a jÃ¶vÅ‘beni terveit",
        ["a szeme szÃ­nÃ©t", "a ruhÃ¡jÃ¡t", "a hajÃ¡nak hosszÃ¡t"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mire figyelÃ¼nk szemÃ©lyleÃ­rÃ¡snÃ¡l?", "kÃ¼lsÅ‘ Ã©s szemÃ©lyisÃ©g"],
    ["Mi a leÃ­rÃ¡s elsÅ‘ eleme?", "a kÃ¼lsÅ‘ megjelenÃ©s"],
    ["Mire figyelÃ¼nk tÃ¡rgy leÃ­rÃ¡sakor?", "szÃ­n, alak, mÃ©ret"],
    ["Milyen szÃ³fajokat hasznÃ¡lunk leÃ­rÃ¡snÃ¡l?", "mellÃ©kneveket"],
    ["Hogyan Ã­runk le egy szemÃ©lyt?", "kÃ¼lsÅ‘, szemÃ©lyisÃ©g, viselkedÃ©s"],
    ["Mi a leÃ­rÃ¡s cÃ©lja?", "hogy az olvasÃ³ el tudja kÃ©pzelni"],
    ["Mit Ã­runk le egy helyszÃ­nnÃ©l?", "mi lÃ¡thatÃ³ ott"],
    ["Ãrj egy leÃ­rÃ¡st az iskolÃ¡drÃ³l!", ["Az iskola szÃ©p Ã©pÃ¼let...", "Sok ablaka van..."]],
    ["MiÃ©rt fontos a rÃ©szletes leÃ­rÃ¡s?", "hogy pontosabb kÃ©pet adjon"],
    ["Mit szoktunk leÃ­rni egy szemÃ©lyrÅ‘l?", ["szeme szÃ­nÃ©t", "ruhÃ¡jÃ¡t", "hajÃ¡nak hosszÃ¡t"]],
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
      q.push(createMCQ("mondat", "targy", `A mondatban: "${obj.sentence}" Mi a tÃ¡rgy?`,
        obj.target,
        ["a mellÃ©knÃ©v", "az ige", "a hatÃ¡rozÃ³"]));
    } else if (type === 1) {
      q.push(createMCQ("mondat", "targy", "A tÃ¡rgy a mondatban Ã¡ltalÃ¡ban:",
        "tÃ¡rgyeseti formÃ¡ban van",
        ["nominatÃ­vuszban", "genitivuszban", "ablatÃ­vuszban"]));
    } else {
      q.push(createMCQ("mondat", "targy", "A tÃ¡rgy azt jelenti, amit az ige:",
        "megnevez vagy szenved el",
        ["leÃ­r", "jelent", "mutat"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a tÃ¡rgy a mondatban?", "amit az ige jelÃ¶l"],
    ["Mi a tÃ¡rgyrag?", "-t"],
    ["'PÃ©ter egy kÃ¶nyvet olvas.' - mi a tÃ¡rgy?", "egy kÃ¶nyvet"],
    ["'A lÃ¡ny az asztalt tolta.' - mi a tÃ¡rgy?", "az asztalt"],
    ["'Mari megtalÃ¡lta a ceruzÃ¡jÃ¡t.' - mi a tÃ¡rgy?", "a ceruzÃ¡jÃ¡t"],
    ["Mire kÃ©rdezÃ¼nk a tÃ¡rgyra?", "kit? mit?"],
    ["A tÃ¡rgy milyen esetben Ã¡ll?", "tÃ¡rgyesetben"],
    ["Ãrd tÃ¡rgyesetbe: 'kÃ¶nyv'", "kÃ¶nyvet"],
    ["Ãrd tÃ¡rgyesetbe: 'labda'", "labdÃ¡t"],
    ["TÃ¡rgy a mondatban: 'A gyerek almÃ¡t eszik.' - mi a tÃ¡rgy?", "almÃ¡t"],
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
      q.push(createMCQ("mondat", "hatarozo", `"${adv.sentence}" Mi a hatÃ¡rozÃ³?`,
        adv.target,
        ["az ige", "a fÅ‘nÃ©v", "az alany"]));
    } else if (type === 1) {
      q.push(createMCQ("mondat", "hatarozo", "A hatÃ¡rozÃ³ fejti ki az ige:",
        "kÃ¶rÃ¼lmÃ©nyeit",
        ["szÃ¡mÃ¡t", "nemÃ©t", "ragozÃ¡sÃ¡t"]));
    } else {
      q.push(createMCQ("mondat", "hatarozo", "A hatÃ¡rozÃ³ fajtÃ¡i lehetnek:",
        "hely, idÅ‘, mÃ³d",
        ["egyedÃ¼l", "kettÅ‘s", "virtuÃ¡lis"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a hatÃ¡rozÃ³ a mondatban?", "az ige kÃ¶rÃ¼lmÃ©nyÃ©t jelÃ¶li"],
    ["Mi a helyhatÃ¡rozÃ³?", "ahol valami tÃ¶rtÃ©nik"],
    ["Mi az idÅ‘hatÃ¡rozÃ³?", "mikor tÃ¶rtÃ©nik valami"],
    ["Mi a mÃ³dhatÃ¡rozÃ³?", "hogyan tÃ¶rtÃ©nik valami"],
    ["'A gyerek az iskolÃ¡ban jÃ¡tszik.' - mi a hatÃ¡rozÃ³?", "az iskolÃ¡ban"],
    ["'Reggel elindultunk.' - mi a hatÃ¡rozÃ³?", "Reggel"],
    ["'Gyorsan futottak.' - mi a hatÃ¡rozÃ³?", "Gyorsan"],
    ["Mire kÃ©rdez a helyhatÃ¡rozÃ³?", "hol?"],
    ["Mire kÃ©rdez az idÅ‘hatÃ¡rozÃ³?", "mikor?"],
    ["Mire kÃ©rdez a mÃ³dhatÃ¡rozÃ³?", "hogyan?"],
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
      q.push(createMCQ("mondat", "jelzo", `"${adj.sentence}" Mi a jelzÅ‘?`,
        adj.target,
        ["az alany", "az ige", "a mondat"]));
    } else if (type === 1) {
      q.push(createMCQ("mondat", "jelzo", "A jelzÅ‘ a mondatban Ã¡ltalÃ¡ban:",
        "a fÅ‘nÃ©v elÅ‘tt vagy utÃ¡n Ã¡ll",
        ["mindig az ige utÃ¡n", "mindig egyedÃ¼l", "az ige helyÃ©n"]));
    } else {
      q.push(createMCQ("mondat", "jelzo", "A jelzÅ‘ azt fejti ki:",
        "a fÅ‘nÃ©v minÅ‘sÃ©gÃ©t",
        ["az ige mÃ³djÃ¡t", "az alanyt", "a tÃ¡rgyat"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a jelzÅ‘ a mondatban?", "a fÅ‘nÃ©v minÅ‘sÃ©gÃ©t jelÃ¶li"],
    ["'A piros virÃ¡g szÃ©p.' - mi a jelzÅ‘?", "piros"],
    ["'Az okos fiÃº tanul.' - mi a jelzÅ‘?", "okos"],
    ["'A nagy hÃ¡z Ã¡ll az Ãºton.' - mi a jelzÅ‘?", "nagy"],
    ["Mire kÃ©rdez a jelzÅ‘re?", "milyen?"],
    ["A jelzÅ‘ Ã¡ltalÃ¡ban milyen szÃ³faj?", "mellÃ©knÃ©v"],
    ["Hova kerÃ¼l a jelzÅ‘?", "a fÅ‘nÃ©v elÃ©"],
    ["'A szÃ©p alma piros.' - mi a jelzÅ‘?", "szÃ©p"],
    ["Adj jelzÅ‘t: 'A ___ kutya fut.'", ["gyors", "kicsi", "fekete"]],
    ["JelzÅ‘: 'Az ___ gyerek jÃ¡tszik.'", ["vidÃ¡m", "okos", "kisebb"]],
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
      // Melyik a felszÃ³lÃ­tÃ³ mÃ³d?
      const correct = verb.te_sg;
      const wrongs = shuffle(VERBS_IMPERATIVE, rng).slice(0, 3).map(v => v.o_sg);
      q.push(createMCQ("igeidok", "felszolito", `"${verb.inf}" felszÃ³lÃ­tÃ³ mÃ³dja (te):`, correct, wrongs));
    } else if (type === 1) {
      // Mi a parancs alakja?
      const correct = verb.o_sg;
      const wrongs = shuffle(VERBS_IMPERATIVE, rng).slice(0, 3).map(v => v.mi);
      q.push(createMCQ("igeidok", "felszolito", `"${verb.inf}" felszÃ³lÃ­tÃ³ mÃ³dja (Å‘/3. sz. sing.):`, correct, wrongs));
    } else {
      // KomplettÃ¡lj!
      const correct = verb.mi;
      const wrongs = shuffle(VERBS_IMPERATIVE, rng).slice(0, 3).map(v => v.te_sg);
      q.push(createMCQ("igeidok", "felszolito", `"Gyerekek, ... Ã¶ssze!" (${verb.inf})`, correct, wrongs));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a felszÃ³lÃ­tÃ³ mÃ³d?", "parancsot, kÃ©rÃ©st fejez ki"],
    ["'Ã­rni' felszÃ³lÃ­tÃ³ mÃ³dja (te)?", "Ã­rj"],
    ["'futni' felszÃ³lÃ­tÃ³ mÃ³dja (te)?", "fuss"],
    ["'olvasni' felszÃ³lÃ­tÃ³ mÃ³dja (te)?", "olvass"],
    ["'enni' felszÃ³lÃ­tÃ³ mÃ³dja (te)?", "egyÃ©l"],
    ["'jÃ¡tszani' felszÃ³lÃ­tÃ³ mÃ³dja (Å‘)?", "jÃ¡tsszon"],
    ["FelszÃ³lÃ­tÃ³ mÃ³dÃº mondat jellemzÅ‘je?", "felkiÃ¡ltÃ³jel"],
    ["'inni' felszÃ³lÃ­tÃ³ mÃ³dja (mi)?", "igyunk"],
    ["Mikor hasznÃ¡ljuk a felszÃ³lÃ­tÃ³ mÃ³dot?", "parancs, kÃ©rÃ©s esetÃ©n"],
    ["'futni' felszÃ³lÃ­tÃ³ mÃ³dja (Å‘k)?", "fussanak"],
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
      // Melyik a feltÃ©teles mÃ³d?
      const correct = verb.jelen;
      const wrongs = shuffle(VERBS_CONDITIONAL, rng).slice(0, 3).map(v => v.mult);
      q.push(createMCQ("igeidok", "felteteles", `"${verb.inf}" feltÃ©teles mÃ³dja (jelen):`, correct, wrongs));
    } else if (type === 1) {
      // MÃºlt feltÃ©teles
      const correct = verb.mult;
      const wrongs = shuffle(VERBS_CONDITIONAL, rng).slice(0, 3).map(v => v.jelen);
      q.push(createMCQ("igeidok", "felteteles", `"${verb.inf}" feltÃ©teles mÃ³dja (mÃºlt):`, correct, wrongs));
    } else {
      // Mondatban
      const correct = verb.jelen;
      const wrongs = shuffle(VERBS_CONDITIONAL, rng).slice(0, 3).map(v => v.mult);
      q.push(createMCQ("igeidok", "felteteles", `"Ha lenne pÃ©nzem, ..." (${verb.inf})`, correct, wrongs));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a feltÃ©teles mÃ³d?", "feltÃ©teles cselekvÃ©st jelÃ¶l"],
    ["'Ã­rni' feltÃ©teles mÃ³dja (jelen)?", "Ã­rnÃ©k"],
    ["'futni' feltÃ©teles mÃ³dja (jelen)?", "futnÃ©k"],
    ["'olvasni' feltÃ©teles mÃ³dja (jelen)?", "olvasnÃ©k"],
    ["FeltÃ©teles mÃ³dÃº mondat jellemzÅ‘je?", "ha... akkor..."],
    ["'enni' feltÃ©teles mÃ³dja (jelen)?", "ennÃ©k"],
    ["'inni' feltÃ©teles mÃ³dja (jelen)?", "innÃ©k"],
    ["Mikor hasznÃ¡ljuk a feltÃ©teles mÃ³dot?", "ha valami nem biztos"],
    ["'jÃ¡tszani' feltÃ©teles mÃ³dja (jelen)?", "jÃ¡tszanÃ©k"],
    ["FeltÃ©teles mÃ³d jele?", "-na/-ne/-nÃ¡/-nÃ©"],
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
      // Birtokos szemÃ©lyjelezÃ©s (1. sz. sing.)
      const correct = noun.sg1;
      const wrongs = [noun.sg2, noun.sg3, noun.pl1];
      q.push(createMCQ("nevszok", "birtokos", `"${noun.nom}" - enyÃ©m (1. sz. sing.):`, correct, wrongs));
    } else if (type === 1) {
      // Birtokos szemÃ©lyjelezÃ©s (3. sz. sing.)
      const correct = noun.sg3;
      const wrongs = [noun.sg1, noun.sg2, noun.pl3];
      q.push(createMCQ("nevszok", "birtokos", `"${noun.nom}" - Ã¶vÃ© (3. sz. sing.):`, correct, wrongs));
    } else {
      // TÃ¶bb alany
      const correct = noun.pl1;
      const wrongs = [noun.sg1, noun.pl2, noun.sg3];
      q.push(createMCQ("nevszok", "birtokos", `"${noun.nom}" - mienk (1. sz. plur.):`, correct, wrongs));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a birtok jele?", "-m, -d, -ja/je..."],
    ["'hÃ¡z' - enyÃ©m (1. sz.)?", "hÃ¡zam"],
    ["'kÃ¶nyv' - enyÃ©m (1. sz.)?", "kÃ¶nyvem"],
    ["'macska' - Ã¶vÃ© (3. sz.)?", "macskÃ¡ja"],
    ["'ceruza' - Ã¶vÃ© (3. sz.)?", "ceruzÃ¡ja"],
    ["'jÃ¡tÃ©k' - miÃ©nk (1. sz. plur.)?", "jÃ¡tÃ©kunk"],
    ["'hÃ¡z' - tiÃ©tek (2. sz. plur.)?", "hÃ¡zatok"],
    ["Mire utal a birtok?", "kiÃ© a dolog"],
    ["'kÃ¶nyv' - Ã¶vÃ©k (3. sz. plur.)?", "kÃ¶nyvÃ¼k"],
    ["'macska' - tiÃ©d (2. sz.)?", "macskÃ¡d"],
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
      // EszkÃ¶zrag (-val/-vel)
      const correct = noun.comitative;
      const wrongs = shuffle(ADVERBIAL_CASE_ADVANCED, rng).slice(0, 3).map(n => n.ablative);
      q.push(createMCQ("nevszok", "hatarozaragu", `"${noun.nom}" eszkÃ¶zrag (-val/-vel):`, correct, wrongs));
    } else if (type === 1) {
      // KiegyÃ¼ttlÃ©gi rag (-bÃ³l/-bÅ‘l)
      const correct = noun.ablative;
      const wrongs = shuffle(ADVERBIAL_CASE_ADVANCED, rng).slice(0, 3).map(n => n.delative);
      q.push(createMCQ("nevszok", "hatarozaragu", `"${noun.nom}" ablativus (-bÃ³l/-bÅ‘l):`, correct, wrongs));
    } else {
      // HelyhatÃ¡rozÃ³ rag (-rÃ³l/-rÅ‘l)
      const correct = noun.delative;
      const wrongs = shuffle(ADVERBIAL_CASE_ADVANCED, rng).slice(0, 3).map(n => n.comitative);
      q.push(createMCQ("nevszok", "hatarozaragu", `"${noun.nom}" delativus (-rÃ³l/-rÅ‘l):`, correct, wrongs));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["'hÃ¡z' eszkÃ¶zragos alakja (-val/-vel)?", "hÃ¡zzal"],
    ["'iskola' eszkÃ¶zragos alakja?", "iskolÃ¡val"],
    ["'szÃ©k' eszkÃ¶zragos alakja?", "szÃ©kkel"],
    ["'asztal' kiindulÃ¡si esete (-bÃ³l/-bÅ‘l)?", "asztalbÃ³l"],
    ["'toll' kiindulÃ¡si esete?", "tollbÃ³l"],
    ["'hÃ¡z' felÅ‘le esetÃ© (-rÃ³l/-rÅ‘l)?", "hÃ¡zrÃ³l"],
    ["Mi az eszkÃ¶zrag?", "-val/-vel"],
    ["Mi a kiindulÃ¡si rag?", "-bÃ³l/-bÅ‘l"],
    ["Mi a felÅ‘le rag?", "-rÃ³l/-rÅ‘l"],
    ["'iskola' felÅ‘le esetÃ©?", "iskolÃ¡rÃ³l"],
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
      // Mi az ellentÃ©te?
      const correct = emot.opposite;
      const wrongs = shuffle(EMOTIONS_VOCABULARY, rng).slice(0, 3).map(e => e.emotion);
      q.push(createMCQ("szokincs", "erzelmek", `"${emot.emotion}" ellentÃ©te:`, correct, wrongs));
    } else if (type === 1) {
      // Melyik mondat mutatja az Ã©rzelmÃ©t?
      const correct = emot.example;
      const wrongs = shuffle(EMOTIONS_VOCABULARY, rng).slice(0, 3).map(e => e.example);
      q.push(createMCQ("szokincs", "erzelmek", `Melyik mondat mutatja, hogy valaki "${emot.emotion}"?`,
        correct, wrongs));
    } else {
      // SzÃ³ alapjÃ¡n
      q.push(createMCQ("szokincs", "erzelmek", `"${emot.emotion}" Ã©rzelmi Ã¡llapot jelentÃ©se:`,
        "az adott Ã©rzelmet fejezi ki",
        ["az idÅ‘t mutatja", "egy szÃ­n", "egy tÃ¡rgy"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi az ellentÃ©te a 'boldog' szÃ³nak?", "szomorÃº"],
    ["Mi az ellentÃ©te a 'mÃ©rges' szÃ³nak?", "vidÃ¡m"],
    ["Mi az ellentÃ©te a 'fÃ©lÃ©nk' szÃ³nak?", "bÃ¡tor"],
    ["Mi az ellentÃ©te a 'szorongÃ³' szÃ³nak?", "nyugodt"],
    ["Milyen Ã©rzelem: 'Nagyon Ã©hes vagyok!'?", "Ã©hsÃ©g"],
    ["Milyen Ã©rzelem: 'Nagyon boldog vagyok!'?", "boldogsÃ¡g"],
    ["Milyen Ã©rzelem: 'Elveszett a jÃ¡tÃ©kom.'?", "szomorÃºsÃ¡g"],
    ["Ãrj egy pozitÃ­v Ã©rzelem szÃ³t!", ["boldog", "vidÃ¡m", "Ã¶rÃ¶mteli"]],
    ["Ãrj egy negatÃ­v Ã©rzelem szÃ³t!", ["szomorÃº", "mÃ©rges", "fÃ©lÃ©nk"]],
    ["Mi az ellentÃ©te a 'vidÃ¡m' szÃ³nak?", "szomorÃº"],
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
      // Mi az idÅ‘kifejezÃ©s jelentÃ©se?
      const correct = time.meaning;
      const wrongs = shuffle(TIME_EXPRESSIONS, rng).slice(0, 3).map(t => t.meaning);
      q.push(createMCQ("szokincs", "idokifejezesek", `"${time.word}" jelentÃ©se:`, correct, wrongs));
    } else if (type === 1) {
      // Melyik idÅ‘kifejezÃ©st kellene ide?
      const correct = time.word;
      const wrongs = shuffle(TIME_EXPRESSIONS, rng).slice(0, 3).map(t => t.word);
      q.push(createMCQ("szokincs", "idokifejezesek", `${time.example.replace(time.word, "___")}`,
        correct, wrongs));
    } else {
      // Mikor hasznÃ¡ljuk?
      q.push(createMCQ("szokincs", "idokifejezesek", `"${time.word}" azt jelenti:`,
        time.meaning,
        ["valami mÃ¡s idÅ‘pontot", "helyet jelent", "Ã©rzelmeket"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a 'tegnap' szÃ³?", "idÅ‘kifejezÃ©s"],
    ["'tegnap' mikor volt?", "az elÅ‘zÅ‘ napon"],
    ["'holnap' mikor lesz?", "a kÃ¶vetkezÅ‘ napon"],
    ["'ma' mikor van?", "az aktuÃ¡lis napon"],
    ["'reggel' mikor van?", "napkelte Ã©s dÃ©l kÃ¶zÃ¶tt"],
    ["'Ã©jjel' mikor van?", "sÃ¶tÃ©t van, mindenki alszik"],
    ["'dÃ©lutÃ¡n' mikor van?", "dÃ©ltÅ‘l alkonyig"],
    ["'este' mikor van?", "a nap vÃ©ge elÅ‘tt"],
    ["Ãrj egy idÅ‘kifejezÃ©st!", ["tegnap", "ma", "holnap", "reggel", "este"]],
    ["Mi a kÃ¼lÃ¶nbsÃ©g 'ma' Ã©s 'tegnap' kÃ¶zÃ¶tt?", "egy nap"],
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
      const wrongs = shuffle(IKES_VERBS, rng).slice(0, 3).map(v => v.mÃºlt);
      q.push(createMCQ("helyesiras", "ikes_igek", `"${verb.inf}" jelen ideje (E/1):`, correct, wrongs));
    } else {
      // MÃºlt ideje
      const correct = verb.mÃºlt;
      const wrongs = shuffle(IKES_VERBS, rng).slice(0, 3).map(v => v.jelen);
      q.push(createMCQ("helyesiras", "ikes_igek", `"${verb.inf}" mÃºlt ideje:`, correct, wrongs));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi az ikes ige?", "ik-re vÃ©gzÅ‘dÅ‘ ige"],
    ["'eszik' ikes ige?", "igen"],
    ["'iszik' jelen ideje (1. sz.)?", "iszom"],
    ["'alszik' mÃºlt ideje?", "aludt"],
    ["'jÃ¡tszik' jelen ideje (1. sz.)?", "jÃ¡tszom"],
    ["'fekszik' ikes ige?", "igen"],
    ["'szÃ¼letik' mÃºlt ideje?", "szÃ¼letett"],
    ["Ikes igÃ©k jellemzÅ‘je?", "ik vÃ©gÅ±"],
    ["'eszik' mÃºlt ideje?", "evett"],
    ["'iszik' mÃºlt ideje?", "ivott"],
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
      // Mi a mÃ¡ssalhangzÃ³-tÃ¶rvÃ©ny?
      q.push(createMCQ("helyesiras", "masshangzo_torveny", `"${rule.word}" milyen szabÃ¡lyt kÃ¶veti?`,
        rule.rule,
        ["magÃ¡nhangzÃ³-harmÃ³nia", "ragozÃ¡si rag", "Ã¶sszetett szÃ³"]));
    } else if (type === 1) {
      // Meddig okoz vÃ¡ltozÃ¡st?
      q.push(createMCQ("helyesiras", "masshangzo_torveny", `A mÃ¡ssalhangzÃ³-tÃ¶rvÃ©ny miÃ©rt fontos a magyar helyesÃ­rÃ¡sban?`,
        "a hangok tisztasÃ¡gÃ¡Ã©rt",
        ["a sebessÃ©gÃ©rt", "az egyszerÅ±sÃ©gÃ©rt", "az archaikus formÃ¡Ã©rt"]));
    } else {
      // PÃ©lda
      q.push(createMCQ("helyesiras", "masshangzo_torveny", `Melyik szÃ³ kÃ¶veti a mÃ¡ssalhangzÃ³-tÃ¶rvÃ©nyt?`,
        "szÃ©psÃ©g",
        ["boldog", "jÃ¡tszik", "Ã­rÃ¡s"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a mÃ¡ssalhangzÃ³-tÃ¶rvÃ©ny?", "hangvÃ¡ltozÃ¡s toldalÃ©kolÃ¡skor"],
    ["'szÃ©p' + '-sÃ©g' = ?", "szÃ©psÃ©g"],
    ["'boldog' + '-sÃ¡g' = ?", "boldogsÃ¡g"],
    ["'kÃ¶nnyÅ±' + '-sÃ©g' = ?", "kÃ¶nnyÅ±sÃ©g"],
    ["Mikor vÃ¡ltozik a mÃ¡ssalhangzÃ³?", "toldalÃ©kolÃ¡skor"],
    ["'egÃ©szsÃ©g' milyen mÃ¡ssalhangzÃ³-vÃ¡ltozÃ¡st mutat?", "z â†’ s vÃ¡ltakozÃ¡s"],
    ["MiÃ©rt fontos a mÃ¡ssalhangzÃ³-tÃ¶rvÃ©ny?", "a helyes kiejtÃ©s Ã©s Ã­rÃ¡s miatt"],
    ["'szÃ©p' szÃ³csalÃ¡djÃ¡bÃ³l egy pÃ©lda?", ["szÃ©psÃ©g", "szÃ©pen", "szebb"]],
    ["'kÃ¶nnyÅ±' szÃ³csalÃ¡djÃ¡bÃ³l egy pÃ©lda?", ["kÃ¶nnyÅ±sÃ©g", "kÃ¶nnyebb", "kÃ¶nnyedÃ©n"]],
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
      // Mi az kÃ¶tÅ‘szÃ³ jelentÃ©se?
      const correct = sent.meaning;
      const wrongs = shuffle(COMPOUND_SENTENCE_BASICS, rng).slice(0, 3).map(s => s.meaning);
      q.push(createMCQ("mondat", "osszetett_alap", `A(z) â€ž${sent.connector}" kÃ¶tÅ‘szÃ³ jelentÃ©se:`, correct, wrongs));
    } else if (type === 1) {
      // Melyik a helyes kÃ¶tÅ‘szÃ³?
      const correct = sent.connector;
      const wrongs = shuffle(COMPOUND_SENTENCE_BASICS, rng).slice(0, 3).map(s => s.connector);
      q.push(createMCQ("mondat", "osszetett_alap", `${sent.example.replace(sent.connector, "___")}`,
        correct, wrongs));
    } else {
      // Ã–sszetett mondat fogalma
      q.push(createMCQ("mondat", "osszetett_alap", `Az Ã¶sszetett mondat kÃ©t vagy tÃ¶bb ... Ã¡ll.`,
        "egyszerÅ± mondatbÃ³l",
        ["szÃ³bÃ³l", "szÃ³csoportbÃ³l", "szÃ³tagbÃ³l"]));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi az Ã¶sszetett mondat?", "kÃ©t vagy tÃ¶bb egyszerÅ± mondatbÃ³l Ã¡ll"],
    ["Milyen kÃ¶tÅ‘szÃ³ jelÃ¶l Ã¶sszeadÃ¡st?", "Ã©s"],
    ["Milyen kÃ¶tÅ‘szÃ³ jelÃ¶l ellentÃ©tet?", "de"],
    ["Milyen kÃ¶tÅ‘szÃ³ jelÃ¶l okot?", "mert"],
    ["Milyen kÃ¶tÅ‘szÃ³ jelÃ¶l vÃ¡lasztÃ¡st?", "vagy"],
    ["Milyen kÃ¶tÅ‘szÃ³ jelÃ¶l cÃ©lzÃ¡st?", "hogy"],
    ["'PÃ©ter olvas Ã©s Mari Ã­r.' - hÃ¡ny mondat?", "kettÅ‘"],
    ["MegjelÃ¶ld az 'Ã©s' kÃ¶tÅ‘szÃ³t ebben: 'PÃ©ter Ã©s Mari Ã­r.'", "Ã©s"],
    ["Mi az alÃ¡rendelt mondat?", "a fÅ‘mondathoz kapcsolÃ³dÃ³ mellÃ©kmondat"],
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
      // Melyik igÃ©t hasznÃ¡ljuk a pÃ¡rbeszÃ©dben?
      const correct = dverb.verb;
      const wrongs = shuffle(DIALOGUE_VERBS, rng).slice(0, 3).map(d => d.verb);
      q.push(createMCQ("fogalmazas", "parbeszed", `Melyik parbeszed-ige illik a mondatba?`,
        correct, wrongs));
    } else if (type === 1) {
      // PÃ¡rbeszÃ©d ige jelentÃ©se
      q.push(createMCQ("fogalmazas", "parbeszed", `"${dverb.verb}" igÃ©t a pÃ¡rbeszÃ©dben azÃ©rt hasznÃ¡ljuk, mert:`,
        "mutatja, hogy valaki beszÃ©l",
        ["mutatja az idÅ‘t", "mutatja a helyet", "mutatja az Ã­rÃ¡smÃ³dot"]));
    } else {
      // Mondat kiegÃ©szÃ­tÃ©s
      const correct = dverb.verb;
      const wrongs = shuffle(DIALOGUE_VERBS, rng).slice(0, 3).map(d => d.verb);
      q.push(createMCQ("fogalmazas", "parbeszed", `â€žJÃ¡tszunk!" â€“ ___ a tanÃ¡r. (Melyik pÃ¡rbeszÃ©d-ige illik ide?)`, correct, wrongs));
    }
  }
  const typingPool: [string, string | string[]][] = [
    ["Mi a pÃ¡rbeszÃ©d?", "kÃ©t szemÃ©ly kÃ¶zÃ¶tti beszÃ©lgetÃ©s"],
    ["Milyen igÃ©t hasznÃ¡lunk, ha valaki mond valamit?", "mondta"],
    ["Milyen igÃ©t hasznÃ¡lunk, ha valaki kÃ©rdez?", "kÃ©rdezte"],
    ["Milyen igÃ©t hasznÃ¡lunk, ha valaki kiÃ¡lt?", "felkiÃ¡ltott"],
    ["Milyen igÃ©t hasznÃ¡lunk, ha valaki suttog?", "suttogta"],
    ["PÃ¡rbeszÃ©dben az idÃ©zet elÃ© mit teszÃ¼nk?", "idÃ©zÅ‘jelet"],
    ["Milyen igÃ©t hasznÃ¡lunk, ha valaki mosolyogva mond valamit?", "mosolygott"],
    ["Mi a pÃ¡rbeszÃ©d jelÃ¶lÅ‘je?", "idÃ©zÅ‘jel vagy gondolatjel"],
    ["Milyen igÃ©t hasznÃ¡lunk, ha valaki visÃ­t?", "visÃ­tott"],
    ["Ãrj egy pÃ¡rbeszÃ©d-igÃ©t!", ["mondta", "kÃ©rdezte", "felkiÃ¡ltott", "suttogta"]],
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
  "megertÃ©s": generateTextComprehension,
  osszefoglalas: generateTextSummary,
  szolasok: generateIdioms,
  kozmondasok: generateProverbs,
  erzelmek: generateEmotionsVocabulary,
  idokifejezesek: generateTimeExpressions,
  "egybeÃ­ras": generateSpellingTogether,
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



