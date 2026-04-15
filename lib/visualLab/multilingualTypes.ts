import type { Language } from "@/lib/language";

export type VisualLabGameId =
  | "meteor-catch"
  | "orbit-sort"
  | "signal-runner"
  | "constellation-builder"
  | "memory-radar"
  | "lab-mixer"
  | "map-pin"
  | "sentence-scramble"
  | "word-warp"
  | "letter-builder";

export type MultilingualText = Record<Language, string>;

export interface VisualLabChoice {
  id: string;
  label: MultilingualText;
}

export interface VisualLabItem {
  id: string;
  label: MultilingualText;
  emoji?: string;
  color?: string;
}

export interface MeteorCatchRound {
  id: string;
  title: MultilingualText;
  prompt: MultilingualText;
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
  label: MultilingualText;
  color: string;
}

export interface OrbitSortItem extends VisualLabItem {
  bucketId: string;
}

export interface OrbitSortRound {
  id: string;
  title: MultilingualText;
  instruction: MultilingualText;
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
  title: MultilingualText;
  prompt: MultilingualText;
  sceneType: "traffic" | "safety" | "nature" | "community" | "science";
  visual: {
    icon: string;
    bg: string;
    accent: string;
  };
  choices: VisualLabChoice[];
  correctChoiceId: string;
  successFeedback: MultilingualText;
  failFeedback: MultilingualText;
}

export interface SignalRunnerRound {
  id: string;
  title: MultilingualText;
  instruction: MultilingualText;
  scenes: SignalRunnerScene[];
}

export interface ConstellationPart {
  id: string;
  label: MultilingualText;
  emoji?: string;
  color?: string;
}

export interface ConstellationSlot {
  id: string;
  label: MultilingualText;
}

export interface ConstellationBuilderRound {
  id: string;
  title: MultilingualText;
  instruction: MultilingualText;
  hint: MultilingualText;
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
  title: MultilingualText;
  instruction: MultilingualText;
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

export interface LabMixerIngredient extends VisualLabItem {
  effectColor?: string;
}

export interface LabMixerRound {
  id: string;
  title: MultilingualText;
  instruction: MultilingualText;
  baseLiquidColor: string;
  targetColor: string;
  ingredients: LabMixerIngredient[];
  solution: string[];
}

export interface MapPinPoint {
  id: string;
  label: MultilingualText;
  x: number;
  y: number;
}

export interface MapPinRound {
  id: string;
  title: MultilingualText;
  instruction: MultilingualText;
  mapImage?: string;
  points: MapPinPoint[];
  targetPointId: string;
}

export interface SentenceScrambleRound {
  id: string;
  title: MultilingualText;
  instruction: MultilingualText;
  words: MultilingualText[];
  correctOrder: number[];
}

export interface WordWarpPair {
  id: string;
  word: MultilingualText;
  match: MultilingualText;
}

export interface WordWarpRound {
  id: string;
  title: MultilingualText;
  instruction: MultilingualText;
  pairs: WordWarpPair[];
  timeLimitSeconds: number;
}

export interface LetterPart {
  id: string;
  type: "sender" | "recipient" | "date" | "subject" | "greeting" | "body" | "closing" | "signature";
  content: MultilingualText;
}

export interface LetterBuilderRound {
  id: string;
  title: MultilingualText;
  instruction: MultilingualText;
  parts: LetterPart[];
  correctSequence: string[];
}

export interface MultilingualVisualLabPool {
  subject: string;
  meteorCatch: MeteorCatchRound[];
  orbitSort: OrbitSortRound[];
  signalRunner: SignalRunnerRound[];
  constellationBuilder: ConstellationBuilderRound[];
  memoryRadar: MemoryRadarRound[];
  labMixer?: LabMixerRound[];
  mapPin?: MapPinRound[];
  sentenceScramble?: SentenceScrambleRound[];
  wordWarp?: WordWarpRound[];
  letterBuilder?: LetterBuilderRound[];
}
