// ─── ROMANIAN GENERATORS (CLASA a VIII-a) — FAZA 3 ─────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a VIII-a (8th grade) – Composition (essay, argumentation, summary), Reading comprehension
// Literary currents recap (Romanticism, Realism, Modernism), Studied works
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

const REDACTARE_ESEU = [
  { part: "introducere", description: "prezintă tema și scopul eseului", structure: "1-2 paragrafe, captează atenția", importance: "esențial" },
  { part: "cuprins/dezvoltare", description: "argumentele principale și evidențele", structure: "2-3 paragrafe, fiecare cu o idee principală", importance: "esențial" },
  { part: "concluzie", description: "rezumă ideile și închide eseul", structure: "1 paragraf, răspunde întrebării inițiale", importance: "esențial" },
  { part: "argumente", description: "dovezi, exemple, citații care susțin ideile", structure: "intercalate în cuprins", importance: "esențial" },
  { part: "titlu", description: "atrage atenția și rezumă tema", structure: "scurt, relevant, provocator", importance: "secundar" },
  { part: "tranziții", description: "conectează ideile și paragrafe", structure: "cuvinte de legătură (deci, pe de altă parte)", importance: "importante" },
];

const REDACTARE_ARGUMENTARE = [
  { element: "ipoteză", meaning: "afirmația care trebuie dovedită", example: "Lectura cărților dezvoltă imaginația.", role: "teza inițială" },
  { element: "argumente", meaning: "dovezi care susțin ipoteza", example: "Cărțile conțin descrieri detaliate care stimulează mintea.", role: "sprijin" },
  { element: "contraargumente", meaning: "obiecții sau argumente adverse", example: "Unii cred că cărțile sunt învechite în era digitală.", role: "adresare a oponenților" },
  { element: "refutare", meaning: "răspuns la contraargumente", example: "Cu toate acestea, cărțile rămân o sursă de învățare profundă.", role: "consolidare" },
  { element: "concluzie", meaning: "rezumă argumentele și reafirmă teza", example: "Prin urmare, lectura rămâne esențială pentru dezvoltare.", role: "finalizare" },
  { element: "exemplu", meaning: "ilustrare concretă a ideii", example: "Proust descrie o madeleine și evocă amintiri.", role: "susținere" },
];

const REDACTARE_REZUMAT = [
  { aspect: "plan de idei", meaning: "structurarea ideilor principale și secundare", structure: "arbore cu idei principale și derivate", importanta: "fundamental" },
  { aspect: "idee principală", meaning: "conceptul central al textului", example: "Importanța naturii în literatura romantică", importanta: "crucial" },
  { aspect: "idee secundară", meaning: "idee care susține ideea principală", example: "Descrierea peisajelor reflectă starea emoțională", importanta: "suport" },
  { aspect: "claritate", meaning: "expunerea concisă și ușor de înțeles", structure: "1-2 propoziții per idee", importanta: "essential" },
  { aspect: "proporție", meaning: "distribuirea coperta după importanță", structure: "mai mult spațiu pentru ideile principale", importanta: "important" },
  { aspect: "coeziune", meaning: "legarea ideilor cu cuvinte de tranziție", example: "Pe de o parte..., pe de altă parte...", importanta: "important" },
];

const LECTURA_CURENTE = [
  { curent: "Romantism", traits: "emoție, imaginație, natură, individualitate, revolt împotriva regulilor", authors: "Mihai Eminescu, George Coșbuc", perioada: "1830-1880", example: "Luceafărul - iubire și melancolie" },
  { curent: "Realism", traits: "prezentare fidelă a realității, critică socială, caracterizări psihologice", authors: "Ion Creangă, Liv. Rebreanu", perioada: "1850-1920", example: "Moromeții - viață țărănească adevărată" },
  { curent: "Modernism", traits: "esteticism, formă originală, simbol, estrangement", authors: "Mihai Eminescu, Carmén Sylva", perioada: "1880-1920", example: "Rugaciunea unui Dac - meditație filosofică" },
  { curent: "Decadență", traits: "pesimism, declin, moarte, boală, frumusețe moartă", authors: "Ștefan Gheorghe", perioada: "1890-1910", example: "Versuri melancolice cu imagini de moarte" },
  { curent: "Simbolism", traits: "simbol, sugestie în loc de descriere, muzicalitate", authors: "Ion Pillat", perioada: "1900-1930", example: "Plouă - imagine patetică și meditativă" },
];

const LECTURA_RECAPITULARE = [
  { opera: "Mioriță", author: "autori anonimitradiționali", tip: "baladă populară", tema: "destin fatal, înțelepciune", perioada: "tradițională", personaj_principal: "păstorul" },
  { opera: "Luceafărul", author: "Mihai Eminescu", tip: "poeme, lirică", tema: "iubire imposibilă, melancolie", perioada: "1883", personaj_principal: "Luceafărul (eroina)" },
  { opera: "Ion", author: "Liviu Rebreanu", tip: "roman realist", tema: "viață țărănească, dor de pământ", perioada: "1920", personaj_principal: "Ion" },
  { opera: "Moromeții", author: "Marin Preda", tip: "roman epic", tema: "viață țărănească, tradiție", perioada: "1954", personaj_principal: "Gheorghiță" },
  { opera: "Muma Pădurii", author: "Petre Ispirescu", tip: "povești fantastice", tema: "magie, protecție", perioada: "1875", personaj_principal: "Muma Pădurii" },
  { opera: "O noapte furtunoasă", author: "I.L. Caragiale", tip: "comedie", tema: "intrigă, umor, revelații", perioada: "1912", personaj_principal: "Grigore Ipsilandi" },
];

// ─── GENERATORS ────────────────────────────────────────────────────────────

function redactare_eseu(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const eseu = pick(REDACTARE_ESEU, rng);

    questions.push(
      createMCQ(
        "Romanian-C8-P3",
        "redactare_eseu",
        `Partea eseului numită "${eseu.part}" constă din: "${eseu.description}". Care e structura sa tipică?`,
        eseu.structure,
        shuffle(
          [
            pick(REDACTARE_ESEU.filter(e => e.part !== eseu.part), rng).structure,
            pick(REDACTARE_ESEU.filter(e => e.part !== eseu.part), rng).structure,
            "orice ordine de paragrafe",
          ],
          rng
        ),
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function redactare_argumentare(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const arg = pick(REDACTARE_ARGUMENTARE, rng);

    questions.push(
      createMCQ(
        "Romanian-C8-P3",
        "redactare_argumentare",
        `Elementul argumentativ "${arg.element}" îl definim ca: "${arg.meaning}". Exemplu: "${arg.example}". Ce rol are în text?`,
        arg.role,
        shuffle(
          [
            pick(REDACTARE_ARGUMENTARE.filter(a => a.element !== arg.element), rng).role,
            pick(REDACTARE_ARGUMENTARE.filter(a => a.element !== arg.element), rng).role,
          ],
          rng
        ),
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function redactare_rezumat(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const rez = pick(REDACTARE_REZUMAT, rng);

    questions.push(
      createMCQ(
        "Romanian-C8-P3",
        "redactare_rezumat",
        `Aspectul redactării rezumatelor "${rez.aspect}" se referă la: "${rez.meaning}". Care e importanța?`,
        rez.importanta,
        shuffle(
          [
            pick(REDACTARE_REZUMAT.filter(r => r.aspect !== rez.aspect), rng).importanta,
            pick(REDACTARE_REZUMAT.filter(r => r.aspect !== rez.aspect), rng).importanta,
          ],
          rng
        ),
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function lectura_curente_literare(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const curent = pick(LECTURA_CURENTE, rng);

    questions.push(
      createMCQ(
        "Romanian-C8-P3",
        "lectura_curente_literare",
        `Curentul literar "${curent.curent}" se caracterizează prin: "${curent.traits}". Autori: "${curent.authors}". Care e perioada aproximativă?`,
        curent.perioada,
        shuffle(
          [
            pick(LECTURA_CURENTE.filter(c => c.curent !== curent.curent), rng).perioada,
            pick(LECTURA_CURENTE.filter(c => c.curent !== curent.curent), rng).perioada,
            "1500-1600",
          ],
          rng
        ),
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function lectura_recapitulare(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const opera = pick(LECTURA_RECAPITULARE, rng);

    questions.push(
      createMCQ(
        "Romanian-C8-P3",
        "lectura_recapitulare",
        `Opera "${opera.opera}" de ${opera.author} e un ${opera.tip} cu tema "${opera.tema}", iar personajul principal e "${opera.personaj_principal}". Care e perioada creării?`,
        opera.perioada,
        shuffle(
          [
            pick(LECTURA_RECAPITULARE.filter(o => o.opera !== opera.opera), rng).perioada,
            pick(LECTURA_RECAPITULARE.filter(o => o.opera !== opera.opera), rng).perioada,
            "1800-1850",
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

export const C8P3_Generators = {
  redactare_eseu,
  redactare_argumentare,
  redactare_rezumat,
  lectura_curente_literare,
  lectura_recapitulare,
};
