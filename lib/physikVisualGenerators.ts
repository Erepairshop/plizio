import type { VisualQuestionType } from "@/lib/languageTestTypes";
import KraftRichtung from "@/components/physik-visual/KraftRichtung";
import ThermometerAblesen from "@/components/physik-visual/ThermometerAblesen";
import StromkreisDiagramm from "@/components/physik-visual/StromkreisDiagramm";
import EnergieKette from "@/components/physik-visual/EnergieKette";
import { getCircuitItems, getEnergyChainItems, getForceDirectionItems, getTemperatureItems, physicsVisualLang } from "@/lib/physikVisualContent";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

const KRAFT_RICHTUNG: VisualQuestionType = {
  type: "kraft-richtung",
  label: "Kraftrichtung erkennen ↕️",
  printLabel: "Kraftrichtung",
  component: KraftRichtung,
  subtopicIds: [
    "push_pull", "friction", "gravity", "air_resistance",
    "newton_first", "newton_second", "newton_third", "gravity_universal",
  ],
  generate: (count, lang) => shuffle(getForceDirectionItems(lang)).slice(0, count).map((item) => {
    const options = shuffle(["↑", "↓", "←", "→"]);
    return {
      scenario: item.scenario,
      prompt: item.prompt,
      options,
      correctIndex: options.indexOf(item.answer),
      question: item.scenario,
      sceneId: item.sceneId,
      lang: physicsVisualLang(lang),
    };
  }),
  gradeAnswer: (q, given) => ({ correct: given === q.options[q.correctIndex], expected: q.options[q.correctIndex] }),
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    scenario: q.scenario,
    prompt: q.prompt,
    options: q.options,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
    sceneId: q.sceneId,
    lang: q.lang,
  }),
  renderPrint: (q) => `${q.scenario} → ${q.options[q.correctIndex]}`,
};

const THERMOMETER_ABLESEN: VisualQuestionType = {
  type: "thermometer-ablesen",
  label: "Thermometer ablesen 🌡️",
  printLabel: "Thermometer ablesen",
  component: ThermometerAblesen,
  subtopicIds: [
    "temperature", "melting_boiling", "specific_heat", "phase_changes", "thermal_expansion",
  ],
  generate: (count, lang) => shuffle(getTemperatureItems(lang)).slice(0, count).map((item) => {
    const wrongs = shuffle([
      `${item.value - 10} °C`,
      `${item.value - 5} °C`,
      `${item.value + 5} °C`,
      `${item.value + 10} °C`,
      `${item.value + 15} °C`,
    ]).filter((v, i, arr) => arr.indexOf(v) === i && v !== `${item.value} °C`).slice(0, 3);
    const options = shuffle([`${item.value} °C`, ...wrongs]);
    return {
      ...item,
      options,
      correctIndex: options.indexOf(`${item.value} °C`),
      question: item.label,
      lang: physicsVisualLang(lang),
    };
  }),
  gradeAnswer: (q, given) => ({ correct: given === q.options[q.correctIndex], expected: q.options[q.correctIndex] }),
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    label: q.label,
    value: q.value,
    min: q.min,
    max: q.max,
    options: q.options,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
    lang: q.lang,
  }),
  renderPrint: (q) => `${q.label} → ${q.options[q.correctIndex]}`,
};

const STROMKREIS_DIAGRAMM: VisualQuestionType = {
  type: "stromkreis-diagramm",
  label: "Stromkreis lesen 🔋",
  printLabel: "Stromkreis lesen",
  component: StromkreisDiagramm,
  subtopicIds: [
    "simple_circuits", "series_circuits", "parallel_circuits",
    "current_voltage", "electrical_safety", "ohm_law", "resistance_calc", "electric_power",
  ],
  generate: (count, lang) => {
    const pool = shuffle(getCircuitItems(lang)).slice(0, count);
    return pool.map((item) => ({
      ...item,
      question: item.prompt,
      lang: physicsVisualLang(lang),
    }));
  },
  gradeAnswer: (q, given) => ({ correct: given === q.diagrams[q.correctIndex], expected: `Schema ${String.fromCharCode(65 + q.correctIndex)}` }),
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    prompt: q.prompt,
    diagrams: q.diagrams,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
    lang: q.lang,
  }),
  renderPrint: (q) => `${q.prompt} → Schema ${String.fromCharCode(65 + q.correctIndex)}`,
};

const ENERGIE_KETTE: VisualQuestionType = {
  type: "energie-kette",
  label: "Energiekette ordnen ⚡",
  printLabel: "Energiekette ordnen",
  component: EnergieKette,
  subtopicIds: [
    "energy_forms", "energy_conversion", "energy_chains", "renewable_energy",
    "power_plants", "solar_energy", "wind_energy", "electric_energy",
  ],
  generate: (count, lang) => {
    const pool = shuffle(getEnergyChainItems(lang)).slice(0, count);
    return pool.map((item) => ({
      title: item.title,
      stages: shuffle(item.correctOrder),
      correctOrder: item.correctOrder,
      question: item.title,
      lang: physicsVisualLang(lang),
    }));
  },
  gradeAnswer: (q, given) => ({ correct: given === q.correctOrder.join(","), expected: q.correctOrder.join(" → ") }),
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    title: q.title,
    stages: q.stages,
    correctOrder: q.correctOrder,
    userAnswer,
    submitted,
    onAnswer,
    lang: q.lang,
  }),
  renderPrint: (q) => `${q.title} → ${q.correctOrder.join(" → ")}`,
};

const PHYSIK_VISUAL_LABELS = {
  de: {
    "kraft-richtung": ["Kraftrichtung erkennen ↕️", "Kraftrichtung"],
    "thermometer-ablesen": ["Thermometer ablesen 🌡️", "Thermometer ablesen"],
    "stromkreis-diagramm": ["Stromkreis lesen 🔋", "Stromkreis lesen"],
    "energie-kette": ["Energiekette ordnen ⚡", "Energiekette ordnen"],
  },
  hu: {
    "kraft-richtung": ["Erőirány felismerése ↕️", "Erőirány"],
    "thermometer-ablesen": ["Hőmérő leolvasása 🌡️", "Hőmérő leolvasása"],
    "stromkreis-diagramm": ["Áramkör olvasása 🔋", "Áramkör olvasása"],
    "energie-kette": ["Energialánc rendezése ⚡", "Energialánc rendezése"],
  },
  ro: {
    "kraft-richtung": ["Direcția forței ↕️", "Direcția forței"],
    "thermometer-ablesen": ["Citirea termometrului 🌡️", "Citirea termometrului"],
    "stromkreis-diagramm": ["Citirea circuitului 🔋", "Citirea circuitului"],
    "energie-kette": ["Ordonarea lanțului energetic ⚡", "Lanț energetic"],
  },
  en: {
    "kraft-richtung": ["Force direction ↕️", "Force direction"],
    "thermometer-ablesen": ["Read the thermometer 🌡️", "Read the thermometer"],
    "stromkreis-diagramm": ["Read the circuit 🔋", "Read the circuit"],
    "energie-kette": ["Order the energy chain ⚡", "Energy chain"],
  },
} as const;
export const PHYSIK_VISUAL_TYPES: VisualQuestionType[] = [
  KRAFT_RICHTUNG,
  THERMOMETER_ABLESEN,
  STROMKREIS_DIAGRAMM,
  ENERGIE_KETTE,
];
export function getLocalizedPhysikVisualTypes(lang?: string): VisualQuestionType[] {
  const labels = PHYSIK_VISUAL_LABELS[physicsVisualLang(lang)];
  return PHYSIK_VISUAL_TYPES.map((visualType) => {
    const localized = labels[visualType.type as keyof typeof labels];
    return localized ? { ...visualType, label: localized[0], printLabel: localized[1] } : visualType;
  });
}