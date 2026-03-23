// ─── PHYSIK CURRICULUM KLASSE 7 ───────────────────────────────────────────
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

const K7: PhysikTheme[] = [
  {
    id: "mechanics",
    name: "Mechanik",
    icon: "🚀",
    color: "#EF4444",
    subtopics: [
      { id: "speed_velocity", name: { de: "Geschwindigkeit", en: "Speed & Velocity", hu: "Sebesség", ro: "Viteză" }, questions: [], hasGenerator: true },
      { id: "acceleration", name: { de: "Beschleunigung", en: "Acceleration", hu: "Gyorsulás", ro: "Accelerație" }, questions: [], hasGenerator: true },
      { id: "newton_first", name: { de: "Newtons Erstes Gesetz", en: "Newton's 1st Law", hu: "Newton 1. törvénye", ro: "Legea I a lui Newton" }, questions: [], hasGenerator: true },
      { id: "newton_second", name: { de: "Newtons Zweites Gesetz", en: "Newton's 2nd Law", hu: "Newton 2. törvénye", ro: "Legea II a lui Newton" }, questions: [], hasGenerator: true },
      { id: "newton_third", name: { de: "Newtons Drittes Gesetz", en: "Newton's 3rd Law", hu: "Newton 3. törvénye", ro: "Legea III a lui Newton" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "work_power",
    name: "Arbeit & Leistung",
    icon: "💪",
    color: "#F59E0B",
    subtopics: [
      { id: "work", name: { de: "Arbeit", en: "Work", hu: "Munka", ro: "Lucru mecanic" }, questions: [], hasGenerator: true },
      { id: "power", name: { de: "Leistung", en: "Power", hu: "Teljesítmény", ro: "Putere" }, questions: [], hasGenerator: true },
      { id: "kinetic_energy_calc", name: { de: "Kinetische Energie", en: "Kinetic Energy", hu: "Mozgási energia", ro: "Energie cinetică" }, questions: [], hasGenerator: true },
      { id: "potential_energy_calc", name: { de: "Potenzielle Energie", en: "Potential Energy", hu: "Helyzeti energia", ro: "Energie potențială" }, questions: [], hasGenerator: true },
      { id: "mechanical_advantage", name: { de: "Mechanischer Vorteil", en: "Mechanical Advantage", hu: "Mechanikai előny", ro: "Avantaj mecanic" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "optics",
    name: "Optik",
    icon: "🔍",
    color: "#3B82F6",
    subtopics: [
      { id: "lenses_convex", name: { de: "Sammellinsen", en: "Convex Lenses", hu: "Domború lencse", ro: "Lentile convergente" }, questions: [], hasGenerator: true },
      { id: "lenses_concave", name: { de: "Zerstreuungslinsen", en: "Concave Lenses", hu: "Homorú lencse", ro: "Lentile divergente" }, questions: [], hasGenerator: true },
      { id: "image_formation", name: { de: "Bildentstehung", en: "Image Formation", hu: "Képalkotás", ro: "Formarea imaginii" }, questions: [], hasGenerator: true },
      { id: "eye_optics", name: { de: "Das Auge", en: "The Eye", hu: "A szem", ro: "Ochiul" }, questions: [], hasGenerator: true },
      { id: "optical_instruments", name: { de: "Optische Geräte", en: "Optical Instruments", hu: "Optikai eszközök", ro: "Instrumente optice" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "thermal",
    name: "Thermodynamik",
    icon: "🌡️",
    color: "#FF6B35",
    subtopics: [
      { id: "thermal_expansion", name: { de: "Wärmeausdehnung", en: "Thermal Expansion", hu: "Hőtágulás", ro: "Dilatare termică" }, questions: [], hasGenerator: true },
      { id: "specific_heat", name: { de: "Spezifische Wärme", en: "Specific Heat", hu: "Fajhő", ro: "Căldură specifică" }, questions: [], hasGenerator: true },
      { id: "phase_changes", name: { de: "Phasenübergänge", en: "Phase Changes", hu: "Halmazállapot-változás", ro: "Schimbări de fază" }, questions: [], hasGenerator: true },
      { id: "heat_engines", name: { de: "Wärmekraftmaschinen", en: "Heat Engines", hu: "Hőerőgépek", ro: "Motoare termice" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "waves",
    name: "Wellen",
    icon: "🌊",
    color: "#8B5CF6",
    subtopics: [
      { id: "wave_equation", name: { de: "Wellengleichung", en: "Wave Equation", hu: "Hullámegyenlet", ro: "Ecuația undelor" }, questions: [], hasGenerator: true },
      { id: "electromagnetic_spectrum", name: { de: "Elektromagnetisches Spektrum", en: "EM Spectrum", hu: "Elektromágneses spektrum", ro: "Spectrul electromagnetic" }, questions: [], hasGenerator: true },
      { id: "infrared_uv", name: { de: "Infrarot & UV", en: "Infrared & UV", hu: "Infravörös és UV", ro: "Infraroșu și UV" }, questions: [], hasGenerator: true },
      { id: "wave_interference", name: { de: "Interferenz", en: "Interference", hu: "Interferencia", ro: "Interferență" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "earth_space",
    name: "Erde & Weltall",
    icon: "🌍",
    color: "#10B981",
    subtopics: [
      { id: "gravity_universal", name: { de: "Gravitation", en: "Universal Gravitation", hu: "Egyetemes gravitáció", ro: "Gravitație universală" }, questions: [], hasGenerator: true },
      { id: "solar_system", name: { de: "Sonnensystem", en: "Solar System", hu: "Naprendszer", ro: "Sistemul solar" }, questions: [], hasGenerator: true },
      { id: "orbits", name: { de: "Umlaufbahnen", en: "Orbits", hu: "Pályák", ro: "Orbite" }, questions: [], hasGenerator: true },
      { id: "seasons_tides", name: { de: "Jahreszeiten & Gezeiten", en: "Seasons & Tides", hu: "Évszakok és árapály", ro: "Anotimpuri și maree" }, questions: [], hasGenerator: true },
      { id: "space_exploration", name: { de: "Raumfahrt", en: "Space Exploration", hu: "Űrkutatás", ro: "Explorarea spațiului" }, questions: [], hasGenerator: true },
    ],
  },
];

export const K7_CURRICULUM = K7;

// ─── GENERATOR MAP & GET QUESTIONS ────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PhysikGeneratorMap = Record<string, Record<string, (...args: any[]) => PhysikQuestion[]>>;

export let K7_GENERATOR_MAP: PhysikGeneratorMap = {};

export function setK7GeneratorMap(map: PhysikGeneratorMap) {
  K7_GENERATOR_MAP = map;
}

export function getK7Questions(
  selectedSubtopicIds: string[],
  count = 10
): PhysikQuestion[] {
  const themes = K7_CURRICULUM;
  let pool: PhysikQuestion[] = [];
  const generators = K7_GENERATOR_MAP;

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

// ─── AUTO-INITIALIZE GENERATORS ──────────────────────────────────────────
// This import triggers setK7GeneratorMap() when curriculum is loaded
import "@/lib/physikGeneratorsK7_integration";
