// lib/astroMagyar4.ts
// AstroMagyar — O4 (4. osztály) island system + progress + O4-specific helpers
// 4. osztály: Igeragozás, névmások, határozók, összetett mondatok, szóalkotás, helyesírás, fogalmazás, nyelvtan

import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, MatchPair } from "./astromath";
export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, MatchPair };
export type { MathQuestion } from "./mathCurriculum";
import type { MathQuestion } from "./mathCurriculum";
import { generateMagyarIslandQuestions, generateMagyarCheckpointQuestions } from "./astroMagyar";

// ─── O4 Progress ────────────────────────────────────────────────────────────
export interface O4Progress {
  completedMissions: string[];
  completedIslands: string[];
  completedTests: string[];
  missionStars: Record<string, number>;
}

// ─── O4 Constants ───────────────────────────────────────────────────────────
export const O4_SAVE_KEY = "astromagyar_o4_v1";

export const O4_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const O4_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "ige/alanyi", "ige/targyas", "ige/igemódok", "ige/igeidők_összef",
    "nevmas/szemelyes", "nevmas/mutato", "nevmas/kerdo", "nevmas/visszaható",
  ],
  test2: [
    "hatarozo/hely", "hatarozo/ido", "hatarozo/mod", "hatarozo/cel", "hatarozo/ok",
    "mondat/mellerendelo", "mondat/alarendelo", "helyesiras/vesszőhasználat",
  ],
  test3: [
    "szoalkot/kepzes", "szoalkot/ragozas", "szoalkot/jelezés", "szoalkot/igekötő_haladó",
    "helyesiras/igekoveto", "helyesiras/kuloniro_haladó", "fogalmazas/napló",
    "nyelvtan/szószerkezet",
  ],
};

// ─── O4 Island Definitions ──────────────────────────────────────────────────
export const O4_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Verb Conjugation Island", hu: "Igeragozás Szigete", de: "Verbkonjugations-Insel", ro: "Insula conjugării verbelor" },
    icon: "📖", color: "#FF6B9D", sortRange: [1, 10],
    topicKeys: ["ige/alanyi", "ige/targyas", "ige/igemódok", "ige/igeidők_összef"],
    missions: [
      { id: "m1", category: "explore",   gameType: "o4-verb-conjugation-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { hu: "Rendezés", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { hu: "Rendezés",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 160, svgY: 560,
  },
  {
    id: "i2",
    name: { en: "Pronouns Island", hu: "Névmások Szigete", de: "Pronomens-Insel", ro: "Insula pronumelor" },
    icon: "🔗", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: ["nevmas/szemelyes", "nevmas/mutato", "nevmas/kerdo", "nevmas/visszaható", "nevmas/határozatlan"],
    missions: [
      { id: "m1", category: "explore",   gameType: "o4-pronouns-explorer",    icon: "🖼️", label: { hu: "Szókincs",  en: "Vocabulary", de: "Wortschatz", ro: "Vocabular"  } },
      { id: "m2", category: "build",     gameType: "sentence-builder", icon: "📝", label: { hu: "Mondatépítő", en: "Build",  de: "Satzbau",     ro: "Construcție" } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🌪️", label: { hu: "Rendezés",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 80, svgY: 470,
  },
  {
    id: "i3",
    name: { en: "Adverbials Island", hu: "Határozók Szigete", de: "Adverbiale-Insel", ro: "Insula adverbialelor" },
    icon: "📝", color: "#00D4FF", sortRange: [1, 10],
    topicKeys: ["hatarozo/hely", "hatarozo/ido", "hatarozo/mod", "hatarozo/cel", "hatarozo/ok"],
    missions: [
      { id: "m1", category: "explore",   gameType: "o4-adverbials-explorer",  icon: "🧠", label: { hu: "Memória",   en: "Memory",     de: "Gedächtnis",  ro: "Memorie"    } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "🚀", label: { hu: "Rendezés", en: "Sort",       de: "Sortierung", ro: "Sortare"   } },
      { id: "m3", category: "challenge", gameType: "star-match", icon: "⭐", label: { hu: "Rendezés",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 230, svgY: 380,
  },
  {
    id: "i4",
    name: { en: "Complex Sentences Island", hu: "Összetett mondatok", de: "Komplexe Sätze", ro: "Propozițiile compuse" },
    icon: "💬", color: "#FFD700", sortRange: [1, 10],
    topicKeys: ["mondat/mellerendelo", "mondat/alarendelo", "helyesiras/vesszőhasználat"],
    missions: [
      { id: "m1", category: "explore",   gameType: "o4-complex-sentences-explorer", icon: "📖", label: { hu: "Olvasás",   en: "Reading",    de: "Lesen",       ro: "Lectură"    } },
      { id: "m2", category: "build",     gameType: "black-hole", icon: "🕳️", label: { hu: "Rendezés", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "sentence-builder", icon: "📝", label: { hu: "Rendezés",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 90, svgY: 290,
  },
  {
    id: "i5",
    name: { en: "Word Formation Island", hu: "Szóalkotás", de: "Wortbildung", ro: "Formarea cuvintelor" },
    icon: "🎭", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["szoalkot/kepzes", "szoalkot/ragozas", "szoalkot/jelezés", "szoalkot/igekötő_haladó"],
    missions: [
      { id: "m1", category: "explore",   gameType: "o4-word-formation-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "gravity-sort", icon: "🌪️", label: { hu: "Rendezés", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "🚀", label: { hu: "Rendezés",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 220, svgY: 200,
  },
  {
    id: "i6",
    name: { en: "Spelling Mastery Island", hu: "Helyesírás mester", de: "Rechtschreib-Meister", ro: "Maestrul ortografiei" },
    icon: "✏️", color: "#FF6348", sortRange: [1, 10],
    topicKeys: ["helyesiras/igekoveto", "helyesiras/kuloniro_haladó"],
    missions: [
      { id: "m1", category: "explore",   gameType: "o4-spelling-mastery-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "speed-round", icon: "⚡", label: { hu: "Rendezés", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "category-rush", icon: "🏃", label: { hu: "Rendezés",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 100, svgY: 110,
  },
  {
    id: "i7",
    name: { en: "Composition Island", hu: "Fogalmazás haladó", de: "Komposition Fortgeschritten", ro: "Componere avansată" },
    icon: "📜", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["fogalmazas/erveles", "fogalmazas/level", "fogalmazas/napló"],
    missions: [
      { id: "m1", category: "explore",   gameType: "o4-composition-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "category-rush", icon: "🏃", label: { hu: "Rendezés", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { hu: "Rendezés",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 210, svgY: 20,
  },
  {
    id: "i8",
    name: { en: "Grammar Review Island", hu: "Nyelvtan összefoglaló", de: "Grammatik-Zusammenfassung", ro: "Recapitulare gramaticală" },
    icon: "🔍", color: "#FF8C42", sortRange: [1, 10],
    topicKeys: ["nyelvtan/szoelem", "nyelvtan/mondatelemzes", "nyelvtan/szószerkezet"],
    missions: [
      { id: "m1", category: "explore",   gameType: "o4-grammar-review-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "star-match", icon: "⭐", label: { hu: "Rendezés", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { hu: "Rendezés",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 100, svgY: -60,
  },
  {
    id: "i9",
    name: { en: "Grand Finals Island", hu: "Nagy Teszt", de: "Großes Finale", ro: "Marele Sfinal" },
    icon: "🌟", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["ige/alanyi", "ige/targyas", "ige/igemódok", "nevmas/szemelyes", "nevmas/visszaható", "hatarozo/hely", "hatarozo/cel", "mondat/mellerendelo", "helyesiras/vesszőhasználat", "nyelvtan/szószerkezet"],
    missions: [
      { id: "m1", category: "explore",   gameType: "o4-review-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "sentence-builder", icon: "📝", label: { hu: "Rendezés", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🌪️", label: { hu: "Rendezés",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 200, svgY: -140,
  },
];

// ─── Progress helpers ───────────────────────────────────────────────────────
export function loadO4Progress(): O4Progress {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem(O4_SAVE_KEY) : null;
    if (raw) return JSON.parse(raw) as O4Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveO4Progress(p: O4Progress): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(O4_SAVE_KEY, JSON.stringify(p));
  }
}

export function isMissionDoneO4(progress: O4Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDoneO4(progress: O4Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedO4(progress: O4Progress, islandId: string): boolean {
  const idx = O4_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(O4_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedO4(progress: O4Progress, testId: string): boolean {
  return (O4_CHECKPOINT_MAP[testId] ?? []).every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDoneO4(progress: O4Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionO4(progress: O4Progress, islandId: string, missionId: string, stars: number = 1): O4Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: O4Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = O4_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsO4(progress: O4Progress, islandId: string): number {
  const island = O4_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestO4(progress: O4Progress, testId: string): O4Progress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}

export function generateIslandQuestionsO4(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] {
  return generateMagyarIslandQuestions(island, 4, count);
}

export function generateCheckpointQuestionsO4(testId: string, _lang: Lang, count = 10): MathQuestion[] {
  return generateMagyarCheckpointQuestions(testId, O4_CHECKPOINT_TOPICS, 4, count);
}
