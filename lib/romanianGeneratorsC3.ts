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

// ─── GENERATORS ─────────────────────────────────────────────────────────────

export const C3_Generators: Record<string, Record<string, (seed?: number) => CurriculumQuestion[]>> = {

  // ══════════════ SUBSTANTIVUL ══════════════

  substantiv_c3: {
    gen_subst_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
      const genuri = ["masculin", "feminin", "neutru"];
      for (let i = 0; i < 30; i++) {
        const data = pick(SUBST_GEN, rng);
        const wrong = genuri.filter(g => g !== data.gen);
        mcqs.push(createMCQ("substantiv_c3", "gen_subst_c3",
          `Ce gen are substantivul '${data.subst}'?`,
          data.gen, wrong, rng));
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "substantiv_c3", subtopic: "gen_subst_c3", question: "Genul substantivului 'casă' este...", answer: ["feminin"], hint: "Substantiv în -ă, feminin" },
        { type: "typing", topic: "substantiv_c3", subtopic: "gen_subst_c3", question: "Genul substantivului 'copac' este...", answer: ["masculin"], hint: "Plante și copaci sunt masculine" },
        { type: "typing", topic: "substantiv_c3", subtopic: "gen_subst_c3", question: "Genul substantivului 'scaun' este...", answer: ["neutru"], hint: "Mobilier și obiecte neutre" },
        { type: "typing", topic: "substantiv_c3", subtopic: "gen_subst_c3", question: "Genul substantivului 'carte' este...", answer: ["feminin"], hint: "Obiecte în -ă sunt feminine" },
        { type: "typing", topic: "substantiv_c3", subtopic: "gen_subst_c3", question: "Genul substantivului 'munte' este...", answer: ["masculin"], hint: "Munți și formații geografice masculine" },
        { type: "typing", topic: "substantiv_c3", subtopic: "gen_subst_c3", question: "Genul substantivului 'tablou' este...", answer: ["neutru"], hint: "Cuvinte care se termină în -u sunt neutre" },
        { type: "typing", topic: "substantiv_c3", subtopic: "gen_subst_c3", question: "Genul substantivului 'pasăre' este...", answer: ["feminin"], hint: "Substantiv în -ă, feminin" },
        { type: "typing", topic: "substantiv_c3", subtopic: "gen_subst_c3", question: "Genul substantivului 'lup' este...", answer: ["masculin"], hint: "Animale sălbatice masculine" },
        { type: "typing", topic: "substantiv_c3", subtopic: "gen_subst_c3", question: "Genul substantivului 'caiet' este...", answer: ["neutru"], hint: "Obiecte școlare neutre" },
        { type: "typing", topic: "substantiv_c3", subtopic: "gen_subst_c3", question: "Genul substantivului 'grădină' este...", answer: ["feminin"], hint: "Substantiv în -ă, feminin" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },

    numar_subst_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(SUBST_NR, rng);
        if (rng() > 0.5) {
          const wrong = shuffle(SUBST_NR, rng).filter(d => d.pl !== data.pl).slice(0, 3).map(d => d.pl);
          mcqs.push(createMCQ("substantiv_c3", "numar_subst_c3",
            `Care este PLURALUL substantivului '${data.sg}'?`,
            data.pl, wrong, rng));
        } else {
          const wrong = shuffle(SUBST_NR, rng).filter(d => d.sg !== data.sg).slice(0, 3).map(d => d.sg);
          mcqs.push(createMCQ("substantiv_c3", "numar_subst_c3",
            `Care este SINGULARUL substantivului '${data.pl}'?`,
            data.sg, wrong, rng));
        }
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "substantiv_c3", subtopic: "numar_subst_c3", question: "Pluralul cuvântului 'om' este...", answer: ["oameni"], hint: "Plural neregulat, forma specială" },
        { type: "typing", topic: "substantiv_c3", subtopic: "numar_subst_c3", question: "Pluralul cuvântului 'copil' este...", answer: ["copii"], hint: "Plural neregulat, -ii" },
        { type: "typing", topic: "substantiv_c3", subtopic: "numar_subst_c3", question: "Pluralul cuvântului 'carte' este...", answer: ["carti", "cărți"], hint: "Plural feminin, -i" },
        { type: "typing", topic: "substantiv_c3", subtopic: "numar_subst_c3", question: "Pluralul cuvântului 'casă' este...", answer: ["case"], hint: "Plural feminin, -e" },
        { type: "typing", topic: "substantiv_c3", subtopic: "numar_subst_c3", question: "Pluralul cuvântului 'floare' este...", answer: ["flori"], hint: "Plural feminin, -i" },
        { type: "typing", topic: "substantiv_c3", subtopic: "numar_subst_c3", question: "Pluralul cuvântului 'munte' este...", answer: ["munti", "munți"], hint: "Plural masculin, -i" },
        { type: "typing", topic: "substantiv_c3", subtopic: "numar_subst_c3", question: "Singularul cuvântului 'copaci' este...", answer: ["copac"], hint: "Singular masculin" },
        { type: "typing", topic: "substantiv_c3", subtopic: "numar_subst_c3", question: "Singularul cuvântului 'câini' este...", answer: ["caîne", "câine"], hint: "Singular masculin cu diacritice" },
        { type: "typing", topic: "substantiv_c3", subtopic: "numar_subst_c3", question: "Pluralul cuvântului 'prieten' este...", answer: ["prieteni"], hint: "Plural masculin, -i" },
        { type: "typing", topic: "substantiv_c3", subtopic: "numar_subst_c3", question: "Pluralul cuvântului 'creion' este...", answer: ["creioane"], hint: "Plural neutru, -oane" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },

    caz_subst_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
      const cazuri = ["Nominativ", "Genitiv", "Dativ", "Acuzativ"];
      for (let i = 0; i < 30; i++) {
        const data = pick(SUBST_CAZ, rng);
        if (rng() > 0.5) {
          const wrong = cazuri.filter(c => c !== data.caz);
          mcqs.push(createMCQ("substantiv_c3", "caz_subst_c3",
            `'${data.prop}' — La ce CAZ este substantivul '${data.subst}'?`,
            data.caz, wrong, rng));
        } else {
          const alteCazuri = shuffle(SUBST_CAZ, rng).filter(d => d.subst !== data.subst).slice(0, 3).map(d => d.subst);
          mcqs.push(createMCQ("substantiv_c3", "caz_subst_c3",
            `'${data.prop}' — ${data.intrebare}`,
            data.subst, alteCazuri, rng));
        }
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "substantiv_c3", subtopic: "caz_subst_c3", question: "Nominativul cuvântului 'carte': aceasta este o ...", answer: ["carte"], hint: "Cazul subiectului, cine?" },
        { type: "typing", topic: "substantiv_c3", subtopic: "caz_subst_c3", question: "Genitivul cuvântului 'casă' arată posesia: cartea ...", answer: ["casei"], hint: "Cazul posesiei, de cine?" },
        { type: "typing", topic: "substantiv_c3", subtopic: "caz_subst_c3", question: "Dativul cuvântului 'copil' arată relația: dau cadou ...", answer: ["copilului"], hint: "Cazul indirect, cui?" },
        { type: "typing", topic: "substantiv_c3", subtopic: "caz_subst_c3", question: "Acuzativul cuvântului 'masă' este obiectul: văd ...", answer: ["masa"], hint: "Cazul obiectului direct, pe cine?" },
        { type: "typing", topic: "substantiv_c3", subtopic: "caz_subst_c3", question: "Nominativul cuvântului 'om': ... inteligent.", answer: ["omul"], hint: "Subiectul propoziției" },
        { type: "typing", topic: "substantiv_c3", subtopic: "caz_subst_c3", question: "Genitivul cuvântului 'floare': miroasme ...", answer: ["florii"], hint: "Posesia: miros al florii" },
        { type: "typing", topic: "substantiv_c3", subtopic: "caz_subst_c3", question: "Dativul cuvântului 'fată': mă gândesc la ...", answer: ["fetei"], hint: "Relația indirectă după prepoziții" },
        { type: "typing", topic: "substantiv_c3", subtopic: "caz_subst_c3", question: "Acuzativul cuvântului 'munte': escalez ...", answer: ["muntele"], hint: "Obiectul direct al acțiunii" },
        { type: "typing", topic: "substantiv_c3", subtopic: "caz_subst_c3", question: "Nominativul: substantivul subiect în propoziție", answer: ["Nominativ"], hint: "Cine? Ce? - cinci cazuri" },
        { type: "typing", topic: "substantiv_c3", subtopic: "caz_subst_c3", question: "Cuvântul care arată posesia de ...: Genitiv", answer: ["Genitiv"], hint: "De cine? Al cui? - cazul posesiei" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },
  },

  // ══════════════ VERBUL ══════════════

  verb_c3: {
    conjugare_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
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
        mcqs.push(createMCQ("verb_c3", "conjugare_c3",
          `Care este forma corectă a verbului '${verb.inf}' pentru persoana '${persoana.label}'?`,
          correct, wrong, rng));
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "verb_c3", subtopic: "conjugare_c3", question: "Forma verbului 'a merge' pentru 'eu':", answer: ["merg"], hint: "Persoana I singular, prezent" },
        { type: "typing", topic: "verb_c3", subtopic: "conjugare_c3", question: "Forma verbului 'a cânta' pentru 'tu':", answer: ["cantî", "cânți"], hint: "Persoana a II-a singular" },
        { type: "typing", topic: "verb_c3", subtopic: "conjugare_c3", question: "Forma verbului 'a citi' pentru 'el':", answer: ["citeste", "citește"], hint: "Persoana a III-a singular" },
        { type: "typing", topic: "verb_c3", subtopic: "conjugare_c3", question: "Forma verbului 'a juca' pentru 'noi':", answer: ["jucam", "jucăm"], hint: "Persoana I plural" },
        { type: "typing", topic: "verb_c3", subtopic: "conjugare_c3", question: "Forma verbului 'a lucra' pentru 'voi':", answer: ["lucrati", "lucrați"], hint: "Persoana a II-a plural" },
        { type: "typing", topic: "verb_c3", subtopic: "conjugare_c3", question: "Forma verbului 'a spune' pentru 'ei':", answer: ["spun"], hint: "Persoana a III-a plural" },
        { type: "typing", topic: "verb_c3", subtopic: "conjugare_c3", question: "Forma verbului 'a bea' pentru 'eu':", answer: ["beau"], hint: "Persoana I singular prezent" },
        { type: "typing", topic: "verb_c3", subtopic: "conjugare_c3", question: "Forma verbului 'a dansa' pentru 'noi':", answer: ["dansam", "dansăm"], hint: "Persoana I plural prezent" },
        { type: "typing", topic: "verb_c3", subtopic: "conjugare_c3", question: "Forma verbului 'a veni' pentru 'tu':", answer: ["vii"], hint: "Persoana a II-a singular" },
        { type: "typing", topic: "verb_c3", subtopic: "conjugare_c3", question: "Forma verbului 'a face' pentru 'el':", answer: ["face"], hint: "Persoana a III-a singular" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },

    timp_verb_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
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
          mcqs.push(createMCQ("verb_c3", "timp_verb_c3",
            `La ce TIMP este verbul: '${form}'?`,
            timpLabel, wrong, rng));
        } else {
          const wrong = VERB_TIMP
            .filter(v => v.verb !== data.verb)
            .map(v => v[timp])
            .filter(f => f !== correct)
            .slice(0, 3);
          mcqs.push(createMCQ("verb_c3", "timp_verb_c3",
            `Care este forma de ${timp} a verbului '${data.verb}'?`,
            correct, wrong, rng));
        }
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "verb_c3", subtopic: "timp_verb_c3", question: "Prezentul verbului 'a cânta' pentru 'el':", answer: ["canta", "cântă"], hint: "Prezent, persoana a III-a" },
        { type: "typing", topic: "verb_c3", subtopic: "timp_verb_c3", question: "Trecutul verbului 'a merge' pentru 'eu':", answer: ["am mers", "ammers"], hint: "Perfect compus cu 'am'" },
        { type: "typing", topic: "verb_c3", subtopic: "timp_verb_c3", question: "Viitorul verbului 'a juca' pentru 'noi':", answer: ["vom juca", "vomjuca"], hint: "Viitor apropiat cu 'vom'" },
        { type: "typing", topic: "verb_c3", subtopic: "timp_verb_c3", question: "Prezentul verbului 'a citi' pentru 'tu':", answer: ["citesti", "citești"], hint: "Prezent, persoana a II-a singular" },
        { type: "typing", topic: "verb_c3", subtopic: "timp_verb_c3", question: "Trecutul verbului 'a lucra' pentru 'voi':", answer: ["ati lucrat", "ați lucrat"], hint: "Perfect compus cu 'ați'" },
        { type: "typing", topic: "verb_c3", subtopic: "timp_verb_c3", question: "Viitorul verbului 'a dansa' pentru 'ea':", answer: ["va dansa", "vadansa"], hint: "Viitor cu 'va'" },
        { type: "typing", topic: "verb_c3", subtopic: "timp_verb_c3", question: "Prezentul verbului 'a bea' pentru 'ei':", answer: ["beau"], hint: "Prezent, persoana a III-a plural" },
        { type: "typing", topic: "verb_c3", subtopic: "timp_verb_c3", question: "Trecutul verbului 'a veni' pentru 'noi':", answer: ["am venit", "amvenit"], hint: "Perfect compus cu 'am'" },
        { type: "typing", topic: "verb_c3", subtopic: "timp_verb_c3", question: "Viitorul verbului 'a face' pentru 'tu':", answer: ["vei face", "veiface"], hint: "Viitor cu 'vei'" },
        { type: "typing", topic: "verb_c3", subtopic: "timp_verb_c3", question: "Prezentul verbului 'a spune' pentru 'noi':", answer: ["spunem"], hint: "Prezent, persoana I plural" },
      ];
      return shuffle([...mcqs, ...typings], rng);
    },

    persoana_nr_c3: (seed = Date.now()) => {
      const rng = mulberry32(seed);
      const mcqs: CurriculumQuestion[] = [];
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
        mcqs.push(createMCQ("verb_c3", "persoana_nr_c3",
          `La ce persoană și număr este verbul din: '${data.form}'?`,
          data.persoana, wrong, rng));
      }
      const typings: CurriculumTyping[] = [
        { type: "typing", topic: "verb_c3", subtopic: "persoana_nr_c3", question: "Persoana și numărul pentru 'eu merg':", answer: ["I singular"], hint: "Eu = prima persoană singular" },
        { type: "typing", topic: "verb_c3", subtopic: "persoana_nr_c3", question: "Persoana și numărul pentru 'tu citești':", answer: ["a II-a singular"], hint: "Tu = a doua persoană singular" },
        { type: "typing", topic: "verb_c3", subtopic: "persoana_nr_c3", question: "Persoana și numărul pentru 'el cântă':", answer: ["a III-a singular"], hint: "El = a treia persoană singular" },
        { type: "typing", topic: "verb_c3", subtopic: "persoana_nr_c3", question: "Persoana și numărul pentru 'noi mergem':", answer: ["I plural"], hint: "Noi = prima persoană plural" },
        { type: "typing", topic: "verb_c3", subtopic: "persoana_nr_c3", question: "Persoana și numărul pentru 'voi citiți':", answer: ["a II-a plural"], hint: "Voi = a doua persoană plural" },
        { type: "typing", topic: "verb_c3", subtopic: "persoana_nr_c3", question: "Persoana și numărul pentru 'ei citesc':", answer: ["a III-a plural"], hint: "Ei = a treia persoană plural" },
        { type: "typing", topic: "verb_c3", subtopic: "persoana_nr_c3", question: "Forma pentru 'eu': verbul 'a juca':", answer: ["joc"], hint: "Persoana I singular prezent" },
        { type: "typing", topic: "verb_c3", subtopic: "persoana_nr_c3", question: "Forma pentru 'noi': verbul 'a lucra':", answer: ["lucram", "lucrăm"], hint: "Persoana I plural prezent" },
        { type: "typing", topic: "verb_c3", subtopic: "persoana_nr_c3", question: "Forma pentru 'voi': verbul 'a citi':", answer: ["cititi", "citiți"], hint: "Persoana a II-a plural prezent" },
        { type: "typing", topic: "verb_c3", subtopic: "persoana_nr_c3", question: "Forma pentru 'ea': verbul 'a face':", answer: ["face"], hint: "Persoana a III-a singular prezent" },
      ];
      return shuffle([...mcqs, ...typings], rng);
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
