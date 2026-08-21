import type { CurriculumQuestion } from "../lib/curriculumTypes";

const pickModule = <T,>(module: T | { default: T }): T =>
  ("default" in (module as object) ? (module as { default: T }).default : module as T);

await import("../lib/kemiaRegistration");
const m5 = pickModule(await import("../lib/kemiaCurriculum5"));
const m6 = pickModule(await import("../lib/kemiaCurriculum6"));
const m7 = pickModule(await import("../lib/kemiaCurriculum7"));
const m8 = pickModule(await import("../lib/kemiaCurriculum8"));
const translations = pickModule(await import("../lib/kemiaQuestionTranslations"));
const { K5_CURRICULUM, getK5Questions } = m5;
const { K6_CURRICULUM, getK6Questions } = m6;
const { K7_CURRICULUM, getK7Questions } = m7;
const { K8_CURRICULUM, getK8Questions } = m8;
const { hasKemiaTranslation } = translations;

type Lang = "hu" | "ro" | "en";
type Curriculum = typeof K5_CURRICULUM;
type Getter = (ids: string[], count: number, lang: string) => CurriculumQuestion[];

const grades: Array<{ grade: number; curriculum: Curriculum; get: Getter }> = [
  { grade: 5, curriculum: K5_CURRICULUM, get: getK5Questions },
  { grade: 6, curriculum: K6_CURRICULUM, get: getK6Questions },
  { grade: 7, curriculum: K7_CURRICULUM, get: getK7Questions },
  { grade: 8, curriculum: K8_CURRICULUM, get: getK8Questions },
];

const languages: Lang[] = ["hu", "ro", "en"];
const errors: string[] = [];
let checkedQuestions = 0;

function seeded(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) | 0;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function strings(question: CurriculumQuestion): string[] {
  if (question.type === "mcq") return [question.question, ...question.options];
  return [question.question, ...(Array.isArray(question.answer) ? question.answer : [question.answer])];
}

const protectedPattern = /\{[^{}]+\}|(?:\d+(?:[.,]\d+)?(?:\s?(?:°C|kg|g|mg|L|mL|mol|%))?)|(?:\b(?:[A-Z][a-z]?\d*){2,}\b)|(?:\b[A-Z][a-z]?\d+\b)|pH|→|⇌/g;
const germanLeak = /\b(?:Welche|Welcher|Welches|Warum|Erkläre|Nenne|Ordne|Berechne|Wodurch|Woraus|Womit|Stoff|Stoffe|Teilchen|Lösung|Lösungen|Säure|Säuren|Gemisch|Reaktion)\b/;

function assertProtected(source: string, target: string, label: string) {
  const sourceTokens = source.match(protectedPattern) ?? [];
  for (const token of sourceTokens) {
    if (!target.includes(token)) errors.push(`${label}: protected token missing: ${token}`);
  }
}

const originalRandom = Math.random;
try {
  for (const { grade, curriculum, get } of grades) {
    const ids = curriculum.flatMap((theme) => theme.subtopics.map((subtopic) => subtopic.id));
    for (let seed = 1; seed <= 24; seed += 1) {
      Math.random = seeded(grade * 10_000 + seed);
      const source = get(ids, 1000, "de");
      for (const lang of languages) {
        Math.random = seeded(grade * 10_000 + seed);
        const target = get(ids, 1000, lang);
        if (target.length !== source.length) {
          errors.push(`K${grade}/${lang}/seed${seed}: length ${target.length} != ${source.length}`);
          continue;
        }
        for (let index = 0; index < source.length; index += 1) {
          const sourceQuestion = source[index];
          const targetQuestion = target[index];
          checkedQuestions += 1;
          if (sourceQuestion.type !== targetQuestion.type) {
            errors.push(`K${grade}/${lang}/${index}: type changed`);
            continue;
          }
          if (sourceQuestion.type === "mcq" && targetQuestion.type === "mcq") {
            if (sourceQuestion.correct !== targetQuestion.correct) errors.push(`K${grade}/${lang}/${index}: correct index changed`);
            if (sourceQuestion.options.length !== targetQuestion.options.length) errors.push(`K${grade}/${lang}/${index}: option count changed`);
          }
          const sourceStrings = strings(sourceQuestion);
          const targetStrings = strings(targetQuestion);
          for (let stringIndex = 0; stringIndex < sourceStrings.length; stringIndex += 1) {
            const sourceText = sourceStrings[stringIndex];
            const targetText = targetStrings[stringIndex];
            if (!hasKemiaTranslation(sourceText, lang)) errors.push(`K${grade}/${lang}: missing lookup: ${sourceText}`);
            if (!targetText?.trim()) errors.push(`K${grade}/${lang}: blank result for: ${sourceText}`);
            if (germanLeak.test(targetText)) errors.push(`K${grade}/${lang}: German leak: ${targetText}`);
            assertProtected(sourceText, targetText, `K${grade}/${lang}`);
          }
        }
      }
    }
  }
} finally {
  Math.random = originalRandom;
}

if (errors.length) {
  console.error(errors.slice(0, 150).join("\n"));
  console.error(`Chemistry translation audit failed with ${errors.length} errors.`);
  process.exit(1);
}

console.log(`Chemistry translation audit passed: ${checkedQuestions} localized questions checked across grades 5-8.`);
