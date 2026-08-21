import type { CurriculumQuestion } from "../lib/curriculumTypes";

const pickModule = <T,>(module: T | { default: T }): T =>
  ("default" in (module as object) ? (module as { default: T }).default : module as T);

await Promise.all([
  import("../lib/biologieGenerators5"),
  import("../lib/biologieGenerators6"),
  import("../lib/biologieGenerators7"),
  import("../lib/biologieGenerators8"),
]);
const m5 = pickModule(await import("../lib/biologieCurriculum5"));
const m6 = pickModule(await import("../lib/biologieCurriculum6"));
const m7 = pickModule(await import("../lib/biologieCurriculum7"));
const m8 = pickModule(await import("../lib/biologieCurriculum8"));
const translations = pickModule(await import("../lib/biologieQuestionTranslations"));
const { K5_CURRICULUM, getK5Questions } = m5;
const { K6_CURRICULUM, getK6Questions } = m6;
const { K7_CURRICULUM, getK7Questions } = m7;
const { K8_CURRICULUM, getK8Questions } = m8;
const { hasBiologieTranslation } = translations;

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

function questionStrings(question: CurriculumQuestion): string[] {
  if (question.type === "mcq") return [question.question, ...question.options];
  return [question.question, ...(Array.isArray(question.answer) ? question.answer : [question.answer])];
}

const protectedPattern = /\{[^{}]+\}/g;
const germanLeak = /\b(?:Welche|Welcher|Welches|Warum|Erkl\u00e4re|Nenne|Ordne|Wodurch|Woraus|Beschreibe|Vergleiche|Kennzeichne)\b/;
// Avoid short ambiguous tokens such as German "Hat": JavaScript's ASCII word
// boundary would also match the start of valid Hungarian words like "hatás".
const germanLeakNonEnglish = /\b(?:Was|Wie|Wer|Wo|Ist|Sind|Haben|Der|Die|Das|Ein|Eine|Und|Oder|F\u00fcr|Durch)\b/;

function normalizedToken(token: string): string {
  return token.replace(",", ".").replace(/\s+/g, "");
}

function assertProtected(source: string, target: string, label: string) {
  const sourceTokens = source.match(protectedPattern) ?? [];
  const normalizedTarget = normalizedToken(target);
  for (const token of sourceTokens) {
    if (!normalizedTarget.includes(normalizedToken(token))) {
      errors.push(`${label}: protected token missing: ${token}`);
    }
  }
}

const originalRandom = Math.random;
try {
  for (const { grade, curriculum, get } of grades) {
    const ids = curriculum.flatMap(theme => theme.subtopics.map(subtopic => subtopic.id));
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
            if (sourceQuestion.correct !== targetQuestion.correct) {
              errors.push(`K${grade}/${lang}/${index}: correct index changed`);
            }
            if (sourceQuestion.options.length !== targetQuestion.options.length) {
              errors.push(`K${grade}/${lang}/${index}: option count changed`);
            }
          }
          const sourceStrings = questionStrings(sourceQuestion);
          const targetStrings = questionStrings(targetQuestion);
          if (sourceStrings.length !== targetStrings.length) {
            errors.push(`K${grade}/${lang}/${index}: string count changed`);
            continue;
          }
          for (let stringIndex = 0; stringIndex < sourceStrings.length; stringIndex += 1) {
            const sourceText = sourceStrings[stringIndex];
            const targetText = targetStrings[stringIndex];
            if (!hasBiologieTranslation(sourceText, lang)) {
              errors.push(`K${grade}/${lang}: missing lookup: ${sourceText}`);
            }
            if (!targetText?.trim()) errors.push(`K${grade}/${lang}: blank result for: ${sourceText}`);
            if (germanLeak.test(targetText) || (lang !== "en" && germanLeakNonEnglish.test(targetText))) {
              errors.push(`K${grade}/${lang}: German leak: ${targetText}`);
            }
            assertProtected(sourceText, targetText, `K${grade}/${lang}`);
          }
        }
      }
    }
  }
} finally {
  Math.random = originalRandom;
}

const uniqueErrors = [...new Set(errors)];
if (uniqueErrors.length) {
  console.error(uniqueErrors.slice(0, 250).join("\n"));
  console.error(`Biology translation audit failed with ${uniqueErrors.length} unique errors (${errors.length} sampled occurrences).`);
  process.exit(1);
}

console.log(`Biology translation audit passed: ${checkedQuestions} localized questions checked across grades 5-8.`);
