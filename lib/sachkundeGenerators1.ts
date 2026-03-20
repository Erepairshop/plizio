// ─── GERMAN GRADE 1 SACHKUNDE GENERATORS ───────────────────────────────────────
// Procedural MCQ question generators for German Grade 1 Sachkunde (environmental science)
// Generates 45 questions per subtopic using seeded PRNG for reproducibility.
//
// 18 subtopics: Körperteile, Sinnesorgane, Gesundheit & Hygiene, Haustiere, Wilde Tiere,
// Tierlaute, Jahreszeiten & Natur, Bäume, Blüten & Früchte, Wetter, Jahreszeiten (Detail),
// Monate & Tage, Familie, Zuhause, Regeln & Verhalten, Verkehrsmittel, Verkehrsregeln, Sicherheit
// All questions in German language (Deutsch)
// Grade-appropriate for 6-7 year old students (Erstklässler)

import type { CurriculumMCQ } from "./curriculumTypes";

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
  const opts = shuffle([correct, ...unique.slice(0, 3)], Math.random);
  return {
    type: "mcq",
    topic,
    subtopic,
    question,
    options: opts,
    correct: opts.indexOf(correct)
  };
}

// ─── DATA LISTS ─────────────────────────────────────────────────────────────

// Body parts (Körperteile)
const BODY_PARTS = [
  "Kopf", "Arm", "Bein", "Auge", "Nase", "Ohr", "Mund",
  "Hand", "Fuß", "Bauch", "Rücken", "Hals", "Zahn", "Finger"
];

const BODY_PART_FUNCTIONS = {
  "Auge": "zum Sehen",
  "Ohr": "zum Hören",
  "Nase": "zum Riechen",
  "Mund": "zum Schmecken und Sprechen",
  "Hand": "zum Greifen",
  "Fuß": "zum Laufen",
  "Zahn": "zum Kauen",
  "Arm": "zum Greifen und Werfen"
};

// Senses (Sinnesorgane)
const SENSES = [
  { sense: "Auge", ability: "Sehen", sensation: "Farben und Formen" },
  { sense: "Ohr", ability: "Hören", sensation: "Töne und Geräusche" },
  { sense: "Nase", ability: "Riechen", sensation: "Gerüche" },
  { sense: "Zunge", ability: "Schmecken", sensation: "Geschmäcke" },
  { sense: "Haut", ability: "Fühlen", sensation: "Wärme und Kälte" }
];

// Health & Hygiene (Gesundheit & Hygiene)
const HYGIENE_ACTIVITIES = [
  { activity: "Zähne putzen", when: "morgens und abends", tool: "Zahnbürste" },
  { activity: "Hände waschen", when: "nach der Toilette", tool: "Wasser und Seife" },
  { activity: "Duschen", when: "jeden Tag", tool: "Wasser und Seife" },
  { activity: "Haare kämmen", when: "morgens", tool: "Kamm" },
  { activity: "Nägel schneiden", when: "einmal die Woche", tool: "Nagelschere" }
];

// Domestic animals (Haustiere)
const DOMESTIC_ANIMALS = [
  { animal: "Hund", sound: "bellt", food: "Hundefutter", home: "Hundehütte" },
  { animal: "Katze", sound: "miaut", food: "Katzenfutter", home: "Katzenbett" },
  { animal: "Kaninchen", sound: "quiekt", food: "Karotten", home: "Käfig" },
  { animal: "Vogel", sound: "zwitschert", food: "Körner", home: "Vogelkäfig" },
  { animal: "Fisch", sound: "stumm", food: "Fischfutter", home: "Aquarium" }
];

// Wild animals (Wilde Tiere)
const WILD_ANIMALS = [
  { animal: "Löwe", habitat: "Afrika", characteristic: "stark und groß" },
  { animal: "Tiger", habitat: "Asien", characteristic: "orange mit Streifen" },
  { animal: "Elefant", habitat: "Afrika und Asien", characteristic: "sehr groß mit Rüssel" },
  { animal: "Affe", habitat: "Tropenwald", characteristic: "intelligent" },
  { animal: "Bär", habitat: "Wälder", characteristic: "braun und große Tatzen" }
];

// Animal sounds (Tierlaute)
const ANIMAL_SOUNDS = [
  { animal: "Hund", sound: "wau wau / bellt" },
  { animal: "Katze", sound: "miau / miaut" },
  { animal: "Vogel", sound: "zwitschert" },
  { animal: "Kuh", sound: "muh / muht" },
  { animal: "Schaf", sound: "mäh / mäht" },
  { animal: "Schwein", sound: "oink / quiekt" },
  { animal: "Ente", sound: "quack / quackt" }
];

// Seasons & nature (Jahreszeiten & Natur)
const SEASONS = [
  { season: "Frühling", months: "März, April, Mai", characteristic: "warm und Blumen blühen" },
  { season: "Sommer", months: "Juni, Juli, August", characteristic: "heiß und sonnig" },
  { season: "Herbst", months: "September, Oktober, November", characteristic: "kühl und Blätter fallen" },
  { season: "Winter", months: "Dezember, Januar, Februar", characteristic: "kalt und schneig" }
];

// Trees (Bäume)
const TREES = [
  { tree: "Eiche", leaves: "grün und breit", fruit: "Eichel", wood: "hart" },
  { tree: "Fichte", leaves: "Nadeln", fruit: "Zapfen", wood: "Nadelholz" },
  { tree: "Buche", leaves: "grün und glatt", fruit: "Bucheckern", wood: "hart" },
  { tree: "Birke", leaves: "kleine Blätter", bark: "weiß", wood: "hell" }
];

const TREE_PARTS = [
  "Wurzel", "Stamm", "Ast", "Blatt", "Baumkrone",
  "Borke", "Krone", "Baumstamm", "Äste", "Blätter"
];

// Flowers & fruits (Blüten & Früchte)
const FLOWERS_FRUITS = [
  { plant: "Rose", type: "Blume", color: "rot, rosa oder weiß", smell: "süß" },
  { plant: "Apfelbaum", type: "Baum", fruit: "Apfel", season: "Herbst" },
  { plant: "Kirschbaum", type: "Baum", fruit: "Kirsche", season: "Sommer" },
  { plant: "Erdbeere", type: "Strauch", fruit: "Erdbeere", season: "Frühling-Sommer" },
  { plant: "Sonnenblume", type: "Blume", color: "gelb", size: "groß" }
];

// Weather (Wetter)
const WEATHER_TYPES = [
  { weather: "Sonne", description: "helles Licht", feeling: "warm" },
  { weather: "Wolke", description: "grau oder weiß", feeling: "kühl" },
  { weather: "Regen", description: "Wasser fällt", feeling: "nass" },
  { weather: "Schnee", description: "weiße Flocken", feeling: "kalt" },
  { weather: "Wind", description: "Luft bewegt sich", feeling: "kühl und frisch" }
];

// Months (Monate)
const MONTHS = [
  "Januar", "Februar", "März", "April", "Mai", "Juni",
  "Juli", "August", "September", "Oktober", "November", "Dezember"
];

const DAYS_OF_WEEK = [
  "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag", "Sonntag"
];

// Family (Familie)
const FAMILY_MEMBERS = [
  { member: "Vater", relation: "Elternteil (männlich)", abbreviation: "Pa" },
  { member: "Mutter", relation: "Elternteil (weiblich)", abbreviation: "Ma" },
  { member: "Bruder", relation: "männliches Geschwister", abbreviation: "Br" },
  { member: "Schwester", relation: "weibliches Geschwister", abbreviation: "Sw" },
  { member: "Großvater", relation: "Vater des Vaters oder der Mutter", abbreviation: "Opa" },
  { member: "Großmutter", relation: "Mutter des Vaters oder der Mutter", abbreviation: "Oma" },
  { member: "Tante", relation: "Schwester des Vaters oder der Mutter", abbreviation: "T" },
  { member: "Onkel", relation: "Bruder des Vaters oder der Mutter", abbreviation: "O" }
];

// Home (Zuhause)
const ROOMS = [
  { room: "Wohnzimmer", purpose: "zum Sitzen und Entspannen", furniture: "Sofa, Tisch" },
  { room: "Küche", purpose: "zum Kochen", furniture: "Herd, Kühlschrank" },
  { room: "Schlafzimmer", purpose: "zum Schlafen", furniture: "Bett, Schrank" },
  { room: "Badezimmer", purpose: "zum Waschen", furniture: "Badewanne, Waschbecken" },
  { room: "Spielzimmer", purpose: "zum Spielen", furniture: "Spielzeug, Bücher" }
];

// Rules & behavior (Regeln & Verhalten)
const GOOD_BEHAVIOR = [
  { behavior: "Bitte sagen", context: "wenn man etwas möchte", reason: "höflich sein" },
  { behavior: "Danke sagen", context: "wenn man etwas erhält", reason: "dankbar sein" },
  { behavior: "Zuhören", context: "wenn jemand spricht", reason: "respektvoll sein" },
  { behavior: "Teilen", context: "Spielzeug mit anderen", reason: "freundlich sein" },
  { behavior: "Grüßen", context: "morgens und abends", reason: "höflich sein" }
];

// Vehicles (Verkehrsmittel)
const VEHICLES = [
  { vehicle: "Auto", wheels: 4, powered: true, fuel: "Benzin" },
  { vehicle: "Fahrrad", wheels: 2, powered: false, fuel: "Muskelkraft" },
  { vehicle: "Bus", wheels: 4, powered: true, passengers: "viele" },
  { vehicle: "Zug", wheels: "viele", powered: true, track: "Schienen" },
  { vehicle: "Flugzeug", wheels: "mehrere", powered: true, element: "Luft" }
];

// Traffic rules (Verkehrsregeln)
const TRAFFIC_RULES = [
  { rule: "Ampel beachten", meaning: "Rote Ampel = stehen, Grüne Ampel = gehen" },
  { rule: "Fußgängerüberweg nutzen", meaning: "zum Überqueren der Straße" },
  { rule: "Gehweg nutzen", meaning: "sicher für Fußgänger" },
  { rule: "Fahrrad auf Fahrradweg", meaning: "nicht auf der Straße fahren" },
  { rule: "Handzeichen geben", meaning: "Handzeichen beim Abbiegen geben" }
];

// Safety (Sicherheit)
const SAFETY_RULES = [
  { rule: "Mit Fremden nicht mitgehen", danger: "Entführung" },
  { rule: "Nicht mit Feuer spielen", danger: "Brand" },
  { rule: "Straße vorsichtig überqueren", danger: "Unfall" },
  { rule: "Nicht in fremde Autos steigen", danger: "Entführung" },
  { rule: "Notfall-Telefonnummer kennen", number: "110 (Polizei) oder 112 (Feuerwehr)" }
];

// ─── GENERATOR FUNCTIONS ────────────────────────────────────────────────────

export function generateKörperteile(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Welcher Körperteil ist das?
      const correct = pick(BODY_PARTS, rng);
      const wrong = BODY_PARTS.filter(p => p !== correct).sort(() => rng() - 0.5).slice(0, 3);
      q.push(createMCQ("sachkunde", "körperteile",
        `Welcher Körperteil ist zum Sehen?`, "Auge", ["Ohr", "Nase", "Mund"]));
    } else if (type === 1) {
      // Welche Funktion hat dieser Körperteil?
      const part = pick(Object.keys(BODY_PART_FUNCTIONS) as Array<keyof typeof BODY_PART_FUNCTIONS>, rng);
      const correct = BODY_PART_FUNCTIONS[part];
      const wrongFuncs = Object.values(BODY_PART_FUNCTIONS).filter(f => f !== correct).slice(0, 3);
      q.push(createMCQ("sachkunde", "körperteile",
        `Wozu ist der ${part} da?`, correct, wrongFuncs));
    } else {
      // Bild-Text Zuordnung
      const parts = ["Kopf", "Auge", "Nase", "Ohr", "Mund"];
      const p = pick(parts, rng);
      const correctAnswer = { "Kopf": "oben am Körper", "Auge": "zum Sehen", "Nase": "zum Riechen", "Ohr": "zum Hören", "Mund": "zum Essen" }[p];
      q.push(createMCQ("sachkunde", "körperteile",
        `Wo ist der ${p}?`, correctAnswer, ["unten am Körper", "in der Mitte", "überall"]));
    }
  }

  return q;
}

export function generateSinnesorgane(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Welcher Sinn ist das?
      const data = pick(SENSES, rng);
      const correct = data.ability;
      const wrong = SENSES.filter(s => s.ability !== correct).map(s => s.ability).slice(0, 3);
      q.push(createMCQ("sachkunde", "sinnesorgane",
        `Das ${data.sense} ist zum ${data.ability}. Was nimmt man damit wahr?`, data.sensation, ["Farben", "Geräusche", "Gerüche"]));
    } else if (type === 1) {
      // Welcher Sinn für diese Empfindung?
      const sensations = ["Wärme fühlen", "süß schmecken", "Musik hören", "Blumen riechen"];
      const correct = pick(sensations, rng);
      const senses = ["Haut", "Zunge", "Ohr", "Nase"];
      q.push(createMCQ("sachkunde", "sinnesorgane",
        `Welches Sinnesorgan brauchst du zum ${correct}?`, senses[sensations.indexOf(correct)], senses.filter((_, idx) => idx !== sensations.indexOf(correct)).slice(0, 3)));
    } else {
      // Sinnesorgane-Beschreibung
      const correct = "das Auge";
      q.push(createMCQ("sachkunde", "sinnesorgane",
        `Mit welchem Sinnesorgan siehst du Farben und Formen?`, correct, ["dem Ohr", "der Nase", "der Zunge"]));
    }
  }

  return q;
}

export function generateGesundheitHygiene(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Wann sollte man etwas tun?
      const data = pick(HYGIENE_ACTIVITIES, rng);
      const correct = data.when;
      const wrong = ["nur sonntags", "nie", "einmal im Monat"];
      q.push(createMCQ("sachkunde", "gesundheit_hygiene",
        `Wann sollte man ${data.activity}?`, correct, wrong));
    } else if (type === 1) {
      // Womit macht man das?
      const data = pick(HYGIENE_ACTIVITIES, rng);
      const correct = data.tool;
      const wrong = ["Bürste", "Papier", "Tuch"];
      q.push(createMCQ("sachkunde", "gesundheit_hygiene",
        `Womit ${data.activity}?`, correct, wrong));
    } else {
      // Warum ist das wichtig?
      const reasons = ["gesund bleiben", "Krankheiten vermeiden", "sich saubermachen"];
      q.push(createMCQ("sachkunde", "gesundheit_hygiene",
        `Warum solltest du deine Hände waschen?`, "um Krankheiten zu vermeiden", ["zum Spaß", "nur wenn sie schmutzig sind", "nie"]));
    }
  }

  return q;
}

export function generateHaustiere(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Welches Geräusch macht das Tier?
      const data = pick(DOMESTIC_ANIMALS, rng);
      const correct = data.sound;
      const wrong = DOMESTIC_ANIMALS.filter(a => a.animal !== data.animal).map(a => a.sound).slice(0, 3);
      q.push(createMCQ("sachkunde", "haustiere",
        `Welches Geräusch macht ein ${data.animal}?`, correct, wrong));
    } else if (type === 1) {
      // Was frisst das Tier?
      const data = pick(DOMESTIC_ANIMALS, rng);
      const correct = data.food;
      const wrong = ["Fleisch", "Gras", "Körner"];
      q.push(createMCQ("sachkunde", "haustiere",
        `Was frisst eine ${data.animal}?`, correct, wrong));
    } else {
      // Wo wohnt das Tier?
      const data = pick(DOMESTIC_ANIMALS, rng);
      const correct = data.home;
      const wrong = ["im Baum", "im Wasser", "unter der Erde"];
      q.push(createMCQ("sachkunde", "haustiere",
        `Wo wohnt ein ${data.animal}?`, correct, wrong));
    }
  }

  return q;
}

export function generateWildeTiere(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Wo lebt dieses Tier?
      const data = pick(WILD_ANIMALS, rng);
      const correct = data.habitat;
      const wrong = ["im Wasser", "in der Stadt", "in der Wüste"];
      q.push(createMCQ("sachkunde", "wilde_tiere",
        `Wo lebt ein ${data.animal}?`, correct, wrong));
    } else if (type === 1) {
      // Was ist eine Eigenschaft des Tieres?
      const data = pick(WILD_ANIMALS, rng);
      const correct = data.characteristic;
      const wrong = ["klein und süß", "flugfähig", "lebt im Wasser"];
      q.push(createMCQ("sachkunde", "wilde_tiere",
        `Was ist typisch für einen ${data.animal}?`, correct, wrong));
    } else {
      // Welches Tier ist das?
      q.push(createMCQ("sachkunde", "wilde_tiere",
        `Welches Tier hat ein langes Rüssel?`, "Elefant", ["Löwe", "Tiger", "Bär"]));
    }
  }

  return q;
}

export function generateTierlaute(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 2;
    if (type === 0) {
      // Welches Tier macht dieses Geräusch?
      const data = pick(ANIMAL_SOUNDS, rng);
      const correct = data.animal;
      const wrong = ANIMAL_SOUNDS.filter(s => s.animal !== correct).map(s => s.animal).slice(0, 3);
      q.push(createMCQ("sachkunde", "tierlaute",
        `Welches Tier macht "${data.sound}"?`, correct, wrong));
    } else {
      // Welches Geräusch macht das Tier?
      const data = pick(ANIMAL_SOUNDS, rng);
      const correct = data.sound;
      const wrong = ANIMAL_SOUNDS.filter(s => s.animal !== data.animal).map(s => s.sound).slice(0, 3);
      q.push(createMCQ("sachkunde", "tierlaute",
        `Welches Geräusch macht ein ${data.animal}?`, correct, wrong));
    }
  }

  return q;
}

export function generateJahreszeitenNatur(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Welche Jahreszeit ist das?
      const data = pick(SEASONS, rng);
      const correct = data.season;
      const wrong = SEASONS.filter(s => s.season !== correct).map(s => s.season).slice(0, 3);
      q.push(createMCQ("sachkunde", "jahreszeiten_natur",
        `In welcher Jahreszeit ist es ${data.characteristic}?`, correct, wrong));
    } else if (type === 1) {
      // In welchen Monaten?
      const data = pick(SEASONS, rng);
      const correct = data.months;
      const wrong = ["Januar, Februar, März", "Juli, August, September", "Oktober, November, Dezember"];
      q.push(createMCQ("sachkunde", "jahreszeiten_natur",
        `In welchen Monaten ist ${data.season}?`, correct, wrong));
    } else {
      // Wetter in der Jahreszeit
      q.push(createMCQ("sachkunde", "jahreszeiten_natur",
        `Wann ist es kalt und schneig?`, "Winter", ["Frühling", "Sommer", "Herbst"]));
    }
  }

  return q;
}

export function generateBäume(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Welche Früchte gibt dieser Baum?
      const data = pick(TREES, rng);
      const correct = data.fruit;
      const wrong = ["Äpfel", "Birnen", "Kirschen"];
      q.push(createMCQ("sachkunde", "bäume",
        `Welche Früchte gibt ein ${data.tree}-Baum?`, correct, wrong));
    } else if (type === 1) {
      // Wie sehen die Blätter aus?
      const data = pick(TREES, rng);
      const correct = data.leaves;
      const wrong = ["rot und klein", "gelb und hart", "blau und glatt"];
      q.push(createMCQ("sachkunde", "bäume",
        `Wie sehen die Blätter einer ${data.tree} aus?`, correct, wrong));
    } else {
      // Baumteile
      const part = pick(TREE_PARTS, rng);
      const correctDef = { "Wurzel": "unter der Erde", "Stamm": "der Hauptteil des Baumes", "Blatt": "grüne Teile" }[part] || "Teil des Baumes";
      q.push(createMCQ("sachkunde", "bäume",
        `Was ist die ${part} eines Baumes?`, correctDef, ["oben in der Luft", "unten im Wasser", "auf den Ästen"]));
    }
  }

  return q;
}

export function generateBlütenFrüchte(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Welche Farbe hat diese Blume?
      const data = pick(FLOWERS_FRUITS, rng);
      if (data.type === "Blume" && data.color) {
        const correct = data.color;
        const wrong = ["blau", "schwarz", "silber"];
        q.push(createMCQ("sachkunde", "blueten_fruechte",
          `Welche Farbe hat eine ${data.plant}?`, correct, wrong));
      } else {
        q.push(createMCQ("sachkunde", "blueten_fruechte",
          `Wann sind ${data.plant}n reif?`, data.season || "im Sommer", ["im Winter", "im Frühling", "nie"]));
      }
    } else if (type === 1) {
      // Wann ist das Obst reif?
      const data = pick(FLOWERS_FRUITS.filter(f => f.season), rng);
      const correct = data.season;
      const wrong = ["Winter", "Frühling", "Herbst"];
      q.push(createMCQ("sachkunde", "blueten_fruechte",
        `Wann sind ${data.plant}n reif?`, correct, wrong));
    } else {
      // Ist das eine Blume oder ein Obst?
      q.push(createMCQ("sachkunde", "blueten_fruechte",
        `Ist eine Rose eine Blume oder ein Obst?`, "Blume", ["Obst", "Gemüse", "Baum"]));
    }
  }

  return q;
}

export function generateWetter(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Wie fühlt sich das Wetter an?
      const data = pick(WEATHER_TYPES, rng);
      const correct = data.feeling;
      const wrong = ["heiß", "kühl", "nass"];
      q.push(createMCQ("sachkunde", "wetter",
        `Wie ist das Wetter bei ${data.weather}?`, correct, wrong));
    } else if (type === 1) {
      // Welches Wetter ist das?
      const weatherDescriptions = [
        { description: "helles Licht vom Himmel", weather: "Sonne" },
        { description: "weiße Flocken fallen", weather: "Schnee" },
        { description: "Wasser fällt vom Himmel", weather: "Regen" }
      ];
      const data = pick(weatherDescriptions, rng);
      q.push(createMCQ("sachkunde", "wetter",
        `Welches Wetter ist das? ${data.description}`, data.weather, ["Regen", "Schnee", "Sonne"]));
    } else {
      // Was brauche ich bei Regen?
      q.push(createMCQ("sachkunde", "wetter",
        `Was brauchst du bei Regen?`, "Regenschirm", ["Sonnenbrille", "Sonnencrème", "Hut"]));
    }
  }

  return q;
}

export function generateJahreszeitenDetail(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Was passiert in dieser Jahreszeit?
      const seasonEvents = {
        "Frühling": "Blumen blühen",
        "Sommer": "es ist heiß und sonnig",
        "Herbst": "Blätter fallen",
        "Winter": "es schneit"
      };
      const season = pick(Object.keys(seasonEvents) as Array<keyof typeof seasonEvents>, rng);
      const correct = seasonEvents[season];
      const wrong = ["Blüten blühen", "Blätter wachsen", "Schnee schmilzt"];
      q.push(createMCQ("sachkunde", "jahreszeiten_detail",
        `Was passiert im ${season}?`, correct, wrong));
    } else if (type === 1) {
      // Welche Kleidung im Winter?
      q.push(createMCQ("sachkunde", "jahreszeiten_detail",
        `Was zieht man im Winter an?`, "Mantel und Schal", ["kurze Hose", "T-Shirt", "Sandalen"]));
    } else {
      // Temperatur
      q.push(createMCQ("sachkunde", "jahreszeiten_detail",
        `In welcher Jahreszeit ist es am kältesten?`, "Winter", ["Frühling", "Sommer", "Herbst"]));
    }
  }

  return q;
}

export function generateMonateTage(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Welcher Wochentag ist das?
      const day = pick(DAYS_OF_WEEK, rng);
      const correct = day;
      const wrong = DAYS_OF_WEEK.filter(d => d !== day).slice(0, 3);
      q.push(createMCQ("sachkunde", "monate_tage",
        `Nach Freitag kommt...?`, "Samstag", DAYS_OF_WEEK.filter(d => d !== "Samstag").slice(0, 3)));
    } else if (type === 1) {
      // Welcher Monat?
      const month = pick(MONTHS, rng);
      const monthIdx = MONTHS.indexOf(month);
      const correct = month;
      const wrong = MONTHS.filter(m => m !== month).slice(0, 3);
      q.push(createMCQ("sachkunde", "monate_tage",
        `Welcher Monat hat 30 Tage?`, "April", MONTHS.filter(m => m !== "April").slice(0, 3)));
    } else {
      // Wann ist dein Geburtstag?
      q.push(createMCQ("sachkunde", "monate_tage",
        `Welche Tage hat eine Woche?`, "7 Tage", ["5 Tage", "6 Tage", "10 Tage"]));
    }
  }

  return q;
}

export function generateFamilie(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Wer ist dein...?
      const data = pick(FAMILY_MEMBERS, rng);
      const correct = data.member;
      const wrong = FAMILY_MEMBERS.filter(m => m.member !== correct).map(m => m.member).slice(0, 3);
      q.push(createMCQ("sachkunde", "familie",
        `Wer ist dein Elternteil (männlich)?`, "Vater", ["Mutter", "Bruder", "Schwester"]));
    } else if (type === 1) {
      // Familienbeziehung
      q.push(createMCQ("sachkunde", "familie",
        `Die Mutter deines Vaters ist deine...?`, "Großmutter", ["Tante", "Oma", "Schwester"]));
    } else {
      // Familienmitglieder
      q.push(createMCQ("sachkunde", "familie",
        `Wie viele Großeltern hast du?`, "vier (zwei Großväter und zwei Großmütter)", ["zwei", "acht", "eins"]));
    }
  }

  return q;
}

export function generateZuhause(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Wozu ist dieser Raum?
      const data = pick(ROOMS, rng);
      const correct = data.purpose;
      const wrong = ["zum Schlafen", "zum Kochen", "zum Spielen"];
      q.push(createMCQ("sachkunde", "zuhause",
        `Wozu ist die ${data.room}?`, correct, wrong));
    } else if (type === 1) {
      // Was ist in diesem Zimmer?
      const data = pick(ROOMS, rng);
      const correct = data.furniture;
      const wrong = ["Bett und Schrank", "Herd und Kühlschrank", "Tisch und Stuhl"];
      q.push(createMCQ("sachkunde", "zuhause",
        `Was ist in der ${data.room}?`, correct, wrong));
    } else {
      // Welches Zimmer?
      q.push(createMCQ("sachkunde", "zuhause",
        `Wo machst du dein Frühstück?`, "in der Küche", ["im Badezimmer", "im Schlafzimmer", "im Wohnzimmer"]));
    }
  }

  return q;
}

export function generateRegelnVerhalten(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Wann solltest du das tun?
      const data = pick(GOOD_BEHAVIOR, rng);
      const correct = data.context;
      const wrong = ["immer", "nie", "nur am Wochenende"];
      q.push(createMCQ("sachkunde", "regeln_verhalten",
        `Wann solltest du "${data.behavior}" sagen?`, correct, wrong));
    } else if (type === 1) {
      // Was ist höflich?
      q.push(createMCQ("sachkunde", "regeln_verhalten",
        `Ist es höflich zu sagen "Bitte"?`, "Ja, sehr höflich", ["Nein, unhöflich", "manchmal", "nie"]));
    } else {
      // Warum teilen?
      q.push(createMCQ("sachkunde", "regeln_verhalten",
        `Warum sollst du Spielzeug teilen?`, "um Freunde zu haben", ["um allein zu sein", "weil es langweilig ist", "um andere zu ärgern"]));
    }
  }

  return q;
}

export function generateVerkehrsmittel(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Wie viele Räder hat dieses Fahrzeug?
      const data = pick(VEHICLES, rng);
      const correct = String(data.wheels);
      const wrong = ["2", "4", "8"];
      q.push(createMCQ("sachkunde", "verkehrsmittel",
        `Wie viele Räder hat ein ${data.vehicle}?`, correct, wrong));
    } else if (type === 1) {
      // Womit fährt dieses Fahrzeug?
      const data = pick(VEHICLES, rng);
      if (data.powered) {
        q.push(createMCQ("sachkunde", "verkehrsmittel",
          `Womit fährt ein ${data.vehicle}?`, data.fuel, ["Muskelkraft", "Wind", "Wasser"]));
      } else {
        q.push(createMCQ("sachkunde", "verkehrsmittel",
          `Womit fährst du ein ${data.vehicle}?`, "Muskelkraft (Tretkraft)", ["Benzin", "Strom", "Wind"]));
      }
    } else {
      // Welches Verkehrsmittel?
      q.push(createMCQ("sachkunde", "verkehrsmittel",
        `Mit welchem Fahrzeug fliegen wir?`, "Flugzeug", ["Auto", "Fahrrad", "Bus"]));
    }
  }

  return q;
}

export function generateVerkehrsregeln(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Was bedeutet die Ampel?
      q.push(createMCQ("sachkunde", "verkehrsregeln",
        `Was bedeutet eine rote Ampel?`, "Halt! Du darfst nicht gehen", ["Vorsicht!", "Du darfst gehen", "Schnell gehen"]));
    } else if (type === 1) {
      // Wo solltest du gehen?
      q.push(createMCQ("sachkunde", "verkehrsregeln",
        `Wo sollst du als Fußgänger gehen?`, "auf dem Gehweg", ["auf der Straße", "auf der Fahrbahn", "überall"]));
    } else {
      // Wo überquerst du die Straße sicher?
      q.push(createMCQ("sachkunde", "verkehrsregeln",
        `Wo überquerst du die Straße sicher?`, "beim Fußgängerüberweg", ["überall", "zwischen parkenden Autos", "schnell rennen"]));
    }
  }

  return q;
}

export function generateSicherheit(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Was ist gefährlich?
      q.push(createMCQ("sachkunde", "sicherheit",
        `Ist es sicher, mit Fremden mitzugehen?`, "Nein, das ist sehr gefährlich", ["Ja, sicher", "manchmal okay", "nur im Dunkeln gefährlich"]));
    } else if (type === 1) {
      // Notrufnummern
      q.push(createMCQ("sachkunde", "sicherheit",
        `Welche Nummer rufst du an, wenn es ein Feuer gibt?`, "112", ["100", "110", "911"]));
    } else {
      // Sicherheitsregel
      q.push(createMCQ("sachkunde", "sicherheit",
        `Was solltest du NICHT mit Feuer tun?`, "spielen", ["kochen", "Kerzen anzünden", "mit Erwachsenen experimentieren"]));
    }
  }

  return q;
}

// ─── GENERATOR MAP ──────────────────────────────────────────────────────────

export const G1_Generators_Sachkunde = {
  körperteile: generateKörperteile,
  sinnesorgane: generateSinnesorgane,
  gesundheit_hygiene: generateGesundheitHygiene,
  haustiere: generateHaustiere,
  wilde_tiere: generateWildeTiere,
  tierlaute: generateTierlaute,
  jahreszeiten_natur: generateJahreszeitenNatur,
  bäume: generateBäume,
  blueten_fruechte: generateBlütenFrüchte,
  wetter: generateWetter,
  jahreszeiten_detail: generateJahreszeitenDetail,
  monate_tage: generateMonateTage,
  familie: generateFamilie,
  zuhause: generateZuhause,
  regeln_verhalten: generateRegelnVerhalten,
  verkehrsmittel: generateVerkehrsmittel,
  verkehrsregeln: generateVerkehrsregeln,
  sicherheit: generateSicherheit
};
