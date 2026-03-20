// ─── ROMANIAN GENERATORS (CLASA a V-a) — VOCABULAR ───────────────────────────
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

// ─── 1. POLISEMIA ─────────────────────────────────────────────────────────────

function gen_polisemia_c5(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "vocabular_c5";
  const subtopic = "polisemia_c5";
  const questions: CurriculumMCQ[] = [];

  // Q1 — definiție polisemie
  questions.push(createMCQ(topic, subtopic,
    "Ce sunt cuvintele polisemantice?",
    "cuvinte cu mai multe sensuri, legate între ele",
    ["cuvinte care sună la fel dar au origini diferite", "cuvinte cu formă apropiată și sens diferit", "cuvinte folosite doar în poezie"],
    rng
  ));

  // Q2 — bancă (instituție)
  questions.push(createMCQ(topic, subtopic,
    "Cuvântul „bancă” din propoziția „Am depus bani la bancă.” are sensul:",
    "instituție financiară",
    ["mobilă pentru șezut", "școală", "loc de odihnă în parc"],
    rng
  ));

  // Q3 — bancă (mobilă)
  questions.push(createMCQ(topic, subtopic,
    "Cuvântul „bancă” din „Copiii stau pe bancă în clasă.” are sensul:",
    "mobilă pentru șezut",
    ["instituție financiară", "ghișeu", "depozit"],
    rng
  ));

  // Q4 — cap (parte a corpului vs. șef)
  questions.push(createMCQ(topic, subtopic,
    "În propoziția „El este capul familiei.”, cuvântul „cap” are sensul:",
    "conducător, șef",
    ["parte a corpului", "obiect rotund", "vârf de munte"],
    rng
  ));

  // Q5 — ochi (sens figurat)
  questions.push(createMCQ(topic, subtopic,
    "Care este sensul cuvântului „ochi” în expresia „ochii acului”?",
    "orificiul prin care trece ața",
    ["organ al văzului", "fereastră", "bob de rouă"],
    rng
  ));

  // Q6 — sens propriu de bază
  questions.push(createMCQ(topic, subtopic,
    "Care dintre următoarele reprezintă sensul propriu de bază al cuvântului „lumină”?",
    "energia radiantă care face lucrurile vizibile",
    ["persoană inteligentă", "speranță", "fericire"],
    rng
  ));

  // Q7 — identificare context polisemic
  questions.push(createMCQ(topic, subtopic,
    "În care dintre propoziții cuvântul „masă” are sensul de „cantitate mare”?",
    "O masă de nori acoperea cerul.",
    ["Masa este pusă pentru cină.", "Ne-am așezat la masă.", "Am cumpărat o masă nouă."],
    rng
  ));

  return shuffle(questions, rng);
}

// ─── 2. OMONIMIA ─────────────────────────────────────────────────────────────

function gen_omonimia_c5(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "vocabular_c5";
  const subtopic = "omonimia_c5";
  const questions: CurriculumMCQ[] = [];

  // Q1 — definiție omonime
  questions.push(createMCQ(topic, subtopic,
    "Omonimele sunt cuvinte care:",
    "au aceeași formă, dar sensuri și origini diferite",
    ["au sensuri asemănătoare și origine comună", "sună asemănător, dar se scriu diferit", "sunt derivate din același cuvânt de bază"],
    rng
  ));

  // Q2 — leu
  questions.push(createMCQ(topic, subtopic,
    "Care pereche reprezintă omonime ale cuvântului „leu”?",
    "animal sălbatic / monedă românească",
    ["animal sălbatic / animal mic", "monedă / metal prețios", "leu din Africa / leu din Asia"],
    rng
  ));

  // Q3 — lac
  questions.push(createMCQ(topic, subtopic,
    "Cuvântul „lac” are două sensuri omonime. Care sunt acestea?",
    "întindere de apă / substanță pentru suprafețe",
    ["baltă mică / baltă mare", "apă dulce / apă sărată", "râu lent / râu rapid"],
    rng
  ));

  // Q4 — corn
  questions.push(createMCQ(topic, subtopic,
    "Cuvântul „corn” din „Copilul mănâncă un corn.” se referă la:",
    "produs de panificație",
    ["instrument muzical", "parte a corpului unui animal", "vârf de munte"],
    rng
  ));

  // Q5 — diferența față de polisemie
  questions.push(createMCQ(topic, subtopic,
    "Care este principala diferență între omonime și cuvintele polisemantice?",
    "Omonimele au origini diferite, polisemele au origine comună",
    ["Omonimele au același sens, polisemele au sensuri diferite", "Omonimele se scriu diferit, polisemele la fel", "Nu există nicio diferență între ele"],
    rng
  ));

  // Q6 — identificare omonim în propoziție
  questions.push(createMCQ(topic, subtopic,
    "În care propoziție „broască” are sensul de „dispozitiv de închidere”?",
    "Cheia nu mai intră în broasca ușii.",
    ["Broasca sare din iarbă în apă.", "Am văzut o broască pe malul lacului.", "Broasca coaxă toată noaptea."],
    rng
  ));

  return shuffle(questions, rng);
}

// ─── 3. PARONIMIA ────────────────────────────────────────────────────────────

function gen_paronimia_c5(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "vocabular_c5";
  const subtopic = "paronimia_c5";
  const questions: CurriculumMCQ[] = [];

  // Q1 — definiție paronime
  questions.push(createMCQ(topic, subtopic,
    "Paronimele sunt cuvinte care:",
    "au formă apropiată, dar sens diferit",
    ["au aceeași formă și sens diferit", "au sens apropiat și formă diferită", "sunt sinonime perfecte"],
    rng
  ));

  // Q2 — original vs. originar
  questions.push(createMCQ(topic, subtopic,
    "Care este sensul corect al cuvântului „original” (nu „originar”)?",
    "nou, inedit, care se deosebește de altele",
    ["care provine dintr-un loc anume", "care este vechi și respectat", "care aparține unui grup etnic"],
    rng
  ));

  // Q3 — compliment vs. complement
  questions.push(createMCQ(topic, subtopic,
    "Care dintre propoziții folosește corect cuvântul „compliment”?",
    "I-a făcut un compliment pentru rochia frumoasă.",
    ["Complementul direct răspunde la întrebarea „pe cine?”.", "Complementul este o parte de propoziție.", "Complimentul verbului este obligatoriu."],
    rng
  ));

  // Q4 — oral vs. orar
  questions.push(createMCQ(topic, subtopic,
    "Ce înseamnă cuvântul „oral”?",
    "exprimat prin vorbire, cu gura",
    ["legat de ore și program", "legat de aur", "legat de ureche"],
    rng
  ));

  // Q5 — a ști vs. a sta
  questions.push(createMCQ(topic, subtopic,
    "Care propoziție conține un paronim folosit greșit?",
    "„Stiu că mâine este vacanță.” (corect: știu)",
    ["Știu că mâine este vacanță.", "Stau pe scaun.", "Știu să citesc bine."],
    rng
  ));

  // Q6 — identificare paronime
  questions.push(createMCQ(topic, subtopic,
    "Care dintre următoarele perechi reprezintă paronime?",
    "atlas – atac",
    ["frumos – urât", "rapid – iute", "casă – căsuță"],
    rng
  ));

  return shuffle(questions, rng);
}

// ─── 4. LOCUȚIUNI ────────────────────────────────────────────────────────────

function gen_locutiuni_c5(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "vocabular_c5";
  const subtopic = "locutiuni_c5";
  const questions: CurriculumMCQ[] = [];

  // Q1 — definiție locuțiune
  questions.push(createMCQ(topic, subtopic,
    "Ce este o locuțiune?",
    "un grup stabil de cuvinte cu sens unitar, care funcționează ca o singură parte de vorbire",
    ["un cuvânt cu mai multe sensuri", "o propoziție scurtă și memorabilă", "un cuvânt inventat de scriitori"],
    rng
  ));

  // Q2 — a-și da seama (locuțiune verbală)
  questions.push(createMCQ(topic, subtopic,
    "Ce înseamnă locuțiunea verbală „a-și da seama”?",
    "a înțelege, a conștientiza",
    ["a număra ceva", "a da ceva cuiva", "a se odihni"],
    rng
  ));

  // Q3 — a lua în seamă
  questions.push(createMCQ(topic, subtopic,
    "Ce înseamnă locuțiunea verbală „a lua în seamă”?",
    "a considera important, a ține cont de ceva",
    ["a ridica un obiect", "a citi cu atenție", "a număra lucruri"],
    rng
  ));

  // Q4 — bun simț (locuțiune substantivală)
  questions.push(createMCQ(topic, subtopic,
    "„Bun simț” este o locuțiune de tip:",
    "substantivală (funcționează ca un substantiv)",
    ["verbală", "adjectivală", "adverbială"],
    rng
  ));

  // Q5 — de îndată (locuțiune adverbială)
  questions.push(createMCQ(topic, subtopic,
    "Ce înseamnă locuțiunea adverbială „de îndată”?",
    "imediat, fără întârziere",
    ["după mult timp", "uneori, din când în când", "cu grijă, cu atenție"],
    rng
  ));

  // Q6 — în toată firea (locuțiune adjectivală)
  questions.push(createMCQ(topic, subtopic,
    "Locuțiunea „în toată firea” descrie o persoană:",
    "matură, echilibrată, serioasă",
    ["înaltă și puternică", "veselă și jucăușă", "supărată și tristă"],
    rng
  ));

  // Q7 — identificare locuțiune în propoziție
  questions.push(createMCQ(topic, subtopic,
    "În propoziția „A luat-o razna după accident.”, „a luat-o razna” este:",
    "locuțiune verbală cu sensul de „a înnebuni, a-și pierde mințile”",
    ["verb la trecut compus", "expresie poetică fără sens precis", "locuțiune adverbială"],
    rng
  ));

  return shuffle(questions, rng);
}

// ─── 5. ARGOU, REGIONALISME, NEOLOGISME ──────────────────────────────────────

function gen_argou_regional_c5(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const topic = "vocabular_c5";
  const subtopic = "argou_regional_c5";
  const questions: CurriculumMCQ[] = [];

  // Q1 — argou definiție
  questions.push(createMCQ(topic, subtopic,
    "Cuvântul „mișto” este un exemplu de:",
    "cuvânt argotic (din argou)",
    ["neologism", "arhaism", "regionalism"],
    rng
  ));

  // Q2 — regionalism definiție
  questions.push(createMCQ(topic, subtopic,
    "Regionalismele sunt cuvinte:",
    "folosite doar în anumite zone geografice ale țării",
    ["împrumutate recent din alte limbi", "ieșite din uz, care nu mai sunt folosite", "inventate de scriitori pentru efecte stilistice"],
    rng
  ));

  // Q3 — neologism
  questions.push(createMCQ(topic, subtopic,
    "Care dintre următoarele cuvinte este un neologism (împrumutat recent)?",
    "selfie",
    ["plug", "vatră", "codru"],
    rng
  ));

  // Q4 — arhaism definiție
  questions.push(createMCQ(topic, subtopic,
    "Arhaismele sunt cuvinte care:",
    "au ieșit din uz, nu mai sunt folosite în limba actuală",
    ["sunt folosite doar de tineri", "au fost împrumutate din engleză", "sunt specifice unui dialect regional"],
    rng
  ));

  // Q5 — registru formal vs. informal
  questions.push(createMCQ(topic, subtopic,
    "Care propoziție folosește un registru formal, potrivit pentru o scrisoare oficială?",
    "„Vă rog să binevoiți a-mi aproba cererea.”",
    ["„Bă, ajutor-mă și pe mine!”", "„Ok, merge și-așa.”", "„Super, mulțumesc fain!”"],
    rng
  ));

  // Q6 — identificare tip de cuvânt
  questions.push(createMCQ(topic, subtopic,
    "Cuvântul „păpușoi” (folosit în Moldova pentru „porumb”) este:",
    "regionalism",
    ["arhaism", "neologism", "cuvânt argotic"],
    rng
  ));

  return shuffle(questions, rng);
}

// ─── EXPORT ──────────────────────────────────────────────────────────────────

export const C5_Voc_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
  vocabular_c5: {
    polisemia_c5: (seed = 42) => gen_polisemia_c5(seed),
    omonimia_c5: (seed = 42) => gen_omonimia_c5(seed),
    paronimia_c5: (seed = 42) => gen_paronimia_c5(seed),
    locutiuni_c5: (seed = 42) => gen_locutiuni_c5(seed),
    argou_regional_c5: (seed = 42) => gen_argou_regional_c5(seed),
  }
};
