// ─── HUNGARIAN GENERATORS GRADE 6 ──────────────────────────────────────────────
// Procedural MCQ question generators for Hungarian Grade 6 (6. osztály) curriculum
// Generates 30+ MCQ + typing questions per subtopic for advanced language topics
//
// 25 subtopics (expanded): Compound adjectives/subjects, stylistic figures, vocabulary, language history,
// rhetoric, text comprehension, word pairs, homonymy, synonymy, affixes, word formation, sentence types,
// word order, conjunctions, subordinate clauses, text types, text cohesion, rhetorical devices,
// intonation, etymology, communication analysis
// All questions in Hungarian (Magyar nyelv)
// Grade-appropriate for 11-12 year old students
// MCQ: 25 altéma × 30 = 750 questions
// Typing: 15 altéma × 10 = 150 questions

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
    correct: opts.indexOf(correct),
  };
}

// ─── DATA LISTS ─────────────────────────────────────────────────────────────

const COMPOUND_SENTENCES = [
  { sentence: "Péter olvasott, és Anna pedig rajzolt.", type: "kapcsolatos" },
  { sentence: "Szeretne játszani, de van leckéje.", type: "ellentétes" },
  { sentence: "Fagyit kérek vagy csokoládét.", type: "választó" },
  { sentence: "Tanult ugyan, mégis elbukott a teszten.", type: "ellentétes" },
  { sentence: "Az elefánt nagy, az egér pedig kicsi.", type: "kapcsolatos" },
];

const SUBORDINATE_SENTENCES = [
  { sentence: "Az a gyerek, aki játékban áll, boldog.", type: "jelzői" },
  { sentence: "Tudom, hogy téged szeretnek.", type: "tárgyi" },
  { sentence: "Azért megy busszal, mert messze lakik.", type: "határozói" },
  { sentence: "Az, hogy nyert, nagyszerű volt.", type: "alanyi" },
  { sentence: "Ahol lakunk, sok fa van.", type: "határozói" },
];

const FIGURES_OF_SPEECH = [
  { figure: "A világja olyan mint egy színpad.", type: "hasonlat" },
  { figure: "Szívében vihar tombol.", type: "metafora" },
  { figure: "Az idő szalad.", type: "metonímia" },
  { figure: "A szél suttog a fák között.", type: "megszemélyesítés" },
  { figure: "Ezer szemmel figyel az város.", type: "metonímia" },
];

const FOREIGN_WORDS = [
  { word: "számítógép", origin: "angol", meaning: "computer" },
  { word: "telefon", origin: "görög", meaning: "távolról szó" },
  { word: "szendvics", origin: "angol", meaning: "kenyérkészítmény" },
  { word: "szekrény", origin: "német", meaning: "Schrank" },
  { word: "kávé", origin: "arab", meaning: "ital" },
  { word: "papír", origin: "görög", meaning: "papyrus" },
  { word: "sport", origin: "angol", meaning: "mozgás" },
];

const LANGUAGE_FAMILIES = [
  { family: "finnugor", members: ["magyar", "finn", "észt"], region: "Észak-Európa" },
  { family: "indoeurópai", members: ["angol", "német", "francia"], region: "Nyugat-Európa" },
  { family: "szláv", members: ["orosz", "lengyel", "szlovák"], region: "Közép-Kelet-Európa" },
  { family: "szemita", members: ["arab", "héber"], region: "Közel-Kelet" },
];

const ARGUMENT_TYPES = [
  { type: "logikus", example: "Ha folyóban úszunk, vízben vagyunk." },
  { type: "tapasztalat alapú", example: "Tudom, hogy magas hőmérséklet égéshez vezet." },
  { type: "szokás alapú", example: "Mindig így csináltuk, tehát jó." },
  { type: "szomorú cselekedet", example: "Hallottam egy történetet, amely szomorú voltál." },
  { type: "tekintély", example: "Az orvos azt mondta, ezért igaz." },
];

const TEXT_COMPREHENSION = [
  {
    text: "Az erdő csöndje beszélt volna, ha beszélni tudott volna. Azonban vadon zöld tüdejébe csak a madarak éneke szállt be.",
    question: "Mit szimbolizál az erdő csöndje?",
    correct: "A természet csendes szépségét",
    wrong: ["Félelmet", "Halált", "Ürességet"],
  },
  {
    text: "Az öreg ház szeretete már nem értékelték, helyette új, modern épületek nőttek fel körülötte.",
    question: "Milyen hangulat tárul ki a szövegből?",
    correct: "Nosztalgia és szomorúság",
    wrong: ["Vidámság", "Düh", "Közömbösség"],
  },
];

const PUNCTUATION_PROPER = [
  { sentence: "Anna és Péter barátok, de egyetértenek-e mindig?", correct: "helyes" },
  { sentence: "Szeretsz focizni vagy úszni?", correct: "helyes" },
  { sentence: "A város: Budapest, Pécs, Szeged.", correct: "helyes" },
  { sentence: "Marad vagy megy?", correct: "helyes" },
];

const PROPER_NAMES = [
  { name: "Budapest", type: "város" },
  { name: "Duna", type: "folyó" },
  { name: "Magyarország", type: "ország" },
  { name: "Anna", type: "személynév" },
  { name: "Petőfi Sándor", type: "költő" },
];

const ACRONYMS = [
  { acronym: "UNESCO", full: "United Nations Educational, Scientific and Cultural Organization" },
  { acronym: "WHO", full: "World Health Organization" },
  { acronym: "UNICEF", full: "United Nations Children's Fund" },
];

const ESSAY_TYPES = [
  { type: "érvelő", purpose: "Meggyőzni az olvasót", example: "Miért fontos a környezetvédelem" },
  { type: "leíró", purpose: "Leírni valamit részletesen", example: "A szép naplemente" },
  { type: "elbeszélő", purpose: "Történetet mesélni", example: "Az utolsó nyári nap" },
  { type: "ismeretterjesztő", purpose: "Információt közölni", example: "Hogyan működik az internet" },
];

const CHARACTERIZATION_ELEMENTS = [
  { element: "megjelenés", example: "magas, fekete hajú, nagy szemek" },
  { element: "viselkedés", example: "vidám, barátságos, segítőkész" },
  { element: "gondolatok", example: "félelmes, reményteli, kétségbeesett" },
  { element: "motiváció", example: "család, ambíció, szerelem" },
];

// ─── GENERATOR FUNCTIONS ────────────────────────────────────────────────────

export function generateOsszetetMeller(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const sentence = pick(COMPOUND_SENTENCES.filter(s => s.type === "kapcsolatos"), rng);
      const correct = "kapcsolatos";
      const wrong = ["ellentétes", "választó", "alárendelő"];
      q.push(createMCQ("mondat", "osszetett_mellér",
        `Milyen típusú mellérendelő mondat? "${sentence.sentence}"`, correct, wrong));
    } else if (type === 1) {
      const sentence = pick(COMPOUND_SENTENCES.filter(s => s.type === "ellentétes"), rng);
      const correct = "ellentétes";
      const wrong = ["kapcsolatos", "választó", "alárendelő"];
      q.push(createMCQ("mondat", "osszetett_mellér",
        `Milyen viszony van a mondatok között? "${sentence.sentence}"`, correct, wrong));
    } else {
      const correct = "és";
      const wrong = ["vagy", "de", "azonban"];
      q.push(createMCQ("mondat", "osszetett_mellér",
        `Melyik kötőszó köti össze a kapcsolatos mellérendelő mondatokat?`, correct, wrong));
    }
  }

  return q;
}

export function generateOsszetetAlar(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const sentence = pick(SUBORDINATE_SENTENCES, rng);
      const types = ["alanyi", "tárgyi", "határozói", "jelzői"];
      const wrong = types.filter(t => t !== sentence.type);
      q.push(createMCQ("mondat", "osszetett_alár",
        `Milyen alárendelő mondat? "${sentence.sentence}"`, sentence.type, wrong));
    } else if (type === 1) {
      const correct = "jelzői";
      const wrong = ["alanyi", "tárgyi", "határozói"];
      q.push(createMCQ("mondat", "osszetett_alár",
        `Melyik alárendelő mondat írja le a főnevet? "Az a gyerek, aki játékban áll, boldog."`, correct, wrong));
    } else {
      const correct = "határozói";
      const wrong = ["alanyi", "tárgyi", "jelzői"];
      q.push(createMCQ("mondat", "osszetett_alár",
        `Melyik alárendelő mondat a cél, ok vagy feltétel?`, correct, wrong));
    }
  }

  return q;
}

export function generateHasonlatMetafora(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const figure = pick(FIGURES_OF_SPEECH, rng);
      const correct = figure.type;
      const wrong = FIGURES_OF_SPEECH.filter(f => f.type !== figure.type).map(f => f.type).slice(0, 3);
      q.push(createMCQ("stilisztika", "hasonlat_metafora",
        `Mi a szóképet típusa? "${figure.figure}"`, correct, wrong));
    } else if (type === 1) {
      const correct = "hasonlat";
      const wrong = ["metafora", "metonímia", "szinkédoché"];
      q.push(createMCQ("stilisztika", "hasonlat_metafora",
        `Melyik szókép tartalmaz "mint" vagy "olyan, mint" kifejezést?`, correct, wrong));
    } else {
      const correct = "metafora";
      const wrong = ["hasonlat", "metonímia", "allegória"];
      q.push(createMCQ("stilisztika", "hasonlat_metafora",
        `Mely szóképben azonosítjuk az egy dolog másik dologgal? "Az élet egy színpad."`, correct, wrong));
    }
  }

  return q;
}

export function generateMegszemelyesites(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const correct = "Az idő szalad";
      const wrong = ["Az emberek szaladnak", "A ló szalad", "Az autó szalad"];
      q.push(createMCQ("stilisztika", "megszemelyes",
        `Melyik mondatban van beszerzélyesítés?`, correct, wrong));
    } else if (type === 1) {
      const correct = "A szél suttog";
      const wrong = ["A szél fúj", "A szél nagyobb lesz", "A szél hideg"];
      q.push(createMCQ("stilisztika", "megszemelyes",
        `Mely szó mutat beszerzélyesítésre?`, correct, wrong));
    } else {
      const correct = "Szokás szerint az embereknek tulajdonságot adunk élettelen dolgoknak";
      const wrong = ["Egy szót többször használunk", "Ugyanaz a szó összes formájában", "Egy szónak ellentétes értelme"];
      q.push(createMCQ("stilisztika", "megszemelyes",
        `Mit értünk beszerzélyesítés alatt?`, correct, wrong));
    }
  }

  return q;
}

export function generateIdgenSzavak(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const fw = pick(FOREIGN_WORDS, rng);
      const correct = fw.origin;
      const wrong = pick(FOREIGN_WORDS.filter(f => f.origin !== fw.origin), rng).origin;
      const wrong2 = pick(FOREIGN_WORDS.filter(f => f.origin !== fw.origin), rng).origin;
      q.push(createMCQ("szokincs", "idegen_szavak",
        `Honnan ered az idegen szó "${fw.word}"?`, correct, [wrong, wrong2, "latin"]));
    } else if (type === 1) {
      const fw = pick(FOREIGN_WORDS, rng);
      const correct = fw.meaning;
      const wrong = ["állat", "szín", "mozgás"];
      q.push(createMCQ("szokincs", "idegen_szavak",
        `Mit jelent az "${fw.word}" szó?`, correct, wrong));
    } else {
      const correct = "Más nyelvekből átvett szavak";
      const wrong = ["Régi magyar szavak", "Összetett szavak", "Szleng kifejezések"];
      q.push(createMCQ("szokincs", "idegen_szavak",
        `Mit értünk idegen szavak alatt?`, correct, wrong));
    }
  }

  return q;
}

export function generateNyelvcsal(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const family = pick(LANGUAGE_FAMILIES, rng);
      const correct = family.family;
      const wrong = LANGUAGE_FAMILIES.filter(f => f.family !== family.family).map(f => f.family).slice(0, 3);
      q.push(createMCQ("nyelvtort", "nyelvcsal",
        `Melyik nyelvcsaládhoz tartoznak ezek: ${family.members.join(", ")}?`, correct, wrong));
    } else if (type === 1) {
      const correct = "finnugor";
      const wrong = ["indoeurópai", "szláv", "szokovi"];
      q.push(createMCQ("nyelvtort", "nyelvcsal",
        `A magyar nyelv melyik nyelvcsaládhoz tartozik?`, correct, wrong));
    } else {
      const family = pick(LANGUAGE_FAMILIES, rng);
      const correct = family.members[0];
      const wrong = LANGUAGE_FAMILIES.filter(f => f.family !== family.family).flatMap(f => f.members).slice(0, 3);
      q.push(createMCQ("nyelvtort", "nyelvcsal",
        `Melyik nyelvcsalád tagja?`, correct, wrong));
    }
  }

  return q;
}

export function generateErveles(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const arg = pick(ARGUMENT_TYPES, rng);
      const correct = arg.type;
      const wrong = ARGUMENT_TYPES.filter(a => a.type !== arg.type).map(a => a.type).slice(0, 3);
      q.push(createMCQ("retorika", "erveles_alap",
        `Milyen érvtípus? "${arg.example}"`, correct, wrong));
    } else if (type === 1) {
      const correct = "logikus";
      const wrong = ["tapasztalat alapú", "szokás alapú", "tekintély alapú"];
      q.push(createMCQ("retorika", "erveles_alap",
        `Melyik érv alapul a logikai gondolkodáson?`, correct, wrong));
    } else {
      const correct = "Olyan érv, amely bizonyítékokkal alátámasztott";
      const wrong = ["Olyan érv, amely csak véleményen alapul", "Olyan érv, amely soha nem igaz", "Olyan érv, amely furcsa"];
      q.push(createMCQ("retorika", "erveles_alap",
        `Mit értünk logikus érv alatt?`, correct, wrong));
    }
  }

  return q;
}

export function generateSzovegErtelmez(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 2;
    if (type === 0) {
      const tc = pick(TEXT_COMPREHENSION, rng);
      q.push(createMCQ("szoveg", "ertelmez_halado",
        `"${tc.text}" ${tc.question}`, tc.correct, tc.wrong));
    } else {
      const correct = "Az olvasó értelmi és érzelmi feldolgozása";
      const wrong = ["Csak az olvasás sebessége", "A szöveg hossza", "A szavak száma"];
      q.push(createMCQ("szoveg", "ertelmez_halado",
        `Mit jelent szövegértelmezés?`, correct, wrong));
    }
  }

  return q;
}

export function generateTulajdonnev(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const pn = pick(PROPER_NAMES, rng);
      const correct = pn.type;
      const wrong = PROPER_NAMES.filter(p => p.type !== pn.type).map(p => p.type).slice(0, 3);
      q.push(createMCQ("helyesiras", "tulajdonnev",
        `Milyen típusú tulajdonnév? "${pn.name}"`, correct, wrong));
    } else if (type === 1) {
      const correct = "Nagybetűvel";
      const wrong = ["kisbetűvel", "aposztrófnal", "szóközzel"];
      q.push(createMCQ("helyesiras", "tulajdonnev",
        `Hogyan írjuk a személyneveket?`, correct, wrong));
    } else {
      const acronym = pick(ACRONYMS, rng);
      const correct = acronym.full;
      const wrong = [ACRONYMS.filter(a => a.acronym !== acronym.acronym)[0]?.full || "valami", "állat", "szín"];
      q.push(createMCQ("helyesiras", "tulajdonnev",
        `Mit jelent az "${acronym.acronym}" mozaikszó?`, correct, wrong));
    }
  }

  return q;
}

export function generateEssze(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      const essay = pick(ESSAY_TYPES, rng);
      const correct = essay.type;
      const wrong = ESSAY_TYPES.filter(e => e.type !== essay.type).map(e => e.type).slice(0, 3);
      q.push(createMCQ("fogalmazas", "essze",
        `Milyen típusú esszé? "${essay.example}"`, correct, wrong));
    } else if (type === 1) {
      const correct = "érvelő";
      const wrong = ["leíró", "elbeszélő", "ismeretterjesztő"];
      q.push(createMCQ("fogalmazas", "essze",
        `Mely típusú esszéban próbálunk meggyőzni?`, correct, wrong));
    } else {
      const correct = "Egy rövid, személyes gondolatcsere az írónak saját nézeteiről";
      const wrong = ["Hosszú történet", "Egy emlékezet", "Egy könyv összegzése"];
      q.push(createMCQ("fogalmazas", "essze",
        `Mit értünk esszé alatt?`, correct, wrong));
    }
  }

  return q;
}

// ─── NEW GENERATORS FOR EXPANDED GRADE 6 (15+ NEW SUBTOPICS) ─────────────────

export function generateSzopárAntonimia(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];
  const antonyms = [
    { word: "szép", opposite: "csúnya", pair: "szép - csúnya" },
    { word: "nagy", opposite: "kicsi", pair: "nagy - kicsi" },
    { word: "forró", opposite: "hideg", pair: "forró - hideg" },
    { word: "fény", opposite: "sötétség", pair: "fény - sötétség" },
  ];
  for (let i = 0; i < 30; i++) {
    const data = pick(antonyms, rng);
    const type = i % 3;
    if (type === 0) {
      q.push(createMCQ("szofaj", "szopár_antonimia", `Mi az antoniuma a "${data.word}" szónak?`, data.opposite, [antonyms.filter(a => a.word !== data.word)[0]?.opposite || "válasz", "szinonima", "homonym"]));
    } else if (type === 1) {
      q.push(createMCQ("szofaj", "szopár_antonimia", `Melyik szópár antonim kapcsolat?`, data.pair, ["szép - szépség", "futás - futó", "írni - leírni"]));
    } else {
      q.push(createMCQ("szofaj", "szopár_antonimia", `Mit jelent az antonim szópár?`, "ellentétes jelentésű szavak", ["azonos szófajú szavak", "hasonló hangzású szavak", "egy tőből képzett szavak"]));
    }
  }
  return q;
}

export function generateHomonimia(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createMCQ("szofaj", "homonimia", `Mit jelent a homonímia?`, "azonos alakú, de eltérő jelentésű szavak", ["ugyanazon családhoz tartozó szavak", "ellentétes értelműek", "kölcsönszavak"]));
    } else if (type === 1) {
      q.push(createMCQ("szofaj", "homonimia", `Melyik szó homonimája a "bank" szónak?`, "part (vízpart)", ["szék", "asztal", "pad"]));
    } else {
      q.push(createMCQ("szofaj", "homonimia", `A homonímia jelensége milyen szavak között fordul elő?`, "különböző etimológiájú szavak", ["hasonló szótagszámú szavak", "összetett szavak", "csonkított szavak"]));
    }
  }
  return q;
}

export function generateSzinonimia(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createMCQ("szofaj", "szinonimia", `Mit jelent a szinon imia?`, "azonos vagy nagyon hasonló jelentésű szavak", ["ellentétes értelműek", "azonos alakúak", "homonímia"]));
    } else if (type === 1) {
      q.push(createMCQ("szofaj", "szinonimia", `Melyik szó szinonímája a "szép" szónak?`, "gyönyörű", ["csúnya", "nagy", "piros"]));
    } else {
      q.push(createMCQ("szofaj", "szinonimia", `A szinonimiák között vannak-e árnyalatbeli különbségek?`, "igen, fontosak a stílus és kontextus", ["nem, teljesen azonosak", "nem, szófajuk különbözik", "igen, de nem fontos"]));
    }
  }
  return q;
}

export function generatePrefixumSzuffixum(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createMCQ("szoelem", "prefixum_szuffixum", `Mit jelent a prefixum?`, "a szó elején álló toldalék", ["a szó végén álló toldalék", "a szó közepén álló toldalék", "szóalak"]));
    } else if (type === 1) {
      q.push(createMCQ("szoelem", "prefixum_szuffixum", `Melyik szóban van prefixum?`, "betölteni", ["szépség", "olvasott", "házak"]));
    } else {
      q.push(createMCQ("szoelem", "prefixum_szuffixum", `A magyarban gyakori-e a prefixum?`, "nem, inkább igekötőket és szuffixumokat használunk", ["igen, nagyon gyakori", "csak ritkán fordul elő", "csak a német szavakban"]));
    }
  }
  return q;
}

export function generateSzóképzés(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createMCQ("szoelem", "szóképzés", `Mit jelent a szóképzés?`, "új szavak létrehozása meglévő szavakból", ["szavak összekapcsolása", "szavak rövidítése", "szavak fordítása"]));
    } else if (type === 1) {
      q.push(createMCQ("szoelem", "szóképzés", `Melyik szó képzéssel jött létre?`, "kék-es (kékes)", ["ház", "kutya", "ember"]));
    } else {
      q.push(createMCQ("szoelem", "szóképzés", `A szóképzésnek hány típusa van?`, "többféle: képzéssel, ragozással, összetétellel", ["csak egy", "csak kettő", "több tucat"]));
    }
  }
  return q;
}

export function generateMondatfajták6(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createMCQ("mondattan", "mondatfajtak_6", `Hány fő mondatfajta van?`, "közlő, kérdő, felszólító", ["kettő", "öt", "tíz"]));
    } else if (type === 1) {
      q.push(createMCQ("mondattan", "mondatfajtak_6", `Milyen mondatfajta ez? "Péter! Gyere ide!"`, "felszólító", ["közlő", "kérdő", "felkiáltó"]));
    } else {
      q.push(createMCQ("mondattan", "mondatfajtak_6", `Mi jellemzi a kérdő mondatot?`, "kérdésjelre végződik", ["felkiáltójellel végződik", "vesszővel végződik", "ponttal végződik"]));
    }
  }
  return q;
}

export function generateSzórend(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createMCQ("mondattan", "szórend", `A magyar nyelv szórendje milyen?`, "viszonylag szabad, de vannak szabályok", ["szigorúan kötött", "teljesen szabad", "fordított"]));
    } else if (type === 1) {
      q.push(createMCQ("mondattan", "szórend", `Mit befolyásol a szórend a magyarban?`, "az értelem és a hangsúly", ["csak az értelmet", "csak a grammatikát", "semmi"]));
    } else {
      q.push(createMCQ("mondattan", "szórend", `Melyik állítás igaz a szórendről?`, "az alany gyakran az állítmány előtt áll", ["az alany mindig az állítmány után áll", "az alanynak nincs helye", "az állítmány nem fontos"]));
    }
  }
  return q;
}

export function generateKötőszók(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createMCQ("mondattan", "kötőszók", `Mit jelent a mellérendelő kötőszó?`, "egyenrangú mondatrészeket vagy mondatokat köti össze", ["alárendelt mondatot csatol", "kiegészítést ad", "hely szerinti viszonyt fejez ki"]));
    } else if (type === 1) {
      q.push(createMCQ("mondattan", "kötőszók", `Melyik a mellérendelő kötőszó?`, "és", ["hogy", "mivel", "ha"]));
    } else {
      q.push(createMCQ("mondattan", "kötőszók", `A kötőszó szófaja mit befolyásol?`, "mondatok vagy mondatrészek közötti viszonyt", ["az igeidőt", "a személyes végződéseket", "az alapalakot"]));
    }
  }
  return q;
}

export function generateMellékmondatok(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createMCQ("mondattan", "mellékmondatok", `Mit jelent a mellékmondат?`, "egy fő mondathoz csatolt mondat, amely kiegészíti azt", ["egy önálló mondat", "egy szószerkezet", "egy szópár"]));
    } else if (type === 1) {
      q.push(createMCQ("mondattan", "mellékmondatok", `Hány fajtája van a mellékmondat-nak?`, "többféle: határozói, tárgyi, melléknévi, stb.", ["csak egy", "csak kettő", "három"]));
    } else {
      q.push(createMCQ("mondattan", "mellékmondatok", `A mellékmondatot általában mi vezeti be?`, "alárendelő kötőszó vagy vonatkozó névmás", ["mellérendelő kötőszó", "prepozició", "többes szám"]));
    }
  }
  return q;
}

export function generateSzövegtípusok6(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createMCQ("szövegtan", "szövegtipusok_6", `Hány fő szövegtípus van?`, "elbeszélő, leíró, érvelő, tudományos", ["kettő", "három", "öt"]));
    } else if (type === 1) {
      q.push(createMCQ("szövegtan", "szövegtipusok_6", `Milyen szövegtípus ez: 'A mackó nagy, barna és bozontos állat.'?`, "leíró", ["elbeszélő", "érvelő", "tudományos"]));
    } else {
      q.push(createMCQ("szövegtan", "szövegtipusok_6", `Az érvelő szöveg célja?`, "meggyőzni az olvasót", ["történetet mesélni", "leírni egy dolgot", "információt adni"]));
    }
  }
  return q;
}

export function generateSzövegkohézió(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createMCQ("szövegtan", "szövegkohézió", `Mit jelent a szövegkohézió?`, "a szöveg részei közötti logikai és nyelvi összekapcsolódás", ["szöveg hossza", "szöveg nyelve", "szöveg témája"]));
    } else if (type === 1) {
      q.push(createMCQ("szövegtan", "szövegkohézió", `Mi biztosítja a szövegkohéziót?`, "kötőszók, visszautaló szavak, ismétlés", ["csak nagy betű", "csak vizsgálatok", "csak hosszú mondatok"]));
    } else {
      q.push(createMCQ("szövegtan", "szövegkohézió", `A szövegkohézió szükséges-e?`, "igen, nélküle nem érthető a szöveg", ["nem, nem fontos", "csak bizonyos szövegekben", "csak írásban"]));
    }
  }
  return q;
}

export function generateRetorikai(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createMCQ("stilus", "retorikai_kérdések", `Mit jelent a retorikai kérdés?`, "kérdés, melyre nem várunk választ, csak hatást akarunk elérni", ["egyszerű kérdés", "tanácsadó kérdés", "fenyegető kérdés"]));
    } else if (type === 1) {
      q.push(createMCQ("stilus", "retorikai_kérdések", `Melyik retorikai eszköz a hiperbola?`, "túlzás", ["csökkentés", "ismétlés", "szóképiesítés"]));
    } else {
      q.push(createMCQ("stilus", "retorikai_kérdések", `A retorikai kérdés milyen mondatfajtában fordul elő?`, "kérdő mondatban, de nem vár választ", ["közlő mondatban", "felszólító mondatban", "feltételes mondatban"]));
    }
  }
  return q;
}

export function generateIntonáció(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createMCQ("stilus", "intonáció_ritmus", `Mit jelent az intonáció?`, "a beszéd során használt hangmagasság és ritmus", ["szavaink tárgyalása", "helyes kiejtés", "betűk sora"]));
    } else if (type === 1) {
      q.push(createMCQ("stilus", "intonáció_ritmus", `Mit jelent a ritmus egy szövegben?`, "az ismétlődő szótagok, szavak vagy mondatok mintázata", ["szöveg hossza", "szöveg szérkezete", "szöveg témája"]));
    } else {
      q.push(createMCQ("stilus", "intonáció_ritmus", `Az intonáció milyen szerepe van a szöveg értelmezésében?`, "nagy, meghatározza a mondat értelmet és hangulatát", ["nincs semmilyen", "csak szépítési", "csak nyelvtani"]));
    }
  }
  return q;
}

export function generateSzómagyarázat(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createMCQ("szofaj", "szómagyarázat", `Mit jelent az etimológia?`, "szavak eredete és története", ["szavak kiejtése", "szavak helyesírása", "szavak szófaja"]));
    } else if (type === 1) {
      q.push(createMCQ("szofaj", "szómagyarázat", `Milyen nyelvekből kerültek kölcsönszavak a magyarba?`, "német, angol, szláv, török, osztrák stb.", ["csak angol", "csak német", "csak török"]));
    } else {
      q.push(createMCQ("szofaj", "szómagyarázat", `A szómagyarázat segít-e a helyesírásban?`, "igen, ismert szavakból könnyebb memorizálni", ["nem", "csak bizonyos szavakban", "csak írásban"]));
    }
  }
  return q;
}

export function generateKözlekedés(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];
  for (let i = 0; i < 30; i++) {
    const type = i % 3;
    if (type === 0) {
      q.push(createMCQ("szövegtan", "közlekedés_szövegelemzés", `Mit jelent a szövegkommunikáció?`, "üzenet közvetítése beszélő és hallgató között", ["szavak összekapcsolása", "nyelvtan használata", "szóvégi hangsúly"]));
    } else if (type === 1) {
      q.push(createMCQ("szövegtan", "közlekedés_szövegelemzés", `A kommunikáció mely tényezői fontosak?`, "küldő, üzenet, csatorna, fogadó, kontextus", ["csak az üzenet", "csak a csatorna", "csak a kontextus"]));
    } else {
      q.push(createMCQ("szövegtan", "közlekedés_szövegelemzése", `A szövegelemzés célja?`, "a szöveg értelme, szerkezete és hatása megértése", ["szavak számlálása", "helyesírás ellenőrzése", "betűkészlet azonosítása"]));
    }
  }
  return q;
}

// ─── TYPING GENERATORS FOR GRADE 6 ─────────────────────────────────────────

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

export function generateSzopárAntonimia_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("szofaj", "szopár_antonimia", "Írd be az 'nagy' szó antonimaját!", ["kicsi", "pici"], "Ellentétes jelentésű szó"));
    } else {
      q.push(createTyping("szofaj", "szopár_antonimia", "Mondj egy szópárt, ahol az egyik szó az antoniuma a másiknak!", ["szép - csúnya", "forró - hideg", "világos - sötét"], "Pl. szép - csúnya"));
    }
  }
  return q;
}

export function generateHomonimia_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("szofaj", "homonimia", "Mit jelent a homonímia? Röviden válaszolj!", ["azonos alakú, de eltérő jelentésű szavak"], "Pl. bank = pénzintézet, vízpart"));
    } else {
      q.push(createTyping("szofaj", "homonimia", "Mondj egy homonimapárt!", ["bank - part", "könyv - könt"], "Pl. bank (pénzintézet) - bank (vízpart)"));
    }
  }
  return q;
}

export function generateSzinonimia_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    q.push(createTyping("szofaj", "szinonimia", i % 2 === 0 ? "Írd be a 'gyors' szó szinonímáját!" : "Mondj egy szónímapaárt!", ["gyors - sebes", "szépség - schönheit", "futás - rohannás"], "Hasonló jelentésű szavak"));
  }
  return q;
}

export function generatePrefixumSzuffixum_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("szoelem", "prefixum_szuffixum", "Mi az a prefixum? Röviden írj!", ["a szó elején álló toldalék"], "Pl. be-, ki-, fel-"));
    } else {
      q.push(createTyping("szoelem", "prefixum_szuffixum", "Mondj egy szót prefixummal!", ["betölteni", "kifutni", "felmenni"], "Pl. be-, ki-, fel-"));
    }
  }
  return q;
}

export function generateSzóképzés_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("szoelem", "szóképzés", "Mi a szóképzés? Röviden válaszolj!", ["új szavak létrehozása meglévő szavakból"], "Tő + toldalék"));
    } else {
      q.push(createTyping("szoelem", "szóképzés", "Mondj egy szópárt, ahol az egyik szó képzésből jött létre!", ["szép - szépség", "piros - pirosság"], "Pl. szép - szépség"));
    }
  }
  return q;
}

export function generateMondatfajták6_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("mondattan", "mondatfajtak_6", "Hány fő mondatfajta van? Sorolj fel!", ["közlő, kérdő, felszólító"], "Közlő, kérdő, felszólító"));
    } else {
      q.push(createTyping("mondattan", "mondatfajtak_6", "Melyik mondatfajta ezt a mondatot: 'Mit csinálsz?'", ["kérdő"], "Kérdőjellel végződik"));
    }
  }
  return q;
}

export function generateSzórend_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("mondattan", "szórend", "Milyen a magyar szórmend?", ["viszonylag szabad, de vannak szabályok"], "Nem szigorúan kötött"));
    } else {
      q.push(createTyping("mondattan", "szórend", "Mit befolyásol a szórend?", ["az értelem és hangsúly"], "Logikai sorrend"));
    }
  }
  return q;
}

export function generateKötőszók_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("mondattan", "kötőszók", "Mi a mellérendelő kötőszó?", ["egyenrangú mondatrészeket köt össze"], "Pl. és, vagy"));
    } else {
      q.push(createTyping("mondattan", "kötőszók", "Mondj egy mellérendelő kötőszót!", ["és", "vagy", "azonban"], "Pl. és, vagy, valamint"));
    }
  }
  return q;
}

export function generateMellékmondatok_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("mondattan", "mellékmondatok", "Mit jelent a mellékmondntat?", ["fő mondathoz csatolt mondat"], "Alárendelő viszony"));
    } else {
      q.push(createTyping("mondattan", "mellékmondatok", "Mi vezethet be egy mellékmondat-at?", ["alárendelő kötőszó vagy vonatkozó névmás"], "Hogy, mivel, ha, amely"));
    }
  }
  return q;
}

export function generateSzövegtípusok6_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("szövegtan", "szövegtipusok_6", "Sorolj fel szövegtípusokat!", ["elbeszélő, leíró, érvelő, tudományos"], "Négy fő típus"));
    } else {
      q.push(createTyping("szövegtan", "szövegtipusok_6", "Mi az érvelő szöveg célja?", ["meggyőzni az olvasót"], "Argumentáció"));
    }
  }
  return q;
}

export function generateSzövegkohézió_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("szövegtan", "szövegkohézió", "Mit jelent a szövegkohézió?", ["szöveg részei közötti logikai összekapcsolódás"], "Összekapcsoltság"));
    } else {
      q.push(createTyping("szövegtan", "szövegkohézió", "Mi biztosítja a szövegkohéziót?", ["kötőszók, visszautaló szavak"], "Szövegszervezés"));
    }
  }
  return q;
}

export function generateRetorikai_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("stilus", "retorikai_kérdések", "Mit jelent a retorikai kérdés?", ["kérdés, melyre nem várunk választ"], "Hatás nélkül"));
    } else {
      q.push(createTyping("stilus", "retorikai_kérdések", "Mondj egy retorikai eszközt!", ["hiperbola", "metafora", "metonímia"], "Pl. hiperbola, metafora"));
    }
  }
  return q;
}

export function generateIntonáció_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("stilus", "intonáció_ritmus", "Mi az intonáció?", ["hangmagasság és ritmus a beszédben"], "Proszodia"));
    } else {
      q.push(createTyping("stilus", "intonáció_ritmus", "Mit jelent a ritmus egy szövegben?", ["ismétlődő szótagok vagy szavak mintázata"], "Metruma"));
    }
  }
  return q;
}

export function generateSzómagyarázat_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("szofaj", "szómagyarázat", "Mit jelent az etimológia?", ["szavak eredete és története"], "Szóeredet"));
    } else {
      q.push(createTyping("szofaj", "szómagyarázat", "Mondj egy kölcsönszót, amit más nyelvből vettünk át!", ["telefon", "számítógép", "autó"], "Pl. telefon, számítógép"));
    }
  }
  return q;
}

export function generateKözlekedés_typing(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  for (let i = 0; i < 10; i++) {
    const type = i % 2;
    if (type === 0) {
      q.push(createTyping("szövegtan", "közlekedés_szövegelemzése", "Mit jelent a szövegkommunikáció?", ["üzenet közvetítése beszélő és hallgató között"], "Információcsere"));
    } else {
      q.push(createTyping("szövegtan", "közlekedés_szövegelemzése", "Sorolj fel kommunikációs tényezőket!", ["küldő, üzenet, csatorna, fogadó"], "Adó-vevő kapcsolat"));
    }
  }
  return q;
}

// ─── EXPORTING ALL GENERATORS ───────────────────────────────────────────────

export const G6_Generators_Hungarian = {
  // Original generators
  osszetett_mellér: generateOsszetetMeller,
  osszetett_alár: generateOsszetetAlar,
  hasonlat_metafora: generateHasonlatMetafora,
  megszemelyes: generateMegszemelyesites,
  idegen_szavak: generateIdgenSzavak,
  nyelvcsal: generateNyelvcsal,
  erveles_alap: generateErveles,
  ertelmez_halado: generateSzovegErtelmez,
  tulajdonnev: generateTulajdonnev,
  essze: generateEssze,
  // New MCQ generators (15 additional)
  szopár_antonimia: generateSzopárAntonimia,
  szopár_antonimia_typing: generateSzopárAntonimia_typing,
  homonimia: generateHomonimia,
  homonimia_typing: generateHomonimia_typing,
  szinonimia: generateSzinonimia,
  szinonimia_typing: generateSzinonimia_typing,
  prefixum_szuffixum: generatePrefixumSzuffixum,
  prefixum_szuffixum_typing: generatePrefixumSzuffixum_typing,
  szóképzés: generateSzóképzés,
  szóképzés_typing: generateSzóképzés_typing,
  mondatfajtak_6: generateMondatfajták6,
  mondatfajtak_6_typing: generateMondatfajták6_typing,
  szórend: generateSzórend,
  szórend_typing: generateSzórend_typing,
  kötőszók: generateKötőszók,
  kötőszók_typing: generateKötőszók_typing,
  mellékmondatok: generateMellékmondatok,
  mellékmondatok_typing: generateMellékmondatok_typing,
  szövegtipusok_6: generateSzövegtípusok6,
  szövegtipusok_6_typing: generateSzövegtípusok6_typing,
  szövegkohézió: generateSzövegkohézió,
  szövegkohézió_typing: generateSzövegkohézió_typing,
  retorikai_kérdések: generateRetorikai,
  retorikai_kérdések_typing: generateRetorikai_typing,
  intonáció_ritmus: generateIntonáció,
  intonáció_ritmus_typing: generateIntonáció_typing,
  szómagyarázat: generateSzómagyarázat,
  szómagyarázat_typing: generateSzómagyarázat_typing,
  közlekedés_szövegelemzése: generateKözlekedés,
  közlekedés_szövegelemzése_typing: generateKözlekedés_typing,
};
  osszetett_mellér: generateOsszetetMeller,
  osszetett_alár: generateOsszetetAlar,
  hasonlat_metafora: generateHasonlatMetafora,
  megszemelyes: generateMegszemelyesites,
  idegen_szavak: generateIdgenSzavak,
  nyelvcsal: generateNyelvcsal,
  erveles_alap: generateErveles,
  ertelmez_halado: generateSzovegErtelmez,
  tulajdonnev: generateTulajdonnev,
  essze: generateEssze,
};
