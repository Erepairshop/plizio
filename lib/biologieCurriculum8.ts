// ─── BIOLOGIE CURRICULUM KLASSE 8 ─────────────────────────────────────────
// English Test mintájára strukturálva
// 21 subtopic × 2 (MCQ + Typing) = 42 generátor

import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import type { TestGradeMark } from "./languageTestTypes";
import { pickDiverse } from "./testDiversity";
import { localizeBiologieQuestions } from "./biologieQuestionTranslations";

export type BiologieQuestion = CurriculumQuestion;
export type BiologieTheme = CurriculumTheme;

const K8: BiologieTheme[] = [
  {
    id: "genetik",
    name: { de: "Genetik", hu: "Genetika", ro: "Genetică", en: "Genetics" },
    icon: "🧬",
    color: "#9B59B6",
    subtopics: [
      { id: "dna_struktur", name: { de: "DNA Struktur", hu: "DNS szerkezete", ro: "Structura ADN", en: "DNA structure" }, questions: [], hasGenerator: true },
      { id: "vererbung", name: { de: "Vererbung", hu: "Öröklődés", ro: "Ereditate", en: "Inheritance" }, questions: [], hasGenerator: true },
      { id: "mutation", name: { de: "Mutation", hu: "Mutáció", ro: "Mutație", en: "Mutation" }, questions: [], hasGenerator: true },
      { id: "genetische_technik", name: { de: "Genetische Technik", hu: "Géntechnológia", ro: "Inginerie genetică", en: "Genetic engineering" }, questions: [], hasGenerator: true },
      { id: "genetic_counseling", name: { de: "Genetische Beratung", hu: "Genetikai tanácsadás", ro: "Consiliere genetică", en: "Genetic counseling" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "hormone",
    name: { de: "Hormone & Steuersysteme", hu: "Hormonok és szabályozó rendszerek", ro: "Hormoni și sisteme de reglare", en: "Hormones & Control Systems" },
    icon: "⚗️",
    color: "#E74C3C",
    subtopics: [
      { id: "endokrine_druesen", name: { de: "Endokrine Drüsen", hu: "Endokrin mirigyek", ro: "Glande endocrine", en: "Endocrine glands" }, questions: [], hasGenerator: true },
      { id: "hormonstoffwechsel", name: { de: "Hormonstoffwechsel", hu: "Hormonális anyagcsere", ro: "Metabolism hormonal", en: "Hormone metabolism" }, questions: [], hasGenerator: true },
      { id: "feedback_mechanismen", name: { de: "Feedback Mechanismen", hu: "Visszacsatolási mechanizmusok", ro: "Mecanisme de feedback", en: "Feedback mechanisms" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "reproduktion",
    name: { de: "Reproduktion & Entwicklung", hu: "Szaporodás és fejlődés", ro: "Reproducere și dezvoltare", en: "Reproduction & Development" },
    icon: "🍼",
    color: "#F39C12",
    subtopics: [
      { id: "gametogenese", name: { de: "Gametogenese", hu: "Ivarsejtképződés", ro: "Gametogeneză", en: "Gametogenesis" }, questions: [], hasGenerator: true },
      { id: "befruchtung", name: { de: "Befruchtung", hu: "Megtermékenyítés", ro: "Fecundare", en: "Fertilization" }, questions: [], hasGenerator: true },
      { id: "embryonalentwicklung", name: { de: "Embryonalentwicklung", hu: "Embriófejlődés", ro: "Dezvoltare embrionară", en: "Embryonic development" }, questions: [], hasGenerator: true },
      { id: "geschlechtsbestimmung", name: { de: "Geschlechtsbestimmung", hu: "Nemeghatározás", ro: "Determinarea sexului", en: "Sex determination" }, questions: [], hasGenerator: true },
      { id: "contraception", name: { de: "Verhütungsmethoden", hu: "Fogamzásgátló módszerek", ro: "Metode contraceptive", en: "Contraception methods" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "biotechnologie",
    name: { de: "Biotechnologie", hu: "Biotechnológia", ro: "Biotehnologie", en: "Biotechnology" },
    icon: "🔬",
    color: "#1ABC9C",
    subtopics: [
      { id: "enzyme", name: { de: "Enzyme", hu: "Enzimek", ro: "Enzime", en: "Enzymes" }, questions: [], hasGenerator: true },
      { id: "bioethik", name: { de: "Bioethik", hu: "Bioetika", ro: "Bioetică", en: "Bioethics" }, questions: [], hasGenerator: true },
      { id: "biotech_anwendungen", name: { de: "Anwendungen", hu: "Alkalmazások", ro: "Aplicații", en: "Applications" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "systemische",
    name: { de: "Systemische Biologie", hu: "Rendszerbiológia", ro: "Biologia sistemelor", en: "Systems Biology" },
    icon: "🌐",
    color: "#3498DB",
    subtopics: [
      { id: "integration", name: { de: "Systemintegration", hu: "Rendszerintegráció", ro: "Integrarea sistemelor", en: "System integration" }, questions: [], hasGenerator: true },
      { id: "homeostasis", name: { de: "Homöostase", hu: "Homeosztázis", ro: "Homeostazie", en: "Homeostasis" }, questions: [], hasGenerator: true },
      { id: "stoffwechseltypologie", name: { de: "Stoffwechseltypen", hu: "Anyagcsere típusok", ro: "Tipuri metabolice", en: "Metabolic types" }, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "evolution_advanced",
    name: { de: "Evolution Vertiefung", hu: "Evolúció elmélyítés", ro: "Evoluție aprofundată", en: "Advanced Evolution" },
    icon: "🧪",
    color: "#D35400",
    subtopics: [
      { id: "populationsgenetik", name: { de: "Populationsgenetik", hu: "Populációgenetika", ro: "Genetica populațiilor", en: "Population genetics" }, questions: [], hasGenerator: true },
      { id: "artbildung", name: { de: "Artbildung", hu: "Fajképződés", ro: "Speciație", en: "Speciation" }, questions: [], hasGenerator: true },
      { id: "phylogenie", name: { de: "Phylogenie", hu: "Törzsfejlődés", ro: "Filogenie", en: "Phylogeny" }, questions: [], hasGenerator: true },
      { id: "conservation_biology", name: { de: "Naturschutzbiologie", hu: "Természetvédelmi biológia", ro: "Biologia conservării", en: "Conservation biology" }, questions: [], hasGenerator: true },
      { id: "human_evolution", name: { de: "Menschliche Evolution", hu: "Emberi evolúció", ro: "Evoluția umană", en: "Human evolution" }, questions: [], hasGenerator: false },
    ],
  },
];

export const K8_CURRICULUM = K8;

// ─── GENERATOR MAP & GET QUESTIONS ─────────────────────────────────────────

export type BiologieGeneratorMap = Record<
  string,
  (seed?: number) => BiologieQuestion[]
>;

export let K8_GENERATOR_MAP: BiologieGeneratorMap = {};

export function setK8GeneratorMap(map: BiologieGeneratorMap) {
  K8_GENERATOR_MAP = map;
}

function getK8QuestionsGerman(
  selectedSubtopicIds: string[],
  count = 10
): BiologieQuestion[] {
  const themes = K8_CURRICULUM;
  const pool: BiologieQuestion[] = [];
  const generators = K8_GENERATOR_MAP;

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

export function getK8Questions(selectedSubtopicIds: string[], count = 10, lang = "de"): BiologieQuestion[] {
  return localizeBiologieQuestions(getK8QuestionsGerman(selectedSubtopicIds, count), lang);
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
