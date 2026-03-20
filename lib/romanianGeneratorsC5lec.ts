// ─── ROMANIAN GENERATORS (CLASA a V-a) — LECTURĂ ─────────────────────────────
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

// ─── 1. INTENȚIA AUTORULUI ─────────────────────────────────────────────────────

export function gen_intentie_autor_c5(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "lectura_c5";
  const S = "intentie_autor_c5";

  const pool: CurriculumMCQ[] = [
    createMCQ(T, S,
      "Dacă un text descrie un eveniment real, oferind date și informații precise, autorul intenționează:",
      "să informeze cititorul",
      ["să emoționeze cititorul", "să distreze cititorul", "să convingă cititorul să adopte o opinie"],
      rng),

    createMCQ(T, S,
      "Un text care prezintă o poveste amuzantă despre aventurile unui copil are, cel mai probabil, scopul:",
      "de a distra cititorul",
      ["de a informa cititorul despre fapte reale", "de a convinge cititorul să ia o decizie", "de a prezenta argumente științifice"],
      rng),

    createMCQ(T, S,
      "Când autorul descrie suferința unui personaj folosind cuvinte emoționante și imagini artistice, intenția sa principală este:",
      "să emoționeze cititorul",
      ["să informeze despre un eveniment istoric", "să convingă prin argumente logice", "să explice un fenomen natural"],
      rng),

    createMCQ(T, S,
      "Un text argumentativ, în care autorul prezintă motive pentru care protejarea naturii este importantă, are scopul:",
      "de a convinge cititorul să adopte o anumită atitudine",
      ["de a distra cititorul cu o poveste", "de a descrie un peisaj natural", "de a povesti o întâmplare reală"],
      rng),

    createMCQ(T, S,
      "Naratorul la persoana I este caracterizat prin:",
      "folosirea pronumelor „eu”, „mie”, „mă” — povestitorul participă la acțiune",
      ["absența oricărui narator în text", "folosirea pronumelor „el”, „ea” — povestitorul este în afara acțiunii", "prezentarea opiniei mai multor personaje simultan"],
      rng),

    createMCQ(T, S,
      "Naratorul la persoana a III-a se recunoaște prin:",
      "folosirea pronumelor „el”, „ea”, „ei” — povestitorul prezintă acțiunea din exterior",
      ["prezența cuvântului „eu” în fiecare propoziție", "faptul că naratorul este și personaj principal", "lipsa oricăror personaje în text"],
      rng),

    createMCQ(T, S,
      "Eul liric reprezintă:",
      "vocea poetului din interiorul poeziei, care exprimă sentimente și trăiri",
      ["personajul principal dintr-un roman", "naratorul unui text informativ", "autorul real al textului, care vorbește direct cititorului"],
      rng),
  ];

  return shuffle(pool, rng);
}

// ─── 2. ARGUMENTE ─────────────────────────────────────────────────────────────

export function gen_argumente_c5(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "lectura_c5";
  const S = "argumente_c5";

  const pool: CurriculumMCQ[] = [
    createMCQ(T, S,
      "Ce rol are cuvântul „deoarece” într-un text argumentativ?",
      "introduce un argument (o cauză)",
      ["introduce o concluzie", "introduce un contraargument", "introduce o enumerație"],
      rng),

    createMCQ(T, S,
      "Teza dintr-un text argumentativ reprezintă:",
      "opinia sau afirmația principală pe care autorul o susține",
      ["exemplele oferite pentru a ilustra ideea", "concluzia de la sfârșitul textului", "o întrebare adresată cititorului"],
      rng),

    createMCQ(T, S,
      "Cuvântul „totuși” într-un text argumentativ introduce, de obicei:",
      "un contraargument sau o idee opusă celei anterioare",
      ["o cauză a situației descrise", "o concluzie finală", "o enumerare de fapte"],
      rng),

    createMCQ(T, S,
      "Concluzia unui text argumentativ are rolul de:",
      "a rezuma și a întări opinia exprimată pe parcursul textului",
      ["a introduce un subiect nou de discuție", "a prezenta contraargumentele", "a descrie personajele din text"],
      rng),

    createMCQ(T, S,
      "Expresia „în concluzie” semnalează:",
      "sfârșitul raționamentului și rezumarea ideii principale",
      ["începutul unui contraargument", "introducerea unui exemplu nou", "o întrebare retorică"],
      rng),

    createMCQ(T, S,
      "Un argument bun trebuie să fie:",
      "relevant, logic și susținut de dovezi sau exemple concrete",
      ["lung, complex și scris cu termeni tehnici", "bazat exclusiv pe emoțiile autorului", "contrar opiniei generale pentru a fi original"],
      rng),
  ];

  return shuffle(pool, rng);
}

// ─── 3. INFERENȚE ─────────────────────────────────────────────────────────────

export function gen_inferente_c5(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "lectura_c5";
  const S = "inferente_c5";

  const pool: CurriculumMCQ[] = [
    createMCQ(T, S,
      "Informațiile implicite dintr-un text sunt:",
      "informații care nu sunt spuse direct, dar pot fi deduse din context",
      ["informațiile scrise cu caractere mari", "primele propoziții ale textului", "informațiile repetate de mai multe ori"],
      rng),

    createMCQ(T, S,
      "Informațiile explicite dintr-un text sunt:",
      "informații exprimate clar și direct, fără a fi nevoie de interpretare",
      ["idei pe care cititorul le ghicește din context", "sentimentele neexprimate ale personajului", "detalii ascunse între rânduri"],
      rng),

    createMCQ(T, S,
      "A face o inferență înseamnă a:",
      "deduce o informație sau o concluzie care nu este spusă direct în text",
      ["copia exact un fragment din text", "rezuma toate informațiile explicite", "rescrie textul cu cuvinte proprii"],
      rng),

    createMCQ(T, S,
      "Citești: „Maria a intrat în casă udă până la piele și tremurând.” Ce poți deduce?",
      "Afară ploua și Maria a stat în ploaie",
      ["Maria s-a scăldat în mare", "Maria a plâns mult timp", "Maria a vărsat apă peste ea din greșeală"],
      rng),

    createMCQ(T, S,
      "Predicția în lectură înseamnă:",
      "a anticipa ce se va întâmpla în continuarea textului, pe baza indiciilor deja citite",
      ["a memora cuvintele dificile din text", "a reciti de mai multe ori același paragraf", "a traduce textul în altă limbă"],
      rng),

    createMCQ(T, S,
      "Pentru a trage o concluzie corectă din text, cititorul trebuie să:",
      "folosească atât informațiile din text, cât și cunoștințele proprii",
      ["ignore detaliile mici și să se concentreze doar pe titlu", "citeze întotdeauna o propoziție exactă din text", "inventeze informații care lipsesc din text"],
      rng),
  ];

  return shuffle(pool, rng);
}

// ─── 4. TIMP ȘI SPAȚIU ────────────────────────────────────────────────────────

export function gen_timp_spatiu_c5(seed: number = 42): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "lectura_c5";
  const S = "timp_spatiu_c5";

  const pool: CurriculumMCQ[] = [
    createMCQ(T, S,
      "Indicii temporale sunt cuvintele care:",
      "arată când se petrece acțiunea (ieri, acum, în trecut, dimineața)",
      ["descriu locul acțiunii", "caracterizează personajele", "exprimă sentimentele personajelor"],
      rng),

    createMCQ(T, S,
      "Indicii spațiale sunt cuvintele care:",
      "arată unde se petrece acțiunea (în pădure, acasă, la școală, departe)",
      ["indică momentul zilei sau al anului", "descriu înfățișarea personajelor", "prezintă cauza unui eveniment"],
      rng),

    createMCQ(T, S,
      "Cuvintele „în acea dimineață de toamnă” sunt indici:",
      "temporali — arată când se petrece acțiunea",
      ["spațiali — arată unde se petrece acțiunea", "cauzali — explică de ce se petrece acțiunea", "finali — arată scopul acțiunii"],
      rng),

    createMCQ(T, S,
      "Expresia „pe malul râului, la marginea satului” reprezintă un indiciu:",
      "spațial — localizează acțiunea",
      ["temporal — precizează momentul acțiunii", "cauzal — explică motivul acțiunii", "modal — arată cum se desfășoară acțiunea"],
      rng),

    createMCQ(T, S,
      "De ce sunt importante coordonatele spațiale și temporale într-un text narativ?",
      "Pentru că situează acțiunea și personajele într-un context real și credibil",
      ["Pentru că înlocuiesc dialogul dintre personaje", "Pentru că reprezintă tema principală a textului", "Pentru că sunt obligatorii în orice tip de text"],
      rng),

    createMCQ(T, S,
      "Citești: „A doua zi, în zori, eroii au pornit spre cetate.” Identifică indicii temporali:",
      "„A doua zi” și „în zori”",
      ["„eroii” și „cetate”", "„au pornit” și „spre”", "„cetate” și „A doua zi”"],
      rng),
  ];

  return shuffle(pool, rng);
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────

export const C5_Lec_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
  lectura_c5: {
    intentie_autor_c5: (seed = 42) => gen_intentie_autor_c5(seed),
    argumente_c5: (seed = 42) => gen_argumente_c5(seed),
    inferente_c5: (seed = 42) => gen_inferente_c5(seed),
    timp_spatiu_c5: (seed = 42) => gen_timp_spatiu_c5(seed),
  }
};
