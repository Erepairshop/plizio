// ─── ROMANIAN GENERATORS (CLASA a VIII-a) — FAZA 2 ─────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a VIII-a (8th grade) – Advanced subordinate clauses II, Stylistics
// Conditional & concessive subordinates, Stylistic figures & language register
//
// Generates 6 questions per subtopic using seeded PRNG for reproducibility.

import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

/** Seeded PRNG (Mulberry32) */
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
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

/** Create MCQ question with shuffled options */
function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrongOptions: string[],
  rng: () => number
): CurriculumMCQ {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of wrongOptions) {
    if (w !== correct && !seen.has(w)) {
      seen.add(w);
      unique.push(w);
    }
  }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng);
  return {
    type: "mcq",
    topic,
    subtopic,
    question,
    options: opts,
    correct: opts.indexOf(correct),
  };
}

// ─── WORD BANKS & DATA ──────────────────────────────────────────────────────

const SUBORD_CONDITIE = [
  { sentence: "Dacă pleci acum, vei ajunge la timp.", main: "vei ajunge la timp", dependent: "Dacă pleci acum", intro: "Dacă", type: "de condiție" },
  { sentence: "În caz că nu vin, să mă caulezi.", main: "să mă caulezi", dependent: "În caz că nu vin", intro: "În caz că", type: "de condiție" },
  { sentence: "Pe măsură ce crești, vei înțelege mai mult.", main: "vei înțelege mai mult", dependent: "Pe măsură ce crești", intro: "Pe măsură ce", type: "de condiție-timp" },
  { sentence: "Ori dacă vin, ori dacă nu, nu conteaza.", main: "nu conteaza", dependent: "Ori dacă vin, ori dacă nu", intro: "Ori dacă", type: "de condiție-disjuncție" },
  { sentence: "Cu condiția ca tu să fii aici, mă-ntorc.", main: "mă-ntorc", dependent: "Cu condiția ca tu să fii aici", intro: "Cu condiția ca", type: "de condiție" },
];

const SUBORD_CONCESIE = [
  { sentence: "Deși e ploios, merg afară.", main: "merg afară", dependent: "Deși e ploios", intro: "Deși", type: "de concesie" },
  { sentence: "Oricât de mult ar încerca, nu reușește.", main: "nu reușește", dependent: "Oricât de mult ar încerca", intro: "Oricât", type: "de concesie" },
  { sentence: "Măcar că e bolnav, vine la muncă.", main: "vine la muncă", dependent: "Măcar că e bolnav", intro: "Măcar că", type: "de concesie" },
  { sentence: "Chiar dacă nu suntem de acord, trebuie să lucrez.", main: "trebuie să lucrez", dependent: "Chiar dacă nu suntem de acord", intro: "Chiar dacă", type: "de concesie" },
  { sentence: "Oricum ar fi, o s-ajung acolo.", main: "o s-ajung acolo", dependent: "Oricum ar fi", intro: "Oricum", type: "de concesie" },
];

const SUBORD_RECAPITULARE = [
  { sentence: "Cartea pe care o citesc acum e interesantă.", type: "atributivă", intro: "pe care" },
  { sentence: "Se pare că va fi o vreme frumoasă.", type: "predicativă", intro: "că" },
  { sentence: "Am corectat eseul fiindcă aveam greșeli.", type: "de cauză", intro: "fiindcă" },
  { sentence: "Devo sa ajung acolo înainte de ora 5.", type: "de timp", intro: "înainte de" },
  { sentence: "Vorbesc ușor ca să nu-l trezesc.", type: "de scop", intro: "ca să" },
  { sentence: "Dacă studiezi bine, vei trece examenul.", type: "de condiție", intro: "Dacă" },
];

const STILISTICA_FIGURI = [
  { figure: "simbol", definition: "reprezentare concretă a unei idei abstracte", example: "Pasul alb = puritate, speranță", figure_type: "figură de sens" },
  { figure: "alegorie", definition: "povestea cu sens ascuns, personajele sunt idei abstracte", example: "Moara cu noroc = destinul", figure_type: "figură de sens" },
  { figure: "ironie", definition: "spunerea unui lucru cu sens opus, în scop satiric", example: "\"Ce om frumos!\" (în cazul omului rău)", figure_type: "figură de stil" },
  { figure: "antiteză", definition: "opunere de idei/cuvinte cu sens opus", example: "Cer plin de stele, pământ gol de oameni", figure_type: "figură de stil" },
  { figure: "oximoron", definition: "combinație paradoxală de cuvinte cu sens opus", example: "Tăcere gălăgie, frumusețe urâtă", figure_type: "figură de stil" },
  { figure: "metaforă", definition: "comparație ascunsă, folosire a unui cuvânt în sens figurat", example: "Inima din foc", figure_type: "figură de sens" },
];

const STILISTICA_LIMBAJ = [
  { aspect: "limbaj poetic", feature: "ritm, rima, imagini lirice, vocabular ales", example: "Și cântul păsarelor-și curge lin... (E. Lovinescu)", register: "estetic" },
  { aspect: "limbaj prozaic", feature: "flux natural, fără ritmul specific, mai apropiat de vorbire", example: "Am mers la piață și am cumpărat legume.", register: "neutru/informativ" },
  { aspect: "limbaj formal", feature: "cuvinte alegorice, construcții complexe, vocabular solemn", example: "Prezentez respectuos această cercetare.", register: "oficial" },
  { aspect: "limbaj informal", feature: "vorbire desfrâu, cuvinte ușoare, expresii populare", example: "Mă doare capul rău de la curs.", register: "familiar" },
  { aspect: "limbaj uman", feature: "expresii cu afectivitate, emoții, tone personale", example: "Oh, cât mi-e dor de tine!", register: "emoțional" },
  { aspect: "limbaj científic", feature: "termeni tehnici, claritate, obiectivitate", example: "Reacția chimică produce energie termică.", register: "scholarly" },
];

// ─── GENERATORS ────────────────────────────────────────────────────────────

function subord_conditie_concesie(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const conditie = pick(SUBORD_CONDITIE, rng);
    const concesie = pick(SUBORD_CONCESIE, rng);

    questions.push(
      createMCQ(
        "Romanian-C8-P2",
        "subord_conditie_concesie",
        `Din "${conditie.sentence}", propoziția subordonată circumstanțială de ${conditie.type} este:`,
        conditie.dependent,
        [
          conditie.main,
          concesie.dependent,
          `cu introductorul "${conditie.intro}"`,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function subord_recapitulare(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const subord = pick(SUBORD_RECAPITULARE, rng);

    questions.push(
      createMCQ(
        "Romanian-C8-P2",
        "subord_recapitulare",
        `Identifică tipul propozițieii subordonate din: "${subord.sentence}"`,
        subord.type,
        shuffle(
          [
            pick(SUBORD_RECAPITULARE.filter(s => s.type !== subord.type), rng).type,
            pick(SUBORD_RECAPITULARE.filter(s => s.type !== subord.type), rng).type,
          ],
          rng
        ),
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function stilistica_figuri_avansate(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const figura = pick(STILISTICA_FIGURI, rng);

    questions.push(
      createMCQ(
        "Romanian-C8-P2",
        "stilistica_figuri_avansate",
        `Figura de stil "${figura.figure}" are definiția: "${figura.definition}". Exemplu: "${figura.example}". Ce fel de figură e aceasta?`,
        figura.figure,
        shuffle(
          [
            pick(STILISTICA_FIGURI.filter(f => f.figure !== figura.figure), rng).figure,
            pick(STILISTICA_FIGURI.filter(f => f.figure !== figura.figure), rng).figure,
          ],
          rng
        ),
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function stilistica_limbaj(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const limbaj = pick(STILISTICA_LIMBAJ, rng);

    questions.push(
      createMCQ(
        "Romanian-C8-P2",
        "stilistica_limbaj",
        `Limbajul "${limbaj.aspect}" se caracterizează prin: "${limbaj.feature}". Exemplu: "${limbaj.example}". Registrul stilistic e:`,
        limbaj.register,
        shuffle(
          [
            pick(STILISTICA_LIMBAJ.filter(l => l.register !== limbaj.register), rng).register,
            pick(STILISTICA_LIMBAJ.filter(l => l.register !== limbaj.register), rng).register,
          ],
          rng
        ),
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const C8P2_Generators = {
  subord_conditie_concesie,
  subord_recapitulare,
  stilistica_figuri_avansate,
  stilistica_limbaj,
};
