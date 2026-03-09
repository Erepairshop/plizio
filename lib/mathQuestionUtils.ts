/**
 * Utility functions for math questions
 * Automatically detects and enhances question types
 */

// ─── VISUAL DATA TYPE ─────────────────────────────
// Used by G2 visual generators to attach SVG-renderable data to a question

export type VisualData =
  | { type: "object-add";   emoji: string; groupA: number; groupB: number }
  | { type: "object-sub";   emoji: string; total: number;  removed: number }
  | { type: "object-array"; emoji: string; rows: number;   cols: number }
  | { type: "object-share"; emoji: string; total: number;  groups: number }
  | { type: "shape-pattern"; shapes: string[] };  // full sequence incl. "?"

export interface ExtendedMathQuestion {
  question: string;
  correctAnswer: number | string;
  options: (number | string)[];
  topic: string;
  isWordProblem: boolean;
  hasStringOptions?: boolean;
  type?: 'text' | 'geometry' | 'table' | 'diagram' | 'calculation' | 'visual';
  visualData?: VisualData;
  imageData?: {
    type: 'svg' | 'url';
    content: string;
    width?: number;
    height?: number;
  };
  tableData?: {
    headers: string[];
    rows: (string | number)[][];
    fillableRows?: number[];
  };
  diagramData?: {
    type: 'bar' | 'pie' | 'line';
    data: Array<{ label: string; value: number; color?: string }>;
    title?: string;
  };
}

/**
 * Convert a basic MathQuestion to ExtendedMathQuestion
 * Automatically detects type from available data
 */
export function convertToExtendedQuestion(question: any): ExtendedMathQuestion {
  let detectedType: 'text' | 'geometry' | 'table' | 'diagram' | 'calculation' = 'text';

  // Auto-detect type based on available data
  if (question.imageData) {
    detectedType = 'geometry';
  } else if (question.diagramData) {
    detectedType = 'diagram';
  } else if (question.tableData) {
    detectedType = 'table';
  } else if (question.type) {
    detectedType = question.type;
  }

  return {
    question: question.question,
    correctAnswer: question.correctAnswer,
    options: question.options,
    topic: question.topic,
    isWordProblem: question.isWordProblem || false,
    hasStringOptions: question.hasStringOptions,
    type: detectedType,
    visualData: question.visualData,
    imageData: question.imageData,
    tableData: question.tableData,
    diagramData: question.diagramData,
  };
}

/**
 * Determine if a question should use the visual display component
 */
export function isVisualQuestion(question: ExtendedMathQuestion): boolean {
  return !!(question.visualData || question.imageData || question.diagramData || question.tableData);
}
