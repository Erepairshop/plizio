import type { PoolTopicDef, SvgConfig } from "./types";
import type { TopicInteractive } from "@/app/astro-biologie/games/ExplorerEngine";

type Lang = "de" | "en" | "hu" | "ro";
type L4 = Record<Lang, string>;

const L = (de: string, en: string, hu: string, ro: string): L4 => ({ de, en, hu, ro });

interface TopicSpec {
  title: L4;
  text: L4;
  hint?: L4;
  bullet1?: L4;
  bullet2?: L4;
  labels?: Record<string, L4>;
  svg: SvgConfig;
  interactive: (k: (suffix: string) => string) => TopicInteractive;
  quiz: string;
  difficulty?: "easy" | "medium" | "hard";
}

interface IslandSpec {
  id: "i1" | "i2" | "i3" | "i4" | "i5" | "i6" | "i7" | "i8" | "i9";
  title: L4;
  topics: TopicSpec[];
}

const ISLAND_META: Record<IslandSpec["id"], { icon: string; color: string }> = {
  i1: { icon: "⚛️", color: "#EF4444" },
  i2: { icon: "🔗", color: "#F59E0B" },
  i3: { icon: "💥", color: "#10B981" },
  i4: { icon: "🧫", color: "#3B82F6" },
  i5: { icon: "💧", color: "#8B5CF6" },
  i6: { icon: "🌍", color: "#EC4899" },
  i7: { icon: "🧪", color: "#14B8A6" },
  i8: { icon: "🔥", color: "#F97316" },
  i9: { icon: "🔬", color: "#6366F1" },
};

const topicSvg = (icon: string, title: string, color: string): SvgConfig => ({
  type: "simple-icon",
  icon,
  title,
  color,
  bg: `${color}18`,
});

function topicKey(islandId: string, index: number, suffix: string): string {
  return `${islandId}_t${index}_${suffix}`;
}

function buildTopicLabels(islandId: string, index: number, spec: TopicSpec) {
  const out: Record<string, L4> = {
    title: spec.title,
    text: spec.text,
  };

  if (spec.hint) out.hint = spec.hint;
  if (spec.bullet1) out.bullet1 = spec.bullet1;
  if (spec.bullet2) out.bullet2 = spec.bullet2;
  for (const [key, value] of Object.entries(spec.labels ?? {})) {
    out[key] = value;
  }

  const prefixed: Record<string, L4> = {};
  for (const [suffix, value] of Object.entries(out)) {
    prefixed[topicKey(islandId, index, suffix)] = value;
  }
  return prefixed;
}

function buildPool(islandId: string, topics: TopicSpec[]): PoolTopicDef[] {
  return topics.map((spec, index) => {
    const prefix = (suffix: string) => topicKey(islandId, index + 1, suffix);
    return {
      infoTitle: prefix("title"),
      infoText: prefix("text"),
      svg: spec.svg,
      bulletKeys: spec.bullet1 || spec.bullet2 ? [spec.bullet1 ? prefix("bullet1") : "", spec.bullet2 ? prefix("bullet2") : ""].filter(Boolean) as string[] : undefined,
      hintKey: spec.hint ? prefix("hint") : undefined,
      interactive: spec.interactive(prefix),
      quiz: { generate: spec.quiz },
      difficulty: spec.difficulty,
    };
  });
}

function buildIsland(island: IslandSpec) {
  const labels: Record<string, L4> = {
    explorer_title: island.title,
  };

  island.topics.forEach((topic, idx) => {
    Object.assign(labels, buildTopicLabels(island.id, idx + 1, topic));
  });

  return {
    labels,
    pool: buildPool(island.id, island.topics),
  };
}

const K6_I1: IslandSpec = {
  id: "i1",
  title: L("Atome und Elemente", "Atoms and Elements", "Atomok és elemek", "Atomi și elemente"),
  topics: [
    {
      title: L("Atommodell", "Atom Model", "Atommodell", "Modelul atomului"),
      text: L(
        "Ein Atom besteht aus Kern und Hülle.",
        "An atom has a nucleus and an electron shell.",
        "Az atom magból és elektrongyökből áll.",
        "Un atom are nucleu și înveliș electronic."
      ),
      hint: L("Kern und Elektronen helfen beim Erkennen.", "Nucleus and electrons help you identify it.", "A mag és az elektronok segítenek felismerni.", "Nucleul și electronii te ajută să-l recunoști."),
      bullet1: L("Kern", "Nucleus", "mag", "nucleu"),
      bullet2: L("Elektronenhülle", "Electron shell", "elektronburok", "înveliș electronic"),
      labels: {
        nucleus: L("Kern", "Nucleus", "mag", "nucleu"),
        shell: L("Hülle", "Shell", "héj", "înveliș"),
        electron: L("Elektron", "Electron", "elektron", "electron"),
      },
      svg: topicSvg("⚛️", "Atom", "#EF4444"),
      interactive: (k) => ({
        type: "label-diagram",
        areas: [
          { id: "nucleus", x: 50, y: 50, label: k("nucleus") },
          { id: "shell", x: 26, y: 72, label: k("shell") },
          { id: "electron", x: 78, y: 28, label: k("electron") },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("bullet1"),
      }),
      quiz: "atom_model_intro",
    },
    {
      title: L("Elemente", "Elements", "Elemek", "Elemente"),
      text: L(
        "Elemente bestehen aus nur einer Atomsorte.",
        "Elements contain only one kind of atom.",
        "Az elemek egyféle atomból állnak.",
        "Elementele conțin un singur tip de atom."
      ),
      hint: L("Ein Element ist keine Mischung.", "An element is not a mixture.", "Az elem nem keverék.", "Un element nu este un amestec."),
      bullet1: L("nur eine Atomsorte", "one kind of atom", "egyféle atom", "un singur tip de atom"),
      labels: {
        pure: L("rein", "pure", "tiszta", "pur"),
        element: L("Element", "Element", "elem", "element"),
        mixture: L("Gemisch", "Mixture", "keverék", "amestec"),
      },
      svg: topicSvg("🧩", "Element", "#F59E0B"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "element", label: k("element") },
          { id: "mixture", label: k("mixture") },
        ],
        items: [
          { text: k("pure"), bucketId: "element" },
          { text: k("element"), bucketId: "element" },
          { text: k("mixture"), bucketId: "mixture" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "elements_intro",
    },
    {
      title: L("Metalle und Nichtmetalle", "Metals and Nonmetals", "Fémek és nemfémek", "Metale și nemetale"),
      text: L(
        "Metalle leiten Strom gut. Nichtmetalle tun das meist nicht.",
        "Metals conduct electricity well. Nonmetals usually do not.",
        "A fémek jól vezetik az áramot. A nemfémek többnyire nem.",
        "Metalele conduc bine electricitatea. Nemetalele, de obicei, nu."
      ),
      hint: L("Vergleiche Leitfähigkeit und Aussehen.", "Compare conductivity and appearance.", "Hasonlítsd össze a vezetést és a külalakot.", "Compară conductivitatea și aspectul."),
      bullet1: L("leitfähig", "conductive", "vezető", "conductiv"),
      bullet2: L("nicht leitfähig", "nonconductive", "nem vezető", "neconductiv"),
      labels: {
        metal: L("Metall", "Metal", "fém", "metal"),
        nonmetal: L("Nichtmetall", "Nonmetal", "nemfém", "nemetal"),
        shiny: L("glänzend", "shiny", "fényes", "strălucitor"),
        dull: L("matt", "dull", "tompa", "mat"),
      },
      svg: topicSvg("🪙", "Metals", "#10B981"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "metal", label: k("metal") },
          { id: "nonmetal", label: k("nonmetal") },
        ],
        items: [
          { text: k("shiny"), bucketId: "metal" },
          { text: k("dull"), bucketId: "nonmetal" },
          { text: k("metal"), bucketId: "metal" },
          { text: k("nonmetal"), bucketId: "nonmetal" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "metals_nonmetals",
    },
    {
      title: L("Elementsymbole", "Element Symbols", "Vegyjelek", "Simboluri chimice"),
      text: L(
        "Symbole sind kurze Zeichen für Elemente.",
        "Symbols are short signs for elements.",
        "A vegyjelek rövid jelek az elemekhez.",
        "Simbolurile sunt semne scurte pentru elemente."
      ),
      hint: L("Ein Symbol kann ein oder zwei Buchstaben haben.", "A symbol can have one or two letters.", "Egy vegyjel egy vagy két betűs lehet.", "Un simbol poate avea una sau două litere."),
      labels: {
        h: L("H", "H", "H", "H"),
        o: L("O", "O", "O", "O"),
        na: L("Na", "Na", "Na", "Na"),
        c: L("C", "C", "C", "C"),
        hydrogen: L("Wasserstoff", "Hydrogen", "hidrogén", "hidrogen"),
        oxygen: L("Sauerstoff", "Oxygen", "oxigén", "oxigen"),
      },
      svg: topicSvg("🔤", "Symbols", "#3B82F6"),
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: k("h"), right: k("hydrogen") },
          { left: k("o"), right: k("oxygen") },
          { left: k("na"), right: k("metal") },
          { left: k("c"), right: k("nonmetal") },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "symbols_intro",
    },
    {
      title: L("Periodensystem", "Periodic Table", "Periódusos rendszer", "Tabelul periodic"),
      text: L(
        "Das Periodensystem ordnet Elemente nach Eigenschaften.",
        "The periodic table groups elements by properties.",
        "A periódusos rendszer tulajdonságok szerint rendezi az elemeket.",
        "Tabelul periodic grupează elementele după proprietăți."
      ),
      hint: L("Zeilen heißen Perioden, Spalten Gruppen.", "Rows are periods, columns are groups.", "A sorok periódusok, az oszlopok csoportok.", "Rândurile sunt perioade, coloanele sunt grupe."),
      bullet1: L("Periode", "period", "periódus", "perioadă"),
      bullet2: L("Gruppe", "group", "csoport", "grupă"),
      labels: {
        row: L("Zeile", "row", "sor", "rând"),
        col: L("Spalte", "column", "oszlop", "coloană"),
        order: L("Ordnung", "order", "rendszer", "ordine"),
      },
      svg: topicSvg("🗂️", "Periodic", "#8B5CF6"),
      interactive: (k) => ({
        type: "word-order",
        words: [k("row"), k("col"), k("order")],
        correctOrder: [2, 0, 1],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "periodic_table_intro",
    },
  ],
};

const K6_I2: IslandSpec = {
  id: "i2",
  title: L("Teilchen und Verbindungen", "Particles and Compounds", "Részecskék és vegyületek", "Particule și compuși"),
  topics: [
    {
      title: L("Verbindungen", "Compounds", "Vegyületek", "Compuși"),
      text: L(
        "In Verbindungen sind Elemente chemisch verbunden.",
        "In compounds, elements are chemically joined.",
        "A vegyületekben az elemek kémiailag kapcsolódnak.",
        "În compuși, elementele sunt unite chimic."
      ),
      hint: L("Verbunden heißt nicht gemischt.", "Joined does not mean mixed.", "A kapcsolódás nem keverék.", "Unit nu înseamnă amestec."),
      labels: {
        joined: L("verbunden", "joined", "kapcsolódott", "unit"),
        mixed: L("gemischt", "mixed", "kevert", "amestecat"),
        compound: L("Verbindung", "compound", "vegyület", "compus"),
      },
      svg: topicSvg("🔗", "Compounds", "#F59E0B"),
      interactive: (k) => ({
        type: "gap-fill",
        sentence: k("joined"),
        choices: [k("mixed"), k("compound"), k("joined"), k("mixed")],
        correctIndex: 2,
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "compounds_intro",
    },
    {
      title: L("Moleküle", "Molecules", "Molekulák", "Molecule"),
      text: L(
        "Moleküle bestehen aus mehreren Atomen.",
        "Molecules are made of several atoms.",
        "A molekulák több atomból állnak.",
        "Moleculele sunt alcătuite din mai mulți atomi."
      ),
      hint: L("Ein Molekül kann aus gleichen oder verschiedenen Atomen bestehen.", "A molecule can contain the same or different atoms.", "A molekula lehet egyforma vagy különböző atomokból.", "O moleculă poate avea atomi la fel sau diferiți."),
      labels: {
        atom: L("Atom", "atom", "atom", "atom"),
        molecules: L("Moleküle", "molecules", "molekulák", "molecule"),
        many: L("mehrere", "several", "több", "mai mulți"),
      },
      svg: topicSvg("⚪", "Molecule", "#10B981"),
      interactive: (k) => ({
        type: "tap-count",
        tapCount: { emoji: "⚪", count: 4 },
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "molecules_intro",
    },
    {
      title: L("Atom oder Molekül", "Atom or Molecule", "Atom vagy molekula", "Atom sau moleculă"),
      text: L(
        "Ein Atom ist klein und einzeln. Ein Molekül hat mehr als ein Atom.",
        "An atom is a single tiny unit. A molecule has more than one atom.",
        "Az atom egyetlen kicsi részecske. A molekula több atomból áll.",
        "Un atom este o singură particulă mică. O moleculă are mai mulți atomi."
      ),
      hint: L("Achte auf die Anzahl der Atome.", "Look at the number of atoms.", "Figyeld az atomok számát.", "Privește numărul atomilor."),
      labels: {
        atom: L("Atom", "atom", "atom", "atom"),
        molecule: L("Molekül", "molecule", "molekula", "moleculă"),
        one: L("einzeln", "single", "egyedülálló", "singur"),
        many: L("mehrere", "many", "több", "mulți"),
      },
      svg: topicSvg("🧬", "Atom or Molecule", "#3B82F6"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "atom", label: k("atom") },
          { id: "molecule", label: k("molecule") },
        ],
        items: [
          { text: k("one"), bucketId: "atom" },
          { text: k("many"), bucketId: "molecule" },
          { text: k("atom"), bucketId: "atom" },
          { text: k("molecule"), bucketId: "molecule" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "atoms_vs_molecules",
    },
    {
      title: L("Element oder Verbindung", "Element or Compound", "Elem vagy vegyület", "Element sau compus"),
      text: L(
        "Elemente haben nur eine Atomsorte. Verbindungen haben mehrere.",
        "Elements have one type of atom. Compounds have more than one.",
        "Az elemek egyféle atomot tartalmaznak. A vegyületek többet.",
        "Elementele au un singur tip de atom. Compușii au mai multe tipuri."
      ),
      hint: L("Eine Verbindung ist kein Element.", "A compound is not an element.", "A vegyület nem elem.", "Un compus nu este un element."),
      labels: {
        element: L("Element", "element", "elem", "element"),
        compound: L("Verbindung", "compound", "vegyület", "compus"),
        one: L("eine Atomsorte", "one atom type", "egyféle atom", "un tip de atom"),
        many: L("mehrere Atomarten", "several atom types", "többféle atom", "mai multe tipuri de atomi"),
      },
      svg: topicSvg("🧪", "Element vs Compound", "#EC4899"),
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: k("element"), right: k("one") },
          { left: k("compound"), right: k("many") },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "element_vs_compound",
    },
    {
      title: L("Gemisch oder Verbindung", "Mixture or Compound", "Keverék vagy vegyület", "Amestec sau compus"),
      text: L(
        "Gemische kann man oft trennen. Verbindungen sind chemisch verbunden.",
        "Mixtures can often be separated. Compounds are chemically joined.",
        "A keverékeket gyakran szét lehet választani. A vegyületek kémiailag kötöttek.",
        "Amestecurile pot fi separate. Compușii sunt uniți chimic."
      ),
      hint: L("Trennbar oder chemisch verbunden?", "Separatable or chemically joined?", "Szétválasztható vagy kémiailag kapcsolt?", "Separabil sau unit chimic?"),
      labels: {
        mixture: L("Gemisch", "mixture", "keverék", "amestec"),
        compound: L("Verbindung", "compound", "vegyület", "compus"),
        separable: L("trennbar", "separable", "szétválasztható", "separabil"),
        joined: L("verbunden", "joined", "kapcsolt", "unit"),
      },
      svg: topicSvg("🧫", "Mixture or Compound", "#14B8A6"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "mixture", label: k("mixture") },
          { id: "compound", label: k("compound") },
        ],
        items: [
          { text: k("separable"), bucketId: "mixture" },
          { text: k("joined"), bucketId: "compound" },
          { text: k("mixture"), bucketId: "mixture" },
          { text: k("compound"), bucketId: "compound" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "mixture_vs_compound",
    },
  ],
};

const K6_I3: IslandSpec = {
  id: "i3",
  title: L("Reaktionen verstehen", "Understanding Reactions", "Reakciók megértése", "Înțelegerea reacțiilor"),
  topics: [
    {
      title: L("Edukte und Produkte", "Reactants and Products", "Kiindulási anyagok és termékek", "Reactanți și produși"),
      text: L(
        "Am Anfang stehen Edukte. Am Ende entstehen Produkte.",
        "Reactants are at the start. Products appear at the end.",
        "Az elején kiindulási anyagok vannak. A végén termékek keletkeznek.",
        "La început sunt reactanții. La final apar produșii."
      ),
      hint: L("Vorher und nachher vergleichen.", "Compare before and after.", "Hasonlítsd össze az elején és végén.", "Compară înainte și după."),
      labels: {
        reactants: L("Edukte", "reactants", "kiindulási anyagok", "reactanți"),
        products: L("Produkte", "products", "termékek", "produși"),
        before: L("vorher", "before", "előtte", "înainte"),
        after: L("nachher", "after", "utána", "după"),
      },
      svg: topicSvg("⚗️", "Reaction", "#10B981"),
      interactive: (k) => ({
        type: "word-order",
        words: [k("before"), k("reactants"), k("after"), k("products")],
        correctOrder: [0, 1, 2, 3],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "reactants_products",
    },
    {
      title: L("Energie bei Reaktionen", "Energy in Reactions", "Energia a reakciókban", "Energia în reacții"),
      text: L(
        "Manche Reaktionen geben Energie ab, andere brauchen Energie.",
        "Some reactions release energy, others need energy.",
        "Van, ami energiát ad le, más reakció energiafelvételt igényel.",
        "Unele reacții eliberează energie, altele au nevoie de energie."
      ),
      hint: L("Wärme und Licht sind wichtige Hinweise.", "Heat and light are important clues.", "A hő és a fény fontos jel.", "Căldura și lumina sunt indicii importante."),
      labels: {
        release: L("Energie abgeben", "release energy", "energiát ad le", "eliberează energie"),
        need: L("Energie brauchen", "need energy", "energiát igényel", "are nevoie de energie"),
        heat: L("Wärme", "heat", "hő", "căldură"),
        light: L("Licht", "light", "fény", "lumină"),
      },
      svg: topicSvg("🔥", "Energy", "#F97316"),
      interactive: (k) => ({
        type: "highlight-text",
        tokens: [k("release"), k("heat"), k("light"), k("need")],
        correctIndices: [0, 1, 2],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "reaction_energy",
    },
    {
      title: L("Verbrennung", "Combustion", "Égés", "Combustie"),
      text: L(
        "Bei der Verbrennung reagieren Stoffe mit Sauerstoff.",
        "In combustion, substances react with oxygen.",
        "Az égésnél az anyagok oxigénnel reagálnak.",
        "La combustie, substanțele reacționează cu oxigenul."
      ),
      hint: L("Sauerstoff ist fast immer nötig.", "Oxygen is almost always needed.", "Az oxigén szinte mindig kell.", "Oxigenul este aproape întotdeauna necesar."),
      labels: {
        oxygen: L("Sauerstoff", "oxygen", "oxigén", "oxigen"),
        fuel: L("Brennstoff", "fuel", "üzemanyag", "combustibil"),
        flame: L("Flamme", "flame", "láng", "flacără"),
        ash: L("Asche", "ash", "hamu", "cenușă"),
      },
      svg: topicSvg("🔥", "Combustion", "#EF4444"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "needed", label: k("oxygen") },
          { id: "result", label: k("ash") },
        ],
        items: [
          { text: k("fuel"), bucketId: "needed" },
          { text: k("oxygen"), bucketId: "needed" },
          { text: k("flame"), bucketId: "result" },
          { text: k("ash"), bucketId: "result" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "combustion_reactions",
    },
    {
      title: L("Zerlegung", "Decomposition", "Bomlás", "Descompunere"),
      text: L(
        "Bei einer Zerlegung entsteht aus einem Stoff mehr als einer.",
        "In a decomposition, one substance breaks into more than one.",
        "Bomláskor egy anyagból több anyag lesz.",
        "La descompunere, o substanță se desparte în mai multe."
      ),
      hint: L("Aus eins werden mehrere.", "One becomes many.", "Egyből több lesz.", "Din unul devin mai multe."),
      labels: {
        one: L("ein Stoff", "one substance", "egy anyag", "o substanță"),
        many: L("mehrere Stoffe", "several substances", "több anyag", "mai multe substanțe"),
        split: L("zerlegt", "breaks apart", "szétbomlik", "se descompune"),
      },
      svg: topicSvg("🧱", "Decomposition", "#8B5CF6"),
      interactive: (k) => ({
        type: "sentence-build",
        fragments: [k("one"), k("split"), k("many")],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "decomposition_intro",
    },
    {
      title: L("Wortgleichungen", "Word Equations", "Szöveges egyenletek", "Ecuații în cuvinte"),
      text: L(
        "Wortgleichungen zeigen Reaktionspartner mit Worten.",
        "Word equations show reaction partners in words.",
        "A szöveges egyenletek szavakkal mutatják a résztvevőket.",
        "Ecuațiile în cuvinte arată reactanții și produșii cu cuvinte."
      ),
      hint: L("Links steht oft das Vorher, rechts das Nachher.", "The left side is often before, the right side after.", "Bal oldalon gyakran az előtte, jobb oldalon az utána áll.", "În stânga e adesea înaintea, în dreapta după."),
      labels: {
        left: L("links", "left", "balra", "stânga"),
        right: L("rechts", "right", "jobbra", "dreapta"),
        arrow: L("Pfeil", "arrow", "nyíl", "săgeată"),
        equation: L("Gleichung", "equation", "egyenlet", "ecuație"),
      },
      svg: topicSvg("➗", "Word Equations", "#3B82F6"),
      interactive: (k) => ({
        type: "gap-fill",
        sentence: k("equation"),
        choices: [k("left"), k("right"), k("arrow"), k("equation")],
        correctIndex: 3,
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "word_equations",
    },
  ],
};

const K6_I4: IslandSpec = {
  id: "i4",
  title: L("Säuren und Basen", "Acids and Bases", "Savak és bázisok", "Acizi și baze"),
  topics: [
    {
      title: L("Säuren im Alltag", "Acids in Everyday Life", "Savak a hétköznapokban", "Acizi în viața de zi cu zi"),
      text: L(
        "Säuren kommen in Lebensmitteln und Reinigern vor.",
        "Acids appear in foods and cleaners.",
        "A savak ételekben és tisztítószerekben is előfordulnak.",
        "Acizii apar în alimente și produse de curățare."
      ),
      hint: L("Zitrone und Essig sind bekannte Beispiele.", "Lemon and vinegar are well-known examples.", "A citrom és az ecet ismert példa.", "Lămâia și oțetul sunt exemple cunoscute."),
      labels: {
        lemon: L("Zitrone", "lemon", "citrom", "lămâie"),
        vinegar: L("Essig", "vinegar", "ecet", "oțet"),
        acid: L("Säure", "acid", "sav", "acid"),
      },
      svg: topicSvg("🍋", "Acids", "#F59E0B"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "acid", label: k("acid") },
          { id: "base", label: k("base") },
        ],
        items: [
          { text: k("lemon"), bucketId: "acid" },
          { text: k("vinegar"), bucketId: "acid" },
          { text: k("acid"), bucketId: "acid" },
          { text: k("soap"), bucketId: "base" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "acids_everyday",
    },
    {
      title: L("Basen im Alltag", "Bases in Everyday Life", "Bázisok a hétköznapokban", "Baze în viața de zi cu zi"),
      text: L(
        "Basen stecken in Seife, Waschmitteln und manchen Reinigern.",
        "Bases are found in soap, detergents, and some cleaners.",
        "A bázisok szappanban, mosószerben és bizonyos tisztítókban vannak.",
        "Bazele se găsesc în săpun, detergenți și unele soluții de curățare."
      ),
      hint: L("Basen fühlen sich oft seifig an.", "Bases often feel soapy.", "A bázisok gyakran szappanos tapintásúak.", "Bazele se simt adesea alunecoase."),
      labels: {
        soap: L("Seife", "soap", "szappan", "săpun"),
        detergent: L("Waschmittel", "detergent", "mosószer", "detergent"),
        base: L("Base", "base", "bázis", "bază"),
      },
      svg: topicSvg("🫧", "Bases", "#3B82F6"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "base", label: k("base") },
          { id: "notbase", label: k("acid") },
        ],
        items: [
          { text: k("soap"), bucketId: "base" },
          { text: k("detergent"), bucketId: "base" },
          { text: k("base"), bucketId: "base" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "bases_everyday",
    },
    {
      title: L("Indikatoren", "Indicators", "Indikátorok", "Indicatori"),
      text: L(
        "Indikatoren zeigen, ob etwas sauer oder basisch ist.",
        "Indicators show whether something is acidic or basic.",
        "Az indikátorok megmutatják, hogy valami savas vagy bázikus.",
        "Indicatorii arată dacă ceva este acid sau bazic."
      ),
      hint: L("Farbwechsel ist ein wichtiges Zeichen.", "Color change is a key clue.", "A színváltozás fontos jel.", "Schimbarea culorii este un indiciu important."),
      labels: {
        color: L("Farbe", "color", "szín", "culoare"),
        acid: L("sauer", "acidic", "savas", "acid"),
        base: L("basisch", "basic", "lúgos", "bazic"),
      },
      svg: topicSvg("🎨", "Indicators", "#EC4899"),
      interactive: (k) => ({
        type: "highlight-text",
        tokens: [k("acid"), k("base"), k("color")],
        correctIndices: [0, 1, 2],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "indicators_intro",
    },
    {
      title: L("pH-Skala", "pH Scale", "pH-skála", "Scara pH"),
      text: L(
        "Die pH-Skala reicht von sauer bis basisch.",
        "The pH scale goes from acidic to basic.",
        "A pH-skála a savastól a bázikusig terjed.",
        "Scara pH merge de la acid la bazic."
      ),
      hint: L("Die Mitte ist neutral.", "The middle is neutral.", "Középen a semleges érték van.", "La mijloc este neutru."),
      bullet1: L("0-6 sauer", "0-6 acidic", "0-6 savas", "0-6 acid"),
      bullet2: L("7 neutral", "7 neutral", "7 semleges", "7 neutru"),
      labels: {
        acid: L("sauer", "acidic", "savas", "acid"),
        neutral: L("neutral", "neutral", "semleges", "neutru"),
        base: L("basisch", "basic", "lúgos", "bazic"),
      },
      svg: topicSvg("📏", "pH", "#8B5CF6"),
      interactive: (k) => ({
        type: "label-diagram",
        areas: [
          { id: "acid", x: 15, y: 50, label: k("acid") },
          { id: "neutral", x: 50, y: 50, label: k("neutral") },
          { id: "base", x: 84, y: 50, label: k("base") },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "ph_scale_intro",
    },
    {
      title: L("Neutralisation", "Neutralization", "Semlegesítés", "Neutralizare"),
      text: L(
        "Bei der Neutralisation reagieren Säure und Base miteinander.",
        "In neutralization, an acid and a base react together.",
        "A semlegesítésnél sav és bázis reagál egymással.",
        "La neutralizare, un acid și o bază reacționează împreună."
      ),
      hint: L("Am Ende wird es oft weniger sauer.", "At the end it often becomes less acidic.", "A végén gyakran kevésbé savas lesz.", "La final devine adesea mai puțin acid."),
      labels: {
        acid: L("Säure", "acid", "sav", "acid"),
        base: L("Base", "base", "bázis", "bază"),
        neutral: L("neutral", "neutral", "semleges", "neutru"),
        mix: L("mischen", "mix", "keverés", "amestec"),
      },
      svg: topicSvg("⚗️", "Neutralization", "#10B981"),
      interactive: (k) => ({
        type: "sentence-build",
        fragments: [k("acid"), k("mix"), k("base"), k("neutral")],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "neutralization_intro",
    },
  ],
};

const K6_I5: IslandSpec = {
  id: "i5",
  title: L("Lösungen und Trennmethoden", "Solutions and Separation", "Oldatok és elválasztás", "Soluții și separare"),
  topics: [
    {
      title: L("Löslichkeit", "Solubility", "Oldhatóság", "Solubilitate"),
      text: L(
        "Nicht jeder Stoff löst sich gleich gut in Wasser.",
        "Not every substance dissolves equally well in water.",
        "Nem minden anyag oldódik egyformán jól vízben.",
        "Nu orice substanță se dizolvă la fel de bine în apă."
      ),
      hint: L("Temperatur kann helfen.", "Temperature can help.", "A hőmérséklet segíthet.", "Temperatura poate ajuta."),
      labels: {
        dissolve: L("lösen", "dissolve", "oldódik", "se dizolvă"),
        water: L("Wasser", "water", "víz", "apă"),
        salt: L("Salz", "salt", "só", "sare"),
      },
      svg: topicSvg("💧", "Solubility", "#3B82F6"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "soluble", label: k("dissolve") },
          { id: "insoluble", label: k("water") },
        ],
        items: [
          { text: k("salt"), bucketId: "soluble" },
          { text: k("water"), bucketId: "insoluble" },
          { text: k("dissolve"), bucketId: "soluble" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "solubility_intro",
    },
    {
      title: L("Konzentration", "Concentration", "Koncentráció", "Concentrație"),
      text: L(
        "Eine Lösung kann mehr oder weniger gelöstes Material enthalten.",
        "A solution can contain more or less dissolved material.",
        "Egy oldat több vagy kevesebb oldott anyagot tartalmazhat.",
        "O soluție poate conține mai mult sau mai puțin material dizolvat."
      ),
      hint: L("Mehr gelöstes Material = konzentrierter.", "More dissolved material = more concentrated.", "Több oldott anyag = töményebb.", "Mai mult material dizolvat = mai concentrat."),
      labels: {
        weak: L("verdünnt", "dilute", "híg", "diluat"),
        strong: L("konzentriert", "concentrated", "tömény", "concentrat"),
        more: L("mehr", "more", "több", "mai mult"),
        less: L("weniger", "less", "kevesebb", "mai puțin"),
      },
      svg: topicSvg("🧴", "Concentration", "#8B5CF6"),
      interactive: (k) => ({
        type: "word-order",
        words: [k("less"), k("more"), k("weak"), k("strong")],
        correctOrder: [0, 1, 2, 3],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "concentration_basic",
    },
    {
      title: L("Kristallisation", "Crystallization", "Kristályosítás", "Cristalizare"),
      text: L(
        "Wenn Wasser verdunstet, können Kristalle entstehen.",
        "When water evaporates, crystals can form.",
        "Ha a víz elpárolog, kristályok keletkezhetnek.",
        "Când apa se evaporă, pot apărea cristale."
      ),
      hint: L("Salz und Zucker können Kristalle bilden.", "Salt and sugar can form crystals.", "A só és a cukor is képezhet kristályt.", "Sarea și zahărul pot forma cristale."),
      labels: {
        crystal: L("Kristall", "crystal", "kristály", "cristal"),
        evaporate: L("verdunsten", "evaporate", "elpárolog", "se evaporă"),
        salt: L("Salz", "salt", "só", "sare"),
      },
      svg: topicSvg("💎", "Crystals", "#14B8A6"),
      interactive: (k) => ({
        type: "sentence-build",
        fragments: [k("salt"), k("evaporate"), k("crystal")],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "crystallization",
    },
    {
      title: L("Destillation", "Distillation", "Desztilláció", "Distilare"),
      text: L(
        "Destillation trennt Stoffe mit unterschiedlichem Siedepunkt.",
        "Distillation separates substances with different boiling points.",
        "A desztilláció különböző forráspontú anyagokat választ szét.",
        "Distilarea separă substanțe cu puncte de fierbere diferite."
      ),
      hint: L("Verdampfen und wieder abkühlen gehören dazu.", "Evaporating and cooling back are part of it.", "Elpárologtatás és visszahűtés is része.", "Evaporarea și răcirea fac parte din proces."),
      labels: {
        boil: L("sieden", "boil", "forr", "fierbe"),
        cool: L("abkühlen", "cool", "lehűl", "se răcește"),
        separate: L("trennen", "separate", "szétválaszt", "separă"),
      },
      svg: topicSvg("🌡️", "Distillation", "#F97316"),
      interactive: (k) => ({
        type: "word-order",
        words: [k("boil"), k("cool"), k("separate")],
        correctOrder: [0, 1, 2],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "distillation_intro",
    },
    {
      title: L("Chromatografie", "Chromatography", "Kromatográfia", "Cromatografie"),
      text: L(
        "Chromatografie trennt Stoffe in einem Gemisch.",
        "Chromatography separates substances in a mixture.",
        "A kromatográfia egy keverék anyagait választja szét.",
        "Cromatografia separă substanțele dintr-un amestec."
      ),
      hint: L("Farbstoffe laufen unterschiedlich weit.", "Dyes travel different distances.", "A színezékek eltérő távolságra jutnak.", "Culorile merg pe distanțe diferite."),
      labels: {
        dye: L("Farbstoff", "dye", "színezék", "colorant"),
        paper: L("Papier", "paper", "papír", "hârtie"),
        line: L("Linie", "line", "vonal", "linie"),
      },
      svg: topicSvg("📄", "Chromatography", "#EC4899"),
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: k("dye"), right: k("paper") },
          { left: k("line"), right: k("dye") },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "chromatography_intro",
    },
  ],
};

const K6_I6: IslandSpec = {
  id: "i6",
  title: L("Chemie und Umwelt", "Chemistry and Environment", "Kémia és környezet", "Chimie și mediu"),
  topics: [
    {
      title: L("Wasserreinigung", "Water Purification", "Víztisztítás", "Purificarea apei"),
      text: L(
        "Sauberes Wasser entsteht durch mehrere Reinigungsschritte.",
        "Clean water is made through several purification steps.",
        "A tiszta víz több tisztítási lépésből jön létre.",
        "Apa curată se obține prin mai multe etape de curățare."
      ),
      hint: L("Filtern und Absetzen sind wichtige Schritte.", "Filtering and settling are important steps.", "A szűrés és az ülepedés fontos lépés.", "Filtrarea și decantarea sunt pași importanți."),
      labels: {
        filter: L("filtern", "filter", "szűrni", "filtrare"),
        settle: L("absetzen", "settle", "leülepedik", "sedimentare"),
        clean: L("sauber", "clean", "tiszta", "curat"),
      },
      svg: topicSvg("🚰", "Water", "#3B82F6"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "clean", label: k("clean") },
          { id: "step", label: k("filter") },
        ],
        items: [
          { text: k("filter"), bucketId: "step" },
          { text: k("settle"), bucketId: "step" },
          { text: k("clean"), bucketId: "clean" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "water_purification",
    },
    {
      title: L("Luftverschmutzung", "Air Pollution", "Légszennyezés", "Poluarea aerului"),
      text: L(
        "Schadstoffe in der Luft sind ein Umweltproblem.",
        "Pollutants in the air are an environmental problem.",
        "A levegő szennyező anyagai környezeti problémát jelentenek.",
        "Poluanții din aer sunt o problemă de mediu."
      ),
      hint: L("Rauch und Abgase sind Beispiele.", "Smoke and exhaust gases are examples.", "A füst és a kipufogógáz példák.", "Fumul și gazele de eșapament sunt exemple."),
      labels: {
        smoke: L("Rauch", "smoke", "füst", "fum"),
        exhaust: L("Abgas", "exhaust gas", "kipufogógáz", "gaz de eșapament"),
        cleanAir: L("saubere Luft", "clean air", "tiszta levegő", "aer curat"),
      },
      svg: topicSvg("🌫️", "Air", "#94A3B8"),
      interactive: (k) => ({
        type: "highlight-text",
        tokens: [k("smoke"), k("exhaust"), k("cleanAir")],
        correctIndices: [0, 1],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "air_pollution_intro",
    },
    {
      title: L("Recycling", "Recycling", "Újrahasznosítás", "Reciclare"),
      text: L(
        "Recycling hilft, Stoffe wiederzuverwenden.",
        "Recycling helps reuse materials.",
        "Az újrahasznosítás segít az anyagok újrafelhasználásában.",
        "Reciclarea ajută la refolosirea materialelor."
      ),
      hint: L("Papier, Glas und Metall sind typische Beispiele.", "Paper, glass and metal are typical examples.", "A papír, az üveg és a fém tipikus példák.", "Hârtia, sticla și metalul sunt exemple tipice."),
      labels: {
        paper: L("Papier", "paper", "papír", "hârtie"),
        glass: L("Glas", "glass", "üveg", "sticlă"),
        metal: L("Metall", "metal", "fém", "metal"),
        recycle: L("recyceln", "recycle", "újrahasznosít", "reciclează"),
      },
      svg: topicSvg("♻️", "Recycling", "#10B981"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "recycle", label: k("recycle") },
          { id: "other", label: k("paper") },
        ],
        items: [
          { text: k("paper"), bucketId: "recycle" },
          { text: k("glass"), bucketId: "recycle" },
          { text: k("metal"), bucketId: "recycle" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "recycling_materials",
    },
    {
      title: L("Fossil oder erneuerbar", "Fossil or Renewable", "Fosszilis vagy megújuló", "Fosil sau regenerabil"),
      text: L(
        "Energiequellen können fossil oder erneuerbar sein.",
        "Energy sources can be fossil or renewable.",
        "Az energiaforrás lehet fosszilis vagy megújuló.",
        "Sursele de energie pot fi fosile sau regenerabile."
      ),
      hint: L("Sonne und Wind sind erneuerbar.", "Sun and wind are renewable.", "A nap és a szél megújuló.", "Soarele și vântul sunt regenerabile."),
      labels: {
        fossil: L("fossil", "fossil", "fosszilis", "fosil"),
        renewable: L("erneuerbar", "renewable", "megújuló", "regenerabil"),
        sun: L("Sonne", "sun", "nap", "soare"),
        coal: L("Kohle", "coal", "szén", "cărbune"),
      },
      svg: topicSvg("☀️", "Energy", "#F59E0B"),
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: k("sun"), right: k("renewable") },
          { left: k("coal"), right: k("fossil") },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "fossil_vs_renewable",
    },
    {
      title: L("Sicherheit zu Hause", "Chemistry Safety at Home", "Kémiai biztonság otthon", "Siguranță chimică acasă"),
      text: L(
        "Beim Umgang mit Reinigern braucht man Vorsicht.",
        "You need care when using cleaners.",
        "A tisztítószereknél óvatosan kell bánni az anyagokkal.",
        "Este nevoie de atenție când folosești soluții de curățare."
      ),
      hint: L("Etiketten lesen und nicht mischen.", "Read labels and do not mix them.", "Olvasd el a címkét és ne keverd össze.", "Citește etichetele și nu le amesteca."),
      labels: {
        label: L("Etikett", "label", "címke", "etichetă"),
        mix: L("mischen", "mix", "keverni", "amesteca"),
        safe: L("sicher", "safe", "biztonságos", "sigur"),
      },
      svg: topicSvg("🧤", "Safety", "#EC4899"),
      interactive: (k) => ({
        type: "gap-fill",
        sentence: k("safe"),
        choices: [k("label"), k("mix"), k("safe"), k("label")],
        correctIndex: 2,
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "chemistry_safety_home",
    },
  ],
};

const K6_I7: IslandSpec = {
  id: "i7",
  title: L("Stoffe im Überblick", "Materials Overview", "Anyagok áttekintése", "Materiale în rezumat"),
  topics: [
    {
      title: L("Atom, Element, Verbindung", "Atom, Element, Compound", "Atom, elem, vegyület", "Atom, element, compus"),
      text: L(
        "Wir ordnen die kleinsten Bausteine der Chemie.",
        "We sort the smallest building blocks of chemistry.",
        "Rendezzük a kémia legkisebb építőköveit.",
        "Clasificăm cele mai mici blocuri ale chimiei."
      ),
      hint: L("Denk an Teilchen und Symbole.", "Think of particles and symbols.", "Gondolj a részecskékre és a jelekre.", "Gândește-te la particule și simboluri."),
      labels: {
        atom: L("Atom", "atom", "atom", "atom"),
        element: L("Element", "element", "elem", "element"),
        compound: L("Verbindung", "compound", "vegyület", "compus"),
      },
      svg: topicSvg("🧱", "Structure", "#6366F1"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "atom", label: k("atom") },
          { id: "element", label: k("element") },
          { id: "compound", label: k("compound") },
        ],
        items: [
          { text: k("atom"), bucketId: "atom" },
          { text: k("element"), bucketId: "element" },
          { text: k("compound"), bucketId: "compound" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "atom_model_intro",
    },
    {
      title: L("Molekülbau", "Molecule Building", "Molekulaépítés", "Construirea moleculelor"),
      text: L(
        "Moleküle verbinden Atome zu Gruppen.",
        "Molecules connect atoms into groups.",
        "A molekulák atomokat kapcsolnak csoportokká.",
        "Moleculele unesc atomii în grupuri."
      ),
      hint: L("Verbindungen sind feste Gruppen.", "Compounds are fixed groups.", "A vegyületek rögzített csoportok.", "Compușii sunt grupuri fixe."),
      labels: {
        group: L("Gruppe", "group", "csoport", "grup"),
        atom: L("Atom", "atom", "atom", "atom"),
        molecule: L("Molekül", "molecule", "molekulă", "moleculă"),
      },
      svg: topicSvg("🧬", "Molecules", "#14B8A6"),
      interactive: (k) => ({
        type: "sentence-build",
        fragments: [k("atom"), k("group"), k("molecule")],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "molecules_intro",
    },
    {
      title: L("Gemische erkennen", "Recognizing Mixtures", "Keverék felismerése", "Recunoașterea amestecurilor"),
      text: L(
        "Gemische lassen sich oft trennen.",
        "Mixtures can often be separated.",
        "A keverékeket gyakran szét lehet választani.",
        "Amestecurile pot fi separate adesea."
      ),
      hint: L("Mischungen sind nicht chemisch gebunden.", "Mixtures are not chemically bound.", "A keverékek nem kémiailag kötöttek.", "Amestecurile nu sunt legate chimic."),
      labels: {
        mixture: L("Gemisch", "mixture", "keverék", "amestec"),
        separate: L("trennen", "separate", "szétválasztani", "separare"),
        bound: L("gebunden", "bound", "kötött", "legat"),
      },
      svg: topicSvg("🧫", "Mixtures", "#F97316"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "mix", label: k("mixture") },
          { id: "sep", label: k("separate") },
        ],
        items: [
          { text: k("bound"), bucketId: "mix" },
          { text: k("separate"), bucketId: "sep" },
          { text: k("mixture"), bucketId: "mix" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "mixture_vs_compound",
    },
    {
      title: L("Symbole wiederholen", "Symbol Review", "Vegyjel ismétlés", "Recapitulare simboluri"),
      text: L(
        "Symbole helfen beim schnellen Erkennen.",
        "Symbols help with quick recognition.",
        "A vegyjelek segítenek a gyors felismerésben.",
        "Simbolurile ajută la recunoașterea rapidă."
      ),
      hint: L("Kurz und eindeutig ist wichtig.", "Short and clear matters.", "A rövid és egyértelmű fontos.", "Scurt și clar este important."),
      labels: {
        short: L("kurz", "short", "rövid", "scurt"),
        clear: L("eindeutig", "clear", "egyértelmű", "clar"),
        symbol: L("Symbol", "symbol", "vegyjel", "simbol"),
      },
      svg: topicSvg("🔤", "Symbols", "#3B82F6"),
      interactive: (k) => ({
        type: "gap-fill",
        sentence: k("symbol"),
        choices: [k("short"), k("clear"), k("symbol"), k("short")],
        correctIndex: 2,
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "symbols_intro",
    },
    {
      title: L("Periodensystem-Check", "Periodic Check", "Periódusos ellenőrzés", "Verificare periodică"),
      text: L(
        "Gruppen und Perioden wiederholen wir zum Schluss.",
        "We review groups and periods at the end.",
        "A csoportokat és periódusokat a végén ismételjük.",
        "Revedem grupele și perioadele la final."
      ),
      hint: L("Spalten und Reihen nicht verwechseln.", "Do not mix up rows and columns.", "Ne keverd össze a sorokat és oszlopokat.", "Nu confunda rândurile cu coloanele."),
      labels: {
        row: L("Reihe", "row", "sor", "rând"),
        col: L("Spalte", "column", "oszlop", "coloană"),
        table: L("Tabelle", "table", "táblázat", "tabel"),
      },
      svg: topicSvg("🗃️", "Periodic", "#EC4899"),
      interactive: (k) => ({
        type: "label-diagram",
        areas: [
          { id: "row", x: 25, y: 55, label: k("row") },
          { id: "col", x: 75, y: 40, label: k("col") },
          { id: "table", x: 50, y: 20, label: k("table") },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "periodic_table_intro",
    },
  ],
};

const K6_I8: IslandSpec = {
  id: "i8",
  title: L("Reaktionen wiederholen", "Reaction Review", "Reakció-ismétlés", "Recapitulare reacții"),
  topics: [
    {
      title: L("Reaktionspartner", "Reaction Partners", "Reakciópartnerek", "Parteneri de reacție"),
      text: L(
        "Edukte und Produkte gehören zusammen.",
        "Reactants and products belong together.",
        "Az eduktok és termékek összetartoznak.",
        "Reactanții și produșii merg împreună."
      ),
      hint: L("Vorher und nachher lesen.", "Read before and after.", "Olvasd el az előtte és utána részt.", "Citește înainte și după."),
      labels: {
        before: L("vorher", "before", "előtte", "înainte"),
        after: L("nachher", "after", "utána", "după"),
        partner: L("Partner", "partner", "partner", "partener"),
      },
      svg: topicSvg("💥", "Reactions", "#10B981"),
      interactive: (k) => ({
        type: "word-order",
        words: [k("before"), k("partner"), k("after")],
        correctOrder: [0, 1, 2],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "reactants_products",
    },
    {
      title: L("Verbrennung im Alltag", "Combustion in Everyday Life", "Égés a hétköznapokban", "Combustie în viața de zi cu zi"),
      text: L(
        "Kerzen, Heizungen und Motoren nutzen Verbrennung.",
        "Candles, heaters and engines use combustion.",
        "A gyertya, a fűtés és a motor égést használ.",
        "Lumânările, încălzitoarele și motoarele folosesc combustia."
      ),
      hint: L("Brennstoff plus Sauerstoff.", "Fuel plus oxygen.", "Üzemanyag plusz oxigén.", "Combustibil plus oxigen."),
      labels: {
        candle: L("Kerze", "candle", "gyertya", "lumânare"),
        heater: L("Heizung", "heater", "fűtés", "încălzitor"),
        engine: L("Motor", "engine", "motor", "motor"),
      },
      svg: topicSvg("🕯️", "Combustion", "#F97316"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "burn", label: k("engine") },
          { id: "notburn", label: k("heater") },
        ],
        items: [
          { text: k("candle"), bucketId: "burn" },
          { text: k("heater"), bucketId: "burn" },
          { text: k("engine"), bucketId: "burn" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "combustion_reactions",
    },
    {
      title: L("Säure + Base", "Acid + Base", "Sav + bázis", "Acid + bază"),
      text: L(
        "Neutralisation macht Lösungen oft weniger sauer.",
        "Neutralization often makes solutions less acidic.",
        "A semlegesítés gyakran kevésbé savas oldatot ad.",
        "Neutralizarea face soluțiile adesea mai puțin acide."
      ),
      hint: L("Am Ende steht meistens Salz und Wasser.", "At the end there is usually salt and water.", "A végén többnyire só és víz lesz.", "La final apare de obicei sare și apă."),
      labels: {
        salt: L("Salz", "salt", "só", "sare"),
        water: L("Wasser", "water", "víz", "apă"),
        less: L("weniger sauer", "less acidic", "kevésbé savas", "mai puțin acid"),
      },
      svg: topicSvg("🧂", "Neutralization", "#3B82F6"),
      interactive: (k) => ({
        type: "sentence-build",
        fragments: [k("salt"), k("water"), k("less")],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "neutralization_intro",
    },
    {
      title: L("Wortgleichungen üben", "Practice Word Equations", "Szöveges egyenletek gyakorlása", "Exersare ecuații în cuvinte"),
      text: L(
        "Wir lesen Reaktionen als Wortketten.",
        "We read reactions as word chains.",
        "A reakciókat szókapcsolatokként olvassuk.",
        "Citim reacțiile ca șiruri de cuvinte."
      ),
      hint: L("Wort für Wort lesen.", "Read word by word.", "Szóról szóra olvasd.", "Citește cuvânt cu cuvânt."),
      labels: {
        word: L("Wort", "word", "szó", "cuvânt"),
        chain: L("Kette", "chain", "lánc", "șir"),
        reaction: L("Reaktion", "reaction", "reakció", "reacție"),
      },
      svg: topicSvg("➰", "Word Equations", "#8B5CF6"),
      interactive: (k) => ({
        type: "gap-fill",
        sentence: k("reaction"),
        choices: [k("word"), k("chain"), k("reaction"), k("word")],
        correctIndex: 2,
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "word_equations",
    },
    {
      title: L("Reaktionsarten", "Reaction Types", "Reakciótípusok", "Tipuri de reacții"),
      text: L(
        "Verbrennung, Zerlegung und Neutralisation sind wichtige Arten.",
        "Combustion, decomposition and neutralization are important types.",
        "Az égés, bomlás és semlegesítés fontos reakciótípus.",
        "Combustia, descompunerea și neutralizarea sunt tipuri importante."
      ),
      hint: L("Drei Namen merken: Verbrennung, Zerlegung, Neutralisation.", "Remember three names: combustion, decomposition, neutralization.", "Három név: égés, bomlás, semlegesítés.", "Ține minte trei nume: combustie, descompunere, neutralizare."),
      labels: {
        combustion: L("Verbrennung", "combustion", "égés", "combustie"),
        decomposition: L("Zerlegung", "decomposition", "bomlás", "descompunere"),
        neutralization: L("Neutralisation", "neutralization", "semlegesítés", "neutralizare"),
      },
      svg: topicSvg("📚", "Types", "#6366F1"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "type", label: k("combustion") },
          { id: "type2", label: k("decomposition") },
          { id: "type3", label: k("neutralization") },
        ],
        items: [
          { text: k("combustion"), bucketId: "type" },
          { text: k("decomposition"), bucketId: "type2" },
          { text: k("neutralization"), bucketId: "type3" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "decomposition_intro",
    },
  ],
};

const K6_I9: IslandSpec = {
  id: "i9",
  title: L("Labor und Umwelt", "Lab and Environment", "Labor és környezet", "Laborator și mediu"),
  topics: [
    {
      title: L("Laborregeln", "Lab Rules", "Labor szabályok", "Reguli de laborator"),
      text: L(
        "Im Labor gilt: vorsichtig, sauber und genau arbeiten.",
        "In the lab: work carefully, cleanly and precisely.",
        "A laborban óvatosan, tisztán és pontosan dolgozunk.",
        "În laborator: lucrezi atent, curat și precis."
      ),
      hint: L("Schutzbrille und Ruhe sind wichtig.", "Safety glasses and calm behavior matter.", "A védőszemüveg és a nyugalom fontos.", "Ochelarii de protecție și calmul sunt importante."),
      labels: {
        goggles: L("Schutzbrille", "goggles", "védőszemüveg", "ochelari de protecție"),
        careful: L("vorsichtig", "careful", "óvatos", "atent"),
        clean: L("sauber", "clean", "tiszta", "curat"),
      },
      svg: topicSvg("🧤", "Safety", "#EC4899"),
      interactive: (k) => ({
        type: "highlight-text",
        tokens: [k("goggles"), k("careful"), k("clean")],
        correctIndices: [0, 1, 2],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "lab_rules",
    },
    {
      title: L("Wasser schützen", "Protect Water", "Vízvédelem", "Protejarea apei"),
      text: L(
        "Wasserreinigung und sauberes Verhalten schützen Gewässer.",
        "Water purification and clean behavior protect waters.",
        "A víztisztítás és a tiszta viselkedés védi a vizeket.",
        "Purificarea apei și comportamentul curat protejează apele."
      ),
      hint: L("Nicht alles gehört in den Ausguss.", "Not everything belongs down the drain.", "Nem minden kerülhet a lefolyóba.", "Nu orice trebuie aruncat la scurgere."),
      labels: {
        drain: L("Ausguss", "drain", "lefolyó", "scurgere"),
        clean: L("sauber", "clean", "tiszta", "curat"),
        water: L("Wasser", "water", "víz", "apă"),
      },
      svg: topicSvg("🚱", "Water", "#3B82F6"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "protect", label: k("water") },
          { id: "avoid", label: k("drain") },
        ],
        items: [
          { text: k("clean"), bucketId: "protect" },
          { text: k("water"), bucketId: "protect" },
          { text: k("drain"), bucketId: "avoid" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "water_purification",
    },
    {
      title: L("Luft sauber halten", "Keep Air Clean", "A levegő tisztán tartása", "Menținerea aerului curat"),
      text: L(
        "Weniger Rauch und Abgase helfen der Umwelt.",
        "Less smoke and exhaust helps the environment.",
        "Kevesebb füst és kipufogógáz segít a környezetnek.",
        "Mai puțin fum și mai puține gaze ajută mediul."
      ),
      hint: L("Vermeide unnötigen Rauch.", "Avoid unnecessary smoke.", "Kerüld a fölösleges füstöt.", "Evită fumul inutil."),
      labels: {
        smoke: L("Rauch", "smoke", "füst", "fum"),
        exhaust: L("Abgas", "exhaust", "kipufogógáz", "gaze de eșapament"),
        air: L("Luft", "air", "levegő", "aer"),
      },
      svg: topicSvg("🌫️", "Air", "#94A3B8"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "good", label: k("air") },
          { id: "bad", label: k("smoke") },
        ],
        items: [
          { text: k("air"), bucketId: "good" },
          { text: k("smoke"), bucketId: "bad" },
          { text: k("exhaust"), bucketId: "bad" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "air_pollution_intro",
    },
    {
      title: L("Recycling im Alltag", "Recycling in Daily Life", "Újrahasznosítás a hétköznapokban", "Reciclare în viața de zi cu zi"),
      text: L(
        "Recycling spart Rohstoffe und schützt Umwelt.",
        "Recycling saves raw materials and protects the environment.",
        "Az újrahasznosítás nyersanyagot takarít meg és védi a környezetet.",
        "Reciclarea economisește materii prime și protejează mediul."
      ),
      hint: L("Papier, Glas, Metall und Plastik trennen.", "Separate paper, glass, metal and plastic.", "Válaszd külön a papírt, üveget, fémet és műanyagot.", "Separă hârtia, sticla, metalul și plasticul."),
      labels: {
        paper: L("Papier", "paper", "papír", "hârtie"),
        glass: L("Glas", "glass", "üveg", "sticlă"),
        plastic: L("Plastik", "plastic", "műanyag", "plastic"),
        recycle: L("recyceln", "recycle", "újrahasznosít", "reciclează"),
      },
      svg: topicSvg("♻️", "Recycle", "#10B981"),
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "recycle", label: k("recycle") },
          { id: "other", label: k("plastic") },
        ],
        items: [
          { text: k("paper"), bucketId: "recycle" },
          { text: k("glass"), bucketId: "recycle" },
          { text: k("plastic"), bucketId: "other" },
        ],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "recycling_materials",
    },
    {
      title: L("Finale: sicher und nachhaltig", "Finale: Safe and Sustainable", "Döntő: biztonságosan és fenntarthatóan", "Final: sigur și sustenabil"),
      text: L(
        "Wir verbinden Sicherheit, Umwelt und Trennmethoden.",
        "We connect safety, environment, and separation methods.",
        "Összekötjük a biztonságot, a környezetet és az elválasztási módszereket.",
        "Legăm siguranța, mediul și metodele de separare."
      ),
      hint: L("Das ist die große Wiederholung.", "This is the big review.", "Ez a nagy ismétlés.", "Aceasta este recapitularea mare."),
      labels: {
        safe: L("sicher", "safe", "biztonságos", "sigur"),
        clean: L("sauber", "clean", "tiszta", "curat"),
        review: L("Wiederholung", "review", "ismétlés", "recapitulare"),
      },
      svg: topicSvg("🏁", "Finale", "#6366F1"),
      interactive: (k) => ({
        type: "word-order",
        words: [k("safe"), k("clean"), k("review")],
        correctOrder: [0, 1, 2],
        instruction: k("title"),
        hint1: k("hint"),
        hint2: k("text"),
      }),
      quiz: "chemistry_safety_home",
    },
  ],
};

const ISLANDS: IslandSpec[] = [K6_I1, K6_I2, K6_I3, K6_I4, K6_I5, K6_I6, K6_I7, K6_I8, K6_I9];

const built = ISLANDS.map(buildIsland);

export const KEMIA_K6_I1_LABELS = built[0].labels;
export const KEMIA_K6_I1_POOL = built[0].pool;
export const KEMIA_K6_I2_LABELS = built[1].labels;
export const KEMIA_K6_I2_POOL = built[1].pool;
export const KEMIA_K6_I3_LABELS = built[2].labels;
export const KEMIA_K6_I3_POOL = built[2].pool;
export const KEMIA_K6_I4_LABELS = built[3].labels;
export const KEMIA_K6_I4_POOL = built[3].pool;
export const KEMIA_K6_I5_LABELS = built[4].labels;
export const KEMIA_K6_I5_POOL = built[4].pool;
export const KEMIA_K6_I6_LABELS = built[5].labels;
export const KEMIA_K6_I6_POOL = built[5].pool;
export const KEMIA_K6_I7_LABELS = built[6].labels;
export const KEMIA_K6_I7_POOL = built[6].pool;
export const KEMIA_K6_I8_LABELS = built[7].labels;
export const KEMIA_K6_I8_POOL = built[7].pool;
export const KEMIA_K6_I9_LABELS = built[8].labels;
export const KEMIA_K6_I9_POOL = built[8].pool;
