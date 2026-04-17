// lib/explorerPools/romanaC2.ts — AstroRomână Clasa 2
import type { PoolTopicDef } from "./types";

type Pair4 = [[string, string], [string, string], [string, string], [string, string]];
type GapSpec = {
  sentence: string;
  choices: [string, string, string, string];
  correctIndex: number;
  question: string;
};
type BucketSpec = {
  bucket1: string;
  bucket2: string;
  items: { text: string; bucketId: "b1" | "b2" }[];
};

type IslandSpec = {
  key: string;
  explorerTitle: string;
  color: string;
  focusLabel: string;
  correctWords: string[];
  wrongWords: string[];
  gaps: [GapSpec, GapSpec, GapSpec];
  pairs: [Pair4, Pair4, Pair4];
  buckets: [BucketSpec, BucketSpec, BucketSpec];
};

type IslandBuilt = {
  labels: Record<string, Record<string, string>>;
  pool: PoolTopicDef[];
};

const BASE_TITLES = [
  "Recunoaștere",
  "Completare",
  "Potrivire",
  "Sortare",
  "Alegere rapidă",
] as const;

function difficultyFor(topic: number): "easy" | "medium" | "hard" {
  if (topic <= 5) return "easy";
  if (topic <= 10) return "medium";
  return "hard";
}

function pickByCycle(arr: string[], start: number, count: number): string[] {
  const out: string[] = [];
  for (let i = 0; i < count; i++) out.push(arr[(start + i) % arr.length]);
  return out;
}

function buildIsland(spec: IslandSpec): IslandBuilt {
  const ro: Record<string, string> = { explorer_title: spec.explorerTitle };
  const pool: PoolTopicDef[] = [];

  for (let t = 1; t <= 15; t++) {
    const phase = (t - 1) % 5; // 0 highlight, 1 gap, 2 match, 3 bucket, 4 sling
    const level = Math.floor((t - 1) / 5); // 0,1,2
    const diff = difficultyFor(t);
    const title = `${BASE_TITLES[phase]} ${level + 1}: ${spec.focusLabel}`;

    ro[`t${t}_title`] = title;
    ro[`t${t}_text`] =
      phase === 0
        ? `Alegem cuvintele corecte din tema „${spec.focusLabel}”.`
        : phase === 1
          ? `Completăm propoziția cu varianta potrivită pentru tema „${spec.focusLabel}”.`
          : phase === 2
            ? `Potrivim perechi corecte din tema „${spec.focusLabel}”.`
            : phase === 3
              ? `Sortăm elementele în două grupe simple pentru tema „${spec.focusLabel}”.`
              : `Alegem rapid răspunsurile corecte din tema „${spec.focusLabel}”.`;
    ro[`t${t}_inst`] =
      phase === 0
        ? "Atinge elementele corecte."
        : phase === 1
          ? "Completează propoziția."
          : phase === 2
            ? "Potrivește perechile."
            : phase === 3
              ? "Grupează elementele."
              : "Lovește doar răspunsurile corecte.";
    ro[`t${t}_h1`] = "Citește cu atenție fiecare variantă.";
    ro[`t${t}_h2`] = "Alege răspunsul care se potrivește cel mai bine.";

    if (phase === 0) {
      const c = pickByCycle(spec.correctWords, level * 3, 3);
      const w = pickByCycle(spec.wrongWords, level * 3, 3);
      const tokens = [c[0], w[0], c[1], w[1], c[2], w[2]];
      tokens.forEach((tok, i) => (ro[`t${t}_w${i + 1}`] = tok));

      ro[`t${t}_q`] = `Care cuvânt aparține temei „${spec.focusLabel}”?`;
      ro[`t${t}_qa`] = c[0];
      ro[`t${t}_qb`] = w[0];
      ro[`t${t}_qc`] = w[1];
      ro[`t${t}_qd`] = w[2];

      pool.push({
        difficulty: diff,
        infoTitle: `t${t}_title`,
        infoText: `t${t}_text`,
        svg: {
          type: "text-bubbles",
          items: [
            { text: c[0], color: "#1E3A8A", bg: "#DBEAFE" },
            { text: c[1], color: "#1D4ED8", bg: "#BFDBFE" },
            { text: c[2], color: "#2563EB", bg: "#93C5FD" },
          ],
        },
        hintKey: `t${t}_h1`,
        interactive: {
          type: "highlight-text",
          tokens: [`t${t}_w1`, `t${t}_w2`, `t${t}_w3`, `t${t}_w4`, `t${t}_w5`, `t${t}_w6`],
          correctIndices: [0, 2, 4],
          instruction: `t${t}_inst`,
          hint1: `t${t}_h1`,
          hint2: `t${t}_h2`,
        },
        quiz: {
          question: `t${t}_q`,
          choices: [`t${t}_qa`, `t${t}_qb`, `t${t}_qc`, `t${t}_qd`],
          answer: `t${t}_qa`,
        },
      });
      continue;
    }

    if (phase === 1) {
      const gap = spec.gaps[level];
      ro[`t${t}_sent`] = gap.sentence;
      ro[`t${t}_c1`] = gap.choices[0];
      ro[`t${t}_c2`] = gap.choices[1];
      ro[`t${t}_c3`] = gap.choices[2];
      ro[`t${t}_c4`] = gap.choices[3];
      ro[`t${t}_q`] = gap.question;
      ro[`t${t}_qa`] = gap.choices[gap.correctIndex];
      ro[`t${t}_qb`] = gap.choices[(gap.correctIndex + 1) % 4];
      ro[`t${t}_qc`] = gap.choices[(gap.correctIndex + 2) % 4];
      ro[`t${t}_qd`] = gap.choices[(gap.correctIndex + 3) % 4];

      pool.push({
        difficulty: diff,
        infoTitle: `t${t}_title`,
        infoText: `t${t}_text`,
        svg: { type: "sentence-display", words: [gap.sentence.replace("___", "...")], color: spec.color },
        hintKey: `t${t}_h1`,
        interactive: {
          type: "gap-fill",
          sentence: `t${t}_sent`,
          choices: [`t${t}_c1`, `t${t}_c2`, `t${t}_c3`, `t${t}_c4`],
          correctIndex: gap.correctIndex,
          instruction: `t${t}_inst`,
          hint1: `t${t}_h1`,
          hint2: `t${t}_h2`,
        },
        quiz: {
          question: `t${t}_q`,
          choices: [`t${t}_qa`, `t${t}_qb`, `t${t}_qc`, `t${t}_qd`],
          answer: `t${t}_qa`,
        },
      });
      continue;
    }

    if (phase === 2) {
      const pairs = spec.pairs[level];
      pairs.forEach((p, i) => {
        ro[`t${t}_l${i + 1}`] = p[0];
        ro[`t${t}_r${i + 1}`] = p[1];
      });
      ro[`t${t}_q`] = "Care pereche este corectă?";
      ro[`t${t}_qa`] = `${pairs[0][0]} - ${pairs[0][1]}`;
      ro[`t${t}_qb`] = `${pairs[1][0]} - ${pairs[0][1]}`;
      ro[`t${t}_qc`] = `${pairs[2][0]} - ${pairs[3][1]}`;
      ro[`t${t}_qd`] = `${pairs[3][0]} - ${pairs[1][1]}`;

      pool.push({
        difficulty: diff,
        infoTitle: `t${t}_title`,
        infoText: `t${t}_text`,
        svg: {
          type: "letter-pairs",
          pairs: [
            [pairs[0][0], pairs[0][1]],
            [pairs[1][0], pairs[1][1]],
            [pairs[2][0], pairs[2][1]],
          ],
          color: spec.color,
        },
        hintKey: `t${t}_h1`,
        interactive: {
          type: "match-pairs",
          pairs: [
            { left: `t${t}_l1`, right: `t${t}_r1` },
            { left: `t${t}_l2`, right: `t${t}_r2` },
            { left: `t${t}_l3`, right: `t${t}_r3` },
            { left: `t${t}_l4`, right: `t${t}_r4` },
          ],
          instruction: `t${t}_inst`,
          hint1: `t${t}_h1`,
          hint2: `t${t}_h2`,
        },
        quiz: {
          question: `t${t}_q`,
          choices: [`t${t}_qa`, `t${t}_qb`, `t${t}_qc`, `t${t}_qd`],
          answer: `t${t}_qa`,
        },
      });
      continue;
    }

    if (phase === 3) {
      const bucket = spec.buckets[level];
      ro[`t${t}_b1`] = bucket.bucket1;
      ro[`t${t}_b2`] = bucket.bucket2;
      bucket.items.forEach((it, i) => {
        ro[`t${t}_i${i + 1}`] = it.text;
      });
      const inB1 = bucket.items.find((x) => x.bucketId === "b1")?.text ?? bucket.items[0].text;
      ro[`t${t}_q`] = `În ce grupă intră „${inB1}”?`;
      ro[`t${t}_qa`] = bucket.bucket1;
      ro[`t${t}_qb`] = bucket.bucket2;
      ro[`t${t}_qc`] = "Ambele";
      ro[`t${t}_qd`] = "Niciuna";

      pool.push({
        difficulty: diff,
        infoTitle: `t${t}_title`,
        infoText: `t${t}_text`,
        svg: {
          type: "icon-grid",
          items: [
            { emoji: "📘", label: bucket.bucket1 },
            { emoji: "📗", label: bucket.bucket2 },
          ],
          bg: "#EFF6FF",
        },
        hintKey: `t${t}_h1`,
        interactive: {
          type: "physics-bucket",
          buckets: [
            { id: "b1", label: `t${t}_b1` },
            { id: "b2", label: `t${t}_b2` },
          ],
          items: bucket.items.map((it, idx) => ({ text: `t${t}_i${idx + 1}`, bucketId: it.bucketId })),
          instruction: `t${t}_inst`,
          hint1: `t${t}_h1`,
          hint2: `t${t}_h2`,
        },
        quiz: {
          question: `t${t}_q`,
          choices: [`t${t}_qa`, `t${t}_qb`, `t${t}_qc`, `t${t}_qd`],
          answer: `t${t}_qa`,
        },
      });
      continue;
    }

    const c = pickByCycle(spec.correctWords, level * 2, 3);
    const w = pickByCycle(spec.wrongWords, level * 2, 3);
    ro[`t${t}_qmain`] = `Care variante aparțin temei „${spec.focusLabel}”?`;
    ro[`t${t}_t1`] = c[0];
    ro[`t${t}_t2`] = w[0];
    ro[`t${t}_t3`] = c[1];
    ro[`t${t}_t4`] = w[1];
    ro[`t${t}_t5`] = c[2];
    ro[`t${t}_t6`] = w[2];
    ro[`t${t}_q`] = `Ce variantă este corectă pentru „${spec.focusLabel}”?`;
    ro[`t${t}_qa`] = c[0];
    ro[`t${t}_qb`] = w[0];
    ro[`t${t}_qc`] = w[1];
    ro[`t${t}_qd`] = w[2];

    pool.push({
      difficulty: diff,
      infoTitle: `t${t}_title`,
      infoText: `t${t}_text`,
      svg: { type: "word-display", word: c[0], color: spec.color, subtitle: "Ținte corecte" },
      hintKey: `t${t}_h1`,
      interactive: {
        type: "physics-slingshot",
        question: `t${t}_qmain`,
        targets: [
          { id: "a", text: `t${t}_t1`, isCorrect: true },
          { id: "b", text: `t${t}_t2`, isCorrect: false },
          { id: "c", text: `t${t}_t3`, isCorrect: true },
          { id: "d", text: `t${t}_t4`, isCorrect: false },
          { id: "e", text: `t${t}_t5`, isCorrect: true },
          { id: "f", text: `t${t}_t6`, isCorrect: false },
        ],
        instruction: `t${t}_inst`,
        hint1: `t${t}_h1`,
        hint2: `t${t}_h2`,
      },
      quiz: {
        question: `t${t}_q`,
        choices: [`t${t}_qa`, `t${t}_qb`, `t${t}_qc`, `t${t}_qd`],
        answer: `t${t}_qa`,
      },
    });
  }

  return { labels: { ro }, pool };
}

const SUBST2_DATA = buildIsland({
  key: "SUBST2",
  explorerTitle: "Substantivul",
  color: "#3B82F6",
  focusLabel: "substantiv",
  correctWords: ["copil", "carte", "ploaie", "ghiozdan", "pisică", "oraș", "floare", "nor"],
  wrongWords: ["aleargă", "frumos", "repede", "scrie", "vesel", "citește", "înalt", "cântă"],
  gaps: [
    { sentence: "Pe bancă este un ___.", choices: ["caiet", "scrie", "repede", "vesel"], correctIndex: 0, question: "Ce cuvânt completează corect propoziția?" },
    { sentence: "Pe cer sunt mulți ___.", choices: ["nori", "aleargă", "frumoși", "scrie"], correctIndex: 0, question: "Care este substantivul corect?" },
    { sentence: "În curte se joacă un ___.", choices: ["copil", "cântă", "vesel", "repede"], correctIndex: 0, question: "Ce substantiv se potrivește?" },
  ],
  pairs: [
    [["copil", "copii"], ["carte", "cărți"], ["floare", "flori"], ["nor", "nori"]],
    [["pisică", "ființă"], ["ghiozdan", "lucru"], ["ploaie", "fenomen"], ["Ana", "nume propriu"]],
    [["Mara", "propriu"], ["elev", "comun"], ["Cluj", "propriu"], ["copac", "comun"]],
  ],
  buckets: [
    { bucket1: "Ființe", bucket2: "Lucruri", items: [{ text: "elev", bucketId: "b1" }, { text: "pisică", bucketId: "b1" }, { text: "carte", bucketId: "b2" }, { text: "masă", bucketId: "b2" }, { text: "fată", bucketId: "b1" }, { text: "creion", bucketId: "b2" }] },
    { bucket1: "Comune", bucket2: "Proprii", items: [{ text: "oraș", bucketId: "b1" }, { text: "Ana", bucketId: "b2" }, { text: "copil", bucketId: "b1" }, { text: "Iași", bucketId: "b2" }, { text: "caiet", bucketId: "b1" }, { text: "Mihai", bucketId: "b2" }] },
    { bucket1: "Singular", bucket2: "Plural", items: [{ text: "măr", bucketId: "b1" }, { text: "mere", bucketId: "b2" }, { text: "copil", bucketId: "b1" }, { text: "copii", bucketId: "b2" }, { text: "nor", bucketId: "b1" }, { text: "nori", bucketId: "b2" }] },
  ],
});

const VERB2_DATA = buildIsland({
  key: "VERB2",
  explorerTitle: "Verbul",
  color: "#2563EB",
  focusLabel: "verb",
  correctWords: ["aleargă", "scrie", "citește", "cântă", "desenează", "zboară", "joacă", "merge"],
  wrongWords: ["copil", "carte", "frumos", "ghiozdan", "vesel", "masă", "floare", "rapid"],
  gaps: [
    { sentence: "Elevul ___ o carte.", choices: ["carte", "citește", "frumos", "bancă"], correctIndex: 1, question: "Ce verb completează propoziția?" },
    { sentence: "Noi ___ în clasă.", choices: ["citește", "citim", "citești", "citesc"], correctIndex: 1, question: "Ce formă este corectă cu „noi”?" },
    { sentence: "Dimineața, păsările ___.", choices: ["cântă", "cuib", "frumoase", "aripi"], correctIndex: 0, question: "Ce verb este potrivit?" },
  ],
  pairs: [
    [["eu", "citesc"], ["tu", "citești"], ["el", "citește"], ["noi", "citim"]],
    [["aleargă", "ce face?"], ["cântă", "ce face?"], ["scrie", "ce face?"], ["dansează", "ce face?"]],
    [["a citit", "trecut"], ["citește", "prezent"], ["va citi", "viitor"], ["a alergat", "trecut"]],
  ],
  buckets: [
    { bucket1: "Verbe", bucket2: "Nu sunt verbe", items: [{ text: "sare", bucketId: "b1" }, { text: "desenează", bucketId: "b1" }, { text: "masă", bucketId: "b2" }, { text: "frumos", bucketId: "b2" }, { text: "cântă", bucketId: "b1" }, { text: "copil", bucketId: "b2" }] },
    { bucket1: "Acțiuni", bucket2: "Obiecte", items: [{ text: "aleargă", bucketId: "b1" }, { text: "scrie", bucketId: "b1" }, { text: "ghiozdan", bucketId: "b2" }, { text: "carte", bucketId: "b2" }, { text: "zboară", bucketId: "b1" }, { text: "bancă", bucketId: "b2" }] },
    { bucket1: "Corect", bucket2: "Greșit", items: [{ text: "eu merg", bucketId: "b1" }, { text: "noi mergem", bucketId: "b1" }, { text: "tu merg", bucketId: "b2" }, { text: "el mergem", bucketId: "b2" }, { text: "voi citiți", bucketId: "b1" }, { text: "ei citești", bucketId: "b2" }] },
  ],
});

const ADJ2_DATA = buildIsland({
  key: "ADJ2",
  explorerTitle: "Adjectivul",
  color: "#1D4ED8",
  focusLabel: "adjectiv",
  correctWords: ["mare", "vesel", "curat", "albastru", "rece", "frumos", "harnic", "lung"],
  wrongWords: ["copil", "scrie", "carte", "aleargă", "ghiozdan", "citește", "pisică", "oraș"],
  gaps: [
    { sentence: "Mărul este ___.", choices: ["roșu", "măr", "cade", "copil"], correctIndex: 0, question: "Ce adjectiv se potrivește?" },
    { sentence: "Copiii sunt ___.", choices: ["vesel", "veseli", "veselie", "a veseli"], correctIndex: 1, question: "Ce formă este corectă?" },
    { sentence: "Apa de la munte este ___.", choices: ["rece", "munte", "curge", "izvor"], correctIndex: 0, question: "Care este adjectivul potrivit?" },
  ],
  pairs: [
    [["cer", "albastru"], ["iarbă", "verde"], ["zăpadă", "albă"], ["soare", "strălucitor"]],
    [["frumos", "cum este?"], ["lung", "cum este?"], ["rapid", "cum este?"], ["curat", "cum este?"]],
    [["mare", "mic"], ["cald", "rece"], ["curat", "murdar"], ["vesel", "trist"]],
  ],
  buckets: [
    { bucket1: "Adjective", bucket2: "Substantive", items: [{ text: "frumos", bucketId: "b1" }, { text: "mare", bucketId: "b1" }, { text: "copil", bucketId: "b2" }, { text: "ghiozdan", bucketId: "b2" }, { text: "vesel", bucketId: "b1" }, { text: "floare", bucketId: "b2" }] },
    { bucket1: "Pozitive", bucket2: "Negative", items: [{ text: "harnic", bucketId: "b1" }, { text: "politicos", bucketId: "b1" }, { text: "leneș", bucketId: "b2" }, { text: "neatent", bucketId: "b2" }, { text: "curajos", bucketId: "b1" }, { text: "răutăcios", bucketId: "b2" }] },
    { bucket1: "Corect", bucket2: "Greșit", items: [{ text: "fete vesele", bucketId: "b1" }, { text: "băiat vesel", bucketId: "b1" }, { text: "fete vesel", bucketId: "b2" }, { text: "băiat vesele", bucketId: "b2" }, { text: "mere roșii", bucketId: "b1" }, { text: "măr roșii", bucketId: "b2" }] },
  ],
});

const ART2_DATA = buildIsland({
  key: "ART2",
  explorerTitle: "Articolul",
  color: "#1E40AF",
  focusLabel: "articol",
  correctWords: ["un", "o", "niște", "copilul", "cartea", "fata", "merele", "băiatul"],
  wrongWords: ["copil", "frumos", "scrie", "aleargă", "carte", "vesel", "merge", "floare"],
  gaps: [
    { sentence: "Am ___ măr în ghiozdan.", choices: ["o", "un", "niște", "la"], correctIndex: 1, question: "Ce articol este corect?" },
    { sentence: "Pe masă sunt ___ creioane.", choices: ["un", "o", "niște", "copilul"], correctIndex: 2, question: "Ce articol alegem la plural?" },
    { sentence: "Pe bancă este ___.", choices: ["o carte", "cartea", "carte", "niște carte"], correctIndex: 1, question: "Care formă are articol hotărât?" },
  ],
  pairs: [
    [["un", "băiat"], ["o", "fată"], ["niște", "mere"], ["un", "caiet"]],
    [["copil", "copilul"], ["carte", "cartea"], ["fată", "fata"], ["mere", "merele"]],
    [["un", "singular"], ["o", "singular"], ["niște", "plural"], ["copilul", "hotărât"]],
  ],
  buckets: [
    { bucket1: "Articole", bucket2: "Nu sunt articole", items: [{ text: "un", bucketId: "b1" }, { text: "o", bucketId: "b1" }, { text: "niște", bucketId: "b1" }, { text: "copil", bucketId: "b2" }, { text: "frumos", bucketId: "b2" }, { text: "scrie", bucketId: "b2" }] },
    { bucket1: "Nehotărât", bucket2: "Hotărât", items: [{ text: "un copil", bucketId: "b1" }, { text: "o fată", bucketId: "b1" }, { text: "copilul", bucketId: "b2" }, { text: "cartea", bucketId: "b2" }, { text: "niște mere", bucketId: "b1" }, { text: "fata", bucketId: "b2" }] },
    { bucket1: "Corect", bucket2: "Greșit", items: [{ text: "un băiat", bucketId: "b1" }, { text: "o fată", bucketId: "b1" }, { text: "o băiat", bucketId: "b2" }, { text: "un fată", bucketId: "b2" }, { text: "niște mere", bucketId: "b1" }, { text: "niște măr", bucketId: "b2" }] },
  ],
});

const ORT2_DATA = buildIsland({
  key: "ORT2",
  explorerTitle: "Ortografia",
  color: "#1D4ED8",
  focusLabel: "ortografie corectă",
  correctWords: ["școală", "țară", "înger", "mână", "ceas", "câine", "România", "pădure"],
  wrongWords: ["scoala", "tara", "inger", "mana", "keas", "cîine", "românia", "padure"],
  gaps: [
    { sentence: "Merg la ___.", choices: ["scoala", "școală", "skola", "șkoală"], correctIndex: 1, question: "Cum scriem corect?" },
    { sentence: "În curte este un ___.", choices: ["cîine", "câine", "caine", "caină"], correctIndex: 1, question: "Care variantă este corectă?" },
    { sentence: "România este o ___.", choices: ["tara", "țară", "țaraa", "tzară"], correctIndex: 1, question: "Ce formă este corectă?" },
  ],
  pairs: [
    [["scoala", "școală"], ["tara", "țară"], ["inger", "înger"], ["sarpe", "șarpe"]],
    [["ceas", "ce"], ["cireș", "ci"], ["ger", "ge"], ["girafă", "gi"]],
    [[".", "enunț afirmativ"], ["?", "întrebare"], ["!", "exclamare"], [",", "enumerare"]],
  ],
  buckets: [
    { bucket1: "Corect", bucket2: "Greșit", items: [{ text: "școală", bucketId: "b1" }, { text: "țară", bucketId: "b1" }, { text: "scoala", bucketId: "b2" }, { text: "tara", bucketId: "b2" }, { text: "înger", bucketId: "b1" }, { text: "inger", bucketId: "b2" }] },
    { bucket1: "Corect", bucket2: "Greșit", items: [{ text: "ceas", bucketId: "b1" }, { text: "cireș", bucketId: "b1" }, { text: "keas", bucketId: "b2" }, { text: "kireș", bucketId: "b2" }, { text: "cer", bucketId: "b1" }, { text: "ker", bucketId: "b2" }] },
    { bucket1: "Majusculă corectă", bucket2: "Scriere greșită", items: [{ text: "România", bucketId: "b1" }, { text: "Ana", bucketId: "b1" }, { text: "românia", bucketId: "b2" }, { text: "ana", bucketId: "b2" }, { text: "București", bucketId: "b1" }, { text: "bucurești", bucketId: "b2" }] },
  ],
});

const PROP2_DATA = buildIsland({
  key: "PROP2",
  explorerTitle: "Propoziția simplă",
  color: "#2563EB",
  focusLabel: "propoziție simplă",
  correctWords: ["Ana citește.", "Noi scriem.", "Ei aleargă.", "Unde mergi?", "Ce frumos!", "Copiii joacă.", "Tu vii?", "Fata cântă."],
  wrongWords: ["în parc", "după școală", "foarte frumos", "pe bancă", "și mere", "la casă", "în clasă", "repede"],
  gaps: [
    { sentence: "Ana ___ o poveste.", choices: ["carte", "citește", "frumoasă", "bancă"], correctIndex: 1, question: "Ce verb completează propoziția?" },
    { sentence: "Copiii ___ în curte.", choices: ["aleargă", "curte", "frumoși", "copiii"], correctIndex: 0, question: "Care este predicatul corect?" },
    { sentence: "Pasărea ___ sus.", choices: ["aripă", "zboară", "frumoasă", "copac"], correctIndex: 1, question: "Ce verb se potrivește?" },
  ],
  pairs: [
    [["fata", "citește"], ["copiii", "aleargă"], ["pasărea", "cântă"], ["noi", "desenăm"]],
    [["Ana citește.", "afirmativă"], ["Unde mergi?", "interogativă"], ["Noi scriem.", "afirmativă"], ["Vii acasă?", "interogativă"]],
    [["Începe cu majusculă", "Ana vine."], ["Se termină cu punct", "Noi citim."], ["Se termină cu întrebare", "Unde mergi?"], ["Se termină cu exclamare", "Ce frumos!"]],
  ],
  buckets: [
    { bucket1: "Complete", bucket2: "Incomplet", items: [{ text: "Noi desenăm.", bucketId: "b1" }, { text: "În parc", bucketId: "b2" }, { text: "Fata cântă.", bucketId: "b1" }, { text: "Pe masă", bucketId: "b2" }, { text: "Ei citesc.", bucketId: "b1" }, { text: "După școală", bucketId: "b2" }] },
    { bucket1: "Afirmative", bucket2: "Interogative", items: [{ text: "Ana citește.", bucketId: "b1" }, { text: "Unde mergi?", bucketId: "b2" }, { text: "Noi scriem.", bucketId: "b1" }, { text: "Vii mâine?", bucketId: "b2" }, { text: "El aleargă.", bucketId: "b1" }, { text: "Ai creion?", bucketId: "b2" }] },
    { bucket1: "Corect", bucket2: "Greșit", items: [{ text: "Ana citește cartea.", bucketId: "b1" }, { text: "Citește Ana cartea.", bucketId: "b1" }, { text: "Cartea Ana citește.", bucketId: "b2" }, { text: "Copiii în aleargă curte.", bucketId: "b2" }, { text: "Noi scriem.", bucketId: "b1" }, { text: "În parc noi", bucketId: "b2" }] },
  ],
});

const PUNCTS2_DATA = buildIsland({
  key: "PUNCTS2",
  explorerTitle: "Punctuația",
  color: "#1D4ED8",
  focusLabel: "punctuație",
  correctWords: [".", "?", "!", ",", "Ana citește.", "Unde mergi?", "Ce frumos!", "Mere, pere, prune"],
  wrongWords: ["copil", "carte", "Ana citește?", "Unde mergi.", "Ce frumos.", "Mere pere prune", "frumos", "aleargă"],
  gaps: [
    { sentence: "Ana citește___", choices: [".", "?", "!", ","], correctIndex: 0, question: "Ce semn se potrivește la final?" },
    { sentence: "Unde mergi___", choices: [".", "?", "!", ","], correctIndex: 1, question: "Ce semn arată întrebare?" },
    { sentence: "Ce frumos este___", choices: [".", "?", "!", ","], correctIndex: 2, question: "Ce semn folosești la exclamație?" },
  ],
  pairs: [
    [[".", "enunț afirmativ"], ["?", "întrebare"], ["!", "exclamare"], [",", "enumerare"]],
    [["Ana citește", "."], ["Unde mergi", "?"], ["Ce bine", "!"], ["Mere, pere, prune", ","]],
    [["Ai venit?", "întrebare"], ["Noi citim.", "afirmație"], ["Ce minunat!", "exclamare"], ["Mere, pere, prune", "enumerare"]],
  ],
  buckets: [
    { bucket1: "Întrebare", bucket2: "Afirmație", items: [{ text: "Unde mergi?", bucketId: "b1" }, { text: "Ai caiet?", bucketId: "b1" }, { text: "Ana citește.", bucketId: "b2" }, { text: "Noi scriem.", bucketId: "b2" }, { text: "Vii mâine?", bucketId: "b1" }, { text: "Copiii joacă.", bucketId: "b2" }] },
    { bucket1: "Punct", bucket2: "Exclamare", items: [{ text: "Noi citim.", bucketId: "b1" }, { text: "Ana scrie.", bucketId: "b1" }, { text: "Ce frumos!", bucketId: "b2" }, { text: "Bravo!", bucketId: "b2" }, { text: "Copilul desenează.", bucketId: "b1" }, { text: "Ce minunat!", bucketId: "b2" }] },
    { bucket1: "Corect", bucket2: "Greșit", items: [{ text: "Am mere, pere și prune.", bucketId: "b1" }, { text: "Am mere pere și prune.", bucketId: "b2" }, { text: "Caiet, creion, radieră.", bucketId: "b1" }, { text: "Caiet creion radieră.", bucketId: "b2" }, { text: "Ana, Maria și Ioana vin.", bucketId: "b1" }, { text: "Ana Maria și Ioana vin.", bucketId: "b2" }] },
  ],
});

const TEXT2_DATA = buildIsland({
  key: "TEXT2",
  explorerTitle: "Textul narativ",
  color: "#1E3A8A",
  focusLabel: "text narativ",
  correctWords: ["personaj", "loc", "acțiune", "la început", "apoi", "la final", "copil", "pădure"],
  wrongWords: ["ecuație", "triunghi", "înmulțire", "fracție", "diagramă", "algoritm", "x + y", "număr"],
  gaps: [
    { sentence: "___ un copil curios.", choices: ["A fost odată", "La final", "Din cauza", "Și atunci"], correctIndex: 0, question: "Ce formulă poate începe povestea?" },
    { sentence: "În pădure, copilul ___ un pui de pasăre.", choices: ["a găsit", "frumos", "pădure", "copilul"], correctIndex: 0, question: "Ce completează corect mijlocul acțiunii?" },
    { sentence: "Seara, copilul s-a întors acasă ___.", choices: ["fericit", "pădure", "aleargă", "copil"], correctIndex: 0, question: "Ce cuvânt se potrivește la final?" },
  ],
  pairs: [
    [["copilul", "caută"], ["vulpea", "aleargă"], ["bunica", "povestește"], ["pasărea", "zboară"]],
    [["la început", "A fost odată..."], ["apoi", "După aceea..."], ["la final", "În cele din urmă..."], ["morală", "Am învățat că..."]],
    [["personaj", "copilul"], ["loc", "pădure"], ["acțiune", "a salvat"], ["final", "s-a întors acasă"]],
  ],
  buckets: [
    { bucket1: "Personaje", bucket2: "Locuri", items: [{ text: "copil", bucketId: "b1" }, { text: "bunica", bucketId: "b1" }, { text: "sat", bucketId: "b2" }, { text: "pădure", bucketId: "b2" }, { text: "vulpe", bucketId: "b1" }, { text: "parc", bucketId: "b2" }] },
    { bucket1: "Început", bucket2: "Continuare și final", items: [{ text: "A fost odată un copil.", bucketId: "b1" }, { text: "Într-o zi a plecat.", bucketId: "b2" }, { text: "La început trăia în sat.", bucketId: "b1" }, { text: "Apoi a găsit un pui.", bucketId: "b2" }, { text: "Demult, într-o pădure...", bucketId: "b1" }, { text: "În final s-a întors acasă.", bucketId: "b2" }] },
    { bucket1: "Real", bucket2: "Imaginar", items: [{ text: "copil", bucketId: "b1" }, { text: "sat", bucketId: "b1" }, { text: "dragon", bucketId: "b2" }, { text: "baghetă magică", bucketId: "b2" }, { text: "pădure", bucketId: "b1" }, { text: "covor zburător", bucketId: "b2" }] },
  ],
});

const RECAP2_DATA = buildIsland({
  key: "RECAP2",
  explorerTitle: "Recapitulare C2",
  color: "#3B82F6",
  focusLabel: "recapitulare",
  correctWords: ["carte", "citește", "frumos", "școală", "Ana citește.", "un", "?", "personaj"],
  wrongWords: ["scoala", "o băiat", "în parc", "scrie? (fără context)", "keas", "tu merg", "ecuație", "triunghi"],
  gaps: [
    { sentence: "Elevul ___ lecția.", choices: ["lecția", "citește", "frumos", "bancă"], correctIndex: 1, question: "Ce formă este corectă?" },
    { sentence: "Am ___ fată veselă în clasă.", choices: ["un", "o", "niște", "din"], correctIndex: 1, question: "Ce articol este corect?" },
    { sentence: "Unde mergi___", choices: [".", "?", "!", ","], correctIndex: 1, question: "Ce semn se potrivește?" },
  ],
  pairs: [
    [["substantiv", "carte"], ["verb", "aleargă"], ["adjectiv", "vesel"], ["articol", "un"]],
    [["Ana citește.", "afirmativ"], ["Ai venit?", "interogativ"], ["Ce frumos!", "exclamativ"], ["Mere, pere, prune", "enumerare"]],
    [["mare", "mic"], ["cald", "rece"], ["vesel", "trist"], ["curat", "murdar"]],
  ],
  buckets: [
    { bucket1: "Substantive", bucket2: "Verbe", items: [{ text: "carte", bucketId: "b1" }, { text: "copil", bucketId: "b1" }, { text: "citește", bucketId: "b2" }, { text: "aleargă", bucketId: "b2" }, { text: "ploaie", bucketId: "b1" }, { text: "scrie", bucketId: "b2" }] },
    { bucket1: "Corect", bucket2: "Greșit", items: [{ text: "școală", bucketId: "b1" }, { text: "scoala", bucketId: "b2" }, { text: "un băiat", bucketId: "b1" }, { text: "o băiat", bucketId: "b2" }, { text: "Noi citim.", bucketId: "b1" }, { text: "Noi citim?", bucketId: "b2" }] },
    { bucket1: "Adjective", bucket2: "Articole", items: [{ text: "vesel", bucketId: "b1" }, { text: "frumos", bucketId: "b1" }, { text: "un", bucketId: "b2" }, { text: "o", bucketId: "b2" }, { text: "curat", bucketId: "b1" }, { text: "niște", bucketId: "b2" }] },
  ],
});

export const SUBST2_LABELS: Record<string, Record<string, string>> = SUBST2_DATA.labels;
export const SUBST2_POOL: PoolTopicDef[] = SUBST2_DATA.pool;

export const VERB2_LABELS: Record<string, Record<string, string>> = VERB2_DATA.labels;
export const VERB2_POOL: PoolTopicDef[] = VERB2_DATA.pool;

export const ADJ2_LABELS: Record<string, Record<string, string>> = ADJ2_DATA.labels;
export const ADJ2_POOL: PoolTopicDef[] = ADJ2_DATA.pool;

export const ART2_LABELS: Record<string, Record<string, string>> = ART2_DATA.labels;
export const ART2_POOL: PoolTopicDef[] = ART2_DATA.pool;

export const ORT2_LABELS: Record<string, Record<string, string>> = ORT2_DATA.labels;
export const ORT2_POOL: PoolTopicDef[] = ORT2_DATA.pool;

export const PROP2_LABELS: Record<string, Record<string, string>> = PROP2_DATA.labels;
export const PROP2_POOL: PoolTopicDef[] = PROP2_DATA.pool;

export const PUNCTS2_LABELS: Record<string, Record<string, string>> = PUNCTS2_DATA.labels;
export const PUNCTS2_POOL: PoolTopicDef[] = PUNCTS2_DATA.pool;

export const TEXT2_LABELS: Record<string, Record<string, string>> = TEXT2_DATA.labels;
export const TEXT2_POOL: PoolTopicDef[] = TEXT2_DATA.pool;

export const RECAP2_LABELS: Record<string, Record<string, string>> = RECAP2_DATA.labels;
export const RECAP2_POOL: PoolTopicDef[] = RECAP2_DATA.pool;
