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
];

const PROPOZITIE_DEZV = [
  { simpla: "Copilul citește.", dezv: "Copilul mic citește o carte interesantă.", extra: "Ce a adăugat propoziția dezvoltată?", correct: "Cuvinte care arată cum este și ce citește" },
  { simpla: "Câinele aleargă.", dezv: "Câinele negru aleargă repede prin parc.", extra: "Ce tip de propoziție este cea extinsă?", correct: "Dezvoltată (are mai multe cuvinte)" },
  { simpla: "Maria cântă.", dezv: "Maria cea harnică cântă frumos la pian.", extra: "Ce adaugă propoziției: 'cea harnică'?", correct: "Un atribut (arată cum este Maria)" },
];

const SINONIME_C3 = [
  { word: "a vorbi", syn: "a spune" }, { word: "frumos", syn: "drăguț" },
  { word: "repede", syn: "iute" }, { word: "a merge", syn: "a umbla" },
  { word: "bucuros", syn: "fericit" }, { word: "a privi", syn: "a se uita" },
  { word: "a ajuta", syn: "a sprijini" }, { word: "mare", syn: "uriaș" },
  { word: "tristă", syn: "melancolică" }, { word: "a termina", syn: "a sfârși" },
  { word: "a începe", syn: "a porni" }, { word: "harnic", syn: "silitor" },
];

const ANTONIME_C3 = [
  { word: "vesel", ant: "trist" }, { word: "înalt", ant: "scund" },
  { word: "curat", ant: "murdar" }, { word: "rapid", ant: "lent" },
  { word: "a urca", ant: "a coborî" }, { word: "a deschide", ant: "a închide" },
  { word: "ziua", ant: "noaptea" }, { word: "vara", ant: "iarna" },
  { word: "bogat", ant: "sărac" }, { word: "voinic", ant: "slab" },
  { word: "curajos", ant: "fricos" }, { word: "zgomotos", ant: "liniștit" },
];

const FAMILIA_CUVIN = [
  { radacina: "floare", familie: ["florar", "înflorit", "florărie", "floricică", "floral"] },
  { radacina: "casă", familie: ["căsuță", "casnic", "acasă", "căsoaie", "casier"] },
  { radacina: "copac", familie: ["copăcel", "împăduri", "pădurar", "pădure", "copăciș"] },
  { radacina: "apă", familie: ["apă", "apos", "adăpa", "băltoacă", "aducere apă"] },
  { radacina: "carte", familie: ["cărticică", "cărturar", "librărie", "cărți", "livresc"] },
  { radacina: "soare", familie: ["însorit", "solar", "răsărit", "soricică", "însorire"] },
  { radacina: "muncă", familie: ["muncitor", "a munci", "muncitoresc", "harnic", "laboriozitate"] },
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
];

// ─── NEW WORD BANKS (C3 extensions) ─────────────────────────────────────────

const GRADE_ADJ = [
  { poz: "bun", comp: "mai bun", sup: "cel mai bun" },
  { poz: "mare", comp: "mai mare", sup: "cel mai mare" },
  { poz: "mic", comp: "mai mic", sup: "cel mai mic" },
  { poz: "frumos", comp: "mai frumos", sup: "cel mai frumos" },
  { poz: "repede", comp: "mai repede", sup: "cel mai repede" },
  { poz: "înalt", comp: "mai înalt", sup: "cel mai înalt" },
  { poz: "greu", comp: "mai greu", sup: "cel mai greu" },
  { poz: "lung", comp: "mai lung", sup: "cel mai lung" },
  { poz: "vechi", comp: "mai vechi", sup: "cel mai vechi" },
  { poz: "cald", comp: "mai cald", sup: "cel mai cald" },
];

const VERBE_REFLEXIVE = [
  { inf: "a se spăla", pers1: "mă spăl", pers3: "se spală" },
  { inf: "a se îmbrăca", pers1: "mă îmbrac", pers3: "se îmbracă" },
  { inf: "a se juca", pers1: "mă joc", pers3: "se joacă" },
  { inf: "a se trezi", pers1: "mă trezesc", pers3: "se trezește" },
  { inf: "a se culca", pers1: "mă culc", pers3: "se culcă" },
  { inf: "a se uita", pers1: "mă uit", pers3: "se uită" },
  { inf: "a se gândi", pers1: "mă gândesc", pers3: "se gândește" },
  { inf: "a se întoarce", pers1: "mă întorc", pers3: "se întoarce" },
];

const VORBIRE_DIRECTA = [
  { prop: '"Bună ziua!" a spus Ana.', vorbitor: "Ana", replica: "Bună ziua!", semn: '"' },
  { prop: '"Mergem la școală?" întrebă Mihai.', vorbitor: "Mihai", replica: "Mergem la școală?", semn: '"' },
  { prop: '"Bravo!" exclamă doamna profesoară.', vorbitor: "doamna profesoară", replica: "Bravo!", semn: '"' },
  { prop: '"Vine iarna." spuse bunica.', vorbitor: "bunica", replica: "Vine iarna.", semn: '"' },
];

const NATURA_C3 = [
  { element: "râu", tip: "apă curgătoare", caracteristici: ["curge", "are mal", "are pești"] },
  { element: "lac", tip: "apă stătătoare", caracteristici: ["stă pe loc", "poate fi mic sau mare"] },
  { element: "pădure", tip: "ecosistem terestru", caracteristici: ["copaci mulți", "animale sălbatice", "umbră"] },
  { element: "munte", tip: "formă de relief", caracteristici: ["înalt", "vârf", "versant"] },
  { element: "câmpie", tip: "formă de relief", caracteristici: ["plată", "culturi agricole"] },
  { element: "deal", tip: "formă de relief", caracteristici: ["mai mic ca muntele", "versant mai lin"] },
];

const ACTIVITATI_C3 = [
  { activ: "înot", loc: "piscină/mare", echipament: "costum de baie, ochelari" },
  { activ: "fotbal", loc: "teren de sport", echipament: "minge, ghete" },
  { activ: "ciclism", loc: "parc/drum", echipament: "bicicletă, cască" },
  { activ: "desen", loc: "acasă/școală", echipament: "creioane, hârtie" },
  { activ: "lectură", loc: "bibliotecă/acasă", echipament: "carte" },
  { activ: "gătit", loc: "bucătărie", echipament: "oale, ingrediente" },
];

const LOCUINTA_C3 = [
  { camera: "bucătărie", obiecte: ["aragaz", "frigider", "chiuvetă", "masă"] },
  { camera: "dormitor", obiecte: ["pat", "dulap", "noptieră", "lampă"] },
  { camera: "baie", obiecte: ["cadă", "lavoar", "oglindă", "prosop"] },
  { camera: "sufragerie", obiecte: ["canapea", "televizor", "masă", "fotoliu"] },
  { camera: "hol", obiecte: ["cuier", "ușă", "covoraș"] },
];

const IMBRACAMINTE_C3 = [
  { haina: "tricou", sezon: "vară", parte: "sus" },
  { haina: "pantaloni", sezon: "tot anul", parte: "jos" },
  { haina: "rochie", sezon: "vară/primăvară", parte: "întreg" },
  { haina: "palton", sezon: "iarnă/toamnă", parte: "sus" },
  { haina: "fustă", sezon: "vară/primăvară", parte: "jos" },
  { haina: "bluza", sezon: "tot anul", parte: "sus" },
  { haina: "cizme", sezon: "iarnă/toamnă", parte: "picioare" },
  { haina: "sandale", sezon: "vară", parte: "picioare" },
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

    verbe_reflexive_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const allVerbs = ["a se spăla", "a se îmbrăca", "a se juca", "a se trezi", "a se culca", "a se uita", "a se gândi", "a se întoarce"];
      const nonReflexive = ["a merge", "a citi", "a mânca", "a vorbi", "a cânta", "a alerga", "a lucra", "a dormi"];
      for (let i = 0; i < 30; i++) {
        const data = pick(VERBE_REFLEXIVE, rng);
        const qType = Math.floor(rng() * 4);
        if (qType === 0) {
          // Identify reflexive verb in a list
          const correct = pick(allVerbs, rng);
          const wrong = shuffle(nonReflexive, rng).slice(0, 3);
          q.push(createMCQ("verb_c3", "verbe_reflexive_c3",
            `Care dintre aceste verbe este REFLEXIV?`,
            correct, wrong, rng));
        } else if (qType === 1) {
          // pers I form
          const wrong = shuffle(VERBE_REFLEXIVE, rng).filter(d => d.pers1 !== data.pers1).slice(0, 3).map(d => d.pers1);
          q.push(createMCQ("verb_c3", "verbe_reflexive_c3",
            `Care este forma corectă a verbului '${data.inf}' pentru persoana I singular (eu)?`,
            data.pers1, wrong, rng));
        } else if (qType === 2) {
          // pers III form
          const wrong = shuffle(VERBE_REFLEXIVE, rng).filter(d => d.pers3 !== data.pers3).slice(0, 3).map(d => d.pers3);
          q.push(createMCQ("verb_c3", "verbe_reflexive_c3",
            `Care este forma corectă a verbului '${data.inf}' pentru persoana a III-a singular (el/ea)?`,
            data.pers3, wrong, rng));
        } else {
          // theory
          const theory = pick([
            { q: "Ce este un verb reflexiv?", correct: "Un verb care exprimă o acțiune îndreptată asupra subiectului", wrong: ["Un verb la trecut", "Un verb fără subiect", "Un verb la plural"] },
            { q: "Care pronume reflexiv se folosește cu verbele reflexive la persoana I singular?", correct: "mă", wrong: ["se", "îl", "ne"] },
            { q: "Care pronume reflexiv se folosește cu verbele reflexive la persoana a III-a?", correct: "se", wrong: ["mă", "te", "vă"] },
            { q: "Care pronume reflexiv se folosește cu verbele reflexive la persoana I plural?", correct: "ne", wrong: ["mă", "se", "vă"] },
            { q: "Identifică verbul reflexiv din: 'Copiii se joacă în parc.'", correct: "se joacă", wrong: ["copiii", "în parc", "joacă"] },
          ], rng);
          q.push(createMCQ("verb_c3", "verbe_reflexive_c3",
            theory.q, theory.correct, theory.wrong, rng));
        }
      }
      return q;
    },

    modul_imperativ_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const imperativ = [
        { inf: "a veni", sg: "vino!", pl: "veniți!" },
        { inf: "a merge", sg: "mergi!", pl: "mergeți!" },
        { inf: "a citi", sg: "citește!", pl: "citiți!" },
        { inf: "a scrie", sg: "scrie!", pl: "scrieți!" },
        { inf: "a mânca", sg: "mănâncă!", pl: "mâncați!" },
        { inf: "a bea", sg: "bea!", pl: "beți!" },
        { inf: "a dormi", sg: "dormi!", pl: "dormiți!" },
        { inf: "a asculta", sg: "ascultă!", pl: "ascultați!" },
        { inf: "a tăcea", sg: "taci!", pl: "tăceți!" },
        { inf: "a se spăla", sg: "spală-te!", pl: "spălați-vă!" },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(imperativ, rng);
        const qType = Math.floor(rng() * 4);
        if (qType === 0) {
          // sg imperativ
          const wrong = shuffle(imperativ, rng).filter(d => d.sg !== data.sg).slice(0, 3).map(d => d.sg);
          q.push(createMCQ("verb_c3", "modul_imperativ_c3",
            `Care este forma de IMPERATIV (persoana a II-a singular) a verbului '${data.inf}'?`,
            data.sg, wrong, rng));
        } else if (qType === 1) {
          // pl imperativ
          const wrong = shuffle(imperativ, rng).filter(d => d.pl !== data.pl).slice(0, 3).map(d => d.pl);
          q.push(createMCQ("verb_c3", "modul_imperativ_c3",
            `Care este forma de IMPERATIV (persoana a II-a plural) a verbului '${data.inf}'?`,
            data.pl, wrong, rng));
        } else if (qType === 2) {
          // recognize imperativ in sentence
          const sentences = [
            { prop: "Vino repede acasă!", verb: "vino", tip: "imperativ" },
            { prop: "Citiți cu atenție textul!", verb: "citiți", tip: "imperativ" },
            { prop: "Mănâncă tot din farfurie!", verb: "mănâncă", tip: "imperativ" },
            { prop: "Ascultați cu atenție!", verb: "ascultați", tip: "imperativ" },
            { prop: "Spală-te pe mâini înainte de masă!", verb: "spală-te", tip: "imperativ" },
          ];
          const s = pick(sentences, rng);
          q.push(createMCQ("verb_c3", "modul_imperativ_c3",
            `Care este verbul la IMPERATIV din: '${s.prop}'?`,
            s.verb, imperativ.filter(d => d.sg !== s.verb && d.pl !== s.verb).slice(0, 3).map(d => d.sg), rng));
        } else {
          // theory
          const theory = pick([
            { q: "Ce exprimă modul IMPERATIV?", correct: "O poruncă, un îndemn sau o rugăminte", wrong: ["O acțiune trecută", "O stare prezentă", "O întrebare"] },
            { q: "La ce persoană se folosește de obicei imperativul?", correct: "Persoana a II-a (tu/voi)", wrong: ["Persoana I (eu/noi)", "Persoana a III-a (el/ei)", "Toate persoanele"] },
            { q: "Ce semn de punctuație se pune de obicei după imperativ?", correct: "Semnul exclamării (!)", wrong: ["Punctul (.)", "Semnul întrebării (?)", "Virgula (,)"] },
            { q: "Care propoziție conține un verb la imperativ?", correct: "Deschide cartea la pagina 10!", wrong: ["El a deschis cartea.", "Cartea este deschisă.", "Când deschizi cartea?"] },
          ], rng);
          q.push(createMCQ("verb_c3", "modul_imperativ_c3",
            theory.q, theory.correct, theory.wrong, rng));
        }
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
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(items, rng);
        q.push(createMCQ("adjectiv_c3", "adj_propozitie_c3",
          `Care este adjectivul din propoziția: '${data.prop}'?`,
          data.adj, data.wrong, rng));
      }
      return q;
    },

    grade_adj_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(GRADE_ADJ, rng);
        const qType = Math.floor(rng() * 4);
        if (qType === 0) {
          // poz → comp
          const wrong = shuffle(GRADE_ADJ, rng).filter(d => d.comp !== data.comp).slice(0, 3).map(d => d.comp);
          q.push(createMCQ("adjectiv_c3", "grade_adj_c3",
            `Care este COMPARATIVUL adjectivului '${data.poz}'?`,
            data.comp, wrong, rng));
        } else if (qType === 1) {
          // poz → sup
          const wrong = shuffle(GRADE_ADJ, rng).filter(d => d.sup !== data.sup).slice(0, 3).map(d => d.sup);
          q.push(createMCQ("adjectiv_c3", "grade_adj_c3",
            `Care este SUPERLATIVUL ABSOLUT al adjectivului '${data.poz}'?`,
            data.sup, wrong, rng));
        } else if (qType === 2) {
          // recognize the grade
          const form = pick([data.poz, data.comp, data.sup], rng);
          const grade = form === data.poz ? "pozitiv" : form === data.comp ? "comparativ" : "superlativ";
          q.push(createMCQ("adjectiv_c3", "grade_adj_c3",
            `La ce grad de comparație se află adjectivul '${form}'?`,
            grade, ["pozitiv", "comparativ", "superlativ"].filter(g => g !== grade), rng));
        } else {
          // theory question
          const theory = pick([
            { q: "Ce exprimă gradul POZITIV?", correct: "Calitatea fără comparație (ex: bun)", wrong: ["O calitate mai mică", "Cea mai înaltă calitate", "O calitate egală"] },
            { q: "Ce exprimă gradul COMPARATIV?", correct: "O comparație între două ființe/lucruri (ex: mai bun)", wrong: ["Calitatea fără comparație", "Cea mai înaltă calitate", "Negarea calității"] },
            { q: "Ce exprimă gradul SUPERLATIV?", correct: "Cel mai înalt grad al calității (ex: cel mai bun)", wrong: ["O comparație", "Calitatea normală", "Negarea calității"] },
            { q: "Cum se formează COMPARATIVUL în română?", correct: "Se adaugă 'mai' înaintea adjectivului", wrong: ["Se adaugă '-issim' la sfârșit", "Se adaugă 'cel mai'", "Se schimbă terminația"] },
          ], rng);
          q.push(createMCQ("adjectiv_c3", "grade_adj_c3",
            theory.q, theory.correct, theory.wrong, rng));
        }
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
        const wrong = shuffle(SINONIME_C3, rng).filter(d => d.syn !== data.syn).slice(0, 3).map(d => d.syn);
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
        const wrong = shuffle(ANTONIME_C3, rng).filter(d => d.ant !== data.ant).slice(0, 3).map(d => d.ant);
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

    despartire_silabe_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const cuvinte = [
        { cuv: "casă", desp: "ca-să", nr: "2", wrong_desp: ["cas-ă", "c-asă", "ca-s-ă"], wrong_nr: ["1", "3", "4"] },
        { cuv: "carte", desp: "car-te", nr: "2", wrong_desp: ["ca-rte", "cart-e", "c-arte"], wrong_nr: ["1", "3", "4"] },
        { cuv: "soare", desp: "soa-re", nr: "2", wrong_desp: ["so-are", "soar-e", "s-oare"], wrong_nr: ["1", "3", "4"] },
        { cuv: "școală", desp: "școa-lă", nr: "2", wrong_desp: ["șco-ală", "școal-ă", "ș-coală"], wrong_nr: ["1", "3", "4"] },
        { cuv: "animal", desp: "a-ni-mal", nr: "3", wrong_desp: ["an-i-mal", "a-nim-al", "ani-mal"], wrong_nr: ["1", "2", "4"] },
        { cuv: "pădure", desp: "pă-du-re", nr: "3", wrong_desp: ["păd-u-re", "pă-dur-e", "pădu-re"], wrong_nr: ["1", "2", "4"] },
        { cuv: "frumos", desp: "fru-mos", nr: "2", wrong_desp: ["f-rumos", "frum-os", "fr-umos"], wrong_nr: ["1", "3", "4"] },
        { cuv: "copilărie", desp: "co-pi-lă-ri-e", nr: "5", wrong_desp: ["co-pil-ă-rie", "copil-ă-ri-e", "co-pi-lăr-i-e"], wrong_nr: ["3", "4", "6"] },
        { cuv: "munte", desp: "mun-te", nr: "2", wrong_desp: ["m-unte", "mu-nte", "munt-e"], wrong_nr: ["1", "3", "4"] },
        { cuv: "primăvară", desp: "pri-mă-va-ră", nr: "4", wrong_desp: ["prim-ă-va-ră", "pri-mă-var-ă", "primă-va-ră"], wrong_nr: ["2", "3", "5"] },
        { cuv: "întrebare", desp: "în-tre-ba-re", nr: "4", wrong_desp: ["înt-re-ba-re", "în-treb-a-re", "întreba-re"], wrong_nr: ["2", "3", "5"] },
        { cuv: "fereastră", desp: "fe-reas-tră", nr: "3", wrong_desp: ["fe-re-as-tră", "fere-as-tră", "fer-eas-tră"], wrong_nr: ["2", "4", "5"] },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(cuvinte, rng);
        if (rng() > 0.4) {
          q.push(createMCQ("ortografie_c3", "despartire_silabe_c3",
            `Cum se desparte corect în silabe cuvântul '${data.cuv}'?`,
            data.desp, data.wrong_desp, rng));
        } else {
          q.push(createMCQ("ortografie_c3", "despartire_silabe_c3",
            `Câte silabe are cuvântul '${data.cuv}'?`,
            data.nr, data.wrong_nr, rng));
        }
      }
      return q;
    },

    virgula_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const items = [
        // enumerare
        { prop: "Pe masă erau mere, pere, cireșe și prune.", regula: "enumerare", explicatie: "Virgula separă elementele dintr-o enumerație" },
        { prop: "Ana, Mihai, Elena și Ion s-au jucat.", regula: "enumerare", explicatie: "Virgula separă numele dintr-o înșiruire" },
        { prop: "Câinele aleargă, sare și latră.", regula: "enumerare", explicatie: "Virgula separă verbele din enumerație" },
        // vocativ (adresare directa)
        { prop: "Ana, vino repede acasă!", regula: "vocativ (adresare directă)", explicatie: "Virgula separă numele persoanei adresate de restul propoziției" },
        { prop: "Mama, te rog să mă ajuți!", regula: "vocativ (adresare directă)", explicatie: "Virgula după numele celui adresat" },
        { prop: "Băieți, fiți atenți la lecție!", regula: "vocativ (adresare directă)", explicatie: "Virgula după adresarea directă" },
        // propozitie intercalata
        { prop: "Ion, elev harnic, a luat nota 10.", regula: "apoziție (explicație intercalată)", explicatie: "Virgulele izolează o explicație adăugată" },
      ];
      const theory = [
        { q: "Când punem VIRGULĂ în propoziție?", correct: "La enumerare, adresare directă, apoziție", wrong: ["Doar la sfârșitul propoziției", "Înaintea fiecărui verb", "Niciodată"] },
        { q: "Ce semn de punctuație separă elementele unei ENUMERAȚII?", correct: "Virgula (,)", wrong: ["Punct (.", "Semnul exclamării (!)", "Linia de dialog (–)"] },
        { q: "Ce semn de punctuație se pune după ADRESAREA DIRECTĂ?", correct: "Virgula (,)", wrong: ["Punct (.)", "Semnul exclamării (!)", "Semnul întrebării (?)"] },
        { q: "Care propoziție este CORECT punctuată?", correct: "Ana, vino acasă!", wrong: ["Ana vino acasă!", "Ana vino, acasă!", "Ana vino acasă."] },
        { q: "De ce punem virgulă în: 'Am cumpărat pâine, lapte și brânză.'?", correct: "Pentru că avem o enumerație", wrong: ["Pentru că avem o adresare", "Pentru că avem un dialog", "Nu ar trebui virgulă"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (rng() < 0.35) {
          const t = pick(theory, rng);
          q.push(createMCQ("ortografie_c3", "virgula_c3", t.q, t.correct, t.wrong, rng));
        } else {
          const data = pick(items, rng);
          const qType = Math.floor(rng() * 2);
          if (qType === 0) {
            q.push(createMCQ("ortografie_c3", "virgula_c3",
              `De ce se folosește virgula în: '${data.prop}'?`,
              data.explicatie,
              ["Virgula nu este necesară aici", "Pentru că propoziția e lungă", "Înaintea conjuncției 'și'"], rng));
          } else {
            q.push(createMCQ("ortografie_c3", "virgula_c3",
              `Ce regulă de punctuație apare în: '${data.prop}'?`,
              data.regula,
              ["apoziție (explicație intercalată)", "vocativ (adresare directă)", "enumerare"].filter(r => r !== data.regula).slice(0, 3), rng));
          }
        }
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

    subiect_predicat_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const propozitii = [
        { prop: "Ana citește o carte frumoasă.", subiect: "Ana", predicat: "citește", wrong_s: ["carte", "citește", "frumoasă"], wrong_p: ["Ana", "carte", "frumoasă"] },
        { prop: "Câinele negru latră tare.", subiect: "Câinele", predicat: "latră", wrong_s: ["latră", "negru", "tare"], wrong_p: ["Câinele", "negru", "tare"] },
        { prop: "Copiii se joacă în parc.", subiect: "Copiii", predicat: "se joacă", wrong_s: ["joacă", "parc", "în"], wrong_p: ["Copiii", "parc", "în"] },
        { prop: "Mama gătește o supă delicioasă.", subiect: "Mama", predicat: "gătește", wrong_s: ["gătește", "supă", "delicioasă"], wrong_p: ["Mama", "supă", "delicioasă"] },
        { prop: "Soarele strălucește pe cer albastru.", subiect: "Soarele", predicat: "strălucește", wrong_s: ["strălucește", "cer", "albastru"], wrong_p: ["Soarele", "cer", "albastru"] },
        { prop: "Elevii silitori au luat note mari.", subiect: "Elevii", predicat: "au luat", wrong_s: ["au luat", "note", "mari"], wrong_p: ["Elevii", "note", "mari"] },
        { prop: "Bunica povestește o poveste frumoasă.", subiect: "Bunica", predicat: "povestește", wrong_s: ["povestește", "poveste", "frumoasă"], wrong_p: ["Bunica", "poveste", "frumoasă"] },
        { prop: "Vântul suflă puternic afară.", subiect: "Vântul", predicat: "suflă", wrong_s: ["suflă", "puternic", "afară"], wrong_p: ["Vântul", "puternic", "afară"] },
        { prop: "Florile înfloresc primăvara.", subiect: "Florile", predicat: "înfloresc", wrong_s: ["înfloresc", "primăvara", "Florile"], wrong_p: ["Florile", "primăvara", "înfloresc"] },
        { prop: "Pisica doarme pe canapea moale.", subiect: "Pisica", predicat: "doarme", wrong_s: ["doarme", "canapea", "moale"], wrong_p: ["Pisica", "canapea", "moale"] },
      ];
      const theory = [
        { q: "Ce este SUBIECTUL?", correct: "Cuvântul care arată CINE face acțiunea", wrong: ["Cuvântul care arată CE face acțiunea", "Cuvântul care arată UNDE se face acțiunea", "Cuvântul care arată CUM este acțiunea"] },
        { q: "Ce este PREDICATUL?", correct: "Cuvântul care arată CE FACE subiectul", wrong: ["Cuvântul care arată CINE face acțiunea", "Cuvântul care arată CÂND se face acțiunea", "Cuvântul care arată CUI se face acțiunea"] },
        { q: "La ce întrebare răspunde subiectul?", correct: "Cine? / Ce?", wrong: ["Ce face? / Ce este?", "Cui? / A cui?", "Unde? / Când?"] },
        { q: "La ce întrebare răspunde predicatul?", correct: "Ce face? / Ce este?", wrong: ["Cine? / Ce?", "A cui? / Cui?", "Unde? / Când?"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (rng() < 0.3) {
          const t = pick(theory, rng);
          q.push(createMCQ("propozitia_c3", "subiect_predicat_c3", t.q, t.correct, t.wrong, rng));
        } else {
          const data = pick(propozitii, rng);
          if (rng() > 0.5) {
            q.push(createMCQ("propozitia_c3", "subiect_predicat_c3",
              `Care este SUBIECTUL în: '${data.prop}'?`,
              data.subiect, data.wrong_s, rng));
          } else {
            q.push(createMCQ("propozitia_c3", "subiect_predicat_c3",
              `Care este PREDICATUL în: '${data.prop}'?`,
              data.predicat, data.wrong_p, rng));
          }
        }
      }
      return q;
    },

    atributul_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const propozitii = [
        { prop: "Câinele negru latră.", atribut: "negru", subst: "câinele", wrong: ["latră", "câinele", "tare"] },
        { prop: "Fetița cu plete citește.", atribut: "cu plete", subst: "fetița", wrong: ["fetița", "citește", "repede"] },
        { prop: "Cartea veche este interesantă.", atribut: "veche", subst: "cartea", wrong: ["cartea", "interesantă", "este"] },
        { prop: "Copilul harnic a câștigat.", atribut: "harnic", subst: "copilul", wrong: ["copilul", "a câștigat", "concursul"] },
        { prop: "Pomul cel înalt a căzut.", atribut: "cel înalt", subst: "pomul", wrong: ["pomul", "a căzut", "furtunii"] },
        { prop: "Mama cea bună a gătit.", atribut: "cea bună", subst: "mama", wrong: ["mama", "a gătit", "bine"] },
        { prop: "Elevii sârguincioși au luat premii.", atribut: "sârguincioși", subst: "elevii", wrong: ["elevii", "au luat", "premii"] },
        { prop: "Mâncarea delicioasă a dispărut.", atribut: "delicioasă", subst: "mâncarea", wrong: ["mâncarea", "a dispărut", "rapid"] },
        { prop: "Prietenul meu cel mai bun a venit.", atribut: "cel mai bun", subst: "prietenul", wrong: ["prietenul", "a venit", "meu"] },
        { prop: "Zăpada albă acoperă câmpia.", atribut: "albă", subst: "zăpada", wrong: ["zăpada", "acoperă", "câmpia"] },
      ];
      const theory = [
        { q: "Ce este ATRIBUTUL?", correct: "Cuvântul care determină un substantiv (arată cum este)", wrong: ["Cuvântul care arată acțiunea", "Cuvântul care arată subiectul", "Cuvântul care leagă propoziții"] },
        { q: "La ce întrebare răspunde atributul?", correct: "Care? Ce fel de? Al cui?", wrong: ["Cine? Ce?", "Ce face?", "Unde? Când?"] },
        { q: "Ce parte de vorbire poate fi atribut?", correct: "Adjectivul", wrong: ["Verbul", "Conjuncția", "Adverbul"] },
        { q: "Identifică atributul din: 'Am citit o poveste frumoasă.'", correct: "frumoasă", wrong: ["am citit", "poveste", "o"] },
      ];
      for (let i = 0; i < 30; i++) {
        if (rng() < 0.25) {
          const t = pick(theory, rng);
          q.push(createMCQ("propozitia_c3", "atributul_c3", t.q, t.correct, t.wrong, rng));
        } else {
          const data = pick(propozitii, rng);
          q.push(createMCQ("propozitia_c3", "atributul_c3",
            `Care este ATRIBUTUL în: '${data.prop}'?`,
            data.atribut, data.wrong, rng));
        }
      }
      return q;
    },

    vorbire_directa_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const q: CurriculumQuestion[] = [];
      const items = [
        ...VORBIRE_DIRECTA,
        { prop: '– Bună ziua! a spus Ion.', vorbitor: "Ion", replica: "Bună ziua!", semn: "–" },
        { prop: '– Vrem să mergem acasă! strigară copiii.', vorbitor: "copiii", replica: "Vrem să mergem acasă!", semn: "–" },
      ];
      const theory = [
        { q: "Ce este VORBIREA DIRECTĂ?", correct: "Reproducerea exactă a cuvintelor unui personaj", wrong: ["Rezumatul a ceea ce spune personajul", "Descrierea acțiunilor personajului", "Povestirea la persoana a III-a"] },
        { q: "Cu ce semne grafice se marchează vorbirea directă?", correct: "Ghilimele (\") sau linia de dialog (–)", wrong: ["Paranteze ()", "Asterisc (*)", "Punct și virgulă (;)"] },
        { q: "Ce este linia de dialog?", correct: "Semnul (–) care indică că un personaj vorbește", wrong: ["Virgula", "Cratima (-) din interior", "Punctul de la sfârșitul frazei"] },
        { q: "Unde se pune linia de dialog?", correct: "La începutul replicii, pe rând nou", wrong: ["La sfârșitul replicii", "La mijlocul replicii", "Înaintea numelui personajului"] },
        { q: "Care propoziție conține vorbire directă corect marcată?", correct: '– Vino acasă! spuse mama.', wrong: ['"Vino acasă spuse mama."', 'Vino acasă, spuse mama.', '(Vino acasă!) spuse mama.'] },
      ];
      for (let i = 0; i < 30; i++) {
        if (rng() < 0.35) {
          const t = pick(theory, rng);
          q.push(createMCQ("propozitia_c3", "vorbire_directa_c3", t.q, t.correct, t.wrong, rng));
        } else {
          const data = pick(items, rng);
          const qType = Math.floor(rng() * 3);
          if (qType === 0) {
            const wrongVorbitori = ["Ion", "Maria", "doamna profesoară", "bunica", "Mihai", "copiii"].filter(v => v !== data.vorbitor).slice(0, 3);
            q.push(createMCQ("propozitia_c3", "vorbire_directa_c3",
              `Cine vorbește în: '${data.prop}'?`,
              data.vorbitor, wrongVorbitori, rng));
          } else if (qType === 1) {
            q.push(createMCQ("propozitia_c3", "vorbire_directa_c3",
              `Ce semn grafic marchează vorbirea directă în: '${data.prop}'?`,
              data.semn === '"' ? "Ghilimele (\")" : "Linia de dialog (–)",
              ["Paranteze ()", "Punct și virgulă (;)", data.semn === '"' ? "Linia de dialog (–)" : "Ghilimele (\")"], rng));
          } else {
            q.push(createMCQ("propozitia_c3", "vorbire_directa_c3",
              `Care este replica (cuvintele spuse) în: '${data.prop}'?`,
              data.replica,
              ["Bună dimineața!", "Ne vedem mâine.", "Ce faci?"].filter(r => r !== data.replica).slice(0, 3), rng));
          }
        }
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

  // ══════════════ LECTURĂ C3 ══════════════ (kept before vocabular_tematic for ordering)

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
