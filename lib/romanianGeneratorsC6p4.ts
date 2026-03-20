// ─── ROMANIAN GENERATORS (CLASA a VI-a) — FAZA 4 ─────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a VI-a (6th grade) – Vocabulary (polysemy, advanced derivation, expressions,
// neologisms, semantic fields), Reading & Literature (genres, exposition modes, character analysis, non-literary texts)

import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

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
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

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

const VOCABULAR_POLISEMIE = [
  { cuvant: "carte", sens1: "obiect cu pagini de hârtie care conțin text", sens2: "joc de cărți" },
  { cuvant: "masă", sens1: "mobilă pe care se pune mâncare", sens2: "Pământul și apa (în sens mitologic)" },
  { cuvant: "munte", sens1: "formă de relief înalt", sens2: "o grămadă mare de ceva (munte de cărți)" },
  { cuvant: "plouă", sens1: "cade apă din cer", sens2: "cade în abundență (plouă bani)" },
  { cuvant: "rață", sens1: "pasăre acvatică", sens2: "greșeală tipografică" },
  { cuvant: "piață", sens1: "loc public unde se vinde mâncare", sens2: "domeniu economic sau comercial" },
  { cuvant: "ziar", sens1: "publicație cu știri de actualizare", sens2: "o echipă de ziariști" },
  { cuvant: "ban", sens1: "monedă mică", sens2: "interdicție, interzicere" },
];

const VOCABULAR_OMONIMIE = [
  { cuvant1: "vers", sens1: "propoziție versificată", cuvant2: "vers", sens2: "sens, direcție (în sens opus)" },
  { cuvant1: "pear", sens1: "a aranja, a pune în ordine", cuvant2: "pear", sens2: "frunzar al copacilor mici" },
  { cuvant1: "sur", sens1: "stând pe picioare (cal sur)", cuvant2: "sur", sens2: "acid, amărui" },
  { cuvant1: "salat", sens1: "mâncare din legume crude", cuvant2: "salat", sens2: "pufnit, umflat" },
];

const VOCABULAR_DERIVARE = [
  { radical: "acu", cuvant_original: "ac", cuvante_derivate: "acuș, acuțit, acuire" },
  { radical: "copil", cuvant_original: "copil", cuvante_derivate: "copilărie, copilăresc, copilă, copilul" },
  { radical: "scri", cuvant_original: "scrie", cuvante_derivate: "scrisoare, scriitor, manuscris, inscripție" },
  { radical: "pleci", cuvant_original: "pleca", cuvante_derivate: "plecare, în-depărtare (deplecare)" },
  { radical: "ăr", cuvant_original: "aer", cuvante_derivate: "aerat, aerisire, aerisitor, aerian" },
];

const VOCABULAR_LOCUTIUNI = [
  { locuție: "a-și pune capul la cale", sens: "a pune în practică un plan" },
  { locuție: "a cere luna din cer", sens: "a cere ceva imposibil" },
  { locuție: "a avea o inimă de aur", sens: "a fi foarte bun și generos" },
  { locuție: "a lua cunoștință", sens: "a afla, a-și lua de veste" },
  { locuție: "a se-ntoarce cu carul peste boi", sens: "a regreta o decizie" },
  { locuție: "a-și face negi", sens: "a-și face griji, a se gândi" },
];

const VOCABULAR_NEOLOGISME = [
  { neologism: "selfie", origine: "eng. self + photo", sens: "poză de sine însuși cu telefonul" },
  { neologism: "online", origine: "eng. on + line", sens: "în rețea, conectat la internet" },
  { neologism: "email", origine: "eng. electronic + mail", sens: "corespondență electronică" },
  { neologism: "avatar", origine: "skt. avataara", sens: "reprezentant virtual al unei persoane" },
  { neologism: "clickuri", origine: "eng. click", sens: "apăsări de mouse-ul computerului" },
];

const VOCABULAR_CAMPURI_SEMANTICE = [
  { camp: "familie", cuvinte: "tată, mamă, frate, soră, bunic, bunică, nepot, nepoată" },
  { camp: "culori", cuvinte: "roșu, albastru, verde, galben, negru, alb, gri, portocaliu" },
  { camp: "animale domestice", cuvinte: "câine, pisică, pasăre, rață, găină, cal, vaci, porc" },
  { camp: "emoții", cuvinte: "bucurie, tristețe, frică, mânie, plictiseală, speranță, disperare" },
  { camp: "vremea", cuvinte: "ploaie, ninge, vânt, soare, nor, fulger, tunet, grindină" },
];

const TEXT_LECTURA_GENURI = [
  { gen: "nuvela", caracteristici: "scurtă, o singură problemă, sfârşit surprinzător" },
  { gen: "roman", caracteristici: "lung, mai multe probleme, personaje complexe" },
  { gen: "pozie", caracteristici: "versuri, ritm, versuri și rime" },
  { gen: "dramă", caracteristici: "pentru scena, dialoguri, conflicte între personaje" },
  { gen: "basm", caracteristici: "fantastic, personaje mitice, lecție morală" },
  { gen: "fabulă", caracteristici: "scurtă, cu animale, lecție morală" },
];

const TEXT_LECTURA_MODURI = [
  { mod: "narațiune", descriere: "prezentarea unei serii de întâmplări într-o ordine" },
  { mod: "descriere", descriere: "prezentarea caracteristicilor unui obiect, locului, persoanei" },
  { mod: "dialog", descriere: "o conversație între doi sau mai mulți indivizi" },
  { mod: "monolog", descriere: "vorbirea unei singure persoane, de obicei în prezența altora" },
];

const TEXT_LECTURA_PERSONAJE = [
  { text: "Copilul era silent și retras, iar ceilalți nu îl observau niciodată.", persoana: "protagonist minor, slab dezvoltat" },
  { text: "Elena era o femeie puternică, inteligentă, care luau decizii îndrazneț chiar și pe pericol.", persoana: "protagonist major, complex, puternic" },
  { text: "Vitregi era gelos, invidios și mereu pune piedici pentru a-l răni pe eroul principal.", persoana: "antagonist, personaj negativ" },
  { text: "Bătrânul muncitor era blând, plin de înțelepciune și mereu ajuta pe alții.", persoana: "personaj de sprijin, model moral" },
];

const TEXT_LECTURA_NONLITERARE = [
  { tip: "articol de ziar", caracteristici: "informație actuală, structurat cu titlu și subtitlu, neutru" },
  { tip: "publicitate", caracteristici: "obiectiv promova un produs, convingător, emoțional" },
  { tip: "instructaj", caracteristici: "o serie de pași pentru a realiza ceva, clar și precis" },
  { tip: "carte tehnică", caracteristici: "prezintă date, diagrame, termeni specifici, formal" },
  { tip: "reclama", caracteristici: "cere atenție, oferă o soluție la o problemă, persuasivă" },
];

// ─── GENERATOR FUNCTIONS ─────────────────────────────────────────────────

export const C6P4_Generators = {
  // VOCABULAR — POLISEMIE
  vocabular_polisemie: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(VOCABULAR_POLISEMIE, rng);
      const sensIdx = Math.floor(rng() * 2);
      const correct = sensIdx === 0 ? item.sens1 : item.sens2;
      const wrong = sensIdx === 0 ? item.sens2 : item.sens1;
      const q = createMCQ(
        "vocabular_c6",
        "polisemie_c6",
        `Cuvântul "${item.cuvant}" poate avea sensul:`,
        correct,
        [wrong, "o pasăre", "un mineral"].filter(x => x !== correct),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // VOCABULAR — OMONIMIE
  vocabular_omonimie: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(VOCABULAR_OMONIMIE, rng);
      const q = createMCQ(
        "vocabular_c6",
        "omonimie_c6",
        `Cuvintele "${item.cuvant1}" și "${item.cuvant2}" sunt omonime. Care este diferența între sens1 și sens2?`,
        `${item.cuvant1} = ${item.sens1}; ${item.cuvant2} = ${item.sens2}`,
        ["au origine comună", "sunt antonime", "sunt sinonime"].filter(
          x => !x.includes("are origine comună") && !x.includes("sunt antonime") && !x.includes("sunt sinonime")
        ),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // VOCABULAR — DERIVARE AVANSATĂ
  vocabular_derivare: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(VOCABULAR_DERIVARE, rng);
      const derivate = item.cuvante_derivate.split(", ");
      const correct = derivate[Math.floor(rng() * derivate.length)];
      const q = createMCQ(
        "vocabular_c6",
        "derivare_c6",
        `Din radicalul "${item.radical}" se poate forma cuvântul:`,
        correct,
        derivate.filter(x => x !== correct),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // VOCABULAR — LOCUȚIUNI
  vocabular_locutiuni: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(VOCABULAR_LOCUTIUNI, rng);
      const q = createMCQ(
        "vocabular_c6",
        "locutiuni_c6",
        `Locuția "${item.locuție}" înseamnă:`,
        item.sens,
        ["a pleca din țară", "a lua o decizie greșită", "a-și pierde speranța"].filter(x => x !== item.sens),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // VOCABULAR — NEOLOGISME
  vocabular_neologisme: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(VOCABULAR_NEOLOGISME, rng);
      const q = createMCQ(
        "vocabular_c6",
        "neologisme_c6",
        `Neologismul "${item.neologism}" provine din limba engleză și înseamnă:`,
        item.sens,
        ["o veste grea", "o ceremonie în aer liber", "o jucărie electronică"].filter(x => x !== item.sens),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // VOCABULAR — CÂMPURI SEMANTICE
  vocabular_campuri_semantice: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(VOCABULAR_CAMPURI_SEMANTICE, rng);
      const cuvinte = item.cuvinte.split(", ");
      const correct = cuvinte[Math.floor(rng() * cuvinte.length)];
      const q = createMCQ(
        "vocabular_c6",
        "campuri_semantice_c6",
        `Care din următoarele cuvinte aparține câmpului semantic "${item.camp}"?`,
        correct,
        cuvinte.filter(x => x !== correct),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // TEXT & LECTURĂ — GENURI LITERARE
  text_lectura_genuri: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(TEXT_LECTURA_GENURI, rng);
      const caracteristici = item.caracteristici.split(", ");
      const correct = caracteristici[Math.floor(rng() * caracteristici.length)];
      const q = createMCQ(
        "text_lectura_c6",
        "genuri_c6",
        `Genul literar "${item.gen}" se caracterizează prin:`,
        correct,
        ["versuri regulate", "dialogue lungi", "descrieri detaliate"].filter(x => x !== correct),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // TEXT & LECTURĂ — MODURI DE EXPUNERE
  text_lectura_moduri: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(TEXT_LECTURA_MODURI, rng);
      const q = createMCQ(
        "text_lectura_c6",
        "moduri_expunere_c6",
        `Modul de expunere "${item.mod}" se caracterizează prin:`,
        item.descriere,
        ["o serie de instrucțiuni", "versuri și rime", "caractere imaginare"].filter(x => x !== item.descriere),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // TEXT & LECTURĂ — ANALIZĂ PERSONAJE
  text_lectura_personaje: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(TEXT_LECTURA_PERSONAJE, rng);
      const q = createMCQ(
        "text_lectura_c6",
        "personaje_c6",
        `Din textul "${item.text}", putem deduce că aceasta este o descriere a unui:`,
        item.persoana,
        ["personaj secundar normal", "antagonist minor", "personaj plin de defecte"].filter(x => x !== item.persoana),
        rng
      );
      questions.push(q);
    }
    return questions;
  },

  // TEXT & LECTURĂ — TEXTE NONLITERARE
  text_lectura_nonliterare: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 10; i++) {
      const item = pick(TEXT_LECTURA_NONLITERARE, rng);
      const caracteristici = item.caracteristici.split(", ");
      const correct = caracteristici[Math.floor(rng() * caracteristici.length)];
      const q = createMCQ(
        "text_lectura_c6",
        "texte_nonliterare_c6",
        `Un ${item.tip} se caracterizează prin:`,
        correct,
        ["personaje imaginare", "ritm și rimă", "o trama complexă"].filter(x => x !== correct),
        rng
      );
      questions.push(q);
    }
    return questions;
  },
};
