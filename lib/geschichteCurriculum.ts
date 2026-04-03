// ─── GESCHICHTE CURRICULUM — K5-K8 (Deutsche Geschichte) ─────────────────────
// 24-28 Altthemen über 4 Klassenstufen (Klasse 5-8)
// Sprache: Deutsch
// Kompatibel mit LanguageTestEngine

import type { CurriculumTheme, CurriculumQuestion, GradeMark } from "./curriculumTypes";
import { G5_Generators_Geschichte } from "./geschichteGenerators5";
import { G6_Generators_Geschichte } from "./geschichteGenerators6";
import { G7_Generators_Geschichte } from "./geschichteGenerators7";
import { G8_Generators_Geschichte } from "./geschichteGenerators8";

// ─── TOPIC NAMES ────────────────────────────────────────────────────────────

const TOPIC_NAMES: Record<string, string> = {
  // Grade 5 (7 Themen)
  fruehe_hochkulturen: "Frühe Hochkulturen",
  aegypten: "Das alte Ägypten",
  griechenland: "Das antike Griechenland",
  rom_republik: "Römische Republik",
  rom_kaiserreich: "Römisches Kaiserreich",
  germanen: "Die Germanen",
  voelkerwanderung: "Völkerwanderung",
  // Grade 6 (7 Themen)
  fruehes_mittelalter: "Frühes Mittelalter",
  karl_der_grosse: "Karl der Große",
  lehnswesen: "Lehnswesen & Ständeordnung",
  kreuzzuege: "Die Kreuzzüge",
  stadtleben_mittelalter: "Stadtleben im Mittelalter",
  islam_goldenes_zeitalter: "Islam & Goldenes Zeitalter",
  reformation: "Reformation & Glaubenskriege",
  // Grade 7 (7 Themen)
  absolutismus: "Absolutismus",
  aufklaerung: "Die Aufklärung",
  amerikanische_revolution: "Amerikanische Revolution",
  franzoesische_revolution: "Französische Revolution",
  napoleon: "Napoleon & Europa",
  wiener_kongress: "Wiener Kongress & Restauration",
  industrialisierung: "Industrialisierung",
  // Grade 8 (7 Themen)
  imperialismus: "Imperialismus & Kolonialismus",
  erster_weltkrieg: "Erster Weltkrieg",
  weimarer_republik: "Weimarer Republik",
  nationalsozialismus: "Nationalsozialismus",
  zweiter_weltkrieg: "Zweiter Weltkrieg & Holocaust",
  kalter_krieg: "Kalter Krieg & Teilung Deutschlands",
  wiedervereinigung: "Wiedervereinigung & EU",
};

// ─── GRADE 5: ANTIKE ─────────────────────────────────────────────────────────

const GRADE_5_THEMES: CurriculumTheme[] = [
  {
    id: "antike_kulturen", name: "Antike Kulturen", icon: "🏛️", color: "#F59E0B",
    subtopics: [
      { id: "fruehe_hochkulturen", name: TOPIC_NAMES.fruehe_hochkulturen, questions: [], hasGenerator: true },
      { id: "aegypten", name: TOPIC_NAMES.aegypten, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "griechenland_rom", name: "Griechenland & Rom", icon: "⚔️", color: "#3B82F6",
    subtopics: [
      { id: "griechenland", name: TOPIC_NAMES.griechenland, questions: [], hasGenerator: true },
      { id: "rom_republik", name: TOPIC_NAMES.rom_republik, questions: [], hasGenerator: true },
      { id: "rom_kaiserreich", name: TOPIC_NAMES.rom_kaiserreich, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "spaetantike", name: "Spätantike & Übergang", icon: "🗡️", color: "#10B981",
    subtopics: [
      { id: "germanen", name: TOPIC_NAMES.germanen, questions: [], hasGenerator: true },
      { id: "voelkerwanderung", name: TOPIC_NAMES.voelkerwanderung, questions: [], hasGenerator: true },
    ],
  },
];

// ─── GRADE 6: MITTELALTER ────────────────────────────────────────────────────

const GRADE_6_THEMES: CurriculumTheme[] = [
  {
    id: "fruehes_ma", name: "Frühes Mittelalter", icon: "👑", color: "#8B5CF6",
    subtopics: [
      { id: "fruehes_mittelalter", name: TOPIC_NAMES.fruehes_mittelalter, questions: [], hasGenerator: true },
      { id: "karl_der_grosse", name: TOPIC_NAMES.karl_der_grosse, questions: [], hasGenerator: true },
      { id: "lehnswesen", name: TOPIC_NAMES.lehnswesen, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "hohes_ma", name: "Hohes & Spätes Mittelalter", icon: "🏰", color: "#EF4444",
    subtopics: [
      { id: "kreuzzuege", name: TOPIC_NAMES.kreuzzuege, questions: [], hasGenerator: true },
      { id: "stadtleben_mittelalter", name: TOPIC_NAMES.stadtleben_mittelalter, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "glaube_wissen", name: "Glaube & Wissen", icon: "📜", color: "#F59E0B",
    subtopics: [
      { id: "islam_goldenes_zeitalter", name: TOPIC_NAMES.islam_goldenes_zeitalter, questions: [], hasGenerator: true },
      { id: "reformation", name: TOPIC_NAMES.reformation, questions: [], hasGenerator: true },
    ],
  },
];

// ─── GRADE 7: NEUZEIT ────────────────────────────────────────────────────────

const GRADE_7_THEMES: CurriculumTheme[] = [
  {
    id: "absolutismus_aufklaerung", name: "Absolutismus & Aufklärung", icon: "🌟", color: "#6366F1",
    subtopics: [
      { id: "absolutismus", name: TOPIC_NAMES.absolutismus, questions: [], hasGenerator: true },
      { id: "aufklaerung", name: TOPIC_NAMES.aufklaerung, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "revolutionen", name: "Revolutionen", icon: "🔥", color: "#EF4444",
    subtopics: [
      { id: "amerikanische_revolution", name: TOPIC_NAMES.amerikanische_revolution, questions: [], hasGenerator: true },
      { id: "franzoesische_revolution", name: TOPIC_NAMES.franzoesische_revolution, questions: [], hasGenerator: true },
      { id: "napoleon", name: TOPIC_NAMES.napoleon, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "neuordnung", name: "Neuordnung & Wandel", icon: "🏭", color: "#10B981",
    subtopics: [
      { id: "wiener_kongress", name: TOPIC_NAMES.wiener_kongress, questions: [], hasGenerator: true },
      { id: "industrialisierung", name: TOPIC_NAMES.industrialisierung, questions: [], hasGenerator: true },
    ],
  },
];

// ─── GRADE 8: 20. JAHRHUNDERT ───────────────────────────────────────────────

const GRADE_8_THEMES: CurriculumTheme[] = [
  {
    id: "weltkriege", name: "Weltkriege", icon: "💥", color: "#EF4444",
    subtopics: [
      { id: "imperialismus", name: TOPIC_NAMES.imperialismus, questions: [], hasGenerator: true },
      { id: "erster_weltkrieg", name: TOPIC_NAMES.erster_weltkrieg, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "ns_zeit", name: "NS-Zeit & Zweiter Weltkrieg", icon: "⚠️", color: "#991B1B",
    subtopics: [
      { id: "weimarer_republik", name: TOPIC_NAMES.weimarer_republik, questions: [], hasGenerator: true },
      { id: "nationalsozialismus", name: TOPIC_NAMES.nationalsozialismus, questions: [], hasGenerator: true },
      { id: "zweiter_weltkrieg", name: TOPIC_NAMES.zweiter_weltkrieg, questions: [], hasGenerator: true },
    ],
  },
  {
    id: "nachkrieg", name: "Nachkriegszeit & Gegenwart", icon: "🇩🇪", color: "#3B82F6",
    subtopics: [
      { id: "kalter_krieg", name: TOPIC_NAMES.kalter_krieg, questions: [], hasGenerator: true },
      { id: "wiedervereinigung", name: TOPIC_NAMES.wiedervereinigung, questions: [], hasGenerator: true },
    ],
  },
];

// ─── FULL CURRICULUM ────────────────────────────────────────────────────────

export const GESCHICHTE_CURRICULUM: Record<number, CurriculumTheme[]> = {
  5: GRADE_5_THEMES,
  6: GRADE_6_THEMES,
  7: GRADE_7_THEMES,
  8: GRADE_8_THEMES,
};

// ─── QUESTION GENERATOR ─────────────────────────────────────────────────────

const ALL_GENERATORS: Record<number, Record<string, () => CurriculumQuestion[]>> = {
  5: G5_Generators_Geschichte,
  6: G6_Generators_Geschichte,
  7: G7_Generators_Geschichte,
  8: G8_Generators_Geschichte,
};

export function getGeschichteQuestions(
  grade: number,
  subtopicIds: string[],
  count = 10,
): CurriculumQuestion[] {
  const gradeGens = ALL_GENERATORS[grade];
  if (!gradeGens) return [];

  const pool: CurriculumQuestion[] = [];
  for (const id of subtopicIds) {
    const gen = gradeGens[id];
    if (gen) pool.push(...gen());
  }

  // Shuffle and limit
  const shuffled = pool.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

// ─── GRADING ─────────────────────────────────────────────────────────────────

export function calculateGeschichteMark(pct: number): GradeMark {
  if (pct >= 92) return { label: "1", description: "Sehr gut", color: "#10B981", emoji: "🌟" };
  if (pct >= 81) return { label: "2", description: "Gut", color: "#3B82F6", emoji: "👍" };
  if (pct >= 67) return { label: "3", description: "Befriedigend", color: "#F59E0B", emoji: "📝" };
  if (pct >= 50) return { label: "4", description: "Ausreichend", color: "#F97316", emoji: "⚡" };
  if (pct >= 30) return { label: "5", description: "Mangelhaft", color: "#EF4444", emoji: "📉" };
  return { label: "6", description: "Ungenügend", color: "#991B1B", emoji: "❌" };
}

// ─── SUBTOPIC HINTS ──────────────────────────────────────────────────────────

export const GESCHICHTE_SUBTOPIC_HINTS: Record<string, string> = {
  fruehe_hochkulturen: "Mesopotamien, Ägypten, Indus-Tal",
  aegypten: "Pharaonen, Pyramiden, Nil",
  griechenland: "Polis, Demokratie, Philosophie",
  rom_republik: "Senat, Legionen, Expansion",
  rom_kaiserreich: "Augustus, Limes, Zerfall",
  germanen: "Stämme, Thing, Arminius",
  voelkerwanderung: "Hunnen, Goten, Ende Westroms",
  fruehes_mittelalter: "Frankenreich, Mönche, Klöster",
  karl_der_grosse: "Kaiserkrönung 800, Schulpflicht",
  lehnswesen: "Adel, Bauern, Leibeigenschaft",
  kreuzzuege: "Heiliges Land, Ritter, 1096-1291",
  stadtleben_mittelalter: "Zünfte, Markt, Stadtrecht",
  islam_goldenes_zeitalter: "Algebra, Medizin, Bibliotheken",
  reformation: "Luther, 95 Thesen, 30-jähriger Krieg",
  absolutismus: "Ludwig XIV, Versailles, Sonnenkönig",
  aufklaerung: "Vernunft, Kant, Menschenrechte",
  amerikanische_revolution: "1776, Unabhängigkeitserklärung",
  franzoesische_revolution: "1789, Bastille, Terreur",
  napoleon: "Kontinentalsperre, Waterloo",
  wiener_kongress: "1815, Metternich, Restauration",
  industrialisierung: "Dampfmaschine, Fabriken, Arbeiterfrage",
  imperialismus: "Kolonialmächte, Wettlauf um Afrika",
  erster_weltkrieg: "1914-1918, Schützengräben, Versailles",
  weimarer_republik: "1919-1933, Demokratie, Inflation",
  nationalsozialismus: "Hitler, NSDAP, Gleichschaltung",
  zweiter_weltkrieg: "1939-1945, Holocaust, Befreiung",
  kalter_krieg: "BRD/DDR, Mauer, NATO/Warschauer Pakt",
  wiedervereinigung: "1989 Mauerfall, 1990 Einheit, EU",
};
