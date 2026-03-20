// ─── GERMAN GRADE 3 SACHKUNDE GENERATORS ───────────────────────────────────────
// Procedural MCQ question generators for German Grade 3 Sachkunde (environmental science)
// Generates 45 questions per subtopic using seeded PRNG for reproducibility.
//
// 25 subtopics organized in 7 themes:
// Mein Körper & Gesundheit (4): Körperaufbau, Ernährungspyramide, Zahnentwicklung, Bewegung & Sport
// Tiere & Ökosysteme (5): Tierklassen, Nahrungsnetze, Schmetterlinge & Insekten, Waldtiere & Raubtiere, Haustiere & Züchtung
// Pflanzen & Botanik (4): Blüte & Bestäubung, Photosynthese (einfach), Pflanzenvermehrung, Waldschichten
// Wasser, Wetter & Klima (4): Wasserkreislauf (Detail), Wetter-Instrumente, Jahreszeiten & Klima, Gewässer-Typen
// Technik & Erfindungen (3): Einfache Maschinen, Energie-Quellen, Verkehrsmittel
// Gesellschaft & Geschichte (4): Berufe & Spezialisierung, Dorf vs Stadt, Grundbedürfnisse, Regeln & Gesetze
// Umwelt & Nachhaltigkeit (1): Umweltschutz & Recycling
//
// All questions in German language (Deutsch)
// Grade-appropriate for 8-9 year old students (Drittklässler)

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

// THEME 1: KÖRPER & GESUNDHEIT

// Körperaufbau
const SKELETON_PARTS = [
  { bone: "Schädel", function: "schützt das Gehirn" },
  { bone: "Wirbelsäule", function: "trägt den Körper und schützt das Rückenmark" },
  { bone: "Rippen", function: "schützen das Herz und die Lunge" },
  { bone: "Beckenknochen", function: "trägt die Beine und innere Organe" }
];

const BODY_SYSTEMS = [
  { system: "Skelett", function: "gibt dem Körper Form und Stabilität" },
  { system: "Muskeln", function: "ermöglichen Bewegung" },
  { system: "Herz-Kreislauf", function: "pumpt Blut durch den Körper" },
  { system: "Atemwege", function: "bringt Sauerstoff in den Körper" },
  { system: "Verdauungssystem", function: "verarbeitet Nahrung" }
];

// Ernährungspyramide
const FOOD_PYRAMID = [
  { level: "Basis", foods: "Getreide (Brot, Reis, Nudeln)", daily: "6-8 Portionen" },
  { level: "Ebene 2", foods: "Obst und Gemüse", daily: "5 Portionen täglich" },
  { level: "Ebene 3", foods: "Milchprodukte und Proteine", daily: "2-3 Portionen" },
  { level: "Spitze", foods: "Fette und Zucker", note: "sparsam verwenden" }
];

const NUTRIENTS = [
  { nutrient: "Kohlenhydrate", source: "Brot, Reis, Zucker", function: "Energie" },
  { nutrient: "Proteine", source: "Fleisch, Fisch, Eier, Bohnen", function: "Muskelaufbau und Wachstum" },
  { nutrient: "Fette", source: "Öl, Butter, Nüsse", function: "Energie und Zellbau" },
  { nutrient: "Vitamine", source: "Obst, Gemüse", function: "Immunsystem und Gesundheit" },
  { nutrient: "Mineralstoffe", source: "Milch, Gemüse", function: "Knochen und Blut" }
];

// Zahnentwicklung
const TOOTH_TYPES = [
  { type: "Schneidezähne", location: "vorne", function: "schneiden Nahrung" },
  { type: "Eckzähne", location: "neben Schneidezähnen", function: "halten und reißen" },
  { type: "Backenzähne", location: "hinten", function: "mahlen Nahrung" }
];

const TOOTH_FACTS = [
  { fact: "Kinder haben 20 Milchzähne", age: "von Geburt bis 6-7 Jahren" },
  { fact: "Erwachsene haben 32 bleibende Zähne", age: "ab 12-13 Jahren" },
  { fact: "Der Zahnwechsel dauert etwa 6-7 Jahre", process: "von 6-12 Jahren" },
  { fact: "Fluorid stärkt den Zahnschmelz", use: "in Zahnpasta" }
];

// Bewegung & Sport
const SPORTS_ACTIVITIES = [
  { sport: "Fußball", benefit: "Ausdauer, Schnelligkeit, Teamfähigkeit", muscles: "Beine und Herz" },
  { sport: "Schwimmen", benefit: "ganzer Körper trainiert", muscles: "alle Muskelgruppen" },
  { sport: "Radfahren", benefit: "Ausdauer und Beinmuskulatur", muscles: "Beine und Herz" },
  { sport: "Klettern", benefit: "Kraft und Koordination", muscles: "Arme, Beine, Rumpf" }
];

const PULSE_FACTS = [
  { fact: "Ruhepuls Kind: 80-120 Schläge pro Minute", context: "in Ruhe" },
  { fact: "Puls steigt beim Sport", reason: "Herz pumpt mehr Blut" },
  { fact: "Trainingspuls: 120-150 Schläge pro Minute", context: "beim Sport" }
];

// THEME 2: TIERE & ÖKOSYSTEME

// Tierklassen
const ANIMAL_CLASSES = [
  { class: "Säugetiere", characteristics: "Fell, Muttermilch, warmes Blut", examples: "Hund, Katze, Mensch, Wal" },
  { class: "Vögel", characteristics: "Federn, Eier, warmes Blut, Schnabel", examples: "Adler, Ente, Pinguin" },
  { class: "Reptilien", characteristics: "Schuppen, Eier, kaltes Blut", examples: "Schlange, Schildkröte, Eidechse" },
  { class: "Amphibien", characteristics: "feuchte Haut, beide Lebensräume", examples: "Frosch, Molch, Salamander" },
  { class: "Fische", characteristics: "Schuppen, Kiemen, Flossen, kaltes Blut", examples: "Hecht, Forelle, Karpfen" }
];

// Nahrungsnetze
const FOOD_WEBS = [
  { description: "Pflanze → Insekt → Vogel → Raubvogel", ecosystem: "Wiese" },
  { description: "Gras → Kaninchen → Fuchs → nichts (Spitzenraubtier)", ecosystem: "Wald" },
  { description: "Algen → Fisch → Otter → Mensch", ecosystem: "See" },
  { description: "Körner → Maus → Schlange → Adler", ecosystem: "Feld" }
];

const FOOD_ROLES = [
  { role: "Produzent (Pflanze)", description: "erzeugt Nahrung durch Photosynthese" },
  { role: "Konsument 1. Ordnung (Herbivore)", description: "frisst Pflanzen" },
  { role: "Konsument 2. Ordnung (Carnivore)", description: "frisst Herbivore" },
  { role: "Zersetzer (Bakterien, Pilze)", description: "baut tote Materie ab" }
];

// Schmetterlinge & Insekten
const BUTTERFLY_LIFECYCLE = [
  { stage: "Ei", duration: "3-5 Tage", description: "winziges Ei auf Blatt" },
  { stage: "Raupe", duration: "3-5 Wochen", description: "frisst ständig, wächst schnell" },
  { stage: "Puppe", duration: "1-2 Wochen", description: "ruhephase, Umwandlung" },
  { stage: "Schmetterling", duration: "2-6 Wochen", description: "fliegt, trinkt Nektar, legt Eier" }
];

const INSECT_ANATOMY = [
  { part: "Kopf", features: "Augen, Antennen, Mundwerkzeuge" },
  { part: "Thorax (Brust)", features: "6 Beine, 2-4 Flügel" },
  { part: "Abdomen (Hinterleib)", features: "Verdauung, Fortpflanzung" }
];

// Waldtiere & Raubtiere
const PREDATOR_ADAPTATIONS = [
  { predator: "Wolf", adaptation: "scharfe Zähne und Klauen", sense: "gutes Geruchsvermögen" },
  { predator: "Adler", adaptation: "scharfe Krallen, kräftige Flügel", sense: "ausgezeichnetes Sehvermögen" },
  { predator: "Luchs", adaptation: "kräftige Hinterbeine zum Springen", sense: "ausgezeichnetes Gehör" },
  { predator: "Schlange", adaptation: "Giftzähne (manche)", sense: "Wärmesensoren" }
];

const PREY_DEFENSES = [
  { prey: "Hase", defense: "schnelle Flucht, zick-zack laufen" },
  { prey: "Igel", defense: "Stacheln, einrollen" },
  { prey: "Reh", defense: "schnell rennen, gutes Gehör" },
  { prey: "Fisch", defense: "Schwarmverhalten, Tarnung" }
];

// Haustiere & Züchtung
const DOG_BREEDS = [
  { breed: "Schäferhund", origin: "Deutschland", purpose: "Arbeit, Schutz" },
  { breed: "Dackel", origin: "Deutschland", purpose: "Jagd" },
  { breed: "Pudel", origin: "Frankreich", purpose: "Begleithund" }
];

const DOMESTICATION = [
  { animal: "Hund", ancestor: "Wolf", process: "vor 10000+ Jahren" },
  { animal: "Katze", ancestor: "Wildkatze", process: "vor 9000+ Jahren" },
  { animal: "Schaf", ancestor: "Mufflon", process: "vor 10000+ Jahren" },
  { animal: "Pferd", ancestor: "Wildpferd", process: "vor 6000+ Jahren" }
];

// THEME 3: PFLANZEN & BOTANIK

// Blüte & Bestäubung
const FLOWER_PARTS = [
  { part: "Kelch", function: "schützt die Knospe" },
  { part: "Blütenblätter", function: "locken Bestäuber an" },
  { part: "Staubgefäße", function: "produzieren Pollen" },
  { part: "Stempel", function: "empfängt Pollen, wird zur Frucht" }
];

const POLLINATION = [
  { method: "Insektenbestäubung", animals: "Bienen, Schmetterlinge, Käfer", flowers: "bunte, duftende Blüten" },
  { method: "Windbestäubung", animals: "Luft", flowers: "kleine, unauffällige Blüten" },
  { method: "Vogelbestäubung", animals: "Kolibris, Nektarvögel", flowers: "rote, röhrenförmige Blüten" }
];

const SEED_DISPERSAL = [
  { method: "Windverbreitung", seeds: "leicht, mit Flügeln", examples: "Ahorn, Pusteblume" },
  { method: "Tierverbreitung", mechanism: "Früchte fressen, in Fell haken", examples: "Beeren, Kletten" },
  { method: "Wasserverbreitung", seeds: "wasserdicht", examples: "Kokosnuss, Seerose" },
  { method: "Selbstverbreitung", mechanism: "Explodieren/Katapultieren", examples: "Springkraut" }
];

// Photosynthese (einfach)
const PHOTOSYNTHESIS = [
  { input: "Sonnenlicht", role: "Energiequelle" },
  { input: "Wasser", role: "Rohstoff aus Wurzeln" },
  { input: "Kohlendioxid (CO2)", role: "aus der Luft" }
];

const CHLOROPHYLL = [
  { fact: "Grünes Pigment in Blättern", color: "grün" },
  { fact: "Fängt Sonnenlicht", purpose: "nutzt es für Energiegewinnung" },
  { fact: "Nur Pflanzen haben es", result: "nur Pflanzen machen ihre eigene Nahrung" }
];

// Pflanzenvermehrung
const PLANT_REPRODUCTION = [
  { type: "Geschlechtlich", method: "über Blüte und Samen", examples: "Blumen, Bäume" },
  { type: "Ungeschlechtlich", method: "Ausläufer, Knollen, Zwiebeln, Stecklinge", examples: "Erdbeere, Kartoffel, Hyazinthe" }
];

// Waldschichten
const FOREST_LAYERS = [
  { layer: "Baumschicht", height: "20-50 m", plants: "hohe Bäume (Eiche, Buche, Fichte)", light: "viel Licht" },
  { layer: "Strauchschicht", height: "2-20 m", plants: "kleinere Bäume und Sträucher", light: "gedimmt" },
  { layer: "Krautschicht", height: "0-2 m", plants: "Blüten, Gräser, Farne", light: "wenig Licht" },
  { layer: "Bodenschicht", depth: "im Boden", plants: "Pilze, Moose, Flechten", light: "kein Licht" }
];

const FOREST_ADAPTATION = [
  { adaptation: "große Blätter in unteren Schichten", reason: "fangen wenig Licht auf" },
  { adaptation: "tiefe Wurzeln bei großen Bäumen", reason: "Stabilität und Wasserspeicher" },
  { adaptation: "Schattenpflanzen unter dem Baldachin", reason: "gedeihen bei wenig Licht" }
];

// THEME 4: WASSER, WETTER & KLIMA

// Wasserkreislauf (Detail)
const WATER_CYCLE_DETAILED = [
  { process: "Verdunstung", description: "Wasser aus Ozeanen/Seen wird zu Wasserdampf durch Sonne", location: "Oberflächen von Gewässern" },
  { process: "Transpiration", description: "Pflanzen geben Wasser durch Blätter ab", location: "Blätter von Pflanzen" },
  { process: "Kondensation", description: "Wasserdampf wird zu Wassertropfen, bildet Wolken", location: "Atmosphäre" },
  { process: "Niederschlag", description: "Regen oder Schnee fällt auf Erde", location: "Wolken" },
  { process: "Versickerung", description: "Wasser fließt in Boden oder zurück zu Seen/Meeren", location: "Boden und Gewässer" }
];

// Wetter-Instrumente
const WEATHER_INSTRUMENTS = [
  { instrument: "Thermometer", measures: "Temperatur", unit: "°C (Grad Celsius)" },
  { instrument: "Barometer", measures: "Luftdruck", unit: "hPa (Hektopascal)" },
  { instrument: "Regenmesser", measures: "Niederschlagsmenge", unit: "mm (Millimeter)" },
  { instrument: "Windfahne/Windmesser", measures: "Windrichtung und -stärke", unit: "m/s oder Beaufort" },
  { instrument: "Hygrometer", measures: "Luftfeuchtigkeit", unit: "Prozent %" }
];

// Jahreszeiten & Klima
const CLIMATE_ZONES = [
  { zone: "Tropisch", location: "um Äquator", weather: "heiß, feucht, Regenwälder" },
  { zone: "Gemäßigt", location: "mittlere Breiten", weather: "4 Jahreszeiten, unterschiedlich" },
  { zone: "Polar", location: "Nord- und Südpol", weather: "sehr kalt, Schnee, Eis" },
  { zone: "Trocken (Wüste)", location: "subtropisch", weather: "sehr heiß, wenig Regen" }
];

const CLIMATE_INFLUENCES = [
  { factor: "Sonneneinstrahlung", effect: "bestimmt Temperatur" },
  { factor: "Meeresströmungen", effect: "beeinflussen Klima der Küsten" },
  { factor: "Höhenlage", effect: "je höher, desto kälter" },
  { factor: "Nähe zum Wasser", effect: "moderates Klima durch Wassermasse" }
];

// Gewässer-Typen
const WATER_BODIES = [
  { type: "Fluss", characteristics: "fließend, süßwasser, fließt zum Meer", ecosystem: "variabel" },
  { type: "See", characteristics: "stehend, süßwasser, unterschiedliche Größe", ecosystem: "stabil" },
  { type: "Bach", characteristics: "kleiner, fließend, kalt", ecosystem: "artenarm" },
  { type: "Meer", characteristics: "salzwasser, sehr groß, Wellen", ecosystem: "sehr artenreich" },
  { type: "Ozean", characteristics: "größte Salzwassermasse, tiefe Bereiche", ecosystem: "extrem artenreich" }
];

const RIVER_STAGES = [
  { stage: "Quelle", location: "in Bergen/Hügeln", flow: "schnell, steil" },
  { stage: "Oberlauf", location: "bergiges Gelände", flow: "turbulent, eng" },
  { stage: "Mittellauf", location: "Hügelland", flow: "breiter, langsamer" },
  { stage: "Unterlauf", location: "ebene Tiefland", flow: "breit, Mündung zum Meer" }
];

// THEME 5: TECHNIK & ERFINDUNGEN

// Einfache Maschinen
const SIMPLE_MACHINES = [
  { machine: "Hebel", principle: "nutzt Drehpunkt zur Kraftverstärkung", advantage: "kleine Kraft hebt schwere Last" },
  { machine: "Schraube", principle: "spiralförmige Schiene", advantage: "verstärkt Kraft" },
  { machine: "Keil", principle: "Druck wird zu Spreizung", advantage: "spaltet Holz" },
  { machine: "Rolle/Flaschenzug", principle: "umleitet Kraft", advantage: "macht Heben leichter" },
  { machine: "Rad/Achse", principle: "Rad dreht sich auf Achse", advantage: "reduziert Reibung" }
];

// Energie-Quellen
const ENERGY_SOURCES = [
  { source: "Kohle", type: "fossil", use: "Stromerzeugung, Heizung", carbon: "hohe CO2-Emission" },
  { source: "Erdöl", type: "fossil", use: "Benzin, Diesel, Kunststoffe", carbon: "hohe CO2-Emission" },
  { source: "Sonnenlicht", type: "erneuerbar", use: "Solaranlagen", carbon: "keine Emission" },
  { source: "Wind", type: "erneuerbar", use: "Windkraftanlagen", carbon: "keine Emission" },
  { source: "Wasser", type: "erneuerbar", use: "Wasserkraftwerk", carbon: "keine Emission" }
];

const ENERGY_FORMS = [
  { form: "Wärmeenergie", source: "Feuer, Sonne, Reibung" },
  { form: "Bewegungsenergie", source: "Wind, Wasser, Auto" },
  { form: "Elektrische Energie", source: "Batterie, Strom aus Kraftwerk" },
  { form: "Chemische Energie", source: "Kohle, Öl, Lebensmittel" }
];

// Verkehrsmittel
const TRANSPORT_HISTORY = [
  { era: "Früher", vehicle: "zu Fuß, Pferd, Schiff" },
  { era: "1800er", vehicle: "Eisenbahn, Kutsche" },
  { era: "1900er", vehicle: "Auto, Bus, Flugzeug" },
  { era: "Heute", vehicle: "Auto, Bus, Zug, Flugzeug, Schiff, Fahrrad" }
];

const TRANSPORT_POLLUTION = [
  { vehicle: "Auto mit Verbrennungsmotor", emission: "CO2, Abgase, Feinstaub" },
  { vehicle: "Flugzeug", emission: "viel CO2, hohe Umweltbelastung" },
  { vehicle: "Fahrrad", emission: "keine Emission" },
  { vehicle: "Elektrobus", emission: "geringere Emission (abhängig von Stromerzeugung)" }
];

// THEME 6: GESELLSCHAFT & GESCHICHTE

// Berufe & Spezialisierung
const SPECIALIZED_JOBS = [
  { job: "Chirurg", specialty: "operiert und heilt durch Eingriffe", education: "8+ Jahre Medizinstudium" },
  { job: "Architekt", specialty: "entwirft Gebäude und Pläne", education: "6+ Jahre Studium" },
  { job: "Elektriker", specialty: "installiert und repariert Elektrik", education: "3-4 Jahre Ausbildung" },
  { job: "Landwirt", specialty: "züchtet Pflanzen und Tiere", education: "3 Jahre Ausbildung oder Studium" },
  { job: "Programmierer", specialty: "schreibt Computersoftware", education: "Informatik Studium" }
];

// Dorf vs Stadt
const VILLAGE_CHARACTERISTICS = [
  { aspect: "Größe", village: "klein (100-5000 Menschen)", city: "groß (über 5000 Menschen)" },
  { aspect: "Häuser", village: "verstreut mit Feldern", city: "dicht zusammen, Hochhäuser" },
  { aspect: "Verkehr", village: "wenig, ruhig", city: "viel, laut" },
  { aspect: "Natur", village: "viel Grün, Felder, Wälder", city: "wenig Grün, Betonlandschaft" },
  { aspect: "Dienste", village: "Schule, Arzt, Einkauf begrenzt", city: "alle verfügbar, spezialisiert" }
];

// Grundbedürfnisse
const BASIC_NEEDS = [
  { need: "Nahrung", why: "Energie und Wachstum", how: "unterschiedlich je Kultur" },
  { need: "Wasser", why: "zum Überleben notwendig", how: "trinken, waschen" },
  { need: "Kleidung", why: "Schutz vor Wetter", how: "unterschiedlich je Klima und Kultur" },
  { need: "Unterkunft", why: "Schutz vor Wetter und Gefahren", how: "unterschiedliche Bauweisen" },
  { need: "Sicherheit", why: "psychisches und physisches Wohlbefinden", how: "Familie, Gemeinschaft, Gesetze" }
];

const CULTURAL_DIFFERENCES = [
  { aspect: "Essen", example_arctic: "Fisch und Robben", example_desert: "Datteln und Ziegenfleisch", example_europe: "Getreide, Obst, Fleisch" },
  { aspect: "Kleidung", example_arctic: "dicke Pelze und Fell", example_desert: "leichte, lange Stoffe", example_europe: "variabel je Jahreszeit" },
  { aspect: "Wohnung", example_arctic: "Iglu oder Zelt", example_desert: "Zelt oder Lehmhaus", example_europe: "Stein- oder Holzhaus" }
];

// Regeln & Gesetze
const RULES_PURPOSE = [
  { purpose: "Gerechtigkeit", example: "gleiche Rechte für alle" },
  { purpose: "Sicherheit", example: "Verkehrsregeln, Gesetze gegen Gewalt" },
  { purpose: "Ordnung", example: "Schulregeln, Arbeitszeiten" },
  { purpose: "Respekt", example: "andere achten, Eigentum schützen" }
];

const LEGAL_SYSTEMS = [
  { law: "Verkehrsgesetz", consequence: "Geldbuße, Führerscheinentzug bei Verstoß" },
  { law: "Schulpflicht", consequence: "Eltern müssen Kinder zur Schule schicken" },
  { law: "Kinderschutzgesetz", consequence: "Bestrafung bei Missbrauch" },
  { law: "Eigentumsrecht", consequence: "Diebstahl wird bestraft" }
];

// THEME 7: UMWELT & NACHHALTIGKEIT

// Umweltschutz & Recycling
const RECYCLING_MATERIALS = [
  { material: "Papier", origin: "Holz/Pflanzen", cycle: "kann 5-7× recycelt werden" },
  { material: "Kunststoff", origin: "Erdöl", cycle: "abbaubar nach 100+ Jahren" },
  { material: "Glas", origin: "Sand/Kiesel", cycle: "kann unbegrenzt recycelt werden" },
  { material: "Metall", origin: "Erz", cycle: "kann unbegrenzt recycelt werden" },
  { material: "Bio-Müll", origin: "Pflanzen/Tiere", cycle: "verkompostiert zu Humus" }
];

const ENVIRONMENTAL_PROTECTION = [
  { action: "Müll trennen", benefit: "Rohstoffe sparen, Deponien verringern" },
  { action: "Energie sparen", benefit: "weniger CO2, weniger Kosten" },
  { action: "Wasser sparen", benefit: "Trinkwasser für Zukunft bewahren" },
  { action: "Kurze Wege fahren", benefit: "weniger Abgase" },
  { action: "Plastik vermeiden", benefit: "Ozeane und Natur schützen" }
];

const POLLUTION_TYPES = [
  { type: "Luftverschmutzung", source: "Autos, Industrie, Kraftwerke", effect: "Atemwegserkrankungen, Klimawandel" },
  { type: "Wasserverschmutzung", source: "Industrie, Landwirtschaft, Plastik", effect: "Fischsterben, Trinkwassermangel" },
  { type: "Bodenbelastung", source: "Chemikalien, Pestizide, Müll", effect: "Unfruchtbarkeit, Pflanzenschaden" },
  { type: "Lichtverschmutzung", source: "künstliche Lichter", effect: "Störung von Tier- und Pflanzenzyklen" }
];

// ─── GENERATOR FUNCTIONS ────────────────────────────────────────────────────

export function generateKörperaufbau(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const bone = pick(SKELETON_PARTS, rng);
      q.push(createMCQ("sachkunde", "körperaufbau",
        `Was ist die Funktion des ${bone.bone}?`, bone.function,
        SKELETON_PARTS.filter(b => b.bone !== bone.bone).map(b => b.function)));
    } else if (type === 1) {
      const system = pick(BODY_SYSTEMS, rng);
      q.push(createMCQ("sachkunde", "körperaufbau",
        `Was macht das ${system.system}?`, system.function,
        BODY_SYSTEMS.filter(s => s.system !== system.system).map(s => s.function)));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "körperaufbau",
        `Welcher Knochen schützt das Gehirn?`, "Schädel",
        ["Wirbelsäule", "Rippen", "Becken"]));
    } else {
      q.push(createMCQ("sachkunde", "körperaufbau",
        `Was schützen die Rippen?`, "Herz und Lunge",
        ["Gehirn", "Magen", "Beine"]));
    }
  }

  return q;
}

export function generateErnährungspyramide(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const nutrient = pick(NUTRIENTS, rng);
      q.push(createMCQ("sachkunde", "ernährungspyramide",
        `Welche Funktion haben ${nutrient.nutrient}?`, nutrient.function,
        NUTRIENTS.filter(n => n.nutrient !== nutrient.nutrient).map(n => n.function)));
    } else if (type === 1) {
      const nutrient = pick(NUTRIENTS, rng);
      q.push(createMCQ("sachkunde", "ernährungspyramide",
        `Wo findest du ${nutrient.nutrient}?`, nutrient.source,
        NUTRIENTS.filter(n => n.nutrient !== nutrient.nutrient).map(n => n.source)));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "ernährungspyramide",
        `Was ist die Basis der Ernährungspyramide?`, "Getreide (Brot, Reis, Nudeln)",
        ["Zucker", "Fleisch", "Milch"]));
    } else {
      q.push(createMCQ("sachkunde", "ernährungspyramide",
        `Wie viele Portionen Obst und Gemüse täglich?`, "5 Portionen",
        ["2 Portionen", "10 Portionen", "1 Portion"]));
    }
  }

  return q;
}

export function generateZahnentwicklung(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const tooth = pick(TOOTH_TYPES, rng);
      q.push(createMCQ("sachkunde", "zahnentwicklung",
        `Was ist die Funktion der ${tooth.type}?`, tooth.function,
        TOOTH_TYPES.filter(t => t.type !== tooth.type).map(t => t.function)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "zahnentwicklung",
        `Wie viele Milchzähne hat ein Kind?`, "20 Zähne",
        ["16 Zähne", "32 Zähne", "12 Zähne"]));
    } else if (type === 2) {
      const fact = pick(TOOTH_FACTS, rng);
      q.push(createMCQ("sachkunde", "zahnentwicklung",
        `${fact.fact}?`, fact.age || fact.use, ["nie", "sofort", "sehr früh"]));
    } else {
      q.push(createMCQ("sachkunde", "zahnentwicklung",
        `Ab wann bekommen Kinder bleibende Zähne?`, "ab 6-7 Jahren",
        ["ab 1 Jahr", "ab 12 Jahren", "gar nicht"]));
    }
  }

  return q;
}

export function generateBewegungSport(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const sport = pick(SPORTS_ACTIVITIES, rng);
      q.push(createMCQ("sachkunde", "bewegung_sport",
        `Welche Vorteile hat ${sport.sport}?`, sport.benefit,
        SPORTS_ACTIVITIES.filter(s => s.sport !== sport.sport).map(s => s.benefit)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "bewegung_sport",
        `Wie lange sollten Kinder täglich Sport treiben?`, "mindestens 60 Minuten",
        ["10 Minuten", "5 Minuten", "kein Sport nötig"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "bewegung_sport",
        `Wie viele Schläge pro Minute hat der Puls beim Sport?`, "120-150 Schläge",
        ["10-20 Schläge", "200+ Schläge", "5 Schläge"]));
    } else {
      q.push(createMCQ("sachkunde", "bewegung_sport",
        `Warum steigt der Puls beim Sport?`, "das Herz pumpt mehr Blut",
        ["die Muskeln werden schwächer", "der Körper wird kalt", "die Atmung stoppt"]));
    }
  }

  return q;
}

export function generateTierklassen(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const animal = pick(ANIMAL_CLASSES, rng);
      q.push(createMCQ("sachkunde", "tierklassen",
        `Welche Charakteristiken haben ${animal.class}?`, animal.characteristics,
        ANIMAL_CLASSES.filter(a => a.class !== animal.class).map(a => a.characteristics)));
    } else if (type === 1) {
      const animal = pick(ANIMAL_CLASSES, rng);
      q.push(createMCQ("sachkunde", "tierklassen",
        `Nenne ein Beispiel für ${animal.class}:`, animal.examples.split(", ")[0],
        ANIMAL_CLASSES.filter(a => a.class !== animal.class).map(a => a.examples.split(", ")[0])));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "tierklassen",
        `Welche Tiere legen Eier?`, "Vögel, Reptilien, Amphibien, Fische",
        ["Säugetiere", "nur Vögel", "keine Tiere"]));
    } else {
      q.push(createMCQ("sachkunde", "tierklassen",
        `Welche Klasse haben Delphine?`, "Säugetiere",
        ["Fische", "Vögel", "Reptilien"]));
    }
  }

  return q;
}

export function generateNahrungsnetze(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const web = pick(FOOD_WEBS, rng);
      q.push(createMCQ("sachkunde", "nahrungsnetze",
        `Welches Nahrungsnetz ist das? ${web.description}`, web.description,
        FOOD_WEBS.filter(w => w.description !== web.description).map(w => w.description)));
    } else if (type === 1) {
      const role = pick(FOOD_ROLES, rng);
      q.push(createMCQ("sachkunde", "nahrungsnetze",
        `Was ist ein ${role.role}?`, role.description,
        FOOD_ROLES.filter(r => r.role !== role.role).map(r => r.description)));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "nahrungsnetze",
        `Wo beginnt ein Nahrungsnetz?`, "bei den Pflanzen (Produzenten)",
        ["bei Tieren", "bei der Sonne", "überall"]));
    } else {
      q.push(createMCQ("sachkunde", "nahrungsnetze",
        `Was sind Zersetzer im Nahrungsnetz?`, "Bakterien und Pilze, die tote Materie abbauen",
        ["Fleischfresser", "Pflanzenfresser", "Raubtiere"]));
    }
  }

  return q;
}

export function generateSchmetterlinge(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const stage = pick(BUTTERFLY_LIFECYCLE, rng);
      q.push(createMCQ("sachkunde", "schmetterlinge",
        `Was ist das ${stage.stage}-Stadium des Schmetterlings?`, stage.description,
        BUTTERFLY_LIFECYCLE.filter(s => s.stage !== stage.stage).map(s => s.description)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "schmetterlinge",
        `Wie lange dauert der Lebenszyklus eines Schmetterlings?`, "mehrere Wochen bis Monate",
        ["1 Tag", "1 Jahr", "sein ganzes Leben"]));
    } else if (type === 2) {
      const part = pick(INSECT_ANATOMY, rng);
      q.push(createMCQ("sachkunde", "schmetterlinge",
        `Was hat ein Insekt am ${part.part}?`, part.features,
        INSECT_ANATOMY.filter(p => p.part !== part.part).map(p => p.features)));
    } else {
      q.push(createMCQ("sachkunde", "schmetterlinge",
        `Wie viele Beine hat eine Raupe?`, "viele Beine (mehr als 6)",
        ["6 Beine", "4 Beine", "8 Beine"]));
    }
  }

  return q;
}

export function generateWaldtiereRaubtiere(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const predator = pick(PREDATOR_ADAPTATIONS, rng);
      q.push(createMCQ("sachkunde", "waldtiere_raubtiere",
        `Welche Adaptation hat ein ${predator.predator}?`, predator.adaptation,
        PREDATOR_ADAPTATIONS.filter(p => p.predator !== predator.predator).map(p => p.adaptation)));
    } else if (type === 1) {
      const prey = pick(PREY_DEFENSES, rng);
      q.push(createMCQ("sachkunde", "waldtiere_raubtiere",
        `Wie verteidigt sich ein ${prey.prey}?`, prey.defense,
        PREY_DEFENSES.filter(p => p.prey !== prey.prey).map(p => p.defense)));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "waldtiere_raubtiere",
        `Was ist ein Raubtier?`, "ein Tier, das andere Tiere jagt und frisst",
        ["ein Tier, das nur Pflanzen frisst", "ein harmloser Waldbewohner", "ein Vogel"]));
    } else {
      q.push(createMCQ("sachkunde", "waldtiere_raubtiere",
        `Warum haben Raubtiere Anpassungen?`, "um ihre Beute zu fangen und zu überleben",
        ["zum Spielen", "zum Spaß", "weil sie es so mögen"]));
    }
  }

  return q;
}

export function generateHaustierZüchtung(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const breed = pick(DOG_BREEDS, rng);
      q.push(createMCQ("sachkunde", "haustier_züchtung",
        `Wofür wurde die Rasse "${breed.breed}" gezüchtet?`, breed.purpose,
        DOG_BREEDS.filter(b => b.breed !== breed.breed).map(b => b.purpose)));
    } else if (type === 1) {
      const domestic = pick(DOMESTICATION, rng);
      q.push(createMCQ("sachkunde", "haustier_züchtung",
        `Von welchem wilden Tier stammt der ${domestic.animal} ab?`, domestic.ancestor,
        DOMESTICATION.filter(d => d.animal !== domestic.animal).map(d => d.ancestor)));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "haustier_züchtung",
        `Was ist Domestikation?`, "die Züchtung von wilden Tieren zu Haustieren durch Menschen",
        ["das Fangen von wilden Tieren", "das Beobachten von Tieren", "das Trainieren"]));
    } else {
      q.push(createMCQ("sachkunde", "haustier_züchtung",
        `Wie lange gibt es Hunde als Haustiere?`, "über 10000 Jahre",
        ["100 Jahre", "1000 Jahre", "seit gestern"]));
    }
  }

  return q;
}

export function generateBlütebestäubung(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const part = pick(FLOWER_PARTS, rng);
      q.push(createMCQ("sachkunde", "blüte_bestäubung",
        `Was ist die Funktion des ${part.part}?`, part.function,
        FLOWER_PARTS.filter(p => p.part !== part.part).map(p => p.function)));
    } else if (type === 1) {
      const pollination = pick(POLLINATION, rng);
      q.push(createMCQ("sachkunde", "blüte_bestäubung",
        `Welche Tiere bestäuben Blüten bei ${pollination.method}?`, pollination.animals,
        POLLINATION.filter(p => p.method !== pollination.method).map(p => p.animals)));
    } else if (type === 2) {
      const dispersal = pick(SEED_DISPERSAL, rng);
      q.push(createMCQ("sachkunde", "blüte_bestäubung",
        `Wie werden Samen durch ${dispersal.method} verbreitet?`, dispersal.examples,
        SEED_DISPERSAL.filter(s => s.method !== dispersal.method).map(s => s.examples)));
    } else {
      q.push(createMCQ("sachkunde", "blüte_bestäubung",
        `Warum sind Blüten bunt und duften?`, "um Insekten anzulocken zur Bestäubung",
        ["zum Schutz", "zum Wachsen", "zum Spielen"]));
    }
  }

  return q;
}

export function generatePhotosynthese(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const input = pick(PHOTOSYNTHESIS, rng);
      q.push(createMCQ("sachkunde", "photosynthese_einfach",
        `Was braucht eine Pflanze für Photosynthese? ${input.input}`, input.role,
        PHOTOSYNTHESIS.filter(p => p.input !== input.input).map(p => p.role)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "photosynthese_einfach",
        `Was ist Photosynthese?`, "die Herstellung von Nahrung durch Pflanzen mit Sonnenlicht",
        ["das Essen von Insekten", "das Wachsen von Wurzeln", "das Blüten treiben"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "photosynthese_einfach",
        `Wozu brauchen Pflanzen Chlorophyll?`, "um Sonnenlicht einzufangen und in Energie umzuwandeln",
        ["zum Wachsen", "zur Farbe", "zum Schutz"]));
    } else {
      q.push(createMCQ("sachkunde", "photosynthese_einfach",
        `Können nur Pflanzen Photosynthese betreiben?`, "ja, nur Pflanzen und manche Mikroorganismen",
        ["nein, auch Tiere", "ja, alle Lebewesen", "nur Menschen"]));
    }
  }

  return q;
}

export function generatePflanzenvermehrung(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const repro = pick(PLANT_REPRODUCTION, rng);
      q.push(createMCQ("sachkunde", "pflanzenvermehrung",
        `Was ist ${repro.type} Vermehrung?`, repro.method,
        PLANT_REPRODUCTION.filter(p => p.type !== repro.type).map(p => p.method)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "pflanzenvermehrung",
        `Welche Pflanze vermehrt sich über Ausläufer?`, "Erdbeere",
        ["Tomate", "Rose", "Baum"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "pflanzenvermehrung",
        `Was ist ein Steckling?`, "ein Pflanzenteil, der zu einer neuen Pflanze wächst",
        ["ein kleiner Baum", "ein Samen", "eine Wurzel"]));
    } else {
      q.push(createMCQ("sachkunde", "pflanzenvermehrung",
        `Welche Vermehrung braucht Bienen?`, "geschlechtliche Vermehrung über Bestäubung",
        ["ungeschlechtlich über Ausläufer", "über Knollen", "gar keine Vermehrung"]));
    }
  }

  return q;
}

export function generateWaldschichten(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const layer = pick(FOREST_LAYERS, rng);
      q.push(createMCQ("sachkunde", "waldschichten",
        `Was lebt in der ${layer.layer}?`, layer.plants,
        FOREST_LAYERS.filter(l => l.layer !== layer.layer).map(l => l.plants)));
    } else if (type === 1) {
      const layer = pick(FOREST_LAYERS, rng);
      q.push(createMCQ("sachkunde", "waldschichten",
        `In welcher Waldschicht ist die Höhe ${layer.height}?`, layer.layer,
        FOREST_LAYERS.filter(l => l.layer !== layer.layer).map(l => l.layer)));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "waldschichten",
        `Wie viele Schichten hat ein Wald?`, "vier Hauptschichten",
        ["zwei", "drei", "fünf"]));
    } else {
      q.push(createMCQ("sachkunde", "waldschichten",
        `Warum haben Pflanzen in der Bodenschicht große Blätter?`, "um wenig Licht einzufangen",
        ["zum Schutz", "zum Wachsen", "zum Spielen"]));
    }
  }

  return q;
}

export function generateWasserkreislaufDetail(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const process = pick(WATER_CYCLE_DETAILED, rng);
      q.push(createMCQ("sachkunde", "wasserkreislauf_detail",
        `Was ist ${process.process}?`, process.description,
        WATER_CYCLE_DETAILED.filter(p => p.process !== process.process).map(p => p.description)));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "wasserkreislauf_detail",
        `Welcher Prozess verwandelt Wasser zu Wasserdampf?`, "Verdunstung",
        ["Kondensation", "Versickerung", "Niederschlag"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "wasserkreislauf_detail",
        `Wo findet Kondensation statt?`, "in der Atmosphäre (Bildung von Wolken)",
        ["auf dem Boden", "im Meer", "in Pflanzen"]));
    } else {
      q.push(createMCQ("sachkunde", "wasserkreislauf_detail",
        `Wie lange dauert der Wasserkreislauf?`, "ständig (täglich, kontinuierlich)",
        ["nur im Sommer", "nur einmal im Jahr", "gar nicht"]));
    }
  }

  return q;
}

export function generateWetterInstrumente(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const instrument = pick(WEATHER_INSTRUMENTS, rng);
      q.push(createMCQ("sachkunde", "wetter_instrumente",
        `Was misst ${instrument.instrument}?`, instrument.measures,
        WEATHER_INSTRUMENTS.filter(i => i.instrument !== instrument.instrument).map(i => i.measures)));
    } else if (type === 1) {
      const instrument = pick(WEATHER_INSTRUMENTS, rng);
      q.push(createMCQ("sachkunde", "wetter_instrumente",
        `In welcher Einheit misst man ${instrument.measures}?`, instrument.unit,
        WEATHER_INSTRUMENTS.filter(i => i.measures !== instrument.measures).map(i => i.unit)));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "wetter_instrumente",
        `Mit welchem Gerät misst man Windgeschwindigkeit?`, "Windfahne/Anemometer",
        ["Thermometer", "Barometer", "Regenmesser"]));
    } else {
      q.push(createMCQ("sachkunde", "wetter_instrumente",
        `Was ist ein Hygrometer?`, "ein Gerät zur Messung der Luftfeuchtigkeit",
        ["Temperaturmesser", "Windmesser", "Regenmesser"]));
    }
  }

  return q;
}

export function generateJahreszeitenKlima(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const zone = pick(CLIMATE_ZONES, rng);
      q.push(createMCQ("sachkunde", "jahreszeiten_klima",
        `Wie ist das Klima in der ${zone.zone}-Zone?`, zone.weather,
        CLIMATE_ZONES.filter(z => z.zone !== zone.zone).map(z => z.weather)));
    } else if (type === 1) {
      const factor = pick(CLIMATE_INFLUENCES, rng);
      q.push(createMCQ("sachkunde", "jahreszeiten_klima",
        `Welcher Faktor beeinflusst das Klima? ${factor.factor}`, factor.effect,
        CLIMATE_INFLUENCES.filter(f => f.factor !== factor.factor).map(f => f.effect)));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "jahreszeiten_klima",
        `Wo ist das Klima am wärmsten?`, "in tropischen Regionen um den Äquator",
        ["an den Polen", "in Deutschland", "überall gleich"]));
    } else {
      q.push(createMCQ("sachkunde", "jahreszeiten_klima",
        `Wie viele Jahreszeiten gibt es?`, "vier (Frühling, Sommer, Herbst, Winter)",
        ["zwei", "sechs", "eine"]));
    }
  }

  return q;
}

export function generateGewässerTypen(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const water = pick(WATER_BODIES, rng);
      q.push(createMCQ("sachkunde", "gewässer_typen",
        `Was ist ein ${water.type}?`, water.characteristics,
        WATER_BODIES.filter(w => w.type !== water.type).map(w => w.characteristics)));
    } else if (type === 1) {
      const stage = pick(RIVER_STAGES, rng);
      q.push(createMCQ("sachkunde", "gewässer_typen",
        `Was ist die ${stage.stage} eines Flusses?`, `${stage.location}, ${stage.flow}`,
        RIVER_STAGES.filter(s => s.stage !== stage.stage).map(s => `${s.location}, ${s.flow}`)));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "gewässer_typen",
        `Ist Meerwasser süß oder salzig?`, "salzig",
        ["süß", "halbsalzig", "geschmacklos"]));
    } else {
      q.push(createMCQ("sachkunde", "gewässer_typen",
        `Was ist der Unterschied zwischen Fluss und See?`, "Fluss fließt, See ist stehend",
        ["beide fließen", "beide stehen still", "kein Unterschied"]));
    }
  }

  return q;
}

export function generateEinfacheMaschinen(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const machine = pick(SIMPLE_MACHINES, rng);
      q.push(createMCQ("sachkunde", "einfache_maschinen",
        `Was ist ein ${machine.machine}?`, machine.principle,
        SIMPLE_MACHINES.filter(m => m.machine !== machine.machine).map(m => m.principle)));
    } else if (type === 1) {
      const machine = pick(SIMPLE_MACHINES, rng);
      q.push(createMCQ("sachkunde", "einfache_maschinen",
        `Welcher Vorteil hat ${machine.machine}?`, machine.advantage,
        SIMPLE_MACHINES.filter(m => m.machine !== machine.machine).map(m => m.advantage)));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "einfache_maschinen",
        `Welche einfache Maschine ist eine Rampe?`, "Keil",
        ["Hebel", "Rad", "Rolle"]));
    } else {
      q.push(createMCQ("sachkunde", "einfache_maschinen",
        `Wozu dient ein Flaschenzug?`, "um schwere Lasten leichter zu heben",
        ["zum Brechen", "zum Bohren", "zum Schneiden"]));
    }
  }

  return q;
}

export function generateEnergiequellen(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const source = pick(ENERGY_SOURCES, rng);
      q.push(createMCQ("sachkunde", "energie_quellen",
        `Was ist ${source.source}?`, `${source.type} Energiequelle zur ${source.use}`,
        ENERGY_SOURCES.filter(s => s.source !== source.source).map(s => `${s.type} Energiequelle`)));
    } else if (type === 1) {
      const source = pick(ENERGY_SOURCES, rng);
      q.push(createMCQ("sachkunde", "energie_quellen",
        `Ist ${source.source} eine erneuerbare Energiequelle?`, source.type === "erneuerbar" ? "ja" : "nein",
        ["vielleicht", "manchmal", "weiß nicht"]));
    } else if (type === 2) {
      const form = pick(ENERGY_FORMS, rng);
      q.push(createMCQ("sachkunde", "energie_quellen",
        `Was ist ${form.form}?`, form.source,
        ENERGY_FORMS.filter(f => f.form !== form.form).map(f => f.source)));
    } else {
      q.push(createMCQ("sachkunde", "energie_quellen",
        `Welche Energiequelle gibt kein CO2 ab?`, "Sonne, Wind, Wasser",
        ["Kohle", "Erdöl", "Gas"]));
    }
  }

  return q;
}

export function generateVerkehrsmittel(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const history = pick(TRANSPORT_HISTORY, rng);
      q.push(createMCQ("sachkunde", "verkehrsmittel",
        `Welche Verkehrsmittel gab es in der ${history.era}?`, history.vehicle,
        TRANSPORT_HISTORY.filter(h => h.era !== history.era).map(h => h.vehicle)));
    } else if (type === 1) {
      const pollution = pick(TRANSPORT_POLLUTION, rng);
      q.push(createMCQ("sachkunde", "verkehrsmittel",
        `Welche Emissionen hat ${pollution.vehicle}?`, pollution.emission,
        TRANSPORT_POLLUTION.filter(p => p.vehicle !== pollution.vehicle).map(p => p.emission)));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "verkehrsmittel",
        `Welches Verkehrsmittel ist am umweltfreundlichsten?`, "Fahrrad (keine Emission)",
        ["Auto", "Flugzeug", "Bus"]));
    } else {
      q.push(createMCQ("sachkunde", "verkehrsmittel",
        `Wann wurden die ersten Autos erfunden?`, "um 1900",
        ["um 1400", "um 1600", "um 1200"]));
    }
  }

  return q;
}

export function generateBerufe(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const job = pick(SPECIALIZED_JOBS, rng);
      q.push(createMCQ("sachkunde", "berufe",
        `Was macht ein ${job.job}?`, job.specialty,
        SPECIALIZED_JOBS.filter(j => j.job !== job.job).map(j => j.specialty)));
    } else if (type === 1) {
      const job = pick(SPECIALIZED_JOBS, rng);
      q.push(createMCQ("sachkunde", "berufe",
        `Welche Ausbildung braucht ein ${job.job}?`, job.education,
        SPECIALIZED_JOBS.filter(j => j.job !== job.job).map(j => j.education)));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "berufe",
        `Was ist ein spezialisierter Beruf?`, "ein Beruf mit Spezialwissen in einem Bereich",
        ["ein einfacher Beruf", "kein richtiger Beruf", "ein neuer Beruf"]));
    } else {
      q.push(createMCQ("sachkunde", "berufe",
        `Sind spezialisierte Berufe wichtig?`, "ja, sehr wichtig für die Gesellschaft",
        ["nein, nicht wichtig", "manchmal", "nur für Erwachsene"]));
    }
  }

  return q;
}

export function generateDorfStadt(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const characteristic = pick(VILLAGE_CHARACTERISTICS, rng);
      q.push(createMCQ("sachkunde", "dorf_stadt",
        `Wie ist ${characteristic.aspect} im Dorf?`, characteristic.village,
        [characteristic.city, "überall gleich", "kein Unterschied"]));
    } else if (type === 1) {
      q.push(createMCQ("sachkunde", "dorf_stadt",
        `Wie viele Menschen leben in einer Stadt?`, "über 5000 Menschen",
        ["unter 1000", "100-500", "genau 2000"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "dorf_stadt",
        `Welche Dienste sind in der Stadt leichter verfügbar?`, "Schulen, Ärzte, Geschäfte, spezialisierte Dienste",
        ["nur Supermärkte", "nur Schulen", "keine Dienste"]));
    } else {
      q.push(createMCQ("sachkunde", "dorf_stadt",
        `Ist die Natur näher im Dorf oder in der Stadt?`, "im Dorf (Felder, Wälder, Wiesen)",
        ["in der Stadt", "überall gleich", "gar nicht"]));
    }
  }

  return q;
}

export function generateGrundbedürfnisse(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const need = pick(BASIC_NEEDS, rng);
      q.push(createMCQ("sachkunde", "grundbedürfnisse",
        `Warum brauchen wir ${need.need}?`, need.why,
        BASIC_NEEDS.filter(n => n.need !== need.need).map(n => n.why)));
    } else if (type === 1) {
      const diff = pick(CULTURAL_DIFFERENCES, rng);
      q.push(createMCQ("sachkunde", "grundbedürfnisse",
        `Unterscheiden sich Grundbedürfnisse in verschiedenen Kulturen?`, "ja, aber grundlegende Bedürfnisse sind gleich",
        ["nein, überall gleich", "ja, völlig unterschiedlich", "weiß nicht"]));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "grundbedürfnisse",
        `Welche Kulturen haben unterschiedliche Kleidung?`, "alle Kulturen je nach Klima",
        ["keine", "nur eine", "nur europäische"]));
    } else {
      q.push(createMCQ("sachkunde", "grundbedürfnisse",
        `Ist Sicherheit ein Grundbedürfnis?`, "ja, psychisches und physisches Wohlbefinden",
        ["nein", "manchmal", "nur für Kinder"]));
    }
  }

  return q;
}

export function generateRegelnGesetze(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const purpose = pick(RULES_PURPOSE, rng);
      q.push(createMCQ("sachkunde", "regeln_gesetze",
        `Warum gibt es Regeln? Wegen: ${purpose.purpose}`, purpose.example,
        RULES_PURPOSE.filter(r => r.purpose !== purpose.purpose).map(r => r.example)));
    } else if (type === 1) {
      const law = pick(LEGAL_SYSTEMS, rng);
      q.push(createMCQ("sachkunde", "regeln_gesetze",
        `Was ist die Folge von ${law.law}?`, law.consequence,
        LEGAL_SYSTEMS.filter(l => l.law !== law.law).map(l => l.consequence)));
    } else if (type === 2) {
      q.push(createMCQ("sachkunde", "regeln_gesetze",
        `Warum brauchen wir Gesetze?`, "für Ordnung, Gerechtigkeit und Sicherheit",
        ["zum Spielen", "nicht wichtig", "nur für Erwachsene"]));
    } else {
      q.push(createMCQ("sachkunde", "regeln_gesetze",
        `Sind Verkehrsregeln wichtig?`, "ja, sehr wichtig für Sicherheit",
        ["nein, nicht nötig", "manchmal", "nur für Autos"]));
    }
  }

  return q;
}

export function generateUmweltschutz(seed?: number): CurriculumMCQ[] {
  const rng = seed !== undefined ? mulberry32(seed) : Math.random;
  const q: CurriculumMCQ[] = [];

  for (let i = 0; i < 45; i++) {
    const type = i % 4;
    if (type === 0) {
      const material = pick(RECYCLING_MATERIALS, rng);
      q.push(createMCQ("sachkunde", "umweltschutz_recycling",
        `Woher kommt ${material.material}?`, material.origin,
        RECYCLING_MATERIALS.filter(m => m.material !== material.material).map(m => m.origin)));
    } else if (type === 1) {
      const action = pick(ENVIRONMENTAL_PROTECTION, rng);
      q.push(createMCQ("sachkunde", "umweltschutz_recycling",
        `Welcher Vorteil hat ${action.action}?`, action.benefit,
        ENVIRONMENTAL_PROTECTION.filter(a => a.action !== action.action).map(a => a.benefit)));
    } else if (type === 2) {
      const pollution = pick(POLLUTION_TYPES, rng);
      q.push(createMCQ("sachkunde", "umweltschutz_recycling",
        `Was ist ${pollution.type}?`, pollution.source,
        POLLUTION_TYPES.filter(p => p.type !== pollution.type).map(p => p.source)));
    } else {
      q.push(createMCQ("sachkunde", "umweltschutz_recycling",
        `Warum sollten wir Müll trennen?`, "um Rohstoffe zu sparen und die Umwelt zu schützen",
        ["das ist nicht wichtig", "macht keinen Unterschied", "kostet zu viel"]));
    }
  }

  return q;
}

// ─── GENERATOR MAP ──────────────────────────────────────────────────────────

export const G3_Generators_Sachkunde = {
  körperaufbau: generateKörperaufbau,
  ernährungspyramide: generateErnährungspyramide,
  zahnentwicklung: generateZahnentwicklung,
  bewegung_sport: generateBewegungSport,
  tierklassen: generateTierklassen,
  nahrungsnetze: generateNahrungsnetze,
  schmetterlinge_insekten: generateSchmetterlinge,
  waldtiere_raubtiere: generateWaldtiereRaubtiere,
  haustier_züchtung: generateHaustierZüchtung,
  blüte_bestäubung: generateBlütebestäubung,
  photosynthese_einfach: generatePhotosynthese,
  pflanzenvermehrung: generatePflanzenvermehrung,
  waldschichten: generateWaldschichten,
  wasserkreislauf_detail: generateWasserkreislaufDetail,
  wetter_instrumente: generateWetterInstrumente,
  jahreszeiten_klima: generateJahreszeitenKlima,
  gewässer_typen: generateGewässerTypen,
  einfache_maschinen: generateEinfacheMaschinen,
  energie_quellen: generateEnergiequellen,
  verkehrsmittel: generateVerkehrsmittel,
  berufe: generateBerufe,
  dorf_stadt: generateDorfStadt,
  grundbedürfnisse: generateGrundbedürfnisse,
  regeln_gesetze: generateRegelnGesetze,
  umweltschutz_recycling: generateUmweltschutz
};
