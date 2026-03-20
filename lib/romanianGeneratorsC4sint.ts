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

  const questionPool = [
    { q: "Ce parte de vorbire este cuvântul \"ieri\" din propoziția \"Ieri a plouat.\"?", c: "adverb de timp", w: ["adverb de loc", "substantiv", "conjuncție"] },
    { q: "Ce parte de vorbire este cuvântul \"acolo\" din propoziția \"Mergem acolo mâine.\"?", c: "adverb de loc", w: ["adverb de timp", "prepoziție", "pronume"] },
    { q: "Ce parte de vorbire este cuvântul \"frumos\" din propoziția \"Cântă frumos.\"?", c: "adverb de mod", w: ["adjectiv", "adverb de timp", "substantiv"] },
    { q: "Ce parte de vorbire este cuvântul \"și\" din propoziția \"Maria și Ion vin la școală.\"?", c: "conjuncție", w: ["prepoziție", "adverb", "pronume"] },
    { q: "Ce parte de vorbire este cuvântul \"pe\" din propoziția \"Cartea este pe masă.\"?", c: "prepoziție", w: ["conjuncție", "adverb de loc", "adjectiv"] },
    { q: "Ce tip de numeral este \"al treilea\" din propoziția \"El este al treilea în rând.\"?", c: "numeral ordinal", w: ["numeral cardinal", "adjectiv", "adverb"] },
    { q: "Ce parte de vorbire este cuvântul \"deoarece\" din propoziția \"Nu a venit deoarece era bolnav.\"?", c: "conjuncție", w: ["prepoziție", "adverb de mod", "pronume"] },
    { q: "Ce parte de vorbire este cuvântul \"nu\" din propoziția \"Nu mă gândesc la el.\"?", c: "adverb de negație", w: ["adjectiv", "prepoziție", "pronume"] },
    { q: "Ce parte de vorbire este \"chiar\" din propoziția \"El chiar nu vrea să plece.\"?", c: "adverb de intensitate", w: ["adverb de timp", "conjuncție", "adjectiv"] },
    { q: "Ce parte de vorbire este \"sau\" din propoziția \"Vii acum sau mai târziu?\"?", c: "conjuncție", w: ["adverb", "prepoziție", "pronume"] },
    { q: "Ce parte de vorbire este \"lângă\" din propoziția \"Casa lui este lângă apă.\"?", c: "prepoziție", w: ["adverb de loc", "adjectiv", "verb"] },
    { q: "Ce parte de vorbire este \"prea\" din propoziția \"Mâncarea este prea fierbinte.\"?", c: "adverb de intensitate", w: ["adjectiv", "adverb de mod", "substantiv"] },
    { q: "Ce parte de vorbire este \"repede\" din propoziția \"Copilul aleargă repede.\"?", c: "adverb de mod", w: ["adjectiv", "substantiv", "adverb de timp"] },
    { q: "Ce parte de vorbire este \"cinci\" din propoziția \"Am cinci mere.\"?", c: "numeral cardinal", w: ["numeral ordinal", "adjectiv", "substantiv"] },
  ];

  const selectedQuestions = shuffle(questionPool, rng).slice(0, 7);
  const questions: CurriculumMCQ[] = [];

  for (const item of selectedQuestions) {
    questions.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }

  return shuffle(questions, rng);
}

// ─── 2. SUBIECT ȘI PREDICAT ───────────────────────────────────────────────────

export function gen_subiect_predicat_c4(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "sintaxa_c4";
  const S = "subiect_predicat_c4";

  const questionPool = [
    { q: "Care este subiectul din propoziția \"Copiii se joacă în curte.\"?", c: "Copiii", w: ["se joacă", "în curte", "curte"] },
    { q: "Care este predicatul din propoziția \"Mama gătește mâncare bună.\"?", c: "gătește", w: ["Mama", "mâncare", "bună"] },
    { q: "Ce fel de predicat este în propoziția \"Florea este frumoasă.\"?", c: "predicat nominal", w: ["predicat verbal", "subiect", "atribut"] },
    { q: "Ce fel de predicat este în propoziția \"Câinele latră tare.\"?", c: "predicat verbal", w: ["predicat nominal", "complement", "atribut"] },
    { q: "La ce întrebare răspunde subiectul dintr-o propoziție?", c: "Cine? Ce?", w: ["Cui? Despre ce?", "Care? Ce fel de?", "Când? Unde?"] },
    { q: "Care este subiectul din propoziția \"Păsările cântă dimineața.\"?", c: "Păsările", w: ["cântă", "dimineața", "frumos"] },
    { q: "Ce parte de propoziție este \"elev\" în \"Ion este un elev silitor.\"?", c: "nume predicativ", w: ["subiect", "complement direct", "atribut"] },
    { q: "Care este predicatul din propoziția \"Pisica doarme pe pat.\"?", c: "doarme", w: ["Pisica", "pe pat", "doarme pe"] },
    { q: "Ce fel de predicat este în propoziția \"Elevii muncesc cu plăcere.\"?", c: "predicat verbal", w: ["predicat nominal", "complement", "subiect"] },
    { q: "Care este subiectul din propoziția \"Flori frumoase cresceau în grădină.\"?", c: "Flori", w: ["frumoase", "în grădină", "cresceau"] },
    { q: "Ce fel de predicat este \"rămâne\" în propoziția \"Ion rămâne acasă.\"?", c: "predicat verbal", w: ["predicat nominal", "complement circumstanțial", "atribut"] },
    { q: "Care este subiectul din propoziția \"Jucătorii câștigă meciul.\"?", c: "Jucătorii", w: ["câștigă", "meciul", "meci"] },
    { q: "Ce fel de predicat este în propoziția \"El pare obosit.\"?", c: "predicat nominal", w: ["predicat verbal", "complement", "atribut"] },
    { q: "Ce parte de propoziție este \"profesor\" în \"Tatăl meu este profesor.\"?", c: "nume predicativ", w: ["subiect", "atribut", "complement direct"] },
    { q: "La ce răspunde predicatul dintr-o propoziție?", c: "Ce face subiectul? Cum este?", w: ["Cine? Ce?", "Unde? Când?", "Al cui? De ce?"] },
  ];

  const selectedQuestions = shuffle(questionPool, rng).slice(0, 7);
  const questions: CurriculumMCQ[] = [];

  for (const item of selectedQuestions) {
    questions.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }

  return shuffle(questions, rng);
}

// ─── 3. ATRIBUTUL ─────────────────────────────────────────────────────────────

export function gen_atribut_c4(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "sintaxa_c4";
  const S = "atribut_c4";

  const questionPool = [
    { q: "Ce parte de propoziție este cuvântul \"frumos\" din \"Am văzut un film frumos.\"?", c: "atribut adjectival", w: ["complement direct", "subiect", "predicat"] },
    { q: "La ce întrebări răspunde atributul?", c: "Care? Ce fel de? Al/a/ai/ale cui?", w: ["Cine? Ce?", "Când? Unde? Cum?", "Pe cine? Ce?"] },
    { q: "Ce parte de propoziție este \"fetei\" din \"Cartea fetei este nouă.\"?", c: "atribut substantival", w: ["subiect", "complement indirect", "predicat"] },
    { q: "Ce parte de propoziție este \"roșii\" din \"Am cumpărat mere roșii.\"?", c: "atribut adjectival", w: ["complement direct", "atribut substantival", "predicat nominal"] },
    { q: "De ce parte de propoziție depinde de obicei atributul?", c: "de substantiv", w: ["de verb", "de adverb", "de conjuncție"] },
    { q: "Ce parte de propoziție este \"de lemn\" din \"Am o casă de lemn.\"?", c: "atribut substantival", w: ["complement direct", "atribut adjectival", "complement circumstanțial de loc"] },
    { q: "Ce parte de propoziție este \"alb\" din \"Vreau un cărțel alb.\"?", c: "atribut adjectival", w: ["atribut substantival", "complement direct", "complement indirect"] },
    { q: "Ce parte de propoziție este \"tatălui\" din \"Prietenul tatălui este doctor.\"?", c: "atribut substantival", w: ["subiect", "complement indirect", "predicat nominal"] },
    { q: "Ce parte de propoziție este \"mare\" din \"Avem o casă mare.\"?", c: "atribut adjectival", w: ["complement direct", "subiect", "atribut substantival"] },
    { q: "Ce parte de propoziție este \"școlarului\" din \"Ghiozul școlarului este greu.\"?", c: "atribut substantival", w: ["complement indirect", "subiect", "atribut adjectival"] },
    { q: "Ce parte de propoziție este \"iuți\" din \"Caii iuți aleargă repede.\"?", c: "atribut adjectival", w: ["complement direct", "atribut substantival", "predicat verbal"] },
    { q: "Ce parte de propoziție este \"albă\" din \"Fetița albă face temele.\"?", c: "atribut adjectival", w: ["subiect", "complement direct", "predicat nominal"] },
    { q: "De ce parte de vorbire poate fi un atribut adjectival?", c: "de adjectiv", w: ["de verb", "de pronume", "de adverb"] },
    { q: "Ce parte de propoziție este \"din pâine\" din \"Mânânc o felie din pâine neagră.\"?", c: "atribut substantival", w: ["complement direct", "complement circumstanțial", "predicat"] },
  ];

  const selectedQuestions = shuffle(questionPool, rng).slice(0, 7);
  const questions: CurriculumMCQ[] = [];

  for (const item of selectedQuestions) {
    questions.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }

  return shuffle(questions, rng);
}

// ─── 4. COMPLEMENTUL ──────────────────────────────────────────────────────────

export function gen_complement_c4(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "sintaxa_c4";
  const S = "complement_c4";

  const questionPool = [
    { q: "Ce parte de propoziție este \"pe Maria\" din \"Am văzut-o pe Maria.\"?", c: "complement direct", w: ["complement indirect", "atribut", "subiect"] },
    { q: "La ce întrebări răspunde complementul direct?", c: "Pe cine? Ce?", w: ["Cui? Pentru cine?", "Unde? Când?", "Care? Ce fel de?"] },
    { q: "Ce parte de propoziție este \"Mariei\" din \"I-am dat Mariei o carte.\"?", c: "complement indirect", w: ["complement direct", "subiect", "atribut substantival"] },
    { q: "Ce tip de complement este \"acasă\" din \"Mergem acasă după școală.\"?", c: "complement circumstanțial de loc", w: ["complement circumstanțial de timp", "complement direct", "complement indirect"] },
    { q: "Ce tip de complement este \"mâine\" din \"Plecăm mâine în excursie.\"?", c: "complement circumstanțial de timp", w: ["complement circumstanțial de loc", "complement direct", "atribut"] },
    { q: "Ce tip de complement este \"repede\" din \"Aleargă repede spre casă.\"?", c: "complement circumstanțial de mod", w: ["complement circumstanțial de timp", "complement direct", "complement indirect"] },
    { q: "Ce parte de propoziție este \"carte\" din \"Copilul citește o carte.\"?", c: "complement direct", w: ["complement indirect", "complement circumstanțial", "atribut"] },
    { q: "Ce tip de complement este \"în parc\" din \"Jucăm în parc.\"?", c: "complement circumstanțial de loc", w: ["complement direct", "complement indirect", "complement circumstanțial de timp"] },
    { q: "Ce tip de complement este \"zilele astea\" din \"Lucrez zilele astea mult.\"?", c: "complement circumstanțial de timp", w: ["complement circumstanțial de loc", "complement direct", "atribut"] },
    { q: "Ce parte de propoziție este \"prietenului\" din \"I-am dat o carte prietenului.\"?", c: "complement indirect", w: ["complement direct", "subiect", "atribut"] },
    { q: "Ce tip de complement este \"cu plăcere\" din \"Mânânc cu plăcere.\"?", c: "complement circumstanțial de mod", w: ["complement circumstanțial de timp", "complement direct", "atribut"] },
    { q: "Ce parte de propoziție este \"ploaie\" din \"Vremea aduce ploaie.\"?", c: "complement direct", w: ["complement indirect", "atribut", "subiect"] },
    { q: "Ce tip de complement este \"pentru că\" din \"Nu merg pentru că sunt obosit.\"?", c: "complement circumstanțial de cauză", w: ["complement circumstanțial de scop", "complement direct", "complement circumstanțial de mod"] },
    { q: "Ce tip de complement este \"cu grijă\" din \"Lucrez cu grijă.\"?", c: "complement circumstanțial de mod", w: ["complement circumstanțial de loc", "complement indirect", "atribut"] },
    { q: "La ce răspunde complementul circumstanțial de loc?", c: "Unde?", w: ["Cine?", "Când?", "Cum?"] },
  ];

  const selectedQuestions = shuffle(questionPool, rng).slice(0, 7);
  const questions: CurriculumMCQ[] = [];

  for (const item of selectedQuestions) {
    questions.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }

  return shuffle(questions, rng);
}

// ─── 5. FRAZA ȘI PROPOZIȚIA ───────────────────────────────────────────────────

export function gen_fraza_propozitii_c4(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "sintaxa_c4";
  const S = "fraza_propozitii_c4";

  const questionPool = [
    { q: "O frază este formată din:", c: "două sau mai multe propoziții", w: ["o singură propoziție", "doar verbe și substantive", "cuvinte fără predicat"] },
    { q: "Ce este o propoziție simplă?", c: "o propoziție cu subiect și predicat, fără alte părți de propoziție", w: ["o propoziție cu multe cuvinte", "o frază scurtă", "o propoziție fără subiect"] },
    { q: "Ce este o propoziție dezvoltată?", c: "o propoziție care are, pe lângă subiect și predicat, și alte părți de propoziție", w: ["o frază cu mai multe propoziții", "o propoziție fără predicat", "o propoziție cu un singur cuvânt"] },
    { q: "Care dintre următoarele este o frază?", c: "Soarele strălucește și păsările cântă.", w: ["Copilul doarme.", "Vine primăvara!", "Câinele latră tare."] },
    { q: "Ce este propoziția principală într-o frază?", c: "propoziția care nu depinde de nicio altă propoziție", w: ["propoziția care depinde de propoziția principală", "propoziția fără verb", "orice propoziție din frază"] },
    { q: "Ce este propoziția subordonată?", c: "propoziția care depinde de propoziția principală", w: ["propoziția care nu depinde de nicio altă propoziție", "o frază scurtă", "propoziția cu cel mai mult cuvinte"] },
    { q: "Ce numesc propoziții coordinate?", c: "propoziții legate prin conjuncții (și, sau, dar) care sunt egale", w: ["propoziții cu subiect și predicat", "propoziții fără verb", "propoziții principale și subordonate"] },
    { q: "Din ce se formează o frază?", c: "din două sau mai multe propoziții legate prin conjuncții", w: ["din cuvinte izolate", "din substantive și verbe", "din o singură propoziție"] },
    { q: "Ce numesc propoziție asindeton?", c: "propoziție care nu are conjuncții între ea și alta", w: ["propoziție cu conjuncție", "frază dezvoltată", "propoziție simplă"] },
    { q: "Ce numesc propoziție polisindeton?", c: "propoziție cu mai multe conjuncții", w: ["propoziție fără conjuncție", "propoziție simplă", "propoziție fără predicat"] },
    { q: "Care este diferența dintre propoziție și frază?", c: "Fraza are mai multe propoziții, propoziția are subiect și predicat", w: ["Nu este diferență", "Propoziția e mai lungă", "Fraza e mai scurtă"] },
    { q: "Ce este propoziția scurtă?", c: "propoziție cu doar subiect și predicat", w: ["frază cu o singură propoziție", "propoziție fără verb", "propoziție cu atribut"] },
    { q: "Ce sunt propoziții copulative?", c: "propoziții care au predicat nominal cu verbe de stare", w: ["propoziții principale", "propoziții cu subiect și complement", "propoziții subordonate"] },
  ];

  const selectedQuestions = shuffle(questionPool, rng).slice(0, 7);
  const questions: CurriculumMCQ[] = [];

  for (const item of selectedQuestions) {
    questions.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }

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
