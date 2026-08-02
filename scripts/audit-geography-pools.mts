await import("../lib/geographieRegistration");

const unwrap = (module: Record<string, unknown>) => (module.default ?? module) as Record<string, unknown>;
const curriculum5 = unwrap(await import("../lib/geographieCurriculum5"));
const curriculum6 = unwrap(await import("../lib/geographieCurriculum6"));
const curriculum7 = unwrap(await import("../lib/geographieCurriculum7"));
const curriculum8 = unwrap(await import("../lib/geographieCurriculum8"));

type Question = {
  type: string;
  question: string;
  options?: string[];
  correct?: number;
  answer?: string | string[];
};

type Theme = { subtopics: Array<{ id: string }> };
type QuestionGetter = (ids: string[], lang: string, count: number) => Question[];

const grades: Array<[number, Theme[], QuestionGetter]> = [
  [5, curriculum5.K5_CURRICULUM as Theme[], curriculum5.getK5Questions as QuestionGetter],
  [6, curriculum6.K6_CURRICULUM as Theme[], curriculum6.getK6Questions as QuestionGetter],
  [7, curriculum7.K7_CURRICULUM as Theme[], curriculum7.getK7Questions as QuestionGetter],
  [8, curriculum8.K8_CURRICULUM as Theme[], curriculum8.getK8Questions as QuestionGetter],
];

const languages = ["de", "en", "hu", "ro"];
const translationAbbreviation = /(?:\((?:EN|DE)\)|(?:^|[\s(/])(?:EN|DE))\s*\?\s*$/;
const translationWords = /(?:\b(?:in|auf)\s+(?:English|German|Hungarian|Romanian|Englisch|Deutsch|Ungarisch|Rumänisch)|\b(?:angolul|németül|magyarul|románul)|\bîn\s+(?:engleză|germană|maghiară|română)|\(germ\))\s*\?\s*$/i;
const isTranslationDrill = (question: string) =>
  translationAbbreviation.test(question) || translationWords.test(question);
const errors: string[] = [];

for (const [grade, themes, getQuestions] of grades) {
  const subtopics = themes.flatMap((theme) => theme.subtopics.map((subtopic) => subtopic.id));

  for (const lang of languages) {
    let total = 0;

    for (const subtopic of subtopics) {
      const questions = getQuestions([subtopic], lang, 999);
      total += questions.length;
      if (questions.length === 0) errors.push(`K${grade}/${lang}/${subtopic}: empty pool`);

      for (const question of questions) {
        if (!question.question.trim()) errors.push(`K${grade}/${lang}/${subtopic}: empty question`);
        if (isTranslationDrill(question.question)) {
          errors.push(`K${grade}/${lang}/${subtopic}: translation drill: ${question.question}`);
        }

        if (question.type === "mcq") {
          if (!question.options || question.options.length < 2) {
            errors.push(`K${grade}/${lang}/${subtopic}: invalid MCQ options`);
          } else if (question.correct === undefined || !question.options[question.correct]?.trim()) {
            errors.push(`K${grade}/${lang}/${subtopic}: invalid MCQ correct answer`);
          }
        } else {
          const answers = Array.isArray(question.answer) ? question.answer : [question.answer];
          if (!answers.some((answer) => typeof answer === "string" && answer.trim())) {
            errors.push(`K${grade}/${lang}/${subtopic}: empty typing answer`);
          }
        }
      }
    }

    console.log(`K${grade}/${lang}: ${subtopics.length} subtopics, ${total} questions`);
  }
}

if (errors.length > 0) {
  console.error(`\n${errors.length} geography pool error(s):`);
  for (const error of errors.slice(0, 100)) console.error(`- ${error}`);
  if (errors.length > 100) console.error(`- ... ${errors.length - 100} more`);
  process.exit(1);
}

console.log("\nGeography pool audit passed.");
