import GeographyMissionQuestion from "@/components/geographie-visual/GeographyMissionQuestion";
import { geographyDiagramSvgMarkup } from "@/components/geographie-visual/GeographyTestDiagrams";
import type { VisualQuestionType } from "./languageTestTypes";
import { GEOGRAPHY_VISUAL_UI, geographyVisualLang, localizedGeographyMissions } from "./geographieVisualContent";

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

export const GEOGRAPHY_VISUAL_TRIGGERS: Record<number, string[]> = {
  5: ["compass_directions", "map_symbols", "scale_basics"],
  6: ["contour_lines", "gps_gis_basics", "atlas_usage"],
  7: ["plate_tectonics", "earthquakes_measuring", "volcanism_types"],
  8: ["weathering_erosion", "fluvial_landforms", "glacial_landforms"],
};

function buildGradeType(grade: 5 | 6 | 7 | 8, lang?: string): VisualQuestionType {
  const activeLang = geographyVisualLang(lang);
  const ui = GEOGRAPHY_VISUAL_UI[activeLang];
  return {
    type: `geography-mission-k${grade}`,
    label: `🧭 ${ui.label}`,
    printLabel: ui.label,
    component: GeographyMissionQuestion,
    subtopicIds: GEOGRAPHY_VISUAL_TRIGGERS[grade],
    generate: count => shuffle(localizedGeographyMissions(grade, activeLang)).slice(0, count).map(mission => {
      const common = {
        ...mission,
        prompt: ui.label,
        question: `${ui.label}: ${mission.title}`,
        printSvg: geographyDiagramSvgMarkup(mission.id, `${mission.title}. ${mission.clue}`),
        lang: activeLang,
      };
      if (mission.mode === "choice") {
        const options = shuffle(mission.options);
        return { ...common, options, correctAnswer: mission.answer, correctIndex: options.indexOf(mission.answer) };
      }
      return { ...common, items: mission.stages, correctOrder: mission.stages };
    }),
    gradeAnswer: (question, given) => {
      if (question.mode === "choice") return { correct: given === question.correctAnswer, expected: question.correctAnswer };
      return { correct: given === question.correctOrder.join("|"), expected: question.correctOrder.join(" → ") };
    },
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

export function getLocalizedGeographyVisualTypes(lang?: string): VisualQuestionType[] {
  return ([5, 6, 7, 8] as const).map(grade => buildGradeType(grade, lang));
}

export const GEOGRAPHIE_VISUAL_TYPES = getLocalizedGeographyVisualTypes("de");
