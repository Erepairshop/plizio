// ─── BIOLOGIE CURRICULUM KLASSE 5 ─────────────────────────────────────────
// English Test mintájára strukturálva
// 24 subtopic × 2 (MCQ + Typing) = 48 generátor

import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import type { TestGradeMark } from "./languageTestTypes";
import { pickDiverse } from "./testDiversity";
import { localizeBiologieQuestions } from "./biologieQuestionTranslations";

export type BiologieQuestion = CurriculumQuestion;
export type BiologieTheme = CurriculumTheme;

const K5: BiologieTheme[] = [
  {
    id: "wirbeltiere",
    name: { de: "Wirbeltiere", hu: "Gerinces Állatok", ro: "Vertebrate", en: "Vertebrates" },
    icon: "🐟",
    color: "#4CAF50",
    subtopics: [
      { id: "fish", name: { de: "Fische", hu: "Halak", ro: "Pești", en: "Fish" }, questions: [], hasGenerator: true },
      { id: "amphibian", name: { de: "Amphibien", hu: "Kétéltűek", ro: "Amfibieni", en: "Amphibians" }, questions: [], hasGenerator: true },
      { id: "reptile", name: { de: "Reptilien", hu: "Hüllők", ro: "Reptile", en: "Reptiles" }, questions: [], hasGenerator: true },
      { id: "bird", name: { de: "Vögel", hu: "Madarak", ro: "Păsări", en: "Birds" }, questions: [], hasGenerator: true },
      { id: "mammal", name: { de: "Säugetiere", hu: "Emlősök", ro: "Mamifere", en: "Mammals" }, questions: [], hasGenerator: true },
      { id: "vertebrate_comparison", name: { de: "Vergleich", hu: "Összehasonlítás", ro: "Comparație", en: "Comparison" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "pflanzen",
    name: { de: "Pflanzen", hu: "Növények", ro: "Plante", en: "Plants" },
    icon: "🌱",
    color: "#2196F3",
    subtopics: [
      { id: "plant_parts", name: { de: "Pflanzenorgane", hu: "Növényi szervek", ro: "Organele plantelor", en: "Plant organs" }, questions: [], hasGenerator: true },
      { id: "photosynthesis", name: { de: "Photosynthese Grundlagen", hu: "Fotoszintézis alapok", ro: "Baze fotosinteză", en: "Photosynthesis basics" }, questions: [], hasGenerator: true },
      { id: "flower_structure", name: { de: "Blütenstruktur", hu: "Virágszerkezet", ro: "Structura florii", en: "Flower structure" }, questions: [], hasGenerator: true },
      { id: "plant_reproduction", name: { de: "Fortpflanzung", hu: "Szaporodás", ro: "Reproducere", en: "Reproduction" }, questions: [], hasGenerator: true },
      { id: "plant_types", name: { de: "Pflanzentypen", hu: "Növénytípusok", ro: "Tipuri de plante", en: "Plant types" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "koerper",
    name: { de: "Mein Körper", hu: "Testünk", ro: "Corpul nostru", en: "Our body" },
    icon: "🦴",
    color: "#FF9800",
    subtopics: [
      { id: "skeleton", name: { de: "Skelett", hu: "Csontváz", ro: "Schelet", en: "Skeleton" }, questions: [], hasGenerator: true },
      { id: "muscles", name: { de: "Muskeln", hu: "Izmok", ro: "Mușchi", en: "Muscles" }, questions: [], hasGenerator: true },
      { id: "skin", name: { de: "Haut", hu: "Bőr", ro: "Piele", en: "Skin" }, questions: [], hasGenerator: true },
      { id: "body_systems", name: { de: "Körpersysteme", hu: "Szervrendszerek", ro: "Sisteme ale corpului", en: "Body systems" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "sinnesorgane",
    name: { de: "Sinnesorgane", hu: "Érzékszervek", ro: "Organe de simț", en: "Sense organs" },
    icon: "👁️",
    color: "#E91E63",
    subtopics: [
      { id: "eye", name: { de: "Auge", hu: "Szem", ro: "Ochi", en: "Eye" }, questions: [], hasGenerator: true },
      { id: "ear", name: { de: "Ohr", hu: "Fül", ro: "Ureche", en: "Ear" }, questions: [], hasGenerator: true },
      { id: "nose", name: { de: "Nase", hu: "Orr", ro: "Nas", en: "Nose" }, questions: [], hasGenerator: true },
      { id: "tongue", name: { de: "Zunge", hu: "Nyelv", ro: "Limbă", en: "Tongue" }, questions: [], hasGenerator: true },
      { id: "skin_sense", name: { de: "Tastsinn", hu: "Tapintás", ro: "Simțul tactil", en: "Sense of touch" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "ernaehrung",
    name: { de: "Ernährung & Verdauung", hu: "Táplálkozás és emésztés", ro: "Nutriție și digestie", en: "Nutrition & Digestion" },
    icon: "🍎",
    color: "#9C27B0",
    subtopics: [
      { id: "nutrients", name: { de: "Nährstoffe", hu: "Tápanyagok", ro: "Nutrienți", en: "Nutrients" }, questions: [], hasGenerator: true },
      { id: "digestive_system", name: { de: "Verdauungssystem", hu: "Emésztőrendszer", ro: "Sistem digestiv", en: "Digestive system" }, questions: [], hasGenerator: true },
      { id: "digestive_organs", name: { de: "Verdauungsorgane", hu: "Emésztőszervek", ro: "Organe digestive", en: "Digestive organs" }, questions: [], hasGenerator: true },
      { id: "healthy_diet", name: { de: "Gesunde Ernährung", hu: "Egészséges táplálkozás", ro: "Alimentație sănătoasă", en: "Healthy diet" }, questions: [], hasGenerator: true },
    ],
  },
];

export const K5_CURRICULUM = K5;

// ─── GENERATOR MAP & GET QUESTIONS ─────────────────────────────────────────

export type BiologieGeneratorMap = Record<
  string,
  Record<string, (seed?: number) => BiologieQuestion[]>
>;

export let K5_GENERATOR_MAP: BiologieGeneratorMap = {};

export function setK5GeneratorMap(map: BiologieGeneratorMap) {
  K5_GENERATOR_MAP = map;
}

function getK5QuestionsGerman(
  selectedSubtopicIds: string[],
  count = 10
): BiologieQuestion[] {
  const themes = K5_CURRICULUM;
  let pool: BiologieQuestion[] = [];
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
    return pickDiverse(pool, count);
  }

  // Generator-alapú
  for (const theme of themes) {
    for (const sub of theme.subtopics) {
      if (selectedSubtopicIds.includes(sub.id)) {
        // MCQ generátor
        let generatorFn: ((seed?: number) => BiologieQuestion[]) | undefined;
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
        let typingFn: ((seed?: number) => BiologieQuestion[]) | undefined;
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
  return pickDiverse(pool, count);
}

export function getK5Questions(selectedSubtopicIds: string[], count = 10, lang = "de"): BiologieQuestion[] {
  return localizeBiologieQuestions(getK5QuestionsGerman(selectedSubtopicIds, count), lang);
}

// ─── GRADING ──────────────────────────────────────────────────────────────

export function calculateBiologieMark(pct: number): TestGradeMark {
  if (pct >= 95) return { note: "1", label: "Sehr gut",    color: "#FFD700", emoji: "🌟" };
  if (pct >= 80) return { note: "2", label: "Gut",         color: "#00FF88", emoji: "😊" };
  if (pct >= 65) return { note: "3", label: "Befriedigend", color: "#00D4FF", emoji: "🙂" };
  if (pct >= 50) return { note: "4", label: "Ausreichend", color: "#FF9500", emoji: "😐" };
  if (pct >= 25) return { note: "5", label: "Mangelhaft",  color: "#FF6B00", emoji: "😅" };
  return             { note: "6", label: "Ungenügend",     color: "#FF4444", emoji: "😟" };
}
