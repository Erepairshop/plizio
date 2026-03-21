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
  const randomFn = rng || (() => Math.random());
  const opts = shuffle([correct, ...unique.slice(0, 3)], randomFn);
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

// ─── DATA LISTS (continued) ─────────────────────────────────────────────────

const MATERIALS = [
  { material: "Holz", origin: "Bäume", feeling: "hart und rau", items: "Tisch, Stuhl, Tür" },
  { material: "Metall", origin: "Erz aus der Erde", feeling: "hart und kalt", items: "Löffel, Schlüssel, Auto" },
  { material: "Plastik", origin: "Erdöl", feeling: "glatt und leicht", items: "Spielzeug, Flasche, Tüte" },
  { material: "Glas", origin: "Sand", feeling: "glatt und zerbrechlich", items: "Fenster, Glas, Flasche" },
  { material: "Papier", origin: "Holz", feeling: "dünn und leicht", items: "Buch, Zeitung, Brief" },
  { material: "Stoff", origin: "Baumwolle oder Wolle", feeling: "weich und biegsam", items: "Kleidung, Decke, Vorhang" }
];

const WASTE_BINS = [
  { bin: "Restmüll (schwarze Tonne)", items: "Windeln, Staubsaugerbeutel, verschmutzte Verpackung", color: "schwarz" },
  { bin: "Papiertonne (blaue Tonne)", items: "Zeitungen, Kartons, Briefe", color: "blau" },
  { bin: "Gelber Sack/Tonne", items: "Plastikverpackungen, Dosen, Tetrapaks", color: "gelb" },
  { bin: "Biotonne (braune Tonne)", items: "Essensreste, Gartenabfälle, Teebeutel", color: "braun" },
  { bin: "Glascontainer", items: "Flaschen, Gläser (ohne Deckel)", color: "grün/weiß/braun" }
];

// ─── GENERATOR FUNCTIONS ────────────────────────────────────────────────────

export function generateKörperteile(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Welcher Körperteil ist zum X?
      const functionalParts = Object.keys(BODY_PART_FUNCTIONS) as Array<keyof typeof BODY_PART_FUNCTIONS>;
      const part = pick(functionalParts, rng);
      const correct = part;
      const func = BODY_PART_FUNCTIONS[part];
      const wrong = functionalParts.filter(p => p !== part).sort(() => rng() - 0.5).slice(0, 3);
      q.push(createMCQ("sachkunde", "körperteile",
        `Welcher Körperteil ist ${func}?`, correct, wrong, rng));
    } else if (type === 1) {
      // Welche Funktion hat dieser Körperteil?
      const part = pick(Object.keys(BODY_PART_FUNCTIONS) as Array<keyof typeof BODY_PART_FUNCTIONS>, rng);
      const correct = BODY_PART_FUNCTIONS[part];
      const wrongFuncs = Object.values(BODY_PART_FUNCTIONS).filter(f => f !== correct).slice(0, 3);
      q.push(createMCQ("sachkunde", "körperteile",
        `Wozu ist der ${part} da?`, correct, wrongFuncs, rng));
    } else {
      // Bild-Text Zuordnung
      const parts = ["Kopf", "Auge", "Nase", "Ohr", "Mund"];
      const p = pick(parts, rng);
      const correctAnswer = { "Kopf": "oben am Körper", "Auge": "zum Sehen", "Nase": "zum Riechen", "Ohr": "zum Hören", "Mund": "zum Essen" }[p] || "";
      q.push(createMCQ("sachkunde", "körperteile",
        `Wo ist der ${p}?`, correctAnswer, ["unten am Körper", "in der Mitte", "überall"], rng));
    }
  }

  return q;
}

export function generateSinnesorgane(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Was nimmt man mit diesem Sinnesorgan wahr? — use picked sense
      const data = pick(SENSES, rng);
      const correct = data.sensation;
      const wrong = SENSES.filter(s => s.sense !== data.sense).map(s => s.sensation).slice(0, 3);
      q.push(createMCQ("sachkunde", "sinnesorgane",
        `Das ${data.sense} ist zum ${data.ability}. Was nimmt man damit wahr?`, correct, wrong, rng));
    } else if (type === 1) {
      // Welcher Sinn für diese Empfindung?
      const sensations = ["Wärme fühlen", "süß schmecken", "Musik hören", "Blumen riechen"];
      const correct = pick(sensations, rng);
      const senses = ["Haut", "Zunge", "Ohr", "Nase"];
      q.push(createMCQ("sachkunde", "sinnesorgane",
        `Welches Sinnesorgan brauchst du zum ${correct}?`, senses[sensations.indexOf(correct)], senses.filter((_, idx) => idx !== sensations.indexOf(correct)).slice(0, 3), rng));
    } else {
      // Welches Sinnesorgan nimmt X wahr?
      const data = pick(SENSES, rng);
      const correct = `das ${data.sense}`;
      const wrong = SENSES.filter(s => s.sense !== data.sense).map(s => `das ${s.sense}`).slice(0, 3);
      q.push(createMCQ("sachkunde", "sinnesorgane",
        `Mit welchem Sinnesorgan nimmst du ${data.sensation} wahr?`, correct, wrong, rng));
    }
  }

  return q;
}

export function generateGesundheitHygiene(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Wann sollte man etwas tun?
      const data = pick(HYGIENE_ACTIVITIES, rng);
      const correct = data.when;
      const wrong = ["nur sonntags", "nie", "einmal im Monat"];
      q.push(createMCQ("sachkunde", "gesundheit_hygiene",
        `Wann sollte man ${data.activity}?`, correct, wrong, rng));
    } else if (type === 1) {
      // Womit macht man das?
      const data = pick(HYGIENE_ACTIVITIES, rng);
      const correct = data.tool;
      const wrong = ["Bürste", "Papier", "Tuch"];
      q.push(createMCQ("sachkunde", "gesundheit_hygiene",
        `Womit ${data.activity}?`, correct, wrong, rng));
    } else {
      // Warum ist das wichtig?
      const reasons = ["gesund bleiben", "Krankheiten vermeiden", "sich saubermachen"];
      q.push(createMCQ("sachkunde", "gesundheit_hygiene",
        `Warum solltest du deine Hände waschen?`, "um Krankheiten zu vermeiden", ["zum Spaß", "nur wenn sie schmutzig sind", "nie"], rng));
    }
  }

  return q;
}

export function generateHaustiere(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Welches Geräusch macht das Tier?
      const data = pick(DOMESTIC_ANIMALS, rng);
      const correct = data.sound;
      const wrong = DOMESTIC_ANIMALS.filter(a => a.animal !== data.animal).map(a => a.sound).slice(0, 3);
      q.push(createMCQ("sachkunde", "haustiere",
        `Welches Geräusch macht ein ${data.animal}?`, correct, wrong, rng));
    } else if (type === 1) {
      // Was frisst das Tier?
      const data = pick(DOMESTIC_ANIMALS, rng);
      const correct = data.food;
      const wrong = ["Fleisch", "Gras", "Körner"];
      q.push(createMCQ("sachkunde", "haustiere",
        `Was frisst eine ${data.animal}?`, correct, wrong, rng));
    } else {
      // Wo wohnt das Tier?
      const data = pick(DOMESTIC_ANIMALS, rng);
      const correct = data.home;
      const wrong = ["im Baum", "im Wasser", "unter der Erde"];
      q.push(createMCQ("sachkunde", "haustiere",
        `Wo wohnt ein ${data.animal}?`, correct, wrong, rng));
    }
  }

  return q;
}

export function generateWildeTiere(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Wo lebt dieses Tier?
      const data = pick(WILD_ANIMALS, rng);
      const correct = data.habitat;
      const wrong = ["im Wasser", "in der Stadt", "in der Wüste"];
      q.push(createMCQ("sachkunde", "wilde_tiere",
        `Wo lebt ein ${data.animal}?`, correct, wrong, rng));
    } else if (type === 1) {
      // Was ist eine Eigenschaft des Tieres?
      const data = pick(WILD_ANIMALS, rng);
      const correct = data.characteristic;
      const wrong = ["klein und süß", "flugfähig", "lebt im Wasser"];
      q.push(createMCQ("sachkunde", "wilde_tiere",
        `Was ist typisch für einen ${data.animal}?`, correct, wrong, rng));
    } else {
      // Welches Tier ist das?
      q.push(createMCQ("sachkunde", "wilde_tiere",
        `Welches Tier hat ein langes Rüssel?`, "Elefant", ["Löwe", "Tiger", "Bär"], rng));
    }
  }

  return q;
}

export function generateTierlaute(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 2;
    if (type === 0) {
      // Welches Tier macht dieses Geräusch?
      const data = pick(ANIMAL_SOUNDS, rng);
      const correct = data.animal;
      const wrong = ANIMAL_SOUNDS.filter(s => s.animal !== correct).map(s => s.animal).slice(0, 3);
      q.push(createMCQ("sachkunde", "tierlaute",
        `Welches Tier macht "${data.sound}"?`, correct, wrong, rng));
    } else {
      // Welches Geräusch macht das Tier?
      const data = pick(ANIMAL_SOUNDS, rng);
      const correct = data.sound;
      const wrong = ANIMAL_SOUNDS.filter(s => s.animal !== data.animal).map(s => s.sound).slice(0, 3);
      q.push(createMCQ("sachkunde", "tierlaute",
        `Welches Geräusch macht ein ${data.animal}?`, correct, wrong, rng));
    }
  }

  return q;
}

export function generateJahreszeitenNatur(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Welche Jahreszeit ist das?
      const data = pick(SEASONS, rng);
      const correct = data.season || "Frühling";
      const wrong = SEASONS.filter(s => s.season !== correct).map(s => s.season || "Frühling").slice(0, 3);
      q.push(createMCQ("sachkunde", "jahreszeiten_natur",
        `In welcher Jahreszeit ist es ${data.characteristic || "schön"}?`, correct, wrong, rng));
    } else if (type === 1) {
      // In welchen Monaten?
      const data = pick(SEASONS, rng);
      const correct = data.months || "März, April, Mai";
      const wrong = ["Januar, Februar, März", "Juli, August, September", "Oktober, November, Dezember"];
      q.push(createMCQ("sachkunde", "jahreszeiten_natur",
        `In welchen Monaten ist ${data.season || "Frühling"}?`, correct, wrong, rng));
    } else {
      // Wetter in der Jahreszeit — varied by picked season
      const data = pick(SEASONS, rng);
      const correct = data.season;
      const wrong = SEASONS.filter(s => s.season !== correct).map(s => s.season).slice(0, 3);
      q.push(createMCQ("sachkunde", "jahreszeiten_natur",
        `In welcher Jahreszeit ist es ${data.characteristic}?`, correct, wrong, rng));
    }
  }

  return q;
}

export function generateBäume(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Welche Früchte gibt dieser Baum?
      const data = pick(TREES, rng);
      const correct = data.fruit || "Apfel";
      const wrong = ["Äpfel", "Birnen", "Kirschen"];
      q.push(createMCQ("sachkunde", "bäume",
        `Welche Früchte gibt ein ${data.tree || "Baum"}-Baum?`, correct, wrong, rng));
    } else if (type === 1) {
      // Wie sehen die Blätter aus?
      const data = pick(TREES, rng);
      const correct = data.leaves || "grün und länglich";
      const wrong = ["rot und klein", "gelb und hart", "blau und glatt"];
      q.push(createMCQ("sachkunde", "bäume",
        `Wie sehen die Blätter einer ${data.tree || "Eiche"} aus?`, correct, wrong, rng));
    } else {
      // Baumteile
      const part = pick(TREE_PARTS, rng);
      const correctDef = ({ "Wurzel": "unter der Erde", "Stamm": "der Hauptteil des Baumes", "Blatt": "grüne Teile" } as Record<string, string>)[part || "Stamm"] || "Teil des Baumes";
      q.push(createMCQ("sachkunde", "bäume",
        `Was ist die ${part || "Wurzel"} eines Baumes?`, correctDef, ["oben in der Luft", "unten im Wasser", "auf den Ästen"], rng));
    }
  }

  return q;
}

export function generateBlütenFrüchte(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
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
          `Welche Farbe hat eine ${data.plant}?`, correct, wrong, rng));
      } else {
        q.push(createMCQ("sachkunde", "blueten_fruechte",
          `Wann sind ${data.plant}n reif?`, data.season || "im Sommer", ["im Winter", "im Frühling", "nie"], rng));
      }
    } else if (type === 1) {
      // Wann ist das Obst reif?
      const data = pick(FLOWERS_FRUITS.filter(f => f.season), rng);
      const correct = data.season || "im Sommer";
      const wrong = ["Winter", "Frühling", "Herbst"];
      q.push(createMCQ("sachkunde", "blueten_fruechte",
        `Wann sind ${data.plant}n reif?`, correct, wrong, rng));
    } else {
      // Ist das eine Blume, ein Baum oder ein Strauch? — use random plant from data
      const data = pick(FLOWERS_FRUITS, rng);
      const correct = data.type;
      const typeOptions = ["Blume", "Baum", "Strauch", "Gemüse"];
      const wrong = typeOptions.filter(t => t !== correct).slice(0, 3);
      q.push(createMCQ("sachkunde", "blueten_fruechte",
        `Was ist eine ${data.plant}?`, correct, wrong, rng));
    }
  }

  return q;
}

export function generateWetter(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Wie fühlt sich das Wetter an?
      const data = pick(WEATHER_TYPES, rng);
      const correct = data.feeling;
      const wrong = ["heiß", "kühl", "nass"];
      q.push(createMCQ("sachkunde", "wetter",
        `Wie ist das Wetter bei ${data.weather}?`, correct, wrong, rng));
    } else if (type === 1) {
      // Welches Wetter ist das?
      const weatherDescriptions = [
        { description: "helles Licht vom Himmel", weather: "Sonne" },
        { description: "weiße Flocken fallen", weather: "Schnee" },
        { description: "Wasser fällt vom Himmel", weather: "Regen" }
      ];
      const data = pick(weatherDescriptions, rng);
      q.push(createMCQ("sachkunde", "wetter",
        `Welches Wetter ist das? ${data.description}`, data.weather, ["Regen", "Schnee", "Sonne"], rng));
    } else {
      // Was brauche ich bei diesem Wetter? — varied by weather type
      const weatherItems: Record<string, { item: string; wrong: string[] }> = {
        "Regen":  { item: "Regenschirm", wrong: ["Sonnenbrille", "Sonnencreme", "kurze Hose"] },
        "Schnee": { item: "Wintermantel und Handschuhe", wrong: ["Badeanzug", "Sandalen", "T-Shirt"] },
        "Sonne":  { item: "Sonnencreme und Sonnenbrille", wrong: ["Regenschirm", "Wintermantel", "Gummistiefel"] },
        "Wind":   { item: "Jacke und Schal", wrong: ["Badeanzug", "Sonnenhut", "Regenschirm"] },
        "Wolke":  { item: "leichte Jacke", wrong: ["Wintermantel", "Badeanzug", "Regenstiefel"] }
      };
      const weatherData = pick(WEATHER_TYPES, rng);
      const wi = weatherItems[weatherData.weather] || weatherItems["Regen"];
      q.push(createMCQ("sachkunde", "wetter",
        `Was brauchst du bei ${weatherData.weather}?`, wi.item, wi.wrong, rng));
    }
  }

  return q;
}

export function generateJahreszeitenDetail(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
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
        `Was passiert im ${season}?`, correct, wrong, rng));
    } else if (type === 1) {
      // Welche Kleidung in dieser Jahreszeit?
      const seasonClothing: Record<string, { correct: string; wrong: string[] }> = {
        "Frühling": { correct: "leichte Jacke und Pullover", wrong: ["Mantel und Schal", "kurze Hose und T-Shirt", "Badeanzug"] },
        "Sommer":   { correct: "kurze Hose und T-Shirt",    wrong: ["Mantel und Schal", "leichte Jacke", "dicke Strickjacke"] },
        "Herbst":   { correct: "Regenjacke und Stiefel",    wrong: ["Badeanzug", "kurze Hose", "Mantel und Schal"] },
        "Winter":   { correct: "Mantel und Schal",          wrong: ["kurze Hose", "T-Shirt", "Sandalen"] }
      };
      const season = pick(Object.keys(seasonClothing), rng);
      const { correct, wrong } = seasonClothing[season];
      q.push(createMCQ("sachkunde", "jahreszeiten_detail",
        `Was zieht man im ${season} an?`, correct, wrong, rng));
    } else {
      // Temperatur — varied
      const temperatureQuestions = [
        { question: "In welcher Jahreszeit ist es am kältesten?", correct: "Winter", wrong: ["Frühling", "Sommer", "Herbst"] },
        { question: "In welcher Jahreszeit ist es am wärmsten?", correct: "Sommer", wrong: ["Frühling", "Winter", "Herbst"] },
        { question: "In welcher Jahreszeit ist es mild und Blumen blühen?", correct: "Frühling", wrong: ["Sommer", "Winter", "Herbst"] },
        { question: "In welcher Jahreszeit fallen die Blätter von den Bäumen?", correct: "Herbst", wrong: ["Frühling", "Sommer", "Winter"] }
      ];
      const tq = pick(temperatureQuestions, rng);
      q.push(createMCQ("sachkunde", "jahreszeiten_detail",
        tq.question, tq.correct, tq.wrong, rng));
    }
  }

  return q;
}

export function generateMonateTage(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Nach welchem Tag kommt X? — dynamic
      const dayIdx = Math.floor(rng() * DAYS_OF_WEEK.length);
      const day = DAYS_OF_WEEK[dayIdx];
      const nextDay = DAYS_OF_WEEK[(dayIdx + 1) % DAYS_OF_WEEK.length];
      const wrong = DAYS_OF_WEEK.filter(d => d !== nextDay).sort(() => rng() - 0.5).slice(0, 3);
      q.push(createMCQ("sachkunde", "monate_tage",
        `Nach ${day} kommt...?`, nextDay, wrong, rng));
    } else if (type === 1) {
      // Varied month questions
      const month = pick(MONTHS, rng);
      const monthIdx = MONTHS.indexOf(month);
      const nextMonth = MONTHS[(monthIdx + 1) % 12];
      const monthQuestionTypes = ["next", "season", "number"] as const;
      const mqType = pick([...monthQuestionTypes], rng);
      const monthSeasons: Record<string, string> = {
        "Januar": "Winter", "Februar": "Winter", "März": "Frühling",
        "April": "Frühling", "Mai": "Frühling", "Juni": "Sommer",
        "Juli": "Sommer", "August": "Sommer", "September": "Herbst",
        "Oktober": "Herbst", "November": "Herbst", "Dezember": "Winter"
      };
      if (mqType === "next") {
        const wrong = MONTHS.filter(m => m !== nextMonth).sort(() => rng() - 0.5).slice(0, 3);
        q.push(createMCQ("sachkunde", "monate_tage",
          `Welcher Monat kommt nach dem ${month}?`, nextMonth, wrong, rng));
      } else if (mqType === "season") {
        const correct = monthSeasons[month];
        const seasonWrong = ["Frühling", "Sommer", "Herbst", "Winter"].filter(s => s !== correct).slice(0, 3);
        q.push(createMCQ("sachkunde", "monate_tage",
          `In welcher Jahreszeit ist der ${month}?`, correct, seasonWrong, rng));
      } else {
        q.push(createMCQ("sachkunde", "monate_tage",
          `Wie viele Monate hat ein Jahr?`, "12 Monate", ["7 Monate", "10 Monate", "4 Monate"], rng));
      }
    } else {
      // Wann ist dein Geburtstag?
      q.push(createMCQ("sachkunde", "monate_tage",
        `Welche Tage hat eine Woche?`, "7 Tage", ["5 Tage", "6 Tage", "10 Tage"], rng));
    }
  }

  return q;
}

export function generateFamilie(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Wer ist dein ...? — use the picked family member and relation
      const data = pick(FAMILY_MEMBERS, rng);
      const correct = data.member;
      const wrong = FAMILY_MEMBERS.filter(m => m.member !== correct).map(m => m.member).sort(() => rng() - 0.5).slice(0, 3);
      q.push(createMCQ("sachkunde", "familie",
        `Wer ist dein ${data.relation}?`, correct, wrong, rng));
    } else if (type === 1) {
      // Familienbeziehung — varied
      const familyRelQuestions = [
        { q: "Die Mutter deines Vaters ist deine...?", correct: "Großmutter", wrong: ["Tante", "Schwester", "Mutter"] },
        { q: "Der Vater deiner Mutter ist dein...?", correct: "Großvater", wrong: ["Onkel", "Bruder", "Vater"] },
        { q: "Die Schwester deines Vaters ist deine...?", correct: "Tante", wrong: ["Großmutter", "Cousine", "Schwester"] },
        { q: "Der Bruder deiner Mutter ist dein...?", correct: "Onkel", wrong: ["Großvater", "Bruder", "Cousin"] },
        { q: "Der Sohn deiner Eltern (außer dir) ist dein...?", correct: "Bruder", wrong: ["Onkel", "Cousin", "Vater"] },
        { q: "Die Tochter deiner Eltern (außer dir) ist deine...?", correct: "Schwester", wrong: ["Tante", "Cousine", "Mutter"] }
      ];
      const frq = pick(familyRelQuestions, rng);
      q.push(createMCQ("sachkunde", "familie",
        frq.q, frq.correct, frq.wrong, rng));
    } else {
      // Familienmitglieder
      q.push(createMCQ("sachkunde", "familie",
        `Wie viele Großeltern hast du?`, "vier (zwei Großväter und zwei Großmütter)", ["zwei", "acht", "eins"], rng));
    }
  }

  return q;
}

export function generateZuhause(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Wozu ist dieser Raum?
      const data = pick(ROOMS, rng);
      const correct = data.purpose;
      const wrong = ["zum Schlafen", "zum Kochen", "zum Spielen"];
      q.push(createMCQ("sachkunde", "zuhause",
        `Wozu ist die ${data.room}?`, correct, wrong, rng));
    } else if (type === 1) {
      // Was ist in diesem Zimmer?
      const data = pick(ROOMS, rng);
      const correct = data.furniture;
      const wrong = ["Bett und Schrank", "Herd und Kühlschrank", "Tisch und Stuhl"];
      q.push(createMCQ("sachkunde", "zuhause",
        `Was ist in der ${data.room}?`, correct, wrong, rng));
    } else {
      // Welches Zimmer?
      q.push(createMCQ("sachkunde", "zuhause",
        `Wo machst du dein Frühstück?`, "in der Küche", ["im Badezimmer", "im Schlafzimmer", "im Wohnzimmer"], rng));
    }
  }

  return q;
}

export function generateRegelnVerhalten(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Wann solltest du das tun?
      const data = pick(GOOD_BEHAVIOR, rng);
      const correct = data.context;
      const wrong = ["immer", "nie", "nur am Wochenende"];
      q.push(createMCQ("sachkunde", "regeln_verhalten",
        `Wann solltest du "${data.behavior}" sagen?`, correct, wrong, rng));
    } else if (type === 1) {
      // Was ist höflich / richtig? — varied
      const politeQuestions = [
        { q: `Ist es höflich zu sagen "Bitte"?`, correct: "Ja, sehr höflich", wrong: ["Nein, unhöflich", "manchmal", "nie"] },
        { q: `Ist es höflich, anderen ins Wort zu fallen?`, correct: "Nein, man soll zuhören", wrong: ["Ja, das ist normal", "manchmal okay", "immer"] },
        { q: `Was sagst du, wenn du etwas haben möchtest?`, correct: "Bitte", wrong: ["Gib mir das!", "Ich will das!", "Sofort!"] },
        { q: `Was sagst du, wenn dir jemand hilft?`, correct: "Danke", wrong: ["Nichts", "Gut gemacht", "Weiter so"] },
        { q: `Wie verhältst du dich, wenn ein Mitschüler traurig ist?`, correct: "Ich tröste ihn", wrong: ["Ich ignoriere ihn", "Ich lache ihn aus", "Ich gehe weg"] }
      ];
      const pq = pick(politeQuestions, rng);
      q.push(createMCQ("sachkunde", "regeln_verhalten",
        pq.q, pq.correct, pq.wrong, rng));
    } else {
      // Warum Regeln? — varied
      const whyRuleQuestions = [
        { q: `Warum sollst du Spielzeug teilen?`, correct: "um Freunde zu haben", wrong: ["um allein zu sein", "weil es langweilig ist", "um andere zu ärgern"] },
        { q: `Warum sollst du im Unterricht zuhören?`, correct: "um zu lernen und nichts zu verpassen", wrong: ["weil der Lehrer es sagt", "um Ärger zu vermeiden", "es ist egal"] },
        { q: `Warum soll man andere nicht schlagen?`, correct: "weil das wehtut und nicht fair ist", wrong: ["weil man bestraft wird", "weil es keinen Spaß macht", "weil man dann Freunde verliert"] },
        { q: `Warum soll man im Klassenzimmer nicht laut schreien?`, correct: "um andere nicht zu stören", wrong: ["weil die Lehrerin das nicht hört", "weil es unhöflich ist", "wegen der Regeln"] },
        { q: `Warum ist Grüßen wichtig?`, correct: "um freundlich und respektvoll zu sein", wrong: ["es ist Pflicht", "alle machen es so", "weil man sonst bestraft wird"] }
      ];
      const wq = pick(whyRuleQuestions, rng);
      q.push(createMCQ("sachkunde", "regeln_verhalten",
        wq.q, wq.correct, wq.wrong, rng));
    }
  }

  return q;
}

export function generateVerkehrsmittel(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Wie viele Räder hat dieses Fahrzeug?
      const data = pick(VEHICLES, rng);
      const correct = String(data.wheels);
      const wrong = ["2", "4", "8"];
      q.push(createMCQ("sachkunde", "verkehrsmittel",
        `Wie viele Räder hat ein ${data.vehicle}?`, correct, wrong, rng));
    } else if (type === 1) {
      // Womit fährt dieses Fahrzeug?
      const data = pick(VEHICLES, rng);
      if (data.powered) {
        q.push(createMCQ("sachkunde", "verkehrsmittel",
          `Womit fährt ein ${data.vehicle}?`, data.fuel || "Energie", ["Muskelkraft", "Wind", "Wasser"], rng));
      } else {
        q.push(createMCQ("sachkunde", "verkehrsmittel",
          `Womit fährst du ein ${data.vehicle}?`, "Muskelkraft (Tretkraft)", ["Benzin", "Strom", "Wind"], rng));
      }
    } else {
      // Welches Verkehrsmittel?
      q.push(createMCQ("sachkunde", "verkehrsmittel",
        `Mit welchem Fahrzeug fliegen wir?`, "Flugzeug", ["Auto", "Fahrrad", "Bus"], rng));
    }
  }

  return q;
}

export function generateVerkehrsregeln(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  // Ampel questions (varied)
  const AMPEL_QUESTIONS = [
    { q: "Was bedeutet eine rote Ampel?", correct: "Halt! Du darfst nicht gehen", wrong: ["Vorsicht!", "Du darfst gehen", "Schnell laufen"] },
    { q: "Was bedeutet eine grüne Ampel?", correct: "Du darfst gehen", wrong: ["Halt!", "Warten", "Achtung!"] },
    { q: "Was bedeutet eine gelbe Ampel?", correct: "Vorsicht! Gleich wechselt die Ampel", wrong: ["Du darfst gehen", "Halt sofort!", "Weiterlaufen"] },
    { q: "Bei welcher Ampelfarbe musst du stehenbleiben?", correct: "Rot", wrong: ["Grün", "Gelb", "Blau"] },
    { q: "Bei welcher Ampelfarbe darfst du die Straße überqueren?", correct: "Grün", wrong: ["Rot", "Gelb", "Orange"] }
  ];

  // Road safety questions using TRAFFIC_RULES data
  const SAFETY_QUESTIONS = [
    { q: "Wo sollst du als Fußgänger gehen?", correct: "auf dem Gehweg", wrong: ["auf der Straße", "auf der Fahrbahn", "in der Mitte der Straße"] },
    { q: "Wo überquerst du die Straße sicher?", correct: "beim Fußgängerüberweg", wrong: ["überall", "zwischen parkenden Autos", "schnell rennen"] },
    { q: "Wo fahren Fahrräder?", correct: "auf dem Fahrradweg", wrong: ["auf dem Gehweg", "auf der Autobahn", "auf der Hauptstraße"] },
    { q: "Was musst du tun, bevor du die Straße überquerst?", correct: "links, rechts, nochmals links schauen", wrong: ["einfach laufen", "warten und die Augen schließen", "rennen"] },
    { q: "Was gibt der Fahrradfahrer beim Abbiegen?", correct: "ein Handzeichen", wrong: ["ein Zeichen mit dem Kopf", "kein Zeichen", "ein Lichtzeichen"] }
  ];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Ampel question — varied
      const aq = pick(AMPEL_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "verkehrsregeln", aq.q, aq.correct, aq.wrong, rng));
    } else if (type === 1) {
      // Road safety question — varied
      const sq = pick(SAFETY_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "verkehrsregeln", sq.q, sq.correct, sq.wrong, rng));
    } else {
      // Traffic rules from TRAFFIC_RULES data
      const rule = pick(TRAFFIC_RULES, rng);
      const correct = rule.meaning;
      const wrong = TRAFFIC_RULES.filter(r => r.meaning !== correct).map(r => r.meaning).slice(0, 3);
      q.push(createMCQ("sachkunde", "verkehrsregeln",
        `Was bedeutet: "${rule.rule}"?`, correct, wrong, rng));
    }
  }

  return q;
}

export function generateSicherheit(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  // Danger recognition questions — varied using SAFETY_RULES data
  const DANGER_QUESTIONS = [
    { q: "Ist es sicher, mit Fremden mitzugehen?", correct: "Nein, das ist sehr gefährlich", wrong: ["Ja, sicher", "manchmal okay", "nur im Dunkeln gefährlich"] },
    { q: "Darfst du alleine mit Feuer spielen?", correct: "Nein, das ist sehr gefährlich", wrong: ["Ja, das macht Spaß", "manchmal okay", "nur draußen okay"] },
    { q: "Darfst du in ein fremdes Auto einsteigen?", correct: "Nein, auf keinen Fall", wrong: ["Ja, wenn es nett aussieht", "manchmal okay", "wenn man spät dran ist"] },
    { q: "Was solltest du tun, wenn dich ein Fremder mitnehmen will?", correct: "Weglaufen und laut schreien", wrong: ["Mitgehen", "Warten", "Fragen ob es okay ist"] },
    { q: "Ist es gefährlich, alleine auf der Straße zu spielen?", correct: "Ja, Autos könnten kommen", wrong: ["Nein, das ist sicher", "Nur bei Regen", "Nur nachts"] }
  ];

  // Emergency numbers — varied
  const EMERGENCY_QUESTIONS = [
    { q: "Welche Nummer rufst du an, wenn es ein Feuer gibt?", correct: "112 (Feuerwehr)", wrong: ["110", "911", "0800"] },
    { q: "Welche Nummer rufst du bei der Polizei an?", correct: "110 (Polizei)", wrong: ["112", "911", "118"] },
    { q: "Was ist die Notrufnummer in Deutschland?", correct: "110 (Polizei) oder 112 (Feuerwehr)", wrong: ["0800", "119", "118"] },
    { q: "Wen rufst du an, wenn jemand verletzt ist?", correct: "112 (Rettungsdienst)", wrong: ["0800", "119", "die Schule"] },
    { q: "Was machst du zuerst bei einem Notfall?", correct: "Erwachsenen rufen oder Notruf wählen", wrong: ["Weiterspielen", "Warten", "Weglaufen"] }
  ];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Danger recognition — varied using pool
      const dq = pick(DANGER_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "sicherheit", dq.q, dq.correct, dq.wrong, rng));
    } else if (type === 1) {
      // Emergency numbers — varied using pool
      const eq = pick(EMERGENCY_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "sicherheit", eq.q, eq.correct, eq.wrong, rng));
    } else {
      // Safety rules from SAFETY_RULES data
      const rule = pick(SAFETY_RULES, rng);
      if (rule.number) {
        q.push(createMCQ("sachkunde", "sicherheit",
          `Was ist die wichtige Regel: "${rule.rule}"?`,
          rule.number,
          ["0800", "118", "119"],
          rng));
      } else {
        const correct = `Gefahr: ${rule.danger}`;
        const wrong = SAFETY_RULES
          .filter(r => r.danger && r.danger !== rule.danger)
          .map(r => `Gefahr: ${r.danger}`)
          .slice(0, 3);
        q.push(createMCQ("sachkunde", "sicherheit",
          `Warum soll man folgende Regel beachten: "${rule.rule}"?`,
          correct, wrong, rng));
      }
    }
  }

  return q;
}

export function generateMaterialien(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      // Wie fühlt sich dieses Material an?
      const data = pick(MATERIALS, rng);
      const correct = data.feeling;
      const wrong = MATERIALS.filter(m => m.material !== data.material).map(m => m.feeling).slice(0, 3);
      q.push(createMCQ("sachkunde", "materialien",
        `Wie fühlt sich ${data.material} an?`, correct, wrong, rng));
    } else if (type === 1) {
      // Woraus kommt dieses Material?
      const data = pick(MATERIALS, rng);
      const correct = data.origin;
      const wrong = MATERIALS.filter(m => m.material !== data.material).map(m => m.origin).slice(0, 3);
      q.push(createMCQ("sachkunde", "materialien",
        `Woher kommt ${data.material}?`, correct, wrong, rng));
    } else if (type === 2) {
      // Was wird aus diesem Material gemacht?
      const data = pick(MATERIALS, rng);
      const correct = data.items;
      const wrong = MATERIALS.filter(m => m.material !== data.material).map(m => m.items).slice(0, 3);
      q.push(createMCQ("sachkunde", "materialien",
        `Was wird aus ${data.material} gemacht?`, correct, wrong, rng));
    } else {
      // Aus welchem Material ist dieses Gegenstand?
      const ITEM_MATERIAL_PAIRS = [
        { item: "ein Fenster", material: "Glas" },
        { item: "ein Tisch", material: "Holz" },
        { item: "ein Löffel", material: "Metall" },
        { item: "ein Spielzeugauto", material: "Plastik" },
        { item: "ein Buch", material: "Papier" },
        { item: "ein T-Shirt", material: "Stoff" },
        { item: "eine Flasche (zum Trinken)", material: "Glas" },
        { item: "eine Tür", material: "Holz" },
        { item: "ein Schlüssel", material: "Metall" },
        { item: "eine Tüte", material: "Plastik" }
      ];
      const pair = pick(ITEM_MATERIAL_PAIRS, rng);
      const correct = pair.material;
      const wrong = MATERIALS.filter(m => m.material !== correct).map(m => m.material).sort(() => rng() - 0.5).slice(0, 3);
      q.push(createMCQ("sachkunde", "materialien",
        `Aus welchem Material ist ${pair.item}?`, correct, wrong, rng));
    }
  }

  return q;
}

export function generateMülltrennung(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  // Specific item → correct bin mappings for varied questions
  const ITEM_BIN_PAIRS = [
    { item: "eine Zeitung", bin: "Papiertonne (blaue Tonne)" },
    { item: "ein Joghurtbecher (Plastik)", bin: "Gelber Sack/Tonne" },
    { item: "eine leere Glasflasche", bin: "Glascontainer" },
    { item: "Essensreste vom Mittagessen", bin: "Biotonne (braune Tonne)" },
    { item: "ein Karton", bin: "Papiertonne (blaue Tonne)" },
    { item: "eine Dose (Metall)", bin: "Gelber Sack/Tonne" },
    { item: "welkes Laub aus dem Garten", bin: "Biotonne (braune Tonne)" },
    { item: "ein verschmutzter Staubsaugerbeutel", bin: "Restmüll (schwarze Tonne)" },
    { item: "ein Brief", bin: "Papiertonne (blaue Tonne)" },
    { item: "ein leeres Marmeladenglas", bin: "Glascontainer" },
    { item: "eine Plastiktüte", bin: "Gelber Sack/Tonne" },
    { item: "Teebeutel", bin: "Biotonne (braune Tonne)" },
    { item: "eine Windel", bin: "Restmüll (schwarze Tonne)" },
    { item: "ein Tetrapak (Milchkarton)", bin: "Gelber Sack/Tonne" }
  ];

  for (let i = 0; i < 45; i++) {
    const type = i % 3;
    if (type === 0) {
      // Wohin kommt dieser Gegenstand?
      const pair = pick(ITEM_BIN_PAIRS, rng);
      const correct = pair.bin;
      const wrong = WASTE_BINS.filter(b => b.bin !== correct).map(b => b.bin).sort(() => rng() - 0.5).slice(0, 3);
      q.push(createMCQ("sachkunde", "mülltrennung",
        `Wohin kommt ${pair.item}?`, correct, wrong, rng));
    } else if (type === 1) {
      // Welche Farbe hat diese Tonne?
      const data = pick(WASTE_BINS, rng);
      const correct = data.color;
      const wrong = WASTE_BINS.filter(b => b.bin !== data.bin).map(b => b.color).slice(0, 3);
      q.push(createMCQ("sachkunde", "mülltrennung",
        `Welche Farbe hat die ${data.bin}?`, correct, wrong, rng));
    } else {
      // Was kommt in diese Tonne?
      const data = pick(WASTE_BINS, rng);
      const correct = data.items;
      const wrong = WASTE_BINS.filter(b => b.bin !== data.bin).map(b => b.items).slice(0, 3);
      q.push(createMCQ("sachkunde", "mülltrennung",
        `Was kommt in die ${data.bin}?`, correct, wrong, rng));
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
  sicherheit: generateSicherheit,
  materialien: generateMaterialien,
  mülltrennung: generateMülltrennung
};
