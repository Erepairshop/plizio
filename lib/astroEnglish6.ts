// lib/astroEnglish6.ts — AstroEnglish K6 island definitions & progress
import type { IslandDef, Lang, MathQuestion, EnglishProgress } from "./astroEnglish";
import type { MissionDef, MissionCategory } from "./astromath";
import {
  loadEnglishProgress, saveEnglishProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateEnglishIslandQuestions, generateEnglishCheckpointQuestions,
} from "./astroEnglish";

// Re-export types for page imports
export type { IslandDef, Lang, MathQuestion, EnglishProgress, MissionDef, MissionCategory };

export const K6_SAVE_KEY = "astroenglish_k6_v1";

export const K6_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K6_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "pronoun_cases_g6", "intensive_pronouns_g6",
    "pronoun_agreement_g6", "pronoun_shifts_g6",
  ],
  test2: [
    "sentence_patterns_g6", "clauses_g6",
    "complex_sentences_g6", "relative_clauses_g6",
    "word_formation_g6", "prefixes_suffixes_g6", "root_words_g6",
  ],
  test3: [
    "synonyms_homographs_g6", "analogies_g6", "connotation_g6",
    "academic_vocab_g6", "greek_latin_g6",
    "commas_dashes_g6", "punct_effect_g6",
    "formal_writing_g6", "rhetorical_g6",
  ],
};

export const K6_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Pronoun Peninsula", hu: "Névmás-félsziget", de: "Pronomen-Halbinsel", ro: "Peninsulă pronumelor" },
    icon: "👤", color: "#FF2D78", sortRange: [1, 20],
    topicKeys: ["pronoun_cases_g6", "intensive_pronouns_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap",  icon: "🪐", label: { en: "Fill Pronoun Cases",     hu: "Töltsd ki a névmás eseteket",       de: "Pronomen Fälle einfügen",     ro: "Completează cazuri pronume"       } },
      { id: "m2", category: "build",     gameType: "gravity-sort",  icon: "🪨", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",      hu: "Villámkör",        de: "Blitzrunde",        ro: "Rundă rapidá"       } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Pronoun Precision", hu: "Névmás-precizitás", de: "Pronomen-Präzision", ro: "Precizia pronumelor" },
    icon: "🎯", color: "#3B82F6", sortRange: [1, 20],
    topicKeys: ["pronoun_agreement_g6", "pronoun_shifts_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "category-rush",  icon: "🪐", label: { en: "Sort Pronoun Types",   hu: "Rendezd a névmás típusokat",      de: "Pronomentypen sortieren",    ro: "Sortează tipuri pronume"         } },
      { id: "m2", category: "build",     gameType: "gravity-sort",  icon: "🪨", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",      hu: "Fekete lyuk",       de: "Schwarzes Loch",    ro: "Gaură neagră"       } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Sentence Structures", hu: "Mondatszerkezetek", de: "Satzstrukturen", ro: "Structuri de propoziții" },
    icon: "🏗️", color: "#10B981", sortRange: [1, 20],
    topicKeys: ["sentence_patterns_g6", "clauses_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sentence-builder",  icon: "🪐", label: { en: "Build Complex",    hu: "Építs összetett mondatokat",       de: "Komplexe bauen",         ro: "Construiți complex"    } },
      { id: "m2", category: "build",     gameType: "gravity-sort",  icon: "🪨", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "⭐", label: { en: "Speed Round",      hu: "Villámkör",        de: "Blitzrunde",        ro: "Rundă rapidă"       } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Complex Clause Cove", hu: "Összetett-záradék-öböl", de: "Komplexe-Klausel-Bucht", ro: "Golfurile clauzelor complexe" },
    icon: "🔀", color: "#F59E0B", sortRange: [1, 20],
    topicKeys: ["complex_sentences_g6", "relative_clauses_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "grammar-match",  icon: "🪐", label: { en: "Match Clauses",      hu: "Párosítsd a záradékokat",      de: "Klauseln zuordnen",      ro: "Potrivește clauze"        } },
      { id: "m2", category: "build",     gameType: "gravity-sort",  icon: "🪨", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "speed-round",  icon: "⚡", label: { en: "Black Hole",      hu: "Fekete lyuk",       de: "Schwarzes Loch",    ro: "Gaură neagră"       } },
    ],
    svgX: 100, svgY: 280,
  },
  {
    id: "i5",
    name: { en: "Word Builder Bay", hu: "Szóépítő-öböl", de: "Wortbau-Bucht", ro: "Golfurile formării cuvintelor" },
    icon: "🔨", color: "#6366F1", sortRange: [1, 20],
    topicKeys: ["word_formation_g6", "prefixes_suffixes_g6", "root_words_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "word-sort",  icon: "🪐", label: { en: "Sort by Word Parts",  hu: "Rendezd a szórészek szerint",    de: "Nach Wortteilen sortieren",    ro: "Sortează după cuvinte"       } },
      { id: "m2", category: "build",     gameType: "gravity-sort",  icon: "🪨", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { en: "Speed Round",      hu: "Villámkör",        de: "Blitzrunde",        ro: "Rundă rapidá"       } },
    ],
    svgX: 230, svgY: 200,
  },
  {
    id: "i6",
    name: { en: "Vocabulary Vista", hu: "Szókincs-kilátás", de: "Wortschatz-Aussicht", ro: "Panorama vocabular" },
    icon: "📖", color: "#E879F9", sortRange: [1, 20],
    topicKeys: ["synonyms_homographs_g6", "analogies_g6", "connotation_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "grammar-match",  icon: "🪐", label: { en: "Match Analogies",      hu: "Párosítsd az analógiákat",     de: "Analogien zuordnen",   ro: "Potrivește analogii"     } },
      { id: "m2", category: "build",     gameType: "gravity-sort",  icon: "🪨", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz", icon: "⭐", label: { en: "Gravity Sort",    hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
    ],
    svgX: 90, svgY: 120,
  },
  {
    id: "i7",
    name: { en: "Academic Harbor", hu: "Tudományos-kikötő", de: "Akademischer-Hafen", ro: "Portul academic" },
    icon: "🎓", color: "#00D4FF", sortRange: [1, 20],
    topicKeys: ["academic_vocab_g6", "greek_latin_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap",  icon: "🪐", label: { en: "Fill Academic",    hu: "Töltsd ki az akadémiai szavakat",   de: "Akademisch ausfüllen",   ro: "Completează academic"      } },
      { id: "m2", category: "build",     gameType: "gravity-sort",  icon: "🪨", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",      hu: "Villámkör",        de: "Blitzrunde",        ro: "Rundă rapidá"       } },
    ],
    svgX: 220, svgY: 40,
  },
  {
    id: "i8",
    name: { en: "Punctuation Peak", hu: "Központozás-csúcs", de: "Interpunktions-Gipfel", ro: "Vârful punctuației" },
    icon: "✒️", color: "#FF6B6B", sortRange: [1, 20],
    topicKeys: ["commas_dashes_g6", "punct_effect_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap", icon: "🪐", label: { en: "Fill Punctuation", hu: "Töltsd ki a jeleket",   de: "Satzzeichen einfügen", ro: "Completează punctuația"    } },
      { id: "m2", category: "build",     gameType: "gravity-sort",  icon: "🪨", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",      hu: "Fekete lyuk",       de: "Schwarzes Loch",    ro: "Gaură neagră"       } },
    ],
    svgX: 100, svgY: -40,
  },
  {
    id: "i9",
    name: { en: "Rhetoric Reef", hu: "Retorika-zátony", de: "Rhetorik-Riff", ro: "Reciful retoricii" },
    icon: "🗣️", color: "#FFD700", sortRange: [1, 20],
    topicKeys: ["formal_writing_g6", "rhetorical_g6"],
    missions: [
      { id: "m1", category: "explore",   gameType: "category-rush",  icon: "🪐", label: { en: "Sort Formal/Informal",    hu: "Rendezd: formális/informális",     de: "Formal/Informal sortieren",     ro: "Sortează: formal/informal"      } },
      { id: "m2", category: "build",     gameType: "gravity-sort",  icon: "🪨", label: { en: "Star Match",       hu: "Csillag párosítás", de: "Stern-Match",        ro: "Potrivire stele"    } },
      { id: "m3", category: "challenge", gameType: "star-match", icon: "⭐", label: { en: "Speed Round",      hu: "Villámkör",        de: "Blitzrunde",        ro: "Rundă rapidá"       } },
    ],
    svgX: 200, svgY: -120,
  },
];

export function loadK6Progress(): EnglishProgress { return loadEnglishProgress(K6_SAVE_KEY, K6_ISLANDS); }
export function saveK6Progress(p: EnglishProgress): void { saveEnglishProgress(K6_SAVE_KEY, p); }
export function isMissionDoneK6(progress: EnglishProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK6(progress: EnglishProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK6(progress: EnglishProgress, islandId: string): boolean { return isIslandUnlocked(progress, K6_ISLANDS, islandId); }
export function isCheckpointUnlockedK6(progress: EnglishProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K6_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK6(progress: EnglishProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK6(progress: EnglishProgress, islandId: string, missionId: string, stars = 1): EnglishProgress { return completeMission(progress, K6_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK6(progress: EnglishProgress, islandId: string): number { return islandTotalStars(progress, K6_ISLANDS, islandId); }
export function completeTestK6(progress: EnglishProgress, testId: string): EnglishProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK6(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishIslandQuestions(island, 6, count); }
export function generateCheckpointQuestionsK6(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishCheckpointQuestions(testId, K6_CHECKPOINT_TOPICS, 6, count); }
