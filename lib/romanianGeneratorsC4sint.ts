// ─── ROMANIAN GENERATORS (CLASA a IV-a) — SINTAXĂ ────────────────────────────
import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

function mulberry32(seed: number) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr]; for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy;
}
function pick<T>(arr: T[], rng: () => number): T { return arr[Math.floor(rng() * arr.length)]; }
function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrongOptions: string[], rng: () => number): CurriculumMCQ {
  const seen = new Set<string>(); const unique: string[] = [];
  for (const w of wrongOptions) { if (w !== correct && !seen.has(w)) { seen.add(w); unique.push(w); } }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng);
  return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) };
}

// ─── 1. ALTE PĂRȚI DE VORBIRE ─────────────────────────────────────────────────

export function gen_alte_parti_c4(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "sintaxa_c4";
  const S = "alte_parti_c4";
  const questions: CurriculumMCQ[] = [];

  questions.push(createMCQ(T, S,
    "Ce parte de vorbire este cuvântul \"ieri\" din propoziția \"Ieri a plouat.\"?",
    "adverb de timp",
    ["adverb de loc", "substantiv", "conjuncție"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce parte de vorbire este cuvântul \"acolo\" din propoziția \"Mergem acolo mâine.\"?",
    "adverb de loc",
    ["adverb de timp", "prepoziție", "pronume"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce parte de vorbire este cuvântul \"frumos\" din propoziția \"Cântă frumos.\"?",
    "adverb de mod",
    ["adjectiv", "adverb de timp", "substantiv"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce parte de vorbire este cuvântul \"și\" din propoziția \"Maria și Ion vin la școală.\"?",
    "conjuncție",
    ["prepoziție", "adverb", "pronume"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce parte de vorbire este cuvântul \"pe\" din propoziția \"Cartea este pe masă.\"?",
    "prepoziție",
    ["conjuncție", "adverb de loc", "adjectiv"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce tip de numeral este \"al treilea\" din propoziția \"El este al treilea în rând.\"?",
    "numeral ordinal",
    ["numeral cardinal", "adjectiv", "adverb"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce parte de vorbire este cuvântul \"deoarece\" din propoziția \"Nu a venit deoarece era bolnav.\"?",
    "conjuncție",
    ["prepoziție", "adverb de mod", "pronume"],
    rng
  ));

  return shuffle(questions, rng);
}

// ─── 2. SUBIECT ȘI PREDICAT ───────────────────────────────────────────────────

export function gen_subiect_predicat_c4(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "sintaxa_c4";
  const S = "subiect_predicat_c4";
  const questions: CurriculumMCQ[] = [];

  questions.push(createMCQ(T, S,
    "Care este subiectul din propoziția \"Copiii se joacă în curte.\"?",
    "Copiii",
    ["se joacă", "în curte", "curte"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Care este predicatul din propoziția \"Mama gătește mâncare bună.\"?",
    "gătește",
    ["Mama", "mâncare", "bună"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce fel de predicat este în propoziția \"Florea este frumoasă.\"?",
    "predicat nominal",
    ["predicat verbal", "subiect", "atribut"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce fel de predicat este în propoziția \"Câinele latră tare.\"?",
    "predicat verbal",
    ["predicat nominal", "complement", "atribut"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "La ce întrebare răspunde subiectul dintr-o propoziție?",
    "Cine? Ce?",
    ["Cui? Despre ce?", "Care? Ce fel de?", "Când? Unde?"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Care este subiectul din propoziția \"Păsările cântă dimineața.\"?",
    "Păsările",
    ["cântă", "dimineața", "frumos"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce parte de propoziție este \"elev\" în \"Ion este un elev silitor.\"?",
    "nume predicativ",
    ["subiect", "complement direct", "atribut"],
    rng
  ));

  return shuffle(questions, rng);
}

// ─── 3. ATRIBUTUL ─────────────────────────────────────────────────────────────

export function gen_atribut_c4(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "sintaxa_c4";
  const S = "atribut_c4";
  const questions: CurriculumMCQ[] = [];

  questions.push(createMCQ(T, S,
    "Ce parte de propoziție este cuvântul \"frumos\" din \"Am văzut un film frumos.\"?",
    "atribut adjectival",
    ["complement direct", "subiect", "predicat"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "La ce întrebări răspunde atributul?",
    "Care? Ce fel de? Al/a/ai/ale cui?",
    ["Cine? Ce?", "Când? Unde? Cum?", "Pe cine? Ce?"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce parte de propoziție este \"fetei\" din \"Cartea fetei este nouă.\"?",
    "atribut substantival",
    ["subiect", "complement indirect", "predicat"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce parte de propoziție este \"roșii\" din \"Am cumpărat mere roșii.\"?",
    "atribut adjectival",
    ["complement direct", "atribut substantival", "predicat nominal"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "De ce parte de propoziție depinde de obicei atributul?",
    "de substantiv",
    ["de verb", "de adverb", "de conjuncție"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce parte de propoziție este \"de lemn\" din \"Am o casă de lemn.\"?",
    "atribut substantival",
    ["complement direct", "atribut adjectival", "complement circumstanțial de loc"],
    rng
  ));

  return shuffle(questions, rng);
}

// ─── 4. COMPLEMENTUL ──────────────────────────────────────────────────────────

export function gen_complement_c4(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "sintaxa_c4";
  const S = "complement_c4";
  const questions: CurriculumMCQ[] = [];

  questions.push(createMCQ(T, S,
    "Ce parte de propoziție este \"pe Maria\" din \"Am văzut-o pe Maria.\"?",
    "complement direct",
    ["complement indirect", "atribut", "subiect"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "La ce întrebări răspunde complementul direct?",
    "Pe cine? Ce?",
    ["Cui? Pentru cine?", "Unde? Când?", "Care? Ce fel de?"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce parte de propoziție este \"Mariei\" din \"I-am dat Mariei o carte.\"?",
    "complement indirect",
    ["complement direct", "subiect", "atribut substantival"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce tip de complement este \"acasă\" din \"Mergem acasă după școală.\"?",
    "complement circumstanțial de loc",
    ["complement circumstanțial de timp", "complement direct", "complement indirect"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce tip de complement este \"mâine\" din \"Plecăm mâine în excursie.\"?",
    "complement circumstanțial de timp",
    ["complement circumstanțial de loc", "complement direct", "atribut"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce tip de complement este \"repede\" din \"Aleargă repede spre casă.\"?",
    "complement circumstanțial de mod",
    ["complement circumstanțial de timp", "complement direct", "complement indirect"],
    rng
  ));

  return shuffle(questions, rng);
}

// ─── 5. FRAZA ȘI PROPOZIȚIA ───────────────────────────────────────────────────

export function gen_fraza_propozitii_c4(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "sintaxa_c4";
  const S = "fraza_propozitii_c4";
  const questions: CurriculumMCQ[] = [];

  questions.push(createMCQ(T, S,
    "O frază este formată din:",
    "două sau mai multe propoziții",
    ["o singură propoziție", "doar verbe și substantive", "cuvinte fără predicat"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce este o propoziție simplă?",
    "o propoziție cu subiect și predicat, fără alte părți de propoziție",
    ["o propoziție cu multe cuvinte", "o frază scurtă", "o propoziție fără subiect"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce este o propoziție dezvoltată?",
    "o propoziție care are, pe lângă subiect și predicat, și alte părți de propoziție",
    ["o frază cu mai multe propoziții", "o propoziție fără predicat", "o propoziție cu un singur cuvânt"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Care dintre următoarele este o frază?",
    "Soarele strălucește și păsările cântă.",
    ["Copilul doarme.", "Vine primăvara!", "Câinele latră tare."],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce este propoziția principală într-o frază?",
    "propoziția care nu depinde de nicio altă propoziție",
    ["propoziția care depinde de propoziția principală", "propoziția fără verb", "orice propoziție din frază"],
    rng
  ));

  questions.push(createMCQ(T, S,
    "Ce este propoziția subordonată?",
    "propoziția care depinde de propoziția principală",
    ["propoziția care nu depinde de nicio altă propoziție", "o frază scurtă", "propoziția cu cel mai mult cuvinte"],
    rng
  ));

  return shuffle(questions, rng);
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────

export const C4_Sint_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
  sintaxa_c4: {
    alte_parti_c4: (seed = 42) => gen_alte_parti_c4(seed),
    subiect_predicat_c4: (seed = 42) => gen_subiect_predicat_c4(seed),
    atribut_c4: (seed = 42) => gen_atribut_c4(seed),
    complement_c4: (seed = 42) => gen_complement_c4(seed),
    fraza_propozitii_c4: (seed = 42) => gen_fraza_propozitii_c4(seed),
  }
};
