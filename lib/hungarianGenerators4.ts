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
  const claimsReasons = [
    { claim: "A sport fontos", reason: "egészségből" },
    { claim: "Az olvasás jó", reason: "képzeltségből" },
    { claim: "Az iskola szükséges", reason: "tanulásból" },
  ];

  for (const arg of claimsReasons) {
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

// 20. ige/igemódok — Verb moods summary (indicative, conditional, imperative)
export const ige_igemódok = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
};

// 21. ige/igeidők_összef — Verb tenses summary (present, past, future + conjugation)
export const ige_igeidők_összef = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
};

// 22. nevmas/visszaható — Reflexive pronouns (magam, magad, maga)
export const nevmas_visszaható = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
  const reflexives = [
    { pron: "magam", person: "én", meaning: "myself" },
    { pron: "magad", person: "te", meaning: "yourself" },
    { pron: "maga", person: "ő", meaning: "himself/herself" },
    { pron: "magunk", person: "mi", meaning: "ourselves" },
    { pron: "magatuk", person: "ti", meaning: "yourselves" },
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
      `Helyes: "Én ___ játszom" (magam)`,
      "magammal",
      ["magamnak", "magam", "magunkal"]
    )
  );

  return questions;
};

// 23. nevmas/határozatlan — Indefinite pronouns (valaki, valami, néhány)
export const nevmas_határozatlan = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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

  return questions;
};

// 24. hatarozo/cel — Purpose adverbial (why? for what purpose?)
export const hatarozo_cel = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
  const purposes = [
    { sent: "Az iskolába ___ megy", correct: "tanulni", purpose: "to study" },
    { sent: "A boltba ___ megy", correct: "sütni való lisztet venni", purpose: "to buy flour" },
    { sent: "Futok ___ erősödni", correct: "azért hogy", purpose: "in order to get strong" },
    { sent: "Olvasok ___ ismereteket szerezni", correct: "azért hogy", purpose: "to gain knowledge" },
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

  return questions;
};

// 25. hatarozo/ok — Cause adverbial (why? for what reason?)
export const hatarozo_ok = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
  const causes = [
    { sent: "___ siettem, mert késő volt", correct: "ezért", reason: "because" },
    { sent: "___ nem jött el, mert beteg volt", correct: "nem", reason: "because ill" },
    { sent: "___ játszunk, ___ szép az idő", correct: "mert", reason: "because nice weather" },
    { sent: "___ otthon maradtam, ___ fájt a fejem", correct: "mert", reason: "because headache" },
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

  return questions;
};

// 26. szoalkot/igekötő_haladó — Advanced verb particles (össze-, szét-, félre-, hozzá-)
export const szoalkot_igekötő_haladó = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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
      `"A gyerek ___ játszott" (össze-, szét-, félre-)`,
      "össze",
      ["szét", "félre", "hozzá"]
    )
  );

  return questions;
};

// 27. helyesiras/vesszőhasználat — Comma usage in complex sentences
export const helyesiras_vesszőhasználat = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
  const commaRules = [
    { sent: "Péter és János játszik", correct: "Péter és János játszik", hasComma: false },
    { sent: "Ha szép az idő játszunk", correct: "Ha szép az idő, játszunk", hasComma: true },
    { sent: "Tudom hogy szeretsz olvasni", correct: "Tudom, hogy szeretsz olvasni", hasComma: true },
    { sent: "A parkban játsz mivel szeretem", correct: "A parkban játszol, mivel szeretlek", hasComma: true },
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

  return questions;
};

// 28. fogalmazas/napló — Diary writing (personal, continuous)
export const fogalmazas_napló = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
  const diaryStructures = [
    { part: "dátum", example: "2024. március 15.", meaning: "date" },
    { part: "üdvözlés", example: "Kedves napló!", meaning: "greeting" },
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

  return questions;
};

// 29. nyelvtan/szószerkezet — Syntactic structures (subject, object, adverbial, attribute)
export const nyelvtan_szószerkezet = (): CurriculumMCQ[] => {
  const questions: CurriculumMCQ[] = [];
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
      ["alany", "tárgy", "jelzet"]
    )
  );

  questions.push(
    createMCQ(
      "nyelvtan",
      "szószerkezet",
      `"Az okos gyerek tisztán beszél" - a jelzet:`,
      "okos",
      ["gyerek", "tisztán", "az"]
    )
  );

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
