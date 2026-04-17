export type VisualLabGameId =
  | "meteor-catch"
  | "orbit-sort"
  | "signal-runner"
  | "constellation-builder"
  | "memory-radar"
  | "sequence-sort"
  | "fact-swipe"
  | "shape-sorter"
  | "pattern-match"
  | "color-pattern"
  | "counting-dots"
  | "shape-builder"
  | "symmetry-spot"
  | "bar-chart-builder"
  | "dice-roll"
  | "coin-counter"
  | "change-maker"
  | "length-estimator"
  | "weight-balance";

export interface VisualLabChoice {
  id: string;
  label: string;
}

export interface VisualLabItem {
  id: string;
  label: string;
  emoji?: string;
  color?: string;
}

export interface ShapeSorterRound {
  id: string;
  title: string;
  prompt: string;
  targetShape: "triangle" | "square" | "circle" | "pentagon" | "hexagon" | "rectangle";
  decoyShapes: string[];
  goal: number;
  theme: { bg: string; accent: string };
}

export interface PatternMatchRound {
  id: string;
  title: string;
  instruction: string;
  sequence: VisualLabItem[];
  hidden: number;
  choices: VisualLabItem[];
  correctIds: string[];
  theme: { bg: string; accent: string };
}

export interface ColorPatternRound {
  id: string;
  title: string;
  instruction: string;
  sequence: string[]; // hex colors
  hidden: number;
  choices: string[]; // hex colors
  correctColors: string[];
  theme: { bg: string; accent: string };
}

export interface CountingDotsRound {
  id: string;
  title: string;
  target: number;
  total: number;
  theme: { bg: string; accent: string };
}

export interface ShapeBuilderPart {
  id: string;
  svg: string;
  correctX: number;
  correctY: number;
  rotation: number;
}

export interface ShapeBuilderRound {
  id: string;
  title: string;
  targetShape: string;
  parts: ShapeBuilderPart[];
  theme: { bg: string; accent: string };
}

export interface SymmetryLine {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

export interface SymmetrySpotRound {
  id: string;
  title: string;
  imageSrc: string;
  lines: SymmetryLine[];
  correctLineId: string;
  theme: { bg: string; accent: string };
}

export interface BarChartBuilderRound {
  id: string;
  title: string;
  categories: string[];
  values: number[];
  maxValue: number;
  theme: { bg: string; accent: string };
}

export interface DiceRollRound {
  id: string;
  title: string;
  totalRolls: number;
  theme: { bg: string; accent: string };
}

export interface CoinCounterRound {
  id: string;
  title: string;
  targetAmount: number; // in cents
  availableCoins: number[]; // denominations in cents
  theme: { bg: string; accent: string };
}

export interface ChangeMakerRound {
  id: string;
  title: string;
  paid: number;
  price: number;
  expectedChange: number;
  theme: { bg: string; accent: string };
}

export interface LengthEstimatorRound {
  id: string;
  title: string;
  lineLength: number;
  choices: number[];
  showRuler?: boolean;
  theme: { bg: string; accent: string };
}

export interface WeightItem {
  label: string;
  weight: number;
}

export interface WeightBalanceRound {
  id: string;
  title: string;
  leftItems: WeightItem[];
  rightItems: WeightItem[];
  correctSide: "left" | "right" | "equal";
  theme: { bg: string; accent: string };
}

export interface AstromathVisualLabGradePool {
  grade: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  shapeSorter: ShapeSorterRound[];
  patternMatch: PatternMatchRound[];
  colorPattern: ColorPatternRound[];
  countingDots: CountingDotsRound[];
  shapeBuilder: ShapeBuilderRound[];
  symmetrySpot: SymmetrySpotRound[];
  barChartBuilder: BarChartBuilderRound[];
  diceRoll: DiceRollRound[];
  coinCounter: CoinCounterRound[];
  changeMaker: ChangeMakerRound[];
  lengthEstimator: LengthEstimatorRound[];
  weightBalance: WeightBalanceRound[];
}

export interface MeteorCatchRound {
  id: string;
  title: string;
  prompt: string;
  goal: number;
  speed: number;
  theme: {
    sky: string;
    glow: string;
    accent: string;
  };
  correctItems: VisualLabItem[];
  wrongItems: VisualLabItem[];
}

export interface OrbitSortBucket {
  id: string;
  label: string;
  color: string;
}

export interface OrbitSortItem extends VisualLabItem {
  bucketId: string;
}

export interface OrbitSortRound {
  id: string;
  title: string;
  instruction: string;
  theme: {
    bg: string;
    orbit: string;
    accent: string;
  };
  buckets: OrbitSortBucket[];
  items: OrbitSortItem[];
}

export interface SignalRunnerScene {
  id: string;
  title: string;
  prompt: string;
  sceneType: "traffic" | "safety" | "nature" | "community";
  visual: {
    icon: string;
    bg: string;
    accent: string;
  };
  choices: VisualLabChoice[];
  correctChoiceId: string;
  successFeedback: string;
  failFeedback: string;
}

export interface SignalRunnerRound {
  id: string;
  title: string;
  instruction: string;
  scenes: SignalRunnerScene[];
}

export interface ConstellationPart {
  id: string;
  label: string;
  emoji?: string;
  color?: string;
}

export interface ConstellationSlot {
  id: string;
  label: string;
}

export interface ConstellationBuilderRound {
  id: string;
  title: string;
  instruction: string;
  hint: string;
  theme: {
    bg: string;
    accent: string;
    card: string;
  };
  parts: ConstellationPart[];
  slots: ConstellationSlot[];
  solution: string[];
}

export interface MemoryRadarRound {
  id: string;
  title: string;
  instruction: string;
  flashDurationMs: number;
  selectionLimit: number;
  theme: {
    bg: string;
    accent: string;
    radar: string;
  };
  targetItems: VisualLabItem[];
  decoyItems: VisualLabItem[];
}

export interface SachkundeVisualLabGradePool {
  grade: 1 | 2 | 3 | 4;
  meteorCatch: MeteorCatchRound[];
  orbitSort: OrbitSortRound[];
  signalRunner: SignalRunnerRound[];
  constellationBuilder: ConstellationBuilderRound[];
  memoryRadar: MemoryRadarRound[];
  sequenceSort: SequenceSortRound[];
  factSwipe: FactSwipeRound[];
}

export interface SequenceSortItem {
  id: string;
  label: string;
  emoji: string;
}

export interface SequenceSortRound {
  id: string;
  title: string;
  instruction: string;
  sequence: SequenceSortItem[]; // Must be correctly ordered
  theme: { bg: string; accent: string };
}

export interface FactSwipeCard {
  id: string;
  statement: string;
  isTrue: boolean;
  explanation: string;
  emoji: string;
}

export interface FactSwipeRound {
  id: string;
  title: string;
  instruction: string;
  cards: FactSwipeCard[];
  theme: { bg: string; accent: string };
}

export interface GeographieVisualLabGradePool {
  grade: 5 | 6 | 7 | 8;
  meteorCatch: MeteorCatchRound[];
  orbitSort: OrbitSortRound[];
  signalRunner: SignalRunnerRound[];
  constellationBuilder: ConstellationBuilderRound[];
  memoryRadar: MemoryRadarRound[];
}
