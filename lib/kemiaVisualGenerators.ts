import type { VisualQuestionType } from "@/lib/languageTestTypes";
import TeilchenBild from "@/components/chemie-visual/TeilchenBild";
import Trennmethode from "@/components/chemie-visual/Trennmethode";
import LaborSymbol from "@/components/chemie-visual/LaborSymbol";
import ReaktionOderNicht from "@/components/chemie-visual/ReaktionOderNicht";

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

const PARTICLE_ITEMS = [
  {
    prompt: "Welcher Zustand ist im Teilchenbild zu sehen?",
    mode: "solid" as const,
    particles: [
      { x: 24, y: 38 }, { x: 38, y: 38 }, { x: 52, y: 38 }, { x: 66, y: 38 },
      { x: 24, y: 54 }, { x: 38, y: 54 }, { x: 52, y: 54 }, { x: 66, y: 54 },
      { x: 24, y: 70 }, { x: 38, y: 70 }, { x: 52, y: 70 }, { x: 66, y: 70 },
    ],
    answer: "fest",
  },
  {
    prompt: "Wie sind die Teilchen hier angeordnet?",
    mode: "liquid" as const,
    particles: [
      { x: 24, y: 50 }, { x: 36, y: 44 }, { x: 50, y: 50 }, { x: 64, y: 46 },
      { x: 30, y: 64 }, { x: 44, y: 60 }, { x: 58, y: 64 }, { x: 72, y: 60 },
      { x: 38, y: 76 }, { x: 52, y: 72 }, { x: 66, y: 76 },
    ],
    answer: "flüssig",
  },
  {
    prompt: "Welcher Aggregatzustand passt zu diesem Teilchenbild?",
    mode: "gas" as const,
    particles: [
      { x: 20, y: 24 }, { x: 50, y: 20 }, { x: 76, y: 30 }, { x: 28, y: 52 },
      { x: 64, y: 48 }, { x: 18, y: 78 }, { x: 48, y: 70 }, { x: 78, y: 76 },
    ],
    answer: "gasförmig",
  },
];

const SEPARATION_ITEMS = [
  {
    prompt: "Welche Trennmethode passt am besten?",
    scenario: "Sand ist mit Wasser vermischt.",
    mixture: ["Sand", "Wasser"],
    answer: "Filtration",
  },
  {
    prompt: "Wie kann man Salz am besten aus Salzwasser gewinnen?",
    scenario: "Eine Salzlösung soll getrennt werden.",
    mixture: ["Salz", "Wasser"],
    answer: "Eindampfen",
  },
  {
    prompt: "Welche Methode passt zu Eisenspänen und Sand?",
    scenario: "Ein Stoff im Gemisch wird vom Magneten angezogen.",
    mixture: ["Eisen", "Sand"],
    answer: "Magnet trennen",
  },
  {
    prompt: "Wie trennt man Öl und Wasser am einfachsten?",
    scenario: "Die Stoffe mischen sich nicht und bilden Schichten.",
    mixture: ["Öl", "Wasser"],
    answer: "Abgießen",
  },
];

const LAB_SYMBOL_ITEMS = [
  {
    prompt: "Wofür steht dieses Gefahrensymbol?",
    symbol: "🔥",
    title: "Gefahrensymbol",
    answer: "entzündlich",
  },
  {
    prompt: "Was bedeutet dieses Symbol im Labor?",
    symbol: "☠️",
    title: "Gefahrensymbol",
    answer: "giftig",
  },
  {
    prompt: "Wie heißt die Gefahr bei diesem Symbol?",
    symbol: "🧪",
    title: "ätzende Stoffe",
    answer: "ätzend",
  },
  {
    prompt: "Welche Bedeutung passt zu diesem Symbol?",
    symbol: "⚠️",
    title: "Warnsymbol",
    answer: "reizend",
  },
];

const CHANGE_ITEMS = [
  {
    prompt: "Ist das eine chemische Reaktion oder nur eine physikalische Veränderung?",
    scenario: "Ein Eiswürfel schmilzt in der Sonne.",
    sceneEmoji: "🧊",
    answer: "physikalische Veränderung",
  },
  {
    prompt: "Was passiert hier aus chemischer Sicht?",
    scenario: "Ein Stück Eisen rostet.",
    sceneEmoji: "🔩",
    answer: "chemische Reaktion",
  },
  {
    prompt: "Wie ordnest du den Vorgang ein?",
    scenario: "Zucker löst sich in Wasser.",
    sceneEmoji: "🥤",
    answer: "physikalische Veränderung",
  },
  {
    prompt: "Ist das ein Hinweis auf eine neue Stoffbildung?",
    scenario: "Holz brennt und es entsteht Asche.",
    sceneEmoji: "🔥",
    answer: "chemische Reaktion",
  },
];

const TEILCHENBILD: VisualQuestionType = {
  type: "chemie-teilchenbild",
  label: "Teilchenbild deuten ⚪",
  printLabel: "Teilchenbild",
  component: TeilchenBild,
  subtopicIds: ["materials_daily", "solids_liquids_gases", "particle_idea", "particle_spacing", "particle_motion"],
  generate: (count) => Array.from({ length: count }, () => {
    const item = pick(PARTICLE_ITEMS);
    const options = shuffle(["fest", "flüssig", "gasförmig"]);
    return {
      ...item,
      options,
      correctIndex: options.indexOf(item.answer),
      question: item.prompt,
    };
  }),
  gradeAnswer: (q, given) => ({ correct: given === q.options[q.correctIndex], expected: q.options[q.correctIndex] }),
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    prompt: q.prompt,
    particles: q.particles,
    mode: q.mode,
    options: q.options,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `${q.prompt} → ${q.options[q.correctIndex]}`,
};

const TRENNMETHODE: VisualQuestionType = {
  type: "chemie-trennmethode",
  label: "Trennmethode wählen 🥣",
  printLabel: "Trennmethode",
  component: Trennmethode,
  subtopicIds: ["pure_vs_mixture", "solutions_intro", "suspensions_intro", "filtration_basic", "evaporation_basic"],
  generate: (count) => Array.from({ length: count }, () => {
    const item = pick(SEPARATION_ITEMS);
    const options = shuffle(["Filtration", "Eindampfen", "Magnet trennen", "Abgießen"]);
    return {
      ...item,
      options,
      correctIndex: options.indexOf(item.answer),
      question: item.prompt,
    };
  }),
  gradeAnswer: (q, given) => ({ correct: given === q.options[q.correctIndex], expected: q.options[q.correctIndex] }),
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    prompt: q.prompt,
    scenario: q.scenario,
    mixture: q.mixture,
    options: q.options,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `${q.scenario} → ${q.options[q.correctIndex]}`,
};

const LABORSYMBOL: VisualQuestionType = {
  type: "chemie-laborsymbol",
  label: "Laborzeichen erkennen ⚠️",
  printLabel: "Laborzeichen",
  component: LaborSymbol,
  subtopicIds: ["lab_rules", "hazard_symbols_basic", "simple_experiments"],
  generate: (count) => Array.from({ length: count }, () => {
    const item = pick(LAB_SYMBOL_ITEMS);
    const options = shuffle(["entzündlich", "giftig", "ätzend", "reizend"]);
    return {
      ...item,
      options,
      correctIndex: options.indexOf(item.answer),
      question: item.prompt,
    };
  }),
  gradeAnswer: (q, given) => ({ correct: given === q.options[q.correctIndex], expected: q.options[q.correctIndex] }),
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    prompt: q.prompt,
    symbol: q.symbol,
    title: q.title,
    options: q.options,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `${q.title} → ${q.options[q.correctIndex]}`,
};

const REAKTION_ODER_NICHT: VisualQuestionType = {
  type: "chemie-reaktion-oder-nicht",
  label: "Reaktion oder nicht? ✨",
  printLabel: "Reaktion oder nicht",
  component: ReaktionOderNicht,
  subtopicIds: ["physical_vs_chemical", "burning_signs", "rusting_intro", "dissolving_vs_reacting", "reaction_clues"],
  generate: (count) => Array.from({ length: count }, () => {
    const item = pick(CHANGE_ITEMS);
    const options = shuffle(["physikalische Veränderung", "chemische Reaktion"]);
    return {
      ...item,
      options,
      correctIndex: options.indexOf(item.answer),
      question: item.prompt,
    };
  }),
  gradeAnswer: (q, given) => ({ correct: given === q.options[q.correctIndex], expected: q.options[q.correctIndex] }),
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    prompt: q.prompt,
    scenario: q.scenario,
    sceneEmoji: q.sceneEmoji,
    options: q.options,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
  }),
  renderPrint: (q) => `${q.scenario} → ${q.options[q.correctIndex]}`,
};

export const KEMIA_VISUAL_TYPES: VisualQuestionType[] = [
  TEILCHENBILD,
  TRENNMETHODE,
  LABORSYMBOL,
  REAKTION_ODER_NICHT,
];
