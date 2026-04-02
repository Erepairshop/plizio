// ─── BIOLOGIE CURRICULUM (Klasse 5-8) ─────────────────────────────────────
// Struktúra az englishCurriculum.ts mintájára
// Klasse 5: Wirbeltiere, Pflanzen, Mein Körper, Sinnesorgane, Ernährung
// Generátorok: biologieGenerators.ts-ben

import type { CurriculumTheme, CurriculumQuestion } from "./curriculumTypes";
import type { TestGradeMark } from "./languageTestTypes";

export type BiologieQuestion = CurriculumQuestion;
export type BiologieTheme = CurriculumTheme;

// ─── KLASSE 5 CURRICULUM ──────────────────────────────────────────────────

const K5: BiologieTheme[] = [
  {
    id: "wirbeltiere",
    name: "Wirbeltiere (Gerinces Állatok)",
    icon: "🐟",
    color: "#4CAF50",
    subtopics: [
      {
        id: "fish",
        name: "Fische",
        questions: [
          { type: "mcq", topic: "wirbeltiere", subtopic: "fish", question: "Welche Struktur haben Fische zum Atmen?", options: ["Branchien", "Lungen", "Tracheen", "Kiemensäcke"], correct: 0 },
        ],
      },
      {
        id: "amphibian",
        name: "Lurchok (Amphibien)",
        questions: [
          { type: "mcq", topic: "wirbeltiere", subtopic: "amphibian", question: "Welche Metamorphose durchlaufen Amphibien?", options: ["Wassertier → Landtier", "Landtier → Wassertier", "Keine Änderung", "Farbwechsel"], correct: 0 },
        ],
      },
      {
        id: "reptile",
        name: "Hüllők (Reptilien)",
        questions: [
          { type: "mcq", topic: "wirbeltiere", subtopic: "reptile", question: "Womit ist die Haut von Reptilien bedeckt?", options: ["Schuppen", "Federn", "Haaren", "Mucus"], correct: 0 },
        ],
      },
      {
        id: "bird",
        name: "Madarak (Vögel)",
        questions: [
          { type: "mcq", topic: "wirbeltiere", subtopic: "bird", question: "Welche Anpassung ermöglicht Vögeln zu fliegen?", options: ["Hohlknochen", "Starke Muskeln", "Große Augen", "Wasserresistenz"], correct: 0 },
        ],
      },
      {
        id: "mammal",
        name: "Emlősök (Säugetiere)",
        questions: [
          { type: "mcq", topic: "wirbeltiere", subtopic: "mammal", question: "Welches Merkmal haben alle Säugetiere?", options: ["Haare", "Schuppen", "Federn", "Panzer"], correct: 0 },
        ],
      },
      {
        id: "vertebrate_comparison",
        name: "Összehasonlítás",
        questions: [
          { type: "mcq", topic: "wirbeltiere", subtopic: "vertebrate_comparison", question: "Welches ist ein Wirbellose Tier?", options: ["Insekt", "Fisch", "Vogel", "Säugetier"], correct: 0 },
        ],
      },
    ],
  },
  {
    id: "pflanzen",
    name: "Pflanzen (Növények)",
    icon: "🌱",
    color: "#2196F3",
    subtopics: [
      {
        id: "plant_parts",
        name: "Növényi Szervek",
        questions: [
          { type: "mcq", topic: "pflanzen", subtopic: "plant_parts", question: "Welches Organ führt die Fotosynthese durch?", options: ["Blatt", "Wurzel", "Stamm", "Blüte"], correct: 0 },
        ],
      },
      {
        id: "photosynthesis",
        name: "Fotoszintézis Alapok",
        questions: [
          { type: "mcq", topic: "pflanzen", subtopic: "photosynthesis", question: "Was ist die Hauptfunktion der Fotosynthese?", options: ["Energieproduktion", "Wasserspeicherung", "Stützung", "Fortpflanzung"], correct: 0 },
        ],
      },
      {
        id: "flower_structure",
        name: "Virág Szerkezete",
        questions: [
          { type: "mcq", topic: "pflanzen", subtopic: "flower_structure", question: "Welcher Teil der Blüte produziert Pollen?", options: ["Staubgefäße", "Blütenkelch", "Krone", "Fruchtknoten"], correct: 0 },
        ],
      },
      {
        id: "plant_reproduction",
        name: "Szaporodás",
        questions: [
          { type: "mcq", topic: "pflanzen", subtopic: "plant_reproduction", question: "Wie beginnt das Leben einer neuen Pflanze?", options: ["Samenkeimung", "Pollination", "Verblühen", "Verwelkung"], correct: 0 },
        ],
      },
      {
        id: "plant_types",
        name: "Növénytípusok",
        questions: [
          { type: "mcq", topic: "pflanzen", subtopic: "plant_types", question: "Welche ist eine nicht blühende Pflanze?", options: ["Moos", "Rose", "Weizen", "Apfelbaum"], correct: 0 },
        ],
      },
    ],
  },
  {
    id: "koerper",
    name: "Mein Körper (Testünk)",
    icon: "🦴",
    color: "#FF9800",
    subtopics: [
      {
        id: "skeleton",
        name: "Csontváz",
        questions: [
          { type: "mcq", topic: "koerper", subtopic: "skeleton", question: "Welcher Knochen schützt das Gehirn?", options: ["Schädel", "Wirbelsäule", "Rippen", "Becken"], correct: 0 },
        ],
      },
      {
        id: "muscles",
        name: "Izmok (Muskeln)",
        questions: [
          { type: "mcq", topic: "koerper", subtopic: "muscles", question: "Welcher Muskel pumpt das Blut?", options: ["Herz", "Bizeps", "Zwerchfell", "Trizeps"], correct: 0 },
        ],
      },
      {
        id: "skin",
        name: "Bőr",
        questions: [
          { type: "mcq", topic: "koerper", subtopic: "skin", question: "Welche ist die Hauptfunktion der Haut?", options: ["Schutz", "Bewegung", "Verdauung", "Sauerstofftransport"], correct: 0 },
        ],
      },
      {
        id: "body_systems",
        name: "Testrendszerek",
        questions: [
          { type: "mcq", topic: "koerper", subtopic: "body_systems", question: "Welches System transportiert Sauerstoff im Körper?", options: ["Kreislauf", "Nerven", "Verdauung", "Hormon"], correct: 0 },
        ],
      },
    ],
  },
  {
    id: "sinnesorgane",
    name: "Sinnesorgane (Érzékszervek)",
    icon: "👁️",
    color: "#E91E63",
    subtopics: [
      {
        id: "eye",
        name: "Szem",
        questions: [
          { type: "mcq", topic: "sinnesorgane", subtopic: "eye", question: "Welcher Teil des Auges nimmt Licht auf?", options: ["Netzhaut", "Iris", "Linse", "Hornhaut"], correct: 0 },
        ],
      },
      {
        id: "ear",
        name: "Fül",
        questions: [
          { type: "mcq", topic: "sinnesorgane", subtopic: "ear", question: "Wo befinden sich die Hörzellen?", options: ["Innenohr", "Außenohr", "Mittelohr", "Trommelfell"], correct: 0 },
        ],
      },
      {
        id: "nose",
        name: "Orr (Nase)",
        questions: [
          { type: "mcq", topic: "sinnesorgane", subtopic: "nose", question: "Welches Sinnesorgan ermöglicht Geruchssinn?", options: ["Nase", "Ohr", "Zunge", "Haut"], correct: 0 },
        ],
      },
      {
        id: "tongue",
        name: "Nyelv (Zunge)",
        questions: [
          { type: "mcq", topic: "sinnesorgane", subtopic: "tongue", question: "Welche Strukturen ermöglichen den Geschmackssinn?", options: ["Geschmacksknospen", "Smakmoleküle", "Speichel", "Papillen"], correct: 0 },
        ],
      },
      {
        id: "skin_sense",
        name: "Bőr-érzékelés (Tastsinne)",
        questions: [
          { type: "mcq", topic: "sinnesorgane", subtopic: "skin_sense", question: "Welcher Rezeptor im Körper ermöglicht Berührungsempfindung?", options: ["Mechanorezeptor", "Fotorezeptor", "Chemorezeptor", "Thermorezeptor"], correct: 0 },
        ],
      },
    ],
  },
  {
    id: "ernaehrung",
    name: "Ernährung & Verdauung",
    icon: "🍎",
    color: "#9C27B0",
    subtopics: [
      {
        id: "nutrients",
        name: "Tápanyagok",
        questions: [
          { type: "mcq", topic: "ernaehrung", subtopic: "nutrients", question: "Welches Nährstoff liefert Energie?", options: ["Kohlenhydrate", "Vitamine", "Mineralstoffe", "Wasser"], correct: 0 },
        ],
      },
      {
        id: "digestive_system",
        name: "Emésztőrendszer",
        questions: [
          { type: "mcq", topic: "ernaehrung", subtopic: "digestive_system", question: "Wo wird die meiste Nahrung verdaut?", options: ["Dünndarm", "Magen", "Mund", "Dickdarm"], correct: 0 },
        ],
      },
      {
        id: "digestive_organs",
        name: "Emésztési Szervek",
        questions: [
          { type: "mcq", topic: "ernaehrung", subtopic: "digestive_organs", question: "Welches Organ produziert Verdauungsenzyme?", options: ["Bauchspeicheldrüse", "Leber", "Magen", "Mundspeicheldrüse"], correct: 0 },
        ],
      },
      {
        id: "healthy_diet",
        name: "Egészséges Táplálkozás",
        questions: [
          { type: "mcq", topic: "ernaehrung", subtopic: "healthy_diet", question: "Welcher Nährstoff ist für starke Knochen wichtig?", options: ["Kalzium", "Eisen", "Natrium", "Kalium"], correct: 0 },
        ],
      },
    ],
  },
];

export const K5_CURRICULUM = K5;

// ─── GENERATOR MAP PLACEHOLDER (biologieGenerators.ts-ből importálva) ──────

export type BiologieGeneratorMap = Record<
  number,
  Record<string, Record<string, (seed?: number, lang?: string) => BiologieQuestion[]>>
>;

export let BIOLOGIE_GENERATOR_MAP: BiologieGeneratorMap = {};

export function setBiologieGeneratorMap(map: BiologieGeneratorMap) {
  BIOLOGIE_GENERATOR_MAP = map;
}

// ─── GET QUESTIONS FUNCTION (English Test mintájára) ──────────────────────

export function getK5Questions(
  selectedSubtopicIds: string[],
  count = 10,
  lang = "de"
): BiologieQuestion[] {
  const themes = K5_CURRICULUM;
  const pool: BiologieQuestion[] = [];
  const generators = BIOLOGIE_GENERATOR_MAP[5];

  if (!generators) {
    // Fallback: csak a hardcoded questions-t használ
    for (const theme of themes) {
      for (const sub of theme.subtopics) {
        if (selectedSubtopicIds.includes(sub.id)) {
          pool.push(...sub.questions);
        }
      }
    }
    return pool.slice(0, count);
  }

  // Generator-alapú
  for (const theme of themes) {
    for (const sub of theme.subtopics) {
      if (selectedSubtopicIds.includes(sub.id)) {
        // MCQ generátor
        let generatorFn = generators[theme.id]?.[sub.id];
        if (!generatorFn) {
          for (const themeGens of Object.values(generators)) {
            if (themeGens[sub.id]) { generatorFn = themeGens[sub.id]; break; }
          }
        }
        if (generatorFn && typeof generatorFn === "function") {
          pool.push(...(generatorFn as (seed?: number, lang?: string) => BiologieQuestion[])(Math.floor(Math.random() * 1000000), lang));
        } else {
          pool.push(...sub.questions);
        }

        // Typing generátor
        const typingKey = sub.id + "_typing";
        let typingFn = generators[theme.id]?.[typingKey];
        if (!typingFn) {
          for (const themeGens of Object.values(generators)) {
            if (themeGens[typingKey]) { typingFn = themeGens[typingKey]; break; }
          }
        }
        if (typingFn) {
          pool.push(...typingFn(Math.floor(Math.random() * 1000000), lang));
        }
      }
    }
  }

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count);
}

// ─── GRADING ──────────────────────────────────────────────────────────────

export function calculateBiologieMark(pct: number): TestGradeMark {
  if (pct >= 95) return { note: "1", label: "Sehr gut",    color: "#FFD700", emoji: "🌟" };
  if (pct >= 80) return { note: "2", label: "Gut",         color: "#00FF88", emoji: "😊" };
  if (pct >= 65) return { note: "3", label: "Befriedigend", color: "#00D4FF", emoji: "🙂" };
  if (pct >= 50) return { note: "4", label: "Ausreichend", color: "#FF9500", emoji: "😐" };
  if (pct >= 25) return { note: "5", label: "Mangelhaft",  color: "#FF6B00", emoji: "😅" };
  return             { note: "6", label: "Ungenügend",     color: "#FF4444", emoji: "😟" };
}
