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
  (focus: string, item: ChemItem) => `${focus}: Welche Benennung gehört zu diesem Alltagsthema? ${item.use}`,
  (focus: string, item: ChemItem) => `${focus}: Was ist hier gemeint? ${item.clue}`,
  (focus: string, item: ChemItem) => `${focus}: Welcher Begriff beschreibt das am besten? ${item.definition}`,
  (focus: string, item: ChemItem) => `${focus}: Wie heißt der richtige Stoffbegriff? ${item.example}`,
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
        "Man nutzt es für Möbel, Papier und Bauwerke.",
        "Es ist meist leicht, warm und natürlich."
      ),
      chem(
        "Kunststoff",
        "Ein künstlich hergestellter Stoff.",
        "Eine Trinkflasche ist oft aus Kunststoff.",
        "Man nutzt es für Verpackungen und Behälter.",
        "Es ist oft leicht und gut formbar."
      ),
    ],
  },
  solids_liquids_gases: {
    focus: "Fest, flüssig, gasförmig",
    items: [
      chem(
        "fest",
        "Ein Stoff hat eine feste Form und ein festes Volumen.",
        "Ein Stein ist fest.",
        "So sind viele harte Gegenstände im Alltag.",
        "Er behält seine Form."
      ),
      chem(
        "gasförmig",
        "Ein Stoff füllt den Raum und hat keine feste Form.",
        "Wasserdampf ist gasförmig.",
        "So ist Luft in einem geschlossenen Raum.",
        "Er verteilt sich im ganzen Raum."
      ),
    ],
  },
  state_changes_basic: {
    focus: "Zustandsänderungen",
    items: [
      chem(
        "Schmelzen",
        "Ein fester Stoff wird flüssig.",
        "Eis wird zu Wasser.",
        "Das passiert beim Erwärmen.",
        "Es ist der Schritt von fest zu flüssig."
      ),
      chem(
        "Verdampfen",
        "Ein flüssiger Stoff wird gasförmig.",
        "Wasser wird zu Wasserdampf.",
        "Das passiert beim starken Erwärmen.",
        "Es ist der Schritt von flüssig zu gasförmig."
      ),
    ],
  },
  properties_hard_soft: {
    focus: "Eigenschaften von Stoffen",
    items: [
      chem(
        "hart",
        "Ein Stoff lässt sich schwer eindrücken.",
        "Ein Stein ist hart.",
        "So sind viele Metalle und Steine.",
        "Das Gegenteil von weich."
      ),
      chem(
        "weich",
        "Ein Stoff lässt sich leicht eindrücken.",
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
        "Ein Stoff lässt Wasser kaum durch.",
        "Eine Regenjacke soll wasserfest sein.",
        "Man braucht es für Schutzkleidung und Taschen.",
        "Wasser dringt nur schwer ein."
      ),
      chem(
        "saugfähig",
        "Ein Stoff nimmt Wasser gut auf.",
        "Ein Schwamm ist saugfähig.",
        "Man braucht es für Tücher und Papier.",
        "Es zieht Flüssigkeit in sich hinein."
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
        "Mit dem Teilchenmodell erklärt man Stoffe.",
        "Sie sind so klein, dass man sie nicht sehen kann."
      ),
      chem(
        "Stoff",
        "Materie, aus der Gegenstände bestehen.",
        "Holz, Wasser und Luft sind Stoffe.",
        "In der Chemie untersucht man Stoffe.",
        "Alles, was aus Materie besteht, gehört dazu."
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
        "Es gibt kaum Lücken zwischen den Teilchen."
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
        "Im Teilchenmodell gehört Bewegung immer dazu.",
        "Ohne sie wäre ein Stoff unvorstellbar."
      ),
      chem(
        "Schwingung",
        "Teilchen wackeln an ihrem Platz hin und her.",
        "In festen Stoffen schwingen Teilchen oft nur wenig.",
        "Das ist typisch für feste Stoffe.",
        "Sie bewegen sich ohne weit zu wandern."
      ),
    ],
  },
  heating_particles: {
    focus: "Erwärmen und Teilchen",
    items: [
      chem(
        "schneller",
        "Beim Erwärmen bewegen sich Teilchen heftiger.",
        "In warmem Wasser bewegen sich Teilchen schneller.",
        "So erklärt man wärmeres Stoffverhalten.",
        "Das Gegenteil von langsamer."
      ),
      chem(
        "weiter auseinander",
        "Beim Erwärmen vergrößert sich oft der Abstand der Teilchen.",
        "Ein Stoff dehnt sich beim Erwärmen aus.",
        "Das sieht man bei Flüssigkeiten und Gasen.",
        "Die Teilchen brauchen mehr Platz."
      ),
    ],
  },
  cooling_particles: {
    focus: "Abkühlen und Teilchen",
    items: [
      chem(
        "langsamer",
        "Beim Abkühlen bewegen sich Teilchen weniger stark.",
        "In kaltem Wasser bewegen sich Teilchen langsamer.",
        "So erklärt man die Wirkung von Kühlung.",
        "Das Gegenteil von schneller."
      ),
      chem(
        "näher zusammen",
        "Beim Abkühlen rücken Teilchen oft enger zusammen.",
        "Dampf wird beim Kühlen wieder zu Wasser.",
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
    focus: "Lösungen",
    items: [
      chem(
        "Lösung",
        "Ein Stoff ist gleichmäßig in einem anderen verteilt.",
        "Salzlösung ist ein Beispiel.",
        "Man findet sie im Alltag oft bei Getränken.",
        "Man sieht die einzelnen Bestandteile nicht mehr getrennt."
      ),
      chem(
        "gelöst",
        "Ein Stoff hat sich in einer Flüssigkeit verteilt.",
        "Salz ist in Wasser gelöst.",
        "So entsteht zum Beispiel eine Salzlösung.",
        "Der Stoff ist nicht mehr als Körnchen sichtbar."
      ),
    ],
  },
  suspensions_intro: {
    focus: "Suspensionen",
    items: [
      chem(
        "trüb",
        "Man kann durch die Flüssigkeit nicht ganz klar sehen.",
        "Sandwasser ist trüb.",
        "Solche Mischungen muss man oft stehen lassen oder filtern.",
        "Es sieht nicht klar und durchsichtig aus."
      ),
      chem(
        "Teilchen",
        "In einer Suspension sind feste Stoffe als kleine Teilchen verteilt.",
        "In Kakao in Milch gibt es Teilchen.",
        "Sie können sich später absetzen.",
        "Sie machen eine Flüssigkeit nicht ganz klar."
      ),
    ],
  },
  filtration_basic: {
    focus: "Filtrieren",
    items: [
      chem(
        "Filter",
        "Ein Hilfsmittel, das feste Stoffe zurückhält.",
        "Kaffeefilter ist ein Beispiel.",
        "Man benutzt es bei der Trennung von Gemischen.",
        "Die Flüssigkeit kann hindurch, Festes bleibt hängen."
      ),
      chem(
        "Rückstand",
        "Der feste Stoff bleibt nach dem Filtern im Filter.",
        "Sand im Filter ist der Rückstand.",
        "Er wird nach dem Filtern sichtbar.",
        "Er bleibt im Filterpapier zurück."
      ),
    ],
  },
  evaporation_basic: {
    focus: "Eindampfen",
    items: [
      chem(
        "Eindampfen",
        "Man entfernt die Flüssigkeit durch Erwärmen.",
        "Aus Salzwasser kann man Salz eindampfen.",
        "So trennt man gelösten Stoff von Wasser.",
        "Die Flüssigkeit verschwindet, der feste Stoff bleibt."
      ),
      chem(
        "Salz",
        "Ein fester Stoff, der nach dem Eindampfen zurückbleiben kann.",
        "Aus Salzwasser bleibt Salz zurück.",
        "Es ist ein typischer Stoff aus dem Meerwasser.",
        "Es bleibt als festes Körnchen oder Kruste zurück."
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
        "Eine wichtige Flüssigkeit für Leben und Alltag.",
        "Ohne Wasser können Menschen und Tiere nicht lange leben.",
        "Man braucht es zum Trinken und Waschen.",
        "Es ist klar, meist farblos und sehr wichtig."
      ),
      chem(
        "Lösungsmittel",
        "Ein Stoff, in dem sich andere Stoffe lösen können.",
        "Wasser ist oft ein gutes Lösungsmittel.",
        "Man benutzt es in vielen Lösungen.",
        "Es hilft, Salz oder Zucker zu verteilen."
      ),
    ],
  },
  water_cycle_chem: {
    focus: "Wasserkreislauf",
    items: [
      chem(
        "Verdunstung",
        "Wasser wird durch Wärme zu Wasserdampf.",
        "Pfützen verschwinden an warmen Tagen durch Verdunstung.",
        "Das ist ein wichtiger Schritt im Wasserkreislauf.",
        "Die Flüssigkeit geht in die Luft über."
      ),
      chem(
        "Kondensation",
        "Wasserdampf wird wieder zu kleinen Wassertröpfchen.",
        "Wolken entstehen durch Kondensation.",
        "Das passiert, wenn Luft abkühlt.",
        "Aus Gas wird wieder Flüssigkeit."
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
        "Ohne Luft können Menschen nicht leben.",
        "Sie ist unsichtbar und umgibt die Erde."
      ),
      chem(
        "Gasgemisch",
        "Eine Mischung aus mehreren Gasen.",
        "Luft ist ein Gemisch.",
        "Dazu gehören Stickstoff, Sauerstoff und andere Gase.",
        "Es besteht aus mehreren gasförmigen Stoffen."
      ),
    ],
  },
  oxygen_for_burning: {
    focus: "Brennen",
    items: [
      chem(
        "Sauerstoff",
        "Ein Gas, das das Brennen fördert.",
        "Eine Kerze braucht Sauerstoff.",
        "Tiere und Menschen atmen es ein.",
        "Ohne dieses Gas brennt Feuer nur schlecht."
      ),
      chem(
        "brandfördernd",
        "Etwas kann das Brennen unterstützen.",
        "Sauerstoff ist brandfördernd.",
        "Man sagt das bei Stoffen, die Feuer stärken.",
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
        "Pflanzen brauchen es für die Fotosynthese.",
        "Es ist ein wichtiger Luftbestandteil in kleiner Menge."
      ),
      chem(
        "Ausatmungsluft",
        "Luft, die beim Ausatmen den Körper verlässt.",
        "In der Ausatmungsluft steckt mehr Kohlenstoffdioxid.",
        "Man kann sie mit Tests vergleichen.",
        "Sie enthält weniger Sauerstoff als Einatemluft."
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
        "Die Form oder der Zustand ändert sich.",
        "Es entsteht kein neuer Stoff."
      ),
      chem(
        "chemisch",
        "Es entsteht ein neuer Stoff.",
        "Eisen kann chemisch zu Rost werden.",
        "Dabei verändern sich Stoffeigenschaften deutlich.",
        "Es entstehen neue Produkte."
      ),
    ],
  },
  burning_signs: {
    focus: "Verbrennung",
    items: [
      chem(
        "Wärme",
        "Beim Brennen wird Energie als Wärme frei.",
        "Eine Kerze gibt Wärme ab.",
        "Das ist ein klares Zeichen für eine Reaktion.",
        "Man fühlt sie oft neben dem Feuer."
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
        "Man schützt es oft mit Farbe.",
        "Es gehört zu den wichtigsten Metallen im Alltag."
      ),
    ],
  },
  dissolving_vs_reacting: {
    focus: "Lösen oder reagieren",
    items: [
      chem(
        "lösen",
        "Ein Stoff verteilt sich in einer Flüssigkeit.",
        "Zucker kann sich in Tee lösen.",
        "Dabei entsteht kein neuer Stoff.",
        "Der Stoff ist danach unsichtbar verteilt."
      ),
      chem(
        "reagieren",
        "Stoffe verändern sich und neue Stoffe entstehen.",
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
        "Ein Stoff ändert sichtbar seine Farbe.",
        "Ein Indikator zeigt einen Farbwechsel.",
        "Das kann ein Zeichen für eine Reaktion sein.",
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
        "Eine Brille schützt die Augen im Labor.",
        "Im Schullabor trägt man eine Schutzbrille.",
        "Sie gehört zur sicheren Arbeit mit Chemikalien.",
        "Sie schützt vor Spritzern."
      ),
      chem(
        "vorsichtig",
        "So arbeitet man langsam und sicher.",
        "Im Labor muss man vorsichtig sein.",
        "Man vermeidet damit Unfälle.",
        "Das Gegenteil von unüberlegt."
      ),
    ],
  },
  hazard_symbols_basic: {
    focus: "Gefahrensymbole",
    items: [
      chem(
        "giftig",
        "Ein Stoff kann dem Körper schaden.",
        "Manche Chemikalien sind giftig.",
        "Man darf sie nie einfach probieren.",
        "Man muss sie sehr ernst nehmen."
      ),
      chem(
        "ätzend",
        "Ein Stoff kann Haut oder Material angreifen.",
        "Eine saure Lösung kann ätzend sein.",
        "Man braucht Schutz für Haut und Augen.",
        "Er kann Oberflächen angreifen."
      ),
    ],
  },
  measuring_volume: {
    focus: "Volumen messen",
    items: [
      chem(
        "Messzylinder",
        "Ein Gefäß zum genauen Ablesen von Flüssigkeiten.",
        "Wasser misst man im Messzylinder.",
        "Er hilft beim genauen Experimentieren.",
        "Auf ihm sind Skalen aufgedruckt."
      ),
      chem(
        "Milliliter",
        "Eine kleine Einheit für Volumen.",
        "Ein Glas kann 200 Milliliter fassen.",
        "Diese Einheit benutzt man oft für Flüssigkeiten.",
        "Abkürzung: ml."
      ),
    ],
  },
  measuring_mass: {
    focus: "Masse messen",
    items: [
      chem(
        "Waage",
        "Ein Gerät zum Messen der Masse.",
        "Auf der Waage wird Zucker abgewogen.",
        "Sie steht oft im Chemieraum.",
        "Sie zeigt an, wie schwer etwas ist."
      ),
      chem(
        "Gramm",
        "Eine Einheit für die Masse.",
        "Ein Apfel wiegt etwa 150 Gramm.",
        "Diese Einheit steht oft auf einer Waage.",
        "Abkürzung: g."
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
        "Man schaut genau hin und beschreibt Veränderungen.",
        "Beim Experiment soll man genau beobachten.",
        "So erkennt man Farbwechsel oder Blasen.",
        "Es gehört zu jedem guten Versuch."
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
