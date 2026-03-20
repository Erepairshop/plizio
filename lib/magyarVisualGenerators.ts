// ─── MAGYAR VISUAL GENERATORS ──────────────────────────────────────────
// Data pools and generators for Hungarian visual question types

// ─── INTERFACES ───────────────────────────────────────────────────────

export interface MondatItem {
  words: string[];
  sentence: string; // complete sentence for answer
}

export interface HibaItem {
  words: string[];
  errorIndex: number;
  hint?: string;
}

export interface SzófajItem {
  word: string;
  fajta: 'F' | 'I' | 'M'; // Főnév, Ige, Melléknév
}

export interface MondatrészItem {
  words: string[];
  roles: ('A' | 'Á' | 'T')[]; // Alany, Állítmány, Tárgy
}

export interface HiányosItem {
  sentence: string; // contains "___"
  options: string[];
  correctIndex: number;
}

export interface SzócsaládItem {
  root: string;
  words: string[];
  correctIndices: number[];
}

export interface TörténetItem {
  sentences: string[];
  answer: string; // "0 1 2 3" order
}

export interface ToldalékItem {
  root: string;
  endings: string[];
  correctIndex: number;
}

export interface EsetItem {
  sentence: string;
  highlight: string; // kiemelendő szó
  case: 'A' | 'B' | 'D' | 'G'; // Alany, Birtokos, Részeshatározó, Helyhatározó
}

export interface KépItem {
  imageKey: string;
  options: string[];
  correctIndex: number;
}

// ─── MONDATOK (SENTENCE REORDERING) ───────────────────────────────────

export const MONDATOK_POOL: MondatItem[] = [
  {
    words: ["A", "macska", "alszik", "az", "ágyon."],
    sentence: "A macska alszik az ágyon."
  },
  {
    words: ["A", "kutya", "játszik", "a", "kertben."],
    sentence: "A kutya játszik a kertben."
  },
  {
    words: ["Péter", "olvas", "egy", "könyvet."],
    sentence: "Péter olvas egy könyvet."
  },
  {
    words: ["Az", "apuka", "főz", "az", "új", "konyhában."],
    sentence: "Az apuka főz az új konyhában."
  },
  {
    words: ["A", "gyerek", "fut", "az", "iskolai", "udvarban."],
    sentence: "A gyerek fut az iskolai udvarban."
  },
  {
    words: ["A", "szél", "fúja", "a", "fákat."],
    sentence: "A szél fúja a fákat."
  },
  {
    words: ["A", "madár", "énekel", "a", "fákon."],
    sentence: "A madár énekel a fákon."
  },
  {
    words: ["Az", "autó", "halad", "az", "úton."],
    sentence: "Az autó halad az úton."
  },
  {
    words: ["A", "lány", "rajzol", "egy", "szép", "képet."],
    sentence: "A lány rajzol egy szép képet."
  },
  {
    words: ["A", "fiú", "szereti", "a", "sportot."],
    sentence: "A fiú szereti a sportot."
  },
  {
    words: ["A", "hal", "úszik", "a", "vízben."],
    sentence: "A hal úszik a vízben."
  },
  {
    words: ["Az", "anya", "főz", "finom", "levest."],
    sentence: "Az anya főz finom levest."
  },
  {
    words: ["A", "barátok", "játszanak", "focit."],
    sentence: "A barátok játszanak focit."
  },
  {
    words: ["A", "virág", "virágzik", "a", "tavaszban."],
    sentence: "A virág virágzik a tavaszban."
  },
  {
    words: ["A", "tanuló", "tanul", "a", "könyvtárban."],
    sentence: "A tanuló tanul a könyvtárban."
  }
];

// ─── HIBÁS SZAVAK (ERROR DETECTION) ───────────────────────────────────

export const HIBA_POOL: HibaItem[] = [
  {
    words: ["A", "macska", "aluszik", "az", "ágyon."],
    errorIndex: 2,
    hint: "Az ige helyesen: alszik"
  },
  {
    words: ["A", "kutya", "játszik", "a", "kertben."],
    errorIndex: 2,
    hint: "Az ige helyesen: játszik"
  },
  {
    words: ["Péter", "olvaszt", "egy", "könyvet."],
    errorIndex: 1,
    hint: "Az ige helyesen: olvas"
  },
  {
    words: ["Az", "apuka", "fős", "az", "új", "konyhában."],
    errorIndex: 2,
    hint: "Az ige helyesen: főz"
  },
  {
    words: ["A", "gyerek", "fut", "az", "iskolai", "udvaron."],
    errorIndex: 4,
    hint: "Helyesen: udvarban"
  },
  {
    words: ["A", "szél", "fúzza", "a", "fákat."],
    errorIndex: 2,
    hint: "Az ige helyesen: fúja"
  },
  {
    words: ["A", "madár", "énekli", "a", "fákon."],
    errorIndex: 2,
    hint: "Az ige helyesen: énekel"
  },
  {
    words: ["Az", "autó", "halad", "az", "útan."],
    errorIndex: 4,
    hint: "Helyesen: úton"
  },
  {
    words: ["A", "lány", "rajzolt", "egy", "szép", "képet."],
    errorIndex: 1,
    hint: "Az ige helyesen: rajzol"
  },
  {
    words: ["A", "fiú", "szereté", "a", "sportot."],
    errorIndex: 2,
    hint: "Az ige helyesen: szereti"
  }
];

// ─── SZÓFAJ (PART OF SPEECH) ───────────────────────────────────────────

export const SZÓFAJ_POOL: SzófajItem[] = [
  { word: "macska", fajta: 'F' },
  { word: "szép", fajta: 'M' },
  { word: "futni", fajta: 'I' },
  { word: "kutya", fajta: 'F' },
  { word: "ír", fajta: 'I' },
  { word: "gyors", fajta: 'M' },
  { word: "víz", fajta: 'F' },
  { word: "magas", fajta: 'M' },
  { word: "játszani", fajta: 'I' },
  { word: "madár", fajta: 'F' },
  { word: "zöld", fajta: 'M' },
  { word: "olvasni", fajta: 'I' },
  { word: "könyv", fajta: 'F' },
  { word: "aranyszínű", fajta: 'M' },
  { word: "éneklni", fajta: 'I' },
  { word: "város", fajta: 'F' },
  { word: "finom", fajta: 'M' },
  { word: "főzni", fajta: 'I' }
];

// ─── MONDATRÉSZEK (SENTENCE ROLES) ────────────────────────────────────

export const MONDATRÉSZ_POOL: MondatrészItem[] = [
  {
    words: ["A", "macska", "alszik", "az", "ágyon."],
    roles: ['A', 'A', 'Á', 'T']
  },
  {
    words: ["A", "kutya", "szereti", "a", "játékot."],
    roles: ['A', 'A', 'Á', 'T', 'T']
  },
  {
    words: ["Péter", "olvas", "egy", "könyvet."],
    roles: ['A', 'Á', 'T', 'T']
  },
  {
    words: ["Az", "anya", "főz", "finom", "levest."],
    roles: ['A', 'A', 'Á', 'T', 'T']
  },
  {
    words: ["A", "gyerek", "fut", "az", "udvarban."],
    roles: ['A', 'A', 'Á', 'T', 'T']
  },
  {
    words: ["A", "madár", "énekel", "vidáman."],
    roles: ['A', 'A', 'Á', 'T']
  },
  {
    words: ["Az", "autó", "halad", "az", "úton."],
    roles: ['A', 'A', 'Á', 'T', 'T']
  },
  {
    words: ["A", "lány", "rajzol", "egy", "képet."],
    roles: ['A', 'A', 'Á', 'T', 'T']
  },
  {
    words: ["A", "fiú", "szereti", "a", "sportot."],
    roles: ['A', 'A', 'Á', 'T', 'T']
  },
  {
    words: ["A", "hal", "úszik", "vidáman."],
    roles: ['A', 'A', 'Á', 'T']
  }
];

// ─── HIÁNYOS SZÖVEG (FILL IN BLANKS) ──────────────────────────────────

export const HIÁNYOS_POOL: HiányosItem[] = [
  {
    sentence: "A macska ___ az ágyon.",
    options: ["alszik", "játszik", "fut"],
    correctIndex: 0
  },
  {
    sentence: "A kutya ___ a kertben.",
    options: ["alszik", "játszik", "eszi"],
    correctIndex: 1
  },
  {
    sentence: "Péter ___ egy könyvet.",
    options: ["rajzol", "olvas", "ír"],
    correctIndex: 1
  },
  {
    sentence: "Az anya ___ finom levest.",
    options: ["ír", "főz", "rajzol"],
    correctIndex: 1
  },
  {
    sentence: "A gyerek ___ az iskolai udvarban.",
    options: ["olvas", "fut", "alszik"],
    correctIndex: 1
  },
  {
    sentence: "A madár ___ a fákon.",
    options: ["játszik", "alszik", "énekel"],
    correctIndex: 2
  },
  {
    sentence: "Az autó ___ az úton.",
    options: ["alszik", "halad", "futsal"],
    correctIndex: 1
  },
  {
    sentence: "A lány ___ egy szép képet.",
    options: ["rajzol", "ír", "olvas"],
    correctIndex: 0
  },
  {
    sentence: "A fiú ___ a sportot.",
    options: ["szereezi", "szereti", "unja"],
    correctIndex: 1
  },
  {
    sentence: "A hal ___ a vízben.",
    options: ["repül", "fut", "úszik"],
    correctIndex: 2
  }
];

// ─── SZÓCSALÁD (WORD FAMILIES) ────────────────────────────────────────

export const SZÓCSALÁD_POOL: SzócsaládItem[] = [
  {
    root: "szép",
    words: ["szépség", "szépíteni", "szépül", "széplet", "nagyszerű", "gyönyörű"],
    correctIndices: [0, 1, 2]
  },
  {
    root: "játszani",
    words: ["játékos", "játék", "játszótér", "játszma", "vidámság", "móka"],
    correctIndices: [0, 1, 2]
  },
  {
    root: "olvasni",
    words: ["olvasás", "olvasott", "olvasó", "olvasány", "tanítás", "írás"],
    correctIndices: [0, 1, 2]
  },
  {
    root: "főzni",
    words: ["főzés", "főzőcske", "főzött", "főztém", "mosás", "törlés"],
    correctIndices: [0, 1, 2]
  },
  {
    root: "futni",
    words: ["futás", "futó", "futott", "futócsillag", "mászás", "röpülés"],
    correctIndices: [0, 1, 2]
  },
  {
    root: "ír",
    words: ["írás", "írott", "felirat", "tollas", "tanítás", "nyomtatás"],
    correctIndices: [0, 1, 2]
  },
  {
    root: "kert",
    words: ["kertes", "kertész", "kerítés", "kertészet", "házikó", "balkon"],
    correctIndices: [0, 1, 3]
  },
  {
    root: "víz",
    words: ["vizes", "vízcsap", "vízözön", "vízre", "levegő", "száraz"],
    correctIndices: [0, 1, 2]
  }
];

// ─── TÖRTÉNET (STORY ORDERING) ────────────────────────────────────────

export const TÖRTÉNET_POOL: TörténetItem[] = [
  {
    sentences: [
      "Péter reggel felkelt az ágyból.",
      "Leült az asztalhoz és megevett egy szelet kenyeret.",
      "Elment az iskolához.",
      "Az órák végén hazajött és játszott a barátaival."
    ],
    answer: "A macska alszik az ágyon. | A kutya játszik a kertben. | Az anya főz levest. | A gyerek végigszaladja az udvarban."
  },
  {
    sentences: [
      "A macska éhes volt.",
      "Hallotta az ajtó csengőjét.",
      "Kimásztott az ablakhoz.",
      "Meglátott egy egeret az udvaron."
    ],
    answer: "A macska éhes volt. | Hallotta az ajtó csengőjét. | Kimásztott az ablakhoz. | Meglátott egy egeret az udvaron."
  },
  {
    sentences: [
      "Anna reggel magához vette a kirándulási felszerelést.",
      "Meghívta barátait egy sétára.",
      "Elmentek az erdőbe.",
      "Sok szép virágot láttak és fotókat készítettek."
    ],
    answer: "Anna reggel magához vette a kirándulási felszerelést. | Meghívta barátait egy sétára. | Elmentek az erdőbe. | Sok szép virágot láttak és fotókat készítettek."
  }
];

// ─── TOLDALÉKOK (ADJECTIVE/NOUN ENDINGS) ──────────────────────────────

export const TOLDALÉK_POOL: ToldalékItem[] = [
  {
    root: "szép",
    endings: ["a", "o", "e", "u"],
    correctIndex: 0
  },
  {
    root: "nagy",
    endings: ["a", "o", "e", "u"],
    correctIndex: 0
  },
  {
    root: "kicsi",
    endings: ["t", "s", "k", "n"],
    correctIndex: 0
  },
  {
    root: "magas",
    endings: ["a", "o", "e", "ú"],
    correctIndex: 0
  },
  {
    root: "zöld",
    endings: ["e", "a", "o", "u"],
    correctIndex: 0
  },
  {
    root: "vidám",
    endings: ["a", "an", "on", "ú"],
    correctIndex: 0
  },
  {
    root: "fehér",
    endings: ["e", "a", "o", "ú"],
    correctIndex: 0
  },
  {
    root: "sötét",
    endings: ["e", "a", "o", "u"],
    correctIndex: 0
  }
];

// ─── ESETEK (GRAMMATICAL CASES) ────────────────────────────────────────

export const ESET_POOL: EsetItem[] = [
  {
    sentence: "_A macska_ szereti a játékot.",
    highlight: "A macska",
    case: 'A'
  },
  {
    sentence: "A macska _az ágyon_ alszik.",
    highlight: "az ágyon",
    case: 'G'
  },
  {
    sentence: "A kutya _a kertben_ játszik.",
    highlight: "a kertben",
    case: 'G'
  },
  {
    sentence: "Péter _egy könyvet_ olvas.",
    highlight: "egy könyvet",
    case: 'T'
  },
  {
    sentence: "_Az anya_ főz finom levest.",
    highlight: "Az anya",
    case: 'A'
  },
  {
    sentence: "Anna _az erdőben_ szétszórja a virágokat.",
    highlight: "az erdőben",
    case: 'G'
  },
  {
    sentence: "Péter _a kertben_ segít az apukájának.",
    highlight: "a kertben",
    case: 'G'
  },
  {
    sentence: "_A fiú_ szereti a sportot.",
    highlight: "A fiú",
    case: 'A'
  }
];

// ─── KÉPEK (PICTURE RECOGNITION) ──────────────────────────────────────

export const KÉP_POOL: KépItem[] = [
  {
    imageKey: "cat",
    options: ["macska", "kutya", "hal", "madár"],
    correctIndex: 0
  },
  {
    imageKey: "dog",
    options: ["macska", "kutya", "nyúl", "egér"],
    correctIndex: 1
  },
  {
    imageKey: "bird",
    options: ["madár", "hal", "macska", "tarka"],
    correctIndex: 0
  },
  {
    imageKey: "fish",
    options: ["macska", "kutya", "hal", "sün"],
    correctIndex: 2
  },
  {
    imageKey: "tree",
    options: ["virág", "fa", "cserje", "lomb"],
    correctIndex: 1
  },
  {
    imageKey: "house",
    options: ["ház", "templom", "iskola", "irodaépület"],
    correctIndex: 0
  },
  {
    imageKey: "car",
    options: ["busz", "autó", "vonat", "motor"],
    correctIndex: 1
  },
  {
    imageKey: "apple",
    options: ["narancs", "banán", "alma", "körte"],
    correctIndex: 2
  },
  {
    imageKey: "book",
    options: ["könyv", "újság", "füzet", "notebook"],
    correctIndex: 0
  },
  {
    imageKey: "flower",
    options: ["fű", "virág", "sallang", "növény"],
    correctIndex: 1
  }
];

// ─── SHUFFLE UTILITY ──────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ─── GENERATORS ───────────────────────────────────────────────────────

export function genMondatRendezés(count: number) {
  const shuffled = shuffle(MONDATOK_POOL).slice(0, count);
  return shuffled.map(item => ({
    type: 'mondat-rendezés' as const,
    shuffled: shuffle([...item.words]),
    answer: item.sentence,
    words: item.words
  }));
}

export function genHibaKeresés(count: number) {
  const shuffled = shuffle(HIBA_POOL).slice(0, count);
  return shuffled.map(item => ({
    type: 'hiba-keresés' as const,
    words: item.words,
    errorIndex: item.errorIndex,
    hint: item.hint
  }));
}

export function genSzófajSorter(count: number) {
  const shuffled = shuffle(SZÓFAJ_POOL).slice(0, count);
  return shuffled.map(item => ({
    type: 'szófaj-sorter' as const,
    word: item.word,
    correct: item.fajta
  }));
}

export function genMondatrészJelölés(count: number) {
  const shuffled = shuffle(MONDATRÉSZ_POOL).slice(0, count);
  return shuffled.map(item => ({
    type: 'mondatrész-jelölés' as const,
    words: item.words,
    roles: item.roles
  }));
}

export function genHiányosSzöveg(count: number) {
  const shuffled = shuffle(HIÁNYOS_POOL).slice(0, count);
  return shuffled.map(item => ({
    type: 'hiányos-szöveg' as const,
    sentence: item.sentence,
    options: item.options,
    correctIndex: item.correctIndex
  }));
}

export function genSzócsaládFa(count: number) {
  const shuffled = shuffle(SZÓCSALÁD_POOL).slice(0, count);
  return shuffled.map(item => ({
    type: 'szócsalád-fa' as const,
    root: item.root,
    words: shuffle(item.words),
    correctIndices: item.correctIndices
  }));
}

export function genTörténetRendezés(count: number) {
  const shuffled = shuffle(TÖRTÉNET_POOL).slice(0, count);
  return shuffled.map(item => ({
    type: 'történet-rendezés' as const,
    shuffled: shuffle([...item.sentences]),
    answer: item.answer,
    sentences: item.sentences
  }));
}

export function genToldalékVálasztó(count: number) {
  const shuffled = shuffle(TOLDALÉK_POOL).slice(0, count);
  return shuffled.map(item => ({
    type: 'toldalék-választó' as const,
    root: item.root,
    endings: shuffle([...item.endings]),
    correctIndex: item.endings.indexOf(item.endings[item.correctIndex])
  }));
}

export function genEsetJelölés(count: number) {
  const shuffled = shuffle(ESET_POOL).slice(0, count);
  return shuffled.map(item => ({
    type: 'eset-jelölés' as const,
    sentence: item.sentence,
    highlight: item.highlight,
    correct: item.case
  }));
}

export function genKépFelismerés(count: number) {
  const shuffled = shuffle(KÉP_POOL).slice(0, count);
  return shuffled.map(item => ({
    type: 'kép-felismerés' as const,
    imageKey: item.imageKey,
    options: shuffle([...item.options]),
    correctIndex: shuffle([...item.options]).indexOf(item.options[item.correctIndex])
  }));
}

// ─── TYPES ────────────────────────────────────────────────────────────

export type MagyarTestQuestion =
  | ReturnType<typeof genMondatRendezés>[0]
  | ReturnType<typeof genHibaKeresés>[0]
  | ReturnType<typeof genSzófajSorter>[0]
  | ReturnType<typeof genMondatrészJelölés>[0]
  | ReturnType<typeof genHiányosSzöveg>[0]
  | ReturnType<typeof genSzócsaládFa>[0]
  | ReturnType<typeof genTörténetRendezés>[0]
  | ReturnType<typeof genToldalékVálasztó>[0]
  | ReturnType<typeof genEsetJelölés>[0]
  | ReturnType<typeof genKépFelismerés>[0];
