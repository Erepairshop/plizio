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
  qBallProb, qDiceProb, qCoinProb, qCoinProbTails, qDiceProbEven, qDiceProbMore,
  qFunctionValue, qYIntercept,
  qNextInSequence, qMissingInEquation,
  wpShelfRows, wpClassGroups, wpBuyMultiple, wpFruitTotal, wpCollectionDiff,
  wpDrinksPerWeek, qOrderOfOpsReminder,
  qNextEven, qNextOdd, qIsEvenOrOdd,
  qClockFullHour, qClockMinutes, qClockHalfPast, qClockQuarterPast,
  qG1ClockQuarter, qG1NumberLine, qG1PlaceValueTens, qG1PlaceValueOnes, qG1PlaceValueTotal,
  qG1GridCount, qG1GridEmpty, qG1Sequence, qG1Coins, qG1Timeline, qG1Fraction,
  qVorgaenger, qNachfolger, qZaehlen, qTauschaufgabe, qZahlzerlegung,
  qVerdoppeln, qHalbieren, qShapeCorners, qLaenger, qG1Wochentage,
  qRoundTo10, qRoundTo100,
  qCircleCircumference, qCircleArea,
  qMeanOf, qMedianOf,
  qSmallestPrimeFactor, qCountPrimesBetween,
  qLcmOf, qGcdOf,
  qFractionAddDiff, qFractionSubDiff,
  qInequalityGt, qInequalityLt,
  qVolumeBox, qVolumeCube, qVolumeCylinder,
  qSystemEq,
  qRoundTo1000,
  qCircleRadiusFromDiameter, qCircleDiameterFromRadius,
  qTimeElapsed, qHoursToMinutes, qMinutesToHours,
  qRunnerLaps, qChangeBack,
  getLang,
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

function qs(question: string, correctAnswer: string, topic: string, isWordProblem = false): MathQuestion {
  return { question, correctAnswer, options: [], topic, isWordProblem };
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
  evenOdd: (cc) => {
    return Math.random() < 0.5
      ? (() => { const n = randInt(1, 9) * 2; return q(qNextEven(n, cc), n + 2, t("evenOdd", cc)); })()
      : (() => { const n = randInt(0, 8) * 2 + 1; return q(qNextOdd(n, cc), n + 2, t("evenOdd", cc)); })();
  },
  clock1: (cc) => {
    if (cc === "US") {
      const h = randInt(1, 12);
      return q(qClockFullHour(h, cc), h, t("clockReading", cc));
    }
    const h = randInt(1, 12);
    return q(qClockFullHour(h, cc), h, t("clockReading", cc));
  },
  // ── G1 Visual topic text-based generators ──
  clockQuarter: (cc) => {
    const h = randInt(1, 12);
    const m = pick([0, 15, 30, 45]);
    return qs(qG1ClockQuarter(h, m, cc), `${h}:${String(m).padStart(2, "0")}`, t("clockReading", cc));
  },
  numberLine: (cc) => {
    const min = 0, max = 20, step = 1;
    const marked = randInt(min, max);
    return q(qG1NumberLine(min, max, marked, cc), marked, t("g1NumberLine", cc));
  },
  placeValue: (cc) => {
    const n = randInt(11, 99);
    const tens = Math.floor(n / 10), ones = n % 10;
    const r = Math.random();
    if (r < 0.33) return q(qG1PlaceValueTens(n, cc), tens, t("g1PlaceValue", cc));
    if (r < 0.66) return q(qG1PlaceValueOnes(n, cc), ones, t("g1PlaceValue", cc));
    return q(qG1PlaceValueTotal(tens, ones, cc), n, t("g1PlaceValue", cc));
  },
  gridCount: (cc) => {
    const rows = randInt(3, 5), cols = randInt(3, 5);
    const total = rows * cols;
    const colored = randInt(Math.floor(total * 0.3), Math.floor(total * 0.7));
    const empty = total - colored;
    if (Math.random() < 0.5) {
      return q(qG1GridCount(rows, cols, colored, cc), colored, t("g1GridCount", cc));
    }
    return q(qG1GridEmpty(rows, cols, empty, cc), empty, t("g1GridCount", cc));
  },
  sequence: (cc) => {
    const start = randInt(1, 5), step = randInt(1, 3);
    const full = Array.from({ length: 6 }, (_, i) => start + i * step);
    const miss1 = randInt(2, 3), miss2 = randInt(4, 5);
    const shown = full.map((v, i) => (i === miss1 || i === miss2) ? "?" : String(v)).join(", ");
    const answer = `${full[miss1]},${full[miss2]}`;
    return qs(qG1Sequence(shown, cc), answer, t("g1Sequence", cc));
  },
  coins: (cc) => {
    const cur = getCurrency(cc);
    const coinTypes = [
      { value: 1, count: randInt(1, 4) },
      { value: 2, count: randInt(1, 3) },
      { value: 5, count: randInt(0, 2) },
    ].filter(c => c.count > 0);
    const total = coinTypes.reduce((s, c) => s + c.value * c.count, 0);
    const desc = coinTypes.map(c => `${c.count}×${c.value}${cur}`).join(" + ");
    return q(qG1Coins(desc, cur, cc), total, t("g1Coins", cc));
  },
  timeline: (cc) => {
    const startH = randInt(7, 16);
    const diff = randInt(1, 4);
    const endH = startH + diff;
    return q(qG1Timeline(startH, endH, cc), diff, t("g1Timeline", cc));
  },
  fraction: (cc) => {
    const totalParts = randInt(2, 4);
    const coloredParts = randInt(1, totalParts);
    const shape = pick(["pizza", "rectangle", "circle"]);
    return q(qG1Fraction(totalParts, coloredParts, shape, cc), coloredParts, t("g1Fraction", cc));
  },
  // ── New G1 generators ──
  vorgaenger: (cc) => {
    const n = randInt(2, 20);
    return q(qVorgaenger(n, cc), n - 1, t("g1Vorgaenger", cc));
  },
  nachfolger: (cc) => {
    const n = randInt(0, 19);
    return q(qNachfolger(n, cc), n + 1, t("g1Vorgaenger", cc));
  },
  zaehlen: (cc) => {
    const emojis = ["⭐", "🍎", "🔵", "🌟", "🐶", "🌸", "🎈", "🐱", "🍓", "🦋"];
    const emoji = pick(emojis);
    const count = randInt(1, 10);
    const row = Array(count).fill(emoji).join(" ");
    return q(qZaehlen(row, cc), count, t("g1Zaehlen", cc));
  },
  tausch: (cc) => {
    const a = randInt(1, 8), b = randInt(1, 9 - a);
    return q(qTauschaufgabe(a, b, a + b, cc), a + b, t("g1Tausch", cc));
  },
  zahlzerlegung: (cc) => {
    const total = randInt(3, 10);
    const part1 = randInt(1, total - 1);
    return q(qZahlzerlegung(total, part1, cc), total - part1, t("g1Zahlzerlegung", cc));
  },
  verdoppeln: (cc) => {
    const n = randInt(1, 9);
    return q(qVerdoppeln(n, cc), n * 2, t("g1Verdoppeln", cc));
  },
  halbieren: (cc) => {
    const n = randInt(1, 9) * 2;
    return q(qHalbieren(n, cc), n / 2, t("g1Halbieren", cc));
  },
  shapes: (cc) => {
    const lang = getLang(cc);
    const shapeData: Array<{ DE: string; EN: string; HU: string; RO: string; corners: number }> = [
      { DE: "Dreieck", EN: "triangle", HU: "háromszög", RO: "triunghi", corners: 3 },
      { DE: "Quadrat", EN: "square", HU: "négyzet", RO: "pătrat", corners: 4 },
      { DE: "Rechteck", EN: "rectangle", HU: "téglalap", RO: "dreptunghi", corners: 4 },
      { DE: "Kreis", EN: "circle", HU: "kör", RO: "cerc", corners: 0 },
    ];
    const shape = pick(shapeData);
    const shapeName = shape[lang as "DE" | "EN" | "HU" | "RO"] || shape.EN;
    return q(qShapeCorners(shapeName, cc), shape.corners, t("g1Shapes", cc));
  },
  laenger: (cc) => {
    const a = randInt(1, 8), b = a + randInt(1, 5);
    return q(qLaenger(a, b, cc), b, t("g1Laenger", cc));
  },
  wochentage: (cc) => {
    const i = randInt(0, 5);
    const { question, answer } = qG1Wochentage(i, cc);
    return qs(question, answer, t("g1Wochentage", cc));
  },
  placeValue20: (cc) => {
    const n = randInt(11, 20);
    const tens = Math.floor(n / 10), ones = n % 10;
    const r = Math.random();
    if (r < 0.33) return q(qG1PlaceValueTens(n, cc), tens, t("g1PlaceValue20", cc));
    if (r < 0.66) return q(qG1PlaceValueOnes(n, cc), ones, t("g1PlaceValue20", cc));
    return q(qG1PlaceValueTotal(tens, ones, cc), n, t("g1PlaceValue20", cc));
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
  evenOdd: (cc) => {
    return Math.random() < 0.5
      ? (() => { const n = randInt(5, 48) * 2; return q(qNextEven(n, cc), n + 2, t("evenOdd", cc)); })()
      : (() => { const n = randInt(5, 47) * 2 + 1; return q(qNextOdd(n, cc), n + 2, t("evenOdd", cc)); })();
  },
  clock2: (cc) => {
    if (cc === "US") {
      const startH = randInt(8, 10), addH = randInt(1, 3);
      return q(qAmPmAddHours(startH, addH, true, cc), startH + addH <= 12 ? startH + addH : startH + addH - 12, t("ampmTime", cc), 0, true);
    }
    return pick([
      () => { const h = randInt(1, 12); return q(qClockHalfPast(h, cc), 30, t("clockReading", cc)); },
      () => { const h = randInt(1, 11); return q(qClockQuarterPast(h, cc), 15, t("clockReading", cc)); },
      () => { const h = randInt(1, 12); return q(qClockFullHour(h, cc), h, t("clockReading", cc)); },
    ])();
  },
  rounding10: (cc) => {
    const n = randInt(2, 18) * 10 + randInt(1, 9);
    return q(qRoundTo10(n, cc), Math.round(n / 10) * 10, t("rounding10", cc));
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
  clock3: (cc) => {
    if (cc === "US") {
      const startH = randInt(7, 11), addH = randInt(2, 4);
      return q(qAmPmAddHours(startH, addH, true, cc), startH + addH <= 12 ? startH + addH : startH + addH - 12, t("ampmTime", cc), 0, true);
    }
    const h = randInt(1, 11), m = pick([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
    return q(qClockMinutes(h, m, cc), m, t("clockReading", cc));
  },
  rounding100: (cc) => {
    const n = randInt(1, 29) * 100 + randInt(1, 99);
    return q(qRoundTo100(n, cc), Math.round(n / 100) * 100, t("rounding100", cc));
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
    // Ensure integer liter result: cups=2 → 3500ml=3.5L (bad), cups=4 → 7000ml=7L (good)
    const cups = pick([4, 8]); const ml = 250;
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
  word3: (cc) => {
    const items = getItems(cc);
    const d = pick([2, 3, 4, 5]); const r = randInt(3, 8);
    return q(wpShare(d * r, d, r, items.candy, cc), r, t("wordProblem", cc), 0, true);
  },
  fraction: (cc) => pick([
    () => q(qHowManyQuartersInWhole(cc), 4, t("fractions", cc)),
    () => q(qHowManyHalvesInWhole(cc), 2, t("fractions", cc)),
    () => { const w = randInt(2, 5); return q(qWholeToHalves(w, cc), w * 2, t("fractions", cc)); },
    () => { const n = randInt(1, 3); return q(qPizzaSlices(n, 4, cc), 4 - n, t("fractions", cc)); },
  ])(),
  fractionB: (cc) => {
    const d = pick([4, 6, 8, 10]);
    const a = randInt(1, d / 2), b = randInt(1, d / 2);
    return q(qFractionNumerator(a, b, d, cc), a + b, t("fractionAdd", cc));
  },
  fractionAdd: (cc) => {
    const d = pick([4, 6, 8]);
    const a = randInt(1, d / 2), b = randInt(1, d / 2);
    return q(qFractionNumerator(a, b, d, cc), a + b, t("fractionAdd", cc));
  },
  fractionSub: (cc) => {
    const d = pick([4, 6, 8]);
    const a = randInt(3, d - 1), b = randInt(1, a - 1);
    return q(qFractionSubNumerator(a, b, d, cc), a - b, t("fractionSub", cc));
  },
  geometry: (cc) => pick([
    () => { const a = randInt(3, 10), b = randInt(3, 10); return q(qRectPerimeter(a, b, cc), 2*(a+b), t("geometry", cc)); },
    () => { const a = randInt(3, 10), b = randInt(3, 10); return q(qRectArea(a, b, cc), a*b, t("geometry", cc)); },
    () => { const a = randInt(3, 12); return q(qSquarePerimeter(a, cc), 4*a, t("geometry", cc)); },
    () => { const a = randInt(3, 12); return q(qSquareArea(a, cc), a*a, t("geometry", cc)); },
  ])(),
  geometryB: (cc) => pick([
    () => { const a = randInt(4, 14), b = randInt(3, 10); return q(qRectArea(a, b, cc), a*b, t("geometry", cc)); },
    () => { const a = randInt(4, 14), b = randInt(3, 10); return q(qRectPerimeter(a, b, cc), 2*(a+b), t("geometry", cc)); },
    () => { const a = randInt(4, 14); return q(qSquareArea(a, cc), a*a, t("geometry", cc)); },
    () => { const a = randInt(4, 14); return q(qSquarePerimeter(a, cc), 4*a, t("geometry", cc)); },
  ])(),
  // ─── NEW: Grade 4 Extensions ─────────────────────────────
  rounding: (cc) => pick([
    () => { const n = randInt(1, 99); return q(qRoundTo10(n, cc), Math.round(n / 10) * 10, t("rounding", cc)); },
    () => { const n = randInt(10, 999); return q(qRoundTo100(n, cc), Math.round(n / 100) * 100, t("rounding", cc)); },
  ])(),
  largeNumbers: (cc) => {
    const n = randInt(100000, 999999);
    const positions = [
      { key: "hundred-thousands", val: Math.floor(n / 100000) },
      { key: "ten-thousands", val: Math.floor((n % 100000) / 10000) },
      { key: "thousands", val: Math.floor((n % 10000) / 1000) },
    ];
    const p = pick(positions);
    return q(qPlaceValue(n, p.key, cc), p.val, t("placeValue", cc));
  },
  writtenSubLarge: (cc) => {
    const a = randInt(100000, 999999);
    const b = randInt(1000, Math.min(a - 1000, 99999));
    return q(`${a} − ${b} = ?`, a - b, t("writtenSub", cc));
  },
  writtenAddLarge: (cc) => {
    const a = randInt(100000, 500000);
    const b = randInt(100000, 500000);
    if (a + b > 999999) return G4.writtenAddLarge(cc);
    return q(`${a} + ${b} = ?`, a + b, t("writtenAdd", cc));
  },
  unitLengths: (cc) => {
    if (cc === "US") {
      return pick([
        () => { const ft = randInt(2, 4); return q(`${ft * 12} inches = ? feet`, ft, t("unitConversion", cc)); },
        () => { const ft = randInt(2, 6); return q(qFeetToInches(ft, cc), ft * 12, t("unitConversion", cc)); },
        () => { const yd = randInt(2, 4); return q(qYardsToFeet(yd, cc), yd * 3, t("unitConversion", cc)); },
      ])();
    }
    return pick([
      () => { const m = randInt(2, 9); return q(`${m} m = ? cm`, m * 100, t("unitConversion", cc)); },
      () => { const cm = randInt(200, 1000); return q(`${cm} cm = ? m`, cm / 100, t("unitConversion", cc)); },
      () => { const km = randInt(2, 5); return q(qKmToM(km, cc), km * 1000, t("unitConversion", cc)); },
    ])();
  },
  unitLengthsWord: (cc) => {
    const laps = randInt(2, 5);
    const distPerLap = pick([500, 1000, 2000]);
    const totalDist = laps * distPerLap;
    return q(qRunnerLaps(distPerLap, totalDist, cc), laps, t("wordProblem", cc), 0, true);
  },
  circleBasics: (cc) => pick([
    () => { const r = randInt(2, 8); return q(qCircleCircumference(r, cc), Math.round(2 * Math.PI * r), t("geometry", cc)); },
    () => { const r = randInt(2, 8); return q(qCircleArea(r, cc), Math.round(Math.PI * r * r), t("geometry", cc)); },
  ])(),
  // Grade 4-appropriate: simple circle/geometry without π
  circleSimple: (cc) => pick([
    () => { const d = randInt(4, 16); return q(qCircleRadiusFromDiameter(d, cc), d / 2, t("geometry", cc)); },
    () => { const r = randInt(2, 8); return q(qCircleDiameterFromRadius(r, cc), r * 2, t("geometry", cc)); },
  ])(),
  // Grade 4 fractions: only halves and quarters (2 and 4 denominators)
  fractionSimple: (cc) => pick([
    () => q(qHowManyQuartersInWhole(cc), 4, t("fractions", cc)),
    () => q(qHowManyHalvesInWhole(cc), 2, t("fractions", cc)),
    () => { const w = randInt(2, 4); return q(qWholeToHalves(w, cc), w * 2, t("fractions", cc)); },
    () => { const n = randInt(1, 3); return q(qPizzaSlices(n, 4, cc), 4 - n, t("fractions", cc)); },
    () => { const n = randInt(2, 10) * 2; return q(qHalfOf(n, cc), n / 2, t("fractions", cc)); },
  ])(),
  // Grade 4 fraction add/sub: only same denominator 2 or 4
  fractionAddSimple: (cc) => {
    const d = pick([2, 4]);
    const a = randInt(1, d === 2 ? 1 : 2), b = randInt(1, d === 2 ? 1 : 2);
    return q(qFractionNumerator(a, b, d, cc), a + b, t("fractionAdd", cc));
  },
  fractionSubSimple: (cc) => {
    const d = 4;
    const a = randInt(2, 3), b = randInt(1, a - 1);
    return q(qFractionSubNumerator(a, b, d, cc), a - b, t("fractionSub", cc));
  },
  // Grade 4 rounding: includes 1000er
  roundingG4: (cc) => pick([
    () => { const n = randInt(1, 99); return q(qRoundTo10(n, cc), Math.round(n / 10) * 10, t("rounding", cc)); },
    () => { const n = randInt(10, 999); return q(qRoundTo100(n, cc), Math.round(n / 100) * 100, t("rounding", cc)); },
    () => { const n = randInt(100, 9999); return q(qRoundTo1000(n, cc), Math.round(n / 1000) * 1000, t("rounding", cc)); },
  ])(),
  // Grade 4 time word problems
  timeWord: (cc) => pick([
    () => { const start = randInt(8, 14), dur = randInt(1, 4); return q(qTimeElapsed(start, dur, cc), start + dur, t("timeCalc", cc)); },
    () => { const h = randInt(1, 3); return q(qHoursToMinutes(h, cc), h * 60, t("timeCalc", cc)); },
    () => { const min = pick([60, 120, 180]); return q(qMinutesToHours(min, cc), min / 60, t("timeCalc", cc)); },
  ])(),
  // Grade 4 money word problems
  moneyWord: (cc) => {
    const items = getItems(cc); const cur = getCurrency(cc);
    const price = randInt(2, 15); const paid = price + randInt(1, 10);
    return q(qChangeBack(items.notebook, price, paid, cur, cc), paid - price, t("wordProblem", cc), 0, true);
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
  prime: (cc) => {
    return pick([
      () => {
        const composites: Record<number, number> = { 4:2, 6:2, 8:2, 9:3, 10:2, 12:2, 14:2, 15:3, 16:2, 18:2, 20:2, 21:3, 22:2, 25:5, 26:2, 27:3, 28:2, 33:3, 35:5, 39:3 };
        const n = pick(Object.keys(composites).map(Number));
        return q(qSmallestPrimeFactor(n, cc), composites[n], t("primes", cc));
      },
      () => {
        // primes < 20: 2,3,5,7,11,13,17,19 → 8 db
        return q(qCountPrimesBetween(1, 20, cc), 8, t("primes", cc));
      },
      () => {
        // primes < 30: +23,29 → 10 db
        return q(qCountPrimesBetween(1, 30, cc), 10, t("primes", cc));
      },
    ])();
  },
  lcm: (cc) => {
    const pairs: [number, number, number][] = [[2,3,6],[3,4,12],[4,6,12],[6,8,24],[3,5,15],[4,10,20],[6,9,18],[5,6,30],[2,7,14],[4,5,20]];
    const [a, b, lcm] = pick(pairs);
    return q(qLcmOf(a, b, cc), lcm, t("lcmGcd", cc));
  },
  gcd: (cc) => {
    const pairs: [number, number, number][] = [[12,8,4],[15,10,5],[18,12,6],[16,12,4],[20,15,5],[24,16,8],[30,18,6],[14,21,7],[36,24,12],[25,15,5]];
    const [a, b, gcd] = pick(pairs);
    return q(qGcdOf(a, b, cc), gcd, t("lcmGcd", cc));
  },
  mean: (cc) => {
    const count = pick([3, 4, 5]);
    const base = randInt(2, 8) * count;
    const nums = Array.from({ length: count }, () => randInt(1, 15));
    const sum = nums.reduce((s, n) => s + n, 0);
    // generate nums that have an integer mean
    const step = randInt(2, 8);
    const niceNums = Array.from({ length: count }, (_, i) => step * (i + 1));
    const mean = niceNums.reduce((s, n) => s + n, 0) / count;
    return q(qMeanOf(niceNums, cc), mean, t("mean", cc));
  },
  fractionDiff: (cc) => {
    const pairs: [number, number, number, number, number, number][] = [
      [1,2,1,3,6,5],[1,3,1,4,12,7],[1,2,1,4,4,3],[1,3,1,6,6,3],[2,3,1,6,6,5],
      [3,4,1,2,4,5],[3,4,1,4,4,4],[2,3,1,4,12,11],[1,2,2,6,6,5],[5,6,1,3,6,7],
    ];
    const [an, ad, bn, bd, lcm, num] = pick(pairs);
    if (Math.random() < 0.5) {
      return q(qFractionAddDiff(an, ad, bn, bd, lcm, cc), num, t("fractionDiffDenom", cc));
    } else {
      // subtraction: pick where result is positive
      const subPairs: [number, number, number, number, number, number][] = [
        [3,4,1,2,4,1],[5,6,1,3,6,3],[3,4,1,4,4,2],[2,3,1,6,6,3],[5,6,2,3,6,1],
      ];
      const [san, sad, sbn, sbd, slcm, snum] = pick(subPairs);
      return q(qFractionSubDiff(san, sad, sbn, sbd, slcm, cc), snum, t("fractionDiffDenom", cc));
    }
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
  circle: (cc) => {
    return pick([
      () => { const r = randInt(2, 8); return q(qCircleCircumference(r, cc), 2 * 3 * r, t("circle", cc)); },
      () => { const r = randInt(2, 7); return q(qCircleArea(r, cc), 3 * r * r, t("circle", cc)); },
    ])();
  },
  mean: (cc) => {
    const step = randInt(2, 9);
    const count = pick([3, 4, 5]);
    const niceNums = Array.from({ length: count }, (_, i) => step * (i + 1));
    const mean = niceNums.reduce((s, n) => s + n, 0) / count;
    return q(qMeanOf(niceNums, cc), mean, t("mean", cc));
  },
  median: (cc) => {
    const count = pick([3, 5]);
    const sorted = Array.from({ length: count }, (_, i) => randInt(1, 5) + i * randInt(1, 4));
    return q(qMedianOf(sorted, cc), sorted[Math.floor(count / 2)], t("statistics", cc));
  },
  negMul: (cc) => {
    return pick([
      () => { const a = randInt(2, 8), b = randInt(2, 6); return q(`(−${a}) × ${b} = ?`, -a * b, t("negativeNumbers", cc), -100); },
      () => { const a = randInt(2, 8), b = randInt(2, 6); return q(`(−${a}) × (−${b}) = ?`, a * b, t("negativeNumbers", cc)); },
      () => { const a = randInt(2, 8), b = randInt(2, 6); return q(`${a * b} ÷ (−${b}) = ?`, -a, t("negativeNumbers", cc), -50); },
    ])();
  },
  fractionDiff: (cc) => {
    const pairs: [number, number, number, number, number, number][] = [
      [1,2,1,3,6,5],[1,3,1,4,12,7],[1,2,1,4,4,3],[2,3,1,6,6,5],[3,4,1,2,4,5],
    ];
    const [an, ad, bn, bd, lcm, num] = pick(pairs);
    return q(qFractionAddDiff(an, ad, bn, bd, lcm, cc), num, t("fractionDiffDenom", cc));
  },
  volume: (cc) => {
    return pick([
      () => { const a = randInt(2, 6), b = randInt(2, 6), c = randInt(2, 6); return q(qVolumeBox(a, b, c, cc), a * b * c, t("volume", cc)); },
      () => { const a = randInt(2, 6); return q(qVolumeCube(a, cc), a * a * a, t("volume", cc)); },
    ])();
  },
};

// ─── GRADE 7 GENERATORS ─────────────────────────────

const G7: Record<string, Generator> = {
  power2: (cc) => { const b = randInt(2, 10); return q(`${b}² = ?`, b * b, t("powers", cc)); },
  power3: (cc) => { const b = randInt(2, 5); return q(`${b}³ = ?`, b ** 3, t("powers", cc)); },
  power10: (cc) => {
    const n = pick([2, 3, 4, 5]);
    const sups = ['', '', '²', '³', '⁴', '⁵'];
    return q(`10${sups[n]} = ?`, Math.pow(10, n), t("powers", cc));
  },
  algebraSub: (cc) => {
    const a = randInt(2, 5), b = randInt(1, 10);
    return q(qIfAEquals("a", a, `3a + ${b}`, cc), 3 * a + b, t("algebra", cc));
  },
  algebraSimp: (cc) => {
    const a = randInt(2, 6), b = randInt(2, 6);
    return q(qSimplifyCoeff(`${a}x + ${b}x = ?x`, cc), a + b, t("algebra", cc));
  },
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
  pythag34: (cc) => {
    const tr = pick([[3,4,5],[5,12,13],[8,15,17],[7,24,25]]);
    return q(qPythHypotenuse(tr[0], tr[1], cc), tr[2], t("pythagoras", cc));
  },
  pythag68: (cc) => {
    const tr = pick([[6,8,10],[9,12,15],[12,16,20],[20,21,29]]);
    return q(qPythHypotenuse(tr[0], tr[1], cc), tr[2], t("pythagoras", cc));
  },
  pythagLeg13: (cc) => {
    const tr = pick([[13,5,12],[17,8,15],[26,10,24],[25,7,24]]);
    return q(qPythLeg(tr[0], tr[1], cc), tr[2], t("pythagoras", cc));
  },
  pythagLeg10: (cc) => {
    const tr = pick([[10,6,8],[15,9,12],[20,12,16],[13,12,5]]);
    return q(qPythLeg(tr[0], tr[1], cc), tr[2], t("pythagoras", cc));
  },
  wordThink: (cc) => {
    const x = randInt(3, 12); const a = randInt(2, 4); const b = randInt(5, 20);
    return q(wpThinkNumber(a, b, a * x + b, cc), x, t("wordProblem", cc), 0, true);
  },
  wordSquare: (cc) => {
    const x = randInt(2, 8); const a = randInt(2, 5);
    return q(wpNumberSquare(x, a, a * x, cc), x * x, t("wordProblem", cc), 0, true);
  },
  inequality: (cc) => {
    return pick([
      () => {
        // ax + b > c  →  x > (c-b)/a  → smallest integer = floor((c-b)/a) + 1
        const a = randInt(2, 4), b = randInt(1, 8), xMin = randInt(2, 6);
        const c = a * xMin + b - 1; // so x > xMin-1, smallest int = xMin
        return q(qInequalityGt(a, b, c, cc), xMin, t("inequality", cc));
      },
      () => {
        // ax - b < c  →  x < (c+b)/a  → largest integer = ceil((c+b)/a) - 1
        const a = randInt(2, 4), b = randInt(1, 6), xMax = randInt(2, 7);
        const c = a * xMax - b + 1; // so x < xMax+1, largest int = xMax
        return q(qInequalityLt(a, b, c, cc), xMax, t("inequality", cc));
      },
    ])();
  },
  volume7: (cc) => {
    return pick([
      () => { const a = randInt(2, 7), b = randInt(2, 7), c = randInt(2, 7); return q(qVolumeBox(a, b, c, cc), a * b * c, t("volume", cc)); },
      () => { const a = randInt(2, 6); return q(qVolumeCube(a, cc), a * a * a, t("volume", cc)); },
    ])();
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
  probDice: (cc) => {
    const type = randInt(0, 2);
    if (type === 0) {
      const face = randInt(1, 6);
      return q(qDiceProb(face, cc), 17, t("probability", cc));
    } else if (type === 1) {
      return q(qDiceProbEven(cc), 50, t("probability", cc));
    } else {
      const n = pick([3, 4]); // P(>3)=50%, P(>4)=33%
      return q(qDiceProbMore(n, cc), Math.round((6 - n) / 6 * 100), t("probability", cc));
    }
  },
  probCoin: (cc) => {
    return q(Math.random() < 0.5 ? qCoinProb(cc) : qCoinProbTails(cc), 50, t("probability", cc));
  },
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
  systemEq: (cc) => {
    // x + y = s1, x - y = s2  →  x = (s1+s2)/2
    const x = randInt(3, 10), y = randInt(2, x - 1);
    const s1 = x + y, s2 = x - y;
    return q(qSystemEq(1, 1, s1, 1, -1, s2, cc), x, t("systemEq", cc));
  },
  inequality8: (cc) => {
    return pick([
      () => {
        const a = randInt(2, 5), b = randInt(1, 10), xMin = randInt(2, 8);
        const c = a * xMin + b - 1;
        return q(qInequalityGt(a, b, c, cc), xMin, t("inequality", cc));
      },
      () => {
        const a = randInt(2, 5), b = randInt(1, 8), xMax = randInt(2, 9);
        const c = a * xMax - b + 1;
        return q(qInequalityLt(a, b, c, cc), xMax, t("inequality", cc));
      },
    ])();
  },
  volumeCylinder: (cc) => {
    const r = randInt(2, 5), h = randInt(2, 8);
    return q(qVolumeCylinder(r, h, cc), 3 * r * r * h, t("volume", cc));
  },
};

// ─── CURRICULUM MAP ─────────────────────────────
// Maps grade + period to available question generators
// period: 1=Sept-Oct, 2=Nov-Dec, 3=Jan-Feb, 4=Mar-Apr, 5=May-Jun

interface PeriodTopics {
  current: Generator[];  // 70% from current topics
  review: Generator[];   // 30% from review topics
}

// ─── SHARED GRADE 1-4 STRUCTURE (identical across all countries) ─────────────────────────────

const GRADES_1_4: Record<number, Record<number, PeriodTopics>> = {
  1: {
    1: { current: [G1.add10, G1.add10b, G1.compare, G1.missing10, G1.evenOdd], review: [] },
    2: { current: [G1.add10, G1.add10b, G1.sub10, G1.sub10b, G1.missing10sub, G1.evenOdd, G1.placeValue], review: [G1.compare] },
    3: { current: [G1.add20, G1.add20b, G1.sub20, G1.sub20b, G1.clock1, G1.numberLine, G1.gridCount], review: [G1.add10, G1.sub10, G1.missing10] },
    4: { current: [G1.add20, G1.sub20, G1.word1, G1.word2, G1.word3, G1.clockQuarter, G1.sequence, G1.coins], review: [G1.add10, G1.sub10, G1.compare] },
    5: { current: [G1.add20, G1.add20b, G1.sub20, G1.sub20b, G1.word1, G1.word2, G1.word3, G1.word4, G1.word5, G1.compare, G1.missing10, G1.missing10sub, G1.clockQuarter, G1.evenOdd, G1.timeline, G1.fraction, G1.coins], review: [G1.add10, G1.sub10] },
  },
  2: {
    1: { current: [G2.add100tens, G2.sub100tens, G2.add100, G2.missing100, G2.evenOdd], review: [G1.add20, G1.sub20] },
    2: { current: [G2.add100tens, G2.sub100tens, G2.add100, G2.add100b, G2.sequence, G2.evenOdd], review: [G1.add20, G1.sub20] },
    3: { current: [G2.add100, G2.add100b, G2.sub100, G2.sub100b, G2.units, G2.rounding10], review: [G2.add100tens, G2.sub100tens] },
    4: { current: [G2.mul2510, G2.mul2510b, G2.add100, G2.sub100, G2.clock2, G2.rounding10], review: [G2.add100tens, G2.sequence] },
    5: { current: [G2.mul2510, G2.mul2510b, G2.div2510, G2.word1, G2.word2, G2.word3, G2.word4, G2.units, G2.clock2, G2.sequence, G2.rounding10], review: [G2.add100, G2.sub100] },
  },
  3: {
    1: { current: [G3.add1000, G3.add1000b, G3.sub1000, G3.rounding100], review: [G2.add100, G2.sub100, G2.mul2510] },
    2: { current: [G3.add1000, G3.sub1000, G3.writtenAdd, G3.sequence, G3.rounding100], review: [G2.mul2510, G2.div2510] },
    3: { current: [G3.mul, G3.mulB, G3.div, G3.divB, G3.missingMul, G3.clock3], review: [G3.add1000, G3.sub1000] },
    4: { current: [G3.writtenAdd, G3.writtenSub, G3.mul, G3.div, G3.missingMul, G3.clock3], review: [G3.divB, G3.sequence] },
    5: { current: [G3.word1, G3.word2, G3.word3, G3.units, G3.clock3, G3.mul, G3.mulB, G3.div, G3.divB, G3.rounding100], review: [G3.writtenAdd, G3.writtenSub, G3.sequence] },
  },
  4: {
    1: { current: [G4.placeValue, G4.writtenMul, G4.writtenMulB, G4.sequence, G4.geometry, G4.roundingG4], review: [G3.mul, G3.div, G3.writtenAdd] },
    2: { current: [G4.writtenMul, G4.writtenDiv, G4.writtenDivB, G4.divTwoDigit, G4.geometry, G4.largeNumbers], review: [G4.placeValue, G4.placeValueBig] },
    3: { current: [G4.fractionSimple, G4.fractionAddSimple, G4.writtenMul, G4.writtenDiv, G4.divTwoDigit, G4.geometryB, G4.writtenAddLarge], review: [G4.placeValue, G4.sequence] },
    4: { current: [G4.fractionSimple, G4.fractionAddSimple, G4.fractionSubSimple, G4.units, G4.geometryB, G4.writtenSubLarge, G4.timeWord], review: [G4.writtenMul, G4.writtenDiv] },
    5: { current: [G4.units, G4.volumeWord, G4.word1, G4.word2, G4.fractionSimple, G4.fractionAddSimple, G4.sequence, G4.geometry, G4.unitLengths, G4.circleSimple, G4.moneyWord], review: [G4.writtenMul, G4.writtenDiv, G4.divTwoDigit] },
  },
};

// ─── CURRICULUM_HU — Magyar tanterv ────────────────────────────────────────
// G5: prímszámok, LKKT/LNKO, törtek különböző nevezővel
// G6: negatív számok (6. osztály!), arányosság, átlag
// G7: hatvány, algebra, egyenletek, egyenlőtlenség, kör (π)
// G8: gyökvonás, függvények, valószínűség, egyenletrendszer

const CURRICULUM_HU: Record<number, Record<number, PeriodTopics>> = {
  ...GRADES_1_4,
  5: {
    1: { current: [G5.largeNumbers, G5.roundHundreds, G5.orderOfOps, G5.orderOfOpsB, G5.prime], review: [G4.writtenMul, G4.writtenDiv, G4.fractions] },
    2: { current: [G5.orderOfOps, G5.orderOfOpsC, G5.orderOfOpsD, G5.fractionAdd, G5.prime, G5.lcm], review: [G5.largeNumbers] },
    3: { current: [G5.fractionAdd, G5.fractionSub, G5.fractionDiff, G5.percent10, G5.gcd], review: [G5.orderOfOps, G5.largeNumbers] },
    4: { current: [G5.percent10, G5.percent50, G5.percent25, G5.fractionAdd, G5.fractionDiff, G5.mean, G5.lcm], review: [G5.orderOfOps, G5.orderOfOpsB] },
    5: { current: [G5.geoRectPerimeter, G5.geoRectArea, G5.geoSquarePerimeter, G5.percent10, G5.percent50, G5.wordDiscount, G5.wordOps, G5.mean, G5.fractionDiff], review: [G5.fractionAdd, G5.fractionSub] },
  },
  6: {
    1: { current: [G6.negative, G6.negativeB, G6.fractionMul, G6.fractionDiff], review: [G5.percent10, G5.orderOfOps] },
    2: { current: [G6.fractionMul, G6.fractionDiv, G6.negativeC, G6.negMul, G6.fractionDiff], review: [G6.negative] },
    3: { current: [G6.ratio, G6.speed, G6.percentCalc, G6.mean, G6.volume], review: [G6.negative, G6.fractionMul] },
    4: { current: [G6.percentCalc, G6.percentDiscount, G6.areaTriangle, G6.areaSquare, G6.median, G6.volume], review: [G6.ratio, G6.speed] },
    5: { current: [G6.areaTriangle, G6.areaSquare, G6.percentCalc, G6.wordShoe, G6.wordTrain, G6.mean, G6.volume], review: [G6.negative, G6.fractionMul, G6.ratio] },
  },
  7: {
    1: { current: [G7.power2, G7.power3, G7.power10, G7.algebraSub, G6.circle], review: [G6.percentCalc, G6.negative] },
    2: { current: [G7.algebraSub, G7.algebraSimp, G7.algebraMul, G7.equation, G7.inequality, G6.circle], review: [G7.power2] },
    3: { current: [G7.equation, G7.equationB, G7.triangleAngle, G7.equilateral, G7.inequality, G6.circle], review: [G7.power2, G7.algebraSub] },
    4: { current: [G7.triangleAngle, G7.isosceles, G7.pythag34, G7.pythag68, G7.volume7], review: [G7.equation, G7.equationB] },
    5: { current: [G7.pythag34, G7.pythag68, G7.pythagLeg13, G7.pythagLeg10, G7.wordThink, G7.wordSquare, G7.equation, G7.equationB, G7.volume7], review: [G7.power2, G7.power3, G7.algebraSub, G7.triangleAngle] },
  },
  8: {
    1: { current: [G8.sqrt, G8.sqrtExpr, G8.eqTwoSide, G8.inequality8], review: [G7.power2, G7.equation] },
    2: { current: [G8.eqTwoSide, G8.eqSimple, G8.funcValue, G8.systemEq, G8.inequality8], review: [G8.sqrt] },
    3: { current: [G8.funcValue, G8.funcIntercept, G8.probBall, G8.probCoin, G8.systemEq], review: [G8.sqrt, G8.eqTwoSide] },
    4: { current: [G8.probBall, G8.probDice, G8.probCoin, G8.complexPow, G8.volumeCylinder], review: [G8.funcValue] },
    5: { current: [G8.complexPow, G8.complexExpr, G8.wordTravel, G8.wordPrice, G8.probBall, G8.probCoin, G8.systemEq, G8.volumeCylinder], review: [G8.sqrt, G8.eqTwoSide, G8.funcValue] },
  },
};

// ─── CURRICULUM_DE — Deutscher Lehrplan (Bayern-orientiert) ────────────────────────────────────────
// G5: Brüche gleicher/verschiedener Nenner, kgV/ggT — KEIN Negative Zahlen
// G6: Erweiterte Bruchrechnung, Proportionalität — KEIN Negative Zahlen
// G7: Negative Zahlen ERSTMALS, Gleichungen, Potenzen, Ungleichungen
// G8: Kreisrechnung (Umfang+Fläche), Statistik (Mittelwert/Median), Zylinder

const CURRICULUM_DE: Record<number, Record<number, PeriodTopics>> = {
  ...GRADES_1_4,
  5: {
    1: { current: [G5.largeNumbers, G5.roundHundreds, G5.orderOfOps, G5.orderOfOpsB, G5.lcm], review: [G4.writtenMul, G4.writtenDiv, G4.fractions] },
    2: { current: [G5.orderOfOps, G5.orderOfOpsC, G5.orderOfOpsD, G5.fractionAdd, G5.lcm, G5.gcd], review: [G5.largeNumbers] },
    3: { current: [G5.fractionAdd, G5.fractionSub, G5.fractionDiff, G5.percent10, G5.gcd, G5.prime], review: [G5.orderOfOps, G5.largeNumbers] },
    4: { current: [G5.percent10, G5.percent50, G5.fractionAdd, G5.fractionDiff, G5.lcm, G5.gcd, G5.prime], review: [G5.orderOfOps, G5.orderOfOpsB] },
    5: { current: [G5.geoRectPerimeter, G5.geoRectArea, G5.geoSquarePerimeter, G5.percent10, G5.percent50, G5.wordDiscount, G5.wordOps, G5.fractionDiff, G5.prime], review: [G5.fractionAdd, G5.fractionSub] },
  },
  6: {
    1: { current: [G6.fractionMul, G6.fractionDiv, G6.fractionDiff, G5.lcm, G5.gcd], review: [G5.percent10, G5.orderOfOps] },
    2: { current: [G6.fractionMul, G6.fractionDiv, G6.fractionDiff, G6.ratio, G5.prime, G5.lcm], review: [G5.fractionAdd, G5.fractionSub] },
    3: { current: [G6.ratio, G6.speed, G6.percentCalc, G6.fractionDiff, G6.volume], review: [G6.fractionMul, G6.fractionDiv] },
    4: { current: [G6.percentCalc, G6.percentDiscount, G6.areaTriangle, G6.areaSquare, G6.volume], review: [G6.ratio, G6.speed] },
    5: { current: [G6.areaTriangle, G6.areaSquare, G6.percentCalc, G6.wordShoe, G6.wordTrain, G6.volume], review: [G6.fractionMul, G6.ratio] },
  },
  7: {
    1: { current: [G6.negative, G6.negativeB, G7.power2, G7.power3, G7.power10, G7.algebraSub, G7.inequality], review: [G6.percentCalc, G6.ratio] },
    2: { current: [G6.negativeC, G6.negMul, G7.algebraSub, G7.algebraSimp, G7.equation, G7.inequality], review: [G6.negative, G7.power2] },
    3: { current: [G7.equation, G7.equationB, G7.triangleAngle, G7.equilateral, G7.inequality, G7.volume7], review: [G6.negative, G7.algebraSub] },
    4: { current: [G7.triangleAngle, G7.isosceles, G7.pythag34, G7.pythag68, G7.volume7], review: [G7.equation, G7.equationB] },
    5: { current: [G7.pythag34, G7.pythag68, G7.pythagLeg13, G7.pythagLeg10, G7.wordThink, G7.wordSquare, G7.equation, G7.equationB, G7.volume7], review: [G7.power2, G7.power3, G7.algebraSub, G7.triangleAngle] },
  },
  8: {
    1: { current: [G8.sqrt, G8.sqrtExpr, G8.eqTwoSide, G6.circle, G6.mean], review: [G7.power2, G7.equation] },
    2: { current: [G8.eqTwoSide, G8.eqSimple, G8.funcValue, G8.systemEq, G6.circle, G6.median], review: [G8.sqrt] },
    3: { current: [G8.funcValue, G8.funcIntercept, G8.probBall, G8.probCoin, G6.mean, G6.median, G6.circle], review: [G8.sqrt, G8.eqTwoSide] },
    4: { current: [G8.probBall, G8.probDice, G8.probCoin, G8.complexPow, G8.volumeCylinder, G6.circle], review: [G8.funcValue] },
    5: { current: [G8.complexPow, G8.complexExpr, G8.wordTravel, G8.wordPrice, G8.probBall, G8.systemEq, G8.volumeCylinder, G6.circle, G6.mean], review: [G8.sqrt, G8.eqTwoSide, G8.funcValue] },
  },
};

// ─── CURRICULUM_RO — Curriculum Românesc ────────────────────────────────────────
// G5: numere prime, c.m.m.m.c/c.m.m.d.c (mai devreme decât DE)
// G6: fracții avansate, proporționalitate — FĂRĂ numere negative
// G7: Numere negative PRIMA DATĂ, cerc (π), algebră/ecuații
// G8: Inecuații (vs clasa 7 la HU), teorema Pitagora, probabilitate

const CURRICULUM_RO: Record<number, Record<number, PeriodTopics>> = {
  ...GRADES_1_4,
  5: {
    1: { current: [G5.largeNumbers, G5.roundHundreds, G5.orderOfOps, G5.orderOfOpsB, G5.prime, G5.lcm, G5.gcd], review: [G4.writtenMul, G4.writtenDiv, G4.fractions] },
    2: { current: [G5.orderOfOps, G5.orderOfOpsC, G5.orderOfOpsD, G5.fractionAdd, G5.prime, G5.lcm, G5.gcd], review: [G5.largeNumbers] },
    3: { current: [G5.fractionAdd, G5.fractionSub, G5.fractionDiff, G5.percent10, G5.lcm, G5.gcd], review: [G5.orderOfOps, G5.largeNumbers] },
    4: { current: [G5.percent10, G5.percent50, G5.percent25, G5.fractionAdd, G5.fractionDiff, G5.mean, G5.prime], review: [G5.orderOfOps, G5.orderOfOpsB] },
    5: { current: [G5.geoRectPerimeter, G5.geoRectArea, G5.geoSquarePerimeter, G5.percent10, G5.wordDiscount, G5.wordOps, G5.mean, G5.fractionDiff], review: [G5.fractionAdd, G5.fractionSub] },
  },
  6: {
    1: { current: [G6.fractionMul, G6.fractionDiv, G6.fractionDiff, G5.lcm, G5.gcd, G5.prime], review: [G5.percent10, G5.orderOfOps] },
    2: { current: [G6.fractionMul, G6.fractionDiv, G6.fractionDiff, G6.ratio, G6.mean], review: [G5.fractionAdd, G5.fractionSub] },
    3: { current: [G6.ratio, G6.speed, G6.percentCalc, G6.mean, G6.volume], review: [G6.fractionMul, G6.fractionDiv] },
    4: { current: [G6.percentCalc, G6.percentDiscount, G6.areaTriangle, G6.areaSquare, G6.median, G6.volume], review: [G6.ratio, G6.speed] },
    5: { current: [G6.areaTriangle, G6.areaSquare, G6.percentCalc, G6.wordShoe, G6.wordTrain, G6.mean, G6.volume], review: [G6.fractionMul, G6.ratio] },
  },
  7: {
    1: { current: [G6.negative, G6.negativeB, G7.power2, G7.power3, G7.power10, G7.algebraSub, G6.circle], review: [G6.percentCalc, G6.ratio] },
    2: { current: [G6.negativeC, G6.negMul, G7.algebraSub, G7.algebraSimp, G7.algebraMul, G7.equation, G6.circle], review: [G6.negative, G7.power2] },
    3: { current: [G7.equation, G7.equationB, G7.triangleAngle, G7.equilateral, G6.circle], review: [G6.negative, G7.algebraSub] },
    4: { current: [G7.triangleAngle, G7.isosceles, G7.pythag34, G7.pythag68, G7.volume7], review: [G7.equation, G7.equationB] },
    5: { current: [G7.pythag34, G7.pythag68, G7.pythagLeg13, G7.pythagLeg10, G7.wordThink, G7.wordSquare, G7.equation, G7.equationB, G7.volume7], review: [G7.power2, G7.power3, G7.algebraSub, G7.triangleAngle] },
  },
  8: {
    1: { current: [G8.sqrt, G8.sqrtExpr, G8.eqTwoSide, G8.inequality8, G6.mean], review: [G7.power2, G7.equation] },
    2: { current: [G8.eqTwoSide, G8.eqSimple, G8.funcValue, G8.systemEq, G8.inequality8, G6.median], review: [G8.sqrt] },
    3: { current: [G8.funcValue, G8.funcIntercept, G8.probBall, G8.probCoin, G8.systemEq, G6.mean], review: [G8.sqrt, G8.eqTwoSide] },
    4: { current: [G8.probBall, G8.probDice, G8.probCoin, G8.complexPow, G8.volumeCylinder, G8.inequality8], review: [G8.funcValue] },
    5: { current: [G8.complexPow, G8.complexExpr, G8.wordTravel, G8.wordPrice, G8.probBall, G8.probCoin, G8.systemEq, G8.volumeCylinder], review: [G8.sqrt, G8.eqTwoSide, G8.funcValue] },
  },
};

// ─── CURRICULUM_EN — English/US curriculum ────────────────────────────────────────
// Timing: similar to HU (international standard)
// US-specific: imperial units + AM/PM handled inside generators via cc parameter
// Circles: G7 (same as HU), negative numbers: G6 (same as HU)

const CURRICULUM_EN: Record<number, Record<number, PeriodTopics>> = {
  ...CURRICULUM_HU,
};

// ─── CURRICULUM DISPATCHER ─────────────────────────────

function getCurriculum(cc: string): Record<number, Record<number, PeriodTopics>> {
  const lang = getLang(cc);
  switch (lang) {
    case "DE": return CURRICULUM_DE;
    case "RO": return CURRICULUM_RO;
    case "EN": return CURRICULUM_EN;
    default:   return CURRICULUM_HU;
  }
}

// ─── EN TOPIC DEFINITIONS ────────────────────────────────────────
// Real math topics per grade for EN (US/GB) users
// Each topic has a key, name, color, icon, and list of generators

export interface ENTopicDef {
  key: string;
  name: string;
  color: string;
  icon: string;
  generators: Generator[];
}

export interface ENThemeDef {
  key: string;
  name: string;
  color: string;
  icon: string;
  topics: ENTopicDef[];
}

const EN_THEMES: Record<number, ENThemeDef[]> = {
  1: [
    { key: 'g1_zahlen', name: 'Numbers & Number System', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g1_zaehlen', name: 'Counting 0–10', color: '#60A5FA', icon: '🔢', generators: [G1.zaehlen, G1.gridCount] },
      { key: 'g1_compare', name: 'Comparing Numbers', color: '#2563EB', icon: '⚖️', generators: [G1.compare] },
      { key: 'g1_pred_succ', name: 'Before · After · Number Line', color: '#1D4ED8', icon: '📏', generators: [G1.vorgaenger, G1.nachfolger, G1.numberLine] },
    ]},
    { key: 'g1_zahlen20', name: 'Numbers to 20', color: '#06B6D4', icon: '🔟', topics: [
      { key: 'g1_place_value20', name: 'Tens and Ones', color: '#0891B2', icon: '🧱', generators: [G1.placeValue20] },
    ]},
    { key: 'g1_rechnen', name: 'Basic Operations', color: '#EF4444', icon: '➕', topics: [
      { key: 'add10', name: 'Addition to 10', color: '#F87171', icon: '➕', generators: [G1.add10, G1.add10b] },
      { key: 'sub10', name: 'Subtraction to 10', color: '#EF4444', icon: '➖', generators: [G1.sub10, G1.sub10b] },
      { key: 'add20', name: 'Addition to 20', color: '#DC2626', icon: '➕', generators: [G1.add20, G1.add20b] },
      { key: 'sub20', name: 'Subtraction to 20', color: '#B91C1C', icon: '➖', generators: [G1.sub20, G1.sub20b] },
      { key: 'g1_tausch', name: 'Swap & Inverse Tasks', color: '#F59E0B', icon: '🔄', generators: [G1.tausch, G1.missing10, G1.missing10sub] },
    ]},
    { key: 'g1_struktur', name: 'Understanding Numbers', color: '#8B5CF6', icon: '🧩', topics: [
      { key: 'g1_zahlzerlegung', name: 'Number Bonds', color: '#A78BFA', icon: '🧩', generators: [G1.zahlzerlegung] },
      { key: 'g1_verdoppeln', name: 'Doubling', color: '#8B5CF6', icon: '✌️', generators: [G1.verdoppeln] },
      { key: 'g1_halbieren', name: 'Halving', color: '#7C3AED', icon: '✂️', generators: [G1.halbieren] },
      { key: 'g1_sequence', name: 'Number Sequences', color: '#6D28D9', icon: '🔢', generators: [G1.sequence, G1.evenOdd] },
    ]},
    { key: 'g1_geo', name: 'Geometry & Spatial', color: '#10B981', icon: '🔷', topics: [
      { key: 'g1_shapes', name: 'Shapes', color: '#34D399', icon: '🔷', generators: [G1.shapes] },
    ]},
    { key: 'g1_messen', name: 'Measurement', color: '#F59E0B', icon: '📏', topics: [
      { key: 'g1_laenger', name: 'Longer · Shorter', color: '#FBBF24', icon: '📏', generators: [G1.laenger] },
    ]},
    { key: 'g1_alltag', name: 'Everyday Math', color: '#FF2D78', icon: '🌍', topics: [
      { key: 'g1_clock', name: 'Telling Time', color: '#FF2D78', icon: '🕐', generators: [G1.clockQuarter] },
      { key: 'g1_wochentage', name: 'Days of the Week', color: '#FB7185', icon: '📅', generators: [G1.wochentage] },
      { key: 'g1_coins', name: 'Coins & Money', color: '#FFD700', icon: '🪙', generators: [G1.coins] },
      { key: 'word', name: 'Story Problems', color: '#C026D3', icon: '📖', generators: [G1.word1, G1.word2, G1.word3, G1.word4, G1.word5] },
    ]},
  ],
  2: [
    { key: 'g2_arith', name: 'Addition & Subtraction', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'add100', name: 'Addition to 100', color: '#60A5FA', icon: '➕', generators: [G2.add100tens, G2.add100, G2.add100b, G2.missing100] },
      { key: 'sub100', name: 'Subtraction to 100', color: '#EF4444', icon: '➖', generators: [G2.sub100tens, G2.sub100, G2.sub100b] },
      { key: 'sequence', name: 'Number Sequences', color: '#2563EB', icon: '🔢', generators: [G2.sequence] },
    ]},
    { key: 'g2_mul', name: 'Multiplication & Division', color: '#10B981', icon: '✖️', topics: [
      { key: 'mul', name: 'Multiplication (×2, ×5, ×10)', color: '#34D399', icon: '✖️', generators: [G2.mul2510, G2.mul2510b] },
      { key: 'div', name: 'Division', color: '#10B981', icon: '➗', generators: [G2.div2510] },
    ]},
    { key: 'g2_word', name: 'Word Problems', color: '#8B5CF6', icon: '📖', topics: [
      { key: 'word', name: 'Story Problems', color: '#8B5CF6', icon: '📖', generators: [G2.word1, G2.word2, G2.word3, G2.word4] },
    ]},
    { key: 'g2_measure', name: 'Measurement', color: '#F59E0B', icon: '📏', topics: [
      { key: 'units', name: 'Units & Measurement', color: '#FBBF24', icon: '📏', generators: [G2.units, G2.ampmClock] },
    ]},
  ],
  3: [
    { key: 'g3_arith', name: 'Large Numbers', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'add1000', name: 'Addition to 1000', color: '#60A5FA', icon: '➕', generators: [G3.add1000, G3.add1000b, G3.writtenAdd] },
      { key: 'sub1000', name: 'Subtraction to 1000', color: '#EF4444', icon: '➖', generators: [G3.sub1000, G3.writtenSub] },
      { key: 'sequence', name: 'Number Sequences', color: '#2563EB', icon: '🔢', generators: [G3.sequence] },
    ]},
    { key: 'g3_mul', name: 'Multiplication & Division', color: '#10B981', icon: '✖️', topics: [
      { key: 'mul', name: 'Multiplication', color: '#34D399', icon: '✖️', generators: [G3.mul, G3.mulB, G3.missingMul] },
      { key: 'div', name: 'Division', color: '#10B981', icon: '➗', generators: [G3.div, G3.divB] },
    ]},
    { key: 'g3_word', name: 'Word Problems', color: '#8B5CF6', icon: '📖', topics: [
      { key: 'word', name: 'Story Problems', color: '#8B5CF6', icon: '📖', generators: [G3.word1, G3.word2, G3.word3] },
    ]},
    { key: 'g3_measure', name: 'Measurement', color: '#F59E0B', icon: '📏', topics: [
      { key: 'units', name: 'Units & Measurement', color: '#FBBF24', icon: '📏', generators: [G3.units, G3.ampmClock] },
    ]},
  ],
  4: [
    { key: 'g4_ops', name: 'Numbers & Operations', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'place1k', name: 'Numbers up to 1000', color: '#93C5FD', icon: '🔢', generators: [G4.placeValue, G3.sequence] },
      { key: 'place', name: 'Place Value (up to 10 000)', color: '#60A5FA', icon: '🔢', generators: [G4.placeValue, G4.placeValueBig, G4.sequence] },
      { key: 'mul', name: 'Multiplication', color: '#34D399', icon: '✖️', generators: [G4.writtenMul, G4.writtenMulB] },
      { key: 'div', name: 'Division', color: '#10B981', icon: '➗', generators: [G4.writtenDiv, G4.writtenDivB, G4.divTwoDigit] },
    ]},
    { key: 'g4_frac', name: 'Fractions', color: '#8B5CF6', icon: '½', topics: [
      { key: 'frac', name: 'Fractions', color: '#A78BFA', icon: '½', generators: [G4.fraction, G4.fractionB] },
      { key: 'fracArith', name: 'Fraction Arithmetic', color: '#8B5CF6', icon: '½', generators: [G4.fractionAdd, G4.fractionSub] },
    ]},
    { key: 'g4_geo', name: 'Geometry & Measurement', color: '#F59E0B', icon: '📐', topics: [
      { key: 'geo', name: 'Geometry', color: '#FBBF24', icon: '📐', generators: [G4.geometry, G4.geometryB] },
      { key: 'units', name: 'Units', color: '#F59E0B', icon: '📏', generators: [G4.units] },
    ]},
    { key: 'g4_word', name: 'Word Problems', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Story Problems', color: '#EF4444', icon: '📖', generators: [G4.word1, G4.word2, G4.word3] },
    ]},
  ],
  5: [
    { key: 'g5_ops', name: 'Numbers & Operations', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'large', name: 'Large Numbers & Rounding', color: '#60A5FA', icon: '🔢', generators: [G5.largeNumbers, G5.roundHundreds] },
      { key: 'ops', name: 'Order of Operations', color: '#2563EB', icon: '🔢', generators: [G5.orderOfOps, G5.orderOfOpsB, G5.orderOfOpsC, G5.orderOfOpsD] },
    ]},
    { key: 'g5_frac', name: 'Fractions & Percent', color: '#8B5CF6', icon: '½', topics: [
      { key: 'frac', name: 'Fractions', color: '#A78BFA', icon: '½', generators: [G5.fractionAdd, G5.fractionSub] },
      { key: 'pct', name: 'Percentages', color: '#8B5CF6', icon: '%', generators: [G5.percent10, G5.percent50, G5.percent25] },
    ]},
    { key: 'g5_geo', name: 'Geometry', color: '#F59E0B', icon: '📐', topics: [
      { key: 'geo', name: 'Area & Perimeter', color: '#FBBF24', icon: '📐', generators: [G5.geoRectPerimeter, G5.geoRectArea, G5.geoSquarePerimeter] },
    ]},
    { key: 'g5_word', name: 'Word Problems', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Story Problems', color: '#EF4444', icon: '📖', generators: [G5.wordDiscount, G5.wordOps] },
    ]},
  ],
  6: [
    { key: 'g6_neg', name: 'Negative Numbers', color: '#6366F1', icon: '➖', topics: [
      { key: 'neg', name: 'Negative Numbers', color: '#818CF8', icon: '➖', generators: [G6.negative, G6.negativeB, G6.negativeC] },
    ]},
    { key: 'g6_frac', name: 'Fractions & Percent', color: '#8B5CF6', icon: '½', topics: [
      { key: 'frac', name: 'Fraction Multiplication & Division', color: '#A78BFA', icon: '½', generators: [G6.fractionMul, G6.fractionDiv] },
      { key: 'pct', name: 'Percentages', color: '#8B5CF6', icon: '%', generators: [G6.percentCalc, G6.percentDiscount] },
    ]},
    { key: 'g6_ratio', name: 'Ratios & Speed', color: '#10B981', icon: '⚡', topics: [
      { key: 'ratio', name: 'Ratios & Proportions', color: '#34D399', icon: '⚡', generators: [G6.ratio, G6.speed] },
    ]},
    { key: 'g6_geo', name: 'Geometry', color: '#F59E0B', icon: '📐', topics: [
      { key: 'geo', name: 'Area (triangles & squares)', color: '#FBBF24', icon: '📐', generators: [G6.areaTriangle, G6.areaSquare] },
    ]},
    { key: 'g6_word', name: 'Word Problems', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Story Problems', color: '#EF4444', icon: '📖', generators: [G6.wordShoe, G6.wordTrain] },
    ]},
  ],
  7: [
    { key: 'g7_algebra', name: 'Algebra', color: '#6366F1', icon: 'x', topics: [
      { key: 'powers', name: 'Powers & Exponents', color: '#818CF8', icon: '²', generators: [G7.power2, G7.power3, G7.power10] },
      { key: 'algebra', name: 'Algebraic Expressions', color: '#6366F1', icon: 'x', generators: [G7.algebraSub, G7.algebraSimp, G7.algebraMul] },
    ]},
    { key: 'g7_eq', name: 'Equations', color: '#8B5CF6', icon: '=', topics: [
      { key: 'eq', name: 'Solving Equations', color: '#A78BFA', icon: '=', generators: [G7.equation, G7.equationB] },
    ]},
    { key: 'g7_geo', name: 'Geometry & Triangles', color: '#F59E0B', icon: '📐', topics: [
      { key: 'tri', name: 'Triangle Angles', color: '#FBBF24', icon: '🔺', generators: [G7.triangleAngle, G7.equilateral, G7.isosceles] },
      { key: 'pyth', name: 'Pythagorean Theorem', color: '#F59E0B', icon: '📐', generators: [G7.pythag34, G7.pythag68, G7.pythagLeg13, G7.pythagLeg10] },
    ]},
    { key: 'g7_word', name: 'Word Problems', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Story Problems', color: '#EF4444', icon: '📖', generators: [G7.wordThink, G7.wordSquare] },
    ]},
  ],
  8: [
    { key: 'g8_algebra', name: 'Algebra & Roots', color: '#6366F1', icon: '√', topics: [
      { key: 'sqrt', name: 'Square Roots', color: '#818CF8', icon: '√', generators: [G8.sqrt, G8.sqrtExpr] },
      { key: 'complex', name: 'Complex Expressions', color: '#6366F1', icon: 'x²', generators: [G8.complexPow, G8.complexExpr] },
    ]},
    { key: 'g8_eq', name: 'Equations', color: '#8B5CF6', icon: '=', topics: [
      { key: 'eq', name: 'Solving Equations', color: '#A78BFA', icon: '=', generators: [G8.eqSimple, G8.eqTwoSide] },
    ]},
    { key: 'g8_func', name: 'Functions', color: '#10B981', icon: 'f(x)', topics: [
      { key: 'func', name: 'Linear Functions', color: '#34D399', icon: 'f(x)', generators: [G8.funcValue, G8.funcIntercept] },
    ]},
    { key: 'g8_prob', name: 'Probability', color: '#F59E0B', icon: '🎲', topics: [
      { key: 'prob', name: 'Probability', color: '#FBBF24', icon: '🎲', generators: [G8.probBall, G8.probDice, G8.probCoin] },
    ]},
  ],
};

export function getENThemes(grade: number): ENThemeDef[] {
  return EN_THEMES[grade] || [];
}

// ─── DE THEMES (generator-based, German topic names) ─────────────────────────

const DE_THEMES: Record<number, ENThemeDef[]> = {
  1: [
    { key: 'g1_zahlen', name: 'Zahlen und Zahlensystem', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g1_zaehlen', name: 'Zahlen 0–10', color: '#60A5FA', icon: '🔢', generators: [G1.zaehlen, G1.gridCount] },
      { key: 'g1_compare', name: 'Zahlen vergleichen', color: '#2563EB', icon: '⚖️', generators: [G1.compare] },
      { key: 'g1_pred_succ', name: 'Vorgänger · Nachfolger · Zahlenstrahl', color: '#1D4ED8', icon: '📏', generators: [G1.vorgaenger, G1.nachfolger, G1.numberLine] },
    ]},
    { key: 'g1_zahlen20', name: 'Zahlen bis 20', color: '#06B6D4', icon: '🔟', topics: [
      { key: 'g1_place_value20', name: 'Zehner und Einer', color: '#0891B2', icon: '🧱', generators: [G1.placeValue20] },
    ]},
    { key: 'g1_rechnen', name: 'Rechnen', color: '#EF4444', icon: '➕', topics: [
      { key: 'add10', name: 'Addition bis 10', color: '#F87171', icon: '➕', generators: [G1.add10, G1.add10b] },
      { key: 'sub10', name: 'Subtraktion bis 10', color: '#EF4444', icon: '➖', generators: [G1.sub10, G1.sub10b] },
      { key: 'add20', name: 'Addition bis 20', color: '#DC2626', icon: '➕', generators: [G1.add20, G1.add20b] },
      { key: 'sub20', name: 'Subtraktion bis 20', color: '#B91C1C', icon: '➖', generators: [G1.sub20, G1.sub20b] },
      { key: 'g1_tausch', name: 'Tausch- und Umkehraufgaben', color: '#F59E0B', icon: '🔄', generators: [G1.tausch, G1.missing10, G1.missing10sub] },
    ]},
    { key: 'g1_struktur', name: 'Zahlen verstehen', color: '#8B5CF6', icon: '🧩', topics: [
      { key: 'g1_zahlzerlegung', name: 'Zahlzerlegung', color: '#A78BFA', icon: '🧩', generators: [G1.zahlzerlegung] },
      { key: 'g1_verdoppeln', name: 'Verdoppeln', color: '#8B5CF6', icon: '✌️', generators: [G1.verdoppeln] },
      { key: 'g1_halbieren', name: 'Halbieren', color: '#7C3AED', icon: '✂️', generators: [G1.halbieren] },
      { key: 'g1_sequence', name: 'Zahlenfolgen', color: '#6D28D9', icon: '🔢', generators: [G1.sequence, G1.evenOdd] },
    ]},
    { key: 'g1_geo', name: 'Geometrie und Raumorientierung', color: '#10B981', icon: '🔷', topics: [
      { key: 'g1_shapes', name: 'Formen', color: '#34D399', icon: '🔷', generators: [G1.shapes] },
    ]},
    { key: 'g1_messen', name: 'Messen und Größen', color: '#F59E0B', icon: '📏', topics: [
      { key: 'g1_laenger', name: 'Länger · Kürzer', color: '#FBBF24', icon: '📏', generators: [G1.laenger] },
    ]},
    { key: 'g1_alltag', name: 'Mathematik im Alltag', color: '#FF2D78', icon: '🌍', topics: [
      { key: 'g1_clock', name: 'Uhrzeit', color: '#FF2D78', icon: '🕐', generators: [G1.clockQuarter] },
      { key: 'g1_wochentage', name: 'Wochentage', color: '#FB7185', icon: '📅', generators: [G1.wochentage] },
      { key: 'g1_coins', name: 'Münzen und Geld', color: '#FFD700', icon: '🪙', generators: [G1.coins] },
      { key: 'word', name: 'Sachaufgaben', color: '#C026D3', icon: '📖', generators: [G1.word1, G1.word2, G1.word3, G1.word4, G1.word5] },
    ]},
  ],
  2: [
    { key: 'g2_arith', name: 'Rechnen bis 100', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'add100', name: 'Addition bis 100', color: '#60A5FA', icon: '➕', generators: [G2.add100tens, G2.add100, G2.add100b, G2.missing100] },
      { key: 'sub100', name: 'Subtraktion bis 100', color: '#EF4444', icon: '➖', generators: [G2.sub100tens, G2.sub100, G2.sub100b] },
      { key: 'sequence', name: 'Zahlenfolgen', color: '#2563EB', icon: '🔢', generators: [G2.sequence] },
    ]},
    { key: 'g2_mul', name: 'Einmaleins', color: '#10B981', icon: '✖️', topics: [
      { key: 'mul', name: 'Multiplizieren (×2, ×5, ×10)', color: '#34D399', icon: '✖️', generators: [G2.mul2510, G2.mul2510b] },
      { key: 'div', name: 'Dividieren', color: '#10B981', icon: '➗', generators: [G2.div2510] },
    ]},
    { key: 'g2_word', name: 'Sachaufgaben', color: '#8B5CF6', icon: '📖', topics: [
      { key: 'word', name: 'Sachaufgaben', color: '#8B5CF6', icon: '📖', generators: [G2.word1, G2.word2, G2.word3, G2.word4] },
    ]},
    { key: 'g2_measure', name: 'Größen & Einheiten', color: '#F59E0B', icon: '📏', topics: [
      { key: 'units', name: 'Maßeinheiten', color: '#FBBF24', icon: '📏', generators: [G2.units] },
    ]},
  ],
  3: [
    { key: 'g3_arith', name: 'Große Zahlen', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'add1000', name: 'Addition bis 1000', color: '#60A5FA', icon: '➕', generators: [G3.add1000, G3.add1000b, G3.writtenAdd] },
      { key: 'sub1000', name: 'Subtraktion bis 1000', color: '#EF4444', icon: '➖', generators: [G3.sub1000, G3.writtenSub] },
      { key: 'sequence', name: 'Zahlenfolgen', color: '#2563EB', icon: '🔢', generators: [G3.sequence] },
    ]},
    { key: 'g3_mul', name: 'Einmaleins & Division', color: '#10B981', icon: '✖️', topics: [
      { key: 'mul', name: 'Multiplizieren', color: '#34D399', icon: '✖️', generators: [G3.mul, G3.mulB, G3.missingMul] },
      { key: 'div', name: 'Dividieren', color: '#10B981', icon: '➗', generators: [G3.div, G3.divB] },
    ]},
    { key: 'g3_word', name: 'Sachaufgaben', color: '#8B5CF6', icon: '📖', topics: [
      { key: 'word', name: 'Sachaufgaben', color: '#8B5CF6', icon: '📖', generators: [G3.word1, G3.word2, G3.word3] },
    ]},
    { key: 'g3_measure', name: 'Größen & Einheiten', color: '#F59E0B', icon: '📏', topics: [
      { key: 'units', name: 'Maßeinheiten', color: '#FBBF24', icon: '📏', generators: [G3.units] },
    ]},
  ],
  4: [
    { key: 'g4_zahlen', name: 'Zahlen und Zahlensystem', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'grosseZahlen', name: 'Große Zahlen (bis 1 000 000)', color: '#93C5FD', icon: '🔢', generators: [G4.placeValue, G4.placeValueBig, G4.largeNumbers] },
      { key: 'stellenwert', name: 'Stellenwertsystem', color: '#60A5FA', icon: '🔢', generators: [G4.placeValue, G4.placeValueBig] },
      { key: 'zahlenstrahl', name: 'Zahlenstrahl & Zahlen ordnen', color: '#3B82F6', icon: '📊', generators: [G4.sequence, G3.sequence] },
      { key: 'runden', name: 'Runden (10er, 100er, 1000er)', color: '#06B6D4', icon: '🔄', generators: [G4.roundingG4] },
      { key: 'place_value', name: '🎮 Stellenwerttafel - Interaktiv', color: '#6366F1', icon: '🔢', generators: [] },
      { key: 'number_line', name: '🎮 Runden am Zahlenstrahl', color: '#14B8A6', icon: '🎯', generators: [] },
    ]},
    { key: 'g4_grundrechenarten', name: 'Grundrechenarten', color: '#10B981', icon: '➕', topics: [
      { key: 'addSub', name: 'Addition & Subtraktion', color: '#34D399', icon: '➕', generators: [G4.writtenAddLarge, G4.writtenSubLarge] },
      { key: 'mul', name: 'Multiplikation (schriftlich)', color: '#22C55E', icon: '✖️', generators: [G4.writtenMul, G4.writtenMulB] },
      { key: 'div', name: 'Division (schriftlich)', color: '#10B981', icon: '➗', generators: [G4.writtenDiv, G4.writtenDivB, G4.divTwoDigit] },
      { key: 'ueberschlagen', name: 'Überschlagen & Kontrolle', color: '#059669', icon: '🎯', generators: [G4.roundingG4, G4.writtenMul] },
    ]},
    { key: 'g4_struktur', name: 'Zahlenstruktur und Denken', color: '#8B5CF6', icon: '🧩', topics: [
      { key: 'zahlenfolgen', name: 'Zahlenfolgen & Muster', color: '#A78BFA', icon: '🔗', generators: [G4.sequence, G3.sequence] },
      { key: 'rechenstrategien', name: 'Rechenstrategien', color: '#8B5CF6', icon: '🧠', generators: [G4.placeValue, G4.roundingG4] },
      { key: 'sequence', name: '🎮 Zahlenfolgen - Muster erkennen', color: '#8B5CF6', icon: '🔗', generators: [] },
    ]},
    { key: 'g4_groessen', name: 'Größen und Messen', color: '#F59E0B', icon: '⚖️', topics: [
      { key: 'laenge', name: 'Länge (mm, cm, m, km)', color: '#FBBF24', icon: '📏', generators: [G4.unitLengths, G4.units] },
      { key: 'gewicht', name: 'Gewicht (g, kg, t)', color: '#F59E0B', icon: '⚖️', generators: [G4.units] },
      { key: 'zeit', name: 'Zeit (s, min, h, Tage)', color: '#EAB308', icon: '⏱️', generators: [G4.timeWord] },
      { key: 'geld', name: 'Geld (€, ct)', color: '#CA8A04', icon: '💰', generators: [G4.moneyWord, G4.word2] },
      { key: 'umwandeln', name: 'Einheiten umwandeln', color: '#D97706', icon: '🔄', generators: [G4.units, G4.unitLengths] },
      { key: 'zeichnen', name: '🎮 Zeichnen - Längen und Formen', color: '#06B6D4', icon: '✏️', generators: [] },
      { key: 'messen', name: '🎮 Messen - Mit Lineal', color: '#0EA5E9', icon: '📏', generators: [] },
      { key: 'uhrzeit', name: '🎮 Uhr lesen - Analog & Digital', color: '#06D6D4', icon: '⏰', generators: [] },
      { key: 'timeline', name: '🎮 Zeitdauer - Zeitstrahl', color: '#0D9488', icon: '⏱️', generators: [] },
      { key: 'money', name: '🎮 Geldrechnen - Einkaufen', color: '#22C55E', icon: '💰', generators: [] },
    ]},
    { key: 'g4_geo', name: 'Geometrie', color: '#EC4899', icon: '📐', topics: [
      { key: 'strecken', name: 'Strecken messen & zeichnen', color: '#F472B6', icon: '📏', generators: [G4.geometry] },
      { key: 'geodreieck', name: 'Geodreieck (Winkel, Parallelen)', color: '#EC4899', icon: '📐', generators: [G4.geometry, G4.geometryB] },
      { key: 'zirkel', name: 'Zirkel (Kreis, Radius)', color: '#DB2777', icon: '⭕', generators: [G4.circleSimple] },
      { key: 'symmetrie', name: 'Symmetrie & Spiegeln', color: '#BE185D', icon: '🪞', generators: [G4.geometry] },
      { key: 'angle', name: '🎮 Winkel zeichnen & messen', color: '#EF4444', icon: '📐', generators: [] },
      { key: 'circle_draw', name: '🎮 Kreis zeichnen mit Zirkel', color: '#F97316', icon: '⭕', generators: [] },
      { key: 'symmetry', name: '🎮 Symmetrie - Spiegeln', color: '#EC4899', icon: '🪞', generators: [] },
    ]},
    { key: 'g4_flaeche', name: 'Fläche und Umfang', color: '#F97316', icon: '📏', topics: [
      { key: 'umfang', name: 'Umfang (Rechteck, Quadrat)', color: '#FB923C', icon: '📏', generators: [G4.geometry, G4.geometryB] },
      { key: 'flaeche', name: 'Fläche (Kästchen zählen)', color: '#F97316', icon: '📐', generators: [G4.geometry, G4.geometryB] },
      { key: 'grid_area', name: '🎮 Fläche & Umfang - Gitter zählen', color: '#F59E0B', icon: '📐', generators: [] },
      { key: 'fraction_pizza', name: '🎮 Brüche - Pizza-Darstellung', color: '#F59E0B', icon: '🍕', generators: [] },
    ]},
    { key: 'g4_daten', name: 'Daten und Diagramme', color: '#06B6D4', icon: '📊', topics: [
      { key: 'tabellen', name: 'Tabellen lesen & ausfüllen', color: '#22D3EE', icon: '📈', generators: [G4.word1, G4.word2] },
      { key: 'diagramme', name: 'Diagramme lesen & erstellen', color: '#06B6D4', icon: '📊', generators: [G4.word1, G4.word3] },
    ]},
    { key: 'g4_sachaufgaben', name: 'Sachaufgaben', color: '#EF4444', icon: '📖', topics: [
      { key: 'grundAufgaben', name: 'Textaufgaben (Grundrechenarten)', color: '#F87171', icon: '📖', generators: [G4.word1, G4.word2] },
      { key: 'messAufgaben', name: 'Textaufgaben (Messen)', color: '#EF4444', icon: '📏', generators: [G4.word3, G4.volumeWord, G4.moneyWord] },
      { key: 'mehrschritt', name: 'Mehrschrittige Aufgaben', color: '#DC2626', icon: '🔢', generators: [G4.word1, G4.word2, G4.word3] },
    ]},
  ],
  5: [
    { key: 'g5_ops', name: 'Zahlen & Terme', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'large', name: 'Große Zahlen & Runden', color: '#60A5FA', icon: '🔢', generators: [G5.largeNumbers, G5.roundHundreds] },
      { key: 'ops', name: 'Punkt vor Strich', color: '#2563EB', icon: '🔢', generators: [G5.orderOfOps, G5.orderOfOpsB, G5.orderOfOpsC, G5.orderOfOpsD] },
    ]},
    { key: 'g5_frac', name: 'Brüche & Prozent', color: '#8B5CF6', icon: '½', topics: [
      { key: 'frac', name: 'Brüche addieren & subtrahieren', color: '#A78BFA', icon: '½', generators: [G5.fractionAdd, G5.fractionSub] },
      { key: 'pct', name: 'Prozentrechnung', color: '#8B5CF6', icon: '%', generators: [G5.percent10, G5.percent50, G5.percent25] },
    ]},
    { key: 'g5_geo', name: 'Geometrie', color: '#F59E0B', icon: '📐', topics: [
      { key: 'geo', name: 'Flächeninhalt & Umfang', color: '#FBBF24', icon: '📐', generators: [G5.geoRectPerimeter, G5.geoRectArea, G5.geoSquarePerimeter] },
    ]},
    { key: 'g5_word', name: 'Sachaufgaben', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Sachaufgaben', color: '#EF4444', icon: '📖', generators: [G5.wordDiscount, G5.wordOps] },
    ]},
  ],
  6: [
    { key: 'g6_neg', name: 'Negative Zahlen', color: '#6366F1', icon: '➖', topics: [
      { key: 'neg', name: 'Negative Zahlen', color: '#818CF8', icon: '➖', generators: [G6.negative, G6.negativeB, G6.negativeC] },
    ]},
    { key: 'g6_frac', name: 'Brüche & Prozent', color: '#8B5CF6', icon: '½', topics: [
      { key: 'frac', name: 'Brüche multiplizieren & dividieren', color: '#A78BFA', icon: '½', generators: [G6.fractionMul, G6.fractionDiv] },
      { key: 'pct', name: 'Prozentrechnung', color: '#8B5CF6', icon: '%', generators: [G6.percentCalc, G6.percentDiscount] },
    ]},
    { key: 'g6_ratio', name: 'Verhältnis & Geschwindigkeit', color: '#10B981', icon: '⚡', topics: [
      { key: 'ratio', name: 'Verhältnisse & Proportionen', color: '#34D399', icon: '⚡', generators: [G6.ratio, G6.speed] },
    ]},
    { key: 'g6_geo', name: 'Geometrie', color: '#F59E0B', icon: '📐', topics: [
      { key: 'geo', name: 'Flächeninhalt (Dreiecke & Vierecke)', color: '#FBBF24', icon: '📐', generators: [G6.areaTriangle, G6.areaSquare] },
    ]},
    { key: 'g6_word', name: 'Sachaufgaben', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Sachaufgaben', color: '#EF4444', icon: '📖', generators: [G6.wordShoe, G6.wordTrain] },
    ]},
  ],
  7: [
    { key: 'g7_algebra', name: 'Potenzen & Algebra', color: '#6366F1', icon: 'x', topics: [
      { key: 'powers', name: 'Potenzen', color: '#818CF8', icon: '²', generators: [G7.power2, G7.power3, G7.power10] },
      { key: 'algebra', name: 'Terme vereinfachen', color: '#6366F1', icon: 'x', generators: [G7.algebraSub, G7.algebraSimp, G7.algebraMul] },
    ]},
    { key: 'g7_eq', name: 'Gleichungen', color: '#8B5CF6', icon: '=', topics: [
      { key: 'eq', name: 'Gleichungen lösen', color: '#A78BFA', icon: '=', generators: [G7.equation, G7.equationB] },
    ]},
    { key: 'g7_geo', name: 'Geometrie & Dreiecke', color: '#F59E0B', icon: '📐', topics: [
      { key: 'tri', name: 'Dreieckswinkel', color: '#FBBF24', icon: '🔺', generators: [G7.triangleAngle, G7.equilateral, G7.isosceles] },
      { key: 'pyth', name: 'Satz des Pythagoras', color: '#F59E0B', icon: '📐', generators: [G7.pythag34, G7.pythag68, G7.pythagLeg13, G7.pythagLeg10] },
    ]},
    { key: 'g7_word', name: 'Sachaufgaben', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Sachaufgaben', color: '#EF4444', icon: '📖', generators: [G7.wordThink, G7.wordSquare] },
    ]},
  ],
  8: [
    { key: 'g8_algebra', name: 'Algebra & Wurzeln', color: '#6366F1', icon: '√', topics: [
      { key: 'sqrt', name: 'Quadratwurzeln', color: '#818CF8', icon: '√', generators: [G8.sqrt, G8.sqrtExpr] },
      { key: 'complex', name: 'Terme & Ausdrücke', color: '#6366F1', icon: 'x²', generators: [G8.complexPow, G8.complexExpr] },
    ]},
    { key: 'g8_eq', name: 'Gleichungen', color: '#8B5CF6', icon: '=', topics: [
      { key: 'eq', name: 'Gleichungen lösen', color: '#A78BFA', icon: '=', generators: [G8.eqSimple, G8.eqTwoSide] },
    ]},
    { key: 'g8_func', name: 'Funktionen', color: '#10B981', icon: 'f(x)', topics: [
      { key: 'func', name: 'Lineare Funktionen', color: '#34D399', icon: 'f(x)', generators: [G8.funcValue, G8.funcIntercept] },
    ]},
    { key: 'g8_prob', name: 'Wahrscheinlichkeit', color: '#F59E0B', icon: '🎲', topics: [
      { key: 'prob', name: 'Wahrscheinlichkeitsrechnung', color: '#FBBF24', icon: '🎲', generators: [G8.probBall, G8.probDice, G8.probCoin] },
    ]},
  ],
};

export function getDEThemes(grade: number): ENThemeDef[] {
  return DE_THEMES[grade] || [];
}

// ─── HU THEMES (generator-based, Hungarian topic names) ──────────────────────

const HU_THEMES: Record<number, ENThemeDef[]> = {
  1: [
    { key: 'g1_zahlen', name: 'Számok és számrendszer', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g1_zaehlen', name: 'Számok 0–10', color: '#60A5FA', icon: '🔢', generators: [G1.zaehlen, G1.gridCount] },
      { key: 'g1_compare', name: 'Számok összehasonlítása', color: '#2563EB', icon: '⚖️', generators: [G1.compare] },
      { key: 'g1_pred_succ', name: 'Előző · Következő · Számegyenes', color: '#1D4ED8', icon: '📏', generators: [G1.vorgaenger, G1.nachfolger, G1.numberLine] },
    ]},
    { key: 'g1_zahlen20', name: 'Számkör bővítése (20-ig)', color: '#06B6D4', icon: '🔟', topics: [
      { key: 'g1_place_value20', name: 'Tízes és egyes', color: '#0891B2', icon: '🧱', generators: [G1.placeValue20] },
    ]},
    { key: 'g1_rechnen', name: 'Alapműveletek', color: '#EF4444', icon: '➕', topics: [
      { key: 'add10', name: 'Összeadás 10-ig', color: '#F87171', icon: '➕', generators: [G1.add10, G1.add10b] },
      { key: 'sub10', name: 'Kivonás 10-ig', color: '#EF4444', icon: '➖', generators: [G1.sub10, G1.sub10b] },
      { key: 'add20', name: 'Összeadás 20-ig', color: '#DC2626', icon: '➕', generators: [G1.add20, G1.add20b] },
      { key: 'sub20', name: 'Kivonás 20-ig', color: '#B91C1C', icon: '➖', generators: [G1.sub20, G1.sub20b] },
      { key: 'g1_tausch', name: 'Felcserélés és visszafordítás', color: '#F59E0B', icon: '🔄', generators: [G1.tausch, G1.missing10, G1.missing10sub] },
    ]},
    { key: 'g1_struktur', name: 'Számstruktúra', color: '#8B5CF6', icon: '🧩', topics: [
      { key: 'g1_zahlzerlegung', name: 'Számfelbontás', color: '#A78BFA', icon: '🧩', generators: [G1.zahlzerlegung] },
      { key: 'g1_verdoppeln', name: 'Kétszereselés', color: '#8B5CF6', icon: '✌️', generators: [G1.verdoppeln] },
      { key: 'g1_halbieren', name: 'Felezés', color: '#7C3AED', icon: '✂️', generators: [G1.halbieren] },
      { key: 'g1_sequence', name: 'Számsorok', color: '#6D28D9', icon: '🔢', generators: [G1.sequence, G1.evenOdd] },
    ]},
    { key: 'g1_geo', name: 'Geometria és térbeli tájékozódás', color: '#10B981', icon: '🔷', topics: [
      { key: 'g1_shapes', name: 'Alakzatok', color: '#34D399', icon: '🔷', generators: [G1.shapes] },
    ]},
    { key: 'g1_messen', name: 'Mérések és mennyiségek', color: '#F59E0B', icon: '📏', topics: [
      { key: 'g1_laenger', name: 'Hosszabb · Rövidebb', color: '#FBBF24', icon: '📏', generators: [G1.laenger] },
    ]},
    { key: 'g1_alltag', name: 'Mindennapi matematika', color: '#FF2D78', icon: '🌍', topics: [
      { key: 'g1_clock', name: 'Óra leolvasása', color: '#FF2D78', icon: '🕐', generators: [G1.clockQuarter] },
      { key: 'g1_wochentage', name: 'A hét napjai', color: '#FB7185', icon: '📅', generators: [G1.wochentage] },
      { key: 'g1_coins', name: 'Érmék és pénz', color: '#FFD700', icon: '🪙', generators: [G1.coins] },
      { key: 'word', name: 'Szöveges feladatok', color: '#C026D3', icon: '📖', generators: [G1.word1, G1.word2, G1.word3, G1.word4, G1.word5] },
    ]},
  ],
  2: [
    { key: 'g2_arith', name: 'Számolás 100-ig', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'add100', name: 'Összeadás 100-ig', color: '#60A5FA', icon: '➕', generators: [G2.add100tens, G2.add100, G2.add100b, G2.missing100] },
      { key: 'sub100', name: 'Kivonás 100-ig', color: '#EF4444', icon: '➖', generators: [G2.sub100tens, G2.sub100, G2.sub100b] },
      { key: 'sequence', name: 'Számsorozatok', color: '#2563EB', icon: '🔢', generators: [G2.sequence] },
    ]},
    { key: 'g2_mul', name: 'Szorzótábla', color: '#10B981', icon: '✖️', topics: [
      { key: 'mul', name: 'Szorzás (×2, ×5, ×10)', color: '#34D399', icon: '✖️', generators: [G2.mul2510, G2.mul2510b] },
      { key: 'div', name: 'Osztás', color: '#10B981', icon: '➗', generators: [G2.div2510] },
    ]},
    { key: 'g2_word', name: 'Szöveges feladatok', color: '#8B5CF6', icon: '📖', topics: [
      { key: 'word', name: 'Szöveges feladatok', color: '#8B5CF6', icon: '📖', generators: [G2.word1, G2.word2, G2.word3, G2.word4] },
    ]},
    { key: 'g2_measure', name: 'Mértékegységek', color: '#F59E0B', icon: '📏', topics: [
      { key: 'units', name: 'Mértékegységek', color: '#FBBF24', icon: '📏', generators: [G2.units] },
    ]},
  ],
  3: [
    { key: 'g3_arith', name: 'Nagy számok', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'add1000', name: 'Összeadás 1000-ig', color: '#60A5FA', icon: '➕', generators: [G3.add1000, G3.add1000b, G3.writtenAdd] },
      { key: 'sub1000', name: 'Kivonás 1000-ig', color: '#EF4444', icon: '➖', generators: [G3.sub1000, G3.writtenSub] },
      { key: 'sequence', name: 'Számsorozatok', color: '#2563EB', icon: '🔢', generators: [G3.sequence] },
    ]},
    { key: 'g3_mul', name: 'Szorzás & Osztás', color: '#10B981', icon: '✖️', topics: [
      { key: 'mul', name: 'Szorzás', color: '#34D399', icon: '✖️', generators: [G3.mul, G3.mulB, G3.missingMul] },
      { key: 'div', name: 'Osztás', color: '#10B981', icon: '➗', generators: [G3.div, G3.divB] },
    ]},
    { key: 'g3_word', name: 'Szöveges feladatok', color: '#8B5CF6', icon: '📖', topics: [
      { key: 'word', name: 'Szöveges feladatok', color: '#8B5CF6', icon: '📖', generators: [G3.word1, G3.word2, G3.word3] },
    ]},
    { key: 'g3_measure', name: 'Mértékegységek', color: '#F59E0B', icon: '📏', topics: [
      { key: 'units', name: 'Mértékegységek', color: '#FBBF24', icon: '📏', generators: [G3.units] },
    ]},
  ],
  4: [
    { key: 'g4_ops', name: 'Számok & Műveletek', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'place1k', name: 'Számok 1000-ig', color: '#93C5FD', icon: '🔢', generators: [G4.placeValue, G3.sequence] },
      { key: 'place', name: 'Helyiérték (10 000-ig)', color: '#60A5FA', icon: '🔢', generators: [G4.placeValue, G4.placeValueBig, G4.sequence] },
      { key: 'mul', name: 'Írásbeli szorzás', color: '#34D399', icon: '✖️', generators: [G4.writtenMul, G4.writtenMulB] },
      { key: 'div', name: 'Írásbeli osztás', color: '#10B981', icon: '➗', generators: [G4.writtenDiv, G4.writtenDivB, G4.divTwoDigit] },
    ]},
    { key: 'g4_frac', name: 'Törtek', color: '#8B5CF6', icon: '½', topics: [
      { key: 'frac', name: 'Törtek', color: '#A78BFA', icon: '½', generators: [G4.fraction, G4.fractionB] },
      { key: 'fracArith', name: 'Törtek összeadása & kivonása', color: '#8B5CF6', icon: '½', generators: [G4.fractionAdd, G4.fractionSub] },
    ]},
    { key: 'g4_geo', name: 'Geometria & Mértékegységek', color: '#F59E0B', icon: '📐', topics: [
      { key: 'geo', name: 'Terület & Kerület', color: '#FBBF24', icon: '📐', generators: [G4.geometry, G4.geometryB] },
      { key: 'units', name: 'Mértékegységek', color: '#F59E0B', icon: '📏', generators: [G4.units] },
    ]},
    { key: 'g4_word', name: 'Szöveges feladatok', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Szöveges feladatok', color: '#EF4444', icon: '📖', generators: [G4.word1, G4.word2, G4.word3] },
    ]},
  ],
  5: [
    { key: 'g5_ops', name: 'Számok & Kifejezések', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'large', name: 'Nagy számok & Kerekítés', color: '#60A5FA', icon: '🔢', generators: [G5.largeNumbers, G5.roundHundreds] },
      { key: 'ops', name: 'Műveleti sorrend', color: '#2563EB', icon: '🔢', generators: [G5.orderOfOps, G5.orderOfOpsB, G5.orderOfOpsC, G5.orderOfOpsD] },
    ]},
    { key: 'g5_frac', name: 'Törtek & Százalék', color: '#8B5CF6', icon: '½', topics: [
      { key: 'frac', name: 'Törtek összeadása & kivonása', color: '#A78BFA', icon: '½', generators: [G5.fractionAdd, G5.fractionSub] },
      { key: 'pct', name: 'Százalékszámítás', color: '#8B5CF6', icon: '%', generators: [G5.percent10, G5.percent50, G5.percent25] },
    ]},
    { key: 'g5_geo', name: 'Geometria', color: '#F59E0B', icon: '📐', topics: [
      { key: 'geo', name: 'Terület & Kerület', color: '#FBBF24', icon: '📐', generators: [G5.geoRectPerimeter, G5.geoRectArea, G5.geoSquarePerimeter] },
    ]},
    { key: 'g5_word', name: 'Szöveges feladatok', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Szöveges feladatok', color: '#EF4444', icon: '📖', generators: [G5.wordDiscount, G5.wordOps] },
    ]},
  ],
  6: [
    { key: 'g6_neg', name: 'Negatív számok', color: '#6366F1', icon: '➖', topics: [
      { key: 'neg', name: 'Negatív számok', color: '#818CF8', icon: '➖', generators: [G6.negative, G6.negativeB, G6.negativeC] },
    ]},
    { key: 'g6_frac', name: 'Törtek & Százalék', color: '#8B5CF6', icon: '½', topics: [
      { key: 'frac', name: 'Törtek szorzása & osztása', color: '#A78BFA', icon: '½', generators: [G6.fractionMul, G6.fractionDiv] },
      { key: 'pct', name: 'Százalékszámítás', color: '#8B5CF6', icon: '%', generators: [G6.percentCalc, G6.percentDiscount] },
    ]},
    { key: 'g6_ratio', name: 'Arány & Sebesség', color: '#10B981', icon: '⚡', topics: [
      { key: 'ratio', name: 'Arány & Arányosság', color: '#34D399', icon: '⚡', generators: [G6.ratio, G6.speed] },
    ]},
    { key: 'g6_geo', name: 'Geometria', color: '#F59E0B', icon: '📐', topics: [
      { key: 'geo', name: 'Terület (háromszög & négyzet)', color: '#FBBF24', icon: '📐', generators: [G6.areaTriangle, G6.areaSquare] },
    ]},
    { key: 'g6_word', name: 'Szöveges feladatok', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Szöveges feladatok', color: '#EF4444', icon: '📖', generators: [G6.wordShoe, G6.wordTrain] },
    ]},
  ],
  7: [
    { key: 'g7_algebra', name: 'Hatványok & Algebra', color: '#6366F1', icon: 'x', topics: [
      { key: 'powers', name: 'Hatványok', color: '#818CF8', icon: '²', generators: [G7.power2, G7.power3, G7.power10] },
      { key: 'algebra', name: 'Kifejezések egyszerűsítése', color: '#6366F1', icon: 'x', generators: [G7.algebraSub, G7.algebraSimp, G7.algebraMul] },
    ]},
    { key: 'g7_eq', name: 'Egyenletek', color: '#8B5CF6', icon: '=', topics: [
      { key: 'eq', name: 'Egyenletek megoldása', color: '#A78BFA', icon: '=', generators: [G7.equation, G7.equationB] },
    ]},
    { key: 'g7_geo', name: 'Geometria & Háromszögek', color: '#F59E0B', icon: '📐', topics: [
      { key: 'tri', name: 'Háromszögek szögei', color: '#FBBF24', icon: '🔺', generators: [G7.triangleAngle, G7.equilateral, G7.isosceles] },
      { key: 'pyth', name: 'Pitagorasz-tétel', color: '#F59E0B', icon: '📐', generators: [G7.pythag34, G7.pythag68, G7.pythagLeg13, G7.pythagLeg10] },
    ]},
    { key: 'g7_word', name: 'Szöveges feladatok', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Szöveges feladatok', color: '#EF4444', icon: '📖', generators: [G7.wordThink, G7.wordSquare] },
    ]},
  ],
  8: [
    { key: 'g8_algebra', name: 'Algebra & Gyökök', color: '#6366F1', icon: '√', topics: [
      { key: 'sqrt', name: 'Négyzetgyökök', color: '#818CF8', icon: '√', generators: [G8.sqrt, G8.sqrtExpr] },
      { key: 'complex', name: 'Összetett kifejezések', color: '#6366F1', icon: 'x²', generators: [G8.complexPow, G8.complexExpr] },
    ]},
    { key: 'g8_eq', name: 'Egyenletek', color: '#8B5CF6', icon: '=', topics: [
      { key: 'eq', name: 'Egyenletek megoldása', color: '#A78BFA', icon: '=', generators: [G8.eqSimple, G8.eqTwoSide] },
    ]},
    { key: 'g8_func', name: 'Függvények', color: '#10B981', icon: 'f(x)', topics: [
      { key: 'func', name: 'Lineáris függvények', color: '#34D399', icon: 'f(x)', generators: [G8.funcValue, G8.funcIntercept] },
    ]},
    { key: 'g8_prob', name: 'Valószínűség', color: '#F59E0B', icon: '🎲', topics: [
      { key: 'prob', name: 'Valószínűségszámítás', color: '#FBBF24', icon: '🎲', generators: [G8.probBall, G8.probDice, G8.probCoin] },
    ]},
  ],
};

// ─── RO THEMES (generator-based, Romanian topic names) ───────────────────────

const RO_THEMES: Record<number, ENThemeDef[]> = {
  1: [
    { key: 'g1_zahlen', name: 'Numere și sistemul numeric', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g1_zaehlen', name: 'Numere 0–10', color: '#60A5FA', icon: '🔢', generators: [G1.zaehlen, G1.gridCount] },
      { key: 'g1_compare', name: 'Compararea numerelor', color: '#2563EB', icon: '⚖️', generators: [G1.compare] },
      { key: 'g1_pred_succ', name: 'Înainte · După · Dreapta numerelor', color: '#1D4ED8', icon: '📏', generators: [G1.vorgaenger, G1.nachfolger, G1.numberLine] },
    ]},
    { key: 'g1_zahlen20', name: 'Numere până la 20', color: '#06B6D4', icon: '🔟', topics: [
      { key: 'g1_place_value20', name: 'Zeci și unități', color: '#0891B2', icon: '🧱', generators: [G1.placeValue20] },
    ]},
    { key: 'g1_rechnen', name: 'Operații de bază', color: '#EF4444', icon: '➕', topics: [
      { key: 'add10', name: 'Adunare până la 10', color: '#F87171', icon: '➕', generators: [G1.add10, G1.add10b] },
      { key: 'sub10', name: 'Scădere până la 10', color: '#EF4444', icon: '➖', generators: [G1.sub10, G1.sub10b] },
      { key: 'add20', name: 'Adunare până la 20', color: '#DC2626', icon: '➕', generators: [G1.add20, G1.add20b] },
      { key: 'sub20', name: 'Scădere până la 20', color: '#B91C1C', icon: '➖', generators: [G1.sub20, G1.sub20b] },
      { key: 'g1_tausch', name: 'Comutativitate și operații inverse', color: '#F59E0B', icon: '🔄', generators: [G1.tausch, G1.missing10, G1.missing10sub] },
    ]},
    { key: 'g1_struktur', name: 'Înțelegerea numerelor', color: '#8B5CF6', icon: '🧩', topics: [
      { key: 'g1_zahlzerlegung', name: 'Descompunerea numerelor', color: '#A78BFA', icon: '🧩', generators: [G1.zahlzerlegung] },
      { key: 'g1_verdoppeln', name: 'Dublare', color: '#8B5CF6', icon: '✌️', generators: [G1.verdoppeln] },
      { key: 'g1_halbieren', name: 'Înjumătățire', color: '#7C3AED', icon: '✂️', generators: [G1.halbieren] },
      { key: 'g1_sequence', name: 'Șiruri de numere', color: '#6D28D9', icon: '🔢', generators: [G1.sequence, G1.evenOdd] },
    ]},
    { key: 'g1_geo', name: 'Geometrie și orientare spațială', color: '#10B981', icon: '🔷', topics: [
      { key: 'g1_shapes', name: 'Forme geometrice', color: '#34D399', icon: '🔷', generators: [G1.shapes] },
    ]},
    { key: 'g1_messen', name: 'Măsurători și mărimi', color: '#F59E0B', icon: '📏', topics: [
      { key: 'g1_laenger', name: 'Mai lung · Mai scurt', color: '#FBBF24', icon: '📏', generators: [G1.laenger] },
    ]},
    { key: 'g1_alltag', name: 'Matematica în viața de zi cu zi', color: '#FF2D78', icon: '🌍', topics: [
      { key: 'g1_clock', name: 'Citirea ceasului', color: '#FF2D78', icon: '🕐', generators: [G1.clockQuarter] },
      { key: 'g1_wochentage', name: 'Zilele săptămânii', color: '#FB7185', icon: '📅', generators: [G1.wochentage] },
      { key: 'g1_coins', name: 'Monede și bani', color: '#FFD700', icon: '🪙', generators: [G1.coins] },
      { key: 'word', name: 'Probleme', color: '#C026D3', icon: '📖', generators: [G1.word1, G1.word2, G1.word3, G1.word4, G1.word5] },
    ]},
  ],
  2: [
    { key: 'g2_arith', name: 'Calcul până la 100', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'add100', name: 'Adunare până la 100', color: '#60A5FA', icon: '➕', generators: [G2.add100tens, G2.add100, G2.add100b, G2.missing100] },
      { key: 'sub100', name: 'Scădere până la 100', color: '#EF4444', icon: '➖', generators: [G2.sub100tens, G2.sub100, G2.sub100b] },
      { key: 'sequence', name: 'Șiruri de numere', color: '#2563EB', icon: '🔢', generators: [G2.sequence] },
    ]},
    { key: 'g2_mul', name: 'Tabla înmulțirii', color: '#10B981', icon: '✖️', topics: [
      { key: 'mul', name: 'Înmulțire (×2, ×5, ×10)', color: '#34D399', icon: '✖️', generators: [G2.mul2510, G2.mul2510b] },
      { key: 'div', name: 'Împărțire', color: '#10B981', icon: '➗', generators: [G2.div2510] },
    ]},
    { key: 'g2_word', name: 'Probleme', color: '#8B5CF6', icon: '📖', topics: [
      { key: 'word', name: 'Probleme', color: '#8B5CF6', icon: '📖', generators: [G2.word1, G2.word2, G2.word3, G2.word4] },
    ]},
    { key: 'g2_measure', name: 'Unități de măsură', color: '#F59E0B', icon: '📏', topics: [
      { key: 'units', name: 'Unități de măsură', color: '#FBBF24', icon: '📏', generators: [G2.units] },
    ]},
  ],
  3: [
    { key: 'g3_arith', name: 'Numere mari', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'add1000', name: 'Adunare până la 1000', color: '#60A5FA', icon: '➕', generators: [G3.add1000, G3.add1000b, G3.writtenAdd] },
      { key: 'sub1000', name: 'Scădere până la 1000', color: '#EF4444', icon: '➖', generators: [G3.sub1000, G3.writtenSub] },
      { key: 'sequence', name: 'Șiruri de numere', color: '#2563EB', icon: '🔢', generators: [G3.sequence] },
    ]},
    { key: 'g3_mul', name: 'Înmulțire & Împărțire', color: '#10B981', icon: '✖️', topics: [
      { key: 'mul', name: 'Înmulțire', color: '#34D399', icon: '✖️', generators: [G3.mul, G3.mulB, G3.missingMul] },
      { key: 'div', name: 'Împărțire', color: '#10B981', icon: '➗', generators: [G3.div, G3.divB] },
    ]},
    { key: 'g3_word', name: 'Probleme', color: '#8B5CF6', icon: '📖', topics: [
      { key: 'word', name: 'Probleme', color: '#8B5CF6', icon: '📖', generators: [G3.word1, G3.word2, G3.word3] },
    ]},
    { key: 'g3_measure', name: 'Unități de măsură', color: '#F59E0B', icon: '📏', topics: [
      { key: 'units', name: 'Unități de măsură', color: '#FBBF24', icon: '📏', generators: [G3.units] },
    ]},
  ],
  4: [
    { key: 'g4_ops', name: 'Numere & Operații', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'place1k', name: 'Numere până la 1000', color: '#93C5FD', icon: '🔢', generators: [G4.placeValue, G3.sequence] },
      { key: 'place', name: 'Valoarea cifrelor (până la 10 000)', color: '#60A5FA', icon: '🔢', generators: [G4.placeValue, G4.placeValueBig, G4.sequence] },
      { key: 'mul', name: 'Înmulțire în scris', color: '#34D399', icon: '✖️', generators: [G4.writtenMul, G4.writtenMulB] },
      { key: 'div', name: 'Împărțire în scris', color: '#10B981', icon: '➗', generators: [G4.writtenDiv, G4.writtenDivB, G4.divTwoDigit] },
    ]},
    { key: 'g4_frac', name: 'Fracții', color: '#8B5CF6', icon: '½', topics: [
      { key: 'frac', name: 'Fracții', color: '#A78BFA', icon: '½', generators: [G4.fraction, G4.fractionB] },
      { key: 'fracArith', name: 'Adunare & scădere fracții', color: '#8B5CF6', icon: '½', generators: [G4.fractionAdd, G4.fractionSub] },
    ]},
    { key: 'g4_geo', name: 'Geometrie & Unități', color: '#F59E0B', icon: '📐', topics: [
      { key: 'geo', name: 'Arie & Perimetru', color: '#FBBF24', icon: '📐', generators: [G4.geometry, G4.geometryB] },
      { key: 'units', name: 'Unități de măsură', color: '#F59E0B', icon: '📏', generators: [G4.units] },
    ]},
    { key: 'g4_word', name: 'Probleme', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Probleme', color: '#EF4444', icon: '📖', generators: [G4.word1, G4.word2, G4.word3] },
    ]},
  ],
  5: [
    { key: 'g5_ops', name: 'Numere & Expresii', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'large', name: 'Numere mari & Rotunjire', color: '#60A5FA', icon: '🔢', generators: [G5.largeNumbers, G5.roundHundreds] },
      { key: 'ops', name: 'Ordinea operațiilor', color: '#2563EB', icon: '🔢', generators: [G5.orderOfOps, G5.orderOfOpsB, G5.orderOfOpsC, G5.orderOfOpsD] },
    ]},
    { key: 'g5_frac', name: 'Fracții & Procente', color: '#8B5CF6', icon: '½', topics: [
      { key: 'frac', name: 'Adunare & scădere fracții', color: '#A78BFA', icon: '½', generators: [G5.fractionAdd, G5.fractionSub] },
      { key: 'pct', name: 'Calcul procentual', color: '#8B5CF6', icon: '%', generators: [G5.percent10, G5.percent50, G5.percent25] },
    ]},
    { key: 'g5_geo', name: 'Geometrie', color: '#F59E0B', icon: '📐', topics: [
      { key: 'geo', name: 'Arie & Perimetru', color: '#FBBF24', icon: '📐', generators: [G5.geoRectPerimeter, G5.geoRectArea, G5.geoSquarePerimeter] },
    ]},
    { key: 'g5_word', name: 'Probleme', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Probleme', color: '#EF4444', icon: '📖', generators: [G5.wordDiscount, G5.wordOps] },
    ]},
  ],
  6: [
    { key: 'g6_neg', name: 'Numere negative', color: '#6366F1', icon: '➖', topics: [
      { key: 'neg', name: 'Numere negative', color: '#818CF8', icon: '➖', generators: [G6.negative, G6.negativeB, G6.negativeC] },
    ]},
    { key: 'g6_frac', name: 'Fracții & Procente', color: '#8B5CF6', icon: '½', topics: [
      { key: 'frac', name: 'Înmulțire & împărțire fracții', color: '#A78BFA', icon: '½', generators: [G6.fractionMul, G6.fractionDiv] },
      { key: 'pct', name: 'Calcul procentual', color: '#8B5CF6', icon: '%', generators: [G6.percentCalc, G6.percentDiscount] },
    ]},
    { key: 'g6_ratio', name: 'Rapoarte & Viteză', color: '#10B981', icon: '⚡', topics: [
      { key: 'ratio', name: 'Rapoarte & Proporții', color: '#34D399', icon: '⚡', generators: [G6.ratio, G6.speed] },
    ]},
    { key: 'g6_geo', name: 'Geometrie', color: '#F59E0B', icon: '📐', topics: [
      { key: 'geo', name: 'Arie (triunghiuri & pătrate)', color: '#FBBF24', icon: '📐', generators: [G6.areaTriangle, G6.areaSquare] },
    ]},
    { key: 'g6_word', name: 'Probleme', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Probleme', color: '#EF4444', icon: '📖', generators: [G6.wordShoe, G6.wordTrain] },
    ]},
  ],
  7: [
    { key: 'g7_algebra', name: 'Puteri & Algebră', color: '#6366F1', icon: 'x', topics: [
      { key: 'powers', name: 'Puteri', color: '#818CF8', icon: '²', generators: [G7.power2, G7.power3, G7.power10] },
      { key: 'algebra', name: 'Simplificarea expresiilor', color: '#6366F1', icon: 'x', generators: [G7.algebraSub, G7.algebraSimp, G7.algebraMul] },
    ]},
    { key: 'g7_eq', name: 'Ecuații', color: '#8B5CF6', icon: '=', topics: [
      { key: 'eq', name: 'Rezolvarea ecuațiilor', color: '#A78BFA', icon: '=', generators: [G7.equation, G7.equationB] },
    ]},
    { key: 'g7_geo', name: 'Geometrie & Triunghiuri', color: '#F59E0B', icon: '📐', topics: [
      { key: 'tri', name: 'Unghiurile triunghiului', color: '#FBBF24', icon: '🔺', generators: [G7.triangleAngle, G7.equilateral, G7.isosceles] },
      { key: 'pyth', name: 'Teorema lui Pitagora', color: '#F59E0B', icon: '📐', generators: [G7.pythag34, G7.pythag68, G7.pythagLeg13, G7.pythagLeg10] },
    ]},
    { key: 'g7_word', name: 'Probleme', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Probleme', color: '#EF4444', icon: '📖', generators: [G7.wordThink, G7.wordSquare] },
    ]},
  ],
  8: [
    { key: 'g8_algebra', name: 'Algebră & Rădăcini', color: '#6366F1', icon: '√', topics: [
      { key: 'sqrt', name: 'Rădăcini pătrate', color: '#818CF8', icon: '√', generators: [G8.sqrt, G8.sqrtExpr] },
      { key: 'complex', name: 'Expresii complexe', color: '#6366F1', icon: 'x²', generators: [G8.complexPow, G8.complexExpr] },
    ]},
    { key: 'g8_eq', name: 'Ecuații', color: '#8B5CF6', icon: '=', topics: [
      { key: 'eq', name: 'Rezolvarea ecuațiilor', color: '#A78BFA', icon: '=', generators: [G8.eqSimple, G8.eqTwoSide] },
    ]},
    { key: 'g8_func', name: 'Funcții', color: '#10B981', icon: 'f(x)', topics: [
      { key: 'func', name: 'Funcții liniare', color: '#34D399', icon: 'f(x)', generators: [G8.funcValue, G8.funcIntercept] },
    ]},
    { key: 'g8_prob', name: 'Probabilitate', color: '#F59E0B', icon: '🎲', topics: [
      { key: 'prob', name: 'Calcul de probabilitate', color: '#FBBF24', icon: '🎲', generators: [G8.probBall, G8.probDice, G8.probCoin] },
    ]},
  ],
};

export function getROThemes(grade: number): ENThemeDef[] {
  return RO_THEMES[grade] || [];
}

export function getHUThemes(grade: number): ENThemeDef[] {
  return HU_THEMES[grade] || [];
}

function getThemesForCC(grade: number, countryCode: string): ENThemeDef[] {
  if (countryCode === 'DE' || countryCode === 'AT' || countryCode === 'CH') {
    return DE_THEMES[grade] || [];
  }
  if (countryCode === 'HU') return HU_THEMES[grade] || [];
  if (countryCode === 'RO') return RO_THEMES[grade] || [];
  return EN_THEMES[grade] || [];
}

export function generateTopicQuestions(grade: number, topicKey: string, countryCode: string, count = 10): MathQuestion[] {
  const themes = getThemesForCC(grade, countryCode);
  for (const theme of themes) {
    for (const topic of theme.topics) {
      if (topic.key === topicKey) {
        const pool: MathQuestion[] = [];
        const seen = new Set<string>();
        let attempts = 0;
        while (pool.length < count && attempts < count * 5) {
          const gen = pick(topic.generators);
          const q = gen(countryCode);
          if (!seen.has(q.question)) { seen.add(q.question); pool.push(q); }
          attempts++;
        }
        return pool;
      }
    }
  }
  return [];
}

// ─── TEST GENERATION (NO DUPLICATES) ─────────────────────────────

const TOTAL_QUESTIONS = 10;

export function generateTest(grade: number, period?: number, countryCode?: string): MathQuestion[] {
  const cc = countryCode || "HU";
  const p = period ?? getPeriod();
  const topics = getCurriculum(cc)[grade]?.[p];
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
  const topics = getCurriculum(cc)[grade]?.[p];
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
          generators: [G1.clockQuarter, G1.placeValue, G1.timeline, G1.fraction],
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
          generators: [G4.fractionSimple, G4.fractionAddSimple],
        },
        geometrie: {
          name: "Geometrie",
          questionCount: 2,
          pointsPerQuestion: 2,
          generators: [G4.geometry, G4.geometryB, G4.circleSimple],
        },
        bonus: {
          name: "Bonus",
          questionCount: 1,
          pointsPerQuestion: 1,
          generators: [G4.roundingG4, G4.sequence],
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
  const topics = getCurriculum(cc)[grade]?.[p];
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
