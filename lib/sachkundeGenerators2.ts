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
  { habitat: "Wiese", animals: "Schaf, Kuh, Schmetterling", climate: "gemäßigt" },
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
        FOOD_GROUPS.filter(f => f.group !== data.group).map(f => f.examples), rng));
    } else if (type === 1) {
      const food = pick(HEALTHY_FOODS, rng);
      q.push(createMCQ("sachkunde", "ernährung_verdauung",
        `Ist ${food} gesund?`, "Ja, sehr gesund", ["Nein, ungesund", "manchmal", "nur für Erwachsene"], rng));
    } else if (type === 2) {
      const part = pick(DIGESTIVE_SYSTEM, rng);
      q.push(createMCQ("sachkunde", "ernährung_verdauung",
        `Was macht der ${part.part}?`, part.function,
        DIGESTIVE_SYSTEM.filter(p => p.part !== part.part).map(p => p.function), rng));
    } else {
      const unhealthy = pick(UNHEALTHY_FOODS, rng);
      q.push(createMCQ("sachkunde", "ernährung_verdauung",
        `Sollte man jeden Tag ${unhealthy} essen?`, "Nein, zu schädlich",
        ["Ja, sehr gesund", "ja, beim Frühstück", "nur freitags"], rng));
    }
  }

  return q;
}

export function generateZahngesundheit(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const BRUSH_QUESTIONS = [
    { q: "Wie oft sollte man die Zähne putzen?", a: "zweimal täglich (morgens und abends)", w: ["einmal täglich", "nie", "nur vor dem Schlafengehen"] },
    { q: "Wann putzt man die Zähne am besten?", a: "morgens und abends", w: ["nur abends", "nur morgens", "einmal pro Woche"] },
    { q: "Wie lange sollte man die Zähne putzen?", a: "mindestens 2 Minuten", w: ["10 Sekunden", "5 Minuten", "nur kurz"] },
    { q: "Was hilft beim Zähneputzen außer der Bürste?", a: "Zahnpasta mit Fluorid", w: ["Seife", "Shampoo", "Wasser allein reicht"] },
  ];
  const TOOTH_HARM_QUESTIONS = [
    { q: "Was ist schlecht für die Zähne?", a: "zu viel Zucker", w: ["Obst", "Gemüse", "Milch"] },
    { q: "Welches Getränk schadet den Zähnen am meisten?", a: "Limonade und Cola", w: ["Wasser", "Milch", "Tee ohne Zucker"] },
    { q: "Was fördert Karies?", a: "häufig Süßigkeiten essen", w: ["Äpfel essen", "Wasser trinken", "Zähne putzen"] },
    { q: "Was sollte man nach dem Essen von Süßigkeiten tun?", a: "Zähne putzen oder Mund ausspülen", w: ["mehr Süßes essen", "nichts tun", "Saft trinken"] },
  ];
  const MILCHZAEHNE_QUESTIONS = [
    { q: "Was sind Milchzähne?", a: "die ersten Zähne, die später durch bleibende Zähne ersetzt werden", w: ["Zähne, die ein Leben lang bleiben", "Zähne aus Milch", "Zähne, die nicht fallen"] },
    { q: "Wann fallen Milchzähne aus?", a: "wenn die bleibenden Zähne nachwachsen (meist ab 6 Jahren)", w: ["nie", "mit 2 Jahren", "erst mit 20 Jahren"] },
    { q: "Wie viele Milchzähne hat ein Kind?", a: "20 Milchzähne", w: ["10 Milchzähne", "32 Milchzähne", "15 Milchzähne"] },
    { q: "Was passiert nach den Milchzähnen?", a: "die bleibenden Zähne wachsen nach", w: ["gar nichts", "man hat dann keine Zähne", "Milchzähne wachsen wieder"] },
  ];
  const DENTIST_QUESTIONS = [
    { q: "Was hilft bei Zahnproblemen?", a: "zum Zahnarzt gehen", w: ["Zucker essen", "mehr schlafen", "weniger Wasser trinken"] },
    { q: "Wie oft sollte man zum Zahnarzt gehen?", a: "mindestens zweimal im Jahr", w: ["nur bei Schmerzen", "einmal im Leben", "nie nötig"] },
    { q: "Was macht der Zahnarzt beim Kontrolltermin?", a: "Zähne untersuchen und reinigen", w: ["Haare schneiden", "Augen prüfen", "Blutdruck messen"] },
    { q: "Warum ist der Zahnarzt wichtig?", a: "er erkennt Karies früh und hilft Zähne zu schützen", w: ["nur zum Spaß", "nicht wichtig", "nur für Erwachsene"] },
  ];
  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const item = pick(BRUSH_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "zahngesundheit", item.q, item.a, item.w, rng));
    } else if (type === 1) {
      const item = pick(TOOTH_HARM_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "zahngesundheit", item.q, item.a, item.w, rng));
    } else if (type === 2) {
      const item = pick(MILCHZAEHNE_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "zahngesundheit", item.q, item.a, item.w, rng));
    } else {
      const item = pick(DENTIST_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "zahngesundheit", item.q, item.a, item.w, rng));
    }
  }

  return q;
}

export function generateBewegungKörperpflege(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const MOVEMENT_DURATION_QUESTIONS = [
    { q: "Wie lange sollten Kinder täglich Sport treiben?", a: "mindestens 30-60 Minuten", w: ["keine Zeit", "nur auf Aufforderung", "5 Minuten"] },
    { q: "Wie oft in der Woche sollten Kinder Sport treiben?", a: "jeden Tag oder fast jeden Tag", w: ["einmal im Monat", "einmal im Jahr", "gar nicht"] },
    { q: "Was ist eine gute tägliche Aktivität für Kinder?", a: "laufen, spielen, Rad fahren", w: ["den ganzen Tag sitzen", "nur schlafen", "nur Hausaufgaben machen"] },
    { q: "Wann ist der beste Zeitpunkt für Bewegung?", a: "regelmäßig, am besten täglich", w: ["nur am Wochenende", "nur im Sommer", "nie"] },
  ];
  const MOVEMENT_WHY_QUESTIONS = [
    { q: "Warum ist Bewegung wichtig?", a: "für starke Muskeln und ein gesundes Herz", w: ["zum Faulenzen", "nicht wichtig", "nur für Erwachsene"] },
    { q: "Was stärkt Bewegung beim Kind?", a: "Muskeln, Knochen und das Herz", w: ["nur die Zähne", "nur das Gehirn", "nichts Besonderes"] },
    { q: "Was passiert, wenn Kinder sich zu wenig bewegen?", a: "sie werden weniger fit und können ungesund werden", w: ["sie werden stärker", "sie schlafen besser", "nichts passiert"] },
    { q: "Welchen Vorteil hat Sport für die Gesundheit?", a: "er hält Körper und Geist fit", w: ["keinen", "nur die Füße werden stärker", "nur Erwachsene profitieren"] },
  ];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const activity = pick(PHYSICAL_ACTIVITIES, rng);
      q.push(createMCQ("sachkunde", "bewegung_körperpflege",
        `Welcher Vorteil hat ${activity.activity}?`, activity.benefit,
        PHYSICAL_ACTIVITIES.filter(a => a.activity !== activity.activity).map(a => a.benefit), rng));
    } else if (type === 1) {
      const habit = pick(HYGIENE_HABITS, rng);
      q.push(createMCQ("sachkunde", "bewegung_körperpflege",
        `Wann sollte man ${habit.habit}?`, habit.when,
        ["nie", "nur samstags", "nur im Sommer"], rng));
    } else if (type === 2) {
      const item = pick(MOVEMENT_DURATION_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "bewegung_körperpflege", item.q, item.a, item.w, rng));
    } else {
      const item = pick(MOVEMENT_WHY_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "bewegung_körperpflege", item.q, item.a, item.w, rng));
    }
  }

  return q;
}

export function generateSchlafRuhe(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const SLEEP_HOURS_QUESTIONS = [
    { q: "Wie viele Stunden Schlaf brauchen Kinder pro Nacht?", a: "8-10 Stunden", w: ["4-5 Stunden", "12-14 Stunden", "2-3 Stunden"] },
    { q: "Ist 6 Stunden Schlaf genug für ein Kind?", a: "nein, Kinder brauchen 8-10 Stunden", w: ["ja, das reicht", "ja, sogar zu viel", "ja, 6 Stunden sind ideal"] },
    { q: "Was passiert, wenn Kinder zu wenig schlafen?", a: "sie sind müde und können sich schlecht konzentrieren", w: ["sie werden stärker", "sie lernen besser", "nichts passiert"] },
    { q: "Wie viel Schlaf empfehlen Ärzte für Grundschulkinder?", a: "etwa 9-10 Stunden", w: ["5-6 Stunden", "13-14 Stunden", "1-2 Stunden"] },
  ];
  const SLEEP_LEARNING_QUESTIONS = [
    { q: "Hilft ausreichend Schlaf beim Lernen?", a: "ja, im Schlaf werden Informationen gespeichert", w: ["nein, gar nicht", "nur bei Erwachsenen", "nur manchmal"] },
    { q: "Was passiert mit dem Gehirn im Schlaf?", a: "es verarbeitet und speichert das Gelernte", w: ["es macht gar nichts", "es schläft komplett ab", "es vergisst alles"] },
    { q: "Warum sollte man vor einer Schularbeit gut schlafen?", a: "damit man ausgeruht und konzentriert ist", w: ["das macht keinen Unterschied", "lieber noch lernen als schlafen", "um früher aufzustehen"] },
    { q: "Was hilft, damit man gut schlafen kann?", a: "ein ruhiges, dunkles Zimmer und feste Schlafzeiten", w: ["laute Musik", "viel Essen kurz vor dem Schlafen", "Bildschirm bis zum Einschlafen"] },
  ];
  const SLEEP_ROUTINE_QUESTIONS = [
    { q: "Was sollte man vor dem Schlafengehen vermeiden?", a: "zu viel spielen und Bildschirme (Handy, Tablet)", w: ["Abendbrot essen", "ein Glas Wasser trinken", "Zähne putzen"] },
    { q: "Warum ist ein regelmäßiger Schlafrhythmus wichtig?", a: "damit der Körper sich jeden Tag zur gleichen Zeit erholt", w: ["um länger zu spielen", "nicht wichtig", "nur für Babys"] },
    { q: "Was ist ein gutes Ritual vor dem Schlafengehen?", a: "Buch lesen oder ruhige Musik hören", w: ["Videospiele spielen", "Fernsehen", "viel Süßigkeiten essen"] },
    { q: "Wann sollten Grundschulkinder ins Bett gehen?", a: "zwischen 19 und 21 Uhr, damit sie genug Schlaf bekommen", w: ["nach Mitternacht", "egal wann", "nur wenn man müde ist"] },
  ];
  const SLEEP_BODY_QUESTIONS = [
    { q: "Was passiert mit dem Körper während des Schlafens?", a: "er erholt sich und wächst", w: ["er schläft komplett ab", "er arbeitet härter", "er verbraucht viel Energie"] },
    { q: "Wächst man hauptsächlich während des Schlafens?", a: "ja, der Körper schüttet Wachstumshormone aus", w: ["nein, nur tagsüber", "nein, gar nicht", "nur beim Sport"] },
    { q: "Wie fühlt man sich nach ausreichend Schlaf?", a: "ausgeruht, wach und fit", w: ["genauso wie vorher", "noch müder", "schlechter als vorher"] },
    { q: "Was passiert, wenn man immer zu wenig schläft?", a: "man wird krank und unkonzentriert", w: ["man braucht weniger Schlaf", "man wird gesünder", "nichts Besonderes"] },
  ];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const item = pick(SLEEP_HOURS_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "schlaf_ruhe", item.q, item.a, item.w, rng));
    } else if (type === 1) {
      const item = pick(SLEEP_LEARNING_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "schlaf_ruhe", item.q, item.a, item.w, rng));
    } else if (type === 2) {
      const item = pick(SLEEP_ROUTINE_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "schlaf_ruhe", item.q, item.a, item.w, rng));
    } else {
      const item = pick(SLEEP_BODY_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "schlaf_ruhe", item.q, item.a, item.w, rng));
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
        HABITATS.filter(h => h.habitat !== habitat.habitat).map(h => h.animals), rng));
    } else if (type === 1) {
      const habitat = pick(HABITATS, rng);
      q.push(createMCQ("sachkunde", "lebensräume",
        `Welcher Lebensraum ist ${habitat.habitat}?`, `ein Ort mit ${habitat.climate}en Bedingungen`,
        ["eine Schule", "ein Auto", "ein Spielzeug"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "lebensräume",
        `Wo finden Fische ihren Lebensraum?`, "im Wasser (Fluss oder See)",
        ["in der Luft", "im Wald", "in der Stadt"], rng));
    } else {
      q.push(createMCQ("sachkunde", "lebensräume",
        `Was gehört zu einem Lebensraum?`, "der Ort und die Tiere, die dort leben",
        ["nur die Tiere", "nur der Ort", "nur Pflanzen"], rng));
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
        FOOD_CHAINS.filter(c => c.chain !== chain.chain).map(c => c.chain), rng));
    } else if (type === 1) {
      const pair = pick(PREDATOR_PREY, rng);
      q.push(createMCQ("sachkunde", "nahrungsketten",
        `Was frisst ein ${pair.predator}?`, pair.prey,
        ["Pflanzen", "Steine", "Metall"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "nahrungsketten",
        `Wo beginnt eine Nahrungskette?`, "bei den Pflanzen",
        ["bei den Tieren", "bei der Sonne", "überall"], rng));
    } else {
      q.push(createMCQ("sachkunde", "nahrungsketten",
        `Warum brauchen wir Nahrungsketten?`, "um zu verstehen, wie die Natur funktioniert",
        ["wir brauchen sie nicht", "zum Spielen", "nur im Unterricht"], rng));
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
        PET_CARE.filter(p => p.pet !== pet.pet).map(p => p.food), rng));
    } else if (type === 1) {
      const pet = pick(PET_CARE, rng);
      q.push(createMCQ("sachkunde", "haustiere_pflege",
        `Wie oft sollte man ein ${pet.pet} füttern?`, pet.frequency,
        ["1× pro Woche", "1× pro Monat", "nie"], rng));
    } else if (type === 2) {
      const pet = pick(PET_CARE, rng);
      q.push(createMCQ("sachkunde", "haustiere_pflege",
        `Was braucht ein ${pet.pet} außer Futter?`, pet.extra,
        ["nur Liebe", "Spielzeug", "nichts anderes"], rng));
    } else {
      q.push(createMCQ("sachkunde", "haustiere_pflege",
        `Welche Verantwortung hat man mit einem Haustier?`, "es täglich zu füttern und zu pflegen",
        ["gar keine", "nur zu spielen", "nichts zu tun"], rng));
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
        WILD_ANIMAL_ADAPTATIONS.filter(a => a.animal !== animal.animal).map(a => a.adaptation), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "wildtiere_anpassung",
        `Wie helfen Stacheln beim Igel?`, "zur Verteidigung gegen Feinde",
        ["zum Schwimmen", "zum Graben", "zum Riechen"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "wildtiere_anpassung",
        `Warum haben manche Tiere weiße Federn?`, "zur Tarnung im Schnee",
        ["zum Fliegen", "zum Wärmen", "zum Sehen"], rng));
    } else {
      q.push(createMCQ("sachkunde", "wildtiere_anpassung",
        `Was ist eine Anpassung?`, "eine Fähigkeit, die ein Tier zum Überleben hat",
        ["ein Spielzeug", "eine Farbe", "ein Laut"], rng));
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
        PLANT_PARTS.filter(p => p.part !== part.part).map(p => p.function), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "pflanzenteile",
        `Wo sind die Wurzeln einer Pflanze?`, "unter der Erde",
        ["über der Erde", "auf dem Blatt", "in der Blüte"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "pflanzenteile",
        `Was macht das Blatt?`, "macht Nahrung durch Photosynthese",
        ["speichert Wasser", "wird zur Frucht", "trägt Farbe"], rng));
    } else {
      q.push(createMCQ("sachkunde", "pflanzenteile",
        `Welcher Pflanzenteil wird zur Frucht?`, "die Blüte",
        ["das Blatt", "der Stängel", "die Wurzel"], rng));
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
        PLANT_LIFECYCLE.filter(s => s.stage !== stage.stage).map(s => s.description), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "wachstum_lebenszyklus",
        `Was kommt nach der Blüte?`, "die Frucht",
        ["der Samen", "das Blatt", "die Wurzel"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "wachstum_lebenszyklus",
        `Wie lange dauert der Lebenszyklus einer Pflanze?`, "von Samenkorn bis zur reifen Frucht (Monate bis Jahre)",
        ["1 Tag", "1 Woche", "1 Stunde"], rng));
    } else {
      q.push(createMCQ("sachkunde", "wachstum_lebenszyklus",
        `Was passiert, wenn Samen zu Boden fallen?`, "sie können keimen und zu neuen Pflanzen wachsen",
        ["sie sterben sofort", "sie können nicht wachsen", "nichts passiert"], rng));
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
        SEED_CONDITIONS.filter(c => c.condition !== condition.condition).map(c => c.why), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "samen_zur_blüte",
        `Was braucht ein Samenkorn zum Keimen?`, "Wasser, Licht, Wärme und Nährstoffe",
        ["nur Dunkelheit", "nur Kälte", "nur Luft"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "samen_zur_blüte",
        `Wie lange dauert es, bis aus einem Samenkorn eine Blüte wächst?`, "mehrere Wochen bis Monate",
        ["1 Tag", "1 Stunde", "1 Minute"], rng));
    } else {
      q.push(createMCQ("sachkunde", "samen_zur_blüte",
        `Was zeigt, dass ein Samenkorn keimt?`, "kleine Wurzeln und Blätter wachsen",
        ["es wird größer", "es wird farbig", "es dreht sich"], rng));
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
        USEFUL_PLANTS.filter(p => p.plant !== plant.plant).map(p => p.use), rng));
    } else if (type === 1) {
      const plant = pick(USEFUL_PLANTS, rng);
      q.push(createMCQ("sachkunde", "nützliche_pflanzen",
        `Ist ${plant.plant} eine nützliche Pflanze?`, "ja, Menschen nutzen sie",
        ["nein, nicht nützlich", "nur für Tiere", "nie"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "nützliche_pflanzen",
        `Was ist Getreide?`, "Pflanzen wie Weizen und Hafer, die zu Brot verarbeitet werden",
        ["eine Frucht", "ein Gemüse", "ein Kraut"], rng));
    } else {
      q.push(createMCQ("sachkunde", "nützliche_pflanzen",
        `Welche Pflanzen essen wir?`, "Obst, Gemüse und Getreide",
        ["nur Blüten", "nur Wurzeln", "nur Blätter"], rng));
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
        WATER_CYCLE.filter(p => p.process !== process.process).map(p => p.description), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "wasserkreislauf",
        `Wie entsteht Regen?`, "Wasser verdampft, kondensiert zu Wolken, und fällt als Regen",
        ["Wolken gießen Wasser", "die Sonne regnet", "Seen gießen Wasser"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "wasserkreislauf",
        `Wohin geht das Regenwasser?`, "zu Seen und Meeren, wo es verdunstet",
        ["in den Himmel", "nirgendwohin", "in die Luft"], rng));
    } else {
      q.push(createMCQ("sachkunde", "wasserkreislauf",
        `Welche Rolle spielt die Sonne beim Wasserkreislauf?`, "sie lässt Wasser verdunsten",
        ["sie trinkt das Wasser", "sie kühlt das Wasser", "sie hat keine Rolle"], rng));
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
        STATES_OF_MATTER.filter(s => s.state !== state.state).map(s => s.state), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "aggregatzustände",
        `Welche Eigenschaft hat ein flüssiger Stoff?`, "hat Volumen, aber keine feste Form",
        ["hat feste Form", "hat keine Größe", "ist unsichtbar"], rng));
    } else if (type === 2) {
      const change = pick(TEMPERATURE_CHANGES, rng);
      q.push(createMCQ("sachkunde", "aggregatzustände",
        `Was ist ${change.process}?`, change.description,
        TEMPERATURE_CHANGES.filter(c => c.process !== change.process).map(c => c.description), rng));
    } else {
      q.push(createMCQ("sachkunde", "aggregatzustände",
        `Was passiert, wenn man Wasser erwärmt?`, "es verdunstet zu Dampf",
        ["es erstarrt", "es gefriert", "es bleibt gleich"], rng));
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
        WATER_USES.filter(w => w.use !== use.use).map(w => w.purpose), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "wasser_im_leben",
        `Wie viel Wasser sollte man pro Tag trinken?`, "mehrere Gläser (etwa 1-1.5 Liter)",
        ["1 Schluck", "10 Liter", "gar kein Wasser"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "wasser_im_leben",
        `Ist Wasser wichtig für das Leben?`, "ja, Menschen, Tiere und Pflanzen brauchen es",
        ["nein, nicht wichtig", "nur für Fische", "nur für Pflanzen"], rng));
    } else {
      q.push(createMCQ("sachkunde", "wasser_im_leben",
        `Wo gibt es Wasser?`, "in Flüssen, Seen, Meeren und Wolken",
        ["nur im Meer", "nur in Flüssen", "nur in Gläsern"], rng));
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
        TIMES_OF_DAY.filter(t => t.time !== time.time).map(t => t.when), rng));
    } else if (type === 1) {
      const season = pick(SEASONS_DETAIL, rng);
      q.push(createMCQ("sachkunde", "tag_jahreszeiten",
        `Wann ist ${season.season}?`, season.months,
        SEASONS_DETAIL.filter(s => s.season !== season.season).map(s => s.months), rng));
    } else if (type === 2) {
      const season = pick(SEASONS_DETAIL, rng);
      q.push(createMCQ("sachkunde", "tag_jahreszeiten",
        `Wie ist das Wetter im ${season.season}?`, season.weather,
        SEASONS_DETAIL.filter(s => s.season !== season.season).map(s => s.weather), rng));
    } else {
      q.push(createMCQ("sachkunde", "tag_jahreszeiten",
        `Wie viele Jahreszeiten gibt es?`, "vier",
        ["zwei", "drei", "fünf"], rng));
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
        PROFESSIONS.filter(p => p.job !== profession.job).map(p => p.workplace), rng));
    } else if (type === 1) {
      const profession = pick(PROFESSIONS, rng);
      q.push(createMCQ("sachkunde", "verschiedene_berufe",
        `Was macht ein ${profession.job}?`, profession.activity,
        PROFESSIONS.filter(p => p.job !== profession.job).map(p => p.activity), rng));
    } else if (type === 2) {
      const profession = pick(PROFESSIONS, rng);
      q.push(createMCQ("sachkunde", "verschiedene_berufe",
        `Welche Werkzeuge braucht ein ${profession.job}?`, profession.tools,
        PROFESSIONS.filter(p => p.job !== profession.job).map(p => p.tools), rng));
    } else {
      q.push(createMCQ("sachkunde", "verschiedene_berufe",
        `Ist Lehrer ein wichtiger Beruf?`, "ja, sehr wichtig - unterrichtet Schüler",
        ["nein, nicht wichtig", "nur manchmal", "nicht für Kinder"], rng));
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
        JOB_TASKS.filter(j => j.job !== task.job).map(j => j.task), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "was_machen_berufe",
        `Wo arbeitet ein Mechaniker?`, "in einer Werkstatt, repariert Autos",
        ["auf einem Bauernhof", "im Wald", "im Wasser"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "was_machen_berufe",
        `Was macht ein Arzt?`, "behandelt kranke Menschen",
        ["repariert Autos", "backt Brot", "pflanzt Blumen"], rng));
    } else {
      q.push(createMCQ("sachkunde", "was_machen_berufe",
        `Helfen Berufe den Menschen?`, "ja, sehr - jeder Beruf ist wichtig",
        ["nein, nicht wirklich", "nur einige", "keine"], rng));
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
        FAMILY_ROLES.filter(r => r.member !== role.member).map(r => r.role), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "familie_rollen",
        `Welche Rolle haben Geschwister?`, "spielen zusammen und helfen sich",
        ["bestimmen alles", "nur älter sein", "nichts zu tun"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "familie_rollen",
        `Wer sorgt für eine Familie?`, "Eltern (Vater und Mutter)",
        ["nur der Vater", "nur die Mutter", "die Kinder"], rng));
    } else {
      q.push(createMCQ("sachkunde", "familie_rollen",
        `Sind Großeltern wichtig?`, "ja, sie teilen Erfahrungen und Liebe",
        ["nein", "nur manchmal", "nicht wirklich"], rng));
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
        FAMILY_COOPERATION.filter(a => a.activity !== activity.activity).map(a => a.example), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "zusammenleben_hilfe",
        `Sollte man seine Familie im Haushalt unterstützen?`, "ja, jeder kann helfen",
        ["nein, nicht nötig", "nur manchmal", "nicht wichtig"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "zusammenleben_hilfe",
        `Wie kann man älteren Menschen helfen?`, "Einkaufen tragen, beim Putzen helfen, Besuche machen",
        ["gar nicht", "nur mit Geld", "nicht möglich"], rng));
    } else {
      q.push(createMCQ("sachkunde", "zusammenleben_hilfe",
        `Warum ist Familie wichtig?`, "wir brauchen Liebe, Schutz und gegenseitige Hilfe",
        ["sie sind nervig", "nicht wichtig", "nur zum Spielen"], rng));
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
        ACCIDENT_PREVENTION.filter(a => a.danger !== danger.danger).map(a => a.rule), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "unfallprävention",
        `Ist Spielen auf einem Spielplatz sicher?`, "ja, wenn man vorsichtig ist",
        ["nie sicher", "nur mit Erwachsenen", "sehr gefährlich"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "unfallprävention",
        `Was sollte man mit scharfen Gegenständen machen?`, "vorsichtig umgehen und nicht damit spielen",
        ["herumspielen", "anderen werfen", "ignorieren"], rng));
    } else {
      q.push(createMCQ("sachkunde", "unfallprävention",
        `Warum ist Unfallprävention wichtig?`, "um nicht verletzt zu werden",
        ["nicht wichtig", "nur für Erwachsene", "nur in der Schule"], rng));
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
        TRAFFIC_SAFETY.filter(r => r.rule !== rule.rule).map(r => r.tip), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "verkehrssicherheit",
        `Sollte man einen Fahrradhelm tragen?`, "ja, immer - zum Schutz des Kopfes",
        ["nein, nicht nötig", "nur manchmal", "nur bei Regen"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "verkehrssicherheit",
        `Wo sollte man auf der Straße gehen?`, "auf dem Gehweg oder Fußweg",
        ["auf der Fahrbahn", "überall", "in der Mitte der Straße"], rng));
    } else {
      q.push(createMCQ("sachkunde", "verkehrssicherheit",
        `Was ist eine helle Kleidung beim Radfahren?`, "zum Sehen und Erkannt werden im Dunkeln",
        ["nicht wichtig", "nur cool", "nur im Sommer"], rng));
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
        FIRST_AID.filter(f => f.injury !== injury.injury).map(f => f.action), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "erste_hilfe_basics",
        `Wenn dein Freund sich schneidet, was tust du?`, "Wunde reinigen, mit Binde abdrücken",
        ["ignorieren", "sagen, es geht vorbei", "lachen"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "erste_hilfe_basics",
        `Was hilft bei einer Beule?`, "Eis auflegen und hoch lagern",
        ["Wasser", "Sonne", "gar nichts"], rng));
    } else {
      q.push(createMCQ("sachkunde", "erste_hilfe_basics",
        `Wann sollte man einen Erwachsenen holen?`, "bei ernsthaften Verletzungen sofort",
        ["nie", "später vielleicht", "nur am Wochenende"], rng));
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
        EMERGENCY_SITUATIONS.filter(s => s.situation !== situation.situation).map(s => s.action), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "notsituationen",
        `Welche Nummer rufst du bei einem Notfall an?`, "112",
        ["110", "100", "999"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "notsituationen",
        `Wenn du verloren bist, was tust du?`, "bei einem Polizisten oder Geschäftsmann um Hilfe bitten",
        ["weglaufen", "herumschreien", "nach Hause gehen"], rng));
    } else {
      q.push(createMCQ("sachkunde", "notsituationen",
        `Was ist ein Notfall?`, "eine gefährliche Situation, in der Hilfe nötig ist",
        ["ein Spiel", "ein Spaß", "nicht wichtig"], rng));
    }
  }

  return q;
}

// ─── MAGNETISMUS DATA & GENERATOR ───────────────────────────────────────────

const MAGNETS = [
  { fact: "Magnete ziehen Eisen und Stahl an", material: "Eisen" },
  { fact: "Magnete haben einen Nordpol und einen Südpol", poles: "Nord und Süd" },
  { fact: "Gleiche Pole stoßen sich ab", effect: "Abstoßung" },
  { fact: "Verschiedene Pole ziehen sich an", effect: "Anziehung" }
];

const MAGNETIC_MATERIALS = [
  { material: "Eisen", magnetic: true },
  { material: "Stahl", magnetic: true },
  { material: "Holz", magnetic: false },
  { material: "Plastik", magnetic: false },
  { material: "Glas", magnetic: false },
  { material: "Nickel", magnetic: true },
  { material: "Kupfer", magnetic: false },
  { material: "Papier", magnetic: false }
];

const MAGNET_USES = [
  { use: "Kühlschrankmagnet", purpose: "hält Zettel an der Tür" },
  { use: "Kompassnadel", purpose: "zeigt Norden an" },
  { use: "Magnetverschluss", purpose: "hält Taschen geschlossen" },
  { use: "Schrottplatz-Magnet", purpose: "hebt Eisen und Stahl" }
];

export function generateMagnetismus(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const magneticOnes = MAGNETIC_MATERIALS.filter(m => m.magnetic).map(m => m.material);
  const nonMagneticOnes = MAGNETIC_MATERIALS.filter(m => !m.magnetic).map(m => m.material);

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      // Does a magnet attract this material?
      const item = pick(MAGNETIC_MATERIALS, rng);
      q.push(createMCQ("sachkunde", "magnetismus",
        `Zieht ein Magnet ${item.material} an?`,
        item.magnetic ? "ja, weil es ein magnetisches Material ist" : "nein, weil es kein magnetisches Material ist",
        item.magnetic
          ? ["nein, Magnete ziehen nur Holz an", "nein, das ist kein Metall", "nur manchmal"]
          : ["ja, Magnete ziehen alles an", "ja, besonders Holz", "ja, immer"],
        rng));
    } else if (type === 1) {
      // Which material is magnetic?
      const correctMaterial = pick(magneticOnes, rng);
      q.push(createMCQ("sachkunde", "magnetismus",
        `Welches Material wird von einem Magneten angezogen?`,
        correctMaterial,
        [...nonMagneticOnes.slice(0, 3)],
        rng));
    } else if (type === 2) {
      // Magnet poles and uses
      const magUse = pick(MAGNET_USES, rng);
      q.push(createMCQ("sachkunde", "magnetismus",
        `Wofür wird ein ${magUse.use} benutzt?`,
        magUse.purpose,
        MAGNET_USES.filter(u => u.use !== magUse.use).map(u => u.purpose),
        rng));
    } else {
      // Facts about poles
      const POLE_QUESTIONS = [
        { q: "Was passiert, wenn zwei Nordpole sich berühren?", a: "sie stoßen sich ab", w: ["sie ziehen sich an", "nichts passiert", "sie verschmelzen"] },
        { q: "Was passiert, wenn ein Nord- und ein Südpol sich berühren?", a: "sie ziehen sich an", w: ["sie stoßen sich ab", "nichts passiert", "sie explodieren"] },
        { q: "Wie viele Pole hat ein Magnet?", a: "zwei (Nordpol und Südpol)", w: ["einen", "drei", "keinen"] },
        { q: "Was zieht ein Magnet an?", a: "Eisen, Stahl und Nickel", w: ["alles Metall", "nur Gold", "nur Kupfer"] },
      ];
      const item = pick(POLE_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "magnetismus", item.q, item.a, item.w, rng));
    }
  }

  return q;
}

// ─── SCHWIMMEN & SINKEN DATA & GENERATOR ────────────────────────────────────

const FLOATING_SINKING = [
  { object: "Holzstück", behavior: "schwimmt", reason: "leichter als Wasser" },
  { object: "Stein", behavior: "sinkt", reason: "schwerer als Wasser" },
  { object: "Korken", behavior: "schwimmt", reason: "leichter als Wasser" },
  { object: "Eisennagel", behavior: "sinkt", reason: "schwerer als Wasser" },
  { object: "Blatt", behavior: "schwimmt", reason: "leicht und flach" },
  { object: "Münze", behavior: "sinkt", reason: "schweres Metall" },
  { object: "Plastikflasche (leer)", behavior: "schwimmt", reason: "Luft darin" },
  { object: "Glasmurmel", behavior: "sinkt", reason: "schwerer als Wasser" }
];

export function generateSchwimmenSinken(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  const floaters = FLOATING_SINKING.filter(f => f.behavior === "schwimmt").map(f => f.object);
  const sinkers = FLOATING_SINKING.filter(f => f.behavior === "sinkt").map(f => f.object);

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      // Swim or sink?
      const item = pick(FLOATING_SINKING, rng);
      q.push(createMCQ("sachkunde", "schwimmen_sinken",
        `Was passiert mit einem ${item.object} im Wasser?`,
        item.behavior === "schwimmt" ? "es schwimmt" : "es sinkt",
        item.behavior === "schwimmt"
          ? ["es sinkt", "es verschwindet", "es löst sich auf"]
          : ["es schwimmt", "es fliegt", "es bleibt oben"],
        rng));
    } else if (type === 1) {
      // Why does it float/sink?
      const item = pick(FLOATING_SINKING, rng);
      q.push(createMCQ("sachkunde", "schwimmen_sinken",
        `Warum ${item.behavior === "schwimmt" ? "schwimmt" : "sinkt"} ein ${item.object}?`,
        item.reason,
        FLOATING_SINKING.filter(f => f.object !== item.object).map(f => f.reason),
        rng));
    } else if (type === 2) {
      // Which object floats?
      const correctFloater = pick(floaters, rng);
      q.push(createMCQ("sachkunde", "schwimmen_sinken",
        `Welches Objekt schwimmt im Wasser?`,
        correctFloater,
        sinkers.slice(0, 3),
        rng));
    } else {
      // Concepts about floating and sinking
      const CONCEPT_QUESTIONS = [
        { q: "Warum schwimmt Holz im Wasser?", a: "weil es leichter als Wasser ist", w: ["weil es hart ist", "weil es ein Baum war", "weil es nass wird"] },
        { q: "Warum sinkt ein Stein im Wasser?", a: "weil er schwerer als Wasser ist", w: ["weil er kalt ist", "weil er rund ist", "weil er grau ist"] },
        { q: "Was braucht man, um zu untersuchen, ob etwas schwimmt oder sinkt?", a: "Wasser und das Objekt", w: ["Feuer", "Luft", "nur ein Messer"] },
        { q: "Kann eine leere Plastikflasche schwimmen?", a: "ja, weil Luft darin leichter als Wasser ist", w: ["nein, Plastik sinkt immer", "nein, nur Holz schwimmt", "nein, Flaschen sinken immer"] },
      ];
      const item = pick(CONCEPT_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "schwimmen_sinken", item.q, item.a, item.w, rng));
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
  notsituationen: generateNotsituationen,
  magnetismus: generateMagnetismus,
  schwimmen_sinken: generateSchwimmenSinken
};
