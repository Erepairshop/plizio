// lib/astroEnglish8.ts — AstroEnglish K8 island definitions & progress
import type { IslandDef, Lang, MathQuestion, EnglishProgress, MissionDef, MissionCategory } from "./astroEnglish";
import {
  loadEnglishProgress, saveEnglishProgress, isMissionDone, isIslandDone,
  isIslandUnlocked, isCheckpointUnlocked, isCheckpointDone,
  completeMission, islandTotalStars, completeTest,
  generateEnglishIslandQuestions, generateEnglishCheckpointQuestions,
} from "./astroEnglish";

export type { IslandDef, Lang, MathQuestion, EnglishProgress, MissionDef, MissionCategory };

export const K8_SAVE_KEY = "astroenglish_k8_v1";

export const K8_CHECKPOINT_MAP: Record<string, string[]> = {
  test1: ["i1", "i2", "i3"],
  test2: ["i4", "i5", "i6"],
  test3: ["i7", "i8", "i9"],
};

export const K8_CHECKPOINT_TOPICS: Record<string, string[]> = {
  test1: [
    "verbals_g8", "participial_modifiers_g8",
    "absolute_phrases_g8", "active_passive_g8",
  ],
  test2: [
    "subjunctive_g8", "voice_mood_shifts_g8",
    "argumentative_g8", "informational_g8",
  ],
  test3: [
    "point_of_view_g8", "genres_g8",
    "allusion_irony_g8", "theme_g8",
    "formal_register_g8", "academic_vs_conv_g8", "domain_vocab_g8",
  ],
};

export const K8_ISLANDS: IslandDef[] = [
  {
    id: "i1",
    name: { en: "Verbal Voyage", hu: "Igenév-utazás", de: "Verbal-Reise", ro: "Călătoria verbalelor" },
    icon: "🚢", color: "#E879F9", sortRange: [1, 20],
    topicKeys: ["verbals_g8", "participial_modifiers_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "grammar-match",  icon: "🪐", label: { en: "Match Verbal Types",    hu: "Párosítsd az igeneev típusokat",      de: "Verbaltypen zuordnen",     ro: "Potrivește tipuri verbale"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidá"      } },
    ],
    svgX: 160, svgY: 530,
  },
  {
    id: "i2",
    name: { en: "Phrase Frontier", hu: "Szintagma-határ", de: "Phrasen-Grenze", ro: "Frontiera frazelor" },
    icon: "🗺️", color: "#3B82F6", sortRange: [1, 20],
    topicKeys: ["absolute_phrases_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sentence-builder",  icon: "🪐", label: { en: "Build with Phrases",    hu: "Építs abszolút szintagmával",   de: "Mit Phrasen bauen",     ro: "Construiți cu fraze"        } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagra"      } },
    ],
    svgX: 80, svgY: 440,
  },
  {
    id: "i3",
    name: { en: "Voice & Mood", hu: "Hang és módj", de: "Stimme und Modus", ro: "Diateza și mod" },
    icon: "🎭", color: "#10B981", sortRange: [1, 20],
    topicKeys: ["active_passive_g8", "subjunctive_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap",  icon: "🪐", label: { en: "Fill Voice/Mood",      hu: "Töltsd ki a hangot/módot",       de: "Stimme/Modus ausfüllen",      ro: "Completează diateza/mod"          } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "⭐", label: { en: "Gravity Sort",    hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "gravity-sort", icon: "🪨", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidá"      } },
    ],
    svgX: 240, svgY: 360,
  },
  {
    id: "i4",
    name: { en: "Writing Workshop", hu: "Írás műhely", de: "Schreib-Werkstatt", ro: "Atelier de scriere" },
    icon: "✍️", color: "#F59E0B", sortRange: [1, 20],
    topicKeys: ["argumentative_g8", "informational_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "sentence-builder",  icon: "🪐", label: { en: "Build Argumentative",   hu: "Építs érvelő mondatokat",        de: "Argumentative bauen",    ro: "Construiți argumente"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagra"      } },
    ],
    svgX: 90, svgY: 280,
  },
  {
    id: "i5",
    name: { en: "Literature Lab", hu: "Irodalom-laboratórium", de: "Literatur-Labor", ro: "Laborator literar" },
    icon: "📚", color: "#6366F1", sortRange: [1, 20],
    topicKeys: ["point_of_view_g8", "genres_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "category-rush", icon: "🪐", label: { en: "Sort Point of View", hu: "Rendezd a nézőpont szerint",    de: "Perspektive sortieren",  ro: "Sortează perspectivă"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole", icon: "🕳️", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidá"      } },
    ],
    svgX: 220, svgY: 200,
  },
  {
    id: "i6",
    name: { en: "Style Studio", hu: "Stílus-stúdió", de: "Stil-Studio", ro: "Studio de stil" },
    icon: "🎨", color: "#FF2D78", sortRange: [1, 20],
    topicKeys: ["allusion_irony_g8", "theme_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "grammar-match",  icon: "🪐", label: { en: "Match Literary Devices",  hu: "Párosítsd az irodalmi eszközöket",     de: "Literarische Mittel zuordnen", ro: "Potrivește dispozitive literare"      } },
      { id: "m2", category: "build",     gameType: "orbit-quiz", icon: "⭐", label: { en: "Gravity Sort",    hu: "Gravitációs rendezés", de: "Schwerkraft-Sortierung", ro: "Sortare gravitațională" } },
      { id: "m3", category: "challenge", gameType: "gravity-sort",  icon: "🪨", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagra"      } },
    ],
    svgX: 90, svgY: 125,
  },
  {
    id: "i7",
    name: { en: "Register Range", hu: "Regiszter-tartomány", de: "Register-Bereich", ro: "Gama registrelor" },
    icon: "📋", color: "#00D4FF", sortRange: [1, 20],
    topicKeys: ["formal_register_g8", "academic_vs_conv_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "word-sort",  icon: "🪐", label: { en: "Sort Formal/Conversational",  hu: "Rendezd: formális/társalgás",   de: "Formal/Umgangssprache sortieren",   ro: "Sortează: formal/conversație"     } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "speed-round", icon: "⚡", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidá"      } },
    ],
    svgX: 230, svgY: 40,
  },
  {
    id: "i8",
    name: { en: "Punctuation Pinnacle", hu: "Írásjel-csúcs", de: "Satzzeichen-Gipfel", ro: "Vârful punctuației" },
    icon: "✒️", color: "#FF6B6B", sortRange: [1, 20],
    topicKeys: ["ellipsis_g8", "dashes_g8", "commas_complex_g8"],
    missions: [
      { id: "m1", category: "explore",   gameType: "fill-gap", icon: "🪐", label: { en: "Fill Complex Punctuation", hu: "Töltsd ki az összetett jeleket",   de: "Komplexe Satzzeichen einfügen", ro: "Completează punctuație complexă" } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "black-hole",  icon: "🕳️", label: { en: "Black Hole",    hu: "Fekete lyuk",       de: "Schwarzes Loch",  ro: "Gaură neagra"      } },
    ],
    svgX: 100, svgY: -40,
  },
  {
    id: "i9",
    name: { en: "Etymology Summit", hu: "Etimológia csúcs", de: "Etymologie-Gipfel", ro: "Vârful etimologiei" },
    icon: "🏆", color: "#FFD700", sortRange: [1, 20],
    topicKeys: [
      "greek_latin_adv_g8", "figurative_adv_g8", "word_nuances_g8",
    ],
    missions: [
      { id: "m1", category: "explore",   gameType: "grammar-match",  icon: "🪐", label: { en: "Match Greek/Latin Roots",     hu: "Párosítsd a görög/latin gyökereket",        de: "Griechisch/Lateinische Wurzeln zuordnen",      ro: "Potrivește rădăcini grecești/latine"        } },
      { id: "m2", category: "build",     gameType: "orbit-quiz",  icon: "⭐", label: { en: "Star Match",     hu: "Csillag párosítás", de: "Stern-Match",     ro: "Potrivire stele"   } },
      { id: "m3", category: "challenge", gameType: "star-match", icon: "⭐", label: { en: "Speed Round",    hu: "Villámkör",        de: "Blitzrunde",      ro: "Rundă rapidá"      } },
    ],
    svgX: 200, svgY: -120,
  },
];

export function loadK8Progress(): EnglishProgress { return loadEnglishProgress(K8_SAVE_KEY, K8_ISLANDS); }
export function saveK8Progress(p: EnglishProgress): void { saveEnglishProgress(K8_SAVE_KEY, p); }
export function isMissionDoneK8(progress: EnglishProgress, islandId: string, missionId: string): boolean { return isMissionDone(progress, islandId, missionId); }
export function isIslandDoneK8(progress: EnglishProgress, islandId: string): boolean { return isIslandDone(progress, islandId); }
export function isIslandUnlockedK8(progress: EnglishProgress, islandId: string): boolean { return isIslandUnlocked(progress, K8_ISLANDS, islandId); }
export function isCheckpointUnlockedK8(progress: EnglishProgress, testId: string): boolean { return isCheckpointUnlocked(progress, K8_CHECKPOINT_MAP, testId); }
export function isCheckpointDoneK8(progress: EnglishProgress, testId: string): boolean { return isCheckpointDone(progress, testId); }
export function completeMissionK8(progress: EnglishProgress, islandId: string, missionId: string, stars = 1): EnglishProgress { return completeMission(progress, K8_ISLANDS, islandId, missionId, stars); }
export function islandTotalStarsK8(progress: EnglishProgress, islandId: string): number { return islandTotalStars(progress, K8_ISLANDS, islandId); }
export function completeTestK8(progress: EnglishProgress, testId: string): EnglishProgress { return completeTest(progress, testId); }
export function generateIslandQuestionsK8(island: IslandDef, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishIslandQuestions(island, 8, count); }
export function generateCheckpointQuestionsK8(testId: string, _lang: Lang, count = 10): MathQuestion[] { return generateEnglishCheckpointQuestions(testId, K8_CHECKPOINT_TOPICS, 8, count); }
