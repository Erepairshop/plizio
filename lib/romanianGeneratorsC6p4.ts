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

function createTyping(topic: string, subtopic: string, question: string, answer: string): CurriculumQuestion {
  return {
    type: "typing",
    topic,
    subtopic,
    question,
    answer: answer.toLowerCase().trim(),
  } as CurriculumQuestion;
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
    const topic = "vocabular_c6";
    const subtopic = "polisemie_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30) — cyclic iteration to avoid duplicates
    for (let i = 0; i < 30; i++) {
      const item = VOCABULAR_POLISEMIE[i % VOCABULAR_POLISEMIE.length];
      const sensIdx = Math.floor(rng() * 2);
      const correct = sensIdx === 0 ? item.sens1 : item.sens2;
      const wrong = sensIdx === 0 ? item.sens2 : item.sens1;
      const q = createMCQ(
        topic,
        subtopic,
        `Cuvântul "${item.cuvant}" poate avea sensul:`,
        correct,
        [wrong, "o pasăre", "un mineral"].filter(x => x !== correct),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este polisemia?", "proprietatea cuvântului de a avea mai multe sensuri"));
    questions.push(createTyping(topic, subtopic, "Diferența dintre polisemie și omonimie:", "polisemia = sensuri conexe; omonimia = sensuri neconexe"));
    questions.push(createTyping(topic, subtopic, "Exemplu de cuvânt polisem:", "carte - obiect sau joc"));
    questions.push(createTyping(topic, subtopic, "Polisemia apare datorită:", "evoluției limbii și dezvoltării metaforice"));
    questions.push(createTyping(topic, subtopic, "Sensul primar al cuvântului polisem:", "de obicei cel mai vechi sau cel mai frecvent"));
    questions.push(createTyping(topic, subtopic, "Sensuri derivate în polisemie:", "apar din extensii ale sensului primar"));
    questions.push(createTyping(topic, subtopic, "Context în înțelegerea polisemiei:", "ajută la identificarea sensului corect"));
    questions.push(createTyping(topic, subtopic, "Polisemia în dicționar:", "sensurile apar sub același cuvânt cu numere"));
    questions.push(createTyping(topic, subtopic, "Exemplu sense conexe:", "munte - relief sau grămadă de ceva"));
    questions.push(createTyping(topic, subtopic, "Expresii cu cuvinte poliseme:", "sunt frecvente și create prin metaforă"));
    questions.push(createTyping(topic, subtopic, "Cuvinte poliseme comune:", "carte, masă, ban, piață, plouă"));
    questions.push(createTyping(topic, subtopic, "Polisemia este:", "fenomen normal în limba română"));
    questions.push(createTyping(topic, subtopic, "Sensurile poliseme pot fi:", "concrete și abstracte"));
    questions.push(createTyping(topic, subtopic, "Identificare polisemie în text:", "analizând contextul și sensul cuvintelor"));
    questions.push(createTyping(topic, subtopic, "Importanța polisemiei:", "îmbogățește și flexibilizează limba"));

    return shuffle(questions, rng);
  },

  // VOCABULAR — OMONIMIE
  vocabular_omonimie: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "vocabular_c6";
    const subtopic = "omonimie_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30) — cyclic iteration to avoid duplicates
    for (let i = 0; i < 30; i++) {
      const item = VOCABULAR_OMONIMIE[i % VOCABULAR_OMONIMIE.length];
      const q = createMCQ(
        topic,
        subtopic,
        `Cuvintele "${item.cuvant1}" și "${item.cuvant2}" sunt omonime. Care este diferența între sens1 și sens2?`,
        `${item.cuvant1} = ${item.sens1}; ${item.cuvant2} = ${item.sens2}`,
        ["au origine comună", "sunt antonime", "sunt sinonime"].filter(
          x => !x.includes("are origine comună") && !x.includes("sunt antonime") && !x.includes("sunt sinonime")
        ),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este omonimia?", "cuvinte cu pronunție și scriere identice dar sensuri diferite"));
    questions.push(createTyping(topic, subtopic, "Diferența dintre omonimie și polisemie:", "omonimia = sensuri neconexe; polisemia = sensuri conexe"));
    questions.push(createTyping(topic, subtopic, "Origine omonimelor:", "de regulă din evoluții diferite ale limbii"));
    questions.push(createTyping(topic, subtopic, "Exemplu de omonime:", "vers - versificat sau direcție"));
    questions.push(createTyping(topic, subtopic, "Omonime în dicționar:", "sunt prezentate ca intrări separate"));
    questions.push(createTyping(topic, subtopic, "Context în omonime:", "esențial pentru a distinge sensurile"));
    questions.push(createTyping(topic, subtopic, "Omonime perfecte:", "identice în pronunție și scriere"));
    questions.push(createTyping(topic, subtopic, "Omonime imperfecte:", "pot diferi ușor în pronunție sau scriere"));
    questions.push(createTyping(topic, subtopic, "Homonime în limba română:", "vers, pear, sur, salat"));
    questions.push(createTyping(topic, subtopic, "Jocuri de cuvinte folosesc:", "omonimia pentru efecte comice"));
    questions.push(createTyping(topic, subtopic, "Sensurile omonimelor sunt:", "în general neînrudite"));
    questions.push(createTyping(topic, subtopic, "Omonimia poate crea:", "ambiguități în comunicare"));
    questions.push(createTyping(topic, subtopic, "Perechi omonime:", "nu sunt numeroase în limba română"));
    questions.push(createTyping(topic, subtopic, "Pronunție în omonime:", "identică pentru omonimele perfecte"));
    questions.push(createTyping(topic, subtopic, "Importanța distingerii omonimelor:", "pentru înțelegerea corectă a textului"));

    return shuffle(questions, rng);
  },

  // VOCABULAR — DERIVARE AVANSATĂ
  vocabular_derivare: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "vocabular_c6";
    const subtopic = "derivare_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30) — cyclic iteration to avoid duplicates
    for (let i = 0; i < 30; i++) {
      const item = VOCABULAR_DERIVARE[i % VOCABULAR_DERIVARE.length];
      const derivate = item.cuvante_derivate.split(", ");
      const correct = derivate[Math.floor(rng() * derivate.length)];
      const q = createMCQ(
        topic,
        subtopic,
        `Din radicalul "${item.radical}" se poate forma cuvântul:`,
        correct,
        derivate.filter(x => x !== correct),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este derivarea?", "procesul de formare a cuvintelor noi din cuvinte existente"));
    questions.push(createTyping(topic, subtopic, "Elementele derivării:", "radical, prefix, sufix"));
    questions.push(createTyping(topic, subtopic, "Ce este radicalul?", "partea principale a cuvântului care poartă sensul"));
    questions.push(createTyping(topic, subtopic, "Tipuri de derivare:", "cu prefix, cu sufix, cu prefix și sufix"));
    questions.push(createTyping(topic, subtopic, "Exemple de sufixe derivatoare:", "-are, -ire, -ie, -ist, -esc"));
    questions.push(createTyping(topic, subtopic, "Exemple de prefixe derivatoare:", "re-, pre-, de-, in-, sub-, super-"));
    questions.push(createTyping(topic, subtopic, "Cuvinte cu prefix din 'scrie':", "rescrie, prescrie, descriere"));
    questions.push(createTyping(topic, subtopic, "Cuvinte cu sufix din 'copil':", "copilărie, copilăresc, copilă"));
    questions.push(createTyping(topic, subtopic, "Cuvinte derivate din 'copil':", "copilărie, copilăresc, copilă, copilul"));
    questions.push(createTyping(topic, subtopic, "Derivare morfologică:", "forma se schimbă, sensul se conservă"));
    questions.push(createTyping(topic, subtopic, "Cuvinte derivate din 'ac':", "acuș, acuțit, acuire"));
    questions.push(createTyping(topic, subtopic, "Radical în cuvinte derivate:", "rămâne neschimbat sau cu mici modificări"));
    questions.push(createTyping(topic, subtopic, "Derivare și cuvinte noi:", "dă flexibilitate limbii și permite expresivitate"));
    questions.push(createTyping(topic, subtopic, "Cuvinte derivate din 'aer':", "aerat, aerisire, aerisitor, aerian"));
    questions.push(createTyping(topic, subtopic, "Importanța derivării:", "permite înțelegerea cuvintelor necunoscute"));

    return shuffle(questions, rng);
  },

  // VOCABULAR — LOCUȚIUNI
  vocabular_locutiuni: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "vocabular_c6";
    const subtopic = "locutiuni_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30) — cyclic iteration to avoid duplicates
    for (let i = 0; i < 30; i++) {
      const item = VOCABULAR_LOCUTIUNI[i % VOCABULAR_LOCUTIUNI.length];
      const q = createMCQ(
        topic,
        subtopic,
        `Locuția "${item.locuție}" înseamnă:`,
        item.sens,
        ["a pleca din țară", "a lua o decizie greșită", "a-și pierde speranța"].filter(x => x !== item.sens),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este o locuție?", "grupare de cuvinte cu sens figurat stabil"));
    questions.push(createTyping(topic, subtopic, "Caracteristici locuțiuni:", "stabilitate, sens figurat, frecvență de folosire"));
    questions.push(createTyping(topic, subtopic, "Locuția vs cuvânt izolat:", "locația are sens diferit decât suma părților"));
    questions.push(createTyping(topic, subtopic, "Exemplu locuție:", "a-și pune capul la cale = a pune în practică un plan"));
    questions.push(createTyping(topic, subtopic, "Locuții cu obiecte:", "a cere luna din cer, a avea inimă de aur"));
    questions.push(createTyping(topic, subtopic, "Locuții cu acțiuni corporale:", "a-și pune capul la cale, a la cunoștință"));
    questions.push(createTyping(topic, subtopic, "Origine locuțiilor:", "pot proveni din expresii literare sau tradiționale"));
    questions.push(createTyping(topic, subtopic, "Locuții în dicționar:", "apar ca unități separate cu sens propriu"));
    questions.push(createTyping(topic, subtopic, "Adaptabilitate locuțiilor:", "pot fi conjugate sau flexionate"));
    questions.push(createTyping(topic, subtopic, "Context locuții:", "essential pentru utilizare naturală"));
    questions.push(createTyping(topic, subtopic, "Locuții și expresivitate:", "dau frumusețe și flexibilitate limbii"));
    questions.push(createTyping(topic, subtopic, "Tip locuții idiomatice:", "sensul nu se deduce din cuvinte componente"));
    questions.push(createTyping(topic, subtopic, "Locuții sentimentale:", "exprimă emoții, dorințe, sentimente"));
    questions.push(createTyping(topic, subtopic, "Regiuni și locuții:", "pot varia pe regiuni geografice"));
    questions.push(createTyping(topic, subtopic, "Importanța locuțiilor:", "înbogățesc comunicarea și o fac mai naturală"));

    return shuffle(questions, rng);
  },

  // VOCABULAR — NEOLOGISME
  vocabular_neologisme: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "vocabular_c6";
    const subtopic = "neologisme_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30) — cyclic iteration to avoid duplicates
    for (let i = 0; i < 30; i++) {
      const item = VOCABULAR_NEOLOGISME[i % VOCABULAR_NEOLOGISME.length];
      const q = createMCQ(
        topic,
        subtopic,
        `Neologismul "${item.neologism}" provine din limba engleză și înseamnă:`,
        item.sens,
        ["o veste grea", "o ceremonie în aer liber", "o jucărie electronică"].filter(x => x !== item.sens),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce sunt neologismele?", "cuvinte noi sau sensuri noi ale cuvintelor existente"));
    questions.push(createTyping(topic, subtopic, "Origine neologismelor:", "din limbi străine, din evoluție, din necesități noi"));
    questions.push(createTyping(topic, subtopic, "Neologisme anglicizme:", "selfie, online, email, avatar, click"));
    questions.push(createTyping(topic, subtopic, "Neologismul 'selfie':", "poză de sine însuși cu telefonul"));
    questions.push(createTyping(topic, subtopic, "Neologismul 'online':", "în rețea, conectat la internet"));
    questions.push(createTyping(topic, subtopic, "Neologismul 'email':", "corespondență electronică"));
    questions.push(createTyping(topic, subtopic, "Neologismul 'avatar':", "reprezentant virtual al unei persoane"));
    questions.push(createTyping(topic, subtopic, "Neologismul 'click':", "apăsare de mouse-ul computerului"));
    questions.push(createTyping(topic, subtopic, "Cauze neologisme:", "progres tehnologic, schimbări sociale, contact cu alte limbi"));
    questions.push(createTyping(topic, subtopic, "Adaptare neologisme:", "pot fi românizate sau rămân în forma inițială"));
    questions.push(createTyping(topic, subtopic, "Neologisme în dicționar:", "apar după perioada de stabilizare"));
    questions.push(createTyping(topic, subtopic, "Neologisme și vârstă:", "sunt mai frecvente pe rețelele de socializare"));
    questions.push(createTyping(topic, subtopic, "Context neologisme:", "mai frecvente în discursul cotidian modern"));
    questions.push(createTyping(topic, subtopic, "Acceptare neologisme:", "trec prin faze înainte de stabilizare"));
    questions.push(createTyping(topic, subtopic, "Importanța neologismelor:", "reflectă evoluția limbii și a societății"));

    return shuffle(questions, rng);
  },

  // VOCABULAR — CÂMPURI SEMANTICE
  vocabular_campuri_semantice: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "vocabular_c6";
    const subtopic = "campuri_semantice_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30) — cyclic iteration to avoid duplicates
    for (let i = 0; i < 30; i++) {
      const item = VOCABULAR_CAMPURI_SEMANTICE[i % VOCABULAR_CAMPURI_SEMANTICE.length];
      const cuvinte = item.cuvinte.split(", ");
      const correct = cuvinte[Math.floor(rng() * cuvinte.length)];
      const q = createMCQ(
        topic,
        subtopic,
        `Care din următoarele cuvinte aparține câmpului semantic "${item.camp}"?`,
        correct,
        cuvinte.filter(x => x !== correct),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este câmpul semantic?", "grup de cuvinte cu sens apropiat sau îndrumat de o idee comună"));
    questions.push(createTyping(topic, subtopic, "Organizare câmpuri semantice:", "cuvinte grupate în jurul unei teme centrale"));
    questions.push(createTyping(topic, subtopic, "Exemplu câmp semantic 'familie':", "tată, mamă, frate, soră, bunic, bunică"));
    questions.push(createTyping(topic, subtopic, "Exemplu câmp semantic 'culori':", "roșu, albastru, verde, galben, negru, alb"));
    questions.push(createTyping(topic, subtopic, "Exemplu câmp semantic 'animale':", "câine, pisică, pasăre, rață, găină, cal"));
    questions.push(createTyping(topic, subtopic, "Exemplu câmp semantic 'emoții':", "bucurie, tristețe, frică, mânie, plictiseală"));
    questions.push(createTyping(topic, subtopic, "Exemplu câmp semantic 'vreme':", "ploaie, ninge, vânt, soare, nor, fulger"));
    questions.push(createTyping(topic, subtopic, "Relații în câmpuri semantice:", "hipernim, hiperonim, sinonimie, antonimie"));
    questions.push(createTyping(topic, subtopic, "Legătura cuvintelor în câmp:", "semantică și conceptuală"));
    questions.push(createTyping(topic, subtopic, "Câmpuri semantice în dicționar:", "uneori marcate cu iconuri sau simboluri"));
    questions.push(createTyping(topic, subtopic, "Importanța câmpurilor:", "ajută la înțelegerea relațiilor dintre cuvinte"));
    questions.push(createTyping(topic, subtopic, "Învățare vocabular:", "prin câmpuri semantice e mai eficientă"));
    questions.push(createTyping(topic, subtopic, "Câmpuri centrale și periferice:", "au centre și margini"));
    questions.push(createTyping(topic, subtopic, "Flexibilitate câmpuri semantice:", "pot se suprapună"));
    questions.push(createTyping(topic, subtopic, "Utilizare câmpuri în text:", "crează coeziune și conectare semantică"));

    return shuffle(questions, rng);
  },

  // TEXT & LECTURĂ — GENURI LITERARE
  text_lectura_genuri: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "text_lectura_c6";
    const subtopic = "genuri_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30) — cyclic iteration to avoid duplicates
    for (let i = 0; i < 30; i++) {
      const item = TEXT_LECTURA_GENURI[i % TEXT_LECTURA_GENURI.length];
      const caracteristici = item.caracteristici.split(", ");
      const correct = caracteristici[Math.floor(rng() * caracteristici.length)];
      const q = createMCQ(
        topic,
        subtopic,
        `Genul literar "${item.gen}" se caracterizează prin:`,
        correct,
        ["versuri regulate", "dialogue lungi", "descrieri detaliate"].filter(x => x !== correct),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce sunt genurile literare?", "categorii de lucrări literare cu caracteristici comune"));
    questions.push(createTyping(topic, subtopic, "Genuri literare principale:", "epică, lirică, dramatică"));
    questions.push(createTyping(topic, subtopic, "Nuvela ca gen:", "text scurt, o singură problemă, sfârșit surprinzător"));
    questions.push(createTyping(topic, subtopic, "Romanul ca gen:", "text lung, mai multe probleme, personaje complexe"));
    questions.push(createTyping(topic, subtopic, "Poezia ca gen:", "versuri, ritm, versuri și rime"));
    questions.push(createTyping(topic, subtopic, "Drama ca gen:", "pentru scena, dialoguri, conflicte între personaje"));
    questions.push(createTyping(topic, subtopic, "Basmul ca gen:", "fantastic, personaje mitice, lecție morală"));
    questions.push(createTyping(topic, subtopic, "Fabula ca gen:", "scurtă, cu animale, lecție morală"));
    questions.push(createTyping(topic, subtopic, "Caracteristici gen:", "sunt fixe și tradiționale"));
    questions.push(createTyping(topic, subtopic, "Evoluția genurilor:", "se schimbă cu vremea și culturile"));
    questions.push(createTyping(topic, subtopic, "Subgenuri:", "categorii mai mici în interiorul genurilor"));
    questions.push(createTyping(topic, subtopic, "Clasificare cărți:", "după gen în biblioteci"));
    questions.push(createTyping(topic, subtopic, "Genuri hibride:", "îmbinații între mai multe genuri"));
    questions.push(createTyping(topic, subtopic, "Recunoaștere gen:", "după forme și caracteristici literare"));
    questions.push(createTyping(topic, subtopic, "Importanța genurilor:", "ajută la înțelegerea și clasificarea literaturii"));

    return shuffle(questions, rng);
  },

  // TEXT & LECTURĂ — MODURI DE EXPUNERE
  text_lectura_moduri: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "text_lectura_c6";
    const subtopic = "moduri_expunere_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30) — cyclic iteration to avoid duplicates
    for (let i = 0; i < 30; i++) {
      const item = TEXT_LECTURA_MODURI[i % TEXT_LECTURA_MODURI.length];
      const q = createMCQ(
        topic,
        subtopic,
        `Modul de expunere "${item.mod}" se caracterizează prin:`,
        item.descriere,
        ["o serie de instrucțiuni", "versuri și rime", "caractere imaginare"].filter(x => x !== item.descriere),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce sunt modurile de expunere?", "metode de prezentare a ideilor și informațiilor"));
    questions.push(createTyping(topic, subtopic, "Moduri de expunere principale:", "narațiune, descriere, dialog, monolog"));
    questions.push(createTyping(topic, subtopic, "Narațiune ca mod:", "prezentarea unei serii de întâmplări într-o ordine"));
    questions.push(createTyping(topic, subtopic, "Descriere ca mod:", "prezentarea caracteristicilor unui obiect, loc, persoană"));
    questions.push(createTyping(topic, subtopic, "Dialog ca mod:", "o conversație între doi sau mai mulți indivizi"));
    questions.push(createTyping(topic, subtopic, "Monolog ca mod:", "vorbirea unei singure persoane, de obicei în prezența altora"));
    questions.push(createTyping(topic, subtopic, "Ordinea în narațiune:", "poate fi cronologică sau neliniar"));
    questions.push(createTyping(topic, subtopic, "Perspective în narațiune:", "prima, a doua, a treia persoană"));
    questions.push(createTyping(topic, subtopic, "Descriere obiectivă:", "faptele sunt prezentate imparțial"));
    questions.push(createTyping(topic, subtopic, "Descriere subiectivă:", "incluie impresia și emoția descriitorului"));
    questions.push(createTyping(topic, subtopic, "Dialog in dramă:", "este principalul mod de expunere"));
    questions.push(createTyping(topic, subtopic, "Amestecul modurilor:", "textele combină adesea mai multe moduri"));
    questions.push(createTyping(topic, subtopic, "Ritmul în moduri:", "narațiunea poate fi rapidă sau încetă"));
    questions.push(createTyping(topic, subtopic, "Intenția modului:", "variază cu scopul textului"));
    questions.push(createTyping(topic, subtopic, "Analiza modurilor:", "ajută la înțelegerea structurii textului"));

    return shuffle(questions, rng);
  },

  // TEXT & LECTURĂ — ANALIZĂ PERSONAJE
  text_lectura_personaje: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "text_lectura_c6";
    const subtopic = "personaje_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30) — cyclic iteration to avoid duplicates
    for (let i = 0; i < 30; i++) {
      const item = TEXT_LECTURA_PERSONAJE[i % TEXT_LECTURA_PERSONAJE.length];
      const q = createMCQ(
        topic,
        subtopic,
        `Din textul "${item.text}", putem deduce că aceasta este o descriere a unui:`,
        item.persoana,
        ["personaj secundar normal", "antagonist minor", "personaj plin de defecte"].filter(x => x !== item.persoana),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce este un personaj?", "ființă fictivă cu trăsături și acțiuni în text"));
    questions.push(createTyping(topic, subtopic, "Tipuri de personaje:", "protagonist, antagonist, secundar, terțiar"));
    questions.push(createTyping(topic, subtopic, "Protagonist:", "personajul principal care conduce acțiunea"));
    questions.push(createTyping(topic, subtopic, "Antagonist:", "opozant al protagonistului, crează conflict"));
    questions.push(createTyping(topic, subtopic, "Personaje secundare:", "susțin acțiunea principală"));
    questions.push(createTyping(topic, subtopic, "Personaje terțiare:", "apar rar și au rol minor"));
    questions.push(createTyping(topic, subtopic, "Complexitate personajului:", "personaje simple sau complexe"));
    questions.push(createTyping(topic, subtopic, "Trăsături fizice:", "descriere exterioară a personajului"));
    questions.push(createTyping(topic, subtopic, "Trăsături psihologice:", "caracter, comportament, motivații"));
    questions.push(createTyping(topic, subtopic, "Evoluție personaj:", "schimbă se poate de-a lungul narațiunii"));
    questions.push(createTyping(topic, subtopic, "Caracterizare directă:", "autorul spune explicit trăsăturile"));
    questions.push(createTyping(topic, subtopic, "Caracterizare indirectă:", "deducem din acțiuni și cuvinte"));
    questions.push(createTyping(topic, subtopic, "Credibilitate personaj:", "trebuie să fie verosimil și motivat"));
    questions.push(createTyping(topic, subtopic, "Relații între personaje:", "creează dinamica textului"));
    questions.push(createTyping(topic, subtopic, "Analiza personajelor:", "esențială pentru înțelegerea textului"));

    return shuffle(questions, rng);
  },

  // TEXT & LECTURĂ — TEXTE NONLITERARE
  text_lectura_nonliterare: (seed = 42): CurriculumQuestion[] => {
    const rng = mulberry32(seed);
    const topic = "text_lectura_c6";
    const subtopic = "texte_nonliterare_c6";
    const questions: CurriculumQuestion[] = [];

    // MCQ questions (30) — cyclic iteration to avoid duplicates
    for (let i = 0; i < 30; i++) {
      const item = TEXT_LECTURA_NONLITERARE[i % TEXT_LECTURA_NONLITERARE.length];
      const caracteristici = item.caracteristici.split(", ");
      const correct = caracteristici[Math.floor(rng() * caracteristici.length)];
      const q = createMCQ(
        topic,
        subtopic,
        `Un ${item.tip} se caracterizează prin:`,
        correct,
        ["personaje imaginare", "ritm și rimă", "o trama complexă"].filter(x => x !== correct),
        rng
      );
      questions.push(q);
    }

    // Typing questions (15)
    questions.push(createTyping(topic, subtopic, "Ce sunt texte nonliterare?", "texte care nu sunt ficțiune, cu scop practic"));
    questions.push(createTyping(topic, subtopic, "Tipuri texte nonliterare:", "articol, publicitate, instructaj, carte tehnică, reclamă"));
    questions.push(createTyping(topic, subtopic, "Articol de ziar:", "informație actuală, structurat cu titlu și subtitlu, neutru"));
    questions.push(createTyping(topic, subtopic, "Publicitate:", "obiectiv promova un produs, convingător, emoțional"));
    questions.push(createTyping(topic, subtopic, "Instructaj:", "o serie de pași pentru a realiza ceva, clar și precis"));
    questions.push(createTyping(topic, subtopic, "Carte tehnică:", "prezintă date, diagrame, termeni specifici, formal"));
    questions.push(createTyping(topic, subtopic, "Reclamă:", "cere atenție, oferă o soluție la o problemă, persuasivă"));
    questions.push(createTyping(topic, subtopic, "Stil texte nonliterare:", "formal, neutru, factual"));
    questions.push(createTyping(topic, subtopic, "Scop articol de ziar:", "informare"));
    questions.push(createTyping(topic, subtopic, "Scop publicitate:", "vânzare sau promovare"));
    questions.push(createTyping(topic, subtopic, "Scop instructaj:", "ghidare"));
    questions.push(createTyping(topic, subtopic, "Structură texte nonliterare:", "logică și organizată"));
    questions.push(createTyping(topic, subtopic, "Limbaj texte nonliterare:", "clar și ușor de înțeles"));
    questions.push(createTyping(topic, subtopic, "Diferență literatura nonliterara:", "literatura = fictiune; nonliterara = fapte"));
    questions.push(createTyping(topic, subtopic, "Analiză texte nonliterare:", "identifică tip, scop, stil, publicul țintă"));

    return shuffle(questions, rng);
  },
};
