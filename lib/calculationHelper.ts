/**
 * Calculation helper for creating step-by-step math problems
 * Breaks down complex calculations into manageable steps
 */

export interface CalculationStep {
  operation: string;
  operand1: number;
  operator: '+' | '-' | '*' | '/';
  operand2: number;
  result: number;
  explanation?: string;
}

/**
 * Detect if a problem needs step-by-step help
 * Problems with 2+ operations or numbers > 50 should have steps
 */
export function needsStepByStepHelp(problem: string): boolean {
  // Remove all whitespace for cleaner matching
  const cleanProblem = problem.replace(/\s+/g, '');

  // Count operations: look for operators between numbers more carefully
  // Match pattern: digit operator digit
  const operationMatches = cleanProblem.match(/\d[+\-*/]\d/g) || [];
  const operationCount = operationMatches.length;

  // Check for large numbers (> 50 is enough for 4th graders)
  const numbers = problem.match(/\d+/g) || [];
  const hasLargeNumbers = numbers.some((n) => parseInt(n) > 50);

  // Show scratchpad if: 2+ operations OR any number > 50
  return operationCount >= 1 || hasLargeNumbers;
}

/**
 * Parse a simple math expression and create steps
 * Supports: 1000 - 234 - 123 (multi-step subtraction)
 */
export function createStepsFromExpression(expression: string): CalculationStep[] {
  const steps: CalculationStep[] = [];

  // Remove spaces
  const expr = expression.replace(/\s+/g, '');

  // Simple regex to extract numbers and operators
  const tokens = expr.match(/\d+|[+\-*/]/g) || [];

  if (tokens.length < 3) return [];

  let currentResult = parseInt(tokens[0] || '0');

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i] as '+' | '-' | '*' | '/';
    const operand2 = parseInt(tokens[i + 1]);

    let result: number;

    switch (operator) {
      case '+':
        result = currentResult + operand2;
        break;
      case '-':
        result = currentResult - operand2;
        break;
      case '*':
        result = currentResult * operand2;
        break;
      case '/':
        result = Math.floor(currentResult / operand2);
        break;
      default:
        result = currentResult;
    }

    const step: CalculationStep = {
      operation: `${currentResult} ${operator} ${operand2}`,
      operand1: currentResult,
      operator,
      operand2,
      result,
      explanation: generateExplanation(currentResult, operator, operand2, result),
    };

    steps.push(step);
    currentResult = result;
  }

  return steps;
}

/**
 * Generate explanation for a calculation step
 * Shows breaking down larger numbers
 */
function generateExplanation(
  operand1: number,
  operator: '+' | '-' | '*' | '/',
  operand2: number,
  result: number
): string {
  if (operator === '-' && operand2 > 10) {
    // Break down subtraction: 1000 - 234 = 1000 - 200 - 34
    const tens = Math.floor(operand2 / 10) * 10;
    const ones = operand2 % 10;

    if (ones === 0) {
      return `${operand1} - ${tens} = ${operand1 - tens}`;
    } else {
      const afterTens = operand1 - tens;
      return `${operand1} - ${tens} = ${afterTens}, majd ${afterTens} - ${ones} = ${result}`;
    }
  } else if (operator === '+' && operand2 > 10) {
    // Break down addition
    const tens = Math.floor(operand2 / 10) * 10;
    const ones = operand2 % 10;

    if (ones === 0) {
      return `${operand1} + ${tens} = ${operand1 + tens}`;
    } else {
      const afterTens = operand1 + tens;
      return `${operand1} + ${tens} = ${afterTens}, majd ${afterTens} + ${ones} = ${result}`;
    }
  }

  return `${operand1} ${operator} ${operand2} = ${result}`;
}

/**
 * Suggest alternative calculation methods
 */
export function suggestAlternativeMethods(
  operand1: number,
  operand2: number,
  operand3?: number
): string[] {
  const methods: string[] = [];

  // For subtraction with multiple steps
  if (operand3) {
    // Method 1: Left to right
    methods.push(`Balról jobbra: ${operand1} - ${operand2} = ${operand1 - operand2}, majd - ${operand3}`);

    // Method 2: Add then subtract
    const sum = operand2 + operand3;
    methods.push(`Összeadás majd kivonás: ${operand2} + ${operand3} = ${sum}, majd ${operand1} - ${sum} = ${operand1 - sum}`);
  }

  return methods;
}

/**
 * Generate estimation for a problem
 * Helps students understand if their answer is reasonable
 */
export function estimateResult(expression: string): number {
  // Simple rounding estimation
  const tokens = expression.match(/\d+|[+\-*/]/g) || [];

  if (tokens.length < 3) return 0;

  let result = parseInt(tokens[0] || '0');
  result = Math.round(result / 100) * 100; // Round to nearest 100

  for (let i = 1; i < tokens.length; i += 2) {
    const operator = tokens[i];
    let operand = parseInt(tokens[i + 1] || '0');
    operand = Math.round(operand / 100) * 100;

    switch (operator) {
      case '+':
        result += operand;
        break;
      case '-':
        result -= operand;
        break;
      case '*':
        result *= operand;
        break;
      case '/':
        result /= operand;
        break;
    }
  }

  return result;
}

/**
 * Check if student's answer is reasonable
 * Within 10% of correct answer is considered reasonable
 */
export function isAnswerReasonable(studentAnswer: number, correctAnswer: number): boolean {
  const tolerance = Math.abs(correctAnswer) * 0.1; // 10% tolerance
  return Math.abs(studentAnswer - correctAnswer) <= tolerance;
}

/**
 * Create difficulty-appropriate steps
 * Younger students need smaller steps
 */
export function createAdaptiveSteps(
  expression: string,
  gradeLevel: number
): CalculationStep[] {
  const baseSteps = createStepsFromExpression(expression);

  if (gradeLevel <= 4) {
    // For grade 4-5, break down large subtractions further
    return baseSteps.map((step) => {
      if (step.operator === '-' && step.operand2 > 50) {
        // Could further subdivide, but keep single steps for now
      }
      return step;
    });
  }

  return baseSteps;
}
