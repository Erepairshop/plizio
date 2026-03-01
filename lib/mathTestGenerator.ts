// Math Test Generator - Generates randomized 30-minute tests for students
// Loads tasks from JSON files based on class and theme

import zahlenUndOperationen from '@/data/mathematics/class-4/zahlen-und-operationen.json';
import geometrie from '@/data/mathematics/class-4/geometrie.json';
import groessenUndMessen from '@/data/mathematics/class-4/groessen-und-messen.json';
import datenUndWahrscheinlichkeit from '@/data/mathematics/class-4/daten-und-wahrscheinlichkeit.json';

export interface Task {
  id: string;
  question: string;
  difficulty: 'easy' | 'medium' | 'hard';
  type: 'multiple-choice' | 'calculation' | 'free-text';
  options: (number | string)[];
  correct: number;
  explanation: string;
}

export interface Theme {
  class: number;
  theme: string;
  language: string;
  description: string;
  tasks: Task[];
}

export interface Test {
  id: string;
  class: number;
  theme: string;
  testNumber: number;
  totalTime: number; // 30 minutes
  tasks: Task[];
  createdAt: Date;
}

export interface TestResult {
  testId: string;
  studentAnswers: Record<string, number>; // task id -> selected option index
  score: number;
  maxScore: number;
  percentage: number;
  duration: number; // in seconds
  completedAt: Date;
}

// Available themes for each class
const THEMES: Record<number, Theme[]> = {
  4: [
    zahlenUndOperationen as unknown as Theme,
    geometrie as unknown as Theme,
    groessenUndMessen as unknown as Theme,
    datenUndWahrscheinlichkeit as unknown as Theme,
  ],
};

/**
 * Get all available themes for a specific class
 */
export function getAvailableThemes(classLevel: number): { name: string; description: string }[] {
  const themes = THEMES[classLevel] || [];
  return themes.map(t => ({
    name: t.theme,
    description: t.description,
  }));
}

/**
 * Shuffle array using Fisher-Yates algorithm
 */
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Generate a randomized test with 15 questions, 30-minute duration
 * Balanced mix: 5 easy, 7 medium, 3 hard
 */
export function generateTest(classLevel: number, themeName: string): Test {
  const themes = THEMES[classLevel];
  if (!themes) {
    // Return empty test for classes without static theme data
    return {
      id: `test-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      class: classLevel,
      theme: themeName,
      testNumber: Math.floor(Math.random() * 1000) + 1,
      totalTime: 30 * 60,
      tasks: [],
      createdAt: new Date(),
    };
  }

  const selectedTheme = themes.find(t => t.theme === themeName);
  if (!selectedTheme) {
    throw new Error(`Theme "${themeName}" not found for class ${classLevel}`);
  }

  // Balance difficulty distribution
  const easyTasks = selectedTheme.tasks.filter(t => t.difficulty === 'easy');
  const mediumTasks = selectedTheme.tasks.filter(t => t.difficulty === 'medium');
  const hardTasks = selectedTheme.tasks.filter(t => t.difficulty === 'hard');

  const selectedTasks: Task[] = [
    ...shuffleArray(easyTasks).slice(0, 5),      // 5 easy
    ...shuffleArray(mediumTasks).slice(0, 7),    // 7 medium
    ...shuffleArray(hardTasks).slice(0, 3),      // 3 hard
  ];

  // Shuffle all tasks together for mixed difficulty
  const testTasks = shuffleArray(selectedTasks);

  return {
    id: `test-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    class: classLevel,
    theme: themeName,
    testNumber: Math.floor(Math.random() * 1000) + 1,
    totalTime: 30 * 60, // 30 minutes in seconds
    tasks: testTasks,
    createdAt: new Date(),
  };
}

/**
 * Calculate test result and score
 */
export function calculateTestResult(
  test: Test,
  studentAnswers: Record<string, number>,
  duration: number
): TestResult {
  let correctAnswers = 0;
  const maxScore = test.tasks.length;

  for (const task of test.tasks) {
    if (studentAnswers[task.id] === task.correct) {
      correctAnswers++;
    }
  }

  return {
    testId: test.id,
    studentAnswers,
    score: correctAnswers,
    maxScore,
    percentage: Math.round((correctAnswers / maxScore) * 100),
    duration,
    completedAt: new Date(),
  };
}

/**
 * Get grade based on percentage
 * German grading system
 */
export function getGradeFromPercentage(percentage: number): {
  grade: number;
  label: string;
  description: string;
} {
  if (percentage >= 96) return { grade: 1, label: '1', description: 'Sehr gut' };
  if (percentage >= 80) return { grade: 2, label: '2', description: 'Gut' };
  if (percentage >= 67) return { grade: 3, label: '3', description: 'Befriedigend' };
  if (percentage >= 50) return { grade: 4, label: '4', description: 'Ausreichend' };
  if (percentage >= 30) return { grade: 5, label: '5', description: 'Mangelhaft' };
  return { grade: 6, label: '6', description: 'Ungenügend' };
}

/**
 * Format test result as a detailed report
 */
export function generateTestReport(test: Test, result: TestResult): string {
  const grade = getGradeFromPercentage(result.percentage);
  const minutes = Math.floor(result.duration / 60);
  const seconds = result.duration % 60;

  return `
════════════════════════════════════════════════
  TEST ERGEBNIS - ${test.theme.toUpperCase()}
════════════════════════════════════════════════

Klasse: ${test.class}
Test Nummer: ${test.testNumber}
Datum: ${test.createdAt.toLocaleDateString('de-DE')}

ERGEBNIS:
─────────────────────────────────────────────────
Punktzahl: ${result.score} / ${result.maxScore}
Prozentsatz: ${result.percentage}%
Note: ${grade.label} - ${grade.description}
Zeit: ${minutes}m ${seconds}s

════════════════════════════════════════════════
`;
}
