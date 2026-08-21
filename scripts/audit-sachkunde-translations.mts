import type { CurriculumQuestion } from "../lib/curriculumTypes";

const pickModule = <T,>(module: T | { default: T }): T =>
  ("default" in (module as object) ? (module as { default: T }).default : module as T);

const curriculumModule = pickModule(await import("../lib/sachkundeCurriculum"));
const visualModule = pickModule(await import("../lib/sachkundeVisualGenerators"));
const translationModule = pickModule(await import("../lib/sachkundeQuestionTranslations"));
const generatedModule = pickModule(await import("../lib/sachkundeQuestionTranslations.generated"));
const {
  SACHKUNDE_ACTIVE_GRADES,
  SACHKUNDE_CURRICULUM,
  SACHKUNDE_SUBTOPIC_HINTS,
  getSachkundeQuestions,
} = curriculumModule;
const { SACHKUNDE_VISUAL_TYPES } = visualModule;
const {
  getLocalizedSachkundeVisualTypes,
  hasSachkundeTranslation,
  localizeSachkundeCurriculum,
  localizeSachkundeHints,
  translateSachkundeText,
} = translationModule;

type Lang = "hu" | "ro" | "en";
const languages: Lang[] = ["hu", "ro", "en"];
const errors: string[] = [];
let checkedQuestionStrings = 0;
let checkedVisualStrings = 0;
const originalRandom = Math.random;
const germanLeak = /\b(?:Welche|Welcher|Welches|Wozu|Wohin|Womit|Woraus|Warum|Ordne|Erkläre|Nenne|Kreislauf|Richtig|Aufgabe|Antwort|Verdunstung|Niederschlag)\b/;

for (const lang of languages) {
  const table = generatedModule.SACHKUNDE_QUESTION_TRANSLATIONS[lang] as Record<string, string>;
  for (const source of Object.keys(table)) {
    const target = translateSachkundeText(source, lang);
    if (germanLeak.test(target)) errors.push(`quality/${lang}: German leak: ${source} => ${target}`);
    if (source === target && /\b(?:Was|Wie|Wo|Wer|Warum|Welche|Wozu|Wohin|Womit|Ordne)\b/.test(source)) {
      errors.push(`quality/${lang}: suspicious unchanged German: ${source}`);
    }
  }
}

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

function assertTranslation(source: string, lang: Lang, context: string): void {
  checkedQuestionStrings += 1;
  if (!/[A-Za-zÄÖÜäöüß]/.test(source)) return;
  if (!hasSachkundeTranslation(source, lang)) errors.push(`${context}/${lang}: missing lookup: ${source}`);
  const target = translateSachkundeText(source, lang);
  if (!target.trim()) errors.push(`${context}/${lang}: blank translation: ${source}`);
}

for (const grade of SACHKUNDE_ACTIVE_GRADES) {
  const themes = SACHKUNDE_CURRICULUM[grade] ?? [];
  const ids = themes.flatMap(theme => theme.subtopics.map(subtopic => subtopic.id));
  for (const theme of themes) {
    const themeName = typeof theme.name === "string" ? theme.name : theme.name.de;
    for (const lang of languages) assertTranslation(themeName, lang, `K${grade}/theme`);
    for (const subtopic of theme.subtopics) {
      const subtopicName = typeof subtopic.name === "string" ? subtopic.name : subtopic.name.de;
      for (const lang of languages) assertTranslation(subtopicName, lang, `K${grade}/${subtopic.id}/name`);
      for (const question of subtopic.questions) {
        for (const source of questionStrings(question)) {
          for (const lang of languages) assertTranslation(source, lang, `K${grade}/${subtopic.id}`);
        }
      }
    }
  }
  for (const lang of languages) {
    Math.random = seeded(grade * 1000 + 17);
    const source = getSachkundeQuestions(grade, ids, 1000, "de");
    Math.random = seeded(grade * 1000 + 17);
    const target = getSachkundeQuestions(grade, ids, 1000, lang);
    if (source.length !== target.length) errors.push(`K${grade}/${lang}: question count changed`);
    source.forEach((question: CurriculumQuestion, index: number) => {
      const localized = target[index];
      if (!localized || question.type !== localized.type) {
        errors.push(`K${grade}/${lang}/${index}: question type changed`);
        return;
      }
      if (question.type === "mcq" && localized.type === "mcq") {
        if (question.correct !== localized.correct) errors.push(`K${grade}/${lang}/${index}: correct index changed`);
        if (question.options.length !== localized.options.length) errors.push(`K${grade}/${lang}/${index}: option count changed`);
      }
    });
  }
}

for (const [key, hint] of Object.entries(SACHKUNDE_SUBTOPIC_HINTS)) {
  for (const lang of languages) assertTranslation(hint, lang, `hint/${key}`);
}

for (const lang of languages) {
  const curriculum = localizeSachkundeCurriculum(SACHKUNDE_CURRICULUM, lang);
  const hints = localizeSachkundeHints(SACHKUNDE_SUBTOPIC_HINTS, lang);
  if (Object.keys(curriculum).map(Number).some(grade => grade > 4)) errors.push(`${lang}: archive grade leaked into curriculum`);
  if (Object.keys(hints).length !== Object.keys(SACHKUNDE_SUBTOPIC_HINTS).length) errors.push(`${lang}: hint count changed`);
}

const ignoredKeys = new Set(["id", "type", "scene", "diagramId", "missionId", "subtopic", "subtopicIds", "printSvg", "icon", "color", "lang"]);
function collectVisualStrings(value: unknown, target: string[], key = ""): void {
  if (ignoredKeys.has(key)) return;
  if (typeof value === "string") {
    if (/[A-Za-zÄÖÜäöüß]/.test(value)) target.push(value);
    return;
  }
  if (Array.isArray(value)) return value.forEach(item => collectVisualStrings(item, target, key));
  if (!value || typeof value !== "object") return;
  for (const [childKey, child] of Object.entries(value)) collectVisualStrings(child, target, childKey);
}

Math.random = originalRandom;
try {
  for (const lang of languages) {
    const localizedTypes = getLocalizedSachkundeVisualTypes(SACHKUNDE_VISUAL_TYPES, lang);
    if (localizedTypes.length !== SACHKUNDE_VISUAL_TYPES.length) errors.push(`${lang}: visual type count changed`);
    for (let index = 0; index < SACHKUNDE_VISUAL_TYPES.length; index += 1) {
      const sourceType = SACHKUNDE_VISUAL_TYPES[index];
      const targetType = localizedTypes[index];
      assertTranslation(sourceType.label, lang, `visual/${sourceType.type}/label`);
      assertTranslation(sourceType.printLabel, lang, `visual/${sourceType.type}/printLabel`);
      for (let seed = 1; seed <= 32; seed += 1) {
        Math.random = seeded(seed);
        const source = sourceType.generate(100);
        Math.random = seeded(seed);
        const target = targetType.generate(100);
        if (source.length !== target.length) errors.push(`visual/${sourceType.type}/${lang}: count changed`);
        const sourceStrings: string[] = [];
        collectVisualStrings(source, sourceStrings);
        for (const text of sourceStrings) {
          checkedVisualStrings += 1;
          if (!hasSachkundeTranslation(text, lang)) errors.push(`visual/${sourceType.type}/${lang}: missing lookup: ${text}`);
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
  console.error(`Sachkunde translation audit failed with ${uniqueErrors.length} unique errors.`);
  process.exit(1);
}

console.log(`Sachkunde translation audit passed: ${checkedQuestionStrings} curriculum strings and ${checkedVisualStrings} visual strings checked for HU/RO/EN; public grades remain 1-4.`);
