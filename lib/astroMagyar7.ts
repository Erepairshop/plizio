// lib/astroMagyar7.ts
// AstroMagyar — O7 (7. osztály) island system + progress + O7-specific helpers
// 7. osztály: Nyelvtörténet, retorika haladó, stilisztika, nyelvváltozatok, szövegalkotás, mondattan, kommunikáció, média

import type { IslandDef } from "./astromath";

// ─── O7 Progress ────────────────────────────────────────────────────────────
export interface O7Progress {
  completedMissions: string[];
  completedIslands: string[];
  completedTests: string[];
  missionStars: Record<string, number>;
}

// ─── O7 Constants ───────────────────────────────────────────────────────────
export const O7_SAVE_KEY = "astromagyar_o7_v1";

export const O7_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const O7_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "nyelvtort/hangvaltozas", "nyelvtort/jovenényszó_haladó", "retorika/erveles_haladó",
    "retorika/meggyozes_haladó", "stilisztika/stilusretegek",
  ],
  test2: [
    "stilisztika/szovegstilus", "nyelvv/tajnyelv", "szoveg/ervelo_szoveg",
    "szoveg/publicisztika", "mondat/tobbsz_osszetett",
  ],
  test3: [
    "komm/verbalis", "komm/nonverbalis", "media/mediaszoveg",
    "media/manipulacio", "nyelvtort/hangvaltozas",
  ],
};

// ─── O7 Island Definitions ──────────────────────────────────────────────────
export const O7_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Language History Island", hu: "Nyelvtörténet Szigete", de: "Sprachgeschichts-Insel", ro: "Insula istoriei limbii" },
    icon: "📚", color: "#FF6B9D", sortRange: [1, 10],
    topicKeys: ["nyelvtort/hangvaltozas", "nyelvtort/jovenényszó_haladó"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Hangváltozások", en: "Sound Changes", de: "Lautwandel", ro: "Schimbări de sunet" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Jövevényszavak", en: "Loanwords", de: "Lehnwörter", ro: "Cuvinte împrumutate" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { hu: "Nyelvtörténet vegyes", en: "Language History Mixed", de: "Sprachgeschichte gemischt", ro: "Istorie limbii mixtă" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Advanced Rhetoric Island", hu: "Retorika Haladó", de: "Fortgeschrittene Rhetorik", ro: "Rhetorică avansată" },
    icon: "🎤", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: ["retorika/erveles_haladó", "retorika/meggyozes_haladó"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Érvelési hibák", en: "Argument Errors", de: "Argumentationsfehler", ro: "Erori de argumentare" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Meggyőzési technikák", en: "Persuasion Techniques", de: "Überzeugungstechniken", ro: "Tehnici de persuasiune" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { hu: "Retorika összteszt", en: "Rhetoric Comprehensive", de: "Rhetorik umfassend", ro: "Rhetorică cuprinzătoare" } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Advanced Stylistics Island", hu: "Stilisztika Haladó", de: "Fortgeschrittene Stilistik", ro: "Stilistică avansată" },
    icon: "✨", color: "#00D4FF", sortRange: [1, 10],
    topicKeys: ["stilisztika/stilusretegek", "stilisztika/szovegstilus"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Stílusrétegek", en: "Style Levels", de: "Stilebenen", ro: "Niveluri de stil" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Szövegstílus", en: "Text Style", de: "Textstil", ro: "Stil textual" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { hu: "Stilisztika vegyes", en: "Stylistics Mixed", de: "Stilistik gemischt", ro: "Stilistică mixtă" } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Language Variants Island", hu: "Nyelvváltozatok", de: "Sprachvarianten", ro: "Variante lingvistice" },
    icon: "🗣️", color: "#FFD700", sortRange: [1, 10],
    topicKeys: ["nyelvv/tajnyelv", "nyelvv/csoportnyelv"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Nyelvjárások", en: "Dialects", de: "Mundarten", ro: "Dialecte" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Csoportnyelv", en: "Group Language", de: "Gruppensprache", ro: "Limbă de grup" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { hu: "Nyelvváltozatok vegyes", en: "Variants Mixed", de: "Varianten gemischt", ro: "Variante mixte" } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Text Composition Island", hu: "Szövegalkotás", de: "Texterstellung", ro: "Compunere de text" },
    icon: "📝", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["szoveg/ervelo_szoveg", "szoveg/publicisztika"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Érvelő szöveg", en: "Argumentative Text", de: "Argumentativer Text", ro: "Text argumentativ" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Publicisztikai szöveg", en: "Publicistic Text", de: "Publizistischer Text", ro: "Text publicistic" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { hu: "Szövegalkotás vegyes", en: "Composition Mixed", de: "Texterstellung gemischt", ro: "Compunere mixtă" } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Advanced Syntax Island", hu: "Mondattan Haladó", de: "Fortgeschrittene Syntax", ro: "Sintaxă avansată" },
    icon: "⚙️", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["mondat/tobbsz_osszetett"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Összetett mondatok", en: "Complex Sentences", de: "Komplexe Sätze", ro: "Propoziții compuse" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Mondatszakaszok", en: "Sentence Clauses", de: "Satzteile", ro: "Clauze propoziție" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { hu: "Mondattan teszt", en: "Syntax Test", de: "Syntax-Test", ro: "Test sintaxă" } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Communication Island", hu: "Kommunikáció", de: "Kommunikation", ro: "Comunicare" },
    icon: "💬", color: "#FF9500", sortRange: [1, 10],
    topicKeys: ["komm/verbalis", "komm/nonverbalis"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Verbális kommunikáció", en: "Verbal Communication", de: "Verbale Kommunikation", ro: "Comunicare verbală" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Nonverbális kommunikáció", en: "Nonverbal Communication", de: "Nonverbale Kommunikation", ro: "Comunicare nonverbală" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { hu: "Kommunikáció vegyes", en: "Communication Mixed", de: "Kommunikation gemischt", ro: "Comunicare mixtă" } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Media and Language Island", hu: "Média és Nyelv", de: "Medien und Sprache", ro: "Media și limbă" },
    icon: "📺", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["media/mediaszoveg", "media/manipulacio"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Médiaszövegek", en: "Media Texts", de: "Medientexte", ro: "Texte media" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Médiamanipuláció", en: "Media Manipulation", de: "Medienmanipulation", ro: "Manipulare media" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { hu: "Média teszt", en: "Media Test", de: "Medien-Test", ro: "Test media" } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: [
      "nyelvtort/hangvaltozas", "retorika/erveles_haladó", "stilisztika/stilusretegek",
      "nyelvv/tajnyelv", "szoveg/ervelo_szoveg", "mondat/tobbsz_osszetett",
      "komm/verbalis", "media/mediaszoveg",
    ],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Vegyes teszt I.", en: "Mixed Test I", de: "Gemischter Test I", ro: "Test mixt I" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Vegyes teszt II.", en: "Mixed Test II", de: "Gemischter Test II", ro: "Test mixt II" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { hu: "Végső összefoglalás", en: "Final Summary", de: "Zusammenfassung Final", ro: "Rezumat final" } },
    ],
    svgX: 190, svgY: -90,
  },
];

// ─── O7 Progress helpers ────────────────────────────────────────────────────
export function loadO7Progress(): O7Progress {
  try {
    const raw = typeof window !== "undefined" ? localStorage.getItem(O7_SAVE_KEY) : null;
    if (raw) return JSON.parse(raw) as O7Progress;
  } catch {}
  return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
}

export function saveO7Progress(p: O7Progress): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(O7_SAVE_KEY, JSON.stringify(p));
  }
}

export function isMissionDoneO7(progress: O7Progress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDoneO7(progress: O7Progress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedO7(progress: O7Progress, islandId: string): boolean {
  const idx = O7_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(O7_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedO7(progress: O7Progress, testId: string): boolean {
  return (O7_CHECKPOINT_MAP[testId] ?? []).every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDoneO7(progress: O7Progress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function completeMissionO7(progress: O7Progress, islandId: string, missionId: string, stars = 1): O7Progress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: O7Progress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = O7_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function islandTotalStarsO7(progress: O7Progress, islandId: string): number {
  const island = O7_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeTestO7(progress: O7Progress, testId: string): O7Progress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}
