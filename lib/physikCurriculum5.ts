// ─── PHYSIK CURRICULUM KLASSE 5 ───────────────────────────────────────────
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

const K5: PhysikTheme[] = [
  {
    id: "forces",
    name: "Kräfte & Bewegung",
    icon: "💪",
    color: "#EF4444",
    subtopics: [
      { id: "push_pull", name: { de: "Drücken & Ziehen", en: "Push & Pull", hu: "Húzás és tolás", ro: "Împingere și tragere" }, questions: [], hasGenerator: true },
      { id: "friction", name: { de: "Reibung", en: "Friction", hu: "Súrlódás", ro: "Frecare" }, questions: [], hasGenerator: true },
      { id: "gravity", name: { de: "Schwerkraft", en: "Gravity", hu: "Gravitáció", ro: "Gravitație" }, questions: [], hasGenerator: true },
      { id: "weight_mass", name: { de: "Gewicht & Masse", en: "Weight & Mass", hu: "Tömeg és súly", ro: "Greutate și masă" }, questions: [], hasGenerator: true },
      { id: "air_resistance", name: { de: "Luftwiderstand", en: "Air Resistance", hu: "Légellenállás", ro: "Rezistența aerului" }, questions: [], hasGenerator: true },
      { id: "force_measurement", name: { de: "Kraftmessung", en: "Force Measurement", hu: "Erőmérés", ro: "Măsurarea forței" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "energy",
    name: "Energie",
    icon: "⚡",
    color: "#F59E0B",
    subtopics: [
      { id: "energy_forms", name: { de: "Energieformen", en: "Forms of Energy", hu: "Energiaformák", ro: "Forme de energie" }, questions: [], hasGenerator: true },
      { id: "kinetic_energy", name: { de: "Kinetische Energie", en: "Kinetic Energy", hu: "Mozgási energia", ro: "Energie cinetică" }, questions: [], hasGenerator: true },
      { id: "potential_energy", name: { de: "Potenzielle Energie", en: "Potential Energy", hu: "Helyzeti energia", ro: "Energie potențială" }, questions: [], hasGenerator: true },
      { id: "energy_conversion", name: { de: "Energieumwandlung", en: "Energy Conversion", hu: "Energiaátalakulás", ro: "Conversia energiei" }, questions: [], hasGenerator: true },
      { id: "energy_conservation", name: { de: "Energieerhaltung", en: "Energy Conservation", hu: "Energia megmaradás", ro: "Conservarea energiei" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "heat",
    name: "Wärmelehre",
    icon: "🔥",
    color: "#FF6B35",
    subtopics: [
      { id: "temperature", name: { de: "Temperatur", en: "Temperature", hu: "Hőmérséklet", ro: "Temperatură" }, questions: [], hasGenerator: true },
      { id: "heat_transfer", name: { de: "Wärmeübertragung", en: "Heat Transfer", hu: "Hőátadás", ro: "Transfer de căldură" }, questions: [], hasGenerator: true },
      { id: "states_of_matter", name: { de: "Aggregatzustände", en: "States of Matter", hu: "Halmazállapotok", ro: "Stări de agregare" }, questions: [], hasGenerator: true },
      { id: "melting_boiling", name: { de: "Schmelzen & Sieden", en: "Melting & Boiling", hu: "Olvadás és forrás", ro: "Topire și fierbere" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "light",
    name: "Optik",
    icon: "💡",
    color: "#FBBF24",
    subtopics: [
      { id: "light_sources", name: { de: "Lichtquellen", en: "Light Sources", hu: "Fényforrások", ro: "Surse de lumină" }, questions: [], hasGenerator: true },
      { id: "shadows", name: { de: "Schatten", en: "Shadows", hu: "Árnyékok", ro: "Umbre" }, questions: [], hasGenerator: true },
      { id: "reflection", name: { de: "Reflexion", en: "Reflection", hu: "Visszaverődés", ro: "Reflexie" }, questions: [], hasGenerator: true },
      { id: "refraction", name: { de: "Brechung", en: "Refraction", hu: "Fénytörés", ro: "Refracție" }, questions: [], hasGenerator: true },
      { id: "colors_spectrum", name: { de: "Farben & Spektrum", en: "Colors & Spectrum", hu: "Színek és spektrum", ro: "Culori și spectru" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "sound",
    name: "Akustik",
    icon: "🔊",
    color: "#8B5CF6",
    subtopics: [
      { id: "sound_waves", name: { de: "Schallwellen", en: "Sound Waves", hu: "Hanghullámok", ro: "Unde sonore" }, questions: [], hasGenerator: true },
      { id: "pitch_volume", name: { de: "Tonhöhe & Lautstärke", en: "Pitch & Volume", hu: "Hangmagasság és hangerő", ro: "Înălțime și volum" }, questions: [], hasGenerator: true },
      { id: "echo", name: { de: "Echo", en: "Echo", hu: "Visszhang", ro: "Ecou" }, questions: [], hasGenerator: true },
      { id: "speed_of_sound", name: { de: "Schallgeschwindigkeit", en: "Speed of Sound", hu: "Hangsebesség", ro: "Viteza sunetului" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "magnetism",
    name: "Magnetismus & Elektrizität",
    icon: "🧲",
    color: "#3B82F6",
    subtopics: [
      { id: "magnets", name: { de: "Magnete", en: "Magnets", hu: "Mágnesek", ro: "Magneți" }, questions: [], hasGenerator: true },
      { id: "magnetic_field", name: { de: "Magnetfeld", en: "Magnetic Field", hu: "Mágneses mező", ro: "Câmp magnetic" }, questions: [], hasGenerator: true },
      { id: "static_electricity", name: { de: "Statische Elektrizität", en: "Static Electricity", hu: "Sztatikus elektromosság", ro: "Electricitate statică" }, questions: [], hasGenerator: true },
      { id: "simple_circuits", name: { de: "Einfache Stromkreise", en: "Simple Circuits", hu: "Egyszerű áramkörök", ro: "Circuite simple" }, questions: [], hasGenerator: true },
    ],
  },
];

export const K5_CURRICULUM = K5;

// ─── GENERATOR MAP & GET QUESTIONS ────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type PhysikGeneratorMap = Record<string, Record<string, (...args: any[]) => PhysikQuestion[]>>;

export let K5_GENERATOR_MAP: PhysikGeneratorMap = {};

export function setK5GeneratorMap(map: PhysikGeneratorMap) {
  K5_GENERATOR_MAP = map;
}

export function getK5Questions(
  selectedSubtopicIds: string[],
  count = 10
): PhysikQuestion[] {
  const themes = K5_CURRICULUM;
  let pool: PhysikQuestion[] = [];
  const generators = K5_GENERATOR_MAP;

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
