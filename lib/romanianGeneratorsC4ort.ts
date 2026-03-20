// ─── ROMANIAN GENERATORS (CLASA a IV-a) — ORTOGRAFIE ─────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a IV-a (4th grade) – ortografie theme only (5 subtopics)

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

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

  const questionPool = [
    { q: "Care dintre următoarele cuvinte se scrie cu literă mare?", c: "București", w: ["buzunar", "băiat", "carte"] },
    { q: "Ce tip de substantiv se scrie întotdeauna cu literă mare?", c: "substantivul propriu", w: ["substantivul comun", "substantivul în plural", "substantivul la feminin"] },
    { q: "Care propoziție este scrisă corect?", c: "Ion merge la școală.", w: ["ion merge la școală.", "Ion Merge la Școală.", "ion Merge la Școală."] },
    { q: "Cum se scrie corect numele fluviului?", c: "Dunărea", w: ["dunărea", "Dunarea", "dunarea"] },
    { q: "Care dintre cuvinte este un substantiv propriu?", c: "România", w: ["țară", "munte", "oraș"] },
    { q: "Titlul operei literare se scrie:", c: "cu ghilimele și literă mare la primul cuvânt", w: ["cu literă mică", "fără ghilimele, cu majuscule la toate cuvintele", "numai cu literă mică"] },
    { q: "Cum se scrie corect titlul operei lui Eminescu?", c: "\"Luceafărul\"", w: ["\"luceafărul\"", "Luceafarul", "luceafărul"] },
    { q: "Care cuvânt se scrie cu literă mare?", c: "Carpați", w: ["câmpie", "deal", "pădure"] },
    { q: "Numele scriitorului Creangă este:", c: "substantiv propriu", w: ["substantiv comun", "adjectiv", "verb"] },
    { q: "Cum se scrie corect numele mării?", c: "Marea Neagră", w: ["marea neagră", "Marea neagra", "marea Neagră"] },
    { q: "Care dintre propoziții începe corect?", c: "Maria a plecat la piață.", w: ["maria a plecat la piață.", "Maria a plecat La piață.", "MARIA a plecat la piață."] },
    { q: "Continentul Europa se scrie:", c: "cu E majusculă", w: ["cu e minusculă", "cu toate literele mari", "cu e minusculă dacă nu e la început de propoziție"] },
    { q: "Care este regula pentru substantivele proprii?", c: "Se scriu întotdeauna cu literă mare", w: ["Se scriu cu literă mare doar la început de propoziție", "Se scriu cu literă mică", "Se scriu cu literă mare doar dacă sunt nume de țări"] },
    { q: "Cum se scrie corect titlul operei lui Creangă?", c: "\"Amintiri din copilărie\"", w: ["Amintiri Din Copilărie", "\"amintiri din copilărie\"", "Amintiri din copilărie"] },
    { q: "Care variantă este corect scrisă?", c: "Eminescu a scris \"Luceafărul\".", w: ["eminescu a scris luceafărul.", "Eminescu a scris Luceafărul.", "eminescu a scris \"Luceafărul\"."] },
    { q: "Cum se scrie corect provincia Dobrogea?", c: "Dobrogea", w: ["dobrogea", "Dobrogea", "dobrogea"] },
    { q: "Care este substantivul propriu din propoziție: 'Merg pe strada Moldovei'?", c: "strada Moldovei", w: ["merg", "pe", "strada"] },
    { q: "Ioana este:", c: "substantiv propriu", w: ["substantiv comun", "pronume", "verb"] },
    { q: "Cum se scrie corect titlul cărții?", c: "\"Ziua cărților\"", w: ["ziua cărților", "\"Ziua cărților\"", "\"Ziua Cărților\""] },
    { q: "Lacul Balton se scrie:", c: "cu majuscule la ambele cuvinte", w: ["cu minuscule", "lacul Balton", "Lacul balton"] },
    { q: "Care variantă respects regula majusculelor?", c: "Doamna Popescu", w: ["doamna Popescu", "Doamna popescu", "doamna popescu"] },
    { q: "Ziua de naștere a unui copil:", c: "Ion s-a născut pe 15 martie.", w: ["ion s-a născut pe 15 martie.", "Ion s-a născut pe 15 Martie.", "ion s-a născut pe 15 martie."] },
    { q: "Cum se scrie corect ziua săptămânii?", c: "luni", w: ["Luni", "LUNI", "Luni"] },
    { q: "Care cuvinte sunt substantive proprii?", c: "Constanța și Mangalia sunt orașe", w: ["constanța și mangalia sunt orașe", "Constanța și Mangalia sunt Orașe", "constanța și mangalia sunt orașe"] },
    { q: "Titlul 'Mândria și Prejudecată' se scrie:", c: "\"Mândria și Prejudecată\"", w: ["\"mândria și prejudecată\"", "Mândria și prejudecată", "\"mândria și Prejudecată\""] },
  ];

  const qs: CurriculumMCQ[] = [];
  const combined = shuffle(questionPool, rng).slice(0, 15);
  for (const item of combined) {
    qs.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }
  return shuffle(qs, rng);
}

// ─── 2. CRATIMĂ AVANSATĂ (hyphen usage) ───────────────────────────────────────

function gen_cratima_avansata_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "ortografie_c4";
  const S = "cratima_avansata_c4";

  const questionPool = [
    { q: "Cum se scrie corect: 's-a dus' sau 'sa dus'?", c: "s-a dus", w: ["sa dus", "s a dus", "s.a. dus"] },
    { q: "Care variantă este corectă?", c: "l-am văzut", w: ["lam văzut", "l am văzut", "l.am văzut"] },
    { q: "Cuvântul compus 'floarea soarelui' se scrie:", c: "floarea-soarelui", w: ["floarea soarelui", "floareasoarelui", "Floarea-Soarelui"] },
    { q: "Cum se scrie corect forma verbală cu pronume?", c: "i-am spus", w: ["iam spus", "i am spus", "iam-spus"] },
    { q: "Care este scrierea corectă?", c: "m-a chemat", w: ["ma chemat", "m a chemat", "m.a chemat"] },
    { q: "Cum se scrie corect?", c: "te-a văzut", w: ["tea văzut", "te a văzut", "te-a-văzut"] },
    { q: "Care variantă este corectă?", c: "nu-l văd", w: ["nul văd", "nu l văd", "nu-l-văd"] },
    { q: "Imperativul 'du-te' se scrie:", c: "cu cratimă între verb și pronume", w: ["fără cratimă", "cu spațiu între verb și pronume", "cu punct între verb și pronume"] },
    { q: "Cum se scrie corect cuvântul compus pentru direcție?", c: "nord-est", w: ["nordest", "nord est", "Nord-Est"] },
    { q: "Care variantă este corectă?", c: "prim-ministru", w: ["primministru", "prim ministru", "Prim-Ministru"] },
    { q: "Cum se scrie corect?", c: "ia-o", w: ["iao", "ia o", "ia.o"] },
    { q: "Care este scrierea corectă?", c: "dă-i", w: ["dăi", "dă i", "da-i"] },
    { q: "Cratima se folosește în cuvântul compus:", c: "câine-lup", w: ["câinelup", "câine lup", "Câine-Lup"] },
    { q: "Cum se scrie corect?", c: "bun-simț", w: ["bunsimț", "bun simț", "Bun-Simț"] },
    { q: "Care variantă cu pronume reflexiv este corectă?", c: "s-a întors", w: ["sa întors", "s a întors", "s-a-întors"] },
    { q: "Cum se scrie forma: 'îi dau'?", c: "îi-dau", w: ["ii dau", "iidau", "îi dau"] },
    { q: "Care este corect pentru 'ne-a văzut'?", c: "ne-a văzut", w: ["nea văzut", "ne a văzut", "neavăzut"] },
    { q: "Cum se scrie 'sud-vest'?", c: "sud-vest", w: ["sudvest", "sud vest", "Sud-Vest"] },
    { q: "Cuvântul 'vice-rector' se scrie:", c: "cu cratimă", w: ["fără cratimă", "ca o singură cuvânt", "cu spațiu"] },
    { q: "Care variantă este corectă pentru 'o-l'?", c: "o-l", w: ["ol", "o l", "o-l-"] },
    { q: "Cum se scrie 'v-am fost'?", c: "v-am fost", w: ["vam fost", "v am fost", "vamfost"] },
    { q: "Imperativul 'spune-mi' se scrie:", c: "cu cratimă", w: ["spune mi", "spunemi", "spune-mi-"] },
    { q: "Cuvântul 'vest-nord-vest' se scrie:", c: "cu cratimă la fiecare component", w: ["vestnordvest", "vest nord vest", "Vest-Nord-Vest"] },
    { q: "Cum se scrie corect pronumele ataşat?", c: "ți-am dat", w: ["tiam dat", "ți am dat", "tiam-dat"] },
    { q: "Care variantă cu cratimă este corectă?", c: "și-au plecat", w: ["siauplecat", "și au plecat", "și-au-plecat"] },
  ];

  const qs: CurriculumMCQ[] = [];
  const combined = shuffle(questionPool, rng).slice(0, 15);
  for (const item of combined) {
    qs.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }
  return shuffle(qs, rng);
}

// ─── 3. PUNCTUAȚIE (punctuation marks) ────────────────────────────────────────

function gen_punctuatie_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "ortografie_c4";
  const S = "punctuatie_c4";

  const questionPool = [
    { q: "Ce semn de punctuație se pune la finalul unei propoziții interogative?", c: "?", w: [".", "!", ","] },
    { q: "Linia de dialog (—) se folosește în:", c: "dialog/vorbire directă", w: ["enumerare", "la finalul propoziției", "înaintea unui titlu"] },
    { q: "Ghilimelele se pun în jurul:", c: "vorbirii directe și citatelor", w: ["substantivelor proprii", "verbelor la imperativ", "propozițiilor interogative"] },
    { q: "Virgula se folosește în:", c: "enumerare", w: ["la finalul propoziției declarative", "înaintea vorbirii directe", "după semnul exclamării"] },
    { q: "Două puncte (:) se pun:", c: "înaintea unei enumerări sau a vorbirii directe", w: ["la finalul propoziției", "după vocativ", "înaintea conjuncțiilor"] },
    { q: "Ce semn de punctuație se pune la finalul unei propoziții exclamative?", c: "!", w: [".", "?", ","] },
    { q: "Virgula se pune după vocativ. Care propoziție este corectă?", c: "Maria, vino aici!", w: ["Maria vino, aici!", "Maria vino aici!", "Maria vino aici,"] },
    { q: "Ce semn de punctuație marchează sfârșitul unei propoziții enunțiative?", c: ".", w: ["!", "?", ":"] },
    { q: "Cum se marchează vorbirea directă în scris?", c: "Cu ghilimele \"...\"", w: ["Cu paranteză ()", "Cu cratimă -", "Cu punct și virgulă ;"] },
    { q: "Care propoziție are punctuația corectă pentru dialog?", c: "— Bună ziua! spuse Ion.", w: ["Bună ziua! spuse Ion.", "\"Bună ziua!\" spuse Ion.", "- Bună ziua! spuse Ion."] },
    { q: "Virgula între propozițiile coordonate. Care variantă este corectă?", c: "A venit acasă, a mâncat, s-a culcat.", w: ["A venit acasă a mâncat s-a culcat.", "A venit acasă; a mâncat; s-a culcat.", "A venit acasă: a mâncat: s-a culcat."] },
    { q: "Semnul exclamării se folosește după:", c: "propoziții exclamative și imperativ", w: ["propoziții declarative", "propoziții interogative", "enumerări"] },
    { q: "Două puncte înaintea unei liste. Care variantă este corectă?", c: "Am cumpărat: mere, pere și prune.", w: ["Am cumpărat, mere, pere și prune.", "Am cumpărat. mere, pere și prune.", "Am cumpărat; mere, pere și prune."] },
    { q: "Care semn de punctuație însoțește apoziția?", c: "virgula", w: ["punctul", "semnul exclamării", "ghilimelele"] },
    { q: "Care variantă folosește corect linia de dialog?", c: "— Unde mergi? întrebă mama.", w: ["\"Unde mergi?\" întrebă mama.", "Unde mergi? întrebă mama.", "- Unde mergi? întrebă mama."] },
    { q: "Punct și virgulă (;) se foloseşte:", c: "între propoziții semicoordonate", w: ["în enumerări simple", "după vocativ", "înaintea ghilimelelor"] },
    { q: "Parentezele () se pun în jurul:", c: "informațiilor secundare", w: ["titlurilor", "vorbirii directe", "enumerărilor"] },
    { q: "Liniuța de ntrerupere (-) se scrie:", c: "fără spații în jur", w: ["cu spații în jur", "cu cratimă", "cu liniuță lungă"] },
    { q: "Virgula după conjuncție coordonatoare:", c: "nu se pune decât în cazuri speciale", w: ["se pune întotdeauna", "niciodată", "doar la începutul frazei"] },
    { q: "Punctele de suspensie (...) indică:", c: "pauză, tăiere sau gând nefinalizat", w: ["finalul frazei", "enumerare completă", "dialog"] },
    { q: "Ghilimelele simple '' se folosesc pentru:", c: "încitări în interiorul unui citat", w: ["citate principale", "titluri", "dialogue"] },
    { q: "Care este punctuația corectă: 'Am spus: 'Nu mă duc.''?", c: "Da, ghilimele în interiorul ghilimelelor", w: ["Nu, nu e corect", "Se foloseşte (, not (", "Nu se pune punct și virgulă"] },
    { q: "Semnul exclamării în dialog cu verbul spunerii:", c: "— Ce minunat! exclamă Maria.", w: ["— Ce minunat exclamă Maria!", "— Ce minunat! exclamă maria.", "— Ce minunat?, exclamă Maria."] },
    { q: "Semnul întrebării în propoziție:", c: "Ce faci?", w: ["Ce faci.", "Ce faci!", "Ce faci,"] },
  ];

  const qs: CurriculumMCQ[] = [];
  const combined = shuffle(questionPool, rng).slice(0, 15);
  for (const item of combined) {
    qs.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }
  return shuffle(qs, rng);
}

// ─── 4. DESPĂRȚIRE AVANSATĂ (word division at line end) ───────────────────────

function gen_despartire_avansata_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "ortografie_c4";
  const S = "despartire_avansata_c4";

  const questionPool = [
    { q: "Cum se desparte corect la capăt de rând cuvântul 'nedrept'?", c: "ne-drept", w: ["ned-rept", "n-edrept", "nedr-ept"] },
    { q: "Diftongii (ea, ie, oa) la despărțire:", c: "nu se despart, rămân în aceeași silabă", w: ["se despart întotdeauna", "se despart numai la final de cuvânt", "se despart dacă urmează consoană"] },
    { q: "Cum se desparte corect cuvântul 'abstract'?", c: "ab-stract", w: ["abs-tract", "abst-ract", "a-bstract"] },
    { q: "Cum se desparte corect cuvântul 'descrie'?", c: "des-crie", w: ["desc-rie", "de-scrie", "descr-ie"] },
    { q: "Cum se desparte corect cuvântul 'seară'?", c: "sea-ră", w: ["se-a-ră", "s-ea-ră", "se-ară"] },
    { q: "Prefixele (des-, ne-, re-, în-) la despărțire:", c: "se separă de restul cuvântului", w: ["nu se separă niciodată", "se separă numai dacă sunt urmate de vocală", "se separă numai în cuvinte de origine latină"] },
    { q: "Cum se desparte corect cuvântul 'reface'?", c: "re-face", w: ["ref-ace", "r-eface", "refa-ce"] },
    { q: "Cum se desparte corect cuvântul 'învinge'?", c: "în-vinge", w: ["înv-inge", "î-nvinge", "învi-nge"] },
    { q: "Care este regula pentru grupul de consoane la despărțire?", c: "Prima consoană rămâne cu silaba anterioară, a doua trece la silaba următoare", w: ["Toate consoanele trec la silaba următoare", "Toate consoanele rămân cu silaba anterioară", "Consoanele nu se despart niciodată"] },
    { q: "Cum se desparte corect cuvântul 'marcă'?", c: "mar-că", w: ["ma-rcă", "marc-ă", "m-arcă"] },
    { q: "Cum se desparte corect cuvântul 'desface'?", c: "des-face", w: ["desf-ace", "de-sface", "desfa-ce"] },
    { q: "Triftongii (eau, iau, oai) la despărțire:", c: "nu se despart, rămân împreună", w: ["se despart întotdeauna în două", "prima literă se separă", "ultima literă se separă"] },
    { q: "Cum se desparte corect cuvântul 'floare'?", c: "floa-re", w: ["flo-a-re", "fl-oare", "flo-are"] },
    { q: "La despărțire, o consoană între două vocale:", c: "trece la silaba următoare", w: ["rămâne cu silaba anterioară", "se poate pune oriunde", "nu se poate despărți"] },
    { q: "Cum se desparte corect cuvântul 'obiect'?", c: "o-biect", w: ["ob-iect", "obi-ect", "obie-ct"] },
    { q: "Cum se desparte cuvântul 'imagine'?", c: "i-ma-gi-ne", w: ["ima-gi-ne", "i-ma-gin-e", "im-a-gi-ne"] },
    { q: "Regula pentru consoane duble:", c: "se despart, o rămâne cu silaba anterioară", w: ["rămân împreună", "se despart doar la cuvinte lungi", "prima merge la următoarea"] },
    { q: "Cum se desparte 'prietenie'?", c: "pri-e-te-nie", w: ["prie-te-nie", "pri-e-tenie", "prier-te-nie"] },
    { q: "Cuvintele cu prefixe scurte (a-, o-):", c: "se desparte după prefix", w: ["se desparte după rădăcină", "nu se despart", "se desparte la mijloc"] },
    { q: "Cum se desparte 'deschide'?", c: "des-chi-de", w: ["de-schi-de", "deschide", "d-eschide"] },
    { q: "Silabele cu diftong la despărțire:", c: "diftongul rămâne în aceeași silabă", w: ["se desparte diftongul", "se desparte după diftong", "depinde de cuvânt"] },
    { q: "Cum se desparte 'examen'?", c: "e-xa-men", w: ["ex-a-men", "exa-men", "exam-en"] },
    { q: "Două consoane în succesiune:", c: "prima cu silaba anterioară, a doua cu următoarea", w: ["amândouă cu silaba următoare", "amândouă cu anterior", "se desparte dupa sunet"] },
    { q: "Cum se desparte 'mânâncă'?", c: "mân-ân-că", w: ["mâ-nân-că", "mânâ-ncă", "mân-an-că"] },
  ];

  const qs: CurriculumMCQ[] = [];
  const combined = shuffle(questionPool, rng).slice(0, 15);
  for (const item of combined) {
    qs.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }
  return shuffle(qs, rng);
}

// ─── 5. SCRIEREA CORECTĂ (frequently misspelled words) ────────────────────────

function gen_scrierea_corecta_c4(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "ortografie_c4";
  const S = "scrierea_corecta_c4";

  const questionPool = [
    { q: "Cum se scrie corect?", c: "niciodată", w: ["nici odată", "niciodata", "nici-odată"] },
    { q: "Care variantă este corectă?", c: "totuși", w: ["totusi", "tot-uși", "tot uși"] },
    { q: "Când se scrie 'o dată' (două cuvinte)?", c: "când înseamnă o singură dată sau o întâmplare", w: ["când înseamnă cândva", "întotdeauna", "niciodată"] },
    { q: "Cum se scrie corect adverbul care înseamnă 'cândva'?", c: "odată", w: ["o dată", "o-dată", "odatta"] },
    { q: "Care variantă este corectă?", c: "întrucât", w: ["întru cât", "întru-cât", "intrucât"] },
    { q: "Cum se scrie corect?", c: "deoarece", w: ["de oarece", "de-oarece", "deoarecce"] },
    { q: "Care variantă este corectă?", c: "altfel", w: ["alt fel", "alt-fel", "altfell"] },
    { q: "Cum se scrie corect?", c: "desigur", w: ["de sigur", "de-sigur", "dessigur"] },
    { q: "Care variantă este corectă?", c: "bineînțeles", w: ["bine înțeles", "bine-înțeles", "bineinteles"] },
    { q: "Cum se scrie corect?", c: "câteodată", w: ["câte odată", "câte-odată", "câteodatta"] },
    { q: "Care variantă este corectă?", c: "totdeauna", w: ["tot deauna", "tot-deauna", "totdauna"] },
    { q: "Cum se scrie corect?", c: "nu știu", w: ["nu stiu", "nu-știu", "nustiu"] },
    { q: "Care variantă cu 'știință' este corectă?", c: "știință", w: ["stiinta", "știinta", "stiință"] },
    { q: "Cum se scrie corect?", c: "conștiință", w: ["constiinta", "conștiinta", "constiință"] },
    { q: "Care propoziție este scrisă corect?", c: "El nu știe lecția.", w: ["El nu stie lecția.", "El nu-știe lecția.", "El nu știe lectia."] },
    { q: "Cuvântul 'azi' se scrie:", c: "azi", w: ["azzi", "a-zi", "azy"] },
    { q: "Forma corectă a cuvântului 'a spune':", c: "spun", w: ["spună", "spunn", "spuun"] },
    { q: "Cum se scrie adverbul care înseamnă 'în curând'?", c: "în curând", w: ["încurând", "in curand", "în-curând"] },
    { q: "Care este scrierea corectă?", c: "mai mult", w: ["mai-mult", "mai mult", "maiult"] },
    { q: "Forma adjectivului 'plin':", c: "plin", w: ["plyn", "plîn", "plinn"] },
    { q: "Cum se scrie 'aproape'?", c: "aproape", w: ["apoappe", "a-proape", "aprop"] },
    { q: "Forma prezent a verbului 'a putea':", c: "pot", w: ["poot", "peut", "pot"] },
    { q: "Cum se scrie 'mâine'?", c: "mâine", w: ["maine", "m-aine", "mîine"] },
    { q: "Cuvântul 'a lua' în prezent:", c: "iau", w: ["au", "aau", "aiou"] },
    { q: "Care este scrierea corectă a cuvântului pentru 'plouă'?", c: "plouă", w: ["ploua", "ploiă", "pllua"] },
  ];

  const qs: CurriculumMCQ[] = [];
  const combined = shuffle(questionPool, rng).slice(0, 15);
  for (const item of combined) {
    qs.push(createMCQ(T, S, item.q, item.c, item.w, rng));
  }
  return shuffle(qs, rng);
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
