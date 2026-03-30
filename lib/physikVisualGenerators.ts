import type { VisualQuestionType } from "@/lib/languageTestTypes";
import KraftRichtung from "@/components/physik-visual/KraftRichtung";
import ThermometerAblesen from "@/components/physik-visual/ThermometerAblesen";
import StromkreisDiagramm from "@/components/physik-visual/StromkreisDiagramm";
import EnergieKette from "@/components/physik-visual/EnergieKette";

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

const FORCE_DIRECTION_ITEMS = [
  { scenario: "Ein Apfel fällt vom Baum.", objectEmoji: "🍎", answer: "↓" },
  { scenario: "Du schiebst einen Einkaufswagen nach vorne.", objectEmoji: "🛒", answer: "→" },
  { scenario: "Du ziehst einen Schlitten zu dir.", objectEmoji: "🛷", answer: "←" },
  { scenario: "Ein Ball springt nach oben zurück.", objectEmoji: "🏀", answer: "↑" },
  { scenario: "Luftwiderstand wirkt gegen die Bewegung nach links.", objectEmoji: "🏎️", answer: "→" },
  { scenario: "Die Gewichtskraft zieht die Hantel nach unten.", objectEmoji: "🏋️", answer: "↓" },
];

const TEMPERATURE_ITEMS = [
  { label: "Welche Temperatur zeigt das Thermometer?", value: 20, min: -10, max: 50 },
  { label: "Lies die Temperatur am Thermometer ab.", value: 35, min: 0, max: 100 },
  { label: "Wie warm ist die Flüssigkeit?", value: 60, min: 0, max: 100 },
  { label: "Welche Temperatur ist eingestellt?", value: 5, min: -10, max: 30 },
  { label: "Wie viele Grad Celsius sind zu sehen?", value: 80, min: 0, max: 100 },
];

const CIRCUIT_ITEMS = [
  {
    prompt: "Welches Schema zeigt einen geschlossenen einfachen Stromkreis?",
    diagrams: ["🔋──💡", "🔋  💡", "🔋──/ ─💡", "💡──🔋  "],
    correctIndex: 0,
  },
  {
    prompt: "Welches Schema zeigt eine Reihenschaltung mit zwei Lampen?",
    diagrams: ["🔋──💡──💡", "🔋─┬💡\n  └💡", "🔋  💡  💡", "💡──🔋──💡"],
    correctIndex: 0,
  },
  {
    prompt: "Welches Schema zeigt eine Parallelschaltung?",
    diagrams: ["🔋─┬💡\n  └💡", "🔋──💡──💡", "🔋  💡  💡", "💡──🔋──/"],
    correctIndex: 0,
  },
  {
    prompt: "In welchem Schema ist der Schalter offen?",
    diagrams: ["🔋──💡", "🔋──/ ─💡", "🔋─┬💡\n  └💡", "🔋──💡──💡"],
    correctIndex: 1,
  },
];

const ENERGY_CHAIN_ITEMS = [
  { title: "Ordne die Energiekette einer Taschenlampe.", correctOrder: ["Batterie", "elektrische Energie", "Licht"] },
  { title: "Ordne die Energiekette eines Windrads.", correctOrder: ["Wind", "Bewegung", "elektrische Energie"] },
  { title: "Ordne die Energiekette eines Wasserkochers.", correctOrder: ["Steckdose", "elektrische Energie", "Wärme"] },
  { title: "Ordne die Energiekette eines Solarmoduls.", correctOrder: ["Sonne", "Licht", "elektrische Energie"] },
  { title: "Ordne die Energiekette beim Fahrradfahren.", correctOrder: ["Nahrung", "Bewegung", "Wärme"] },
];

const KRAFT_RICHTUNG: VisualQuestionType = {
  type: "kraft-richtung",
  label: "Kraftrichtung erkennen ↕️",
  printLabel: "Kraftrichtung",
  component: KraftRichtung,
  subtopicIds: [
    "push_pull", "friction", "gravity", "air_resistance",
    "newton_first", "newton_second", "newton_third", "gravity_universal",
  ],
  generate: (count) => shuffle(FORCE_DIRECTION_ITEMS).slice(0, count).map((item) => {
    const options = shuffle(["↑", "↓", "←", "→"]);
    return {
      scenario: item.scenario,
      objectEmoji: item.objectEmoji,
      prompt: "In welche Richtung wirkt die wichtigste Kraft?",
      options,
      correctIndex: options.indexOf(item.answer),
      question: item.scenario,
    };
  }),
  gradeAnswer: (q, given) => ({ correct: given === q.options[q.correctIndex], expected: q.options[q.correctIndex] }),
  mapProps: (q, userAnswer, submitted, onAnswer) => ({
    scenario: q.scenario,
    objectEmoji: q.objectEmoji,
    prompt: q.prompt,
    options: q.options,
    correctIndex: q.correctIndex,
    userAnswer,
    submitted,
    onAnswer,
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
  generate: (count) => shuffle(TEMPERATURE_ITEMS).slice(0, count).map((item) => {
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
  generate: (count) => {
    const pool = Array.from({ length: count }, () => pick(CIRCUIT_ITEMS));
    return pool.map((item) => ({
      ...item,
      question: item.prompt,
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
  generate: (count) => {
    const pool = Array.from({ length: count }, () => pick(ENERGY_CHAIN_ITEMS));
    return pool.map((item) => ({
      title: item.title,
      stages: shuffle(item.correctOrder),
      correctOrder: item.correctOrder,
      question: item.title,
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
  }),
  renderPrint: (q) => `${q.title} → ${q.correctOrder.join(" → ")}`,
};

export const PHYSIK_VISUAL_TYPES: VisualQuestionType[] = [
  KRAFT_RICHTUNG,
  THERMOMETER_ABLESEN,
  STROMKREIS_DIAGRAMM,
  ENERGIE_KETTE,
];
