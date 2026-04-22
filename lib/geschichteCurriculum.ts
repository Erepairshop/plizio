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

const TOPIC_NAMES: Record<string, Record<string, string>> = {
  // Grade 5 (7 Themen)
  fruehe_hochkulturen: { de: "Frühe Hochkulturen", hu: "Korai civilizációk", ro: "Civilizații antice", en: "Early Civilizations" },
  aegypten: { de: "Das alte Ägypten", hu: "Az ókori Egyiptom", ro: "Egiptul Antic", en: "Ancient Egypt" },
  griechenland: { de: "Das antike Griechenland", hu: "Az ókori Görögország", ro: "Grecia Antică", en: "Ancient Greece" },
  rom_republik: { de: "Römische Republik", hu: "Római Köztársaság", ro: "Republica Romană", en: "Roman Republic" },
  rom_kaiserreich: { de: "Römisches Kaiserreich", hu: "Római Birodalom", ro: "Imperiul Roman", en: "Roman Empire" },
  germanen: { de: "Die Germanen", hu: "Germánok", ro: "Germanii", en: "The Germanic Peoples" },
  voelkerwanderung: { de: "Völkerwanderung", hu: "Népvándorlás", ro: "Migrația popoarelor", en: "Migration Period" },
  // Grade 6 (7 Themen)
  fruehes_mittelalter: { de: "Frühes Mittelalter", hu: "Kora középkor", ro: "Evul Mediu Timpuriu", en: "Early Middle Ages" },
  karl_der_grosse: { de: "Karl der Große", hu: "Nagy Károly", ro: "Carol cel Mare", en: "Charlemagne" },
  lehnswesen: { de: "Lehnswesen & Ständeordnung", hu: "Hűbériség és rendek", ro: "Feudalism și ordine", en: "Feudalism & Estates" },
  kreuzzuege: { de: "Die Kreuzzüge", hu: "Keresztes hadjáratok", ro: "Cruciadele", en: "The Crusades" },
  stadtleben_mittelalter: { de: "Stadtleben im Mittelalter", hu: "Városi élet a középkorban", ro: "Viața urbană medievală", en: "City Life in the Middle Ages" },
  islam_goldenes_zeitalter: { de: "Islam & Goldenes Zeitalter", hu: "Iszlám és aranykor", ro: "Islamul și Epoca de Aur", en: "Islam & Golden Age" },
  reformation: { de: "Reformation & Glaubenskriege", hu: "Reformáció és vallásháborúk", ro: "Reforma și războaie religioase", en: "Reformation & Religious Wars" },
  // Grade 7 (7 Themen)
  absolutismus: { de: "Absolutismus", hu: "Abszolutizmus", ro: "Absolutism", en: "Absolutism" },
  aufklaerung: { de: "Die Aufklärung", hu: "A felvilágosodás", ro: "Iluminismul", en: "The Enlightenment" },
  amerikanische_revolution: { de: "Amerikanische Revolution", hu: "Amerikai forradalom", ro: "Revoluția Americană", en: "American Revolution" },
  franzoesische_revolution: { de: "Französische Revolution", hu: "Francia forradalom", ro: "Revoluția Franceză", en: "French Revolution" },
  napoleon: { de: "Napoleon & Europa", hu: "Napóleon és Európa", ro: "Napoleon și Europa", en: "Napoleon & Europe" },
  wiener_kongress: { de: "Wiener Kongress & Restauration", hu: "Bécsi kongresszus", ro: "Congresul de la Viena", en: "Congress of Vienna" },
  industrialisierung: { de: "Industrialisierung", hu: "Ipari forradalom", ro: "Revoluția Industrială", en: "Industrialization" },
  // Grade 8 (7 Themen)
  imperialismus: { de: "Imperialismus & Kolonialismus", hu: "Imperializmus és gyarmatosítás", ro: "Imperialism și colonialism", en: "Imperialism & Colonialism" },
  erster_weltkrieg: { de: "Erster Weltkrieg", hu: "Első világháború", ro: "Primul Război Mondial", en: "World War I" },
  weimarer_republik: { de: "Weimarer Republik", hu: "Weimari köztársaság", ro: "Republica de la Weimar", en: "Weimar Republic" },
  nationalsozialismus: { de: "Nationalsozialismus", hu: "Nemzetiszocializmus", ro: "Național-socialism", en: "National Socialism" },
  zweiter_weltkrieg: { de: "Zweiter Weltkrieg & Holocaust", hu: "Második világháború és holokauszt", ro: "Al Doilea Război Mondial", en: "World War II & Holocaust" },
  kalter_krieg: { de: "Kalter Krieg & Teilung Deutschlands", hu: "Hidegháború és Németország megosztása", ro: "Războiul Rece și divizarea Germaniei", en: "Cold War & Division of Germany" },
  wiedervereinigung: { de: "Wiedervereinigung & EU", hu: "Újraegyesítés és EU", ro: "Reunificarea și UE", en: "Reunification & EU" },
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
