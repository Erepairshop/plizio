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
  interactive: (k: (suffix: string) => string) => any;
  quiz: PoolTopicDef["quiz"] | string;
  difficulty?: "easy" | "medium" | "hard";
}

interface IslandSpec {
  id: string;
  title: L4;
  topics: TopicSpec[];
}

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
      quiz: typeof spec.quiz === "string"
        ? { question: spec.title.de, choices: [spec.title.de, "Anderes Thema", "Noch ein Thema", "Beispiel"], answer: spec.title.de }
        : spec.quiz,
      difficulty: spec.difficulty,
    };
  });
}

function buildIsland(island: IslandSpec) {
  const labels: Record<Lang, Record<string, string>> = {
    de: { explorer_title: island.title.de },
    en: { explorer_title: island.title.en },
    hu: { explorer_title: island.title.hu },
    ro: { explorer_title: island.title.ro },
  };
  island.topics.forEach((topic, idx) => {
    for (const [key, value] of Object.entries(buildTopicLabels(island.id, idx + 1, topic))) {
      labels.de[key] = value.de;
      labels.en[key] = value.en;
      labels.hu[key] = value.hu;
      labels.ro[key] = value.ro;
    }
  });
  return { labels, pool: buildPool(island.id, island.topics) };
}

// ─── GENERATED K6 EXTENSIONS ───────────────────────────────────────────────

const D = (s: string): L4 => L(s, s, s, s);

const EXTRA_SVG_BUILDERS: Array<(title: string, theme: string, idx: number) => SvgConfig> = [
  (title, theme) => ({
    type: "two-groups",
    left: { items: [title], bg: "#DBEAFE", border: "#2563EB" },
    right: { items: [theme], bg: "#FEE2E2", border: "#DC2626" },
  }),
  (title, theme) => ({
    type: "text-bubbles",
    items: [
      { text: title, color: "#1D4ED8", bg: "#DBEAFE" },
      { text: theme, color: "#B91C1C", bg: "#FEE2E2" },
    ],
  }),
  (title) => ({
    type: "letter-circles",
    letters: title.replace(/[^A-Za-zÄÖÜäöüß]/g, "").slice(0, 4).toUpperCase().split("") || ["K"],
    color: "#8B5CF6",
  }),
  (title, theme) => ({
    type: "sentence-display",
    words: [title, "und", theme],
    highlightIndices: [0, 2],
    color: "#0EA5E9",
  }),
  (title, theme) => ({
    type: "word-display",
    word: title,
    subtitle: theme,
    color: "#10B981",
  }),
  (_title, _theme, idx) => ({
    type: "icon-grid",
    items: [
      { emoji: ["🏰", "📜", "🏛️", "🎓"][idx % 4], label: "" },
      { emoji: ["⚔️", "🌍", "📚", "🕯️"][(idx + 1) % 4], label: "" },
      { emoji: ["🏰", "📜", "🏛️", "🎓"][(idx + 2) % 4], label: "" },
    ],
  }),
  (title, theme) => ({
    type: "compound-word",
    word1: title,
    word2: theme,
    result: title + " " + theme,
    color: "#7C3AED",
  }),
  (title) => ({
    type: "article-noun",
    article: "der",
    articleColor: "#2563EB",
    noun: title,
    emoji: "📘",
  }),
  (title, theme) => ({
    type: "rhyme-pair",
    word1: title,
    word2: theme,
    color: "#EC4899",
  }),
  (title) => ({
    type: "letter-pairs",
    pairs: [[title.slice(0, 1).toUpperCase(), title.slice(0, 1).toLowerCase()]],
    color: "#F59E0B",
  }),
  (title) => ({
    type: "word-syllables",
    parts: title.split(" "),
    color: "#14B8A6",
  }),
  (_title, theme, idx) => ({
    type: "simple-icon",
    icon: ["🏰", "📜", "🏛️", "🎓", "⚔️", "🌍"][idx % 6],
    title: theme,
    color: "#6366F1",
  }),
];

const EXTRA_INTERACTIVE_BUILDERS: Array<(title: string, theme: string, idx: number) => any> = [
  (title, theme) => ({
    type: "highlight-text",
    tokens: [title, "gehört", "zu", theme],
    correctIndices: [0, 3],
    instruction: "Markiere die Kernaussage zu " + title,
    hint1: "Tipp: Schau dir " + title + " genau an.",
    hint2: "Tipp: Der Zusammenhang ist " + theme + ".",
  }),
  (_title, theme, idx) => ({
    type: "tap-count",
    tapCount: { emoji: ["🏰", "📚", "⚓", "🔥"][idx % 4], count: 3 + (idx % 4) },
    instruction: "Zähle die Symbole zum Thema " + theme,
    hint1: "Tipp: Jedes Symbol nur einmal zählen.",
    hint2: "Tipp: Erst ordnen, dann prüfen.",
  }),
  (title, theme) => ({
    type: "sentence-build",
    fragments: [title, "gehört", "zum", theme],
    instruction: "Baue den Satz zu " + title,
    hint1: "Tipp: Starte mit " + title + ".",
    hint2: "Tipp: Der Rest zeigt den Zusammenhang.",
  }),
  (title, theme) => ({
    type: "label-diagram",
    areas: [
      { id: "a", x: 35, y: 38, label: title },
      { id: "b", x: 68, y: 60, label: theme },
    ],
    instruction: "Beschrifte die Darstellung zu " + title,
    hint1: "Tipp: Erst die auffällige Stelle tippen.",
    hint2: "Tipp: Dann die passende Bezeichnung wählen.",
  }),
  (_title, theme) => ({
    type: "block-drag",
    mode: "combine",
    groups: [2, 3],
    answer: 5,
    blockIcon: "🧱",
    blockColor: "#7C3AED",
    instruction: "Ziehe die Blöcke zum Thema " + theme,
    hint1: "Tipp: Zähle alle Blöcke zusammen.",
    hint2: "Tipp: Zwei und drei ergeben fünf.",
  }),
  (title, theme) => ({
    type: "word-order",
    words: [title, "gehört", "zu", theme],
    correctOrder: [0, 1, 2, 3],
    instruction: "Ordne die Wörter zu " + title,
    hint1: "Tipp: Der Titel steht zuerst.",
    hint2: "Tipp: Danach kommt das Thema.",
  }),
  (title, theme) => ({
    type: "gap-fill",
    sentence: title + " ist mit __ verbunden.",
    choices: [theme, "Krieg", "Stadt", "Schule"],
    correctIndex: 0,
    instruction: "Fülle die Lücke zu " + title,
    hint1: "Tipp: Der richtige Begriff ist " + theme + ".",
    hint2: "Tipp: Lies den Satz mit Laut.",
  }),
  (title, theme) => ({
    type: "drag-to-bucket",
    buckets: [
      { id: "a", label: title },
      { id: "b", label: theme },
    ],
    items: [
      { text: title, bucketId: "a" },
      { text: theme, bucketId: "b" },
      { text: "Beispiel", bucketId: "a" },
      { text: "Detail", bucketId: "b" },
    ],
    instruction: "Sortiere die Begriffe zu " + title,
    hint1: "Tipp: Erst das große Thema erkennen.",
    hint2: "Tipp: Dann die Beispiele zuordnen.",
  }),
  (title, theme) => ({
    type: "match-pairs",
    pairs: [
      { left: title, right: theme },
      { left: "Ursache", right: "Folge" },
      { left: "Ort", right: "Zeit" },
    ],
    instruction: "Finde die passenden Paare zu " + title,
    hint1: "Tipp: Suche die direkte Bedeutung.",
    hint2: "Tipp: Ursache und Folge gehören zusammen.",
  }),
  (title, theme) => ({
    type: "physics-bucket",
    bucket1: "Wichtig",
    bucket2: "Ergänzung",
    items: [title, theme, "Beispiel", "Detail"],
    instruction: "Ordne die Begriffe zu " + title,
    hint1: "Tipp: Wähle zuerst den Kernbegriff.",
    hint2: "Tipp: Nebenbegriffe kommen in die zweite Gruppe.",
  }),
  (title, theme) => ({
    type: "physics-magnet",
    pairs: [
      { left: title, right: theme },
      { left: "Ursache", right: "Folge" },
    ],
    instruction: "Ziehe die passenden Begriffe zu " + title,
    hint1: "Tipp: Verbinde gleiche Ideen.",
    hint2: "Tipp: Ursache und Folge gehören zusammen.",
  }),
  (title, theme) => ({
    type: "physics-slingshot",
    question: "Wähle den Begriff zu " + title,
    targets: [
      { id: "1", text: title, isCorrect: true },
      { id: "2", text: theme, isCorrect: false },
      { id: "3", text: "Beispiel", isCorrect: false },
      { id: "4", text: "Andere Zeit", isCorrect: false },
    ],
    instruction: "Triff die richtige Auswahl zu " + title,
    hint1: "Tipp: Lies die Frage genau.",
    hint2: "Tipp: Der richtige Begriff ist " + title + ".",
  }),
  (title, theme) => ({
    type: "physics-stacker",
    words: [title, "gehört", "zu", theme],
    correctOrder: [0, 1, 2, 3],
    instruction: "Stapel die Wörter zu " + title,
    hint1: "Tipp: Titel zuerst.",
    hint2: "Tipp: Dann den Zusammenhang bauen.",
  }),
];

function makeExtraTopic(theme: string, title: string, idx: number): TopicSpec {
  const svg = EXTRA_SVG_BUILDERS[idx % EXTRA_SVG_BUILDERS.length](title, theme, idx);
  const interactive = EXTRA_INTERACTIVE_BUILDERS[idx % EXTRA_INTERACTIVE_BUILDERS.length](title, theme, idx);
  return {
    title: D(title),
    text: D(title + " gehört zum Thema " + theme + " und vertieft den historischen Zusammenhang."),
    svg,
    interactive,
    quiz: {
      question: "Worum geht es bei " + title + "?",
      choices: [title, theme, title + " im Unterricht", "ein anderes Thema"],
      answer: title,
    },
    difficulty: idx % 3 === 0 ? "easy" : idx % 3 === 1 ? "medium" : "hard",
  };
}

function makeExtraTopics(theme: string, titles: string[]): TopicSpec[] {
  return titles.map((title, idx) => makeExtraTopic(theme, title, idx));
}

const I1_EXTRA = makeExtraTopics("Das Frankenreich", [
  "Die Reformation",
  "Ablasshandel",
  "Buchdruck",
  "Reich und Glauben",
  "Bauernkrieg",
  "Bibel auf Deutsch",
  "Neue Kirchen",
  "Konfessionen",
  "Mönche und Schulen",
  "Städte der Reformation",
  "Fürstenmacht",
  "Europa im Wandel",
]);

const I2_EXTRA = makeExtraTopics("Mittelalterliche Gesellschaft", [
  "Kolumbus",
  "Magellan",
  "Neue Seerouten",
  "Karten und Kompass",
  "Gewürze",
  "Kolonien",
  "Handel über See",
  "Schiffe",
  "Entdeckungsfahrten",
  "Begegnungen",
  "Weltbilder",
  "Küstenstädte",
]);

const I3_EXTRA = makeExtraTopics("Leben auf dem Land", [
  "Ludwig XIV.",
  "Versailles",
  "Der Hof",
  "Absolutismus",
  "Armee und Steuern",
  "Merkantilismus",
  "Gesetze",
  "Adel und Volk",
  "Repräsentation",
  "Machtzentrum",
  "Zentralstaat",
  "Sonnenkönig",
]);

const I4_EXTRA = makeExtraTopics("Kirche und Klöster", [
  "Vernunft",
  "Aufklärung",
  "Philosophen",
  "Menschenrechte",
  "Toleranz",
  "Enzyklopädie",
  "Schule",
  "Naturwissenschaft",
  "Kritik",
  "Gesellschaft",
  "Reformen",
  "Freiheit",
]);

const I5_EXTRA = makeExtraTopics("Stadt und Wirtschaft", [
  "Markt und Handel",
  "Zünfte",
  "Bürger",
  "Rathaus",
  "Stadtmauer",
  "Märkte",
  "Münzen",
  "Fernhandel",
  "Waren",
  "Transport",
  "Messen",
  "Stadtprivilegien",
]);

const I6_EXTRA = makeExtraTopics("Stadtleben und Konflikte", [
  "Patrizier",
  "Rat der Stadt",
  "Bürgerrechte",
  "Hygiene",
  "Feuer",
  "Gericht",
  "Abgaben",
  "Gassen",
  "Fehden",
  "Wachposten",
  "Brunnen",
  "Stadtfrieden",
]);

const I7_EXTRA = makeExtraTopics("Kaiser und Reich", [
  "Kaiserwahl",
  "Kurfürsten",
  "Reichstage",
  "Papst und Kaiser",
  "Italienpolitik",
  "Dynastien",
  "Legitimation",
  "Reichsreform",
  "Krone",
  "Fürsten",
  "Königsmacht",
  "Reichsidee",
]);

const I8_EXTRA = makeExtraTopics("Islam und Orient", [
  "Mekka",
  "Medina",
  "Kalifat",
  "Arabische Zahlen",
  "Al-Andalus",
  "Wissenschaft",
  "Moscheen",
  "Handelswege",
  "Karawanen",
  "Übersetzungen",
  "Bibliotheken",
  "Kulturkontakt",
]);

const I9_EXTRA = makeExtraTopics("Spätmittelalter und Krisen", [
  "Pest",
  "Hungersnot",
  "Aufstände",
  "Krisen",
  "Söldner",
  "Wirtschaft",
  "Kirche",
  "Handel",
  "Häuser",
  "Schutz",
  "Erneuerung",
  "Wandel",
]);
// ─── ISLAND 1: DAS FRANKENREICH ───────────────────────────────────────────

const I1: IslandSpec = {
  id: "i1",
  title: L("Das Frankenreich", "The Frankish Empire", "A Frank Birodalom", "Imperiul Frank"),
  topics: [
    ...I1_EXTRA,
    {
      title: L("Chlodwig I.", "Clovis I", "I. Klodvig", "Clovis I"),
      text: L("Chlodwig I. vereinte die fränkischen Stämme und begründete das Reich der Merowinger. Seine Taufe sicherte ihm die Unterstützung der Kirche.", "Clovis I united the Frankish tribes and founded the Merovingian Empire. His baptism secured him the support of the Church.", "I. Klodvig egyesítette a frank törzseket és megalapította a Meroving-birodalmat. Megkeresztelkedése biztosította számára az egyház támogatását.", "Clovis I a unit triburile france și a fondat Imperiul Merovingian. Botezul său i-a asigurat sprijinul Bisericii."),
      svg: { type: "geschichte-diagram", name: "CrownSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Merowinger", "Merovingians", "Merovingek", "Merovingieni"), right: L("Herrschergeschlecht", "Dynasty", "Uralkodóház", "Dinastie") },
          { left: L("Taufe", "Baptism", "Keresztelő", "Botez"), right: L("Unterstützung der Kirche", "Church support", "Egyházi támogatás", "Sprijinul Bisericii") },
          { left: L("Paris", "Paris", "Párizs", "Paris"), right: L("Residenz", "Residence", "Székhely", "Reședință") },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "frankenreich_chlodwig",
    },
    {
      title: L("Karl der Große", "Charlemagne", "Nagy Károly", "Carol cel Mare"),
      text: L("Karl der Große wurde im Jahr 800 zum Kaiser gekrönt. Er förderte Bildung und Kultur (Karolingische Renaissance).", "Charlemagne was crowned Emperor in the year 800. He promoted education and culture (Carolingian Renaissance).", "Nagy Károlyt 800-ban császárrá koronázták. Támogatta az oktatást és a kultúrát (Karoling reneszánsz).", "Carol cel Mare a fost încoronat împărat în anul 800. A promovat educația și cultura (Renașterea Carolingiană)."),
      svg: { type: "geschichte-diagram", name: "TempleSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "karl", label: L("Karls Leistungen", "Charlemagne's deeds", "Károly tettei", "Faptele lui Carol") },
          { id: "other", label: L("Anderes", "Other", "Egyéb", "Altele") },
        ],
        items: [
          { text: L("Kaiserkrönung 800", "Coronation 800", "Császárkoronázás 800", "Încoronarea 800"), bucketId: "karl" },
          { text: L("Bildungsreform", "Education reform", "Oktatási reform", "Reforma educației"), bucketId: "karl" },
          { text: L("Bau der Pyramiden", "Building pyramids", "Piramisépítés", "Construirea piramidelor"), bucketId: "other" },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "karl_der_grosse",
    },
    {
      title: L("Verwaltung & Pfalzen", "Administration & Palaces", "Közigazgatás és paloták", "Administrație și palate"),
      text: L("Da es keine feste Hauptstadt gab, reiste der Kaiser von Pfalz zu Pfalz (Reisekönigtum). Königsboten kontrollierten die Grafen.", "Since there was no fixed capital, the Emperor traveled from palace to palace (itinerant kingship). Royal messengers controlled the counts.", "Mivel nem volt állandó főváros, a császár palotáról palotára utazott (utazó királyság). Királyi küldöttek ellenőrizték a grófokat.", "Deoarece nu exista o capitală fixă, împăratul călătorea de la palat la palat (regalitate itinerantă). Trimișii regali îi controlau pe conți."),
      svg: { type: "geschichte-diagram", name: "ColumnSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Der Kaiser wohnte in __. __ kontrollierten die Grafen.", "The Emperor lived in __. __ controlled the counts.", "A császár __-ban lakott. A __ ellenőrizték a grófokat.", "Împăratul locuia în __. __ îi controlau pe conți."),
        gaps: [
          { index: 0, options: [L("Pfalzen", "Palaces", "Palotákban", "Palate"), L("Zelten", "Tents", "Sátrakban", "Corturi")], correct: 0 },
          { index: 1, options: [L("Königsboten", "Messengers", "Királyi küldöttek", "Trimiși"), L("Bauern", "Peasants", "Parasztok", "Țărani")], correct: 0 },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "verwaltung_frankenreich",
    },
  ],
};

// ─── ISLAND 2: GESELLSCHAFT IM MITTELALTER ────────────────────────────────

const I2: IslandSpec = {
  id: "i2",
  title: L("Mittelalterliche Gesellschaft", "Medieval Society", "Középkori társadalom", "Societatea medievală"),
  topics: [
    ...I2_EXTRA,
    {
      title: L("Reichsteilung von Verdun", "Treaty of Verdun", "Verduni szerződés", "Tratatul de la Verdun"),
      text: L("Im Jahr 843 wurde das Frankenreich in drei Teile geteilt. Daraus entwickelten sich später Frankreich und Deutschland.", "In 843, the Frankish Empire was divided into three parts. These later developed into France and Germany.", "843-ban a Frank Birodalmat három részre osztották. Ezekből alakult ki később Franciaország és Németország.", "În 843, Imperiul Frank a fost împărțit în trei părți. Acestea s-au dezvoltat ulterior în Franța și Germania."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("843", "843", "843", "843"), right: L("Vertrag von Verdun", "Treaty of Verdun", "Verduni szerződés", "Tratatul de la Verdun") },
          { left: L("Westfrankenreich", "West Francia", "Nyugati Frank Birodalom", "Francia Occidentală"), right: L("Frankreich", "France", "Franciaország", "Franța") },
          { left: L("Ostfrankenreich", "East Francia", "Keleti Frank Birodalom", "Francia Orientală"), right: L("Deutschland", "Germany", "Németország", "Germania") },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "reichsteilung_verdun",
    },
    {
      title: L("Ständegesellschaft & Lehnswesen", "Estate Society & Feudalism", "Rendi társadalom és hűbériség", "Societatea stărilor și feudalismul"),
      text: L("Die Gesellschaft war in drei Stände unterteilt: Klerus, Adel und Bauern. Das Lehnswesen regelte die Treue zwischen Herrn und Vasall.", "Society was divided into three estates: clergy, nobility, and peasants. Feudalism regulated loyalty between lord and vassal.", "A társadalom három rendre oszlott: papság, nemesség és parasztság. A hűbériség szabályozta az úr és a vazallus közötti hűséget.", "Societatea era împărțită în trei stări: clerul, nobilimea și țăranii. Feudalismul reglementa loialitatea dintre domn și vasal."),
      svg: { type: "geschichte-diagram", name: "PyramidSvg" },
      interactive: (k) => ({
        type: "word-order",
        words: [L("König", "King", "Király", "Rege"), L("Kronvasallen", "Tenants-in-chief", "Főhűbéresek", "Vasali regali"), L("Untervasallen", "Sub-vassals", "Alhűbéresek", "Sub-vasali")],
        instruction: L("Ordne die Lehenshierarchie (oben nach unten)", "Order the feudal hierarchy (top to bottom)", "Rendezd a hűbéri hierarchiát (fentről lefelé)", "Ordonează ierarhia feudală (de sus în jos)"),
      }),
      quiz: "staendegesellschaft_lehnswesen",
    },
    {
      title: L("Rittertum", "Knighthood", "Lovagság", "Cavalerism"),
      text: L("Ein Ritter musste eine lange Ausbildung durchlaufen (Page, Knappe) und Ideale wie Tapferkeit und Treue verfolgen.", "A knight had to undergo long training (page, squire) and follow ideals such as bravery and loyalty.", "Egy lovagnak hosszú kiképzésen kellett átesnie (apród, fegyverhordozó), és olyan eszményeket kellett követnie, mint a bátorság és a hűség.", "Un cavaler trebuia să treacă printr-o pregătire lungă (paj, scutier) și să urmeze idealuri precum curajul și loialitatea."),
      svg: { type: "geschichte-diagram", name: "KnightSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "weapon", label: L("Ausrüstung", "Equipment", "Felszerelés", "Echipament") },
          { id: "ideal", label: L("Tugenden", "Virtues", "Erények", "Virtuți") },
        ],
        items: [
          { text: L("Lanze", "Lance", "Lándzsa", "Lance"), bucketId: "weapon" },
          { text: L("Kettenhemd", "Chainmail", "Láncing", "Camașă de zale"), bucketId: "weapon" },
          { text: L("Tapferkeit", "Bravery", "Bátorság", "Curaj"), bucketId: "ideal" },
          { text: L("Treue", "Loyalty", "Hűség", "Loialitate"), bucketId: "ideal" },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "rittertum",
    },
  ],
};

// ─── ISLAND 3: DAS LEBEN AUF DEM LAND ─────────────────────────────────────

const I3: IslandSpec = {
  id: "i3",
  title: L("Leben auf dem Land", "Life in the Countryside", "Élet vidéken", "Viața la țară"),
  topics: [
    ...I3_EXTRA,
    {
      title: L("Die Burg", "The Castle", "A vár", "Castelul"),
      text: L("Burgen dienten als Schutzbau und Wohnsitz des Adels. Der Bergfried war der wichtigste Turm zur Verteidigung.", "Castles served as defensive structures and residences for the nobility. The keep was the most important tower for defense.", "A várak védelmi építményként és a nemesség lakóhelyeként szolgáltak. A lakótorony volt a legfontosabb védelmi torony.", "Castelele serveau ca structuri defensive și reședințe pentru nobilime. Turnul principal era cel mai important turn pentru apărare."),
      svg: { type: "geschichte-diagram", name: "ShieldSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Bergfried", "Keep", "Öregtorony", "Turn principal"), right: L("Hauptturm", "Main tower", "Főtorony", "Turnul principal") },
          { left: L("Palas", "Palas", "Palota", "Palas"), right: L("Wohngebäude", "Living quarters", "Lakóépület", "Clădire de locuit") },
          { left: L("Zugbrücke", "Drawbridge", "Felvonóhíd", "Pod mobil"), right: L("Eingangsschutz", "Entrance protection", "Bejárat védelme", "Protecția intrării") },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "burgen",
    },
    {
      title: L("Grundherrschaft", "Manorialism", "Uradalom", "Sistemul domeniului feudal"),
      text: L("Der Grundherr bot Schutz, während die Bauern (Hörige) Abgaben leisten und Frondienste auf den Feldern verrichten mussten.", "The lord provided protection, while the peasants (serfs) had to provide dues and labor services in the fields.", "A földesúr védelmet nyújtott, míg a parasztoknak (jobbágyoknak) adót kellett fizetniük és robotot végezniük a földeken.", "Seniorul oferea protecție, în timp ce țăranii (șerbii) trebuiau să plătească dări și să presteze corvezi pe câmp."),
      svg: { type: "geschichte-diagram", name: "PyramidSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "duty", label: L("Pflichten Bauern", "Peasant duties", "Parasztok kötelességei", "Obligațiile țăranilor") },
          { id: "right", label: L("Gegenleistung Herr", "Lord's return", "Földesúr ellenszolgáltatása", "Contraprestația seniorului") },
        ],
        items: [
          { text: L("Frondienst", "Labor service", "Robot", "Corvoadă"), bucketId: "duty" },
          { text: L("Abgaben (Zehnt)", "Tithe", "Tized", "Dajdie"), bucketId: "duty" },
          { text: L("Schutz & Schirm", "Protection", "Védelem", "Protecție"), bucketId: "right" },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "grundherrschaft",
    },
    {
      title: L("Alltag der Bauern", "Peasant Life", "A parasztok mindennapjai", "Viața cotidiană a țăranilor"),
      text: L("Die Dreifelderwirtschaft verbesserte die Ernten. Harte Arbeit bestimmte den Tag von Sonnenaufgang bis Sonnenuntergang.", "The three-field system improved harvests. Hard work defined the day from sunrise to sunset.", "A háromnyomásos gazdálkodás javította a termést. A kemény munka határozta meg a napot napfelkeltétől napnyugtáig.", "Sistemul celor trei câmpuri a îmbunătățit recoltele. Munca grea definea ziua de la răsărit până la apus."),
      svg: { type: "geschichte-diagram", name: "ColumnSvg" },
      interactive: (k) => ({
        type: "word-order",
        words: [L("Wintergetreide", "Winter grain", "Őszi gabona", "Cereale de iarnă"), L("Sommergetreide", "Summer grain", "Tavaszi gabona", "Cereale de vară"), L("Brache", "Fallow", "Ugar", "Pârloagă")],
        instruction: L("Ordne die Phasen der Dreifelderwirtschaft", "Order the phases of the three-field system", "Rendezd a háromnyomásos gazdálkodás szakaszait", "Ordonează fazele sistemului de trei câmpuri"),
      }),
      quiz: "bauernleben",
    },
  ],
};

// ─── ISLAND 4: KIRCHE UND KLÖSTER ─────────────────────────────────────────

const I4: IslandSpec = {
  id: "i4",
  title: L("Kirche und Klöster", "Church and Monasteries", "Egyház és kolostorok", "Biserica și mănăstirile"),
  topics: [
    ...I4_EXTRA,
    {
      title: L("Ora et Labora", "Pray and Work", "Imádkozzál és dolgozzál", "Roagă-te și lucrează"),
      text: L("Das Leben der Mönche war streng geregelt nach der Regel des heiligen Benedikt. Der Tag bestand aus Gebet und Arbeit.", "The lives of monks were strictly regulated according to the Rule of Saint Benedict. The day consisted of prayer and work.", "A szerzetesek életét szigorúan szabályozta Szent Benedek regulája. A nap imádságból és munkából állt.", "Viața călugărilor era strict reglementată conform Regulii Sfântului Benedict. Ziua consta în rugăciune și muncă."),
      svg: { type: "geschichte-diagram", name: "TempleSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Ora", "Pray", "Imádkozz", "Roagă-te"), right: L("Gebet", "Prayer", "Ima", "Rugăciune") },
          { left: L("Labora", "Work", "Dolgozz", "Lucrează"), right: L("Arbeit", "Work", "Munka", "Muncă") },
          { left: L("Abt", "Abbot", "Apát", "Abate"), right: L("Leiter des Klosters", "Head of monastery", "Kolostor vezetője", "Conducătorul mănăstirii") },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "kloester_ora_et_labora",
    },
    {
      title: L("Bedeutung der Klöster", "Importance of Monasteries", "A kolostorok jelentősége", "Importanța mănăstirilor"),
      text: L("Klöster waren Zentren der Bildung und Medizin. Im Skriptorium wurden wertvolle Bücher von Hand kopiert.", "Monasteries were centers of education and medicine. Valuable books were copied by hand in the scriptorium.", "A kolostorok az oktatás és az orvostudomány központjai voltak. A szkriptóriumban értékes könyveket másoltak kézzel.", "Mănăstirile erau centre de educație și medicină. În scriptoriu, cărți valoroase erau copiate manual."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "edu", label: L("Bildung/Kultur", "Education/Culture", "Oktatás/Kultúra", "Educație/Cultură") },
          { id: "med", label: L("Medizin/Natur", "Medicine/Nature", "Orvostudomány/Természet", "Medicină/Natură") },
        ],
        items: [
          { text: L("Bücher kopieren", "Copying books", "Könyvmásolás", "Copierea cărților"), bucketId: "edu" },
          { text: L("Klosterschule", "Monastery school", "Kolostori iskola", "Școală mănăstirească"), bucketId: "edu" },
          { text: L("Heilkräuter", "Medicinal herbs", "Gyógynövények", "Ierburi medicinale"), bucketId: "med" },
          { text: L("Krankenpflege", "Nursing", "Betegápolás", "Îngrijirea bolnavilor"), bucketId: "med" },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "bedeutung_kloester",
    },
  ],
};

// ─── ISLAND 5: STADT UND WIRTSCHAFT ───────────────────────────────────────

const I5: IslandSpec = {
  id: "i5",
  title: L("Stadt und Wirtschaft", "City and Economy", "Város és gazdaság", "Orașul și economia"),
  topics: [
    ...I5_EXTRA,
    {
      title: L("Stadtentstehung", "Origin of Cities", "Városok kialakulása", "Originea orașelor"),
      text: L("Städte entstanden an Handelswegen oder Burgen. 'Stadtluft macht frei' bedeutete Freiheit für geflohene Bauern nach einem Jahr.", "Cities emerged at trade routes or castles. 'City air makes you free' meant freedom for escaped peasants after one year.", "A városok kereskedelmi utak vagy várak mentén alakultak ki. A „városi levegő szabaddá tesz” szabadságot jelentett a szökött parasztoknak egy év után.", "Orașele au apărut pe rutele comerciale sau lângă castele. „Aerul orașului te face liber” însemna libertate pentru țăranii fugiți după un an."),
      svg: { type: "geschichte-diagram", name: "PyramidSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Ein Bauer wurde nach __ frei. Wichtig war das __.", "A peasant became free after __. The __ was important.", "A paraszt __ után lett szabad. Fontos volt a __.", "Un țăran devenea liber după __. __ era important."),
        gaps: [
          { index: 0, options: [L("Jahr und Tag", "Year and day", "egy év és egy nap", "un an și o zi"), L("einer Woche", "one week", "egy hét", "o săptămână")], correct: 0 },
          { index: 1, options: [L("Marktrecht", "Market right", "vásárjog", "dreptul de piață"), L("Jagdrecht", "Hunting right", "vadászati jog", "dreptul de vânătoare")], correct: 0 },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "stadtentstehung",
    },
    {
      title: L("Zünfte", "Guilds", "Céhek", "Bresle"),
      text: L("Handwerker schlossen sich in Zünften zusammen. Sie regelten Preise, Qualität und die Ausbildung vom Lehrling zum Meister.", "Craftsmen joined together in guilds. They regulated prices, quality, and training from apprentice to master.", "A kézművesek céhekbe tömörültek. Szabályozták az árakat, a minőséget és a képzést az inastól a mesterig.", "Meșteșugarii s-au unit în bresle. Aceștia reglementau prețurile, calitatea și formarea de la ucenic la meșter."),
      svg: { type: "geschichte-diagram", name: "ShieldSvg" },
      interactive: (k) => ({
        type: "word-order",
        words: [L("Lehrling", "Apprentice", "Inas", "Ucenic"), L("Geselle", "Journeyman", "Legény", "Calfă"), L("Meister", "Master", "Mester", "Meșter")],
        instruction: L("Ordne die Stufen der Handwerksausbildung", "Order the stages of craft training", "Rendezd a kézműves képzés szakaszait", "Ordonează etapele formării meșteșugărești"),
      }),
      quiz: "zuenfte",
    },
    {
      title: L("Die Hanse", "The Hanseatic League", "A Hanza", "Hansa"),
      text: L("Die Hanse war ein mächtiger Bund von Städten und Kaufleuten. Die Kogge war das typische Handelsschiff der Nord- und Ostsee.", "The Hanseatic League was a powerful alliance of cities and merchants. The cog was the typical merchant ship of the North and Baltic Seas.", "A Hanza-szövetség városok és kereskedők hatalmas szövetsége volt. A kogge volt az Északi- és a Balti-tenger tipikus kereskedelmi hajója.", "Hansa a fost o alianță puternică de orașe și negustori. Coga a fost nava comercială tipică din Mările Nordului și Baltică."),
      svg: { type: "geschichte-diagram", name: "ColumnSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Lübeck", "Lübeck", "Lübeck", "Lübeck"), right: L("Hauptstadt der Hanse", "Capital of Hanse", "A Hanza fővárosa", "Capitala Hansei") },
          { left: L("Kogge", "Cog", "Kogge", "Coga"), right: L("Handelsschiff", "Merchant ship", "Kereskedelmi hajó", "Navă comercială") },
          { left: L("Kontor", "Kontor", "Kontor", "Contor"), right: L("Handelsniederlassung", "Trade post", "Kereskedelmi telep", "Sediu comercial") },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "hanse",
    },
  ],
};

// ─── ISLAND 6: STADTLEBEN UND KONFLIKTE ───────────────────────────────────

const I6: IslandSpec = {
  id: "i6",
  title: L("Stadtleben und Konflikte", "City Life and Conflicts", "Városi élet és konfliktusok", "Viața la oraș și conflicte"),
  topics: [
    ...I6_EXTRA,
    {
      title: L("Leben in der Stadt", "Life in the City", "Élet a városban", "Viața în oraș"),
      text: L("In der Stadt war es eng und oft unhygienisch. Fachwerkhäuser prägten das Stadtbild, und der Marktplatz war das Zentrum.", "In the city, it was crowded and often unhygienic. Half-timbered houses characterized the cityscape, and the marketplace was the center.", "A városban zsúfoltság és gyakran egészségtelen körülmények uralkodtak. A városképet a favázas házak határozták meg, a központ pedig a piactér volt.", "În oraș era aglomerație și adesea condiții insalubre. Casele cu structură din lemn caracterizau peisajul urban, iar piața era centrul."),
      svg: { type: "geschichte-diagram", name: "TempleSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "high", label: L("Oberschicht", "Upper class", "Felső réteg", "Clasa superioară") },
          { id: "low", label: L("Unterschicht", "Lower class", "Alsó réteg", "Clasa inferioară") },
        ],
        items: [
          { text: L("Patrizier", "Patricians", "Patríciusok", "Patricieni"), bucketId: "high" },
          { text: L("Reiche Kaufleute", "Rich merchants", "Gazdag kereskedők", "Negustori bogați"), bucketId: "high" },
          { text: L("Tagelöhner", "Day laborers", "Napszámosok", "Zilieri"), bucketId: "low" },
          { text: L("Bettler", "Beggars", "Koldusok", "Cerșetori"), bucketId: "low" },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "stadtleben",
    },
    {
      title: L("Investiturstreit", "Investiture Controversy", "Invesztitúraharc", "Controversa învestiturii"),
      text: L("Der Streit zwischen Papst und Kaiser um die Einsetzung von Bischöfen gipfelte im Gang nach Canossa (1077).", "The dispute between Pope and Emperor over the appointment of bishops culminated in the Walk to Canossa (1077).", "A pápa és a császár közötti vita a püspökök kinevezéséről a Canossa-járásban (1077) csúcsosodott ki.", "Disputa dintre Papă și Împărat cu privire la numirea episcopilor a culminat cu penitența de la Canossa (1077)."),
      svg: { type: "geschichte-diagram", name: "KnightSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Heinrich IV.", "Henry IV", "IV. Henrik", "Henric al IV-lea"), right: L("Kaiser", "Emperor", "Császár", "Împărat") },
          { left: L("Gregor VII.", "Gregory VII", "VII. Gergely", "Grigore al VII-lea"), right: L("Papst", "Pope", "Pápa", "Papă") },
          { left: L("Canossa", "Canossa", "Canossa", "Canossa"), right: L("Bußgang", "Penance", "Bűnbánati út", "Penitență") },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "investiturstreit",
    },
  ],
};

// ─── ISLAND 7: KAISER UND REICH ───────────────────────────────────────────

const I7: IslandSpec = {
  id: "i7",
  title: L("Kaiser und Reich", "Emperor and Empire", "Császár és Birodalom", "Împăratul și Imperiul"),
  topics: [
    ...I7_EXTRA,
    {
      title: L("Friedrich Barbarossa", "Frederick Barbarossa", "Barbarossa Frigyes", "Frederic Barbarossa"),
      text: L("Friedrich I. Barbarossa wollte die kaiserliche Macht wiederherstellen. Er kämpfte in Italien und starb auf einem Kreuzzug.", "Frederick I Barbarossa wanted to restore imperial power. He fought in Italy and died on a crusade.", "I. Barbarossa Frigyes vissza akarta állítani a császári hatalmat. Itáliában harcolt, és egy keresztes hadjárat során halt meg.", "Frederic I Barbarossa a vrut să restaureze puterea imperială. A luptat în Italia și a murit într-o cruciadă."),
      svg: { type: "geschichte-diagram", name: "CrownSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Barbarossa bedeutet __. Er war ein __.", "Barbarossa means __. He was a __.", "A Barbarossa jelentése __. Ő egy __ volt.", "Barbarossa înseamnă __. El a fost un __."),
        gaps: [
          { index: 0, options: [L("Rotbart", "Redbeard", "Rőtszakállú", "Barbă Roșie"), L("Eisenfaust", "Ironfist", "Vaskezű", "Pumn de Fier")], correct: 0 },
          { index: 1, options: [L("Staufer", "Staufer", "Staufer", "Staufer"), L("Habsburger", "Habsburg", "Habsburg", "Habsburg")], correct: 0 },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "barbarossa",
    },
    {
      title: L("Goldene Bulle", "Golden Bull", "Aranybulla", "Bula de Aur"),
      text: L("Im Jahr 1356 regelte dieses Gesetz die Wahl des deutschen Königs durch sieben Kurfürsten.", "In 1356, this law regulated the election of the German king by seven prince-electors.", "1356-ban ez a törvény szabályozta a német király hét választófejedelem általi megválasztását.", "În 1356, această lege a reglementat alegerea regelui german de către șapte principi electori."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "word-order",
        words: [L("Kurfürsten wählen", "Electors vote", "Választófejedelmek választanak", "Electorii votează"), L("Krönung in Aachen", "Coronation in Aachen", "Koronázás Aachenben", "Încoronarea la Aachen"), L("Erster Reichstag", "First Imperial Diet", "Első birodalmi gyűlés", "Prima dietă imperială")],
        instruction: L("Ablauf nach der Goldenen Bulle", "Procedure according to the Golden Bull", "Az Aranybulla szerinti eljárás", "Procedura conform Bulei de Aur"),
      }),
      quiz: "goldene_bulle",
    },
  ],
};

// ─── ISLAND 8: ISLAM UND ORIENT ───────────────────────────────────────────

const I8: IslandSpec = {
  id: "i8",
  title: L("Islam und Orient", "Islam and the Orient", "Iszlám és Orient", "Islamul și Orientul"),
  topics: [
    ...I8_EXTRA,
    {
      title: L("Entstehung des Islam", "Origin of Islam", "Az iszlám kialakulása", "Originea Islamului"),
      text: L("Mohammed begründete im 7. Jahrhundert den Islam. Die fünf Säulen bilden das Fundament des Glaubens.", "Muhammad founded Islam in the 7th century. The five pillars form the foundation of the faith.", "Mohamed a 7. században alapította meg az iszlámot. Az öt oszlop alkotja a hit alapját.", "Mahomed a fondat Islamul în secolul al VII-lea. Cei cinci stâlpi formează fundamentul credinței."),
      svg: { type: "geschichte-diagram", name: "TempleSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "pillar", label: L("5 Säulen", "5 Pillars", "5 oszlop", "5 stâlpi") },
          { id: "other", label: L("Anderes", "Other", "Egyéb", "Altele") },
        ],
        items: [
          { text: L("Glaubensbekenntnis", "Declaration of faith", "Hitvallás", "Mărturisirea de credință"), bucketId: "pillar" },
          { text: L("Fasten (Ramadan)", "Fasting", "Böjt", "Postul"), bucketId: "pillar" },
          { text: L("Pyramiden", "Pyramids", "Piramisok", "Piramide"), bucketId: "other" },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "islam_entstehung",
    },
    {
      title: L("Expansion & Kalifat", "Expansion & Caliphate", "Terjeszkedés és kalifátus", "Expansiunea și Califatul"),
      text: L("Nach Mohammeds Tod breitete sich der Islam schnell aus, von Persien bis nach Spanien (Al-Andalus).", "After Muhammad's death, Islam spread rapidly, from Persia to Spain (Al-Andalus).", "Mohamed halála után az iszlám gyorsan elterjedt Perzsiától Spanyolországig (Al-Andalus).", "După moartea lui Mahomed, Islamul s-a răspândit rapid, din Persia până în Spania (Al-Andalus)."),
      svg: { type: "geschichte-diagram", name: "ShieldSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Kalif", "Caliph", "Kalifa", "Calif"), right: L("Nachfolger", "Successor", "Utód", "Succesor") },
          { left: L("Bagdad", "Baghdad", "Bagdad", "Bagdad"), right: L("Abbasiden", "Abbasids", "Abbászidák", "Abasizi") },
          { left: L("Cordoba", "Cordoba", "Córdoba", "Cordoba"), right: L("Spanien", "Spain", "Spanyolország", "Spania") },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "islam_expansion",
    },
    {
      title: L("Die Kreuzzüge", "The Crusades", "A keresztes hadjáratok", "Cruciadele"),
      text: L("Papst Urban II. rief 1095 zur Befreiung Jerusalems auf. Es kam zu jahrhundertelangen Konflikten zwischen Christen und Muslimen.", "Pope Urban II called for the liberation of Jerusalem in 1095. Centuries of conflict followed between Christians and Muslims.", "II. Orbán pápa 1095-ben szólított fel Jeruzsálem felszabadítására. Évszázados konfliktusok követték a keresztények és a muszlimok között.", "Papa Urban al II-lea a chemat la eliberarea Ierusalimului în 1095. Au urmat secole de conflict între creștini și musulmani."),
      svg: { type: "geschichte-diagram", name: "KnightSvg" },
      interactive: (k) => ({
        type: "gap-fill",
        text: L("Jerusalem wurde __ erobert. __ war ein muslimischer Führer.", "Jerusalem was conquered in __. __ was a Muslim leader.", "Jeruzsálemet __-ben foglalták el. __ muszlim vezető volt.", "Ierusalimul a fost cucerit în __. __ a fost un conducător musulman."),
        gaps: [
          { index: 0, options: [L("1099", "1099", "1099", "1099"), L("1492", "1492", "1492", "1492")], correct: 0 },
          { index: 1, options: [L("Saladin", "Saladin", "Szaladin", "Saladin"), L("Barbarossa", "Barbarossa", "Barbarossa", "Barbarossa")], correct: 0 },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "kreuzzuege",
    },
  ],
};

// ─── ISLAND 9: SPÄTMITTELALTER UND KRISEN ─────────────────────────────────

const I9: IslandSpec = {
  id: "i9",
  title: L("Spätmittelalter und Krisen", "Late Middle Ages and Crises", "Késő középkor és válságok", "Evul Mediu târziu și crize"),
  topics: [
    ...I9_EXTRA,
    {
      title: L("Folgen der Kreuzzüge", "Consequences of the Crusades", "A keresztes hadjáratok következményei", "Consecințele cruciadelor"),
      text: L("Durch die Kreuzzüge kamen neue Waren (Gewürze, Seide) und Wissen aus dem Orient nach Europa.", "The Crusades brought new goods (spices, silk) and knowledge from the Orient to Europe.", "A keresztes hadjáratok révén új áruk (fűszerek, selyem) és tudás érkezett a Keletről Európába.", "Cruciadele au adus mărfuri noi (condimente, mătase) și cunoștințe din Orient în Europa."),
      svg: { type: "geschichte-diagram", name: "ColumnSvg" },
      interactive: (k) => ({
        type: "match-pairs",
        pairs: [
          { left: L("Gewürze", "Spices", "Fűszerek", "Condimente"), right: L("Pfeffer", "Pepper", "Bors", "Piper") },
          { left: L("Ziffern", "Digits", "Számjegyek", "Cifre"), right: L("Arabische Ziffern", "Arabic numerals", "Arab számok", "Cifre arabe") },
          { left: L("Medizin", "Medicine", "Orvostudomány", "Medicină"), right: L("Neues Wissen", "New knowledge", "Új tudás", "Cunoștințe noi") },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "folgen_kreuzzuege",
    },
    {
      title: L("Kulturkontakt", "Cultural Contact", "Kulturális érintkezés", "Contact cultural"),
      text: L("In Spanien und Sizilien gab es Zeiten friedlichen Zusammenlebens von Christen, Juden und Muslimen (Convivencia).", "In Spain and Sicily, there were times of peaceful coexistence between Christians, Jews, and Muslims (Convivencia).", "Spanyolországban és Szicíliában voltak időszakok, amikor keresztények, zsidók és muszlimok békében éltek egymás mellett (Convivencia).", "În Spania și Sicilia au existat perioade de coexistență pașnică între creștini, evrei și musulmani (Convivencia)."),
      svg: { type: "geschichte-diagram", name: "PyramidSvg" },
      interactive: (k) => ({
        type: "drag-to-bucket",
        buckets: [
          { id: "place", label: L("Ort des Austauschs", "Place of exchange", "A csere helye", "Locul schimbului") },
          { id: "other", label: L("Anderes", "Other", "Egyéb", "Altele") },
        ],
        items: [
          { text: L("Toledo", "Toledo", "Toledo", "Toledo"), bucketId: "place" },
          { text: L("Palermo", "Palermo", "Palermo", "Palermo"), bucketId: "place" },
          { text: L("Nordpol", "North Pole", "Északi-sark", "Polul Nord"), bucketId: "other" },
        ],
        instruction: k("title"),
        hint1: "Tipp: Achte auf den Titel.",
        hint2: "Tipp: Lies den Erklärungstext."
      }),
      quiz: "kulturkontakt",
    },
    {
      title: L("Der Schwarze Tod", "The Black Death", "A fekete halál", "Moartea Neagră"),
      text: L("Die Pest (1347-1352) tötete fast die Hälfte der europäischen Bevölkerung und veränderte die Gesellschaft tiefgreifend.", "The plague (1347-1352) killed nearly half of the European population and profoundly changed society.", "A pestis (1347–1352) az európai lakosság közel felét megölte, és mélyrehatóan megváltoztatta a társadalmat.", "Ciuma (1347-1352) a ucis aproape jumătate din populația europeană și a schimbat profund societatea."),
      svg: { type: "geschichte-diagram", name: "ScrollSvg" },
      interactive: (k) => ({
        type: "word-order",
        words: [L("Ratte", "Rat", "Patkány", "Șobolan"), L("Floh", "Flea", "Bolha", "Purice"), L("Mensch", "Human", "Ember", "Om")],
        instruction: L("Ordne den Übertragungsweg der Pest", "Order the transmission path of the plague", "Rendezd a pestis terjedési útvonalát", "Ordonează calea de transmitere a ciumei"),
      }),
      quiz: "schwarzer_tod",
    },
  ],
};

const islands = [I1, I2, I3, I4, I5, I6, I7, I8, I9];
const built = islands.map(buildIsland);

export const GESCHICHTE_K6_I1_LABELS = built[0].labels;
export const GESCHICHTE_K6_I1_POOL = built[0].pool;
export const GESCHICHTE_K6_I2_LABELS = built[1].labels;
export const GESCHICHTE_K6_I2_POOL = built[1].pool;
export const GESCHICHTE_K6_I3_LABELS = built[2].labels;
export const GESCHICHTE_K6_I3_POOL = built[2].pool;
export const GESCHICHTE_K6_I4_LABELS = built[3].labels;
export const GESCHICHTE_K6_I4_POOL = built[3].pool;
export const GESCHICHTE_K6_I5_LABELS = built[4].labels;
export const GESCHICHTE_K6_I5_POOL = built[4].pool;
export const GESCHICHTE_K6_I6_LABELS = built[5].labels;
export const GESCHICHTE_K6_I6_POOL = built[5].pool;
export const GESCHICHTE_K6_I7_LABELS = built[6].labels;
export const GESCHICHTE_K6_I7_POOL = built[6].pool;
export const GESCHICHTE_K6_I8_LABELS = built[7].labels;
export const GESCHICHTE_K6_I8_POOL = built[7].pool;
export const GESCHICHTE_K6_I9_LABELS = built[8].labels;
export const GESCHICHTE_K6_I9_POOL = built[8].pool;
