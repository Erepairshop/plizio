/**
 * School Task Generator — iskolai dolgozat stílusú feladatok
 * Generálja a feladatblokkokat osztálynak és országnak megfelelően
 */

import { generateTopicQuestions, getDEThemes, getENThemes, getHUThemes, getROThemes } from './mathCurriculum';

// ─── TYPES ──────────────────────────────────────────────────────────────────

export type VisualQuestionType = 'zeichnen' | 'messen' | 'uhrzeit' | 'grid-area' | 'place-value' | 'fraction-pizza' | 'symmetry' | 'sequence' | 'timeline' | 'number-line' | 'angle' | 'circle-draw' | 'money'
  | 'g1-clock' | 'g1-number-line' | 'g1-place-value' | 'g1-grid-count' | 'g1-sequence' | 'g1-coins' | 'g1-timeline' | 'g1-fraction'
  | 'g1-dots' | 'g1-dice' | 'g1-fingers' | 'g1-compare' | 'g1-predecessor' | 'g1-successor'
  | 'g1-addition-pics' | 'g1-subtraction-pics' | 'g1-decompose' | 'g1-completion'
  | 'g1-shapes' | 'g1-directions' | 'g1-patterns'
  | 'g1-length' | 'g1-weight' | 'g1-volume' | 'g1-shopping' | 'g1-wordproblem'
  | 'g3-place-value' | 'g3-pattern' | 'g3-scale' | 'g3-shape' | 'g3-barchart';

export type VisualQuestionData = {
  type: VisualQuestionType;
  params: Record<string, any>; // pl. { targetLength: 5, unit: 'cm' } vagy { targetTime: '3:15' }
};

export type SubQuestion = {
  id: string;
  answer: number | string;
  points: number;
  visualType?: VisualQuestionType;
  visualData?: VisualQuestionData;
  question?: string; // Optional for visual questions
};

export type TaskType =
  | 'kopfrechnen'
  | 'schriftlich'
  | 'hiany'
  | 'zahlenreihe'
  | 'sachaufgabe'
  | 'tabelle'
  | 'aufgaben'
  | 'visual_zeichnen'
  | 'visual_messen'
  | 'visual_uhrzeit'
  | 'visual_grid_area'
  | 'visual_place_value'
  | 'visual_fraction_pizza'
  | 'visual_symmetry'
  | 'visual_sequence'
  | 'visual_timeline'
  | 'visual_number_line'
  | 'visual_angle'
  | 'visual_circle_draw'
  | 'visual_money'
  | 'visual_g1_clock'
  | 'visual_g1_number_line'
  | 'visual_g1_place_value'
  | 'visual_g1_grid_count'
  | 'visual_g1_sequence'
  | 'visual_g1_coins'
  | 'visual_g1_timeline'
  | 'visual_g1_fraction'
  | 'visual_g1_dots'
  | 'visual_g1_dice'
  | 'visual_g1_fingers'
  | 'visual_g1_compare'
  | 'visual_g1_predecessor'
  | 'visual_g1_successor'
  | 'visual_g1_addition_pics'
  | 'visual_g1_subtraction_pics'
  | 'visual_g1_decompose'
  | 'visual_g1_completion'
  | 'visual_g1_shapes'
  | 'visual_g1_directions'
  | 'visual_g1_patterns'
  | 'visual_g1_length'
  | 'visual_g1_weight'
  | 'visual_g1_volume'
  | 'visual_g1_shopping'
  | 'visual_g1_wordproblem'
  | 'visual_g3_place_value'
  | 'visual_g3_pattern'
  | 'visual_g3_scale'
  | 'visual_g3_shape'
  | 'visual_g3_barchart';

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

// Visual task data types
export type VisualZeichnenData = { targetLength: number; unit: string };
export type VisualMessenData = { targetLength: number; unit: string };
export type VisualUhrzeitData = { targetHour: number; targetMinute: number };
export type VisualGridAreaData = { width: number; height: number; mode: 'area' | 'perimeter' };
export type VisualPlaceValueData = { number: number; digits: number };
export type VisualFractionPizzaData = { numerator: number; denominator: number; operation: 'identify' | 'add' };
export type VisualSymmetryData = { gridSize: number; pattern: number[][] };
export type VisualSequenceData = { sequence: number[]; rule: string; blanks: number };
export type VisualTimelineData = { startHour: number; endHour: number; events: { time: number; label: string }[] };
export type VisualNumberLineData = { min: number; max: number; target: number; mode: 'round' | 'place' };
export type VisualAngleData = { targetAngle: number };
export type VisualCircleDrawData = { radius: number };
export type VisualMoneyData = { items: { name: string; price: number }[]; budget: number; mode?: 'total' | 'change' };

export type VisualData = VisualZeichnenData | VisualMessenData | VisualUhrzeitData | VisualGridAreaData | VisualPlaceValueData | VisualFractionPizzaData | VisualSymmetryData | VisualSequenceData | VisualTimelineData | VisualNumberLineData | VisualAngleData | VisualCircleDrawData | VisualMoneyData;

export type SchoolTaskBlock = {
  id: string;
  type: TaskType;
  title: string;
  totalPoints: number;
  subQuestions: SubQuestion[];
  data: KopfrechnenData | SchriftlichData | HianyData | ZahlenreiheData | SachaufgabeData | TabelleData | AufgabenData | VisualData;
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

// ─── VISUAL TASK GENERATORS ──────────────────────────────────────────────────

const VISUAL_TOPIC_KEYS = new Set([
  'zeichnen', 'messen', 'uhrzeit', 'grid_area', 'place_value',
  'fraction_pizza', 'symmetry', 'sequence', 'timeline',
  'number_line', 'angle', 'circle_draw', 'money',
  'g1_clock', 'g1_number_line', 'g1_place_value', 'g1_grid_count',
  'g1_sequence', 'g1_coins', 'g1_timeline', 'g1_fraction',
  // Grade 2 visual topics
  'g2_clock', 'g2_strecken', 'g2_zahlstr', 'g2_stellenwert', 'g2_money',
  // Grade 3 visual topics — new components
  'g3_stellenwert', 'g3_pattern', 'g3_scale', 'g3_shapes_vis', 'g3_barchart',
  // Grade 3 visual topics — reuse existing components
  'g3_zahlstr', 'g3_laenge', 'g3_strecken', 'g3_zeit', 'g3_geld',
  'g3_geo_messen', 'g3_perim', 'g3_area',
]);

function isVisualTopicKey(key: string): boolean {
  return VISUAL_TOPIC_KEYS.has(key);
}

// Helper: generate one visual sub-question with random params
function generateVisualSub(topicKey: string, blockIdx: number, subIdx: number): SubQuestion {
  const sfx = `${blockIdx}_${subIdx}`;
  switch (topicKey) {
    case 'zeichnen': {
      const targetLength = [3, 4, 5, 6, 7, 8, 9, 10][rnd(0, 7)];
      return { id: `vis_z_${sfx}`, answer: targetLength, points: 1, visualType: 'zeichnen',
        visualData: { type: 'zeichnen', params: { targetLength, unit: 'cm' } } };
    }
    case 'messen': {
      const targetLength = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12][rnd(0, 9)];
      return { id: `vis_m_${sfx}`, answer: targetLength, points: 1, visualType: 'messen',
        visualData: { type: 'messen', params: { targetLength, unit: 'cm' } } };
    }
    case 'uhrzeit': {
      const targetHour = rnd(1, 12);
      const targetMinute = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55][rnd(0, 11)];
      return { id: `vis_u_${sfx}`, answer: `${targetHour}:${targetMinute.toString().padStart(2, '0')}`, points: 1,
        visualType: 'uhrzeit', visualData: { type: 'uhrzeit', params: { targetHour, targetMinute } } };
    }
    case 'grid_area': {
      const w = rnd(3, 7); const h = rnd(2, 5);
      const mode = Math.random() > 0.5 ? 'area' : 'perimeter';
      return { id: `vis_ga_${sfx}`, answer: mode === 'area' ? w * h : 2 * (w + h), points: 1,
        visualType: 'grid-area', visualData: { type: 'grid-area', params: { width: w, height: h, mode } } };
    }
    case 'place_value': {
      const digits = rnd(4, 6);
      const number = rnd(Math.pow(10, digits - 1), Math.pow(10, digits) - 1);
      return { id: `vis_pv_${sfx}`, answer: number, points: 1,
        visualType: 'place-value', visualData: { type: 'place-value', params: { number, digits } } };
    }
    case 'fraction_pizza': {
      const denominator = [2, 3, 4, 6, 8][rnd(0, 4)];
      const numerator = rnd(1, denominator - 1);
      return { id: `vis_fp_${sfx}`, answer: `${numerator}/${denominator}`, points: 1,
        visualType: 'fraction-pizza', visualData: { type: 'fraction-pizza', params: { numerator, denominator, operation: 'identify' } } };
    }
    case 'symmetry': {
      const gridSize = [4, 6][rnd(0, 1)]; const pattern: number[][] = [];
      for (let r = 0; r < gridSize; r++) {
        const row: number[] = []; const half = gridSize / 2;
        for (let c = 0; c < half; c++) row.push(Math.random() > 0.5 ? 1 : 0);
        for (let c = half; c < gridSize; c++) row.push(0);
        pattern.push(row);
      }
      return { id: `vis_sym_${sfx}`, answer: 'symmetric', points: 1,
        visualType: 'symmetry', visualData: { type: 'symmetry', params: { gridSize, pattern } } };
    }
    case 'sequence': {
      const start = rnd(2, 20); const step = rnd(2, 8); const len = 8; const blanks = 3;
      const sequence: number[] = [];
      for (let i = 0; i < len; i++) sequence.push(start + i * step);
      return { id: `vis_seq_${sfx}`, answer: sequence.slice(len - blanks).join(','), points: 1,
        visualType: 'sequence', visualData: { type: 'sequence', params: { sequence, rule: `+${step}`, blanks } } };
    }
    case 'timeline': {
      const startHour = rnd(7, 10); const endHour = startHour + rnd(3, 6);
      const events = [{ time: startHour, label: 'Start' }, { time: startHour + 1, label: 'Pause' }, { time: endHour, label: 'Ende' }];
      return { id: `vis_tl_${sfx}`, answer: endHour - startHour, points: 1,
        visualType: 'timeline', visualData: { type: 'timeline', params: { startHour, endHour, events } } };
    }
    case 'number_line': {
      const step = [10, 100, 1000][rnd(0, 2)]; const base = rnd(1, 9) * step;
      const offset = rnd(1, step - 1); const target = base + offset;
      return { id: `vis_nl_${sfx}`, answer: Math.round(target / step) * step, points: 1,
        visualType: 'number-line', visualData: { type: 'number-line', params: { min: base, max: base + step, target, mode: 'round' } } };
    }
    case 'angle': {
      const targetAngle = [30, 45, 60, 90, 120, 135, 150][rnd(0, 6)];
      return { id: `vis_ang_${sfx}`, answer: targetAngle, points: 1,
        visualType: 'angle', visualData: { type: 'angle', params: { targetAngle } } };
    }
    case 'circle_draw': {
      const radius = rnd(2, 6);
      return { id: `vis_cir_${sfx}`, answer: radius, points: 1,
        visualType: 'circle-draw', visualData: { type: 'circle-draw', params: { radius } } };
    }
    case 'money': {
      const items = [
        { name: 'Apfel', price: rnd(20, 80) / 100 },
        { name: 'Brot', price: rnd(100, 300) / 100 },
        { name: 'Milch', price: rnd(80, 200) / 100 },
      ].slice(0, rnd(2, 3));
      const total = Math.round(items.reduce((s, i) => s + i.price, 0) * 100) / 100;
      const mode = Math.random() > 0.5 ? 'change' as const : 'total' as const;
      const budget = Math.ceil(total);
      const answer = mode === 'change' ? Math.round((budget - total) * 100) / 100 : total;
      return { id: `vis_mon_${sfx}`, answer, points: 1,
        visualType: 'money', visualData: { type: 'money', params: { items, budget, mode } } };
    }
    // ── Grade 1 visual components ──────────────────────────────────────
    case 'g1_clock': {
      const hour = rnd(1, 12);
      const minute = [0, 15, 30, 45][rnd(0, 3)]; // G1: only quarter hours
      return { id: `vis_g1c_${sfx}`, answer: `${hour}:${String(minute).padStart(2, '0')}`, points: 1,
        visualType: 'g1-clock', visualData: { type: 'g1-clock', params: { hour, minute } } };
    }
    case 'g1_number_line': {
      const max = 20; const step = 1;
      const marked = rnd(1, 19);
      return { id: `vis_g1nl_${sfx}`, answer: marked, points: 1,
        visualType: 'g1-number-line', visualData: { type: 'g1-number-line', params: { min: 0, max, step, markedValue: marked } } };
    }
    case 'g1_place_value': {
      const num = rnd(11, 99);
      const q = (['tens', 'ones', 'total'] as const)[rnd(0, 2)];
      const ans = q === 'tens' ? Math.floor(num / 10) : q === 'ones' ? num % 10 : num;
      return { id: `vis_g1pv_${sfx}`, answer: ans, points: 1,
        visualType: 'g1-place-value', visualData: { type: 'g1-place-value', params: { number: num, question: q } } };
    }
    case 'g1_grid_count': {
      const rows = rnd(3, 5); const cols = rnd(3, 5);
      const grid: boolean[][] = [];
      for (let r = 0; r < rows; r++) {
        const row: boolean[] = [];
        for (let c = 0; c < cols; c++) row.push(Math.random() > 0.4);
        grid.push(row);
      }
      const colored = grid.flat().filter(Boolean).length;
      return { id: `vis_g1gc_${sfx}`, answer: colored, points: 1,
        visualType: 'g1-grid-count', visualData: { type: 'g1-grid-count', params: { grid, question: 'count' } } };
    }
    case 'g1_sequence': {
      const start = rnd(1, 5); const step2 = rnd(1, 3); const len = 6;
      const seq: (number | null)[] = [];
      const answers: number[] = [];
      for (let i = 0; i < len; i++) {
        const val = start + i * step2;
        if (i === len - 2 || i === len - 1) { seq.push(null); answers.push(val); }
        else seq.push(val);
      }
      return { id: `vis_g1sq_${sfx}`, answer: answers.join(','), points: 1,
        visualType: 'g1-sequence', visualData: { type: 'g1-sequence', params: { sequence: seq, answers } } };
    }
    case 'g1_coins': {
      const coinValues = [1, 2, 5];
      const coins: { value: number; count: number }[] = [];
      const numTypes = rnd(2, 3);
      for (let i = 0; i < numTypes; i++) {
        coins.push({ value: coinValues[i], count: rnd(1, 4) });
      }
      const total = coins.reduce((s, c) => s + c.value * c.count, 0);
      return { id: `vis_g1co_${sfx}`, answer: total, points: 1,
        visualType: 'g1-coins', visualData: { type: 'g1-coins', params: { coins, currency: '€' } } };
    }
    case 'g1_timeline': {
      const startH = rnd(7, 11); const endH = startH + rnd(1, 4);
      return { id: `vis_g1tl_${sfx}`, answer: endH - startH, points: 1,
        visualType: 'g1-timeline', visualData: { type: 'g1-timeline', params: { startHour: startH, endHour: endH } } };
    }
    case 'g1_fraction': {
      const totalParts = [2, 3, 4][rnd(0, 2)];
      const coloredParts = rnd(1, totalParts);
      const shape = (['pizza', 'rectangle', 'circle'] as const)[rnd(0, 2)];
      return { id: `vis_g1fr_${sfx}`, answer: coloredParts, points: 1,
        visualType: 'g1-fraction', visualData: { type: 'g1-fraction', params: { shape, totalParts, coloredParts } } };
    }
    // ── Grade 2 visual components ──────────────────────────────────────────
    case 'g2_clock': {
      // G2: 5-minute intervals (vs G1's quarter-hours)
      const hour = rnd(1, 12);
      const minute = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55][rnd(0, 11)];
      return { id: `vis_g2c_${sfx}`, answer: `${hour}:${String(minute).padStart(2, '0')}`, points: 1,
        visualType: 'uhrzeit', visualData: { type: 'uhrzeit', params: { targetHour: hour, targetMinute: minute } } };
    }
    case 'g2_strecken': {
      // G2: measure a line segment in cm
      const targetLength = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12][rnd(0, 9)];
      return { id: `vis_g2s_${sfx}`, answer: targetLength, points: 1, visualType: 'messen',
        visualData: { type: 'messen', params: { targetLength, unit: 'cm' } } };
    }
    case 'g2_zahlstr': {
      // G2: number line 0–100, multiples of 10 marked, find the marked value
      const marked = rnd(1, 9) * 10 + rnd(1, 9);
      return { id: `vis_g2nl_${sfx}`, answer: marked, points: 1,
        visualType: 'g1-number-line', visualData: { type: 'g1-number-line', params: { min: 0, max: 100, step: 10, markedValue: marked } } };
    }
    case 'g2_stellenwert': {
      // G2: tens and ones place value for numbers 11–99
      const num = rnd(11, 99);
      const q = (['tens', 'ones', 'total'] as const)[rnd(0, 2)];
      const ans = q === 'tens' ? Math.floor(num / 10) : q === 'ones' ? num % 10 : num;
      return { id: `vis_g2pv_${sfx}`, answer: ans, points: 1,
        visualType: 'g1-place-value', visualData: { type: 'g1-place-value', params: { number: num, question: q } } };
    }
    case 'g2_money': {
      // G2: simple euro/cent money calculation
      const items = [
        { name: 'Apfel', price: rnd(20, 80) / 100 },
        { name: 'Brot', price: rnd(100, 200) / 100 },
        { name: 'Milch', price: rnd(80, 150) / 100 },
      ].slice(0, rnd(2, 3));
      const total = Math.round(items.reduce((s, i) => s + i.price, 0) * 100) / 100;
      const mode = Math.random() > 0.5 ? 'change' as const : 'total' as const;
      const budget = Math.ceil(total);
      const answer = mode === 'change' ? Math.round((budget - total) * 100) / 100 : total;
      return { id: `vis_g2mon_${sfx}`, answer, points: 1,
        visualType: 'money', visualData: { type: 'money', params: { items, budget, mode } } };
    }
    // ── Grade 3 visual components ──────────────────────────────────────────
    case 'g3_stellenwert': {
      const n = rnd(100, 999);
      const pos = (['hundreds', 'tens', 'ones'] as const)[rnd(0, 2)];
      const ans = pos === 'hundreds' ? Math.floor(n / 100) : pos === 'tens' ? Math.floor((n % 100) / 10) : n % 10;
      return { id: `vis_g3sv_${sfx}`, answer: ans, points: 1,
        visualType: 'g3-place-value', visualData: { type: 'g3-place-value', params: { number: n, question: pos } } };
    }
    case 'g3_zahlstr': {
      // 0–1000 number line, step=100
      const marked = rnd(1, 9) * 100 + rnd(1, 99);
      return { id: `vis_g3nl_${sfx}`, answer: marked, points: 1,
        visualType: 'g1-number-line', visualData: { type: 'g1-number-line', params: { min: 0, max: 1000, step: 100, markedValue: marked } } };
    }
    case 'g3_pattern': {
      const period = rnd(2, 3) as 2 | 3;
      const allColors = ['red', 'blue', 'green', 'yellow', 'purple'];
      const colors = allColors.slice(0, period);
      const len = 6;
      const blanks = 2;
      const sequence: string[] = [];
      for (let i = 0; i < len; i++) sequence.push(colors[i % period]);
      return { id: `vis_g3pat_${sfx}`, answer: sequence.slice(len - blanks).join(','), points: 1,
        visualType: 'g3-pattern', visualData: { type: 'g3-pattern', params: { sequence, period, blanks } } };
    }
    case 'g3_laenge': {
      const targetLength = rnd(5, 20);
      return { id: `vis_g3l_${sfx}`, answer: targetLength, points: 1, visualType: 'messen',
        visualData: { type: 'messen', params: { targetLength, unit: 'cm' } } };
    }
    case 'g3_strecken': {
      const targetLength = rnd(3, 15);
      return { id: `vis_g3st_${sfx}`, answer: targetLength, points: 1, visualType: 'zeichnen',
        visualData: { type: 'zeichnen', params: { targetLength, unit: 'cm' } } };
    }
    case 'g3_zeit': {
      const hour = rnd(1, 12);
      const minute = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55][rnd(0, 11)];
      return { id: `vis_g3z_${sfx}`, answer: `${hour}:${String(minute).padStart(2, '0')}`, points: 1,
        visualType: 'uhrzeit', visualData: { type: 'uhrzeit', params: { targetHour: hour, targetMinute: minute } } };
    }
    case 'g3_geld': {
      const gitems = [
        { name: 'Brot', price: rnd(100, 300) / 100 },
        { name: 'Milch', price: rnd(80, 200) / 100 },
        { name: 'Käse', price: rnd(150, 400) / 100 },
      ].slice(0, rnd(2, 3));
      const gtotal = Math.round(gitems.reduce((s, i) => s + i.price, 0) * 100) / 100;
      const gmode = Math.random() > 0.5 ? 'change' as const : 'total' as const;
      const gbudget = Math.ceil(gtotal);
      const gans = gmode === 'change' ? Math.round((gbudget - gtotal) * 100) / 100 : gtotal;
      return { id: `vis_g3mon_${sfx}`, answer: gans, points: 1,
        visualType: 'money', visualData: { type: 'money', params: { items: gitems, budget: gbudget, mode: gmode } } };
    }
    case 'g3_scale': {
      const wA = rnd(1, 9) * 100 + rnd(0, 9) * 10;
      const wB = rnd(1, 9) * 100 + rnd(0, 9) * 10;
      const scAns = wA > wB ? 'heavier' : wA < wB ? 'lighter' : 'equal';
      return { id: `vis_g3sc_${sfx}`, answer: scAns, points: 1,
        visualType: 'g3-scale', visualData: { type: 'g3-scale', params: { weightA: wA, weightB: wB, unitA: 'g', unitB: 'g' } } };
    }
    case 'g3_shapes_vis': {
      const shapeList = ['square', 'rectangle', 'triangle', 'circle', 'hexagon', 'pentagon'];
      const target = shapeList[rnd(0, shapeList.length - 1)];
      const distractors = shapeList.filter((s) => s !== target).sort(() => Math.random() - 0.5).slice(0, 3);
      const options = [target, ...distractors].sort(() => Math.random() - 0.5);
      return { id: `vis_g3sh_${sfx}`, answer: target, points: 1,
        visualType: 'g3-shape', visualData: { type: 'g3-shape', params: { target, options } } };
    }
    case 'g3_geo_messen': {
      const targetLength = rnd(3, 12);
      return { id: `vis_g3gm_${sfx}`, answer: targetLength, points: 1, visualType: 'messen',
        visualData: { type: 'messen', params: { targetLength, unit: 'cm' } } };
    }
    case 'g3_perim': {
      const pw = rnd(2, 7), ph = rnd(2, 5);
      return { id: `vis_g3perim_${sfx}`, answer: 2 * (pw + ph), points: 1,
        visualType: 'grid-area', visualData: { type: 'grid-area', params: { width: pw, height: ph, mode: 'perimeter' } } };
    }
    case 'g3_area': {
      const aw = rnd(2, 6), ah = rnd(2, 5);
      return { id: `vis_g3area_${sfx}`, answer: aw * ah, points: 1,
        visualType: 'grid-area', visualData: { type: 'grid-area', params: { width: aw, height: ah, mode: 'area' } } };
    }
    case 'g3_barchart': {
      const bcCats = [
        { name: 'A', value: rnd(2, 10) },
        { name: 'B', value: rnd(2, 10) },
        { name: 'C', value: rnd(2, 10) },
        { name: 'D', value: rnd(2, 10) },
      ];
      const bcTarget = rnd(0, 3);
      return { id: `vis_g3bc_${sfx}`, answer: bcCats[bcTarget].value, points: 1,
        visualType: 'g3-barchart', visualData: { type: 'g3-barchart', params: { categories: bcCats, targetIdx: bcTarget } } };
    }
    default:
      return generateVisualSub('zeichnen', blockIdx, subIdx);
  }
}

// Map topicKey → block type
const VISUAL_TOPIC_TO_TYPE: Record<string, TaskType> = {
  zeichnen: 'visual_zeichnen', messen: 'visual_messen', uhrzeit: 'visual_uhrzeit',
  grid_area: 'visual_grid_area', place_value: 'visual_place_value', fraction_pizza: 'visual_fraction_pizza',
  symmetry: 'visual_symmetry', sequence: 'visual_sequence', timeline: 'visual_timeline',
  number_line: 'visual_number_line', angle: 'visual_angle', circle_draw: 'visual_circle_draw', money: 'visual_money',
  g1_clock: 'visual_g1_clock', g1_number_line: 'visual_g1_number_line', g1_place_value: 'visual_g1_place_value',
  g1_grid_count: 'visual_g1_grid_count', g1_sequence: 'visual_g1_sequence', g1_coins: 'visual_g1_coins',
  g1_timeline: 'visual_g1_timeline', g1_fraction: 'visual_g1_fraction',
  // Grade 2 visual topics → reuse existing visual types
  g2_clock: 'visual_uhrzeit', g2_strecken: 'visual_messen',
  g2_zahlstr: 'visual_g1_number_line', g2_stellenwert: 'visual_g1_place_value', g2_money: 'visual_money',
  // Grade 3 visual topics — new types
  g3_stellenwert: 'visual_g3_place_value',
  g3_pattern:     'visual_g3_pattern',
  g3_scale:       'visual_g3_scale',
  g3_shapes_vis:  'visual_g3_shape',
  g3_barchart:    'visual_g3_barchart',
  // Grade 3 visual topics — reuse existing types
  g3_zahlstr:     'visual_g1_number_line',
  g3_laenge:      'visual_messen',
  g3_strecken:    'visual_zeichnen',
  g3_zeit:        'visual_uhrzeit',
  g3_geld:        'visual_money',
  g3_geo_messen:  'visual_messen',
  g3_perim:       'visual_grid_area',
  g3_area:        'visual_grid_area',
};

function generateVisualBlock(
  topicKey: string,
  topicName: string,
  blockIdx: number,
): SchoolTaskBlock {
  const SUB_COUNT = 3;
  const subs: SubQuestion[] = [];
  for (let i = 0; i < SUB_COUNT; i++) {
    subs.push(generateVisualSub(topicKey, blockIdx, i));
  }
  // data = first sub's params (backwards compat for SchoolTaskBlock rendering)
  const firstParams = subs[0].visualData?.params ?? {};
  return {
    id: `block_visual_${topicKey}_${blockIdx}`,
    type: VISUAL_TOPIC_TO_TYPE[topicKey] || 'visual_zeichnen',
    title: topicName,
    totalPoints: SUB_COUNT,
    subQuestions: subs,
    data: firstParams as any,
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
  visual_zeichnen: { de: 'Zeichne eine Linie.', en: 'Draw a line.', hu: 'Rajzolj vonalat!', ro: 'Desenează o linie.' },
  visual_messen: { de: 'Miss die Linie.', en: 'Measure the line.', hu: 'Mérd meg a vonalat!', ro: 'Măsoară linia.' },
  visual_uhrzeit: { de: 'Wie spät ist es?', en: 'What time is it?', hu: 'Hány óra van?', ro: 'Cât este ceasul?' },
  visual_grid_area: { de: 'Fläche oder Umfang berechnen.', en: 'Calculate area or perimeter.', hu: 'Számold ki a területet vagy kerületet!', ro: 'Calculează aria sau perimetrul.' },
  visual_place_value: { de: 'Stellenwerte bestimmen.', en: 'Determine place values.', hu: 'Határozd meg a helyiértékeket!', ro: 'Determină valorile poziționale.' },
  visual_fraction_pizza: { de: 'Bruch erkennen.', en: 'Identify the fraction.', hu: 'Ismerd fel a törtet!', ro: 'Identifică fracția.' },
  visual_symmetry: { de: 'Spiegle das Muster.', en: 'Mirror the pattern.', hu: 'Tükrözd a mintát!', ro: 'Oglindește modelul.' },
  visual_sequence: { de: 'Zahlenreihe fortsetzen.', en: 'Continue the sequence.', hu: 'Folytasd a számsort!', ro: 'Continuă șirul.' },
  visual_timeline: { de: 'Zeitdauer berechnen.', en: 'Calculate duration.', hu: 'Számold ki az időtartamot!', ro: 'Calculează durata.' },
  visual_number_line: { de: 'Zahl runden.', en: 'Round the number.', hu: 'Kerekítsd a számot!', ro: 'Rotunjește numărul.' },
  visual_angle: { de: 'Winkel zeichnen.', en: 'Draw the angle.', hu: 'Rajzolj szöget!', ro: 'Desenează unghiul.' },
  visual_circle_draw: { de: 'Kreis zeichnen.', en: 'Draw a circle.', hu: 'Rajzolj kört!', ro: 'Desenează un cerc.' },
  visual_money: { de: 'Geld berechnen.', en: 'Calculate the money.', hu: 'Számold ki az összeget!', ro: 'Calculează totalul.' },
  visual_g1_clock: { de: 'Wie spät ist es?', en: 'What time is it?', hu: 'Hány óra van?', ro: 'Cât este ceasul?' },
  visual_g1_number_line: { de: 'Zahlenstrahl lesen.', en: 'Read the number line.', hu: 'Olvasd le a számegyenest!', ro: 'Citește dreapta numerelor.' },
  visual_g1_place_value: { de: 'Stellenwerte bestimmen.', en: 'Determine place values.', hu: 'Határozd meg a helyiértékeket!', ro: 'Determină valorile poziționale.' },
  visual_g1_grid_count: { de: 'Zähle die Kästchen.', en: 'Count the squares.', hu: 'Számold meg a négyzeteket!', ro: 'Numără pătratele.' },
  visual_g1_sequence: { de: 'Zahlenreihe fortsetzen.', en: 'Continue the sequence.', hu: 'Folytasd a számsort!', ro: 'Continuă șirul.' },
  visual_g1_coins: { de: 'Münzen zählen.', en: 'Count the coins.', hu: 'Számold össze az érméket!', ro: 'Numără monedele.' },
  visual_g1_timeline: { de: 'Zeitdauer berechnen.', en: 'Calculate the duration.', hu: 'Számold ki az időtartamot!', ro: 'Calculează durata.' },
  visual_g1_fraction: { de: 'Teile zählen.', en: 'Count the parts.', hu: 'Számold meg a részeket!', ro: 'Numără părțile.' },
  // Phase 1 - Numbers & Recognition
  visual_g1_dots: { de: 'Wie viele Punkte?', en: 'How many dots?', hu: 'Hány pont van?', ro: 'Câte puncte?' },
  visual_g1_dice: { de: 'Welche Zahl zeigt der Würfel?', en: 'What number is on the dice?', hu: 'Mi a dobókocka száma?', ro: 'Ce număr are zarul?' },
  visual_g1_fingers: { de: 'Wie viele Finger?', en: 'How many fingers?', hu: 'Hány ujj van felfelé?', ro: 'Câți degete?' },
  visual_g1_compare: { de: 'Größer oder kleiner?', en: 'Greater or less than?', hu: 'Nagyobb vagy kisebb?', ro: 'Mai mare sau mai mic?' },
  visual_g1_predecessor: { de: 'Welche Zahl kommt davor?', en: 'What number comes before?', hu: 'Mi az előző szám?', ro: 'Ce număr vine înainte?' },
  visual_g1_successor: { de: 'Welche Zahl kommt danach?', en: 'What number comes after?', hu: 'Mi a következő szám?', ro: 'Ce număr vine după?' },
  // Phase 2 - Operations with Pictures
  visual_g1_addition_pics: { de: 'Addition mit Bildern', en: 'Addition with Pictures', hu: 'Összeadás képekkel', ro: 'Adunare cu imagini' },
  visual_g1_subtraction_pics: { de: 'Subtraktion mit Bildern', en: 'Subtraction with Pictures', hu: 'Kivonás képekkel', ro: 'Scădere cu imagini' },
  visual_g1_decompose: { de: 'Zahlzerlegung', en: 'Number Decomposition', hu: 'Szám szétbontása', ro: 'Descompunerea numărului' },
  visual_g1_completion: { de: 'Ergänze die Zahl!', en: 'Complete the Number!', hu: 'Egészítsd ki a számsort!', ro: 'Completează numărul!' },
  // Phase 3 - Geometry & Spatial
  visual_g1_shapes: { de: 'Welche Form ist es?', en: 'What shape is it?', hu: 'Melyik forma?', ro: 'Care este forma?' },
  visual_g1_directions: { de: 'Welche Richtung?', en: 'Which direction?', hu: 'Melyik irány?', ro: 'Care direcție?' },
  visual_g1_patterns: { de: 'Welches Element kommt nächst?', en: 'What comes next?', hu: 'Mely elem jön következő?', ro: 'Ce vine în continuare?' },
  // Phase 4 - Measurements & Everyday Math
  visual_g1_length: { de: 'Längen vergleichen', en: 'Compare Lengths', hu: 'Hossz összehasonlítása', ro: 'Compararea lungimilor' },
  visual_g1_weight: { de: 'Gewichte vergleichen', en: 'Compare Weights', hu: 'Súly összehasonlítása', ro: 'Compararea greutăților' },
  visual_g1_volume: { de: 'Mengen vergleichen', en: 'Compare Amounts', hu: 'Mennyiség összehasonlítása', ro: 'Compararea volumelor' },
  visual_g1_shopping: { de: 'Einkaufen', en: 'Shopping', hu: 'Bevásárlás', ro: 'Cumpărături' },
  visual_g1_wordproblem: { de: 'Textaufgabe', en: 'Word Problem', hu: 'Szöveges feladat', ro: 'Problemă cu text' },
  // Grade 3 new visual types
  visual_g3_place_value: { de: 'Stellenwerttafel (Hunderte/Zehner/Einer).', en: 'Place Value Blocks (hundreds/tens/ones).', hu: 'Helyiérték-tábla (százas/tízes/egyes).', ro: 'Tabela valorii poziționale (sute/zeci/unități).' },
  visual_g3_pattern:     { de: 'Muster fortsetzen.', en: 'Continue the pattern.', hu: 'Folytasd a mintát!', ro: 'Continuă modelul.' },
  visual_g3_scale:       { de: 'Balkenwaage ablesen.', en: 'Read the balance scale.', hu: 'Olvasd le a mérleget!', ro: 'Citește balanța.' },
  visual_g3_shape:       { de: 'Welche Form ist das?', en: 'Which shape is this?', hu: 'Melyik alakzat ez?', ro: 'Ce formă este aceasta?' },
  visual_g3_barchart:    { de: 'Balkendiagramm ablesen.', en: 'Read the bar chart.', hu: 'Olvasd le az oszlopdiagramot!', ro: 'Citește diagrama cu bare.' },
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
  // 5 sub-questions: very easy arithmetic (single-step, small numbers)
  const veryEasy = ['add10', 'add20', 'sub20', 'compare', 'missing', 'add100', 'sub100'];
  // 4 sub-questions: easy (sequences, basic multiplication, place value, rounding)
  const easy     = ['sequence', 'add1000', 'mul', 'grosseZahlen', 'stellenwert', 'zahlenstrahl',
                    'runden', 'zahlenfolgen', 'rechenstrategien', 'addSub', 'laenge', 'gewicht',
                    'umwandeln', 'place1k', 'place'];
  // 2 sub-questions: hard (algebra, equations, multi-step word problems, geometry proofs)
  const hard     = ['algebra', 'eq', 'tri', 'pyth', 'sqrt', 'complex', 'func', 'prob', 'powers',
                    'mehrschritt', 'messAufgaben'];
  // 3 sub-questions: medium (division, fractions, geometry, word problems, units, etc.)
  // includes: div, units, frac, fracArith, geo, word, pct, neg, ratio, large,
  //   ueberschlagen, zeit, geld, strecken, geodreieck, zirkel, symmetrie,
  //   umfang, flaeche, tabellen, diagramme, grundAufgaben, ...
  if (veryEasy.includes(topicKey)) return 5;
  if (easy.includes(topicKey))     return 4;
  if (hard.includes(topicKey))     return 2;
  return 3;
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
    : getAllTopicsForGrade(grade, cc).slice(0, 3);

  if (effectiveTopics.length === 0) return [];

  // Generate exactly 10 blocks, roundrobin across topics.
  // Each block = 1 pont; questions per block depend on topic difficulty.
  // Visual topics (zeichnen, messen, uhrzeit) get their own visual block generator.
  const blocks: SchoolTaskBlock[] = [];
  for (let i = 0; i < TOTAL_BLOCKS; i++) {
    const topic = effectiveTopics[i % effectiveTopics.length];

    if (isVisualTopicKey(topic.key)) {
      // Visual block: 1 interaktív feladat = 1 pont
      const block = generateVisualBlock(topic.key, topic.name, i);
      blocks.push(block);
    } else {
      // Standard block: szöveges/számolós feladatok
      const questionsInBlock = getItemsPerPointByKey(topic.key); // 2, 3, 4 or 5
      const block = generateAufgabenBlock(grade, cc, topic.key, topic.name, questionsInBlock, i);
      // Each block is worth exactly 1 point; questions share it equally
      const pointPerQ = 1 / questionsInBlock;
      const newSubQ = block.subQuestions.map(sq => ({ ...sq, points: pointPerQ }));
      blocks.push({ ...block, totalPoints: 1, subQuestions: newSubQ });
    }
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
