// ─── BIOLOGIE CURRICULUM (Klasse 5-8) ─────────────────────────────────────
// Німецька біологія тест структура
// Klasse 5: Wirbeltiere, Pflanzen, Mein Körper, Sinnesorgane, Ernährung

export type BiologieQuestion =
  | BiologieMCQ
  | BiologieTyping;

export interface BiologieMCQ {
  type: "mcq";
  topic: string;
  subtopic: string;
  question: string;
  options: string[];
  correct: number;
}

export interface BiologieTyping {
  type: "typing";
  topic: string;
  subtopic: string;
  question: string;
  answer: string | string[];
}

// ─── KLASSE 5 CURRICULUM ──────────────────────────────────────────────────

const K5_TOPICS = {
  wirbeltiere: {
    name: "Wirbeltiere (Gerinces Állatok)",
    icon: "🐟",
    color: "#4CAF50",
    subtopics: [
      { id: "fish", name: "Fische", description: "Halak - szervek, lebensraum" },
      { id: "amphibian", name: "Lurchok (Amphibien)", description: "Kétéltűek - átalakulás" },
      { id: "reptile", name: "Hüllők (Reptilien)", description: "Hüllők - szervezet" },
      { id: "bird", name: "Madarak (Vögel)", description: "Madarak - röpülés, szervek" },
      { id: "mammal", name: "Emlősök (Säugetiere)", description: "Emlősök - jellemzők" },
      { id: "vertebrate_comparison", name: "Összehasonlítás", description: "Gerinces állatok összehasonlítása" },
    ]
  },
  pflanzen: {
    name: "Pflanzen (Növények)",
    icon: "🌱",
    color: "#2196F3",
    subtopics: [
      { id: "plant_parts", name: "Növényi Szervek", description: "Gyökér, szár, levél, virág" },
      { id: "photosynthesis", name: "Fotoszintézis Alapok", description: "Fotoszintézis - fény, víz, CO2" },
      { id: "flower_structure", name: "Virág Szerkezete", description: "Virág részei - beporzás" },
      { id: "plant_reproduction", name: "Szaporodás", description: "Mag, csírázás, szaporodás" },
      { id: "plant_types", name: "Növénytípusok", description: "Zöldnövények, virágos, fás" },
    ]
  },
  koerper: {
    name: "Mein Körper (Testünk)",
    icon: "🦴",
    color: "#FF9800",
    subtopics: [
      { id: "skeleton", name: "Csontváz", description: "Csontok, izomzat, mozgás" },
      { id: "muscles", name: "Izmok (Muskeln)", description: "Izom típusok, működés" },
      { id: "skin", name: "Bőr", description: "Bőr szerkezete, funkciói" },
      { id: "body_systems", name: "Testrendszerek", description: "Keringési, légzési, emésztési" },
    ]
  },
  sinnesorgane: {
    name: "Sinnesorgane (Érzékszervek)",
    icon: "👁️",
    color: "#E91E63",
    subtopics: [
      { id: "eye", name: "Szem", description: "Szem szerkezete, látás" },
      { id: "ear", name: "Fül", description: "Fül szerkezete, hallás" },
      { id: "nose", name: "Orr (Nase)", description: "Szaglás, olfaktórium" },
      { id: "tongue", name: "Nyelv (Zunge)", description: "Ízlelés, ízpapillák" },
      { id: "skin_sense", name: "Bőr-érzékelés (Tastsinne)", description: "Tapintás, hő, fájdalom" },
    ]
  },
  ernaehrung: {
    name: "Ernährung & Verdauung",
    icon: "🍎",
    color: "#9C27B0",
    subtopics: [
      { id: "nutrients", name: "Tápanyagok", description: "Fehérje, szén, zsír, vitamin" },
      { id: "digestive_system", name: "Emésztőrendszer", description: "Szájüregpótlás → kiürülés" },
      { id: "digestive_organs", name: "Emésztési Szervek", description: "Gyomor, hasnyálmirigy, máj" },
      { id: "healthy_diet", name: "Egészséges Táplálkozás", description: "Étrend, kalóriaszükséglet" },
    ]
  },
};

export const K5_CURRICULUM = {
  grade: 5,
  name: "Biologie Klasse 5",
  description: "Wirbeltiere, Pflanzen, Körper, Sinne, Ernährung",
  topics: K5_TOPICS,

  // Subtopic ID-k listaként (rövidítésként a generátoroknak)
  subtopicIds: [
    // Wirbeltiere
    "fish", "amphibian", "reptile", "bird", "mammal", "vertebrate_comparison",
    // Pflanzen
    "plant_parts", "photosynthesis", "flower_structure", "plant_reproduction", "plant_types",
    // Körper
    "skeleton", "muscles", "skin", "body_systems",
    // Sinnesorgane
    "eye", "ear", "nose", "tongue", "skin_sense",
    // Ernährung
    "nutrients", "digestive_system", "digestive_organs", "healthy_diet",
  ]
};

export function getK5Topics() {
  return K5_TOPICS;
}

export function getK5SubtopicName(subtopicId: string): string {
  for (const topicKey in K5_TOPICS) {
    const topic = K5_TOPICS[topicKey as keyof typeof K5_TOPICS];
    const sub = topic.subtopics.find((s) => s.id === subtopicId);
    if (sub) return sub.name;
  }
  return subtopicId;
}
