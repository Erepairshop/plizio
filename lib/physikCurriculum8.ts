// ─── PHYSIK CURRICULUM KLASSE 8 ───────────────────────────────────────────
// English Test mintájára strukturálva
// 28 subtopic × 2 (MCQ + Typing) = 56 generátor

import type { CurriculumQuestion as BaseCurriculumQuestion } from "./curriculumTypes";
import type { TestGradeMark } from "./languageTestTypes";

export type CurriculumQuestion = BaseCurriculumQuestion;
export type PhysikQuestion = CurriculumQuestion;

// Local types with multilingual name support
export interface PhysikSubtopic {
  id: string;
  name: Record<string, string>; // { de, en, hu, ro }
  questions: PhysikQuestion[];
  hasGenerator: boolean;
}

export interface PhysikTheme {
  id: string;
  name: string;
  icon: string;
  color: string;
  subtopics: PhysikSubtopic[];
}

const K8: PhysikTheme[] = [
  {
    id: "electricity_advanced",
    name: "Elektrizität",
    icon: "⚡",
    color: "#F59E0B",
    subtopics: [
      { id: "ohm_law", name: { de: "Ohmsches Gesetz", en: "Ohm's Law", hu: "Ohm törvénye", ro: "Legea lui Ohm" }, questions: [], hasGenerator: true },
      { id: "resistance_calc", name: { de: "Widerstandsberechnung", en: "Resistance Calculation", hu: "Ellenállás számítás", ro: "Calculul rezistenței" }, questions: [], hasGenerator: true },
      { id: "electric_power", name: { de: "Elektrische Leistung", en: "Electric Power", hu: "Elektromos teljesítmény", ro: "Putere electrică" }, questions: [], hasGenerator: true },
      { id: "electric_energy", name: { de: "Elektrische Energie", en: "Electric Energy", hu: "Elektromos energia", ro: "Energie electrică" }, questions: [], hasGenerator: true },
      { id: "semiconductors", name: { de: "Halbleiter", en: "Semiconductors", hu: "Félvezetők", ro: "Semiconductori" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "electromagnetism",
    name: "Elektromagnetismus",
    icon: "🧲",
    color: "#3B82F6",
    subtopics: [
      { id: "electromagnets", name: { de: "Elektromagnete", en: "Electromagnets", hu: "Elektromágnesek", ro: "Electromagneți" }, questions: [], hasGenerator: true },
      { id: "electromagnetic_induction", name: { de: "Induktion", en: "Induction", hu: "Indukció", ro: "Inducție" }, questions: [], hasGenerator: true },
      { id: "generators", name: { de: "Generatoren", en: "Generators", hu: "Generátorok", ro: "Generatoare" }, questions: [], hasGenerator: true },
      { id: "transformers", name: { de: "Transformatoren", en: "Transformers", hu: "Transzformátorok", ro: "Transformatoare" }, questions: [], hasGenerator: true },
      { id: "electric_motors", name: { de: "Elektromotoren", en: "Electric Motors", hu: "Villanymotor", ro: "Motoare electrice" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "nuclear",
    name: "Kernphysik",
    icon: "☢️",
    color: "#EF4444",
    subtopics: [
      { id: "atomic_structure", name: { de: "Atombau", en: "Atomic Structure", hu: "Atomszerkezet", ro: "Structura atomică" }, questions: [], hasGenerator: true },
      { id: "radioactivity", name: { de: "Radioaktivität", en: "Radioactivity", hu: "Radioaktivitás", ro: "Radioactivitate" }, questions: [], hasGenerator: true },
      { id: "radiation_types", name: { de: "Strahlungsarten", en: "Types of Radiation", hu: "Sugárzás típusai", ro: "Tipuri de radiații" }, questions: [], hasGenerator: true },
      { id: "half_life", name: { de: "Halbwertszeit", en: "Half-Life", hu: "Felezési idő", ro: "Timp de înjumătățire" }, questions: [], hasGenerator: true },
      { id: "nuclear_energy", name: { de: "Kernenergie", en: "Nuclear Energy", hu: "Atomenergia", ro: "Energie nucleară" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "modern",
    name: "Moderne Physik",
    icon: "🔬",
    color: "#8B5CF6",
    subtopics: [
      { id: "special_relativity", name: { de: "Spezielle Relativität", en: "Special Relativity", hu: "Speciális relativitás", ro: "Relativitate specială" }, questions: [], hasGenerator: true },
      { id: "photoelectric_effect", name: { de: "Photoelektrischer Effekt", en: "Photoelectric Effect", hu: "Fotoelektromos hatás", ro: "Efectul fotoelectric" }, questions: [], hasGenerator: true },
      { id: "wave_particle", name: { de: "Welle-Teilchen-Dualismus", en: "Wave-Particle Duality", hu: "Hullám-részecske kettősség", ro: "Dualitatea undă-particulă" }, questions: [], hasGenerator: true },
      { id: "quantum_basics", name: { de: "Quantenphysik Grundlagen", en: "Quantum Basics", hu: "Kvantumfizika alapjai", ro: "Bazele fizicii cuantice" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "energy_environment",
    name: "Energie & Umwelt",
    icon: "🌱",
    color: "#10B981",
    subtopics: [
      { id: "renewable_sources", name: { de: "Erneuerbare Quellen", en: "Renewable Sources", hu: "Megújuló források", ro: "Surse regenerabile" }, questions: [], hasGenerator: true },
      { id: "solar_energy", name: { de: "Solarenergie", en: "Solar Energy", hu: "Napenergia", ro: "Energie solară" }, questions: [], hasGenerator: true },
      { id: "wind_energy", name: { de: "Windenergie", en: "Wind Energy", hu: "Szélenergia", ro: "Energie eoliană" }, questions: [], hasGenerator: true },
      { id: "nuclear_power", name: { de: "Kernkraft", en: "Nuclear Power", hu: "Atomenergia felhasználása", ro: "Energie nucleară" }, questions: [], hasGenerator: true },
      { id: "energy_efficiency", name: { de: "Energieeffizienz", en: "Energy Efficiency", hu: "Energiahatékonyság", ro: "Eficiență energetică" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "communication",
    name: "Kommunikationstechnik",
    icon: "📡",
    color: "#FF6B35",
    subtopics: [
      { id: "electromagnetic_waves", name: { de: "Elektromagnetische Wellen", en: "EM Waves", hu: "Elektromágneses hullámok", ro: "Unde electromagnetice" }, questions: [], hasGenerator: true },
      { id: "radio_tv", name: { de: "Radio & Fernsehen", en: "Radio & TV", hu: "Rádió és TV", ro: "Radio și TV" }, questions: [], hasGenerator: true },
      { id: "fiber_optics", name: { de: "Glasfaser", en: "Fiber Optics", hu: "Optikai szálak", ro: "Fibre optice" }, questions: [], hasGenerator: true },
      { id: "digital_signals", name: { de: "Digitale Signale", en: "Digital Signals", hu: "Digitális jelek", ro: "Semnale digitale" }, questions: [], hasGenerator: true },
    ],
  },
];

export const K8_CURRICULUM = K8;

// ─── GENERATOR MAP & GET QUESTIONS ────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PhysikGeneratorMap = Record<string, Record<string, (...args: any[]) => PhysikQuestion[]>>;

export let K8_GENERATOR_MAP: PhysikGeneratorMap = {};

export function setK8GeneratorMap(map: PhysikGeneratorMap) {
  K8_GENERATOR_MAP = map;
}

export function getK8Questions(
  selectedSubtopicIds: string[],
  count = 10
): PhysikQuestion[] {
  const themes = K8_CURRICULUM;
  let pool: PhysikQuestion[] = [];
  const generators = K8_GENERATOR_MAP;

  if (!generators || Object.keys(generators).length === 0) {
    // Fallback: csak a hardcoded questions-t használ
    for (const theme of themes) {
      for (const sub of theme.subtopics) {
        if (selectedSubtopicIds.includes(sub.id)) {
          pool.push(...sub.questions);
        }
      }
    }
    return pool.slice(0, count);
  }

  // Generator-alapú
  for (const theme of themes) {
    for (const sub of theme.subtopics) {
      if (selectedSubtopicIds.includes(sub.id)) {
        // MCQ generátor
        let generatorFn: ((seed?: number) => PhysikQuestion[]) | undefined;
        for (const themeGens of Object.values(generators)) {
          if (themeGens[sub.id]) { generatorFn = themeGens[sub.id]; break; }
        }
        if (generatorFn) {
          pool.push(...generatorFn(Math.floor(Math.random() * 1000000)));
        } else {
          pool.push(...sub.questions);
        }

        // Typing generátor
        const typingKey = sub.id + "_typing";
        let typingFn: ((seed?: number) => PhysikQuestion[]) | undefined;
        for (const themeGens of Object.values(generators)) {
          if (themeGens[typingKey]) { typingFn = themeGens[typingKey]; break; }
        }
        if (typingFn) {
          pool.push(...typingFn(Math.floor(Math.random() * 1000000)));
        }
      }
    }
  }

  // Deduplicate by question text
  const seenQ = new Set<string>();
  pool = pool.filter(q => {
    if (seenQ.has(q.question)) return false;
    seenQ.add(q.question);
    return true;
  });

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

// ─── HELPER FUNCTIONS FOR GENERATORS ──────────────────────────────────────

export function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) | 0;
    return (((t ^ (t >>> 14)) >>> 0) / 4294967296);
  };
}

export function shuffle<T>(arr: T[], rng: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

export function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrong: string[],
  rng: () => number
): CurriculumQuestion {
  const options = shuffle([correct, ...wrong.slice(0, 3)], rng);
  return {
    type: "mcq" as const,
    topic,
    subtopic,
    question,
    options,
    correct: options.indexOf(correct),
  };
}

export function createTyping(
  topic: string,
  subtopic: string,
  question: string,
  answer: string | string[]
): CurriculumQuestion {
  return {
    type: "typing" as const,
    topic,
    subtopic,
    question,
    answer,
  };
}

// ─── GRADING ──────────────────────────────────────────────────────────────

export function calculatePhysikMark(pct: number): TestGradeMark {
  if (pct >= 95) return { note: "1", label: "Sehr gut",    color: "#FFD700", emoji: "🌟" };
  if (pct >= 80) return { note: "2", label: "Gut",         color: "#00FF88", emoji: "😊" };
  if (pct >= 65) return { note: "3", label: "Befriedigend", color: "#00D4FF", emoji: "🙂" };
  if (pct >= 50) return { note: "4", label: "Ausreichend", color: "#FF9500", emoji: "😐" };
  if (pct >= 25) return { note: "5", label: "Mangelhaft",  color: "#FF6B00", emoji: "😅" };
  return             { note: "6", label: "Ungenügend",     color: "#FF4444", emoji: "😟" };
}
