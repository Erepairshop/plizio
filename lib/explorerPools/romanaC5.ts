
// lib/explorerPools/romanaC5.ts - AstroRomână Clasa 5
import type { PoolTopicDef } from "./types";

type Difficulty = "easy" | "medium" | "hard";
type AnswerIndex = 0 | 1 | 2 | 3;

type LessonSeed = {
  title: string;
  text: string;
  hint1: string;
  hint2: string;
  svg: PoolTopicDef["svg"];
  interactive: PoolTopicDef["interactive"];
  quiz: {
    question: string;
    choices: [string, string, string, string];
    answerIndex: AnswerIndex;
  };
};

type TopicSeed = LessonSeed & { difficulty: Difficulty };

const LEVEL_LABEL: Record<Difficulty, string> = {
  easy: "nivel de bază",
  medium: "nivel de aplicare",
  hard: "nivel de analiză",
};

function mkHighlight(tokens: string[], correctIndices: number[], instruction: string, hint1: string, hint2: string): PoolTopicDef["interactive"] {
  return { type: "highlight-text", tokens, correctIndices, instruction, hint1, hint2 };
}

function mkGap(sentence: string, choices: [string, string, string, string], correctIndex: number, instruction: string, hint1: string, hint2: string): PoolTopicDef["interactive"] {
  return { type: "gap-fill", sentence, choices, correctIndex, instruction, hint1, hint2 };
}

function mkPairs(pairs: [string, string][], instruction: string, hint1: string, hint2: string): PoolTopicDef["interactive"] {
  return { type: "match-pairs", pairs: pairs.map(([left, right]) => ({ left, right })), instruction, hint1, hint2 };
}

function mkBucket(
  buckets: [string, string][],
  items: [string, string][],
  instruction: string,
  hint1: string,
  hint2: string
): PoolTopicDef["interactive"] {
  return {
    type: "physics-bucket",
    buckets: buckets.map(([id, label]) => ({ id, label })),
    items: items.map(([text, bucketId]) => ({ text, bucketId })),
    instruction,
    hint1,
    hint2,
  };
}

function mkSlingshot(question: string, targets: [string, boolean][], instruction: string, hint1: string, hint2: string): PoolTopicDef["interactive"] {
  return {
    type: "physics-slingshot",
    question,
    targets: targets.map(([text, isCorrect], idx) => ({ id: `t${idx + 1}`, text, isCorrect })),
    instruction,
    hint1,
    hint2,
  };
}

function expandTo15(lessons: LessonSeed[]): TopicSeed[] {
  const levels: Difficulty[] = ["easy", "medium", "hard"];
  const topics: TopicSeed[] = [];
  for (const level of levels) {
    for (const lesson of lessons) {
      topics.push({
        ...lesson,
        difficulty: level,
        title: `${lesson.title} (${LEVEL_LABEL[level]})`,
        text: `${lesson.text} Lucrezi la ${LEVEL_LABEL[level]}.`,
      });
    }
  }
  return topics;
}

function mkIsland(explorerTitle: string, lessons: LessonSeed[]) {
  const topics = expandTo15(lessons);
  const ro: Record<string, string> = { explorer_title: explorerTitle };

  const pool: PoolTopicDef[] = topics.map((topic, idx) => {
    const n = idx + 1;
    const key = `t${n}`;
    ro[`${key}_title`] = topic.title;
    ro[`${key}_text`] = topic.text;
    ro[`${key}_h1`] = topic.hint1;
    ro[`${key}_h2`] = topic.hint2;
    ro[`${key}_q`] = topic.quiz.question;
    ro[`${key}_qa`] = topic.quiz.choices[0];
    ro[`${key}_qb`] = topic.quiz.choices[1];
    ro[`${key}_qc`] = topic.quiz.choices[2];
    ro[`${key}_qd`] = topic.quiz.choices[3];
    const answer = `${key}_${(["qa", "qb", "qc", "qd"] as const)[topic.quiz.answerIndex]}`;

    return {
      difficulty: topic.difficulty,
      infoTitle: `${key}_title`,
      infoText: `${key}_text`,
      svg: topic.svg,
      hintKey: `${key}_h1`,
      interactive: topic.interactive,
      quiz: { question: `${key}_q`, choices: [`${key}_qa`, `${key}_qb`, `${key}_qc`, `${key}_qd`], answer },
    };
  });

  const easy = topics.filter((t) => t.difficulty === "easy").length;
  const medium = topics.filter((t) => t.difficulty === "medium").length;
  const hard = topics.filter((t) => t.difficulty === "hard").length;
  if (topics.length !== 15 || easy !== 5 || medium !== 5 || hard !== 5) {
    throw new Error(`${explorerTitle}: trebuie 15 topicuri (5 easy, 5 medium, 5 hard).`);
  }

  return { labels: { ro }, pool };
}

const FON5_LESSONS: LessonSeed[] = [
  {
    title: "Vocale și consoane",
    text: "Recunoști rapid literele care formează nucleul silabei.",
    hint1: "A, E, I, O, U sunt vocale.",
    hint2: "Consoanele apar cu obstacol de articulare.",
    svg: { type: "letter-circles", letters: ["A", "E", "I", "O", "U", "B", "R", "Ț"], color: "#4F46E5" },
    interactive: mkHighlight(["a", "m", "e", "r", "o", "s", "u"], [0, 2, 4, 6], "Selectează vocalele.", "Vocalele pot forma singure o silabă.", "Consoanele au alt comportament fonetic."),
    quiz: { question: "Care literă este vocală?", choices: ["E", "T", "S", "R"], answerIndex: 0 },
  },
  {
    title: "Despărțirea în silabe",
    text: "Aplici despărțirea corectă în silabe pentru cuvinte uzuale.",
    hint1: "Pronunță cuvântul rar.",
    hint2: "Fiecare silabă are nucleu vocalic.",
    svg: { type: "word-syllables", parts: ["ca", "ie", "tul"], color: "#4338CA", showClap: true },
    interactive: mkGap("Cuvântul „caietul” are ___ silabe.", ["două", "trei", "patru", "una"], 1, "Completează numărul corect.", "Sunetele se grupează în 3 silabe.", "Pronunță: ca-ie-tul."),
    quiz: { question: "Câte silabe are „copil”?", choices: ["1", "2", "3", "4"], answerIndex: 1 },
  },
  {
    title: "Diftong și hiat",
    text: "Diferențiezi între două vocale în aceeași silabă și două vocale în silabe diferite.",
    hint1: "„oa” din „toamnă” este diftong.",
    hint2: "„po-et” este hiat.",
    svg: { type: "text-bubbles", items: [{ text: "oa", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "a-e", color: "#7C3AED", bg: "#EDE9FE" }] },
    interactive: mkPairs([["toam-nă", "diftong"], ["po-et", "hiat"], ["sea-ră", "diftong"]], "Potrivește exemplul cu termenul corect.", "Verifică dacă vocalele rămân în aceeași silabă.", "Hiatul separă vocalele."),
    quiz: { question: "Care exemplu este hiat?", choices: ["po-et", "toam-nă", "sea-ră", "oa-ie"], answerIndex: 0 },
  },
  {
    title: "Monosilabic, bisilabic, trisilabic",
    text: "Clasifici cuvintele după numărul de silabe.",
    hint1: "Numără nucleele vocalice.",
    hint2: "Pom = monosilabic, copil = bisilabic.",
    svg: { type: "icon-grid", items: [{ emoji: "1️⃣", label: "mono" }, { emoji: "2️⃣", label: "bi" }, { emoji: "3️⃣", label: "tri" }], bg: "#EEF2FF" },
    interactive: mkBucket([["mono", "Monosilabic"], ["bi", "Bisilabic"], ["tri", "Trisilabic"]], [["pom", "mono"], ["copil", "bi"], ["caiet", "tri"], ["nor", "mono"], ["carte", "bi"], ["familie", "tri"]], "Grupează corect cuvintele.", "Atenție la pronunția reală.", "Nu confunda literele cu silabele."),
    quiz: { question: "„caiet” este:", choices: ["trisilabic", "bisilabic", "monosilabic", "fără silabe"], answerIndex: 0 },
  },
  {
    title: "Accentul în cuvânt",
    text: "Identifici silaba accentuată în exemple frecvente.",
    hint1: "Silaba accentuată se pronunță mai intens.",
    hint2: "Accentul poate schimba claritatea enunțului oral.",
    svg: { type: "word-display", word: "colegă", highlightChars: ["l", "e"], color: "#3730A3", subtitle: "co-LE-gă" },
    interactive: mkSlingshot("Selectează marcările corecte ale accentului.", [["co-LE-gă", true], ["CO-le-gă", false], ["ca-IE-t", true], ["CA-iet", false], ["toam-NĂ", true], ["TO-am-nă", false]], "Lovește doar variantele corecte.", "Accentul nu cade mereu pe prima silabă.", "Ascultă pronunția normată."),
    quiz: { question: "Ce este accentul?", choices: ["silaba pronunțată mai intens", "o literă nouă", "un semn de punctuație", "o parte de vorbire"], answerIndex: 0 },
  },
];

const SUBST5_LESSONS: LessonSeed[] = [
  {
    title: "Substantive comune și proprii",
    text: "Diferențiezi substantivele care denumesc clase de obiecte de cele care denumesc individual.",
    hint1: "Numele proprii se scriu cu majusculă.",
    hint2: "Substantivele comune denumesc în general.",
    svg: { type: "text-bubbles", items: [{ text: "Ana", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "copil", color: "#0F766E", bg: "#CCFBF1" }] },
    interactive: mkHighlight(["Ana", "copil", "București", "oraș", "Dunărea", "manual"], [0, 2, 4], "Selectează substantivele proprii.", "Caută nume unice.", "Verifică majuscula inițială."),
    quiz: { question: "Care este substantiv propriu?", choices: ["Cluj", "elev", "stradă", "caiet"], answerIndex: 0 },
  },
  {
    title: "Genul și numărul",
    text: "Aplici corect categoriile de gen și număr la substantive uzuale.",
    hint1: "Identifică întâi forma de bază.",
    hint2: "Apoi verifică singular/plural.",
    svg: { type: "icon-grid", items: [{ emoji: "👦", label: "masculin" }, { emoji: "👧", label: "feminin" }, { emoji: "📘", label: "neutru" }], bg: "#ECFEFF" },
    interactive: mkGap("Pluralul lui „elev” este ___.", ["elevi", "eleve", "elev", "elevuri"], 0, "Completează forma corectă.", "Substantivul e masculin.", "Forma de plural uzual este „elevi”."),
    quiz: { question: "„carte” este de gen:", choices: ["feminin", "masculin", "neutru", "comun"], answerIndex: 0 },
  },
  {
    title: "Cazuri principale",
    text: "Recunoști cazurile substantivului după rolul în propoziție.",
    hint1: "Nominativ pentru subiect.",
    hint2: "Genitiv pentru posesie.",
    svg: { type: "simple-icon", icon: "🧭", color: "#4338CA" },
    interactive: mkPairs([["elevul citește", "nominativ"], ["cartea elevului", "genitiv"], ["i-am dat elevului", "dativ"]], "Potrivește structura cu cazul corect.", "Verifică întrebarea gramaticală potrivită.", "Rolul sintactic confirmă cazul."),
    quiz: { question: "În „cartea elevului”, „elevului” este la:", choices: ["genitiv", "dativ", "nominativ", "vocativ"], answerIndex: 0 },
  },
  {
    title: "Articulare",
    text: "Distingi formele articulat hotărât și nearticulat.",
    hint1: "Articolul hotărât este atașat la final.",
    hint2: "Forma de dicționar este nearticulată.",
    svg: { type: "two-groups", left: { items: ["copilul", "cartea"], bg: "#EDE9FE", border: "#7C3AED" }, right: { items: ["copil", "carte"], bg: "#DBEAFE", border: "#3B82F6" } },
    interactive: mkBucket([["hot", "Articulat hotărât"], ["neart", "Nearticulat"]], [["elevul", "hot"], ["elev", "neart"], ["orașul", "hot"], ["oraș", "neart"], ["floarea", "hot"], ["floare", "neart"]], "Grupează formele după articulare.", "Caută articolul enclitic.", "Fără articol = nearticulat."),
    quiz: { question: "Care formă este articulată hotărât?", choices: ["cartea", "carte", "unei cărți", "cărți"], answerIndex: 0 },
  },
  {
    title: "Substantivul în propoziție",
    text: "Recunoști substantivul în contexte cu mai multe părți de vorbire.",
    hint1: "Substantivul denumește ființe, lucruri, fenomene.",
    hint2: "Nu confunda cu verbul sau adjectivul.",
    svg: { type: "simple-icon", icon: "📦", color: "#3730A3" },
    interactive: mkSlingshot("Lovește doar substantivele.", [["masă", true], ["citește", false], ["copil", true], ["frumos", false], ["școală", true], ["repede", false]], "Alege cuvintele care denumesc.", "Întrebarea „ce?” te ajută.", "Excludem verbe, adverbe, adjective."),
    quiz: { question: "Care cuvânt este substantiv?", choices: ["școală", "aleargă", "foarte", "silitor"], answerIndex: 0 },
  },
];
const VERB5_LESSONS: LessonSeed[] = [
  {
    title: "Verbul și acțiunea",
    text: "Identifici forme verbale care exprimă acțiuni sau stări.",
    hint1: "Întrebarea de bază: „ce face?”.",
    hint2: "Verbul se acordă cu subiectul.",
    svg: { type: "simple-icon", icon: "🏃", color: "#4F46E5" },
    interactive: mkHighlight(["scrie", "elev", "merge", "frumos", "cântă", "manual"], [0, 2, 4], "Selectează verbele.", "Verbele exprimă acțiune/stare.", "Restul sunt alte părți de vorbire."),
    quiz: { question: "Care cuvânt este verb?", choices: ["citește", "copil", "rapid", "carte"], answerIndex: 0 },
  },
  {
    title: "Persoană și număr",
    text: "Stabilești persoana și numărul formelor verbale.",
    hint1: "Verbul reflectă subiectul.",
    hint2: "Terminația oferă indiciu.",
    svg: { type: "text-bubbles", items: [{ text: "eu citesc", color: "#1D4ED8", bg: "#DBEAFE" }, { text: "noi citim", color: "#0F766E", bg: "#CCFBF1" }] },
    interactive: mkGap("Forma „citim” este la persoana ___ plural.", ["I", "a II-a", "a III-a", "a IV-a"], 0, "Completează persoana.", "„noi citim” = persoana I plural.", "Subiectul implicit este „noi”."),
    quiz: { question: "„voi mergeți” este la persoana:", choices: ["a II-a plural", "I singular", "a III-a singular", "I plural"], answerIndex: 0 },
  },
  {
    title: "Timpurile verbale",
    text: "Diferențiezi prezent, trecut compus și viitor în contexte simple.",
    hint1: "Caută auxiliarii verbali.",
    hint2: "Cuvintele de timp ajută.",
    svg: { type: "icon-grid", items: [{ emoji: "⏳", label: "trecut" }, { emoji: "📍", label: "prezent" }, { emoji: "🚀", label: "viitor" }], bg: "#EEF2FF" },
    interactive: mkPairs([["citesc", "prezent"], ["am citit", "trecut compus"], ["voi citi", "viitor"]], "Potrivește forma verbală cu timpul.", "Observă structura formei.", "Auxiliarul indică adesea timpul."),
    quiz: { question: "Forma „voi scrie” este la:", choices: ["viitor", "prezent", "imperfect", "perfect simplu"], answerIndex: 0 },
  },
  {
    title: "Moduri verbale",
    text: "Recunoști indicativ, conjunctiv, infinitiv și imperative uzuale.",
    hint1: "Conjunctivul apare frecvent cu „să”.",
    hint2: "Infinitivul apare frecvent cu „a”.",
    svg: { type: "simple-icon", icon: "🧩", color: "#4338CA" },
    interactive: mkBucket([["ind", "Indicativ"], ["conj", "Conjunctiv"]], [["merg", "ind"], ["să merg", "conj"], ["citesc", "ind"], ["să citesc", "conj"], ["scriu", "ind"], ["să scriu", "conj"]], "Grupează formele după mod.", "Caută marca „să”.", "Indicativul exprimă fapte reale."),
    quiz: { question: "Care formă este la conjunctiv?", choices: ["să citești", "citești", "a citi", "citind"], answerIndex: 0 },
  },
  {
    title: "Acord subiect-predicat",
    text: "Verifici corectitudinea acordului între subiect și predicat.",
    hint1: "Subiect plural cere predicat plural.",
    hint2: "Subiect singular cere predicat singular.",
    svg: { type: "simple-icon", icon: "⚖️", color: "#3730A3" },
    interactive: mkSlingshot("Selectează propozițiile cu acord corect.", [["Copiii citesc.", true], ["Copiii citește.", false], ["Noi învățăm.", true], ["Noi învață.", false], ["Fata scrie.", true], ["Fata scriu.", false]], "Lovește doar enunțurile corecte.", "Compară numărul subiectului cu forma verbului.", "Erorile de acord trebuie eliminate."),
    quiz: { question: "Care enunț este corect?", choices: ["Elevii rezolvă exercițiul.", "Elevii rezolvăm exercițiul.", "Elevii rezolvăți exercițiul.", "Elevii rezolvău exercițiul."], answerIndex: 0 },
  },
];

const PART5_LESSONS: LessonSeed[] = [
  {
    title: "Clase morfologice de bază",
    text: "Recunoști rapid substantiv, verb, adjectiv, adverb.",
    hint1: "Identifică rolul semantic al cuvântului.",
    hint2: "Verifică întrebarea gramaticală.",
    svg: { type: "simple-icon", icon: "🧩", color: "#4F46E5" },
    interactive: mkHighlight(["copil", "aleargă", "harnic", "repede", "carte", "scrie"], [0, 1, 2, 3, 4, 5], "Selectează cuvintele analizate în această lecție.", "Toate aparțin claselor cerute.", "Diferențiază după funcție și sens."),
    quiz: { question: "Care cuvânt este adverb?", choices: ["repede", "copil", "harnic", "și"], answerIndex: 0 },
  },
  {
    title: "Pronume și numeral",
    text: "Aplici diferența dintre înlocuitorul de substantiv și cuvântul de cantitate/ordine.",
    hint1: "Pronumele ține locul substantivului.",
    hint2: "Numeralul exprimă număr sau ordine.",
    svg: { type: "icon-grid", items: [{ emoji: "👤", label: "pronume" }, { emoji: "🔢", label: "numeral" }], bg: "#ECFEFF" },
    interactive: mkGap("Cuvântul „voi” este ___.", ["pronume", "numeral", "adverb", "interjecție"], 0, "Completează corect.", "„voi” înlocuiește un substantiv.", "Deci este pronume personal."),
    quiz: { question: "Care este numeral ordinal?", choices: ["al doilea", "doi", "eu", "departe"], answerIndex: 0 },
  },
  {
    title: "Prepoziție și conjuncție",
    text: "Separi conectorii care leagă termeni de cei care introduc relații sintactice.",
    hint1: "Prepoziția stă în grup prepozițional.",
    hint2: "Conjuncția leagă părți de același rang.",
    svg: { type: "simple-icon", icon: "🔗", color: "#4338CA" },
    interactive: mkPairs([["în", "prepoziție"], ["și", "conjuncție"], ["dar", "conjuncție"]], "Potrivește cuvântul cu partea de vorbire.", "Observă rolul de legătură specific.", "Conjuncția și prepoziția nu sunt identice."),
    quiz: { question: "Care este prepoziție?", choices: ["fără", "dar", "copil", "scrie"], answerIndex: 0 },
  },
  {
    title: "Interjecția",
    text: "Recunoști interjecțiile care exprimă reacții, chemări sau emoții.",
    hint1: "Interjecția apare adesea izolată.",
    hint2: "Semnul exclamării e frecvent.",
    svg: { type: "simple-icon", icon: "😮", color: "#3730A3" },
    interactive: mkBucket([["interj", "Interjecție"], ["alt", "Altă parte"]], [["vai", "interj"], ["bravo", "interj"], ["copil", "alt"], ["ah", "interj"], ["scrie", "alt"], ["hei", "interj"]], "Grupează cuvintele corect.", "Interjecția exprimă reacție afectivă.", "Nu confunda cu substantive sau verbe."),
    quiz: { question: "Ce parte de vorbire este „bravo!”?", choices: ["interjecție", "adverb", "substantiv", "verb"], answerIndex: 0 },
  },
  {
    title: "Identificare în enunț",
    text: "Aplici analiza părților de vorbire în propoziții complete.",
    hint1: "Citește întregul enunț înainte de răspuns.",
    hint2: "Contextul fixează valoarea gramaticală.",
    svg: { type: "simple-icon", icon: "📚", color: "#312E81" },
    interactive: mkSlingshot("Selectează enunțurile unde cuvântul marcat este adverb.", [["Aleargă repede.", true], ["Copil repede.", false], ["Ajungem mâine.", true], ["Mâine elev.", false], ["Vine aici.", true], ["Aici carte.", false]], "Lovește doar răspunsurile corecte.", "Adverbul determină de obicei verbul.", "Dacă nu determină verbul, verifică din nou."),
    quiz: { question: "În „Ajungem mâine.”, „mâine” este:", choices: ["adverb", "substantiv", "verb", "pronume"], answerIndex: 0 },
  },
];
const ORT5_LESSONS: LessonSeed[] = [
  {
    title: "Diacriticele â/î",
    text: "Aplici norma curentă pentru scrierea cu â și î.",
    hint1: "În interiorul cuvântului apare frecvent â.",
    hint2: "La începutul cuvântului apare frecvent î.",
    svg: { type: "word-display", word: "român", highlightChars: ["â"], color: "#B45309" },
    interactive: mkHighlight(["român", "început", "câine", "romîn", "paine", "învăț"], [0, 1, 2, 5], "Selectează formele corecte.", "Verifică poziția literei și norma.", "Fără diacritice sau cu literă greșită = greșit."),
    quiz: { question: "Care formă este corectă?", choices: ["înțeleg", "inteleg", "întelegh", "înteleg"], answerIndex: 0 },
  },
  {
    title: "Ortograme frecvente",
    text: "Diferențiezi perechi precum sa/s-a, ia/i-a, neam/ne-am, sau/s-au.",
    hint1: "Contextul decide forma.",
    hint2: "Cratima apare în structuri verbale.",
    svg: { type: "simple-icon", icon: "✍️", color: "#92400E" },
    interactive: mkGap("El ___ întors acasă.", ["s-a", "sa", "s a", "să"], 0, "Completează ortograma corectă.", "Aici este structură verbală.", "Forma corectă conține cratimă."),
    quiz: { question: "Ce variantă este corectă?", choices: ["Ei s-au văzut.", "Ei sau văzut.", "Ei s au văzut.", "Ei său văzut."], answerIndex: 0 },
  },
  {
    title: "Majuscula și numele proprii",
    text: "Respecți regulile de scriere cu inițială mare.",
    hint1: "Numele de persoane/locuri se scriu cu majusculă.",
    hint2: "Începutul propoziției cere majusculă.",
    svg: { type: "simple-icon", icon: "🔠", color: "#78350F" },
    interactive: mkPairs([["București", "corect"], ["românia", "greșit"], ["Ana", "corect"]], "Potrivește forma cu eticheta corectă.", "Verifică litera inițială.", "Numele proprii fără majusculă sunt greșite."),
    quiz: { question: "Care variantă e corectă?", choices: ["Dunărea", "dunărea", "dunăRea", "DUNĂrea"], answerIndex: 0 },
  },
  {
    title: "Punctuația funcțională",
    text: "Alegi semnul potrivit în funcție de scopul comunicării.",
    hint1: "Întrebarea cere „?”.",
    hint2: "Imperativul/exclamația cere adesea „!”.",
    svg: { type: "icon-grid", items: [{ emoji: "❓", label: "?" }, { emoji: "❗", label: "!" }, { emoji: "•", label: "." }], bg: "#FFF7ED" },
    interactive: mkBucket([["int", "Întrebare"], ["afir", "Afirmație"]], [["Unde mergi?", "int"], ["Azi plouă.", "afir"], ["Ce faci?", "int"], ["Mâine învățăm.", "afir"], ["Când vii?", "int"], ["Cartea e nouă.", "afir"]], "Grupează enunțurile după semnificație.", "Semnul final confirmă tipul.", "Atenție la punct și semnul întrebării."),
    quiz: { question: "Ce semn pui la finalul unei întrebări?", choices: ["?", ".", "!", ","], answerIndex: 0 },
  },
  {
    title: "Corectitudine ortografică globală",
    text: "Verifici enunțuri complete pentru erori de ortografie și punctuație.",
    hint1: "Caută diacritice, cratimă, majusculă.",
    hint2: "Apoi verifică semnul final.",
    svg: { type: "simple-icon", icon: "✅", color: "#B45309" },
    interactive: mkSlingshot("Selectează enunțurile corecte.", [["Maria s-a pregătit.", true], ["Maria sa pregătit.", false], ["Unde mergi?", true], ["Unde mergi.", false], ["Ei s-au întâlnit.", true], ["Ei sau întâlnit.", false]], "Lovește doar variantele corecte.", "Fiecare detaliu ortografic contează.", "Un singur element greșit invalidează enunțul."),
    quiz: { question: "Care enunț este corect?", choices: ["Noi ne-am văzut ieri.", "Noi neam văzut ieri.", "Noi ne am văzut ieri.", "noi ne-am văzut ieri."], answerIndex: 0 },
  },
];

const SINT5_LESSONS: LessonSeed[] = [
  {
    title: "Subiect și predicat",
    text: "Identifici nucleul propoziției prin întrebări de analiză sintactică.",
    hint1: "Subiectul: cine?",
    hint2: "Predicatul: ce face?",
    svg: { type: "simple-icon", icon: "🧠", color: "#F97316" },
    interactive: mkHighlight(["Ana", "citește", "cartea", "în", "parc"], [0, 1], "Selectează subiectul și predicatul.", "Primele două formează nucleul.", "Restul sunt părți secundare."),
    quiz: { question: "În „Elevul scrie.”, predicatul este:", choices: ["scrie", "elevul", "în", "manualul"], answerIndex: 0 },
  },
  {
    title: "Tipuri de propoziții după scop",
    text: "Diferențiezi propoziții enunțiative, interogative, imperative și exclamative.",
    hint1: "Semnul final este un indiciu major.",
    hint2: "Intenția comunicativă confirmă tipul.",
    svg: { type: "simple-icon", icon: "❓", color: "#EA580C" },
    interactive: mkGap("„Unde mergi?” este propoziție ___.", ["interogativă", "enunțiativă", "imperativă", "incidentă"], 0, "Completează tipul propoziției.", "Întrebarea solicită răspuns.", "Semnul întrebării confirmă."),
    quiz: { question: "Ce tip este „Închide ușa!”?", choices: ["imperativă", "interogativă", "enunțiativă", "incidentă"], answerIndex: 0 },
  },
  {
    title: "Atribut și complement",
    text: "Distingi părțile secundare după ce termen determină.",
    hint1: "Atributul determină substantivul.",
    hint2: "Complementul determină de regulă verbul.",
    svg: { type: "simple-icon", icon: "📎", color: "#C2410C" },
    interactive: mkPairs([["copil harnic", "atribut"], ["citește cartea", "complement direct"], ["merge în parc", "complement de loc"]], "Potrivește structura cu funcția sintactică.", "Analizează ce întrebare răspunde fiecare termen.", "Funcția depinde de relația în propoziție."),
    quiz: { question: "În „copil harnic”, „harnic” este:", choices: ["atribut", "predicat", "subiect", "nume predicativ"], answerIndex: 0 },
  },
  {
    title: "Acord și corectitudine sintactică",
    text: "Verifici acordul dintre părțile principale și coerența propoziției.",
    hint1: "Subiect plural -> predicat plural.",
    hint2: "Subiect singular -> predicat singular.",
    svg: { type: "simple-icon", icon: "⚖️", color: "#9A3412" },
    interactive: mkBucket([["corect", "Corect"], ["gresit", "Greșit"]], [["Copiii citesc.", "corect"], ["Copiii citește.", "gresit"], ["Ana scrie.", "corect"], ["Ana scriu.", "gresit"], ["Noi învățăm.", "corect"], ["Noi învață.", "gresit"]], "Grupează enunțurile după acord.", "Acordul este obligatoriu.", "Verbul trebuie să respecte subiectul."),
    quiz: { question: "Care propoziție este corectă?", choices: ["Fetele cântă.", "Fetele cântărește.", "Fata cântăm.", "Fata cântău."], answerIndex: 0 },
  },
  {
    title: "Sinteză sintactică",
    text: "Aplici simultan identificarea funcțiilor și verificarea punctuației.",
    hint1: "Parcurge propoziția în pași.",
    hint2: "Nu omite verificarea semnului final.",
    svg: { type: "simple-icon", icon: "🧪", color: "#7C2D12" },
    interactive: mkSlingshot("Selectează enunțurile corecte sintactic.", [["Elevii citesc textul.", true], ["Elevii citește textul.", false], ["Ana, vino aici!", true], ["Copiii, citesc zilnic.", false], ["Unde mergi?", true], ["Mergi unde.", false]], "Lovește doar enunțurile corecte.", "Acordul și punctuația decid corectitudinea.", "Ordinea și sensul trebuie să rămână clare."),
    quiz: { question: "Care enunț este corect?", choices: ["Unde locuiești?", "Unde locuiești.", "Unde, locuiești.", "Locuiești unde."], answerIndex: 0 },
  },
];
const VOC5_LESSONS: LessonSeed[] = [
  {
    title: "Sinonime și antonime",
    text: "Aplici relațiile semantice de bază în contexte uzuale.",
    hint1: "Sinonim = sens apropiat.",
    hint2: "Antonim = sens opus.",
    svg: { type: "simple-icon", icon: "💡", color: "#6366F1" },
    interactive: mkHighlight(["rapid", "iute", "mare", "mic", "clar", "limpede"], [0, 1, 2, 3, 4, 5], "Selectează perechile semantice corecte din listă.", "Lista conține atât sinonime, cât și antonime.", "Analizează fiecare relație semantică."),
    quiz: { question: "Sinonim pentru „rapid”:", choices: ["iute", "lent", "mic", "gol"], answerIndex: 0 },
  },
  {
    title: "Familie lexicală",
    text: "Identifici cuvinte cu aceeași rădăcină și sens înrudit.",
    hint1: "Caută baza comună.",
    hint2: "Sensul trebuie să rămână în aceeași zonă semantică.",
    svg: { type: "simple-icon", icon: "🌱", color: "#4F46E5" },
    interactive: mkGap("Din familia lexicală a lui „scrie” face parte ___.", ["scriitor", "caiet", "manual", "stilou"], 0, "Completează cu forma înrudită.", "Rădăcina „scri-” este indiciul.", "Alege derivatul potrivit."),
    quiz: { question: "Care cuvânt aparține familiei lui „lumină”?", choices: ["luminos", "noapte", "umbră", "întuneric"], answerIndex: 0 },
  },
  {
    title: "Câmp lexical",
    text: "Grupezi cuvinte după domeniul de sens comun.",
    hint1: "Tema comună este criteriul principal.",
    hint2: "Nu confunda cu familia lexicală.",
    svg: { type: "simple-icon", icon: "🗂️", color: "#4338CA" },
    interactive: mkPairs([["elev", "câmp lexical școală"], ["frunză", "câmp lexical natură"], ["manual", "câmp lexical școală"]], "Potrivește cuvântul cu domeniul lexical.", "Analizează tema semantică.", "Fiecare cuvânt intră într-un câmp relevant."),
    quiz: { question: "Ce cuvânt aparține câmpului lexical „natură”?", choices: ["pădure", "catalog", "tablă", "orar"], answerIndex: 0 },
  },
  {
    title: "Sens propriu și figurat",
    text: "Diferențiezi sensul literal de sensul expresiv.",
    hint1: "Sensul propriu este concret.",
    hint2: "Sensul figurat transferă semnificația.",
    svg: { type: "simple-icon", icon: "🎭", color: "#3730A3" },
    interactive: mkBucket([["propriu", "Sens propriu"], ["figurat", "Sens figurat"]], [["A băut apă rece.", "propriu"], ["Are inimă de aur.", "figurat"], ["Pisica doarme.", "propriu"], ["Cerul plânge.", "figurat"], ["Cartea e pe masă.", "propriu"], ["Mare de oameni.", "figurat"]], "Grupează enunțurile după sens.", "Literal vs expresiv.", "Contextul decide categoria."),
    quiz: { question: "Unde apare sens figurat?", choices: ["Cerul plânge.", "Scriu tema.", "Deschid geamul.", "Merg la școală."], answerIndex: 0 },
  },
  {
    title: "Omonime și paronime",
    text: "Identifici asemănările de formă și diferențele de sens.",
    hint1: "Omonime: formă identică, sens diferit.",
    hint2: "Paronime: formă apropiată, sens diferit.",
    svg: { type: "simple-icon", icon: "🪞", color: "#312E81" },
    interactive: mkSlingshot("Selectează afirmațiile corecte.", [["„lac” poate fi omonim.", true], ["Paronimele au sens identic.", false], ["„eminent/iminent” sunt paronime.", true], ["Sinonimele au sens opus.", false], ["Omonimele depind de context.", true], ["Antonimele au sens apropiat.", false]], "Lovește doar afirmațiile adevărate.", "Compară definițiile exacte.", "Evită confuzia între termeni apropiați."),
    quiz: { question: "Ce sunt cuvintele cu formă identică și sens diferit?", choices: ["omonime", "sinonime", "antonime", "interjecții"], answerIndex: 0 },
  },
];

const RECAP5_LESSONS: LessonSeed[] = [
  {
    title: "Recapitulare fonetică",
    text: "Consolidezi vocale, silabe, diftong și hiat în exemple mixte.",
    hint1: "Reamintește regulile de pronunție.",
    hint2: "Aplică analiza pe exemple scurte.",
    svg: { type: "simple-icon", icon: "🔊", color: "#4F46E5" },
    interactive: mkHighlight(["a", "e", "m", "toam-nă", "po-et", "r"], [0, 1, 3, 4], "Selectează elementele corecte cerute.", "Vocalele sunt a și e.", "„toam-nă”/„po-et” verifică diftong-hiat."),
    quiz: { question: "Care exemplu este hiat?", choices: ["po-et", "toam-nă", "sea-ră", "oa-ie"], answerIndex: 0 },
  },
  {
    title: "Recapitulare morfologie",
    text: "Revizuiești substantiv, verb și părți de vorbire în propoziții scurte.",
    hint1: "Aplică întrebările morfologice.",
    hint2: "Verifică rolul cuvântului în context.",
    svg: { type: "simple-icon", icon: "📘", color: "#4338CA" },
    interactive: mkGap("În enunțul „Copiii citesc”, „citesc” este ___.", ["verb", "substantiv", "adjectiv", "prepoziție"], 0, "Completează partea de vorbire corectă.", "Acțiunea indică verbul.", "Relația cu subiectul confirmă."),
    quiz: { question: "Care cuvânt este substantiv?", choices: ["carte", "scrie", "repede", "și"], answerIndex: 0 },
  },
  {
    title: "Recapitulare ortografie",
    text: "Verifici diacritice, ortograme și punctuație în exerciții integrate.",
    hint1: "Caută cratima în structuri verbale.",
    hint2: "Numele proprii cer majusculă.",
    svg: { type: "simple-icon", icon: "✏️", color: "#3730A3" },
    interactive: mkPairs([["s-a întors", "corect"], ["sa întors", "greșit"], ["București", "corect"]], "Potrivește forma cu evaluarea corectă.", "Analizează contextul ortografic.", "Fără normă corectă, forma e greșită."),
    quiz: { question: "Care formă este corectă?", choices: ["i-a spus", "ia spus", "i a spus", "î-a spus"], answerIndex: 0 },
  },
  {
    title: "Recapitulare sintaxă",
    text: "Recunoști subiect, predicat și acordul corect în propoziții.",
    hint1: "Nucleul propoziției este obligatoriu.",
    hint2: "Acordul validează corectitudinea.",
    svg: { type: "simple-icon", icon: "🧠", color: "#312E81" },
    interactive: mkBucket([["corect", "Corect"], ["gresit", "Greșit"]], [["Copiii citesc.", "corect"], ["Copiii citește.", "gresit"], ["Ana scrie.", "corect"], ["Noi învață.", "gresit"], ["Fata citește.", "corect"], ["Fata citesc.", "gresit"]], "Grupează propozițiile după corectitudine sintactică.", "Verifică acordul subiect-predicat.", "Enunțul incorect se elimină."),
    quiz: { question: "Care propoziție este corectă?", choices: ["Elevii învață.", "Elevii învațăm.", "Elevii învațăți.", "Elevii învăț."], answerIndex: 0 },
  },
  {
    title: "Recapitulare vocabular",
    text: "Aplici relațiile semantice și alegi varianta adecvată contextului.",
    hint1: "Sinonim = apropiat.",
    hint2: "Antonim = opus.",
    svg: { type: "simple-icon", icon: "💡", color: "#1E40AF" },
    interactive: mkSlingshot("Selectează afirmațiile corecte.", [["„rapid” și „iute” sunt sinonime.", true], ["„mare” și „mic” sunt antonime.", true], ["„cerul plânge” este sens propriu.", false], ["„lac” poate fi omonim.", true], ["Paronimele au sens identic.", false], ["Familia lexicală ignoră rădăcina.", false]], "Lovește doar răspunsurile corecte.", "Compară fiecare afirmație cu definiția.", "Recapitularea cere atenție la nuanțe."),
    quiz: { question: "Care pereche este de antonime?", choices: ["mare - mic", "rapid - iute", "clar - limpede", "a spune - a zice"], answerIndex: 0 },
  },
];

const FON5 = mkIsland("Fonetică", FON5_LESSONS);
const SUBST5 = mkIsland("Substantivul", SUBST5_LESSONS);
const VERB5 = mkIsland("Verbul", VERB5_LESSONS);
const PART5 = mkIsland("Părțile de vorbire", PART5_LESSONS);
const ORT5 = mkIsland("Ortografia", ORT5_LESSONS);
const SINT5 = mkIsland("Sintaxa", SINT5_LESSONS);
const VOC5 = mkIsland("Vocabularul", VOC5_LESSONS);
const RECAP5 = mkIsland("Recapitulare", RECAP5_LESSONS);

export const FON5_LABELS: Record<string, Record<string, string>> = FON5.labels;
export const FON5_POOL: PoolTopicDef[] = FON5.pool;

export const SUBST5_LABELS: Record<string, Record<string, string>> = SUBST5.labels;
export const SUBST5_POOL: PoolTopicDef[] = SUBST5.pool;

export const VERB5_LABELS: Record<string, Record<string, string>> = VERB5.labels;
export const VERB5_POOL: PoolTopicDef[] = VERB5.pool;

export const PART5_LABELS: Record<string, Record<string, string>> = PART5.labels;
export const PART5_POOL: PoolTopicDef[] = PART5.pool;

export const ORT5_LABELS: Record<string, Record<string, string>> = ORT5.labels;
export const ORT5_POOL: PoolTopicDef[] = ORT5.pool;

export const SINT5_LABELS: Record<string, Record<string, string>> = SINT5.labels;
export const SINT5_POOL: PoolTopicDef[] = SINT5.pool;

export const VOC5_LABELS: Record<string, Record<string, string>> = VOC5.labels;
export const VOC5_POOL: PoolTopicDef[] = VOC5.pool;

export const RECAP5_LABELS: Record<string, Record<string, string>> = RECAP5.labels;
export const RECAP5_POOL: PoolTopicDef[] = RECAP5.pool;

// Compatibilitate: C5Explorer folosește încă această insulă.
export const TEXT5L_LABELS: Record<string, Record<string, string>> = VOC5_LABELS;
export const TEXT5L_POOL: PoolTopicDef[] = VOC5_POOL;
