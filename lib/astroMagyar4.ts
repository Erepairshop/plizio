// lib/astroMagyar4.ts
// AstroMagyar — O4 (4. osztály) island system + progress + O4-specific helpers
// 4. osztály: Igeragozás, névmások, határozók, összetett mondatok, szóalkotás, helyesírás, fogalmazás, nyelvtan

import type { IslandDef } from "./astromath";

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
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Alanyi ragozás", en: "Subjective Conjugation", de: "Subjektive Konjugation", ro: "Conjugare subiectivă" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Tárgyas ragozás", en: "Objective Conjugation", de: "Objektive Konjugation", ro: "Conjugare obiectivă" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { hu: "Igeidők + módok", en: "Tenses & Moods", de: "Zeiten & Modi", ro: "Timpuri & Moduri" } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Pronouns Island", hu: "Névmások Szigete", de: "Pronomens-Insel", ro: "Insula pronumelor" },
    icon: "🔗", color: "#4ECDC4", sortRange: [1, 10],
    topicKeys: ["nevmas/szemelyes", "nevmas/mutato", "nevmas/kerdo", "nevmas/visszaható", "nevmas/határozatlan"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Személyes névmások", en: "Personal Pronouns", de: "Personalpronomen", ro: "Pronume personale" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Mutató és kérdő", en: "Demonstrative & Question", de: "Demonstrativ & Frage", ro: "Demonstrativ și întrebare" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { hu: "Visszaható + határozatlan", en: "Reflexive & Indefinite", de: "Reflexiv & Unbestimmt", ro: "Reflexiv & Nedefinit" } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Adverbials Island", hu: "Határozók Szigete", de: "Adverbiale-Insel", ro: "Insula adverbialelor" },
    icon: "📝", color: "#00D4FF", sortRange: [1, 10],
    topicKeys: ["hatarozo/hely", "hatarozo/ido", "hatarozo/mod"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Helyhatározó", en: "Locative Adverbial", de: "Lokaladverbial", ro: "Adverbial locativ" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Időhatározó", en: "Temporal Adverbial", de: "Temporaladverbial", ro: "Adverbial temporal" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { hu: "Módhatározó", en: "Modal Adverbial", de: "Modaladverbial", ro: "Adverbial modal" } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Complex Sentences Island", hu: "Összetett mondatok", de: "Komplexe Sätze", ro: "Propozițiile compuse" },
    icon: "💬", color: "#FFD700", sortRange: [1, 10],
    topicKeys: ["mondat/mellerendelo", "mondat/alarendelo"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Mellérendelő", en: "Coordinate Sentences", de: "Nebenordnende Sätze", ro: "Propoziții coordonate" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Alárendelő", en: "Subordinate Sentences", de: "Unterordnende Sätze", ro: "Propoziții subordonate" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { hu: "Mondatok vegyes", en: "Mixed Sentences", de: "Gemischte Sätze", ro: "Propoziții mixte" } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Word Formation Island", hu: "Szóalkotás", de: "Wortbildung", ro: "Formarea cuvintelor" },
    icon: "🎭", color: "#B44DFF", sortRange: [1, 10],
    topicKeys: ["szoalkot/kepzes", "szoalkot/ragozas", "szoalkot/jelezés"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Szóképzés", en: "Word Derivation", de: "Wortableitung", ro: "Derivarea cuvintelor" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Ragozás", en: "Inflection", de: "Flexion", ro: "Flexiune" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { hu: "Jelezés", en: "Marking", de: "Markierung", ro: "Marcaj" } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Spelling Mastery Island", hu: "Helyesírás mester", de: "Rechtschreib-Meister", ro: "Maestrul ortografiei" },
    icon: "✏️", color: "#FF6348", sortRange: [1, 10],
    topicKeys: ["helyesiras/igekoveto", "helyesiras/kuloniro_haladó"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Igekötő helyesírás", en: "Verb Particle Spelling", de: "Verbpartikel-Rechtschreibung", ro: "Ortografia particulei verbale" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Különírás haladó", en: "Advanced Separation", de: "Fortgeschrittene Trennung", ro: "Separare avansată" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { hu: "Helyesírás vegyes", en: "Mixed Spelling", de: "Gemischte Rechtschreibung", ro: "Ortografie mixtă" } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Composition Island", hu: "Fogalmazás haladó", de: "Komposition Fortgeschritten", ro: "Componere avansată" },
    icon: "📜", color: "#10B981", sortRange: [1, 10],
    topicKeys: ["fogalmazas/erveles", "fogalmazas/level"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Érvelés", en: "Argumentation", de: "Argumentation", ro: "Argumentare" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Levélírás", en: "Letter Writing", de: "Briefschreiben", ro: "Scrisoare" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { hu: "Fogalmazás vegyes", en: "Mixed Composition", de: "Gemischte Komposition", ro: "Componere mixtă" } },
    ],
    svgX: 200, svgY: 80,
  },
  {
    id: "i8",
    name: { en: "Grammar Review Island", hu: "Nyelvtan összefoglaló", de: "Grammatik-Zusammenfassung", ro: "Recapitulare gramaticală" },
    icon: "🔍", color: "#FF8C42", sortRange: [1, 10],
    topicKeys: ["nyelvtan/szoelem", "nyelvtan/mondatelemzes"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Szóelemzés", en: "Word Analysis", de: "Wortanalyse", ro: "Analiza cuvintelor" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Mondatelemzés", en: "Sentence Analysis", de: "Satzanalyse", ro: "Analiza propozițiilor" } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { hu: "Nyelvtan vegyes", en: "Mixed Grammar", de: "Gemischte Grammatik", ro: "Gramatica mixtă" } },
    ],
    svgX: 150, svgY: 20,
  },
  {
    id: "i9",
    name: { en: "Grand Finals Island", hu: "Nagy Teszt", de: "Großes Finale", ro: "Marele Sfinal" },
    icon: "🌟", color: "#E879F9", sortRange: [1, 10],
    topicKeys: ["ige/alanyi", "ige/targyas", "nevmas/szemelyes", "hatarozo/hely", "mondat/mellerendelo"],
    missions: [
      { id: "m1", category: "explore", gameType: "orbit-quiz", icon: "🪐", label: { hu: "Végső teszt 1.", en: "Grand Test 1", de: "Großes Test 1", ro: "Test Grand 1" } },
      { id: "m2", category: "build", gameType: "star-match", icon: "⭐", label: { hu: "Végső teszt 2.", en: "Grand Test 2", de: "Großes Test 2", ro: "Test Grand 2" } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { hu: "Végső teszt 3.", en: "Grand Test 3", de: "Großes Test 3", ro: "Test Grand 3" } },
    ],
    svgX: 120, svgY: 120,
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
