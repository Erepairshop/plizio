// ─── GERMAN GRADE 4 SACHKUNDE GENERATORS ───────────────────────────────────────
// Procedural question generators for German Grade 4 Sachkunde
// Generates 45 questions per subtopic (35 MCQ + 10 Typing)
// 25 subtopics covering human body, nature, geography, and health concepts
// Grade-appropriate for 9-10 year old students (Viertklässler)

import type { CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";

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

// Human Body - Organs & Systems
const ORGANS = [
  { organ: "Herz", function: "pumpt Blut", size: "Fauststückgröße" },
  { organ: "Lunge", function: "atmen und Sauerstoff aufnehmen", location: "Brustkorb" },
  { organ: "Gehirn", function: "Denken und Körperkontrolle", location: "Schädel" },
  { organ: "Magen", function: "verdaut Nahrung", location: "Bauch" },
  { organ: "Leber", function: "filtert Blut", location: "rechte Seite" },
  { organ: "Niere", function: "produziert Urin", count: "zwei" }
];

// Nutrition & Food Groups
const FOOD_GROUPS = [
  { group: "Obst und Gemüse", benefit: "Vitamine und Mineralien", color: "verschiedene Farben" },
  { group: "Getreide und Kartoffeln", benefit: "Kohlenhydrate und Energie", source: "Vollkornprodukte" },
  { group: "Milchprodukte", benefit: "Kalzium und Protein", examples: "Milch, Käse, Joghurt" },
  { group: "Fleisch und Fisch", benefit: "Protein und Eisen", frequency: "2-3 Mal pro Woche" },
  { group: "Fette und Öle", benefit: "Energie und Vitamine", moderate: "in Maßen" }
];

// Human Development & Growth
const GROWTH_STAGES = [
  { stage: "Baby", age: "0-1 Jahr", ability: "lernt zu gehen" },
  { stage: "Kleinkind", age: "1-3 Jahre", ability: "spricht erste Wörter" },
  { stage: "Kind", age: "3-12 Jahre", ability: "Schulalter" },
  { stage: "Teenager", age: "13-19 Jahre", ability: "körperliche Veränderungen" }
];

// Animals - Mammals
const MAMMALS = [
  { animal: "Elefant", habitat: "Afrika/Asien", diet: "Pflanzenfresser", size: "größtes Landtier" },
  { animal: "Löwe", habitat: "Afrika", diet: "Fleischfresser", social: "Rudel" },
  { animal: "Wal", habitat: "Ozean", diet: "Fische und Krill", breathe: "Lungen" },
  { animal: "Fledermaus", habitat: "überall", diet: "Insekten", special: "können fliegen" },
  { animal: "Eisbär", habitat: "Arktis", diet: "Fleischfresser", color: "weiß" }
];

// Animals - Birds
const BIRDS = [
  { bird: "Adler", habitat: "Berge", diet: "Fleischfresser", feature: "kann hoch fliegen" },
  { bird: "Pinguin", habitat: "Antarktis", diet: "Fische", feature: "schwimmt statt zu fliegen" },
  { bird: "Papagei", habitat: "Tropenwald", diet: "Früchte und Samen", feature: "kann sprechen" },
  { bird: "Eule", habitat: "überall", diet: "Fleischfresser", feature: "nachts aktiv" },
  { bird: "Flamingo", habitat: "Afrika/Asien", diet: "Algen", feature: "rosa Farbe" }
];

// Animals - Reptiles & Amphibians
const REPTILES = [
  { animal: "Schlange", habitat: "überall außer Arktis", diet: "Fleischfresser", eggs: "ja" },
  { animal: "Krokodil", habitat: "Wasser/Sümpfe", diet: "Fleischfresser", teeth: "viele scharfe Zähne" },
  { animal: "Eidechse", habitat: "warm", diet: "Insekten", tail: "kann abfallen" },
  { animal: "Schildkröte", habitat: "Wasser/Land", diet: "Pflanzen/Fleisch", shell: "Panzer" }
];

// Insects
const INSECTS = [
  { insect: "Biene", legs: "6", wings: "4", special: "bestäubt Blüten" },
  { insect: "Schmetterling", legs: "6", wings: "4", color: "bunt" },
  { insect: "Käfer", legs: "6", wings: "2 oder 4", hard: "harter Panzer" },
  { insect: "Libelle", legs: "6", wings: "4", speed: "schneller Flieger" },
  { insect: "Ameise", legs: "6", social: "Kolonie", strength: "sehr stark" }
];

// Plants - Structure
const PLANT_PARTS = [
  { part: "Wurzel", function: "Wasser und Nährstoffe aufnehmen", location: "unter der Erde" },
  { part: "Stamm/Stiel", function: "trägt die Pflanze", strength: "holzig" },
  { part: "Blatt", function: "Fotosynthese", color: "grün" },
  { part: "Blüte", function: "Fortpflanzung", beauty: "bunt und duftend" },
  { part: "Frucht", function: "Samen enthalten", purpose: "Ausbreitung" }
];

// Ecosystems
const ECOSYSTEMS = [
  { ecosystem: "Wald", residents: "Bäume, Hirsch, Vogel", water: "Bäche" },
  { ecosystem: "Wiese", residents: "Gras, Insekten, Kaninchen", sunshine: "viel Sonne" },
  { ecosystem: "Bach/Fluss", residents: "Fische, Enten, Schildkröte", flow: "fließendes Wasser" },
  { ecosystem: "See/Teich", residents: "Fische, Pflanzen, Frösche", water: "stehendes Wasser" },
  { ecosystem: "Berg", residents: "Bergziege, Adler, Schnee", altitude: "hoch und kalt" }
];

// Weather & Climate
const WEATHER_PHENOMENA = [
  { phenomenon: "Gewitter", cause: "warme und kalte Luftmassen", danger: "Blitzschlag" },
  { phenomenon: "Tornado", cause: "Rotation von Luftmassen", strength: "sehr stark" },
  { phenomenon: "Regenbogen", cause: "Licht und Wasser", colors: "sieben Farben" },
  { phenomenon: "Schnee", cause: "Eis in der Atmosphäre", temperature: "unter 0°C" },
  { phenomenon: "Tau", cause: "Wasser kühlt ab", appearance: "Tropfen am Morgen" }
];

// Seasons & Nature Changes
const SEASONAL_CHANGES = [
  { season: "Frühling", month: "März-Mai", change: "Blumen blühen, Vögel kehren zurück" },
  { season: "Sommer", month: "Juni-August", change: "warm und sonnig, Insekten aktiv" },
  { season: "Herbst", month: "September-November", change: "Blätter fallen, Tiere bereiten sich vor" },
  { season: "Winter", month: "Dezember-Februar", change: "kalt und schneeig, viele Tiere schlafen" }
];

// Geography - German States
const GERMAN_STATES = [
  { state: "Bayern", capital: "München", region: "Süddeutschland", feature: "Alpen" },
  { state: "Niedersachsen", capital: "Hannover", region: "Norddeutschland", neighbor: "Bremen" },
  { state: "Hessen", capital: "Wiesbaden", city: "Frankfurt" },
  { state: "Baden-Württemberg", capital: "Stuttgart", region: "Südwesten" },
  { state: "Schleswig-Holstein", capital: "Kiel", coast: "Nordsee und Ostsee" }
];

// Europe - Countries & Geography
const EUROPEAN_COUNTRIES = [
  { country: "Frankreich", capital: "Paris", neighbor: "Deutschland" },
  { country: "Italien", capital: "Rom", feature: "Mittelmeer" },
  { country: "Polen", capital: "Warschau", neighbor: "Deutschland" },
  { country: "Skandinavien", countries: "Norwegen, Schweden, Dänemark", climate: "kalt" },
  { country: "Schweiz", capital: "Bern", feature: "Alpen" }
];

// Energy & Resources
const ENERGY_SOURCES = [
  { source: "Sonne", type: "erneuerbar", benefit: "kostenlos und sauber" },
  { source: "Wind", type: "erneuerbar", use: "Windkraftanlage" },
  { source: "Wasser", type: "erneuerbar", use: "Wasserkraftwerk" },
  { source: "Kohle", type: "fossiler Brennstoff", problem: "Umweltverschmutzung" },
  { source: "Erdöl", type: "fossiler Brennstoff", use: "Benzin, Heizung" }
];

// Water
const WATER_FACTS = [
  { fact: "Wasser bedeckt 70% der Erde", ocean: "Salzwasser", fresh: "Süßwasser" },
  { fact: "Menschen brauchen Wasser zum Leben", daily: "2 Liter pro Tag" },
  { fact: "Wasser gefriert bei 0°C", solid: "Eis" },
  { fact: "Wasser verdampft in die Atmosphäre", cycle: "Wasserkreislauf" },
  { fact: "Seen und Flüsse enthalten Süßwasser", importance: "für Trinkwasser" }
];

// Air
const AIR_FACTS = [
  { fact: "Luft ist eine Mischung von Gasen", components: "Stickstoff, Sauerstoff, Kohlendioxid" },
  { fact: "Menschen atmen Sauerstoff ein", exhale: "Kohlendioxid" },
  { fact: "Pflanzen brauchen Kohlendioxid", produce: "Sauerstoff" },
  { fact: "Wind ist bewegte Luft", cause: "Temperaturunterschiede" },
  { fact: "Luft hat Gewicht", pressure: "Luftdruck" }
];

// Rocks & Minerals
const ROCKS = [
  { rock: "Granit", type: "Magmatit", origin: "Magma", use: "Baustoff" },
  { rock: "Schiefer", type: "Metamorphit", origin: "Druck und Hitze", use: "Dachziegel" },
  { rock: "Sandstein", type: "Sedimentit", origin: "Sand", color: "gelblich/rötlich" },
  { rock: "Kalkstein", type: "Sedimentit", origin: "Marine Organismen", use: "Zement" }
];

// Weather & Climate Advanced
const CLIMATE_ZONES = [
  { zone: "Tropisch", temperature: "warm ganzjährig", rain: "viel Regen" },
  { zone: "Subtropisch", temperature: "mild", season: "trocken und nass" },
  { zone: "Gemäßigt", temperature: "Deutschland", seasons: "vier Jahreszeiten" },
  { zone: "Arktisch", temperature: "extrem kalt", ice: "Gletscher und Eis" }
];

// Human Body - Skeleton & Muscles
const SKELETON_FACTS = [
  { part: "Knochen", function: "stützt Körper", count: "206 bei Erwachsenen" },
  { part: "Gelenk", function: "ermöglicht Bewegung", types: "Knie, Ellbogen, Hüfte" },
  { part: "Muskel", function: "ermöglicht Bewegung", types: "Bizeps, Trizeps" },
  { part: "Sehne", function: "verbindet Muskel und Knochen", strength: "sehr reißfest" }
];

// Professions
const PROFESSIONS = [
  { profession: "Arzt", work: "heilt Krankheiten", place: "Praxis/Krankenhaus" },
  { profession: "Lehrer", work: "unterrichtet Schüler", place: "Schule" },
  { profession: "Farmer", work: "züchtet Tiere und Pflanzen", place: "Bauernhof" },
  { profession: "Ingenieur", work: "plant und baut Maschinen", place: "Büro/Baustelle" },
  { profession: "Künstler", work: "erschafft Kunstwerke", place: "Atelier" }
];

// Safety & Health - Advanced
const SAFETY_TOPICS = [
  { topic: "Fahrrad fahren", rule: "Helm tragen", importance: "Kopfschutz" },
  { topic: "Schwimmen", rule: "nie allein schwimmen", buddy: "Freund mitnehmen" },
  { topic: "Am Feuer", rule: "nicht zu nah heran", danger: "Verbrennungen" },
  { topic: "Straße überqueren", rule: "bei grüner Ampel", safe: "beide Seiten schauen" }
];

// ─── GENERATOR FUNCTIONS ────────────────────────────────────────────────────

export function generateOrgane(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const organ = pick(ORGANS, rng);
      q.push(createMCQ("sachkunde", "organe",
        `Was ist die Funktion des ${organ.organ}?`, organ.function,
        ["speichert Energie", "produziert Schweiß", "transportiert Sauerstoff"], rng));
    } else if (type === 1) {
      const organ = pick(ORGANS, rng);
      q.push(createMCQ("sachkunde", "organe",
        `Wo befindet sich das ${organ.organ}?`, organ.location || organ.size || "im Körper",
        ["unter der Haut", "im Kopf", "im Darm"], rng));
    } else if (type === 2) {
      const organ2 = pick(ORGANS, rng);
      const otherOrgans = ORGANS.filter(o => o.organ !== organ2.organ).map(o => o.organ);
      q.push(createMCQ("sachkunde", "organe",
        `Welches Organ ${organ2.function}?`, organ2.organ,
        [pick(otherOrgans, rng), pick(otherOrgans.filter(o => o !== otherOrgans[0]), rng), pick(otherOrgans.slice(2), rng) || "Darm"], rng));
    } else {
      const organ3 = pick(ORGANS, rng);
      const loc = organ3.location || organ3.size || "im Körper";
      const otherOrgans3 = ORGANS.filter(o => o.organ !== organ3.organ).map(o => o.organ);
      q.push(createMCQ("sachkunde", "organe",
        `Welches Organ befindet sich im/in der ${loc}?`, organ3.organ,
        [pick(otherOrgans3, rng), pick(otherOrgans3.filter(o => o !== otherOrgans3[0]), rng) || "Niere", "Magen"], rng));
    }
  }

  return q;
}

export function generateErnährung(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 3;
    if (type === 0) {
      const group = pick(FOOD_GROUPS, rng);
      q.push(createMCQ("sachkunde", "ernährung",
        `Welche Nährstoffe enthält ${group.group}?`, group.benefit,
        ["nur Fett", "nur Zucker", "nur Protein"], rng));
    } else if (type === 1) {
      const group1 = pick(FOOD_GROUPS, rng);
      q.push(createMCQ("sachkunde", "ernährung",
        `Welches Lebensmittel gehört zur Gruppe "${group1.group}"?`,
        group1.examples || group1.source || group1.benefit,
        FOOD_GROUPS.filter(g => g.group !== group1.group).map(g => g.benefit).slice(0, 3), rng));
    } else {
      const group2 = pick(FOOD_GROUPS, rng);
      q.push(createMCQ("sachkunde", "ernährung",
        `Was ist der Nutzen von "${group2.group}" für deinen Körper?`, group2.benefit,
        FOOD_GROUPS.filter(g => g.group !== group2.group).map(g => g.benefit).slice(0, 3), rng));
    }
  }

  return q;
}

const SPORT_QUESTIONS = [
  { q: "Wie oft pro Woche sollte man Sport treiben?", a: "mindestens 3 Mal", wrong: ["einmal pro Monat", "jeden Tag 5 Stunden", "nie"] },
  { q: "Was passiert mit deinen Muskeln, wenn du trainierst?", a: "sie werden stärker", wrong: ["sie schrumpfen", "sie verschwinden", "sie ändern sich nicht"] },
  { q: "Welche Art von Sport ist gut für das Herz?", a: "Ausdauersport (Laufen, Schwimmen)", wrong: ["Schach spielen", "Fernsehen schauen", "Schlafen"] },
  { q: "Warum ist Bewegung wichtig?", a: "für Gesundheit und Fitness", wrong: ["um Zeit zu verschwenden", "zum Langweilen", "hat keine Vorteile"] },
  { q: "Was schützt Gelenke beim Sport?", a: "Aufwärmen vorher", wrong: ["Kälte", "Durst", "Müdigkeit"] },
  { q: "Was ist Ausdauer?", a: "lange körperliche Aktivität durchhalten", wrong: ["kurz sprinten", "nichts tun", "schlafen"] },
  { q: "Welcher Muskel befindet sich im Oberarm?", a: "Bizeps", wrong: ["Trizeps", "Herzmuskel", "Beinmuskel"] },
  { q: "Warum soll man sich vor dem Sport aufwärmen?", a: "um Verletzungen zu vermeiden", wrong: ["um Hunger zu haben", "um schneller zu werden", "es ist unnötig"] },
];

export function generateBewegungSport(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  const SPORT_TYPES = [
    { sport: "Schwimmen", benefit: "stärkt den ganzen Körper", category: "Ausdauersport" },
    { sport: "Laufen", benefit: "stärkt Herz und Lungen", category: "Ausdauersport" },
    { sport: "Radfahren", benefit: "schont die Gelenke", category: "Ausdauersport" },
    { sport: "Fußball", benefit: "fördert Teamgeist", category: "Mannschaftssport" },
    { sport: "Turnen", benefit: "verbessert Gleichgewicht und Kraft", category: "Gymnastiksport" }
  ];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const sq = pick(SPORT_QUESTIONS, rng);
      q.push(createMCQ("sachkunde", "bewegung_sport", sq.q, sq.a, sq.wrong, rng));
    } else if (type === 1) {
      const sp = pick(SPORT_TYPES, rng);
      q.push(createMCQ("sachkunde", "bewegung_sport",
        `Welchen Vorteil hat ${sp.sport}?`, sp.benefit,
        ["macht müde", "schadet dem Herz", "ist gefährlich"], rng));
    } else if (type === 2) {
      const sp2 = pick(SPORT_TYPES, rng);
      q.push(createMCQ("sachkunde", "bewegung_sport",
        `Zu welcher Sportart gehört ${sp2.sport}?`, sp2.category,
        ["Kampfsport", "Wintersport", "Wassersport"].filter(c => c !== sp2.category), rng));
    } else {
      const skel = pick(SKELETON_FACTS, rng);
      q.push(createMCQ("sachkunde", "bewegung_sport",
        `Was ist die Funktion von ${skel.part}?`, skel.function,
        SKELETON_FACTS.filter(s => s.part !== skel.part).map(s => s.function).slice(0, 3), rng));
    }
  }

  return q;
}

export function generateSäugetiere(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const mammal = pick(MAMMALS, rng);
      q.push(createMCQ("sachkunde", "säugetiere",
        `Wo lebt der/die ${mammal.animal}?`, mammal.habitat,
        ["im Wasser", "in der Luft", "in Höhlen"], rng));
    } else if (type === 1) {
      const mammal = pick(MAMMALS, rng);
      q.push(createMCQ("sachkunde", "säugetiere",
        `Ist der/die ${mammal.animal} ein Fleischfresser oder Pflanzenfresser?`, mammal.diet,
        mammal.diet.includes("Fleisch") ? ["Pflanzenfresser", "Allesfresser"] : ["Fleischfresser", "Allesfresser"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "säugetiere",
        `Was ist das größte Landsäugetier?`, "Elefant",
        ["Löwe", "Wal", "Giraffe"], rng));
    } else {
      q.push(createMCQ("sachkunde", "säugetiere",
        `Welche Säugetiere können fliegen?`, "Fledermäuse",
        ["Vögel", "Schmetterlinge", "keine"], rng));
    }
  }

  return q;
}

export function generateVögel(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 3;
    if (type === 0) {
      const bird = pick(BIRDS, rng);
      const feature = (bird as any).feature || "fliegt";
      q.push(createMCQ("sachkunde", "vögel",
        `Welcher Vogel ${feature}?`, bird.bird,
        BIRDS.filter(b => b.bird !== bird.bird).map(b => b.bird).slice(0, 3), rng));
    } else if (type === 1) {
      const bird = pick(BIRDS, rng);
      q.push(createMCQ("sachkunde", "vögel",
        `Was frisst ${bird.bird}?`, bird.diet,
        ["Gras", "Metall", "Steine"], rng));
    } else {
      q.push(createMCQ("sachkunde", "vögel",
        `Wo lebt der Pinguin?`, "Antarktis",
        ["Afrika", "Australien", "Arktis"], rng));
    }
  }

  return q;
}

const AMPHIBIANS = [
  { animal: "Frosch", habitat: "Wasser und Land", feature: "springt und quakt" },
  { animal: "Salamander", habitat: "feuchte Wälder", feature: "hat einen langen Schwanz" },
  { animal: "Kröte", habitat: "Wasser und Land", feature: "hat eine raue Haut" }
];

export function generateReptilienAmphibien(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const reptile = pick(REPTILES, rng);
      q.push(createMCQ("sachkunde", "reptilien_amphibien",
        `Wo lebt das/die ${reptile.animal}?`, reptile.habitat,
        REPTILES.filter(r => r.animal !== reptile.animal).map(r => r.habitat).slice(0, 3), rng));
    } else if (type === 1) {
      const reptile = pick(REPTILES, rng);
      const dietProp = (reptile as any).diet || "Fleischfresser";
      q.push(createMCQ("sachkunde", "reptilien_amphibien",
        `Was frisst das/die ${reptile.animal}?`, dietProp,
        ["Gras und Blätter", "Früchte", "Steine"], rng));
    } else if (type === 2) {
      const amphibian = pick(AMPHIBIANS, rng);
      q.push(createMCQ("sachkunde", "reptilien_amphibien",
        `Was ist typisch für ${amphibian.animal}?`, amphibian.feature,
        ["fliegt sehr hoch", "lebt nur im Meer", "hat Federn"], rng));
    } else {
      q.push(createMCQ("sachkunde", "reptilien_amphibien",
        `Was ist ein Lurch (Amphibie)?`, "ein Tier, das im Wasser und auf dem Land leben kann",
        ["ein Fisch", "ein Vogel", "ein Insekt"], rng));
    }
  }

  return q;
}

export function generateInsekten(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 3;
    if (type === 0) {
      const insect = pick(INSECTS, rng);
      q.push(createMCQ("sachkunde", "insekten",
        `Wie viele Beine hat ein Insekt?`, insect.legs,
        ["4", "8", "10"], rng));
    } else if (type === 1) {
      const insect = pick(INSECTS, rng);
      const special = (insect as any).special || (insect as any).color || "interessant";
      q.push(createMCQ("sachkunde", "insekten",
        `Was ist besonders am ${insect.insect}?`, special,
        ["hat keine Flügel", "lebt nur im Wasser", "ist ein Säugetier"], rng));
    } else {
      const insect2 = pick(INSECTS, rng);
      const otherInsects = INSECTS.filter(ins => ins.insect !== insect2.insect).map(ins => ins.insect);
      const sp2 = (insect2 as any).special || (insect2 as any).color || (insect2 as any).social || (insect2 as any).hard || "interessant";
      q.push(createMCQ("sachkunde", "insekten",
        `Welches Insekt "${sp2}"?`, insect2.insect,
        [pick(otherInsects, rng), pick(otherInsects.slice(1), rng) || "Mücke", "Spinne"], rng));
    }
  }

  return q;
}

export function generatePflanzenbau(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const part = pick(PLANT_PARTS, rng);
      q.push(createMCQ("sachkunde", "pflanzenbau",
        `Was ist die Funktion der ${part.part}?`, part.function,
        ["speichert Energie", "produziert Kohlenhydrate", "transportiert Wasser"], rng));
    } else if (type === 1) {
      const part1 = pick(PLANT_PARTS, rng);
      q.push(createMCQ("sachkunde", "pflanzenbau",
        `Wo befindet sich die ${part1.part} der Pflanze?`, part1.location || "im Boden",
        PLANT_PARTS.filter(p => p.part !== part1.part).map(p => p.location || "oben").slice(0, 3), rng));
    } else if (type === 2) {
      const part2 = pick(PLANT_PARTS, rng);
      q.push(createMCQ("sachkunde", "pflanzenbau",
        `Welcher Pflanzenteil ist für "${part2.function}" zuständig?`, part2.part,
        PLANT_PARTS.filter(p => p.part !== part2.part).map(p => p.part).slice(0, 3), rng));
    } else {
      const part3 = pick(PLANT_PARTS, rng);
      q.push(createMCQ("sachkunde", "pflanzenbau",
        `Was macht die ${part3.part} einer Pflanze?`, part3.function,
        PLANT_PARTS.filter(p => p.part !== part3.part).map(p => p.function).slice(0, 3), rng));
    }
  }

  return q;
}

export function generateÖkosysteme(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 3;
    if (type === 0) {
      const eco = pick(ECOSYSTEMS, rng);
      q.push(createMCQ("sachkunde", "ökosysteme",
        `Welche Pflanzen und Tiere leben in einem ${eco.ecosystem}?`, eco.residents,
        ["nur Bäume", "nur Fische", "nur Insekten"], rng));
    } else if (type === 1) {
      const eco1 = pick(ECOSYSTEMS, rng);
      q.push(createMCQ("sachkunde", "ökosysteme",
        `Welches Ökosystem hat ${eco1.water || eco1.sunshine || eco1.flow || "besondere Merkmale"}?`, eco1.ecosystem,
        ECOSYSTEMS.filter(e => e.ecosystem !== eco1.ecosystem).map(e => e.ecosystem).slice(0, 3), rng));
    } else {
      const eco2 = pick(ECOSYSTEMS, rng);
      q.push(createMCQ("sachkunde", "ökosysteme",
        `In welchem Ökosystem lebt ${eco2.residents.split(",")[0].trim()}?`, eco2.ecosystem,
        ECOSYSTEMS.filter(e => e.ecosystem !== eco2.ecosystem).map(e => e.ecosystem).slice(0, 3), rng));
    }
  }

  return q;
}

export function generateWetterKlima(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const weather = pick(WEATHER_PHENOMENA, rng);
      q.push(createMCQ("sachkunde", "wetter_klima",
        `Was ist die Ursache für ein ${weather.phenomenon}?`, weather.cause,
        WEATHER_PHENOMENA.filter(w => w.phenomenon !== weather.phenomenon).map(w => w.cause).slice(0, 3), rng));
    } else if (type === 1) {
      const weather1 = pick(WEATHER_PHENOMENA, rng);
      const extra = (weather1 as any).danger || (weather1 as any).strength || (weather1 as any).colors || (weather1 as any).temperature || (weather1 as any).appearance || "besondere Eigenschaft";
      q.push(createMCQ("sachkunde", "wetter_klima",
        `Was ist typisch für ${weather1.phenomenon}?`, extra,
        WEATHER_PHENOMENA.filter(w => w.phenomenon !== weather1.phenomenon)
          .map(w => (w as any).danger || (w as any).colors || (w as any).strength || (w as any).temperature || (w as any).appearance || "keine Besonderheit")
          .slice(0, 3), rng));
    } else if (type === 2) {
      const weather2 = pick(WEATHER_PHENOMENA, rng);
      q.push(createMCQ("sachkunde", "wetter_klima",
        `Welches Wetterphänomen entsteht durch "${weather2.cause}"?`, weather2.phenomenon,
        WEATHER_PHENOMENA.filter(w => w.phenomenon !== weather2.phenomenon).map(w => w.phenomenon).slice(0, 3), rng));
    } else {
      q.push(createMCQ("sachkunde", "wetter_klima",
        `Bei welcher Temperatur friert Wasser?`, "0°C",
        ["-10°C", "10°C", "100°C"], rng));
    }
  }

  return q;
}

export function generateJahreszeitenNatur(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const season = pick(SEASONAL_CHANGES, rng);
      q.push(createMCQ("sachkunde", "jahreszeiten_natur",
        `Was passiert im ${season.season} in der Natur?`, season.change,
        SEASONAL_CHANGES.filter(s => s.season !== season.season).map(s => s.change).slice(0, 3), rng));
    } else if (type === 1) {
      const season1 = pick(SEASONAL_CHANGES, rng);
      q.push(createMCQ("sachkunde", "jahreszeiten_natur",
        `In welchen Monaten ist ${season1.season}?`, season1.month,
        SEASONAL_CHANGES.filter(s => s.season !== season1.season).map(s => s.month).slice(0, 3), rng));
    } else if (type === 2) {
      const season2 = pick(SEASONAL_CHANGES, rng);
      q.push(createMCQ("sachkunde", "jahreszeiten_natur",
        `In welcher Jahreszeit beobachtet man: "${season2.change}"?`, season2.season,
        SEASONAL_CHANGES.filter(s => s.season !== season2.season).map(s => s.season).slice(0, 3), rng));
    } else {
      q.push(createMCQ("sachkunde", "jahreszeiten_natur",
        `Wie viele Jahreszeiten gibt es in Deutschland?`, "4",
        ["2", "3", "6"], rng));
    }
  }

  return q;
}

// ─── MORE GENERATORS (continuing pattern...) ────────────────────────────────

export function generateSkeletMuskulatur(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const fact = pick(SKELETON_FACTS, rng);
      q.push(createMCQ("sachkunde", "skelet_muskulatur",
        `Was ist die Funktion von ${fact.part}?`, fact.function,
        SKELETON_FACTS.filter(s => s.part !== fact.part).map(s => s.function).slice(0, 3), rng));
    } else if (type === 1) {
      const fact1 = pick(SKELETON_FACTS, rng);
      q.push(createMCQ("sachkunde", "skelet_muskulatur",
        `Welcher Körperteil ${fact1.function}?`, fact1.part,
        SKELETON_FACTS.filter(s => s.part !== fact1.part).map(s => s.part).slice(0, 3), rng));
    } else if (type === 2) {
      const factsWithTypes = SKELETON_FACTS.filter(s => (s as any).types);
      const fact2 = factsWithTypes.length > 0 ? pick(factsWithTypes, rng) : SKELETON_FACTS[1];
      const types2 = (fact2 as any).types || "verschiedene Arten";
      q.push(createMCQ("sachkunde", "skelet_muskulatur",
        `Welche Typen von ${fact2.part} gibt es im menschlichen Körper?`, types2,
        factsWithTypes.filter(s => s.part !== fact2.part).map(s => (s as any).types || "andere")
          .concat(["Schulter und Rücken", "Hals und Wirbel"]).slice(0, 3), rng));
    } else {
      q.push(createMCQ("sachkunde", "skelet_muskulatur",
        `Wie viele Knochen hat ein erwachsener Mensch ungefähr?`, "206",
        ["100", "300", "50"], rng));
    }
  }

  return q;
}

export function generateWasser(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const wf = pick(WATER_FACTS, rng);
      q.push(createMCQ("sachkunde", "wasser",
        `Was weißt du über Wasser? "${wf.fact}"`, wf.ocean || wf.daily || wf.solid || wf.cycle || wf.importance || "richtig",
        ["stimmt nicht", "falsch", "ist unbekannt"], rng));
    } else if (type === 1) {
      const wf1 = pick(WATER_FACTS, rng);
      q.push(createMCQ("sachkunde", "wasser",
        `Was ist ${wf1.fresh || wf1.solid || "Süßwasser"}?`,
        wf1.fresh !== undefined ? "Wasser in Seen und Flüssen" : (wf1.solid || "gefrorenes Wasser"),
        ["Meerwasser", "Regenwasser", "Salzwasser"], rng));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "wasser",
        `Wie viel Prozent der Erde ist mit Wasser bedeckt?`, "70%",
        ["50%", "80%", "30%"], rng));
    } else {
      q.push(createMCQ("sachkunde", "wasser",
        `Was ist der Wasserkreislauf?`, "Wasser verdunstet und regnet wieder ab",
        ["Wasser fließt bergauf", "Wasser verschwindet", "Wasser entsteht aus Luft"], rng));
    }
  }

  return q;
}

export function generateLuft(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const af = pick(AIR_FACTS, rng);
      q.push(createMCQ("sachkunde", "luft",
        `Was stimmt über Luft? (wähle die richtige Aussage)`, af.fact,
        AIR_FACTS.filter(a => a.fact !== af.fact).map(a => a.fact).slice(0, 3), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "luft",
        `Was geben Pflanzen bei der Fotosynthese ab?`, "Sauerstoff",
        ["Kohlendioxid", "Stickstoff", "Helium"], rng));
    } else if (type === 2) {
      const af2 = pick(AIR_FACTS, rng);
      q.push(createMCQ("sachkunde", "luft",
        `Was bedeutet "${af2.fact.split(",")[0]}"?`,
        af2.components || af2.exhale || af2.produce || af2.cause || af2.pressure || "ein Merkmal der Luft",
        ["Wasser in flüssiger Form", "festes Gestein", "ein Metall"], rng));
    } else {
      q.push(createMCQ("sachkunde", "luft",
        `Was ist Wind?`, "bewegte Luft",
        ["bewegtes Wasser", "bewegter Sand", "bewegte Wolke"], rng));
    }
  }

  return q;
}

export function generateSteineMineral(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const rock = pick(ROCKS, rng);
      q.push(createMCQ("sachkunde", "steine_mineral",
        `Aus was entsteht ${rock.rock}?`, rock.origin,
        ROCKS.filter(r => r.rock !== rock.rock).map(r => r.origin).slice(0, 3), rng));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "steine_mineral",
        `Was ist der Unterschied zwischen Mineral und Gestein?`, "Mineral ist ein Kristall, Gestein besteht aus mehreren Mineralien",
        ["kein Unterschied", "Mineral ist größer", "Gestein ist älter"], rng));
    } else if (type === 2) {
      const rock2 = pick(ROCKS, rng);
      q.push(createMCQ("sachkunde", "steine_mineral",
        `Wofür wird ${rock2.rock} verwendet?`, rock2.use || rock2.color || "als Baustoff",
        ROCKS.filter(r => r.rock !== rock2.rock).map(r => r.use || r.color || "Schmuck").slice(0, 3), rng));
    } else {
      const rock3 = pick(ROCKS, rng);
      q.push(createMCQ("sachkunde", "steine_mineral",
        `Zu welchem Gesteinstyp gehört ${rock3.rock}?`, rock3.type,
        ROCKS.filter(r => r.rock !== rock3.rock).map(r => r.type).slice(0, 3), rng));
    }
  }

  return q;
}

export function generateEnergie(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const source = pick(ENERGY_SOURCES, rng);
      q.push(createMCQ("sachkunde", "energie",
        `Ist ${source.source} eine erneuerbare oder fossile Energiequelle?`, source.type,
        source.type === "erneuerbar" ? ["fossiler Brennstoff", "nicht existierend"] : ["erneuerbar", "kostenlos"], rng));
    } else if (type === 1) {
      const renewables = ENERGY_SOURCES.filter(s => s.type === "erneuerbar");
      const fossil = ENERGY_SOURCES.filter(s => s.type === "fossiler Brennstoff");
      const chosen = pick(renewables, rng);
      q.push(createMCQ("sachkunde", "energie",
        `Welche Energiequelle ist umweltfreundlich und erneuerbar?`, chosen.source,
        fossil.map(f => f.source).slice(0, 3), rng));
    } else if (type === 2) {
      const source2 = pick(ENERGY_SOURCES, rng);
      const useOrBenefit = (source2 as any).use || (source2 as any).benefit || (source2 as any).problem || "wird genutzt";
      q.push(createMCQ("sachkunde", "energie",
        `Wie wird ${source2.source} genutzt?`, useOrBenefit,
        ENERGY_SOURCES.filter(s => s.source !== source2.source)
          .map(s => (s as any).use || (s as any).benefit || (s as any).problem || "als Brennstoff")
          .slice(0, 3), rng));
    } else {
      q.push(createMCQ("sachkunde", "energie",
        `Wie heißt eine Anlage, die Windenergie nutzt?`, "Windkraftanlage",
        ["Kohlewerk", "Ölbohranlage", "Gasstation"], rng));
    }
  }

  return q;
}

export function generateDeutscheBundesländer(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const state = pick(GERMAN_STATES, rng);
      const capital = (state as any).capital || "Hauptstadt";
      q.push(createMCQ("sachkunde", "deutsche_bundesländer",
        `Wie heißt die Hauptstadt von ${state.state}?`, capital,
        GERMAN_STATES.filter(s => s.state !== state.state)
          .map(s => (s as any).capital || (s as any).city || "Kiel")
          .filter(Boolean).slice(0, 3), rng));
    } else if (type === 1) {
      const state1 = pick(GERMAN_STATES.filter(s => (s as any).region), rng);
      q.push(createMCQ("sachkunde", "deutsche_bundesländer",
        `In welcher Region Deutschlands liegt ${state1.state}?`, (state1 as any).region,
        ["Norddeutschland", "Süddeutschland", "Ostdeutschland", "Westdeutschland"]
          .filter(r => r !== (state1 as any).region).slice(0, 3), rng));
    } else if (type === 2) {
      const state2 = pick(GERMAN_STATES.filter(s => (s as any).feature || (s as any).coast || (s as any).city), rng);
      const feature = (state2 as any).feature || (state2 as any).coast || (state2 as any).city;
      q.push(createMCQ("sachkunde", "deutsche_bundesländer",
        `Welches Bundesland hat "${feature}"?`, state2.state,
        GERMAN_STATES.filter(s => s.state !== state2.state).map(s => s.state).slice(0, 3), rng));
    } else {
      q.push(createMCQ("sachkunde", "deutsche_bundesländer",
        `Wie viele Bundesländer hat Deutschland?`, "16",
        ["10", "20", "25"], rng));
    }
  }

  return q;
}

export function generateEuropa(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const country = pick(EUROPEAN_COUNTRIES.filter(c => (c as any).capital), rng);
      const capital = (country as any).capital;
      q.push(createMCQ("sachkunde", "europa",
        `Wie heißt die Hauptstadt von ${country.country}?`, capital,
        EUROPEAN_COUNTRIES.filter(c => c.country !== country.country && (c as any).capital)
          .map(c => (c as any).capital).slice(0, 3), rng));
    } else if (type === 1) {
      const country1 = pick(EUROPEAN_COUNTRIES.filter(c => (c as any).neighbor), rng);
      q.push(createMCQ("sachkunde", "europa",
        `Welches Land liegt direkt neben ${country1.country}?`, (country1 as any).neighbor,
        EUROPEAN_COUNTRIES.filter(c => c.country !== country1.country).map(c => c.country).slice(0, 3), rng));
    } else if (type === 2) {
      const country2 = pick(EUROPEAN_COUNTRIES.filter(c => (c as any).feature || (c as any).climate || (c as any).countries), rng);
      const featureVal = (country2 as any).feature || (country2 as any).climate || (country2 as any).countries;
      q.push(createMCQ("sachkunde", "europa",
        `Welches Land/Region ist bekannt für "${featureVal}"?`, country2.country,
        EUROPEAN_COUNTRIES.filter(c => c.country !== country2.country).map(c => c.country).slice(0, 3), rng));
    } else {
      q.push(createMCQ("sachkunde", "europa",
        `Welcher Kontinent ist Deutschland Teil von?`, "Europa",
        ["Asien", "Afrika", "Amerika"], rng));
    }
  }

  return q;
}

export function generateBeruf(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 3;
    if (type === 0) {
      const prof = pick(PROFESSIONS, rng);
      q.push(createMCQ("sachkunde", "beruf",
        `Wo arbeitet ein/eine ${prof.profession}?`, prof.place,
        PROFESSIONS.filter(p => p.profession !== prof.profession).map(p => p.place).slice(0, 3), rng));
    } else if (type === 1) {
      const prof = pick(PROFESSIONS, rng);
      q.push(createMCQ("sachkunde", "beruf",
        `Was macht ein/eine ${prof.profession}?`, prof.work,
        PROFESSIONS.filter(p => p.profession !== prof.profession).map(p => p.work).slice(0, 3), rng));
    } else {
      const prof2 = pick(PROFESSIONS, rng);
      q.push(createMCQ("sachkunde", "beruf",
        `Welcher Beruf "${prof2.work}"?`, prof2.profession,
        PROFESSIONS.filter(p => p.profession !== prof2.profession).map(p => p.profession).slice(0, 3), rng));
    }
  }

  return q;
}

export function generateVerkehrSicherheit(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const safety = pick(SAFETY_TOPICS, rng);
      q.push(createMCQ("sachkunde", "verkehr_sicherheit",
        `Welche Sicherheitsregel ist beim ${safety.topic} wichtig?`, safety.rule,
        SAFETY_TOPICS.filter(s => s.topic !== safety.topic).map(s => s.rule).slice(0, 3), rng));
    } else if (type === 1) {
      const safety1 = pick(SAFETY_TOPICS, rng);
      q.push(createMCQ("sachkunde", "verkehr_sicherheit",
        `Warum ist "${safety1.rule}" wichtig beim ${safety1.topic}?`, safety1.importance || (safety1 as any).danger || (safety1 as any).buddy || (safety1 as any).safe || "zur Sicherheit",
        ["es macht Spaß", "es ist unnötig", "es ist ein Trend"], rng));
    } else if (type === 2) {
      const safety2 = pick(SAFETY_TOPICS, rng);
      q.push(createMCQ("sachkunde", "verkehr_sicherheit",
        `Bei welcher Aktivität gilt die Regel "${safety2.rule}"?`, safety2.topic,
        SAFETY_TOPICS.filter(s => s.topic !== safety2.topic).map(s => s.topic).slice(0, 3), rng));
    } else {
      q.push(createMCQ("sachkunde", "verkehr_sicherheit",
        `Welche Farbe hat "Stop" auf der Ampel?`, "Rot",
        ["Grün", "Gelb", "Blau"], rng));
    }
  }

  return q;
}

export function generateKlima(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      const zone = pick(CLIMATE_ZONES, rng);
      q.push(createMCQ("sachkunde", "klima",
        `Wie ist das Klima in der Klimazone "${zone.zone}"?`, zone.temperature,
        CLIMATE_ZONES.filter(z => z.zone !== zone.zone).map(z => z.temperature).slice(0, 3), rng));
    } else if (type === 1) {
      const zone1 = pick(CLIMATE_ZONES, rng);
      const extra = (zone1 as any).rain || (zone1 as any).season || (zone1 as any).seasons || (zone1 as any).ice || "Besonderheit";
      q.push(createMCQ("sachkunde", "klima",
        `Was ist typisch für die "${zone1.zone}" Klimazone?`, extra,
        CLIMATE_ZONES.filter(z => z.zone !== zone1.zone)
          .map(z => (z as any).rain || (z as any).season || (z as any).seasons || (z as any).ice || "Trockenheit")
          .slice(0, 3), rng));
    } else if (type === 2) {
      const zone2 = pick(CLIMATE_ZONES, rng);
      q.push(createMCQ("sachkunde", "klima",
        `In welcher Klimazone ist es "${zone2.temperature}"?`, zone2.zone,
        CLIMATE_ZONES.filter(z => z.zone !== zone2.zone).map(z => z.zone).slice(0, 3), rng));
    } else {
      q.push(createMCQ("sachkunde", "klima",
        `In welcher Klimazone liegt Deutschland?`, "Gemäßigt",
        ["Tropisch", "Arktisch", "Subtropisch"], rng));
    }
  }

  return q;
}

const HEALTH_FACTS = [
  { topic: "Impfung", fact: "Welche Impfung schützt dich vor Krankheiten?", answer: "alle empfohlenen Impfungen", wrong: ["keine Impfungen", "nur eine Impfung", "Impfungen schaden dir"] },
  { topic: "Zahnarzt", fact: "Wie oft sollte man zum Zahnarzt gehen?", answer: "mindestens 2 Mal pro Jahr", wrong: ["nie", "einmal im Jahr", "nur wenn Schmerzen"] },
  { topic: "Zahnpflege", fact: "Was ist wichtig für gesunde Zähne?", answer: "Fluorid und Zähneputzen", wrong: ["Zucker essen", "nie putzen", "nicht trinken"] },
  { topic: "Schlaf", fact: "Warum ist Schlaf wichtig?", answer: "für Regeneration und Wachstum", wrong: ["zum Essen", "zum Spielen", "hat keine Funktion"] },
  { topic: "Hygiene", fact: "Warum soll man regelmäßig Hände waschen?", answer: "um Krankheitserreger zu entfernen", wrong: ["um Zeit zu verschwenden", "weil es Pflicht ist", "es ist nicht wichtig"] },
  { topic: "Ernährung", fact: "Welche Lebensmittel sollte man täglich essen?", answer: "Obst und Gemüse", wrong: ["Schokolade", "Fast Food", "Süßigkeiten"] },
  { topic: "Bewegung", fact: "Wie viel Bewegung brauchen Kinder täglich?", answer: "mindestens 60 Minuten", wrong: ["10 Minuten", "1 Stunde pro Woche", "keine Bewegung"] },
  { topic: "Stress", fact: "Was hilft bei Stress und schlechter Stimmung?", answer: "Sport, Gespräche und Entspannung", wrong: ["mehr Fernsehen", "mehr Süßes essen", "allein bleiben"] }
];

export function generateGesundheitAdvanced(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 3;
    if (type === 0) {
      const hf = pick(HEALTH_FACTS, rng);
      q.push(createMCQ("sachkunde", "gesundheit_advanced", hf.fact, hf.answer, hf.wrong, rng));
    } else if (type === 1) {
      const hf1 = pick(HEALTH_FACTS, rng);
      q.push(createMCQ("sachkunde", "gesundheit_advanced",
        `Welches Gesundheitsthema passt zu "${hf1.answer}"?`, hf1.topic,
        HEALTH_FACTS.filter(h => h.topic !== hf1.topic).map(h => h.topic).slice(0, 3), rng));
    } else {
      const hf2 = pick(HEALTH_FACTS, rng);
      q.push(createMCQ("sachkunde", "gesundheit_advanced",
        `Was ist NICHT empfehlenswert für ${hf2.topic}?`, hf2.wrong[0],
        [hf2.answer, hf2.wrong[1] || "gesunde Ernährung", hf2.wrong[2] || "Bewegung"], rng));
    }
  }

  return q;
}

const FOREST_FACTS = [
  { topic: "Bäume", fact: "Welche Bäume findest du im deutschen Wald?", answer: "Fichte, Buche, Eiche", wrong: ["Palme, Banane", "Kaktus, Yucca", "Birke, Palme"] },
  { topic: "Funktion", fact: "Welche Funktion hat der Wald für Menschen?", answer: "Sauerstoff, Holz, Erholung", wrong: ["nur Spielplatz", "nur für Jäger", "hat keine Funktion"] },
  { topic: "Humus", fact: "Was ist Humus?", answer: "verrottete Pflanzen und Tiere im Boden", wrong: ["eine Pflanze", "ein Tier", "Gestein"] },
  { topic: "Waldtiere", fact: "Welche Tiere leben im deutschen Wald?", answer: "Reh, Fuchs, Eichhörnchen", wrong: ["Löwe, Elefant", "Hai, Delphin", "Pinguin, Eisbär"] },
  { topic: "Stockwerke", fact: "Aus wie vielen Stockwerken besteht ein Wald?", answer: "4 Stockwerke (Baum, Strauch, Kraut, Boden)", wrong: ["1 Stockwerk", "2 Stockwerke", "10 Stockwerke"] },
  { topic: "Pilze", fact: "Welche Rolle spielen Pilze im Wald?", answer: "sie zersetzen abgestorbene Pflanzen", wrong: ["sie produzieren Sauerstoff", "sie fressen Tiere", "sie sind immer giftig"] },
  { topic: "Waldboden", fact: "Was findet man im Waldboden?", answer: "Wurzeln, Pilze, Würmer und Humus", wrong: ["Steine und Sand", "Plastik und Metall", "Wasser und Eis"] }
];

export function generateWaldÖkosystem(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 3;
    if (type === 0) {
      const ff = pick(FOREST_FACTS, rng);
      q.push(createMCQ("sachkunde", "wald_ökosystem", ff.fact, ff.answer, ff.wrong, rng));
    } else if (type === 1) {
      const ff1 = pick(FOREST_FACTS, rng);
      q.push(createMCQ("sachkunde", "wald_ökosystem",
        `Welches Waldthema passt zu "${ff1.answer}"?`, ff1.topic,
        FOREST_FACTS.filter(f => f.topic !== ff1.topic).map(f => f.topic).slice(0, 3), rng));
    } else {
      const ff2 = pick(FOREST_FACTS, rng);
      q.push(createMCQ("sachkunde", "wald_ökosystem",
        `Was ist FALSCH über "${ff2.topic}" im Wald?`, ff2.wrong[0],
        [ff2.answer, ff2.wrong[1] || "Bäume wachsen", ff2.wrong[2] || "Tiere leben hier"], rng));
    }
  }

  return q;
}

const BIRD_MIGRATION_FACTS = [
  { topic: "Grund", fact: "Warum wandern Zugvögel?", answer: "um Nahrung zu finden und der Kälte zu entgehen", wrong: ["zum Spaß", "um schneller zu fliegen", "weil sie müde sind"] },
  { topic: "Rückkehr", fact: "Wann kommen Zugvögel aus dem Süden zurück?", answer: "im Frühling", wrong: ["im Winter", "im Herbst", "im Sommer"] },
  { topic: "Navigation", fact: "Wie orientieren sich Zugvögel auf ihrer Reise?", answer: "nach Sonne, Sternen und Magnetfeld", wrong: ["nach Karte", "nach Kompass", "zufällig"] },
  { topic: "Beispiel", fact: "Welcher Vogel ist ein bekannter Zugvogel?", answer: "Schwalbe", wrong: ["Huhn", "Pinguin", "Strauß"] },
  { topic: "Ziel", fact: "Wohin fliegen Zugvögel im Winter?", answer: "in wärmere Gebiete (Afrika, Süden)", wrong: ["in die Arktis", "auf den Mond", "in die Antarktis"] },
  { topic: "Vorbereitung", fact: "Wie bereiten sich Zugvögel auf die Reise vor?", answer: "sie fressen viel und legen Fettreserven an", wrong: ["sie bauen neue Nester", "sie schlafen mehr", "sie wechseln die Farbe"] }
];

export function generateVogelZug(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 3;
    if (type === 0) {
      const mf = pick(BIRD_MIGRATION_FACTS, rng);
      q.push(createMCQ("sachkunde", "vogel_zug", mf.fact, mf.answer, mf.wrong, rng));
    } else if (type === 1) {
      const mf1 = pick(BIRD_MIGRATION_FACTS, rng);
      q.push(createMCQ("sachkunde", "vogel_zug",
        `Welches Thema beim Vogelzug passt zu "${mf1.answer}"?`, mf1.topic,
        BIRD_MIGRATION_FACTS.filter(f => f.topic !== mf1.topic).map(f => f.topic).slice(0, 3), rng));
    } else {
      const mf2 = pick(BIRD_MIGRATION_FACTS, rng);
      q.push(createMCQ("sachkunde", "vogel_zug",
        `Was ist beim Vogelzug falsch über "${mf2.topic}"?`, mf2.wrong[0],
        [mf2.answer, mf2.wrong[1] || "sie fliegen im Sommer", mf2.wrong[2] || "sie kennen den Weg nicht"], rng));
    }
  }

  return q;
}

const FOOD_CHAIN_FACTS = [
  { role: "Definition", fact: "Was ist eine Ernährungskette?", answer: "Verbindung von Lebewesen durch Fressbeziehungen", wrong: ["nur Pflanzen essen", "nur Tiere essen", "eine Art Lebensmittel"] },
  { role: "Start", fact: "Wo beginnt eine Ernährungskette?", answer: "bei Pflanzen (Produzenten)", wrong: ["bei Fleischfressern", "bei Pilzen", "bei Wasser"] },
  { role: "Produzenten", fact: "Welche Lebewesen sind Produzenten in der Ernährungskette?", answer: "Pflanzen", wrong: ["Herbivoren", "Karnivoren", "Zersetzer"] },
  { role: "Pflanzenfresser", fact: "Was sind Pflanzenfresser in einer Ernährungskette?", answer: "Konsumenten 1. Ordnung", wrong: ["Produzenten", "Konsumenten 2. Ordnung", "Zersetzer"] },
  { role: "Fleischfresser", fact: "Was sind Tiere, die Pflanzenfresser fressen, in der Ernährungskette?", answer: "Konsumenten 2. Ordnung", wrong: ["Produzenten", "Konsumenten 1. Ordnung", "Zersetzer"] },
  { role: "Zersetzer", fact: "Was zersetzen Bakterien und Pilze am Ende der Ernährungskette?", answer: "tote Organismen (Abbau zu Nährstoffen)", wrong: ["lebende Tiere", "Sauerstoff", "Wasser"] },
  { role: "Beispiel", fact: "Welches ist ein Beispiel für eine Ernährungskette?", answer: "Gras → Hase → Fuchs", wrong: ["Fuchs → Hase → Gras", "Hase → Fuchs → Gras", "Stein → Wasser → Luft"] }
];

export function generateErnährungskette(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 3;
    if (type === 0) {
      const fc = pick(FOOD_CHAIN_FACTS, rng);
      q.push(createMCQ("sachkunde", "ernährungskette", fc.fact, fc.answer, fc.wrong, rng));
    } else if (type === 1) {
      const fc1 = pick(FOOD_CHAIN_FACTS, rng);
      q.push(createMCQ("sachkunde", "ernährungskette",
        `Welche Rolle passt zu "${fc1.answer}" in der Ernährungskette?`, fc1.role,
        FOOD_CHAIN_FACTS.filter(f => f.role !== fc1.role).map(f => f.role).slice(0, 3), rng));
    } else {
      const fc2 = pick(FOOD_CHAIN_FACTS, rng);
      q.push(createMCQ("sachkunde", "ernährungskette",
        `Was trifft auf die Rolle "${fc2.role}" zu?`, fc2.answer,
        FOOD_CHAIN_FACTS.filter(f => f.role !== fc2.role).map(f => f.answer).slice(0, 3), rng));
    }
  }

  return q;
}

// ─── STROM & STROMKREIS ─────────────────────────────────────────────────────

const ELECTRICITY = [
  { component: "Batterie", function: "liefert Strom (Energiequelle)", symbol: "zwei Striche" },
  { component: "Glühbirne/Lampe", function: "wandelt Strom in Licht um", symbol: "Kreis mit Kreuz" },
  { component: "Schalter", function: "öffnet oder schließt den Stromkreis", symbol: "Unterbrechung" },
  { component: "Kabel/Draht", function: "leitet den Strom", symbol: "Linie" }
];

const CONDUCTORS_INSULATORS = [
  { material: "Kupfer", conducts: true, type: "Leiter" },
  { material: "Eisen", conducts: true, type: "Leiter" },
  { material: "Aluminium", conducts: true, type: "Leiter" },
  { material: "Plastik", conducts: false, type: "Isolator" },
  { material: "Gummi", conducts: false, type: "Isolator" },
  { material: "Holz", conducts: false, type: "Isolator" },
  { material: "Glas", conducts: false, type: "Isolator" },
  { material: "Wasser (mit Salz)", conducts: true, type: "Leiter" }
];

const CIRCUIT_FACTS = [
  { fact: "Ein geschlossener Stromkreis lässt Strom fließen", key: "geschlossen" },
  { fact: "Ein offener Stromkreis unterbricht den Strom", key: "offen" },
  { fact: "Kurzschluss ist gefährlich und kann Brände verursachen", key: "Kurzschluss" },
  { fact: "Strom fließt immer im Kreis von Plus nach Minus", key: "Kreislauf" }
];

export function generateStromkreis(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : (() => Math.random());
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 35; i++) {
    const type = i % 4;
    if (type === 0) {
      // Component function
      const comp = pick(ELECTRICITY, rng);
      q.push(createMCQ("sachkunde", "stromkreis",
        `Was ist die Funktion von ${comp.component} im Stromkreis?`, comp.function,
        ELECTRICITY.filter(e => e.component !== comp.component).map(e => e.function).slice(0, 3), rng));
    } else if (type === 1) {
      // Leiter oder Isolator
      const mat = pick(CONDUCTORS_INSULATORS, rng);
      q.push(createMCQ("sachkunde", "stromkreis",
        `Ist ${mat.material} ein elektrischer Leiter oder Isolator?`, mat.type,
        mat.type === "Leiter" ? ["Isolator", "Halbleiter", "Magnet"] : ["Leiter", "Halbleiter", "Magnet"], rng));
    } else if (type === 2) {
      // Circuit facts
      const cf = pick(CIRCUIT_FACTS, rng);
      q.push(createMCQ("sachkunde", "stromkreis",
        `Was beschreibt einen "${cf.key}" im Stromkreis?`, cf.fact,
        CIRCUIT_FACTS.filter(f => f.key !== cf.key).map(f => f.fact).slice(0, 3), rng));
    } else {
      // Mixed: which material conducts?
      const conductors = CONDUCTORS_INSULATORS.filter(m => m.conducts);
      const insulators = CONDUCTORS_INSULATORS.filter(m => !m.conducts);
      const chosen = pick(conductors, rng);
      q.push(createMCQ("sachkunde", "stromkreis",
        `Welches Material leitet Strom?`, chosen.material,
        insulators.map(m => m.material).slice(0, 3), rng));
    }
  }

  return q;
}

// ─── GENERATOR MAP ──────────────────────────────────────────────────────────

// ─── TYPING GENERATORS (10 per subtopic) ───────────────────────────────────────

function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[],
  hint?: string
): CurriculumTyping {
  return {
    type: "typing",
    topic,
    subtopic,
    question,
    answer,
    hint
  };
}

export function generateOrganeTyping(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  q.push(createTyping("sachkunde", "organe", "Welches Organ pumpt Blut?", ["Herz", "herz"]));
  q.push(createTyping("sachkunde", "organe", "Mit welchem Organ denkst du?", ["Gehirn", "gehirn"]));
  q.push(createTyping("sachkunde", "organe", "Mit welchem Organ atmest du?", ["Lunge", "lunge"]));
  q.push(createTyping("sachkunde", "organe", "Wo wird Nahrung verdaut?", ["Magen", "magen"]));
  q.push(createTyping("sachkunde", "organe", "Wie heißt das Organ, das Blut filtert?", ["Niere", "niere"]));
  q.push(createTyping("sachkunde", "organe", "Was filtert Giftstoffe aus dem Blut?", ["Leber", "leber"]));
  q.push(createTyping("sachkunde", "organe", "Welcher Teil des Körpers pumpt Blut?", "Herz"));
  q.push(createTyping("sachkunde", "organe", "Nenne das Organ im Schädel, das Denken steuert.", "Gehirn"));
  q.push(createTyping("sachkunde", "organe", "Was nimmt Sauerstoff auf und gibt CO₂ ab?", "Lunge"));
  q.push(createTyping("sachkunde", "organe", "Wie heißt das größte innere Organ?", ["Leber", "leber"]));
  return q;
}

export function generateErnährungTyping(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  q.push(createTyping("sachkunde", "ernährung", "Nenne 3 Früchte.", ["Apfel", "Banane", "Orange"]));
  q.push(createTyping("sachkunde", "ernährung", "Welche Lebensmittelgruppe enthält Kalzium?", ["Milchprodukte", "Milch", "Käse"]));
  q.push(createTyping("sachkunde", "ernährung", "Nenne 2 Gemüsesorten.", ["Karotte", "Kartoffel"]));
  q.push(createTyping("sachkunde", "ernährung", "Wieviel Wasser sollte man pro Tag trinken (in Litern)?", "2"));
  q.push(createTyping("sachkunde", "ernährung", "Welche Lebensmittelgruppe gibt dir Energie?", ["Getreide", "Kartoffeln", "Brot"]));
  q.push(createTyping("sachkunde", "ernährung", "Nenne ein Fisch oder Fleischprodukt.", ["Fisch", "Huhn", "Rind", "Schwein"]));
  q.push(createTyping("sachkunde", "ernährung", "Was ist wichtig für starke Knochen?", ["Kalzium", "Milch"]));
  q.push(createTyping("sachkunde", "ernährung", "Nenne ein Getreideprodukt.", ["Brot", "Reis", "Nudeln"]));
  q.push(createTyping("sachkunde", "ernährung", "Wie heißt die Gruppe von Lebensmitteln mit Vitaminen?", ["Obst", "Gemüse", "Obst und Gemüse"]));
  q.push(createTyping("sachkunde", "ernährung", "Welche Lebensmittel enthalten viel Fett?", ["Öl", "Butter", "Nüsse"]));
  return q;
}

export function generateBewegungSportTyping(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  q.push(createTyping("sachkunde", "bewegung_sport", "Wie oft pro Woche sollte man Sport treiben?", ["3", "mindestens 3 Mal"]));
  q.push(createTyping("sachkunde", "bewegung_sport", "Nenne einen Ausdauersport.", ["Laufen", "Schwimmen", "Radfahren", "Joggen"]));
  q.push(createTyping("sachkunde", "bewegung_sport", "Was passiert mit Muskeln, wenn man trainiert?", ["Sie werden stärker", "sie stärken", "sie wachsen"]));
  q.push(createTyping("sachkunde", "bewegung_sport", "Nenne ein Ballspiel.", ["Fußball", "Basketball", "Tennis", "Volleyball"]));
  q.push(createTyping("sachkunde", "bewegung_sport", "Welcher Muskel ist in deinem Arm?", ["Bizeps", "Trizeps"]));
  q.push(createTyping("sachkunde", "bewegung_sport", "Wie oft pro Woche sollte man mindestens 60 Minuten bewegen?", "7"));
  q.push(createTyping("sachkunde", "bewegung_sport", "Nenne einen Wassersport.", ["Schwimmen", "Surfen", "Segeln"]));
  q.push(createTyping("sachkunde", "bewegung_sport", "Wozu ist Sport gut?", ["Gesundheit", "Fitness", "Wohlbefinden"]));
  q.push(createTyping("sachkunde", "bewegung_sport", "Nenne ein Wintersportspiel.", ["Eishockey", "Ski", "Skifahren"]));
  q.push(createTyping("sachkunde", "bewegung_sport", "Welcher Sport ist gut für das Herz?", ["Laufen", "Schwimmen", "Radfahren"]));
  return q;
}

export function generateSäugetierTyping(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  q.push(createTyping("sachkunde", "säugetiere", "Nenne das größte Landsäugetier.", "Elefant"));
  q.push(createTyping("sachkunde", "säugetiere", "Welches Säugetier kann fliegen?", "Fledermaus"));
  q.push(createTyping("sachkunde", "säugetiere", "Nenne 2 Fleischfresser.", ["Löwe", "Tiger", "Bär", "Wolf"]));
  q.push(createTyping("sachkunde", "säugetiere", "Nenne 2 Pflanzenfresser.", ["Elefant", "Kuh", "Schaf", "Ziege"]));
  q.push(createTyping("sachkunde", "säugetiere", "Wo lebt der Wal?", ["Ozean", "Meer", "Wasser"]));
  q.push(createTyping("sachkunde", "säugetiere", "Nenne ein afrikanisches Säugetier.", ["Löwe", "Elefant", "Giraffe", "Zebra"]));
  q.push(createTyping("sachkunde", "säugetiere", "Wo lebt der Eisbär?", ["Arktis", "Nordpol"]));
  q.push(createTyping("sachkunde", "säugetiere", "Nenne ein Säugetier mit Streifen.", ["Zebra", "Tiger"]));
  q.push(createTyping("sachkunde", "säugetiere", "Welches Säugetier ist das schnellste?", "Gepard"));
  q.push(createTyping("sachkunde", "säugetiere", "Nenne ein Säugetier, das in Australien lebt.", ["Känguru", "Koala", "Schnabeltier"]));
  return q;
}

export function generateVögelTyping(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  q.push(createTyping("sachkunde", "vögel", "Nenne 2 Vogelarten.", ["Adler", "Rabe", "Taube", "Spatz"]));
  q.push(createTyping("sachkunde", "vögel", "Welcher Vogel kann nicht fliegen?", "Pinguin"));
  q.push(createTyping("sachkunde", "vögel", "Wo lebt der Pinguin?", "Antarktis"));
  q.push(createTyping("sachkunde", "vögel", "Welcher Vogel kann sprechen?", "Papagei"));
  q.push(createTyping("sachkunde", "vögel", "Nenne einen Raubvogel.", ["Adler", "Falke", "Sperber"]));
  q.push(createTyping("sachkunde", "vögel", "Welcher Vogel jagt nachts?", "Eule"));
  q.push(createTyping("sachkunde", "vögel", "Nenne einen Vogel mit rosa Farbe.", "Flamingo"));
  q.push(createTyping("sachkunde", "vögel", "Wie heißt die Flugsportart mit Vögeln?", ["Falknerei", "Falken"]));
  q.push(createTyping("sachkunde", "vögel", "Nenne einen Vogel, der lange unter Wasser tauchen kann.", ["Pinguin", "Ente", "Wasserralle"]));
  q.push(createTyping("sachkunde", "vögel", "Welcher Vogel baut Nester in Bäumen?", ["Vogel", "Spatz", "Taube", "Rabe"]));
  return q;
}

export function generateStromkreisTyping(seed?: number): CurriculumTyping[] {
  const q: CurriculumTyping[] = [];
  q.push(createTyping("sachkunde", "stromkreis", "Was liefert den Strom in einem einfachen Stromkreis?", ["Batterie", "batterie"]));
  q.push(createTyping("sachkunde", "stromkreis", "Was wandelt Strom in Licht um?", ["Glühbirne", "glühbirne", "Lampe", "lampe"]));
  q.push(createTyping("sachkunde", "stromkreis", "Womit kann man einen Stromkreis öffnen oder schließen?", ["Schalter", "schalter"]));
  q.push(createTyping("sachkunde", "stromkreis", "Wie nennt man ein Material, das Strom leitet?", ["Leiter", "leiter"]));
  q.push(createTyping("sachkunde", "stromkreis", "Wie nennt man ein Material, das Strom NICHT leitet?", ["Isolator", "isolator"]));
  q.push(createTyping("sachkunde", "stromkreis", "Nenne ein Metall, das Strom gut leitet.", ["Kupfer", "Eisen", "Aluminium"]));
  q.push(createTyping("sachkunde", "stromkreis", "Nenne ein Material, das als Isolator dient.", ["Plastik", "Gummi", "Holz", "Glas"]));
  q.push(createTyping("sachkunde", "stromkreis", "Was ist gefährlich und kann Brände auslösen?", ["Kurzschluss", "kurzschluss"]));
  q.push(createTyping("sachkunde", "stromkreis", "In welche Richtung fließt Strom (von wo nach wo)?", ["Plus nach Minus", "von Plus nach Minus"]));
  q.push(createTyping("sachkunde", "stromkreis", "Wie muss ein Stromkreis sein, damit Strom fließt?", ["geschlossen", "Geschlossen"]));
  return q;
}

// ... (Typing generators for remaining subtopics follow same pattern)

export const G4_Typing_Generators_Sachkunde = {
  organe: generateOrganeTyping,
  ernährung: generateErnährungTyping,
  bewegung_sport: generateBewegungSportTyping,
  säugetiere: generateSäugetierTyping,
  vögel: generateVögelTyping,
  stromkreis: generateStromkreisTyping
};

export const G4_Generators_Sachkunde = {
  organe: generateOrgane,
  ernährung: generateErnährung,
  bewegung_sport: generateBewegungSport,
  säugetiere: generateSäugetiere,
  vögel: generateVögel,
  reptilien_amphibien: generateReptilienAmphibien,
  insekten: generateInsekten,
  pflanzenbau: generatePflanzenbau,
  ökosysteme: generateÖkosysteme,
  wetter_klima: generateWetterKlima,
  jahreszeiten_natur: generateJahreszeitenNatur,
  skelet_muskulatur: generateSkeletMuskulatur,
  wasser: generateWasser,
  luft: generateLuft,
  steine_mineral: generateSteineMineral,
  energie: generateEnergie,
  deutsche_bundesländer: generateDeutscheBundesländer,
  europa: generateEuropa,
  beruf: generateBeruf,
  verkehr_sicherheit: generateVerkehrSicherheit,
  klima: generateKlima,
  gesundheit_advanced: generateGesundheitAdvanced,
  wald_ökosystem: generateWaldÖkosystem,
  vogel_zug: generateVogelZug,
  ernährungskette: generateErnährungskette,
  stromkreis: generateStromkreis
};
