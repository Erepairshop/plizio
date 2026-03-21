// ─── BIOLOGIE GENERATORS (Klasse 7) ───────────────────────────────────────
// 19 subtopic × 2 (MCQ + Typing) = 38 generátor

import type { CurriculumQuestion, CurriculumMCQ, CurriculumTyping } from "./curriculumTypes";
import { setK7GeneratorMap } from "./biologieCurriculum7";

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

function createMCQ(topic: string, subtopic: string, question: string, correct: string, wrongOptions: string[], rng?: () => number): CurriculumMCQ {
  const seen = new Set<string>();
  const unique: string[] = [];
  for (const w of wrongOptions) {
    if (w !== correct && !seen.has(w)) {
      seen.add(w);
      unique.push(w);
    }
  }
  const opts = shuffle([correct, ...unique.slice(0, 3)], rng || Math.random);
  return { type: "mcq", topic, subtopic, question, options: opts, correct: opts.indexOf(correct) };
}

function createTyping(topic: string, subtopic: string, question: string, answer: string | string[]): CurriculumTyping {
  return { type: "typing", topic, subtopic, question, answer };
}

// ─── DATA POOLS ────────────────────────────────────────────────────────────

const CELL_STRUCTURE_DATA = [
  { type: "Prokaryot", nucleus: "Nein", examples: "Bakterien" },
  { type: "Eukaryot", nucleus: "Ja", examples: "Tier, Pflanze" },
];

const ORGANELLE_DATA = [
  { organelle: "Mitochondrium", function: "Energieproduktion", location: "Zytoplasma" },
  { organelle: "Chloroplast", function: "Fotosynthese", location: "Pflanze" },
  { organelle: "Ribosom", function: "Proteinproduktion", location: "Zytoplasma" },
  { organelle: "Lysosom", function: "Verdauung", location: "Zytoplasma" },
];

const PHOTOSYNTHESIS_DETAIL_DATA = [
  { phase: "Licht", location: "Thylakoid", product: "ATP, NADPH" },
  { phase: "Dunkel", location: "Stroma", product: "Glukose" },
];

const RESPIRATION_DETAIL_DATA = [
  { stage: "Glykolyse", location: "Zytoplasma", product: "Pyruvat" },
  { stage: "Krebs", location: "Mitochondrium", product: "CO2" },
  { stage: "Elektronenkette", location: "Mitochondrium", product: "ATP" },
];

const POPULATION_DATA = [
  { term: "Geburtsrate", definition: "Neue Individuen pro Zeit", unit: "%" },
  { term: "Sterberate", definition: "Todesfälle pro Zeit", unit: "%" },
  { term: "Wachstumsrate", definition: "Nettoänderung", unit: "%" },
];

const NICHE_DATA = [
  { organism: "Löwe", niche: "Großwildjäger", habitat: "Savanne" },
  { organism: "Specht", niche: "Insektenjäger", habitat: "Wald" },
  { organism: "Schnecke", niche: "Blattfresser", habitat: "Feuchte Bereiche" },
];

const SYMBIOSIS_DATA = [
  { type: "Mutualismus", example: "Biene & Blume", benefit: "Beide profitieren" },
  { type: "Parasitismus", example: "Floh & Hund", benefit: "Ein Parasit profitiert" },
  { type: "Kommensalismus", example: "Remora & Hai", benefit: "Ein Vorteil" },
];

const IMMUNE_CELL_DATA = [
  { cell: "Lymphozyt", function: "Antikörperproduktion", type: "B-Zelle" },
  { cell: "Phagozyt", function: "Pathogenbeseitigung", type: "Makrophage" },
  { cell: "Natürliche Killer", function: "Virusbekämpfung", type: "NK-Zelle" },
];

const IMMUNE_RESPONSE_DATA = [
  { response: "Innate", speed: "Sofort", specificity: "Nicht spezifisch" },
  { response: "Adaptiv", speed: "Verzögert", specificity: "Hochspezifisch" },
];

const NEURON_DATA = [
  { part: "Dendrit", function: "Signalempfang", direction: "Zu Soma" },
  { part: "Axon", function: "Signalübertragung", direction: "Weg von Soma" },
  { part: "Soma", function: "Zellkörper", location: "Zentral" },
];

const SYNAPSE_DATA = [
  { component: "Synaptischer Spalt", distance: "20nm", function: "Transmitterraum" },
  { component: "Vesikel", content: "Neurotransmitter", location: "Presynaptisch" },
];

const REFLEX_DATA = [
  { type: "Monosynaptisch", synapses: "1", speed: "Schnell" },
  { type: "Polysynaptisch", synapses: "Viele", speed: "Langsam" },
];

const BRAIN_DATA = [
  { region: "Großhirn", function: "Bewusstsein, Denken", size: "Groß" },
  { region: "Kleinhirn", function: "Bewegungskoordination", size: "Mittel" },
  { region: "Hirnstamm", function: "Lebensfunktionen", size: "Klein" },
];

const ADAPTATION_DATA = [
  { type: "Strukturell", example: "Schnabelbäckchen", purpose: "Effizienz" },
  { type: "Verhaltensbedingt", example: "Migration", purpose: "Überleben" },
  { type: "Physiologisch", example: "Giftspeicherung", purpose: "Schutz" },
];

const EVOLUTION_DATA = [
  { mechanism: "Mutation", effect: "Variation", frequency: "Gelegentlich" },
  { mechanism: "Natürliche Auswahl", effect: "Anpassung", frequency: "Kontinuierlich" },
  { mechanism: "Genfluss", effect: "Mischung", frequency: "Bei Migration" },
];

const FOSSIL_DATA = [
  { type: "Körperfossil", example: "Skelett", preservation: "Mineral" },
  { type: "Spurenfossil", example: "Fußabdruck", preservation: "Abdruck" },
  { type: "Chemisches Fossil", example: "Öl", preservation: "Molekulär" },
];

const CELL_CYCLE_DATA = [
  { phase: "G1", activity: "Zellwachstum", checkpoint: "G1/S" },
  { phase: "S", activity: "DNA Replikation", checkpoint: "Intra-S" },
  { phase: "G2", activity: "Vorbereitung", checkpoint: "G2/M" },
  { phase: "M", activity: "Mitose", checkpoint: "Spindel" },
];

const BIOGEOCHEMICAL_DATA = [
  { cycle: "Kohlenstoff", reservoir: "Atmosphäre", process: "Photosynthese" },
  { cycle: "Stickstoff", reservoir: "Boden", process: "Nitrifikation" },
  { cycle: "Wasser", reservoir: "Ozeane", process: "Verdampfung" },
];

const BEHAVIOR_LEARNING_DATA = [
  { type: "Instinkt", innate: "Ja", learned: "Nein" },
  { type: "Konditionierung", innate: "Nein", learned: "Ja" },
  { type: "Imprinting", innate: "Teilweise", learned: "Teilweise" },
];

// ─── K7 GENERATORS ─────────────────────────────────────────────────────────

export const K7_Generators: Record<string, (seed?: number) => CurriculumQuestion[]> = {
  cell_structure: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const cell = pick(CELL_STRUCTURE_DATA, rng);
      questions.push(createMCQ("zellen", "cell_structure", `${cell.type} Zellen haben Kern: ${cell.nucleus}`, cell.nucleus, ["Ja", "Nein"], rng));
    }
    return questions.slice(0, 30);
  },
  cell_structure_typing: (seed?: number) => [
    createTyping("zellen", "cell_structure", "Nenne 2 Zelltypen", ["Prokaryot, Eukaryot"]),
    createTyping("zellen", "cell_structure", "Welche Zellen haben Kern?", ["Eukaryot"]),
    createTyping("zellen", "cell_structure", "Was ist das Zellplasma?", ["Zytoplasma"]),
    createTyping("zellen", "cell_structure", "Was ist die Zellmembran?", ["Schutzschicht"]),
    createTyping("zellen", "cell_structure", "Wo sitzt die DNA?", ["Kern", "Nukleus"]),
  ],

  cell_organelles: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const org = pick(ORGANELLE_DATA, rng);
      questions.push(createMCQ("zellen", "cell_organelles", `${org.organelle} Funktion: ${org.function}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  cell_organelles_typing: (seed?: number) => [
    createTyping("zellen", "cell_organelles", "Welche Organelle produziert Energie?", ["Mitochondrium"]),
    createTyping("zellen", "cell_organelles", "Welche macht Fotosynthese?", ["Chloroplast"]),
    createTyping("zellen", "cell_organelles", "Wo wird Protein gemacht?", ["Ribosom"]),
    createTyping("zellen", "cell_organelles", "Was verdaut Lysosomen?", ["Abfallstoffe"]),
    createTyping("zellen", "cell_organelles", "Nenne 3 Organellen", ["Mitochondrium, Chloroplast, Ribosom"]),
  ],

  microscope: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(createMCQ("zellen", "microscope", "Welche ist eine Mikroskopkomponente?", "Okular", ["Spiegel", "Okular", "Linse"], rng));
    }
    return questions.slice(0, 30);
  },
  microscope_typing: (seed?: number) => [
    createTyping("zellen", "microscope", "Was ist Vergrößerung?", ["Größer machen"]),
    createTyping("zellen", "microscope", "Was ist Auflösung?", ["Detailgenauigkeit"]),
    createTyping("zellen", "microscope", "Nenne Mikroskoparten", ["Licht, Elektron, Scanning"]),
    createTyping("zellen", "microscope", "Wie tief kann man schauen?", ["Mikrometer"]),
    createTyping("zellen", "microscope", "Was ist das Feld?", ["Sichtbereich"]),
  ],

  cell_division: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(createMCQ("zellen", "cell_division", "Mitose produziert wie viele Zellen?", "2", ["1", "2", "4"], rng));
    }
    return questions.slice(0, 30);
  },
  cell_division_typing: (seed?: number) => [
    createTyping("zellen", "cell_division", "Nenne die Phasen der Mitose", ["Prophase, Metaphase, Anaphase, Telophase"]),
    createTyping("zellen", "cell_division", "Meiose produziert wie viele Zellen?", ["4"]),
    createTyping("zellen", "cell_division", "Wofür ist Meiose?", ["Sexuelle Fortpflanzung"]),
    createTyping("zellen", "cell_division", "Wofür ist Mitose?", ["Wachstum"]),
    createTyping("zellen", "cell_division", "Was ist Cytokinese?", ["Zellteilung"]),
  ],

  photosynthesis_detail: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const ph = pick(PHOTOSYNTHESIS_DETAIL_DATA, rng);
      questions.push(createMCQ("stoffwechsel", "photosynthesis_detail", `${ph.phase} Reaktion findet in ${ph.location} statt`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  photosynthesis_detail_typing: (seed?: number) => [
    createTyping("stoffwechsel", "photosynthesis_detail", "Nenne die zwei Phasen", ["Licht, Dunkel"]),
    createTyping("stoffwechsel", "photosynthesis_detail", "Wo finden Lichtreaktionen statt?", ["Thylakoid"]),
    createTyping("stoffwechsel", "photosynthesis_detail", "Wo finden Dunkelreaktionen statt?", ["Stroma"]),
    createTyping("stoffwechsel", "photosynthesis_detail", "Was ist der Calvin-Zyklus?", ["Dunkelreaktion"]),
    createTyping("stoffwechsel", "photosynthesis_detail", "Welches Pigment ist wichtig?", ["Chlorophyll"]),
  ],

  cellular_respiration: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const resp = pick(RESPIRATION_DETAIL_DATA, rng);
      questions.push(createMCQ("stoffwechsel", "cellular_respiration", `${resp.stage} findet in ${resp.location} statt`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  cellular_respiration_typing: (seed?: number) => [
    createTyping("stoffwechsel", "cellular_respiration", "Nenne die 3 Stadien", ["Glykolyse, Krebs, Elektronenkette"]),
    createTyping("stoffwechsel", "cellular_respiration", "Wo ist die Glykolyse?", ["Zytoplasma"]),
    createTyping("stoffwechsel", "cellular_respiration", "Was ist der Krebs-Zyklus?", ["Zitronensäurezyklus"]),
    createTyping("stoffwechsel", "cellular_respiration", "Wie viel ATP von Glucose?", ["30-32"]),
    createTyping("stoffwechsel", "cellular_respiration", "Was ist das Endprodukt?", ["CO2, H2O"]),
  ],

  energy_transfer: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(createMCQ("stoffwechsel", "energy_transfer", "ATP ist...", "Energiewährung", ["Enzym", "Energiewährung", "Hormon"], rng));
    }
    return questions.slice(0, 30);
  },
  energy_transfer_typing: (seed?: number) => [
    createTyping("stoffwechsel", "energy_transfer", "Was ist ATP?", ["Adenosintriphosphat"]),
    createTyping("stoffwechsel", "energy_transfer", "Wie viele Phosphate hat ATP?", ["3"]),
    createTyping("stoffwechsel", "energy_transfer", "ADP + Phosphat = ...", ["ATP"]),
    createTyping("stoffwechsel", "energy_transfer", "Wo wird ATP gemacht?", ["Mitochondrium"]),
    createTyping("stoffwechsel", "energy_transfer", "Wie lange hält ATP?", ["Sekunden"]),
  ],

  population: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const pop = pick(POPULATION_DATA, rng);
      questions.push(createMCQ("oekologie", "population", `${pop.term} Definition: ${pop.definition}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  population_typing: (seed?: number) => [
    createTyping("oekologie", "population", "Was ist eine Population?", ["Gleiche Art am Ort"]),
    createTyping("oekologie", "population", "Was ist Geburtsrate?", ["Neue Individuen %"]),
    createTyping("oekologie", "population", "Was ist Sterberate?", ["Todesfälle %"]),
    createTyping("oekologie", "population", "Was ist K (Tragfähigkeit)?", ["Max Population"]),
    createTyping("oekologie", "population", "Nenne Populationsfaktoren", ["Geburts-, Sterberate"]),
  ],

  ecological_niche: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const niche = pick(NICHE_DATA, rng);
      questions.push(createMCQ("oekologie", "ecological_niche", `${niche.organism} Nische: ${niche.niche}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  ecological_niche_typing: (seed?: number) => [
    createTyping("oekologie", "ecological_niche", "Was ist eine ökologische Nische?", ["Rolle im Ökosystem"]),
    createTyping("oekologie", "ecological_niche", "Was ist das Habitat?", ["Wo lebt es"]),
    createTyping("oekologie", "ecological_niche", "Unterschied Nische & Habitat?", ["Nische = Rolle, Habitat = Ort"]),
    createTyping("oekologie", "ecological_niche", "Können zwei Arten die gleiche Nische haben?", ["Nein"]),
    createTyping("oekologie", "ecological_niche", "Nenne 3 Nischenkomponenten", ["Nahrung, Raum, Zeit"]),
  ],

  competition: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(createMCQ("oekologie", "competition", "Konkurrenz ist um...", "Ressourcen", ["Territorium", "Ressourcen", "Paarung"], rng));
    }
    return questions.slice(0, 30);
  },
  competition_typing: (seed?: number) => [
    createTyping("oekologie", "competition", "Was ist intraspezifische Konkurrenz?", ["Innerhalb Art"]),
    createTyping("oekologie", "competition", "Was ist interspezifische?", ["Zwischen Arten"]),
    createTyping("oekologie", "competition", "Was ist Ausschluss?", ["Eine Art gewinnt"]),
    createTyping("oekologie", "competition", "Folge der Konkurrenz?", ["Anpassung"]),
    createTyping("oekologie", "competition", "Nenne Wettbewerbsarten", ["Raum, Nahrung, Licht"]),
  ],

  symbiosis: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const symb = pick(SYMBIOSIS_DATA, rng);
      questions.push(createMCQ("oekologie", "symbiosis", `${symb.type} Beispiel: ${symb.example}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  symbiosis_typing: (seed?: number) => [
    createTyping("oekologie", "symbiosis", "Nenne die 3 Symbiosetypen", ["Mutualismus, Parasitismus, Kommensalismus"]),
    createTyping("oekologie", "symbiosis", "Was ist Mutualismus?", ["Beide profitieren"]),
    createTyping("oekologie", "symbiosis", "Was ist Parasitismus?", ["Einer profitiert, anderer leidet"]),
    createTyping("oekologie", "symbiosis", "Was ist Kommensalismus?", ["Einer profitiert, anderer neutral"]),
    createTyping("oekologie", "symbiosis", "Nenne ein Beispiel", ["Biene & Blume"]),
  ],

  immune_cells: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const cell = pick(IMMUNE_CELL_DATA, rng);
      questions.push(createMCQ("immunsystem", "immune_cells", `${cell.cell} Funktion: ${cell.function}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  immune_cells_typing: (seed?: number) => [
    createTyping("immunsystem", "immune_cells", "Was sind Lymphozyten?", ["Weiße Blutkörperchen"]),
    createTyping("immunsystem", "immune_cells", "Was sind B-Zellen?", ["Antikörperproduzenten"]),
    createTyping("immunsystem", "immune_cells", "Was sind T-Zellen?", ["Zellauswahl"]),
    createTyping("immunsystem", "immune_cells", "Was sind Makrophagen?", ["Phagozyt"]),
    createTyping("immunsystem", "immune_cells", "Nenne 3 Immunzellen", ["B-Zelle, T-Zelle, Makrophage"]),
  ],

  immune_response: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const resp = pick(IMMUNE_RESPONSE_DATA, rng);
      questions.push(createMCQ("immunsystem", "immune_response", `${resp.response} Immunität ist ${resp.specificity}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  immune_response_typing: (seed?: number) => [
    createTyping("immunsystem", "immune_response", "Nenne die 2 Immuntypen", ["Innate, Adaptiv"]),
    createTyping("immunsystem", "immune_response", "Was ist Innate Immunität?", ["Sofort, unspezifisch"]),
    createTyping("immunsystem", "immune_response", "Was ist Adaptive?", ["Verzögert, spezifisch"]),
    createTyping("immunsystem", "immune_response", "Was ist Antigen?", ["Fremder Stoff"]),
    createTyping("immunsystem", "immune_response", "Was ist Antikörper?", ["Protein gegen Antigen"]),
  ],

  vaccination: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      questions.push(createMCQ("immunsystem", "vaccination", "Impfung bietet...", "Immunität", ["Behandlung", "Immunität", "Heilung"], rng));
    }
    return questions.slice(0, 30);
  },
  vaccination_typing: (seed?: number) => [
    createTyping("immunsystem", "vaccination", "Was ist eine Impfung?", ["Schwaches Antigen"]),
    createTyping("immunsystem", "vaccination", "Worum geht es?", ["Immungedächtnis"]),
    createTyping("immunsystem", "vaccination", "Wie lange wirkt Impfung?", ["Jahre, Jahrzehnte"]),
    createTyping("immunsystem", "vaccination", "Nenne 3 Impfstoffe", ["Masern, Polio, COVID"]),
    createTyping("immunsystem", "vaccination", "Was ist Herdenimmunität?", ["Masse ist immun"]),
  ],

  neuron: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const neuron = pick(NEURON_DATA, rng);
      questions.push(createMCQ("nervensystem", "neuron", `${neuron.part} Funktion: ${neuron.function}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  neuron_typing: (seed?: number) => [
    createTyping("nervensystem", "neuron", "Nenne die 3 Neuronenteile", ["Dendrit, Soma, Axon"]),
    createTyping("nervensystem", "neuron", "Was ist das Soma?", ["Zellkörper"]),
    createTyping("nervensystem", "neuron", "Welcher Teil empfängt Signal?", ["Dendrit"]),
    createTyping("nervensystem", "neuron", "Welcher sendet Signal?", ["Axon"]),
    createTyping("nervensystem", "neuron", "Was ist das Axonhügel?", ["Signal Ursprung"]),
  ],

  synapse: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const syn = pick(SYNAPSE_DATA, rng);
      questions.push(createMCQ("nervensystem", "synapse", `${syn.component} ist ${syn.distance} breit`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  synapse_typing: (seed?: number) => [
    createTyping("nervensystem", "synapse", "Was ist eine Synapse?", ["Verbindung zwischen Neuronen"]),
    createTyping("nervensystem", "synapse", "Was ist ein Neurotransmitter?", ["Chemischer Botenstoff"]),
    createTyping("nervensystem", "synapse", "Was sind Vesikel?", ["Transportbläschen"]),
    createTyping("nervensystem", "synapse", "Was ist der Spalt?", ["Raum zwischen Neuronen"]),
    createTyping("nervensystem", "synapse", "Nenne 3 Neurotransmitter", ["Dopamin, Serotonin, Acetylcholin"]),
  ],

  reflex: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const reflex = pick(REFLEX_DATA, rng);
      questions.push(createMCQ("nervensystem", "reflex", `${reflex.type} Reflex hat ${reflex.synapses} Synapse(n)`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  reflex_typing: (seed?: number) => [
    createTyping("nervensystem", "reflex", "Was ist ein Reflex?", ["Automatische Reaktion"]),
    createTyping("nervensystem", "reflex", "Beispiel für Reflex?", ["Kniesehnen-Reflex"]),
    createTyping("nervensystem", "reflex", "Nenne Reflex-Komponenten", ["Sensor, Neuro, Muskel"]),
    createTyping("nervensystem", "reflex", "Warum schnell?", ["Wenige Synapsen"]),
    createTyping("nervensystem", "reflex", "Was ist der Bogen?", ["Reflex-Weg"]),
  ],

  brain: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const brain = pick(BRAIN_DATA, rng);
      questions.push(createMCQ("nervensystem", "brain", `${brain.region} Funktion: ${brain.function}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  brain_typing: (seed?: number) => [
    createTyping("nervensystem", "brain", "Nenne die 3 Hirnteile", ["Großhirn, Kleinhirn, Hirnstamm"]),
    createTyping("nervensystem", "brain", "Was kontrolliert Großhirn?", ["Bewusstsein, Denken"]),
    createTyping("nervensystem", "brain", "Was macht Kleinhirn?", ["Koordination"]),
    createTyping("nervensystem", "brain", "Was regelt Hirnstamm?", ["Herz, Atmung"]),
    createTyping("nervensystem", "brain", "Was ist das Cerebellum?", ["Kleinhirn"]),
  ],

  adaptation: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const adapt = pick(ADAPTATION_DATA, rng);
      questions.push(createMCQ("evolution", "adaptation", `${adapt.type} Anpassung Beispiel: ${adapt.example}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  adaptation_typing: (seed?: number) => [
    createTyping("evolution", "adaptation", "Nenne 3 Adaptationstypen", ["Strukturell, Verhaltens-, Physiologisch"]),
    createTyping("evolution", "adaptation", "Was ist Strukturanpassung?", ["Morphologie"]),
    createTyping("evolution", "adaptation", "Was ist Verhaltensanpassung?", ["Aktionen, Instinkte"]),
    createTyping("evolution", "adaptation", "Wofür sind Anpassungen?", ["Überleben, Reproduktion"]),
    createTyping("evolution", "adaptation", "Nenne 3 Beispiele", ["Schnabel, Migration, Giftresistenz"]),
  ],

  natural_selection: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const evo = pick(EVOLUTION_DATA, rng);
      questions.push(createMCQ("evolution", "natural_selection", `${evo.mechanism} Effekt: ${evo.effect}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  natural_selection_typing: (seed?: number) => [
    createTyping("evolution", "natural_selection", "Was ist natürliche Auswahl?", ["Überleben der Stärksten"]),
    createTyping("evolution", "natural_selection", "Wer hat das beschrieben?", ["Darwin"]),
    createTyping("evolution", "natural_selection", "Nenne Mechanismen", ["Mutation, Auswahl, Drift"]),
    createTyping("evolution", "natural_selection", "Was ist Fitness?", ["Reproduktionserfolg"]),
    createTyping("evolution", "natural_selection", "Wie lange dauert Evolution?", ["Generationen"]),
  ],

  fossils: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const fossil = pick(FOSSIL_DATA, rng);
      questions.push(createMCQ("evolution", "fossils", `${fossil.type} Beispiel: ${fossil.example}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  fossils_typing: (seed?: number) => [
    createTyping("evolution", "fossils", "Nenne Fossilientypen", ["Körper-, Spur-, Chemisch"]),
    createTyping("evolution", "fossils", "Was ist Körperfossil?", ["Skelett, Knochen"]),
    createTyping("evolution", "fossils", "Was ist Spurenfossil?", ["Fußabdruck, Bau"]),
    createTyping("evolution", "fossils", "Wie alt können Fossilien sein?", ["Millionen Jahre"]),
    createTyping("evolution", "fossils", "Wie datiert man Fossilien?", ["Radiokarbondatierung"]),
  ],

  cell_cycle: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const phase = pick(CELL_CYCLE_DATA, rng);
      questions.push(createMCQ("zellen", "cell_cycle", `${phase.phase} Phase: ${phase.activity}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  cell_cycle_typing: (seed?: number) => [
    createTyping("zellen", "cell_cycle", "Nenne die 4 Phasen", ["G1, S, G2, M"]),
    createTyping("zellen", "cell_cycle", "Was ist S Phase?", ["DNA Replikation"]),
    createTyping("zellen", "cell_cycle", "Was ist G1 Phase?", ["Zellwachstum"]),
    createTyping("zellen", "cell_cycle", "Was ist Checkpoint?", ["Kontrollpunkt"]),
    createTyping("zellen", "cell_cycle", "Wie lange dauert Zellzyklus?", ["20-30 Stunden"]),
  ],

  biogeochemical_cycles: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const cycle = pick(BIOGEOCHEMICAL_DATA, rng);
      questions.push(createMCQ("oekologie", "biogeochemical_cycles", `${cycle.cycle} Kreislauf hat Reservoir in ${cycle.reservoir}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  biogeochemical_cycles_typing: (seed?: number) => [
    createTyping("oekologie", "biogeochemical_cycles", "Nenne 3 Kreisläufe", ["Kohlenstoff, Stickstoff, Wasser"]),
    createTyping("oekologie", "biogeochemical_cycles", "Was ist Kohlenstoffkreislauf?", ["CO2 Austausch"]),
    createTyping("oekologie", "biogeochemical_cycles", "Was ist Stickstoffkreislauf?", ["N2 Fixation"]),
    createTyping("oekologie", "biogeochemical_cycles", "Wo ist das Reservoir?", ["Atmosphäre, Boden, Wasser"]),
    createTyping("oekologie", "biogeochemical_cycles", "Wer sind Produzenten/Konsumenten?", ["Pflanzen/Tiere"]),
  ],

  behavior_learning: (seed?: number) => {
    const rng = seed ? mulberry32(seed) : Math.random;
    const questions: CurriculumQuestion[] = [];
    for (let i = 0; i < 30; i++) {
      const behavior = pick(BEHAVIOR_LEARNING_DATA, rng);
      questions.push(createMCQ("nervensystem", "behavior_learning", `${behavior.type} ist angeboren: ${behavior.innate}`, "wahr", ["falsch"], rng));
    }
    return questions.slice(0, 30);
  },
  behavior_learning_typing: (seed?: number) => [
    createTyping("nervensystem", "behavior_learning", "Was ist Instinkt?", ["Angeborenes Verhalten"]),
    createTyping("nervensystem", "behavior_learning", "Was ist klassische Konditionierung?", ["Pavlov"]),
    createTyping("nervensystem", "behavior_learning", "Was ist Imprinting?", ["Frühe Bindung"]),
    createTyping("nervensystem", "behavior_learning", "Nenne Lerntypen", ["Instinkt, Konditionierung, Insight"]),
    createTyping("nervensystem", "behavior_learning", "Können Tiere lernen?", ["Ja"]),
  ],
};

export const GENERATOR_MAP: Record<string, (seed?: number) => CurriculumQuestion[]> = K7_Generators;

setK7GeneratorMap(GENERATOR_MAP);
