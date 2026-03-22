// lib/astroMagyar8.ts
// AstroMagyar — O8 (8. osztály) island system
// 8. osztály: Nyelvtörténet, stíluseszközök, szövegelemzés, helyesírás, vitakultúra

import type { IslandDef } from "./astroMagyar";
import type { MagyarProgress } from "./astroMagyar";
import {
  loadMagyarProgress, saveMagyarProgress, isMissionDone, isIslandDone, isIslandUnlocked,
  isCheckpointUnlocked, isCheckpointDone, completeMission, completeTest, islandTotalStars,
} from "./astroMagyar";

// ─── Constants ─────────────────────────────────────────────────────────────
export const O8_SAVE_KEY = "astromagyar_o8_v1";

export const O8_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const O8_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "nyelvtort/omagyr", "nyelvtort/kodexek", "stilus/alliteracio_ritmika",
    "stilus/irónia_szatira",
  ],
  test2: [
    "szoveg/irodalmi_elemzes", "szoveg/kritikai_gondolkodas", "helyesiras/osszefoglalo",
    "norma/kozmagyar",
  ],
  test3: [
    "szoveg/tudomanyos", "szoveg/hivatkozas", "vita/erveles_technika",
    "vita/cáfolás",
  ],
};

// ─── O8 Island Definitions ────────────────────────────────────────────────
export const O8_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Old Hungarian Island", hu: "Ómagyar sziget", de: "Altungarisch-Insel", ro: "Insula maghiară veche" },
    icon: "📜", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["nyelvtort/omagyr", "nyelvtort/kodexek"],
    missions: [
      { id: "m1", category: "explore",   gameType: "old-hungarian-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "gravity-sort",    icon: "🌪️", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "sentence-builder",   icon: "📝", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Style Devices Island", hu: "Stíluseszközök szigete", de: "Stilmittel-Insel", ro: "Insula mijloacelor de stil" },
    icon: "🎨", color: "#00D4FF", sortRange: [1, 10],
    topicKeys: ["stilus/alliteracio_ritmika", "stilus/irónia_szatira"],
    missions: [
      { id: "m1", category: "explore",   gameType: "style-devices-explorer",  icon: "🖼️", label: { hu: "Szókincs",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "category-rush",    icon: "🏃", label: { hu: "Rendezés", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",   icon: "🕳️", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Text Analysis Island", hu: "Szövegelemzés szigete", de: "Textanalyse-Insel", ro: "Insula analizei textului" },
    icon: "🔍", color: "#00FF88", sortRange: [1, 10],
    topicKeys: ["szoveg/irodalmi_elemzes", "szoveg/kritikai_gondolkodas"],
    missions: [
      { id: "m1", category: "explore",   gameType: "text-analysis-explorer",  icon: "🧠", label: { hu: "Memória",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",    icon: "🚀", label: { hu: "Mondatépítő", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "speed-round",   icon: "⚡", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Spelling Summary Island", hu: "Helyesírás összefoglaló szigete", de: "Rechtschreib-Insel", ro: "Insula ortografiei" },
    icon: "✍️", color: "#FFD700", sortRange: [1, 10],
    topicKeys: ["helyesiras/osszefoglalo"],
    missions: [
      { id: "m1", category: "explore",   gameType: "spelling-summary-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "star-match",    icon: "⭐", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",   icon: "🚀", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Language Norm Island", hu: "Nyelvi norma szigete", de: "Sprachnorm-Insel", ro: "Insula normei limbii" },
    icon: "📖", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["norma/kozmagyar", "norma/nyelvhasznalat"],
    missions: [
      { id: "m1", category: "explore",   gameType: "language-norm-explorer",  icon: "📖", label: { hu: "Olvasás",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "black-hole",    icon: "🕳️", label: { hu: "Rendezés", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "star-match",   icon: "⭐", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Scientific Text Island", hu: "Tudományos szöveg szigete", de: "Wissenschaftlicher Text", ro: "Insula textului științific" },
    icon: "🔬", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["szoveg/tudomanyos", "szoveg/hivatkozas"],
    missions: [
      { id: "m1", category: "explore",   gameType: "scientific-text-explorer",  icon: "🖼️", label: { hu: "Szókincs",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "speed-round",    icon: "⚡", label: { hu: "Mondatépítő", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "gravity-sort",   icon: "🌪️", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Debate Culture Island", hu: "Vitakultúra szigete", de: "Debattenkultur-Insel", ro: "Insula culturii dezbaterii" },
    icon: "💬", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["vita/erveles_technika", "vita/cáfolás"],
    missions: [
      { id: "m1", category: "explore",   gameType: "debate-culture-explorer",  icon: "🧠", label: { hu: "Memória",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "sentence-builder",    icon: "📝", label: { hu: "Mondatépítő", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",   icon: "🚀", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Comprehensive Test", hu: "Átfogó teszt szigete", de: "Umfassender Test", ro: "Insula testului cuprinzător" },
    icon: "📝", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["helyesiras/osszefoglalo", "nyelvtort/omagyr", "stilus/alliteracio_ritmika"],
    missions: [
      { id: "m1", category: "explore",   gameType: "comprehensive-test-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "category-rush",    icon: "🏃", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "star-match",   icon: "⭐", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Grand Final Test", hu: "Nagy Végső Próba", de: "Große Abschlussprüfung", ro: "Marea probă finală" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "nyelvtort/omagyr", "stilus/irónia_szatira", "szoveg/irodalmi_elemzes",
      "helyesiras/osszefoglalo", "vita/erveles_technika",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "grand-final-explorer",  icon: "🔭", label: { hu: "Tanul",     en: "Learn",      de: "Lernen",      ro: "Învaţă"      } },
      { id: "m2", category: "build",     gameType: "black-hole",    icon: "🕳️", label: { hu: "Gyakorol", en: "Practice",   de: "Üben",        ro: "Exersează"   } },
      { id: "m3", category: "challenge", gameType: "sentence-builder",   icon: "📝", label: { hu: "Kihívás",   en: "Challenge",  de: "Herausforderung", ro: "Provocare"   } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── O8 Progress helpers ────────────────────────────────────────────────────
export function loadO8Progress(): MagyarProgress {
  return loadMagyarProgress(O8_SAVE_KEY, O8_ISLANDS);
}

export function saveO8Progress(p: MagyarProgress): void {
  saveMagyarProgress(O8_SAVE_KEY, p);
}

export function isMissionDoneO8(progress: MagyarProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}

export function isIslandDoneO8(progress: MagyarProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}

export function isIslandUnlockedO8(progress: MagyarProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, O8_ISLANDS, islandId);
}

export function isCheckpointUnlockedO8(progress: MagyarProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, O8_CHECKPOINT_MAP, testId);
}

export function isCheckpointDoneO8(progress: MagyarProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}

export function completeMissionO8(progress: MagyarProgress, islandId: string, missionId: string, stars = 1): MagyarProgress {
  return completeMission(progress, O8_ISLANDS, islandId, missionId, stars);
}

export function islandTotalStarsO8(progress: MagyarProgress, islandId: string): number {
  return islandTotalStars(progress, O8_ISLANDS, islandId);
}

export function completeTestO8(progress: MagyarProgress, testId: string): MagyarProgress {
  return completeTest(progress, testId);
}

export { generateMagyarIslandQuestions, generateMagyarCheckpointQuestions } from "./astroMagyar";
export type { MagyarProgress, IslandDef } from "./astroMagyar";
