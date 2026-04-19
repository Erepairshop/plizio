import type { VisualQuestionType } from "./languageTestTypes";
import GeographieIcon from "@/components/geographie-visual/GeographieIcon";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// ─── 1. GEOGRAPHIE ICON ERKENNEN (K8) ──────────────────────────────────────────

const GEOGRAPHIE_ICON_DATA = [
  { svgName: "KompassSvg", correct: "Kompass", options: ["Kompass", "Uhr", "Thermometer", "Barometer"] },
  { svgName: "VulkanSvg", correct: "Vulkan", options: ["Vulkan", "Berg", "Gletscher", "Höhle"] },
  { svgName: "PlattentektonikSvg", correct: "Plattentektonik", options: ["Plattentektonik", "Erdbeben", "Tsunami", "Falte"] }
];

const GEOGRAPHIE_ICON: VisualQuestionType = {
  type: "geographie-icon",
  label: "Geographie Symbole 🗺️",
  printLabel: "Geographie Symbol erkennen",
  component: GeographieIcon,
  subtopicIds: [
    "weathering_erosion", "fluvial_landforms", "glacial_landforms", "aeolian_landforms",
    "economic_sectors", "globalization_impact", "world_trade_routes", "locational_factors",
    "amazon_rainforest_use", "brazil_economic_power", "andes_mining_climate", "central_america_islands"
  ],
  generate: (count) => {
    return shuffle(GEOGRAPHIE_ICON_DATA).slice(0, count).map(item => {
      const shuffledOptions = shuffle(item.options);
      return {
        svgName: item.svgName,
        options: shuffledOptions,
        correctIndex: shuffledOptions.indexOf(item.correct),
        question: item.correct,
      };
    });
  },
  gradeAnswer: (q, given) => {
    const correct = given === q.options[q.correctIndex];
    return { correct, expected: q.options[q.correctIndex] };
  },
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    svgName: q.svgName,
    options: q.options,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `Symbol: ${q.svgName} → ${q.options[q.correctIndex]}`,
};

// ─── EXPORT ──────────────────────────────────────────────────────────────────

export const GEOGRAPHIE_VISUAL_TYPES: VisualQuestionType[] = [
  GEOGRAPHIE_ICON,
];
