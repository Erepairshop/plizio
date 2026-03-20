import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [copy[i], copy[j]] = [copy[j], copy[i]]; }
  return copy;
}
function pick<T>(arr: T[], rng: () => number): T { return arr[Math.floor(rng() * arr.length)]; }
function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrongOptions: string[], rng: () => number): CurriculumMCQ {
  const seen = new Set<string>(); const unique: string[] = [];
  for (const w of wrongOptions) { if (w !== correct && !seen.has(w)) { seen.add(w); unique.push(w); } }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng);
  return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) };
}

// ─── SINONIME & ANTONIME (C4) ────────────────────────────────────────────────

function genSinonimeAntonimeC4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "vocabular_c4";
  const subtopic = "sinonime_antonime_c4";
  const qs: CurriculumQuestion[] = [];

  const sinonimePool: Array<{ word: string; correct: string; wrong: string[] }> = [
    { word: "harnic",     correct: "silitor",    wrong: ["leneș", "fricos", "zgârcit"] },
    { word: "a contempla",correct: "a privi",    wrong: ["a fugi", "a construi", "a striga"] },
    { word: "bucuros",    correct: "vesel",      wrong: ["trist", "leneș", "îngrijorat"] },
    { word: "curajos",    correct: "viteaz",     wrong: ["fricos", "leneș", "nebun"] },
    { word: "a grăi",     correct: "a vorbi",    wrong: ["a tăcea", "a dormi", "a merge"] },
    { word: "a zidi",     correct: "a construi", wrong: ["a dărâma", "a fugi", "a uita"] },
    { word: "fericit",    correct: "bucuros",    wrong: ["trist", "supărat", "plictisit"] },
    { word: "brav",       correct: "curajos",    wrong: ["fricos", "leneș", "rău"] },
    { word: "a admira",   correct: "a privi",    wrong: ["a ignora", "a dărâma", "a alerga"] },
    { word: "muncitor",   correct: "harnic",     wrong: ["leneș", "zgârcit", "trist"] },
  ];

  const antonimePool: Array<{ word: string; correct: string; wrong: string[] }> = [
    { word: "curajos",    correct: "fricos",     wrong: ["harnic", "vesel", "silitor"] },
    { word: "harnic",     correct: "leneș",      wrong: ["curajos", "bucuros", "vesel"] },
    { word: "a iubi",     correct: "a urî",      wrong: ["a privi", "a vorbi", "a construi"] },
    { word: "a construi", correct: "a dărâma",   wrong: ["a fugi", "a tăcea", "a privi"] },
    { word: "zgârcit",    correct: "darnic",     wrong: ["harnic", "leneș", "trist"] },
    { word: "ager",       correct: "prost",      wrong: ["curajos", "vesel", "silitor"] },
    { word: "viteaz",     correct: "laș",        wrong: ["leneș", "harnic", "bucuros"] },
  ];

  // Generate synonym questions
  const shuffledSin = shuffle(sinonimePool, rng);
  for (let i = 0; i < Math.min(8, shuffledSin.length); i++) {
    const { word, correct, wrong } = shuffledSin[i];
    qs.push(createMCQ(topic, subtopic,
      `Care este sinonimul cuvântului „${word}”?`,
      correct, wrong, rng));
  }

  // Generate antonym questions
  const shuffledAnt = shuffle(antonimePool, rng);
  for (let i = 0; i < Math.min(7, shuffledAnt.length); i++) {
    const { word, correct, wrong } = shuffledAnt[i];
    qs.push(createMCQ(topic, subtopic,
      `Care este antonimul cuvântului „${word}”?`,
      correct, wrong, rng));
  }

  return shuffle(qs, rng).slice(0, 15);
}

// ─── CÂMPURI SEMANTICE (C4) ──────────────────────────────────────────────────

function genCampuriSemanticeC4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "vocabular_c4";
  const subtopic = "campuri_semantice_c4";
  const qs: CurriculumQuestion[] = [];

  // Odd-one-out: which word does NOT belong?
  const oddOneOut: Array<{ field: string; members: string[]; intruder: string; wrongIntruders: string[] }> = [
    {
      field: "școlii",
      members: ["elev", "caiet", "profesor", "tablă"],
      intruder: "pădure",
      wrongIntruders: ["elev", "caiet", "tablă"],
    },
    {
      field: "naturii",
      members: ["pădure", "munte", "pasăre", "copac"],
      intruder: "rechizite",
      wrongIntruders: ["pădure", "munte", "pasăre"],
    },
    {
      field: "alimentelor",
      members: ["pâine", "lapte", "fructe", "legume"],
      intruder: "creion",
      wrongIntruders: ["pâine", "lapte", "fructe"],
    },
    {
      field: "corpului uman",
      members: ["cap", "mână", "picior", "ochi"],
      intruder: "soare",
      wrongIntruders: ["cap", "mână", "ochi"],
    },
    {
      field: "școlii",
      members: ["carte", "profesor", "tablă", "rechizite"],
      intruder: "râu",
      wrongIntruders: ["carte", "profesor", "tablă"],
    },
    {
      field: "naturii",
      members: ["floare", "râu", "animal", "soare"],
      intruder: "bucătărie",
      wrongIntruders: ["floare", "râu", "animal"],
    },
  ];

  for (const item of oddOneOut) {
    qs.push(createMCQ(topic, subtopic,
      `Care cuvânt NU aparține câmpului semantic al ${item.field}?`,
      item.intruder, item.wrongIntruders, rng));
  }

  // Which field do these words belong to?
  const fieldGroups: Array<{ words: string; correct: string; wrong: string[] }> = [
    {
      words: "„pâine, lapte, fructe”",
      correct: "alimentelor",
      wrong: ["școlii", "naturii", "corpului uman"],
    },
    {
      words: "„elev, carte, profesor, caiet”",
      correct: "școlii",
      wrong: ["alimentelor", "naturii", "corpului uman"],
    },
    {
      words: "„cap, mână, picior, ochi”",
      correct: "corpului uman",
      wrong: ["școlii", "alimentelor", "naturii"],
    },
    {
      words: "„pădure, râu, munte, floare”",
      correct: "naturii",
      wrong: ["școlii", "alimentelor", "corpului uman"],
    },
    {
      words: "„pâine, bucătărie, mâncare, masă”",
      correct: "alimentelor / bucătăriei",
      wrong: ["școlii", "naturii", "corpului uman"],
    },
  ];

  for (const item of fieldGroups) {
    qs.push(createMCQ(topic, subtopic,
      `Cuvintele ${item.words} aparțin câmpului semantic al:`,
      item.correct, item.wrong, rng));
  }

  // Concept questions
  qs.push(createMCQ(topic, subtopic,
    "Câmpul semantic reprezintă un grup de cuvinte care:",
    "au legătură cu același domeniu",
    ["sună la fel", "sunt sinonime", "au același număr de litere"],
    rng));

  qs.push(createMCQ(topic, subtopic,
    "Care dintre aceste cuvinte face parte din câmpul semantic al naturii?",
    "copac",
    ["caiet", "ureche", "pâine"],
    rng));

  qs.push(createMCQ(topic, subtopic,
    "Care cuvânt aparține câmpului semantic al corpului uman?",
    "inimă",
    ["tablă", "lapte", "copac"],
    rng));

  qs.push(createMCQ(topic, subtopic,
    "Cuvintele „creion, caiet, rechizite, școală” fac parte din câmpul semantic al:",
    "școlii",
    ["naturii", "alimentelor", "corpului uman"],
    rng));

  return shuffle(qs, rng).slice(0, 15);
}

// ─── EXPRESII FRAZEOLOGICE (C4) ───────────────────────────────────────────────

function genExpresiiFragzeologiceC4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "vocabular_c4";
  const subtopic = "expresii_frazeologice_c4";
  const qs: CurriculumQuestion[] = [];

  const expresii: Array<{ expr: string; meaning: string; wrongMeanings: string[] }> = [
    {
      expr: "a-și da seama",
      meaning: "a înțelege",
      wrongMeanings: ["a uita", "a alerga", "a construi"],
    },
    {
      expr: "pe de rost",
      meaning: "din memorie",
      wrongMeanings: ["la întâmplare", "cu grijă", "în grabă"],
    },
    {
      expr: "a pierde vremea",
      meaning: "a irosi timpul",
      wrongMeanings: ["a fugi repede", "a lucra mult", "a se odihni"],
    },
    {
      expr: "a băga de seamă",
      meaning: "a observa",
      wrongMeanings: ["a uita", "a construi", "a fugi"],
    },
    {
      expr: "cu tot dinadinsul",
      meaning: "intenționat",
      wrongMeanings: ["din greșeală", "la întâmplare", "cu frică"],
    },
    {
      expr: "la nimereală",
      meaning: "la întâmplare",
      wrongMeanings: ["cu atenție", "intenționat", "cu grijă"],
    },
    {
      expr: "a o lua la fugă",
      meaning: "a fugi",
      wrongMeanings: ["a se opri", "a construi", "a înțelege"],
    },
    {
      expr: "a lua în seamă",
      meaning: "a considera important",
      wrongMeanings: ["a ignora", "a fugi", "a uita"],
    },
    {
      expr: "a-i veni mintea la cap",
      meaning: "a se cumini",
      wrongMeanings: ["a se supăra", "a fugi", "a uita totul"],
    },
    {
      expr: "a da din casă",
      meaning: "a trăda un secret",
      wrongMeanings: ["a construi o casă", "a ieși afară", "a face ordine"],
    },
  ];

  // Forward: expression → meaning
  const fwd = shuffle(expresii, rng).slice(0, 10);
  for (const { expr, meaning, wrongMeanings } of fwd) {
    qs.push(createMCQ(topic, subtopic,
      `Ce înseamnă expresia „${expr}”?`,
      meaning, wrongMeanings, rng));
  }

  // Reverse: meaning → expression
  const reversePool: Array<{ meaning: string; correct: string; wrong: string[] }> = [
    {
      meaning: "a fugi",
      correct: "a o lua la fugă",
      wrong: ["a da din casă", "a băga de seamă", "a pierde vremea"],
    },
    {
      meaning: "a înțelege",
      correct: "a-și da seama",
      wrong: ["pe de rost", "la nimereală", "a lua în seamă"],
    },
    {
      meaning: "a irosi timpul",
      correct: "a pierde vremea",
      wrong: ["cu tot dinadinsul", "a băga de seamă", "pe de rost"],
    },
    {
      meaning: "din memorie",
      correct: "pe de rost",
      wrong: ["la nimereală", "cu tot dinadinsul", "a da din casă"],
    },
    {
      meaning: "a observa",
      correct: "a băga de seamă",
      wrong: ["a o lua la fugă", "a da din casă", "la nimereală"],
    },
  ];

  const revShuffled = shuffle(reversePool, rng).slice(0, 5);
  for (const { meaning, correct, wrong } of revShuffled) {
    qs.push(createMCQ(topic, subtopic,
      `Care expresie înseamnă „${meaning}”?`,
      correct, wrong, rng));
  }

  return shuffle(qs, rng).slice(0, 15);
}

// ─── DERIVARE & COMPUNERE (C4) ────────────────────────────────────────────────

function genDerivareCompunereC4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "vocabular_c4";
  const subtopic = "derivare_compunere_c4";
  const qs: CurriculumQuestion[] = [];

  // Prefix identification
  const prefixQs: Array<{ word: string; correct: string; wrong: string[] }> = [
    { word: "refacere",    correct: "re-",  wrong: ["ne-", "des-", "în-"] },
    { word: "nedrept",     correct: "ne-",  wrong: ["re-", "des-", "pre-"] },
    { word: "desface",     correct: "des-", wrong: ["ne-", "re-", "în-"] },
    { word: "prevedere",   correct: "pre-", wrong: ["re-", "ne-", "des-"] },
    { word: "îngriji",     correct: "în-",  wrong: ["re-", "ne-", "pre-"] },
    { word: "revenire",    correct: "re-",  wrong: ["ne-", "în-", "pre-"] },
    { word: "necinstit",   correct: "ne-",  wrong: ["re-", "des-", "în-"] },
    { word: "dezgheța",    correct: "dez-", wrong: ["ne-", "re-", "pre-"] },
  ];

  for (const { word, correct, wrong } of shuffle(prefixQs, rng).slice(0, 5)) {
    qs.push(createMCQ(topic, subtopic,
      `Cuvântul „${word}” conține prefixul:`,
      correct, wrong, rng));
  }

  // Suffix identification
  const suffixQs: Array<{ words: string; correct: string; wrong: string[] }> = [
    {
      words: "„brutărie, librărie, cofetărie”",
      correct: "-ărie",
      wrong: ["-ire", "-tor", "-esc"],
    },
    {
      words: "„cititor, scriitor, ajutător”",
      correct: "-tor",
      wrong: ["-ărie", "-ire", "-esc"],
    },
    {
      words: "„fericire, iubire, dorire”",
      correct: "-ire",
      wrong: ["-ărie", "-tor", "-esc"],
    },
    {
      words: "„omenesc, românesc, firesc”",
      correct: "-esc",
      wrong: ["-ărie", "-ire", "-tor"],
    },
  ];

  for (const { words, correct, wrong } of suffixQs) {
    qs.push(createMCQ(topic, subtopic,
      `Ce sufix comun au cuvintele ${words}?`,
      correct, wrong, rng));
  }

  // Compound words
  const compoundQs: Array<{ word: string; correct: string; wrong: string[] }> = [
    {
      word: "floarea-soarelui",
      correct: "floare + soare",
      wrong: ["floare + lume", "soare + apă", "floare + apă"],
    },
    {
      word: "binefacere",
      correct: "bine + facere",
      wrong: ["bine + mergere", "bin + facere", "bine + vorbire"],
    },
    {
      word: "răufăcător",
      correct: "rău + făcător",
      wrong: ["rău + mergător", "rău + vorbitor", "bine + făcător"],
    },
    {
      word: "bunăvoință",
      correct: "bună + voință",
      wrong: ["bun + muncă", "bun + faptă", "bună + fericire"],
    },
  ];

  for (const { word, correct, wrong } of shuffle(compoundQs, rng)) {
    qs.push(createMCQ(topic, subtopic,
      `Din ce cuvinte este format compusul „${word}”?`,
      correct, wrong, rng));
  }

  // Concept / rule questions
  qs.push(createMCQ(topic, subtopic,
    "Sufixul „-ărie” formează de obicei:",
    "substantive care indică locuri sau meserii",
    ["adjective", "verbe", "pronume"],
    rng));

  qs.push(createMCQ(topic, subtopic,
    "Prefixul „re-” adaugă cuvântului sensul de:",
    "repetare / a face din nou",
    ["negare", "separare", "anticipare"],
    rng));

  qs.push(createMCQ(topic, subtopic,
    "Cuvântul „necinstit” este format prin:",
    "derivare cu prefix",
    ["derivare cu sufix", "compunere", "schimbarea categoriei gramaticale"],
    rng));

  qs.push(createMCQ(topic, subtopic,
    "Care dintre cuvintele de mai jos este un cuvânt compus?",
    "floarea-soarelui",
    ["refacere", "nedrept", "cititor"],
    rng));

  qs.push(createMCQ(topic, subtopic,
    "Sufixul „-tor” formează de obicei:",
    "substantive sau adjective care arată agentul acțiunii",
    ["substantive de loc", "verbe reflexive", "adverbe"],
    rng));

  return shuffle(qs, rng).slice(0, 15);
}

// ─── EXPORT ──────────────────────────────────────────────────────────────────

export const C4_Voc_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
  vocabular_c4: {
    sinonime_antonime_c4: (seed = Date.now()) => genSinonimeAntonimeC4(seed),
    campuri_semantice_c4: (seed = Date.now()) => genCampuriSemanticeC4(seed),
    expresii_frazeologice_c4: (seed = Date.now()) => genExpresiiFragzeologiceC4(seed),
    derivare_compunere_c4: (seed = Date.now()) => genDerivareCompunereC4(seed),
  },
};
