// ─── PHYSICS GENERATORS K6: WAVES & SOUND ──────────────────────────────────
// "Wellen & Schall" theme — Wave properties, types, sound, ultrasound
// Grade 6 (11-12 years old)
//
// Generates 35 MCQ + 10 Typing questions per subtopic using seeded PRNG
// Wave basics: f = v / λ, v = f × λ, T = 1 / f

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

// ─── WAVE PROPERTIES ────────────────────────────────────────────────────────

const WAVE_PROPERTIES_DATA = {
  formulas: [
    { de: "f = v / λ", en: "f = v / λ", hu: "f = v / λ", ro: "f = v / λ" },
    { de: "v = f × λ", en: "v = f × λ", hu: "v = f × λ", ro: "v = f × λ" },
    { de: "T = 1 / f", en: "T = 1 / f", hu: "T = 1 / f", ro: "T = 1 / f" },
  ],
  definitions: {
    frequency: q4("Anzahl der Schwingungen pro Sekunde (Hz)", "Number of oscillations per second (Hz)", "A rezgések száma másodpercenként (Hz)", "Numărul de oscilații pe secundă (Hz)", "en"),
    wavelength: q4("Abstand zwischen zwei gleichphasigen Punkten (m)", "Distance between two in-phase points (m)", "Távolság két azonos fázisú pont között (m)", "Distanța dintre două puncte în fază (m)", "en"),
    amplitude: q4("Maximale Auslenkung der Welle (m)", "Maximum displacement of wave (m)", "A hullám maximális kitérése (m)", "Deplasarea maximă a undei (m)", "en"),
    period: q4("Zeit für eine komplette Schwingung (s)", "Time for one complete oscillation (s)", "Egy teljes rezgés ideje (s)", "Timp pentru o oscilație completă (s)", "en"),
  },
};

function generateWavePropertiesMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Definition matching (6 questions)
  const props = ["frequency", "wavelength", "amplitude", "period"];
  for (const prop of props) {
    const correct = WAVE_PROPERTIES_DATA.definitions[prop as keyof typeof WAVE_PROPERTIES_DATA.definitions];
    const wrong = [
      q4("Die Geschwindigkeit der Welle", "The speed of wave", "A hullám sebessége", "Viteza undei", lang),
      q4("Die Energie der Welle", "The energy of wave", "A hullám energiája", "Energia undei", lang),
      q4("Die Form der Welle", "The shape of wave", "A hullám alakja", "Forma undei", lang),
    ];

    const propName = q4(
      prop === "frequency" ? "Frequenz" : prop === "wavelength" ? "Wellenlänge" : prop === "amplitude" ? "Amplitude" : "Periode",
      prop === "frequency" ? "Frequency" : prop === "wavelength" ? "Wavelength" : prop === "amplitude" ? "Amplitude" : "Period",
      prop === "frequency" ? "Frekvencia" : prop === "wavelength" ? "Hullámhossz" : prop === "amplitude" ? "Amplitúdó" : "Periódus",
      prop === "frequency" ? "Frecvență" : prop === "wavelength" ? "Lungime de undă" : prop === "amplitude" ? "Amplitudine" : "Perioadă",
      lang
    );

    questions.push(
      createMCQ(
        "waves_sound",
        "wave_properties",
        q4(`Was ist ${propName}?`, `What is ${propName}?`, `Mi a ${propName}?`, `Ce este ${propName}?`, lang),
        correct,
        wrong,
        rng
      )
    );
  }

  // Template 2: Formula understanding (6 questions)
  for (let i = 0; i < 6; i++) {
    const formula = pick([
      { de: "f = v / λ", en: "f = v / λ", hu: "f = v / λ", ro: "f = v / λ", meaning: "Frequenz aus Geschwindigkeit und Wellenlänge" },
      { de: "v = f × λ", en: "v = f × λ", hu: "v = f × λ", ro: "v = f × λ", meaning: "Geschwindigkeit aus Frequenz und Wellenlänge" },
      { de: "T = 1 / f", en: "T = 1 / f", hu: "T = 1 / f", ro: "T = 1 / f", meaning: "Periode aus Frequenz" },
    ], rng);

    questions.push(
      createMCQ(
        "waves_sound",
        "wave_properties",
        q4(
          `Formel ${q4(formula.de, formula.en, formula.hu, formula.ro, lang)}: Was berechnet man?`,
          `Formula ${formula.en}: What does it calculate?`,
          `Képlet ${formula.hu}: Mit számítunk?`,
          `Formula ${formula.ro}: Ce se calculează?`,
          lang
        ),
        q4(formula.meaning, formula.meaning, formula.meaning, formula.meaning, lang),
        [
          q4("Die Energie der Welle", "Wave energy", "A hullám energiája", "Energia undei", lang),
          q4("Die Amplitude", "The amplitude", "Az amplitúdó", "Amplitudinea", lang),
        ],
        rng
      )
    );
  }

  // Template 3: Calculation problems (7 questions)
  for (let i = 0; i < 7; i++) {
    const scenario = pick([
      { de: "v=340m/s, λ=0,68m", en: "v=340m/s, λ=0.68m", hu: "v=340m/s, λ=0,68m", ro: "v=340m/s, λ=0,68m", answer: "500 Hz", formula: "f=v/λ" },
      { de: "f=50Hz, λ=6,8m", en: "f=50Hz, λ=6.8m", hu: "f=50Hz, λ=6,8m", ro: "f=50Hz, λ=6,8m", answer: "340 m/s", formula: "v=f×λ" },
      { de: "f=100Hz", en: "f=100Hz", hu: "f=100Hz", ro: "f=100Hz", answer: "0,01 s", formula: "T=1/f" },
    ], rng);

    questions.push(
      createMCQ(
        "waves_sound",
        "wave_properties",
        q4(
          `Berechne: ${scenario.de}. Verwende ${scenario.formula}`,
          `Calculate: ${scenario.en}. Use ${scenario.formula}`,
          `Számítsd ki: ${scenario.hu}. Használd ${scenario.formula}`,
          `Calculează: ${scenario.ro}. Folosește ${scenario.formula}`,
          lang
        ),
        q4(scenario.answer, scenario.answer, scenario.answer, scenario.answer, lang),
        [
          q4("10 Hz", "10 Hz", "10 Hz", "10 Hz", lang),
          q4("1000 Hz", "1000 Hz", "1000 Hz", "1000 Hz", lang),
        ],
        rng
      )
    );
  }

  // Template 4: Relationship understanding (7 questions)
  for (let i = 0; i < 7; i++) {
    const relationship = pick([
      { de: "Höhere Frequenz → kürzere Wellenlänge", en: "Higher frequency → shorter wavelength", hu: "Magasabb frekvencia → rövidebb hullámhossz", ro: "Frecvență mai înaltă → lungime de undă mai scurtă" },
      { de: "Längere Wellenlänge → niedrigere Frequenz", en: "Longer wavelength → lower frequency", hu: "Hosszabb hullámhossz → alacsonyabb frekvencia", ro: "Lungime de undă mai lungă → frecvență mai scăzută" },
      { de: "Schnellere Welle → höhere Frequenz bei gleicher Wellenlänge", en: "Faster wave → higher frequency for same wavelength", hu: "Gyorsabb hullám → magasabb frekvencia ugyanarra a hullámhosszra", ro: "Undă mai rapidă → frecvență mai ridicată pentru aceeași lungime de undă" },
    ], rng);

    questions.push(
      createMCQ(
        "waves_sound",
        "wave_properties",
        q4(`Welche Aussage ist wahr?`, `Which statement is true?`, `Melyik állítás igaz?`, `Care afirmație este adevărată?`, lang),
        q4(relationship.de, relationship.en, relationship.hu, relationship.ro, lang),
        [
          q4("Frequenz und Wellenlänge sind unabhängig", "Frequency and wavelength independent", "Frekvencia és hullámhossz független", "Frecvență și lungime de undă independente", lang),
          q4("Amplitude beeinflusst die Frequenz", "Amplitude affects frequency", "Az amplitúdó befolyásolja a frekvenciát", "Amplitudinea afectează frecvența", lang),
        ],
        rng
      )
    );
  }

  // Template 5: Real-world wave examples (6 questions)
  const waveExamples = [
    { de: "Lichtwelle", en: "Light wave", hu: "Fényhullám", ro: "Undă luminoasă", freq: "~5×10¹⁴ Hz" },
    { de: "Radiowelle", en: "Radio wave", hu: "Rádióhullám", ro: "Undă radio", freq: "~10⁶-10⁹ Hz" },
    { de: "Ultraschall", en: "Ultrasound", hu: "Ultrahang", ro: "Ultrasunete", freq: ">20 kHz" },
    { de: "Hörbereich Mensch", en: "Human hearing", hu: "Emberi hallás", ro: "Auzul uman", freq: "20 Hz - 20 kHz" },
  ];

  for (const ex of waveExamples) {
    questions.push(
      createMCQ(
        "waves_sound",
        "wave_properties",
        q4(
          `Frequenz von ${ex.de}:`,
          `Frequency of ${ex.en}:`,
          `A ${ex.hu} frekvenciája:`,
          `Frecvența ${ex.ro}:`,
          lang
        ),
        q4(ex.freq, ex.freq, ex.freq, ex.freq, lang),
        [
          q4("~1000 Hz", "~1000 Hz", "~1000 Hz", "~1000 Hz", lang),
          q4("~10 Hz", "~10 Hz", "~10 Hz", "~10 Hz", lang),
        ],
        rng
      )
    );
  }

  return questions;
}

function generateWavePropertiesTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "waves_sound",
      "wave_properties",
      q4("Was ist eine Welle?", "What is a wave?", "Mi az a hullám?", "Ce este o undă?", lang),
      [
        q4("Eine Störung, die sich durch ein Medium oder Vakuum ausbreitet und Energie überträgt", "A disturbance that travels through medium/vacuum, transferring energy", "Egy zavar, amely közegben vagy vákuumban terjed és energiát továbbít", "O perturbare care se propagă printr-un mediu sau vid, transferând energie", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_properties",
      q4("Schreib die 3 Hauptformeln für Wellen auf", "Write 3 main wave formulas", "Írd le a 3 fő hullám képletet", "Scrie 3 formule principale ale undelor", lang),
      [
        q4("f = v / λ (Frequenz), v = f × λ (Geschwindigkeit), T = 1 / f (Periode)", "f = v / λ, v = f × λ, T = 1 / f", "f = v / λ, v = f × λ, T = 1 / f", "f = v / λ, v = f × λ, T = 1 / f", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_properties",
      q4("Was ist die Beziehung zwischen Frequenz und Periode?", "Relationship between frequency and period?", "A frekvencia és periódus közötti kapcsolat?", "Relația dintre frecvență și perioadă?", lang),
      [
        q4("Periode ist der Kehrwert der Frequenz: T = 1 / f", "Period is reciprocal of frequency: T = 1 / f", "A periódus a frekvencia reciproka: T = 1 / f", "Perioada este reciproca frecvenței: T = 1 / f", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_properties",
      q4("Berechne Frequenz: v=340 m/s, λ=0,68 m", "Calculate frequency: v=340 m/s, λ=0.68 m", "Számítsd ki a frekvenciát: v=340 m/s, λ=0,68 m", "Calculează frecvența: v=340 m/s, λ=0,68 m", lang),
      [
        q4("f = 340 / 0,68 = 500 Hz", "f = 340 / 0.68 = 500 Hz", "f = 340 / 0,68 = 500 Hz", "f = 340 / 0,68 = 500 Hz", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_properties",
      q4("Was ist Amplitude?", "What is amplitude?", "Mi az amplitúdó?", "Ce este amplitudinea?", lang),
      [
        q4("Die maximale Auslenkung einer Welle aus ihrer Ruhelage, gemessen in Metern", "Maximum displacement of wave from rest position, measured in meters", "A hullám maximális eltérése a nyugalmi helyzetből, méterekben mérve", "Deplasarea maximă a undei din poziția de repaus, măsurată în metri", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_properties",
      q4("Wie beeinflussen Frequenz und Wellenlänge die Wellengeschwindigkeit?", "How do frequency and wavelength affect wave speed?", "Hogyan befolyásolják a frekvencia és hullámhossz a hullám sebességét?", "Cum afectează frecvența și lungimea de undă viteza undei?", lang),
      [
        q4("v = f × λ: Wellengeschwindigkeit ist Produkt aus Frequenz und Wellenlänge", "v = f × λ: wave speed equals frequency times wavelength", "v = f × λ: a hullám sebessége = frekvencia × hullámhossz", "v = f × λ: viteza undei = frecvență × lungime de undă", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_properties",
      q4("Unterschied zwischen Wellen mit hoher vs. niedriger Frequenz?", "Difference high vs. low frequency waves?", "Különbség magas vs. alacsony frekvenciájú hullámok között?", "Diferență între undele de înaltă vs. scăzută frecvență?", lang),
      [
        q4("Hohe Frequenz: viele Schwingungen/s, kürzere Wellenlänge; Niedrige: weniger Schwingungen, längere Wellenlänge", "High freq: many oscillations/sec, shorter wavelength; Low: fewer, longer wavelength", "Magas frekvencia: sok rezgés/s, rövidebb hullámhossz; Alacsony: kevesebb, hosszabb hullámhossz", "Frecvență ridicată: multe oscilații/sec, lungime de undă mai scurtă; Scăzută: mai puțin, lungime mai lungă", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_properties",
      q4("Periode für Frequenz f=100 Hz?", "Period for frequency f=100 Hz?", "Periódus f=100 Hz frekvenciához?", "Perioada pentru frecvența f=100 Hz?", lang),
      [
        q4("T = 1 / 100 = 0,01 s (10 ms)", "T = 1 / 100 = 0.01 s (10 ms)", "T = 1 / 100 = 0,01 s (10 ms)", "T = 1 / 100 = 0,01 s (10 ms)", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_properties",
      q4("Wellengeschwindigkeit Licht im Vakuum?", "Speed of light in vacuum?", "Fénysebessége vákuumban?", "Viteza luminii în vid?", lang),
      [
        q4("c = 3 × 10⁸ m/s (299.792.458 m/s)", "c = 3 × 10⁸ m/s (299,792,458 m/s)", "c = 3 × 10⁸ m/s", "c = 3 × 10⁸ m/s", lang),
      ]
    )
  );

  return questions;
}

// ─── WAVE TYPES ─────────────────────────────────────────────────────────────

const WAVE_TYPES_DATA = {
  types: [
    { de: "Transversalwelle", en: "Transverse wave", hu: "Transzverzális hullám", ro: "Undă transversală", oscillation: "perpendicular", example: "Light, water surface, string" },
    { de: "Longitudinalwelle", en: "Longitudinal wave", hu: "Hosszanti hullám", ro: "Undă longitudinală", oscillation: "parallel", example: "Sound, spring compression" },
    { de: "Wasserwelle", en: "Water wave", hu: "Vízhullám", ro: "Undă apei", oscillation: "elliptical", example: "Ocean waves, ripples" },
    { de: "Lichtwelle", en: "Light wave", hu: "Fényhullám", ro: "Undă luminoasă", oscillation: "transverse (EM)", example: "Visible light, ultraviolet" },
    { de: "Erdbebenwelle", en: "Seismic wave", hu: "Szeizmikus hullám", ro: "Undă seismică", oscillation: "P and S waves", example: "Earthquakes" },
  ],
};

function generateWaveTypesMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Wave type identification (6 questions)
  for (const wType of WAVE_TYPES_DATA.types) {
    const correct = q4(wType.de, wType.en, wType.hu, wType.ro, lang);
    const wrongTypes = WAVE_TYPES_DATA.types.filter((t: any) => t.en !== wType.en);
    const wrong = [
      q4(wrongTypes[0].de, wrongTypes[0].en, wrongTypes[0].hu, wrongTypes[0].ro, lang),
      q4(wrongTypes[1].de, wrongTypes[1].en, wrongTypes[1].hu, wrongTypes[1].ro, lang),
    ];

    questions.push(
      createMCQ(
        "waves_sound",
        "wave_types",
        q4(
          `Beispiele: ${wType.example}. Welche Wellentyp?`,
          `Examples: ${wType.example}. Which wave type?`,
          `Példák: ${wType.example}. Melyik hullámtípus?`,
          `Exemple: ${wType.example}. Care tip de undă?`,
          lang
        ),
        correct,
        wrong,
        rng
      )
    );
  }

  // Template 2: Oscillation direction (6 questions)
  for (let i = 0; i < 6; i++) {
    const wType = pick(WAVE_TYPES_DATA.types, rng);
    const correct = q4(wType.oscillation, wType.oscillation, wType.oscillation, wType.oscillation, lang);

    questions.push(
      createMCQ(
        "waves_sound",
        "wave_types",
        q4(
          `${q4(wType.de, wType.en, wType.hu, wType.ro, lang)}: Wie schwingen die Teilchen?`,
          `${wType.en}: How do particles oscillate?`,
          `${q4(wType.de, wType.en, wType.hu, wType.ro, lang)}: Hogyan rezegnek a részecskék?`,
          `${q4(wType.de, wType.en, wType.hu, wType.ro, lang)}: Cum oscilează particulele?`,
          lang
        ),
        correct,
        [
          q4("In zufälligen Richtungen", "In random directions", "Véletlenszerű irányokba", "În direcții aleatorii", lang),
          q4("Nur nach oben und unten", "Only up and down", "Csak fel és le", "Doar în sus și jos", lang),
        ],
        rng
      )
    );
  }

  // Template 3: Transverse vs. longitudinal (7 questions)
  for (let i = 0; i < 7; i++) {
    const scenario = pick([
      q4("Ein Seil wird horizontal gezupft", "A string is plucked horizontally", "Egy szálat vízszintesen szednek", "Un șir este smuls orizontal", lang),
      q4("Eine Feder wird zusammengedrückt und losgelassen", "A spring is compressed and released", "Egy rugó össze van nyomva és elengedve", "Un arc este comprimat și eliberat", lang),
      q4("Schallwellen von einem Lautsprecher", "Sound waves from speaker", "Hanghullámok egy hangszóróból", "Unde sonore dintr-un difuzor", lang),
    ], rng);

    const waveType = scenario.includes("Seil") ? q4("Transversalwelle", "Transverse", "Transzverzális", "Transversală", lang)
      : scenario.includes("Feder") ? q4("Longitudinalwelle", "Longitudinal", "Hosszanti", "Longitudinală", lang)
      : q4("Longitudinalwelle", "Longitudinal", "Hosszanti", "Longitudinală", lang);

    questions.push(
      createMCQ(
        "waves_sound",
        "wave_types",
        q4(`${scenario}: Transversal oder Longitudinal?`, `${scenario}: Transverse or longitudinal?`, `${scenario}: Transzverzális vagy hosszanti?`, `${scenario}: Transversală sau longitudinală?`, lang),
        waveType,
        [q4("Beide", "Both", "Mindkettő", "Ambele", lang)],
        rng
      )
    );
  }

  // Template 4: Wave properties by type (7 questions)
  for (let i = 0; i < 7; i++) {
    const property = pick([
      { de: "Lichtwelle kann im Vakuum ausbreiten", en: "Light wave can travel through vacuum", hu: "Fényhullám terjedhet vákuumban", ro: "Unda luminoasă poate călători prin vid" },
      { de: "Schallwelle benötigt ein Medium", en: "Sound wave needs a medium", hu: "Hanghullám közegre van szüksége", ro: "Unda sonoră are nevoie de mediu" },
      { de: "Wasserwelle ist Oberflächenwelle", en: "Water wave is surface wave", hu: "Vízhullám felületi hullám", ro: "Unda apei este undă de suprafață" },
      { de: "Erdbebenwellen können durch Erde reisen", en: "Seismic waves travel through Earth", hu: "Szeizmikus hullámok a Föld által terjednek", ro: "Undele seismice călătoresc prin Pământ" },
    ], rng);

    questions.push(
      createMCQ(
        "waves_sound",
        "wave_types",
        q4("Welche Aussage ist wahr?", "Which statement is true?", "Melyik állítás igaz?", "Care afirmație este adevărată?", lang),
        q4(property.de, property.en, property.hu, property.ro, lang),
        [
          q4("Alle Wellen brauchen Medium", "All waves need medium", "Minden hullámnak közegre van szüksége", "Toate undele au nevoie de mediu", lang),
          q4("Alle Wellen sind Transversal", "All waves are transverse", "Minden hullám transzverzális", "Toate undele sunt transversale", lang),
        ],
        rng
      )
    );
  }

  // Template 5: Mechanical vs. electromagnetic (6 questions)
  for (let i = 0; i < 6; i++) {
    const category = pick([
      { de: "Mechanische Welle", en: "Mechanical wave", hu: "Mechanikai hullám", ro: "Undă mecanică", needs: "braucht Medium", examples: "Schall, Wasserwelle, Seilwelle" },
      { de: "Elektromagnetische Welle", en: "Electromagnetic wave", hu: "Elektromágneses hullám", ro: "Undă electromagnetică", needs: "braucht kein Medium", examples: "Licht, Radio, Röntgen" },
    ], rng);

    const correct = q4(category.needs, category.needs, category.needs, category.needs, lang);

    questions.push(
      createMCQ(
        "waves_sound",
        "wave_types",
        q4(
          `${q4(category.de, category.en, category.hu, category.ro, lang)} (${category.examples}): Medium?`,
          `${category.en} (${category.examples}): Medium?`,
          `${q4(category.de, category.en, category.hu, category.ro, lang)} (${category.examples}): Közeg?`,
          `${q4(category.de, category.en, category.hu, category.ro, lang)} (${category.examples}): Mediu?`,
          lang
        ),
        correct,
        [q4("Optional", "Optional", "Opcionális", "Opțional", lang)],
        rng
      )
    );
  }

  return questions;
}

function generateWaveTypesTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "waves_sound",
      "wave_types",
      q4("Was ist eine Transversalwelle? Gib Beispiele", "What is transverse wave? Give examples", "Mi a transzverzális hullám? Adj példákat", "Ce este unda transversală? Dă exemple", lang),
      [
        q4("Welle, bei der Teilchen senkrecht zur Ausbreitungsrichtung schwingen. Beispiele: Lichtwelle, Seilwelle, Wasserwelle", "Wave where particles oscillate perpendicular to propagation. Examples: light, string, water waves", "Hullám, ahol részecskék merőlegesen rezegnek a terjedési irányra. Példák: fényhullám, szálhullám, vízhullám", "Undă în care particulele oscilează perpendicular pe direcția de propagare. Exemple: lumină, coardă, apă", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_types",
      q4("Was ist eine Longitudinalwelle? Gib Beispiele", "What is longitudinal wave? Give examples", "Mi a hosszanti hullám? Adj példákat", "Ce este unda longitudinală? Dă exemple", lang),
      [
        q4("Welle, bei der Teilchen parallel zur Ausbreitungsrichtung schwingen. Beispiele: Schallwelle, Federwelle", "Wave where particles oscillate parallel to propagation. Examples: sound, spring waves", "Hullám, ahol részecskék párhuzamosan rezegnek a terjedési irányra. Példák: hanghullám, rugóhullám", "Undă în care particulele oscilează paralel cu direcția de propagare. Exemple: sunet, unde de arc", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_types",
      q4("Unterschied Lichtwelle und Schallwelle?", "Difference light and sound waves?", "Különbség fényhullám és hanghullám között?", "Diferență între undele luminoase și undele sonore?", lang),
      [
        q4("Licht: EM-Welle, keine Medium, ~3×10⁸ m/s; Schall: Longitudinal, benötigt Medium, ~340 m/s Luft", "Light: EM wave, no medium needed, ~3×10⁸ m/s; Sound: longitudinal, needs medium, ~340 m/s in air", "Fény: EM-hullám, nincs közeg, ~3×10⁸ m/s; Hang: hosszanti, közeg kell, ~340 m/s levegőben", "Lumină: undă EM, nu are nevoie de mediu, ~3×10⁸ m/s; Sunet: longitudinal, mediu necesar, ~340 m/s în aer", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_types",
      q4("Warum kann Schall im Vakuum nicht ausbreiten?", "Why can't sound travel in vacuum?", "Miért nem terjedhet a hang vákuumban?", "De ce nu poate sunetul se propaga în vid?", lang),
      [
        q4("Schall ist eine Longitudinalwelle und benötigt Teilchen (Medium), die sich hin- und herbewegen können", "Sound is longitudinal wave, needs particles (medium) to oscillate", "A hang hosszanti hullám és részecskéket (közegeket) igényel az oszcilláláshoz", "Sunetul este undă longitudinală și are nevoie de particule (mediu) pentru a oscila", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_types",
      q4("Wasserwellen: Trans- oder Longitudinal?", "Water waves: transverse or longitudinal?", "Vízhullámok: transz- vagy hosszanti?", "Undele apei: transversale sau longitudinale?", lang),
      [
        q4("Kombiniert: Teilchen bewegen sich elliptisch - teil transversal, teil longitudinal", "Combined: particles move elliptically - partly transverse, partly longitudinal", "Kombinált: részecskék elliptikusan mozognak - részben transzverzális, részben hosszanti", "Combinată: particulele se mișcă eliptic - parțial transversale, parțial longitudinale", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_types",
      q4("Nenne 3 elektromagnetische Wellen", "Name 3 electromagnetic waves", "Nevezz meg 3 elektromágneses hullámot", "Numește 3 unde electromagnetice", lang),
      [
        q4("Lichtwelle, Radiowelle, Röntgenstrahlung / oder: Mikrowelle, Infrarot, Ultraviolett", "Light, radio waves, X-rays / or: microwaves, infrared, ultraviolet", "Fényhullám, rádióhullám, röntgensugárzás / vagy: mikrohullám, infravörös, ultraibolya", "Lumină, unde radio, raze X / sau: microunde, infraroșu, ultraviolet", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_types",
      q4("Erdbebenwellen-Typen?", "Types of seismic waves?", "Szeizmikus hullámok típusai?", "Tipuri de unde seismice?", lang),
      [
        q4("P-Wellen (Primary/Longitudinal) - schneller, S-Wellen (Secondary/Transversal) - langsamer", "P-waves (primary/longitudinal) - faster, S-waves (secondary/transverse) - slower", "P-hullámok (elsődleges/hosszanti) - gyorsabb, S-hullámok (másodlagos/transzverzális) - lassabb", "P-unde (primare/longitudinale) - mai rapid, S-unde (secundare/transversale) - mai lent", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_types",
      q4("Medium für verschiedene Wellen notwendig?", "Medium needed for different waves?", "Közeg szükséges különféle hullámokhoz?", "Mediu necesar pentru diferite unde?", lang),
      [
        q4("Mechanische Wellen (Schall, Wasserwelle) brauchen Medium; EM-Wellen (Licht) nicht", "Mechanical waves (sound, water) need medium; EM waves (light) don't", "Mechanikai hullámok (hang, víz) közegre van szüksége; EM-hullámok (fény) nem", "Undele mecanice (sunet, apă) au nevoie de mediu; undele EM (lumină) nu", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "wave_types",
      q4("Welche Welle am schnellsten im Vergleich?", "Which wave fastest in comparison?", "Melyik hullám a leggyorsabb összehasonlításban?", "Care undă este cea mai rapidă în comparație?", lang),
      [
        q4("Lichtwelle: ~3×10⁸ m/s > Schallwelle in Luft: ~340 m/s > Wasserwelle: ~1-10 m/s", "Light: ~3×10⁸ m/s > Sound in air: ~340 m/s > Water wave: ~1-10 m/s", "Fény: ~3×10⁸ m/s > Hang levegőben: ~340 m/s > Vízhullám: ~1-10 m/s", "Lumină: ~3×10⁸ m/s > Sunet în aer: ~340 m/s > Undă apei: ~1-10 m/s", lang),
      ]
    )
  );

  return questions;
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

// ─── SOUND PROPERTIES ───────────────────────────────────────────────────────

const SOUND_PROPERTIES_DATA = {
  ranges: {
    human: { min: 20, max: 20000, unit: "Hz" },
    dog: { min: 20, max: 65000, unit: "Hz" },
    bat: { min: 1000, max: 200000, unit: "Hz" },
    whale: { min: 10, max: 10000, unit: "Hz" },
  },
  speeds: {
    air: 340,
    water: 1480,
    steel: 5000,
    vacuum: 0,
  },
};

function generateSoundPropertiesMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Frequency perception (6 questions)
  for (let i = 0; i < 6; i++) {
    const range = pick([
      { de: "Menschen", en: "Humans", hu: "Emberek", ro: "Oamenii", min: 20, max: 20000 },
      { de: "Hunde", en: "Dogs", hu: "Kutyák", ro: "Câini", min: 20, max: 65000 },
      { de: "Fledermäuse", en: "Bats", hu: "Denevérek", ro: "Lilieci", min: 1000, max: 200000 },
    ], rng);

    questions.push(
      createMCQ(
        "waves_sound",
        "sound_properties",
        q4(
          `Hörbereich ${q4(range.de, range.en, range.hu, range.ro, lang)}:`,
          `Hearing range ${range.en}:`,
          `${q4(range.de, range.en, range.hu, range.ro, lang)} hallási tartománya:`,
          `Intervalul auditiv ${q4(range.de, range.en, range.hu, range.ro, lang)}:`,
          lang
        ),
        q4(`${range.min}-${range.max} Hz`, `${range.min}-${range.max} Hz`, `${range.min}-${range.max} Hz`, `${range.min}-${range.max} Hz`, lang),
        [
          q4("10-1000 Hz", "10-1000 Hz", "10-1000 Hz", "10-1000 Hz", lang),
          q4("100-10000 Hz", "100-10000 Hz", "100-10000 Hz", "100-10000 Hz", lang),
        ],
        rng
      )
    );
  }

  // Template 2: Sound speed in different media (6 questions)
  for (let i = 0; i < 6; i++) {
    const medium = pick([
      { de: "Luft", en: "Air", hu: "Levegő", ro: "Aer", speed: 340 },
      { de: "Wasser", en: "Water", hu: "Víz", ro: "Apă", speed: 1480 },
      { de: "Stahl", en: "Steel", hu: "Acél", ro: "Oțel", speed: 5000 },
    ], rng);

    questions.push(
      createMCQ(
        "waves_sound",
        "sound_properties",
        q4(
          `Schallgeschwindigkeit in ${medium.de}:`,
          `Sound speed in ${medium.en}:`,
          `Hangsebessség ${medium.hu}-ban:`,
          `Viteza sunetului în ${medium.ro}:`,
          lang
        ),
        q4(`${medium.speed} m/s`, `${medium.speed} m/s`, `${medium.speed} m/s`, `${medium.speed} m/s`, lang),
        [
          q4("100 m/s", "100 m/s", "100 m/s", "100 m/s", lang),
          q4("340 m/s", "340 m/s", "340 m/s", "340 m/s", lang),
        ],
        rng
      )
    );
  }

  // Template 3: Frequency and pitch relationship (7 questions)
  for (let i = 0; i < 7; i++) {
    const pitchType = pick([
      { de: "Höhere Frequenz → höhere Tonhöhe", en: "Higher frequency → higher pitch", hu: "Magasabb frekvencia → magasabb hangnem", ro: "Frecvență mai înaltă → tonalitate mai înaltă" },
      { de: "Niedrigere Frequenz → tiefere Tonhöhe", en: "Lower frequency → lower pitch", hu: "Alacsonyabb frekvencia → mélyebb hangnem", ro: "Frecvență mai scăzută → tonalitate mai scăzută" },
    ], rng);

    questions.push(
      createMCQ(
        "waves_sound",
        "sound_properties",
        q4(`Was ist wahr?`, `Which is true?`, `Melyik igaz?`, `Care este adevărat?`, lang),
        q4(pitchType.de, pitchType.en, pitchType.hu, pitchType.ro, lang),
        [
          q4("Frequenz und Tonhöhe unabhängig", "Frequency and pitch independent", "Frekvencia és hangnem független", "Frecvență și tonalitate independente", lang),
          q4("Amplitude bestimmt Tonhöhe", "Amplitude determines pitch", "Az amplitúdó határozza meg a hangnemet", "Amplitudinea determină tonalitatea", lang),
        ],
        rng
      )
    );
  }

  // Template 4: Loudness and amplitude (7 questions)
  for (let i = 0; i < 7; i++) {
    const loudnessProperty = pick([
      q4("Höhere Amplitude → lauterer Ton", "Higher amplitude → louder sound", "Magasabb amplitúdó → hangosabb hang", "Amplitudine mai mare → sunet mai tare", lang),
      q4("Niedrigere Amplitude → leiser Ton", "Lower amplitude → quieter sound", "Alacsonyabb amplitúdó → csendesebb hang", "Amplitudine mai scăzută → sunet mai liniștit", lang),
      q4("Amplitude und Lautstärke korrelieren", "Amplitude and loudness correlate", "Az amplitúdó és a hangosság korrelálnak", "Amplitudinea și intensitatea sunetului corelează", lang),
    ], rng);

    questions.push(
      createMCQ(
        "waves_sound",
        "sound_properties",
        q4(`Lautstärke eines Tons hängt ab von:`, `Loudness of tone depends on:`, `A hang hangossága függ:`, `Intensitatea sunetului depinde de:`, lang),
        loudnessProperty,
        [
          q4("Frequenz", "Frequency", "Frekvencia", "Frecvență", lang),
          q4("Wellenlänge", "Wavelength", "Hullámhossz", "Lungime de undă", lang),
        ],
        rng
      )
    );
  }

  // Template 5: Sound in different media (6 questions)
  for (let i = 0; i < 6; i++) {
    questions.push(
      createMCQ(
        "waves_sound",
        "sound_properties",
        q4(
          `Warum ist Schall in Wasser schneller als in Luft?`,
          `Why is sound faster in water than in air?`,
          `Miért gyorsabb a hang a vízben, mint a levegőben?`,
          `De ce este sunetul mai rapid în apă decât în aer?`,
          lang
        ),
        q4("Wasser ist dichter, Teilchen sind näher beieinander", "Water denser, particles closer together", "A víz sűrűbb, a részecskék közelebb vannak egymáshoz", "Apa este mai densă, particulele sunt mai aproape", lang),
        [
          q4("Wasser hat niedrigere Temperatur", "Water has lower temperature", "A víz alacsonyabb hőmérsékletű", "Apa are temperatură mai scăzută", lang),
          q4("Schall wird in Wasser reflektiert", "Sound reflects in water", "A hang tükröződik a vízben", "Sunetul se reflectă în apă", lang),
        ],
        rng
      )
    );
  }

  return questions;
}

function generateSoundPropertiesTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "waves_sound",
      "sound_properties",
      q4("Schall Geschwindigkeit in verschiedenen Medien?", "Sound speed in different media?", "Hang sebessége különféle közegekben?", "Viteza sunetului în diferite medii?", lang),
      [
        q4("Luft: 340 m/s, Wasser: 1480 m/s, Stahl: 5000 m/s, Vakuum: 0 m/s (kein Schall)", "Air: 340 m/s, Water: 1480 m/s, Steel: 5000 m/s, Vacuum: 0 m/s (no sound)", "Levegő: 340 m/s, Víz: 1480 m/s, Acél: 5000 m/s, Vákuum: 0 m/s", "Aer: 340 m/s, Apă: 1480 m/s, Oțel: 5000 m/s, Vid: 0 m/s", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "sound_properties",
      q4("Hörbereich Menschen und Tiere?", "Hearing range humans and animals?", "Hallási tartomány embereknek és állatoknak?", "Intervalul auditiv oameni și animale?", lang),
      [
        q4("Menschen: 20-20000 Hz, Hunde: bis 65000 Hz, Fledermäuse: bis 200000 Hz, Wale: 10-10000 Hz", "Humans: 20-20kHz, Dogs: to 65kHz, Bats: to 200kHz, Whales: 10-10kHz", "Emberek: 20-20000 Hz, Kutyák: 65000 Hz, Denevérek: 200000 Hz, Bálnák: 10-10000 Hz", "Oameni: 20-20000 Hz, Câini: 65000 Hz, Lilieci: 200000 Hz, Balene: 10-10000 Hz", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "sound_properties",
      q4("Wie hängen Frequenz und Tonhöhe zusammen?", "How do frequency and pitch relate?", "Hogyan függnek össze a frekvencia és a hangnem?", "Cum se leagă frecvența și tonalitatea?", lang),
      [
        q4("Höhere Frequenz → höhere Tonhöhe; niedrigere Frequenz → tiefere Tonhöhe", "Higher frequency → higher pitch; lower frequency → lower pitch", "Magasabb frekvencia → magasabb hangnem; alacsonyabb frekvencia → mélyebb hangnem", "Frecvență mai mare → tonalitate mai înaltă; frecvență mai mică → tonalitate mai scăzută", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "sound_properties",
      q4("Lautstärke und Amplitude Beziehung?", "Loudness and amplitude relationship?", "Hangosság és amplitúdó kapcsolata?", "Relația dintre intensitate și amplitudine?", lang),
      [
        q4("Höhere Amplitude → lauterer Ton; niedrigere Amplitude → leiser Ton", "Higher amplitude → louder; lower amplitude → quieter", "Magasabb amplitúdó → hangosabb; alacsonyabb amplitúdó → csendesebb", "Amplitudine mai mare → mai tare; amplitudine mai mică → mai liniștit", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "sound_properties",
      q4("Warum hören wir Tiere unter Wasser?", "Why can we hear animals underwater?", "Miért hallunk állatokat a víz alatt?", "De ce putem auzi animale sub apă?", lang),
      [
        q4("Schall reist schneller und weiter in Wasser wegen höherer Dichte", "Sound travels faster and farther in water due to higher density", "A hang gyorsabban és messzebbre utazik a vízben a magasabb sűrűség miatt", "Sunetul se deplasează mai rapid și mai departe în apă din cauza densității mai mari", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "sound_properties",
      q4("Schallgeschwindigkeit Temperatur Abhängigkeit?", "Sound speed temperature dependency?", "Hang sebessége hőmérséklet függőségi?", "Dependența vitezei sunetului de temperatură?", lang),
      [
        q4("Höhere Temperatur → schneller Schall (Teilchen bewegen sich schneller)", "Higher temperature → faster sound (particles move faster)", "Magasabb hőmérséklet → gyorsabb hang (részecskék gyorsabban mozognak)", "Temperatură mai mare → sunet mai rapid (particulele se mișcă mai repede)", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "sound_properties",
      q4("Schallgeschwindigkeit Luft in 20°C?", "Sound speed in air at 20°C?", "Hangsebessség 20°C-os levegőben?", "Viteza sunetului în aer la 20°C?", lang),
      [
        q4("~343 m/s (oft gerundet zu 340 m/s)", "~343 m/s (often rounded to 340 m/s)", "~343 m/s (gyakran 340 m/s-re kerekítve)", "~343 m/s (adesea rotunjit la 340 m/s)", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "sound_properties",
      q4("Echo entsteht wie?", "How does echo occur?", "Az visszhang hogyan keletkezik?", "Cum se creează ecoul?", lang),
      [
        q4("Schallwelle trifft Oberfläche und wird zurückreflektiert zu Quelle", "Sound wave hits surface and reflects back to source", "Hanghullám ütközik a felülethez és visszatükröződik a forrásra", "Unda sonoră lovește suprafața și se reflectă înapoi la sursă", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "sound_properties",
      q4("Infrasound vs. Ultrasound Definition?", "Infrasound vs. ultrasound definition?", "Infrahang vs. ultrahang meghatározása?", "Definirea infrasunetelor vs. ultrasunetelor?", lang),
      [
        q4("Infrasound: <20 Hz (unter Höhbereich), Ultrasound: >20000 Hz (über Höhbereich)", "Infrasound: <20 Hz (below hearing range), Ultrasound: >20000 Hz (above hearing range)", "Infrahang: <20 Hz (hallási tartomány alatt), Ultrahang: >20000 Hz (hallási tartomány felett)", "Infrasunete: <20 Hz (sub intervalul auditiv), Ultrasunete: >20000 Hz (deasupra intervalului auditiv)", lang),
      ]
    )
  );

  return questions;
}

// ─── ULTRASOUND ─────────────────────────────────────────────────────────────

const ULTRASOUND_DATA = {
  applications: [
    { de: "Medizinisches Ultraschall", en: "Medical ultrasound", hu: "Orvosi ultrahang", ro: "Ultrasunete medicale", freq: ">2 MHz", use: "Pregnancy imaging, organ scanning" },
    { de: "Zahnreinigung", en: "Dental cleaning", hu: "Fogtisztítás", ro: "Curățare dentară", freq: "~40-50 kHz", use: "Plaque removal" },
    { de: "Ultraschall-Metallprüfung", en: "UT non-destructive testing", hu: "Ultrahang fémvizsgálat", ro: "Testare non-distructivă", freq: "1-10 MHz", use: "Crack detection in metals" },
    { de: "Fledermaus-Echoortung", en: "Bat echolocation", hu: "Denevér echolokáció", ro: "Echolochie liliac", freq: "20-200 kHz", use: "Navigation, hunting" },
    { de: "Tiermedizin", en: "Veterinary medicine", hu: "Állatorvosi orvostudomány", ro: "Medicină veterinară", freq: ">2 MHz", use: "Animal pregnancy, organ imaging" },
  ],
};

function generateUltrasoundMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Ultrasound definition (6 questions)
  for (let i = 0; i < 6; i++) {
    const correct = q4(
      "Schallwellen mit Frequenz über 20.000 Hz",
      "Sound waves with frequency above 20,000 Hz",
      "Hanghullámok 20.000 Hz feletti frekvenciával",
      "Unde sonore cu frecvență peste 20.000 Hz",
      lang
    );
    const wrong = [
      q4("Lichtwellen hoher Frequenz", "Light waves of high frequency", "Magas frekvenciájú fényhullámok", "Unde luminoase de înaltă frecvență", lang),
      q4("Wärmewellen", "Heat waves", "Hőhullámok", "Unde termice", lang),
    ];

    questions.push(
      createMCQ(
        "waves_sound",
        "ultrasound",
        q4("Was ist Ultraschall?", "What is ultrasound?", "Mi az ultrahang?", "Ce este ultrasunete?", lang),
        correct,
        wrong,
        rng
      )
    );
  }

  // Template 2: Application identification (6 questions)
  for (const app of ULTRASOUND_DATA.applications) {
    const correct = q4(app.de, app.en, app.hu, app.ro, lang);
    const wrongApps = ULTRASOUND_DATA.applications.filter((a: any) => a.en !== app.en);
    const wrong = [
      q4(wrongApps[0].de, wrongApps[0].en, wrongApps[0].hu, wrongApps[0].ro, lang),
      q4(wrongApps[1].de, wrongApps[1].en, wrongApps[1].hu, wrongApps[1].ro, lang),
    ];

    questions.push(
      createMCQ(
        "waves_sound",
        "ultrasound",
        q4(
          `Ultraschall Anwendung: ${app.use}`,
          `Ultrasound application: ${app.use}`,
          `Ultrahang alkalmazása: ${app.use}`,
          `Aplicație ultrasunete: ${app.use}`,
          lang
        ),
        correct,
        wrong,
        rng
      )
    );
  }

  // Template 3: Medical ultrasound (7 questions)
  for (let i = 0; i < 7; i++) {
    const medicalUse = pick([
      q4("Schwangerschaft visualisieren", "Visualize pregnancy", "Terhesség vizualizálása", "Vizualizează sarcina", lang),
      q4("Innere Organe scannen", "Scan internal organs", "Belső szervek letapogatása", "Scanează organele interne", lang),
      q4("Blutfluss messen", "Measure blood flow", "Vérfolyás mérése", "Măsoară fluxul sangvin", lang),
    ], rng);

    questions.push(
      createMCQ(
        "waves_sound",
        "ultrasound",
        q4(`Medizinisches Ultraschall: ${medicalUse}?`, `Medical ultrasound: ${medicalUse}?`, `Orvosi ultrahang: ${medicalUse}?`, `Ultrasunete medicale: ${medicalUse}?`, lang),
        q4("Ja", "Yes", "Igen", "Da", lang),
        [q4("Nein", "No", "Nem", "Nu", lang)],
        rng
      )
    );
  }

  // Template 4: Frequency ranges (7 questions)
  for (let i = 0; i < 7; i++) {
    const freqType = pick([
      { de: "Infrasound", en: "Infrasound", hu: "Infrahang", ro: "Infrasunete", range: "<20 Hz" },
      { de: "Hörbares Schall", en: "Audible sound", hu: "Hallható hang", ro: "Sunet audibil", range: "20 Hz - 20000 Hz" },
      { de: "Ultraschall", en: "Ultrasound", hu: "Ultrahang", ro: "Ultrasunete", range: ">20000 Hz" },
    ], rng);

    questions.push(
      createMCQ(
        "waves_sound",
        "ultrasound",
        q4(
          `Frequenzbereich ${q4(freqType.de, freqType.en, freqType.hu, freqType.ro, lang)}:`,
          `Frequency range ${freqType.en}:`,
          `Frekvencia tartomány ${q4(freqType.de, freqType.en, freqType.hu, freqType.ro, lang)}:`,
          `Interval de frecvență ${q4(freqType.de, freqType.en, freqType.hu, freqType.ro, lang)}:`,
          lang
        ),
        q4(freqType.range, freqType.range, freqType.range, freqType.range, lang),
        [
          q4("10-100 Hz", "10-100 Hz", "10-100 Hz", "10-100 Hz", lang),
          q4("100-1000 Hz", "100-1000 Hz", "100-1000 Hz", "100-1000 Hz", lang),
        ],
        rng
      )
    );
  }

  // Template 5: Real-world applications (6 questions)
  const apps = [
    { de: "Zahnreinigung", en: "Dental cleaning", hu: "Fogtisztítás", ro: "Curățare dentară" },
    { de: "Fledermaus Navigation", en: "Bat navigation", hu: "Denevér navigáció", ro: "Navigație liliac" },
    { de: "Industrielle Prüfung", en: "Industrial testing", hu: "Ipari vizsgálat", ro: "Testare industrială" },
  ];

  for (const app of apps) {
    questions.push(
      createMCQ(
        "waves_sound",
        "ultrasound",
        q4(
          `${q4(app.de, app.en, app.hu, app.ro, lang)}: Verwendet Ultraschall?`,
          `${app.en}: Uses ultrasound?`,
          `${q4(app.de, app.en, app.hu, app.ro, lang)}: Ultrahangot használ?`,
          `${q4(app.de, app.en, app.hu, app.ro, lang)}: Folosește ultrasunete?`,
          lang
        ),
        q4("Ja", "Yes", "Igen", "Da", lang),
        [q4("Nein", "No", "Nem", "Nu", lang)],
        rng
      )
    );
  }

  return questions;
}

function generateUltrasoundTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "waves_sound",
      "ultrasound",
      q4("Definition Ultraschall", "Definition of ultrasound", "Az ultrahang meghatározása", "Definiția ultrasunetelor", lang),
      [
        q4("Schallwellen mit Frequenz >20.000 Hz (über menschlichem Höhbereich)", "Sound waves with frequency >20,000 Hz (above human hearing)", "Hanghullámok >20.000 Hz frekvenciával (emberi hallási tartomány felett)", "Unde sonore cu frecvență >20.000 Hz (deasupra auzului uman)", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "ultrasound",
      q4("3 medizinische Ultraschall Anwendungen", "3 medical ultrasound applications", "3 orvosi ultrahang alkalmazása", "3 aplicații medicale ale ultrasunetelor", lang),
      [
        q4("Schwangerschaftsvisualisierung, Organscanning, Blutfluss-Messung", "Pregnancy imaging, organ scanning, blood flow measurement", "Terhesség vizualizálása, szervek letapogatása, vérfolyás mérése", "Imagistica sarcinii, scanare organelor, măsurare flux sangvin", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "ultrasound",
      q4("Fledermaus Echolocation erklären", "Explain bat echolocation", "Magyarázd meg a denevér echolokációját", "Explică echolochea liliacului", lang),
      [
        q4("Fledermaus sendet Ultraschall, wartet auf Reflexion von Objekten, navigiert nach Echos", "Bat emits ultrasound, waits for object reflections, navigates by echoes", "Denevér ultrahangot bocsát ki, objektumok tükrözésére vár, a visszhangok alapján navigál", "Lilieful emite ultrasunete, așteaptă reflexii, navighează după ecouri", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "ultrasound",
      q4("Zahnreinigung mit Ultraschall wie funktioniert?", "How does ultrasonic dental cleaning work?", "Hogyan működik az ultrahangos fogtisztítás?", "Cum funcționează curățarea dentară cu ultrasunete?", lang),
      [
        q4("Ultraschall Vibration (~40 kHz) sprengt Zahnstein und Belag vom Zahn ab", "Ultrasound vibration (~40 kHz) blasts tartar and plaque from tooth", "Ultrahang vibráció (~40 kHz) felrobbantja a mészkő és lepedéket", "Vibrația ultrasunete (~40 kHz) distruge tartrul și placa", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "ultrasound",
      q4("Industrielle Ultraschall Prüfung Nutzen?", "Use of ultrasound in industrial testing?", "Az ultrahang ipari vizsgálatban való haszna?", "Utilitatea ultrasunetelor în testarea industrială?", lang),
      [
        q4("Defekte und Risse in Metallen detektieren ohne Material zu beschädigen (non-destruktiv)", "Detect defects and cracks in metals without damaging material (non-destructive)", "Fémekben lévő hibákat és repedéseket kimutat az anyag sérülése nélkül", "Detectează defecte și fisuri în metale fără a deteriora materialul", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "ultrasound",
      q4("Warum können Menschen Ultraschall nicht hören?", "Why can't humans hear ultrasound?", "Miért nem hallhatnak emberek ultrahangot?", "De ce nu pot oamenii auzi ultrasunete?", lang),
      [
        q4("Frekvenz >20.000 Hz liegt über Höhbereich; Ohr kann diese hohen Vibrationen nicht verarbeiten", "Frequency >20kHz above human hearing range; ear can't process such high vibrations", "A >20.000 Hz frekvencia a hallási tartomány felett van; a fül nem tudja feldolgozni", "Frecvența >20.000 Hz peste intervalul auditiv; urechea nu poate procesa vibrații atât de rapide", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "ultrasound",
      q4("Ultrasound Tiermedizin Nutzen?", "Uses of ultrasound in veterinary medicine?", "Az ultrahang állatorvosi alkalmazása?", "Utilizări ale ultrasunetelor în medicină veterinară?", lang),
      [
        q4("Gravidität visualisieren, Organe scannen, Diagnose wie bei Menschen", "Visualize pregnancy, scan organs, diagnose like in humans", "Terhesség vizualizálása, szervek letapogatása, diagnózis mint embernél", "Vizualizează sarcina, scanează organe, diagnostichează ca la oameni", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "ultrasound",
      q4("Unterschied Infrasound und Ultrasound?", "Difference between infrasound and ultrasound?", "Különbség infrahang és ultrahang között?", "Diferența dintre infrasunete și ultrasunete?", lang),
      [
        q4("Infrasound <20 Hz (unter Höhbereich), Ultrasound >20.000 Hz (über Höhbereich)", "Infrasound <20 Hz (below hearing), Ultrasound >20kHz (above hearing)", "Infrahang <20 Hz (hallási tartomány alatt), Ultrahang >20.000 Hz (felett)", "Infrasunete <20 Hz (sub auz), Ultrasunete >20.000 Hz (deasupra auzului)", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "waves_sound",
      "ultrasound",
      q4("Infrasound Quellen und Effekte?", "Infrasound sources and effects?", "Infrahang források és hatások?", "Surse de infrasunete și efecte?", lang),
      [
        q4("Quellen: Erdbeben, Vulkane, Blitz, Tornados; Effekt: Menschen fühlen Unbehagen, Angst", "Sources: earthquakes, volcanoes, lightning, tornados; Effect: humans feel unease, fear", "Források: földrengés, vulkánok, villám, tornádók; Hatás: emberek kényelmetlenséget, félelmet éreznek", "Surse: cutremure, vulcani, fulgere, tornade; Efect: oamenii simt disconfort, frică", lang),
      ]
    )
  );

  return questions;
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const K6_WAVES_SOUND_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  wave_properties: (lang = "en", seed = 0) => [...generateWavePropertiesMCQ(lang, seed), ...generateWavePropertiesTyping(lang, seed)],
  wave_properties_mcq: (lang = "en", seed = 0) => generateWavePropertiesMCQ(lang, seed),
  wave_properties_typing: (lang = "en", seed = 0) => generateWavePropertiesTyping(lang, seed),

  wave_types: (lang = "en", seed = 0) => [...generateWaveTypesMCQ(lang, seed), ...generateWaveTypesTyping(lang, seed)],
  wave_types_mcq: (lang = "en", seed = 0) => generateWaveTypesMCQ(lang, seed),
  wave_types_typing: (lang = "en", seed = 0) => generateWaveTypesTyping(lang, seed),

  sound_properties: (lang = "en", seed = 0) => [...generateSoundPropertiesMCQ(lang, seed), ...generateSoundPropertiesTyping(lang, seed)],
  sound_properties_mcq: (lang = "en", seed = 0) => generateSoundPropertiesMCQ(lang, seed),
  sound_properties_typing: (lang = "en", seed = 0) => generateSoundPropertiesTyping(lang, seed),

  ultrasound: (lang = "en", seed = 0) => [...generateUltrasoundMCQ(lang, seed), ...generateUltrasoundTyping(lang, seed)],
  ultrasound_mcq: (lang = "en", seed = 0) => generateUltrasoundMCQ(lang, seed),
  ultrasound_typing: (lang = "en", seed = 0) => generateUltrasoundTyping(lang, seed),
};

// ─── INTEGRATION WITH physikCurriculum6.ts ────────────────────────────────
//
// Registration is done by importing setK6GeneratorMap from physikCurriculum6
// and calling it externally (e.g. in the test page or astro page)
//
