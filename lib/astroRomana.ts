// lib/astroRomana.ts
// AstroRomână — C1 island system + common types + bridge
// Clasa 1: Alfabetul, vocale, consoane, silabe, cuvinte, propoziții

import { ROMANIAN_CURRICULUM } from "./romanianCurriculum";
import type { CurriculumMCQ } from "./curriculumTypes";
import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";

export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };
export type { MathQuestion } from "./mathCurriculum";
import type { MathQuestion } from "./mathCurriculum";

// ─── Bridge: CurriculumMCQ → MathQuestion ────────────────────────────────────
export function romanaMCQToMathQuestion(q: CurriculumMCQ): MathQuestion {
  return {
    question: q.question,
    correctAnswer: q.options[q.correct],
    options: [...q.options],
    topic: q.subtopic || q.topic,
    isWordProblem: false,
    hasStringOptions: true,
  };
}

// ─── Progress type ─────────────────────────────────────────────────────────────
export interface RomanaProgress {
  completedMissions: string[];   // "i1_m1", "i1_m2", …
  completedIslands:  string[];   // "i1", "i2", …
  completedTests:    string[];   // "test1", "test2", "test3"
  missionStars: Record<string, number>; // "i1_m1" → 1|2|3
}

// ─── Shuffle helper ────────────────────────────────────────────────────────────
export function shuffleArr<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Common question generator ─────────────────────────────────────────────────
export function generateRomanaIslandQuestions(
  island: IslandDef,
  clasa: number,
  count = 10,
): MathQuestion[] {
  const themes = ROMANIAN_CURRICULUM[clasa] ?? [];
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();
  const keys = shuffleArr([...island.topicKeys]);

  for (let attempt = 0; attempt < count * 20 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    const [themeId, subtopicId] = key.split("/");
    const theme = themes.find((t) => t.id === themeId);
    const subtopic = theme?.subtopics.find((s) => s.id === subtopicId);
    if (!subtopic) continue;

    const mcqs = subtopic.questions.filter((q) => q.type === "mcq") as CurriculumMCQ[];
    if (mcqs.length === 0) continue;

    const q = mcqs[Math.floor(Math.random() * mcqs.length)];
    if (!seen.has(q.question)) {
      seen.add(q.question);
      pool.push(romanaMCQToMathQuestion(q));
    }
  }
  return pool;
}

// ─── Match pairs (unique answers for StarMatch) ────────────────────────────────
export function generateRomanaMatchPairs(questions: MathQuestion[]): MatchPair[] {
  const seen = new Set<string>();
  const unique: MathQuestion[] = [];
  for (const q of questions) {
    const key = String(q.correctAnswer);
    if (!seen.has(key)) { seen.add(key); unique.push(q); }
    if (unique.length === 5) break;
  }
  return unique.map((q) => ({ left: q.question, right: String(q.correctAnswer) }));
}

// ─── Checkpoint question generator ────────────────────────────────────────────
export function generateRomanaCheckpointQuestions(
  testId: string,
  checkpointTopics: Record<string, string[]>,
  clasa: number,
  count = 10,
): MathQuestion[] {
  const themes = ROMANIAN_CURRICULUM[clasa] ?? [];
  const keys = shuffleArr([...(checkpointTopics[testId] ?? [])]);
  const pool: MathQuestion[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 20 && pool.length < count; attempt++) {
    const key = keys[attempt % keys.length];
    if (!key) continue;
    const [themeId, subtopicId] = key.split("/");
    const theme = themes.find((t) => t.id === themeId);
    const subtopic = theme?.subtopics.find((s) => s.id === subtopicId);
    if (!subtopic) continue;

    const mcqs = subtopic.questions.filter((q) => q.type === "mcq") as CurriculumMCQ[];
    if (mcqs.length === 0) continue;

    const q = mcqs[Math.floor(Math.random() * mcqs.length)];
    if (!seen.has(q.question)) {
      seen.add(q.question);
      pool.push(romanaMCQToMathQuestion(q));
    }
  }
  return pool;
}

// ─── Progress helpers (generic, reused by all grades) ─────────────────────────
export function loadRomanaProgress(saveKey: string, islands: IslandDef[]): RomanaProgress {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem(saveKey) : null;
    if (raw) return JSON.parse(raw) as RomanaProgress;
  } catch {}
  void islands;
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveRomanaProgress(saveKey: string, p: RomanaProgress): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(saveKey, JSON.stringify(p));
  }
}

export function isMissionDone(progress: RomanaProgress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDone(progress: RomanaProgress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlocked(progress: RomanaProgress, islands: IslandDef[], islandId: string): boolean {
  const idx = islands.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(islands[idx - 1].id);
}

export function isCheckpointUnlocked(
  progress: RomanaProgress,
  checkpointMap: Record<string, string[]>,
  testId: string,
): boolean {
  return (checkpointMap[testId] ?? []).every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDone(progress: RomanaProgress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMission(
  progress: RomanaProgress,
  islands: IslandDef[],
  islandId: string,
  missionId: string,
  stars: number = 1,
): RomanaProgress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: RomanaProgress = {
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

export function islandTotalStars(progress: RomanaProgress, islands: IslandDef[], islandId: string): number {
  const island = islands.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTest(progress: RomanaProgress, testId: string): RomanaProgress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}

// ─── C1 Constants ──────────────────────────────────────────────────────────────
export const C1_SAVE_KEY = "astroromana_c1_v1";

export const C1_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const C1_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "alfabet_c1/vocale_c1", "alfabet_c1/consoane_c1",
    "silabe_c1/despartire_c1", "cuvantul_c1/sinonime_c1",
  ],
  test2: [
    "propozitia_c1/punctuatie_c1", "propozitia_c1/litera_mare_c1",
    "ortografie_c1/a_i_c1", "cuvantul_c1/antonime_c1",
  ],
  test3: [
    "alfabet_c1/vocale_c1", "silabe_c1/despartire_c1",
    "propozitia_c1/propozitie_tip_c1", "propozitia_c1/litera_mare_c1",
  ],
};

// ─── C1 Island Definitions ────────────────────────────────────────────────────
export const C1_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Alphabet Island", hu: "Ábécé-sziget", de: "Alphabet-Insel", ro: "Insula Alfabetului" },
    icon: "🔤", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["alfabet_c1/vocale_c1", "alfabet_c1/consoane_c1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Descoperă alfabetul", en: "Explore alphabet",  hu: "Ábécé felfedezés", de: "Alphabet entdecken" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",     en: "Star Match",         hu: "Csillag párosítás", de: "Sterne verbinden"  } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz alfabetul",      en: "Alphabet Quiz",      hu: "Ábécé kvíz",        de: "Alphabet Quiz"     } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Vowels & Consonants", hu: "Magánhangzók & Mássalhangzók", de: "Vokale & Konsonanten", ro: "Vocale și Consoane" },
    icon: "🗣️", color: "#00D4FF", sortRange: [1, 10],
    topicKeys: ["alfabet_c1/vocale_c1", "alfabet_c1/consoane_c1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Descoperă sunetele",  en: "Explore sounds",     hu: "Hangok felfedezése", de: "Laute entdecken"   } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",     en: "Star Match",         hu: "Csillag párosítás",  de: "Sterne verbinden"  } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",       en: "Black Hole",         hu: "Fekete lyuk",        de: "Schwarzes Loch"    } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Syllable Island", hu: "Szótagsziget", de: "Silbeninsel", ro: "Insula Silabelor" },
    icon: "✂️", color: "#00FF88", sortRange: [1, 10],
    topicKeys: ["silabe_c1/despartire_c1", "silabe_c1/numarare_c1", "silabe_c1/silaba_accent_c1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Descoperă silabele",  en: "Explore syllables",  hu: "Szótagok felfedezése", de: "Silben entdecken"  } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",     en: "Star Match",         hu: "Csillag párosítás",    de: "Sterne verbinden"  } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz silabe",         en: "Syllable Quiz",      hu: "Szótag kvíz",          de: "Silben Quiz"       } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Words Island", hu: "Szósziget", de: "Wörterinsel", ro: "Insula Cuvintelor" },
    icon: "📝", color: "#FFD700", sortRange: [1, 10],
    topicKeys: ["cuvantul_c1/sinonime_c1", "cuvantul_c1/antonime_c1", "cuvantul_c1/singular_plural_c1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Descoperă cuvintele", en: "Explore words",       hu: "Szavak felfedezése", de: "Wörter entdecken"  } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",     en: "Star Match",          hu: "Csillag párosítás",  de: "Sterne verbinden"  } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz cuvinte",        en: "Words Quiz",          hu: "Szó kvíz",           de: "Wörter Quiz"       } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Sentence Island", hu: "Mondatsziget", de: "Satzinsel", ro: "Insula Propoziției" },
    icon: "💬", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["propozitia_c1/punctuatie_c1", "propozitia_c1/propozitie_tip_c1", "propozitia_c1/ordine_cuvinte_c1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Descoperă propoziția", en: "Explore sentences",   hu: "Mondat felfedezése", de: "Sätze entdecken"   } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",      en: "Star Match",          hu: "Csillag párosítás",  de: "Sterne verbinden"  } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz propoziție",      en: "Sentence Quiz",       hu: "Mondat kvíz",        de: "Satz Quiz"         } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Punctuation Island", hu: "Írásjelszıget", de: "Zeicheninsel", ro: "Insula Punctuației" },
    icon: "❗", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["propozitia_c1/punctuatie_c1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Descoperă punctuația", en: "Explore punctuation", hu: "Írásjelek felfedezése", de: "Satzzeichen entdecken" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",      en: "Star Match",          hu: "Csillag párosítás",     de: "Sterne verbinden"      } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră",        en: "Black Hole",          hu: "Fekete lyuk",           de: "Schwarzes Loch"        } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Capital Letters Island", hu: "Nagybetűszıget", de: "Großbuchstaben-Insel", ro: "Insula Majusculelor" },
    icon: "🔠", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["propozitia_c1/litera_mare_c1", "ortografie_c1/scrierea_corecta_c1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Descoperă majuscula",  en: "Explore capitals",   hu: "Nagybetű felfedezés", de: "Großbuchstaben entdecken" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",      en: "Star Match",         hu: "Csillag párosítás",   de: "Sterne verbinden"         } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz majuscule",       en: "Capitals Quiz",      hu: "Nagybetű kvíz",       de: "Großbuchstaben Quiz"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Opposites Island", hu: "Ellentétsziget", de: "Gegensatz-Insel", ro: "Insula Antonimelor" },
    icon: "↔️", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["cuvantul_c1/antonime_c1", "cuvantul_c1/sinonime_c1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Descoperă antonimele", en: "Explore opposites",  hu: "Ellentétek felfedezése", de: "Gegensätze entdecken" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",      en: "Star Match",         hu: "Csillag párosítás",      de: "Sterne verbinden"    } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",     icon: "🚀", label: { ro: "Quiz antonime",        en: "Opposites Quiz",     hu: "Ellentét kvíz",          de: "Gegensätze Quiz"     } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Review", hu: "Nagy Áttekintés", de: "Große Prüfung", ro: "Recapitulare C1" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: ["alfabet_c1/vocale_c1", "silabe_c1/despartire_c1", "propozitia_c1/punctuatie_c1", "cuvantul_c1/antonime_c1"],
    missions: [
      { id: "m1", category: "explore",   gameType: "romana-explore", icon: "🪐", label: { ro: "Recapitulare mare",   en: "Big Review",         hu: "Nagy áttekintés",    de: "Große Überprüfung" } },
      { id: "m2", category: "build",     gameType: "star-match",     icon: "⭐", label: { ro: "Potrivire stele",     en: "Star Match",         hu: "Csillag párosítás", de: "Sterne verbinden" } },
      { id: "m3", category: "challenge", gameType: "black-hole",     icon: "🕳️", label: { ro: "Gaură neagră finală", en: "Black Hole Final",   hu: "Záró fekete lyuk",   de: "Schwarzes Loch"    } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── C1 Progress helpers ───────────────────────────────────────────────────────
export function loadC1Progress(): RomanaProgress { return loadRomanaProgress(C1_SAVE_KEY, C1_ISLANDS); }
export function saveC1Progress(p: RomanaProgress): void { saveRomanaProgress(C1_SAVE_KEY, p); }
export function isMissionDoneC1(progress: RomanaProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneC1(progress: RomanaProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedC1(progress: RomanaProgress, islandId: string): boolean { return isIslandUnlocked(progress, C1_ISLANDS, islandId); }
export function isCheckpointUnlockedC1(progress: RomanaProgress, testId: string): boolean { return isCheckpointUnlocked(progress, C1_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneC1(progress: RomanaProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionC1(progress: RomanaProgress, islandId: string, missionId: string, stars = 1): RomanaProgress { return completeMission(progress, C1_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsC1(progress: RomanaProgress, islandId: string): number { return islandTotalStars(progress, C1_ISLANDS, islandId); }
export function completeTestC1(progress: RomanaProgress, testId: string): RomanaProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsC1(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaIslandQuestions(island, 1, count); }
export function generateCheckpointQuestionsC1(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateRomanaCheckpointQuestions(testId, C1_CHECKPOINT_TOPICS, 1, count); }
