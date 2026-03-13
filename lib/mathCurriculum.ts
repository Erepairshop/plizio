// ─── MATH CURRICULUM SYSTEM ─────────────────────────────
// Multi-country elementary school math curriculum (1-8 grade)
// Generates questions based on grade + current period + country
// No duplicate questions in a single test

import type { VisualData } from "./mathQuestionUtils";
import {
  t, getTranslatedPeriodLabel, getNames, getItems, getCurrency,
  qCompare, wpHasFruit, wpLostItems, wpColoredItems, wpAte, wpBus,
  wpBirds, wpGifts, wpFlowers, wpShared, wpSteps,
  wpFoundInNature, wpBirthdayPresents, wpFilledBag, wpKidsJoined, wpCoinsInBank,
  wpMarketBasket, wpBuiltTower, wpCollectedStickers, wpSchoolSupplies,
  wpKidsWentHome, wpAteFromPlate, wpGavePencils, wpBirdsOnFence,
  wpUsedPaper, wpGotOffBus, wpPickedRipeFruit, wpSoldAtMarket,
  wpCompareToys, wpMissingBalls, wpBookshelf,
  wpClassroomTable, wpSavingsGoal, wpBakery, wpLibraryReturn, wpSchoolTrip,
  wpSwimmingPool, wpGardenFlowers, wpSportsDay,
  wpBikeTrip, wpBoxesInWarehouse, wpSchoolCafe, wpFruitShop,
  wpOrchardRows, wpBooksOrdered, wpCityTrip, wpTruckDelivery, wpEventOrganizer,
  wpFactoryProduction, wpStampCollection, wpSchoolMeal, wpWarehouseStock,
  wpConstructionBricks, wpConferenceSeats, wpBookPublisher, wpSchoolRenovation,
  wpFarmHarvest, wpSportArena, wpCarRentalFleet, wpSchoolSupplyOrder, wpTrainJourney,
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
  wpDrinksPerWeek, wpContainerFill, wpBottleTotal,
  wpBudgetLeft, wpTwoItemsCost, wpFenceLength,
  qOrderOfOpsReminder,
  qNextEven, qNextOdd, qIsEvenOrOdd,
  qClockFullHour, qClockMinutes, qClockHalfPast, qClockQuarterPast,
  qG1ClockQuarter, qG1NumberLine, qG1PlaceValueTens, qG1PlaceValueOnes, qG1PlaceValueTotal,
  qG1GridCount, qG1GridEmpty, qG1Sequence, qG1Coins, qG1Timeline, qG1Fraction,
  qVorgaenger, qNachfolger, qZaehlen, qTauschaufgabe, qZahlzerlegung,
  qVerdoppeln, qHalbieren, qShapeCorners, qLaenger, qG1Wochentage,
  qG1Spatial, qG1Weight, qG1WeightB, qG1WeightC, qG1Volume, qG1VolumeB, qG1VolumeC,
  qG1VolumeD, qG1VolumeE, qG1VolumeFits, qG1VolumeFillUp, qG1VolumePool,
  qG1Pattern, qG1NumberOrder, qG1DataTable,
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
  qHowManyZehner, qHowManyEiner, qZahlzerlegungA, qZahlzerlegungB,
  qMulAsAddition, wpGroupsOf, qDivMulRelation,
  qHowManyCentInEuro, qEuroToCent, qKgToG, wpSchoolDay, getShapeNamesG2,
  qFillInSign, qComposeFromParts, qCountAdd, qCountSub, qMulRows, qPatternNext, qShapePatternQuestion, qChartMore, wpVisualShare,
  qRightAngleDeg, qStraightAngleDeg, qFullAngleDeg, qComplementToRight, qAngleSumTriangle,
  qRightAnglesInShape, qSymmetryAxes, qAngleType,
  qErgaenzeAuf10000, qRoundTo10000, qWeightConvert,
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
  visualData?: VisualData;   // G2 visual SVG data
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

// ─── TOPIC CONSTRAINT SYSTEM ────────────────────────────────────────────────
// Ha a tanuló kiválaszt egy "szám-tartomány-jelző" témakört (pl. "összeadás 1-10-ig"),
// a rendszer automatikusan leszűkíti az összes többi kiválasztott témakör generátorait
// ugyanarra a tartományra. Így a fogalmak között teljes összefüggés van.

export interface TopicConstraint {
  maxNumber: number;
}

/**
 * Melyik topic key mekkora számtartományt "jelent"?
 * Ha egy tanuló kiválaszt egy ilyen témát, a constraint ebből az értékből fog szármnazni.
 */
export const TOPIC_NUMBER_RANGE: Partial<Record<string, number>> = {
  // Grade 1 — 1-10
  'add10': 10, 'sub10': 10, 'missing10': 10, 'missing10sub': 10,
  'g1_count': 10, 'g1_addpics': 10, 'g1_subpics': 10,
  'g1_zahlzerlegung': 10, 'g1_ergaenzen': 10, 'g1_verdoppeln': 10, 'g1_halbieren': 10,
  // Grade 1 — 1-20
  'add20': 20, 'sub20': 20, 'g1_num1120': 20, 'g1_place_value20': 20, 'g1_tausch': 20,
  // Grade 2 — 1-100
  'add100': 100, 'sub100': 100, 'add100b': 100, 'sub100b': 100,
  'g2_zahlen100': 100, 'g2_add_ohne': 100, 'g2_add_mit': 100,
  'g2_sub_ohne': 100, 'g2_sub_mit': 100, 'g2_add_kopf': 100, 'g2_sub_kopf': 100,
  'g2_add3': 100, 'g2_add_visual': 100, 'g2_sub_visual': 100,
  'g2_mul_simple': 100, 'mul2510': 100, 'mul2510b': 100,
  'g2_div_simple': 100, 'div2510': 100,
  // Grade 3 — 1-1000
  'add1000': 1000, 'sub1000': 1000, 'add1000b': 1000, 'sub1000b': 1000,
  'g3_add': 1000, 'g3_sub': 1000, 'g3_add_kopf': 1000, 'g3_sub_kopf': 1000,
  'g3_mul': 1000, 'g3_div': 1000, 'mul': 1000,
  // Grade 4 — 1-10000
  'add10000': 10000, 'sub10000': 10000,
  'g4_add': 10000, 'g4_sub': 10000, 'g4_mul': 10000, 'g4_div': 10000,
  // Grade 5 — általános számok (nincs explicit maxNumber, de ismerjük az összeadás/kivonást)
  'g5_add': 100000, 'g5_sub': 100000,
};

/**
 * Melyik topic key milyen számtani műveletet végez?
 * Ez alapján választjuk ki a constrained generátorokat.
 */
const TOPIC_OPERATION_TYPE: Partial<Record<string, 'add' | 'sub' | 'mul' | 'div' | 'mixed' | 'word'>> = {
  // Addition topics
  'add10': 'add', 'add20': 'add', 'add100': 'add', 'add100b': 'add',
  'add1000': 'add', 'add1000b': 'add', 'add10000': 'add',
  'g1_addpics': 'add', 'g2_add_ohne': 'add', 'g2_add_mit': 'add',
  'g2_add_kopf': 'add', 'g2_add3': 'add', 'g2_add_visual': 'add',
  'g3_add': 'add', 'g3_add_kopf': 'add', 'g4_add': 'add', 'g5_add': 'add',
  // Subtraction topics
  'sub10': 'sub', 'sub20': 'sub', 'sub100': 'sub', 'sub100b': 'sub',
  'sub1000': 'sub', 'sub1000b': 'sub',
  'g1_subpics': 'sub', 'g2_sub_ohne': 'sub', 'g2_sub_mit': 'sub',
  'g2_sub_kopf': 'sub', 'g2_sub_visual': 'sub',
  'g3_sub': 'sub', 'g3_sub_kopf': 'sub', 'g4_sub': 'sub', 'g5_sub': 'sub',
  // Mixed / missing number
  'missing10': 'mixed', 'missing10sub': 'mixed',
  'g1_zahlzerlegung': 'mixed', 'g1_ergaenzen': 'mixed', 'g1_tausch': 'mixed',
  'g2_missing_add': 'mixed', 'g2_seq': 'mixed', 'g2_missing': 'mixed',
  // Multiplication
  'mul2510': 'mul', 'mul2510b': 'mul', 'g2_mul_simple': 'mul', 'g2_mul_rep': 'mul',
  'mul': 'mul', 'g3_mul': 'mul', 'g4_mul': 'mul',
  // Division
  'div2510': 'div', 'g2_div_simple': 'div', 'g3_div': 'div', 'g4_div': 'div',
  // Word problems
  'word': 'word', 'g2_add_word': 'word', 'g2_sub_word': 'word',
  'g2_word_add': 'word', 'g2_word_sub': 'word', 'g2_word_mul': 'word',
  'g3_word': 'word', 'g4_word': 'word',
};

/**
 * Elveszi az összes kiválasztott topic key-ből a legszigorúbb (legkisebb maxNumber) constraintet.
 * Ha nincs egyetlen range-jelző topic sem, null-t ad vissza (nincs constraint).
 */
export function deriveTopicConstraint(topicKeys: string[]): TopicConstraint | null {
  const ranges = topicKeys
    .map(k => TOPIC_NUMBER_RANGE[k])
    .filter((r): r is number => r !== undefined);
  if (ranges.length === 0) return null;
  return { maxNumber: Math.min(...ranges) };
}

// ─── CONSTRAINED GENERATOR FACTORIES ───────────────────────────────────────
// Ezeket akkor használjuk, ha egy topic meghaladja a constraint maxNumber értékét.

function makeConstrainedAddGen(maxN: number): (cc: string) => MathQuestion {
  return (cc: string) => {
    const safeMax = Math.max(maxN, 3);
    const a = randInt(1, safeMax - 1);
    const b = randInt(1, safeMax - a);
    return { question: `${a} + ${b} = ?`, correctAnswer: a + b, options: generateOptionsC(a + b, 0, safeMax + 2), topic: 'addition', isWordProblem: false };
  };
}

function makeConstrainedSubGen(maxN: number): (cc: string) => MathQuestion {
  return (cc: string) => {
    const safeMax = Math.max(maxN, 3);
    const a = randInt(2, safeMax);
    const b = randInt(1, a - 1);
    return { question: `${a} - ${b} = ?`, correctAnswer: a - b, options: generateOptionsC(a - b, 0, safeMax), topic: 'subtraction', isWordProblem: false };
  };
}

function makeConstrainedMixedGen(maxN: number): (cc: string) => MathQuestion {
  return (cc: string) => {
    const safeMax = Math.max(maxN, 3);
    if (Math.random() < 0.5) {
      const a = randInt(1, safeMax - 1);
      const b = randInt(1, safeMax - a);
      return { question: `${a} + ${b} = ?`, correctAnswer: a + b, options: generateOptionsC(a + b, 0, safeMax + 2), topic: 'addition', isWordProblem: false };
    } else {
      const a = randInt(2, safeMax);
      const b = randInt(1, a - 1);
      const missing = randInt(0, 1) === 0;
      if (missing) {
        return { question: `${a} - ? = ${a - b}`, correctAnswer: b, options: generateOptionsC(b, 0, safeMax), topic: 'missingNumber', isWordProblem: false };
      }
      return { question: `${a} - ${b} = ?`, correctAnswer: a - b, options: generateOptionsC(a - b, 0, safeMax), topic: 'subtraction', isWordProblem: false };
    }
  };
}

function makeConstrainedMulGen(maxN: number): (cc: string) => MathQuestion {
  return (cc: string) => {
    const maxFactor = Math.min(10, Math.floor(Math.sqrt(maxN)));
    const a = randInt(1, maxFactor);
    const b = randInt(1, Math.min(10, Math.floor(maxN / a)));
    return { question: `${a} × ${b} = ?`, correctAnswer: a * b, options: generateOptionsC(a * b, 0, maxN + 5), topic: 'multiplication', isWordProblem: false };
  };
}

// Constrained word problem generator — valódi narratív szöveges feladatok maxN-en belül.
// Ezeket akkor használjuk, ha a 'word' topic meghaladja a constraint maxNumber értékét.
// Az import körkörös függőség elkerülése miatt itt lokálisan duplikáljuk a szükséges hívásokat.
function makeConstrainedWordGen(maxN: number): (cc: string) => MathQuestion {
  return (cc: string) => {
    // Kezelt módszerek: addition, subtraction, comparison
    const scenario = randInt(0, 5);
    const a = randInt(2, Math.max(2, Math.floor(maxN * 0.7)));
    const b = scenario < 3
      ? randInt(1, Math.min(maxN - a, Math.max(1, maxN - a)))   // add: a+b ≤ maxN
      : randInt(1, a - 1 > 0 ? a - 1 : 1);                      // sub: a-b ≥ 1
    const answer = scenario < 3 ? a + b : a - b;
    const safeA = Math.max(2, a), safeB = Math.max(1, b);
    // Beépített mini narratívák — nem importálunk, mert az import körre megy
    const lang = getLang(cc);
    const addStories: Record<string, string[]> = {
      DE: [
        `Im Korb liegen ${safeA} Äpfel. Mama legt noch ${safeB} dazu. Wie viele sind es jetzt?`,
        `${safeA} Kinder spielen Fangen. Dann kommen ${safeB} weitere dazu. Wie viele spielen jetzt?`,
        `In der Tasche sind ${safeA} Stifte. ${safeB} kommen noch hinzu. Wie viele Stifte sind es jetzt?`,
      ],
      EN: [
        `There are ${safeA} apples in the basket. Mum adds ${safeB} more. How many are there now?`,
        `${safeA} children are playing tag. ${safeB} more join in. How many are playing now?`,
        `There are ${safeA} pencils in the bag. ${safeB} more are put in. How many pencils are there now?`,
      ],
      RO: [
        `În coș sunt ${safeA} mere. Mama mai pune ${safeB}. Câte sunt acum?`,
        `${safeA} copii se joacă. Vin încă ${safeB}. Câți copii se joacă acum?`,
        `În geantă sunt ${safeA} creioane. Se mai pun ${safeB}. Câte creioane sunt acum?`,
      ],
      HU: [
        `A kosárban ${safeA} alma van. Anyu betesz még ${safeB}-t. Hány alma van most?`,
        `${safeA} gyerek játszik fogócskát. Jön még ${safeB}. Hányan játszanak most?`,
        `A táskában ${safeA} ceruza van. Beletesznek még ${safeB}-t. Hány ceruza van most?`,
      ],
    };
    const subStories: Record<string, string[]> = {
      DE: [
        `Auf dem Teller lagen ${safeA} Kekse. ${safeB} wurden gegessen. Wie viele sind noch da?`,
        `Im Bus saßen ${safeA} Personen. An der Haltestelle stiegen ${safeB} aus. Wie viele sind noch im Bus?`,
        `${safeA} Vögel saßen auf dem Ast. ${safeB} flogen davon. Wie viele sitzen noch dort?`,
      ],
      EN: [
        `There were ${safeA} cookies on the plate. ${safeB} were eaten. How many are left?`,
        `${safeA} people were on the bus. ${safeB} got off. How many are still on the bus?`,
        `${safeA} birds were sitting on the branch. ${safeB} flew away. How many are still there?`,
      ],
      RO: [
        `Pe farfurie erau ${safeA} biscuiți. S-au mâncat ${safeB}. Câți au rămas?`,
        `În autobuz erau ${safeA} persoane. Au coborât ${safeB}. Câte persoane mai sunt?`,
        `${safeA} păsări stăteau pe creangă. ${safeB} au zburat. Câte mai sunt?`,
      ],
      HU: [
        `A tányéron ${safeA} keksz volt. Megettünk ${safeB}-t. Hány maradt?`,
        `A buszon ${safeA} ember ült. ${safeB} leszállt. Hányan maradtak?`,
        `${safeA} madár ült az ágon. ${safeB} elrepült. Hány maradt?`,
      ],
    };
    const stories = scenario < 3 ? addStories : subStories;
    const pool = stories[lang] || stories['HU'];
    const text = pool[randInt(0, pool.length - 1)];
    return { question: text, correctAnswer: answer, options: generateOptionsC(answer, 0, maxN + 3), topic: 'wordProblem', isWordProblem: true };
  };
}

// Helper: generate 4 distinct options centered around `correct` within [minVal, maxVal]
function generateOptionsC(correct: number, minVal: number, maxVal: number): number[] {
  const opts = new Set<number>([correct]);
  const spread = Math.max(2, Math.ceil(Math.abs(correct) * 0.3) + 1);
  let attempts = 0;
  while (opts.size < 4 && attempts < 80) {
    const offset = randInt(1, spread) * (Math.random() > 0.5 ? 1 : -1);
    const wrong = correct + offset;
    if (wrong >= minVal && wrong <= maxVal && wrong !== correct) opts.add(wrong);
    attempts++;
  }
  let fill = 1;
  while (opts.size < 4) {
    if (correct + fill <= maxVal && !opts.has(correct + fill)) opts.add(correct + fill);
    else if (correct - fill >= minVal && !opts.has(correct - fill)) opts.add(correct - fill);
    fill++;
  }
  const arr = [...opts];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Adott topic key-hez és constraint-hez visszaadja a constrained generátorokat.
 * Ha a topic-hoz nincs explicit constrained generator (pl. geometria), null-t ad vissza.
 */
function getConstrainedGenerators(
  topicKey: string,
  constraint: TopicConstraint
): ((cc: string) => MathQuestion)[] | null {
  const opType = TOPIC_OPERATION_TYPE[topicKey];
  if (!opType) return null; // Nem számtani topic (geometria, óra, stb.) → nem constraináljuk

  const maxN = constraint.maxNumber;
  switch (opType) {
    case 'add':
      return [makeConstrainedAddGen(maxN)];
    case 'sub':
      return [makeConstrainedSubGen(maxN)];
    case 'mixed':
      return [makeConstrainedMixedGen(maxN)];
    case 'mul':
      if (maxN < 4) return [makeConstrainedAddGen(maxN)]; // túl kicsi a szorzáshoz
      return [makeConstrainedMulGen(maxN)];
    case 'word':
      return [makeConstrainedWordGen(maxN)];
    default:
      return null;
  }
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

// qd = q with pedagogically meaningful distractors
// Preferred distractors are used first; remainder filled by generateOptions
function qd(question: string, correct: number, topic: string, distractors: number[], isWordProblem = false, minVal = 0): MathQuestion {
  const opts = new Set<number>([correct]);
  for (const d of distractors) { if (d !== correct && d >= minVal && opts.size < 4) opts.add(d); }
  const gen = generateOptions(correct, minVal);
  for (const b of gen) { if (opts.size < 4) opts.add(b); }
  return { question, correctAnswer: correct, options: shuffleArray([...opts]), topic, isWordProblem };
}

function qs(question: string, correctAnswer: string, topic: string, isWordProblem = false): MathQuestion {
  return { question, correctAnswer, options: [], topic, isWordProblem };
}

function qstr(question: string, correctAnswer: string, topic: string, options: string[], isWordProblem = false, visualData?: VisualData): MathQuestion {
  return { question, correctAnswer, options, topic, isWordProblem, hasStringOptions: true, ...(visualData ? { visualData } : {}) };
}

function qvis(question: string, correctAnswer: number, topic: string, visual: VisualData): MathQuestion {
  const opts = generateOptions(correctAnswer, 0);
  return { question, correctAnswer, options: opts, topic, isWordProblem: false, visualData: visual };
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
    // Typical errors: writes the total (a+b), writes the known part (a), off by 1
    return qd(qMissingInEquation(`${a} + ? = ${a + b}`, cc), b, t("missingNumber", cc), [a + b, a, b + 1]);
  },
  missing10sub: (cc) => {
    const a = randInt(4, 10), b = randInt(1, a - 1);
    // Typical errors: writes minuend (a), writes the result (a-b), off by 1
    return qd(qMissingInEquation(`${a} - ? = ${a - b}`, cc), b, t("missingNumber", cc), [a, a - b, b + 1]);
  },
  // G1 szöveges feladatok — nagy pool, sok különböző kontextus és megfogalmazás
  word1: (cc) => {
    // Addition pool: 9 különböző "összeadásos" forgatókönyv
    const ns = getNames(cc), it = getItems(cc);
    return pick([
      () => { const nm = pick(ns.girls), fr = pick(it.fruits), a = randInt(2,7), b = randInt(1,8-a); return q(wpHasFruit(nm,fr,a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.boys), fr = pick(it.fruits), a = randInt(2,6), b = randInt(1,7-a); return q(wpFoundInNature(nm,fr,a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.girls), st = it.sticker, a = randInt(2,5), b = randInt(1,5); return q(wpBirthdayPresents(nm,st,a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const fr = pick(it.fruits), a = randInt(3,6), b = randInt(2,6); return q(wpFilledBag(fr,a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(3,8), b = randInt(2,5); return q(wpKidsJoined(a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.girls), a = randInt(2,6), b = randInt(1,5); return q(wpCoinsInBank(nm,a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.boys), a = randInt(2,6), b = randInt(1,5); return q(wpBuiltTower(nm,a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.girls), a = randInt(2,5), b = randInt(1,5); return q(wpCollectedStickers(nm,a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.boys), a = randInt(3,8), b = randInt(2,6); return q(wpSteps(a,b,cc), a+b, t("wordProblem",cc),0,true); },
    ])();
  },
  word2: (cc) => {
    // Subtraction pool: 8 különböző "kivonásos" forgatókönyv
    const ns = getNames(cc), it = getItems(cc);
    return pick([
      () => { const nm = pick(ns.boys), toy = pick(it.toys), a = randInt(4,10), b = randInt(1,a-1); return q(wpLostItems(nm,toy,a,b,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.girls), sw = pick(it.sweets), a = randInt(5,9), b = randInt(1,a-1); return q(wpAteFromPlate(nm,sw,a,b,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.boys), a = randInt(4,9), b = randInt(1,a-1); return q(wpGavePencils(nm,a,b,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(5,10), b = randInt(1,a-1); return q(wpBirdsOnFence(a,b,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.girls), a = randInt(4,10), b = randInt(1,a-1); return q(wpGifts(nm,a,b,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.boys), a = randInt(5,9), b = randInt(1,a-1); return q(wpUsedPaper(nm,a,b,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(5,10), b = randInt(1,a-1); return q(wpBirds(a,b,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const fr = pick(it.fruits), a = randInt(6,10), b = randInt(1,a-2); return q(wpSoldAtMarket(fr,a,b,cc), a-b, t("wordProblem",cc),0,true); },
    ])();
  },
  word3: (cc) => {
    // Mixed addition pool — különböző tárgyak, helyzetekszínek
    const it = getItems(cc), ns = getNames(cc);
    return pick([
      () => { const a = randInt(3,9), b = randInt(2,8); return q(wpColoredItems(it.red,a,it.blue,b,it.pencil,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(2,8), b = randInt(1,7); return q(wpFlowers(a,it.red,b,it.blue,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.boys), a = randInt(2,6), b = randInt(1,6); return q(wpSchoolSupplies(nm,it.pencil,a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(3,6), b = randInt(2,6); return q(wpMarketBasket(it.fruits[0],a,it.fruits[1],b,cc), a+b, t("wordProblem",cc),0,true); },
    ])();
  },
  word4: (cc) => {
    // Subtraction pool — konkrét tárgyak elfogyasztása, elvesztése
    const it = getItems(cc), ns = getNames(cc);
    return pick([
      () => { const sw = pick(it.sweets), a = randInt(5,9), b = randInt(1,a-2); return q(wpAte(a,b,sw,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const fr = pick(it.fruits), nm = pick(ns.girls), a = randInt(5,9), b = randInt(1,a-1); return q(wpPickedRipeFruit(nm,fr,a,b,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(5,10), b = randInt(1,a-2); return q(wpKidsWentHome(a,b,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const fr = pick(it.fruits), a = randInt(5,9), b = randInt(1,a-2); return q(wpSoldAtMarket(fr,a,b,cc), a-b, t("wordProblem",cc),0,true); },
    ])();
  },
  word5: (cc) => {
    // Transport / movement stories
    const ns = getNames(cc);
    return pick([
      () => { const a = randInt(3,8), b = randInt(2,6); return q(wpBus(a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(4,9), b = randInt(2,5); return q(wpKidsJoined(a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(5,9), b = randInt(1,a-1); return q(wpGotOffBus(a,b,cc), a-b, t("wordProblem",cc),0,true); },
    ])();
  },
  word6: (cc) => {
    // Nature / outdoors stories
    const ns = getNames(cc), it = getItems(cc);
    return pick([
      () => { const a = randInt(5,10), b = randInt(1,a-1); return q(wpBirds(a,b,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(5,9), b = randInt(2,a-1); return q(wpBirdsOnFence(a,b,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.boys), fr = pick(it.fruits), a = randInt(4,9), b = randInt(1,a-2); return q(wpPickedRipeFruit(nm,fr,a,b,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.girls), fr = pick(it.fruits), a = randInt(2,5), b = randInt(1,5); return q(wpFoundInNature(nm,fr,a,b,cc), a+b, t("wordProblem",cc),0,true); },
    ])();
  },
  word7: (cc) => {
    // Possessions — giving / losing / sharing
    const ns = getNames(cc), it = getItems(cc);
    return pick([
      () => { const nm = pick(ns.girls), a = randInt(4,9), b = randInt(1,a-1); return q(wpGifts(nm,a,b,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.boys), toy = pick(it.toys), a = randInt(4,9), b = randInt(1,a-1); return q(wpLostItems(nm,toy,a,b,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.girls), a = randInt(4,9), b = randInt(1,a-1); return q(wpGavePencils(nm,a,b,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const total = randInt(6,10), share = randInt(2,total-2); const nm = pick(ns.boys); return q(wpShared(total,nm,share,cc), total-share, t("wordProblem",cc),0,true); },
    ])();
  },
  word8: (cc) => {
    // Home / family stories — addition
    const ns = getNames(cc), it = getItems(cc);
    return pick([
      () => { const a = randInt(2,8), b = randInt(1,7); return q(wpFlowers(a,it.red,b,it.blue,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.girls), fr = pick(it.fruits), a = randInt(2,5), b = randInt(1,5); return q(wpBirthdayPresents(nm,fr,a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.boys), a = randInt(2,5), b = randInt(1,4); return q(wpCoinsInBank(nm,a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const fr = pick(it.fruits), a = randInt(3,6), b = randInt(2,5); return q(wpFilledBag(fr,a,b,cc), a+b, t("wordProblem",cc),0,true); },
    ])();
  },
  word9: (cc) => {
    // Comparison / missing number stories
    const ns = getNames(cc), it = getItems(cc);
    return pick([
      () => { const nm = pick(ns.boys), total = randInt(6,10), share = randInt(2,total-2); return q(wpShared(total,nm,share,cc), total-share, t("wordProblem",cc),0,true); },
      () => { const nmA = pick(ns.girls), nmB = pick(ns.boys), toy = pick(it.toys), a = randInt(3,8), b = randInt(2,7); return q(wpBookshelf(nmA,a,nmB,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const fr = pick(it.fruits), tot = randInt(6,10), left = randInt(2,tot-2); return q(wpMissingBalls(fr,tot,left,cc), tot-left, t("wordProblem",cc),0,true); },
    ])();
  },
  word10: (cc) => {
    // Mixed final pool — változatos
    const ns = getNames(cc), it = getItems(cc);
    return pick([
      () => { const a = randInt(3,8), b = randInt(2,7); return q(wpSteps(a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.boys), a = randInt(2,6), b = randInt(2,5); return q(wpBuiltTower(nm,a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(3,8), b = randInt(2,6); return q(wpKidsJoined(a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(3,8), b = randInt(1,7); return q(wpColoredItems(it.red,a,it.blue,b,it.sticker,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.girls), st = it.sticker, a = randInt(2,5), b = randInt(2,5); return q(wpCollectedStickers(nm,a,b,cc), a+b, t("wordProblem",cc),0,true); },
    ])();
  },
  evenOdd: (cc) => {
    return Math.random() < 0.5
      // Typical errors: n+1 (next number, wrong parity), n+3 (jumped one too many), n (same number)
      ? (() => { const n = randInt(1, 9) * 2; return qd(qNextEven(n, cc), n + 2, t("evenOdd", cc), [n + 1, n + 3, n]); })()
      : (() => { const n = randInt(0, 8) * 2 + 1; return qd(qNextOdd(n, cc), n + 2, t("evenOdd", cc), [n + 1, n + 3, n]); })();
  },
  clock1: (cc) => {
    const h = randInt(1, 12);
    // Typical errors: ±1 hour (miscounting), opposite side of clock (6 hours off)
    const hPrev = h > 1 ? h - 1 : 12;
    const hNext = h < 12 ? h + 1 : 1;
    const hOpp = h <= 6 ? h + 6 : h - 6;
    return qd(qClockFullHour(h, cc), h, t("clockReading", cc), [hPrev, hNext, hOpp]);
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
    // Typical errors: writes whole number, confuses tens/ones digit, off by 1
    if (r < 0.33) return qd(qG1PlaceValueTens(n, cc), tens, t("g1PlaceValue", cc), [n, ones || tens + 2, tens + 1]);
    if (r < 0.66) return qd(qG1PlaceValueOnes(n, cc), ones, t("g1PlaceValue", cc), [n, tens, ones + 1]);
    return qd(qG1PlaceValueTotal(tens, ones, cc), n, t("g1PlaceValue", cc), [tens, ones, n + 1]);
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
    // Typical errors: missed one smallest coin (-minVal), counted one extra (+1), off by 1
    const minCoinVal = coinTypes.reduce((m, c) => Math.min(m, c.value), 99);
    return qd(qG1Coins(desc, cur, cc), total, t("g1Coins", cc), [total - 1, total + 1, Math.max(1, total - minCoinVal)], false, 1);
  },
  timeline: (cc) => {
    const startH = randInt(7, 16);
    const diff = randInt(1, 4);
    const endH = startH + diff;
    // Typical errors: writes end hour, writes start hour, off by 1
    return qd(qG1Timeline(startH, endH, cc), diff, t("g1Timeline", cc), [endH, startH, diff + 1], false, 1);
  },
  fraction: (cc) => {
    const totalParts = randInt(2, 4);
    const coloredParts = randInt(1, totalParts);
    const shape = pick(["pizza", "rectangle", "circle"]);
    // Typical errors: writes total parts, counts uncolored parts, off by 1
    const uncolored = totalParts - coloredParts;
    const d2 = uncolored > 0 ? uncolored : Math.max(1, coloredParts - 1);
    const d3 = coloredParts < totalParts ? coloredParts + 1 : Math.max(1, coloredParts - 1);
    return qd(qG1Fraction(totalParts, coloredParts, shape, cc), coloredParts, t("g1Fraction", cc), [totalParts, d2, d3], false, 1);
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
    const correct = total - part1;
    // Typical errors: writes the given part (part1), writes total, off by 1
    return qd(qZahlzerlegung(total, part1, cc), correct, t("g1Zahlzerlegung", cc), [part1, total, correct + 1]);
  },
  verdoppeln: (cc) => {
    const n = randInt(1, 9);
    // Typical error: writes n (didn't double), ±1 (miscounting)
    return qd(qVerdoppeln(n, cc), n * 2, t("g1Verdoppeln", cc), [n, n * 2 - 1, n * 2 + 1]);
  },
  halbieren: (cc) => {
    const n = randInt(1, 9) * 2;
    // Typical error: writes n (didn't halve), ±1 (miscounting)
    return qd(qHalbieren(n, cc), n / 2, t("g1Halbieren", cc), [n, Math.max(1, n / 2 - 1), n / 2 + 1]);
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
    const i = randInt(0, 6);
    const { question, answer } = qG1Wochentage(i, cc);
    return qs(question, answer, t("g1Wochentage", cc));
  },
  placeValue20: (cc) => {
    const n = randInt(11, 20);
    const tens = Math.floor(n / 10), ones = n % 10;
    const r = Math.random();
    if (r < 0.33) return qd(qG1PlaceValueTens(n, cc), tens, t("g1PlaceValue20", cc), [n, ones || tens + 2, tens + 1]);
    if (r < 0.66) return qd(qG1PlaceValueOnes(n, cc), ones, t("g1PlaceValue20", cc), [n, tens, ones + 1]);
    return qd(qG1PlaceValueTotal(tens, ones, cc), n, t("g1PlaceValue20", cc), [tens, ones, n + 1]);
  },
  // ── NEW G1 generators ──
  spatial: (cc) => {
    const pairs: [string, string][] = [
      ["oben", "unten"], ["unten", "oben"],
      ["links", "rechts"], ["rechts", "links"],
      ["vorne", "hinten"], ["hinten", "vorne"],
    ];
    const [dir, opposite] = pick(pairs);
    const lang = getLang(cc);
    const oppNames: Record<string, Record<string, string>> = {
      HU: { oben:"lent", unten:"fent", links:"jobbra", rechts:"balra", vorne:"mögött", hinten:"előtt" },
      DE: { oben:"unten", unten:"oben", links:"rechts", rechts:"links", vorne:"hinten", hinten:"vorne" },
      EN: { oben:"below", unten:"above", links:"right", rechts:"left", vorne:"behind", hinten:"in front" },
      RO: { oben:"dedesubt", unten:"deasupra", links:"dreapta", rechts:"stânga", vorne:"în spate", hinten:"în față" },
    };
    const answer = oppNames[lang]?.[dir] || opposite;
    return qs(qG1Spatial(dir, opposite, cc), answer, t("g1Spatial", cc));
  },
  weight: (cc) => {
    const a = randInt(1, 12), b = a + randInt(1, 8);
    const v = Math.floor(Math.random() * 3);
    if (v === 1) return q(qG1WeightB(a, b, cc), a, t("g1Weight", cc));
    if (v === 2) return q(qG1WeightC(a, b, cc), b, t("g1Weight", cc));
    return q(qG1Weight(a, b, cc), b, t("g1Weight", cc));
  },
  volume: (cc) => {
    return pick([
      () => { const a = randInt(1, 8), b = a + randInt(1, 5); return q(qG1Volume(a, b, cc), b, t("g1Volume", cc)); },
      () => { const a = randInt(1, 8), b = a + randInt(1, 5); return q(qG1VolumeB(a, b, cc), a, t("g1Volume", cc)); },
      () => { const a = randInt(1, 8), b = a + randInt(1, 5); return q(qG1VolumeC(a, b, cc), b, t("g1Volume", cc)); },
      () => { const g = randInt(1, 5), bt = g + randInt(1, 6); return q(qG1VolumeD(g, bt, cc), bt, t("g1Volume", cc)); },
      () => { const cn = randInt(2, 6), bk = cn + randInt(1, 5); return q(qG1VolumeE(cn, bk, cc), cn, t("g1Volume", cc)); },
      () => {
        const fits = Math.random() < 0.5;
        const avail = randInt(4, 12);
        const needed = fits ? randInt(2, avail) : avail + randInt(1, 4);
        const lang = getLang(cc);
        const yes = lang === "DE" ? "Ja" : lang === "EN" ? "Yes" : lang === "RO" ? "Da" : "Igen";
        const no  = lang === "DE" ? "Nein" : lang === "EN" ? "No" : lang === "RO" ? "Nu" : "Nem";
        const ans = fits ? yes : no;
        return qstr(qG1VolumeFits(avail, needed, cc), ans, t("g1Volume", cc), [yes, no]);
      },
      () => { const cap = randInt(5, 12), cur = randInt(1, cap - 1); return q(qG1VolumeFillUp(cap, cur, cc), cap - cur, t("g1Volume", cc)); },
      () => { const pool = randInt(6, 15), tub = randInt(3, pool - 1); return q(qG1VolumePool(pool, tub, cc), pool, t("g1Volume", cc)); },
    ])();
  },
  pattern: (cc) => {
    const allPairs = [["🔴","🔵"],["⭐","🌙"],["🟦","🟨"],["🔺","⭕"],["🌸","🍀"],["🐱","🐶"]];
    const pairIdx = Math.floor(Math.random() * allPairs.length);
    const pair = allPairs[pairIdx];
    // Show 4 elements (2 pairs), ask for the 5th
    const seq = [pair[0], pair[1], pair[0], pair[1]];
    const next = pair[0]; // 5th element = first of pair
    // Build 4 options: correct + 3 distractors from other pairs
    const otherEmojis = allPairs.filter((_, i) => i !== pairIdx).flatMap(p => p);
    const distractors = [pair[1], otherEmojis[0], otherEmojis[2]];
    const options = [next, ...distractors].sort(() => Math.random() - 0.5);
    return qstr(qG1Pattern(seq, cc), next, t("g1Pattern", cc), options);
  },
  numberOrder: (cc) => {
    const nums = [randInt(1, 15), randInt(1, 15), randInt(1, 15)];
    // Ensure all different
    while (nums[0] === nums[1]) nums[1] = randInt(1, 15);
    while (nums[2] === nums[0] || nums[2] === nums[1]) nums[2] = randInt(1, 15);
    const sorted = [...nums].sort((a, b) => a - b);
    return qs(qG1NumberOrder(nums, cc), sorted.join(","), t("g1NumberOrder", cc));
  },
  dataTable: (cc) => {
    const lang = getLang(cc);
    const colorA = lang === "DE" ? "rote" : lang === "HU" ? "piros" : lang === "RO" ? "roșii" : "red";
    const colorB = lang === "DE" ? "blaue" : lang === "HU" ? "kék" : lang === "RO" ? "albastre" : "blue";
    const itemName = lang === "DE" ? "Murmeln" : lang === "HU" ? "golyó" : lang === "RO" ? "bile" : "marbles";
    const a = randInt(2, 8), b = randInt(1, 6);
    return q(qG1DataTable(a, b, `${colorA} ${itemName}`, `${colorB} ${itemName}`, cc), a + b, t("g1DataTable", cc));
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
    // G2 addition pool — 1-100 számokon belül
    const ns = getNames(cc), it = getItems(cc);
    return pick([
      () => { const a = randInt(20,50), b = randInt(10,40); return q(wpSchool(a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(20,55), b = randInt(10,40); return q(wpClassroomTable(a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(25,50), b = randInt(10,40); return q(wpSwimmingPool(a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(15,40), b = randInt(10,35); return q(wpSportsDay(pick(ns.girls),a,pick(ns.boys),b,cc), a+b, t("wordProblem",cc),0,true); },
    ])();
  },
  word2: (cc) => {
    // G2 subtraction / money pool
    const ns = getNames(cc), it = getItems(cc), cur = getCurrency(cc);
    return pick([
      () => { const nm = pick(ns.girls), a = randInt(30,80), b = randInt(10,a-5); return q(wpBought(nm,it.eraser,a,b,cur,cc), a-b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.boys), has = randInt(20,60), needs = has + randInt(10,30); return q(wpSavingsGoal(nm,has,needs,cc), needs-has, t("wordProblem",cc),0,true); },
      () => { const total = randInt(30,80), gone = randInt(5,total-5); return q(wpSchoolTrip(total,gone,cc), total-gone, t("wordProblem",cc),0,true); },
      () => { const baked = randInt(40,80), sold = randInt(10,baked-10); return q(wpBakery(it.sweets[0],baked,sold,cc), baked-sold, t("wordProblem",cc),0,true); },
    ])();
  },
  word3: (cc) => {
    // G2 multiplication pool
    const it = getItems(cc), ns = getNames(cc);
    return pick([
      () => { const a = randInt(2,5), b = pick([2,5,10]); return q(wpEachGets(a,b,pick(it.sweets),cc), a*b, t("wordProblem",cc),0,true); },
      () => { const r = randInt(3,6), p = pick([2,5,10]); return q(wpGardenFlowers(r,p,cc), r*p, t("wordProblem",cc),0,true); },
    ])();
  },
  word4: (cc) => {
    // G2 comparison / difference pool
    const ns = getNames(cc), it = getItems(cc);
    return pick([
      () => { const a = randInt(2,5)*10, b = randInt(2,4)*10; return q(wpCollectionDiff(pick(ns.boys),a,pick(ns.girls),b,it.sticker,cc), Math.abs(a-b), t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.boys), borrowed = randInt(4,8), returned = randInt(1,borrowed-1); return q(wpLibraryReturn(nm,borrowed,returned,cc), borrowed-returned, t("wordProblem",cc),0,true); },
      () => { const nmA = pick(ns.girls), nmB = pick(ns.boys), a = randInt(20,50), b = randInt(10,45); return q(wpCompareToys(nmA,a,nmB,b,it.sticker,cc), Math.abs(a-b), t("wordProblem",cc),0,true); },
    ])();
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
  // ── Number system (new G2) ──
  vorgaenger2: (cc) => {
    const n = randInt(2, 99);
    return q(qVorgaenger(n, cc), n - 1, t("g1Vorgaenger", cc));
  },
  nachfolger2: (cc) => {
    const n = randInt(1, 98);
    return q(qNachfolger(n, cc), n + 1, t("g1Vorgaenger", cc));
  },
  nachbarzahlen: (cc) => pick([
    () => { const n = randInt(2, 98); return q(qVorgaenger(n, cc), n - 1, t("neighborNumber", cc)); },
    () => { const n = randInt(2, 98); return q(qNachfolger(n, cc), n + 1, t("neighborNumber", cc)); },
  ])(),
  stellenwert2: (cc) => pick([
    () => { const n = randInt(11, 99); return q(qHowManyZehner(n, cc), Math.floor(n / 10), t("stellenwert2", cc)); },
    () => { const n = randInt(11, 99); return q(qHowManyEiner(n, cc), n % 10, t("stellenwert2", cc)); },
  ])(),
  zahlzerlegung2: (cc) => {
    const tens = randInt(1, 9) * 10;
    const ones = randInt(1, 9);
    const n = tens + ones;
    return pick([
      () => q(qZahlzerlegungA(n, tens, ones, cc), ones, t("zahlzerlegung2", cc)),
      () => q(qZahlzerlegungB(n, tens, ones, cc), tens, t("zahlzerlegung2", cc)),
    ])();
  },
  // ── Addition variants ──
  addOhne: (cc) => {
    // ohne Zehnerübergang: ones(a) + ones(b) <= 9
    const aOnes = randInt(0, 8);
    const bOnes = randInt(0, 9 - aOnes);
    const aTens = randInt(1, 7) * 10;
    const bTens = randInt(1, Math.floor((90 - aTens) / 10)) * 10;
    const a = aTens + aOnes, b = bTens + bOnes;
    return q(`${a} + ${b} = ?`, a + b, t("addNoCarry", cc));
  },
  addMit: (cc) => {
    // mit Zehnerübergang: ones(a) + ones(b) >= 10
    const aOnes = randInt(2, 9);
    const bOnes = randInt(10 - aOnes, 9);
    const aTens = randInt(1, 6) * 10;
    const bTens = randInt(1, Math.floor((80 - aTens) / 10)) * 10;
    const a = aTens + aOnes, b = bTens + bOnes;
    return q(`${a} + ${b} = ?`, a + b, t("addCarry", cc));
  },
  add3nums: (cc) => {
    const a = randInt(5, 30), b = randInt(5, 25), c = randInt(2, 15);
    return q(`${a} + ${b} + ${c} = ?`, a + b + c, t("add3nums", cc));
  },
  wordAddG2: (cc) => {
    const names = getNames(cc); const items = getItems(cc);
    const a = randInt(20, 55), b = randInt(10, 40);
    return pick([
      () => q(wpSchool(a, b, cc), a + b, t("wordProblem", cc), 0, true),
      () => q(wpHasFruit(pick(names.boys), pick(items.fruits), a, b, cc), a + b, t("wordProblem", cc), 0, true),
    ])();
  },
  // ── Subtraction variants ──
  subOhne: (cc) => {
    // ohne Zehnerübergang: ones(a) >= ones(b)
    const bOnes = randInt(0, 7);
    const aOnes = randInt(bOnes, 9);
    const bTens = randInt(1, 6) * 10;
    const aTens = randInt(bTens / 10 + 1, 9) * 10;
    const a = aTens + aOnes, b = bTens + bOnes;
    return q(`${a} - ${b} = ?`, a - b, t("subNoCarry", cc));
  },
  subMit: (cc) => {
    // mit Zehnerübergang: ones(a) < ones(b)
    const aOnes = randInt(0, 7);
    const bOnes = randInt(aOnes + 1, 9);
    const bTens = randInt(1, 5) * 10;
    const aTens = randInt(bTens / 10 + 1, 9) * 10;
    const a = aTens + aOnes, b = bTens + bOnes;
    return q(`${a} - ${b} = ?`, a - b, t("subCarry", cc));
  },
  wordSubG2: (cc) => {
    const names = getNames(cc); const items = getItems(cc);
    const b = randInt(5, 30), a = randInt(b + 10, b + 50);
    return pick([
      () => q(wpLostItems(pick(names.boys), pick(items.sweets), a, b, cc), a - b, t("wordProblem", cc), 0, true),
      () => q(wpBought(pick(names.girls), items.eraser, a, b, getCurrency(cc), cc), a - b, t("wordProblem", cc), 0, true),
    ])();
  },
  // ── Multiplication ──
  mulRepeated: (cc) => {
    const groups = randInt(2, 10), each = pick([2, 5, 10]);
    return q(qMulAsAddition(groups, each, cc), each, t("mulRepeated", cc));
  },
  mulGroup: (cc) => {
    const groups = randInt(2, 10), each = pick([2, 5, 10]);
    return q(wpGroupsOf(groups, each, cc), groups * each, t("mulGroup", cc), 0, true);
  },
  wordMulG2: (cc) => {
    const items = getItems(cc);
    const a = randInt(2, 5), b = pick([2, 5, 10]);
    return q(wpEachGets(a, b, pick(items.sweets), cc), a * b, t("wordProblem", cc), 0, true);
  },
  // ── Division ──
  divShare: (cc) => {
    const divisor = pick([2, 5, 10]), result = randInt(1, 10);
    const items = getItems(cc);
    return q(wpShare(divisor * result, divisor, result, pick(items.fruits), cc), result, t("divShare", cc), 0, true);
  },
  divMulRel: (cc) => {
    const a = pick([2, 5, 10]), b = randInt(2, 10);
    return q(qDivMulRelation(a, b, cc), b, t("divMulRel", cc));
  },
  wordDivG2: (cc) => {
    const items = getItems(cc);
    const divisor = pick([2, 5, 10]), result = randInt(2, 8);
    return q(wpShare(divisor * result, divisor, result, pick(items.fruits), cc), result, t("wordProblem", cc), 0, true);
  },
  // ── Measurement ──
  weightGKg: (cc) => pick([
    () => q(qHowManyGInKg(cc), 1000, t("weightGKg", cc)),
    () => { const kg = randInt(2, 5); return q(qKgToG(kg, cc), kg * 1000, t("weightGKg", cc)); },
  ])(),
  moneyEuroCent: (cc) => pick([
    () => q(qHowManyCentInEuro(cc), 100, t("moneyEuroCent", cc)),
    () => { const e = randInt(2, 5); return q(qEuroToCent(e, cc), e * 100, t("moneyEuroCent", cc)); },
  ])(),
  wordMoneyG2: (cc) => {
    const names = getNames(cc); const items = getItems(cc); const cur = getCurrency(cc);
    const price = randInt(10, 50), paid = price + randInt(10, 40);
    return q(wpBought(pick(names.boys), pick(items.sweets), paid, price, cur, cc), paid - price, t("wordProblem", cc), 0, true);
  },
  wordTimeG2: (cc) => {
    const start = randInt(7, 10), duration = randInt(1, 3);
    return q(wpSchoolDay(start, duration, cc), start + duration, t("wordProblem", cc), 0, true);
  },
  // ── Geometry ──
  shapeBasic: (cc) => {
    const shapes = getShapeNamesG2(cc);
    const shapeData = [
      { name: shapes.square, corners: 4 },
      { name: shapes.rectangle, corners: 4 },
      { name: shapes.triangle, corners: 3 },
      { name: shapes.circle, corners: 0 },
    ];
    const s = pick(shapeData);
    return q(qShapeCorners(s.name, cc), s.corners, t("shapeBasic", cc));
  },
  perimeterSimple: (cc) => pick([
    () => { const a = randInt(2, 10); return q(qSquarePerimeter(a, cc), 4 * a, t("perimeterBasic", cc)); },
    () => { const a = randInt(3, 8), b = randInt(2, 6); return q(qRectPerimeter(a, b, cc), 2 * (a + b), t("perimeterBasic", cc)); },
  ])(),
  // ── NEW G2: Number comparison with sign ──
  compare100: (cc) => {
    const a = randInt(10, 89), diff = randInt(1, 20);
    const b = a + diff;
    // Mostly <, >, occasionally = (same number both sides)
    const useEqual = Math.random() < 0.15;
    if (useEqual) {
      const n = randInt(11, 99);
      return qstr(qFillInSign(n, n, cc), "=", t("compare100", cc), ["<", ">", "="]);
    }
    return Math.random() > 0.5
      ? qstr(qFillInSign(a, b, cc), "<", t("compare100", cc), ["<", ">", "="])
      : qstr(qFillInSign(b, a, cc), ">", t("compare100", cc), ["<", ">", "="]);
  },
  // ── NEW G2: Compose number from tens + ones ──
  composeNumber: (cc) => {
    const tens = randInt(1, 9), ones = randInt(1, 9);
    return q(qComposeFromParts(tens, ones, cc), tens * 10 + ones, t("composeNumber", cc));
  },
  // ── NEW G2: Visual emoji counting — addition (SVG) ──
  countAdd: (cc) => {
    const emoji = "●";
    const a = randInt(2, 6), b = randInt(1, 5);
    return qvis(qCountAdd(a, emoji, b, cc), a + b, t("countObjects", cc),
      { type: "object-add", emoji, groupA: a, groupB: b });
  },
  // ── NEW G2: Visual emoji counting — subtraction (SVG) ──
  countSub: (cc) => {
    const emoji = "●";
    const total = randInt(5, 12), removed = randInt(2, Math.min(5, total - 1));
    return qvis(qCountSub(total, emoji, removed, cc), total - removed, t("countObjects", cc),
      { type: "object-sub", emoji, total, removed });
  },
  // ── NEW G2: Visual multiplication (rows × columns, SVG) ──
  mulVisual: (cc) => {
    const emoji = "●";
    const rows = randInt(2, 5), each = pick([2, 3, 4, 5]);
    return qvis(qMulRows(rows, each, emoji, cc), rows * each, t("mulVisual", cc),
      { type: "object-array", emoji, rows, cols: each });
  },
  // ── NEW G2: Visual division (equal sharing, SVG) ──
  divVisual: (cc) => {
    const emoji = "●";
    const divisor = pick([2, 3, 4, 5]), result = randInt(2, 5);
    const total = divisor * result;
    return qvis(wpVisualShare(total, emoji, divisor, cc), result, t("divShare", cc),
      { type: "object-share", emoji, total, groups: divisor });
  },
  // ── NEW G2: Shape/color pattern continuation (SVG) ──
  patternG2: (cc) => {
    type PatternEntry = { shapes: string[]; next: string; wrong1: string; wrong2: string };
    const patterns: PatternEntry[] = [
      { shapes: ["sq-blue","cir-green","sq-blue","cir-green","sq-blue"], next: "cir-green", wrong1: "sq-green", wrong2: "cir-blue" },
      { shapes: ["cir-red","cir-blue","cir-red","cir-blue","cir-red"], next: "cir-blue", wrong1: "cir-red", wrong2: "sq-blue" },
      { shapes: ["sq-yellow","sq-red","sq-yellow","sq-red","sq-yellow"], next: "sq-red", wrong1: "sq-yellow", wrong2: "cir-red" },
      { shapes: ["tri-blue","tri-green","tri-blue","tri-green","tri-blue"], next: "tri-green", wrong1: "tri-blue", wrong2: "cir-green" },
      { shapes: ["cir-purple","sq-blue","cir-purple","sq-blue","cir-purple"], next: "sq-blue", wrong1: "cir-blue", wrong2: "sq-purple" },
      { shapes: ["sq-blue","sq-blue","cir-green","sq-blue","sq-blue","cir-green","sq-blue","sq-blue"], next: "cir-green", wrong1: "sq-blue", wrong2: "tri-green" },
      { shapes: ["tri-red","sq-yellow","tri-red","sq-yellow","tri-red"], next: "sq-yellow", wrong1: "tri-yellow", wrong2: "sq-red" },
      { shapes: ["cir-blue","tri-blue","cir-blue","tri-blue","cir-blue"], next: "tri-blue", wrong1: "cir-blue", wrong2: "sq-blue" },
    ];
    const p = pick(patterns);
    return qstr(qShapePatternQuestion(cc), p.next, t("patternContinue", cc), [p.next, p.wrong1, p.wrong2],
      false, { type: "shape-pattern", shapes: [...p.shapes, "?"] });
  },
  // ── NEW G2: Number line (Zahlenstrahl) with larger steps ──
  numberLineG2: (cc) => {
    const step = pick([5, 10, 20]);
    const maxStart = Math.floor((100 - 4 * step) / step) * step;
    const start = randInt(0, Math.max(0, maxStart / step)) * step;
    const count = 4;
    const seq = Array.from({ length: count }, (_, i) => start + i * step);
    return q(qNextInSequence(seq.join(" → "), cc), start + count * step, t("numberLine2", cc));
  },
  // ── NEW G2: Simple bar chart reading ──
  chartG2: (cc) => {
    const items = getItems(cc);
    const fruits = items.fruits;
    const nameA = pick(fruits), nameB = pick(fruits.filter(f => f !== nameA) as string[]);
    const countA = randInt(4, 9), countB = randInt(1, countA - 1);
    return q(qChartMore(nameA, countA, nameB, countB, cc), countA, t("chartReading", cc));
  },
  // ── NEW G2: Missing addend (fill-in-the-blank addition) ──
  missingAddend: (cc) => {
    const a = pick([10, 20, 30, 40, 50]);
    const b = randInt(5, 30);
    return q(qMissingInEquation(`${a} + ? = ${a + b}`, cc), b, t("missingNumber", cc));
  },
  // ── NEW G2: Number line — find the missing number in the middle ──
  numberLinePlace: (cc) => {
    const step = pick([2, 5, 10]);
    const start = randInt(0, 5) * step;
    const hiddenPos = pick([1, 2, 3]); // hide a middle position (not first/last)
    const values = [0, 1, 2, 3, 4].map(i => start + i * step);
    const seq = values.map((v, i) => (i === hiddenPos ? "?" : `${v}`));
    const answer = values[hiddenPos];
    return q(qMissingInEquation(seq.join(" – "), cc), answer, t("numberLine2", cc));
  },
  // ── G2: Halving (Halbieren) ──
  halving: (cc) => {
    const n = randInt(1, 25) * 2; // even numbers 2–50
    return q(qHalbieren(n, cc), n / 2, t("g1Halbieren", cc));
  },
  // ── G2: Doubling (Verdoppeln) ──
  doubling: (cc) => {
    const n = randInt(2, 49);
    return q(qVerdoppeln(n, cc), n * 2, t("g1Verdoppeln", cc));
  },
  // ── G2: Missing subtrahend (a − ? = b) ──
  missingSubtrahend: (cc) => {
    const b = randInt(5, 40), diff = randInt(5, 35);
    const a = b + diff;
    return q(qMissingInEquation(`${a} − ? = ${b}`, cc), diff, t("missingNumber", cc));
  },
  // ── G2: Times tables ×3 and ×4 ──
  mulTable34: (cc) => {
    const m = pick([3, 4]), b = randInt(1, 10);
    return pick([
      () => q(`${m} × ${b} = ?`, m * b, t("multiplication", cc)),
      () => q(`${b} × ${m} = ?`, m * b, t("multiplication", cc)),
    ])();
  },
  // ── G2: Missing multiplication factor (? × m = product) ──
  missingMulFactor: (cc) => {
    const m = pick([2, 5, 10]), result = randInt(1, 10);
    const product = m * result;
    return pick([
      () => q(qMissingInEquation(`? × ${m} = ${product}`, cc), result, t("missingNumber", cc)),
      () => q(qMissingInEquation(`${m} × ? = ${product}`, cc), result, t("missingNumber", cc)),
    ])();
  },
  // ── G2: Order numbers smallest to largest (up to 99) ──
  numberOrderG2: (cc) => {
    const nums = [randInt(10, 90), randInt(10, 90), randInt(10, 90)];
    while (nums[0] === nums[1]) nums[1] = randInt(10, 90);
    while (nums[2] === nums[0] || nums[2] === nums[1]) nums[2] = randInt(10, 90);
    const sorted = [...nums].sort((a, b) => a - b);
    return qs(qG1NumberOrder(nums, cc), sorted.join(","), t("g1NumberOrder", cc));
  },
  // ── G2: Length unit conversions (cm ↔ m only) ──
  lengthConvert: (cc) => pick([
    () => q(qHowManyCmInM(cc), 100, t("units", cc)),
    () => { const m = randInt(2, 5); return q(qMetersInCm(m, cc), m * 100, t("units", cc)); },
    () => { const cm = pick([200, 300, 400]); const lang = getLang(cc); const texts: Record<string, string> = { DE: `${cm} cm = ? m`, EN: `${cm} cm = ? m`, HU: `${cm} cm = ? m`, RO: `${cm} cm = ? m` }; return q(texts[lang] || texts.DE, cm / 100, t("units", cc)); },
  ])(),
  // ── G2: Length in cm (addition context) ──
  lengthMeasure: (cc) => {
    const lang = getLang(cc);
    const a = randInt(5, 40), b = randInt(5, 30);
    const item1 = lang === "DE" ? "Bleistift" : lang === "HU" ? "ceruza" : lang === "RO" ? "creion" : "pencil";
    const item2 = lang === "DE" ? "Lineal" : lang === "HU" ? "vonalzó" : lang === "RO" ? "riglă" : "ruler";
    const question = lang === "DE"
      ? `Ein ${item1} ist ${a} cm lang, ein ${item2} ist ${b} cm. Wie lang sind beide zusammen?`
      : lang === "HU"
      ? `Egy ${item1} ${a} cm, egy ${item2} ${b} cm. Mennyi a kettő együtt?`
      : lang === "RO"
      ? `Un ${item1} are ${a} cm, o ${item2} are ${b} cm. Cât fac împreună?`
      : `A ${item1} is ${a} cm long, a ${item2} is ${b} cm. How long are they together?`;
    return q(question, a + b, t("units", cc), 0, true);
  },
  // ── G2: Place value — how many tens and ones ──
  placeValueG2: (cc) => pick([
    () => { const n = randInt(11, 99); return q(qHowManyZehner(n, cc), Math.floor(n / 10), t("stellenwert2", cc)); },
    () => { const n = randInt(11, 99); return q(qHowManyEiner(n, cc), n % 10, t("stellenwert2", cc)); },
    () => { const tens = randInt(1,9), ones = randInt(1,9); const n = tens*10+ones; return q(qZahlzerlegungA(n, tens*10, ones, cc), ones, t("zahlzerlegung2", cc)); },
    () => { const tens = randInt(1,9), ones = randInt(1,9); const n = tens*10+ones; return q(qZahlzerlegungB(n, tens*10, ones, cc), tens*10, t("zahlzerlegung2", cc)); },
  ])(),
  // ── G2: Neighbor numbers (predecessor + successor) ──
  neighborG2: (cc) => {
    const n = randInt(10, 89);
    return pick([
      () => q(qVorgaenger(n, cc), n - 1, t("neighborNumber", cc)),
      () => q(qNachfolger(n, cc), n + 1, t("neighborNumber", cc)),
    ])();
  },
  // ── G2: Money — change calculation ──
  moneyChangeG2: (cc) => {
    const items = getItems(cc); const cur = getCurrency(cc);
    const price = pick([10, 15, 20, 25, 30, 35, 40, 45]);
    const paid = price <= 45 ? 50 : 100;
    return q(qChangeBack(pick(items.sweets), price, paid, cur, cc), paid - price, t("wordProblem", cc), 0, true);
  },
  // ── G2: Simple clock reading — digital → what time is it ──
  clockSimpleG2: (cc) => {
    if (cc === "US") {
      const h = randInt(7, 11), addH = randInt(1, 4);
      return q(qAmPmAddHours(h, addH, true, cc), h + addH <= 12 ? h + addH : h + addH - 12, t("ampmTime", cc), 0, true);
    }
    return pick([
      () => { const h = randInt(1, 12); return q(qClockFullHour(h, cc), h, t("clockReading", cc)); },
      () => { const h = randInt(1, 11); return q(qClockHalfPast(h, cc), 30, t("clockReading", cc)); },
      () => { const h = randInt(1, 11); return q(qClockQuarterPast(h, cc), 15, t("clockReading", cc)); },
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
      () => { const a = randInt(2, 9), b = randInt(2, 9); return q(qMissingInEquation(`? × ${b} = ${a * b}`, cc), a, t("missingNumber", cc)); },
      () => { const step = pick([3, 4, 6, 9]); const start = step * randInt(1, 4); const seq = [start, start + step, start + 2 * step, start + 3 * step]; return q(qNextInSequence(seq.join(' → '), cc), start + 4 * step, t("numberSequence", cc)); },
    ])();
    return pick([
      () => { const startH = randInt(7, 10), endH = randInt(1, 3); return q(qAmPmElapsed(startH, endH, cc), 12 - startH + endH, t("ampmTime", cc), 0, true); },
      () => { const startH = randInt(8, 11), addH = randInt(2, 4); return q(qAmPmAddHours(startH, addH, true, cc), startH + addH <= 12 ? startH + addH : startH + addH - 12, t("ampmTime", cc), 0, true); },
      () => { const startH = randInt(1, 5), durH = randInt(1, 3); return q(qAmPmActivityEnd(startH, durH, cc), startH + durH, t("ampmTime", cc), 0, true); },
      () => { const startH = randInt(9, 11), endH = randInt(1, 4); return q(qAmPmElapsed(startH, endH, cc), 12 - startH + endH, t("ampmTime", cc), 0, true); },
    ])();
  },
  // G3 szöteges feladatok — nagy pick-pool, 100-999 számkörben
  word1: (cc) => {
    const it = getItems(cc), ns = getNames(cc);
    return pick([
      () => { const a = randInt(120,400), b = randInt(100,300); return q(wpFruitTotal(a,pick(it.fruits),b,pick(it.fruits),cc), a+b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(120,350), b = randInt(80,250); return q(wpBikeTrip(a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const r = randInt(4,8), p = randInt(30,80); return q(wpOrchardRows(r,p,pick(it.fruits),cc), r*p, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.boys), a = randInt(150,400), b = randInt(80,300); return q(wpBooksOrdered(nm,a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const cities = [["Pécs","Győr"],["Berlin","München"],["Cluj","Brașov"],["London","Bristol"]]; const [cA,cB] = pick(cities); const a = randInt(120,350), b = randInt(80,250); return q(wpCityTrip(cA,cB,a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(200,600), b = randInt(100,400); const nm = pick([...ns.girls,...ns.boys]); return q(wpEventOrganizer(nm,a,b,cc), a+b, t("wordProblem",cc),0,true); },
    ])();
  },
  word2: (cc) => {
    const it = getItems(cc);
    return pick([
      () => { const a = randInt(3,7), b = randInt(3,8); return q(wpShelfRows(a,b,it.book,cc), a*b, t("wordProblem",cc),0,true); },
      () => { const loads = randInt(4,8), perLoad = randInt(30,80); return q(wpTruckDelivery(loads,perLoad,it.fruits[0],cc), loads*perLoad, t("wordProblem",cc),0,true); },
      () => { const days = randInt(4,6), perDay = randInt(50,120); return q(wpFactoryProduction(days,perDay,cc), days*perDay, t("wordProblem",cc),0,true); },
      () => { const boxes = randInt(3,6), perBox = randInt(30,80); return q(wpBoxesInWarehouse(boxes,perBox,it.fruits[0],cc), boxes*perBox, t("wordProblem",cc),0,true); },
      () => { const students = randInt(20,50), price = randInt(3,8); return q(wpSchoolCafe(students,price,cc), students*price, t("wordProblem",cc),0,true); },
    ])();
  },
  word3: (cc) => {
    const it = getItems(cc), ns = getNames(cc);
    return pick([
      () => { const d = pick([2,3,4,6]), r = randInt(3,8); return q(wpShare(d*r,d,r,it.candy,cc), r, t("wordProblem",cc),0,true); },
      () => { const total = randInt(100,300), given = randInt(50,total-20); return q(wpWarehouseStock(total,0,given,cc), total-given, t("wordProblem",cc),0,true); },
      () => { const nmA = pick(ns.girls), a = randInt(150,450), nmB = pick(ns.boys), b = randInt(100,400); return q(wpStampCollection(nmA,a,nmB,b,cc), Math.abs(a-b), t("wordProblem",cc),0,true); },
      () => { const students = randInt(80,200), days = 5, price = randInt(3,6); return q(wpSchoolMeal(students,days,price,cc), students*days*price, t("wordProblem",cc),0,true); },
    ])();
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
  // ── New G3 generators (12-category redesign) ──────────────────────────
  compare1000: (cc) => {
    const a = randInt(100, 998), b = randInt(a + 1, Math.min(a + 300, 999));
    return q(qCompare(a, b, cc), b, t("comparison", cc));
  },
  pred1000: (cc) => {
    const n = randInt(101, 999);
    const lang = getLang(cc);
    const texts: Record<string, string> = { DE: `Vorgänger von ${n}?`, EN: `Predecessor of ${n}?`, HU: `${n} elő szomszédja?`, RO: `Predecesorul lui ${n}?` };
    return q(texts[lang] || texts.DE, n - 1, t("neighborNumber", cc));
  },
  succ1000: (cc) => {
    const n = randInt(100, 998);
    const lang = getLang(cc);
    const texts: Record<string, string> = { DE: `Nachfolger von ${n}?`, EN: `Successor of ${n}?`, HU: `${n} utó szomszédja?`, RO: `Succesorul lui ${n}?` };
    return q(texts[lang] || texts.DE, n + 1, t("neighborNumber", cc));
  },
  decompose: (cc) => {
    const h = randInt(1, 9), z = randInt(0, 9), e = randInt(0, 9);
    const n = h * 100 + z * 10 + e;
    const lang = getLang(cc);
    const texts: Record<string, string> = { DE: `Wie viele Hunderter hat die Zahl ${n}?`, EN: `How many hundreds does ${n} have?`, HU: `Hány százas van a ${n} számban?`, RO: `Câte sute are numărul ${n}?` };
    return q(texts[lang] || texts.DE, h, t("placeValue", cc));
  },
  compose: (cc) => {
    const h = randInt(1, 9), z = randInt(1, 9), e = randInt(1, 9);
    const lang = getLang(cc);
    const texts: Record<string, string> = { DE: `${h} Hunderter + ${z} Zehner + ${e} Einer = ?`, EN: `${h} hundreds + ${z} tens + ${e} ones = ?`, HU: `${h} százas + ${z} tízes + ${e} egyes = ?`, RO: `${h} sute + ${z} zeci + ${e} unități = ?` };
    return q(texts[lang] || texts.DE, h * 100 + z * 10 + e, t("placeValue", cc));
  },
  placeVal1000: (cc) => {
    const n = randInt(100, 999);
    const pos = pick(['hundreds', 'tens', 'ones'] as const);
    const ans = pos === 'hundreds' ? Math.floor(n / 100) : pos === 'tens' ? Math.floor((n % 100) / 10) : n % 10;
    return q(qPlaceValue(n, pos, cc), ans, t("placeValue", cc));
  },
  add3nums: (cc) => {
    const a = randInt(100, 350), b = randInt(100, 300), c = randInt(10, Math.min(200, 999 - a - b));
    return q(`${a} + ${b} + ${c} = ?`, a + b + c, t("addition1000", cc));
  },
  mulRepeated: (cc) => {
    const a = randInt(2, 5), b = randInt(2, 9);
    return q(qMulAsAddition(a, b, cc), a * b, t("multTable", cc));
  },
  mulLarge: (cc) => {
    const a = randInt(2, 9);
    const factor = pick([10, 100] as const);
    return q(`${a} × ${factor} = ?`, a * factor, t("multTable", cc));
  },
  divRelMul: (cc) => {
    const a = randInt(2, 9), b = randInt(2, 9);
    return q(qDivMulRelation(a * b, a, cc), b, t("division", cc));
  },
  divRemainder: (cc) => {
    const divisor = pick([2, 3, 4, 5, 6] as const);
    const quotient = randInt(2, 8);
    const remainder = randInt(1, divisor - 1);
    const dividend = divisor * quotient + remainder;
    const lang = getLang(cc);
    const texts: Record<string, string> = { DE: `${dividend} ÷ ${divisor}: Was ist der Rest?`, EN: `${dividend} ÷ ${divisor}: What is the remainder?`, HU: `${dividend} ÷ ${divisor}: mennyi a maradék?`, RO: `${dividend} ÷ ${divisor}: care este restul?` };
    return q(texts[lang] || texts.DE, remainder, t("division", cc));
  },
  perimCalc: (cc) => {
    const w = randInt(2, 10), h = randInt(2, 10);
    return q(qRectPerimeter(w, h, cc), 2 * (w + h), t("perimeter", cc), 0, true);
  },
  areaCalc: (cc) => {
    const w = randInt(2, 8), h = randInt(2, 8);
    return q(qRectArea(w, h, cc), w * h, t("area", cc), 0, true);
  },
  barChartRead: (cc) => {
    const vals = [randInt(2, 12), randInt(2, 12), randInt(2, 12), randInt(2, 12)];
    const lang = getLang(cc);
    const labels: Record<string, string[]> = {
      DE: ['Äpfel', 'Birnen', 'Kirschen', 'Bananen'],
      EN: ['Apples', 'Pears', 'Cherries', 'Bananas'],
      HU: ['Alma', 'Körte', 'Cseresznye', 'Banán'],
      RO: ['Mere', 'Pere', 'Cireșe', 'Banane'],
    };
    const names = labels[lang] || labels.DE;
    const askIdx = randInt(0, 3); // ask about random item, not always the first
    const texts: Record<string, string> = {
      DE: `Balkendiagramm: ${names[0]}:${vals[0]}, ${names[1]}:${vals[1]}, ${names[2]}:${vals[2]}, ${names[3]}:${vals[3]}. Wie viele ${names[askIdx]}?`,
      EN: `Bar chart: ${names[0]}:${vals[0]}, ${names[1]}:${vals[1]}, ${names[2]}:${vals[2]}, ${names[3]}:${vals[3]}. How many ${names[askIdx]}?`,
      HU: `Oszlopdiagram: ${names[0]}:${vals[0]}, ${names[1]}:${vals[1]}, ${names[2]}:${vals[2]}, ${names[3]}:${vals[3]}. Hány ${names[askIdx]}?`,
      RO: `Diagramă: ${names[0]}:${vals[0]}, ${names[1]}:${vals[1]}, ${names[2]}:${vals[2]}, ${names[3]}:${vals[3]}. Câte ${names[askIdx]}?`,
    };
    return q(texts[lang] || texts.DE, vals[askIdx], t("g1DataTable", cc));
  },
  shapeProp: (cc) => {
    const shapes = [
      { name: { DE: 'Dreieck', EN: 'triangle', HU: 'háromszög', RO: 'triunghi' }, corners: 3 },
      { name: { DE: 'Viereck', EN: 'quadrilateral', HU: 'négyszög', RO: 'patrulater' }, corners: 4 },
      { name: { DE: 'Sechseck', EN: 'hexagon', HU: 'hatszög', RO: 'hexagon' }, corners: 6 },
    ];
    const s = pick(shapes);
    const lang = getLang(cc);
    const texts: Record<string, string> = {
      DE: `Wie viele Ecken hat ein ${s.name.DE}?`,
      EN: `How many corners does a ${s.name.EN} have?`,
      HU: `Hány csúcsa van egy ${s.name.HU}nak?`,
      RO: `Câte colțuri are un ${s.name.RO}?`,
    };
    return q(texts[lang] || texts.DE, s.corners, t("geometry", cc));
  },
  // ─── G3: focused unit generators (length / weight / time) ────────────────
  lengthUnits: (cc) => pick([
    () => q(qHowManyCmInM(cc), 100, t("units", cc)),
    () => { const m = randInt(2, 6); return q(qMetersInCm(m, cc), m * 100, t("units", cc)); },
    () => { const cm = pick([200, 300, 400, 500]); const lang = getLang(cc); const texts: Record<string, string> = { DE: `${cm} cm = ? m`, EN: `${cm} cm = ? m`, HU: `${cm} cm = ? m`, RO: `${cm} cm = ? m` }; return q(texts[lang] || texts.DE, cm / 100, t("units", cc)); },
    () => q(qKmToM(1, cc), 1000, t("unitConversion", cc)),
    () => { const km = randInt(2, 5); return q(qKmToM(km, cc), km * 1000, t("unitConversion", cc)); },
  ])(),
  weightUnits: (cc) => pick([
    () => q(qHowManyGInKg(cc), 1000, t("units", cc)),
    () => { const kg = randInt(2, 5); return q(qKgToG(kg, cc), kg * 1000, t("units", cc)); },
    () => { const g = pick([2000, 3000, 4000, 5000]); const lang = getLang(cc); const texts: Record<string, string> = { DE: `${g} g = ? kg`, EN: `${g} g = ? kg`, HU: `${g} g = ? kg`, RO: `${g} g = ? kg` }; return q(texts[lang] || texts.DE, g / 1000, t("units", cc)); },
    () => q(qMlInL(cc), 1000, t("units", cc)),
  ])(),
  timeUnits: (cc) => pick([
    () => q(qHowManyMinInH(cc), 60, t("units", cc)),
    () => { const h = randInt(2, 4); return q(qHoursInMin(h, cc), h * 60, t("units", cc)); },
    () => { const lang = getLang(cc); const texts: Record<string, string> = { DE: "Wie viele Stunden hat ein Tag?", EN: "How many hours are in a day?", HU: "Hány óra van egy napban?", RO: "Câte ore are o zi?" }; return q(texts[lang] || texts.DE, 24, t("units", cc)); },
    () => { const lang = getLang(cc); const texts: Record<string, string> = { DE: "Wie viele Tage hat eine Woche?", EN: "How many days are in a week?", HU: "Hány nap van egy hétben?", RO: "Câte zile are o săptămână?" }; return q(texts[lang] || texts.DE, 7, t("units", cc)); },
  ])(),
  // ─── G3: money word problems ──────────────────────────────────────────────
  moneyWord3: (cc) => {
    const items = getItems(cc);
    const cur = getCurrency(cc);
    const lang = getLang(cc);
    return pick([
      () => {
        const price = randInt(3, 9), count = randInt(2, 5);
        const item = pick(items.fruits);
        const texts: Record<string, string> = {
          DE: `${item} kostet ${price} ${cur}. Wie viel kosten ${count} ${item}?`,
          EN: `${item} costs ${price} ${cur}. How much do ${count} ${item} cost?`,
          HU: `Egy ${item} ${price} ${cur}. Mennyibe kerül ${count} db?`,
          RO: `Un ${item} costă ${price} ${cur}. Cât costă ${count} ${item}?`,
        };
        return q(texts[lang] || texts.DE, price * count, t("wordProblem", cc), 0, true);
      },
      () => {
        const paid = pick([10, 20, 50]), price = randInt(3, paid - 1);
        const item = pick(items.fruits);
        const texts: Record<string, string> = {
          DE: `Du kaufst ${item} für ${price} ${cur} und zahlst ${paid} ${cur}. Wie viel Wechselgeld bekommst du?`,
          EN: `You buy ${item} for ${price} ${cur} and pay ${paid} ${cur}. How much change do you get?`,
          HU: `Vásárolsz ${item}-t ${price} ${cur}-ért és ${paid} ${cur}-t fizetsz. Mennyi a visszajáró?`,
          RO: `Cumperi ${item} cu ${price} ${cur} și plătești ${paid} ${cur}. Câți bani primești rest?`,
        };
        return q(texts[lang] || texts.DE, paid - price, t("wordProblem", cc), 0, true);
      },
    ])();
  },
  // ─── G3: subtraction word problems ───────────────────────────────────────
  wordSub: (cc) => {
    const items = getItems(cc);
    const lang = getLang(cc);
    return pick([
      () => {
        const total = randInt(150, 500), sold = randInt(50, total - 30);
        const item = pick(items.fruits);
        const texts: Record<string, string> = {
          DE: `Ein Geschäft hatte ${total} ${item}. Es wurden ${sold} verkauft. Wie viele sind noch übrig?`,
          EN: `A shop had ${total} ${item}. ${sold} were sold. How many are left?`,
          HU: `Egy boltban ${total} db ${item} volt. Eladtak ${sold} db-ot. Hány maradt?`,
          RO: `Un magazin avea ${total} ${item}. S-au vândut ${sold}. Câte au rămas?`,
        };
        return q(texts[lang] || texts.DE, total - sold, t("wordProblem", cc), 0, true);
      },
      () => {
        const total = randInt(200, 600), driven = randInt(50, total - 30);
        const texts: Record<string, string> = {
          DE: `Ein Auto muss ${total} km fahren. Es hat schon ${driven} km zurückgelegt. Wie viele km fehlen noch?`,
          EN: `A car must travel ${total} km. It has already covered ${driven} km. How many km remain?`,
          HU: `Egy autó ${total} km-t kell tegyen meg. Már megtett ${driven} km-t. Mennyi van hátra?`,
          RO: `O mașină trebuie să parcurgă ${total} km. A parcurs deja ${driven} km. Câți km mai sunt?`,
        };
        return q(texts[lang] || texts.DE, total - driven, t("wordProblem", cc), 0, true);
      },
      () => {
        const total = randInt(100, 300), given = randInt(30, total - 20);
        const item = pick(items.fruits);
        const texts: Record<string, string> = {
          DE: `${total} ${item} werden geerntet. ${given} werden verschenkt. Wie viele bleiben übrig?`,
          EN: `${total} ${item} are harvested. ${given} are given away. How many are left?`,
          HU: `Leszedtek ${total} db ${item}-t. Szétosztottak ${given} db-ot. Mennyi maradt?`,
          RO: `S-au cules ${total} ${item}. S-au dăruit ${given}. Câte au rămas?`,
        };
        return q(texts[lang] || texts.DE, total - given, t("wordProblem", cc), 0, true);
      },
    ])();
  },
  // ─── G3: missing number in addition / subtraction ────────────────────────
  missingAddSub: (cc) => pick([
    () => { const a = randInt(100, 600), b = randInt(50, 300); return q(qMissingInEquation(`${a} + ? = ${a + b}`, cc), b, t("missingNumber", cc)); },
    () => { const a = randInt(200, 800), b = randInt(50, 300); return q(qMissingInEquation(`${a} - ? = ${a - b}`, cc), b, t("missingNumber", cc)); },
    () => { const b = randInt(100, 400), res = randInt(100, 400); return q(qMissingInEquation(`? + ${b} = ${b + res}`, cc), res, t("missingNumber", cc)); },
    () => { const total = randInt(300, 900), rest = randInt(100, total - 50); return q(qMissingInEquation(`? - ${rest} = ${total - rest}`, cc), total, t("missingNumber", cc)); },
  ])(),
  // ─── G3: angle / rechter Winkel questions ────────────────────────────────
  rechterWinkel: (cc) => pick([
    () => q(qRightAngleDeg(cc), 90, t("geometry", cc)),
    () => q(qRightAnglesInShape("rectangle", cc), 4, t("geometry", cc)),
    () => q(qRightAnglesInShape("square", cc), 4, t("geometry", cc)),
    () => { const a = pick([30, 45, 60, 80]); return q(qAngleType(a, cc), 1, t("geometry", cc)); },
    () => { const a = pick([100, 120, 135]); return q(qAngleType(a, cc), 3, t("geometry", cc)); },
  ])(),
};

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
  volumeWord: (cc) => pick([
    () => {
      const cups = pick([4, 8]); const ml = 250;
      return q(wpDrinksPerWeek(cups, ml, cc), cups * ml * 7 / 1000, t("volumeUnits", cc), 0, true);
    },
    () => {
      const total = pick([10, 15, 20]); const filled = pick([3, 5, 7]);
      return q(wpContainerFill(total, filled, cc), total - filled, t("volumeUnits", cc), 0, true);
    },
    () => {
      const bottles = pick([4, 6, 8]); const mlEach = pick([500, 250]);
      return q(wpBottleTotal(bottles, mlEach, cc), bottles * mlEach / 1000, t("volumeUnits", cc), 0, true);
    },
  ])(),
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
  // G4 szöteges feladatok — nagy pick-pool, 1000-9999 számkörben, változatos kontextusok
  word1: (cc) => {
    const it = getItems(cc), cur = getCurrency(cc);
    return pick([
      () => { const rows = randInt(20,60), perRow = randInt(20,60); return q(wpConferenceSeats(rows,perRow,cc), rows*perRow, t("wordProblem",cc),0,true); },
      () => { const books = randInt(500,2000), price = randInt(8,20); return q(wpBookPublisher(books,price,cc), books*price, t("wordProblem",cc),0,true); },
      () => { const cars = randInt(5,15), days = randInt(3,7), ppd = randInt(30,80); return q(wpCarRentalFleet(cars,days,ppd,cc), cars*days*ppd, t("wordProblem",cc),0,true); },
      () => { const packs = randInt(20,50), ppk = randInt(15,40); return q(wpSchoolSupplyOrder(packs*ppk,packs,ppk,cc), packs*ppk, t("wordProblem",cc),0,true); },
      () => { const b = pick([3,4,5,6]), r = randInt(40,80); return q(wpClassGroups(b*r,b,cc), r, t("wordProblem",cc),0,true); },
    ])();
  },
  word2: (cc) => {
    const it = getItems(cc), cur = getCurrency(cc);
    return pick([
      () => { const rooms = randInt(8,20), cost = randInt(80,250); return q(wpSchoolRenovation(rooms,cost,cc), rooms*cost, t("wordProblem",cc),0,true); },
      () => { const dist = randInt(50,200), ticket = randInt(10,30), pass = randInt(50,150); return q(wpTrainJourney(dist,ticket,pass,cc), ticket*pass, t("wordProblem",cc),0,true); },
      () => { const cnt = randInt(3,8), price = randInt(80,300); return q(wpBuyMultiple(it.notebook,price,cnt,cur,cc), price*cnt, t("wordProblem",cc),0,true); },
      () => { const rows = randInt(5,12), perRow = randInt(8,20); return q(wpShelfRows(rows,perRow,it.book,cc), rows*perRow, t("wordProblem",cc),0,true); },
    ])();
  },
  word3: (cc) => {
    const it = getItems(cc);
    return pick([
      () => { const d = pick([2,3,4,5]), r = randInt(30,80); return q(wpShare(d*r,d,r,it.candy,cc), r, t("wordProblem",cc),0,true); },
      () => { const fields = randInt(4,8), perField = randInt(300,800), sold = randInt(200,600); return q(wpFarmHarvest(fields,perField,sold,cc), fields*perField-sold, t("wordProblem",cc),0,true); },
      () => { const stands = randInt(4,8), perStand = randInt(200,600), empty = randInt(50,200); return q(wpSportArena(stands,perStand,empty,cc), stands*perStand-empty, t("wordProblem",cc),0,true); },
      () => { const b = pick([4,5,6]), r = randInt(30,70); return q(wpClassGroups(b*r,b,cc), r, t("wordProblem",cc),0,true); },
    ])();
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
  unitLengthsWord: (cc) => pick([
    () => { const laps = randInt(2, 5); const distPerLap = pick([500, 1000, 2000]); return q(qRunnerLaps(distPerLap, laps * distPerLap, cc), laps, t("wordProblem", cc), 0, true); },
    () => { const a = randInt(4, 12), b = randInt(3, 10); return q(wpFenceLength(a, b, cc), 2 * (a + b), t("wordProblem", cc), 0, true); },
    () => { const km = randInt(2, 6); const m = randInt(1, 9) * 100; return q(`${km} km und ${m} m = ? m`, km * 1000 + m, t("unitConversion", cc)); },
  ])(),
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
  // ─── Grade 4: Rechnen bis 10 000 ──────────────────────
  addTo10000: (cc) => {
    let a: number, b: number;
    do { a = randInt(1000, 8500); b = randInt(500, 9000 - a); } while (a + b > 10000 || a + b < 5000);
    return q(`${a} + ${b} = ?`, a + b, t("writtenAdd", cc));
  },
  subTo10000: (cc) => {
    const a = randInt(4000, 10000);
    const b = randInt(500, Math.min(a - 500, 5000));
    return q(`${a} − ${b} = ?`, a - b, t("writtenSub", cc));
  },
  mentalAdd10000: (cc) => pick([
    () => { const a = randInt(1, 7) * 1000, b = (randInt(1, 9 - a / 1000)) * 1000; return q(`${a} + ${b} = ?`, a + b, t("writtenAdd", cc)); },
    () => { const a = randInt(1, 8) * 1000, b = randInt(1, 9) * 100; return q(`${a} + ${b} = ?`, a + b, t("writtenAdd", cc)); },
    () => { const a = randInt(2, 9) * 1000; return q(`${a} + ${10000 - a} = ?`, 10000, t("writtenAdd", cc)); },
    () => { const a = randInt(3, 8) * 1000; return q(`10 000 − ${a} = ?`, 10000 - a, t("writtenSub", cc)); },
  ])(),
  ergaenze10000: (cc) => {
    const part = randInt(1, 9) * 1000 - randInt(0, 5) * 100;
    return q(qErgaenzeAuf10000(part, cc), 10000 - part, t("writtenAdd", cc));
  },
  // ─── Grade 4: Rechnen bis 100 000 ─────────────────────
  addTo100000: (cc) => {
    let a: number, b: number;
    do { a = randInt(10000, 80000); b = randInt(5000, 90000 - a); } while (a + b > 100000 || a + b < 50000);
    return q(`${a} + ${b} = ?`, a + b, t("writtenAdd", cc));
  },
  subTo100000: (cc) => {
    const a = randInt(40000, 100000);
    const b = randInt(5000, Math.min(a - 5000, 60000));
    return q(`${a} − ${b} = ?`, a - b, t("writtenSub", cc));
  },
  roundTo10000: (cc) => {
    const n = randInt(11000, 99000);
    return q(qRoundTo10000(n, cc), Math.round(n / 10000) * 10000, t("rounding", cc));
  },
  // ─── Grade 4: focused Perimeter / Area ────────────────
  perimeterOnly: (cc) => pick([
    () => { const a = randInt(3, 12), b = randInt(3, 10); return q(qRectPerimeter(a, b, cc), 2 * (a + b), t("geometry", cc)); },
    () => { const a = randInt(3, 14); return q(qSquarePerimeter(a, cc), 4 * a, t("geometry", cc)); },
  ])(),
  areaOnly: (cc) => pick([
    () => { const a = randInt(3, 12), b = randInt(3, 10); return q(qRectArea(a, b, cc), a * b, t("geometry", cc)); },
    () => { const a = randInt(3, 12); return q(qSquareArea(a, cc), a * a, t("geometry", cc)); },
  ])(),
  // ─── Grade 4: weight conversions only ─────────────────
  weightOnly: (cc) => pick([
    () => { const kg = randInt(2, 9); return q(qWeightConvert(kg, "kg", "g", cc), kg * 1000, t("unitConversion", cc)); },
    () => { const ton = randInt(2, 5); return q(qWeightConvert(ton, "t", "kg", cc), ton * 1000, t("unitConversion", cc)); },
    () => { const g = pick([2000, 3000, 4000, 5000]); return q(qWeightConvert(g, "g", "kg", cc), g / 1000, t("unitConversion", cc)); },
  ])(),
  // ─── Grade 4: Winkel & Geodreieck ─────────────────────
  winkelTyp: (cc) => pick([
    () => q(qRightAngleDeg(cc), 90, t("geometry", cc)),
    () => q(qStraightAngleDeg(cc), 180, t("geometry", cc)),
    () => q(qFullAngleDeg(cc), 360, t("geometry", cc)),
    () => { const a = pick([20, 30, 40, 45, 50, 60, 70, 80]); return q(qComplementToRight(a, cc), 90 - a, t("geometry", cc)); },
    () => q(qAngleSumTriangle(cc), 180, t("geometry", cc)),
    () => q(qRightAnglesInShape("rectangle", cc), 4, t("geometry", cc)),
    () => q(qRightAnglesInShape("square", cc), 4, t("geometry", cc)),
  ])(),
  // angle type: 1=spitz, 2=recht, 3=stumpf
  winkelKlasse: (cc) => pick([
    () => { const a = pick([20, 30, 45, 60, 75, 80]); return q(qAngleType(a, cc), 1, t("geometry", cc)); },
    () => q(qAngleType(90, cc), 2, t("geometry", cc)),
    () => { const a = pick([100, 110, 120, 135, 150]); return q(qAngleType(a, cc), 3, t("geometry", cc)); },
  ])(),
  dreieckWinkel: (cc) => pick([
    () => {
      const pairs = [[40, 60], [50, 70], [30, 80], [45, 90], [60, 60], [35, 75]];
      const [a, b] = pick(pairs);
      return q(qTriangleThirdAngle(a, b, cc), 180 - a - b, t("geometry", cc));
    },
    () => q(qEquilateralAngle(cc), 60, t("geometry", cc)),
    () => { const base = pick([40, 50, 55, 65, 70]); return q(qIsoscelesApex(base, cc), 180 - 2 * base, t("geometry", cc)); },
    () => q(qAngleSumTriangle(cc), 180, t("geometry", cc)),
  ])(),
  symmetrieAchsen: (cc) => pick([
    () => q(qSymmetryAxes("square", cc), 4, t("geometry", cc)),
    () => q(qSymmetryAxes("rectangle", cc), 2, t("geometry", cc)),
    () => q(qSymmetryAxes("equilateralTriangle", cc), 3, t("geometry", cc)),
    () => q(qSymmetryAxes("isoscelesTriangle", cc), 1, t("geometry", cc)),
  ])(),
  // ─── Grade 4 money word problems ──────────────────────
  moneyWord: (cc) => pick([
    () => {
      const items = getItems(cc); const cur = getCurrency(cc);
      const price = randInt(2, 15); const paid = price + randInt(1, 10);
      return q(qChangeBack(items.notebook, price, paid, cur, cc), paid - price, t("wordProblem", cc), 0, true);
    },
    () => {
      const cur = getCurrency(cc);
      const budget = pick([10, 15, 20]); const price = randInt(3, budget - 2);
      return q(wpBudgetLeft(budget, price, cur, cc), budget - price, t("wordProblem", cc), 0, true);
    },
    () => {
      const cur = getCurrency(cc);
      const p1 = randInt(3, 8), p2 = randInt(2, 6);
      return q(wpTwoItemsCost(p1, p2, cur, cc), p1 + p2, t("wordProblem", cc), 0, true);
    },
  ])(),
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
      const subPairs: [number, number, number, number, number, number][] = [
        [3,4,1,2,4,1],[5,6,1,3,6,3],[3,4,1,4,4,2],[2,3,1,6,6,3],[5,6,2,3,6,1],
      ];
      const [san, sad, sbn, sbd, slcm, snum] = pick(subPairs);
      return q(qFractionSubDiff(san, sad, sbn, sbd, slcm, cc), snum, t("fractionDiffDenom", cc));
    }
  },

  // ── Large number operations ──────────────────────────
  readLargeNum: (cc) => {
    const placeNames: Record<string, string[]> = {
      DE: ["Einer", "Zehner", "Hunderter", "Tausender", "Zehntausender", "Hunderttausender"],
      EN: ["ones", "tens", "hundreds", "thousands", "ten-thousands", "hundred-thousands"],
      HU: ["egyesek", "tízesek", "százasok", "ezresek", "tízezresek", "százezresek"],
      RO: ["unități", "zeci", "sute", "mii", "zeci de mii", "sute de mii"],
    };
    const lang = getLang(cc);
    const names = placeNames[lang] ?? placeNames.EN;
    const placeIdx = randInt(0, 5);
    const digits = [randInt(1,9), randInt(0,9), randInt(0,9), randInt(0,9), randInt(0,9), randInt(0,9)];
    const n = digits[5]*100000 + digits[4]*10000 + digits[3]*1000 + digits[2]*100 + digits[1]*10 + digits[0];
    const digit = digits[placeIdx];
    const formatted = n.toLocaleString("de-DE");
    const prompts: Record<string, string> = {
      DE: `Die Zahl ist ${formatted}. Welche Ziffer steht an der ${names[placeIdx]}-Stelle?`,
      EN: `The number is ${n.toLocaleString("en-US")}. What digit is in the ${names[placeIdx]} place?`,
      HU: `A szám: ${formatted}. Melyik számjegy áll a ${names[placeIdx]} helyén?`,
      RO: `Numărul este ${formatted}. Ce cifră se află pe poziția ${names[placeIdx]}?`,
    };
    return q(prompts[lang] ?? prompts.EN, digit, t("rounding", cc));
  },

  compareNums: (cc) => {
    const lang = getLang(cc);
    const a = randInt(10000, 999999);
    let b = randInt(10000, 999999);
    while (b === a) b = randInt(10000, 999999);
    const bigger = Math.max(a, b);
    const prompts: Record<string, string> = {
      DE: `Welche Zahl ist größer: ${a.toLocaleString("de-DE")} oder ${b.toLocaleString("de-DE")}? (Gib die größere Zahl ein)`,
      EN: `Which number is greater: ${a.toLocaleString("en-US")} or ${b.toLocaleString("en-US")}? (Enter the larger number)`,
      HU: `Melyik szám nagyobb: ${a.toLocaleString("de-DE")} vagy ${b.toLocaleString("de-DE")}? (Írd be a nagyobb számot)`,
      RO: `Care număr este mai mare: ${a.toLocaleString("de-DE")} sau ${b.toLocaleString("de-DE")}? (Scrie numărul mai mare)`,
    };
    return q(prompts[lang] ?? prompts.EN, bigger, t("rounding", cc));
  },

  addLarge: (cc) => {
    const lang = getLang(cc);
    const a = randInt(10000, 99999);
    const b = randInt(10000, 99999);
    const aFmt = a.toLocaleString("de-DE");
    const bFmt = b.toLocaleString("de-DE");
    const prompts: Record<string, string> = {
      DE: `${aFmt} + ${bFmt} = ?`, EN: `${aFmt} + ${bFmt} = ?`, HU: `${aFmt} + ${bFmt} = ?`, RO: `${aFmt} + ${bFmt} = ?`,
    };
    return q(prompts[lang] ?? prompts.EN, a + b, t("addition", cc));
  },

  subLarge: (cc) => {
    const lang = getLang(cc);
    const b = randInt(10000, 80000);
    const a = b + randInt(5000, 50000);
    const aFmt = a.toLocaleString("de-DE");
    const bFmt = b.toLocaleString("de-DE");
    const prompts: Record<string, string> = {
      DE: `${aFmt} − ${bFmt} = ?`, EN: `${aFmt} − ${bFmt} = ?`, HU: `${aFmt} − ${bFmt} = ?`, RO: `${aFmt} − ${bFmt} = ?`,
    };
    return q(prompts[lang] ?? prompts.EN, a - b, t("subtraction", cc));
  },

  addComplement100k: (cc) => {
    const lang = getLang(cc);
    const part = randInt(1, 9) * 10000 + randInt(0, 9) * 1000;
    const rest = 100000 - part;
    const prompts: Record<string, string> = {
      DE: `${part.toLocaleString("de-DE")} + ? = 100 000`, EN: `${part.toLocaleString("en-US")} + ? = 100,000`,
      HU: `${part.toLocaleString("de-DE")} + ? = 100 000`, RO: `${part.toLocaleString("de-DE")} + ? = 100 000`,
    };
    return q(prompts[lang] ?? prompts.EN, rest, t("addition", cc));
  },

  // ── Multiplication ───────────────────────────────────
  mulTwoDigit: (cc) => {
    const lang = getLang(cc);
    const a = randInt(11, 49), b = randInt(11, 29);
    const prompts: Record<string, string> = {
      DE: `${a} × ${b} = ?`, EN: `${a} × ${b} = ?`, HU: `${a} × ${b} = ?`, RO: `${a} × ${b} = ?`,
    };
    return q(prompts[lang] ?? prompts.EN, a * b, t("multiplication", cc));
  },

  mulThreeOne: (cc) => {
    const lang = getLang(cc);
    const a = randInt(101, 499), b = randInt(3, 9);
    const prompts: Record<string, string> = {
      DE: `${a} × ${b} = ?`, EN: `${a} × ${b} = ?`, HU: `${a} × ${b} = ?`, RO: `${a} × ${b} = ?`,
    };
    return q(prompts[lang] ?? prompts.EN, a * b, t("multiplication", cc));
  },

  mulPow10: (cc) => {
    const lang = getLang(cc);
    const a = randInt(2, 99);
    const pow = pick([10, 100, 1000]);
    const powStr = pow === 1000 ? "1 000" : pow.toString();
    const prompts: Record<string, string> = {
      DE: `${a} × ${powStr} = ?`, EN: `${a} × ${pow.toLocaleString("en-US")} = ?`,
      HU: `${a} × ${powStr} = ?`, RO: `${a} × ${powStr} = ?`,
    };
    return q(prompts[lang] ?? prompts.EN, a * pow, t("multiplication", cc));
  },

  // ── Division ─────────────────────────────────────────
  divRemainder: (cc) => {
    const lang = getLang(cc);
    const divisor = randInt(3, 9), quotient = randInt(5, 15), remainder = randInt(1, divisor - 1);
    const dividend = divisor * quotient + remainder;
    const prompts: Record<string, string> = {
      DE: `${dividend} ÷ ${divisor}: Was ist der Rest?`,
      EN: `${dividend} ÷ ${divisor}: What is the remainder?`,
      HU: `${dividend} ÷ ${divisor}: Mennyi a maradék?`,
      RO: `${dividend} ÷ ${divisor}: Care este restul?`,
    };
    return q(prompts[lang] ?? prompts.EN, remainder, t("division", cc));
  },

  divLong: (cc) => {
    const lang = getLang(cc);
    const divisor = randInt(3, 9), quotient = randInt(20, 99);
    const dividend = divisor * quotient;
    const prompts: Record<string, string> = {
      DE: `${dividend} ÷ ${divisor} = ?`, EN: `${dividend} ÷ ${divisor} = ?`,
      HU: `${dividend} ÷ ${divisor} = ?`, RO: `${dividend} ÷ ${divisor} = ?`,
    };
    return q(prompts[lang] ?? prompts.EN, quotient, t("division", cc));
  },

  divPow10: (cc) => {
    const lang = getLang(cc);
    const pow = pick([10, 100]);
    const result = randInt(3, 99);
    const dividend = result * pow;
    const prompts: Record<string, string> = {
      DE: `${dividend.toLocaleString("de-DE")} ÷ ${pow} = ?`,
      EN: `${dividend.toLocaleString("en-US")} ÷ ${pow} = ?`,
      HU: `${dividend.toLocaleString("de-DE")} ÷ ${pow} = ?`,
      RO: `${dividend.toLocaleString("de-DE")} ÷ ${pow} = ?`,
    };
    return q(prompts[lang] ?? prompts.EN, result, t("division", cc));
  },

  // ── Decimals ─────────────────────────────────────────
  decimalRead: (cc) => {
    const lang = getLang(cc);
    const whole = randInt(0, 9), tenth = randInt(0, 9), hundredth = randInt(0, 9);
    const n = whole + tenth / 10 + hundredth / 100;
    const nStr = n.toFixed(2).replace(".", ",");
    const place = pick(["tenths", "hundredths"]);
    const digit = place === "tenths" ? tenth : hundredth;
    const placeNames: Record<string, Record<string, string>> = {
      tenths:     { DE: "Zehntel",     EN: "tenths",     HU: "tizedek",     RO: "zecimi" },
      hundredths: { DE: "Hundertstel", EN: "hundredths", HU: "századok",     RO: "sutimi" },
    };
    const pn = placeNames[place][lang] ?? placeNames[place].EN;
    const prompts: Record<string, string> = {
      DE: `Die Zahl ist ${nStr}. Welche Ziffer steht an der ${pn}-Stelle?`,
      EN: `The number is ${n.toFixed(2)}. What digit is in the ${pn} place?`,
      HU: `A szám: ${nStr}. Melyik számjegy áll a ${pn} helyén?`,
      RO: `Numărul este ${nStr}. Ce cifră se află pe locul ${pn}?`,
    };
    return q(prompts[lang] ?? prompts.EN, digit, t("decimals", cc));
  },

  decimalAdd: (cc) => {
    const lang = getLang(cc);
    const a = randInt(1, 9) + randInt(0, 9) / 10;
    const b = randInt(1, 9) + randInt(0, 9) / 10;
    const result = Math.round((a + b) * 10) / 10;
    const aStr = a.toFixed(1).replace(".", ",");
    const bStr = b.toFixed(1).replace(".", ",");
    const prompts: Record<string, string> = {
      DE: `${aStr} + ${bStr} = ?`, EN: `${a.toFixed(1)} + ${b.toFixed(1)} = ?`,
      HU: `${aStr} + ${bStr} = ?`, RO: `${aStr} + ${bStr} = ?`,
    };
    return q(prompts[lang] ?? prompts.EN, result, t("decimals", cc));
  },

  decimalSub: (cc) => {
    const lang = getLang(cc);
    const b = randInt(1, 5) + randInt(0, 9) / 10;
    const a = b + randInt(1, 4) + randInt(0, 9) / 10;
    const result = Math.round((a - b) * 10) / 10;
    const aStr = a.toFixed(1).replace(".", ",");
    const bStr = b.toFixed(1).replace(".", ",");
    const prompts: Record<string, string> = {
      DE: `${aStr} − ${bStr} = ?`, EN: `${a.toFixed(1)} − ${b.toFixed(1)} = ?`,
      HU: `${aStr} − ${bStr} = ?`, RO: `${aStr} − ${bStr} = ?`,
    };
    return q(prompts[lang] ?? prompts.EN, result, t("decimals", cc));
  },

  decimalCompare: (cc) => {
    const lang = getLang(cc);
    const a = (randInt(0, 9) + randInt(0, 9) / 10 + randInt(0, 9) / 100);
    const b = (randInt(0, 9) + randInt(0, 9) / 10 + randInt(0, 9) / 100);
    const bigger = Math.round(Math.max(a, b) * 100) / 100;
    const aStr = a.toFixed(2).replace(".", ",");
    const bStr = b.toFixed(2).replace(".", ",");
    const prompts: Record<string, string> = {
      DE: `Welche Zahl ist größer: ${aStr} oder ${bStr}? (Gib die größere Zahl ein, mit 2 Nachkommastellen)`,
      EN: `Which is greater: ${a.toFixed(2)} or ${b.toFixed(2)}? (Enter the larger number)`,
      HU: `Melyik nagyobb: ${aStr} vagy ${bStr}? (Írd be a nagyobb számot)`,
      RO: `Care este mai mare: ${aStr} sau ${bStr}? (Scrie numărul mai mare)`,
    };
    return q(prompts[lang] ?? prompts.EN, bigger, t("decimals", cc));
  },

  decimalRound: (cc) => {
    const lang = getLang(cc);
    const d = randInt(1, 9) + randInt(1, 9) / 10;
    const rounded = Math.round(d);
    const dStr = d.toFixed(1).replace(".", ",");
    const prompts: Record<string, string> = {
      DE: `Runde ${dStr} auf die nächste ganze Zahl.`,
      EN: `Round ${d.toFixed(1)} to the nearest whole number.`,
      HU: `Kerekítsd ${dStr}-t a legközelebbi egész számra!`,
      RO: `Rotunjește ${dStr} la cel mai apropiat număr întreg.`,
    };
    return q(prompts[lang] ?? prompts.EN, rounded, t("rounding", cc));
  },

  // ── Unit conversions ─────────────────────────────────
  unitLength: (cc) => {
    if (cc === "US") {
      return pick([
        () => { const ft = randInt(1, 8); const lang = getLang(cc); return q(`${ft} foot = ? inches`, ft * 12, t("unitConversion", cc)); },
        () => { const yd = randInt(1, 5); return q(`${yd} yard${yd > 1 ? 's' : ''} = ? feet`, yd * 3, t("unitConversion", cc)); },
        () => { const mi = randInt(1, 4); return q(`${mi} mile${mi > 1 ? 's' : ''} = ? feet (1 mile = 5,280 feet)`, mi * 5280, t("unitConversion", cc)); },
        () => { const inch = pick([12, 24, 36]); return q(`${inch} inches = ? feet`, inch / 12, t("unitConversion", cc)); },
      ])();
    }
    return pick([
      () => { const km = randInt(1, 8); return q(qKmToM(km, cc), km * 1000, t("unitConversion", cc)); },
      () => { const m = randInt(2, 9); return q(qMetersInCm(m, cc), m * 100, t("unitConversion", cc)); },
      () => { const n = randInt(1, 5) * 1000; const lang = getLang(cc); const prompts: Record<string,string> = { DE: `${n.toLocaleString("de-DE")} m = ? km`, EN: `${n.toLocaleString("en-US")} m = ? km`, HU: `${n.toLocaleString("de-DE")} m = ? km`, RO: `${n.toLocaleString("de-DE")} m = ? km` }; return q(prompts[lang] ?? prompts.EN, n / 1000, t("unitConversion", cc)); },
    ])();
  },

  unitMass: (cc) => {
    if (cc === "US") {
      return pick([
        () => { const lb = randInt(1, 8); return q(`${lb} pound${lb > 1 ? 's' : ''} = ? ounces (1 pound = 16 oz)`, lb * 16, t("unitConversion", cc)); },
        () => { const oz = pick([16, 32, 48, 64]); return q(`${oz} ounces = ? pounds`, oz / 16, t("unitConversion", cc)); },
        () => { const ton = randInt(1, 4); return q(`${ton} ton${ton > 1 ? 's' : ''} = ? pounds (1 ton = 2,000 lbs)`, ton * 2000, t("unitConversion", cc)); },
      ])();
    }
    return pick([
      () => { const kg = randInt(1, 8); return q(qKgToG(kg, cc), kg * 1000, t("unitConversion", cc)); },
      () => { const t2 = randInt(1, 5); return q(qTonToKg(t2, cc), t2 * 1000, t("unitConversion", cc)); },
      () => { return q(qWeightConvert(randInt(1, 6) * 500, "g", "kg", cc), randInt(1, 6) * 500 / 1000, t("unitConversion", cc)); },
    ])();
  },

  unitTime: (cc) => {
    if (cc === "US") {
      return pick([
        () => { const h = randInt(1, 5); return q(qHoursToMinutes(h, cc), h * 60, t("unitConversion", cc)); },
        () => { const startH = randInt(8, 11); const dur = randInt(1, 4); const endH = startH + dur; return q(`School starts at ${startH} AM and lasts ${dur} hour${dur > 1 ? 's' : ''}. What time does it end? (Enter hour, 1-12)`, endH > 12 ? endH - 12 : endH, t("unitConversion", cc)); },
        () => { const h = randInt(2, 6); const amH = randInt(8, 11); return q(`It is ${amH} AM. What time will it be in ${h} hours? (Enter hour, 1-12)`, amH + h > 12 ? amH + h - 12 : amH + h, t("unitConversion", cc)); },
      ])();
    }
    return pick([
      () => { const h = randInt(1, 5); return q(qHoursToMinutes(h, cc), h * 60, t("unitConversion", cc)); },
      () => { const min = pick([30, 60, 90, 120, 180]); return q(qMinutesToHours(min, cc), min / 60, t("unitConversion", cc)); },
      () => { const start = randInt(7, 20); const dur = randInt(1, 4); return q(qTimeElapsed(start, dur, cc), (start + dur) % 24, t("unitConversion", cc)); },
    ])();
  },

  unitMoney: (cc) => {
    const lang = getLang(cc);
    const cur = getCurrency(cc);
    const isUS = cc === "US";
    return pick([
      () => {
        const dollars = randInt(1, 20);
        const cents = dollars * 100;
        const prompts: Record<string,string> = {
          DE: `${dollars} € = ? Cent`, EN: isUS ? `${dollars} dollar${dollars > 1 ? 's' : ''} = ? cents` : `${dollars} ${cur} = ? cents`,
          HU: `${dollars} euró = ? cent`, RO: `${dollars} euro = ? cenți`,
        };
        return q(prompts[lang] ?? prompts.EN, cents, t("unitConversion", cc));
      },
      () => {
        const cents = randInt(1, 10) * 50;
        const dollars = cents / 100;
        const prompts: Record<string,string> = {
          DE: `${cents} Cent = ? €`, EN: isUS ? `${cents} cents = ? dollars` : `${cents} cents = ? ${cur}`,
          HU: `${cents} cent = ? euró`, RO: `${cents} cenți = ? euro`,
        };
        return q(prompts[lang] ?? prompts.EN, dollars, t("unitConversion", cc));
      },
      ...(isUS ? [() => {
        const quarters = randInt(2, 8);
        return q(`${quarters} quarters = ? cents (1 quarter = 25 cents)`, quarters * 25, t("unitConversion", cc));
      }] : []),
    ])();
  },

  // ── Percent ──────────────────────────────────────────
  percent20: (cc) => { const n = randInt(2, 10) * 100; return q(qPercentOf(n, 20, cc), n / 5, t("percent", cc)); },
  percent75: (cc) => { const n = randInt(1, 8) * 100; return q(qPercentOf(n, 75, cc), n * 3 / 4, t("percent", cc)); },
  percent5:  (cc) => { const n = randInt(2, 10) * 100; return q(qPercentOf(n, 5, cc), n / 20, t("percent", cc)); },

  percentWord: (cc) => {
    const cur = getCurrency(cc);
    const n = randInt(2, 8) * 100;
    const p = pick([10, 20, 25, 50]);
    return q(wpSavings(n, p, cur, cc), n * p / 100, t("percent", cc), 0, true);
  },

  // ── Word problems ─────────────────────────────────────
  wordAdd: (cc) => {
    const it = getItems(cc), cur = getCurrency(cc), ns = getNames(cc);
    return pick([
      () => { const p1 = randInt(3,9)*100, p2 = randInt(2,7)*100; return q(wpTwoItemsCost(p1,p2,cur,cc), p1+p2, t("wordProblem",cc),0,true); },
      () => { const a = randInt(200,800), b = randInt(200,800); return q(wpFruitTotal(a,it.fruits[0],b,it.fruits[1],cc), a+b, t("wordProblem",cc),0,true); },
      () => { const a = randInt(500,2000), b = randInt(300,1500); return q(wpBikeTrip(a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const nm = pick(ns.boys), a = randInt(400,1200), b = randInt(300,900); return q(wpBooksOrdered(nm,a,b,cc), a+b, t("wordProblem",cc),0,true); },
      () => { const adults = randInt(300,1200), children = randInt(200,800), nm = pick(ns.girls); return q(wpEventOrganizer(nm,adults,children,cc), adults+children, t("wordProblem",cc),0,true); },
    ])();
  },

  wordSub: (cc) => {
    const it = getItems(cc), cur = getCurrency(cc), ns = getNames(cc);
    return pick([
      () => { const budget = randInt(5,15)*100, price = randInt(2,8)*100; return q(wpBudgetLeft(budget,price,cur,cc), budget-price, t("wordProblem",cc),0,true); },
      () => { const total = randInt(300,800), eaten = randInt(50,150); return q(wpContainerFill(total,total-eaten,cc), eaten, t("wordProblem",cc),0,true); },
      () => { const init = randInt(800,2000), recv = randInt(200,600), sent = randInt(300,init+recv-200); return q(wpWarehouseStock(init,recv,sent,cc), init+recv-sent, t("wordProblem",cc),0,true); },
      () => { const nmA = pick(ns.girls), a = randInt(500,1500), nmB = pick(ns.boys), b = randInt(300,1200); return q(wpStampCollection(nmA,a,nmB,b,cc), Math.abs(a-b), t("wordProblem",cc),0,true); },
    ])();
  },

  wordMul: (cc) => {
    const it = getItems(cc), cur = getCurrency(cc);
    return pick([
      () => { const price = randInt(3,15)*100, count = randInt(3,8); return q(wpBuyMultiple(it.fruits[0],price,count,cur,cc), price*count, t("wordProblem",cc),0,true); },
      () => { const rows = randInt(3,8), perRow = randInt(4,12); return q(wpShelfRows(rows,perRow,it.book,cc), rows*perRow, t("wordProblem",cc),0,true); },
      () => { const books = randInt(200,800), price = randInt(12,30); return q(wpBookPublisher(books,price,cc), books*price, t("wordProblem",cc),0,true); },
      () => { const days = randInt(5,10), perDay = randInt(80,200); return q(wpFactoryProduction(days,perDay,cc), days*perDay, t("wordProblem",cc),0,true); },
      () => { const cars = randInt(4,10), days = randInt(2,5), ppd = randInt(40,100); return q(wpCarRentalFleet(cars,days,ppd,cc), cars*days*ppd, t("wordProblem",cc),0,true); },
    ])();
  },

  wordDiv: (cc) => {
    const it = getItems(cc);
    return pick([
      () => { const kids = randInt(3,8), each = randInt(4,12); return q(wpShare(kids*each,kids,each,it.candy,cc), each, t("wordProblem",cc),0,true); },
      () => { const groups = randInt(3,7), perGroup = randInt(4,9); return q(wpClassGroups(groups*perGroup,groups,cc), perGroup, t("wordProblem",cc),0,true); },
      () => { const loads = randInt(4,8), perLoad = randInt(50,150); const total = loads*perLoad; return q(wpTruckDelivery(loads,perLoad,it.fruits[0],cc), total, t("wordProblem",cc),0,true); },
      () => { const rooms = randInt(4,8), cost = randInt(150,400); return q(wpSchoolRenovation(rooms,cost,cc), rooms*cost, t("wordProblem",cc),0,true); },
    ])();
  },

  wordTravel: (cc) => {
    if (cc === "US") {
      return pick([
        () => {
          const speed = pick([30, 40, 50, 60, 65]);
          const time = randInt(2, 5);
          const dist = speed * time;
          return q(`A car drives at ${speed} mph for ${time} hours. How many miles does it travel?`, dist, t("wordProblem", cc), 0, true);
        },
        () => {
          const miles = randInt(3, 8) * 10; const h = pick([2, 3, 4]);
          return q(`A train travels ${miles * h} miles in ${h} hours. What is its average speed in mph?`, miles, t("wordProblem", cc), 0, true);
        },
      ])();
    }
    return pick([
      () => {
        const speed = pick([40, 50, 60, 80, 100]);
        const time = randInt(2, 5);
        return q(wpTravel(speed * time, speed, cc), time, t("wordProblem", cc), 0, true);
      },
      () => {
        const km = randInt(3, 8) * 10; const h = pick([2, 3, 4]);
        return q(wpAvgSpeed(km * h, h, cc), km, t("wordProblem", cc), 0, true);
      },
    ])();
  },

  wordFence: (cc) => {
    const a = randInt(4, 15), b = randInt(4, 15);
    return q(wpFenceLength(a, b, cc), 2 * (a + b), t("wordProblem", cc), 0, true);
  },

  // ── Geometry ─────────────────────────────────────────
  triangleAreaG5: (cc) => {
    const base = randInt(3, 14), h = randInt(3, 10);
    // ensure integer result
    const b = base % 2 === 0 ? base : base + 1;
    return q(qTriangleArea(b, h, cc), (b * h) / 2, t("geometry", cc));
  },

  squareAreaG5: (cc) => {
    const a = randInt(3, 15);
    return q(qSquareArea(a, cc), a * a, t("geometry", cc));
  },

  coordRead: (cc) => {
    const lang = getLang(cc);
    const x = randInt(1, 9), y = randInt(1, 9);
    const prompts: Record<string,string> = {
      DE: `Ein Punkt liegt bei x=${x}, y=${y}. Was ist seine x-Koordinate?`,
      EN: `A point is at x=${x}, y=${y}. What is its x-coordinate?`,
      HU: `Egy pont koordinátái: x=${x}, y=${y}. Mi az x-koordinátája?`,
      RO: `Un punct se află la x=${x}, y=${y}. Care este coordonata x?`,
    };
    return q(prompts[lang] ?? prompts.EN, x, t("geometry", cc));
  },

  // ── Negative numbers (EU Grade 5: DE/AT/CH) ──────────
  negativeIntro: (cc) => {
    const lang = getLang(cc);
    const a = randInt(1, 12), b = randInt(a + 1, a + 8);
    const prompts: Record<string,string> = {
      DE: `${a} - ${b} = ?`,
      EN: `${a} - ${b} = ?`,
      HU: `${a} - ${b} = ?`,
      RO: `${a} - ${b} = ?`,
    };
    return q(prompts[lang] ?? prompts.EN, a - b, t("negativeNumbers", cc), -50);
  },

  negativeNumberLine: (cc) => {
    const lang = getLang(cc);
    const n = randInt(-10, -1);
    const add = randInt(1, 6);
    const result = n + add;
    const prompts: Record<string,string> = {
      DE: `(${n}) + ${add} = ?`,
      EN: `(${n}) + ${add} = ?`,
      HU: `(${n}) + ${add} = ?`,
      RO: `(${n}) + ${add} = ?`,
    };
    return q(prompts[lang] ?? prompts.EN, result, t("negativeNumbers", cc), -50);
  },

  negativeTemp: (cc) => {
    const lang = getLang(cc);
    const morning = -randInt(2, 8);
    const rise = randInt(3, 12);
    const afternoon = morning + rise;
    const prompts: Record<string,string> = {
      DE: `Morgens: ${morning}°C. Im Laufe des Tages steigt es um ${rise}°C. Wie warm ist es nachmittags?`,
      EN: `Morning temperature: ${morning}°C. It rises by ${rise}°C during the day. What is the afternoon temperature?`,
      HU: `Reggel ${morning}°C. A nap folyamán ${rise}°C-ot emelkedik a hőmérséklet. Mennyi délután?`,
      RO: `Dimineața: ${morning}°C. Temperatura crește cu ${rise}°C în timpul zilei. Cât este după-amiaza?`,
    };
    return q(prompts[lang] ?? prompts.EN, afternoon, t("negativeNumbers", cc), 0, true);
  },

  negativeDiff: (cc) => {
    const lang = getLang(cc);
    const a = -randInt(2, 8), b = randInt(2, 8);
    const prompts: Record<string,string> = {
      DE: `Welche Zahl liegt zwischen ${a} und ${b} genau in der Mitte? (Differenz)`,
      EN: `What is the difference between ${b} and ${a}?`,
      HU: `Mi a különbség ${b} és ${a} között?`,
      RO: `Care este diferența dintre ${b} și ${a}?`,
    };
    return q(prompts[lang] ?? prompts.EN, b - a, t("negativeNumbers", cc), -50);
  },

  // ── Volume (US Grade 5 + EU) ───────────────────────────
  volumeCuboid: (cc) => {
    const lang = getLang(cc);
    const l = randInt(2, 8), w = randInt(2, 6), h = randInt(2, 5);
    const vol = l * w * h;
    const unit = cc === "US" ? "in" : "cm";
    const volUnit = cc === "US" ? "in³" : "cm³";
    const prompts: Record<string,string> = {
      DE: `Ein Quader hat Länge ${l} cm, Breite ${w} cm, Höhe ${h} cm. Wie groß ist das Volumen (in cm³)?`,
      EN: cc === "US"
        ? `A rectangular prism is ${l} in long, ${w} in wide, and ${h} in tall. What is its volume (in³)?`
        : `A cuboid is ${l} cm × ${w} cm × ${h} cm. What is its volume (cm³)?`,
      HU: `Egy téglatest hossza ${l} cm, szélessége ${w} cm, magassága ${h} cm. Mekkora a térfogata (cm³)?`,
      RO: `Un paralelipiped are lungimea ${l} cm, lățimea ${w} cm, înălțimea ${h} cm. Care este volumul (cm³)?`,
    };
    return q(prompts[lang] ?? prompts.EN, vol, t("geometry", cc));
  },

  volumeCube: (cc) => {
    const lang = getLang(cc);
    const a = randInt(2, 6);
    const vol = a * a * a;
    const prompts: Record<string,string> = {
      DE: `Ein Würfel hat die Kantenlänge ${a} cm. Was ist sein Volumen (cm³)?`,
      EN: cc === "US"
        ? `A cube has a side length of ${a} in. What is its volume (in³)?`
        : `A cube has side length ${a} cm. What is its volume (cm³)?`,
      HU: `Egy kocka élhossza ${a} cm. Mekkora a térfogata (cm³)?`,
      RO: `Un cub are latura de ${a} cm. Care este volumul său (cm³)?`,
    };
    return q(prompts[lang] ?? prompts.EN, vol, t("geometry", cc));
  },

  volumeWord: (cc) => {
    const lang = getLang(cc);
    const l = randInt(3, 8), w = randInt(2, 5), h = randInt(2, 4);
    const vol = l * w * h;
    const prompts: Record<string,string> = {
      DE: `Eine Kiste ist ${l} cm lang, ${w} cm breit und ${h} cm hoch. Wie viel cm³ fasst sie?`,
      EN: cc === "US"
        ? `A box is ${l} in long, ${w} in wide, and ${h} in tall. How many cubic inches does it hold?`
        : `A box is ${l} cm long, ${w} cm wide and ${h} cm tall. How many cm³ does it hold?`,
      HU: `Egy doboz ${l} cm hosszú, ${w} cm széles és ${h} cm magas. Hány cm³-t fog be?`,
      RO: `O cutie are lungimea ${l} cm, lățimea ${w} cm și înălțimea ${h} cm. Câți cm³ încape?`,
    };
    return q(prompts[lang] ?? prompts.EN, vol, t("geometry", cc), 0, true);
  },

  // ── Statistics ────────────────────────────────────────
  chartRead: (cc) => {
    const lang = getLang(cc);
    const categories = ["A", "B", "C", "D"];
    const values = categories.map(() => randInt(2, 12) * 5);
    const maxIdx = values.indexOf(Math.max(...values));
    const valList = categories.map((c, i) => `${c}:${values[i]}`).join(", ");
    const prompts: Record<string,string> = {
      DE: `Balkendiagramm-Werte (${valList}). Was ist der Höchstwert?`,
      EN: `Bar chart values (${valList}). What is the highest value?`,
      HU: `Oszlopdiagram értékei (${valList}). Mi a legnagyobb érték?`,
      RO: `Valorile diagramei (${valList}). Care este valoarea maximă?`,
    };
    return q(prompts[lang] ?? prompts.EN, values[maxIdx], t("statistics", cc));
  },

  calcMean: (cc) => {
    const count = pick([3, 4, 5]);
    const step = randInt(2, 8);
    const nums = Array.from({ length: count }, (_, i) => step * (i + 1));
    const mean = nums.reduce((s, n) => s + n, 0) / count;
    return q(qMeanOf(nums, cc), mean, t("mean", cc));
  },

  // ── Mixed number helpers ──────────────────────────────
  mixedNumber: (cc) => {
    const lang = getLang(cc);
    const whole = randInt(1, 5), num = randInt(1, 3), den = pick([4, 5, 6, 8]);
    // convert to improper fraction
    const numerator = whole * den + num;
    const prompts: Record<string,string> = {
      DE: `${whole} ${num}/${den} = ?/${den} (als unechten Bruch)`,
      EN: `${whole} ${num}/${den} = ?/${den} (as an improper fraction)`,
      HU: `${whole} ${num}/${den} = ?/${den} (vegyes törtként)`,
      RO: `${whole} ${num}/${den} = ?/${den} (ca fracție improprie)`,
    };
    return q(prompts[lang] ?? prompts.EN, numerator, t("fractionAdd", cc));
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
    5: { current: [G1.add20, G1.add20b, G1.sub20, G1.sub20b, G1.word1, G1.word2, G1.word3, G1.word4, G1.word5, G1.word6, G1.word7, G1.word8, G1.word9, G1.word10, G1.compare, G1.missing10, G1.missing10sub, G1.clockQuarter, G1.evenOdd, G1.timeline, G1.fraction, G1.coins], review: [G1.add10, G1.sub10] },
  },
  2: {
    1: { current: [G2.add100tens, G2.sub100tens, G2.add100, G2.missing100, G2.evenOdd, G2.compare100, G2.composeNumber, G2.numberLineG2, G2.countAdd, G2.placeValueG2, G2.neighborG2, G2.halving, G2.doubling, G2.vorgaenger2, G2.nachfolger2], review: [G1.add20, G1.sub20] },
    2: { current: [G2.add100tens, G2.sub100tens, G2.add100, G2.add100b, G2.addOhne, G2.subOhne, G2.sequence, G2.evenOdd, G2.compare100, G2.composeNumber, G2.countAdd, G2.countSub, G2.halving, G2.doubling, G2.missingSubtrahend, G2.numberOrderG2, G2.numberLinePlace, G2.zahlzerlegung2, G2.nachbarzahlen], review: [G1.add20, G1.sub20] },
    3: { current: [G2.add100, G2.add100b, G2.sub100, G2.sub100b, G2.addOhne, G2.addMit, G2.subOhne, G2.subMit, G2.add3nums, G2.units, G2.rounding10, G2.countAdd, G2.countSub, G2.missingAddend, G2.missingSubtrahend, G2.chartG2, G2.halving, G2.doubling, G2.lengthMeasure, G2.wordAddG2, G2.wordSubG2, G2.numberOrderG2], review: [G2.add100tens, G2.sub100tens] },
    4: { current: [G2.mul2510, G2.mul2510b, G2.mulTable34, G2.mulRepeated, G2.mulGroup, G2.add100, G2.sub100, G2.clock2, G2.clockSimpleG2, G2.rounding10, G2.mulVisual, G2.divVisual, G2.divShare, G2.divMulRel, G2.patternG2, G2.missingMulFactor, G2.shapeBasic, G2.weightGKg], review: [G2.add100tens, G2.sequence] },
    5: { current: [G2.mul2510, G2.mul2510b, G2.div2510, G2.mulTable34, G2.missingMulFactor, G2.word1, G2.word2, G2.word3, G2.word4, G2.wordAddG2, G2.wordSubG2, G2.wordMulG2, G2.wordDivG2, G2.wordMoneyG2, G2.wordTimeG2, G2.moneyChangeG2, G2.units, G2.ampmClock, G2.clock2, G2.sequence, G2.rounding10, G2.mulVisual, G2.divVisual, G2.patternG2, G2.chartG2, G2.compare100, G2.halving, G2.doubling, G2.perimeterSimple, G2.shapeBasic, G2.moneyEuroCent, G2.weightGKg, G2.lengthMeasure], review: [G2.add100, G2.sub100] },
  },
  3: {
    // Period 1: Zahlenraum 1000 — place value, ordering, rounding
    1: { current: [G3.add1000, G3.sub1000, G3.rounding100, G3.compare1000, G3.pred1000, G3.succ1000, G3.decompose, G3.compose, G3.placeVal1000], review: [G2.add100, G2.sub100, G2.mul2510] },
    // Period 2: Written arithmetic, sequences, place value deepening
    2: { current: [G3.writtenAdd, G3.writtenSub, G3.add1000, G3.sub1000, G3.sequence, G3.rounding100, G3.add3nums, G3.placeVal1000, G3.compare1000], review: [G2.mul2510, G2.div2510] },
    // Period 3: Multiplication tables, division, time
    3: { current: [G3.mul, G3.mulB, G3.div, G3.divB, G3.missingMul, G3.clock3, G3.mulRepeated, G3.mulLarge, G3.divRelMul, G3.divRemainder], review: [G3.add1000, G3.sub1000] },
    // Period 4: Written ops + geometry (perimeter+area) + time
    4: { current: [G3.writtenAdd, G3.writtenSub, G3.mul, G3.div, G3.missingMul, G3.clock3, G3.divRemainder, G3.perimCalc, G3.areaCalc, G3.shapeProp], review: [G3.divB, G3.sequence] },
    // Period 5: Word problems, units, data, all geometry, review
    5: { current: [G3.word1, G3.word2, G3.word3, G3.units, G3.clock3, G3.mul, G3.div, G3.rounding100, G3.areaCalc, G3.perimCalc, G3.barChartRead, G3.shapeProp], review: [G3.writtenAdd, G3.writtenSub, G3.sequence] },
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
      { key: 'g1_count',   name: 'Number recognition · Counting', color: '#60A5FA', icon: '🔢', generators: [G1.zaehlen] },
      { key: 'g1_visual',  name: 'Dots · Dice · Fingers · Objects', color: '#93C5FD', icon: '🎲', generators: [G1.zaehlen] },
      { key: 'g1_compare', name: 'Bigger · Smaller · Equal · Order', color: '#2563EB', icon: '⚖️', generators: [G1.compare, G1.numberOrder] },
      { key: 'g1_pos',     name: 'Before · After · Number Line', color: '#1D4ED8', icon: '📏', generators: [G1.vorgaenger, G1.nachfolger, G1.numberLine] },
    ]},
    { key: 'g1_zahlen20', name: 'Numbers to 20', color: '#06B6D4', icon: '🔟', topics: [
      { key: 'g1_num1120',      name: 'Numbers 11–20', color: '#22D3EE', icon: '🔟', generators: [G1.zaehlen, G1.placeValue20] },
      { key: 'g1_place_value20', name: 'Tens and Ones  (14 = 1 ten + 4 ones)', color: '#0891B2', icon: '🧱', generators: [G1.placeValue20] },
    ]},
    { key: 'g1_rechnen', name: 'Basic Operations', color: '#EF4444', icon: '➕', topics: [
      { key: 'g1_addpics', name: 'Addition with pictures', color: '#FCA5A5', icon: '🖼️', generators: [G1.zaehlen, G1.add10, G1.add10b] },
      { key: 'add10',      name: 'Addition to 10', color: '#F87171', icon: '➕', generators: [G1.add10, G1.add10b] },
      { key: 'add20',      name: 'Addition to 20', color: '#DC2626', icon: '➕', generators: [G1.add20, G1.add20b] },
      { key: 'g1_subpics', name: 'Subtraction with pictures', color: '#FCA5A5', icon: '🖼️', generators: [G1.zaehlen, G1.sub10, G1.sub10b] },
      { key: 'sub10',      name: 'Subtraction to 10', color: '#EF4444', icon: '➖', generators: [G1.sub10, G1.sub10b] },
      { key: 'sub20',      name: 'Subtraction to 20', color: '#B91C1C', icon: '➖', generators: [G1.sub20, G1.sub20b] },
      { key: 'g1_tausch',  name: 'Swap tasks · Inverse tasks', color: '#F59E0B', icon: '🔄', generators: [G1.tausch, G1.missing10, G1.missing10sub] },
    ]},
    { key: 'g1_struktur', name: 'Number Structure', color: '#8B5CF6', icon: '🧩', topics: [
      { key: 'g1_zahlzerlegung', name: 'Number bonds  (5 = 2 + 3)', color: '#A78BFA', icon: '🧩', generators: [G1.zahlzerlegung] },
      { key: 'g1_ergaenzen',     name: 'Fill the gap  (5 + __ = 10)', color: '#7C3AED', icon: '❓', generators: [G1.missing10, G1.missing10sub] },
      { key: 'g1_verdoppeln',    name: 'Doubling  (3 + 3 = ?)', color: '#8B5CF6', icon: '✌️', generators: [G1.verdoppeln] },
      { key: 'g1_halbieren',     name: 'Halving  (6 → 3)', color: '#6D28D9', icon: '✂️', generators: [G1.halbieren] },
      { key: 'g1_sequence',      name: 'Number sequences  (2–4–6–?)', color: '#5B21B6', icon: '➡️', generators: [G1.sequence, G1.evenOdd] },
    ]},
    { key: 'g1_geo', name: 'Geometry & Spatial', color: '#10B981', icon: '🔷', topics: [
      { key: 'g1_shapes',  name: 'Shapes (circle · square · rectangle · triangle)', color: '#34D399', icon: '🔷', generators: [G1.shapes] },
      { key: 'g1_spatial', name: 'Directions (above · below · left · right)', color: '#059669', icon: '🧭', generators: [G1.spatial] },
      { key: 'g1_pattern', name: 'Patterns (colour & shape patterns)', color: '#047857', icon: '🎨', generators: [G1.pattern] },
    ]},
    { key: 'g1_messen', name: 'Measurement & Quantities', color: '#F59E0B', icon: '📏', topics: [
      { key: 'g1_laenger', name: 'Length  (longer · shorter)', color: '#FBBF24', icon: '📏', generators: [G1.laenger] },
      { key: 'g1_weight',  name: 'Weight  (heavier · lighter)', color: '#F59E0B', icon: '⚖️', generators: [G1.weight] },
      { key: 'g1_volume',  name: 'Volume  (more · less · full · empty)', color: '#D97706', icon: '🥤', generators: [G1.volume] },
    ]},
    { key: 'g1_alltag', name: 'Everyday Math', color: '#FF2D78', icon: '🌍', topics: [
      { key: 'g1_clock',      name: 'Time  (full hours · half hours)', color: '#FF2D78', icon: '🕐', generators: [G1.clock1, G1.clockQuarter] },
      { key: 'g1_wochentage', name: 'Days of the week', color: '#FB7185', icon: '📅', generators: [G1.wochentage] },
      { key: 'g1_coins',      name: 'Coins · Simple shopping', color: '#FFD700', icon: '🪙', generators: [G1.coins] },
      { key: 'g1_data',       name: 'Simple data (tables)', color: '#E879F9', icon: '📊', generators: [G1.dataTable] },
      { key: 'word',          name: 'Story problems', color: '#C026D3', icon: '📖', generators: [G1.word1, G1.word2, G1.word3, G1.word4, G1.word5, G1.word6, G1.word7, G1.word8, G1.word9, G1.word10] },
    ]},
  ],
  2: [
    { key: 'g2_numbers', name: 'Numbers & Number System', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g2_zahlen100',    name: 'Numbers to 100',                    color: '#60A5FA', icon: '💯', generators: [G2.vorgaenger2, G2.nachfolger2, G2.add100tens, G2.compare100, G2.composeNumber] },
      { key: 'g2_compare',     name: 'Read · Write · Compare · Order',    color: '#93C5FD', icon: '⚖️', generators: [G2.nachbarzahlen, G2.stellenwert2, G2.compare100] },
      { key: 'g2_vorgaenger',  name: 'Predecessor / Successor',           color: '#BFDBFE', icon: '◀▶', generators: [G2.vorgaenger2, G2.nachfolger2] },
      { key: 'g2_nachbarn',    name: 'Neighbour Numbers',                 color: '#BFDBFE', icon: '🔢', generators: [G2.nachbarzahlen] },
      { key: 'g2_stellenwert', name: 'Tens and Ones',                     color: '#93C5FD', icon: '📊', generators: [G2.stellenwert2, G2.composeNumber] },
      { key: 'g2_zerlegung',   name: 'Number Decomposition',              color: '#BFDBFE', icon: '🧩', generators: [G2.zahlzerlegung2, G2.composeNumber] },
      { key: 'g2_zahlstr',     name: 'Number Line',                       color: '#BFDBFE', icon: '📏', generators: [G2.sequence, G2.missing100, G2.numberLineG2] },
      { key: 'g2_compare_sign', name: 'Comparison with Signs (< > =)',    color: '#93C5FD', icon: '⚖️', generators: [G2.compare100] },
    ]},
    { key: 'g2_addition', name: 'Addition', color: '#10B981', icon: '➕', topics: [
      { key: 'g2_add_kopf',  name: 'Mental Addition',               color: '#34D399', icon: '🧠', generators: [G2.add100tens, G2.addOhne] },
      { key: 'g2_add_ohne',  name: 'Addition without Carrying',     color: '#6EE7B7', icon: '➕', generators: [G2.addOhne] },
      { key: 'g2_add_mit',   name: 'Addition with Carrying',        color: '#6EE7B7', icon: '➕', generators: [G2.addMit] },
      { key: 'g2_add3',      name: 'Adding Three Numbers',          color: '#A7F3D0', icon: '➕', generators: [G2.add3nums] },
      { key: 'g2_add_visual', name: 'Visual Addition (counting objects)', color: '#BBF7D0', icon: '🍎', generators: [G2.countAdd] },
      { key: 'g2_add_word',  name: 'Word Problems',                 color: '#D1FAE5', icon: '📖', generators: [G2.wordAddG2, G2.word1] },
      { key: 'g2_missing_add', name: 'Missing Addend',              color: '#6EE7B7', icon: '❓', generators: [G2.missingAddend, G2.missing100] },
    ]},
    { key: 'g2_subtraction', name: 'Subtraction', color: '#EF4444', icon: '➖', topics: [
      { key: 'g2_sub_kopf',  name: 'Mental Subtraction',              color: '#FCA5A5', icon: '🧠', generators: [G2.sub100tens, G2.subOhne] },
      { key: 'g2_sub_ohne',  name: 'Subtraction without Borrowing',   color: '#FCA5A5', icon: '➖', generators: [G2.subOhne] },
      { key: 'g2_sub_mit',   name: 'Subtraction with Borrowing',      color: '#F87171', icon: '➖', generators: [G2.subMit] },
      { key: 'g2_sub_visual', name: 'Visual Subtraction (counting objects)', color: '#FECACA', icon: '🍪', generators: [G2.countSub] },
      { key: 'g2_sub_word',  name: 'Word Problems',                   color: '#FEE2E2', icon: '📖', generators: [G2.wordSubG2, G2.word2] },
    ]},
    { key: 'g2_mul', name: 'Multiplication (basics)', color: '#F59E0B', icon: '✖️', topics: [
      { key: 'g2_mul_rep',    name: 'Multiplication as Repeated Addition', color: '#FCD34D', icon: '🔄', generators: [G2.mulRepeated] },
      { key: 'g2_mul_simple', name: 'Times Tables ×2, ×5, ×10',            color: '#FDE68A', icon: '✖️', generators: [G2.mul2510, G2.mul2510b] },
      { key: 'g2_mul_visual', name: 'Visual Multiplication (arrays)',       color: '#FEF3C7', icon: '🎯', generators: [G2.mulVisual, G2.mulGroup] },
      { key: 'g2_mul_group',  name: 'Counting Groups',                     color: '#FEF3C7', icon: '🎯', generators: [G2.mulGroup, G2.wordMulG2] },
    ]},
    { key: 'g2_div', name: 'Division (basics)', color: '#8B5CF6', icon: '➗', topics: [
      { key: 'g2_div_share',  name: 'Equal Sharing',                        color: '#A78BFA', icon: '🍕', generators: [G2.divShare, G2.divVisual] },
      { key: 'g2_div_visual', name: 'Visual Division (sharing)',             color: '#C4B5FD', icon: '🍬', generators: [G2.divVisual] },
      { key: 'g2_div_rel',    name: 'Multiplication–Division Relationship', color: '#C4B5FD', icon: '🔗', generators: [G2.divMulRel] },
      { key: 'g2_div_simple', name: 'Simple Division',                      color: '#DDD6FE', icon: '➗', generators: [G2.div2510, G2.wordDivG2] },
    ]},
    { key: 'g2_structure', name: 'Number Structure & Thinking', color: '#06B6D4', icon: '🧩', topics: [
      { key: 'g2_seq',     name: 'Number Sequences',            color: '#22D3EE', icon: '🔢', generators: [G2.sequence, G2.numberLineG2] },
      { key: 'g2_pattern', name: 'Shape & Colour Patterns',     color: '#67E8F9', icon: '🟦', generators: [G2.patternG2] },
      { key: 'g2_missing', name: 'Patterns · Missing Numbers',  color: '#67E8F9', icon: '❓', generators: [G2.missing100, G2.evenOdd, G2.missingAddend] },
      { key: 'g2_round',   name: 'Calculation Strategies',      color: '#A5F3FC', icon: '🎯', generators: [G2.rounding10, G2.missing100] },
    ]},
    { key: 'g2_measure', name: 'Measurements', color: '#EC4899', icon: '📏', topics: [
      { key: 'g2_length',  name: 'Length (cm, m)',   color: '#F9A8D4', icon: '📏', generators: [G2.units] },
      { key: 'g2_weight',  name: 'Weight (g, kg)',   color: '#F9A8D4', icon: '⚖️', generators: [G2.weightGKg] },
      { key: 'g2_clock',   name: 'Clock Reading',    color: '#FBCFE8', icon: '🕐', generators: [G2.clock2] },
      { key: 'g2_money',   name: 'Euro and Cents',   color: '#FCE7F3', icon: '💶', generators: [G2.moneyEuroCent, G2.wordMoneyG2] },
    ]},
    { key: 'g2_geometry', name: 'Geometry', color: '#84CC16', icon: '🔷', topics: [
      { key: 'g2_shapes',   name: 'Flat Shapes',     color: '#BEF264', icon: '🔷', generators: [G2.shapeBasic] },
      { key: 'g2_strecken', name: 'Measuring Lines', color: '#D9F99D', icon: '📐', generators: [G2.perimeterSimple] },
    ]},
    { key: 'g2_perimeter', name: 'Perimeter (basics)', color: '#F97316', icon: '📐', topics: [
      { key: 'g2_perim', name: 'Simple Perimeter', color: '#FB923C', icon: '📐', generators: [G2.perimeterSimple] },
    ]},
    { key: 'g2_data', name: 'Data & Charts', color: '#A855F7', icon: '📊', topics: [
      { key: 'g2_tables',   name: 'Tables',   color: '#C084FC', icon: '📊', generators: [G2.word1, G2.word4] },
      { key: 'g2_diagrams', name: 'Charts',   color: '#D8B4FE', icon: '📈', generators: [G2.chartG2] },
    ]},
    { key: 'g2_word', name: 'Word Problems', color: '#64748B', icon: '📖', topics: [
      { key: 'g2_word_add',   name: 'Addition Problems',        color: '#94A3B8', icon: '📖', generators: [G2.wordAddG2, G2.word1] },
      { key: 'g2_word_sub',   name: 'Subtraction Problems',     color: '#CBD5E1', icon: '📖', generators: [G2.wordSubG2, G2.word2] },
      { key: 'g2_word_mul',   name: 'Multiplication Problems',  color: '#94A3B8', icon: '📖', generators: [G2.wordMulG2, G2.word3] },
      { key: 'g2_word_div',   name: 'Division Problems',        color: '#CBD5E1', icon: '📖', generators: [G2.wordDivG2] },
      { key: 'g2_word_money', name: 'Money Problems',           color: '#94A3B8', icon: '📖', generators: [G2.wordMoneyG2, G2.word4] },
      { key: 'g2_word_time',  name: 'Time Problems',            color: '#CBD5E1', icon: '📖', generators: [G2.wordTimeG2] },
    ]},
  ],
  3: [
    { key: 'g3_numbers', name: 'Numbers & Number System (0–1000)', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g3_read_write',  name: 'Reading & Writing Numbers',       color: '#60A5FA', icon: '🔢', generators: [G3.compare1000, G3.pred1000, G3.succ1000] },
      { key: 'g3_compare_t',  name: 'Comparing & Ordering',             color: '#93C5FD', icon: '🔢', generators: [G3.compare1000] },
      { key: 'g3_place_val',  name: 'Place Value & Decomposition',      color: '#BFDBFE', icon: '🧱', generators: [G3.decompose, G3.compose, G3.placeVal1000] },
      { key: 'g3_neighbors',  name: 'Neighbors & Number Line',          color: '#DBEAFE', icon: '📊', generators: [G3.pred1000, G3.succ1000] },
      { key: 'g3_stellenwert', name: '🎮 Place Value Blocks',           color: '#6366F1', icon: '🧱', generators: [] },
      { key: 'g3_compose',    name: '🎮 Compose Number from Blocks',    color: '#818CF8', icon: '🧱', generators: [] },
      { key: 'g3_zahlstr',    name: '🎮 Number Line 0–1000',            color: '#14B8A6', icon: '📊', generators: [] },
    ]},
    { key: 'g3_add_cat', name: 'Addition', color: '#10B981', icon: '➕', topics: [
      { key: 'g3_add_mental',  name: 'Mental Addition to 1000',         color: '#34D399', icon: '➕', generators: [G3.add1000, G3.add1000b] },
      { key: 'g3_add_written', name: 'Written Addition & 3 Addends',    color: '#6EE7B7', icon: '➕', generators: [G3.writtenAdd, G3.add3nums] },
      { key: 'g3_add_obj',    name: '🎮 Addition with Objects',         color: '#4ADE80', icon: '➕', generators: [] },
    ]},
    { key: 'g3_sub_cat', name: 'Subtraction', color: '#EF4444', icon: '➖', topics: [
      { key: 'g3_sub_mental',  name: 'Mental Subtraction to 1000',      color: '#F87171', icon: '➖', generators: [G3.sub1000, G3.sub1000b] },
      { key: 'g3_sub_written', name: 'Written Subtraction',             color: '#FCA5A5', icon: '➖', generators: [G3.writtenSub] },
      { key: 'g3_sub_obj',    name: '🎮 Subtraction with Objects',      color: '#F87171', icon: '➖', generators: [] },
      { key: 'g3_nl_sub',     name: '🎮 Number Line Backward Jumps',   color: '#FCA5A5', icon: '📊', generators: [] },
    ]},
    { key: 'g3_mul_cat', name: 'Multiplication', color: '#F59E0B', icon: '✖️', topics: [
      { key: 'g3_mul_table',   name: 'Multiplication Table',            color: '#FBBF24', icon: '✖️', generators: [G3.mul, G3.mulB, G3.missingMul] },
      { key: 'g3_mul_groups',  name: 'Repeated Addition & Larger',      color: '#FDE68A', icon: '✖️', generators: [G3.mulRepeated, G3.mulLarge] },
      { key: 'g3_mul_grp',    name: '🎮 Grouping (Multiplication)',     color: '#FCD34D', icon: '✖️', generators: [] },
      { key: 'g3_mul_arr',    name: '🎮 Array Model',                   color: '#FDE68A', icon: '✖️', generators: [] },
    ]},
    { key: 'g3_div_cat', name: 'Division', color: '#8B5CF6', icon: '➗', topics: [
      { key: 'g3_div_basic',   name: 'Basic Division',                  color: '#A78BFA', icon: '➗', generators: [G3.div, G3.divB] },
      { key: 'g3_div_rem',     name: 'Division with Remainder',         color: '#C4B5FD', icon: '➗', generators: [G3.divRelMul, G3.divRemainder] },
      { key: 'g3_div_shr',    name: '🎮 Sharing Objects onto Plates',  color: '#DDD6FE', icon: '➗', generators: [] },
    ]},
    { key: 'g3_patterns_cat', name: 'Number Patterns & Logic', color: '#64748B', icon: '🔗', topics: [
      { key: 'g3_sequence_t',  name: 'Number Sequences',                color: '#94A3B8', icon: '🔗', generators: [G3.sequence] },
      { key: 'g3_missing_t',  name: 'Missing Numbers',                  color: '#CBD5E1', icon: '🔍', generators: [G3.missingMul] },
      { key: 'g3_pattern',    name: '🎮 Pattern Blocks – Interactive',  color: '#7C3AED', icon: '🧩', generators: [] },
    ]},
    { key: 'g3_units_cat', name: 'Measurement', color: '#06B6D4', icon: '📏', topics: [
      { key: 'g3_length_t',    name: 'Length (mm, cm, m, km)',          color: '#67E8F9', icon: '📏', generators: [G3.units] },
      { key: 'g3_weight_t',    name: 'Weight (g, kg)',                  color: '#22D3EE', icon: '⚖️', generators: [G3.units] },
      { key: 'g3_time_t',      name: 'Time (hours, minutes)',           color: '#06B6D4', icon: '🕐', generators: [G3.clock3, G3.units] },
      { key: 'g3_money_t',     name: 'Money (euro, cents)',             color: '#0891B2', icon: '💰', generators: [G3.word1] },
      { key: 'g3_laenge',     name: '🎮 Measure with Ruler',            color: '#0EA5E9', icon: '📏', generators: [] },
      { key: 'g3_strecken',   name: '🎮 Draw a Line Segment',           color: '#38BDF8', icon: '✏️', generators: [] },
      { key: 'g3_zeit',       name: '🎮 Read the Clock',                color: '#7DD3FC', icon: '🕐', generators: [] },
      { key: 'g3_geld',       name: '🎮 Money Calculator',              color: '#BAE6FD', icon: '💰', generators: [] },
      { key: 'g3_scale',      name: '🎮 Balance Scale – Weight',        color: '#60A5FA', icon: '⚖️', generators: [] },
    ]},
    { key: 'g3_geo_cat', name: 'Geometry', color: '#EC4899', icon: '📐', topics: [
      { key: 'g3_shapes_t',    name: 'Shapes & Properties',             color: '#F472B6', icon: '🔷', generators: [G3.shapeProp, G3.perimCalc] },
      { key: 'g3_angles_t',    name: 'Right Angles',                    color: '#FB7185', icon: '📐', generators: [G3.shapeProp] },
      { key: 'g3_shapes_vis',  name: '🎮 Shape Recognition',            color: '#F43F5E', icon: '🔷', generators: [] },
      { key: 'g3_geo_messen',  name: '🎮 Measure Line Segments',        color: '#FB923C', icon: '📏', generators: [] },
      { key: 'g3_rightangle',  name: '🎮 Angle Types',                  color: '#FDA4AF', icon: '📐', generators: [] },
    ]},
    { key: 'g3_perim_cat', name: 'Perimeter', color: '#F97316', icon: '📐', topics: [
      { key: 'g3_perim_text',  name: 'Perimeter of Rectangles & Squares', color: '#FB923C', icon: '📐', generators: [G3.perimCalc] },
      { key: 'g3_perim',      name: '🎮 Perimeter on Grid',             color: '#FDBA74', icon: '📐', generators: [] },
      { key: 'g3_perim_vis',  name: '🎮 Perimeter Concept',             color: '#FED7AA', icon: '📐', generators: [] },
    ]},
    { key: 'g3_area_cat', name: 'Area', color: '#84CC16', icon: '⬜', topics: [
      { key: 'g3_area_text',   name: 'Area (rectangles)',               color: '#BEF264', icon: '⬜', generators: [G3.areaCalc] },
      { key: 'g3_area',       name: '🎮 Count Squares on Grid',         color: '#D9F99D', icon: '⬜', generators: [] },
      { key: 'g3_area_cmp',   name: '🎮 Compare Areas',                 color: '#A3E635', icon: '⬜', generators: [] },
    ]},
    { key: 'g3_data_cat', name: 'Data & Charts', color: '#A855F7', icon: '📊', topics: [
      { key: 'g3_tables_t',    name: 'Tables & Data',                   color: '#C084FC', icon: '📊', generators: [G3.barChartRead] },
      { key: 'g3_barchart',   name: '🎮 Bar Chart Reading',             color: '#E9D5FF', icon: '📊', generators: [] },
    ]},
    { key: 'g3_word_cat', name: 'Word Problems', color: '#DC2626', icon: '📖', topics: [
      { key: 'g3_word_add_t',  name: 'Addition Word Problems',          color: '#F87171', icon: '📖', generators: [G3.word1, G3.add1000] },
      { key: 'g3_word_sub_t',  name: 'Subtraction Word Problems',       color: '#FCA5A5', icon: '📖', generators: [G3.word1, G3.sub1000] },
      { key: 'g3_word_mul_t',  name: 'Multiplication Word Problems',    color: '#F87171', icon: '📖', generators: [G3.word2] },
      { key: 'g3_word_div_t',  name: 'Division Word Problems',          color: '#FCA5A5', icon: '📖', generators: [G3.word3] },
      { key: 'g3_word_multi_t', name: 'Multi-step Problems',            color: '#F87171', icon: '📖', generators: [G3.word1, G3.word2, G3.word3] },
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
      { key: 'geo', name: 'Perimeter & Area', color: '#FBBF24', icon: '📐', generators: [G4.geometry, G4.geometryB] },
      { key: 'angles', name: 'Angles', color: '#EC4899', icon: '📐', generators: [G4.winkelTyp, G4.winkelKlasse, G4.dreieckWinkel] },
      { key: 'symmetry_en', name: 'Symmetry', color: '#BE185D', icon: '🪞', generators: [G4.symmetrieAchsen] },
      { key: 'units', name: 'Units', color: '#F59E0B', icon: '📏', generators: [G4.units] },
    ]},
    { key: 'g4_word', name: 'Word Problems', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Story Problems', color: '#EF4444', icon: '📖', generators: [G4.word1, G4.word2, G4.word3] },
    ]},
  ],
  5: [
    { key: 'g5_vis_numbers', name: 'Visual: Numbers & Place Value', color: '#3B82F6', icon: '🖼️', topics: [
      { key: 'g5_place_million',    name: 'Place Value Table (millions)',          color: '#60A5FA', icon: '🔢', generators: [G5.readLargeNum] },
      { key: 'g5_number_line_vis',  name: 'Number Line – large numbers',           color: '#93C5FD', icon: '📏', generators: [G5.largeNumbers] },
      { key: 'g5_rounding_vis',     name: 'Rounding – visual',                     color: '#2563EB', icon: '🎯', generators: [G5.roundHundreds] },
      { key: 'g5_nl_arith',         name: 'Number Line Arithmetic',                color: '#1D4ED8', icon: '➕', generators: [G5.addLarge, G5.subLarge] },
    ]},
    { key: 'g5_vis_ops', name: 'Visual: Operations', color: '#10B981', icon: '🖼️', topics: [
      { key: 'g5_mul_array',        name: 'Multiplication Array',                  color: '#6EE7B7', icon: '✖️', generators: [G5.mulTwoDigit] },
      { key: 'g5_div_share',        name: 'Division – sharing',                    color: '#10B981', icon: '➗', generators: [G5.divLong] },
      { key: 'g5_balance_vis',      name: 'Balance Scale',                         color: '#059669', icon: '⚖️', generators: [G5.addLarge] },
    ]},
    { key: 'g5_vis_frac', name: 'Visual: Fractions & Decimals', color: '#6366F1', icon: '🖼️', topics: [
      { key: 'g5_frac_compare_vis', name: 'Fraction Comparison – visual',          color: '#818CF8', icon: '½', generators: [G5.fractionAdd] },
      { key: 'g5_frac_equiv_vis',   name: 'Equivalent Fractions – visual',         color: '#A5B4FC', icon: '🔄', generators: [G5.fractionAdd] },
      { key: 'g5_decimal_place_vis',name: 'Decimal Place Value – visual',          color: '#6366F1', icon: '🔟', generators: [G5.decimalRead] },
      { key: 'g5_decimal_line_vis', name: 'Decimal Number Line',                   color: '#4F46E5', icon: '📏', generators: [G5.decimalRead] },
    ]},
    { key: 'g5_vis_geo', name: 'Visual: Geometry', color: '#EAB308', icon: '🖼️', topics: [
      { key: 'g5_shape_vis',        name: 'Shape Properties – visual',             color: '#FDE047', icon: '🔷', generators: [G5.geoRectArea] },
      { key: 'g5_angle_vis',        name: 'Angle Classification – visual',         color: '#EAB308', icon: '∠', generators: [G4.winkelTyp] },
      { key: 'g5_perim_vis',        name: 'Perimeter – visual',                    color: '#CA8A04', icon: '🔲', generators: [G5.geoRectPerimeter] },
      { key: 'g5_area_vis',         name: 'Area – grid',                           color: '#A16207', icon: '⬛', generators: [G5.geoRectArea] },
      { key: 'g5_symmetry_vis',     name: 'Symmetry – reflection',                 color: '#854D0E', icon: '🪞', generators: [G4.symmetrieAchsen] },
    ]},
    { key: 'g5_vis_data', name: 'Visual: Data & Units', color: '#10B981', icon: '🖼️', topics: [
      { key: 'g5_barchart_vis',     name: 'Bar Chart Reading',                     color: '#6EE7B7', icon: '📊', generators: [G5.chartRead] },
      { key: 'g5_unit_convert',     name: 'Unit Conversion – visual',              color: '#10B981', icon: '📏', generators: [G5.unitLength] },
    ]},
    { key: 'g5_zahlen', name: 'Numbers & Number System', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g5_z_million',  name: 'Natural Numbers up to 1,000,000',            color: '#60A5FA', icon: '🔢', generators: [G5.largeNumbers, G5.readLargeNum, G5.compareNums] },
      { key: 'g5_z_read',    name: 'Reading and Writing Numbers',                  color: '#93C5FD', icon: '📝', generators: [G5.readLargeNum, G5.largeNumbers] },
      { key: 'g5_z_compare', name: 'Comparing Numbers  (< · > · =)',               color: '#2563EB', icon: '⚖️', generators: [G5.compareNums, G5.largeNumbers] },
      { key: 'g5_z_order',   name: 'Ordering Numbers',                             color: '#1D4ED8', icon: '📊', generators: [G5.compareNums, G5.largeNumbers, G5.readLargeNum] },
      { key: 'g5_z_place',   name: 'Place Value',                                  color: '#3B82F6', icon: '🧱', generators: [G5.readLargeNum, G5.largeNumbers] },
      { key: 'g5_z_expand',  name: 'Expanded Form',                               color: '#60A5FA', icon: '🧩', generators: [G5.readLargeNum, G5.largeNumbers] },
      { key: 'g5_z_line',    name: 'Number Line',                                  color: '#93C5FD', icon: '📏', generators: [G5.largeNumbers, G5.compareNums] },
      { key: 'g5_z_neighbor','name': 'Neighboring Numbers',                        color: '#BFDBFE', icon: '↔️', generators: [G5.largeNumbers, G5.addLarge] },
    ]},
    { key: 'g5_round', name: 'Rounding & Estimation', color: '#06B6D4', icon: '🎯', topics: [
      { key: 'g5_rnd_10',    name: 'Rounding to Tens',                             color: '#22D3EE', icon: '🎯', generators: [G5.roundHundreds, G5.decimalRound] },
      { key: 'g5_rnd_100',   name: 'Rounding to Hundreds',                         color: '#06B6D4', icon: '🎯', generators: [G5.roundHundreds] },
      { key: 'g5_rnd_1000',  name: 'Rounding to Thousands',                        color: '#0891B2', icon: '🎯', generators: [G5.largeNumbers, G5.roundHundreds] },
      { key: 'g5_rnd_large', name: 'Rounding to Larger Places (10,000 · 100,000)', color: '#0E7490', icon: '🎯', generators: [G5.largeNumbers, G5.roundHundreds] },
      { key: 'g5_rnd_dec',   name: 'Rounding Decimals',                            color: '#155E75', icon: '🤔', generators: [G5.decimalRound] },
    ]},
    { key: 'g5_add', name: 'Addition', color: '#EF4444', icon: '➕', topics: [
      { key: 'g5_add_mental', name: 'Mental Addition',                             color: '#FCA5A5', icon: '🧠', generators: [G5.addLarge, G5.addComplement100k] },
      { key: 'g5_add_written','name': 'Written Addition',                          color: '#EF4444', icon: '➕', generators: [G5.addLarge] },
      { key: 'g5_add_compl',  name: 'Complement to 100,000',                      color: '#DC2626', icon: '✅', generators: [G5.addComplement100k] },
      { key: 'g5_add_word',   name: 'Word Problem (Addition)',                     color: '#B91C1C', icon: '📖', generators: [G5.wordAdd, G5.wordFence] },
    ]},
    { key: 'g5_sub', name: 'Subtraction', color: '#F97316', icon: '➖', topics: [
      { key: 'g5_sub_mental', name: 'Mental Subtraction',                          color: '#FDBA74', icon: '🧠', generators: [G5.subLarge] },
      { key: 'g5_sub_written','name': 'Written Subtraction',                       color: '#F97316', icon: '➖', generators: [G5.subLarge] },
      { key: 'g5_sub_check',  name: 'Checking (Proof)',                            color: '#EA580C', icon: '✅', generators: [G5.subLarge, G5.addComplement100k] },
      { key: 'g5_sub_word',   name: 'Word Problem (Subtraction)',                  color: '#C2410C', icon: '📖', generators: [G5.wordSub] },
    ]},
    { key: 'g5_mul', name: 'Multiplication', color: '#10B981', icon: '✖️', topics: [
      { key: 'g5_mul_mental', name: 'Mental Multiplication',                       color: '#6EE7B7', icon: '🧠', generators: [G5.orderOfOps, G5.mulPow10] },
      { key: 'g5_mul_written','name': 'Written Multiplication (multi-digit)',       color: '#10B981', icon: '✖️', generators: [G5.mulTwoDigit, G5.mulThreeOne] },
      { key: 'g5_mul_round',  name: 'Multiplying Round Numbers  (20 × 30)',        color: '#059669', icon: '🔄', generators: [G5.mulPow10, G5.orderOfOps] },
      { key: 'g5_mul_pow10',  name: '×10, ×100, ×1000',                            color: '#047857', icon: '🔟', generators: [G5.mulPow10] },
      { key: 'g5_mul_word',   name: 'Word Problem (Multiplication)',               color: '#065F46', icon: '📖', generators: [G5.wordMul] },
    ]},
    { key: 'g5_div', name: 'Division', color: '#8B5CF6', icon: '➗', topics: [
      { key: 'g5_div_mental', name: 'Mental Division',                             color: '#C4B5FD', icon: '🧠', generators: [G5.divLong, G5.divPow10] },
      { key: 'g5_div_rem',    name: 'Division with Remainder',                     color: '#A78BFA', icon: '➗', generators: [G5.divRemainder] },
      { key: 'g5_div_written','name': 'Written Division',                          color: '#8B5CF6', icon: '📝', generators: [G5.divLong] },
      { key: 'g5_div_pow10',  name: '÷10, ÷100',                                  color: '#7C3AED', icon: '🔟', generators: [G5.divPow10] },
      { key: 'g5_div_word',   name: 'Word Problem (Division)',                     color: '#6D28D9', icon: '📖', generators: [G5.wordDiv] },
    ]},
    { key: 'g5_frac', name: 'Fractions', color: '#6366F1', icon: '½', topics: [
      { key: 'g5_frac_concept', name: 'Numerator and Denominator',                 color: '#818CF8', icon: '½', generators: [G5.fractionAdd, G5.fractionSub] },
      { key: 'g5_frac_mixed',   name: 'Mixed Numbers',                             color: '#A5B4FC', icon: '🍕', generators: [G5.mixedNumber, G5.fractionAdd] },
      { key: 'g5_frac_compare', name: 'Comparing Fractions',                       color: '#6366F1', icon: '⚖️', generators: [G5.fractionAdd, G5.fractionSub, G5.fractionDiff] },
      { key: 'g5_frac_simplify','name': 'Simplifying Fractions',                   color: '#4F46E5', icon: '✂️', generators: [G5.gcd, G5.lcm] },
      { key: 'g5_frac_equiv',   name: 'Equivalent Fractions  (2/4 = 1/2)',         color: '#4338CA', icon: '🔄', generators: [G5.lcm, G5.fractionAdd] },
      { key: 'g5_frac_addsub',  name: 'Adding and Subtracting Fractions',          color: '#3730A3', icon: '➕', generators: [G5.fractionAdd, G5.fractionSub, G5.fractionDiff] },
    ]},
    { key: 'g5_decimal', name: 'Decimal Numbers', color: '#14B8A6', icon: '🔟', topics: [
      { key: 'g5_dec_concept', name: 'Reading and Writing Decimals',               color: '#5EEAD4', icon: '📝', generators: [G5.decimalRead] },
      { key: 'g5_dec_compare', name: 'Comparing Decimals',                         color: '#14B8A6', icon: '⚖️', generators: [G5.decimalCompare, G5.decimalRead] },
      { key: 'g5_dec_line',    name: 'Decimals on the Number Line',                color: '#0D9488', icon: '📏', generators: [G5.decimalCompare, G5.decimalRead] },
      { key: 'g5_dec_add',     name: 'Adding Decimals',                            color: '#0F766E', icon: '➕', generators: [G5.decimalAdd] },
      { key: 'g5_dec_sub',     name: 'Subtracting Decimals',                       color: '#115E59', icon: '➖', generators: [G5.decimalSub] },
    ]},
    { key: 'g5_units', name: 'Units of Measurement', color: '#F59E0B', icon: '📏', topics: [
      { key: 'g5_units_len',  name: 'Length  (km · m · cm · mm)',                  color: '#FCD34D', icon: '📏', generators: [G5.unitLength] },
      { key: 'g5_units_mass', name: 'Weight/Mass  (t · kg · g)',                   color: '#FBBF24', icon: '⚖️', generators: [G5.unitMass] },
      { key: 'g5_units_time', name: 'Time  (h · min · s)',                         color: '#F59E0B', icon: '⏱️', generators: [G5.unitTime] },
      { key: 'g5_units_area', name: 'Area Units  (m² · cm²)',                      color: '#D97706', icon: '⬜', generators: [G5.geoRectArea, G5.squareAreaG5] },
      { key: 'g5_units_money','name': 'Money  (€ · cents)',                        color: '#B45309', icon: '💶', generators: [G5.unitMoney, G5.wordDiscount] },
    ]},
    { key: 'g5_geo', name: 'Geometry', color: '#EAB308', icon: '📐', topics: [
      { key: 'g5_geo_shapes', name: 'Properties of Shapes',                        color: '#FDE047', icon: '🔷', generators: [G5.geoRectArea, G5.geoRectPerimeter, G5.triangleAreaG5] },
      { key: 'g5_geo_coord',  name: 'Coordinate System',                           color: '#EAB308', icon: '🗺️', generators: [G5.coordRead] },
      { key: 'g5_geo_nets',   name: 'Nets and Views',                              color: '#CA8A04', icon: '📦', generators: [G5.geoRectArea, G5.squareAreaG5] },
    ]},
    { key: 'g5_angles', name: 'Angles', color: '#6366F1', icon: '∠', topics: [
      { key: 'g5_ang_concept', name: 'Angle Concepts',                             color: '#818CF8', icon: '∠', generators: [G4.winkelTyp, G4.winkelKlasse] },
      { key: 'g5_ang_types',   name: 'Types of Angles  (acute · right · obtuse)',  color: '#6366F1', icon: '📐', generators: [G4.winkelKlasse, G4.winkelTyp] },
      { key: 'g5_ang_measure', name: 'Measuring Angles',                           color: '#4F46E5', icon: '📏', generators: [G4.winkelTyp, G4.dreieckWinkel] },
      { key: 'g5_ang_draw',    name: 'Drawing Angles',                             color: '#4338CA', icon: '✏️', generators: [G4.dreieckWinkel, G4.winkelTyp] },
    ]},
    { key: 'g5_perim', name: 'Perimeter', color: '#34D399', icon: '🔲', topics: [
      { key: 'g5_peri_shapes', name: 'Perimeter of Shapes',                        color: '#6EE7B7', icon: '🔲', generators: [G5.geoRectPerimeter, G5.geoSquarePerimeter, G5.wordFence] },
      { key: 'g5_peri_rect',   name: 'Rectangle and Square Perimeter',            color: '#34D399', icon: '⬜', generators: [G5.geoRectPerimeter, G5.geoSquarePerimeter] },
      { key: 'g5_peri_comp',   name: 'Compound Shapes',                           color: '#059669', icon: '🔷', generators: [G5.geoRectPerimeter, G5.wordFence] },
    ]},
    { key: 'g5_area', name: 'Area', color: '#FBBF24', icon: '⬛', topics: [
      { key: 'g5_area_rect',   name: 'Area of a Rectangle',                        color: '#FBBF24', icon: '⬜', generators: [G5.geoRectArea] },
      { key: 'g5_area_square', name: 'Area of a Square',                           color: '#F59E0B', icon: '🟨', generators: [G5.squareAreaG5] },
      { key: 'g5_area_tri',    name: 'Area of a Triangle',                         color: '#D97706', icon: '🔺', generators: [G5.triangleAreaG5] },
      { key: 'g5_area_conv',   name: 'Converting Area Units  (m² ↔ cm²)',          color: '#B45309', icon: '🔄', generators: [G5.geoRectArea, G5.squareAreaG5] },
    ]},
    { key: 'g5_symmetry', name: 'Reflection & Symmetry', color: '#EC4899', icon: '🔄', topics: [
      { key: 'g5_sym_axis',    name: 'Lines of Symmetry',                          color: '#F9A8D4', icon: '🔄', generators: [G4.symmetrieAchsen] },
      { key: 'g5_sym_reflect', name: 'Reflecting Shapes',                          color: '#EC4899', icon: '🪞', generators: [G4.symmetrieAchsen] },
    ]},
    { key: 'g5_stats', name: 'Charts & Statistics', color: '#10B981', icon: '📊', topics: [
      { key: 'g5_stat_read',  name: 'Reading and Interpreting Charts',             color: '#6EE7B7', icon: '📊', generators: [G5.chartRead] },
      { key: 'g5_stat_mean',  name: 'Mean (Average)',                              color: '#10B981', icon: '📈', generators: [G5.calcMean, G5.mean] },
      { key: 'g5_stat_table', name: 'Tables and Frequencies',                      color: '#059669', icon: '📋', generators: [G5.chartRead, G5.calcMean] },
    ]},
    { key: 'g5_word', name: 'Word Problems', color: '#EF4444', icon: '📖', topics: [
      { key: 'g5_word_add',   name: 'Word Problems · Addition',                    color: '#FCA5A5', icon: '➕', generators: [G5.wordAdd, G5.wordFence] },
      { key: 'g5_word_sub',   name: 'Word Problems · Subtraction',                 color: '#F87171', icon: '➖', generators: [G5.wordSub] },
      { key: 'g5_word_mul',   name: 'Word Problems · Multiplication',              color: '#EF4444', icon: '✖️', generators: [G5.wordMul] },
      { key: 'g5_word_div',   name: 'Word Problems · Division',                    color: '#DC2626', icon: '➗', generators: [G5.wordDiv] },
      { key: 'g5_word_travel',name: 'Travel & Speed Problems',                     color: '#B91C1C', icon: '🚂', generators: [G5.wordTravel] },
      { key: 'g5_word_time',  name: 'Time Word Problems',                          color: '#991B1B', icon: '⏱️', generators: [G5.unitTime, G5.wordTravel] },
      { key: 'g5_word_money', name: 'Money Word Problems',                         color: '#7F1D1D', icon: '💶', generators: [G5.wordDiscount, G5.unitMoney, G5.percentWord] },
    ]},
    { key: 'g5_volume', name: 'Volume', color: '#0EA5E9', icon: '📦', topics: [
      { key: 'g5_vol_cube',    name: 'Volume of a Cube',                           color: '#38BDF8', icon: '🟦', generators: [G5.volumeCube] },
      { key: 'g5_vol_cuboid',  name: 'Volume of a Rectangular Prism',              color: '#0EA5E9', icon: '📦', generators: [G5.volumeCuboid] },
      { key: 'g5_vol_word',    name: 'Volume Word Problems',                       color: '#0284C7', icon: '📖', generators: [G5.volumeWord] },
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
      { key: 'g1_count',   name: 'Zahlen erkennen · Zählen', color: '#60A5FA', icon: '🔢', generators: [G1.zaehlen] },
      { key: 'g1_visual',  name: 'Punkte · Würfel · Finger · Bilder', color: '#93C5FD', icon: '🎲', generators: [G1.zaehlen, G1.coins, G1.fraction] },
      { key: 'g1_compare', name: 'Größer · Kleiner · Gleich · Ordnung', color: '#2563EB', icon: '⚖️', generators: [G1.compare, G1.numberOrder] },
      { key: 'g1_pos',     name: 'Vorgänger · Nachfolger · Zahlenstrahl', color: '#1D4ED8', icon: '📏', generators: [G1.vorgaenger, G1.nachfolger, G1.numberLine] },
    ]},
    { key: 'g1_zahlen20', name: 'Zahlen bis 20', color: '#06B6D4', icon: '🔟', topics: [
      { key: 'g1_num1120',       name: 'Zahlen 11–20', color: '#22D3EE', icon: '🔟', generators: [G1.zaehlen, G1.placeValue20] },
      { key: 'g1_place_value20', name: 'Zehner und Einer  (14 = 1Z + 4E)', color: '#0891B2', icon: '🧱', generators: [G1.placeValue20] },
    ]},
    { key: 'g1_rechnen', name: 'Rechnen', color: '#EF4444', icon: '➕', topics: [
      { key: 'g1_addpics', name: 'Addition mit Bildern', color: '#FCA5A5', icon: '🖼️', generators: [G2.countAdd, G1.zaehlen, G1.add10, G1.add10b] },
      { key: 'add10',      name: 'Addition bis 10', color: '#F87171', icon: '➕', generators: [G1.add10, G1.add10b, G1.missing10] },
      { key: 'add20',      name: 'Addition bis 20', color: '#DC2626', icon: '➕', generators: [G1.add20, G1.add20b] },
      { key: 'g1_subpics', name: 'Subtraktion mit Bildern', color: '#FCA5A5', icon: '🖼️', generators: [G2.countSub, G1.zaehlen, G1.sub10, G1.sub10b] },
      { key: 'sub10',      name: 'Subtraktion bis 10', color: '#EF4444', icon: '➖', generators: [G1.sub10, G1.sub10b] },
      { key: 'sub20',      name: 'Subtraktion bis 20', color: '#B91C1C', icon: '➖', generators: [G1.sub20, G1.sub20b] },
      { key: 'g1_tausch',  name: 'Tausch- und Umkehraufgaben', color: '#F59E0B', icon: '🔄', generators: [G1.tausch, G1.missing10, G1.missing10sub] },
    ]},
    { key: 'g1_struktur', name: 'Zahlen verstehen', color: '#8B5CF6', icon: '🧩', topics: [
      { key: 'g1_zahlzerlegung', name: 'Zahlzerlegung  (5 = 2 + 3)', color: '#A78BFA', icon: '🧩', generators: [G1.zahlzerlegung] },
      { key: 'g1_ergaenzen',     name: 'Ergänzen  (5 + __ = 10)', color: '#7C3AED', icon: '❓', generators: [G1.missing10, G1.missing10sub] },
      { key: 'g1_verdoppeln',    name: 'Verdoppeln  (3 + 3 = ?)', color: '#8B5CF6', icon: '✌️', generators: [G1.verdoppeln] },
      { key: 'g1_halbieren',     name: 'Halbieren  (6 → 3)', color: '#6D28D9', icon: '✂️', generators: [G1.halbieren] },
      { key: 'g1_sequence',      name: 'Zahlenfolgen  (2–4–6–?)', color: '#5B21B6', icon: '➡️', generators: [G1.sequence, G1.evenOdd] },
    ]},
    { key: 'g1_geo', name: 'Geometrie und Raumorientierung', color: '#10B981', icon: '🔷', topics: [
      { key: 'g1_shapes',  name: 'Formen (Kreis · Quadrat · Rechteck · Dreieck)', color: '#34D399', icon: '🔷', generators: [G1.shapes] },
      { key: 'g1_spatial', name: 'Richtungen (oben · unten · links · rechts)', color: '#059669', icon: '🧭', generators: [G1.spatial] },
      { key: 'g1_pattern', name: 'Muster (Farb- und Formmuster)', color: '#047857', icon: '🎨', generators: [G1.pattern] },
    ]},
    { key: 'g1_messen', name: 'Messen und Mengen', color: '#F59E0B', icon: '📏', topics: [
      { key: 'g1_laenger', name: 'Länge  (länger · kürzer)', color: '#FBBF24', icon: '📏', generators: [G1.laenger] },
      { key: 'g1_weight',  name: 'Gewicht  (schwer · leicht)', color: '#F59E0B', icon: '⚖️', generators: [G1.weight] },
      { key: 'g1_volume',  name: 'Menge  (voll · leer · mehr · weniger)', color: '#D97706', icon: '🥤', generators: [G1.volume] },
    ]},
    { key: 'g1_alltag', name: 'Mathematik im Alltag', color: '#FF2D78', icon: '🌍', topics: [
      { key: 'g1_clock',      name: 'Uhrzeit  (volle Stunden · halbe Stunden)', color: '#FF2D78', icon: '🕐', generators: [G1.clock1, G1.clockQuarter] },
      { key: 'g1_wochentage', name: 'Wochentage', color: '#FB7185', icon: '📅', generators: [G1.wochentage] },
      { key: 'g1_coins',      name: 'Münzen · Einfaches Einkaufen', color: '#FFD700', icon: '🪙', generators: [G1.coins] },
      { key: 'g1_data',       name: 'Einfache Daten (Tabellen)', color: '#E879F9', icon: '📊', generators: [G1.dataTable] },
      { key: 'word',          name: 'Sachaufgaben', color: '#C026D3', icon: '📖', generators: [G1.word1, G1.word2, G1.word3, G1.word4, G1.word5, G1.word6, G1.word7, G1.word8, G1.word9, G1.word10] },
    ]},
  ],
  2: [
    { key: 'g2_numbers', name: 'Zahlen und Zahlensystem', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g2_zahlen100',    name: 'Zahlen bis 100',                              color: '#60A5FA', icon: '💯', generators: [G2.vorgaenger2, G2.nachfolger2, G2.add100tens, G2.compare100, G2.composeNumber] },
      { key: 'g2_compare',     name: 'Zahlen lesen · schreiben · vergleichen · ordnen', color: '#93C5FD', icon: '⚖️', generators: [G2.nachbarzahlen, G2.stellenwert2, G2.compare100] },
      { key: 'g2_vorgaenger',  name: 'Vorgänger / Nachfolger',                      color: '#BFDBFE', icon: '◀▶', generators: [G2.vorgaenger2, G2.nachfolger2] },
      { key: 'g2_nachbarn',    name: 'Nachbarzahlen',                               color: '#BFDBFE', icon: '🔢', generators: [G2.nachbarzahlen] },
      { key: 'g2_stellenwert', name: 'Stellenwertsystem',                           color: '#93C5FD', icon: '📊', generators: [G2.stellenwert2, G2.composeNumber] },
      { key: 'g2_zerlegung',   name: 'Zahlzerlegung',                               color: '#BFDBFE', icon: '🧩', generators: [G2.zahlzerlegung2, G2.composeNumber] },
      { key: 'g2_zahlstr',     name: 'Zahlenstrahl',                                color: '#BFDBFE', icon: '📏', generators: [G2.sequence, G2.missing100, G2.numberLineG2] },
      { key: 'g2_compare_sign', name: 'Vergleichen mit Zeichen (< > =)',            color: '#93C5FD', icon: '⚖️', generators: [G2.compare100] },
    ]},
    { key: 'g2_addition', name: 'Addition', color: '#10B981', icon: '➕', topics: [
      { key: 'g2_add_kopf',  name: 'Kopfrechnen',                     color: '#34D399', icon: '🧠', generators: [G2.add100tens, G2.addOhne] },
      { key: 'g2_add_ohne',  name: 'Addition ohne Zehnerübergang',    color: '#6EE7B7', icon: '➕', generators: [G2.addOhne] },
      { key: 'g2_add_mit',   name: 'Addition mit Zehnerübergang',     color: '#6EE7B7', icon: '➕', generators: [G2.addMit] },
      { key: 'g2_add3',      name: 'Mehr Zahlen addieren',            color: '#A7F3D0', icon: '➕', generators: [G2.add3nums] },
      { key: 'g2_add_visual', name: 'Anschauliche Addition (Objekte zählen)', color: '#BBF7D0', icon: '🍎', generators: [G2.countAdd] },
      { key: 'g2_add_word',  name: 'Sachaufgaben',                    color: '#D1FAE5', icon: '📖', generators: [G2.wordAddG2, G2.word1] },
      { key: 'g2_missing_add', name: 'Ergänzen (Lücke füllen)',       color: '#6EE7B7', icon: '❓', generators: [G2.missingAddend, G2.missing100] },
    ]},
    { key: 'g2_subtraction', name: 'Subtraktion', color: '#EF4444', icon: '➖', topics: [
      { key: 'g2_sub_kopf',  name: 'Kopfrechnen',                          color: '#FCA5A5', icon: '🧠', generators: [G2.sub100tens, G2.subOhne] },
      { key: 'g2_sub_ohne',  name: 'Subtraktion ohne Zehnerübergang',      color: '#FCA5A5', icon: '➖', generators: [G2.subOhne] },
      { key: 'g2_sub_mit',   name: 'Subtraktion mit Zehnerübergang',       color: '#F87171', icon: '➖', generators: [G2.subMit] },
      { key: 'g2_sub_visual', name: 'Anschauliche Subtraktion (Objekte zählen)', color: '#FECACA', icon: '🍪', generators: [G2.countSub] },
      { key: 'g2_sub_word',  name: 'Sachaufgaben',                         color: '#FEE2E2', icon: '📖', generators: [G2.wordSubG2, G2.word2] },
    ]},
    { key: 'g2_mul', name: 'Multiplikation', color: '#F59E0B', icon: '✖️', topics: [
      { key: 'g2_mul_rep',    name: 'Multiplikation als wiederholte Addition', color: '#FCD34D', icon: '🔄', generators: [G2.mulRepeated] },
      { key: 'g2_mul_simple', name: 'Einmaleins (×2, ×5, ×10)',               color: '#FDE68A', icon: '✖️', generators: [G2.mul2510, G2.mul2510b] },
      { key: 'g2_mul_visual', name: 'Anschauliche Multiplikation (Arrays)',   color: '#FEF3C7', icon: '🎯', generators: [G2.mulVisual, G2.mulRepeated] },
      { key: 'g2_mul_group',  name: 'Bildhafte Aufgaben',                     color: '#FEF3C7', icon: '🎯', generators: [G2.mulGroup, G2.wordMulG2] },
    ]},
    { key: 'g2_div', name: 'Division', color: '#8B5CF6', icon: '➗', topics: [
      { key: 'g2_div_share',  name: 'Gleiches Aufteilen',              color: '#A78BFA', icon: '🍕', generators: [G2.divShare, G2.divVisual] },
      { key: 'g2_div_visual', name: 'Anschauliches Teilen',            color: '#C4B5FD', icon: '🍬', generators: [G2.divVisual] },
      { key: 'g2_div_rel',    name: 'Zusammenhang Mal und Geteilt',    color: '#C4B5FD', icon: '🔗', generators: [G2.divMulRel] },
      { key: 'g2_div_simple', name: 'Einfache Division',               color: '#DDD6FE', icon: '➗', generators: [G2.div2510, G2.wordDivG2] },
    ]},
    { key: 'g2_structure', name: 'Zahlenstruktur und Denken', color: '#06B6D4', icon: '🧩', topics: [
      { key: 'g2_seq',     name: 'Zahlenfolgen',                    color: '#22D3EE', icon: '🔢', generators: [G2.sequence, G2.numberLineG2] },
      { key: 'g2_pattern', name: 'Form- und Farbmuster',            color: '#67E8F9', icon: '🟦', generators: [G2.patternG2] },
      { key: 'g2_missing', name: 'Muster erkennen · fehlende Zahl', color: '#67E8F9', icon: '❓', generators: [G2.missing100, G2.evenOdd, G2.missingAddend] },
      { key: 'g2_round',   name: 'Rechenstrategien (Verdoppeln, Halbieren, Runden)', color: '#A5F3FC', icon: '🎯', generators: [G2.rounding10, G2.doubling, G2.halving] },
    ]},
    { key: 'g2_measure', name: 'Größen und Einheiten', color: '#EC4899', icon: '📏', topics: [
      { key: 'g2_length',  name: 'Länge (cm, m)',       color: '#F9A8D4', icon: '📏', generators: [G2.lengthConvert, G2.lengthMeasure] },
      { key: 'g2_weight',  name: 'Gewicht (g, kg)',     color: '#F9A8D4', icon: '⚖️', generators: [G2.weightGKg] },
      { key: 'g2_clock',   name: 'Uhr lesen',           color: '#FBCFE8', icon: '🕐', generators: [G2.clock2] },
      { key: 'g2_money',   name: 'Geld (Euro und Cent)',color: '#FCE7F3', icon: '💶', generators: [G2.moneyEuroCent, G2.wordMoneyG2] },
    ]},
    { key: 'g2_geometry', name: 'Geometrie', color: '#84CC16', icon: '🔷', topics: [
      { key: 'g2_shapes',   name: 'Formen',    color: '#BEF264', icon: '🔷', generators: [G2.shapeBasic] },
      { key: 'g2_strecken', name: 'Strecken messen (cm, m)', color: '#D9F99D', icon: '📐', generators: [G2.lengthConvert, G2.lengthMeasure] },
    ]},
    { key: 'g2_perimeter', name: 'Umfang', color: '#F97316', icon: '📐', topics: [
      { key: 'g2_perim', name: 'Umfang einfacher Figuren', color: '#FB923C', icon: '📐', generators: [G2.perimeterSimple] },
    ]},
    { key: 'g2_data', name: 'Daten und Diagramme', color: '#A855F7', icon: '📊', topics: [
      { key: 'g2_tables',   name: 'Tabellen',   color: '#C084FC', icon: '📊', generators: [G2.chartG2, G2.word4] },
      { key: 'g2_diagrams', name: 'Diagramme',  color: '#D8B4FE', icon: '📈', generators: [G2.chartG2, G2.word1] },
    ]},
    { key: 'g2_word', name: 'Sachaufgaben', color: '#64748B', icon: '📖', topics: [
      { key: 'g2_word_add',   name: 'Additionsaufgaben',       color: '#94A3B8', icon: '📖', generators: [G2.wordAddG2, G2.word1] },
      { key: 'g2_word_sub',   name: 'Subtraktionsaufgaben',    color: '#CBD5E1', icon: '📖', generators: [G2.wordSubG2, G2.word2] },
      { key: 'g2_word_mul',   name: 'Multiplikationsaufgaben', color: '#94A3B8', icon: '📖', generators: [G2.wordMulG2, G2.word3] },
      { key: 'g2_word_div',   name: 'Divisionsaufgaben',       color: '#CBD5E1', icon: '📖', generators: [G2.wordDivG2] },
      { key: 'g2_word_money', name: 'Geldaufgaben',            color: '#94A3B8', icon: '📖', generators: [G2.wordMoneyG2, G2.word4] },
      { key: 'g2_word_time',  name: 'Zeitaufgaben',            color: '#CBD5E1', icon: '📖', generators: [G2.wordTimeG2] },
    ]},
  ],
  3: [
    { key: 'g3_numbers', name: 'Zahlen und Zahlensystem (0–1000)', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g3_read_write',  name: 'Zahlen lesen & schreiben',             color: '#60A5FA', icon: '🔢', generators: [G3.compare1000, G3.pred1000, G3.succ1000] },
      { key: 'g3_compare_t',  name: 'Zahlen vergleichen & ordnen',           color: '#93C5FD', icon: '🔢', generators: [G3.compare1000] },
      { key: 'g3_place_val',  name: 'Stellenwert & Zerlegung',               color: '#BFDBFE', icon: '🧱', generators: [G3.decompose, G3.compose, G3.placeVal1000] },
      { key: 'g3_neighbors',  name: 'Nachbarzahlen & Zahlenstrahl',          color: '#DBEAFE', icon: '📊', generators: [G3.pred1000, G3.succ1000] },
      { key: 'g3_stellenwert', name: '🎮 Stellenwerttafel – Interaktiv',     color: '#6366F1', icon: '🧱', generators: [] },
      { key: 'g3_compose',    name: '🎮 Zahl aus Blöcken zusammensetzen',    color: '#818CF8', icon: '🧱', generators: [] },
      { key: 'g3_zahlstr',    name: '🎮 Zahlenstrahl 0–1000',                color: '#14B8A6', icon: '📊', generators: [] },
    ]},
    { key: 'g3_add_cat', name: 'Addition', color: '#10B981', icon: '➕', topics: [
      { key: 'g3_add_mental',  name: 'Kopfrechnen: Addition bis 1000',       color: '#34D399', icon: '➕', generators: [G3.add1000, G3.add1000b] },
      { key: 'g3_add_written', name: 'Schriftliche Addition & 3 Summanden',  color: '#6EE7B7', icon: '➕', generators: [G3.writtenAdd, G3.add3nums] },
      { key: 'g3_add_obj',    name: '🎮 Addition mit Gegenständen',          color: '#4ADE80', icon: '➕', generators: [] },
    ]},
    { key: 'g3_sub_cat', name: 'Subtraktion', color: '#EF4444', icon: '➖', topics: [
      { key: 'g3_sub_mental',  name: 'Kopfrechnen: Subtraktion bis 1000',    color: '#F87171', icon: '➖', generators: [G3.sub1000, G3.sub1000b] },
      { key: 'g3_sub_written', name: 'Schriftliche Subtraktion',             color: '#FCA5A5', icon: '➖', generators: [G3.writtenSub] },
      { key: 'g3_sub_obj',    name: '🎮 Subtraktion mit Gegenständen',       color: '#F87171', icon: '➖', generators: [] },
      { key: 'g3_nl_sub',     name: '🎮 Rückwärts auf dem Zahlenstrahl',    color: '#FCA5A5', icon: '📊', generators: [] },
    ]},
    { key: 'g3_mul_cat', name: 'Multiplikation', color: '#F59E0B', icon: '✖️', topics: [
      { key: 'g3_mul_table',   name: 'Einmaleins',                           color: '#FBBF24', icon: '✖️', generators: [G3.mul, G3.mulB, G3.missingMul] },
      { key: 'g3_mul_groups',  name: 'Wiederholte Addition & größere Zahlen', color: '#FDE68A', icon: '✖️', generators: [G3.mulRepeated, G3.mulLarge] },
      { key: 'g3_mul_grp',    name: '🎮 Gruppen (Multiplikation)',           color: '#FCD34D', icon: '✖️', generators: [] },
      { key: 'g3_mul_arr',    name: '🎮 Array-Modell',                       color: '#FDE68A', icon: '✖️', generators: [] },
    ]},
    { key: 'g3_div_cat', name: 'Division', color: '#8B5CF6', icon: '➗', topics: [
      { key: 'g3_div_basic',   name: 'Grundlegende Division',               color: '#A78BFA', icon: '➗', generators: [G3.div, G3.divB] },
      { key: 'g3_div_rem',     name: 'Division mit Rest',                   color: '#C4B5FD', icon: '➗', generators: [G3.divRelMul, G3.divRemainder] },
      { key: 'g3_div_shr',    name: '🎮 Gegenstände auf Teller verteilen',  color: '#DDD6FE', icon: '➗', generators: [] },
    ]},
    { key: 'g3_patterns_cat', name: 'Muster & Logik', color: '#64748B', icon: '🔗', topics: [
      { key: 'g3_sequence_t',  name: 'Zahlenfolgen',                        color: '#94A3B8', icon: '🔗', generators: [G3.sequence] },
      { key: 'g3_missing_t',  name: 'Fehlende Zahlen (+ − ×)',              color: '#CBD5E1', icon: '🔍', generators: [G3.missingMul, G3.missingAddSub] },
      { key: 'g3_pattern',    name: '🎮 Musterblöcke – Interaktiv',         color: '#7C3AED', icon: '🧩', generators: [] },
    ]},
    { key: 'g3_units_cat', name: 'Größen & Einheiten', color: '#06B6D4', icon: '📏', topics: [
      { key: 'g3_length_t',    name: 'Länge (mm, cm, m, km)',               color: '#67E8F9', icon: '📏', generators: [G3.lengthUnits] },
      { key: 'g3_weight_t',    name: 'Gewicht (g, kg)',                     color: '#22D3EE', icon: '⚖️', generators: [G3.weightUnits] },
      { key: 'g3_time_t',      name: 'Zeit (Stunden, Minuten)',             color: '#06B6D4', icon: '🕐', generators: [G3.clock3, G3.timeUnits] },
      { key: 'g3_money_t',     name: 'Geld (Euro, Cent)',                   color: '#0891B2', icon: '💰', generators: [G3.moneyWord3, G3.word2] },
      { key: 'g3_laenge',     name: '🎮 Messen mit Lineal',                 color: '#0EA5E9', icon: '📏', generators: [] },
      { key: 'g3_strecken',   name: '🎮 Strecke zeichnen',                  color: '#38BDF8', icon: '✏️', generators: [] },
      { key: 'g3_zeit',       name: '🎮 Uhr ablesen',                       color: '#7DD3FC', icon: '🕐', generators: [] },
      { key: 'g3_geld',       name: '🎮 Geldrechnen',                       color: '#BAE6FD', icon: '💰', generators: [] },
      { key: 'g3_scale',      name: '🎮 Balkenwaage – Gewicht',             color: '#60A5FA', icon: '⚖️', generators: [] },
    ]},
    { key: 'g3_geo_cat', name: 'Geometrie', color: '#EC4899', icon: '📐', topics: [
      { key: 'g3_shapes_t',    name: 'Formen & Eigenschaften',              color: '#F472B6', icon: '🔷', generators: [G3.shapeProp, G3.perimCalc] },
      { key: 'g3_angles_t',    name: 'Rechte Winkel & Winkelarten',         color: '#FB7185', icon: '📐', generators: [G3.rechterWinkel] },
      { key: 'g3_shapes_vis',  name: '🎮 Formenerkennung – Interaktiv',     color: '#F43F5E', icon: '🔷', generators: [] },
      { key: 'g3_geo_messen',  name: '🎮 Strecken messen',                  color: '#FB923C', icon: '📏', generators: [] },
      { key: 'g3_rightangle',  name: '🎮 Winkelarten erkennen',             color: '#FDA4AF', icon: '📐', generators: [] },
    ]},
    { key: 'g3_perim_cat', name: 'Umfang', color: '#F97316', icon: '📐', topics: [
      { key: 'g3_perim_text',  name: 'Umfang von Rechtecken & Quadraten',   color: '#FB923C', icon: '📐', generators: [G3.perimCalc] },
      { key: 'g3_perim',      name: '🎮 Umfang am Gitter',                  color: '#FDBA74', icon: '📐', generators: [] },
      { key: 'g3_perim_vis',  name: '🎮 Umfang berechnen',                  color: '#FED7AA', icon: '📐', generators: [] },
    ]},
    { key: 'g3_area_cat', name: 'Flächeninhalt', color: '#84CC16', icon: '⬜', topics: [
      { key: 'g3_area_text',   name: 'Flächeninhalt (Rechtecke)',            color: '#BEF264', icon: '⬜', generators: [G3.areaCalc] },
      { key: 'g3_area',       name: '🎮 Kästchen zählen',                   color: '#D9F99D', icon: '⬜', generators: [] },
      { key: 'g3_area_cmp',   name: '🎮 Flächen vergleichen',               color: '#A3E635', icon: '⬜', generators: [] },
    ]},
    { key: 'g3_data_cat', name: 'Daten & Diagramme', color: '#A855F7', icon: '📊', topics: [
      { key: 'g3_tables_t',    name: 'Tabellen & Daten',                    color: '#C084FC', icon: '📊', generators: [G3.barChartRead] },
      { key: 'g3_barchart',   name: '🎮 Balkendiagramm – Interaktiv',       color: '#E9D5FF', icon: '📊', generators: [] },
    ]},
    { key: 'g3_word_cat', name: 'Sachaufgaben', color: '#DC2626', icon: '📖', topics: [
      { key: 'g3_word_add_t',  name: 'Additionsaufgaben',                   color: '#F87171', icon: '📖', generators: [G3.word1] },
      { key: 'g3_word_sub_t',  name: 'Subtraktionsaufgaben',                color: '#FCA5A5', icon: '📖', generators: [G3.wordSub, G3.word3] },
      { key: 'g3_word_mul_t',  name: 'Multiplikationsaufgaben',             color: '#F87171', icon: '📖', generators: [G3.word2] },
      { key: 'g3_word_div_t',  name: 'Divisionsaufgaben',                   color: '#FCA5A5', icon: '📖', generators: [G3.word3] },
      { key: 'g3_word_multi_t', name: 'Mehrstufige Aufgaben',               color: '#F87171', icon: '📖', generators: [G3.word1, G3.word2, G3.word3] },
    ]},
  ],
  4: [
    { key: 'g4_zahlen', name: 'Zahlen und Zahlensystem', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'grosseZahlen', name: 'Große Zahlen (bis 1 000 000)', color: '#93C5FD', icon: '🔢', generators: [G4.placeValue, G4.placeValueBig, G4.largeNumbers] },
      { key: 'stellenwert', name: 'Stellenwertsystem', color: '#60A5FA', icon: '🔢', generators: [G4.placeValue, G4.placeValueBig, G4.largeNumbers] },
      { key: 'zahlenstrahl', name: 'Zahlenstrahl & Zahlen ordnen', color: '#3B82F6', icon: '📊', generators: [G4.sequence, G4.roundingG4, G3.sequence] },
      { key: 'runden', name: 'Runden (10er, 100er, 1000er, 10 000er)', color: '#06B6D4', icon: '🔄', generators: [G4.roundingG4, G4.roundTo10000] },
      { key: 'place_value', name: '🎮 Stellenwerttafel - Interaktiv', color: '#6366F1', icon: '🔢', generators: [] },
      { key: 'number_line', name: '🎮 Runden am Zahlenstrahl', color: '#14B8A6', icon: '🎯', generators: [] },
    ]},
    { key: 'g4_rechnen10000', name: 'Rechnen bis 10 000', color: '#0EA5E9', icon: '🔢', topics: [
      { key: 'add10000', name: 'Addition bis 10 000', color: '#38BDF8', icon: '➕', generators: [G4.addTo10000, G4.mentalAdd10000] },
      { key: 'sub10000', name: 'Subtraktion bis 10 000', color: '#0EA5E9', icon: '➖', generators: [G4.subTo10000, G4.mentalAdd10000] },
      { key: 'ergaenzen10000', name: 'Ergänzen auf 10 000', color: '#0284C7', icon: '🎯', generators: [G4.ergaenze10000] },
      { key: 'kopfrechn10000', name: 'Kopfrechnen (runde Zahlen)', color: '#0369A1', icon: '🧠', generators: [G4.mentalAdd10000] },
    ]},
    { key: 'g4_rechnen100000', name: 'Rechnen bis 100 000', color: '#6366F1', icon: '🔢', topics: [
      { key: 'add100000', name: 'Addition bis 100 000', color: '#818CF8', icon: '➕', generators: [G4.addTo100000, G4.writtenAddLarge] },
      { key: 'sub100000', name: 'Subtraktion bis 100 000', color: '#6366F1', icon: '➖', generators: [G4.subTo100000, G4.writtenSubLarge] },
      { key: 'stellen100000', name: 'Stellenwert bis 100 000', color: '#4F46E5', icon: '🔢', generators: [G4.placeValueBig, G4.largeNumbers] },
      { key: 'runden100000', name: 'Runden auf 10 000er', color: '#4338CA', icon: '🔄', generators: [G4.roundTo10000, G4.roundingG4] },
    ]},
    { key: 'g4_grundrechenarten', name: 'Grundrechenarten', color: '#10B981', icon: '➕', topics: [
      { key: 'addSub', name: 'Addition & Subtraktion (schriftlich)', color: '#34D399', icon: '➕', generators: [G4.addTo10000, G4.subTo10000, G4.addTo100000, G4.subTo100000] },
      { key: 'mul', name: 'Multiplikation (schriftlich)', color: '#22C55E', icon: '✖️', generators: [G4.writtenMul, G4.writtenMulB] },
      { key: 'div', name: 'Division (schriftlich)', color: '#10B981', icon: '➗', generators: [G4.writtenDiv, G4.writtenDivB, G4.divTwoDigit] },
      { key: 'ueberschlagen', name: 'Überschlagen & Schätzen', color: '#059669', icon: '🎯', generators: [G4.roundingG4, G4.roundTo10000, G4.mentalAdd10000] },
    ]},
    { key: 'g4_struktur', name: 'Zahlenstruktur und Denken', color: '#8B5CF6', icon: '🧩', topics: [
      { key: 'zahlenfolgen', name: 'Zahlenfolgen & Muster', color: '#A78BFA', icon: '🔗', generators: [G4.sequence, G3.sequence] },
      { key: 'rechenstrategien', name: 'Rechenstrategien (Ergänzen, Kopfrechnen)', color: '#8B5CF6', icon: '🧠', generators: [G4.ergaenze10000, G4.mentalAdd10000, G4.roundingG4] },
      { key: 'sequence', name: '🎮 Zahlenfolgen - Muster erkennen', color: '#8B5CF6', icon: '🔗', generators: [] },
    ]},
    { key: 'g4_groessen', name: 'Größen und Messen', color: '#F59E0B', icon: '⚖️', topics: [
      { key: 'laenge', name: 'Länge (mm, cm, m, km)', color: '#FBBF24', icon: '📏', generators: [G4.unitLengths, G4.unitLengthsWord] },
      { key: 'gewicht', name: 'Gewicht (g, kg, t)', color: '#F59E0B', icon: '⚖️', generators: [G4.weightOnly] },
      { key: 'zeit', name: 'Zeit (s, min, h, Tage)', color: '#EAB308', icon: '⏱️', generators: [G4.timeWord] },
      { key: 'geld', name: 'Geld (€, ct)', color: '#CA8A04', icon: '💰', generators: [G4.moneyWord] },
      { key: 'umwandeln', name: 'Einheiten umwandeln', color: '#D97706', icon: '🔄', generators: [G4.units, G4.unitLengths, G4.weightOnly] },
      { key: 'zeichnen', name: '🎮 Zeichnen - Längen und Formen', color: '#06B6D4', icon: '✏️', generators: [] },
      { key: 'messen', name: '🎮 Messen - Mit Lineal', color: '#0EA5E9', icon: '📏', generators: [] },
      { key: 'uhrzeit', name: '🎮 Uhr lesen - Analog & Digital', color: '#06D6D4', icon: '⏰', generators: [] },
      { key: 'timeline', name: '🎮 Zeitdauer - Zeitstrahl', color: '#0D9488', icon: '⏱️', generators: [] },
      { key: 'money', name: '🎮 Geldrechnen - Einkaufen', color: '#22C55E', icon: '💰', generators: [] },
    ]},
    { key: 'g4_geo', name: 'Geometrie', color: '#EC4899', icon: '📐', topics: [
      { key: 'strecken', name: 'Strecken messen & zeichnen', color: '#F472B6', icon: '📏', generators: [G4.perimeterOnly, G4.areaOnly] },
      { key: 'geodreieck', name: 'Geodreieck (Winkel, Parallelen)', color: '#EC4899', icon: '📐', generators: [G4.winkelTyp, G4.winkelKlasse, G4.dreieckWinkel] },
      { key: 'zirkel', name: 'Zirkel (Kreis, Radius)', color: '#DB2777', icon: '⭕', generators: [G4.circleSimple] },
      { key: 'symmetrie', name: 'Symmetrie & Spiegeln', color: '#BE185D', icon: '🪞', generators: [G4.symmetrieAchsen] },
      { key: 'angle', name: '🎮 Winkel zeichnen & messen', color: '#EF4444', icon: '📐', generators: [] },
      { key: 'circle_draw', name: '🎮 Kreis zeichnen mit Zirkel', color: '#F97316', icon: '⭕', generators: [] },
      { key: 'symmetry', name: '🎮 Symmetrie - Spiegeln', color: '#EC4899', icon: '🪞', generators: [] },
    ]},
    { key: 'g4_flaeche', name: 'Fläche und Umfang', color: '#F97316', icon: '📏', topics: [
      { key: 'umfang', name: 'Umfang (Rechteck, Quadrat)', color: '#FB923C', icon: '📏', generators: [G4.perimeterOnly] },
      { key: 'flaeche', name: 'Fläche berechnen', color: '#F97316', icon: '📐', generators: [G4.areaOnly] },
      { key: 'grid_area', name: '🎮 Fläche & Umfang - Gitter zählen', color: '#F59E0B', icon: '📐', generators: [] },
      { key: 'fraction_pizza', name: '🎮 Brüche - Pizza-Darstellung', color: '#F59E0B', icon: '🍕', generators: [] },
    ]},
    { key: 'g4_daten', name: 'Daten und Diagramme', color: '#06B6D4', icon: '📊', topics: [
      { key: 'tabellen', name: 'Tabellen lesen & ausfüllen', color: '#22D3EE', icon: '📈', generators: [G4.word1, G4.word2, G4.word3] },
      { key: 'diagramme', name: 'Diagramme lesen & erstellen', color: '#06B6D4', icon: '📊', generators: [G4.word1, G4.word3, G4.volumeWord] },
    ]},
    { key: 'g4_sachaufgaben', name: 'Sachaufgaben', color: '#EF4444', icon: '📖', topics: [
      { key: 'grundAufgaben', name: 'Textaufgaben (Grundrechenarten)', color: '#F87171', icon: '📖', generators: [G4.word1, G4.word2, G4.word3] },
      { key: 'messAufgaben', name: 'Textaufgaben (Messen & Geld)', color: '#EF4444', icon: '📏', generators: [G4.volumeWord, G4.moneyWord, G4.unitLengthsWord] },
      { key: 'mehrschritt', name: 'Mehrschrittige Aufgaben', color: '#DC2626', icon: '🔢', generators: [G4.word1, G4.word2, G4.word3] },
    ]},
  ],
  5: [
    { key: 'g5_vis_numbers', name: 'Visuell: Zahlen & Stellenwert', color: '#3B82F6', icon: '🖼️', topics: [
      { key: 'g5_place_million',    name: 'Stellenwertgitter (Millionen)',          color: '#60A5FA', icon: '🔢', generators: [G5.readLargeNum] },
      { key: 'g5_number_line_vis',  name: 'Zahlenstrahl – große Zahlen',            color: '#93C5FD', icon: '📏', generators: [G5.largeNumbers] },
      { key: 'g5_rounding_vis',     name: 'Runden – visuell',                       color: '#2563EB', icon: '🎯', generators: [G5.roundHundreds] },
      { key: 'g5_nl_arith',         name: 'Zahlenstrahl – Rechnen',                 color: '#1D4ED8', icon: '➕', generators: [G5.addLarge, G5.subLarge] },
    ]},
    { key: 'g5_vis_ops', name: 'Visuell: Rechenoperationen', color: '#10B981', icon: '🖼️', topics: [
      { key: 'g5_mul_array',        name: 'Multiplikationsgitter',                  color: '#6EE7B7', icon: '✖️', generators: [G5.mulTwoDigit] },
      { key: 'g5_div_share',        name: 'Division – Aufteilen',                   color: '#10B981', icon: '➗', generators: [G5.divLong] },
      { key: 'g5_balance_vis',      name: 'Waage – Gleichgewicht',                  color: '#059669', icon: '⚖️', generators: [G5.addLarge] },
    ]},
    { key: 'g5_vis_frac', name: 'Visuell: Brüche & Dezimalen', color: '#6366F1', icon: '🖼️', topics: [
      { key: 'g5_frac_compare_vis', name: 'Brüche vergleichen – visuell',           color: '#818CF8', icon: '½', generators: [G5.fractionAdd] },
      { key: 'g5_frac_equiv_vis',   name: 'Gleichwertige Brüche – visuell',         color: '#A5B4FC', icon: '🔄', generators: [G5.fractionAdd] },
      { key: 'g5_decimal_place_vis',name: 'Dezimalzahlen – Stellenwert',            color: '#6366F1', icon: '🔟', generators: [G5.decimalRead] },
      { key: 'g5_decimal_line_vis', name: 'Dezimalzahlen am Zahlenstrahl',          color: '#4F46E5', icon: '📏', generators: [G5.decimalRead] },
    ]},
    { key: 'g5_vis_geo', name: 'Visuell: Geometrie', color: '#EAB308', icon: '🖼️', topics: [
      { key: 'g5_shape_vis',        name: 'Figureigenschaften – visuell',           color: '#FDE047', icon: '🔷', generators: [G5.geoRectArea] },
      { key: 'g5_angle_vis',        name: 'Winkelarten – visuell',                  color: '#EAB308', icon: '∠', generators: [G4.winkelTyp] },
      { key: 'g5_perim_vis',        name: 'Umfang – visuell',                       color: '#CA8A04', icon: '🔲', generators: [G5.geoRectPerimeter] },
      { key: 'g5_area_vis',         name: 'Flächeninhalt – Gitter',                 color: '#A16207', icon: '⬛', generators: [G5.geoRectArea] },
      { key: 'g5_symmetry_vis',     name: 'Spiegelung – visuell',                   color: '#854D0E', icon: '🪞', generators: [G4.symmetrieAchsen] },
    ]},
    { key: 'g5_vis_data', name: 'Visuell: Daten & Einheiten', color: '#10B981', icon: '🖼️', topics: [
      { key: 'g5_barchart_vis',     name: 'Säulendiagramm lesen',                   color: '#6EE7B7', icon: '📊', generators: [G5.chartRead] },
      { key: 'g5_unit_convert',     name: 'Maßeinheiten – visuell',                 color: '#10B981', icon: '📏', generators: [G5.unitLength] },
    ]},
    { key: 'g5_zahlen', name: 'Zahlen und Zahlensystem', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g5_z_million',  name: 'Natürliche Zahlen bis 1 000 000',      color: '#60A5FA', icon: '🔢', generators: [G5.largeNumbers, G5.readLargeNum, G5.compareNums] },
      { key: 'g5_z_read',    name: 'Zahlen lesen und schreiben',             color: '#93C5FD', icon: '📝', generators: [G5.readLargeNum, G5.largeNumbers] },
      { key: 'g5_z_compare', name: 'Zahlen vergleichen  (< · > · =)',       color: '#2563EB', icon: '⚖️', generators: [G5.compareNums, G5.largeNumbers] },
      { key: 'g5_z_order',   name: 'Zahlen ordnen',                          color: '#1D4ED8', icon: '📊', generators: [G5.compareNums, G5.largeNumbers, G5.readLargeNum] },
      { key: 'g5_z_place',   name: 'Stellenwerte',                           color: '#3B82F6', icon: '🧱', generators: [G5.readLargeNum, G5.largeNumbers] },
      { key: 'g5_z_expand',  name: 'Zahlen zerlegen  (Stellenwertschreibweise)', color: '#60A5FA', icon: '🧩', generators: [G5.readLargeNum, G5.largeNumbers] },
      { key: 'g5_z_line',    name: 'Zahlenstrahl',                           color: '#93C5FD', icon: '📏', generators: [G5.largeNumbers, G5.compareNums] },
      { key: 'g5_z_neighbor','name': 'Vor- und Nachfolger',                  color: '#BFDBFE', icon: '↔️', generators: [G5.largeNumbers, G5.addLarge] },
    ]},
    { key: 'g5_round', name: 'Runden und Schätzen', color: '#06B6D4', icon: '🎯', topics: [
      { key: 'g5_rnd_10',    name: 'Runden auf Zehner',                      color: '#22D3EE', icon: '🎯', generators: [G5.roundHundreds, G5.decimalRound] },
      { key: 'g5_rnd_100',   name: 'Runden auf Hunderter',                   color: '#06B6D4', icon: '🎯', generators: [G5.roundHundreds] },
      { key: 'g5_rnd_1000',  name: 'Runden auf Tausender',                   color: '#0891B2', icon: '🎯', generators: [G5.largeNumbers, G5.roundHundreds] },
      { key: 'g5_rnd_large', name: 'Runden auf größere Stellen (10 000, 100 000)', color: '#0E7490', icon: '🎯', generators: [G5.largeNumbers, G5.roundHundreds] },
      { key: 'g5_rnd_dec',   name: 'Dezimalzahlen runden',                   color: '#155E75', icon: '🤔', generators: [G5.decimalRound] },
    ]},
    { key: 'g5_add', name: 'Addition', color: '#EF4444', icon: '➕', topics: [
      { key: 'g5_add_mental', name: 'Kopfrechnen (Addition)',                 color: '#FCA5A5', icon: '🧠', generators: [G5.addLarge, G5.addComplement100k] },
      { key: 'g5_add_written','name': 'Schriftliche Addition',                color: '#EF4444', icon: '➕', generators: [G5.addLarge] },
      { key: 'g5_add_compl',  name: 'Ergänzen auf 100 000',                  color: '#DC2626', icon: '✅', generators: [G5.addComplement100k] },
      { key: 'g5_add_word',   name: 'Sachaufgabe (Addition)',                 color: '#B91C1C', icon: '📖', generators: [G5.wordAdd, G5.wordFence] },
    ]},
    { key: 'g5_sub', name: 'Subtraktion', color: '#F97316', icon: '➖', topics: [
      { key: 'g5_sub_mental', name: 'Kopfrechnen (Subtraktion)',              color: '#FDBA74', icon: '🧠', generators: [G5.subLarge] },
      { key: 'g5_sub_written','name': 'Schriftliche Subtraktion',             color: '#F97316', icon: '➖', generators: [G5.subLarge] },
      { key: 'g5_sub_check',  name: 'Probe und Überprüfen',                  color: '#EA580C', icon: '✅', generators: [G5.subLarge, G5.addComplement100k] },
      { key: 'g5_sub_word',   name: 'Sachaufgabe (Subtraktion)',              color: '#C2410C', icon: '📖', generators: [G5.wordSub] },
    ]},
    { key: 'g5_mul', name: 'Multiplikation', color: '#10B981', icon: '✖️', topics: [
      { key: 'g5_mul_mental', name: 'Kopfrechnen (Multiplikation)',           color: '#6EE7B7', icon: '🧠', generators: [G5.orderOfOps, G5.mulPow10] },
      { key: 'g5_mul_written','name': 'Schriftliche Multiplikation',          color: '#10B981', icon: '✖️', generators: [G5.mulTwoDigit, G5.mulThreeOne] },
      { key: 'g5_mul_round',  name: 'Runde Zahlen multiplizieren (20 · 30)', color: '#059669', icon: '🔄', generators: [G5.mulPow10, G5.orderOfOps] },
      { key: 'g5_mul_pow10',  name: '×10, ×100, ×1000',                      color: '#047857', icon: '🔟', generators: [G5.mulPow10] },
      { key: 'g5_mul_word',   name: 'Sachaufgabe (Multiplikation)',           color: '#065F46', icon: '📖', generators: [G5.wordMul] },
    ]},
    { key: 'g5_div', name: 'Division', color: '#8B5CF6', icon: '➗', topics: [
      { key: 'g5_div_mental', name: 'Kopfrechnen (Division)',                 color: '#C4B5FD', icon: '🧠', generators: [G5.divLong, G5.divPow10] },
      { key: 'g5_div_rem',    name: 'Division mit Rest',                      color: '#A78BFA', icon: '➗', generators: [G5.divRemainder] },
      { key: 'g5_div_written','name': 'Schriftliche Division',                color: '#8B5CF6', icon: '📝', generators: [G5.divLong] },
      { key: 'g5_div_pow10',  name: '÷10, ÷100',                             color: '#7C3AED', icon: '🔟', generators: [G5.divPow10] },
      { key: 'g5_div_word',   name: 'Sachaufgabe (Division)',                 color: '#6D28D9', icon: '📖', generators: [G5.wordDiv] },
    ]},
    { key: 'g5_frac', name: 'Brüche', color: '#6366F1', icon: '½', topics: [
      { key: 'g5_frac_concept', name: 'Zähler und Nenner',                   color: '#818CF8', icon: '½', generators: [G5.fractionAdd, G5.fractionSub] },
      { key: 'g5_frac_mixed',   name: 'Gemischte Zahlen',                    color: '#A5B4FC', icon: '🍕', generators: [G5.mixedNumber, G5.fractionAdd] },
      { key: 'g5_frac_compare', name: 'Brüche vergleichen',                  color: '#6366F1', icon: '⚖️', generators: [G5.fractionAdd, G5.fractionSub, G5.fractionDiff] },
      { key: 'g5_frac_simplify','name': 'Brüche kürzen (Vereinfachen)',       color: '#4F46E5', icon: '✂️', generators: [G5.gcd, G5.lcm] },
      { key: 'g5_frac_equiv',   name: 'Gleichwertige Brüche  (2/4 = 1/2)',   color: '#4338CA', icon: '🔄', generators: [G5.lcm, G5.fractionAdd] },
      { key: 'g5_frac_addsub',  name: 'Brüche addieren und subtrahieren',    color: '#3730A3', icon: '➕', generators: [G5.fractionAdd, G5.fractionSub, G5.fractionDiff] },
    ]},
    { key: 'g5_decimal', name: 'Dezimalzahlen', color: '#14B8A6', icon: '🔟', topics: [
      { key: 'g5_dec_concept', name: 'Dezimalzahlen lesen und schreiben',    color: '#5EEAD4', icon: '📝', generators: [G5.decimalRead] },
      { key: 'g5_dec_compare', name: 'Dezimalzahlen vergleichen',            color: '#14B8A6', icon: '⚖️', generators: [G5.decimalCompare, G5.decimalRead] },
      { key: 'g5_dec_line',    name: 'Dezimalzahlen am Zahlenstrahl',        color: '#0D9488', icon: '📏', generators: [G5.decimalCompare, G5.decimalRead] },
      { key: 'g5_dec_add',     name: 'Dezimalzahlen addieren',               color: '#0F766E', icon: '➕', generators: [G5.decimalAdd] },
      { key: 'g5_dec_sub',     name: 'Dezimalzahlen subtrahieren',           color: '#115E59', icon: '➖', generators: [G5.decimalSub] },
    ]},
    { key: 'g5_units', name: 'Maßeinheiten', color: '#F59E0B', icon: '📏', topics: [
      { key: 'g5_units_len',  name: 'Längenmaße  (km · m · cm · mm)',        color: '#FCD34D', icon: '📏', generators: [G5.unitLength] },
      { key: 'g5_units_mass', name: 'Gewicht/Masse  (t · kg · g)',           color: '#FBBF24', icon: '⚖️', generators: [G5.unitMass] },
      { key: 'g5_units_time', name: 'Zeitmaße  (h · min · s)',               color: '#F59E0B', icon: '⏱️', generators: [G5.unitTime] },
      { key: 'g5_units_area', name: 'Flächenmaße  (m² · cm²)',              color: '#D97706', icon: '⬜', generators: [G5.geoRectArea, G5.squareAreaG5] },
      { key: 'g5_units_money','name': 'Geldrechnung  (€ · Cent)',            color: '#B45309', icon: '💶', generators: [G5.unitMoney, G5.wordDiscount] },
    ]},
    { key: 'g5_geo', name: 'Geometrie', color: '#EAB308', icon: '📐', topics: [
      { key: 'g5_geo_shapes', name: 'Eigenschaften ebener Figuren',          color: '#FDE047', icon: '🔷', generators: [G5.geoRectArea, G5.geoRectPerimeter, G5.triangleAreaG5] },
      { key: 'g5_geo_coord',  name: 'Koordinatensystem',                     color: '#EAB308', icon: '🗺️', generators: [G5.coordRead] },
      { key: 'g5_geo_nets',   name: 'Netze und Ansichten',                   color: '#CA8A04', icon: '📦', generators: [G5.geoRectArea, G5.squareAreaG5] },
    ]},
    { key: 'g5_angles', name: 'Winkel', color: '#6366F1', icon: '∠', topics: [
      { key: 'g5_ang_concept', name: 'Winkel: Grundbegriffe',                color: '#818CF8', icon: '∠', generators: [G4.winkelTyp, G4.winkelKlasse] },
      { key: 'g5_ang_types',   name: 'Winkelarten  (spitz · recht · stumpf)', color: '#6366F1', icon: '📐', generators: [G4.winkelKlasse, G4.winkelTyp] },
      { key: 'g5_ang_measure', name: 'Winkel messen (Geodreieck)',           color: '#4F46E5', icon: '📏', generators: [G4.winkelTyp, G4.dreieckWinkel] },
      { key: 'g5_ang_draw',    name: 'Winkel zeichnen',                      color: '#4338CA', icon: '✏️', generators: [G4.dreieckWinkel, G4.winkelTyp] },
    ]},
    { key: 'g5_perim', name: 'Umfang', color: '#34D399', icon: '🔲', topics: [
      { key: 'g5_peri_shapes', name: 'Umfang von Figuren',                   color: '#6EE7B7', icon: '🔲', generators: [G5.geoRectPerimeter, G5.geoSquarePerimeter, G5.wordFence] },
      { key: 'g5_peri_rect',   name: 'Umfang Rechteck und Quadrat',         color: '#34D399', icon: '⬜', generators: [G5.geoRectPerimeter, G5.geoSquarePerimeter] },
      { key: 'g5_peri_comp',   name: 'Zusammengesetzte Figuren',            color: '#059669', icon: '🔷', generators: [G5.geoRectPerimeter, G5.wordFence] },
    ]},
    { key: 'g5_area', name: 'Flächeninhalt', color: '#FBBF24', icon: '⬛', topics: [
      { key: 'g5_area_rect',   name: 'Flächeninhalt Rechteck',               color: '#FBBF24', icon: '⬜', generators: [G5.geoRectArea] },
      { key: 'g5_area_square', name: 'Flächeninhalt Quadrat',                color: '#F59E0B', icon: '🟨', generators: [G5.squareAreaG5] },
      { key: 'g5_area_tri',    name: 'Flächeninhalt Dreieck',                color: '#D97706', icon: '🔺', generators: [G5.triangleAreaG5] },
      { key: 'g5_area_conv',   name: 'Flächenmaße umrechnen  (m² ↔ cm²)',   color: '#B45309', icon: '🔄', generators: [G5.geoRectArea, G5.squareAreaG5] },
    ]},
    { key: 'g5_symmetry', name: 'Spiegelung und Symmetrie', color: '#EC4899', icon: '🔄', topics: [
      { key: 'g5_sym_axis',    name: 'Symmetrieachsen',                      color: '#F9A8D4', icon: '🔄', generators: [G4.symmetrieAchsen] },
      { key: 'g5_sym_reflect', name: 'Figuren spiegeln',                     color: '#EC4899', icon: '🪞', generators: [G4.symmetrieAchsen] },
    ]},
    { key: 'g5_stats', name: 'Diagramme und Statistik', color: '#10B981', icon: '📊', topics: [
      { key: 'g5_stat_read',  name: 'Diagramme lesen und auswerten',        color: '#6EE7B7', icon: '📊', generators: [G5.chartRead] },
      { key: 'g5_stat_mean',  name: 'Mittelwert (Durchschnitt)',            color: '#10B981', icon: '📈', generators: [G5.calcMean, G5.mean] },
      { key: 'g5_stat_table', name: 'Tabellen und Häufigkeiten',            color: '#059669', icon: '📋', generators: [G5.chartRead, G5.calcMean] },
    ]},
    { key: 'g5_word', name: 'Sachaufgaben', color: '#EF4444', icon: '📖', topics: [
      { key: 'g5_word_add',   name: 'Sachaufgaben · Addition',              color: '#FCA5A5', icon: '➕', generators: [G5.wordAdd, G5.wordFence] },
      { key: 'g5_word_sub',   name: 'Sachaufgaben · Subtraktion',           color: '#F87171', icon: '➖', generators: [G5.wordSub] },
      { key: 'g5_word_mul',   name: 'Sachaufgaben · Multiplikation',        color: '#EF4444', icon: '✖️', generators: [G5.wordMul] },
      { key: 'g5_word_div',   name: 'Sachaufgaben · Division',              color: '#DC2626', icon: '➗', generators: [G5.wordDiv] },
      { key: 'g5_word_travel',name: 'Weg-Zeit-Aufgaben',                    color: '#B91C1C', icon: '🚂', generators: [G5.wordTravel] },
      { key: 'g5_word_time',  name: 'Zeitaufgaben',                         color: '#991B1B', icon: '⏱️', generators: [G5.unitTime, G5.wordTravel] },
      { key: 'g5_word_money', name: 'Geldaufgaben',                         color: '#7F1D1D', icon: '💶', generators: [G5.wordDiscount, G5.unitMoney, G5.percentWord] },
    ]},
    { key: 'g5_volumen', name: 'Volumen', color: '#0EA5E9', icon: '📦', topics: [
      { key: 'g5_vol_cube',   name: 'Volumen eines Würfels',               color: '#38BDF8', icon: '🟦', generators: [G5.volumeCube] },
      { key: 'g5_vol_cuboid', name: 'Volumen eines Quaders',               color: '#0EA5E9', icon: '📦', generators: [G5.volumeCuboid] },
      { key: 'g5_vol_word',   name: 'Sachaufgaben zum Volumen',            color: '#0284C7', icon: '📖', generators: [G5.volumeWord] },
    ]},
    { key: 'g5_neg_de', name: 'Negative Zahlen (Einführung)', color: '#8B5CF6', icon: '➖', topics: [
      { key: 'g5_neg_intro',  name: 'Negative Zahlen – Einführung',        color: '#A78BFA', icon: '➖', generators: [G5.negativeIntro, G5.negativeNumberLine] },
      { key: 'g5_neg_temp',   name: 'Temperaturaufgaben',                  color: '#8B5CF6', icon: '🌡️', generators: [G5.negativeTemp] },
      { key: 'g5_neg_diff',   name: 'Abstände auf der Zahlengeraden',      color: '#7C3AED', icon: '↔️', generators: [G5.negativeDiff] },
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
      { key: 'g1_count',   name: 'Számok felismerése · Mennyiségek számolása', color: '#60A5FA', icon: '🔢', generators: [G1.zaehlen] },
      { key: 'g1_visual',  name: 'Pontok · Dobókocka · Ujjak · Képek', color: '#93C5FD', icon: '🎲', generators: [G1.zaehlen] },
      { key: 'g1_compare', name: 'Nagyobb · Kisebb · Egyenlő · Sorrend', color: '#2563EB', icon: '⚖️', generators: [G1.compare, G1.numberOrder] },
      { key: 'g1_pos',     name: 'Előző · Következő · Számegyenes', color: '#1D4ED8', icon: '📏', generators: [G1.vorgaenger, G1.nachfolger, G1.numberLine] },
    ]},
    { key: 'g1_zahlen20', name: 'Számkör bővítése (20-ig)', color: '#06B6D4', icon: '🔟', topics: [
      { key: 'g1_num1120',       name: 'Számok 11–20', color: '#22D3EE', icon: '🔟', generators: [G1.zaehlen, G1.placeValue20] },
      { key: 'g1_place_value20', name: 'Tízes és egyes  (14 = 1T + 4E)', color: '#0891B2', icon: '🧱', generators: [G1.placeValue20] },
    ]},
    { key: 'g1_rechnen', name: 'Alapműveletek', color: '#EF4444', icon: '➕', topics: [
      { key: 'g1_addpics', name: 'Összeadás képekkel', color: '#FCA5A5', icon: '🖼️', generators: [G1.zaehlen, G1.add10, G1.add10b] },
      { key: 'add10',      name: 'Összeadás 10-ig', color: '#F87171', icon: '➕', generators: [G1.add10, G1.add10b] },
      { key: 'add20',      name: 'Összeadás 20-ig', color: '#DC2626', icon: '➕', generators: [G1.add20, G1.add20b] },
      { key: 'g1_subpics', name: 'Kivonás képekkel', color: '#FCA5A5', icon: '🖼️', generators: [G1.zaehlen, G1.sub10, G1.sub10b] },
      { key: 'sub10',      name: 'Kivonás 10-ig', color: '#EF4444', icon: '➖', generators: [G1.sub10, G1.sub10b] },
      { key: 'sub20',      name: 'Kivonás 20-ig', color: '#B91C1C', icon: '➖', generators: [G1.sub20, G1.sub20b] },
      { key: 'g1_tausch',  name: 'Felcserélés · Visszafordítás', color: '#F59E0B', icon: '🔄', generators: [G1.tausch, G1.missing10, G1.missing10sub] },
    ]},
    { key: 'g1_struktur', name: 'Számstruktúra', color: '#8B5CF6', icon: '🧩', topics: [
      { key: 'g1_zahlzerlegung', name: 'Számfelbontás  (5 = 2 + 3)', color: '#A78BFA', icon: '🧩', generators: [G1.zahlzerlegung] },
      { key: 'g1_ergaenzen',     name: 'Egészítsd ki!  (5 + __ = 10)', color: '#7C3AED', icon: '❓', generators: [G1.missing10, G1.missing10sub] },
      { key: 'g1_verdoppeln',    name: 'Kétszereselés  (3 + 3 = ?)', color: '#8B5CF6', icon: '✌️', generators: [G1.verdoppeln] },
      { key: 'g1_halbieren',     name: 'Felezés  (6 → 3)', color: '#6D28D9', icon: '✂️', generators: [G1.halbieren] },
      { key: 'g1_sequence',      name: 'Számsorok  (2–4–6–?)', color: '#5B21B6', icon: '➡️', generators: [G1.sequence, G1.evenOdd] },
    ]},
    { key: 'g1_geo', name: 'Geometria és térbeli tájékozódás', color: '#10B981', icon: '🔷', topics: [
      { key: 'g1_shapes',  name: 'Formák (kör · négyzet · téglalap · háromszög)', color: '#34D399', icon: '🔷', generators: [G1.shapes] },
      { key: 'g1_spatial', name: 'Térbeli irányok (fent · lent · balra · jobbra)', color: '#059669', icon: '🧭', generators: [G1.spatial] },
      { key: 'g1_pattern', name: 'Minták (szín- és formaminták)', color: '#047857', icon: '🎨', generators: [G1.pattern] },
    ]},
    { key: 'g1_messen', name: 'Mérések és mennyiségek', color: '#F59E0B', icon: '📏', topics: [
      { key: 'g1_laenger', name: 'Hossz  (hosszabb · rövidebb)', color: '#FBBF24', icon: '📏', generators: [G1.laenger] },
      { key: 'g1_weight',  name: 'Súly  (nehezebb · könnyebb)', color: '#F59E0B', icon: '⚖️', generators: [G1.weight] },
      { key: 'g1_volume',  name: 'Térfogat  (tele · üres · több · kevesebb)', color: '#D97706', icon: '🥤', generators: [G1.volume] },
    ]},
    { key: 'g1_alltag', name: 'Mindennapi matematika', color: '#FF2D78', icon: '🌍', topics: [
      { key: 'g1_clock',      name: 'Idő  (egész és fél óra)', color: '#FF2D78', icon: '🕐', generators: [G1.clock1, G1.clockQuarter] },
      { key: 'g1_wochentage', name: 'A hét napjai', color: '#FB7185', icon: '📅', generators: [G1.wochentage] },
      { key: 'g1_coins',      name: 'Érmék · Egyszerű vásárlás', color: '#FFD700', icon: '🪙', generators: [G1.coins] },
      { key: 'g1_data',       name: 'Egyszerű adatok (táblázatok)', color: '#E879F9', icon: '📊', generators: [G1.dataTable] },
      { key: 'word',          name: 'Szöveges feladatok', color: '#C026D3', icon: '📖', generators: [G1.word1, G1.word2, G1.word3, G1.word4, G1.word5, G1.word6, G1.word7, G1.word8, G1.word9, G1.word10] },
    ]},
  ],
  2: [
    { key: 'g2_numbers', name: 'Számok és számrendszer', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g2_zahlen100',    name: 'Számkör bővítése',                               color: '#60A5FA', icon: '💯', generators: [G2.vorgaenger2, G2.nachfolger2, G2.add100tens] },
      { key: 'g2_compare',     name: 'Számok kezelése',                                color: '#93C5FD', icon: '⚖️', generators: [G2.nachbarzahlen, G2.stellenwert2] },
      { key: 'g2_vorgaenger',  name: 'Vorgänger / Nachfolger',                         color: '#BFDBFE', icon: '◀▶', generators: [G2.vorgaenger2, G2.nachfolger2] },
      { key: 'g2_nachbarn',    name: 'Nachbarzahlen',                                  color: '#BFDBFE', icon: '🔢', generators: [G2.nachbarzahlen] },
      { key: 'g2_stellenwert', name: 'Stellenwertsystem',                              color: '#93C5FD', icon: '📊', generators: [G2.stellenwert2] },
      { key: 'g2_zerlegung',   name: 'Zahlzerlegung',                                  color: '#BFDBFE', icon: '🧩', generators: [G2.zahlzerlegung2] },
      { key: 'g2_zahlstr',     name: 'Zahlenstrahl',                                   color: '#BFDBFE', icon: '📏', generators: [G2.sequence, G2.missing100] },
    ]},
    { key: 'g2_addition', name: 'Összeadás', color: '#10B981', icon: '➕', topics: [
      { key: 'g2_add_kopf',  name: 'Kopfrechnen',                        color: '#34D399', icon: '🧠', generators: [G2.add100tens, G2.addOhne] },
      { key: 'g2_add_ohne',  name: 'Addition ohne Zehnerübergang',       color: '#6EE7B7', icon: '➕', generators: [G2.addOhne] },
      { key: 'g2_add_mit',   name: 'Addition mit Zehnerübergang',        color: '#6EE7B7', icon: '➕', generators: [G2.addMit] },
      { key: 'g2_add3',      name: 'Több szám összeadása',               color: '#A7F3D0', icon: '➕', generators: [G2.add3nums] },
      { key: 'g2_add_word',  name: 'Szöveges feladatok',                 color: '#D1FAE5', icon: '📖', generators: [G2.wordAddG2, G2.word1] },
    ]},
    { key: 'g2_subtraction', name: 'Kivonás', color: '#EF4444', icon: '➖', topics: [
      { key: 'g2_sub_kopf',  name: 'Kopfrechnen',                             color: '#FCA5A5', icon: '🧠', generators: [G2.sub100tens, G2.subOhne] },
      { key: 'g2_sub_ohne',  name: 'Subtraktion ohne Zehnerübergang',         color: '#FCA5A5', icon: '➖', generators: [G2.subOhne] },
      { key: 'g2_sub_mit',   name: 'Subtraktion mit Zehnerübergang',          color: '#F87171', icon: '➖', generators: [G2.subMit] },
      { key: 'g2_sub_word',  name: 'Szöveges feladatok',                      color: '#FEE2E2', icon: '📖', generators: [G2.wordSubG2, G2.word2] },
    ]},
    { key: 'g2_mul', name: 'Szorzás alapjai', color: '#F59E0B', icon: '✖️', topics: [
      { key: 'g2_mul_rep',    name: 'Szorzás mint ismételt összeadás', color: '#FCD34D', icon: '🔄', generators: [G2.mulRepeated] },
      { key: 'g2_mul_simple', name: 'Egyszerű szorzás (×2, ×5, ×10)', color: '#FDE68A', icon: '✖️', generators: [G2.mul2510, G2.mul2510b] },
      { key: 'g2_mul_group',  name: 'Képes szorzás',                  color: '#FEF3C7', icon: '🎯', generators: [G2.mulGroup, G2.wordMulG2] },
    ]},
    { key: 'g2_div', name: 'Osztás alapjai', color: '#8B5CF6', icon: '➗', topics: [
      { key: 'g2_div_share',  name: 'Osztás mint elosztás',       color: '#A78BFA', icon: '🍕', generators: [G2.divShare] },
      { key: 'g2_div_rel',    name: 'Kapcsolat a szorzással',     color: '#C4B5FD', icon: '🔗', generators: [G2.divMulRel] },
      { key: 'g2_div_simple', name: 'Egyszerű osztás',            color: '#DDD6FE', icon: '➗', generators: [G2.div2510, G2.wordDivG2] },
    ]},
    { key: 'g2_structure', name: 'Számstruktúra és gondolkodás', color: '#06B6D4', icon: '🧩', topics: [
      { key: 'g2_seq',     name: 'Zahlenfolgen',                    color: '#22D3EE', icon: '🔢', generators: [G2.sequence] },
      { key: 'g2_missing', name: 'Muster erkennen · fehlende Zahl', color: '#67E8F9', icon: '❓', generators: [G2.missing100, G2.evenOdd] },
      { key: 'g2_round',   name: 'Rechenstrategien',                color: '#A5F3FC', icon: '🎯', generators: [G2.rounding10, G2.missing100] },
    ]},
    { key: 'g2_measure', name: 'Mértékegységek', color: '#EC4899', icon: '📏', topics: [
      { key: 'g2_length',  name: 'Länge (cm, m)',         color: '#F9A8D4', icon: '📏', generators: [G2.units] },
      { key: 'g2_weight',  name: 'Gewicht (g, kg)',        color: '#F9A8D4', icon: '⚖️', generators: [G2.weightGKg] },
      { key: 'g2_clock',   name: 'Uhr lesen',              color: '#FBCFE8', icon: '🕐', generators: [G2.clock2] },
      { key: 'g2_money',   name: 'Geld (Euro és Cent)',     color: '#FCE7F3', icon: '💶', generators: [G2.moneyEuroCent, G2.wordMoneyG2] },
    ]},
    { key: 'g2_geometry', name: 'Geometria', color: '#84CC16', icon: '🔷', topics: [
      { key: 'g2_shapes',   name: 'Formen',    color: '#BEF264', icon: '🔷', generators: [G2.shapeBasic] },
      { key: 'g2_strecken', name: 'Strecken',  color: '#D9F99D', icon: '📐', generators: [G2.perimeterSimple] },
    ]},
    { key: 'g2_perimeter', name: 'Kerület alapjai', color: '#F97316', icon: '📐', topics: [
      { key: 'g2_perim', name: 'Umfang egyszerű alakzatoknál', color: '#FB923C', icon: '📐', generators: [G2.perimeterSimple] },
    ]},
    { key: 'g2_data', name: 'Adatok', color: '#A855F7', icon: '📊', topics: [
      { key: 'g2_tables',   name: 'Tabellen',   color: '#C084FC', icon: '📊', generators: [G2.word1, G2.word4] },
      { key: 'g2_diagrams', name: 'Diagramme',  color: '#D8B4FE', icon: '📈', generators: [G2.sequence, G2.evenOdd] },
    ]},
    { key: 'g2_word', name: 'Szöveges feladatok', color: '#64748B', icon: '📖', topics: [
      { key: 'g2_word_add',   name: 'Összeadásos feladatok',            color: '#94A3B8', icon: '📖', generators: [G2.wordAddG2, G2.word1] },
      { key: 'g2_word_sub',   name: 'Kivonásos feladatok',              color: '#CBD5E1', icon: '📖', generators: [G2.wordSubG2, G2.word2] },
      { key: 'g2_word_mul',   name: 'Szorzásos feladatok',              color: '#94A3B8', icon: '📖', generators: [G2.wordMulG2, G2.word3] },
      { key: 'g2_word_div',   name: 'Osztásos feladatok',               color: '#CBD5E1', icon: '📖', generators: [G2.wordDivG2] },
      { key: 'g2_word_money', name: 'Pénzes feladatok',                 color: '#94A3B8', icon: '📖', generators: [G2.wordMoneyG2, G2.word4] },
      { key: 'g2_word_time',  name: 'Idővel kapcsolatos feladatok',     color: '#CBD5E1', icon: '📖', generators: [G2.wordTimeG2] },
    ]},
  ],
  3: [
    { key: 'g3_numbers', name: 'Számok és számrendszer (0–1000)', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g3_read_write',  name: 'Számok olvasása, írása',               color: '#60A5FA', icon: '🔢', generators: [G3.compare1000, G3.pred1000, G3.succ1000] },
      { key: 'g3_compare_t',  name: 'Összehasonlítás, sorrendje',            color: '#93C5FD', icon: '🔢', generators: [G3.compare1000] },
      { key: 'g3_place_val',  name: 'Helyiérték, felbontás, összeállítás',   color: '#BFDBFE', icon: '🧱', generators: [G3.decompose, G3.compose, G3.placeVal1000] },
      { key: 'g3_neighbors',  name: 'Szomszéd számok, számegyenes',          color: '#DBEAFE', icon: '📊', generators: [G3.pred1000, G3.succ1000] },
      { key: 'g3_stellenwert', name: '🎮 Helyiérték-tábla – Interaktív',     color: '#6366F1', icon: '🧱', generators: [] },
      { key: 'g3_compose',    name: '🎮 Szám összeállítása blokkokból',      color: '#818CF8', icon: '🧱', generators: [] },
      { key: 'g3_zahlstr',    name: '🎮 Számegyenes 0–1000',                 color: '#14B8A6', icon: '📊', generators: [] },
    ]},
    { key: 'g3_add_cat', name: 'Összeadás', color: '#10B981', icon: '➕', topics: [
      { key: 'g3_add_mental',  name: 'Fejben: összeadás 1000-ig',            color: '#34D399', icon: '➕', generators: [G3.add1000, G3.add1000b] },
      { key: 'g3_add_written', name: 'Írásbeli összeadás, több tag',         color: '#6EE7B7', icon: '➕', generators: [G3.writtenAdd, G3.add3nums] },
      { key: 'g3_add_obj',    name: '🎮 Tárgyakkal összeadás',               color: '#4ADE80', icon: '➕', generators: [] },
    ]},
    { key: 'g3_sub_cat', name: 'Kivonás', color: '#EF4444', icon: '➖', topics: [
      { key: 'g3_sub_mental',  name: 'Fejben: kivonás 1000-ig',              color: '#F87171', icon: '➖', generators: [G3.sub1000, G3.sub1000b] },
      { key: 'g3_sub_written', name: 'Írásbeli kivonás',                     color: '#FCA5A5', icon: '➖', generators: [G3.writtenSub] },
      { key: 'g3_sub_obj',    name: '🎮 Tárgyakkal kivonás',                 color: '#F87171', icon: '➖', generators: [] },
      { key: 'g3_nl_sub',     name: '🎮 Visszalépés a számegyenesen',        color: '#FCA5A5', icon: '📊', generators: [] },
    ]},
    { key: 'g3_mul_cat', name: 'Szorzás', color: '#F59E0B', icon: '✖️', topics: [
      { key: 'g3_mul_table',   name: 'Szorzótábla',                          color: '#FBBF24', icon: '✖️', generators: [G3.mul, G3.mulB, G3.missingMul] },
      { key: 'g3_mul_groups',  name: 'Ismételt összeadás, nagyobb számok',   color: '#FDE68A', icon: '✖️', generators: [G3.mulRepeated, G3.mulLarge] },
      { key: 'g3_mul_grp',    name: '🎮 Csoportosítás (szorzás)',            color: '#FCD34D', icon: '✖️', generators: [] },
      { key: 'g3_mul_arr',    name: '🎮 Tömb-modell (szorzás)',              color: '#FDE68A', icon: '✖️', generators: [] },
    ]},
    { key: 'g3_div_cat', name: 'Osztás', color: '#8B5CF6', icon: '➗', topics: [
      { key: 'g3_div_basic',   name: 'Alaposztás',                           color: '#A78BFA', icon: '➗', generators: [G3.div, G3.divB] },
      { key: 'g3_div_rem',     name: 'Maradékos osztás',                     color: '#C4B5FD', icon: '➗', generators: [G3.divRelMul, G3.divRemainder] },
      { key: 'g3_div_shr',    name: '🎮 Osztás tányérokra',                  color: '#DDD6FE', icon: '➗', generators: [] },
    ]},
    { key: 'g3_patterns_cat', name: 'Számminták és logika', color: '#64748B', icon: '🔗', topics: [
      { key: 'g3_sequence_t',  name: 'Sorozatok',                            color: '#94A3B8', icon: '🔗', generators: [G3.sequence] },
      { key: 'g3_missing_t',  name: 'Hiányzó számok',                        color: '#CBD5E1', icon: '🔍', generators: [G3.missingMul] },
      { key: 'g3_pattern',    name: '🎮 Mintafelismerés – Interaktív',       color: '#7C3AED', icon: '🧩', generators: [] },
    ]},
    { key: 'g3_units_cat', name: 'Mértékegységek', color: '#06B6D4', icon: '📏', topics: [
      { key: 'g3_length_t',    name: 'Hossz (mm, cm, m, km)',                color: '#67E8F9', icon: '📏', generators: [G3.units] },
      { key: 'g3_weight_t',    name: 'Súly (g, kg)',                         color: '#22D3EE', icon: '⚖️', generators: [G3.units] },
      { key: 'g3_time_t',      name: 'Idő (óra, perc)',                      color: '#06B6D4', icon: '🕐', generators: [G3.clock3, G3.units] },
      { key: 'g3_money_t',     name: 'Pénz (euró, cent)',                    color: '#0891B2', icon: '💰', generators: [G3.word1] },
      { key: 'g3_laenge',     name: '🎮 Mérés vonalzóval',                   color: '#0EA5E9', icon: '📏', generators: [] },
      { key: 'g3_strecken',   name: '🎮 Szakasz rajzolása',                  color: '#38BDF8', icon: '✏️', generators: [] },
      { key: 'g3_zeit',       name: '🎮 Óra leolvasása',                     color: '#7DD3FC', icon: '🕐', generators: [] },
      { key: 'g3_geld',       name: '🎮 Pénzszámítás',                       color: '#BAE6FD', icon: '💰', generators: [] },
      { key: 'g3_scale',      name: '🎮 Mérleg – Súly',                      color: '#60A5FA', icon: '⚖️', generators: [] },
    ]},
    { key: 'g3_geo_cat', name: 'Geometria', color: '#EC4899', icon: '📐', topics: [
      { key: 'g3_shapes_t',    name: 'Alakzatok és tulajdonságaik',          color: '#F472B6', icon: '🔷', generators: [G3.shapeProp, G3.perimCalc] },
      { key: 'g3_angles_t',    name: 'Derékszög',                            color: '#FB7185', icon: '📐', generators: [G3.shapeProp] },
      { key: 'g3_shapes_vis',  name: '🎮 Alakzat-felismerés – Interaktív',   color: '#F43F5E', icon: '🔷', generators: [] },
      { key: 'g3_geo_messen',  name: '🎮 Szakasz mérése',                    color: '#FB923C', icon: '📏', generators: [] },
      { key: 'g3_rightangle',  name: '🎮 Szögtípusok felismerése',           color: '#FDA4AF', icon: '📐', generators: [] },
    ]},
    { key: 'g3_perim_cat', name: 'Kerület', color: '#F97316', icon: '📐', topics: [
      { key: 'g3_perim_text',  name: 'Téglalap és négyzet kerülete',         color: '#FB923C', icon: '📐', generators: [G3.perimCalc] },
      { key: 'g3_perim',      name: '🎮 Kerület rácson',                     color: '#FDBA74', icon: '📐', generators: [] },
      { key: 'g3_perim_vis',  name: '🎮 Kerület kiszámítása',                color: '#FED7AA', icon: '📐', generators: [] },
    ]},
    { key: 'g3_area_cat', name: 'Terület', color: '#84CC16', icon: '⬜', topics: [
      { key: 'g3_area_text',   name: 'Terület (téglalapok)',                 color: '#BEF264', icon: '⬜', generators: [G3.areaCalc] },
      { key: 'g3_area',       name: '🎮 Négyzetszámlálás',                   color: '#D9F99D', icon: '⬜', generators: [] },
      { key: 'g3_area_cmp',   name: '🎮 Területek összehasonlítása',         color: '#A3E635', icon: '⬜', generators: [] },
    ]},
    { key: 'g3_data_cat', name: 'Diagramok és adatok', color: '#A855F7', icon: '📊', topics: [
      { key: 'g3_tables_t',    name: 'Táblázatok és adatok',                 color: '#C084FC', icon: '📊', generators: [G3.barChartRead] },
      { key: 'g3_barchart',   name: '🎮 Oszlopdiagram – Interaktív',         color: '#E9D5FF', icon: '📊', generators: [] },
    ]},
    { key: 'g3_word_cat', name: 'Szöveges feladatok', color: '#DC2626', icon: '📖', topics: [
      { key: 'g3_word_add_t',  name: 'Összeadásos feladatok',                color: '#F87171', icon: '📖', generators: [G3.word1, G3.add1000] },
      { key: 'g3_word_sub_t',  name: 'Kivonásos feladatok',                  color: '#FCA5A5', icon: '📖', generators: [G3.word1, G3.sub1000] },
      { key: 'g3_word_mul_t',  name: 'Szorzásos feladatok',                  color: '#F87171', icon: '📖', generators: [G3.word2] },
      { key: 'g3_word_div_t',  name: 'Osztásos feladatok',                   color: '#FCA5A5', icon: '📖', generators: [G3.word3] },
      { key: 'g3_word_multi_t', name: 'Több lépéses feladatok',              color: '#F87171', icon: '📖', generators: [G3.word1, G3.word2, G3.word3] },
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
      { key: 'szogek', name: 'Szögek', color: '#EC4899', icon: '📐', generators: [G4.winkelTyp, G4.winkelKlasse, G4.dreieckWinkel] },
      { key: 'szimmetria', name: 'Szimmetria', color: '#BE185D', icon: '🪞', generators: [G4.symmetrieAchsen] },
      { key: 'units', name: 'Mértékegységek', color: '#F59E0B', icon: '📏', generators: [G4.units] },
    ]},
    { key: 'g4_word', name: 'Szöveges feladatok', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Szöveges feladatok', color: '#EF4444', icon: '📖', generators: [G4.word1, G4.word2, G4.word3] },
    ]},
  ],
  5: [
    { key: 'g5_vis_numbers', name: 'Vizuális: Számok és helyiérték', color: '#3B82F6', icon: '🖼️', topics: [
      { key: 'g5_place_million',    name: 'Helyiértéktábla (milliók)',                color: '#60A5FA', icon: '🔢', generators: [G5.readLargeNum] },
      { key: 'g5_number_line_vis',  name: 'Számegyenes – nagy számok',               color: '#93C5FD', icon: '📏', generators: [G5.largeNumbers] },
      { key: 'g5_rounding_vis',     name: 'Kerekítés – vizuálisan',                  color: '#2563EB', icon: '🎯', generators: [G5.roundHundreds] },
      { key: 'g5_nl_arith',         name: 'Számegyenes – számolás',                  color: '#1D4ED8', icon: '➕', generators: [G5.addLarge, G5.subLarge] },
    ]},
    { key: 'g5_vis_ops', name: 'Vizuális: Műveletek', color: '#10B981', icon: '🖼️', topics: [
      { key: 'g5_mul_array',        name: 'Szorzótábla rács',                        color: '#6EE7B7', icon: '✖️', generators: [G5.mulTwoDigit] },
      { key: 'g5_div_share',        name: 'Osztás – szétosztás',                     color: '#10B981', icon: '➗', generators: [G5.divLong] },
      { key: 'g5_balance_vis',      name: 'Mérleg – egyensúly',                      color: '#059669', icon: '⚖️', generators: [G5.addLarge] },
    ]},
    { key: 'g5_vis_frac', name: 'Vizuális: Törtek és tizedes számok', color: '#6366F1', icon: '🖼️', topics: [
      { key: 'g5_frac_compare_vis', name: 'Törtek összehasonlítása – vizuálisan',    color: '#818CF8', icon: '½', generators: [G5.fractionAdd] },
      { key: 'g5_frac_equiv_vis',   name: 'Egyenértékű törtek – vizuálisan',         color: '#A5B4FC', icon: '🔄', generators: [G5.fractionAdd] },
      { key: 'g5_decimal_place_vis',name: 'Tizedes számok – helyiérték',             color: '#6366F1', icon: '🔟', generators: [G5.decimalRead] },
      { key: 'g5_decimal_line_vis', name: 'Tizedes számok számegyenesen',            color: '#4F46E5', icon: '📏', generators: [G5.decimalRead] },
    ]},
    { key: 'g5_vis_geo', name: 'Vizuális: Geometria', color: '#EAB308', icon: '🖼️', topics: [
      { key: 'g5_shape_vis',        name: 'Síkidom tulajdonságai – vizuálisan',      color: '#FDE047', icon: '🔷', generators: [G5.geoRectArea] },
      { key: 'g5_angle_vis',        name: 'Szögtípusok – vizuálisan',               color: '#EAB308', icon: '∠', generators: [G4.winkelTyp] },
      { key: 'g5_perim_vis',        name: 'Kerület – vizuálisan',                   color: '#CA8A04', icon: '🔲', generators: [G5.geoRectPerimeter] },
      { key: 'g5_area_vis',         name: 'Terület – rácsos',                       color: '#A16207', icon: '⬛', generators: [G5.geoRectArea] },
      { key: 'g5_symmetry_vis',     name: 'Tükrözés – vizuálisan',                  color: '#854D0E', icon: '🪞', generators: [G4.symmetrieAchsen] },
    ]},
    { key: 'g5_vis_data', name: 'Vizuális: Adatok és mértékegységek', color: '#10B981', icon: '🖼️', topics: [
      { key: 'g5_barchart_vis',     name: 'Oszlopdiagram olvasása',                 color: '#6EE7B7', icon: '📊', generators: [G5.chartRead] },
      { key: 'g5_unit_convert',     name: 'Mértékegységek – vizuálisan',            color: '#10B981', icon: '📏', generators: [G5.unitLength] },
    ]},
    { key: 'g5_zahlen', name: 'Számok és számrendszer', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g5_z_million',  name: 'Természetes számok millióig',                color: '#60A5FA', icon: '🔢', generators: [G5.largeNumbers, G5.readLargeNum, G5.compareNums] },
      { key: 'g5_z_read',    name: 'Számok olvasása és írása',                    color: '#93C5FD', icon: '📝', generators: [G5.readLargeNum] },
      { key: 'g5_z_compare', name: 'Összehasonlítás  (< · > · =)',                color: '#2563EB', icon: '⚖️', generators: [G5.compareNums] },
      { key: 'g5_z_order',   name: 'Rendezés',                                    color: '#1D4ED8', icon: '📊', generators: [G5.compareNums, G5.readLargeNum] },
      { key: 'g5_z_place',   name: 'Helyiérték',                                  color: '#3B82F6', icon: '🧱', generators: [G5.readLargeNum, G5.compareNums] },
      { key: 'g5_z_expand',  name: 'Felbontás helyiértékek szerint',              color: '#60A5FA', icon: '🧩', generators: [G5.readLargeNum, G5.addLarge] },
      { key: 'g5_z_line',    name: 'Számegyenes',                                 color: '#93C5FD', icon: '📏', generators: [G5.readLargeNum, G5.compareNums] },
      { key: 'g5_z_neighbor','name': 'Szomszédos számok',                         color: '#BFDBFE', icon: '↔️', generators: [G5.readLargeNum] },
    ]},
    { key: 'g5_round', name: 'Kerekítés és becslés', color: '#06B6D4', icon: '🎯', topics: [
      { key: 'g5_rnd_10',    name: 'Kerekítés tízesre',                           color: '#22D3EE', icon: '🎯', generators: [G5.roundHundreds, G5.decimalRound] },
      { key: 'g5_rnd_100',   name: 'Kerekítés százasra',                          color: '#06B6D4', icon: '🎯', generators: [G5.roundHundreds, G5.decimalRound] },
      { key: 'g5_rnd_1000',  name: 'Kerekítés ezresre',                           color: '#0891B2', icon: '🎯', generators: [G5.roundHundreds] },
      { key: 'g5_rnd_large', name: 'Kerekítés nagyobb helyiértékre (10 000, 100 000)', color: '#0E7490', icon: '🎯', generators: [G5.roundHundreds] },
      { key: 'g5_rnd_est',   name: 'Becslés',                                     color: '#155E75', icon: '🤔', generators: [G5.roundHundreds, G5.compareNums] },
    ]},
    { key: 'g5_add', name: 'Összeadás', color: '#EF4444', icon: '➕', topics: [
      { key: 'g5_add_mental', name: 'Fejben összeadás',                           color: '#FCA5A5', icon: '🧠', generators: [G5.addLarge, G5.addComplement100k] },
      { key: 'g5_add_written','name': 'Írásbeli összeadás',                       color: '#EF4444', icon: '➕', generators: [G5.addLarge] },
      { key: 'g5_add_check',  name: 'Ellenőrzés (próba)',                         color: '#DC2626', icon: '✅', generators: [G5.addLarge, G5.subLarge] },
      { key: 'g5_add_word',   name: 'Szöveges feladat (összeadás)',               color: '#B91C1C', icon: '📖', generators: [G5.wordAdd] },
    ]},
    { key: 'g5_sub', name: 'Kivonás', color: '#F97316', icon: '➖', topics: [
      { key: 'g5_sub_mental', name: 'Fejben kivonás',                             color: '#FDBA74', icon: '🧠', generators: [G5.subLarge] },
      { key: 'g5_sub_written','name': 'Írásbeli kivonás',                         color: '#F97316', icon: '➖', generators: [G5.subLarge] },
      { key: 'g5_sub_check',  name: 'Ellenőrzés (próba)',                         color: '#EA580C', icon: '✅', generators: [G5.subLarge, G5.addLarge] },
      { key: 'g5_sub_word',   name: 'Szöveges feladat (kivonás)',                 color: '#C2410C', icon: '📖', generators: [G5.wordSub] },
    ]},
    { key: 'g5_mul', name: 'Szorzás', color: '#10B981', icon: '✖️', topics: [
      { key: 'g5_mul_mental', name: 'Fejbeli szorzás',                            color: '#6EE7B7', icon: '🧠', generators: [G5.mulTwoDigit, G5.mulPow10] },
      { key: 'g5_mul_written','name': 'Írásbeli szorzás (többjegyű)',              color: '#10B981', icon: '✖️', generators: [G5.mulTwoDigit, G5.mulThreeOne] },
      { key: 'g5_mul_round',  name: 'Kerek számok szorzása  (20 × 30)',           color: '#059669', icon: '🔄', generators: [G5.mulPow10] },
      { key: 'g5_mul_pow10',  name: '×10, ×100, ×1000',                           color: '#047857', icon: '🔟', generators: [G5.mulPow10] },
      { key: 'g5_mul_word',   name: 'Szöveges feladat (szorzás)',                 color: '#065F46', icon: '📖', generators: [G5.wordMul] },
    ]},
    { key: 'g5_div', name: 'Osztás', color: '#8B5CF6', icon: '➗', topics: [
      { key: 'g5_div_mental', name: 'Fejbeli osztás',                             color: '#C4B5FD', icon: '🧠', generators: [G5.divLong, G5.divPow10] },
      { key: 'g5_div_rem',    name: 'Maradékos osztás',                           color: '#A78BFA', icon: '➗', generators: [G5.divRemainder] },
      { key: 'g5_div_written','name': 'Írásbeli osztás',                          color: '#8B5CF6', icon: '📝', generators: [G5.divLong] },
      { key: 'g5_div_pow10',  name: '÷10, ÷100',                                 color: '#7C3AED', icon: '🔟', generators: [G5.divPow10] },
      { key: 'g5_div_word',   name: 'Szöveges feladat (osztás)',                  color: '#6D28D9', icon: '📖', generators: [G5.wordDiv] },
    ]},
    { key: 'g5_frac', name: 'Törtek', color: '#6366F1', icon: '½', topics: [
      { key: 'g5_frac_concept', name: 'Számlál és nevező',                        color: '#818CF8', icon: '½', generators: [G5.fractionAdd, G5.mixedNumber] },
      { key: 'g5_frac_visual',  name: 'Törtek ábrázolása',                        color: '#A5B4FC', icon: '🍕', generators: [G5.fractionAdd, G5.mixedNumber] },
      { key: 'g5_frac_compare', name: 'Törtek összehasonlítása',                  color: '#6366F1', icon: '⚖️', generators: [G5.fractionAdd, G5.fractionSub] },
      { key: 'g5_frac_simplify','name': 'Egyszerűsítés',                          color: '#4F46E5', icon: '✂️', generators: [G5.gcd] },
      { key: 'g5_frac_equiv',   name: 'Egyenlő törtek  (2/4 = 1/2)',              color: '#4338CA', icon: '🔄', generators: [G5.fractionAdd, G5.mixedNumber] },
      { key: 'g5_frac_addsub',  name: 'Törtek összeadása és kivonása',            color: '#3730A3', icon: '➕', generators: [G5.fractionAdd, G5.fractionSub, G5.fractionDiff] },
    ]},
    { key: 'g5_decimal', name: 'Tizedes számok', color: '#14B8A6', icon: '🔟', topics: [
      { key: 'g5_dec_concept', name: 'Tizedes számok fogalma, olvasása, írása',   color: '#5EEAD4', icon: '📝', generators: [G5.decimalRead] },
      { key: 'g5_dec_compare', name: 'Tizedes számok összehasonlítása',           color: '#14B8A6', icon: '⚖️', generators: [G5.decimalCompare] },
      { key: 'g5_dec_line',    name: 'Tizedes számok a számegyenesen',            color: '#0D9488', icon: '📏', generators: [G5.decimalRead, G5.decimalCompare] },
      { key: 'g5_dec_add',     name: 'Tizedes számok összeadása',                 color: '#0F766E', icon: '➕', generators: [G5.decimalAdd] },
      { key: 'g5_dec_sub',     name: 'Tizedes számok kivonása',                   color: '#115E59', icon: '➖', generators: [G5.decimalSub] },
    ]},
    { key: 'g5_units', name: 'Mértékegységek', color: '#F59E0B', icon: '📏', topics: [
      { key: 'g5_units_len',  name: 'Hossz  (km · m · cm · mm)',                 color: '#FCD34D', icon: '📏', generators: [G5.unitLength] },
      { key: 'g5_units_mass', name: 'Súly/Tömeg  (t · kg · g)',                  color: '#FBBF24', icon: '⚖️', generators: [G5.unitMass] },
      { key: 'g5_units_time', name: 'Idő  (év · hónap · hét · nap · h · perc · s)', color: '#F59E0B', icon: '⏱️', generators: [G5.unitTime] },
      { key: 'g5_units_area', name: 'Terület  (m² · cm²)',                       color: '#D97706', icon: '⬜', generators: [G5.geoRectArea, G5.squareAreaG5] },
      { key: 'g5_units_money','name': 'Pénz  (Ft · fillér  /  € · cent)',        color: '#B45309', icon: '💶', generators: [G5.unitMoney, G5.wordAdd] },
    ]},
    { key: 'g5_geo', name: 'Geometria', color: '#EAB308', icon: '📐', topics: [
      { key: 'g5_geo_shapes', name: 'Síkidomok tulajdonságai',                    color: '#FDE047', icon: '🔷', generators: [G5.triangleAreaG5, G5.squareAreaG5] },
      { key: 'g5_geo_coord',  name: 'Koordináta-rendszer',                        color: '#EAB308', icon: '🗺️', generators: [G5.coordRead] },
      { key: 'g5_geo_nets',   name: 'Hálók és nézetek',                           color: '#CA8A04', icon: '📦', generators: [G5.geoRectArea, G5.squareAreaG5] },
    ]},
    { key: 'g5_angles', name: 'Szögek', color: '#6366F1', icon: '∠', topics: [
      { key: 'g5_ang_concept', name: 'Szög fogalma',                              color: '#818CF8', icon: '∠', generators: [G4.winkelTyp] },
      { key: 'g5_ang_types',   name: 'Szögtípusok  (hegyesszög · derékszög · tompaszög)', color: '#6366F1', icon: '📐', generators: [G4.winkelKlasse] },
      { key: 'g5_ang_measure', name: 'Szögek mérése',                             color: '#4F46E5', icon: '📏', generators: [G4.winkelTyp] },
      { key: 'g5_ang_draw',    name: 'Szögek szerkesztése',                       color: '#4338CA', icon: '✏️', generators: [G4.dreieckWinkel] },
    ]},
    { key: 'g5_perim', name: 'Kerület', color: '#34D399', icon: '🔲', topics: [
      { key: 'g5_peri_shapes', name: 'Síkidomok kerülete',                        color: '#6EE7B7', icon: '🔲', generators: [G5.geoRectPerimeter, G5.geoSquarePerimeter] },
      { key: 'g5_peri_rect',   name: 'Téglalap és négyzet kerülete',             color: '#34D399', icon: '⬜', generators: [G5.geoRectPerimeter] },
      { key: 'g5_peri_comp',   name: 'Összetett alakzatok kerülete',             color: '#059669', icon: '🔷', generators: [G5.geoRectPerimeter, G5.geoSquarePerimeter] },
    ]},
    { key: 'g5_area', name: 'Terület', color: '#FBBF24', icon: '⬛', topics: [
      { key: 'g5_area_sqcm',  name: 'Négyzetcentiméter  (cm²)',                  color: '#FDE68A', icon: '⬛', generators: [G5.geoRectArea] },
      { key: 'g5_area_rect',  name: 'Téglalap területe',                         color: '#FBBF24', icon: '⬜', generators: [G5.geoRectArea] },
      { key: 'g5_area_square','name': 'Négyzet területe',                        color: '#F59E0B', icon: '🟨', generators: [G5.squareAreaG5] },
      { key: 'g5_area_conv',  name: 'Területmértékek váltása  (m² ↔ cm²)',       color: '#D97706', icon: '🔄', generators: [G5.unitLength, G5.geoRectArea] },
    ]},
    { key: 'g5_symmetry', name: 'Tükrözés és szimmetria', color: '#EC4899', icon: '🔄', topics: [
      { key: 'g5_sym_axis',    name: 'Szimmetriatengely',                         color: '#F9A8D4', icon: '🔄', generators: [G4.symmetrieAchsen] },
      { key: 'g5_sym_reflect', name: 'Tükrözés',                                  color: '#EC4899', icon: '🪞', generators: [G4.symmetrieAchsen] },
    ]},
    { key: 'g5_stats', name: 'Diagramok és statisztika', color: '#10B981', icon: '📊', topics: [
      { key: 'g5_stat_read',  name: 'Diagramok olvasása és értelmezése',         color: '#6EE7B7', icon: '📊', generators: [G5.chartRead, G5.calcMean] },
      { key: 'g5_stat_mean',  name: 'Átlag (középérték)',                         color: '#10B981', icon: '📈', generators: [G5.calcMean] },
      { key: 'g5_stat_table', name: 'Táblázatok és gyakoriság',                  color: '#059669', icon: '📋', generators: [G5.chartRead, G5.mean] },
    ]},
    { key: 'g5_word', name: 'Szöveges feladatok', color: '#EF4444', icon: '📖', topics: [
      { key: 'g5_word_add',   name: 'Szöveges feladatok · összeadás',            color: '#FCA5A5', icon: '➕', generators: [G5.wordAdd] },
      { key: 'g5_word_sub',   name: 'Szöveges feladatok · kivonás',              color: '#F87171', icon: '➖', generators: [G5.wordSub] },
      { key: 'g5_word_mul',   name: 'Szöveges feladatok · szorzás',              color: '#EF4444', icon: '✖️', generators: [G5.wordMul] },
      { key: 'g5_word_div',   name: 'Szöveges feladatok · osztás',               color: '#DC2626', icon: '➗', generators: [G5.wordDiv] },
      { key: 'g5_word_multi', name: 'Többlépéses feladatok',                     color: '#B91C1C', icon: '🔗', generators: [G5.wordFence, G5.wordTravel, G5.wordMul, G5.wordDiv] },
      { key: 'g5_word_time',  name: 'Időszámítás',                               color: '#991B1B', icon: '⏱️', generators: [G5.wordTravel, G5.unitTime] },
      { key: 'g5_word_money', name: 'Pénzszámítás',                              color: '#7F1D1D', icon: '💶', generators: [G5.wordAdd, G5.wordSub, G5.unitMoney] },
    ]},
    { key: 'g5_terfogat', name: 'Térfogat', color: '#0EA5E9', icon: '📦', topics: [
      { key: 'g5_vol_cube',   name: 'Kocka térfogata',                         color: '#38BDF8', icon: '🟦', generators: [G5.volumeCube] },
      { key: 'g5_vol_cuboid', name: 'Téglatest térfogata',                     color: '#0EA5E9', icon: '📦', generators: [G5.volumeCuboid] },
      { key: 'g5_vol_word',   name: 'Szöveges feladatok – térfogat',           color: '#0284C7', icon: '📖', generators: [G5.volumeWord] },
    ]},
    { key: 'g5_neg_hu', name: 'Negatív számok (bevezetés)', color: '#8B5CF6', icon: '➖', topics: [
      { key: 'g5_neg_intro',  name: 'Negatív számok – bevezetés',              color: '#A78BFA', icon: '➖', generators: [G5.negativeIntro, G5.negativeNumberLine] },
      { key: 'g5_neg_temp',   name: 'Hőmérséklet-feladatok',                   color: '#8B5CF6', icon: '🌡️', generators: [G5.negativeTemp] },
      { key: 'g5_neg_diff',   name: 'Távolságok a számegyenesen',              color: '#7C3AED', icon: '↔️', generators: [G5.negativeDiff] },
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
      { key: 'g1_count',   name: 'Recunoaștere · Numărare', color: '#60A5FA', icon: '🔢', generators: [G1.zaehlen] },
      { key: 'g1_visual',  name: 'Puncte · Zar · Degete · Imagini', color: '#93C5FD', icon: '🎲', generators: [G1.zaehlen] },
      { key: 'g1_compare', name: 'Mai mare · Mai mic · Egal · Ordine', color: '#2563EB', icon: '⚖️', generators: [G1.compare, G1.numberOrder] },
      { key: 'g1_pos',     name: 'Înainte · După · Dreapta numerelor', color: '#1D4ED8', icon: '📏', generators: [G1.vorgaenger, G1.nachfolger, G1.numberLine] },
    ]},
    { key: 'g1_zahlen20', name: 'Numere până la 20', color: '#06B6D4', icon: '🔟', topics: [
      { key: 'g1_num1120',       name: 'Numere 11–20', color: '#22D3EE', icon: '🔟', generators: [G1.zaehlen, G1.placeValue20] },
      { key: 'g1_place_value20', name: 'Zeci și unități  (14 = 1Z + 4U)', color: '#0891B2', icon: '🧱', generators: [G1.placeValue20] },
    ]},
    { key: 'g1_rechnen', name: 'Operații de bază', color: '#EF4444', icon: '➕', topics: [
      { key: 'g1_addpics', name: 'Adunare cu imagini', color: '#FCA5A5', icon: '🖼️', generators: [G1.zaehlen, G1.add10, G1.add10b] },
      { key: 'add10',      name: 'Adunare până la 10', color: '#F87171', icon: '➕', generators: [G1.add10, G1.add10b] },
      { key: 'add20',      name: 'Adunare până la 20', color: '#DC2626', icon: '➕', generators: [G1.add20, G1.add20b] },
      { key: 'g1_subpics', name: 'Scădere cu imagini', color: '#FCA5A5', icon: '🖼️', generators: [G1.zaehlen, G1.sub10, G1.sub10b] },
      { key: 'sub10',      name: 'Scădere până la 10', color: '#EF4444', icon: '➖', generators: [G1.sub10, G1.sub10b] },
      { key: 'sub20',      name: 'Scădere până la 20', color: '#B91C1C', icon: '➖', generators: [G1.sub20, G1.sub20b] },
      { key: 'g1_tausch', name: 'Comutativitate și operații inverse', color: '#F59E0B', icon: '🔄', generators: [G1.tausch, G1.missing10, G1.missing10sub] },
    ]},
    { key: 'g1_struktur', name: 'Înțelegerea numerelor', color: '#8B5CF6', icon: '🧩', topics: [
      { key: 'g1_zahlzerlegung', name: 'Descompunerea numerelor  (5 = 2 + 3)', color: '#A78BFA', icon: '🧩', generators: [G1.zahlzerlegung] },
      { key: 'g1_ergaenzen',     name: 'Completează!  (5 + __ = 10)', color: '#7C3AED', icon: '❓', generators: [G1.missing10, G1.missing10sub] },
      { key: 'g1_verdoppeln',    name: 'Dublare  (3 + 3 = ?)', color: '#8B5CF6', icon: '✌️', generators: [G1.verdoppeln] },
      { key: 'g1_halbieren',     name: 'Înjumătățire  (6 → 3)', color: '#6D28D9', icon: '✂️', generators: [G1.halbieren] },
      { key: 'g1_sequence',      name: 'Șiruri de numere  (2–4–6–?)', color: '#5B21B6', icon: '➡️', generators: [G1.sequence, G1.evenOdd] },
    ]},
    { key: 'g1_geo', name: 'Geometrie și orientare spațială', color: '#10B981', icon: '🔷', topics: [
      { key: 'g1_shapes',  name: 'Forme (cerc · pătrat · dreptunghi · triunghi)', color: '#34D399', icon: '🔷', generators: [G1.shapes] },
      { key: 'g1_spatial', name: 'Direcții (sus · jos · stânga · dreapta)', color: '#059669', icon: '🧭', generators: [G1.spatial] },
      { key: 'g1_pattern', name: 'Tipare (culori și forme)', color: '#047857', icon: '🎨', generators: [G1.pattern] },
    ]},
    { key: 'g1_messen', name: 'Măsurători și mărimi', color: '#F59E0B', icon: '📏', topics: [
      { key: 'g1_laenger', name: 'Lungime  (mai lung · mai scurt)', color: '#FBBF24', icon: '📏', generators: [G1.laenger] },
      { key: 'g1_weight',  name: 'Greutate  (mai greu · mai ușor)', color: '#F59E0B', icon: '⚖️', generators: [G1.weight] },
      { key: 'g1_volume',  name: 'Volum  (plin · gol · mai mult · mai puțin)', color: '#D97706', icon: '🥤', generators: [G1.volume] },
    ]},
    { key: 'g1_alltag', name: 'Matematica în viața de zi cu zi', color: '#FF2D78', icon: '🌍', topics: [
      { key: 'g1_clock',      name: 'Ora  (ore întregi · ore și jumătate)', color: '#FF2D78', icon: '🕐', generators: [G1.clock1, G1.clockQuarter] },
      { key: 'g1_wochentage', name: 'Zilele săptămânii', color: '#FB7185', icon: '📅', generators: [G1.wochentage] },
      { key: 'g1_coins',      name: 'Monede · Cumpărături simple', color: '#FFD700', icon: '🪙', generators: [G1.coins] },
      { key: 'g1_data',       name: 'Date simple (tabele)', color: '#E879F9', icon: '📊', generators: [G1.dataTable] },
      { key: 'word',          name: 'Probleme', color: '#C026D3', icon: '📖', generators: [G1.word1, G1.word2, G1.word3, G1.word4, G1.word5, G1.word6, G1.word7, G1.word8, G1.word9, G1.word10] },
    ]},
  ],
  2: [
    { key: 'g2_numbers', name: 'Numere și sistemul numeric', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g2_zahlen100',    name: 'Numere până la 100',                    color: '#60A5FA', icon: '💯', generators: [G2.vorgaenger2, G2.nachfolger2, G2.add100tens] },
      { key: 'g2_compare',     name: 'Citire · scriere · comparare · ordine', color: '#93C5FD', icon: '⚖️', generators: [G2.nachbarzahlen, G2.stellenwert2] },
      { key: 'g2_vorgaenger',  name: 'Precedent / Succesor',                  color: '#BFDBFE', icon: '◀▶', generators: [G2.vorgaenger2, G2.nachfolger2] },
      { key: 'g2_nachbarn',    name: 'Numere vecine',                         color: '#BFDBFE', icon: '🔢', generators: [G2.nachbarzahlen] },
      { key: 'g2_stellenwert', name: 'Sistemul pozițional',                   color: '#93C5FD', icon: '📊', generators: [G2.stellenwert2] },
      { key: 'g2_zerlegung',   name: 'Descompunerea numerelor',               color: '#BFDBFE', icon: '🧩', generators: [G2.zahlzerlegung2] },
      { key: 'g2_zahlstr',     name: 'Dreapta numerelor',                     color: '#BFDBFE', icon: '📏', generators: [G2.sequence, G2.missing100] },
    ]},
    { key: 'g2_addition', name: 'Adunare', color: '#10B981', icon: '➕', topics: [
      { key: 'g2_add_kopf',  name: 'Calcul mental',               color: '#34D399', icon: '🧠', generators: [G2.add100tens, G2.addOhne] },
      { key: 'g2_add_ohne',  name: 'Adunare fără transport',      color: '#6EE7B7', icon: '➕', generators: [G2.addOhne] },
      { key: 'g2_add_mit',   name: 'Adunare cu transport',        color: '#6EE7B7', icon: '➕', generators: [G2.addMit] },
      { key: 'g2_add3',      name: 'Adunarea a trei numere',      color: '#A7F3D0', icon: '➕', generators: [G2.add3nums] },
      { key: 'g2_add_word',  name: 'Probleme',                    color: '#D1FAE5', icon: '📖', generators: [G2.wordAddG2, G2.word1] },
    ]},
    { key: 'g2_subtraction', name: 'Scădere', color: '#EF4444', icon: '➖', topics: [
      { key: 'g2_sub_kopf',  name: 'Calcul mental',               color: '#FCA5A5', icon: '🧠', generators: [G2.sub100tens, G2.subOhne] },
      { key: 'g2_sub_ohne',  name: 'Scădere fără împrumut',       color: '#FCA5A5', icon: '➖', generators: [G2.subOhne] },
      { key: 'g2_sub_mit',   name: 'Scădere cu împrumut',         color: '#F87171', icon: '➖', generators: [G2.subMit] },
      { key: 'g2_sub_word',  name: 'Probleme',                    color: '#FEE2E2', icon: '📖', generators: [G2.wordSubG2, G2.word2] },
    ]},
    { key: 'g2_mul', name: 'Înmulțire (noțiuni de bază)', color: '#F59E0B', icon: '✖️', topics: [
      { key: 'g2_mul_rep',    name: 'Înmulțire ca adunare repetată',    color: '#FCD34D', icon: '🔄', generators: [G2.mulRepeated] },
      { key: 'g2_mul_simple', name: 'Tabla înmulțirii (×2, ×5, ×10)',  color: '#FDE68A', icon: '✖️', generators: [G2.mul2510, G2.mul2510b] },
      { key: 'g2_mul_group',  name: 'Numărare în grupuri',              color: '#FEF3C7', icon: '🎯', generators: [G2.mulGroup, G2.wordMulG2] },
    ]},
    { key: 'g2_div', name: 'Împărțire (noțiuni de bază)', color: '#8B5CF6', icon: '➗', topics: [
      { key: 'g2_div_share',  name: 'Împărțire egală',                    color: '#A78BFA', icon: '🍕', generators: [G2.divShare] },
      { key: 'g2_div_rel',    name: 'Legătura înmulțire–împărțire',      color: '#C4B5FD', icon: '🔗', generators: [G2.divMulRel] },
      { key: 'g2_div_simple', name: 'Împărțire simplă',                  color: '#DDD6FE', icon: '➗', generators: [G2.div2510, G2.wordDivG2] },
    ]},
    { key: 'g2_structure', name: 'Structura numerelor', color: '#06B6D4', icon: '🧩', topics: [
      { key: 'g2_seq',     name: 'Șiruri de numere',      color: '#22D3EE', icon: '🔢', generators: [G2.sequence] },
      { key: 'g2_missing', name: 'Tipare · număr lipsă',  color: '#67E8F9', icon: '❓', generators: [G2.missing100, G2.evenOdd] },
      { key: 'g2_round',   name: 'Strategii de calcul',   color: '#A5F3FC', icon: '🎯', generators: [G2.rounding10, G2.missing100] },
    ]},
    { key: 'g2_measure', name: 'Mărimi și unități', color: '#EC4899', icon: '📏', topics: [
      { key: 'g2_length',  name: 'Lungime (cm, m)',       color: '#F9A8D4', icon: '📏', generators: [G2.units] },
      { key: 'g2_weight',  name: 'Greutate (g, kg)',      color: '#F9A8D4', icon: '⚖️', generators: [G2.weightGKg] },
      { key: 'g2_clock',   name: 'Citirea ceasului',      color: '#FBCFE8', icon: '🕐', generators: [G2.clock2] },
      { key: 'g2_money',   name: 'Bani (Euro și Cenți)',  color: '#FCE7F3', icon: '💶', generators: [G2.moneyEuroCent, G2.wordMoneyG2] },
    ]},
    { key: 'g2_geometry', name: 'Geometrie', color: '#84CC16', icon: '🔷', topics: [
      { key: 'g2_shapes',   name: 'Forme',     color: '#BEF264', icon: '🔷', generators: [G2.shapeBasic] },
      { key: 'g2_strecken', name: 'Segmente',  color: '#D9F99D', icon: '📐', generators: [G2.perimeterSimple] },
    ]},
    { key: 'g2_perimeter', name: 'Perimetru', color: '#F97316', icon: '📐', topics: [
      { key: 'g2_perim', name: 'Perimetrul figurilor simple', color: '#FB923C', icon: '📐', generators: [G2.perimeterSimple] },
    ]},
    { key: 'g2_data', name: 'Date', color: '#A855F7', icon: '📊', topics: [
      { key: 'g2_tables',   name: 'Tabele',   color: '#C084FC', icon: '📊', generators: [G2.word1, G2.word4] },
      { key: 'g2_diagrams', name: 'Diagrame', color: '#D8B4FE', icon: '📈', generators: [G2.sequence, G2.evenOdd] },
    ]},
    { key: 'g2_word', name: 'Probleme', color: '#64748B', icon: '📖', topics: [
      { key: 'g2_word_add',   name: 'Probleme de adunare',    color: '#94A3B8', icon: '📖', generators: [G2.wordAddG2, G2.word1] },
      { key: 'g2_word_sub',   name: 'Probleme de scădere',    color: '#CBD5E1', icon: '📖', generators: [G2.wordSubG2, G2.word2] },
      { key: 'g2_word_mul',   name: 'Probleme de înmulțire',  color: '#94A3B8', icon: '📖', generators: [G2.wordMulG2, G2.word3] },
      { key: 'g2_word_div',   name: 'Probleme de împărțire',  color: '#CBD5E1', icon: '📖', generators: [G2.wordDivG2] },
      { key: 'g2_word_money', name: 'Probleme cu bani',        color: '#94A3B8', icon: '📖', generators: [G2.wordMoneyG2, G2.word4] },
      { key: 'g2_word_time',  name: 'Probleme cu timp',        color: '#CBD5E1', icon: '📖', generators: [G2.wordTimeG2] },
    ]},
  ],
  3: [
    { key: 'g3_numbers', name: 'Numere și sistem numeric (0–1000)', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g3_read_write',  name: 'Citirea și scrierea numerelor',         color: '#60A5FA', icon: '🔢', generators: [G3.compare1000, G3.pred1000, G3.succ1000] },
      { key: 'g3_compare_t',  name: 'Compararea și ordonarea',               color: '#93C5FD', icon: '🔢', generators: [G3.compare1000] },
      { key: 'g3_place_val',  name: 'Valoarea cifrelor & descompunere',       color: '#BFDBFE', icon: '🧱', generators: [G3.decompose, G3.compose, G3.placeVal1000] },
      { key: 'g3_neighbors',  name: 'Vecinii numerelor & axa numerică',       color: '#DBEAFE', icon: '📊', generators: [G3.pred1000, G3.succ1000] },
      { key: 'g3_stellenwert', name: '🎮 Tabela valorii poziționale – Interactiv', color: '#6366F1', icon: '🧱', generators: [] },
      { key: 'g3_compose',    name: '🎮 Compune numărul din blocuri',         color: '#818CF8', icon: '🧱', generators: [] },
      { key: 'g3_zahlstr',    name: '🎮 Axa numerică 0–1000',                color: '#14B8A6', icon: '📊', generators: [] },
    ]},
    { key: 'g3_add_cat', name: 'Adunare', color: '#10B981', icon: '➕', topics: [
      { key: 'g3_add_mental',  name: 'Adunare mentală până la 1000',         color: '#34D399', icon: '➕', generators: [G3.add1000, G3.add1000b] },
      { key: 'g3_add_written', name: 'Adunare în scris & 3 termeni',         color: '#6EE7B7', icon: '➕', generators: [G3.writtenAdd, G3.add3nums] },
      { key: 'g3_add_obj',    name: '🎮 Adunare cu obiecte',                  color: '#4ADE80', icon: '➕', generators: [] },
    ]},
    { key: 'g3_sub_cat', name: 'Scădere', color: '#EF4444', icon: '➖', topics: [
      { key: 'g3_sub_mental',  name: 'Scădere mentală până la 1000',         color: '#F87171', icon: '➖', generators: [G3.sub1000, G3.sub1000b] },
      { key: 'g3_sub_written', name: 'Scădere în scris',                     color: '#FCA5A5', icon: '➖', generators: [G3.writtenSub] },
      { key: 'g3_sub_obj',    name: '🎮 Scădere cu obiecte',                  color: '#F87171', icon: '➖', generators: [] },
      { key: 'g3_nl_sub',     name: '🎮 Pași înapoi pe axa numerică',        color: '#FCA5A5', icon: '📊', generators: [] },
    ]},
    { key: 'g3_mul_cat', name: 'Înmulțire', color: '#F59E0B', icon: '✖️', topics: [
      { key: 'g3_mul_table',   name: 'Tabla înmulțirii',                     color: '#FBBF24', icon: '✖️', generators: [G3.mul, G3.mulB, G3.missingMul] },
      { key: 'g3_mul_groups',  name: 'Adunare repetată & numere mari',       color: '#FDE68A', icon: '✖️', generators: [G3.mulRepeated, G3.mulLarge] },
      { key: 'g3_mul_grp',    name: '🎮 Grupuri (înmulțire)',                color: '#FCD34D', icon: '✖️', generators: [] },
      { key: 'g3_mul_arr',    name: '🎮 Model matriceal',                    color: '#FDE68A', icon: '✖️', generators: [] },
    ]},
    { key: 'g3_div_cat', name: 'Împărțire', color: '#8B5CF6', icon: '➗', topics: [
      { key: 'g3_div_basic',   name: 'Împărțire de bază',                    color: '#A78BFA', icon: '➗', generators: [G3.div, G3.divB] },
      { key: 'g3_div_rem',     name: 'Împărțire cu rest',                    color: '#C4B5FD', icon: '➗', generators: [G3.divRelMul, G3.divRemainder] },
      { key: 'g3_div_shr',    name: '🎮 Împarte pe farfurii',                color: '#DDD6FE', icon: '➗', generators: [] },
    ]},
    { key: 'g3_patterns_cat', name: 'Modele & Logică', color: '#64748B', icon: '🔗', topics: [
      { key: 'g3_sequence_t',  name: 'Șiruri de numere',                     color: '#94A3B8', icon: '🔗', generators: [G3.sequence] },
      { key: 'g3_missing_t',  name: 'Numere lipsă',                          color: '#CBD5E1', icon: '🔍', generators: [G3.missingMul] },
      { key: 'g3_pattern',    name: '🎮 Blocuri de model – Interactiv',      color: '#7C3AED', icon: '🧩', generators: [] },
    ]},
    { key: 'g3_units_cat', name: 'Unități de măsură', color: '#06B6D4', icon: '📏', topics: [
      { key: 'g3_length_t',    name: 'Lungime (mm, cm, m, km)',              color: '#67E8F9', icon: '📏', generators: [G3.units] },
      { key: 'g3_weight_t',    name: 'Greutate (g, kg)',                     color: '#22D3EE', icon: '⚖️', generators: [G3.units] },
      { key: 'g3_time_t',      name: 'Timp (ore, minute)',                   color: '#06B6D4', icon: '🕐', generators: [G3.clock3, G3.units] },
      { key: 'g3_money_t',     name: 'Bani (euro, cenți)',                   color: '#0891B2', icon: '💰', generators: [G3.word1] },
      { key: 'g3_laenge',     name: '🎮 Măsurare cu rigla',                  color: '#0EA5E9', icon: '📏', generators: [] },
      { key: 'g3_strecken',   name: '🎮 Desenează un segment',               color: '#38BDF8', icon: '✏️', generators: [] },
      { key: 'g3_zeit',       name: '🎮 Citește ceasul',                     color: '#7DD3FC', icon: '🕐', generators: [] },
      { key: 'g3_geld',       name: '🎮 Calcul cu bani',                     color: '#BAE6FD', icon: '💰', generators: [] },
      { key: 'g3_scale',      name: '🎮 Balanță – Greutate',                 color: '#60A5FA', icon: '⚖️', generators: [] },
    ]},
    { key: 'g3_geo_cat', name: 'Geometrie', color: '#EC4899', icon: '📐', topics: [
      { key: 'g3_shapes_t',    name: 'Forme & proprietăți',                  color: '#F472B6', icon: '🔷', generators: [G3.shapeProp, G3.perimCalc] },
      { key: 'g3_angles_t',    name: 'Unghi drept',                          color: '#FB7185', icon: '📐', generators: [G3.shapeProp] },
      { key: 'g3_shapes_vis',  name: '🎮 Recunoaștere forme – Interactiv',   color: '#F43F5E', icon: '🔷', generators: [] },
      { key: 'g3_geo_messen',  name: '🎮 Măsurare segmente',                 color: '#FB923C', icon: '📏', generators: [] },
      { key: 'g3_rightangle',  name: '🎮 Tipuri de unghiuri',                color: '#FDA4AF', icon: '📐', generators: [] },
    ]},
    { key: 'g3_perim_cat', name: 'Perimetru', color: '#F97316', icon: '📐', topics: [
      { key: 'g3_perim_text',  name: 'Perimetrul dreptunghiurilor & pătratelor', color: '#FB923C', icon: '📐', generators: [G3.perimCalc] },
      { key: 'g3_perim',      name: '🎮 Perimetru pe grilă',                 color: '#FDBA74', icon: '📐', generators: [] },
      { key: 'g3_perim_vis',  name: '🎮 Calculează perimetrul',              color: '#FED7AA', icon: '📐', generators: [] },
    ]},
    { key: 'g3_area_cat', name: 'Arie', color: '#84CC16', icon: '⬜', topics: [
      { key: 'g3_area_text',   name: 'Aria dreptunghiurilor',                color: '#BEF264', icon: '⬜', generators: [G3.areaCalc] },
      { key: 'g3_area',       name: '🎮 Numărare pătrate pe grilă',          color: '#D9F99D', icon: '⬜', generators: [] },
      { key: 'g3_area_cmp',   name: '🎮 Compararea ariilor',                 color: '#A3E635', icon: '⬜', generators: [] },
    ]},
    { key: 'g3_data_cat', name: 'Date & Diagrame', color: '#A855F7', icon: '📊', topics: [
      { key: 'g3_tables_t',    name: 'Tabele și date',                       color: '#C084FC', icon: '📊', generators: [G3.barChartRead] },
      { key: 'g3_barchart',   name: '🎮 Diagramă cu bare – Interactiv',      color: '#E9D5FF', icon: '📊', generators: [] },
    ]},
    { key: 'g3_word_cat', name: 'Probleme', color: '#DC2626', icon: '📖', topics: [
      { key: 'g3_word_add_t',  name: 'Probleme de adunare',                  color: '#F87171', icon: '📖', generators: [G3.word1, G3.add1000] },
      { key: 'g3_word_sub_t',  name: 'Probleme de scădere',                  color: '#FCA5A5', icon: '📖', generators: [G3.word1, G3.sub1000] },
      { key: 'g3_word_mul_t',  name: 'Probleme de înmulțire',                color: '#F87171', icon: '📖', generators: [G3.word2] },
      { key: 'g3_word_div_t',  name: 'Probleme de împărțire',                color: '#FCA5A5', icon: '📖', generators: [G3.word3] },
      { key: 'g3_word_multi_t', name: 'Probleme în mai mulți pași',          color: '#F87171', icon: '📖', generators: [G3.word1, G3.word2, G3.word3] },
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
      { key: 'unghiuri', name: 'Unghiuri', color: '#EC4899', icon: '📐', generators: [G4.winkelTyp, G4.winkelKlasse, G4.dreieckWinkel] },
      { key: 'simetrie', name: 'Simetrie', color: '#BE185D', icon: '🪞', generators: [G4.symmetrieAchsen] },
      { key: 'units', name: 'Unități de măsură', color: '#F59E0B', icon: '📏', generators: [G4.units] },
    ]},
    { key: 'g4_word', name: 'Probleme', color: '#EF4444', icon: '📖', topics: [
      { key: 'word', name: 'Probleme', color: '#EF4444', icon: '📖', generators: [G4.word1, G4.word2, G4.word3] },
    ]},
  ],
  5: [
    { key: 'g5_vis_numbers', name: 'Vizual: Numere și valoare pozițională', color: '#3B82F6', icon: '🖼️', topics: [
      { key: 'g5_place_million',    name: 'Tabel valoare pozițională (milioane)',    color: '#60A5FA', icon: '🔢', generators: [G5.readLargeNum] },
      { key: 'g5_number_line_vis',  name: 'Axă numerică – numere mari',             color: '#93C5FD', icon: '📏', generators: [G5.largeNumbers] },
      { key: 'g5_rounding_vis',     name: 'Rotunjire – vizual',                     color: '#2563EB', icon: '🎯', generators: [G5.roundHundreds] },
      { key: 'g5_nl_arith',         name: 'Axă numerică – calcul',                  color: '#1D4ED8', icon: '➕', generators: [G5.addLarge, G5.subLarge] },
    ]},
    { key: 'g5_vis_ops', name: 'Vizual: Operații', color: '#10B981', icon: '🖼️', topics: [
      { key: 'g5_mul_array',        name: 'Rețea de înmulțire',                     color: '#6EE7B7', icon: '✖️', generators: [G5.mulTwoDigit] },
      { key: 'g5_div_share',        name: 'Împărțire – distribuire',                color: '#10B981', icon: '➗', generators: [G5.divLong] },
      { key: 'g5_balance_vis',      name: 'Balanță – echilibru',                    color: '#059669', icon: '⚖️', generators: [G5.addLarge] },
    ]},
    { key: 'g5_vis_frac', name: 'Vizual: Fracții și zecimale', color: '#6366F1', icon: '🖼️', topics: [
      { key: 'g5_frac_compare_vis', name: 'Compararea fracțiilor – vizual',         color: '#818CF8', icon: '½', generators: [G5.fractionAdd] },
      { key: 'g5_frac_equiv_vis',   name: 'Fracții echivalente – vizual',           color: '#A5B4FC', icon: '🔄', generators: [G5.fractionAdd] },
      { key: 'g5_decimal_place_vis',name: 'Zecimale – valoare pozițională',         color: '#6366F1', icon: '🔟', generators: [G5.decimalRead] },
      { key: 'g5_decimal_line_vis', name: 'Zecimale pe axa numerică',               color: '#4F46E5', icon: '📏', generators: [G5.decimalRead] },
    ]},
    { key: 'g5_vis_geo', name: 'Vizual: Geometrie', color: '#EAB308', icon: '🖼️', topics: [
      { key: 'g5_shape_vis',        name: 'Proprietăți figuri – vizual',            color: '#FDE047', icon: '🔷', generators: [G5.geoRectArea] },
      { key: 'g5_angle_vis',        name: 'Tipuri de unghiuri – vizual',            color: '#EAB308', icon: '∠', generators: [G4.winkelTyp] },
      { key: 'g5_perim_vis',        name: 'Perimetru – vizual',                     color: '#CA8A04', icon: '🔲', generators: [G5.geoRectPerimeter] },
      { key: 'g5_area_vis',         name: 'Arie – pe grilă',                        color: '#A16207', icon: '⬛', generators: [G5.geoRectArea] },
      { key: 'g5_symmetry_vis',     name: 'Simetrie – vizual',                      color: '#854D0E', icon: '🪞', generators: [G4.symmetrieAchsen] },
    ]},
    { key: 'g5_vis_data', name: 'Vizual: Date și unități de măsură', color: '#10B981', icon: '🖼️', topics: [
      { key: 'g5_barchart_vis',     name: 'Citirea diagramelor cu bare',            color: '#6EE7B7', icon: '📊', generators: [G5.chartRead] },
      { key: 'g5_unit_convert',     name: 'Unități de măsură – vizual',             color: '#10B981', icon: '📏', generators: [G5.unitLength] },
    ]},
    { key: 'g5_zahlen', name: 'Numere și sistemul numeric', color: '#3B82F6', icon: '🔢', topics: [
      { key: 'g5_z_million',  name: 'Numere naturale până la 1 000 000',           color: '#60A5FA', icon: '🔢', generators: [G5.largeNumbers, G5.readLargeNum, G5.compareNums] },
      { key: 'g5_z_read',    name: 'Citirea și scrierea numerelor',                color: '#93C5FD', icon: '📝', generators: [G5.readLargeNum] },
      { key: 'g5_z_compare', name: 'Compararea numerelor  (< · > · =)',            color: '#2563EB', icon: '⚖️', generators: [G5.compareNums] },
      { key: 'g5_z_order',   name: 'Ordonarea numerelor',                          color: '#1D4ED8', icon: '📊', generators: [G5.compareNums, G5.readLargeNum] },
      { key: 'g5_z_place',   name: 'Valoarea pozițională',                         color: '#3B82F6', icon: '🧱', generators: [G5.readLargeNum, G5.compareNums] },
      { key: 'g5_z_expand',  name: 'Descompunerea numerelor',                      color: '#60A5FA', icon: '🧩', generators: [G5.readLargeNum, G5.addLarge] },
      { key: 'g5_z_line',    name: 'Axa numerelor',                               color: '#93C5FD', icon: '📏', generators: [G5.readLargeNum, G5.compareNums] },
      { key: 'g5_z_neighbor','name': 'Vecinii unui număr',                         color: '#BFDBFE', icon: '↔️', generators: [G5.readLargeNum] },
    ]},
    { key: 'g5_round', name: 'Rotunjire și estimare', color: '#06B6D4', icon: '🎯', topics: [
      { key: 'g5_rnd_10',    name: 'Rotunjire la zeci',                            color: '#22D3EE', icon: '🎯', generators: [G5.roundHundreds, G5.decimalRound] },
      { key: 'g5_rnd_100',   name: 'Rotunjire la sute',                            color: '#06B6D4', icon: '🎯', generators: [G5.roundHundreds, G5.decimalRound] },
      { key: 'g5_rnd_1000',  name: 'Rotunjire la mii',                             color: '#0891B2', icon: '🎯', generators: [G5.roundHundreds] },
      { key: 'g5_rnd_large', name: 'Rotunjire la ordine superioare (10 000, 100 000)', color: '#0E7490', icon: '🎯', generators: [G5.roundHundreds] },
      { key: 'g5_rnd_est',   name: 'Estimare',                                     color: '#155E75', icon: '🤔', generators: [G5.roundHundreds, G5.compareNums] },
    ]},
    { key: 'g5_add', name: 'Adunare', color: '#EF4444', icon: '➕', topics: [
      { key: 'g5_add_mental', name: 'Calcul mintal (adunare)',                     color: '#FCA5A5', icon: '🧠', generators: [G5.addLarge, G5.addComplement100k] },
      { key: 'g5_add_written','name': 'Adunare scrisă',                            color: '#EF4444', icon: '➕', generators: [G5.addLarge] },
      { key: 'g5_add_check',  name: 'Verificare (probă)',                          color: '#DC2626', icon: '✅', generators: [G5.addLarge, G5.subLarge] },
      { key: 'g5_add_word',   name: 'Problemă (adunare)',                          color: '#B91C1C', icon: '📖', generators: [G5.wordAdd] },
    ]},
    { key: 'g5_sub', name: 'Scădere', color: '#F97316', icon: '➖', topics: [
      { key: 'g5_sub_mental', name: 'Calcul mintal (scădere)',                     color: '#FDBA74', icon: '🧠', generators: [G5.subLarge] },
      { key: 'g5_sub_written','name': 'Scădere scrisă',                            color: '#F97316', icon: '➖', generators: [G5.subLarge] },
      { key: 'g5_sub_check',  name: 'Verificare (probă)',                          color: '#EA580C', icon: '✅', generators: [G5.subLarge, G5.addLarge] },
      { key: 'g5_sub_word',   name: 'Problemă (scădere)',                          color: '#C2410C', icon: '📖', generators: [G5.wordSub] },
    ]},
    { key: 'g5_mul', name: 'Înmulțire', color: '#10B981', icon: '✖️', topics: [
      { key: 'g5_mul_mental', name: 'Calcul mintal (înmulțire)',                   color: '#6EE7B7', icon: '🧠', generators: [G5.mulTwoDigit, G5.mulPow10] },
      { key: 'g5_mul_written','name': 'Înmulțire scrisă (mai multe cifre)',         color: '#10B981', icon: '✖️', generators: [G5.mulTwoDigit, G5.mulThreeOne] },
      { key: 'g5_mul_round',  name: 'Înmulțirea numerelor rotunde  (20 × 30)',     color: '#059669', icon: '🔄', generators: [G5.mulPow10] },
      { key: 'g5_mul_pow10',  name: '×10, ×100, ×1000',                            color: '#047857', icon: '🔟', generators: [G5.mulPow10] },
      { key: 'g5_mul_word',   name: 'Problemă (înmulțire)',                        color: '#065F46', icon: '📖', generators: [G5.wordMul] },
    ]},
    { key: 'g5_div', name: 'Împărțire', color: '#8B5CF6', icon: '➗', topics: [
      { key: 'g5_div_mental', name: 'Calcul mintal (împărțire)',                   color: '#C4B5FD', icon: '🧠', generators: [G5.divLong, G5.divPow10] },
      { key: 'g5_div_rem',    name: 'Împărțire cu rest',                           color: '#A78BFA', icon: '➗', generators: [G5.divRemainder] },
      { key: 'g5_div_written','name': 'Împărțire scrisă',                          color: '#8B5CF6', icon: '📝', generators: [G5.divLong] },
      { key: 'g5_div_pow10',  name: '÷10, ÷100',                                  color: '#7C3AED', icon: '🔟', generators: [G5.divPow10] },
      { key: 'g5_div_word',   name: 'Problemă (împărțire)',                        color: '#6D28D9', icon: '📖', generators: [G5.wordDiv] },
    ]},
    { key: 'g5_frac', name: 'Fracții', color: '#6366F1', icon: '½', topics: [
      { key: 'g5_frac_concept', name: 'Numărător și numitor',                      color: '#818CF8', icon: '½', generators: [G5.fractionAdd, G5.mixedNumber] },
      { key: 'g5_frac_visual',  name: 'Reprezentarea fracțiilor',                  color: '#A5B4FC', icon: '🍕', generators: [G5.fractionAdd, G5.mixedNumber] },
      { key: 'g5_frac_compare', name: 'Compararea fracțiilor',                     color: '#6366F1', icon: '⚖️', generators: [G5.fractionAdd, G5.fractionSub] },
      { key: 'g5_frac_simplify','name': 'Simplificarea fracțiilor',                color: '#4F46E5', icon: '✂️', generators: [G5.gcd] },
      { key: 'g5_frac_equiv',   name: 'Fracții echivalente  (2/4 = 1/2)',          color: '#4338CA', icon: '🔄', generators: [G5.fractionAdd, G5.mixedNumber] },
      { key: 'g5_frac_addsub',  name: 'Adunare și scădere fracții',               color: '#3730A3', icon: '➕', generators: [G5.fractionAdd, G5.fractionSub, G5.fractionDiff] },
    ]},
    { key: 'g5_decimal', name: 'Numere zecimale', color: '#14B8A6', icon: '🔟', topics: [
      { key: 'g5_dec_concept', name: 'Citirea și scrierea zecimalelor',            color: '#5EEAD4', icon: '📝', generators: [G5.decimalRead] },
      { key: 'g5_dec_compare', name: 'Compararea zecimalelor',                     color: '#14B8A6', icon: '⚖️', generators: [G5.decimalCompare] },
      { key: 'g5_dec_line',    name: 'Zecimale pe axa numerelor',                 color: '#0D9488', icon: '📏', generators: [G5.decimalRead, G5.decimalCompare] },
      { key: 'g5_dec_add',     name: 'Adunare zecimale',                           color: '#0F766E', icon: '➕', generators: [G5.decimalAdd] },
      { key: 'g5_dec_sub',     name: 'Scădere zecimale',                           color: '#115E59', icon: '➖', generators: [G5.decimalSub] },
    ]},
    { key: 'g5_units', name: 'Unități de măsură', color: '#F59E0B', icon: '📏', topics: [
      { key: 'g5_units_len',  name: 'Lungime  (km · m · cm · mm)',                color: '#FCD34D', icon: '📏', generators: [G5.unitLength] },
      { key: 'g5_units_mass', name: 'Greutate/Masă  (t · kg · g)',                color: '#FBBF24', icon: '⚖️', generators: [G5.unitMass] },
      { key: 'g5_units_time', name: 'Timp  (an · lună · săpt. · zi · h · min · s)', color: '#F59E0B', icon: '⏱️', generators: [G5.unitTime] },
      { key: 'g5_units_area', name: 'Arii  (m² · cm²)',                           color: '#D97706', icon: '⬜', generators: [G5.geoRectArea, G5.squareAreaG5] },
      { key: 'g5_units_money','name': 'Bani  (lei · bani  /  € · cenți)',         color: '#B45309', icon: '💶', generators: [G5.unitMoney, G5.wordAdd] },
    ]},
    { key: 'g5_geo', name: 'Geometrie', color: '#EAB308', icon: '📐', topics: [
      { key: 'g5_geo_shapes', name: 'Proprietățile figurilor plane',               color: '#FDE047', icon: '🔷', generators: [G5.triangleAreaG5, G5.squareAreaG5] },
      { key: 'g5_geo_coord',  name: 'Sistemul de coordonate',                      color: '#EAB308', icon: '🗺️', generators: [G5.coordRead] },
      { key: 'g5_geo_nets',   name: 'Rețele și vedere',                           color: '#CA8A04', icon: '📦', generators: [G5.geoRectArea, G5.squareAreaG5] },
    ]},
    { key: 'g5_angles', name: 'Unghiuri', color: '#6366F1', icon: '∠', topics: [
      { key: 'g5_ang_concept', name: 'Noțiunea de unghi',                          color: '#818CF8', icon: '∠', generators: [G4.winkelTyp] },
      { key: 'g5_ang_types',   name: 'Tipuri de unghiuri  (ascuțit · drept · obtuz)', color: '#6366F1', icon: '📐', generators: [G4.winkelKlasse] },
      { key: 'g5_ang_measure', name: 'Măsurarea unghiurilor',                      color: '#4F46E5', icon: '📏', generators: [G4.winkelTyp] },
      { key: 'g5_ang_draw',    name: 'Desenarea unghiurilor',                      color: '#4338CA', icon: '✏️', generators: [G4.dreieckWinkel] },
    ]},
    { key: 'g5_perim', name: 'Perimetru', color: '#34D399', icon: '🔲', topics: [
      { key: 'g5_peri_shapes', name: 'Perimetrul figurilor',                       color: '#6EE7B7', icon: '🔲', generators: [G5.geoRectPerimeter, G5.geoSquarePerimeter] },
      { key: 'g5_peri_rect',   name: 'Perimetrul dreptunghiului și pătratului',   color: '#34D399', icon: '⬜', generators: [G5.geoRectPerimeter] },
      { key: 'g5_peri_comp',   name: 'Figuri compuse',                            color: '#059669', icon: '🔷', generators: [G5.geoRectPerimeter, G5.geoSquarePerimeter] },
    ]},
    { key: 'g5_area', name: 'Arie', color: '#FBBF24', icon: '⬛', topics: [
      { key: 'g5_area_sqcm',  name: 'Centimetru pătrat  (cm²)',                   color: '#FDE68A', icon: '⬛', generators: [G5.geoRectArea] },
      { key: 'g5_area_rect',  name: 'Aria dreptunghiului',                        color: '#FBBF24', icon: '⬜', generators: [G5.geoRectArea] },
      { key: 'g5_area_square','name': 'Aria pătratului',                          color: '#F59E0B', icon: '🟨', generators: [G5.squareAreaG5] },
      { key: 'g5_area_conv',  name: 'Conversii arii  (m² ↔ cm²)',                 color: '#D97706', icon: '🔄', generators: [G5.unitLength, G5.geoRectArea] },
    ]},
    { key: 'g5_symmetry', name: 'Reflexie și simetrie', color: '#EC4899', icon: '🔄', topics: [
      { key: 'g5_sym_axis',    name: 'Axe de simetrie',                            color: '#F9A8D4', icon: '🔄', generators: [G4.symmetrieAchsen] },
      { key: 'g5_sym_reflect', name: 'Reflexia figurilor',                         color: '#EC4899', icon: '🪞', generators: [G4.symmetrieAchsen] },
    ]},
    { key: 'g5_stats', name: 'Diagrame și statistică', color: '#10B981', icon: '📊', topics: [
      { key: 'g5_stat_read',  name: 'Citirea și interpretarea diagramelor',        color: '#6EE7B7', icon: '📊', generators: [G5.chartRead, G5.calcMean] },
      { key: 'g5_stat_mean',  name: 'Medie (valoare medie)',                       color: '#10B981', icon: '📈', generators: [G5.calcMean] },
      { key: 'g5_stat_table', name: 'Tabele și frecvențe',                         color: '#059669', icon: '📋', generators: [G5.chartRead, G5.mean] },
    ]},
    { key: 'g5_word', name: 'Probleme', color: '#EF4444', icon: '📖', topics: [
      { key: 'g5_word_add',   name: 'Probleme · adunare',                         color: '#FCA5A5', icon: '➕', generators: [G5.wordAdd] },
      { key: 'g5_word_sub',   name: 'Probleme · scădere',                         color: '#F87171', icon: '➖', generators: [G5.wordSub] },
      { key: 'g5_word_mul',   name: 'Probleme · înmulțire',                       color: '#EF4444', icon: '✖️', generators: [G5.wordMul] },
      { key: 'g5_word_div',   name: 'Probleme · împărțire',                       color: '#DC2626', icon: '➗', generators: [G5.wordDiv] },
      { key: 'g5_word_multi', name: 'Probleme cu mai mulți pași',                 color: '#B91C1C', icon: '🔗', generators: [G5.wordFence, G5.wordTravel, G5.wordMul, G5.wordDiv] },
      { key: 'g5_word_time',  name: 'Probleme cu timp',                           color: '#991B1B', icon: '⏱️', generators: [G5.wordTravel, G5.unitTime] },
      { key: 'g5_word_money', name: 'Probleme cu bani',                           color: '#7F1D1D', icon: '💶', generators: [G5.wordAdd, G5.wordSub, G5.unitMoney] },
    ]},
    { key: 'g5_volum', name: 'Volum', color: '#0EA5E9', icon: '📦', topics: [
      { key: 'g5_vol_cube',   name: 'Volumul unui cub',                       color: '#38BDF8', icon: '🟦', generators: [G5.volumeCube] },
      { key: 'g5_vol_cuboid', name: 'Volumul unui paralelipiped',              color: '#0EA5E9', icon: '📦', generators: [G5.volumeCuboid] },
      { key: 'g5_vol_word',   name: 'Probleme cu volum',                      color: '#0284C7', icon: '📖', generators: [G5.volumeWord] },
    ]},
    { key: 'g5_neg_ro', name: 'Numere negative (introducere)', color: '#8B5CF6', icon: '➖', topics: [
      { key: 'g5_neg_intro',  name: 'Numere negative – introducere',          color: '#A78BFA', icon: '➖', generators: [G5.negativeIntro, G5.negativeNumberLine] },
      { key: 'g5_neg_temp',   name: 'Probleme cu temperaturi',                color: '#8B5CF6', icon: '🌡️', generators: [G5.negativeTemp] },
      { key: 'g5_neg_diff',   name: 'Distanțe pe axa numerelor',              color: '#7C3AED', icon: '↔️', generators: [G5.negativeDiff] },
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

export function generateTopicQuestions(
  grade: number,
  topicKey: string,
  countryCode: string,
  count = 10,
  constraint?: TopicConstraint
): MathQuestion[] {
  const themes = getThemesForCC(grade, countryCode);
  for (const theme of themes) {
    for (const topic of theme.topics) {
      if (topic.key === topicKey) {
        // Meghatározzuk a tényleges generátorokat — ha van constraint és a topic meghaladja,
        // akkor constrained generátorokat használunk az eredeti helyett.
        let generators = topic.generators as ((cc: string) => MathQuestion)[];
        if (constraint) {
          const topicMaxN = TOPIC_NUMBER_RANGE[topicKey];
          const needsConstraint = topicMaxN === undefined || topicMaxN > constraint.maxNumber;

          // Compatibility guard: ha a topic minimálisan szükséges számai jóval nagyobbak
          // a constraintnél, akkor a constraint nem alkalmazható (pl. place_value_100 + maxN=10).
          // Ezekre NEM alkalmazzuk a constraintet — inkább az eredeti generátorok futnak.
          const isIncompatible = topicMaxN !== undefined && topicMaxN >= constraint.maxNumber * 5;

          if (needsConstraint && !isIncompatible) {
            const constrained = getConstrainedGenerators(topicKey, constraint);
            if (constrained) generators = constrained;
          }
        }

        const pool: MathQuestion[] = [];
        const seen = new Set<string>();
        let attempts = 0;
        while (pool.length < count && attempts < count * 8) {
          const gen = pick(generators);
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

  // Generate current topic questions - shuffle first for topic variety
  const currentGens = shuffleArray([...topics.current]);
  for (let i = 0; i < currentCount; i++) {
    addUnique(currentGens[i % currentGens.length]);
  }

  // Generate review questions - shuffle for variety
  const reviewPool = topics.review.length > 0 ? topics.review : topics.current;
  const reviewGens = shuffleArray([...reviewPool]);
  for (let i = 0; i < reviewCount; i++) {
    addUnique(reviewGens[i % reviewGens.length]);
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
          // Alternating: add (i=0) → sub/writtenAdd (i=1)
          generators: [G3.add1000, G3.sub1000, G3.writtenAdd, G3.sub1000b],
        },
        multiplication: {
          name: "Multiplication",
          questionCount: 2,
          pointsPerQuestion: 2,
          // Alternating: mul (i=0) → div (i=1)
          generators: [G3.mul, G3.div, G3.mulB, G3.divB],
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
          // Real geometry: perimeter, area, shape properties
          generators: [G3.perimCalc, G3.areaCalc, G3.shapeProp],
        },
        bonus: {
          name: "Bonus",
          questionCount: 1,
          pointsPerQuestion: 1,
          generators: [G3.sequence, G3.missingMul, G3.rounding100],
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

  const currentGens = shuffleArray([...topics.current]);
  for (let i = 0; i < currentCount; i++) {
    addUnique(currentGens[i % currentGens.length]);
  }

  const reviewPool2 = topics.review.length > 0 ? topics.review : topics.current;
  const reviewGens = shuffleArray([...reviewPool2]);
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
