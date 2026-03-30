import type { CurriculumQuestion as BaseCurriculumQuestion, CurriculumTheme } from "./curriculumTypes";
import type { TestGradeMark } from "./languageTestTypes";

export type CurriculumQuestion = BaseCurriculumQuestion;
export type KemiaQuestion = CurriculumQuestion;

export interface KemiaSubtopic {
  id: string;
  name: Record<string, string>;
  questions: KemiaQuestion[];
  hasGenerator: boolean;
}

export interface KemiaTheme {
  id: string;
  name: string;
  icon: string;
  color: string;
  subtopics: KemiaSubtopic[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type KemiaGeneratorFn = (...args: any[]) => KemiaQuestion[];
export type KemiaGeneratorMap = Record<string, Record<string, KemiaGeneratorFn>>;

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
    type: "mcq",
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
    type: "typing",
    topic,
    subtopic,
    question,
    answer,
  };
}

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
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function pick<T>(arr: T[], rng: () => number): T {
  return arr[Math.floor(rng() * arr.length)];
}

export function getGeneratedQuestions(
  themes: KemiaTheme[],
  generators: KemiaGeneratorMap,
  selectedSubtopicIds: string[],
  count = 10
): KemiaQuestion[] {
  let pool: KemiaQuestion[] = [];

  if (!generators || Object.keys(generators).length === 0) {
    for (const theme of themes) {
      for (const sub of theme.subtopics) {
        if (selectedSubtopicIds.includes(sub.id)) pool.push(...sub.questions);
      }
    }
    return pool.slice(0, count);
  }

  for (const theme of themes) {
    for (const sub of theme.subtopics) {
      if (!selectedSubtopicIds.includes(sub.id)) continue;

      let generatorFn: KemiaGeneratorFn | undefined;
      for (const themeGens of Object.values(generators)) {
        if (themeGens[sub.id]) {
          generatorFn = themeGens[sub.id];
          break;
        }
      }
      if (generatorFn) pool.push(...generatorFn(Math.floor(Math.random() * 1000000)));
      else pool.push(...sub.questions);

      const typingKey = `${sub.id}_typing`;
      let typingFn: KemiaGeneratorFn | undefined;
      for (const themeGens of Object.values(generators)) {
        if (themeGens[typingKey]) {
          typingFn = themeGens[typingKey];
          break;
        }
      }
      if (typingFn) pool.push(...typingFn(Math.floor(Math.random() * 1000000)));
    }
  }

  const seen = new Set<string>();
  pool = pool.filter((q) => {
    if (seen.has(q.question)) return false;
    seen.add(q.question);
    return true;
  });

  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, count);
}

export function calculateKemiaMark(pct: number): TestGradeMark {
  if (pct >= 95) return { note: "1", label: "Sehr gut", color: "#FFD700", emoji: "🧪" };
  if (pct >= 80) return { note: "2", label: "Gut", color: "#00FF88", emoji: "😊" };
  if (pct >= 65) return { note: "3", label: "Befriedigend", color: "#00D4FF", emoji: "🙂" };
  if (pct >= 50) return { note: "4", label: "Ausreichend", color: "#FF9500", emoji: "😐" };
  if (pct >= 25) return { note: "5", label: "Mangelhaft", color: "#FF6B00", emoji: "😅" };
  return { note: "6", label: "Ungenügend", color: "#FF4444", emoji: "😟" };
}

export function asCurriculumThemes(themes: KemiaTheme[]): CurriculumTheme[] {
  return themes.map((theme) => ({
    id: theme.id,
    name: theme.name,
    icon: theme.icon,
    color: theme.color,
    subtopics: theme.subtopics.map((subtopic) => ({
      id: subtopic.id,
      name: subtopic.name.de ?? subtopic.name.en ?? subtopic.name.hu ?? subtopic.name.ro ?? subtopic.id,
      questions: subtopic.questions,
      hasGenerator: subtopic.hasGenerator,
    })),
  }));
}
