/// <reference lib="es2015" />
// ─── PHYSICS GENERATORS K5: HEAT TRANSFER ─────────────────────────────────────
// "Wärmelehre" theme — 4 subtopics with MCQ + Typing generators
// Grade 5 (10-11 years old)
//
// Generates MCQ + Typing questions per subtopic using seeded PRNG

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

/** Seeded PRNG (Mulberry32) */
function mulberry32(seed: number): () => number {
  return function() {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Shuffle array using given RNG */
function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy: T[] = [...arr];
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

/** Create MCQ question */
function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrongOptions: string[],
  rng?: () => number
): CurriculumMCQ {
  const seen: Set<string> = new Set<string>();
  const unique: string[] = [];
  for (const w of wrongOptions) {
    if (w !== correct && !seen.has(w)) {
      seen.add(w);
      unique.push(w);
    }
  }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng || Math.random);
  return {
    type: "mcq",
    topic,
    subtopic,
    question,
    options: opts,
    correct: opts.indexOf(correct)
  };
}

/** Create typing question */
function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): CurriculumTyping {
  return {
    type: "typing",
    topic,
    subtopic,
    question,
    answer
  };
}

/** Multilingual helper */
function q4(de: string, en: string, hu: string, ro: string, lang: string): string {
  if (lang === "de") return de;
  if (lang === "hu") return hu;
  if (lang === "ro") return ro;
  return en;
}

// ─────────────────────────────────────────────────────────────────
// 12. TEMPERATURE — Temperature scales & conversions
// ─────────────────────────────────────────────────────────────────

function temperatureMCQ(lang: string, seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  const celsiusPoints = [
    { temp: 0, desc: "water freezes" },
    { temp: 37, desc: "normal body temperature" },
    { temp: 100, desc: "water boils" },
    { temp: -40, desc: "very cold day" },
  ];

  // Q1-5: Freezing point identification
  for (let i = 0; i < 5; i++) {
    const point = pick(celsiusPoints, rng);
    const wrong1 = pick(celsiusPoints.filter((p) => p.temp !== point.temp), rng);
    const wrong2 = pick(celsiusPoints.filter((p) => p.temp !== point.temp && p.temp !== wrong1.temp), rng);
    const wrong3 = pick(celsiusPoints.filter((p) => p.temp !== point.temp && p.temp !== wrong1.temp && p.temp !== wrong2.temp), rng);

    questions.push(
      createMCQ(
        "heat",
        "temperature",
        q4(
          `Bei welcher Temperatur gefriert Wasser?`,
          `At what temperature does water freeze?`,
          `Hány fokon fagy meg a víz?`,
          `La ce temperatură îngheață apa?`,
          lang
        ),
        point.temp === 0 ? "0°C" : `${point.temp}°C`,
        [
          wrong1.temp === 0 ? "0°C" : `${wrong1.temp}°C`,
          wrong2.temp === 0 ? "0°C" : `${wrong2.temp}°C`,
          wrong3.temp === 0 ? "0°C" : `${wrong3.temp}°C`,
        ],
        rng
      )
    );
  }

  // Q6-10: Boiling point identification
  for (let i = 0; i < 5; i++) {
    const options = ["100°C", "50°C", "37°C", "0°C", "-100°C"];
    const shuffled = shuffle(options, rng);
    questions.push(
      createMCQ(
        "heat",
        "temperature",
        q4(
          `Bei welcher Temperatur kocht Wasser auf Meereshöhe?`,
          `At what temperature does water boil at sea level?`,
          `Hány fokon forr fel a víz a tengerszinten?`,
          `La ce temperatură fierbe apa la nivelul mării?`,
          lang
        ),
        "100°C",
        shuffled.filter((x) => x !== "100°C"),
        rng
      )
    );
  }

  // Q11-15: Body temperature identification
  for (let i = 0; i < 5; i++) {
    const options = ["37°C", "36°C", "38°C", "35°C", "39°C"];
    questions.push(
      createMCQ(
        "heat",
        "temperature",
        q4(
          `Welche ist die normale Körpertemperatur eines Menschen?`,
          `What is the normal body temperature of a human?`,
          `Mekkora az emberi test normális hőmérséklete?`,
          `Care este temperatura corporală normală a unui om?`,
          lang
        ),
        "37°C",
        options.filter((x) => x !== "37°C"),
        rng
      )
    );
  }

  // Q16-20: Kelvin scale conversion (simple)
  for (let i = 0; i < 5; i++) {
    const celsiusTemp = [0, 10, 20, 30, 40][i];
    const kelvin = celsiusTemp + 273;
    const wrongKelvins = [kelvin - 5, kelvin + 5, kelvin - 10, kelvin + 10].filter((k) => k > 0);
    questions.push(
      createMCQ(
        "heat",
        "temperature",
        q4(
          `${celsiusTemp}°C in Kelvin umrechnen:`,
          `Convert ${celsiusTemp}°C to Kelvin:`,
          `${celsiusTemp}°C konvertálása Kelvinre:`,
          `Convertiți ${celsiusTemp}°C în Kelvin:`,
          lang
        ),
        `${kelvin}K`,
        wrongKelvins.map((k) => `${k}K`),
        rng
      )
    );
  }

  return questions;
}

function temperatureTyping(lang: string, seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  const typingPrompts: Array<{ de: string; en: string; hu: string; ro: string; answer: string }> = [
    {
      de: `Die Temperatureinheit im internationalen Einheitensystem ist ___.`,
      en: `The temperature unit in the International System of Units is ___.`,
      hu: `A Nemzetközi Mértékegységrendszerben a hőmérséklet mértékegysége az ___.`,
      ro: `Unitatea de temperatură în Sistemul Internațional de Unități este ___.`,
      answer: "Kelvin",
    },
    {
      de: `Die Temperaturskala, die bei 0°C den Gefrierpunkt von Wasser angibt, heißt ___.`,
      en: `The temperature scale that shows the freezing point of water at 0°C is called ___.`,
      hu: `A hőmérsékleti skála, amely a víz fagyáspontját 0°C-nál mutatja, neve ___.`,
      ro: `Scara de temperatură care arată punctul de congelare a apei la 0°C se numește ___.`,
      answer: "Celsius",
    },
    {
      de: `Der Gefrierpunkt von Wasser in Kelvin ist ___.`,
      en: `The freezing point of water in Kelvin is ___.`,
      hu: `A víz fagyáspontja Kelvinben ___.`,
      ro: `Punctul de îngheț al apei în Kelvin este ___.`,
      answer: "273",
    },
    {
      de: `Die normale Körpertemperatur eines Menschen ist etwa ___ °C.`,
      en: `The normal body temperature of a human is about ___ °C.`,
      hu: `Az emberi test normális hőmérséklete körülbelül ___ °C.`,
      ro: `Temperatura corporală normală a unui om este de aproximativ ___ °C.`,
      answer: "37",
    },
    {
      de: `Scara de temperatură absolută se numește ___ .`,
      en: `The absolute temperature scale is called ___.`,
      hu: `Az abszolút hőmérsékleti skála neve ___.`,
      ro: `Scara de temperatură absolută se numește ___.`,
      answer: "Kelvin",
    },
  ];

  for (const prompt of typingPrompts) {
    const question = q4(prompt.de, prompt.en, prompt.hu, prompt.ro, lang);
    questions.push(
      createTyping(
        "heat",
        "temperature",
        question,
        prompt.answer
      )
    );
  }

  return questions;
}

// ─────────────────────────────────────────────────────────────────
// 13. HEAT TRANSFER — Conduction, Convection, Radiation
// ─────────────────────────────────────────────────────────────────

function heatTransferMCQ(lang: string, seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Q1-5: Types of heat transfer identification
  const transferTypes = [
    { en: "conduction", de: "Wärmeleitung", hu: "hővezetés", ro: "conducție termică" },
    { en: "convection", de: "Konvektion", hu: "konvekció", ro: "convecție" },
    { en: "radiation", de: "Strahlung", hu: "sugárzás", ro: "radiație" },
  ];

  for (let i = 0; i < 5; i++) {
    const type = pick(transferTypes, rng);
    const wrongTypes = transferTypes.filter((t) => t.en !== type.en);
    questions.push(
      createMCQ(
        "heat",
        "heat_transfer",
        q4(
          `Das Übertragen von Wärme durch Körperkontakt ist ___.`,
          `The transfer of heat through direct contact is ___.`,
          `A hő közvetlen érintkezésen keresztüli átvitele ___.`,
          `Transferul de căldură prin contact direct este ___.`,
          lang
        ),
        type.de,
        wrongTypes.map((t) => t.de),
        rng
      )
    );
  }

  // Q6-10: Conduction examples
  const conductionExamples = [
    {
      de: "Ein Metallbecher mit heißem Tee wird heiß.",
      en: "A metal cup with hot tea becomes hot.",
      hu: "Egy fémes csésze forró teával megmelegszik.",
      ro: "O ceașcă de metal cu ceai fierbinte se încălzește.",
    },
    {
      de: "Ein Metalllöffel in heißem Wasser wird heiß.",
      en: "A metal spoon in hot water becomes hot.",
      hu: "Egy fém kanál forró vízben megmelegszik.",
      ro: "O lingură de metal în apă fierbinte se încălzește.",
    },
    {
      de: "Ein Eisennagel in einem Feuer wird heiß.",
      en: "An iron nail in a fire becomes hot.",
      hu: "Egy vavasszög a tűzben megmelegszik.",
      ro: "Un cui de fier într-un foc se încălzește.",
    },
  ];

  for (let i = 0; i < 5; i++) {
    const example = pick(conductionExamples, rng);
    questions.push(
      createMCQ(
        "heat",
        "heat_transfer",
        q4(
          `${example.de} Das ist ein Beispiel für ___.`,
          `${example.en} This is an example of ___.`,
          `${example.hu} Ez egy példa a ___ -ra.`,
          `${example.ro} Aceasta este un exemplu de ___.`,
          lang
        ),
        q4("Wärmeleitung", "Conduction", "Hővezetés", "Conducție termică", lang),
        [
          q4("Konvektion", "Convection", "Konvekció", "Convecție", lang),
          q4("Strahlung", "Radiation", "Sugárzás", "Radiație", lang),
        ],
        rng
      )
    );
  }

  // Q11-15: Convection examples
  const convectionExamples = [
    {
      de: "Ein Radiator erwärmt einen Raum.",
      en: "A radiator heats a room.",
      hu: "Egy radiátor melegíti a szobát.",
      ro: "Un radiator încălzește o cameră.",
    },
    {
      de: "Heiße Luft steigt auf und kalte sinkt ab.",
      en: "Hot air rises and cold air sinks.",
      hu: "A meleg levegő felfelé mozog és a hideg lefelé.",
      ro: "Aerul cald se ridică și aerul rece coboară.",
    },
    {
      de: "Ein Ventilator zirkuliert die Luft.",
      en: "A fan circulates the air.",
      hu: "Egy ventillátor körbeforgatja a levegőt.",
      ro: "Un ventilator circulă aerul.",
    },
  ];

  for (let i = 0; i < 5; i++) {
    const example = pick(convectionExamples, rng);
    questions.push(
      createMCQ(
        "heat",
        "heat_transfer",
        q4(
          `${example.de} Das ist Wärmeleitung oder ___?`,
          `${example.en} Is this conduction or ___?`,
          `${example.hu} Ez vezetés vagy ___?`,
          `${example.ro} Aceasta este conducție sau ___?`,
          lang
        ),
        q4("Konvektion", "Convection", "Konvekció", "Convecție", lang),
        [
          q4("Wärmeleitung", "Conduction", "Hővezetés", "Conducție termică", lang),
          q4("Strahlung", "Radiation", "Sugárzás", "Radiație", lang),
        ],
        rng
      )
    );
  }

  // Q16-20: Radiation examples
  const radiationExamples = [
    {
      de: "Die Sonne wärmt die Erde.",
      en: "The sun heats the Earth.",
      hu: "A Nap melegíti a Földet.",
      ro: "Soarele încălzește Pământul.",
    },
    {
      de: "Eine Infrarotlampe wärmt Objekte.",
      en: "An infrared lamp heats objects.",
      hu: "Egy infravörös lámpa melegíti az objektumokat.",
      ro: "O lampă infraroșie încălzește obiectele.",
    },
    {
      de: "Wärmestrahlung durchdringt das Vakuum.",
      en: "Heat radiation penetrates a vacuum.",
      hu: "A hősugárzás áthatolja az ürt.",
      ro: "Radiația termică pătrunde în vid.",
    },
  ];

  for (let i = 0; i < 5; i++) {
    const example = pick(radiationExamples, rng);
    questions.push(
      createMCQ(
        "heat",
        "heat_transfer",
        q4(
          `${example.de} Das ist ___.`,
          `${example.en} This is ___.`,
          `${example.hu} Ez ___.`,
          `${example.ro} Aceasta este ___.`,
          lang
        ),
        q4("Strahlung", "Radiation", "Sugárzás", "Radiație", lang),
        [
          q4("Wärmeleitung", "Conduction", "Hővezetés", "Conducție termică", lang),
          q4("Konvektion", "Convection", "Konvekció", "Convecție", lang),
        ],
        rng
      )
    );
  }

  // Q21-25: Mixed - identify transfer type in situations
  const situations = [
    {
      de: "Ein Metallbecher mit heißem Tee wird heiß. Das ist ___.",
      en: "A metal cup with hot tea becomes hot. This is ___.",
      hu: "Egy fémes csésze forró teával megmelegszik. Ez ___.",
      ro: "O ceașcă de metal cu ceai fierbinte se încălzește. Aceasta este ___.",
      answer: q4("Wärmeleitung", "Conduction", "Hővezetés", "Conductivitate termică", lang),
    },
    {
      de: "Ein Holzbecher mit heißem Tee wird nicht heiß. Das ist, weil ___.",
      en: "A wooden cup with hot tea does not get hot. This is because ___.",
      hu: "Egy fa csésze forró teával nem melegszik meg. Ez azért van, mert ___.",
      ro: "O ceașcă de lemn cu ceai fierbinte nu se încălzește. Aceasta se datorează ___.",
      answer: q4("Holz isoliert gut", "Wood insulates well", "A fa jól szigetel", "Lemnul izolează bine", lang),
    },
    {
      de: "Ein Radiator erwärmt einen Raum durch ___.",
      en: "A radiator heats a room by ___.",
      hu: "A radiátor a szobát ___ által melegíti.",
      ro: "Un radiator încălzește o cameră prin ___.",
      answer: q4("Konvektion", "Convection", "Konvekció", "Convecție", lang),
    },
  ];

  for (const sit of situations) {
    const sitDe = sit.de;
    const sitEn = sit.en;
    const sitHu = sit.hu;
    const sitRo = sit.ro;

    questions.push(
      createMCQ(
        "heat",
        "heat_transfer",
        q4(sitDe, sitEn, sitHu, sitRo, lang),
        sit.answer,
        [
          q4("Strahlung", "Radiation", "Sugárzás", "Radiație", lang),
          q4(
            sitDe.includes("Radiator")
              ? "Wärmeleitung"
              : sitDe.includes("nicht")
                ? "Leitfähigkeit"
                : "Verdampfung",
            sitEn.includes("radiator")
              ? "Conduction"
              : sitEn.includes("not")
                ? "Conductivity"
                : "Evaporation",
            sitHu.includes("radiátor")
              ? "Hővezetés"
              : sitHu.includes("nem")
                ? "Vezetőképesség"
                : "Párolgás",
            sitRo.includes("radiator")
              ? "Conductivitate termică"
              : sitRo.includes("nu")
                ? "Conductivitate"
                : "Evaporare",
            lang
          ),
        ],
        rng
      )
    );
  }

  // Q26-30: Three heat transfer types identification
  for (let i = 0; i < 5; i++) {
    const types = shuffle(transferTypes, rng);
    questions.push(
      createMCQ(
        "heat",
        "heat_transfer",
        q4(
          `Welche der folgenden ist eine Art der Wärmeübertragung?`,
          `Which of the following is a type of heat transfer?`,
          `Melyik a következők közül egy hőátviteli módszer?`,
          `Care dintre următoarele este o metodă de transfer de căldură?`,
          lang
        ),
        types[0].de,
        types.slice(1, 4).map((t) => t.de),
        rng
      )
    );
  }

  return questions;
}

function heatTransferTyping(lang: string, seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  const typingPrompts: Array<{ de: string; en: string; hu: string; ro: string; answer: string }> = [
    {
      de: `Das Übertragen von Wärme durch Körperkontakt ist ___.`,
      en: `The transfer of heat through direct contact is ___.`,
      hu: `A hő közvetlen érintkezésen keresztüli átvitele ___.`,
      ro: `Transferul de căldură prin contact direct este ___.`,
      answer: "Wärmeleitung",
    },
    {
      de: `Das Übertragen von Wärme durch Flüssigkeits- oder Gasbewegung ist ___.`,
      en: `The transfer of heat through fluid or gas movement is ___.`,
      hu: `A hő folyadék- vagy gázmozgáson keresztüli átvitele ___.`,
      ro: `Transferul de căldură prin mișcarea fluidului sau gazului este ___.`,
      answer: "Konvektion",
    },
    {
      de: `Das Übertragen von Wärme durch Strahlung ohne Medium ist ___.`,
      en: `The transfer of heat through radiation without a medium is ___.`,
      hu: `A hő sugárzáson keresztüli átvitele közeg nélkül ___.`,
      ro: `Transferul de căldură prin radiație fără mediu este ___.`,
      answer: "Strahlung",
    },
    {
      de: `Ein Material, das Wärme nicht gut leitet, wird ___ genannt.`,
      en: `A material that does not conduct heat well is called a ___.`,
      hu: `Az a anyag, amely nem vezeti jól a hőt, ___ -nak nevezik.`,
      ro: `Un material care nu conduce bine căldura se numește ___.`,
      answer: "Isolator",
    },
    {
      de: `Ein Material, das Wärme gut leitet, wird ___ genannt.`,
      en: `A material that conducts heat well is called a ___.`,
      hu: `Az a anyag, amely jól vezeti a hőt, ___ -nak nevezik.`,
      ro: `Un material care conduce bine căldura se numește ___.`,
      answer: "Leiter",
    },
  ];

  for (const prompt of typingPrompts) {
    const question = q4(prompt.de, prompt.en, prompt.hu, prompt.ro, lang);
    questions.push(
      createTyping(
        "heat",
        "heat_transfer",
        question,
        prompt.answer
      )
    );
  }

  return questions;
}

// ─────────────────────────────────────────────────────────────────
// 14. STATES OF MATTER — Solid, Liquid, Gas
// ─────────────────────────────────────────────────────────────────

function statesOfMatterMCQ(lang: string, seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Q1-5: Identify state of matter
  const stateExamples = [
    { en: "ice", de: "Eis", hu: "jég", ro: "gheață", state: "solid" },
    { en: "water", de: "Wasser", hu: "víz", ro: "apă", state: "liquid" },
    { en: "steam", de: "Dampf", hu: "gőz", ro: "abur", state: "gas" },
    { en: "rock", de: "Stein", hu: "kő", ro: "piatră", state: "solid" },
    { en: "oxygen", de: "Sauerstoff", hu: "oxigén", ro: "oxigen", state: "gas" },
  ];

  for (let i = 0; i < 5; i++) {
    const example = pick(stateExamples, rng);
    questions.push(
      createMCQ(
        "heat",
        "states_of_matter",
        q4(
          `${example.de} ist ein ___.`,
          `${example.en} is a ___.`,
          `${example.hu} egy ___.`,
          `${example.ro} este un ___.`,
          lang
        ),
        example.state === "solid"
          ? q4("Feststoff", "Solid", "Szilárd", "Solid", lang)
          : example.state === "liquid"
            ? q4("Flüssigkeit", "Liquid", "Folyadék", "Lichid", lang)
            : q4("Gas", "Gas", "Gáz", "Gaz", lang),
        [
          q4("Feststoff", "Solid", "Szilárd", "Solid", lang),
          q4("Flüssigkeit", "Liquid", "Folyadék", "Lichid", lang),
          q4("Gas", "Gas", "Gáz", "Gaz", lang),
        ].filter((s) => s !== (example.state === "solid" ? q4("Feststoff", "Solid", "Szilárd", "Solid", lang) : example.state === "liquid" ? q4("Flüssigkeit", "Liquid", "Folyadék", "Lichid", lang) : q4("Gas", "Gas", "Gáz", "Gaz", lang))),
        rng
      )
    );
  }

  // Q6-15: Properties of states
  const properties = [
    { de: "hat eine feste Form", en: "has a fixed shape", hu: "fix alakja van", ro: "are o formă fixă", state: "solid" },
    { de: "nimmt die Form des Behälters an", en: "takes the shape of the container", hu: "a tartály alakját veszi fel", ro: "ia forma containerului", state: "liquid" },
    { de: "hat feste Volumen", en: "has a fixed volume", hu: "fix térfogata van", ro: "are un volum fix", state: "solid" },
  ];

  for (let i = 0; i < 10; i++) {
    const prop = pick(properties, rng);
    const states = [
      q4("Feststoff", "Solid", "Szilárd", "Solid", lang),
      q4("Flüssigkeit", "Liquid", "Folyadék", "Lichid", lang),
      q4("Gas", "Gas", "Gáz", "Gaz", lang),
    ];
    questions.push(
      createMCQ(
        "heat",
        "states_of_matter",
        q4(
          `Eine Substanz, die ${prop.de}, ist ein ___.`,
          `A substance that ${prop.en} is a ___.`,
          `Az a szubsztancia, amely ${prop.hu}, egy ___.`,
          `O substanță care ${prop.ro} este un ___.`,
          lang
        ),
        prop.state === "solid"
          ? states[0]
          : prop.state === "liquid"
            ? states[1]
            : states[2],
        states.filter((s) => s !== (prop.state === "solid" ? states[0] : prop.state === "liquid" ? states[1] : states[2])),
        rng
      )
    );
  }

  // Q16-30: Phase transitions
  const transitions = [
    { de: "Schmelzen", en: "Melting", hu: "Olvadás", ro: "Topirea", from: "solid", to: "liquid" },
    { de: "Verdampfung", en: "Evaporation", hu: "Párolgás", ro: "Evaporare", from: "liquid", to: "gas" },
    { de: "Gefrieren", en: "Freezing", hu: "Fagyás", ro: "Îngheț", from: "liquid", to: "solid" },
    { de: "Kondensation", en: "Condensation", hu: "Kondenzáció", ro: "Condensare", from: "gas", to: "liquid" },
  ];

  for (let i = 0; i < 15; i++) {
    const trans = pick(transitions, rng);
    questions.push(
      createMCQ(
        "heat",
        "states_of_matter",
        q4(
          `___ ist der Prozess, bei dem sich Feststoff in Flüssigkeit umwandelt.`,
          `___ is the process where a solid turns into a liquid.`,
          `___ az a folyamat, amikor a szilárd halmazállapot folyadékká alakul.`,
          `___ este procesul în care un solid se transformă într-un lichid.`,
          lang
        ),
        trans.de,
        transitions.filter((t) => t.de !== trans.de).map((t) => t.de),
        rng
      )
    );
  }

  return questions;
}

function statesOfMatterTyping(lang: string, seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  const typingPrompts: Array<{ de: string; en: string; hu: string; ro: string; answer: string }> = [
    {
      de: `Die drei Aggregatszustände sind Feststoff, Flüssigkeit und ___.`,
      en: `The three states of matter are solid, liquid, and ___.`,
      hu: `Az anyag három halmazállapota: szilárd, folyadék és ___.`,
      ro: `Cele trei stări ale materiei sunt solid, lichid și ___.`,
      answer: "Gas",
    },
    {
      de: `Der Prozess, bei dem Wasser zu Eis wird, heißt ___.`,
      en: `The process where water turns to ice is called ___.`,
      hu: `Az a folyamat, amikor a víz jéggé válik, ___ -nak hívják.`,
      ro: `Procesul în care apa se transformă în gheață se numește ___.`,
      answer: "Gefrieren",
    },
    {
      de: `Der Prozess, bei dem Eis zu Wasser wird, heißt ___.`,
      en: `The process where ice turns to water is called ___.`,
      hu: `Az a folyamat, amikor a jég vízé válik, ___ -nak hívják.`,
      ro: `Procesul în care gheața se transformă în apă se numește ___.`,
      answer: "Schmelzen",
    },
    {
      de: `Der Prozess, bei dem Wasser zu Dampf wird, heißt ___.`,
      en: `The process where water turns to steam is called ___.`,
      hu: `Az a folyamat, amikor a víz gőzzé válik, ___ -nak hívják.`,
      ro: `Procesul în care apa se transformă în abur se numește ___.`,
      answer: "Verdampfung",
    },
    {
      de: `Der Prozess, bei dem Dampf wieder zu Wasser wird, heißt ___.`,
      en: `The process where steam turns back to water is called ___.`,
      hu: `Az a folyamat, amikor a gőz vissza vízé válik, ___ -nak hívják.`,
      ro: `Procesul în care aborul se transformă din nou în apă se numește ___.`,
      answer: "Kondensation",
    },
  ];

  for (const prompt of typingPrompts) {
    const question = q4(prompt.de, prompt.en, prompt.hu, prompt.ro, lang);
    questions.push(
      createTyping(
        "heat",
        "states_of_matter",
        question,
        prompt.answer
      )
    );
  }

  return questions;
}

// ─────────────────────────────────────────────────────────────────
// 15. MELTING & BOILING — Phase transitions with temperature
// ─────────────────────────────────────────────────────────────────

function meltingBoilingMCQ(lang: string, seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Q1-10: Melting and boiling point identification
  const substances = [
    { name: "water", de: "Wasser", melt: 0, boil: 100 },
    { name: "ice", de: "Eis", melt: 0, boil: 0 },
    { name: "lead", de: "Blei", melt: 327, boil: 1749 },
    { name: "gold", de: "Gold", melt: 1064, boil: 2856 },
    { name: "iron", de: "Eisen", melt: 1538, boil: 2862 },
  ];

  for (let i = 0; i < 10; i++) {
    const subst = pick(substances, rng);
    questions.push(
      createMCQ(
        "heat",
        "melting_boiling",
        q4(
          `Der Schmelzpunkt von ${subst.de} ist etwa ___.`,
          `The melting point of ${subst.name} is about ___.`,
          `${subst.de} olvadáspontja körülbelül ___.`,
          `Punctul de topire al ${subst.de} este de aproximativ ___.`,
          lang
        ),
        `${subst.melt}°C`,
        [`${subst.melt - 50}°C`, `${subst.melt + 50}°C`, `${subst.melt + 100}°C`],
        rng
      )
    );
  }

  // Q11-15: Boiling point identification
  for (let i = 0; i < 5; i++) {
    const subst = pick(substances, rng);
    questions.push(
      createMCQ(
        "heat",
        "melting_boiling",
        q4(
          `Der Siedepunkt von ${subst.de} ist etwa ___.`,
          `The boiling point of ${subst.name} is about ___.`,
          `${subst.de} forráspontja körülbelül ___.`,
          `Punctul de fierbere al ${subst.de} este de aproximativ ___.`,
          lang
        ),
        `${subst.boil}°C`,
        [`${subst.boil - 100}°C`, `${subst.boil + 100}°C`, `${subst.boil + 200}°C`],
        rng
      )
    );
  }

  return questions;
}

function meltingBoilingTyping(lang: string, seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  const typingPrompts: Array<{ de: string; en: string; hu: string; ro: string; answer: string }> = [
    {
      de: `Der Schmelzpunkt von Wasser ist ___.`,
      en: `The melting point of water is ___.`,
      hu: `A víz olvadáspontja ___.`,
      ro: `Punctul de topire al apei este ___.`,
      answer: "0",
    },
    {
      de: `Der Siedepunkt von Wasser ist ___.`,
      en: `The boiling point of water is ___.`,
      hu: `A víz forráspontja ___.`,
      ro: `Punctul de fierbere al apei este ___.`,
      answer: "100",
    },
    {
      de: `Ein Stoff schmilzt bei seiner ___ Temperatur.`,
      en: `A substance melts at its ___ temperature.`,
      hu: `Egy anyag ___ hőmérsékleten olvad meg.`,
      ro: `O substanță se topește la temperatura sa ___.`,
      answer: "Schmelz",
    },
    {
      de: `Ein Stoff siedet bei seiner ___ Temperatur.`,
      en: `A substance boils at its ___ temperature.`,
      hu: `Egy anyag ___ hőmérsékleten forr.`,
      ro: `O substanță fierbe la temperatura sa ___.`,
      answer: "Siede",
    },
  ];

  for (const prompt of typingPrompts) {
    const question = q4(prompt.de, prompt.en, prompt.hu, prompt.ro, lang);
    questions.push(
      createTyping(
        "heat",
        "melting_boiling",
        question,
        prompt.answer
      )
    );
  }

  return questions;
}

// ─────────────────────────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────────────────────────

export function generateTemperatureMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return temperatureMCQ(lang, seed);
}

export function generateTemperatureTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return temperatureTyping(lang, seed);
}

export function generateHeatTransferMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return heatTransferMCQ(lang, seed);
}

export function generateHeatTransferTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return heatTransferTyping(lang, seed);
}

export function generateStatesOfMatterMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return statesOfMatterMCQ(lang, seed);
}

export function generateStatesOfMatterTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return statesOfMatterTyping(lang, seed);
}

export function generateMeltingBoilingMCQ(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return meltingBoilingMCQ(lang, seed);
}

export function generateMeltingBoilingTyping(lang: string = "en", seed: number = 0): CurriculumQuestion[] {
  return meltingBoilingTyping(lang, seed);
}
