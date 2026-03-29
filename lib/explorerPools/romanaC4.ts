// lib/explorerPools/romanaC4.ts — conținut AstroRomână clasa a IV-a
import type { PoolTopicDef, SvgConfig } from "./types";
import type { TopicInteractive } from "@/app/astro-biologie/games/ExplorerEngine";

type Difficulty = "easy" | "medium" | "hard";

type InteractiveSpec =
  | { type: "match-pairs"; pairs: [string, string][] }
  | { type: "drag-to-bucket"; buckets: { id: string; label: string }[]; items: { text: string; bucketId: string }[] }
  | { type: "highlight-text"; tokens: string[]; correctIndices: number[] }
  | { type: "sentence-build"; fragments: string[] }
  | { type: "tap-count"; tapCount: { emoji: string; count: number } };

type TopicSpec = {
  title: string;
  text: string;
  svg: SvgConfig;
  instruction: string;
  hint1: string;
  hint2: string;
  interactive: InteractiveSpec;
  quizQuestion: string;
  quizChoices: [string, string, string, string];
  quizAnswer: 0 | 1 | 2 | 3;
  difficulty: Difficulty;
};

type LangLabels = Record<string, Record<string, string>>;

const h = (tokens: string[], correctIndices: number[]): InteractiveSpec => ({
  type: "highlight-text",
  tokens,
  correctIndices,
});

const p = (pairs: [string, string][]): InteractiveSpec => ({
  type: "match-pairs",
  pairs,
});

const db = (
  buckets: { id: string; label: string }[],
  items: { text: string; bucketId: string }[]
): InteractiveSpec => ({
  type: "drag-to-bucket",
  buckets,
  items,
});

const sb = (fragments: string[]): InteractiveSpec => ({
  type: "sentence-build",
  fragments,
});

const tc = (emoji: string, count: number): InteractiveSpec => ({
  type: "tap-count",
  tapCount: { emoji, count },
});

function buildInteractive(prefix: string, spec: InteractiveSpec): TopicInteractive {
  switch (spec.type) {
    case "match-pairs":
      return {
        type: "match-pairs",
        pairs: spec.pairs.map(([left, right], index) => ({
          left: `${prefix}_l${index + 1}`,
          right: `${prefix}_r${index + 1}`,
        })),
        instruction: `${prefix}_inst`,
        hint1: `${prefix}_h1`,
        hint2: `${prefix}_h2`,
      };
    case "drag-to-bucket":
      return {
        type: "drag-to-bucket",
        buckets: spec.buckets.map((bucket, index) => ({
          id: bucket.id,
          label: `${prefix}_b${index + 1}`,
        })),
        items: spec.items.map((item, index) => ({
          text: `${prefix}_i${index + 1}`,
          bucketId: item.bucketId,
        })),
        instruction: `${prefix}_inst`,
        hint1: `${prefix}_h1`,
        hint2: `${prefix}_h2`,
      };
    case "highlight-text":
      return {
        type: "highlight-text",
        tokens: spec.tokens.map((_, index) => `${prefix}_w${index + 1}`),
        correctIndices: spec.correctIndices,
        instruction: `${prefix}_inst`,
        hint1: `${prefix}_h1`,
        hint2: `${prefix}_h2`,
      };
    case "sentence-build":
      return {
        type: "sentence-build",
        fragments: spec.fragments.map((_, index) => `${prefix}_f${index + 1}`),
        instruction: `${prefix}_inst`,
        hint1: `${prefix}_h1`,
        hint2: `${prefix}_h2`,
      };
    case "tap-count":
      return {
        type: "tap-count",
        tapCount: spec.tapCount,
        instruction: `${prefix}_inst`,
        hint1: `${prefix}_h1`,
        hint2: `${prefix}_h2`,
      };
  }
}

function buildLabels(explorerTitle: string, topics: TopicSpec[]): LangLabels {
  const ro: Record<string, string> = { explorer_title: explorerTitle };

  topics.forEach((topic, index) => {
    const prefix = `t${index + 1}`;
    ro[`${prefix}_title`] = topic.title;
    ro[`${prefix}_text`] = topic.text;
    ro[`${prefix}_inst`] = topic.instruction;
    ro[`${prefix}_h1`] = topic.hint1;
    ro[`${prefix}_h2`] = topic.hint2;
    ro[`${prefix}_q`] = topic.quizQuestion;
    ro[`${prefix}_qa`] = topic.quizChoices[0];
    ro[`${prefix}_qb`] = topic.quizChoices[1];
    ro[`${prefix}_qc`] = topic.quizChoices[2];
    ro[`${prefix}_qd`] = topic.quizChoices[3];

    if (topic.interactive.type === "match-pairs") {
      topic.interactive.pairs.forEach(([left, right], pairIndex) => {
        ro[`${prefix}_l${pairIndex + 1}`] = left;
        ro[`${prefix}_r${pairIndex + 1}`] = right;
      });
    }

    if (topic.interactive.type === "drag-to-bucket") {
      topic.interactive.buckets.forEach((bucket, bucketIndex) => {
        ro[`${prefix}_b${bucketIndex + 1}`] = bucket.label;
      });
      topic.interactive.items.forEach((item, itemIndex) => {
        ro[`${prefix}_i${itemIndex + 1}`] = item.text;
      });
    }

    if (topic.interactive.type === "highlight-text") {
      topic.interactive.tokens.forEach((token, tokenIndex) => {
        ro[`${prefix}_w${tokenIndex + 1}`] = token;
      });
    }

    if (topic.interactive.type === "sentence-build") {
      topic.interactive.fragments.forEach((fragment, fragmentIndex) => {
        ro[`${prefix}_f${fragmentIndex + 1}`] = fragment;
      });
    }
  });

  return { ro, en: { ...ro }, hu: { ...ro }, de: { ...ro } };
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

const SUBST4_TOPICS: TopicSpec[] = [
  {
    title: "Ce este substantivul?",
    text: "Substantivul denumește ființe, lucruri, locuri și fenomene. El răspunde la întrebările „cine?” și „ce?”.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "copil", color: "#B45309", bg: "#FEF3C7" },
        { text: "aleargă", color: "#2563EB", bg: "#DBEAFE" },
        { text: "masă", color: "#047857", bg: "#D1FAE5" },
        { text: "frumos", color: "#7C3AED", bg: "#EDE9FE" },
      ],
    },
    instruction: "Atinge cuvintele care sunt substantive.",
    hint1: "Substantivul denumește ceva.",
    hint2: "Copil, masă și ploaie sunt substantive.",
    interactive: h(["copil", "aleargă", "masă", "frumos", "ploaie", "citește"], [0, 2, 4]),
    quizQuestion: "Care cuvânt este substantiv?",
    quizChoices: ["aleargă", "masă", "frumos", "citește"],
    quizAnswer: 1,
    difficulty: "easy",
  },
  {
    title: "Ființe, lucruri, fenomene",
    text: "Substantivele pot numi ființe, lucruri sau fenomene ale naturii. Le așezăm în grupa potrivită după sens.",
    svg: {
      type: "icon-grid",
      items: [
        { emoji: "🐱", label: "ființă" },
        { emoji: "🎒", label: "lucru" },
        { emoji: "🌧️", label: "fenomen" },
        { emoji: "👧", label: "ființă" },
        { emoji: "📘", label: "lucru" },
        { emoji: "❄️", label: "fenomen" },
      ],
      bg: "#ECFEFF",
    },
    instruction: "Pune fiecare cuvânt în grupa potrivită.",
    hint1: "Întreabă-te: cine? ce? ce se întâmplă?",
    hint2: "Pisică este ființă, ghiozdan este lucru, ploaie este fenomen.",
    interactive: db(
      [
        { id: "fiinte", label: "ființe" },
        { id: "lucruri", label: "lucruri" },
        { id: "fenomene", label: "fenomene" },
      ],
      [
        { text: "pisică", bucketId: "fiinte" },
        { text: "ghiozdan", bucketId: "lucruri" },
        { text: "ploaie", bucketId: "fenomene" },
        { text: "copil", bucketId: "fiinte" },
        { text: "carte", bucketId: "lucruri" },
        { text: "ninsoare", bucketId: "fenomene" },
      ]
    ),
    quizQuestion: "Care cuvânt numește un fenomen al naturii?",
    quizChoices: ["carte", "pisică", "ninsoare", "elev"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Comune și proprii",
    text: "Substantivele comune denumesc în general ființe sau lucruri, iar cele proprii sunt nume speciale și se scriu cu literă mare.",
    svg: {
      type: "two-groups",
      left: { items: ["copil", "carte", "pisică"], bg: "#DBEAFE", border: "#2563EB" },
      right: { items: ["Ana", "București", "Maria"], bg: "#FEF3C7", border: "#F97316" },
      bg: "#F8FAFC",
    },
    instruction: "Pune cuvintele în grupa bună.",
    hint1: "Numele de persoane și locuri sunt proprii.",
    hint2: "Ana și București sunt substantive proprii.",
    interactive: p([
      ["copil", "comun"],
      ["Ana", "propriu"],
      ["carte", "comun"],
      ["București", "propriu"],
    ]),
    quizQuestion: "Care este substantiv propriu?",
    quizChoices: ["carte", "școală", "Maria", "copil"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Singular și plural",
    text: "Singularul arată unul, iar pluralul arată mai multe. Forma se schimbă de multe ori la sfârșitul cuvântului.",
    svg: {
      type: "letter-pairs",
      pairs: [["1", "singular"], ["2", "plural"], ["3", "multe"], ["4", "puține"]],
      color: "#F59E0B",
    },
    instruction: "Perechează singularul cu pluralul.",
    hint1: "Copil merge cu copii, iar floare cu flori.",
    hint2: "Pluralul arată mai multe lucruri.",
    interactive: p([
      ["copil", "copii"],
      ["floare", "flori"],
      ["carte", "cărți"],
      ["nor", "nori"],
    ]),
    quizQuestion: "Care este pluralul cuvântului „casă”?",
    quizChoices: ["casă", "case", "casete", "casa"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Recapitulare despre substantiv",
    text: "La final recunoaștem ce denumește fiecare cuvânt și în ce grupă intră: comun, propriu, singular sau plural.",
    svg: {
      type: "sentence-display",
      words: ["Ana", "citește", "o", "carte", "nouă"],
      highlightIndices: [0, 3],
      color: "#F97316",
    },
    instruction: "Pune cuvintele în ordinea corectă pentru o propoziție simplă.",
    hint1: "Ana este nume propriu.",
    hint2: "Cartea este un substantiv comun.",
    interactive: sb(["Ana", "citește", "o", "carte", "nouă"]),
    quizQuestion: "Ce fel de substantiv este „Ana”?",
    quizChoices: ["nume comun", "fenomen", "nume propriu", "verb"],
    quizAnswer: 2,
    difficulty: "hard",
  },
];

const VERB4_TOPICS: TopicSpec[] = [
  {
    title: "Ce este verbul?",
    text: "Verbul spune ce face cineva sau ce se întâmplă. El răspunde la întrebarea „ce face?”.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "aleargă", color: "#1D4ED8", bg: "#DBEAFE" },
        { text: "citește", color: "#047857", bg: "#D1FAE5" },
        { text: "masă", color: "#B45309", bg: "#FEF3C7" },
        { text: "frumos", color: "#7C3AED", bg: "#EDE9FE" },
      ],
    },
    instruction: "Atinge verbele din propoziție.",
    hint1: "Verbul arată acțiunea.",
    hint2: "Copilul aleargă și citește.",
    interactive: h(["Copilul", "aleargă", "și", "citește"], [1, 3]),
    quizQuestion: "Care cuvânt este verb?",
    quizChoices: ["copil", "aleargă", "frumos", "masă"],
    quizAnswer: 1,
    difficulty: "easy",
  },
  {
    title: "Verbe de acțiune",
    text: "Verbele arată mișcare, lucru sau stare. Le putem recunoaște după acțiunea pe care o numesc.",
    svg: {
      type: "icon-grid",
      items: [
        { emoji: "🏃", label: "aleargă" },
        { emoji: "✍️", label: "scrie" },
        { emoji: "🛏️", label: "doarme" },
        { emoji: "🚶", label: "merge" },
      ],
      bg: "#EFF6FF",
    },
    instruction: "Perechează acțiunea cu verbul potrivit.",
    hint1: "Toate arată ce face cineva.",
    hint2: "A alerga, a scrie și a merge sunt verbe.",
    interactive: p([
      ["aleargă", "a alerga"],
      ["scrie", "a scrie"],
      ["merge", "a merge"],
      ["doarme", "a dormi"],
    ]),
    quizQuestion: "Care este verb?",
    quizChoices: ["aleargă", "mare", "alb", "carte"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Verbul la prezent și la trecut",
    text: "La prezent, verbul arată o acțiune care se petrece acum. La trecut, acțiunea s-a întâmplat deja.",
    svg: {
      type: "sentence-display",
      words: ["Copilul", "aleargă", "acum", "și", "a", "alergat", "ieri"],
      highlightIndices: [1, 5],
      color: "#2563EB",
    },
    instruction: "Așază verbele la grupa potrivită.",
    hint1: "Prezentul spune ce se întâmplă acum.",
    hint2: "Trecutul spune ce s-a întâmplat deja.",
    interactive: db(
      [
        { id: "prezent", label: "prezent" },
        { id: "trecut", label: "trecut" },
      ],
      [
        { text: "aleargă", bucketId: "prezent" },
        { text: "a alergat", bucketId: "trecut" },
        { text: "scrie", bucketId: "prezent" },
        { text: "a scris", bucketId: "trecut" },
        { text: "mănâncă", bucketId: "prezent" },
        { text: "a mâncat", bucketId: "trecut" },
      ]
    ),
    quizQuestion: "Care formă este la trecut?",
    quizChoices: ["scrie", "aleargă", "a mers", "citește"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Verbul în propoziție",
    text: "În propoziție, verbul arată acțiunea principală. Îl găsim dacă ne întrebăm ce face subiectul.",
    svg: {
      type: "word-syllables",
      parts: ["Mi", "hai", "ci", "teș", "te"],
      color: "#14B8A6",
      showClap: true,
    },
    instruction: "Pune cuvintele în ordinea bună pentru o propoziție simplă.",
    hint1: "Verbul se află de obicei după subiect.",
    hint2: "Mihai citește o poveste scurtă.",
    interactive: sb(["Mihai", "citește", "o", "poveste", "scurtă"]),
    quizQuestion: "Ce face Mihai?",
    quizChoices: ["citește", "poveste", "scurtă", "Mihai"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Recapitulare despre verb",
    text: "Recunoaștem verbele după acțiune și după faptul că se pot schimba în timp.",
    svg: {
      type: "simple-icon",
      icon: "🎯",
      title: "Verbul",
      bg: "#FDE68A",
      color: "#92400E",
    },
    instruction: "Perechează verbul cu timpul potrivit.",
    hint1: "Privește dacă acțiunea se petrece acum sau deja s-a întâmplat.",
    hint2: "Prezentul și trecutul sunt ușor de recunoscut.",
    interactive: p([
      ["merge", "prezent"],
      ["a mers", "trecut"],
      ["scrie", "prezent"],
      ["a scris", "trecut"],
    ]),
    quizQuestion: "Care pereche este corectă?",
    quizChoices: ["merge - trecut", "a mers - prezent", "scrie - prezent", "a scris - prezent"],
    quizAnswer: 2,
    difficulty: "hard",
  },
];

const ADJ4_TOPICS: TopicSpec[] = [
  {
    title: "Ce este adjectivul?",
    text: "Adjectivul arată însușirea unui substantiv: cum este acesta, ce culoare are sau ce fel de lucru este.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "roșie", color: "#DC2626", bg: "#FEE2E2" },
        { text: "frumoasă", color: "#7C3AED", bg: "#EDE9FE" },
        { text: "copil", color: "#1D4ED8", bg: "#DBEAFE" },
        { text: "masă", color: "#047857", bg: "#D1FAE5" },
      ],
    },
    instruction: "Atinge cuvintele care sunt adjective.",
    hint1: "Adjectivul descrie un substantiv.",
    hint2: "Roșie și frumoasă spun cum este ceva.",
    interactive: h(["Floarea", "roșie", "este", "frumoasă"], [1, 3]),
    quizQuestion: "Care cuvânt este adjectiv?",
    quizChoices: ["floarea", "roșie", "merge", "copil"],
    quizAnswer: 1,
    difficulty: "easy",
  },
  {
    title: "Adjectivul și substantivul",
    text: "Adjectivul însoțește substantivul și îl descrie mai bine. Cele două cuvinte merg împreună.",
    svg: {
      type: "two-groups",
      left: { items: ["copil vesel", "cer albastru", "carte nouă"], bg: "#DBEAFE", border: "#2563EB" },
      right: { items: ["floare parfumată", "măr roșu", "casă mare"], bg: "#FEE2E2", border: "#DC2626" },
      bg: "#F8FAFC",
    },
    instruction: "Perechează substantivul cu adjectivul potrivit.",
    hint1: "Adjectivul spune cum este substantivul.",
    hint2: "Copil vesel și cer albastru sunt perechi bune.",
    interactive: p([
      ["copil", "vesel"],
      ["cer", "albastru"],
      ["carte", "nouă"],
      ["floare", "parfumată"],
    ]),
    quizQuestion: "Care cuvânt descrie un substantiv?",
    quizChoices: ["albastru", "copil", "merge", "fată"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Acordul adjectivului",
    text: "Adjectivul se acordă cu substantivul în gen și număr. Forma lui se schimbă ca să se potrivească.",
    svg: {
      type: "sentence-display",
      words: ["copil", "vesel", "și", "copii", "veseli"],
      highlightIndices: [1, 4],
      color: "#2563EB",
    },
    instruction: "Așază grupurile la singular sau la plural.",
    hint1: "Privește dacă este unul sau mai multe.",
    hint2: "Vesel merge cu copil, veseli merge cu copii.",
    interactive: db(
      [
        { id: "singular", label: "singular" },
        { id: "plural", label: "plural" },
      ],
      [
        { text: "copil vesel", bucketId: "singular" },
        { text: "copii veseli", bucketId: "plural" },
        { text: "casă mare", bucketId: "singular" },
        { text: "case mari", bucketId: "plural" },
        { text: "floare albă", bucketId: "singular" },
        { text: "flori albe", bucketId: "plural" },
      ]
    ),
    quizQuestion: "Care formulare este corectă?",
    quizChoices: ["copii vesel", "copii veseli", "copil veseli", "copii roșu"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Gradele adjectivului",
    text: "Unele adjective pot exprima comparații: mare, mai mare, cel mai mare. Așa arătăm intensitatea însușirii.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "mare", color: "#B45309", bg: "#FEF3C7" },
        { text: "mai mare", color: "#2563EB", bg: "#DBEAFE" },
        { text: "cel mai mare", color: "#7C3AED", bg: "#EDE9FE" },
        { text: "mic", color: "#047857", bg: "#D1FAE5" },
        { text: "mai mic", color: "#DC2626", bg: "#FEE2E2" },
      ],
    },
    instruction: "Așază cuvintele în grupa potrivită.",
    hint1: "Pozitivul spune doar cum este ceva.",
    hint2: "Comparativul și superlativul arată comparația.",
    interactive: db(
      [
        { id: "pozitiv", label: "pozitiv" },
        { id: "comparativ", label: "comparativ" },
        { id: "superlativ", label: "superlativ" },
      ],
      [
        { text: "mare", bucketId: "pozitiv" },
        { text: "mai mare", bucketId: "comparativ" },
        { text: "cel mai mare", bucketId: "superlativ" },
        { text: "mic", bucketId: "pozitiv" },
        { text: "mai mic", bucketId: "comparativ" },
        { text: "cel mai mic", bucketId: "superlativ" },
      ]
    ),
    quizQuestion: "Care este comparativul lui „mare”?",
    quizChoices: ["mare", "mai mare", "cel mai mare", "măreț"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Recapitulare despre adjectiv",
    text: "Verificăm dacă adjectivul descrie corect substantivul și dacă forma lui se potrivește cu acesta.",
    svg: {
      type: "sentence-display",
      words: ["Pisica", "albă", "doarme", "liniștită"],
      highlightIndices: [1, 3],
      color: "#F97316",
    },
    instruction: "Pune cuvintele în ordinea bună.",
    hint1: "Adjectivul poate sta lângă substantiv.",
    hint2: "Pisica albă doarme liniștită.",
    interactive: sb(["Pisica", "albă", "doarme", "liniștită"]),
    quizQuestion: "Care cuvânt descrie pisica?",
    quizChoices: ["pisica", "albă", "doarme", "liniștită"],
    quizAnswer: 1,
    difficulty: "hard",
  },
];

const PRON4_TOPICS: TopicSpec[] = [
  {
    title: "Ce este pronumele?",
    text: "Pronumele ține locul unui substantiv pentru a evita repetarea lui. Astfel vorbirea devine mai scurtă și mai clară.",
    svg: {
      type: "sentence-display",
      words: ["Ana", "citește", "și", "Ea", "zâmbește"],
      highlightIndices: [3],
      color: "#2563EB",
    },
    instruction: "Atinge pronumele din propoziție.",
    hint1: "Pronumele înlocuiește un nume.",
    hint2: "Ea îl înlocuiește pe Ana.",
    interactive: h(["Ana", "citește", "și", "Ea", "zâmbește"], [3]),
    quizQuestion: "Care cuvânt este pronume?",
    quizChoices: ["Ana", "Ea", "citește", "carte"],
    quizAnswer: 1,
    difficulty: "easy",
  },
  {
    title: "Pronume personale",
    text: "Pronumele personale arată persoana care vorbește sau despre care vorbim. Ele ne ajută să vorbim despre oameni fără să repetăm nume.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "eu", color: "#1D4ED8", bg: "#DBEAFE" },
        { text: "tu", color: "#047857", bg: "#D1FAE5" },
        { text: "el", color: "#B45309", bg: "#FEF3C7" },
        { text: "ea", color: "#7C3AED", bg: "#EDE9FE" },
      ],
    },
    instruction: "Perechează pronumele cu persoana potrivită.",
    hint1: "Eu sunt persoana întâi.",
    hint2: "Tu este persoana a doua, el și ea sunt persoana a treia.",
    interactive: p([
      ["eu", "persoana întâi"],
      ["tu", "persoana a doua"],
      ["el", "persoana a treia"],
      ["ea", "persoana a treia"],
    ]),
    quizQuestion: "Care pronume este la persoana întâi?",
    quizChoices: ["tu", "el", "eu", "ea"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Înlocuim substantivul",
    text: "Pronumele poate înlocui un nume deja cunoscut în propoziție. Așa repetăm mai puțin și citim mai ușor.",
    svg: {
      type: "icon-grid",
      items: [
        { emoji: "👧", label: "Maria" },
        { emoji: "🧒", label: "copilul" },
        { emoji: "🗣️", label: "ea" },
        { emoji: "👦", label: "el" },
      ],
      bg: "#ECFEFF",
    },
    instruction: "Așază cuvintele în grupa potrivită.",
    hint1: "Pronumele înlocuiește un nume.",
    hint2: "Maria și copilul sunt substantive.",
    interactive: db(
      [
        { id: "substantiv", label: "substantiv" },
        { id: "pronume", label: "pronume" },
      ],
      [
        { text: "Maria", bucketId: "substantiv" },
        { text: "ea", bucketId: "pronume" },
        { text: "copilul", bucketId: "substantiv" },
        { text: "el", bucketId: "pronume" },
        { text: "Ana", bucketId: "substantiv" },
        { text: "noi", bucketId: "pronume" },
      ]
    ),
    quizQuestion: "Cu ce înlocuim „Maria”?",
    quizChoices: ["el", "ea", "noi", "voi"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Pronumele în propoziție",
    text: "În propoziție, pronumele face textul mai scurt și mai clar. Îl recunoaștem ușor dacă înlocuiește un substantiv.",
    svg: {
      type: "sentence-display",
      words: ["El", "merge", "la", "școală", "cu", "noi"],
      highlightIndices: [0, 5],
      color: "#14B8A6",
    },
    instruction: "Atinge pronumele din propoziție.",
    hint1: "El și noi sunt pronume.",
    hint2: "Pronumele stă în locul unui substantiv.",
    interactive: h(["El", "merge", "la", "școală", "cu", "noi"], [0, 5]),
    quizQuestion: "Care cuvânt este pronume?",
    quizChoices: ["școală", "merge", "noi", "mare"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Recapitulare despre pronume",
    text: "La recapitulare recunoaștem pronumele și știm ce substantiv înlocuiesc sau ce persoană arată.",
    svg: {
      type: "simple-icon",
      icon: "👥",
      title: "Pronumele",
      bg: "#EDE9FE",
      color: "#6D28D9",
    },
    instruction: "Perechează pronumele cu explicația potrivită.",
    hint1: "Pronumele ține locul substantivului.",
    hint2: "Eu, tu, el și ea arată persoane.",
    interactive: p([
      ["eu", "persoana întâi"],
      ["noi", "mai multe persoane"],
      ["ea", "înlocuiește un nume"],
      ["voi", "persoana a doua"],
    ]),
    quizQuestion: "Care cuvânt este pronume?",
    quizChoices: ["frumos", "noi", "aleargă", "masă"],
    quizAnswer: 1,
    difficulty: "hard",
  },
];

const NUM4_TOPICS: TopicSpec[] = [
  {
    title: "Ce este numeralul?",
    text: "Numeralul arată numărul, ordinea sau cantitatea. Cu el putem număra și putem spune al câtelea este ceva.",
    svg: {
      type: "letter-circles",
      letters: ["1", "2", "3", "4", "5"],
      color: "#F59E0B",
    },
    instruction: "Numără și atinge grupa potrivită.",
    hint1: "Numeralul arată un număr.",
    hint2: "Patru arată câte obiecte sunt.",
    interactive: tc("🍎", 4),
    quizQuestion: "Care cuvânt este numeral?",
    quizChoices: ["patru", "frumos", "aleargă", "copil"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Numărăm obiecte",
    text: "Numeralele de cantitate ne ajută să numărăm ființe sau lucruri. Fiecare numeral se leagă de o cantitate exactă.",
    svg: {
      type: "icon-grid",
      items: [
        { emoji: "🍎", label: "unu" },
        { emoji: "🍎🍎", label: "doi" },
        { emoji: "🍎🍎🍎", label: "trei" },
        { emoji: "🍎🍎🍎🍎", label: "patru" },
      ],
      bg: "#FFFBEB",
    },
    instruction: "Perechează numeralul cu numărul potrivit.",
    hint1: "Numeralele pot fi scrise și cu cifre.",
    hint2: "Trei înseamnă 3.",
    interactive: p([
      ["unu", "1"],
      ["doi", "2"],
      ["trei", "3"],
      ["patru", "4"],
    ]),
    quizQuestion: "Care numeral arată 3?",
    quizChoices: ["unu", "doi", "trei", "patru"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Numerale ordinale",
    text: "Numeralele ordinale arată locul în ordine. Ele răspund la întrebarea „al câtelea?”.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "unu", color: "#1D4ED8", bg: "#DBEAFE" },
        { text: "întâi", color: "#047857", bg: "#D1FAE5" },
        { text: "doi", color: "#B45309", bg: "#FEF3C7" },
        { text: "al doilea", color: "#7C3AED", bg: "#EDE9FE" },
        { text: "al treilea", color: "#DC2626", bg: "#FEE2E2" },
      ],
    },
    instruction: "Așază numeralul în grupa potrivită.",
    hint1: "Cardinalul spune câte sunt.",
    hint2: "Ordinalul spune al câtelea este ceva.",
    interactive: db(
      [
        { id: "cardinal", label: "cardinal" },
        { id: "ordinal", label: "ordinal" },
      ],
      [
        { text: "unu", bucketId: "cardinal" },
        { text: "întâi", bucketId: "ordinal" },
        { text: "doi", bucketId: "cardinal" },
        { text: "al doilea", bucketId: "ordinal" },
        { text: "trei", bucketId: "cardinal" },
        { text: "al treilea", bucketId: "ordinal" },
      ]
    ),
    quizQuestion: "Care este numeral ordinal?",
    quizChoices: ["trei", "al doilea", "unu", "patru"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Numeralul în propoziție",
    text: "Când citim o propoziție, numeralul poate spune câți sau al câtelea. Îl recunoaștem în enunț după sensul lui.",
    svg: {
      type: "sentence-display",
      words: ["Am", "trei", "caiete", "și", "al", "doilea", "este", "albastru"],
      highlightIndices: [1, 4, 5],
      color: "#2563EB",
    },
    instruction: "Atinge numeralul sau expresia numerală.",
    hint1: "Trei și al doilea arată numărul sau ordinea.",
    hint2: "Am trei caiete și al doilea este albastru.",
    interactive: h(["Am", "trei", "caiete", "și", "al", "doilea", "este", "albastru"], [1, 4, 5]),
    quizQuestion: "Care expresie arată ordinea?",
    quizChoices: ["trei", "caiete", "al doilea", "albastru"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Recapitulare despre numeral",
    text: "Distinguim între numărul obiectelor și ordinea lor în șir. Așa știm dacă folosim un numeral cardinal sau ordinal.",
    svg: {
      type: "simple-icon",
      icon: "🔢",
      title: "Numeralul",
      bg: "#FEF3C7",
      color: "#92400E",
    },
    instruction: "Perechează numeralul cu tipul lui.",
    hint1: "Cardinalul arată câte sunt.",
    hint2: "Ordinalul arată al câtelea este ceva.",
    interactive: p([
      ["cinci", "cardinal"],
      ["primul", "ordinal"],
      ["opt", "cardinal"],
      ["al treilea", "ordinal"],
    ]),
    quizQuestion: "Care este numeral ordinal?",
    quizChoices: ["șapte", "al doilea", "zece", "doi"],
    quizAnswer: 1,
    difficulty: "hard",
  },
];

const ORT4_TOPICS: TopicSpec[] = [
  {
    title: "Scriem î și â",
    text: "În română, scriem î la început sau la sfârșit de cuvânt și â în interiorul unor cuvinte.",
    svg: {
      type: "letter-pairs",
      pairs: [["î", "început"], ["â", "interior"], ["î", "sfârșit"], ["â", "cuvânt"]],
      color: "#DC2626",
    },
    instruction: "Perechează cuvântul cu litera potrivită.",
    hint1: "Î apare la început și la sfârșit.",
    hint2: "Â apare, de obicei, în interiorul cuvântului.",
    interactive: p([
      ["înger", "î"],
      ["mână", "â"],
      ["începe", "î"],
      ["român", "â"],
    ]),
    quizQuestion: "Care cuvânt conține litera â?",
    quizChoices: ["înger", "mână", "începe", "împreună"],
    quizAnswer: 1,
    difficulty: "easy",
  },
  {
    title: "M înainte de p și b",
    text: "Înainte de p și b, scriem de obicei m, nu n. Regula ne ajută să scriem corect cuvintele.",
    svg: {
      type: "word-syllables",
      parts: ["câmp", "bombă", "lampă"],
      color: "#2563EB",
    },
    instruction: "Așază cuvintele în grupa potrivită.",
    hint1: "Înainte de p și b, alegem m.",
    hint2: "Câmp, bombă și lampă respectă regula.",
    interactive: db(
      [
        { id: "m", label: "scriem m" },
        { id: "n", label: "nu scriem m" },
      ],
      [
        { text: "câmp", bucketId: "m" },
        { text: "lampă", bucketId: "m" },
        { text: "combină", bucketId: "n" },
        { text: "carte", bucketId: "n" },
        { text: "bombă", bucketId: "m" },
        { text: "nor", bucketId: "n" },
      ]
    ),
    quizQuestion: "Ce literă scriem înainte de p și b?",
    quizChoices: ["n", "m", "î", "â"],
    quizAnswer: 1,
    difficulty: "easy",
  },
  {
    title: "Majuscula la nume proprii",
    text: "Numele de persoane și locuri încep cu literă mare. Majuscula ne arată că este un nume propriu.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "Ana", color: "#1D4ED8", bg: "#DBEAFE" },
        { text: "București", color: "#B45309", bg: "#FEF3C7" },
        { text: "Maria", color: "#7C3AED", bg: "#EDE9FE" },
        { text: "carte", color: "#047857", bg: "#D1FAE5" },
      ],
    },
    instruction: "Atinge cuvintele care trebuie scrise cu majusculă.",
    hint1: "Numele de persoane și locuri primesc literă mare.",
    hint2: "Ana, București și Maria sunt exemple bune.",
    interactive: h(["Ana", "merge", "la", "București", "cu", "Maria"], [0, 3, 5]),
    quizQuestion: "Care cuvânt trebuie scris cu majusculă?",
    quizChoices: ["carte", "Ana", "merge", "frumos"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Punctuația de la sfârșit",
    text: "Folosim punct, semnul întrebării sau exclamării la sfârșit de propoziție. Semnul potrivit depinde de felul enunțului.",
    svg: {
      type: "sentence-display",
      words: ["Mihai", "vine", "acasă"],
      highlightIndices: [1],
      color: "#047857",
    },
    instruction: "Perechează semnul cu folosirea lui.",
    hint1: "Întrebările primesc semnul întrebării.",
    hint2: "Enunțurile obișnuite primesc punct.",
    interactive: p([
      [".", "enunț"],
      ["?", "întrebare"],
      ["!", "exclamație"],
      [",", "pauză scurtă"],
    ]),
    quizQuestion: "Ce semn folosim la sfârșitul unei întrebări?",
    quizChoices: [".", "?", "!", ";"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Recapitulare despre ortografie",
    text: "Revedem scrierea corectă a lui î/â, a majusculei și a semnelor de punctuație.",
    svg: {
      type: "simple-icon",
      icon: "✏️",
      title: "Ortografia",
      bg: "#FEE2E2",
      color: "#B91C1C",
    },
    instruction: "Perechează regula cu exemplul corect.",
    hint1: "Privește litera mare, î/â și semnul de sfârșit.",
    hint2: "Ana, mână, înger și ? sunt indicii bune.",
    interactive: p([
      ["înger", "î la început"],
      ["mână", "â în interior"],
      ["Ana", "majusculă"],
      ["?", "întrebare"],
    ]),
    quizQuestion: "Ce semn pune la sfârșit o întrebare?",
    quizChoices: [".", "?", "!", ","],
    quizAnswer: 1,
    difficulty: "hard",
  },
];

const PROP4_TOPICS: TopicSpec[] = [
  {
    title: "Subiectul",
    text: "Subiectul arată cine face acțiunea din propoziție. De obicei, el răspunde la întrebarea „cine?”.",
    svg: {
      type: "sentence-display",
      words: ["Ana", "citește", "o", "carte"],
      highlightIndices: [0],
      color: "#2563EB",
    },
    instruction: "Atinge subiectul propoziției.",
    hint1: "Subiectul spune cine face acțiunea.",
    hint2: "Ana este subiectul.",
    interactive: h(["Ana", "citește", "o", "carte"], [0]),
    quizQuestion: "Care este subiectul?",
    quizChoices: ["Ana", "citește", "carte", "o"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Predicatul",
    text: "Predicatul arată ce face subiectul. El răspunde de multe ori la întrebarea „ce face?”.",
    svg: {
      type: "sentence-display",
      words: ["Băiatul", "aleargă", "repede"],
      highlightIndices: [1],
      color: "#14B8A6",
    },
    instruction: "Atinge predicatul propoziției.",
    hint1: "Predicatul spune ce face subiectul.",
    hint2: "Alergă este predicatul.",
    interactive: h(["Băiatul", "aleargă", "repede"], [1]),
    quizQuestion: "Care este predicatul?",
    quizChoices: ["Băiatul", "aleargă", "repede", "mândru"],
    quizAnswer: 1,
    difficulty: "easy",
  },
  {
    title: "Subiect și predicat",
    text: "În propoziție, subiectul și predicatul lucrează împreună. Propoziția devine clară dacă le recunoaștem pe amândouă.",
    svg: {
      type: "two-groups",
      left: { items: ["Ana", "copilul", "Maria"], bg: "#DBEAFE", border: "#2563EB" },
      right: { items: ["citește", "doarme", "cântă"], bg: "#D1FAE5", border: "#047857" },
      bg: "#F8FAFC",
    },
    instruction: "Perechează partea de propoziție cu numele potrivit.",
    hint1: "Cine face acțiunea? Subiectul.",
    hint2: "Ce face? Predicatul.",
    interactive: p([
      ["Ana", "subiect"],
      ["citește", "predicat"],
      ["copilul", "subiect"],
      ["doarme", "predicat"],
    ]),
    quizQuestion: "Ce face subiectul?",
    quizChoices: ["cuvântul", "acțiunea", "predicatul", "semnul"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Propoziție completă",
    text: "O propoziție simplă are măcar un subiect și un predicat. Împreună, ele spun un gând clar.",
    svg: {
      type: "word-syllables",
      parts: ["Ma", "ra", "scrie", "o", "scri", "soa", "re"],
      color: "#1D4ED8",
      showClap: true,
    },
    instruction: "Pune cuvintele în ordinea bună.",
    hint1: "Subiectul vine înaintea predicatului.",
    hint2: "Mara scrie o scrisoare.",
    interactive: sb(["Mara", "scrie", "o", "scrisoare"]),
    quizQuestion: "Care cuvânt este predicatul?",
    quizChoices: ["Mara", "scrie", "scrisoare", "o"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Recapitulare despre propoziție",
    text: "Recunoaștem subiectul și predicatul, apoi citim propoziția corect și clar.",
    svg: {
      type: "sentence-display",
      words: ["Maria", "aleargă", "și", "Ion", "doarme"],
      highlightIndices: [0, 1, 3, 4],
      color: "#F97316",
    },
    instruction: "Așază cuvintele în grupa potrivită.",
    hint1: "Subiectul spune cine.",
    hint2: "Predicatul spune ce face.",
    interactive: db(
      [
        { id: "subiect", label: "subiect" },
        { id: "predicat", label: "predicat" },
      ],
      [
        { text: "Ana", bucketId: "subiect" },
        { text: "aleargă", bucketId: "predicat" },
        { text: "Ion", bucketId: "subiect" },
        { text: "doarme", bucketId: "predicat" },
        { text: "Maria", bucketId: "subiect" },
        { text: "cântă", bucketId: "predicat" },
      ]
    ),
    quizQuestion: "Care este subiectul?",
    quizChoices: ["aleargă", "Maria", "doarme", "scrie"],
    quizAnswer: 1,
    difficulty: "hard",
  },
];

const COMP4_TOPICS: TopicSpec[] = [
  {
    title: "Început, cuprins, încheiere",
    text: "O compunere bună are început, cuprins și încheiere. Fiecare parte are rolul ei.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "început", color: "#1D4ED8", bg: "#DBEAFE" },
        { text: "cuprins", color: "#047857", bg: "#D1FAE5" },
        { text: "încheiere", color: "#DC2626", bg: "#FEE2E2" },
      ],
    },
    instruction: "Pune părțile compunerii în ordinea corectă.",
    hint1: "Mai întâi vine începutul.",
    hint2: "La final vine încheierea.",
    interactive: sb(["Început", "Cuprins", "Încheiere"]),
    quizQuestion: "Cum se numește partea de la final?",
    quizChoices: ["început", "cuprins", "încheiere", "titlu"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Titlul",
    text: "Titlul spune despre ce este compunerea și trebuie să fie scurt, clar și potrivit.",
    svg: {
      type: "sentence-display",
      words: ["Ploaia", "de", "vară"],
      highlightIndices: [0, 2],
      color: "#2563EB",
    },
    instruction: "Așază exemplele în grupa bună.",
    hint1: "Un titlu bun este scurt și clar.",
    hint2: "Titlul spune despre ce este textul.",
    interactive: db(
      [
        { id: "bun", label: "titlu bun" },
        { id: "slab", label: "nu este titlu bun" },
      ],
      [
        { text: "Ploaia de vară", bucketId: "bun" },
        { text: "Mă duc la școală și apoi...", bucketId: "slab" },
        { text: "Pisica mea", bucketId: "bun" },
        { text: "O zi", bucketId: "bun" },
        { text: "Și după aceea", bucketId: "slab" },
        { text: "Bucuria", bucketId: "bun" },
      ]
    ),
    quizQuestion: "Ce face titlul?",
    quizChoices: ["Spune despre ce este compunerea.", "Arată câte propoziții are textul.", "Scrie finalul poveștii.", "Pune semne de punctuație."],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Ideile în ordine",
    text: "În compunere, ideile se așază într-o ordine clară. Astfel cititorul înțelege ușor ce vrem să spunem.",
    svg: {
      type: "word-syllables",
      parts: ["mai", "întâi", "apoi", "la", "urmă"],
      color: "#14B8A6",
      showClap: true,
    },
    instruction: "Perechează cuvântul cu rolul lui.",
    hint1: "Ideile bune stau în ordine.",
    hint2: "Mai întâi, apoi și la urmă ne ajută.",
    interactive: p([
      ["mai întâi", "început"],
      ["apoi", "cuprins"],
      ["la urmă", "încheiere"],
      ["titlu", "nume scurt"],
    ]),
    quizQuestion: "Ce vine la începutul unei compuneri?",
    quizChoices: ["cuprinsul", "încheierea", "titlul", "începutul"],
    quizAnswer: 3,
    difficulty: "medium",
  },
  {
    title: "Cuvinte de descriere",
    text: "Alegem adjective și verbe potrivite ca să facem textul viu. Compunerea devine mai frumoasă și mai clară.",
    svg: {
      type: "sentence-display",
      words: ["Marea", "albastră", "strălucește", "frumos"],
      highlightIndices: [1, 2, 3],
      color: "#7C3AED",
    },
    instruction: "Atinge cuvintele care adaugă descriere.",
    hint1: "Adjectivele descriu, verbele arată acțiunea.",
    hint2: "Albastră, strălucește și frumos ajută textul.",
    interactive: h(["Marea", "albastră", "strălucește", "frumos"], [1, 2, 3]),
    quizQuestion: "Care cuvânt este adjectiv?",
    quizChoices: ["Marea", "albastră", "strălucește", "frumos"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Recapitulare despre compunere",
    text: "Verificăm titlul, ordinea ideilor și cuvintele alese. O compunere bună este clară, scurtă și frumoasă.",
    svg: {
      type: "simple-icon",
      icon: "📝",
      title: "Compunerea",
      bg: "#E0F2FE",
      color: "#0369A1",
    },
    instruction: "Perechează ideea cu explicația potrivită.",
    hint1: "Titlul, începutul, cuprinsul și încheierea sunt importante.",
    hint2: "O compunere bună are ordine și expresii potrivite.",
    interactive: p([
      ["titlu", "nume scurt"],
      ["început", "prima parte"],
      ["cuprins", "povestea"],
      ["încheiere", "finalul"],
    ]),
    quizQuestion: "Care este numele scurt al textului?",
    quizChoices: ["titlu", "idee", "final", "poveste"],
    quizAnswer: 0,
    difficulty: "hard",
  },
];

const RECAP4_TOPICS: TopicSpec[] = [
  {
    title: "Părți de vorbire",
    text: "La recapitulare recunoaștem cuvintele după rolul lor: substantiv, verb, adjectiv, pronume sau numeral.",
    svg: {
      type: "text-bubbles",
      items: [
        { text: "substantiv", color: "#B45309", bg: "#FEF3C7" },
        { text: "verb", color: "#1D4ED8", bg: "#DBEAFE" },
        { text: "adjectiv", color: "#7C3AED", bg: "#EDE9FE" },
        { text: "pronume", color: "#047857", bg: "#D1FAE5" },
      ],
    },
    instruction: "Perechează cuvântul cu partea de vorbire potrivită.",
    hint1: "Fiecare cuvânt are un rol.",
    hint2: "Copil, aleargă, roșu și ea aparțin unor grupe diferite.",
    interactive: p([
      ["copil", "substantiv"],
      ["aleargă", "verb"],
      ["roșu", "adjectiv"],
      ["ea", "pronume"],
    ]),
    quizQuestion: "Care este verb?",
    quizChoices: ["roșu", "ea", "aleargă", "trei"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Propoziție simplă",
    text: "Citim o propoziție și recunoaștem subiectul, predicatul și cuvintele importante.",
    svg: {
      type: "sentence-display",
      words: ["Ana", "are", "trei", "caiete", "albastre"],
      highlightIndices: [0, 1, 2, 3, 4],
      color: "#2563EB",
    },
    instruction: "Așază cuvintele în ordinea corectă.",
    hint1: "Subiectul, predicatul și restul cuvintelor trebuie să fie clare.",
    hint2: "Ana are trei caiete albastre.",
    interactive: sb(["Ana", "are", "trei", "caiete", "albastre"]),
    quizQuestion: "Care cuvânt este numeral?",
    quizChoices: ["Ana", "are", "trei", "albastre"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Ortografie și majusculă",
    text: "Revedem scrierea corectă: î/â, majusculă la nume proprii și semnele de punctuație.",
    svg: {
      type: "icon-grid",
      items: [
        { emoji: "✏️", label: "î/â" },
        { emoji: "🔠", label: "majusculă" },
        { emoji: "❓", label: "?" },
        { emoji: "❗", label: "!" },
      ],
      bg: "#FFF7ED",
    },
    instruction: "Așază cuvintele în grupa potrivită.",
    hint1: "Ortografia cere atenție la litere și semne.",
    hint2: "Ana, mână și ? ne ajută să ne amintim regulile.",
    interactive: db(
      [
        { id: "litera", label: "literă corectă" },
        { id: "nume", label: "nume propriu" },
      ],
      [
        { text: "înger", bucketId: "litera" },
        { text: "Ana", bucketId: "nume" },
        { text: "mână", bucketId: "litera" },
        { text: "București", bucketId: "nume" },
        { text: "?", bucketId: "litera" },
        { text: "Maria", bucketId: "nume" },
      ]
    ),
    quizQuestion: "Care cuvânt trebuie scris cu majusculă?",
    quizChoices: ["carte", "ana", "merge", "frumos"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Numeral și pronume",
    text: "Numeralul spune câte sunt sau al câtelea este ceva, iar pronumele ține locul unui substantiv.",
    svg: {
      type: "sentence-display",
      words: ["Eu", "am", "două", "cărți", "noi"],
      highlightIndices: [0, 2, 4],
      color: "#14B8A6",
    },
    instruction: "Perechează cuvântul cu grupa lui.",
    hint1: "Două este numeral, eu și noi sunt pronume.",
    hint2: "Cuvintele de grupă spun rolul lor.",
    interactive: p([
      ["eu", "pronume"],
      ["două", "numeral"],
      ["noi", "pronume"],
      ["trei", "numeral"],
    ]),
    quizQuestion: "Care este pronume?",
    quizChoices: ["două", "eu", "cărți", "noi"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Recapitulare finală",
    text: "În recapitulare legăm toate cunoștințele: părți de vorbire, propoziție, numeral, pronume și ortografie.",
    svg: {
      type: "simple-icon",
      icon: "🌟",
      title: "Recapitulare",
      bg: "#FEF3C7",
      color: "#92400E",
    },
    instruction: "Așază fiecare cuvânt în grupa potrivită.",
    hint1: "Privește ce rol are cuvântul în propoziție.",
    hint2: "Substantiv, verb, adjectiv, pronume și numeral apar împreună.",
    interactive: db(
      [
        { id: "subst", label: "substantiv" },
        { id: "verb", label: "verb" },
        { id: "adj", label: "adjectiv" },
        { id: "pron", label: "pronume" },
        { id: "num", label: "numeral" },
      ],
      [
        { text: "masă", bucketId: "subst" },
        { text: "aleargă", bucketId: "verb" },
        { text: "roșu", bucketId: "adj" },
        { text: "ea", bucketId: "pron" },
        { text: "trei", bucketId: "num" },
        { text: "copil", bucketId: "subst" },
      ]
    ),
    quizQuestion: "Care cuvânt este pronume?",
    quizChoices: ["roșu", "ea", "trei", "aleargă"],
    quizAnswer: 1,
    difficulty: "hard",
  },
];

const SUBST4 = buildTheme("Substantivul - clasa a IV-a", SUBST4_TOPICS);
const VERB4 = buildTheme("Verbul - clasa a IV-a", VERB4_TOPICS);
const ADJ4 = buildTheme("Adjectivul - clasa a IV-a", ADJ4_TOPICS);
const PRON4 = buildTheme("Pronumele - clasa a IV-a", PRON4_TOPICS);
const NUM4 = buildTheme("Numeralul - clasa a IV-a", NUM4_TOPICS);
const ORT4 = buildTheme("Ortografia - clasa a IV-a", ORT4_TOPICS);
const PROP4 = buildTheme("Analiza propoziției - clasa a IV-a", PROP4_TOPICS);
const COMP4 = buildTheme("Compunerea - clasa a IV-a", COMP4_TOPICS);
const RECAP4 = buildTheme("Recapitulare - clasa a IV-a", RECAP4_TOPICS);

export const SUBST4_LABELS = SUBST4.labels;
export const SUBST4_POOL = SUBST4.pool;

export const VERB4_LABELS = VERB4.labels;
export const VERB4_POOL = VERB4.pool;

export const ADJ4_LABELS = ADJ4.labels;
export const ADJ4_POOL = ADJ4.pool;

export const PRON4_LABELS = PRON4.labels;
export const PRON4_POOL = PRON4.pool;

export const NUM4_LABELS = NUM4.labels;
export const NUM4_POOL = NUM4.pool;

export const ORT4_LABELS = ORT4.labels;
export const ORT4_POOL = ORT4.pool;

export const PROP4_LABELS = PROP4.labels;
export const PROP4_POOL = PROP4.pool;

export const COMP4_LABELS = COMP4.labels;
export const COMP4_POOL = COMP4.pool;

export const RECAP4_LABELS = RECAP4.labels;
export const RECAP4_POOL = RECAP4.pool;
