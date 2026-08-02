// lib/astroGeschichte.ts
// AstroGeschichte — Common types and logic for History islands system

import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";
import type { MathQuestion } from "./mathCurriculum";
import type { CurriculumQuestion, CurriculumMCQ } from "./curriculumTypes";
import { getGeschichteQuestions } from "./geschichteCurriculum";
import { getCountrySubtopics } from "./geschichteCountryContent";

export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair, MathQuestion };

// ─── Bridge: CurriculumQuestion → MathQuestion ────────────────────────────────
export function geschichteToMathQuestion(q: CurriculumQuestion): MathQuestion {
  const mcq = q as CurriculumMCQ;
  return {
    question: mcq.question,
    correctAnswer: mcq.options[mcq.correct],
    options: [...mcq.options],
    topic: mcq.subtopic || mcq.topic,
    isWordProblem: false,
    hasStringOptions: true,
  };
}

// ─── Progress type ─────────────────────────────────────────────────────────────
export interface GeschichteProgress {
  completedMissions: string[];   // "i1_m1", "i1_m2", …
  completedIslands: string[];    // "i1", "i2", …
  completedTests: string[];      // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3
}

// ─── Shuffle helper ────────────────────────────────────────────────────────────
export interface GeschichteVariantProfile {
  id: string;
  lang: Lang;
  contentKind: "generic" | "country";
  countryCode?: "hu" | "ro";
  label: Record<Lang, string>;
}

export interface GeschichteVariantContent {
  variant: GeschichteVariantProfile;
  islands: IslandDef[];
  checkpointTopics: Record<string, string[]>;
  usesCountryContent: boolean;
}

const GESCHICHTE_VARIANT_LABELS_NORMALIZED: Record<string, Record<Lang, string>> = {
  "generic-de": { de: "Allgemeine Geschichte", en: "Generic History", hu: "Általános történelem", ro: "Istorie generală" },
  "generic-en": { de: "Allgemeine Geschichte", en: "Generic History", hu: "Általános történelem", ro: "Istorie generală" },
  "country-hu": { de: "Ungarische Geschichte", en: "Hungarian History", hu: "Magyar történelem", ro: "Istoria Ungariei" },
  "country-ro": { de: "Rumänische Geschichte", en: "Romanian History", hu: "Román történelem", ro: "Istoria României" },
};

const COUNTRY_QUIZ_LABEL_NORMALIZED: Record<Lang, string> = {
  de: "Themen-Quiz",
  en: "Topic Quiz",
  hu: "Témakvíz",
  ro: "Quiz tematic",
};

export function normalizeAstroLang(lang: string | null | undefined): Lang {
  return lang === "de" || lang === "en" || lang === "hu" || lang === "ro" ? lang : "de";
}

export function getGeschichteVariantProfile(lang: string | null | undefined): GeschichteVariantProfile {
  const normalized = normalizeAstroLang(lang);
  if (normalized === "hu") {
    return { id: "country-hu", lang: normalized, contentKind: "country", countryCode: "hu", label: GESCHICHTE_VARIANT_LABELS_NORMALIZED["country-hu"] };
  }
  if (normalized === "ro") {
    return { id: "country-ro", lang: normalized, contentKind: "country", countryCode: "ro", label: GESCHICHTE_VARIANT_LABELS_NORMALIZED["country-ro"] };
  }
  const genericId = normalized === "en" ? "generic-en" : "generic-de";
  return { id: genericId, lang: normalized, contentKind: "generic", label: GESCHICHTE_VARIANT_LABELS_NORMALIZED[genericId] };
}

export function buildGeschichteSaveKey(baseKey: string, variantId?: string): string {
  return variantId ? `${baseKey}_${variantId}` : baseKey;
}

export function buildGeschichteExplorerId(baseId: string, variantId?: string): string {
  return variantId ? `${baseId}_${variantId}` : baseId;
}

export function shuffleArr<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Question fetcher by grade ────────────────────────────────────────────────
function getQuestionsForGrade(
  grade: number,
  subtopicIds: string[],
  variant: GeschichteVariantProfile,
  count: number,
): CurriculumQuestion[] {
  return getGeschichteQuestions(grade, subtopicIds, count, variant.countryCode ?? variant.lang);
}

// ─── Common question generator ────────────────────────────────────────────────
export function generateGeschichteIslandQuestions(
  island: IslandDef,
  grade: number,
  count = 10,
  variant: GeschichteVariantProfile = getGeschichteVariantProfile("de"),
): MathQuestion[] {
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffleArr([...island.topicKeys]);
  if (keys.length === 0) return [];

  for (let attempt = 0; attempt < count * 20 && pool.length < count; attempt++) {
    const subtopicId = keys[attempt % keys.length];
    const questions = getQuestionsForGrade(grade, [subtopicId], variant, 35);
    const mcqs = questions.filter((q) => q.type === "mcq") as CurriculumMCQ[];
    if (mcqs.length === 0) continue;

    const q = mcqs[Math.floor(Math.random() * mcqs.length)];
    if (!seen.has(q.question)) {
      seen.add(q.question);
      pool.push(geschichteToMathQuestion(q));
    }
  }
  return pool;
}

// ─── Checkpoint question generator ───────────────────────────────────────────
export function generateGeschichteCheckpointQuestions(
  testId: string,
  checkpointTopics: Record<string, string[]>,
  grade: number,
  count = 10,
  variant: GeschichteVariantProfile = getGeschichteVariantProfile("de"),
): MathQuestion[] {
  const keys = shuffleArr([...(checkpointTopics[testId] ?? [])]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  if (keys.length === 0) return [];

  for (let attempt = 0; attempt < count * 20 && pool.length < count; attempt++) {
    const subtopicId = keys[attempt % keys.length];
    if (!subtopicId) continue;

    const questions = getQuestionsForGrade(grade, [subtopicId], variant, 35);
    const mcqs = questions.filter((q) => q.type === "mcq") as CurriculumMCQ[];
    if (mcqs.length === 0) continue;

    const q = mcqs[Math.floor(Math.random() * mcqs.length)];
    if (!seen.has(q.question)) {
      seen.add(q.question);
      pool.push(geschichteToMathQuestion(q));
    }
  }
  return pool;
}

// ─── Progress helpers ─────────────────────────────────────────────────────────
export function loadGeschichteProgress(saveKey: string, islands: IslandDef[]): GeschichteProgress {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem(saveKey) : null;
    if (raw) return JSON.parse(raw) as GeschichteProgress;
  } catch {}
  void islands;
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveGeschichteProgress(saveKey: string, p: GeschichteProgress): void {
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(saveKey, JSON.stringify(p));
    } catch {}
  }
}

export function isMissionDone(progress: GeschichteProgress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDone(progress: GeschichteProgress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlocked(progress: GeschichteProgress, islands: IslandDef[], islandId: string): boolean {
  const idx = islands.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(islands[idx - 1].id);
}

export function isCheckpointUnlocked(
  progress: GeschichteProgress,
  checkpointMap: Record<string, string[]>,
  testId: string,
): boolean {
  return (checkpointMap[testId] ?? []).every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDone(progress: GeschichteProgress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMission(
  progress: GeschichteProgress,
  islands: IslandDef[],
  islandId: string,
  missionId: string,
  stars: number = 1,
): GeschichteProgress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: GeschichteProgress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = islands.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStars(progress: GeschichteProgress, islands: IslandDef[], islandId: string): number {
  const island = islands.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTest(progress: GeschichteProgress, testId: string): GeschichteProgress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}

function deriveCheckpointTopics(
  islands: IslandDef[],
  checkpointMap: Record<string, string[]>,
  fallbackTopics: Record<string, string[]>,
): Record<string, string[]> {
  return Object.fromEntries(
    Object.entries(checkpointMap).map(([testId, islandIds]) => {
      const topicKeys = islandIds.flatMap((islandId) => islands.find((island) => island.id === islandId)?.topicKeys ?? []);
      return [testId, topicKeys.length > 0 ? topicKeys : (fallbackTopics[testId] ?? [])];
    }),
  );
}

function chunkCountrySubtopics<T>(items: T[], chunkCount: number): T[][] {
  const groups = Array.from({ length: chunkCount }, () => [] as T[]);
  if (items.length === 0) return groups;
  items.forEach((item, index) => {
    const bucket = Math.min(chunkCount - 1, Math.floor((index * chunkCount) / items.length));
    groups[bucket].push(item);
  });
  return groups;
}

function buildCountryIslandName(
  names: Array<Record<Lang, string>>,
  fallback: Record<string, string>,
): Record<Lang, string> {
  if (names.length === 0) {
    return {
      de: fallback.de ?? fallback.en ?? "Geschichte",
      en: fallback.en ?? fallback.de ?? "History",
      hu: fallback.hu ?? fallback.de ?? "Tortenelem",
      ro: fallback.ro ?? fallback.de ?? "Istorie",
    };
  }
  const first = names[0];
  if (names.length === 1) return first;
  return {
    de: `${first.de} +${names.length - 1}`,
    en: `${first.en} +${names.length - 1}`,
    hu: `${first.hu} +${names.length - 1}`,
    ro: `${first.ro} +${names.length - 1}`,
  };
}

export function createGeschichteVariantContent(
  grade: number,
  lang: string | null | undefined,
  baseIslands: IslandDef[],
  checkpointMap: Record<string, string[]>,
  fallbackTopics: Record<string, string[]>,
): GeschichteVariantContent {
  const variant = getGeschichteVariantProfile(lang);
  if (variant.contentKind !== "country" || !variant.countryCode) {
    return {
      variant,
      islands: baseIslands,
      checkpointTopics: fallbackTopics,
      usesCountryContent: false,
    };
  }

  const countrySubtopics = getCountrySubtopics(variant.countryCode, grade);
  if (countrySubtopics.length === 0) {
    return {
      variant,
      islands: baseIslands,
      checkpointTopics: fallbackTopics,
      usesCountryContent: false,
    };
  }

  const groupedSubtopics = chunkCountrySubtopics(countrySubtopics, baseIslands.length);
  const islands = baseIslands.map((island, index) => {
    const group = groupedSubtopics[index];
    if (!group || group.length === 0) return island;
    return {
      ...island,
      name: buildCountryIslandName(group.map((entry) => entry.names), island.name as Record<string, string>),
      topicKeys: group.map((entry) => entry.id),
      missions: island.missions.map((mission, missionIndex) =>
        missionIndex === 0
          ? {
              ...mission,
              gameType: "speed-round",
              label: {
                de: COUNTRY_QUIZ_LABEL_NORMALIZED.de,
                en: COUNTRY_QUIZ_LABEL_NORMALIZED.en,
                hu: COUNTRY_QUIZ_LABEL_NORMALIZED.hu,
                ro: COUNTRY_QUIZ_LABEL_NORMALIZED.ro,
              },
            }
          : mission,
      ),
    };
  });

  return {
    variant,
    islands,
    checkpointTopics: deriveCheckpointTopics(islands, checkpointMap, fallbackTopics),
    usesCountryContent: true,
  };
}
