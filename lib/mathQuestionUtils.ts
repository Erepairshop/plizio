/**
 * Utility functions for math questions
 * Automatically detects and enhances question types
 */

export interface ExtendedMathQuestion {
  question: string;
  correctAnswer: number;
  options: number[];
  topic: string;
  isWordProblem: boolean;
  type?: 'text' | 'geometry' | 'table' | 'diagram' | 'calculation';
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
    type: detectedType,
    imageData: question.imageData,
    tableData: question.tableData,
    diagramData: question.diagramData,
  };
}

/**
 * Determine if a question should use the visual display component
 */
export function isVisualQuestion(question: ExtendedMathQuestion): boolean {
  return !!(question.imageData || question.diagramData || question.tableData);
}
