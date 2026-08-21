import type { CurriculumQuestion, CurriculumTheme } from "./curriculumTypes";
import type { VisualQuestionType } from "./languageTestTypes";
import { SACHKUNDE_QUESTION_TRANSLATIONS } from "./sachkundeQuestionTranslations.generated";

export type SachkundeQuestionLang = "de" | "hu" | "ro" | "en";

const QUALITY_OVERRIDES: Partial<Record<SachkundeQuestionLang, Record<string, string>>> = {
  hu: {
    'Was beschreibt einen "Kreislauf" im Stromkreis?': "Mit jelent az, hogy az elektromos áram zárt körben halad?",
    "Was gehört in einen Wetterbericht?": "Mi tartozik egy időjárás-jelentésbe?",
  },
};

export function sachkundeQuestionLang(lang?: string): SachkundeQuestionLang {
  return lang === "hu" || lang === "ro" || lang === "en" ? lang : "de";
}

export function translateSachkundeText(source: string, lang?: string): string {
  const activeLang = sachkundeQuestionLang(lang);
  if (activeLang === "de") return source;
  const override = QUALITY_OVERRIDES[activeLang]?.[source];
  if (override) return override;
  const table = SACHKUNDE_QUESTION_TRANSLATIONS[activeLang] as Record<string, string>;
  return table[source] ?? source;
}

export function hasSachkundeTranslation(source: string, lang?: string): boolean {
  const activeLang = sachkundeQuestionLang(lang);
  if (activeLang === "de") return true;
  return Object.prototype.hasOwnProperty.call(SACHKUNDE_QUESTION_TRANSLATIONS[activeLang], source);
}

export function localizeSachkundeQuestion(question: CurriculumQuestion, lang?: string): CurriculumQuestion {
  const localizedQuestion = translateSachkundeText(question.question, lang);
  if (question.type === "mcq") {
    return {
      ...question,
      question: localizedQuestion,
      options: question.options.map(option => translateSachkundeText(option, lang)),
    };
  }
  return {
    ...question,
    question: localizedQuestion,
    answer: Array.isArray(question.answer)
      ? question.answer.map(answer => translateSachkundeText(answer, lang))
      : translateSachkundeText(question.answer, lang),
  };
}

export function localizeSachkundeQuestions(questions: CurriculumQuestion[], lang?: string): CurriculumQuestion[] {
  return sachkundeQuestionLang(lang) === "de"
    ? questions
    : questions.map(question => localizeSachkundeQuestion(question, lang));
}

export function localizeSachkundeCurriculum(
  curriculum: Record<number, CurriculumTheme[]>,
  lang?: string,
): Record<number, CurriculumTheme[]> {
  const activeLang = sachkundeQuestionLang(lang);
  if (activeLang === "de") return curriculum;
  return Object.fromEntries(Object.entries(curriculum).map(([grade, themes]) => [
    Number(grade),
    themes.map(theme => {
      const sourceName = typeof theme.name === "string" ? theme.name : theme.name.de;
      return {
        ...theme,
        name: translateSachkundeText(sourceName, activeLang),
        subtopics: theme.subtopics.map(subtopic => ({
          ...subtopic,
          name: translateSachkundeText(
            typeof subtopic.name === "string" ? subtopic.name : subtopic.name.de,
            activeLang,
          ),
          questions: localizeSachkundeQuestions(subtopic.questions, activeLang),
        })),
      };
    }),
  ]));
}

export function localizeSachkundeHints(
  hints: Record<string, string>,
  lang?: string,
): Record<string, string> {
  return Object.fromEntries(Object.entries(hints).map(([key, value]) => [
    key,
    translateSachkundeText(value, lang),
  ]));
}

function localizeVisualValue<T>(value: T, lang: string): T {
  if (typeof value === "string") return translateSachkundeText(value, lang) as T;
  if (Array.isArray(value)) return value.map(item => localizeVisualValue(item, lang)) as T;
  if (!value || typeof value !== "object") return value;
  return Object.fromEntries(Object.entries(value).map(([key, child]) => [
    key,
    key === "printSvg"
      ? child
      : key === "stageSvgs" && child && typeof child === "object"
        ? Object.fromEntries(Object.entries(child).map(([stage, svg]) => [translateSachkundeText(stage, lang), svg]))
        : localizeVisualValue(child, lang),
  ])) as T;
}

const VISUAL_UI = {
  de: { cycle: "Kreislauf:", tapOrder: "Tippe in richtiger Reihenfolge...", correct: "✓ Richtig!", correctPrefix: "✗ Richtig:", missing: "SVG fehlt" },
  hu: { cycle: "Körforgás:", tapOrder: "Koppints a helyes sorrendben...", correct: "✓ Helyes!", correctPrefix: "✗ Helyes sorrend:", missing: "Hiányzó ábra" },
  ro: { cycle: "Circuit:", tapOrder: "Atinge în ordinea corectă...", correct: "✓ Corect!", correctPrefix: "✗ Ordinea corectă:", missing: "Imagine lipsă" },
  en: { cycle: "Cycle:", tapOrder: "Tap in the correct order...", correct: "✓ Correct!", correctPrefix: "✗ Correct order:", missing: "Missing diagram" },
} as const;

export function getLocalizedSachkundeVisualTypes(
  visualTypes: VisualQuestionType[],
  lang?: string,
): VisualQuestionType[] {
  const activeLang = sachkundeQuestionLang(lang);
  if (activeLang === "de") return visualTypes;
  return visualTypes.map(visualType => ({
    ...visualType,
    label: translateSachkundeText(visualType.label, activeLang),
    printLabel: translateSachkundeText(visualType.printLabel, activeLang),
    generate: count => visualType.generate(count).map(question => localizeVisualValue(question, activeLang)),
    mapProps: (question, userAnswer, submitted, onAnswer) => ({
      ...visualType.mapProps(question, userAnswer, submitted, onAnswer),
      ui: VISUAL_UI[activeLang],
    }),
  }));
}
