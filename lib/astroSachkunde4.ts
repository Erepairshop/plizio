// lib/astroSachkunde4.ts
// AstroSachkunde — Grade 4 island system definitions, progress management, question helpers
// 9 islands following progressive Sachkunde curriculum (environmental science)

import type { IslandDef, L10n, MissionDef, Lang } from "./astromath";
import type { MathQuestion } from "./mathCurriculum";
import type { SachkundeProgress } from "./astroSachkundeInternal";
import { completeMissionSK } from "./astroSachkundeInternal";
import { GN_Generators_Sachkunde as G4_Sachkunde } from "./sachkundeGenerators4";

// ─── Constants ──────────────────────────────────────────────────────

export const SK_G4_SAVE_KEY = "astrosachkunde_g4_v1";

export const CHECKPOINT_G4_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const CHECKPOINT_G4_TOPICS: Record<string, string[]> = {
  test1: ["organe", "skelet_muskulatur", "säugetiere", "vögel", "vogel_zug"],
  test2: ["reptilien_amphibien", "insekten", "ökosysteme", "wald_ökosystem", "pflanzenbau"],
  test3: ["wetter_klima", "wasser", "luft", "steine_mineral", "energie", "stromkreis"],
};

// ─── Progress Management ────────────────────────────────────────────

export function loadSKG4Progress(): SachkundeProgress {
  if (typeof window === "undefined") {
    return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
  }
  const raw = localStorage.getItem(SK_G4_SAVE_KEY);
  if (!raw) {
    return { completedMissions: [], completedIslands: [], completedTests: [], missionStars: {} };
  }
  return JSON.parse(raw);
}

export function saveSKG4Progress(p: SachkundeProgress) {
  if (typeof window !== "undefined") {
    localStorage.setItem(SK_G4_SAVE_KEY, JSON.stringify(p));
  }
}

export function isMissionDoneSKG4(missionId: string): boolean {
  const p = loadSKG4Progress();
  return p.completedMissions.includes(missionId);
}

export function isIslandDoneSKG4(islandId: string): boolean {
  const p = loadSKG4Progress();
  return p.completedIslands.includes(islandId);
}

export function isTestDoneSKG4(testId: string): boolean {
  const p = loadSKG4Progress();
  return p.completedTests.includes(testId);
}

export function getIslandStarsSKG4(islandId: string): number {
  const p = loadSKG4Progress();
  let total = 0;
  for (let i = 1; i <= 3; i++) {
    const missionId = `${islandId}_m${i}`;
    total += p.missionStars[missionId] ?? 0;
  }
  return total;
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
  if (q.type === "mcq") {
    return {
      type: "mcq",
      question: q.question,
      options: q.options,
      correct: q.correct,
      topic: q.topic || "sachkunde",
      subtopic: q.subtopic || "sachkunde_g4",
    };
  }
  if (q.type === "true-false") {
    return {
      type: "true-false",
      question: q.question,
      correct: q.correct,
      topic: q.topic || "sachkunde",
      subtopic: q.subtopic || "sachkunde_g4",
    };
  }
  return {
    type: "text",
    question: q.question,
    correct: q.correct || "",
    topic: q.topic || "sachkunde",
    subtopic: q.subtopic || "sachkunde_g4",
  };
}

export function generateSKG4IslandQuestions(island: IslandDef, count = 10): MathQuestion[] {
  const questions: any[] = [];
  for (const topicKey of island.topicKeys) {
    const gen = (G4_Sachkunde as any)[topicKey];
    if (gen && typeof gen === "function") {
      for (let i = 0; i < Math.ceil(count / island.topicKeys.length); i++) {
        const q = gen();
        questions.push(q);
      }
    }
  }
  return shuffle(questions.slice(0, count)).map(toMathQuestion);
}

export function generateSKG4CheckpointQuestions(testId: string, count = 10): MathQuestion[] {
  const topicKeys = CHECKPOINT_G4_TOPICS[testId] ?? [];
  const questions: any[] = [];
  for (const topicKey of topicKeys) {
    const gen = (G4_Sachkunde as any)[topicKey];
    if (gen && typeof gen === "function") {
      for (let i = 0; i < Math.ceil(count / topicKeys.length); i++) {
        const q = gen();
        questions.push(q);
      }
    }
  }
  return shuffle(questions.slice(0, count)).map(toMathQuestion);
}

// ─── Island Definitions ─────────────────────────────────────────────

export const SK_G4_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: {
      en: "Human Body",
      hu: "Emberi test",
      de: "Menschlicher Körper",
      ro: "Corp uman",
    },
    icon: "🫁",
    color: "#FF6B9D",
    sortRange: [1, 10],
    topicKeys: ["organe", "skelet_muskulatur", "gesundheit_advanced"],
    missions: [
      {
        id: "m1",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "explore",
        label: {
          en: "Organ Systems",
          hu: "Szervrendszerek",
          de: "Organsysteme",
          ro: "Sisteme de organe",
        },
      },
      {
        id: "m2",
        gameType: "black-hole",
        icon: "🕳️",
        category: "build",
        label: {
          en: "Skeleton & Muscles",
          hu: "Csontváz és izmok",
          de: "Skelett & Muskeln",
          ro: "Schelet și mușchi",
        },
      },
      {
        id: "m3",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "challenge",
        label: {
          en: "Health & Wellness",
          hu: "Egészség és wellness",
          de: "Gesundheit & Wohlbefinden",
          ro: "Sănătate și bine-fiind",
        },
      },
    ],
    svgX: 160,
    svgY: 530,
  },
  {
    id: "i2",
    name: {
      en: "Mammals & Birds",
      hu: "Emlősök és madarak",
      de: "Säugetiere & Vögel",
      ro: "Mamifere și păsări",
    },
    icon: "🐘",
    color: "#F7DC6F",
    sortRange: [1, 10],
    topicKeys: ["säugetiere", "vögel", "vogel_zug"],
    missions: [
      {
        id: "m1",
        gameType: "star-match",
        icon: "⭐",
        category: "explore",
        label: {
          en: "Mammals",
          hu: "Emlősök",
          de: "Säugetiere",
          ro: "Mamifere",
        },
      },
      {
        id: "m2",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "build",
        label: {
          en: "Bird Features",
          hu: "Madár jellemzők",
          de: "Vogel-Merkmale",
          ro: "Caracteristici pasare",
        },
      },
      {
        id: "m3",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "challenge",
        label: {
          en: "Bird Migration",
          hu: "Madárvándorlás",
          de: "Vogelzug",
          ro: "Migrație păsări",
        },
      },
    ],
    svgX: 90,
    svgY: 440,
  },
  {
    id: "i3",
    name: {
      en: "Reptiles & Insects",
      hu: "Hüllők és rovarok",
      de: "Reptilien & Insekten",
      ro: "Reptile și insecte",
    },
    icon: "🦎",
    color: "#95E1D3",
    sortRange: [1, 10],
    topicKeys: ["reptilien_amphibien", "insekten", "ernährungskette"],
    missions: [
      {
        id: "m1",
        gameType: "black-hole",
        icon: "🕳️",
        category: "explore",
        label: {
          en: "Reptiles & Amphibians",
          hu: "Hüllők és kétéltűek",
          de: "Reptilien & Amphibien",
          ro: "Reptile și amfibieni",
        },
      },
      {
        id: "m2",
        gameType: "star-match",
        icon: "⭐",
        category: "build",
        label: {
          en: "Insects",
          hu: "Rovarok",
          de: "Insekten",
          ro: "Insecte",
        },
      },
      {
        id: "m3",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "challenge",
        label: {
          en: "Food Chains",
          hu: "Táplálékláncok",
          de: "Nahrungsketten",
          ro: "Lanțuri alimentare",
        },
      },
    ],
    svgX: 220,
    svgY: 360,
  },
  {
    id: "i4",
    name: {
      en: "Ecosystems",
      hu: "Ökoszisztémák",
      de: "Ökosysteme",
      ro: "Ecosisteme",
    },
    icon: "🌳",
    color: "#76D7C4",
    sortRange: [1, 10],
    topicKeys: ["ökosysteme", "wald_ökosystem", "pflanzenbau"],
    missions: [
      {
        id: "m1",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "explore",
        label: {
          en: "Ecosystem Basics",
          hu: "Ökoszisztéma alapok",
          de: "Ökosystem-Grundlagen",
          ro: "Baze ecosistem",
        },
      },
      {
        id: "m2",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "build",
        label: {
          en: "Forest Ecosystem",
          hu: "Erdei ökoszisztéma",
          de: "Wald-Ökosystem",
          ro: "Ecosistem pădure",
        },
      },
      {
        id: "m3",
        gameType: "star-match",
        icon: "⭐",
        category: "challenge",
        label: {
          en: "Plant Cultivation",
          hu: "Növénytermesztés",
          de: "Pflanzenbau",
          ro: "Cultivare plante",
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
    icon: "🌡️",
    color: "#85C1E9",
    sortRange: [1, 10],
    topicKeys: ["wetter_klima", "klima", "jahreszeiten_natur"],
    missions: [
      {
        id: "m1",
        gameType: "black-hole",
        icon: "🕳️",
        category: "explore",
        label: {
          en: "Weather Patterns",
          hu: "Időjárási minták",
          de: "Wettermuster",
          ro: "Modele meteo",
        },
      },
      {
        id: "m2",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "build",
        label: {
          en: "Climate Zones",
          hu: "Éghajlati övezetek",
          de: "Klimazonen",
          ro: "Zone climatice",
        },
      },
      {
        id: "m3",
        gameType: "star-match",
        icon: "⭐",
        category: "challenge",
        label: {
          en: "Seasons & Nature",
          hu: "Évszakok és természet",
          de: "Jahreszeiten & Natur",
          ro: "Anotimpuri și natură",
        },
      },
    ],
    svgX: 230,
    svgY: 200,
  },
  {
    id: "i6",
    name: {
      en: "Earth & Water",
      hu: "Föld és víz",
      de: "Erde & Wasser",
      ro: "Pământ și apă",
    },
    icon: "🌊",
    color: "#4ECDC4",
    sortRange: [1, 10],
    topicKeys: ["wasser", "luft", "steine_mineral"],
    missions: [
      {
        id: "m1",
        gameType: "star-match",
        icon: "⭐",
        category: "explore",
        label: {
          en: "Water Properties",
          hu: "Víz tulajdonságai",
          de: "Wassereigenschaften",
          ro: "Proprietăți apă",
        },
      },
      {
        id: "m2",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "build",
        label: {
          en: "Air & Atmosphere",
          hu: "Levegő és légkör",
          de: "Luft & Atmosphäre",
          ro: "Aer și atmosferă",
        },
      },
      {
        id: "m3",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "challenge",
        label: {
          en: "Rocks & Minerals",
          hu: "Kőzetek és ásványok",
          de: "Steine & Mineralien",
          ro: "Pietre și minerale",
        },
      },
    ],
    svgX: 120,
    svgY: 120,
  },
  {
    id: "i7",
    name: {
      en: "Energy & Circuits",
      hu: "Energia és áramkörök",
      de: "Energie & Stromkreise",
      ro: "Energie și circuite",
    },
    icon: "⚡",
    color: "#F0B27A",
    sortRange: [1, 10],
    topicKeys: ["energie", "stromkreis"],
    missions: [
      {
        id: "m1",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "explore",
        label: {
          en: "Energy Forms",
          hu: "Energia formák",
          de: "Energieformen",
          ro: "Forme de energie",
        },
      },
      {
        id: "m2",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "build",
        label: {
          en: "Energy Conversion",
          hu: "Energia átalakulása",
          de: "Energieumwandlung",
          ro: "Conversie energie",
        },
      },
      {
        id: "m3",
        gameType: "star-match",
        icon: "⭐",
        category: "challenge",
        label: {
          en: "Electric Circuits",
          hu: "Elektromos áramkörök",
          de: "Stromkreise",
          ro: "Circuite electrice",
        },
      },
    ],
    svgX: 210,
    svgY: 40,
  },
  {
    id: "i8",
    name: {
      en: "Germany & Europe",
      hu: "Németország és Európa",
      de: "Deutschland & Europa",
      ro: "Germania și Europa",
    },
    icon: "🗺️",
    color: "#BB8FCE",
    sortRange: [1, 10],
    topicKeys: ["deutsche_bundesländer", "europa"],
    missions: [
      {
        id: "m1",
        gameType: "black-hole",
        icon: "🕳️",
        category: "explore",
        label: {
          en: "German States",
          hu: "Német államok",
          de: "Deutsche Bundesländer",
          ro: "State-uri germane",
        },
      },
      {
        id: "m2",
        gameType: "orbit-quiz",
        icon: "🔭",
        category: "build",
        label: {
          en: "European Countries",
          hu: "Európai országok",
          de: "Europäische Länder",
          ro: "Țări europene",
        },
      },
      {
        id: "m3",
        gameType: "star-match",
        icon: "⭐",
        category: "challenge",
        label: {
          en: "Geography Quiz",
          hu: "Földrajz kvíz",
          de: "Geographie-Quiz",
          ro: "Chestionar geografie",
        },
      },
    ],
    svgX: 100,
    svgY: -40,
  },
  {
    id: "i9",
    name: {
      en: "Grand Finale",
      hu: "Nagyon finale",
      de: "Großes Finale",
      ro: "Marea finală",
    },
    icon: "🏆",
    color: "#F1948A",
    sortRange: [1, 10],
    topicKeys: ["organe", "säugetiere", "ökosysteme", "energie"],
    missions: [
      {
        id: "m1",
        gameType: "star-match",
        icon: "⭐",
        category: "explore",
        label: {
          en: "Body Review",
          hu: "Test felülvizsgálat",
          de: "Körper-Wiederholung",
          ro: "Recenzie corp",
        },
      },
      {
        id: "m2",
        gameType: "true-false-blitz",
        icon: "⚡",
        category: "build",
        label: {
          en: "Animals & Nature",
          hu: "Állatok és természet",
          de: "Tiere & Natur",
          ro: "Animale și natură",
        },
      },
      {
        id: "m3",
        gameType: "black-hole",
        icon: "🕳️",
        category: "challenge",
        label: {
          en: "Complete Challenge",
          hu: "Teljes kihívás",
          de: "Abschluss-Herausforderung",
          ro: "Provocare completă",
        },
      },
    ],
    svgX: 190,
    svgY: -100,
  },
];
