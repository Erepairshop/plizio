// lib/astroMagyar3.ts
// AstroMagyar — O3 (3. osztály) island system
// Themes: Verb tenses, noun declension, compound words, text comprehension, idioms, advanced spelling, composition, sentence analysis

import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, MatchPair } from "./astromath";
export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, MatchPair };
export type { MathQuestion } from "./mathCurriculum";
import type { MathQuestion } from "./mathCurriculum";

import type { MagyarProgress } from "./astroMagyar";
export type { MagyarProgress };
import { loadMagyarProgress, saveMagyarProgress, isMissionDone, isIslandDone, isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone, completeMission, islandTotalStars, completeTest, generateMagyarIslandQuestions, generateMagyarCheckpointQuestions } from "./astroMagyar";

// ─── O3 Constants ──────────────────────────────────────────────────────────
export const O3_SAVE_KEY = "astromagyar_o3_v1";

export const O3_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const O3_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "igeidok/jelen", "igeidok/mult", "igeidok/jovo",
    "igeidok/felszolito", "igeidok/felteteles",
    "nevszok/fonevragozas", "nevszok/melleknevfokozas", "nevszok/birtokos",
  ],
  test2: [
    "szo/osszetett_haladó", "szo/szocsaladok",
    "szoveg/megertés", "szoveg/osszefoglalas",
    "szokincs/erzelmek", "szokincs/idokifejezesek",
  ],
  test3: [
    "szokincs/szolasok", "szokincs/kozmondasok",
    "helyesiras/egybeíras", "helyesiras/kuloniras", "helyesiras/ikes_igek", "helyesiras/masshangzo_torveny",
    "mondat/targy", "mondat/hatarozo", "mondat/jelzo", "mondat/osszetett_alap",
    "fogalmazas/parbeszed",
  ],
};

// ─── O3 Island Definitions ─────────────────────────────────────────────────
export const O3_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Verb Tenses Island", hu: "Igeidők szigete", de: "Tempus-Insel", ro: "Insula timpurilor" },
    icon: "📖", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["igeidok/jelen", "igeidok/mult", "igeidok/jovo", "igeidok/felszolito", "igeidok/felteteles"],
    missions: [
      { id: "m1", category: "explore",   gameType: "lang-explore",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Noun Declension Island", hu: "Névszók szigete", de: "Nomina-Insel", ro: "Insula substantivelor" },
    icon: "🔗", color: "#00D4FF", sortRange: [1, 10],
    topicKeys: ["nevszok/fonevragozas", "nevszok/melleknevfokozas", "nevszok/birtokos", "nevszok/hatarozaragu"],
    missions: [
      { id: "m1", category: "explore",   gameType: "lang-explore",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Compound Words Island", hu: "Összetett szavak szigete", de: "Zusammensetzungs-Insel", ro: "Insula cuvintelor compuse" },
    icon: "📝", color: "#00FF88", sortRange: [1, 10],
    topicKeys: ["szo/osszetett_haladó", "szo/szocsaladok"],
    missions: [
      { id: "m1", category: "explore",   gameType: "lang-explore",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Text Comprehension Island", hu: "Szövegértés szigete", de: "Leseverständnis-Insel", ro: "Insula înțelegerii textului" },
    icon: "💬", color: "#FFD700", sortRange: [1, 10],
    topicKeys: ["szoveg/megertés", "szoveg/osszefoglalas"],
    missions: [
      { id: "m1", category: "explore",   gameType: "lang-explore",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Idioms Island", hu: "Szólások szigete", de: "Idiomatik-Insel", ro: "Insula idiomurilor" },
    icon: "🎭", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["szokincs/szolasok", "szokincs/kozmondasok", "szokincs/erzelmek", "szokincs/idokifejezesek"],
    missions: [
      { id: "m1", category: "explore",   gameType: "lang-explore",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Advanced Spelling Island", hu: "Helyesírás haladó szigete", de: "Rechtschreib-Insel", ro: "Insula ortografiei avansate" },
    icon: "✏️", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["helyesiras/egybeíras", "helyesiras/kuloniras", "helyesiras/ikes_igek", "helyesiras/masshangzo_torveny"],
    missions: [
      { id: "m1", category: "explore",   gameType: "lang-explore",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Composition Island", hu: "Fogalmazás szigete", de: "Aufsatz-Insel", ro: "Insula compunerii" },
    icon: "📜", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["fogalmazas/elbeszeles", "fogalmazas/leiras", "fogalmazas/parbeszed"],
    missions: [
      { id: "m1", category: "explore",   gameType: "lang-explore",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Sentence Analysis Island", hu: "Mondatelemzés szigete", de: "Satzanalyse-Insel", ro: "Insula analizei propozițiilor" },
    icon: "🔍", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["mondat/targy", "mondat/hatarozo", "mondat/jelzo", "mondat/osszetett_alap"],
    missions: [
      { id: "m1", category: "explore",   gameType: "lang-explore",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "igeidok/jelen", "igeidok/mult", "igeidok/jovo", "igeidok/felszolito", "igeidok/felteteles",
      "nevszok/fonevragozas", "nevszok/melleknevfokozas", "nevszok/birtokos", "szo/osszetett_haladó",
      "szoveg/megertés", "szoveg/osszefoglalas", "szokincs/szolasok", "szokincs/erzelmek",
      "helyesiras/egybeíras", "helyesiras/ikes_igek", "helyesiras/masshangzo_torveny",
      "mondat/targy", "mondat/hatarozo", "mondat/jelzo", "mondat/osszetett_alap", "fogalmazas/parbeszed",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "lang-explore",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🪐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── O3 Progress helpers ───────────────────────────────────────────────────
export function loadO3Progress(): MagyarProgress {
  return loadMagyarProgress(O3_SAVE_KEY, O3_ISLANDS);
}

export function saveO3Progress(p: MagyarProgress): void {
  saveMagyarProgress(O3_SAVE_KEY, p);
}

export function isMissionDoneO3(progress: MagyarProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}

export function isIslandDoneO3(progress: MagyarProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}

export function isIslandUnlockedO3(progress: MagyarProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, O3_ISLANDS, islandId);
}

export function isCheckpointUnlockedO3(progress: MagyarProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, O3_CHECKPOINT_MAP, testId);
}

export function isCheckpointDoneO3(progress: MagyarProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}

export function completeMissionO3(progress: MagyarProgress, islandId: string, missionId: string, stars = 1): MagyarProgress {
  return completeMission(progress, O3_ISLANDS, islandId, missionId, stars);
}

export function islandTotalStarsO3(progress: MagyarProgress, islandId: string): number {
  return islandTotalStars(progress, O3_ISLANDS, islandId);
}

export function completeTestO3(progress: MagyarProgress, testId: string): MagyarProgress {
  return completeTest(progress, testId);
}

export function generateIslandQuestionsO3(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] {
  return generateMagyarIslandQuestions(island, 3, count);
}

export function generateCheckpointQuestionsO3(testId: string, _lang: Lang, count = 10): MathQuestion[] {
  return generateMagyarCheckpointQuestions(testId, O3_CHECKPOINT_TOPICS, 3, count);
}
