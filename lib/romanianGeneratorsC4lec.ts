// ─── ROMANIAN GENERATORS (CLASA a IV-a) — LECTURĂ ────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a IV-a (4th grade) – lectură: înțelegerea textului, personaje,
// temă și mesaj, figuri de stil

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

function mulberry32(seed: number) { return function () { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function shuffle<T>(arr: T[], rng: () => number): T[] { const copy = [...arr]; for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return copy; }
function pick<T>(arr: T[], rng: () => number): T { return arr[Math.floor(rng() * arr.length)]; }
function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrongOptions: string[], rng: () => number): CurriculumMCQ {
  const seen = new Set<string>(); const unique: string[] = [];
  for (const w of wrongOptions) { if (w !== correct && !seen.has(w)) { seen.add(w); unique.push(w); } }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng);
  return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) };
}

// ─── GENERATOR 1: ÎNȚELEGEREA TEXTULUI (explicit vs implicit) ──────────────

function genIntelegereText(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "lectura_c4";
  const S = "intelegere_text_c4";

  const explicitImplicitQuestions = [
    { q: "Informația EXPLICITĂ dintr-un text este:", c: "scrisă direct în text, fără a trebui dedusă", w: ["dedusă din context", "o părere a cititorului", "ascunsă între rânduri"] },
    { q: "Informația IMPLICITĂ dintr-un text este:", c: "dedusă din context, nu scrisă direct", w: ["scrisă cuvânt cu cuvânt", "titlul textului", "prima propoziție"] },
    { q: "Care dintre următoarele este o întrebare despre informație EXPLICITĂ?", c: "\"Ce a făcut personajul în prima scenă?\"", w: ["\"Cum se simțea personajul?\"", "\"De ce a reacționat astfel?\"", "\"Ce mesaj transmite textul?\""] },
    { q: "Care dintre următoarele este o întrebare despre informație IMPLICITĂ?", c: "\"Cum se simțea personajul fără ca autorul să spună direct?\"", w: ["\"Cum se numește personajul?\"", "\"Unde s-a petrecut acțiunea?\"", "\"Câte personaje sunt în text?\""] },
    { q: "Dacă textul spune \"Ploua torenţial\", aceasta este informație:", c: "explicită", w: ["implicită", "relativă", "secundară"] },
    { q: "Dacă din text deducem că un personaj este trist din gesturile lui, informația e:", c: "implicită", w: ["explicită", "relativă", "titlul"] },
    { q: "Ce metodă te ajută să găsești informații implicite?", c: "analiza atentă și inferența", w: ["ocolirea capitolelor grele", "citirea doar a primului paragraf", "memorarea cuvintelor dificile"] },
    { q: "Inferența este procesul prin care:", c: "cititorul deduce ceva din textul citit", w: ["autorul plănuiește poveștea", "se schimbă genul textului", "se adaugă ilustrații"] },
    { q: "Care expresie nu corespunde ideii de informație EXPLICITĂ?", c: "\"trebuie să ghicesc\"", w: ["\"textul spune clar\"", "\"se vede în text\"", "\"scrie direct\""] },
    { q: "Completează: O informație implicită necesită o ___ pentru a fi înțeleasă.", c: "inferență", w: ["descriere", "titlu", "imagine"] },
  ];

  const mcqs: CurriculumMCQ[] = [];
  const combined = shuffle(explicitImplicitQuestions, rng).slice(0, 10);

  for (const item of combined) {
    mcqs.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }

  const typings: CurriculumTyping[] = [
    { type: "typing", topic: T, subtopic: S, question: "Ce înseamnă informația EXPLICITĂ?", answer: ["informație scrisă direct în text", "informatie scrisa direct in text", "scrisă direct"] },
    { type: "typing", topic: T, subtopic: S, question: "Ce înseamnă informația IMPLICITĂ?", answer: ["informație dedusă din context", "informatie deducta din context", "dedusă din context"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: Când cititorul deduce ceva din textul citit, aceasta este o informație...", answer: ["implicită", "implicita"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: Când autorul spune clar o informație în text, aceasta este...", answer: ["explicită", "explicita"] },
    { type: "typing", topic: T, subtopic: S, question: "Scrie un sinonim pentru 'implicită' (dedus fără a fi spus direct)", answer: ["ascunsă", "ascunsa", "pe jumătate"] },
    { type: "typing", topic: T, subtopic: S, question: "Cum se numește procesul prin care cititor deduce informații din text?", answer: ["inferență", "inferenta", "deducție"] },
    { type: "typing", topic: T, subtopic: S, question: "Dacă o carte spune 'Ploua torenţial', aceasta este informație...?", answer: ["explicită", "explicita"] },
    { type: "typing", topic: T, subtopic: S, question: "Dacă din text deducem că o persoană e trisă din gesturile ei, unde e informația?", answer: ["implicită", "implicita"] },
    { type: "typing", topic: T, subtopic: S, question: "Care metodă de lectură te ajută să găsești informații implicite?", answer: ["analiza", "citire atentă", "citire activa"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: O ___ este o întrebare care te face să tragi concluzii din text.", answer: ["inferență", "inferenta", "deducție"] },
  ];

  return shuffle([...mcqs, ...typings], rng);
}

// ─── GENERATOR 2: PERSONAJE (caracterizare) ────────────────────────────────

function genPersonaje(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "lectura_c4";
  const S = "personaje_c4";

  const characterizationQuestions = [
    { q: "Dacă autorul scrie \"Ion era harnic și cinstit\", aceasta este caracterizare:", c: "directă", w: ["indirectă", "prin fapte", "prin reacțiile altora"] },
    { q: "Caracterizarea INDIRECTĂ a unui personaj se face prin:", c: "faptele, vorbele și gândurile personajului", w: ["ce spune autorul direct despre personaj", "descrierea înfățișării fizice de către narator", "titlul operei"] },
    { q: "Personajul PRINCIPAL al unui text literar se mai numește:", c: "protagonist", w: ["antagonist", "narator", "autor"] },
    { q: "Portretul FIZIC al unui personaj descrie:", c: "înfățișarea (față, ochi, păr, statură)", w: ["caracterul și valorile morale", "faptele personajului", "relațiile cu alte personaje"] },
    { q: "Portretul MORAL al unui personaj descrie:", c: "calitățile și defectele de caracter", w: ["culoarea ochilor și a părului", "vârsta și înălțimea", "hainele personajului"] },
    { q: "Cum se numește personajul care se opune protagonistului?", c: "antagonist", w: ["deuteragonist", "tritagonist", "coagent"] },
    { q: "Personajele care nu sunt principale dar participă la acțiune se numesc:", c: "secundare", w: ["principali", "figuranți", "actori"] },
    { q: "Cum se numește textul în care un personaj vorbește singur pentru a se caractariza?", c: "monolog", w: ["dialog", "glas interior", "soliloc"] },
    { q: "Atunci când personajul vorbește, aceea este caracterizare:", c: "indirectă", w: ["directă", "prin aspectă", "prin gânduri"] },
    { q: "Care din următoarele este o metodă de caracterizare: prin reacțiile altor personaje?", c: "indirectă", w: ["directă", "prin aspectă", "prin descriere"] },
  ];

  const mcqs: CurriculumMCQ[] = [];
  const combined = shuffle(characterizationQuestions, rng).slice(0, 10);

  for (const item of combined) {
    mcqs.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }

  const typings: CurriculumTyping[] = [
    { type: "typing", topic: T, subtopic: S, question: "Ce este caracterizarea DIRECTĂ?", answer: ["când autorul spune direct calitățile", "cand autorul spune direct calitatile", "spus explicit"] },
    { type: "typing", topic: T, subtopic: S, question: "Ce este caracterizarea INDIRECTĂ?", answer: ["dedusă din fapte și comportament", "deducta din fapte si comportament", "prin gesturi"] },
    { type: "typing", topic: T, subtopic: S, question: "Cum se numește personajul principal al unei poveștii?", answer: ["protagonist", "personajul principal"] },
    { type: "typing", topic: T, subtopic: S, question: "Cum se numește personajul care se opune protagonistului?", answer: ["antagonist", "adversar"] },
    { type: "typing", topic: T, subtopic: S, question: "Portretul ... descrie înfățișarea fizică a personajului.", answer: ["fizic", "fizic al personajului"] },
    { type: "typing", topic: T, subtopic: S, question: "Portretul ... descrie caracterul și valorile morale ale personajului.", answer: ["moral", "moral al personajului"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: Atunci când personajul vorbește, aceea este caracterizare...", answer: ["indirectă", "indirecta"] },
    { type: "typing", topic: T, subtopic: S, question: "Scrie cum se numesc personajele care nu sunt principale dar participă la acțiune", answer: ["secundare", "secundari", "personaje secundare"] },
    { type: "typing", topic: T, subtopic: S, question: "Cum se numește textul în care un personaj vorbește singur pentru a se caractariza?", answer: ["monolog", "monolog interior"] },
    { type: "typing", topic: T, subtopic: S, question: "Care din următoarele este o metodă de caracterizare: prin reacțiile altor personaje?", answer: ["indirectă", "indirecta", "prin alții"] },
  ];

  return shuffle([...mcqs, ...typings], rng);
}

// ─── GENERATOR 3: TEMA ȘI MESAJUL TEXTULUI ─────────────────────────────────

function genTemaMesaj(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "lectura_c4";
  const S = "tema_mesaj_c4";

  const themeMessageQuestions = [
    { q: "TEMA unui text literar reprezintă:", c: "subiectul despre care vorbește textul", w: ["lecția morală pe care autorul vrea s-o transmită", "titlul textului", "personajul principal"] },
    { q: "MESAJUL unui text literar reprezintă:", c: "lecția morală sau ideea pe care autorul vrea s-o transmită", w: ["subiectul despre care vorbește textul", "primul paragraf", "dialogul dintre personaje"] },
    { q: "TEMA unui text poate fi identificată prin întrebarea:", c: "\"Despre ce vorbește textul?\"", w: ["\"Ce lecție transmite textul?\"", "\"Câte personaje sunt?\"", "\"Cât de lung este textul?\""] },
    { q: "MESAJUL unui text poate fi identificat prin întrebarea:", c: "\"Ce vrea autorul să ne învețe din acest text?\"", w: ["\"Despre ce este textul?\"", "\"Câte paragrafe are textul?\"", "\"Cum arată personajele?\""] },
    { q: "Unde se poate afla de obicei MESAJUL unui text?", c: "La finalul textului, uneori formulat explicit sau dedus din întâmplări", w: ["Întotdeauna în titlu", "Numai în primul paragraf", "Numai în descrierile naturii"] },
    { q: "Care dintre următoarele este o TEMĂ (nu un mesaj)?", c: "Curajul", w: ["Fii curajos și vei reuși!", "Curajul aduce victoria.", "Orice obstacol poate fi depășit cu curaj."] },
    { q: "Care este TEMA unui text despre doi prieteni care se ajută?", c: "prietenia", w: ["loialitatea", "sacrificiul", "devotamentul"] },
    { q: "Care este MESAJUL unui text în care cineva muncitor reușește?", c: "munca aduce succes", w: ["munca e importantă", "perseverența e necesară", "succesul e ușor"] },
    { q: "Scrie un cuvânt care poate fi TEMĂ:", c: "cinstea", w: ["fii cinstit", "cinstea trece primă", "cinstea e o virtute"] },
    { q: "Tema și mesajul sunt diferite; tema arată 'ce', mesajul arată:", c: "'ce lecție'", w: ["'cine'", "'unde'", "'când'"] },
  ];

  const mcqs: CurriculumMCQ[] = [];
  const combined = shuffle(themeMessageQuestions, rng).slice(0, 10);

  for (const item of combined) {
    mcqs.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }

  const typings: CurriculumTyping[] = [
    { type: "typing", topic: T, subtopic: S, question: "Definește TEMA unui text", answer: ["subiectul despre care vorbește", "subiectul principal", "ceea ce descrie"] },
    { type: "typing", topic: T, subtopic: S, question: "Definește MESAJUL unui text", answer: ["lecția morală pe care o transmite", "ideea principale transmisă", "învățătura"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: TEMA este 'Despre ce vorbește?', iar MESAJUL este 'Ce vrea autorul...'?", answer: ["să ne învețe", "sa ne invateze", "să transmită"] },
    { type: "typing", topic: T, subtopic: S, question: "Care este TEMA unui text despre doi prieteni care se ajută?", answer: ["prietenia", "prieteniei"] },
    { type: "typing", topic: T, subtopic: S, question: "Care este MESAJUL unui text în care cineva muncitor reușește?", answer: ["munca aduce succes", "munca e importantă", "perseverența e necesară"] },
    { type: "typing", topic: T, subtopic: S, question: "Scrie un cuvânt care poate fi TEMĂ: curaj, sinceritate sau...", answer: ["cinstea", "dragostea", "prietenia", "loialitatea"] },
    { type: "typing", topic: T, subtopic: S, question: "Unde caută cititorul de obicei MESAJUL unui text?", answer: ["la final", "in final", "în finalul textului"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: Un text despre natură transmite cel mai probabil mesajul: 'Trebuie să...'", answer: ["o ocrotim", "o respectam", "o apărăm"] },
    { type: "typing", topic: T, subtopic: S, question: "Cum se numește învățătura pe care o transmite autorul?", answer: ["mesaj", "morală", "lecție"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: Tema și mesajul sunt diferite; tema arată 'ce', mesajul arată '...'", answer: ["ce lecție", "lecția morală", "invățatura"] },
  ];

  return shuffle([...mcqs, ...typings], rng);
}

// ─── GENERATOR 4: FIGURI DE STIL ───────────────────────────────────────────

function genFiguriStil(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "lectura_c4";
  const S = "figuri_stil_c4";

  const figuresQuestions = [
    { q: "Care figură de stil conține cuvântul \"ca\" sau \"precum\"?", c: "Comparația", w: ["Metafora", "Personificarea", "Hiperbola"] },
    { q: "\"Ochii ei străluceau ca stelele\" este un exemplu de:", c: "Comparație", w: ["Metaforă", "Personificare", "Repetiție"] },
    { q: "\"Cerul plânge\" este o figură de stil numită:", c: "Personificare", w: ["Metaforă", "Comparație", "Hiperbolă"] },
    { q: "\"Am așteptat o veșnicie\" este un exemplu de:", c: "Hiperbolă", w: ["Comparație", "Metaforă", "Personificare"] },
    { q: "\"Lacrimile sale erau izvoare de durere\" este:", c: "Metaforă", w: ["Comparație", "Personificare", "Hiperbolă"] },
    { q: "Cum se numește figura care atribuie însuşiri omenești obiectelor?", c: "Personificare", w: ["Metaforă", "Comparație", "Analogie"] },
    { q: "Cum se numește figura de stil care exagerează?", c: "Hiperbolă", w: ["Comparație", "Metaforă", "Personificare"] },
    { q: "Metafora se deosebește de comparație prin absența cuvintelor:", c: "ca, precum", w: ["și", "dar", "deci"] },
    { q: "Cum se numește repetarea unui cuvânt?", c: "Repetiție", w: ["Personificare", "Analogie", "Enumerație"] },
    { q: "Completează: 'Viața este un ...' (metaforă)", c: "drum", w: ["apă", "piatră", "apărare"] },
  ];

  const mcqs: CurriculumMCQ[] = [];
  const combined = shuffle(figuresQuestions, rng).slice(0, 10);

  for (const item of combined) {
    mcqs.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }

  const typings: CurriculumTyping[] = [
    { type: "typing", topic: T, subtopic: S, question: "Ce figură de stil conține cuvântul 'ca' sau 'precum'?", answer: ["comparație", "comparatia"] },
    { type: "typing", topic: T, subtopic: S, question: "Cum se numește figura de stil care exagerează?", answer: ["hiperbolă", "hiperbola"] },
    { type: "typing", topic: T, subtopic: S, question: "Cum se numește figura care atribuie iensușiri omenești obiectelor?", answer: ["personificare", "personificarea"] },
    { type: "typing", topic: T, subtopic: S, question: "Metafora se deosebește de comparație prin absența cuvintelor...", answer: ["ca, precum", "ca; precum", "ca"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: Frunzele ... în vânt (personificare)", answer: ["dansau", "pluteau", "plutit"] },
    { type: "typing", topic: T, subtopic: S, question: "Scrie o propoziție cu comparație (foloseşte 'ca')", answer: ["ochii ca stele", "albă ca ninge", "glas ca flaut"] },
    { type: "typing", topic: T, subtopic: S, question: "Cum se numește repetarea unui cuvânt?", answer: ["repetiție", "repetitie"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: 'Viața este un ...' (metaforă)", answer: ["drum", "cărare", "cale"] },
    { type: "typing", topic: T, subtopic: S, question: "Care figură de stil enumără mai multe obiecte la rând?", answer: ["enumerație", "enumeratia"] },
    { type: "typing", topic: T, subtopic: S, question: "Completează: Cerul ... = personificare", answer: ["plânge", "plange", "se-arată trist"] },
  ];

  return shuffle([...mcqs, ...typings], rng);
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const C4_Lec_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
  lectura_c4: {
    intelegere_text_c4: (seed = Date.now()) => genIntelegereText(seed),
    personaje_c4:       (seed = Date.now()) => genPersonaje(seed),
    tema_mesaj_c4:      (seed = Date.now()) => genTemaMesaj(seed),
    figuri_stil_c4:     (seed = Date.now()) => genFiguriStil(seed),
  },
};
