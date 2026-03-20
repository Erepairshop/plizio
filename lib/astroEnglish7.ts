// lib/astroEnglish7.ts — AstroEnglish K7 island definitions & progress
import type { IslandDef, Lang, MathQuestion, EnglishProgress } from "./astroEnglish";
import {
  loadEnglishProgress, saveEnglishProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateEnglishIslandQuestions, generateEnglishCheckpointQuestions,
} from "./astroEnglish";

export const K7_SAVE_KEY = "astroenglish_k7_v1";

export const K7_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K7_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "grammar_g7/phrases_g7", "grammar_g7/clauses_g7",
    "grammar_g7/sentence_types_g7", "grammar_g7/modifiers_g7",
  ],
  test2: [
    "grammar_g7/tense_voice_g7", "punctuation_g7/commas_phrases_g7",
    "punctuation_g7/semicolons_colons_g7", "punctuation_g7/dashes_hyphens_g7",
  ],
  test3: [
    "vocab_g7/figurative_language_g7", "vocab_g7/connotation_g7",
    "vocab_g7/academic_vocab_g7", "vocab_g7/analogies_g7",
    "vocab_g7/literary_devices_g7",
  ],
};

export const K7_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Phrase Frontier", hu: "Szintagma határ", de: "Phrasen-Grenze", ro: "Frontiera frazelor" },
    icon: "🌐", color: "#B44DFF", sortRange: [1, 20],
    topicKeys: ["grammar_g7/phrases_g7", "grammar_g7/clauses_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Phrase Quiz",    hu: "Szintagma kvíz",   de: "Phrasen-Quiz",    ro: "Quiz fraze"        } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Sentence Type Summit", hu: "Mondattípus csúcs", de: "Satztyp-Gipfel", ro: "Vârful tipurilor de propoziție" },
    icon: "📊", color: "#3B82F6", sortRange: [1, 20],
    topicKeys: ["grammar_g7/sentence_types_g7", "grammar_g7/modifiers_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Sentence Quiz",  hu: "Mondat kvíz",      de: "Satz-Quiz",       ro: "Quiz propoziții"   } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Tense & Voice Terrain", hu: "Igeidő és hang terep", de: "Tempus-und-Stimme-Terrain", ro: "Terenul timpurilor și diatezei" },
    icon: "⚙️", color: "#10B981", sortRange: [1, 20],
    topicKeys: ["grammar_g7/tense_voice_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Voice Quiz",     hu: "Hang kvíz",        de: "Stimme-Quiz",     ro: "Quiz diateze"      } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Comma Continent", hu: "Vesszős kontinens", de: "Komma-Kontinent", ro: "Continentul virgulelor" },
    icon: "📝", color: "#F59E0B", sortRange: [1, 20],
    topicKeys: ["punctuation_g7/commas_phrases_g7", "punctuation_g7/semicolons_colons_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Punctuation Quiz", hu: "Írásjel kvíz",   de: "Interpunktions-Quiz", ro: "Quiz punctuație" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Dash & Hyphen Harbor", hu: "Gondolatjel és kötőjel kikötő", de: "Gedankenstrich-Hafen", ro: "Portul liniilor de pauză" },
    icon: "➖", color: "#6366F1", sortRange: [1, 20],
    topicKeys: ["punctuation_g7/dashes_hyphens_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Dash Quiz",      hu: "Gondolatjel kvíz", de: "Gedankenstrich-Quiz", ro: "Quiz linii"     } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Figurative Language Falls", hu: "Képletes nyelvi vízesés", de: "Bildsprach-Wasserfall", ro: "Cascada limbajului figurat" },
    icon: "🎭", color: "#EC4899", sortRange: [1, 20],
    topicKeys: ["vocab_g7/figurative_language_g7", "vocab_g7/connotation_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Figurative Quiz", hu: "Képletes kvíz",   de: "Bildsprach-Quiz", ro: "Quiz figurat"      } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Analogy Archipelago", hu: "Analógia szigetcsoport", de: "Analogie-Archipel", ro: "Arhipelagul analogiilor" },
    icon: "🔗", color: "#14B8A6", sortRange: [1, 20],
    topicKeys: ["vocab_g7/analogies_g7", "vocab_g7/academic_vocab_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Analogy Quiz",   hu: "Analógia kvíz",    de: "Analogie-Quiz",   ro: "Quiz analogii"     } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidă"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Literary Device Lab", hu: "Irodalmi eszközök laboratóriuma", de: "Literarische-Geräte-Labor", ro: "Laboratorul figurilor literare" },
    icon: "📚", color: "#A855F7", sortRange: [1, 20],
    topicKeys: ["vocab_g7/literary_devices_g7", "clause_types_g7/cause_effect_g7", "clause_types_g7/conditional_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Literary Quiz",  hu: "Irodalmi kvíz",    de: "Literatur-Quiz",  ro: "Quiz literar"      } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagră"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Big Test", hu: "Nagy Próba", de: "Große Prüfung", ro: "Marea probă" },
    icon: "🌟", color: "#4ECDC4", sortRange: [1, 20],
    topicKeys: [
      "grammar_g7/phrases_g7", "grammar_g7/tense_voice_g7",
      "punctuation_g7/commas_phrases_g7", "vocab_g7/figurative_language_g7",
      "vocab_g7/analogies_g7", "vocab_g7/literary_devices_g7",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "orbit-quiz",  icon: "🪐", label: { en: "Final Quiz",     hu: "Záró kvíz",        de: "Final-Quiz",      ro: "Quiz final"        } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🪨", label: { en: "Gravity Sort",  hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
    ],
    svgX: 190, svgY: -90,
  },
];

export function loadK7Progress(): EnglishProgress { return loadEnglishProgress(K7_SAVE_KEY, K7_ISLANDS); }
export function saveK7Progress(p: EnglishProgress): void { saveEnglishProgress(K7_SAVE_KEY, p); }
export function isMissionDoneK7(progress: EnglishProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK7(progress: EnglishProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK7(progress: EnglishProgress, islandId: string): boolean { return isIslandUnlocked(progress, K7_ISLANDS, islandId); }
export function isCheckpointUnlockedK7(progress: EnglishProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K7_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK7(progress: EnglishProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK7(progress: EnglishProgress, islandId: string, missionId: string, stars = 1): EnglishProgress { return completeMission(progress, K7_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK7(progress: EnglishProgress, islandId: string): number { return islandTotalStars(progress, K7_ISLANDS, islandId); }
export function completeTestK7(progress: EnglishProgress, testId: string): EnglishProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK7(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishIslandQuestions(island, 7, count); }
export function generateCheckpointQuestionsK7(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishCheckpointQuestions(testId, K7_CHECKPOINT_TOPICS, 7, count); }
