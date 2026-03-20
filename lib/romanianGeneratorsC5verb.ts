// ─── ROMANIAN GENERATORS (CLASA a V-a) — VERB ────────────────────────────────
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

// ─── 1. MODURI NEPERSONALE ────────────────────────────────────────────────────

export function gen_moduri_nepersonale_c5(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "verb_c5";
  const subtopic = "moduri_nepersonale_c5";

  const all: CurriculumMCQ[] = [
    createMCQ(topic, subtopic,
      "Ce mod verbal nepersonal este „scriind”?",
      "gerunziu",
      ["infinitiv", "participiu", "supin"],
      rng),

    createMCQ(topic, subtopic,
      "Ce mod verbal nepersonal este „a citi”?",
      "infinitiv",
      ["gerunziu", "participiu", "supin"],
      rng),

    createMCQ(topic, subtopic,
      "Ce mod verbal nepersonal este „citit” în propoziția „Cartea este citită.”?",
      "participiu",
      ["infinitiv", "gerunziu", "supin"],
      rng),

    createMCQ(topic, subtopic,
      "Ce mod verbal nepersonal este „de citit” în „Am o carte de citit.”?",
      "supin",
      ["infinitiv", "gerunziu", "participiu"],
      rng),

    createMCQ(topic, subtopic,
      "Care dintre următoarele cuvinte este un gerunziu?",
      "alergând",
      ["alergat", "a alerga", "de alergat"],
      rng),

    createMCQ(topic, subtopic,
      "Care dintre următoarele este un infinitiv?",
      "a scrie",
      ["scriind", "scris", "de scris"],
      rng),

    createMCQ(topic, subtopic,
      "Gerunziul verbului „a lucra” este:",
      "lucrând",
      ["lucrat", "a lucra", "de lucrat"],
      rng),
  ];

  return shuffle(all, rng).slice(0, 7);
}

// ─── 2. PERFECTUL SIMPLU ─────────────────────────────────────────────────────

export function gen_perfectul_simplu_c5(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "verb_c5";
  const subtopic = "perfectul_simplu_c5";

  const all: CurriculumMCQ[] = [
    createMCQ(topic, subtopic,
      "Care este forma de perfect simplu a verbului „a merge” la persoana I singular?",
      "mersei",
      ["am mers", "mersesem", "mergeam"],
      rng),

    createMCQ(topic, subtopic,
      "Care este forma de perfect simplu a verbului „a citi” la persoana a III-a singular?",
      "citi",
      ["a citit", "citise", "citea"],
      rng),

    createMCQ(topic, subtopic,
      "Perfectul simplu se folosește cu precădere în regiunile:",
      "Oltenia și Banat",
      ["Moldova și Dobrogea", "Transilvania și Muntenia", "Bucovina și Crișana"],
      rng),

    createMCQ(topic, subtopic,
      "Care este forma corectă de perfect simplu a verbului „a veni” la persoana a II-a singular?",
      "veniși",
      ["ai venit", "veniseși", "veneai"],
      rng),

    createMCQ(topic, subtopic,
      "Ce exprimă perfectul simplu?",
      "o acțiune trecută, terminată în trecutul recent",
      ["o acțiune viitoare", "o acțiune prezentă", "o acțiune trecută înaintea alteia"],
      rng),

    createMCQ(topic, subtopic,
      "Care dintre următoarele forme verbale este la perfectul simplu?",
      "cântai",
      ["am cântat", "cântasem", "cântam"],
      rng),
  ];

  return shuffle(all, rng).slice(0, 6);
}

// ─── 3. MAI-MULT-CA-PERFECTUL ────────────────────────────────────────────────

export function gen_mai_mult_ca_perfect_c5(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "verb_c5";
  const subtopic = "mai_mult_ca_perfect_c5";

  const all: CurriculumMCQ[] = [
    createMCQ(topic, subtopic,
      "Care este forma de mai-mult-ca-perfect a verbului „a citi” la persoana I singular?",
      "citisem",
      ["am citit", "citii", "voi citi"],
      rng),

    createMCQ(topic, subtopic,
      "Ce exprimă mai-mult-ca-perfectul?",
      "o acțiune trecută înaintea altei acțiuni trecute",
      ["o acțiune prezentă", "o acțiune viitoare", "o acțiune trecută recentă"],
      rng),

    createMCQ(topic, subtopic,
      "Care este forma de mai-mult-ca-perfect a verbului „a scrie” la persoana a III-a plural?",
      "scriseseră",
      ["au scris", "scriau", "vor scrie"],
      rng),

    createMCQ(topic, subtopic,
      "Identifică mai-mult-ca-perfectul în propoziția: „Când am ajuns, ei ___ deja.”",
      "plecaseră",
      ["au plecat", "plecau", "plecaseră ei"],
      rng),

    createMCQ(topic, subtopic,
      "Care dintre următoarele forme verbale este la mai-mult-ca-perfect?",
      "văzusem",
      ["am văzut", "văd", "voi vedea"],
      rng),

    createMCQ(topic, subtopic,
      "Care este forma de mai-mult-ca-perfect a verbului „a face” la persoana a II-a singular?",
      "făcuseși",
      ["ai făcut", "faci", "făceai"],
      rng),
  ];

  return shuffle(all, rng).slice(0, 6);
}

// ─── 4. ACORDUL PREDICATULUI CU SUBIECTUL ────────────────────────────────────

export function gen_acordul_predicat_c5(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "verb_c5";
  const subtopic = "acordul_predicat_c5";

  const all: CurriculumMCQ[] = [
    createMCQ(topic, subtopic,
      "Care este forma corectă a predicatului în „Grupul de elevi ___ la concurs.”?",
      "a participat",
      ["au participat", "participau", "participaseră"],
      rng),

    createMCQ(topic, subtopic,
      "Care este forma corectă în „Ion și Maria ___ la școală.”?",
      "merg",
      ["merge", "mergeau ei", "s-a dus"],
      rng),

    createMCQ(topic, subtopic,
      "Ce tip de predicat este în propoziția „Ea este elevă.”?",
      "predicat nominal",
      ["predicat verbal", "predicat adjectival", "predicat substantival"],
      rng),

    createMCQ(topic, subtopic,
      "Cu ce se acordă predicatul în număr și persoană?",
      "cu subiectul",
      ["cu complementul direct", "cu atributul", "cu complementul indirect"],
      rng),

    createMCQ(topic, subtopic,
      "Care este forma corectă în „Nimeni nu ___ nimic.”?",
      "știe",
      ["știu", "știm", "știți"],
      rng),

    createMCQ(topic, subtopic,
      "Ce tip de predicat este în propoziția „Ea aleargă repede.”?",
      "predicat verbal",
      ["predicat nominal", "predicat adjectival", "predicat adverbial"],
      rng),
  ];

  return shuffle(all, rng).slice(0, 6);
}

// ─── 5. COMPLEMENTUL CIRCUMSTANȚIAL ──────────────────────────────────────────

export function gen_complement_circumstantial_c5(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "verb_c5";
  const subtopic = "complement_circumstantial_c5";

  const all: CurriculumMCQ[] = [
    createMCQ(topic, subtopic,
      "Ce tip de complement circumstanțial este „acasă” din „Merge acasă.”?",
      "complement circumstanțial de loc",
      ["complement circumstanțial de timp", "complement circumstanțial de mod", "complement direct"],
      rng),

    createMCQ(topic, subtopic,
      "Ce tip de complement circumstanțial este „dimineața” din „Se trezește dimineața.”?",
      "complement circumstanțial de timp",
      ["complement circumstanțial de loc", "complement circumstanțial de mod", "complement indirect"],
      rng),

    createMCQ(topic, subtopic,
      "Ce tip de complement circumstanțial este „frumos” din „Cântă frumos.”?",
      "complement circumstanțial de mod",
      ["complement circumstanțial de loc", "complement circumstanțial de timp", "atribut adverbial"],
      rng),

    createMCQ(topic, subtopic,
      "La ce întrebare răspunde complementul circumstanțial de cauză?",
      "din ce cauză?",
      ["unde?", "când?", "cu ce scop?"],
      rng),

    createMCQ(topic, subtopic,
      "La ce întrebare răspunde complementul circumstanțial de scop?",
      "cu ce scop?",
      ["când?", "unde?", "din ce cauză?"],
      rng),

    createMCQ(topic, subtopic,
      "Ce tip de complement circumstanțial este „de frică” din „A fugit de frică.”?",
      "complement circumstanțial de cauză",
      ["complement circumstanțial de scop", "complement circumstanțial de mod", "complement indirect"],
      rng),

    createMCQ(topic, subtopic,
      "Ce tip de complement circumstanțial este „pentru a învăța” din „Studiază pentru a învăța.”?",
      "complement circumstanțial de scop",
      ["complement circumstanțial de cauză", "complement circumstanțial de mod", "complement direct"],
      rng),
  ];

  return shuffle(all, rng).slice(0, 7);
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────

export const C5_Verb_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
  verb_c5: {
    moduri_nepersonale_c5: (seed = 42) => gen_moduri_nepersonale_c5(seed),
    perfectul_simplu_c5: (seed = 42) => gen_perfectul_simplu_c5(seed),
    mai_mult_ca_perfect_c5: (seed = 42) => gen_mai_mult_ca_perfect_c5(seed),
    acordul_predicat_c5: (seed = 42) => gen_acordul_predicat_c5(seed),
    complement_circumstantial_c5: (seed = 42) => gen_complement_circumstantial_c5(seed),
  }
};
