// ─── GRADE 5 QUESTION BANK SEED SCRIPT ─────────────────────────────
// Generates 500 questions programmatically from math generators
// Usage: npx tsx lib/seeds/seedGrade5QuestionBank.ts
// Run once per environment setup

import { supabase } from "../supabase/client";
import type { MathQuestion } from "../mathCurriculum";

// ─── TYPES ─────────────────────────────

interface QuestionInsert {
  grade: number;
  topic: string;
  section: string;
  difficulty: "easy" | "medium" | "hard";
  question: string;
  solution: string;
  max_points: number;
  type: string;
  options: Array<{ text: string; isCorrect: boolean }>;
  explanation: string;
  is_active: boolean;
}

// ─── HELPERS ─────────────────────────────

function generateMultipleChoiceOptions(correctAnswer: number, type: "numeric" | "text" = "numeric"): Array<{ text: string; isCorrect: boolean }> {
  const options: Array<{ text: string; isCorrect: boolean }> = [
    { text: String(correctAnswer), isCorrect: true },
  ];

  if (type === "numeric") {
    const incorrect = new Set<number>();
    while (incorrect.size < 3) {
      const offset = Math.floor(Math.random() * 20) - 10; // ±10 range
      const candidate = correctAnswer + offset;
      if (candidate !== correctAnswer && candidate > 0 && !incorrect.has(candidate)) {
        incorrect.add(candidate);
      }
    }
    incorrect.forEach(num => {
      options.push({ text: String(num), isCorrect: false });
    });
  }

  // Shuffle options
  return options.sort(() => Math.random() - 0.5);
}

function generateExplanation(question: string, answer: number, section: string): string {
  const explanations: Record<string, string[]> = {
    Kopfrechnen: [
      "Schnelle Kopfrechenaufgabe. Übe das Einmaleins und die Addition!",
      "Diese Aufgabe trainiert dein schnelles Kopfrechnen.",
      "Achte auf die Rechenreihenfolge (Punkt vor Strich).",
      "Denk an die Regeln der Grundrechenarten.",
    ],
    Schriftlich: [
      "Schriftliche Addition: Spaltenweise von rechts nach links addieren.",
      "Schriftliche Subtraktion: Spaltenweise von rechts nach links subtrahieren.",
      "Schriftliche Multiplikation: Mit Zehnerübergängen rechnen.",
      "Schriftliche Division: Schrittweise dividieren und kontrollieren.",
    ],
    Sachaufgaben: [
      "Lies die Aufgabe genau und identifiziere, was du berechnen musst.",
      "Überlege: Addieren, Subtrahieren, Multiplizieren oder Dividieren?",
      "Achte auf Einheiten (€, kg, cm, usw.).",
      "Überprüfe dein Ergebnis: Macht es Sinn?",
    ],
    Geometrie: [
      "Denke an die Formeln für Umfang und Fläche.",
      "Umfang = Summe aller Seitenlängen.",
      "Fläche = Länge × Breite (beim Rechteck).",
      "Zeichne die Form, um dir zu helfen.",
    ],
    Bonus: [
      "Schwierige Aufgabe! Denke sorgfältig nach.",
      "Beachte die Rechenreihenfolge (Klammern, Punkt, Strich).",
      "Arbeite Schritt für Schritt.",
      "Überprüfe dein Ergebnis nach jeder Berechnung.",
    ],
  };

  const sectionExplanations = explanations[section] || explanations.Kopfrechnen;
  return sectionExplanations[Math.floor(Math.random() * sectionExplanations.length)];
}

// ─── QUESTION GENERATORS ─────────────────────────────

interface SectionConfig {
  name: string;
  total: number;
  easy: number;
  medium: number;
  hard: number;
  maxPoints: number;
  type: string;
  topic: string;
  generators: {
    easy: (() => MathQuestion)[];
    medium: (() => MathQuestion)[];
    hard: (() => MathQuestion)[];
  };
}

// ─── HELPER GENERATORS ─────────────────────────────
// Simple generators for seed data (not using actual G5 to avoid runtime dependencies)

function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createQuestion(question: string, answer: number): MathQuestion {
  return {
    question,
    correctAnswer: answer,
    options: [],
    topic: "Arithmetic",
    isWordProblem: false,
  };
}

// ─── KOPFRECHNEN GENERATORS ─────────────────────────────

const kopfrechnGenEasy = [
  () => {
    const a = randInt(5, 20);
    const b = randInt(5, 20);
    return createQuestion(`${a} + ${b} = ?`, a + b);
  },
  () => {
    const a = randInt(10, 30);
    const b = randInt(5, 15);
    return createQuestion(`${a} - ${b} = ?`, a - b);
  },
  () => {
    const a = randInt(2, 9);
    const b = randInt(2, 9);
    return createQuestion(`${a} × ${b} = ?`, a * b);
  },
  () => {
    const p = randInt(2, 9);
    const n = p * randInt(2, 5);
    return createQuestion(`${n} ÷ ${p} = ?`, n / p);
  },
];

const kopfrechnGenMedium = [
  () => {
    const a = randInt(10, 40);
    const b = randInt(10, 30);
    return createQuestion(`${a} + ${b} = ?`, a + b);
  },
  () => {
    const a = randInt(40, 100);
    const b = randInt(20, 40);
    return createQuestion(`${a} - ${b} = ?`, a - b);
  },
  () => {
    const a = randInt(6, 12);
    const b = randInt(6, 12);
    return createQuestion(`${a} × ${b} = ?`, a * b);
  },
  () => {
    const a = randInt(2, 5);
    const b = randInt(2, 5);
    const c = randInt(1, 8);
    return createQuestion(`${a} × ${b} + ${c} = ?`, a * b + c);
  },
];

const kopfrechnGenHard = [
  () => {
    const a = randInt(50, 100);
    const b = randInt(30, 70);
    return createQuestion(`${a} + ${b} = ?`, a + b);
  },
  () => {
    const a = randInt(100, 200);
    const b = randInt(50, 150);
    return createQuestion(`${a} - ${b} = ?`, a - b);
  },
  () => {
    const a = randInt(8, 15);
    const b = randInt(8, 15);
    return createQuestion(`${a} × ${b} = ?`, a * b);
  },
  () => {
    const a = randInt(2, 6);
    const b = randInt(2, 6);
    const c = randInt(2, 10);
    return createQuestion(`${a} × ${b} - ${c} = ?`, a * b - c);
  },
];

// ─── SCHRIFTLICH GENERATORS ─────────────────────────────

const schriftlichGenEasy = [
  () => {
    const a = randInt(100, 300);
    const b = randInt(100, 300);
    return createQuestion(`${a} + ${b} = ?`, a + b);
  },
  () => {
    const a = randInt(200, 500);
    const b = randInt(100, 200);
    return createQuestion(`${a} - ${b} = ?`, a - b);
  },
  () => {
    const a = randInt(10, 30);
    const b = randInt(2, 5);
    return createQuestion(`${a} × ${b} = ?`, a * b);
  },
  () => {
    const p = randInt(2, 9);
    const n = p * randInt(10, 20);
    return createQuestion(`${n} ÷ ${p} = ?`, n / p);
  },
];

const schriftlichGenMedium = [
  () => {
    const a = randInt(400, 800);
    const b = randInt(300, 700);
    return createQuestion(`${a} + ${b} = ?`, a + b);
  },
  () => {
    const a = randInt(500, 1000);
    const b = randInt(300, 600);
    return createQuestion(`${a} - ${b} = ?`, a - b);
  },
  () => {
    const a = randInt(20, 50);
    const b = randInt(5, 15);
    return createQuestion(`${a} × ${b} = ?`, a * b);
  },
  () => {
    const p = randInt(2, 9);
    const n = p * randInt(10, 30);
    return createQuestion(`${n} ÷ ${p} = ?`, n / p);
  },
];

const schriftlichGenHard = [
  () => {
    const a = randInt(800, 1500);
    const b = randInt(600, 1200);
    return createQuestion(`${a} + ${b} = ?`, a + b);
  },
  () => {
    const a = randInt(1000, 2000);
    const b = randInt(500, 1500);
    return createQuestion(`${a} - ${b} = ?`, a - b);
  },
  () => {
    const a = randInt(50, 100);
    const b = randInt(10, 30);
    return createQuestion(`${a} × ${b} = ?`, a * b);
  },
  () => {
    const p = randInt(5, 15);
    const n = p * randInt(20, 50);
    return createQuestion(`${n} ÷ ${p} = ?`, n / p);
  },
];

// ─── SACHAUFGABEN GENERATORS ─────────────────────────────

const sachaufgabenGenEasy = [
  () => {
    const price = randInt(5, 20);
    const qty = randInt(2, 5);
    return createQuestion(
      `Ein Artikel kostet ${price}€. Wie viel kosten ${qty} Stück?`,
      price * qty
    );
  },
  () => {
    const total = randInt(30, 100);
    const spent = randInt(10, 40);
    return createQuestion(
      `Du hast ${total}€. Du gibst ${spent}€ aus. Wie viel bleibt?`,
      total - spent
    );
  },
];

const sachaufgabenGenMedium = [
  () => {
    const price = randInt(10, 30);
    const qty = randInt(3, 8);
    return createQuestion(
      `Ein Buch kostet ${price}€. Wie viel kosten ${qty} Bücher?`,
      price * qty
    );
  },
  () => {
    const total = randInt(100, 200);
    const item1 = randInt(20, 60);
    const item2 = randInt(20, 60);
    return createQuestion(
      `Du hast ${total}€. Du kaufst etwas für ${item1}€ und ${item2}€. Wie viel bleibt?`,
      total - item1 - item2
    );
  },
  () => {
    const share = randInt(5, 15);
    const people = randInt(3, 6);
    return createQuestion(
      `${people} Freunde teilen ${share * people}€ gleichmäßig. Wie viel bekommt jeder?`,
      share
    );
  },
];

const sachaufgabenGenHard = [
  () => {
    const basePrice = randInt(50, 150);
    const discount = randInt(10, 40);
    return createQuestion(
      `Ein Preis ist ${basePrice}€. Der Rabatt beträgt ${discount}€. Wie viel kostet es jetzt?`,
      basePrice - discount
    );
  },
  () => {
    const boxes = randInt(3, 5);
    const perBox = randInt(10, 20);
    return createQuestion(
      `${boxes} Kartons mit je ${perBox} Stiften. Wie viele Stifte insgesamt?`,
      boxes * perBox
    );
  },
  () => {
    const item = randInt(20, 50);
    const savings = randInt(2, 10);
    return createQuestion(
      `Ein Geschenk kostet ${item}€. Du sparst ${savings}€ pro Woche. In wie vielen Wochen hast du genug?`,
      Math.ceil(item / savings)
    );
  },
];

// ─── GEOMETRIE GENERATORS ─────────────────────────────

const geometrieGenEasy = [
  () => {
    const side = randInt(3, 8);
    return createQuestion(
      `Ein Quadrat hat Seitenlänge ${side} cm. Wie groß ist der Umfang?`,
      side * 4
    );
  },
  () => {
    const side = randInt(2, 7);
    return createQuestion(
      `Ein Quadrat hat Seitenlänge ${side} cm. Wie groß ist die Fläche?`,
      side * side
    );
  },
  () => {
    const length = randInt(4, 10);
    const width = randInt(3, 8);
    return createQuestion(
      `Ein Rechteck hat Länge ${length} cm und Breite ${width} cm. Wie groß ist der Umfang?`,
      2 * (length + width)
    );
  },
];

const geometrieGenMedium = [
  () => {
    const length = randInt(5, 12);
    const width = randInt(3, 10);
    return createQuestion(
      `Ein Rechteck hat Länge ${length} cm und Breite ${width} cm. Wie groß ist die Fläche?`,
      length * width
    );
  },
  () => {
    const base = randInt(4, 10);
    const height = randInt(3, 8);
    return createQuestion(
      `Ein Dreieck hat Grundlinie ${base} cm und Höhe ${height} cm. Wie groß ist die Fläche?`,
      Math.round((base * height) / 2)
    );
  },
  () => {
    const side = randInt(5, 15);
    return createQuestion(
      `Ein Quadrat hat Seitenlänge ${side} cm. Wie groß ist der Umfang?`,
      side * 4
    );
  },
];

const geometrieGenHard = [
  () => {
    const perimeter = randInt(20, 40);
    const length = randInt(6, 12);
    const width = (perimeter / 2) - length;
    return createQuestion(
      `Ein Rechteck hat Umfang ${perimeter} cm und Länge ${length} cm. Wie groß ist die Breite?`,
      width
    );
  },
  () => {
    const area = randInt(20, 100);
    const length = randInt(5, 15);
    const width = area / length;
    return createQuestion(
      `Ein Rechteck hat Fläche ${area} cm² und Länge ${length} cm. Wie groß ist die Breite?`,
      width
    );
  },
  () => {
    const perimeter = randInt(24, 48);
    return createQuestion(
      `Ein Quadrat hat Umfang ${perimeter} cm. Wie lang ist eine Seite?`,
      perimeter / 4
    );
  },
];

// ─── BONUS GENERATORS ─────────────────────────────

const bonusGenEasy = [
  () => {
    const a = randInt(2, 6);
    const b = randInt(2, 6);
    const c = randInt(1, 5);
    return createQuestion(`${a} × ${b} + ${c} = ?`, a * b + c);
  },
  () => {
    const a = randInt(5, 15);
    const b = randInt(2, 5);
    return createQuestion(`(${a} - ${b}) × 2 = ?`, (a - b) * 2);
  },
];

const bonusGenMedium = [
  () => {
    const a = randInt(10, 30);
    const b = randInt(2, 5);
    const c = randInt(1, 10);
    return createQuestion(`${a} - ${b} × ${c} = ?`, a - b * c);
  },
  () => {
    const a = randInt(6, 12);
    const b = randInt(2, 4);
    return createQuestion(`(${a} + ${b}) ÷ 2 = ?`, (a + b) / 2);
  },
  () => {
    const a = randInt(20, 50);
    const pct = randInt(10, 50);
    return createQuestion(`${pct}% von ${a} = ?`, Math.round((a * pct) / 100));
  },
];

const bonusGenHard = [
  () => {
    const a = randInt(3, 8);
    const b = randInt(3, 8);
    const c = randInt(2, 6);
    return createQuestion(`(${a} + ${b}) × (${c} - 1) = ?`, (a + b) * (c - 1));
  },
  () => {
    const a = randInt(20, 50);
    const b = randInt(5, 25);
    return createQuestion(`${a} - ${b} + ${a - b} = ?`, a + (a - b) - b);
  },
  () => {
    const a = randInt(10, 50);
    const pct = randInt(20, 90);
    return createQuestion(`${pct}% von ${a} = ?`, Math.round((a * pct) / 100));
  },
];

const SECTIONS: Record<string, SectionConfig> = {
  kopfrechnen: {
    name: "Kopfrechnen",
    total: 120,
    easy: 40,
    medium: 40,
    hard: 40,
    maxPoints: 1,
    type: "mental",
    topic: "Arithmetic",
    generators: {
      easy: kopfrechnGenEasy,
      medium: kopfrechnGenMedium,
      hard: kopfrechnGenHard,
    },
  },
  schriftlich: {
    name: "Schriftlich",
    total: 130,
    easy: 43,
    medium: 44,
    hard: 43,
    maxPoints: 2,
    type: "written",
    topic: "Arithmetic",
    generators: {
      easy: schriftlichGenEasy,
      medium: schriftlichGenMedium,
      hard: schriftlichGenHard,
    },
  },
  sachaufgaben: {
    name: "Sachaufgaben",
    total: 120,
    easy: 40,
    medium: 40,
    hard: 40,
    maxPoints: 3,
    type: "word_problem",
    topic: "Word Problems",
    generators: {
      easy: sachaufgabenGenEasy,
      medium: sachaufgabenGenMedium,
      hard: sachaufgabenGenHard,
    },
  },
  geometrie: {
    name: "Geometrie",
    total: 100,
    easy: 34,
    medium: 33,
    hard: 33,
    maxPoints: 2,
    type: "geometry",
    topic: "Geometry",
    generators: {
      easy: geometrieGenEasy,
      medium: geometrieGenMedium,
      hard: geometrieGenHard,
    },
  },
  bonus: {
    name: "Bonus",
    total: 30,
    easy: 10,
    medium: 10,
    hard: 10,
    maxPoints: 1,
    type: "logic",
    topic: "Logic",
    generators: {
      easy: bonusGenEasy,
      medium: bonusGenMedium,
      hard: bonusGenHard,
    },
  },
};

// ─── SEED FUNCTION ─────────────────────────────

export async function seedGrade5QuestionBank(): Promise<void> {
  console.log("🌱 Starting Grade 5 Question Bank seeding...");
  console.log("📊 Target: 500 questions");

  const allQuestions: QuestionInsert[] = [];
  const seenQuestions = new Set<string>();

  for (const [sectionKey, config] of Object.entries(SECTIONS)) {
    console.log(`\n📚 Seeding ${config.name} (${config.total} questions)...`);

    const difficulties: Array<"easy" | "medium" | "hard"> = ["easy", "medium", "hard"];

    for (const difficulty of difficulties) {
      const count = config[difficulty];
      const generatorList = config.generators[difficulty];

      console.log(`  ${difficulty}: ${count} questions`);

      for (let i = 0; i < count; i++) {
        let question: MathQuestion | null = null;
        let attempts = 0;
        const maxAttempts = 20;

        // Generate unique questions
        while (!question && attempts < maxAttempts) {
          const generator = generatorList[Math.floor(Math.random() * generatorList.length)];
          const candidate = generator();
          const questionKey = `${config.name}_${candidate.question}`;

          if (!seenQuestions.has(questionKey)) {
            question = candidate;
            seenQuestions.add(questionKey);
          }
          attempts++;
        }

        if (!question) {
          console.warn(`⚠️  Failed to generate unique question for ${config.name} (${difficulty})`);
          continue;
        }

        const correctAnswer = question.correctAnswer;
        const options = generateMultipleChoiceOptions(correctAnswer, "numeric");

        allQuestions.push({
          grade: 5,
          topic: config.topic,
          section: config.name,
          difficulty,
          question: question.question,
          solution: String(correctAnswer),
          max_points: config.maxPoints,
          type: config.type,
          options,
          explanation: generateExplanation(question.question, correctAnswer, config.name),
          is_active: true,
        });
      }
    }
  }

  console.log(`\n✅ Generated ${allQuestions.length} unique questions`);

  // Insert into Supabase in batches
  const batchSize = 100;
  for (let i = 0; i < allQuestions.length; i += batchSize) {
    const batch = allQuestions.slice(i, i + batchSize);
    console.log(`📤 Inserting batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(allQuestions.length / batchSize)}...`);

    const { error } = await supabase
      .from("question_bank")
      .insert(batch)
      .eq("is_active", true); // Only check on active records

    if (error) {
      console.error(`❌ Error inserting batch: ${error.message}`);
      throw error;
    }
  }

  console.log("🎉 Grade 5 Question Bank seeding completed!");
  console.log(`📊 Total questions inserted: ${allQuestions.length}`);
  console.log("Distribution:");
  console.log(`  - Kopfrechnen: ${allQuestions.filter(q => q.section === "Kopfrechnen").length}`);
  console.log(`  - Schriftlich: ${allQuestions.filter(q => q.section === "Schriftlich").length}`);
  console.log(`  - Sachaufgaben: ${allQuestions.filter(q => q.section === "Sachaufgaben").length}`);
  console.log(`  - Geometrie: ${allQuestions.filter(q => q.section === "Geometrie").length}`);
  console.log(`  - Bonus: ${allQuestions.filter(q => q.section === "Bonus").length}`);
}

// ─── CLI EXECUTION ─────────────────────────────

if (require.main === module) {
  seedGrade5QuestionBank()
    .then(() => process.exit(0))
    .catch(err => {
      console.error("❌ Seeding failed:", err);
      process.exit(1);
    });
}

export default seedGrade5QuestionBank;
