import {
  createMCQ,
  createTyping,
  mulberry32,
  shuffle,
  type KemiaGeneratorMap,
} from "./kemiaCurriculumShared";

interface ConceptCard {
  term: string;
  definition: string;
  example: string;
}

type GeneratedQuestion = ReturnType<typeof createMCQ>;
type GeneratorFn = (seed?: number) => GeneratedQuestion[];

interface SubtopicSpec {
  focus: string;
  cards: ConceptCard[];
  distractors?: ConceptCard[];
}

function card(term: string, definition: string, example: string): ConceptCard {
  return { term, definition, example };
}

function uniqueWrongTerms(cards: ConceptCard[], correct: ConceptCard): string[] {
  return [...new Set(cards.map((entry) => entry.term))].filter((term) => term !== correct.term);
}

function buildWrongChoices(cards: ConceptCard[], correct: ConceptCard, rng: () => number): string[] {
  const wrongs = shuffle(uniqueWrongTerms(cards, correct), rng);
  return wrongs.slice(0, 3);
}

function buildSubtopicGenerators(
  topic: string,
  subtopic: string,
  focus: string,
  cards: ConceptCard[],
  distractorCards: ConceptCard[] = cards
) {
  const mcqTemplates = [
    (c: ConceptCard) => `${focus}: Welche Bezeichnung passt zu dieser Erklärung? ${c.definition}`,
    (c: ConceptCard) => `${focus}: Welcher Fachbegriff passt zu diesem Beispiel? ${c.example}`,
    (c: ConceptCard) => `${focus}: Wie nennt man den beschriebenen Stoff oder Begriff? ${c.definition}`,
    (c: ConceptCard) => `${focus}: Welcher Begriff wird hier gesucht? ${c.example}`,
  ];

  const typingTemplates = [
    (c: ConceptCard) => `${focus}: Schreibe den Fachbegriff zu dieser Erklärung: ${c.definition}`,
    (c: ConceptCard) => `${focus}: Schreibe den passenden Begriff zu diesem Beispiel: ${c.example}`,
    (c: ConceptCard) => `${focus}: Welcher Begriff passt? ${c.definition}`,
  ];

  const mcq: GeneratorFn = (seed = 0) => {
    const rng = mulberry32(seed);
    const ordered = shuffle(cards, rng);
    const questions: GeneratedQuestion[] = [];

    for (const current of ordered) {
      const wrongChoices = buildWrongChoices(distractorCards, current, rng);
      for (const template of mcqTemplates) {
        questions.push(createMCQ(topic, subtopic, template(current), current.term, wrongChoices, rng));
      }
    }

    return questions;
  };

  const typing: GeneratorFn = (seed = 0) => {
    const rng = mulberry32(seed + 17);
    const ordered = shuffle(cards, rng);
    const questions: GeneratedQuestion[] = [];

    for (const current of ordered) {
      for (const template of typingTemplates) {
        questions.push(createTyping(topic, subtopic, template(current), current.term));
      }
    }

    return questions;
  };

  return {
    [subtopic]: (seed = 0) => {
      const rng = mulberry32(seed + 101);
      return shuffle([...mcq(seed), ...typing(seed)], rng);
    },
    [`${subtopic}_mcq`]: mcq,
    [`${subtopic}_typing`]: typing,
  } satisfies Record<string, GeneratorFn>;
}

function buildTheme(topic: string, specs: Record<string, SubtopicSpec>) {
  const out: Record<string, GeneratorFn> = {};
  for (const [subtopic, spec] of Object.entries(specs)) {
    Object.assign(out, buildSubtopicGenerators(topic, subtopic, spec.focus, spec.cards, spec.distractors));
  }
  return out;
}

function pick(deck: ConceptCard[], ...indexes: number[]): ConceptCard[] {
  return indexes.map((index) => deck[index]);
}

const ATOMIC_STRUCTURE: ConceptCard[] = [
  card("Atom", "Der kleinste Baustein eines Elements.", "Ein Sauerstoffatom im Wasser."),
  card("Kern", "Der Mittelpunkt eines Atoms mit Protonen und Neutronen.", "Der Atomkern ist sehr klein und dicht."),
  card("Proton", "Ein positiv geladenes Teilchen im Kern.", "Protonen bestimmen die Ordnungszahl."),
  card("Neutron", "Ein ungeladenes Teilchen im Kern.", "Neutronen machen den Kern schwerer."),
  card("Elektron", "Ein negativ geladenes Teilchen in der Atomhülle.", "Elektronen bewegen sich um den Kern."),
  card("Isotop", "Atome eines Elements mit unterschiedlicher Neutronenzahl.", "Kohlenstoff-12 und Kohlenstoff-14."),
  card("Massenzahl", "Die Summe aus Protonen und Neutronen im Kern.", "Kohlenstoff-12 hat die Massenzahl 12."),
  card("Elektronenschale", "Ein Bereich der Atomhülle, in dem sich Elektronen aufhalten.", "Die äußeren Elektronen sitzen auf der äußersten Schale."),
];

const PERIODIC_TABLE: ConceptCard[] = [
  card("Ordnungszahl", "Sie gibt die Anzahl der Protonen an.", "Wasserstoff hat die Ordnungszahl 1."),
  card("Periode", "Eine waagerechte Reihe im Periodensystem.", "In einer Periode ändern sich die Eigenschaften."),
  card("Gruppe", "Eine senkrechte Spalte im Periodensystem.", "Elemente einer Gruppe ähneln sich."),
  card("Alkalimetall", "Ein sehr reaktives Metall der 1. Gruppe.", "Natrium ist ein Alkalimetall."),
  card("Halogen", "Ein reaktives Nichtmetall der 17. Gruppe.", "Chlor gehört zu den Halogenen."),
  card("Edelgas", "Ein sehr reaktionsträger Stoff der 18. Gruppe.", "Helium ist ein Edelgas."),
];

const BONDING: ConceptCard[] = [
  card("Ionenbindung", "Bindung zwischen geladenen Teilchen.", "Kochsalz besitzt eine Ionenbindung."),
  card("Kovalente Bindung", "Atome teilen sich Elektronen.", "Wasser enthält kovalente Bindungen."),
  card("Molekül", "Mehrere Atome sind fest verbunden.", "CO2 ist ein Molekül."),
  card("Valenz", "Wie viele Bindungen ein Atom bildet.", "Sauerstoff bildet oft zwei Bindungen."),
  card("Formel", "Die Kurzschreibweise eines Stoffes.", "H2O ist die Formel von Wasser."),
  card("Gitter", "Regelmäßige Anordnung von Teilchen.", "Salzkristalle bilden ein Gitter."),
];

const REACTIONS: ConceptCard[] = [
  card("Edukt", "Ausgangsstoff einer chemischen Reaktion.", "Holz vor dem Verbrennen."),
  card("Produkt", "Stoff, der bei einer Reaktion entsteht.", "Asche nach dem Verbrennen."),
  card("Reaktionsgleichung", "Schreibweise für eine chemische Reaktion.", "2H2 + O2 -> 2H2O."),
  card("Massenerhaltung", "Die Masse bleibt in einer Reaktion gleich.", "Vorher und nachher ist die Gesamtmasse gleich."),
  card("Exotherm", "Eine Reaktion gibt Energie ab.", "Beim Verbrennen wird Wärme frei."),
  card("Endotherm", "Eine Reaktion nimmt Energie auf.", "Das Lösen mancher Stoffe kühlt ab."),
];

const ACIDS_BASES_SALTS: ConceptCard[] = [
  card("Säure", "Ein Stoff mit saurer Wirkung.", "Zitronensaft ist sauer."),
  card("Base", "Ein Stoff mit basischer Wirkung.", "Seifenwasser ist basisch."),
  card("Indikator", "Ein Stoff, der je nach pH die Farbe wechselt.", "Lackmuspapier ist ein Indikator."),
  card("pH-Wert", "Eine Zahl für sauer, neutral oder basisch.", "pH 7 ist neutral."),
  card("Neutralisation", "Säure und Base gleichen sich aus.", "Säure wird mit Base neutralisiert."),
  card("Salz", "Ein Stoff, der bei Neutralisation entstehen kann.", "Kochsalz ist ein Salz."),
];

const METALS_RESOURCES: ConceptCard[] = [
  card("Metall", "Ein Stoff mit typischem Glanz und guter Leitfähigkeit.", "Eisen ist ein Metall."),
  card("Korrosion", "Zerfall eines Metalls durch Umweltwirkung.", "Eisen kann rosten."),
  card("Rostschutz", "Maßnahme gegen Korrosion.", "Lack schützt Metall."),
  card("Legierung", "Mischung aus Metallen.", "Stahl ist eine Legierung."),
  card("Erz", "Ein Naturstoff, aus dem Metalle gewonnen werden.", "Eisenerz enthält Eisen."),
  card("Metallgewinnung", "Gewinnung eines Metalls aus einem Erz.", "Im Hochofen wird Eisen gewonnen."),
];

export const K7_CHEMISTRY_GENERATORS: KemiaGeneratorMap = {
  atomic_structure: buildTheme("atomic_structure", {
    protons_neutrons_electrons: { focus: "Protonen, Neutronen und Elektronen", cards: pick(ATOMIC_STRUCTURE, 2, 3, 4), distractors: ATOMIC_STRUCTURE },
    atomic_number: { focus: "Ordnungszahl", cards: pick(ATOMIC_STRUCTURE, 2, 0), distractors: ATOMIC_STRUCTURE },
    mass_number: { focus: "Massenzahl", cards: pick(ATOMIC_STRUCTURE, 6, 2, 3), distractors: ATOMIC_STRUCTURE },
    electron_shells: { focus: "Elektronenschalen", cards: pick(ATOMIC_STRUCTURE, 7, 4), distractors: ATOMIC_STRUCTURE },
    isotopes_intro: { focus: "Isotope", cards: pick(ATOMIC_STRUCTURE, 5, 6, 3), distractors: ATOMIC_STRUCTURE },
  }),
  periodic_table: buildTheme("periodic_table", {
    groups_periods: { focus: "Gruppen und Perioden", cards: pick(PERIODIC_TABLE, 2, 1, 0), distractors: PERIODIC_TABLE },
    alkali_metals: { focus: "Alkalimetalle", cards: pick(PERIODIC_TABLE, 3, 2), distractors: PERIODIC_TABLE },
    halogens: { focus: "Halogene", cards: pick(PERIODIC_TABLE, 4, 2), distractors: PERIODIC_TABLE },
    noble_gases: { focus: "Edelgase", cards: pick(PERIODIC_TABLE, 5, 2), distractors: PERIODIC_TABLE },
    periodic_trends_basic: { focus: "Periodische Trends", cards: pick(PERIODIC_TABLE, 0, 2, 1), distractors: PERIODIC_TABLE },
  }),
  bonding: buildTheme("bonding", {
    chemical_bonds_intro: { focus: "Bindungsarten", cards: pick(BONDING, 0, 1, 5), distractors: BONDING },
    ionic_bonding: { focus: "Ionenbindung", cards: pick(BONDING, 0, 5), distractors: BONDING },
    covalent_bonding: { focus: "Kovalente Bindung", cards: pick(BONDING, 1, 2), distractors: BONDING },
    molecular_formulas: { focus: "Molekülformeln", cards: pick(BONDING, 2, 4), distractors: BONDING },
    valence_intro: { focus: "Valenz", cards: pick(BONDING, 3, 1), distractors: BONDING },
  }),
  reactions_stoich: buildTheme("reactions_stoich", {
    equations_symbols: { focus: "Reaktionsschreibweise", cards: pick(REACTIONS, 2, 0, 1), distractors: REACTIONS },
    balancing_intro: { focus: "Ausgleichen von Gleichungen", cards: pick(REACTIONS, 2, 3), distractors: REACTIONS },
    conservation_mass: { focus: "Massenerhaltung", cards: pick(REACTIONS, 3, 0, 1), distractors: REACTIONS },
    reaction_types_basic: { focus: "Reaktionstypen", cards: pick(REACTIONS, 4, 5, 0, 1), distractors: REACTIONS },
    oxidation_intro: { focus: "Oxidation", cards: pick(REACTIONS, 4, 0, 1), distractors: REACTIONS },
  }),
  acids_bases_salts: buildTheme("acids_bases_salts", {
    acid_properties: { focus: "Säuren", cards: pick(ACIDS_BASES_SALTS, 0, 3, 2), distractors: ACIDS_BASES_SALTS },
    base_properties: { focus: "Basen", cards: pick(ACIDS_BASES_SALTS, 1, 3, 2), distractors: ACIDS_BASES_SALTS },
    salt_formation: { focus: "Salzbildung", cards: pick(ACIDS_BASES_SALTS, 5, 4, 0, 1), distractors: ACIDS_BASES_SALTS },
    neutralization_equation: { focus: "Neutralisation", cards: pick(ACIDS_BASES_SALTS, 4, 0, 1, 5), distractors: ACIDS_BASES_SALTS },
    indicator_colors: { focus: "Indikatoren", cards: pick(ACIDS_BASES_SALTS, 2, 3, 0, 1), distractors: ACIDS_BASES_SALTS },
  }),
  metals_resources: buildTheme("metals_resources", {
    metal_properties: { focus: "Metalleigenschaften", cards: pick(METALS_RESOURCES, 0, 3), distractors: METALS_RESOURCES },
    metal_reactivity: { focus: "Reaktivität von Metallen", cards: pick(METALS_RESOURCES, 0, 1), distractors: METALS_RESOURCES },
    corrosion_protection: { focus: "Korrosionsschutz", cards: pick(METALS_RESOURCES, 1, 2), distractors: METALS_RESOURCES },
    ores_extraction_intro: { focus: "Erze und Gewinnung", cards: pick(METALS_RESOURCES, 4, 5), distractors: METALS_RESOURCES },
    alloys_intro: { focus: "Legierungen", cards: pick(METALS_RESOURCES, 3, 0), distractors: METALS_RESOURCES },
  }),
};
