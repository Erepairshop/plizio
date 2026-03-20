// lib/astroMagyar5.ts
// AstroMagyar — O5 (5. osztály) island system
// 5. osztály: Hangtani elemzés, szóelemzés, szófajok, mondatrészek, szövegtan, stílus, helyesírás, irodalmi ismeretek

import type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";
import type { MagyarProgress } from "./astroMagyar";

export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair };

// ─── O5 Constants ──────────────────────────────────────────────────────────
export const O5_SAVE_KEY = "astromagyar_o5_v1";

export const O5_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const O5_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "hangtan/hangrendsz", "hangtan/hasonulas", "szoelem/to_toldalek",
    "szoelem/kepzo_jel_rag", "szofaj/igenev",
  ],
  test2: [
    "szofaj/határozószó", "mondatresz/alany_allitmany", "mondatresz/targy_hatarozo",
    "szoveg/szovegtipusok", "szoveg/kohezio",
  ],
  test3: [
    "stilus/koznyelv_irodalmi", "helyesiras/osszetetel_iras", "irodalom/versformak",
    "irodalom/stiluseszk", "hangtan/hangrendsz",
  ],
};

// ─── O5 Island Definitions ─────────────────────────────────────────────────
export const O5_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Phonetics Island", hu: "Hangtan szigete", de: "Phonetik-Insel", ro: "Insula foneticii" },
    icon: "🔊", color: "#FF2D78", sortRange: [1, 10],
    topicKeys: ["hangtan/hangrendsz", "hangtan/hasonulas"],
    missions: [
      { id: "m1", category: "explore",   gameType: "gravity-sort",    icon: "🪐", label: { hu: "Hangrendszer szortírozás",     en: "Sound System Sort",      de: "Soundsystem-Sortierung", ro: "Sortare sistem sunet"   } },
      { id: "m2", category: "build",     gameType: "star-match",      icon: "⭐", label: { hu: "Csillag párosítás",          en: "Star Match",            de: "Stern-Match",            ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "speed-round",     icon: "⚡", label: { hu: "Hangtani villámkör",       en: "Sound Speed Round",     de: "Laut-Blitzrunde",        ro: "Rundă rapidă sunete"     } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Word Elements Island", hu: "Szóelemzés szigete", de: "Wortelemente-Insel", ro: "Insula elementelor de cuvinte" },
    icon: "🔤", color: "#00D4FF", sortRange: [1, 10],
    topicKeys: ["szoelem/to_toldalek", "szoelem/kepzo_jel_rag"],
    missions: [
      { id: "m1", category: "explore",   gameType: "category-rush",   icon: "🪐", label: { hu: "Szóelem roham",              en: "Word Element Rush",     de: "Wortelement-Ansturm",    ro: "Asalt element cuvinte"     } },
      { id: "m2", category: "build",     gameType: "star-match",      icon: "⭐", label: { hu: "Csillag párosítás",          en: "Star Match",            de: "Stern-Match",            ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "black-hole",      icon: "🕳️", label: { hu: "Szóelemzési fekete lyuk",    en: "Element Black Hole",    de: "Element-Schwarzes Loch", ro: "Gaură neagră elemente"   } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Parts of Speech Island", hu: "Szófajok szigete", de: "Wortarten-Insel", ro: "Insula categoriilor de cuvinte" },
    icon: "✍️", color: "#00FF88", sortRange: [1, 10],
    topicKeys: ["szofaj/igenev", "szofaj/határozószó"],
    missions: [
      { id: "m1", category: "explore",   gameType: "word-sort",       icon: "🪐", label: { hu: "Szófaj rendezés",            en: "Part of Speech Sort",   de: "Wortart-Sortierung",     ro: "Sortare categorii cuvinte" } },
      { id: "m2", category: "build",     gameType: "star-match",      icon: "⭐", label: { hu: "Csillag párosítás",          en: "Star Match",            de: "Stern-Match",            ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",      icon: "🪐", label: { hu: "Szófaj pálya kvíz",          en: "Speech Orbit Quiz",     de: "Wortart-Umlaufbahn-Quiz", ro: "Quiz orbital categorii"     } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Sentence Parts Island", hu: "Mondatrészek szigete", de: "Satzteile-Insel", ro: "Insula parților de propoziție" },
    icon: "💬", color: "#FFD700", sortRange: [1, 10],
    topicKeys: ["mondatresz/alany_allitmany", "mondatresz/targy_hatarozo"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sentence-builder", icon: "🪐", label: { hu: "Mondatépítés",              en: "Sentence Building",     de: "Satzbau",                ro: "Construire propoziții" } },
      { id: "m2", category: "build",     gameType: "star-match",      icon: "⭐", label: { hu: "Csillag párosítás",          en: "Star Match",            de: "Stern-Match",            ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "speed-round",     icon: "⚡", label: { hu: "Mondatrészek villámkör",     en: "Parts Speed Round",     de: "Satzteile-Blitzrunde",   ro: "Rundă rapidă părți"     } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Text Science Island", hu: "Szövegtan szigete", de: "Textlinguistik-Insel", ro: "Insula lingvisticii textului" },
    icon: "📄", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["szoveg/szovegtipusok", "szoveg/kohezio"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap",        icon: "🪐", label: { hu: "Szöveg hiánypótlás",         en: "Text Fill Gaps",        de: "Textlückentext",         ro: "Completare text"  } },
      { id: "m2", category: "build",     gameType: "star-match",      icon: "⭐", label: { hu: "Csillag párosítás",          en: "Star Match",            de: "Stern-Match",            ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "black-hole",      icon: "🕳️", label: { hu: "Szövegtani fekete lyuk",    en: "Text Black Hole",       de: "Text-Schwarzes Loch",    ro: "Gaură neagră text"     } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Style Basics Island", hu: "Stílustan szigete", de: "Stilistik-Insel", ro: "Insula stilisticii" },
    icon: "🎨", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["stilus/koznyelv_irodalmi"],
    missions: [
      { id: "m1", category: "explore",   gameType: "grammar-match",   icon: "🪐", label: { hu: "Stílus párosítás",           en: "Style Match",           de: "Stil-Match",             ro: "Potrivire stil"  } },
      { id: "m2", category: "build",     gameType: "star-match",      icon: "⭐", label: { hu: "Csillag párosítás",          en: "Star Match",            de: "Stern-Match",            ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",      icon: "🪐", label: { hu: "Stílus pálya kvíz",          en: "Style Orbit Quiz",      de: "Stil-Umlaufbahn-Quiz",   ro: "Quiz orbital stil"     } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Spelling Island", hu: "Helyesírás szigete", de: "Rechtschreibung-Insel", ro: "Insula ortografiei" },
    icon: "✏️", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["helyesiras/osszetetel_iras"],
    missions: [
      { id: "m1", category: "explore",   gameType: "spell-race",      icon: "🪐", label: { hu: "Helyesírási verseny",       en: "Spelling Race",         de: "Rechtschreib-Rennen",    ro: "Cursă ortografie"     } },
      { id: "m2", category: "build",     gameType: "star-match",      icon: "⭐", label: { hu: "Csillag párosítás",          en: "Star Match",            de: "Stern-Match",            ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "speed-round",     icon: "⚡", label: { hu: "Helyesírási villámkör",    en: "Spelling Speed Round",  de: "Rechtschreib-Blitzrunde",ro: "Rundă rapidă ortografie" } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Literature Island", hu: "Irodalom szigete", de: "Literatur-Insel", ro: "Insula literaturii" },
    icon: "📚", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["irodalom/versformak", "irodalom/stiluseszk"],
    missions: [
      { id: "m1", category: "explore",   gameType: "category-rush",   icon: "🪐", label: { hu: "Irodalmi roham",            en: "Literary Rush",         de: "Literatur-Ansturm",      ro: "Asalt literar"  } },
      { id: "m2", category: "build",     gameType: "star-match",      icon: "⭐", label: { hu: "Csillag párosítás",          en: "Star Match",            de: "Stern-Match",            ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "black-hole",      icon: "🕳️", label: { hu: "Irodalmi fekete lyuk",      en: "Literary Black Hole",   de: "Literatur-Schwarzes Loch",ro: "Gaură neagră literară"     } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Grand Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "hangtan/hangrendsz", "szoelem/to_toldalek", "szofaj/igenev",
      "mondatresz/alany_allitmany", "szoveg/szovegtipusok", "irodalom/versformak",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "grammar-match",   icon: "🪐", label: { hu: "Szabály párosítás",         en: "Match Rules",           de: "Regel-Match",            ro: "Potrivire reguli" } },
      { id: "m2", category: "build",     gameType: "star-match",      icon: "⭐", label: { hu: "Csillag párosítás",          en: "Star Match",            de: "Stern-Match",            ro: "Potrivire stele"  } },
      { id: "m3", category: "challenge", gameType: "gravity-sort",    icon: "🪨", label: { hu: "Gravitációs rendezés",      en: "Gravity Sort",          de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── O5 Progress helpers ───────────────────────────────────────────────────
import { loadMagyarProgress, saveMagyarProgress, isMissionDone, isIslandDone, isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone, completeMission, islandTotalStars, completeTest } from "./astroMagyar";

export function loadO5Progress(): MagyarProgress {
  return loadMagyarProgress(O5_SAVE_KEY, O5_ISLANDS);
}

export function saveO5Progress(p: MagyarProgress): void {
  saveMagyarProgress(O5_SAVE_KEY, p);
}

export function isMissionDoneO5(progress: MagyarProgress, islandId: string, missionId: string): boolean {
  return isMissionDone(progress, islandId, missionId);
}

export function isIslandDoneO5(progress: MagyarProgress, islandId: string): boolean {
  return isIslandDone(progress, islandId);
}

export function isIslandUnlockedO5(progress: MagyarProgress, islandId: string): boolean {
  return isIslandUnlocked(progress, O5_ISLANDS, islandId);
}

export function isCheckpointUnlockedO5(progress: MagyarProgress, testId: string): boolean {
  return isCheckpointUnlocked(progress, O5_CHECKPOINT_MAP, testId);
}

export function isCheckpointDoneO5(progress: MagyarProgress, testId: string): boolean {
  return isCheckpointDone(progress, testId);
}

export function completeMissionO5(progress: MagyarProgress, islandId: string, missionId: string, stars = 1): MagyarProgress {
  return completeMission(progress, O5_ISLANDS, islandId, missionId, stars);
}

export function islandTotalStarsO5(progress: MagyarProgress, islandId: string): number {
  return islandTotalStars(progress, O5_ISLANDS, islandId);
}

export function completeTestO5(progress: MagyarProgress, testId: string): MagyarProgress {
  return completeTest(progress, testId);
}

export function generateIslandQuestionsO5(island: IslandDef, _lang: Lang, count = 10) {
  return generateMagyarIslandQuestions(island, 5, count);
}

export function generateCheckpointQuestionsO5(testId: string, _lang: Lang, count = 10) {
  return generateMagyarCheckpointQuestions(testId, O5_CHECKPOINT_TOPICS, 5, count);
}

// ─── Bridge imports ────────────────────────────────────────────────────────
import { generateMagyarIslandQuestions, generateMagyarCheckpointQuestions } from "./astroMagyar";
import type { MathQuestion } from "./mathCurriculum";
