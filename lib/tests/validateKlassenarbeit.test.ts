// ─── KLASSENARBEIT VALIDATION TESTS ─────────────────────────────
// Tests for Klassenarbeit generation, distribution, and quality

import {
  generateKlassenarbeitFromBank,
  calculateKlassenarbeitResult,
  type MathQuestion,
  type KlassenarbeitResult,
} from "../mathCurriculum";

// ─── TEST UTILITIES ─────────────────────────────

interface TestResult {
  passed: boolean;
  message: string;
  details?: Record<string, unknown>;
}

function assert(condition: boolean, message: string): TestResult {
  return {
    passed: condition,
    message: condition ? `✅ ${message}` : `❌ ${message}`,
  };
}

// ─── DISTRIBUTION VALIDATORS ─────────────────────────────

function validateSectionDistribution(
  questions: MathQuestion[],
  expectedDistribution: Record<string, number>
): TestResult {
  const actual: Record<string, number> = {};

  for (const section of Object.keys(expectedDistribution)) {
    actual[section] = questions.filter(q => q.section === section).length;
  }

  const matches = Object.keys(expectedDistribution).every(
    section => actual[section] === expectedDistribution[section]
  );

  return {
    passed: matches,
    message: matches
      ? "✅ Section distribution matches expected"
      : "❌ Section distribution mismatch",
    details: {
      expected: expectedDistribution,
      actual,
    },
  };
}

function validateDifficultyRatio(
  questions: MathQuestion[],
  tolerance: number = 0.15 // ±15% tolerance
): TestResult {
  const easyCount = questions.filter(q => {
    // Estimate based on question text patterns
    const text = q.question.toLowerCase();
    return text.match(/^\d+ [+\-×÷] \d+ = \?$/) !== null;
  }).length;

  const mediumCount = Math.floor(questions.length * 0.4);
  const hardCount = questions.length - easyCount - mediumCount;

  const totalCount = questions.length;
  const easyRatio = easyCount / totalCount;
  const mediumRatio = mediumCount / totalCount;
  const hardRatio = hardCount / totalCount;

  const easyOk = Math.abs(easyRatio - 0.3) <= tolerance;
  const mediumOk = Math.abs(mediumRatio - 0.4) <= tolerance;
  const hardOk = Math.abs(hardRatio - 0.3) <= tolerance;

  const passed = easyOk && mediumOk && hardOk;

  return {
    passed,
    message: passed
      ? `✅ Difficulty ratio within tolerance (±${tolerance * 100}%)`
      : `❌ Difficulty ratio outside tolerance`,
    details: {
      easy: { count: easyCount, ratio: easyRatio.toFixed(2), expected: "0.30" },
      medium: { count: mediumCount, ratio: mediumRatio.toFixed(2), expected: "0.40" },
      hard: { count: hardCount, ratio: hardRatio.toFixed(2), expected: "0.30" },
      tolerance: `±${(tolerance * 100).toFixed(0)}%`,
    },
  };
}

function validateMaxPoints(questions: MathQuestion[]): TestResult {
  const pointsPerSection: Record<string, number> = {};
  const expectedPoints: Record<string, number> = {
    Kopfrechnen: 1,
    Schriftlich: 2,
    Sachaufgaben: 3,
    Geometrie: 2,
    Bonus: 1,
  };

  for (const q of questions) {
    if (q.section) {
      pointsPerSection[q.section] = q.maxPoints || 0;
    }
  }

  const matches = Object.keys(expectedPoints).every(
    section => pointsPerSection[section] === expectedPoints[section]
  );

  return {
    passed: matches,
    message: matches
      ? "✅ Max points per section correct"
      : "❌ Max points mismatch",
    details: {
      expected: expectedPoints,
      actual: pointsPerSection,
    },
  };
}

function validateNoNulls(questions: MathQuestion[]): TestResult {
  const hasNull = questions.some(
    q =>
      !q.question ||
      q.correctAnswer === null ||
      !q.section ||
      q.maxPoints === null
  );

  return {
    passed: !hasNull,
    message: hasNull ? "❌ Some questions have null fields" : "✅ No null fields",
    details: {
      totalQuestions: questions.length,
      valid: questions.length,
    },
  };
}

function validateUniqueQuestions(questions: MathQuestion[]): TestResult {
  const questionSet = new Set(questions.map(q => q.question));
  const hasDuplicates = questionSet.size !== questions.length;

  return {
    passed: !hasDuplicates,
    message: hasDuplicates
      ? `❌ Found ${questions.length - questionSet.size} duplicate questions`
      : "✅ All questions are unique",
    details: {
      total: questions.length,
      unique: questionSet.size,
      duplicates: questions.length - questionSet.size,
    },
  };
}

// ─── SCORING VALIDATION ─────────────────────────────

function validateScoringCalculation(
  questions: MathQuestion[],
  answers: (number | null)[]
): TestResult {
  const result = calculateKlassenarbeitResult(questions, answers);

  const totalExpected = questions.reduce((sum, q) => sum + (q.maxPoints || 0), 0);
  const matches = result.maxTotalPoints === totalExpected;

  return {
    passed: matches,
    message: matches
      ? "✅ Scoring calculation correct"
      : "❌ Scoring calculation mismatch",
    details: {
      expectedMax: totalExpected,
      actualMax: result.maxTotalPoints,
      percentage: result.percentage,
      note: result.note.label,
    },
  };
}

// ─── MAIN TEST RUNNER ─────────────────────────────

export async function validateKlassenarbeit(): Promise<void> {
  console.log("\n🧪 Starting Klassenarbeit Validation Tests...\n");

  const testResults: Array<{ name: string; result: TestResult }> = [];

  try {
    // Test 1: Generate Klassenarbeit
    console.log("📚 Generating Klassenarbeit...");
    const questions = await generateKlassenarbeitFromBank(5);

    if (!questions || questions.length === 0) {
      console.error("❌ Failed to generate Klassenarbeit questions");
      process.exit(1);
    }

    console.log(`✅ Generated ${questions.length} questions\n`);

    // Test 2: Section distribution (12 questions total)
    const expectedSections = {
      Kopfrechnen: 2,
      Schriftlich: 3,
      Sachaufgaben: 2,
      Geometrie: 2,
      Bonus: 1,
    };
    testResults.push({
      name: "Section Distribution",
      result: validateSectionDistribution(questions, expectedSections),
    });

    // Test 3: Difficulty ratio
    testResults.push({
      name: "Difficulty Ratio (30/40/30)",
      result: validateDifficultyRatio(questions, 0.2), // ±20% tolerance for small samples
    });

    // Test 4: Max points per section
    testResults.push({
      name: "Max Points Validation",
      result: validateMaxPoints(questions),
    });

    // Test 5: No null fields
    testResults.push({
      name: "Data Integrity (No Nulls)",
      result: validateNoNulls(questions),
    });

    // Test 6: Unique questions
    testResults.push({
      name: "Question Uniqueness",
      result: validateUniqueQuestions(questions),
    });

    // Test 7: Scoring calculation
    const answers = questions.map(() => 0); // All wrong for testing
    testResults.push({
      name: "Scoring Calculation",
      result: validateScoringCalculation(questions, answers),
    });

    // Test 8: Perfect score (all correct)
    const perfectAnswers = questions.map(q => q.correctAnswer);
    const perfectResult = calculateKlassenarbeitResult(questions, perfectAnswers);
    testResults.push({
      name: "Perfect Score (100%)",
      result: assert(
        perfectResult.percentage === 100 && perfectResult.note.value === 1,
        `Perfect score should be 100% with Note 1 (Sehr gut)`
      ),
    });

    // Test 9: Failing score (0%)
    const zeroResult = calculateKlassenarbeitResult(questions, answers);
    testResults.push({
      name: "Failing Score (0%)",
      result: assert(
        zeroResult.percentage === 0 && zeroResult.note.value === 6,
        `Zero score should be 0% with Note 6 (Ungenügend)`
      ),
    });

  } catch (error) {
    console.error("❌ Test execution failed:", error);
    process.exit(1);
  }

  // Print results
  console.log("\n📊 Test Results:\n");
  let passedCount = 0;
  for (const { name, result } of testResults) {
    console.log(`${result.message}`);
    if (result.details) {
      console.log(`   Details: ${JSON.stringify(result.details, null, 2)}`);
    }
    if (result.passed) passedCount++;
  }

  console.log(
    `\n📈 Summary: ${passedCount}/${testResults.length} tests passed\n`
  );

  // Exit with success if all tests passed
  if (passedCount === testResults.length) {
    console.log("✅ All tests passed!");
    process.exit(0);
  } else {
    console.log("❌ Some tests failed!");
    process.exit(1);
  }
}

// Run tests if executed directly
if (require.main === module) {
  validateKlassenarbeit().catch(err => {
    console.error("Test error:", err);
    process.exit(1);
  });
}

export default validateKlassenarbeit;
