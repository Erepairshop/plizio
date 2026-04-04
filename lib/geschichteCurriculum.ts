// ─── GESCHICHTE CURRICULUM — K5-K8 (Deutsche Geschichte) ────────────��────────
// 24-28 Altthemen über 4 Klassenstufen (Klasse 5-8)
// Sprache: Deutsch
// Kompatibel mit LanguageTestEngine

import type { CurriculumTheme, CurriculumQuestion, GradeMark } from "./curriculumTypes";
import { G5_Generators_Geschichte } from "./geschichteGenerators5";
import { G6_Generators_Geschichte } from "./geschichteGenerators6";
import { G7_Generators_Geschichte } from "./geschichteGenerators7";
import { G8_Generators_Geschichte } from "./geschichteGenerators8";

// ─── TOPIC NAMES ─────────────��──────────────────────────────────────────────

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

// ─── BUILD HELPER ────────────────────────────────────────────────────────────

function buildTheme(
  id: string, name: string, icon: string, color: string,
  generators: Record<string, () => CurriculumQuestion[]>,
  keys: string[],
): CurriculumTheme {
  return {
    id, name, icon, color,
    subtopics: keys.map((key) => {
      const gen = generators[key];
      const questions: CurriculumQuestion[] = gen ? gen() : [];
      return { id: key, name: TOPIC_NAMES[key] ?? key, questions, hasGenerator: !!gen };
    }),
  };
}

// ──��� GRADE 5: ANTIKE ─────────────────────────────────────────────────────────

const GRADE_5_THEMES: CurriculumTheme[] = [
  buildTheme("antike_kulturen", "Antike Kulturen", "🏛️", "#F59E0B",
    G5_Generators_Geschichte as any, ["fruehe_hochkulturen", "aegypten"]),
  buildTheme("griechenland_rom", "Griechenland & Rom", "⚔️", "#3B82F6",
    G5_Generators_Geschichte as any, ["griechenland", "rom_republik", "rom_kaiserreich"]),
  buildTheme("spaetantike", "Spätantike & Übergang", "🗡️", "#10B981",
    G5_Generators_Geschichte as any, ["germanen", "voelkerwanderung"]),
];

// ─── GRADE 6: MITTELALTER ──────────────────���───────────────────────────────���─

const GRADE_6_THEMES: CurriculumTheme[] = [
  buildTheme("fruehes_ma", "Frühes Mittelalter", "👑", "#8B5CF6",
    G6_Generators_Geschichte as any, ["fruehes_mittelalter", "karl_der_grosse", "lehnswesen"]),
  buildTheme("hohes_ma", "Hohes & Spätes Mittelalter", "🏰", "#EF4444",
    G6_Generators_Geschichte as any, ["kreuzzuege", "stadtleben_mittelalter"]),
  buildTheme("glaube_wissen", "Glaube & Wissen", "📜", "#F59E0B",
    G6_Generators_Geschichte as any, ["islam_goldenes_zeitalter", "reformation"]),
];

// ─── GRADE 7: NEUZEIT ──────��─────────────────────────────���───────────────────

const GRADE_7_THEMES: CurriculumTheme[] = [
  buildTheme("absolutismus_aufklaerung", "Absolutismus & Aufklärung", "🌟", "#6366F1",
    G7_Generators_Geschichte as any, ["absolutismus", "aufklaerung"]),
  buildTheme("revolutionen", "Revolutionen", "🔥", "#EF4444",
    G7_Generators_Geschichte as any, ["amerikanische_revolution", "franzoesische_revolution", "napoleon"]),
  buildTheme("neuordnung", "Neuordnung & Wandel", "🏭", "#10B981",
    G7_Generators_Geschichte as any, ["wiener_kongress", "industrialisierung"]),
];

// ─── GRADE 8: 20. JAHRHUNDERT ───────────────────────────────────────────────

const GRADE_8_THEMES: CurriculumTheme[] = [
  buildTheme("weltkriege", "Weltkriege", "💥", "#EF4444",
    G8_Generators_Geschichte as any, ["imperialismus", "erster_weltkrieg"]),
  buildTheme("ns_zeit", "NS-Zeit & Zweiter Weltkrieg", "⚠���", "#991B1B",
    G8_Generators_Geschichte as any, ["weimarer_republik", "nationalsozialismus", "zweiter_weltkrieg"]),
  buildTheme("nachkrieg", "Nachkriegszeit & Gegenwart", "🇩🇪", "#3B82F6",
    G8_Generators_Geschichte as any, ["kalter_krieg", "wiedervereinigung"]),
];

// ─── FULL CURRICULUM ──────────────��─────────────────────────────────────────

export const GESCHICHTE_CURRICULUM: Record<number, CurriculumTheme[]> = {
  5: GRADE_5_THEMES,
  6: GRADE_6_THEMES,
  7: GRADE_7_THEMES,
  8: GRADE_8_THEMES,
};

// ──��� QUESTION GENERATOR ─────────────────────────────────────────────────────

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

// ─── GRADING ��─────────────��──────────────────────────��───────────────────────

export function calculateGeschichteMark(pct: number): GradeMark {
  if (pct >= 92) return { label: "1", description: "Sehr gut", color: "#10B981", emoji: "🌟" };
  if (pct >= 81) return { label: "2", description: "Gut", color: "#3B82F6", emoji: "👍" };
  if (pct >= 67) return { label: "3", description: "Befriedigend", color: "#F59E0B", emoji: "📝" };
  if (pct >= 50) return { label: "4", description: "Ausreichend", color: "#F97316", emoji: "⚡" };
  if (pct >= 30) return { label: "5", description: "Mangelhaft", color: "#EF4444", emoji: "📉" };
  return { label: "6", description: "Ungenügend", color: "#991B1B", emoji: "❌" };
}

// ─── SUBTOPIC HINTS ────────────────────────────────────��─────────────────────

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
