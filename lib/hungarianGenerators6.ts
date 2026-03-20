// ─── HUNGARIAN GENERATORS GRADE 6 ──────────────────────────────────────────────
// Procedural MCQ question generators for Hungarian Grade 6 (6. osztály) curriculum
// Generates 45 questions per subtopic for advanced language topics
//
// 10 subtopics: Compound sentences, stylistic figures, vocabulary, language history, rhetoric, text comprehension, punctuation, advanced composition
// All questions in Hungarian (Magyar nyelv)
// Grade-appropriate for 11-12 year old students

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

// ─── EXPORTING ALL GENERATORS ───────────────────────────────────────────────

export const G6_Generators_Hungarian = {
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
