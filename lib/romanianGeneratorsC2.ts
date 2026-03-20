// ─── ROMANIAN GENERATORS (CLASA a II-a) ─────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a II-a (2nd grade) – parts of speech, spelling, sentence, text, vocabulary, communication, reading

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

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

// ─── WORD BANKS ─────────────────────────────────────────────────────────────

const SUBSTANTIVE = {
  comune: ["casă", "carte", "masă", "copac", "câine", "pisică", "floare", "pasăre", "grădină", "școală", "copil", "pâine", "soare", "lună", "apă", "pădure", "munte", "mare", "drum", "sat"],
  proprii: ["Ana", "Ion", "Maria", "Mihai", "București", "România", "Dunărea", "Carpații", "Sibiu", "Elena", "Andrei", "Sofia", "Timișoara", "Constanța", "Cluj"],
  masculine: ["câine", "copac", "munte", "soare", "copil", "perete", "câmp", "tren", "lup", "urs"],
  feminine: ["casă", "carte", "masă", "floare", "pasăre", "grădină", "școală", "pâine", "lună", "pisică"],
  neutre: ["scaun", "caiet", "creion", "stilou", "tablou", "orizont", "nor", "drum", "sat", "ou"],
  plurale: [
    { sg: "casă", pl: "case" }, { sg: "carte", pl: "cărți" }, { sg: "masă", pl: "mese" },
    { sg: "copac", pl: "copaci" }, { sg: "câine", pl: "câini" }, { sg: "pisică", pl: "pisici" },
    { sg: "floare", pl: "flori" }, { sg: "pasăre", pl: "păsări" }, { sg: "copil", pl: "copii" },
    { sg: "pom", pl: "pomi" }, { sg: "creion", pl: "creioane" }, { sg: "caiet", pl: "caiete" },
    { sg: "scaun", pl: "scaune" }, { sg: "perete", pl: "pereți" }, { sg: "munte", pl: "munți" },
  ],
};

const VERBE = {
  actiuni: [
    { verb: "aleargă", inf: "a alerga" }, { verb: "citește", inf: "a citi" },
    { verb: "scrie", inf: "a scrie" }, { verb: "mănâncă", inf: "a mânca" },
    { verb: "doarme", inf: "a dormi" }, { verb: "cântă", inf: "a cânta" },
    { verb: "pictează", inf: "a picta" }, { verb: "dansează", inf: "a dansa" },
    { verb: "gătește", inf: "a găti" }, { verb: "conduce", inf: "a conduce" },
    { verb: "vorbește", inf: "a vorbi" }, { verb: "ascultă", inf: "a asculta" },
  ],
  timpuri: [
    { prezent: "merge", trecut: "a mers", viitor: "va merge" },
    { prezent: "citește", trecut: "a citit", viitor: "va citi" },
    { prezent: "scrie", trecut: "a scris", viitor: "va scrie" },
    { prezent: "cântă", trecut: "a cântat", viitor: "va cânta" },
    { prezent: "doarme", trecut: "a dormit", viitor: "va dormi" },
    { prezent: "aleargă", trecut: "a alergat", viitor: "va alerga" },
    { prezent: "mănâncă", trecut: "a mâncat", viitor: "va mânca" },
    { prezent: "pictează", trecut: "a pictat", viitor: "va picta" },
    { prezent: "dansează", trecut: "a dansat", viitor: "va dansa" },
    { prezent: "vorbește", trecut: "a vorbit", viitor: "va vorbi" },
  ],
};

const ADJECTIVE = {
  perechi: [
    { adj: "frumos", subst: "copil" }, { adj: "mare", subst: "casă" },
    { adj: "mic", subst: "câine" }, { adj: "roșu", subst: "măr" },
    { adj: "verde", subst: "frunză" }, { adj: "albastru", subst: "cer" },
    { adj: "dulce", subst: "prăjitură" }, { adj: "cald", subst: "soare" },
    { adj: "rece", subst: "apă" }, { adj: "vesel", subst: "copil" },
    { adj: "trist", subst: "elev" }, { adj: "înalt", subst: "copac" },
    { adj: "greu", subst: "piatră" }, { adj: "ușor", subst: "fulg" },
    { adj: "deștept", subst: "elev" }, { adj: "harnic", subst: "albină" },
  ],
  lista: ["frumos", "mare", "mic", "roșu", "verde", "albastru", "dulce", "cald", "rece", "vesel", "trist", "înalt", "greu", "ușor", "deștept", "harnic", "lung", "scurt", "nou", "vechi"],
};

const ORTOGRAFIE = {
  aiReguli: [
    { correct: "câine", wrong: ["cîine", "căine", "câîne"] },
    { correct: "pâine", wrong: ["pîine", "păine", "paîne"] },
    { correct: "mâncare", wrong: ["mîncare", "măncare", "mancare"] },
    { correct: "România", wrong: ["Romănia", "Romînia", "Romanîa"] },
    { correct: "român", wrong: ["romăn", "romîn", "romin"] },
    { correct: "începe", wrong: ["âncepe", "incepe", "encepe"] },
    { correct: "înalt", wrong: ["ânalt", "inalt", "enalt"] },
    { correct: "într-o", wrong: ["ântr-o", "intr-o", "intro"] },
    { correct: "coborî", wrong: ["coborâ", "cobori", "coboră"] },
    { correct: "hotărî", wrong: ["hotărâ", "hotări", "hotara"] },
    { correct: "fântână", wrong: ["fîntîna", "fântîna", "fantana"] },
    { correct: "sânge", wrong: ["sînge", "sănge", "sange"] },
  ],
  saSa: [
    { sentence: "Maria ... dus la școală.", correct: "s-a", wrong: ["sa", "s a", "s'a"], hint: "se + a = s-a" },
    { sentence: "Este ... carte.", correct: "sa", wrong: ["s-a", "s a", "s'a"], hint: "a sa = sa" },
    { sentence: "Ion ... jucat în parc.", correct: "s-a", wrong: ["sa", "s a", "s'a"], hint: "se + a = s-a" },
    { sentence: "A luat ... minge.", correct: "sa", wrong: ["s-a", "s a", "s'a"], hint: "a sa = sa" },
    { sentence: "Pisica ... ascuns sub pat.", correct: "s-a", wrong: ["sa", "s a", "s'a"], hint: "se + a = s-a" },
    { sentence: "A pierdut ... cheie.", correct: "sa", wrong: ["s-a", "s a", "s'a"], hint: "a sa = sa" },
    { sentence: "Copilul ... trezit devreme.", correct: "s-a", wrong: ["sa", "s a", "s'a"], hint: "se + a = s-a" },
    { sentence: "Mama ... a venit acasă.", correct: "sa", wrong: ["s-a", "s a", "s'a"], hint: "a sa = sa" },
    { sentence: "Elevul ... pregătit de test.", correct: "s-a", wrong: ["sa", "s a", "s'a"], hint: "se + a = s-a" },
    { sentence: "A văzut ... prietenă.", correct: "sa", wrong: ["s-a", "s a", "s'a"], hint: "a sa = sa" },
  ],
  iaIa: [
    { sentence: "Mama ... dat o carte.", correct: "i-a", wrong: ["ia", "i a", "i'a"], hint: "îi + a = i-a" },
    { sentence: "El ... cartea de pe masă.", correct: "ia", wrong: ["i-a", "i a", "i'a"], hint: "ia = verb (a lua)" },
    { sentence: "Bunica ... spus o poveste.", correct: "i-a", wrong: ["ia", "i a", "i'a"], hint: "îi + a = i-a" },
    { sentence: "Ana ... creioanele de pe bancă.", correct: "ia", wrong: ["i-a", "i a", "i'a"], hint: "ia = verb (a lua)" },
    { sentence: "Profesoara ... explicat tema.", correct: "i-a", wrong: ["ia", "i a", "i'a"], hint: "îi + a = i-a" },
    { sentence: "Maria ... caietul și pleacă.", correct: "ia", wrong: ["i-a", "i a", "i'a"], hint: "ia = verb (a lua)" },
    { sentence: "Tata ... cumpărat o jucărie.", correct: "i-a", wrong: ["ia", "i a", "i'a"], hint: "îi + a = i-a" },
    { sentence: "El ... mingea din dulap.", correct: "ia", wrong: ["i-a", "i a", "i'a"], hint: "ia = verb (a lua)" },
  ],
  sauSau: [
    { sentence: "Copiii ... jucat în parc.", correct: "s-au", wrong: ["sau", "s au", "s'au"], hint: "se + au = s-au" },
    { sentence: "Vrei ceai ... cafea?", correct: "sau", wrong: ["s-au", "s au", "s'au"], hint: "sau = conjuncție (ori)" },
    { sentence: "Elevii ... pregătit de lecție.", correct: "s-au", wrong: ["sau", "s au", "s'au"], hint: "se + au = s-au" },
    { sentence: "Mergi pe jos ... cu autobuzul?", correct: "sau", wrong: ["s-au", "s au", "s'au"], hint: "sau = conjuncție (ori)" },
    { sentence: "Păsările ... ascuns de ploaie.", correct: "s-au", wrong: ["sau", "s au", "s'au"], hint: "se + au = s-au" },
    { sentence: "Doi ... trei copii au venit.", correct: "sau", wrong: ["s-au", "s au", "s'au"], hint: "sau = conjuncție (ori)" },
    { sentence: "Fetele ... întors de la școală.", correct: "s-au", wrong: ["sau", "s au", "s'au"], hint: "se + au = s-au" },
    { sentence: "Citești ... te joci?", correct: "sau", wrong: ["s-au", "s au", "s'au"], hint: "sau = conjuncție (ori)" },
  ],
};

const PROPOZITII = {
  subiectPredicat: [
    { prop: "Maria citește o carte.", subiect: "Maria", predicat: "citește" },
    { prop: "Câinele aleargă în parc.", subiect: "Câinele", predicat: "aleargă" },
    { prop: "Ion scrie un tema.", subiect: "Ion", predicat: "scrie" },
    { prop: "Pisica doarme pe canapea.", subiect: "Pisica", predicat: "doarme" },
    { prop: "Elena pictează un tablou.", subiect: "Elena", predicat: "pictează" },
    { prop: "Copilul mănâncă o prăjitură.", subiect: "Copilul", predicat: "mănâncă" },
    { prop: "Bunica gătește supa.", subiect: "Bunica", predicat: "gătește" },
    { prop: "Păsările cântă frumos.", subiect: "Păsările", predicat: "cântă" },
    { prop: "Elevii ascultă lecția.", subiect: "Elevii", predicat: "ascultă" },
    { prop: "Tata conduce mașina.", subiect: "Tata", predicat: "conduce" },
    { prop: "Ana dansează pe scenă.", subiect: "Ana", predicat: "dansează" },
    { prop: "Fratele meu aleargă repede.", subiect: "Fratele", predicat: "aleargă" },
  ],
  tipuri: [
    { prop: "Ana merge la școală.", tip: "Enunțiativă", semn: "." },
    { prop: "Unde mergi?", tip: "Interogativă", semn: "?" },
    { prop: "Ce frumos este!", tip: "Exclamativă", semn: "!" },
    { prop: "Vino aici!", tip: "Imperativă", semn: "!" },
    { prop: "Câinele doarme liniștit.", tip: "Enunțiativă", semn: "." },
    { prop: "Cine a venit?", tip: "Interogativă", semn: "?" },
    { prop: "Bravo, ai reușit!", tip: "Exclamativă", semn: "!" },
    { prop: "Deschide ușa!", tip: "Imperativă", semn: "!" },
    { prop: "Ieri a plouat.", tip: "Enunțiativă", semn: "." },
    { prop: "Ce faci mâine?", tip: "Interogativă", semn: "?" },
    { prop: "Ce bine e afară!", tip: "Exclamativă", semn: "!" },
    { prop: "Taci din gură!", tip: "Imperativă", semn: "!" },
  ],
};

const OMONIME = [
  { word: "broască", sens1: "animal (amfibian)", sens2: "lacăt/încuietoare" },
  { word: "pas", sens1: "mișcare a piciorului", sens2: "pasăre (struț)" },
  { word: "lac", sens1: "apă stătătoare", sens2: "substanță de acoperit" },
  { word: "carte", sens1: "publicație/volum", sens2: "joc de cărți" },
  { word: "masă", sens1: "mobilă (de mâncat)", sens2: "cantitate de materie" },
  { word: "corn", sens1: "parte a animalului", sens2: "produs de panificație" },
  { word: "toc", sens1: "parte a pantofului", sens2: "instrument de scris" },
  { word: "leu", sens1: "animal sălbatic", sens2: "monedă românească" },
  { word: "scoarță", sens1: "parte a copacului", sens2: "copertă de carte" },
  { word: "ochi", sens1: "organ de văz", sens2: "plasă de gard" },
  { word: "bancă", sens1: "instituție financiară", sens2: "mobilier de școală" },
  { word: "cap", sens1: "parte a corpului", sens2: "conducătorul unui grup" },
  { word: "mână", sens1: "parte a corpului", sens2: "ajutor/sprijin" },
  { word: "gură", sens1: "parte a feței", sens2: "deschizătura unui vas" },
  { word: "poartă", sens1: "deschidere în gard/zid", sens2: "punct de marcaj (sport)" },
];

const CUVINTE_COMPUSE = [
  { compound: "untdelemn", parts: "unt + de + lemn" },
  { compound: "binecuvântare", parts: "bine + cuvântare" },
  { compound: "bunăvoință", parts: "bună + voință" },
  { compound: "întotdeauna", parts: "în + tot + de + a + una" },
  { compound: "niciodată", parts: "nici + o + dată" },
  { compound: "altceva", parts: "alt + ceva" },
  { compound: "altcineva", parts: "alt + cineva" },
  { compound: "totdeauna", parts: "tot + de + a + una" },
  { compound: "binecrescut", parts: "bine + crescut" },
  { compound: "răuvoitor", parts: "rău + voitor" },
];

const EXPRESII = [
  { expr: "a da din casă", sens: "a spune secrete", wrongSens: ["a muta casa", "a vinde casa", "a construi casa"] },
  { expr: "a bate câmpii", sens: "a vorbi fără sens", wrongSens: ["a merge pe câmp", "a se bate", "a ara pământul"] },
  { expr: "a-i sări muștarul", sens: "a se enerva", wrongSens: ["a cădea muștarul", "a mânca muștar", "a cumpăra muștar"] },
  { expr: "a tăia frunza la câini", sens: "a nu face nimic", wrongSens: ["a tăia frunze", "a hrăni câinii", "a tunde copacii"] },
  { expr: "a-și băga picioarele", sens: "a renunța supărat", wrongSens: ["a-și pune pantofii", "a merge pe jos", "a face sport"] },
  { expr: "a avea inimă de piatră", sens: "a fi nemilos", wrongSens: ["a avea o boală", "a fi curajos", "a fi frumos"] },
  { expr: "a fi cu capul în nori", sens: "a fi visător/distrat", wrongSens: ["a fi înalt", "a zbura", "a urca pe munte"] },
  { expr: "a lua-o la sănătoasa", sens: "a fugi repede", wrongSens: ["a merge la doctor", "a mânca sănătos", "a face sport"] },
  { expr: "a pune paie pe foc", sens: "a agrava situația", wrongSens: ["a face focul", "a arde paie", "a găti pe foc"] },
  { expr: "a se da de ceasul morții", sens: "a se strădui foarte mult", wrongSens: ["a muri", "a verifica ceasul", "a dormi"] },
];

const TEXTE_C2 = [
  {
    text: "Ana merge la bibliotecă. Ea împrumută o carte despre animale. Când ajunge acasă, citește până seara. Cartea îi place foarte mult.",
    intrebari: [
      { q: "Unde merge Ana?", correct: "La bibliotecă", wrong: ["La școală", "Acasă", "La magazin"] },
      { q: "Ce carte împrumută Ana?", correct: "O carte despre animale", wrong: ["O carte de matematică", "O carte de povești", "Un dicționar"] },
      { q: "Cum se simte Ana în legătură cu cartea?", correct: "Îi place foarte mult", wrong: ["Nu-i place", "Este plictisită", "Este supărată"] },
    ],
  },
  {
    text: "Ion s-a trezit devreme sâmbăta. S-a spălat, a mâncat și a plecat în parc. Acolo s-a întâlnit cu prietenii lui. Au jucat fotbal toată ziua.",
    intrebari: [
      { q: "Când s-a trezit Ion?", correct: "Sâmbăta devreme", wrong: ["Duminica", "Lunea", "Vinerea"] },
      { q: "Ce a făcut Ion în parc?", correct: "A jucat fotbal cu prietenii", wrong: ["A citit o carte", "A dormit pe bancă", "A plecat acasă"] },
      { q: "Ce a făcut Ion PRIMA dată după ce s-a trezit?", correct: "S-a spălat", wrong: ["A plecat în parc", "A jucat fotbal", "A mâncat"] },
    ],
  },
  {
    text: "Vulpea a văzut niște struguri frumoși sus pe un gard. A sărit de mai multe ori, dar n-a putut ajunge la ei. Atunci a spus: 'Sunt acri oricum!'",
    intrebari: [
      { q: "Ce a văzut vulpea?", correct: "Struguri pe un gard", wrong: ["Mere pe un copac", "Cireșe în grădină", "Nuci pe drum"] },
      { q: "De ce a spus vulpea că strugurii sunt acri?", correct: "Pentru că n-a putut ajunge la ei", wrong: ["Pentru că erau acri", "Pentru că nu-i plac", "Pentru că erau verzi"] },
      { q: "Care este morala poveștii?", correct: "Nu disprețui ce nu poți obține", wrong: ["Strugurii sunt acri", "Vulpea nu poate sări", "E bine să renunți"] },
    ],
  },
  {
    text: "Maria are o grădină frumoasă. Ea plantează flori în fiecare primăvară. Florile ei sunt cele mai frumoase din sat. Vecinii vin mereu să le admire.",
    intrebari: [
      { q: "Ce face Maria în grădină?", correct: "Plantează flori", wrong: ["Plantează legume", "Se joacă", "Doarme"] },
      { q: "Când plantează Maria flori?", correct: "În fiecare primăvară", wrong: ["Iarna", "Vara", "Toamna"] },
      { q: "De ce vin vecinii la Maria?", correct: "Să admire florile", wrong: ["Să planteze flori", "Să culeagă flori", "Să ia prânzul"] },
    ],
  },
  {
    text: "Doi frați, Andrei și Mihai, au primit câte un bănuț. Andrei și-a cumpărat dulciuri și le-a mâncat pe toate. Mihai și-a pus banii în pușculiță. După o lună, Mihai avea destui bani pentru o jucărie.",
    intrebari: [
      { q: "Ce a făcut Andrei cu bănuțul?", correct: "A cumpărat dulciuri", wrong: ["L-a pus în pușculiță", "A cumpărat o jucărie", "L-a pierdut"] },
      { q: "Cine a economisit banii?", correct: "Mihai", wrong: ["Andrei", "Amândoi", "Niciunul"] },
      { q: "Care este învățătura poveștii?", correct: "E bine să economisești", wrong: ["Dulciurile sunt gustoase", "Frații se ceartă mereu", "Jucăriile sunt scumpe"] },
    ],
  },
  {
    text: "Era o zi frumoasă de toamnă. Frunzele copacilor erau galbene, roșii și portocalii. Vântul le lua de pe ramuri și le purta prin aer. Copiii se jucau prin frunzele căzute, râzând fericiți.",
    intrebari: [
      { q: "Ce anotimp este descris?", correct: "Toamna", wrong: ["Vara", "Iarna", "Primăvara"] },
      { q: "De ce culoare erau frunzele?", correct: "Galbene, roșii și portocalii", wrong: ["Verzi", "Albastre", "Albe"] },
      { q: "Ce făceau copiii?", correct: "Se jucau prin frunzele căzute", wrong: ["Dormeau sub copaci", "Culegeau mere", "Plantau flori"] },
    ],
  },
  {
    text: "Radu are un cățel pe nume Bobi. În fiecare dimineață, Bobi îl trezește pe Radu lătrând vesel. Ei se plimbă împreună în parc și se joacă cu mingea. Radu îl hrănește pe Bobi cu mâncare specială pentru câini.",
    intrebari: [
      { q: "Cum îl trezește Bobi pe Radu?", correct: "Lătrând vesel", wrong: ["Zgâriind ușa", "Jucându-se cu mingea", "Alergând prin casă"] },
      { q: "Unde merg Radu și Bobi să se plimbe?", correct: "În parc", wrong: ["La școală", "La magazin", "La bunici"] },
      { q: "Cum se numește câinele lui Radu?", correct: "Bobi", wrong: ["Rex", "Lăbuș", "Brumă"] },
    ],
  },
  {
    text: "Primăvara, livada se umple de flori albe și roz. Albinele zboară de la o floare la alta și culeg nectar. Din nectar fac miere dulce în stupi. Fără albine, mulți pomi fructiferi nu ar da roade.",
    intrebari: [
      { q: "Ce fac albinele primăvara?", correct: "Culeg nectar de la flori", wrong: ["Dorm în stupi", "Mănâncă frunze", "Construiesc cuiburi"] },
      { q: "Din ce fac albinele miere?", correct: "Din nectar", wrong: ["Din apă", "Din frunze", "Din polen și apă"] },
      { q: "De ce sunt importante albinele pentru pomi?", correct: "Fără ele, pomii nu dau roade", wrong: ["Le hrănesc", "Le colorează florile", "Le apară de insecte"] },
    ],
  },
];

const SUCCESIUNI = [
  {
    text: "Ion s-a trezit, s-a spălat pe dinți, a luat micul dejun și a plecat la școală.",
    events: ["S-a trezit", "S-a spălat pe dinți", "A luat micul dejun", "A plecat la școală"],
  },
  {
    text: "Ana a deschis cartea, a citit prima pagină, a râs de poveste și a închis cartea.",
    events: ["A deschis cartea", "A citit prima pagină", "A râs de poveste", "A închis cartea"],
  },
  {
    text: "Mama a cumpărat ingrediente, a gătit prânzul, a pus masa și a chemat familia.",
    events: ["A cumpărat ingrediente", "A gătit prânzul", "A pus masa", "A chemat familia"],
  },
  {
    text: "Pisica a văzut un șoarece, a alergat după el, l-a prins și l-a dus stăpânului.",
    events: ["A văzut un șoarece", "A alergat după el", "L-a prins", "L-a dus stăpânului"],
  },
];

const MORALE = [
  { text: "Iepurele rapid a adormit în timpul cursei. Broasca țestoasă, deși lentă, a continuat să meargă și a câștigat.", morala: "Perseverența învinge lenea", wrong: ["Iepurii sunt mai rapizi", "E bine să dormi", "Broaștele sunt deștepte"] },
  { text: "Un băiat a mințit de mai multe ori că vine lupul. Când lupul a venit cu adevărat, nimeni nu l-a mai crezut.", morala: "Cine minte mult nu e crezut nici când spune adevărul", wrong: ["Lupii sunt periculoși", "Nu trebuie să stai singur", "E bine să strigi tare"] },
  { text: "Greierele a cântat toată vara. Furnica a strâns hrană. Iarna, greierele nu avea ce mânca.", morala: "E important să te pregătești pentru viitor", wrong: ["Muzica e mai bună decât munca", "Furnicile sunt rele", "Iarna e frumoasă"] },
  { text: "Un câine cu un os în gură a văzut reflexia sa în apă. Crezând că e alt câine, a lătrat și a pierdut osul.", morala: "Lăcomia te poate face să pierzi ce ai", wrong: ["Câinii sunt lătrători", "Apa e periculoasă", "Oasele sunt importante"] },
  { text: "Doi prieteni și-au împărțit prânzul. Deși aveau puțin, amândoi au fost sătui și fericiți.", morala: "Împărțind cu alții, câștigi mai mult", wrong: ["Mâncarea e importantă", "Prietenii mănâncă împreună", "E bine să ai puțin"] },
  { text: "Un copil a găsit un portofel pe stradă. Deși în el erau mulți bani, l-a dus la poliție. Proprietarul l-a găsit și i-a mulțumit copilului.", morala: "Cinstea este cea mai bună calitate", wrong: ["E bine să găsești bani", "Poliția rezolvă toate problemele", "Banii sunt importanți"] },
  { text: "O vrabie voia să învețe să înoate ca rațele. A căzut în apă și a trebuit salvată. 'Mai bine să fii cel mai bun la ce știi', a învățat ea.", morala: "Fii mândru de ceea ce știi să faci bine", wrong: ["Vrabia nu poate înota", "Rațele sunt mai deștepte", "Nu trebuie să înveți lucruri noi"] },
  { text: "Doi băieți au găsit un măr. Primul zicea că e al lui, al doilea de asemenea. Un om înțelept a tăiat mărul și a dat câte o jumătate fiecăruia.", morala: "Împărțeala înțeleaptă face pe toată lumea mulțumită", wrong: ["Merele trebuie cumpărate", "Băieții greșeau amândoi", "Omul înțelept a greșit"] },
];

const POLITETE = {
  formule: [
    { situatie: "Când întâlnești un adult dimineața", correct: "Bună dimineața!", wrong: ["Salut!", "Hei!", "Pa!"] },
    { situatie: "Când ceri ceva cuiva", correct: "Vă rog!", wrong: ["Dă-mi!", "Vreau!", "Adu!"] },
    { situatie: "Când primești un cadou", correct: "Mulțumesc!", wrong: ["Dă-mi mai mult!", "OK.", "Bine."] },
    { situatie: "Când deranjezi pe cineva", correct: "Scuzați-mă!", wrong: ["Mă dau deoparte.", "Nu e vina mea.", "Dă-te!"] },
    { situatie: "Când pleci de undeva", correct: "La revedere!", wrong: ["Pa!", "Hai!", "Gata!"] },
    { situatie: "Când cineva te ajută", correct: "Mulțumesc frumos!", wrong: ["Normal.", "Era treaba ta.", "OK."] },
    { situatie: "Când răspunzi la telefon", correct: "Alo, bună ziua!", wrong: ["Ce vrei?", "Cine e?", "Da!"] },
    { situatie: "Când te prezinți cuiva", correct: "Bună ziua, mă numesc...", wrong: ["Eu sunt!", "Ce-i?", "Hai!"] },
  ],
};

const BILETE = {
  parti: ["destinatar", "mesaj", "semnătură"],
  felicitari: [
    { ocazie: "ziua de naștere", formula: "La mulți ani!" },
    { ocazie: "Crăciun", formula: "Crăciun fericit!" },
    { ocazie: "Paște", formula: "Paște fericit!" },
    { ocazie: "1 Martie", formula: "Primăvară frumoasă!" },
    { ocazie: "Anul Nou", formula: "An nou fericit!" },
  ],
};

// ─── GENERATORS ─────────────────────────────────────────────────────────────

export const C2_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {

  // ══════════════ PĂRȚI DE VORBIRE ══════════════

  parti_vorbire_c2: {
    substantiv_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const tip = Math.floor(rng() * 5);
        if (tip === 0) {
          const correct = pick(SUBSTANTIVE.comune, rng);
          const wrong = shuffle(VERBE.actiuni, rng).slice(0, 2).map(v => v.verb);
          wrong.push(pick(ADJECTIVE.lista, rng));
          mcqs.push(createMCQ("parti_vorbire_c2", "substantiv_c2", "Care cuvânt este un SUBSTANTIV?", correct, wrong, rng));
        } else if (tip === 1) {
          const correct = pick(SUBSTANTIVE.proprii, rng);
          const wrong = shuffle(SUBSTANTIVE.comune, rng).slice(0, 3);
          mcqs.push(createMCQ("parti_vorbire_c2", "substantiv_c2", "Care este un SUBSTANTIV PROPRIU (nume)?", correct, wrong, rng));
        } else if (tip === 2) {
          const data = pick(SUBSTANTIVE.plurale, rng);
          const allPl = SUBSTANTIVE.plurale.filter(p => p.pl !== data.pl).map(p => p.pl);
          mcqs.push(createMCQ("parti_vorbire_c2", "substantiv_c2", `Care este PLURALUL cuvântului '${data.sg}'?`, data.pl, shuffle(allPl, rng).slice(0, 3), rng));
        } else if (tip === 3) {
          const data = pick(SUBSTANTIVE.plurale, rng);
          const allSg = SUBSTANTIVE.plurale.filter(p => p.sg !== data.sg).map(p => p.sg);
          mcqs.push(createMCQ("parti_vorbire_c2", "substantiv_c2", `Care este SINGULARUL cuvântului '${data.pl}'?`, data.sg, shuffle(allSg, rng).slice(0, 3), rng));
        } else {
          const comun = pick(SUBSTANTIVE.comune, rng);
          const wrong = shuffle(SUBSTANTIVE.proprii, rng).slice(0, 3);
          mcqs.push(createMCQ("parti_vorbire_c2", "substantiv_c2", "Care este un SUBSTANTIV COMUN?", comun, wrong, rng));
        }
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "substantiv_c2", question: "Cum se scrie cuvântul care arată o locuință?", answer: ["casă", "casa"], hint: "Substantiv comun, feminin" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "substantiv_c2", question: "Pluralul cuvântului 'carte' este...", answer: ["cărți", "carti"], hint: "Plural nearticulat" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "substantiv_c2", question: "Singularul cuvântului 'câini' este...", answer: ["câine", "caine"], hint: "Singular nearticulat" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "substantiv_c2", question: "Cum se scrie animalul cu 4 picioare care latră?", answer: ["câine", "caine"], hint: "â după consoană" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "substantiv_c2", question: "Singularul cuvântului 'flori' este...", answer: ["floare"], hint: "Singular nearticulat, feminin" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "substantiv_c2", question: "Singularul cuvântului 'mese' este...", answer: ["masă", "masa"], hint: "Singular nearticulat" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "substantiv_c2", question: "Capitala României este...", answer: ["București", "Bucuresti"], hint: "Substantiv propriu" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "substantiv_c2", question: "Singularul cuvântului 'copii' este...", answer: ["copil"], hint: "Singular nearticulat" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "substantiv_c2", question: "Cum se scrie cuvântul pentru apa care cade din cer?", answer: ["ploaie"], hint: "Substantiv comun, feminin" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "substantiv_c2", question: "Pluralul cuvântului 'pisică' este...", answer: ["pisici"], hint: "Plural nearticulat" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },

    verb_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const tip = Math.floor(rng() * 5);
        if (tip === 0) {
          const v = pick(VERBE.actiuni, rng);
          const wrong = [pick(SUBSTANTIVE.comune, rng), pick(ADJECTIVE.lista, rng), pick(SUBSTANTIVE.proprii, rng)];
          mcqs.push(createMCQ("parti_vorbire_c2", "verb_c2", "Care cuvânt este un VERB (arată o acțiune)?", v.verb, wrong, rng));
        } else if (tip === 1) {
          const data = pick(VERBE.timpuri, rng);
          const wrong = shuffle(VERBE.timpuri, rng).filter(t => t.trecut !== data.trecut).slice(0, 3).map(t => t.trecut);
          mcqs.push(createMCQ("parti_vorbire_c2", "verb_c2", `Care este TRECUTUL verbului '${data.prezent}'?`, data.trecut, wrong, rng));
        } else if (tip === 2) {
          const data = pick(VERBE.timpuri, rng);
          const wrong = shuffle(VERBE.timpuri, rng).filter(t => t.viitor !== data.viitor).slice(0, 3).map(t => t.viitor);
          mcqs.push(createMCQ("parti_vorbire_c2", "verb_c2", `Care este VIITORUL verbului '${data.prezent}'?`, data.viitor, wrong, rng));
        } else if (tip === 3) {
          const data = pick(VERBE.timpuri, rng);
          const choices = [
            { label: "Prezent", isCorrect: true },
            { label: "Trecut", isCorrect: false },
            { label: "Viitor", isCorrect: false },
          ];
          const correctTime = pick(choices.filter(c => c.isCorrect), rng);
          let form = data.prezent;
          if (rng() > 0.5) { form = data.trecut; correctTime.label = "Trecut"; }
          else if (rng() > 0.7) { form = data.viitor; correctTime.label = "Viitor"; }
          const wrong = ["Prezent", "Trecut", "Viitor", "Infinitiv"].filter(t => t !== correctTime.label);
          mcqs.push(createMCQ("parti_vorbire_c2", "verb_c2", `La ce TIMP este verbul din propoziția: '${form}'?`, correctTime.label, wrong, rng));
        } else {
          const v = pick(VERBE.actiuni, rng);
          const otherInf = shuffle(VERBE.actiuni, rng).filter(x => x.inf !== v.inf).slice(0, 3).map(x => x.inf);
          mcqs.push(createMCQ("parti_vorbire_c2", "verb_c2", `Care este INFINITIVUL verbului '${v.verb}'?`, v.inf, otherInf, rng));
        }
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "verb_c2", question: "Infinitivul verbului 'citește' este...", answer: ["a citi"], hint: "Infinitiv lung" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "verb_c2", question: "Trecutul verbului 'merge' este...", answer: ["a mers"], hint: "Perfect compus" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "verb_c2", question: "Completează: 'Copilul ... în parc.'", answer: ["aleargă", "alerga"], hint: "Prezent, persoana a 3-a" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "verb_c2", question: "Viitorul verbului 'scrie' este...", answer: ["va scrie"], hint: "va + infinitiv scurt" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "verb_c2", question: "Completează: 'El ... o poveste frumoasă.'", answer: ["scrie"], hint: "Prezent, persoana a 3-a" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "verb_c2", question: "Infinitivul verbului 'dansează' este...", answer: ["a dansa"], hint: "Infinitiv lung" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "verb_c2", question: "Trecutul verbului 'cântă' este...", answer: ["a cântat", "a cantat"], hint: "Perfect compus" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "verb_c2", question: "Viitorul verbului 'aleargă' este...", answer: ["va alerga"], hint: "va + infinitiv scurt" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "verb_c2", question: "Viitorul verbului 'doarme' este...", answer: ["va dormi"], hint: "va + infinitiv scurt" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "verb_c2", question: "Completează: 'Copiii ... în parc.'", answer: ["aleargă", "alerga"], hint: "Prezent, persoana a 3-a plural" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },

    adjectiv_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const tip = Math.floor(rng() * 4);
        if (tip === 0) {
          const adj = pick(ADJECTIVE.lista, rng);
          const wrong = [pick(SUBSTANTIVE.comune, rng), pick(VERBE.actiuni, rng).verb, pick(SUBSTANTIVE.proprii, rng)];
          mcqs.push(createMCQ("parti_vorbire_c2", "adjectiv_c2", "Care cuvânt este un ADJECTIV (arată cum este)?", adj, wrong, rng));
        } else if (tip === 1) {
          const pair = pick(ADJECTIVE.perechi, rng);
          const wrongAdj = shuffle(ADJECTIVE.lista, rng).filter(a => a !== pair.adj).slice(0, 3);
          mcqs.push(createMCQ("parti_vorbire_c2", "adjectiv_c2", `Care adjectiv descrie cel mai bine cuvântul '${pair.subst}'?`, pair.adj, wrongAdj, rng));
        } else if (tip === 2) {
          const subst = pick(SUBSTANTIVE.comune, rng);
          const verb = pick(VERBE.actiuni, rng).verb;
          const adj = pick(ADJECTIVE.lista, rng);
          mcqs.push(createMCQ("parti_vorbire_c2", "adjectiv_c2", `În propoziția 'Copilul ${adj} ${verb}', care cuvânt este adjectiv?`, adj, [subst, verb, "copilul"], rng));
        } else {
          const correct = pick(ADJECTIVE.lista, rng);
          const wrong = shuffle(SUBSTANTIVE.comune, rng).slice(0, 3);
          mcqs.push(createMCQ("parti_vorbire_c2", "adjectiv_c2", "Care cuvânt răspunde la întrebarea 'CUM ESTE?'", correct, wrong, rng));
        }
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "adjectiv_c2", question: "Opusul cuvântului 'mic' este...", answer: ["mare"], hint: "Adjectiv antonim" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "adjectiv_c2", question: "Completează: 'Un caiet ... este ușor de purtat.'", answer: ["mic"], hint: "Adjectiv de dimensiune" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "adjectiv_c2", question: "Cum este iarba? (culoare)", answer: ["verde"], hint: "Adjectiv de culoare" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "adjectiv_c2", question: "Opusul cuvântului 'cald' este...", answer: ["rece"], hint: "Adjectiv antonim" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "adjectiv_c2", question: "Opusul cuvântului 'dulce' este...", answer: ["amar", "acru"], hint: "Adjectiv de gust" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "adjectiv_c2", question: "Opusul cuvântului 'mare' este...", answer: ["mic"], hint: "Adjectiv antonim" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "adjectiv_c2", question: "Cum este soarele? (temperatură)", answer: ["cald"], hint: "Adjectiv de temperatură" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "adjectiv_c2", question: "Cum este un elev care știe toate lecțiile?", answer: ["deștept", "destept"], hint: "Adjectiv de calitate" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "adjectiv_c2", question: "Cum este albina care muncește toată ziua?", answer: ["harnică", "harnica"], hint: "Adjectiv feminin" },
        { type: "typing", topic: "parti_vorbire_c2", subtopic: "adjectiv_c2", question: "Opusul cuvântului 'nou' este...", answer: ["vechi"], hint: "Adjectiv antonim" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },
  },

  // ══════════════ ORTOGRAFIE ══════════════

  ortografie_c2: {
    a_i_reguli_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(ORTOGRAFIE.aiReguli, rng);
        mcqs.push(createMCQ("ortografie_c2", "a_i_reguli_c2", "Care formă este scrisă CORECT?", data.correct, data.wrong, rng));
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "ortografie_c2", subtopic: "a_i_reguli_c2", question: "Cum se scrie corect: animalul care latră?", answer: ["câine", "caine"], hint: "â după consoană" },
        { type: "typing", topic: "ortografie_c2", subtopic: "a_i_reguli_c2", question: "Cum se scrie corect: hrana făcută din grâu?", answer: ["pâine", "paine"], hint: "â după consoană" },
        { type: "typing", topic: "ortografie_c2", subtopic: "a_i_reguli_c2", question: "Cum se scrie corect: cetățean al României?", answer: ["român", "roman"], hint: "â după consoană" },
        { type: "typing", topic: "ortografie_c2", subtopic: "a_i_reguli_c2", question: "Cum se scrie corect: lichidul roșu din corp?", answer: ["sânge", "sange"], hint: "â după consoană" },
        { type: "typing", topic: "ortografie_c2", subtopic: "a_i_reguli_c2", question: "Cum se scrie corect: verbul care înseamnă a merge în jos?", answer: ["coborî", "cobori"], hint: "î la finalul verbului" },
        { type: "typing", topic: "ortografie_c2", subtopic: "a_i_reguli_c2", question: "Cum se scrie corect: sursa de apă săpată în pământ?", answer: ["fântână", "fantana"], hint: "â în mijlocul cuvântului" },
        { type: "typing", topic: "ortografie_c2", subtopic: "a_i_reguli_c2", question: "Cum se scrie corect: verbul care înseamnă a porni, a demara?", answer: ["începe", "incepe"], hint: "în- la începutul cuvântului" },
        { type: "typing", topic: "ortografie_c2", subtopic: "a_i_reguli_c2", question: "Cum se scrie corect: ce mâncăm zilnic?", answer: ["mâncare", "mancare"], hint: "â după consoană" },
        { type: "typing", topic: "ortografie_c2", subtopic: "a_i_reguli_c2", question: "Cum se scrie corect: cel care este mare, ÎNALT?", answer: ["înalt", "inalt"], hint: "în- la începutul cuvântului" },
        { type: "typing", topic: "ortografie_c2", subtopic: "a_i_reguli_c2", question: "Cum se scrie corect: verbul care înseamnă a decide?", answer: ["hotărî", "hotari"], hint: "î la finalul verbului" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },
    sa_s_a_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(ORTOGRAFIE.saSa, rng);
        mcqs.push(createMCQ("ortografie_c2", "sa_s_a_c2", `Completează: '${data.sentence}'`, data.correct, data.wrong, rng));
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "ortografie_c2", subtopic: "sa_s_a_c2", question: "Completează: 'Maria ... dus la școală.'", answer: ["s-a"], hint: "se + a = s-a (verb)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sa_s_a_c2", question: "Completează: 'Este ... carte.'", answer: ["sa"], hint: "a sa = sa (pronume posesiv)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sa_s_a_c2", question: "Completează: 'Copilul ... trezit devreme.'", answer: ["s-a"], hint: "se + a = s-a (verb)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sa_s_a_c2", question: "Completează: 'A luat ... minge.'", answer: ["sa"], hint: "a sa = sa (pronume posesiv)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sa_s_a_c2", question: "Completează: 'Pisica ... ascuns sub pat.'", answer: ["s-a"], hint: "se + a = s-a (verb)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sa_s_a_c2", question: "Completează: 'A pierdut ... cheie.'", answer: ["sa"], hint: "a sa = sa (pronume posesiv)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sa_s_a_c2", question: "Completează: 'Ion ... jucat în parc.'", answer: ["s-a"], hint: "se + a = s-a (verb)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sa_s_a_c2", question: "Completează: 'Mama ... a venit acasă.'", answer: ["sa"], hint: "a sa = sa (pronume posesiv)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sa_s_a_c2", question: "Completează: 'Elevul ... pregătit de test.'", answer: ["s-a"], hint: "se + a = s-a (verb)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sa_s_a_c2", question: "Completează: 'A văzut ... prietenă.'", answer: ["sa"], hint: "a sa = sa (pronume posesiv)" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },
    ia_i_a_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(ORTOGRAFIE.iaIa, rng);
        mcqs.push(createMCQ("ortografie_c2", "ia_i_a_c2", `Completează: '${data.sentence}'`, data.correct, data.wrong, rng));
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "ortografie_c2", subtopic: "ia_i_a_c2", question: "Completează: 'Mama ... dat o carte.'", answer: ["i-a"], hint: "îi + a = i-a (pronume + aux)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "ia_i_a_c2", question: "Completează: 'El ... cartea de pe masă.'", answer: ["ia"], hint: "ia = verb (a lua)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "ia_i_a_c2", question: "Completează: 'Bunica ... spus o poveste.'", answer: ["i-a"], hint: "îi + a = i-a (pronume + aux)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "ia_i_a_c2", question: "Completează: 'Ana ... creioanele de pe bancă.'", answer: ["ia"], hint: "ia = verb (a lua)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "ia_i_a_c2", question: "Completează: 'Profesoara ... explicat tema.'", answer: ["i-a"], hint: "îi + a = i-a (pronume + aux)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "ia_i_a_c2", question: "Completează: 'Maria ... caietul și pleacă.'", answer: ["ia"], hint: "ia = verb (a lua)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "ia_i_a_c2", question: "Completează: 'Tata ... cumpărat o jucărie.'", answer: ["i-a"], hint: "îi + a = i-a (pronume + aux)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "ia_i_a_c2", question: "Completează: 'El ... mingea din dulap.'", answer: ["ia"], hint: "ia = verb (a lua)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "ia_i_a_c2", question: "Completează: 'Colegul ... invitat la petrecere.'", answer: ["i-a"], hint: "îi + a = i-a (pronume + aux)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "ia_i_a_c2", question: "Completează: 'Sofia ... găsit cheia mamei.'", answer: ["i-a"], hint: "îi + a = i-a (pronume + aux)" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },
    sau_s_au_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(ORTOGRAFIE.sauSau, rng);
        mcqs.push(createMCQ("ortografie_c2", "sau_s_au_c2", `Completează: '${data.sentence}'`, data.correct, data.wrong, rng));
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "ortografie_c2", subtopic: "sau_s_au_c2", question: "Completează: 'Copiii ... jucat în parc.'", answer: ["s-au"], hint: "se + au = s-au (verb)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sau_s_au_c2", question: "Completează: 'Vrei ceai ... cafea?'", answer: ["sau"], hint: "sau = conjuncție (ori)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sau_s_au_c2", question: "Completează: 'Elevii ... pregătit de lecție.'", answer: ["s-au"], hint: "se + au = s-au (verb)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sau_s_au_c2", question: "Completează: 'Mergi pe jos ... cu autobuzul?'", answer: ["sau"], hint: "sau = conjuncție (ori)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sau_s_au_c2", question: "Completează: 'Păsările ... ascuns de ploaie.'", answer: ["s-au"], hint: "se + au = s-au (verb)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sau_s_au_c2", question: "Completează: 'Doi ... trei copii au venit.'", answer: ["sau"], hint: "sau = conjuncție (ori)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sau_s_au_c2", question: "Completează: 'Fetele ... întors de la școală.'", answer: ["s-au"], hint: "se + au = s-au (verb)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sau_s_au_c2", question: "Completează: 'Citești ... te joci?'", answer: ["sau"], hint: "sau = conjuncție (ori)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sau_s_au_c2", question: "Completează: 'Băieții ... întors de la joacă.'", answer: ["s-au"], hint: "se + au = s-au (verb)" },
        { type: "typing", topic: "ortografie_c2", subtopic: "sau_s_au_c2", question: "Completează: 'Pleci cu noi ... rămâi acasă?'", answer: ["sau"], hint: "sau = conjuncție (ori)" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },
  },

  // ══════════════ PROPOZIȚIA ══════════════

  propozitia_c2: {
    subiect_predicat_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(PROPOZITII.subiectPredicat, rng);
        if (rng() > 0.5) {
          const wrong = shuffle(PROPOZITII.subiectPredicat, rng).filter(p => p.subiect !== data.subiect).slice(0, 2).map(p => p.subiect);
          wrong.push(data.predicat);
          mcqs.push(createMCQ("propozitia_c2", "subiect_predicat_c2", `Care este SUBIECTUL în: '${data.prop}'?`, data.subiect, wrong, rng));
        } else {
          const wrong = shuffle(PROPOZITII.subiectPredicat, rng).filter(p => p.predicat !== data.predicat).slice(0, 2).map(p => p.predicat);
          wrong.push(data.subiect);
          mcqs.push(createMCQ("propozitia_c2", "subiect_predicat_c2", `Care este PREDICATUL în: '${data.prop}'?`, data.predicat, wrong, rng));
        }
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "propozitia_c2", subtopic: "subiect_predicat_c2", question: "Subiectul propoziției 'Maria citește' este...", answer: ["Maria"], hint: "CINE citește?" },
        { type: "typing", topic: "propozitia_c2", subtopic: "subiect_predicat_c2", question: "Predicatul propoziției 'Câinele aleargă' este...", answer: ["aleargă", "alerga"], hint: "CE FACE câinele?" },
        { type: "typing", topic: "propozitia_c2", subtopic: "subiect_predicat_c2", question: "Scrie subiectul: 'Pisica doarme.'", answer: ["Pisica"], hint: "CINE doarme?" },
        { type: "typing", topic: "propozitia_c2", subtopic: "subiect_predicat_c2", question: "Scrie predicatul: 'Copilul mănâncă.'", answer: ["mănâncă", "mananca"], hint: "CE FACE copilul?" },
        { type: "typing", topic: "propozitia_c2", subtopic: "subiect_predicat_c2", question: "Subiectul din 'Elena pictează un tablou' este...", answer: ["Elena"], hint: "CINE pictează?" },
        { type: "typing", topic: "propozitia_c2", subtopic: "subiect_predicat_c2", question: "Predicatul din 'Păsările cântă frumos' este...", answer: ["cântă", "canta"], hint: "CE FAC păsările?" },
        { type: "typing", topic: "propozitia_c2", subtopic: "subiect_predicat_c2", question: "Scrie subiectul: 'Bunica gătește supa.'", answer: ["Bunica"], hint: "CINE gătește?" },
        { type: "typing", topic: "propozitia_c2", subtopic: "subiect_predicat_c2", question: "Scrie predicatul: 'Elevii ascultă lecția.'", answer: ["ascultă", "asculta"], hint: "CE FAC elevii?" },
        { type: "typing", topic: "propozitia_c2", subtopic: "subiect_predicat_c2", question: "Subiectul din 'Ana dansează frumos' este...", answer: ["Ana"], hint: "CINE dansează?" },
        { type: "typing", topic: "propozitia_c2", subtopic: "subiect_predicat_c2", question: "Predicatul din 'Tata conduce mașina' este...", answer: ["conduce"], hint: "CE FACE tata?" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },
    tipuri_prop_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
      const tipuri = ["Enunțiativă", "Interogativă", "Exclamativă", "Imperativă"];
      for (let i = 0; i < 30; i++) {
        const data = pick(PROPOZITII.tipuri, rng);
        const wrong = tipuri.filter(t => t !== data.tip);
        mcqs.push(createMCQ("propozitia_c2", "tipuri_prop_c2", `Ce tip de propoziție este: '${data.prop}'?`, data.tip, wrong, rng));
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "propozitia_c2", subtopic: "tipuri_prop_c2", question: "Ce tip de propozitie este: Ana merge la scoala.?", answer: ["Enuntiativa", "enuntiativa", "Enunțiativă"], hint: "Se termina cu punct" },
        { type: "typing", topic: "propozitia_c2", subtopic: "tipuri_prop_c2", question: "Ce tip de propozitie este: Unde mergi??", answer: ["Interogativa", "interogativa", "Interogativă"], hint: "Se termina cu semnul intrebarii" },
        { type: "typing", topic: "propozitia_c2", subtopic: "tipuri_prop_c2", question: "Ce tip de propozitie este: Ce frumos este!?", answer: ["Exclamativa", "exclamativa", "Exclamativă"], hint: "Exprima o emotie" },
        { type: "typing", topic: "propozitia_c2", subtopic: "tipuri_prop_c2", question: "Ce tip de propozitie este: Vino aici!?", answer: ["Imperativa", "imperativa", "Imperativă"], hint: "Exprima un ordin" },
        { type: "typing", topic: "propozitia_c2", subtopic: "tipuri_prop_c2", question: "Ce tip de propozitie este: Ieri a plouat.?", answer: ["Enuntiativa", "enuntiativa", "Enunțiativă"], hint: "Constata un fapt" },
        { type: "typing", topic: "propozitia_c2", subtopic: "tipuri_prop_c2", question: "Ce tip de propozitie este: Cine a venit??", answer: ["Interogativa", "interogativa", "Interogativă"], hint: "Pune o intrebare" },
        { type: "typing", topic: "propozitia_c2", subtopic: "tipuri_prop_c2", question: "Ce tip de propozitie este: Ce bine e afara!?", answer: ["Exclamativa", "exclamativa", "Exclamativă"], hint: "Exprima entuziasm" },
        { type: "typing", topic: "propozitia_c2", subtopic: "tipuri_prop_c2", question: "Ce tip de propozitie este: Deschide usa!?", answer: ["Imperativa", "imperativa", "Imperativă"], hint: "Exprima un ordin" },
        { type: "typing", topic: "propozitia_c2", subtopic: "tipuri_prop_c2", question: "Ce tip de propozitie este: Cainele doarme linistit.?", answer: ["Enuntiativa", "enuntiativa", "Enunțiativă"], hint: "Se termina cu punct" },
        { type: "typing", topic: "propozitia_c2", subtopic: "tipuri_prop_c2", question: "Ce tip de propozitie este: Taci din gura!?", answer: ["Imperativa", "imperativa", "Imperativă"], hint: "Exprima un ordin" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },
    punctuatie_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
      const semne = [".", "?", "!", ",", ";"];
      const reguli = [
        { q: "Ce semn punem la sfârșitul unei propoziții obișnuite?", correct: ".", wrong: ["?", "!", ","] },
        { q: "Ce semn punem la sfârșitul unei întrebări?", correct: "?", wrong: [".", "!", ","] },
        { q: "Ce semn punem la sfârșitul unei exclamații?", correct: "!", wrong: [".", "?", ","] },
        { q: "Ce semn punem pentru a separa cuvintele într-o enumerare?", correct: ",", wrong: [".", "?", "!"] },
        { q: "Ce semn punem la sfârșitul unei comenzi?", correct: "!", wrong: [".", "?", ","] },
      ];
      for (let i = 0; i < 30; i++) {
        if (rng() > 0.4) {
          const data = pick(PROPOZITII.tipuri, rng);
          const wrong = semne.filter(s => s !== data.semn);
          mcqs.push(createMCQ("propozitia_c2", "punctuatie_c2", `Ce semn de punctuație punem la sfârșitul propoziției: '${data.prop.slice(0, -1)}'?`, data.semn, wrong, rng));
        } else {
          const r = pick(reguli, rng);
          mcqs.push(createMCQ("propozitia_c2", "punctuatie_c2", r.q, r.correct, r.wrong, rng));
        }
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "propozitia_c2", subtopic: "punctuatie_c2", question: "Ce semn punem la sfârșitul unei propoziții enunțiative?", answer: ["."], hint: "Propoziție care constată un fapt" },
        { type: "typing", topic: "propozitia_c2", subtopic: "punctuatie_c2", question: "Ce semn de punctuație se pune la sfârșitul unei întrebări?", answer: ["?"], hint: "Propoziție interogativă" },
        { type: "typing", topic: "propozitia_c2", subtopic: "punctuatie_c2", question: "Ce semn folosim la sfârșitul unei exclamații?", answer: ["!"], hint: "Propoziție exclamativă sau imperativă" },
        { type: "typing", topic: "propozitia_c2", subtopic: "punctuatie_c2", question: "Cum separăm cuvintele într-o enumerare?", answer: [","], hint: "Virgula separă elementele dintr-o listă" },
        { type: "typing", topic: "propozitia_c2", subtopic: "punctuatie_c2", question: "Ce semn punem la sfârșitul unei comenzi?", answer: ["!"], hint: "Propoziție imperativă" },
        { type: "typing", topic: "propozitia_c2", subtopic: "punctuatie_c2", question: "Completează semnul: 'Unde mergi ...'", answer: ["?"], hint: "Propoziție interogativă" },
        { type: "typing", topic: "propozitia_c2", subtopic: "punctuatie_c2", question: "Completează semnul: 'Ce frumos ...'", answer: ["!"], hint: "Propoziție exclamativă" },
        { type: "typing", topic: "propozitia_c2", subtopic: "punctuatie_c2", question: "Completează semnul: 'Ana merge la școală ...'", answer: ["."], hint: "Propoziție enunțiativă" },
        { type: "typing", topic: "propozitia_c2", subtopic: "punctuatie_c2", question: "Ce semn marchează sfârșitul unui enunț obișnuit?", answer: ["."], hint: "Punct = propoziție enunțiativă" },
        { type: "typing", topic: "propozitia_c2", subtopic: "punctuatie_c2", question: "Ce semn punem când strigăm ceva cu entuziasm?", answer: ["!"], hint: "Propoziție exclamativă" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },
  },

  // ══════════════ TEXTUL ══════════════

  textul_c2: {
    narativ_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
      const parti = [
        { q: "Care este PRIMA parte a unui text narativ?", correct: "Introducerea", wrong: ["Cuprinsul", "Încheierea", "Dialogul"] },
        { q: "În ce parte a textului narativ se dezvoltă acțiunea?", correct: "Cuprinsul", wrong: ["Introducerea", "Încheierea", "Titlul"] },
        { q: "Ce aflăm în INTRODUCEREA unui text narativ?", correct: "Cine, unde, când", wrong: ["Cum se termină", "Morala", "Dialogul"] },
        { q: "Ce se întâmplă în ÎNCHEIEREA unui text narativ?", correct: "Se rezolvă problema", wrong: ["Se prezintă personajele", "Se dezvoltă acțiunea", "Se deschide povestea"] },
        { q: "Câte părți are un text narativ?", correct: "3 (introducere, cuprins, încheiere)", wrong: ["2", "4", "1"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(parti, rng);
        mcqs.push(createMCQ("textul_c2", "narativ_c2", data.q, data.correct, data.wrong, rng));
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "textul_c2", subtopic: "narativ_c2", question: "Scrie prima parte a unui text narativ.", answer: ["introducere"], hint: "Unde, când, cine" },
        { type: "typing", topic: "textul_c2", subtopic: "narativ_c2", question: "Scrie a doua parte a unui text narativ.", answer: ["cuprins"], hint: "Acțiunea principală" },
        { type: "typing", topic: "textul_c2", subtopic: "narativ_c2", question: "Scrie a treia parte a unui text narativ.", answer: ["încheiere", "incheiere"], hint: "Rezolvarea problemei" },
        { type: "typing", topic: "textul_c2", subtopic: "narativ_c2", question: "În ce parte a textului se dezvoltă acțiunea?", answer: ["cuprins"], hint: "A doua parte" },
        { type: "typing", topic: "textul_c2", subtopic: "narativ_c2", question: "Care parte a textului prezintă rezolvarea problemei?", answer: ["încheiere", "incheiere"], hint: "Ultima parte" },
        { type: "typing", topic: "textul_c2", subtopic: "narativ_c2", question: "Un text narativ are câte părți principale?", answer: ["3", "trei"], hint: "Introducere + cuprins + încheiere" },
        { type: "typing", topic: "textul_c2", subtopic: "narativ_c2", question: "Ce aflăm în INTRODUCEREA unui text?", answer: ["cine", "unde", "cand"], hint: "Personajele și locul acțiunii" },
        { type: "typing", topic: "textul_c2", subtopic: "narativ_c2", question: "Completează: 'Textul narativ are 3 părți: introducere, cuprins și ...'", answer: ["încheiere", "incheiere"], hint: "Ultima parte a textului" },
        { type: "typing", topic: "textul_c2", subtopic: "narativ_c2", question: "Care este prima parte dintr-un text narativ?", answer: ["introducere"], hint: "Unde începe povestea" },
        { type: "typing", topic: "textul_c2", subtopic: "narativ_c2", question: "Ce se găsește în CUPRINS?", answer: ["acțiunea", "actiunea"], hint: "Desfășurarea evenimentelor" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },
    personaje_actiuni_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const t = pick(TEXTE_C2, rng);
        const intr = pick(t.intrebari, rng);
        q.push(createMCQ("textul_c2", "personaje_actiuni_c2", `Text: "${t.text}"\n\n${intr.q}`, intr.correct, intr.wrong, rng));
      }
      return q;
    },
    dialog_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const intrebari = [
        { q: "Cum marcăm un dialog în text?", correct: "Cu linia de dialog (–)", wrong: ["Cu punct (.)", "Cu paranteză ()", "Cu asterisc (*)"] },
        { q: "Care semn arată că cineva vorbește într-un text?", correct: "Linia de dialog (–)", wrong: ["Virgula (,)", "Punctul (.)", "Ghilimele ('')"] },
        { q: "Unde punem linia de dialog?", correct: "La începutul fiecărei replici", wrong: ["La sfârșitul frazei", "Doar o dată", "Nicăieri"] },
        { q: "Ce este un DIALOG într-un text?", correct: "Conversația dintre personaje", wrong: ["Titlul textului", "Povestirea autorului", "Morala textului"] },
        { q: "Cum identificăm cine vorbește într-un dialog?", correct: "Se scrie numele sau 'spuse Ana'", wrong: ["Nu se poate ști", "Se ghicește", "Se numără propozițiile"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(intrebari, rng);
        q.push(createMCQ("textul_c2", "dialog_c2", data.q, data.correct, data.wrong, rng));
      }
      return q;
    },
  },

  // ══════════════ VOCABULAR ══════════════

  vocabular_c2: {
    omonime_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(OMONIME, rng);
        if (rng() > 0.5) {
          q.push(createMCQ("vocabular_c2", "omonime_c2",
            `Cuvântul '${data.word}' poate însemna:`,
            `${data.sens1} SAU ${data.sens2}`,
            [`doar ${data.sens1}`, `doar ${data.sens2}`, "nici una din variante"],
            rng));
        } else {
          q.push(createMCQ("vocabular_c2", "omonime_c2",
            `Care cuvânt are MAI MULTE sensuri (este OMONIM)?`,
            data.word,
            shuffle(SUBSTANTIVE.comune.filter(c => !OMONIME.some(o => o.word === c)), rng).slice(0, 3),
            rng));
        }
      }
      return q;
    },
    cuvinte_compuse_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(CUVINTE_COMPUSE, rng);
        if (rng() > 0.5) {
          q.push(createMCQ("vocabular_c2", "cuvinte_compuse_c2",
            "Care cuvânt este COMPUS (format din două sau mai multe cuvinte)?",
            data.compound,
            shuffle(SUBSTANTIVE.comune, rng).slice(0, 3),
            rng));
        } else {
          q.push(createMCQ("vocabular_c2", "cuvinte_compuse_c2",
            `Din ce cuvinte este format '${data.compound}'?`,
            data.parts,
            shuffle(CUVINTE_COMPUSE.filter(c => c.parts !== data.parts), rng).slice(0, 3).map(c => c.parts),
            rng));
        }
      }
      return q;
    },
    expresii_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(EXPRESII, rng);
        q.push(createMCQ("vocabular_c2", "expresii_c2",
          `Ce înseamnă expresia '${data.expr}'?`,
          data.sens, data.wrongSens, rng));
      }
      return q;
    },
  },

  // ══════════════ COMUNICARE ══════════════

  comunicare_c2: {
    dialog_oral_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(POLITETE.formule, rng);
        q.push(createMCQ("comunicare_c2", "dialog_oral_c2",
          `${data.situatie} — care este formula potrivită?`,
          data.correct, data.wrong, rng));
      }
      return q;
    },
    bilet_felicitare_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const intrebari = [
        { q: "Ce conține un BILET?", correct: "Destinatar, mesaj scurt, semnătură", wrong: ["Doar semnătura", "Doar data", "Un desen"] },
        { q: "Ce scriem la începutul unui bilet?", correct: "Numele destinatarului (Dragă Ana,)", wrong: ["Data", "Semnătura", "Un salut informal"] },
        { q: "Ce scriem la sfârșitul unui bilet?", correct: "Semnătura (Al tău, Ion)", wrong: ["Data", "Adresa", "Un desen"] },
        { q: "Ce este o FELICITARE?", correct: "Un mesaj cu o urare pentru o ocazie specială", wrong: ["O scrisoare lungă", "Un bilet de autobuz", "O rețetă"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (rng() > 0.5) {
          const data = pick(intrebari, rng);
          q.push(createMCQ("comunicare_c2", "bilet_felicitare_c2", data.q, data.correct, data.wrong, rng));
        } else {
          const data = pick(BILETE.felicitari, rng);
          const wrong = shuffle(BILETE.felicitari.filter(f => f.formula !== data.formula), rng).slice(0, 3).map(f => f.formula);
          q.push(createMCQ("comunicare_c2", "bilet_felicitare_c2",
            `Ce scriem într-o felicitare de ${data.ocazie}?`,
            data.formula, wrong, rng));
        }
      }
      return q;
    },
  },

  // ══════════════ LECTURĂ ȘI ÎNȚELEGERE ══════════════

  lectura_c2: {
    intelegere_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const t = pick(TEXTE_C2, rng);
        const intr = pick(t.intrebari, rng);
        q.push(createMCQ("lectura_c2", "intelegere_c2",
          `Text: "${t.text}"\n\n${intr.q}`,
          intr.correct, intr.wrong, rng));
      }
      return q;
    },
    succesiune_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(SUCCESIUNI, rng);
        const idx = Math.floor(rng() * data.events.length);
        const ordinal = ["PRIMUL", "AL DOILEA", "AL TREILEA", "ULTIMUL"][idx] || "PRIMUL";
        const correct = data.events[idx];
        const wrong = data.events.filter(e => e !== correct);
        q.push(createMCQ("lectura_c2", "succesiune_c2",
          `Text: "${data.text}"\n\nCe s-a întâmplat ${ordinal}?`,
          correct, wrong, rng));
      }
      return q;
    },
    morala_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(MORALE, rng);
        q.push(createMCQ("lectura_c2", "morala_c2",
          `Text: "${data.text}"\n\nCare este MORALA/ÎNVĂȚĂTURA?`,
          data.morala, data.wrong, rng));
      }
      return q;
    },
  },
};
