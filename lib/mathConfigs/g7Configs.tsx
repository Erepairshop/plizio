import type {
  ExplorerDef,
  TopicDef,
} from "@/app/astro-biologie/games/ExplorerEngine";

type LangCode = "en" | "de" | "hu" | "ro";
type LangText = Record<LangCode, string>;

const LANGS: LangCode[] = ["en", "de", "hu", "ro"];

const sameText = (value: string): LangText => ({
  en: value,
  de: value,
  hu: value,
  ro: value,
});

const txt = (
  en: string,
  de: string,
  hu: string,
  ro: string,
): LangText => ({ en, de, hu, ro });

function makeLabels(
  entries: Record<string, LangText>,
): Record<LangCode, Record<string, string>> {
  const labels: Record<LangCode, Record<string, string>> = {
    en: {},
    de: {},
    hu: {},
    ro: {},
  };

  for (const [key, value] of Object.entries(entries)) {
    for (const lang of LANGS) {
      labels[lang][key] = value[lang];
    }
  }

  return labels;
}

function makeExplorer(
  icon: string,
  entries: Record<string, LangText>,
  topics: TopicDef[],
): ExplorerDef {
  return {
    labels: makeLabels(entries),
    title: "explorer_title",
    icon,
    topics,
    rounds: [],
  };
}

const LessonCard = ({
  accent,
  title,
  main,
  sub,
}: {
  accent: string;
  title: string;
  main: string;
  sub?: string;
}) => (
  <svg
    viewBox="0 0 360 180"
    className="mx-auto h-auto w-full max-w-sm"
    role="img"
    aria-label={[title, main, sub].filter(Boolean).join(" ")}
  >
    <rect
      x="12"
      y="12"
      width="336"
      height="156"
      rx="26"
      fill="#0F172A"
      stroke={accent}
      strokeWidth="3"
    />
    <text
      x="180"
      y="42"
      textAnchor="middle"
      fill={accent}
      fontSize="18"
      fontWeight="700"
    >
      {title}
    </text>
    <text
      x="180"
      y="95"
      textAnchor="middle"
      fill="#F8FAFC"
      fontSize="34"
      fontWeight="800"
    >
      {main}
    </text>
    {sub ? (
      <text
        x="180"
        y="128"
        textAnchor="middle"
        fill="#CBD5E1"
        fontSize="16"
        fontWeight="500"
      >
        {sub}
      </text>
    ) : null}
  </svg>
);

const TriangleLessonSvg = ({
  accent,
  top,
  left,
  right,
  footer,
}: {
  accent: string;
  top: string;
  left: string;
  right: string;
  footer: string;
}) => (
  <svg
    viewBox="0 0 360 180"
    className="mx-auto h-auto w-full max-w-sm"
    role="img"
    aria-label={`${top} ${left} ${right} ${footer}`}
  >
    <rect
      x="12"
      y="12"
      width="336"
      height="156"
      rx="26"
      fill="#111827"
      stroke={accent}
      strokeWidth="3"
    />
    <polygon
      points="180,38 82,142 278,142"
      fill="none"
      stroke={accent}
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <text x="180" y="32" textAnchor="middle" fill="#F8FAFC" fontSize="16">
      {top}
    </text>
    <text x="70" y="148" textAnchor="middle" fill="#F8FAFC" fontSize="16">
      {left}
    </text>
    <text x="290" y="148" textAnchor="middle" fill="#F8FAFC" fontSize="16">
      {right}
    </text>
    <text
      x="180"
      y="166"
      textAnchor="middle"
      fill="#CBD5E1"
      fontSize="14"
      fontWeight="600"
    >
      {footer}
    </text>
  </svg>
);

const RightTriangleLessonSvg = ({
  accent,
  a,
  b,
  c,
  footer,
}: {
  accent: string;
  a: string;
  b: string;
  c: string;
  footer: string;
}) => (
  <svg
    viewBox="0 0 360 180"
    className="mx-auto h-auto w-full max-w-sm"
    role="img"
    aria-label={`${a} ${b} ${c} ${footer}`}
  >
    <rect
      x="12"
      y="12"
      width="336"
      height="156"
      rx="26"
      fill="#111827"
      stroke={accent}
      strokeWidth="3"
    />
    <polygon
      points="88,134 88,54 252,134"
      fill="none"
      stroke={accent}
      strokeWidth="5"
      strokeLinejoin="round"
    />
    <path d="M88 116 H106 V134" fill="none" stroke="#F8FAFC" strokeWidth="3" />
    <text x="66" y="96" textAnchor="middle" fill="#F8FAFC" fontSize="16">
      {a}
    </text>
    <text x="170" y="152" textAnchor="middle" fill="#F8FAFC" fontSize="16">
      {b}
    </text>
    <text x="194" y="84" textAnchor="middle" fill="#F8FAFC" fontSize="16">
      {c}
    </text>
    <text
      x="180"
      y="166"
      textAnchor="middle"
      fill="#CBD5E1"
      fontSize="14"
      fontWeight="600"
    >
      {footer}
    </text>
  </svg>
);

const CircleLessonSvg = ({
  accent,
  main,
  sub,
}: {
  accent: string;
  main: string;
  sub: string;
}) => (
  <svg
    viewBox="0 0 360 180"
    className="mx-auto h-auto w-full max-w-sm"
    role="img"
    aria-label={`${main} ${sub}`}
  >
    <rect
      x="12"
      y="12"
      width="336"
      height="156"
      rx="26"
      fill="#0F172A"
      stroke={accent}
      strokeWidth="3"
    />
    <circle cx="130" cy="90" r="46" fill="none" stroke={accent} strokeWidth="5" />
    <line x1="130" y1="90" x2="176" y2="90" stroke="#F8FAFC" strokeWidth="4" />
    <line x1="84" y1="90" x2="176" y2="90" stroke="#94A3B8" strokeWidth="2" />
    <circle cx="130" cy="90" r="4" fill="#F8FAFC" />
    <text x="250" y="80" textAnchor="middle" fill="#F8FAFC" fontSize="28" fontWeight="800">
      {main}
    </text>
    <text x="250" y="116" textAnchor="middle" fill="#CBD5E1" fontSize="16" fontWeight="600">
      {sub}
    </text>
  </svg>
);

const StatsLessonSvg = ({
  accent,
  values,
  footer,
}: {
  accent: string;
  values: number[];
  footer: string;
}) => (
  <svg
    viewBox="0 0 360 180"
    className="mx-auto h-auto w-full max-w-sm"
    role="img"
    aria-label={`${values.join(" ")} ${footer}`}
  >
    <rect
      x="12"
      y="12"
      width="336"
      height="156"
      rx="26"
      fill="#0F172A"
      stroke={accent}
      strokeWidth="3"
    />
    {values.map((value, index) => {
      const height = value * 10;
      const x = 52 + index * 54;
      const y = 140 - height;
      return (
        <g key={`${value}-${index}`}>
          <rect x={x} y={y} width="30" height={height} rx="6" fill={accent} />
          <text
            x={x + 15}
            y="156"
            textAnchor="middle"
            fill="#F8FAFC"
            fontSize="13"
            fontWeight="700"
          >
            {value}
          </text>
        </g>
      );
    })}
    <text
      x="180"
      y="34"
      textAnchor="middle"
      fill="#CBD5E1"
      fontSize="15"
      fontWeight="600"
    >
      {footer}
    </text>
  </svg>
);

const POWEREXPLORER7_LABELS = {
  explorer_title: txt(
    "Powers and exponents",
    "Potenzen und Exponenten",
    "Hatvanyok es kitevok",
    "Puteri si exponenti",
  ),
  t1_title: txt(
    "Square numbers",
    "Quadratzahlen",
    "Negyzetszamok",
    "Patrate perfecte",
  ),
  t1_text: txt(
    "A square number is the product of a number with itself. For example, 7^2 means 7 * 7.",
    "Eine Quadratzahl entsteht, wenn eine Zahl mit sich selbst multipliziert wird. Zum Beispiel bedeutet 7^2 gleich 7 * 7.",
    "A negyzetszam egy szam onmagaval valo szorzata. Peldaul a 7^2 jelentese 7 * 7.",
    "Un patrat perfect apare cand inmultim un numar cu el insusi. De exemplu, 7^2 inseamna 7 * 7.",
  ),
  t1_b1: txt(
    "The exponent tells how many equal factors there are.",
    "Der Exponent sagt, wie viele gleiche Faktoren vorkommen.",
    "A kitevo megmondja, hany egyforma tenyezo van.",
    "Exponentul arata cate factori egali apar.",
  ),
  t1_b2: txt(
    "2^2 = 4 and 5^2 = 25.",
    "2^2 = 4 und 5^2 = 25.",
    "2^2 = 4 es 5^2 = 25.",
    "2^2 = 4 si 5^2 = 25.",
  ),
  t1_b3: txt(
    "Square numbers grow faster than the base.",
    "Quadratzahlen wachsen schneller als die Grundzahl.",
    "A negyzetszamok gyorsabban nonek, mint az alap.",
    "Patratele perfecte cresc mai repede decat baza.",
  ),
  t1_inst: txt(
    "Match each square expression with its value.",
    "Ordne jedem Quadrat seinen Wert zu.",
    "Parositsd a negyzeteket az ertekukkel.",
    "Asociaza fiecare patrat cu valoarea sa.",
  ),
  t1_h1: txt(
    "Multiply the base by itself once.",
    "Multipliziere die Grundzahl einmal mit sich selbst.",
    "Szorozd meg az alapot onmagaval egyszer.",
    "Inmulteste baza cu ea insasi o data.",
  ),
  t1_h2: txt(
    "For example, 6^2 = 36.",
    "Zum Beispiel gilt 6^2 = 36.",
    "Peldaul 6^2 = 36.",
    "De exemplu, 6^2 = 36.",
  ),
  sq1: sameText("2^2"),
  sq2: sameText("3^2"),
  sq3: sameText("5^2"),
  sq4: sameText("7^2"),
  v4: sameText("4"),
  v9: sameText("9"),
  v25: sameText("25"),
  v49: sameText("49"),
  t1_q: txt(
    "What is 8^2?",
    "Was ist 8^2?",
    "Mennyi 8^2?",
    "Cat este 8^2?",
  ),
  a64: sameText("64"),
  a16: sameText("16"),
  a56: sameText("56"),
  a81: sameText("81"),
  t2_title: txt("Cube powers", "Kubikzahlen", "Kobszamok", "Cuburi perfecte"),
  t2_text: txt(
    "A cube power uses three equal factors. For example, 4^3 = 4 * 4 * 4 = 64.",
    "Eine dritte Potenz benutzt drei gleiche Faktoren. Zum Beispiel gilt 4^3 = 4 * 4 * 4 = 64.",
    "A harmadik hatvany harom egyforma tenyezot jelent. Peldaul 4^3 = 4 * 4 * 4 = 64.",
    "Puterea a treia foloseste trei factori egali. De exemplu, 4^3 = 4 * 4 * 4 = 64.",
  ),
  t2_b1: txt(
    "The notation a^3 means a cube.",
    "Die Schreibweise a^3 bedeutet Kubikzahl.",
    "Az a^3 jeloles kobot jelent.",
    "Notatia a^3 inseamna cub.",
  ),
  t2_b2: txt(
    "2^3 = 8 and 3^3 = 27.",
    "2^3 = 8 und 3^3 = 27.",
    "2^3 = 8 es 3^3 = 27.",
    "2^3 = 8 si 3^3 = 27.",
  ),
  t2_b3: txt(
    "Cube numbers are not the same as square numbers.",
    "Kubikzahlen sind nicht dasselbe wie Quadratzahlen.",
    "A kobszamok nem ugyanazok, mint a negyzetszamok.",
    "Cuburile perfecte nu sunt la fel ca patratele perfecte.",
  ),
  t2_inst: txt(
    "Sort each expression into the square or cube bucket.",
    "Sortiere jeden Ausdruck in Quadrat oder Kubik.",
    "Rendezd a kifejezeseket negyzet vagy kob kategoriaba.",
    "Sorteaza fiecare expresie la patrat sau cub.",
  ),
  t2_h1: txt(
    "Look at the exponent: 2 means square, 3 means cube.",
    "Achte auf den Exponenten: 2 bedeutet Quadrat, 3 bedeutet Kubik.",
    "Nezd a kitevot: a 2 negyzetet, a 3 kobot jelent.",
    "Priveste exponentul: 2 inseamna patrat, 3 inseamna cub.",
  ),
  t2_h2: txt(
    "6^2 is a square, but 6^3 is a cube.",
    "6^2 ist ein Quadrat, aber 6^3 ist ein Kubik.",
    "A 6^2 negyzet, a 6^3 pedig kob.",
    "6^2 este patrat, iar 6^3 este cub.",
  ),
  bucket_square: txt("Square", "Quadrat", "Negyzet", "Patrat"),
  bucket_cube: txt("Cube", "Kubik", "Kob", "Cub"),
  i22: sameText("2^2"),
  i23: sameText("2^3"),
  i52: sameText("5^2"),
  i53: sameText("5^3"),
  t2_q: txt(
    "What is 5^3?",
    "Was ist 5^3?",
    "Mennyi 5^3?",
    "Cat este 5^3?",
  ),
  a125: sameText("125"),
  a15: sameText("15"),
  a25: sameText("25"),
  a75: sameText("75"),
  t3_title: txt(
    "Powers of ten",
    "Zehnerpotenzen",
    "Tizes hatvanyai",
    "Puteri ale lui zece",
  ),
  t3_text: txt(
    "Every time the exponent of 10 increases by 1, the value gets ten times larger.",
    "Immer wenn der Exponent von 10 um 1 steigt, wird der Wert zehnmal groesser.",
    "Valahanyszor a 10 kitevoje 1-gyel no, az ertek tizszeresere no.",
    "De fiecare data cand exponentul lui 10 creste cu 1, valoarea devine de zece ori mai mare.",
  ),
  t3_b1: txt(
    "10^1 = 10, 10^2 = 100, 10^3 = 1000.",
    "10^1 = 10, 10^2 = 100, 10^3 = 1000.",
    "10^1 = 10, 10^2 = 100, 10^3 = 1000.",
    "10^1 = 10, 10^2 = 100, 10^3 = 1000.",
  ),
  t3_b2: txt(
    "The exponent tells how many zeros appear.",
    "Der Exponent zeigt, wie viele Nullen erscheinen.",
    "A kitevo megmutatja, hany nulla jelenik meg.",
    "Exponentul arata cate zerouri apar.",
  ),
  t3_b3: txt(
    "Powers of ten help with place value.",
    "Zehnerpotenzen helfen beim Stellenwertsystem.",
    "A tizes hatvanyai segitenek a helyiertekben.",
    "Puterile lui zece ajuta la intelegerea valorii pozitionale.",
  ),
  t3_inst: txt(
    "Complete the value of 10^4.",
    "Ergaenze den Wert von 10^4.",
    "Egeszitsd ki a 10^4 erteket.",
    "Completeaza valoarea lui 10^4.",
  ),
  t3_h1: txt(
    "10^4 is ten thousand.",
    "10^4 ist zehntausend.",
    "A 10^4 tiz ezer.",
    "10^4 este zece mii.",
  ),
  t3_h2: txt(
    "Count four zeros after 1.",
    "Zaehle vier Nullen hinter der 1.",
    "Szamolj negy nullat az 1 utan.",
    "Numara patru zerouri dupa 1.",
  ),
  t3_sentence: sameText("10^4 = ___"),
  a1000: sameText("1000"),
  a10000: sameText("10000"),
  a40000: sameText("40000"),
  a100000: sameText("100000"),
  t3_q: txt(
    "Which power of ten equals 1000?",
    "Welche Zehnerpotenz ist 1000?",
    "Melyik tizes hatvany egyenlo 1000-rel?",
    "Ce putere a lui zece este 1000?",
  ),
  q10_2: sameText("10^2"),
  q10_3: sameText("10^3"),
  q10_4: sameText("10^4"),
  q10_5: sameText("10^5"),
  t4_title: txt(
    "Expressions with powers",
    "Terme mit Potenzen",
    "Hatvanyos kifejezesek",
    "Expresii cu puteri",
  ),
  t4_text: txt(
    "When an expression contains powers, calculate the powers before you add or subtract.",
    "Wenn ein Term Potenzen enthaelt, berechnest du die Potenzen vor dem Addieren oder Subtrahieren.",
    "Ha egy kifejezesben hatvanyok vannak, eloszor a hatvanyokat szamoljuk ki.",
    "Cand o expresie contine puteri, calculezi mai intai puterile, apoi aduni sau scazi.",
  ),
  t4_b1: txt(
    "First compute 2^3 = 8 and 3^2 = 9.",
    "Berechne zuerst 2^3 = 8 und 3^2 = 9.",
    "Eloszor szamold ki: 2^3 = 8 es 3^2 = 9.",
    "Calculeaza mai intai 2^3 = 8 si 3^2 = 9.",
  ),
  t4_b2: txt(
    "Then continue with the other operations.",
    "Danach rechnest du mit den anderen Operationen weiter.",
    "Ezutan folytasd a tobbi muvelettel.",
    "Apoi continui cu celelalte operatii.",
  ),
  t4_b3: txt(
    "Order matters in mixed expressions.",
    "Die Reihenfolge ist in gemischten Termen wichtig.",
    "A sorrend fontos a vegyes kifejezesekben.",
    "Ordinea este importanta in expresiile amestecate.",
  ),
  t4_inst: txt(
    "Move the marker to the value of 2^3 + 3^2.",
    "Setze den Marker auf den Wert von 2^3 + 3^2.",
    "Tedd a jelolot a 2^3 + 3^2 ertekere.",
    "Muta indicatorul la valoarea lui 2^3 + 3^2.",
  ),
  t4_h1: txt(
    "Find each power first.",
    "Bestimme zuerst jede Potenz.",
    "Eloszor keresd meg mindket hatvanyt.",
    "Gaseste mai intai fiecare putere.",
  ),
  t4_h2: txt(
    "8 + 9 = 17.",
    "8 + 9 = 17.",
    "8 + 9 = 17.",
    "8 + 9 = 17.",
  ),
  t4_q: txt(
    "What is 4^2 - 2^3?",
    "Was ist 4^2 - 2^3?",
    "Mennyi 4^2 - 2^3?",
    "Cat este 4^2 - 2^3?",
  ),
  a8: sameText("8"),
  a6: sameText("6"),
  a12: sameText("12"),
  a24: sameText("24"),
} satisfies Record<string, LangText>;

const POWEREXPLORER7_TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => (
      <LessonCard
        accent="#6366F1"
        title="Squares"
        main="7^2 = 49"
        sub="same factor twice"
      />
    ),
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "sq1", right: "v4" },
        { left: "sq2", right: "v9" },
        { left: "sq3", right: "v25" },
        { left: "sq4", right: "v49" },
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["a64", "a16", "a56", "a81"],
      answer: "a64",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => (
      <LessonCard
        accent="#4F46E5"
        title="Cubes"
        main="4^3 = 64"
        sub="same factor three times"
      />
    ),
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "square", label: "bucket_square" },
        { id: "cube", label: "bucket_cube" },
      ],
      items: [
        { text: "i22", bucketId: "square" },
        { text: "i23", bucketId: "cube" },
        { text: "i52", bucketId: "square" },
        { text: "i53", bucketId: "cube" },
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["a125", "a15", "a25", "a75"],
      answer: "a125",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => (
      <LessonCard
        accent="#0EA5E9"
        title="Powers of 10"
        main="10^4 = 10000"
        sub="one and four zeros"
      />
    ),
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sentence",
      choices: ["a1000", "a10000", "a40000", "a100000"],
      correctIndex: 1,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["q10_2", "q10_3", "q10_4", "q10_5"],
      answer: "q10_3",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => (
      <LessonCard
        accent="#22C55E"
        title="Mixed expression"
        main="2^3 + 3^2"
        sub="8 + 9 = 17"
      />
    ),
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 25,
      start: 0,
      target: 17,
      step: 1,
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["a8", "a6", "a12", "a24"],
      answer: "a8",
    },
  },
];

const ALGEBRAEXPLORER7_LABELS = {
  explorer_title: txt(
    "Algebraic expressions",
    "Algebraische Terme",
    "Algebrai kifejezesek",
    "Expresii algebrice",
  ),
  t1_title: txt(
    "Evaluate a term",
    "Einen Term berechnen",
    "Kifejezes erteke",
    "Evaluarea unui termen",
  ),
  t1_text: txt(
    "To evaluate a term, replace the variable with the given number and then calculate.",
    "Um einen Term zu berechnen, ersetzt du die Variable durch die gegebene Zahl und rechnest dann aus.",
    "Egy kifejezes ertekehez helyettesitsd be a valtozot a megadott szammal, majd szamolj.",
    "Pentru a evalua un termen, inlocuiesti variabila cu numarul dat si apoi calculezi.",
  ),
  t1_b1: txt(
    "Substitution means putting in a value for the variable.",
    "Einsetzen bedeutet, einen Wert fuer die Variable zu verwenden.",
    "A behelyettesites azt jelenti, hogy egy szamot adunk a valtozo helyere.",
    "Substituirea inseamna sa pui o valoare in locul variabilei.",
  ),
  t1_b2: txt(
    "If x = 3, then 2x + 2 becomes 2 * 3 + 2.",
    "Wenn x = 3, dann wird 2x + 2 zu 2 * 3 + 2.",
    "Ha x = 3, akkor a 2x + 2 atalakithato 2 * 3 + 2 alakra.",
    "Daca x = 3, atunci 2x + 2 devine 2 * 3 + 2.",
  ),
  t1_b3: txt(
    "Work in the normal order of operations.",
    "Rechne in der normalen Reihenfolge der Operationen.",
    "A szokasos muveleti sorrendet hasznald.",
    "Respecta ordinea obisnuita a operatiilor.",
  ),
  t1_inst: txt(
    "Build the value of 2x + 2 when x = 3.",
    "Baue den Wert von 2x + 2 fuer x = 3.",
    "Epitsd fel a 2x + 2 erteket, ha x = 3.",
    "Construieste valoarea lui 2x + 2 cand x = 3.",
  ),
  t1_h1: txt(
    "Replace x by 3 first.",
    "Ersetze x zuerst durch 3.",
    "Eloszor csereld le x-et 3-ra.",
    "Inlocuieste mai intai pe x cu 3.",
  ),
  t1_h2: txt(
    "You get 3 + 3 + 2 = 8.",
    "Du erhaeltst 3 + 3 + 2 = 8.",
    "A kapott kifejezes 3 + 3 + 2 = 8.",
    "Obtii 3 + 3 + 2 = 8.",
  ),
  t1_q: txt(
    "What is 3a + 4 when a = 2?",
    "Was ist 3a + 4 fuer a = 2?",
    "Mennyi 3a + 4, ha a = 2?",
    "Cat este 3a + 4 cand a = 2?",
  ),
  a10: sameText("10"),
  a6b: sameText("6"),
  a12b: sameText("12"),
  a14: sameText("14"),
  t2_title: txt(
    "Collect like terms",
    "Gleichartige Terme zusammenfassen",
    "Azonos tagok osszevonasa",
    "Reducerea termenilor asemenea",
  ),
  t2_text: txt(
    "Like terms have the same variable part. You can add x-terms to x-terms and constants to constants.",
    "Gleichartige Terme haben denselben Variablenteil. Du kannst x-Terme mit x-Termen und Zahlen mit Zahlen addieren.",
    "Az azonos tagok ugyanazt a valtozoreszt tartalmazzak. Az x-tagokat x-tagokkal, a szamokat szamokkal vonjuk ossze.",
    "Termenii asemenea au aceeasi parte literala. Aduni termenii cu x intre ei si constantele intre ele.",
  ),
  t2_b1: txt(
    "3x and 2x are like terms.",
    "3x und 2x sind gleichartige Terme.",
    "A 3x es a 2x azonos tagok.",
    "3x si 2x sunt termeni asemenea.",
  ),
  t2_b2: txt(
    "3x + 2x = 5x.",
    "3x + 2x = 5x.",
    "3x + 2x = 5x.",
    "3x + 2x = 5x.",
  ),
  t2_b3: txt(
    "Do not combine x with plain numbers.",
    "Kombiniere x nicht mit reinen Zahlen.",
    "Ne vond ossze az x-et a sima szamokkal.",
    "Nu combina x cu numere simple.",
  ),
  t2_inst: txt(
    "Sort the cards into x-terms or constants.",
    "Sortiere die Karten in x-Terme oder Zahlen.",
    "Rendezd a kartyakat x-tagok vagy konstansok koze.",
    "Sorteaza cardurile in termeni cu x sau constante.",
  ),
  t2_h1: txt(
    "Look for the variable x.",
    "Achte auf die Variable x.",
    "Keresd az x valtozot.",
    "Cauta variabila x.",
  ),
  t2_h2: txt(
    "A constant has no variable attached.",
    "Eine Zahl ohne Variable ist eine Konstante.",
    "Az a konstans, amelyikhez nem tartozik valtozo.",
    "O constanta nu are variabila atasata.",
  ),
  bucket_x: txt("x-terms", "x-Terme", "x-tagok", "termeni cu x"),
  bucket_const: txt("Constants", "Zahlen", "Konstansok", "constante"),
  x3: sameText("3x"),
  x2: sameText("2x"),
  x7: sameText("7x"),
  c5: sameText("5"),
  c8: sameText("8"),
  t2_q: txt(
    "Which expression is equal to 4x + 3x?",
    "Welcher Ausdruck ist gleich 4x + 3x?",
    "Melyik kifejezes egyenlo 4x + 3x-szel?",
    "Ce expresie este egala cu 4x + 3x?",
  ),
  a7x: sameText("7x"),
  a12x: sameText("12x"),
  a43x: sameText("43x"),
  a7: sameText("7"),
  t3_title: txt(
    "Expand brackets",
    "Klammern ausmultiplizieren",
    "Zarojel felbontasa",
    "Desfacerea parantezelor",
  ),
  t3_text: txt(
    "The distributive law means multiplying the outside factor by every term inside the bracket.",
    "Beim Distributivgesetz multiplizierst du den Faktor vor der Klammer mit jedem Term in der Klammer.",
    "A disztributiv szabaly szerint a kulso tenyezot a zarojelben levo minden taggal meg kell szorozni.",
    "Legea distributivitatii inseamna sa inmultesti factorul din fata parantezei cu fiecare termen din paranteza.",
  ),
  t3_b1: txt(
    "2(x + 3) becomes 2x + 6.",
    "2(x + 3) wird zu 2x + 6.",
    "A 2(x + 3) alak 2x + 6 lesz.",
    "2(x + 3) devine 2x + 6.",
  ),
  t3_b2: txt(
    "Multiply both the variable term and the constant term.",
    "Multipliziere sowohl den Variablenterm als auch die Zahl.",
    "Szorozd meg a valtozos es az allando tagot is.",
    "Inmulteste si termenul cu variabila, si termenul constant.",
  ),
  t3_b3: txt(
    "Brackets help show structure.",
    "Klammern zeigen die Struktur des Terms.",
    "A zarojel megmutatja a kifejezes szerkezetet.",
    "Parantezele arata structura expresiei.",
  ),
  t3_inst: txt(
    "Match each bracket form with its expanded form.",
    "Ordne jede Klammerform ihrer ausmultiplizierten Form zu.",
    "Parositsd a zarojeles alakot a kibontott alakkal.",
    "Asociaza fiecare forma cu paranteza cu forma dezvoltata.",
  ),
  t3_h1: txt(
    "Multiply the outside number by every inside part.",
    "Multipliziere die Zahl vor der Klammer mit jedem Teil in der Klammer.",
    "Szorozd a kulso szamot a belso minden reszevel.",
    "Inmulteste numarul din fata cu fiecare parte din paranteza.",
  ),
  t3_h2: txt(
    "3(y + 5) becomes 3y + 15.",
    "3(y + 5) wird zu 3y + 15.",
    "A 3(y + 5) alak 3y + 15 lesz.",
    "3(y + 5) devine 3y + 15.",
  ),
  b1: sameText("2(x + 3)"),
  b1r: sameText("2x + 6"),
  b2: sameText("4(a + 1)"),
  b2r: sameText("4a + 4"),
  b3: sameText("3(y + 5)"),
  b3r: sameText("3y + 15"),
  t3_q: txt(
    "Which expression is equal to 5(n + 2)?",
    "Welcher Ausdruck ist gleich 5(n + 2)?",
    "Melyik kifejezes egyenlo 5(n + 2)-vel?",
    "Ce expresie este egala cu 5(n + 2)?",
  ),
  a5n10: sameText("5n + 10"),
  a5n2: sameText("5n + 2"),
  a10n2: sameText("10n + 2"),
  a7n: sameText("7n"),
  t4_title: txt(
    "Multiply simple terms",
    "Einfache Terme multiplizieren",
    "Egyszeru tagok szorzasa",
    "Inmultirea termenilor simpli",
  ),
  t4_text: txt(
    "When you multiply a number and a variable, write the number as the coefficient in front of the variable.",
    "Wenn du eine Zahl mit einer Variablen multiplizierst, steht die Zahl als Koeffizient vor der Variablen.",
    "Ha egy szamot es egy valtozot szorzol, a szam kerul egyutthatora a valtozo ele.",
    "Cand inmultesti un numar cu o variabila, scrii numarul ca un coeficient in fata variabilei.",
  ),
  t4_b1: txt(
    "4 * x = 4x.",
    "4 * x = 4x.",
    "4 * x = 4x.",
    "4 * x = 4x.",
  ),
  t4_b2: txt(
    "4 * 3 * x = 12x.",
    "4 * 3 * x = 12x.",
    "4 * 3 * x = 12x.",
    "4 * 3 * x = 12x.",
  ),
  t4_b3: txt(
    "Multiply the numbers first, then attach the variable.",
    "Multipliziere zuerst die Zahlen und haenge dann die Variable an.",
    "Eloszor a szamokat szorozd ossze, aztan ird melle a valtozot.",
    "Inmulteste mai intai numerele, apoi adauga variabila.",
  ),
  t4_inst: txt(
    "Complete the product 4 * x * 3 = ___.",
    "Ergaenze das Produkt 4 * x * 3 = ___.",
    "Egeszitsd ki: 4 * x * 3 = ___.",
    "Completeaza produsul 4 * x * 3 = ___.",
  ),
  t4_h1: txt(
    "4 * 3 = 12.",
    "4 * 3 = 12.",
    "4 * 3 = 12.",
    "4 * 3 = 12.",
  ),
  t4_h2: txt(
    "So the result is 12x.",
    "Also ist das Ergebnis 12x.",
    "Tehat az eredmeny 12x.",
    "Deci rezultatul este 12x.",
  ),
  t4_sentence: sameText("4 * x * 3 = ___"),
  a12x2: sameText("12x"),
  a7x2: sameText("7x"),
  a12: sameText("12"),
  a4x3: sameText("4x + 3"),
  t4_q: txt(
    "What is 2a * 5?",
    "Was ist 2a * 5?",
    "Mennyi 2a * 5?",
    "Cat este 2a * 5?",
  ),
  a10a: sameText("10a"),
  a7a: sameText("7a"),
  a25a: sameText("25a"),
  a10b: sameText("10"),
} satisfies Record<string, LangText>;

const ALGEBRAEXPLORER7_TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => (
      <LessonCard
        accent="#2563EB"
        title="Substitute first"
        main="2x + 2"
        sub="x = 3"
      />
    ),
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [3, 3, 2],
      answer: 8,
      blockIcon: "x",
      blockColor: "#60A5FA",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["a10", "a6b", "a12b", "a14"],
      answer: "a10",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => (
      <LessonCard
        accent="#3B82F6"
        title="Like terms"
        main="3x + 2x = 5x"
        sub="constants stay separate"
      />
    ),
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "x", label: "bucket_x" },
        { id: "const", label: "bucket_const" },
      ],
      items: [
        { text: "x3", bucketId: "x" },
        { text: "x2", bucketId: "x" },
        { text: "x7", bucketId: "x" },
        { text: "c5", bucketId: "const" },
        { text: "c8", bucketId: "const" },
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["a7x", "a12x", "a43x", "a7"],
      answer: "a7x",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => (
      <LessonCard
        accent="#1D4ED8"
        title="Distribute"
        main="2(x + 3)"
        sub="2x + 6"
      />
    ),
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "b1", right: "b1r" },
        { left: "b2", right: "b2r" },
        { left: "b3", right: "b3r" },
      ],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["a5n10", "a5n2", "a10n2", "a7n"],
      answer: "a5n10",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => (
      <LessonCard
        accent="#60A5FA"
        title="Multiply terms"
        main="4 * x * 3"
        sub="12x"
      />
    ),
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sentence",
      choices: ["a12x2", "a7x2", "a12", "a4x3"],
      correctIndex: 0,
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["a10a", "a7a", "a25a", "a10b"],
      answer: "a10a",
    },
  },
];

const EQUATIONEXPLORER7_LABELS = {
  explorer_title: txt("Equations", "Gleichungen", "Egyenletek", "Ecuatii"),
  t1_title: txt(
    "One-step equations",
    "Einstufige Gleichungen",
    "Egyl epeses egyenletek",
    "Ecuatii intr-un pas",
  ),
  t1_text: txt(
    "A one-step equation can be solved with one inverse operation.",
    "Eine einstufige Gleichung loest du mit genau einer Umkehroperation.",
    "Az egylepeses egyenlet egy forditott muvelettel oldhato meg.",
    "O ecuatie intr-un pas se rezolva cu o singura operatie inversa.",
  ),
  t1_b1: txt(
    "Addition is undone by subtraction.",
    "Addition wird durch Subtraktion rueckgaengig gemacht.",
    "Az osszeadast kivonassal vonjuk vissza.",
    "Adunarea se anuleaza prin scadere.",
  ),
  t1_b2: txt(
    "If x + 6 = 14, then x = 8.",
    "Wenn x + 6 = 14, dann ist x = 8.",
    "Ha x + 6 = 14, akkor x = 8.",
    "Daca x + 6 = 14, atunci x = 8.",
  ),
  t1_b3: txt(
    "Check by putting the answer back into the equation.",
    "Pruefe durch Einsetzen in die Gleichung.",
    "Ellenorizd a megoldast visszahelyettesitessel.",
    "Verifica prin inlocuire in ecuatie.",
  ),
  t1_inst: txt(
    "Balance x + 6 = 14. Find x.",
    "Gleiche x + 6 = 14 aus. Finde x.",
    "Tartsd egyensulyban: x + 6 = 14. Keresd x-et.",
    "Echilibreaza x + 6 = 14. Gaseste pe x.",
  ),
  t1_h1: txt(
    "Subtract 6 from 14.",
    "Ziehe 6 von 14 ab.",
    "Vond ki a 6-ot a 14-bol.",
    "Scade 6 din 14.",
  ),
  t1_h2: txt(
    "14 - 6 = 8.",
    "14 - 6 = 8.",
    "14 - 6 = 8.",
    "14 - 6 = 8.",
  ),
  t1_q: txt(
    "What is x if x - 9 = 4?",
    "Was ist x bei x - 9 = 4?",
    "Mennyi x, ha x - 9 = 4?",
    "Cat este x daca x - 9 = 4?",
  ),
  a13: sameText("13"),
  a5: sameText("5"),
  a36: sameText("36"),
  aNeg5: sameText("-5"),
  t2_title: txt(
    "Two-step equations",
    "Zweistufige Gleichungen",
    "Ketlepeses egyenletek",
    "Ecuatii in doi pasi",
  ),
  t2_text: txt(
    "For a two-step equation, undo the addition or subtraction first, then undo the multiplication or division.",
    "Bei einer zweistufigen Gleichung machst du zuerst Plus oder Minus rueckgaengig und danach Mal oder Geteilt.",
    "Ketlepeses egyenletnel eloszor az osszeadast vagy kivonast, utana a szorzast vagy osztast vonjuk vissza.",
    "La o ecuatie in doi pasi anulezi mai intai adunarea sau scaderea, apoi inmultirea sau impartirea.",
  ),
  t2_b1: txt(
    "3x + 4 = 19 becomes 3x = 15.",
    "3x + 4 = 19 wird zu 3x = 15.",
    "A 3x + 4 = 19 atalakithato 3x = 15-re.",
    "3x + 4 = 19 devine 3x = 15.",
  ),
  t2_b2: txt(
    "Then divide by 3.",
    "Dann teilst du durch 3.",
    "Ezutan oszd el 3-mal.",
    "Apoi imparti la 3.",
  ),
  t2_b3: txt(
    "Inverse operations keep the equation balanced.",
    "Umkehroperationen halten die Gleichung im Gleichgewicht.",
    "A forditott muveletek egyensulyban tartjak az egyenletet.",
    "Operatiile inverse pastreaza echilibrul ecuatiei.",
  ),
  t2_inst: txt(
    "Solve 3x + 4 = 19 step by step.",
    "Loese 3x + 4 = 19 Schritt fuer Schritt.",
    "Oldd meg lepesrol lepesre: 3x + 4 = 19.",
    "Rezolva 3x + 4 = 19 pas cu pas.",
  ),
  t2_step1: txt(
    "Subtract 4 from both sides. What remains on the right?",
    "Subtrahiere 4 auf beiden Seiten. Was bleibt rechts uebrig?",
    "Vonj ki 4-et mindket oldalbol. Mennyi marad jobb oldalon?",
    "Scade 4 din ambele parti. Ce ramane in dreapta?",
  ),
  t2_step2: txt(
    "Divide by 3. What is x?",
    "Teile durch 3. Was ist x?",
    "Oszd el 3-mal. Mennyi x?",
    "Imparte la 3. Cat este x?",
  ),
  t2_h1: txt(
    "19 - 4 = 15.",
    "19 - 4 = 15.",
    "19 - 4 = 15.",
    "19 - 4 = 15.",
  ),
  t2_h2: txt(
    "15 divided by 3 is 5.",
    "15 geteilt durch 3 ist 5.",
    "15 osztva 3-mal az 5.",
    "15 impartit la 3 este 5.",
  ),
  t2_q: txt(
    "Solve 2x + 7 = 21.",
    "Loese 2x + 7 = 21.",
    "Oldd meg: 2x + 7 = 21.",
    "Rezolva 2x + 7 = 21.",
  ),
  a7b: sameText("7"),
  a14b: sameText("14"),
  a28: sameText("28"),
  a4: sameText("4"),
  t3_title: txt(
    "Division equations",
    "Gleichungen mit Division",
    "Osztasos egyenletek",
    "Ecuatii cu impartire",
  ),
  t3_text: txt(
    "If the variable is divided by a number, multiply both sides by that number.",
    "Wenn die Variable durch eine Zahl geteilt wird, multiplizierst du beide Seiten mit dieser Zahl.",
    "Ha a valtozo egy szammal van elosztva, szorozd meg mindket oldalt ezzel a szammal.",
    "Daca variabila este impartita la un numar, inmulteste ambele parti cu acel numar.",
  ),
  t3_b1: txt(
    "x / 4 = 7 means one quarter of x is 7.",
    "x / 4 = 7 bedeutet: ein Viertel von x ist 7.",
    "Az x / 4 = 7 azt jelenti, hogy x negyede 7.",
    "x / 4 = 7 inseamna ca un sfert din x este 7.",
  ),
  t3_b2: txt(
    "Multiply both sides by 4.",
    "Multipliziere beide Seiten mit 4.",
    "Szorozd meg mindket oldalt 4-gyel.",
    "Inmulteste ambele parti cu 4.",
  ),
  t3_b3: txt(
    "Then x = 28.",
    "Dann ist x = 28.",
    "Ekkor x = 28.",
    "Atunci x = 28.",
  ),
  t3_inst: txt(
    "Solve x / 4 = 7.",
    "Loese x / 4 = 7.",
    "Oldd meg: x / 4 = 7.",
    "Rezolva x / 4 = 7.",
  ),
  t3_step1: txt(
    "Multiply 7 by 4. What do you get?",
    "Multipliziere 7 mit 4. Was erhaeltst du?",
    "Szorozd meg a 7-et 4-gyel. Mit kapsz?",
    "Inmulteste 7 cu 4. Ce obtii?",
  ),
  t3_h1: txt(
    "The inverse of dividing by 4 is multiplying by 4.",
    "Die Umkehroperation zu Geteilt durch 4 ist Mal 4.",
    "A 4-gyel valo osztas forditottja a 4-gyel valo szorzas.",
    "Operatia inversa a impartirii la 4 este inmultirea cu 4.",
  ),
  t3_h2: txt(
    "So x = 28.",
    "Also ist x = 28.",
    "Tehat x = 28.",
    "Deci x = 28.",
  ),
  t3_q: txt(
    "What is x if x / 5 = 6?",
    "Was ist x bei x / 5 = 6?",
    "Mennyi x, ha x / 5 = 6?",
    "Cat este x daca x / 5 = 6?",
  ),
  a30: sameText("30"),
  a11: sameText("11"),
  a1: sameText("1"),
  a56b: sameText("56"),
  t4_title: txt(
    "Word problems",
    "Textaufgaben",
    "Szoveges feladatok",
    "Probleme cu text",
  ),
  t4_text: txt(
    "A word problem often describes an equation in everyday language. Find the unknown and write the matching calculation.",
    "Eine Textaufgabe beschreibt oft eine Gleichung in Alltagssprache. Finde die Unbekannte und die passende Rechnung.",
    "A szoveges feladat gyakran a mindennapi nyelven ir le egy egyenletet. Keresd az ismeretlent es az illeszkedo szamitast.",
    "O problema cu text descrie adesea o ecuatie in limbaj obisnuit. Gaseste necunoscuta si calculul potrivit.",
  ),
  t4_b1: txt(
    "Three notebooks for 18 euros means 3x = 18.",
    "Drei Hefte fuer 18 Euro bedeutet 3x = 18.",
    "Harom fuzet 18 euroert azt jelenti, hogy 3x = 18.",
    "Trei caiete pentru 18 euro inseamna 3x = 18.",
  ),
  t4_b2: txt(
    "Divide by the number of equal groups.",
    "Teile durch die Anzahl gleich grosser Gruppen.",
    "Oszd el az egyforma csoportok szamaval.",
    "Imparte la numarul de grupuri egale.",
  ),
  t4_b3: txt(
    "Always check if the answer fits the story.",
    "Pruefe immer, ob die Antwort zur Geschichte passt.",
    "Mindig ellenorizd, hogy a valasz illik-e a tortenethez.",
    "Verifica mereu daca raspunsul se potriveste cu povestea.",
  ),
  t4_inst: txt(
    "Complete the story: three notebooks cost 18 euros, so one costs ___ euros.",
    "Ergaenze: Drei Hefte kosten 18 Euro, also kostet eines ___ Euro.",
    "Egeszitsd ki: harom fuzet 18 euro, igy egy fuzet ___ euro.",
    "Completeaza: trei caiete costa 18 euro, deci unul costa ___ euro.",
  ),
  t4_h1: txt(
    "18 split into 3 equal parts gives the price of one notebook.",
    "18 in 3 gleiche Teile geteilt ergibt den Preis eines Hefts.",
    "A 18-at 3 egyenlo reszre osztva kapod meg egy fuzet arat.",
    "18 impartit in 3 parti egale da pretul unui caiet.",
  ),
  t4_h2: txt(
    "18 / 3 = 6.",
    "18 / 3 = 6.",
    "18 / 3 = 6.",
    "18 / 3 = 6.",
  ),
  t4_sentence: txt(
    "One notebook costs ___ euros.",
    "Ein Heft kostet ___ Euro.",
    "Egy fuzet ara ___ euro.",
    "Un caiet costa ___ euro.",
  ),
  a6c: sameText("6"),
  a3: sameText("3"),
  a9: sameText("9"),
  a18: sameText("18"),
  t4_q: txt(
    "If 2x = 26, what is x?",
    "Wenn 2x = 26, was ist x?",
    "Ha 2x = 26, mennyi x?",
    "Daca 2x = 26, cat este x?",
  ),
} satisfies Record<string, LangText>;

const EQUATIONEXPLORER7_TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => (
      <LessonCard
        accent="#10B981"
        title="One step"
        main="x + 6 = 14"
        sub="x = 8"
      />
    ),
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "balance-scale",
      leftWeight: 14,
      rightInitial: 6,
      unitIcon: "x",
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["a13", "a5", "a36", "aNeg5"],
      answer: "a13",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => (
      <LessonCard
        accent="#059669"
        title="Two steps"
        main="3x + 4 = 19"
        sub="3x = 15, x = 5"
      />
    ),
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "equation-solver",
      equation: "3x + 4 = 19",
      steps: [
        {
          instruction: "t2_step1",
          choices: [15, 19, 12, 23],
          answer: 15,
          equation: "3x = 15",
        },
        {
          instruction: "t2_step2",
          choices: [3, 4, 5, 6],
          answer: 5,
          equation: "x = 5",
        },
      ],
      finalAnswer: 5,
      variable: "x",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["a7b", "a14b", "a28", "a4"],
      answer: "a7b",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => (
      <LessonCard
        accent="#34D399"
        title="Division equation"
        main="x / 4 = 7"
        sub="x = 28"
      />
    ),
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "equation-solver",
      equation: "x / 4 = 7",
      steps: [
        {
          instruction: "t3_step1",
          choices: [24, 28, 11, 35],
          answer: 28,
          equation: "x = 28",
        },
      ],
      finalAnswer: 28,
      variable: "x",
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["a30", "a11", "a1", "a56b"],
      answer: "a30",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => (
      <LessonCard
        accent="#6EE7B7"
        title="Story to equation"
        main="3x = 18"
        sub="x = 6"
      />
    ),
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sentence",
      choices: ["a6c", "a3", "a9", "a18"],
      correctIndex: 0,
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["a13", "a5", "a7b", "a30"],
      answer: "a13",
    },
  },
];

const INEQUALITYEXPLORER7_LABELS = {
  explorer_title: txt(
    "Inequalities",
    "Ungleichungen",
    "Egyenlotlensegek",
    "Inegalitati",
  ),
  t1_title: txt(
    "Greater than",
    "Groesser als",
    "Nagyobb mint",
    "Mai mare decat",
  ),
  t1_text: txt(
    "An inequality compares values. x > 4 means x can be any number larger than 4.",
    "Eine Ungleichung vergleicht Werte. x > 4 bedeutet, dass x jede Zahl groesser als 4 sein kann.",
    "Az egyenlotlenseg ertekeket hasonlit ossze. Az x > 4 azt jelenti, hogy x barmely 4-nel nagyobb szam lehet.",
    "O inegalitate compara valori. x > 4 inseamna ca x poate fi orice numar mai mare decat 4.",
  ),
  t1_b1: txt(
    "The symbol > means greater than.",
    "Das Zeichen > bedeutet groesser als.",
    "A > jel azt jelenti, hogy nagyobb mint.",
    "Simbolul > inseamna mai mare decat.",
  ),
  t1_b2: txt(
    "4 itself is not a solution of x > 4.",
    "4 selbst ist keine Loesung von x > 4.",
    "A 4 maga nem megoldasa az x > 4 egyenlotlensegnek.",
    "Numarul 4 nu este solutie pentru x > 4.",
  ),
  t1_b3: txt(
    "5 is the smallest whole-number solution.",
    "5 ist die kleinste ganze Loesung.",
    "Az 5 a legkisebb egesz megoldas.",
    "5 este cea mai mica solutie intreaga.",
  ),
  t1_inst: txt(
    "Tap the smallest whole-number solution of x > 4.",
    "Tippe die kleinste ganze Loesung von x > 4 an.",
    "Koppints az x > 4 legkisebb egesz megoldasara.",
    "Atinge cea mai mica solutie intreaga pentru x > 4.",
  ),
  t1_h1: txt(
    "The answer must be bigger than 4.",
    "Die Antwort muss groesser als 4 sein.",
    "A valasznak 4-nel nagyobbnak kell lennie.",
    "Raspunsul trebuie sa fie mai mare decat 4.",
  ),
  t1_h2: txt(
    "The next whole number after 4 is 5.",
    "Die naechste ganze Zahl nach 4 ist 5.",
    "A 4 utani kovetkezo egesz szam az 5.",
    "Urmatorul numar intreg dupa 4 este 5.",
  ),
  t1_q: txt(
    "Which sign makes x __ 9 true for x = 12?",
    "Welches Zeichen macht x __ 9 fuer x = 12 wahr?",
    "Melyik jel teszi igazza: x __ 9, ha x = 12?",
    "Ce semn face x __ 9 adevarat pentru x = 12?",
  ),
  gt: sameText(">"),
  lt: sameText("<"),
  ge: sameText(">="),
  eq: sameText("="),
  t2_title: txt(
    "Less than",
    "Kleiner als",
    "Kisebb mint",
    "Mai mic decat",
  ),
  t2_text: txt(
    "x < 3 means every allowed value lies to the left of 3 on the number line.",
    "x < 3 bedeutet, dass jeder erlaubte Wert links von 3 auf dem Zahlenstrahl liegt.",
    "Az x < 3 azt jelenti, hogy minden megengedett ertek a 3 tol balra van a szamegyenesen.",
    "x < 3 inseamna ca fiecare valoare permisa este la stanga lui 3 pe axa numerelor.",
  ),
  t2_b1: txt(
    "The symbol < means less than.",
    "Das Zeichen < bedeutet kleiner als.",
    "A < jel azt jelenti, hogy kisebb mint.",
    "Simbolul < inseamna mai mic decat.",
  ),
  t2_b2: txt(
    "3 itself is not a solution of x < 3.",
    "3 selbst ist keine Loesung von x < 3.",
    "A 3 maga nem megoldas az x < 3-ra.",
    "3 nu este o solutie pentru x < 3.",
  ),
  t2_b3: txt(
    "2 is the greatest whole-number solution.",
    "2 ist die groesste ganze Loesung.",
    "A 2 a legnagyobb egesz megoldas.",
    "2 este cea mai mare solutie intreaga.",
  ),
  t2_inst: txt(
    "Tap the greatest whole-number solution of x < 3.",
    "Tippe die groesste ganze Loesung von x < 3 an.",
    "Koppints az x < 3 legnagyobb egesz megoldasara.",
    "Atinge cea mai mare solutie intreaga pentru x < 3.",
  ),
  t2_h1: txt(
    "The answer must be smaller than 3.",
    "Die Antwort muss kleiner als 3 sein.",
    "A valasznak 3-nal kisebbnek kell lennie.",
    "Raspunsul trebuie sa fie mai mic decat 3.",
  ),
  t2_h2: txt(
    "The whole number just before 3 is 2.",
    "Die ganze Zahl direkt vor 3 ist 2.",
    "A 3 elotti egesz szam a 2.",
    "Numarul intreg chiar inainte de 3 este 2.",
  ),
  t2_q: txt(
    "Which sign is correct: 5 __ 8?",
    "Welches Zeichen ist richtig: 5 __ 8?",
    "Melyik jel helyes: 5 __ 8?",
    "Ce semn este corect: 5 __ 8?",
  ),
  t3_title: txt(
    "Words and symbols",
    "Worte und Zeichen",
    "Szavak es jelek",
    "Cuvinte si simboluri",
  ),
  t3_text: txt(
    "Important words in a problem tell you which inequality sign to use.",
    "Wichtige Woerter in einer Aufgabe zeigen dir, welches Ungleichheitszeichen passt.",
    "A feladat fontos szavai megmutatjak, melyik egyenlotlensegjel kell.",
    "Cuvintele importante din problema iti arata ce semn de inegalitate trebuie folosit.",
  ),
  t3_b1: txt(
    "At least means >=.",
    "Mindestens bedeutet >=.",
    "A legalabb jelentese >=.",
    "Cel putin inseamna >=.",
  ),
  t3_b2: txt(
    "At most means <=.",
    "Hoechstens bedeutet <=.",
    "A legfeljebb jelentese <=.",
    "Cel mult inseamna <=.",
  ),
  t3_b3: txt(
    "More than and less than stay strict.",
    "Mehr als und weniger als bleiben streng.",
    "A nagyobb mint es kisebb mint szigoruan marad.",
    "Mai mare decat si mai mic decat raman stricte.",
  ),
  t3_inst: txt(
    "Match each phrase with the correct symbol.",
    "Ordne jede Aussage dem richtigen Zeichen zu.",
    "Parositsd a kifejezest a helyes jelhez.",
    "Asociaza fiecare expresie cu simbolul corect.",
  ),
  t3_h1: txt(
    "Look for words like at least, at most, more than, less than.",
    "Achte auf Woerter wie mindestens, hoechstens, mehr als, weniger als.",
    "Figyeld az olyan szavakat, mint legalabb, legfeljebb, nagyobb mint, kisebb mint.",
    "Cauta cuvinte precum cel putin, cel mult, mai mare decat, mai mic decat.",
  ),
  t3_h2: txt(
    "At least includes the boundary, more than does not.",
    "Mindestens schliesst den Grenzwert ein, mehr als nicht.",
    "A legalabb tartalmazza a hatart, a nagyobb mint nem.",
    "Cel putin include limita, mai mare decat nu.",
  ),
  p1: txt("at least 7", "mindestens 7", "legalabb 7", "cel putin 7"),
  p1r: sameText(">="),
  p2: txt("more than 7", "mehr als 7", "tobb mint 7", "mai mult de 7"),
  p2r: sameText(">"),
  p3: txt("at most 7", "hoechstens 7", "legfeljebb 7", "cel mult 7"),
  p3r: sameText("<="),
  p4: txt("less than 7", "weniger als 7", "kevesebb mint 7", "mai putin de 7"),
  p4r: sameText("<"),
  t3_q: txt(
    "Tina has 12 euros and each ticket costs 3 euros. Which inequality fits the number t of tickets?",
    "Tina hat 12 Euro und jedes Ticket kostet 3 Euro. Welche Ungleichung passt zur Ticketzahl t?",
    "Tinanak 12 euroja van, egy jegy 3 euro. Melyik egyenlotlenseg illik a t jegyek szamara?",
    "Tina are 12 euro si fiecare bilet costa 3 euro. Ce inegalitate se potriveste pentru numarul t de bilete?",
  ),
  q3tle12: sameText("3t <= 12"),
  q3tge12: sameText("3t >= 12"),
  qt3eq12: sameText("t + 3 = 12"),
  qt12div3: sameText("t = 12 / 3 always"),
} satisfies Record<string, LangText>;

const INEQUALITYEXPLORER7_TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => (
      <LessonCard
        accent="#EC4899"
        title="Strict greater than"
        main="x > 4"
        sub="smallest whole solution: 5"
      />
    ),
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 10,
      start: 0,
      target: 5,
      step: 1,
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["gt", "lt", "ge", "eq"],
      answer: "gt",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => (
      <LessonCard
        accent="#DB2777"
        title="Strict less than"
        main="x < 3"
        sub="greatest whole solution: 2"
      />
    ),
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "number-line",
      min: -2,
      max: 6,
      start: 0,
      target: 2,
      step: 1,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["gt", "lt", "ge", "eq"],
      answer: "lt",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => (
      <LessonCard
        accent="#F472B6"
        title="Language matters"
        main="at least, at most"
        sub="choose the right sign"
      />
    ),
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "p1", right: "p1r" },
        { left: "p2", right: "p2r" },
        { left: "p3", right: "p3r" },
        { left: "p4", right: "p4r" },
      ],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["q3tle12", "q3tge12", "qt3eq12", "qt12div3"],
      answer: "q3tle12",
    },
  },
];

const TRIANGLEEXPLORER7_LABELS = {
  explorer_title: txt("Triangles", "Dreiecke", "Haromszogek", "Triunghiuri"),
  t1_title: txt(
    "Angle sum",
    "Winkelsumme",
    "Szogosszeg",
    "Suma unghiurilor",
  ),
  t1_text: txt(
    "The three interior angles of every triangle add up to 180 degrees.",
    "Die drei Innenwinkel jedes Dreiecks ergeben zusammen 180 Grad.",
    "Minden haromszog belso szogeinek osszege 180 fok.",
    "Cele trei unghiuri interioare ale fiecarui triunghi au suma 180 de grade.",
  ),
  t1_b1: txt(
    "Add the known angles first.",
    "Addiere zuerst die bekannten Winkel.",
    "Eloszor add ossze az ismert szogeket.",
    "Aduna mai intai unghiurile cunoscute.",
  ),
  t1_b2: txt(
    "Subtract their sum from 180 degrees.",
    "Ziehe ihre Summe von 180 Grad ab.",
    "Vond ki az osszeguket 180 fokbol.",
    "Scade suma lor din 180 de grade.",
  ),
  t1_b3: txt(
    "A triangle cannot have more than 180 degrees inside.",
    "Ein Dreieck kann innen nicht mehr als 180 Grad haben.",
    "Egy haromszog belso szogeinek osszege nem lehet tobb 180 foknal.",
    "Un triunghi nu poate avea in interior mai mult de 180 de grade.",
  ),
  t1_inst: txt(
    "Move to the missing angle in a triangle with 50 deg and 60 deg.",
    "Gehe zum fehlenden Winkel in einem Dreieck mit 50 Grad und 60 Grad.",
    "Allitsd be a hianyzo szoget egy 50 fokos es 60 fokos haromszogben.",
    "Muta indicatorul la unghiul lipsa dintr-un triunghi cu 50 de grade si 60 de grade.",
  ),
  t1_h1: txt(
    "50 + 60 = 110.",
    "50 + 60 = 110.",
    "50 + 60 = 110.",
    "50 + 60 = 110.",
  ),
  t1_h2: txt(
    "180 - 110 = 70.",
    "180 - 110 = 70.",
    "180 - 110 = 70.",
    "180 - 110 = 70.",
  ),
  t1_q: txt(
    "A triangle has angles 35 deg and 75 deg. What is the third angle?",
    "Ein Dreieck hat 35 Grad und 75 Grad. Wie gross ist der dritte Winkel?",
    "Egy haromszog ket szoge 35 fok es 75 fok. Mennyi a harmadik szog?",
    "Un triunghi are unghiurile 35 de grade si 75 de grade. Cat este al treilea unghi?",
  ),
  a70: sameText("70 deg"),
  a80: sameText("80 deg"),
  a90: sameText("90 deg"),
  a110: sameText("110 deg"),
  t2_title: txt(
    "Equilateral triangles",
    "Gleichseitige Dreiecke",
    "Szabalyos haromszogek",
    "Triunghiuri echilaterale",
  ),
  t2_text: txt(
    "An equilateral triangle has three equal sides and three equal angles of 60 degrees.",
    "Ein gleichseitiges Dreieck hat drei gleich lange Seiten und drei gleich grosse Winkel von 60 Grad.",
    "Az egyenlo oldalu haromszognek harom egyenlo oldala es harom 60 fokos szoge van.",
    "Un triunghi echilateral are trei laturi egale si trei unghiuri egale de 60 de grade.",
  ),
  t2_b1: txt(
    "All sides are equal.",
    "Alle Seiten sind gleich lang.",
    "Minden oldala egyenlo hosszu.",
    "Toate laturile sunt egale.",
  ),
  t2_b2: txt(
    "All angles are 60 degrees.",
    "Alle Winkel sind 60 Grad.",
    "Minden szoge 60 fok.",
    "Toate unghiurile sunt de 60 de grade.",
  ),
  t2_b3: txt(
    "Every equilateral triangle is also isosceles.",
    "Jedes gleichseitige Dreieck ist auch gleichschenklig.",
    "Minden egyenlo oldalu haromszog egyben egyenlo szaru is.",
    "Orice triunghi echilateral este si isoscel.",
  ),
  t2_inst: txt(
    "Sort each fact into always true for an equilateral triangle or not always true.",
    "Sortiere jede Aussage in immer wahr fuer ein gleichseitiges Dreieck oder nicht immer wahr.",
    "Rendezd az allitasokat az egyenlo oldalu haromszogre mindig igaz vagy nem mindig igaz kategoriaba.",
    "Sorteaza fiecare afirmatie in mereu adevarat pentru triunghiul echilateral sau nu mereu adevarat.",
  ),
  t2_h1: txt(
    "Think about the definition of equilateral.",
    "Denke an die Definition von gleichseitig.",
    "Gondolj az egyenlo oldalu definiciojara.",
    "Gandeste-te la definitia triunghiului echilateral.",
  ),
  t2_h2: txt(
    "A right angle can never appear in an equilateral triangle.",
    "Ein rechter Winkel kann in einem gleichseitigen Dreieck nie vorkommen.",
    "Derékszog soha nem lehet egy egyenlo oldalu haromszogben.",
    "Un unghi drept nu poate aparea intr-un triunghi echilateral.",
  ),
  bucket_true: txt(
    "Always true",
    "Immer wahr",
    "Mindig igaz",
    "Mereu adevarat",
  ),
  bucket_notalways: txt(
    "Not always true",
    "Nicht immer wahr",
    "Nem mindig igaz",
    "Nu mereu adevarat",
  ),
  eq_side: txt(
    "all sides equal",
    "alle Seiten gleich",
    "minden oldal egyenlo",
    "toate laturile egale",
  ),
  eq_angle: txt(
    "all angles are 60 deg",
    "alle Winkel sind 60 Grad",
    "minden szog 60 fok",
    "toate unghiurile sunt 60 de grade",
  ),
  eq_right: txt(
    "one angle is 90 deg",
    "ein Winkel ist 90 Grad",
    "egy szog 90 fok",
    "un unghi este de 90 de grade",
  ),
  eq_twosides: txt(
    "at least two sides are equal",
    "mindestens zwei Seiten sind gleich",
    "legalabb ket oldal egyenlo",
    "cel putin doua laturi sunt egale",
  ),
  t2_q: txt(
    "Which statement is true for every equilateral triangle?",
    "Welche Aussage gilt fuer jedes gleichseitige Dreieck?",
    "Melyik allitas igaz minden egyenlo oldalu haromszogre?",
    "Ce afirmatie este adevarata pentru orice triunghi echilateral?",
  ),
  qeq1: txt(
    "All angles are 60 deg.",
    "Alle Winkel sind 60 Grad.",
    "Minden szoge 60 fok.",
    "Toate unghiurile sunt 60 de grade.",
  ),
  qeq2: txt(
    "It has one right angle.",
    "Es hat einen rechten Winkel.",
    "Van benne egy derékszog.",
    "Are un unghi drept.",
  ),
  qeq3: txt(
    "Only two sides are equal.",
    "Nur zwei Seiten sind gleich lang.",
    "Csak ket oldala egyenlo.",
    "Doar doua laturi sunt egale.",
  ),
  qeq4: txt(
    "Its angles sum to 90 deg.",
    "Seine Winkel ergeben 90 Grad.",
    "Szogeinek osszege 90 fok.",
    "Unghiurile lui au suma 90 de grade.",
  ),
  t3_title: txt(
    "Isosceles triangles",
    "Gleichschenklige Dreiecke",
    "Egyenlo szaru haromszogek",
    "Triunghiuri isoscele",
  ),
  t3_text: txt(
    "In an isosceles triangle, two sides are equal and the opposite base angles are equal too.",
    "In einem gleichschenkligen Dreieck sind zwei Seiten gleich und die gegenueberliegenden Basiswinkel ebenfalls.",
    "Egy egyenlo szaru haromszogben ket oldal egyenlo, es a veluk szemkozti alapszogek is egyenlok.",
    "Intr-un triunghi isoscel, doua laturi sunt egale si unghiurile de la baza sunt de asemenea egale.",
  ),
  t3_b1: txt(
    "Equal sides face equal angles.",
    "Gleiche Seiten stehen gleichen Winkeln gegenueber.",
    "Az egyenlo oldalakkal szemben egyenlo szogek vannak.",
    "Laturile egale stau in fata unor unghiuri egale.",
  ),
  t3_b2: txt(
    "If AB = AC, then angle B = angle C.",
    "Wenn AB = AC, dann gilt Winkel B = Winkel C.",
    "Ha AB = AC, akkor B szog = C szog.",
    "Daca AB = AC, atunci unghiul B = unghiul C.",
  ),
  t3_b3: txt(
    "Not every isosceles triangle is equilateral.",
    "Nicht jedes gleichschenklige Dreieck ist gleichseitig.",
    "Nem minden egyenlo szaru haromszog egyenlo oldalu.",
    "Nu orice triunghi isoscel este echilateral.",
  ),
  t3_inst: txt(
    "Match each side statement with the matching angle statement.",
    "Ordne jeder Seitenaussage die passende Winkelaussage zu.",
    "Parositsd az oldalakrol szolo allitast a megfelelo szogallitasokkal.",
    "Asociaza fiecare afirmatie despre laturi cu afirmatia corecta despre unghiuri.",
  ),
  t3_h1: txt(
    "Equal sides imply equal opposite angles.",
    "Gleiche Seiten bedeuten gleiche gegenueberliegende Winkel.",
    "Az egyenlo oldalak egyenlo szemkozti szogeket jelentenek.",
    "Laturile egale inseamna unghiuri opuse egale.",
  ),
  t3_h2: txt(
    "Read the vertex letters carefully.",
    "Lies die Eckpunkte sorgfaeltig.",
    "Olvasd figyelmesen a csucspontok betuit.",
    "Citeste cu atentie literele varfurilor.",
  ),
  iso1: sameText("AB = AC"),
  iso1r: sameText("angle B = angle C"),
  iso2: sameText("AB = BC"),
  iso2r: sameText("angle A = angle C"),
  iso3: sameText("AC = BC"),
  iso3r: sameText("angle A = angle B"),
  t3_q: txt(
    "If two sides of a triangle are equal, what must also be equal?",
    "Wenn zwei Seiten eines Dreiecks gleich sind, was muss dann auch gleich sein?",
    "Ha egy haromszog ket oldala egyenlo, minek kell meg egyenlonek lennie?",
    "Daca doua laturi ale unui triunghi sunt egale, ce trebuie sa mai fie egal?",
  ),
  qiso1: txt(
    "The opposite angles",
    "Die gegenueberliegenden Winkel",
    "A szemkozti szogek",
    "Unghiurile opuse",
  ),
  qiso2: txt(
    "All three angles are 90 deg",
    "Alle drei Winkel sind 90 Grad",
    "Mindharom szog 90 fok",
    "Toate cele trei unghiuri sunt de 90 de grade",
  ),
  qiso3: txt(
    "The perimeter is always 30",
    "Der Umfang ist immer 30",
    "A kerulet mindig 30",
    "Perimetrul este mereu 30",
  ),
  qiso4: txt(
    "There can be no equal angles",
    "Es kann keine gleichen Winkel geben",
    "Nem lehetnek egyenlo szogek",
    "Nu pot exista unghiuri egale",
  ),
  t4_title: txt(
    "Exterior angles",
    "Aussenwinkel",
    "Kulso szogek",
    "Unghiuri exterioare",
  ),
  t4_text: txt(
    "An exterior angle of a triangle equals the sum of the two remote interior angles.",
    "Ein Aussenwinkel eines Dreiecks ist gleich der Summe der beiden nicht anliegenden Innenwinkel.",
    "A haromszog kulso szoge megegyezik a ket tavoli belso szog osszegevel.",
    "Un unghi exterior al triunghiului este egal cu suma celor doua unghiuri interioare nealaturate.",
  ),
  t4_b1: txt(
    "Use the two interior angles that are not next to the exterior angle.",
    "Nutze die beiden Innenwinkel, die nicht direkt am Aussenwinkel liegen.",
    "Hasznald azt a ket belso szoget, amely nem szomszedos a kulso szoggel.",
    "Foloseste cele doua unghiuri interioare care nu sunt langa unghiul exterior.",
  ),
  t4_b2: txt(
    "35 deg + 45 deg = 80 deg.",
    "35 Grad + 45 Grad = 80 Grad.",
    "35 fok + 45 fok = 80 fok.",
    "35 de grade + 45 de grade = 80 de grade.",
  ),
  t4_b3: txt(
    "The exterior angle is supplementary to the adjacent interior angle too.",
    "Der Aussenwinkel ergaenzt den benachbarten Innenwinkel zu 180 Grad.",
    "A kulso szog a mellette levo belso szoggel egyutt 180 fokot ad.",
    "Unghiul exterior formeaza 180 de grade cu unghiul interior alaturat.",
  ),
  t4_inst: txt(
    "Complete: exterior angle = 35 deg + 45 deg = ___.",
    "Ergaenze: Aussenwinkel = 35 Grad + 45 Grad = ___.",
    "Egeszitsd ki: kulso szog = 35 fok + 45 fok = ___.",
    "Completeaza: unghi exterior = 35 de grade + 45 de grade = ___.",
  ),
  t4_h1: txt(
    "Add the two remote interior angles.",
    "Addiere die beiden entfernten Innenwinkel.",
    "Add ossze a ket tavoli belso szoget.",
    "Aduna cele doua unghiuri interioare indepartate.",
  ),
  t4_h2: txt(
    "35 + 45 = 80.",
    "35 + 45 = 80.",
    "35 + 45 = 80.",
    "35 + 45 = 80.",
  ),
  t4_sentence: sameText("Exterior angle = ___"),
  a80b: sameText("80 deg"),
  a70b: sameText("70 deg"),
  a100: sameText("100 deg"),
  a145: sameText("145 deg"),
  t4_q: txt(
    "If the two remote interior angles are 30 deg and 50 deg, what is the exterior angle?",
    "Wenn die beiden entfernten Innenwinkel 30 Grad und 50 Grad sind, wie gross ist der Aussenwinkel?",
    "Ha a ket tavoli belso szog 30 fok es 50 fok, mekkora a kulso szog?",
    "Daca cele doua unghiuri interioare indepartate sunt 30 de grade si 50 de grade, cat este unghiul exterior?",
  ),
} satisfies Record<string, LangText>;

const TRIANGLEEXPLORER7_TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => (
      <TriangleLessonSvg
        accent="#F59E0B"
        top="70 deg"
        left="50 deg"
        right="60 deg"
        footer="50 + 60 + 70 = 180"
      />
    ),
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 180,
      start: 0,
      target: 70,
      step: 10,
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["a70", "a80", "a90", "a110"],
      answer: "a70",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => (
      <TriangleLessonSvg
        accent="#D97706"
        top="60 deg"
        left="60 deg"
        right="60 deg"
        footer="all sides equal"
      />
    ),
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "true", label: "bucket_true" },
        { id: "notalways", label: "bucket_notalways" },
      ],
      items: [
        { text: "eq_side", bucketId: "true" },
        { text: "eq_angle", bucketId: "true" },
        { text: "eq_twosides", bucketId: "true" },
        { text: "eq_right", bucketId: "notalways" },
      ],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["qeq1", "qeq2", "qeq3", "qeq4"],
      answer: "qeq1",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => (
      <TriangleLessonSvg
        accent="#FBBF24"
        top="B = C"
        left="AB = AC"
        right="equal"
        footer="equal sides, equal base angles"
      />
    ),
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "iso1", right: "iso1r" },
        { left: "iso2", right: "iso2r" },
        { left: "iso3", right: "iso3r" },
      ],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["qiso1", "qiso2", "qiso3", "qiso4"],
      answer: "qiso1",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => (
      <TriangleLessonSvg
        accent="#FDBA74"
        top="35 deg"
        left="45 deg"
        right="80 deg"
        footer="exterior = remote angle sum"
      />
    ),
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t4_sentence",
      choices: ["a80b", "a70b", "a100", "a145"],
      correctIndex: 0,
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["a80b", "a70b", "a100", "a145"],
      answer: "a80b",
    },
  },
];

const PYTHAGORASEXPLORER7_LABELS = {
  explorer_title: txt(
    "Pythagorean theorem",
    "Satz des Pythagoras",
    "Pitagorasz tetel",
    "Teorema lui Pitagora",
  ),
  t1_title: txt(
    "Find the hypotenuse",
    "Die Hypotenuse finden",
    "Az atfogo keresese",
    "Gasirea ipotenuzei",
  ),
  t1_text: txt(
    "In a right triangle, the square of the hypotenuse equals the sum of the squares of the legs.",
    "In einem rechtwinkligen Dreieck ist das Quadrat der Hypotenuse gleich der Summe der Quadrate der Katheten.",
    "Derékszogu haromszogben az atfogo negyzete egyenlo a befogok negyzeteinek osszegevel.",
    "Intr-un triunghi dreptunghic, patratul ipotenuzei este egal cu suma patratelor catetelor.",
  ),
  t1_b1: txt(
    "Formula: a^2 + b^2 = c^2.",
    "Formel: a^2 + b^2 = c^2.",
    "Keplet: a^2 + b^2 = c^2.",
    "Formula: a^2 + b^2 = c^2.",
  ),
  t1_b2: txt(
    "The hypotenuse is opposite the right angle.",
    "Die Hypotenuse liegt dem rechten Winkel gegenueber.",
    "Az atfogo a derékszoggel szemben van.",
    "Ipotenuza este opusa unghiului drept.",
  ),
  t1_b3: txt(
    "For legs 3 and 4, the hypotenuse is 5.",
    "Bei Katheten 3 und 4 ist die Hypotenuse 5.",
    "3 es 4 befogo eseten az atfogo 5.",
    "Pentru catetele 3 si 4, ipotenuza este 5.",
  ),
  t1_inst: txt(
    "Complete: 3^2 + 4^2 = 5^2, so c = ___.",
    "Ergaenze: 3^2 + 4^2 = 5^2, also ist c = ___.",
    "Egeszitsd ki: 3^2 + 4^2 = 5^2, tehat c = ___.",
    "Completeaza: 3^2 + 4^2 = 5^2, deci c = ___.",
  ),
  t1_h1: txt(
    "3^2 + 4^2 = 9 + 16 = 25.",
    "3^2 + 4^2 = 9 + 16 = 25.",
    "3^2 + 4^2 = 9 + 16 = 25.",
    "3^2 + 4^2 = 9 + 16 = 25.",
  ),
  t1_h2: txt(
    "The square root of 25 is 5.",
    "Die Quadratwurzel von 25 ist 5.",
    "25 negyzetgyoke 5.",
    "Radacina patrata a lui 25 este 5.",
  ),
  t1_sentence: sameText("c = ___"),
  a5b: sameText("5"),
  a6d: sameText("6"),
  a7c: sameText("7"),
  a25b: sameText("25"),
  t1_q: txt(
    "A right triangle has legs 6 and 8. What is the hypotenuse?",
    "Ein rechtwinkliges Dreieck hat Katheten 6 und 8. Wie gross ist die Hypotenuse?",
    "Egy derékszogu haromszog befogoi 6 es 8. Mennyi az atfogo?",
    "Un triunghi dreptunghic are catetele 6 si 8. Cat este ipotenuza?",
  ),
  a10c: sameText("10"),
  a12c: sameText("12"),
  a14c: sameText("14"),
  a48: sameText("48"),
  t2_title: txt(
    "Find a leg",
    "Eine Kathete finden",
    "Befogo keresese",
    "Gasirea unei catete",
  ),
  t2_text: txt(
    "If you know the hypotenuse and one leg, subtract the square of the known leg from the square of the hypotenuse.",
    "Wenn du die Hypotenuse und eine Kathete kennst, ziehst du das Quadrat der bekannten Kathete vom Quadrat der Hypotenuse ab.",
    "Ha ismered az atfogot es egy befogot, vond ki az ismert befogo negyzetet az atfogo negyzetebol.",
    "Daca stii ipotenuza si o cateta, scazi patratul catetei cunoscute din patratul ipotenuzei.",
  ),
  t2_b1: txt(
    "x^2 + 6^2 = 10^2 becomes x^2 + 36 = 100.",
    "x^2 + 6^2 = 10^2 wird zu x^2 + 36 = 100.",
    "Az x^2 + 6^2 = 10^2 egyenletbol x^2 + 36 = 100 lesz.",
    "x^2 + 6^2 = 10^2 devine x^2 + 36 = 100.",
  ),
  t2_b2: txt(
    "Subtract 36 to get x^2 = 64.",
    "Subtrahiere 36 und erhalte x^2 = 64.",
    "Vond ki a 36-ot, igy x^2 = 64.",
    "Scade 36 ca sa obtii x^2 = 64.",
  ),
  t2_b3: txt(
    "Then x = 8.",
    "Dann ist x = 8.",
    "Ezutan x = 8.",
    "Apoi x = 8.",
  ),
  t2_inst: txt(
    "Solve x^2 + 6^2 = 10^2.",
    "Loese x^2 + 6^2 = 10^2.",
    "Oldd meg: x^2 + 6^2 = 10^2.",
    "Rezolva x^2 + 6^2 = 10^2.",
  ),
  t2_step1: txt(
    "Compute 10^2 - 6^2. What is x^2?",
    "Berechne 10^2 - 6^2. Was ist x^2?",
    "Szamold ki a 10^2 - 6^2 erteket. Mennyi x^2?",
    "Calculeaza 10^2 - 6^2. Cat este x^2?",
  ),
  t2_step2: txt(
    "Take the square root. What is x?",
    "Ziehe die Quadratwurzel. Was ist x?",
    "Vonj negyzetgyokot. Mennyi x?",
    "Extrage radacina patrata. Cat este x?",
  ),
  t2_h1: txt(
    "100 - 36 = 64.",
    "100 - 36 = 64.",
    "100 - 36 = 64.",
    "100 - 36 = 64.",
  ),
  t2_h2: txt(
    "The square root of 64 is 8.",
    "Die Quadratwurzel von 64 ist 8.",
    "64 negyzetgyoke 8.",
    "Radacina patrata a lui 64 este 8.",
  ),
  t2_q: txt(
    "A right triangle has hypotenuse 13 and one leg 5. What is the other leg?",
    "Ein rechtwinkliges Dreieck hat Hypotenuse 13 und eine Kathete 5. Wie gross ist die andere Kathete?",
    "Egy derékszogu haromszog atfogoja 13, egyik befogoja 5. Mennyi a masik befogo?",
    "Un triunghi dreptunghic are ipotenuza 13 si o cateta 5. Cat este cealalta cateta?",
  ),
  a12d: sameText("12"),
  a8c: sameText("8"),
  a18c: sameText("18"),
  a169: sameText("169"),
  t3_title: txt(
    "When the theorem applies",
    "Wann der Satz gilt",
    "Mikor alkalmazhato",
    "Cand se aplica teorema",
  ),
  t3_text: txt(
    "The Pythagorean theorem only applies to right triangles.",
    "Der Satz des Pythagoras gilt nur fuer rechtwinklige Dreiecke.",
    "A Pitagorasz tetel csak derékszogu haromszogekre igaz.",
    "Teorema lui Pitagora se aplica doar triunghiurilor dreptunghice.",
  ),
  t3_b1: txt(
    "5, 12, 13 is a right-triangle triple.",
    "5, 12, 13 ist ein rechtwinkliges Zahlentripel.",
    "Az 5, 12, 13 derékszogu szamharmas.",
    "5, 12, 13 este un triplet dreptunghic.",
  ),
  t3_b2: txt(
    "6, 8, 10 also works.",
    "6, 8, 10 funktioniert ebenfalls.",
    "A 6, 8, 10 is mukodik.",
    "6, 8, 10 functioneaza de asemenea.",
  ),
  t3_b3: txt(
    "Not every set of three lengths makes a right triangle.",
    "Nicht jede Dreiergruppe von Laengen bildet ein rechtwinkliges Dreieck.",
    "Nem minden harom hosszusag ad derékszogu haromszoget.",
    "Nu orice grup de trei lungimi formeaza un triunghi dreptunghic.",
  ),
  t3_inst: txt(
    "Sort each length set into right triangle or not right triangle.",
    "Sortiere jedes Laengenset in rechtwinklig oder nicht rechtwinklig.",
    "Rendezd a hosszhalmazokat derékszogu vagy nem derékszogu kategoriaba.",
    "Sorteaza fiecare set de lungimi in triunghi dreptunghic sau nu.",
  ),
  t3_h1: txt(
    "Check whether a^2 + b^2 = c^2.",
    "Pruefe, ob a^2 + b^2 = c^2 gilt.",
    "Ellenorizd, hogy teljesul-e az a^2 + b^2 = c^2.",
    "Verifica daca a^2 + b^2 = c^2.",
  ),
  t3_h2: txt(
    "Use the largest side as c.",
    "Nutze die groesste Seite als c.",
    "A legnagyobb oldalt hasznald c-kent.",
    "Foloseste cea mai mare latura ca pe c.",
  ),
  bucket_right: txt(
    "Right triangle",
    "Rechtwinklig",
    "Derékszogu",
    "Dreptunghic",
  ),
  bucket_notright: txt(
    "Not right",
    "Nicht rechtwinklig",
    "Nem derékszogu",
    "Nu este dreptunghic",
  ),
  set513: sameText("5, 12, 13"),
  set6810: sameText("6, 8, 10"),
  set558: sameText("5, 5, 8"),
  set789: sameText("7, 8, 9"),
  t3_q: txt(
    "Which set of side lengths makes a right triangle?",
    "Welches Laengenset bildet ein rechtwinkliges Dreieck?",
    "Melyik oldalhosszhalmaz alkot derékszogu haromszoget?",
    "Ce set de lungimi formeaza un triunghi dreptunghic?",
  ),
  qrt1: sameText("8, 15, 17"),
  qrt2: sameText("4, 4, 7"),
  qrt3: sameText("5, 6, 7"),
  qrt4: sameText("3, 3, 5"),
  t4_title: txt(
    "Word problems with distance",
    "Textaufgaben mit Entfernung",
    "Szoveges tavolsagfeladatok",
    "Probleme cu distante",
  ),
  t4_text: txt(
    "Real situations like ladders, diagonals, and shortest paths often use the Pythagorean theorem.",
    "Reale Situationen wie Leitern, Diagonalen und kuerzeste Wege nutzen oft den Satz des Pythagoras.",
    "Valos helyzetekben, peldaul letraknal, atloknal es rovid utaknal gyakran hasznaljuk a Pitagorasz tetelt.",
    "Situatii reale precum scarile, diagonalele si drumurile cele mai scurte folosesc adesea teorema lui Pitagora.",
  ),
  t4_b1: txt(
    "A ladder 5 m from the wall and 12 m high forms a 5-12-13 triangle.",
    "Eine Leiter 5 m von der Wand und 12 m hoch bildet ein 5-12-13-Dreieck.",
    "Egy letra, amely 5 m-re all a faltol es 12 m magasra er, 5-12-13 haromszoget ad.",
    "O scara la 5 m de perete si 12 m inaltime formeaza un triunghi 5-12-13.",
  ),
  t4_b2: txt(
    "The ladder is the hypotenuse.",
    "Die Leiter ist die Hypotenuse.",
    "A letra az atfogo.",
    "Scara este ipotenuza.",
  ),
  t4_b3: txt(
    "So the ladder length is 13 m.",
    "Die Leiterlaenge ist also 13 m.",
    "Tehat a letra hossza 13 m.",
    "Deci lungimea scarii este 13 m.",
  ),
  t4_inst: txt(
    "Move to the ladder length for a 5 m by 12 m right triangle.",
    "Gehe zur Leiterlaenge fuer ein rechtwinkliges Dreieck mit 5 m und 12 m.",
    "Allitsd a jelolot az 5 m es 12 m befogojú haromszog letrahosszara.",
    "Muta indicatorul la lungimea scarii pentru un triunghi dreptunghic de 5 m si 12 m.",
  ),
  t4_h1: txt(
    "Use 5^2 + 12^2.",
    "Verwende 5^2 + 12^2.",
    "Hasznald az 5^2 + 12^2 osszeget.",
    "Foloseste 5^2 + 12^2.",
  ),
  t4_h2: txt(
    "25 + 144 = 169, and sqrt(169) = 13.",
    "25 + 144 = 169, und sqrt(169) = 13.",
    "25 + 144 = 169, es sqrt(169) = 13.",
    "25 + 144 = 169, iar sqrt(169) = 13.",
  ),
  t4_q: txt(
    "What is the diagonal of a 6 by 8 rectangle?",
    "Wie lang ist die Diagonale eines 6-mal-8-Rechtecks?",
    "Mekkora egy 6 es 8 oldalu teglalap atloja?",
    "Cat este diagonala unui dreptunghi de 6 pe 8?",
  ),
} satisfies Record<string, LangText>;

const PYTHAGORASEXPLORER7_TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => (
      <RightTriangleLessonSvg
        accent="#8B5CF6"
        a="3"
        b="4"
        c="5"
        footer="3^2 + 4^2 = 5^2"
      />
    ),
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t1_sentence",
      choices: ["a5b", "a6d", "a7c", "a25b"],
      correctIndex: 0,
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["a10c", "a12c", "a14c", "a48"],
      answer: "a10c",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => (
      <RightTriangleLessonSvg
        accent="#7C3AED"
        a="x"
        b="6"
        c="10"
        footer="x^2 = 64, x = 8"
      />
    ),
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "equation-solver",
      equation: "x^2 + 6^2 = 10^2",
      steps: [
        {
          instruction: "t2_step1",
          choices: [36, 64, 100, 28],
          answer: 64,
          equation: "x^2 = 64",
        },
        {
          instruction: "t2_step2",
          choices: [6, 7, 8, 9],
          answer: 8,
          equation: "x = 8",
        },
      ],
      finalAnswer: 8,
      variable: "x",
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["a12d", "a8c", "a18c", "a169"],
      answer: "a12d",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => (
      <LessonCard
        accent="#A78BFA"
        title="Only right triangles"
        main="a^2 + b^2 = c^2"
        sub="use the largest side as c"
      />
    ),
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "drag-to-bucket",
      buckets: [
        { id: "right", label: "bucket_right" },
        { id: "notright", label: "bucket_notright" },
      ],
      items: [
        { text: "set513", bucketId: "right" },
        { text: "set6810", bucketId: "right" },
        { text: "set558", bucketId: "notright" },
        { text: "set789", bucketId: "notright" },
      ],
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["qrt1", "qrt2", "qrt3", "qrt4"],
      answer: "qrt1",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => (
      <RightTriangleLessonSvg
        accent="#C4B5FD"
        a="5 m"
        b="12 m"
        c="13 m"
        footer="ladder against a wall"
      />
    ),
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 20,
      start: 0,
      target: 13,
      step: 1,
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["a10c", "a12c", "a14c", "a48"],
      answer: "a10c",
    },
  },
];

const CIRCLEEXPLORER7_LABELS = {
  explorer_title: txt(
    "Circle geometry",
    "Kreisgeometrie",
    "Korgeometria",
    "Geometria cercului",
  ),
  t1_title: txt(
    "Radius and diameter",
    "Radius und Durchmesser",
    "Sugar es atmero",
    "Raza si diametru",
  ),
  t1_text: txt(
    "The radius goes from the center to the circle. The diameter goes all the way across through the center, so it is twice the radius.",
    "Der Radius geht vom Mittelpunkt zum Kreisrand. Der Durchmesser geht ganz durch den Mittelpunkt und ist doppelt so gross wie der Radius.",
    "A sugar a kozepponttol a korvonalig tart. Az atmero atmegy a kozepponton, ezert ketszer akkora, mint a sugar.",
    "Raza merge de la centru la cerc. Diametrul trece prin centru dintr-o parte in alta, deci este de doua ori raza.",
  ),
  t1_b1: txt(
    "d = 2r.",
    "d = 2r.",
    "d = 2r.",
    "d = 2r.",
  ),
  t1_b2: txt(
    "If r = 4, then d = 8.",
    "Wenn r = 4, dann ist d = 8.",
    "Ha r = 4, akkor d = 8.",
    "Daca r = 4, atunci d = 8.",
  ),
  t1_b3: txt(
    "Every diameter is made of two radii.",
    "Jeder Durchmesser besteht aus zwei Radien.",
    "Minden atmero ket sugarbol all.",
    "Orice diametru este format din doua raze.",
  ),
  t1_inst: txt(
    "Match each circle measure with its partner.",
    "Ordne jedem Kreismass den passenden Partner zu.",
    "Parositsd ossze a kor adatait a megfelelo parjukkal.",
    "Asociaza fiecare marime a cercului cu perechea ei.",
  ),
  t1_h1: txt(
    "A diameter is twice the radius.",
    "Ein Durchmesser ist doppelt so gross wie der Radius.",
    "Az atmero ketszerese a sugarnak.",
    "Un diametru este de doua ori raza.",
  ),
  t1_h2: txt(
    "If the radius doubles, the diameter doubles too.",
    "Wenn sich der Radius verdoppelt, verdoppelt sich auch der Durchmesser.",
    "Ha a sugar duplazodik, az atmero is duplazodik.",
    "Daca raza se dubleaza, se dubleaza si diametrul.",
  ),
  r4: sameText("r = 4"),
  d8: sameText("d = 8"),
  r6: sameText("r = 6"),
  d12: sameText("d = 12"),
  r9: sameText("r = 9"),
  d18: sameText("d = 18"),
  t1_q: txt(
    "If the diameter of a circle is 14, what is the radius?",
    "Wenn der Durchmesser eines Kreises 14 ist, wie gross ist der Radius?",
    "Ha egy kor atmeroje 14, mekkora a sugara?",
    "Daca diametrul unui cerc este 14, cat este raza?",
  ),
  a7d: sameText("7"),
  a14d: sameText("14"),
  a28d: sameText("28"),
  a3d: sameText("3"),
  t2_title: txt(
    "Circumference",
    "Umfang",
    "Kerulet",
    "Circumferinta",
  ),
  t2_text: txt(
    "The circumference is the distance around a circle. It can be found with C = 2pi r or C = pi d.",
    "Der Umfang ist die Strecke rund um den Kreis. Du findest ihn mit C = 2pi r oder C = pi d.",
    "A kerulet a kor hossza. Kiszamithato a C = 2pi r vagy a C = pi d keplettel.",
    "Circumferinta este distanta din jurul cercului. O gasesti cu C = 2pi r sau C = pi d.",
  ),
  t2_b1: txt(
    "Use the radius or the diameter.",
    "Verwende den Radius oder den Durchmesser.",
    "Hasznald a sugarat vagy az atmerot.",
    "Foloseste raza sau diametrul.",
  ),
  t2_b2: txt(
    "If r = 7, then C = 14pi.",
    "Wenn r = 7, dann ist C = 14pi.",
    "Ha r = 7, akkor C = 14pi.",
    "Daca r = 7, atunci C = 14pi.",
  ),
  t2_b3: txt(
    "If d = 10, then C = 10pi.",
    "Wenn d = 10, dann ist C = 10pi.",
    "Ha d = 10, akkor C = 10pi.",
    "Daca d = 10, atunci C = 10pi.",
  ),
  t2_inst: txt(
    "Complete: if r = 7, then C = ___pi.",
    "Ergaenze: Wenn r = 7, dann ist C = ___pi.",
    "Egeszitsd ki: ha r = 7, akkor C = ___pi.",
    "Completeaza: daca r = 7, atunci C = ___pi.",
  ),
  t2_h1: txt(
    "Use C = 2pi r.",
    "Nutze C = 2pi r.",
    "Hasznald a C = 2pi r kepletet.",
    "Foloseste C = 2pi r.",
  ),
  t2_h2: txt(
    "2 * 7 = 14.",
    "2 * 7 = 14.",
    "2 * 7 = 14.",
    "2 * 7 = 14.",
  ),
  t2_sentence: sameText("C = ___pi"),
  a14pi: sameText("14"),
  a7pi: sameText("7"),
  a21pi: sameText("21"),
  a49pi: sameText("49"),
  t2_q: txt(
    "If the diameter is 10, what is the circumference?",
    "Wenn der Durchmesser 10 ist, wie gross ist der Umfang?",
    "Ha az atmero 10, mekkora a kerulet?",
    "Daca diametrul este 10, cat este circumferinta?",
  ),
  c10pi: sameText("10pi"),
  c20pi: sameText("20pi"),
  c5pi: sameText("5pi"),
  c100pi: sameText("100pi"),
  t3_title: txt(
    "Area of a circle",
    "Flaeche eines Kreises",
    "Kor terulete",
    "Aria cercului",
  ),
  t3_text: txt(
    "The area of a circle is A = pi r^2. First square the radius, then multiply by pi.",
    "Die Kreisflaeche ist A = pi r^2. Zuerst quadrierst du den Radius und multiplizierst dann mit pi.",
    "A kor terulete A = pi r^2. Eloszor negyzetre emeled a sugarat, majd megszorzod pi-vel.",
    "Aria cercului este A = pi r^2. Mai intai ridici raza la patrat, apoi inmultesti cu pi.",
  ),
  t3_b1: txt(
    "If r = 5, then r^2 = 25.",
    "Wenn r = 5, dann ist r^2 = 25.",
    "Ha r = 5, akkor r^2 = 25.",
    "Daca r = 5, atunci r^2 = 25.",
  ),
  t3_b2: txt(
    "So the area is 25pi square units.",
    "Also ist die Flaeche 25pi Flacheneinheiten.",
    "Tehat a terulet 25pi teruleti egyseg.",
    "Deci aria este 25pi unitati patrate.",
  ),
  t3_b3: txt(
    "Area measures the surface inside the circle.",
    "Die Flaeche misst die Innenflaeche des Kreises.",
    "A terulet a kor belsejeben levo feluletet meri.",
    "Aria masoara suprafata din interiorul cercului.",
  ),
  t3_inst: txt(
    "Move to r^2 for a circle with radius 5.",
    "Gehe zu r^2 fuer einen Kreis mit Radius 5.",
    "Allitsd a jelolot r^2 ertekere, ha a sugar 5.",
    "Muta indicatorul la r^2 pentru un cerc cu raza 5.",
  ),
  t3_h1: txt(
    "Square the radius first.",
    "Quadriere zuerst den Radius.",
    "Eloszor a sugarat negyzetre emeld.",
    "Ridica mai intai raza la patrat.",
  ),
  t3_h2: txt(
    "5^2 = 25.",
    "5^2 = 25.",
    "5^2 = 25.",
    "5^2 = 25.",
  ),
  t3_q: txt(
    "If the radius is 4, what is the area of the circle?",
    "Wenn der Radius 4 ist, wie gross ist die Kreisflaeche?",
    "Ha a sugar 4, mekkora a kor terulete?",
    "Daca raza este 4, cat este aria cercului?",
  ),
  a16pi: sameText("16pi"),
  a8pi: sameText("8pi"),
  a4pi: sameText("4pi"),
  a32pi: sameText("32pi"),
} satisfies Record<string, LangText>;

const CIRCLEEXPLORER7_TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => (
      <CircleLessonSvg
        accent="#14B8A6"
        main="d = 2r"
        sub="diameter is twice the radius"
      />
    ),
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "match-pairs",
      pairs: [
        { left: "r4", right: "d8" },
        { left: "r6", right: "d12" },
        { left: "r9", right: "d18" },
      ],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["a7d", "a14d", "a28d", "a3d"],
      answer: "a7d",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => (
      <CircleLessonSvg
        accent="#0F766E"
        main="C = 2pi r"
        sub="or C = pi d"
      />
    ),
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t2_sentence",
      choices: ["a14pi", "a7pi", "a21pi", "a49pi"],
      correctIndex: 0,
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["c10pi", "c20pi", "c5pi", "c100pi"],
      answer: "c10pi",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => (
      <CircleLessonSvg
        accent="#2DD4BF"
        main="A = pi r^2"
        sub="if r = 5, then A = 25pi"
      />
    ),
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "number-line",
      min: 0,
      max: 30,
      start: 0,
      target: 25,
      step: 1,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["a16pi", "a8pi", "a4pi", "a32pi"],
      answer: "a16pi",
    },
  },
];

const STATEXPLORER7_LABELS = {
  explorer_title: txt("Statistics", "Statistik", "Statisztika", "Statistica"),
  t1_title: txt("Median", "Median", "Median", "Mediana"),
  t1_text: txt(
    "The median is the middle value when the data are ordered from smallest to largest.",
    "Der Median ist der mittlere Wert, wenn die Daten der Groesse nach geordnet sind.",
    "A median az a kozepso ertek, amikor az adatokat novekvo sorrendbe rendezzuk.",
    "Mediana este valoarea din mijloc cand datele sunt ordonate crescator.",
  ),
  t1_b1: txt(
    "Always sort the data first.",
    "Ordne die Daten immer zuerst.",
    "Mindig eloszor rendezd az adatokat.",
    "Ordoneaza intotdeauna datele mai intai.",
  ),
  t1_b2: txt(
    "With five values, the third one is the middle.",
    "Bei fuenf Werten ist der dritte der mittlere.",
    "Ot erteknel a harmadik a kozepso.",
    "La cinci valori, a treia este cea din mijloc.",
  ),
  t1_b3: txt(
    "The median is not necessarily the largest or smallest value.",
    "Der Median ist weder automatisch der groesste noch der kleinste Wert.",
    "A median nem feltetlenul a legnagyobb vagy a legkisebb ertek.",
    "Mediana nu este neaparat cea mai mare sau cea mai mica valoare.",
  ),
  t1_inst: txt(
    "Put the data in order from smallest to largest.",
    "Bringe die Daten von klein nach gross in die richtige Reihenfolge.",
    "Rendezd az adatokat a legkisebbtol a legnagyobbig.",
    "Pune datele in ordine de la cel mai mic la cel mai mare.",
  ),
  t1_h1: txt(
    "Start with the smallest number.",
    "Beginne mit der kleinsten Zahl.",
    "A legkisebb szammal kezdd.",
    "Incepe cu cel mai mic numar.",
  ),
  t1_h2: txt(
    "Then read the middle value.",
    "Lies danach den mittleren Wert ab.",
    "Ezutan olvasd le a kozepso erteket.",
    "Apoi citeste valoarea din mijloc.",
  ),
  w8: sameText("8"),
  w2: sameText("2"),
  w6: sameText("6"),
  w10: sameText("10"),
  w4: sameText("4"),
  t1_q: txt(
    "What is the median of 3, 5, 7, 9, 11?",
    "Was ist der Median von 3, 5, 7, 9, 11?",
    "Mennyi a 3, 5, 7, 9, 11 medianja?",
    "Care este mediana lui 3, 5, 7, 9, 11?",
  ),
  a7e: sameText("7"),
  a5d: sameText("5"),
  a9b: sameText("9"),
  a11b: sameText("11"),
  t2_title: txt("Mode", "Modalwert", "Modusz", "Mod"),
  t2_text: txt(
    "The mode is the value that appears most often in a data set.",
    "Der Modalwert ist der Wert, der in einem Datensatz am haeufigsten vorkommt.",
    "A modusz az az ertek, amelyik a leggyakrabban fordul elo az adathalmazban.",
    "Modul este valoarea care apare cel mai des intr-un set de date.",
  ),
  t2_b1: txt(
    "Count how many times each value appears.",
    "Zaehle, wie oft jeder Wert vorkommt.",
    "Szamold meg, hanyszor fordul elo minden ertek.",
    "Numara de cate ori apare fiecare valoare.",
  ),
  t2_b2: txt(
    "The mode can repeat in several positions of the list.",
    "Der Modalwert kann an mehreren Stellen der Liste auftauchen.",
    "A modusz a listaban tobb helyen is szerepelhet.",
    "Modul poate aparea in mai multe pozitii in lista.",
  ),
  t2_b3: txt(
    "A data set can have no mode or more than one mode, but here we use one clear mode.",
    "Ein Datensatz kann keinen oder mehrere Modalwerte haben, aber hier gibt es einen klaren Modalwert.",
    "Egy adathalmaznak lehet nincs vagy tobb modusza, de itt egyertelmu modusszal dolgozunk.",
    "Un set de date poate avea niciun mod sau mai multe moduri, dar aici folosim un singur mod clar.",
  ),
  t2_inst: txt(
    "Highlight every value that belongs to the mode.",
    "Markiere jeden Wert, der zum Modalwert gehoert.",
    "Jelold ki minden olyan erteket, amely a moduszt adja.",
    "Evidentiaza fiecare valoare care apartine modului.",
  ),
  t2_h1: txt(
    "Look for the number that appears most often.",
    "Suche die Zahl, die am haeufigsten vorkommt.",
    "Keresd azt a szamot, amelyik a leggyakrabban fordul elo.",
    "Cauta numarul care apare cel mai des.",
  ),
  t2_h2: txt(
    "In this data set, 6 appears three times.",
    "In diesem Datensatz kommt 6 dreimal vor.",
    "Ebben az adathalmazban a 6 haromszor szerepel.",
    "In acest set de date, 6 apare de trei ori.",
  ),
  m1: sameText("4"),
  m2: sameText("6"),
  m3: sameText("6"),
  m4: sameText("2"),
  m5: sameText("6"),
  m6: sameText("5"),
  t2_q: txt(
    "What is the mode of 2, 2, 3, 5, 7?",
    "Was ist der Modalwert von 2, 2, 3, 5, 7?",
    "Mennyi a 2, 2, 3, 5, 7 modusa?",
    "Care este modul lui 2, 2, 3, 5, 7?",
  ),
  a2c: sameText("2"),
  a3c: sameText("3"),
  a5e: sameText("5"),
  a7f: sameText("7"),
  t3_title: txt("Range", "Spannweite", "Terjedelem", "Amplitudine"),
  t3_text: txt(
    "The range tells how spread out the data are. It is the largest value minus the smallest value.",
    "Die Spannweite zeigt, wie weit die Daten auseinanderliegen. Sie ist groesster Wert minus kleinster Wert.",
    "A terjedelem megmutatja, mennyire szortak az adatok. A legnagyobb ertekbol kivonjuk a legkisebbet.",
    "Amplitudinea arata cat de raspandite sunt datele. Este valoarea maxima minus valoarea minima.",
  ),
  t3_b1: txt(
    "Find the maximum and minimum first.",
    "Finde zuerst Maximum und Minimum.",
    "Eloszor keresd meg a maximumot es minimumot.",
    "Gaseste mai intai maximul si minimul.",
  ),
  t3_b2: txt(
    "If the data go from 5 to 18, the range is 13.",
    "Wenn die Daten von 5 bis 18 gehen, ist die Spannweite 13.",
    "Ha az adatok 5-tol 18-ig mennek, a terjedelem 13.",
    "Daca datele merg de la 5 la 18, amplitudinea este 13.",
  ),
  t3_b3: txt(
    "Range uses only the extremes.",
    "Die Spannweite benutzt nur die Extremwerte.",
    "A terjedelem csak a szelsoertekeket hasznalja.",
    "Amplitudinea foloseste doar valorile extreme.",
  ),
  t3_inst: txt(
    "Complete: range = 18 - 5 = ___.",
    "Ergaenze: Spannweite = 18 - 5 = ___.",
    "Egeszitsd ki: terjedelem = 18 - 5 = ___.",
    "Completeaza: amplitudine = 18 - 5 = ___.",
  ),
  t3_h1: txt(
    "Subtract the smallest value from the largest.",
    "Ziehe den kleinsten Wert vom groessten Wert ab.",
    "Vond ki a legkisebb erteket a legnagyobbbol.",
    "Scade valoarea cea mai mica din cea mai mare.",
  ),
  t3_h2: txt(
    "18 - 5 = 13.",
    "18 - 5 = 13.",
    "18 - 5 = 13.",
    "18 - 5 = 13.",
  ),
  t3_sentence: sameText("Range = ___"),
  a13c: sameText("13"),
  a12d: sameText("12"),
  a23: sameText("23"),
  a5f: sameText("5"),
  t3_q: txt(
    "What is the range of 4, 9, 11, 15?",
    "Wie gross ist die Spannweite von 4, 9, 11, 15?",
    "Mennyi a 4, 9, 11, 15 terjedelme?",
    "Care este amplitudinea lui 4, 9, 11, 15?",
  ),
  a11c: sameText("11"),
  a15c: sameText("15"),
  a6e: sameText("6"),
  a19: sameText("19"),
  t4_title: txt("Mean", "Mittelwert", "Atlag", "Media"),
  t4_text: txt(
    "The mean is the total of all values divided by how many values there are.",
    "Der Mittelwert ist die Summe aller Werte geteilt durch die Anzahl der Werte.",
    "Az atlag az osszes ertek osszege osztva az ertekek szamaval.",
    "Media este suma tuturor valorilor impartita la numarul de valori.",
  ),
  t4_b1: txt(
    "Add the values first.",
    "Addiere zuerst alle Werte.",
    "Eloszor add ossze az ertekeket.",
    "Aduna mai intai valorile.",
  ),
  t4_b2: txt(
    "Then divide by the number of values.",
    "Teile dann durch die Anzahl der Werte.",
    "Ezutan oszd el az ertekek szamaval.",
    "Apoi imparte la numarul de valori.",
  ),
  t4_b3: txt(
    "For 4, 6, 4, 6 the total is 20 and the mean is 5.",
    "Bei 4, 6, 4, 6 ist die Summe 20 und der Mittelwert 5.",
    "A 4, 6, 4, 6 adathalmaz osszege 20 es az atlaga 5.",
    "Pentru 4, 6, 4, 6 suma este 20 si media este 5.",
  ),
  t4_inst: txt(
    "Combine the blocks to find the total of 4, 6, 4, 6.",
    "Kombiniere die Bloecke und finde die Summe von 4, 6, 4, 6.",
    "Vond ossze a blokkokat a 4, 6, 4, 6 osszegehez.",
    "Combina blocurile ca sa gasesti suma lui 4, 6, 4, 6.",
  ),
  t4_h1: txt(
    "Add all four numbers.",
    "Addiere alle vier Zahlen.",
    "Add ossze mind a negy szamot.",
    "Aduna toate cele patru numere.",
  ),
  t4_h2: txt(
    "4 + 6 + 4 + 6 = 20.",
    "4 + 6 + 4 + 6 = 20.",
    "4 + 6 + 4 + 6 = 20.",
    "4 + 6 + 4 + 6 = 20.",
  ),
  t4_q: txt(
    "What is the mean of 6, 8, 10, 12?",
    "Was ist der Mittelwert von 6, 8, 10, 12?",
    "Mennyi a 6, 8, 10, 12 atlaga?",
    "Care este media lui 6, 8, 10, 12?",
  ),
  a9c: sameText("9"),
  a8f: sameText("8"),
  a10d: sameText("10"),
  a36b: sameText("36"),
} satisfies Record<string, LangText>;

const STATEXPLORER7_TOPICS: TopicDef[] = [
  {
    infoTitle: "t1_title",
    infoText: "t1_text",
    svg: () => (
      <StatsLessonSvg accent="#EAB308" values={[2, 4, 6, 8, 10]} footer="median = middle value" />
    ),
    bulletKeys: ["t1_b1", "t1_b2", "t1_b3"],
    interactive: {
      type: "word-order",
      words: ["w8", "w2", "w6", "w10", "w4"],
      correctOrder: [1, 4, 2, 0, 3],
      instruction: "t1_inst",
      hint1: "t1_h1",
      hint2: "t1_h2",
    },
    quiz: {
      question: "t1_q",
      choices: ["a7e", "a5d", "a9b", "a11b"],
      answer: "a7e",
    },
  },
  {
    infoTitle: "t2_title",
    infoText: "t2_text",
    svg: () => (
      <StatsLessonSvg accent="#CA8A04" values={[4, 6, 6, 2, 6, 5]} footer="mode = most frequent" />
    ),
    bulletKeys: ["t2_b1", "t2_b2", "t2_b3"],
    interactive: {
      type: "highlight-text",
      tokens: ["m1", "m2", "m3", "m4", "m5", "m6"],
      correctIndices: [1, 2, 4],
      instruction: "t2_inst",
      hint1: "t2_h1",
      hint2: "t2_h2",
    },
    quiz: {
      question: "t2_q",
      choices: ["a2c", "a3c", "a5e", "a7f"],
      answer: "a2c",
    },
  },
  {
    infoTitle: "t3_title",
    infoText: "t3_text",
    svg: () => (
      <LessonCard
        accent="#FACC15"
        title="Range"
        main="18 - 5 = 13"
        sub="largest minus smallest"
      />
    ),
    bulletKeys: ["t3_b1", "t3_b2", "t3_b3"],
    interactive: {
      type: "gap-fill",
      sentence: "t3_sentence",
      choices: ["a13c", "a12d", "a23", "a5f"],
      correctIndex: 0,
      instruction: "t3_inst",
      hint1: "t3_h1",
      hint2: "t3_h2",
    },
    quiz: {
      question: "t3_q",
      choices: ["a11c", "a15c", "a6e", "a19"],
      answer: "a11c",
    },
  },
  {
    infoTitle: "t4_title",
    infoText: "t4_text",
    svg: () => (
      <StatsLessonSvg accent="#FDE047" values={[4, 6, 4, 6]} footer="sum 20, mean 5" />
    ),
    bulletKeys: ["t4_b1", "t4_b2", "t4_b3"],
    interactive: {
      type: "block-drag",
      mode: "combine",
      groups: [4, 6, 4, 6],
      answer: 20,
      blockColor: "#FACC15",
      instruction: "t4_inst",
      hint1: "t4_h1",
      hint2: "t4_h2",
    },
    quiz: {
      question: "t4_q",
      choices: ["a9c", "a8f", "a10d", "a36b"],
      answer: "a9c",
    },
  },
];

export const ALGEBRAEXPLORER7_DEF: ExplorerDef = makeExplorer(
  "🔤",
  ALGEBRAEXPLORER7_LABELS,
  ALGEBRAEXPLORER7_TOPICS,
);

export const CIRCLEEXPLORER7_DEF: ExplorerDef = makeExplorer(
  "⭕",
  CIRCLEEXPLORER7_LABELS,
  CIRCLEEXPLORER7_TOPICS,
);

export const EQUATIONEXPLORER7_DEF: ExplorerDef = makeExplorer(
  "⚖️",
  EQUATIONEXPLORER7_LABELS,
  EQUATIONEXPLORER7_TOPICS,
);

export const INEQUALITYEXPLORER7_DEF: ExplorerDef = makeExplorer(
  "📊",
  INEQUALITYEXPLORER7_LABELS,
  INEQUALITYEXPLORER7_TOPICS,
);

export const POWEREXPLORER7_DEF: ExplorerDef = makeExplorer(
  "⚡",
  POWEREXPLORER7_LABELS,
  POWEREXPLORER7_TOPICS,
);

export const PYTHAGORASEXPLORER7_DEF: ExplorerDef = makeExplorer(
  "📏",
  PYTHAGORASEXPLORER7_LABELS,
  PYTHAGORASEXPLORER7_TOPICS,
);

export const STATEXPLORER7_DEF: ExplorerDef = makeExplorer(
  "📉",
  STATEXPLORER7_LABELS,
  STATEXPLORER7_TOPICS,
);

export const TRIANGLEEXPLORER7_DEF: ExplorerDef = makeExplorer(
  "📐",
  TRIANGLEEXPLORER7_LABELS,
  TRIANGLEEXPLORER7_TOPICS,
);
