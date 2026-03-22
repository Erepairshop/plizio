import {
  createMCQ,
  createTyping,
  mulberry32,
  pick,
  shuffle,
  type CurriculumQuestion,
} from "./physikCurriculum5";

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
        q4(
          `Wasser gefriert bei 0°C.`,
          `Water freezes at 0°C.`,
          `A víz 0 fokon fagy meg.`,
          `Apa îngheață la 0°C.`,
          lang
        )
      )
    );
  }

  // Q6-10: Boiling point identification
  for (let i = 0; i < 5; i++) {
    const options = ["100°C", "50°C", "37°C", "0°C", "-100°C"];
    const shuffled = shuffle(options, rng);
    questions.push(
      createMCQ(
        q4(
          `Bei welcher Temperatur kocht Wasser auf Meereshöhe?`,
          `At what temperature does water boil at sea level?`,
          `Hány fokon forr fel a víz a tengerszinten?`,
          `La ce temperatură fierbe apa la nivelul mării?`,
          lang
        ),
        "100°C",
        shuffled.filter((o) => o !== "100°C").slice(0, 3),
        q4(
          `Wasser kocht bei 100°C.`,
          `Water boils at 100°C.`,
          `A víz 100 fokon forr fel.`,
          `Apa fierbe la 100°C.`,
          lang
        )
      )
    );
  }

  // Q11-15: Body temperature
  for (let i = 0; i < 5; i++) {
    const temps = ["37°C", "36.5°C", "39°C", "32°C", "40°C"];
    const shuffled = shuffle(temps, rng);
    questions.push(
      createMCQ(
        q4(
          `Wie hoch ist die normale menschliche Körpertemperatur?`,
          `What is normal human body temperature?`,
          `Mi az emberi test normál hőmérséklete?`,
          `Care este temperatura normală a corpului uman?`,
          lang
        ),
        "37°C",
        shuffled.filter((o) => o !== "37°C").slice(0, 3),
        q4(
          `Normal körpertemperatur ist etwa 37°C.`,
          `Normal body temperature is about 37°C.`,
          `A normál testhőmérséklet körülbelül 37°C.`,
          `Temperatura normală a corpului este de aproximativ 37°C.`,
          lang
        )
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
        q4(
          `${pair.c}°C entspricht welcher Fahrenheit-Temperatur?`,
          `${pair.c}°C is equivalent to which Fahrenheit temperature?`,
          `${pair.c}°C melyik Fahrenheit-hőmérsékletnek felel meg?`,
          `${pair.c}°C este echivalent cu ce temperatură Fahrenheit?`,
          lang
        ),
        correct,
        shuffled,
        q4(
          `${pair.c}°C = ${pair.f}°F`,
          `${pair.c}°C = ${pair.f}°F`,
          `${pair.c}°C = ${pair.f}°F`,
          `${pair.c}°C = ${pair.f}°F`,
          lang
        )
      )
    );
  }

  // Q21-25: Absolute zero concept
  for (let i = 0; i < 5; i++) {
    const options = ["-273°C", "0°C", "0K", "-100°C", "-459°F"];
    const shuffled = shuffle(options, rng);
    questions.push(
      createMCQ(
        q4(
          `Was ist der absolute Nullpunkt?`,
          `What is absolute zero?`,
          `Mi az abszolút nulla?`,
          `Ce este zero absolut?`,
          lang
        ),
        "-273°C",
        shuffled.filter((o) => o !== "-273°C").slice(0, 3),
        q4(
          `Der absolute Nullpunkt ist -273°C oder 0 Kelvin.`,
          `Absolute zero is -273°C or 0 Kelvin.`,
          `Az abszolút nulla -273°C vagy 0 Kelvin.`,
          `Zero absolut este -273°C sau 0 Kelvin.`,
          lang
        )
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
        q4(
          `Welche Aussage trifft auf ${scale} zu?`,
          `Which statement applies to ${scale}?`,
          `Melyik kijelentés vonatkozik a ${scale}-re?`,
          `Care declarație se aplică la ${scale}?`,
          lang
        ),
        facts[scale],
        shuffle(options.filter((o) => o !== facts[scale]), rng).slice(0, 3),
        facts[scale]
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
        question,
        scen.answer,
        options.filter((o) => o !== scen.answer),
        scen.answer
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
        question,
        prompt.answer,
        q4(
          `Korrekte Antwort: ${prompt.answer}`,
          `Correct answer: ${prompt.answer}`,
          `Helyes válasz: ${prompt.answer}`,
          `Răspuns corect: ${prompt.answer}`,
          lang
        )
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
        q4("Wärme wird durch direkten Kontakt übertragen.", "Heat is transferred by direct contact.", "A hő közvetlen érintkezéssel továbbítódik.", "Căldura se transferă prin contact direct.", lang)
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
        q4("Wärme wird durch Bewegung von Flüssigkeiten oder Gasen übertragen.", "Heat is transferred by movement of liquids or gases.", "A hő folyadékok vagy gázok mozgásával továbbítódik.", "Căldura se transferă prin mișcarea lichidelor sau gazelor.", lang)
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
        q4("Wärme wird durch elektromagnetische Strahlung ohne Materie übertragen.", "Heat is transferred by electromagnetic radiation without matter.", "A hő elektromágneses sugárzás által anyag nélkül továbbítódik.", "Căldura se transferă prin radiație electromagnetică fără materie.", lang)
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
        q4("Metalle wie Kupfer leiten Wärme sehr gut.", "Metals like copper conduct heat very well.", "A fémek, például a réz, nagyon jól vezetik a hőt.", "Metalele, cum ar fi cuprul, conduc foarte bine căldura.", lang)
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
        q4(
          `${q4(insulator.de, insulator.en, insulator.hu, insulator.ro, lang)} ist ein gutes Wärmeisolationsmaterial.`,
          `${q4(insulator.de, insulator.en, insulator.hu, insulator.ro, lang)} is a good heat insulation material.`,
          `${q4(insulator.de, insulator.en, insulator.hu, insulator.ro, lang)} jó hőszigetelő anyag.`,
          `${q4(insulator.de, insulator.en, insulator.hu, insulator.ro, lang)} este un material bun de izolare termică.`,
          lang
        ),
        q4("Wahr", "True", "Igaz", "Adevărat", lang),
        [q4("Falsch", "False", "Hamis", "Fals", lang)],
        q4("Isoliermaterialien haben schlechte Wärmeleitung.", "Insulating materials have poor heat conduction.", "Az szigetelőanyagok rossz hővezető képességgel rendelkeznek.", "Materialele izolatoare au conductivitate termică slabă.", lang)
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
    questions.push(
      createMCQ(
        q4(sit.de, sit.en, sit.hu, sit.ro, lang),
        sit.answer,
        [
          q4("Strahlung", "Radiation", "Sugárzás", "Radiație", lang),
          q4(
            sit.de.includes("Radiator")
              ? "Wärmeleitung"
              : sit.de.includes("nicht")
                ? "Leitfähigkeit"
                : "Verdampfung",
            sit.en.includes("radiator")
              ? "Conduction"
              : sit.en.includes("not")
                ? "Conductivity"
                : "Evaporation",
            sit.hu.includes("radiátor")
              ? "Hővezetés"
              : sit.hu.includes("nem")
                ? "Vezetőképesség"
                : "Párolgás",
            sit.ro.includes("radiator")
              ? "Conductivitate termică"
              : sit.ro.includes("nu")
                ? "Conductivitate"
                : "Evaporare",
            lang
          ),
        ],
        sit.answer
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
        q4(trans.de, trans.en, trans.hu, trans.ro, lang),
        trans.type,
        opts.filter((o) => o !== trans.type),
        trans.type
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
      answer: "Wärmeleitung oder Konduktion",
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
      answer: "Strahlung oder Radiáció",
    },
    {
      de: `Das beste Material für Wärmeleitung ist ___.`,
      en: `The best material for heat conduction is ___.`,
      hu: `A hővezetéshez legjobb anyag a ___.`,
      ro: `Cel mai bun material pentru conductivitate termică este ___.`,
      answer: "Kupfer oder Metall",
    },
    {
      de: `Das beste Material für Wärmeisolation ist ___.`,
      en: `The best material for heat insulation is ___.`,
      hu: `A hőszigeteléshez legjobb anyag a ___.`,
      ro: `Cel mai bun material pentru izolare termică este ___.`,
      answer: "Wolle oder Luft",
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
      answer: "Isolator oder Isolierstoff",
    },
    {
      de: `Ein Lagerfeuer wärmt dich durch ___.`,
      en: `A campfire warms you by ___.`,
      hu: `Egy tábortűz téged ___ által melegít.`,
      ro: `Un foc de tabără te încălzește prin ___.`,
      answer: "Strahlung",
    },
    {
      de: `Meeresbrisen entstehen durch ___.`,
      en: `Sea breezes form by ___.`,
      hu: `Tengeri szellők ___ által keletkeznek.`,
      ro: `Briza marină se formează prin ___.`,
      answer: "Konvektion",
    },
  ];

  for (const prompt of typingPrompts) {
    questions.push(
      createTyping(
        q4(prompt.de, prompt.en, prompt.hu, prompt.ro, lang),
        prompt.answer.split(" oder ")[0],
        q4(
          `Korrekt: ${prompt.answer}`,
          `Correct: ${prompt.answer}`,
          `Helyes: ${prompt.answer}`,
          `Corect: ${prompt.answer}`,
          lang
        )
      )
    );
  }

  return questions;
}

// ─────────────────────────────────────────────────────────────────
// 14. STATES OF MATTER — Solid, liquid, gas properties
// ─────────────────────────────────────────────────────────────────

function statesOfMatterMCQ(lang: string, seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Q1-5: Fixed shape and volume
  for (let i = 0; i < 5; i++) {
    const states = [
      { de: "fest", en: "solid", hu: "szilárd", ro: "solid" },
      { de: "flüssig", en: "liquid", hu: "folyékony", ro: "lichid" },
      { de: "gasförmig", en: "gas", hu: "gáz", ro: "gaz" },
    ];
    const state = pick(states, rng);
    const hasFixedShape = state.en === "solid";

    questions.push(
      createMCQ(
        q4(
          `Welcher Aggregatzustand hat eine feste Form?`,
          `Which state of matter has a fixed shape?`,
          `Melyik halmazállapotnak van rögzített alakja?`,
          `Care stare a materiei are o formă fixă?`,
          lang
        ),
        q4("Fest", "Solid", "Szilárd", "Solid", lang),
        [
          q4("Flüssig", "Liquid", "Folyékony", "Lichid", lang),
          q4("Gasförmig", "Gas", "Gáz", "Gaz", lang),
          q4("Plasma", "Plasma", "Plazma", "Plasmă", lang),
        ],
        q4("Festkörper behalten ihre Form.", "Solids maintain their shape.", "A szilárd anyagok megőrzik alakjukat.", "Solidele își păstrează forma.", lang)
      )
    );
  }

  // Q6-10: Fixed volume
  for (let i = 0; i < 5; i++) {
    questions.push(
      createMCQ(
        q4(
          `Welcher Aggregatzustand hat ein festes Volumen?`,
          `Which state of matter has a fixed volume?`,
          `Melyik halmazállapotnak van rögzített térfogata?`,
          `Care stare a materiei are un volum fix?`,
          lang
        ),
        q4("Fest und Flüssig", "Solid and Liquid", "Szilárd és folyékony", "Solid și lichid", lang),
        [
          q4("Nur Fest", "Only Solid", "Csak szilárd", "Doar solid", lang),
          q4("Gasförmig", "Gas", "Gáz", "Gaz", lang),
          q4("Alle Zustände", "All states", "Minden állapot", "Toate stările", lang),
        ],
        q4("Festkörper und Flüssigkeiten haben feste Volumen.", "Solids and liquids have fixed volumes.", "A szilárd anyagok és folyadékok rögzített térfogattal rendelkeznek.", "Solidele și lichidele au volume fixe.", lang)
      )
    );
  }

  // Q11-15: Compressibility
  for (let i = 0; i < 5; i++) {
    const options = [
      q4("Gasförmig", "Gas", "Gáz", "Gaz", lang),
      q4("Fest", "Solid", "Szilárd", "Solid", lang),
      q4("Flüssig", "Liquid", "Folyékony", "Lichid", lang),
    ];
    const shuffled = shuffle(options, rng);

    questions.push(
      createMCQ(
        q4(
          `Welcher Aggregatzustand ist leicht zu komprimieren?`,
          `Which state of matter is easily compressed?`,
          `Melyik halmazállapot könnyen összetömöríthető?`,
          `Care stare a materiei este ușor de comprimat?`,
          lang
        ),
        q4("Gasförmig", "Gas", "Gáz", "Gaz", lang),
        shuffled.filter((o) => o !== q4("Gasförmig", "Gas", "Gáz", "Gaz", lang)),
        q4("Gase können stark komprimiert werden.", "Gases can be highly compressed.", "A gázok erősen összenyomhatók.", "Gazele pot fi comprimate puternic.", lang)
      )
    );
  }

  // Q16-20: Examples of states
  const examples = [
    { de: "Eis", en: "Ice", hu: "Jég", ro: "Gheață", state: "Fest" },
    { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă", state: "Flüssig" },
    { de: "Dampf", en: "Steam", hu: "Gőz", ro: "Abur", state: "Gasförmig" },
    { de: "Eisen", en: "Iron", hu: "Vas", ro: "Fier", state: "Fest" },
    { de: "Öl", en: "Oil", hu: "Olaj", ro: "Ulei", state: "Flüssig" },
    { de: "Sauerstoff", en: "Oxygen", hu: "Oxigén", ro: "Oxigen", state: "Gasförmig" },
    { de: "Holz", en: "Wood", hu: "Fa", ro: "Lemn", state: "Fest" },
    { de: "Milch", en: "Milk", hu: "Tej", ro: "Lapte", state: "Flüssig" },
  ];

  for (let i = 0; i < 5; i++) {
    const example = pick(examples, rng);
    const stateNames = [
      q4("Fest", "Solid", "Szilárd", "Solid", lang),
      q4("Flüssig", "Liquid", "Folyékony", "Lichid", lang),
      q4("Gasförmig", "Gas", "Gáz", "Gaz", lang),
    ];
    const correct =
      example.state === "Fest"
        ? q4("Fest", "Solid", "Szilárd", "Solid", lang)
        : example.state === "Flüssig"
          ? q4("Flüssig", "Liquid", "Folyékony", "Lichid", lang)
          : q4("Gasförmig", "Gas", "Gáz", "Gaz", lang);

    questions.push(
      createMCQ(
        q4(
          `Was ist der Aggregatzustand von ${example.de}?`,
          `What is the state of matter of ${example.en}?`,
          `Mi az ${example.hu} halmazállapota?`,
          `Care este starea materiei din ${example.ro}?`,
          lang
        ),
        correct,
        shuffle(stateNames.filter((s) => s !== correct), rng).slice(0, 3),
        correct
      )
    );
  }

  // Q21-25: Particle arrangement
  for (let i = 0; i < 5; i++) {
    const particles = [
      {
        de: "Fest",
        en: "Solid",
        hu: "Szilárd",
        ro: "Solid",
        desc: q4(
          "Teilchen sind eng beieinander und in fester Anordnung",
          "Particles are tightly packed and in fixed arrangement",
          "A részecskék szorosan összeférfi és rögzített elrendezésben vannak",
          "Particulele sunt strâns amestecate și în aranjament fix",
          lang
        ),
      },
      {
        de: "Flüssig",
        en: "Liquid",
        hu: "Folyékony",
        ro: "Lichid",
        desc: q4(
          "Teilchen sind nah beieinander, aber können sich bewegen",
          "Particles are close together but can move",
          "A részecskék közel vannak egymáshoz, de mozoghatnak",
          "Particulele sunt apropiate dar pot să se miște",
          lang
        ),
      },
      {
        de: "Gasförmig",
        en: "Gas",
        hu: "Gáz",
        ro: "Gaz",
        desc: q4(
          "Teilchen sind weit voneinander entfernt und bewegen sich schnell",
          "Particles are far apart and move quickly",
          "A részecskék messze vannak egymástól és gyorsan mozognak",
          "Particulele sunt departe și se mișcă repede",
          lang
        ),
      },
    ];

    const particle = pick(particles, rng);
    const correct = q4(particle.de, particle.en, particle.hu, particle.ro, lang);

    questions.push(
      createMCQ(
        particle.desc,
        correct,
        shuffle(
          particles
            .filter((p) => p !== particle)
            .map((p) => q4(p.de, p.en, p.hu, p.ro, lang)),
          rng
        ).slice(0, 3),
        correct
      )
    );
  }

  // Q26-30: Phase transitions
  for (let i = 0; i < 5; i++) {
    const transitions = [
      {
        de: "Eis schmilzt",
        en: "Ice melts",
        hu: "A jég olvad",
        ro: "Gheața se topește",
        from: "Fest",
        to: "Flüssig",
      },
      {
        de: "Wasser kocht",
        en: "Water boils",
        hu: "A víz forr",
        ro: "Apa fierbe",
        from: "Flüssig",
        to: "Gasförmig",
      },
      {
        de: "Dampf kondensiert",
        en: "Steam condenses",
        hu: "A gőz kondenzálódik",
        ro: "Aburul se condensează",
        from: "Gasförmig",
        to: "Flüssig",
      },
    ];

    const trans = pick(transitions, rng);

    questions.push(
      createMCQ(
        q4(trans.de, trans.en, trans.hu, trans.ro, lang),
        q4(
          `von ${trans.from} zu ${trans.to}`,
          `from ${trans.from} to ${trans.to}`,
          `${trans.from}-ből ${trans.to}-hez`,
          `de la ${trans.from} la ${trans.to}`,
          lang
        ),
        [
          q4(
            `von ${trans.to} zu ${trans.from}`,
            `from ${trans.to} to ${trans.from}`,
            `${trans.to}-ből ${trans.from}-hez`,
            `de la ${trans.to} la ${trans.from}`,
            lang
          ),
          q4("Keine Veränderung", "No change", "Nincs változás", "Nicio schimbare", lang),
        ],
        q4(
          `von ${trans.from} zu ${trans.to}`,
          `from ${trans.from} to ${trans.to}`,
          `${trans.from}-ből ${trans.to}-hez`,
          `de la ${trans.from} la ${trans.to}`,
          lang
        )
      )
    );
  }

  // Q31-35: Properties identification
  for (let i = 0; i < 5; i++) {
    const props = [
      {
        de: "hat feste Form",
        en: "has fixed shape",
        hu: "rögzített alakja van",
        ro: "are formă fixă",
        state: "Fest",
      },
      {
        de: "passt sich dem Behälter an",
        en: "adapts to container shape",
        hu: "az edény alakjához igazodik",
        ro: "se adaptează la forma recipientului",
        state: "Flüssig",
      },
      {
        de: "füllt den gesamten Raum aus",
        en: "fills entire space",
        hu: "kitölti a teljes teret",
        ro: "umple spațiul întreg",
        state: "Gasförmig",
      },
    ];

    const prop = pick(props, rng);
    const stateOptions = [
      q4("Fest", "Solid", "Szilárd", "Solid", lang),
      q4("Flüssig", "Liquid", "Folyékony", "Lichid", lang),
      q4("Gasförmig", "Gas", "Gáz", "Gaz", lang),
    ];

    questions.push(
      createMCQ(
        q4(`Ein Stoff, der ${prop.de}, ist ___`, `A substance that ${prop.en} is ___`, `Egy anyag, amely ${prop.hu}, a ___ halmazállapotban van`, `O substanță care ${prop.ro} este ___`, lang),
        q4(prop.state === "Fest" ? "Fest" : prop.state === "Flüssig" ? "Flüssig" : "Gasförmig", prop.state === "Fest" ? "Solid" : prop.state === "Flüssig" ? "Liquid" : "Gas", prop.state === "Fest" ? "Szilárd" : prop.state === "Flüssig" ? "Folyékony" : "Gáz", prop.state === "Fest" ? "Solid" : prop.state === "Flüssig" ? "Lichid" : "Gaz", lang),
        shuffle(
          stateOptions.filter(
            (s) =>
              s !== (prop.state === "Fest" ? q4("Fest", "Solid", "Szilárd", "Solid", lang) : prop.state === "Flüssig" ? q4("Flüssig", "Liquid", "Folyékony", "Lichid", lang) : q4("Gasförmig", "Gas", "Gáz", "Gaz", lang))
          ),
          rng
        ),
        q4(prop.state === "Fest" ? "Fest" : prop.state === "Flüssig" ? "Flüssig" : "Gasförmig", prop.state === "Fest" ? "Solid" : prop.state === "Flüssig" ? "Liquid" : "Gas", prop.state === "Fest" ? "Szilárd" : prop.state === "Flüssig" ? "Folyékony" : "Gáz", prop.state === "Fest" ? "Solid" : prop.state === "Flüssig" ? "Lichid" : "Gaz", lang)
      )
    );
  }

  return questions.slice(0, 35);
}

function statesOfMatterTyping(lang: string, seed: number = 0): CurriculumQuestion[] {
  const questions: CurriculumQuestion[] = [];

  const typingPrompts = [
    {
      de: `Ein Festkörper hat eine ___ Form.`,
      en: `A solid has a ___ shape.`,
      hu: `A szilárd anyagnak van egy ___ alakja.`,
      ro: `Un solid are o formă ___ .`,
      answer: "feste oder rögzített",
    },
    {
      de: `Ein Stoff mit drei Aggregatzuständen sind fest, ___ und gasförmig.`,
      en: `A substance with three states of matter are solid, ___ and gas.`,
      hu: `Egy anyag három halmazállapota: szilárd, ___ és gáz.`,
      ro: `O substanță cu trei stări de materie sunt solid, ___ și gaz.`,
      answer: "flüssig oder folyékony",
    },
    {
      de: `Gasförmige Stoffe sind leicht zu ___.`,
      en: `Gaseous substances are easy to ___.`,
      hu: `A gáz halmazállapotú anyagok könnyen ___.`,
      ro: `Substanțele gazoase sunt ușor de ___.`,
      answer: "komprimieren oder samendrukken",
    },
    {
      de: `Eis ist Wasser im ___ Aggregatzustand.`,
      en: `Ice is water in the ___ state of matter.`,
      hu: `A jég víz a ___ halmazállapotban.`,
      ro: `Gheața este apă în starea ___ a materiei.`,
      answer: "festen oder szilárd",
    },
    {
      de: `Dampf ist Wasser im ___ Aggregatzustand.`,
      en: `Steam is water in the ___ state of matter.`,
      hu: `A gőz víz a ___ halmazállapotban.`,
      ro: `Aburul este apă în starea ___ a materiei.`,
      answer: "gasförmigen oder gáz",
    },
    {
      de: `Die drei Aggregatzustände sind ___, ___ und ___.`,
      en: `The three states of matter are ___, ___ and ___.`,
      hu: `A három halmazállapot a ___, ___ és ___.`,
      ro: `Cele trei stări ale materiei sunt ___, ___ și ___.`,
      answer: "fest, flüssig, gasförmig",
    },
    {
      de: `Teilchen in einem Festkörper sind ___.`,
      en: `Particles in a solid are ___.`,
      hu: `A szilárd anyag részecskéi ___.`,
      ro: `Particulele dintr-un solid sunt ___.`,
      answer: "eng beisammen oder szorosan összeérfik",
    },
    {
      de: `Teilchen in einem Gas sind ___.`,
      en: `Particles in a gas are ___.`,
      hu: `A gázban lévő részecskék ___.`,
      ro: `Particulele dintr-un gaz sunt ___.`,
      answer: "weit auseinander oder messze egymástól",
    },
    {
      de: `Der Prozess, wenn Eis zu Wasser wird, heißt ___.`,
      en: `The process when ice turns into water is called ___.`,
      hu: `A folyamat, amikor jég vá vízé válik, ___.`,
      ro: `Procesul în care gheața se transformă în apă se numește ___.`,
      answer: "Schmelzen oder Smeltproces",
    },
    {
      de: `Der Prozess, wenn Wasser zu Dampf wird, heißt ___.`,
      en: `The process when water turns into steam is called ___.`,
      hu: `A folyamat, amikor víz gőzzé válik, ___.`,
      ro: `Procesul în care apa se transformă în abur se numește ___.`,
      answer: "Verdampfung oder Sieden",
    },
  ];

  for (const prompt of typingPrompts) {
    questions.push(
      createTyping(
        q4(prompt.de, prompt.en, prompt.hu, prompt.ro, lang),
        prompt.answer.split(" oder ")[0],
        q4(
          `Korrekt: ${prompt.answer}`,
          `Correct: ${prompt.answer}`,
          `Helyes: ${prompt.answer}`,
          `Corect: ${prompt.answer}`,
          lang
        )
      )
    );
  }

  return questions;
}

// ─────────────────────────────────────────────────────────────────
// 15. MELTING, BOILING, FREEZING, CONDENSATION
// ─────────────────────────────────────────────────────────────────

function meltingBoilingMCQ(lang: string, seed: number = 0): CurriculumQuestion[] {
  const rng = mulberry32(seed);
  const questions: CurriculumQuestion[] = [];

  // Q1-5: Melting definition
  for (let i = 0; i < 5; i++) {
    const options = [
      q4("Fest wird zu Flüssig", "Solid becomes Liquid", "Szilárd folyékony lesz", "Solid devine Lichid", lang),
      q4("Flüssig wird zu Gasförmig", "Liquid becomes Gas", "Folyékony gáz lesz", "Lichid devine Gaz", lang),
      q4("Gasförmig wird zu Flüssig", "Gas becomes Liquid", "Gáz folyékony lesz", "Gaz devine Lichid", lang),
    ];
    const shuffled = shuffle(options, rng);

    questions.push(
      createMCQ(
        q4(
          `Was ist Schmelzen?`,
          `What is melting?`,
          `Mi az olvadás?`,
          `Ce este topirea?`,
          lang
        ),
        q4("Fest wird zu Flüssig", "Solid becomes Liquid", "Szilárd folyékony lesz", "Solid devine Lichid", lang),
        shuffled.filter((o) => o !== q4("Fest wird zu Flüssig", "Solid becomes Liquid", "Szilárd folyékony lesz", "Solid devine Lichid", lang)),
        q4("Schmelzen ist die Umwandlung von Fest zu Flüssig.", "Melting is the conversion from solid to liquid.", "Az olvadás a szilárd anyag folyadékká alakulása.", "Topirea este transformarea din solid în lichid.", lang)
      )
    );
  }

  // Q6-10: Boiling definition
  for (let i = 0; i < 5; i++) {
    const options = [
      q4("Flüssig wird zu Gasförmig", "Liquid becomes Gas", "Folyékony gáz lesz", "Lichid devine Gaz", lang),
      q4("Fest wird zu Flüssig", "Solid becomes Liquid", "Szilárd folyékony lesz", "Solid devine Lichid", lang),
      q4("Gasförmig wird zu Flüssig", "Gas becomes Liquid", "Gáz folyékony lesz", "Gaz devine Lichid", lang),
    ];
    const shuffled = shuffle(options, rng);

    questions.push(
      createMCQ(
        q4(
          `Was ist Sieden/Kochen?`,
          `What is boiling?`,
          `Mi a forráls?`,
          `Ce este fierberea?`,
          lang
        ),
        q4("Flüssig wird zu Gasförmig", "Liquid becomes Gas", "Folyékony gáz lesz", "Lichid devine Gaz", lang),
        shuffled.filter((o) => o !== q4("Flüssig wird zu Gasförmig", "Liquid becomes Gas", "Folyékony gáz lesz", "Lichid devine Gaz", lang)),
        q4("Sieden ist die Umwandlung von Flüssig zu Gas.", "Boiling is the conversion from liquid to gas.", "A forráls a folyadék gázzá alakulása.", "Fierberea este transformarea din lichid în gaz.", lang)
      )
    );
  }

  // Q11-15: Freezing definition
  for (let i = 0; i < 5; i++) {
    const options = [
      q4("Flüssig wird zu Fest", "Liquid becomes Solid", "Folyékony szilárd lesz", "Lichid devine Solid", lang),
      q4("Fest wird zu Flüssig", "Solid becomes Liquid", "Szilárd folyékony lesz", "Solid devine Lichid", lang),
      q4("Gasförmig wird zu Fest", "Gas becomes Solid", "Gáz szilárd lesz", "Gaz devine Solid", lang),
    ];
    const shuffled = shuffle(options, rng);

    questions.push(
      createMCQ(
        q4(
          `Was ist Gefrieren?`,
          `What is freezing?`,
          `Mi a fagyás?`,
          `Ce este îngheț?`,
          lang
        ),
        q4("Flüssig wird zu Fest", "Liquid becomes Solid", "Folyékony szilárd lesz", "Lichid devine Solid", lang),
        shuffled.filter((o) => o !== q4("Flüssig wird zu Fest", "Liquid becomes Solid", "Folyékony szilárd lesz", "Lichid devine Solid", lang)),
        q4("Gefrieren ist die Umwandlung von Flüssig zu Fest.", "Freezing is the conversion from liquid to solid.", "A fagyás a folyadék szilárd anyaggá alakulása.", "Îngheț este transformarea din lichid în solid.", lang)
      )
    );
  }

  // Q16-20: Condensation definition
  for (let i = 0; i < 5; i++) {
    const options = [
      q4("Gasförmig wird zu Flüssig", "Gas becomes Liquid", "Gáz folyékony lesz", "Gaz devine Lichid", lang),
      q4("Flüssig wird zu Gasförmig", "Liquid becomes Gas", "Folyékony gáz lesz", "Lichid devine Gaz", lang),
      q4("Fest wird zu Gasförmig", "Solid becomes Gas", "Szilárd gáz lesz", "Solid devine Gaz", lang),
    ];
    const shuffled = shuffle(options, rng);

    questions.push(
      createMCQ(
        q4(
          `Was ist Kondensation?`,
          `What is condensation?`,
          `Mi a kondenzáció?`,
          `Ce este condensarea?`,
          lang
        ),
        q4("Gasförmig wird zu Flüssig", "Gas becomes Liquid", "Gáz folyékony lesz", "Gaz devine Lichid", lang),
        shuffled.filter((o) => o !== q4("Gasförmig wird zu Flüssig", "Gas becomes Liquid", "Gáz folyékony lesz", "Gaz devine Lichid", lang)),
        q4("Kondensation ist die Umwandlung von Gas zu Flüssig.", "Condensation is the conversion from gas to liquid.", "A kondenzáció a gáz folyadékká alakulása.", "Condensarea este transformarea din gaz în lichid.", lang)
      )
    );
  }

  // Q21-25: Melting point temperatures
  for (let i = 0; i < 5; i++) {
    const substances = [
      { de: "Eis (Wasser)", en: "Ice (Water)", hu: "Jég (Víz)", ro: "Gheață (Apă)", temp: "0°C" },
      { de: "Eisen", en: "Iron", hu: "Vas", ro: "Fier", temp: "1538°C" },
      { de: "Gold", en: "Gold", hu: "Arany", ro: "Aur", temp: "1064°C" },
      { de: "Blei", en: "Lead", hu: "Ólom", ro: "Plumb", temp: "327°C" },
    ];
    const subst = pick(substances, rng);

    questions.push(
      createMCQ(
        q4(
          `Bei welcher Temperatur schmilzt ${subst.de}?`,
          `At what temperature does ${subst.en} melt?`,
          `Hány fokon olvad meg a ${subst.hu}?`,
          `La ce temperatură se topește ${subst.ro}?`,
          lang
        ),
        subst.temp,
        shuffle(
          substances
            .filter((s) => s !== subst)
            .map((s) => s.temp),
          rng
        ).slice(0, 3),
        q4(
          `Die Schmelztemperatur ist ${subst.temp}.`,
          `The melting temperature is ${subst.temp}.`,
          `Az olvadáspont ${subst.temp}.`,
          `Punctul de topire este ${subst.temp}.`,
          lang
        )
      )
    );
  }

  // Q26-30: Boiling point temperatures
  for (let i = 0; i < 5; i++) {
    const substances = [
      { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă", temp: "100°C" },
      { de: "Ethanol", en: "Ethanol", hu: "Etanol", ro: "Etanol", temp: "78°C" },
      { de: "Stickstoff", en: "Nitrogen", hu: "Nitrogén", ro: "Azot", temp: "-196°C" },
    ];
    const subst = pick(substances, rng);

    questions.push(
      createMCQ(
        q4(
          `Bei welcher Temperatur siedet ${subst.de}?`,
          `At what temperature does ${subst.en} boil?`,
          `Hány fokon forr fel a ${subst.hu}?`,
          `La ce temperatură fierbe ${subst.ro}?`,
          lang
        ),
        subst.temp,
        shuffle(
          substances
            .filter((s) => s !== subst)
            .map((s) => s.temp),
          rng
        ).slice(0, 3),
        q4(
          `Die Siedetemperatur ist ${subst.temp}.`,
          `The boiling temperature is ${subst.temp}.`,
          `A forráspont ${subst.temp}.`,
          `Punctul de fierbere este ${subst.temp}.`,
          lang
        )
      )
    );
  }

  // Q31-35: Phase change scenarios
  for (let i = 0; i < 5; i++) {
    const scenarios = [
      {
        de: "Eis wird warm und schmilzt zu Wasser.",
        en: "Ice gets warm and melts into water.",
        hu: "A jég megmelegszik és vízé olvad.",
        ro: "Gheața se încălzește și se topește în apă.",
        process: q4("Schmelzen", "Melting", "Olvadás", "Topire", lang),
      },
      {
        de: "Wasser wird heiß und wird zu Dampf.",
        en: "Water gets hot and turns into steam.",
        hu: "A víz forró lesz és gőzzé válna.",
        ro: "Apa se încălzește și se transformă în abur.",
        process: q4("Sieden/Verdampfung", "Boiling/Evaporation", "Forráls/Párolgás", "Fierbere/Evaporare", lang),
      },
      {
        de: "Dampf wird kühl und wird zu Wasser zurück.",
        en: "Steam gets cool and turns back into water.",
        hu: "A gőz lehűl és visszavá vízé válna.",
        ro: "Aburul se răcește și se transformă din nou în apă.",
        process: q4("Kondensation", "Condensation", "Kondenzáció", "Condensare", lang),
      },
      {
        de: "Wasser wird sehr kalt und gefriert zu Eis.",
        en: "Water gets very cold and freezes into ice.",
        hu: "A víz nagyon hideg lesz és jéggé fagy.",
        ro: "Apa se răcește foarte mult și se transformă în gheață.",
        process: q4("Gefrieren", "Freezing", "Fagyás", "Îngheț", lang),
      },
    ];

    const scenario = pick(scenarios, rng);

    questions.push(
      createMCQ(
        q4(scenario.de, scenario.en, scenario.hu, scenario.ro, lang),
        scenario.process,
        shuffle(
          [
            q4("Schmelzen", "Melting", "Olvadás", "Topire", lang),
            q4("Verdampfung", "Evaporation", "Párolgás", "Evaporare", lang),
            q4("Kondensation", "Condensation", "Kondenzáció", "Condensare", lang),
            q4("Gefrieren", "Freezing", "Fagyás", "Îngheț", lang),
          ].filter((p) => p !== scenario.process),
          rng
        ).slice(0, 3),
        scenario.process
      )
    );
  }

  return questions.slice(0, 35);
}

function meltingBoilingTyping(lang: string, seed: number = 0): CurriculumQuestion[] {
  const questions: CurriculumQuestion[] = [];

  const typingPrompts = [
    {
      de: `Der Übergang von fest zu flüssig heißt ___.`,
      en: `The transition from solid to liquid is called ___.`,
      hu: `A szilárdtól a folyékonyig való átmenet ___.`,
      ro: `Tranziția de la solid la lichid se numește ___.`,
      answer: "Schmelzen",
    },
    {
      de: `Der Übergang von flüssig zu gasförmig heißt ___.`,
      en: `The transition from liquid to gas is called ___.`,
      hu: `A folyékonytól a gázhoz való átmenet ___.`,
      ro: `Tranziția de la lichid la gaz se numește ___.`,
      answer: "Sieden oder Verdampfung",
    },
    {
      de: `Der Übergang von gasförmig zu flüssig heißt ___.`,
      en: `The transition from gas to liquid is called ___.`,
      hu: `A gáztól a folyékonyig való átmenet ___.`,
      ro: `Tranziția de la gaz la lichid se numește ___.`,
      answer: "Kondensation",
    },
    {
      de: `Der Übergang von flüssig zu fest heißt ___.`,
      en: `The transition from liquid to solid is called ___.`,
      hu: `A folyékonytól a szilárdhoz való átmenet ___.`,
      ro: `Tranziția de la lichid la solid se numește ___.`,
      answer: "Gefrieren",
    },
    {
      de: `Wasser schmilzt bei ___ °C.`,
      en: `Water melts at ___ °C.`,
      hu: `A víz ___ °C-on olvad meg.`,
      ro: `Apa se topește la ___ °C.`,
      answer: "0",
    },
    {
      de: `Wasser siedet bei ___ °C.`,
      en: `Water boils at ___ °C.`,
      hu: `A víz ___ °C-on forr fel.`,
      ro: `Apa fierbe la ___ °C.`,
      answer: "100",
    },
    {
      de: `Der direkte Übergang von fest zu gasförmig heißt ___.`,
      en: `The direct transition from solid to gas is called ___.`,
      hu: `A közvetlen átmenet a szilárdtól a gázhoz ___.`,
      ro: `Tranziția directă de la solid la gaz se numește ___.`,
      answer: "Sublimation",
    },
    {
      de: `Beim Schmelzen wird Wärmeenergie ___.`,
      en: `When melting, thermal energy is ___.`,
      hu: `Az olvadáskor a hőenergia ___.`,
      ro: `Când topim, energia termică este ___.`,
      answer: "absorbiert oder aufgenommen",
    },
    {
      de: `Beim Gefrieren wird Wärmeenergie ___.`,
      en: `When freezing, thermal energy is ___.`,
      hu: `A fagyáskor a hőenergia ___.`,
      ro: `Când îngheț, energia termică este ___.`,
      answer: "abgegeben oder freigesetzt",
    },
    {
      de: `Verdampfung und Sieden sind unterschiedliche Begriffe. Verdampfung findet ___ statt.`,
      en: `Evaporation and boiling are different concepts. Evaporation occurs ___.`,
      hu: `A párolgás és a forráls különböző fogalmak. A párolgás ___ történik.`,
      ro: `Evaporarea și fierberea sunt concepte diferite. Evaporarea se întâmplă ___.`,
      answer: "an der Oberfläche oder überall",
    },
  ];

  for (const prompt of typingPrompts) {
    questions.push(
      createTyping(
        q4(prompt.de, prompt.en, prompt.hu, prompt.ro, lang),
        prompt.answer.split(" oder ")[0],
        q4(
          `Korrekt: ${prompt.answer}`,
          `Correct: ${prompt.answer}`,
          `Helyes: ${prompt.answer}`,
          `Corect: ${prompt.answer}`,
          lang
        )
      )
    );
  }

  return questions;
}

// ─────────────────────────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────────────────────────

export const HEAT_GENERATORS = {
  temperature: temperatureMCQ,
  temperature_typing: temperatureTyping,
  heat_transfer: heatTransferMCQ,
  heat_transfer_typing: heatTransferTyping,
  states_of_matter: statesOfMatterMCQ,
  states_of_matter_typing: statesOfMatterTyping,
  melting_boiling: meltingBoilingMCQ,
  melting_boiling_typing: meltingBoilingTyping,
};
