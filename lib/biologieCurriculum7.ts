// ─── BIOLOGIE CURRICULUM KLASSE 7 ─────────────────────────────────────────
// English Test mintájára strukturálva
// 19 subtopic × 2 (MCQ + Typing) = 38 generátor

import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import type { TestGradeMark } from "./languageTestTypes";
import { pickDiverse } from "./testDiversity";
import { localizeBiologieQuestions } from "./biologieQuestionTranslations";

export type BiologieQuestion = CurriculumQuestion;
export type BiologieTheme = CurriculumTheme;

const K7: BiologieTheme[] = [
  {
    id: "zellen",
    name: { de: "Zellen & Mikroskop", hu: "Sejtek és mikroszkóp", ro: "Celule și microscop", en: "Cells & Microscope" },
    icon: "🔬",
    color: "#E67E22",
    subtopics: [
      { id: "cell_structure", name: { de: "Zellstruktur", hu: "Sejtszerkezet", ro: "Structura celulei", en: "Cell structure" }, questions: [], hasGenerator: true },
      { id: "cell_organelles", name: { de: "Organellen", hu: "Sejtszervecskék", ro: "Organite", en: "Organelles" }, questions: [], hasGenerator: true },
      { id: "microscope", name: { de: "Mikroskop", hu: "Mikroszkóp", ro: "Microscop", en: "Microscope" }, questions: [], hasGenerator: true },
      { id: "cell_division", name: { de: "Zellteilung", hu: "Sejtosztódás", ro: "Diviziune celulară", en: "Cell division" }, questions: [], hasGenerator: true },
      { id: "cell_cycle", name: { de: "Zellzyklus", hu: "Sejtciklus", ro: "Ciclul celular", en: "Cell cycle" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "stoffwechsel",
    name: { de: "Fotosynthese & Zellatmung", hu: "Fotoszintézis és sejtlégzés", ro: "Fotosinteză și respirație celulară", en: "Photosynthesis & Cellular Respiration" },
    icon: "⚡",
    color: "#27AE60",
    subtopics: [
      { id: "photosynthesis_detail", name: { de: "Fotosynthese Detail", hu: "Fotoszintézis részletesen", ro: "Detalii fotosinteză", en: "Photosynthesis in detail" }, questions: [], hasGenerator: true },
      { id: "cellular_respiration", name: { de: "Zellatmung", hu: "Sejtlégzés", ro: "Respirație celulară", en: "Cellular respiration" }, questions: [], hasGenerator: true },
      { id: "energy_transfer", name: { de: "Energieübertrag", hu: "Energiaátvitel", ro: "Transfer de energie", en: "Energy transfer" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "oekologie",
    name: { de: "Ökologie", hu: "Ökológia", ro: "Ecologie", en: "Ecology" },
    icon: "🌍",
    color: "#16A085",
    subtopics: [
      { id: "population", name: { de: "Population", hu: "Populáció", ro: "Populație", en: "Population" }, questions: [], hasGenerator: true },
      { id: "ecological_niche", name: { de: "Ökologische Nische", hu: "Ökológiai fülke", ro: "Nișă ecologică", en: "Ecological niche" }, questions: [], hasGenerator: true },
      { id: "competition", name: { de: "Konkurrenz", hu: "Versengés", ro: "Competiție", en: "Competition" }, questions: [], hasGenerator: true },
      { id: "symbiosis", name: { de: "Symbiose", hu: "Szimbiózis", ro: "Simbioză", en: "Symbiosis" }, questions: [], hasGenerator: true },
      { id: "biogeochemical_cycles", name: { de: "Biogeochemische Kreisläufe", hu: "Biogeokémiai ciklusok", ro: "Cicluri biogeochimice", en: "Biogeochemical cycles" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "immunsystem",
    name: { de: "Immunsystem", hu: "Immunrendszer", ro: "Sistemul imunitar", en: "Immune System" },
    icon: "🛡️",
    color: "#8E44AD",
    subtopics: [
      { id: "immune_cells", name: { de: "Immunzellen", hu: "Immunsejtek", ro: "Celule imunitare", en: "Immune cells" }, questions: [], hasGenerator: true },
      { id: "immune_response", name: { de: "Immunantwort", hu: "Immunválasz", ro: "Răspuns imunitar", en: "Immune response" }, questions: [], hasGenerator: true },
      { id: "vaccination", name: { de: "Impfung", hu: "Védőoltás", ro: "Vaccinare", en: "Vaccination" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "nervensystem",
    name: { de: "Nervensystem", hu: "Idegrendszer", ro: "Sistem nervos", en: "Nervous System" },
    icon: "🧠",
    color: "#C0392B",
    subtopics: [
      { id: "neuron", name: { de: "Neuron", hu: "Neuron", ro: "Neuron", en: "Neuron" }, questions: [], hasGenerator: true },
      { id: "synapse", name: { de: "Synapse", hu: "Szinapszis", ro: "Sinapsă", en: "Synapse" }, questions: [], hasGenerator: true },
      { id: "reflex", name: { de: "Reflex", hu: "Reflex", ro: "Reflex", en: "Reflex" }, questions: [], hasGenerator: true },
      { id: "brain", name: { de: "Gehirn", hu: "Agy", ro: "Creier", en: "Brain" }, questions: [], hasGenerator: true },
      { id: "behavior_learning", name: { de: "Verhalten & Lernen", hu: "Viselkedés és tanulás", ro: "Comportament și învățare", en: "Behavior & Learning" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "evolution",
    name: { de: "Evolution Grundlagen", hu: "Evolúció alapok", ro: "Baze evoluție", en: "Evolution Basics" },
    icon: "🧬",
    color: "#D35400",
    subtopics: [
      { id: "adaptation", name: { de: "Anpassung", hu: "Alkalmazkodás", ro: "Adaptare", en: "Adaptation" }, questions: [], hasGenerator: true },
      { id: "natural_selection", name: { de: "Natürliche Auswahl", hu: "Természetes kiválasztódás", ro: "Selecție naturală", en: "Natural selection" }, questions: [], hasGenerator: true },
      { id: "fossils", name: { de: "Fossilien", hu: "Fosszíliák", ro: "Fosile", en: "Fossils" }, questions: [], hasGenerator: true },
    ],
  },
];

export const K7_CURRICULUM = K7;

// ─── GENERATOR MAP & GET QUESTIONS ─────────────────────────────────────────

export type BiologieGeneratorMap = Record<
  string,
  (seed?: number) => BiologieQuestion[]
>;

export let K7_GENERATOR_MAP: BiologieGeneratorMap = {};

export function setK7GeneratorMap(map: BiologieGeneratorMap) {
  K7_GENERATOR_MAP = map;
}

function getK7QuestionsGerman(
  selectedSubtopicIds: string[],
  count = 10
): BiologieQuestion[] {
  const themes = K7_CURRICULUM;
  const pool: BiologieQuestion[] = [];
  const generators = K7_GENERATOR_MAP;

  if (!generators || Object.keys(generators).length === 0) {
    for (const theme of themes) {
      for (const sub of theme.subtopics) {
        if (selectedSubtopicIds.includes(sub.id)) {
          pool.push(...sub.questions);
        }
      }
    }
    return pickDiverse(pool, count);
  }

  for (const theme of themes) {
    for (const sub of theme.subtopics) {
      if (selectedSubtopicIds.includes(sub.id)) {
        let generatorFn = generators[sub.id];
        if (generatorFn) {
          pool.push(...generatorFn(Math.floor(Math.random() * 1000000)));
        } else {
          pool.push(...sub.questions);
        }

        const typingKey = sub.id + "_typing";
        let typingFn = generators[typingKey];
        if (typingFn) {
          pool.push(...typingFn(Math.floor(Math.random() * 1000000)));
        }
      }
    }
  }

  // Deduplicate by question text
  const seenQ = new Set<string>();
  const dedupedPool = pool.filter(q => {
    if (seenQ.has(q.question)) return false;
    seenQ.add(q.question);
    return true;
  });

  for (let i = dedupedPool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [dedupedPool[i], dedupedPool[j]] = [dedupedPool[j], dedupedPool[i]];
  }
  return pickDiverse(dedupedPool, count);
}

export function getK7Questions(selectedSubtopicIds: string[], count = 10, lang = "de"): BiologieQuestion[] {
  return localizeBiologieQuestions(getK7QuestionsGerman(selectedSubtopicIds, count), lang);
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
