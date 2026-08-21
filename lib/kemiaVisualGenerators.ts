import type { VisualQuestionType } from "@/lib/languageTestTypes";
import TeilchenBild from "@/components/chemie-visual/TeilchenBild";
import Trennmethode from "@/components/chemie-visual/Trennmethode";
import LaborSymbol from "@/components/chemie-visual/LaborSymbol";
import ReaktionOderNicht from "@/components/chemie-visual/ReaktionOderNicht";
import {
  getChangeItems,
  getHazardItems,
  getParticleItems,
  getSeparationItems,
  kemiaVisualLang,
  KEMIA_VISUAL_TYPE_LABELS,
} from "@/lib/kemiaVisualContent";

function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function uniqueBatch<T>(items: T[], count: number): T[] {
  return shuffle(items).slice(0, Math.min(count, items.length));
}

function fourOptions(options: string[], answer: string): string[] {
  return shuffle([answer, ...shuffle(options.filter((option) => option !== answer)).slice(0, 3)]);
}

export function getLocalizedKemiaVisualTypes(lang?: string): VisualQuestionType[] {
  const baseLang = kemiaVisualLang(lang);
  const labels = KEMIA_VISUAL_TYPE_LABELS[baseLang];

  const particle: VisualQuestionType = {
    type: "chemie-teilchenbild",
    label: labels[0],
    printLabel: labels[0],
    component: TeilchenBild,
    subtopicIds: ["materials_daily", "solids_liquids_gases", "particle_idea", "particle_spacing", "particle_motion", "heating_particles", "cooling_particles"],
    generate: (count, requestedLang) => {
      const activeLang = kemiaVisualLang(requestedLang ?? baseLang);
      return uniqueBatch(getParticleItems(activeLang), count).map((item) => {
        const options = shuffle(item.options);
        return { ...item, options, correctIndex: options.indexOf(item.answer), question: item.prompt, lang: activeLang };
      });
    },
    gradeAnswer: (q, given) => ({ correct: given === q.options[q.correctIndex], expected: q.options[q.correctIndex] }),
    mapProps: (q, userAnswer, submitted, onAnswer) => ({
      prompt: q.prompt, diagramId: q.id, options: q.options, correctIndex: q.correctIndex,
      userAnswer, submitted, onAnswer, lang: q.lang,
    }),
    renderPrint: (q) => q.prompt + " → " + q.options[q.correctIndex],
  };

  const separation: VisualQuestionType = {
    type: "chemie-trennmethode",
    label: labels[1],
    printLabel: labels[1],
    component: Trennmethode,
    subtopicIds: ["pure_vs_mixture", "solutions_intro", "suspensions_intro", "filtration_basic", "evaporation_basic", "distillation_intro", "chromatography_intro", "crystallization"],
    generate: (count, requestedLang) => {
      const activeLang = kemiaVisualLang(requestedLang ?? baseLang);
      return uniqueBatch(getSeparationItems(activeLang), count).map((item) => {
        const options = fourOptions(item.options, item.answer);
        return { ...item, options, correctIndex: options.indexOf(item.answer), question: item.prompt, lang: activeLang };
      });
    },
    gradeAnswer: (q, given) => ({ correct: given === q.options[q.correctIndex], expected: q.options[q.correctIndex] }),
    mapProps: (q, userAnswer, submitted, onAnswer) => ({
      prompt: q.prompt, scenario: q.scenario, diagramId: q.id, options: q.options,
      correctIndex: q.correctIndex, userAnswer, submitted, onAnswer, lang: q.lang,
    }),
    renderPrint: (q) => q.scenario + " → " + q.options[q.correctIndex],
  };

  const hazard: VisualQuestionType = {
    type: "chemie-laborsymbol",
    label: labels[2],
    printLabel: labels[2],
    component: LaborSymbol,
    subtopicIds: ["lab_rules", "hazard_symbols_basic", "simple_experiments", "chemistry_safety_home"],
    generate: (count, requestedLang) => {
      const activeLang = kemiaVisualLang(requestedLang ?? baseLang);
      return uniqueBatch(getHazardItems(activeLang), count).map((item) => {
        const options = fourOptions(item.options, item.answer);
        return { ...item, options, correctIndex: options.indexOf(item.answer), question: item.prompt, lang: activeLang };
      });
    },
    gradeAnswer: (q, given) => ({ correct: given === q.options[q.correctIndex], expected: q.options[q.correctIndex] }),
    mapProps: (q, userAnswer, submitted, onAnswer) => ({
      prompt: q.prompt, diagramId: q.id, options: q.options, correctIndex: q.correctIndex,
      userAnswer, submitted, onAnswer, lang: q.lang,
    }),
    renderPrint: (q) => q.prompt + " → " + q.options[q.correctIndex],
  };

  const change: VisualQuestionType = {
    type: "chemie-reaktion-oder-nicht",
    label: labels[3],
    printLabel: labels[3],
    component: ReaktionOderNicht,
    subtopicIds: ["physical_vs_chemical", "burning_signs", "rusting_intro", "dissolving_vs_reacting", "reaction_clues", "combustion_reactions"],
    generate: (count, requestedLang) => {
      const activeLang = kemiaVisualLang(requestedLang ?? baseLang);
      return uniqueBatch(getChangeItems(activeLang), count).map((item) => {
        const options = shuffle(item.options);
        return { ...item, options, correctIndex: options.indexOf(item.answer), question: item.prompt, lang: activeLang };
      });
    },
    gradeAnswer: (q, given) => ({ correct: given === q.options[q.correctIndex], expected: q.options[q.correctIndex] }),
    mapProps: (q, userAnswer, submitted, onAnswer) => ({
      prompt: q.prompt, scenario: q.scenario, diagramId: q.id, options: q.options,
      correctIndex: q.correctIndex, userAnswer, submitted, onAnswer, lang: q.lang,
    }),
    renderPrint: (q) => q.scenario + " → " + q.options[q.correctIndex],
  };

  return [particle, separation, hazard, change];
}

export const KEMIA_VISUAL_TYPES = getLocalizedKemiaVisualTypes("de");
