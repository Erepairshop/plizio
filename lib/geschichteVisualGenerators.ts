import HistoryMissionQuestion from "@/components/geschichte-visual/HistoryMissionQuestion";
import { historyDiagramSvgMarkup } from "@/components/geschichte-visual/HistoryTestDiagrams";
import type { VisualQuestionType } from "./languageTestTypes";
import { GESCHICHTE_VISUAL_UI, geschichteVisualLang, localizedGeschichteMissions } from "./geschichteVisualContent";

type VisualGenerationContext = { grade: number; subtopicId: string; countryCode?: string };

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

export const GESCHICHTE_VISUAL_TRIGGERS: Record<number, string[]> = {
  5: [
    "fruehe_hochkulturen", "griechenland", "aegypten",
    "hu_magyar_ostortenet", "hu_karpat_medence_okor", "hu_honfoglalas",
    "ro_daci_getii", "ro_burebista", "ro_decebal",
    "us_native_peoples", "us_exploration", "us_colonization_13",
    "uk_stone_age_britain", "uk_celts_iron_age", "uk_romans_britain",
  ],
  6: [
    "frankenreich_chlodwig", "karl_der_grosse", "verwaltung_frankenreich",
    "hu_tatarjaras_1241", "hu_arpad_kihalasa", "hu_anjou_kor",
    "ro_formarea_poporului", "ro_voievodate_timpurii", "ro_descalecatul",
    "us_louisiana_purchase", "us_lewis_clark", "us_war_of_1812",
    "uk_magna_carta", "uk_plantagenet", "uk_black_death_britain",
  ],
  7: [
    "renaissance", "humanismus", "buchdruck",
    "hu_haromreszre_szakadas", "hu_budai_pasalik", "hu_erdely_fejedelemseg",
    "ro_mihai_viteazul", "ro_razboaiele_otomane", "ro_epoca_fanariota",
    "us_gilded_age", "us_progressive_era", "us_wwi",
    "uk_civil_war_eng", "uk_restoration", "uk_glorious_rev",
  ],
  8: [
    "imperialismus", "erster_weltkrieg_beginn", "erster_weltkrieg_verlauf",
    "hu_1848_forradalom", "hu_szabadsagharc_1849", "hu_kiegyezes_1867",
    "ro_razboi_independenta", "ro_regatul_romaniei", "ro_primul_razboi_mondial_ro",
    "us_cold_war_events", "us_civil_rights", "us_vietnam_war",
    "uk_ww1_britain", "uk_suffragettes", "uk_irish_independence",
  ],
};

function buildGradeType(grade: 5 | 6 | 7 | 8, lang?: string): VisualQuestionType {
  const activeLang = geschichteVisualLang(lang);
  const ui = GESCHICHTE_VISUAL_UI[activeLang];
  return {
    type: `geschichte-mission-k${grade}`,
    label: `🧭 ${ui.label}`,
    printLabel: ui.label,
    component: HistoryMissionQuestion,
    subtopicIds: GESCHICHTE_VISUAL_TRIGGERS[grade],
    generate: (count: number, _language?: string, context?: VisualGenerationContext) => {
      if (context && context.grade !== grade) return [];
      return shuffle(localizedGeschichteMissions(grade, activeLang)).slice(0, count).map(mission => {
        const common = {
          ...mission,
          prompt: ui.label,
          question: `${ui.label}: ${mission.title}`,
          printSvg: historyDiagramSvgMarkup(mission.id, `${mission.title}. ${mission.clue}`),
          lang: activeLang,
        };
        if (mission.mode === "choice") {
          const options = shuffle(mission.options);
          return { ...common, options, correctAnswer: mission.answer, correctIndex: options.indexOf(mission.answer) };
        }
        return { ...common, items: mission.stages, correctOrder: mission.stages };
      });
    },
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

export function getLocalizedGeschichteVisualTypes(lang?: string): VisualQuestionType[] {
  return ([5, 6, 7, 8] as const).map(grade => buildGradeType(grade, lang));
}

export const GESCHICHTE_VISUAL_TYPES = getLocalizedGeschichteVisualTypes("de");
