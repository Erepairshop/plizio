import { createMCQ, createTyping, mulberry32, shuffle, type KemiaGeneratorMap } from "./kemiaCurriculumShared";

interface ConceptCard {
  term: string;
  definition: string;
  example: string;
}

function uniqueWrongPool(pool: string[], correct: string): string[] {
  return pool.filter((item) => item !== correct);
}

function buildSubtopicGenerators(topic: string, subtopic: string, focus: string, deck: ConceptCard[]) {
  const terms = deck.map((c) => c.term);
  const definitions = deck.map((c) => c.definition);
  const examples = deck.map((c) => c.example);

  const makeOptions = (correct: string, pool: string[], rng: () => number) => {
    const wrongs = shuffle(uniqueWrongPool(pool, correct), rng).slice(0, 3);
    return shuffle([correct, ...wrongs], rng);
  };

  const mcq = (seed: number) => {
    const rng = mulberry32(seed);
    const ordered = shuffle(deck, rng);
    const questions = [];

    for (const card of ordered) {
      const termOptions = makeOptions(card.term, terms, rng);
      const defOptions = makeOptions(card.definition, definitions, rng);
      const exampleOptions = makeOptions(card.example, examples, rng);

      questions.push(
        createMCQ(
          topic,
          subtopic,
          `${focus}: Welche Bezeichnung passt zu dieser Erklärung? ${card.definition}`,
          card.term,
          termOptions.filter((opt) => opt !== card.term),
          rng
        )
      );
      questions.push(
        createMCQ(
          topic,
          subtopic,
          `${focus}: Welches Beispiel passt zu "${card.term}"?`,
          card.example,
          exampleOptions.filter((opt) => opt !== card.example),
          rng
        )
      );
      questions.push(
        createMCQ(
          topic,
          subtopic,
          `${focus}: Welche Beschreibung passt zu "${card.term}"?`,
          card.definition,
          defOptions.filter((opt) => opt !== card.definition),
          rng
        )
      );
      questions.push(
        createMCQ(
          topic,
          subtopic,
          `${focus}: Was ist hier am ehesten gemeint: "${card.example}"?`,
          card.term,
          termOptions.filter((opt) => opt !== card.term),
          rng
        )
      );
    }

    return questions.slice(0, 24);
  };

  const typing = (seed: number) => {
    const rng = mulberry32(seed);
    const ordered = shuffle(deck, rng);
    const questions = [];

    for (let i = 0; i < 6; i++) {
      const card = ordered[i % ordered.length];
      if (i % 3 === 0) {
        questions.push(createTyping(topic, subtopic, `${focus}: Schreibe den Fachbegriff zu dieser Erklärung: ${card.definition}`, card.term));
      } else if (i % 3 === 1) {
        questions.push(createTyping(topic, subtopic, `${focus}: Schreibe ein Beispiel zu "${card.term}":`, card.example));
      } else {
        questions.push(createTyping(topic, subtopic, `${focus}: Welcher Begriff passt? ${card.example}`, card.term));
      }
    }

    return questions;
  };

  return {
    [subtopic]: (seed: number) => [...mcq(seed), ...typing(seed)],
    [`${subtopic}_mcq`]: mcq,
    [`${subtopic}_typing`]: typing,
  } as Record<string, (seed?: number) => any[]>;
}

function mergeThemeGenerators(topic: string, entries: Record<string, { focus: string; deck: ConceptCard[] }>) {
  const out: Record<string, (seed?: number) => any[]> = {};
  for (const [subtopic, cfg] of Object.entries(entries)) {
    Object.assign(out, buildSubtopicGenerators(topic, subtopic, cfg.focus, cfg.deck));
  }
  return out;
}

const ATOMS_AND_ELEMENTS: ConceptCard[] = [
  { term: "Atom", definition: "Der kleinste Baustein eines Elements.", example: "Ein Sauerstoff-Atom im Wasser." },
  { term: "Element", definition: "Ein Reinstoff aus nur einer Atomsorte.", example: "Sauerstoff, Eisen oder Kupfer." },
  { term: "Proton", definition: "Teilchen mit positiver Ladung im Atomkern.", example: "Im Kern eines Wasserstoffatoms." },
  { term: "Elektron", definition: "Teilchen mit negativer Ladung in der Hülle.", example: "Es bewegt sich um den Kern herum." },
  { term: "Neutron", definition: "Teilchen ohne Ladung im Atomkern.", example: "Es macht den Kern schwerer." },
  { term: "Symbol", definition: "Abkürzung für ein chemisches Element.", example: "H für Wasserstoff, O für Sauerstoff." },
];

const COMPOUNDS_AND_PARTICLES: ConceptCard[] = [
  { term: "Molekül", definition: "Mehrere Atome, die zusammengehören.", example: "Wassermolekül H2O." },
  { term: "Verbindung", definition: "Ein Stoff aus verschiedenen Atomsorten.", example: "Kochsalz oder Wasser." },
  { term: "Gemisch", definition: "Mehrere Stoffe sind nebeneinander vorhanden.", example: "Luft oder Müsli." },
  { term: "Formel", definition: "Die Kurzschreibweise für einen Stoff.", example: "H2O, CO2 oder NaCl." },
  { term: "Bindung", definition: "Die Kraft, die Atome zusammenhält.", example: "Im Wassermolekül sind Atome gebunden." },
  { term: "Reinstoff", definition: "Ein Stoff mit nur einer Teilchenart.", example: "Destilliertes Wasser." },
];

const REACTIONS_AND_EQUATIONS: ConceptCard[] = [
  { term: "Edukt", definition: "Ausgangsstoff einer chemischen Reaktion.", example: "Holz vor dem Verbrennen." },
  { term: "Produkt", definition: "Stoff, der bei einer Reaktion entsteht.", example: "Asche nach dem Verbrennen." },
  { term: "Reaktionsgleichung", definition: "Schreibweise für eine chemische Reaktion.", example: "2H2 + O2 -> 2H2O." },
  { term: "Verbrennung", definition: "Reaktion mit Sauerstoff und Energieabgabe.", example: "Eine Kerze brennt." },
  { term: "Zerlegung", definition: "Ein Stoff wird in einfachere Stoffe getrennt.", example: "Wasser wird in Wasserstoff und Sauerstoff zerlegt." },
  { term: "Massenerhaltung", definition: "Die Masse bleibt in einer Reaktion gleich.", example: "Vorher und nachher ist die Gesamtmasse gleich." },
];

const ACIDS_AND_BASES: ConceptCard[] = [
  { term: "Säure", definition: "Ein Stoff mit saurer Wirkung.", example: "Zitronensaft ist sauer." },
  { term: "Base", definition: "Ein Stoff mit basischer Wirkung.", example: "Seifenwasser ist basisch." },
  { term: "Indikator", definition: "Ein Stoff, der Farben je nach pH ändert.", example: "Lackmuspapier." },
  { term: "pH-Wert", definition: "Zahl, die sauer oder basisch zeigt.", example: "pH 7 ist neutral." },
  { term: "Neutralisation", definition: "Säure und Base gleichen sich aus.", example: "Säure wird mit Base neutralisiert." },
  { term: "Salz", definition: "Ein Stoff, der bei Neutralisation entstehen kann.", example: "Kochsalz." },
];

const SOLUTIONS_AND_SEPARATION: ConceptCard[] = [
  { term: "Lösung", definition: "Ein Stoff ist gleichmäßig in einem anderen verteilt.", example: "Salz in Wasser." },
  { term: "Löslichkeit", definition: "Wie viel sich in einem Lösungsmittel lösen kann.", example: "Zucker löst sich gut in Wasser." },
  { term: "Konzentration", definition: "Wie viel gelöster Stoff in einer Lösung ist.", example: "Starke oder schwache Salzlösung." },
  { term: "Filtration", definition: "Trennverfahren mit Filter.", example: "Sand aus Wasser filtern." },
  { term: "Destillation", definition: "Trennung durch Verdampfen und Kondensieren.", example: "Reines Wasser aus Meerwasser gewinnen." },
  { term: "Kristallisation", definition: "Stoff bildet feste Kristalle aus der Lösung.", example: "Salzkristalle entstehen beim Verdunsten." },
];

const ENVIRONMENT_AND_MATERIALS: ConceptCard[] = [
  { term: "Wasserreinigung", definition: "Schmutz wird aus Wasser entfernt.", example: "Filter im Wasserwerk." },
  { term: "Luftverschmutzung", definition: "Schädliche Stoffe in der Luft.", example: "Abgase aus Autos." },
  { term: "Recycling", definition: "Stoffe werden wiederverwertet.", example: "Papier und Glas sammeln." },
  { term: "erneuerbar", definition: "Eine Ressource wird schnell nachgebildet.", example: "Sonnenenergie oder Windenergie." },
  { term: "fossil", definition: "Ein Stoff aus uralter organischer Materie.", example: "Kohle, Erdöl, Erdgas." },
  { term: "Sicherheit", definition: "Richtiges und vorsichtiges Arbeiten mit Stoffen.", example: "Handschuhe und Schutzbrille tragen." },
];

export const K6_CHEMISTRY_GENERATORS: KemiaGeneratorMap = {
  atoms_elements: mergeThemeGenerators("atoms_elements", {
    atom_model_intro: { focus: "Atommodell", deck: ATOMS_AND_ELEMENTS },
    elements_intro: { focus: "Elemente", deck: ATOMS_AND_ELEMENTS },
    metals_nonmetals: { focus: "Metalle und Nichtmetalle", deck: ATOMS_AND_ELEMENTS },
    symbols_intro: { focus: "Chemische Symbole", deck: ATOMS_AND_ELEMENTS },
    periodic_table_intro: { focus: "Periodensystem", deck: ATOMS_AND_ELEMENTS },
  }),
  compounds_particles: mergeThemeGenerators("compounds_particles", {
    compounds_intro: { focus: "Verbindungen", deck: COMPOUNDS_AND_PARTICLES },
    molecules_intro: { focus: "Moleküle", deck: COMPOUNDS_AND_PARTICLES },
    atoms_vs_molecules: { focus: "Atom oder Molekül", deck: COMPOUNDS_AND_PARTICLES },
    element_vs_compound: { focus: "Element oder Verbindung", deck: COMPOUNDS_AND_PARTICLES },
    mixture_vs_compound: { focus: "Gemisch oder Verbindung", deck: COMPOUNDS_AND_PARTICLES },
  }),
  reactions_equations: mergeThemeGenerators("reactions_equations", {
    reactants_products: { focus: "Edukte und Produkte", deck: REACTIONS_AND_EQUATIONS },
    reaction_energy: { focus: "Energie bei Reaktionen", deck: REACTIONS_AND_EQUATIONS },
    combustion_reactions: { focus: "Verbrennungsreaktionen", deck: REACTIONS_AND_EQUATIONS },
    decomposition_intro: { focus: "Zerlegung", deck: REACTIONS_AND_EQUATIONS },
    word_equations: { focus: "Wortgleichungen", deck: REACTIONS_AND_EQUATIONS },
  }),
  acids_bases_intro: mergeThemeGenerators("acids_bases_intro", {
    acids_everyday: { focus: "Säuren im Alltag", deck: ACIDS_AND_BASES },
    bases_everyday: { focus: "Basen im Alltag", deck: ACIDS_AND_BASES },
    indicators_intro: { focus: "Indikatoren", deck: ACIDS_AND_BASES },
    ph_scale_intro: { focus: "pH-Skala", deck: ACIDS_AND_BASES },
    neutralization_intro: { focus: "Neutralisation", deck: ACIDS_AND_BASES },
  }),
  solutions_separation: mergeThemeGenerators("solutions_separation", {
    solubility_intro: { focus: "Löslichkeit", deck: SOLUTIONS_AND_SEPARATION },
    concentration_basic: { focus: "Konzentration", deck: SOLUTIONS_AND_SEPARATION },
    crystallization: { focus: "Kristallisation", deck: SOLUTIONS_AND_SEPARATION },
    distillation_intro: { focus: "Destillation", deck: SOLUTIONS_AND_SEPARATION },
    chromatography_intro: { focus: "Chromatografie", deck: SOLUTIONS_AND_SEPARATION },
  }),
  environment_resources: mergeThemeGenerators("environment_resources", {
    water_purification: { focus: "Wasserreinigung", deck: ENVIRONMENT_AND_MATERIALS },
    air_pollution_intro: { focus: "Luftverschmutzung", deck: ENVIRONMENT_AND_MATERIALS },
    recycling_materials: { focus: "Recycling", deck: ENVIRONMENT_AND_MATERIALS },
    fossil_vs_renewable: { focus: "Fossil oder erneuerbar", deck: ENVIRONMENT_AND_MATERIALS },
    chemistry_safety_home: { focus: "Chemiesicherheit zuhause", deck: ENVIRONMENT_AND_MATERIALS },
  }),
};
