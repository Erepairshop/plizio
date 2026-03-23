/* ── InteractiveEngine — shared types ─────────────────────────── */

export interface InteractiveDef {
  labels: Record<string, Record<string, string>>; // labels[langCode][key]
  rounds: InteractiveRound[];                     // typically 5
}

/* ── Round types ─────────────────────────────────────────────── */

export type InteractiveRound =
  | BlockDragRound
  | NumberLineRound
  | BalanceRound
  | StepSolverRound
  | PatternTapRound;

export interface BlockDragRound {
  type: "block-drag";
  instruction: string;          // label key
  mode: "combine" | "split" | "place-value";
  /**
   * combine  → groups of items merge into one zone → "how many total?"
   * split    → one group, drag N away → "how many remain?"
   * place-value → drag tens-blocks & ones-blocks → build the number
   */
  groups: number[];             // e.g. [3, 5] for combine, [8, 3] for split (start, remove)
  answer: number;
  hint1: string;                // label key — gentle Socratic hint
  hint2: string;                // label key — stronger hint
  blockIcon?: string;           // emoji e.g. "🍎" "⭐" "🟦", default "🟦"
  blockColor?: string;          // hex for the block bg, default from engine color
  /** place-value specific */
  tens?: number;                // e.g. 1 for 14 = 1×10 + 4
  ones?: number;                // e.g. 4
}

export interface NumberLineRound {
  type: "number-line";
  instruction: string;          // label key
  min: number;
  max: number;
  start: number;                // character starts here
  target: number;               // correct answer position
  step?: number;                // tick spacing, default 1
  showJumps?: boolean;          // show arc jumps when solved
  jumpCount?: number;           // how many arcs (e.g. +3 = 3 arcs)
  hint1: string;
  hint2: string;
}

export interface BalanceRound {
  type: "balance";
  instruction: string;
  left: (number | "?")[];       // left pan items
  right: (number | "?")[];      // right pan items
  answer: number;               // value of "?"
  choices: number[];            // draggable number cards
  hint1: string;
  hint2: string;
}

export interface StepSolverRound {
  type: "step-solver";
  instruction: string;          // the full problem text (label key)
  steps: StepDef[];
  finalAnswer: number;
  hint1: string;
  hint2: string;
}

export interface StepDef {
  prompt: string;               // label key, e.g. "First add the tens: 40+30=?"
  answer: number;
  choices: number[];            // 4 options
}

export interface PatternTapRound {
  type: "pattern-tap";
  instruction: string;
  sequence: string[];           // visible pattern, e.g. ["🔴","🔵","🔴","🔵"]
  answer: string;               // correct next element
  choices: string[];            // tap options
  hint1: string;
  hint2: string;
}
