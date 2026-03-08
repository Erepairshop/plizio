/**
 * School Task Generator — iskolai dolgozat stílusú feladatok
 * Generálja a feladatblokkokat osztálynak és országnak megfelelően
 */

import { generateTopicQuestions, getDEThemes, getENThemes, getHUThemes, getROThemes } from './mathCurriculum';

// ─── TYPES ──────────────────────────────────────────────────────────────────

export type SubQuestion = {
  id: string;
  answer: number | string;
  points: number;
};

export type TaskType =
  | 'kopfrechnen'
  | 'schriftlich'
  | 'hiany'
  | 'zahlenreihe'
  | 'sachaufgabe'
  | 'tabelle'
  | 'aufgaben';

export type AufgabenItem = {
  question: string;
  answer: number | string;
};
export type AufgabenData = { items: AufgabenItem[] };

export type KopfrechnenItem = {
  expr: string;      // pl. "6 · 7 = ___" vagy "___ · 2 = 120"
  answer: number;
  hasMissing: boolean; // ha igaz: ___ van a kifejezésben
};
export type KopfrechnenData = { items: KopfrechnenItem[] };

export type SchriftlichItem = {
  a: number;
  b: number;
  op: '+' | '-' | '·' | ':';
  result: number;
};
export type SchriftlichData = { items: SchriftlichItem[] };

export type HianyItem = {
  topRow: (number | null)[];
  addRow: (number | null)[];
  op: '+' | '-';
  resultRow: (number | null)[];
};
export type HianyData = { items: HianyItem[] };

export type ZahlenreiheItem = {
  given: number[];
  blanks: number;
  answers: number[];
  rule: string;
};
export type ZahlenreiheData = { rows: ZahlenreiheItem[] };

export type SachaufgabeItem = {
  text: string;
  calcSpaceLines: number;
  answerUnit: string;
  answer: number | string;
};
export type SachaufgabeData = { items: SachaufgabeItem[] };

export type TabelleData = {
  headers: string[];
  rows: {
    label: string;
    cells: (string | null)[];
    answers: (string | null)[];
  }[];
};

export type SchoolTaskBlock = {
  id: string;
  type: TaskType;
  title: string;
  totalPoints: number;
  subQuestions: SubQuestion[];
  data: KopfrechnenData | SchriftlichData | HianyData | ZahlenreiheData | SachaufgabeData | TabelleData | AufgabenData;
};

export type SchoolTaskAnswers = Record<string, string | number>;

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function rnd(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Szorzástábla tiszta pár (1-10)
function mulPair(): [number, number] {
  return [rnd(2, 10), rnd(2, 10)];
}

// ─── KOPFRECHNEN GENERATOR ────────────────────────────────────────────────────

function generateKopfrechnen(grade: number, cc: string): SchoolTaskBlock {
  const items: KopfrechnenItem[] = [];
  const subQuestions: SubQuestion[] = [];

  if (grade <= 2) {
    // Grade 1-2: összeadás/kivonás 20-100-ig
    const max = grade === 1 ? 20 : 100;
    for (let i = 0; i < 8; i++) {
      const a = rnd(1, max - 1);
      const b = rnd(1, max - a);
      const isAdd = Math.random() > 0.5;
      const expr = isAdd ? `${a} + ${b} = ___` : `${a + b} - ${b} = ___`;
      const answer = isAdd ? a + b : a;
      items.push({ expr, answer, hasMissing: true });
      subQuestions.push({ id: `kopf_${i}`, answer, points: 1 });
    }
  } else if (grade === 3) {
    // Grade 3: szorzás/osztás + hiányzó tényezők
    for (let i = 0; i < 8; i++) {
      const [a, b] = mulPair();
      const result = a * b;
      if (i % 4 === 3) {
        // hiányzó tényező: ___ × b = result
        items.push({ expr: `___ × ${b} = ${result}`, answer: a, hasMissing: true });
      } else if (i % 4 === 2) {
        // osztás
        items.push({ expr: `${result} ÷ ${b} = ___`, answer: a, hasMissing: true });
      } else {
        // szorzás
        items.push({ expr: `${a} × ${b} = ___`, answer: result, hasMissing: true });
      }
      subQuestions.push({ id: `kopf_${i}`, answer: items[i].answer, points: 1 });
    }
  } else {
    // Grade 4+: vegyes fejszámolás
    for (let i = 0; i < 8; i++) {
      let expr = '';
      let answer = 0;
      const type = i % 4;
      if (type === 0) {
        // összeadás 1000-ig
        const a = rnd(100, 900);
        const b = rnd(10, 1000 - a);
        expr = `${a} + ${b} = ___`;
        answer = a + b;
      } else if (type === 1) {
        // kivonás
        const a = rnd(200, 1000);
        const b = rnd(10, a - 1);
        expr = `${a} - ${b} = ___`;
        answer = a - b;
      } else if (type === 2) {
        // szorzás
        const [a, b] = mulPair();
        expr = `${a} × ${b} = ___`;
        answer = a * b;
      } else {
        // hiányzó tényező
        const [a, b] = mulPair();
        const result = a * b;
        expr = `___ × ${b} = ${result}`;
        answer = a;
      }
      items.push({ expr, answer, hasMissing: true });
      subQuestions.push({ id: `kopf_${i}`, answer, points: 1 });
    }
  }

  return {
    id: 'block_kopfrechnen',
    type: 'kopfrechnen',
    title: getTitleFor('kopfrechnen', cc),
    totalPoints: subQuestions.reduce((s, q) => s + q.points, 0),
    subQuestions,
    data: { items } as KopfrechnenData,
  };
}

// ─── SCHRIFTLICH GENERATOR ─────────────────────────────────────────────────────

function generateSchriftlich(grade: number, cc: string): SchoolTaskBlock {
  const items: SchriftlichItem[] = [];
  const subQuestions: SubQuestion[] = [];
  const count = grade <= 2 ? 2 : 3;

  for (let i = 0; i < count; i++) {
    let a: number, b: number, op: '+' | '-' | '·' | ':', result: number;
    if (grade <= 2) {
      a = rnd(10, 99);
      b = rnd(10, a);
      op = i === 0 ? '+' : '-';
      result = op === '+' ? a + b : a - b;
    } else if (grade === 3) {
      if (i < 2) {
        a = rnd(100, 999);
        b = rnd(100, a);
        op = i === 0 ? '+' : '-';
        result = op === '+' ? a + b : a - b;
      } else {
        const [x, y] = mulPair();
        a = x * 10 + rnd(0, 9);
        b = y;
        op = '·';
        result = a * b;
      }
    } else {
      // Grade 4+
      if (i < 2) {
        a = rnd(1000, 9999);
        b = rnd(100, a);
        op = i === 0 ? '+' : '-';
        result = op === '+' ? a + b : a - b;
      } else {
        const base = rnd(100, 999);
        const mult = rnd(2, 9);
        a = base;
        b = mult;
        op = '·';
        result = a * b;
      }
    }
    items.push({ a, b, op, result });
    subQuestions.push({ id: `schr_${i}`, answer: result, points: 2 });
  }

  return {
    id: 'block_schriftlich',
    type: 'schriftlich',
    title: getTitleFor('schriftlich', cc),
    totalPoints: subQuestions.reduce((s, q) => s + q.points, 0),
    subQuestions,
    data: { items } as SchriftlichData,
  };
}

// ─── HIANY GENERATOR ─────────────────────────────────────────────────────────

function generateHiany(grade: number, cc: string): SchoolTaskBlock {
  const items: HianyItem[] = [];
  const subQuestions: SubQuestion[] = [];
  let sqIdx = 0;

  const generateItem = (op: '+' | '-'): HianyItem => {
    if (grade <= 2) {
      const a = rnd(10, 50);
      const b = rnd(5, 30);
      const result = op === '+' ? a + b : a - b;
      // Véletlenszerűen hiányzó cella: felső, alsó, vagy eredmény
      const missingPos = rnd(0, 2);
      return {
        topRow: missingPos === 0 ? [null] : [a],
        addRow: missingPos === 1 ? [null] : [b],
        op,
        resultRow: missingPos === 2 ? [null] : [result],
      };
    } else {
      // 3-4. osztály: 2 jegyű számok
      const a = rnd(100, 500);
      const b = rnd(50, 300);
      const result = op === '+' ? a + b : a - b;
      const missingPos = rnd(0, 2);
      return {
        topRow: missingPos === 0 ? [null] : [a],
        addRow: missingPos === 1 ? [null] : [b],
        op,
        resultRow: missingPos === 2 ? [null] : [result],
      };
    }
  };

  for (let i = 0; i < 3; i++) {
    const op: '+' | '-' = i % 2 === 0 ? '+' : '-';
    const item = generateItem(op);
    items.push(item);

    // Minden null cella egy SubQuestion
    const getVal = (row: (number | null)[]): number | null => {
      const v = row.find(x => x === null);
      return v === undefined ? null : null;
    };

    const nullRows = [
      { row: item.topRow, prefix: 'top' },
      { row: item.addRow, prefix: 'add' },
      { row: item.resultRow, prefix: 'res' },
    ];

    for (const { row, prefix } of nullRows) {
      row.forEach((cell, ci) => {
        if (cell === null) {
          // Find correct answer
          let ans: number;
          if (prefix === 'top') {
            const res = (item.resultRow[0] ?? 0) as number;
            const add = (item.addRow[0] ?? 0) as number;
            ans = op === '+' ? res - add : res + add;
          } else if (prefix === 'add') {
            const res = (item.resultRow[0] ?? 0) as number;
            const top = (item.topRow[0] ?? 0) as number;
            ans = op === '+' ? res - top : top - res;
          } else {
            const top = (item.topRow[0] ?? 0) as number;
            const add = (item.addRow[0] ?? 0) as number;
            ans = op === '+' ? top + add : top - add;
          }
          subQuestions.push({ id: `hiany_${sqIdx++}`, answer: ans, points: 1 });
        }
      });
    }
  }

  return {
    id: 'block_hiany',
    type: 'hiany',
    title: getTitleFor('hiany', cc),
    totalPoints: subQuestions.reduce((s, q) => s + q.points, 0),
    subQuestions,
    data: { items } as HianyData,
  };
}

// ─── ZAHLENREIHE GENERATOR ────────────────────────────────────────────────────

function generateZahlenreihe(grade: number, cc: string): SchoolTaskBlock {
  const rows: ZahlenreiheItem[] = [];
  const subQuestions: SubQuestion[] = [];
  let sqIdx = 0;

  const patterns: Array<{ start: number; step: number; rule: string }> =
    grade <= 1
      ? [
          { start: 2, step: 2, rule: '+2' },
          { start: 5, step: 5, rule: '+5' },
          { start: 10, step: 10, rule: '+10' },
        ]
      : grade === 2
      ? [
          { start: rnd(2, 8), step: rnd(3, 7), rule: `+${rnd(3,7)}` },
          { start: rnd(50, 100), step: -rnd(5, 10), rule: `-${rnd(5,10)}` },
          { start: rnd(1, 5), step: rnd(10, 20), rule: `+${rnd(10,20)}` },
        ]
      : [
          { start: rnd(5, 20), step: rnd(10, 50), rule: `+${rnd(10,50)}` },
          { start: rnd(100, 300), step: -rnd(11, 25), rule: `-${rnd(11,25)}` },
          { start: 2, step: 2, rule: '×2' }, // csak info, külön kezelt
        ];

  for (let i = 0; i < (grade <= 2 ? 3 : 3); i++) {
    let given: number[];
    let answers: number[];
    let rule: string;

    if (grade >= 3 && i === 2) {
      // szorzó sorozat
      const base = rnd(1, 4);
      const factor = grade >= 4 ? rnd(2, 4) : 2;
      rule = `×${factor}`;
      given = [base, base * factor, base * factor * factor, base * factor ** 3];
      answers = [base * factor ** 4, base * factor ** 5, base * factor ** 6];
    } else {
      const pat = patterns[i] || { start: rnd(1, 20), step: rnd(2, 10), rule: `+${rnd(2,10)}` };
      const actualStep = typeof pat.step === 'number' ? pat.step : rnd(2, 10);
      const start = pat.start;
      rule = pat.rule;
      given = [start, start + actualStep, start + actualStep * 2, start + actualStep * 3];
      answers = [
        start + actualStep * 4,
        start + actualStep * 5,
        start + actualStep * 6,
      ];
    }

    const blanks = 3;
    rows.push({ given, blanks, answers, rule });
    for (let j = 0; j < blanks; j++) {
      subQuestions.push({ id: `zr_${sqIdx++}`, answer: answers[j], points: 1 });
    }
  }

  return {
    id: 'block_zahlenreihe',
    type: 'zahlenreihe',
    title: getTitleFor('zahlenreihe', cc),
    totalPoints: subQuestions.reduce((s, q) => s + q.points, 0),
    subQuestions,
    data: { rows } as ZahlenreiheData,
  };
}

// ─── SACHAUFGABE GENERATOR ────────────────────────────────────────────────────

const SACHAUFGABEN: Record<string, Array<{ template: (cc: string) => SachaufgabeItem }>> = {
  de: [
    {
      template: () => {
        const price = rnd(2, 8);
        const count = rnd(3, 9);
        return {
          text: `${count} Hefte kosten je ${price} €. Wie viel kostet das zusammen?`,
          calcSpaceLines: 3,
          answerUnit: '€',
          answer: price * count,
        };
      },
    },
    {
      template: () => {
        const total = rnd(20, 50);
        const used = rnd(5, total - 5);
        return {
          text: `Eine Klasse hat ${total} Schüler. ${used} Schüler haben eine Hausaufgabe vergessen. Wie viele haben die Hausaufgabe gemacht?`,
          calcSpaceLines: 3,
          answerUnit: 'Schüler',
          answer: total - used,
        };
      },
    },
    {
      template: () => {
        const apples = rnd(10, 30);
        const boxes = rnd(2, 6);
        const perBox = Math.floor(apples / boxes);
        const actual = perBox * boxes;
        return {
          text: `${actual} Äpfel werden gleichmäßig auf ${boxes} Körbe verteilt. Wie viele Äpfel sind in jedem Korb?`,
          calcSpaceLines: 3,
          answerUnit: 'Äpfel',
          answer: perBox,
        };
      },
    },
    {
      template: () => {
        const dist = rnd(10, 50) * 10;
        const speed = rnd(2, 8) * 10;
        return {
          text: `Ein Radfahrer fährt ${dist} km. Er schafft ${speed} km pro Stunde. Wie viele Stunden braucht er?`,
          calcSpaceLines: 3,
          answerUnit: 'Stunden',
          answer: dist / speed,
        };
      },
    },
  ],
  en: [
    {
      template: () => {
        const price = rnd(2, 8);
        const count = rnd(3, 9);
        return {
          text: `${count} notebooks cost $${price} each. How much do they cost in total?`,
          calcSpaceLines: 3,
          answerUnit: '$',
          answer: price * count,
        };
      },
    },
    {
      template: () => {
        const total = rnd(20, 50);
        const absent = rnd(3, total - 5);
        return {
          text: `A class has ${total} students. ${absent} students were absent. How many students were present?`,
          calcSpaceLines: 3,
          answerUnit: 'students',
          answer: total - absent,
        };
      },
    },
    {
      template: () => {
        const apples = rnd(2, 6);
        const perBox = rnd(4, 10);
        return {
          text: `There are ${apples} boxes of apples, each containing ${perBox} apples. How many apples are there in total?`,
          calcSpaceLines: 3,
          answerUnit: 'apples',
          answer: apples * perBox,
        };
      },
    },
  ],
  hu: [
    {
      template: () => {
        const price = rnd(100, 500);
        const count = rnd(3, 8);
        return {
          text: `${count} füzet ára egyenként ${price} Ft. Mennyibe kerül összesen?`,
          calcSpaceLines: 3,
          answerUnit: 'Ft',
          answer: price * count,
        };
      },
    },
    {
      template: () => {
        const total = rnd(20, 50);
        const used = rnd(5, total - 5);
        return {
          text: `Egy osztályban ${total} tanuló van. ${used} tanuló elfelejtette a háziját. Hányan készítették el?`,
          calcSpaceLines: 3,
          answerUnit: 'tanuló',
          answer: total - used,
        };
      },
    },
  ],
  ro: [
    {
      template: () => {
        const price = rnd(5, 20);
        const count = rnd(3, 8);
        return {
          text: `${count} caiete costă câte ${price} lei fiecare. Cât costă în total?`,
          calcSpaceLines: 3,
          answerUnit: 'lei',
          answer: price * count,
        };
      },
    },
    {
      template: () => {
        const total = rnd(20, 40);
        const absent = rnd(3, total - 5);
        return {
          text: `O clasă are ${total} elevi. ${absent} elevi au lipsit. Câți elevi au fost prezenți?`,
          calcSpaceLines: 3,
          answerUnit: 'elevi',
          answer: total - absent,
        };
      },
    },
  ],
};

function generateSachaufgabe(grade: number, cc: string): SchoolTaskBlock {
  const lang = cc === 'DE' || cc === 'AT' || cc === 'CH' ? 'de'
    : cc === 'HU' ? 'hu'
    : cc === 'RO' ? 'ro'
    : 'en';
  const pool = SACHAUFGABEN[lang] || SACHAUFGABEN.en;
  const count = grade <= 2 ? 1 : 2;
  const items: SachaufgabeItem[] = [];
  const subQuestions: SubQuestion[] = [];

  const used = new Set<number>();
  for (let i = 0; i < count; i++) {
    let idx = rnd(0, pool.length - 1);
    while (used.has(idx) && used.size < pool.length) idx = rnd(0, pool.length - 1);
    used.add(idx);
    const item = pool[idx].template(cc);
    items.push(item);
    subQuestions.push({ id: `sach_${i}`, answer: item.answer, points: grade <= 2 ? 2 : 3 });
  }

  return {
    id: 'block_sachaufgabe',
    type: 'sachaufgabe',
    title: getTitleFor('sachaufgabe', cc),
    totalPoints: subQuestions.reduce((s, q) => s + q.points, 0),
    subQuestions,
    data: { items } as SachaufgabeData,
  };
}

// ─── TABELLE GENERATOR ────────────────────────────────────────────────────────

function generateTabelle(grade: number, cc: string): SchoolTaskBlock {
  const subQuestions: SubQuestion[] = [];
  let sqIdx = 0;

  // Ár × darab táblázat
  const pricePerItem = rnd(2, 9);
  const counts = [1, 2, 3, 5, 10];
  const itemName =
    cc === 'DE' || cc === 'AT' || cc === 'CH' ? 'Lutscher'
    : cc === 'HU' ? 'nyalóka'
    : cc === 'RO' ? 'acadea'
    : 'lollipop';

  const priceLabel =
    cc === 'DE' || cc === 'AT' || cc === 'CH' ? 'Preis (€)'
    : cc === 'HU' ? 'Ár (Ft)'
    : cc === 'RO' ? 'Preț (lei)'
    : 'Price ($)';

  const countLabel =
    cc === 'DE' || cc === 'AT' || cc === 'CH' ? 'Anzahl'
    : cc === 'HU' ? 'Darab'
    : cc === 'RO' ? 'Bucăți'
    : 'Count';

  // 3 cella kitöltendő, 2 adott
  const hiddenIndices = new Set<number>();
  while (hiddenIndices.size < 3) hiddenIndices.add(rnd(0, counts.length - 1));

  const cells: (string | null)[] = counts.map((c, i) =>
    hiddenIndices.has(i) ? null : String(pricePerItem * c)
  );
  const answers: (string | null)[] = counts.map((c, i) =>
    hiddenIndices.has(i) ? String(pricePerItem * c) : null
  );

  // subQuestions for hidden cells
  counts.forEach((c, i) => {
    if (hiddenIndices.has(i)) {
      subQuestions.push({ id: `tab_${sqIdx++}`, answer: pricePerItem * c, points: 1 });
    }
  });

  const data: TabelleData = {
    headers: [countLabel, ...counts.map(String)],
    rows: [
      {
        label: priceLabel,
        cells,
        answers,
      },
    ],
  };

  return {
    id: 'block_tabelle',
    type: 'tabelle',
    title: getTitleFor('tabelle', cc),
    totalPoints: subQuestions.reduce((s, q) => s + q.points, 0),
    subQuestions,
    data,
  };
}

// ─── AUFGABEN GENERATOR (topic-driven) ───────────────────────────────────────

function generateAufgabenBlock(
  grade: number,
  cc: string,
  topicKey: string,
  topicName: string,
  itemCount: number,
  blockIdx: number
): SchoolTaskBlock {
  const pool = generateTopicQuestions(grade, topicKey, cc, itemCount + 5);
  const items: AufgabenItem[] = [];
  const subQuestions: SubQuestion[] = [];
  const seen = new Set<string>();

  for (const q of pool) {
    if (items.length >= itemCount) break;
    if (!seen.has(q.question)) {
      seen.add(q.question);
      const item: AufgabenItem = { question: q.question, answer: q.correctAnswer };
      items.push(item);
      subQuestions.push({
        id: `auf_${blockIdx}_${items.length - 1}`,
        answer: q.correctAnswer,
        points: 1,
      });
    }
  }

  return {
    id: `block_aufgaben_${blockIdx}`,
    type: 'aufgaben',
    title: topicName,
    totalPoints: subQuestions.reduce((s, q) => s + q.points, 0),
    subQuestions,
    data: { items } as AufgabenData,
  };
}

// ─── NORMALIZE TO 10 POINTS ──────────────────────────────────────────────────

function normalizeBlocksTo10(blocks: SchoolTaskBlock[]): SchoolTaskBlock[] {
  const rawTotal = blocks.reduce((s, b) => s + b.totalPoints, 0);
  if (rawTotal === 0) return blocks;
  if (rawTotal === 10) return blocks;

  // Proportionally assign integer points to blocks, summing to 10
  const fracs = blocks.map(b => (b.totalPoints / rawTotal) * 10);
  const floors = fracs.map(f => Math.max(1, Math.floor(f)));
  const floorsSum = floors.reduce((a, b) => a + b, 0);
  let remainder = 10 - floorsSum;

  // Give extra points to blocks with largest fractional parts
  const byFrac = fracs
    .map((f, i) => ({ i, frac: f - Math.floor(f) }))
    .sort((a, b) => b.frac - a.frac);

  const normalized = [...floors];
  for (const { i } of byFrac) {
    if (remainder <= 0) break;
    normalized[i]++;
    remainder--;
  }

  // Distribute each block's target points equally among its subQuestions (may be fractional)
  return blocks.map((block, i) => {
    const targetTotal = Math.max(1, normalized[i]);
    const sqCount = block.subQuestions.length;
    if (sqCount === 0) return { ...block, totalPoints: targetTotal };

    const pointPerSq = targetTotal / sqCount;
    const newSubQ = block.subQuestions.map((sq) => ({
      ...sq,
      points: pointPerSq,
    }));

    return { ...block, totalPoints: targetTotal, subQuestions: newSubQ };
  });
}

// ─── TITLE HELPERS ────────────────────────────────────────────────────────────

const TITLES: Record<TaskType, Record<string, string>> = {
  aufgaben: {
    de: 'Aufgaben.',
    en: 'Tasks.',
    hu: 'Feladatok.',
    ro: 'Exerciții.',
  },
  kopfrechnen: {
    de: 'Kopfrechnen.',
    en: 'Mental Math.',
    hu: 'Fejben számolj!',
    ro: 'Calcul mental.',
  },
  schriftlich: {
    de: 'Rechne schriftlich.',
    en: 'Written Calculation.',
    hu: 'Számolj írásban!',
    ro: 'Calculează în scris.',
  },
  hiany: {
    de: 'Welche Zahlen fehlen? Ergänze sie.',
    en: 'Which numbers are missing? Fill them in.',
    hu: 'Melyik számok hiányoznak? Egészítsd ki!',
    ro: 'Ce numere lipsesc? Completează-le.',
  },
  zahlenreihe: {
    de: 'Setze die Zahlenreihen fort.',
    en: 'Continue the number sequences.',
    hu: 'Folytasd a számsorokat!',
    ro: 'Continuă șirurile de numere.',
  },
  sachaufgabe: {
    de: 'Sachaufgaben.',
    en: 'Word Problems.',
    hu: 'Szöveges feladatok.',
    ro: 'Probleme.',
  },
  tabelle: {
    de: 'Ergänze alle Lücken in der Tabelle.',
    en: 'Fill in the table.',
    hu: 'Töltsd ki a táblázatot!',
    ro: 'Completează tabelul.',
  },
};

function getTitleFor(type: TaskType, cc: string): string {
  const lang = cc === 'DE' || cc === 'AT' || cc === 'CH' ? 'de'
    : cc === 'HU' ? 'hu'
    : cc === 'RO' ? 'ro'
    : 'en';
  return TITLES[type][lang] || TITLES[type].en;
}

// ─── ALL TOPICS FALLBACK ─────────────────────────────────────────────────────

function getAllTopicsForGrade(grade: number, cc: string): Array<{ key: string; name: string }> {
  const themes = (cc === 'DE' || cc === 'AT' || cc === 'CH') ? getDEThemes(grade)
    : cc === 'HU' ? getHUThemes(grade)
    : cc === 'RO' ? getROThemes(grade)
    : getENThemes(grade);
  const result: Array<{ key: string; name: string }> = [];
  for (const theme of themes) {
    for (const topic of theme.topics) {
      result.push({ key: topic.key, name: topic.name });
    }
  }
  return result;
}

// ─── TOPIC DIFFICULTY SCALING ────────────────────────────────────────────────

/**
 * How many individual Aufgaben equal 1 point, based on the TOPIC TYPE (difficulty).
 * Easy topics (basic arithmetic, sequences) → more items per point.
 * Hard topics (algebra, equations, functions) → fewer items per point.
 *
 * Very easy  (5/pont): add10, add20, sub20, compare, missing, add100, sub100
 * Easy       (4/pont): sequence, add1000, mul
 * Medium     (3/pont): div, units, place, frac, geo, word, pct, neg, ratio, large
 * Hard       (2/pont): algebra, eq, tri, pyth, sqrt, complex, func, prob, powers
 */
function getItemsPerPointByKey(topicKey: string): number {
  const veryEasy = ['add10', 'add20', 'sub20', 'compare', 'missing', 'add100', 'sub100'];
  const easy     = ['sequence', 'add1000', 'mul'];
  const hard     = ['algebra', 'eq', 'tri', 'pyth', 'sqrt', 'complex', 'func', 'prob', 'powers'];
  if (veryEasy.includes(topicKey)) return 5;
  if (easy.includes(topicKey))     return 4;
  if (hard.includes(topicKey))     return 2;
  return 3; // medium: div, units, place, frac, geo, word, pct, neg, ratio, large, ...
}

// ─── MAIN GENERATOR ──────────────────────────────────────────────────────────

/**
 * Mindig pontosan 10 blokk (= 10 feladatpont) generálódik.
 * Minden blokk = 1 pont, benne 2-5 kérdés a nehézségtől függően:
 *   könnyű téma → 4-5 kérdés/blokk; nehéz téma → 2 kérdés/blokk
 *
 * 1 témakör → 10 blokk mind abból a témából
 * 2 témakör → 5-5 blokk (roundrobin)
 * 3 témakör → 4-3-3 blokk (roundrobin)
 */
const TOTAL_BLOCKS = 10;

export function generateSchoolTest(
  grade: number,
  countryCode: string,
  topicBlocks?: Array<{ key: string; name: string }>
): SchoolTaskBlock[] {
  const cc = countryCode;

  // Resolve which topics to use — provided topics or first 3 of grade
  const effectiveTopics = (topicBlocks && topicBlocks.length > 0)
    ? topicBlocks
    : getAllTopicsForGrade(grade, cc).slice(0, 4);

  if (effectiveTopics.length === 0) return [];

  // Generate exactly 10 blocks, roundrobin across topics.
  // Each block = 1 pont; questions per block depend on topic difficulty.
  const blocks: SchoolTaskBlock[] = [];
  for (let i = 0; i < TOTAL_BLOCKS; i++) {
    const topic = effectiveTopics[i % effectiveTopics.length];
    const questionsInBlock = getItemsPerPointByKey(topic.key); // 2, 3, 4 or 5
    const block = generateAufgabenBlock(grade, cc, topic.key, topic.name, questionsInBlock, i);
    // Each block is worth exactly 1 point; questions share it equally
    const pointPerQ = 1 / questionsInBlock;
    const newSubQ = block.subQuestions.map(sq => ({ ...sq, points: pointPerQ }));
    blocks.push({ ...block, totalPoints: 1, subQuestions: newSubQ });
  }

  return blocks;
}

// ─── GRADING ─────────────────────────────────────────────────────────────────

export function gradeSchoolTest(
  tasks: SchoolTaskBlock[],
  answers: SchoolTaskAnswers
): { earned: number; total: number; percentage: number } {
  let earned = 0;
  let total = 0;
  tasks.forEach((block) => {
    block.subQuestions.forEach((sq) => {
      total += sq.points;
      const userAnswer = answers[sq.id];
      if (
        userAnswer !== undefined &&
        String(userAnswer).trim() === String(sq.answer).trim()
      ) {
        earned += sq.points;
      }
    });
  });
  return {
    earned,
    total,
    percentage: total > 0 ? Math.round((earned / total) * 100) : 0,
  };
}
