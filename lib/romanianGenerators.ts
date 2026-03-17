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
  ],

  familii: [
    {
      root: "floare",
      family: ["florar", "floricică", "înflorit", "florărie"],
      nonFamily: ["căsuță", "măsuță", "cățeluș"],
    },
    {
      root: "casă",
      family: ["căsuță", "acasă", "casnică", "căsoi"],
      nonFamily: ["floricică", "pomișor", "cățeluș"],
    },
    {
      root: "copil",
      family: ["copilărie", "copilăș", "copilăresc", "copilăros"],
      nonFamily: ["căsuță", "măsuță", "pomișor"],
    },
    {
      root: "carte",
      family: ["cărticică", "cartonat", "librarist"],
      nonFamily: ["măsuță", "pomișor", "cățeluș"],
    },
    {
      root: "pădure",
      family: ["pădurar", "pădureț", "pădurean", "împăduri"],
      nonFamily: ["măsuță", "cărticică", "căsuță"],
    },
    {
      root: "apă",
      family: ["apeduct", "apoasă", "subacvatic", "aducțiune"],
      nonFamily: ["pomișor", "cățeluș", "floricică"],
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

  numeProper: ["Ana", "Ion", "Maria", "Andrei", "România", "București", "Dunărea", "Cluj", "Brașov", "Iași"],
  numeComune: ["casă", "câine", "copil", "masă", "carte", "floare", "pom", "lac", "munte", "râu"],

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
  ],
};

// ─── CLASA I GENERATORS ─────────────────────────────────────────────────────

export const C1_Generators = {
  // ── ALFABET ──────────────────────────────────────────────────────────────
  alfabet_c1: {
    vocale_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const isVocala = rng() > 0.5;
        const correct = isVocala
          ? pick(CLASA1_WORDS.vocale, rng)
          : pick(CLASA1_WORDS.consoane, rng);
        const wrong = isVocala
          ? shuffle(CLASA1_WORDS.consoane, rng).slice(0, 3)
          : shuffle(CLASA1_WORDS.vocale, rng).slice(0, 3);
        q.push(
          createMCQ(
            "alfabet_c1",
            "vocale_c1",
            `Care dintre următoarele litere este o ${isVocala ? "VOCALĂ" : "CONSOANĂ"}?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },

    consoane_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const intrebari = [
        "Care literă este o CONSOANĂ?",
        "Alege consoana din lista de mai jos.",
        "Găsește CONSOANA!",
        "Care dintre litere NU este vocală?",
      ];
      for (let i = 0; i < 30; i++) {
        const correct = pick(CLASA1_WORDS.consoane, rng);
        const wrong = shuffle(CLASA1_WORDS.vocale, rng).slice(0, 3);
        q.push(createMCQ("alfabet_c1", "consoane_c1", pick(intrebari, rng), correct, wrong, rng));
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
      for (let i = 0; i < 30; i++) {
        const [mica, mare] = pick(perechi, rng);
        const isMare = rng() > 0.5;
        const correct = isMare ? mare : mica;
        const otherPairs = shuffle(perechi, rng).filter((p) => p[0] !== mica);
        const wrong = otherPairs.slice(0, 3).map((p) => (isMare ? p[1] : p[0]));
        q.push(
          createMCQ(
            "alfabet_c1",
            "litere_mari_mici_c1",
            isMare
              ? `Care este litera MARE (majusculă) a lui '${mica}'?`
              : `Care este litera MICĂ (minusculă) a lui '${mare}'?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },

    litere_speciale_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const nespeciale = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l", "m", "n", "o", "p", "r", "s", "t", "u", "v", "z"];
      const intrebari = [
        "Care literă este specifică limbii române?",
        "Care dintre aceste litere este o literă specială a limbii române?",
        "Găsește litera care NU există în alte alfabete europene!",
        "Care literă se scrie ALTFEL față de alte limbi?",
      ];
      for (let i = 0; i < 30; i++) {
        const correct = pick(CLASA1_WORDS.litereSpeciale, rng);
        const wrong = shuffle(nespeciale, rng).slice(0, 3);
        q.push(createMCQ("alfabet_c1", "litere_speciale_c1", pick(intrebari, rng), correct, wrong, rng));
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
        const idx = 1 + Math.floor(rng() * (alfabet.length - 2));
        const litera = alfabet[idx];
        const urmatoarea = alfabet[idx + 1];
        const precedenta = alfabet[idx - 1];
        const tipIntrebare = rng() > 0.5 ? "dupa" : "inainte";
        const correct = tipIntrebare === "dupa" ? urmatoarea : precedenta;
        const wrong = shuffle(alfabet.filter((l) => l !== correct && l !== litera), rng).slice(0, 3);
        q.push(
          createMCQ(
            "alfabet_c1",
            "ordine_alfa_c1",
            tipIntrebare === "dupa"
              ? `Ce literă vine DUPĂ '${litera}' în alfabet?`
              : `Ce literă vine ÎNAINTE de '${litera}' în alfabet?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },
  },

  // ── SUNETE ───────────────────────────────────────────────────────────────
  sunete_c1: {
    vocale_consoane_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const cuvinteVocala = ["apă", "ou", "inimă", "elefant", "umbrelă", "ochi", "aur", "urs", "erou", "ac"];
      const cuvinteConsoana = ["casă", "tată", "pom", "rac", "minge", "floare", "barcă", "nor", "sac", "deal"];
      for (let i = 0; i < 30; i++) {
        const incepeVocala = rng() > 0.5;
        const cuvant = incepeVocala ? pick(cuvinteVocala, rng) : pick(cuvinteConsoana, rng);
        const correct = incepeVocala ? "vocală" : "consoană";
        const wrong = [
          incepeVocala ? "consoană" : "vocală",
          "literă specială",
          "literă mare",
        ];
        q.push(
          createMCQ(
            "sunete_c1",
            "vocale_consoane_c1",
            `Cuvântul '${cuvant}' începe cu o vocală sau o consoană?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },

    grupuri_ce_ci_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const tipIntrebare = rng() > 0.5 ? "ce" : "ci";
        const pool = CLASA1_WORDS.ceCi.filter((item) => item.group === tipIntrebare);
        const altPool = CLASA1_WORDS.ceCi.filter((item) => item.group !== tipIntrebare);
        const correct = pick(pool, rng).word;
        const wrong = shuffle(altPool, rng).slice(0, 3).map((item) => item.word);
        q.push(
          createMCQ(
            "sunete_c1",
            "grupuri_ce_ci_c1",
            `Care cuvânt conține grupul de litere '${tipIntrebare}'?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },

    grupuri_ge_gi_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const grupuri = ["ge", "gi"];
      for (let i = 0; i < 30; i++) {
        const tipGrup = pick(grupuri, rng);
        const pool = CLASA1_WORDS.geGi.filter((item) => item.group === tipGrup);
        const altPool = CLASA1_WORDS.geGi.filter((item) => item.group !== tipGrup);
        const correct = pick(pool, rng).word;
        const wrong = shuffle(altPool, rng).slice(0, 3).map((item) => item.word);
        q.push(
          createMCQ(
            "sunete_c1",
            "grupuri_ge_gi_c1",
            `Care cuvânt conține grupul de litere '${tipGrup}'?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },

    grupuri_che_chi_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const grupuri = ["che", "chi", "ghe", "ghi"];
      for (let i = 0; i < 30; i++) {
        const tipGrup = pick(grupuri, rng);
        const pool = CLASA1_WORDS.cheChiGheGhi.filter((item) => item.group === tipGrup);
        const altPool = CLASA1_WORDS.cheChiGheGhi.filter((item) => item.group !== tipGrup);
        if (pool.length === 0) {
          i--;
          continue;
        }
        const correct = pick(pool, rng).word;
        const wrong = shuffle(altPool, rng).slice(0, 3).map((item) => item.word);
        q.push(
          createMCQ(
            "sunete_c1",
            "grupuri_che_chi_c1",
            `Care cuvânt conține grupul de litere '${tipGrup}'?`,
            correct,
            wrong,
            rng
          )
        );
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
      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.silabe, rng);
        const correct = data.silabe;
        const litera = data.word;
        // Plausible wrong splits: cut at position 1 or reversed halves
        const alt1 = litera.length > 2 ? litera[0] + "-" + litera.slice(1) : pick(allSilabe.filter(s => s !== correct), rng);
        const alt2 = litera.length > 3 ? litera.slice(0, Math.ceil(litera.length / 2)) + "-" + litera.slice(Math.ceil(litera.length / 2)) : pick(allSilabe.filter(s => s !== correct), rng);
        const otherSilabe = allSilabe.filter((s) => s !== correct && s !== alt1 && s !== alt2);
        const wrong = [
          alt1 !== correct ? alt1 : pick(otherSilabe, rng),
          alt2 !== correct && alt2 !== alt1 ? alt2 : pick(otherSilabe, rng),
          pick(otherSilabe, rng),
        ];
        q.push(
          createMCQ(
            "silabe_c1",
            "despartire_c1",
            `Cum se desparte în silabe cuvântul '${litera}'?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },

    numarare_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.silabe, rng);
        const correct = String(data.count);
        const allCounts = ["1", "2", "3", "4", "5"];
        const wrong = allCounts.filter((c) => c !== correct);
        q.push(
          createMCQ(
            "silabe_c1",
            "numarare_c1",
            `Câte silabe are cuvântul '${data.word}'?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },

    silaba_accent_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const accentData = [
        { word: "copil", silabe: ["co", "pil"], accent: "pil" },
        { word: "casă", silabe: ["ca", "să"], accent: "ca" },
        { word: "masă", silabe: ["ma", "să"], accent: "ma" },
        { word: "soare", silabe: ["soa", "re"], accent: "soa" },
        { word: "pisică", silabe: ["pi", "si", "că"], accent: "si" },
        { word: "mașină", silabe: ["ma", "și", "nă"], accent: "și" },
        { word: "fluture", silabe: ["flu", "tu", "re"], accent: "flu" },
        { word: "albină", silabe: ["al", "bi", "nă"], accent: "bi" },
        { word: "copac", silabe: ["co", "pac"], accent: "pac" },
        { word: "vapor", silabe: ["va", "por"], accent: "por" },
        { word: "avion", silabe: ["a", "vi", "on"], accent: "on" },
        { word: "floare", silabe: ["floa", "re"], accent: "floa" },
      ];
      const extraSilabe = ["ma", "la", "ra", "ta", "ca", "de", "ne", "le"];
      for (let i = 0; i < 30; i++) {
        const data = pick(accentData, rng);
        const correct = data.accent;
        const wrong = [...data.silabe.filter((s) => s !== correct)];
        while (wrong.length < 3) wrong.push(pick(extraSilabe, rng));
        q.push(
          createMCQ(
            "silabe_c1",
            "silaba_accent_c1",
            `Pe care silabă cade ACCENTUL în cuvântul '${data.word}'?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },
  },

  // ── CUVÂNTUL ─────────────────────────────────────────────────────────────
  cuvantul_c1: {
    sinonime_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.sinonime, rng);
        q.push(
          createMCQ(
            "cuvantul_c1",
            "sinonime_c1",
            `Care cuvânt are un sens ASEMĂNĂTOR cu '${data.word}'?`,
            data.syn,
            data.wrong,
            rng
          )
        );
      }
      return q;
    },

    antonime_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.antonime, rng);
        const correct = data.ant;
        const otherAnts = CLASA1_WORDS.antonime
          .filter((a) => a.ant !== correct && a.word !== data.word)
          .map((a) => a.ant);
        const wrong = shuffle(otherAnts, rng).slice(0, 3);
        q.push(
          createMCQ(
            "cuvantul_c1",
            "antonime_c1",
            `Care cuvânt are sens OPUS lui '${data.word}'?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },

    diminutive_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.diminutive, rng);
        const correct = data.dim;
        const otherDims = CLASA1_WORDS.diminutive
          .filter((d) => d.dim !== correct)
          .map((d) => d.dim);
        const wrong = shuffle(otherDims, rng).slice(0, 3);
        q.push(
          createMCQ(
            "cuvantul_c1",
            "diminutive_c1",
            `Care este diminutivul cuvântului '${data.word}'?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },

    familii_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.familii, rng);
        const correct = pick(data.family, rng);
        const allNonFamily = [
          ...data.nonFamily,
          ...CLASA1_WORDS.familii
            .filter((f) => f.root !== data.root)
            .flatMap((f) => f.nonFamily),
        ];
        const wrong = shuffle(allNonFamily, rng).slice(0, 3);
        q.push(
          createMCQ(
            "cuvantul_c1",
            "familii_c1",
            `Care cuvânt face parte din familia cuvântului '${data.root}'?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },

    singular_plural_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.singularPlural, rng);
        const isToPlural = rng() > 0.5;
        const correct = isToPlural ? data.plur : data.sing;
        const others = CLASA1_WORDS.singularPlural.filter((d) => d.sing !== data.sing);
        const wrong = shuffle(others, rng).slice(0, 3).map((d) => (isToPlural ? d.plur : d.sing));
        q.push(
          createMCQ(
            "cuvantul_c1",
            "singular_plural_c1",
            isToPlural
              ? `Care este PLURALUL cuvântului '${data.sing}'?`
              : `Care este SINGULARUL cuvântului '${data.plur}'?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },
  },

  // ── PROPOZIȚIA ───────────────────────────────────────────────────────────
  propozitia_c1: {
    punctuatie_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const semne = [".", "?", "!"];
      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.propozitii, rng);
        const textFaraSemn = data.text.replace(/[.?!]$/, "");
        const correct = data.semn;
        const wrong = semne.filter((s) => s !== correct).concat([","]);
        q.push(
          createMCQ(
            "propozitia_c1",
            "punctuatie_c1",
            `Ce semn de punctuație se pune la sfârșitul propoziției: '${textFaraSemn}'?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },

    litera_mare_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const isProper = rng() > 0.5;
        const correct = isProper
          ? pick(CLASA1_WORDS.numeProper, rng)
          : pick(CLASA1_WORDS.numeComune, rng);
        const wrong = isProper
          ? shuffle(CLASA1_WORDS.numeComune, rng).slice(0, 3)
          : shuffle(CLASA1_WORDS.numeProper, rng).slice(0, 3);
        q.push(
          createMCQ(
            "propozitia_c1",
            "litera_mare_c1",
            isProper
              ? "Care dintre aceste cuvinte se scrie cu LITERĂ MARE?"
              : "Care dintre aceste cuvinte se scrie cu literă MICĂ?",
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },

    propozitie_tip_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const tipuri = ["enunțiativă", "interogativă", "exclamativă"];
      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.propozitii, rng);
        const correct = data.tip;
        const wrong = tipuri.filter((t) => t !== correct);
        wrong.push("imperativă");
        q.push(
          createMCQ(
            "propozitia_c1",
            "propozitie_tip_c1",
            `Ce fel de propoziție este: '${data.text}'?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },

    ordine_cuvinte_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.ordineData, rng);
        const correct = data.correct;
        const shuffled1 = shuffle(data.words, rng).join(" ") + ".";
        const shuffled2 = [...data.words].reverse().join(" ") + ".";
        const otherCorrects = CLASA1_WORDS.ordineData
          .filter((d) => d.correct !== correct)
          .map((d) => d.correct);
        const wrong = [
          shuffled1 !== correct ? shuffled1 : pick(otherCorrects, rng),
          shuffled2 !== correct ? shuffled2 : pick(otherCorrects, rng),
          pick(otherCorrects, rng),
        ];
        q.push(
          createMCQ(
            "propozitia_c1",
            "ordine_cuvinte_c1",
            `Aranjează cuvintele în ordine corectă: '${data.words.join(" / ")}'`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },
  },

  // ── ORTOGRAFIE ───────────────────────────────────────────────────────────
  ortografie_c1: {
    m_bp_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.mBP, rng);
        const correct = data.answer;
        const wrong = correct === "m" ? ["n", "b", "p"] : ["n", "m", "b"];
        q.push(
          createMCQ(
            "ortografie_c1",
            "m_bp_c1",
            `Completează corect: '${data.blank}'\n(Regulă: ${data.rule})`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },

    a_i_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.aCircumflex, rng);
        const correct = data.letter;
        const wrong = ["â", "î", "a", "i"].filter((l) => l !== correct);
        q.push(
          createMCQ(
            "ortografie_c1",
            "a_i_c1",
            data.position === "început"
              ? `Ce literă scrii la ÎNCEPUTUL cuvântului '${data.displayWord}'?`
              : `Ce literă scrii în INTERIORUL cuvântului '${data.displayWord}'?`,
            correct,
            wrong,
            rng
          )
        );
      }
      return q;
    },

    cratima_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const intrebari = [
        "Care formă este scrisă CORECT cu cratimă?",
        "Alege scrierea CORECTĂ!",
        "Care dintre variante este corectă?",
        "Care cuvânt/expresie este scris corect?",
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(CLASA1_WORDS.cratima, rng);
        q.push(
          createMCQ(
            "ortografie_c1",
            "cratima_c1",
            pick(intrebari, rng),
            data.correct,
            data.wrong,
            rng
          )
        );
      }
      return q;
    },

    scrierea_corecta_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const scriereData = [
        {
          correct: "Ana merge la școală.",
          wrong: ["ana merge la scoala.", "Ana merge la şcoalā.", "ana Merge la Scoala."],
        },
        {
          correct: "Câinele latră tare.",
          wrong: ["Cainele latra tare.", "câinele latră tare.", "Câinele Latră tare."],
        },
        {
          correct: "Primăvara, florile înfloresc.",
          wrong: ["Primavara, florile inforesc.", "primăvara, florile înfloresc.", "Primăvara florile înfloresc"],
        },
        {
          correct: "Bunica face plăcinte.",
          wrong: ["Bunica face placinte.", "bunica face Plăcinte.", "Bunicǎ face plăcinte."],
        },
        {
          correct: "Ion citește o carte.",
          wrong: ["Ion citeste o carte.", "Ion Citeste o Carte.", "ion citește o carte."],
        },
        {
          correct: "Pisica doarme în coș.",
          wrong: ["Pisica doarme in cos.", "pisica Doarme în coș.", "Pisica doarme în cos."],
        },
        {
          correct: "Maria are un ghiozdan.",
          wrong: ["Maria are un ghiozcan.", "Maria are un ghiosdan.", "maria are un ghiozdan."],
        },
        {
          correct: "Soarele strălucește azi.",
          wrong: ["Soarele straluceste azi.", "soarele strălucește azi.", "Soarele Străluceste azi."],
        },
        {
          correct: "Rândunica zboară sus.",
          wrong: ["Randunica zboara sus.", "rândunica Zboară sus.", "Rândunica zbora sus."],
        },
        {
          correct: "Copiii se joacă afară.",
          wrong: ["Copii se joaca afara.", "copiii se joacă afară.", "Copiii Se Joacă Afară."],
        },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(scriereData, rng);
        q.push(
          createMCQ(
            "ortografie_c1",
            "scrierea_corecta_c1",
            "Care propoziție este scrisă CORECT?",
            data.correct,
            data.wrong,
            rng
          )
        );
      }
      return q;
    },
  },

  // ── LECTURĂ ──────────────────────────────────────────────────────────────
  lectura_c1: {
    intelegere_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      for (let i = 0; i < 30; i++) {
        const text = pick(CLASA1_WORDS.texte, rng);
        const question = pick(text.questions, rng);
        q.push(
          createMCQ(
            "lectura_c1",
            "intelegere_c1",
            `Text: "${text.text}"\n\n${question.q}`,
            question.a,
            question.wrong,
            rng
          )
        );
      }
      return q;
    },

    personaje_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const personajeData = [
        {
          text: "Ana are o pisică. Pisica se numește Miau. Miau este albă cu pete negre.",
          personajPrincipal: "Ana",
          wrong: ["Ion", "Maria", "Andrei"],
        },
        {
          text: "Ion merge la școală. El are un ghiozdan albastru. Ion este un elev harnic.",
          personajPrincipal: "Ion",
          wrong: ["Ana", "Maria", "Mihai"],
        },
        {
          text: "Maria și Andrei sunt frați. Ei se joacă împreună. Maria este mai mare.",
          personajPrincipal: "Maria",
          wrong: ["Ana", "Ion", "Ioana"],
        },
        {
          text: "Bunica povestește povești. Nepoții ascultă cu atenție. Bunica știe multe povești.",
          personajPrincipal: "bunica",
          wrong: ["mama", "tata", "fratele"],
        },
        {
          text: "Rex este un câine jucăuș. El aleargă prin grădină. Toți copiii îl iubesc pe Rex.",
          personajPrincipal: "Rex",
          wrong: ["Miau", "Pufi", "Azorel"],
        },
        {
          text: "Rândunica s-a întors din țările calde. Ea și-a făcut cuib sub streașină. Rândunica cântă frumos.",
          personajPrincipal: "rândunica",
          wrong: ["vrabia", "cioara", "uliul"],
        },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(personajeData, rng);
        q.push(
          createMCQ(
            "lectura_c1",
            "personaje_c1",
            `Text: "${data.text}"\n\nCine este personajul PRINCIPAL al textului?`,
            data.personajPrincipal,
            data.wrong,
            rng
          )
        );
      }
      return q;
    },

    ideea_c1: (seed?: number) => {
      const rng = seed !== undefined ? mulberry32(seed) : Math.random;
      const q: CurriculumQuestion[] = [];
      const ideiData = [
        {
          text: "Ana are o pisică albă. Pisica se numește Miau. Miau bea lapte în fiecare dimineață.",
          idee: "Pisica Anei se numește Miau și bea lapte.",
          wrong: [
            "Ana merge la școală.",
            "Pisica este neagră.",
            "Miau latră tare.",
          ],
        },
        {
          text: "Ion merge la școală cu ghiozdanul albastru. El are cărți și caiete. Ion este un elev bun.",
          idee: "Ion este un elev bun care merge la școală.",
          wrong: [
            "Ion nu merge la școală.",
            "Ion are un ghiozdan roșu.",
            "Ion pierde cărțile.",
          ],
        },
        {
          text: "Primăvara, florile înfloresc. Rândunica se întoarce. Copiii se joacă afară.",
          idee: "Primăvara aduce schimbări frumoase în natură.",
          wrong: [
            "Iarna este anotimpul preferat.",
            "Florile mor primăvara.",
            "Copiii stau în casă.",
          ],
        },
        {
          text: "Rex este un câine jucăuș. El aleargă și sare. Rex este prietenul tuturor.",
          idee: "Rex este un câine jucăuș și prietenos.",
          wrong: [
            "Rex este un câine rău.",
            "Rex nu se joacă niciodată.",
            "Rex este o pisică.",
          ],
        },
        {
          text: "Bunica face plăcinte cu mere. Toată familia mănâncă. Tuturor le place.",
          idee: "Bunica face plăcinte bune pentru toată familia.",
          wrong: [
            "Bunica nu știe să gătească.",
            "Familia nu mănâncă plăcinte.",
            "Plăcintele sunt reci.",
          ],
        },
        {
          text: "Maria citește o carte frumoasă. Ea citește în fiecare zi. Maria iubește cărțile.",
          idee: "Maria iubește să citească.",
          wrong: [
            "Maria nu știe să citească.",
            "Maria urăște cărțile.",
            "Maria se uită la televizor.",
          ],
        },
      ];
      for (let i = 0; i < 30; i++) {
        const data = pick(ideiData, rng);
        q.push(
          createMCQ(
            "lectura_c1",
            "ideea_c1",
            `Text: "${data.text}"\n\nCare este IDEEA PRINCIPALĂ a textului?`,
            data.idee,
            data.wrong,
            rng
          )
        );
      }
      return q;
    },
  },
};
