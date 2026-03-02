// ─── MATH CURRICULUM SYSTEM ─────────────────────────────
// Multi-country elementary school math curriculum (1-8 grade)
// Generates questions based on grade + current period + country
// No duplicate questions in a single test

import {
  t, getTranslatedPeriodLabel, getNames, getItems, getCurrency,
  qCompare, wpHasFruit, wpLostItems, wpColoredItems, wpAte, wpBus,
  wpSchool, wpBought, wpEachGets, wpShare,
  qHowManyCmInM, qHowManyGInKg, qHowManyMinInH, qMetersInCm, qHoursInMin,
  qMlInL, qLiterToMl, qKmToM, qTonToKg, qLiterToDl,
  qHowManyInchesInFoot, qHowManyFeetInYard, qHowManyOzInLb,
  qFeetToInches, qYardsToFeet, qLbToOz,
  qAmPmElapsed, qAmPmAddHours, qAmPmActivityEnd,
  qPlaceValue, qHowManyQuartersInWhole, qHowManyHalvesInWhole, qWholeToHalves,
  qPizzaSlices, qHalfOf, qFractionNumerator, qFractionSubNumerator,
  qTenthsToHundredths, qPercentOf,
  qRectPerimeter, qRectArea, qSquarePerimeter, qSquareArea, qTriangleArea,
  qTriangleThirdAngle, qEquilateralAngle, qIsoscelesApex,
  qSolveX, qIfAEquals, qSimplifyCoeff,
  qRatioSmallLarge, qSpeedDistance,
  wpDiscount, wpSavings, wpPriceIncrease, wpTravel, wpAvgSpeed,
  wpThinkNumber, wpNumberSquare,
  qPythHypotenuse, qPythLeg,
  qBallProb, qDiceProb, qCoinProb,
  qFunctionValue, qYIntercept,
  qNextInSequence, qMissingInEquation,
  wpShelfRows, wpClassGroups, wpBuyMultiple, wpFruitTotal, wpCollectionDiff,
  wpDrinksPerWeek, qOrderOfOpsReminder,
} from "./mathTranslations";

export interface MathQuestion {
  question: string;
  correctAnswer: number | string;
  options: (number | string)[];
  topic: string;
  isWordProblem: boolean;
  section?: string;      // Klassenarbeit szekció (Kopfrechnen, Schriftlich, Sachaufgaben, Geometrie, Bonus)
  maxPoints?: number;    // Max pont az adott kérdésre
  hasStringOptions?: boolean; // true if options contain symbols like <, >, =
}

// ─── REALISTIC KLASSENARBEIT FORMAT (Grouped Tasks) ─────────────────────────────
// New format for realistic German Klassenarbeit with grouped tasks, images, and partial scoring

// ─── EXTENDED LAYOUT TYPES ─────────────────────────────
export type SubQuestionType =
  | "multiple-choice"   // Válaszlehetőségek közül választás
  | "free-text"         // Szabadszöveges válasz
  | "calculation"       // Szám bevitele
  | "short_input"       // Rövid szöveges válasz
  | "multi_input"       // Több input mező (pl. szám, szám)
  | "schriftlich_layout" // Oszlopos számolás
  | "table_fill";       // Táblázat kitöltése

export interface SubQuestion {
  id: string; // "a", "b", "c", etc.
  text: string;
  correctAnswer: number | string | Record<string, number | string>; // Single or multiple answers for multi_input/table
  points: number; // Partial point value (e.g., 1, 2, 0.5)
  type: SubQuestionType;

  // Multiple choice
  options?: number[] | string[];

  // Multi-input specific
  fields?: {
    id: string;           // Field identifier (e.g., "number1", "number2")
    label: string;        // Field label
    type: "number" | "text";
    placeholder?: string;
    correctAnswer: number | string; // Individual field answer
    points: number;       // Partial points for this field
  }[];

  // Table fill specific
  rows?: {
    label: string;        // Row label (e.g., "Sora 1")
    cells: {
      label?: string;     // Cell label if needed
      correctAnswer: number | string;
      points: number;
    }[];
  }[];

  // Schriftlich layout specific (column calculation)
  layout?: {
    type: "vertical" | "horizontal";
    columns?: number;     // For multiplication/division layouts
  };

  // General
  workSpaceLines?: number; // Number of lines for writing space
  hint?: string; // Optional hint for students
}

export interface GroupedTask {
  taskNumber: number;
  title: string;
  description?: string;
  imageUrl?: string; // URL to task image/diagram
  totalPoints: number; // Total points for all sub-questions
  subQuestions: SubQuestion[];
  section: string; // Section name (Kopfrechnen, Sachaufgaben, Geometrie, etc.)
}

export interface RealisticKlassenarbeit {
  grade: number;
  period: number;
  totalPoints: number;
  tasks: GroupedTask[];
}

// ─── HELPERS ─────────────────────────────

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateOptions(correct: number, minVal: number = 0): number[] {
  const opts = new Set<number>([correct]);
  const spread = Math.max(3, Math.ceil(Math.abs(correct) * 0.25) + 1);
  let attempts = 0;
  while (opts.size < 4 && attempts < 100) {
    const offset = randInt(1, spread) * (Math.random() > 0.5 ? 1 : -1);
    const wrong = correct + offset;
    if (wrong >= minVal && wrong !== correct) opts.add(wrong);
    attempts++;
  }
  let fill = 1;
  while (opts.size < 4) {
    if (correct + fill >= minVal && !opts.has(correct + fill)) opts.add(correct + fill);
    else if (correct - fill >= minVal && !opts.has(correct - fill)) opts.add(correct - fill);
    fill++;
  }
  return shuffleArray([...opts]);
}

function q(question: string, correctAnswer: number, topic: string, minOpt = 0, isWordProblem = false): MathQuestion {
  return { question, correctAnswer, options: generateOptions(correctAnswer, minOpt), topic, isWordProblem };
}

function pick<T>(arr: T[]): T {
  return arr[randInt(0, arr.length - 1)];
}

// ─── PERIOD SYSTEM ─────────────────────────────

export function getPeriod(): number {
  const month = new Date().getMonth(); // 0=Jan
  if (month >= 8 && month <= 9) return 1;   // Sept-Oct
  if (month >= 10 && month <= 11) return 2;  // Nov-Dec
  if (month >= 0 && month <= 1) return 3;    // Jan-Feb
  if (month >= 2 && month <= 3) return 4;    // Mar-Apr
  if (month >= 4 && month <= 5) return 5;    // May-Jun
  return 5; // Summer → full year review
}

export function getPeriodLabel(period: number, countryCode?: string): string {
  return getTranslatedPeriodLabel(period, countryCode || "HU");
}

// ─── GENERATOR TYPE ─────────────────────────────

type Generator = (cc: string) => MathQuestion;

// ─── GRADE 1 GENERATORS ─────────────────────────────

const G1: Record<string, Generator> = {
  add10: (cc) => { const a = randInt(1, 8), b = randInt(1, 9 - a); return q(`${a} + ${b} = ?`, a + b, t("addition", cc)); },
  add10b: (cc) => { const a = randInt(0, 5), b = randInt(2, 9 - a); return q(`${b} + ${a} = ?`, a + b, t("addition", cc)); },
  sub10: (cc) => { const a = randInt(3, 10), b = randInt(1, a - 1); return q(`${a} - ${b} = ?`, a - b, t("subtraction", cc)); },
  sub10b: (cc) => { const a = randInt(5, 10), b = randInt(1, a); return q(`${a} - ${b} = ?`, a - b, t("subtraction", cc)); },
  add20: (cc) => { const a = randInt(10, 15), b = randInt(1, 19 - a); return q(`${a} + ${b} = ?`, a + b, t("addition20", cc)); },
  add20b: (cc) => { const a = randInt(5, 12), b = randInt(3, 19 - a); return q(`${a} + ${b} = ?`, a + b, t("addition20", cc)); },
  sub20: (cc) => { const a = randInt(11, 20), b = randInt(1, a - 5); return q(`${a} - ${b} = ?`, a - b, t("subtraction20", cc)); },
  sub20b: (cc) => { const a = randInt(13, 20), b = randInt(3, a - 1); return q(`${a} - ${b} = ?`, a - b, t("subtraction20", cc)); },
  compare: (cc) => {
    const a = randInt(1, 18), b = a + randInt(1, Math.min(5, 20 - a));
    return Math.random() > 0.5
      ? q(qCompare(a, b, cc), b, t("comparison", cc))
      : q(qCompare(b, a, cc), b, t("comparison", cc));
  },
  missing10: (cc) => {
    const a = randInt(1, 7), b = randInt(1, 9 - a);
    return q(qMissingInEquation(`${a} + ? = ${a + b}`, cc), b, t("missingNumber", cc));
  },
  missing10sub: (cc) => {
    const a = randInt(4, 10), b = randInt(1, a - 1);
    return q(qMissingInEquation(`${a} - ? = ${a - b}`, cc), b, t("missingNumber", cc));
  },
  word1: (cc) => {
    const names = getNames(cc); const items = getItems(cc);
    const name = pick(names.girls); const fruit = pick(items.fruits);
    const a = randInt(2, 7), b = randInt(1, 8 - a);
    return q(wpHasFruit(name, fruit, a, b, cc), a + b, t("wordProblem", cc), 0, true);
  },
  word2: (cc) => {
    const names = getNames(cc); const items = getItems(cc);
    const name = pick(names.boys); const toy = pick(items.toys);
    const a = randInt(4, 10), b = randInt(1, a - 1);
    return q(wpLostItems(name, toy, a, b, cc), a - b, t("wordProblem", cc), 0, true);
  },
  word3: (cc) => {
    const items = getItems(cc);
    const a = randInt(3, 9), b = randInt(2, 8);
    return q(wpColoredItems(items.red, a, items.blue, b, items.pencil, cc), a + b, t("wordProblem", cc), 0, true);
  },
  word4: (cc) => {
    const items = getItems(cc);
    const a = randInt(5, 14), b = randInt(1, a - 2);
    return q(wpAte(a, b, pick(items.sweets), cc), a - b, t("wordProblem", cc), 0, true);
  },
  word5: (cc) => {
    const a = randInt(3, 8), b = randInt(2, 6);
    return q(wpBus(a, b, cc), a + b, t("wordProblem", cc), 0, true);
  },
};

// ─── GRADE 2 GENERATORS ─────────────────────────────

const G2: Record<string, Generator> = {
  add100tens: (cc) => { const a = randInt(1, 7) * 10, b = randInt(1, 9 - a / 10) * 10; return q(`${a} + ${b} = ?`, a + b, t("additionTens", cc)); },
  sub100tens: (cc) => { const a = randInt(3, 9) * 10, b = randInt(1, a / 10 - 1) * 10; return q(`${a} - ${b} = ?`, a - b, t("subtractionTens", cc)); },
  add100: (cc) => { const a = randInt(12, 55), b = randInt(10, 98 - a); return q(`${a} + ${b} = ?`, a + b, t("addition100", cc)); },
  add100b: (cc) => { const a = randInt(20, 65), b = randInt(5, 99 - a); return q(`${a} + ${b} = ?`, a + b, t("addition100", cc)); },
  sub100: (cc) => { const a = randInt(30, 99), b = randInt(10, a - 5); return q(`${a} - ${b} = ?`, a - b, t("subtraction100", cc)); },
  sub100b: (cc) => { const a = randInt(50, 99), b = randInt(12, a - 3); return q(`${a} - ${b} = ?`, a - b, t("subtraction100", cc)); },
  mul2510: (cc) => { const m = pick([2, 5, 10]), b = randInt(1, 10); return q(`${m} × ${b} = ?`, m * b, t("multiplication", cc)); },
  mul2510b: (cc) => { const m = pick([2, 5, 10]), b = randInt(2, 10); return q(`${b} × ${m} = ?`, m * b, t("multiplication", cc)); },
  div2510: (cc) => { const m = pick([2, 5, 10]), r = randInt(1, 10); return q(`${m * r} ÷ ${m} = ?`, r, t("division", cc)); },
  sequence: (cc) => {
    const step = pick([2, 5, 10]);
    const start = randInt(0, 3) * step;
    const seq = [start, start + step, start + 2 * step, start + 3 * step];
    return q(qNextInSequence(seq.join(" → "), cc), start + 4 * step, t("numberSequence", cc));
  },
  missing100: (cc) => {
    const a = randInt(10, 50), b = randInt(10, 49);
    return q(qMissingInEquation(`${a} + ? = ${a + b}`, cc), b, t("missingNumber", cc));
  },
  word1: (cc) => {
    const a = randInt(20, 50), b = randInt(10, 40);
    return q(wpSchool(a, b, cc), a + b, t("wordProblem", cc), 0, true);
  },
  word2: (cc) => {
    const names = getNames(cc); const items = getItems(cc); const cur = getCurrency(cc);
    const name = pick(names.girls);
    const a = randInt(30, 80), b = randInt(10, a - 5);
    return q(wpBought(name, items.eraser, a, b, cur, cc), a - b, t("wordProblem", cc), 0, true);
  },
  word3: (cc) => {
    const items = getItems(cc);
    const a = randInt(2, 5), b = 5;
    return q(wpEachGets(a, b, pick(items.sweets), cc), a * b, t("wordProblem", cc), 0, true);
  },
  word4: (cc) => {
    const names = getNames(cc); const items = getItems(cc);
    const a = randInt(2, 5) * 10, b = randInt(2, 4) * 10;
    return q(wpCollectionDiff(pick(names.boys), a, pick(names.girls), b, items.sticker, cc), Math.abs(a - b), t("wordProblem", cc), 0, true);
  },
  units: (cc) => {
    if (cc === "US") return pick([
      () => q(qHowManyInchesInFoot(cc), 12, t("imperialUnits", cc)),
      () => q(qHowManyFeetInYard(cc), 3, t("imperialUnits", cc)),
      () => { const ft = randInt(2, 5); return q(qFeetToInches(ft, cc), ft * 12, t("imperialUnits", cc)); },
      () => { const yd = randInt(2, 4); return q(qYardsToFeet(yd, cc), yd * 3, t("imperialUnits", cc)); },
      () => q(qHowManyMinInH(cc), 60, t("units", cc)),
    ])();
    return pick([
      () => q(qHowManyCmInM(cc), 100, t("units", cc)),
      () => q(qHowManyMinInH(cc), 60, t("units", cc)),
      () => { const m = randInt(2, 5); return q(qMetersInCm(m, cc), m * 100, t("units", cc)); },
      () => { const h = randInt(2, 3); return q(qHoursInMin(h, cc), h * 60, t("units", cc)); },
    ])();
  },
  ampmClock: (cc) => {
    if (cc !== "US") return pick([
      () => {
        const step = pick([2, 5, 10]);
        const start = randInt(0, 3) * step;
        const seq = [start, start + step, start + 2 * step, start + 3 * step];
        return q(qNextInSequence(seq.join(" → "), cc), start + 4 * step, t("numberSequence", cc));
      },
    ])();
    return pick([
      () => { const startH = randInt(7, 10), endH = randInt(1, 3); return q(qAmPmElapsed(startH, endH, cc), 12 - startH + endH, t("ampmTime", cc), 0, true); },
      () => { const startH = randInt(8, 10), addH = randInt(1, 3); return q(qAmPmAddHours(startH, addH, true, cc), startH + addH <= 12 ? startH + addH : startH + addH - 12, t("ampmTime", cc), 0, true); },
      () => { const startH = randInt(1, 4), durH = randInt(1, 3); return q(qAmPmActivityEnd(startH, durH, cc), startH + durH, t("ampmTime", cc), 0, true); },
    ])();
  },
};

// ─── GRADE 3 GENERATORS ─────────────────────────────

const G3: Record<string, Generator> = {
  add1000: (cc) => { const a = randInt(100, 500), b = randInt(100, 999 - a); return q(`${a} + ${b} = ?`, a + b, t("addition1000", cc)); },
  add1000b: (cc) => { const a = randInt(200, 600), b = randInt(50, 999 - a); return q(`${a} + ${b} = ?`, a + b, t("addition1000", cc)); },
  sub1000: (cc) => { const a = randInt(200, 999), b = randInt(100, a - 50); return q(`${a} - ${b} = ?`, a - b, t("subtraction1000", cc)); },
  sub1000b: (cc) => { const a = randInt(400, 999), b = randInt(50, a - 20); return q(`${a} - ${b} = ?`, a - b, t("subtraction1000", cc)); },
  mul: (cc) => { const a = randInt(2, 10), b = randInt(2, 10); return q(`${a} × ${b} = ?`, a * b, t("multTable", cc)); },
  mulB: (cc) => { const a = randInt(3, 9), b = randInt(3, 9); return q(`${a} × ${b} = ?`, a * b, t("multTable", cc)); },
  div: (cc) => { const a = randInt(2, 10), r = randInt(2, 10); return q(`${a * r} ÷ ${a} = ?`, r, t("division", cc)); },
  divB: (cc) => { const a = randInt(3, 9), r = randInt(3, 9); return q(`${a * r} ÷ ${r} = ?`, a, t("division", cc)); },
  writtenAdd: (cc) => { const a = randInt(123, 567), b = randInt(111, 432); return q(`${a} + ${b} = ?`, a + b, t("writtenAdd", cc)); },
  writtenSub: (cc) => { const a = randInt(400, 999), b = randInt(100, a - 50); return q(`${a} - ${b} = ?`, a - b, t("writtenSub", cc)); },
  sequence: (cc) => {
    const step = pick([3, 4, 6, 7, 8, 9]);
    const start = step * randInt(1, 3);
    const seq = [start, start + step, start + 2 * step, start + 3 * step];
    return q(qNextInSequence(seq.join(" → "), cc), start + 4 * step, t("numberSequence", cc));
  },
  missingMul: (cc) => {
    const a = randInt(2, 9), b = randInt(2, 9);
    return q(qMissingInEquation(`${a} × ? = ${a * b}`, cc), b, t("missingNumber", cc));
  },
  units: (cc) => {
    if (cc === "US") return pick([
      () => q(qHowManyInchesInFoot(cc), 12, t("imperialUnits", cc)),
      () => q(qHowManyFeetInYard(cc), 3, t("imperialUnits", cc)),
      () => q(qHowManyOzInLb(cc), 16, t("imperialUnits", cc)),
      () => { const ft = randInt(2, 6); return q(qFeetToInches(ft, cc), ft * 12, t("imperialUnits", cc)); },
      () => { const yd = randInt(2, 5); return q(qYardsToFeet(yd, cc), yd * 3, t("imperialUnits", cc)); },
      () => { const lb = randInt(2, 5); return q(qLbToOz(lb, cc), lb * 16, t("imperialUnits", cc)); },
      () => q(qHowManyMinInH(cc), 60, t("units", cc)),
      () => { const h = randInt(2, 3); return q(qHoursInMin(h, cc), h * 60, t("units", cc)); },
    ])();
    return pick([
      () => q(qHowManyCmInM(cc), 100, t("units", cc)),
      () => q(qHowManyGInKg(cc), 1000, t("units", cc)),
      () => q(qHowManyMinInH(cc), 60, t("units", cc)),
      () => { const m = randInt(2, 5); return q(qMetersInCm(m, cc), m * 100, t("units", cc)); },
      () => { const h = randInt(2, 3); return q(qHoursInMin(h, cc), h * 60, t("units", cc)); },
      () => q(qMlInL(cc), 1000, t("units", cc)),
    ])();
  },
  ampmClock: (cc) => {
    if (cc !== "US") return pick([
      () => { const a = randInt(2, 9), b = randInt(2, 9); return q(qMissingInEquation(`${a} × ? = ${a * b}`, cc), b, t("missingNumber", cc)); },
    ])();
    return pick([
      () => { const startH = randInt(7, 10), endH = randInt(1, 3); return q(qAmPmElapsed(startH, endH, cc), 12 - startH + endH, t("ampmTime", cc), 0, true); },
      () => { const startH = randInt(8, 11), addH = randInt(2, 4); return q(qAmPmAddHours(startH, addH, true, cc), startH + addH <= 12 ? startH + addH : startH + addH - 12, t("ampmTime", cc), 0, true); },
      () => { const startH = randInt(1, 5), durH = randInt(1, 3); return q(qAmPmActivityEnd(startH, durH, cc), startH + durH, t("ampmTime", cc), 0, true); },
      () => { const startH = randInt(9, 11), endH = randInt(1, 4); return q(qAmPmElapsed(startH, endH, cc), 12 - startH + endH, t("ampmTime", cc), 0, true); },
    ])();
  },
  word1: (cc) => {
    const items = getItems(cc);
    const a = randInt(120, 400), b = randInt(100, 300);
    return q(wpFruitTotal(a, pick(items.fruits), b, pick(items.fruits), cc), a + b, t("wordProblem", cc), 0, true);
  },
  word2: (cc) => {
    const items = getItems(cc);
    const a = randInt(3, 7), b = randInt(3, 8);
    return q(wpShelfRows(a, b, items.book, cc), a * b, t("wordProblem", cc), 0, true);
  },
  word3: (cc) => {
    const items = getItems(cc);
    const d = pick([2, 3, 4, 6]); const r = randInt(3, 8);
    return q(wpShare(d * r, d, r, items.candy, cc), r, t("wordProblem", cc), 0, true);
  },
};

// ─── GRADE 4 GENERATORS ─────────────────────────────

const G4: Record<string, Generator> = {
  placeValue: (cc) => {
    const n = randInt(1000, 9999);
    const positions = [
      { key: "thousands", val: Math.floor(n / 1000) },
      { key: "hundreds", val: Math.floor((n % 1000) / 100) },
      { key: "tens", val: Math.floor((n % 100) / 10) },
      { key: "ones", val: n % 10 },
    ];
    const p = pick(positions);
    return q(qPlaceValue(n, p.key, cc), p.val, t("placeValue", cc));
  },
  placeValueBig: (cc) => {
    const n = randInt(10000, 99999);
    const d = Math.floor((n % 10000) / 1000); // ten-thousands digit
    return q(qPlaceValue(n, "thousands", cc), d, t("placeValue", cc));
  },
  writtenMul: (cc) => { const a = randInt(12, 50), b = randInt(2, 9); return q(`${a} × ${b} = ?`, a * b, t("writtenMul", cc)); },
  writtenMulB: (cc) => { const a = randInt(11, 30), b = randInt(3, 7); return q(`${a} × ${b} = ?`, a * b, t("writtenMul", cc)); },
  writtenDiv: (cc) => { const b = randInt(2, 9), r = randInt(11, 50); return q(`${b * r} ÷ ${b} = ?`, r, t("writtenDiv", cc)); },
  writtenDivB: (cc) => { const b = randInt(3, 8), r = randInt(12, 40); return q(`${b * r} ÷ ${b} = ?`, r, t("writtenDiv", cc)); },
  divTwoDigit: (cc) => { const b = randInt(11, 25), r = randInt(3, 9); return q(`${b * r} ÷ ${b} = ?`, r, t("writtenDiv", cc)); },
  fractions: (cc) => pick([
    () => q(qHowManyQuartersInWhole(cc), 4, t("fractions", cc)),
    () => q(qHowManyHalvesInWhole(cc), 2, t("fractions", cc)),
    () => { const w = randInt(2, 5); return q(qWholeToHalves(w, cc), w * 2, t("fractions", cc)); },
    () => { const n = randInt(1, 3); return q(qPizzaSlices(n, 4, cc), 4 - n, t("fractions", cc)); },
    () => { const n = randInt(6, 20) * 2; return q(qHalfOf(n, cc), n / 2, t("fractions", cc)); },
  ])(),
  decimals: (cc) => pick([
    () => { const a = randInt(1, 8), b = randInt(1, 9); return q(`${a},${b} + 0,${10 - b} = ?`, a + 1, t("decimals", cc)); },
    () => { const n = randInt(2, 8); return q(qTenthsToHundredths(n, cc), n * 10, t("decimals", cc)); },
  ])(),
  units: (cc) => {
    if (cc === "US") return pick([
      () => q(qHowManyInchesInFoot(cc), 12, t("imperialUnits", cc)),
      () => q(qHowManyOzInLb(cc), 16, t("imperialUnits", cc)),
      () => { const ft = randInt(3, 8); return q(qFeetToInches(ft, cc), ft * 12, t("imperialUnits", cc)); },
      () => { const yd = randInt(3, 6); return q(qYardsToFeet(yd, cc), yd * 3, t("imperialUnits", cc)); },
      () => { const lb = randInt(3, 8); return q(qLbToOz(lb, cc), lb * 16, t("imperialUnits", cc)); },
      () => { const l = randInt(2, 5); return q(qLiterToMl(l, cc), l * 1000, t("unitConversion", cc)); },
    ])();
    return pick([
      () => { const km = randInt(2, 9); return q(qKmToM(km, cc), km * 1000, t("unitConversion", cc)); },
      () => { const tt = randInt(2, 5); return q(qTonToKg(tt, cc), tt * 1000, t("unitConversion", cc)); },
      () => { const l = randInt(2, 8); return q(qLiterToDl(l, cc), l * 10, t("unitConversion", cc)); },
      () => { const l = randInt(2, 5); return q(qLiterToMl(l, cc), l * 1000, t("unitConversion", cc)); },
    ])();
  },
  volumeWord: (cc) => {
    const cups = randInt(2, 3); const ml = 250;
    const totalMlWeek = cups * ml * 7;
    return q(wpDrinksPerWeek(cups, ml, cc), totalMlWeek / 1000, t("volumeUnits", cc), 0, true);
  },
  sequence: (cc) => {
    const type = pick(["add", "mul"]);
    if (type === "mul") {
      const factor = pick([2, 3]);
      const start = randInt(2, 5);
      const seq = [start, start * factor, start * factor ** 2, start * factor ** 3];
      return q(qNextInSequence(seq.join(" → "), cc), start * factor ** 4, t("numberSequence", cc));
    }
    const step = pick([50, 100, 250]);
    const start = step * randInt(1, 3);
    const seq = [start, start + step, start + 2 * step, start + 3 * step];
    return q(qNextInSequence(seq.join(" → "), cc), start + 4 * step, t("numberSequence", cc));
  },
  word1: (cc) => {
    const b = pick([3, 4, 5, 6]); const r = randInt(4, 8);
    return q(wpClassGroups(b * r, b, cc), r, t("wordProblem", cc), 0, true);
  },
  word2: (cc) => {
    const items = getItems(cc); const cur = getCurrency(cc);
    const price = randInt(12, 30); const cnt = randInt(2, 5);
    return q(wpBuyMultiple(items.notebook, price, cnt, cur, cc), price * cnt, t("wordProblem", cc), 0, true);
  },
};

// ─── GRADE 5 GENERATORS ─────────────────────────────

const G5: Record<string, Generator> = {
  largeNumbers: (cc) => {
    const n = randInt(10000, 99999);
    const rounded = Math.round(n / 1000) * 1000;
    return q(qNextInSequence(`${n.toLocaleString()} ≈ ?`, cc).replace("→ ?", ""), rounded, t("rounding", cc));
  },
  roundHundreds: (cc) => {
    const n = randInt(1000, 9999);
    const rounded = Math.round(n / 100) * 100;
    return q(qMissingInEquation(`${n} ≈ ?`, cc).replace("?", "? (nearest 100)"), rounded, t("rounding", cc));
  },
  orderOfOps: (cc) => { const a = randInt(2, 8), b = randInt(2, 5), c = randInt(1, 10); return q(`${a} × ${b} + ${c} = ?`, a * b + c, t("orderOfOps", cc)); },
  orderOfOpsB: (cc) => { const a = randInt(10, 30), b = randInt(2, 5), c = randInt(1, 5); return q(`${a} - ${b} × ${c} = ?`, a - b * c, t("orderOfOps", cc), -50); },
  orderOfOpsC: (cc) => { const a = randInt(2, 5), b = randInt(3, 8), c = randInt(2, 5); return q(`(${a} + ${b}) × ${c} = ?`, (a + b) * c, t("orderOfOps", cc)); },
  orderOfOpsD: (cc) => { const a = randInt(2, 6), b = randInt(2, 4), c = randInt(3, 7); return q(qOrderOfOpsReminder(`${a} + ${b} × ${c}`, cc), a + b * c, t("orderOfOps", cc)); },
  fractionAdd: (cc) => {
    const d = pick([4, 6, 8, 10]);
    const a = randInt(1, d / 2), b = randInt(1, d / 2);
    return q(qFractionNumerator(a, b, d, cc), a + b, t("fractionAdd", cc));
  },
  fractionSub: (cc) => {
    const d = pick([4, 6, 8]);
    const a = randInt(3, d - 1), b = randInt(1, a - 1);
    return q(qFractionSubNumerator(a, b, d, cc), a - b, t("fractionSub", cc));
  },
  percent10: (cc) => { const n = randInt(2, 10) * 100; return q(qPercentOf(n, 10, cc), n / 10, t("percent", cc)); },
  percent50: (cc) => { const n = randInt(2, 10) * 100; return q(qPercentOf(n, 50, cc), n / 2, t("percent", cc)); },
  percent25: (cc) => { const n = randInt(2, 20) * 10; return q(qPercentOf(n, 25, cc), n / 4, t("percent", cc)); },
  geoRectPerimeter: (cc) => { const a = randInt(3, 12), b = randInt(3, 12); return q(qRectPerimeter(a, b, cc), 2 * (a + b), t("geometry", cc)); },
  geoRectArea: (cc) => { const a = randInt(3, 10), b = randInt(3, 10); return q(qRectArea(a, b, cc), a * b, t("geometry", cc)); },
  geoSquarePerimeter: (cc) => { const a = randInt(3, 15); return q(qSquarePerimeter(a, cc), 4 * a, t("geometry", cc)); },
  wordDiscount: (cc) => {
    const cur = getCurrency(cc);
    const n = randInt(200, 500); const p = pick([10, 25, 50]);
    return q(wpSavings(n, p, cur, cc), n * p / 100, t("wordProblem", cc), 0, true);
  },
  wordOps: (cc) => {
    const a = randInt(5, 15), b = randInt(3, 8), c = randInt(2, 6);
    return q(qOrderOfOpsReminder(`${a} + ${b} × ${c}`, cc), a + b * c, t("wordProblem", cc), 0, true);
  },
};

// ─── GRADE 6 GENERATORS ─────────────────────────────

const G6: Record<string, Generator> = {
  negative: (cc) => { const a = randInt(1, 10), b = randInt(a + 1, 20); return q(`${a} - ${b} = ?`, a - b, t("negativeNumbers", cc), -50); },
  negativeB: (cc) => { const a = randInt(-10, -1), b = randInt(1, 10); return q(`(${a}) + ${b} = ?`, a + b, t("negativeNumbers", cc), -50); },
  negativeC: (cc) => { const a = randInt(-10, -1), b = randInt(-10, -1); return q(`(${a}) + (${b}) = ?`, a + b, t("negativeNumbers", cc), -50); },
  fractionMul: (cc) => {
    const d = pick([2, 3, 4, 5]);
    const n = randInt(1, d);
    const w = randInt(2, 6) * d;
    return q(`${n}/${d} × ${w} = ?`, (n * w) / d, t("fractionMul", cc));
  },
  fractionDiv: (cc) => {
    const n = randInt(4, 12);
    const d = pick([2, 3, 4]);
    return q(`${n} ÷ ${d} = ?`, Math.floor(n / d), t("fractionDiv", cc));
  },
  ratio: (cc) => {
    const ratio = randInt(2, 5); const smaller = randInt(2, 6);
    return q(qRatioSmallLarge(ratio, smaller, cc), smaller * ratio, t("ratio", cc));
  },
  speed: (cc) => {
    const speed = randInt(3, 8) * 10; const time = randInt(2, 5);
    return q(qSpeedDistance(speed, time, "km", cc), speed * time, t("ratio", cc));
  },
  percentCalc: (cc) => {
    const base = pick([200, 300, 400, 500, 600, 800, 1000]); const p = pick([5, 10, 15, 20, 25]);
    return q(qPercentOf(base, p, cc), base * p / 100, t("percentCalc", cc));
  },
  percentDiscount: (cc) => {
    const cur = getCurrency(cc);
    const orig = randInt(100, 500); const disc = pick([10, 20, 25, 50]);
    return q(wpDiscount("", orig, disc, cur, cc), orig - orig * disc / 100, t("percentCalc", cc), 0, true);
  },
  areaTriangle: (cc) => {
    const a = randInt(3, 10), h = randInt(3, 10);
    return q(qTriangleArea(a, h, cc), (a * h) / 2, t("area", cc));
  },
  areaSquare: (cc) => {
    const a = randInt(3, 12);
    return q(qSquareArea(a, cc), a * a, t("area", cc));
  },
  wordShoe: (cc) => {
    const cur = getCurrency(cc);
    const price = randInt(5, 20) * 100; const disc = pick([10, 20, 25]);
    return q(wpDiscount(getItems(cc).shoe, price, disc, cur, cc), price - price * disc / 100, t("wordProblem", cc), 0, true);
  },
  wordTrain: (cc) => {
    const km = randInt(60, 120); const h = pick([2, 3, 4]);
    return q(wpAvgSpeed(km * h, h, cc), km, t("wordProblem", cc), 0, true);
  },
};

// ─── GRADE 7 GENERATORS ─────────────────────────────

const G7: Record<string, Generator> = {
  power2: (cc) => { const b = randInt(2, 10); return q(`${b}² = ?`, b * b, t("powers", cc)); },
  power3: (cc) => { const b = randInt(2, 5); return q(`${b}³ = ?`, b ** 3, t("powers", cc)); },
  power10: (_cc) => q("10³ = ?", 1000, t("powers", _cc)),
  algebraSub: (cc) => {
    const a = randInt(2, 5), b = randInt(1, 10);
    return q(qIfAEquals("a", a, `3a + ${b}`, cc), 3 * a + b, t("algebra", cc));
  },
  algebraSimp: (cc) => q(qSimplifyCoeff("2x + 3x = ?x", cc), 5, t("algebra", cc)),
  algebraMul: (cc) => {
    const a = randInt(2, 5), b = randInt(2, 5);
    return q(qSimplifyCoeff(`(${a}x)(${b}x) = ?x²`, cc), a * b, t("algebra", cc));
  },
  equation: (cc) => {
    const x = randInt(1, 10);
    const a = randInt(2, 5);
    const b = randInt(1, 15);
    const c = a * x + b;
    return q(qSolveX(`${a}x + ${b} = ${c}.`, cc), x, t("equations", cc));
  },
  equationB: (cc) => {
    const x = randInt(2, 8);
    const a = randInt(2, 4);
    const b = randInt(3, 12);
    const c = a * x - b;
    return q(qSolveX(`${a}x - ${b} = ${c}.`, cc), x, t("equations", cc));
  },
  triangleAngle: (cc) => {
    const a = randInt(30, 80), b = randInt(30, 150 - a);
    return q(qTriangleThirdAngle(a, b, cc), 180 - a - b, t("triangles", cc));
  },
  equilateral: (cc) => q(qEquilateralAngle(cc), 60, t("triangles", cc)),
  isosceles: (cc) => {
    const a = randInt(20, 80);
    return q(qIsoscelesApex(a, cc), 180 - 2 * a, t("triangles", cc));
  },
  pythag34: (cc) => q(qPythHypotenuse(3, 4, cc), 5, t("pythagoras", cc)),
  pythag68: (cc) => q(qPythHypotenuse(6, 8, cc), 10, t("pythagoras", cc)),
  pythagLeg13: (cc) => q(qPythLeg(13, 5, cc), 12, t("pythagoras", cc)),
  pythagLeg10: (cc) => q(qPythLeg(10, 6, cc), 8, t("pythagoras", cc)),
  wordThink: (cc) => {
    const x = randInt(3, 12); const a = randInt(2, 4); const b = randInt(5, 20);
    return q(wpThinkNumber(a, b, a * x + b, cc), x, t("wordProblem", cc), 0, true);
  },
  wordSquare: (cc) => {
    const x = randInt(2, 8); const a = randInt(2, 5);
    return q(wpNumberSquare(x, a, a * x, cc), x * x, t("wordProblem", cc), 0, true);
  },
};

// ─── GRADE 8 GENERATORS ─────────────────────────────

const G8: Record<string, Generator> = {
  sqrt: (cc) => { const n = pick([4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144]); return q(`√${n} = ?`, Math.sqrt(n), t("squareRoot", cc)); },
  sqrtExpr: (cc) => { const a = randInt(2, 8); const b = randInt(1, 5); return q(`√${a * a} + ${b} × 2 = ?`, a + b * 2, t("squareRoot", cc)); },
  eqTwoSide: (cc) => {
    const x = randInt(2, 8);
    const a = randInt(3, 6); const c = randInt(1, a - 1);
    const b = randInt(1, 10);
    const d = (a - c) * x + b;
    return q(qSolveX(`${a}x + ${b} = ${c}x + ${d}.`, cc), x, t("equations", cc));
  },
  eqSimple: (cc) => {
    const x = randInt(1, 10);
    const a = randInt(2, 5);
    const b = randInt(1, 15);
    return q(qSolveX(`${a}x - ${b} = ${a * x - b}.`, cc), x, t("equations", cc));
  },
  funcValue: (cc) => {
    const m = randInt(1, 5), b = randInt(-5, 10), x = randInt(1, 6);
    return q(qFunctionValue(m, b, x, cc), m * x + b, t("functions", cc), -100);
  },
  funcIntercept: (cc) => {
    const m = randInt(2, 4), b = randInt(1, 10);
    return q(qYIntercept(m, b, cc), b, t("functions", cc));
  },
  probBall: (cc) => {
    const total = pick([6, 8, 10, 12]); const good = randInt(1, total / 2);
    const items = getItems(cc);
    return q(qBallProb(total, good, items.red, cc), Math.round(good / total * 100), t("probability", cc));
  },
  probDice: (cc) => q(qDiceProb(6, cc), 17, t("probability", cc)),
  probCoin: (cc) => q(qCoinProb(cc), 50, t("probability", cc)),
  complexPow: (cc) => {
    const a = randInt(2, 6); const sq = pick([16, 25, 36, 49]);
    return q(`${a}² + √${sq} = ?`, a * a + Math.sqrt(sq), t("complex", cc));
  },
  complexExpr: (cc) => {
    const a = randInt(3, 8); const b = randInt(2, 5);
    return q(qIfAEquals("x", a, `x² - ${b}x`, cc), a * a - b * a, t("complex", cc), -100);
  },
  wordTravel: (cc) => {
    const v = randInt(40, 80); const tt = randInt(2, 5);
    return q(wpTravel(v * tt, v, cc), tt, t("wordProblem", cc), 0, true);
  },
  wordPrice: (cc) => {
    const cur = getCurrency(cc);
    const p = pick([10, 15, 20, 25]); const orig = randInt(4, 12) * 100;
    return q(wpPriceIncrease(getItems(cc).laptop, orig, p, cur, cc), orig + orig * p / 100, t("wordProblem", cc), 0, true);
  },
};

// ─── CURRICULUM MAP ─────────────────────────────
// Maps grade + period to available question generators
// period: 1=Sept-Oct, 2=Nov-Dec, 3=Jan-Feb, 4=Mar-Apr, 5=May-Jun

interface PeriodTopics {
  current: Generator[];  // 70% from current topics
  review: Generator[];   // 30% from review topics
}

const CURRICULUM: Record<number, Record<number, PeriodTopics>> = {
  1: {
    1: { current: [G1.add10, G1.add10b, G1.compare, G1.missing10], review: [] },
    2: { current: [G1.add10, G1.add10b, G1.sub10, G1.sub10b, G1.missing10sub], review: [G1.compare] },
    3: { current: [G1.add20, G1.add20b, G1.sub20, G1.sub20b], review: [G1.add10, G1.sub10, G1.missing10] },
    4: { current: [G1.add20, G1.sub20, G1.word1, G1.word2, G1.word3], review: [G1.add10, G1.sub10, G1.compare] },
    5: { current: [G1.add20, G1.add20b, G1.sub20, G1.sub20b, G1.word1, G1.word2, G1.word3, G1.word4, G1.word5, G1.compare, G1.missing10, G1.missing10sub], review: [G1.add10, G1.sub10] },
  },
  2: {
    1: { current: [G2.add100tens, G2.sub100tens, G2.add100, G2.missing100], review: [G1.add20, G1.sub20] },
    2: { current: [G2.add100tens, G2.sub100tens, G2.add100, G2.add100b, G2.sequence], review: [G1.add20, G1.sub20] },
    3: { current: [G2.add100, G2.add100b, G2.sub100, G2.sub100b, G2.units], review: [G2.add100tens, G2.sub100tens] },
    4: { current: [G2.mul2510, G2.mul2510b, G2.add100, G2.sub100, G2.ampmClock], review: [G2.add100tens, G2.sequence] },
    5: { current: [G2.mul2510, G2.mul2510b, G2.div2510, G2.word1, G2.word2, G2.word3, G2.word4, G2.units, G2.ampmClock, G2.sequence], review: [G2.add100, G2.sub100] },
  },
  3: {
    1: { current: [G3.add1000, G3.add1000b, G3.sub1000], review: [G2.add100, G2.sub100, G2.mul2510] },
    2: { current: [G3.add1000, G3.sub1000, G3.writtenAdd, G3.sequence], review: [G2.mul2510, G2.div2510] },
    3: { current: [G3.mul, G3.mulB, G3.div, G3.divB, G3.missingMul], review: [G3.add1000, G3.sub1000] },
    4: { current: [G3.writtenAdd, G3.writtenSub, G3.mul, G3.div, G3.missingMul, G3.ampmClock], review: [G3.divB, G3.sequence] },
    5: { current: [G3.word1, G3.word2, G3.word3, G3.units, G3.ampmClock, G3.mul, G3.mulB, G3.div, G3.divB], review: [G3.writtenAdd, G3.writtenSub, G3.sequence] },
  },
  4: {
    1: { current: [G4.placeValue, G4.writtenMul, G4.writtenMulB, G4.sequence], review: [G3.mul, G3.div, G3.writtenAdd] },
    2: { current: [G4.writtenMul, G4.writtenDiv, G4.writtenDivB, G4.divTwoDigit], review: [G4.placeValue, G4.placeValueBig] },
    3: { current: [G4.fractions, G4.writtenMul, G4.writtenDiv, G4.divTwoDigit], review: [G4.placeValue, G4.sequence] },
    4: { current: [G4.decimals, G4.fractions, G4.units], review: [G4.writtenMul, G4.writtenDiv] },
    5: { current: [G4.units, G4.volumeWord, G4.word1, G4.word2, G4.fractions, G4.decimals, G4.sequence], review: [G4.writtenMul, G4.writtenDiv, G4.divTwoDigit] },
  },
  5: {
    1: { current: [G5.largeNumbers, G5.roundHundreds, G5.orderOfOps, G5.orderOfOpsB], review: [G4.writtenMul, G4.writtenDiv, G4.fractions] },
    2: { current: [G5.orderOfOps, G5.orderOfOpsC, G5.orderOfOpsD, G5.fractionAdd], review: [G5.largeNumbers] },
    3: { current: [G5.fractionAdd, G5.fractionSub, G5.percent10], review: [G5.orderOfOps, G5.largeNumbers] },
    4: { current: [G5.percent10, G5.percent50, G5.percent25, G5.fractionAdd], review: [G5.orderOfOps, G5.orderOfOpsB] },
    5: { current: [G5.geoRectPerimeter, G5.geoRectArea, G5.geoSquarePerimeter, G5.percent10, G5.percent50, G5.wordDiscount, G5.wordOps], review: [G5.fractionAdd, G5.fractionSub] },
  },
  6: {
    1: { current: [G6.negative, G6.negativeB, G6.fractionMul], review: [G5.percent10, G5.orderOfOps] },
    2: { current: [G6.fractionMul, G6.fractionDiv, G6.negativeC], review: [G6.negative] },
    3: { current: [G6.ratio, G6.speed, G6.percentCalc], review: [G6.negative, G6.fractionMul] },
    4: { current: [G6.percentCalc, G6.percentDiscount, G6.areaTriangle, G6.areaSquare], review: [G6.ratio, G6.speed] },
    5: { current: [G6.areaTriangle, G6.areaSquare, G6.percentCalc, G6.wordShoe, G6.wordTrain], review: [G6.negative, G6.fractionMul, G6.ratio] },
  },
  7: {
    1: { current: [G7.power2, G7.power3, G7.algebraSub], review: [G6.percentCalc, G6.negative] },
    2: { current: [G7.algebraSub, G7.algebraSimp, G7.algebraMul, G7.equation], review: [G7.power2] },
    3: { current: [G7.equation, G7.equationB, G7.triangleAngle, G7.equilateral], review: [G7.power2, G7.algebraSub] },
    4: { current: [G7.triangleAngle, G7.isosceles, G7.pythag34, G7.pythag68], review: [G7.equation, G7.equationB] },
    5: { current: [G7.pythag34, G7.pythag68, G7.pythagLeg13, G7.pythagLeg10, G7.wordThink, G7.wordSquare, G7.equation, G7.equationB], review: [G7.power2, G7.power3, G7.algebraSub, G7.triangleAngle] },
  },
  8: {
    1: { current: [G8.sqrt, G8.sqrtExpr, G8.eqTwoSide], review: [G7.power2, G7.equation] },
    2: { current: [G8.eqTwoSide, G8.eqSimple, G8.funcValue], review: [G8.sqrt] },
    3: { current: [G8.funcValue, G8.funcIntercept, G8.probBall, G8.probCoin], review: [G8.sqrt, G8.eqTwoSide] },
    4: { current: [G8.probBall, G8.probDice, G8.probCoin, G8.complexPow], review: [G8.funcValue] },
    5: { current: [G8.complexPow, G8.complexExpr, G8.wordTravel, G8.wordPrice, G8.probBall, G8.probCoin], review: [G8.sqrt, G8.eqTwoSide, G8.funcValue] },
  },
};

// ─── TEST GENERATION (NO DUPLICATES) ─────────────────────────────

const TOTAL_QUESTIONS = 10;

export function generateTest(grade: number, period?: number, countryCode?: string): MathQuestion[] {
  const cc = countryCode || "HU";
  const p = period ?? getPeriod();
  const topics = CURRICULUM[grade]?.[p];
  if (!topics) return [];

  const questions: MathQuestion[] = [];
  const usedQuestions = new Set<string>();
  const currentCount = Math.ceil(TOTAL_QUESTIONS * 0.7); // 7 current topic questions
  const reviewCount = TOTAL_QUESTIONS - currentCount;     // 3 review questions

  function addUnique(gen: Generator, maxAttempts = 15): boolean {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const question = gen(cc);
      const key = question.question;
      if (!usedQuestions.has(key)) {
        usedQuestions.add(key);
        questions.push(question);
        return true;
      }
    }
    return false;
  }

  // Generate current topic questions - rotate through generators
  const currentGens = topics.current;
  for (let i = 0; i < currentCount; i++) {
    const gen = currentGens[i % currentGens.length];
    addUnique(gen);
  }

  // Generate review questions
  const reviewGens = topics.review.length > 0 ? topics.review : currentGens;
  for (let i = 0; i < reviewCount; i++) {
    const gen = reviewGens[i % reviewGens.length];
    addUnique(gen);
  }

  return shuffleArray(questions);
}

// ─── KLASSENARBEIT GENERATION (School Exam Format) ─────────────────────────────
// Struktura: Kopfrechnen, Schriftlich, Sachaufgaben, Geometrie, Bonus
// Csak Grade 5 támogatott jelenleg

interface SectionConfig {
  name: string;
  questionCount: number;
  pointsPerQuestion: number;
  generators: Generator[];
}

export function generateKlassenarbeit(grade: number, period?: number, countryCode?: string): MathQuestion[] {
  // Grade 1-8 támogatott
  if (grade < 1 || grade > 8) return [];

  const cc = countryCode || "HU";
  const p = period ?? getPeriod();
  const topics = CURRICULUM[grade]?.[p];
  if (!topics) return [];

  const questions: MathQuestion[] = [];
  const usedQuestions = new Set<string>();

  // Szekciók definiálása - Grade függő
  let sections: Record<string, SectionConfig>;

  switch (grade) {
    case 1:
      sections = {
        addition: {
          name: "Addition",
          questionCount: 2,
          pointsPerQuestion: 1,
          generators: [G1.add10, G1.add10b, G1.add20],
        },
        subtraction: {
          name: "Subtraction",
          questionCount: 2,
          pointsPerQuestion: 1,
          generators: [G1.sub10, G1.sub10b, G1.sub20],
        },
        wordproblems: {
          name: "Word Problems",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G1.word1, G1.word2, G1.word3],
        },
        comparison: {
          name: "Comparison",
          questionCount: 2,
          pointsPerQuestion: 1,
          generators: [G1.compare, G1.missing10],
        },
        bonus: {
          name: "Bonus",
          questionCount: 1,
          pointsPerQuestion: 1,
          generators: [G1.missing10sub],
        },
      };
      break;

    case 2:
      sections = {
        addition: {
          name: "Addition",
          questionCount: 2,
          pointsPerQuestion: 1,
          generators: [G2.add100, G2.add100b, G2.add100tens],
        },
        subtraction: {
          name: "Subtraction",
          questionCount: 2,
          pointsPerQuestion: 1,
          generators: [G2.sub100, G2.sub100b, G2.sub100tens],
        },
        multiplication: {
          name: "Multiplication",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G2.mul2510, G2.mul2510b, G2.div2510],
        },
        wordproblems: {
          name: "Word Problems",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G2.word1, G2.word2, G2.word3],
        },
        bonus: {
          name: "Bonus",
          questionCount: 1,
          pointsPerQuestion: 1,
          generators: [G2.sequence, G2.missing100],
        },
      };
      break;

    case 3:
      sections = {
        arithmetics: {
          name: "Arithmetics",
          questionCount: 2,
          pointsPerQuestion: 1,
          generators: [G3.add1000, G3.add1000b, G3.sub1000, G3.writtenAdd],
        },
        multiplication: {
          name: "Multiplication",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G3.mul, G3.mulB, G3.div, G3.divB],
        },
        wordproblems: {
          name: "Word Problems",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G3.word1, G3.word2, G3.word3],
        },
        geometry: {
          name: "Geometry",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G3.units],
        },
        bonus: {
          name: "Bonus",
          questionCount: 1,
          pointsPerQuestion: 1,
          generators: [G3.sequence, G3.missingMul],
        },
      };
      break;

    case 4:
      sections = {
        kopfrechnen: {
          name: "Kopfrechnen",
          questionCount: 2,
          pointsPerQuestion: 1,
          generators: [G4.writtenMul, G4.writtenMulB, G4.writtenDiv],
        },
        schriftlich: {
          name: "Schriftlich",
          questionCount: 3,
          pointsPerQuestion: 2,
          generators: [G4.writtenDiv, G4.writtenDivB, G4.divTwoDigit, G4.placeValue],
        },
        bruchrechnung: {
          name: "Bruchrechnung",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G4.fractions],
        },
        geometrie: {
          name: "Geometrie",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G4.units],
        },
        bonus: {
          name: "Bonus",
          questionCount: 1,
          pointsPerQuestion: 1,
          generators: [G4.decimals, G4.sequence],
        },
      };
      break;

    case 5:
      sections = {
        kopfrechnen: {
          name: "Kopfrechnen",
          questionCount: 2,
          pointsPerQuestion: 1,
          generators: [G5.orderOfOps, G5.orderOfOpsB, G5.percent10],
        },
        schriftlich: {
          name: "Schriftlich",
          questionCount: 3,
          pointsPerQuestion: 2,
          generators: [G5.largeNumbers, G5.roundHundreds, G5.fractionAdd, G5.fractionSub],
        },
        sachaufgaben: {
          name: "Sachaufgaben",
          questionCount: 2,
          pointsPerQuestion: 3,
          generators: [G5.wordDiscount, G5.wordOps],
        },
        geometrie: {
          name: "Geometrie",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G5.geoRectPerimeter, G5.geoRectArea, G5.geoSquarePerimeter],
        },
        bonus: {
          name: "Bonus",
          questionCount: 1,
          pointsPerQuestion: 1,
          generators: [G5.percent25, G5.percent50],
        },
      };
      break;

    case 6:
      sections = {
        arithmetics: {
          name: "Arithmetics",
          questionCount: 2,
          pointsPerQuestion: 1,
          generators: [G6.negative, G6.negativeB, G6.negativeC],
        },
        fractions: {
          name: "Fractions",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G6.fractionMul, G6.fractionDiv],
        },
        ratios: {
          name: "Ratios & Speed",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G6.ratio, G6.speed, G6.percentCalc],
        },
        geometry: {
          name: "Geometry",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G6.areaTriangle, G6.areaSquare],
        },
        bonus: {
          name: "Bonus",
          questionCount: 1,
          pointsPerQuestion: 1,
          generators: [G6.percentDiscount, G6.wordTrain],
        },
      };
      break;

    case 7:
      sections = {
        algebra: {
          name: "Algebra",
          questionCount: 2,
          pointsPerQuestion: 1,
          generators: [G7.power2, G7.power3, G7.algebraSub],
        },
        equations: {
          name: "Equations",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G7.equation, G7.equationB],
        },
        geometry: {
          name: "Geometry",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G7.triangleAngle, G7.isosceles, G7.pythag34],
        },
        pythagoras: {
          name: "Pythagoras",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G7.pythag68, G7.pythagLeg13, G7.pythagLeg10],
        },
        bonus: {
          name: "Bonus",
          questionCount: 1,
          pointsPerQuestion: 1,
          generators: [G7.wordThink, G7.wordSquare],
        },
      };
      break;

    case 8:
      sections = {
        algebra: {
          name: "Algebra",
          questionCount: 2,
          pointsPerQuestion: 1,
          generators: [G8.sqrt, G8.sqrtExpr],
        },
        equations: {
          name: "Equations",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G8.eqTwoSide, G8.eqSimple],
        },
        functions: {
          name: "Functions",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G8.funcValue, G8.funcIntercept],
        },
        probability: {
          name: "Probability",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G8.probBall, G8.probDice, G8.probCoin],
        },
        bonus: {
          name: "Bonus",
          questionCount: 1,
          pointsPerQuestion: 1,
          generators: [G8.complexPow, G8.complexExpr],
        },
      };
      break;

    default:
      return [];
  }

  function addUnique(gen: Generator, section: string, points: number, maxAttempts = 15): boolean {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const question = gen(cc);
      const key = question.question;
      if (!usedQuestions.has(key)) {
        usedQuestions.add(key);
        // Kibővítjük a question-t section és maxPoints-tal
        const extendedQuestion: MathQuestion = {
          ...question,
          section,
          maxPoints: points,
        };
        questions.push(extendedQuestion);
        return true;
      }
    }
    return false;
  }

  // Generálunk a szekciók szerint
  for (const [sectionKey, config] of Object.entries(sections)) {
    for (let i = 0; i < config.questionCount; i++) {
      const gen = config.generators[i % config.generators.length];
      addUnique(gen, config.name, config.pointsPerQuestion);
    }
  }

  return shuffleArray(questions);
}

// ─── KLASSENARBEIT FROM QUESTION BANK ─────────────────────────────
// Asynchrón verzió, amely Supabase-ből tölti a kérdéseket
// Fallback: Ha nincs adat a Question Bank-ben, a lokális generátor-alapú verzióra esik vissza

export async function generateKlassenarbeitFromBank(
  grade: number,
): Promise<MathQuestion[]> {
  try {
    // Check if user is authenticated
    const { getUser } = await import("./auth");
    const user = await getUser();

    if (!user) {
      console.log("[Klassenarbeit] Not authenticated, using local generators");
      return generateKlassenarbeit(grade);
    }

    // Import dinamikus, hogy elkerüljük a circular dependency-t
    const { fetchQuestionsBySections } = await import("./assessment/questionBank");

    // Szekciók és mennyiségek
    const sections: Record<string, number> = {
      Kopfrechnen: 2,
      Schriftlich: 3,
      Sachaufgaben: 2,
      Geometrie: 2,
      Bonus: 1,
    };

    const questions = await fetchQuestionsBySections(grade, sections);

    // Ha nem sikerült betölteni (nincs adat), fallback
    if (questions.length === 0) {
      console.warn(
        "[Klassenarbeit] No questions in Question Bank, falling back to generators",
      );
      return generateKlassenarbeit(grade);
    }

    // Shuffle az eredményt a véletlenszerűség érdekében
    return shuffleArray(questions);
  } catch (error) {
    console.error("[Klassenarbeit] Failed to fetch from Question Bank:", error);
    // Fallback: lokális generátor-alapú verzió
    return generateKlassenarbeit(grade);
  }
}

// ─── REALISTIC KLASSENARBEIT GENERATION (Grouped Tasks) ─────────────────────────────
// Generates grouped tasks with images, sub-questions (a, b, c...), and partial scoring

function createGroupedTask(
  taskNumber: number,
  title: string,
  description: string | undefined,
  imageUrl: string | undefined,
  subQuestions: SubQuestion[],
  section: string,
): GroupedTask {
  const totalPoints = subQuestions.reduce((sum, sq) => sum + sq.points, 0);
  return {
    taskNumber,
    title,
    description,
    imageUrl,
    totalPoints,
    subQuestions,
    section,
  };
}

export function generateRealisticKlassenarbeit(grade: number, period?: number, countryCode?: string): RealisticKlassenarbeit {
  const p = period ?? getPeriod();
  const cc = countryCode || "HU";
  const tasks: GroupedTask[] = [];
  let taskNumber = 1;

  // Language helper - use translations
  const isDE = cc === "DE";
  const t = (de: string, hu: string) => isDE ? de : hu;

  // Grade-specific task generators
  switch (grade) {
    case 1:
      // Simple addition and subtraction tasks
      tasks.push(
        createGroupedTask(
          taskNumber++,
          t("Addition bis 10", "Összeadás 10-ig"),
          t("Berechne folgende Additionen:", "Számítsd ki a következő összeadásokat:"),
          undefined,
          [
            { id: "a", text: "3 + 2 = ?", correctAnswer: 5, points: 1, type: "free-text", workSpaceLines: 2 },
            { id: "b", text: "4 + 5 = ?", correctAnswer: 9, points: 1, type: "free-text", workSpaceLines: 2 },
            { id: "c", text: "2 + 6 = ?", correctAnswer: 8, points: 1, type: "free-text", workSpaceLines: 2 },
          ],
          "Kopfrechnen",
        ),
      );
      tasks.push(
        createGroupedTask(
          taskNumber++,
          t("Subtraktion bis 10", "Kivonás 10-ig"),
          t("Berechne folgende Subtraktionen:", "Számítsd ki a következő kivonásokat:"),
          undefined,
          [
            { id: "a", text: "7 - 2 = ?", correctAnswer: 5, points: 1, type: "free-text", workSpaceLines: 2 },
            { id: "b", text: "9 - 4 = ?", correctAnswer: 5, points: 1, type: "free-text", workSpaceLines: 2 },
            { id: "c", text: "6 - 1 = ?", correctAnswer: 5, points: 1, type: "free-text", workSpaceLines: 2 },
          ],
          "Kopfrechnen",
        ),
      );
      break;

    case 2:
      // Addition/subtraction up to 100, multiplication
      tasks.push(
        createGroupedTask(
          taskNumber++,
          t("Schriftliche Addition", "Írásbeli összeadás"),
          t("Löse diese Additionsaufgaben:", "Oldd meg ezeket az összeadás feladatokat:"),
          undefined,
          [
            { id: "a", text: "25 + 13 = ?", correctAnswer: 38, points: 1, type: "free-text", workSpaceLines: 3 },
            { id: "b", text: "34 + 22 = ?", correctAnswer: 56, points: 1, type: "free-text", workSpaceLines: 3 },
          ],
          "Schriftlich",
        ),
      );
      tasks.push(
        createGroupedTask(
          taskNumber++,
          t("Einmaleins", "Szorzótábla"),
          t("Ergänze die Multiplikationen:", "Egészítsd ki a szorzásokat:"),
          undefined,
          [
            { id: "a", text: "2 × 5 = ?", correctAnswer: 10, points: 1, type: "free-text", workSpaceLines: 2 },
            { id: "b", text: "5 × 3 = ?", correctAnswer: 15, points: 1, type: "free-text", workSpaceLines: 2 },
            { id: "c", text: "10 × 4 = ?", correctAnswer: 40, points: 1, type: "free-text", workSpaceLines: 2 },
          ],
          "Kopfrechnen",
        ),
      );
      break;

    case 3:
      // Larger numbers, written operations
      tasks.push(
        createGroupedTask(
          taskNumber++,
          t("Schriftliche Addition (bis 1000)", "Írásbeli összeadás (1000-ig)"),
          t("Addiere diese dreistelligen Zahlen:", "Add össze ezeket a háromjegyű számokat:"),
          undefined,
          [
            { id: "a", text: "234 + 156 = ?", correctAnswer: 390, points: 2, type: "free-text", workSpaceLines: 4 },
            { id: "b", text: "345 + 287 = ?", correctAnswer: 632, points: 2, type: "free-text", workSpaceLines: 4 },
          ],
          "Schriftlich",
        ),
      );
      tasks.push(
        createGroupedTask(
          taskNumber++,
          t("Multiplikation und Division", "Szorzás és osztás"),
          t("Löse diese Multiplikations- und Divisionsaufgaben:", "Oldd meg ezeket a szorzás- és osztásfeladatokat:"),
          undefined,
          [
            { id: "a", text: "6 × 7 = ?", correctAnswer: 42, points: 1, type: "free-text", workSpaceLines: 2 },
            { id: "b", text: "48 ÷ 6 = ?", correctAnswer: 8, points: 1, type: "free-text", workSpaceLines: 2 },
            { id: "c", text: "7 × 8 = ?", correctAnswer: 56, points: 1, type: "free-text", workSpaceLines: 2 },
          ],
          "Kopfrechnen",
        ),
      );
      break;

    case 4:
      // Place value, fractions, geometry
      tasks.push(
        createGroupedTask(
          taskNumber++,
          t("Stellenwert", "Helyiérték"),
          t("Schreibe die Ziffer an der angegebenen Stelle:", "Írd le az adott helyen lévő számjegyet:"),
          undefined,
          [
            { id: "a", text: t("In 4.372, welche Ziffer steht auf der Hunderterstelle?", "A 4372-ben melyik szám áll a százas helyen?"), correctAnswer: 3, points: 1, type: "free-text", workSpaceLines: 2 },
            { id: "b", text: t("In 5.681, welche Ziffer steht auf der Tausenderstelle?", "Az 5681-ben melyik szám áll az ezres helyen?"), correctAnswer: 5, points: 1, type: "free-text", workSpaceLines: 2 },
          ],
          "Schriftlich",
        ),
      );
      tasks.push(
        createGroupedTask(
          taskNumber++,
          t("Bruchrechnung", "Törtszámolás"),
          t("Arbeite mit Brüchen:", "Dolgozz törtekkel:"),
          undefined,
          [
            { id: "a", text: t("Wie viele Viertel machen ein Ganzes?", "Hány negyed tesz ki egy egészet?"), correctAnswer: 4, points: 1, type: "free-text", workSpaceLines: 2 },
            { id: "b", text: t("Wie viele Hälften sind in 3 Ganzen?", "Hány fél van 3 egészben?"), correctAnswer: 6, points: 1, type: "free-text", workSpaceLines: 2 },
            { id: "c", text: t("Welcher Bruch ist schraffiert? (3/4 von 4)", "Melyik tört van besatírozva? (3/4 a 4-ből)"), correctAnswer: "3/4", points: 1, type: "free-text", workSpaceLines: 2 },
          ],
          "Bruchrechnung",
        ),
      );
      break;

    case 5:
      // More complex operations, word problems
      tasks.push(
        createGroupedTask(
          taskNumber++,
          t("Rechenreihenfolge", "Műveleti sorrend"),
          t("Berechne mit der richtigen Rechenreihenfolge:", "Számítsd ki a helyes műveleti sorrenddel:"),
          undefined,
          [
            { id: "a", text: "2 + 3 × 4 = ?", correctAnswer: 14, points: 1, type: "free-text", workSpaceLines: 3 },
            { id: "b", text: "(5 + 3) × 2 = ?", correctAnswer: 16, points: 1, type: "free-text", workSpaceLines: 3 },
          ],
          "Kopfrechnen",
        ),
      );
      tasks.push(
        createGroupedTask(
          taskNumber++,
          t("Sachaufgabe: Einkaufen", "Szöveges feladat: Bevásárlás"),
          t("Ein Buch kostet 12€ und ein Stift kostet 3€. Maria kauft 2 Bücher und 3 Stifte.", "Egy könyv 12€-ba kerül, egy toll 3€-ba. Márta vásárol 2 könyvet és 3 tollat."),
          undefined,
          [
            { id: "a", text: t("Wie viel kosten 1 Buch und 1 Stift zusammen?", "Mennyibe kerül 1 könyv és 1 toll együtt?"), correctAnswer: 15, points: 1, type: "free-text", workSpaceLines: 3 },
            { id: "b", text: t("Wie viel gibt Maria insgesamt aus?", "Márta összesen mennyit költekezik?"), correctAnswer: 33, points: 2, type: "free-text", workSpaceLines: 4 },
          ],
          "Sachaufgaben",
        ),
      );
      break;

    case 6:
      // Negative numbers, fractions, ratios
      tasks.push(
        createGroupedTask(
          taskNumber++,
          t("Negative Zahlen", "Negatív számok"),
          t("Arbeite mit negativen Zahlen und Ganzzahlen:", "Dolgozz negatív számokkal és egész számokkal:"),
          undefined,
          [
            { id: "a", text: "5 + (-3) = ?", correctAnswer: 2, points: 1, type: "free-text", workSpaceLines: 2 },
            { id: "b", text: "(-4) - (-2) = ?", correctAnswer: -2, points: 1, type: "free-text", workSpaceLines: 2 },
            { id: "c", text: t("Was ist das Gegenteil von 7?", "Mi a 7 ellentéte?"), correctAnswer: -7, points: 1, type: "free-text", workSpaceLines: 2 },
          ],
          "Arithmetics",
        ),
      );
      break;

    case 7:
      // Algebra, equations, geometry
      tasks.push(
        createGroupedTask(
          taskNumber++,
          t("Lineare Gleichungen", "Lineáris egyenletek"),
          t("Löse für x auf:", "Oldd meg az x-et:"),
          undefined,
          [
            { id: "a", text: t("x + 5 = 12. Was ist x?", "x + 5 = 12. Mi az x?"), correctAnswer: 7, points: 2, type: "free-text", workSpaceLines: 3 },
            { id: "b", text: t("3x = 15. Was ist x?", "3x = 15. Mi az x?"), correctAnswer: 5, points: 2, type: "free-text", workSpaceLines: 3 },
            { id: "c", text: t("2x + 3 = 11. Was ist x?", "2x + 3 = 11. Mi az x?"), correctAnswer: 4, points: 2, type: "free-text", workSpaceLines: 3 },
          ],
          "Algebra",
        ),
      );
      break;

    case 8:
      // Functions, probability, complex equations
      tasks.push(
        createGroupedTask(
          taskNumber++,
          t("Quadratische Gleichungen", "Másodfokú egyenletek"),
          t("Löse die quadratische Gleichung:", "Oldd meg a másodfokú egyenletet:"),
          undefined,
          [
            { id: "a", text: t("x² = 25. Welche Lösungen gibt es?", "x² = 25. Mely megoldások vannak?"), correctAnswer: "±5", points: 2, type: "free-text", workSpaceLines: 3 },
            { id: "b", text: t("x² - 4 = 0. Welche Lösungen gibt es?", "x² - 4 = 0. Mely megoldások vannak?"), correctAnswer: "±2", points: 2, type: "free-text", workSpaceLines: 3 },
            { id: "c", text: t("Was ist √36?", "Mi az √36?"), correctAnswer: 6, points: 1, type: "free-text", workSpaceLines: 2 },
          ],
          "Algebra",
        ),
      );
      break;

    default:
      return { grade, period: p, totalPoints: 0, tasks: [] };
  }

  const totalPoints = tasks.reduce((sum, task) => sum + task.totalPoints, 0);
  return { grade, period: p, totalPoints, tasks };
}

// ─── TEST GENERATION WITH METADATA (for Supabase integration) ─────

export interface TestWithMeta {
  questions: MathQuestion[];
  generatorKeys: string[];
}

// Generator name lookup maps
const GEN_MAPS: Record<number, Record<string, Generator>> = {
  1: G1, 2: G2, 3: G3, 4: G4, 5: G5, 6: G6, 7: G7, 8: G8,
};

function findGenKey(gen: Generator, grade: number): string {
  const genMap = GEN_MAPS[grade];
  if (genMap) {
    for (const [key, fn] of Object.entries(genMap)) {
      if (fn === gen) return key;
    }
  }
  // Check adjacent grades (for review generators from previous grade)
  for (let g = grade - 1; g >= 1; g--) {
    const map = GEN_MAPS[g];
    if (map) {
      for (const [key, fn] of Object.entries(map)) {
        if (fn === gen) return key;
      }
    }
  }
  return "unknown";
}

export function generateTestWithMeta(grade: number, period?: number, countryCode?: string): TestWithMeta {
  const cc = countryCode || "HU";
  const p = period ?? getPeriod();
  const topics = CURRICULUM[grade]?.[p];
  if (!topics) return { questions: [], generatorKeys: [] };

  const questions: MathQuestion[] = [];
  const genKeys: string[] = [];
  const usedQuestions = new Set<string>();
  const currentCount = Math.ceil(TOTAL_QUESTIONS * 0.7);
  const reviewCount = TOTAL_QUESTIONS - currentCount;

  function addUnique(gen: Generator, maxAttempts = 15): boolean {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      const question = gen(cc);
      const key = question.question;
      if (!usedQuestions.has(key)) {
        usedQuestions.add(key);
        questions.push(question);
        genKeys.push(findGenKey(gen, grade));
        return true;
      }
    }
    return false;
  }

  const currentGens = topics.current;
  for (let i = 0; i < currentCount; i++) {
    addUnique(currentGens[i % currentGens.length]);
  }

  const reviewGens = topics.review.length > 0 ? topics.review : currentGens;
  for (let i = 0; i < reviewCount; i++) {
    addUnique(reviewGens[i % reviewGens.length]);
  }

  // Shuffle both arrays in the same order
  const indices = Array.from({ length: questions.length }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }

  return {
    questions: indices.map(i => questions[i]),
    generatorKeys: indices.map(i => genKeys[i]),
  };
}

// ─── GRADING (uses locale system) ─────────────────────────────

import { getCountryByCode, getSavedCountry, type MarkResult } from "./mathLocale";

export interface GradeResult {
  score: number;
  total: number;
  percentage: number;
  mark: MarkResult;  // country-specific mark (display, label, color, emoji)
}

export function calculateGradeResult(score: number, total: number): GradeResult {
  const percentage = Math.round((score / total) * 100);
  const countryCode = getSavedCountry() || "DE";
  const country = getCountryByCode(countryCode);
  const mark = country.calculateMark(percentage);
  return { score, total, percentage, mark };
}

// ─── KLASSENARBEIT GRADING ─────────────────────────────

export interface Note {
  value: number;      // 1-6
  label: string;      // Sehr gut, Gut, stb.
  color: string;      // Tailwind color
  emoji: string;      // Visual emoji
}

export interface SectionResult {
  name: string;
  correct: number;
  total: number;
  maxPoints: number;
  earnedPoints: number;
}

export interface KlassenarbeitResult {
  sectionResults: SectionResult[];
  totalPoints: number;
  maxTotalPoints: number;
  percentage: number;
  note: Note;
  starsEarned: number;
}

export function calculateNote(percentage: number): Note {
  if (percentage >= 90) return { value: 1, label: "Sehr gut", color: "#22C55E", emoji: "🌟" };
  if (percentage >= 80) return { value: 2, label: "Gut", color: "#3B82F6", emoji: "✨" };
  if (percentage >= 65) return { value: 3, label: "Befriedigend", color: "#F59E0B", emoji: "👍" };
  if (percentage >= 50) return { value: 4, label: "Ausreichend", color: "#F97316", emoji: "✓" };
  if (percentage >= 30) return { value: 5, label: "Mangelhaft", color: "#EF4444", emoji: "⚠️" };
  return { value: 6, label: "Ungenügend", color: "#7C3AED", emoji: "❌" };
}

export function getStarsForNote(note: Note): number {
  switch (note.value) {
    case 1: return 12;
    case 2: return 10;
    case 3: return 8;
    case 4: return 5;
    case 5:
    case 6:
    default: return 0;
  }
}

export function calculateKlassenarbeitResult(
  questions: MathQuestion[],
  answers: (number | string | null)[]
): KlassenarbeitResult {
  const sectionMap = new Map<string, SectionResult>();

  // Initialize section results
  for (const q of questions) {
    if (!q.section) continue;
    if (!sectionMap.has(q.section)) {
      sectionMap.set(q.section, {
        name: q.section,
        correct: 0,
        total: 0,
        maxPoints: 0,
        earnedPoints: 0,
      });
    }
  }

  // Calculate scores
  questions.forEach((q, i) => {
    if (!q.section) return;
    const section = sectionMap.get(q.section)!;
    const isCorrect = answers[i] === q.correctAnswer;
    const points = q.maxPoints || 0;

    section.total += 1;
    section.maxPoints += points;
    if (isCorrect) {
      section.correct += 1;
      section.earnedPoints += points;
    }
  });

  const sectionResults = Array.from(sectionMap.values());
  const totalPoints = sectionResults.reduce((acc, s) => acc + s.earnedPoints, 0);
  const maxTotalPoints = sectionResults.reduce((acc, s) => acc + s.maxPoints, 0);
  const percentage = maxTotalPoints > 0 ? Math.round((totalPoints / maxTotalPoints) * 100) : 0;
  const note = calculateNote(percentage);
  const starsEarned = getStarsForNote(note);

  return {
    sectionResults,
    totalPoints,
    maxTotalPoints,
    percentage,
    note,
    starsEarned,
  };
}

export function calculateRealisticKlassenarbeitResult(
  tasks: GroupedTask[],
  answers: Record<string, string | number>
): KlassenarbeitResult {
  const sectionMap = new Map<string, SectionResult>();

  // Initialize section results from tasks
  for (const task of tasks) {
    if (!sectionMap.has(task.section)) {
      sectionMap.set(task.section, {
        name: task.section,
        correct: 0,
        total: 0,
        maxPoints: 0,
        earnedPoints: 0,
      });
    }
  }

  // Calculate scores from sub-questions
  tasks.forEach((task) => {
    const section = sectionMap.get(task.section)!;

    task.subQuestions.forEach((subQuestion) => {
      const answerKey = `task_${task.taskNumber - 1}_${subQuestion.id}`;
      const userAnswer = answers[answerKey];
      const isCorrect = String(userAnswer).trim().toLowerCase() === String(subQuestion.correctAnswer).trim().toLowerCase();

      section.total += 1;
      section.maxPoints += subQuestion.points;
      if (isCorrect) {
        section.correct += 1;
        section.earnedPoints += subQuestion.points;
      }
    });
  });

  const sectionResults = Array.from(sectionMap.values());
  const totalPoints = sectionResults.reduce((acc, s) => acc + s.earnedPoints, 0);
  const maxTotalPoints = sectionResults.reduce((acc, s) => acc + s.maxPoints, 0);
  const percentage = maxTotalPoints > 0 ? Math.round((totalPoints / maxTotalPoints) * 100) : 0;
  const note = calculateNote(percentage);
  const starsEarned = getStarsForNote(note);

  return {
    sectionResults,
    totalPoints,
    maxTotalPoints,
    percentage,
    note,
    starsEarned,
  };
}

// ─── STATS ─────────────────────────────

const MATH_STATS_KEY = "plizio_math_stats";
const MATH_GRADE_KEY = "plizio_math_grade";

export interface MathStats {
  grade: number;
  testsCompleted: number;
  bestPercentage: number;
  topicAccuracy: Record<string, { correct: number; total: number }>;
}

export function getMathGrade(): number | null {
  if (typeof window === "undefined") return null;
  const g = localStorage.getItem(MATH_GRADE_KEY);
  return g ? parseInt(g, 10) : null;
}

export function saveMathGrade(grade: number): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(MATH_GRADE_KEY, grade.toString());
  }
}

export function getMathStats(): MathStats | null {
  if (typeof window === "undefined") return null;
  const data = localStorage.getItem(MATH_STATS_KEY);
  return data ? JSON.parse(data) : null;
}

export function updateMathStats(
  grade: number,
  percentage: number,
  topicResults: { topic: string; correct: boolean }[]
): void {
  const existing = getMathStats() || {
    grade,
    testsCompleted: 0,
    bestPercentage: 0,
    topicAccuracy: {},
  };

  existing.grade = grade;
  existing.testsCompleted += 1;
  existing.bestPercentage = Math.max(existing.bestPercentage, percentage);

  for (const r of topicResults) {
    if (!existing.topicAccuracy[r.topic]) {
      existing.topicAccuracy[r.topic] = { correct: 0, total: 0 };
    }
    existing.topicAccuracy[r.topic].total += 1;
    if (r.correct) existing.topicAccuracy[r.topic].correct += 1;
  }

  localStorage.setItem(MATH_STATS_KEY, JSON.stringify(existing));
}

export function getWeakTopics(): string[] {
  const stats = getMathStats();
  if (!stats) return [];
  const weak: string[] = [];
  for (const [topic, data] of Object.entries(stats.topicAccuracy)) {
    if (data.total >= 3 && data.correct / data.total < 0.5) {
      weak.push(topic);
    }
  }
  return weak;
}
