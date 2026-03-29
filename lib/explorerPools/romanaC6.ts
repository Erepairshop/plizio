// lib/explorerPools/romanaC6.ts — AstroRomână Clasa 6
import type { PoolTopicDef, SvgConfig } from "./types";
import type { TopicInteractive } from "@/app/astro-biologie/games/ExplorerEngine";

type Difficulty = "easy" | "medium" | "hard";

type InteractiveSpec =
  | { type: "match-pairs"; pairs: [string, string][] }
  | { type: "drag-to-bucket"; buckets: { id: string; label: string }[]; items: { text: string; bucketId: string }[] }
  | { type: "highlight-text"; tokens: string[]; correctIndices: number[] }
  | { type: "sentence-build"; fragments: string[] }
  | { type: "word-order"; words: string[]; correctOrder: number[] }
  | { type: "gap-fill"; sentence: string; choices: [string, string, string, string]; correctIndex: number };

type TopicSpec = {
  title: string;
  text: string;
  svg: SvgConfig;
  interactive: InteractiveSpec;
  instruction: string;
  hint1: string;
  hint2: string;
  quizQuestion: string;
  quizChoices: [string, string, string, string];
  quizAnswer: 0 | 1 | 2 | 3;
  difficulty: Difficulty;
};

type LangLabels = Record<string, Record<string, string>>;

function cloneLabels(base: Record<string, string>): LangLabels {
  return {
    ro: { ...base },
    en: { ...base },
    hu: { ...base },
    de: { ...base },
  };
}

function buildLabels(title: string, topics: TopicSpec[]): LangLabels {
  const base: Record<string, string> = { explorer_title: title };

  topics.forEach((topic, index) => {
    const prefix = `t${index + 1}`;
    base[`${prefix}_title`] = topic.title;
    base[`${prefix}_text`] = topic.text;
    base[`${prefix}_inst`] = topic.instruction;
    base[`${prefix}_h1`] = topic.hint1;
    base[`${prefix}_h2`] = topic.hint2;
    base[`${prefix}_q`] = topic.quizQuestion;
    base[`${prefix}_qa`] = topic.quizChoices[0];
    base[`${prefix}_qb`] = topic.quizChoices[1];
    base[`${prefix}_qc`] = topic.quizChoices[2];
    base[`${prefix}_qd`] = topic.quizChoices[3];

    if (topic.interactive.type === "match-pairs") {
      topic.interactive.pairs.forEach(([left, right], pairIndex) => {
        base[`${prefix}_l${pairIndex + 1}`] = left;
        base[`${prefix}_r${pairIndex + 1}`] = right;
      });
    } else if (topic.interactive.type === "drag-to-bucket") {
      topic.interactive.buckets.forEach((bucket, bucketIndex) => {
        base[`${prefix}_b${bucketIndex + 1}`] = bucket.label;
      });
      topic.interactive.items.forEach((item, itemIndex) => {
        base[`${prefix}_i${itemIndex + 1}`] = item.text;
      });
    } else if (topic.interactive.type === "highlight-text") {
      topic.interactive.tokens.forEach((token, tokenIndex) => {
        base[`${prefix}_w${tokenIndex + 1}`] = token;
      });
    } else if (topic.interactive.type === "sentence-build") {
      topic.interactive.fragments.forEach((fragment, fragmentIndex) => {
        base[`${prefix}_f${fragmentIndex + 1}`] = fragment;
      });
    } else if (topic.interactive.type === "word-order") {
      topic.interactive.words.forEach((word, wordIndex) => {
        base[`${prefix}_w${wordIndex + 1}`] = word;
      });
    } else if (topic.interactive.type === "gap-fill") {
      base[`${prefix}_s`] = topic.interactive.sentence;
      base[`${prefix}_c1`] = topic.interactive.choices[0];
      base[`${prefix}_c2`] = topic.interactive.choices[1];
      base[`${prefix}_c3`] = topic.interactive.choices[2];
      base[`${prefix}_c4`] = topic.interactive.choices[3];
    }
  });

  return cloneLabels(base);
}

function buildInteractive(prefix: string, spec: InteractiveSpec): TopicInteractive {
  const withHints = <T extends object>(interactive: T): TopicInteractive =>
    ({
      ...interactive,
      instruction: `${prefix}_inst`,
      hint1: `${prefix}_h1`,
      hint2: `${prefix}_h2`,
    } as unknown as TopicInteractive);

  switch (spec.type) {
    case "match-pairs":
      return withHints({
        type: "match-pairs",
        pairs: spec.pairs.map(([left, right], index) => ({
          left: `${prefix}_l${index + 1}`,
          right: `${prefix}_r${index + 1}`,
        })),
      });
    case "drag-to-bucket":
      return withHints({
        type: "drag-to-bucket",
        buckets: spec.buckets.map((bucket, index) => ({
          id: bucket.id,
          label: `${prefix}_b${index + 1}`,
        })),
        items: spec.items.map((item, index) => ({
          text: `${prefix}_i${index + 1}`,
          bucketId: item.bucketId,
        })),
      });
    case "highlight-text":
      return withHints({
        type: "highlight-text",
        tokens: spec.tokens.map((_, index) => `${prefix}_w${index + 1}`),
        correctIndices: spec.correctIndices,
      });
    case "sentence-build":
      return withHints({
        type: "sentence-build",
        fragments: spec.fragments.map((_, index) => `${prefix}_f${index + 1}`),
      });
    case "word-order":
      return withHints({
        type: "word-order",
        words: spec.words.map((_, index) => `${prefix}_w${index + 1}`),
        correctOrder: spec.correctOrder,
      });
    case "gap-fill":
      return withHints({
        type: "gap-fill",
        sentence: `${prefix}_s`,
        choices: [`${prefix}_c1`, `${prefix}_c2`, `${prefix}_c3`, `${prefix}_c4`],
        correctIndex: spec.correctIndex,
      });
  }
}

function buildPool(topics: TopicSpec[]): PoolTopicDef[] {
  return topics.map((topic, index) => {
    const prefix = `t${index + 1}`;
    const answerKey = ["qa", "qb", "qc", "qd"][topic.quizAnswer];

    return {
      infoTitle: `${prefix}_title`,
      infoText: `${prefix}_text`,
      svg: topic.svg,
      hintKey: `${prefix}_h1`,
      interactive: buildInteractive(prefix, topic.interactive),
      quiz: {
        question: `${prefix}_q`,
        choices: [`${prefix}_qa`, `${prefix}_qb`, `${prefix}_qc`, `${prefix}_qd`],
        answer: `${prefix}_${answerKey}`,
      },
      difficulty: topic.difficulty,
    };
  });
}

function buildTheme(title: string, topics: TopicSpec[]) {
  return {
    labels: buildLabels(title, topics),
    pool: buildPool(topics),
  };
}

const MORFO6_TOPICS: TopicSpec[] = [
  {
    title: "Substantivul comun și propriu",
    text: "Pornim de la numele ființelor, al lucrurilor și al locurilor, apoi le despărțim în comune și proprii.",
    svg: {
      type: "icon-grid",
      items: [
        { emoji: "👧", label: "Ana" },
        { emoji: "🏫", label: "școală" },
        { emoji: "🏙️", label: "București" },
        { emoji: "📘", label: "carte" },
      ],
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "comune", label: "comune" },
        { id: "proprii", label: "proprii" },
      ],
      items: [
        { text: "copil", bucketId: "comune" },
        { text: "Ana", bucketId: "proprii" },
        { text: "oraș", bucketId: "comune" },
        { text: "București", bucketId: "proprii" },
        { text: "măr", bucketId: "comune" },
        { text: "Carpați", bucketId: "proprii" },
      ],
    },
    instruction: "Așază fiecare cuvânt în grupa potrivită.",
    hint1: "Numele speciale sunt proprii.",
    hint2: "Cuvintele obișnuite sunt comune.",
    quizQuestion: "Care cuvânt este substantiv propriu?",
    quizChoices: ["copil", "Ana", "măr", "masă"],
    quizAnswer: 1,
    difficulty: "easy",
  },
  {
    title: "Articolul hotărât și nehotărât",
    text: "Legăm articolul de substantiv și vedem dacă enunțul vorbește despre un lucru cunoscut sau despre unul nedefinit.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "un copil", color: "#7C3AED", bg: "#F3E8FF" },
        { text: "copilul", color: "#2563EB", bg: "#DBEAFE" },
        { text: "o carte", color: "#059669", bg: "#D1FAE5" },
        { text: "cartea", color: "#D97706", bg: "#FEF3C7" },
      ],
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "nehotarat", label: "nehotărât" },
        { id: "hotarat", label: "hotărât" },
      ],
      items: [
        { text: "un copil", bucketId: "nehotarat" },
        { text: "o carte", bucketId: "nehotarat" },
        { text: "copilul", bucketId: "hotarat" },
        { text: "cartea", bucketId: "hotarat" },
      ],
    },
    instruction: "Așază forma în grupa potrivită.",
    hint1: "Articolul nehotărât nu arată ceva anume.",
    hint2: "Articolul hotărât arată un nume cunoscut.",
    quizQuestion: "Care este forma articulată hotărât?",
    quizChoices: ["un", "o", "copilul", "niște"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Pronumele personale",
    text: "Folosim pronume ca să nu repetăm numele și le legăm de persoana potrivită.",
    svg: {
      type: "sentence-display",
      words: ["Eu", "citesc", "și", "tu", "scrii", "."],
      highlightIndices: [0, 3],
      color: "#3B82F6",
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "i", label: "persoana I" },
        { id: "ii", label: "persoana a II-a" },
        { id: "iii", label: "persoana a III-a" },
      ],
      items: [
        { text: "eu", bucketId: "i" },
        { text: "noi", bucketId: "i" },
        { text: "tu", bucketId: "ii" },
        { text: "voi", bucketId: "ii" },
        { text: "el", bucketId: "iii" },
        { text: "ea", bucketId: "iii" },
      ],
    },
    instruction: "Grupează pronumele după persoană.",
    hint1: "Persoana I vorbește despre sine.",
    hint2: "Persoana a III-a vorbește despre altcineva.",
    quizQuestion: "Ce pronume este la persoana a III-a?",
    quizChoices: ["eu", "tu", "el", "noi"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Numeralul",
    text: "Separăm numeralele cardinale de cele ordinale și vedem cum arată poziția în șir.",
    svg: {
      type: "word-display",
      word: "al treilea",
      highlightChars: ["a", "l"],
      color: "#F59E0B",
      subtitle: "numeral ordinal",
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "cardinale", label: "cardinale" },
        { id: "ordinale", label: "ordinale" },
      ],
      items: [
        { text: "doi", bucketId: "cardinale" },
        { text: "patru", bucketId: "cardinale" },
        { text: "al doilea", bucketId: "ordinale" },
        { text: "întâi", bucketId: "ordinale" },
        { text: "șase", bucketId: "cardinale" },
        { text: "al patrulea", bucketId: "ordinale" },
      ],
    },
    instruction: "Așază numeralele în grupa potrivită.",
    hint1: "Cardinalele spun câți sunt.",
    hint2: "Ordinalele spun locul în șir.",
    quizQuestion: "Care este numeral ordinal?",
    quizChoices: ["doi", "șase", "al doilea", "patru"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Adjectivul",
    text: "Găsim cuvintele care arată însușiri și le recunoaștem în enunț.",
    svg: {
      type: "sentence-display",
      words: ["Copilul", "vesel", "și", "harnic", "citește", "."],
      highlightIndices: [1, 3],
      color: "#10B981",
    },
    interactive: {
      type: "highlight-text",
      tokens: ["Copilul", "vesel", "și", "harnic", "citește", "zilnic"],
      correctIndices: [1, 3],
    },
    instruction: "Atinge cuvintele care sunt adjective.",
    hint1: "Adjectivul arată o însușire.",
    hint2: "De obicei stă lângă un substantiv.",
    quizQuestion: "Care cuvânt este adjectiv?",
    quizChoices: ["frumos", "aleargă", "masă", "copil"],
    quizAnswer: 0,
    difficulty: "hard",
  },
];

const VERB6_TOPICS: TopicSpec[] = [
  {
    title: "Infinitiv și formă personală",
    text: "Pornim de la forma de dicționar a verbului și o deosebim de formele care se schimbă după persoană și număr.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "a citi", color: "#7C3AED", bg: "#F3E8FF" },
        { text: "citesc", color: "#2563EB", bg: "#DBEAFE" },
        { text: "a merge", color: "#059669", bg: "#D1FAE5" },
        { text: "mergem", color: "#D97706", bg: "#FEF3C7" },
      ],
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "infinitiv", label: "infinitiv" },
        { id: "personal", label: "formă personală" },
      ],
      items: [
        { text: "a citi", bucketId: "infinitiv" },
        { text: "a merge", bucketId: "infinitiv" },
        { text: "citesc", bucketId: "personal" },
        { text: "aleargă", bucketId: "personal" },
        { text: "a scrie", bucketId: "infinitiv" },
        { text: "scriem", bucketId: "personal" },
      ],
    },
    instruction: "Așază verbul în grupa corectă.",
    hint1: "Infinitivul începe de obicei cu „a”.",
    hint2: "Forma personală se acordă cu subiectul.",
    quizQuestion: "Care este forma de infinitiv?",
    quizChoices: ["citesc", "scriem", "a citi", "aleargă"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Moduri nepersonale",
    text: "Fixăm infinitivul, gerunziul, participiul și supinul, apoi le recunoaștem după formă.",
    svg: {
      type: "word-display",
      word: "scriind",
      highlightChars: ["i", "n", "d"],
      color: "#8B5CF6",
      subtitle: "gerunziu",
    },
    interactive: {
      type: "match-pairs",
      pairs: [
        ["scriind", "gerunziu"],
        ["citit", "participiu"],
        ["a citi", "infinitiv"],
        ["de făcut", "supin"],
      ],
    },
    instruction: "Potrivește forma verbală cu modul ei.",
    hint1: "Gerunziul arată acțiunea în desfășurare.",
    hint2: "Participiul și supinul au forme specifice.",
    quizQuestion: "Ce mod este „scriind”?",
    quizChoices: ["infinitiv", "gerunziu", "participiu", "supin"],
    quizAnswer: 1,
    difficulty: "easy",
  },
  {
    title: "Diatezele verbului",
    text: "Aflăm dacă acțiunea este făcută de subiect, suferită de subiect sau întoarsă spre subiect.",
    svg: {
      type: "icon-grid",
      items: [
        { emoji: "✍️", label: "activă" },
        { emoji: "📚", label: "pasivă" },
        { emoji: "🧼", label: "reflexivă" },
        { emoji: "🎯", label: "acțiune" },
      ],
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "activa", label: "activă" },
        { id: "pasiva", label: "pasivă" },
        { id: "reflexiva", label: "reflexivă" },
      ],
      items: [
        { text: "Mihai citește", bucketId: "activa" },
        { text: "Ana desenează", bucketId: "activa" },
        { text: "Cartea este citită", bucketId: "pasiva" },
        { text: "Tema este făcută", bucketId: "pasiva" },
        { text: "Copilul se spală", bucketId: "reflexiva" },
        { text: "Ușa se deschide", bucketId: "reflexiva" },
      ],
    },
    instruction: "Grupează enunțurile după diateză.",
    hint1: "În diateza activă, subiectul face acțiunea.",
    hint2: "În reflexivă, acțiunea se întoarce spre subiect.",
    quizQuestion: "Care enunț este la diateza pasivă?",
    quizChoices: ["Mihai citește", "Cartea este citită", "Copilul se spală", "Ana desenează"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Timpuri simple",
    text: "Alegem timpul potrivit după indiciile din enunț și după forma verbului.",
    svg: {
      type: "sentence-display",
      words: ["Eu", "citesc", "acum", "și", "scriu", "zilnic", "."],
      highlightIndices: [1, 4],
      color: "#3B82F6",
    },
    interactive: {
      type: "gap-fill",
      sentence: "Eu ___ acum.",
      choices: ["citesc", "citeam", "voi citi", "citii"],
      correctIndex: 0,
    },
    instruction: "Completează enunțul cu forma potrivită.",
    hint1: "Cuvântul „acum” cere prezentul.",
    hint2: "Forma trebuie să se potrivească cu persoana I singular.",
    quizQuestion: "Care formă este la prezent?",
    quizChoices: ["citeam", "citesc", "voi citi", "citisem"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Acordul verbului",
    text: "Potrivim persoana și numărul verbului cu subiectul din enunț.",
    svg: {
      type: "sentence-display",
      words: ["Noi", "citim", "zilnic", "și", "scriem", "curat", "."],
      highlightIndices: [1, 4],
      color: "#10B981",
    },
    interactive: {
      type: "highlight-text",
      tokens: ["Noi", "citim", "zilnic", "și", "scriem", "curat"],
      correctIndices: [1, 4],
    },
    instruction: "Atinge verbele care se acordă corect cu subiectul.",
    hint1: "Subiectul „noi” cere verbul la plural.",
    hint2: "Verbele trebuie să fie la persoana I plural.",
    quizQuestion: "Ce formă este corectă cu subiectul „ei”?",
    quizChoices: ["merge", "merg", "mergi", "mergem"],
    quizAnswer: 1,
    difficulty: "hard",
  },
];

const PROP6_TOPICS: TopicSpec[] = [
  {
    title: "Subiectul",
    text: "Găsim cine face acțiunea sau despre cine se spune ceva în propoziție.",
    svg: {
      type: "sentence-display",
      words: ["Mara", "citește", "o", "carte", "."],
      highlightIndices: [0],
      color: "#6366F1",
    },
    interactive: {
      type: "highlight-text",
      tokens: ["Mara", "citește", "o", "carte", "în", "fiecare", "seară"],
      correctIndices: [0],
    },
    instruction: "Atinge cuvântul care este subiectul.",
    hint1: "Subiectul răspunde la întrebarea cine?",
    hint2: "De obicei este un substantiv sau un pronume.",
    quizQuestion: "Care cuvânt este subiect?",
    quizChoices: ["citește", "Mara", "carte", "o"],
    quizAnswer: 1,
    difficulty: "easy",
  },
  {
    title: "Predicatul verbal",
    text: "Recunoaștem partea care spune ce face subiectul și vedem verbul principal.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "Mara", color: "#7C3AED", bg: "#F3E8FF" },
        { text: "citește", color: "#2563EB", bg: "#DBEAFE" },
        { text: "copilul", color: "#059669", bg: "#D1FAE5" },
        { text: "aleargă", color: "#D97706", bg: "#FEF3C7" },
      ],
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "subiect", label: "subiect" },
        { id: "predicat", label: "predicat verbal" },
      ],
      items: [
        { text: "Mara", bucketId: "subiect" },
        { text: "copilul", bucketId: "subiect" },
        { text: "citește", bucketId: "predicat" },
        { text: "aleargă", bucketId: "predicat" },
        { text: "eleva", bucketId: "subiect" },
        { text: "scrie", bucketId: "predicat" },
      ],
    },
    instruction: "Grupează cuvintele după rolul lor.",
    hint1: "Predicatul verbal conține verbul principal.",
    hint2: "Subiectul arată cine face acțiunea.",
    quizQuestion: "Care este predicatul verbal?",
    quizChoices: ["Mara", "o carte", "citește", "frumos"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Complementul direct",
    text: "Răspunde la întrebările pe cine? și ce?, iar în propoziție completează acțiunea verbului.",
    svg: {
      type: "word-display",
      word: "o carte",
      highlightChars: ["c", "a", "r", "t", "e"],
      color: "#F59E0B",
      subtitle: "complement direct",
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "cd", label: "complement direct" },
        { id: "altul", label: "altă parte" },
      ],
      items: [
        { text: "o carte", bucketId: "cd" },
        { text: "pe Ana", bucketId: "cd" },
        { text: "tema", bucketId: "cd" },
        { text: "repede", bucketId: "altul" },
        { text: "ieri", bucketId: "altul" },
        { text: "frumos", bucketId: "altul" },
      ],
    },
    instruction: "Așază grupurile de cuvinte în categoria corectă.",
    hint1: "Complementul direct completează verbul.",
    hint2: "Îl căutăm cu întrebările pe cine? ce?",
    quizQuestion: "Care grup de cuvinte poate fi complement direct?",
    quizChoices: ["pe Ana", "foarte bine", "repede", "ieri"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Atributul",
    text: "Cuvântul care arată o însușire sau o determinare a substantivului este atributul.",
    svg: {
      type: "sentence-display",
      words: ["Cartea", "nouă", "stă", "pe", "masă", "."],
      highlightIndices: [1],
      color: "#EC4899",
    },
    interactive: {
      type: "gap-fill",
      sentence: "Cuvântul care determină substantivul se numește ___.",
      choices: ["atribut", "subiect", "predicat", "complement"],
      correctIndex: 0,
    },
    instruction: "Completează definiția corectă.",
    hint1: "Atributul stă lângă substantiv.",
    hint2: "Arată însușiri sau determinări.",
    quizQuestion: "Ce parte de propoziție determină substantivul?",
    quizChoices: ["atributul", "predicatul", "complementul", "numărul"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Propoziția simplă",
    text: "O propoziție simplă are un singur predicat și transmite o idee limpede.",
    svg: {
      type: "sentence-display",
      words: ["Mara", "citește", "o", "carte", "."],
      highlightIndices: [1],
      color: "#14B8A6",
    },
    interactive: {
      type: "word-order",
      words: ["Mara", "citește", "o", "carte"],
      correctOrder: [0, 1, 2, 3],
    },
    instruction: "Așază cuvintele în ordinea corectă.",
    hint1: "O propoziție simplă are o singură acțiune.",
    hint2: "Predicatul este verbul principal.",
    quizQuestion: "Cum se numește propoziția cu un singur predicat?",
    quizChoices: ["propoziție simplă", "frază", "interjecție", "grup nominal"],
    quizAnswer: 0,
    difficulty: "hard",
  },
];

const TEXT6A_TOPICS: TopicSpec[] = [
  {
    title: "Opinie, argument, exemplu, concluzie",
    text: "În textul argumentativ, fiecare idee are un rol clar și duce cititorul spre o concluzie.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "opinie", color: "#7C3AED", bg: "#F3E8FF" },
        { text: "argument", color: "#2563EB", bg: "#DBEAFE" },
        { text: "exemplu", color: "#059669", bg: "#D1FAE5" },
        { text: "concluzie", color: "#D97706", bg: "#FEF3C7" },
      ],
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "opinii", label: "opinie" },
        { id: "argumente", label: "argument" },
        { id: "exemple", label: "exemplu" },
        { id: "concluzii", label: "concluzie" },
      ],
      items: [
        { text: "Cred că lectura este importantă.", bucketId: "opinii" },
        { text: "Deoarece ne ajută să învățăm.", bucketId: "argumente" },
        { text: "De exemplu, citesc mai bine.", bucketId: "exemple" },
        { text: "În concluzie, citesc zilnic.", bucketId: "concluzii" },
      ],
    },
    instruction: "Așază fiecare enunț în rolul potrivit.",
    hint1: "Textul argumentativ începe cu o poziție clară.",
    hint2: "Argumentul și exemplul susțin opinia.",
    quizQuestion: "Care enunț exprimă o opinie?",
    quizChoices: [
      "Cred că lectura este importantă.",
      "Deoarece ne ajută să învățăm.",
      "De exemplu, citesc mai bine.",
      "În concluzie, citesc zilnic.",
    ],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Conectori logici",
    text: "Cuvintele de legătură arată cauza, consecința, adăugarea sau opoziția.",
    svg: {
      type: "icon-grid",
      items: [
        { emoji: "🔗", label: "deoarece" },
        { emoji: "➡️", label: "de aceea" },
        { emoji: "➕", label: "în plus" },
        { emoji: "↔️", label: "totuși" },
      ],
    },
    interactive: {
      type: "match-pairs",
      pairs: [
        ["deoarece", "cauză"],
        ["de aceea", "consecință"],
        ["în plus", "adăugare"],
        ["totuși", "opoziție"],
      ],
    },
    instruction: "Potrivește conectorul cu rolul lui.",
    hint1: "Fiecare conector arată o relație între idei.",
    hint2: "Cauza vine înaintea consecinței.",
    quizQuestion: "Care cuvânt arată o consecință?",
    quizChoices: ["deoarece", "totuși", "de aceea", "în plus"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Structura textului argumentativ",
    text: "Ordinea obișnuită este: opinie, argument, exemplu, concluzie.",
    svg: {
      type: "sentence-display",
      words: ["opinie", "argument", "exemplu", "concluzie"],
      highlightIndices: [0, 1, 2, 3],
      color: "#3B82F6",
    },
    interactive: {
      type: "word-order",
      words: ["opinie", "argument", "exemplu", "concluzie"],
      correctOrder: [0, 1, 2, 3],
    },
    instruction: "Așază pașii textului în ordinea corectă.",
    hint1: "Mai întâi vine ideea principală.",
    hint2: "La final apare concluzia.",
    quizQuestion: "Care este ordinea firească a unui text argumentativ?",
    quizChoices: [
      "opinie, argument, exemplu, concluzie",
      "exemplu, opinie, concluzie, argument",
      "concluzie, exemplu, argument, opinie",
      "argument, concluzie, opinie, exemplu",
    ],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Ideea principală",
    text: "Descoperim propoziția care poartă mesajul central și susține tema textului.",
    svg: {
      type: "sentence-display",
      words: ["Cred", "că", "lectura", "zilnică", "ajută", "mult", "."],
      highlightIndices: [0, 1, 2, 3, 4, 5],
      color: "#10B981",
    },
    interactive: {
      type: "highlight-text",
      tokens: ["Cred", "că", "lectura", "zilnică", "ajută", "mult"],
      correctIndices: [0, 1, 2, 3, 4, 5],
    },
    instruction: "Atinge enunțul care exprimă ideea centrală.",
    hint1: "Ideea principală concentrează mesajul textului.",
    hint2: "Nu este un exemplu, ci o teză.",
    quizQuestion: "Ce caută cititorul într-un text argumentativ?",
    quizChoices: ["tema principală", "punctul și virgula", "rima", "dialogul"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Concluzia",
    text: "Încheierea strânge ideile și întărește poziția autorului.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "În concluzie", color: "#D97706", bg: "#FEF3C7" },
        { text: "prin urmare", color: "#2563EB", bg: "#DBEAFE" },
        { text: "așadar", color: "#059669", bg: "#D1FAE5" },
        { text: "de aceea", color: "#7C3AED", bg: "#F3E8FF" },
      ],
    },
    interactive: {
      type: "gap-fill",
      sentence: "___, citesc zilnic și învăț mai bine.",
      choices: ["În concluzie", "De exemplu", "Totuși", "Chiar dacă"],
      correctIndex: 0,
    },
    instruction: "Completează începutul concluziei.",
    hint1: "La final folosim o formulă de încheiere.",
    hint2: "Concluzia recapitulă ideea principală.",
    quizQuestion: "Ce marchează de obicei concluzia?",
    quizChoices: ["încheierea", "titlul", "pragul", "dialogul"],
    quizAnswer: 0,
    difficulty: "hard",
  },
];

const STIL6_TOPICS: TopicSpec[] = [
  {
    title: "Pronumele personale în context",
    text: "Pronumele păstrează claritatea enunțului și evită repetările inutile.",
    svg: {
      type: "sentence-display",
      words: ["Eu", "scriu", "iar", "tu", "citești", "."],
      highlightIndices: [0, 3],
      color: "#8B5CF6",
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "i", label: "persoana I" },
        { id: "ii", label: "persoana a II-a" },
        { id: "iii", label: "persoana a III-a" },
      ],
      items: [
        { text: "eu", bucketId: "i" },
        { text: "noi", bucketId: "i" },
        { text: "tu", bucketId: "ii" },
        { text: "voi", bucketId: "ii" },
        { text: "el", bucketId: "iii" },
        { text: "ea", bucketId: "iii" },
      ],
    },
    instruction: "Grupează pronumele după persoană.",
    hint1: "Pronumele înlocuiește numele.",
    hint2: "Se schimbă după persoană și număr.",
    quizQuestion: "Ce pronume este la persoana a II-a?",
    quizChoices: ["eu", "tu", "noi", "el"],
    quizAnswer: 1,
    difficulty: "easy",
  },
  {
    title: "Adverbele",
    text: "Adverbele adaugă informații despre loc, timp, mod sau frecvență.",
    svg: {
      type: "icon-grid",
      items: [
        { emoji: "🏃", label: "repede" },
        { emoji: "🕒", label: "azi" },
        { emoji: "📍", label: "aici" },
        { emoji: "🔁", label: "des" },
      ],
    },
    interactive: {
      type: "match-pairs",
      pairs: [
        ["repede", "mod"],
        ["azi", "timp"],
        ["aici", "loc"],
        ["des", "frecvență"],
      ],
    },
    instruction: "Potrivește adverbul cu ideea pe care o arată.",
    hint1: "Adverbul completează verbul.",
    hint2: "Poate arăta locul, timpul sau felul acțiunii.",
    quizQuestion: "Care cuvânt este adverb?",
    quizChoices: ["frumos", "azi", "carte", "copil"],
    quizAnswer: 1,
    difficulty: "easy",
  },
  {
    title: "Prepozițiile",
    text: "Prepozițiile leagă cuvintele și cer un anumit caz în propoziție.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "pe", color: "#2563EB", bg: "#DBEAFE" },
        { text: "la", color: "#059669", bg: "#D1FAE5" },
        { text: "din", color: "#D97706", bg: "#FEF3C7" },
        { text: "sub", color: "#7C3AED", bg: "#F3E8FF" },
      ],
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "prepozitii", label: "prepoziții" },
        { id: "adverbe", label: "adverbe" },
      ],
      items: [
        { text: "pe", bucketId: "prepozitii" },
        { text: "la", bucketId: "prepozitii" },
        { text: "din", bucketId: "prepozitii" },
        { text: "sus", bucketId: "adverbe" },
        { text: "acum", bucketId: "adverbe" },
        { text: "deasupra", bucketId: "adverbe" },
      ],
    },
    instruction: "Separa cuvintele de legătură de cele care arată locul sau timpul.",
    hint1: "Prepoziția stă înaintea unui nume sau pronume.",
    hint2: "Adverbul poate sta singur în enunț.",
    quizQuestion: "Care cuvânt este prepoziție?",
    quizChoices: ["pe", "azi", "repede", "frumos"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Locuțiunile și nuanța",
    text: "Unele grupuri de cuvinte dau o nuanță mai precisă ideii și fac exprimarea mai bogată.",
    svg: {
      type: "word-display",
      word: "cu spor",
      highlightChars: ["s", "p", "o", "r"],
      color: "#EC4899",
      subtitle: "locuțiune adverbială",
    },
    interactive: {
      type: "sentence-build",
      fragments: ["Copilul", "învață", "cu", "spor"],
    },
    instruction: "Așază cuvintele în ordinea corectă.",
    hint1: "Locuțiunea este un grup de cuvinte cu sens unitar.",
    hint2: "Ea poate adăuga o nuanță expresivă.",
    quizQuestion: "Ce aduce o locuțiune în enunț?",
    quizChoices: ["o nuanță mai precisă", "o greșeală", "o literă mare", "o întrebare"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Enunțul expresiv",
    text: "Alegem formularea care sună mai clar, mai vie și mai exactă.",
    svg: {
      type: "sentence-display",
      words: ["Afară", "plouă", "tare", "și", "rece", "."],
      highlightIndices: [2, 4],
      color: "#14B8A6",
    },
    interactive: {
      type: "gap-fill",
      sentence: "Afară plouă ___ și rece.",
      choices: ["tare", "măr", "caiet", "cale"],
      correctIndex: 0,
    },
    instruction: "Completează enunțul cu cuvântul potrivit.",
    hint1: "Caută un cuvânt care intensifică sensul.",
    hint2: "Enunțul expresiv este mai viu și mai precis.",
    quizQuestion: "Ce adaugă un enunț expresiv?",
    quizChoices: ["claritate", "zgomot", "dezordine", "silabe"],
    quizAnswer: 0,
    difficulty: "hard",
  },
];

const FIG6_TOPICS: TopicSpec[] = [
  {
    title: "Comparația",
    text: "Comparația apropie două imagini printr-un cuvânt de legătură precum „ca” sau „precum”.",
    svg: {
      type: "rhyme-pair",
      word1: "alb ca zăpada",
      word2: "rapid ca vântul",
      color: "#F59E0B",
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "comparatie", label: "comparație" },
        { id: "alta", label: "altă figură" },
      ],
      items: [
        { text: "ca un fulg", bucketId: "comparatie" },
        { text: "precum o stea", bucketId: "comparatie" },
        { text: "alb ca zăpada", bucketId: "comparatie" },
        { text: "tare ca piatra", bucketId: "comparatie" },
        { text: "vântul rece", bucketId: "alta" },
        { text: "soarele zâmbește", bucketId: "alta" },
      ],
    },
    instruction: "Așază exemplele în categoria potrivită.",
    hint1: "Comparația spune explicit că două lucruri seamănă.",
    hint2: "De obicei apare un cuvânt de legătură.",
    quizQuestion: "Ce marcă apare de obicei în comparație?",
    quizChoices: ["ca", "și", "dar", "de"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Epitetul",
    text: "Epitetul însoțește substantivul și îi colorează sensul printr-o însușire expresivă.",
    svg: {
      type: "sentence-display",
      words: ["vântul", "rece", "și", "aspru", "bate", "."],
      highlightIndices: [1, 3],
      color: "#8B5CF6",
    },
    interactive: {
      type: "highlight-text",
      tokens: ["vântul", "rece", "și", "aspru", "bate", "tare"],
      correctIndices: [1, 3],
    },
    instruction: "Atinge cuvintele care sunt epitete.",
    hint1: "Epitetele stau lângă un substantiv.",
    hint2: "Ele arată o însușire expresivă.",
    quizQuestion: "Care grup conține un epitet?",
    quizChoices: ["vântul rece", "merge repede", "carte și caiet", "peste drum"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Personificarea",
    text: "Personificarea dă lucrurilor sau naturii trăsături omenești.",
    svg: {
      type: "simple-icon",
      icon: "🌞",
      color: "#F97316",
    },
    interactive: {
      type: "sentence-build",
      fragments: ["Soarele", "zâmbește", "dimineața"],
    },
    instruction: "Construiește enunțul care sugerează personificarea.",
    hint1: "Atribuie naturii o acțiune omenească.",
    hint2: "Nu este o descriere literală.",
    quizQuestion: "Ce figură de stil apare când natura primește trăsături omenești?",
    quizChoices: ["personificare", "comparație", "enumerație", "repere"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Repetiția și enumerarea",
    text: "Repetiția insistă asupra unei idei, iar enumerarea adună mai multe elemente în șir.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "iar și iar", color: "#2563EB", bg: "#DBEAFE" },
        { text: "mere, pere, prune", color: "#059669", bg: "#D1FAE5" },
        { text: "sus, jos, peste tot", color: "#D97706", bg: "#FEF3C7" },
        { text: "tot mai tare", color: "#7C3AED", bg: "#F3E8FF" },
      ],
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "repetitie", label: "repetiție" },
        { id: "enumerare", label: "enumerare" },
      ],
      items: [
        { text: "iar și iar", bucketId: "repetitie" },
        { text: "tot mai tare", bucketId: "repetitie" },
        { text: "mere, pere, prune", bucketId: "enumerare" },
        { text: "sus, jos, peste tot", bucketId: "enumerare" },
      ],
    },
    instruction: "Separa repetiția de enumerare.",
    hint1: "Repetiția revine asupra aceluiași cuvânt sau aceleiași idei.",
    hint2: "Enumerarea adună mai multe elemente.",
    quizQuestion: "Ce face enumerarea?",
    quizChoices: ["adună elemente", "ascunde sensul", "scurtează fraza", "șterge verbul"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Metafora",
    text: "Metafora sugerează o asemănare fără să o spună direct.",
    svg: {
      type: "word-display",
      word: "marea de oameni",
      highlightChars: ["m", "a", "r", "e"],
      color: "#10B981",
      subtitle: "metaforă",
    },
    interactive: {
      type: "gap-fill",
      sentence: "Marea de oameni a umplut piața.",
      choices: ["metaforă", "comparație", "epitet", "adverb"],
      correctIndex: 0,
    },
    instruction: "Completează cu numele figurii de stil.",
    hint1: "Aici sensul este sugerat, nu explicat direct.",
    hint2: "Nu apare cuvântul „ca”.",
    quizQuestion: "Care figură de stil sugerează o asemănare fără să o spună direct?",
    quizChoices: ["metafora", "comparația", "numeralul", "articolul"],
    quizAnswer: 0,
    difficulty: "hard",
  },
];

const ORT6_TOPICS: TopicSpec[] = [
  {
    title: "Î și â în cuvinte",
    text: "În română, literele î și â apar în contexte precise și trebuie scrise corect.",
    svg: {
      type: "letter-circles",
      letters: ["î", "â", "î", "â"],
      color: "#B44DFF",
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "ii", label: "î" },
        { id: "aa", label: "â" },
      ],
      items: [
        { text: "în", bucketId: "ii" },
        { text: "înger", bucketId: "ii" },
        { text: "cânt", bucketId: "aa" },
        { text: "român", bucketId: "aa" },
        { text: "învăț", bucketId: "ii" },
        { text: "pâine", bucketId: "aa" },
      ],
    },
    instruction: "Așază cuvintele la litera potrivită.",
    hint1: "Scrierea depinde de poziția din cuvânt.",
    hint2: "Exersează forma corectă a fiecărui cuvânt.",
    quizQuestion: "În care cuvânt apare litera â?",
    quizChoices: ["în", "înger", "cânt", "învăț"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Ș și ț",
    text: "Diacriticele schimbă felul în care scriem și citim cuvântul.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "școală", color: "#2563EB", bg: "#DBEAFE" },
        { text: "țăran", color: "#059669", bg: "#D1FAE5" },
        { text: "ușă", color: "#D97706", bg: "#FEF3C7" },
        { text: "frunză", color: "#7C3AED", bg: "#F3E8FF" },
      ],
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "s", label: "ș" },
        { id: "t", label: "ț" },
      ],
      items: [
        { text: "școală", bucketId: "s" },
        { text: "ușă", bucketId: "s" },
        { text: "țăran", bucketId: "t" },
        { text: "rețetă", bucketId: "t" },
      ],
    },
    instruction: "Grupează cuvintele după diacritică.",
    hint1: "Litera ș se aude ca în „șarpe”.",
    hint2: "Litera ț se aude ca în „țap”.",
    quizQuestion: "Care cuvânt conține litera ț?",
    quizChoices: ["școală", "ușă", "țăran", "șir"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Cratima",
    text: "Cratima leagă părți de cuvinte sau forme scurte și ajută la scrierea corectă.",
    svg: {
      type: "word-display",
      word: "s-a",
      highlightChars: ["-"],
      color: "#F59E0B",
      subtitle: "scriere cu cratimă",
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "cu", label: "cu cratimă" },
        { id: "fara", label: "fără cratimă" },
      ],
      items: [
        { text: "s-a", bucketId: "cu" },
        { text: "i-am", bucketId: "cu" },
        { text: "m-a", bucketId: "cu" },
        { text: "deși", bucketId: "fara" },
        { text: "copilul", bucketId: "fara" },
        { text: "mereu", bucketId: "fara" },
      ],
    },
    instruction: "Așază formele în grupa corectă.",
    hint1: "Cratima unește elemente scurte.",
    hint2: "Apare des în vorbirea și scrierea curentă.",
    quizQuestion: "Care formă se scrie cu cratimă?",
    quizChoices: ["sau", "mama", "s-a", "deja"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Semnele de punctuație",
    text: "Punctul, virgula, semnul întrebării și exclamării organizează enunțul.",
    svg: {
      type: "sentence-display",
      words: ["Mergem", "la", "mare", "?", "!"],
      highlightIndices: [3, 4],
      color: "#10B981",
    },
    interactive: {
      type: "gap-fill",
      sentence: "Mergem la mare ___.",
      choices: [".", "?", "!", ","],
      correctIndex: 0,
    },
    instruction: "Completează cu semnul corect.",
    hint1: "La sfârșitul unui enunț afirmativ folosim punctul.",
    hint2: "Semnul potrivit depinde de intenția enunțului.",
    quizQuestion: "Ce semn marchează o întrebare?",
    quizChoices: [".", "?", "!", ","],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Dialogul scris",
    text: "În dialog, folosim semne speciale ca să marcăm vorbirea directă.",
    svg: {
      type: "sentence-display",
      words: ["—", "Bună,", "Ana!", "—", "spuse", "Mara", "."],
      highlightIndices: [0, 3],
      color: "#3B82F6",
    },
    interactive: {
      type: "sentence-build",
      fragments: ["—", "Bună,", "Ana!", "—", "spuse", "Mara", "."],
    },
    instruction: "Așază elementele dialogului în ordinea corectă.",
    hint1: "Dialogul începe și se încheie cu semne speciale.",
    hint2: "Vorbirea directă trebuie marcată clar.",
    quizQuestion: "Ce semn arată începerea dialogului?",
    quizChoices: ["—", ".", ",", "?"],
    quizAnswer: 0,
    difficulty: "hard",
  },
];

const TEXT6L_TOPICS: TopicSpec[] = [
  {
    title: "Genurile literare",
    text: "Recunoaștem dacă textul povestește, exprimă sentimente sau se joacă în scenă.",
    svg: {
      type: "icon-grid",
      items: [
        { emoji: "📖", label: "epic" },
        { emoji: "🎶", label: "liric" },
        { emoji: "🎭", label: "dramatic" },
        { emoji: "🪶", label: "literar" },
      ],
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "epic", label: "epic" },
        { id: "liric", label: "liric" },
        { id: "dramatic", label: "dramatic" },
      ],
      items: [
        { text: "povestește întâmplări", bucketId: "epic" },
        { text: "exprimă sentimente", bucketId: "liric" },
        { text: "se citește pe scenă", bucketId: "dramatic" },
        { text: "are personaje și acțiune", bucketId: "epic" },
        { text: "are ritm și imagine", bucketId: "liric" },
        { text: "are replici", bucketId: "dramatic" },
      ],
    },
    instruction: "Grupează indiciile după genul literar.",
    hint1: "Epic = poveste.",
    hint2: "Liric = emoție; dramatic = scenă.",
    quizQuestion: "Ce gen literar exprimă cel mai direct sentimente?",
    quizChoices: ["epic", "liric", "dramatic", "narativ"],
    quizAnswer: 1,
    difficulty: "easy",
  },
  {
    title: "Personaje și acțiune",
    text: "În textele literare, personajele și faptele lor se urmăresc împreună.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "personaj", color: "#2563EB", bg: "#DBEAFE" },
        { text: "acțiune", color: "#059669", bg: "#D1FAE5" },
        { text: "narator", color: "#D97706", bg: "#FEF3C7" },
        { text: "dialog", color: "#7C3AED", bg: "#F3E8FF" },
      ],
    },
    interactive: {
      type: "match-pairs",
      pairs: [
        ["personaj", "cine?"],
        ["acțiune", "ce face?"],
        ["narator", "povestește"],
        ["dialog", "replici"],
      ],
    },
    instruction: "Potrivește termenul cu explicația lui.",
    hint1: "Personajul participă la întâmplare.",
    hint2: "Acțiunea spune ce se întâmplă.",
    quizQuestion: "Cine povestește într-un text epic?",
    quizChoices: ["naratorul", "epitetul", "subiectul", "adjectivul"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Indicii lirici",
    text: "Cuvintele cu imagine și emoție trădează un text liric.",
    svg: {
      type: "sentence-display",
      words: ["Luna", "albă", "strălucește", "în", "noapte", "."],
      highlightIndices: [1, 2],
      color: "#8B5CF6",
    },
    interactive: {
      type: "highlight-text",
      tokens: ["Luna", "albă", "strălucește", "în", "noapte", "adâncă"],
      correctIndices: [1, 2, 5],
    },
    instruction: "Atinge cuvintele care dau o imagine poetică.",
    hint1: "Caută cuvinte care sugerează emoție sau imagine.",
    hint2: "Textul liric folosește expresivitatea.",
    quizQuestion: "Care indiciu arată cel mai bine un text liric?",
    quizChoices: ["sentimentul", "instrucțiunea", "ordinea", "schema"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Succesiunea evenimentelor",
    text: "În narațiune, evenimentele se așază într-o ordine clară.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "mai întâi", color: "#2563EB", bg: "#DBEAFE" },
        { text: "apoi", color: "#059669", bg: "#D1FAE5" },
        { text: "după aceea", color: "#D97706", bg: "#FEF3C7" },
        { text: "la final", color: "#7C3AED", bg: "#F3E8FF" },
      ],
    },
    interactive: {
      type: "word-order",
      words: ["mai întâi", "apoi", "după aceea", "la final"],
      correctOrder: [0, 1, 2, 3],
    },
    instruction: "Așază pașii povestirii în ordinea corectă.",
    hint1: "O întâmplare are început, cuprins și sfârșit.",
    hint2: "Ordinea ajută la înțelegerea firului narativ.",
    quizQuestion: "Ce urmează după „mai întâi” într-o povestire?",
    quizChoices: ["apoi", "la final", "niciodată", "înapoi"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Mesajul textului",
    text: "Mesajul ne arată ce învățătură sau idee rămâne după lectură.",
    svg: {
      type: "word-display",
      word: "mesaj",
      highlightChars: ["m", "s", "j"],
      color: "#10B981",
      subtitle: "ideea care rămâne",
    },
    interactive: {
      type: "gap-fill",
      sentence: "Mesajul textului este ___.",
      choices: ["ideea principală", "rima", "virgula", "dialogul"],
      correctIndex: 0,
    },
    instruction: "Completează cu formularea corectă.",
    hint1: "Mesajul transmite învățătura textului.",
    hint2: "Nu este același lucru cu forma lui.",
    quizQuestion: "Ce caută cititorul după lectură?",
    quizChoices: ["mesajul", "cratima", "versul", "cifra"],
    quizAnswer: 0,
    difficulty: "hard",
  },
];

const RECAP6_TOPICS: TopicSpec[] = [
  {
    title: "Reamintirea categoriilor",
    text: "Punem împreună cuvinte și noțiuni din morfologie, sintaxă, stilistică și text.",
    svg: {
      type: "icon-grid",
      items: [
        { emoji: "📚", label: "morfologie" },
        { emoji: "🧠", label: "sintaxă" },
        { emoji: "🎨", label: "stil" },
        { emoji: "📝", label: "text" },
      ],
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "morfologie", label: "morfologie" },
        { id: "sintaxa", label: "sintaxă" },
        { id: "stilistica", label: "stilistică" },
        { id: "text", label: "text" },
      ],
      items: [
        { text: "substantiv", bucketId: "morfologie" },
        { text: "verb", bucketId: "morfologie" },
        { text: "subiect", bucketId: "sintaxa" },
        { text: "predicat", bucketId: "sintaxa" },
        { text: "epitet", bucketId: "stilistica" },
        { text: "concluzie", bucketId: "text" },
      ],
    },
    instruction: "Grupează noțiunile după domeniu.",
    hint1: "Gândește-te la tema fiecărui cuvânt.",
    hint2: "Unele țin de cuvinte, altele de propoziții și texte.",
    quizQuestion: "Care termen ține de sintaxă?",
    quizChoices: ["subiect", "epitet", "concluzie", "articol"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Identificare rapidă",
    text: "Recunoaștem în enunț cuvintele care spun cine, ce face și cum.",
    svg: {
      type: "sentence-display",
      words: ["Ana", "scrie", "repede", "și", "clar", "."],
      highlightIndices: [0, 1, 2, 4],
      color: "#3B82F6",
    },
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "subiect", label: "subiect" },
        { id: "predicat", label: "predicat" },
        { id: "adverb", label: "adverb" },
      ],
      items: [
        { text: "Ana", bucketId: "subiect" },
        { text: "cartea", bucketId: "subiect" },
        { text: "scrie", bucketId: "predicat" },
        { text: "merge", bucketId: "predicat" },
        { text: "repede", bucketId: "adverb" },
        { text: "clar", bucketId: "adverb" },
      ],
    },
    instruction: "Așază cuvintele în rolul corect.",
    hint1: "Subiectul spune cine face acțiunea.",
    hint2: "Adverbul arată cum se desfășoară acțiunea.",
    quizQuestion: "Care cuvânt arată felul acțiunii?",
    quizChoices: ["Ana", "scrie", "repede", "carte"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Analiză scurtă",
    text: "Observăm repede cuvintele care dau sens și ritm unui text.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "frumos", color: "#2563EB", bg: "#DBEAFE" },
        { text: "ca", color: "#059669", bg: "#D1FAE5" },
        { text: "vântul", color: "#D97706", bg: "#FEF3C7" },
        { text: "mereu", color: "#7C3AED", bg: "#F3E8FF" },
      ],
    },
    interactive: {
      type: "highlight-text",
      tokens: ["frumos", "ca", "vântul", "mereu", "și", "tare"],
      correctIndices: [0, 1, 2, 3],
    },
    instruction: "Atinge cuvintele importante pentru sens.",
    hint1: "Gândește-te la adjectiv, comparație și adverb.",
    hint2: "Nu toate cuvintele au același rol.",
    quizQuestion: "Care cuvânt este adverb în enunț?",
    quizChoices: ["frumos", "ca", "vântul", "mereu"],
    quizAnswer: 3,
    difficulty: "medium",
  },
  {
    title: "Ordinea ideilor",
    text: "Punem ideile în șir, de la observație la concluzie.",
    svg: {
      type: "sentence-display",
      words: ["observație", "argument", "exemplu", "concluzie"],
      highlightIndices: [0, 1, 2, 3],
      color: "#EC4899",
    },
    interactive: {
      type: "word-order",
      words: ["observație", "argument", "exemplu", "concluzie"],
      correctOrder: [0, 1, 2, 3],
    },
    instruction: "Așază ideile în succesiunea firească.",
    hint1: "În recapitulare, ordinea ajută la fixare.",
    hint2: "Pornim de la idee și ajungem la concluzie.",
    quizQuestion: "Ce vine la final într-o demonstrație scurtă?",
    quizChoices: ["concluzia", "adjectivul", "subiectul", "litera"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Final de recapitulare",
    text: "La final alegem termenul potrivit și închidem exercițiul sigur.",
    svg: {
      type: "word-display",
      word: "recapitulare",
      highlightChars: ["r", "c", "p"],
      color: "#10B981",
      subtitle: "tot ce am fixat",
    },
    interactive: {
      type: "gap-fill",
      sentence: "La final aleg termenul ___.",
      choices: ["potrivit", "întâmplător", "invers", "gol"],
      correctIndex: 0,
    },
    instruction: "Completează enunțul final.",
    hint1: "Alege cuvântul care exprimă exactitatea.",
    hint2: "Recapitularea verifică ce ai fixat.",
    quizQuestion: "Ce face recapitularea?",
    quizChoices: ["fixează și verifică", "încurcă", "scurtează lectura", "șterge textul"],
    quizAnswer: 0,
    difficulty: "hard",
  },
];

const MORFO6 = buildTheme("Morfologie avansată", MORFO6_TOPICS);
const VERB6 = buildTheme("Verbul - Moduri și timpuri", VERB6_TOPICS);
const PROP6 = buildTheme("Propoziția - Analiză", PROP6_TOPICS);
const TEXT6A = buildTheme("Textul argumentativ", TEXT6A_TOPICS);
const STIL6 = buildTheme("Stilistică de bază", STIL6_TOPICS);
const FIG6 = buildTheme("Figuri de stil", FIG6_TOPICS);
const ORT6 = buildTheme("Ortografie C6", ORT6_TOPICS);
const TEXT6L = buildTheme("Textul literar C6", TEXT6L_TOPICS);
const RECAP6 = buildTheme("Recapitulare C6", RECAP6_TOPICS);

export const MORFO6_LABELS = MORFO6.labels;
export const MORFO6_POOL = MORFO6.pool;

export const VERB6_LABELS = VERB6.labels;
export const VERB6_POOL = VERB6.pool;

export const PROP6_LABELS = PROP6.labels;
export const PROP6_POOL = PROP6.pool;

export const TEXT6A_LABELS = TEXT6A.labels;
export const TEXT6A_POOL = TEXT6A.pool;

export const STIL6_LABELS = STIL6.labels;
export const STIL6_POOL = STIL6.pool;

export const FIG6_LABELS = FIG6.labels;
export const FIG6_POOL = FIG6.pool;

export const ORT6_LABELS = ORT6.labels;
export const ORT6_POOL = ORT6.pool;

export const TEXT6L_LABELS = TEXT6L.labels;
export const TEXT6L_POOL = TEXT6L.pool;

export const RECAP6_LABELS = RECAP6.labels;
export const RECAP6_POOL = RECAP6.pool;
