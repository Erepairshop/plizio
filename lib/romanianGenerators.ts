// ─── ROMANIAN GENERATORS (CLASA I) ─────────────────────────────────────────
// Procedural MCQ question generators for Romanian language curriculum
// Clasa I (1st grade) – alphabet, sounds, syllables, words, sentences, spelling, reading
//
// Generates 30 questions per subtopic using seeded PRNG for reproducibility.
// Clasa I: 100% MCQ (kids aged 6-7 cannot type reliably yet)

import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

/** Seeded PRNG (Mulberry32) */
function mulberry32(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Shuffle array using given RNG */
function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Pick random element from array */
function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

/** Create MCQ question with shuffled options */
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

const CLASA1_WORDS = {
  vocale: ["a", "ă", "â", "e", "i", "î", "o", "u"],
  consoane: [
    "b", "c", "d", "f", "g", "h", "j", "k", "l", "m",
    "n", "p", "r", "s", "ș", "t", "ț", "v", "x", "z",
  ],
  litereSpeciale: ["ă", "â", "î", "ș", "ț"],

  silabe: [
    { word: "casă", silabe: "ca-să", count: 2 },
    { word: "mama", silabe: "ma-ma", count: 2 },
    { word: "tata", silabe: "ta-ta", count: 2 },
    { word: "copac", silabe: "co-pac", count: 2 },
    { word: "câine", silabe: "câi-ne", count: 2 },
    { word: "pisică", silabe: "pi-si-că", count: 3 },
    { word: "mașină", silabe: "ma-și-nă", count: 3 },
    { word: "soarele", silabe: "soa-re-le", count: 3 },
    { word: "copil", silabe: "co-pil", count: 2 },
    { word: "carte", silabe: "car-te", count: 2 },
    { word: "floare", silabe: "floa-re", count: 2 },
    { word: "iarnă", silabe: "iar-nă", count: 2 },
    { word: "primăvară", silabe: "pri-mă-va-ră", count: 4 },
    { word: "cal", silabe: "cal", count: 1 },
    { word: "ou", silabe: "ou", count: 1 },
    { word: "lac", silabe: "lac", count: 1 },
    { word: "om", silabe: "om", count: 1 },
    { word: "sac", silabe: "sac", count: 1 },
    { word: "elefant", silabe: "e-le-fant", count: 3 },
    { word: "albină", silabe: "al-bi-nă", count: 3 },
    { word: "crocodil", silabe: "cro-co-dil", count: 3 },
    { word: "televizor", silabe: "te-le-vi-zor", count: 4 },
    { word: "fluture", silabe: "flu-tu-re", count: 3 },
    { word: "păpușă", silabe: "pă-pu-șă", count: 3 },
    { word: "ciocolată", silabe: "ci-o-co-la-tă", count: 5 },
    { word: "acuarelă", silabe: "a-cua-re-lă", count: 4 },
    { word: "umbrelă", silabe: "um-bre-lă", count: 3 },
    { word: "pasăre", silabe: "pa-să-re", count: 3 },
    { word: "vapor", silabe: "va-por", count: 2 },
    { word: "avion", silabe: "a-vi-on", count: 3 },
  ],

  sinonime: [
    { word: "mare", syn: "uriaș", wrong: ["mic", "vesel", "trist"] },
    { word: "mic", syn: "mărunt", wrong: ["mare", "frumos", "rapid"] },
    { word: "frumos", syn: "drăguț", wrong: ["urât", "mare", "rece"] },
    { word: "vesel", syn: "bucuros", wrong: ["trist", "mare", "mic"] },
    { word: "trist", syn: "supărat", wrong: ["vesel", "frumos", "mare"] },
    { word: "rapid", syn: "iute", wrong: ["lent", "mare", "vesel"] },
    { word: "lent", syn: "încet", wrong: ["rapid", "mare", "trist"] },
    { word: "bun", syn: "amabil", wrong: ["rău", "mare", "mic"] },
    { word: "rău", syn: "neastâmpărat", wrong: ["bun", "vesel", "mare"] },
    { word: "înalt", syn: "ridicat", wrong: ["scund", "mare", "vesel"] },
    { word: "cald", syn: "fierbinte", wrong: ["rece", "mare", "mic"] },
    { word: "rece", syn: "înghețat", wrong: ["cald", "mare", "vesel"] },
    { word: "vechi", syn: "bătrân", wrong: ["nou", "rapid", "trist"] },
    { word: "bogat", syn: "avut", wrong: ["sărac", "mic", "lent"] },
    { word: "sărac", syn: "nevoiaș", wrong: ["bogat", "vesel", "înalt"] },
    { word: "curajos", syn: "viteaz", wrong: ["fricos", "lent", "rece"] },
    { word: "harnic", syn: "muncitor", wrong: ["leneș", "trist", "mic"] },
    { word: "deștept", syn: "inteligent", wrong: ["prost", "lent", "rece"] },
    { word: "a fugi", syn: "a alerga", wrong: ["a cânta", "a dormi", "a plânge"] },
    { word: "a plânge", syn: "a suspina", wrong: ["a râde", "a cânta", "a sări"] },
    { word: "a ajuta", syn: "a sprijini", wrong: ["a împiedica", "a uita", "a plânge"] },
    { word: "a vorbi", syn: "a spune", wrong: ["a tăcea", "a cânta", "a dormi"] },
  ],

  antonime: [
    { word: "mare", ant: "mic" },
    { word: "frumos", ant: "urât" },
    { word: "vesel", ant: "trist" },
    { word: "bun", ant: "rău" },
    { word: "înalt", ant: "scund" },
    { word: "rapid", ant: "lent" },
    { word: "cald", ant: "rece" },
    { word: "lung", ant: "scurt" },
    { word: "greu", ant: "ușor" },
    { word: "nou", ant: "vechi" },
    { word: "alb", ant: "negru" },
    { word: "zi", ant: "noapte" },
    { word: "deschis", ant: "închis" },
    { word: "sus", ant: "jos" },
    { word: "plin", ant: "gol" },
  ],

  diminutive: [
    { word: "casă", dim: "căsuță" },
    { word: "floare", dim: "floricică" },
    { word: "copil", dim: "copilăș" },
    { word: "carte", dim: "cărticică" },
    { word: "câine", dim: "cățeluș" },
    { word: "pisică", dim: "pisicuță" },
    { word: "copac", dim: "copăcel" },
    { word: "pasăre", dim: "păsărică" },
    { word: "fată", dim: "fetișoară" },
    { word: "băiat", dim: "băiețel" },
    { word: "masă", dim: "măsuță" },
    { word: "pom", dim: "pomișor" },
    { word: "stea", dim: "steluță" },
    { word: "urs", dim: "ursuleț" },
    { word: "mână", dim: "mânuță" },
    { word: "piatră", dim: "pietricică" },
    { word: "pădure", dim: "pădurice" },
    { word: "scaun", dim: "scăunel" },
    { word: "drum", dim: "drumeag" },
    { word: "inimă", dim: "inimioară" },
  ],

  familii: [
    {
      root: "floare",
      family: ["florar", "floricică", "înflorit", "florărie"],
      nonFamily: ["cățeluș", "copăcel", "drumeag"],
    },
    {
      root: "casă",
      family: ["căsuță", "acasă", "casnică", "căsoi"],
      nonFamily: ["floricică", "pomișor", "pădurar"],
    },
    {
      root: "copil",
      family: ["copilărie", "copilăș", "copilăresc", "copilăros"],
      nonFamily: ["căsuță", "steluță", "pomișor"],
    },
    {
      root: "carte",
      family: ["cărticică", "cărturar", "librărie", "cărți"],
      nonFamily: ["măsuță", "pomișor", "cățeluș"],
    },
    {
      root: "pădure",
      family: ["pădurar", "pădureț", "pădurean", "împăduri"],
      nonFamily: ["cărticică", "căsuță", "steluță"],
    },
    {
      root: "apă",
      family: ["apeduct", "apoasă", "adăpa", "băltoacă"],
      nonFamily: ["pomișor", "cățeluș", "floricică"],
    },
    {
      root: "drum",
      family: ["drumeag", "drumuri", "drumeț", "drumeție"],
      nonFamily: ["floricică", "căsuță", "cărticică"],
    },
    {
      root: "joc",
      family: ["jucărie", "jucăuș", "juca", "jucător"],
      nonFamily: ["pomișor", "pădurar", "cărticică"],
    },
    {
      root: "grădină",
      family: ["grădinar", "grădinărit", "grădinăriță", "grădinuță"],
      nonFamily: ["cățeluș", "apeduct", "drumeag"],
    },
    {
      root: "lumină",
      family: ["luminoasă", "luminiță", "luminos", "iluminat"],
      nonFamily: ["grădinuță", "drumeag", "jucărie"],
    },
    {
      root: "cânt",
      family: ["cântăreț", "cântec", "cânta", "cântăreață"],
      nonFamily: ["luminiță", "floricică", "căsuță"],
    },
    {
      root: "lemn",
      family: ["lemnărie", "lemnos", "lemnar", "lemnuț"],
      nonFamily: ["cântec", "grădinuță", "jucărie"],
    },
  ],

  ceCi: [
    { word: "cer", group: "ce" },
    { word: "ceai", group: "ce" },
    { word: "ceapă", group: "ce" },
    { word: "cerc", group: "ce" },
    { word: "cerb", group: "ce" },
    { word: "cetate", group: "ce" },
    { word: "cinci", group: "ci" },
    { word: "ciocolată", group: "ci" },
    { word: "ciocan", group: "ci" },
    { word: "cireșe", group: "ci" },
    { word: "cinema", group: "ci" },
    { word: "cifră", group: "ci" },
  ],

  geGi: [
    { word: "ger", group: "ge" },
    { word: "geam", group: "ge" },
    { word: "geantă", group: "ge" },
    { word: "gem", group: "ge" },
    { word: "general", group: "ge" },
    { word: "girafă", group: "gi" },
    { word: "gimnastică", group: "gi" },
    { word: "ginere", group: "gi" },
    { word: "gigant", group: "gi" },
    { word: "giuvaier", group: "gi" },
  ],

  cheChiGheGhi: [
    { word: "cheie", group: "che" },
    { word: "cheltuială", group: "che" },
    { word: "cheful", group: "che" },
    { word: "chiar", group: "chi" },
    { word: "chitară", group: "chi" },
    { word: "chiflă", group: "chi" },
    { word: "chimie", group: "chi" },
    { word: "ghete", group: "ghe" },
    { word: "ghemotoc", group: "ghe" },
    { word: "ghici", group: "ghi" },
    { word: "ghindă", group: "ghi" },
    { word: "ghiocel", group: "ghi" },
    { word: "ghid", group: "ghi" },
  ],

  mBP: [
    { word: "câmp", blank: "câ_p", answer: "m", rule: "m înainte de p" },
    { word: "bombon", blank: "bo_bon", answer: "m", rule: "m înainte de b" },
    { word: "tâmplar", blank: "tâ_plar", answer: "m", rule: "m înainte de p" },
    { word: "umbrelă", blank: "u_brelă", answer: "m", rule: "m înainte de b" },
    { word: "trompetă", blank: "tro_petă", answer: "m", rule: "m înainte de p" },
    { word: "zimbru", blank: "zi_bru", answer: "m", rule: "m înainte de b" },
    { word: "compot", blank: "co_pot", answer: "m", rule: "m înainte de p" },
    { word: "bombă", blank: "bo_bă", answer: "m", rule: "m înainte de b" },
    { word: "templu", blank: "te_plu", answer: "m", rule: "m înainte de p" },
    { word: "tomberon", blank: "to_beron", answer: "m", rule: "m înainte de b" },
    { word: "îmbracă", blank: "î_bracă", answer: "m", rule: "m înainte de b" },
    { word: "împinge", blank: "î_pinge", answer: "m", rule: "m înainte de p" },
    { word: "îmbătrânit", blank: "î_bătrânit", answer: "m", rule: "m înainte de b" },
    { word: "împarte", blank: "î_parte", answer: "m", rule: "m înainte de p" },
    { word: "îmbunătățit", blank: "î_bunătățit", answer: "m", rule: "m înainte de b" },
    { word: "împreună", blank: "î_preună", answer: "m", rule: "m înainte de p" },
    { word: "imbold", blank: "i_bold", answer: "m", rule: "m înainte de b" },
    { word: "impresie", blank: "i_presie", answer: "m", rule: "m înainte de p" },
    { word: "ambalaj", blank: "a_balaj", answer: "m", rule: "m înainte de b" },
    { word: "amploare", blank: "a_ploare", answer: "m", rule: "m înainte de p" },
    { word: "cimbru", blank: "ci_bru", answer: "m", rule: "m înainte de b" },
    { word: "complot", blank: "co_plot", answer: "m", rule: "m înainte de p" },
    { word: "romboid", blank: "ro_boid", answer: "m", rule: "m înainte de b" },
    { word: "simplu", blank: "si_plu", answer: "m", rule: "m înainte de p" },
    { word: "numără", blank: "nu_ără", answer: "m", rule: "m înainte de ă" },
  ],

  aCircumflex: [
    { word: "pâine", displayWord: "p_ine", letter: "â", position: "interior" },
    { word: "câine", displayWord: "c_ine", letter: "â", position: "interior" },
    { word: "mâine", displayWord: "m_ine", letter: "â", position: "interior" },
    { word: "sfânt", displayWord: "sf_nt", letter: "â", position: "interior" },
    { word: "pârâu", displayWord: "p_r_u", letter: "â", position: "interior" },
    { word: "începe", displayWord: "_ncepe", letter: "î", position: "început" },
    { word: "înalt", displayWord: "_nalt", letter: "î", position: "început" },
    { word: "întâi", displayWord: "_ntâi", letter: "î", position: "început" },
    { word: "îngheț", displayWord: "_ngheț", letter: "î", position: "început" },
    { word: "împinge", displayWord: "_mpinge", letter: "î", position: "început" },
    { word: "târziu", displayWord: "t_rziu", letter: "â", position: "interior" },
    { word: "cânt", displayWord: "c_nt", letter: "â", position: "interior" },
    { word: "stâncă", displayWord: "st_ncă", letter: "â", position: "interior" },
    { word: "tânar", displayWord: "t_nar", letter: "â", position: "interior" },
    { word: "vântul", displayWord: "v_ntul", letter: "â", position: "interior" },
    { word: "rândul", displayWord: "r_ndul", letter: "â", position: "interior" },
    { word: "gând", displayWord: "g_nd", letter: "â", position: "interior" },
    { word: "mână", displayWord: "m_nă", letter: "â", position: "interior" },
    { word: "fântână", displayWord: "f_nt_nă", letter: "â", position: "interior" },
    { word: "întreba", displayWord: "_ntreba", letter: "î", position: "început" },
    { word: "întoarce", displayWord: "_ntoarce", letter: "î", position: "început" },
    { word: "înțelege", displayWord: "_nțelege", letter: "î", position: "început" },
    { word: "înapoi", displayWord: "_napoi", letter: "î", position: "început" },
    { word: "înăuntru", displayWord: "_năuntru", letter: "î", position: "început" },
    { word: "înotând", displayWord: "_notând", letter: "î", position: "început" },
    { word: "îndrăzneț", displayWord: "_ndrăzneț", letter: "î", position: "început" },
  ],

  cratima: [
    { correct: "într-o", wrong: ["intro", "intr-o", "în-tro"] },
    { correct: "s-a", wrong: ["sa", "s'a", "s.a"] },
    { correct: "m-am", wrong: ["mam", "m'am", "m.am"] },
    { correct: "l-am", wrong: ["lam", "l'am", "l.am"] },
    { correct: "n-am", wrong: ["nam", "n'am", "n.am"] },
    { correct: "i-am", wrong: ["iam", "i'am", "i.am"] },
    { correct: "ne-am", wrong: ["neam", "ne'am", "ne.am"] },
    { correct: "s-au", wrong: ["sau", "s'au", "s.au"] },
    { correct: "dintr-o", wrong: ["dinto", "dintr'o", "din-tro"] },
    { correct: "mi-a", wrong: ["mia", "mi'a", "mi.a"] },
    { correct: "v-am", wrong: ["vam", "v'am", "v.am"] },
    { correct: "ți-am", wrong: ["tiam", "ți'am", "ți.am"] },
    { correct: "i-a", wrong: ["ia", "i'a", "i.a"] },
    { correct: "le-am", wrong: ["leam", "le'am", "le.am"] },
    { correct: "te-ai", wrong: ["teai", "te'ai", "te.ai"] },
    { correct: "s-ar", wrong: ["sar", "s'ar", "s.ar"] },
    { correct: "nu-i", wrong: ["nui", "nu'i", "nu.i"] },
    { correct: "ce-i", wrong: ["cei", "ce'i", "ce.i"] },
    { correct: "l-a", wrong: ["la", "l'a", "l.a"] },
    { correct: "v-ați", wrong: ["vați", "v'ați", "v.ați"] },
    { correct: "i-au", wrong: ["iau", "i'au", "i.au"] },
    { correct: "mi-am", wrong: ["miam", "mi'am", "mi.am"] },
    { correct: "într-un", wrong: ["intrun", "într'un", "în-trun"] },
    { correct: "printr-un", wrong: ["printrun", "printr'un", "prin-trun"] },
    { correct: "m-a", wrong: ["ma", "m'a", "m.a"] },
  ],

  singularPlural: [
    { sing: "casă", plur: "case" },
    { sing: "carte", plur: "cărți" },
    { sing: "câine", plur: "câini" },
    { sing: "pisică", plur: "pisici" },
    { sing: "copil", plur: "copii" },
    { sing: "om", plur: "oameni" },
    { sing: "copac", plur: "copaci" },
    { sing: "floare", plur: "flori" },
    { sing: "stea", plur: "stele" },
    { sing: "masă", plur: "mese" },
    { sing: "pom", plur: "pomi" },
    { sing: "trandafir", plur: "trandafiri" },
    { sing: "pasăre", plur: "păsări" },
    { sing: "băiat", plur: "băieți" },
    { sing: "fată", plur: "fete" },
  ],

  numeProper: [
    "Ana", "Ion", "Maria", "Andrei", "România", "București", "Dunărea", "Cluj", "Brașov", "Iași",
    "Elena", "Mihai", "Sofia", "Tudor", "Timișoara", "Sinaia", "Constanța", "Moldova", "Azorel",
    "Rex", "Mișu", "Bucegi", "Prahova", "Mureș", "Victoria", "Cristina", "Vlad", "Oradea", "Sibiu",
  ],
  numeComune: [
    "casă", "câine", "copil", "masă", "carte", "floare", "pom", "lac", "munte", "râu",
    "pisică", "școală", "grădină", "drum", "nor", "ploaie", "pâine", "mere", "minge", "scaun",
  ],

  texte: [
    {
      text: "Ana are o pisică. Pisica se numește Miau. Miau este albă cu pete negre. Ea bea lapte în fiecare dimineață.",
      questions: [
        { q: "Cum se numește pisica Anei?", a: "Miau", wrong: ["Rex", "Pufi", "Luna"] },
        { q: "Ce culoare este pisica?", a: "albă cu pete negre", wrong: ["neagră", "portocalie", "gri"] },
        { q: "Ce bea pisica dimineața?", a: "lapte", wrong: ["apă", "ceai", "suc"] },
      ],
    },
    {
      text: "Ion merge la școală. El are un ghiozdan albastru. În ghiozdan are cărți, caiete și creioane colorate.",
      questions: [
        { q: "Unde merge Ion?", a: "la școală", wrong: ["la parc", "acasă", "la magazin"] },
        { q: "Ce culoare este ghiozdanul?", a: "albastru", wrong: ["roșu", "verde", "galben"] },
        { q: "Ce are Ion în ghiozdan?", a: "cărți, caiete și creioane", wrong: ["jucării", "mâncare", "haine"] },
      ],
    },
    {
      text: "Maria și Andrei sunt frați. Ei locuiesc într-o casă mare. Au un câine pe nume Rex. Rex aleargă prin grădină.",
      questions: [
        { q: "Cine sunt Maria și Andrei?", a: "frați", wrong: ["prieteni", "vecini", "colegi"] },
        { q: "Cum se numește câinele lor?", a: "Rex", wrong: ["Miau", "Pufi", "Azorel"] },
        { q: "Unde aleargă Rex?", a: "prin grădină", wrong: ["prin parc", "prin casă", "pe stradă"] },
      ],
    },
    {
      text: "Primăvara, florile înfloresc. Rândunica se întoarce din țările calde. Copiii se joacă afară. Soarele strălucește.",
      questions: [
        { q: "Când se întâmplă aceste lucruri?", a: "primăvara", wrong: ["iarna", "vara", "toamna"] },
        { q: "Ce se întoarce din țările calde?", a: "rândunica", wrong: ["ursul", "pisica", "câinele"] },
        { q: "Ce fac copiii?", a: "se joacă afară", wrong: ["dorm", "învață", "mănâncă"] },
      ],
    },
    {
      text: "Bunica face plăcinte bune. Ea pune mere și scorțișoară. Toată familia mănâncă plăcinte calde. Tuturor le place.",
      questions: [
        { q: "Cine face plăcinte?", a: "bunica", wrong: ["mama", "tata", "fratele"] },
        { q: "Ce pune bunica în plăcinte?", a: "mere și scorțișoară", wrong: ["ciocolată", "brânză", "carne"] },
        { q: "Cum sunt plăcintele?", a: "calde", wrong: ["reci", "uscate", "mici"] },
      ],
    },
  ],

  propozitii: [
    { text: "Ana merge la școală.", tip: "enunțiativă", semn: "." },
    { text: "Unde este ghiozdanul?", tip: "interogativă", semn: "?" },
    { text: "Ce frumos este soarele!", tip: "exclamativă", semn: "!" },
    { text: "Ion are o carte nouă.", tip: "enunțiativă", semn: "." },
    { text: "Ce mânânci tu?", tip: "interogativă", semn: "?" },
    { text: "Bravo, ai reușit!", tip: "exclamativă", semn: "!" },
    { text: "Câinele aleargă repede.", tip: "enunțiativă", semn: "." },
    { text: "Cine este la ușă?", tip: "interogativă", semn: "?" },
    { text: "Ce zi minunată!", tip: "exclamativă", semn: "!" },
    { text: "Floarea este galbenă.", tip: "enunțiativă", semn: "." },
    { text: "Ai văzut pisica?", tip: "interogativă", semn: "?" },
    { text: "Ura, a venit vara!", tip: "exclamativă", semn: "!" },
    { text: "Maria citește o poveste.", tip: "enunțiativă", semn: "." },
    { text: "Unde ai pus creionul?", tip: "interogativă", semn: "?" },
    { text: "Ce bine ai cântat!", tip: "exclamativă", semn: "!" },
    { text: "Bunica face o plăcintă.", tip: "enunțiativă", semn: "." },
    { text: "Cine ți-a dat cartea?", tip: "interogativă", semn: "?" },
    { text: "Cât de frumoasă este floarea!", tip: "exclamativă", semn: "!" },
    { text: "Pisica doarme în coș.", tip: "enunțiativă", semn: "." },
    { text: "Când vine mama acasă?", tip: "interogativă", semn: "?" },
    { text: "Ajutor, am căzut!", tip: "exclamativă", semn: "!" },
    { text: "Rândunica zboară sus.", tip: "enunțiativă", semn: "." },
    { text: "De unde ai luat jucăria?", tip: "interogativă", semn: "?" },
    { text: "Ce surpriză plăcută!", tip: "exclamativă", semn: "!" },
    { text: "Copilul mănâncă un măr.", tip: "enunțiativă", semn: "." },
    { text: "Cum te cheamă?", tip: "interogativă", semn: "?" },
    { text: "Vai, ce frumos ești îmbrăcat!", tip: "exclamativă", semn: "!" },
    { text: "Tata cumpără pâine de la magazin.", tip: "enunțiativă", semn: "." },
    { text: "Câți ani ai tu?", tip: "interogativă", semn: "?" },
    { text: "Ura, mâine este vacanță!", tip: "exclamativă", semn: "!" },
    { text: "Soarele strălucește pe cer.", tip: "enunțiativă", semn: "." },
    { text: "Care este culoarea ta preferată?", tip: "interogativă", semn: "?" },
    { text: "Ce poveste minunată!", tip: "exclamativă", semn: "!" },
    { text: "Elevii se joacă în curte.", tip: "enunțiativă", semn: "." },
    { text: "De ce plângi?", tip: "interogativă", semn: "?" },
    { text: "Bravo, ai câștigat concursul!", tip: "exclamativă", semn: "!" },
    { text: "Andrei merge cu bicicleta.", tip: "enunțiativă", semn: "." },
    { text: "Câte mere sunt în coș?", tip: "interogativă", semn: "?" },
    { text: "Ce drăguț este cățelul!", tip: "exclamativă", semn: "!" },
  ],

  ordineData: [
    { words: ["la", "merge", "Ana", "școală"], correct: "Ana merge la școală." },
    { words: ["frumos", "cântă", "Pasărea"], correct: "Pasărea cântă frumos." },
    { words: ["lapte", "pisica", "bea"], correct: "Pisica bea lapte." },
    { words: ["grădină", "Ion", "în", "aleargă"], correct: "Ion aleargă în grădină." },
    { words: ["carte", "Maria", "citește", "o"], correct: "Maria citește o carte." },
    { words: ["doarme", "câinele", "coș", "în"], correct: "Câinele doarme în coș." },
    { words: ["cer", "pe", "Rândunica", "zboară"], correct: "Rândunica zboară pe cer." },
    { words: ["lapte", "bea", "copilul", "cald"], correct: "Copilul bea lapte cald." },
  ],

  capitalizareData: [
    { gresit: "ana merge la școală.", corect: "Ana merge la școală." },
    { gresit: "ion are un câine.", corect: "Ion are un câine." },
    { gresit: "maria citește o carte.", corect: "Maria citește o carte." },
    { gresit: "bucurești este capitala româniei.", corect: "București este capitala României." },
    { gresit: "dunărea este un fluviu.", corect: "Dunărea este un fluviu." },
    { gresit: "andrei merge la cluj.", corect: "Andrei merge la Cluj." },
    { gresit: "pisica lui ion este albă.", corect: "Pisica lui Ion este albă." },
    { gresit: "mama anei gătește bine.", corect: "Mama Anei gătește bine." },
    { gresit: "elena și mihai sunt prieteni.", corect: "Elena și Mihai sunt prieteni." },
    { gresit: "brașovul este un oraș frumos.", corect: "Brașovul este un oraș frumos." },
    { gresit: "iașul se află în moldova.", corect: "Iașul se află în Moldova." },
    { gresit: "câinele lui andrei se numește azorel.", corect: "Câinele lui Andrei se numește Azorel." },
    { gresit: "ieri am mers la zoo cu tata.", corect: "Ieri am mers la zoo cu tata." },
    { gresit: "rândunica vine primăvara.", corect: "Rândunica vine primăvara." },
    { gresit: "cartea mariei este pe masă.", corect: "Cartea Mariei este pe masă." },
    { gresit: "sinaia este la munte.", corect: "Sinaia este la munte." },
    { gresit: "tara noastră se numește românia.", corect: "Țara noastră se numește România." },
    { gresit: "copilul îl cheamă pe andrei.", corect: "Copilul îl cheamă pe Andrei." },
    { gresit: "bunica mea locuiește în cluj.", corect: "Bunica mea locuiește în Cluj." },
    { gresit: "olt este un râu din românia.", corect: "Olt este un râu din România." },
    { gresit: "victoria a câștigat premiul întâi.", corect: "Victoria a câștigat premiul întâi." },
    { gresit: "muntele bucegi este înalt.", corect: "Muntele Bucegi este înalt." },
    { gresit: "florile din grădina mariei sunt roșii.", corect: "Florile din grădina Mariei sunt roșii." },
    { gresit: "câinele rex aleargă în parc.", corect: "Câinele Rex aleargă în parc." },
    { gresit: "trenul pleacă spre constanța.", corect: "Trenul pleacă spre Constanța." },
    { gresit: "astăzi, ana și ion au mers la parc.", corect: "Astăzi, Ana și Ion au mers la parc." },
    { gresit: "pruna este un fruct gustos.", corect: "Pruna este un fruct gustos." },
    { gresit: "mihai și elena cântă la cor.", corect: "Mihai și Elena cântă la cor." },
    { gresit: "la timișoara există un teatru mare.", corect: "La Timișoara există un teatru mare." },
    { gresit: "pisica vecinilor se numește mișu.", corect: "Pisica vecinilor se numește Mișu." },
    { gresit: "profesoara noastră se numește doamna pop.", corect: "Profesoara noastră se numește doamna Pop." },
  ],
};

// ─── CLASA I GENERATORS ─────────────────────────────────────────────────────

export const C1_Generators = {
  // ── ALFABET ──────────────────────────────────────────────────────────────
  alfabet_c1: {
    vocale_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      // Word banks with vowel/consonant counts
      const wordsWithCounts: { word: string; vowels: number; consonants: number }[] = [
        { word: "casă", vowels: 2, consonants: 2 },
        { word: "mama", vowels: 3, consonants: 1 },
        { word: "tata", vowels: 2, consonants: 2 },
        { word: "pom", vowels: 1, consonants: 2 },
        { word: "lac", vowels: 1, consonants: 2 },
        { word: "soare", vowels: 3, consonants: 2 },
        { word: "carte", vowels: 2, consonants: 3 },
        { word: "copil", vowels: 2, consonants: 3 },
        { word: "apă", vowels: 2, consonants: 1 },
        { word: "elev", vowels: 2, consonants: 2 },
        { word: "inimă", vowels: 3, consonants: 2 },
        { word: "umbrelă", vowels: 3, consonants: 4 },
        { word: "ou", vowels: 2, consonants: 0 },
        { word: "ac", vowels: 1, consonants: 1 },
        { word: "nor", vowels: 1, consonants: 2 },
        { word: "floare", vowels: 3, consonants: 3 },
        { word: "școală", vowels: 3, consonants: 3 },
        { word: "iarnă", vowels: 3, consonants: 2 },
        { word: "tren", vowels: 1, consonants: 3 },
        { word: "mare", vowels: 2, consonants: 2 },
      ];
      // Words starting with vowels
      const cuvinteVocala = ["apă", "ou", "inimă", "elefant", "umbrelă", "ochi", "aur", "urs", "erou", "ac", "om", "iepure"];
      // Words starting with consonants
      const cuvinteConsoana = ["casă", "tată", "pom", "rac", "minge", "floare", "barcă", "nor", "sac", "deal", "munte", "vapor"];
      // Completion: word with missing vowel
      const completare: { display: string; answer: string }[] = [
        { display: "c_să", answer: "a" },
        { display: "s_are", answer: "o" },
        { display: "c_pil", answer: "o" },
        { display: "m_ma", answer: "a" },
        { display: "c_rte", answer: "a" },
        { display: "p_m", answer: "o" },
        { display: "fl_are", answer: "o" },
        { display: "n_r", answer: "o" },
        { display: "l_c", answer: "a" },
        { display: "_c", answer: "a" },
        { display: "tr_n", answer: "e" },
        { display: "m_re", answer: "a" },
      ];

      for (let i = 0; i < 30; i++) {
        const tip = Math.floor(rng() * 5);

        if (tip === 0) {
          // Type 1: identify a vowel or consonant letter
          const isVocala = rng() > 0.5;
          const correct = isVocala ? pick(CLASA1_WORDS.vocale, rng) : pick(CLASA1_WORDS.consoane, rng);
          const wrong = isVocala
            ? shuffle(CLASA1_WORDS.consoane, rng).slice(0, 3)
            : shuffle(CLASA1_WORDS.vocale, rng).slice(0, 3);
          q.push(createMCQ("alfabet_c1", "vocale_c1",
            `Care dintre următoarele litere este o ${isVocala ? "VOCALĂ" : "CONSOANĂ"}?`,
            correct, wrong, rng));

        } else if (tip === 1) {
          // Type 2: count vowels in a word
          const data = pick(wordsWithCounts, rng);
          const correct = String(data.vowels);
          const allCounts = ["0", "1", "2", "3", "4"];
          const wrong = allCounts.filter((c) => c !== correct);
          q.push(createMCQ("alfabet_c1", "vocale_c1",
            `Câte VOCALE are cuvântul '${data.word}'?`,
            correct, wrong, rng));

        } else if (tip === 2) {
          // Type 3: which word starts with a vowel
          const correctWord = pick(cuvinteVocala, rng);
          const wrongWords = shuffle(cuvinteConsoana, rng).slice(0, 3);
          q.push(createMCQ("alfabet_c1", "vocale_c1",
            "Care cuvânt începe cu o VOCALĂ?",
            correctWord, wrongWords, rng));

        } else if (tip === 3) {
          // Type 4: complete the word with the missing vowel
          const data = pick(completare, rng);
          const correct = data.answer;
          const otherVocale = ["a", "e", "i", "o", "u"].filter((v) => v !== correct);
          q.push(createMCQ("alfabet_c1", "vocale_c1",
            `Completează cuvântul '${data.display}' cu vocala lipsă:`,
            correct, otherVocale, rng));

        } else {
          // Type 5: which of two words has more vowels
          const poolS = shuffle(wordsWithCounts, rng);
          const a = poolS[0];
          let b = poolS[1];
          let attempts = 0;
          while (b.vowels === a.vowels && attempts < 10) { b = pick(wordsWithCounts, rng); attempts++; }
          if (b.vowels === a.vowels) { i--; continue; }
          const correct = a.vowels > b.vowels ? a.word : b.word;
          const wrong = a.vowels > b.vowels ? b.word : a.word;
          const others = wordsWithCounts.filter((w) => w.word !== a.word && w.word !== b.word);
          q.push(createMCQ("alfabet_c1", "vocale_c1",
            `Care cuvânt are mai multe VOCALE: '${a.word}' sau '${b.word}'?`,
            correct, [wrong, pick(others, rng).word, pick(others, rng).word], rng));
        }
      }
      return q;
    },

    consoane_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      // Words with consonant counts
      const wordsWithCounts: { word: string; vowels: number; consonants: number }[] = [
        { word: "casă", vowels: 2, consonants: 2 },
        { word: "tren", vowels: 1, consonants: 3 },
        { word: "pom", vowels: 1, consonants: 2 },
        { word: "lac", vowels: 1, consonants: 2 },
        { word: "carte", vowels: 2, consonants: 3 },
        { word: "copil", vowels: 2, consonants: 3 },
        { word: "ou", vowels: 2, consonants: 0 },
        { word: "ac", vowels: 1, consonants: 1 },
        { word: "nor", vowels: 1, consonants: 2 },
        { word: "floare", vowels: 3, consonants: 3 },
        { word: "brad", vowels: 1, consonants: 3 },
        { word: "elev", vowels: 2, consonants: 2 },
        { word: "inimă", vowels: 3, consonants: 2 },
        { word: "tată", vowels: 2, consonants: 2 },
        { word: "mare", vowels: 2, consonants: 2 },
      ];
      // Words starting with consonants
      const cuvinteConsoana = ["casă", "tată", "pom", "rac", "minge", "floare", "barcă", "nor", "sac", "deal", "munte", "vapor", "tren", "brad", "pisică", "soare", "lună", "grădină", "mașină", "copac", "masă", "rândunica", "zăpadă", "pâine", "copil"];
      // Words starting with vowels
      const cuvinteVocala = ["apă", "ou", "inimă", "elefant", "umbrelă", "ochi", "aur", "urs", "erou", "ac", "albină", "avion", "om", "iepure", "arici", "înger", "acuarelă"];
      // Words containing a specific consonant as first letter
      const cuvinteContiCons: { word: string; cons: string }[] = [
        { word: "mare", cons: "m" },
        { word: "tată", cons: "t" },
        { word: "nor", cons: "n" },
        { word: "pom", cons: "p" },
        { word: "lac", cons: "l" },
        { word: "rac", cons: "r" },
        { word: "brad", cons: "b" },
        { word: "deal", cons: "d" },
        { word: "floare", cons: "f" },
        { word: "vapor", cons: "v" },
        { word: "soare", cons: "s" },
        { word: "casă", cons: "c" },
        { word: "munte", cons: "m" },
        { word: "grădină", cons: "g" },
        { word: "pâine", cons: "p" },
        { word: "rândunica", cons: "r" },
        { word: "tren", cons: "t" },
        { word: "zăpadă", cons: "z" },
        { word: "lună", cons: "l" },
        { word: "minge", cons: "m" },
      ];

      const type0Phrasings = [
        "Care literă este o CONSOANĂ?",
        "Alege consoana din lista de mai jos:",
        "Care dintre aceste litere este consoană?",
        "Găsește consoana ascunsă printre vocale:",
      ];
      const type4Phrasings = [
        "Care dintre aceste litere NU este o consoană?",
        "Care literă este o VOCALĂ (nu o consoană)?",
        "Găsește vocala printre consoane:",
        "Care literă iese din rând (nu este consoană)?",
      ];

      for (let i = 0; i < 30; i++) {
        const tip = Math.floor(rng() * 5);

        if (tip === 0) {
          // Type 1: pick the consonant from a list of letters
          const correct = pick(CLASA1_WORDS.consoane, rng);
          const wrong = shuffle(CLASA1_WORDS.vocale, rng).slice(0, 3);
          q.push(createMCQ("alfabet_c1", "consoane_c1",
            pick(type0Phrasings, rng),
            correct, wrong, rng));

        } else if (tip === 1) {
          // Type 2: count consonants in a word
          const data = pick(wordsWithCounts, rng);
          const correct = String(data.consonants);
          const allCounts = ["0", "1", "2", "3", "4", "5"];
          const wrong = allCounts.filter((c) => c !== correct);
          q.push(createMCQ("alfabet_c1", "consoane_c1",
            `Câte CONSOANE are cuvântul '${data.word}'?`,
            correct, wrong, rng));

        } else if (tip === 2) {
          // Type 3: which word starts with a consonant
          const correctWord = pick(cuvinteConsoana, rng);
          const wrongWords = shuffle(cuvinteVocala, rng).slice(0, 3);
          q.push(createMCQ("alfabet_c1", "consoane_c1",
            "Care cuvânt începe cu o CONSOANĂ?",
            correctWord, wrongWords, rng));

        } else if (tip === 3) {
          // Type 4: identify the first consonant letter in a word
          const data = pick(cuvinteContiCons, rng);
          const correct = data.cons;
          const otherCons = CLASA1_WORDS.consoane.filter((c) => c !== correct);
          const wrong = shuffle(otherCons, rng).slice(0, 3);
          q.push(createMCQ("alfabet_c1", "consoane_c1",
            `Care este prima CONSOANĂ din cuvântul '${data.word}'?`,
            correct, wrong, rng));

        } else {
          // Type 5: which letter is NOT a consonant (is a vowel)
          const correct = pick(CLASA1_WORDS.vocale, rng);
          const wrong = shuffle(CLASA1_WORDS.consoane, rng).slice(0, 3);
          q.push(createMCQ("alfabet_c1", "consoane_c1",
            pick(type4Phrasings, rng),
            correct, wrong, rng));
        }
      }
      return q;
    },

    litere_mari_mici_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      const perechi: [string, string][] = [
        ["a", "A"], ["b", "B"], ["c", "C"], ["d", "D"], ["e", "E"],
        ["f", "F"], ["g", "G"], ["h", "H"], ["i", "I"], ["j", "J"],
        ["k", "K"], ["l", "L"], ["m", "M"], ["n", "N"], ["o", "O"],
        ["p", "P"], ["r", "R"], ["s", "S"], ["t", "T"], ["u", "U"],
        ["v", "V"], ["z", "Z"], ["ă", "Ă"], ["â", "Â"], ["î", "Î"],
        ["ș", "Ș"], ["ț", "Ț"],
      ];

      // Correct / incorrect capitalization options
      const capitalizareOpt: { correct: string; wrong: string[] }[] = [
        { correct: "Ana", wrong: ["ana", "ANA", "aNa"] },
        { correct: "Ion", wrong: ["ion", "ION", "iON"] },
        { correct: "Maria", wrong: ["maria", "MARIA", "mARIA"] },
        { correct: "România", wrong: ["românia", "ROMÂNIA", "Romînia"] },
        { correct: "București", wrong: ["bucurești", "BUCUREȘTI", "Bucuresți"] },
        { correct: "Soarele răsare.", wrong: ["soarele răsare.", "SOARELE RĂSARE.", "Soarele Răsare."] },
        { correct: "Câinele doarme.", wrong: ["câinele doarme.", "Câinele Doarme.", "câInele doarme."] },
        { correct: "Andrei merge.", wrong: ["andrei merge.", "ANDREI MERGE.", "Andrei Merge."] },
        { correct: "Elena", wrong: ["elena", "ELENA", "eLena"] },
        { correct: "Mihai", wrong: ["mihai", "MIHAI", "MiHai"] },
        { correct: "Sofia", wrong: ["sofia", "SOFIA", "soFia"] },
        { correct: "Timișoara", wrong: ["timișoara", "TIMIȘOARA", "timișOara"] },
        { correct: "Constanța", wrong: ["constanța", "CONSTANȚA", "constanȚa"] },
        { correct: "Sibiu", wrong: ["sibiu", "SIBIU", "SIBiu"] },
        { correct: "Pisica doarme liniștit.", wrong: ["pisica doarme liniștit.", "Pisica Doarme Liniștit.", "PISICA DOARME LINIȘTIT."] },
        { correct: "Maria citește o carte.", wrong: ["maria citește o carte.", "Maria Citeste o Carte.", "MARIA CITESTE O CARTE."] },
        { correct: "Rex aleargă în parc.", wrong: ["rex aleargă în parc.", "Rex Aleargă În Parc.", "REX ALEARGĂ ÎN PARC."] },
        { correct: "Copilul merge la Brașov.", wrong: ["copilul merge la brașov.", "Copilul Merge La Brașov.", "copilul merge La brașov."] },
      ];

      for (let i = 0; i < 30; i++) {
        const tip = Math.floor(rng() * 4);

        if (tip === 0) {
          // Type 1: lowercase → uppercase
          const [mica, mare] = pick(perechi, rng);
          const otherPairs = shuffle(perechi, rng).filter((p) => p[0] !== mica);
          const wrong = otherPairs.slice(0, 3).map((p) => p[1]);
          q.push(createMCQ("alfabet_c1", "litere_mari_mici_c1",
            `Care este litera MARE (majusculă) a lui '${mica}'?`,
            mare, wrong, rng));

        } else if (tip === 1) {
          // Type 2: uppercase → lowercase
          const [mica, mare] = pick(perechi, rng);
          const otherPairs = shuffle(perechi, rng).filter((p) => p[0] !== mica);
          const wrong = otherPairs.slice(0, 3).map((p) => p[0]);
          q.push(createMCQ("alfabet_c1", "litere_mari_mici_c1",
            `Care este litera MICĂ (minusculă) a lui '${mare}'?`,
            mica, wrong, rng));

        } else if (tip === 2) {
          // Type 3: which variant is written correctly (capital letter rules)
          const data = pick(capitalizareOpt, rng);
          q.push(createMCQ("alfabet_c1", "litere_mari_mici_c1",
            "Care variantă este scrisă CORECT?",
            data.correct, data.wrong, rng));

        } else {
          // Type 4: which word needs a capital letter (proper noun)
          const correct = pick(CLASA1_WORDS.numeProper, rng);
          const wrong = shuffle(CLASA1_WORDS.numeComune, rng).slice(0, 3);
          q.push(createMCQ("alfabet_c1", "litere_mari_mici_c1",
            "Care dintre aceste cuvinte se scrie cu LITERĂ MARE?",
            correct, wrong, rng));
        }
      }
      return q;
    },

    litere_speciale_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      const nespeciale = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "z"];

      // Words containing each special letter
      const wordsWithSpecial: { word: string; special: string }[] = [
        { word: "casă", special: "ă" },
        { word: "pisică", special: "ă" },
        { word: "mașină", special: "ă" },
        { word: "primăvară", special: "ă" },
        { word: "pâine", special: "â" },
        { word: "câine", special: "â" },
        { word: "mâine", special: "â" },
        { word: "fântână", special: "â" },
        { word: "înalt", special: "î" },
        { word: "începe", special: "î" },
        { word: "înger", special: "î" },
        { word: "întâi", special: "î" },
        { word: "mașină", special: "ș" },
        { word: "șarpe", special: "ș" },
        { word: "școală", special: "ș" },
        { word: "păpușă", special: "ș" },
        { word: "țară", special: "ț" },
        { word: "rățușcă", special: "ț" },
        { word: "dințele", special: "ț" },
      ];

      // Words with multiple special letters — count them
      const wordsSpecialCount: { word: string; count: number }[] = [
        { word: "casă", count: 1 },
        { word: "mașină", count: 2 },
        { word: "primăvară", count: 3 },
        { word: "pisică", count: 1 },
        { word: "pâine", count: 1 },
        { word: "școală", count: 2 },
        { word: "fântână", count: 2 },
        { word: "rățușcă", count: 2 },
        { word: "tren", count: 0 },
        { word: "lac", count: 0 },
        { word: "copil", count: 0 },
      ];

      // Complete word with correct special letter
      const completare: { display: string; answer: string }[] = [
        { display: "cas_", answer: "ă" },
        { display: "p_ine", answer: "â" },
        { display: "_nalt", answer: "î" },
        { display: "ma_ină", answer: "ș" },
        { display: "_ară", answer: "ț" },
        { display: "c_ine", answer: "â" },
        { display: "_coală", answer: "ș" },
        { display: "prim_vară", answer: "ă" },
        { display: "_nger", answer: "î" },
        { display: "din_ele", answer: "ț" },
      ];

      for (let i = 0; i < 30; i++) {
        const tip = Math.floor(rng() * 5);

        if (tip === 0) {
          // Type 1: which letter is a special Romanian letter
          const correct = pick(CLASA1_WORDS.litereSpeciale, rng);
          const wrong = shuffle(nespeciale, rng).slice(0, 3);
          q.push(createMCQ("alfabet_c1", "litere_speciale_c1",
            "Care literă este specifică alfabetului ROMÂNESC?",
            correct, wrong, rng));

        } else if (tip === 1) {
          // Type 2: find the special letter in a word
          const data = pick(wordsWithSpecial, rng);
          const correct = data.special;
          const wrong = CLASA1_WORDS.litereSpeciale.filter((l) => l !== correct)
            .concat(["s", "a", "i"]).slice(0, 3);
          q.push(createMCQ("alfabet_c1", "litere_speciale_c1",
            `Care este litera SPECIALĂ din cuvântul '${data.word}'?`,
            correct, wrong, rng));

        } else if (tip === 2) {
          // Type 3: count special letters in a word
          const data = pick(wordsSpecialCount, rng);
          const correct = String(data.count);
          const allCounts = ["0", "1", "2", "3"];
          const wrong = allCounts.filter((c) => c !== correct);
          q.push(createMCQ("alfabet_c1", "litere_speciale_c1",
            `Câte litere speciale (ă, â, î, ș, ț) are cuvântul '${data.word}'?`,
            correct, wrong, rng));

        } else if (tip === 3) {
          // Type 4: which word contains a given special letter
          const targetSpecial = pick(CLASA1_WORDS.litereSpeciale, rng);
          const pool = wordsWithSpecial.filter((w) => w.special === targetSpecial);
          if (pool.length === 0) { i--; continue; }
          const correct = pick(pool, rng).word;
          const otherWords = wordsWithSpecial
            .filter((w) => w.special !== targetSpecial)
            .map((w) => w.word);
          const wrong = shuffle(otherWords, rng).slice(0, 3);
          q.push(createMCQ("alfabet_c1", "litere_speciale_c1",
            `Care cuvânt conține litera '${targetSpecial}'?`,
            correct, wrong, rng));

        } else {
          // Type 5: complete the word with the correct special letter
          const data = pick(completare, rng);
          const correct = data.answer;
          const wrong = CLASA1_WORDS.litereSpeciale.filter((l) => l !== correct).concat(["a"]).slice(0, 3);
          q.push(createMCQ("alfabet_c1", "litere_speciale_c1",
            `Completează cuvântul '${data.display}' cu litera specială potrivită:`,
            correct, wrong, rng));
        }
      }
      return q;
    },

    ordine_alfa_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      const alfabet = [
        "a", "ă", "â", "b", "c", "d", "e", "f", "g", "h",
        "i", "î", "j", "k", "l", "m", "n", "o", "p", "r",
        "s", "ș", "t", "ț", "u", "v", "x", "z",
      ];

      for (let i = 0; i < 30; i++) {
        const tip = Math.floor(rng() * 5);

        if (tip === 0) {
          // Type 1: what letter comes AFTER
          const idx = 1 + Math.floor(rng() * (alfabet.length - 2));
          const litera = alfabet[idx];
          const correct = alfabet[idx + 1];
          const wrong = shuffle(alfabet.filter((l) => l !== correct && l !== litera), rng).slice(0, 3);
          q.push(createMCQ("alfabet_c1", "ordine_alfa_c1",
            `Ce literă vine DUPĂ '${litera}' în alfabet?`,
            correct, wrong, rng));

        } else if (tip === 1) {
          // Type 2: what letter comes BEFORE
          const idx = 1 + Math.floor(rng() * (alfabet.length - 2));
          const litera = alfabet[idx];
          const correct = alfabet[idx - 1];
          const wrong = shuffle(alfabet.filter((l) => l !== correct && l !== litera), rng).slice(0, 3);
          q.push(createMCQ("alfabet_c1", "ordine_alfa_c1",
            `Ce literă vine ÎNAINTE de '${litera}' în alfabet?`,
            correct, wrong, rng));

        } else if (tip === 2) {
          // Type 3: what letter is BETWEEN two given letters
          const idx = 1 + Math.floor(rng() * (alfabet.length - 3));
          const before = alfabet[idx];
          const correct = alfabet[idx + 1];
          const after = alfabet[idx + 2];
          const wrong = shuffle(alfabet.filter((l) => l !== correct && l !== before && l !== after), rng).slice(0, 3);
          q.push(createMCQ("alfabet_c1", "ordine_alfa_c1",
            `Ce literă se află ÎNTRE '${before}' și '${after}' în alfabet?`,
            correct, wrong, rng));

        } else if (tip === 3) {
          // Type 4: which sequence is in correct alphabetical order
          const idx = 1 + Math.floor(rng() * (alfabet.length - 4));
          const correct = alfabet[idx] + ", " + alfabet[idx + 1] + ", " + alfabet[idx + 2];
          const w1 = alfabet[idx + 2] + ", " + alfabet[idx + 1] + ", " + alfabet[idx];
          const w2 = alfabet[idx + 1] + ", " + alfabet[idx] + ", " + alfabet[idx + 2];
          const w3 = alfabet[idx] + ", " + alfabet[idx + 2] + ", " + alfabet[idx + 1];
          q.push(createMCQ("alfabet_c1", "ordine_alfa_c1",
            "Care grupă de litere este în ordinea ALFABETICĂ corectă?",
            correct, [w1, w2, w3], rng));

        } else {
          // Type 5: which letter comes LAST among three given letters
          const idx = 2 + Math.floor(rng() * (alfabet.length - 4));
          const correct = alfabet[idx];
          const earlier = [alfabet[idx - 2], alfabet[idx - 1]];
          const tripleStr = shuffle([correct, earlier[0], earlier[1]], rng).join("', '");
          const wrong = shuffle(alfabet.filter((l) => l !== correct && !earlier.includes(l)), rng).slice(0, 3);
          q.push(createMCQ("alfabet_c1", "ordine_alfa_c1",
            `Care literă vine ULTIMA în alfabet dintre: '${tripleStr}'?`,
            correct, wrong, rng));
        }
      }
      return q;
    },
  },

  // ── SUNETE ───────────────────────────────────────────────────────────────
  sunete_c1: {
    vocale_consoane_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      // Words with full sound/vowel/consonant analysis
      const wordsAnalysis: { word: string; vowels: number; consonants: number; first: string; last: string; firstType: "vocală" | "consoană" }[] = [
        { word: "casă", vowels: 2, consonants: 2, first: "c", last: "ă", firstType: "consoană" },
        { word: "mama", vowels: 3, consonants: 1, first: "m", last: "a", firstType: "consoană" },
        { word: "pom", vowels: 1, consonants: 2, first: "p", last: "m", firstType: "consoană" },
        { word: "lac", vowels: 1, consonants: 2, first: "l", last: "c", firstType: "consoană" },
        { word: "soare", vowels: 3, consonants: 2, first: "s", last: "e", firstType: "consoană" },
        { word: "apă", vowels: 2, consonants: 1, first: "a", last: "ă", firstType: "vocală" },
        { word: "elev", vowels: 2, consonants: 2, first: "e", last: "v", firstType: "vocală" },
        { word: "inimă", vowels: 3, consonants: 2, first: "i", last: "ă", firstType: "vocală" },
        { word: "umbrelă", vowels: 3, consonants: 4, first: "u", last: "ă", firstType: "vocală" },
        { word: "ou", vowels: 2, consonants: 0, first: "o", last: "u", firstType: "vocală" },
        { word: "ac", vowels: 1, consonants: 1, first: "a", last: "c", firstType: "vocală" },
        { word: "nor", vowels: 1, consonants: 2, first: "n", last: "r", firstType: "consoană" },
        { word: "tren", vowels: 1, consonants: 3, first: "t", last: "n", firstType: "consoană" },
        { word: "brad", vowels: 1, consonants: 3, first: "b", last: "d", firstType: "consoană" },
        { word: "ochi", vowels: 2, consonants: 2, first: "o", last: "i", firstType: "vocală" },
        { word: "mare", vowels: 2, consonants: 2, first: "m", last: "e", firstType: "consoană" },
        { word: "iarnă", vowels: 3, consonants: 2, first: "i", last: "ă", firstType: "vocală" },
        { word: "carte", vowels: 2, consonants: 3, first: "c", last: "e", firstType: "consoană" },
      ];

      for (let i = 0; i < 30; i++) {
        const tip = Math.floor(rng() * 5);
        const data = pick(wordsAnalysis, rng);

        if (tip === 0) {
          // Type 1: does the word start with vowel or consonant
          const correct = data.firstType;
          const wrong = [
            data.firstType === "vocală" ? "consoană" : "vocală",
            "literă specială",
            "literă mare",
          ];
          q.push(createMCQ("sunete_c1", "vocale_consoane_c1",
            `Cuvântul '${data.word}' începe cu o vocală sau o consoană?`,
            correct, wrong, rng));

        } else if (tip === 1) {
          // Type 2: count vowels in the word
          const correct = String(data.vowels);
          const allCounts = ["0", "1", "2", "3", "4"];
          const wrong = allCounts.filter((c) => c !== correct);
          q.push(createMCQ("sunete_c1", "vocale_consoane_c1",
            `Câte vocale are cuvântul '${data.word}'?`,
            correct, wrong, rng));

        } else if (tip === 2) {
          // Type 3: count consonants in the word
          const correct = String(data.consonants);
          const allCounts = ["0", "1", "2", "3", "4", "5"];
          const wrong = allCounts.filter((c) => c !== correct);
          q.push(createMCQ("sunete_c1", "vocale_consoane_c1",
            `Câte consoane are cuvântul '${data.word}'?`,
            correct, wrong, rng));

        } else if (tip === 3) {
          // Type 4: what is the FIRST sound/letter of the word
          const correct = data.first;
          const otherFirsts = wordsAnalysis.filter((w) => w.first !== data.first).map((w) => w.first);
          const wrong = shuffle(otherFirsts, rng).slice(0, 3);
          q.push(createMCQ("sunete_c1", "vocale_consoane_c1",
            `Care este PRIMUL sunet (literă) din cuvântul '${data.word}'?`,
            correct, wrong, rng));

        } else {
          // Type 5: which of two words has more vowels
          let other = pick(wordsAnalysis, rng);
          let attempts = 0;
          while ((other.word === data.word || other.vowels === data.vowels) && attempts < 15) {
            other = pick(wordsAnalysis, rng);
            attempts++;
          }
          if (other.vowels === data.vowels) { i--; continue; }
          const correct = data.vowels > other.vowels ? data.word : other.word;
          const wrongWord = data.vowels > other.vowels ? other.word : data.word;
          const extras = wordsAnalysis.filter((w) => w.word !== data.word && w.word !== other.word);
          q.push(createMCQ("sunete_c1", "vocale_consoane_c1",
            `Care cuvânt are mai multe vocale: '${data.word}' sau '${other.word}'?`,
            correct, [wrongWord, pick(extras, rng).word, pick(extras, rng).word], rng));
        }
      }
      return q;
    },

    grupuri_ce_ci_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      // Extended word bank
      const extCeCi = [
        ...CLASA1_WORDS.ceCi,
        { word: "ceasul", group: "ce" },
        { word: "cercel", group: "ce" },
        { word: "cenuşă", group: "ce" },
        { word: "ciorap", group: "ci" },
        { word: "ciuperci", group: "ci" },
        { word: "cioban", group: "ci" },
      ];

      // Words without ce/ci groups (distractors)
      const faraCeCi = ["casă", "tată", "pom", "lac", "mare", "brad", "nor", "deal", "minge", "vapor"];

      // Completion: word with ce/ci at the start
      const completareCeCi: { display: string; answer: string }[] = [
        { display: "_r", answer: "ce" },
        { display: "_ai", answer: "ce" },
        { display: "_rc", answer: "ce" },
        { display: "_apă", answer: "ce" },
        { display: "_rb", answer: "ce" },
        { display: "_nci", answer: "ci" },
        { display: "_ocolată", answer: "ci" },
        { display: "_reșe", answer: "ci" },
        { display: "_fră", answer: "ci" },
        { display: "_oc", answer: "ci" },
      ];

      for (let i = 0; i < 30; i++) {
        const tip = Math.floor(rng() * 5);

        if (tip === 0) {
          // Type 1: which word contains the target ce/ci group
          const target = rng() > 0.5 ? "ce" : "ci";
          const pool = extCeCi.filter((item) => item.group === target);
          const correct = pick(pool, rng).word;
          const wrong = shuffle(faraCeCi, rng).slice(0, 3);
          q.push(createMCQ("sunete_c1", "grupuri_ce_ci_c1",
            `Care cuvânt conține grupul de litere '${target}'?`,
            correct, wrong, rng));

        } else if (tip === 1) {
          // Type 2: identify which group (ce or ci) is in the given word
          const data = pick(extCeCi, rng);
          const correct = data.group;
          const wrong = ["ce", "ci", "ge", "gi"].filter((g) => g !== correct);
          q.push(createMCQ("sunete_c1", "grupuri_ce_ci_c1",
            `Ce grup de litere se găsește în cuvântul '${data.word}'?`,
            correct, wrong, rng));

        } else if (tip === 2) {
          // Type 3: complete the word with ce or ci
          const data = pick(completareCeCi, rng);
          const correct = data.answer;
          const wrong = ["ce", "ci", "ge", "gi"].filter((g) => g !== correct);
          q.push(createMCQ("sunete_c1", "grupuri_ce_ci_c1",
            `Completează cuvântul '${data.display}' cu grupul potrivit:`,
            correct, wrong, rng));

        } else if (tip === 3) {
          // Type 4: how is C pronounced — soft (ce/ci) or hard (ca/co/cu)
          const isSoft = rng() > 0.5;
          const softWords = extCeCi.map((w) => w.word);
          const hardWords = ["casă", "copil", "carte", "cub", "cal", "corn", "curat"];
          const word = isSoft ? pick(softWords, rng) : pick(hardWords, rng);
          const correct = isSoft ? "moale (ca în 'ce'/'ci')" : "dur (ca în 'ca'/'co')";
          const wrong = isSoft
            ? ["dur (ca în 'ca'/'co')", "nu se pronunță", "ca litera 'k'"]
            : ["moale (ca în 'ce'/'ci')", "nu se pronunță", "ca litera 'k'"];
          q.push(createMCQ("sunete_c1", "grupuri_ce_ci_c1",
            `Cum se pronunță litera 'c' în cuvântul '${word}'?`,
            correct, wrong, rng));

        } else {
          // Type 5: which word does NOT contain ce or ci
          const correct = pick(faraCeCi, rng);
          const wrong = shuffle(extCeCi, rng).slice(0, 3).map((w) => w.word);
          q.push(createMCQ("sunete_c1", "grupuri_ce_ci_c1",
            "Care cuvânt NU conține grupul 'ce' sau 'ci'?",
            correct, wrong, rng));
        }
      }
      return q;
    },

    grupuri_ge_gi_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      // Extended word bank
      const extGeGi = [
        ...CLASA1_WORDS.geGi,
        { word: "gelozie", group: "ge" },
        { word: "geometrie", group: "ge" },
        { word: "gingaș", group: "gi" },
        { word: "girofar", group: "gi" },
        { word: "gheață", group: "ge" },
      ];

      // Words without ge/gi
      const faraGeGi = ["casă", "tată", "pom", "lac", "mare", "brad", "nor", "deal", "minge", "vapor", "carte", "copil"];

      // Completion
      const completareGeGi: { display: string; answer: string }[] = [
        { display: "_r", answer: "ge" },
        { display: "_am", answer: "ge" },
        { display: "_antă", answer: "ge" },
        { display: "_m", answer: "ge" },
        { display: "_rafă", answer: "gi" },
        { display: "_mnastică", answer: "gi" },
        { display: "_nere", answer: "gi" },
        { display: "_gant", answer: "gi" },
      ];

      for (let i = 0; i < 30; i++) {
        const tip = Math.floor(rng() * 5);

        if (tip === 0) {
          // Type 1: which word contains the target ge/gi group
          const target = rng() > 0.5 ? "ge" : "gi";
          const pool = extGeGi.filter((item) => item.group === target);
          const correct = pick(pool, rng).word;
          const wrong = shuffle(faraGeGi, rng).slice(0, 3);
          q.push(createMCQ("sunete_c1", "grupuri_ge_gi_c1",
            `Care cuvânt conține grupul de litere '${target}'?`,
            correct, wrong, rng));

        } else if (tip === 1) {
          // Type 2: identify which group (ge or gi) is in the word
          const data = pick(extGeGi, rng);
          const correct = data.group;
          const wrong = ["ge", "gi", "ce", "ci"].filter((g) => g !== correct);
          q.push(createMCQ("sunete_c1", "grupuri_ge_gi_c1",
            `Ce grup de litere se găsește în cuvântul '${data.word}'?`,
            correct, wrong, rng));

        } else if (tip === 2) {
          // Type 3: complete the word with ge or gi
          const data = pick(completareGeGi, rng);
          const correct = data.answer;
          const wrong = ["ge", "gi", "ce", "ci"].filter((g) => g !== correct);
          q.push(createMCQ("sunete_c1", "grupuri_ge_gi_c1",
            `Completează cuvântul '${data.display}' cu grupul potrivit:`,
            correct, wrong, rng));

        } else if (tip === 3) {
          // Type 4: how is G pronounced — soft (ge/gi) or hard (ga/go/gu)
          const isSoft = rng() > 0.5;
          const softWords = extGeGi.map((w) => w.word);
          const hardWords = ["gard", "gol", "gură", "gâscă", "guler", "garaj", "golf"];
          const word = isSoft ? pick(softWords, rng) : pick(hardWords, rng);
          const correct = isSoft ? "moale (ca în 'ge'/'gi')" : "dur (ca în 'ga'/'go')";
          const wrong = isSoft
            ? ["dur (ca în 'ga'/'go')", "nu se pronunță", "ca litera 'j'"]
            : ["moale (ca în 'ge'/'gi')", "nu se pronunță", "ca litera 'j'"];
          q.push(createMCQ("sunete_c1", "grupuri_ge_gi_c1",
            `Cum se pronunță litera 'g' în cuvântul '${word}'?`,
            correct, wrong, rng));

        } else {
          // Type 5: which word does NOT contain ge or gi
          const correct = pick(faraGeGi, rng);
          const wrong = shuffle(extGeGi, rng).slice(0, 3).map((w) => w.word);
          q.push(createMCQ("sunete_c1", "grupuri_ge_gi_c1",
            "Care cuvânt NU conține grupul 'ge' sau 'gi'?",
            correct, wrong, rng));
        }
      }
      return q;
    },

    grupuri_che_chi_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      const grupuri4 = ["che", "chi", "ghe", "ghi"] as string[];

      // Extended word bank
      const extAll = [
        ...CLASA1_WORDS.cheChiGheGhi,
        { word: "chenar", group: "che" },
        { word: "chermeză", group: "che" },
        { word: "chirurg", group: "chi" },
        { word: "chioșc", group: "chi" },
        { word: "gheață", group: "ghe" },
        { word: "ghiveci", group: "ghi" },
        { word: "ghidon", group: "ghi" },
      ];

      // Words without any of these groups
      const faraGrupuri = ["casă", "tată", "pom", "lac", "mare", "brad", "nor", "deal", "minge", "vapor", "elev", "copil"];

      // Completion
      const completare4: { display: string; answer: string }[] = [
        { display: "_ie", answer: "che" },
        { display: "_nar", answer: "che" },
        { display: "_ar", answer: "chi" },
        { display: "_tară", answer: "chi" },
        { display: "_flă", answer: "chi" },
        { display: "_te", answer: "ghe" },
        { display: "_motoc", answer: "ghe" },
        { display: "_ată", answer: "ghe" },
        { display: "_ci", answer: "ghi" },
        { display: "_ndă", answer: "ghi" },
        { display: "_ocel", answer: "ghi" },
      ];

      for (let i = 0; i < 30; i++) {
        const tip = Math.floor(rng() * 5);
        const targetGrup = pick(grupuri4, rng);
        const pool = extAll.filter((item) => item.group === targetGrup);
        if (pool.length === 0) { i--; continue; }

        if (tip === 0) {
          // Type 1: which word contains the target group
          const correct = pick(pool, rng).word;
          const altPool = extAll.filter((item) => item.group !== targetGrup);
          const wrong = shuffle(altPool, rng).slice(0, 3).map((item) => item.word);
          q.push(createMCQ("sunete_c1", "grupuri_che_chi_c1",
            `Care cuvânt conține grupul de litere '${targetGrup}'?`,
            correct, wrong, rng));

        } else if (tip === 1) {
          // Type 2: identify which group is in the given word
          const data = pick(pool, rng);
          const correct = data.group;
          const wrong = grupuri4.filter((g) => g !== correct);
          q.push(createMCQ("sunete_c1", "grupuri_che_chi_c1",
            `Ce grup de litere se găsește în cuvântul '${data.word}'?`,
            correct, wrong, rng));

        } else if (tip === 2) {
          // Type 3: complete the word with the correct group
          const data = pick(completare4, rng);
          const correct = data.answer;
          const wrong = grupuri4.filter((g) => g !== correct);
          q.push(createMCQ("sunete_c1", "grupuri_che_chi_c1",
            `Completează cuvântul '${data.display}' cu grupul potrivit:`,
            correct, wrong, rng));

        } else if (tip === 3) {
          // Type 4: how many sounds does the group represent
          const data = pick(pool, rng);
          const correct = "un singur sunet";
          const wrong = ["două sunete", "trei sunete", "niciun sunet"];
          q.push(createMCQ("sunete_c1", "grupuri_che_chi_c1",
            `Grupul '${data.group}' din cuvântul '${data.word}' reprezintă câte sunete?`,
            correct, wrong, rng));

        } else {
          // Type 5: which word does NOT contain any of the four groups
          const correct = pick(faraGrupuri, rng);
          const wrong = shuffle(extAll, rng).slice(0, 3).map((w) => w.word);
          q.push(createMCQ("sunete_c1", "grupuri_che_chi_c1",
            "Care cuvânt NU conține grupurile 'che', 'chi', 'ghe' sau 'ghi'?",
            correct, wrong, rng));
        }
      }
      return q;
    },
  },

  // ── SILABE ───────────────────────────────────────────────────────────────
  silabe_c1: {
    despartire_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const allSilabe = CLASA1_WORDS.silabe.map((s) => s.silabe);

      // Helper: make plausible wrong splits for a word
      function wrongSplits(word: string, correct: string): string[] {
        const others = allSilabe.filter((s) => s !== correct);
        // wrong1: split after first letter
        const w1 = word.length > 2 ? word[0] + "-" + word.slice(1) : pick(others, rng);
        // wrong2: split in the exact middle (char-level)
        const mid = Math.floor(word.length / 2);
        const w2 = word.length > 3 ? word.slice(0, mid) + "-" + word.slice(mid) : pick(others, rng);
        // wrong3: another real word's split
        const w3 = pick(others.filter((s) => s !== w1 && s !== w2), rng);
        return [w1 !== correct ? w1 : pick(others, rng), w2 !== correct && w2 !== w1 ? w2 : pick(others, rng), w3];
      }

      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.silabe, rng);
        const qType = Math.floor(rng() * 5);

        if (qType === 0) {
          // Type 1: How is X split? (original)
          const correct = data.silabe;
          const wrong = wrongSplits(data.word, correct);
          q.push(createMCQ("silabe_c1", "despartire_c1", `Cum se desparte în silabe cuvântul '${data.word}'?`, correct, wrong, rng));

        } else if (qType === 1) {
          // Type 2: Which splitting is CORRECT?
          const correct = data.silabe;
          const wrong = wrongSplits(data.word, correct);
          q.push(createMCQ("silabe_c1", "despartire_c1", `Care despărțire în silabe este CORECTĂ pentru '${data.word}'?`, correct, wrong, rng));

        } else if (qType === 2) {
          // Type 3: Which word has the same number of syllables as X?
          const refData = pick(CLASA1_WORDS.silabe, rng);
          const refCount = refData.count;
          const sameCountWords = CLASA1_WORDS.silabe.filter((s) => s.count === refCount && s.word !== refData.word);
          if (sameCountWords.length < 1) { i--; continue; }
          const correct = pick(sameCountWords, rng).word;
          const diffCountWords = CLASA1_WORDS.silabe.filter((s) => s.count !== refCount);
          const wrong = shuffle(diffCountWords, rng).slice(0, 3).map((s) => s.word);
          q.push(createMCQ("silabe_c1", "despartire_c1", `Care cuvânt are ACELAȘI număr de silabe ca '${refData.word}' (${refData.silabe})?`, correct, wrong, rng));

        } else if (qType === 3) {
          // Type 4: What is the FIRST syllable of X?
          const parts = data.silabe.split("-");
          if (parts.length < 2) { i--; continue; }
          const correct = parts[0];
          const otherFirsts = CLASA1_WORDS.silabe
            .filter((s) => s.word !== data.word && s.silabe.split("-")[0] !== correct)
            .map((s) => s.silabe.split("-")[0]);
          const wrong = shuffle(otherFirsts, rng).slice(0, 3);
          q.push(createMCQ("silabe_c1", "despartire_c1", `Care este PRIMA silabă a cuvântului '${data.word}'?`, correct, wrong, rng));

        } else {
          // Type 5: What is the LAST syllable of X?
          const parts = data.silabe.split("-");
          if (parts.length < 2) { i--; continue; }
          const correct = parts[parts.length - 1];
          const otherLasts = CLASA1_WORDS.silabe
            .filter((s) => s.word !== data.word)
            .map((s) => { const p = s.silabe.split("-"); return p[p.length - 1]; })
            .filter((s) => s !== correct);
          const wrong = shuffle(otherLasts, rng).slice(0, 3);
          q.push(createMCQ("silabe_c1", "despartire_c1", `Care este ULTIMA silabă a cuvântului '${data.word}'?`, correct, wrong, rng));
        }
      }
      return q;
    },

    numarare_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const allCounts = ["1", "2", "3", "4", "5"];

      for (let i = 0; i < 30; i++) {
        const qType = Math.floor(rng() * 4);

        if (qType === 0) {
          // Type 1: How many syllables does X have? (original)
          const data = pick(CLASA1_WORDS.silabe, rng);
          const correct = String(data.count);
          const wrong = allCounts.filter((c) => c !== correct);
          q.push(createMCQ("silabe_c1", "numarare_c1", `Câte silabe are cuvântul '${data.word}'?`, correct, wrong, rng));

        } else if (qType === 1) {
          // Type 2: Which word has exactly N syllables?
          const targetCount = 1 + Math.floor(rng() * 4); // 1-4
          const pool = CLASA1_WORDS.silabe.filter((s) => s.count === targetCount);
          if (pool.length < 1) { i--; continue; }
          const correct = pick(pool, rng).word;
          const wrongPool = CLASA1_WORDS.silabe.filter((s) => s.count !== targetCount);
          const wrong = shuffle(wrongPool, rng).slice(0, 3).map((s) => s.word);
          const numLabel = ["o", "două", "trei", "patru"][targetCount - 1];
          q.push(createMCQ("silabe_c1", "numarare_c1", `Care cuvânt are exact ${numLabel} ${targetCount === 1 ? "silabă" : "silabe"}?`, correct, wrong, rng));

        } else if (qType === 2) {
          // Type 3: Which word has MORE syllables?
          const dataA = pick(CLASA1_WORDS.silabe, rng);
          const dataB = pick(CLASA1_WORDS.silabe.filter((s) => s.count !== dataA.count), rng);
          if (!dataB) { i--; continue; }
          const correct = dataA.count > dataB.count ? dataA.word : dataB.word;
          const wrong_word = dataA.count > dataB.count ? dataB.word : dataA.word;
          // two more distractors
          const extras = shuffle(CLASA1_WORDS.silabe.filter((s) => s.word !== dataA.word && s.word !== dataB.word), rng).slice(0, 2).map((s) => s.word);
          q.push(createMCQ("silabe_c1", "numarare_c1", `Care cuvânt are MAI MULTE silabe: '${dataA.word}' sau '${dataB.word}'?`, correct, [wrong_word, ...extras], rng));

        } else {
          // Type 4: Which word has the FEWEST syllables?
          const pool4 = shuffle(CLASA1_WORDS.silabe, rng).slice(0, 4);
          const minCount = Math.min(...pool4.map((s) => s.count));
          const minCandidates = pool4.filter((s) => s.count === minCount);
          const correct = pick(minCandidates, rng).word;
          const wrong = pool4.filter((s) => s.word !== correct).map((s) => s.word);
          q.push(createMCQ("silabe_c1", "numarare_c1", `Care cuvânt are cele mai PUȚINE silabe?\n(${pool4.map((s) => s.word).join(", ")})`, correct, wrong, rng));
        }
      }
      return q;
    },

    silaba_accent_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const accentData = [
        { word: "copil",    silabe: ["co", "pil"],        accent: "pil",  accentPos: "last" },
        { word: "casă",     silabe: ["ca", "să"],          accent: "ca",   accentPos: "first" },
        { word: "masă",     silabe: ["ma", "să"],          accent: "ma",   accentPos: "first" },
        { word: "soare",    silabe: ["soa", "re"],         accent: "soa",  accentPos: "first" },
        { word: "pisică",   silabe: ["pi", "si", "că"],   accent: "si",   accentPos: "middle" },
        { word: "mașină",   silabe: ["ma", "și", "nă"],   accent: "și",   accentPos: "middle" },
        { word: "fluture",  silabe: ["flu", "tu", "re"],  accent: "flu",  accentPos: "first" },
        { word: "albină",   silabe: ["al", "bi", "nă"],   accent: "bi",   accentPos: "middle" },
        { word: "copac",    silabe: ["co", "pac"],         accent: "pac",  accentPos: "last" },
        { word: "vapor",    silabe: ["va", "por"],         accent: "por",  accentPos: "last" },
        { word: "avion",    silabe: ["a", "vi", "on"],    accent: "on",   accentPos: "last" },
        { word: "floare",   silabe: ["floa", "re"],        accent: "floa", accentPos: "first" },
        { word: "albastru", silabe: ["al", "bas", "tru"], accent: "bas",  accentPos: "middle" },
        { word: "lumină",   silabe: ["lu", "mi", "nă"],   accent: "mi",   accentPos: "middle" },
        { word: "iepure",   silabe: ["ie", "pu", "re"],   accent: "ie",   accentPos: "first" },
      ];
      const extraSilabe = ["ma", "la", "ra", "ta", "ca", "de", "ne", "le", "ba", "pu"];

      for (let i = 0; i < 30; i++) {
        const data = pick(accentData, rng);
        const qType = Math.floor(rng() * 5);

        if (qType === 0) {
          // Type 1: On which syllable does the stress fall? (original)
          const correct = data.accent;
          const wrong = [...data.silabe.filter((s) => s !== correct)];
          while (wrong.length < 3) wrong.push(pick(extraSilabe, rng));
          q.push(createMCQ("silabe_c1", "silaba_accent_c1", `Pe care silabă cade ACCENTUL în cuvântul '${data.word}'?`, correct, wrong, rng));

        } else if (qType === 1) {
          // Type 2: Which word has stress on the FIRST syllable?
          const firstAccent = accentData.filter((d) => d.accentPos === "first");
          const notFirst = accentData.filter((d) => d.accentPos !== "first");
          if (firstAccent.length < 1) { i--; continue; }
          const correct = pick(firstAccent, rng).word;
          const wrong = shuffle(notFirst, rng).slice(0, 3).map((d) => d.word);
          q.push(createMCQ("silabe_c1", "silaba_accent_c1", "Care cuvânt are accentul pe PRIMA silabă?", correct, wrong, rng));

        } else if (qType === 2) {
          // Type 3: Which word has stress on the LAST syllable?
          const lastAccent = accentData.filter((d) => d.accentPos === "last");
          const notLast = accentData.filter((d) => d.accentPos !== "last");
          if (lastAccent.length < 1) { i--; continue; }
          const correct = pick(lastAccent, rng).word;
          const wrong = shuffle(notLast, rng).slice(0, 3).map((d) => d.word);
          q.push(createMCQ("silabe_c1", "silaba_accent_c1", "Care cuvânt are accentul pe ULTIMA silabă?", correct, wrong, rng));

        } else if (qType === 3) {
          // Type 4: Do these two words share the same stress position?
          const dataB = pick(accentData.filter((d) => d.word !== data.word), rng);
          const samePos = data.accentPos === dataB.accentPos;
          const correct = samePos ? "Da, același accent" : "Nu, accent diferit";
          const wrong = [
            samePos ? "Nu, accent diferit" : "Da, același accent",
            "Nu se poate ști",
            "Amândouă pe prima silabă",
          ];
          q.push(createMCQ("silabe_c1", "silaba_accent_c1", `'${data.word}' și '${dataB.word}' au accentul pe aceeași poziție?`, correct, wrong, rng));

        } else {
          // Type 5: Identify the stressed vowel (which vowel is stressed)
          const accentSyl = data.accent;
          // The vowel in the stressed syllable (first vowel found)
          const vowels = ["a", "ă", "â", "e", "i", "î", "o", "u"];
          const stressedVowel = accentSyl.split("").find((ch) => vowels.includes(ch)) ?? accentSyl[0];
          // Wrong: vowels from other syllables
          const otherVowels = data.silabe
            .filter((s) => s !== accentSyl)
            .flatMap((s) => s.split("").filter((ch) => vowels.includes(ch)));
          const wrongPool = Array.from(new Set(otherVowels.filter((v) => v !== stressedVowel)));
          while (wrongPool.length < 3) wrongPool.push(pick(vowels.filter((v) => v !== stressedVowel), rng));
          q.push(createMCQ("silabe_c1", "silaba_accent_c1", `Care vocală este ACCENTUATĂ în cuvântul '${data.word}' (${data.silabe.join("-")})?`, stressedVowel, wrongPool.slice(0, 3), rng));
        }
      }
      return q;
    },
  },

  // ── CUVÂNTUL ─────────────────────────────────────────────────────────────
  cuvantul_c1: {
    sinonime_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      // Context sentences for synonym-in-context (Type 4 & 5)
      const contextSentences: Record<string, { sentence: string; blank: string }> = {
        mare:    { sentence: "Elefantul este un animal foarte ___.", blank: "mare" },
        mic:     { sentence: "Furnica este un animal foarte ___.", blank: "mic" },
        frumos:  { sentence: "Grădina cu flori este foarte ___.", blank: "frumos" },
        vesel:   { sentence: "Copilul râde și este ___.", blank: "vesel" },
        trist:   { sentence: "Fetița plânge și este ___.", blank: "trist" },
        rapid:   { sentence: "Iepurele aleargă ___.", blank: "rapid" },
        lent:    { sentence: "Melcul se mișcă foarte ___.", blank: "lent" },
        bun:     { sentence: "Mama face o supă ___.", blank: "bun" },
        rău:     { sentence: "Băiatul a stricat jucăria, a fost ___.", blank: "rău" },
        înalt:   { sentence: "Girafa este un animal ___.", blank: "înalt" },
        cald:    { sentence: "Supa este ___.", blank: "cald" },
        rece:    { sentence: "Apa din frigider este ___.", blank: "rece" },
      };

      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.sinonime, rng);
        const qType = Math.floor(rng() * 4);

        if (qType === 0) {
          // Type 1: What is the synonym of X? (original)
          q.push(createMCQ("cuvantul_c1", "sinonime_c1", `Care cuvânt are un sens ASEMĂNĂTOR cu '${data.word}'?`, data.syn, data.wrong, rng));

        } else if (qType === 1) {
          // Type 2: Which PAIR are synonyms?
          const correctPair = `${data.word} – ${data.syn}`;
          // Build 3 wrong pairs (word + non-synonym)
          const others = shuffle(CLASA1_WORDS.sinonime.filter((d) => d.word !== data.word), rng);
          const wrongPairs = others.slice(0, 3).map((d) => `${d.word} – ${pick(d.wrong, rng)}`);
          q.push(createMCQ("cuvantul_c1", "sinonime_c1", "Care PERECHE de cuvinte sunt sinonime?", correctPair, wrongPairs, rng));

        } else if (qType === 2) {
          // Type 3: Find the odd one out (not a synonym for X)
          const correct = pick(data.wrong, rng); // a word that is NOT a synonym
          const wrongOptions = [data.syn, ...data.wrong.filter((w) => w !== correct)];
          q.push(createMCQ("cuvantul_c1", "sinonime_c1", `Care cuvânt NU este sinonim cu '${data.word}'?`, correct, wrongOptions, rng));

        } else {
          // Type 4: Replace the underlined word with a synonym
          const ctx = contextSentences[data.word];
          if (!ctx) { i--; continue; }
          const sentenceWithBlank = ctx.sentence.replace("___", `'${ctx.blank}'`);
          const correct = data.syn;
          q.push(createMCQ("cuvantul_c1", "sinonime_c1", `Înlocuiește cuvântul subliniat cu un sinonim:\n"${sentenceWithBlank}"`, correct, data.wrong, rng));
        }
      }
      return q;
    },

    antonime_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      // Sentences for "opposite in context" (Type 4)
      const contextAnt: Record<string, { sentence: string; targetWord: string }> = {
        mare:     { sentence: "Elefantul este mare, dar furnica este ___.", targetWord: "mic" },
        frumos:   { sentence: "Florile sunt frumoase, dar buruienile sunt ___.", targetWord: "urât" },
        vesel:    { sentence: "Astăzi sunt vesel, dar ieri eram ___.", targetWord: "trist" },
        bun:      { sentence: "Mierea este bună, dar oțetul este ___.", targetWord: "rău" },
        înalt:    { sentence: "Tatăl este înalt, dar copilul este ___.", targetWord: "scund" },
        rapid:    { sentence: "Iepurele este rapid, dar broasca țestoasă este ___.", targetWord: "lent" },
        cald:     { sentence: "Vara este caldă, dar iarna este ___.", targetWord: "rece" },
        lung:     { sentence: "Sfoara este lungă, dar creionul este ___.", targetWord: "scurt" },
        greu:     { sentence: "Piatra este grea, dar fulgul este ___.", targetWord: "ușor" },
        nou:      { sentence: "Cartea aceasta este nouă, dar cealaltă este ___.", targetWord: "vechi" },
        alb:      { sentence: "Zăpada este albă, dar corbul este ___.", targetWord: "negru" },
        zi:       { sentence: "Soarele strălucește în timpul zilei, luna în ___.", targetWord: "noapte" },
        deschis:  { sentence: "Ușa este deschisă, dar fereastra este ___.", targetWord: "închis" },
        sus:      { sentence: "Avionul zboară sus, dar peștele înoată ___.", targetWord: "jos" },
        plin:     { sentence: "Paharul este plin, dar castronul este ___.", targetWord: "gol" },
      };

      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.antonime, rng);
        const correct = data.ant;
        const otherAnts = CLASA1_WORDS.antonime
          .filter((a) => a.ant !== correct && a.word !== data.word)
          .map((a) => a.ant);
        const wrong = shuffle(otherAnts, rng).slice(0, 3);
        const qType = Math.floor(rng() * 4);

        if (qType === 0) {
          // Type 1: What is the antonym of X? (original)
          q.push(createMCQ("cuvantul_c1", "antonime_c1", `Care cuvânt are sens OPUS lui '${data.word}'?`, correct, wrong, rng));

        } else if (qType === 1) {
          // Type 2: Which PAIR are antonyms?
          const correctPair = `${data.word} – ${data.ant}`;
          const wrongPairs = shuffle(CLASA1_WORDS.antonime.filter((d) => d.word !== data.word), rng)
            .slice(0, 3)
            .map((d) => {
              // pair word with a non-antonym (pick another ant)
              const nonAnt = pick(CLASA1_WORDS.antonime.filter((x) => x.ant !== d.ant && x.ant !== d.word), rng).ant;
              return `${d.word} – ${nonAnt}`;
            });
          q.push(createMCQ("cuvantul_c1", "antonime_c1", "Care PERECHE de cuvinte sunt antonime?", correctPair, wrongPairs, rng));

        } else if (qType === 2) {
          // Type 3: Complete "X este opusul lui ___"
          const correct3 = data.word;
          const wrong3 = shuffle(CLASA1_WORDS.antonime.filter((a) => a.word !== data.word), rng).slice(0, 3).map((a) => a.word);
          q.push(createMCQ("cuvantul_c1", "antonime_c1", `'${data.ant}' este opusul lui ___?`, correct3, wrong3, rng));

        } else {
          // Type 4: What is the opposite in this sentence?
          const ctx = contextAnt[data.word];
          if (!ctx) { i--; continue; }
          q.push(createMCQ("cuvantul_c1", "antonime_c1", `Completează propoziția cu opusul cuvântului subliniat:\n"${ctx.sentence}"`, ctx.targetWord, wrong, rng));
        }
      }
      return q;
    },

    diminutive_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      // Extra non-diminutive words for Type 2 (which is NOT a diminutive)
      const nonDiminutive = ["casă", "floare", "copil", "carte", "câine", "pisică", "copac", "pasăre", "masă", "pom"];

      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.diminutive, rng);
        const qType = Math.floor(rng() * 4);

        if (qType === 0) {
          // Type 1: What is the diminutive of X? (original)
          const correct = data.dim;
          const otherDims = CLASA1_WORDS.diminutive.filter((d) => d.dim !== correct).map((d) => d.dim);
          const wrong = shuffle(otherDims, rng).slice(0, 3);
          q.push(createMCQ("cuvantul_c1", "diminutive_c1", `Care este diminutivul cuvântului '${data.word}'?`, correct, wrong, rng));

        } else if (qType === 1) {
          // Type 2: Which word is NOT a diminutive?
          const correct = pick(nonDiminutive, rng);
          const allDims = CLASA1_WORDS.diminutive.map((d) => d.dim);
          const wrong = shuffle(allDims.filter((d) => d !== data.dim), rng).slice(0, 3);
          q.push(createMCQ("cuvantul_c1", "diminutive_c1", "Care cuvânt NU este un diminutiv?", correct, wrong, rng));

        } else if (qType === 2) {
          // Type 3: Identify the base word from a diminutive
          const correct = data.word;
          const otherWords = CLASA1_WORDS.diminutive.filter((d) => d.word !== correct).map((d) => d.word);
          const wrong = shuffle(otherWords, rng).slice(0, 3);
          q.push(createMCQ("cuvantul_c1", "diminutive_c1", `De la ce cuvânt de bază provine diminutivul '${data.dim}'?`, correct, wrong, rng));

        } else {
          // Type 4: Which diminutive matches X (from a list of 4 options)?
          const correct = data.dim;
          const otherDims = shuffle(CLASA1_WORDS.diminutive.filter((d) => d.dim !== correct), rng).slice(0, 3).map((d) => d.dim);
          q.push(createMCQ("cuvantul_c1", "diminutive_c1", `Găsește diminutivul cuvântului '${data.word}' în lista de mai jos:`, correct, otherDims, rng));
        }
      }
      return q;
    },

    familii_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.familii, rng);
        const allNonFamily = [
          ...data.nonFamily,
          ...CLASA1_WORDS.familii
            .filter((f) => f.root !== data.root)
            .flatMap((f) => f.nonFamily),
        ];
        const qType = Math.floor(rng() * 4);

        if (qType === 0) {
          // Type 1: Which word belongs to family of X? (original)
          const correct = pick(data.family, rng);
          const wrong = shuffle(allNonFamily, rng).slice(0, 3);
          q.push(createMCQ("cuvantul_c1", "familii_c1", `Care cuvânt face parte din familia cuvântului '${data.root}'?`, correct, wrong, rng));

        } else if (qType === 1) {
          // Type 2: Which word does NOT belong to the family of X?
          const correct = pick(allNonFamily, rng);
          const wrong = shuffle(data.family, rng).slice(0, 3);
          q.push(createMCQ("cuvantul_c1", "familii_c1", `Care cuvânt NU face parte din familia cuvântului '${data.root}'?`, correct, wrong, rng));

        } else if (qType === 2) {
          // Type 3: What is the ROOT word for a given family member?
          const familyMember = pick(data.family, rng);
          const correct = data.root;
          const otherRoots = CLASA1_WORDS.familii.filter((f) => f.root !== correct).map((f) => f.root);
          const wrong = shuffle(otherRoots, rng).slice(0, 3);
          q.push(createMCQ("cuvantul_c1", "familii_c1", `Care este cuvântul de bază (rădăcina) al cuvântului '${familyMember}'?`, correct, wrong, rng));

        } else {
          // Type 4: How many words from the list belong to the family of X?
          // Show 4 words: 1 or 2 family members + the rest non-family
          const famCount = 1 + Math.floor(rng() * Math.min(2, data.family.length));
          const famSample = shuffle(data.family, rng).slice(0, famCount);
          const nonFamSample = shuffle(allNonFamily, rng).slice(0, 4 - famCount);
          const wordList = shuffle([...famSample, ...nonFamSample], rng);
          const correct = String(famCount);
          const wrongCounts = ["1", "2", "3", "4"].filter((c) => c !== correct);
          q.push(createMCQ("cuvantul_c1", "familii_c1",
            `Câte cuvinte din lista de mai jos fac parte din familia cuvântului '${data.root}'?\n(${wordList.join(", ")})`,
            correct, wrongCounts, rng));
        }
      }
      return q;
    },

    singular_plural_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.singularPlural, rng);
        const others = CLASA1_WORDS.singularPlural.filter((d) => d.sing !== data.sing);
        const qType = Math.floor(rng() * 4);

        if (qType === 0) {
          // Type 1: What is the PLURAL of X? (original)
          const correct = data.plur;
          const wrong = shuffle(others, rng).slice(0, 3).map((d) => d.plur);
          q.push(createMCQ("cuvantul_c1", "singular_plural_c1", `Care este PLURALUL cuvântului '${data.sing}'?`, correct, wrong, rng));

        } else if (qType === 1) {
          // Type 2: What is the SINGULAR of X?
          const correct = data.sing;
          const wrong = shuffle(others, rng).slice(0, 3).map((d) => d.sing);
          q.push(createMCQ("cuvantul_c1", "singular_plural_c1", `Care este SINGULARUL cuvântului '${data.plur}'?`, correct, wrong, rng));

        } else if (qType === 2) {
          // Type 3: Is this word singular or plural?
          const isSing = rng() > 0.5;
          const word = isSing ? data.sing : data.plur;
          const correct = isSing ? "singular" : "plural";
          const wrong = [
            isSing ? "plural" : "singular",
            "neutru",
            "nu se poate ști",
          ];
          q.push(createMCQ("cuvantul_c1", "singular_plural_c1", `Cuvântul '${word}' este la forma de SINGULAR sau PLURAL?`, correct, wrong, rng));

        } else {
          // Type 4: Which is the correctly formed plural?
          const correct = data.plur;
          // Build plausible wrong plurals: apply wrong endings to the singular
          const sing = data.sing;
          const wrongSuffix1 = sing.endsWith("ă") ? sing.slice(0, -1) + "uri" : sing + "uri";
          const wrongSuffix2 = sing.endsWith("ă") ? sing.slice(0, -1) + "e" : sing + "e";
          const wrongSuffix3 = shuffle(others, rng)[0]?.plur ?? (sing + "i");
          const wrongOpts = [wrongSuffix1, wrongSuffix2, wrongSuffix3].filter((w) => w !== correct);
          q.push(createMCQ("cuvantul_c1", "singular_plural_c1", `Care este forma CORECTĂ de plural a cuvântului '${data.sing}'?`, correct, wrongOpts, rng));
        }
      }
      return q;
    },
  },

  // ── PROPOZIȚIA ───────────────────────────────────────────────────────────
  // ── PROPOZIȚIA ───────────────────────────────────────────────────────────
  propozitia_c1: {
    punctuatie_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      // 5 question types
      const propEnunt = CLASA1_WORDS.propozitii.filter((p) => p.tip === "enunțiativă");
      const propInterog = CLASA1_WORDS.propozitii.filter((p) => p.tip === "interogativă");
      const propExclam = CLASA1_WORDS.propozitii.filter((p) => p.tip === "exclamativă");
      const semne = [".", "?", "!"];

      // Type A: what punctuation does this sentence need?
      const typeA = () => {
        const data = pick(CLASA1_WORDS.propozitii, rng);
        const textFaraSemn = data.text.replace(/[.?!]$/, "");
        return createMCQ("propozitia_c1", "punctuatie_c1",
          `Ce semn de punctuație se pune la sfârșitul propoziției: '${textFaraSemn}'?`,
          data.semn, semne.filter((s) => s !== data.semn).concat([","]), rng);
      };

      // Type B: which sentence uses correct punctuation?
      const typeB = () => {
        const correct = pick(CLASA1_WORDS.propozitii, rng);
        const wrongVersions = [
          correct.text.replace(/[.?!]$/, (s) => s === "." ? "?" : s === "?" ? "!" : "."),
          correct.text.replace(/[.?!]$/, (s) => s === "." ? "!" : s === "?" ? "." : "?"),
          correct.text.replace(/[.?!]$/, ""),
        ];
        return createMCQ("propozitia_c1", "punctuatie_c1",
          "Care propoziție are SEMNUL DE PUNCTUAȚIE corect la sfârșit?",
          correct.text, wrongVersions, rng);
      };

      // Type C: what type of sentence uses "?"
      const typeC = () => {
        const semnIntrebare = pick(["?", "!", "."], rng);
        const tipMap: Record<string, string> = { "?": "interogativă", "!": "exclamativă", ".": "enunțiativă" };
        const correct = tipMap[semnIntrebare];
        const wrong = Object.values(tipMap).filter((t) => t !== correct);
        wrong.push("exclamativă și interogativă");
        return createMCQ("propozitia_c1", "punctuatie_c1",
          `Semnul '${semnIntrebare}' se folosește la propozițiile:`,
          correct, wrong, rng);
      };

      // Type D: identify the mistake in punctuation
      const typeD = () => {
        const original = pick(CLASA1_WORDS.propozitii, rng);
        const wrongSemn = pick(semne.filter((s) => s !== original.semn), rng);
        const gresit = original.text.replace(/[.?!]$/, wrongSemn);
        const correct = `Semnul '${wrongSemn}' → trebuie '${original.semn}'`;
        const wrong = [
          `Semnul '${original.semn}' → trebuie '${wrongSemn}'`,
          "Nu există nicio greșeală.",
          `Lipsește litera mare la început.`,
        ];
        return createMCQ("propozitia_c1", "punctuatie_c1",
          `Ce greșeală de punctuație este în: '${gresit}'?`,
          correct, wrong, rng);
      };

      // Type E: complete with the correct mark
      const typeE = () => {
        const pool = pick([propEnunt, propInterog, propExclam], rng);
        const data = pick(pool, rng);
        const textFaraSemn = data.text.replace(/[.?!]$/, "___");
        return createMCQ("propozitia_c1", "punctuatie_c1",
          `Completează cu semnul potrivit: '${textFaraSemn}'`,
          data.semn, semne.filter((s) => s !== data.semn).concat([","]), rng);
      };

      const types = [typeA, typeB, typeC, typeD, typeE];
      for (let i = 0; i < 30; i++) {
        q.push(pick(types, rng)());
      }
      return q;
    },

    litera_mare_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      // Type A: which is correctly capitalized?
      const typeA = () => {
        const isProper = rng() > 0.5;
        const correct = isProper ? pick(CLASA1_WORDS.numeProper, rng) : pick(CLASA1_WORDS.numeComune, rng);
        const wrong = isProper
          ? shuffle(CLASA1_WORDS.numeComune, rng).slice(0, 3)
          : shuffle(CLASA1_WORDS.numeProper, rng).slice(0, 3);
        return createMCQ("propozitia_c1", "litera_mare_c1",
          isProper ? "Care dintre aceste cuvinte se scrie cu LITERĂ MARE?"
                   : "Care dintre aceste cuvinte se scrie cu literă MICĂ?",
          correct, wrong, rng);
      };

      // Type B: find the error in capitalization
      const typeB = () => {
        const data = pick(CLASA1_WORDS.capitalizareData, rng);
        return createMCQ("propozitia_c1", "litera_mare_c1",
          `Care variantă are greșeală de literă mare?`,
          data.gresit,
          [data.corect,
           pick(CLASA1_WORDS.capitalizareData.filter((d) => d.corect !== data.corect), rng).corect,
           pick(CLASA1_WORDS.capitalizareData.filter((d) => d.corect !== data.corect), rng).corect],
          rng);
      };

      // Type C: which word needs a capital letter?
      const typeC = () => {
        const name = pick(CLASA1_WORDS.numeProper, rng);
        const comune = shuffle(CLASA1_WORDS.numeComune, rng).slice(0, 3);
        return createMCQ("propozitia_c1", "litera_mare_c1",
          `Care dintre aceste cuvinte are NEVOIE de literă mare?`,
          name, comune, rng);
      };

      // Type D: why does this word have a capital letter?
      const typeD = () => {
        const name = pick(CLASA1_WORDS.numeProper, rng);
        const isPlace = ["România", "București", "Dunărea", "Cluj", "Brașov", "Iași"].includes(name);
        const isPerson = ["Ana", "Ion", "Maria", "Andrei"].includes(name);
        const correct = isPerson ? "Este un nume de persoană."
                      : isPlace ? "Este un nume de loc."
                      : "Este un nume propriu.";
        const wrong = [
          "Este la începutul propoziției.",
          "Este un cuvânt lung.",
          isPerson ? "Este un nume de loc." : "Este un nume de persoană.",
        ];
        return createMCQ("propozitia_c1", "litera_mare_c1",
          `De ce se scrie '${name}' cu literă mare?`,
          correct, wrong, rng);
      };

      // Type E: how many capital letters in a sentence?
      const capitalizareSentences = [
        { sentence: "Ana merge la București.", count: "2", wrong: ["1", "3", "4"] },
        { sentence: "Ion are un câine pe nume Rex.", count: "3", wrong: ["1", "2", "4"] },
        { sentence: "Maria este din Cluj.", count: "2", wrong: ["1", "3", "4"] },
        { sentence: "Andrei merge la Brașov cu mama.", count: "2", wrong: ["1", "3", "4"] },
        { sentence: "Dunărea trece prin România.", count: "2", wrong: ["1", "3", "4"] },
        { sentence: "Ana și Ion sunt prieteni.", count: "2", wrong: ["1", "3", "4"] },
        { sentence: "Elena merge la Sibiu.", count: "2", wrong: ["1", "3", "4"] },
        { sentence: "Pisica Mariei se numește Mișu.", count: "3", wrong: ["1", "2", "4"] },
        { sentence: "Câinele lui Mihai se numește Azorel.", count: "3", wrong: ["1", "2", "4"] },
        { sentence: "Trenul pleacă spre Constanța.", count: "2", wrong: ["1", "3", "4"] },
        { sentence: "Tudor și Sofia merg la parc.", count: "2", wrong: ["1", "3", "4"] },
        { sentence: "Bunica mea locuiește la Brașov.", count: "2", wrong: ["1", "3", "4"] },
        { sentence: "Vlad merge la Iași cu tata.", count: "2", wrong: ["1", "3", "4"] },
        { sentence: "Câinele Rex aleargă în parc.", count: "2", wrong: ["1", "3", "4"] },
        { sentence: "Ana, Ion și Maria sunt colegi.", count: "3", wrong: ["1", "2", "4"] },
      ];
      const typeE = () => {
        const data = pick(capitalizareSentences, rng);
        return createMCQ("propozitia_c1", "litera_mare_c1",
          `Câte litere MARI (majuscule) sunt în propoziția: '${data.sentence}'?`,
          data.count, data.wrong, rng);
      };

      const types = [typeA, typeA, typeB, typeC, typeD, typeE];
      for (let i = 0; i < 30; i++) {
        q.push(pick(types, rng)());
      }
      return q;
    },

    propozitie_tip_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const tipuri = ["enunțiativă", "interogativă", "exclamativă"];
      const propEnunt = CLASA1_WORDS.propozitii.filter((p) => p.tip === "enunțiativă");
      const propInterog = CLASA1_WORDS.propozitii.filter((p) => p.tip === "interogativă");
      const propExclam = CLASA1_WORDS.propozitii.filter((p) => p.tip === "exclamativă");

      // Type A: what type of sentence is this?
      const typeA = () => {
        const data = pick(CLASA1_WORDS.propozitii, rng);
        return createMCQ("propozitia_c1", "propozitie_tip_c1",
          `Ce fel de propoziție este: '${data.text}'?`,
          data.tip, tipuri.filter((t) => t !== data.tip).concat(["imperativă"]), rng);
      };

      // Type B: which sentence is interrogative/exclamatory?
      const typeB = () => {
        const targetTip = pick(["interogativă", "exclamativă"], rng);
        const correct = pick(targetTip === "interogativă" ? propInterog : propExclam, rng).text;
        const wrongPool = targetTip === "interogativă"
          ? [...propEnunt, ...propExclam]
          : [...propEnunt, ...propInterog];
        const wrong = shuffle(wrongPool, rng).slice(0, 3).map((p) => p.text);
        return createMCQ("propozitia_c1", "propozitie_tip_c1",
          `Care propoziție este ${targetTip}?`,
          correct, wrong, rng);
      };

      // Type C: turn enunțiativă into interogativă (which is the question form?)
      const typeC = () => {
        const conversionData = [
          { enunt: "Ana merge la școală.", interog: "Merge Ana la școală?", wrong1: "Ana merge la școală!", wrong2: "La școală merge Ana." },
          { enunt: "Ion are o carte.", interog: "Are Ion o carte?", wrong1: "Ion are o carte!", wrong2: "O carte are Ion." },
          { enunt: "Pisica bea lapte.", interog: "Bea pisica lapte?", wrong1: "Pisica bea lapte!", wrong2: "Ce bea pisica?" },
          { enunt: "Câinele doarme.", interog: "Doarme câinele?", wrong1: "Câinele doarme!", wrong2: "Câine, dormi?" },
        ];
        const data = pick(conversionData, rng);
        return createMCQ("propozitia_c1", "propozitie_tip_c1",
          `Transformă în propoziție INTEROGATIVĂ: '${data.enunt}'`,
          data.interog, [data.wrong1, data.wrong2, data.enunt.replace(".", "?")], rng);
      };

      // Type D: what punctuation mark does this type use?
      const typeD = () => {
        const tipSemn = pick([
          { tip: "interogativă", semn: "?", wrong: [".", "!", ","] },
          { tip: "exclamativă", semn: "!", wrong: [".", "?", ","] },
          { tip: "enunțiativă", semn: ".", wrong: ["?", "!", ","] },
        ], rng);
        return createMCQ("propozitia_c1", "propozitie_tip_c1",
          `Ce semn de punctuație se folosește la propoziția ${tipSemn.tip}?`,
          tipSemn.semn, tipSemn.wrong, rng);
      };

      // Type E: identify type by content clues
      const typeE = () => {
        const clueData = [
          { text: "Ce frumos este!", tip: "exclamativă", wrong: ["enunțiativă", "interogativă", "imperativă"] },
          { text: "Unde ești tu?", tip: "interogativă", wrong: ["enunțiativă", "exclamativă", "imperativă"] },
          { text: "Soarele strălucește.", tip: "enunțiativă", wrong: ["interogativă", "exclamativă", "imperativă"] },
          { text: "Bravo, ai câștigat!", tip: "exclamativă", wrong: ["enunțiativă", "interogativă", "imperativă"] },
          { text: "Cine a venit?", tip: "interogativă", wrong: ["enunțiativă", "exclamativă", "imperativă"] },
          { text: "Copilul doarme liniștit.", tip: "enunțiativă", wrong: ["interogativă", "exclamativă", "imperativă"] },
        ];
        const data = pick(clueData, rng);
        return createMCQ("propozitia_c1", "propozitie_tip_c1",
          `Ce tip de propoziție este: '${data.text}'?`,
          data.tip, data.wrong, rng);
      };

      const types = [typeA, typeB, typeC, typeD, typeE];
      for (let i = 0; i < 30; i++) {
        q.push(pick(types, rng)());
      }
      return q;
    },

    ordine_cuvinte_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      // Type A: put words in order (full sentence)
      const typeA = () => {
        const data = pick(CLASA1_WORDS.ordineData, rng);
        const correct = data.correct;
        const shuffled1 = shuffle(data.words, rng).join(" ") + ".";
        const shuffled2 = [...data.words].reverse().join(" ") + ".";
        const otherCorrects = CLASA1_WORDS.ordineData.filter((d) => d.correct !== correct).map((d) => d.correct);
        const wrong = [
          shuffled1 !== correct ? shuffled1 : pick(otherCorrects, rng),
          shuffled2 !== correct ? shuffled2 : pick(otherCorrects, rng),
          pick(otherCorrects, rng),
        ];
        return createMCQ("propozitia_c1", "ordine_cuvinte_c1",
          `Aranjează cuvintele în ordine corectă: '${data.words.join(" / ")}'`,
          correct, wrong, rng);
      };

      // Type B: which word comes first in a correct sentence?
      const typeB = () => {
        const data = pick(CLASA1_WORDS.ordineData, rng);
        const firstWord = data.correct.split(" ")[0].replace(/[.,!?]$/, "");
        const otherWords = data.words.filter((w) => w !== firstWord && w.toLowerCase() !== firstWord.toLowerCase());
        const wrong = shuffle(otherWords, rng).slice(0, 3);
        while (wrong.length < 3) wrong.push(pick(["de", "la", "cu", "pe"], rng));
        return createMCQ("propozitia_c1", "ordine_cuvinte_c1",
          `Care cuvânt vine PRIMUL în propoziția: '${data.words.join(" / ")}'?`,
          firstWord, wrong, rng);
      };

      // Type C: which is the CORRECT sentence?
      const typeC = () => {
        const data = pick(CLASA1_WORDS.ordineData, rng);
        const correct = data.correct;
        const shuffled1 = shuffle(data.words, rng).join(" ") + ".";
        const shuffled2 = [...data.words].reverse().join(" ") + ".";
        const wrong = [
          shuffled1 !== correct ? shuffled1 : data.words.slice(1).concat(data.words[0]).join(" ") + ".",
          shuffled2 !== correct ? shuffled2 : data.words.slice(2).concat(data.words.slice(0, 2)).join(" ") + ".",
          data.words.slice(1).concat([data.words[0]]).join(" ") + ".",
        ];
        return createMCQ("propozitia_c1", "ordine_cuvinte_c1",
          `Care variantă este propoziția CORECTĂ?`,
          correct, wrong, rng);
      };

      // Type D: find the word that is out of place
      const typeD = () => {
        const data = pick(CLASA1_WORDS.ordineData, rng);
        const correctWords = data.correct.replace(/[.!?]$/, "").split(" ");
        const wrongIdx = Math.floor(rng() * (correctWords.length - 1)) + 1;
        const movedWord = correctWords[wrongIdx];
        const wrongVersionWords = [...correctWords];
        wrongVersionWords.splice(wrongIdx, 1);
        wrongVersionWords.unshift(movedWord);
        const firstWord = correctWords[0];
        const wrong = [
          firstWord,
          wrongVersionWords[1] ?? correctWords[1],
          correctWords[correctWords.length - 1],
        ].filter((w) => w !== movedWord);
        while (wrong.length < 3) wrong.push(pick(["la", "cu", "de", "pe"], rng));
        return createMCQ("propozitia_c1", "ordine_cuvinte_c1",
          `În propoziția '${wrongVersionWords.join(" ") + "."}', care cuvânt NU este la locul lui?`,
          movedWord, wrong.slice(0, 3), rng);
      };

      // Type E: is this word order correct or not?
      const typeE = () => {
        const data = pick(CLASA1_WORDS.ordineData, rng);
        const isCorrect = rng() > 0.5;
        const sentence = isCorrect ? data.correct
          : shuffle(data.words, rng).join(" ") + ".";
        const correct = sentence === data.correct ? "Da, este corectă." : "Nu, nu este corectă.";
        const wrong = [
          sentence === data.correct ? "Nu, nu este corectă." : "Da, este corectă.",
          "Nu se poate ști.",
          "Propoziția are prea puține cuvinte.",
        ];
        return createMCQ("propozitia_c1", "ordine_cuvinte_c1",
          `Propoziția '${sentence}' este scrisă în ordine corectă?`,
          correct, wrong, rng);
      };

      const types = [typeA, typeB, typeC, typeD, typeE];
      for (let i = 0; i < 30; i++) {
        q.push(pick(types, rng)());
      }
      return q;
    },
  },

  // ── ORTOGRAFIE ───────────────────────────────────────────────────────────
  ortografie_c1: {
    m_bp_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      // Type A: fill in m or n
      const typeA = () => {
        const data = pick(CLASA1_WORDS.mBP, rng);
        return createMCQ("ortografie_c1", "m_bp_c1",
          `Completează corect: '${data.blank}'\n(Regulă: ${data.rule})`,
          "m", ["n", "b", "p"], rng);
      };

      // Type B: which word follows the m before b/p rule?
      const typeB = () => {
        const correct = pick(CLASA1_WORDS.mBP, rng).word;
        const incorrectWords = ["ânbarcă", "tânplar", "cânp", "bunbă", "înbracă", "înpinge", "conpot", "zinbru", "sinplu", "înpreună"];
        const wrong = shuffle(incorrectWords, rng).slice(0, 3);
        return createMCQ("ortografie_c1", "m_bp_c1",
          `Care cuvânt este scris CORECT (respectă regula m înainte de b/p)?`,
          correct, wrong, rng);
      };

      // Type C: find the error (n used instead of m before b/p)
      const errorData = [
        { gresit: "cânp", corect: "câmp", letter: "n", should: "m" },
        { gresit: "bonbon", corect: "bombon", letter: "n", should: "m" },
        { gresit: "unbrelă", corect: "umbrelă", letter: "n", should: "m" },
        { gresit: "conpot", corect: "compot", letter: "n", should: "m" },
        { gresit: "bonbă", corect: "bombă", letter: "n", should: "m" },
        { gresit: "tânplar", corect: "tâmplar", letter: "n", should: "m" },
        { gresit: "înbracă", corect: "îmbracă", letter: "n", should: "m" },
        { gresit: "înpinge", corect: "împinge", letter: "n", should: "m" },
        { gresit: "înpreună", corect: "împreună", letter: "n", should: "m" },
        { gresit: "conplot", corect: "complot", letter: "n", should: "m" },
        { gresit: "sinplu", corect: "simplu", letter: "n", should: "m" },
        { gresit: "zinbru", corect: "zimbru", letter: "n", should: "m" },
      ];
      const typeC = () => {
        const data = pick(errorData, rng);
        const correct = `'${data.gresit}' → trebuie '${data.corect}'`;
        const otherErrors = errorData.filter((d) => d.gresit !== data.gresit);
        const wrong = [
          `'${data.corect}' → trebuie '${data.gresit}'`,
          `Nu există nicio greșeală.`,
          `'${pick(otherErrors, rng).gresit}' → trebuie '${pick(otherErrors, rng).corect}'`,
        ];
        return createMCQ("ortografie_c1", "m_bp_c1",
          `Care cuvânt are o GREȘEALĂ și cum se corectează?`,
          correct, wrong, rng);
      };

      // Type D: why is it "m" here?
      const typeD = () => {
        const data = pick(CLASA1_WORDS.mBP, rng);
        const nextLetter = data.word[data.word.indexOf("m") + 1];
        const correct = nextLetter === "b" ? "Pentru că urmează litera 'b'." : "Pentru că urmează litera 'p'.";
        const wrong = [
          "Pentru că este la sfârșitul cuvântului.",
          nextLetter === "b" ? "Pentru că urmează litera 'p'." : "Pentru că urmează litera 'b'.",
          "Nu există o regulă specială.",
        ];
        return createMCQ("ortografie_c1", "m_bp_c1",
          `De ce scriem 'm' (nu 'n') în cuvântul '${data.word}'?`,
          correct, wrong, rng);
      };

      // Type E: complete the word with the correct letter
      const typeE = () => {
        const data = pick(CLASA1_WORDS.mBP, rng);
        const correct = data.word;
        const withN = data.word.replace("m", "n");
        const withB = data.word.replace("m", "b");
        const withP = data.word.replace(/[bp](?=[^bp]*$)/, (match) => match === "b" ? "p" : "b");
        return createMCQ("ortografie_c1", "m_bp_c1",
          `Completează cuvântul corect: '${data.blank}'`,
          correct, [withN, withB, withP], rng);
      };

      const types = [typeA, typeA, typeB, typeC, typeD, typeE];
      for (let i = 0; i < 30; i++) {
        q.push(pick(types, rng)());
      }
      return q;
    },

    a_i_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const aWords = CLASA1_WORDS.aCircumflex.filter((d) => d.letter === "â");
      const iWords = CLASA1_WORDS.aCircumflex.filter((d) => d.letter === "î");

      // Type A: fill â or î
      const typeA = () => {
        const data = pick(CLASA1_WORDS.aCircumflex, rng);
        return createMCQ("ortografie_c1", "a_i_c1",
          data.position === "început"
            ? `Ce literă scrii la ÎNCEPUTUL cuvântului '${data.displayWord}'?`
            : `Ce literă scrii în INTERIORUL cuvântului '${data.displayWord}'?`,
          data.letter, ["â", "î", "a", "i"].filter((l) => l !== data.letter), rng);
      };

      // Type B: which word is correctly written?
      const typeB = () => {
        const data = pick(CLASA1_WORDS.aCircumflex, rng);
        const correct = data.word;
        const wrongLetter = data.letter === "â" ? "î" : "â";
        const withWrong = data.word.replace(data.letter === "â" ? /â/g : /î/, wrongLetter);
        const withA = data.word.replace(data.letter === "â" ? /â/g : /î/, "a");
        const withI = data.word.replace(data.letter === "â" ? /â/g : /î/, "i");
        return createMCQ("ortografie_c1", "a_i_c1",
          `Care variantă este CORECTĂ?`,
          correct, [withWrong, withA, withI], rng);
      };

      // Type C: when do we use â (in the middle of a word)?
      const typeC = () => {
        return createMCQ("ortografie_c1", "a_i_c1",
          `Litera 'â' se folosește:`,
          "în interiorul cuvintelor",
          ["la începutul cuvintelor", "la sfârșitul cuvintelor", "oriunde în cuvânt"],
          rng);
      };

      // Type D: when do we use î (beginning/end of word)?
      const typeD = () => {
        const subtype = rng() > 0.5;
        return createMCQ("ortografie_c1", "a_i_c1",
          subtype
            ? `Litera 'î' se folosește:`
            : `Care literă se scrie la ÎNCEPUTUL unui cuvânt: 'â' sau 'î'?`,
          subtype ? "la începutul și sfârșitul cuvintelor" : "î",
          subtype
            ? ["în interiorul cuvintelor", "la mijlocul cuvintelor", "oriunde"]
            : ["â", "a", "i"],
          rng);
      };

      // Type E: find the mistake in spelling
      const mistakeData = [
        { gresit: "paine", corect: "pâine", reason: "â interior" },
        { gresit: "caine", corect: "câine", reason: "â interior" },
        { gresit: "âncep", corect: "încep", reason: "î la început" },
        { gresit: "ânalt", corect: "înalt", reason: "î la început" },
        { gresit: "mâine", corect: "mâine", reason: "corect" },
        { gresit: "începe", corect: "începe", reason: "corect" },
      ];
      const actualMistakes = mistakeData.filter((d) => d.gresit !== d.corect);
      const typeE = () => {
        const data = pick(actualMistakes, rng);
        const correct = `'${data.gresit}' este greșit, corect este '${data.corect}'.`;
        const otherMistakes = actualMistakes.filter((d) => d.gresit !== data.gresit);
        const other1 = pick(otherMistakes, rng);
        const wrong = [
          `'${data.corect}' este greșit, corect este '${data.gresit}'.`,
          `Nu există greșeală.`,
          `'${other1.gresit}' este corect scris.`,
        ];
        return createMCQ("ortografie_c1", "a_i_c1",
          `Care afirmație despre scrierea cuvântului este CORECTĂ?`,
          correct, wrong, rng);
      };

      const types = [typeA, typeA, typeB, typeC, typeD, typeE];
      for (let i = 0; i < 30; i++) {
        q.push(pick(types, rng)());
      }
      return q;
    },

    cratima_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      // Type A: which is correctly written with hyphen?
      const typeA = () => {
        const data = pick(CLASA1_WORDS.cratima, rng);
        return createMCQ("ortografie_c1", "cratima_c1",
          "Care formă este scrisă CORECT cu cratimă?",
          data.correct, data.wrong, rng);
      };

      // Type B: which expression needs a hyphen?
      const needsHyphen = [
        { needs: "s-a", noHyphen: "sa", context: "S-a dus la magazin." },
        { needs: "m-am", noHyphen: "mam", context: "M-am trezit devreme." },
        { needs: "l-am", noHyphen: "lam", context: "L-am văzut ieri." },
        { needs: "n-am", noHyphen: "nam", context: "N-am găsit cheia." },
        { needs: "i-am", noHyphen: "iam", context: "I-am dat cartea." },
        { needs: "ne-am", noHyphen: "neam", context: "Ne-am jucat în parc." },
        { needs: "mi-a", noHyphen: "mia", context: "Mi-a spus un secret." },
        { needs: "s-au", noHyphen: "sau", context: "S-au dus acasă." },
        { needs: "v-am", noHyphen: "vam", context: "V-am adus un cadou." },
        { needs: "l-a", noHyphen: "la", context: "L-a văzut în parc." },
        { needs: "m-a", noHyphen: "ma", context: "M-a chemat mama." },
        { needs: "nu-i", noHyphen: "nui", context: "Nu-i nimeni acasă." },
        { needs: "s-ar", noHyphen: "sar", context: "S-ar putea să vină." },
        { needs: "într-o", noHyphen: "intro", context: "A pus totul într-o cutie." },
        { needs: "printr-un", noHyphen: "printrun", context: "A trecut printr-un tunel." },
      ];
      const typeB = () => {
        const data = pick(needsHyphen, rng);
        const allNeeds = needsHyphen.filter((d) => d.needs !== data.needs).map((d) => d.noHyphen);
        const wrong = shuffle(allNeeds, rng).slice(0, 3);
        return createMCQ("ortografie_c1", "cratima_c1",
          `Care expresie are NEVOIE de cratimă în propoziția: '${data.context.replace(data.needs, "___")}'?`,
          data.needs, wrong, rng);
      };

      // Type C: find the error in hyphen usage
      const cratimaErrors = [
        { gresit: "sa dus", corect: "s-a dus" },
        { gresit: "mam uitat", corect: "m-am uitat" },
        { gresit: "lam văzut", corect: "l-am văzut" },
        { gresit: "nam timp", corect: "n-am timp" },
        { gresit: "iam spus", corect: "i-am spus" },
        { gresit: "neam jucat", corect: "ne-am jucat" },
        { gresit: "mia dat", corect: "mi-a dat" },
        { gresit: "sau dus", corect: "s-au dus" },
        { gresit: "vam spus", corect: "v-am spus" },
        { gresit: "la văzut", corect: "l-a văzut" },
        { gresit: "ma chemat", corect: "m-a chemat" },
        { gresit: "sar bucura", corect: "s-ar bucura" },
        { gresit: "nui acasă", corect: "nu-i acasă" },
        { gresit: "intro zi", corect: "într-o zi" },
        { gresit: "printrun tunel", corect: "printr-un tunel" },
      ];
      const typeC = () => {
        const data = pick(cratimaErrors, rng);
        const correct = `'${data.gresit}' → trebuie '${data.corect}'`;
        const otherErrors = cratimaErrors.filter((d) => d.gresit !== data.gresit);
        const wrong = [
          `'${data.corect}' → trebuie '${data.gresit}'`,
          "Nu există nicio greșeală.",
          `'${pick(otherErrors, rng).gresit}' → trebuie '${pick(otherErrors, rng).corect}'`,
        ];
        return createMCQ("ortografie_c1", "cratima_c1",
          `Care greșeală de cratimă există și cum se corectează?`,
          correct, wrong, rng);
      };

      // Type D: where does the hyphen go?
      const hyphPlacement = [
        { phrase: "s a dus", correct: "s-a dus", wrong: ["sa-dus", "s-adus", "sa dus"] },
        { phrase: "m am trezit", correct: "m-am trezit", wrong: ["ma-m trezit", "m-amtrezit", "mam trezit"] },
        { phrase: "l am văzut", correct: "l-am văzut", wrong: ["la-m văzut", "l-amvăzut", "lam văzut"] },
        { phrase: "n am mers", correct: "n-am mers", wrong: ["na-m mers", "n-ammers", "nam mers"] },
        { phrase: "i am dat", correct: "i-am dat", wrong: ["ia-m dat", "i-amdat", "iam dat"] },
        { phrase: "ne am jucat", correct: "ne-am jucat", wrong: ["nea-m jucat", "ne-amjucat", "neam jucat"] },
        { phrase: "mi a spus", correct: "mi-a spus", wrong: ["mia-spus", "mi-aspus", "mia spus"] },
        { phrase: "s au dus", correct: "s-au dus", wrong: ["sa-u dus", "s-audus", "sau dus"] },
        { phrase: "nu i acasă", correct: "nu-i acasă", wrong: ["nui-acasă", "nu-iacasă", "nui acasă"] },
        { phrase: "m a chemat", correct: "m-a chemat", wrong: ["ma-chemat", "m-achemat", "ma chemat"] },
        { phrase: "l a văzut", correct: "l-a văzut", wrong: ["la-văzut", "l-avăzut", "la văzut"] },
        { phrase: "v am spus", correct: "v-am spus", wrong: ["va-m spus", "v-amspus", "vam spus"] },
        { phrase: "într o casă", correct: "într-o casă", wrong: ["întro-casă", "într-ocasă", "intro casă"] },
      ];
      const typeD = () => {
        const data = pick(hyphPlacement, rng);
        return createMCQ("ortografie_c1", "cratima_c1",
          `Unde se pune cratima în expresia: '${data.phrase}'?`,
          data.correct, data.wrong, rng);
      };

      const types = [typeA, typeA, typeB, typeC, typeD];
      for (let i = 0; i < 30; i++) {
        q.push(pick(types, rng)());
      }
      return q;
    },

    scrierea_corecta_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      const scriereData = [
        { correct: "Ana merge la școală.", wrong: ["ana merge la scoala.", "Ana merge la şcoalā.", "ana Merge la Scoala."] },
        { correct: "Câinele latră tare.", wrong: ["Cainele latra tare.", "câinele latră tare.", "Câinele Latră tare."] },
        { correct: "Primăvara, florile înfloresc.", wrong: ["Primavara, florile inforesc.", "primăvara, florile înfloresc.", "Primăvara florile înfloresc"] },
        { correct: "Bunica face plăcinte.", wrong: ["Bunica face placinte.", "bunica face Plăcinte.", "Bunicǎ face plăcinte."] },
        { correct: "Ion citește o carte.", wrong: ["Ion citeste o carte.", "Ion Citeste o Carte.", "ion citește o carte."] },
        { correct: "Pisica doarme în coș.", wrong: ["Pisica doarme in cos.", "pisica Doarme în coș.", "Pisica doarme în cos."] },
        { correct: "Maria are un ghiozdan.", wrong: ["Maria are un ghiozcan.", "Maria are un ghiosdan.", "maria are un ghiozdan."] },
        { correct: "Soarele strălucește azi.", wrong: ["Soarele straluceste azi.", "soarele strălucește azi.", "Soarele Străluceste azi."] },
        { correct: "Rândunica zboară sus.", wrong: ["Randunica zboara sus.", "rândunica Zboară sus.", "Rândunica zbora sus."] },
        { correct: "Copiii se joacă afară.", wrong: ["Copii se joaca afara.", "copiii se joacă afară.", "Copiii Se Joacă Afară."] },
        { correct: "Mihai mănâncă o prună.", wrong: ["Mihai mananca o pruna.", "mihai mănâncă o prună.", "Mihai Mananca o Pruna."] },
        { correct: "Florile din grădină sunt roșii.", wrong: ["Florile din gradina sunt rosii.", "florile din grădină sunt roșii.", "Florile Din Gradina Sunt Rosii."] },
        { correct: "Mama pregătește cina.", wrong: ["mama pregateste cina.", "Mama Pregateste Cina.", "Mama pregăteśte cina."] },
        { correct: "Pâinea este caldă.", wrong: ["Painea este calda.", "pâinea este caldă.", "Pâinea este calda."] },
        { correct: "Elevii cântă un cântec.", wrong: ["Elevii canta un cantec.", "elevii cântă un cântec.", "Elevii Cântă Un Cântec."] },
        { correct: "Câmpul este acoperit de flori.", wrong: ["Campul este acoperit de flori.", "câmpul este acoperit de flori.", "Câmpul Este Acoperit De Flori."] },
        { correct: "Iarna ninge și îngheață.", wrong: ["Iarna ninge si ingheata.", "iarna ninge și îngheață.", "Iarna Ninge Si Ingheata."] },
        { correct: "Bunicul îngrijește grădina.", wrong: ["Bunicul ingrijeste gradina.", "bunicul îngrijește grădina.", "Bunicul Ingrijeste Gradina."] },
        { correct: "Rața înoată pe lac.", wrong: ["Rata inoata pe lac.", "rața înoată pe lac.", "Rata inoată pe lac."] },
        { correct: "Șarpele se târăște pe piatră.", wrong: ["Sarpele se tarastei pe piatra.", "șarpele se târăște pe piatră.", "Sarpele se taraste pe piatra."] },
      ];

      // misspelled individual words pool
      const misspelledWords = [
        { gresit: "scoala", corect: "școală" },
        { gresit: "caine", corect: "câine" },
        { gresit: "primavara", corect: "primăvară" },
        { gresit: "inforesc", corect: "înfloresc" },
        { gresit: "placinta", corect: "plăcintă" },
        { gresit: "citeste", corect: "citește" },
        { gresit: "straluceste", corect: "strălucește" },
        { gresit: "randunica", corect: "rândunica" },
        { gresit: "joaca", corect: "joacă" },
        { gresit: "afara", corect: "afară" },
        { gresit: "mananca", corect: "mănâncă" },
        { gresit: "gradina", corect: "grădină" },
        { gresit: "rosii", corect: "roșii" },
        { gresit: "pregateste", corect: "pregătește" },
        { gresit: "painea", corect: "pâinea" },
        { gresit: "canta", corect: "cântă" },
        { gresit: "campul", corect: "câmpul" },
        { gresit: "ingheata", corect: "îngheață" },
        { gresit: "ingrijeste", corect: "îngrijește" },
        { gresit: "inoata", corect: "înoată" },
        { gresit: "taraste", corect: "târăște" },
        { gresit: "piatra", corect: "piatră" },
        { gresit: "paine", corect: "pâine" },
        { gresit: "frumoasa", corect: "frumoasă" },
        { gresit: "vara", corect: "vară" },
      ];

      // Type A: which sentence is written correctly?
      const typeA = () => {
        const data = pick(scriereData, rng);
        return createMCQ("ortografie_c1", "scrierea_corecta_c1",
          "Care propoziție este scrisă CORECT?",
          data.correct, data.wrong, rng);
      };

      // Type B: find the misspelled word
      const typeB = () => {
        const data = pick(misspelledWords, rng);
        const others = misspelledWords.filter((d) => d.gresit !== data.gresit);
        const wrong = shuffle(others, rng).slice(0, 3).map((d) => d.corect);
        return createMCQ("ortografie_c1", "scrierea_corecta_c1",
          `Care cuvânt este scris GREȘIT?`,
          data.gresit,
          wrong,
          rng);
      };

      // Type C: choose correct form
      const typeC = () => {
        const data = pick(misspelledWords, rng);
        const others = misspelledWords.filter((d) => d.corect !== data.corect);
        const wrong = shuffle(others, rng).slice(0, 3).map((d) => d.gresit);
        return createMCQ("ortografie_c1", "scrierea_corecta_c1",
          `Care este forma CORECTĂ a cuvântului '${data.gresit}'?`,
          data.corect, wrong, rng);
      };

      // Type D: what is wrong with this word?
      const spellingIssues = [
        { word: "scoala", issue: "Lipsesc literele speciale: ș, ă.", wrong1: "Litera mare lipsește.", wrong2: "Prea multe litere.", wrong3: "Este un cuvânt corect." },
        { word: "caine", issue: "Lipsește 'â': câine.", wrong1: "Prea puține litere.", wrong2: "Litera mare lipsește.", wrong3: "Este corect scris." },
        { word: "primavara", issue: "Lipsesc literele speciale: ă.", wrong1: "Prea multe litere.", wrong2: "Litera mare lipsește.", wrong3: "Este corect scris." },
        { word: "joaca", issue: "Lipsește 'ă': joacă.", wrong1: "Litera 'j' este greșită.", wrong2: "Prea multe litere.", wrong3: "Este corect scris." },
        { word: "mananca", issue: "Lipsesc literele speciale: ă, â.", wrong1: "Prea puține litere.", wrong2: "Litera mare lipsește.", wrong3: "Este corect scris." },
        { word: "gradina", issue: "Lipsește litera 'ă': grădină.", wrong1: "Prea multe litere.", wrong2: "Lipsește litera mare.", wrong3: "Este corect scris." },
        { word: "campul", issue: "Lipsește 'â': câmpul.", wrong1: "Prea puține litere.", wrong2: "Litera 'c' este greșită.", wrong3: "Este corect scris." },
        { word: "ingheata", issue: "Lipsesc literele speciale: î, ă.", wrong1: "Prea multe litere.", wrong2: "Litera mare lipsește.", wrong3: "Este corect scris." },
        { word: "paine", issue: "Lipsește 'â': pâine.", wrong1: "Lipsește litera 'e'.", wrong2: "Litera mare lipsește.", wrong3: "Este corect scris." },
        { word: "rosii", issue: "Lipsesc literele speciale: ș.", wrong1: "Prea multe litere.", wrong2: "Litera 'r' este greșită.", wrong3: "Este corect scris." },
      ];
      const typeD = () => {
        const data = pick(spellingIssues, rng);
        return createMCQ("ortografie_c1", "scrierea_corecta_c1",
          `Ce este greșit la cuvântul '${data.word}'?`,
          data.issue, [data.wrong1, data.wrong2, data.wrong3], rng);
      };

      // Type E: which sentence has a spelling error?
      const sentenceErrors = [
        { gresit: "Cainele latră tare.", corect: "Câinele latră tare.", others: ["Ana merge la școală.", "Ion citește o carte."] },
        { gresit: "Pisica doarme in coș.", corect: "Pisica doarme în coș.", others: ["Bunica face plăcinte.", "Soarele strălucește azi."] },
        { gresit: "Copii se joacă afara.", corect: "Copiii se joacă afară.", others: ["Maria are un ghiozdan.", "Rândunica zboară sus."] },
        { gresit: "soarele straluceste azi.", corect: "Soarele strălucește azi.", others: ["Ion citește o carte.", "Pisica doarme în coș."] },
        { gresit: "Mihai mananca o pruna.", corect: "Mihai mănâncă o prună.", others: ["Ana merge la școală.", "Bunica face plăcinte."] },
        { gresit: "Florile din gradina sunt rosii.", corect: "Florile din grădină sunt roșii.", others: ["Soarele strălucește azi.", "Ion citește o carte."] },
        { gresit: "Painea este calda.", corect: "Pâinea este caldă.", others: ["Rândunica zboară sus.", "Maria are un ghiozdan."] },
        { gresit: "Iarna ninge si ingheata.", corect: "Iarna ninge și îngheață.", others: ["Copiii se joacă afară.", "Pisica doarme în coș."] },
        { gresit: "Rata inoata pe lac.", corect: "Rața înoată pe lac.", others: ["Ana merge la școală.", "Bunica face plăcinte."] },
        { gresit: "Campul este plin de flori.", corect: "Câmpul este plin de flori.", others: ["Soarele strălucește azi.", "Maria are un ghiozdan."] },
      ];
      const typeE = () => {
        const data = pick(sentenceErrors, rng);
        return createMCQ("ortografie_c1", "scrierea_corecta_c1",
          "Care propoziție are o GREȘEALĂ de scriere?",
          data.gresit, [data.corect, ...data.others], rng);
      };

      const types = [typeA, typeA, typeB, typeC, typeD, typeE];
      for (let i = 0; i < 30; i++) {
        q.push(pick(types, rng)());
      }
      return q;
    },
  },

  // ── LECTURĂ ──────────────────────────────────────────────────────────────
  lectura_c1: {
    intelegere_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      // Extended text bank for varied question types
      const texteExtinse = [
        ...CLASA1_WORDS.texte,
        {
          text: "Mihai merge la piață cu mama. Ei cumpără mere roșii și portocale. Mihai mănâncă o portocală pe drum.",
          questions: [
            { q: "Cu cine merge Mihai la piață?", a: "cu mama", wrong: ["cu tata", "cu bunica", "singur"] },
            { q: "Ce fructe cumpără ei?", a: "mere și portocale", wrong: ["banane și pere", "struguri și prune", "cireșe și vișine"] },
            { q: "Ce mănâncă Mihai pe drum?", a: "o portocală", wrong: ["un măr", "o pară", "o banană"] },
          ],
        },
        {
          text: "Elena are o păpușă frumoasă. Păpușa are rochie albastră. Elena se joacă cu ea în fiecare zi.",
          questions: [
            { q: "Ce are Elena?", a: "o păpușă frumoasă", wrong: ["o minge", "o carte", "un câine"] },
            { q: "Ce culoare are rochița păpușii?", a: "albastră", wrong: ["roșie", "verde", "galbenă"] },
            { q: "Când se joacă Elena cu păpușa?", a: "în fiecare zi", wrong: ["numai duminica", "numai seara", "numai la școală"] },
          ],
        },
        {
          text: "Toamna, frunzele cad din pomi. Ele sunt galbene, roșii și portocalii. Copiii le adună și fac buchete.",
          questions: [
            { q: "Când cad frunzele din pomi?", a: "toamna", wrong: ["primăvara", "vara", "iarna"] },
            { q: "Ce culori au frunzele?", a: "galbene, roșii și portocalii", wrong: ["verzi și albastre", "albe și negre", "roz și mov"] },
            { q: "Ce fac copiii cu frunzele?", a: "fac buchete", wrong: ["le ard", "le mănâncă", "le aruncă"] },
          ],
        },
      ];

      // Type A: standard comprehension question (who/what)
      const typeA = () => {
        const text = pick(texteExtinse, rng);
        const question = pick(text.questions, rng);
        return createMCQ("lectura_c1", "intelegere_c1",
          `Text: "${text.text}"\n\n${question.q}`,
          question.a, question.wrong, rng);
      };

      // Type B: true or false
      const adevFals = [
        { text: "Ana are o pisică. Pisica se numește Miau. Miau bea lapte în fiecare dimineață.", afirmatie: "Pisica Anei se numește Miau.", adevarat: true },
        { text: "Ion merge la școală. El are un ghiozdan albastru.", afirmatie: "Ghiozdanul lui Ion este roșu.", adevarat: false },
        { text: "Maria și Andrei sunt frați. Au un câine pe nume Rex.", afirmatie: "Rex este câinele Mariei și al lui Andrei.", adevarat: true },
        { text: "Primăvara, florile înfloresc. Rândunica se întoarce din țările calde.", afirmatie: "Rândunica pleacă în țările calde primăvara.", adevarat: false },
        { text: "Bunica face plăcinte bune. Ea pune mere și scorțișoară.", afirmatie: "Bunica pune ciocolată în plăcinte.", adevarat: false },
        { text: "Toamna, frunzele cad din pomi. Copiii fac buchete.", afirmatie: "Copiii adună frunzele toamna.", adevarat: true },
      ];
      const typeB = () => {
        const data = pick(adevFals, rng);
        const correct = data.adevarat ? "Adevărat" : "Fals";
        return createMCQ("lectura_c1", "intelegere_c1",
          `Text: "${data.text}"\n\nAdevărat sau Fals: '${data.afirmatie}'?`,
          correct, [data.adevarat ? "Fals" : "Adevărat", "Nu se poate ști.", "Textul nu spune."], rng);
      };

      // Type C: which statement matches the text?
      const typeC = () => {
        const text = pick(texteExtinse, rng);
        const correctQ = pick(text.questions, rng);
        const correct = correctQ.a;
        const wrong = correctQ.wrong;
        return createMCQ("lectura_c1", "intelegere_c1",
          `Text: "${text.text}"\n\nCare afirmație corespunde textului?`,
          correct, wrong, rng);
      };

      // Type D: what happened first/last?
      const ordineLucruri = [
        {
          text: "Ion s-a sculat, s-a spălat, a mâncat și a mers la școală.",
          first: "s-a sculat", last: "a mers la școală",
          notFirst: ["s-a spălat", "a mâncat", "a mers la școală"],
          notLast: ["s-a sculat", "s-a spălat", "a mâncat"],
        },
        {
          text: "Ana a găsit o floare, a mirosit-o, a pus-o în vază și a udat-o.",
          first: "a găsit o floare", last: "a udat-o",
          notFirst: ["a mirosit-o", "a pus-o în vază", "a udat-o"],
          notLast: ["a găsit o floare", "a mirosit-o", "a pus-o în vază"],
        },
      ];
      const typeD = () => {
        const data = pick(ordineLucruri, rng);
        const isFirst = rng() > 0.5;
        return createMCQ("lectura_c1", "intelegere_c1",
          `Text: "${data.text}"\n\nCe s-a întâmplat ${isFirst ? "PRIMUL" : "ULTIMUL"}?`,
          isFirst ? data.first : data.last,
          isFirst ? data.notFirst : data.notLast,
          rng);
      };

      // Type E: where/when question
      const typeE = () => {
        const text = pick(texteExtinse, rng);
        const question = pick(text.questions, rng);
        return createMCQ("lectura_c1", "intelegere_c1",
          `Citește cu atenție: "${text.text}"\n\n${question.q}`,
          question.a, question.wrong, rng);
      };

      const types = [typeA, typeA, typeB, typeC, typeD, typeE];
      for (let i = 0; i < 30; i++) {
        q.push(pick(types, rng)());
      }
      return q;
    },

    personaje_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      const personajeExtinse = [
        {
          text: "Ana are o pisică. Pisica se numește Miau. Miau este albă cu pete negre.",
          personaj: "Ana",
          actiune: "are o pisică",
          stare: "fericită (iubește pisica)",
          trasatura: "iubitoare de animale",
          wrong_personaj: ["Ion", "Maria", "Andrei"],
          wrong_actiune: ["citește o carte", "merge la piață", "doarme"],
          wrong_stare: ["tristă", "supărată", "plictisită"],
          wrong_trasatura: ["leneșă", "rea", "nepăsătoare"],
        },
        {
          text: "Ion merge la școală. El are un ghiozdan albastru. Ion este un elev harnic.",
          personaj: "Ion",
          actiune: "merge la școală",
          stare: "harnic și serios",
          trasatura: "harnic",
          wrong_personaj: ["Ana", "Maria", "Mihai"],
          wrong_actiune: ["se joacă în parc", "doarme", "mănâncă"],
          wrong_stare: ["leneș", "trist", "bolnav"],
          wrong_trasatura: ["leneș", "neatent", "nepăsător"],
        },
        {
          text: "Bunica povestește povești. Nepoții ascultă cu atenție. Bunica știe multe povești.",
          personaj: "bunica",
          actiune: "povestește povești",
          stare: "mulțumită și dragostoasă",
          trasatura: "înțeleaptă și bună",
          wrong_personaj: ["mama", "tata", "fratele"],
          wrong_actiune: ["gătește", "doarme", "plânge"],
          wrong_stare: ["supărată", "tristă", "obosită"],
          wrong_trasatura: ["rea", "neștiutoare", "nepăsătoare"],
        },
        {
          text: "Rex este un câine jucăuș. El aleargă prin grădină. Toți copiii îl iubesc pe Rex.",
          personaj: "Rex",
          actiune: "aleargă prin grădină",
          stare: "vesel și jucăuș",
          trasatura: "jucăuș și iubit",
          wrong_personaj: ["Miau", "Pufi", "Azorel"],
          wrong_actiune: ["doarme în casă", "mănâncă", "latră la toți"],
          wrong_stare: ["trist și bolnav", "speriat", "supărat"],
          wrong_trasatura: ["rău", "fricos", "leneș"],
        },
        {
          text: "Rândunica s-a întors din țările calde. Ea și-a făcut cuib sub streașină. Rândunica cântă frumos.",
          personaj: "rândunica",
          actiune: "și-a făcut cuib",
          stare: "activă și veselă",
          trasatura: "harnică și cântăreață",
          wrong_personaj: ["vrabia", "cioara", "uliul"],
          wrong_actiune: ["a plecat din țară", "doarme în cuib", "nu se întoarce"],
          wrong_stare: ["tristă și obosită", "speriată", "bolnavă"],
          wrong_trasatura: ["leneșă", "zgomotoasă", "fricoasă"],
        },
        {
          text: "Maria citește o carte frumoasă. Ea citește în fiecare zi. Maria iubește cărțile.",
          personaj: "Maria",
          actiune: "citește o carte",
          stare: "concentrată și fericită",
          trasatura: "iubitoare de lectură",
          wrong_personaj: ["Ana", "Ion", "Ioana"],
          wrong_actiune: ["se joacă afară", "doarme", "uită cartea"],
          wrong_stare: ["plictisită", "tristă", "supărată"],
          wrong_trasatura: ["leneșă la citit", "nepăsătoare", "neatentă"],
        },
      ];

      // Type A: who is the main character?
      const typeA = () => {
        const data = pick(personajeExtinse, rng);
        return createMCQ("lectura_c1", "personaje_c1",
          `Text: "${data.text}"\n\nCine este personajul PRINCIPAL al textului?`,
          data.personaj, data.wrong_personaj, rng);
      };

      // Type B: what did the character do?
      const typeB = () => {
        const data = pick(personajeExtinse, rng);
        return createMCQ("lectura_c1", "personaje_c1",
          `Text: "${data.text}"\n\nCe face ${data.personaj} în text?`,
          data.actiune, data.wrong_actiune, rng);
      };

      // Type C: how does the character feel?
      const typeC = () => {
        const data = pick(personajeExtinse, rng);
        return createMCQ("lectura_c1", "personaje_c1",
          `Text: "${data.text}"\n\nCum este ${data.personaj} în text?`,
          data.stare, data.wrong_stare, rng);
      };

      // Type D: which character said/did X?
      const replicaData = [
        { text: "Ana spune: 'Pisica mea se numește Miau!' Toți copiii o admiră.", spus: "Pisica mea se numește Miau!", personaj: "Ana", wrong: ["Ion", "Maria", "Andrei"] },
        { text: "Ion zice: 'Am ghiozdan nou!' El este foarte fericit.", spus: "Am ghiozdan nou!", personaj: "Ion", wrong: ["Ana", "Maria", "Mihai"] },
        { text: "Bunica spune nepoților: 'Ascultați, vă povestesc ceva!' Toți se adună.", spus: "Ascultați, vă povestesc ceva!", personaj: "bunica", wrong: ["mama", "tata", "Ana"] },
      ];
      const typeD = () => {
        const data = pick(replicaData, rng);
        return createMCQ("lectura_c1", "personaje_c1",
          `Text: "${data.text}"\n\nCine a spus: '${data.spus}'?`,
          data.personaj, data.wrong, rng);
      };

      // Type E: what is the character's trait?
      const typeE = () => {
        const data = pick(personajeExtinse, rng);
        return createMCQ("lectura_c1", "personaje_c1",
          `Text: "${data.text}"\n\nCum ai putea caracteriza pe ${data.personaj}?`,
          data.trasatura, data.wrong_trasatura, rng);
      };

      const types = [typeA, typeA, typeB, typeC, typeD, typeE];
      for (let i = 0; i < 30; i++) {
        q.push(pick(types, rng)());
      }
      return q;
    },

    ideea_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];

      const ideiExtinse = [
        {
          text: "Ana are o pisică albă. Pisica se numește Miau. Miau bea lapte în fiecare dimineață.",
          idee: "Pisica Anei se numește Miau și bea lapte.",
          titlu: "Pisica Anei",
          rezumat: "Ana are o pisică albă pe nume Miau.",
          morala: "Animalele de companie au nevoie de îngrijire.",
          wrong_idee: ["Ana merge la școală.", "Pisica este neagră.", "Miau latră tare."],
          wrong_titlu: ["Câinele Anei", "Ana la școală", "Pisica neagră"],
          wrong_rezumat: ["Ana nu are animale.", "Pisica Anei se numește Rex.", "Miau bea apă."],
          wrong_morala: ["Pisicile sunt rele.", "Nu trebuie să avem animale.", "Laptele e pentru oameni."],
        },
        {
          text: "Ion merge la școală cu ghiozdanul albastru. El are cărți și caiete. Ion este un elev bun.",
          idee: "Ion este un elev bun care merge la școală.",
          titlu: "Ion la școală",
          rezumat: "Ion este un elev harnic care merge la școală cu ghiozdanul.",
          morala: "Este important să mergi la școală și să înveți.",
          wrong_idee: ["Ion nu merge la școală.", "Ion are un ghiozdan roșu.", "Ion pierde cărțile."],
          wrong_titlu: ["Ion acasă", "Ghiozdanul roșu", "Ion se joacă"],
          wrong_rezumat: ["Ion nu are ghiozdan.", "Ion uită cărțile acasă.", "Ion este un elev leneș."],
          wrong_morala: ["Școala nu este importantă.", "E mai bine să stai acasă.", "Ghiozdanul nu contează."],
        },
        {
          text: "Primăvara, florile înfloresc. Rândunica se întoarce. Copiii se joacă afară.",
          idee: "Primăvara aduce schimbări frumoase în natură.",
          titlu: "Primăvara",
          rezumat: "Primăvara, natura se trezește și copiii se bucură.",
          morala: "Primăvara este un anotimp al bucuriei și al naturii.",
          wrong_idee: ["Iarna este anotimpul preferat.", "Florile mor primăvara.", "Copiii stau în casă."],
          wrong_titlu: ["Iarna grea", "Toamna tristă", "Vara caldă"],
          wrong_rezumat: ["Iarna florile înfloresc.", "Rândunica pleacă primăvara.", "Copiii stau în casă."],
          wrong_morala: ["Natura nu se schimbă.", "Primăvara e tristă.", "Rândunica nu se întoarce."],
        },
        {
          text: "Rex este un câine jucăuș. El aleargă și sare. Rex este prietenul tuturor.",
          idee: "Rex este un câine jucăuș și prietenos.",
          titlu: "Rex, câinele cel bun",
          rezumat: "Rex este un câine vesel care se joacă și îi place de toți.",
          morala: "Câinii pot fi cei mai buni prieteni ai oamenilor.",
          wrong_idee: ["Rex este un câine rău.", "Rex nu se joacă niciodată.", "Rex este o pisică."],
          wrong_titlu: ["Rex cel rău", "Pisica jucăușă", "Rex doarme"],
          wrong_rezumat: ["Rex este un câine trist.", "Rex nu se joacă.", "Rex nu are prieteni."],
          wrong_morala: ["Câinii sunt periculoși.", "Nu trebuie să avem câini.", "Câinii nu se joacă."],
        },
        {
          text: "Bunica face plăcinte cu mere. Toată familia mănâncă. Tuturor le place.",
          idee: "Bunica face plăcinte bune pentru toată familia.",
          titlu: "Plăcintele bunicii",
          rezumat: "Bunica gătește plăcinte cu mere și toată familia se bucură.",
          morala: "Mâncarea gătită cu dragoste aduce familia împreună.",
          wrong_idee: ["Bunica nu știe să gătească.", "Familia nu mănâncă plăcinte.", "Plăcintele sunt reci."],
          wrong_titlu: ["Mama gătește", "Plăcintele cu ciocolată", "Familia la restaurant"],
          wrong_rezumat: ["Bunica cumpără plăcinte.", "Familia nu mănâncă.", "Plăcintele nu sunt bune."],
          wrong_morala: ["Gătitul este plictisitor.", "Plăcintele nu sunt sănătoase.", "Familia nu mănâncă împreună."],
        },
        {
          text: "Maria citește o carte frumoasă. Ea citește în fiecare zi. Maria iubește cărțile.",
          idee: "Maria iubește să citească.",
          titlu: "Maria și cărțile",
          rezumat: "Maria este o fetiță care iubește mult să citească.",
          morala: "Cititul este o activitate frumoasă și folositoare.",
          wrong_idee: ["Maria nu știe să citească.", "Maria urăște cărțile.", "Maria se uită la televizor."],
          wrong_titlu: ["Maria la televizor", "Cartea pierdută", "Maria nu citește"],
          wrong_rezumat: ["Maria nu citește niciodată.", "Maria urăște cărțile.", "Maria citește rar."],
          wrong_morala: ["Cărțile nu sunt folositoare.", "E mai bine să te uiți la televizor.", "Cititul este plictisitor."],
        },
      ];

      // Type A: what is the main idea?
      const typeA = () => {
        const data = pick(ideiExtinse, rng);
        return createMCQ("lectura_c1", "ideea_c1",
          `Text: "${data.text}"\n\nCare este IDEEA PRINCIPALĂ a textului?`,
          data.idee, data.wrong_idee, rng);
      };

      // Type B: what is the best title?
      const typeB = () => {
        const data = pick(ideiExtinse, rng);
        return createMCQ("lectura_c1", "ideea_c1",
          `Text: "${data.text}"\n\nCare este cel mai bun TITLU pentru acest text?`,
          data.titlu, data.wrong_titlu, rng);
      };

      // Type C: what is the story about?
      const typeC = () => {
        const data = pick(ideiExtinse, rng);
        return createMCQ("lectura_c1", "ideea_c1",
          `Text: "${data.text}"\n\nDespre ce este textul?`,
          data.rezumat, data.wrong_rezumat, rng);
      };

      // Type D: which sentence best summarizes the text?
      const typeD = () => {
        const data = pick(ideiExtinse, rng);
        const allIdei = ideiExtinse.filter((d) => d.idee !== data.idee).map((d) => d.idee);
        const wrong = shuffle(allIdei, rng).slice(0, 3);
        return createMCQ("lectura_c1", "ideea_c1",
          `Text: "${data.text}"\n\nCare propoziție REZUMĂ cel mai bine textul?`,
          data.idee, wrong, rng);
      };

      // Type E: what is the lesson/moral?
      const typeE = () => {
        const data = pick(ideiExtinse, rng);
        return createMCQ("lectura_c1", "ideea_c1",
          `Text: "${data.text}"\n\nCe LECȚIE (morală) transmite acest text?`,
          data.morala, data.wrong_morala, rng);
      };

      const types = [typeA, typeA, typeB, typeC, typeD, typeE];
      for (let i = 0; i < 30; i++) {
        q.push(pick(types, rng)());
      }
      return q;
    },
  },
};
