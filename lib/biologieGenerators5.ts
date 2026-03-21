// ─── BIOLOGIE GENERATORS (Klasse 5) ───────────────────────────────────────
// English Test mintájára strukturálva
// 24 subtopic × 2 (MCQ + Typing) = 48 generátor
// Minden MCQ generátor: 30 kérdés
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
  { name: "Hecht", organ: "Kiemen", habitat: "Süßwasser" },
  { name: "Forelle", organ: "Kiemen", habitat: "Kalte Flüsse" },
  { name: "Barsch", organ: "Kiemen", habitat: "Seen" },
  { name: "Hai", organ: "Kiemen", habitat: "Salzwasser" },
  { name: "Kabeljau", organ: "Kiemen", habitat: "Meeresboden" },
];

const AMPHIBIAN_DATA = [
  { name: "Frosch", transformation: "Kaulquappe → Frosch", feature: "4 Beine" },
  { name: "Molch", transformation: "Lunge + Haut Atmung", feature: "Schwanz" },
  { name: "Salamander", transformation: "Feucht Habitat", feature: "Farben" },
];

const REPTILE_DATA = [
  { name: "Schlange", feature: "Schuppen", diet: "Fleischfresser" },
  { name: "Eidechse", feature: "Vier Beine", diet: "Insekten" },
  { name: "Schildkröte", feature: "Panzer", diet: "Pflanzen" },
  { name: "Krokodil", feature: "Starke Kiefer", diet: "Fleischfresser" },
];

const BIRD_DATA = [
  { name: "Adler", adaptation: "Hohlknochen", feature: "Scharfe Augen" },
  { name: "Schwalbe", adaptation: "Leichte Flügel", feature: "Schnell" },
  { name: "Ente", adaptation: "Wasserdicht", feature: "Webbed Füße" },
];

const MAMMAL_DATA = [
  { name: "Löwe", feature: "Haare", diet: "Fleisch" },
  { name: "Kuh", feature: "Euter", diet: "Gras" },
  { name: "Mensch", feature: "Großes Gehirn", diet: "Omnivore" },
];

// PFLANZEN
const PLANT_ORGANS = [
  { organ: "Blatt", function: "Fotosynthese", location: "Oberirdisch" },
  { organ: "Wurzel", function: "Wasser aufnahme", location: "Unterirdisch" },
  { organ: "Stamm", function: "Stützung", location: "Zentral" },
  { organ: "Blüte", function: "Fortpflanzung", location: "Blätter" },
];

const PHOTOSYNTHESIS_COMPONENTS = [
  { input: "CO2", role: "Gas", source: "Luft" },
  { input: "Wasser", role: "Nährstoff", source: "Wurzeln" },
  { input: "Licht", role: "Energie", source: "Sonne" },
];

// KÖRPER
const BONES = [
  { bone: "Schädel", protects: "Gehirn", location: "Kopf" },
  { bone: "Wirbelsäule", protects: "Rückenmark", location: "Rücken" },
  { bone: "Rippen", protects: "Lunge", location: "Brust" },
];

const MUSCLES = [
  { muscle: "Herz", function: "Pumpen", type: "Unwillkürlich" },
  { muscle: "Bizeps", function: "Arm beugen", type: "Willkürlich" },
  { muscle: "Zwerchfell", function: "Atmung", type: "Unwillkürlich" },
];

// SINNESORGANE
const SENSES = [
  { sense: "Sehen", organ: "Auge", receptor: "Fotoreceptor" },
  { sense: "Hören", organ: "Ohr", receptor: "Haarzelle" },
  { sense: "Riechen", organ: "Nase", receptor: "Chemorezeptor" },
  { sense: "Schmecken", organ: "Zunge", receptor: "Geschmacksknospe" },
  { sense: "Tasten", organ: "Haut", receptor: "Mechanorezeptor" },
];

// ERNÄHRUNG
const NUTRIENTS = [
  { nutrient: "Eiweiß", source: "Fleisch", function: "Wachstum" },
  { nutrient: "Kohlenhydrate", source: "Getreide", function: "Energie" },
  { nutrient: "Fett", source: "Öl", function: "Speicherung" },
  { nutrient: "Vitamin", source: "Obst", function: "Immunität" },
];

const DIGESTIVE_ORGANS = [
  { organ: "Mund", enzyme: "Speichel", function: "Zerkleinerung" },
  { organ: "Magen", enzyme: "Salzsäure", function: "Auflösung" },
  { organ: "Dünndarm", enzyme: "Pankreasenzyme", function: "Absorption" },
  { organ: "Leber", product: "Galle", function: "Fettabbau" },
];

// ─── K5 GENERATORS (24 subtopics × 2 = 48 Generators) ─────────────────────

export const K5_Generators: Record<string, (seed?: number) => CurriculumQuestion[]> = {
  // WIRBELTIERE (6 subtopics)
  fish: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const fish = pick(FISH_DATA, rng);
      const question = [
        `Welches Organ benutzt ${fish.name} zum Atmen?`,
        `In welchem Habitat lebt die ${fish.name}?`,
        `${fish.name} haben welche spezialisierte Struktur?`,
        `Welcher Fisch lebt in ${fish.habitat}?`,
      ][i % 4];
      const answer = [fish.organ, fish.habitat, fish.organ, fish.name][i % 4];
      const wrongAnswers = [
        ["Lungen", "Tracheen", "Haut"],
        ["Wald", "Wüste", "Berge"],
        ["Schuppen", "Flossen", "Augen"],
        ["Forelle", "Hai", "Barsch"],
      ][i % 4];
      questions.push(createMCQ("wirbeltiere", "fish", question, answer, wrongAnswers, rng));
    }
    return questions;
  },
  fish_typing: (seed?: number) => [
    createTyping("wirbeltiere", "fish", "Nenne ein Beispiel für einen Süßwasserfisch", ["Hecht", "Forelle", "Barsch"]),
    createTyping("wirbeltiere", "fish", "Welches Organ atmet der Fisch?", ["Kiemen", "Branchien"]),
    createTyping("wirbeltiere", "fish", "Wie heißt die Struktur der Fische zum Schwimmen?", ["Flossen"]),
    createTyping("wirbeltiere", "fish", "In welchem Lebensraum leben Fische?", ["Wasser", "Gewässer"]),
    createTyping("wirbeltiere", "fish", "Ein Hai lebt in welchem Wasser?", ["Salzwasser", "Meerwasser"]),
  ],

  amphibian: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const amp = pick(AMPHIBIAN_DATA, rng);
      const question = [
        `Die ${amp.name} durchläuft welche Metamorphose?`,
        `${amp.name} haben welches Merkmal?`,
        `${amp.feature} ist ein Merkmal der ${amp.name}`,
        `Welche Transformation macht ${amp.name} durch?`,
      ][i % 4];
      const answer = [amp.transformation, amp.feature, amp.name, amp.transformation][i % 4];
      const wrongAnswers = [
        ["Keine", "Schnelle", "Rückwärts"],
        ["Panzer", "Schuppen", "Fell"],
        ["Frosch", "Molch", "Salamander"],
        ["Keine", "Schnelle", "Rückwärts"],
      ][i % 4];
      questions.push(createMCQ("wirbeltiere", "amphibian", question, answer, wrongAnswers, rng));
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
    for (let i = 0; i < 30; i++) {
      const rep = pick(REPTILE_DATA, rng);
      questions.push(
        createMCQ("wirbeltiere", "reptile",
          `Womit ist die Haut der ${rep.name} bedeckt?`, rep.feature, ["Haare", "Federn", "Mucus"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  reptile_typing: (seed?: number) => [
    createTyping("wirbeltiere", "reptile", "Nenne eine Echse", ["Eidechse", "Schlange", "Schildkröte"]),
    createTyping("wirbeltiere", "reptile", "Mit was ist ein Reptil bedeckt?", ["Schuppen"]),
    createTyping("wirbeltiere", "reptile", "Wie viele Beine hat eine Schlange?", ["0", "null", "Keine"]),
    createTyping("wirbeltiere", "reptile", "Was ist ein kalter Körper?", ["Reptilien", "Kaltblütig", "Ektotherm"]),
    createTyping("wirbeltiere", "reptile", "Ein Krokodil ist ein...", ["Reptil"]),
  ],

  bird: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const bird = pick(BIRD_DATA, rng);
      questions.push(
        createMCQ("wirbeltiere", "bird",
          `Welche Anpassung hilft ${bird.name} zu fliegen?`, bird.adaptation, ["Federn", "Flügel", "Muskulatur"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  bird_typing: (seed?: number) => [
    createTyping("wirbeltiere", "bird", "Welches Tier hat Federn?", ["Vogel", "Vögel"]),
    createTyping("wirbeltiere", "bird", "Hohlknochen sind in welchem Tier?", ["Vögel", "Vogel"]),
    createTyping("wirbeltiere", "bird", "Welches Merkmal hat ein Vogel?", ["Flügel", "Federn", "Schnabel"]),
    createTyping("wirbeltiere", "bird", "Nenne einen fliegenden Vogel", ["Adler", "Schwalbe", "Ente"]),
    createTyping("wirbeltiere", "bird", "Was ermöglicht Vögeln zu fliegen?", ["Hohlknochen", "Leichte Flügel"]),
  ],

  mammal: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const mam = pick(MAMMAL_DATA, rng);
      questions.push(
        createMCQ("wirbeltiere", "mammal",
          `Das Merkmal "${mam.feature}" haben Säugetiere wie ${mam.name}`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  mammal_typing: (seed?: number) => [
    createTyping("wirbeltiere", "mammal", "Welches Tier hat Haare?", ["Säugetiere", "Säugetier"]),
    createTyping("wirbeltiere", "mammal", "Menschen sind welche Art?", ["Säugetiere", "Säugetier"]),
    createTyping("wirbeltiere", "mammal", "Nenne ein Säugetier", ["Löwe", "Kuh", "Mensch"]),
    createTyping("wirbeltiere", "mammal", "Säugetiere haben wie viele Gliedmaßen?", ["4", "vier"]),
    createTyping("wirbeltiere", "mammal", "Was ist ein Merkmal von Säugetieren?", ["Haare", "Warm blood", "Stillen"]),
  ],

  vertebrate_comparison: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("wirbeltiere", "vertebrate_comparison",
          "Welches ist ein Wirbellose Tier?", "Insekt", ["Fisch", "Vogel", "Säugetier"], rng)
      );
    }
    return questions;
  },
  vertebrate_comparison_typing: (seed?: number) => [
    createTyping("wirbeltiere", "vertebrate_comparison", "Welches ist kein Wirbeliere?", ["Insekt", "Wurm", "Molluske"]),
    createTyping("wirbeltiere", "vertebrate_comparison", "Was haben alle Wirbeliere?", ["Wirbelsäule", "Rückgrat"]),
    createTyping("wirbeltiere", "vertebrate_comparison", "Wie viele Wirbeliere Klassen gibt es?", ["5", "fünf"]),
    createTyping("wirbeltiere", "vertebrate_comparison", "Nenne eine Wirbellose Tier", ["Insekt", "Spin", "Wurm"]),
    createTyping("wirbeltiere", "vertebrate_comparison", "Wirbellose sind wie viel %?", ["99", "Mehr"]),
  ],

  // PFLANZEN (5 subtopics)
  plant_parts: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const organ = pick(PLANT_ORGANS, rng);
      questions.push(
        createMCQ("pflanzen", "plant_parts",
          `${organ.organ} Funktion: ${organ.function}?`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  plant_parts_typing: (seed?: number) => [
    createTyping("pflanzen", "plant_parts", "Welche Teile hat eine Pflanze?", ["Wurzel, Stamm, Blatt"]),
    createTyping("pflanzen", "plant_parts", "Welches Organ macht Fotosynthese?", ["Blatt"]),
    createTyping("pflanzen", "plant_parts", "Was nimmt die Wurzel auf?", ["Wasser", "Nährstoffe"]),
    createTyping("pflanzen", "plant_parts", "Der Stamm ist für...", ["Stützung", "Stützen"]),
    createTyping("pflanzen", "plant_parts", "Welches Organ trägt Blüten?", ["Stamm", "Stiel"]),
  ],

  photosynthesis: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const comp = pick(PHOTOSYNTHESIS_COMPONENTS, rng);
      questions.push(
        createMCQ("pflanzen", "photosynthesis",
          `Was ist die Rolle von ${comp.input}?`, comp.role, ["Katalysator", "Strukturelement", "Farbstoff"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  photosynthesis_typing: (seed?: number) => [
    createTyping("pflanzen", "photosynthesis", "Was ist Fotosynthese?", ["Energieproduktion", "Gasprozess"]),
    createTyping("pflanzen", "photosynthesis", "Welche Chemikalien sind Eingang?", ["CO2, Wasser"]),
    createTyping("pflanzen", "photosynthesis", "Welche Chemikalien sind Ausgang?", ["Zucker, Sauerstoff"]),
    createTyping("pflanzen", "photosynthesis", "Wo findet Fotosynthese statt?", ["Blatt", "Chloroplast"]),
    createTyping("pflanzen", "photosynthesis", "Was ist der Farbstoff?", ["Klorofill", "Chlorophyll"]),
  ],

  flower_structure: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("pflanzen", "flower_structure",
          "Welcher Teil der Blüte produziert Pollen?", "Staubgefäße", ["Blütenkelch", "Krone", "Fruchtknoten"], rng)
      );
    }
    return questions.slice(0, 30);
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
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("pflanzen", "plant_reproduction",
          "Wie beginnt das Leben einer neuen Pflanze?", "Samenkeimung", ["Pollination", "Verblühen", "Verwelkung"], rng)
      );
    }
    return questions.slice(0, 30);
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
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("pflanzen", "plant_types",
          "Welche ist eine nicht blühende Pflanze?", "Moos", ["Rose", "Weizen", "Apfelbaum"], rng)
      );
    }
    return questions.slice(0, 30);
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
    for (let i = 0; i < 30; i++) {
      const bone = pick(BONES, rng);
      questions.push(
        createMCQ("koerper", "skeleton",
          `Welcher Knochen schützt das ${bone.protects}?`, bone.bone, ["Wirbelsäule", "Rippen", "Becken"], rng)
      );
    }
    return questions.slice(0, 30);
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
    for (let i = 0; i < 30; i++) {
      const muscle = pick(MUSCLES, rng);
      questions.push(
        createMCQ("koerper", "muscles",
          `${muscle.muscle} Funktion: ${muscle.function}?`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  muscles_typing: (seed?: number) => [
    createTyping("koerper", "muscles", "Wie viele Muskeln hat der Körper?", ["600"]),
    createTyping("koerper", "muscles", "Was ist ein unwillkürlicher Muskel?", ["Herz", "Verdauung", "Atmung"]),
    createTyping("koerper", "muscles", "Nenne einen großen Muskel", ["Bizeps", "Triceps", "Quadrizeps"]),
    createTyping("koerper", "muscles", "Was ist die kleinste Einheit des Muskels?", ["Sarkomer"]),
    createTyping("koerper", "muscles", "Muskeln sind für...", ["Bewegung"]),
  ],

  skin: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("koerper", "skin",
          "Welche ist die Hauptfunktion der Haut?", "Schutz", ["Bewegung", "Verdauung", "Sauerstofftransport"], rng)
      );
    }
    return questions.slice(0, 30);
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
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("koerper", "body_systems",
          "Welches System transportiert Sauerstoff im Körper?", "Kreislauf", ["Nerven", "Verdauung", "Hormon"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  body_systems_typing: (seed?: number) => [
    createTyping("koerper", "body_systems", "Nenne 3 Körpersysteme", ["Kreislauf, Atemung, Verdauung"]),
    createTyping("koerper", "body_systems", "Was ist das Lymphsystem?", ["Immunität", "Flüssigkeitstransport"]),
    createTyping("koerper", "body_systems", "Das Hormonsystem heißt auch...", ["Endokrin"]),
    createTyping("koerper", "body_systems", "Das Nervensystem teilt sich in...", ["Zentral und Peripher"]),
    createTyping("koerper", "body_systems", "Welches System reguliert pH?", ["Nieren", "Lungen"]),
  ],

  // SINNESORGANE (5 subtopics)
  eye: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("sinnesorgane", "eye",
          "Welcher Teil des Auges nimmt Licht auf?", "Netzhaut", ["Iris", "Linse", "Hornhaut"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  eye_typing: (seed?: number) => [
    createTyping("sinnesorgane", "eye", "Welcher Teil fokussiert das Auge?", ["Linse"]),
    createTyping("sinnesorgane", "eye", "Was ist die Iris?", ["Farbteil"]),
    createTyping("sinnesorgane", "eye", "Welche Schicht hat Photorezeptoren?", ["Netzhaut", "Retina"]),
    createTyping("sinnesorgane", "eye", "Was ist der blinde Fleck?", ["Optischer Nerv"]),
    createTyping("sinnesorgane", "eye", "Welche Farbenblindheit ist häufig?", ["Rot-Grün"]),
  ],

  ear: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("sinnesorgane", "ear",
          "Wo befinden sich die Hörzellen?", "Innenohr", ["Außenohr", "Mittelohr", "Trommelfell"], rng)
      );
    }
    return questions.slice(0, 30);
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
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("sinnesorgane", "nose",
          "Der Geruchssinn ist im...", "Nasenepithel", ["Zunge", "Haut", "Ohr"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  nose_typing: (seed?: number) => [
    createTyping("sinnesorgane", "nose", "Was ist das Riechepithel?", ["Geruchszellen"]),
    createTyping("sinnesorgane", "nose", "Wie viele Düfte kann die Nase erkennen?", ["Tausend"]),
    createTyping("sinnesorgane", "nose", "Der Riechnerv ist der...", ["Olfaktorisch Nerv"]),
    createTyping("sinnesorgane", "nose", "Niesen ist...", ["Reflex"]),
    createTyping("sinnesorgane", "nose", "Viele alte Menschen können nicht gut...", ["Riechen"]),
  ],

  tongue: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("sinnesorgane", "tongue",
          "Geschmacksknospen sind auf der...", "Zunge", ["Mund", "Lippe", "Zahnfleisch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  tongue_typing: (seed?: number) => [
    createTyping("sinnesorgane", "tongue", "Die 5 Geschmacksrichtungen sind...", ["Süß, Salzig, Sauer, Bitter, Umami"]),
    createTyping("sinnesorgane", "tongue", "Was ist Papillen?", ["Geschmacksknospen Struktur"]),
    createTyping("sinnesorgane", "tongue", "Zunge schmeckt süß am...", ["Vorne"]),
    createTyping("sinnesorgane", "tongue", "Bitter wird am... wahrgenommen", ["Hinten"]),
    createTyping("sinnesorgane", "tongue", "Geschmack und Geruch zusammen heißt...", ["Flavor"]),
  ],

  skin_sense: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("sinnesorgane", "skin_sense",
          "Welcher Rezeptor ermöglicht Berührungsempfindung?", "Mechanorezeptor", ["Fotorezeptor", "Chemorezeptor", "Thermorezeptor"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  skin_sense_typing: (seed?: number) => [
    createTyping("sinnesorgane", "skin_sense", "Merkel-Zellen sind Typ von...", ["Mechanorezeptor"]),
    createTyping("sinnesorgane", "skin_sense", "Schmerzrezeptoren sind...", ["Nozizeptoren"]),
    createTyping("sinnesorgane", "skin_sense", "Kälterezeptoren reagieren auf...", ["Unter 25°C"]),
    createTyping("sinnesorgane", "skin_sense", "Wärmerezeptoren sind in der...", ["Dermis"]),
    createTyping("sinnesorgane", "skin_sense", "Propriozeption ist...", ["Körperbewusstsein"]),
  ],

  // ERNÄHRUNG (4 subtopics)
  nutrients: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const nut = pick(NUTRIENTS, rng);
      questions.push(
        createMCQ("ernaehrung", "nutrients",
          `${nut.nutrient} kommt von ${nut.source}?`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  nutrients_typing: (seed?: number) => [
    createTyping("ernaehrung", "nutrients", "Nenne 5 wichtige Nährstoffe", ["Eiweiß, Kohlenhydrate, Fett, Vitamin, Mineralien"]),
    createTyping("ernaehrung", "nutrients", "Welche Nährstoffe liefern Energie?", ["Kohlenhydrate", "Fett", "Eiweiß"]),
    createTyping("ernaehrung", "nutrients", "Wo findest du Vitamin C?", ["Obst", "Zitrusfrüchte"]),
    createTyping("ernaehrung", "nutrients", "Kalzium ist für...", ["Knochen"]),
    createTyping("ernaehrung", "nutrients", "Eisen ist wichtig für...", ["Blut"]),
  ],

  digestive_system: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const organ = pick(DIGESTIVE_ORGANS, rng);
      questions.push(
        createMCQ("ernaehrung", "digestive_system",
          `${organ.organ} Funktion: ${organ.function}?`, "wahr", ["falsch"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  digestive_system_typing: (seed?: number) => [
    createTyping("ernaehrung", "digestive_system", "Nenne 5 Verdauungsorgane", ["Mund, Magen, Dünn-, Dickdarm"]),
    createTyping("ernaehrung", "digestive_system", "Wo wird Fett hauptsächlich verdaut?", ["Dünndarm"]),
    createTyping("ernaehrung", "digestive_system", "Die Leber produziert...", ["Galle"]),
    createTyping("ernaehrung", "digestive_system", "Wie lange bleiben Speisen im Magen?", ["2-4 Stunden"]),
    createTyping("ernaehrung", "digestive_system", "Der Dünndarm ist wie lang?", ["5-7 Meter"]),
  ],

  digestive_organs: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("ernaehrung", "digestive_organs",
          "Welches Organ produziert Verdauungsenzyme?", "Bauchspeicheldrüse", ["Leber", "Magen", "Mundspeicheldrüse"], rng)
      );
    }
    return questions.slice(0, 30);
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
    for (let i = 0; i < 30; i++) {
      questions.push(
        createMCQ("ernaehrung", "healthy_diet",
          "Welcher Nährstoff ist für starke Knochen wichtig?", "Kalzium", ["Eisen", "Natrium", "Kalium"], rng)
      );
    }
    return questions.slice(0, 30);
  },
  healthy_diet_typing: (seed?: number) => [
    createTyping("ernaehrung", "healthy_diet", "Was ist eine ausgewogene Ernährung?", ["Alle Nährstoffe"]),
    createTyping("ernaehrung", "healthy_diet", "Wieviel Wasser sollte man trinken?", ["2 Liter", "8 Gläser"]),
    createTyping("ernaehrung", "healthy_diet", "Ballaststoffe sind in...", ["Vollkorn", "Gemüse", "Obst"]),
    createTyping("ernaehrung", "healthy_diet", "Zucker sollte...", ["Vermieden werden"]),
    createTyping("ernaehrung", "healthy_diet", "Gesundes Essen heißt...", ["Nicht zu viel Salz", "Portion Control"]),
  ],
};

// ─── GENERATOR MAP ─────────────────────────────────────────────────────────

export const GENERATOR_MAP: Record<
  string,
  (seed?: number) => CurriculumQuestion[]
> = K5_Generators;

// ─── Automatikus regisztráció ─────────────────────────────────────────────

setK5GeneratorMap(GENERATOR_MAP);
