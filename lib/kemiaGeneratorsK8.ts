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

const COMMON_DISTRACTORS = [
  "Atom",
  "Molekül",
  "Lösung",
  "Gas",
  "Salz",
  "Energie",
  "Reaktion",
  "Stoff",
  "Wärme",
  "Licht",
  "Säure",
  "Base",
];

function card(term: string, definition: string, example: string): ConceptCard {
  return { term, definition, example };
}

function buildWrongPool(cards: ConceptCard[], correct: ConceptCard, rng: () => number): string[] {
  const pool = [...new Set(cards.map((c) => c.term))].filter((t) => t !== correct.term);
  const shuffled = shuffle(pool, rng);
  if (shuffled.length >= 3) return shuffled.slice(0, 3);
  const fallback = shuffle(COMMON_DISTRACTORS.filter((t) => t !== correct.term && !pool.includes(t)), rng);
  return [...shuffled, ...fallback].slice(0, 3);
}

function buildSubtopic(topic: string, subtopic: string, focus: string, cards: ConceptCard[]) {
  const mcqTemplates = [
    (c: ConceptCard) => `${focus}: Welche Bezeichnung passt zu dieser Beschreibung? ${c.definition}`,
    (c: ConceptCard) => `${focus}: Welcher Begriff passt zu diesem Beispiel? ${c.example}`,
    (c: ConceptCard) => `${focus}: Womit hat dieser Stoffbegriff zu tun? ${c.definition}`,
    (c: ConceptCard) => `${focus}: Wie nennt man das hier? ${c.example}`,
  ];
  const typingTemplates = [
    (c: ConceptCard) => `${focus}: Schreibe den Fachbegriff zu dieser Beschreibung: ${c.definition}`,
    (c: ConceptCard) => `${focus}: Schreibe den passenden Begriff zu diesem Beispiel: ${c.example}`,
    (c: ConceptCard) => `${focus}: Welcher Begriff passt? ${c.definition}`,
  ];

  const mcq = (seed: number) => {
    const rng = mulberry32(seed);
    const ordered = shuffle(cards, rng);
    const questions: ReturnType<typeof createMCQ>[] = [];

    for (const current of ordered) {
      const wrongTerms = buildWrongPool(cards, current, rng);
      for (const template of mcqTemplates) {
        questions.push(
          createMCQ(
            topic,
            subtopic,
            template(current),
            current.term,
            wrongTerms,
            rng
          )
        );
      }
    }

    return questions;
  };

  const typing = (seed: number) => {
    const rng = mulberry32(seed + 17);
    const ordered = shuffle(cards, rng);
    const questions: ReturnType<typeof createTyping>[] = [];

    for (const current of ordered) {
      for (const template of typingTemplates) {
        questions.push(createTyping(topic, subtopic, template(current), current.term));
      }
    }

    return questions;
  };

  return {
    [subtopic]: (seed: number) => {
      const rng = mulberry32(seed + 101);
      return shuffle([...mcq(seed), ...typing(seed)], rng);
    },
    [`${subtopic}_mcq`]: mcq,
    [`${subtopic}_typing`]: typing,
  } as Record<string, (seed?: number) => ReturnType<typeof createMCQ>[] | ReturnType<typeof createTyping>[]>;
}

function buildTheme(topic: string, specs: Record<string, { focus: string; cards: ConceptCard[] }>) {
  const out: Record<string, (seed?: number) => any[]> = {};
  for (const [subtopic, cfg] of Object.entries(specs)) Object.assign(out, buildSubtopic(topic, subtopic, cfg.focus, cfg.cards));
  return out;
}

const ORGANIC_INTRO = [
  card("Kohlenstoff", "Ein Element, das die organische Chemie prägt.", "Kohlenstoff kann viele Bindungen eingehen."),
  card("Kohlenwasserstoff", "Ein Stoff aus Kohlenstoff und Wasserstoff.", "Alkane und Alkene sind Kohlenwasserstoffe."),
  card("Alkan", "Ein gesättigter Kohlenwasserstoff.", "Methan ist ein Alkan."),
  card("Alken", "Ein ungesättigter Kohlenwasserstoff mit Doppelbindung.", "Ethen ist ein Alken."),
  card("Brennstoff", "Ein Stoff, der Energie beim Verbrennen liefert.", "Benzin ist ein Brennstoff."),
  card("Kohlenstoffkette", "Mehrere C-Atome sind aneinander gekoppelt.", "Lange Ketten bilden die Basis vieler organischer Stoffe."),
];

const ORGANIC_GROUPS = [
  card("Alkohol", "Organische Stoffklasse mit OH-Gruppe.", "Ethanol ist ein Alkohol."),
  card("Carbonsäure", "Organische Säure mit saurer Gruppe.", "Essigsäure gehört dazu."),
  card("Ester", "Stoffe mit oft fruchtigem Geruch.", "Ein Duftstoff kann ein Ester sein."),
  card("Polymer", "Ein Stoff aus vielen gleichen Bausteinen.", "Kunststoffe bestehen oft aus Polymeren."),
  card("Kunststoff", "Künstlich hergestellter organischer Stoff.", "PET-Flaschen sind aus Kunststoff."),
  card("Faser", "Langer, dünner Stoffbaustein.", "Textilfasern können aus Polymeren bestehen."),
];

const RATES_EQUILIBRIUM = [
  card("Reaktionsgeschwindigkeit", "Wie schnell eine Reaktion abläuft.", "Brausetabletten reagieren schneller in warmem Wasser."),
  card("Temperatur", "Hohe Temperatur macht Teilchen beweglicher.", "Wärme beschleunigt viele Reaktionen."),
  card("Oberfläche", "Mehr Oberfläche kann Reaktionen beschleunigen.", "Pulver reagiert oft schneller als ein Brocken."),
  card("Konzentration", "Mehr Teilchen in gleicher Menge.", "Starke Säure reagiert oft schneller."),
  card("Katalysator", "Beschleunigt Reaktionen ohne verbraucht zu werden.", "Enzyme sind Katalysatoren."),
  card("Gleichgewicht", "Hin- und Rückreaktion laufen gleich schnell.", "Das System bleibt dann stabil."),
];

const ELECTROCHEMISTRY = [
  card("Ion", "Geladenes Teilchen.", "Natrium-Ionen und Chlorid-Ionen in Salzlösung."),
  card("Elektrolyse", "Zerlegung mit elektrischem Strom.", "Wasser kann elektrolysiert werden."),
  card("Anode", "Elektrode, an der Oxidation stattfindet.", "Dort werden Elektronen abgegeben."),
  card("Kathode", "Elektrode, an der Reduktion stattfindet.", "Dort werden Elektronen aufgenommen."),
  card("Batterie", "Quelle für elektrische Energie.", "Eine Batterie treibt den Strom an."),
  card("Redox", "Reaktion mit Elektronenübertragung.", "Oxidation und Reduktion gehören zusammen."),
];

const QUANTITATIVE_CHEM = [
  card("Formelmasse", "Addierte Masse aller Atome in einer Formel.", "H2O hat eine bestimmte Formelmasse."),
  card("Mol", "Stoffmenge mit sehr vielen Teilchen.", "1 Mol enthält die Avogadro-Zahl an Teilchen."),
  card("Stoffmenge", "Menge eines Stoffes in mol.", "Man rechnet oft mit mol."),
  card("Molare Masse", "Masse von 1 Mol eines Stoffes.", "Gramm pro Mol ist üblich."),
  card("Ausbeute", "Wie viel Produkt wirklich entsteht.", "Die reale Ausbeute ist oft kleiner."),
  card("Prozent", "Anteil von Hundert.", "Die Ausbeute wird oft in Prozent angegeben."),
];

const CHEMISTRY_SOCIETY = [
  card("Düngemittel", "Stoffe zur Versorgung von Pflanzen.", "Sie liefern Nährstoffe für das Wachstum."),
  card("Waschmittel", "Hilft beim Entfernen von Schmutz.", "Enthält oft Tenside."),
  card("Tensid", "Stoff, der Fett und Wasser verbindet.", "Tenside helfen beim Reinigen."),
  card("Wasserhärte", "Wie viel Calcium und Magnesium im Wasser sind.", "Hartes Wasser bildet Kalk."),
  card("Mikroplastik", "Sehr kleine Kunststoffteilchen.", "Sie belasten Umwelt und Gewässer."),
  card("Grüne Chemie", "Chemie mit wenig Abfall und Schaden.", "Ressourcen schonen ist das Ziel."),
];

const REACTION_TYPES = [
  card("Verbrennung", "Reaktion mit Sauerstoff und Energieabgabe.", "Eine Kerze brennt."),
  card("Oxidation", "Stoff reagiert mit Sauerstoff.", "Eisen oxidiert an der Luft."),
  card("Reduktion", "Ein Stoff gibt Sauerstoff ab oder nimmt Elektronen auf.", "Bei der Metallgewinnung kommt das vor."),
  card("Zerlegung", "Ein Stoff wird in einfachere Stoffe gespalten.", "Wasser kann zerlegt werden."),
  card("Säure-Base-Reaktion", "Säure und Base reagieren zusammen.", "Es kann dabei Salz und Wasser entstehen."),
  card("Neutralisation", "Säure wird durch Base ausgeglichen.", "Der pH-Wert nähert sich 7."),
];

export const K8_CHEMISTRY_GENERATORS: KemiaGeneratorMap = {
  organic_intro: buildTheme("organic_intro", {
    carbon_special: { focus: "Organische Chemie", cards: ORGANIC_INTRO },
    hydrocarbons_intro: { focus: "Organische Chemie", cards: ORGANIC_INTRO },
    alkanes_intro: { focus: "Organische Chemie", cards: ORGANIC_INTRO },
    alkenes_intro: { focus: "Organische Chemie", cards: ORGANIC_INTRO },
    fuels_organic: { focus: "Organische Chemie", cards: ORGANIC_INTRO },
  }),
  organic_groups: buildTheme("organic_groups", {
    alcohols_intro: { focus: "Stoffklassen", cards: ORGANIC_GROUPS },
    carboxylic_acids: { focus: "Stoffklassen", cards: ORGANIC_GROUPS },
    esters_intro: { focus: "Stoffklassen", cards: ORGANIC_GROUPS },
    polymers_intro: { focus: "Stoffklassen", cards: ORGANIC_GROUPS },
    plastics_daily: { focus: "Stoffklassen", cards: ORGANIC_GROUPS },
  }),
  rates_equilibrium: buildTheme("rates_equilibrium", {
    reaction_rate_intro: { focus: "Reaktionsgeschwindigkeit", cards: RATES_EQUILIBRIUM },
    surface_area_effect: { focus: "Reaktionsgeschwindigkeit", cards: RATES_EQUILIBRIUM },
    temperature_rate: { focus: "Reaktionsgeschwindigkeit", cards: RATES_EQUILIBRIUM },
    concentration_rate: { focus: "Reaktionsgeschwindigkeit", cards: RATES_EQUILIBRIUM },
    catalysts_intro: { focus: "Reaktionsgeschwindigkeit", cards: RATES_EQUILIBRIUM },
  }),
  electrochemistry: buildTheme("electrochemistry", {
    ions_in_solution: { focus: "Elektrochemie", cards: ELECTROCHEMISTRY },
    electrolysis_intro: { focus: "Elektrochemie", cards: ELECTROCHEMISTRY },
    electrodes_intro: { focus: "Elektrochemie", cards: ELECTROCHEMISTRY },
    batteries_intro: { focus: "Elektrochemie", cards: ELECTROCHEMISTRY },
    redox_intro: { focus: "Elektrochemie", cards: ELECTROCHEMISTRY },
  }),
  quantitative_chem: buildTheme("quantitative_chem", {
    formula_mass: { focus: "Berechnungen", cards: QUANTITATIVE_CHEM },
    mole_intro: { focus: "Berechnungen", cards: QUANTITATIVE_CHEM },
    simple_stoichiometry: { focus: "Berechnungen", cards: QUANTITATIVE_CHEM },
    yield_intro: { focus: "Berechnungen", cards: QUANTITATIVE_CHEM },
    concentration_calc: { focus: "Berechnungen", cards: QUANTITATIVE_CHEM },
  }),
  chemistry_society: buildTheme("chemistry_society", {
    fertilizers_intro: { focus: "Chemie in Umwelt und Technik", cards: CHEMISTRY_SOCIETY },
    soaps_detergents: { focus: "Chemie in Umwelt und Technik", cards: CHEMISTRY_SOCIETY },
    food_chemistry: { focus: "Chemie in Umwelt und Technik", cards: CHEMISTRY_SOCIETY },
    green_chemistry_intro: { focus: "Chemie in Umwelt und Technik", cards: CHEMISTRY_SOCIETY },
    wastewater_treatment: { focus: "Chemie in Umwelt und Technik", cards: CHEMISTRY_SOCIETY },
  }),
};
