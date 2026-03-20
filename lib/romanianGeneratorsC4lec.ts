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
  const mcqs: CurriculumMCQ[] = [];
  const T = “lectura_c4”;
  const S = “intelegere_text_c4”;

  for (let i = 0; i < 30; i++) {
    const tip = i % 4;
    if (tip === 0) {
      mcqs.push(createMCQ(T, S, “Informația EXPLICITĂ dintr-un text este:”, “scrisă direct în text, fără a trebui dedusă”, [“dedusă din context”, “o părere a cititorului”, “ascunsă între rânduri”], rng));
    } else if (tip === 1) {
      mcqs.push(createMCQ(T, S, “Informația IMPLICITĂ dintr-un text este:”, “dedusă din context, nu scrisă direct”, [“scrisă cuvânt cu cuvânt”, “titlul textului”, “prima propoziție”], rng));
    } else if (tip === 2) {
      mcqs.push(createMCQ(T, S, “Care dintre următoarele este o întrebare despre informație EXPLICITĂ?”, “„Ce a făcut personajul în prima scenă?””, [“„Cum se simțea personajul?””, “„De ce a reacționat astfel?””, “„Ce mesaj transmite textul?””], rng));
    } else {
      mcqs.push(createMCQ(T, S, “Care dintre următoarele este o întrebare despre informație IMPLICITĂ?”, “„Cum se simțea personajul fără ca autorul să spună direct?””, [“„Cum se numește personajul?””, “„Unde s-a petrecut acțiunea?””, “„Câte personaje sunt în text?””], rng));
    }
  }

  const typings: CurriculumTyping[] = [
    { type: “typing”, topic: T, subtopic: S, question: “Ce înseamnă informația EXPLICITĂ?”, answer: [“informație scrisă direct în text”, “informatie scrisa direct in text”, “scrisă direct”] },
    { type: “typing”, topic: T, subtopic: S, question: “Ce înseamnă informația IMPLICITĂ?”, answer: [“informație dedusă din context”, “informatie deducta din context”, “dedusă din context”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: Când cititorul deduce ceva din textul citit, aceasta este o informație...”, answer: [“implicită”, “implicita”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: Când autorul spune clar o informație în text, aceasta este...”, answer: [“explicită”, “explicita”] },
    { type: “typing”, topic: T, subtopic: S, question: “Scrie un sinonim pentru 'implicită' (dedus fără a fi spus direct)”, answer: [“ascunsă”, “ascunsa”, “pe jumătate”] },
    { type: “typing”, topic: T, subtopic: S, question: “Cum se numește procesul prin care cititor deduce informații din text?”, answer: [“inferență”, “inferenta”, “deducție”] },
    { type: “typing”, topic: T, subtopic: S, question: “Dacă o carte spune 'Ploua torenţial', aceasta este informație...?”, answer: [“explicită”, “explicita”] },
    { type: “typing”, topic: T, subtopic: S, question: “Dacă din text deducem că o persoană e trisă din gesturile ei, unde e informația?”, answer: [“implicită”, “implicita”] },
    { type: “typing”, topic: T, subtopic: S, question: “Care metodă de lectură te ajută să găsești informații implicite?”, answer: [“analiza”, “citire atentă”, “citire activa”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: O ___ este o întrebare care te face să tragi concluzii din text.”, answer: [“inferență”, “inferenta”, “deducție”] },
  ];

  return shuffle([...mcqs, ...typings], rng);
}

// ─── GENERATOR 2: PERSONAJE (caracterizare) ────────────────────────────────

function genPersonaje(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const mcqs: CurriculumMCQ[] = [];
  const T = “lectura_c4”;
  const S = “personaje_c4”;

  for (let i = 0; i < 30; i++) {
    const tip = i % 5;
    if (tip === 0) {
      mcqs.push(createMCQ(T, S, “Dacă autorul scrie „Ion era harnic și cinstit”, aceasta este caracterizare:”, “directă”, [“indirectă”, “prin fapte”, “prin reacțiile altora”], rng));
    } else if (tip === 1) {
      mcqs.push(createMCQ(T, S, “Caracterizarea INDIRECTĂ a unui personaj se face prin:”, “faptele, vorbele și gândurile personajului”, [“ce spune autorul direct despre personaj”, “descrierea înfățișării fizice de către narator”, “titlul operei”], rng));
    } else if (tip === 2) {
      mcqs.push(createMCQ(T, S, “Personajul PRINCIPAL al unui text literar se mai numește:”, “protagonist”, [“antagonist”, “narator”, “autor”], rng));
    } else if (tip === 3) {
      mcqs.push(createMCQ(T, S, “Portretul FIZIC al unui personaj descrie:”, “înfățișarea (față, ochi, păr, statură)”, [“caracterul și valorile morale”, “faptele personajului”, “relațiile cu alte personaje”], rng));
    } else {
      mcqs.push(createMCQ(T, S, “Portretul MORAL al unui personaj descrie:”, “calitățile și defectele de caracter”, [“culoarea ochilor și a părului”, “vârsta și înălțimea”, “hainele personajului”], rng));
    }
  }

  const typings: CurriculumTyping[] = [
    { type: “typing”, topic: T, subtopic: S, question: “Ce este caracterizarea DIRECTĂ?”, answer: [“când autorul spune direct calitățile”, “cand autorul spune direct calitatile”, “spus explicit”] },
    { type: “typing”, topic: T, subtopic: S, question: “Ce este caracterizarea INDIRECTĂ?”, answer: [“dedusă din fapte și comportament”, “deducta din fapte si comportament”, “prin gesturi”] },
    { type: “typing”, topic: T, subtopic: S, question: “Cum se numește personajul principal al unei poveștii?”, answer: [“protagonist”, “personajul principal”] },
    { type: “typing”, topic: T, subtopic: S, question: “Cum se numește personajul care se opune protagonistului?”, answer: [“antagonist”, “adversar”] },
    { type: “typing”, topic: T, subtopic: S, question: “Portretul ... descrie înfățișarea fizică a personajului.”, answer: [“fizic”, “fizic al personajului”] },
    { type: “typing”, topic: T, subtopic: S, question: “Portretul ... descrie caracterul și valorile morale ale personajului.”, answer: [“moral”, “moral al personajului”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: Atunci când personajul vorbește, aceea este caracterizare...”, answer: [“indirectă”, “indirecta”] },
    { type: “typing”, topic: T, subtopic: S, question: “Scrie cum se numesc personajele care nu sunt principale dar participă la acțiune”, answer: [“secundare”, “secundari”, “personaje secundare”] },
    { type: “typing”, topic: T, subtopic: S, question: “Cum se numește textul în care un personaj vorbește singur pentru a se caractariza?”, answer: [“monolog”, “monolog interior”] },
    { type: “typing”, topic: T, subtopic: S, question: “Care din următoarele este o metodă de caracterizare: prin reacțiile altor personaje?”, answer: [“indirectă”, “indirecta”, “prin alții”] },
  ];

  return shuffle([...mcqs, ...typings], rng);
}

// ─── GENERATOR 3: TEMA ȘI MESAJUL TEXTULUI ─────────────────────────────────

function genTemaMesaj(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const mcqs: CurriculumMCQ[] = [];
  const T = “lectura_c4”;
  const S = “tema_mesaj_c4”;

  for (let i = 0; i < 30; i++) {
    const tip = i % 6;
    if (tip === 0) {
      mcqs.push(createMCQ(T, S, “TEMA unui text literar reprezintă:”, “subiectul despre care vorbește textul”, [“lecția morală pe care autorul vrea s-o transmită”, “titlul textului”, “personajul principal”], rng));
    } else if (tip === 1) {
      mcqs.push(createMCQ(T, S, “MESAJUL unui text literar reprezintă:”, “lecția morală sau ideea pe care autorul vrea s-o transmită”, [“subiectul despre care vorbește textul”, “primul paragraf”, “dialogul dintre personaje”], rng));
    } else if (tip === 2) {
      mcqs.push(createMCQ(T, S, “TEMA unui text poate fi identificată prin întrebarea:”, “„Despre ce vorbește textul?””, [“„Ce lecție transmite textul?””, “„Câte personaje sunt?””, “„Cât de lung este textul?””], rng));
    } else if (tip === 3) {
      mcqs.push(createMCQ(T, S, “MESAJUL unui text poate fi identificat prin întrebarea:”, “„Ce vrea autorul să ne învețe din acest text?””, [“„Despre ce este textul?””, “„Câte paragrafe are textul?””, “„Cum arată personajele?””], rng));
    } else if (tip === 4) {
      mcqs.push(createMCQ(T, S, “Unde se poate afla de obicei MESAJUL unui text?”, “La finalul textului, uneori formulat explicit sau dedus din întâmplări”, [“Întotdeauna în titlu”, “Numai în primul paragraf”, “Numai în descrierile naturii”], rng));
    } else {
      mcqs.push(createMCQ(T, S, “Care dintre următoarele este o TEMĂ (nu un mesaj)?”, “Curajul”, [“Fii curajos și vei reuși!”, “Curajul aduce victoria.”, “Orice obstacol poate fi depășit cu curaj.”], rng));
    }
  }

  const typings: CurriculumTyping[] = [
    { type: “typing”, topic: T, subtopic: S, question: “Definește TEMA unui text”, answer: [“subiectul despre care vorbește”, “subiectul principal”, “ceea ce descrie”] },
    { type: “typing”, topic: T, subtopic: S, question: “Definește MESAJUL unui text”, answer: [“lecția morală pe care o transmite”, “ideea principale transmisă”, “învățătura”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: TEMA este 'Despre ce vorbește?', iar MESAJUL este 'Ce vrea autorul...'?”, answer: [“să ne învețe”, “sa ne invateze”, “să transmită”] },
    { type: “typing”, topic: T, subtopic: S, question: “Care este TEMA unui text despre doi prieteni care se ajută?”, answer: [“prietenia”, “prieteniei”] },
    { type: “typing”, topic: T, subtopic: S, question: “Care este MESAJUL unui text în care cineva muncitor reușește?”, answer: [“munca aduce succes”, “munca e importantă”, “perseverența e necesară”] },
    { type: “typing”, topic: T, subtopic: S, question: “Scrie un cuvânt care poate fi TEMĂ: curaj, sinceritate sau...”, answer: [“cinstea”, “dragostea”, “prietenia”, “loialitatea”] },
    { type: “typing”, topic: T, subtopic: S, question: “Unde caută cititorul de obicei MESAJUL unui text?”, answer: [“la final”, “in final”, “în finalul textului”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: Un text despre natură transmite cel mai probabil mesajul: 'Trebuie să...'”, answer: [“o ocrotim”, “o respectam”, “o apărăm”] },
    { type: “typing”, topic: T, subtopic: S, question: “Cum se numește învățătura pe care o transmite autorul?”, answer: [“mesaj”, “morală”, “lecție”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: Tema și mesajul sunt diferite; tema arată 'ce', mesajul arată '...'”, answer: [“ce lecție”, “lecția morală”, “invățatura”] },
  ];

  return shuffle([...mcqs, ...typings], rng);
}

// ─── GENERATOR 4: FIGURI DE STIL ───────────────────────────────────────────

function genFiguriStil(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const mcqs: CurriculumMCQ[] = [];
  const T = “lectura_c4”;
  const S = “figuri_stil_c4”;

  for (let i = 0; i < 30; i++) {
    const tip = i % 5;
    if (tip === 0) {
      mcqs.push(createMCQ(T, S, “Care figură de stil conține cuvântul „ca” sau „precum”?”, “Comparația”, [“Metafora”, “Personificarea”, “Hiperbola”], rng));
    } else if (tip === 1) {
      mcqs.push(createMCQ(T, S, “„Ochii ei străluceau ca stelele” este un exemplu de:”, “Comparație”, [“Metaforă”, “Personificare”, “Repetiție”], rng));
    } else if (tip === 2) {
      mcqs.push(createMCQ(T, S, “„Cerul plânge” este o figură de stil numită:”, “Personificare”, [“Metaforă”, “Comparație”, “Hiperbolă”], rng));
    } else if (tip === 3) {
      mcqs.push(createMCQ(T, S, “„Am așteptat o veșnicie” este un exemplu de:”, “Hiperbolă”, [“Comparație”, “Metaforă”, “Personificare”], rng));
    } else {
      mcqs.push(createMCQ(T, S, “„Lacrimile sale erau izvoare de durere” este:”, “Metaforă”, [“Comparație”, “Personificare”, “Hiperbolă”], rng));
    }
  }

  const typings: CurriculumTyping[] = [
    { type: “typing”, topic: T, subtopic: S, question: “Ce figură de stil conține cuvântul 'ca' sau 'precum'?”, answer: [“comparație”, “comparatia”] },
    { type: “typing”, topic: T, subtopic: S, question: “Cum se numește figura de stil care exagerează?”, answer: [“hiperbolă”, “hiperbola”] },
    { type: “typing”, topic: T, subtopic: S, question: “Cum se numește figura care atribuie iensușiri omenești obiectelor?”, answer: [“personificare”, “personificarea”] },
    { type: “typing”, topic: T, subtopic: S, question: “Metafora se deosebește de comparație prin absența cuvintelor...”, answer: [“ca, precum”, “ca; precum”, “ca”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: Frunzele ... în vânt (personificare)”, answer: [“dansau”, “pluteau”, “plutit”] },
    { type: “typing”, topic: T, subtopic: S, question: “Scrie o propoziție cu comparație (foloseşte 'ca')”, answer: [“ochii ca stele”, “albă ca ninge”, “glas ca flaut”] },
    { type: “typing”, topic: T, subtopic: S, question: “Cum se numește repetarea unui cuvânt?”, answer: [“repetiție”, “repetitie”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: 'Viața este un ...' (metaforă)”, answer: [“drum”, “cărare”, “cale”] },
    { type: “typing”, topic: T, subtopic: S, question: “Care figură de stil enumără mai multe obiecte la rând?”, answer: [“enumerație”, “enumeratia”] },
    { type: “typing”, topic: T, subtopic: S, question: “Completează: Cerul ... = personificare”, answer: [“plânge”, “plange”, “se-arată trist”] },
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
