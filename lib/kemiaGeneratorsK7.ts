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

function buildSubtopicGenerators(topic: string, subtopic: string, focus: string, cards: ConceptCard[]) {
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
      const wrongChoices = buildWrongChoices(cards, current, rng);
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
    Object.assign(out, buildSubtopicGenerators(topic, subtopic, spec.focus, spec.cards));
  }
  return out;
}

const ATOMIC_STRUCTURE: ConceptCard[] = [
  card("Atom", "Der kleinste Baustein eines Elements.", "Ein Sauerstoffatom im Wasser."),
  card("Kern", "Der Mittelpunkt eines Atoms mit Protonen und Neutronen.", "Der Atomkern ist sehr klein und dicht."),
  card("Proton", "Ein positiv geladenes Teilchen im Kern.", "Protonen bestimmen die Ordnungszahl."),
  card("Neutron", "Ein ungeladenes Teilchen im Kern.", "Neutronen machen den Kern schwerer."),
  card("Elektron", "Ein negativ geladenes Teilchen in der Atomhülle.", "Elektronen bewegen sich um den Kern."),
  card("Isotop", "Atome eines Elements mit unterschiedlicher Neutronenzahl.", "Kohlenstoff-12 und Kohlenstoff-14."),
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
    protons_neutrons_electrons: { focus: "Protonen, Neutronen und Elektronen", cards: ATOMIC_STRUCTURE },
    atomic_number: { focus: "Ordnungszahl", cards: ATOMIC_STRUCTURE },
    mass_number: { focus: "Massenzahl", cards: ATOMIC_STRUCTURE },
    electron_shells: { focus: "Elektronenschalen", cards: ATOMIC_STRUCTURE },
    isotopes_intro: { focus: "Isotope", cards: ATOMIC_STRUCTURE },
  }),
  periodic_table: buildTheme("periodic_table", {
    groups_periods: { focus: "Gruppen und Perioden", cards: PERIODIC_TABLE },
    alkali_metals: { focus: "Alkalimetalle", cards: PERIODIC_TABLE },
    halogens: { focus: "Halogene", cards: PERIODIC_TABLE },
    noble_gases: { focus: "Edelgase", cards: PERIODIC_TABLE },
    periodic_trends_basic: { focus: "Periodische Trends", cards: PERIODIC_TABLE },
  }),
  bonding: buildTheme("bonding", {
    chemical_bonds_intro: { focus: "Bindungsarten", cards: BONDING },
    ionic_bonding: { focus: "Ionenbindung", cards: BONDING },
    covalent_bonding: { focus: "Kovalente Bindung", cards: BONDING },
    molecular_formulas: { focus: "Molekülformeln", cards: BONDING },
    valence_intro: { focus: "Valenz", cards: BONDING },
  }),
  reactions_stoich: buildTheme("reactions_stoich", {
    equations_symbols: { focus: "Reaktionsschreibweise", cards: REACTIONS },
    balancing_intro: { focus: "Ausgleichen von Gleichungen", cards: REACTIONS },
    conservation_mass: { focus: "Massenerhaltung", cards: REACTIONS },
    reaction_types_basic: { focus: "Reaktionstypen", cards: REACTIONS },
    oxidation_intro: { focus: "Oxidation", cards: REACTIONS },
  }),
  acids_bases_salts: buildTheme("acids_bases_salts", {
    acid_properties: { focus: "Säuren", cards: ACIDS_BASES_SALTS },
    base_properties: { focus: "Basen", cards: ACIDS_BASES_SALTS },
    salt_formation: { focus: "Salzbildung", cards: ACIDS_BASES_SALTS },
    neutralization_equation: { focus: "Neutralisation", cards: ACIDS_BASES_SALTS },
    indicator_colors: { focus: "Indikatoren", cards: ACIDS_BASES_SALTS },
  }),
  metals_resources: buildTheme("metals_resources", {
    metal_properties: { focus: "Metalleigenschaften", cards: METALS_RESOURCES },
    metal_reactivity: { focus: "Reaktivität von Metallen", cards: METALS_RESOURCES },
    corrosion_protection: { focus: "Korrosionsschutz", cards: METALS_RESOURCES },
    ores_extraction_intro: { focus: "Erze und Gewinnung", cards: METALS_RESOURCES },
    alloys_intro: { focus: "Legierungen", cards: METALS_RESOURCES },
  }),
};
