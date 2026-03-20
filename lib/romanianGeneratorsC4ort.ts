// ─── ROMANIAN GENERATORS (CLASA a IV-a) — ORTOGRAFIE ─────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a IV-a (4th grade) – ortografie theme only (5 subtopics)

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

// ─── 1. MAJUSCULE (uppercase letters) ─────────────────────────────────────────

function gen_majuscule_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "ortografie_c4";
  const S = "majuscule_c4";
  const qs: CurriculumMCQ[] = [];

  // Q1
  qs.push(createMCQ(T, S,
    "Care dintre următoarele cuvinte se scrie cu literă mare?",
    "București",
    ["buzunar", "băiat", "carte"],
    rng
  ));

  // Q2
  qs.push(createMCQ(T, S,
    "Ce tip de substantiv se scrie întotdeauna cu literă mare?",
    "substantivul propriu",
    ["substantivul comun", "substantivul în plural", "substantivul la feminin"],
    rng
  ));

  // Q3
  qs.push(createMCQ(T, S,
    "Care propoziție este scrisă corect?",
    "Ion merge la școală.",
    ["ion merge la școală.", "Ion Merge la Școală.", "ion Merge la Școală."],
    rng
  ));

  // Q4
  qs.push(createMCQ(T, S,
    "Cum se scrie corect numele fluviului?",
    "Dunărea",
    ["dunărea", "Dunarea", "dunarea"],
    rng
  ));

  // Q5
  qs.push(createMCQ(T, S,
    "Care dintre cuvinte este un substantiv propriu?",
    "România",
    ["țară", "munte", "oraș"],
    rng
  ));

  // Q6
  qs.push(createMCQ(T, S,
    "Titlul operei literare se scrie:",
    "cu ghilimele și literă mare la primul cuvânt",
    ["cu literă mică", "fără ghilimele, cu majuscule la toate cuvintele", "numai cu literă mică"],
    rng
  ));

  // Q7
  qs.push(createMCQ(T, S,
    "Cum se scrie corect titlul operei lui Eminescu?",
    "„Luceafărul"",
    ["„luceafărul"", "Luceafarul", "luceafărul"],
    rng
  ));

  // Q8
  qs.push(createMCQ(T, S,
    "Care cuvânt se scrie cu literă mare?",
    "Carpați",
    ["câmpie", "deal", "pădure"],
    rng
  ));

  // Q9
  qs.push(createMCQ(T, S,
    "Numele scriitorului Creangă este:",
    "substantiv propriu",
    ["substantiv comun", "adjectiv", "verb"],
    rng
  ));

  // Q10
  qs.push(createMCQ(T, S,
    "Cum se scrie corect numele mării?",
    "Marea Neagră",
    ["marea neagră", "Marea neagra", "marea Neagră"],
    rng
  ));

  // Q11
  qs.push(createMCQ(T, S,
    "Care dintre propoziții începe corect?",
    "Maria a plecat la piață.",
    ["maria a plecat la piață.", "Maria a plecat La piață.", "MARIA a plecat la piață."],
    rng
  ));

  // Q12
  qs.push(createMCQ(T, S,
    "Continentul Europa se scrie:",
    "cu E majusculă",
    ["cu e minusculă", "cu toate literele mari", "cu e minusculă dacă nu e la început de propoziție"],
    rng
  ));

  // Q13
  qs.push(createMCQ(T, S,
    "Care este regula pentru substantivele proprii?",
    "Se scriu întotdeauna cu literă mare",
    ["Se scriu cu literă mare doar la început de propoziție", "Se scriu cu literă mică", "Se scriu cu literă mare doar dacă sunt nume de țări"],
    rng
  ));

  // Q14
  qs.push(createMCQ(T, S,
    "Cum se scrie corect titlul operei lui Creangă?",
    "„Amintiri din copilărie"",
    ["Amintiri Din Copilărie", "„amintiri din copilărie"", "Amintiri din copilărie"],
    rng
  ));

  // Q15
  qs.push(createMCQ(T, S,
    "Care variantă este corect scrisă?",
    "Eminescu a scris „Luceafărul".",
    ["eminescu a scris luceafărul.", "Eminescu a scris Luceafărul.", "eminescu a scris „Luceafărul"."],
    rng
  ));

  return qs;
}

// ─── 2. CRATIMĂ AVANSATĂ (hyphen usage) ───────────────────────────────────────

function gen_cratima_avansata_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "ortografie_c4";
  const S = "cratima_avansata_c4";
  const qs: CurriculumMCQ[] = [];

  // Q1
  qs.push(createMCQ(T, S,
    "Cum se scrie corect: 's-a dus' sau 'sa dus'?",
    "s-a dus",
    ["sa dus", "s a dus", "s.a. dus"],
    rng
  ));

  // Q2
  qs.push(createMCQ(T, S,
    "Care variantă este corectă?",
    "l-am văzut",
    ["lam văzut", "l am văzut", "l.am văzut"],
    rng
  ));

  // Q3
  qs.push(createMCQ(T, S,
    "Cuvântul compus 'floarea soarelui' se scrie:",
    "floarea-soarelui",
    ["floarea soarelui", "floareasoarelui", "Floarea-Soarelui"],
    rng
  ));

  // Q4
  qs.push(createMCQ(T, S,
    "Cum se scrie corect forma verbală cu pronume?",
    "i-am spus",
    ["iam spus", "i am spus", "iam-spus"],
    rng
  ));

  // Q5
  qs.push(createMCQ(T, S,
    "Care este scrierea corectă?",
    "m-a chemat",
    ["ma chemat", "m a chemat", "m.a chemat"],
    rng
  ));

  // Q6
  qs.push(createMCQ(T, S,
    "Cum se scrie corect?",
    "te-a văzut",
    ["tea văzut", "te a văzut", "te-a-văzut"],
    rng
  ));

  // Q7
  qs.push(createMCQ(T, S,
    "Care variantă este corectă?",
    "nu-l văd",
    ["nul văd", "nu l văd", "nu-l-văd"],
    rng
  ));

  // Q8
  qs.push(createMCQ(T, S,
    "Imperativul 'du-te' se scrie:",
    "cu cratimă între verb și pronume",
    ["fără cratimă", "cu spațiu între verb și pronume", "cu punct între verb și pronume"],
    rng
  ));

  // Q9
  qs.push(createMCQ(T, S,
    "Cum se scrie corect cuvântul compus pentru direcție?",
    "nord-est",
    ["nordest", "nord est", "Nord-Est"],
    rng
  ));

  // Q10
  qs.push(createMCQ(T, S,
    "Care variantă este corectă?",
    "prim-ministru",
    ["primministru", "prim ministru", "Prim-Ministru"],
    rng
  ));

  // Q11
  qs.push(createMCQ(T, S,
    "Cum se scrie corect?",
    "ia-o",
    ["iao", "ia o", "ia.o"],
    rng
  ));

  // Q12
  qs.push(createMCQ(T, S,
    "Care este scrierea corectă?",
    "dă-i",
    ["dăi", "dă i", "da-i"],
    rng
  ));

  // Q13
  qs.push(createMCQ(T, S,
    "Cratima se folosește în cuvântul compus:",
    "câine-lup",
    ["câinelup", "câine lup", "Câine-Lup"],
    rng
  ));

  // Q14
  qs.push(createMCQ(T, S,
    "Cum se scrie corect?",
    "bun-simț",
    ["bunsimț", "bun simț", "Bun-Simț"],
    rng
  ));

  // Q15
  qs.push(createMCQ(T, S,
    "Care variantă cu pronume reflexiv este corectă?",
    "s-a întors",
    ["sa întors", "s a întors", "s-a-întors"],
    rng
  ));

  return qs;
}

// ─── 3. PUNCTUAȚIE (punctuation marks) ────────────────────────────────────────

function gen_punctuatie_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "ortografie_c4";
  const S = "punctuatie_c4";
  const qs: CurriculumMCQ[] = [];

  // Q1
  qs.push(createMCQ(T, S,
    "Ce semn de punctuație se pune la finalul unei propoziții interogative?",
    "?",
    [".", "!", ","],
    rng
  ));

  // Q2
  qs.push(createMCQ(T, S,
    "Linia de dialog (—) se folosește în:",
    "dialog/vorbire directă",
    ["enumerare", "la finalul propoziției", "înaintea unui titlu"],
    rng
  ));

  // Q3
  qs.push(createMCQ(T, S,
    "Ghilimelele se pun în jurul:",
    "vorbirii directe și citatelor",
    ["substantivelor proprii", "verbelor la imperativ", "propozițiilor interogative"],
    rng
  ));

  // Q4
  qs.push(createMCQ(T, S,
    "Virgula se folosește în:",
    "enumerare",
    ["la finalul propoziției declarative", "înaintea vorbirii directe", "după semnul exclamării"],
    rng
  ));

  // Q5
  qs.push(createMCQ(T, S,
    "Două puncte (:) se pun:",
    "înaintea unei enumerări sau a vorbirii directe",
    ["la finalul propoziției", "după vocativ", "înaintea conjuncțiilor"],
    rng
  ));

  // Q6
  qs.push(createMCQ(T, S,
    "Ce semn de punctuație se pune la finalul unei propoziții exclamative?",
    "!",
    [".", "?", ","],
    rng
  ));

  // Q7
  qs.push(createMCQ(T, S,
    "Virgula se pune după vocativ (când adresăm cuiva ceva). Care propoziție este corectă?",
    "Maria, vino aici!",
    ["Maria vino, aici!", "Maria vino aici!", "Maria vino aici,"],
    rng
  ));

  // Q8
  qs.push(createMCQ(T, S,
    "Ce semn de punctuație marchează sfârșitul unei propoziții enunțiative (declarative)?",
    ".",
    ["!", "?", ":"],
    rng
  ));

  // Q9
  qs.push(createMCQ(T, S,
    "Cum se marchează vorbirea directă în scris?",
    "Cu ghilimele „..."",
    ["Cu paranteză ()", "Cu cratimă -", "Cu punct și virgulă ;"],
    rng
  ));

  // Q10
  qs.push(createMCQ(T, S,
    "Care propoziție are punctuația corectă pentru dialog?",
    "— Bună ziua! spuse Ion.",
    ["Bună ziua! spuse Ion.", "„Bună ziua!" spuse Ion.", "- Bună ziua! spuse Ion."],
    rng
  ));

  // Q11
  qs.push(createMCQ(T, S,
    "Virgula se pune între propozițiile coordonate fără conjuncție. Care variantă este corectă?",
    "A venit acasă, a mâncat, s-a culcat.",
    ["A venit acasă a mâncat s-a culcat.", "A venit acasă; a mâncat; s-a culcat.", "A venit acasă: a mâncat: s-a culcat."],
    rng
  ));

  // Q12
  qs.push(createMCQ(T, S,
    "Semnul exclamării se folosește după:",
    "propoziții exclamative și imperativ",
    ["propoziții declarative", "propoziții interogative", "enumerări"],
    rng
  ));

  // Q13
  qs.push(createMCQ(T, S,
    "Două puncte se pun înaintea unei liste. Care variantă este corectă?",
    "Am cumpărat: mere, pere și prune.",
    ["Am cumpărat, mere, pere și prune.", "Am cumpărat. mere, pere și prune.", "Am cumpărat; mere, pere și prune."],
    rng
  ));

  // Q14
  qs.push(createMCQ(T, S,
    "Care semn de punctuație însoțește apoziția?",
    "virgula",
    ["punctul", "semnul exclamării", "ghilimelele"],
    rng
  ));

  // Q15
  qs.push(createMCQ(T, S,
    "Care variantă folosește corect linia de dialog?",
    "— Unde mergi? întrebă mama.",
    ["„Unde mergi?" întrebă mama.", "Unde mergi? întrebă mama.", "- Unde mergi? întrebă mama."],
    rng
  ));

  return qs;
}

// ─── 4. DESPĂRȚIRE AVANSATĂ (word division at line end) ───────────────────────

function gen_despartire_avansata_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "ortografie_c4";
  const S = "despartire_avansata_c4";
  const qs: CurriculumMCQ[] = [];

  // Q1
  qs.push(createMCQ(T, S,
    "Cum se desparte corect la capăt de rând cuvântul 'nedrept'?",
    "ne-drept",
    ["ned-rept", "n-edrept", "nedr-ept"],
    rng
  ));

  // Q2
  qs.push(createMCQ(T, S,
    "Diftongii (ea, ie, oa) la despărțire:",
    "nu se despart, rămân în aceeași silabă",
    ["se despart întotdeauna", "se despart numai la final de cuvânt", "se despart dacă urmează consoană"],
    rng
  ));

  // Q3
  qs.push(createMCQ(T, S,
    "Cum se desparte corect cuvântul 'abstract'?",
    "ab-stract",
    ["abs-tract", "abst-ract", "a-bstract"],
    rng
  ));

  // Q4
  qs.push(createMCQ(T, S,
    "Cum se desparte corect cuvântul 'descrie'?",
    "des-crie",
    ["desc-rie", "de-scrie", "descr-ie"],
    rng
  ));

  // Q5
  qs.push(createMCQ(T, S,
    "Cum se desparte corect cuvântul 'seară'?",
    "sea-ră",
    ["se-a-ră", "s-ea-ră", "se-ară"],
    rng
  ));

  // Q6
  qs.push(createMCQ(T, S,
    "Prefixele (des-, ne-, re-, în-) la despărțire:",
    "se separă de restul cuvântului",
    ["nu se separă niciodată", "se separă numai dacă sunt urmate de vocală", "se separă numai în cuvinte de origine latină"],
    rng
  ));

  // Q7
  qs.push(createMCQ(T, S,
    "Cum se desparte corect cuvântul 'reface'?",
    "re-face",
    ["ref-ace", "r-eface", "refa-ce"],
    rng
  ));

  // Q8
  qs.push(createMCQ(T, S,
    "Cum se desparte corect cuvântul 'învinge'?",
    "în-vinge",
    ["înv-inge", "î-nvinge", "învi-nge"],
    rng
  ));

  // Q9
  qs.push(createMCQ(T, S,
    "Care este regula pentru grupul de consoane la despărțire?",
    "Prima consoană rămâne cu silaba anterioară, a doua trece la silaba următoare",
    ["Toate consoanele trec la silaba următoare", "Toate consoanele rămân cu silaba anterioară", "Consoanele nu se despart niciodată"],
    rng
  ));

  // Q10
  qs.push(createMCQ(T, S,
    "Cum se desparte corect cuvântul 'marcă'?",
    "mar-că",
    ["ma-rcă", "marc-ă", "m-arcă"],
    rng
  ));

  // Q11
  qs.push(createMCQ(T, S,
    "Cum se desparte corect cuvântul 'desface'?",
    "des-face",
    ["desf-ace", "de-sface", "desfa-ce"],
    rng
  ));

  // Q12
  qs.push(createMCQ(T, S,
    "Triftongii (eau, iau, oai) la despărțire:",
    "nu se despart, rămân împreună",
    ["se despart întotdeauna în două", "prima literă se separă", "ultima literă se separă"],
    rng
  ));

  // Q13
  qs.push(createMCQ(T, S,
    "Cum se desparte corect cuvântul 'floare'?",
    "floa-re",
    ["flo-a-re", "fl-oare", "flo-are"],
    rng
  ));

  // Q14
  qs.push(createMCQ(T, S,
    "La despărțire, o consoană între două vocale:",
    "trece la silaba următoare",
    ["rămâne cu silaba anterioară", "se poate pune oriunde", "nu se poate despărți"],
    rng
  ));

  // Q15
  qs.push(createMCQ(T, S,
    "Cum se desparte corect cuvântul 'obiect'?",
    "o-biect",
    ["ob-iect", "obi-ect", "obie-ct"],
    rng
  ));

  return qs;
}

// ─── 5. SCRIEREA CORECTĂ (frequently misspelled words) ────────────────────────

function gen_scrierea_corecta_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "ortografie_c4";
  const S = "scrierea_corecta_c4";
  const qs: CurriculumMCQ[] = [];

  // Q1
  qs.push(createMCQ(T, S,
    "Cum se scrie corect?",
    "niciodată",
    ["nici odată", "niciodata", "nici-odată"],
    rng
  ));

  // Q2
  qs.push(createMCQ(T, S,
    "Care variantă este corectă?",
    "totuși",
    ["totusi", "tot-uși", "tot uși"],
    rng
  ));

  // Q3
  qs.push(createMCQ(T, S,
    "Când se scrie 'o dată' (două cuvinte)?",
    "când înseamnă o singură dată sau o întâmplare",
    ["când înseamnă cândva", "întotdeauna", "niciodată"],
    rng
  ));

  // Q4
  qs.push(createMCQ(T, S,
    "Cum se scrie corect adverbul care înseamnă 'cândva'?",
    "odată",
    ["o dată", "o-dată", "odatta"],
    rng
  ));

  // Q5
  qs.push(createMCQ(T, S,
    "Care variantă este corectă?",
    "întrucât",
    ["întru cât", "întru-cât", "intrucât"],
    rng
  ));

  // Q6
  qs.push(createMCQ(T, S,
    "Cum se scrie corect?",
    "deoarece",
    ["de oarece", "de-oarece", "deoarecce"],
    rng
  ));

  // Q7
  qs.push(createMCQ(T, S,
    "Care variantă este corectă?",
    "altfel",
    ["alt fel", "alt-fel", "altfell"],
    rng
  ));

  // Q8
  qs.push(createMCQ(T, S,
    "Cum se scrie corect?",
    "desigur",
    ["de sigur", "de-sigur", "dessigur"],
    rng
  ));

  // Q9
  qs.push(createMCQ(T, S,
    "Care variantă este corectă?",
    "bineînțeles",
    ["bine înțeles", "bine-înțeles", "bineinteles"],
    rng
  ));

  // Q10
  qs.push(createMCQ(T, S,
    "Cum se scrie corect?",
    "câteodată",
    ["câte odată", "câte-odată", "câteodatta"],
    rng
  ));

  // Q11
  qs.push(createMCQ(T, S,
    "Care variantă este corectă?",
    "totdeauna",
    ["tot deauna", "tot-deauna", "totdauna"],
    rng
  ));

  // Q12
  qs.push(createMCQ(T, S,
    "Cum se scrie corect?",
    "nu știu",
    ["nu stiu", "nu-știu", "nustiu"],
    rng
  ));

  // Q13
  qs.push(createMCQ(T, S,
    "Care variantă cu 'știință' este corectă?",
    "știință",
    ["stiinta", "știinta", "stiință"],
    rng
  ));

  // Q14
  qs.push(createMCQ(T, S,
    "Cum se scrie corect?",
    "conștiință",
    ["constiinta", "conștiinta", "constiință"],
    rng
  ));

  // Q15
  qs.push(createMCQ(T, S,
    "Care propoziție este scrisă corect?",
    "El nu știe lecția.",
    ["El nu stie lecția.", "El nu-știe lecția.", "El nu știe lectia."],
    rng
  ));

  return qs;
}

// ─── EXPORT ───────────────────────────────────────────────────────────────────

export const C4_Ort_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {
  ortografie_c4: {
    majuscule_c4: (seed = Date.now()) => gen_majuscule_c4(seed),
    cratima_avansata_c4: (seed = Date.now()) => gen_cratima_avansata_c4(seed),
    punctuatie_c4: (seed = Date.now()) => gen_punctuatie_c4(seed),
    despartire_avansata_c4: (seed = Date.now()) => gen_despartire_avansata_c4(seed),
    scrierea_corecta_c4: (seed = Date.now()) => gen_scrierea_corecta_c4(seed),
  },
};
