// lib/astroSachkunde3.ts
// AstroSachkunde — Grade 3 island system definitions, progress management, question helpers
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

import { G3_Generators_Sachkunde as G3_Sachkunde } from "./sachkundeGenerators3";

// ─── Constants ──────────────────────────────────────────────────────

export const SK_G3_SAVE_KEY = "astrosachkunde_g3_v1";

export const SK_G3_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

// Keep old name for backwards compatibility (deprecated)
export const CHECKPOINT_G3_MAP = SK_G3_CHECKPOINT_MAP;

export const SK_G3_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: ["körperaufbau", "tierklassen", "nahrungsnetze", "schmetterlinge_insekten", "waldtiere_raubtiere"],
  test2: ["blüte_bestäubung", "photosynthese_einfach", "pflanzenvermehrung", "wetter_instrumente", "jahreszeiten_klima"],
  test3: ["gewässer_typen", "kompass_himmelsrichtungen", "kartenlesen", "dorf_stadt", "umweltschutz_recycling"],
};

// Keep old name for backwards compatibility (deprecated)
export const CHECKPOINT_G3_TOPICS = SK_G3_CHECKPOINT_TOPICS;

// ─── Progress Management ────────────────────────────────────────────

export function loadSKG3Progress(): SachkundeProgress {
  if (typeof window === "undefined") {
    return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
  }
  const raw = localStorage.getItem(SK_G3_SAVE_KEY);
  if (!raw) {
    return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
  }
  return JSON.parse(raw);
}

export function saveSKG3Progress(p: SachkundeProgress) {
  if (typeof window !== "undefined") {
    localStorage.setItem(SK_G3_SAVE_KEY, JSON.stringify(p));
  }
}

export function isMissionDoneSKG3(progress: SachkundeProgress, islandId: string, missionId: string): boolean {
  return progress.completedMissions.includes(`${islandId}_${missionId}`);
}

export function isIslandDoneSKG3(progress: SachkundeProgress, islandId: string): boolean {
  return progress.completedIslands.includes(islandId);
}

export function isIslandUnlockedSKG3(progress: SachkundeProgress, islandId: string): boolean {
  const idx = SK_G3_ISLANDS.findIndex((i) => i.id === islandId);
  if (idx === 0) return true;
  return progress.completedIslands.includes(SK_G3_ISLANDS[idx - 1].id);
}

export function isCheckpointUnlockedSKG3(progress: SachkundeProgress, testId: string): boolean {
  return SK_G3_CHECKPOINT_MAP[testId].every((id) => progress.completedIslands.includes(id));
}

export function isCheckpointDoneSKG3(progress: SachkundeProgress, testId: string): boolean {
  return progress.completedTests.includes(testId);
}

export function islandTotalStarsSKG3(progress: SachkundeProgress, islandId: string): number {
  const island = SK_G3_ISLANDS.find((i) => i.id === islandId);
  if (!island) return 0;
  const stars = progress.missionStars ?? {};
  return island.missions.reduce((sum, m) => sum + (stars[`${islandId}_${m.id}`] ?? 0), 0);
}

export function completeMissionSKG3(
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

  const island = SK_G3_ISLANDS.find((i) => i.id === islandId)!;
  const allMissionsDone = island.missions.every((m) =>
    updated.completedMissions.includes(`${islandId}_${m.id}`)
  );
  if (allMissionsDone && !updated.completedIslands.includes(islandId)) {
    updated.completedIslands = [...updated.completedIslands, islandId];
  }
  return updated;
}

export function completeTestSKG3(progress: SachkundeProgress, testId: string): SachkundeProgress {
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

export function generateIslandQuestionsSKG3(island: IslandDef, count = 10): MathQuestion[] {
  const questions: any[] = [];
  for (const topicKey of island.topicKeys) {
    const gen = (G3_Sachkunde as any)[topicKey];
    if (gen && typeof gen === "function") {
      const result = gen();
      if (Array.isArray(result)) {
        questions.push(...shuffle(result).slice(0, Math.ceil(count / island.topicKeys.length)));
      } else {
        questions.push(result);
      }
    }
  }
  return shuffle(questions.slice(0, count)).map(toMathQuestion);
}

export function generateCheckpointQuestionsSKG3(testId: string, count = 10): MathQuestion[] {
  const topicKeys = SK_G3_CHECKPOINT_TOPICS[testId] ?? [];
  const questions: any[] = [];
  for (const topicKey of topicKeys) {
    const gen = (G3_Sachkunde as any)[topicKey];
    if (gen && typeof gen === "function") {
      const result = gen();
      if (Array.isArray(result)) {
        questions.push(...shuffle(result).slice(0, Math.ceil(count / topicKeys.length)));
      } else {
        questions.push(result);
      }
    }
  }
  return shuffle(questions.slice(0, count)).map(toMathQuestion);
}

// GravitySort: pick 5 distinct random numbers from range
export function generateSortRoundSKG3(range: [number, number]): SortRound {
  const [lo, hi] = range;
  const available = Array.from({ length: hi - lo + 1 }, (_, i) => lo + i);
  const sorted = shuffle(available).slice(0, 5).sort((a, b) => a - b);
  const numbers = shuffle([...sorted]);
  return { numbers, sorted };
}

// StarMatch: build question-answer pairs from MCQ questions
export function generateMatchPairsSKG3(questions: MathQuestion[]): MatchPair[] {
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

export const SK_G3_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: {
      en: "Body Systems",
      hu: "Testrendszerek",
      de: "Körpersysteme",
      ro: "Sisteme corporale",
    },
    icon: "🫀",
    color: "#FF6B9D",
    sortRange: [1, 10],
    topicKeys: ["körperaufbau", "ernährungspyramide", "zahnentwicklung"],
    missions: [
      {
        id: "m1",
        gameType: "k3-body-systems-explorer",
        icon: "🔭",
        category: "explore",
        label: {
          en: "Skeleton Explorer",
          hu: "Csontváz felfedezés",
          de: "Skelett erkunden",
          ro: "Explorare schelet",
        },
      },
      {
        id: "m2",
        gameType: "star-match",
        icon: "⭐",
        category: "build",
        label: {
          en: "Food Pyramid",
          hu: "Élelmiszer-piramis",
          de: "Ernährungspyramide",
          ro: "Piramida alimentară",
        },
      },
      {
        id: "m3",
        gameType: "black-hole",
        icon: "🕳️",
        category: "challenge",
        label: {
          en: "Tooth Development",
          hu: "Fog fejlődése",
          de: "Zahnentwicklung",
          ro: "Dezvoltare dinte",
        },
      },
    ],
    svgX: 160,
    svgY: 530,
  },
  {
    id: "i2",
    name: {
      en: "Animal Kingdom",
      hu: "Állatok világa",
      de: "Tierwelt",
      ro: "Regnul animal",
    },
    icon: "🦁",
    color: "#F7DC6F",
    sortRange: [1, 10],
    topicKeys: ["tierklassen", "nahrungsnetze", "schmetterlinge_insekten"],
    missions: [
      {
        id: "m1",
        gameType: "k3-animal-kingdom-explorer",
        icon: "⚡",
        category: "explore",
        label: {
          en: "Animal Classes",
          hu: "Állattípusok",
          de: "Tierklassen",
          ro: "Clase de animale",
        },
      },
      {
        id: "m2",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "build",
        label: {
          en: "Food Networks",
          hu: "Táplálékháló",
          de: "Nahrungsnetze",
          ro: "Rețele alimentare",
        },
      },
      {
        id: "m3",
        gameType: "star-match",
        icon: "⭐",
        category: "challenge",
        label: {
          en: "Butterflies & Insects",
          hu: "Pillangók és rovarok",
          de: "Schmetterlinge & Insekten",
          ro: "Fluturi și insecte",
        },
      },
    ],
    svgX: 90,
    svgY: 440,
  },
  {
    id: "i3",
    name: {
      en: "Forest Life",
      hu: "Erdei élet",
      de: "Waldleben",
      ro: "Viață în pădure",
    },
    icon: "🌲",
    color: "#95E1D3",
    sortRange: [1, 10],
    topicKeys: ["waldtiere_raubtiere", "waldschichten", "haustier_züchtung"],
    missions: [
      {
        id: "m1",
        gameType: "k3-forest-life-explorer",
        icon: "🕳️",
        category: "explore",
        label: {
          en: "Forest Predators",
          hu: "Erdei ragadozók",
          de: "Waldräuber",
          ro: "Prădători de pădure",
        },
      },
      {
        id: "m2",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "build",
        label: {
          en: "Forest Layers",
          hu: "Erdő rétegei",
          de: "Waldschichten",
          ro: "Straturi de pădure",
        },
      },
      {
        id: "m3",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "challenge",
        label: {
          en: "Pet Breeding",
          hu: "Háziállat tenyésztés",
          de: "Haustier-Zucht",
          ro: "Criză animale domestice",
        },
      },
    ],
    svgX: 220,
    svgY: 360,
  },
  {
    id: "i4",
    name: {
      en: "Plants & Pollination",
      hu: "Növények és beporzás",
      de: "Pflanzen & Bestäubung",
      ro: "Plante și polenizare",
    },
    icon: "🌸",
    color: "#76D7C4",
    sortRange: [1, 10],
    topicKeys: ["blüte_bestäubung", "photosynthese_einfach", "pflanzenvermehrung"],
    missions: [
      {
        id: "m1",
        gameType: "k3-pollination-explorer",
        icon: "🔭",
        category: "explore",
        label: {
          en: "Flower Parts",
          hu: "Virág részei",
          de: "Blütenteile",
          ro: "Părți ale florilor",
        },
      },
      {
        id: "m2",
        gameType: "star-match",
        icon: "⭐",
        category: "build",
        label: {
          en: "Photosynthesis",
          hu: "Fotoszintézis",
          de: "Fotosynthese",
          ro: "Fotosinteză",
        },
      },
      {
        id: "m3",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "challenge",
        label: {
          en: "Plant Reproduction",
          hu: "Növényi szaporodás",
          de: "Pflanzenvermehrung",
          ro: "Reproducere plantă",
        },
      },
    ],
    svgX: 100,
    svgY: 280,
  },
  {
    id: "i5",
    name: {
      en: "Weather & Climate",
      hu: "Időjárás és éghajlat",
      de: "Wetter & Klima",
      ro: "Vreme și climat",
    },
    icon: "🌦️",
    color: "#85C1E9",
    sortRange: [1, 10],
    topicKeys: ["wetter_instrumente", "jahreszeiten_klima", "wasserkreislauf_detail"],
    missions: [
      {
        id: "m1",
        gameType: "k3-weather-climate-explorer",
        icon: "⭐",
        category: "explore",
        label: {
          en: "Weather Tools",
          hu: "Időjárási eszközök",
          de: "Wetter-Instrumente",
          ro: "Instrumente meteorologice",
        },
      },
      {
        id: "m2",
        gameType: "black-hole",
        icon: "🕳️",
        category: "build",
        label: {
          en: "Seasons & Climate",
          hu: "Évszakok és éghajlat",
          de: "Jahreszeiten & Klima",
          ro: "Anotimpuri și climat",
        },
      },
      {
        id: "m3",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "challenge",
        label: {
          en: "Water Cycle Detail",
          hu: "Víz körforgása részlet",
          de: "Wasserkreislauf Detail",
          ro: "Ciclu apă detaliu",
        },
      },
    ],
    svgX: 230,
    svgY: 200,
  },
  {
    id: "i6",
    name: {
      en: "Water & Geography",
      hu: "Víz és földrajz",
      de: "Wasser & Geographie",
      ro: "Apă și geografie",
    },
    icon: "🏔️",
    color: "#4ECDC4",
    sortRange: [1, 10],
    topicKeys: ["gewässer_typen", "kompass_himmelsrichtungen", "kartenlesen"],
    missions: [
      {
        id: "m1",
        gameType: "k3-geography-explorer",
        icon: "🔭",
        category: "explore",
        label: {
          en: "Bodies of Water",
          hu: "Vízterek",
          de: "Gewässer-Typen",
          ro: "Tipuri de ape",
        },
      },
      {
        id: "m2",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "build",
        label: {
          en: "Compass Directions",
          hu: "Iránytű irányok",
          de: "Himmelsrichtungen",
          ro: "Direcții cardinale",
        },
      },
      {
        id: "m3",
        gameType: "star-match",
        icon: "⭐",
        category: "challenge",
        label: {
          en: "Map Reading",
          hu: "Térkép olvasása",
          de: "Kartenlesen",
          ro: "Citire hartă",
        },
      },
    ],
    svgX: 120,
    svgY: 120,
  },
  {
    id: "i7",
    name: {
      en: "Technology & Energy",
      hu: "Technológia és energia",
      de: "Technik & Energie",
      ro: "Tehnologie și energie",
    },
    icon: "⚙️",
    color: "#F0B27A",
    sortRange: [1, 10],
    topicKeys: ["einfache_maschinen", "energie_quellen", "verkehrsmittel_g3"],
    missions: [
      {
        id: "m1",
        gameType: "k3-tech-machines-explorer",
        icon: "⭐",
        category: "explore",
        label: {
          en: "Simple Machines",
          hu: "Egyszerű gépek",
          de: "Einfache Maschinen",
          ro: "Mașini simple",
        },
      },
      {
        id: "m2",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "build",
        label: {
          en: "Energy Sources",
          hu: "Energiaforrások",
          de: "Energie-Quellen",
          ro: "Surse de energie",
        },
      },
      {
        id: "m3",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "challenge",
        label: {
          en: "Vehicles",
          hu: "Járművek",
          de: "Verkehrsmittel",
          ro: "Mijloace de transport",
        },
      },
    ],
    svgX: 210,
    svgY: 40,
  },
  {
    id: "i8",
    name: {
      en: "Community & Rules",
      hu: "Közösség és szabályok",
      de: "Gemeinschaft & Regeln",
      ro: "Comunitate și reguli",
    },
    icon: "🏘️",
    color: "#BB8FCE",
    sortRange: [1, 10],
    topicKeys: ["dorf_stadt", "regeln_gesetze", "grundbedürfnisse"],
    missions: [
      {
        id: "m1",
        gameType: "k3-community-town-explorer",
        icon: "🕳️",
        category: "explore",
        label: {
          en: "Village vs City",
          hu: "Községvs város",
          de: "Dorf vs Stadt",
          ro: "Sat vs oraș",
        },
      },
      {
        id: "m2",
        gameType: "star-match",
        icon: "⭐",
        category: "build",
        label: {
          en: "Rules & Laws",
          hu: "Szabályok és törvények",
          de: "Regeln & Gesetze",
          ro: "Reguli și legi",
        },
      },
      {
        id: "m3",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "challenge",
        label: {
          en: "Basic Needs",
          hu: "Alapszükségletek",
          de: "Grundbedürfnisse",
          ro: "Nevoi de bază",
        },
      },
    ],
    svgX: 100,
    svgY: -40,
  },
  {
    id: "i9",
    name: {
      en: "Environment & Review",
      hu: "Környezet és felülvizsgálat",
      de: "Umwelt & Wiederholung",
      ro: "Mediu și recenzie",
    },
    icon: "🌍",
    color: "#F1948A",
    sortRange: [1, 10],
    topicKeys: ["umweltschutz_recycling", "tierklassen", "körperaufbau"],
    missions: [
      {
        id: "m1",
        gameType: "k3-environment-explorer",
        icon: "🔭",
        category: "explore",
        label: {
          en: "Environment Protection",
          hu: "Környezetvédelem",
          de: "Umweltschutz",
          ro: "Protecția mediului",
        },
      },
      {
        id: "m2",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "build",
        label: {
          en: "Recycling",
          hu: "Újrahasznosítás",
          de: "Recycling",
          ro: "Reciclare",
        },
      },
      {
        id: "m3",
        gameType: "star-match",
        icon: "⭐",
        category: "challenge",
        label: {
          en: "Final Concepts",
          hu: "Végső fogalmak",
          de: "Abschluss-Konzepte",
          ro: "Concepte finale",
        },
      },
    ],
    svgX: 190,
    svgY: -100,
  },
];
