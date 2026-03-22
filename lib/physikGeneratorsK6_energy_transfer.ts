// ─── PHYSICS GENERATORS K6: ENERGY TRANSFER ───────────────────────────────────
// "Energieumwandlung" theme — Energy chains, efficiency, power plants, renewable, fossil
// Grade 6 (11-12 years old)
//
// Generates 35 MCQ + 10 Typing questions per subtopic using seeded PRNG
// Energy transformation: E_input → E_output + E_loss (heat, sound, friction)

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

// ─── ENERGY CHAINS ──────────────────────────────────────────────────────────

const ENERGY_CHAINS_DATA = {
  transformations: [
    { from: "Gravitational Potential", to: "Kinetic", example: "Falling object" },
    { from: "Chemical", to: "Thermal", example: "Combustion" },
    { from: "Solar", to: "Thermal", example: "Heating water" },
    { from: "Electrical", to: "Thermal", example: "Heater" },
    { from: "Electrical", to: "Light", example: "Lamp" },
    { from: "Electrical", to: "Kinetic", example: "Motor" },
    { from: "Kinetic", to: "Electrical", example: "Generator" },
    { from: "Thermal", to: "Kinetic", example: "Steam engine" },
  ],
};

function generateEnergyChainsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Energy transformation identification (6 questions)
  for (let i = 0; i < 6; i++) {
    const transformation = pick(ENERGY_CHAINS_DATA.transformations, rng);
    const correct = q4(
      `Von ${transformation.from} zu ${transformation.to}`,
      `From ${transformation.from} to ${transformation.to}`,
      `${transformation.from}-ból ${transformation.to}-ra`,
      `De la ${transformation.from} la ${transformation.to}`,
      lang
    );
    const wrong = [
      q4("Von elektrischer zu chemischer Energie", "From electrical to chemical energy", "Elektromosból kémiaihoz", "De la electrică la chimică", lang),
      q4("Von Wärmeenergie zu Licht", "From thermal to light energy", "Hőenergiaból fénybe", "De la termică la lumină", lang),
      q4("Von Licht zu Bewegung", "From light to kinetic energy", "Fényből mozgásba", "De la lumină la cinetica", lang),
    ];
    questions.push(
      createMCQ(
        "energy_transfer",
        "energy_chains",
        q4(
          `Ein ${transformation.example} zeigt welche Energieumwandlung?`,
          `A ${transformation.example} shows which energy transformation?`,
          `${transformation.example} melyik energiaátalakítást mutatja?`,
          `Un ${transformation.example} arată care transformare de energie?`,
          lang
        ),
        correct,
        wrong,
        rng
      )
    );
  }

  // Template 2: Energy source identification (6 questions)
  const sources = [
    { en: "Solar panel", de: "Solarpanel", hu: "Napelem", ro: "Panou solar", energy: "Light" },
    { en: "Coal power plant", de: "Kohlekraftwerk", hu: "Szénlokomotív", ro: "Centrală pe cărbune", energy: "Chemical" },
    { en: "Waterfall", de: "Wasserfall", hu: "Vízesés", ro: "Cădere de apă", energy: "Gravitational Potential" },
    { en: "Windmill", de: "Windmühle", hu: "Szélmalom", ro: "Moară de vânt", energy: "Wind" },
    { en: "Battery", de: "Batterie", hu: "Akkumulátor", ro: "Baterie", energy: "Chemical" },
    { en: "Candle", de: "Kerze", hu: "Gyertya", ro: "Lumânare", energy: "Chemical" },
  ];
  for (const src of sources) {
    const correct = q4(
      `${src.de} verwendet ${src.energy} Energie`,
      `${src.en} uses ${src.energy} energy`,
      `${src.hu} ${src.energy} energiát használ`,
      `${src.ro} folosește energie ${src.energy}`,
      lang
    );
    const wrong = [
      q4("Elektrische Energie", "Electrical energy", "Elektromos energia", "Energie electrică", lang),
      q4("Wärmeenergie", "Thermal energy", "Hőenergia", "Energie termică", lang),
      q4("Bewegungsenergie", "Kinetic energy", "Mozgási energia", "Energie cinetică", lang),
    ];
    questions.push(
      createMCQ(
        "energy_transfer",
        "energy_chains",
        q4(
          `Welche Energiequelle hat ein ${src.de}?`,
          `What energy source does a ${src.en} have?`,
          `Milyen energiaforrása van egy ${src.hu}-nek?`,
          `Ce sursă de energie are un(a) ${src.ro}?`,
          lang
        ),
        correct,
        wrong,
        rng
      )
    );
  }

  // Template 3: Energy chain sequence (7 questions)
  const chains = [
    { de: "Sonne → Wasser → Damfmaschine → Bewegung", en: "Sun → Water → Steam engine → Motion", hu: "Nap → Víz → Gőzmotor → Mozgás", ro: "Soare → Apă → Motor cu aburi → Mișcare" },
    { de: "Kohle → Wärmekraftwerk → Elektrizität → Lampe", en: "Coal → Thermal plant → Electricity → Lamp", hu: "Szén → Hőerőmű → Villam → Lámpa", ro: "Cărbune → Termocentrală → Electricitate → Lampă" },
    { de: "Wind → Windkraftwerk → Elektrizität → Haus", en: "Wind → Wind turbine → Electricity → Home", hu: "Szél → Szélkerék → Villam → Ház", ro: "Vânt → Turbină eolian → Electricitate → Casă" },
  ];
  for (const chain of chains) {
    questions.push(
      createMCQ(
        "energy_transfer",
        "energy_chains",
        q4(
          `Welche Energiekette ist korrekt?`,
          `Which energy chain is correct?`,
          `Melyik energialánc helyes?`,
          `Care lanț energetic este corect?`,
          lang
        ),
        q4(chain.de, chain.en, chain.hu, chain.ro, lang),
        [
          q4("Sonne → Kohle → Motor → Lampe", "Sun → Coal → Engine → Lamp", "Nap → Szén → Motor → Lámpa", "Soare → Cărbune → Motor → Lampă", lang),
          q4("Wasser → Kohle → Fabrik → Wärmekraftwerk", "Water → Coal → Factory → Thermal plant", "Víz → Szén → Gyár → Hőerőmű", "Apă → Cărbune → Fabrică → Termocentrală", lang),
        ],
        rng
      )
    );
  }

  // Template 4: Energy loss understanding (6 questions)
  for (let i = 0; i < 6; i++) {
    const lossType = pick(["heat", "sound", "friction"], rng);
    const correctText = lossType === "heat"
      ? q4("Wärmeverlust durch Reibung", "Heat loss through friction", "Hőveszteség súrlódás miatt", "Pierdere de căldură din frecare", lang)
      : lossType === "sound"
      ? q4("Schallverlust bei beweglichen Teilen", "Sound loss in moving parts", "Hanghallás mozgó alkatrészekben", "Pierdere de sunet în piese mobile", lang)
      : q4("Reibungskraft behindert Bewegung", "Friction force opposes motion", "Súrlódáserő akadályozza a mozgást", "Forța de frecare se opune mișcării", lang);

    const wrongOpts = [
      q4("Kein Energieverlust", "No energy loss", "Nincs energieveszteség", "Fără pierdere de energie", lang),
      q4("Nur Lichtverlust", "Only light loss", "Csak fényhallás", "Doar pierdere de lumină", lang),
    ];

    questions.push(
      createMCQ(
        "energy_transfer",
        "energy_chains",
        q4(
          `In jeder Energieumwandlung gibt es ${lossType === "heat" ? "Wärmeverlust" : lossType === "sound" ? "Schalleverlust" : "Reibungsverlust"}. Wie?`,
          `In every energy transformation there is ${lossType}. How?`,
          `Minden energiaátalakításban van ${lossType === "heat" ? "hőveszteség" : lossType === "sound" ? "hangveszteség" : "súrlódásveszteség"}. Hogyan?`,
          `În fiecare transformare de energie există pierdere de ${lossType === "heat" ? "căldură" : lossType === "sound" ? "sunet" : "frecare"}. Cum?`,
          lang
        ),
        correctText,
        wrongOpts,
        rng
      )
    );
  }

  // Template 5: Real-world example matching (7 questions)
  const examples = [
    { situation: q4("Auto bremst", "Car brakes", "Autó fékez", "Mașina frânează", lang), energy: q4("Kinetisch → Wärme", "Kinetic → Heat", "Mozgási → Hő", "Cinetica → Căldură", lang) },
    { situation: q4("Handy lädt", "Phone charges", "Telefon töltödik", "Telefonul se încarcă", lang), energy: q4("Elektrisch → Chemisch", "Electrical → Chemical", "Elektromos → Kémiai", "Electrică → Chimică", lang) },
    { situation: q4("Taschenlampe leuchtet", "Flashlight shines", "Zseblampa világít", "Lanterna strălucește", lang), energy: q4("Chemisch → Licht", "Chemical → Light", "Kémiai → Fény", "Chimică → Lumină", lang) },
    { situation: q4("Ventilator läuft", "Fan runs", "Ventilátor működik", "Ventilatorul funcționează", lang), energy: q4("Elektrisch → Bewegung", "Electrical → Motion", "Elektromos → Mozgás", "Electrică → Mișcare", lang) },
    { situation: q4("Grill heizt auf", "Grill heats", "Grill felmelegszik", "Grătar se încălzește", lang), energy: q4("Elektrisch → Wärme", "Electrical → Heat", "Elektromos → Hő", "Electrică → Căldură", lang) },
    { situation: q4("Eisschrank kühlt", "Fridge cools", "Hűtőszekrény hűt", "Frigiderul răcește", lang), energy: q4("Elektrisch → Wärmeabfuhr", "Electrical → Cooling", "Elektromos → Lehűtés", "Electrică → Răcire", lang) },
    { situation: q4("Staubsauger saugt", "Vacuum cleaner sucks", "Porszívó szív", "Aspiratorul aspir", lang), energy: q4("Elektrisch → Bewegung", "Electrical → Motion", "Elektromos → Mozgás", "Electrică → Mișcare", lang) },
  ];

  for (const ex of examples) {
    questions.push(
      createMCQ(
        "energy_transfer",
        "energy_chains",
        q4(`Welche Umwandlung bei: ${ex.situation}?`, `Which transformation: ${ex.situation}?`, `Melyik átalakítás: ${ex.situation}?`, `Care transformare: ${ex.situation}?`, lang),
        ex.energy,
        [
          q4("Thermisch → Kinetisch", "Thermal → Kinetic", "Termikus → Mozgási", "Termic → Cinetica", lang),
          q4("Kinetisch → Elektrisch", "Kinetic → Electrical", "Mozgási → Elektromos", "Cinetica → Electrică", lang),
        ],
        rng
      )
    );
  }

  return questions;
}

function generateEnergyChainsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "energy_transfer",
      "energy_chains",
      q4("Was ist eine Energiekette?", "What is an energy chain?", "Mi az energialánc?", "Ce este un lanț energetic?", lang),
      [
        q4("Eine Folge von Energieumwandlungen von der Quelle zum Verbraucher", "A sequence of energy transformations from source to consumer", "Az energiaátalakítások sorozata a forrástól a felhasználóig", "O secvență de transformări energetice de la sursă la consumator", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "energy_chains",
      q4("Gib ein Beispiel einer Energiekette im Alltag", "Give example of energy chain in daily life", "Adj egy példát energialánc az napi életből", "Dă un exemplu de lanț energetic din viața zilnică", lang),
      [
        q4("Sonne → Wasser → Wärmekraftwerk → Strom → Lampe", "Sun → Water → Thermal plant → Electricity → Lamp", "Nap → Víz → Hőerőmű → Áram → Lámpa", "Soare → Apă → Termocentrală → Curent → Lampă", lang),
        q4("Kohle → Feuer → Dampf → Bewegung → Strom", "Coal → Fire → Steam → Motion → Electricity", "Szén → Tűz → Gőz → Mozgás → Áram", "Cărbune → Foc → Aburi → Mișcare → Curent", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "energy_chains",
      q4("Nenne 3 verschiedene Energiequellen", "Name 3 different energy sources", "Nevezz meg 3 különböző energiaforrást", "Numește 3 surse de energie diferite", lang),
      [
        q4("Sonne, Wasser, Wind", "Sun, water, wind", "Nap, víz, szél", "Soare, apă, vânt", lang),
        q4("Kohle, Öl, Erdgas", "Coal, oil, natural gas", "Szén, olaj, földgáz", "Cărbune, petrol, gaze naturale", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "energy_chains",
      q4("Was passiert mit verlorener Energie in einer Energiekette?", "What happens to lost energy in an energy chain?", "Mi történik az elveszett energiával egy energiálancban?", "Ce se întâmplă cu energia pierdută într-un lanț energetic?", lang),
      [
        q4("Sie wird hauptsächlich als Wärme an die Umgebung abgegeben", "It is mainly released as heat to surroundings", "Főleg hőként kerül az környezetbe", "Aceasta este eliberată în principal sub formă de căldură în mediu", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "energy_chains",
      q4("Welche Energieform wird am häufigsten verschwendet?", "Which energy form is most often wasted?", "Melyik energia forma pazarolódik el leggyakrabban?", "Care formă de energie este cea mai des risipită?", lang),
      [
        q4("Wärmeenergie durch Reibung und Wärmeleitung", "Thermal energy through friction and conduction", "Hőenergia súrlódáson és vezetésen keresztül", "Energia termică prin frecare și conducție", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "energy_chains",
      q4("Wie funktioniert ein Kraftwerk mit Energiekette?", "How does power plant work with energy chain?", "Hogyan működik egy erőmű energialánccal?", "Cum funcționează o centrală cu lanț energetic?", lang),
      [
        q4("Brennstoff (Kohle/Gas) → Wärmeerzeugung → Dampfproduktion → Turbine → Generator → Strom", "Fuel → Heat → Steam → Turbine → Generator → Electricity", "Tüzelőanyag → Hőtermelés → Gőztermelés → Turbina → Generátor → Villam", "Combustibil → Căldură → Aburi → Turbină → Generator → Electricitate", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "energy_chains",
      q4("Was ist der Unterschied zwischen erneuerbaren und fossilen Energien?", "Difference between renewable and fossil energy?", "Mi a különbség megújuló és fosszilis energia között?", "Diferența între energie regenerabilă și fosil?", lang),
      [
        q4("Erneuerbar: unbegrenzt verfügbar (Sonne, Wind); Fossil: begrenzte Vorräte (Kohle, Öl)", "Renewable: unlimited (Sun, wind); Fossil: limited reserves (coal, oil)", "Megújuló: korlátlan (Nap, szél); Fosszilis: korlátolt készlet (szén, olaj)", "Regenerabilă: nelimitată (Soare, vânt); Fosil: rezerve limitate (cărbune, petrol)", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "energy_chains",
      q4("Welche Energieverluste entstehen in einer Fabrik?", "What energy losses occur in a factory?", "Milyen energiaveszteségek keletkeznek egy gyárban?", "Ce pierderi de energie apar într-o fabrică?", lang),
      [
        q4("Wärmeverluste durch Leitungen, Reibung in Maschinen, Schall, Vibration", "Heat losses in pipes, friction in machines, sound, vibration", "Hőveszteség vezetékekben, súrlódás gépekben, hang, vibráció", "Pierderi de căldură în conducte, frecare în mașini, sunet, vibrație", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "energy_chains",
      q4("Beschreib Energiekette: Handy mit Solarladegerät", "Describe energy chain: phone with solar charger", "Írd le energialánc: telefon napelemes töltővel", "Descrie lanț energetic: telefon cu încărcător solar", lang),
      [
        q4("Solarstrahlung → Photovoltaik (Solarpanel) → Elektrischer Strom → Handy-Akku → Chemische Energie", "Solar radiation → Photovoltaic → Electrical current → Phone battery → Chemical energy", "Napsugárzás → Fotovoltaika → Elektromos áram → Telefon akkumulátor → Kémiai energia", "Radiație solară → Fotovoltaic → Curent electric → Baterie telefon → Energie chimică", lang),
      ]
    )
  );

  return questions;
}

// ─── EFFICIENCY (WIRKUNGSGRAD) ──────────────────────────────────────────────

const EFFICIENCY_DATA = {
  formulas: [
    { de: "η = W_nutzen / W_input × 100%", en: "η = W_useful / W_input × 100%", hu: "η = W_hasznos / W_bevitel × 100%", ro: "η = W_util / W_intrare × 100%" },
  ],
  examples: [
    { de: "Glühlampe", en: "Incandescent lamp", hu: "Izzólámpa", ro: "Bec incandescent", efficiency: 5 },
    { de: "LED-Lampe", en: "LED lamp", hu: "LED lámpa", ro: "Lampă LED", efficiency: 80 },
    { de: "Elektromotor", en: "Electric motor", hu: "Villanymotor", ro: "Motor electric", efficiency: 85 },
    { de: "Kohlekraftwerk", en: "Coal plant", hu: "Szénlokomotív", ro: "Centrală pe cărbune", efficiency: 35 },
    { de: "Wasserkraftwerk", en: "Hydro plant", hu: "Vízierőmű", ro: "Centrală hidroelectrică", efficiency: 90 },
    { de: "Windkraftwerk", en: "Wind turbine", hu: "Szélkerék", ro: "Turbină eolian", efficiency: 45 },
  ],
};

function generateEfficiencyMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Efficiency definition (6 questions)
  for (let i = 0; i < 6; i++) {
    const correct = q4(
      "Das Verhältnis von nutzbarer Energie zu zugeführter Energie",
      "Ratio of useful energy to input energy",
      "A hasznos energia és a bevitt energia aránya",
      "Raportul dintre energia utilă și energia de intrare",
      lang
    );
    const wrong = [
      q4("Die Gesamtmenge der Energie", "Total amount of energy", "Az energia teljes mennyisége", "Cantitatea totală de energie", lang),
      q4("Die Differenz zwischen Input und Output", "Difference between input and output", "A bevitel és kimenet közötti különbség", "Diferența dintre intrare și ieșire", lang),
    ];
    questions.push(
      createMCQ(
        "energy_transfer",
        "efficiency",
        q4("Was bedeutet Wirkungsgrad (Effizienz)?", "What is efficiency?", "Mit jelent a hatásfok?", "Ce înseamnă eficiență?", lang),
        correct,
        wrong,
        rng
      )
    );
  }

  // Template 2: Efficiency formula (6 questions)
  for (let i = 0; i < 6; i++) {
    const scenario = pick([
      q4("Ein Motor erhält 1000 J Energie und gibt 850 J ab", "A motor receives 1000 J and outputs 850 J", "Egy motor 1000 J-t kap és 850 J-t ad le", "Un motor primește 1000 J și produce 850 J", lang),
      q4("Eine Lampe erhält 100 W Strom, nutzt 80 W", "A lamp gets 100 W power, uses 80 W", "Egy lámpa 100 W áramot kap, 80 W-ot használ", "O lampă primește 100 W și folosește 80 W", lang),
    ], rng);

    const correct = q4("85%", "85%", "85%", "85%", lang);
    const wrong = [
      q4("15%", "15%", "15%", "15%", lang),
      q4("1.18", "1.18", "1.18", "1.18", lang),
    ];

    questions.push(
      createMCQ(
        "energy_transfer",
        "efficiency",
        q4(`Berechne Wirkungsgrad: ${scenario}`, `Calculate efficiency: ${scenario}`, `Számítsd ki a hatásfokot: ${scenario}`, `Calculează eficiența: ${scenario}`, lang),
        correct,
        wrong,
        rng
      )
    );
  }

  // Template 3: Efficiency ranking (7 questions)
  const devices = pick(EFFICIENCY_DATA.examples, rng);
  for (let i = 0; i < 7; i++) {
    const device1 = pick(EFFICIENCY_DATA.examples, rng);
    const device2 = pick(EFFICIENCY_DATA.examples, rng);

    const correct = device1.efficiency > device2.efficiency
      ? q4(`${device1.de}`, device1.en, device1.hu, device1.ro, lang)
      : q4(`${device2.de}`, device2.en, device2.hu, device2.ro, lang);

    questions.push(
      createMCQ(
        "energy_transfer",
        "efficiency",
        q4(
          `Welche Gerät hat höheren Wirkungsgrad: ${q4(device1.de, device1.en, device1.hu, device1.ro, lang)} (${device1.efficiency}%) oder ${q4(device2.de, device2.en, device2.hu, device2.ro, lang)} (${device2.efficiency}%)?`,
          `Which has higher efficiency: ${device1.en} (${device1.efficiency}%) or ${device2.en} (${device2.efficiency}%)?`,
          `Melyiknek magasabb a hatásfoka: ${device1.hu} (${device1.efficiency}%) vagy ${device2.hu} (${device2.efficiency}%)?`,
          `Care are eficiență mai mare: ${device1.ro} (${device1.efficiency}%) sau ${device2.ro} (${device2.efficiency}%)?`,
          lang
        ),
        correct,
        [q4("Beide gleich", "Both same", "Mindkettő ugyanaz", "Ambele la fel", lang)],
        rng
      )
    );
  }

  // Template 4: Energy loss consequences (7 questions)
  for (let i = 0; i < 7; i++) {
    const lossAmount = pick([10, 25, 40, 60], rng);
    const scenario = pick([
      q4("Eine Glühlampe mit 60% Verlust", "Incandescent lamp with 60% loss", "Izzólámpa 60% veszteséggel", "Bec incandescent cu 60% pierdere", lang),
      q4("Ein Kraftwerk mit 40% Wirkungsgrad", "Power plant with 40% efficiency", "Erőmű 40% hatásfokkal", "Termocentrală cu 40% eficiență", lang),
      q4("Ein Motor mit 80% Wirkungsgrad", "Motor with 80% efficiency", "Motor 80% hatásfokkal", "Motor cu 80% eficiență", lang),
    ], rng);

    questions.push(
      createMCQ(
        "energy_transfer",
        "efficiency",
        q4(`${scenario} bedeutet:`, `${scenario} means:`, `${scenario} azt jelenti:`, `${scenario} înseamnă:`, lang),
        q4("Der meiste Teil der Energie wird als Wärme verloren", "Most energy is lost as heat", "Az energia nagy része hőként veszett el", "Cea mai mare parte a energiei se pierde ca căldură", lang),
        [
          q4("Kein Energieverlust", "No energy loss", "Nincs energiaveszteség", "Fără pierdere de energie", lang),
          q4("Energie wird gespeichert", "Energy is stored", "Energia tárolt", "Energia este stocată", lang),
        ],
        rng
      )
    );
  }

  // Template 5: Improving efficiency (6 questions)
  for (let i = 0; i < 6; i++) {
    const method = pick([
      q4("Wärmeisolation verwenden", "Use thermal insulation", "Hőszigetelés használata", "Folosiți izolație termică", lang),
      q4("Reibung reduzieren", "Reduce friction", "Csökkentsen súrlódást", "Reduceți frecarea", lang),
      q4("Bessere Materialien wählen", "Choose better materials", "Válasszon jobb anyagokat", "Alegeți materiale mai bune", lang),
      q4("Regelmäßige Wartung durchführen", "Regular maintenance", "Rendszeres karbantartás", "Efectuați întreținere regulată", lang),
    ], rng);

    questions.push(
      createMCQ(
        "energy_transfer",
        "efficiency",
        q4("Wie kann man Wirkungsgrad verbessern?", "How to improve efficiency?", "Hogyan lehet javítani a hatásfokot?", "Cum se poate îmbunătăți eficiența?", lang),
        method,
        [
          q4("Mehr Energie hinzufügen", "Add more energy", "Több energia hozzáadása", "Adăugați mai multă energie", lang),
          q4("Größere Geräte verwenden", "Use larger devices", "Használjon nagyobb eszközöket", "Utilizați aparate mai mari", lang),
        ],
        rng
      )
    );
  }

  return questions;
}

function generateEfficiencyTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "energy_transfer",
      "efficiency",
      q4("Was ist Wirkungsgrad? Schreib die Formel", "What is efficiency? Write the formula", "Mi a hatásfok? Írd le a képletet", "Ce este eficiența? Scrie formula", lang),
      [
        q4("η = W_nutzen / W_input × 100% oder η = P_out / P_in × 100%", "η = W_useful / W_input × 100% or η = P_out / P_in × 100%", "η = W_hasznos / W_input × 100% vagy η = P_ki / P_be × 100%", "η = W_util / W_intrare × 100% sau η = P_out / P_in × 100%", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "efficiency",
      q4("Nenne 3 Beispiele für hohe Effizienz", "Name 3 examples of high efficiency", "Nevezz meg 3 magasabb hatásfokú eszközt", "Numește 3 exemple de eficiență ridicată", lang),
      [
        q4("LED-Lampe (80%), Wasserkraftwerk (90%), Elektromotor (85%)", "LED lamp (80%), Hydroelectric (90%), Electric motor (85%)", "LED lámpa (80%), Vízierőmű (90%), Villanymotor (85%)", "Lampă LED (80%), Hidroelectrică (90%), Motor electric (85%)", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "efficiency",
      q4("Was passiert mit der verlorenen Energie?", "What happens to lost energy?", "Mi történik az elveszett energiával?", "Ce se întâmplă cu energia pierdută?", lang),
      [
        q4("Sie wird hauptsächlich als Wärme und Schall an die Umgebung abgegeben", "Mostly released as heat and sound to environment", "Főleg hőként és hangként adódik ki a környezetbe", "Se eliberează în principal ca căldură și sunet în mediu", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "efficiency",
      q4("Vergleiche Glühlampe und LED-Lampe", "Compare incandescent and LED lamp", "Hasonlítsd össze az izzólámpát és LED lámpa", "Compară becul incandescent și lampa LED", lang),
      [
        q4("Glühlampe: 5% Effizienz (95% Wärmeverlust); LED: 80% Effizienz (20% Verlust)", "Incandescent: 5% efficiency (95% heat loss); LED: 80% (20% loss)", "Izzólámpa: 5% hatásfok (95% hőveszteség); LED: 80% (20% veszteség)", "Incandescent: 5% eficiență (95% pierdere de căldură); LED: 80% (20% pierdere)", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "efficiency",
      q4("Berechne Wirkungsgrad: 200 J input, 150 J output", "Calculate: 200 J in, 150 J out", "Számítsd ki: 200 J bemenet, 150 J kimenet", "Calculează: 200 J intrare, 150 J ieșire", lang),
      [
        q4("η = 150 / 200 × 100% = 75%", "η = 150 / 200 × 100% = 75%", "η = 150 / 200 × 100% = 75%", "η = 150 / 200 × 100% = 75%", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "efficiency",
      q4("Warum ist 100% Wirkungsgrad unmöglich?", "Why is 100% efficiency impossible?", "Miért lehetetlen 100% hatásfok?", "De ce este imposibil 100% eficiență?", lang),
      [
        q4("Weil immer Energie durch Reibung, Wärme und Schall verloren geht", "Because energy is always lost through friction, heat, and sound", "Mert az energia mindig elveszett súrlódáson, hőn és hanggal", "Deoarece energia se pierde mereu prin frecare, căldură și sunet", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "efficiency",
      q4("Welche Erneuerung-Energiequelle hat beste Effizienz?", "Which renewable source has best efficiency?", "Melyik megújuló energiaforrásnak van legjobb hatásfoka?", "Care sursă regenerabilă are cea mai bună eficiență?", lang),
      [
        q4("Wasserkraftwerk mit etwa 90% Effizienz", "Hydroelectric with about 90% efficiency", "Vízierőmű körülbelül 90% hatásfokkal", "Hidroelectrică cu aproximativ 90% eficiență", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "efficiency",
      q4("Wie kann man Energieverluste in Kraftwerken reduzieren?", "How to reduce losses in power plants?", "Hogyan lehet csökkenteni az energiaveszteséget az erőművekben?", "Cum se pot reduce pierderile în centralele electrice?", lang),
      [
        q4("Bessere Isolierung, effizientere Turbinen, Wärmeerückgewinnung", "Better insulation, efficient turbines, heat recovery", "Jobb szigetelés, hatékonyabb turbinák, hővisszanyerés", "Izolație mai bună, turbine eficiente, recuperare de căldură", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "efficiency",
      q4("Ein Elektromotor hat 85% Wirkungsgrad. Was bedeutet das?", "Motor has 85% efficiency. What does this mean?", "Egy motor 85% hatásfokkal. Mit jelent ez?", "Un motor are 85% eficiență. Ce înseamnă asta?", lang),
      [
        q4("85% der Eingabeenergie wird in Arbeit umgewandelt, 15% geht als Wärme verloren", "85% of input is converted to work, 15% lost as heat", "85% a bevitt energia munkává alakul, 15% hővesztesség", "85% din intrare se convertește în lucru, 15% se pierde ca căldură", lang),
      ]
    )
  );

  return questions;
}

// ─── POWER PLANTS (KRAFTWERKE) ──────────────────────────────────────────────

const POWER_PLANTS_DATA = {
  types: [
    { de: "Kohlekraftwerk", en: "Coal plant", hu: "Szénlokomotív", ro: "Centrală pe cărbune", fuel: "Coal", temp: "~1000°C", efficiency: 35, renewable: false },
    { de: "Gaskraftwerk", en: "Gas plant", hu: "Gázlokomotív", ro: "Centrală pe gaze", fuel: "Natural gas", temp: "~1400°C", efficiency: 50, renewable: false },
    { de: "Kernkraftwerk", en: "Nuclear plant", hu: "Atomerőmű", ro: "Centrală nucleară", fuel: "Uranium", temp: "~320°C", efficiency: 33, renewable: false },
    { de: "Wasserkraftwerk", en: "Hydroelectric", hu: "Vízierőmű", ro: "Hidroelectrică", fuel: "Water", temp: "—", efficiency: 90, renewable: true },
    { de: "Windkraftwerk", en: "Wind turbine", hu: "Szélkerék", ro: "Turbină eolian", fuel: "Wind", temp: "—", efficiency: 45, renewable: true },
    { de: "Solarkraftwerk", en: "Solar plant", hu: "Napelemes erőmű", ro: "Centrală solară", fuel: "Solar radiation", temp: "—", efficiency: 20, renewable: true },
    { de: "Geothermiekraftwerk", en: "Geothermal plant", hu: "Geotermikus erőmű", ro: "Centrală geotermală", fuel: "Earth heat", temp: "~150°C", efficiency: 15, renewable: true },
  ],
};

function generatePowerPlantsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Power plant type identification (6 questions)
  for (let i = 0; i < 6; i++) {
    const plant = pick(POWER_PLANTS_DATA.types, rng);
    const correct = q4(plant.de, plant.en, plant.hu, plant.ro, lang);
    const wrongPlants = POWER_PLANTS_DATA.types.filter((p: any) => p.en !== plant.en);
    const wrong = [
      q4(wrongPlants[0].de, wrongPlants[0].en, wrongPlants[0].hu, wrongPlants[0].ro, lang),
      q4(wrongPlants[1].de, wrongPlants[1].en, wrongPlants[1].hu, wrongPlants[1].ro, lang),
    ];

    questions.push(
      createMCQ(
        "energy_transfer",
        "power_plants",
        q4(
          `Ein Kraftwerk nutzt ${plant.fuel} als Brennstoff. Welches ist es?`,
          `A power plant uses ${plant.fuel} as fuel. Which one?`,
          `Egy erőmű ${plant.fuel}-t használ tüzelőanyagként. Melyik?`,
          `O centrală folosește ${plant.fuel} ca combustibil. Care este?`,
          lang
        ),
        correct,
        wrong,
        rng
      )
    );
  }

  // Template 2: Fuel type (6 questions)
  for (let i = 0; i < 6; i++) {
    const plant = pick(POWER_PLANTS_DATA.types, rng);
    const correct = q4(plant.fuel, plant.fuel, plant.fuel, plant.fuel, lang);
    const wrong = [
      q4("Uran/Kern", "Uranium/Nuclear", "Urán/Mag", "Uraniu/Nuc", lang),
      q4("Wind", "Wind", "Szél", "Vânt", lang),
    ];

    questions.push(
      createMCQ(
        "energy_transfer",
        "power_plants",
        q4(
          `${q4(plant.de, plant.en, plant.hu, plant.ro, lang)}: Welcher Brennstoff?`,
          `${plant.en}: What fuel?`,
          `${plant.hu}: Milyen tüzelőanyag?`,
          `${plant.ro}: Ce combustibil?`,
          lang
        ),
        correct,
        wrong,
        rng
      )
    );
  }

  // Template 3: Renewable vs non-renewable (7 questions)
  for (let i = 0; i < 7; i++) {
    const plant = pick(POWER_PLANTS_DATA.types, rng);
    const correct = plant.renewable
      ? q4("Ja, erneuerbar", "Yes, renewable", "Igen, megújuló", "Da, regenerabil", lang)
      : q4("Nein, nicht erneuerbar", "No, not renewable", "Nem, nem megújuló", "Nu, nu regenerabil", lang);

    const wrong = plant.renewable
      ? [q4("Nein, fossiler Brennstoff", "No, fossil fuel", "Nem, fosszilis tüzelőanyag", "Nu, combustibil fosil", lang)]
      : [q4("Ja, unbegrenzt verfügbar", "Yes, unlimited supply", "Igen, korlátlan kínálat", "Da, furnizare nelimitată", lang)];

    questions.push(
      createMCQ(
        "energy_transfer",
        "power_plants",
        q4(
          `Ist ${q4(plant.de, plant.en, plant.hu, plant.ro, lang)} eine erneuerbare Energiequelle?`,
          `Is ${plant.en} a renewable energy source?`,
          `${plant.hu} megújuló energiaforrás-e?`,
          `Este ${plant.ro} o sursă de energie regenerabilă?`,
          lang
        ),
        correct,
        wrong,
        rng
      )
    );
  }

  // Template 4: Efficiency comparison (7 questions)
  for (let i = 0; i < 7; i++) {
    const plant1 = pick(POWER_PLANTS_DATA.types, rng);
    const plant2 = pick(POWER_PLANTS_DATA.types.filter((p: any) => p.en !== plant1.en), rng);

    const moreEfficient = plant1.efficiency > plant2.efficiency ? plant1 : plant2;
    const correct = q4(moreEfficient.de, moreEfficient.en, moreEfficient.hu, moreEfficient.ro, lang);

    questions.push(
      createMCQ(
        "energy_transfer",
        "power_plants",
        q4(
          `Welches hat höheren Wirkungsgrad: ${q4(plant1.de, plant1.en, plant1.hu, plant1.ro, lang)} (${plant1.efficiency}%) oder ${q4(plant2.de, plant2.en, plant2.hu, plant2.ro, lang)} (${plant2.efficiency}%)?`,
          `Which has higher efficiency: ${plant1.en} (${plant1.efficiency}%) or ${plant2.en} (${plant2.efficiency}%)?`,
          `Melyiknek magasabb a hatásfoka: ${plant1.hu} (${plant1.efficiency}%) vagy ${plant2.hu} (${plant2.efficiency}%)?`,
          `Care are eficiență mai mare: ${plant1.ro} (${plant1.efficiency}%) sau ${plant2.ro} (${plant2.efficiency}%)?`,
          lang
        ),
        correct,
        [q4("Beide gleich", "Both same", "Mindkettő ugyanaz", "Ambele la fel", lang)],
        rng
      )
    );
  }

  // Template 5: Advantages & disadvantages (6 questions)
  const advantages = [
    { de: "Wasserkraftwerk", en: "Hydroelectric", hu: "Vízierőmű", ro: "Hidroelectrică", adv: "Hoher Wirkungsgrad, keine Emissionen" },
    { de: "Windkraftwerk", en: "Wind turbine", hu: "Szélkerék", ro: "Turbină eolian", adv: "Kostenlos, kein Abfall, erneuerbar" },
    { de: "Solarkraftwerk", en: "Solar plant", hu: "Napelemes erőmű", ro: "Centrală solară", adv: "Saubere Energie, keine Emissionen" },
    { de: "Kohlekraftwerk", en: "Coal plant", hu: "Szénlokomotív", ro: "Centrală pe cărbune", adv: "Zuverlässig, konstante Leistung" },
    { de: "Kernkraftwerk", en: "Nuclear plant", hu: "Atomerőmű", ro: "Centrală nucleară", adv: "Keine CO2-Emissionen, hohe Ausgangsleistung" },
  ];

  for (const adv of advantages) {
    questions.push(
      createMCQ(
        "energy_transfer",
        "power_plants",
        q4(
          `Vorteil von ${adv.de}:`,
          `Advantage of ${adv.en}:`,
          `${adv.hu} előnye:`,
          `Avantajul ${adv.ro}:`,
          lang
        ),
        q4(adv.adv, adv.adv, adv.adv, adv.adv, lang),
        [
          q4("Sehr billig", "Very cheap", "Nagyon olcsó", "Foarte ieftin", lang),
          q4("Keine Umweltbedenken", "No environmental issues", "Nincs környezetvédelmi aggály", "Fără probleme de mediu", lang),
        ],
        rng
      )
    );
  }

  return questions;
}

function generatePowerPlantsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "energy_transfer",
      "power_plants",
      q4("Nenne 3 fossile Brennstoff Kraftwerke", "Name 3 fossil fuel power plants", "Nevezz meg 3 fosszilis tüzelőanyagos erőművet", "Numește 3 centrale pe combustibili fosili", lang),
      [
        q4("Kohlekraftwerk, Gaskraftwerk, Ölkraftwerk", "Coal plant, gas plant, oil plant", "Szénlokomotív, gázlokomotív, olajlokomotív", "Centrală pe cărbune, pe gaze, pe petrol", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "power_plants",
      q4("Nenne 3 erneuerbare Energiequellen Kraftwerke", "Name 3 renewable energy plants", "Nevezz meg 3 megújuló energiás erőművet", "Numește 3 centrale de energie regenerabilă", lang),
      [
        q4("Wasserkraftwerk, Windkraftwerk, Solarkraftwerk", "Hydroelectric, wind, solar", "Vízierőmű, szélkerék, napelemes erőmű", "Hidroelectrică, eolian, solară", lang),
        q4("Hydro, Wind, Geothermal", "Hydro, wind, geothermal", "Víz, szél, geotermikus", "Hidro, vânt, geotermală", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "power_plants",
      q4("Welches Kraftwerk hat besten Wirkungsgrad?", "Which power plant has best efficiency?", "Melyik erőműnek a legjobb a hatásfoka?", "Care centrală are cea mai bună eficiență?", lang),
      [
        q4("Wasserkraftwerk mit etwa 90%", "Hydroelectric with about 90%", "Vízierőmű körülbelül 90%-kal", "Hidroelectrică cu aproximativ 90%", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "power_plants",
      q4("Was sind Nachteile von Kohlekraftwerken?", "What are disadvantages of coal plants?", "Mik a szénlokomotívok hátrányai?", "Care sunt dezavantajele centralelor pe cărbune?", lang),
      [
        q4("CO2-Emissionen, Luftverschmutzung, Ressourcenverbrauch, Umweltbelastung", "CO2 emissions, air pollution, resource depletion, environmental impact", "CO2-kibocsátás, levegőszennyezés, erőforrás fogyás, környezetkárosítás", "Emisii CO2, poluare aeriană, epuizare resurse, impact mediu", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "power_plants",
      q4("Was sind Vorteile von Windkraftwerken?", "What are advantages of wind turbines?", "Mik a szélkerékek előnyei?", "Care sunt avantajele turbinelor eoliene?", lang),
      [
        q4("Kostenlos, keine Emissionen, erneuerbar, keine Abfälle", "Free, no emissions, renewable, no waste", "Ingyenes, nincs kibocsátás, megújuló, nincs hulladék", "Gratuit, fără emisii, regenerabil, fără deșeuri", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "power_plants",
      q4("Beschreib Ablauf in Kohlekraftwerk", "Describe process in coal plant", "Írd le a folyamatot szénlokomotívban", "Descrie procesul în centrala pe cărbune", lang),
      [
        q4("Kohle verbrennt → Wärme → Wasser verdampft → Dampf treibt Turbinen → Generator → Strom", "Coal burns → Heat → Water evaporates → Steam turns turbines → Generator → Electricity", "Szén ég → Hő → Víz elpárolog → Gőz hajtja turbinákat → Generátor → Villam", "Cărbune arde → Căldură → Apă se evaporează → Aburi antrenează turbine → Generator → Curent", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "power_plants",
      q4("Warum ist Kernkraftwerk CO2-frei?", "Why is nuclear plant CO2-free?", "Miért szén-dioxid-mentes az atomerőmű?", "De ce este centrala nucleară fără CO2?", lang),
      [
        q4("Keine Verbrennung, Kernspaltung erzeugt nur Wärme, keine chemischen Emissionen", "No combustion, nuclear fission only generates heat", "Nincs égés, maghasítás csak hőt termel, nincsenek kémiai emisszió", "Fără combustie, fisiunea nucleară generează doar căldură", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "power_plants",
      q4("Welche Probleme hat Wasserkraftwerk?", "What problems does hydroelectric have?", "Milyen problémái vannak a vízierőműnek?", "Ce probleme are hidroelectrica?", lang),
      [
        q4("Abhängig von Wasser-/Niederschlagsmenge, Umweltbelastung (Stausee), teure Infrastruktur", "Dependent on water/rainfall, environmental impact (dams), expensive infrastructure", "Függ a vízmennyiségtől, környezetkárosodás (gátakból), drága infrastruktúra", "Depinde de cantitatea de apă, impact ambiental (baraje), infrastructură scumpă", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "power_plants",
      q4("Energie Zukunft: welche Kraftwerke brauchen wir?", "Future: which power plants do we need?", "Jövő: mely erőművekre van szükségünk?", "Viitor: care centrale avem nevoie?", lang),
      [
        q4("Mischung: erneuerbare (Wind, Solar, Hydro) + Kernkraft statt Kohle zur CO2-Reduktion", "Mix of renewables (wind, solar, hydro) + nuclear instead of coal to reduce CO2", "Vegyes: megújulók (szél, nap, víz) + atomerőmű szén helyett CO2 csökkentéshez", "Amestec: regenerabile (vânt, solar, hidro) + nuclear în loc de cărbune pentru CO2", lang),
      ]
    )
  );

  return questions;
}

// ─── RENEWABLE ENERGY ───────────────────────────────────────────────────────

const RENEWABLE_ENERGY_DATA = {
  sources: [
    { de: "Solarenergie", en: "Solar energy", hu: "Napenergia", ro: "Energie solară", advantage: "Kostenlos, unbegrenzt", disadvantage: "Wetter abhängig, niedrig Wirkungsgrad" },
    { de: "Windenergie", en: "Wind energy", hu: "Szélenergia", ro: "Energie eolian", advantage: "Kostenlos, hoher Wirkungsgrad", disadvantage: "Wetter abhängig, Landverbrauch" },
    { de: "Wasserkraft", en: "Hydropower", hu: "Vízenergia", ro: "Energie hidroelectrică", advantage: "Hoher Wirkungsgrad, konstant", disadvantage: "Umweltbelastung, teuer" },
    { de: "Geothermie", en: "Geothermal", hu: "Geotermikus energia", ro: "Energie geotermală", advantage: "Konstant, keine Emissionen", disadvantage: "Abhängig von Lage, teuer" },
    { de: "Biomasse", en: "Biomass", hu: "Biomassza", ro: "Biomasă", advantage: "Verwertbar, Abfallnutzung", disadvantage: "CO2-Emissionen, Landverbrauch" },
  ],
};

function generateRenewableEnergyMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Renewable energy source identification (6 questions)
  for (const source of RENEWABLE_ENERGY_DATA.sources) {
    const correct = q4(source.de, source.en, source.hu, source.ro, lang);
    const wrongSources = RENEWABLE_ENERGY_DATA.sources.filter((s: any) => s.en !== source.en);
    const wrong = [
      q4(wrongSources[0].de, wrongSources[0].en, wrongSources[0].hu, wrongSources[0].ro, lang),
      q4(wrongSources[1].de, wrongSources[1].en, wrongSources[1].hu, wrongSources[1].ro, lang),
    ];

    questions.push(
      createMCQ(
        "energy_transfer",
        "renewable_energy",
        q4(
          `${source.advantage}. Welche Energiequelle?`,
          `${source.advantage}. Which energy source?`,
          `${source.advantage}. Melyik energiaforrás?`,
          `${source.advantage}. Care sursă de energie?`,
          lang
        ),
        correct,
        wrong,
        rng
      )
    );
  }

  // Template 2: Advantage understanding (6 questions)
  for (const source of RENEWABLE_ENERGY_DATA.sources) {
    const correct = q4(source.advantage, source.advantage, source.advantage, source.advantage, lang);
    questions.push(
      createMCQ(
        "energy_transfer",
        "renewable_energy",
        q4(
          `Vorteil von ${source.de}:`,
          `Advantage of ${source.en}:`,
          `${source.hu} előnye:`,
          `Avantajul ${source.ro}:`,
          lang
        ),
        correct,
        [
          q4("Billig Rohstoff", "Cheap fuel", "Olcsó tüzelőanyag", "Combustibil ieftin", lang),
          q4("Keine Umweltprobleme", "No environment issues", "Nincs környezeti probléma", "Fără probleme de mediu", lang),
        ],
        rng
      )
    );
  }

  // Template 3: Disadvantage understanding (7 questions)
  for (let i = 0; i < 7; i++) {
    const source = pick(RENEWABLE_ENERGY_DATA.sources, rng);
    const correct = q4(source.disadvantage, source.disadvantage, source.disadvantage, source.disadvantage, lang);
    questions.push(
      createMCQ(
        "energy_transfer",
        "renewable_energy",
        q4(
          `Nachteil von ${source.de}:`,
          `Disadvantage of ${source.en}:`,
          `${source.hu} hátránya:`,
          `Dezavantajul ${source.ro}:`,
          lang
        ),
        correct,
        [
          q4("Zu teuer", "Too expensive", "Túl drága", "Prea scump", lang),
          q4("Verursacht Umweltschaden", "Causes environmental damage", "Környezetkárosítást okoz", "Provoacă daunelor mediului", lang),
        ],
        rng
      )
    );
  }

  // Template 4: Future potential (7 questions)
  for (let i = 0; i < 7; i++) {
    const scenario = pick([
      q4("Länder mit viel Sonne sollten nutzen:", "Sunny countries should use:", "Napfényes országok használjanak:", "Țările soareloase ar trebui să folosească:", lang),
      q4("Bergige Regionen sollten nutzen:", "Mountainous regions should use:", "Hegyi régióknál kellene használni:", "Regiunile muntoase ar trebui să folosească:", lang),
      q4("Windig Regionen sollten nutzen:", "Windy regions should use:", "Szeles régióknál kellene használni:", "Regiuni cu vânt ar trebui să folosească:", lang),
    ], rng);

    questions.push(
      createMCQ(
        "energy_transfer",
        "renewable_energy",
        scenario,
        pick([
          q4("Solarenergie", "Solar energy", "Napenergia", "Energie solară", lang),
          q4("Wasserkraft", "Hydropower", "Vízenergia", "Energia hidroelectrică", lang),
          q4("Windenergie", "Wind energy", "Szélenergia", "Energie eolian", lang),
        ], rng),
        [
          q4("Kohlekraftwerk", "Coal plant", "Szénlokomotív", "Centrală pe cărbune", lang),
          q4("Kernkraftwerk", "Nuclear plant", "Atomerőmű", "Centrală nucleară", lang),
        ],
        rng
      )
    );
  }

  return questions;
}

function generateRenewableEnergyTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "energy_transfer",
      "renewable_energy",
      q4("Was ist erneuerbare Energie?", "What is renewable energy?", "Mi az megújuló energia?", "Ce este energia regenerabilă?", lang),
      [
        q4("Energie aus Quellen, die sich natürlich erneuern (Sonne, Wind, Wasser)", "Energy from sources that naturally renew (sun, wind, water)", "Energia olyan forrásokból, amelyek természetesen megújulnak (nap, szél, víz)", "Energie din surse care se reînnoiesc natural (soare, vânt, apă)", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "renewable_energy",
      q4("Nenne 5 erneuerbare Energiequellen", "Name 5 renewable energy sources", "Nevezz meg 5 megújuló energiaforrást", "Numește 5 surse de energie regenerabilă", lang),
      [
        q4("Sonne, Wind, Wasser, Geothermie, Biomasse", "Sun, wind, water, geothermal, biomass", "Nap, szél, víz, geotermikus, biomassza", "Soare, vânt, apă, geotermală, biomasă", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "renewable_energy",
      q4("Warum sind erneuerbare Energien wichtig?", "Why are renewable energies important?", "Miért fontosak a megújuló energiák?", "De ce sunt importante energiile regenerabile?", lang),
      [
        q4("CO2-frei, nachhaltig, unbegrenzt verfügbar, umweltfreundlich", "CO2-free, sustainable, unlimited, environmentally friendly", "CO2-mentes, fenntartható, korlátlan, környezetbarát", "Fără CO2, durabile, nelimitate, ecologice", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "renewable_energy",
      q4("Welche Nachteile haben erneuerbare Energien heute?", "What are current disadvantages of renewables?", "Mik az erneuerbare energiák jelenlegi hátrányai?", "Care sunt dezavantajele actuale ale energiilor regenerabile?", lang),
      [
        q4("Wetter abhängig, hohe Initialkosten, Speichertechnologie noch teuer, nicht überall verfügbar", "Weather dependent, high initial costs, storage expensive, not available everywhere", "Időjárás függő, magas kezdeti költségek, tárolás drága, nem mindenhol elérhető", "Dependent de vreme, costuri inițiale ridicate, depozitare scumpă, nu e disponibil pretutindeni", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "renewable_energy",
      q4("Rolle Solarenergie in Zukunft?", "Role of solar in future?", "A napenergia szerepe a jövőben?", "Rolul energiei solare în viitor?", lang),
      [
        q4("Wird expandiert: Dachsolaranlagen, Solarfarmen, neue Batterietechnologien für Speicherung", "Will expand: rooftop, solar farms, new battery tech for storage", "Bővülni fog: tetős napelemek, napelemes farmok, új akkumlátor technológia", "Se va extinde: panouri pe acoperișuri, ferme solare, noi tehnologii de baterii", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "renewable_energy",
      q4("Speicherung erneuerbare Energie: welche Lösungen?", "Storage solutions for renewable energy?", "Megújuló energia tárolása: mely megoldások?", "Soluții de stocare pentru energii regenerabile?", lang),
      [
        q4("Batterien, Pumpspeicher, Wasserstoff, Wärmespeicher, Druckluftspeicher", "Batteries, hydroelectric storage, hydrogen, heat storage, compressed air", "Akkumulátor, szivattyús tárolás, hidrogén, hőtárolás, sűrített levegő", "Baterii, hidro-acumulare, hidrogen, stocare căldură, aer comprimat", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "renewable_energy",
      q4("Anteil erneuerbarer Energien weltweit heute (ca.)?", "Percentage renewable energy worldwide today?", "A megújuló energiák aránya világszerte ma (kb.)?", "Procentul energiilor regenerabile la nivel mondial astazi (aprox.)?", lang),
      [
        q4("Etwa 25-30% (2024), ziel 2050: 80-90%", "About 25-30% (2024), goal 2050: 80-90%", "Körülbelül 25-30% (2024), cél 2050: 80-90%", "Aproximativ 25-30% (2024), țintă 2050: 80-90%", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "renewable_energy",
      q4("Größte Windkraftanlagen-Länder?", "Biggest wind power countries?", "A legnagyobb szélenergia országok?", "Cele mai mari țări cu energie eoliană?", lang),
      [
        q4("China, USA, Deutschland, Brasilien, Vietnam", "China, USA, Germany, Brazil, Vietnam", "Kína, USA, Németország, Brazília, Vietnam", "China, SUA, Germania, Brazilia, Vietnam", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "renewable_energy",
      q4("Wird Biomasse wirklich nachhaltig sein?", "Is biomass truly sustainable?", "A biomassza valóban fenntartható lesz?", "Este biomasă cu adevărat durabilă?", lang),
      [
        q4("Nur wenn nachwachsend, nicht mit Regenwald, Abfallverwertung möglich, Landverbrauch wichtig", "Only if renewable source, not from rainforest, waste utilization, land use matters", "Csak ha megújuló forrás, nem esőerdőből, hulladékhasznosítás lehetséges, földhasználat fontos", "Doar dacă sursă regenerabilă, nu din pădurile tropicale, utilizare deșeuri posibilă, utilizare teren importantă", lang),
      ]
    )
  );

  return questions;
}

// ─── FOSSIL FUELS ───────────────────────────────────────────────────────────

const FOSSIL_FUELS_DATA = {
  types: [
    { de: "Kohle", en: "Coal", hu: "Szén", ro: "Cărbune", energy: 24, co2: 400 },
    { de: "Erdöl", en: "Oil", hu: "Olaj", ro: "Petrol", energy: 45, co2: 300 },
    { de: "Erdgas", en: "Natural gas", hu: "Földgáz", ro: "Gaze naturale", energy: 55, co2: 200 },
  ],
};

function generateFossilFuelsMCQ(lang = "en", seed = 0): CurriculumMCQ[] {
  const rng = mulberry32(seed);
  const questions: CurriculumMCQ[] = [];

  // Template 1: Fossil fuel identification (6 questions)
  for (const fuel of FOSSIL_FUELS_DATA.types) {
    const correct = q4(fuel.de, fuel.en, fuel.hu, fuel.ro, lang);
    const wrongFuels = FOSSIL_FUELS_DATA.types.filter((f: any) => f.en !== fuel.en);
    const wrong = [
      q4(wrongFuels[0].de, wrongFuels[0].en, wrongFuels[0].hu, wrongFuels[0].ro, lang),
      q4(wrongFuels[1].de, wrongFuels[1].en, wrongFuels[1].hu, wrongFuels[1].ro, lang),
    ];

    questions.push(
      createMCQ(
        "energy_transfer",
        "fossil_fuels",
        q4(
          `Wird aus Erdölvorkommen gewonnen. Welcher Brennstoff?`,
          `Obtained from oil deposits. Which fuel?`,
          `Olajraktákból nyerik ki. Melyik tüzelőanyag?`,
          `Obținut din depozitele de petrol. Care combustibil?`,
          lang
        ),
        correct,
        wrong,
        rng
      )
    );
  }

  // Template 2: CO2 emissions (6 questions)
  for (let i = 0; i < 6; i++) {
    const fuel1 = pick(FOSSIL_FUELS_DATA.types, rng);
    const fuel2 = pick(FOSSIL_FUELS_DATA.types.filter((f: any) => f.en !== fuel1.en), rng);

    const lessCO2 = fuel1.co2 < fuel2.co2 ? fuel1 : fuel2;
    const correct = q4(lessCO2.de, lessCO2.en, lessCO2.hu, lessCO2.ro, lang);

    questions.push(
      createMCQ(
        "energy_transfer",
        "fossil_fuels",
        q4(
          `Welches erzeugt weniger CO2: ${q4(fuel1.de, fuel1.en, fuel1.hu, fuel1.ro, lang)} oder ${q4(fuel2.de, fuel2.en, fuel2.hu, fuel2.ro, lang)}?`,
          `Which produces less CO2: ${fuel1.en} or ${fuel2.en}?`,
          `Melyik termel kevesebb CO2-t: ${fuel1.hu} vagy ${fuel2.hu}?`,
          `Care produce mai puțin CO2: ${fuel1.ro} sau ${fuel2.ro}?`,
          lang
        ),
        correct,
        [q4("Beide gleich", "Both same", "Mindkettő ugyanaz", "Ambele la fel", lang)],
        rng
      )
    );
  }

  // Template 3: Energy content & reserves (7 questions)
  for (let i = 0; i < 7; i++) {
    const fuel = pick(FOSSIL_FUELS_DATA.types, rng);
    const energyStatement = fuel.energy > 35
      ? q4("Hoher Energiegehalt", "High energy content", "Magas energiatartalom", "Conținut energetic ridicat", lang)
      : q4("Niedriger Energiegehalt", "Low energy content", "Alacsony energiatartalom", "Conținut energetic scăzut", lang);

    questions.push(
      createMCQ(
        "energy_transfer",
        "fossil_fuels",
        q4(
          `${q4(fuel.de, fuel.en, fuel.hu, fuel.ro, lang)}: ${energyStatement}?`,
          `${fuel.en}: ${energyStatement}?`,
          `${fuel.hu}: ${energyStatement}?`,
          `${fuel.ro}: ${energyStatement}?`,
          lang
        ),
        q4("Ja", "Yes", "Igen", "Da", lang),
        [q4("Nein", "No", "Nem", "Nu", lang)],
        rng
      )
    );
  }

  // Template 4: Formation time (6 questions)
  for (let i = 0; i < 6; i++) {
    questions.push(
      createMCQ(
        "energy_transfer",
        "fossil_fuels",
        q4(
          `Fossile Brennstoffe bildeten sich vor wie viel Millionen Jahren?`,
          `Fossil fuels formed how many million years ago?`,
          `Fosszilis tüzelőanyagok hány millió éve képződtek?`,
          `Combustibilii fosili s-au format acum câți milioane de ani?`,
          lang
        ),
        q4("300-400 Millionen Jahren (Karbonzeit)", "300-400 million years ago (Carboniferous)", "300-400 millió éve (Szénkőzetes)", "300-400 milioane de ani (era Carboniferoasă)", lang),
        [
          q4("10 millionen Jahren", "10 million years ago", "10 millió éve", "10 milioane de ani", lang),
          q4("1000 millionen Jahren", "1000 million years ago", "1000 millió éve", "1000 milioane de ani", lang),
        ],
        rng
      )
    );
  }

  // Template 5: Environmental impact (6 questions)
  for (let i = 0; i < 6; i++) {
    const impact = pick([
      q4("Treibhausgase und Klimawandel", "Greenhouse gases and climate change", "Üvegházeffektus és klímaváltozás", "Gaze cu efect de seră și schimbare climatică", lang),
      q4("Luftverschmutzung", "Air pollution", "Levegőszennyezés", "Poluare aeriană", lang),
      q4("Saurer Regen", "Acid rain", "Savas eső", "Ploaie acidă", lang),
      q4("Ressourcenverschwendung", "Resource depletion", "Erőforrás fogyás", "Epuizare resurse", lang),
    ], rng);

    questions.push(
      createMCQ(
        "energy_transfer",
        "fossil_fuels",
        q4(`Umweltproblem fossiler Brennstoffe:`, `Environmental problem of fossil fuels:`, `Fosszilis tüzelőanyagok környezeti problémája:`, `Problemă ambientală a combustibililor fosili:`, lang),
        impact,
        [q4("Keine Probleme", "No problems", "Nincs probléma", "Fără probleme", lang)],
        rng
      )
    );
  }

  return questions;
}

function generateFossilFuelsTyping(lang = "en", seed = 0): CurriculumTyping[] {
  const rng = mulberry32(seed);
  const questions: CurriculumTyping[] = [];

  questions.push(
    createTyping(
      "energy_transfer",
      "fossil_fuels",
      q4("Was sind fossile Brennstoffe?", "What are fossil fuels?", "Mik a fosszilis tüzelőanyagok?", "Ce sunt combustibilii fosili?", lang),
      [
        q4("Brennstoffe aus fossilen Organismen (Pflanzen, Tiere) von vor Millionen Jahren", "Fuels from fossilized organisms (plants, animals) from millions of years ago", "Tüzelőanyagok föszilizálódott szervezetekből (növények, állatok) millió éve", "Combustibili din organisme fosilizate (plante, animale) de acum milioane de ani", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "fossil_fuels",
      q4("Nenne 3 wichtige fossile Brennstoffe", "Name 3 main fossil fuels", "Nevezz meg 3 fontos fosszilis tüzelőanyagot", "Numește 3 combustibili fosili importanți", lang),
      [
        q4("Kohle, Erdöl, Erdgas", "Coal, oil, natural gas", "Szén, olaj, földgáz", "Cărbune, petrol, gaze naturale", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "fossil_fuels",
      q4("Warum sind fossile Brennstoffe endlich?", "Why are fossil fuels finite?", "Miért végesek a fosszilis tüzelőanyagok?", "De ce sunt combustibilii fosili limitați?", lang),
      [
        q4("Bildung dauert Millionen Jahre, Verbrauch ist viel schneller als Bildungsrate", "Formation takes millions of years, consumption much faster than formation", "A képződés millió évet vesz igénybe, a fogyasztás sokkal gyorsabb mint a képződés", "Formarea durează milioane de ani, consumul mult mai rapid decât formarea", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "fossil_fuels",
      q4("Welche Länder haben größte Ölreserven?", "Which countries have largest oil reserves?", "Mely országoknak vannak a legnagyobb olajkészletei?", "Care țări au cele mai mari rezerve de petrol?", lang),
      [
        q4("Venezuel, Saudiarabien, Irak, Irak, Russland", "Venezuela, Saudi Arabia, Iraq, Iran, Russia", "Venezuela, Szaúd-Arábia, Irak, Irán, Oroszország", "Venezuela, Arabia Saudită, Irak, Iran, Rusia", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "fossil_fuels",
      q4("Hauptursache des Klimawandels?", "Main cause of climate change?", "Az éghajlatváltozás fő oka?", "Principala cauză a schimbării climatice?", lang),
      [
        q4("Verbrennung fossiler Brennstoffe → CO2-Emissionen → Treibhauseffekt", "Burning fossil fuels → CO2 emissions → greenhouse effect", "Fosszilis tüzelőanyagok elégetése → CO2 kibocsátás → üvegházeffektus", "Arderea combustibililor fosili → emisii CO2 → efect de seră", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "fossil_fuels",
      q4("Energieinhalt: Kohle vs. Erdgas?", "Energy content: coal vs. natural gas?", "Energiatartalom: szén vs. földgáz?", "Conținut energetic: cărbune vs. gaze naturale?", lang),
      [
        q4("Kohle 24 MJ/kg, Erdgas 55 MJ/kg → Erdgas höher", "Coal 24 MJ/kg, gas 55 MJ/kg → gas higher", "Szén 24 MJ/kg, födi gáz 55 MJ/kg → gáz magasabb", "Cărbune 24 MJ/kg, gaz 55 MJ/kg → gaz mai mare", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "fossil_fuels",
      q4("Unterschied Kohle / Peat?", "Difference coal / peat?", "Különbség szén / turfa?", "Diferență cărbune / turbă?", lang),
      [
        q4("Peat: Teilweise zersetzt, jung, weniger Energie; Kohle: vollständig fossilt, älter, mehr Energie", "Peat: partially decomposed, young; Coal: fully fossilized, older", "Turfa: részben lebomlott, fiatal; Szén: teljesen föszilizálódott, régebbi", "Turbă: parțial descompusă, tânără; Cărbune: complet fosilizată, mai veche", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "fossil_fuels",
      q4("Wie lange noch Kohle/Öl/Gas Ressourcen?", "How long remaining fossil resources?", "Meddig vannak még fosszilis készletek?", "Cât timp mai rămân resursele fosile?", lang),
      [
        q4("Kohle ~200 Jahre, Öl ~50 Jahre, Gas ~70 Jahre (bei heutigem Verbrauch)", "Coal ~200 yrs, oil ~50 yrs, gas ~70 yrs (at current consumption)", "Szén ~200 év, olaj ~50 év, gáz ~70 év (jelenlegi fogyasztásnál)", "Cărbune ~200 ani, petrol ~50 ani, gaze ~70 ani (la consumul actual)", lang),
      ]
    )
  );

  questions.push(
    createTyping(
      "energy_transfer",
      "fossil_fuels",
      q4("Warum sollten fossile Brennstoffe reduziert werden?", "Why should fossil fuels be reduced?", "Miért kellene csökkenteni a fosszilis tüzelőanyagokat?", "De ce ar trebui reduse combustibilii fosili?", lang),
      [
        q4("Klímaerwärmung, endliche Ressourcen, Umweltschäden, schädliche Luftqualität", "Climate warming, finite resources, environmental damage, poor air quality", "Klímafelmelgedés, véges erőforrások, környezeti károk, rossz levegőminőség", "Încălzire climatică, resurse limitate, daune mediu, calitate proastă a aerului", lang),
      ]
    )
  );

  return questions;
}

// ─── EXPORT ────────────────────────────────────────────────────────────────

export const K6_ENERGY_TRANSFER_GENERATORS: Record<string, (lang?: string, seed?: number) => CurriculumQuestion[]> = {
  energy_chains: (lang = "en", seed = 0) => [...generateEnergyChainsMCQ(lang, seed), ...generateEnergyChainsTyping(lang, seed)],
  energy_chains_mcq: (lang = "en", seed = 0) => generateEnergyChainsMCQ(lang, seed),
  energy_chains_typing: (lang = "en", seed = 0) => generateEnergyChainsTyping(lang, seed),

  efficiency: (lang = "en", seed = 0) => [...generateEfficiencyMCQ(lang, seed), ...generateEfficiencyTyping(lang, seed)],
  efficiency_mcq: (lang = "en", seed = 0) => generateEfficiencyMCQ(lang, seed),
  efficiency_typing: (lang = "en", seed = 0) => generateEfficiencyTyping(lang, seed),

  power_plants: (lang = "en", seed = 0) => [...generatePowerPlantsMCQ(lang, seed), ...generatePowerPlantsTyping(lang, seed)],
  power_plants_mcq: (lang = "en", seed = 0) => generatePowerPlantsMCQ(lang, seed),
  power_plants_typing: (lang = "en", seed = 0) => generatePowerPlantsTyping(lang, seed),

  renewable_energy: (lang = "en", seed = 0) => [...generateRenewableEnergyMCQ(lang, seed), ...generateRenewableEnergyTyping(lang, seed)],
  renewable_energy_mcq: (lang = "en", seed = 0) => generateRenewableEnergyMCQ(lang, seed),
  renewable_energy_typing: (lang = "en", seed = 0) => generateRenewableEnergyTyping(lang, seed),

  fossil_fuels: (lang = "en", seed = 0) => [...generateFossilFuelsMCQ(lang, seed), ...generateFossilFuelsTyping(lang, seed)],
  fossil_fuels_mcq: (lang = "en", seed = 0) => generateFossilFuelsMCQ(lang, seed),
  fossil_fuels_typing: (lang = "en", seed = 0) => generateFossilFuelsTyping(lang, seed),
};

// ─── INTEGRATION WITH physikCurriculum6.ts ────────────────────────────────
//
// Registration is done by importing setK6GeneratorMap from physikCurriculum6
// and calling it externally (e.g. in the test page or astro page)
//
