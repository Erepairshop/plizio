import type { CurriculumQuestion as BaseCurriculumQuestion, CurriculumTheme } from "./curriculumTypes";
import type { TestGradeMark } from "./languageTestTypes";

export type CurriculumQuestion = BaseCurriculumQuestion;
export type GeographieQuestion = CurriculumQuestion;

export interface GeographieSubtopic {
  id: string;
  name: Record<string, string>;
  questions: GeographieQuestion[];
  hasGenerator: boolean;
}

export interface GeographieTheme {
  id: string;
  name: string | Record<string, string>;
  icon: string;
  color: string;
  subtopics: GeographieSubtopic[];
}

// Generátor függvény típus: nyelv + seed
export type GeographieGeneratorFn = (lang: string, seed: number) => GeographieQuestion[];
export type GeographieGeneratorMap = Record<string, Record<string, GeographieGeneratorFn>>;

export function createMCQ(
  topic: string,
  subtopic: string,
  question: string,
  correct: string,
  wrong: string[],
  rng: () => number
): CurriculumQuestion {
  const uniqueWrong = wrong.filter((w, i) => w !== correct && wrong.indexOf(w) === i);
  const options = shuffle([correct, ...uniqueWrong.slice(0, 3)], rng);
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
  themes: GeographieTheme[],
  generators: GeographieGeneratorMap,
  selectedSubtopicIds: string[],
  lang: string = "hu",
  count = 10
): GeographieQuestion[] {
  let pool: GeographieQuestion[] = [];

  for (const theme of themes) {
    for (const sub of theme.subtopics) {
      if (!selectedSubtopicIds.includes(sub.id) && !selectedSubtopicIds.includes(theme.id)) continue;

      const seed = Math.floor(Math.random() * 1000000);

      // Fő generátor (MCQ vagy kombinált)
      let generatorFn: GeographieGeneratorFn | undefined;
      for (const themeGens of Object.values(generators)) {
        if (themeGens[sub.id]) {
          generatorFn = themeGens[sub.id];
          break;
        }
      }
      if (generatorFn) pool.push(...generatorFn(lang, seed));
      else pool.push(...sub.questions);

      // Typing specifikus generátor
      const typingKey = `${sub.id}_typing`;
      let typingFn: GeographieGeneratorFn | undefined;
      for (const themeGens of Object.values(generators)) {
        if (themeGens[typingKey]) {
          typingFn = themeGens[typingKey];
          break;
        }
      }
      if (typingFn) pool.push(...typingFn(lang, seed + 1));
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

  return pickDiverse(pool, count);
}

// Egy kérdés "válasz-kulcsa" (mcq: a helyes opció, typing: az első elfogadott válasz),
// kisbetűs + ékezet-független, hogy a tartalmilag azonos válaszokat egynek lássuk.
function answerKey(q: CurriculumQuestion): string {
  let a = "";
  if (q.type === "mcq") {
    if (Array.isArray(q.options) && typeof q.correct === "number") {
      a = q.options[q.correct] ?? "";
    }
  } else if (q.answer != null) {
    a = Array.isArray(q.answer) ? (q.answer[0] ?? "") : String(q.answer);
  }
  return a
    .normalize("NFKD")
    .toLocaleLowerCase()
    .replace(/[̀-ͯ]/g, "")
    .replace(/[\p{P}\p{S}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Válasz-diverzitás round-robin elven: a kérdéseket válasz szerint vödrökbe rakjuk,
// majd körönként EGYET húzunk minden vödörből. Így minden válasz egyszer szerepel,
// mielőtt bármelyik másodszor jönne → a pool melletti elméleti minimum-ismétlés.
// A kis válasz-terű témáknál (pl. 4 gazdasági szektor) az ismétlés így is elkerülhetetlen,
// de egyenletesen oszlik el, nem halmozódik egy válaszra.
function pickDiverse(pool: CurriculumQuestion[], count: number): CurriculumQuestion[] {
  if (pool.length <= count) return pool.slice(0, count);
  const buckets = new Map<string, CurriculumQuestion[]>();
  const result: CurriculumQuestion[] = [];
  for (const q of pool) {
    const k = answerKey(q);
    if (!k) { result.push(q); continue; } // válasz nélküli kérdés sosem ütközik
    const b = buckets.get(k);
    if (b) b.push(q); else buckets.set(k, [q]);
  }
  // a vödrök sorrendjét keverjük, hogy ne ugyanaz a válasz nyisson mindig
  const order = [...buckets.values()];
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  let round = 0;
  let added = true;
  while (result.length < count && added) {
    added = false;
    for (const b of order) {
      if (b[round] !== undefined) {
        result.push(b[round]);
        added = true;
        if (result.length >= count) break;
      }
    }
    round++;
  }
  return result.slice(0, count);
}

export function calculateGeographieMark(pct: number): TestGradeMark {
  if (pct >= 95) return { note: "1", label: "Sehr gut", color: "#FFD700", emoji: "🌍" };
  if (pct >= 80) return { note: "2", label: "Gut", color: "#00FF88", emoji: "😊" };
  if (pct >= 65) return { note: "3", label: "Befriedigend", color: "#00D4FF", emoji: "🙂" };
  if (pct >= 50) return { note: "4", label: "Ausreichend", color: "#FF9500", emoji: "😐" };
  if (pct >= 25) return { note: "5", label: "Mangelhaft", color: "#FF6B00", emoji: "😅" };
  return { note: "6", label: "Ungenügend", color: "#FF4444", emoji: "😟" };
}

export function asCurriculumThemes(themes: GeographieTheme[], lang: string = "hu"): CurriculumTheme[] {
  return themes.map((theme) => ({
    id: theme.id,
    name: typeof theme.name === 'string' ? { de: theme.name, en: theme.name, hu: theme.name, ro: theme.name } : theme.name,
    icon: theme.icon,
    color: theme.color,
    subtopics: theme.subtopics.map((subtopic) => ({
      id: subtopic.id,
      name: typeof subtopic.name === 'string' ? { de: subtopic.name, en: subtopic.name, hu: subtopic.name, ro: subtopic.name } : subtopic.name,
      questions: subtopic.questions,
      hasGenerator: subtopic.hasGenerator,
    })),
  }));
}
