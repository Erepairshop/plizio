// ─── HUNGARIAN GRADE 4 GENERATORS ───────────────────────────────────────────
// Procedural MCQ question generators for Hungarian Grade 4 (4. osztály) curriculum
// Covers: Verb conjugation, pronouns, adverbials, complex sentences, word formation, spelling, composition, grammar analysis
// Generates ~30 questions per subtopic for orbit-quiz and star-match
// Grade-appropriate for 9-10 year old students

import type { CurriculumMCQ, CurriculumTyping, CurriculumQuestion } from "./curriculumTypes";

type MagyarMCQ = CurriculumMCQ & { type: "mcq" };
type MagyarTyping = CurriculumTyping & { type: "typing" };

// ─── HELPER FUNCTIONS ───────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): MagyarTyping {
  return {
    type: "typing",
    topic,
    subtopic,
    question,
    answer,
  } as MagyarTyping;
}

function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrongOptions: string[]
): CurriculumMCQ {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of wrongOptions) {
    if (w !== correct && !seen.has(w)) {
      seen.add(w);
      unique.push(w);
    }
  }
  const opts = [...[correct], ...unique.slice(0, 3)].sort(() => Math.random() - 0.5);
  return {
    type: "mcq",
    topic,
    subtopic,
    question,
    options: opts,
    correct: opts.indexOf(correct),
  };
}

// ─── DATA LISTS ──────────────────────────────────────────────────────────────

const VERBS_INFINITIVE = [
  "játszani", "futni", "olvasni", "írni", "rajzolni", "énekleni", "táncolni",
  "rajzolni", "kérni", "adni", "venni", "mondani", "hallani", "látni", "szokni",
  "szülni", "készíteni", "vallani", "szeretni", "félteni", "tanítani",
];

const PRONOUNS_PERSONAL = [
  { nom: "én", acc: "engem", dat: "nekem" },
  { nom: "te", acc: "téged", dat: "neked" },
  { nom: "ő", acc: "őt", dat: "neki" },
  { nom: "mi", acc: "minket", dat: "nekünk" },
  { nom: "ti", acc: "titeket", dat: "nektek" },
  { nom: "ők", acc: "őket", dat: "nekik" },
];

const PRONOUNS_DEMONSTRATIVE = ["ez", "az", "ezek", "azok", "ilyen", "olyan"];

const CASE_SUFFIXES = {
  nominative: { name: "alapeset", suffix: "" },
  accusative: { name: "tárgyeset", suffix: "-t/-et/-ot/-öt" },
  dative: { name: "részeshatározó", suffix: "-nak/-nek" },
  locative: { name: "helyhatározó", suffix: "-ban/-ben/-ra/-re/-ból/-ből" },
  instrumental: { name: "eszközhatározó", suffix: "-val/-vel" },
};

const ADVERBIALS_LOCATION = [
  { place: "az iskolában", question: "hol?", answer: "az iskolában" },
  { place: "az erdőben", question: "hol?", answer: "az erdőben" },
  { place: "a szobában", question: "hol?", answer: "a szobában" },
  { place: "az utcán", question: "hol?", answer: "az utcán" },
  { place: "a parkban", question: "hol?", answer: "a parkban" },
];

const ADVERBIALS_TIME = [
  { time: "tegnap", meaning: "yesterday" },
  { time: "ma", meaning: "today" },
  { time: "holnap", meaning: "tomorrow" },
  { time: "mindig", meaning: "always" },
  { time: "soha", meaning: "never" },
  { time: "néha", meaning: "sometimes" },
  { time: "délután", meaning: "afternoon" },
  { time: "reggel", meaning: "morning" },
];

const COMPOUND_CONJUNCTIONS_COORDINATING = [
  "és", "vagy", "valamint", "illetve", "de", "azonban", "hanem",
];

const COMPOUND_CONJUNCTIONS_SUBORDINATING = [
  "hogy", "mert", "ha", "amikor", "miután", "míg", "amíg", "mint",
];

const WORD_FORMATION_SUFFIXES = [
  { suffix: "-ság/-ség", example: "szépség", meaning: "derived noun" },
  { suffix: "-ás/-és", example: "olvasás", meaning: "action" },
  { suffix: "-ment", example: "ajándékment", meaning: "state" },
];

const COMMON_WORDS = [
  "játék", "tankönyv", "ceruza", "szék", "asztal", "ablak", "ajtó",
  "kutya", "macska", "madár", "fa", "virág", "nap", "csillag",
];

// ─── GENERATOR FUNCTIONS ────────────────────────────────────────────────────

// 1. ige/alanyi — Subjective verb conjugation (Present tense, "van"-family verbs)
export const alanyi_ragozas = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const verbs = ["futon", "játszom", "olvasok", "írok", "rajzolok"];
  const persons = ["én", "te", "ő", "mi", "ti", "ők"];

  for (const verb of verbs) {
    // Question: Melyik a helyes ragozás?
    const conjugated: Record<string, string> = {
      "én": verb,
      "te": verb.replace("k", "sz"),
      "ő": verb.replace("m", ""),
      "mi": verb + "unk",
      "ti": verb + "tok",
      "ők": verb.replace("m", "nak"),
    };

    const person = persons[Math.floor(Math.random() * persons.length)];
    const correct = conjugated[person] || verb;
    const wrong = persons.filter((p) => p !== person).map((p) => conjugated[p] || verb);

    questions.push(
      createMCQ(
        "ige",
        "alanyi",
        `Mi az alanyi ragozás? "${person} ___"`,
        correct,
        wrong
      )
    );
  }
  const tp1: [string, string | string[]][] = [
    ["Mi az alanyi ragozás?", "az igét az alanyhoz igazítjuk"],
    ["'olvas' - én alanyi?", "olvasok"],
    ["'fut' - mi alanyi?", "futunk"],
    ["'ír' - ők alanyi?", "írnak"],
    ["'játszik' - én alanyi?", "játszom"],
    ["'rajzol' - te alanyi?", "rajzolsz"],
    ["'énekel' - ő alanyi?", "énekel"],
    ["Mikor szükséges az alanyi ragozás?", "meghatározatlan tárgy esetén"],
    ["'tanul' - mi alanyi?", "tanulunk"],
    ["'olvas' - ők alanyi?", "olvasnak"],
  ];
  shuffle(tp1).forEach(t => questions.push(createTyping("ige", "alanyi", t[0], t[1])));
  return questions;
};

// 2. ige/targyas — Objective verb conjugation
export const targyas_ragozas = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const verbs = ["olvasom", "írom", "rajzolom", "csinálom", "szerettem"];
  const tenses = ["olvasom", "olvastad", "olvassa", "olvassuk", "olvassátok", "olvassák"];

  for (const verb of verbs) {
    const wrongs = tenses.filter((t) => t !== verb);
    questions.push(
      createMCQ(
        "ige",
        "targyas",
        `Melyik a tárgyas ragozás? "Én ___"`,
        verb,
        wrongs
      )
    );
  }
  const tp2: [string, string | string[]][] = [
    ["Mi a tárgyas ragozás?", "határozott tárgy esetén"],
    ["'olvas' - én tárgyas?", "olvasom"],
    ["'ír' - te tárgyas?", "írod"],
    ["'rajzol' - ő tárgyas?", "rajzolja"],
    ["'néz' - mi tárgyas?", "nézzük"],
    ["'olvas' - ti tárgyas?", "olvassátok"],
    ["'ír' - ők tárgyas?", "írják"],
    ["Mikor szükséges a tárgyas ragozás?", "határozott tárgy esetén"],
    ["'készít' - én tárgyas?", "készítem"],
    ["'szeret' - ő tárgyas?", "szereti"],
  ];
  shuffle(tp2).forEach(t => questions.push(createTyping("ige", "targyas", t[0], t[1])));
  return questions;
};

// 3. nevmas/szemelyes — Personal pronouns (different cases)
export const szemelyes_nevmas = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];

  for (const pronoun of PRONOUNS_PERSONAL) {
    questions.push(
      createMCQ(
        "nevmas",
        "szemelyes",
        `Ki? ___ (alanyeset)`,
        pronoun.nom,
        [pronoun.acc, pronoun.dat, "valaki"]
      )
    );
    questions.push(
      createMCQ(
        "nevmas",
        "szemelyes",
        `Kit? ___ (tárgyeset)`,
        pronoun.acc,
        [pronoun.nom, pronoun.dat, "valakit"]
      )
    );
    questions.push(
      createMCQ(
        "nevmas",
        "szemelyes",
        `Kinek? ___ (részeshatározó)`,
        pronoun.dat,
        [pronoun.nom, pronoun.acc, "valakinek"]
      )
    );
  }
  const tp3: [string, string | string[]][] = [
    ["Mi a személyes névmás?", "személyeket helyettesítő szó"],
    ["'én' tárgyesete?", "engem"],
    ["'te' részeshatározója?", "neked"],
    ["'ő' tárgyesete?", "őt"],
    ["'mi' tárgyesete?", "minket"],
    ["'ti' részeshatározója?", "nektek"],
    ["'ők' tárgyesete?", "őket"],
    ["'én' részeshatározója?", "nekem"],
    ["Személyes névmás egyes szám első személye?", "én"],
    ["Személyes névmás többes szám harmadik személye?", "ők"],
  ];
  shuffle(tp3).forEach(t => questions.push(createTyping("nevmas", "szemelyes", t[0], t[1])));
  return questions;
};

// 4. nevmas/mutato — Demonstrative pronouns
export const mutato_nevmas = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const pronouns = ["ez", "az"];
  const contexts = ["a könyv", "az asztal", "a szék", "az ablak"];

  for (const pronoun of pronouns) {
    for (const context of contexts) {
      questions.push(
        createMCQ(
          "nevmas",
          "mutato",
          `Melyik a mutató névmás? ___ ${context}`,
          pronoun,
          ["ilyen", "olyan", "melyik"]
        )
      );
    }
  }

  const tp4: [string, string | string[]][] = [
    ["Mi a mutató névmás?", "közel vagy távolra mutató szó"],
    ["'ez' közeli vagy távolra mutat?", "közeli"],
    ["'az' közeli vagy távolra mutat?", "távolra"],
    ["'ezek' többes száma mire vonatkozik?", "közel lévő dolgokra"],
    ["'azok' többes száma mire vonatkozik?", "távolabb lévő dolgokra"],
    ["Mutató névmás egyes számban?", ["ez", "az"]],
    ["Mutató névmás többes számban?", ["ezek", "azok"]],
    ["'ilyen' milyen névmás?", "mutató"],
    ["'olyan' milyen névmás?", "mutató"],
    ["Mi az alapfunkciója a mutató névmásnak?", "rámutatás"],
  ];
  shuffle(tp4).forEach(t => questions.push(createTyping("nevmas", "mutato", t[0], t[1])));
  return questions;
};

// 5. nevmas/kerdo — Question pronouns
export const kerdo_nevmas = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const qwords = ["ki", "mi", "melyik", "milyen"];
  const sentences = [
    { q: "___ van az asztalon?", a: "mi" },
    { q: "___ az a személy?", a: "ki" },
    { q: "___ könyvet szeretsz?", a: "melyik" },
    { q: "___ színű a ceruza?", a: "milyen" },
  ];

  for (const sent of sentences) {
    const wrongs = qwords.filter((w) => w !== sent.a);
    questions.push(
      createMCQ(
        "nevmas",
        "kerdo",
        sent.q,
        sent.a,
        wrongs
      )
    );
  }
  const tp5: [string, string | string[]][] = [
    ["Mi a kérdő névmás?", "kérdést kifejező szó"],
    ["Személyre kérdező névmás?", "ki"],
    ["Dologra kérdező névmás?", "mi"],
    ["Mire kérdez a 'milyen'?", "tulajdonságra"],
    ["Mire kérdez a 'melyik'?", "kiválasztásra"],
    ["Hány főbb kérdő névmás van?", "négy: ki, mi, melyik, milyen"],
    ["'___ van az asztalon?' - kérdő névmás?", "mi"],
    ["'___ az a személy?' - kérdő névmás?", "ki"],
    ["'___ könyvet szeretsz?' - kérdő névmás?", "melyik"],
    ["'___ színű a ceruza?' - kérdő névmás?", "milyen"],
  ];
  shuffle(tp5).forEach(t => questions.push(createTyping("nevmas", "kerdo", t[0], t[1])));
  return questions;
};

// 6. hatarozo/hely — Locative adverbials (where?)
export const helyhataroza = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const places = [
    "az iskolában", "a szobában", "a parkban", "az erdőben", "a konyhában",
  ];
  const wrongs = [
    "az iskolán", "a szobán", "a parkon", "az erdőn", "a konyhán",
  ];

  for (const place of places) {
    questions.push(
      createMCQ(
        "hatarozo",
        "hely",
        `Hol van? ___`,
        place,
        wrongs.slice(0, 3)
      )
    );
  }
  const tp6: [string, string | string[]][] = [
    ["Mi a helyhatározó?", "hely körülményt jelöl"],
    ["Helyhatározóra kérdező szó?", "hol?"],
    ["'az iskolában' milyen határozó?", "helyhatározó"],
    ["'a szobában' milyen határozó?", "helyhatározó"],
    ["'a parkban' - mire kérdezünk?", "hol?"],
    ["'az erdőben' - milyen toldalék?", "-ban/-ben"],
    ["Helyes alakja: iskola + -ban?", "iskolában"],
    ["Helyes alakja: erdő + -ben?", "erdőben"],
    ["Helyes alakja: konyha + -ban?", "konyhában"],
    ["Írj egy helyhatározót!", ["az iskolában", "a parkban", "az erdőben"]],
  ];
  shuffle(tp6).forEach(t => questions.push(createTyping("hatarozo", "hely", t[0], t[1])));
  return questions;
};

// 7. hatarozo/ido — Temporal adverbials (when?)
export const idohataroza = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const times = ["tegnap", "ma", "holnap", "jövő héten", "nyáron"];
  const wrongs = ["reggel", "délután", "este", "éjjel"];

  for (const time of times) {
    questions.push(
      createMCQ(
        "hatarozo",
        "ido",
        `Mikor? ___`,
        time,
        wrongs.slice(0, 3)
      )
    );
  }
  const tp7: [string, string | string[]][] = [
    ["Mi az időhatározó?", "mikor történik valami"],
    ["Időhatározóra kérdező szó?", "mikor?"],
    ["'tegnap' milyen határozó?", "időhatározó"],
    ["'holnap' milyen határozó?", "időhatározó"],
    ["'jövő héten' milyen határozó?", "időhatározó"],
    ["'nyáron' mire kérdezünk?", "mikor?"],
    ["Írj egy időhatározót!", ["tegnap", "ma", "holnap", "nyáron"]],
    ["'reggel' - milyen határozó?", "időhatározó"],
    ["'este' - milyen határozó?", "időhatározó"],
    ["Mi a különbség hely- és időhatározó közt?", "hol vs mikor"],
  ];
  shuffle(tp7).forEach(t => questions.push(createTyping("hatarozo", "ido", t[0], t[1])));
  return questions;
};

// 8. hatarozo/mod — Modal adverbials (how?)
export const modhataroza = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const modes = ["gyorsan", "lassan", "óvatosan", "vidáman", "szomorúan"];
  const wrongs = ["felülről", "lentről", "előről", "mögött"];

  for (const mode of modes) {
    questions.push(
      createMCQ(
        "hatarozo",
        "mod",
        `Hogyan? ___`,
        mode,
        wrongs.slice(0, 3)
      )
    );
  }
  const tp8: [string, string | string[]][] = [
    ["Mi a módhatározó?", "hogyan történik valami"],
    ["Módhatározóra kérdező szó?", "hogyan?"],
    ["'gyorsan' milyen határozó?", "módhatározó"],
    ["'lassan' milyen határozó?", "módhatározó"],
    ["'óvatosan' mire kérdezünk?", "hogyan?"],
    ["Módhatározó végződése?", "-an/-en"],
    ["'vidáman' módhatározó?", "igen"],
    ["'szomorúan' módhatározó?", "igen"],
    ["Írj egy módhatározót!", ["gyorsan", "lassan", "óvatosan", "vidáman"]],
    ["'A kutya gyorsan fut.' - mi a módhatározó?", "gyorsan"],
  ];
  shuffle(tp8).forEach(t => questions.push(createTyping("hatarozo", "mod", t[0], t[1])));
  return questions;
};

// 9. mondat/mellerendelo — Coordinate conjunctions
export const mellerendelés = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const coords = ["és", "vagy", "de", "illetve"];
  const sentences = [
    { s1: "Péter szeret focizni", s2: "Márta szeret olvasni", conj: "és" },
    { s1: "Esik az eső", s2: "Elmész sétálni", conj: "vagy" },
    { s1: "Szép az idő", s2: "Hideg van", conj: "de" },
  ];

  for (const sent of sentences) {
    const wrongs = coords.filter((c) => c !== sent.conj);
    questions.push(
      createMCQ(
        "mondat",
        "mellerendelo",
        `Válaszd ki a helyes kötőszót: "${sent.s1}" ___ "${sent.s2}"`,
        sent.conj,
        wrongs.slice(0, 3)
      )
    );
  }
  const tp9: [string, string | string[]][] = [
    ["Mi a mellérendelő kötőszó?", "egyenrangú mondatokat köt össze"],
    ["Milyen kötőszó az 'és'?", "mellérendelő"],
    ["Milyen kötőszó a 'de'?", "mellérendelő, ellentétes"],
    ["Milyen kötőszó a 'vagy'?", "mellérendelő, választó"],
    ["'Péter olvas és Mari ír.' - kötőszó?", "és"],
    ["'Szép az idő, de hideg van.' - kötőszó?", "de"],
    ["'Almát vagy körtet kérsz?' - kötőszó?", "vagy"],
    ["Mellérendelő kötőszavak?", ["és", "de", "vagy", "illetve"]],
    ["'és' milyen kapcsolatot jelöl?", "összeadó"],
    ["'de' milyen kapcsolatot jelöl?", "ellentétes"],
  ];
  shuffle(tp9).forEach(t => questions.push(createTyping("mondat", "mellerendelo", t[0], t[1])));
  return questions;
};

// 10. mondat/alarendelo — Subordinate conjunctions
export const alárendelés = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const subords = ["hogy", "mert", "ha", "amikor"];
  const sentences = [
    { s1: "Tudom", s2: "te szeretsz sétálni", conj: "hogy" },
    { s1: "Otthon maradtam", s2: "esett az eső", conj: "mert" },
    { s1: "Jól játszunk", s2: "szép az idő", conj: "ha" },
    { s1: "Hazamentem", s2: "végzett az iskola", conj: "amikor" },
  ];

  for (const sent of sentences) {
    const wrongs = subords.filter((s) => s !== sent.conj);
    questions.push(
      createMCQ(
        "mondat",
        "alarendelo",
        `Válaszd ki a helyes kötőszót: "${sent.s1}" ___ "${sent.s2}"`,
        sent.conj,
        wrongs.slice(0, 3)
      )
    );
  }
  const tp10: [string, string | string[]][] = [
    ["Mi az alárendelő kötőszó?", "főmondathoz mellékmondatot kapcsol"],
    ["Milyen kötőszó a 'mert'?", "alárendelő, ok"],
    ["Milyen kötőszó a 'hogy'?", "alárendelő, célzó"],
    ["Milyen kötőszó a 'ha'?", "alárendelő, feltételes"],
    ["Milyen kötőszó az 'amikor'?", "alárendelő, idő"],
    ["'Tudom, hogy te jó vagy.' - kötőszó?", "hogy"],
    ["'Otthon maradtam, mert esett az eső.' - kötőszó?", "mert"],
    ["'Jól játszunk, ha szép az idő.' - kötőszó?", "ha"],
    ["'Hazamentem, amikor végzett az iskola.' - kötőszó?", "amikor"],
    ["Alárendelő kötőszavak?", ["hogy", "mert", "ha", "amikor"]],
  ];
  shuffle(tp10).forEach(t => questions.push(createTyping("mondat", "alarendelo", t[0], t[1])));
  return questions;
};

// 11. szoalkot/kepzes — Word formation (suffixes)
export const szoalkotás_kepzes = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const formations = [
    { base: "szép", derived: "szépség", suffix: "-ség" },
    { base: "olvas", derived: "olvasás", suffix: "-ás" },
    { base: "ír", derived: "írás", suffix: "-ás" },
    { base: "rajzol", derived: "rajzolás", suffix: "-ás" },
  ];

  for (const form of formations) {
    questions.push(
      createMCQ(
        "szoalkot",
        "kepzes",
        `Mi az új szó? "${form.base}" + "${form.suffix}" = ___`,
        form.derived,
        ["szépet", "írót", "rajzos"]
      )
    );
  }
  const tp11: [string, string | string[]][] = [
    ["Mi a képző?", "új szót alkotó toldalék"],
    ["'szép' + '-ség' = ?", "szépség"],
    ["'olvas' + '-ás' = ?", "olvasás"],
    ["'ír' + '-ás' = ?", "írás"],
    ["'rajzol' + '-ás' = ?", "rajzolás"],
    ["Képzővel új ... keletkezik.", "szó"],
    ["'-ság/-ség' képző mit képez?", "elvont főnevet"],
    ["'-ás/-és' képző mit képez?", "cselekvő főnevet"],
    ["'boldog' + '-ság' = ?", "boldogság"],
    ["'szomorú' + '-ság' = ?", "szomorúság"],
  ];
  shuffle(tp11).forEach(t => questions.push(createTyping("szoalkot", "kepzes", t[0], t[1])));
  return questions;
};

// 12. szoalkot/ragozas — Inflection (conjugation and declension)
export const szoalkotás_ragozas = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const inflections = [
    { singular: "könyv", plural: "könyvek" },
    { singular: "ceruza", plural: "ceruzák" },
    { singular: "asztal", plural: "asztalok" },
  ];

  for (const infl of inflections) {
    questions.push(
      createMCQ(
        "szoalkot",
        "ragozas",
        `Többes szám: "${infl.singular}" → ___`,
        infl.plural,
        ["könyveket", "ceruzákat", "asztalokat"]
      )
    );
  }
  const tp12: [string, string | string[]][] = [
    ["Mi a rag?", "szóalakot módosító toldalék"],
    ["'könyv' többes száma?", "könyvek"],
    ["'ceruza' többes száma?", "ceruzák"],
    ["'asztal' többes száma?", "asztalok"],
    ["Mi a jel?", "szótő és rag közé kerülő toldalék"],
    ["'-k' milyen toldalék?", "többes szám jele"],
    ["'ház' tárgyragos alakja?", "házat"],
    ["'iskola' tárgyragos alakja?", "iskolát"],
    ["'kutya' tárgyragos alakja?", "kutyát"],
    ["Mi a ragozás célja?", "különböző viszonyok kifejezése"],
  ];
  shuffle(tp12).forEach(t => questions.push(createTyping("szoalkot", "ragozas", t[0], t[1])));
  return questions;
};

// 13. szoalkot/jelezés — Marking (possessive, plural markers)
export const szoalkotás_jelezés = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const markings = [
    { singular: "a könyv", plural: "a könyvek", marker: "-ek" },
    { singular: "a szék", plural: "a székek", marker: "-ek" },
    { singular: "az alma", plural: "az almák", marker: "-k" },
  ];

  for (const mark of markings) {
    questions.push(
      createMCQ(
        "szoalkot",
        "jelezés",
        `Helyesen írva: "${mark.singular}" → ___`,
        mark.plural,
        ["könyvek", "székek", "almák"]
      )
    );
  }

  const tp13: [string, string | string[]][] = [
    ["'alma' többesszáma?", "almák"],
    ["'ház' többesszáma?", "házak"],
    ["'könyv' többesszáma?", "könyvek"],
    ["'barát' többesszáma?", "barátok"],
    ["'szék' többesszáma?", "székek"],
    ["Mi a többesjel?", "-k"],
    ["'kép' többesszáma?", "képek"],
    ["'fa' többesszáma?", "fák"],
    ["'cipő' többesszáma?", "cipők"],
    ["Mi a jel szerepe?", ["szám kifejezése", "a szám jelölése"]],
  ];
  shuffle(tp13).forEach(t => questions.push(createTyping("szoalkot", "jelezés", t[0], t[1])));
  return questions;
};

// 14. helyesiras/igekoveto — Verb particle spelling
export const helyesiras_igekoveto = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const particles = [
    { verb: "meg", example: "megállni", correct: "egybeírva az igével" },
    { verb: "el", example: "elmenni", correct: "egybeírva az igével" },
    { verb: "ki", example: "kijönni", correct: "egybeírva az igével" },
    { verb: "be", example: "belépni", correct: "egybeírva az igével" },
  ];

  for (const part of particles) {
    questions.push(
      createMCQ(
        "helyesiras",
        "igekoveto",
        `Az igekötő (${part.verb}-) a(z) "${part.example}" szóban hogyan írható?`,
        part.correct,
        ["külön az igétől", "kötőjellel", "nagybetűvel"]
      )
    );
  }

  const tp14: [string, string | string[]][] = [
    ["Hogyan írjuk az igekötőt az igével?", "egybeírva"],
    ["'megállni' igekötője?", "meg"],
    ["'elmenni' igekötője?", "el"],
    ["'kijönni' igekötője?", "ki"],
    ["'belépni' igekötője?", "be"],
    ["'visszajönni' igekötője?", "vissza"],
    ["'felírni' igekötője?", "fel"],
    ["'leírni' igekötője?", "le"],
    ["Az igekötő különírva mikor helyes?", "soha nem helyes"],
    ["'átkelni' igekötője?", "át"],
  ];
  shuffle(tp14).forEach(t => questions.push(createTyping("helyesiras", "igekoveto", t[0], t[1])));
  return questions;
};

// 15. helyesiras/kuloniro_haladó — Advanced separation spelling
export const helyesiras_kuloniro = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const separations = [
    { phrase: "képen vagy", correct: "képen vagy", wrong1: "képenyvagyis", wrong2: "képeny vagy" },
    { phrase: "azonban ma", correct: "azonban ma", wrong1: "azonban-ma", wrong2: "azonbanma" },
  ];

  for (const sep of separations) {
    questions.push(
      createMCQ(
        "helyesiras",
        "kuloniro_haladó",
        `Helyesen: "${sep.phrase}" - melyik?`,
        sep.correct,
        [sep.wrong1, sep.wrong2, "más"]
      )
    );
  }

  const tp15: [string, string | string[]][] = [
    ["Írj egy szét kell írni mondatkötőszót!", ["azonban", "mert", "hogy", "mivel"]],
    ["'képen vagy' - hogyan írjuk?", "külön"],
    ["'azonban' - hány szóba írjuk?", "egy"],
    ["Miért írjuk külön a névelőt és a főnevet?", "külön szavak"],
    ["'az iskola' hány szó?", "kettő"],
    ["'mégis' - egy vagy két szóba?", "egy"],
    ["'azonban ma' - hogyan írjuk?", "külön"],
    ["Mi a különírás szabálya?", ["külön szavakra bontjuk", "külön írjuk"]],
    ["'vagy inkább' - hány szó?", "kettő"],
    ["'mindegyik' - egy vagy két szóba?", "egy"],
  ];
  shuffle(tp15).forEach(t => questions.push(createTyping("helyesiras", "kuloniro_haladó", t[0], t[1])));
  return questions;
};

// 16. fogalmazas/erveles — Argumentation (identifying claims)
export const fogalmazas_erveles = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const claimsReasons = [
    { claim: "A sport fontos", reason: "mert egészséges maradhatunk tőle" },
    { claim: "Az olvasás jó", reason: "mert fejleszti a képzelőerőt" },
    { claim: "Az iskola szükséges", reason: "mert ott tanulunk meg írni és olvasni" },
  ];

  for (const arg of claimsReasons) {
    questions.push(
      createMCQ(
        "fogalmazas",
        "erveles",
        `Melyik az érv? "${arg.claim}" - miért? ___`,
        arg.reason,
        ["mert unalmas", "mert kötelező", "mert mindenki csinálja"]
      )
    );
  }

  const tp16: [string, string | string[]][] = [
    ["Mi az érvelés?", ["vélemény alátámasztása", "indoklás"]],
    ["Érvelésben melyik kötőszó szerepel?", "mert"],
    ["Az állítás után mi következik?", ["az érv", "indoklás"]],
    ["'A sport fontos, mert...' - mi ez?", "érvelés"],
    ["Fogalmazásban mi az érv?", ["bizonyíték", "indok"]],
    ["Az érvelésben mi az állítás?", ["a vélemény", "a főmondat"]],
    ["Írj egy érvelős kötőszót!", ["mert", "mivel", "hiszen"]],
    ["Mi az ellenérv?", ["cáfolat", "az ellentétes vélemény"]],
    ["Hogyan kezdjük az érvelést?", ["állítással", "véleménnyel"]],
    ["Érvelés zárlata mire utal?", ["összefoglalásra", "következtetésre"]],
  ];
  shuffle(tp16).forEach(t => questions.push(createTyping("fogalmazas", "erveles", t[0], t[1])));
  return questions;
};

// 17. fogalmazas/level — Letter writing (salutation, format)
export const fogalmazas_level = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const greetings = ["Kedves Peti!", "Kedves Ágnes!", "Tisztelt tanár úr!"];

  for (const greeting of greetings) {
    questions.push(
      createMCQ(
        "fogalmazas",
        "level",
        `Levél kezdete: ___`,
        greeting,
        ["Halló!", "Szia!", "Hé te!"]
      )
    );
  }

  const tp17: [string, string | string[]][] = [
    ["Levél megszólítása formálisan?", ["Tisztelt", "Kedves"]],
    ["Levél végén a búcsúzás?", ["Üdvözlettel", "Tisztelettel"]],
    ["Mi kerül a levél elejére?", ["dátum", "hely és dátum"]],
    ["Levélben mi a megszólítás?", "Kedves ...!"],
    ["Baráti levél aláírása?", ["a nevem", "nevem"]],
    ["Levél fő részeinek száma?", "három"],
    ["Hivatalos levél megszólítása?", "Tisztelt"],
    ["Levélben az 'Üdvözlettel' mikor áll?", "a levél végén"],
    ["A borítékon mi szükséges?", ["cím", "postacím"]],
    ["Levél aláírása mire utal?", ["a feladóra", "a küldőre"]],
  ];
  shuffle(tp17).forEach(t => questions.push(createTyping("fogalmazas", "level", t[0], t[1])));
  return questions;
};

// 18. nyelvtan/szoelem — Word analysis (morpheme breakdown)
export const nyelvtan_szoelem = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const morphemes = [
    { word: "játszom", root: "játsz", suffix: "-om" },
    { word: "olvasás", root: "olvas", suffix: "-ás" },
    { word: "szépség", root: "szép", suffix: "-ség" },
  ];

  for (const morph of morphemes) {
    questions.push(
      createMCQ(
        "nyelvtan",
        "szoelem",
        `Szóelemzés: "${morph.word}" = "${morph.root}" + ___`,
        morph.suffix,
        ["-om", "-ás", "-ség"]
      )
    );
  }

  const tp18: [string, string | string[]][] = [
    ["Mi a szótő?", ["a szó alapalakja", "a toldalékok nélküli rész"]],
    ["'szép' + '-ség' = ?", "szépség"],
    ["'olvas' + '-ás' = ?", "olvasás"],
    ["'játszik' töve?", "játsz"],
    ["Mi a toldalék?", ["képző, jel vagy rag", "a szóhoz járuló elem"]],
    ["'olvasok' ragja?", "-ok"],
    ["'könyv' + '-ek' = ?", "könyvek"],
    ["'fut' + '-ás' = ?", "futás"],
    ["Szóelemzésnél mit keresünk?", ["szótőt és toldalékot", "tövet és ragot"]],
    ["'tanár' + '-ok' = ?", "tanárok"],
  ];
  shuffle(tp18).forEach(t => questions.push(createTyping("nyelvtan", "szoelem", t[0], t[1])));
  return questions;
};

// 19. nyelvtan/mondatelemzes — Sentence analysis (syntax)
export const nyelvtan_mondatelemzes = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const analyses = [
    { sentence: "A gyerek fut", subject: "A gyerek" },
    { sentence: "Az anya főz", subject: "Az anya" },
    { sentence: "A kutya szalad", subject: "A kutya" },
  ];

  for (const analysis of analyses) {
    questions.push(
      createMCQ(
        "nyelvtan",
        "mondatelemzes",
        `Mondat: "${analysis.sentence}" - alany: ___`,
        analysis.subject,
        ["fut", "főz", "szalad"]
      )
    );
  }

  const tp19: [string, string | string[]][] = [
    ["Mi az alany a mondatban?", ["aki vagy ami cselekszik", "a cselekvő"]],
    ["Mi az állítmány?", ["amit az alanyról mondunk", "a cselekvés"]],
    ["'A madár énekel' - alany?", "a madár"],
    ["'A madár énekel' - állítmány?", "énekel"],
    ["'Péter futott' - alany?", "Péter"],
    ["Mi a tárgy a mondatban?", ["amire a cselekvés irányul", "az ige tárgya"]],
    ["'Peti levelet ír' - tárgy?", "levelet"],
    ["Mondatelemzésnél mit keresünk először?", ["állítmányt", "az igét"]],
    ["'Az okos gyerek olvas' - jelző?", "okos"],
    ["Mi a határozó?", ["a hely, idő vagy mód kifejezése", "körülmény"]],
  ];
  shuffle(tp19).forEach(t => questions.push(createTyping("nyelvtan", "mondatelemzes", t[0], t[1])));
  return questions;
};

// 20. ige/igemódok — Verb moods summary (indicative, conditional, imperative)
export const ige_igemódok = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const moods = [
    { mood: "kijelentő", example: "Játszom", meaning: "indicative" },
    { mood: "feltételes", example: "Játszanék", meaning: "conditional" },
    { mood: "felszólító", example: "Játssz!", meaning: "imperative" },
  ];
  const verbs = ["futni", "olvasni", "írni", "rajzolni"];

  for (const mood of moods) {
    questions.push(
      createMCQ(
        "ige",
        "igemódok",
        `Melyik az igeMÓD? "${mood.example}" - ___`,
        mood.mood,
        ["tárgyeset", "helyzet", "szóalak"]
      )
    );
  }

  // Additional mixed mood questions
  questions.push(
    createMCQ(
      "ige",
      "igemódok",
      `Felszólító mód: "Kérlek, ___ meg!" (játszani)`,
      "játssz",
      ["játsz", "játszom", "játszanék"]
    )
  );
  questions.push(
    createMCQ(
      "ige",
      "igemódok",
      `Feltételes mód: "Ha szép volna az idő, ___ játszani" (volna)`,
      "volna",
      ["van", "volt", "lesz"]
    )
  );

  const tp20: [string, string | string[]][] = [
    ["Hány igemód van a magyarban?", "három"],
    ["Kijelentő mód mire utal?", ["valós cselekvésre", "tényállításra"]],
    ["Feltételes mód jele?", "-na/-ne"],
    ["Felszólító mód mire szolgál?", ["parancsra", "kérésre vagy parancsra"]],
    ["'Játszanék' - melyik igemód?", "feltételes"],
    ["'Játssz!' - melyik igemód?", "felszólító"],
    ["'Játszom' - melyik igemód?", "kijelentő"],
    ["Feltételes módban mi a segédige?", ["volna", "-na/-ne toldalék"]],
    ["Felszólítóban az ige végén mi áll?", ["felkiáltójel", "!"]],
    ["'Ha eljönnél' - melyik mód?", "feltételes"],
  ];
  shuffle(tp20).forEach(t => questions.push(createTyping("ige", "igemódok", t[0], t[1])));
  return questions;
};

// 21. ige/igeidők_összef — Verb tenses summary (present, past, future + conjugation)
export const ige_igeidők_összef = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const tenses = [
    { name: "jelen", form: "játszom", eng: "present" },
    { name: "múlt", form: "játszottam", eng: "past" },
    { name: "jövő", form: "játszani fogok", eng: "future" },
  ];
  const contexts = [
    { sent: "Most ___ (játszani)", correct: "játszom", tense: "jelen" },
    { sent: "Tegnap ___ (játszani)", correct: "játszottam", tense: "múlt" },
    { sent: "Holnap ___ (játszani)", correct: "játszani fogok", tense: "jövő" },
  ];

  for (const ctx of contexts) {
    const wrongs = tenses.filter((t) => t.name !== ctx.tense).map((t) => t.form);
    questions.push(
      createMCQ(
        "ige",
        "igeidők_összef",
        ctx.sent,
        ctx.correct,
        wrongs
      )
    );
  }

  // Additional conjugation + tense questions
  questions.push(
    createMCQ(
      "ige",
      "igeidők_összef",
      `Jelen idő, 2. személy: "Te ___" (olvasni)`,
      "olvasol",
      ["olvasod", "olvasunk", "olvastál"]
    )
  );
  questions.push(
    createMCQ(
      "ige",
      "igeidők_összef",
      `Múlt idő, 3. személy: "Ő ___ írni"`,
      "írt",
      ["írni fog", "ír", "írna"]
    )
  );

  const tp21: [string, string | string[]][] = [
    ["Hány igeidő van a magyarban?", "három"],
    ["Múlt idő jele?", "-t/-tt"],
    ["Jövő idő hogyan képzendő?", ["fog + főnévi igenév", "fogok menni"]],
    ["'írt' - melyik igeidő?", "múlt"],
    ["'ír' - melyik igeidő?", "jelen"],
    ["'írni fog' - melyik igeidő?", "jövő"],
    ["Jelen időben mit fejez ki az ige?", ["most folyó cselekvést", "jelenbeli cselekvést"]],
    ["Múlt idő képzése?", ["-t vagy -tt toldalékkal", "-t/-tt"]],
    ["'olvasol' - melyik igeidő?", "jelen"],
    ["'olvasni fogsz' - melyik igeidő?", "jövő"],
  ];
  shuffle(tp21).forEach(t => questions.push(createTyping("ige", "igeidők_összef", t[0], t[1])));
  return questions;
};

// 22. nevmas/visszaható — Reflexive pronouns (magam, magad, maga)
export const nevmas_visszaható = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const reflexives = [
    { pron: "magam", person: "én", meaning: "myself" },
    { pron: "magad", person: "te", meaning: "yourself" },
    { pron: "maga", person: "ő", meaning: "himself/herself" },
    { pron: "magunk", person: "mi", meaning: "ourselves" },
    { pron: "magatokat", person: "ti", meaning: "yourselves" },
    { pron: "magukat", person: "ők", meaning: "themselves" },
  ];

  for (const refl of reflexives) {
    questions.push(
      createMCQ(
        "nevmas",
        "visszaható",
        `"${refl.person}" - visszaható névmás: ___`,
        refl.pron,
        reflexives.filter((r) => r.person !== refl.person).map((r) => r.pron).slice(0, 3)
      )
    );
  }

  // Sentence context questions
  questions.push(
    createMCQ(
      "nevmas",
      "visszaható",
      `Helyes: "Én egyedül, ___ játszom" (visszaható névmás)`,
      "magamban",
      ["magamnak", "magam", "magammal"]
    )
  );

  const tp22: [string, string | string[]][] = [
    ["'én' visszaható névmása?", "magam"],
    ["'te' visszaható névmása?", "magad"],
    ["'ő' visszaható névmása?", "maga"],
    ["'mi' visszaható névmása?", "magunk"],
    ["'ti' visszaható névmása?", "magatokat"],
    ["'ők' visszaható névmása?", "magukat"],
    ["Mi a visszaható névmás?", ["a cselekvő önmagára utal", "magam, magad stb."]],
    ["'Egyedül öltözik' - visszaható névmás?", "maga"],
    ["Visszaható névmás alapszava?", "maga"],
    ["'Ő maga csinálta' - ez milyen névmás?", "visszaható"],
  ];
  shuffle(tp22).forEach(t => questions.push(createTyping("nevmas", "visszaható", t[0], t[1])));
  return questions;
};

// 23. nevmas/határozatlan — Indefinite pronouns (valaki, valami, néhány)
export const nevmas_határozatlan = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const indefinites = [
    { pron: "valaki", meaning: "someone" },
    { pron: "valami", meaning: "something" },
    { pron: "néhány", meaning: "some/few" },
    { pron: "sok", meaning: "many" },
    { pron: "minden", meaning: "all/every" },
  ];

  const contexts = [
    { sent: "A szobában ___ van", correct: "valaki", type: "person" },
    { sent: "Az asztalon ___ van", correct: "valami", type: "thing" },
    { sent: "Van ___ könyvem", correct: "néhány", type: "quantity" },
  ];

  for (const ctx of contexts) {
    const wrongs = indefinites.filter((i) => i.pron !== ctx.correct).map((i) => i.pron);
    questions.push(
      createMCQ(
        "nevmas",
        "határozatlan",
        ctx.sent,
        ctx.correct,
        wrongs.slice(0, 3)
      )
    );
  }

  questions.push(
    createMCQ(
      "nevmas",
      "határozatlan",
      `"___ kutya szalad az utcán" (határozatlan)`,
      "egy",
      ["az", "az egyik", "milyen"]
    )
  );

  const tp23: [string, string | string[]][] = [
    ["Mi a határozatlan névmás?", ["nem pontosan megnevezett személy/dolog", "valaki, valami stb."]],
    ["Személyre utaló határozatlan névmás?", "valaki"],
    ["Dologra utaló határozatlan névmás?", "valami"],
    ["'Néhány' mire utal?", ["kis számra", "némi mennyiségre"]],
    ["'Senki' - milyen névmás?", "határozatlan"],
    ["'Semmi' - mire utal?", ["semmire", "tagadó határozatlan névmás"]],
    ["'Mindenki' mit jelent?", "minden személy"],
    ["'Valahol' mire utal?", ["ismeretlen helyre", "bizonytalan helyre"]],
    ["'Akárki' típusa?", "határozatlan névmás"],
    ["'Valaki kopogt' - valaki itt?", "határozatlan személy"],
  ];
  shuffle(tp23).forEach(t => questions.push(createTyping("nevmas", "határozatlan", t[0], t[1])));
  return questions;
};

// 24. hatarozo/cel — Purpose adverbial (why? for what purpose?)
export const hatarozo_cel = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const purposes = [
    { sent: "Az iskolába ___ megy", correct: "tanulni", purpose: "to study" },
    { sent: "A boltba ___ megy", correct: "kenyeret venni", purpose: "to buy bread" },
    { sent: "Futok, ___ erősödjek", correct: "azért hogy", purpose: "in order to get strong" },
    { sent: "Olvasok, ___ többet tudjak", correct: "azért hogy", purpose: "to gain knowledge" },
  ];

  for (const p of purposes) {
    questions.push(
      createMCQ(
        "hatarozo",
        "cel",
        p.sent,
        p.correct,
        ["mert", "ha", "amikor"]
      )
    );
  }

  questions.push(
    createMCQ(
      "hatarozo",
      "cel",
      `Célhatározó: "Miért megy a parkba?" - "___"`,
      "pihenni",
      ["pihennie", "pihen", "pihenés"]
    )
  );

  const tp24: [string, string | string[]][] = [
    ["Célhatározó kérdőszava?", ["miért", "minek"]],
    ["'Tanulni megy' - célhatározó?", "tanulni"],
    ["Célhatározós kötőszó?", ["azért hogy", "hogy"]],
    ["'Azért futok, hogy erős legyek' - cél?", "hogy erős legyek"],
    ["Mi a célhatározó?", ["a cselekvés célja", "miért történik"]],
    ["'Elment enni' - célhatározó?", "enni"],
    ["Célhatározóban az ige alakja?", ["főnévi igenév", "-ni végű alak"]],
    ["'Pihenni ment a parkba' - cél?", "pihenni"],
    ["Célhatározó módosítja?", ["az állítmányt", "az igét"]],
    ["'Hogy' kötőszó célmondatban mire utal?", ["célra", "szándékra"]],
  ];
  shuffle(tp24).forEach(t => questions.push(createTyping("hatarozo", "cel", t[0], t[1])));
  return questions;
};

// 25. hatarozo/ok — Cause adverbial (why? for what reason?)
export const hatarozo_ok = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const causes = [
    { sent: "Siettem, ___ késő volt", correct: "mert", reason: "because" },
    { sent: "Nem jött el, ___ beteg volt", correct: "mert", reason: "because ill" },
    { sent: "Kint játszunk, ___ szép az idő", correct: "mert", reason: "because nice weather" },
    { sent: "Otthon maradtam, ___ fájt a fejem", correct: "mert", reason: "because headache" },
  ];

  for (const c of causes) {
    questions.push(
      createMCQ(
        "hatarozo",
        "ok",
        c.sent,
        c.correct,
        ["ha", "amikor", "amit"]
      )
    );
  }

  questions.push(
    createMCQ(
      "hatarozo",
      "ok",
      `Okhatározó: "Miért nem jöttél?" - "___"`,
      "mert beteg voltam",
      ["ha beteg vagyok", "amikor beteg voltam", "amit tudok"]
    )
  );

  const tp25: [string, string | string[]][] = [
    ["Okhatározó kérdőszava?", ["miért", "mi okból"]],
    ["Okhatározós kötőszó?", ["mert", "mivel"]],
    ["'Mert' kötőszó mire utal?", ["okra", "okhatározóra"]],
    ["'Mivel beteg volt, maradt' - ok?", "beteg volt"],
    ["Mi az okhatározó?", ["a cselekvés oka", "ami miatt történik valami"]],
    ["'Késett, mert lekéste a buszt' - ok?", "lekéste a buszt"],
    ["Okhatározói mellékmondat kötőszava?", ["mert", "mivel", "hiszen"]],
    ["'Nem ment el, mert esett az eső' - ok?", "esett az eső"],
    ["Okhatározó megfelel minek?", ["oksági összefüggésnek", "az ok-okozatnak"]],
    ["'Félt, ezért nem ment' - ok?", "félt"],
  ];
  shuffle(tp25).forEach(t => questions.push(createTyping("hatarozo", "ok", t[0], t[1])));
  return questions;
};

// 26. szoalkot/igekötő_haladó — Advanced verb particles (össze-, szét-, félre-, hozzá-)
export const szoalkot_igekötő_haladó = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const particles = [
    { part: "össze-", meaning: "together", ex: "összejátszani" },
    { part: "szét-", meaning: "apart", ex: "szétszakadni" },
    { part: "félre-", meaning: "wrongly", ex: "félreérteni" },
    { part: "hozzá-", meaning: "to/toward", ex: "hozzáadni" },
    { part: "le-", meaning: "down", ex: "leírni" },
    { part: "fel-", meaning: "up", ex: "felolvasni" },
  ];

  for (const p of particles) {
    questions.push(
      createMCQ(
        "szoalkot",
        "igekötő_haladó",
        `Igekötő: "${p.ex}" - a kötő rész: ___`,
        p.part,
        particles.filter((x) => x.part !== p.part).map((x) => x.part).slice(0, 3)
      )
    );
  }

  questions.push(
    createMCQ(
      "szoalkot",
      "igekötő_haladó",
      `"A gyerek összejátszott a barátjával." – Melyik igekötő szerepel ebben?`,
      "össze-",
      ["szét-", "félre-", "hozzá-"]
    )
  );

  const tp26: [string, string | string[]][] = [
    ["'össze-' mit jelent?", "együtt"],
    ["'szét-' mit jelent?", "szétválik"],
    ["'félre-' mit jelent?", ["tévesen", "rossz irányba"]],
    ["'hozzá-' mit jelent?", ["hoz valamihez", "közelít"]],
    ["'összejön' igekötője?", "össze"],
    ["'szétszakad' igekötője?", "szét"],
    ["'félreért' igekötője?", "félre"],
    ["'hozzáad' igekötője?", "hozzá"],
    ["Mi az igekötő?", ["az ige elé járuló elem", "az igét módosító előtag"]],
    ["'leír' igekötője?", "le"],
  ];
  shuffle(tp26).forEach(t => questions.push(createTyping("szoalkot", "igekötő_haladó", t[0], t[1])));
  return questions;
};

// 27. helyesiras/vesszőhasználat — Comma usage in complex sentences
export const helyesiras_vesszőhasználat = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const commaRules = [
    { sent: "Péter és János játszik", correct: "Péter és János játszik", hasComma: false },
    { sent: "Ha szép az idő játszunk", correct: "Ha szép az idő, játszunk", hasComma: true },
    { sent: "Tudom hogy szeretsz olvasni", correct: "Tudom, hogy szeretsz olvasni", hasComma: true },
    { sent: "A parkban játszol mivel szép az idő", correct: "A parkban játszol, mivel szép az idő", hasComma: true },
  ];

  for (const rule of commaRules) {
    questions.push(
      createMCQ(
        "helyesiras",
        "vesszőhasználat",
        `Helyesen: "${rule.sent}" → ___`,
        rule.correct,
        [
          rule.sent,
          rule.sent.replace(", ", ""),
          rule.sent + ",",
        ]
      )
    );
  }

  questions.push(
    createMCQ(
      "helyesiras",
      "vesszőhasználat",
      `Vesszőhasználat: "Amikor sötét lesz ___ hazamegyek"`,
      ", ",
      ["- ", "; ", "~ "]
    )
  );

  const tp27: [string, string | string[]][] = [
    ["Alárendelő összetett mondatban van-e vessző?", "igen"],
    ["'Ha esik az eső, nem megyek ki' - van-e vessző?", "igen"],
    ["'Péter és János játszik' - kell-e vessző?", "nem"],
    ["'Tudom, hogy szeretsz' - vesszőhely?", "tudom után"],
    ["Mikor nem kell vessző?", "mellérendelő 'és' előtt"],
    ["'Mivel fáradt volt, lefeküdt' - van-e vessző?", "igen"],
    ["Alárendelt mondat elé mikor teszünk vesszőt?", ["mindig", "ha előtaggal kezdődik"]],
    ["'Bár esett, kimentünk' - van-e vessző?", "igen"],
    ["'Amikor hazaért, evett' - vesszőhely?", "hazaért után"],
    ["'Olvasok és írök' - kell-e vessző?", "nem"],
  ];
  shuffle(tp27).forEach(t => questions.push(createTyping("helyesiras", "vesszőhasználat", t[0], t[1])));
  return questions;
};

// 28. fogalmazas/napló — Diary writing (personal, continuous)
export const fogalmazas_napló = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const diaryStructures = [
    { part: "dátum", example: "2024. március 15.", meaning: "date" },
    { part: "megszólítás", example: "Kedves napló!", meaning: "greeting" },
    { part: "történet", example: "Ma iskolába mentem...", meaning: "story" },
    { part: "érzelmek", example: "Nagyon szomorú vagyok.", meaning: "feelings" },
  ];

  for (const ds of diaryStructures) {
    questions.push(
      createMCQ(
        "fogalmazas",
        "napló",
        `Naplóírás része: "${ds.example}" - ___`,
        ds.part,
        ["bevezetés", "zárlat", "aláírás"]
      )
    );
  }

  questions.push(
    createMCQ(
      "fogalmazas",
      "napló",
      `Naplóírásban az első mondat lehet:`,
      "Kedves napló!",
      ["Szép napot!", "Halló!", "Jó reggelt!"]
    )
  );

  questions.push(
    createMCQ(
      "fogalmazas",
      "napló",
      `A napló tipikus stílusa:`,
      "személyes és érzelmi",
      ["hivatalos és formális", "szórakoztató és vicces", "tudományos és pontos"]
    )
  );

  const tp28: [string, string | string[]][] = [
    ["Napló megszólítása?", "Kedves napló!"],
    ["Napló első sora általában mi?", ["dátum", "hely és dátum"]],
    ["Naplóban milyen stílus jellemző?", ["személyes", "érzelmi"]],
    ["Mi kerül a napló végére?", ["aláírás", "a nevem"]],
    ["A napló kinek szól?", ["önmagunknak", "a naplónak"]],
    ["Naplóírásban melyik személy dominál?", ["első személy", "én"]],
    ["Napló hány fő részre tagolható?", "három"],
    ["Naplóban mit írunk az érzelmekről?", ["hogyan éreztük magunkat", "érzelmeinkről"]],
    ["Naplóban jellemző igeidő?", ["múlt idő", "jelen és múlt"]],
    ["Napló és levél közt mi a különbség?", ["napló magunknak szól", "napló nem postázható"]],
  ];
  shuffle(tp28).forEach(t => questions.push(createTyping("fogalmazas", "napló", t[0], t[1])));
  return questions;
};

// 29. nyelvtan/szószerkezet — Syntactic structures (subject, object, adverbial, attribute)
export const nyelvtan_szószerkezet = (): CurriculumQuestion[] => {
  const questions: CurriculumQuestion[] = [];
  const structures = [
    { type: "alanyi", ex: "A gyerek fut", part: "A gyerek" },
    { type: "tárgyas", ex: "Péter levelet ír", part: "levelet" },
    { type: "határozós", ex: "Szalad az utcán", part: "az utcán" },
    { type: "jelzős", ex: "Piros ceruza", part: "Piros" },
  ];

  for (const s of structures) {
    questions.push(
      createMCQ(
        "nyelvtan",
        "szószerkezet",
        `Mondat: "${s.ex}" - ${s.type}: ___`,
        s.part,
        structures.filter((x) => x.type !== s.type).map((x) => x.part).slice(0, 3)
      )
    );
  }

  questions.push(
    createMCQ(
      "nyelvtan",
      "szószerkezet",
      `"Gyorsan futunk az iskolába" - mely szószerkezet:`,
      "határozó",
      ["alany", "tárgy", "jelző"]
    )
  );

  questions.push(
    createMCQ(
      "nyelvtan",
      "szószerkezet",
      `"Az okos gyerek tisztán beszél" - a jelző:`,
      "okos",
      ["gyerek", "tisztán", "az"]
    )
  );

  const tp29: [string, string | string[]][] = [
    ["Mi az alanyi szószerkezet?", ["az alany és jelzői", "alany + jelzők"]],
    ["Mi a tárgyas szószerkezet?", ["az ige és tárgya", "ige + tárgy"]],
    ["Mi a határozós szószerkezet?", ["ige + határozó", "határozó az igével"]],
    ["Mi a jelzős szószerkezet?", ["jelző + főnév", "melléknév + főnév"]],
    ["'piros labda' - melyik szószerkezet?", "jelzős"],
    ["'futok az utcán' - melyik szószerkezet?", "határozós"],
    ["'könyvet olvas' - melyik szószerkezet?", "tárgyas"],
    ["'a gyerek fut' - melyik szószerkezet?", "alanyi"],
    ["Szószerkezetben hány tag van minimum?", "kettő"],
    ["Mi az alaptagja a szószerkezetnek?", ["a főbb szó", "amelyhez a másik kapcsolódik"]],
  ];
  shuffle(tp29).forEach(t => questions.push(createTyping("nyelvtan", "szószerkezet", t[0], t[1])));
  return questions;
};

// ─── EXPORT GENERATOR MAP ──────────────────────────────────────────────────
export const G4_Generators_Hungarian = {
  alanyi,
  targyas_ragozas,
  szemelyes_nevmas,
  mutato_nevmas,
  kerdo_nevmas,
  helyhataroza,
  idohataroza,
  modhataroza,
  mellerendelés,
  alárendelés,
  kepzes: szoalkotás_kepzes,
  ragozas: szoalkotás_ragozas,
  "jelezés": szoalkotás_jelezés,
  igekoveto: helyesiras_igekoveto,
  kuloniro: helyesiras_kuloniro,
  erveles: fogalmazas_erveles,
  level: fogalmazas_level,
  szoelem: nyelvtan_szoelem,
  mondatelemzes: nyelvtan_mondatelemzes,
  ige_igemódok,
  "igeidők_összef": ige_igeidők_összef,
  "visszaható": nevmas_visszaható,
  "határozatlan": nevmas_határozatlan,
  cel: hatarozo_cel,
  ok: hatarozo_ok,
  "igekötő_haladó": szoalkot_igekötő_haladó,
  "vesszőhasználat": helyesiras_vesszőhasználat,
  "napló": fogalmazas_napló,
  "szószerkezet": nyelvtan_szószerkezet,
};

// Correcting the first function name
function alanyi(): CurriculumQuestion[] {
  const questions: CurriculumQuestion[] = [];
  const verbs = ["futon", "játszom", "olvasok", "írok", "rajzolok"];
  const persons = ["én", "te", "ő", "mi", "ti", "ők"];

  for (const verb of verbs) {
    const conjugated: Record<string, string> = {
      "én": verb,
      "te": verb.replace("k", "sz"),
      "ő": verb.replace("m", ""),
      "mi": verb + "unk",
      "ti": verb + "tok",
      "ők": verb.replace("m", "nak"),
    };

    const person = persons[Math.floor(Math.random() * persons.length)];
    const correct = conjugated[person] || verb;
    const wrong = persons.filter((p) => p !== person).map((p) => conjugated[p] || verb);

    questions.push(
      createMCQ(
        "ige",
        "alanyi",
        `Mi az alanyi ragozás? "${person} ___"`,
        correct,
        wrong
      )
    );
  }

  const tpAlanyi: [string, string | string[]][] = [
    ["Mi az alanyi ragozás?", ["határozatlan tárgyú", "általános ragozás"]],
    ["'én olvasok' - melyik ragozás?", "alanyi"],
    ["'te olvasol' - melyik ragozás?", "alanyi"],
    ["Alanyi ragozásban ki a tárgy?", ["határozatlan tárgy", "valami általában"]],
    ["'én futok' - rag?", "-ok"],
    ["'te futs_z' - alanyi rag?", "-sz"],
    ["'ő fut' - ragja?", "nincs rag"],
    ["'mi futunk' - rag?", "-unk"],
    ["Alanyi vs tárgyas ragozás különbsége?", ["tárgy határozottságán múlik", "határozatlan/határozott tárgy"]],
    ["'ti futtok' - alanyi rag?", "-tok"],
  ];
  shuffle(tpAlanyi).forEach(t => questions.push(createTyping("ige", "alanyi", t[0], t[1])));
  return questions;
}
