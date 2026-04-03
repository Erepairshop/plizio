import type { PoolTopicDef, SvgConfig } from "./types";
import type { TopicInteractive } from "@/app/astro-biologie/games/ExplorerEngine";

type Lang = "de" | "en" | "hu" | "ro";
type L10n = Record<Lang, string>;

interface ChemTopicSpec {
  difficulty: "easy" | "medium" | "hard";
  title: L10n;
  text: L10n;
  inst: L10n;
  h1: L10n;
  h2: L10n;
  svg: SvgConfig;
  quiz: string;
  extras?: Record<string, L10n>;
  interactive: (prefix: string) => TopicInteractive;
}

function L(de: string, en: string, hu: string, ro: string): L10n {
  return { de, en, hu, ro };
}

const TITLE = L("Schau genau hin.", "Look closely.", "Nézz alaposan.", "Privește cu atenție.");
const HINT_A = L(
  "Achte auf den wichtigsten Begriff.",
  "Focus on the key idea.",
  "Figyelj a legfontosabb fogalomra.",
  "Fii atent la ideea principală."
);
const HINT_B = L(
  "Die Bilder helfen dir beim Sortieren.",
  "The images help you sort.",
  "A képek segítenek a rendezésben.",
  "Imaginile te ajută la sortare."
);
const HINT_C = L(
  "Ordne nach dem, was wirklich zusammengehört.",
  "Group what truly belongs together.",
  "Azokat csoportosítsd, amelyek tényleg összetartoznak.",
  "Grupează ce aparține cu adevărat împreună."
);
const HINT_D = L(
  "Nutze das, was du gerade gelernt hast.",
  "Use what you just learned.",
  "Használd azt, amit most tanultál.",
  "Folosește ce tocmai ai învățat."
);

function extraLabels(prefix: string, extras: Record<string, L10n> | undefined): Record<string, Record<Lang, string>> {
  const out: Record<string, Record<Lang, string>> = {};
  if (!extras) return out;
  for (const [suffix, value] of Object.entries(extras)) {
    out[`${prefix}_${suffix}`] = value;
  }
  return out;
}

function makeLabels(explorerTitle: L10n, topics: ChemTopicSpec[]): Record<Lang, Record<string, string>> {
  const blocks: Record<Lang, Record<string, string>> = {
    de: { explorer_title: explorerTitle.de },
    en: { explorer_title: explorerTitle.en },
    hu: { explorer_title: explorerTitle.hu },
    ro: { explorer_title: explorerTitle.ro },
  };

  topics.forEach((topic, index) => {
    const p = `t${index + 1}`;
    (["de", "en", "hu", "ro"] as Lang[]).forEach((lang) => {
      blocks[lang][`${p}_title`] = topic.title[lang];
      blocks[lang][`${p}_text`] = topic.text[lang];
      blocks[lang][`${p}_inst`] = topic.inst[lang];
      blocks[lang][`${p}_h1`] = topic.h1[lang];
      blocks[lang][`${p}_h2`] = topic.h2[lang];
    });
    for (const [key, value] of Object.entries(extraLabels(p, topic.extras))) {
      blocks.de[key] = value.de;
      blocks.en[key] = value.en;
      blocks.hu[key] = value.hu;
      blocks.ro[key] = value.ro;
    }
  });

  return blocks;
}

function makePool(topics: ChemTopicSpec[]): PoolTopicDef[] {
  return topics.map((topic, index) => {
    const p = `t${index + 1}`;
    return {
      difficulty: topic.difficulty,
      infoTitle: `${p}_title`,
      infoText: `${p}_text`,
      svg: topic.svg,
      interactive: topic.interactive(p),
      quiz: { generate: topic.quiz },
      bulletKeys: [`${p}_h1`, `${p}_h2`],
      hintKey: `${p}_inst`,
    };
  });
}

function bucketInteractive(
  prefix: string,
  groupA: string,
  groupB: string,
  items: Array<[string, "a" | "b"]>
): TopicInteractive {
  return {
    type: "physics-bucket",
    buckets: [
      { id: "a", label: `${prefix}_a` },
      { id: "b", label: `${prefix}_b` },
    ],
    items: items.map(([key, bucketId]) => ({ text: `${prefix}_${key}`, bucketId })),
    instruction: `${prefix}_inst`,
    hint1: `${prefix}_h1`,
    hint2: `${prefix}_h2`,
  };
}

function magnetInteractive(prefix: string, pairs: Array<[string, string]>): TopicInteractive {
  return {
    type: "physics-magnet",
    pairs: pairs.map(([left, right]) => ({ left: `${prefix}_${left}`, right: `${prefix}_${right}` })),
    instruction: `${prefix}_inst`,
    hint1: `${prefix}_h1`,
    hint2: `${prefix}_h2`,
  };
}

function stackerInteractive(prefix: string, words: string[]): TopicInteractive {
  return {
    type: "physics-stacker",
    words: words.map((w) => `${prefix}_${w}`),
    correctOrder: words.map((_, i) => i),
    instruction: `${prefix}_inst`,
    hint1: `${prefix}_h1`,
    hint2: `${prefix}_h2`,
  };
}

function slingshotInteractive(prefix: string, questionKey: string, targets: Array<[string, boolean]>): TopicInteractive {
  return {
    type: "physics-slingshot",
    question: `${prefix}_${questionKey}`,
    targets: targets.map(([text, isCorrect], i) => ({ id: String(i + 1), text: `${prefix}_${text}`, isCorrect })),
    instruction: `${prefix}_inst`,
    hint1: `${prefix}_h1`,
    hint2: `${prefix}_h2`,
  };
}

function gapFillInteractive(prefix: string, sentenceKey: string, choices: string[], correctIndex: number): TopicInteractive {
  return {
    type: "gap-fill",
    sentence: `${prefix}_${sentenceKey}`,
    choices: choices.map((c) => `${prefix}_${c}`),
    correctIndex,
    instruction: `${prefix}_inst`,
    hint1: `${prefix}_h1`,
    hint2: `${prefix}_h2`,
  };
}

function simpleIcon(icon: string, title: string, bg: string, color: string): SvgConfig {
  return { type: "simple-icon", icon, title, bg, color };
}

function bubbleSvg(items: Array<{ text: string; emoji?: string; color: string; bg: string }>): SvgConfig {
  return { type: "text-bubbles", items };
}

function groupSvg(left: string[], right: string[], bg = "#F8FAFC"): SvgConfig {
  return {
    type: "two-groups",
    bg,
    left: { items: left, bg: "#DCFCE7", border: "#10B981" },
    right: { items: right, bg: "#DBEAFE", border: "#3B82F6" },
  };
}

function iconGrid(items: Array<{ emoji: string; label?: string }>, bg?: string): SvgConfig {
  return { type: "icon-grid", items, bg };
}

function sentenceSvg(words: string[], highlightIndices: number[], color: string): SvgConfig {
  return { type: "sentence-display", words, highlightIndices, color };
}

const I1_TOPICS: ChemTopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Teilchen im Atom", "Particles in the Atom", "Részecskék az atomban", "Particule în atom"),
    text: L(
      "Atome bestehen aus Protonen, Neutronen und Elektronen.",
      "Atoms are made of protons, neutrons, and electrons.",
      "Az atomok protonokból, neutronokból és elektronokból állnak.",
      "Atomii sunt alcătuiți din protoni, neutroni și electroni."
    ),
    inst: L(
      "Sortiere die Teilchen nach ihrer Rolle.",
      "Sort the particles by their role.",
      "Rendezd a részecskéket a szerepük szerint.",
      "Sortează particulele după rolul lor."
    ),
    h1: TITLE,
    h2: HINT_A,
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "protons_neutrons_electrons_mcq",
    extras: {
      a: L("Kernteilchen", "Core particles", "Mag-részecskék", "Particule din nucleu"),
      b: L("Hülle", "Shell", "Héj", "Strat"),
      i1: L("Proton", "Proton", "Proton", "Proton"),
      i2: L("Neutron", "Neutron", "Neutron", "Neutron"),
      i3: L("Elektron", "Electron", "Elektron", "Electron"),
    },
    interactive: (p) => bucketInteractive(p, `${p}_a`, `${p}_b`, [["i1", "a"], ["i2", "a"], ["i3", "b"]]),
  },
  {
    difficulty: "easy",
    title: L("Ordnungszahl", "Atomic Number", "Rendszám", "Număr atomic"),
    text: L(
      "Die Ordnungszahl sagt, wie viele Protonen ein Atom hat.",
      "The atomic number tells how many protons an atom has.",
      "A rendszám megmutatja, hány proton van az atomban.",
      "Numărul atomic arată câți protoni are un atom."
    ),
    inst: L("Ordne Begriff und Bedeutung zu.", "Match term and meaning.", "Párosítsd a fogalmat és a jelentést.", "Potrivește termenul cu sensul."),
    h1: HINT_B,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "atomic_number_mcq",
    extras: {
      l1: L("Ordnungszahl", "atomic number", "rendszám", "număr atomic"),
      r1: L("Protonenzahl", "number of protons", "protonok száma", "numărul de protoni"),
      l2: L("Element", "element", "elem", "element"),
      r2: L("Stoffart", "type of substance", "anyagfajta", "tip de substanță"),
      l3: L("Tabelle", "table", "tábla", "tabel"),
      r3: L("Reihenfolge", "order", "sorrend", "ordine"),
    },
    interactive: (p) => magnetInteractive(p, [["l1", "r1"], ["l2", "r2"], ["l3", "r3"]]),
  },
  {
    difficulty: "medium",
    title: L("Massenzahl", "Mass Number", "Tömegszám", "Număr de masă"),
    text: L(
      "Die Massenzahl ist Protonen plus Neutronen.",
      "Mass number is protons plus neutrons.",
      "A tömegszám a protonok és neutronok összege.",
      "Numărul de masă este suma protonilor și neutronilor."
    ),
    inst: L("Bringe die Rechen-Schritte in die richtige Reihenfolge.", "Put the calculation steps in order.", "Tedd sorrendbe a számítás lépéseit.", "Pune pașii de calcul în ordine."),
    h1: HINT_A,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "mass_number_mcq",
    extras: {
      w1: L("Protonen zählen", "count protons", "protonok számolása", "numără protonii"),
      w2: L("Neutronen zählen", "count neutrons", "neutronok számolása", "numără neutronii"),
      w3: L("Addieren", "add", "összeadni", "adună"),
    },
    interactive: (p) => stackerInteractive(p, ["w1", "w2", "w3"]),
  },
  {
    difficulty: "medium",
    title: L("Elektronenschalen", "Electron Shells", "Elektronhéjak", "Straturi electronice"),
    text: L(
      "Elektronen sitzen in Schalen um den Atomkern.",
      "Electrons sit in shells around the nucleus.",
      "Az elektronok héjakban helyezkednek el az atommag körül.",
      "Electronii stau în straturi în jurul nucleului."
    ),
    inst: L("Sortiere die Teilchen in Kern und Schale.", "Sort particles into nucleus and shell.", "Rendezd a részecskéket magra és héjra.", "Sortează particulele în nucleu și strat."),
    h1: HINT_B,
    h2: HINT_C,
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "electron_shells_mcq",
    extras: {
      a: L("Kern", "nucleus", "atommag", "nucleu"),
      b: L("Schale", "shell", "héj", "strat"),
      i1: L("Proton", "proton", "proton", "proton"),
      i2: L("Elektron", "electron", "elektron", "electron"),
      i3: L("Neutron", "neutron", "neutron", "neutron"),
      i4: L("Hülle", "shell", "héj", "strat"),
    },
    interactive: (p) => bucketInteractive(p, `${p}_a`, `${p}_b`, [["i1", "a"], ["i2", "b"], ["i3", "a"], ["i4", "b"]]),
  },
  {
    difficulty: "hard",
    title: L("Isotope", "Isotopes", "Izotópok", "Izotopi"),
    text: L(
      "Isotope haben die gleiche Protonenzahl, aber eine andere Neutronenzahl.",
      "Isotopes have the same number of protons but a different number of neutrons.",
      "Az izotópoknak ugyanannyi protonjuk van, de más a neutronjaik száma.",
      "Izotopii au același număr de protoni, dar un număr diferit de neutroni."
    ),
    inst: L("Wähle die passende Beschreibung.", "Choose the matching description.", "Válaszd ki a megfelelő leírást.", "Alege descrierea potrivită."),
    h1: HINT_A,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "isotopes_intro_mcq",
    extras: {
      q: L("Gleiches Element?", "Same element?", "Ugyanaz az elem?", "Același element?"),
      c1: L("ja, gleiche Protonenzahl", "yes, same protons", "igen, ugyanannyi proton", "da, aceiași protoni"),
      c2: L("nein, andere Farbe", "no, different color", "nem, más szín", "nu, altă culoare"),
      c3: L("nein, andere Form", "no, different shape", "nem, más alak", "nu, altă formă"),
      c4: L("ja, gleiche Masse immer", "yes, always same mass", "igen, mindig ugyanaz a tömeg", "da, aceeași masă mereu"),
    },
    interactive: (p) => gapFillInteractive(p, "q", ["c1", "c2", "c3", "c4"], 0),
  },
];

const I2_TOPICS: ChemTopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Gruppen und Perioden", "Groups and Periods", "Csoportok és periódusok", "Grupe și perioade"),
    text: L(
      "Im Periodensystem stehen Elemente in Reihen und Spalten.",
      "In the periodic table, elements are arranged in rows and columns.",
      "A periódusos rendszerben az elemek sorokba és oszlopokba rendeződnek.",
      "În tabelul periodic, elementele sunt în rânduri și coloane."
    ),
    inst: L("Sortiere Reihen und Spalten.", "Sort rows and columns.", "Rendezd sorokra és oszlopokra.", "Sortează rânduri și coloane."),
    h1: HINT_B,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "groups_periods_mcq",
    extras: {
      a: L("Gruppe", "group", "csoport", "grup"),
      b: L("Periode", "period", "periódus", "perioadă"),
      i1: L("Spalte", "column", "oszlop", "coloană"),
      i2: L("Reihe", "row", "sor", "rând"),
      i3: L("Element", "element", "elem", "element"),
      i4: L("Muster", "pattern", "minta", "tipar"),
    },
    interactive: (p) => bucketInteractive(p, `${p}_a`, `${p}_b`, [["i1", "a"], ["i2", "b"], ["i3", "a"], ["i4", "b"]]),
  },
  {
    difficulty: "easy",
    title: L("Alkalimetalle", "Alkali Metals", "Alkálifémek", "Metale alcaline"),
    text: L(
      "Alkalimetalle sind sehr reaktionsfreudige Metalle.",
      "Alkali metals are very reactive metals.",
      "Az alkálifémek nagyon reakcióképes fémek.",
      "Metalele alcaline sunt foarte reactive."
    ),
    inst: L("Ordne die Eigenschaften zu.", "Match the properties.", "Párosítsd a tulajdonságokat.", "Potrivește proprietățile."),
    h1: HINT_A,
    h2: HINT_C,
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "alkali_metals_mcq",
    extras: {
      l1: L("weich", "soft", "puha", "moale"),
      r1: L("reaktiv", "reactive", "reakcióképes", "reactiv"),
      l2: L("mit Wasser", "with water", "vízzel", "cu apa"),
      r2: L("schnell", "quickly", "gyorsan", "repede"),
      l3: L("Gruppe 1", "group 1", "1. csoport", "grupa 1"),
      r3: L("außen ein Elektron", "one outer electron", "egy külső elektron", "un electron exterior"),
    },
    interactive: (p) => magnetInteractive(p, [["l1", "r1"], ["l2", "r2"], ["l3", "r3"]]),
  },
  {
    difficulty: "medium",
    title: L("Halogene", "Halogens", "Halogének", "Halogeni"),
    text: L(
      "Halogene sind Nichtmetalle, die leicht Verbindungen bilden.",
      "Halogens are non-metals that form compounds easily.",
      "A halogének nemfémek, amelyek könnyen alkotnak vegyületeket.",
      "Halogenii sunt nemetale care formează ușor compuși."
    ),
    inst: L("Bringe die Ideen in Reihenfolge.", "Put the ideas in order.", "Tedd sorrendbe az ötleteket.", "Pune ideile în ordine."),
    h1: HINT_B,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "halogens_mcq",
    extras: {
      w1: L("Nichtmetall", "non-metal", "nemfém", "nemetal"),
      w2: L("reaktiv", "reactive", "reakcióképes", "reactiv"),
      w3: L("Verbindung", "compound", "vegyület", "compus"),
    },
    interactive: (p) => stackerInteractive(p, ["w1", "w2", "w3"]),
  },
  {
    difficulty: "medium",
    title: L("Edelgase", "Noble Gases", "Nemesgázok", "Gaze nobile"),
    text: L(
      "Edelgase reagieren nur sehr wenig.",
      "Noble gases react very little.",
      "A nemesgázok alig reagálnak.",
      "Gazele nobile reacționează foarte puțin."
    ),
    inst: L("Wähle die passenden Beispiele.", "Choose the matching examples.", "Válaszd ki a megfelelő példákat.", "Alege exemplele potrivite."),
    h1: HINT_A,
    h2: HINT_C,
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "noble_gases_mcq",
    extras: {
      a: L("reaktiv?", "reactive?", "reakcióképes?", "reactiv?"),
      b: L("ruhig", "calm", "nyugodt", "stabile"),
      i1: L("Helium", "helium", "hélium", "heliu"),
      i2: L("Neon", "neon", "neon", "neon"),
      i3: L("Argon", "argon", "argon", "argon"),
      i4: L("Fluor", "fluorine", "fluor", "fluor"),
    },
    interactive: (p) => bucketInteractive(p, `${p}_a`, `${p}_b`, [["i1", "b"], ["i2", "b"], ["i3", "b"], ["i4", "a"]]),
  },
  {
    difficulty: "hard",
    title: L("Perioden-Trends", "Periodic Trends", "Periódikus trendek", "Tendințe periodice"),
    text: L(
      "Im Periodensystem ändern sich Größe und Reaktivität von Elementen regelmäßig.",
      "In the periodic table, size and reactivity change in patterns.",
      "A periódusos rendszerben a méret és a reakciókészség mintázatosan változik.",
      "În tabelul periodic, mărimea și reactivitatea se schimbă în modele."
    ),
    inst: L("Sortiere die Trends vom einfachen zum schwierigen Gedanken.", "Sort the trend ideas from simple to more complex.", "Rendezd a trendeket az egyszerűtől a nehezebbig.", "Sortează ideile despre tendințe de la simplu la mai complex."),
    h1: HINT_D,
    h2: HINT_B,
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "periodic_trends_basic_mcq",
    extras: {
      w1: L("oben", "up", "felfelé", "în sus"),
      w2: L("unten", "down", "lefelé", "în jos"),
      w3: L("links", "left", "balra", "stânga"),
    },
    interactive: (p) => stackerInteractive(p, ["w1", "w2", "w3"]),
  },
];

const I3_TOPICS: ChemTopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Chemische Bindung", "Chemical Bonds", "Kémiai kötés", "Legătura chimică"),
    text: L(
      "Atome halten zusammen, wenn sie eine Bindung bilden.",
      "Atoms stick together when they form a bond.",
      "Az atomok kötés kialakításakor kapcsolódnak össze.",
      "Atomii se țin împreună când formează o legătură."
    ),
    inst: L("Verbinde die Teile, die zusammengehören.", "Match the parts that belong together.", "Párosítsd az összetartozó részeket.", "Potrivește părțile care merg împreună."),
    h1: HINT_A,
    h2: HINT_C,
    svg: { type: "kemia-diagram", name: "MoleculeSvg" },
    quiz: "chemical_bonds_intro_mcq",
    extras: {
      l1: L("Atome", "atoms", "atomok", "atomi"),
      r1: L("verbinden", "connect", "összekapcsolódnak", "se conectează"),
      l2: L("Bindung", "bond", "kötés", "legătură"),
      r2: L("hält zusammen", "holds together", "összetart", "ține împreună"),
      l3: L("Teilchen", "particles", "részecskék", "particule"),
      r3: L("gemeinsam", "together", "együtt", "împreună"),
    },
    interactive: (p) => magnetInteractive(p, [["l1", "r1"], ["l2", "r2"], ["l3", "r3"]]),
  },
  {
    difficulty: "easy",
    title: L("Ionenbindung", "Ionic Bonding", "Ionos kötés", "Legătură ionică"),
    text: L(
      "Bei der Ionenbindung geben oder nehmen Atome Elektronen auf.",
      "In ionic bonding, atoms give or take electrons.",
      "Az ionos kötésben az atomok elektronokat adnak le vagy vesznek fel.",
      "În legătura ionică, atomii cedează sau preiau electroni."
    ),
    inst: L("Sortiere nach Abgabe oder Aufnahme von Elektronen.", "Sort by giving or taking electrons.", "Rendezd elektronleadás vagy -felvétel szerint.", "Sortează după cedare sau preluare de electroni."),
    h1: HINT_B,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "MoleculeSvg" },
    quiz: "ionic_bonding_mcq",
    extras: {
      a: L("Elektronen abgeben", "give away electrons", "elektront lead", "cedează electroni"),
      b: L("Elektronen aufnehmen", "take in electrons", "elektront vesz fel", "preiau electroni"),
      i1: L("Metall", "metal", "fém", "metal"),
      i2: L("Nichtmetall", "non-metal", "nemfém", "nemetal"),
      i3: L("Ion", "ion", "ion", "ion"),
      i4: L("Salz", "salt", "só", "sare"),
    },
    interactive: (p) => bucketInteractive(p, `${p}_a`, `${p}_b`, [["i1", "a"], ["i2", "b"], ["i3", "b"], ["i4", "a"]]),
  },
  {
    difficulty: "medium",
    title: L("Atombindung", "Covalent Bonding", "Kovalens kötés", "Legătură covalentă"),
    text: L(
      "Bei der Atombindung teilen sich Atome Elektronen.",
      "In covalent bonding, atoms share electrons.",
      "A kovalens kötésben az atomok közösen használják az elektronokat.",
      "În legătura covalentă, atomii împart electroni."
    ),
    inst: L("Bringe die Schritte in die richtige Reihenfolge.", "Put the steps in the correct order.", "Tedd a lépéseket helyes sorrendbe.", "Pune pașii în ordinea corectă."),
    h1: HINT_A,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "MoleculeSvg" },
    quiz: "covalent_bonding_mcq",
    extras: {
      w1: L("teilen", "share", "megoszt", "împart"),
      w2: L("Elektronen", "electrons", "elektronok", "electroni"),
      w3: L("Molekül", "molecule", "molekula", "moleculă"),
    },
    interactive: (p) => stackerInteractive(p, ["w1", "w2", "w3"]),
  },
  {
    difficulty: "medium",
    title: L("Molekülformeln", "Molecular Formulas", "Molekulaképletek", "Formule moleculare"),
    text: L(
      "Formeln zeigen, aus welchen Atomen ein Stoff besteht.",
      "Formulas show which atoms make up a substance.",
      "A képletek megmutatják, milyen atomokból áll egy anyag.",
      "Formulele arată din ce atomi este alcătuită o substanță."
    ),
    inst: L("Wähle die passende Formel.", "Choose the matching formula.", "Válaszd ki a megfelelő képletet.", "Alege formula potrivită."),
    h1: HINT_B,
    h2: HINT_C,
    svg: { type: "kemia-diagram", name: "MoleculeSvg" },
    quiz: "molecular_formulas_mcq",
    extras: {
      q: L("Wasser", "water", "víz", "apă"),
      c1: L("H2O", "H2O", "H2O", "H2O"),
      c2: L("CO2", "CO2", "CO2", "CO2"),
      c3: L("O2", "O2", "O2", "O2"),
      c4: L("NaCl", "NaCl", "NaCl", "NaCl"),
    },
    interactive: (p) => gapFillInteractive(p, "q", ["c1", "c2", "c3", "c4"], 0),
  },
  {
    difficulty: "hard",
    title: L("Valenz", "Valency", "Vegyérték", "Valență"),
    text: L(
      "Die Valenz sagt, wie viele Bindungen ein Atom bilden kann.",
      "Valency tells how many bonds an atom can make.",
      "A vegyérték megmutatja, hány kötést képezhet egy atom.",
      "Valența arată câte legături poate forma un atom."
    ),
    inst: L("Sortiere die Bindungsideen.", "Sort the bonding ideas.", "Rendezd a kötési ötleteket.", "Sortează ideile despre legături."),
    h1: HINT_D,
    h2: HINT_A,
    svg: { type: "kemia-diagram", name: "MoleculeSvg" },
    quiz: "valence_intro_mcq",
    extras: {
      w1: L("1 Bindung", "1 bond", "1 kötés", "1 legătură"),
      w2: L("2 Bindungen", "2 bonds", "2 kötés", "2 legături"),
      w3: L("mehrere", "several", "több", "mai multe"),
    },
    interactive: (p) => stackerInteractive(p, ["w1", "w2", "w3"]),
  },
];

const I4_TOPICS: ChemTopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Reaktionsgleichung", "Chemical Equation", "Kémiai egyenlet", "Ecuație chimică"),
    text: L(
      "Eine Gleichung zeigt die Stoffe vor und nach einer Reaktion.",
      "An equation shows the substances before and after a reaction.",
      "Az egyenlet megmutatja az anyagokat a reakció előtt és után.",
      "O ecuație arată substanțele înainte și după reacție."
    ),
    inst: L("Ordne Edukte und Produkte.", "Sort reactants and products.", "Rendezd az induló és végső anyagokat.", "Sortează reactanții și produșii."),
    h1: HINT_B,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "equations_symbols_mcq",
    extras: {
      a: L("Edukte", "reactants", "kiinduló anyagok", "reactanți"),
      b: L("Produkte", "products", "termékek", "produși"),
      i1: L("links", "left", "balra", "stânga"),
      i2: L("rechts", "right", "jobbra", "dreapta"),
      i3: L("vorher", "before", "előtte", "înainte"),
      i4: L("nachher", "after", "utána", "după"),
    },
    interactive: (p) => bucketInteractive(p, `${p}_a`, `${p}_b`, [["i1", "a"], ["i2", "b"], ["i3", "a"], ["i4", "b"]]),
  },
  {
    difficulty: "medium",
    title: L("Ausgleichen", "Balancing", "Egyenlítés", "Echilibrare"),
    text: L(
      "Gleiche Atome müssen auf beiden Seiten stehen.",
      "The same number of atoms must appear on both sides.",
      "Ugyanannyi atomnak kell állnia mindkét oldalon.",
      "Același număr de atomi trebuie să apară pe ambele părți."
    ),
    inst: L("Bringe die Schritte in Reihenfolge.", "Put the steps in order.", "Tedd a lépéseket sorrendbe.", "Pune pașii în ordine."),
    h1: HINT_A,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "balancing_intro_mcq",
    extras: {
      w1: L("Atome zählen", "count atoms", "atomokat számolni", "numără atomii"),
      w2: L("Koeffizient", "coefficient", "együttható", "coeficient"),
      w3: L("prüfen", "check", "ellenőrizni", "verifică"),
    },
    interactive: (p) => stackerInteractive(p, ["w1", "w2", "w3"]),
  },
  {
    difficulty: "medium",
    title: L("Massenerhaltung", "Conservation of Mass", "Tömegmegmaradás", "Conservarea masei"),
    text: L(
      "Bei einer Reaktion geht keine Masse verloren.",
      "No mass is lost in a reaction.",
      "Reakció közben nem vész el a tömeg.",
      "Într-o reacție, masa nu se pierde."
    ),
    inst: L("Ordne die Mengen richtig zu.", "Match the amounts correctly.", "Párosítsd helyesen a mennyiségeket.", "Potrivește corect cantitățile."),
    h1: HINT_B,
    h2: HINT_C,
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "conservation_mass_mcq",
    extras: {
      l1: L("vor der Reaktion", "before reaction", "reakció előtt", "înainte de reakție"),
      r1: L("gleich schwer", "same mass", "ugyanannyi tömeg", "aceeași masă"),
      l2: L("keine Masse weg", "no mass disappears", "nem tűnik el tömeg", "nu dispare masa"),
      r2: L("alles bleibt", "everything stays", "minden megmarad", "totul rămâne"),
    },
    interactive: (p) => magnetInteractive(p, [["l1", "r1"], ["l2", "r2"]]),
  },
  {
    difficulty: "easy",
    title: L("Reaktionstypen", "Reaction Types", "Reakciótípusok", "Tipuri de reacții"),
    text: L(
      "Es gibt verschiedene Arten von Reaktionen.",
      "There are different kinds of reactions.",
      "Többféle reakció létezik.",
      "Există mai multe tipuri de reacții."
    ),
    inst: L("Sortiere die Reaktionsideen.", "Sort the reaction ideas.", "Rendezd a reakcióötleteket.", "Sortează ideile de reacții."),
    h1: HINT_D,
    h2: HINT_A,
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "reaction_types_basic_mcq",
    extras: {
      w1: L("Verbrennung", "combustion", "égés", "ardere"),
      w2: L("Zersetzung", "decomposition", "bomlás", "descompunere"),
      w3: L("Austausch", "exchange", "kicserélődés", "schimb"),
    },
    interactive: (p) => stackerInteractive(p, ["w1", "w2", "w3"]),
  },
  {
    difficulty: "hard",
    title: L("Oxidation", "Oxidation", "Oxidáció", "Oxidare"),
    text: L(
      "Oxidation ist oft eine Reaktion mit Sauerstoff.",
      "Oxidation is often a reaction with oxygen.",
      "Az oxidáció gyakran oxigénnel történő reakció.",
      "Oxidarea este adesea o reacție cu oxigen."
    ),
    inst: L("Wähle die richtige Aussage.", "Choose the correct statement.", "Válaszd ki a helyes állítást.", "Alege afirmația corectă."),
    h1: HINT_B,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "oxidation_intro_mcq",
    extras: {
      q: L("Was braucht die Reaktion?", "What does the reaction need?", "Mire van szüksége a reakciónak?", "De ce are nevoie reacția?"),
      c1: L("Sauerstoff", "oxygen", "oxigén", "oxigen"),
      c2: L("Wasser", "water", "víz", "apă"),
      c3: L("Sand", "sand", "homok", "nisip"),
      c4: L("Glas", "glass", "üveg", "sticlă"),
    },
    interactive: (p) => gapFillInteractive(p, "q", ["c1", "c2", "c3", "c4"], 0),
  },
];

const I5_TOPICS: ChemTopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Säuren", "Acids", "SAVAK", "Acizi"),
    text: L(
      "Säuren schmecken sauer und können Indikatoren verändern.",
      "Acids taste sour and can change indicators.",
      "A savak savanyúak és megváltoztathatják az indikátorokat.",
      "Acizii au gust acru și pot schimba indicatorii."
    ),
    inst: L("Sortiere die Hinweise zu Säure oder nicht.", "Sort the clues into acid or not.", "Rendezd a jeleket sav vagy nem sav szerint.", "Sortează indiciile în acid sau nu."),
    h1: HINT_A,
    h2: HINT_C,
    svg: { type: "kemia-diagram", name: "PhScaleSvg" },
    quiz: "acid_properties_mcq",
    extras: {
      a: L("sauer", "sour", "savanyú", "acru"),
      b: L("ätzend", "corrosive", "maró", "coroziv"),
      i1: L("Zitrone", "lemon", "citrom", "lămâie"),
      i2: L("Essig", "vinegar", "ecet", "oțet"),
      i3: L("Seife", "soap", "szappan", "săpun"),
      i4: L("Limo", "lemon soda", "limonádé", "limonadă"),
    },
    interactive: (p) => bucketInteractive(p, `${p}_a`, `${p}_b`, [["i1", "a"], ["i2", "a"], ["i3", "b"], ["i4", "a"]]),
  },
  {
    difficulty: "easy",
    title: L("Basen", "Bases", "Bázisok", "Baze"),
    text: L(
      "Basen fühlen sich oft seifig an und neutralisieren Säuren.",
      "Bases often feel soapy and neutralize acids.",
      "A bázisok gyakran szappanos tapintásúak és semlegesítik a savakat.",
      "Bazele se simt adesea săpunoase și neutralizează acizii."
    ),
    inst: L("Ordne Säure und Base zu.", "Match acid and base.", "Párosítsd a savat és a bázist.", "Potrivește acidul și baza."),
    h1: HINT_B,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "PhScaleSvg" },
    quiz: "base_properties_mcq",
    extras: {
      l1: L("seifig", "soapy", "szappanos", "săpunos"),
      r1: L("glatt", "slippery", "sima", "alunecos"),
      l2: L("neutralisiert", "neutralizes", "semlegesít", "neutralizează"),
      r2: L("Säure", "acid", "sav", "acid"),
    },
    interactive: (p) => magnetInteractive(p, [["l1", "r1"], ["l2", "r2"]]),
  },
  {
    difficulty: "medium",
    title: L("Salze", "Salts", "Só", "Săruri"),
    text: L(
      "Salze entstehen oft aus einer Reaktion von Säure und Base.",
      "Salts often form from a reaction between acid and base.",
      "A sók gyakran sav és bázis reakciójából keletkeznek.",
      "Sărurile se formează adesea din reacția unui acid cu o bază."
    ),
    inst: L("Bringe die Entstehung in Reihenfolge.", "Put the formation in order.", "Tedd sorrendbe a keletkezést.", "Pune formarea în ordine."),
    h1: HINT_A,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "PhScaleSvg" },
    quiz: "salt_formation_mcq",
    extras: {
      w1: L("Säure", "acid", "sav", "acid"),
      w2: L("Base", "base", "bázis", "bază"),
      w3: L("Salz", "salt", "só", "sare"),
    },
    interactive: (p) => stackerInteractive(p, ["w1", "w2", "w3"]),
  },
  {
    difficulty: "hard",
    title: L("Neutralisation", "Neutralization", "Semlegesítés", "Neutralizare"),
    text: L(
      "Bei der Neutralisation gleichen sich Säure und Base aus.",
      "In neutralization, acid and base balance each other.",
      "A semlegesítésben a sav és a bázis kiegyenlíti egymást.",
      "În neutralizare, acidul și baza se echilibrează."
    ),
    inst: L("Wähle die richtige Gleichungsidee.", "Choose the correct equation idea.", "Válaszd ki a helyes egyenletrészletet.", "Alege ideea corectă de ecuație."),
    h1: HINT_B,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "PhScaleSvg" },
    quiz: "neutralization_equation_mcq",
    extras: {
      q: L("Was reagiert?", "What reacts?", "Mi reagál?", "Ce reacționează?"),
      c1: L("Säure + Base", "acid + base", "sav + bázis", "acid + bază"),
      c2: L("Wasser + Sand", "water + sand", "víz + homok", "apă + nisip"),
      c3: L("Salz + Zucker", "salt + sugar", "só + cukor", "sare + zahăr"),
      c4: L("Metall + Glas", "metal + glass", "fém + üveg", "metal + sticlă"),
    },
    interactive: (p) => gapFillInteractive(p, "q", ["c1", "c2", "c3", "c4"], 0),
  },
  {
    difficulty: "easy",
    title: L("Indikatorfarben", "Indicator Colors", "Indikátor színei", "Culorile indicatorilor"),
    text: L(
      "Indikatoren zeigen, ob eine Lösung sauer oder basisch ist.",
      "Indicators show whether a solution is acidic or basic.",
      "Az indikátorok megmutatják, hogy egy oldat savas vagy lúgos.",
      "Indicatorii arată dacă o soluție este acidă sau bazică."
    ),
    inst: L("Sortiere die Farben.", "Sort the colors.", "Rendezd a színeket.", "Sortează culorile."),
    h1: HINT_C,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "PhScaleSvg" },
    quiz: "indicator_colors_mcq",
    extras: {
      a: L("rot", "red", "piros", "roșu"),
      b: L("blau", "blue", "kék", "albastru"),
      c: L("grün", "green", "zöld", "verde"),
      d: L("neutral", "neutral", "semleges", "neutru"),
    },
    interactive: (p) => bucketInteractive(p, `${p}_a`, `${p}_b`, [["a", "a"], ["b", "b"], ["c", "b"], ["d", "a"]]),
  },
];

const I6_TOPICS: ChemTopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Metalle", "Metals", "Fémek", "Metale"),
    text: L(
      "Metalle leiten Strom und sind oft glänzend.",
      "Metals conduct electricity and are often shiny.",
      "A fémek vezetik az áramot és gyakran fényesek.",
      "Metalele conduc electricitatea și sunt adesea strălucitoare."
    ),
    inst: L("Sortiere Metall-Eigenschaften.", "Sort metal properties.", "Rendezd a fémek tulajdonságait.", "Sortează proprietățile metalelor."),
    h1: HINT_A,
    h2: HINT_B,
    svg: simpleIcon("Fe", "Metals", "#F1F5F9", "#334155"),
    quiz: "metal_properties_mcq",
    extras: {
      a: L("leitend", "conductive", "vezető", "conducătoare"),
      b: L("glänzend", "shiny", "fényes", "strălucitoare"),
      i1: L("Kupfer", "copper", "réz", "cupru"),
      i2: L("Eisen", "iron", "vas", "fier"),
      i3: L("Aluminium", "aluminium", "alumínium", "aluminiu"),
      i4: L("Holz", "wood", "fa", "lemn"),
    },
    interactive: (p) => bucketInteractive(p, `${p}_a`, `${p}_b`, [["i1", "a"], ["i2", "a"], ["i3", "a"], ["i4", "b"]]),
  },
  {
    difficulty: "easy",
    title: L("Reaktivität", "Reactivity", "Reakciókészség", "Reactivitate"),
    text: L(
      "Manche Metalle reagieren schneller als andere.",
      "Some metals react faster than others.",
      "Vannak fémek, amelyek gyorsabban reagálnak másoknál.",
      "Unele metale reacționează mai repede decât altele."
    ),
    inst: L("Ordne die Reaktionsstärke.", "Order the reactivity.", "Rendezd a reakciókészséget.", "Ordinează reactivitatea."),
    h1: HINT_D,
    h2: HINT_C,
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "metal_reactivity_mcq",
    extras: {
      w1: L("stark", "strong", "erős", "puternic"),
      w2: L("mittel", "medium", "közepes", "mediu"),
      w3: L("schwach", "weak", "gyenge", "slab"),
    },
    interactive: (p) => stackerInteractive(p, ["w1", "w2", "w3"]),
  },
  {
    difficulty: "medium",
    title: L("Korrosion", "Corrosion", "Korrózió", "Coroziune"),
    text: L(
      "Korrosion verändert Metalle durch Luft und Wasser.",
      "Corrosion changes metals through air and water.",
      "A korrózió a levegő és a víz hatására változtatja a fémeket.",
      "Coroziunea schimbă metalele prin aer și apă."
    ),
    inst: L("Verbinde Schutz und Ursache.", "Match protection and cause.", "Párosítsd a védelmet és az okot.", "Potrivește protecția și cauza."),
    h1: HINT_B,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "corrosion_protection_mcq",
    extras: {
      l1: L("Luft", "air", "levegő", "aer"),
      r1: L("Rost", "rust", "rozsda", "rugină"),
      l2: L("Wasser", "water", "víz", "apă"),
      r2: L("Schutz", "protection", "védelem", "protecție"),
    },
    interactive: (p) => magnetInteractive(p, [["l1", "r1"], ["l2", "r2"]]),
  },
  {
    difficulty: "medium",
    title: L("Erze", "Ores", "Ércek", "Minereuri"),
    text: L(
      "Aus Erzen gewinnt man Metalle.",
      "Metals are extracted from ores.",
      "Az ércekből fémeket nyerünk ki.",
      "Metalele se extrag din minereuri."
    ),
    inst: L("Bringe Gewinnungsschritte in Reihenfolge.", "Put extraction steps in order.", "Rendezd a kinyerés lépéseit.", "Pune pașii de extracție în ordine."),
    h1: HINT_A,
    h2: HINT_D,
    svg: simpleIcon("⛏️", "Ores", "#FEF3C7", "#B45309"),
    quiz: "ores_extraction_intro_mcq",
    extras: {
      w1: L("finden", "find", "megtalálni", "a găsi"),
      w2: L("trennen", "separate", "szétválasztani", "a separa"),
      w3: L("gewinnen", "extract", "kinyer", "a extrage"),
    },
    interactive: (p) => stackerInteractive(p, ["w1", "w2", "w3"]),
  },
  {
    difficulty: "hard",
    title: L("Legierungen", "Alloys", "Ötvözetek", "Aliaje"),
    text: L(
      "Legierungen sind Mischungen aus Metalle.",
      "Alloys are mixtures of metals.",
      "Az ötvözetek fémek keverékei.",
      "Aliajele sunt amestecuri de metale."
    ),
    inst: L("Wähle die richtige Mischung.", "Choose the correct mixture.", "Válaszd ki a helyes keveréket.", "Alege amestecul corect."),
    h1: HINT_C,
    h2: HINT_D,
    svg: simpleIcon("🛠️", "Alloys", "#F5F3FF", "#7C3AED"),
    quiz: "alloys_intro_mcq",
    extras: {
      q: L("Was ist eine Legierung?", "What is an alloy?", "Mi az ötvözet?", "Ce este un aliaj?"),
      c1: L("Metallmischung", "metal mixture", "fémkeverék", "amestec de metale"),
      c2: L("nur Wasser", "only water", "csak víz", "doar apă"),
      c3: L("reines Glas", "pure glass", "tiszta üveg", "sticlă pură"),
      c4: L("Luft", "air", "levegő", "aer"),
    },
    interactive: (p) => gapFillInteractive(p, "q", ["c1", "c2", "c3", "c4"], 0),
  },
];

const I7_TOPICS: ChemTopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Atom-Check", "Atom Check", "Atom-ellenőrzés", "Verificare atom"),
    text: L("Wir wiederholen Kern, Schale und Teilchen.", "We review nucleus, shells, and particles.", "Ismételjük a magot, a héjakat és a részecskéket.", "Recapitulăm nucleul, straturile și particulele."),
    inst: L("Wähle das passende Teilchen.", "Choose the matching particle.", "Válaszd ki a megfelelő részecskét.", "Alege particula potrivită."),
    h1: HINT_A,
    h2: HINT_B,
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "protons_neutrons_electrons_mcq",
    extras: {
      a: L("Kern", "nucleus", "atommag", "nucleu"),
      b: L("Hülle", "shell", "héj", "strat"),
      i1: L("Proton", "proton", "proton", "proton"),
      i2: L("Elektron", "electron", "elektron", "electron"),
      i3: L("Neutron", "neutron", "neutron", "neutron"),
      i4: L("Atom", "atom", "atom", "atom"),
    },
    interactive: (p) => bucketInteractive(p, `${p}_a`, `${p}_b`, [["i1", "a"], ["i2", "b"], ["i3", "a"], ["i4", "b"]]),
  },
  {
    difficulty: "easy",
    title: L("Perioden-Check", "Periodic Check", "Periódus-ellenőrzés", "Verificare periodică"),
    text: L("Wir wiederholen Gruppen, Perioden und Trends.", "We review groups, periods, and trends.", "Ismételjük a csoportokat, periódusokat és trendeket.", "Recapitulăm grupele, perioadele și tendințele."),
    inst: L("Sortiere die Periodensystem-Ideen.", "Sort the periodic-table ideas.", "Rendezd a periódusos rendszer ötleteit.", "Sortează ideile despre tabelul periodic."),
    h1: HINT_B,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "groups_periods_mcq",
    extras: {
      w1: L("Gruppe", "group", "csoport", "grup"),
      w2: L("Periode", "period", "periódus", "perioadă"),
      w3: L("Trend", "trend", "trend", "tendință"),
    },
    interactive: (p) => stackerInteractive(p, ["w1", "w2", "w3"]),
  },
  {
    difficulty: "medium",
    title: L("Reihen prüfen", "Check the Rows", "Sorok ellenőrzése", "Verifică rândurile"),
    text: L("Woran erkennst du eine Gruppe und eine Periode?", "How do you spot a group and a period?", "Hogyan ismered fel a csoportot és a periódust?", "Cum recunoști o grupă și o perioadă?"),
    inst: L("Ordne die Begriffe.", "Order the terms.", "Rendezd a fogalmakat.", "Ordonează termenii."),
    h1: HINT_A,
    h2: HINT_C,
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "periodic_trends_basic_mcq",
    extras: {
      l1: L("oben/unten", "up/down", "fel/le", "sus/jos"),
      r1: L("links/rechts", "left/right", "balra/jobbra", "stânga/dreapta"),
      l2: L("ähnlich", "similar", "hasonló", "similar"),
      r2: L("Reihe", "row", "sor", "rând"),
    },
    interactive: (p) => magnetInteractive(p, [["l1", "r1"], ["l2", "r2"]]),
  },
  {
    difficulty: "medium",
    title: L("Schalen und Gruppen", "Shells and Groups", "Héjak és csoportok", "Straturi și grupe"),
    text: L("Elektronenschalen helfen beim Lesen des Periodensystems.", "Electron shells help you read the periodic table.", "Az elektronhéjak segítenek olvasni a periódusos rendszert.", "Straturile electronice ajută la citirea tabelului periodic."),
    inst: L("Bringe es in Lernreihenfolge.", "Put it in learning order.", "Tedd tanulási sorrendbe.", "Pune-l în ordinea învățării."),
    h1: HINT_D,
    h2: HINT_B,
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "electron_shells_mcq",
    extras: {
      w1: L("Kern", "nucleus", "mag", "nucleu"),
      w2: L("Hülle", "shell", "héj", "strat"),
      w3: L("Gruppe", "group", "csoport", "grup"),
    },
    interactive: (p) => stackerInteractive(p, ["w1", "w2", "w3"]),
  },
  {
    difficulty: "hard",
    title: L("Finaler Perioden-Check", "Final Periodic Review", "Végső periódus-ellenőrzés", "Recapitulare periodică finală"),
    text: L("Kannst du die wichtigsten Periodensystem-Ideen sicher anwenden?", "Can you apply the key periodic-table ideas?", "Biztosan tudod alkalmazni a legfontosabb periódusos rendszer ötleteket?", "Poți aplica ideile principale din tabelul periodic?"),
    inst: L("Wähle die stärkste Aussage.", "Choose the strongest statement.", "Válaszd a legerősebb állítást.", "Alege afirmația cea mai bună."),
    h1: HINT_D,
    h2: HINT_A,
    svg: { type: "kemia-diagram", name: "AtomSvg" },
    quiz: "noble_gases_mcq",
    extras: {
      q: L("Wiederholung", "review", "ismétlés", "recapitulare"),
      c1: L("Gruppen helfen", "groups help", "a csoportok segítenek", "grupele ajută"),
      c2: L("Perioden helfen", "periods help", "a periódusok segítenek", "perioadele ajută"),
      c3: L("beides stimmt", "both are true", "mindkettő igaz", "ambele sunt adevărate"),
      c4: L("nichts davon", "none of these", "egyik sem", "niciuna dintre ele"),
    },
    interactive: (p) => gapFillInteractive(p, "q", ["c1", "c2", "c3", "c4"], 2),
  },
];

const I8_TOPICS: ChemTopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Bindungen wiederholen", "Bond Review", "Kötések ismétlése", "Recapitulare legături"),
    text: L("Ionenbindung und Atombindung sind zwei Grundideen.", "Ionic and covalent bonding are two core ideas.", "Az ionos és a kovalens kötés két alapötlet.", "Legătura ionică și cea covalentă sunt două idei de bază."),
    inst: L("Sortiere die Bindungen.", "Sort the bonds.", "Rendezd a kötéseket.", "Sortează legăturile."),
    h1: HINT_A,
    h2: HINT_C,
    svg: { type: "kemia-diagram", name: "MoleculeSvg" },
    quiz: "ionic_bonding_mcq",
    extras: {
      a: L("Ionen", "ions", "ionok", "ioni"),
      b: L("Teilen", "share", "megosztás", "împart"),
      i1: L("Ionisch", "ionic", "ionos", "ionic"),
      i2: L("Kovalent", "covalent", "kovalens", "covalent"),
      i3: L("Bindung", "bond", "kötés", "legătură"),
      i4: L("Molekül", "molecule", "molekula", "moleculă"),
    },
    interactive: (p) => bucketInteractive(p, `${p}_a`, `${p}_b`, [["i1", "a"], ["i2", "b"], ["i3", "a"], ["i4", "b"]]),
  },
  {
    difficulty: "medium",
    title: L("Formeln üben", "Formula Practice", "Képletgyakorlás", "Exersare formule"),
    text: L("Formeln zeigen, welche Atome zusammengehören.", "Formulas show which atoms belong together.", "A képletek megmutatják, mely atomok tartoznak össze.", "Formulele arată ce atomi aparțin împreună."),
    inst: L("Bringe Formelideen in Ordnung.", "Put formula ideas in order.", "Rendezd a képletes ötleteket.", "Pune ideile despre formule în ordine."),
    h1: HINT_B,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "MoleculeSvg" },
    quiz: "molecular_formulas_mcq",
    extras: {
      w1: L("Atom", "atom", "atom", "atom"),
      w2: L("Formel", "formula", "képlet", "formulă"),
      w3: L("lesen", "read", "olvasni", "a citi"),
    },
    interactive: (p) => stackerInteractive(p, ["w1", "w2", "w3"]),
  },
  {
    difficulty: "medium",
    title: L("Gleichungen ausgleichen", "Balance Equations", "Egyenletek rendezése", "Echilibrați ecuațiile"),
    text: L("Beim Ausgleichen bleiben links und rechts gleich viele Atome.", "When balancing, both sides keep the same number of atoms.", "Az egyenlítésnél bal és jobb oldalon is ugyanannyi atom marad.", "La echilibrare, ambele părți păstrează același număr de atomi."),
    inst: L("Ordne die Schritte.", "Order the steps.", "Rendezd a lépéseket.", "Ordonează pașii."),
    h1: HINT_A,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "balancing_equations_mcq",
    extras: {
      w1: L("zählen", "count", "számolni", "numără"),
      w2: L("gleich", "equal", "egyenlő", "egal"),
      w3: L("prüfen", "check", "ellenőrizni", "verifică"),
    },
    interactive: (p) => stackerInteractive(p, ["w1", "w2", "w3"]),
  },
  {
    difficulty: "easy",
    title: L("Masse bleibt", "Mass Stays", "A tömeg marad", "Masa rămâne"),
    text: L("Bei Reaktionen verschwindet keine Masse.", "In reactions, no mass disappears.", "Reakcióknál nem tűnik el tömeg.", "În reacții, masa nu dispare."),
    inst: L("Paaren die Aussagen.", "Pair the statements.", "Párosítsd az állításokat.", "Potrivește afirmațiile."),
    h1: HINT_C,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "conservation_mass_mcq",
    extras: {
      l1: L("vorher", "before", "előtte", "înainte"),
      r1: L("nachher", "after", "utána", "după"),
      l2: L("gleich", "same", "ugyanaz", "la fel"),
      r2: L("bleibt", "stays", "marad", "rămâne"),
    },
    interactive: (p) => magnetInteractive(p, [["l1", "r1"], ["l2", "r2"]]),
  },
  {
    difficulty: "hard",
    title: L("Reaktion oder Oxidation?", "Reaction or Oxidation?", "Reakció vagy oxidáció?", "Reacție sau oxidare?"),
    text: L("Oxidation ist ein spezieller Reaktionstyp mit Sauerstoff.", "Oxidation is a special reaction type with oxygen.", "Az oxidáció az oxigénnel kapcsolatos különleges reakciótípus.", "Oxidarea este un tip special de reacție cu oxigen."),
    inst: L("Wähle die richtige Zuordnung.", "Choose the correct match.", "Válaszd ki a helyes párost.", "Alege potrivirea corectă."),
    h1: HINT_B,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "ReactionSvg" },
    quiz: "oxidation_intro_mcq",
    extras: {
      q: L("Mit was?", "With what?", "Mivel?", "Cu ce?"),
      c1: L("Sauerstoff", "oxygen", "oxigén", "oxigen"),
      c2: L("Sand", "sand", "homok", "nisip"),
      c3: L("Wasser", "water", "víz", "apă"),
      c4: L("Luft", "air", "levegő", "aer"),
    },
    interactive: (p) => gapFillInteractive(p, "q", ["c1", "c2", "c3", "c4"], 0),
  },
];

const I9_TOPICS: ChemTopicSpec[] = [
  {
    difficulty: "easy",
    title: L("Säure oder Base?", "Acid or Base?", "Sav vagy bázis?", "Acid sau bază?"),
    text: L("Zum Schluss wiederholen wir Säuren und Basen.", "Finally we review acids and bases.", "A végén ismételjük a savakat és a bázisokat.", "La final, recapitulează acizii și bazele."),
    inst: L("Ordne die Beispiele.", "Sort the examples.", "Rendezd a példákat.", "Sortează exemplele."),
    h1: HINT_A,
    h2: HINT_C,
    svg: { type: "kemia-diagram", name: "PhScaleSvg" },
    quiz: "acid_properties_mcq",
    extras: {
      a: L("sauer", "acidic", "savas", "acid"),
      b: L("basisch", "basic", "lúgos", "bazic"),
      i1: L("Zitronensaft", "lemon juice", "citromlé", "suc de lămâie"),
      i2: L("Seife", "soap", "szappan", "săpun"),
      i3: L("Essig", "vinegar", "ecet", "oțet"),
      i4: L("Waschmittel", "detergent", "mosószer", "detergent"),
    },
    interactive: (p) => bucketInteractive(p, `${p}_a`, `${p}_b`, [["i1", "a"], ["i2", "b"], ["i3", "a"], ["i4", "b"]]),
  },
  {
    difficulty: "easy",
    title: L("Indikatorfarben", "Indicator Colors", "Indikátorszínek", "Culori indicator"),
    text: L("Indikatoren zeigen die Art einer Lösung.", "Indicators show the kind of solution.", "Az indikátorok megmutatják az oldat jellegét.", "Indicatorii arată tipul soluției."),
    inst: L("Bringe Farbe und Bedeutung zusammen.", "Match color and meaning.", "Párosítsd a színt és a jelentést.", "Potrivește culoarea și sensul."),
    h1: HINT_B,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "PhScaleSvg" },
    quiz: "indicator_colors_mcq",
    extras: {
      l1: L("rot", "red", "piros", "roșu"),
      r1: L("sauer", "acid", "savas", "acid"),
      l2: L("blau", "blue", "kék", "albastru"),
      r2: L("basisch", "basic", "lúgos", "bazic"),
      l3: L("grün", "green", "zöld", "verde"),
      r3: L("neutral", "neutral", "semleges", "neutru"),
    },
    interactive: (p) => magnetInteractive(p, [["l1", "r1"], ["l2", "r2"], ["l3", "r3"]]),
  },
  {
    difficulty: "medium",
    title: L("Salzbildung", "Salt Formation", "Sóképződés", "Formarea sărurilor"),
    text: L("Salze entstehen oft aus Säure und Base.", "Salts often come from acid and base.", "A sók gyakran savból és bázisból keletkeznek.", "Sărurile apar adesea din acid și bază."),
    inst: L("Ordne die Entstehung.", "Order the formation.", "Rendezd a keletkezést.", "Ordonează formarea."),
    h1: HINT_A,
    h2: HINT_D,
    svg: { type: "kemia-diagram", name: "PhScaleSvg" },
    quiz: "salt_formation_mcq",
    extras: {
      w1: L("Säure", "acid", "sav", "acid"),
      w2: L("Base", "base", "bázis", "bază"),
      w3: L("Salz", "salt", "só", "sare"),
    },
    interactive: (p) => stackerInteractive(p, ["w1", "w2", "w3"]),
  },
  {
    difficulty: "medium",
    title: L("Metalleigenschaften", "Metal Properties", "Fém tulajdonságok", "Proprietăți ale metalelor"),
    text: L("Metalle leiten Strom, glänzen und lassen sich formen.", "Metals conduct electricity, shine, and can be shaped.", "A fémek vezetik az áramot, fényesek és alakíthatók.", "Metalele conduc electricitatea, strălucesc și pot fi modelate."),
    inst: L("Sortiere die Merkmale.", "Sort the features.", "Rendezd a jellemzőket.", "Sortează caracteristicile."),
    h1: HINT_B,
    h2: HINT_C,
    svg: simpleIcon("Fe", "Metals", "#F8FAFC", "#334155"),
    quiz: "metal_properties_mcq",
    extras: {
      a: L("glänzend", "shiny", "fényes", "strălucitor"),
      b: L("leitend", "conductive", "vezető", "conductor"),
      i1: L("Kupfer", "copper", "réz", "cupru"),
      i2: L("Eisen", "iron", "vas", "fier"),
      i3: L("formbar", "malleable", "alakítható", "maleabil"),
      i4: L("spröde wie Glas", "brittle like glass", "rideg, mint az üveg", "fragil ca sticla"),
    },
    interactive: (p) => bucketInteractive(p, `${p}_a`, `${p}_b`, [["i1", "a"], ["i2", "a"], ["i3", "a"], ["i4", "b"]]),
  },
  {
    difficulty: "hard",
    title: L("Final-Mix", "Final Mix", "Záró mix", "Mix final"),
    text: L("Jetzt verbindest du Säuren, Basen, Salze und Metalle.", "Now you connect acids, bases, salts, and metals.", "Most összekapcsolod a savakat, bázisokat, sókat és fémeket.", "Acum legi acizii, bazele, sărurile și metalele."),
    inst: L("Wähle die beste Zusammenfassung.", "Choose the best summary.", "Válaszd a legjobb összefoglalást.", "Alege cel mai bun rezumat."),
    h1: HINT_D,
    h2: HINT_A,
    svg: { type: "kemia-diagram", name: "BeakerSvg" },
    quiz: "alloys_intro_mcq",
    extras: {
      q: L("Was passt zusammen?", "What fits together?", "Mi illik össze?", "Ce se potrivește împreună?"),
      c1: L("Säure + Base = Salz", "acid + base = salt", "sav + bázis = só", "acid + bază = sare"),
      c2: L("Metall + Luft = immer neu", "metal + air = always new", "fém + levegő = mindig új", "metal + aer = mereu nou"),
      c3: L("Alles ist gleich", "everything is the same", "minden ugyanaz", "totul este la fel"),
      c4: L("Keine Reaktionen", "no reactions", "nincs reakció", "fără reakții"),
    },
    interactive: (p) => gapFillInteractive(p, "q", ["c1", "c2", "c3", "c4"], 0),
  },
];

const BUNDLES = [
  { key: "I1", title: L("Atombau-Start", "Atom Structure Start", "Atomszerkezet indulás", "Start structură atomică"), topics: I1_TOPICS },
  { key: "I2", title: L("Periodensystem", "Periodic Table", "Periódusos rendszer", "Tabel periodic"), topics: I2_TOPICS },
  { key: "I3", title: L("Bindungen", "Bonding", "Kötések", "Legături"), topics: I3_TOPICS },
  { key: "I4", title: L("Reaktionen", "Reactions", "Reakciók", "Reacții"), topics: I4_TOPICS },
  { key: "I5", title: L("Säuren und Basen", "Acids and Bases", "Savak és bázisok", "Acizi și baze"), topics: I5_TOPICS },
  { key: "I6", title: L("Metalle", "Metals", "Fémek", "Metale"), topics: I6_TOPICS },
  { key: "I7", title: L("Rückblick I", "Review I", "Ismétlés I", "Recapitulare I"), topics: I7_TOPICS },
  { key: "I8", title: L("Rückblick II", "Review II", "Ismétlés II", "Recapitulare II"), topics: I8_TOPICS },
  { key: "I9", title: L("Finale", "Finale", "Finálé", "Final"), topics: I9_TOPICS },
] as const;

const built = BUNDLES.map((bundle) => ({
  key: bundle.key,
  labels: makeLabels(bundle.title, bundle.topics),
  pool: makePool(bundle.topics),
}));

export const KEMIA_K7_I1_LABELS = built[0].labels;
export const KEMIA_K7_I1_POOL = built[0].pool;
export const KEMIA_K7_I2_LABELS = built[1].labels;
export const KEMIA_K7_I2_POOL = built[1].pool;
export const KEMIA_K7_I3_LABELS = built[2].labels;
export const KEMIA_K7_I3_POOL = built[2].pool;
export const KEMIA_K7_I4_LABELS = built[3].labels;
export const KEMIA_K7_I4_POOL = built[3].pool;
export const KEMIA_K7_I5_LABELS = built[4].labels;
export const KEMIA_K7_I5_POOL = built[4].pool;
export const KEMIA_K7_I6_LABELS = built[5].labels;
export const KEMIA_K7_I6_POOL = built[5].pool;
export const KEMIA_K7_I7_LABELS = built[6].labels;
export const KEMIA_K7_I7_POOL = built[6].pool;
export const KEMIA_K7_I8_LABELS = built[7].labels;
export const KEMIA_K7_I8_POOL = built[7].pool;
export const KEMIA_K7_I9_LABELS = built[8].labels;
export const KEMIA_K7_I9_POOL = built[8].pool;
