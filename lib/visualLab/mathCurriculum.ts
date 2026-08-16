export type MathLevel = 1 | 2 | 3 | 4 | 5;

export type MathGameId =
  | "math-ninja"
  | "math-defender"
  | "fraction-reactor"
  | "angle-laser"
  | "time-warp"
  | "star-mapper"
  | "meteor-scale"
  | "data-orbit";

export type MathSkill =
  | "number-sense"
  | "operations"
  | "fractions"
  | "decimals-percent"
  | "measurement"
  | "geometry"
  | "coordinates"
  | "patterns-algebra"
  | "data-probability";

export interface GradeCurriculum {
  grade: number;
  skills: MathSkill[];
  numberLimit: number;
  summary: { de: string; hu: string; ro: string; en: string };
}

export interface MathDifficulty {
  grade: number;
  level: MathLevel;
  numberLimit: number;
  rounds: number;
  speedMultiplier: number;
  choices: number;
  fractionMaxDenominator: number;
  angleStep: number;
  timeStep: number;
  coordinateMax: number;
  allowNegativeCoordinates: boolean;
  equationDepth: number;
}

const CURRICULUM: GradeCurriculum[] = [
  { grade: 1, skills: ["number-sense", "operations", "measurement", "geometry", "patterns-algebra", "data-probability"], numberLimit: 20, summary: { de: "Zahlen bis 20, Plus und Minus, Formen, Muster, Zeit und einfache Daten", hu: "Számok 20-ig, összeadás és kivonás, alakzatok, minták, idő és egyszerű adatok", ro: "Numere până la 20, adunare și scădere, forme, tipare, timp și date simple", en: "Numbers to 20, addition and subtraction, shapes, patterns, time and simple data" } },
  { grade: 2, skills: ["number-sense", "operations", "measurement", "geometry", "patterns-algebra", "data-probability"], numberLimit: 100, summary: { de: "Zahlen bis 100, Grundrechenarten, Geld, Längen, Formen und Tabellen", hu: "Számok 100-ig, alapműveletek, pénz, hosszúság, alakzatok és táblázatok", ro: "Numere până la 100, operații de bază, bani, lungimi, forme și tabele", en: "Numbers to 100, basic operations, money, length, shapes and tables" } },
  { grade: 3, skills: ["number-sense", "operations", "fractions", "measurement", "geometry", "coordinates", "patterns-algebra", "data-probability"], numberLimit: 1_000, summary: { de: "Zahlen bis 1000, Mal und Geteilt, erste Brüche, Größen, Geometrie und Diagramme", hu: "Számok 1000-ig, szorzás és osztás, törtek, mértékek, geometria és diagramok", ro: "Numere până la 1000, înmulțire și împărțire, fracții, măsuri, geometrie și grafice", en: "Numbers to 1000, multiplication and division, fractions, measures, geometry and charts" } },
  { grade: 4, skills: ["number-sense", "operations", "fractions", "measurement", "geometry", "coordinates", "patterns-algebra", "data-probability"], numberLimit: 10_000, summary: { de: "Große Zahlen, schriftliches Rechnen, Brüche, Fläche, Umfang, Koordinaten und Daten", hu: "Nagy számok, írásbeli műveletek, törtek, terület, kerület, koordináták és adatok", ro: "Numere mari, calcule scrise, fracții, arie, perimetru, coordonate și date", en: "Large numbers, written calculation, fractions, area, perimeter, coordinates and data" } },
  { grade: 5, skills: ["number-sense", "operations", "fractions", "decimals-percent", "measurement", "geometry", "coordinates", "patterns-algebra", "data-probability"], numberLimit: 100_000, summary: { de: "Ganze Zahlen, Brüche und Dezimalzahlen, Terme, Flächen, Körper und Daten", hu: "Egész számok, törtek és tizedesek, kifejezések, síkidomok, testek és adatok", ro: "Numere întregi, fracții și zecimale, expresii, figuri, corpuri și date", en: "Integers, fractions and decimals, expressions, shapes, solids and data" } },
  { grade: 6, skills: ["operations", "fractions", "decimals-percent", "measurement", "geometry", "coordinates", "patterns-algebra", "data-probability"], numberLimit: 1_000_000, summary: { de: "Rationale Zahlen, Prozent und Verhältnis, Gleichungen, Volumen und Wahrscheinlichkeit", hu: "Racionális számok, százalék és arány, egyenletek, térfogat és valószínűség", ro: "Numere raționale, procente și rapoarte, ecuații, volum și probabilitate", en: "Rational numbers, percent and ratio, equations, volume and probability" } },
  { grade: 7, skills: ["operations", "fractions", "decimals-percent", "measurement", "geometry", "coordinates", "patterns-algebra", "data-probability"], numberLimit: 1_000_000, summary: { de: "Negative Zahlen, Prozentrechnung, Proportionalität, Terme, Gleichungen und Statistik", hu: "Negatív számok, százalékszámítás, arányosság, kifejezések, egyenletek és statisztika", ro: "Numere negative, procente, proporționalitate, expresii, ecuații și statistică", en: "Negative numbers, percent, proportionality, expressions, equations and statistics" } },
  { grade: 8, skills: ["operations", "fractions", "decimals-percent", "measurement", "geometry", "coordinates", "patterns-algebra", "data-probability"], numberLimit: 1_000_000, summary: { de: "Lineare Zusammenhänge, Potenzen, Gleichungen, Geometrie, Statistik und Wahrscheinlichkeit", hu: "Lineáris összefüggések, hatványok, egyenletek, geometria, statisztika és valószínűség", ro: "Relații liniare, puteri, ecuații, geometrie, statistică și probabilitate", en: "Linear relationships, powers, equations, geometry, statistics and probability" } },
];

const LEVEL_SCALE = [0.28, 0.42, 0.58, 0.78, 1] as const;

export function clampGrade(grade: number): number {
  return Math.max(1, Math.min(8, Math.round(grade || 1)));
}

export function clampMathLevel(level: number): MathLevel {
  return Math.max(1, Math.min(5, Math.round(level || 1))) as MathLevel;
}

export function curriculumForGrade(grade: number): GradeCurriculum {
  return CURRICULUM[clampGrade(grade) - 1];
}

export function requiredCorrectForLevel(level: MathLevel): number {
  return 3 + level * 2;
}

export function difficultyFor(gradeInput: number, levelInput: number): MathDifficulty {
  const grade = clampGrade(gradeInput);
  const level = clampMathLevel(levelInput);
  const curriculum = curriculumForGrade(grade);
  const scale = LEVEL_SCALE[level - 1];
  const numberFloor = grade <= 2 ? 10 : grade <= 4 ? 30 : 100;
  const numberLimit = Math.max(numberFloor, Math.round(curriculum.numberLimit * scale));

  const angleStepsByGrade = grade <= 2
    ? [90, 90, 90, 90, 90]
    : grade <= 4
      ? [90, 45, 45, 45, 45]
      : [45, 30, 15, 10, 5];
  const timeStepsByGrade = grade === 1
    ? [60, 60, 30, 30, 30]
    : grade === 2
      ? [60, 30, 30, 15, 15]
      : grade === 3
        ? [30, 30, 15, 15, 5]
        : [30, 15, 10, 5, 5];

  const coordinateBase = grade <= 2 ? 4 : grade <= 4 ? 6 : 8;
  const coordinateCap = grade <= 2 ? 6 : grade <= 4 ? 10 : 12;

  return {
    grade,
    level,
    numberLimit,
    rounds: 3 + level,
    speedMultiplier: [0.78, 0.9, 1, 1.12, 1.25][level - 1],
    choices: level <= 2 ? 3 : level <= 4 ? 4 : 5,
    fractionMaxDenominator: grade < 3 ? 4 : Math.min(20, 4 + grade + level),
    angleStep: angleStepsByGrade[level - 1],
    timeStep: timeStepsByGrade[level - 1],
    coordinateMax: Math.min(coordinateCap, coordinateBase + level - 1),
    allowNegativeCoordinates: grade >= 5 && level >= 3,
    equationDepth: grade <= 2 ? 1 : grade <= 4 ? Math.min(2, level) : level >= 4 ? 3 : 2,
  };
}

export const GAME_SKILLS: Record<MathGameId, MathSkill[]> = {
  "math-ninja": ["number-sense", "operations", "patterns-algebra"],
  "math-defender": ["operations", "patterns-algebra"],
  "fraction-reactor": ["fractions", "decimals-percent"],
  "angle-laser": ["geometry", "measurement"],
  "time-warp": ["measurement"],
  "star-mapper": ["coordinates", "geometry", "patterns-algebra"],
  "meteor-scale": ["operations", "patterns-algebra", "decimals-percent"],
  "data-orbit": ["data-probability", "patterns-algebra"],
};
