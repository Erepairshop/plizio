// lib/explorerPools/romanaC6.ts — AstroRomână Clasa 6
import type { PoolTopicDef, SvgConfig } from "./types";
import type { TopicInteractive } from "@/app/astro-biologie/games/ExplorerEngine";

type Difficulty = "easy" | "medium" | "hard";

type InteractiveSpec =
  | { type: "match-pairs"; pairs: [string, string][] }
  | { type: "drag-to-bucket"; buckets: { id: string; label: string }[]; items: { text: string; bucketId: string }[] }
  | { type: "physics-bucket"; buckets: { id: string; label: string }[]; items: { text: string; bucketId: string }[] }
  | { type: "physics-slingshot"; question: string; targets: { id: string; text: string; isCorrect: boolean }[] }
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
    } else if (topic.interactive.type === "drag-to-bucket" || topic.interactive.type === "physics-bucket") {
      topic.interactive.buckets.forEach((bucket, bucketIndex) => {
        base[`${prefix}_b${bucketIndex + 1}`] = bucket.label;
      });
      topic.interactive.items.forEach((item, itemIndex) => {
        base[`${prefix}_i${itemIndex + 1}`] = item.text;
      });
    } else if (topic.interactive.type === "physics-slingshot") {
      base[`${prefix}_qmain`] = topic.interactive.question;
      topic.interactive.targets.forEach((target, targetIndex) => {
        base[`${prefix}_t${targetIndex + 1}`] = target.text;
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
    case "physics-bucket":
      return withHints({
        type: spec.type,
        buckets: spec.buckets.map((bucket, index) => ({
          id: bucket.id,
          label: `${prefix}_b${index + 1}`,
        })),
        items: spec.items.map((item, index) => ({
          text: `${prefix}_i${index + 1}`,
          bucketId: item.bucketId,
        })),
      });
    case "physics-slingshot":
      return withHints({
        type: "physics-slingshot",
        question: `${prefix}_qmain`,
        targets: spec.targets.map((target, index) => ({
          id: target.id,
          text: `${prefix}_t${index + 1}`,
          isCorrect: target.isCorrect,
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
      type: "text-bubbles", "items": [{"text": "copil", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Ana", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "oraș", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "București", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "c", "label": "comune"}, {"id": "p", "label": "proprii"}],
      items: [{"text": "copil", "bucketId": "c"}, {"text": "Ana", "bucketId": "p"}, {"text": "oraș", "bucketId": "c"}, {"text": "București", "bucketId": "p"}, {"text": "măr", "bucketId": "c"}, {"text": "Carpați", "bucketId": "p"}],
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
      type: "text-bubbles", "items": [{"text": "un copil", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "o carte", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "copilul", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "cartea", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "n", "label": "nehotărât"}, {"id": "h", "label": "hotărât"}],
      items: [{"text": "un copil", "bucketId": "n"}, {"text": "o carte", "bucketId": "n"}, {"text": "copilul", "bucketId": "h"}, {"text": "cartea", "bucketId": "h"}],
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
      type: "text-bubbles", "items": [{"text": "eu", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "noi", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "tu", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "voi", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "1", "label": "persoana I"}, {"id": "2", "label": "persoana a II-a"}, {"id": "3", "label": "persoana a III-a"}],
      items: [{"text": "eu", "bucketId": "1"}, {"text": "noi", "bucketId": "1"}, {"text": "tu", "bucketId": "2"}, {"text": "voi", "bucketId": "2"}, {"text": "el", "bucketId": "3"}, {"text": "ea", "bucketId": "3"}],
    },
    instruction: "Grupează pronumele după persoană.",
    hint1: "Persoana I vorbește despre sine.",
    hint2: "Persoana a III-a vorbește despre altcineva.",
    quizQuestion: "Ce pronume este la persoana a III-a?",
    quizChoices: ["eu", "tu", "el", "noi"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Numeralul",
    text: "Separăm numeralele cardinale de cele ordinale și vedem cum arată poziția în șir.",
    svg: {
      type: "text-bubbles", "items": [{"text": "doi", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "patru", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "al doilea", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "întâi", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "c", "label": "cardinale"}, {"id": "o", "label": "ordinale"}],
      items: [{"text": "doi", "bucketId": "c"}, {"text": "patru", "bucketId": "c"}, {"text": "al doilea", "bucketId": "o"}, {"text": "întâi", "bucketId": "o"}, {"text": "șase", "bucketId": "c"}, {"text": "al patrulea", "bucketId": "o"}],
    },
    instruction: "Așază numeralele în grupa potrivită.",
    hint1: "Cardinalele spun câți sunt.",
    hint2: "Ordinalele spun locul în șir.",
    quizQuestion: "Care este numeral ordinal?",
    quizChoices: ["doi", "șase", "al doilea", "patru"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Adjectivul",
    text: "Găsim cuvintele care arată însușiri și le recunoaștem în enunț.",
    svg: {
      type: "sentence-display", "words": ["Copilul", "vesel", "și", "harnic", "citește", "zilnic"], "highlightIndices": [1, 3], "color": "#10B981"},
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
    difficulty: "easy",
  },
  {
    title: "Cazul substantivului (N/Ac)",
    text: "Substantivul își schimbă forma și rolul. Nominativul e subiect, Acuzativul e complement.",
    svg: {
      type: "text-bubbles", "items": [{"text": "Băiatul citește.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Văd un băiat.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Cartea e nouă.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Citesc o carte.", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "physics-bucket",
      buckets: [{"id": "n", "label": "Nominativ"}, {"id": "ac", "label": "Acuzativ"}],
      items: [{"text": "Băiatul citește.", "bucketId": "n"}, {"text": "Văd un băiat.", "bucketId": "ac"}, {"text": "Cartea e nouă.", "bucketId": "n"}, {"text": "Citesc o carte.", "bucketId": "ac"}],
    },
    instruction: "Grupează propozițiile după cazul substantivului subliniat mental.",
    hint1: "Nominativul răspunde la cine/ce.",
    hint2: "Acuzativul răspunde la pe cine/ce.",
    quizQuestion: "În ce caz este 'cartea' în 'Citesc cartea'?",
    quizChoices: ["Nominativ", "Acuzativ", "Dativ", "Genitiv"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Funcții sintactice de bază",
    text: "Substantivul poate fi subiect, nume predicativ, atribut sau complement.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "Subiect"}, {"emoji": "🔹", "label": "Atribut"}, {"emoji": "🔹", "label": "Complement"}, {"emoji": "🔹", "label": "Nume predicativ"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["Subiect", "cine face acțiunea"], ["Atribut", "care? ce fel de?"], ["Complement", "pe cine? ce?"], ["Nume predicativ", "formează predicatul nominal"]],
    },
    instruction: "Potrivește funcția cu întrebarea sau rolul ei.",
    hint1: "Subiectul e autorul acțiunii.",
    hint2: "Atributul determină un substantiv.",
    quizQuestion: "Ce funcție răspunde la întrebarea 'care?'?",
    quizChoices: ["Subiect", "Atribut", "Complement", "Predicat"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Grade de comparație",
    text: "Adjectivul poate arăta intensitatea însușirii prin grade de comparație.",
    svg: {
      type: "text-bubbles", "items": [{"text": "bun", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "mai bun", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "foarte bun", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "cel mai bun", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "p", "label": "Pozitiv"}, {"id": "c", "label": "Comparativ"}, {"id": "s", "label": "Superlativ"}],
      items: [{"text": "bun", "bucketId": "p"}, {"text": "mai bun", "bucketId": "c"}, {"text": "foarte bun", "bucketId": "s"}, {"text": "cel mai bun", "bucketId": "s"}],
    },
    instruction: "Așază adjectivul la gradul potrivit.",
    hint1: "Pozitivul e forma simplă.",
    hint2: "Comparativul compară, superlativul e maxim.",
    quizQuestion: "La ce grad este 'foarte frumos'?",
    quizChoices: ["Pozitiv", "Comparativ", "Superlativ relativ", "Superlativ absolut"],
    quizAnswer: 3,
    difficulty: "medium",
  },
  {
    title: "Pronume reflexiv",
    text: "Pronumele reflexiv arată că acțiunea se întoarce asupra subiectului.",
    svg: {
      type: "word-display", "word": "se", "highlightChars": [], "color": "#3B82F6", "subtitle": "Pronume reflexiv"},
    interactive: {
      type: "gap-fill",
      sentence: "Copilul ___ spală pe mâini.",
      choices: ["se", "îl", "îi", "le"],
      correctIndex: 0,
    },
    instruction: "Alege pronumele reflexiv potrivit.",
    hint1: "Acțiunea e făcută și suferită de aceeași persoană.",
    hint2: "Folosim 'se' pentru persoana a III-a.",
    quizQuestion: "Care este un pronume reflexiv?",
    quizChoices: ["mă", "pe el", "lui", "lor"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Numeral fracționar și multiplicativ",
    text: "Unele numerale arată părți dintr-un întreg sau de câte ori crește o cantitate.",
    svg: {
      type: "text-bubbles", "items": [{"text": "o doime", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "îndoit", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "o treime", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "întreit", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "f", "label": "Fracționar"}, {"id": "m", "label": "Multiplicativ"}],
      items: [{"text": "o doime", "bucketId": "f"}, {"text": "îndoit", "bucketId": "m"}, {"text": "o treime", "bucketId": "f"}, {"text": "întreit", "bucketId": "m"}],
    },
    instruction: "Grupează numeralele.",
    hint1: "Fracționarul arată o fracție.",
    hint2: "Multiplicativul arată o înmulțire.",
    quizQuestion: "Ce fel de numeral este 'îndoit'?",
    quizChoices: ["Cardinal", "Ordinal", "Fracționar", "Multiplicativ"],
    quizAnswer: 3,
    difficulty: "medium",
  },
  {
    title: "Cazul Dativ și Genitiv",
    text: "Genitivul arată posesia, Dativul arată cui i se dă ceva.",
    svg: {
      type: "text-bubbles", "items": [{"text": "cartea băiatului", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "dau băiatului", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "frunzele copacului", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "spun copacului", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "physics-bucket",
      buckets: [{"id": "g", "label": "Genitiv"}, {"id": "d", "label": "Dativ"}],
      items: [{"text": "cartea băiatului", "bucketId": "g"}, {"text": "dau băiatului", "bucketId": "d"}, {"text": "frunzele copacului", "bucketId": "g"}, {"text": "spun copacului", "bucketId": "d"}],
    },
    instruction: "Alege cazul corect.",
    hint1: "Genitivul răspunde la 'al/a/ai/ale cui?'.",
    hint2: "Dativul răspunde la 'cui?'.",
    quizQuestion: "În ce caz este 'mamei' în 'Îi dau mamei o floare'?",
    quizChoices: ["Nominativ", "Acuzativ", "Dativ", "Genitiv"],
    quizAnswer: 2,
    difficulty: "hard",
  },
  {
    title: "Funcții sintactice în D/G",
    text: "În Dativ și Genitiv, substantivul are funcții specifice.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "Atribut genitival"}, {"emoji": "🔹", "label": "Complement indirect"}, {"emoji": "🔹", "label": "Atribut datival"}, {"emoji": "🔹", "label": "Nume predicativ în G"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["Atribut genitival", "al cui?"], ["Complement indirect", "cui?"], ["Atribut datival", "nepotului"], ["Nume predicativ în G", "contra"]],
    },
    instruction: "Potrivește funcția cu întrebarea sau exemplul.",
    hint1: "Atributul genitival arată posesorul.",
    hint2: "Complementul indirect în Dativ arată destinatarul.",
    quizQuestion: "Ce funcție are un substantiv în Genitiv care determină alt substantiv?",
    quizChoices: ["Subiect", "Atribut genitival", "Complement direct", "Complement indirect"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Acordul adjectivului",
    text: "Adjectivul se acordă în gen, număr și caz cu substantivul determinat.",
    svg: {
      type: "sentence-display", "words": ["Fata", "harnică", "și", "băiatul", "harnic", "citesc."], "highlightIndices": [1, 4], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["Fata", "harnică", "și", "băiatul", "harnic", "citesc."],
      correctIndices: [1, 4],
    },
    instruction: "Atinge adjectivele care se acordă.",
    hint1: "Adjectivul ia forma substantivului.",
    hint2: "Fii atent la gen și număr.",
    quizQuestion: "Cum se acordă adjectivul?",
    quizChoices: ["În gen, număr și caz", "Doar în gen", "Doar în număr", "Nu se acordă"],
    quizAnswer: 0,
    difficulty: "hard",
  },
  {
    title: "Pronume demonstrativ și posesiv",
    text: "Demonstrativul arată depărtarea/apropierea, posesivul arată posesorul.",
    svg: {
      type: "text-bubbles", "items": [{"text": "acesta", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "acela", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "al meu", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "a ta", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "d", "label": "Demonstrativ"}, {"id": "p", "label": "Posesiv"}],
      items: [{"text": "acesta", "bucketId": "d"}, {"text": "acela", "bucketId": "d"}, {"text": "al meu", "bucketId": "p"}, {"text": "a ta", "bucketId": "p"}],
    },
    instruction: "Grupează pronumele.",
    hint1: "Acesta/acela sunt demonstrative.",
    hint2: "Al meu/a ta sunt posesive.",
    quizQuestion: "Ce fel de pronume este 'acela'?",
    quizChoices: ["Personal", "Reflexiv", "Demonstrativ", "Posesiv"],
    quizAnswer: 2,
    difficulty: "hard",
  },
  {
    title: "Valoarea adjectivală",
    text: "Când un pronume determină un substantiv, devine adjectiv pronominal.",
    svg: {
      type: "word-display", "word": "acesta", "highlightChars": [], "color": "#3B82F6", "subtitle": "Valoarea adjectivală"},
    interactive: {
      type: "gap-fill",
      sentence: "Băiatul ___ citește o carte.",
      choices: ["acesta", "el", "lui", "pe el"],
      correctIndex: 0,
    },
    instruction: "Alege cuvântul care poate fi adjectiv pronominal demonstrativ.",
    hint1: "Trebuie să se acorde cu 'băiatul'.",
    hint2: "'Acesta' determină substantivul.",
    quizQuestion: "Când devine pronumele adjectiv?",
    quizChoices: ["Când determină un verb", "Când determină un substantiv", "Când stă singur", "Niciodată"],
    quizAnswer: 1,
    difficulty: "hard",
  },
];

const VERB6_TOPICS: TopicSpec[] = [
  {
    title: "Infinitiv și formă personală",
    text: "Pornim de la forma de dicționar a verbului și o deosebim de formele care se schimbă după persoană și număr.",
    svg: {
      type: "text-bubbles", "items": [{"text": "a citi", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "a merge", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "citesc", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "aleargă", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "i", "label": "infinitiv"}, {"id": "p", "label": "formă personală"}],
      items: [{"text": "a citi", "bucketId": "i"}, {"text": "a merge", "bucketId": "i"}, {"text": "citesc", "bucketId": "p"}, {"text": "aleargă", "bucketId": "p"}, {"text": "a scrie", "bucketId": "i"}, {"text": "scriem", "bucketId": "p"}],
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
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "scriind"}, {"emoji": "🔹", "label": "citit"}, {"emoji": "🔹", "label": "a citi"}, {"emoji": "🔹", "label": "de făcut"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["scriind", "gerunziu"], ["citit", "participiu"], ["a citi", "infinitiv"], ["de făcut", "supin"]],
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
      type: "text-bubbles", "items": [{"text": "Mihai citește", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Cartea este citită", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Copilul se spală", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "physics-bucket",
      buckets: [{"id": "a", "label": "activă"}, {"id": "p", "label": "pasivă"}, {"id": "r", "label": "reflexivă"}],
      items: [{"text": "Mihai citește", "bucketId": "a"}, {"text": "Cartea este citită", "bucketId": "p"}, {"text": "Copilul se spală", "bucketId": "r"}],
    },
    instruction: "Grupează enunțurile după diateză.",
    hint1: "În diateza activă, subiectul face acțiunea.",
    hint2: "În reflexivă, acțiunea se întoarce spre subiect.",
    quizQuestion: "Care enunț este la diateza pasivă?",
    quizChoices: ["Mihai citește", "Cartea este citită", "Copilul se spală", "Ana desenează"],
    quizAnswer: 1,
    difficulty: "easy",
  },
  {
    title: "Timpuri simple",
    text: "Alegem timpul potrivit după indiciile din enunț și după forma verbului.",
    svg: {
      type: "word-display", "word": "citesc", "highlightChars": [], "color": "#3B82F6", "subtitle": "Timpuri simple"},
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
    difficulty: "easy",
  },
  {
    title: "Acordul verbului",
    text: "Potrivim persoana și numărul verbului cu subiectul din enunț.",
    svg: {
      type: "sentence-display", "words": ["Noi", "citim", "zilnic", "și", "scriem", "curat"], "highlightIndices": [1, 4], "color": "#10B981"},
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
    difficulty: "easy",
  },
  {
    title: "Modul indicativ (timpuri compuse)",
    text: "Indicativul are timpuri compuse cu verbe auxiliare.",
    svg: {
      type: "text-bubbles", "items": [{"text": "am citit", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "citisem", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "voi citi", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "pc", "label": "Perfect compus"}, {"id": "mmcp", "label": "Mai mult ca perfect"}, {"id": "v", "label": "Viitor"}],
      items: [{"text": "am citit", "bucketId": "pc"}, {"text": "citisem", "bucketId": "mmcp"}, {"text": "voi citi", "bucketId": "v"}],
    },
    instruction: "Grupează verbele după timp.",
    hint1: "Perfectul compus folosește 'am, ai, a'.",
    hint2: "Viitorul folosește 'voi, vei, va'.",
    quizQuestion: "La ce timp este 'am mers'?",
    quizChoices: ["Prezent", "Perfect compus", "Imperfect", "Viitor"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Modul imperativ",
    text: "Imperativul exprimă un ordin, un îndemn sau o rugăminte.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🎯", "label": "Citește!"}, {"emoji": "🎯", "label": "citesc"}, {"emoji": "🎯", "label": "Vino!"}, {"emoji": "🎯", "label": "merg"}], "bg": "#FEF3C7"},
    interactive: {
      type: "physics-slingshot",
      question: "Care verbe sunt la imperativ?",
      targets: [{"id": "1", "text": "Citește!", "isCorrect": true}, {"id": "2", "text": "citesc", "isCorrect": false}, {"id": "3", "text": "Vino!", "isCorrect": true}, {"id": "4", "text": "merg", "isCorrect": false}],
    },
    instruction: "Lovește verbele la imperativ.",
    hint1: "Imperativul se folosește pentru ordine.",
    hint2: "Adesea are semnul exclamării.",
    quizQuestion: "Ce exprimă modul imperativ?",
    quizChoices: ["O acțiune sigură", "Un ordin sau îndemn", "O dorință", "O condiție"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Modul conjunctiv",
    text: "Conjunctivul exprimă o acțiune posibilă, realizabilă, și folosește conjuncția 'să'.",
    svg: {
      type: "word-display", "word": "să", "highlightChars": [], "color": "#3B82F6", "subtitle": "Modul conjunctiv"},
    interactive: {
      type: "gap-fill",
      sentence: "Vreau ___ citesc o carte.",
      choices: ["să", "a", "o", "că"],
      correctIndex: 0,
    },
    instruction: "Alege conjuncția specifică modului conjunctiv.",
    hint1: "Conjunctivul se construiește cu 'să'.",
    hint2: "Exprimă o dorință sau posibilitate.",
    quizQuestion: "Care este marca modului conjunctiv?",
    quizChoices: ["a", "să", "că", "de"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Modul condițional-optativ",
    text: "Exprimă o acțiune care depinde de o condiție sau o dorință.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "aș citi"}, {"emoji": "🔹", "label": "aș fi citit"}, {"emoji": "🔹", "label": "ai merge"}, {"emoji": "🔹", "label": "ai fi mers"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["aș citi", "prezent"], ["aș fi citit", "perfect"], ["ai merge", "prezent"], ["ai fi mers", "perfect"]],
    },
    instruction: "Potrivește forma cu timpul ei.",
    hint1: "Condiționalul folosește 'aș, ai, ar'.",
    hint2: "Perfectul are și verbul 'fi'.",
    quizQuestion: "La ce mod este 'aș cânta'?",
    quizChoices: ["Indicativ", "Conjunctiv", "Condițional-optativ", "Imperativ"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Verbe copulative",
    text: "Verbul 'a fi' poate fi copulativ când formează predicatul nominal împreună cu un nume predicativ.",
    svg: {
      type: "sentence-display", "words": ["El", "este", "elev", "harnic."], "highlightIndices": [1], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["El", "este", "elev", "harnic."],
      correctIndices: [1],
    },
    instruction: "Atinge verbul copulativ.",
    hint1: "Verbul 'a fi' leagă subiectul de numele predicativ.",
    hint2: "Nu are sens de sine stătător aici.",
    quizQuestion: "Când este 'a fi' verb copulativ?",
    quizChoices: ["Când înseamnă 'a exista'", "Când formează predicatul nominal", "Când este auxiliar", "Când este la infinitiv"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Funcții sintactice ale modurilor nepersonale",
    text: "Infinitivul, gerunziul, participiul și supinul pot avea funcții de substantiv, adjectiv sau adverb.",
    svg: {
      type: "text-bubbles", "items": [{"text": "A citi e frumos.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Dorința de a citi", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "A învăța e util.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Mașina de spălat", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "physics-bucket",
      buckets: [{"id": "s", "label": "Subiect"}, {"id": "a", "label": "Atribut"}],
      items: [{"text": "A citi e frumos.", "bucketId": "s"}, {"text": "Dorința de a citi", "bucketId": "a"}, {"text": "A învăța e util.", "bucketId": "s"}, {"text": "Mașina de spălat", "bucketId": "a"}],
    },
    instruction: "Grupează după funcția sintactică.",
    hint1: "Infinitivul poate fi subiect.",
    hint2: "Supinul poate fi atribut.",
    quizQuestion: "Ce funcție are 'a citi' în 'A citi este important'?",
    quizChoices: ["Subiect", "Predicat", "Atribut", "Complement"],
    quizAnswer: 0,
    difficulty: "hard",
  },
  {
    title: "Predicatul nominal",
    text: "Predicatul nominal este format dintr-un verb copulativ și un nume predicativ.",
    svg: {
      type: "sentence-display", "words": ["Cerul", "este", "albastru", "astăzi."], "highlightIndices": [0, 1, 2, 3], "color": "#8B5CF6"},
    interactive: {
      type: "word-order",
      words: ["Cerul", "este", "albastru", "astăzi."],
      correctOrder: [0, 1, 2, 3],
    },
    instruction: "Așază cuvintele în ordine.",
    hint1: "Verbul copulativ stă lângă numele predicativ.",
    hint2: "Subiectul este primul.",
    quizQuestion: "Din ce este format predicatul nominal?",
    quizChoices: ["Verb predicativ", "Verb copulativ + nume predicativ", "Verb auxiliar + participiu", "Verb la infinitiv"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Verbe auxiliare",
    text: "Verbele auxiliare ajută la formarea timpurilor și modurilor compuse.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "a fi"}, {"emoji": "🔹", "label": "a avea"}, {"emoji": "🔹", "label": "a vrea"}, {"emoji": "🔹", "label": "a fi (cond)"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["a fi", "perfect, pasiv"], ["a avea", "perfect compus"], ["a vrea", "viitor"], ["a fi (cond)", "condițional perfect"]],
    },
    instruction: "Potrivește auxiliarul cu utilizarea lui.",
    hint1: "'A avea' formează perfectul compus.",
    hint2: "'A vrea' formează viitorul.",
    quizQuestion: "Care verb este auxiliar în 'am citit'?",
    quizChoices: ["am", "citit", "niciunul", "amândouă"],
    quizAnswer: 0,
    difficulty: "hard",
  },
  {
    title: "Valori morfologice ale verbului 'a fi'",
    text: "Verbul 'a fi' poate fi predicativ, copulativ sau auxiliar.",
    svg: {
      type: "text-bubbles", "items": [{"text": "Cartea este pe masă.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "El este elev.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Cartea este citită.", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "p", "label": "Predicativ"}, {"id": "c", "label": "Copulativ"}, {"id": "a", "label": "Auxiliar"}],
      items: [{"text": "Cartea este pe masă.", "bucketId": "p"}, {"text": "El este elev.", "bucketId": "c"}, {"text": "Cartea este citită.", "bucketId": "a"}],
    },
    instruction: "Grupează după valoarea verbului 'a fi'.",
    hint1: "Predicativ înseamnă 'a se afla'.",
    hint2: "Copulativ leagă un nume predicativ.",
    quizQuestion: "Ce valoare are 'este' în 'El este acasă'?",
    quizChoices: ["Predicativ", "Copulativ", "Auxiliar", "Nepersonal"],
    quizAnswer: 0,
    difficulty: "hard",
  },
  {
    title: "Construcții active și pasive",
    text: "Trecerea de la activ la pasiv schimbă subiectul și adaugă verbul 'a fi'.",
    svg: {
      type: "word-display", "word": "este", "highlightChars": [], "color": "#3B82F6", "subtitle": "Construcții active și pasive"},
    interactive: {
      type: "gap-fill",
      sentence: "Elevul citește cartea. -> Cartea ___ citită de elev.",
      choices: ["este", "a fost", "va fi", "era"],
      correctIndex: 0,
    },
    instruction: "Completează construcția pasivă.",
    hint1: "Timpul verbului trebuie păstrat.",
    hint2: "Prezent activ -> Prezent pasiv.",
    quizQuestion: "Cum se formează diateza pasivă?",
    quizChoices: ["Verb a fi + participiu", "Verb a avea + participiu", "Verb a vrea + infinitiv", "Verb a fi + gerunziu"],
    quizAnswer: 0,
    difficulty: "hard",
  },
];

const PROP6_TOPICS: TopicSpec[] = [
  {
    title: "Subiectul",
    text: "Găsim cine face acțiunea sau despre cine se spune ceva în propoziție.",
    svg: {
      type: "sentence-display", "words": ["Mara", "citește", "o", "carte", "în", "fiecare", "seară"], "highlightIndices": [0], "color": "#10B981"},
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
      type: "text-bubbles", "items": [{"text": "Mara", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "copilul", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "citește", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "aleargă", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "s", "label": "subiect"}, {"id": "p", "label": "predicat verbal"}],
      items: [{"text": "Mara", "bucketId": "s"}, {"text": "copilul", "bucketId": "s"}, {"text": "citește", "bucketId": "p"}, {"text": "aleargă", "bucketId": "p"}],
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
      type: "text-bubbles", "items": [{"text": "o carte", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "pe Ana", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "repede", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "ieri", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "physics-bucket",
      buckets: [{"id": "cd", "label": "complement direct"}, {"id": "a", "label": "altă parte"}],
      items: [{"text": "o carte", "bucketId": "cd"}, {"text": "pe Ana", "bucketId": "cd"}, {"text": "repede", "bucketId": "a"}, {"text": "ieri", "bucketId": "a"}],
    },
    instruction: "Așază grupurile de cuvinte în categoria corectă.",
    hint1: "Complementul direct completează verbul.",
    hint2: "Îl căutăm cu întrebările pe cine? ce?",
    quizQuestion: "Care grup de cuvinte poate fi complement direct?",
    quizChoices: ["pe Ana", "foarte bine", "repede", "ieri"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Atributul",
    text: "Cuvântul care arată o însușire sau o determinare a substantivului este atributul.",
    svg: {
      type: "word-display", "word": "atribut", "highlightChars": [], "color": "#3B82F6", "subtitle": "Atributul"},
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
    difficulty: "easy",
  },
  {
    title: "Propoziția simplă",
    text: "O propoziție simplă are un singur predicat și transmite o idee limpede.",
    svg: {
      type: "sentence-display", "words": ["Mara", "citește", "o", "carte"], "highlightIndices": [0, 1, 2, 3], "color": "#8B5CF6"},
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
    difficulty: "easy",
  },
  {
    title: "Propoziția dezvoltată",
    text: "Propoziția dezvoltată conține, pe lângă subiect și predicat, și părți secundare.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🎯", "label": "Ana citește o carte."}, {"emoji": "🎯", "label": "Plouă."}, {"emoji": "🎯", "label": "Băiatul aleargă repede."}, {"emoji": "🎯", "label": "Copilul doarme."}], "bg": "#FEF3C7"},
    interactive: {
      type: "physics-slingshot",
      question: "Care propoziții sunt dezvoltate?",
      targets: [{"id": "1", "text": "Ana citește o carte.", "isCorrect": true}, {"id": "2", "text": "Plouă.", "isCorrect": false}, {"id": "3", "text": "Băiatul aleargă repede.", "isCorrect": true}, {"id": "4", "text": "Copilul doarme.", "isCorrect": false}],
    },
    instruction: "Lovește propozițiile dezvoltate.",
    hint1: "Caută atribute sau complemente.",
    hint2: "Propoziția simplă are doar subiect și predicat.",
    quizQuestion: "Ce conține o propoziție dezvoltată?",
    quizChoices: ["Doar subiect și predicat", "Părți secundare de propoziție", "Mai multe predicate", "Doar atribute"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Complementul indirect",
    text: "Răspunde la întrebările cui?, despre cine/ce?, la cine/ce?.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "cui?"}, {"emoji": "🔹", "label": "despre cine?"}, {"emoji": "🔹", "label": "la cine?"}, {"emoji": "🔹", "label": "pentru cine?"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["cui?", "Dativ"], ["despre cine?", "Acuzativ cu prep."], ["la cine?", "Acuzativ cu prep."], ["pentru cine?", "Acuzativ cu prep."]],
    },
    instruction: "Potrivește întrebarea cu cazul specific.",
    hint1: "Complementul indirect arată destinatarul.",
    hint2: "Se construiește des cu prepoziții.",
    quizQuestion: "La ce întrebare răspunde complementul indirect?",
    quizChoices: ["ce?", "cui?", "când?", "cum?"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Complementul circumstanțial de loc",
    text: "Arată locul unde se desfășoară acțiunea și răspunde la întrebarea unde?.",
    svg: {
      type: "sentence-display", "words": ["Copilul", "se", "joacă", "în", "parc", "."], "highlightIndices": [3, 4], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["Copilul", "se", "joacă", "în", "parc", "."],
      correctIndices: [3, 4],
    },
    instruction: "Atinge cuvintele care formează complementul de loc.",
    hint1: "Răspunde la întrebarea 'unde?'.",
    hint2: "De obicei este un substantiv cu prepoziție.",
    quizQuestion: "Ce arată complementul circumstanțial de loc?",
    quizChoices: ["Timpul", "Modul", "Locul", "Cauza"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Complementul circumstanțial de timp",
    text: "Arată timpul când se desfășoară acțiunea și răspunde la întrebarea când?.",
    svg: {
      type: "word-display", "word": "mâine", "highlightChars": [], "color": "#3B82F6", "subtitle": "Complementul circumstanțial de timp"},
    interactive: {
      type: "gap-fill",
      sentence: "Vom merge la munte ___.",
      choices: ["mâine", "acolo", "frumos", "pe el"],
      correctIndex: 0,
    },
    instruction: "Alege cuvântul care arată timpul.",
    hint1: "Răspunde la întrebarea 'când?'.",
    hint2: "Poate fi un adverb de timp.",
    quizQuestion: "La ce întrebare răspunde complementul de timp?",
    quizChoices: ["unde?", "când?", "cum?", "de ce?"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Complementul circumstanțial de mod",
    text: "Arată felul în care se desfășoară acțiunea și răspunde la întrebarea cum?.",
    svg: {
      type: "text-bubbles", "items": [{"text": "repede", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "bine", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "ieri", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "acum", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "m", "label": "Mod"}, {"id": "t", "label": "Timp"}],
      items: [{"text": "repede", "bucketId": "m"}, {"text": "bine", "bucketId": "m"}, {"text": "ieri", "bucketId": "t"}, {"text": "acum", "bucketId": "t"}],
    },
    instruction: "Grupează adverbele după tipul de complement pe care îl pot forma.",
    hint1: "Modul răspunde la 'cum?'.",
    hint2: "Timpul răspunde la 'când?'.",
    quizQuestion: "Ce arată complementul circumstanțial de mod?",
    quizChoices: ["Locul", "Timpul", "Felul acțiunii", "Scopul"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Atributul substantival",
    text: "Atributul exprimat prin substantiv poate fi genitival sau prepozițional.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "cartea băiatului"}, {"emoji": "🔹", "label": "cartea de povești"}, {"emoji": "🔹", "label": "frunza copacului"}, {"emoji": "🔹", "label": "omul de zăpadă"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["cartea băiatului", "genitival"], ["cartea de povești", "prepozițional"], ["frunza copacului", "genitival"], ["omul de zăpadă", "prepozițional"]],
    },
    instruction: "Potrivește exemplul cu tipul de atribut.",
    hint1: "Genitivalul răspunde la 'al cui?'.",
    hint2: "Prepoziționalul are o prepoziție.",
    quizQuestion: "Ce fel de atribut este 'de lemn' în 'podul de lemn'?",
    quizChoices: ["Adjectival", "Substantival prepozițional", "Substantival genitival", "Pronominal"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Atributul adjectival și pronominal",
    text: "Atributul poate fi exprimat prin adjectiv sau pronume.",
    svg: {
      type: "text-bubbles", "items": [{"text": "fată frumoasă", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "cartea mea", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "om bun", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "caietul lui", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "physics-bucket",
      buckets: [{"id": "a", "label": "Adjectival"}, {"id": "p", "label": "Pronominal"}],
      items: [{"text": "fată frumoasă", "bucketId": "a"}, {"text": "cartea mea", "bucketId": "p"}, {"text": "om bun", "bucketId": "a"}, {"text": "caietul lui", "bucketId": "p"}],
    },
    instruction: "Grupează după partea de vorbire a atributului.",
    hint1: "Adjectivul arată o însușire.",
    hint2: "Pronumele înlocuiește un nume.",
    quizQuestion: "Ce fel de atribut este 'mea' în 'cartea mea'?",
    quizChoices: ["Adjectival", "Substantival", "Pronominal", "Verbal"],
    quizAnswer: 2,
    difficulty: "hard",
  },
  {
    title: "Subiectul multiplu",
    text: "Subiectul poate fi format din mai multe cuvinte coordonate.",
    svg: {
      type: "sentence-display", "words": ["Ana", "și", "Mihai", "citesc", "o", "carte."], "highlightIndices": [0, 1, 2], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["Ana", "și", "Mihai", "citesc", "o", "carte."],
      correctIndices: [0, 1, 2],
    },
    instruction: "Atinge cuvintele care formează subiectul multiplu.",
    hint1: "Sunt două sau mai multe nume.",
    hint2: "Sunt legate prin conjuncții.",
    quizQuestion: "Ce este un subiect multiplu?",
    quizChoices: ["Un subiect la plural", "Mai multe subiecte coordonate", "Un subiect subînțeles", "Un subiect inclus"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Acordul predicatului cu subiectul multiplu",
    text: "Predicatul se pune la plural când subiectul este multiplu.",
    svg: {
      type: "word-display", "word": "merg", "highlightChars": [], "color": "#3B82F6", "subtitle": "Acordul predicatului cu subiectul multiplu"},
    interactive: {
      type: "gap-fill",
      sentence: "Băiatul și fata ___ în parc.",
      choices: ["merg", "merge", "mergea", "mergând"],
      correctIndex: 0,
    },
    instruction: "Alege forma corectă a verbului.",
    hint1: "Subiectul multiplu cere verbul la plural.",
    hint2: "Acțiunea e făcută de amândoi.",
    quizQuestion: "Cum se acordă predicatul cu un subiect multiplu?",
    quizChoices: ["La singular", "La plural", "Nu se acordă", "La feminin"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Fraza (coordonare)",
    text: "Fraza este formată din două sau mai multe propoziții legate între ele.",
    svg: {
      type: "sentence-display", "words": ["Eu", "citesc", "iar", "tu", "scrii."], "highlightIndices": [0, 1, 2, 3, 4], "color": "#8B5CF6"},
    interactive: {
      type: "word-order",
      words: ["Eu", "citesc", "iar", "tu", "scrii."],
      correctOrder: [0, 1, 2, 3, 4],
    },
    instruction: "Așază cuvintele pentru a forma o frază.",
    hint1: "Fraza are mai multe predicate.",
    hint2: "Propozițiile sunt legate prin conjuncții.",
    quizQuestion: "Ce este o frază?",
    quizChoices: ["O propoziție lungă", "Un enunț cu mai multe predicate", "Un cuvânt compus", "O figură de stil"],
    quizAnswer: 1,
    difficulty: "hard",
  },
];

const TEXT6A_TOPICS: TopicSpec[] = [
  {
    title: "Opinie, argument, exemplu, concluzie",
    text: "În textul argumentativ, fiecare idee are un rol clar și duce cititorul spre o concluzie.",
    svg: {
      type: "text-bubbles", "items": [{"text": "Cred că lectura este importantă.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Deoarece ne ajută să învățăm.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "De exemplu, citesc mai bine.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "În concluzie, citesc zilnic.", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "o", "label": "opinie"}, {"id": "a", "label": "argument"}, {"id": "e", "label": "exemplu"}, {"id": "c", "label": "concluzie"}],
      items: [{"text": "Cred că lectura este importantă.", "bucketId": "o"}, {"text": "Deoarece ne ajută să învățăm.", "bucketId": "a"}, {"text": "De exemplu, citesc mai bine.", "bucketId": "e"}, {"text": "În concluzie, citesc zilnic.", "bucketId": "c"}],
    },
    instruction: "Așază fiecare enunț în rolul potrivit.",
    hint1: "Textul argumentativ începe cu o poziție clară.",
    hint2: "Argumentul și exemplul susțin opinia.",
    quizQuestion: "Care enunț exprimă o opinie?",
    quizChoices: ["Cred că lectura este importantă.", "Deoarece ne ajută să învățăm.", "De exemplu, citesc mai bine.", "În concluzie, citesc zilnic."],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Conectori logici",
    text: "Cuvintele de legătură arată cauza, consecința, adăugarea sau opoziția.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "deoarece"}, {"emoji": "🔹", "label": "de aceea"}, {"emoji": "🔹", "label": "în plus"}, {"emoji": "🔹", "label": "totuși"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["deoarece", "cauză"], ["de aceea", "consecință"], ["în plus", "adăugare"], ["totuși", "opoziție"]],
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
      type: "sentence-display", "words": ["opinie", "argument", "exemplu", "concluzie"], "highlightIndices": [0, 1, 2, 3], "color": "#8B5CF6"},
    interactive: {
      type: "word-order",
      words: ["opinie", "argument", "exemplu", "concluzie"],
      correctOrder: [0, 1, 2, 3],
    },
    instruction: "Așază pașii textului în ordinea corectă.",
    hint1: "Mai întâi vine ideea principală.",
    hint2: "La final apare concluzia.",
    quizQuestion: "Care este ordinea firească a unui text argumentativ?",
    quizChoices: ["opinie, argument, exemplu, concluzie", "exemplu, opinie, concluzie, argument", "concluzie, exemplu, argument, opinie", "argument, concluzie, opinie, exemplu"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Ideea principală",
    text: "Descoperim propoziția care poartă mesajul central și susține tema textului.",
    svg: {
      type: "sentence-display", "words": ["Cred", "că", "lectura", "zilnică", "ajută", "mult"], "highlightIndices": [0, 1, 2, 3, 4, 5], "color": "#10B981"},
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
    difficulty: "easy",
  },
  {
    title: "Concluzia",
    text: "Încheierea strânge ideile și întărește poziția autorului.",
    svg: {
      type: "word-display", "word": "În concluzie", "highlightChars": [], "color": "#3B82F6", "subtitle": "Concluzia"},
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
    difficulty: "easy",
  },
  {
    title: "Formularea opiniei",
    text: "Opinia este punctul de vedere personal asupra unei teme.",
    svg: {
      type: "text-bubbles", "items": [{"text": "Consider că filmul e bun.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Filmul durează două ore.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Părerea mea este că...", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Apa fierbe la 100 grade.", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "physics-bucket",
      buckets: [{"id": "o", "label": "Opinie"}, {"id": "f", "label": "Fapt"}],
      items: [{"text": "Consider că filmul e bun.", "bucketId": "o"}, {"text": "Filmul durează două ore.", "bucketId": "f"}, {"text": "Părerea mea este că...", "bucketId": "o"}, {"text": "Apa fierbe la 100 grade.", "bucketId": "f"}],
    },
    instruction: "Grupează enunțurile în opinii și fapte.",
    hint1: "Opinia este subiectivă.",
    hint2: "Faptul poate fi demonstrat obiectiv.",
    quizQuestion: "Care formulare introduce o opinie?",
    quizChoices: ["În opinia mea", "S-a demonstrat că", "Este un fapt că", "Conform datelor"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Susținerea cu argumente",
    text: "Argumentele trebuie să fie logice și relevante pentru opinia susținută.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🎯", "label": "Întărește mușchii."}, {"emoji": "🎯", "label": "E plictisitor."}, {"emoji": "🎯", "label": "Îmbunătățește circulația."}, {"emoji": "🎯", "label": "Costă bani."}], "bg": "#FEF3C7"},
    interactive: {
      type: "physics-slingshot",
      question: "Care sunt argumente valide pentru 'Sportul e sănătos'?",
      targets: [{"id": "1", "text": "Întărește mușchii.", "isCorrect": true}, {"id": "2", "text": "E plictisitor.", "isCorrect": false}, {"id": "3", "text": "Îmbunătățește circulația.", "isCorrect": true}, {"id": "4", "text": "Costă bani.", "isCorrect": false}],
    },
    instruction: "Lovește argumentele care susțin ideea.",
    hint1: "Argumentul trebuie să fie pro, nu contra.",
    hint2: "Trebuie să aibă sens logic.",
    quizQuestion: "Ce rol are un argument?",
    quizChoices: ["Să contrazică opinia", "Să susțină opinia", "Să încheie textul", "Să descrie un peisaj"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Conectori de cauză și efect",
    text: "Legăm cauza de efect folosind cuvinte specifice.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "din cauză că"}, {"emoji": "🔹", "label": "pentru că"}, {"emoji": "🔹", "label": "prin urmare"}, {"emoji": "🔹", "label": "așadar"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["din cauză că", "cauză"], ["pentru că", "cauză"], ["prin urmare", "efect"], ["așadar", "efect"]],
    },
    instruction: "Potrivește conectorul cu rolul său.",
    hint1: "Cauza arată motivul.",
    hint2: "Efectul arată rezultatul.",
    quizQuestion: "Care conector introduce o cauză?",
    quizChoices: ["deci", "așadar", "pentru că", "în concluzie"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Conectori de opoziție",
    text: "Arată o idee contrară sau o excepție.",
    svg: {
      type: "word-display", "word": "dar", "highlightChars": [], "color": "#3B82F6", "subtitle": "Conectori de opoziție"},
    interactive: {
      type: "gap-fill",
      sentence: "Îmi place ploaia, ___ prefer soarele.",
      choices: ["dar", "și", "sau", "deci"],
      correctIndex: 0,
    },
    instruction: "Alege conectorul de opoziție.",
    hint1: "Arată o preferință diferită.",
    hint2: "'Dar', 'iar', 'însă', 'ci' sunt de opoziție.",
    quizQuestion: "Care este un conector de opoziție?",
    quizChoices: ["și", "dar", "pentru că", "deci"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Identificarea tezei",
    text: "Teza este ideea principală pe care autorul vrea să o demonstreze.",
    svg: {
      type: "sentence-display", "words": ["Teza", "este", "ideea", "centrală", "a", "textului."], "highlightIndices": [0, 1, 2, 3, 4, 5], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["Teza", "este", "ideea", "centrală", "a", "textului."],
      correctIndices: [0, 1, 2, 3, 4, 5],
    },
    instruction: "Atinge cuvintele care definesc teza.",
    hint1: "Teza este punctul de plecare.",
    hint2: "Tot textul se construiește în jurul ei.",
    quizQuestion: "Ce este teza într-un text argumentativ?",
    quizChoices: ["Un exemplu", "O concluzie", "Ideea principală susținută", "Un conector"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Contraargumentul",
    text: "Este o idee care combate un argument advers, întărind astfel propria opinie.",
    svg: {
      type: "text-bubbles", "items": [{"text": "Sportul e bun.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Unii zic că e greu, dar merită.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Cititul dezvoltă mintea.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Deși ia timp, e util.", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "a", "label": "Argument"}, {"id": "c", "label": "Contraargument"}],
      items: [{"text": "Sportul e bun.", "bucketId": "a"}, {"text": "Unii zic că e greu, dar merită.", "bucketId": "c"}, {"text": "Cititul dezvoltă mintea.", "bucketId": "a"}, {"text": "Deși ia timp, e util.", "bucketId": "c"}],
    },
    instruction: "Grupează argumentele și contraargumentele.",
    hint1: "Contraargumentul recunoaște o obiecție și o respinge.",
    hint2: "Folosește des 'deși', 'chiar dacă'.",
    quizQuestion: "Ce face un contraargument?",
    quizChoices: ["Susține direct opinia", "Respinge o obiecție posibilă", "Încheie textul", "Introduce un exemplu"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Persuasiunea",
    text: "Scopul textului argumentativ este de a convinge cititorul.",
    svg: {
      type: "sentence-display", "words": ["Scopul", "este", "să", "convingă", "cititorul."], "highlightIndices": [0, 1, 2, 3, 4], "color": "#8B5CF6"},
    interactive: {
      type: "word-order",
      words: ["Scopul", "este", "să", "convingă", "cititorul."],
      correctOrder: [0, 1, 2, 3, 4],
    },
    instruction: "Așază cuvintele în ordine.",
    hint1: "A persuada înseamnă a convinge.",
    hint2: "Autorul vrea ca cititorul să îi accepte opinia.",
    quizQuestion: "Care este scopul principal al textului argumentativ?",
    quizChoices: ["Să povestească", "Să descrie", "Să convingă", "Să amuze"],
    quizAnswer: 2,
    difficulty: "hard",
  },
  {
    title: "Evaluarea argumentelor",
    text: "Un argument bun este logic, bazat pe fapte și relevant.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "logic"}, {"emoji": "🔹", "label": "relevant"}, {"emoji": "🔹", "label": "obiectiv"}, {"emoji": "🔹", "label": "subiectiv"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["logic", "are sens"], ["relevant", "se potrivește temei"], ["obiectiv", "bazat pe fapte"], ["subiectiv", "bazat pe emoții"]],
    },
    instruction: "Potrivește calitatea argumentului cu explicația.",
    hint1: "Argumentele trebuie să fie puternice.",
    hint2: "Faptele sunt mai puternice decât emoțiile.",
    quizQuestion: "Cum trebuie să fie un argument bun?",
    quizChoices: ["Subiectiv și lung", "Logic și relevant", "Amuzant și scurt", "Fără legătură cu tema"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Redactarea unei concluzii puternice",
    text: "Concluzia nu doar repetă, ci sintetizează și lasă o impresie de final.",
    svg: {
      type: "word-display", "word": "demonstrează", "highlightChars": [], "color": "#3B82F6", "subtitle": "Redactarea unei concluzii puternice"},
    interactive: {
      type: "gap-fill",
      sentence: "În concluzie, argumentele prezentate ___ importanța temei.",
      choices: ["demonstrează", "ascund", "ignoră", "șterg"],
      correctIndex: 0,
    },
    instruction: "Alege cuvântul potrivit pentru o concluzie.",
    hint1: "Concluzia confirmă teza.",
    hint2: "Trebuie să fie clară și fermă.",
    quizQuestion: "Ce trebuie să facă o concluzie bună?",
    quizChoices: ["Să introducă idei noi", "Să sintetizeze și să confirme teza", "Să contrazică argumentele", "Să lase textul neterminat"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Structura completă",
    text: "Un text argumentativ complet are introducere, cuprins și încheiere.",
    svg: {
      type: "sentence-display", "words": ["Introducere,", "cuprins", "și", "încheiere."], "highlightIndices": [0, 1, 2, 3], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["Introducere,", "cuprins", "și", "încheiere."],
      correctIndices: [0, 1, 2, 3],
    },
    instruction: "Atinge părțile structurii.",
    hint1: "Introducerea conține teza.",
    hint2: "Cuprinsul are argumentele, încheierea are concluzia.",
    quizQuestion: "Ce conține cuprinsul unui text argumentativ?",
    quizChoices: ["Teza", "Argumentele și exemplele", "Concluzia", "Titlul"],
    quizAnswer: 1,
    difficulty: "hard",
  },
];

const STIL6_TOPICS: TopicSpec[] = [
  {
    title: "Pronumele personale în context",
    text: "Pronumele păstrează claritatea enunțului și evită repetările inutile.",
    svg: {
      type: "text-bubbles", "items": [{"text": "eu", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "noi", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "tu", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "voi", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "1", "label": "persoana I"}, {"id": "2", "label": "persoana a II-a"}, {"id": "3", "label": "persoana a III-a"}],
      items: [{"text": "eu", "bucketId": "1"}, {"text": "noi", "bucketId": "1"}, {"text": "tu", "bucketId": "2"}, {"text": "voi", "bucketId": "2"}, {"text": "el", "bucketId": "3"}, {"text": "ea", "bucketId": "3"}],
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
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "repede"}, {"emoji": "🔹", "label": "azi"}, {"emoji": "🔹", "label": "aici"}, {"emoji": "🔹", "label": "des"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["repede", "mod"], ["azi", "timp"], ["aici", "loc"], ["des", "frecvență"]],
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
      type: "text-bubbles", "items": [{"text": "pe", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "la", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "din", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "sus", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "physics-bucket",
      buckets: [{"id": "p", "label": "prepoziții"}, {"id": "a", "label": "adverbe"}],
      items: [{"text": "pe", "bucketId": "p"}, {"text": "la", "bucketId": "p"}, {"text": "din", "bucketId": "p"}, {"text": "sus", "bucketId": "a"}, {"text": "acum", "bucketId": "a"}, {"text": "deasupra", "bucketId": "a"}],
    },
    instruction: "Separa cuvintele de legătură de cele care arată locul sau timpul.",
    hint1: "Prepoziția stă înaintea unui nume sau pronume.",
    hint2: "Adverbul poate sta singur în enunț.",
    quizQuestion: "Care cuvânt este prepoziție?",
    quizChoices: ["pe", "azi", "repede", "frumos"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Locuțiunile și nuanța",
    text: "Unele grupuri de cuvinte dau o nuanță mai precisă ideii și fac exprimarea mai bogată.",
    svg: {
      type: "sentence-display", "words": ["Copilul", "învață", "cu", "spor"], "highlightIndices": [0, 1, 2, 3], "color": "#8B5CF6"},
    interactive: {
      type: "word-order",
      words: ["Copilul", "învață", "cu", "spor"],
      correctOrder: [0, 1, 2, 3],
    },
    instruction: "Așază cuvintele în ordinea corectă.",
    hint1: "Locuțiunea este un grup de cuvinte cu sens unitar.",
    hint2: "Ea poate adăuga o nuanță expresivă.",
    quizQuestion: "Ce aduce o locuțiune în enunț?",
    quizChoices: ["o nuanță mai precisă", "o greșeală", "o literă mare", "o întrebare"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Enunțul expresiv",
    text: "Alegem formularea care sună mai clar, mai vie și mai exactă.",
    svg: {
      type: "word-display", "word": "tare", "highlightChars": [], "color": "#3B82F6", "subtitle": "Enunțul expresiv"},
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
    difficulty: "easy",
  },
  {
    title: "Sinonime",
    text: "Cuvinte cu formă diferită, dar cu sens asemănător.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "zăpadă"}, {"emoji": "🔹", "label": "prieten"}, {"emoji": "🔹", "label": "a fugi"}, {"emoji": "🔹", "label": "frumos"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["zăpadă", "nea"], ["prieten", "amic"], ["a fugi", "a alerga"], ["frumos", "arătos"]],
    },
    instruction: "Potrivește cuvintele sinonime.",
    hint1: "Sinonimele pot fi înlocuite unul cu altul în context.",
    hint2: "Ajută la evitarea repetițiilor.",
    quizQuestion: "Care este sinonimul cuvântului 'bucurie'?",
    quizChoices: ["tristețe", "veselie", "frică", "furie"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Antonime",
    text: "Cuvinte cu sens opus.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🎯", "label": "alb - negru"}, {"emoji": "🎯", "label": "mare - uriaș"}, {"emoji": "🎯", "label": "bun - rău"}, {"emoji": "🎯", "label": "mic - mărunt"}], "bg": "#FEF3C7"},
    interactive: {
      type: "physics-slingshot",
      question: "Care sunt perechi de antonime?",
      targets: [{"id": "1", "text": "alb - negru", "isCorrect": true}, {"id": "2", "text": "mare - uriaș", "isCorrect": false}, {"id": "3", "text": "bun - rău", "isCorrect": true}, {"id": "4", "text": "mic - mărunt", "isCorrect": false}],
    },
    instruction: "Lovește perechile de antonime.",
    hint1: "Antonimele exprimă idei contrare.",
    hint2: "Sunt utile pentru a crea antiteze.",
    quizQuestion: "Care este antonimul cuvântului 'lumină'?",
    quizChoices: ["soare", "întuneric", "zi", "strălucire"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Omonime",
    text: "Cuvinte cu aceeași formă, dar cu sensuri complet diferite.",
    svg: {
      type: "sentence-display", "words": ["Am", "cumpărat", "un", "corn", "și", "am", "suflat", "în", "corn."], "highlightIndices": [3, 8], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["Am", "cumpărat", "un", "corn", "și", "am", "suflat", "în", "corn."],
      correctIndices: [3, 8],
    },
    instruction: "Atinge cuvintele omonime.",
    hint1: "Se scriu și se pronunță la fel.",
    hint2: "Sensul se deduce din context.",
    quizQuestion: "Ce sunt omonimele?",
    quizChoices: ["Cuvinte cu sens asemănător", "Cuvinte cu sens opus", "Cuvinte cu aceeași formă și sens diferit", "Cuvinte cu formă diferită și sens diferit"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Câmpul lexical",
    text: "Toate cuvintele care se referă la același domeniu formează un câmp lexical.",
    svg: {
      type: "text-bubbles", "items": [{"text": "elev", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "caiet", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "copac", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "râu", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "s", "label": "Școală"}, {"id": "n", "label": "Natură"}],
      items: [{"text": "elev", "bucketId": "s"}, {"text": "caiet", "bucketId": "s"}, {"text": "copac", "bucketId": "n"}, {"text": "râu", "bucketId": "n"}],
    },
    instruction: "Grupează cuvintele după câmpul lexical.",
    hint1: "Cuvintele dintr-un câmp lexical sunt înrudite ca sens.",
    hint2: "Ajută la crearea atmosferei într-un text.",
    quizQuestion: "Care cuvânt face parte din câmpul lexical al 'timpului'?",
    quizChoices: ["ceas", "masă", "carte", "drum"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Sensul propriu și figurat",
    text: "Cuvintele pot fi folosite cu sensul lor obișnuit sau cu un sens nou, expresiv.",
    svg: {
      type: "word-display", "word": "piatră", "highlightChars": [], "color": "#3B82F6", "subtitle": "Sensul propriu și figurat"},
    interactive: {
      type: "gap-fill",
      sentence: "Inima lui de ___ nu a simțit nimic.",
      choices: ["piatră", "carne", "om", "sânge"],
      correctIndex: 0,
    },
    instruction: "Alege cuvântul folosit cu sens figurat.",
    hint1: "Sensul figurat creează o imagine poetică.",
    hint2: "'Inimă de piatră' înseamnă om insensibil.",
    quizQuestion: "Ce înseamnă sensul figurat?",
    quizChoices: ["Sensul din dicționar", "Un sens nou, expresiv", "Un sens greșit", "Un sens științific"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Arhaisme și Neologisme",
    text: "Arhaismele sunt cuvinte vechi, neologismele sunt cuvinte noi.",
    svg: {
      type: "text-bubbles", "items": [{"text": "vornic", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "computer", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "domniță", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "internet", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "physics-bucket",
      buckets: [{"id": "a", "label": "Arhaisme"}, {"id": "n", "label": "Neologisme"}],
      items: [{"text": "vornic", "bucketId": "a"}, {"text": "computer", "bucketId": "n"}, {"text": "domniță", "bucketId": "a"}, {"text": "internet", "bucketId": "n"}],
    },
    instruction: "Grupează cuvintele.",
    hint1: "Arhaismele dau culoare locală istorică.",
    hint2: "Neologismele aparțin lumii moderne.",
    quizQuestion: "Ce este un neologism?",
    quizChoices: ["Un cuvânt vechi", "Un cuvânt nou împrumutat", "Un cuvânt regional", "Un cuvânt inventat"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Regionalisme",
    text: "Cuvinte folosite doar în anumite regiuni ale țării.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "curechi"}, {"emoji": "🔹", "label": "barabule"}, {"emoji": "🔹", "label": "lubeniță"}, {"emoji": "🔹", "label": "păpușoi"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["curechi", "pepene"], ["barabule", "cartofi"], ["lubeniță", "pepene verde"], ["păpușoi", "porumb"]],
    },
    instruction: "Potrivește regionalismul cu sensul lui literar.",
    hint1: "Regionalismele dau autenticitate limbajului personajelor.",
    hint2: "Nu se folosesc în limba literară standard.",
    quizQuestion: "Ce sunt regionalismele?",
    quizChoices: ["Cuvinte noi", "Cuvinte vechi", "Cuvinte folosite într-o anumită zonă", "Cuvinte științifice"],
    quizAnswer: 2,
    difficulty: "hard",
  },
  {
    title: "Pleonasmul",
    text: "Este o greșeală de exprimare prin folosirea alăturată a unor cuvinte cu același sens.",
    svg: {
      type: "sentence-display", "words": ["A", "avansat", "înainte", "foarte", "repede."], "highlightIndices": [1, 2], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["A", "avansat", "înainte", "foarte", "repede."],
      correctIndices: [1, 2],
    },
    instruction: "Atinge cuvintele care formează pleonasmul.",
    hint1: "'A avansa' înseamnă deja 'a merge înainte'.",
    hint2: "Pleonasmul trebuie evitat.",
    quizQuestion: "Care expresie este un pleonasm?",
    quizChoices: ["A coborî jos", "A merge repede", "A citi o carte", "A scrie frumos"],
    quizAnswer: 0,
    difficulty: "hard",
  },
  {
    title: "Tautologia",
    text: "Repetarea aceluiași cuvânt cu funcții sintactice diferite, adesea pentru accentuare.",
    svg: {
      type: "word-display", "word": "lege", "highlightChars": [], "color": "#3B82F6", "subtitle": "Tautologia"},
    interactive: {
      type: "gap-fill",
      sentence: "Legea e ___.",
      choices: ["lege", "bună", "rea", "nouă"],
      correctIndex: 0,
    },
    instruction: "Completează tautologia.",
    hint1: "Se folosește pentru a sublinia o idee.",
    hint2: "Nu este o greșeală dacă e folosită stilistic.",
    quizQuestion: "Ce este tautologia?",
    quizChoices: ["O greșeală de ortografie", "Repetarea aceluiași cuvânt pentru accentuare", "Un cuvânt nou", "Un cuvânt vechi"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Expresii idiomatice",
    text: "Grupuri de cuvinte al căror sens nu poate fi dedus din sensul cuvintelor componente.",
    svg: {
      type: "sentence-display", "words": ["A", "tăia", "frunză", "la", "câini"], "highlightIndices": [0, 1, 2, 3, 4], "color": "#8B5CF6"},
    interactive: {
      type: "word-order",
      words: ["A", "tăia", "frunză", "la", "câini"],
      correctOrder: [0, 1, 2, 3, 4],
    },
    instruction: "Așază cuvintele pentru a forma expresia.",
    hint1: "Înseamnă a pierde timpul.",
    hint2: "Sensul este figurat și specific limbii române.",
    quizQuestion: "Ce înseamnă expresia 'a face din țânțar armăsar'?",
    quizChoices: ["A exagera", "A minți", "A crea ceva nou", "A se supăra"],
    quizAnswer: 0,
    difficulty: "hard",
  },
];

const FIG6_TOPICS: TopicSpec[] = [
  {
    title: "Comparația",
    text: "Comparația apropie două imagini printr-un cuvânt de legătură precum „ca” sau „precum”.",
    svg: {
      type: "text-bubbles", "items": [{"text": "ca un fulg", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "precum o stea", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "vântul rece", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "soarele zâmbește", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "c", "label": "comparație"}, {"id": "a", "label": "altă figură"}],
      items: [{"text": "ca un fulg", "bucketId": "c"}, {"text": "precum o stea", "bucketId": "c"}, {"text": "vântul rece", "bucketId": "a"}, {"text": "soarele zâmbește", "bucketId": "a"}],
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
      type: "sentence-display", "words": ["vântul", "rece", "și", "aspru", "bate", "tare"], "highlightIndices": [1, 3], "color": "#10B981"},
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
      type: "sentence-display", "words": ["Soarele", "zâmbește", "dimineața"], "highlightIndices": [0, 1, 2], "color": "#8B5CF6"},
    interactive: {
      type: "word-order",
      words: ["Soarele", "zâmbește", "dimineața"],
      correctOrder: [0, 1, 2],
    },
    instruction: "Construiește enunțul care sugerează personificarea.",
    hint1: "Atribuie naturii o acțiune omenească.",
    hint2: "Nu este o descriere literală.",
    quizQuestion: "Ce figură de stil apare când natura primește trăsături omenești?",
    quizChoices: ["personificare", "comparație", "enumerație", "repere"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Repetiția și enumerarea",
    text: "Repetiția insistă asupra unei idei, iar enumerarea adună mai multe elemente în șir.",
    svg: {
      type: "text-bubbles", "items": [{"text": "iar și iar", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "tot mai tare", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "mere, pere, prune", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "sus, jos, peste tot", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "physics-bucket",
      buckets: [{"id": "r", "label": "repetiție"}, {"id": "e", "label": "enumerare"}],
      items: [{"text": "iar și iar", "bucketId": "r"}, {"text": "tot mai tare", "bucketId": "r"}, {"text": "mere, pere, prune", "bucketId": "e"}, {"text": "sus, jos, peste tot", "bucketId": "e"}],
    },
    instruction: "Separa repetiția de enumerare.",
    hint1: "Repetiția revine asupra aceluiași cuvânt sau aceleiași idei.",
    hint2: "Enumerarea adună mai multe elemente.",
    quizQuestion: "Ce face enumerarea?",
    quizChoices: ["adună elemente", "ascunde sensul", "scurtează fraza", "șterge verbul"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Metafora",
    text: "Metafora sugerează o asemănare fără să o spună direct.",
    svg: {
      type: "word-display", "word": "metaforă", "highlightChars": [], "color": "#3B82F6", "subtitle": "Metafora"},
    interactive: {
      type: "gap-fill",
      sentence: "Marea de oameni a umplut piața. Este o ___.",
      choices: ["metaforă", "comparație", "epitet", "adverb"],
      correctIndex: 0,
    },
    instruction: "Completează cu numele figurii de stil.",
    hint1: "Aici sensul este sugerat, nu explicat direct.",
    hint2: "Nu apare cuvântul „ca”.",
    quizQuestion: "Care figură de stil sugerează o asemănare fără să o spună direct?",
    quizChoices: ["metafora", "comparația", "numeralul", "articolul"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Hiperbola",
    text: "Exagerare intenționată a proporțiilor unui obiect sau fenomen pentru a spori expresivitatea.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🎯", "label": "mare cât un munte"}, {"emoji": "🎯", "label": "frumos ca o floare"}, {"emoji": "🎯", "label": "a plâns o mare de lacrimi"}, {"emoji": "🎯", "label": "copacul înalt"}], "bg": "#FEF3C7"},
    interactive: {
      type: "physics-slingshot",
      question: "Care sunt hiperbole?",
      targets: [{"id": "1", "text": "mare cât un munte", "isCorrect": true}, {"id": "2", "text": "frumos ca o floare", "isCorrect": false}, {"id": "3", "text": "a plâns o mare de lacrimi", "isCorrect": true}, {"id": "4", "text": "copacul înalt", "isCorrect": false}],
    },
    instruction: "Lovește hiperbolele.",
    hint1: "Hiperbola exagerează mult realitatea.",
    hint2: "Se folosește pentru a impresiona.",
    quizQuestion: "Ce face hiperbola?",
    quizChoices: ["Exagerează", "Compară", "Personifică", "Enumeră"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Antiteza",
    text: "Punerea în opoziție a două cuvinte, idei sau imagini pentru a se evidenția reciproc.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "înger"}, {"emoji": "🔹", "label": "lumină"}, {"emoji": "🔹", "label": "bun"}, {"emoji": "🔹", "label": "viață"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["înger", "demon"], ["lumină", "întuneric"], ["bun", "rău"], ["viață", "moarte"]],
    },
    instruction: "Potrivește termenii aflați în antiteză.",
    hint1: "Antiteza se bazează pe antonime.",
    hint2: "Creează un contrast puternic.",
    quizQuestion: "Ce figură de stil folosește contraste puternice?",
    quizChoices: ["Antiteza", "Epitetul", "Repetiția", "Metafora"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Inversiunea",
    text: "Schimbarea ordinii obișnuite a cuvintelor în propoziție pentru a scoate în evidență un anumit cuvânt.",
    svg: {
      type: "sentence-display", "words": ["Frumoasa", "fată", "citea", "o", "carte."], "highlightIndices": [0, 1], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["Frumoasa", "fată", "citea", "o", "carte."],
      correctIndices: [0, 1],
    },
    instruction: "Atinge cuvintele a căror ordine este inversată (adjectiv înaintea substantivului).",
    hint1: "În mod normal, adjectivul stă după substantiv.",
    hint2: "Inversiunea atrage atenția asupra însușirii.",
    quizQuestion: "Care este ordinea obișnuită?",
    quizChoices: ["Substantiv + Adjectiv", "Adjectiv + Substantiv", "Verb + Subiect", "Adverb + Substantiv"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Aliterația",
    text: "Repetarea unor consoane sau silabe pentru a crea un efect sonor (muzicalitate).",
    svg: {
      type: "word-display", "word": "vijelia", "highlightChars": [], "color": "#3B82F6", "subtitle": "Aliterația"},
    interactive: {
      type: "gap-fill",
      sentence: "Vâjâind ca ___ vântul.",
      choices: ["vijelia", "apa", "soarele", "omul"],
      correctIndex: 0,
    },
    instruction: "Alege cuvântul care completează efectul sonor (repetarea sunetului v/j).",
    hint1: "Aliterația imită zgomote din natură.",
    hint2: "Este o figură de sunet.",
    quizQuestion: "Ce repetă aliterația?",
    quizChoices: ["Consoane", "Vocale", "Cuvinte întregi", "Propoziții"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Alegoria",
    text: "O povestire sau o descriere care ascunde un sens moral sau filozofic.",
    svg: {
      type: "text-bubbles", "items": [{"text": "Fabula cu vulpea și corbul", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Un documentar despre vulpi", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "a", "label": "Alegorie"}, {"id": "s", "label": "Sens propriu"}],
      items: [{"text": "Fabula cu vulpea și corbul", "bucketId": "a"}, {"text": "Un documentar despre vulpi", "bucketId": "s"}],
    },
    instruction: "Grupează textele.",
    hint1: "Alegoria folosește o poveste pentru a transmite o idee abstractă.",
    hint2: "Fabulele sunt adesea alegorii.",
    quizQuestion: "Ce ascunde o alegorie?",
    quizChoices: ["Un sens moral sau abstract", "O greșeală", "Un cuvânt nou", "O rimă"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Simbolul",
    text: "Un obiect, o ființă sau o imagine care reprezintă o idee abstractă.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "porumbelul alb"}, {"emoji": "🔹", "label": "inima"}, {"emoji": "🔹", "label": "cumpăna"}, {"emoji": "🔹", "label": "laurul"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["porumbelul alb", "pacea"], ["inima", "iubirea"], ["cumpăna", "dreptatea"], ["laurul", "gloria"]],
    },
    instruction: "Potrivește simbolul cu ideea pe care o reprezintă.",
    hint1: "Simbolul are o semnificație recunoscută cultural.",
    hint2: "Este folosit des în poezie.",
    quizQuestion: "Ce reprezintă porumbelul alb?",
    quizChoices: ["Pacea", "Războiul", "Tristețea", "Bucuria"],
    quizAnswer: 0,
    difficulty: "hard",
  },
  {
    title: "Oximoronul",
    text: "Asocierea neobișnuită a două cuvinte cu sensuri contradictorii care creează o imagine nouă.",
    svg: {
      type: "sentence-display", "words": ["Era", "o", "tăcere", "asurzitoare", "în", "cameră."], "highlightIndices": [2, 3], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["Era", "o", "tăcere", "asurzitoare", "în", "cameră."],
      correctIndices: [2, 3],
    },
    instruction: "Atinge cuvintele care formează oximoronul.",
    hint1: "Tăcerea nu poate fi asurzitoare în mod logic.",
    hint2: "Contrastul creează o imagine poetică puternică.",
    quizQuestion: "Care este un oximoron?",
    quizChoices: ["Tăcere asurzitoare", "Soare strălucitor", "Apă udă", "Vânt rece"],
    quizAnswer: 0,
    difficulty: "hard",
  },
  {
    title: "Epitetul metaforic",
    text: "Un epitet care este în același timp și o metaforă, sugerând o imagine neobișnuită.",
    svg: {
      type: "text-bubbles", "items": [{"text": "pădure de aramă", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "pădure verde", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "lacrimi de perle", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "lacrimi sărate", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "physics-bucket",
      buckets: [{"id": "em", "label": "Epitet metaforic"}, {"id": "es", "label": "Epitet simplu"}],
      items: [{"text": "pădure de aramă", "bucketId": "em"}, {"text": "pădure verde", "bucketId": "es"}, {"text": "lacrimi de perle", "bucketId": "em"}, {"text": "lacrimi sărate", "bucketId": "es"}],
    },
    instruction: "Grupează epitetele.",
    hint1: "Epitetul metaforic transferă sensuri între domenii diferite.",
    hint2: "Epitetul simplu arată o însușire obișnuită.",
    quizQuestion: "Ce este 'pădure de aramă'?",
    quizChoices: ["Epitet metaforic", "Epitet simplu", "Personificare", "Comparație"],
    quizAnswer: 0,
    difficulty: "hard",
  },
  {
    title: "Metafora personificatoare",
    text: "O metaforă care atribuie trăsături umane unui obiect sau fenomen.",
    svg: {
      type: "word-display", "word": "Mantia", "highlightChars": [], "color": "#3B82F6", "subtitle": "Metafora personificatoare"},
    interactive: {
      type: "gap-fill",
      sentence: "___ nopții a acoperit orașul.",
      choices: ["Mantia", "Întunericul", "Frigul", "Liniștea"],
      correctIndex: 0,
    },
    instruction: "Alege cuvântul care creează metafora personificatoare.",
    hint1: "Noaptea este văzută ca o persoană care poartă o mantie.",
    hint2: "Combină metafora cu personificarea.",
    quizQuestion: "Ce combină metafora personificatoare?",
    quizChoices: ["Metafora și personificarea", "Epitetul și comparația", "Repetiția și enumerația", "Antiteza și hiperbola"],
    quizAnswer: 0,
    difficulty: "hard",
  },
  {
    title: "Recunoașterea figurilor de stil",
    text: "Identificarea corectă a figurilor de stil ajută la înțelegerea textului literar.",
    svg: {
      type: "sentence-display", "words": ["Figurile", "de", "stil", "înfrumusețează", "textul."], "highlightIndices": [0, 1, 2, 3, 4], "color": "#8B5CF6"},
    interactive: {
      type: "word-order",
      words: ["Figurile", "de", "stil", "înfrumusețează", "textul."],
      correctOrder: [0, 1, 2, 3, 4],
    },
    instruction: "Așază cuvintele în ordine.",
    hint1: "Figurile de stil dau expresivitate limbajului.",
    hint2: "Ele transformă limbajul comun în limbaj poetic.",
    quizQuestion: "Care este rolul figurilor de stil?",
    quizChoices: ["Să înfrumusețeze textul", "Să complice citirea", "Să ascundă sensul", "Să scurteze textul"],
    quizAnswer: 0,
    difficulty: "hard",
  },
];

const ORT6_TOPICS: TopicSpec[] = [
  {
    title: "Î și â în cuvinte",
    text: "În română, literele î și â apar în contexte precise și trebuie scrise corect.",
    svg: {
      type: "text-bubbles", "items": [{"text": "în", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "înger", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "cânt", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "român", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "i", "label": "î"}, {"id": "a", "label": "â"}],
      items: [{"text": "în", "bucketId": "i"}, {"text": "înger", "bucketId": "i"}, {"text": "cânt", "bucketId": "a"}, {"text": "român", "bucketId": "a"}],
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
      type: "text-bubbles", "items": [{"text": "școală", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "ușă", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "țăran", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "rețetă", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "s", "label": "ș"}, {"id": "t", "label": "ț"}],
      items: [{"text": "școală", "bucketId": "s"}, {"text": "ușă", "bucketId": "s"}, {"text": "țăran", "bucketId": "t"}, {"text": "rețetă", "bucketId": "t"}],
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
      type: "text-bubbles", "items": [{"text": "s-a", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "i-am", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "deși", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "copilul", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "physics-bucket",
      buckets: [{"id": "c", "label": "cu cratimă"}, {"id": "f", "label": "fără cratimă"}],
      items: [{"text": "s-a", "bucketId": "c"}, {"text": "i-am", "bucketId": "c"}, {"text": "deși", "bucketId": "f"}, {"text": "copilul", "bucketId": "f"}],
    },
    instruction: "Așază formele în grupa corectă.",
    hint1: "Cratima unește elemente scurte.",
    hint2: "Apare des în vorbirea și scrierea curentă.",
    quizQuestion: "Care formă se scrie cu cratimă?",
    quizChoices: ["sau", "mama", "s-a", "deja"],
    quizAnswer: 2,
    difficulty: "easy",
  },
  {
    title: "Semnele de punctuație",
    text: "Punctul, virgula, semnul întrebării și exclamării organizează enunțul.",
    svg: {
      type: "word-display", "word": "?", "highlightChars": [], "color": "#3B82F6", "subtitle": "Semnele de punctuație"},
    interactive: {
      type: "gap-fill",
      sentence: "Mergem la mare ___",
      choices: [".", "?", "!", ","],
      correctIndex: 1,
    },
    instruction: "Completează cu semnul corect pentru o întrebare.",
    hint1: "La sfârșitul unui enunț interogativ folosim semnul întrebării.",
    hint2: "Semnul potrivit depinde de intenția enunțului.",
    quizQuestion: "Ce semn marchează o întrebare?",
    quizChoices: [".", "?", "!", ","],
    quizAnswer: 1,
    difficulty: "easy",
  },
  {
    title: "Dialogul scris",
    text: "În dialog, folosim semne speciale ca să marcăm vorbirea directă.",
    svg: {
      type: "sentence-display", "words": ["—", "Bună,", "Ana!", "—", "spuse", "Mara."], "highlightIndices": [0, 1, 2, 3, 4, 5], "color": "#8B5CF6"},
    interactive: {
      type: "word-order",
      words: ["—", "Bună,", "Ana!", "—", "spuse", "Mara."],
      correctOrder: [0, 1, 2, 3, 4, 5],
    },
    instruction: "Așază elementele dialogului în ordinea corectă.",
    hint1: "Dialogul începe și se încheie cu semne speciale.",
    hint2: "Vorbirea directă trebuie marcată clar.",
    quizQuestion: "Ce semn arată începerea dialogului?",
    quizChoices: ["—", ".", ",", "?"],
    quizAnswer: 0,
    difficulty: "easy",
  },
  {
    title: "Scrierea cu i / ii / iii",
    text: "Numărul de 'i' la finalul cuvântului depinde de morfologie și articulare.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "copii"}, {"emoji": "🔹", "label": "copiii"}, {"emoji": "🔹", "label": "codri"}, {"emoji": "🔹", "label": "codrii"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["copii", "plural nearticulat"], ["copiii", "plural articulat"], ["codri", "plural nearticulat"], ["codrii", "plural articulat"]],
    },
    instruction: "Potrivește forma cu explicația ei.",
    hint1: "Un 'i' este din rădăcină, al doilea e desinență de plural, al treilea e articol.",
    hint2: "Articolul hotărât la plural masculin este '-i'.",
    quizQuestion: "Câți 'i' are cuvântul 'copiii' (articulat)?",
    quizChoices: ["1", "2", "3", "4"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Scrierea cuvintelor compuse",
    text: "Unele cuvinte compuse se scriu legat, altele cu cratimă.",
    svg: {
      type: "text-bubbles", "items": [{"text": "binevoitor", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "floarea-soarelui", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "untdelemn", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "câine-lup", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "l", "label": "Legat"}, {"id": "c", "label": "Cu cratimă"}],
      items: [{"text": "binevoitor", "bucketId": "l"}, {"text": "floarea-soarelui", "bucketId": "c"}, {"text": "untdelemn", "bucketId": "l"}, {"text": "câine-lup", "bucketId": "c"}],
    },
    instruction: "Grupează cuvintele compuse.",
    hint1: "Dacă elementele și-au pierdut sensul individual, se scriu legat.",
    hint2: "Dacă își păstrează sensul, se scriu cu cratimă.",
    quizQuestion: "Cum se scrie 'floarea-soarelui'?",
    quizChoices: ["Legat", "Cu cratimă", "Separat", "Cu virgulă"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Virgula în vocativ",
    text: "Substantivele în cazul vocativ se despart prin virgulă de restul propoziției.",
    svg: {
      type: "sentence-display", "words": ["Vino", ",", "Mihai", ",", "aici!"], "highlightIndices": [1, 3], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["Vino", ",", "Mihai", ",", "aici!"],
      correctIndices: [1, 3],
    },
    instruction: "Atinge virgulele care izolează vocativul.",
    hint1: "Vocativul exprimă o strigare sau o adresare directă.",
    hint2: "Virgula marchează o pauză în vorbire.",
    quizQuestion: "Ce rol are virgula lângă un vocativ?",
    quizChoices: ["Să izoleze adresarea", "Să lege două propoziții", "Să arate o enumerare", "Să încheie propoziția"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Virgula în enumerare",
    text: "Părțile de propoziție de același fel se despart prin virgulă.",
    svg: {
      type: "word-display", "word": ",", "highlightChars": [], "color": "#3B82F6", "subtitle": "Virgula în enumerare"},
    interactive: {
      type: "gap-fill",
      sentence: "Am cumpărat mere ___ pere și prune.",
      choices: [",", ".", "!", "?"],
      correctIndex: 0,
    },
    instruction: "Alege semnul de punctuație potrivit.",
    hint1: "Enumerarea necesită pauze scurte.",
    hint2: "Înainte de 'și' nu se pune virgulă în enumerare simplă.",
    quizQuestion: "Ce desparte virgula într-o enumerare?",
    quizChoices: ["Părți de propoziție diferite", "Părți de propoziție de același fel", "Propoziții principale", "Subiectul de predicat"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Punctul și virgula",
    text: "Marchează o pauză mai mare decât virgula și mai mică decât punctul.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🎯", "label": "Afară plouă; noi stăm în casă."}, {"emoji": "🎯", "label": "Ana are mere."}, {"emoji": "🎯", "label": "El citește; ea scrie."}, {"emoji": "🎯", "label": "Vino aici!"}], "bg": "#FEF3C7"},
    interactive: {
      type: "physics-slingshot",
      question: "Unde s-ar potrivi punctul și virgula?",
      targets: [{"id": "1", "text": "Afară plouă; noi stăm în casă.", "isCorrect": true}, {"id": "2", "text": "Ana are mere.", "isCorrect": false}, {"id": "3", "text": "El citește; ea scrie.", "isCorrect": true}, {"id": "4", "text": "Vino aici!", "isCorrect": false}],
    },
    instruction: "Lovește propozițiile care folosesc corect punctul și virgula.",
    hint1: "Se folosește pentru a separa propoziții independente în cadrul unei fraze lungi.",
    hint2: "Arată o legătură strânsă de sens.",
    quizQuestion: "Ce pauză marchează punctul și virgula?",
    quizChoices: ["Mai mică decât virgula", "Mai mare decât virgula, mai mică decât punctul", "Cea mai mare pauză", "Nicio pauză"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Scrierea pronumelor",
    text: "Pronumele neaccentuate se scriu adesea cu cratimă când se leagă de alte cuvinte.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "să-i"}, {"emoji": "🔹", "label": "i-a"}, {"emoji": "🔹", "label": "le-a"}, {"emoji": "🔹", "label": "mi-a"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["să-i", "să + îi"], ["i-a", "îi + a"], ["le-a", "le + a"], ["mi-a", "îmi + a"]],
    },
    instruction: "Potrivește forma cu cratimă cu elementele ei componente.",
    hint1: "Cratima marchează căderea unei vocale.",
    hint2: "Ajută la pronunțarea într-o singură silabă.",
    quizQuestion: "Din ce este format 'i-a'?",
    quizChoices: ["îi + a", "el + a", "ea + a", "ei + a"],
    quizAnswer: 0,
    difficulty: "hard",
  },
  {
    title: "Scrierea verbelor",
    text: "Unele verbe au forme care pot crea confuzii ortografice.",
    svg: {
      type: "text-bubbles", "items": [{"text": "a crea", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "a creea", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "așază", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "așează", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "physics-bucket",
      buckets: [{"id": "c", "label": "Corect"}, {"id": "g", "label": "Greșit"}],
      items: [{"text": "a crea", "bucketId": "c"}, {"text": "a creea", "bucketId": "g"}, {"text": "așază", "bucketId": "c"}, {"text": "așează", "bucketId": "g"}],
    },
    instruction: "Grupează formele verbale.",
    hint1: "Verbul 'a crea' se conjugă ca 'a lucra'.",
    hint2: "Atenție la alternanțele fonetice.",
    quizQuestion: "Care este forma corectă la infinitiv?",
    quizChoices: ["a creea", "a crea", "a creia", "a cre"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Omofone",
    text: "Cuvinte care se pronunță la fel, dar se scriu diferit în funcție de sens.",
    svg: {
      type: "word-display", "word": "sa", "highlightChars": [], "color": "#3B82F6", "subtitle": "Omofone"},
    interactive: {
      type: "gap-fill",
      sentence: "Cartea ___ este pe masă.",
      choices: ["sa", "s-a", "să", "se"],
      correctIndex: 0,
    },
    instruction: "Alege forma corectă.",
    hint1: "'Sa' este pronume posesiv (a lui/a ei).",
    hint2: "'S-a' este pronume reflexiv + verb auxiliar.",
    quizQuestion: "Când scriem 's-a' cu cratimă?",
    quizChoices: ["Când înseamnă 'a lui'", "Când urmează un verb la participiu", "Când este la început de propoziție", "Niciodată"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Ghilimelele",
    text: "Se folosesc pentru a reproduce exact cuvintele cuiva sau pentru a marca un titlu.",
    svg: {
      type: "sentence-display", "words": ["El", "a", "zis:", "„", "Voi", "veni", "mâine.", "”"], "highlightIndices": [3, 7], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["El", "a", "zis:", "„", "Voi", "veni", "mâine.", "”"],
      correctIndices: [3, 7],
    },
    instruction: "Atinge ghilimelele.",
    hint1: "În limba română folosim ghilimelele „ ”.",
    hint2: "Ele încadrează citatul.",
    quizQuestion: "Pentru ce se folosesc ghilimelele?",
    quizChoices: ["Pentru a marca o întrebare", "Pentru a reproduce exact un text", "Pentru a arăta o pauză", "Pentru a despărți silabe"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Parantezele",
    text: "Se folosesc pentru a adăuga o explicație sau o informație suplimentară.",
    svg: {
      type: "sentence-display", "words": ["Mihai", "(", "fratele", "meu", ")", "citește."], "highlightIndices": [0, 1, 2, 3, 4, 5], "color": "#8B5CF6"},
    interactive: {
      type: "word-order",
      words: ["Mihai", "(", "fratele", "meu", ")", "citește."],
      correctOrder: [0, 1, 2, 3, 4, 5],
    },
    instruction: "Așază cuvintele și parantezele în ordine.",
    hint1: "Informația din paranteze poate fi omisă fără a strica sensul propoziției.",
    hint2: "Parantezele izolează explicația.",
    quizQuestion: "Ce rol au parantezele rotunde?",
    quizChoices: ["Să marcheze un dialog", "Să adauge o explicație suplimentară", "Să încheie propoziția", "Să arate o exclamare"],
    quizAnswer: 1,
    difficulty: "hard",
  },
];

const TEXT6L_TOPICS: TopicSpec[] = [
  {
    title: "Genurile literare",
    text: "Recunoaștem dacă textul povestește, exprimă sentimente sau se joacă în scenă.",
    svg: {
      type: "text-bubbles", "items": [{"text": "povestește întâmplări", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "exprimă sentimente", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "se citește pe scenă", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "e", "label": "epic"}, {"id": "l", "label": "liric"}, {"id": "d", "label": "dramatic"}],
      items: [{"text": "povestește întâmplări", "bucketId": "e"}, {"text": "exprimă sentimente", "bucketId": "l"}, {"text": "se citește pe scenă", "bucketId": "d"}],
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
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "personaj"}, {"emoji": "🔹", "label": "acțiune"}, {"emoji": "🔹", "label": "narator"}, {"emoji": "🔹", "label": "dialog"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["personaj", "cine?"], ["acțiune", "ce face?"], ["narator", "povestește"], ["dialog", "replici"]],
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
      type: "sentence-display", "words": ["Luna", "albă", "strălucește", "în", "noapte", "adâncă"], "highlightIndices": [1, 2, 5], "color": "#10B981"},
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
    difficulty: "easy",
  },
  {
    title: "Succesiunea evenimentelor",
    text: "În narațiune, evenimentele se așază într-o ordine clară.",
    svg: {
      type: "sentence-display", "words": ["mai întâi", "apoi", "după aceea", "la final"], "highlightIndices": [0, 1, 2, 3], "color": "#8B5CF6"},
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
    difficulty: "easy",
  },
  {
    title: "Mesajul textului",
    text: "Mesajul ne arată ce învățătură sau idee rămâne după lectură.",
    svg: {
      type: "word-display", "word": "ideea principală", "highlightChars": [], "color": "#3B82F6", "subtitle": "Mesajul textului"},
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
    difficulty: "easy",
  },
  {
    title: "Naratorul",
    text: "Naratorul poate fi obiectiv (povestește la persoana a III-a) sau subiectiv (persoana I).",
    svg: {
      type: "text-bubbles", "items": [{"text": "El a mers la școală.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Eu am văzut totul.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Ei se jucau în parc.", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "M-am bucurat mult.", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "physics-bucket",
      buckets: [{"id": "o", "label": "Obiectiv"}, {"id": "s", "label": "Subiectiv"}],
      items: [{"text": "El a mers la școală.", "bucketId": "o"}, {"text": "Eu am văzut totul.", "bucketId": "s"}, {"text": "Ei se jucau în parc.", "bucketId": "o"}, {"text": "M-am bucurat mult.", "bucketId": "s"}],
    },
    instruction: "Grupează după tipul de narator.",
    hint1: "Naratorul obiectiv este un observator.",
    hint2: "Naratorul subiectiv este și personaj.",
    quizQuestion: "La ce persoană povestește naratorul subiectiv?",
    quizChoices: ["Persoana I", "Persoana a II-a", "Persoana a III-a", "Nu folosește pronume"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Modurile de expunere",
    text: "Narațiunea povestește, descrierea prezintă, dialogul reproduce replici.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "Narațiune"}, {"emoji": "🔹", "label": "Descriere"}, {"emoji": "🔹", "label": "Dialog"}, {"emoji": "🔹", "label": "Monolog"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["Narațiune", "povestește fapte"], ["Descriere", "prezintă un peisaj/portret"], ["Dialog", "schimb de replici"], ["Monolog", "vorbire cu sine însuși"]],
    },
    instruction: "Potrivește modul de expunere cu definiția sa.",
    hint1: "Narațiunea este specifică genului epic.",
    hint2: "Descrierea folosește multe adjective.",
    quizQuestion: "Ce mod de expunere prezintă trăsăturile unui obiect?",
    quizChoices: ["Narațiunea", "Descrierea", "Dialogul", "Monologul"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Timpul și spațiul",
    text: "Indicii de timp și spațiu fixează acțiunea într-un cadru.",
    svg: {
      type: "sentence-display", "words": ["Într-o", "dimineață", "de", "vară", ",", "în", "pădure", "."], "highlightIndices": [1, 3, 6], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["Într-o", "dimineață", "de", "vară", ",", "în", "pădure", "."],
      correctIndices: [1, 3, 6],
    },
    instruction: "Atinge cuvintele care arată timpul și spațiul.",
    hint1: "Răspund la întrebările 'când?' și 'unde?'.",
    hint2: "Sunt esențiale în textul epic.",
    quizQuestion: "Ce rol au indicii de timp și spațiu?",
    quizChoices: ["Să fixeze cadrul acțiunii", "Să descrie personajele", "Să arate rima", "Să încheie textul"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Caracterizarea personajului",
    text: "Personajul poate fi caracterizat direct (de narator) sau indirect (din fapte).",
    svg: {
      type: "word-display", "word": "indirectă", "highlightChars": [], "color": "#3B82F6", "subtitle": "Caracterizarea personajului"},
    interactive: {
      type: "gap-fill",
      sentence: "Faptul că ajută pe toată lumea este o caracterizare ___.",
      choices: ["indirectă", "directă", "fizică", "inutilă"],
      correctIndex: 0,
    },
    instruction: "Alege tipul de caracterizare.",
    hint1: "Caracterizarea indirectă reiese din comportament.",
    hint2: "Caracterizarea directă este spusă clar de narator.",
    quizQuestion: "Cum se numește caracterizarea care reiese din faptele personajului?",
    quizChoices: ["Directă", "Indirectă", "Fizică", "Obiectivă"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Rima și măsura",
    text: "Elemente specifice textului liric care dau muzicalitate.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🎯", "label": "împerecheată"}, {"emoji": "🎯", "label": "încrucișată"}, {"emoji": "🎯", "label": "obiectivă"}, {"emoji": "🎯", "label": "îmbrățișată"}], "bg": "#FEF3C7"},
    interactive: {
      type: "physics-slingshot",
      question: "Care sunt tipuri de rimă?",
      targets: [{"id": "1", "text": "împerecheată", "isCorrect": true}, {"id": "2", "text": "încrucișată", "isCorrect": true}, {"id": "3", "text": "obiectivă", "isCorrect": false}, {"id": "4", "text": "îmbrățișată", "isCorrect": true}],
    },
    instruction: "Lovește tipurile de rimă.",
    hint1: "Rima este potrivirea sunetelor la final de vers.",
    hint2: "Măsura este numărul de silabe dintr-un vers.",
    quizQuestion: "Ce este măsura unui vers?",
    quizChoices: ["Numărul de cuvinte", "Numărul de silabe", "Tipul de rimă", "Lungimea strofei"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Tema textului",
    text: "Tema este aspectul general al realității abordat în text (ex: natura, iubirea, copilăria).",
    svg: {
      type: "sentence-display", "words": ["Tema", "este", "ideea", "generală", "a", "textului."], "highlightIndices": [0, 1, 2, 3, 4, 5], "color": "#8B5CF6"},
    interactive: {
      type: "word-order",
      words: ["Tema", "este", "ideea", "generală", "a", "textului."],
      correctOrder: [0, 1, 2, 3, 4, 5],
    },
    instruction: "Așază cuvintele în ordine.",
    hint1: "Tema este mai largă decât mesajul.",
    hint2: "Multe texte pot avea aceeași temă.",
    quizQuestion: "Ce este tema unui text literar?",
    quizChoices: ["Un personaj", "Aspectul general abordat", "O figură de stil", "Un mod de expunere"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Motivul literar",
    text: "Un element recurent care susține tema (ex: codrul, luna, lacul).",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "codrul"}, {"emoji": "🔹", "label": "luna"}, {"emoji": "🔹", "label": "cartea"}, {"emoji": "🔹", "label": "drumul"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["codrul", "natura"], ["luna", "noaptea/visarea"], ["cartea", "cunoașterea"], ["drumul", "călătoria/viața"]],
    },
    instruction: "Potrivește motivul literar cu tema pe care o sugerează.",
    hint1: "Motivele literare sunt simboluri frecvente.",
    hint2: "Ele ajută la construirea atmosferei.",
    quizQuestion: "Ce este un motiv literar?",
    quizChoices: ["O greșeală", "Un element recurent cu valoare simbolică", "Un tip de rimă", "Un personaj principal"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Ritmul poeziei",
    text: "Ritmul este dat de succesiunea silabelor accentuate și neaccentuate.",
    svg: {
      type: "text-bubbles", "items": [{"text": "Doi-nă, doi-nă, cân-tec dul-ce", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "A-far' e toam-nă", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "t", "label": "Trohaic"}, {"id": "i", "label": "Iambic"}],
      items: [{"text": "Doi-nă, doi-nă, cân-tec dul-ce", "bucketId": "t"}, {"text": "A-far' e toam-nă", "bucketId": "i"}],
    },
    instruction: "Grupează versurile după ritm (intuitiv).",
    hint1: "Ritmul trohaic este vioi, popular.",
    hint2: "Ritmul iambic este mai lent, solemn.",
    quizQuestion: "Ce dă ritmul unei poezii?",
    quizChoices: ["Rima", "Succesiunea silabelor accentuate și neaccentuate", "Numărul de strofe", "Titlul"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Perspectiva narativă",
    text: "Punctul de vedere din care este relatată povestea.",
    svg: {
      type: "sentence-display", "words": ["Naratorul", "știe", "totul", "despre", "personaje."], "highlightIndices": [0, 1, 2], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["Naratorul", "știe", "totul", "despre", "personaje."],
      correctIndices: [0, 1, 2],
    },
    instruction: "Atinge cuvintele care descriu un narator omniscient.",
    hint1: "Perspectiva poate fi obiectivă (omniscientă) sau subiectivă.",
    hint2: "Afectează modul în care cititorul percepe povestea.",
    quizQuestion: "Cum se numește naratorul care știe totul?",
    quizChoices: ["Subiectiv", "Omniscient", "Personaj", "Martor"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Relația dintre personaje",
    text: "Modul în care personajele interacționează dezvăluie caracterul lor și face acțiunea să avanseze.",
    svg: {
      type: "word-display", "word": "tensiunea", "highlightChars": [], "color": "#3B82F6", "subtitle": "Relația dintre personaje"},
    interactive: {
      type: "gap-fill",
      sentence: "Conflictul dintre personaje generează ___ acțiunii.",
      choices: ["tensiunea", "sfârșitul", "rima", "titlul"],
      correctIndex: 0,
    },
    instruction: "Alege cuvântul potrivit.",
    hint1: "Conflictul este motorul narațiunii.",
    hint2: "Relațiile pot fi de prietenie, dușmănie, etc.",
    quizQuestion: "Ce rol are conflictul într-o narațiune?",
    quizChoices: ["Să plictisească", "Să genereze tensiune și să avanseze acțiunea", "Să descrie natura", "Să încheie textul"],
    quizAnswer: 1,
    difficulty: "hard",
  },
];

const RECAP6_TOPICS: TopicSpec[] = [
  {
    title: "Reamintirea categoriilor",
    text: "Punem împreună cuvinte și noțiuni din morfologie, sintaxă, stilistică și text.",
    svg: {
      type: "text-bubbles", "items": [{"text": "substantiv", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "subiect", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "epitet", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "concluzie", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "m", "label": "morfologie"}, {"id": "s", "label": "sintaxă"}, {"id": "st", "label": "stilistică"}, {"id": "t", "label": "text"}],
      items: [{"text": "substantiv", "bucketId": "m"}, {"text": "subiect", "bucketId": "s"}, {"text": "epitet", "bucketId": "st"}, {"text": "concluzie", "bucketId": "t"}],
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
      type: "text-bubbles", "items": [{"text": "Ana", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "scrie", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "repede", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "s", "label": "subiect"}, {"id": "p", "label": "predicat"}, {"id": "a", "label": "adverb"}],
      items: [{"text": "Ana", "bucketId": "s"}, {"text": "scrie", "bucketId": "p"}, {"text": "repede", "bucketId": "a"}],
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
      type: "sentence-display", "words": ["frumos", "ca", "vântul", "mereu", "și", "tare"], "highlightIndices": [0, 1, 2, 3], "color": "#10B981"},
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
    difficulty: "easy",
  },
  {
    title: "Ordinea ideilor",
    text: "Punem ideile în șir, de la observație la concluzie.",
    svg: {
      type: "sentence-display", "words": ["observație", "argument", "exemplu", "concluzie"], "highlightIndices": [0, 1, 2, 3], "color": "#8B5CF6"},
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
    difficulty: "easy",
  },
  {
    title: "Final de recapitulare",
    text: "La final alegem termenul potrivit și închidem exercițiul sigur.",
    svg: {
      type: "word-display", "word": "potrivit", "highlightChars": [], "color": "#3B82F6", "subtitle": "Final de recapitulare"},
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
    difficulty: "easy",
  },
  {
    title: "Mix de morfologie și sintaxă",
    text: "Legătura dintre partea de vorbire și funcția sintactică.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "Substantiv (N)"}, {"emoji": "🔹", "label": "Verb predicativ"}, {"emoji": "🔹", "label": "Adjectiv"}, {"emoji": "🔹", "label": "Adverb"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["Substantiv (N)", "Subiect"], ["Verb predicativ", "Predicat verbal"], ["Adjectiv", "Atribut adjectival"], ["Adverb", "Complement circumstanțial"]],
    },
    instruction: "Potrivește partea de vorbire cu funcția ei obișnuită.",
    hint1: "Substantivul în Nominativ este adesea subiect.",
    hint2: "Adjectivul determină un substantiv.",
    quizQuestion: "Ce funcție are de obicei un adjectiv?",
    quizChoices: ["Subiect", "Predicat", "Atribut", "Complement"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Mix de ortografie",
    text: "Reguli de scriere corectă amestecate.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🎯", "label": "s-a dus"}, {"emoji": "🎯", "label": "sa dus"}, {"emoji": "🎯", "label": "așază"}, {"emoji": "🎯", "label": "așează"}], "bg": "#FEF3C7"},
    interactive: {
      type: "physics-slingshot",
      question: "Care cuvinte sunt scrise corect?",
      targets: [{"id": "1", "text": "s-a dus", "isCorrect": true}, {"id": "2", "text": "sa dus", "isCorrect": false}, {"id": "3", "text": "așază", "isCorrect": true}, {"id": "4", "text": "așează", "isCorrect": false}],
    },
    instruction: "Lovește formele corecte.",
    hint1: "Atenție la cratimă și la conjugarea verbelor.",
    hint2: "Verifică sensul în context.",
    quizQuestion: "Cum se scrie corect?",
    quizChoices: ["s-a dus", "sa dus", "sadus", "s-adus"],
    quizAnswer: 0,
    difficulty: "medium",
  },
  {
    title: "Recunoașterea figurilor de stil",
    text: "Identificarea rapidă a figurilor de stil învățate.",
    svg: {
      type: "text-bubbles", "items": [{"text": "vântul plânge", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "alb ca neaua", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "pădure deasă", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "physics-bucket",
      buckets: [{"id": "p", "label": "Personificare"}, {"id": "c", "label": "Comparație"}, {"id": "e", "label": "Epitet"}],
      items: [{"text": "vântul plânge", "bucketId": "p"}, {"text": "alb ca neaua", "bucketId": "c"}, {"text": "pădure deasă", "bucketId": "e"}],
    },
    instruction: "Grupează exemplele.",
    hint1: "Personificarea dă viață.",
    hint2: "Comparația folosește 'ca'.",
    quizQuestion: "Ce figură de stil este 'vântul plânge'?",
    quizChoices: ["Epitet", "Comparație", "Personificare", "Metaforă"],
    quizAnswer: 2,
    difficulty: "medium",
  },
  {
    title: "Tipuri de texte",
    text: "Diferențierea între textul literar și cel nonliterar/argumentativ.",
    svg: {
      type: "sentence-display", "words": ["Textul", "literar", "transmite", "emoții", "și", "imagini."], "highlightIndices": [1, 3, 5], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["Textul", "literar", "transmite", "emoții", "și", "imagini."],
      correctIndices: [1, 3, 5],
    },
    instruction: "Atinge cuvintele cheie pentru textul literar.",
    hint1: "Textul literar este subiectiv.",
    hint2: "Textul argumentativ vrea să convingă.",
    quizQuestion: "Ce transmite în principal un text literar?",
    quizChoices: ["Informații exacte", "Emoții și imagini", "Argumente logice", "Reguli"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Funcții sintactice",
    text: "Recunoașterea rolului cuvintelor în propoziție.",
    svg: {
      type: "word-display", "word": "subiectul", "highlightChars": [], "color": "#3B82F6", "subtitle": "Funcții sintactice"},
    interactive: {
      type: "gap-fill",
      sentence: "Cuvântul care arată cine face acțiunea este ___.",
      choices: ["subiectul", "predicatul", "atributul", "complementul"],
      correctIndex: 0,
    },
    instruction: "Completează definiția.",
    hint1: "Subiectul este 'actorul' propoziției.",
    hint2: "Răspunde la întrebarea 'cine?'.",
    quizQuestion: "Ce funcție sintactică răspunde la întrebarea 'ce face?'?",
    quizChoices: ["Subiectul", "Predicatul", "Atributul", "Complementul"],
    quizAnswer: 1,
    difficulty: "medium",
  },
  {
    title: "Analiză complexă pe text",
    text: "Înțelegerea unui text necesită analiză pe mai multe niveluri.",
    svg: {
      type: "sentence-display", "words": ["Citim", "textul", "și", "identificăm", "mesajul."], "highlightIndices": [0, 1, 2, 3, 4], "color": "#8B5CF6"},
    interactive: {
      type: "word-order",
      words: ["Citim", "textul", "și", "identificăm", "mesajul."],
      correctOrder: [0, 1, 2, 3, 4],
    },
    instruction: "Așază cuvintele în ordine.",
    hint1: "Lectura atentă este primul pas.",
    hint2: "Mesajul este concluzia analizei.",
    quizQuestion: "Care este primul pas în analiza unui text?",
    quizChoices: ["Identificarea figurilor de stil", "Lectura atentă", "Numărarea cuvintelor", "Găsirea subiectului"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Valori morfologice multiple",
    text: "Același cuvânt poate fi părți de vorbire diferite în funcție de context.",
    svg: {
      type: "icon-grid", "items": [{"emoji": "🔹", "label": "un (copil)"}, {"emoji": "🔹", "label": "un (creion, nu două)"}, {"emoji": "🔹", "label": "o (fată)"}, {"emoji": "🔹", "label": "o (carte, nu două)"}], "bg": "#F3E8FF"},
    interactive: {
      type: "match-pairs",
      pairs: [["un (copil)", "articol"], ["un (creion, nu două)", "numeral"], ["o (fată)", "articol"], ["o (carte, nu două)", "numeral"]],
    },
    instruction: "Potrivește cuvântul cu valoarea lui.",
    hint1: "Contextul este esențial.",
    hint2: "Dacă se opune lui 'doi/două', este numeral.",
    quizQuestion: "Ce valoare are 'un' în 'Am cumpărat un singur măr'?",
    quizChoices: ["Articol", "Numeral", "Pronume", "Adjectiv"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Construcții sintactice dificile",
    text: "Diferențierea între complemente și atribute în contexte similare.",
    svg: {
      type: "text-bubbles", "items": [{"text": "Cartea de pe masă", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Stă pe masă", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Ziua de mâine", "color": "#2563EB", "bg": "#DBEAFE"}, {"text": "Vine mâine", "color": "#2563EB", "bg": "#DBEAFE"}]},
    interactive: {
      type: "drag-to-bucket",
      buckets: [{"id": "a", "label": "Atribut"}, {"id": "c", "label": "Complement"}],
      items: [{"text": "Cartea de pe masă", "bucketId": "a"}, {"text": "Stă pe masă", "bucketId": "c"}, {"text": "Ziua de mâine", "bucketId": "a"}, {"text": "Vine mâine", "bucketId": "c"}],
    },
    instruction: "Grupează după funcția sintactică.",
    hint1: "Atributul determină un substantiv.",
    hint2: "Complementul determină un verb.",
    quizQuestion: "Ce funcție are 'de pe masă' în 'Cartea de pe masă e a mea'?",
    quizChoices: ["Atribut", "Complement de loc", "Subiect", "Nume predicativ"],
    quizAnswer: 0,
    difficulty: "hard",
  },
  {
    title: "Argumentare pe text literar",
    text: "Folosirea textului literar ca suport pentru o argumentare.",
    svg: {
      type: "word-display", "word": "deoarece", "highlightChars": [], "color": "#3B82F6", "subtitle": "Argumentare pe text literar"},
    interactive: {
      type: "gap-fill",
      sentence: "Poezia transmite tristețe, ___ folosește epitete întunecate.",
      choices: ["deoarece", "deși", "dar", "sau"],
      correctIndex: 0,
    },
    instruction: "Alege conectorul potrivit.",
    hint1: "Argumentarea necesită justificări.",
    hint2: "Epitetele susțin ideea de tristețe.",
    quizQuestion: "Ce rol are cuvântul 'deoarece'?",
    quizChoices: ["Introduce o concluzie", "Introduce o cauză/argument", "Arată o opoziție", "Adaugă o idee"],
    quizAnswer: 1,
    difficulty: "hard",
  },
  {
    title: "Sinteză finală",
    text: "Toate cunoștințele se leagă pentru a forma o înțelegere completă a limbii.",
    svg: {
      type: "sentence-display", "words": ["Gramatica", "și", "literatura", "ne", "ajută", "să", "comunicăm", "bine."], "highlightIndices": [0, 2, 6, 7], "color": "#10B981"},
    interactive: {
      type: "highlight-text",
      tokens: ["Gramatica", "și", "literatura", "ne", "ajută", "să", "comunicăm", "bine."],
      correctIndices: [0, 2, 6, 7],
    },
    instruction: "Atinge cuvintele cheie ale sintezei.",
    hint1: "Scopul final este comunicarea corectă și expresivă.",
    hint2: "Limba este un instrument complex.",
    quizQuestion: "Care este scopul învățării limbii române?",
    quizChoices: ["Să trecem clasa", "Să comunicăm corect și expresiv", "Să memorăm reguli", "Să scriem mult"],
    quizAnswer: 1,
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
