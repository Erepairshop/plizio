// ─── ROMANIAN GENERATORS (CLASA a III-a) ─────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa a III-a (3rd grade) – substantiv (gen, număr, caz), verb (conjugare),
// adjectiv (acord), propoziția dezvoltată, vocabular avansat, lectură

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

const SUBST_GEN = [
  { subst: "câine", gen: "masculin" },
  { subst: "copac", gen: "masculin" },
  { subst: "munte", gen: "masculin" },
  { subst: "copil", gen: "masculin" },
  { subst: "lup", gen: "masculin" },
  { subst: "casă", gen: "feminin" },
  { subst: "carte", gen: "feminin" },
  { subst: "masă", gen: "feminin" },
  { subst: "floare", gen: "feminin" },
  { subst: "pisică", gen: "feminin" },
  { subst: "pasăre", gen: "feminin" },
  { subst: "grădină", gen: "feminin" },
  { subst: "scaun", gen: "neutru" },
  { subst: "caiet", gen: "neutru" },
  { subst: "stilou", gen: "neutru" },
  { subst: "tablou", gen: "neutru" },
  { subst: "nor", gen: "neutru" },
  { subst: "sat", gen: "neutru" },
  { subst: "drum", gen: "neutru" },
  { subst: "orizont", gen: "neutru" },
];

const SUBST_NR = [
  { sg: "om", pl: "oameni" },
  { sg: "copil", pl: "copii" },
  { sg: "carte", pl: "cărți" },
  { sg: "casă", pl: "case" },
  { sg: "floare", pl: "flori" },
  { sg: "munte", pl: "munți" },
  { sg: "copac", pl: "copaci" },
  { sg: "câine", pl: "câini" },
  { sg: "pasăre", pl: "păsări" },
  { sg: "masă", pl: "mese" },
  { sg: "prieten", pl: "prieteni" },
  { sg: "școală", pl: "școli" },
  { sg: "elev", pl: "elevi" },
  { sg: "profesoară", pl: "profesoare" },
  { sg: "creion", pl: "creioane" },
  { sg: "caiet", pl: "caiete" },
  { sg: "scaun", pl: "scaune" },
  { sg: "nor", pl: "nori" },
  { sg: "lup", pl: "lupi" },
  { sg: "urs", pl: "urși" },
];

const SUBST_CAZ = [
  { prop: "Ana citește.", subst: "Ana", caz: "Nominativ", intrebare: "Cine citește?" },
  { prop: "Ion aleargă în parc.", subst: "Ion", caz: "Nominativ", intrebare: "Cine aleargă?" },
  { prop: "Mama îi dă Anei o carte.", subst: "Anei", caz: "Dativ", intrebare: "Cui îi dă mama?" },
  { prop: "Cartea Mariei este nouă.", subst: "Mariei", caz: "Genitiv", intrebare: "A cui este cartea?" },
  { prop: "Ion cheamă câinele.", subst: "câinele", caz: "Acuzativ", intrebare: "Pe cine cheamă Ion?" },
  { prop: "Mama gătește pentru copii.", subst: "copii", caz: "Dativ", intrebare: "Pentru cine gătește mama?" },
  { prop: "Cartea lui Ion este interesantă.", subst: "lui Ion", caz: "Genitiv", intrebare: "A cui este cartea?" },
  { prop: "Ana hrănește pisica.", subst: "pisica", caz: "Acuzativ", intrebare: "Pe cine hrănește Ana?" },
  { prop: "Profesorul laudă elevii.", subst: "elevii", caz: "Acuzativ", intrebare: "Pe cine laudă profesorul?" },
  { prop: "Bunica îi povestește nepoatei.", subst: "nepoatei", caz: "Dativ", intrebare: "Cui îi povestește bunica?" },
  { prop: "Bicicleta fratelui e roșie.", subst: "fratelui", caz: "Genitiv", intrebare: "A cui este bicicleta?" },
  { prop: "Copiii ajută părinții.", subst: "părinții", caz: "Acuzativ", intrebare: "Pe cine ajută copiii?" },
];

const VERB_CONJUG = [
  { inf: "a merge", eu: "merg", tu: "mergi", el: "merge", noi: "mergem", voi: "mergeți", ei: "merg" },
  { inf: "a citi", eu: "citesc", tu: "citești", el: "citește", noi: "citim", voi: "citiți", ei: "citesc" },
  { inf: "a scrie", eu: "scriu", tu: "scrii", el: "scrie", noi: "scriem", voi: "scrieți", ei: "scriu" },
  { inf: "a mânca", eu: "mănânc", tu: "mănânci", el: "mănâncă", noi: "mâncăm", voi: "mâncați", ei: "mănâncă" },
  { inf: "a vorbi", eu: "vorbesc", tu: "vorbești", el: "vorbește", noi: "vorbim", voi: "vorbiți", ei: "vorbesc" },
  { inf: "a cânta", eu: "cânt", tu: "cânți", el: "cântă", noi: "cântăm", voi: "cântați", ei: "cântă" },
  { inf: "a alerga", eu: "alerg", tu: "alergi", el: "aleargă", noi: "alergăm", voi: "alergați", ei: "aleargă" },
  { inf: "a lucra", eu: "lucrez", tu: "lucrezi", el: "lucrează", noi: "lucrăm", voi: "lucrați", ei: "lucrează" },
  { inf: "a dormi", eu: "dorm", tu: "dormi", el: "doarme", noi: "dormim", voi: "dormiți", ei: "dorm" },
  { inf: "a învăța", eu: "învăț", tu: "înveți", el: "învață", noi: "învățăm", voi: "învățați", ei: "învață" },
  { inf: "a ajuta", eu: "ajut", tu: "ajuți", el: "ajută", noi: "ajutăm", voi: "ajutați", ei: "ajută" },
  { inf: "a iubi", eu: "iubesc", tu: "iubești", el: "iubește", noi: "iubim", voi: "iubiți", ei: "iubesc" },
  { inf: "a plânge", eu: "plâng", tu: "plângi", el: "plânge", noi: "plângem", voi: "plângeți", ei: "plâng" },
  { inf: "a vedea", eu: "văd", tu: "vezi", el: "vede", noi: "vedem", voi: "vedeți", ei: "văd" },
  { inf: "a veni", eu: "vin", tu: "vii", el: "vine", noi: "venim", voi: "veniți", ei: "vin" },
  { inf: "a da", eu: "dau", tu: "dai", el: "dă", noi: "dăm", voi: "dați", ei: "dau" },
  { inf: "a lua", eu: "iau", tu: "iei", el: "ia", noi: "luăm", voi: "luați", ei: "iau" },
  { inf: "a ști", eu: "știu", tu: "știi", el: "știe", noi: "știm", voi: "știți", ei: "știu" },
  { inf: "a fi", eu: "sunt", tu: "ești", el: "este", noi: "suntem", voi: "sunteți", ei: "sunt" },
  { inf: "a construi", eu: "construiesc", tu: "construiești", el: "construiește", noi: "construim", voi: "construiți", ei: "construiesc" },
];

const VERB_TIMP = [
  { verb: "cânta", prezent: "cântă", trecut: "a cântat", viitor: "va cânta" },
  { verb: "merge", prezent: "merge", trecut: "a mers", viitor: "va merge" },
  { verb: "scrie", prezent: "scrie", trecut: "a scris", viitor: "va scrie" },
  { verb: "citi", prezent: "citește", trecut: "a citit", viitor: "va citi" },
  { verb: "mânca", prezent: "mănâncă", trecut: "a mâncat", viitor: "va mânca" },
  { verb: "dormi", prezent: "doarme", trecut: "a dormit", viitor: "va dormi" },
  { verb: "vorbi", prezent: "vorbește", trecut: "a vorbit", viitor: "va vorbi" },
  { verb: "alerga", prezent: "aleargă", trecut: "a alergat", viitor: "va alerga" },
  { verb: "învăța", prezent: "învață", trecut: "a învățat", viitor: "va învăța" },
  { verb: "lucra", prezent: "lucrează", trecut: "a lucrat", viitor: "va lucra" },
  { verb: "ajuta", prezent: "ajută", trecut: "a ajutat", viitor: "va ajuta" },
  { verb: "plânge", prezent: "plânge", trecut: "a plâns", viitor: "va plânge" },
  { verb: "veni", prezent: "vine", trecut: "a venit", viitor: "va veni" },
  { verb: "vedea", prezent: "vede", trecut: "a văzut", viitor: "va vedea" },
  { verb: "da", prezent: "dă", trecut: "a dat", viitor: "va da" },
  { verb: "lua", prezent: "ia", trecut: "a luat", viitor: "va lua" },
  { verb: "construi", prezent: "construiește", trecut: "a construit", viitor: "va construi" },
  { verb: "desena", prezent: "desenează", trecut: "a desenat", viitor: "va desena" },
  { verb: "găsi", prezent: "găsește", trecut: "a găsit", viitor: "va găsi" },
  { verb: "juca", prezent: "joacă", trecut: "a jucat", viitor: "va juca" },
];

const ADJ_ACORD = [
  { adj_m: "frumos", adj_f: "frumoasă", adj_pl: "frumoși/frumoase", subst_m: "copil", subst_f: "floare" },
  { adj_m: "mare", adj_f: "mare", adj_pl: "mari", subst_m: "copac", subst_f: "casă" },
  { adj_m: "mic", adj_f: "mică", adj_pl: "mici", subst_m: "câine", subst_f: "pasăre" },
  { adj_m: "bun", adj_f: "bună", adj_pl: "buni/bune", subst_m: "prieten", subst_f: "prietenă" },
  { adj_m: "înalt", adj_f: "înaltă", adj_pl: "înalți/înalte", subst_m: "munte", subst_f: "clădire" },
  { adj_m: "vechi", adj_f: "veche", adj_pl: "vechi", subst_m: "copac", subst_f: "casă" },
  { adj_m: "nou", adj_f: "nouă", adj_pl: "noi", subst_m: "caiet", subst_f: "carte" },
  { adj_m: "roșu", adj_f: "roșie", adj_pl: "roșii", subst_m: "măr", subst_f: "floare" },
  { adj_m: "verde", adj_f: "verde", adj_pl: "verzi", subst_m: "copac", subst_f: "frunză" },
  { adj_m: "albastru", adj_f: "albastră", adj_pl: "albaștri/albastre", subst_m: "cer", subst_f: "mare" },
  { adj_m: "harnic", adj_f: "harnică", adj_pl: "harnici/harnice", subst_m: "elev", subst_f: "elevă" },
  { adj_m: "curajos", adj_f: "curajoasă", adj_pl: "curajoși/curajoase", subst_m: "soldat", subst_f: "fată" },
  { adj_m: "leneș", adj_f: "leneșă", adj_pl: "leneși/leneșe", subst_m: "băiat", subst_f: "pisică" },
  { adj_m: "trist", adj_f: "tristă", adj_pl: "triști/triste", subst_m: "om", subst_f: "femeie" },
  { adj_m: "vesel", adj_f: "veselă", adj_pl: "veseli/vesele", subst_m: "copil", subst_f: "fetiță" },
  { adj_m: "cald", adj_f: "caldă", adj_pl: "calzi/calde", subst_m: "vânt", subst_f: "zi" },
  { adj_m: "rece", adj_f: "rece", adj_pl: "reci", subst_m: "ger", subst_f: "apă" },
  { adj_m: "lung", adj_f: "lungă", adj_pl: "lungi", subst_m: "drum", subst_f: "coadă" },
  { adj_m: "scurt", adj_f: "scurtă", adj_pl: "scurți/scurte", subst_m: "creion", subst_f: "fustă" },
  { adj_m: "greu", adj_f: "grea", adj_pl: "grei/grele", subst_m: "sac", subst_f: "problemă" },
  { adj_m: "ușor", adj_f: "ușoară", adj_pl: "ușori/ușoare", subst_m: "ghiozdan", subst_f: "sarcină" },
  { adj_m: "dulce", adj_f: "dulce", adj_pl: "dulci", subst_m: "pepene", subst_f: "prăjitură" },
  { adj_m: "amar", adj_f: "amară", adj_pl: "amari/amare", subst_m: "medicament", subst_f: "ciocolată" },
  { adj_m: "negru", adj_f: "neagră", adj_pl: "negri/negre", subst_m: "cal", subst_f: "pisică" },
  { adj_m: "alb", adj_f: "albă", adj_pl: "albi/albe", subst_m: "zăpadă", subst_f: "coală" },
];

const PROPOZITIE_DEZV = [
  { simpla: "Copilul citește.", dezv: "Copilul mic citește o carte interesantă.", extra: "Ce a adăugat propoziția dezvoltată?", correct: "Cuvinte care arată cum este și ce citește" },
  { simpla: "Câinele aleargă.", dezv: "Câinele negru aleargă repede prin parc.", extra: "Ce tip de propoziție este cea extinsă?", correct: "Dezvoltată (are mai multe cuvinte)" },
  { simpla: "Maria cântă.", dezv: "Maria cea harnică cântă frumos la pian.", extra: "Ce adaugă propoziției: 'cea harnică'?", correct: "Un atribut (arată cum este Maria)" },
];

const SINONIME_C3 = [
  { word: "a vorbi", syn: "a spune", alts: ["a tăcea", "a asculta", "a citi", "a scrie", "a privi", "a fugi"] },
  { word: "frumos", syn: "drăguț", alts: ["urât", "mic", "vechi", "rece", "rapid", "slab"] },
  { word: "repede", syn: "iute", alts: ["lent", "greu", "ușor", "tare", "departe", "înalt"] },
  { word: "a merge", syn: "a umbla", alts: ["a sta", "a dormi", "a fugi", "a zbura", "a cânta", "a urca"] },
  { word: "bucuros", syn: "fericit", alts: ["trist", "obosit", "speriat", "supărat", "bolnav", "înfometat"] },
  { word: "a privi", syn: "a se uita", alts: ["a asculta", "a vorbi", "a mirosi", "a gusta", "a pipăi", "a cânta"] },
  { word: "a ajuta", syn: "a sprijini", alts: ["a supăra", "a ignora", "a uita", "a plânge", "a alerga", "a strica"] },
  { word: "mare", syn: "uriaș", alts: ["mic", "scund", "îngust", "subțire", "slab", "ușor"] },
  { word: "tristă", syn: "melancolică", alts: ["veselă", "frumoasă", "rapidă", "înaltă", "zgomotoasă", "curioasă"] },
  { word: "a termina", syn: "a sfârși", alts: ["a începe", "a continua", "a repeta", "a uita", "a schimba", "a pierde"] },
  { word: "a începe", syn: "a porni", alts: ["a termina", "a opri", "a adormit", "a uita", "a pierde", "a ascunde"] },
  { word: "harnic", syn: "silitor", alts: ["leneș", "obraznic", "zgomotos", "timid", "gălăgios", "nepăsător"] },
  { word: "a striga", syn: "a țipa", alts: ["a șopti", "a cânta", "a fluiera", "a tăcea", "a răspunde", "a plânge"] },
  { word: "a sări", syn: "a țopăi", alts: ["a sta", "a dormi", "a cădea", "a târî", "a înota", "a zbura"] },
  { word: "a găsi", syn: "a descoperi", alts: ["a pierde", "a ascunde", "a uita", "a rupe", "a strica", "a cumpăra"] },
  { word: "curajos", syn: "viteaz", alts: ["fricos", "timid", "slab", "leneș", "trist", "bolnav"] },
  { word: "a plânge", syn: "a lăcrima", alts: ["a râde", "a cânta", "a dansa", "a alerga", "a dormi", "a mânca"] },
  { word: "mic", syn: "mărunt", alts: ["mare", "înalt", "gros", "greu", "lung", "lat"] },
  { word: "a se odihni", syn: "a se relaxa", alts: ["a munci", "a alerga", "a construi", "a studia", "a cânta", "a plânge"] },
  { word: "a tăcea", syn: "a se liniști", alts: ["a striga", "a cânta", "a vorbi", "a fluiera", "a râde", "a plânge"] },
  { word: "a cumpăra", syn: "a achiziționa", alts: ["a vinde", "a dărui", "a pierde", "a strica", "a folosi", "a împrumuta"] },
  { word: "frumos", syn: "plăcut", alts: ["urât", "jalnic", "respingător", "supărător", "greoi", "tern"] },
  { word: "a construi", syn: "a ridica", alts: ["a dărâma", "a vopsi", "a cumpăra", "a vinde", "a sparge", "a fura"] },
  { word: "luminos", syn: "strălucitor", alts: ["întunecat", "cețos", "noros", "rece", "umed", "mohorât"] },
  { word: "a alerga", syn: "a fugi", alts: ["a merge", "a sta", "a dormi", "a citi", "a scrie", "a cânta"] },
  { word: "înțelept", syn: "priceput", alts: ["prost", "leneș", "zgomotos", "fricos", "nesăbuit", "naiv"] },
  { word: "a aduce", syn: "a duce", alts: ["a lua", "a arunca", "a sparge", "a uita", "a pierde", "a ascunde"] },
  { word: "liniștit", syn: "calm", alts: ["zgomotos", "nervos", "agitat", "speriat", "furios", "obraznic"] },
  { word: "a urca", syn: "a se sui", alts: ["a coborî", "a cădea", "a alerga", "a înota", "a zbura", "a cânta"] },
  { word: "vechi", syn: "bătrân", alts: ["nou", "tânăr", "proaspăt", "modern", "recent", "curat"] },
];

const ANTONIME_C3 = [
  { word: "vesel", ant: "trist", alts: ["obosit", "curios", "harnic", "frumos", "rapid", "înalt"] },
  { word: "înalt", ant: "scund", alts: ["gras", "subțire", "frumos", "harnic", "rapid", "puternic"] },
  { word: "curat", ant: "murdar", alts: ["vechi", "mic", "greu", "rece", "umed", "moale"] },
  { word: "rapid", ant: "lent", alts: ["greu", "scurt", "mic", "slab", "rece", "întunecat"] },
  { word: "a urca", ant: "a coborî", alts: ["a cădea", "a zbura", "a alerga", "a sta", "a dormi", "a cânta"] },
  { word: "a deschide", ant: "a închide", alts: ["a sparge", "a pierde", "a strica", "a vopsi", "a muta", "a folosi"] },
  { word: "ziua", ant: "noaptea", alts: ["dimineața", "seara", "săptămâna", "luna", "toamna", "vara"] },
  { word: "vara", ant: "iarna", alts: ["toamna", "dimineața", "noaptea", "seara", "ziua", "primăvara"] },
  { word: "bogat", ant: "sărac", alts: ["harnic", "leneș", "trist", "bolnav", "tânăr", "slab"] },
  { word: "voinic", ant: "slab", alts: ["înalt", "gras", "frumos", "trist", "curios", "fericit"] },
  { word: "curajos", ant: "fricos", alts: ["leneș", "trist", "obosit", "zgomotos", "bolnav", "înfometat"] },
  { word: "zgomotos", ant: "liniștit", alts: ["curat", "frumos", "rapid", "mare", "vechi", "greu"] },
  { word: "a iubi", ant: "a urî", alts: ["a uita", "a pierde", "a cânta", "a pleca", "a veni", "a sta"] },
  { word: "cald", ant: "rece", alts: ["umed", "uscat", "greu", "moale", "neted", "lucios"] },
  { word: "a câștiga", ant: "a pierde", alts: ["a lua", "a da", "a pune", "a rupe", "a strica", "a termina"] },
  { word: "frumos", ant: "urât", alts: ["mic", "slab", "rece", "vechi", "greu", "îngust"] },
  { word: "a plânge", ant: "a râde", alts: ["a cânta", "a dansa", "a alerga", "a dormi", "a scrie", "a vorbi"] },
  { word: "nou", ant: "vechi", alts: ["mic", "greu", "moale", "rece", "scurt", "îngust"] },
  { word: "a veni", ant: "a pleca", alts: ["a sta", "a dormi", "a cânta", "a citi", "a scrie", "a mânca"] },
  { word: "luminos", ant: "întunecat", alts: ["rece", "moale", "umed", "greu", "mic", "lent"] },
  { word: "a da", ant: "a lua", alts: ["a cumpăra", "a vinde", "a pune", "a strica", "a folosi", "a rupe"] },
  { word: "devreme", ant: "târziu", alts: ["repede", "greu", "rar", "mult", "puțin", "aproape"] },
  { word: "mult", ant: "puțin", alts: ["greu", "mare", "înalt", "rapid", "moale", "cald"] },
  { word: "aproape", ant: "departe", alts: ["sus", "jos", "devreme", "târziu", "înainte", "înapoi"] },
  { word: "a construi", ant: "a dărâma", alts: ["a vopsi", "a curăța", "a vinde", "a cumpăra", "a repara", "a măsura"] },
  { word: "a adormi", ant: "a se trezi", alts: ["a cânta", "a alerga", "a mânca", "a vorbi", "a citi", "a desena"] },
  { word: "blând", ant: "aspru", alts: ["vesel", "harnic", "rapid", "mic", "cald", "frumos"] },
  { word: "a găsi", ant: "a pierde", alts: ["a cumpăra", "a vinde", "a rupe", "a strica", "a folosi", "a uita"] },
  { word: "ușor", ant: "greu", alts: ["mic", "scurt", "îngust", "rece", "vechi", "lent"] },
  { word: "înainte", ant: "înapoi", alts: ["sus", "jos", "aproape", "departe", "devreme", "târziu"] },
];

const FAMILIA_CUVIN = [
  { radacina: "floare", familie: ["florar", "înflorit", "florărie", "floricică", "floral", "înflori", "floricel"] },
  { radacina: "casă", familie: ["căsuță", "casnic", "acasă", "căsoaie", "casier", "gospodărie", "cămin"] },
  { radacina: "copac", familie: ["copăcel", "copăciș", "copacii", "copăcei", "copacul"] },
  { radacina: "apă", familie: ["apos", "adăpa", "adăpost", "apătos", "udat", "ploios", "adăpare"] },
  { radacina: "carte", familie: ["cărticică", "cărturar", "cărți", "lectura", "cititor", "librărie"] },
  { radacina: "soare", familie: ["însorit", "solar", "răsărit", "însorire", "solariu", "luminos"] },
  { radacina: "muncă", familie: ["muncitor", "a munci", "muncitoresc", "muncit", "muncăgioasă", "truditor"] },
  { radacina: "școală", familie: ["școlar", "școlit", "școlăresc", "scolarizare", "elev", "dascăl"] },
  { radacina: "pădure", familie: ["pădurar", "pădureț", "pădurice", "păduroasă", "forestier", "împăduri"] },
  { radacina: "pâine", familie: ["pâiniță", "brutar", "brutărie", "panificație", "copt", "dospit"] },
  { radacina: "iarnă", familie: ["iernatic", "iernare", "de iarnă", "iernos", "înghețat", "iernat"] },
  { radacina: "fruct", familie: ["fructos", "fructifer", "fructuos", "livadă", "rod", "roadă"] },
  { radacina: "copil", familie: ["copilărie", "copilăros", "copilaș", "copilesc", "copilăresc", "copilandru"] },
  { radacina: "câmp", familie: ["câmpie", "câmpenesc", "câmpos", "câmpean", "câmpulungan", "tarlă"] },
  { radacina: "mare", familie: ["marin", "maritim", "marinar", "mariner", "oceanic", "plajă"] },
];

const ORTOGRAFIE_C3 = [
  { correct: "n-am", wrong: ["nam", "n am", "n'am"], context: "Eu ___ văzut filmul." },
  { correct: "nu-i", wrong: ["nui", "nu i", "nu'i"], context: "___ acasă nimeni." },
  { correct: "m-am", wrong: ["mam", "m am", "m'am"], context: "Eu ___ dus la școală." },
  { correct: "l-am", wrong: ["lam", "l am", "l'am"], context: "Eu ___ chemat pe Ion." },
  { correct: "mi-a", wrong: ["mia", "mi a", "mi'a"], context: "Mama ___ dat un cadou." },
  { correct: "ne-am", wrong: ["neam", "ne am", "ne'am"], context: "Noi ___ întâlnit în parc." },
  { correct: "v-am", wrong: ["vam", "v am", "v'am"], context: "Eu ___ așteptat mult." },
  { correct: "i-am", wrong: ["iam", "i am", "i'am"], context: "Eu ___ trimis o scrisoare." },
  { correct: "într-adevăr", wrong: ["intr-adevăr", "într-adevr", "intradevar"], context: "El este, ___, un elev harnic." },
  { correct: "de-a", wrong: ["dea", "de a", "d-a"], context: "Ne jucăm ___ baba-oarba." },
  { correct: "s-a", wrong: ["sa", "s a", "s'a"], context: "Ion ___ întors acasă." },
  { correct: "și-a", wrong: ["șia", "și a", "și'a"], context: "Maria ___ uitat geanta acasă." },
  { correct: "te-ai", wrong: ["teai", "te ai", "te'ai"], context: "Tu ___ îmbrăcat frumos." },
  { correct: "v-ați", wrong: ["vați", "v ați", "vati"], context: "Voi ___ pregătit lecția?" },
  { correct: "s-au", wrong: ["sau", "s au", "s'au"], context: "Copiii ___ jucat în parc." },
  { correct: "du-te", wrong: ["dute", "du te", "du'te"], context: "___ repede la magazin!" },
  { correct: "ia-o", wrong: ["iao", "ia o", "ia'o"], context: "___ tu, ea nu mai vine." },
  { correct: "nu-l", wrong: ["nul", "nu l", "nu'l"], context: "___ striga prea tare." },
  { correct: "l-a", wrong: ["la", "l a", "l'a"], context: "Profesorul ___ lăudat." },
  { correct: "i-a", wrong: ["ia", "i a", "i'a"], context: "Tata ___ cumpărat o jucărie." },
];

const TEXTE_C3 = [
  {
    text: "Toamna, codrul se îmbracă în haine de aur și ruginiu. Frunzele dansează în vânt și se aștern pe poteci ca un covor colorat. Pasăreile se adună în stoluri mari și pleacă spre țările calde. Doar câțiva pițigoi curajoși rămân să înfrunte iarna.",
    intrebari: [
      { q: "Ce se întâmplă cu frunzele toamna?", correct: "Dansează în vânt și cad pe poteci", wrong: ["Rămân verzi", "Cresc mari", "Devin albe"] },
      { q: "De ce pleacă păsările?", correct: "Merg spre țările calde", wrong: ["Caută mâncare", "Se joacă", "Dorm"] },
      { q: "Care păsări rămân toamna?", correct: "Pițigoii", wrong: ["Rândunelele", "Cocoarele", "Barza"] },
    ],
  },
  {
    text: "Ionel era un băiat curios care iubea insectele. În fiecare zi, după școală, se ducea în grădină și observa furnicile, gândăceii și flutureii. Mama îl întreba: 'Ce faci acolo?' — 'Studiez natura, mamă!' răspundea el mândru.",
    intrebari: [
      { q: "Ce hobby avea Ionel?", correct: "Observa insectele din grădină", wrong: ["Juca fotbal", "Citea romane", "Picta tablouri"] },
      { q: "Când mergea Ionel în grădină?", correct: "După școală", wrong: ["Dimineața devreme", "Seara târziu", "În weekenduri"] },
      { q: "Ce răspundea Ionel mamei?", correct: "'Studiez natura, mamă!'", wrong: ["'Mă joc, mamă!'", "'Dorm, mamă!'", "'Vin imediat, mamă!'"] },
    ],
  },
  {
    text: "Un olar știa să facă oale din lut. Într-o zi, a venit la el un tânăr care dorea să îl ajute. Olarul l-a pus să care apă și să prepare lutul. Tânărul a obosit repede și a vrut să renunțe. 'Orice meserie se învață cu răbdare,' i-a spus olarul înțelept.",
    intrebari: [
      { q: "Ce știa să facă olarul?", correct: "Oale din lut", wrong: ["Pâine", "Stofe", "Lemn sculptat"] },
      { q: "Ce a trebuit să facă tânărul?", correct: "Să care apă și să prepare lutul", wrong: ["Să vândă oalele", "Să picteze oalele", "Să coacă oalele"] },
      { q: "Care este morala poveștii?", correct: "Orice meserie se învață cu răbdare", wrong: ["E mai bine să lucrezi singur", "Olăritul este greu", "Tânărul a renunțat"] },
    ],
  },
  {
    text: "Pe malul unui râu trăia o familie de vidre. Mama vidră le-a învățat puilor cum să înoate și să prindă pești. La început, puii se temeau de apă rece. Dar cu perseverență și ajutorul mamei, au reușit să devină înotători desăvârșiți.",
    intrebari: [
      { q: "Unde trăia familia de vidre?", correct: "Pe malul unui râu", wrong: ["Într-o pădure", "La mare", "Pe un munte"] },
      { q: "Ce a învățat mama vidră puii?", correct: "Să înoate și să prindă pești", wrong: ["Să zboare", "Să construiască cuiburi", "Să strige tare"] },
      { q: "Cum au reușit puii să înoate?", correct: "Cu perseverență și ajutorul mamei", wrong: ["Singuri, fără ajutor", "Au renunțat", "Au cerut ajutor la pești"] },
    ],
  },
  {
    text: "Podul cel vechi din sat era din lemn și scârțâia la fiecare pas. Primarul a decis să construiască un pod nou din beton. Meșterii au lucrat o vară întreagă. Când podul a fost gata, tot satul a sărbătorit. 'Acum putem trece în siguranță!' strigau bucuroși.",
    intrebari: [
      { q: "Din ce era vechiul pod?", correct: "Din lemn", wrong: ["Din beton", "Din piatră", "Din fier"] },
      { q: "Cât au lucrat meșterii la noul pod?", correct: "O vară întreagă", wrong: ["O zi", "Un an întreg", "O lună"] },
      { q: "Cum s-a simțit satul când podul a fost gata?", correct: "A sărbătorit bucuros", wrong: ["A plâns", "A continuat activitățile obișnuite", "A protestai"] },
    ],
  },
  {
    text: "Elena primise de ziua ei o carte despre plante medicinale. Cu mult interes, a citit-o de la cap la coadă. A aflat că mușețelul vindecă durerile de stomac, că levănțica aduce somnul lin și că urzica este plină de vitamine. 'Natura este cea mai bună farmacie!' a exclamat ea.",
    intrebari: [
      { q: "Ce carte a primit Elena de ziua ei?", correct: "O carte despre plante medicinale", wrong: ["O carte de povești", "Un atlas geografic", "O carte de matematică"] },
      { q: "La ce este bun mușețelul, conform cărții?", correct: "Vindecă durerile de stomac", wrong: ["Aduce somnul lin", "Este plin de vitamine", "Ajută la văz"] },
      { q: "Ce a concluzionat Elena?", correct: "Natura este cea mai bună farmacie", wrong: ["Plantele sunt periculoase", "Farmaciștii știu mai bine", "E mai bine să nu citești"] },
    ],
  },
];

const COMPUNERE_PARTI = [
  { q: "Ce conține INTRODUCEREA unei compuneri?", correct: "Prezintă personajele, locul și momentul", wrong: ["Descrie acțiunea principală", "Oferă concluzia", "Conține dialogul"] },
  { q: "Ce conține CUPRINSUL unei compuneri?", correct: "Desfășurarea acțiunii/evenimentelor", wrong: ["Prezintă personajele", "Conține morala", "Aduce mulțumiri"] },
  { q: "Ce conține ÎNCHEIEREA unei compuneri?", correct: "Concluzia sau rezolvarea problemei", wrong: ["Prezintă locul acțiunii", "Introduce personajele noi", "Continuă acțiunea principală"] },
  { q: "Ce titlu i-ai pune unei compuneri despre iarnă?", correct: "Un titlu care să reflecte conținutul", wrong: ["Orice titlu", "Fără titlu", "Titlul autorului"] },
  { q: "Ce face o compunere mai interesantă?", correct: "Cuvinte expresive și descrieri vii", wrong: ["Propoziții scurte și simple", "Cât mai puține cuvinte", "Enumerarea faptelor"] },
  { q: "Ce este un paragraf?", correct: "Un grup de propoziții despre același subiect", wrong: ["O singură propoziție", "Titlul compunerii", "O pagină întreagă"] },
];

const FIGURI_STIL_C3 = [
  { fig: "comparație", ex: "Fata era frumoasă ca o floare.", explicatie: "Se compară fata cu o floare", wrong: ["Se personifică floarea", "Se exagerează frumusețea", "Se descrie culoarea"] },
  { fig: "personificare", ex: "Vântul suspina printre ramuri.", explicatie: "Vântul primește caracteristici umane", wrong: ["Se compară vântul cu ceva", "Se exagerează vântul", "Se descrie vântul"] },
  { fig: "enumerație", ex: "Pe masă erau mere, pere, cireșe și caise.", explicatie: "Se înșiruie mai multe elemente", wrong: ["Se compară fructele", "Se personifică fructele", "Se exagerează cantitatea"] },
  { fig: "repetiție", ex: "Mult, mult mai departe era o împărăție.", explicatie: "Se repetă un cuvânt pentru efect", wrong: ["Se compară distanța", "Se personifică depărtarea", "Se enumeră locuri"] },
  { fig: "comparație", ex: "Copilul alerga iute ca vântul.", explicatie: "Se compară viteza copilului cu vântul", wrong: ["Se personifică vântul", "Se enumeră acțiuni", "Se repetă un cuvânt"] },
  { fig: "personificare", ex: "Luna zâmbea printre nori.", explicatie: "Luna primește abilitatea umană de a zâmbi", wrong: ["Se compară luna cu ceva", "Se enumeră elemente", "Se descrie cerul"] },
  { fig: "personificare", ex: "Florile dansau în bătaia vântului.", explicatie: "Florile primesc abilitatea umană de a dansa", wrong: ["Se compară florile cu dansatorii", "Se enumeră florile", "Se repetă cuvântul floare"] },
  { fig: "comparație", ex: "Ochii ei străluceau ca stelele.", explicatie: "Se compară ochii cu stelele", wrong: ["Se personifică stelele", "Se enumeră stele", "Se repetă cuvântul ochi"] },
  { fig: "enumerație", ex: "În grădină creșteau trandafiri, lalele, margarete și garoafe.", explicatie: "Se înșiruie mai multe tipuri de flori", wrong: ["Se compară florile", "Se personifică grădina", "Se repetă un cuvânt"] },
  { fig: "repetiție", ex: "Departe, departe, în munți înalți, trăia un zmeu.", explicatie: "Se repetă cuvântul 'departe' pentru a accentua distanța", wrong: ["Se compară distanța cu ceva", "Se enumeră locuri", "Se personifică muntele"] },
  { fig: "comparație", ex: "Zăpada era albă ca laptele.", explicatie: "Se compară culoarea zăpezii cu laptele", wrong: ["Se personifică zăpada", "Se enumeră culori", "Se repetă culoarea"] },
  { fig: "personificare", ex: "Ploaia bătea în fereastră ca un oaspete nerăbdător.", explicatie: "Ploaia primește caracteristici umane (bate ca un oaspete)", wrong: ["Se compară ploaia cu un om", "Se enumeră tipuri de ploaie", "Se repetă cuvântul ploaie"] },
];

// ─── GENERATORS ─────────────────────────────────────────────────────────────

export const C3_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {

  // ══════════════ SUBSTANTIVUL ══════════════

  substantiv_c3: {
    gen_subst_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const genuri = ["masculin", "feminin", "neutru"];
      for (let i = 0; i < 30; i++) {
        const data = pick(SUBST_GEN, rng);
        const wrong = genuri.filter(g => g !== data.gen);
        q.push(createMCQ("substantiv_c3", "gen_subst_c3",
          `Ce gen are substantivul '${data.subst}'?`,
          data.gen, wrong, rng));
      }
      return q;
    },

    numar_subst_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(SUBST_NR, rng);
        if (rng() > 0.5) {
          const wrong = shuffle(SUBST_NR, rng).filter(d => d.pl !== data.pl).slice(0, 3).map(d => d.pl);
          q.push(createMCQ("substantiv_c3", "numar_subst_c3",
            `Care este PLURALUL substantivului '${data.sg}'?`,
            data.pl, wrong, rng));
        } else {
          const wrong = shuffle(SUBST_NR, rng).filter(d => d.sg !== data.sg).slice(0, 3).map(d => d.sg);
          q.push(createMCQ("substantiv_c3", "numar_subst_c3",
            `Care este SINGULARUL substantivului '${data.pl}'?`,
            data.sg, wrong, rng));
        }
      }
      return q;
    },

    caz_subst_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const cazuri = ["Nominativ", "Genitiv", "Dativ", "Acuzativ"];
      for (let i = 0; i < 30; i++) {
        const data = pick(SUBST_CAZ, rng);
        if (rng() > 0.5) {
          const wrong = cazuri.filter(c => c !== data.caz);
          q.push(createMCQ("substantiv_c3", "caz_subst_c3",
            `'${data.prop}' — La ce CAZ este substantivul '${data.subst}'?`,
            data.caz, wrong, rng));
        } else {
          const alteCazuri = shuffle(SUBST_CAZ, rng).filter(d => d.subst !== data.subst).slice(0, 3).map(d => d.subst);
          q.push(createMCQ("substantiv_c3", "caz_subst_c3",
            `'${data.prop}' — ${data.intrebare}`,
            data.subst, alteCazuri, rng));
        }
      }
      return q;
    },
  },

  // ══════════════ VERBUL ══════════════

  verb_c3: {
    conjugare_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const persoane = [
        { label: "eu", key: "eu" as const },
        { label: "tu", key: "tu" as const },
        { label: "el/ea", key: "el" as const },
        { label: "noi", key: "noi" as const },
        { label: "voi", key: "voi" as const },
        { label: "ei/ele", key: "ei" as const },
      ];
      for (let i = 0; i < 30; i++) {
        const verb = pick(VERB_CONJUG, rng);
        const persoana = pick(persoane, rng);
        const correct = verb[persoana.key];
        const wrong = VERB_CONJUG
          .filter(v => v.inf !== verb.inf)
          .map(v => v[persoana.key])
          .filter((f, idx, arr) => arr.indexOf(f) === idx && f !== correct)
          .slice(0, 3);
        q.push(createMCQ("verb_c3", "conjugare_c3",
          `Care este forma corectă a verbului '${verb.inf}' pentru persoana '${persoana.label}'?`,
          correct, wrong, rng));
      }
      return q;
    },

    timp_verb_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const timpuri: Array<"prezent" | "trecut" | "viitor"> = ["prezent", "trecut", "viitor"];
      for (let i = 0; i < 30; i++) {
        const data = pick(VERB_TIMP, rng);
        const timp = pick(timpuri, rng);
        const correct = data[timp];
        if (rng() > 0.5) {
          // Which tense is this form?
          const form = pick([data.prezent, data.trecut, data.viitor], rng);
          const timpLabel = form === data.prezent ? "prezent" : form === data.trecut ? "trecut" : "viitor";
          const wrong = ["prezent", "trecut", "viitor"].filter(t => t !== timpLabel);
          q.push(createMCQ("verb_c3", "timp_verb_c3",
            `La ce TIMP este verbul: '${form}'?`,
            timpLabel, wrong, rng));
        } else {
          const wrong = VERB_TIMP
            .filter(v => v.verb !== data.verb)
            .map(v => v[timp])
            .filter(f => f !== correct)
            .slice(0, 3);
          q.push(createMCQ("verb_c3", "timp_verb_c3",
            `Care este forma de ${timp} a verbului '${data.verb}'?`,
            correct, wrong, rng));
        }
      }
      return q;
    },

    persoana_nr_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const items = [
        { form: "eu merg", persoana: "I singular" }, { form: "tu mergi", persoana: "a II-a singular" },
        { form: "el merge", persoana: "a III-a singular" }, { form: "noi mergem", persoana: "I plural" },
        { form: "voi mergeți", persoana: "a II-a plural" }, { form: "ei merg", persoana: "a III-a plural" },
        { form: "eu cânt", persoana: "I singular" }, { form: "tu cânți", persoana: "a II-a singular" },
        { form: "el cântă", persoana: "a III-a singular" }, { form: "noi cântăm", persoana: "I plural" },
        { form: "voi cântați", persoana: "a II-a plural" }, { form: "ei cântă", persoana: "a III-a plural" },
        { form: "eu citesc", persoana: "I singular" }, { form: "tu citești", persoana: "a II-a singular" },
        { form: "el citește", persoana: "a III-a singular" }, { form: "noi citim", persoana: "I plural" },
        { form: "voi citiți", persoana: "a II-a plural" }, { form: "ei citesc", persoana: "a III-a plural" },
      ];
      const persoaneAll = ["I singular", "a II-a singular", "a III-a singular", "I plural", "a II-a plural", "a III-a plural"];
      for (let i = 0; i < 30; i++) {
        const data = pick(items, rng);
        const wrong = persoaneAll.filter(p => p !== data.persoana).slice(0, 3);
        q.push(createMCQ("verb_c3", "persoana_nr_c3",
          `La ce persoană și număr este verbul din: '${data.form}'?`,
          data.persoana, wrong, rng));
      }
      return q;
    },
  },

  // ══════════════ ADJECTIVUL ══════════════

  adjectiv_c3: {
    acord_adj_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(ADJ_ACORD, rng);
        if (rng() > 0.5) {
          // feminine agreement
          const wrong = [data.adj_m, data.adj_pl, shuffle(ADJ_ACORD, rng).find(d => d !== data)?.adj_f ?? "bun"].filter(w => w !== data.adj_f);
          q.push(createMCQ("adjectiv_c3", "acord_adj_c3",
            `Care este forma adjectivului '${data.adj_m}' pentru substantivul feminin '${data.subst_f}'?`,
            data.adj_f, wrong, rng));
        } else {
          // masculine agreement
          const wrong = [data.adj_f, data.adj_pl, shuffle(ADJ_ACORD, rng).find(d => d !== data)?.adj_m ?? "mare"].filter(w => w !== data.adj_m);
          q.push(createMCQ("adjectiv_c3", "acord_adj_c3",
            `Care este forma adjectivului pentru substantivul masculin '${data.subst_m}'?`,
            data.adj_m, wrong, rng));
        }
      }
      return q;
    },

    adj_propozitie_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const items = [
        { prop: "Câinele cel negru a latrat.", adj: "negru", wrong: ["câinele", "latrat", "cel"] },
        { prop: "Fetița bucuroasă a dansat.", adj: "bucuroasă", wrong: ["fetița", "dansat", "a"] },
        { prop: "Cartea veche este interesantă.", adj: "veche", wrong: ["cartea", "interesantă", "este"] },
        { prop: "Copilul harnic învață bine.", adj: "harnic", wrong: ["copilul", "bine", "învață"] },
        { prop: "Pomul înalt a căzut în furtună.", adj: "înalt", wrong: ["pomul", "căzut", "furtună"] },
        { prop: "Prietena mea bună m-a ajutat.", adj: "bună", wrong: ["prietena", "ajutat", "mea"] },
        { prop: "Soarele strălucitor a apus roșu.", adj: "strălucitor", wrong: ["soarele", "roșu", "a apus"] },
        { prop: "Elevii silitori au luat note mari.", adj: "silitori", wrong: ["elevii", "mari", "note"] },
        { prop: "Iarna cea rece a venit devreme.", adj: "rece", wrong: ["iarna", "devreme", "venit"] },
        { prop: "Câmpul verde mirosea frumos.", adj: "verde", wrong: ["câmpul", "frumos", "mirosea"] },
        { prop: "Pisica albă dormea în soare.", adj: "albă", wrong: ["pisica", "dormea", "soare"] },
        { prop: "Băiatul curajos a salvat câinele.", adj: "curajos", wrong: ["băiatul", "salvat", "câinele"] },
        { prop: "Floarea galbenă a înflorit în grădină.", adj: "galbenă", wrong: ["floarea", "înflorit", "grădină"] },
        { prop: "Bunica harnică a gătit o supă bună.", adj: "harnică", wrong: ["bunica", "gătit", "bună"] },
        { prop: "Zăpada albă acoperă câmpurile.", adj: "albă", wrong: ["zăpada", "câmpurile", "acoperă"] },
        { prop: "Copiii veseli se jucau în curte.", adj: "veseli", wrong: ["copiii", "curte", "jucau"] },
        { prop: "Muntele înalt era acoperit de nori.", adj: "înalt", wrong: ["muntele", "nori", "acoperit"] },
        { prop: "Prietenul meu cel mai bun a venit.", adj: "bun", wrong: ["prietenul", "venit", "meu"] },
        { prop: "Șoarecele mic s-a ascuns în gaură.", adj: "mic", wrong: ["șoarecele", "ascuns", "gaură"] },
        { prop: "Fata cuminte a ascultat lecția.", adj: "cuminte", wrong: ["fata", "ascultat", "lecția"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(items, rng);
        q.push(createMCQ("adjectiv_c3", "adj_propozitie_c3",
          `Care este adjectivul din propoziția: '${data.prop}'?`,
          data.adj, data.wrong, rng));
      }
      return q;
    },
  },

  // ══════════════ VOCABULAR AVANSAT ══════════════

  vocabular_c3: {
    sinonime_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(SINONIME_C3, rng);
        // Use dedicated alts first (semantically plausible distractors), then fallback to pool
        const dedicated = data.alts ? shuffle(data.alts, rng).slice(0, 3) : [];
        const poolFallback = shuffle(SINONIME_C3, rng)
          .filter(d => d.syn !== data.syn && !dedicated.includes(d.syn))
          .slice(0, 3 - dedicated.length)
          .map(d => d.syn);
        const wrong = [...dedicated, ...poolFallback].filter(w => w !== data.syn);
        q.push(createMCQ("vocabular_c3", "sinonime_c3",
          `Care este sinonimul cuvântului '${data.word}'?`,
          data.syn, wrong, rng));
      }
      return q;
    },

    antonime_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(ANTONIME_C3, rng);
        // Use dedicated alts first (semantically plausible distractors), then fallback to pool
        const dedicated = data.alts ? shuffle(data.alts, rng).slice(0, 3) : [];
        const poolFallback = shuffle(ANTONIME_C3, rng)
          .filter(d => d.ant !== data.ant && !dedicated.includes(d.ant))
          .slice(0, 3 - dedicated.length)
          .map(d => d.ant);
        const wrong = [...dedicated, ...poolFallback].filter(w => w !== data.ant);
        q.push(createMCQ("vocabular_c3", "antonime_c3",
          `Care este antonimul cuvântului '${data.word}'?`,
          data.ant, wrong, rng));
      }
      return q;
    },

    familia_cuvintelor_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(FAMILIA_CUVIN, rng);
        const derived = pick(data.familie, rng);
        const otherWords = shuffle(FAMILIA_CUVIN, rng)
          .filter(d => d.radacina !== data.radacina)
          .flatMap(d => d.familie)
          .filter(w => w !== derived)
          .slice(0, 3);
        q.push(createMCQ("vocabular_c3", "familia_cuvintelor_c3",
          `Care cuvânt face parte din familia cuvântului '${data.radacina}'?`,
          derived, otherWords, rng));
      }
      return q;
    },
  },

  // ══════════════ ORTOGRAFIE AVANSATĂ ══════════════

  ortografie_c3: {
    cratima_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(ORTOGRAFIE_C3, rng);
        q.push(createMCQ("ortografie_c3", "cratima_c3",
          `Completează corect: '${data.context}'`,
          data.correct, data.wrong, rng));
      }
      return q;
    },
  },

  // ══════════════ PROPOZIȚIA DEZVOLTATĂ ══════════════

  propozitia_c3: {
    propozitie_dezv_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const intrebari = [
        { q: "Ce este o propoziție simplă?", correct: "Are doar subiect și predicat", wrong: ["Are multe adjective", "Are dialog", "Are mai mult de 10 cuvinte"] },
        { q: "Ce este o propoziție dezvoltată?", correct: "Are subiect, predicat și alte cuvinte (atribute, complemente)", wrong: ["Are doar un cuvânt", "Are titlu", "Conține numai verbe"] },
        { q: "Transformă 'Câinele aleargă' într-o propoziție dezvoltată:", correct: "Câinele negru aleargă repede prin parc", wrong: ["Câinele", "Aleargă.", "Câine repede."] },
        { q: "Ce este atributul?", correct: "Cuvântul care arată cum este substantivul", wrong: ["Cuvântul care arată acțiunea", "Cuvântul care arată locul", "Subiectul propoziției"] },
        { q: "Ce este complementul?", correct: "Cuvântul care arată circumstanțele acțiunii (unde, când, cum)", wrong: ["Cuvântul care arată cum e substantivul", "Subiectul", "Predicatul"] },
        ...COMPUNERE_PARTI,
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(intrebari, rng);
        q.push(createMCQ("propozitia_c3", "propozitie_dezv_c3",
          data.q, data.correct, data.wrong, rng));
      }
      return q;
    },

    figuri_stil_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(FIGURI_STIL_C3, rng);
        if (rng() > 0.5) {
          const wrong = FIGURI_STIL_C3.filter(d => d.fig !== data.fig).map(d => d.fig);
          q.push(createMCQ("propozitia_c3", "figuri_stil_c3",
            `Ce figură de stil conține: '${data.ex}'?`,
            data.fig, wrong, rng));
        } else {
          q.push(createMCQ("propozitia_c3", "figuri_stil_c3",
            `'${data.ex}' — de ce este aceasta o ${data.fig}?`,
            data.explicatie, data.wrong, rng));
        }
      }
      return q;
    },
  },

  // ══════════════ LECTURĂ C3 ══════════════

  lectura_c3: {
    intelegere_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const t = pick(TEXTE_C3, rng);
        const intr = pick(t.intrebari, rng);
        q.push(createMCQ("lectura_c3", "intelegere_c3",
          `Text: "${t.text}"\n\n${intr.q}`,
          intr.correct, intr.wrong, rng));
      }
      return q;
    },

    idee_principala_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const items = [
        { q: "Ce este ideea principală a unui text?", correct: "Mesajul cel mai important transmis de text", wrong: ["Primul cuvânt din text", "Titlul textului", "Ultimul paragraf"] },
        { q: "Cum identificăm ideea principală?", correct: "Răspundem la 'Despre ce este textul?'", wrong: ["Citim prima propoziție", "Numărăm personajele", "Citim doar dialogul"] },
        { q: "Ce este un rezumat?", correct: "O prezentare scurtă a conținutului textului", wrong: ["Copierea textului integral", "Titlul textului", "O propoziție din text"] },
        { q: "Cum scriem un rezumat?", correct: "Cu cuvintele noastre, pe scurt, respectând ordinea ideilor", wrong: ["Copiem textul mot-a-mot", "Scriem doar dialogurile", "Scriem doar final"] },
        { q: "Ce sunt momentele subiectului unui text narativ?", correct: "Expoziția, intriga, desfășurarea, punctul culminant, deznodământul", wrong: ["Introducerea și concluzia", "Personajele și locul", "Titlul și autorul"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(items, rng);
        q.push(createMCQ("lectura_c3", "idee_principala_c3",
          data.q, data.correct, data.wrong, rng));
      }
      return q;
    },
  },
};
