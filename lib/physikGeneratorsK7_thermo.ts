// ─── PHYSICS GENERATORS K7: THERMODYNAMICS ──────────────────────────────────
// "Thermodynamik" theme — Temperature, heat transfer, expansion, states, specific heat
// Grade 7 (13-14 years old)
//
// Generates 32-35 MCQ + 10 Typing questions per subtopic using seeded PRNG
// Temperature conversion: T(K) = T(°C) + 273.15; T(°C) = (T(°F) - 32) × 5/9
// Heat transfer: Q = mcΔT (joules = mass × specific heat × temperature change)
// Thermal expansion: ΔL = L₀ × α × ΔT (linear), ΔV = V₀ × β × ΔT (volumetric)

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) | 0;
    return (((t ^ (t >>> 14)) >>> 0) / 4294967296);
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrong: string[],
  rng: () => number
): CurriculumMCQ {
  const options = shuffle([correct, ...wrong.slice(0, 3)], rng);
  return {
    type: "mcq" as const,
    topic,
    subtopic,
    question,
    options,
    correct: options.indexOf(correct),
  };
}

function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): CurriculumTyping {
  return {
    type: "typing" as const,
    topic,
    subtopic,
    question,
    answer,
  };
}

function q4(de: string, en: string, hu: string, ro: string, lang = "en"): string {
  const map: Record<string, string> = { de, en, hu, ro };
  return map[lang] || en;
}

// ─── TEMPERATURE ──────────────────────────────────────────────────────────

function generateTemperatureMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Celsius to Kelvin conversion (7 questions)
  for (let i = 0; i < 7; i++) {
    const celsius = pick([0, 25, 100, -273.15, 273.15, 500, 1000], rng);
    const kelvin = (celsius + 273.15).toFixed(2);

    questions.push(
      createMCQ(
        "thermodynamics",
        "temperature",
        q4(
          `Konvertiere ${celsius}°C in Kelvin`,
          `Convert ${celsius}°C to Kelvin`,
          `Konvertáld ${celsius}°C kelvinre`,
          `Convertește ${celsius}°C în Kelvin`,
          lang
        ),
        kelvin,
        [
          (celsius - 100).toString(),
          (celsius + 100).toString(),
          (celsius * 2).toString(),
        ],
        rng
      )
    );
  }

  // Template 2: Kelvin to Celsius (6 questions)
  for (let i = 0; i < 6; i++) {
    const kelvin = pick([273.15, 298.15, 373.15, 0, 500, 1000], rng);
    const celsius = (kelvin - 273.15).toFixed(2);

    questions.push(
      createMCQ(
        "thermodynamics",
        "temperature",
        q4(
          `${kelvin}K in Celsius?`,
          `${kelvin}K in Celsius?`,
          `${kelvin}K celsius-ban?`,
          `${kelvin}K în Celsius?`,
          lang
        ),
        celsius,
        [
          (kelvin + 100).toString(),
          (kelvin - 100).toString(),
          (kelvin / 2).toString(),
        ],
        rng
      )
    );
  }

  // Template 3: Fahrenheit to Celsius (6 questions)
  for (let i = 0; i < 6; i++) {
    const fahrenheit = pick([32, 68, 212, 0, 100, 98.6], rng);
    const celsius = (((fahrenheit - 32) * 5) / 9).toFixed(2);

    questions.push(
      createMCQ(
        "thermodynamics",
        "temperature",
        q4(
          `${fahrenheit}°F in Celsius?`,
          `${fahrenheit}°F to Celsius?`,
          `${fahrenheit}°F celsius-ban?`,
          `${fahrenheit}°F în Celsius?`,
          lang
        ),
        celsius,
        [
          (fahrenheit * 2).toString(),
          (fahrenheit / 2).toString(),
          ((fahrenheit - 32) * 2).toString(),
        ],
        rng
      )
    );
  }

  // Template 4: Absolute zero understanding (5 questions)
  for (let i = 0; i < 5; i++) {
    const fact = pick([
      { de: "Absolute Nullpunkt ist 0K oder -273,15°C", en: "Absolute zero is 0K or -273.15°C", hu: "Abszolút nulla 0K vagy -273,15°C", ro: "Zero absolut este 0K sau -273,15°C" },
      { de: "Unter 0K kann es nicht gehen", en: "Cannot go below 0K", hu: "0K alatt nem lehet menni", ro: "Nu se poate merge sub 0K" },
      { de: "Kelvin Skala nur positive Werte", en: "Kelvin scale only positive values", hu: "Kelvin skála csak pozitív értékek", ro: "Scala Kelvin doar valori pozitive" },
    ], rng);

    questions.push(
      createMCQ(
        "thermodynamics",
        "temperature",
        q4(
          "Was ist 'absolute Nullpunkt'?",
          "What is 'absolute zero'?",
          "Mi az 'abszolút nulla'?",
          "Ce este 'zero absolut'?",
          lang
        ),
        q4(fact.de, fact.en, fact.hu, fact.ro, lang),
        [
          q4("Nullpunkt auf Celsius Skala", "Zero on Celsius scale", "Nulla Celsius-skálán", "Zero pe scara Celsius", lang),
          q4("Niedrigste in einem Labor messbare Temperatur", "Lowest temperature measurable in lab", "Legalacsonyabb laboratóriumi hőmérséklet", "Cea mai joasă temperatură măsurabilă în laborator", lang),
        ],
        rng
      )
    );
  }

  // Template 5: Temperature scale properties (4 questions)
  const scales = [
    { de: "Celsius", en: "Celsius", hu: "Celsius", ro: "Celsius", ref: "Wasser gefriert 0°C, kocht 100°C" },
    { de: "Fahrenheit", en: "Fahrenheit", hu: "Fahrenheit", ro: "Fahrenheit", ref: "Wasser gefriert 32°F, kocht 212°F" },
    { de: "Kelvin", en: "Kelvin", hu: "Kelvin", ro: "Kelvin", ref: "Absolute Nullpunkt 0K, Wasser gefriert 273K" },
  ];

  for (const scale of scales) {
    questions.push(
      createMCQ(
        "thermodynamics",
        "temperature",
        q4(
          `${q4(scale.de, scale.en, scale.hu, scale.ro, lang)} Skala Referenzpunkt?`,
          `${scale.en} scale reference point?`,
          `${q4(scale.de, scale.en, scale.hu, scale.ro, lang)} skála referenciapontja?`,
          `Punctul de referință al scalei ${q4(scale.de, scale.en, scale.hu, scale.ro, lang)}?`,
          lang
        ),
        q4(scale.ref, scale.ref, scale.ref, scale.ref, lang),
        [
          q4("Körpertemperatur 37°", "Body temperature 37°", "Testhőmérséklet 37°", "Temperatura corpului 37°", lang),
          q4("Siedepunkt Alkohol 78°", "Alcohol boiling 78°", "Alkohol forráspontja 78°", "Fierberea alcoolului 78°", lang),
        ],
        rng
      )
    );
  }

  return questions;
}

function generateTemperatureTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "thermodynamics",
      "temperature",
      q4(
        "Erkläre Temperatur aus mikroskopischer Sicht",
        "Explain temperature from microscopic view",
        "Magyarázd meg a hőmérsékletet mikroszkópikus nézetből",
        "Explică temperatura din punct de vedere microscopic",
        lang
      ),
      [
        q4(
          "Temperatur ist Maß für die durchschnittliche kinetische Energie von Atomen/Molekülen; mehr Bewegung = höhere Temperatur",
          "Temperature is measure of average kinetic energy of atoms/molecules; more motion = higher temperature",
          "A hőmérséklet az atomok/molekulák átlagos kinetikus energiájának mértéke; több mozgás = magasabb hőmérséklet",
          "Temperatura este măsura energiei cinetice medii a atomilor/moleculelor; mai multă mișcare = temperatură mai ridicată",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "temperature",
      q4(
        "Was sind die 3 Temperaturskalen und ihre Bezugspunkte?",
        "What are the 3 temperature scales and their reference points?",
        "Mik a 3 hőmérsékleti skála és azok referenciaPontjai?",
        "Care sunt cele 3 scale de temperatură și punctele lor de referință?",
        lang
      ),
      [
        q4(
          "Celsius: Wasser gefriert 0°C, kocht 100°C; Fahrenheit: 32°F und 212°F; Kelvin: absolute Nullpunkt 0K = -273,15°C",
          "Celsius: water freezes 0°C, boils 100°C; Fahrenheit: 32°F, 212°F; Kelvin: absolute zero 0K = -273.15°C",
          "Celsius: víz fagy 0°C, forr 100°C; Fahrenheit: 32°F, 212°F; Kelvin: abszolút nulla 0K = -273,15°C",
          "Celsius: apă se înghață 0°C, fierbe 100°C; Fahrenheit: 32°F, 212°F; Kelvin: zero absolut 0K = -273,15°C",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "temperature",
      q4(
        "Konvertierungsformeln zwischen Temperaturskalen",
        "Temperature conversion formulas",
        "Hőmérsékleti konverzió képletei",
        "Formule de conversie temperatură",
        lang
      ),
      [
        q4(
          "T(K) = T(°C) + 273,15; T(°C) = (T(°F) - 32) × 5/9; T(°F) = T(°C) × 9/5 + 32",
          "T(K) = T(°C) + 273.15; T(°C) = (T(°F) - 32) × 5/9; T(°F) = T(°C) × 9/5 + 32",
          "T(K) = T(°C) + 273,15; T(°C) = (T(°F) - 32) × 5/9; T(°F) = T(°C) × 9/5 + 32",
          "T(K) = T(°C) + 273,15; T(°C) = (T(°F) - 32) × 5/9; T(°F) = T(°C) × 9/5 + 32",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "temperature",
      q4(
        "Warum ist Kelvin Skala für Wissenschaft ideal?",
        "Why is Kelvin scale ideal for science?",
        "Miért ideális a Kelvin skála a tudományhoz?",
        "De ce este scala Kelvin ideală pentru știință?",
        lang
      ),
      [
        q4(
          "Kelvin Skala beginnt bei absolutem Nullpunkt (0K); keine negativen Werte; direkt proportional zu Molekülbewegung",
          "Kelvin starts at absolute zero (0K); no negative values; directly proportional to molecular motion",
          "Kelvin a abszolút nullánál kezdődik (0K); nincs negatív érték; közvetlenül arányos a molekulamozgással",
          "Kelvin începe la zero absolut (0K); fără valori negative; direct proporțional cu mișcarea moleculară",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "temperature",
      q4(
        "Umrechnung: 25°C in Kelvin und Fahrenheit",
        "Convert: 25°C to Kelvin and Fahrenheit",
        "Konvertálás: 25°C kelvinbe és Fahrenheitre",
        "Conversie: 25°C în Kelvin și Fahrenheit",
        lang
      ),
      [
        q4(
          "25°C = 298,15K; 25°C = 77°F (25 × 9/5 + 32 = 77)",
          "25°C = 298.15K; 25°C = 77°F",
          "25°C = 298,15K; 25°C = 77°F",
          "25°C = 298,15K; 25°C = 77°F",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "temperature",
      q4(
        "Was passiert mit Stoffen nahe dem absoluten Nullpunkt?",
        "What happens to matter near absolute zero?",
        "Mi történik az anyaggal az abszolút nulla közelében?",
        "Ce se întâmplă cu materia aproape de zero absolut?",
        lang
      ),
      [
        q4(
          "Atome/Moleküle bewegen sich fast nicht mehr; Brownsche Bewegung ist minimal; Gase kondensieren zu Flüssigkeiten/Feststoffe",
          "Atoms/molecules barely move; Brownian motion minimal; gases liquefy; unusual quantum effects appear",
          "Atomi/molekulák alig mozognak; Brown-mozgás minimális; gázok cseppfolyósodnak; kvantum hatások",
          "Atomi/molecule se mișcă abia; mișcare Browniană minimală; gaze se lichefiază; efecte cuantice",
          lang
        ),
      ]
    )
  );

  return questions;
}

// ─── HEAT TRANSFER ────────────────────────────────────────────────────────

function generateHeatTransferMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Heat transfer mechanisms (7 questions)
  const mechanisms = [
    { de: "Wärmeleitung", en: "Conduction", hu: "Vezetés", ro: "Conducție", desc: "Direkter Kontakt zwischen Objekten" },
    { de: "Konvektion", en: "Convection", hu: "Konvekció", ro: "Convecție", desc: "Strömung von Fluiden (Luft, Wasser)" },
    { de: "Strahlung", en: "Radiation", hu: "Sugárzás", ro: "Radiație", desc: "Elektromagnetische Wellen ohne Medium" },
  ];

  for (const mech of mechanisms) {
    questions.push(
      createMCQ(
        "thermodynamics",
        "heat_transfer",
        q4(
          `${q4(mech.de, mech.en, mech.hu, mech.ro, lang)}: Definition?`,
          `${mech.en}: Definition?`,
          `${q4(mech.de, mech.en, mech.hu, mech.ro, lang)}: Definíció?`,
          `${q4(mech.de, mech.en, mech.hu, mech.ro, lang)}: Definiție?`,
          lang
        ),
        q4(mech.desc, mech.desc, mech.desc, mech.desc, lang),
        [
          q4("Bewegung von Partikeln", "Movement of particles", "Részecskék mozgása", "Mișcarea particulelor", lang),
          q4("Temperaturausgleich sofort", "Instant temperature balance", "Azonnali hőmérséklet kiegyenlítés", "Echilibru temperatură instant", lang),
        ],
        rng
      )
    );
  }

  // Template 2: Heat conduction examples (6 questions)
  const conductionExamples = [
    { de: "Metall", en: "Metal", hu: "Fém", ro: "Metal", quality: "Guter Wärmeleiter" },
    { de: "Holz", en: "Wood", hu: "Fa", ro: "Lemn", quality: "Schlechter Wärmeleiter" },
    { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă", quality: "Schlechter Wärmeleiter" },
  ];

  for (const ex of conductionExamples) {
    questions.push(
      createMCQ(
        "thermodynamics",
        "heat_transfer",
        q4(
          `${q4(ex.de, ex.en, ex.hu, ex.ro, lang)}: Wärmeleitung?`,
          `${ex.en}: Heat conduction?`,
          `${q4(ex.de, ex.en, ex.hu, ex.ro, lang)}: Hővezétés?`,
          `${q4(ex.de, ex.en, ex.hu, ex.ro, lang)}: Conducție termică?`,
          lang
        ),
        q4(ex.quality, ex.quality, ex.quality, ex.quality, lang),
        [
          q4("Guter Isolator", "Good insulator", "Jó szigetelő", "Bun izolator", lang),
          q4("Sehr schlechter Leiter", "Very poor conductor", "Nagyon rossz vezető", "Foarte slab conductor", lang),
        ],
        rng
      )
    );
  }

  // Template 3: Convection in fluids (6 questions)
  for (let i = 0; i < 6; i++) {
    const example = pick([
      { de: "Kochendes Wasser in Topf", en: "Boiling water in pot", hu: "Forró víz a fazékban", ro: "Apă fierbinte în oală", outcome: "Warme Wasser steigt auf" },
      { de: "Heizungsanlage in Haus", en: "Heating system in house", hu: "Fűtési rendszer a házban", ro: "Sistem de încălzire în casă", outcome: "Heiße Luft steigt, kalte sinkt" },
      { de: "Luft über heißem Feuer", en: "Air above hot fire", hu: "Levegő a forró tűz fölött", ro: "Aer deasupra focului fierbinte", outcome: "Warme Luft steigt auf" },
    ], rng);

    questions.push(
      createMCQ(
        "thermodynamics",
        "heat_transfer",
        q4(
          `Konvektion Beispiel: ${q4(example.de, example.en, example.hu, example.ro, lang)}?`,
          `Convection: ${example.en}?`,
          `Konvekció: ${q4(example.de, example.en, example.hu, example.ro, lang)}?`,
          `Convecție: ${q4(example.de, example.en, example.hu, example.ro, lang)}?`,
          lang
        ),
        q4(example.outcome, example.outcome, example.outcome, example.outcome, lang),
        [
          q4("Keine Wärmebewegung", "No heat movement", "Nincs hőmozgás", "Fără mișcare de căldură", lang),
          q4("Nur Wärmeleitung", "Only conduction", "Csak vezetés", "Doar conducție", lang),
        ],
        rng
      )
    );
  }

  // Template 4: Heat energy formula Q = mcΔT (8 questions)
  for (let i = 0; i < 8; i++) {
    const mass = pick([1, 2, 5, 10, 100], rng);
    const deltaT = pick([10, 20, 50, 100], rng);
    const c = pick([4.2, 900, 2100], rng); // specific heat: water, copper, sand
    const q = mass * c * deltaT;

    questions.push(
      createMCQ(
        "thermodynamics",
        "heat_transfer",
        q4(
          `Q = mcΔT: ${mass}kg × ${c}J/(kg·K) × ${deltaT}K?`,
          `Q = mcΔT: ${mass}kg × ${c}J/(kg·K) × ${deltaT}K?`,
          `Q = mcΔT: ${mass}kg × ${c}J/(kg·K) × ${deltaT}K?`,
          `Q = mcΔT: ${mass}kg × ${c}J/(kg·K) × ${deltaT}K?`,
          lang
        ),
        q.toString(),
        [
          (q / 2).toString(),
          (q * 2).toString(),
          (q + 100).toString(),
        ],
        rng
      )
    );
  }

  return questions;
}

function generateHeatTransferTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "thermodynamics",
      "heat_transfer",
      q4(
        "Die 3 Mechanismen der Wärmeübertragung",
        "The 3 mechanisms of heat transfer",
        "A hőátadás 3 mechanizmusa",
        "Cele 3 mecanisme de transfer termic",
        lang
      ),
      [
        q4(
          "Wärmeleitung (direkter Kontakt), Konvektion (Fluidbewegung), Strahlung (EM Wellen)",
          "Conduction (direct contact), Convection (fluid flow), Radiation (EM waves)",
          "Vezetés (közvetlen kontakt), Konvekció (folyadék áramlás), Sugárzás (EM hullámok)",
          "Conducție (contact direct), Convecție (flux de fluid), Radiație (unde EM)",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "heat_transfer",
      q4(
        "Was ist Spezifische Wärmekapazität (c)?",
        "What is Specific Heat Capacity (c)?",
        "Mi az Fajhő (c)?",
        "Ce este Căldura Specifică (c)?",
        lang
      ),
      [
        q4(
          "Energie notwendig um 1kg eines Stoffs um 1K zu erwärmen; Einheit: J/(kg·K)",
          "Energy needed to heat 1kg of substance by 1K; Unit: J/(kg·K)",
          "Energia szükséges 1kg anyag 1K-vel való felmelegítéséhez; Egység: J/(kg·K)",
          "Energie necesară pentru a încălzi 1kg de substanță cu 1K; Unitate: J/(kg·K)",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "heat_transfer",
      q4(
        "Formel Q = mcΔT und Bedeutung jeder Variable",
        "Formula Q = mcΔT and meaning of variables",
        "Képlet Q = mcΔT és minden változó jelentése",
        "Formula Q = mcΔT și semnificația fiecărei variabile",
        lang
      ),
      [
        q4(
          "Q = Wärmemenge (Joule), m = Masse (kg), c = spezifische Wärme (J/(kg·K)), ΔT = Temperaturänderung (K)",
          "Q = heat energy (Joules), m = mass (kg), c = specific heat (J/(kg·K)), ΔT = temperature change (K)",
          "Q = hőenergia (joule), m = tömeg (kg), c = fajhő (J/(kg·K)), ΔT = hőmérséklet-változás (K)",
          "Q = energie termică (jouli), m = masă (kg), c = căldură specifică (J/(kg·K)), ΔT = schimbare de temperatură (K)",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "heat_transfer",
      q4(
        "Beispielrechnung: Wasser erwärmen von 20°C auf 40°C, 2kg",
        "Example: Heat 2kg water from 20°C to 40°C",
        "Példa: 2kg vizet melegítünk 20°C-ról 40°C-ra",
        "Exemplu: Încălzim 2kg apă de la 20°C la 40°C",
        lang
      ),
      [
        q4(
          "Q = 2kg × 4200J/(kg·K) × (40-20)K = 2 × 4200 × 20 = 168.000J = 168kJ",
          "Q = 2kg × 4200J/(kg·K) × 20K = 168,000J = 168kJ",
          "Q = 2kg × 4200J/(kg·K) × 20K = 168.000J = 168kJ",
          "Q = 2kg × 4200J/(kg·K) × 20K = 168.000J = 168kJ",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "heat_transfer",
      q4(
        "Welcher Stoff braucht mehr Energie zum Erwärmen: Wasser oder Kupfer?",
        "Which needs more energy: water or copper?",
        "Melyik igényel több energiát: víz vagy réz?",
        "Care necesită mai multă energie: apă sau cupru?",
        lang
      ),
      [
        q4(
          "Wasser (c=4200) braucht viel mehr als Kupfer (c=390); deshalb hat Wasser hohe Wärmespeicherkapazität",
          "Water (c=4200) needs much more than copper (c=390); water has high heat capacity",
          "Víz (c=4200) sokkal több energia kell mint réz (c=390); víz magas hőkapacitása",
          "Apă (c=4200) necesită mult mai multă decât cupru (c=390); apa are capacitate termică mare",
          lang
        ),
      ]
    )
  );

  return questions;
}

// ─── THERMAL EXPANSION ────────────────────────────────────────────────────

function generateExpansionMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Linear expansion (6 questions)
  for (let i = 0; i < 6; i++) {
    const substance = pick([
      { de: "Stahl", en: "Steel", hu: "Acél", ro: "Oțel", alpha: "11×10⁻⁶/K" },
      { de: "Aluminium", en: "Aluminum", hu: "Alumínium", ro: "Aluminiu", alpha: "23×10⁻⁶/K" },
      { de: "Kupfer", en: "Copper", hu: "Réz", ro: "Cupru", alpha: "17×10⁻⁶/K" },
    ], rng);

    questions.push(
      createMCQ(
        "thermodynamics",
        "expansion",
        q4(
          `${q4(substance.de, substance.en, substance.hu, substance.ro, lang)}: Ausdehnungskoeffizient?`,
          `${substance.en}: Linear expansion coefficient?`,
          `${q4(substance.de, substance.en, substance.hu, substance.ro, lang)}: Lineáris kiterjesztési együttható?`,
          `${q4(substance.de, substance.en, substance.hu, substance.ro, lang)}: Coeficient liniar de dilatare?`,
          lang
        ),
        q4(substance.alpha, substance.alpha, substance.alpha, substance.alpha, lang),
        [
          q4("1×10⁻⁶/K", "1×10⁻⁶/K", "1×10⁻⁶/K", "1×10⁻⁶/K", lang),
          q4("50×10⁻⁶/K", "50×10⁻⁶/K", "50×10⁻⁶/K", "50×10⁻⁶/K", lang),
        ],
        rng
      )
    );
  }

  // Template 2: ΔL = L₀ × α × ΔT calculations (7 questions)
  for (let i = 0; i < 7; i++) {
    const L0 = pick([1, 2, 5, 10], rng);
    const alpha = pick([11e-6, 17e-6, 23e-6], rng);
    const deltaT = pick([10, 20, 50, 100], rng);
    const deltaL = (L0 * alpha * deltaT * 1000).toFixed(3); // in mm

    questions.push(
      createMCQ(
        "thermodynamics",
        "expansion",
        q4(
          `ΔL = ${L0}m × ${(alpha * 1e6).toFixed(0)}×10⁻⁶/K × ${deltaT}K?`,
          `ΔL = ${L0}m × ${(alpha * 1e6).toFixed(0)}×10⁻⁶/K × ${deltaT}K?`,
          `ΔL = ${L0}m × ${(alpha * 1e6).toFixed(0)}×10⁻⁶/K × ${deltaT}K?`,
          `ΔL = ${L0}m × ${(alpha * 1e6).toFixed(0)}×10⁻⁶/K × ${deltaT}K?`,
          lang
        ),
        deltaL + "m",
        [
          (parseFloat(deltaL) * 2).toFixed(3) + "m",
          (parseFloat(deltaL) / 2).toFixed(3) + "m",
        ],
        rng
      )
    );
  }

  // Template 3: Volumetric expansion (6 questions)
  for (let i = 0; i < 6; i++) {
    const substance = pick([
      { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă", beta: "207×10⁻⁶/K" },
      { de: "Alkohol", en: "Alcohol", hu: "Alkohol", ro: "Alcool", beta: "750×10⁻⁶/K" },
      { de: "Luft", en: "Air", hu: "Levegő", ro: "Aer", beta: "3700×10⁻⁶/K" },
    ], rng);

    questions.push(
      createMCQ(
        "thermodynamics",
        "expansion",
        q4(
          `${q4(substance.de, substance.en, substance.hu, substance.ro, lang)}: Volumenausdehnungskoeff.?`,
          `${substance.en}: Volumetric expansion coefficient?`,
          `${q4(substance.de, substance.en, substance.hu, substance.ro, lang)}: Térfogati kiterjesztési egy.?`,
          `${q4(substance.de, substance.en, substance.hu, substance.ro, lang)}: Coeficient volumetric?`,
          lang
        ),
        q4(substance.beta, substance.beta, substance.beta, substance.beta, lang),
        [
          q4("100×10⁻⁶/K", "100×10⁻⁶/K", "100×10⁻⁶/K", "100×10⁻⁶/K", lang),
          q4("1000×10⁻⁶/K", "1000×10⁻⁶/K", "1000×10⁻⁶/K", "1000×10⁻⁶/K", lang),
        ],
        rng
      )
    );
  }

  // Template 4: Anomaly of water (6 questions)
  for (let i = 0; i < 6; i++) {
    const fact = pick([
      q4("Wasser hat maximale Dichte bei 4°C, nicht bei 0°C", "Water has max density at 4°C, not 0°C", "A víz maximum sűrűsége 4°C-nál van, nem 0°C-nál", "Apa are densitate maximă la 4°C, nu la 0°C", lang),
      q4("Eis schwimmt auf Wasser wegen geringerer Dichte", "Ice floats because it's less dense than water", "A jég lebeg, mert kevésbé sűrű mint a víz", "Gheața plutește pentru că e mai puțin densă decât apa", lang),
      q4("Dies ermöglicht Leben unter dem Eis", "This allows life under ice in winter", "Ez lehetővé teszi az életet a jég alatt", "Aceasta permite viață sub gheață iarna", lang),
    ], rng);

    questions.push(
      createMCQ(
        "thermodynamics",
        "expansion",
        q4(
          "Anomalie des Wassers beim Abkühlen?",
          "Anomaly of water upon cooling?",
          "A víz anomáliája lehűlésekor?",
          "Anomalia apei la răcire?",
          lang
        ),
        fact,
        [
          q4("Wasser wird immer dichter beim Abkühlen", "Water always gets denser when cooled", "A víz mindig sűrűbb lesz ha lehűl", "Apa devine mereu mai densă când se răcește", lang),
        ],
        rng
      )
    );
  }

  return questions;
}

function generateExpansionTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "thermodynamics",
      "expansion",
      q4(
        "Definition: Lineare Ausdehnung",
        "Definition: Linear thermal expansion",
        "Definíció: Lineáris hőtágulás",
        "Definiție: Dilatare termică liniară",
        lang
      ),
      [
        q4(
          "Längenzunahme eines Stoffs bei Erwärmung; proportional zu Temperaturänderung und Länge",
          "Length increase of substance upon heating; proportional to temperature change",
          "Anyag hossznövekedése melegítéskor; arányos hőmérséklet-változással és hosszal",
          "Creșterea lungimii unei substanțe la încălzire; proporțională cu schimbarea temperaturii",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "expansion",
      q4(
        "Formel für lineare Ausdehnung",
        "Formula for linear expansion",
        "Képlet a lineáris kiterjesztéshez",
        "Formula pentru dilatare liniară",
        lang
      ),
      [
        q4(
          "ΔL = L₀ × α × ΔT; L₀ = ursprüngliche Länge, α = Ausdehnungskoeff., ΔT = Temperaturänderung",
          "ΔL = L₀ × α × ΔT; L₀ = original length, α = expansion coefficient, ΔT = temp change",
          "ΔL = L₀ × α × ΔT; L₀ = eredeti hossz, α = kiterjesztési egy., ΔT = hőmérséklet-változás",
          "ΔL = L₀ × α × ΔT; L₀ = lungime inițială, α = coeficient de dilatare, ΔT = schimbare de temperatură",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "expansion",
      q4(
        "Warum dehnen sich Stoffe aus wenn sie erwärmt werden?",
        "Why do substances expand when heated?",
        "Miért tágulnak az anyagok melegítéskor?",
        "De ce se dilată substanțele când sunt încălzite?",
        lang
      ),
      [
        q4(
          "Atome/Moleküle vibrieren stärker bei höherer Temperatur; benötigen mehr Platz; Abstände zwischen Atomen größer",
          "Atoms/molecules vibrate more strongly at higher temperature; need more space; atomic distances increase",
          "Atomi/molekulák erősebben rezegnek magasabb hőmérsékleten; több helyre van szükség; atomos távolságok nőnek",
          "Atomi/molecule vibrează mai intens la temperatură mai ridicată; au nevoie de mai mult spațiu; distanțe atomice cresc",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "expansion",
      q4(
        "Praktische Anwendungen von Wärmeausdehnung",
        "Practical applications of thermal expansion",
        "Hőtágulás gyakorlati alkalmazásai",
        "Aplicații practice ale dilatării termice",
        lang
      ),
      [
        q4(
          "Thermometer (Quecksilber/Alkohol), Dehnungsfugen in Brücken, Bi-Metall Streifen in Thermostaten",
          "Thermometers (mercury/alcohol), expansion joints in bridges, bimetallic strips in thermostats",
          "Hőmérők (higany/alkohol), dehnungsfugák a hidakban, bi-fémes csíkok termosztátban",
          "Termometre (mercur/alcool), rosturi de dilatare pe poduri, benzi bimetalice în termostați",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "expansion",
      q4(
        "Was ist die Anomalie von Wasser?",
        "What is water's thermal anomaly?",
        "Mi a víz hőtani anomáliája?",
        "Care este anomalia termică a apei?",
        lang
      ),
      [
        q4(
          "Wasser erreicht maximale Dichte bei 4°C; unterhalb 4°C wird es wieder weniger dicht; deshalb Eis schwimmt",
          "Water reaches maximum density at 4°C; below 4°C it becomes less dense again; ice floats",
          "A víz maximum sűrűsége 4°C-nál; 4°C alatt újra kevésbé sűrű lesz; a jég lebeg",
          "Apa atinge densitate maximă la 4°C; sub 4°C devine din nou mai puțin densă; gheața plutește",
          lang
        ),
      ]
    )
  );

  return questions;
}

// ─── STATES OF MATTER ──────────────────────────────────────────────────────

function generateStatesMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: State properties (6 questions)
  const states = [
    { de: "Fest", en: "Solid", hu: "Szilárd", ro: "Solid", prop: "Feste Form und Volumen" },
    { de: "Flüssig", en: "Liquid", hu: "Folyékony", ro: "Lichid", prop: "Festes Volumen, Flüssige Form" },
    { de: "Gasförmig", en: "Gas", hu: "Gáz", ro: "Gaz", prop: "Keine feste Form oder Volumen" },
  ];

  for (const state of states) {
    questions.push(
      createMCQ(
        "thermodynamics",
        "states",
        q4(
          `${q4(state.de, state.en, state.hu, state.ro, lang)}: Eigenschaft?`,
          `${state.en}: Property?`,
          `${q4(state.de, state.en, state.hu, state.ro, lang)}: Tulajdonság?`,
          `${q4(state.de, state.en, state.hu, state.ro, lang)}: Proprietate?`,
          lang
        ),
        q4(state.prop, state.prop, state.prop, state.prop, lang),
        [
          q4("Kann Druck widerstehen", "Can resist pressure", "Ellenáll a nyomásnak", "Poate rezista la presiune", lang),
          q4("Hat keine Dichte", "Has no density", "Nincs sűrűsége", "Nu are densitate", lang),
        ],
        rng
      )
    );
  }

  // Template 2: Phase transitions (7 questions)
  const transitions = [
    { de: "Schmelzen", en: "Melting", hu: "Olvadás", ro: "Topire", from: "Solid", to: "Liquid" },
    { de: "Erstarren", en: "Freezing", hu: "Fagyás", ro: "Îngheț", from: "Liquid", to: "Solid" },
    { de: "Verdampfung", en: "Evaporation", hu: "Párolgás", ro: "Evaporare", from: "Liquid", to: "Gas" },
    { de: "Kondensation", en: "Condensation", hu: "Kondenzáció", ro: "Condensare", from: "Gas", to: "Liquid" },
    { de: "Sublimation", en: "Sublimation", hu: "Szublimáció", ro: "Sublimare", from: "Solid", to: "Gas" },
  ];

  for (const trans of transitions) {
    questions.push(
      createMCQ(
        "thermodynamics",
        "states",
        q4(
          `${q4(trans.de, trans.en, trans.hu, trans.ro, lang)}: ${trans.from} → ${trans.to}?`,
          `${trans.en}: ${trans.from} → ${trans.to}?`,
          `${q4(trans.de, trans.en, trans.hu, trans.ro, lang)}: ${trans.from} → ${trans.to}?`,
          `${q4(trans.de, trans.en, trans.hu, trans.ro, lang)}: ${trans.from} → ${trans.to}?`,
          lang
        ),
        "true",
        ["false"],
        rng
      )
    );
  }

  // Template 3: Melting and boiling points (6 questions)
  const substances = [
    { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă", mp: "0°C", bp: "100°C" },
    { de: "Eisen", en: "Iron", hu: "Vas", ro: "Fier", mp: "1538°C", bp: "2862°C" },
    { de: "Alkohol", en: "Alcohol", hu: "Alkohol", ro: "Alcool", mp: "-114°C", bp: "78°C" },
  ];

  for (const subst of substances) {
    const randChoice = pick([
      { point: "melting", answer: q4(subst.mp, subst.mp, subst.mp, subst.mp, lang) },
      { point: "boiling", answer: q4(subst.bp, subst.bp, subst.bp, subst.bp, lang) },
    ], rng);

    questions.push(
      createMCQ(
        "thermodynamics",
        "states",
        q4(
          `${q4(subst.de, subst.en, subst.hu, subst.ro, lang)} ${randChoice.point === "melting" ? "Schmelzpunkt" : "Siedepunkt"}?`,
          `${subst.en} ${randChoice.point} point?`,
          `${q4(subst.de, subst.en, subst.hu, subst.ro, lang)} ${randChoice.point === "melting" ? "olvadáspont" : "forráspont"}?`,
          `${q4(subst.de, subst.en, subst.hu, subst.ro, lang)} ${randChoice.point === "melting" ? "punct de topire" : "punct de fierbere"}?`,
          lang
        ),
        randChoice.answer,
        [
          "0°C",
          "50°C",
        ],
        rng
      )
    );
  }

  return questions;
}

function generateStatesTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "thermodynamics",
      "states",
      q4(
        "Die 3 Aggregatzustände und ihre Eigenschaften",
        "The 3 states of matter and properties",
        "Az anyag 3 halmazállapota és jellemzői",
        "Cele 3 stări de agregare și proprietățile lor",
        lang
      ),
      [
        q4(
          "Fest (feste Form+Volumen), Flüssig (Volumen ja, Form flexibel), Gas (Form+Volumen flexibel)",
          "Solid (fixed shape/volume), Liquid (fixed volume, shape flexible), Gas (both flexible)",
          "Szilárd (rögzített alak/térfogat), Folyékony (térfogat rögzített, alak rugalmas), Gáz (mindkettő rugalmas)",
          "Solid (formă+volum fix), Lichid (volum fix, formă flexibilă), Gaz (ambele flexibile)",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "states",
      q4(
        "Definition: Latente Wärmemenge",
        "Definition: Latent heat",
        "Definíció: Látens hő",
        "Definiție: Căldură latentă",
        lang
      ),
      [
        q4(
          "Energie notwendig für Phasenübergang OHNE Temperaturänderung; Schmelzwärme, Verdampfungswärme",
          "Energy needed for phase transition WITHOUT temperature change; heat of fusion, vaporization",
          "Energia szükséges fázisátmenethez HŐMÉRSÉKLET-VÁLTOZÁS NÉLKÜL; olvadás-, párolgáshő",
          "Energie necesară pentru tranziție de fază FĂRĂ schimbare de temperatură; căldură de fuziune, vaporizare",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "states",
      q4(
        "Die 5 Phasenübergänge mit Beispielen",
        "The 5 phase transitions with examples",
        "Az 5 fázisátmenet példákkal",
        "Cele 5 tranzițiile de fază cu exemple",
        lang
      ),
      [
        q4(
          "Schmelzen (Eis→Wasser), Erstarren (Wasser→Eis), Verdampfung (Wasser→Dampf), Kondensation (Dampf→Wasser), Sublimation (Eis→Dampf direkt)",
          "Melting (ice→water), Freezing (water→ice), Evaporation (water→vapor), Condensation (vapor→water), Sublimation (ice→vapor)",
          "Olvadás (jég→víz), Fagyás (víz→jég), Párolgás (víz→gőz), Kondenzáció (gőz→víz), Szublimáció (jég→gőz direkt)",
          "Topire (gheață→apă), Îngheț (apă→gheață), Evaporare (apă→aburi), Condensare (aburi→apă), Sublimare (gheață→aburi)",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "states",
      q4(
        "Was passiert bei Schmelzen / Verdampfung energetisch?",
        "What happens energetically during melting / evaporation?",
        "Mi történik energetikailag olvadás / párolgás során?",
        "Ce se întâmplă energetic în timpul topirii / evaporării?",
        lang
      ),
      [
        q4(
          "Energie wird zu Zwischenraum zwischen Atomen verwendet (nicht zur Temperaturerhöhung); deshalb Temperatur bleibt konstant",
          "Energy goes to increasing atomic spacing (not temperature); temperature stays constant during transition",
          "Energia az atomok közötti térköz növelésére megy (nem hőmérsékletre); hőmérséklet átmenet során állandó",
          "Energia merge la mărirea spațierii atomice (nu la temperatură); temperatura rămâne constantă în timpul tranziției",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "states",
      q4(
        "Schmelzwärme und Verdampfungswärme von Wasser",
        "Heat of fusion and vaporization of water",
        "Víz olvadáshője és párolgáshője",
        "Căldura de fuziune și vaporizare a apei",
        lang
      ),
      [
        q4(
          "Schmelzwärme: ~334 kJ/kg; Verdampfungswärme: ~2260 kJ/kg (viel höher!)",
          "Heat of fusion: ~334 kJ/kg; Heat of vaporization: ~2260 kJ/kg (much higher!)",
          "Olvadáshő: ~334 kJ/kg; Párolgáshő: ~2260 kJ/kg (sokkal magasabb!)",
          "Căldura de fuziune: ~334 kJ/kg; Căldura de vaporizare: ~2260 kJ/kg (mult mai mare!)",
          lang
        ),
      ]
    )
  );

  return questions;
}

// ─── SPECIFIC HEAT ────────────────────────────────────────────────────────

function generateSpecificHeatMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Specific heat values (7 questions)
  const materials = [
    { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă", c: "4200 J/(kg·K)" },
    { de: "Eisen", en: "Iron", hu: "Vas", ro: "Fier", c: "460 J/(kg·K)" },
    { de: "Kupfer", en: "Copper", hu: "Réz", ro: "Cupru", c: "390 J/(kg·K)" },
    { de: "Aluminium", en: "Aluminum", hu: "Alumínium", ro: "Aluminiu", c: "900 J/(kg·K)" },
    { de: "Sand", en: "Sand", hu: "Homok", ro: "Nisip", c: "835 J/(kg·K)" },
  ];

  for (const mat of materials) {
    questions.push(
      createMCQ(
        "thermodynamics",
        "specific_heat",
        q4(
          `${q4(mat.de, mat.en, mat.hu, mat.ro, lang)}: Spezifische Wärme?`,
          `${mat.en}: Specific heat?`,
          `${q4(mat.de, mat.en, mat.hu, mat.ro, lang)}: Fajhő?`,
          `${q4(mat.de, mat.en, mat.hu, mat.ro, lang)}: Căldură specifică?`,
          lang
        ),
        q4(mat.c, mat.c, mat.c, mat.c, lang),
        [
          "1000 J/(kg·K)",
          "5000 J/(kg·K)",
        ],
        rng
      )
    );
  }

  // Template 2: Which heats faster? (8 questions)
  for (let i = 0; i < 8; i++) {
    const mat1 = pick(materials, rng);
    const mat2 = pick(materials.filter(m => m.en !== mat1.en), rng);
    const c1 = parseInt(mat1.c);
    const c2 = parseInt(mat2.c);
    const faster = c1 > c2 ? mat2.en : mat1.en;

    questions.push(
      createMCQ(
        "thermodynamics",
        "specific_heat",
        q4(
          `Wärmt sich schneller auf: ${q4(mat1.de, mat1.en, mat1.hu, mat1.ro, lang)} oder ${q4(mat2.de, mat2.en, mat2.hu, mat2.ro, lang)}?`,
          `Heats up faster: ${mat1.en} or ${mat2.en}?`,
          `Gyorsabban melegszik fel: ${q4(mat1.de, mat1.en, mat1.hu, mat1.ro, lang)} vagy ${q4(mat2.de, mat2.en, mat2.hu, mat2.ro, lang)}?`,
          `Se încălzește mai rapid: ${q4(mat1.de, mat1.en, mat1.hu, mat1.ro, lang)} sau ${q4(mat2.de, mat2.en, mat2.hu, mat2.ro, lang)}?`,
          lang
        ),
        faster,
        [
          c1 > c2 ? mat1.en : mat2.en,
        ],
        rng
      )
    );
  }

  // Template 3: Q = mcΔT calculations with specific heat (7 questions)
  for (let i = 0; i < 7; i++) {
    const m = pick([0.5, 1, 2, 5], rng);
    const material = pick(materials, rng);
    const c = parseInt(material.c);
    const dT = pick([10, 25, 50], rng);
    const Q = (m * c * dT) / 1000; // in kJ

    questions.push(
      createMCQ(
        "thermodynamics",
        "specific_heat",
        q4(
          `${m}kg ${q4(material.de, material.en, material.hu, material.ro, lang)}, um ${dT}K wärmen? Q = ?`,
          `${m}kg ${material.en} heat by ${dT}K? Q = ?`,
          `${m}kg ${q4(material.de, material.en, material.hu, material.ro, lang)}, ${dT}K-vel melegíteni? Q = ?`,
          `${m}kg ${q4(material.de, material.en, material.hu, material.ro, lang)}, încălzit cu ${dT}K? Q = ?`,
          lang
        ),
        Q.toFixed(0) + " kJ",
        [
          (Q / 2).toFixed(0) + " kJ",
          (Q * 2).toFixed(0) + " kJ",
        ],
        rng
      )
    );
  }

  // Template 4: Material comparison in real scenarios (6 questions)
  for (let i = 0; i < 6; i++) {
    const scenario = pick([
      q4("Kupfertopf vs. Wassertopf: Welcher ist heißer nach 1 Minute am Feuer?", "Copper pot vs. water: which gets hotter in 1 min?", "Rézfazék vs. vízfazék: melyik forróbb 1 perc után?", "Oală de cupru vs. apă: care e mai fierbinte după 1 min?", lang),
      q4("Meer vs. Land: Welcher erwärmt sich schneller in Sonne?", "Ocean vs. land: which heats up faster in sun?", "Tenger vs. szárazföld: melyik melegszik fel gyorsabban?", "Ocean vs. teren: care se încălzește mai rapid?", lang),
    ], rng);

    questions.push(
      createMCQ(
        "thermodynamics",
        "specific_heat",
        q4("Vergleich aus Praxis", "Practical comparison", "Gyakorlati összehasonlítás", "Comparație practică", lang),
        pick([
          q4("Der mit niedriger spezifischer Wärme", "The one with lower specific heat", "Az alacsonyabb fajhővel", "Cel cu căldură specifică mai scăzută", lang),
          q4("Der mit hoher spezifischer Wärme", "The one with higher specific heat", "Az magasabb fajhővel", "Cel cu căldură specifică mai mare", lang),
        ], rng),
        [],
        rng
      )
    );
  }

  return questions;
}

function generateSpecificHeatTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "thermodynamics",
      "specific_heat",
      q4(
        "Definition: Spezifische Wärmekapazität",
        "Definition: Specific heat capacity",
        "Definíció: Fajhő",
        "Definiție: Capacitate termică specifică",
        lang
      ),
      [
        q4(
          "Energie notwendig um 1kg eines Stoffes um 1K zu erwärmen; Einheit J/(kg·K)",
          "Energy needed to heat 1kg of substance by 1K; Unit: J/(kg·K)",
          "Energia szükséges 1kg anyag 1K-vel való melegítéséhez; Egység: J/(kg·K)",
          "Energie necesară pentru a încălzi 1kg substanță cu 1K; Unitate: J/(kg·K)",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "specific_heat",
      q4(
        "Warum hat Wasser hohe spezifische Wärme?",
        "Why does water have high specific heat?",
        "Miért van a víznek magas fajhője?",
        "De ce are apa căldură specifică mare?",
        lang
      ),
      [
        q4(
          "Wassermoleküle sind mit Wasserstoffbindungen verbunden; viel Energie nötig um Bindungen zu brechen/verschieben",
          "Water molecules are bonded by hydrogen bonds; lots of energy needed to break/shift bonds",
          "Vízmolekulák hidrogénkötésekkel vannak összekapcsolva; sok energia kell a kötések feltöréséhez/eltolásához",
          "Molecule de apă sunt legate prin legături de hidrogen; multă energie necesară pentru a rupe/deplasa legăturile",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "specific_heat",
      q4(
        "Spezifische Wärme Tabelle für Alltagsstoffe",
        "Specific heat table for everyday materials",
        "Fajhő táblázat mindennapi anyagokhoz",
        "Tabel căldură specifică pentru materiale zilnice",
        lang
      ),
      [
        q4(
          "Wasser: 4200, Luft: 1000, Eisen: 460, Kupfer: 390, Sand: 835, Holz: ~1700 J/(kg·K)",
          "Water: 4200, Air: 1000, Iron: 460, Copper: 390, Sand: 835, Wood: ~1700 J/(kg·K)",
          "Víz: 4200, Levegő: 1000, Vas: 460, Réz: 390, Homok: 835, Fa: ~1700 J/(kg·K)",
          "Apă: 4200, Aer: 1000, Fier: 460, Cupru: 390, Nisip: 835, Lemn: ~1700 J/(kg·K)",
          lang
        ),
      ]
    )
  );

  questions.push(
    createTyping(
      "thermodynamics",
      "specific_heat",
      q4(
        "Warum dauert es lange Wasser zu erwärmen aber schnell Metall?",
        "Why does water heat slowly but metal fast?",
        "Miért tart sokáig a víz melegítése de gyorsan a fém?",
        "De ce durează mult să se încălzească apa dar metalul repede?",
        lang
      ),
      [
        q4(
          "Wasser hat hohe spezifische Wärme (4200), Metalle niedrig (300-500); gleiche Energie → Metall hotter schneller",
          "Water has high specific heat (4200), metals low (300-500); same energy → metal gets hotter faster",
          "Víz magas fajhővel (4200), fémek alacsony (300-500); ugyanez az energia → fém gyorsabban forróbb lesz",
          "Apa are căldură specifică mare (4200), metale scăzută (300-500); aceeași energie → metal mai fierbinte mai repede",
          lang
        ),
      ]
    )
  );

  return questions;
}

// ─── EXPORTS ──────────────────────────────────────────────────────────────

export const K7_THERMO_GENERATORS = {
  temperature: {
    combined: (lang = "en", seed = 0) => [
      ...generateTemperatureMCQ(lang, seed),
      ...generateTemperatureTyping(lang, seed),
    ],
    _mcq: generateTemperatureMCQ,
    _typing: generateTemperatureTyping,
  },
  heat_transfer: {
    combined: (lang = "en", seed = 0) => [
      ...generateHeatTransferMCQ(lang, seed),
      ...generateHeatTransferTyping(lang, seed),
    ],
    _mcq: generateHeatTransferMCQ,
    _typing: generateHeatTransferTyping,
  },
  expansion: {
    combined: (lang = "en", seed = 0) => [
      ...generateExpansionMCQ(lang, seed),
      ...generateExpansionTyping(lang, seed),
    ],
    _mcq: generateExpansionMCQ,
    _typing: generateExpansionTyping,
  },
  states: {
    combined: (lang = "en", seed = 0) => [
      ...generateStatesMCQ(lang, seed),
      ...generateStatesTyping(lang, seed),
    ],
    _mcq: generateStatesMCQ,
    _typing: generateStatesTyping,
  },
  specific_heat: {
    combined: (lang = "en", seed = 0) => [
      ...generateSpecificHeatMCQ(lang, seed),
      ...generateSpecificHeatTyping(lang, seed),
    ],
    _mcq: generateSpecificHeatMCQ,
    _typing: generateSpecificHeatTyping,
  },
};
