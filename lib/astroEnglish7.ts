// lib/astroEnglish7.ts — AstroEnglish K7 island definitions & progress
import type { IslandDef, Lang, MathQuestion, EnglishProgress, MissionDef, MissionCategory } from "./astroEnglish";
import {
  loadEnglishProgress, saveEnglishProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateEnglishIslandQuestions, generateEnglishCheckpointQuestions,
} from "./astroEnglish";

export type { IslandDef, Lang, MathQuestion, EnglishProgress, MissionDef, MissionCategory };

export const K7_SAVE_KEY = "astroenglish_k7_v1";

export const K7_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K7_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "phrases_g7", "clauses_g7",
    "sentence_types_g7", "modifiers_g7",
  ],
  test2: [
    "tense_voice_g7", "commas_phrases_g7",
    "semicolons_colons_g7", "dashes_hyphens_g7",
  ],
  test3: [
    "figurative_language_g7", "connotation_g7",
    "academic_vocab_g7", "analogies_g7",
    "literary_devices_g7", "cause_effect_g7", "conditional_g7", "concessive_g7",
  ],
};

export const K7_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Grammar Galaxy", hu: "Grammatika-galaxis", de: "Grammatik-Galaxie", ro: "Galaxia gramaticii" },
    icon: "📐", color: "#B44DFF", sortRange: [1, 20],
    topicKeys: ["phrases_g7", "clauses_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "word-sort",  icon: "🪐", label: { en: "Sort Phrases/Clauses",    hu: "Rendezd: szintagma/záradék",   de: "Phrasen/Klauseln sortieren",    ro: "Sortează: fraze/clauze"        } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidá"      } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Sentence Station", hu: "Mondat-állomás", de: "Satz-Station", ro: "Stația propozițiilor" },
    icon: "🚉", color: "#3B82F6", sortRange: [1, 20],
    topicKeys: ["sentence_types_g7", "modifiers_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "grammar-match",  icon: "🪐", label: { en: "Match Sentence Types",  hu: "Párosítsd a mondattípusokat",      de: "Satztypen zuordnen",       ro: "Potrivește tipuri propoziții"   } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",  icon: "⭐", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagra"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Tense & Voice", hu: "Igeidő és hang", de: "Tempus und Stimme", ro: "Timp și diateza" },
    icon: "🔄", color: "#10B981", sortRange: [1, 20],
    topicKeys: ["tense_voice_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap",  icon: "🪐", label: { en: "Fill Tense/Voice",     hu: "Töltsd ki az igeidőt/hangot",        de: "Tempus/Stimme ausfüllen",     ro: "Completează timp/diateza"      } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidá"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Punctuation Planet", hu: "Írásjel-bolygó", de: "Satzzeichen-Planet", ro: "Planeta punctuației" },
    icon: "✏️", color: "#F59E0B", sortRange: [1, 20],
    topicKeys: ["commas_phrases_g7", "semicolons_colons_g7", "dashes_hyphens_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap", icon: "🪐", label: { en: "Fill Punctuation", hu: "Töltsd ki a jeleket",   de: "Satzzeichen einfügen", ro: "Completează punctuația" } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",  icon: "⭐", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagra"      } },
    ],
    svgX: 90, svgY: 270,
  },
  {
    id: "i5",
    name: { en: "Figurative Frontier", hu: "Képletes határ", de: "Bildliche-Grenze", ro: "Frontiera figurativă" },
    icon: "🎭", color: "#FF2D78", sortRange: [1, 20],
    topicKeys: ["figurative_language_g7", "connotation_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "grammar-match",  icon: "🪐", label: { en: "Match Figurative",      hu: "Párosítsd a képleteseket", de: "Figürliches zuordnen", ro: "Potrivește figurat"     } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidá"      } },
    ],
    svgX: 220, svgY: 195,
  },
  {
    id: "i6",
    name: { en: "Academic Arena", hu: "Akadémiai aréna", de: "Akademische-Arena", ro: "Arena academică" },
    icon: "🎓", color: "#6366F1", sortRange: [1, 20],
    topicKeys: ["academic_vocab_g7", "analogies_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "category-rush",  icon: "🪐", label: { en: "Sort Academic/Casual", hu: "Rendezd: tudományos/beszéd",   de: "Akademisch/Umgangssprache sortieren", ro: "Sortează: academic/casual"      } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "orbit-quiz",  icon: "⭐", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagra"      } },
    ],
    svgX: 100, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Argument Archipelago", hu: "Érv-szigetcsoport", de: "Argument-Archipel", ro: "Arhipelagul argumentelor" },
    icon: "⚖️", color: "#00D4FF", sortRange: [1, 20],
    topicKeys: ["argument_structure_g7", "media_literacy_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sentence-builder",  icon: "🪐", label: { en: "Build Arguments",   hu: "Építs érveléseket",    de: "Argumente bauen",   ro: "Construiți argumente"     } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidá"      } },
    ],
    svgX: 230, svgY: 55,
  },
  {
    id: "i8",
    name: { en: "Clause Kingdom", hu: "Záradék-királyság", de: "Klausel-Königreich", ro: "Regatul clauzelor" },
    icon: "👑", color: "#FF6B6B", sortRange: [1, 20],
    topicKeys: ["cause_effect_g7", "conditional_g7", "concessive_g7"],
    missions: [
      { id: "m1", category: "explore",   gameType: "grammar-match",  icon: "🪐", label: { en: "Match Clause Types",  hu: "Párosítsd a záradéktípusokat",    de: "Klauseltypen zuordnen",  ro: "Potrivește tipuri clauze"      } },
      { id: "m2", category: "build",     gameType: "star-match",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagra"      } },
    ],
    svgX: 80, svgY: -20,
  },
  {
    id: "i9",
    name: { en: "Verbal Valley", hu: "Igenév-völgy", de: "Verbal-Tal", ro: "Valea verbalelor" },
    icon: "📜", color: "#FFD700", sortRange: [1, 20],
    topicKeys: [
      "infinitive_phrases_g7", "gerund_phrases_g7", "participial_phrases_g7",
      "figurative_language_g7", "literary_devices_g7",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "word-sort",  icon: "🪐", label: { en: "Sort Verbals",     hu: "Rendezd az igeneeveket",        de: "Verbale sortieren",      ro: "Sortează verbale"        } },
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
