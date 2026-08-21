import AiMissionQuestion from "@/components/ai-test-visual/AiMissionQuestion";
import { aiTestDiagramSvgMarkup } from "@/components/ai-test-visual/AiTestDiagrams";
import type { VisualQuestionType } from "./languageTestTypes";
import { AI_VISUAL_UI, aiVisualLang, localizedAiMissions } from "./aiVisualContent";

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index--) {
    const other = Math.floor(Math.random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

export const AI_VISUAL_TRIGGERS: Record<number, string[]> = {
  5: ["ai_k5_t1_1", "ai_k5_t1_2", "ai_k5_t1_3", "ai_k5_t1_4", "ai_k5_t2_3", "ai_k5_t3_2"],
  6: ["ai_k6_t1_4", "ai_k6_t2_2", "ai_k6_t1_5", "ai_k6_t3_1", "ai_k6_t4_1", "ai_k6_t3_4"],
  7: ["ai_k7_t1_2", "ai_k7_t1_5", "ai_k7_t1_4", "ai_k7_t2_4", "ai_k7_t3_5", "ai_k7_t3_6"],
  8: ["ai_k8_t1_1", "ai_k8_t3_2", "ai_k8_t3_1", "ai_k8_t3_4", "ai_k8_t2_4", "ai_k8_t2_5"],
};

function build(grade: 5 | 6 | 7 | 8, lang?: string): VisualQuestionType {
  const active = aiVisualLang(lang);
  const ui = AI_VISUAL_UI[active];
  return {
    type: `ai-mission-k${grade}`,
    label: `🧠 ${ui.label}`,
    printLabel: ui.label,
    component: AiMissionQuestion,
    subtopicIds: AI_VISUAL_TRIGGERS[grade],
    generate: count => shuffle(localizedAiMissions(grade, active)).slice(0, count).map(mission => {
      const common = {
        ...mission,
        prompt: ui.label,
        question: `${ui.label}: ${mission.title}`,
        printSvg: aiTestDiagramSvgMarkup(mission.id, `${mission.title}. ${mission.clue}`),
        lang: active,
      };
      if (mission.mode === "choice") {
        const options = shuffle(mission.options ?? []);
        return { ...common, options, correctAnswer: mission.answer, correctIndex: options.indexOf(mission.answer ?? "") };
      }
      return { ...common, items: mission.stages, correctOrder: mission.stages };
    }),
    gradeAnswer: (question, given) => question.mode === "choice"
      ? { correct: given === question.correctAnswer, expected: question.correctAnswer }
      : { correct: given === question.correctOrder.join("|"), expected: question.correctOrder.join(" → ") },
    mapProps: (question, userAnswer, submitted, onAnswer) => ({
      mode: question.mode,
      diagramId: question.id,
      prompt: question.prompt,
      title: question.title,
      clue: question.clue,
      options: question.options,
      items: question.items,
      correctAnswer: question.correctAnswer,
      correctOrder: question.correctOrder,
      orderLabel: ui.order,
      tapLabel: ui.tap,
      resetLabel: ui.reset,
      correctLabel: ui.correct,
      solutionLabel: ui.solution,
      userAnswer,
      submitted,
      onAnswer,
    }),
    renderPrint: question => `${question.title}: ${question.clue}`,
  };
}

export function getLocalizedAiVisualTypes(lang?: string): VisualQuestionType[] {
  return ([5, 6, 7, 8] as const).map(grade => build(grade, lang));
}
