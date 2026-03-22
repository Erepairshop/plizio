// ─── PHYSIK CURRICULUM KLASSE 6 ───────────────────────────────────────────
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

const K6: PhysikTheme[] = [
  {
    id: "machines",
    name: "Einfache Maschinen",
    icon: "⚙️",
    color: "#EF4444",
    subtopics: [
      { id: "lever", name: { de: "Hebel", en: "Lever", hu: "Emelő", ro: "Pârghie" }, questions: [], hasGenerator: true },
      { id: "pulley", name: { de: "Flaschenzug", en: "Pulley", hu: "Csiga", ro: "Scripete" }, questions: [], hasGenerator: true },
      { id: "inclined_plane", name: { de: "Schiefe Ebene", en: "Inclined Plane", hu: "Lejtő", ro: "Plan înclinat" }, questions: [], hasGenerator: true },
      { id: "wheel_axle", name: { de: "Rad und Achse", en: "Wheel & Axle", hu: "Kerék és tengely", ro: "Roată și axă" }, questions: [], hasGenerator: true },
      { id: "screw", name: { de: "Schraube", en: "Screw", hu: "Csavar", ro: "Șurub" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "pressure",
    name: "Druck",
    icon: "🫧",
    color: "#3B82F6",
    subtopics: [
      { id: "pressure_basics", name: { de: "Druck", en: "Pressure", hu: "Nyomás", ro: "Presiune" }, questions: [], hasGenerator: true },
      { id: "liquid_pressure", name: { de: "Flüssigkeitsdruck", en: "Liquid Pressure", hu: "Folyadéknyomás", ro: "Presiunea lichidelor" }, questions: [], hasGenerator: true },
      { id: "atmospheric_pressure", name: { de: "Luftdruck", en: "Atmospheric Pressure", hu: "Légnyomás", ro: "Presiunea atmosferică" }, questions: [], hasGenerator: true },
      { id: "hydraulics", name: { de: "Hydraulik", en: "Hydraulics", hu: "Hidraulika", ro: "Hidraulică" }, questions: [], hasGenerator: true },
      { id: "buoyancy", name: { de: "Auftrieb", en: "Buoyancy", hu: "Felhajtóerő", ro: "Forța Arhimede" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "electricity",
    name: "Elektrizität",
    icon: "🔌",
    color: "#F59E0B",
    subtopics: [
      { id: "series_circuits", name: { de: "Reihenschaltung", en: "Series Circuits", hu: "Soros kapcsolás", ro: "Circuit serie" }, questions: [], hasGenerator: true },
      { id: "parallel_circuits", name: { de: "Parallelschaltung", en: "Parallel Circuits", hu: "Párhuzamos kapcsolás", ro: "Circuit paralel" }, questions: [], hasGenerator: true },
      { id: "current_voltage", name: { de: "Strom & Spannung", en: "Current & Voltage", hu: "Áram és feszültség", ro: "Curent și tensiune" }, questions: [], hasGenerator: true },
      { id: "resistance", name: { de: "Widerstand", en: "Resistance", hu: "Ellenállás", ro: "Rezistență" }, questions: [], hasGenerator: true },
      { id: "electrical_safety", name: { de: "Elektrische Sicherheit", en: "Electrical Safety", hu: "Elektromos biztonság", ro: "Siguranță electrică" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "density",
    name: "Dichte & Schwimmen",
    icon: "🏊",
    color: "#10B981",
    subtopics: [
      { id: "density_basics", name: { de: "Dichte", en: "Density", hu: "Sűrűség", ro: "Densitate" }, questions: [], hasGenerator: true },
      { id: "floating_sinking", name: { de: "Schwimmen & Sinken", en: "Floating & Sinking", hu: "Úszás és süllyedés", ro: "Plutire și scufundare" }, questions: [], hasGenerator: true },
      { id: "density_calculation", name: { de: "Dichteberechnung", en: "Density Calculation", hu: "Sűrűségszámítás", ro: "Calculul densității" }, questions: [], hasGenerator: true },
      { id: "archimedes", name: { de: "Archimedisches Prinzip", en: "Archimedes' Principle", hu: "Arkhimédész törvénye", ro: "Principiul lui Arhimede" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "energy_transfer",
    name: "Energieumwandlung",
    icon: "🔄",
    color: "#8B5CF6",
    subtopics: [
      { id: "energy_chains", name: { de: "Energieketten", en: "Energy Chains", hu: "Energialáncok", ro: "Lanțuri energetice" }, questions: [], hasGenerator: true },
      { id: "efficiency", name: { de: "Wirkungsgrad", en: "Efficiency", hu: "Hatásfok", ro: "Randament" }, questions: [], hasGenerator: true },
      { id: "power_plants", name: { de: "Kraftwerke", en: "Power Plants", hu: "Erőművek", ro: "Centrale electrice" }, questions: [], hasGenerator: true },
      { id: "renewable_energy", name: { de: "Erneuerbare Energie", en: "Renewable Energy", hu: "Megújuló energia", ro: "Energie regenerabilă" }, questions: [], hasGenerator: true },
      { id: "fossil_fuels", name: { de: "Fossile Brennstoffe", en: "Fossil Fuels", hu: "Fosszilis tüzelőanyagok", ro: "Combustibili fosili" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "waves_sound",
    name: "Wellen & Schall",
    icon: "🌊",
    color: "#FF6B35",
    subtopics: [
      { id: "wave_properties", name: { de: "Welleneigenschaften", en: "Wave Properties", hu: "Hullámtulajdonságok", ro: "Proprietățile undelor" }, questions: [], hasGenerator: true },
      { id: "wave_types", name: { de: "Wellenarten", en: "Wave Types", hu: "Hullámtípusok", ro: "Tipuri de unde" }, questions: [], hasGenerator: true },
      { id: "sound_properties", name: { de: "Schalleigenschaften", en: "Sound Properties", hu: "Hangtulajdonságok", ro: "Proprietățile sunetului" }, questions: [], hasGenerator: true },
      { id: "ultrasound", name: { de: "Ultraschall", en: "Ultrasound", hu: "Ultrahang", ro: "Ultrasunete" }, questions: [], hasGenerator: true },
    ],
  },
];

export const K6_CURRICULUM = K6;

// ─── GENERATOR MAP & GET QUESTIONS ────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PhysikGeneratorMap = Record<string, Record<string, (...args: any[]) => PhysikQuestion[]>>;

export let K6_GENERATOR_MAP: PhysikGeneratorMap = {};

export function setK6GeneratorMap(map: PhysikGeneratorMap) {
  K6_GENERATOR_MAP = map;
}

export function getK6Questions(
  selectedSubtopicIds: string[],
  count = 10
): PhysikQuestion[] {
  const themes = K6_CURRICULUM;
  let pool: PhysikQuestion[] = [];
  const generators = K6_GENERATOR_MAP;

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
