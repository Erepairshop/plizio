import {
  createMCQ,
  createTyping,
  mulberry32,
  shuffle,
  type KemiaGeneratorMap,
  type KemiaQuestion,
} from "./kemiaCurriculumShared";

interface ChemItem {
  term: string;
  definition: string;
  example: string;
  use: string;
  clue: string;
}

interface SubtopicSpec {
  focus: string;
  items: ChemItem[];
}

const COMMON_DISTRACTORS = [
  "Stoff",
  "Gemisch",
  "Teilchen",
  "Lösung",
  "Reaktion",
  "Wasser",
  "Luft",
  "Wärme",
  "Gas",
  "Salz",
];

function chem(term: string, definition: string, example: string, use: string, clue: string): ChemItem {
  return { term, definition, example, use, clue };
}

function uniqueWords(words: string[]) {
  return [...new Set(words)];
}

function makeWrongTerms(correct: string, pool: string[], rng: () => number): string[] {
  const uniquePool = uniqueWords(pool).filter((word) => word !== correct);
  const shuffled = shuffle(uniquePool, rng);
  if (shuffled.length >= 3) return shuffled.slice(0, 3);

  const fallback = shuffle(
    COMMON_DISTRACTORS.filter((word) => word !== correct && !uniquePool.includes(word)),
    rng
  );

  return [...shuffled, ...fallback].slice(0, 3);
}

const MCQ_TEMPLATES = [
  (focus: string, item: ChemItem) => `${focus}: Welche Bezeichnung passt zu dieser Beschreibung? ${item.definition}`,
  (focus: string, item: ChemItem) => `${focus}: Welcher Begriff passt zu diesem Beispiel? ${item.example}`,
  (focus: string, item: ChemItem) => `${focus}: Womit hat dieser Stoff zu tun? ${item.use}`,
  (focus: string, item: ChemItem) => `${focus}: Welcher Fachbegriff passt zu diesem Hinweis? ${item.clue}`,
  (focus: string, item: ChemItem) => `${focus}: Wie nennt man das hier? ${item.definition}`,
  (focus: string, item: ChemItem) => `${focus}: Welches Wort passt am besten? ${item.example}`,
  (focus: string, item: ChemItem) => `${focus}: Welche Benennung gehoert zu diesem Alltagsthema? ${item.use}`,
  (focus: string, item: ChemItem) => `${focus}: Was ist hier gemeint? ${item.clue}`,
  (focus: string, item: ChemItem) => `${focus}: Welcher Begriff beschreibt das am besten? ${item.definition}`,
  (focus: string, item: ChemItem) => `${focus}: Wie heisst der richtige Stoffbegriff? ${item.example}`,
];

const TYPING_TEMPLATES = [
  (focus: string, item: ChemItem) => `${focus}: Schreibe den Fachbegriff zu dieser Beschreibung: ${item.definition}`,
  (focus: string, item: ChemItem) => `${focus}: Schreibe den passenden Begriff zu diesem Beispiel: ${item.example}`,
  (focus: string, item: ChemItem) => `${focus}: Welcher Begriff passt zu diesem Hinweis? ${item.clue}`,
];

function buildSubtopicGenerators(topic: string, subtopic: string, focus: string, items: ChemItem[]) {
  const pool = items.map((item) => item.term);

  const mcq = (seed: number) => {
    const rng = mulberry32(seed);
    const ordered = shuffle(items, rng);
    const questions: KemiaQuestion[] = [];

    for (const item of ordered) {
      const wrongTerms = makeWrongTerms(item.term, pool, rng);
      for (const template of MCQ_TEMPLATES) {
        questions.push(createMCQ(topic, subtopic, template(focus, item), item.term, wrongTerms, rng));
      }
    }

    return questions;
  };

  const typing = (seed: number) => {
    const rng = mulberry32(seed + 17);
    const ordered = shuffle(items, rng);
    const questions: KemiaQuestion[] = [];

    for (const item of ordered) {
      for (const template of TYPING_TEMPLATES) {
        questions.push(createTyping(topic, subtopic, template(focus, item), item.term));
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
  } as Record<string, (seed?: number) => KemiaQuestion[]>;
}

function buildThemeGenerators(topic: string, specs: Record<string, SubtopicSpec>) {
  const out: Record<string, (seed?: number) => KemiaQuestion[]> = {};
  for (const [subtopic, cfg] of Object.entries(specs)) {
    Object.assign(out, buildSubtopicGenerators(topic, subtopic, cfg.focus, cfg.items));
  }
  return out;
}

const MATTER_BASICS = {
  materials_daily: {
    focus: "Stoffe im Alltag",
    items: [
      chem(
        "Holz",
        "Ein Naturstoff aus Pflanzen.",
        "Ein Tisch besteht aus Holz.",
        "Man nutzt es fuer Moebel, Papier und Bauwerke.",
        "Es ist meist leicht, warm und natuerlich."
      ),
      chem(
        "Kunststoff",
        "Ein kuenstlich hergestellter Stoff.",
        "Eine Trinkflasche ist oft aus Kunststoff.",
        "Man nutzt es fuer Verpackungen und Behaelter.",
        "Es ist oft leicht und gut formbar."
      ),
    ],
  },
  solids_liquids_gases: {
    focus: "Fest, fluessig, gasfoermig",
    items: [
      chem(
        "fest",
        "Ein Stoff hat eine feste Form und ein festes Volumen.",
        "Ein Stein ist fest.",
        "So sind viele harte Gegenstaende im Alltag.",
        "Er behaelt seine Form."
      ),
      chem(
        "gasfoermig",
        "Ein Stoff fuellt den Raum und hat keine feste Form.",
        "Wasserdampf ist gasfoermig.",
        "So ist Luft in einem geschlossenen Raum.",
        "Er verteilt sich im ganzen Raum."
      ),
    ],
  },
  state_changes_basic: {
    focus: "Zustandsaenderungen",
    items: [
      chem(
        "Schmelzen",
        "Ein fester Stoff wird fluessig.",
        "Eis wird zu Wasser.",
        "Das passiert beim Erwaermen.",
        "Es ist der Schritt von fest zu fluessig."
      ),
      chem(
        "Verdampfen",
        "Ein fluessiger Stoff wird gasfoermig.",
        "Wasser wird zu Wasserdampf.",
        "Das passiert beim starken Erwaermen.",
        "Es ist der Schritt von fluessig zu gasfoermig."
      ),
    ],
  },
  properties_hard_soft: {
    focus: "Eigenschaften von Stoffen",
    items: [
      chem(
        "hart",
        "Ein Stoff laesst sich schwer eindruecken.",
        "Ein Stein ist hart.",
        "So sind viele Metalle und Steine.",
        "Das Gegenteil von weich."
      ),
      chem(
        "weich",
        "Ein Stoff laesst sich leicht eindruecken.",
        "Teig ist weich.",
        "So sind Kissen oder Moos.",
        "Das Gegenteil von hart."
      ),
    ],
  },
  properties_waterproof: {
    focus: "Wasserdicht oder saugend",
    items: [
      chem(
        "wasserfest",
        "Ein Stoff laesst Wasser kaum durch.",
        "Eine Regenjacke soll wasserfest sein.",
        "Man braucht es fuer Schutzkleidung und Taschen.",
        "Wasser dringt nur schwer ein."
      ),
      chem(
        "saugfaehig",
        "Ein Stoff nimmt Wasser gut auf.",
        "Ein Schwamm ist saugfaehig.",
        "Man braucht es fuer Tuecher und Papier.",
        "Es zieht Fluessigkeit in sich hinein."
      ),
    ],
  },
};

const PARTICLE_INTRO = {
  particle_idea: {
    focus: "Teilchenmodell",
    items: [
      chem(
        "Teilchen",
        "Sehr kleine Bausteine eines Stoffes.",
        "Wasser besteht aus kleinen Teilchen.",
        "Mit dem Teilchenmodell erklaert man Stoffe.",
        "Sie sind so klein, dass man sie nicht sehen kann."
      ),
      chem(
        "Stoff",
        "Materie, aus der Gegenstaende bestehen.",
        "Holz, Wasser und Luft sind Stoffe.",
        "In der Chemie untersucht man Stoffe.",
        "Alles, was aus Materie besteht, gehoert dazu."
      ),
    ],
  },
  particle_spacing: {
    focus: "Teilchenabstand",
    items: [
      chem(
        "dicht gepackt",
        "Teilchen liegen nahe beieinander.",
        "In einem festen Stoff sind die Teilchen dicht gepackt.",
        "So ist die Ordnung in vielen festen Stoffen.",
        "Es gibt kaum Luecken zwischen den Teilchen."
      ),
      chem(
        "weit auseinander",
        "Teilchen haben viel Platz zwischen sich.",
        "In einem Gas sind die Teilchen weit auseinander.",
        "So ist der Aufbau in Luft oder Wasserdampf.",
        "Zwischen den Teilchen ist viel leerer Raum."
      ),
    ],
  },
  particle_motion: {
    focus: "Teilchenbewegung",
    items: [
      chem(
        "Bewegung",
        "Teilchen sind nie ganz still.",
        "Auch in kaltem Wasser bewegen sich Teilchen.",
        "Im Teilchenmodell gehoert Bewegung immer dazu.",
        "Ohne sie waere ein Stoff unvorstellbar."
      ),
      chem(
        "Schwingung",
        "Teilchen wackeln an ihrem Platz hin und her.",
        "In festen Stoffen schwingen Teilchen oft nur wenig.",
        "Das ist typisch fuer feste Stoffe.",
        "Sie bewegen sich ohne weit zu wandern."
      ),
    ],
  },
  heating_particles: {
    focus: "Erwaermen und Teilchen",
    items: [
      chem(
        "schneller",
        "Beim Erwaermen bewegen sich Teilchen heftiger.",
        "In warmem Wasser bewegen sich Teilchen schneller.",
        "So erklaert man waermeres Stoffverhalten.",
        "Das Gegenteil von langsamer."
      ),
      chem(
        "weiter auseinander",
        "Beim Erwaermen vergroessert sich oft der Abstand der Teilchen.",
        "Ein Stoff dehnt sich beim Erwaermen aus.",
        "Das sieht man bei Fluessigkeiten und Gasen.",
        "Die Teilchen brauchen mehr Platz."
      ),
    ],
  },
  cooling_particles: {
    focus: "Abkuehlen und Teilchen",
    items: [
      chem(
        "langsamer",
        "Beim Abkuehlen bewegen sich Teilchen weniger stark.",
        "In kaltem Wasser bewegen sich Teilchen langsamer.",
        "So erklaert man die Wirkung von Kuehlung.",
        "Das Gegenteil von schneller."
      ),
      chem(
        "naeher zusammen",
        "Beim Abkuehlen ruecken Teilchen oft enger zusammen.",
        "Dampf wird beim Kuehlen wieder zu Wasser.",
        "Der Stoff nimmt dabei weniger Raum ein.",
        "Der Abstand wird kleiner."
      ),
    ],
  },
};

const MIXTURES = {
  pure_vs_mixture: {
    focus: "Reinstoffe und Gemische",
    items: [
      chem(
        "Reinstoff",
        "Ein Stoff mit nur einer Teilchenart.",
        "Reines Wasser ist ein Reinstoff.",
        "Man betrachtet ihn in der Chemie als sehr einfach.",
        "Er ist nicht aus mehreren verschiedenen Stoffen gemischt."
      ),
      chem(
        "Gemisch",
        "Mehrere Stoffe sind zusammen vorhanden.",
        "Luft ist ein Gemisch.",
        "Man trennt es mit passenden Verfahren.",
        "Es besteht aus mehreren Bestandteilen."
      ),
    ],
  },
  solutions_intro: {
    focus: "Loesungen",
    items: [
      chem(
        "Loesung",
        "Ein Stoff ist gleichmaessig in einem anderen verteilt.",
        "Salzloesung ist ein Beispiel.",
        "Man findet sie im Alltag oft bei Getraenken.",
        "Man sieht die einzelnen Bestandteile nicht mehr getrennt."
      ),
      chem(
        "geloest",
        "Ein Stoff hat sich in einer Fluessigkeit verteilt.",
        "Salz ist in Wasser geloest.",
        "So entsteht zum Beispiel eine Salzloesung.",
        "Der Stoff ist nicht mehr als Koernchen sichtbar."
      ),
    ],
  },
  suspensions_intro: {
    focus: "Suspensionen",
    items: [
      chem(
        "trueb",
        "Man kann durch die Fluessigkeit nicht ganz klar sehen.",
        "Sandwasser ist trueb.",
        "Solche Mischungen muss man oft stehen lassen oder filtern.",
        "Es sieht nicht klar und durchsichtig aus."
      ),
      chem(
        "Teilchen",
        "In einer Suspension sind feste Stoffe als kleine Teilchen verteilt.",
        "In Kakao in Milch gibt es Teilchen.",
        "Sie koennen sich spaeter absetzen.",
        "Sie machen eine Fluessigkeit nicht ganz klar."
      ),
    ],
  },
  filtration_basic: {
    focus: "Filtrieren",
    items: [
      chem(
        "Filter",
        "Ein Hilfsmittel, das feste Stoffe zurueckhaelt.",
        "Kaffeefilter ist ein Beispiel.",
        "Man benutzt es bei der Trennung von Gemischen.",
        "Die Fluessigkeit kann hindurch, Festes bleibt haengen."
      ),
      chem(
        "Rueckstand",
        "Der feste Stoff bleibt nach dem Filtern im Filter.",
        "Sand im Filter ist der Rueckstand.",
        "Er wird nach dem Filtern sichtbar.",
        "Er bleibt im Filterpapier zurueck."
      ),
    ],
  },
  evaporation_basic: {
    focus: "Eindampfen",
    items: [
      chem(
        "Eindampfen",
        "Man entfernt die Fluessigkeit durch Erwaermen.",
        "Aus Salzwasser kann man Salz eindampfen.",
        "So trennt man gelosten Stoff von Wasser.",
        "Die Fluessigkeit verschwindet, der feste Stoff bleibt."
      ),
      chem(
        "Salz",
        "Ein fester Stoff, der nach dem Eindampfen zurueckbleiben kann.",
        "Aus Salzwasser bleibt Salz zurueck.",
        "Es ist ein typischer Stoff aus dem Meerwasser.",
        "Es bleibt als festes Koernchen oder Kruste zurueck."
      ),
    ],
  },
};

const WATER_AIR = {
  water_properties: {
    focus: "Wasser",
    items: [
      chem(
        "Wasser",
        "Eine wichtige Fluessigkeit fuer Leben und Alltag.",
        "Ohne Wasser koennen Menschen und Tiere nicht lange leben.",
        "Man braucht es zum Trinken und Waschen.",
        "Es ist klar, meist farblos und sehr wichtig."
      ),
      chem(
        "Loesungsmittel",
        "Ein Stoff, in dem sich andere Stoffe loesen koennen.",
        "Wasser ist oft ein gutes Loesungsmittel.",
        "Man benutzt es in vielen Loesungen.",
        "Es hilft, Salz oder Zucker zu verteilen."
      ),
    ],
  },
  water_cycle_chem: {
    focus: "Wasserkreislauf",
    items: [
      chem(
        "Verdunstung",
        "Wasser wird durch Waerme zu Wasserdampf.",
        "Pfuetzen verschwinden an warmen Tagen durch Verdunstung.",
        "Das ist ein wichtiger Schritt im Wasserkreislauf.",
        "Die Fluessigkeit geht in die Luft ueber."
      ),
      chem(
        "Kondensation",
        "Wasserdampf wird wieder zu kleinen Wassertröpfchen.",
        "Wolken entstehen durch Kondensation.",
        "Das passiert, wenn Luft abkuehlt.",
        "Aus Gas wird wieder Fluessigkeit."
      ),
    ],
  },
  air_is_mixture: {
    focus: "Luft",
    items: [
      chem(
        "Luft",
        "Die Mischung aus verschiedenen Gasen um uns herum.",
        "Wir atmen Luft ein.",
        "Ohne Luft koennen Menschen nicht leben.",
        "Sie ist unsichtbar und umgibt die Erde."
      ),
      chem(
        "Gasgemisch",
        "Eine Mischung aus mehreren Gasen.",
        "Luft ist ein Gasgemisch.",
        "Dazu gehoeren Stickstoff, Sauerstoff und andere Gase.",
        "Es besteht aus mehreren gasfoermigen Stoffen."
      ),
    ],
  },
  oxygen_for_burning: {
    focus: "Brennen",
    items: [
      chem(
        "Sauerstoff",
        "Ein Gas, das das Brennen foerdert.",
        "Eine Kerze braucht Sauerstoff.",
        "Tiere und Menschen atmen es ein.",
        "Ohne dieses Gas brennt Feuer nur schlecht."
      ),
      chem(
        "brandfoerdernd",
        "Etwas kann das Brennen unterstuetzen.",
        "Sauerstoff ist brandfoerdernd.",
        "Man sagt das bei Stoffen, die Feuer staerken.",
        "Es hilft, dass Feuer besser brennt."
      ),
    ],
  },
  carbon_dioxide_intro: {
    focus: "Kohlenstoffdioxid",
    items: [
      chem(
        "Kohlenstoffdioxid",
        "Ein Gas, das bei Atmung und Verbrennung entsteht.",
        "Wir atmen Kohlenstoffdioxid aus.",
        "Pflanzen brauchen es fuer die Fotosynthese.",
        "Es ist ein wichtiger Luftbestandteil in kleiner Menge."
      ),
      chem(
        "Ausatmungsluft",
        "Luft, die beim Ausatmen den Koerper verlaesst.",
        "In der Ausatmungsluft steckt mehr Kohlenstoffdioxid.",
        "Man kann sie mit Tests vergleichen.",
        "Sie enthaelt weniger Sauerstoff als Einatemluft."
      ),
    ],
  },
};

const REACTIONS_INTRO = {
  physical_vs_chemical: {
    focus: "Physikalisch oder chemisch",
    items: [
      chem(
        "physikalisch",
        "Der Stoff bleibt im Grunde derselbe.",
        "Eis schmilzt physikalisch.",
        "Die Form oder der Zustand aendert sich.",
        "Es entsteht kein neuer Stoff."
      ),
      chem(
        "chemisch",
        "Es entsteht ein neuer Stoff.",
        "Eisen kann chemisch zu Rost werden.",
        "Dabei veraendern sich Stoffeigenschaften deutlich.",
        "Es entstehen neue Produkte."
      ),
    ],
  },
  burning_signs: {
    focus: "Verbrennung",
    items: [
      chem(
        "Wärme",
        "Beim Brennen wird Energie als Waerme frei.",
        "Eine Kerze gibt Waerme ab.",
        "Das ist ein klares Zeichen fuer eine Reaktion.",
        "Man fuehlt sie oft neben dem Feuer."
      ),
      chem(
        "Licht",
        "Beim Brennen kann Licht entstehen.",
        "Eine Flamme gibt Licht ab.",
        "Auch das zeigt eine Verbrennung an.",
        "Man sieht es als Leuchten oder Flackern."
      ),
    ],
  },
  rusting_intro: {
    focus: "Rosten",
    items: [
      chem(
        "Rost",
        "Ein braunes Reaktionsprodukt auf Eisen.",
        "Ein alter Nagel bekommt Rost.",
        "Er entsteht langsam mit Luft und Wasser.",
        "Das Material wird dabei unansehnlich und schwach."
      ),
      chem(
        "Eisen",
        "Ein Metall, das rosten kann.",
        "Ein Fahrradrahmen aus Eisen kann rosten.",
        "Man schuetzt es oft mit Farbe.",
        "Es gehoert zu den wichtigsten Metallen im Alltag."
      ),
    ],
  },
  dissolving_vs_reacting: {
    focus: "Loesen oder reagieren",
    items: [
      chem(
        "loesen",
        "Ein Stoff verteilt sich in einer Fluessigkeit.",
        "Zucker kann sich in Tee loesen.",
        "Dabei entsteht kein neuer Stoff.",
        "Der Stoff ist danach unsichtbar verteilt."
      ),
      chem(
        "reagieren",
        "Stoffe veraendern sich und neue Stoffe entstehen.",
        "Eisen und Sauerstoff reagieren zu Rost.",
        "Das ist mehr als nur Mischen.",
        "Am Ende hat man neue Stoffe."
      ),
    ],
  },
  reaction_clues: {
    focus: "Reaktionszeichen",
    items: [
      chem(
        "Gas",
        "Ein Hinweis auf eine Reaktion kann Gas sein.",
        "Wenn Blasen entstehen, kann Gas gebildet werden.",
        "Das sieht man oft in Experimenten.",
        "Es kann aus einer Reaktion entweichen."
      ),
      chem(
        "Farbwechsel",
        "Ein Stoff aendert sichtbar seine Farbe.",
        "Ein Indikator zeigt einen Farbwechsel.",
        "Das kann ein Zeichen fuer eine Reaktion sein.",
        "Etwas sieht nachher anders aus als vorher."
      ),
    ],
  },
};

const LAB_SAFETY = {
  lab_rules: {
    focus: "Laborregeln",
    items: [
      chem(
        "Schutzbrille",
        "Eine Brille schuetzt die Augen im Labor.",
        "Im Schullabor traegt man eine Schutzbrille.",
        "Sie gehoert zur sicheren Arbeit mit Chemikalien.",
        "Sie schuetzt vor Spritzern."
      ),
      chem(
        "vorsichtig",
        "So arbeitet man langsam und sicher.",
        "Im Labor muss man vorsichtig sein.",
        "Man vermeidet damit Unfaelle.",
        "Das Gegenteil von unueberlegt."
      ),
    ],
  },
  hazard_symbols_basic: {
    focus: "Gefahrensymbole",
    items: [
      chem(
        "giftig",
        "Ein Stoff kann dem Koerper schaden.",
        "Manche Chemikalien sind giftig.",
        "Man darf sie nie einfach probieren.",
        "Man muss sie sehr ernst nehmen."
      ),
      chem(
        "aetzend",
        "Ein Stoff kann Haut oder Material angreifen.",
        "Eine saure Loesung kann aetzend sein.",
        "Man braucht Schutz fuer Haut und Augen.",
        "Er kann Oberflaechen angreifen."
      ),
    ],
  },
  measuring_volume: {
    focus: "Volumen messen",
    items: [
      chem(
        "Messzylinder",
        "Ein Gefaess zum genauen Ablesen von Fluessigkeiten.",
        "Wasser misst man im Messzylinder.",
        "Er hilft beim genauen Experimentieren.",
        "Auf ihm sind Skalen aufgedruckt."
      ),
      chem(
        "Milliliter",
        "Eine kleine Einheit fuer Volumen.",
        "Ein Glas kann 200 Milliliter fassen.",
        "Diese Einheit benutzt man oft fuer Fluessigkeiten.",
        "Abkuerzung: ml."
      ),
    ],
  },
  measuring_mass: {
    focus: "Masse messen",
    items: [
      chem(
        "Waage",
        "Ein Geraet zum Messen der Masse.",
        "Auf der Waage wird Zucker abgewogen.",
        "Sie steht oft im Chemieraum.",
        "Sie zeigt an, wie schwer etwas ist."
      ),
      chem(
        "Gramm",
        "Eine Einheit fuer die Masse.",
        "Ein Apfel wiegt etwa 150 Gramm.",
        "Diese Einheit steht oft auf einer Waage.",
        "Abkuerzung: g."
      ),
    ],
  },
  simple_experiments: {
    focus: "Einfache Versuche",
    items: [
      chem(
        "Mischen",
        "Man verbindet zwei oder mehr Stoffe.",
        "Salz und Wasser mischen ist ein einfacher Versuch.",
        "Dabei beobachtet man, was passiert.",
        "Es ist oft der erste Schritt im Experiment."
      ),
      chem(
        "Beobachten",
        "Man schaut genau hin und beschreibt Veraenderungen.",
        "Beim Experiment soll man genau beobachten.",
        "So erkennt man Farbwechsel oder Blasen.",
        "Es gehoert zu jedem guten Versuch."
      ),
    ],
  },
};

export const K5_CHEMISTRY_GENERATORS: KemiaGeneratorMap = {
  matter_basics: buildThemeGenerators("matter_basics", MATTER_BASICS),
  particle_intro: buildThemeGenerators("particle_intro", PARTICLE_INTRO),
  mixtures: buildThemeGenerators("mixtures", MIXTURES),
  water_air: buildThemeGenerators("water_air", WATER_AIR),
  reactions_intro: buildThemeGenerators("reactions_intro", REACTIONS_INTRO),
  lab_safety: buildThemeGenerators("lab_safety", LAB_SAFETY),
};
