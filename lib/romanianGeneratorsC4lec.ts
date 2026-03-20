// ─── ROMANIAN GENERATORS (CLASA a IV-a) — LECTURĂ ────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a IV-a (4th grade) – lectură: înțelegerea textului, personaje,
// temă și mesaj, figuri de stil

import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

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
  const qs: CurriculumMCQ[] = [];
  const T = "lectura_c4";
  const S = "intelegere_text_c4";

  // 8 mini-passages, 2 questions each (one explicit, one implicit) → 16 total, pick 15
  const passages = [
    {
      explicitQ: "Ce informație este EXPLICITĂ în textul: „Maria s-a uitat pe fereastră și a oftat adânc. Afară ploua torențial.”?",
      explicitA: "Afară ploua torențial.",
      explicitW: ["Maria era tristă.", "Maria voia să iasă afară.", "Era o zi însorită."],
      implicitQ: "Ce putem DEDUCE din textul: „Maria s-a uitat pe fereastră și a oftat adânc. Afară ploua torențial.”?",
      implicitA: "Maria era tristă sau dezamăgită.",
      implicitW: ["Maria voia să citească.", "Afară era zăpadă.", "Maria era bucuroasă."],
    },
    {
      explicitQ: "Ce informație este EXPLICITĂ în textul: „Ion a intrat în clasă cu capul plecat și s-a așezat în bancă fără să scoată niciun cuvânt.”?",
      explicitA: "Ion s-a așezat în bancă fără să scoată niciun cuvânt.",
      explicitW: ["Ion era supărat.", "Ion primise o notă mică.", "Ion era obosit."],
      implicitQ: "Ce putem DEDUCE despre Ion din textul: „Ion a intrat în clasă cu capul plecat și s-a așezat în bancă fără să scoată niciun cuvânt.”?",
      implicitA: "Ion era trist sau îngrijorat de ceva.",
      implicitW: ["Ion era fericit că a venit la școală.", "Ion dorea să doarmă.", "Ion era bolnav."],
    },
    {
      explicitQ: "Ce informație este EXPLICITĂ în textul: „Ana a alergat spre casă cât o țineau picioarele. Inima îi bătea cu putere.”?",
      explicitA: "Ana a alergat spre casă cât o țineau picioarele.",
      explicitW: ["Ana era speriată.", "Ana se grăbea la școală.", "Ana era veselă."],
      implicitQ: "Ce putem DEDUCE din comportamentul Anei în textul dat?",
      implicitA: "Ana era speriată sau se grăbea din cauza unui motiv important.",
      implicitW: ["Ana făcea sport.", "Ana era fericită.", "Ana se plimba liniștită."],
    },
    {
      explicitQ: "Ce informație este EXPLICITĂ în textul: „Bunica a pus farfuria pe masă și a zâmbit larg când a văzut că nepoții au mâncat tot.”?",
      explicitA: "Bunica a pus farfuria pe masă.",
      explicitW: ["Bunica era mândră de nepoți.", "Bunica gătise ciorba preferată.", "Bunica era obosită."],
      implicitQ: "Ce putem DEDUCE despre starea bunicii din textul dat?",
      implicitA: "Bunica era mulțumită și mândră că nepoților le-a plăcut mâncarea.",
      implicitW: ["Bunica era supărată că nu a mai rămas mâncare.", "Bunica era tristă.", "Bunica voia să plece."],
    },
    {
      explicitQ: "Ce informație este EXPLICITĂ în textul: „Câinele s-a ascuns sub pat și tremura. Afară se auzeau tunete puternice.”?",
      explicitA: "Câinele s-a ascuns sub pat și tremura.",
      explicitW: ["Câinele era speriat de tunete.", "Câinele era bolnav.", "Câinele se odihnea."],
      implicitQ: "Ce putem DEDUCE despre câine din textul: „Câinele s-a ascuns sub pat și tremura. Afară se auzeau tunete puternice.”?",
      implicitA: "Câinele era speriat de tunetele de afară.",
      implicitW: ["Câinele se juca.", "Câinele era fericit.", "Câinele voia să mănânce."],
    },
    {
      explicitQ: "Ce informație este EXPLICITĂ în textul: „Elevii au aplaudat îndelung. Profesoara a roșit și a mulțumit cu voce tremurândă.”?",
      explicitA: "Elevii au aplaudat îndelung.",
      explicitW: ["Profesoara era emoționată.", "Profesoara primise un premiu.", "Elevii erau bucuroși de vacanță."],
      implicitQ: "Ce putem DEDUCE despre profesoară din textul dat?",
      implicitA: "Profesoara era emoționată și mișcată de aprecierea elevilor.",
      implicitW: ["Profesoara era supărată.", "Profesoara voia să plece.", "Profesoara era obosită."],
    },
    {
      explicitQ: "Ce informație este EXPLICITĂ în textul: „Mihai a citit scrisoarea de două ori, apoi a pliat-o cu grijă și a pus-o în buzunar.”?",
      explicitA: "Mihai a citit scrisoarea de două ori.",
      explicitW: ["Scrisoarea era importantă pentru Mihai.", "Mihai era fericit.", "Mihai a aruncat scrisoarea."],
      implicitQ: "Ce putem DEDUCE despre Mihai din gesturile lui față de scrisoare?",
      implicitA: "Scrisoarea era importantă sau prețioasă pentru Mihai.",
      implicitW: ["Mihai nu a citit scrisoarea.", "Mihai era nepăsător.", "Mihai voia să trimită scrisoarea."],
    },
    {
      explicitQ: "Ce informație este EXPLICITĂ în textul: „Copiii au tăcut brusc când directoarea a intrat în sală. Toți s-au ridicat în picioare.”?",
      explicitA: "Toți copiii s-au ridicat în picioare.",
      explicitW: ["Copiii îi respectau pe directoare.", "Copiii se temeau de directoare.", "Directoarea era severă."],
      implicitQ: "Ce putem DEDUCE despre relația copiilor cu directoarea din textul dat?",
      implicitA: "Copiii o respectau pe directoare.",
      implicitW: ["Copiii nu o cunoșteau pe directoare.", "Copiii erau speriați de toți adulții.", "Directoarea era prietena lor."],
    },
  ];

  const shuffledPassages = shuffle(passages, rng);

  for (const p of shuffledPassages) {
    if (qs.length >= 15) break;
    qs.push(createMCQ(T, S, p.explicitQ, p.explicitA, p.explicitW, rng));
    if (qs.length >= 15) break;
    qs.push(createMCQ(T, S, p.implicitQ, p.implicitA, p.implicitW, rng));
  }

  // Conceptual fill-up questions (used if passages don't reach 15)
  const conceptQ: CurriculumMCQ[] = [
    createMCQ(T, S, "Informația EXPLICITĂ dintr-un text este:", "scrisă direct în text, fără a trebui dedusă", ["dedusă din context", "o părere a cititorului", "ascunsă între rânduri"], rng),
    createMCQ(T, S, "Informația IMPLICITĂ dintr-un text este:", "dedusă din context, nu scrisă direct", ["scrisă cuvânt cu cuvânt", "titlul textului", "prima propoziție"], rng),
    createMCQ(T, S, "Care dintre următoarele este o întrebare despre informație EXPLICITĂ?", "„Ce a făcut personajul în prima scenă?”", ["„Cum se simțea personajul?”", "„De ce a reacționat astfel?”", "„Ce mesaj transmite textul?”"], rng),
    createMCQ(T, S, "Care dintre următoarele este o întrebare despre informație IMPLICITĂ?", "„Cum se simțea personajul fără ca autorul să spună direct?”", ["„Cum se numește personajul?”", "„Unde s-a petrecut acțiunea?”", "„Câte personaje sunt în text?”"], rng),
  ];

  let ci = 0;
  while (qs.length < 15) {
    qs.push(conceptQ[ci % conceptQ.length]);
    ci++;
  }

  return qs.slice(0, 15);
}

// ─── GENERATOR 2: PERSONAJE (caracterizare) ────────────────────────────────

function genPersonaje(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "lectura_c4";
  const S = "personaje_c4";

  const allQ: CurriculumMCQ[] = [
    // Direct vs indirect characterization
    createMCQ(T, S, "Dacă autorul scrie „Ion era harnic și cinstit”, aceasta este caracterizare:", "directă", ["indirectă", "prin fapte", "prin reacțiile altora"], rng),
    createMCQ(T, S, "Caracterizarea INDIRECTĂ a unui personaj se face prin:", "faptele, vorbele și gândurile personajului", ["ce spune autorul direct despre personaj", "descrierea înfățișării fizice de către narator", "titlul operei"], rng),
    createMCQ(T, S, "„Maria era blândă și harnică” – aceasta este caracterizare:", "directă, pentru că autorul spune direct calitățile", ["indirectă, prin fapte", "prin reacțiile altor personaje", "portret fizic"], rng),
    createMCQ(T, S, "Când aflăm că un personaj e bun deoarece îi ajută pe cei săraci, aceasta este caracterizare:", "indirectă (prin fapte)", ["directă", "prin portret moral explicit", "prin titlu"], rng),
    createMCQ(T, S, "Caracterizarea prin reacțiile altor personaje face parte din caracterizarea:", "indirectă", ["directă", "fizică", "titulară"], rng),
    // Protagonist vs antagonist
    createMCQ(T, S, "Personajul PRINCIPAL al unui text literar se mai numește:", "protagonist", ["antagonist", "narator", "autor"], rng),
    createMCQ(T, S, "Personajul care se opune protagonistului se numește:", "antagonist", ["protagonist", "narator", "personaj secundar"], rng),
    createMCQ(T, S, "Protagonistul unui text este:", "personajul principal în jurul căruia se desfășoară acțiunea", ["autorul textului", "personajul negativ", "naratorul"], rng),
    // Physical vs moral portrait
    createMCQ(T, S, "Portretul FIZIC al unui personaj descrie:", "înfățișarea (față, ochi, păr, statură)", ["caracterul și valorile morale", "faptele personajului", "relațiile cu alte personaje"], rng),
    createMCQ(T, S, "Portretul MORAL al unui personaj descrie:", "calitățile și defectele de caracter", ["culoarea ochilor și a părului", "vârsta și înălțimea", "hainele personajului"], rng),
    createMCQ(T, S, "„Avea ochi albaștri și păr creț, iar zâmbetul îi lumina fața” – acesta este portret:", "fizic", ["moral", "indirect prin fapte", "al antagonistului"], rng),
    createMCQ(T, S, "„Era cinstit, milostiv și întotdeauna îi ajuta pe cei în nevoie” – acesta este portret:", "moral", ["fizic", "direct al înfățișării", "al antagonistului"], rng),
    // Additional characterization concepts
    createMCQ(T, S, "Cum se numește caracterizarea făcută prin vorbele personajului?", "caracterizare indirectă", ["caracterizare directă", "portret fizic", "monolog narativ"], rng),
    createMCQ(T, S, "Care metodă de caracterizare este DIRECTĂ?", "Autorul afirmă direct că personajul este laș.", ["Personajul fuge când apare pericolul.", "Ceilalți îl evită pe personaj.", "Personajul tace tot timpul."], rng),
    createMCQ(T, S, "Personajele SECUNDARE dintr-un text sunt:", "personaje care participă la acțiune, dar nu sunt centrale", ["sinonime cu protagonistul", "întotdeauna negative", "personajele care lipsesc din acțiune"], rng),
  ];

  const shuffled = shuffle(allQ, rng);
  return shuffled.slice(0, 15);
}

// ─── GENERATOR 3: TEMA ȘI MESAJUL TEXTULUI ─────────────────────────────────

function genTemaMesaj(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "lectura_c4";
  const S = "tema_mesaj_c4";

  const allQ: CurriculumMCQ[] = [
    // Core definitions
    createMCQ(T, S, "TEMA unui text literar reprezintă:", "subiectul despre care vorbește textul", ["lecția morală pe care autorul vrea s-o transmită", "titlul textului", "personajul principal"], rng),
    createMCQ(T, S, "MESAJUL unui text literar reprezintă:", "lecția morală sau ideea pe care autorul vrea s-o transmită", ["subiectul despre care vorbește textul", "primul paragraf", "dialogul dintre personaje"], rng),
    createMCQ(T, S, "Tema ≠ mesajul deoarece:", "tema arată subiectul, iar mesajul arată lecția morală", ["sunt același lucru exprimat diferit", "tema e mai lungă decât mesajul", "mesajul apare la început, tema la final"], rng),
    // Identifying theme
    createMCQ(T, S, "Care este TEMA unui text despre doi prieteni care se ajută la nevoie?", "prietenia", ["curajul", "onestitatea", "natura"], rng),
    createMCQ(T, S, "Care este TEMA unui text în care un copil înfruntă frica pentru a-și salva fratele?", "curajul", ["prietenia", "natura", "școala"], rng),
    createMCQ(T, S, "Care este TEMA unui text în care personajele respectă natura și îngrijesc animalele?", "dragostea față de natură și animale", ["curajul", "competiția", "munca"], rng),
    createMCQ(T, S, "Care este TEMA unui text despre un elev care recunoaște că a greșit?", "cinstea și responsabilitatea", ["prietenia", "natura", "aventura"], rng),
    // Identifying mesaj
    createMCQ(T, S, "Care este MESAJUL unui text despre doi prieteni care se ajută la nevoie?", "Prietenii adevărați se sprijină reciproc în momentele grele.", ["Prietenia este un sentiment.", "Doi prieteni se plimbă împreună.", "Prietenii merg la școală."], rng),
    createMCQ(T, S, "Care este MESAJUL unui text în care un copil leneș ajunge să regrete că nu a muncit?", "Munca este importantă; lenea aduce regrete.", ["Copiii nu trebuie să muncească.", "Munca este grea și plictisitoare.", "Lenea este distractivă."], rng),
    createMCQ(T, S, "Care este MESAJUL unui text în care sinceritatea unui copil îi câștigă încrederea celorlalți?", "Sinceritatea este cea mai bună politică.", ["Minciunile ajută uneori.", "Sinceritatea nu contează.", "Copiii nu trebuie să vorbească."], rng),
    // How to identify tema/mesaj
    createMCQ(T, S, "Unde se poate afla de obicei MESAJUL unui text?", "La finalul textului, uneori formulat explicit sau dedus din întâmplări", ["Întotdeauna în titlu", "Numai în primul paragraf", "Numai în descrierile naturii"], rng),
    createMCQ(T, S, "TEMA unui text poate fi identificată prin întrebarea:", "„Despre ce vorbește textul?”", ["„Ce lecție transmite textul?”", "„Câte personaje sunt?”", "„Cât de lung este textul?”"], rng),
    createMCQ(T, S, "MESAJUL unui text poate fi identificat prin întrebarea:", "„Ce vrea autorul să ne învețe din acest text?”", ["„Despre ce este textul?”", "„Câte paragrafe are textul?”", "„Cum arată personajele?”"], rng),
    createMCQ(T, S, "Un text cu tema „natura” transmite cel mai probabil mesajul:", "Trebuie să ocrotim și să respectăm natura.", ["Natura este periculoasă.", "Nu trebuie să ieșim afară.", "Animalele nu sunt importante."], rng),
    createMCQ(T, S, "Care dintre următoarele este o TEMĂ (nu un mesaj)?", "Curajul", ["Fii curajos și vei reuși!", "Curajul aduce victoria.", "Orice obstacol poate fi depășit cu curaj."], rng),
  ];

  const shuffled = shuffle(allQ, rng);
  return shuffled.slice(0, 15);
}

// ─── GENERATOR 4: FIGURI DE STIL ───────────────────────────────────────────

function genFiguriStil(seed: number): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const T = "lectura_c4";
  const S = "figuri_stil_c4";

  const allQ: CurriculumMCQ[] = [
    // Comparație
    createMCQ(T, S, "Care figură de stil conține cuvântul „ca” sau „precum”?", "Comparația", ["Metafora", "Personificarea", "Hiperbola"], rng),
    createMCQ(T, S, "„Ochii ei străluceau ca stelele” este un exemplu de:", "Comparație", ["Metaforă", "Personificare", "Repetiție"], rng),
    createMCQ(T, S, "„Copilul alerga precum vântul” este:", "Comparație (folosește „precum”)", ["Metaforă", "Hiperbolă", "Enumerație"], rng),
    createMCQ(T, S, "„Vocea ei era dulce ca mierea” conține figura de stil:", "Comparație", ["Metaforă", "Personificare", "Hiperbolă"], rng),
    // Metaforă
    createMCQ(T, S, "„Lacrimile sale erau izvoare de durere” este:", "Metaforă", ["Comparație", "Personificare", "Hiperbolă"], rng),
    createMCQ(T, S, "Metafora se deosebește de comparație prin:", "absența cuvintelor „ca”, „precum”, „asemeni”", ["prezența cuvântului „ca”", "descrierea fizică a personajului", "enumerarea obiectelor"], rng),
    createMCQ(T, S, "„Viața este un drum lung și anevoios” este:", "Metaforă", ["Comparație", "Hiperbolă", "Enumerație"], rng),
    // Personificare
    createMCQ(T, S, "„Cerul plânge” este o figură de stil numită:", "Personificare", ["Metaforă", "Comparație", "Hiperbolă"], rng),
    createMCQ(T, S, "„Vântul suspina printre copaci” este:", "Personificare", ["Comparație", "Metaforă", "Enumerație"], rng),
    createMCQ(T, S, "Personificarea constă în:", "atribuirea unor însușiri omenești unui obiect sau fenomen", ["compararea a două ființe cu „ca”", "exagerarea unei calități", "repetarea unui cuvânt"], rng),
    createMCQ(T, S, "„Frunzele dansau vesele în vânt” este:", "Personificare", ["Comparație", "Hiperbolă", "Repetiție"], rng),
    // Hiperbolă
    createMCQ(T, S, "„Am așteptat o veșnicie” este un exemplu de:", "Hiperbolă", ["Comparație", "Metaforă", "Personificare"], rng),
    createMCQ(T, S, "Hiperbola este o figură de stil bazată pe:", "exagerare", ["comparație cu „ca”", "repetarea unui cuvânt", "atribuirea de însușiri umane"], rng),
    // Enumerație
    createMCQ(T, S, "„Câmpuri, dealuri, munți și văi se desfășurau în fața noastră” este:", "Enumerație", ["Metaforă", "Comparație", "Hiperbolă"], rng),
    // Repetiție
    createMCQ(T, S, "„Departe, departe, departe era satul lui” conține figura de stil numită:", "Repetiție", ["Enumerație", "Hiperbolă", "Metaforă"], rng),
  ];

  const shuffled = shuffle(allQ, rng);
  return shuffled.slice(0, 15);
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
