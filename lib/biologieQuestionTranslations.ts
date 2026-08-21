import type { CurriculumQuestion } from "./curriculumTypes";
import { BIOLOGIE_QUESTION_TRANSLATIONS } from "./biologieQuestionTranslations.generated";

export type BiologieQuestionLang = "de" | "hu" | "ro" | "en";

export function biologieQuestionLang(lang?: string): BiologieQuestionLang {
  return lang === "hu" || lang === "ro" || lang === "en" ? lang : "de";
}

export function translateBiologieText(source: string, lang?: string): string {
  const activeLang = biologieQuestionLang(lang);
  if (activeLang === "de") return source;
  const table = BIOLOGIE_QUESTION_TRANSLATIONS[activeLang] as Record<string, string>;
  return table[source] ?? source;
}

export function hasBiologieTranslation(source: string, lang?: string): boolean {
  const activeLang = biologieQuestionLang(lang);
  if (activeLang === "de") return true;
  return Object.prototype.hasOwnProperty.call(BIOLOGIE_QUESTION_TRANSLATIONS[activeLang], source);
}

export function localizeBiologieQuestion(question: CurriculumQuestion, lang?: string): CurriculumQuestion {
  const localizedQuestion = translateBiologieText(question.question, lang);
  if (question.type === "mcq") {
    return {
      ...question,
      question: localizedQuestion,
      options: question.options.map(option => translateBiologieText(option, lang)),
    };
  }
  return {
    ...question,
    question: localizedQuestion,
    answer: Array.isArray(question.answer)
      ? question.answer.map(answer => translateBiologieText(answer, lang))
      : translateBiologieText(question.answer, lang),
  };
}

export function localizeBiologieQuestions(questions: CurriculumQuestion[], lang?: string): CurriculumQuestion[] {
  return biologieQuestionLang(lang) === "de"
    ? questions
    : questions.map(question => localizeBiologieQuestion(question, lang));
}
