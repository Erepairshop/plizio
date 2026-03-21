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
];

const INSECT_DATA = [
  { name: "Biene", role: "Bestäubung", type: "Hymenoptera" },
  { name: "Käfer", role: "Zersetzer", type: "Coleoptera" },
  { name: "Schmetteling", role: "Bestäubung", type: "Lepidoptera" },
];

const MOLLUSK_DATA = [
  { name: "Schnecke", shell: "Spirale", movement: "Fuß" },
  { name: "Muschel", shell: "2-teilig", movement: "Wasser" },
  { name: "Tintenfisch", shell: "Keine", movement: "Tinte" },
];

const WORM_DATA = [
  { name: "Regenwurm", segment: "Ja", habitat: "Boden" },
  { name: "Blutegel", segment: "Ja", habitat: "Wasser" },
  { name: "Rundwurm", segment: "Nein", habitat: "Innere" },
];

// WALD
const FOREST_LAYER_DATA = [
  { layer: "Krautschicht", light: "Wenig", plants: "Farne, Moose" },
  { layer: "Strauchschicht", light: "Mittel", plants: "Sträucher" },
  { layer: "Baumschicht", light: "Viel", plants: "Große Bäume" },
];

const FOOD_CHAIN_DATA = [
  { producer: "Pflanze", consumer1: "Herbivore", consumer2: "Karnivore" },
  { producer: "Gras", consumer1: "Kaninchen", consumer2: "Fuchs" },
];

// GEWÄSSER
const FRESHWATER_DATA = [
  { type: "Fluss", flow: "Schnell", organisms: "Forelle, Bachneunaugen" },
  { type: "See", flow: "Stagnant", organisms: "Hecht, Schleie" },
  { type: "Sumpf", flow: "Langsam", organisms: "Frosch, Schilfröhricht" },
];

const SALTWATER_DATA = [
  { zone: "Gezeitenzone", depth: "0-10m", organisms: "Seeanemone, Krebse" },
  { zone: "Küstenzone", depth: "10-200m", organisms: "Fische, Delphine" },
  { zone: "Tiefenzone", depth: ">200m", organisms: "Anglerfisch, Garnele" },
];

// BLUTKREISLAUF
const BLOOD_COMPONENT_DATA = [
  { component: "Rote Blutkörperchen", function: "Sauerstofftransport", count: "25 Billionen" },
  { component: "Weiße Blutkörperchen", function: "Immunabwehr", count: "10 Milliarden" },
  { component: "Blutplättchen", function: "Blutgerinnung", count: "150-400 Milliarden" },
];

const HEART_DATA = [
  { chamber: "Rechter Vorhof", function: "Deoxygeniertes Blut empfangen", vessel: "Vena cava" },
  { chamber: "Rechter Ventrikel", function: "Zu den Lungen pumpen", vessel: "Pulmonalarterie" },
  { chamber: "Linker Vorhof", function: "Oxygeniertes Blut empfangen", vessel: "Lungenvene" },
];

// ATMUNG
const LUNG_DATA = [
  { part: "Trachea", function: "Luftleitung", diameter: "18-24mm" },
  { part: "Bronchus", function: "Verzweigung", diameter: "Abnehmend" },
  { part: "Alveolen", function: "Gasaustausch", count: "300 Millionen" },
];

const RESPIRATION_DATA = [
  { type: "Externe", process: "Luft ↔ Blut", location: "Lunge" },
  { type: "Zellatmung", process: "Glucose → Energy", location: "Zelle" },
];

// PUBERTÄT
const MALE_REPRO_DATA = [
  { organ: "Hoden", function: "Spermienproduktion", hormone: "Testosteron" },
  { organ: "Prostata", function: "Sekret", output: "Sperma" },
];

const FEMALE_REPRO_DATA = [
  { organ: "Eierstock", function: "Eizellproduktion", hormone: "Östrogen" },
  { organ: "Uterus", function: "Embryoentwicklung", duration: "280 Tage" },
];

const HORMONE_DATA = [
  { hormone: "Testosteron", effect: "Männliche Merkmale", source: "Hoden" },
  { hormone: "Östrogen", effect: "Weibliche Merkmale", source: "Eierstock" },
  { hormone: "Adrenalin", effect: "Stressreaktion", source: "Nebennierendrüse" },
];

// ─── K6 GENERATORS (21 subtopics × 2 = 42 Generators) ─────────────────────

export const K6_Generators: Record<string, (seed?: number) => CurriculumQuestion[]> = {
  // WIRBELLOSE (5 subtopics)
  arthropods: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const arthro = pick(ARTHROPOD_DATA, rng);
      questions.push(
        createMCQ("wirbellose", "arthropods",
          `Wie viele Beine hat ein ${arthro.name}?`, arthro.legs, ["4", "6", "8", "10"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  arthropods_typing: (seed?: number) => [
    createTyping("wirbellose", "arthropods", "Was ist ein Arthropode?", ["Wirbellose mit Gliedern"]),
    createTyping("wirbellose", "arthropods", "Nenne ein Beispiel für Arthropoden", ["Insekt", "Spinne", "Krebs"]),
    createTyping("wirbellose", "arthropods", "Welche Körperteile haben Arthropoden?", ["Kopf, Brust, Hinterleib"]),
    createTyping("wirbellose", "arthropods", "Arthropoden haben wie viele Beine mindestens?", ["6"]),
    createTyping("wirbellose", "arthropods", "Was ist der Exoskelett?", ["Äußeres Skelett"]),
  ],

  insects: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const insect = pick(INSECT_DATA, rng);
      questions.push(
        createMCQ("wirbellose", "insects",
          `Was ist die Rolle von ${insect.name}?`, insect.role, ["Schädling", "Bestäubung", "Zersetzer"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  insects_typing: (seed?: number) => [
    createTyping("wirbellose", "insects", "Welches Insekt bestäubt Blüten?", ["Biene"]),
    createTyping("wirbellose", "insects", "Wie viele Lebensphasen hat ein Insekt?", ["4", "vier"]),
    createTyping("wirbellose", "insects", "Was ist Metamorphose?", ["Umwandlung", "Transformation"]),
    createTyping("wirbellose", "insects", "Nenne 3 Insektentypen", ["Biene, Käfer, Schmetterling"]),
    createTyping("wirbellose", "insects", "Insekten haben wie viele Flügel?", ["2", "4"]),
  ],

  spiders: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("wirbellose", "spiders",
          "Wie viele Beine hat eine Spinne?", "8", ["6", "8", "10", "12"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  spiders_typing: (seed?: number) => [
    createTyping("wirbellose", "spiders", "Spinnen haben wie viele Augen?", ["8", "zwei pro Auge"]),
    createTyping("wirbellose", "spiders", "Was spinnt ein Spinnennetz?", ["Spinnenseide"]),
    createTyping("wirbellose", "spiders", "Sind Spinnen Insekten?", ["Nein", "Nein, Arachniden"]),
    createTyping("wirbellose", "spiders", "Was essen Spinnen?", ["Insekten"]),
    createTyping("wirbellose", "spiders", "Spinnen sind...", ["Jäger", "Raubtiere"]),
  ],

  mollusks: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const mollusk = pick(MOLLUSK_DATA, rng);
      questions.push(
        createMCQ("wirbellose", "mollusks",
          `${mollusk.name} hat ${mollusk.shell} Schale`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  mollusks_typing: (seed?: number) => [
    createTyping("wirbellose", "mollusks", "Nenne ein Molluske", ["Schnecke", "Muschel", "Tintenfisch"]),
    createTyping("wirbellose", "mollusks", "Was ist ein Weichtier?", ["Molluske"]),
    createTyping("wirbellose", "mollusks", "Muskeln - wie viele Muskeln?", ["Viele kleine"]),
    createTyping("wirbellose", "mollusks", "Welches Mollusk hat Tinte?", ["Tintenfisch"]),
    createTyping("wirbellose", "mollusks", "Schnecken sind...", ["Landmollusk", "Wassermollusk"]),
  ],

  worm: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const worm = pick(WORM_DATA, rng);
      questions.push(
        createMCQ("wirbellose", "worm",
          `${worm.name} lebt in ${worm.habitat}`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  worm_typing: (seed?: number) => [
    createTyping("wirbellose", "worm", "Welches ist ein Wurm?", ["Regenwurm", "Fadenwurm"]),
    createTyping("wirbellose", "worm", "Was machen Würmer im Boden?", ["Lockern", "Belüftung", "Zersetzer"]),
    createTyping("wirbellose", "worm", "Würmer haben wie viele Segmente?", ["Viele"]),
    createTyping("wirbellose", "worm", "Sind Würmer Hermaphroditen?", ["Ja"]),
    createTyping("wirbellose", "worm", "Würmer respirieren durch...", ["Haut"]),
  ],

  // WALD (3 subtopics)
  forest_layers: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const layer = pick(FOREST_LAYER_DATA, rng);
      questions.push(
        createMCQ("wald", "forest_layers",
          `${layer.layer} hat ${layer.light} Licht`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  forest_layers_typing: (seed?: number) => [
    createTyping("wald", "forest_layers", "Welche sind die Waldschichten?", ["Kraut-, Strauch-, Baumschicht"]),
    createTyping("wald", "forest_layers", "Wo leben Farne?", ["Krautschicht"]),
    createTyping("wald", "forest_layers", "Welche Schicht hat große Bäume?", ["Baumschicht"]),
    createTyping("wald", "forest_layers", "Wie viele Schichten hat ein Wald?", ["3", "vier"]),
    createTyping("wald", "forest_layers", "Die Strauchschicht ist zwischen...", ["Kraut und Baum"]),
  ],

  food_chain: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("wald", "food_chain",
          "Was ist ein Produzent in der Nahrungskette?", "Pflanze", ["Herbivore", "Pflanze", "Karnivore"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  food_chain_typing: (seed?: number) => [
    createTyping("wald", "food_chain", "Was ist eine Nahrungskette?", ["Energiefluss", "Wer isst wen"]),
    createTyping("wald", "food_chain", "Nenne ein Beispiel für Nahrungskette", ["Gras → Kaninchen → Fuchs"]),
    createTyping("wald", "food_chain", "Was ist ein Herbivore?", ["Pflanzenfresser"]),
    createTyping("wald", "food_chain", "Was ist ein Karnivore?", ["Fleischfresser"]),
    createTyping("wald", "food_chain", "Wo verliert Energie in der Kette?", ["Jede Stufe", "Wärme"]),
  ],

  decomposition: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("wald", "decomposition",
          "Wer zersetzt abgestorbenes Material?", "Dekomposer", ["Produzent", "Konsument", "Dekomposer"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  decomposition_typing: (seed?: number) => [
    createTyping("wald", "decomposition", "Was sind Dekomposer?", ["Pilze, Bakterien"]),
    createTyping("wald", "decomposition", "Wo leben Dekomposer?", ["Boden"]),
    createTyping("wald", "decomposition", "Was ist die Funktion?", ["Nährstoffe zurück"]),
    createTyping("wald", "decomposition", "Welcher Pilz ist Dekomposer?", ["Hutpilze"]),
    createTyping("wald", "decomposition", "Wie lange dauert Zersetung?", ["Wochen bis Jahre"]),
  ],

  // GEWÄSSER (3 subtopics)
  freshwater: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const fw = pick(FRESHWATER_DATA, rng);
      questions.push(
        createMCQ("gewaesser", "freshwater",
          `${fw.type} hat ${fw.flow} Strömung`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  freshwater_typing: (seed?: number) => [
    createTyping("gewaesser", "freshwater", "Nenne 3 Süßwasserhabitate", ["Fluss, See, Sumpf"]),
    createTyping("gewaesser", "freshwater", "Was lebt in einem Fluss?", ["Forelle"]),
    createTyping("gewaesser", "freshwater", "Was lebt in einem See?", ["Hecht", "Schleie"]),
    createTyping("gewaesser", "freshwater", "Was ist ein Sumpf?", ["Langsam fließendes Wasser"]),
    createTyping("gewaesser", "freshwater", "Süßwasser hat wie viel Salz?", ["Wenig"]),
  ],

  saltwater: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const sw = pick(SALTWATER_DATA, rng);
      questions.push(
        createMCQ("gewaesser", "saltwater",
          `${sw.zone} ist in Tiefe ${sw.depth}`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  saltwater_typing: (seed?: number) => [
    createTyping("gewaesser", "saltwater", "Nenne Meerezonen", ["Gezeiten-, Küsten-, Tiefenzone"]),
    createTyping("gewaesser", "saltwater", "Was ist die Gezeitenzone?", ["0-10m Tiefe"]),
    createTyping("gewaesser", "saltwater", "Was sind Korallen?", ["Meerestiere"]),
    createTyping("gewaesser", "saltwater", "Welcher Fisch lebt in der Tiefe?", ["Anglerfisch"]),
    createTyping("gewaesser", "saltwater", "Salzwasser hat wie viel Salz?", ["3,5%"]),
  ],

  water_organisms: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("gewaesser", "water_organisms",
          "Welches ist ein Wasserorganismus?", "Fisch", ["Schlange", "Fisch", "Vogel"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  water_organisms_typing: (seed?: number) => [
    createTyping("gewaesser", "water_organisms", "Nenne 3 Wasserorganismen", ["Fisch, Pflanze, Krebs"]),
    createTyping("gewaesser", "water_organisms", "Was sind Plankton?", ["Mikroorganismen"]),
    createTyping("gewaesser", "water_organisms", "Sind Delfine Fische?", ["Nein", "Nein, Säugetiere"]),
    createTyping("gewaesser", "water_organisms", "Was sind Korallen?", ["Tiere"]),
    createTyping("gewaesser", "water_organisms", "Welches ist ein Meeressäugetier?", ["Wal"]),
  ],

  // BLUTKREISLAUF (4 subtopics)
  blood_components: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const bc = pick(BLOOD_COMPONENT_DATA, rng);
      questions.push(
        createMCQ("blutkreislauf", "blood_components",
          `${bc.component} Funktion: ${bc.function}`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  blood_components_typing: (seed?: number) => [
    createTyping("blutkreislauf", "blood_components", "Welche Blutkörperchen transportieren Sauerstoff?", ["Rote"]),
    createTyping("blutkreislauf", "blood_components", "Was sind Blutplättchen?", ["Blutgerinnungszellen"]),
    createTyping("blutkreislauf", "blood_components", "Welche Zellen bekämpfen Infektionen?", ["Weiße Blutkörperchen"]),
    createTyping("blutkreislauf", "blood_components", "Was ist Plasma?", ["Blutflüssigkeit"]),
    createTyping("blutkreislauf", "blood_components", "Wie viele Blutzellen pro Tropfen?", ["Millionen"]),
  ],

  heart: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const h = pick(HEART_DATA, rng);
      questions.push(
        createMCQ("blutkreislauf", "heart",
          `${h.chamber} Funktion: ${h.function}`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  heart_typing: (seed?: number) => [
    createTyping("blutkreislauf", "heart", "Wie viele Kammern hat das Herz?", ["4"]),
    createTyping("blutkreislauf", "heart", "Was pumpt das Herz?", ["Blut"]),
    createTyping("blutkreislauf", "heart", "Wie oft schlägt das Herz pro Minute?", ["60-100", "70"]),
    createTyping("blutkreislauf", "heart", "Welche Schicht ist der Herzmuskel?", ["Myokard"]),
    createTyping("blutkreislauf", "heart", "Was ist ein Herzschlag?", ["Kontraktion"]),
  ],

  circulation: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("blutkreislauf", "circulation",
          "Der Blutkreislauf hat wie viele Kreiläufe?", "2", ["1", "2", "3"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  circulation_typing: (seed?: number) => [
    createTyping("blutkreislauf", "circulation", "Nenne die zwei Kreisläufe", ["Lungen-, Systemisch"]),
    createTyping("blutkreislauf", "circulation", "Was ist die Arterie?", ["Vom Herz weg"]),
    createTyping("blutkreislauf", "circulation", "Was ist die Vene?", ["Zum Herz hin"]),
    createTyping("blutkreislauf", "circulation", "Wo findet Gasaustausch statt?", ["Kapillaren"]),
    createTyping("blutkreislauf", "circulation", "Wie lange dauert ein Blutkreislauf?", ["1 Minute"]),
  ],

  blood_types: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("blutkreislauf", "blood_types",
          "Wie viele Blutgruppen gibt es?", "4", ["2", "4", "8"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  blood_types_typing: (seed?: number) => [
    createTyping("blutkreislauf", "blood_types", "Nenne die 4 Blutgruppen", ["A, B, AB, O"]),
    createTyping("blutkreislauf", "blood_types", "Welche ist die selteste Blutgruppe?", ["AB"]),
    createTyping("blutkreislauf", "blood_types", "Welche ist die häufigste?", ["O"]),
    createTyping("blutkreislauf", "blood_types", "Was ist Rh-Faktor?", ["Positiv, Negativ"]),
    createTyping("blutkreislauf", "blood_types", "Bluttyp bestimmt...", ["Bluttransfusion"]),
  ],

  // ATMUNG (3 subtopics)
  lungs: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const lung = pick(LUNG_DATA, rng);
      questions.push(
        createMCQ("atmung", "lungs",
          `${lung.part} Funktion: ${lung.function}`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  lungs_typing: (seed?: number) => [
    createTyping("atmung", "lungs", "Wie viele Lungen hat ein Mensch?", ["2"]),
    createTyping("atmung", "lungs", "Was sind Alveolen?", ["Luftsäckchen"]),
    createTyping("atmung", "lungs", "Wo ist die Trachea?", ["Hals"]),
    createTyping("atmung", "lungs", "Was schützt die Lunge?", ["Rippen"]),
    createTyping("atmung", "lungs", "Wie viele Alveolen hat die Lunge?", ["300 Millionen"]),
  ],

  respiration: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const resp = pick(RESPIRATION_DATA, rng);
      questions.push(
        createMCQ("atmung", "respiration",
          `${resp.type} Atmung findet in ${resp.location} statt`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  respiration_typing: (seed?: number) => [
    createTyping("atmung", "respiration", "Was ist Atmung?", ["Gasaustausch"]),
    createTyping("atmung", "respiration", "Was ist aerobe Atmung?", ["Mit Sauerstoff"]),
    createTyping("atmung", "respiration", "Was wird ausgeatmet?", ["CO2"]),
    createTyping("atmung", "respiration", "Was wird eingeatmet?", ["O2"]),
    createTyping("atmung", "respiration", "Wie oft atmen wir pro Minute?", ["12-20"]),
  ],

  gas_exchange: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("atmung", "gas_exchange",
          "Wo findet Gasaustausch statt?", "Alveolen", ["Trachea", "Bronchus", "Alveolen"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  gas_exchange_typing: (seed?: number) => [
    createTyping("atmung", "gas_exchange", "Was ist Gasaustausch?", ["O2 ↔ CO2"]),
    createTyping("atmung", "gas_exchange", "Wo zwischen Luft und Blut?", ["Alveolen"]),
    createTyping("atmung", "gas_exchange", "Wieviel O2 wird aufgenommen?", ["21%"]),
    createTyping("atmung", "gas_exchange", "Was wird abgegeben?", ["CO2"]),
    createTyping("atmung", "gas_exchange", "Wie heißt der Prozess?", ["Diffusion"]),
  ],

  // PUBERTÄT (3 subtopics)
  male_repro: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const mr = pick(MALE_REPRO_DATA, rng);
      questions.push(
        createMCQ("pubertaet", "male_repro",
          `${mr.organ} Funktion: ${mr.function}`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  male_repro_typing: (seed?: number) => [
    createTyping("pubertaet", "male_repro", "Was produzieren die Hoden?", ["Spermien"]),
    createTyping("pubertaet", "male_repro", "Welche Hormon in Männern?", ["Testosteron"]),
    createTyping("pubertaet", "male_repro", "Was ist Sperma?", ["Flüssigkeit mit Spermien"]),
    createTyping("pubertaet", "male_repro", "Wo reifen Spermien?", ["Hoden"]),
    createTyping("pubertaet", "male_repro", "Was ist Ejakulation?", ["Spermienfreisetzung"]),
  ],

  female_repro: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const fr = pick(FEMALE_REPRO_DATA, rng);
      questions.push(
        createMCQ("pubertaet", "female_repro",
          `${fr.organ} Funktion: ${fr.function}`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  female_repro_typing: (seed?: number) => [
    createTyping("pubertaet", "female_repro", "Was produzieren die Eierstöcke?", ["Eizellen"]),
    createTyping("pubertaet", "female_repro", "Was ist der Uterus?", ["Gebärmutter"]),
    createTyping("pubertaet", "female_repro", "Wie lange trägt eine Frau?", ["280 Tage", "9 Monate"]),
    createTyping("pubertaet", "female_repro", "Welche Hormon in Frauen?", ["Östrogen"]),
    createTyping("pubertaet", "female_repro", "Was ist Menstruation?", ["Monatliche Blutung"]),
  ],

  hormones: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const h = pick(HORMONE_DATA, rng);
      questions.push(
        createMCQ("pubertaet", "hormones",
          `${h.hormone} bewirkt ${h.effect}`, "wahr", ["falsch"], rng)
      );
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

setK6GeneratorMap(GENERATOR_MAP);
