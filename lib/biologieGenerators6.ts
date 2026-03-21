// ─── BIOLOGIE GENERATORS (Klasse 6) ───────────────────────────────────────
// English Test mintájára strukturálva
// 21 subtopic × 2 (MCQ + Typing) = 42 generátor

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";
import { setK6GeneratorMap } from "./biologieCurriculum6";

// ─── HELPER FUNCTIONS ──────────────────────────────────────────────────────

function mulberry32(seed: number) {
  return function() {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle<T>(arr: T[], rng: () => number): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

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

// ─── DATA POOLS (KLASSE 6) ────────────────────────────────────────────────

// WIRBELLOSE
const ARTHROPOD_DATA = [
  { name: "Insekt", legs: "6", body: "Kopf, Brust, Hinterleib" },
  { name: "Spinne", legs: "8", body: "Kopf-Brust, Hinterleib" },
  { name: "Krebs", legs: "10+", body: "Segmentiert" },
  { name: "Skolopender", legs: "viele", body: "Sehr lang" },
  { name: "Milbe", legs: "8", body: "Winzig" },
];

const INSECT_DATA = [
  { name: "Biene", role: "Bestäubung", type: "Hymenoptera", count: 6 },
  { name: "Käfer", role: "Zersetzer", type: "Coleoptera", count: 6 },
  { name: "Schmetterling", role: "Bestäubung", type: "Lepidoptera", count: 6 },
  { name: "Fliege", role: "Zersetzer", type: "Diptera", count: 6 },
  { name: "Libelle", role: "Jäger", type: "Odonata", count: 6 },
  { name: "Heuschrecke", role: "Pflanzenfresser", type: "Orthoptera", count: 6 },
];

const MOLLUSK_DATA = [
  { name: "Schnecke", shell: "Spirale", movement: "Fuß", habitat: "Land/Wasser" },
  { name: "Muschel", shell: "2-teilig", movement: "Filtrierend", habitat: "Wasser" },
  { name: "Tintenfisch", shell: "Keine", movement: "Tinte", habitat: "Meer" },
  { name: "Nacktschnecke", shell: "Keine", movement: "Fuß", habitat: "Land" },
  { name: "Austern", shell: "2-teilig", movement: "Stationär", habitat: "Meer" },
];

const WORM_DATA = [
  { name: "Regenwurm", segment: "Ja", habitat: "Boden", role: "Zersetzer" },
  { name: "Blutegel", segment: "Ja", habitat: "Wasser", role: "Parasit" },
  { name: "Fadenwurm", segment: "Nein", habitat: "Innere", role: "Parasit" },
  { name: "Plattwurm", segment: "Nein", habitat: "Gewässer", role: "Raubtier" },
  { name: "Bohrwurm", segment: "Ja", habitat: "Holz", role: "Zersetzer" },
];

// WALD
const FOREST_LAYER_DATA = [
  { layer: "Krautschicht", light: "Wenig", plants: "Farne, Moose", height: "0-1m" },
  { layer: "Strauchschicht", light: "Mittel", plants: "Sträucher", height: "1-5m" },
  { layer: "Baumschicht", light: "Viel", plants: "Große Bäume", height: ">5m" },
];

const FOOD_CHAIN_DATA = [
  { producer: "Pflanze", consumer1: "Herbivore", consumer2: "Karnivore", example: "Gras→Kaninchen→Fuchs" },
  { producer: "Algen", consumer1: "Fisch", consumer2: "Pelikan", example: "Algen→Fisch→Vogel" },
  { producer: "Klee", consumer1: "Schaf", consumer2: "Wolf", example: "Klee→Schaf→Wolf" },
  { producer: "Blätter", consumer1: "Raupe", consumer2: "Vogel", example: "Blatt→Raupe→Vogel" },
];

// GEWÄSSER
const FRESHWATER_DATA = [
  { type: "Fluss", flow: "Schnell", organisms: "Forelle, Bachneunaugen", depth: "Variabel" },
  { type: "See", flow: "Stagnant", organisms: "Hecht, Schleie", depth: "Tief" },
  { type: "Sumpf", flow: "Langsam", organisms: "Frosch, Schilfröhricht", depth: "Flach" },
  { type: "Bach", flow: "Schnell", organisms: "Molche, Libellen", depth: "Sehr flach" },
  { type: "Teich", flow: "Sehr stagnant", organisms: "Enten, Wasserpflanzen", depth: "Flach" },
];

const SALTWATER_DATA = [
  { zone: "Gezeitenzone", depth: "0-10m", organisms: "Seeanemone, Krebse", light: "Viel" },
  { zone: "Küstenzone", depth: "10-200m", organisms: "Fische, Delphine", light: "Mittel" },
  { zone: "Tiefenzone", depth: ">200m", organisms: "Anglerfisch, Garnele", light: "Keine" },
  { zone: "Riffzone", depth: "5-50m", organisms: "Korallen, Korallenriffische", light: "Viel" },
];

// BLUTKREISLAUF
const BLOOD_COMPONENT_DATA = [
  { component: "Rote Blutkörperchen", function: "Sauerstofftransport", count: "25 Billionen", lifespan: "120 Tage" },
  { component: "Weiße Blutkörperchen", function: "Immunabwehr", count: "10 Milliarden", lifespan: "Variabel" },
  { component: "Blutplättchen", function: "Blutgerinnung", count: "150-400 Milliarden", lifespan: "10 Tage" },
  { component: "Plasma", function: "Transport", count: "Flüssig", lifespan: "4-5 Tage" },
];

const HEART_DATA = [
  { chamber: "Rechter Vorhof", function: "Deoxygeniertes Blut empfangen", vessel: "Vena cava", side: "rechts" },
  { chamber: "Rechter Ventrikel", function: "Zu den Lungen pumpen", vessel: "Pulmonalarterie", side: "rechts" },
  { chamber: "Linker Vorhof", function: "Oxygeniertes Blut empfangen", vessel: "Lungenvene", side: "links" },
  { chamber: "Linker Ventrikel", function: "In den Körper pumpen", vessel: "Aorta", side: "links" },
];

// ATMUNG
const LUNG_DATA = [
  { part: "Trachea", function: "Luftleitung", diameter: "18-24mm", location: "Hals" },
  { part: "Bronchus", function: "Verzweigung", diameter: "Abnehmend", location: "Lunge" },
  { part: "Alveolen", function: "Gasaustausch", count: "300 Millionen", location: "Lunge" },
  { part: "Larynx", function: "Stimmbildung", diameter: "Variabel", location: "Kehle" },
];

const RESPIRATION_DATA = [
  { type: "Externe", process: "Luft ↔ Blut", location: "Lunge", gas: "O2/CO2" },
  { type: "Zellatmung", process: "Glucose → Energy", location: "Zelle", gas: "Glucose" },
  { type: "Aerob", process: "Mit Sauerstoff", location: "Mitochondrium", gas: "O2" },
];

// PUBERTÄT
const MALE_REPRO_DATA = [
  { organ: "Hoden", function: "Spermienproduktion", hormone: "Testosteron", location: "Hodensack" },
  { organ: "Prostata", function: "Sekret", output: "Sperma", hormone: "Testosteron" },
  { organ: "Penis", function: "Ausscheidung", hormone: "Keine", location: "Außen" },
];

const FEMALE_REPRO_DATA = [
  { organ: "Eierstock", function: "Eizellproduktion", hormone: "Östrogen", location: "Bauchraum" },
  { organ: "Uterus", function: "Embryoentwicklung", duration: "280 Tage", hormone: "Östrogen/Progesteron" },
  { organ: "Vagina", function: "Geburtskanal", duration: "Variabel", hormone: "Keine" },
];

const HORMONE_DATA = [
  { hormone: "Testosteron", effect: "Männliche Merkmale", source: "Hoden", target: "Körper" },
  { hormone: "Östrogen", effect: "Weibliche Merkmale", source: "Eierstock", target: "Körper" },
  { hormone: "Adrenalin", effect: "Stressreaktion", source: "Nebennierendrüse", target: "Herz/Muskeln" },
  { hormone: "Insulin", effect: "Blutzuckersenker", source: "Pankreas", target: "Blut" },
];

// ─── K6 GENERATORS (21 subtopics × 2 = 42 Generators) ─────────────────────

export const K6_Generators: Record<string, (seed?: number) => CurriculumQuestion[]> = {
  // WIRBELLOSE (5 subtopics)
  arthropods: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (data: typeof ARTHROPOD_DATA[0]) =>
        createMCQ("wirbellose", "arthropods",
          `Wie viele Beine hat ein ${data.name}?`,
          data.legs,
          ["4", "6", "8", "10", "12"],
          rng
        ),
      (data: typeof ARTHROPOD_DATA[0]) =>
        createMCQ("wirbellose", "arthropods",
          `${data.name} hat folgende Körpergliederung: ${data.body}`,
          "wahr",
          ["falsch", "teilweise wahr", "keine Gliederung"],
          rng
        ),
      (data: typeof ARTHROPOD_DATA[0]) =>
        createMCQ("wirbellose", "arthropods",
          `Welches Tier ist ein Arthropode mit ${data.legs} Beinen?`,
          data.name,
          ["Wurm", "Fisch", "Vogel"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const data = pick(ARTHROPOD_DATA, rng);
      const template = pick(templates, rng);
      questions.push(template(data));
    }
    return questions.slice(0, 30);
  },
  arthropods_typing: (seed?: number) => [
    createTyping("wirbellose", "arthropods", "Was ist ein Arthropode?", ["Wirbellose mit Gliedern", "Gliederfüßer"]),
    createTyping("wirbellose", "arthropods", "Nenne 3 Beispiele für Arthropoden", ["Insekt, Spinne, Krebs"]),
    createTyping("wirbellose", "arthropods", "Was ist ein Exoskelett?", ["Äußeres Skelett", "Außenschale"]),
    createTyping("wirbellose", "arthropods", "Wie häuten sich Arthropoden?", ["Häutung", "Mauserung"]),
    createTyping("wirbellose", "arthropods", "Was ist das größte Arthropode?", ["Kokosnusskrabbe"]),
  ],

  insects: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (data: typeof INSECT_DATA[0]) =>
        createMCQ("wirbellose", "insects",
          `${data.name} (${data.type}) hat die Rolle: ${data.role}`,
          "wahr",
          ["falsch", "teilweise wahr", "andere Rolle"],
          rng
        ),
      (data: typeof INSECT_DATA[0]) =>
        createMCQ("wirbellose", "insects",
          `Welches Insekt bestäubt Pflanzen und sammelt Honig?`,
          "Biene",
          ["Käfer", "Fliege", "Wespe"],
          rng
        ),
      (data: typeof INSECT_DATA[0]) =>
        createMCQ("wirbellose", "insects",
          `${data.name} hat wieviele Flügel?`,
          data.count === 6 ? "2 oder 4" : "Variabel",
          ["1", "2", "4", "6"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const data = pick(INSECT_DATA, rng);
      const template = pick(templates, rng);
      questions.push(template(data));
    }
    return questions.slice(0, 30);
  },
  insects_typing: (seed?: number) => [
    createTyping("wirbellose", "insects", "Was ist eine Metamorphose?", ["Umwandlung", "Verwandlung", "Lebenszyklus"]),
    createTyping("wirbellose", "insects", "Wie viele Lebensphasen hat ein Insekt?", ["4", "vier"]),
    createTyping("wirbellose", "insects", "Nenne die 4 Phasen der Metamorphose", ["Ei, Larve, Puppe, Insekt"]),
    createTyping("wirbellose", "insects", "Welches Insekt produziert Honig?", ["Biene"]),
    createTyping("wirbellose", "insects", "Sind Insekten kaltblütig?", ["Ja"]),
  ],

  spiders: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () =>
        createMCQ("wirbellose", "spiders",
          "Wie viele Beine hat eine Spinne?",
          "8",
          ["6", "10", "12"],
          rng
        ),
      () =>
        createMCQ("wirbellose", "spiders",
          "Spinnen haben wie viele Augen?",
          "8",
          ["2", "4", "6"],
          rng
        ),
      () =>
        createMCQ("wirbellose", "spiders",
          "Sind Spinnen Insekten?",
          "Nein, Arachniden",
          ["Ja", "Ja, spezielle Insekten", "Fische"],
          rng
        ),
      () =>
        createMCQ("wirbellose", "spiders",
          "Woraus besteht Spinnenseide?",
          "Protein",
          ["Stärke", "Fett", "Cellulose"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const template = pick(templates, rng);
      questions.push(template());
    }
    return questions.slice(0, 30);
  },
  spiders_typing: (seed?: number) => [
    createTyping("wirbellose", "spiders", "Spinnen haben wie viele Augen?", ["8"]),
    createTyping("wirbellose", "spiders", "Womit spinnt eine Spinne ihr Netz?", ["Spinnenseide", "Seide"]),
    createTyping("wirbellose", "spiders", "Sind Spinnen Jäger oder Pflanzenfresser?", ["Jäger", "Raubtiere"]),
    createTyping("wirbellose", "spiders", "Wie nennt man eine weibliche Spinne mit Eier?", ["Gravide"]),
    createTyping("wirbellose", "spiders", "Welche Spinne ist giftig?", ["Schwarze Witwe", "Vogelspinne"]),
  ],

  mollusks: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (data: typeof MOLLUSK_DATA[0]) =>
        createMCQ("wirbellose", "mollusks",
          `${data.name} hat die Schalenart: ${data.shell}`,
          "wahr",
          ["falsch", "teilweise wahr", "Doppelschal"],
          rng
        ),
      (data: typeof MOLLUSK_DATA[0]) =>
        createMCQ("wirbellose", "mollusks",
          `Mit welchem bewegt sich eine ${data.name}?`,
          data.movement,
          ["Flossen", "Beine", "Flosse"],
          rng
        ),
      (data: typeof MOLLUSK_DATA[0]) =>
        createMCQ("wirbellose", "mollusks",
          `${data.name} lebt hauptsächlich in: ${data.habitat}`,
          "wahr",
          ["falsch", "anderswo", "überall"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const data = pick(MOLLUSK_DATA, rng);
      const template = pick(templates, rng);
      questions.push(template(data));
    }
    return questions.slice(0, 30);
  },
  mollusks_typing: (seed?: number) => [
    createTyping("wirbellose", "mollusks", "Nenne 3 Molluskten", ["Schnecke, Muschel, Tintenfisch"]),
    createTyping("wirbellose", "mollusks", "Was ist ein Weichtier?", ["Molluske"]),
    createTyping("wirbellose", "mollusks", "Welches Mollusk hat Tinte?", ["Tintenfisch", "Sepia"]),
    createTyping("wirbellose", "mollusks", "Wie heißt der muskulöse Teil?", ["Fuß"]),
    createTyping("wirbellose", "mollusks", "Was sind Molluskten?", ["Wirbellose mit weichem Körper"]),
  ],

  worm: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (data: typeof WORM_DATA[0]) =>
        createMCQ("wirbellose", "worm",
          `${data.name} lebt in ${data.habitat} und ist ${data.role}`,
          "wahr",
          ["falsch", "teilweise wahr", "andere Rolle"],
          rng
        ),
      (data: typeof WORM_DATA[0]) =>
        createMCQ("wirbellose", "worm",
          `${data.name} ist segmentiert: ${data.segment}`,
          data.segment,
          [data.segment === "Ja" ? "Nein" : "Ja"],
          rng
        ),
      () =>
        createMCQ("wirbellose", "worm",
          "Welcher Wurm lockert die Erde?",
          "Regenwurm",
          ["Fadenwurm", "Blutegel", "Plattwurm"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const data = pick(WORM_DATA, rng);
      const template = pick(templates, rng);
      questions.push(template(data));
    }
    return questions.slice(0, 30);
  },
  worm_typing: (seed?: number) => [
    createTyping("wirbellose", "worm", "Nenne 3 Wurmtypen", ["Regenwurm, Fadenwurm, Blutegel"]),
    createTyping("wirbellose", "worm", "Was machen Würmer im Boden?", ["Lockern", "Belüftung", "Zersetzer"]),
    createTyping("wirbellose", "worm", "Wie respirieren Würmer?", ["Durch die Haut"]),
    createTyping("wirbellose", "worm", "Sind Würmer Hermaphroditen?", ["Ja", "Beide Geschlechter"]),
    createTyping("wirbellose", "worm", "Was ist ein Fadenwurm?", ["Rundwurm", "Parasit"]),
  ],

  // WALD (3 subtopics)
  forest_layers: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (data: typeof FOREST_LAYER_DATA[0]) =>
        createMCQ("wald", "forest_layers",
          `Die ${data.layer} hat ${data.light} Licht`,
          "wahr",
          ["falsch", "zu viel Licht", "zu wenig"],
          rng
        ),
      (data: typeof FOREST_LAYER_DATA[0]) =>
        createMCQ("wald", "forest_layers",
          `${data.layer} - welche Pflanzen wachsen dort?`,
          data.plants,
          ["Gras", "Pilze", "Moose"],
          rng
        ),
      () =>
        createMCQ("wald", "forest_layers",
          "Wie viele Schichten hat ein Wald?",
          "3",
          ["2", "4", "5"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const data = pick(FOREST_LAYER_DATA, rng);
      const template = pick(templates, rng);
      questions.push(template(data));
    }
    return questions.slice(0, 30);
  },
  forest_layers_typing: (seed?: number) => [
    createTyping("wald", "forest_layers", "Nenne die 3 Waldschichten", ["Kraut-, Strauch-, Baumschicht"]),
    createTyping("wald", "forest_layers", "Welche Pflanzen wachsen in der Krautschicht?", ["Farne, Moose"]),
    createTyping("wald", "forest_layers", "Welche Schicht hat große Bäume?", ["Baumschicht"]),
    createTyping("wald", "forest_layers", "Wie heißt die mittlere Schicht?", ["Strauchschicht"]),
    createTyping("wald", "forest_layers", "Die Krautschicht liegt zwischen...", ["Boden und Strauchschicht"]),
  ],

  food_chain: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (data: typeof FOOD_CHAIN_DATA[0]) =>
        createMCQ("wald", "food_chain",
          "Was ist ein Produzent in der Nahrungskette?",
          "Pflanze",
          ["Pflanzenfresser", "Fleischfresser", "Pilz"],
          rng
        ),
      (data: typeof FOOD_CHAIN_DATA[0]) =>
        createMCQ("wald", "food_chain",
          `Ein Beispiel: ${data.example}`,
          "wahr",
          ["falsch", "umgekehrt", "falsch angeordnet"],
          rng
        ),
      () =>
        createMCQ("wald", "food_chain",
          "In einer Nahrungskette gibt es wie viele Glieder?",
          "Meist 3-4",
          ["1-2", "5-6", "Unbegrenzt"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const data = pick(FOOD_CHAIN_DATA, rng);
      const template = pick(templates, rng);
      questions.push(template(data));
    }
    return questions.slice(0, 30);
  },
  food_chain_typing: (seed?: number) => [
    createTyping("wald", "food_chain", "Was ist eine Nahrungskette?", ["Energiefluss", "Wer isst wen"]),
    createTyping("wald", "food_chain", "Nenne ein Beispiel für Nahrungskette", ["Gras → Kaninchen → Fuchs"]),
    createTyping("wald", "food_chain", "Was ist ein Pflanzenfresser?", ["Herbivore", "Herbivoren"]),
    createTyping("wald", "food_chain", "Was ist ein Fleischfresser?", ["Karnivore", "Fleischfresser"]),
    createTyping("wald", "food_chain", "Wo verliert Energie in der Kette?", ["Jede Stufe", "Wärme"]),
  ],

  decomposition: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () =>
        createMCQ("wald", "decomposition",
          "Wer zersetzt abgestorbenes Material?",
          "Dekomposer",
          ["Produzent", "Konsument", "Predator"],
          rng
        ),
      () =>
        createMCQ("wald", "decomposition",
          "Dekomposer sind hauptsächlich...",
          "Pilze und Bakterien",
          ["Pflanzen", "Tiere", "Viren"],
          rng
        ),
      () =>
        createMCQ("wald", "decomposition",
          "Wo leben die meisten Dekomposer?",
          "Boden",
          ["Wasser", "Luft", "Bäume"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const template = pick(templates, rng);
      questions.push(template());
    }
    return questions.slice(0, 30);
  },
  decomposition_typing: (seed?: number) => [
    createTyping("wald", "decomposition", "Was sind Dekomposer?", ["Pilze, Bakterien"]),
    createTyping("wald", "decomposition", "Was ist die Funktion von Dekomposern?", ["Nährstoffe zurück"]),
    createTyping("wald", "decomposition", "Welcher Hutpilz ist Dekomposer?", ["Champignon", "Austernpilz"]),
    createTyping("wald", "decomposition", "Wie lange dauert Zersetung?", ["Wochen bis Jahre", "Monate bis Jahre"]),
    createTyping("wald", "decomposition", "Was ist Kompostierung?", ["Abbau durch Dekomposer"]),
  ],

  // GEWÄSSER (3 subtopics)
  freshwater: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (data: typeof FRESHWATER_DATA[0]) =>
        createMCQ("gewaesser", "freshwater",
          `Ein ${data.type} hat ${data.flow} Strömung`,
          "wahr",
          ["falsch", "teilweise", "immer"],
          rng
        ),
      (data: typeof FRESHWATER_DATA[0]) =>
        createMCQ("gewaesser", "freshwater",
          `Im ${data.type} leben: ${data.organisms}`,
          "wahr",
          ["falsch", "teilweise", "niemals"],
          rng
        ),
      () =>
        createMCQ("gewaesser", "freshwater",
          "Welches ist ein Süßwasser-Habitat?",
          "Fluss",
          ["Meer", "Ozean", "Lagune"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const data = pick(FRESHWATER_DATA, rng);
      const template = pick(templates, rng);
      questions.push(template(data));
    }
    return questions.slice(0, 30);
  },
  freshwater_typing: (seed?: number) => [
    createTyping("gewaesser", "freshwater", "Nenne 3 Süßwasserhabitate", ["Fluss, See, Sumpf"]),
    createTyping("gewaesser", "freshwater", "Was lebt in einem Fluss?", ["Forelle, Bachneunaugen"]),
    createTyping("gewaesser", "freshwater", "Was lebt in einem See?", ["Hecht, Schleie"]),
    createTyping("gewaesser", "freshwater", "Wieviel Salz hat Süßwasser?", ["Wenig", "Kaum"]),
    createTyping("gewaesser", "freshwater", "Was ist ein Sumpf?", ["Langsam fließendes Wasser mit Pflanzen"]),
  ],

  saltwater: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (data: typeof SALTWATER_DATA[0]) =>
        createMCQ("gewaesser", "saltwater",
          `Die ${data.zone} ist in der Tiefe: ${data.depth}`,
          "wahr",
          ["falsch", "zu flach", "zu tief"],
          rng
        ),
      (data: typeof SALTWATER_DATA[0]) =>
        createMCQ("gewaesser", "saltwater",
          `In der ${data.zone} leben: ${data.organisms}`,
          "wahr",
          ["falsch", "nirgends", "anderswo"],
          rng
        ),
      () =>
        createMCQ("gewaesser", "saltwater",
          "Welche Zone hat das meiste Licht?",
          "Gezeitenzone",
          ["Tiefenzone", "Gräbenzone", "Abyssale"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const data = pick(SALTWATER_DATA, rng);
      const template = pick(templates, rng);
      questions.push(template(data));
    }
    return questions.slice(0, 30);
  },
  saltwater_typing: (seed?: number) => [
    createTyping("gewaesser", "saltwater", "Nenne die Meerezonen", ["Gezeiten-, Küsten-, Tiefenzone"]),
    createTyping("gewaesser", "saltwater", "Was ist die Gezeitenzone?", ["0-10m Tiefe"]),
    createTyping("gewaesser", "saltwater", "Welcher Fisch lebt in der Tiefe?", ["Anglerfisch"]),
    createTyping("gewaesser", "saltwater", "Wieviel Salz hat Salzwasser?", ["3,5%", "etwa 35 Gramm/Liter"]),
    createTyping("gewaesser", "saltwater", "Was sind Korallen?", ["Meerestiere", "Kolonien"]),
  ],

  water_organisms: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () =>
        createMCQ("gewaesser", "water_organisms",
          "Welches ist ein Wasserorganismus?",
          "Fisch",
          ["Schlange", "Adler", "Eidechse"],
          rng
        ),
      () =>
        createMCQ("gewaesser", "water_organisms",
          "Sind Delfine Fische?",
          "Nein, Säugetiere",
          ["Ja", "Ja, Meerestiere", "Nein, Reptilien"],
          rng
        ),
      () =>
        createMCQ("gewaesser", "water_organisms",
          "Was sind Plankton?",
          "Mikroorganismen",
          ["Große Fische", "Algen", "Bakterien"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const template = pick(templates, rng);
      questions.push(template());
    }
    return questions.slice(0, 30);
  },
  water_organisms_typing: (seed?: number) => [
    createTyping("gewaesser", "water_organisms", "Nenne 3 Wasserorganismen", ["Fisch, Pflanze, Krebs"]),
    createTyping("gewaesser", "water_organisms", "Was sind Plankton?", ["Mikroorganismen", "Kleine Lebewesen"]),
    createTyping("gewaesser", "water_organisms", "Sind Delfine Fische?", ["Nein", "Nein, Säugetiere"]),
    createTyping("gewaesser", "water_organisms", "Welches ist ein Meeressäugetier?", ["Wal", "Delfin"]),
    createTyping("gewaesser", "water_organisms", "Was sind Korallen?", ["Koloniale Tiere"]),
  ],

  // BLUTKREISLAUF (4 subtopics)
  blood_components: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (data: typeof BLOOD_COMPONENT_DATA[0]) =>
        createMCQ("blutkreislauf", "blood_components",
          `${data.component} hat die Funktion: ${data.function}`,
          "wahr",
          ["falsch", "andere Funktion", "keine Funktion"],
          rng
        ),
      (data: typeof BLOOD_COMPONENT_DATA[0]) =>
        createMCQ("blutkreislauf", "blood_components",
          `Welche Blutzelle transportiert Sauerstoff?`,
          "Rote Blutkörperchen",
          ["Weiße Blutkörperchen", "Blutplättchen", "Plasma"],
          rng
        ),
      () =>
        createMCQ("blutkreislauf", "blood_components",
          "Was sind Blutplättchen?",
          "Blutgerinnungszellen",
          ["Transportzellen", "Abwehrzellen", "Sauerstoffzellen"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const data = pick(BLOOD_COMPONENT_DATA, rng);
      const template = pick(templates, rng);
      questions.push(template(data));
    }
    return questions.slice(0, 30);
  },
  blood_components_typing: (seed?: number) => [
    createTyping("blutkreislauf", "blood_components", "Welche Blutkörperchen transportieren Sauerstoff?", ["Rote"]),
    createTyping("blutkreislauf", "blood_components", "Was sind Blutplättchen?", ["Gerinnungszellen"]),
    createTyping("blutkreislauf", "blood_components", "Welche Zellen bekämpfen Infektionen?", ["Weiße Blutkörperchen"]),
    createTyping("blutkreislauf", "blood_components", "Was ist Plasma?", ["Blutflüssigkeit"]),
    createTyping("blutkreislauf", "blood_components", "Wie lange leben rote Blutkörperchen?", ["120 Tage"]),
  ],

  heart: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (data: typeof HEART_DATA[0]) =>
        createMCQ("blutkreislauf", "heart",
          `${data.chamber} - Funktion: ${data.function}`,
          "wahr",
          ["falsch", "andere Funktion", "keine Funktion"],
          rng
        ),
      () =>
        createMCQ("blutkreislauf", "heart",
          "Wie viele Kammern hat das Herz?",
          "4",
          ["2", "3", "6"],
          rng
        ),
      () =>
        createMCQ("blutkreislauf", "heart",
          "Wie oft schlägt das Herz pro Minute?",
          "60-100",
          ["20-40", "150-200", "300+"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const data = pick(HEART_DATA, rng);
      const template = pick(templates, rng);
      questions.push(template(data));
    }
    return questions.slice(0, 30);
  },
  heart_typing: (seed?: number) => [
    createTyping("blutkreislauf", "heart", "Wie viele Kammern hat das Herz?", ["4"]),
    createTyping("blutkreislauf", "heart", "Was pumpt das Herz?", ["Blut"]),
    createTyping("blutkreislauf", "heart", "Wie oft schlägt das Herz pro Minute?", ["60-100", "70"]),
    createTyping("blutkreislauf", "heart", "Welche Schicht ist der Herzmuskel?", ["Myokard"]),
    createTyping("blutkreislauf", "heart", "Was ist ein Herzschlag?", ["Kontraktion", "Pulsschlag"]),
  ],

  circulation: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () =>
        createMCQ("blutkreislauf", "circulation",
          "Der Blutkreislauf hat wie viele Kreiläufe?",
          "2",
          ["1", "3", "4"],
          rng
        ),
      () =>
        createMCQ("blutkreislauf", "circulation",
          "Nenne die zwei Kreisläufe",
          "Lungen- und Systemischer",
          ["Arterieller und Venöser", "Oben und Unten", "Links und Rechts"],
          rng
        ),
      () =>
        createMCQ("blutkreislauf", "circulation",
          "Was ist eine Arterie?",
          "Vom Herz weg",
          ["Zum Herz hin", "In der Lunge", "Im Gehirn"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const template = pick(templates, rng);
      questions.push(template());
    }
    return questions.slice(0, 30);
  },
  circulation_typing: (seed?: number) => [
    createTyping("blutkreislauf", "circulation", "Nenne die zwei Kreisläufe", ["Lungen-, Systemisch"]),
    createTyping("blutkreislauf", "circulation", "Was ist eine Arterie?", ["Vom Herz weg"]),
    createTyping("blutkreislauf", "circulation", "Was ist eine Vene?", ["Zum Herz hin"]),
    createTyping("blutkreislauf", "circulation", "Wo findet Gasaustausch statt?", ["Kapillaren"]),
    createTyping("blutkreislauf", "circulation", "Wie lange dauert ein Kreislauf?", ["1 Minute", "60 Sekunden"]),
  ],

  blood_types: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () =>
        createMCQ("blutkreislauf", "blood_types",
          "Wie viele Blutgruppen gibt es?",
          "4",
          ["2", "8", "6"],
          rng
        ),
      () =>
        createMCQ("blutkreislauf", "blood_types",
          "Nenne die 4 Blutgruppen",
          "A, B, AB, O",
          ["A, B, C, D", "Rh, Hr, Ag, Bg", "I, II, III, IV"],
          rng
        ),
      () =>
        createMCQ("blutkreislauf", "blood_types",
          "Welche ist die häufigste Blutgruppe?",
          "O",
          ["A", "B", "AB"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const template = pick(templates, rng);
      questions.push(template());
    }
    return questions.slice(0, 30);
  },
  blood_types_typing: (seed?: number) => [
    createTyping("blutkreislauf", "blood_types", "Nenne die 4 Blutgruppen", ["A, B, AB, O"]),
    createTyping("blutkreislauf", "blood_types", "Welche ist die selteste Blutgruppe?", ["AB"]),
    createTyping("blutkreislauf", "blood_types", "Welche ist die häufigste?", ["O"]),
    createTyping("blutkreislauf", "blood_types", "Was ist der Rh-Faktor?", ["Positiv, Negativ"]),
    createTyping("blutkreislauf", "blood_types", "Was bestimmt der Bluttyp?", ["Bluttransfusion"]),
  ],

  // ATMUNG (3 subtopics)
  lungs: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (data: typeof LUNG_DATA[0]) =>
        createMCQ("atmung", "lungs",
          `${data.part} - Funktion: ${data.function}`,
          "wahr",
          ["falsch", "andere Funktion", "keine Funktion"],
          rng
        ),
      () =>
        createMCQ("atmung", "lungs",
          "Wie viele Lungen hat ein Mensch?",
          "2",
          ["1", "3", "4"],
          rng
        ),
      () =>
        createMCQ("atmung", "lungs",
          "Was sind Alveolen?",
          "Luftsäckchen",
          ["Atemrohre", "Lippenmuskeln", "Stimmbänder"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const data = pick(LUNG_DATA, rng);
      const template = pick(templates, rng);
      questions.push(template(data));
    }
    return questions.slice(0, 30);
  },
  lungs_typing: (seed?: number) => [
    createTyping("atmung", "lungs", "Wie viele Lungen hat ein Mensch?", ["2"]),
    createTyping("atmung", "lungs", "Was sind Alveolen?", ["Luftsäckchen", "Bläschen"]),
    createTyping("atmung", "lungs", "Wo ist die Trachea?", ["Hals", "Kehle"]),
    createTyping("atmung", "lungs", "Was schützt die Lunge?", ["Rippen"]),
    createTyping("atmung", "lungs", "Wie viele Alveolen hat die Lunge?", ["300 Millionen"]),
  ],

  respiration: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (data: typeof RESPIRATION_DATA[0]) =>
        createMCQ("atmung", "respiration",
          `${data.type} Atmung: ${data.process} findet in ${data.location} statt`,
          "wahr",
          ["falsch", "andere Lokation", "no location"],
          rng
        ),
      () =>
        createMCQ("atmung", "respiration",
          "Was ist externe Atmung?",
          "Luft ↔ Blut in der Lunge",
          ["Glukose → Energie", "Energieverbrauch", "Kohlenhydratabbau"],
          rng
        ),
      () =>
        createMCQ("atmung", "respiration",
          "Wie oft atmen wir pro Minute?",
          "12-20",
          ["2-5", "50-100", "200+"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const data = pick(RESPIRATION_DATA, rng);
      const template = pick(templates, rng);
      questions.push(template(data));
    }
    return questions.slice(0, 30);
  },
  respiration_typing: (seed?: number) => [
    createTyping("atmung", "respiration", "Was ist Atmung?", ["Gasaustausch"]),
    createTyping("atmung", "respiration", "Was ist aerobe Atmung?", ["Mit Sauerstoff"]),
    createTyping("atmung", "respiration", "Was wird ausgeatmet?", ["CO2", "Kohlendioxid"]),
    createTyping("atmung", "respiration", "Was wird eingeatmet?", ["O2", "Sauerstoff"]),
    createTyping("atmung", "respiration", "Was ist Anaerob?", ["Ohne Sauerstoff"]),
  ],

  gas_exchange: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () =>
        createMCQ("atmung", "gas_exchange",
          "Wo findet Gasaustausch statt?",
          "Alveolen",
          ["Trachea", "Bronchus", "Larynx"],
          rng
        ),
      () =>
        createMCQ("atmung", "gas_exchange",
          "Was ist Gasaustausch?",
          "O2 ↔ CO2",
          ["Nur O2-Aufnahme", "Nur CO2-Abgabe", "Wasserdampf"],
          rng
        ),
      () =>
        createMCQ("atmung", "gas_exchange",
          "Wie heißt der Prozess des Austauschs?",
          "Diffusion",
          ["Osmose", "Filtration", "Aktivtransport"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const template = pick(templates, rng);
      questions.push(template());
    }
    return questions.slice(0, 30);
  },
  gas_exchange_typing: (seed?: number) => [
    createTyping("atmung", "gas_exchange", "Was ist Gasaustausch?", ["O2 ↔ CO2"]),
    createTyping("atmung", "gas_exchange", "Wo zwischen Luft und Blut?", ["Alveolen"]),
    createTyping("atmung", "gas_exchange", "Wieviel O2 wird aufgenommen?", ["21%"]),
    createTyping("atmung", "gas_exchange", "Was wird abgegeben?", ["CO2", "Kohlendioxid"]),
    createTyping("atmung", "gas_exchange", "Wie heißt der Prozess?", ["Diffusion"]),
  ],

  // PUBERTÄT (3 subtopics)
  male_repro: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (data: typeof MALE_REPRO_DATA[0]) =>
        createMCQ("pubertaet", "male_repro",
          `${data.organ} - Funktion: ${data.function}`,
          "wahr",
          ["falsch", "andere Funktion", "keine Funktion"],
          rng
        ),
      () =>
        createMCQ("pubertaet", "male_repro",
          "Was produzieren die Hoden?",
          "Spermien",
          ["Hormone", "Blut", "Urin"],
          rng
        ),
      () =>
        createMCQ("pubertaet", "male_repro",
          "Welches Hormon ist in Männern?",
          "Testosteron",
          ["Östrogen", "Insulin", "Adrenalin"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const data = pick(MALE_REPRO_DATA, rng);
      const template = pick(templates, rng);
      questions.push(template(data));
    }
    return questions.slice(0, 30);
  },
  male_repro_typing: (seed?: number) => [
    createTyping("pubertaet", "male_repro", "Was produzieren die Hoden?", ["Spermien"]),
    createTyping("pubertaet", "male_repro", "Welches Hormon in Männern?", ["Testosteron"]),
    createTyping("pubertaet", "male_repro", "Was ist Sperma?", ["Flüssigkeit mit Spermien"]),
    createTyping("pubertaet", "male_repro", "Wo reifen Spermien?", ["Hoden"]),
    createTyping("pubertaet", "male_repro", "Was ist Ejakulation?", ["Spermienfreisetzung"]),
  ],

  female_repro: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (data: typeof FEMALE_REPRO_DATA[0]) =>
        createMCQ("pubertaet", "female_repro",
          `${data.organ} - Funktion: ${data.function}`,
          "wahr",
          ["falsch", "andere Funktion", "keine Funktion"],
          rng
        ),
      () =>
        createMCQ("pubertaet", "female_repro",
          "Was produzieren die Eierstöcke?",
          "Eizellen",
          ["Sperma", "Hormone", "Blut"],
          rng
        ),
      () =>
        createMCQ("pubertaet", "female_repro",
          "Welches Hormon ist in Frauen?",
          "Östrogen",
          ["Testosteron", "Insulin", "Adrenalin"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const data = pick(FEMALE_REPRO_DATA, rng);
      const template = pick(templates, rng);
      questions.push(template(data));
    }
    return questions.slice(0, 30);
  },
  female_repro_typing: (seed?: number) => [
    createTyping("pubertaet", "female_repro", "Was produzieren die Eierstöcke?", ["Eizellen"]),
    createTyping("pubertaet", "female_repro", "Was ist der Uterus?", ["Gebärmutter"]),
    createTyping("pubertaet", "female_repro", "Wie lange trägt eine Frau?", ["280 Tage", "9 Monate"]),
    createTyping("pubertaet", "female_repro", "Welches Hormon in Frauen?", ["Östrogen"]),
    createTyping("pubertaet", "female_repro", "Was ist Menstruation?", ["Monatliche Blutung"]),
  ],

  hormones: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (data: typeof HORMONE_DATA[0]) =>
        createMCQ("pubertaet", "hormones",
          `${data.hormone} bewirkt: ${data.effect}`,
          "wahr",
          ["falsch", "andere Wirkung", "keine Wirkung"],
          rng
        ),
      () =>
        createMCQ("pubertaet", "hormones",
          "Was sind Hormone?",
          "Chemische Botenstoffe",
          ["Nervenfasern", "Blutgefäße", "Muskeln"],
          rng
        ),
      () =>
        createMCQ("pubertaet", "hormones",
          "Wo werden Hormone produziert?",
          "Drüsen",
          ["Muskeln", "Nerven", "Knochen"],
          rng
        ),
    ];
    for (let i = 0; i < 30; i++) {
      const data = pick(HORMONE_DATA, rng);
      const template = pick(templates, rng);
      questions.push(template(data));
    }
    return questions.slice(0, 30);
  },
  hormones_typing: (seed?: number) => [
    createTyping("pubertaet", "hormones", "Was sind Hormone?", ["Chemische Botenstoffe"]),
    createTyping("pubertaet", "hormones", "Wo werden Hormone produziert?", ["Drüsen"]),
    createTyping("pubertaet", "hormones", "Nenne 3 Hormone", ["Testosteron, Östrogen, Adrenalin"]),
    createTyping("pubertaet", "hormones", "Was ist Hormonhaushalt?", ["Gleichgewicht"]),
    createTyping("pubertaet", "hormones", "Wann beginnt Pubertät?", ["10-14 Jahre"]),
  ],
};

// ─── GENERATOR MAP ─────────────────────────────────────────────────────────

export const GENERATOR_MAP: Record<
  string,
  (seed?: number) => CurriculumQuestion[]
> = K6_Generators;

// ─── Automatikus regisztráció ─────────────────────────────────────────────

setK6GeneratorMap({ default: GENERATOR_MAP } as any);
