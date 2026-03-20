// ─── ROMANIAN GENERATORS (CLASA a VII-a) — FAZA 4 ─────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a VII-a (7th grade) – Vocabulary, Lexical families, Literary text analysis
// Text types: Roman, Nuvela, Liric, Dramatic
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

/** Create typing question */
function createTyping(topic: string, subtopic: string, question: string, answer: string): CurriculumQuestion {
  return { type: "typing", topic, subtopic, question, answer: answer.toLowerCase().trim() };
}

// ─── WORD BANKS & DATA ──────────────────────────────────────────────────────

const VOCABULAR_FAMILIE = [
  { root: "luc-", derivative: "lucru, lucrare, lucrător, lucrator, lucru greu", meaning: "muncă, activitate", type: "familie lexicală" },
  { root: "vorbă-", derivative: "vorbi, vorbă, cuvânt, vorbitorul, vorbire", meaning: "comunicare", type: "familie lexicală" },
  { root: "carte-", derivative: "carte, cartea, cartiță, cartier, carticică", meaning: "obiect/loc de învăţare", type: "familie lexicală" },
  { root: "copil-", derivative: "copil, copilul, copilărie, copilăresc, copilotic", meaning: "tinereţe", type: "familie lexicală" },
  { root: "cale-", derivative: "cale, calea, calez, calul, calapod", meaning: "drum/direcţie", type: "familie lexicală" },
  { root: "casă-", derivative: "casă, casele, casă-n codrul, căsuță, castor", meaning: "locuință", type: "familie lexicală" },
  { root: "om-", derivative: "om, oameni, omenire, omenesc, omenie", meaning: "ființă umană", type: "familie lexicală" },
  { root: "inimă-", derivative: "inimă, inima, inimoasă, inimos, inimă-n spate", meaning: "sentiment/curaj", type: "familie lexicală" },
];

const VOCABULAR_MIJLOACE = [
  { word: "casă", derived_from: "lat. casa", type: "esenţă + diminutiv", examples: "casă → căsuță, casărel", process: "derivare" },
  { word: "cărămidă", derived_from: "lat. calx (var. chalc)", type: "material construcţie", examples: "cărămidă → cărămidular", process: "derivare" },
  { word: "neînţeles", derived_from: "ne- + înţeles", type: "prefix (negaţie) + participiu", examples: "neînţeles → neînţelegere", process: "derivare" },
  { word: "neastâmpărat", derived_from: "ne- + astâmpărat", type: "prefix (negaţie) + adjectiv", examples: "neastâmpărat → neastâmpărare", process: "derivare" },
  { word: "cărturăresc", derived_from: "cărturar + -esc", type: "substantiv + sufix (adjectiv)", examples: "cărturar → cărturăresc → cărturărăţie", process: "derivare" },
  { word: "prieteni", derived_from: "prieten + schimbare valoare gramaticală", type: "plural nominal", examples: "prieten → prieteni", process: "schimbare valoare" },
  { word: "frumos-frumoasă", derived_from: "adjectiv + gen-schimbare", type: "genul adjectivului", examples: "frumos (m) → frumoasă (f)", process: "schimbare valoare" },
];

const TEXT_ROMAN_NUVELA = [
  { genre: "roman", traits: "volum mare, mai mulți eroi, timp lung, conflictul complex", example: "Moromeții de Marin Preda" },
  { genre: "nuvela", traits: "volum mic, 1-2 eroi, timp scurt, un singur conflict central", example: "La gară de Ionel Teodoreanu" },
  { genre: "roman historic", traits: "trecutul ca subiect, evenimete reale, educaţie", example: "Încondeiatul de Mircea Eliade" },
  { genre: "nuvela-comedie", traits: "umor, situații hazlii, final fericit", example: "Dinu din Dinu de Ion Creangă" },
  { genre: "roman psihologic", traits: "lumea interioară a personajelor, sentimente", example: "Viață pdurii de Camil Petrescu" },
  { genre: "nuvela de aventuri", traits: "pericole, acțiune, suspense", example: "Aventuri în Orientul Apropiat" },
];

const TEXT_LIRIC = [
  { form: "sonet", structure: "14 versuri, strofe de 4+4+3+3 versuri", example: "Luceafărul de Mihai Eminescu", traits: "iubire, plângere, meditație" },
  { form: "odă", structure: "poem de laudă, versuri lungi", example: "Oda mării de George Coșbuc", traits: "admirație, solemnitate" },
  { form: "elegie", structure: "poem de plângere, ritm trist", example: "Lacrima de Vasile Alecsandri", traits: "durere, melancoly" },
  { form: "pastel", structure: "tablou liric mic, descriere pitorească", example: "Plouă de Ion Pillat", traits: "imagine naturală, emoție" },
  { form: "baladă", structure: "poveste narativă în vers", example: "Mioriță (trad.)", traits: "mister, magie, tragic" },
  { form: "himn", structure: "poem grandioc, versuri majore", example: "Deșteaptă-te române!", traits: "patriotism, apel" },
];

const TEXT_DRAMATIC = [
  { genre: "comedie", traits: "umor, personaje ridicole, conflicte minore, final fericit", example: "Kir Ianuleo de George Topîrceanu", conflict: "misunderstanding, deceiving" },
  { genre: "dramă", traits: "conflict serios, suferință, calamități, final trist", example: "Frații de Mihail Drumeș", conflict: "moral, familial" },
  { genre: "tragedie", traits: "destin fatal, eroi nobilị, iobire și moarte", example: "Romeo și Julieta (adaptare RO)" },
  { genre: "tragi-comedie", traits: "mix de comic și tragic, final ambiguu", example: "O scenă în iad", conflict: "paradox" },
  { genre: "comedie sentimentală", traits: "umor ușor, iubire, final fericit", example: "O noapte furtunoasă de I.L.Caragiale" },
  { genre: "dramă social", traits: "denuncia injustiției, conflictul social", example: "Plecul de Ion Luca Caragiale" },
];

// ─── GENERATORS ────────────────────────────────────────────────────────────

function vocabular_familie_lexicala(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const voc = VOCABULAR_FAMILIE[i % VOCABULAR_FAMILIE.length];

    questions.push(
      createMCQ(
        "Romanian-C7-P4",
        "vocabular_familie_lexicala",
        `Din familia lexicală a rădăcinii "${voc.root}" face parte:`,
        voc.derivative.split(",")[0],
        shuffle(
          voc.derivative.split(",").slice(0, 2).map(w => w.trim()).concat([
            pick(VOCABULAR_FAMILIE.filter(v => v.root !== voc.root), rng).derivative.split(",")[0],
          ]),
          rng
        ).slice(0, 3),
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function vocabular_mijloace(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const voc = VOCABULAR_MIJLOACE[i % VOCABULAR_MIJLOACE.length];

    questions.push(
      createMCQ(
        "Romanian-C7-P4",
        "vocabular_mijloace",
        `Cuvântul "${voc.word}" a fost format prin ${voc.process} și aparține categoriei "${voc.type}". Care din exemplele de derivare e correct?`,
        voc.examples.split("→")[0],
        [
          voc.examples.split("→")[1],
          pick(VOCABULAR_MIJLOACE.filter(v => v.word !== voc.word), rng).examples.split("→")[0],
          `derivare negramaticală`,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function text_roman_nuvela(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const text = TEXT_ROMAN_NUVELA[i % TEXT_ROMAN_NUVELA.length];

    questions.push(
      createMCQ(
        "Romanian-C7-P4",
        "text_roman_nuvela",
        `Care e caracteristica genului ${text.genre}? "${text.traits}"`,
        text.traits,
        [
          pick(TEXT_ROMAN_NUVELA.filter(t => t.genre !== text.genre), rng).traits,
          `volum variabil`,
          `epocă nedeterminată`,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function text_liric_c7(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const liric = TEXT_LIRIC[i % TEXT_LIRIC.length];

    questions.push(
      createMCQ(
        "Romanian-C7-P4",
        "text_liric_c7",
        `Forma lirica "${liric.form}" se caracterizează prin: "${liric.structure}". Exemplu: "${liric.example}". Trasat principal: "${liric.traits}". Care e forma corectă?`,
        liric.form,
        [
          pick(TEXT_LIRIC.filter(l => l.form !== liric.form), rng).form,
          pick(TEXT_LIRIC.filter(l => l.form !== liric.form), rng).form,
          pick(TEXT_LIRIC.filter(l => l.form !== liric.form), rng).form,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

function text_dramatic_c7(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  for (let i = 0; i < 10; i++) {
    const drama = TEXT_DRAMATIC[i % TEXT_DRAMATIC.length];

    questions.push(
      createMCQ(
        "Romanian-C7-P4",
        "text_dramatic_c7",
        `Genul dramatic "${drama.genre}" se caracterizează prin: "${drama.traits}". Care e definiția corectă?`,
        drama.genre,
        [
          pick(TEXT_DRAMATIC.filter(d => d.genre !== drama.genre), rng).genre,
          pick(TEXT_DRAMATIC.filter(d => d.genre !== drama.genre), rng).genre,
          pick(TEXT_DRAMATIC.filter(d => d.genre !== drama.genre), rng).genre,
        ],
        rng
      )
    );
  }

  return shuffle(questions, rng).slice(0, 6);
}

// ─── TYPING QUESTION GENERATORS ────────────────────────────────────────────

function vocabular_familie_lexicala_typing(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];
  const items = [
    { root: "luc-", examples: "lucru, lucrare, lucrător" },
    { root: "vorbă-", examples: "vorbi, vorbă, cuvânt" },
    { root: "carte-", examples: "carte, cartiță, cartier" },
  ];
  for (let i = 0; i < 6; i++) {
    const item = pick(items, rng);
    questions.push(
      createTyping("Romanian-C7-P4", "vocabular_familie_lexicala", `Din rădăcina "${item.root}" se pot forma cuvintele: ________`, item.examples)
    );
  }
  return questions;
}

function vocabular_mijloace_typing(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];
  const items = [
    { word: "neînțeles", process: "derivare cu prefix ne-" },
    { word: "neastâmpărat", process: "derivare cu prefix ne-" },
    { word: "frumos-frumoasă", process: "schimbare de gen" },
  ];
  for (let i = 0; i < 6; i++) {
    const item = pick(items, rng);
    questions.push(
      createTyping("Romanian-C7-P4", "vocabular_mijloace", `Cuvântul "${item.word}" se obține prin: ________`, item.process)
    );
  }
  return questions;
}

function text_roman_nuvela_typing(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];
  const items = [
    { genre: "roman", trait: "volum mare" },
    { genre: "nuvela", trait: "volum mic" },
  ];
  for (let i = 0; i < 6; i++) {
    const item = pick(items, rng);
    questions.push(
      createTyping("Romanian-C7-P4", "text_roman_nuvela", `Genul literar "${item.genre}" se caracterizează prin: ________`, item.trait)
    );
  }
  return questions;
}

function text_liric_typing(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];
  const items = [
    { form: "sonet", structure: "14 versuri" },
    { form: "elegie", structure: "poem de plângere" },
    { form: "baladă", structure: "poveste narativă în vers" },
  ];
  for (let i = 0; i < 6; i++) {
    const item = pick(items, rng);
    questions.push(
      createTyping("Romanian-C7-P4", "text_liric_c7", `Forma lirică "${item.form}" se caracterizează prin: ________`, item.structure)
    );
  }
  return questions;
}

function text_dramatic_typing(seed = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];
  const items = [
    { element: "scenă", definition: "unitate spațio-temporală" },
    { element: "actul piesei", definition: "diviziune principală" },
    { element: "dialog", definition: "vorbire între personaje" },
  ];
  for (let i = 0; i < 6; i++) {
    const item = pick(items, rng);
    questions.push(
      createTyping("Romanian-C7-P4", "text_dramatic_c7", `Elementul dramatic "${item.element}" este: ________`, item.definition)
    );
  }
  return questions;
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const C7P4_Generators = {
  vocabular_familie_lexicala,
  vocabular_mijloace,
  text_roman_nuvela,
  text_liric_c7,
  text_dramatic_c7,
  vocabular_familie_lexicala_typing,
  vocabular_mijloace_typing,
  text_roman_nuvela_typing,
  text_liric_typing,
  text_dramatic_typing,
};
