// ─── PHYSICS GENERATORS K5: HEAT TRANSFER ─────────────────────────────────────
// "Wärmelehre" theme — 4 subtopics with MCQ + Typing generators
// Grade 5 (10-11 years old)
//
// Generates MCQ + Typing questions per subtopic using seeded PRNG

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

/** Seeded PRNG (Mulberry32) */
function mulberry32(seed: number) {
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

/** Create MCQ question */
function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrongOptions: string[],
  rng?: () => number
): CurriculumMCQ {
  const seen = new Set<string>();
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

  const celsiusPoints = [
    { temp: 0, desc: "water freezes" },
    { temp: 37, desc: "normal body temperature" },
    { temp: 100, desc: "water boils" },
    { temp: -40, desc: "very cold day" },
    { temp: 20, desc: "room temperature" },
    { temp: 98.6, desc: "human body" },
    { temp: -273, desc: "absolute zero" },
    { temp: 50, desc: "warm day" },
    { temp: -10, desc: "freezing cold" },
    { temp: 1000, desc: "very hot fire" },
  ];

  const questions: CurriculumQuestion[] = [];

  // Q1-5: Identification of temperatures
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
        shuffled.filter((o) => o !== "100°C").slice(0, 3),
        rng
      )
    );
  }

  // Q11-15: Body temperature
  for (let i = 0; i < 5; i++) {
    const temps = ["37°C", "36.5°C", "39°C", "32°C", "40°C"];
    const shuffled = shuffle(temps, rng);
    questions.push(
      createMCQ(
        "heat",
        "temperature",
        q4(
          `Wie hoch ist die normale menschliche Körpertemperatur?`,
          `What is normal human body temperature?`,
          `Mi az emberi test normál hőmérséklete?`,
          `Care este temperatura normală a corpului uman?`,
          lang
        ),
        "37°C",
        shuffled.filter((o) => o !== "37°C").slice(0, 3),
        rng
      )
    );
  }

  // Q16-20: Celsius vs Fahrenheit recognition
  for (let i = 0; i < 5; i++) {
    const pairs = [
      { c: 0, f: 32 },
      { c: 100, f: 212 },
      { c: 37, f: 98.6 },
      { c: 20, f: 68 },
      { c: -40, f: -40 },
    ];
    const pair = pick(pairs, rng);
    const options = ["32°F", "98.6°F", "212°F", "68°F", "-40°F", "0°F"];
    const correct = `${pair.f}°F`;
    const shuffled = shuffle(
      options.filter((o) => o !== correct).slice(0, 3),
      rng
    );

    questions.push(
      createMCQ(
        "heat",
        "temperature",
        q4(
          `${pair.c}°C entspricht welcher Fahrenheit-Temperatur?`,
          `${pair.c}°C is equivalent to which Fahrenheit temperature?`,
          `${pair.c}°C melyik Fahrenheit-hőmérsékletnek felel meg?`,
          `${pair.c}°C este echivalent cu ce temperatură Fahrenheit?`,
          lang
        ),
        correct,
        shuffled,
        rng
      )
    );
  }

  // Q21-25: Absolute zero concept
  for (let i = 0; i < 5; i++) {
    const options = ["-273°C", "0°C", "0K", "-100°C", "-459°F"];
    const shuffled = shuffle(options, rng);
    questions.push(
      createMCQ(
        "heat",
        "temperature",
        q4(
          `Was ist der absolute Nullpunkt?`,
          `What is absolute zero?`,
          `Mi az abszolút nulla?`,
          `Ce este zero absolut?`,
          lang
        ),
        "-273°C",
        shuffled.filter((o) => o !== "-273°C").slice(0, 3),
        rng
      )
    );
  }

  // Q26-30: Temperature scale features
  for (let i = 0; i < 5; i++) {
    const scales = ["Celsius", "Fahrenheit", "Kelvin"];
    const scale = pick(scales, rng);
    const facts: Record<string, string> = {
      Celsius: q4(
        `Wasser gefriert bei 0°C`,
        `Water freezes at 0°C`,
        `A víz 0°C-on fagy meg`,
        `Apa îngheață la 0°C`,
        lang
      ),
      Fahrenheit: q4(
        `Wasser gefriert bei 32°F`,
        `Water freezes at 32°F`,
        `A víz 32°F-on fagy meg`,
        `Apa îngheață la 32°F`,
        lang
      ),
      Kelvin: q4(
        `Dies ist die absolute Temperaturskala`,
        `This is the absolute temperature scale`,
        `Ez az abszolút hőmérsékleti skála`,
        `Aceasta este scala de temperatură absolută`,
        lang
      ),
    };

    const options = [facts[scale], facts[pick(scales.filter((s) => s !== scale), rng)], facts[pick(scales.filter((s) => s !== scale), rng)]];
    questions.push(
      createMCQ(
        "heat",
        "temperature",
        q4(
          `Welche Aussage trifft auf ${scale} zu?`,
          `Which statement applies to ${scale}?`,
          `Melyik kijelentés vonatkozik a ${scale}-re?`,
          `Care declarație se aplică la ${scale}?`,
          lang
        ),
        facts[scale],
        shuffle(options.filter((o) => o !== facts[scale]), rng).slice(0, 3),
        rng
      )
    );
  }

  // Q31-35: Practical temperature scenarios
  const scenarios = [
    {
      de: `An einem heißen Sommertag beträgt die Temperatur 35°C. Ist dies ein angenehmer Tag?`,
      en: `On a hot summer day, the temperature is 35°C. Is this a comfortable day?`,
      hu: `Egy forró nyári napon a hőmérséklet 35°C. Ez egy kényelmes nap?`,
      ro: `Într-o zi fierbinte de vară, temperatura este 35°C. Este aceasta o zi confortabilă?`,
      answer: q4(`Ja, 35°C ist warm, aber nicht extrem heiß.`, `Yes, 35°C is warm but not extremely hot.`, `Igen, 35°C meleg, de nem szélsőségesen forró.`, `Da, 35°C este cald, dar nu extrem de fierbinte.`, lang),
    },
    {
      de: `Fieber tritt auf, wenn die Körpertemperatur über ___ liegt.`,
      en: `Fever occurs when body temperature exceeds ___.`,
      hu: `Láz jelentkezik, amikor a testhőmérséklet meghaladja a ___.`,
      ro: `Febra apare atunci când temperatura corpului depășește ___.`,
      answer: q4(`38°C`, `38°C`, `38°C`, `38°C`, lang),
    },
  ];

  for (let i = 0; i < 3; i++) {
    const scen = pick(scenarios, rng);
    const question = q4(scen.de, scen.en, scen.hu, scen.ro, lang);
    const options =
      i === 0
        ? ["Ja, 35°C ist warm, aber nicht extrem heiß.", "Nein, 35°C ist viel zu kalt.", "Ja, 35°C ist extrem heiß."]
        : ["38°C", "37°C", "35°C"];
    questions.push(
      createMCQ(
        "heat",
        "temperature",
        question,
        scen.answer,
        options.filter((o) => o !== scen.answer),
        rng
      )
    );
  }

  return questions.slice(0, 35);
}

function temperatureTyping(lang: string, seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  const typingPrompts = [
    {
      de: `Wasser gefriert bei ___ °C.`,
      en: `Water freezes at ___ °C.`,
      hu: `A víz ___ °C-on fagy meg.`,
      ro: `Apa îngheață la ___ °C.`,
      answer: "0",
    },
    {
      de: `Wasser kocht bei ___ °C.`,
      en: `Water boils at ___ °C.`,
      hu: `A víz ___ °C-on forr fel.`,
      ro: `Apa fierbe la ___ °C.`,
      answer: "100",
    },
    {
      de: `Normale Körpertemperatur ist etwa ___ °C.`,
      en: `Normal body temperature is about ___ °C.`,
      hu: `A normál testhőmérséklet körülbelül ___ °C.`,
      ro: `Temperatura normală a corpului este de aproximativ ___ °C.`,
      answer: "37",
    },
    {
      de: `Der absolute Nullpunkt liegt bei ___ °C.`,
      en: `Absolute zero is at ___ °C.`,
      hu: `Az abszolút nulla ___ °C-on van.`,
      ro: `Zero absolut se află la ___ °C.`,
      answer: "-273",
    },
    {
      de: `An einem warmen Tag ist es etwa ___ °C.`,
      en: `On a warm day it is about ___ °C.`,
      hu: `Egy meleg napon körülbelül ___ °C van.`,
      ro: `Într-o zi caldă este aproximativ ___ °C.`,
      answer: "25",
    },
    {
      de: `An einem kalten Wintertag ist es etwa ___ °C.`,
      en: `On a cold winter day it is about ___ °C.`,
      hu: `Egy hideg téli napon körülbelül ___ °C van.`,
      ro: `Într-o zi friguroasă de iarnă este aproximativ ___ °C.`,
      answer: "-5",
    },
    {
      de: `Zimmertemperatur liegt bei etwa ___ °C.`,
      en: `Room temperature is about ___ °C.`,
      hu: `A szobahőmérséklet körülbelül ___ °C.`,
      ro: `Temperatura camerei este de aproximativ ___ °C.`,
      answer: "20",
    },
    {
      de: `Fieber tritt auf bei ___ °C oder höher.`,
      en: `Fever occurs at ___ °C or higher.`,
      hu: `Láz ___ °C vagy magasabban jelentkezik.`,
      ro: `Febra apare la ___ °C sau mai mult.`,
      answer: "38",
    },
    {
      de: `Die Temperaturskala mit 32°F als Gefrierpunkt ist ___ .`,
      en: `The temperature scale with 32°F as the freezing point is ___ .`,
      hu: `Az a hőmérsékleti skála, amelynek 32°F a fagypontja, a ___ .`,
      ro: `Scara de temperatură cu 32°F ca punct de îngheț este ___ .`,
      answer: "Fahrenheit",
    },
    {
      de: `Die absolute Temperaturskala heißt ___ .`,
      en: `The absolute temperature scale is called ___ .`,
      hu: `Az abszolút hőmérsékleti skála neve ___ .`,
      ro: `Scara de temperatură absolută se numește ___ .`,
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
// 13. HEAT TRANSFER — Conduction, convection, radiation
// ─────────────────────────────────────────────────────────────────

function heatTransferMCQ(lang: string, seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Q1-5: Conduction examples
  for (let i = 0; i < 5; i++) {
    const examples = [
      { de: "Metallöffel in heißer Suppe", en: "Metal spoon in hot soup", hu: "Fém kanál forró levesben", ro: "Lingură de metal în supa fierbinte" },
      { de: "Eisennagel in Feuer", en: "Iron nail in fire", hu: "Vasszög tűzben", ro: "Cui de fier în foc" },
      { de: "Kupferleitung erwärmt sich", en: "Copper wire heats up", hu: "Réz vezeték felmelegszik", ro: "Fir de cupru se încălzește" },
    ];
    const example = pick(examples, rng);

    questions.push(
      createMCQ(
        "heat",
        "heat_transfer",
        q4(
          `${example.de} ist ein Beispiel für ___.`,
          `${example.en} is an example of ___.`,
          `${example.hu} a ___ egy példája.`,
          `${example.ro} este un exemplu de ___.`,
          lang
        ),
        q4("Wärmeleitung", "Conduction", "Hővezetés", "Conductivitate termică", lang),
        [
          q4("Konvektion", "Convection", "Konvekció", "Convecție", lang),
          q4("Strahlung", "Radiation", "Sugárzás", "Radiație", lang),
          q4("Verdampfung", "Evaporation", "Párolgás", "Evaporare", lang),
        ],
        rng
      )
    );
  }

  // Q6-10: Convection examples
  for (let i = 0; i < 5; i++) {
    const examples = [
      { de: "Heißluftballon steigt auf", en: "Hot air balloon rises", hu: "Hőlégballon emelkedik", ro: "Balon cu aer cald se ridică" },
      { de: "Warme Luft steigt zur Decke", en: "Warm air rises to ceiling", hu: "Meleg levegő az égmennyezetig emelkedik", ro: "Aer cald se ridică la tavan" },
      { de: "Meeresbrisen entstehen", en: "Sea breezes form", hu: "Tengeri szellők keletkeznek", ro: "Se formează brize marine" },
    ];
    const example = pick(examples, rng);

    questions.push(
      createMCQ(
        "heat",
        "heat_transfer",
        q4(
          `${example.de} ist ein Beispiel für ___.`,
          `${example.en} is an example of ___.`,
          `${example.hu} a ___ egy példája.`,
          `${example.ro} este un exemplu de ___.`,
          lang
        ),
        q4("Konvektion", "Convection", "Konvekció", "Convecție", lang),
        [
          q4("Wärmeleitung", "Conduction", "Hővezetés", "Conductivitate termică", lang),
          q4("Strahlung", "Radiation", "Sugárzás", "Radiație", lang),
          q4("Sublimation", "Sublimation", "Szublimáció", "Sublimare", lang),
        ],
        rng
      )
    );
  }

  // Q11-15: Radiation examples
  for (let i = 0; i < 5; i++) {
    const examples = [
      { de: "Sonne wärmt die Erde", en: "Sun warms Earth", hu: "Nap melegíti a Földet", ro: "Soarele încălzește Pământul" },
      { de: "Infrarotwärme aus einem Ofen", en: "Infrared heat from a stove", hu: "Infravörös hő egy kályhából", ro: "Căldură infraroșie dintr-un cuptor" },
      { de: "Lagerfeuer wärmt dich", en: "Campfire warms you", hu: "Tábortűz melegít téged", ro: "Focul de tabără te încălzește" },
    ];
    const example = pick(examples, rng);

    questions.push(
      createMCQ(
        "heat",
        "heat_transfer",
        q4(
          `${example.de} ist ein Beispiel für ___.`,
          `${example.en} is an example of ___.`,
          `${example.hu} a ___ egy példája.`,
          `${example.ro} este un exemplu de ___.`,
          lang
        ),
        q4("Strahlung", "Radiation", "Sugárzás", "Radiație", lang),
        [
          q4("Wärmeleitung", "Conduction", "Hővezetés", "Conductivitate termică", lang),
          q4("Konvektion", "Convection", "Konvekció", "Convecție", lang),
          q4("Evaporation", "Evaporation", "Párolgás", "Evaporare", lang),
        ],
        rng
      )
    );
  }

  // Q16-20: Which material conducts heat best?
  for (let i = 0; i < 5; i++) {
    const materials = [
      { de: "Kupfer", en: "Copper", hu: "Réz", ro: "Cupru" },
      { de: "Aluminium", en: "Aluminum", hu: "Alumínium", ro: "Aluminiu" },
      { de: "Eisen", en: "Iron", hu: "Vas", ro: "Fier" },
      { de: "Holz", en: "Wood", hu: "Fa", ro: "Lemn" },
      { de: "Kunststoff", en: "Plastic", hu: "Műanyag", ro: "Plastic" },
    ];
    const good = pick([materials[0], materials[1], materials[2]], rng);
    const bad = pick([materials[3], materials[4]], rng);

    questions.push(
      createMCQ(
        "heat",
        "heat_transfer",
        q4(
          `Welches Material leitet Wärme am besten?`,
          `Which material conducts heat best?`,
          `Melyik anyag vezeti a hőt a legjobban?`,
          `Care material conduce căldura cel mai bine?`,
          lang
        ),
        q4(good.de, good.en, good.hu, good.ro, lang),
        [
          q4(bad.de, bad.en, bad.hu, bad.ro, lang),
          q4(
            pick(
              materials.filter((m) => m !== good && m !== bad),
              rng
            ).de,
            pick(
              materials.filter((m) => m !== good && m !== bad),
              rng
            ).en,
            pick(
              materials.filter((m) => m !== good && m !== bad),
              rng
            ).hu,
            pick(
              materials.filter((m) => m !== good && m !== bad),
              rng
            ).ro,
            lang
          ),
          q4("Alle leiten gleich gut", "All conduct equally", "Mindegyik egyformán vezet", "Toate conduc în mod egal", lang),
        ],
        rng
      )
    );
  }

  // Q21-25: Insulating materials
  for (let i = 0; i < 5; i++) {
    const insulators = [
      { de: "Wolle", en: "Wool", hu: "Gyapjú", ro: "Lână" },
      { de: "Schaumstoff", en: "Foam", hu: "Hab", ro: "Spumă" },
      { de: "Luft", en: "Air", hu: "Levegő", ro: "Aer" },
    ];
    const insulator = pick(insulators, rng);

    questions.push(
      createMCQ(
        "heat",
        "heat_transfer",
        q4(
          `${q4(insulator.de, insulator.en, insulator.hu, insulator.ro, lang)} ist ein gutes Wärmeisolationsmaterial.`,
          `${q4(insulator.de, insulator.en, insulator.hu, insulator.ro, lang)} is a good heat insulation material.`,
          `${q4(insulator.de, insulator.en, insulator.hu, insulator.ro, lang)} jó hőszigetelő anyag.`,
          `${q4(insulator.de, insulator.en, insulator.hu, insulator.ro, lang)} este un material bun de izolare termică.`,
          lang
        ),
        q4("Wahr", "True", "Igaz", "Adevărat", lang),
        [q4("Falsch", "False", "Hamis", "Fals", lang)],
        rng
      )
    );
  }

  // Q26-30: Heat transfer in everyday situations
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

  // Q31-35: Three heat transfer types identification
  for (let i = 0; i < 5; i++) {
    const transfers = [
      {
        de: "Hände an offenes Lagerfeuer halten",
        en: "Hold hands near open campfire",
        hu: "Kezet tartani nyitott tábortűz közelében",
        ro: "Țineți mâinile lângă focul de tabără deschis",
        type: q4("Strahlung", "Radiation", "Sugárzás", "Radiație", lang),
      },
      {
        de: "Kochen mit einem Metallpfannenstiel",
        en: "Cook with a metal pan handle",
        hu: "Főzés egy fémes serpenyő fogantyúval",
        ro: "Gătit cu o mânere de tigaie din metal",
        type: q4("Wärmeleitung", "Conduction", "Hővezetés", "Conductivitate termică", lang),
      },
      {
        de: "Heißluft steigt im Ofen auf",
        en: "Hot air rises in oven",
        hu: "Meleg levegő emelkedik a sütőben",
        ro: "Aerul cald se ridică în cuptor",
        type: q4("Konvektion", "Convection", "Konvekció", "Convecție", lang),
      },
    ];

    const trans = pick(transfers, rng);
    const opts = shuffle(transfers.map((t) => t.type), rng).slice(0, 3);

    questions.push(
      createMCQ(
        "heat",
        "heat_transfer",
        q4(trans.de, trans.en, trans.hu, trans.ro, lang),
        trans.type,
        opts.filter((o) => o !== trans.type),
        rng
      )
    );
  }

  return questions.slice(0, 35);
}

function heatTransferTyping(lang: string, seed: number = 0): CurriculumQuestion[] {
  const questions: CurriculumQuestion[] = [];

  const typingPrompts = [
    {
      de: `Ein Metallöffel in heißer Suppe ist ein Beispiel für ___.`,
      en: `A metal spoon in hot soup is an example of ___.`,
      hu: `Egy fém kanál forró levesben a ___ egy példája.`,
      ro: `O lingură de metal în supa fierbinte este un exemplu de ___.`,
      answer: "Wärmeleitung",
    },
    {
      de: `Heiße Luft steigt auf — dies ist ___.`,
      en: `Hot air rises — this is ___.`,
      hu: `Meleg levegő emelkedik — ez ___.`,
      ro: `Aerul cald se ridică — aceasta este ___.`,
      answer: "Konvektion",
    },
    {
      de: `Die Sonne wärmt die Erde durch ___.`,
      en: `The sun warms Earth by ___.`,
      hu: `A nap a Földet ___ által melegíti.`,
      ro: `Soarele încălzește Pământul prin ___.`,
      answer: "Strahlung",
    },
    {
      de: `Das beste Material für Wärmeleitung ist ___.`,
      en: `The best material for heat conduction is ___.`,
      hu: `A hővezetéshez legjobb anyag a ___.`,
      ro: `Cel mai bun material pentru conductivitate termică este ___.`,
      answer: "Kupfer",
    },
    {
      de: `Das beste Material für Wärmeisolation ist ___.`,
      en: `The best material for heat insulation is ___.`,
      hu: `A hőszigeteléshez legjobb anyag a ___.`,
      ro: `Cel mai bun material pentru izolare termică este ___.`,
      answer: "Wolle",
    },
    {
      de: `Ein Radiator erwärmt einen Raum durch ___.`,
      en: `A radiator heats a room by ___.`,
      hu: `Egy radiátor a szobát ___ által melegíti.`,
      ro: `Un radiator încălzește o cameră prin ___.`,
      answer: "Konvektion",
    },
    {
      de: `Drei Arten der Wärmeübertragung sind ___, ___ und ___.`,
      en: `Three types of heat transfer are ___, ___ and ___.`,
      hu: `A hőátvitel három típusa a ___, ___ és ___.`,
      ro: `Trei tipuri de transfer de căldură sunt ___, ___ și ___.`,
      answer: "Wärmeleitung, Konvektion, Strahlung",
    },
    {
      de: `Holz ist ein schlechter Wärmeleiter und ein guter ___.`,
      en: `Wood is a poor heat conductor and a good ___.`,
      hu: `A fa rossz hővezető és jó ___.`,
      ro: `Lemnul este un conductor de căldură slab și un bun ___.`,
      answer: "Isolator",
    },
    {
      de: `Metalle leiten Wärme durch ___.`,
      en: `Metals conduct heat through ___.`,
      hu: `A fémek a hőt ___ vezeti.`,
      ro: `Metalele conduc căldura prin ___.`,
      answer: "Wärmeleitung",
    },
    {
      de: `Flüssigkeiten und Gase übertragen Wärme durch ___.`,
      en: `Liquids and gases transfer heat through ___.`,
      hu: `A folyadékok és gázok hőt ___ át.`,
      ro: `Lichidele și gazele transferă căldură prin ___.`,
      answer: "Konvektion",
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
// 14. STATES OF MATTER — Solid, liquid, gas
// ─────────────────────────────────────────────────────────────────

function statesOfMatterMCQ(lang: string, seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Q1-10: State identification
  const stateExamples = [
    {
      de: "Eis",
      en: "Ice",
      hu: "Jég",
      ro: "Gheață",
      state: q4("Fest", "Solid", "Szilárd", "Solid", lang),
    },
    {
      de: "Wasser",
      en: "Water",
      hu: "Víz",
      ro: "Apă",
      state: q4("Flüssig", "Liquid", "Folyadék", "Lichid", lang),
    },
    {
      de: "Wasserdampf",
      en: "Water vapor",
      hu: "Vízgőz",
      ro: "Vapori de apă",
      state: q4("Gasförmig", "Gas", "Gáz", "Gaz", lang),
    },
    {
      de: "Stahl",
      en: "Steel",
      hu: "Acél",
      ro: "Oțel",
      state: q4("Fest", "Solid", "Szilárd", "Solid", lang),
    },
    {
      de: "Luft",
      en: "Air",
      hu: "Levegő",
      ro: "Aer",
      state: q4("Gasförmig", "Gas", "Gáz", "Gaz", lang),
    },
  ];

  for (let i = 0; i < 10; i++) {
    const example = pick(stateExamples, rng);
    questions.push(
      createMCQ(
        "heat",
        "states_of_matter",
        q4(
          `Welcher Aggregatzustand hat ${example.de}?`,
          `What is the state of ${example.en}?`,
          `Milyen halmazállapota van a(z) ${example.hu}?`,
          `Care este starea materiei a ${example.ro}?`,
          lang
        ),
        example.state,
        [
          q4("Fest", "Solid", "Szilárd", "Solid", lang),
          q4("Flüssig", "Liquid", "Folyadék", "Lichid", lang),
          q4("Gasförmig", "Gas", "Gáz", "Gaz", lang),
        ].filter((s) => s !== example.state),
        rng
      )
    );
  }

  // Q11-20: Properties of states
  const properties = [
    {
      de: "Feststoffe haben eine feste Form und Volumen",
      en: "Solids have a fixed shape and volume",
      hu: "A szilárd anyagoknak rögzített alakjuk és térfogatuk van",
      ro: "Solidele au o formă și volum fixe",
      isTrue: true,
    },
    {
      de: "Flüssigkeiten können ihre Form ändern",
      en: "Liquids can change their shape",
      hu: "A folyadékok megváltoztathatják alakjukat",
      ro: "Lichidele pot să-și schimbe forma",
      isTrue: true,
    },
    {
      de: "Gase haben feste Form",
      en: "Gases have a fixed shape",
      hu: "A gázoknak rögzített alakjuk van",
      ro: "Gazele au o formă fixă",
      isTrue: false,
    },
    {
      de: "Feststoffe sind nicht verdichtbar",
      en: "Solids cannot be compressed",
      hu: "A szilárd anyagok nem tömöríthetőek",
      ro: "Solidele nu pot fi comprimate",
      isTrue: true,
    },
    {
      de: "Gase können stark verdichtet werden",
      en: "Gases can be compressed a lot",
      hu: "A gázok nagy mértékben tömöríthetőek",
      ro: "Gazele pot fi puternic comprimate",
      isTrue: true,
    },
  ];

  for (let i = 0; i < 10; i++) {
    const prop = pick(properties, rng);
    questions.push(
      createMCQ(
        "heat",
        "states_of_matter",
        q4(prop.de, prop.en, prop.hu, prop.ro, lang),
        prop.isTrue ? q4("Wahr", "True", "Igaz", "Adevărat", lang) : q4("Falsch", "False", "Hamis", "Fals", lang),
        [prop.isTrue ? q4("Falsch", "False", "Hamis", "Fals", lang) : q4("Wahr", "True", "Igaz", "Adevărat", lang)],
        rng
      )
    );
  }

  // Q21-35: Mixed questions
  for (let i = 0; i < 15; i++) {
    const questions_mixed = [
      {
        de: "Welcher Aggregatzustand ermöglicht es Wasser, in Glasgefäße zu fließen?",
        en: "Which state allows water to flow into glass containers?",
        hu: "Melyik halmazállapot teszi lehetővé, hogy a víz üvegtartályokba folyjon?",
        ro: "Care stare permite apei să curgă în recipiente din sticlă?",
        answer: q4("Flüssig", "Liquid", "Folyadék", "Lichid", lang),
      },
      {
        de: "In welchem Aggregatzustand hat Kohlendioxid keine feste Form?",
        en: "In which state does carbon dioxide have no fixed shape?",
        hu: "Milyen halmazállapotban nincs rögzített alakja a szén-dioxidnak?",
        ro: "În ce stare dioxidul de carbon nu are o formă fixă?",
        answer: q4("Gasförmig", "Gas", "Gáz", "Gaz", lang),
      },
    ];
    const q_mixed = pick(questions_mixed, rng);
    questions.push(
      createMCQ(
        "heat",
        "states_of_matter",
        q4(q_mixed.de, q_mixed.en, q_mixed.hu, q_mixed.ro, lang),
        q_mixed.answer,
        [
          q4("Fest", "Solid", "Szilárd", "Solid", lang),
          q4("Flüssig", "Liquid", "Folyadék", "Lichid", lang),
          q4("Gasförmig", "Gas", "Gáz", "Gaz", lang),
        ].filter((s) => s !== q_mixed.answer),
        rng
      )
    );
  }

  return questions.slice(0, 35);
}

function statesOfMatterTyping(lang: string, seed: number = 0): CurriculumQuestion[] {
  const questions: CurriculumQuestion[] = [];

  const typingPrompts = [
    {
      de: `Der Aggregatzustand, in dem Eis existiert, ist ___.`,
      en: `The state of matter in which ice exists is ___.`,
      hu: `Az a halmazállapot, amelyben a jég létezik, ___.`,
      ro: `Starea materiei în care există gheața este ___.`,
      answer: "Fest",
    },
    {
      de: `Der Aggregatzustand, in dem Wasser existiert, ist ___.`,
      en: `The state of matter in which water exists is ___.`,
      hu: `Az a halmazállapot, amelyben a víz létezik, ___.`,
      ro: `Starea materiei în care există apa este ___.`,
      answer: "Flüssig",
    },
    {
      de: `Der Aggregatzustand, in dem Luft existiert, ist ___.`,
      en: `The state of matter in which air exists is ___.`,
      hu: `Az a halmazállapot, amelyben a levegő létezik, ___.`,
      ro: `Starea materiei în care există aerul este ___.`,
      answer: "Gasförmig",
    },
    {
      de: `Feststoffe haben eine ___ Form.`,
      en: `Solids have a ___ shape.`,
      hu: `A szilárd anyagoknak ___ alakjuk van.`,
      ro: `Solidele au o formă ___.`,
      answer: "feste",
    },
    {
      de: `Gase können ihre ___ völlig ändern.`,
      en: `Gases can completely change their ___.`,
      hu: `A gázok teljesen megváltoztathatják a ___.`,
      ro: `Gazele pot schimba complet ___.`,
      answer: "Form",
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
// 15. MELTING & BOILING — Phase transitions
// ─────────────────────────────────────────────────────────────────

function meltingBoilingMCQ(lang: string, seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Q1-10: Melting and boiling definitions
  const meltingBoilingData = [
    {
      de: "Eis schmilzt zu Wasser",
      en: "Ice melts into water",
      hu: "A jég olvadva vízé válik",
      ro: "Gheața se topește în apă",
      process: q4("Schmelzen", "Melting", "Olvadás", "Topire", lang),
    },
    {
      de: "Wasser kocht zu Dampf",
      en: "Water boils into steam",
      hu: "A víz forr gőzzé",
      ro: "Apa fierbe în abur",
      process: q4("Sieden", "Boiling", "Forrás", "Fierbere", lang),
    },
    {
      de: "Schnee schmilzt bei Wärmezufuhr",
      en: "Snow melts when heated",
      hu: "A hó olvad, amikor melegítik",
      ro: "Zăpada se topește atunci când este încălzită",
      process: q4("Schmelzen", "Melting", "Olvadás", "Topire", lang),
    },
    {
      de: "Wasser verdampft zu Gas",
      en: "Water evaporates into gas",
      hu: "A víz párolog gázzá",
      ro: "Apa se evaporă în gaz",
      process: q4("Verdampfung", "Evaporation", "Párolgás", "Evaporare", lang),
    },
  ];

  for (let i = 0; i < 10; i++) {
    const data = pick(meltingBoilingData, rng);
    questions.push(
      createMCQ(
        "heat",
        "melting_boiling",
        q4(data.de, data.en, data.hu, data.ro, lang),
        data.process,
        [
          q4("Schmelzen", "Melting", "Olvadás", "Topire", lang),
          q4("Sieden", "Boiling", "Forrás", "Fierbere", lang),
          q4("Verdampfung", "Evaporation", "Párolgás", "Evaporare", lang),
        ].filter((p) => p !== data.process),
        rng
      )
    );
  }

  // Q11-25: Temperature and phase transitions
  for (let i = 0; i < 15; i++) {
    const transitions = [
      {
        de: "Bei 0°C schmilzt Eis zu Wasser",
        en: "At 0°C ice melts into water",
        hu: "0°C-on a jég olvadva vízé válik",
        ro: "La 0°C gheața se topește în apă",
        answer: q4("Schmelzpunkt", "Melting point", "Olvadáspont", "Punct de topire", lang),
      },
      {
        de: "Bei 100°C kocht Wasser zu Dampf",
        en: "At 100°C water boils into steam",
        hu: "100°C-on a víz forr gőzzé",
        ro: "La 100°C apa fierbe în abur",
        answer: q4("Siedepunkt", "Boiling point", "Forráspont", "Punct de fierbere", lang),
      },
    ];
    const trans = pick(transitions, rng);
    questions.push(
      createMCQ(
        "heat",
        "melting_boiling",
        q4(trans.de, trans.en, trans.hu, trans.ro, lang),
        trans.answer,
        [
          q4("Schmelzpunkt", "Melting point", "Olvadáspont", "Punct de topire", lang),
          q4("Siedepunkt", "Boiling point", "Forráspont", "Punct de fierbere", lang),
          q4("Verdampfungspunkt", "Evaporation point", "Párologáspont", "Punct de evaporare", lang),
        ].filter((a) => a !== trans.answer),
        rng
      )
    );
  }

  // Q26-35: Energy and phase changes
  for (let i = 0; i < 10; i++) {
    const energyStatements = [
      {
        de: "Beim Schmelzen wird Wärmeenergie benötigt",
        en: "Melting requires heat energy",
        hu: "Az olvadáshoz hőenergia szükséges",
        ro: "Topirea necesită energie termică",
        isTrue: true,
      },
      {
        de: "Beim Schmelzen wird Wärmeenergie freigesetzt",
        en: "Melting releases heat energy",
        hu: "Az olvadás hőenergiát felszabadít",
        ro: "Topirea eliberează energie termică",
        isTrue: false,
      },
      {
        de: "Sieden ist schneller als Verdampfung",
        en: "Boiling is faster than evaporation",
        hu: "A forrás gyorsabb, mint a párolgás",
        ro: "Fierberea este mai rapidă decât evaporarea",
        isTrue: true,
      },
    ];
    const stmt = pick(energyStatements, rng);
    questions.push(
      createMCQ(
        "heat",
        "melting_boiling",
        q4(stmt.de, stmt.en, stmt.hu, stmt.ro, lang),
        stmt.isTrue ? q4("Wahr", "True", "Igaz", "Adevărat", lang) : q4("Falsch", "False", "Hamis", "Fals", lang),
        [stmt.isTrue ? q4("Falsch", "False", "Hamis", "Fals", lang) : q4("Wahr", "True", "Igaz", "Adevărat", lang)],
        rng
      )
    );
  }

  return questions.slice(0, 35);
}

function meltingBoilingTyping(lang: string, seed: number = 0): CurriculumQuestion[] {
  const questions: CurriculumQuestion[] = [];

  const typingPrompts = [
    {
      de: `Der Prozess, bei dem Eis zu Wasser wird, heißt ___.`,
      en: `The process where ice becomes water is called ___.`,
      hu: `Az a folyamat, amelyben a jég vízé válik, ___.`,
      ro: `Procesul în care gheața devine apă se numește ___.`,
      answer: "Schmelzen",
    },
    {
      de: `Der Prozess, bei dem Wasser zu Dampf wird, heißt ___.`,
      en: `The process where water becomes steam is called ___.`,
      hu: `Az a folyamat, amelyben a víz gőzzé válik, ___.`,
      ro: `Procesul în care apa devine abur se numește ___.`,
      answer: "Sieden",
    },
    {
      de: `Eis schmilzt bei ___ °C.`,
      en: `Ice melts at ___ °C.`,
      hu: `A jég ___ °C-on olvad meg.`,
      ro: `Gheața se topește la ___ °C.`,
      answer: "0",
    },
    {
      de: `Wasser kocht bei ___ °C.`,
      en: `Water boils at ___ °C.`,
      hu: `A víz ___ °C-on forr fel.`,
      ro: `Apa fierbe la ___ °C.`,
      answer: "100",
    },
    {
      de: `Beim Schmelzen und Sieden wird Wärmeenergie ___.`,
      en: `During melting and boiling, heat energy is ___.`,
      hu: `Az olvadás és forrás során a hőenergia ___.`,
      ro: `În timpul topirii și fierberii, energia termică este ___.`,
      answer: "benötigt",
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
// PUBLIC EXPORTS
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
