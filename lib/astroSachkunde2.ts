// lib/astroSachkunde2.ts
// AstroSachkunde — Grade 2 island system definitions, progress management, question helpers
// 9 islands following progressive Sachkunde curriculum (environmental science)

import type { IslandDef, L10n, MissionDef, Lang, GameType, SortRound, MatchPair } from "./astromath";
import type { MathQuestion } from "./mathCurriculum";

// Re-export types so page.tsx can import them from one place
export type { GameType, Lang, L10n, MissionDef, MissionCategory, IslandDef, SortRound, MatchPair } from "./astromath";

export interface SachkundeProgress {
  completedMissions: string[];
  completedIslands: string[];
  completedTests: string[];
  missionStars: Record<string, number>;
}

import { G2_Generators_Sachkunde as G2_Sachkunde } from "./sachkundeGenerators2";

// ─── Constants ──────────────────────────────────────────────────────

export const SK_G2_SAVE_KEY = "astrosachkunde_g2_v1";

export const SK_G2_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

// Keep old name for backwards compatibility (deprecated)
export const CHECKPOINT_G2_MAP = SK_G2_CHECKPOINT_MAP;

export const SK_G2_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["ernährung_verdauung", "zahngesundheit", "lebensräume", "nahrungsketten", "haustiere_pflege"],
  test2: ["pflanzenteile", "wachstum_lebenszyklus", "samen_zur_blüte", "wasserkreislauf", "aggregatzustände"],
  test3: ["wasser_im_leben", "verschiedene_berufe", "unfallprävention", "magnetismus", "schwimmen_sinken"],
};

// Keep old name for backwards compatibility (deprecated)
export const CHECKPOINT_G2_TOPICS = SK_G2_CHECKPOINT_TOPICS;

// ─── Progress Management ────────────────────────────────────────────

export function loadSKG2Progress(): SachkundeProgress {
  if (typeof window === "undefined") {
    return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
  }
  const raw = localStorage.getItem(SK_G2_SAVE_KEY);
  if (!raw) {
    return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
  }
  return JSON.parse(raw);
}

export function saveSKG2Progress(p: SachkundeProgress) {
  if (typeof window !== "undefined") {
    localStorage.setItem(SK_G2_SAVE_KEY, JSON.stringify(p));
  }
}

export function isMissionDoneSKG2(progress: SachkundeProgress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDoneSKG2(progress: SachkundeProgress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedSKG2(progress: SachkundeProgress, islandId: string): boolean {
  const idx = SK_G2_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(SK_G2_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedSKG2(progress: SachkundeProgress, testId: string): boolean {
  return SK_G2_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDoneSKG2(progress: SachkundeProgress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function islandTotalStarsSKG2(progress: SachkundeProgress, islandId: string): number {
  const island = SK_G2_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeMissionSKG2(
  progress: SachkundeProgress,
  islandId: string,
  missionId: string,
  stars: number = 1,
): SachkundeProgress {
  const key = `${islandId}_${missionId}`;
  const prev = progress.missionStars ?? {};
  const bestStars = Math.max(stars, prev[key] ?? 0);
  const updated: SachkundeProgress = {
    ...progress,
    completedMissions: progress.completedMissions.includes(key)
      ? progress.completedMissions
      : [...progress.completedMissions, key],
    missionStars: { ...prev, [key]: bestStars },
  };

  const island = SK_G2_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function completeTestSKG2(progress: SachkundeProgress, testId: string): SachkundeProgress {
  if (progress.completedTests.includes(testId)) return progress;
  return { ...progress, completedTests: [...progress.completedTests, testId] };
}

// ─── Question Generation ────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function toMathQuestion(q: any): MathQuestion {
  return {
    question: q.question,
    correctAnswer: q.options ? q.options[q.correct] : String(q.correct),
    options: q.options || [],
    topic: q.subtopic || q.topic || "sachkunde",
    isWordProblem: false,
  };
}

export function generateIslandQuestionsSKG2(island: IslandDef, count = 10): MathQuestion[] {
  const questions: any[] = [];
  for (const topicKey of island.topicKeys) {
    const gen = (G2_Sachkunde as any)[topicKey];
    if (gen && typeof gen === "function") {
      for (let i = 0; i < Math.ceil(count / island.topicKeys.length); i++) {
        const q = gen();
        questions.push(q);
      }
    }
  }
  return shuffle(questions.slice(0, count)).map(toMathQuestion);
}

export function generateCheckpointQuestionsSKG2(testId: string, count = 10): MathQuestion[] {
  const topicKeys = SK_G2_CHECKPOINT_TOPICS[testId] ?? [];
  const questions: any[] = [];
  for (const topicKey of topicKeys) {
    const gen = (G2_Sachkunde as any)[topicKey];
    if (gen && typeof gen === "function") {
      for (let i = 0; i < Math.ceil(count / topicKeys.length); i++) {
        const q = gen();
        questions.push(q);
      }
    }
  }
  return shuffle(questions.slice(0, count)).map(toMathQuestion);
}

// GravitySort: pick 5 distinct random numbers from range
export function generateSortRoundSKG2(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const available = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

// StarMatch: build question-answer pairs from MCQ questions
export function generateMatchPairsSKG2(questions: MathQuestion[]): MatchPair[] {
  const seen = new Set<string>();
  const unique: MathQuestion[] = [];
  for (const q of questions) {
    const key = String(q.correctAnswer);
    if (!seen.has(key)) { seen.add(key); unique.push(q); }
    if (unique.length === 5) break;
  }
  return unique.map((q) => ({
    left: q.question,
    right: String(q.correctAnswer),
  }));
}

// ─── Island Definitions ─────────────────────────────────────────────

export const SK_G2_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: {
      en: "Healthy Body",
      hu: "Egészséges test",
      de: "Gesunder Körper",
      ro: "Corp sănătos",
    },
    icon: "🏃",
    color: "#FF6B9D",
    sortRange: [1, 10],
    topicKeys: ["ernährung_verdauung", "zahngesundheit", "bewegung_körperpflege"],
    missions: [
      {
        id: "m1",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "explore",
        label: {
          en: "Food Explorer",
          hu: "Étel felfedezés",
          de: "Nahrung erkunden",
          ro: "Explorare alimente",
        },
      },
      {
        id: "m2",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "build",
        label: {
          en: "Health Challenge",
          hu: "Egészség kihívás",
          de: "Gesundheitsherausforderung",
          ro: "Provocare sănătate",
        },
      },
      {
        id: "m3",
        gameType: "star-match",
        icon: "⭐",
        category: "challenge",
        label: {
          en: "Body Care Match",
          hu: "Testápolás párosítás",
          de: "Körperpflege-Zuordnung",
          ro: "Potrivire îngrijire corp",
        },
      },
    ],
    svgX: 160,
    svgY: 530,
  },
  {
    id: "i2",
    name: {
      en: "Habitats",
      hu: "Élőhelyek",
      de: "Lebensräume",
      ro: "Habitate",
    },
    icon: "🌍",
    color: "#4ECDC4",
    sortRange: [1, 10],
    topicKeys: ["lebensräume", "nahrungsketten", "haustiere_pflege"],
    missions: [
      {
        id: "m1",
        gameType: "black-hole",
        icon: "🕳️",
        category: "explore",
        label: {
          en: "Habitat Discovery",
          hu: "Élőhely felfedezés",
          de: "Lebensraum-Entdeckung",
          ro: "Descoperire habitat",
        },
      },
      {
        id: "m2",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "build",
        label: {
          en: "Food Chains",
          hu: "Táplálékláncok",
          de: "Nahrungsketten",
          ro: "Lanțuri alimentare",
        },
      },
      {
        id: "m3",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "challenge",
        label: {
          en: "Pet Care Quiz",
          hu: "Háziállat-gondozás",
          de: "Haustier-Pflege",
          ro: "Îngrijire animale domestice",
        },
      },
    ],
    svgX: 90,
    svgY: 440,
  },
  {
    id: "i3",
    name: {
      en: "Wild Animals",
      hu: "Vadállatok",
      de: "Wildtiere",
      ro: "Animale sălbatice",
    },
    icon: "🦊",
    color: "#F7DC6F",
    sortRange: [1, 10],
    topicKeys: ["wildtiere_anpassung", "nahrungsketten", "lebensräume"],
    missions: [
      {
        id: "m1",
        gameType: "star-match",
        icon: "⭐",
        category: "explore",
        label: {
          en: "Animal Adaptation",
          hu: "Állatok adaptációja",
          de: "Tieranpassung",
          ro: "Adaptare animale",
        },
      },
      {
        id: "m2",
        gameType: "black-hole",
        icon: "🕳️",
        category: "build",
        label: {
          en: "Predator & Prey",
          hu: "Ragadozó és zsákmány",
          de: "Raubtiere und Beute",
          ro: "Prădător și pradă",
        },
      },
      {
        id: "m3",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "challenge",
        label: {
          en: "Wildlife Quiz",
          hu: "Vadvilág kvíz",
          de: "Wildnis-Quiz",
          ro: "Chestionar fauna sălbatică",
        },
      },
    ],
    svgX: 220,
    svgY: 360,
  },
  {
    id: "i4",
    name: {
      en: "Plants",
      hu: "Növények",
      de: "Pflanzen",
      ro: "Plante",
    },
    icon: "🌱",
    color: "#95E1D3",
    sortRange: [1, 10],
    topicKeys: ["pflanzenteile", "wachstum_lebenszyklus", "samen_zur_blüte"],
    missions: [
      {
        id: "m1",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "explore",
        label: {
          en: "Plant Parts",
          hu: "Növényi részek",
          de: "Pflanzenteile",
          ro: "Părți ale plantelor",
        },
      },
      {
        id: "m2",
        gameType: "star-match",
        icon: "⭐",
        category: "build",
        label: {
          en: "Growth Cycle",
          hu: "Növekedési ciklus",
          de: "Wachstumszyklus",
          ro: "Ciclu de creștere",
        },
      },
      {
        id: "m3",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "challenge",
        label: {
          en: "Seed to Flower",
          hu: "Magból virágra",
          de: "Von Samen zur Blüte",
          ro: "De la semință la floare",
        },
      },
    ],
    svgX: 100,
    svgY: 280,
  },
  {
    id: "i5",
    name: {
      en: "Water",
      hu: "Víz",
      de: "Wasser",
      ro: "Apă",
    },
    icon: "💧",
    color: "#85C1E9",
    sortRange: [1, 10],
    topicKeys: ["wasserkreislauf", "aggregatzustände", "wasser_im_leben"],
    missions: [
      {
        id: "m1",
        gameType: "black-hole",
        icon: "🕳️",
        category: "explore",
        label: {
          en: "Water Cycle",
          hu: "Víz körforgása",
          de: "Wasserkreislauf",
          ro: "Ciclul apei",
        },
      },
      {
        id: "m2",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "build",
        label: {
          en: "States of Water",
          hu: "Víz halmazállapotai",
          de: "Aggregatzustände",
          ro: "Stări de agregare",
        },
      },
      {
        id: "m3",
        gameType: "star-match",
        icon: "⭐",
        category: "challenge",
        label: {
          en: "Water in Life",
          hu: "Víz az életben",
          de: "Wasser im Leben",
          ro: "Apa în viață",
        },
      },
    ],
    svgX: 230,
    svgY: 200,
  },
  {
    id: "i6",
    name: {
      en: "Jobs & Community",
      hu: "Foglalkozások és közösség",
      de: "Berufe & Gemeinschaft",
      ro: "Locuri de muncă și comunitate",
    },
    icon: "👷",
    color: "#BB8FCE",
    sortRange: [1, 10],
    topicKeys: ["verschiedene_berufe", "was_machen_berufe", "familie_rollen"],
    missions: [
      {
        id: "m1",
        gameType: "star-match",
        icon: "⭐",
        category: "explore",
        label: {
          en: "Different Jobs",
          hu: "Különféle foglalkozások",
          de: "Verschiedene Berufe",
          ro: "Diferite locuri de muncă",
        },
      },
      {
        id: "m2",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "build",
        label: {
          en: "Job Roles",
          hu: "Munkaköri szerepek",
          de: "Berufsrollen",
          ro: "Roluri profesionale",
        },
      },
      {
        id: "m3",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "challenge",
        label: {
          en: "Family Roles",
          hu: "Családi szerepek",
          de: "Familien rollen",
          ro: "Roluri de familie",
        },
      },
    ],
    svgX: 120,
    svgY: 120,
  },
  {
    id: "i7",
    name: {
      en: "Safety & First Aid",
      hu: "Biztonság és elsősegély",
      de: "Sicherheit & Erste Hilfe",
      ro: "Siguranță și prim ajutor",
    },
    icon: "🚑",
    color: "#F0B27A",
    sortRange: [1, 10],
    topicKeys: ["unfallprävention", "verkehrssicherheit", "erste_hilfe_basics"],
    missions: [
      {
        id: "m1",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "explore",
        label: {
          en: "Accident Prevention",
          hu: "Baleseti megelőzés",
          de: "Unfallprävention",
          ro: "Prevenirea accidentelor",
        },
      },
      {
        id: "m2",
        gameType: "black-hole",
        icon: "🕳️",
        category: "build",
        label: {
          en: "Traffic Safety",
          hu: "Közlekedésbiztonság",
          de: "Verkehrssicherheit",
          ro: "Siguranță rutieră",
        },
      },
      {
        id: "m3",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "challenge",
        label: {
          en: "First Aid Basics",
          hu: "Elsősegély alapok",
          de: "Erste Hilfe Grundlagen",
          ro: "Bazele primului ajutor",
        },
      },
    ],
    svgX: 210,
    svgY: 40,
  },
  {
    id: "i8",
    name: {
      en: "Science Experiments",
      hu: "Tudományos kísérletek",
      de: "Wissenschafts-Experimente",
      ro: "Experimente științifice",
    },
    icon: "🧲",
    color: "#76D7C4",
    sortRange: [1, 10],
    topicKeys: ["magnetismus", "schwimmen_sinken", "aggregatzustände"],
    missions: [
      {
        id: "m1",
        gameType: "star-match",
        icon: "⭐",
        category: "explore",
        label: {
          en: "Magnetism",
          hu: "Mágnesség",
          de: "Magnetismus",
          ro: "Magnetism",
        },
      },
      {
        id: "m2",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "build",
        label: {
          en: "Sink or Float",
          hu: "Süllyedés vagy úszás",
          de: "Schwimmen oder Sinken",
          ro: "Cufundare sau plutire",
        },
      },
      {
        id: "m3",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "challenge",
        label: {
          en: "Properties Quiz",
          hu: "Tulajdonságok kvíz",
          de: "Eigenschaften Quiz",
          ro: "Chestionar proprietăți",
        },
      },
    ],
    svgX: 100,
    svgY: -40,
  },
  {
    id: "i9",
    name: {
      en: "Grand Review",
      hu: "Nagyon felülvizsgálat",
      de: "Großes Finale",
      ro: "Recenzie finală",
    },
    icon: "🏆",
    color: "#F1948A",
    sortRange: [1, 10],
    topicKeys: ["ernährung_verdauung", "pflanzenteile", "wasserkreislauf"],
    missions: [
      {
        id: "m1",
        gameType: "black-hole",
        icon: "🕳️",
        category: "explore",
        label: {
          en: "Review Challenge",
          hu: "Felülvizsgálat kihívás",
          de: "Wiederholungs-Herausforderung",
          ro: "Provocare de recenzie",
        },
      },
      {
        id: "m2",
        gameType: "star-match",
        icon: "⭐",
        category: "build",
        label: {
          en: "Concept Match",
          hu: "Koncepció párosítás",
          de: "Konzept-Zuordnung",
          ro: "Potrivire concept",
        },
      },
      {
        id: "m3",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "challenge",
        label: {
          en: "Final Quiz",
          hu: "Végső kvíz",
          de: "Abschluss-Quiz",
          ro: "Chestionar final",
        },
      },
    ],
    svgX: 190,
    svgY: -100,
  },
];
