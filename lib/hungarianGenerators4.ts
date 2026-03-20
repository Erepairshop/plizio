// ─── HUNGARIAN GRADE 4 GENERATORS ───────────────────────────────────────────
// Procedural MCQ question generators for Hungarian Grade 4 (4. osztály) curriculum
// Covers: Verb conjugation, pronouns, adverbials, complex sentences, word formation, spelling, composition, grammar analysis
// Generates ~30 questions per subtopic for orbit-quiz and star-match
// Grade-appropriate for 9-10 year old students

import type { CurriculumMCQ } from "./curriculumTypes";

type MagyarMCQ = CurriculumMCQ & { type: "mcq" };

// ─── HELPER FUNCTIONS ───────────────────────────────────────────────────────

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
  "szülni", "készíteni", "vallanì", "szeretni", "félteni", "kenyérkazni",
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
export const alanyi_ragozas = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
};

// 2. ige/targyas — Objective verb conjugation
export const targyas_ragozas = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
};

// 3. nevmas/szemelyes — Personal pronouns (different cases)
export const szemelyes_nevmas = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];

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

  return questions;
};

// 4. nevmas/mutato — Demonstrative pronouns
export const mutato_nevmas = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
};

// 5. nevmas/kerdo — Question pronouns
export const kerdo_nevmas = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
};

// 6. hatarozo/hely — Locative adverbials (where?)
export const helyhataroza = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
};

// 7. hatarozo/ido — Temporal adverbials (when?)
export const idohataroza = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
};

// 8. hatarozo/mod — Modal adverbials (how?)
export const modhataroza = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
};

// 9. mondat/mellerendelo — Coordinate conjunctions
export const mellerendelés = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
  const coords = ["és", "vagy", "de", "illetve"];
  const sentences = [
    { s1: "Péter szereti az Apple", s2: "Márta szereti az sárga", conj: "és" },
    { s1: "Tudod-e, hogy esik az eső", s2: "Elmész sétálni", conj: "vagy" },
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

  return questions;
};

// 10. mondat/alarendelo — Subordinate conjunctions
export const alárendelés = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
};

// 11. szoalkot/kepzes — Word formation (suffixes)
export const szoalkotás_kepzes = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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
        ["szépet", "szépően", "szépre"]
      )
    );
  }

  return questions;
};

// 12. szoalkot/ragozas — Inflection (conjugation and declension)
export const szoalkotás_ragozas = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
};

// 13. szoalkot/jelezés — Marking (possessive, plural markers)
export const szoalkotás_jelezés = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
};

// 14. helyesiras/igekoveto — Verb particle spelling
export const helyesiras_igekoveto = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
  const particles = [
    { verb: "meg", example: "megállni", correct: "meg van írva" },
    { verb: "el", example: "elmenni", correct: "el van írva" },
    { verb: "ki", example: "kijönni", correct: "ki van írva" },
    { verb: "be", example: "belépni", correct: "be van írva" },
  ];

  for (const part of particles) {
    questions.push(
      createMCQ(
        "helyesiras",
        "igekoveto",
        `Igekötő: "___ ${part.example}" - helyesen?`,
        part.correct,
        ["van nyújtva", "van rövidítve", "nincs írásjel"]
      )
    );
  }

  return questions;
};

// 15. helyesiras/kuloniro_haladó — Advanced separation spelling
export const helyesiras_kuloniro = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
};

// 16. fogalmazas/erveles — Argumentation (identifying claims)
export const fogalmazas_erveles = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
  const arguments = [
    { claim: "A sport fontos", reason: "egészségből" },
    { claim: "Az olvasás jó", reason: "képzeltségből" },
    { claim: "Az iskola szükséges", reason: "tanulásból" },
  ];

  for (const arg of arguments) {
    questions.push(
      createMCQ(
        "fogalmazas",
        "erveles",
        `Melyik az érv? "${arg.claim}" - miért? ___`,
        arg.reason,
        ["másért", "semmiért", "játékért"]
      )
    );
  }

  return questions;
};

// 17. fogalmazas/level — Letter writing (salutation, format)
export const fogalmazas_level = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
  const greetings = ["Kedves Peti!", "Kedves Ágnes!", "Tisztelt tanár úr!"];

  for (const greeting of greetings) {
    questions.push(
      createMCQ(
        "fogalmazas",
        "level",
        `Levél kezdete: ___`,
        greeting,
        ["Halló!", "Szia!", "Csóka!"]
      )
    );
  }

  return questions;
};

// 18. nyelvtan/szoelem — Word analysis (morpheme breakdown)
export const nyelvtan_szoelem = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
};

// 19. nyelvtan/mondatelemzes — Sentence analysis (syntax)
export const nyelvtan_mondatelemzes = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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
  szoalkotás_kepzes,
  szoalkotás_ragozas,
  szoalkotás_jelezés,
  helyesiras_igekoveto,
  helyesiras_kuloniro,
  fogalmazas_erveles,
  fogalmazas_level,
  nyelvtan_szoelem,
  nyelvtan_mondatelemzes,
};

// Correcting the first function name
function alanyi(): CurriculumMCQ[] {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
}
