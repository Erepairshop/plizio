// ─── BIOLOGIE GENERATORS (Klasse 5) ───────────────────────────────────────
// English Test mintájára strukturálva
// 24 subtopic × 2 (MCQ + Typing) = 48 generátor
// Minden MCQ generátor: 30 kérdés (4-6 template variáció)
// Minden Typing generátor: 5 kérdés

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";
import { setK5GeneratorMap } from "./biologieCurriculum5";

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

// ─── DATA POOLS (KLASSE 5) ────────────────────────────────────────────────

// WIRBELTIERE
const FISH_DATA = [
  { name: "Hecht", organ: "Kiemen", habitat: "Süßwasser", speed: "schnell" },
  { name: "Forelle", organ: "Kiemen", habitat: "Kalte Flüsse", color: "rot-braun" },
  { name: "Barsch", organ: "Kiemen", habitat: "Seen", form: "oval" },
  { name: "Hai", organ: "Kiemen", habitat: "Salzwasser", teeth: "scharfe Zähne" },
  { name: "Kabeljau", organ: "Kiemen", habitat: "Meeresboden", size: "groß" },
  { name: "Lachse", organ: "Kiemen", habitat: "Flüsse und Meere", migration: "wandernd" },
  { name: "Zander", organ: "Kiemen", habitat: "Seen und Flüsse", predator: "Raubfisch" },
  { name: "Makrele", organ: "Kiemen", habitat: "Atlantik", oily: "ölreich" },
];

const AMPHIBIAN_DATA = [
  { name: "Frosch", transformation: "Kaulquappe → Frosch", feature: "4 Beine", sound: "Quaken" },
  { name: "Molch", transformation: "Lunge + Haut Atmung", feature: "Schwanz", habitat: "feucht" },
  { name: "Salamander", transformation: "Feucht Habitat", feature: "Farben", warning: "giftig" },
  { name: "Kreuzkröte", transformation: "Wasserbewohner", feature: "3 Augen", season: "Frühling" },
  { name: "Wassermolch", transformation: "Zwei Lebensräume", feature: "Crista", dualLife: "wasser-land" },
  { name: "Bergmolch", transformation: "Kleine Amphibie", feature: "Flecken", hochgebirge: "bergig" },
];

const REPTILE_DATA = [
  { name: "Schlange", feature: "Schuppen", diet: "Fleischfresser", limbs: "keine" },
  { name: "Eidechse", feature: "Vier Beine", diet: "Insekten", tail: "Schwanz" },
  { name: "Schildkröte", feature: "Panzer", diet: "Pflanzen", protection: "Schale" },
  { name: "Krokodil", feature: "Starke Kiefer", diet: "Fleischfresser", armor: "Panzerung" },
  { name: "Blindschleiche", feature: "Keine Beine", type: "Echse", confusing: "Schlangen-ähnlich" },
  { name: "Wasserschildkröte", feature: "Flossen", habitat: "Wasser", swimmer: "wasserlebend" },
];

const BIRD_DATA = [
  { name: "Adler", adaptation: "Hohlknochen", feature: "Scharfe Augen", hunt: "Raubvogel" },
  { name: "Schwalbe", adaptation: "Leichte Flügel", feature: "Schnell", acrobatic: "wendige Flüge" },
  { name: "Ente", adaptation: "Wasserdicht", feature: "Schwimmhäute", waterbird: "Wasservogel" },
  { name: "Pinguin", adaptation: "Wasserstromlinie", feature: "Schwimmflossen", arctic: "kalt" },
  { name: "Strauß", adaptation: "Starke Beine", feature: "Flugunfähig", landbird: "Laufvogel" },
  { name: "Kolibri", adaptation: "Winzige Flügel", feature: "Schnelle Schläge", hover: "schwebend" },
];

const MAMMAL_DATA = [
  { name: "Löwe", feature: "Haare", diet: "Fleisch", wild: "wild" },
  { name: "Kuh", feature: "Euter", diet: "Gras", domestic: "gezähmt" },
  { name: "Mensch", feature: "Großes Gehirn", diet: "Omnivore", intelligent: "intelligent" },
  { name: "Wal", feature: "Schnauze", diet: "Plankton", aquatic: "Wassersäuger" },
  { name: "Fledermaus", feature: "Flügel", diet: "Insekten", night: "nachtaktiv" },
  { name: "Eisbär", feature: "Dickes Fell", diet: "Fleisch", cold: "Polartier" },
];

// PFLANZEN
const PLANT_ORGANS = [
  { organ: "Blatt", function: "Fotosynthese", location: "Oberirdisch", color: "grün" },
  { organ: "Wurzel", function: "Wasseraufnahme", location: "Unterirdisch", draw: "Wasser" },
  { organ: "Stamm", function: "Stützung", location: "Zentral", transport: "Nährstoffe" },
  { organ: "Blüte", function: "Fortpflanzung", location: "Stängel", bunt: "farbig" },
  { organ: "Frucht", function: "Samenverbreitung", location: "Nach Blüte", seed: "Samen" },
  { organ: "Stängel", function: "Wassertransport", location: "Oberirdisch", xylem: "Xylemleitungen" },
];

const PHOTOSYNTHESIS_COMPONENTS = [
  { input: "CO2", role: "Gas", source: "Luft", formula: "Kohlendioxid" },
  { input: "Wasser", role: "Nährstoff", source: "Wurzeln", symbol: "H₂O" },
  { input: "Licht", role: "Energie", source: "Sonne", essential: "notwendig" },
  { output: "Sauerstoff", role: "Abfallprodukt", uses: "Atmung", breathe: "O₂" },
  { output: "Zucker", role: "Energie", uses: "Wachstum", energy: "Glukose" },
];

const FLOWER_PARTS = [
  { part: "Staubgefäße", function: "Pollenproduktion", color: "gelb", male: "männlich" },
  { part: "Stempel", function: "Eierstock", color: "grün", female: "weiblich" },
  { part: "Kelch", function: "Schutz", color: "grün", protect: "Knospe" },
  { part: "Kronblatt", function: "Bestäubung anlocken", color: "bunt", attract: "Insekten" },
  { part: "Fruchtknoten", function: "Samenentwicklung", color: "grün", future: "Frucht" },
  { part: "Blütenhülle", function: "Blüte schützen", color: "variabel", structure: "Schicht" },
];

// KÖRPER
const BONES = [
  { bone: "Schädel", protects: "Gehirn", location: "Kopf", count: "1" },
  { bone: "Wirbelsäule", protects: "Rückenmark", location: "Rücken", vertebrae: "33" },
  { bone: "Rippen", protects: "Lunge", location: "Brust", count: "12 Paare" },
  { bone: "Becken", protects: "Organe", location: "Unterbauch", basin: "Becken" },
  { bone: "Oberschenkelknochen", protects: "Blutgefäße", location: "Oberschenkel", strongest: "stärkster" },
  { bone: "Brustbein", protects: "Herz", location: "Vorderseite", sternum: "Brustbein" },
];

const MUSCLES = [
  { muscle: "Herz", function: "Pumpen", type: "Unwillkürlich", essential: "überlebenswichtig" },
  { muscle: "Bizeps", function: "Arm beugen", type: "Willkürlich", arm: "Oberarm" },
  { muscle: "Zwerchfell", function: "Atmung", type: "Unwillkürlich", breathing: "atmen" },
  { muscle: "Quadrizeps", function: "Bein strecken", type: "Willkürlich", leg: "Oberschenkel" },
  { muscle: "Sartorial", function: "Bein drehen", type: "Willkürlich", rotation: "drehen" },
  { muscle: "Magmuskel", function: "Bauch stützen", type: "Willkürlich", core: "Rumpf" },
];

// SINNESORGANE
const SENSES = [
  { sense: "Sehen", organ: "Auge", receptor: "Stäbchen und Zapfen", detail: "Licht" },
  { sense: "Hören", organ: "Ohr", receptor: "Haarzelle", detail: "Schallwellen" },
  { sense: "Riechen", organ: "Nase", receptor: "Chemorezeptor", detail: "Duftmoleküle" },
  { sense: "Schmecken", organ: "Zunge", receptor: "Geschmacksknospe", detail: "Chemikalien" },
  { sense: "Tasten", organ: "Haut", receptor: "Mechanorezeptor", detail: "Druck" },
];

// ERNÄHRUNG
const NUTRIENTS = [
  { nutrient: "Eiweiß", source: "Fleisch, Eier, Milch", function: "Wachstum", importance: "essentiell" },
  { nutrient: "Kohlenhydrate", source: "Getreide, Zucker", function: "Energie", carbs: "schnelle Energie" },
  { nutrient: "Fett", source: "Öl, Nüsse", function: "Speicherung", storage: "langzeit" },
  { nutrient: "Vitamin A", source: "Karotten", function: "Sehkraft", vision: "Auge" },
  { nutrient: "Vitamin C", source: "Zitrusfrüchte", function: "Immunität", immune: "Abwehr" },
  { nutrient: "Mineralien", source: "Gemüse", function: "Zahnbildung", teeth: "Knochen" },
];

const DIGESTIVE_ORGANS = [
  { organ: "Mund", enzyme: "Speichel (Amylase)", function: "Zerkleinerung", carbs: "Kohlenhydrate" },
  { organ: "Magen", enzyme: "Salzsäure + Pepsin", function: "Auflösung", protein: "Protein" },
  { organ: "Dünndarm", enzyme: "Pankreasenzyme", function: "Absorption", nutrient: "Nährstoffe" },
  { organ: "Leber", product: "Galle", function: "Fettabbau", bile: "Fettemulsion" },
  { organ: "Bauchspeicheldrüse", product: "Verdauungsenzyme", function: "Enzymproduktion", insulin: "Insulin" },
  { organ: "Dickdarm", role: "Wasserstrom", function: "Wasserresorption", stool: "Stuhlbildung" },
];

// ─── K5 GENERATORS (24 subtopics × 2 = 48 Generators) ─────────────────────

export const K5_Generators: Record<string, (seed?: number) => CurriculumQuestion[]> = {
  // WIRBELTIERE (6 subtopics)
  fish: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const seenQ = new Set<string>();
    const templates = [
      (f: typeof FISH_DATA[0]) => ({
        q: `Welches Organ benutzt ${f.name} zum Atmen?`,
        a: f.organ,
        w: ["Lungen", "Tracheen", "Haut"]
      }),
      (f: typeof FISH_DATA[0]) => ({
        q: `In welchem Habitat lebt die ${f.name}?`,
        a: f.habitat,
        w: ["Wald", "Wüste", "Berge"]
      }),
      (f: typeof FISH_DATA[0]) => ({
        q: `In welchem Gewässer lebt ${f.name}?`,
        a: f.habitat,
        w: ["Regenwald", "Wüste", "Bergsee"]
      }),
      (f: typeof FISH_DATA[0]) => ({
        q: `Welcher Fisch lebt in ${f.habitat}?`,
        a: f.name,
        w: ["Frosch", "Ente", "Eidechse"]
      }),
      (f: typeof FISH_DATA[0]) => ({
        q: `Was unterscheidet ${f.name} von Landtieren beim Atmen?`,
        a: f.organ,
        w: ["Lungen", "Flügel", "Beine"]
      }),
    ];
    let attempts = 0;
    while (questions.length < 30 && attempts < 300) {
      attempts++;
      const fish = pick(FISH_DATA, rng);
      const template = templates[Math.floor(rng() * templates.length)];
      const t = template(fish);
      if (!seenQ.has(t.q)) {
        seenQ.add(t.q);
        questions.push(createMCQ("wirbeltiere", "fish", t.q, t.a, t.w, rng));
      }
    }
    return questions;
  },
  fish_typing: (seed?: number) => [
    createTyping("wirbeltiere", "fish", "Nenne ein Beispiel für einen Süßwasserfisch", ["Hecht", "Forelle", "Barsch"]),
    createTyping("wirbeltiere", "fish", "Welches Organ atmet der Fisch?", ["Kiemen"]),
    createTyping("wirbeltiere", "fish", "Wie heißt die Struktur der Fische zum Schwimmen?", ["Flossen"]),
    createTyping("wirbeltiere", "fish", "In welchem Lebensraum leben Fische?", ["Wasser", "Gewässer"]),
    createTyping("wirbeltiere", "fish", "Ein Hai lebt in welchem Wasser?", ["Salzwasser", "Meerwasser"]),
  ],

  amphibian: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (a: typeof AMPHIBIAN_DATA[0]) => ({
        q: `Die ${a.name} durchläuft welche Metamorphose?`,
        a: a.transformation,
        w: ["Keine", "Schnelle", "Rückwärts"]
      }),
      (a: typeof AMPHIBIAN_DATA[0]) => ({
        q: `${a.name} haben welches Merkmal?`,
        a: a.feature,
        w: ["Panzer", "Schuppen", "Federn"]
      }),
      (a: typeof AMPHIBIAN_DATA[0]) => ({
        q: `Welches Amphibium hat die Eigenschaft "${a.feature}"?`,
        a: a.name,
        w: ["Schlange", "Frosch", "Fisch"]
      }),
      (a: typeof AMPHIBIAN_DATA[0]) => ({
        q: `${a.name} ist zu Hause in welcher Umgebung?`,
        a: "Feucht",
        w: ["Wüste", "Berg", "Trocken"]
      }),
      (a: typeof AMPHIBIAN_DATA[0]) => ({
        q: `Welche Tier passt zu: "${a.transformation}"?`,
        a: a.name,
        w: ["Ente", "Eidechse", "Vogel"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const amp = pick(AMPHIBIAN_DATA, rng);
      const template = templates[i % templates.length];
      const t = template(amp);
      questions.push(createMCQ("wirbeltiere", "amphibian", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  amphibian_typing: (seed?: number) => [
    createTyping("wirbeltiere", "amphibian", "Nenne ein Beispiel für ein Amphibium", ["Frosch", "Molch", "Salamander"]),
    createTyping("wirbeltiere", "amphibian", "Welche Metamorphose durchlaufen Amphibien?", ["Wasser zu Land", "Wassertier zu Landtier"]),
    createTyping("wirbeltiere", "amphibian", "Amphibien haben wie viele Beine?", ["4", "vier"]),
    createTyping("wirbeltiere", "amphibian", "In welchem Habitat leben Amphibien?", ["Feucht", "Nass", "Sumpf"]),
    createTyping("wirbeltiere", "amphibian", "Was ist ein Merkmal von Fröschen?", ["Sprünge", "Quaken", "Grüne Farbe"]),
  ],

  reptile: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (r: typeof REPTILE_DATA[0]) => ({
        q: `Womit ist die Haut der ${r.name} bedeckt?`,
        a: r.feature,
        w: ["Haare", "Federn", "Mucus"]
      }),
      (r: typeof REPTILE_DATA[0]) => ({
        q: `${r.name} ist ein Fleischfresser: wahr oder falsch?`,
        a: r.diet === "Fleischfresser" ? "wahr" : "falsch",
        w: [r.diet === "Fleischfresser" ? "falsch" : "wahr"]
      }),
      (r: typeof REPTILE_DATA[0]) => ({
        q: `Welches ist ein bekanntes Reptil?`,
        a: r.name,
        w: ["Frosch", "Ente", "Delphin"]
      }),
      (r: typeof REPTILE_DATA[0]) => ({
        q: `${r.name} essen hauptsächlich...`,
        a: r.diet ?? "Fleischfresser",
        w: ["Gras", "Algen", "Samen"]
      }),
      (r: typeof REPTILE_DATA[0]) => ({
        q: `Reptilien haben eine Eigenschaft: ${r.feature}`,
        a: "wahr",
        w: ["falsch"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const rep = pick(REPTILE_DATA, rng);
      const template = templates[i % templates.length];
      const t = template(rep);
      questions.push(createMCQ("wirbeltiere", "reptile", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  reptile_typing: (seed?: number) => [
    createTyping("wirbeltiere", "reptile", "Nenne ein Reptil", ["Eidechse", "Schlange", "Schildkröte"]),
    createTyping("wirbeltiere", "reptile", "Mit was ist ein Reptil bedeckt?", ["Schuppen"]),
    createTyping("wirbeltiere", "reptile", "Wie viele Beine hat eine Schlange?", ["0", "null", "Keine"]),
    createTyping("wirbeltiere", "reptile", "Was ist ein Merkmal von Reptilien?", ["Kaltblütig", "Schuppen"]),
    createTyping("wirbeltiere", "reptile", "Ein Krokodil ist ein...", ["Reptil"]),
  ],

  bird: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (b: typeof BIRD_DATA[0]) => ({
        q: `Welche Anpassung hilft ${b.name} zu fliegen?`,
        a: b.adaptation,
        w: ["Dicke Federn", "Schwere Knochen", "Kurze Flügel"]
      }),
      (b: typeof BIRD_DATA[0]) => ({
        q: `${b.name} hat das Merkmal: ${b.feature}`,
        a: "wahr",
        w: ["falsch"]
      }),
      (b: typeof BIRD_DATA[0]) => ({
        q: `Welcher Vogel ist bekannt für "${b.hunt || "Flugkünste"}"?`,
        a: b.name,
        w: ["Fisch", "Schlange", "Amphibie"]
      }),
      (b: typeof BIRD_DATA[0]) => ({
        q: `Was macht Vögel leicht für den Flug?`,
        a: "Hohlknochen",
        w: ["Dickes Fell", "Starke Muskeln", "Große Augen"]
      }),
      (b: typeof BIRD_DATA[0]) => ({
        q: `${b.name} ist ein Vogel mit dieser Eigenschaft: ${b.feature}`,
        a: "richtig",
        w: ["falsch"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const bird = pick(BIRD_DATA, rng);
      const template = templates[i % templates.length];
      const t = template(bird);
      questions.push(createMCQ("wirbeltiere", "bird", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  bird_typing: (seed?: number) => [
    createTyping("wirbeltiere", "bird", "Welches Tier hat Federn?", ["Vogel", "Vögel"]),
    createTyping("wirbeltiere", "bird", "Hohlknochen sind in welchem Tier?", ["Vögel", "Vogel"]),
    createTyping("wirbeltiere", "bird", "Welches Merkmal hat ein Vogel?", ["Flügel", "Federn", "Schnabel"]),
    createTyping("wirbeltiere", "bird", "Nenne einen fliegenden Vogel", ["Adler", "Schwalbe"]),
    createTyping("wirbeltiere", "bird", "Was ermöglicht Vögeln zu fliegen?", ["Hohlknochen", "Leichte Flügel"]),
  ],

  mammal: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (m: typeof MAMMAL_DATA[0]) => ({
        q: `${m.name} haben das Merkmal: ${m.feature}`,
        a: "wahr",
        w: ["falsch"]
      }),
      (m: typeof MAMMAL_DATA[0]) => ({
        q: `Was essen ${m.name}?`,
        a: m.diet,
        w: ["Insekten", "Gras", "Plankton"]
      }),
      (m: typeof MAMMAL_DATA[0]) => ({
        q: `Welches ist ein Säugetier?`,
        a: m.name,
        w: ["Fisch", "Vogel", "Frosch"]
      }),
      (m: typeof MAMMAL_DATA[0]) => ({
        q: `Das Merkmal "${m.feature}" haben Säugetiere wie ${m.name}`,
        a: "wahr",
        w: ["falsch"]
      }),
      (m: typeof MAMMAL_DATA[0]) => ({
        q: `Säugetiere haben Haare und sind... (wie ${m.name})?`,
        a: "Warmblütig",
        w: ["Kaltblütig", "Wechselwarm", "Ektotherm"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const mam = pick(MAMMAL_DATA, rng);
      const template = templates[i % templates.length];
      const t = template(mam);
      questions.push(createMCQ("wirbeltiere", "mammal", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  mammal_typing: (seed?: number) => [
    createTyping("wirbeltiere", "mammal", "Welches Tier hat Haare?", ["Säugetiere", "Säugetier"]),
    createTyping("wirbeltiere", "mammal", "Menschen sind welche Art?", ["Säugetiere", "Säugetier"]),
    createTyping("wirbeltiere", "mammal", "Nenne ein Säugetier", ["Löwe", "Kuh", "Mensch"]),
    createTyping("wirbeltiere", "mammal", "Säugetiere sind Warmblüter: wahr?", ["Ja", "wahr"]),
    createTyping("wirbeltiere", "mammal", "Was ist ein Merkmal von Säugetieren?", ["Haare", "Warmblütig", "Stillen"]),
  ],

  vertebrate_comparison: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () => ({
        q: "Welches ist ein wirbelloses Tier?",
        a: "Insekt",
        w: ["Fisch", "Vogel", "Säugetier"]
      }),
      () => ({
        q: "Was haben alle Wirbeliere?",
        a: "Wirbelsäule",
        w: ["Kiemen", "Flügel", "Tentakel"]
      }),
      () => ({
        q: "Wie viele Klassen von Wirbelieren gibt es?",
        a: "5",
        w: ["3", "7", "10"]
      }),
      () => ({
        q: "Welches ist ein wirbelloses Tier?",
        a: "Wurm",
        w: ["Frosch", "Schlange", "Wal"]
      }),
      () => ({
        q: "Wirbellose bilden welchen Prozentanteil?",
        a: "99%",
        w: ["50%", "75%", "90%"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const template = templates[i % templates.length];
      const t = template();
      questions.push(createMCQ("wirbeltiere", "vertebrate_comparison", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  vertebrate_comparison_typing: (seed?: number) => [
    createTyping("wirbeltiere", "vertebrate_comparison", "Welches ist kein Wirbeliere?", ["Insekt", "Wurm", "Molluske"]),
    createTyping("wirbeltiere", "vertebrate_comparison", "Was haben alle Wirbeliere?", ["Wirbelsäule", "Rückgrat"]),
    createTyping("wirbeltiere", "vertebrate_comparison", "Wie viele Wirbeliere Klassen gibt es?", ["5", "fünf"]),
    createTyping("wirbeltiere", "vertebrate_comparison", "Nenne eine wirbelloses Tier", ["Insekt", "Spinne", "Wurm"]),
    createTyping("wirbeltiere", "vertebrate_comparison", "Wirbellose sind wie viel %?", ["99", "Mehr"]),
  ],

  // PFLANZEN (5 subtopics)
  plant_parts: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (o: typeof PLANT_ORGANS[0]) => ({
        q: `Welche Funktion hat das Pflanzenteil ${o.organ}?`,
        a: o.function,
        w: ["Fortpflanzung", "Wasserspeicherung", "Verbreitung"]
      }),
      (o: typeof PLANT_ORGANS[0]) => ({
        q: `${o.organ} ist in dieser Lage: ${o.location}`,
        a: "wahr",
        w: ["falsch"]
      }),
      (o: typeof PLANT_ORGANS[0]) => ({
        q: `Welches Organ ist verantwortlich für "${o.function}"?`,
        a: o.organ,
        w: ["Stamm", "Wurzel", "Blüte"]
      }),
      (o: typeof PLANT_ORGANS[0]) => ({
        q: `Die ${o.organ} eines Baumes hat welche Hauptaufgabe?`,
        a: o.function,
        w: ["Blütenbau", "Blattfall", "Saftfluss"]
      }),
      (o: typeof PLANT_ORGANS[0]) => ({
        q: `Das Pflanzenteil "${o.organ}" ist normalerweise ${o.color || "grün"}.`,
        a: "wahr",
        w: ["falsch"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const organ = pick(PLANT_ORGANS, rng);
      const template = templates[i % templates.length];
      const t = template(organ);
      questions.push(createMCQ("pflanzen", "plant_parts", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  plant_parts_typing: (seed?: number) => [
    createTyping("pflanzen", "plant_parts", "Welche Teile hat eine Pflanze?", ["Wurzel, Stamm, Blatt, Blüte"]),
    createTyping("pflanzen", "plant_parts", "Welches Organ macht Fotosynthese?", ["Blatt"]),
    createTyping("pflanzen", "plant_parts", "Was nimmt die Wurzel auf?", ["Wasser", "Nährstoffe"]),
    createTyping("pflanzen", "plant_parts", "Der Stamm ist für...", ["Stützung", "Transport"]),
    createTyping("pflanzen", "plant_parts", "Welches Organ trägt Blüten?", ["Stamm", "Stiel"]),
  ],

  photosynthesis: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (c: typeof PHOTOSYNTHESIS_COMPONENTS[0]) => ({
        q: `Was ist die Rolle von ${c.input || ""}${(c as any).output ? c.input : ""}?`,
        a: c.role,
        w: ["Katalysator", "Strukturelement", "Farbstoff"]
      }),
      () => ({
        q: "Welche Chemikalien sind Eingang für Fotosynthese?",
        a: "CO2 und Wasser",
        w: ["Zucker und Sauerstoff", "Nur Licht", "Salze"]
      }),
      () => ({
        q: "Welche Chemikalien sind Ausgang von Fotosynthese?",
        a: "Sauerstoff und Zucker",
        w: ["CO2 und Wasser", "Nur Energie", "Chlorophyll"]
      }),
      () => ({
        q: "Was produziert eine Pflanze bei Fotosynthese?",
        a: "Sauerstoff",
        w: ["Kohlendioxid", "Stickstoff", "Wasserstoff"]
      }),
      () => ({
        q: "Fotosynthese braucht welche Energiequelle?",
        a: "Sonnenlicht",
        w: ["Wärme", "Wasser", "Wind"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const comp = pick(PHOTOSYNTHESIS_COMPONENTS, rng);
      const template = templates[i % templates.length];
      const t = template(comp);
      questions.push(createMCQ("pflanzen", "photosynthesis", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  photosynthesis_typing: (seed?: number) => [
    createTyping("pflanzen", "photosynthesis", "Was ist Fotosynthese?", ["Energieproduktion aus Licht", "Gasprozess"]),
    createTyping("pflanzen", "photosynthesis", "Welche Chemikalien sind Eingang?", ["CO2 und Wasser"]),
    createTyping("pflanzen", "photosynthesis", "Welche Chemikalien sind Ausgang?", ["Zucker und Sauerstoff"]),
    createTyping("pflanzen", "photosynthesis", "Wo findet Fotosynthese statt?", ["Blatt", "Chloroplast"]),
    createTyping("pflanzen", "photosynthesis", "Was ist der Farbstoff?", ["Chlorophyll"]),
  ],

  flower_structure: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (f: typeof FLOWER_PARTS[0]) => ({
        q: `Welcher Teil der Blüte ist dafür verantwortlich für: "${f.function}"?`,
        a: f.part,
        w: ["Kelch", "Kronenblatt", "Stiel"]
      }),
      (f: typeof FLOWER_PARTS[0]) => ({
        q: `${f.part} ist normalerweise ${f.color}.`,
        a: "wahr",
        w: ["falsch"]
      }),
      () => ({
        q: "Welcher Teil der Blüte produziert Pollen?",
        a: "Staubgefäße",
        w: ["Stempel", "Kelch", "Krone"]
      }),
      () => ({
        q: "Welcher Teil entwickelt sich zur Frucht?",
        a: "Fruchtknoten",
        w: ["Staubgefäße", "Kelch", "Blütenhülle"]
      }),
      () => ({
        q: "Welcher Teil der Blüte schützt die Knospe?",
        a: "Kelch",
        w: ["Krone", "Stempel", "Staubgefäße"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const flower = pick(FLOWER_PARTS, rng);
      const template = templates[i % templates.length];
      const t = template(flower);
      questions.push(createMCQ("pflanzen", "flower_structure", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  flower_structure_typing: (seed?: number) => [
    createTyping("pflanzen", "flower_structure", "Welche Funktion hat die Blüte?", ["Fortpflanzung"]),
    createTyping("pflanzen", "flower_structure", "Was ist Pollen?", ["Blütenstaub"]),
    createTyping("pflanzen", "flower_structure", "Welcher Teil ist bunt?", ["Blütenkrone", "Kronenblatt"]),
    createTyping("pflanzen", "flower_structure", "Welche Schicht schützt die Knospe?", ["Kelch", "Blütenkelch"]),
    createTyping("pflanzen", "flower_structure", "Wo entwickelt sich die Frucht?", ["Fruchtknoten"]),
  ],

  plant_reproduction: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () => ({
        q: "Wie beginnt das Leben einer neuen Pflanze?",
        a: "Samenkeimung",
        w: ["Pollination", "Verblühen", "Verwelkung"]
      }),
      () => ({
        q: "Welches ist ein Beispiel für sexuelle Fortpflanzung bei Pflanzen?",
        a: "Bestäubung und Befruchtung",
        w: ["Wurzelteilung", "Blattstecklinge", "Knospen"]
      }),
      () => ({
        q: "Wer bestäubt typischerweise Blüten?",
        a: "Bienen und Insekten",
        w: ["Schnecken", "Fische", "Regenwürmer"]
      }),
      () => ({
        q: "Was ist vegetative Vermehrung?",
        a: "Fortpflanzung ohne Bestäubung",
        w: ["Mit Pollen", "Mit Blüten", "Mit Früchten"]
      }),
      () => ({
        q: "Braucht ein Samen zum Keimen Wasser?",
        a: "Ja",
        w: ["Nein", "Nur manchmal", "Nur bei Licht"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const template = templates[i % templates.length];
      const t = template();
      questions.push(createMCQ("pflanzen", "plant_reproduction", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  plant_reproduction_typing: (seed?: number) => [
    createTyping("pflanzen", "plant_reproduction", "Was ist Samenkeimung?", ["Neues Wachstum", "Prozess"]),
    createTyping("pflanzen", "plant_reproduction", "Wer polliniert Blüten?", ["Bienen", "Insekten", "Wind"]),
    createTyping("pflanzen", "plant_reproduction", "Was entsteht aus der Frucht?", ["Samen"]),
    createTyping("pflanzen", "plant_reproduction", "Braucht ein Same Wasser zum Keimen?", ["Ja"]),
    createTyping("pflanzen", "plant_reproduction", "Was ist vegetative Vermehrung?", ["Ohne Bestäubung"]),
  ],

  plant_types: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () => ({
        q: "Welche ist eine nicht blühende Pflanze?",
        a: "Moos",
        w: ["Rose", "Weizen", "Apfelbaum"]
      }),
      () => ({
        q: "Was sind Moose?",
        a: "Primitive Pflanzen ohne Blüten",
        w: ["Große Bäume", "Einzeller", "Algen"]
      }),
      () => ({
        q: "Haben Farne Blüten?",
        a: "Nein",
        w: ["Ja", "Manchmal", "Nur nachts"]
      }),
      () => ({
        q: "Was sind Gymnospermen?",
        a: "Nadelbäume",
        w: ["Wasserpflanzen", "Moose", "Farne"]
      }),
      () => ({
        q: "Was sind Angiospermen?",
        a: "Blühende Pflanzen",
        w: ["Nadelbäume", "Moose", "Algen"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const template = templates[i % templates.length];
      const t = template();
      questions.push(createMCQ("pflanzen", "plant_types", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  plant_types_typing: (seed?: number) => [
    createTyping("pflanzen", "plant_types", "Was sind Moose?", ["Primitive Pflanzen", "Nicht Blühend"]),
    createTyping("pflanzen", "plant_types", "Haben Farne Blüten?", ["Nein"]),
    createTyping("pflanzen", "plant_types", "Was sind Gymnospermen?", ["Nadelbaum", "Kiefer, Fichte"]),
    createTyping("pflanzen", "plant_types", "Was sind Angiospermen?", ["Blühende Pflanzen"]),
    createTyping("pflanzen", "plant_types", "Welches ist das älteste Pflanzentypus?", ["Moos", "Algen"]),
  ],

  // KÖRPER (4 subtopics)
  skeleton: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (b: typeof BONES[0]) => ({
        q: `Welcher Knochen schützt das ${b.protects}?`,
        a: b.bone,
        w: ["Wirbelsäule", "Rippen", "Becken"]
      }),
      (b: typeof BONES[0]) => ({
        q: `Der ${b.bone} befindet sich am ${b.location}.`,
        a: "wahr",
        w: ["falsch"]
      }),
      () => ({
        q: "Wie viele Knochen hat ein menschlicher Körper?",
        a: "206",
        w: ["180", "250", "300"]
      }),
      () => ({
        q: "Was schützt die Wirbelsäule?",
        a: "Rückenmark",
        w: ["Lunge", "Herz", "Leber"]
      }),
      () => ({
        q: "Welcher Knochen ist der längste im menschlichen Körper?",
        a: "Oberschenkelknochen",
        w: ["Schienbein", "Oberarmknochen", "Rippe"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const bone = pick(BONES, rng);
      const template = templates[i % templates.length];
      const t = template(bone);
      questions.push(createMCQ("koerper", "skeleton", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  skeleton_typing: (seed?: number) => [
    createTyping("koerper", "skeleton", "Wie viele Knochen hat ein Mensch?", ["206"]),
    createTyping("koerper", "skeleton", "Was schützt die Wirbelsäule?", ["Rückenmark"]),
    createTyping("koerper", "skeleton", "Welcher Knochen ist der längste?", ["Oberschenkelknochen", "Femur"]),
    createTyping("koerper", "skeleton", "Was ist der Schädel?", ["Kopfknochen"]),
    createTyping("koerper", "skeleton", "Welche Funktion hat das Skelett?", ["Stützung", "Schutz", "Bewegung"]),
  ],

  muscles: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (m: typeof MUSCLES[0]) => ({
        q: `${m.muscle} hat die Funktion: ${m.function}`,
        a: "wahr",
        w: ["falsch"]
      }),
      (m: typeof MUSCLES[0]) => ({
        q: `${m.muscle} ist ein ${m.type} Muskel.`,
        a: "wahr",
        w: ["falsch"]
      }),
      () => ({
        q: "Wie viele Muskeln hat der menschliche Körper?",
        a: "600",
        w: ["400", "800", "1000"]
      }),
      () => ({
        q: "Welches ist ein Beispiel für einen unwillkürlichen Muskel?",
        a: "Herz",
        w: ["Bizeps", "Bein", "Arm"]
      }),
      () => ({
        q: "Was ist die kleinste funktionelle Einheit eines Muskels?",
        a: "Myofibril",
        w: ["Mitochondrium", "Zelle", "Enzym"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const muscle = pick(MUSCLES, rng);
      const template = templates[i % templates.length];
      const t = template(muscle);
      questions.push(createMCQ("koerper", "muscles", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  muscles_typing: (seed?: number) => [
    createTyping("koerper", "muscles", "Wie viele Muskeln hat der Körper?", ["600"]),
    createTyping("koerper", "muscles", "Was ist ein unwillkürlicher Muskel?", ["Herz", "Verdauung"]),
    createTyping("koerper", "muscles", "Nenne einen großen Muskel", ["Bizeps", "Quadrizeps"]),
    createTyping("koerper", "muscles", "Muskeln sind für...", ["Bewegung", "Kraft"]),
    createTyping("koerper", "muscles", "Der Herzmuskel ist welcher Typ?", ["Unwillkürlich", "Autonom"]),
  ],

  skin: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () => ({
        q: "Welche ist die Hauptfunktion der Haut?",
        a: "Schutz",
        w: ["Bewegung", "Verdauung", "Sauerstofftransport"]
      }),
      () => ({
        q: "Was ist die äußerste Hautschicht?",
        a: "Epidermis",
        w: ["Dermis", "Hypodermis", "Kutil"]
      }),
      () => ({
        q: "Welche Schicht der Haut hat Blutgefäße?",
        a: "Dermis",
        w: ["Epidermis", "Hypodermis", "Kutikula"]
      }),
      () => ({
        q: "Wie viel Prozent des Körpers ist Haut?",
        a: "16%",
        w: ["10%", "20%", "25%"]
      }),
      () => ({
        q: "Haut schützt den Körper vor...",
        a: "UV-Strahlung",
        w: ["Rauschen", "Bewegung", "Schall"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const template = templates[i % templates.length];
      const t = template();
      questions.push(createMCQ("koerper", "skin", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  skin_typing: (seed?: number) => [
    createTyping("koerper", "skin", "Was ist die äußerste Hautschicht?", ["Epidermis"]),
    createTyping("koerper", "skin", "Welche Schicht hat Blutgefäße?", ["Dermis"]),
    createTyping("koerper", "skin", "Was ist unter der Dermis?", ["Hypodermis", "Fettgewebe"]),
    createTyping("koerper", "skin", "Wie viel % des Körpers ist Haut?", ["16"]),
    createTyping("koerper", "skin", "Haut schützt vor...", ["UV", "Infektionen", "Austrocknung"]),
  ],

  body_systems: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () => ({
        q: "Welches System transportiert Sauerstoff im Körper?",
        a: "Kreislaufsystem",
        w: ["Nervensystem", "Verdauungssystem", "Hormonsystem"]
      }),
      () => ({
        q: "Nenne 3 Körpersysteme",
        a: "Kreislauf, Atemung und Verdauung",
        w: ["Nur Herz", "Nur Lunge", "Nur Darm"]
      }),
      () => ({
        q: "Was ist das Lymphsystem?",
        a: "Immunsystem",
        w: ["Knochensystem", "Hautschicht", "Nervensystem"]
      }),
      () => ({
        q: "Das Hormonsystem wird auch genannt...",
        a: "Endokrines System",
        w: ["Nervensystem", "Skelett", "Muskeln"]
      }),
      () => ({
        q: "Das Nervensystem teilt sich in...",
        a: "Zentrales und peripheres Nervensystem",
        w: ["Oben und unten", "Links und rechts", "Vorne und hinten"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const template = templates[i % templates.length];
      const t = template();
      questions.push(createMCQ("koerper", "body_systems", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  body_systems_typing: (seed?: number) => [
    createTyping("koerper", "body_systems", "Nenne 3 Körpersysteme", ["Kreislauf, Atemung, Verdauung"]),
    createTyping("koerper", "body_systems", "Was ist das Lymphsystem?", ["Immunität", "Flüssigkeitstransport"]),
    createTyping("koerper", "body_systems", "Das Hormonsystem heißt auch...", ["Endokrines System"]),
    createTyping("koerper", "body_systems", "Das Nervensystem teilt sich in...", ["Zentral und Peripher"]),
    createTyping("koerper", "body_systems", "Welches System reguliert pH?", ["Nieren", "Lungen"]),
  ],

  // SINNESORGANE (5 subtopics)
  eye: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () => ({
        q: "Welcher Teil des Auges nimmt Licht auf?",
        a: "Netzhaut",
        w: ["Iris", "Linse", "Hornhaut"]
      }),
      () => ({
        q: "Welcher Teil fokussiert das Auge?",
        a: "Linse",
        w: ["Iris", "Hornhaut", "Glaskörper"]
      }),
      () => ({
        q: "Was ist die Iris?",
        a: "Der farbige Teil des Auges",
        w: ["Die Tränendrüse", "Der weiße Teil", "Der schwarze Punkt"]
      }),
      () => ({
        q: "Welche Zellen in der Netzhaut nehmen Licht auf?",
        a: "Stäbchen und Zapfen",
        w: ["Haarzellen", "Neuronen", "Melanin"]
      }),
      () => ({
        q: "Was ist der blinde Fleck des Auges?",
        a: "Wo der Sehnerv austritt",
        w: ["Ein Defekt", "Ein Fleck", "Eine Linsentrübung"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const template = templates[i % templates.length];
      const t = template();
      questions.push(createMCQ("sinnesorgane", "eye", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  eye_typing: (seed?: number) => [
    createTyping("sinnesorgane", "eye", "Welcher Teil fokussiert das Auge?", ["Linse"]),
    createTyping("sinnesorgane", "eye", "Was ist die Iris?", ["Farbteil", "Farbiger Teil"]),
    createTyping("sinnesorgane", "eye", "Welche Schicht hat Photorezeptoren?", ["Netzhaut", "Retina"]),
    createTyping("sinnesorgane", "eye", "Was ist der blinde Fleck?", ["Optischer Nerv"]),
    createTyping("sinnesorgane", "eye", "Welche Farbenblindheit ist häufig?", ["Rot-Grün"]),
  ],

  ear: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () => ({
        q: "Wo befinden sich die Hörzellen?",
        a: "Innenohr",
        w: ["Außenohr", "Mittelohr", "Trommelfell"]
      }),
      () => ({
        q: "Welches Organ heißt auch Cochlea?",
        a: "Schnecke",
        w: ["Hammer", "Amboss", "Steigbügel"]
      }),
      () => ({
        q: "Die Ohrtrompete verbindet...",
        a: "Ohr und Rachen",
        w: ["Ohr und Nase", "Ohr und Lunge", "Ohr und Gehirn"]
      }),
      () => ({
        q: "Wie heißen die drei Gehörknöchelchen?",
        a: "Hammer, Amboss und Steigbügel",
        w: ["Rippen", "Wirbel", "Zähne"]
      }),
      () => ({
        q: "Wo ist der Gleichgewichtssinn?",
        a: "Im Innenohr",
        w: ["Im Außenohr", "Im Mittelohr", "Im Trommelfell"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const template = templates[i % templates.length];
      const t = template();
      questions.push(createMCQ("sinnesorgane", "ear", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  ear_typing: (seed?: number) => [
    createTyping("sinnesorgane", "ear", "Welches Organ heißt auch Cochlea?", ["Schnecke"]),
    createTyping("sinnesorgane", "ear", "Die Ohrtrompete verbindet...", ["Ohr und Rachen"]),
    createTyping("sinnesorgane", "ear", "Drei Gehörknöchelchen sind...", ["Hammer, Amboss, Steigbügel"]),
    createTyping("sinnesorgane", "ear", "Der Gleichgewichtssinn ist im...", ["Innenohr"]),
    createTyping("sinnesorgane", "ear", "Hören ist durch...", ["Schallwellen"]),
  ],

  nose: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () => ({
        q: "Der Geruchssinn ist im...",
        a: "Riechepithel",
        w: ["Zunge", "Haut", "Ohr"]
      }),
      () => ({
        q: "Was ist das Riechepithel?",
        a: "Geruchsrezeptoren",
        w: ["Geschmacksknospen", "Nervenzellen", "Haarzellen"]
      }),
      () => ({
        q: "Wie viele verschiedene Düfte kann die Nase erkennen?",
        a: "über 10.000",
        w: ["1.000", "100", "10"]
      }),
      () => ({
        q: "Der Riechnerv ist der...",
        a: "Olfaktorische Nerv",
        w: ["Trigeminus", "Vagus", "Fazialis"]
      }),
      () => ({
        q: "Niesen ist ein...",
        a: "Reflex",
        w: ["Willkürliche Aktion", "Geschmack", "Emotion"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const template = templates[i % templates.length];
      const t = template();
      questions.push(createMCQ("sinnesorgane", "nose", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  nose_typing: (seed?: number) => [
    createTyping("sinnesorgane", "nose", "Was ist das Riechepithel?", ["Geruchszellen", "Riechzellen"]),
    createTyping("sinnesorgane", "nose", "Wie viele Düfte kann die Nase erkennen?", ["über 10.000", "10000"]),
    createTyping("sinnesorgane", "nose", "Der Riechnerv ist der...", ["Olfaktorisch Nerv", "CN I"]),
    createTyping("sinnesorgane", "nose", "Niesen ist...", ["Reflex", "Abwehr"]),
    createTyping("sinnesorgane", "nose", "Viele alte Menschen können nicht gut...", ["Riechen"]),
  ],

  tongue: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () => ({
        q: "Geschmacksknospen sind auf der...",
        a: "Zunge",
        w: ["Mund", "Lippe", "Zahnfleisch"]
      }),
      () => ({
        q: "Wie viele Geschmacksrichtungen gibt es?",
        a: "5",
        w: ["3", "7", "10"]
      }),
      () => ({
        q: "Die 5 Geschmacksrichtungen sind...",
        a: "Süß, Salzig, Sauer, Bitter, Umami",
        w: ["Nur Süß und Sauer", "Nur Salzig", "Nur Bitter"]
      }),
      () => ({
        q: "Was ist Papillen?",
        a: "Geschmacksknospen-Struktur",
        w: ["Zahnfleisch", "Speichel", "Zungenmuskel"]
      }),
      () => ({
        q: "Zunge schmeckt süß am...",
        a: "Vorne",
        w: ["Hinten", "Seiten", "Überall gleich"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const template = templates[i % templates.length];
      const t = template();
      questions.push(createMCQ("sinnesorgane", "tongue", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  tongue_typing: (seed?: number) => [
    createTyping("sinnesorgane", "tongue", "Die 5 Geschmacksrichtungen sind...", ["Süß, Salzig, Sauer, Bitter, Umami"]),
    createTyping("sinnesorgane", "tongue", "Was ist Papillen?", ["Geschmacksknospen Struktur"]),
    createTyping("sinnesorgane", "tongue", "Zunge schmeckt süß am...", ["Vorne"]),
    createTyping("sinnesorgane", "tongue", "Bitter wird am... wahrgenommen", ["Hinten"]),
    createTyping("sinnesorgane", "tongue", "Geschmack und Geruch zusammen heißt...", ["Geschmackswahrnehmung"]),
  ],

  skin_sense: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () => ({
        q: "Welcher Rezeptor ermöglicht Berührungsempfindung?",
        a: "Mechanorezeptor",
        w: ["Fotorezeptor", "Chemorezeptor", "Thermorezeptor"]
      }),
      () => ({
        q: "Merkel-Zellen sind vom Typ...",
        a: "Mechanorezeptor",
        w: ["Thermorezeptor", "Nozizeptor", "Chemorezeptor"]
      }),
      () => ({
        q: "Schmerzrezeptoren heißen...",
        a: "Nozizeptoren",
        w: ["Thermorezeptoren", "Mechanorezeptoren", "Chemorezepto​ren"]
      }),
      () => ({
        q: "Kälterezeptoren reagieren auf...",
        a: "Unter 25°C",
        w: ["Über 25°C", "Nur bei 0°C", "Nur bei Druck"]
      }),
      () => ({
        q: "Das Körperbewusstsein heißt...",
        a: "Propriozeption",
        w: ["Thermorezeption", "Nozizeption", "Chemorezeption"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const template = templates[i % templates.length];
      const t = template();
      questions.push(createMCQ("sinnesorgane", "skin_sense", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  skin_sense_typing: (seed?: number) => [
    createTyping("sinnesorgane", "skin_sense", "Merkel-Zellen sind Typ von...", ["Mechanorezeptor"]),
    createTyping("sinnesorgane", "skin_sense", "Schmerzrezeptoren sind...", ["Nozizeptoren"]),
    createTyping("sinnesorgane", "skin_sense", "Kälterezeptoren reagieren auf...", ["Unter 25°C"]),
    createTyping("sinnesorgane", "skin_sense", "Wärmerezeptoren sind in der...", ["Dermis"]),
    createTyping("sinnesorgane", "skin_sense", "Körperbewusstsein ist...", ["Propriozeption"]),
  ],

  // ERNÄHRUNG (4 subtopics)
  nutrients: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (n: typeof NUTRIENTS[0]) => ({
        q: `${n.nutrient} kommt von ${n.source}`,
        a: "wahr",
        w: ["falsch"]
      }),
      (n: typeof NUTRIENTS[0]) => ({
        q: `Was ist die Funktion von ${n.nutrient}?`,
        a: n.function,
        w: ["Bewegung", "Sehen", "Hören"]
      }),
      () => ({
        q: "Welche Nährstoffe liefern Energie?",
        a: "Kohlenhydrate und Fett",
        w: ["Vitamin", "Wasser", "Mineralien"]
      }),
      () => ({
        q: "Wo findest du Vitamin C?",
        a: "Zitrusfrüchte",
        w: ["Fleisch", "Öl", "Getreide"]
      }),
      () => ({
        q: "Kalzium ist wichtig für...",
        a: "Knochen",
        w: ["Muskeln", "Blut", "Haut"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const nut = pick(NUTRIENTS, rng);
      const template = templates[i % templates.length];
      const t = template(nut);
      questions.push(createMCQ("ernaehrung", "nutrients", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  nutrients_typing: (seed?: number) => [
    createTyping("ernaehrung", "nutrients", "Nenne 5 wichtige Nährstoffe", ["Eiweiß, Kohlenhydrate, Fett, Vitamin, Mineralien"]),
    createTyping("ernaehrung", "nutrients", "Welche Nährstoffe liefern Energie?", ["Kohlenhydrate", "Fett"]),
    createTyping("ernaehrung", "nutrients", "Wo findest du Vitamin C?", ["Obst", "Zitrusfrüchte"]),
    createTyping("ernaehrung", "nutrients", "Kalzium ist für...", ["Knochen"]),
    createTyping("ernaehrung", "nutrients", "Eisen ist wichtig für...", ["Blut"]),
  ],

  digestive_system: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      (o: typeof DIGESTIVE_ORGANS[0]) => ({
        q: `${o.organ} Funktion: ${o.function}`,
        a: "wahr",
        w: ["falsch"]
      }),
      () => ({
        q: "Nenne 5 Verdauungsorgane",
        a: "Mund, Magen, Dünndarm, Dickdarm, Leber",
        w: ["Nur Herz", "Nur Nieren", "Nur Lunge"]
      }),
      () => ({
        q: "Wo wird Fett hauptsächlich verdaut?",
        a: "Dünndarm",
        w: ["Magen", "Mund", "Großdarm"]
      }),
      () => ({
        q: "Die Leber produziert...",
        a: "Galle",
        w: ["Pepsin", "Speichel", "Insulin"]
      }),
      () => ({
        q: "Wie lange bleiben Speisen im Magen?",
        a: "2-4 Stunden",
        w: ["30 Minuten", "10 Stunden", "1 Stunde"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const organ = pick(DIGESTIVE_ORGANS, rng);
      const template = templates[i % templates.length];
      const t = template(organ);
      questions.push(createMCQ("ernaehrung", "digestive_system", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  digestive_system_typing: (seed?: number) => [
    createTyping("ernaehrung", "digestive_system", "Nenne 5 Verdauungsorgane", ["Mund, Magen, Dünndarm, Dickdarm"]),
    createTyping("ernaehrung", "digestive_system", "Wo wird Fett hauptsächlich verdaut?", ["Dünndarm"]),
    createTyping("ernaehrung", "digestive_system", "Die Leber produziert...", ["Galle"]),
    createTyping("ernaehrung", "digestive_system", "Wie lange bleiben Speisen im Magen?", ["2-4 Stunden"]),
    createTyping("ernaehrung", "digestive_system", "Der Dünndarm ist wie lang?", ["5-7 Meter"]),
  ],

  digestive_organs: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () => ({
        q: "Welches Organ produziert Verdauungsenzyme?",
        a: "Bauchspeicheldrüse",
        w: ["Leber", "Magen", "Speicheldrüse"]
      }),
      () => ({
        q: "Wo sitzt die Leber?",
        a: "Rechts unter den Rippen",
        w: ["Links", "Mitte", "Unten"]
      }),
      () => ({
        q: "Wie schwer ist die Leber?",
        a: "1,5 kg",
        w: ["500g", "3 kg", "2,5 kg"]
      }),
      () => ({
        q: "Was ist die Bauchspeicheldrüse?",
        a: "Pankreas",
        w: ["Niere", "Milz", "Thymus"]
      }),
      () => ({
        q: "Die Bauchspeicheldrüse produziert...",
        a: "Insulin und Enzyme",
        w: ["Galle", "Speichel", "Schweiß"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const template = templates[i % templates.length];
      const t = template();
      questions.push(createMCQ("ernaehrung", "digestive_organs", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  digestive_organs_typing: (seed?: number) => [
    createTyping("ernaehrung", "digestive_organs", "Wo sitzt die Leber?", ["Rechts unter Rippen"]),
    createTyping("ernaehrung", "digestive_organs", "Wie schwer ist die Leber?", ["1,5 kg"]),
    createTyping("ernaehrung", "digestive_organs", "Was ist die Bauchspeicheldrüse?", ["Pankreas"]),
    createTyping("ernaehrung", "digestive_organs", "Die Bauchspeicheldrüse produziert...", ["Insulin", "Enzyme"]),
    createTyping("ernaehrung", "digestive_organs", "Gallensteine entstehen in der...", ["Gallenblase"]),
  ],

  healthy_diet: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    const templates = [
      () => ({
        q: "Welcher Nährstoff ist für starke Knochen wichtig?",
        a: "Kalzium",
        w: ["Eisen", "Natrium", "Kalium"]
      }),
      () => ({
        q: "Was ist eine ausgewogene Ernährung?",
        a: "Alle Nährstoffe in richtigen Mengen",
        w: ["Nur Obst", "Nur Fleisch", "Nur Getreide"]
      }),
      () => ({
        q: "Wieviel Wasser sollte man täglich trinken?",
        a: "2 Liter",
        w: ["1 Liter", "5 Liter", "0,5 Liter"]
      }),
      () => ({
        q: "Ballaststoffe sind in...",
        a: "Vollkorn und Gemüse",
        w: ["Zucker", "Öl", "Salz"]
      }),
      () => ({
        q: "Zucker sollte...",
        a: "Vermieden oder begrenzt werden",
        w: ["Täglich gegessen werden", "Das Hauptessen sein", "Ungewöhnlich sein"]
      }),
    ];
    for (let i = 0; i < 30; i++) {
      const template = templates[i % templates.length];
      const t = template();
      questions.push(createMCQ("ernaehrung", "healthy_diet", t.q, t.a, t.w, rng));
    }
    return questions;
  },
  healthy_diet_typing: (seed?: number) => [
    createTyping("ernaehrung", "healthy_diet", "Was ist eine ausgewogene Ernährung?", ["Alle Nährstoffe"]),
    createTyping("ernaehrung", "healthy_diet", "Wieviel Wasser sollte man trinken?", ["2 Liter", "8 Gläser"]),
    createTyping("ernaehrung", "healthy_diet", "Ballaststoffe sind in...", ["Vollkorn", "Gemüse", "Obst"]),
    createTyping("ernaehrung", "healthy_diet", "Zucker sollte...", ["Vermieden werden", "Begrenzt werden"]),
    createTyping("ernaehrung", "healthy_diet", "Gesundes Essen heißt...", ["Nicht zu viel Salz", "Portionskontrolle"]),
  ],
};

// ─── GENERATOR MAP ─────────────────────────────────────────────────────────

export const GENERATOR_MAP = { k5: K5_Generators };

// ─── Automatikus regisztráció ─────────────────────────────────────────────

setK5GeneratorMap(GENERATOR_MAP);
