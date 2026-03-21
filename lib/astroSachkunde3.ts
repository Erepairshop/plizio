// lib/astroSachkunde3.ts
// AstroSachkunde — Grade 3 island system definitions, progress management, question helpers
// 9 islands following progressive Sachkunde curriculum (environmental science)

import type { IslandDef, L10n, MissionDef, Lang } from "./astromath";
import type { MathQuestion } from "./mathCurriculum";
import type { SachkundeProgress } from "./astroSachkundeInternal";
import { completeMissionSK } from "./astroSachkundeInternal";
import { GN_Generators_Sachkunde as G3_Sachkunde } from "./sachkundeGenerators3";

// ─── Constants ──────────────────────────────────────────────────────

export const SK_G3_SAVE_KEY = "astrosachkunde_g3_v1";

export const CHECKPOINT_G3_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const CHECKPOINT_G3_TOPICS: Record<string, string[]> = {
  test1: ["körperaufbau", "tierklassen", "nahrungsnetze", "schmetterlinge_insekten", "waldtiere_raubtiere"],
  test2: ["blüte_bestäubung", "photosynthese_einfach", "pflanzenvermehrung", "wetter_instrumente", "jahreszeiten_klima"],
  test3: ["gewässer_typen", "kompass_himmelsrichtungen", "kartenlesen", "dorf_stadt", "umweltschutz_recycling"],
};

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

export function isMissionDoneSKG3(missionId: string): boolean {
  const p = loadSKG3Progress();
  return p.completedMissions.includes(missionId);
}

export function isIslandDoneSKG3(islandId: string): boolean {
  const p = loadSKG3Progress();
  return p.completedIslands.includes(islandId);
}

export function isTestDoneSKG3(testId: string): boolean {
  const p = loadSKG3Progress();
  return p.completedTests.includes(testId);
}

export function getIslandStarsSKG3(islandId: string): number {
  const p = loadSKG3Progress();
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
      subtopic: q.subtopic || "sachkunde_g3",
    };
  }
  if (q.type === "true-false") {
    return {
      type: "true-false",
      question: q.question,
      correct: q.correct,
      topic: q.topic || "sachkunde",
      subtopic: q.subtopic || "sachkunde_g3",
    };
  }
  return {
    type: "text",
    question: q.question,
    correct: q.correct || "",
    topic: q.topic || "sachkunde",
    subtopic: q.subtopic || "sachkunde_g3",
  };
}

export function generateSKG3IslandQuestions(island: IslandDef, count = 10): MathQuestion[] {
  const questions: any[] = [];
  for (const topicKey of island.topicKeys) {
    const gen = (G3_Sachkunde as any)[topicKey];
    if (gen && typeof gen === "function") {
      for (let i = 0; i < Math.ceil(count / island.topicKeys.length); i++) {
        const q = gen();
        questions.push(q);
      }
    }
  }
  return shuffle(questions.slice(0, count)).map(toMathQuestion);
}

export function generateSKG3CheckpointQuestions(testId: string, count = 10): MathQuestion[] {
  const topicKeys = CHECKPOINT_G3_TOPICS[testId] ?? [];
  const questions: any[] = [];
  for (const topicKey of topicKeys) {
    const gen = (G3_Sachkunde as any)[topicKey];
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
        gameType: "orbit-quiz",
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
        gameType: "true-false-blitz",
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
        gameType: "black-hole",
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
        gameType: "orbit-quiz",
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
        gameType: "star-match",
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
        gameType: "orbit-quiz",
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
        gameType: "star-match",
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
        gameType: "black-hole",
        icon: "🕳️",
        category: "explore",
        label: {
          en: "Village vs City",
          hu: "Község vs város",
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
        gameType: "orbit-quiz",
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
