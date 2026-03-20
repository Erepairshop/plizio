// ─── ROMANIAN GENERATORS (CLASA a II-a) ─────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a II-a (2nd grade) – parts of speech, spelling, sentence, text, vocabulary, communication, reading

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

// ─── WORD BANKS (NEW) ────────────────────────────────────────────────────────

const PRONUME = {
  personale: [
    { pers: "eu", pl: "noi", gen: "M/F", example: "Eu citesc." },
    { pers: "tu", pl: "voi", gen: "M/F", example: "Tu scrii." },
    { pers: "el", pl: "ei", gen: "M", example: "El aleargă." },
    { pers: "ea", pl: "ele", gen: "F", example: "Ea cântă." },
    { pers: "noi", pl: "noi", gen: "M/F", example: "Noi mergem." },
    { pers: "voi", pl: "voi", gen: "M/F", example: "Voi veniți." },
    { pers: "ei", pl: "ei", gen: "M", example: "Ei joacă." },
    { pers: "ele", pl: "ele", gen: "F", example: "Ele dansează." },
  ],
};

const SINONIME_C2 = [
  { word: "frumos", sin: "chipeș" }, { word: "mare", sin: "uriaș" },
  { word: "mic", sin: "mărunt" }, { word: "rapid", sin: "iute" },
  { word: "trist", sin: "supărat" }, { word: "vesel", sin: "bucuros" },
  { word: "curat", sin: "ordonat" }, { word: "vorbit", sin: "grăit" },
  { word: "drum", sin: "cale" }, { word: "casă", sin: "locuință" },
  { word: "iubit", sin: "îndrăgit" }, { word: "bătrân", sin: "vârstnic" },
  { word: "copil", sin: "prichindel" }, { word: "a merge", sin: "a umbla" },
  { word: "bucurie", sin: "fericire" },
];

const ANTONIME_C2 = [
  { word: "mare", ant: "mic" }, { word: "frumos", ant: "urât" },
  { word: "bun", ant: "rău" }, { word: "rapid", ant: "lent" },
  { word: "cald", ant: "rece" }, { word: "ziuă", ant: "noapte" },
  { word: "sus", ant: "jos" }, { word: "vechi", ant: "nou" },
  { word: "greu", ant: "ușor" }, { word: "tare", ant: "moale" },
  { word: "deschis", ant: "închis" }, { word: "înainte", ant: "înapoi" },
  { word: "vesel", ant: "trist" }, { word: "bogat", ant: "sărac" },
  { word: "lung", ant: "scurt" },
];

const FAMILIA_CUVINTELOR_C2 = [
  { radacina: "carte", familie: ["carte", "cărticică", "cărturar", "librărie", "cărțile"] },
  { radacina: "apă", familie: ["apă", "ploaie", "apos", "înotat", "ape"] },
  { radacina: "casă", familie: ["casă", "căsuță", "casnic", "acasă", "case"] },
  { radacina: "floare", familie: ["floare", "florărie", "florar", "înflorit", "flori"] },
  { radacina: "câmp", familie: ["câmp", "câmpie", "câmpenesc", "câmpuri"] },
];

const ANIMALE_C2 = [
  { animal: "câine", sunet: "lătrat", hrana: "carne", tip: "domestic" },
  { animal: "pisică", sunet: "miorlăit", hrana: "pește", tip: "domestic" },
  { animal: "vaca", sunet: "mugit", hrana: "iarbă", tip: "domestic" },
  { animal: "cal", sunet: "nechezat", hrana: "iarbă", tip: "domestic" },
  { animal: "oaie", sunet: "behăit", hrana: "iarbă", tip: "domestic" },
  { animal: "lup", sunet: "urlet", hrana: "carne", tip: "sălbatic" },
  { animal: "vulpe", sunet: "lătrat subțire", hrana: "carne", tip: "sălbatic" },
  { animal: "urs", sunet: "mormăit", hrana: "omnivor", tip: "sălbatic" },
  { animal: "pasăre", sunet: "cântat", hrana: "semințe", tip: "sălbatic" },
  { animal: "pește", sunet: "-", hrana: "plancton", tip: "acvatic" },
];

const CORPUL_UMAN_C2 = [
  { parte: "inimă", functie: "pompează sângele", sistem: "circulator" },
  { parte: "plămâni", functie: "respirația", sistem: "respirator" },
  { parte: "creier", functie: "gândirea și coordonarea", sistem: "nervos" },
  { parte: "stomac", functie: "digestia alimentelor", sistem: "digestiv" },
  { parte: "ochi", functie: "vederea", sistem: "senzorial" },
  { parte: "urechi", functie: "auzul", sistem: "senzorial" },
  { parte: "os", functie: "susținerea corpului", sistem: "osos" },
  { parte: "mușchi", functie: "mișcarea", sistem: "muscular" },
];

const FAMILIE_C2 = [
  { relatie: "mama", relatie_inv: "fiică/fiu", gen: "F" },
  { relatie: "tata", relatie_inv: "fiică/fiu", gen: "M" },
  { relatie: "bunica", relatie_inv: "nepot/nepoată", gen: "F" },
  { relatie: "bunicul", relatie_inv: "nepot/nepoată", gen: "M" },
  { relatie: "sora", relatie_inv: "frate/soră", gen: "F" },
  { relatie: "fratele", relatie_inv: "frate/soră", gen: "M" },
  { relatie: "mătușa", relatie_inv: "nepot/nepoată de unchi", gen: "F" },
  { relatie: "unchiul", relatie_inv: "nepot/nepoată de unchi", gen: "M" },
];

const ALIMENTE_C2 = {
  fructe: ["măr", "pară", "prună", "cireașă", "strugure", "portocală", "banană", "căpșună"],
  legume: ["morcov", "roșie", "castraveți", "cartofi", "ceapă", "spanac", "varză", "fasole"],
  lactate: ["lapte", "brânză", "iaurt", "unt", "smântână"],
  proteine: ["carne", "pește", "ouă", "fasole"],
};

const ANOTIMPURI_C2 = [
  { anotimp: "Primăvara", luni: ["martie", "aprilie", "mai"], caracteristici: ["flori", "ploaie", "cald", "curcubeu"] },
  { anotimp: "Vara", luni: ["iunie", "iulie", "august"], caracteristici: ["cald", "soare", "vacanță", "plajă"] },
  { anotimp: "Toamna", luni: ["septembrie", "octombrie", "noiembrie"], caracteristici: ["frunze colorate", "ploaie", "frig", "recolte"] },
  { anotimp: "Iarna", luni: ["decembrie", "ianuarie", "februarie"], caracteristici: ["ninsoare", "frig", "gheață", "Crăciun"] },
];

const MESERII_C2 = [
  { meserie: "medic", activitate: "tratează bolnavii", loc: "spital" },
  { meserie: "profesor", activitate: "predă elevilor", loc: "școală" },
  { meserie: "pompier", activitate: "stinge incendii", loc: "stație de pompieri" },
  { meserie: "bucătar", activitate: "pregătește mâncarea", loc: "restaurant" },
  { meserie: "pilot", activitate: "pilotează avioane", loc: "aeroport" },
  { meserie: "polițist", activitate: "menține ordinea", loc: "secție de poliție" },
  { meserie: "fermier", activitate: "cultivă pământul", loc: "fermă" },
  { meserie: "inginer", activitate: "proiectează construcții", loc: "birou/șantier" },
];

// ─── GENERATORS ─────────────────────────────────────────────────────────────

export const C2_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {

  // ══════════════ PĂRȚI DE VORBIRE ══════════════

  parti_vorbire_c2: {
    substantiv_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const tip = Math.floor(rng() * 5);
        if (tip === 0) {
          const correct = pick(SUBSTANTIVE.comune, rng);
          const wrong = shuffle(VERBE.actiuni, rng).slice(0, 2).map(v => v.verb);
          wrong.push(pick(ADJECTIVE.lista, rng));
          q.push(createMCQ("parti_vorbire_c2", "substantiv_c2", "Care cuvânt este un SUBSTANTIV?", correct, wrong, rng));
        } else if (tip === 1) {
          const correct = pick(SUBSTANTIVE.proprii, rng);
          const wrong = shuffle(SUBSTANTIVE.comune, rng).slice(0, 3);
          q.push(createMCQ("parti_vorbire_c2", "substantiv_c2", "Care este un SUBSTANTIV PROPRIU (nume)?", correct, wrong, rng));
        } else if (tip === 2) {
          const data = pick(SUBSTANTIVE.plurale, rng);
          const allPl = SUBSTANTIVE.plurale.filter(p => p.pl !== data.pl).map(p => p.pl);
          q.push(createMCQ("parti_vorbire_c2", "substantiv_c2", `Care este PLURALUL cuvântului '${data.sg}'?`, data.pl, shuffle(allPl, rng).slice(0, 3), rng));
        } else if (tip === 3) {
          const data = pick(SUBSTANTIVE.plurale, rng);
          const allSg = SUBSTANTIVE.plurale.filter(p => p.sg !== data.sg).map(p => p.sg);
          q.push(createMCQ("parti_vorbire_c2", "substantiv_c2", `Care este SINGULARUL cuvântului '${data.pl}'?`, data.sg, shuffle(allSg, rng).slice(0, 3), rng));
        } else {
          const comun = pick(SUBSTANTIVE.comune, rng);
          const wrong = shuffle(SUBSTANTIVE.proprii, rng).slice(0, 3);
          q.push(createMCQ("parti_vorbire_c2", "substantiv_c2", "Care este un SUBSTANTIV COMUN?", comun, wrong, rng));
        }
      }
      return q;
    },

    verb_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const tip = Math.floor(rng() * 5);
        if (tip === 0) {
          const v = pick(VERBE.actiuni, rng);
          const wrong = [pick(SUBSTANTIVE.comune, rng), pick(ADJECTIVE.lista, rng), pick(SUBSTANTIVE.proprii, rng)];
          q.push(createMCQ("parti_vorbire_c2", "verb_c2", "Care cuvânt este un VERB (arată o acțiune)?", v.verb, wrong, rng));
        } else if (tip === 1) {
          const data = pick(VERBE.timpuri, rng);
          const wrong = shuffle(VERBE.timpuri, rng).filter(t => t.trecut !== data.trecut).slice(0, 3).map(t => t.trecut);
          q.push(createMCQ("parti_vorbire_c2", "verb_c2", `Care este TRECUTUL verbului '${data.prezent}'?`, data.trecut, wrong, rng));
        } else if (tip === 2) {
          const data = pick(VERBE.timpuri, rng);
          const wrong = shuffle(VERBE.timpuri, rng).filter(t => t.viitor !== data.viitor).slice(0, 3).map(t => t.viitor);
          q.push(createMCQ("parti_vorbire_c2", "verb_c2", `Care este VIITORUL verbului '${data.prezent}'?`, data.viitor, wrong, rng));
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
          q.push(createMCQ("parti_vorbire_c2", "verb_c2", `La ce TIMP este verbul din propoziția: '${form}'?`, correctTime.label, wrong, rng));
        } else {
          const v = pick(VERBE.actiuni, rng);
          const otherInf = shuffle(VERBE.actiuni, rng).filter(x => x.inf !== v.inf).slice(0, 3).map(x => x.inf);
          q.push(createMCQ("parti_vorbire_c2", "verb_c2", `Care este INFINITIVUL verbului '${v.verb}'?`, v.inf, otherInf, rng));
        }
      }
      return q;
    },

    adjectiv_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const tip = Math.floor(rng() * 4);
        if (tip === 0) {
          const adj = pick(ADJECTIVE.lista, rng);
          const wrong = [pick(SUBSTANTIVE.comune, rng), pick(VERBE.actiuni, rng).verb, pick(SUBSTANTIVE.proprii, rng)];
          q.push(createMCQ("parti_vorbire_c2", "adjectiv_c2", "Care cuvânt este un ADJECTIV (arată cum este)?", adj, wrong, rng));
        } else if (tip === 1) {
          const pair = pick(ADJECTIVE.perechi, rng);
          const wrongAdj = shuffle(ADJECTIVE.lista, rng).filter(a => a !== pair.adj).slice(0, 3);
          q.push(createMCQ("parti_vorbire_c2", "adjectiv_c2", `Care adjectiv descrie cel mai bine cuvântul '${pair.subst}'?`, pair.adj, wrongAdj, rng));
        } else if (tip === 2) {
          const subst = pick(SUBSTANTIVE.comune, rng);
          const verb = pick(VERBE.actiuni, rng).verb;
          const adj = pick(ADJECTIVE.lista, rng);
          q.push(createMCQ("parti_vorbire_c2", "adjectiv_c2", `În propoziția 'Copilul ${adj} ${verb}', care cuvânt este adjectiv?`, adj, [subst, verb, "copilul"], rng));
        } else {
          const correct = pick(ADJECTIVE.lista, rng);
          const wrong = shuffle(SUBSTANTIVE.comune, rng).slice(0, 3);
          q.push(createMCQ("parti_vorbire_c2", "adjectiv_c2", "Care cuvânt răspunde la întrebarea 'CUM ESTE?'", correct, wrong, rng));
        }
      }
      return q;
    },
  },

  // ══════════════ ORTOGRAFIE ══════════════

  ortografie_c2: {
    a_i_reguli_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(ORTOGRAFIE.aiReguli, rng);
        q.push(createMCQ("ortografie_c2", "a_i_reguli_c2", "Care formă este scrisă CORECT?", data.correct, data.wrong, rng));
      }
      return q;
    },
    sa_s_a_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(ORTOGRAFIE.saSa, rng);
        q.push(createMCQ("ortografie_c2", "sa_s_a_c2", `Completează: '${data.sentence}'`, data.correct, data.wrong, rng));
      }
      return q;
    },
    ia_i_a_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(ORTOGRAFIE.iaIa, rng);
        q.push(createMCQ("ortografie_c2", "ia_i_a_c2", `Completează: '${data.sentence}'`, data.correct, data.wrong, rng));
      }
      return q;
    },
    sau_s_au_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(ORTOGRAFIE.sauSau, rng);
        q.push(createMCQ("ortografie_c2", "sau_s_au_c2", `Completează: '${data.sentence}'`, data.correct, data.wrong, rng));
      }
      return q;
    },
  },

  // ══════════════ PROPOZIȚIA ══════════════

  propozitia_c2: {
    subiect_predicat_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(PROPOZITII.subiectPredicat, rng);
        if (rng() > 0.5) {
          const wrong = shuffle(PROPOZITII.subiectPredicat, rng).filter(p => p.subiect !== data.subiect).slice(0, 2).map(p => p.subiect);
          wrong.push(data.predicat);
          q.push(createMCQ("propozitia_c2", "subiect_predicat_c2", `Care este SUBIECTUL în: '${data.prop}'?`, data.subiect, wrong, rng));
        } else {
          const wrong = shuffle(PROPOZITII.subiectPredicat, rng).filter(p => p.predicat !== data.predicat).slice(0, 2).map(p => p.predicat);
          wrong.push(data.subiect);
          q.push(createMCQ("propozitia_c2", "subiect_predicat_c2", `Care este PREDICATUL în: '${data.prop}'?`, data.predicat, wrong, rng));
        }
      }
      return q;
    },
    tipuri_prop_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const tipuri = ["Enunțiativă", "Interogativă", "Exclamativă", "Imperativă"];
      for (let i = 0; i < 30; i++) {
        const data = pick(PROPOZITII.tipuri, rng);
        const wrong = tipuri.filter(t => t !== data.tip);
        q.push(createMCQ("propozitia_c2", "tipuri_prop_c2", `Ce tip de propoziție este: '${data.prop}'?`, data.tip, wrong, rng));
      }
      return q;
    },
    punctuatie_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
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
          q.push(createMCQ("propozitia_c2", "punctuatie_c2", `Ce semn de punctuație punem la sfârșitul propoziției: '${data.prop.slice(0, -1)}'?`, data.semn, wrong, rng));
        } else {
          const r = pick(reguli, rng);
          q.push(createMCQ("propozitia_c2", "punctuatie_c2", r.q, r.correct, r.wrong, rng));
        }
      }
      return q;
    },
  },

  // ══════════════ TEXTUL ══════════════

  textul_c2: {
    narativ_c2: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const parti = [
        { q: "Care este PRIMA parte a unui text narativ?", correct: "Introducerea", wrong: ["Cuprinsul", "Încheierea", "Dialogul"] },
        { q: "În ce parte a textului narativ se dezvoltă acțiunea?", correct: "Cuprinsul", wrong: ["Introducerea", "Încheierea", "Titlul"] },
        { q: "Ce aflăm în INTRODUCEREA unui text narativ?", correct: "Cine, unde, când", wrong: ["Cum se termină", "Morala", "Dialogul"] },
        { q: "Ce se întâmplă în ÎNCHEIEREA unui text narativ?", correct: "Se rezolvă problema", wrong: ["Se prezintă personajele", "Se dezvoltă acțiunea", "Se deschide povestea"] },
        { q: "Câte părți are un text narativ?", correct: "3 (introducere, cuprins, încheiere)", wrong: ["2", "4", "1"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(parti, rng);
        q.push(createMCQ("textul_c2", "narativ_c2", data.q, data.correct, data.wrong, rng));
      }
      return q;
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
