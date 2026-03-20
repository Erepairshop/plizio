// ─── GERMAN GRADE 2 SACHKUNDE GENERATORS ───────────────────────────────────────
// Procedural MCQ question generators for German Grade 2 Sachkunde (environmental science)
// Generates 45 questions per subtopic using seeded PRNG for reproducibility.
//
// 24 subtopics organized in 6 themes:
// Mein Körper (4): Ernährung & Verdauung, Zahngesundheit, Bewegung & Körperpflege, Schlaf & Ruhe
// Tiere & Lebensräume (4): Lebensräume, Nahrungsketten, Haustiere-Pflege, Wildtiere & Anpassung
// Pflanzen (4): Pflanzenteile, Wachstum & Lebenszyklus, Samen zur Blüte, Nützliche Pflanzen
// Wasser & Zeit (4): Wasserkreislauf, Aggregatzustände, Wasser im Leben, Tag & Jahreszeiten
// Berufe & Familie (4): Verschiedene Berufe, Was machen Berufe, Familie & Rollen, Zusammenleben & Hilfe
// Sicherheit (4): Unfallprävention, Verkehrssicherheit, Erste Hilfe Basics, Notsituationen
//
// All questions in German language (Deutsch)
// Grade-appropriate for 7-8 year old students (Zweitklässler)

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

// THEME 1: MEIN KÖRPER

// Ernährung & Verdauung
const FOOD_GROUPS = [
  { group: "Obst", examples: "Apfel, Banane, Erdbeere", benefit: "Vitamine und Ballaststoffe" },
  { group: "Gemüse", examples: "Karotte, Brokkoli, Tomate", benefit: "Vitamine und Mineralstoffe" },
  { group: "Getreide", examples: "Brot, Reis, Nudeln", benefit: "Energie und Kraft" },
  { group: "Milchprodukte", examples: "Milch, Käse, Joghurt", benefit: "Kalzium für starke Knochen" },
  { group: "Proteine", examples: "Fleisch, Fisch, Eier, Bohnen", benefit: "Wachstum und Muskelaufbau" }
];

const HEALTHY_FOODS = [
  "Apfel", "Karotte", "Vollkornbrot", "Milch", "Fisch",
  "Spinat", "Nüsse", "Joghurt", "Brokkoli", "Hühnchen"
];

const UNHEALTHY_FOODS = [
  "viel Zucker", "Pommes Frites", "Cola", "Süßigkeiten",
  "Fast Food", "zu viel Salz", "Donuts", "Schokolade täglich"
];

const DIGESTIVE_SYSTEM = [
  { part: "Mund", function: "Kauen und Speichel vermischen" },
  { part: "Magen", function: "Nahrung zermahlen und verdauen" },
  { part: "Dünndarm", function: "Nährstoffe aufnehmen" },
  { part: "Dickdarm", function: "Wasser aufnehmen und Abfallstoffe sammeln" }
];

// Zahngesundheit
const TOOTH_FACTS = [
  { fact: "Milchzähne fallen aus und werden durch bleibende Zähne ersetzt" },
  { fact: "Wir sollten unsere Zähne zweimal täglich putzen" },
  { fact: "Zu viel Zucker schadet den Zähnen" },
  { fact: "Der Zahnarzt hilft bei Zahnproblemen" }
];

// Bewegung & Körperpflege
const PHYSICAL_ACTIVITIES = [
  { activity: "Fußball spielen", benefit: "Ausdauer und Teamfähigkeit", duration: "30-60 Minuten täglich" },
  { activity: "Radfahren", benefit: "Beinmuskulatur stärken", duration: "30-60 Minuten täglich" },
  { activity: "Schwimmen", benefit: "ganzer Körper trainieren", duration: "30-60 Minuten täglich" },
  { activity: "Tanzen", benefit: "Koordination und Spaß", duration: "30-60 Minuten täglich" }
];

const HYGIENE_HABITS = [
  { habit: "Hände waschen vor Mahlzeiten", when: "vor dem Essen" },
  { habit: "Zähne putzen", when: "morgens und abends" },
  { habit: "Duschen oder Baden", when: "jeden Tag" },
  { habit: "Haare kämmen", when: "morgens und abends" }
];

// Schlaf & Ruhe
const SLEEP_FACTS = [
  { fact: "Kinder brauchen 8-10 Stunden Schlaf pro Nacht", hours: "8-10 Stunden" },
  { fact: "Ausreichend Schlaf hilft beim Lernen und Wachsen" },
  { fact: "Ein regelmäßiger Schlafrhythmus ist wichtig" },
  { fact: "Vor dem Schlafengehen sollte man nicht zu viel spielen" }
];

// THEME 2: TIERE & LEBENSRÄUME

// Lebensräume
const HABITATS = [
  { habitat: "Wald", animals: "Reh, Eichhörnchen, Vogel", climate: "gemäßigt" },
  { habitat: "Wiese", animals: "Schaf, Kuh, Schmetteling", climate: "gemäßigt" },
  { habitat: "Wasser (Fluss/See)", animals: "Fisch, Frosch, Ente", climate: "variabel" },
  { habitat: "Berge", animals: "Adler, Murmeltier, Gämse", climate: "kalt" },
  { habitat: "Stadt/Haus", animals: "Hund, Katze, Hausmaus", climate: "gemäßigt" }
];

// Nahrungsketten
const FOOD_CHAINS = [
  { chain: "Gras → Schaf → Wolf", energy: "von Pflanze zu Herbivore zu Fleischfresser" },
  { chain: "Pflanze → Insekt → Vogel", energy: "von Pflanze zu Insekt zu Raubtier" },
  { chain: "Algen → Fisch → Mensch", energy: "von Alge zu Fisch zu Mensch" },
  { chain: "Körner → Maus → Katze", energy: "von Getreide zu Nager zu Fleischfresser" }
];

const PREDATOR_PREY = [
  { predator: "Katze", prey: "Maus" },
  { predator: "Adler", prey: "Hase" },
  { predator: "Schlange", prey: "Frosch" },
  { predator: "Wolf", prey: "Schaf" }
];

// Haustiere Pflege
const PET_CARE = [
  { pet: "Hund", food: "Hundefutter", frequency: "2× täglich", extra: "tägliche Spaziergänge" },
  { pet: "Katze", food: "Katzenfutter", frequency: "2× täglich", extra: "frisches Wasser" },
  { pet: "Kaninchen", food: "Gemüse und Heu", frequency: "1-2× täglich", extra: "sauberer Käfig" },
  { pet: "Vogel", food: "Körner und Samen", frequency: "1× täglich", extra: "frisches Wasser" }
];

// Wildtiere & Anpassung
const WILD_ANIMAL_ADAPTATIONS = [
  { animal: "Eichhörnchen", adaptation: "buschiger Schwanz für Gleichgewicht" },
  { animal: "Igel", adaptation: "Stacheln zur Verteidigung" },
  { animal: "Weiße Eule", adaptation: "weiße Federn zur Tarnung im Schnee" },
  { animal: "Fisch", adaptation: "Flossen zum Schwimmen" }
];

// THEME 3: PFLANZEN

// Pflanzenteile
const PLANT_PARTS = [
  { part: "Wurzel", function: "nimmt Wasser und Nährstoffe auf" },
  { part: "Stängel/Stamm", function: "trägt Blätter und Blüten" },
  { part: "Blatt", function: "macht Nahrung durch Photosynthese" },
  { part: "Blüte", function: "wird zur Frucht und trägt Samen" },
  { part: "Frucht", function: "schützt die Samen" }
];

// Wachstum & Lebenszyklus
const PLANT_LIFECYCLE = [
  { stage: "Samenkorn", description: "kleine harte Schale mit Nährstoffen" },
  { stage: "Keimling", description: "erste Wurzeln und Blätter wachsen" },
  { stage: "Pflanze", description: "wächst größer und entwickelt Blüten" },
  { stage: "Frucht", description: "enthält neue Samen" },
  { stage: "Samen fallen", description: "werden von Tieren verbreitet oder weggeweht" }
];

// Samen zur Blüte
const SEED_CONDITIONS = [
  { condition: "Wasser", why: "für das Wachstum und die Keimung nötig" },
  { condition: "Licht", why: "für Photosynthese und Wachstum nötig" },
  { condition: "Wärme", why: "aktiviert die Keimung" },
  { condition: "Nährstoffe", why: "zum Aufbau der Pflanze nötig" }
];

// Nützliche Pflanzen
const USEFUL_PLANTS = [
  { plant: "Weizen", use: "wird zu Brot gemahlen", type: "Getreide" },
  { plant: "Kartoffel", use: "Nahrungsmittel", type: "Gemüse" },
  { plant: "Apfelbaum", use: "trägt Äpfel als Obst", type: "Obst" },
  { plant: "Kraut/Tee-Pflanze", use: "wird zu Tee verarbeitet", type: "Heilpflanze" }
];

// THEME 4: WASSER & ZEIT

// Wasserkreislauf
const WATER_CYCLE = [
  { process: "Verdunstung", description: "Wasser von Seen/Ozeanen wird zu Dampf" },
  { process: "Kondensation", description: "Dampf wird zu Wolken in der Atmosphäre" },
  { process: "Niederschlag", description: "Regen fällt auf die Erde" },
  { process: "Versickerung", description: "Wasser fließt zurück zu Seen und Meeren" }
];

// Aggregatzustände
const STATES_OF_MATTER = [
  { state: "Fest", example: "Eis", property: "hat feste Form und Größe" },
  { state: "Flüssig", example: "Wasser", property: "hat Volumen, aber keine feste Form" },
  { state: "Gasförmig", example: "Wasserdampf", property: "hat keine feste Form oder Größe" }
];

const TEMPERATURE_CHANGES = [
  { process: "Schmelzen", description: "Eis wird warm und wird zu Wasser" },
  { process: "Gefrieren", description: "Wasser wird kalt und wird zu Eis" },
  { process: "Verdunstung", description: "Wasser wird warm und wird zu Dampf" },
  { process: "Kondensation", description: "Dampf wird kalt und wird zu Wasser" }
];

// Wasser im Leben
const WATER_USES = [
  { use: "Trinken", purpose: "zum Überleben notwendig" },
  { use: "Waschen", purpose: "für Hygiene und Sauberkeit" },
  { use: "Pflanzengießen", purpose: "Pflanzen brauchen Wasser zum Wachsen" },
  { use: "Kochen", purpose: "in der Küche zum Zubereiten von Speisen" }
];

// Tag & Jahreszeiten
const TIMES_OF_DAY = [
  { time: "Morgen", when: "6-12 Uhr", sun: "geht auf" },
  { time: "Mittag", when: "12 Uhr", sun: "hoch am Himmel" },
  { time: "Nachmittag", when: "12-18 Uhr", sun: "geht runter" },
  { time: "Nacht", when: "18-6 Uhr", sun: "unter dem Horizont" }
];

const SEASONS_DETAIL = [
  { season: "Frühling", months: "März-Mai", weather: "warm, regnerisch, Blüten blühen" },
  { season: "Sommer", months: "Juni-August", weather: "heiß und sonnig" },
  { season: "Herbst", months: "September-November", weather: "kühl, regnerisch, Blätter fallen" },
  { season: "Winter", months: "Dezember-Februar", weather: "kalt, oft schneig" }
];

// THEME 5: BERUFE & FAMILIE

// Verschiedene Berufe
const PROFESSIONS = [
  { job: "Lehrer", workplace: "Schule", tools: "Tafel, Bücher", activity: "unterrichtet Schüler" },
  { job: "Arzt/Ärztin", workplace: "Praxis/Krankenhaus", tools: "Stethoskop, Spritze", activity: "behandelt Patienten" },
  { job: "Polizist/Polizistin", workplace: "Polizeistation", tools: "Auto, Funken", activity: "hilft und schützt Menschen" },
  { job: "Feuerwehrmann/-frau", workplace: "Feuerwache", tools: "Schlauch, Leiter", activity: "löscht Feuer" },
  { job: "Gärtner/Gärtnerin", workplace: "Garten/Park", tools: "Spaten, Schaufel", activity: "pflanzt und pflegt Pflanzen" }
];

// Was machen Berufe
const JOB_TASKS = [
  { job: "Bäcker", task: "backt Brot und Brötchen in der Bäckerei" },
  { job: "Mechaniker", task: "repariert Autos in der Werkstatt" },
  { job: "Verkäufer", task: "verkauft Waren im Geschäft" },
  { job: "Farmer", task: "züchtet Tiere und baut Gemüse an" }
];

// Familie & Rollen
const FAMILY_ROLES = [
  { member: "Vater", role: "Elternteil, schützt und versorgt die Familie" },
  { member: "Mutter", role: "Elternteil, schützt und versorgt die Familie" },
  { member: "Bruder/Schwester", role: "Geschwister, spielen zusammen und helfen sich" },
  { member: "Großeltern", role: "Großvater/Großmutter, teilen Erfahrungen und Liebe" }
];

// Zusammenleben & Hilfe
const FAMILY_COOPERATION = [
  { activity: "Hausarbeit teilen", example: "einer spült, einer wischt" },
  { activity: "Beim Einkaufen helfen", example: "Tüten tragen und Geld geben" },
  { activity: "Jüngere unterstützen", example: "beim Lernen helfen, spielen" },
  { activity: "Gemeinsam essen", example: "Mahlzeiten mit der Familie" }
];

// THEME 6: SICHERHEIT

// Unfallprävention
const ACCIDENT_PREVENTION = [
  { danger: "Treppe", rule: "langsam gehen, Geländer halten" },
  { danger: "Scharfe Gegenstände", rule: "vorsichtig umgehen, nicht spielen" },
  { danger: "Heißes Wasser/Feuer", rule: "nicht anfassen, immer einen Erwachsenen fragen" },
  { danger: "Fenster/Balkone", rule: "nicht hinauslehnen" },
  { danger: "Spielplatz", rule: "vorsichtig klettern, mit anderen absprechen" }
];

// Verkehrssicherheit
const TRAFFIC_SAFETY = [
  { rule: "Fußgänger", tip: "auf Gehweg bleiben, Ampel beachten" },
  { rule: "Radfahrer", tip: "Fahrradweg nutzen, Helm tragen" },
  { rule: "Auto-Passagier", tip: "Sicherheitsgurt anlegen, Autositz verwenden" },
  { rule: "Dunkelheit", tip: "helle Kleidung tragen oder Reflektoren nutzen" }
];

// Erste Hilfe Basics
const FIRST_AID = [
  { injury: "Schürfwunde", action: "reinigen, Pflaster aufkleben" },
  { injury: "Kleine Verbrennung", action: "mit kaltem Wasser kühlen, Verband machen" },
  { injury: "Blutung", action: "mit sauberer Binde abdrücken" },
  { injury: "Beule", action: "Eis auflegen, hoch lagern" }
];

// Notsituationen
const EMERGENCY_SITUATIONS = [
  { situation: "Feuer im Haus", action: "sicherer Platz, 112 anrufen" },
  { situation: "Verletzter Mensch", action: "Erwachsenen holen oder 112 anrufen" },
  { situation: "Verdachtsmoment", action: "mit vertrautem Erwachsenen sprechen" },
  { situation: "Verloren", action: "beim Polizisten oder Geschäftsmann um Hilfe bitten" }
];

// ─── GENERATOR FUNCTIONS ────────────────────────────────────────────────────

export function generateErnährungVerdauung(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const data = pick(FOOD_GROUPS, rng);
      q.push(createMCQ("sachkunde", "ernährung_verdauung",
        `Welche Lebensmittel gehören zur Gruppe "${data.group}"?`, data.examples,
        FOOD_GROUPS.filter(f => f.group !== data.group).map(f => f.examples)));
    } else if (type === 1) {
      const food = pick(HEALTHY_FOODS, rng);
      q.push(createMCQ("sachkunde", "ernährung_verdauung",
        `Ist ${food} gesund?`, "Ja, sehr gesund", ["Nein, ungesund", "manchmal", "nur für Erwachsene"]));
    } else if (type === 2) {
      const part = pick(DIGESTIVE_SYSTEM, rng);
      q.push(createMCQ("sachkunde", "ernährung_verdauung",
        `Was macht der ${part.part}?`, part.function,
        DIGESTIVE_SYSTEM.filter(p => p.part !== part.part).map(p => p.function)));
    } else {
      const unhealthy = pick(UNHEALTHY_FOODS, rng);
      q.push(createMCQ("sachkunde", "ernährung_verdauung",
        `Sollte man jeden Tag ${unhealthy} essen?`, "Nein, zu schädlich für die Zähne",
        ["Ja, sehr gesund", "ja, beim Frühstück", "nur freitags"]));
    }
  }

  return q;
}

export function generateZahngesundheit(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      q.push(createMCQ("sachkunde", "zahngesundheit",
        `Wie oft sollte man die Zähne putzen?`, "zweimal täglich (morgens und abends)",
        ["einmal täglich", "nie", "nur vor dem Schlafengehen"]));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "zahngesundheit",
        `Was ist schlecht für die Zähne?`, "zu viel Zucker",
        ["Obst", "Gemüse", "Milch"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "zahngesundheit",
        `Was machen Milchzähne?`, "fallen aus und werden durch bleibende Zähne ersetzt",
        ["bleiben ihr ganzes Leben", "wachsen nur einmal", "verliert man alle mit 10 Jahren"]));
    } else {
      q.push(createMCQ("sachkunde", "zahngesundheit",
        `Was hilft bei Zahnproblemen?`, "zum Zahnarzt gehen",
        ["Zucker essen", "mehr schlafen", "weniger Wasser trinken"]));
    }
  }

  return q;
}

export function generateBewegungKörperpflege(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const activity = pick(PHYSICAL_ACTIVITIES, rng);
      q.push(createMCQ("sachkunde", "bewegung_körperpflege",
        `Welcher Vorteil hat ${activity.activity}?`, activity.benefit,
        PHYSICAL_ACTIVITIES.filter(a => a.activity !== activity.activity).map(a => a.benefit)));
    } else if (type === 1) {
      const habit = pick(HYGIENE_HABITS, rng);
      q.push(createMCQ("sachkunde", "bewegung_körperpflege",
        `Wann sollte man ${habit.habit}?`, habit.when,
        ["nie", "nur samstags", "nur im Sommer"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "bewegung_körperpflege",
        `Wie lange sollten Kinder täglich Sport treiben?`, "mindestens 30-60 Minuten",
        ["keine Zeit", "nur auf Aufforderung", "5 Minuten"]));
    } else {
      q.push(createMCQ("sachkunde", "bewegung_körperpflege",
        `Warum ist Bewegung wichtig?`, "für starke Muskeln und ein gesundes Herz",
        ["zum Faulenzen", "nicht wichtig", "nur für Erwachsene"]));
    }
  }

  return q;
}

export function generateSchlafRuhe(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      q.push(createMCQ("sachkunde", "schlaf_ruhe",
        `Wie viel Schlaf brauchen Kinder pro Nacht?`, "8-10 Stunden",
        ["4-5 Stunden", "12-14 Stunden", "keine Zeit nötig"]));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "schlaf_ruhe",
        `Hilft ausreichend Schlaf beim Lernen?`, "ja, sehr wichtig",
        ["nein, gar nicht", "nur manchmal", "nur für große Schüler"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "schlaf_ruhe",
        `Was sollte man vor dem Schlafengehen vermeiden?`, "zu viel spielen und Bildschirme",
        ["Abendbrot essen", "ein Glas Wasser trinken", "Zähne putzen"]));
    } else {
      q.push(createMCQ("sachkunde", "schlaf_ruhe",
        `Warum ist ein regelmäßiger Schlafrhythmus wichtig?`, "damit der Körper sich erholt und man wach ist",
        ["um länger zu spielen", "nicht wichtig", "nur für Babys"]));
    }
  }

  return q;
}

export function generateLebensräume(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const habitat = pick(HABITATS, rng);
      q.push(createMCQ("sachkunde", "lebensräume",
        `Welche Tiere leben in einem ${habitat.habitat}?`, habitat.animals,
        HABITATS.filter(h => h.habitat !== habitat.habitat).map(h => h.animals)));
    } else if (type === 1) {
      const habitat = pick(HABITATS, rng);
      q.push(createMCQ("sachkunde", "lebensräume",
        `Welcher Lebensraum ist ${habitat.habitat}?`, `ein Ort mit ${habitat.climate}en Bedingungen`,
        ["eine Schule", "ein Auto", "ein Spielzeug"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "lebensräume",
        `Wo finden Fische ihren Lebensraum?`, "im Wasser (Fluss oder See)",
        ["in der Luft", "im Wald", "in der Stadt"]));
    } else {
      q.push(createMCQ("sachkunde", "lebensräume",
        `Was gehört zu einem Lebensraum?`, "der Ort und die Tiere, die dort leben",
        ["nur die Tiere", "nur der Ort", "nur Pflanzen"]));
    }
  }

  return q;
}

export function generateNahrungsketten(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const chain = pick(FOOD_CHAINS, rng);
      q.push(createMCQ("sachkunde", "nahrungsketten",
        `Was ist eine Nahrungskette?`, chain.chain,
        FOOD_CHAINS.filter(c => c.chain !== chain.chain).map(c => c.chain)));
    } else if (type === 1) {
      const pair = pick(PREDATOR_PREY, rng);
      q.push(createMCQ("sachkunde", "nahrungsketten",
        `Was frisst ein ${pair.predator}?`, pair.prey,
        ["Pflanzen", "Steine", "Metall"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "nahrungsketten",
        `Wo beginnt eine Nahrungskette?`, "bei den Pflanzen",
        ["bei den Tieren", "bei der Sonne", "überall"]));
    } else {
      q.push(createMCQ("sachkunde", "nahrungsketten",
        `Warum brauchen wir Nahrungsketten?`, "um zu verstehen, wie die Natur funktioniert",
        ["wir brauchen sie nicht", "zum Spielen", "nur im Unterricht"]));
    }
  }

  return q;
}

export function generateHaustierePflege(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const pet = pick(PET_CARE, rng);
      q.push(createMCQ("sachkunde", "haustiere_pflege",
        `Was frisst ein ${pet.pet}?`, pet.food,
        PET_CARE.filter(p => p.pet !== pet.pet).map(p => p.food)));
    } else if (type === 1) {
      const pet = pick(PET_CARE, rng);
      q.push(createMCQ("sachkunde", "haustiere_pflege",
        `Wie oft sollte man ein ${pet.pet} füttern?`, pet.frequency,
        ["1× pro Woche", "1× pro Monat", "nie"]));
    } else if (type === 2) {
      const pet = pick(PET_CARE, rng);
      q.push(createMCQ("sachkunde", "haustiere_pflege",
        `Was brauch ein ${pet.pet} außer Futter?`, pet.extra,
        ["nur Liebe", "Spielzeug", "nichts anderes"]));
    } else {
      q.push(createMCQ("sachkunde", "haustiere_pflege",
        `Welche Verantwortung hat man mit einem Haustier?`, "es täglich zu füttern und zu pflegen",
        ["gar keine", "nur zu spielen", "nichts zu tun"]));
    }
  }

  return q;
}

export function generateWildtiereAnpassung(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const animal = pick(WILD_ANIMAL_ADAPTATIONS, rng);
      q.push(createMCQ("sachkunde", "wildtiere_anpassung",
        `Wofür hat ein ${animal.animal} ${animal.adaptation}?`, animal.adaptation,
        WILD_ANIMAL_ADAPTATIONS.filter(a => a.animal !== animal.animal).map(a => a.adaptation)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "wildtiere_anpassung",
        `Wie helfen Stacheln beim Igel?`, "zur Verteidigung gegen Feinde",
        ["zum Schwimmen", "zum Graben", "zum Riechen"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "wildtiere_anpassung",
        `Warum haben manche Tiere weiße Federn?`, "zur Tarnung im Schnee",
        ["zum Fliegen", "zum Wärmen", "zum Sehen"]));
    } else {
      q.push(createMCQ("sachkunde", "wildtiere_anpassung",
        `Was ist eine Anpassung?`, "eine Fähigkeit, die ein Tier zum Überleben hat",
        ["ein Spielzeug", "eine Farbe", "ein Laut"]));
    }
  }

  return q;
}

export function generatePflanzenteile(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const part = pick(PLANT_PARTS, rng);
      q.push(createMCQ("sachkunde", "pflanzenteile",
        `Was macht der ${part.part}?`, part.function,
        PLANT_PARTS.filter(p => p.part !== part.part).map(p => p.function)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "pflanzenteile",
        `Wo sind die Wurzeln einer Pflanze?`, "unter der Erde",
        ["über der Erde", "auf dem Blatt", "in der Blüte"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "pflanzenteile",
        `Was macht das Blatt?`, "macht Nahrung durch Photosynthese",
        ["speichert Wasser", "wird zur Frucht", "trägt Farbe"]));
    } else {
      q.push(createMCQ("sachkunde", "pflanzenteile",
        `Welcher Pflanzenteil wird zur Frucht?`, "die Blüte",
        ["das Blatt", "der Stängel", "die Wurzel"]));
    }
  }

  return q;
}

export function generateWachstumLebenszyklus(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const stage = pick(PLANT_LIFECYCLE, rng);
      q.push(createMCQ("sachkunde", "wachstum_lebenszyklus",
        `Was ist ein ${stage.stage}?`, stage.description,
        PLANT_LIFECYCLE.filter(s => s.stage !== stage.stage).map(s => s.description)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "wachstum_lebenszyklus",
        `Was kommt nach der Blüte?`, "die Frucht",
        ["der Samen", "das Blatt", "die Wurzel"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "wachstum_lebenszyklus",
        `Wie lange dauert der Lebenszyklus einer Pflanze?`, "von Samenkorn bis zur reifen Frucht (Monate bis Jahre)",
        ["1 Tag", "1 Woche", "1 Stunde"]));
    } else {
      q.push(createMCQ("sachkunde", "wachstum_lebenszyklus",
        `Was passiert, wenn Samen zu Boden fallen?`, "sie können keimen und zu neuen Pflanzen wachsen",
        ["sie sterben sofort", "sie können nicht wachsen", "nichts passiert"]));
    }
  }

  return q;
}

export function generateSamenZurBlüte(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const condition = pick(SEED_CONDITIONS, rng);
      q.push(createMCQ("sachkunde", "samen_zur_blüte",
        `Warum brauchen Samen ${condition.condition}?`, condition.why,
        SEED_CONDITIONS.filter(c => c.condition !== condition.condition).map(c => c.why)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "samen_zur_blüte",
        `Was braucht ein Samenkorn zum Keimen?`, "Wasser, Licht, Wärme und Nährstoffe",
        ["nur Dunkelheit", "nur Kälte", "nur Luft"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "samen_zur_blüte",
        `Wie lange dauert es, bis aus einem Samenkorn eine Blüte wächst?`, "mehrere Wochen bis Monate",
        ["1 Tag", "1 Stunde", "1 Minute"]));
    } else {
      q.push(createMCQ("sachkunde", "samen_zur_blüte",
        `Was zeigt, dass ein Samenkorn keimt?`, "kleine Wurzeln und Blätter wachsen",
        ["es wird größer", "es wird farbig", "es dreht sich"]));
    }
  }

  return q;
}

export function generateNützlichePflanzen(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const plant = pick(USEFUL_PLANTS, rng);
      q.push(createMCQ("sachkunde", "nützliche_pflanzen",
        `Was wird aus ${plant.plant} gemacht?`, plant.use,
        USEFUL_PLANTS.filter(p => p.plant !== plant.plant).map(p => p.use)));
    } else if (type === 1) {
      const plant = pick(USEFUL_PLANTS, rng);
      q.push(createMCQ("sachkunde", "nützliche_pflanzen",
        `Ist ${plant.plant} eine nützliche Pflanze?`, "ja, Menschen nutzen sie",
        ["nein, nicht nützlich", "nur für Tiere", "nie"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "nützliche_pflanzen",
        `Was ist Getreide?`, "Pflanzen wie Weizen und Hafer, die zu Brot verarbeitet werden",
        ["eine Frucht", "ein Gemüse", "ein Kraut"]));
    } else {
      q.push(createMCQ("sachkunde", "nützliche_pflanzen",
        `Welche Pflanzen essen wir?`, "Obst, Gemüse und Getreide",
        ["nur Blüten", "nur Wurzeln", "nur Blätter"]));
    }
  }

  return q;
}

export function generateWasserkreislauf(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const process = pick(WATER_CYCLE, rng);
      q.push(createMCQ("sachkunde", "wasserkreislauf",
        `Was ist ${process.process}?`, process.description,
        WATER_CYCLE.filter(p => p.process !== process.process).map(p => p.description)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "wasserkreislauf",
        `Wie entsteht Regen?`, "Wasser verdampft, kondensiert zu Wolken, und fällt als Regen",
        ["Wolken gießen Wasser", "die Sonne regnet", "Seen gießen Wasser"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "wasserkreislauf",
        `Wohin geht das Regenwasser?`, "zu Seen und Meeren, wo es verdunstet",
        ["in den Himmel", "nirgendwohin", "in die Luft"]));
    } else {
      q.push(createMCQ("sachkunde", "wasserkreislauf",
        `Welche Rolle spielt die Sonne beim Wasserkreislauf?`, "sie lässt Wasser verdunsteln",
        ["sie trinkt das Wasser", "sie kühlt das Wasser", "sie hat keine Rolle"]));
    }
  }

  return q;
}

export function generateAggregatzustände(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const state = pick(STATES_OF_MATTER, rng);
      q.push(createMCQ("sachkunde", "aggregatzustände",
        `Welcher Aggregatzustand ist das? ${state.example}`, state.state,
        STATES_OF_MATTER.filter(s => s.state !== state.state).map(s => s.state)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "aggregatzustände",
        `Welche Eigenschaft hat ein flüssiger Stoff?`, "hat Volumen, aber keine feste Form",
        ["hat feste Form", "hat keine Größe", "ist unsichtbar"]));
    } else if (type === 2) {
      const change = pick(TEMPERATURE_CHANGES, rng);
      q.push(createMCQ("sachkunde", "aggregatzustände",
        `Was ist ${change.process}?`, change.description,
        TEMPERATURE_CHANGES.filter(c => c.process !== change.process).map(c => c.description)));
    } else {
      q.push(createMCQ("sachkunde", "aggregatzustände",
        `Was passiert, wenn man Wasser erwarmt?`, "es verdunstet zu Dampf",
        ["es erstarrt", "es gefriert", "es bleibt gleich"]));
    }
  }

  return q;
}

export function generateWasserImLeben(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const use = pick(WATER_USES, rng);
      q.push(createMCQ("sachkunde", "wasser_im_leben",
        `Wofür brauchen wir Wasser zum ${use.use}?`, use.purpose,
        WATER_USES.filter(w => w.use !== use.use).map(w => w.purpose)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "wasser_im_leben",
        `Wie viel Wasser sollte man pro Tag trinken?`, "mehrere Gläser (etwa 1-1.5 Liter)",
        ["1 Schluck", "10 Liter", "gar kein Wasser"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "wasser_im_leben",
        `Ist Wasser wichtig für das Leben?`, "ja, Menschen, Tiere und Pflanzen brauchen es",
        ["nein, nicht wichtig", "nur für Fische", "nur für Pflanzen"]));
    } else {
      q.push(createMCQ("sachkunde", "wasser_im_leben",
        `Wo gibt es Wasser?`, "in Flüssen, Seen, Meeren und Wolken",
        ["nur im Meer", "nur in Flüssen", "nur in Gläsern"]));
    }
  }

  return q;
}

export function generateTagJahreszeiten(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const time = pick(TIMES_OF_DAY, rng);
      q.push(createMCQ("sachkunde", "tag_jahreszeiten",
        `Wann ist ${time.time}?`, time.when,
        TIMES_OF_DAY.filter(t => t.time !== time.time).map(t => t.when)));
    } else if (type === 1) {
      const season = pick(SEASONS_DETAIL, rng);
      q.push(createMCQ("sachkunde", "tag_jahreszeiten",
        `Wann ist ${season.season}?`, season.months,
        SEASONS_DETAIL.filter(s => s.season !== season.season).map(s => s.months)));
    } else if (type === 2) {
      const season = pick(SEASONS_DETAIL, rng);
      q.push(createMCQ("sachkunde", "tag_jahreszeiten",
        `Wie ist das Wetter im ${season.season}?`, season.weather,
        SEASONS_DETAIL.filter(s => s.season !== season.season).map(s => s.weather)));
    } else {
      q.push(createMCQ("sachkunde", "tag_jahreszeiten",
        `Wie viele Jahreszeiten gibt es?`, "vier",
        ["zwei", "drei", "fünf"]));
    }
  }

  return q;
}

export function generateVerschiedeneBerufe(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const profession = pick(PROFESSIONS, rng);
      q.push(createMCQ("sachkunde", "verschiedene_berufe",
        `Wo arbeitet ein ${profession.job}?`, profession.workplace,
        PROFESSIONS.filter(p => p.job !== profession.job).map(p => p.workplace)));
    } else if (type === 1) {
      const profession = pick(PROFESSIONS, rng);
      q.push(createMCQ("sachkunde", "verschiedene_berufe",
        `Was macht ein ${profession.job}?`, profession.activity,
        PROFESSIONS.filter(p => p.job !== profession.job).map(p => p.activity)));
    } else if (type === 2) {
      const profession = pick(PROFESSIONS, rng);
      q.push(createMCQ("sachkunde", "verschiedene_berufe",
        `Welche Werkzeuge braucht ein ${profession.job}?`, profession.tools,
        PROFESSIONS.filter(p => p.job !== profession.job).map(p => p.tools)));
    } else {
      q.push(createMCQ("sachkunde", "verschiedene_berufe",
        `Ist Lehrer ein wichtiger Beruf?`, "ja, sehr wichtig - unterrichtet Schüler",
        ["nein, nicht wichtig", "nur manchmal", "nicht für Kinder"]));
    }
  }

  return q;
}

export function generateWasMachenBerufe(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const task = pick(JOB_TASKS, rng);
      q.push(createMCQ("sachkunde", "was_machen_berufe",
        `Was ist der Beruf eines ${task.job}?`, task.task,
        JOB_TASKS.filter(j => j.job !== task.job).map(j => j.task)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "was_machen_berufe",
        `Wo arbeitet ein Mechaniker?`, "in einer Werkstatt, repariert Autos",
        ["auf einem Bauernhof", "im Wald", "im Wasser"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "was_machen_berufe",
        `Was macht ein Arzt?`, "behandelt kranke Menschen",
        ["repariert Autos", "backt Brot", "pflanzt Blumen"]));
    } else {
      q.push(createMCQ("sachkunde", "was_machen_berufe",
        `Helfen Berufe den Menschen?`, "ja, sehr - jeder Beruf ist wichtig",
        ["nein, nicht wirklich", "nur einige", "keine"]));
    }
  }

  return q;
}

export function generateFamilieRollen(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const role = pick(FAMILY_ROLES, rng);
      q.push(createMCQ("sachkunde", "familie_rollen",
        `Was ist die Rolle eines ${role.member}?`, role.role,
        FAMILY_ROLES.filter(r => r.member !== role.member).map(r => r.role)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "familie_rollen",
        `Welche Rolle haben Geschwister?`, "spielen zusammen und helfen sich",
        ["bestimmen alles", "nur älter sein", "nichts zu tun"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "familie_rollen",
        `Wer sorgt für eine Familie?`, "Eltern (Vater und Mutter)",
        ["nur der Vater", "nur die Mutter", "die Kinder"]));
    } else {
      q.push(createMCQ("sachkunde", "familie_rollen",
        `Sind Großeltern wichtig?`, "ja, sie teilen Erfahrungen und Liebe",
        ["nein", "nur manchmal", "nicht wirklich"]));
    }
  }

  return q;
}

export function generateZusammenlebenHilfe(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const activity = pick(FAMILY_COOPERATION, rng);
      q.push(createMCQ("sachkunde", "zusammenleben_hilfe",
        `Was ist ein Beispiel für Zusammenarbeit?`, activity.example,
        FAMILY_COOPERATION.filter(a => a.activity !== activity.activity).map(a => a.example)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "zusammenleben_hilfe",
        `Sollte man seine Familie im Haushalt unterstützen?`, "ja, jeder kann helfen",
        ["nein, nicht nötig", "nur manchmal", "nicht wichtig"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "zusammenleben_hilfe",
        `Wie kann man älteren Menschen helfen?`, "Einkaufen tragen, beim Putzen helfen, Besuche machen",
        ["gar nicht", "nur mit Geld", "nicht möglich"]));
    } else {
      q.push(createMCQ("sachkunde", "zusammenleben_hilfe",
        `Warum ist Familie wichtig?`, "wir brauchen Liebe, Schutz und gegenseitige Hilfe",
        ["sie sind nervig", "nicht wichtig", "nur zum Spielen"]));
    }
  }

  return q;
}

export function generateUnfallprävention(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const danger = pick(ACCIDENT_PREVENTION, rng);
      q.push(createMCQ("sachkunde", "unfallprävention",
        `Wie kann man sich vor Unfällen mit ${danger.danger} schützen?`, danger.rule,
        ACCIDENT_PREVENTION.filter(a => a.danger !== danger.danger).map(a => a.rule)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "unfallprävention",
        `Ist Spielen auf einem Spielplatz sicher?`, "ja, wenn man vorsichtig ist",
        ["nie sicher", "nur mit Erwachsenen", "sehr gefährlich"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "unfallprävention",
        `Was sollte man mit scharfen Gegenständen machen?`, "vorsichtig umgehen und nicht damit spielen",
        ["herumspielen", "anderen werfen", "ignorieren"]));
    } else {
      q.push(createMCQ("sachkunde", "unfallprävention",
        `Warum ist Unfallprävention wichtig?`, "um nicht verletzt zu werden",
        ["nicht wichtig", "nur für Erwachsene", "nur in der Schule"]));
    }
  }

  return q;
}

export function generateVerkehrssicherheit(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const rule = pick(TRAFFIC_SAFETY, rng);
      q.push(createMCQ("sachkunde", "verkehrssicherheit",
        `Was ist wichtig für ${rule.rule}?`, rule.tip,
        TRAFFIC_SAFETY.filter(r => r.rule !== rule.rule).map(r => r.tip)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "verkehrssicherheit",
        `Sollte man einen Fahrradhelm tragen?`, "ja, immer - zum Schutz des Kopfes",
        ["nein, nicht nötig", "nur manchmal", "nur bei Regen"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "verkehrssicherheit",
        `Wo sollte man auf der Straße gehen?`, "auf dem Gehweg oder Fußweg",
        ["auf der Fahrbahn", "überall", "in der Mitte der Straße"]));
    } else {
      q.push(createMCQ("sachkunde", "verkehrssicherheit",
        `Was ist eine helle Kleidung beim Auto fahren?`, "zum Sehen und Erkannt werden im Dunkeln",
        ["nicht wichtig", "nur cool", "nur im Sommer"]));
    }
  }

  return q;
}

export function generateErsteHilfeBasics(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const injury = pick(FIRST_AID, rng);
      q.push(createMCQ("sachkunde", "erste_hilfe_basics",
        `Was macht man bei einer ${injury.injury}?`, injury.action,
        FIRST_AID.filter(f => f.injury !== injury.injury).map(f => f.action)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "erste_hilfe_basics",
        `Wenn dein Freund sich schneidet, was tust du?`, "Wunde reinigen, mit Binde abdrücken",
        ["ignorieren", "sagen, es geht vorbei", "lachen"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "erste_hilfe_basics",
        `Was hilft bei einer Beule?`, "Eis auflegen und hoch lagern",
        ["Wasser", "Sonne", "gar nichts"]));
    } else {
      q.push(createMCQ("sachkunde", "erste_hilfe_basics",
        `Wann sollte man einen Erwachsenen holen?`, "bei ernsthaften Verletzungen sofort",
        ["nie", "später vielleicht", "nur am Wochenende"]));
    }
  }

  return q;
}

export function generateNotsituationen(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const situation = pick(EMERGENCY_SITUATIONS, rng);
      q.push(createMCQ("sachkunde", "notsituationen",
        `Was machst du bei ${situation.situation}?`, situation.action,
        EMERGENCY_SITUATIONS.filter(s => s.situation !== situation.situation).map(s => s.action)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "notsituationen",
        `Welche Nummer rufst du bei einem Notfall an?`, "112",
        ["110", "100", "999"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "notsituationen",
        `Wenn du verloren bist, was tust du?`, "bei einem Polizisten oder Geschäftsmann um Hilfe bitten",
        ["weglaufen", "herumscrienen", "nach Hause gehen"]));
    } else {
      q.push(createMCQ("sachkunde", "notsituationen",
        `Was ist ein Notfall?`, "eine gefährliche Situation, in der Hilfe nötig ist",
        ["ein Spiel", "ein Spaß", "nicht wichtig"]));
    }
  }

  return q;
}

// ─── GENERATOR MAP ──────────────────────────────────────────────────────────

export const G2_Generators_Sachkunde = {
  ernährung_verdauung: generateErnährungVerdauung,
  zahngesundheit: generateZahngesundheit,
  bewegung_körperpflege: generateBewegungKörperpflege,
  schlaf_ruhe: generateSchlafRuhe,
  lebensräume: generateLebensräume,
  nahrungsketten: generateNahrungsketten,
  haustiere_pflege: generateHaustierePflege,
  wildtiere_anpassung: generateWildtiereAnpassung,
  pflanzenteile: generatePflanzenteile,
  wachstum_lebenszyklus: generateWachstumLebenszyklus,
  samen_zur_blüte: generateSamenZurBlüte,
  nützliche_pflanzen: generateNützlichePflanzen,
  wasserkreislauf: generateWasserkreislauf,
  aggregatzustände: generateAggregatzustände,
  wasser_im_leben: generateWasserImLeben,
  tag_jahreszeiten: generateTagJahreszeiten,
  verschiedene_berufe: generateVerschiedeneBerufe,
  was_machen_berufe: generateWasMachenBerufe,
  familie_rollen: generateFamilieRollen,
  zusammenleben_hilfe: generateZusammenlebenHilfe,
  unfallprävention: generateUnfallprävention,
  verkehrssicherheit: generateVerkehrssicherheit,
  erste_hilfe_basics: generateErsteHilfeBasics,
  notsituationen: generateNotsituationen
};
