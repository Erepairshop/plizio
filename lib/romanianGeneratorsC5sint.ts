// ─── ROMANIAN GENERATORS (CLASA a V-a) — SINTAXĂ ─────────────────────────────
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
function createTyping(topic: string, subtopic: string, question: string, correct: string): CurriculumQuestion {
  return { type: "typing", topic, subtopic, question, answer: correct };
}

// ─── 1. ATRIBUTUL ȘI APOZIȚIA ────────────────────────────────────────────────

export function gen_apostrof_atribut_c5(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "sintaxa_c5";
  const S = "apostrof_atribut_c5";
  const qs: CurriculumQuestion[] = [];

  // Q1 — atribut substantival în genitiv
  qs.push(createMCQ(T, S,
    "Ce tip de atribut este „al colegului” din propoziția „Stiloul al colegului este albastru.”?",
    "atribut substantival în genitiv",
    ["atribut adjectival", "atribut pronominal", "apoziție"],
    rng
  ));

  // Q2 — articolul genitival: al / a / ai / ale
  qs.push(createMCQ(T, S,
    "Care este articolul genitival folosit pentru substantivele feminine la singular?",
    "a",
    ["al", "ai", "ale"],
    rng
  ));

  // Q3 — atribut substantival prepozițional
  qs.push(createMCQ(T, S,
    "Ce tip de atribut este „din livadă” din propoziția „Merele din livadă sunt coapte.”?",
    "atribut substantival prepozițional",
    ["atribut adjectival", "atribut substantival în genitiv", "apoziție"],
    rng
  ));

  // Q4 — atribut pronominal
  qs.push(createMCQ(T, S,
    "Ce tip de atribut este „al său” din propoziția „Caietul al său era plin de notițe.”?",
    "atribut pronominal",
    ["atribut adjectival", "atribut substantival în genitiv", "apoziție"],
    rng
  ));

  // Q5 — apoziția
  qs.push(createMCQ(T, S,
    "Ce funcție sintactică are cuvântul „doctorul” din propoziția „Ion, doctorul, a venit la timp.”?",
    "apoziție",
    ["atribut adjectival", "atribut substantival prepozițional", "atribut pronominal"],
    rng
  ));

  // Q6 — întrebarea la care răspunde atributul
  qs.push(createMCQ(T, S,
    "La ce întrebări răspunde atributul?",
    "care?, ce fel de?, al/a/ai/ale cui?",
    ["cine?, ce?", "când?, unde?, cum?", "pe cine?, cui?"],
    rng
  ));

  qs.push(createTyping(T, S,
    "Cum se numește cuvântul care determină un substantiv?",
    "atribut"));

  qs.push(createTyping(T, S,
    "Ce tip de atribut este „al colegului”?",
    "genitiv"));

  qs.push(createTyping(T, S,
    "Cum se numește apoziția în cuvinte simple?",
    "apoziție"));

  qs.push(createTyping(T, S,
    "La ce întrebare răspunde atributul?",
    "care"));

  qs.push(createTyping(T, S,
    "Ce articole folosim pentru genitiv?",
    "al"));

  qs.push(createTyping(T, S,
    "Care sunt tipurile de atribute?",
    "adjectival"));

  void pick; // satisfies linter
  return shuffle(qs, rng);
}

// ─── 2. PROPOZIȚIA SUBORDONATĂ SUBIECTIVĂ ────────────────────────────────────

export function gen_prop_subiectiva_c5(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "sintaxa_c5";
  const S = "prop_subiectiva_c5";
  const qs: CurriculumQuestion[] = [];

  // Q1 — definiție
  qs.push(createMCQ(T, S,
    "Propoziția subordonată subiectivă răspunde la întrebările:",
    "cine? / ce?",
    ["unde? / când?", "cum? / în ce fel?", "de ce? / cu ce scop?"],
    rng
  ));

  // Q2 — introdusă prin conjuncția că
  qs.push(createMCQ(T, S,
    "Propoziția subiectivă din „Se aude că plouă.” este introdusă prin:",
    "conjuncția că",
    ["pronumele relativ care", "adverbul relativ unde", "conjuncția dacă"],
    rng
  ));

  // Q3 — introdusă prin pronume relativ cine
  qs.push(createMCQ(T, S,
    "Identifică propoziția subiectivă din fraza „Cine muncește va reuși.”:",
    "Cine muncește",
    ["va reuși", "muncește va reuși", "va reuși în viață"],
    rng
  ));

  // Q4 — introdusă prin să
  qs.push(createMCQ(T, S,
    "Ce fel de propoziție subordonată este „să pleci acum” din fraza „Este bine să pleci acum.”?",
    "propoziție subordonată subiectivă",
    ["propoziție subordonată completivă directă", "propoziție subordonată circumstanțială de timp", "propoziție subordonată atributivă"],
    rng
  ));

  // Q5 — regenta fără subiect propriu
  qs.push(createMCQ(T, S,
    "Propoziția regentă a subiectivei este de obicei caracterizată prin faptul că:",
    "nu are subiect exprimat în regentă",
    ["are predicat la timpul trecut", "conține un complement direct", "are subiectul exprimat prin pronume personal"],
    rng
  ));

  // Q6 — element de relație: ce
  qs.push(createMCQ(T, S,
    "Cu ce element de relație este introdusă propoziția subiectivă din „Nu se știe ce s-a întâmplat.”?",
    "pronumele relativ ce",
    ["conjuncția că", "adverbul relativ când", "conjuncția să"],
    rng
  ));

  qs.push(createTyping(T, S,
    "Ce se numește propoziția care este subiect?",
    "subiectivă"));

  qs.push(createTyping(T, S,
    "La ce întrebare răspunde propoziția subiectivă?",
    "cine"));

  qs.push(createTyping(T, S,
    "Cu ce se introduce propoziția subiectivă?",
    "că"));

  qs.push(createTyping(T, S,
    "Care este elementul de relație al subiectivei?",
    "pronume"));

  qs.push(createTyping(T, S,
    "Cum se numește propoziția principală?",
    "regentă"));

  qs.push(createTyping(T, S,
    "Ce pronume introduce o subiectivă?",
    "cine"));

  return shuffle(qs, rng);
}

// ─── 3. COORDONAREA ──────────────────────────────────────────────────────────

export function gen_coordonare_c5(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "sintaxa_c5";
  const S = "coordonare_c5";
  const qs: CurriculumQuestion[] = [];

  // Q1 — coordonare copulativă
  qs.push(createMCQ(T, S,
    "Ce tip de coordonare exprimă conjuncția „și” în fraza „Maria citește și Ion scrie.”?",
    "coordonare copulativă",
    ["coordonare adversativă", "coordonare disjunctivă", "coordonare conclusivă"],
    rng
  ));

  // Q2 — coordonare adversativă
  qs.push(createMCQ(T, S,
    "Ce tip de coordonare exprimă conjuncția „dar” în fraza „Era obosit, dar a mers mai departe.”?",
    "coordonare adversativă",
    ["coordonare copulativă", "coordonare disjunctivă", "coordonare conclusivă"],
    rng
  ));

  // Q3 — coordonare disjunctivă
  qs.push(createMCQ(T, S,
    "Ce tip de coordonare exprimă conjuncția „sau” în fraza „Vii cu noi sau rămâi acasă?”?",
    "coordonare disjunctivă",
    ["coordonare copulativă", "coordonare adversativă", "coordonare conclusivă"],
    rng
  ));

  // Q4 — coordonare conclusivă
  qs.push(createMCQ(T, S,
    "Ce tip de coordonare exprimă adverbul „deci” în fraza „A învățat mult, deci va lua o notă bună.”?",
    "coordonare conclusivă",
    ["coordonare copulativă", "coordonare adversativă", "coordonare disjunctivă"],
    rng
  ));

  // Q5 — conjuncție copulativă negativă
  qs.push(createMCQ(T, S,
    "Care dintre următoarele conjuncții exprimă coordonare copulativă cu sens negativ?",
    "nici",
    ["dar", "ori", "deci"],
    rng
  ));

  // Q6 — conjuncție adversativă: ci
  qs.push(createMCQ(T, S,
    "Ce tip de coordonare exprimă conjuncția „ci” în fraza „Nu el a greșit, ci colegul lui.”?",
    "coordonare adversativă",
    ["coordonare copulativă", "coordonare disjunctivă", "coordonare conclusivă"],
    rng
  ));

  // Q7 — identificare tip după conjuncție „ori”
  qs.push(createMCQ(T, S,
    "Conjuncția „ori” introduce un raport de coordonare:",
    "disjunctivă",
    ["copulativă", "adversativă", "conclusivă"],
    rng
  ));

  qs.push(createTyping(T, S,
    "Ce se numește legarea a două propoziții cu aceeași intonație?",
    "coordonare"));

  qs.push(createTyping(T, S,
    "Ce conjuncție introduce coordonare copulativă?",
    "și"));

  qs.push(createTyping(T, S,
    "Ce conjuncție introduce coordonare adversativă?",
    "dar"));

  qs.push(createTyping(T, S,
    "Ce conjuncție introduce coordonare disjunctivă?",
    "sau"));

  qs.push(createTyping(T, S,
    "Ce conjuncție introduce coordonare conclusivă?",
    "deci"));

  qs.push(createTyping(T, S,
    "Cum se numesc propozițiile legate prin coordonare?",
    "coordinate"));

  return shuffle(qs, rng);
}

// ─── 4. PROPOZIȚII SUBORDONATE CIRCUMSTANȚIALE ───────────────────────────────

export function gen_prop_circumstantiala_c5(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "sintaxa_c5";
  const S = "prop_circumstantiala_c5";
  const qs: CurriculumQuestion[] = [];

  // Q1 — circumstanțială de timp: identificare
  qs.push(createMCQ(T, S,
    "Ce tip de propoziție subordonată este „când a venit acasă” din „L-am văzut când a venit acasă.”?",
    "propoziție circumstanțială de timp",
    ["propoziție circumstanțială de loc", "propoziție subiectivă", "propoziție circumstanțială de mod"],
    rng
  ));

  // Q2 — întrebarea circumstanțialei de timp
  qs.push(createMCQ(T, S,
    "La ce întrebări răspunde propoziția circumstanțială de timp?",
    "când?, de când?, până când?",
    ["unde?, de unde?, încotro?", "cum?, în ce fel?, cât de?", "cine?, ce?"],
    rng
  ));

  // Q3 — circumstanțială de loc: identificare
  qs.push(createMCQ(T, S,
    "Ce tip de propoziție subordonată este „unde locuiește bunica” din „Mergem unde locuiește bunica.”?",
    "propoziție circumstanțială de loc",
    ["propoziție circumstanțială de timp", "propoziție circumstanțială de mod", "propoziție atributivă"],
    rng
  ));

  // Q4 — întrebarea circumstanțialei de loc
  qs.push(createMCQ(T, S,
    "La ce întrebări răspunde propoziția circumstanțială de loc?",
    "unde?, de unde?, încotro?",
    ["când?, de când?", "cum?, în ce fel?", "cine?, ce?"],
    rng
  ));

  // Q5 — circumstanțială de mod: identificare
  qs.push(createMCQ(T, S,
    "Ce tip de propoziție subordonată este „cum i-a spus profesorul” din „A rezolvat problema cum i-a spus profesorul.”?",
    "propoziție circumstanțială de mod",
    ["propoziție circumstanțială de timp", "propoziție circumstanțială de loc", "propoziție completivă directă"],
    rng
  ));

  // Q6 — element de relație: circumstanțiale de timp
  qs.push(createMCQ(T, S,
    "Prin ce element de relație este introdusă de obicei propoziția circumstanțială de timp?",
    "adverbele relative când, după ce, înainte să",
    ["pronumele relativ care", "conjuncția că", "adverbele relative unde, de unde"],
    rng
  ));

  // Q7 — circumstanțială de mod: întrebarea
  qs.push(createMCQ(T, S,
    "La ce întrebare răspunde propoziția circumstanțială de mod?",
    "cum?, în ce fel?, cât de?",
    ["când?, de când?", "unde?, de unde?", "cine?, ce?"],
    rng
  ));

  qs.push(createTyping(T, S,
    "Ce se numește propoziția care exprimă timp, loc, mod?",
    "circumstanțială"));

  qs.push(createTyping(T, S,
    "La ce întrebare răspunde circumstanțiala de timp?",
    "când"));

  qs.push(createTyping(T, S,
    "La ce întrebare răspunde circumstanțiala de loc?",
    "unde"));

  qs.push(createTyping(T, S,
    "La ce întrebare răspunde circumstanțiala de mod?",
    "cum"));

  qs.push(createTyping(T, S,
    "Ce adverbe introduc circumstanțiale de timp?",
    "când"));

  qs.push(createTyping(T, S,
    "Cum se numesc circumstanțialele?",
    "subordonate"));

  return shuffle(qs, rng);
}

// ─── EXPORT ──────────────────────────────────────────────────────────────────

export const C5_Sint_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
  sintaxa_c5: {
    apostrof_atribut_c5: (seed = 42) => gen_apostrof_atribut_c5(seed),
    prop_subiectiva_c5: (seed = 42) => gen_prop_subiectiva_c5(seed),
    coordonare_c5: (seed = 42) => gen_coordonare_c5(seed),
    prop_circumstantiala_c5: (seed = 42) => gen_prop_circumstantiala_c5(seed),
  }
};
