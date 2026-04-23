import type { CurriculumQuestion } from "./curriculumTypes";
import US_DATA from "./geschichteCountryData/us.json";
import GB_DATA from "./geschichteCountryData/gb.json";
import HU_DATA from "./geschichteCountryData/hu.json";
import RO_DATA from "./geschichteCountryData/ro.json";

type MCQ = { question: string; correct: string; wrong: string[] };
type Typing = { question: string; answer: string | string[] };
type Subtopic = { mcq?: MCQ[]; typing?: Typing[] };
type GradeMap = Record<string, Subtopic>;
type CountryData = Record<string, GradeMap>; // grade key: "k5","k6","k7","k8"

const COUNTRY_DATA: Record<string, CountryData> = {
  us: US_DATA as unknown as CountryData,
  gb: GB_DATA as unknown as CountryData,
  uk: GB_DATA as unknown as CountryData, // alias
  hu: HU_DATA as unknown as CountryData,
  ro: RO_DATA as unknown as CountryData,
};

// Localized topic names per country & subtopic ID
const COUNTRY_TOPIC_NAMES: Record<string, Record<string, { de: string; hu: string; ro: string; en: string }>> = {
  us: {
    us_native_peoples: { de: "Native Americans", hu: "Amerikai őslakosok", ro: "Populații indigene", en: "Native Peoples" },
    us_exploration: { de: "Entdeckung Amerikas", hu: "Amerika felfedezése", ro: "Descoperirea Americii", en: "Exploration" },
    us_colonization_13: { de: "13 Kolonien", hu: "13 gyarmat", ro: "Cele 13 colonii", en: "13 Colonies" },
    us_colonial_life: { de: "Kolonialleben", hu: "Gyarmati élet", ro: "Viața colonială", en: "Colonial Life" },
    us_slavery_origins: { de: "Ursprung der Sklaverei", hu: "A rabszolgaság kezdetei", ro: "Originile sclaviei", en: "Slavery Origins" },
    us_french_indian_war: { de: "Französisch-Indianerkrieg", hu: "Francia-indián háború", ro: "Războiul franco-indian", en: "French & Indian War" },
    us_founding_fathers: { de: "Gründerväter", hu: "Alapító atyák", ro: "Părinții fondatori", en: "Founding Fathers" },
    us_declaration_independence: { de: "Unabhängigkeitserklärung", hu: "Függetlenségi nyilatkozat", ro: "Declarația de Independență", en: "Declaration of Independence" },
    us_revolutionary_war: { de: "Unabhängigkeitskrieg", hu: "Függetlenségi háború", ro: "Războiul de Independență", en: "Revolutionary War" },
    us_constitution: { de: "US-Verfassung", hu: "Alkotmány", ro: "Constituția", en: "Constitution" },
    us_louisiana_purchase: { de: "Louisiana-Kauf", hu: "Louisiana vásárlás", ro: "Cumpărarea Louisianei", en: "Louisiana Purchase" },
    us_lewis_clark: { de: "Lewis & Clark", hu: "Lewis és Clark", ro: "Lewis și Clark", en: "Lewis & Clark" },
    us_war_of_1812: { de: "Krieg von 1812", hu: "1812-es háború", ro: "Războiul din 1812", en: "War of 1812" },
    us_westward_expansion: { de: "Westexpansion", hu: "Nyugati terjeszkedés", ro: "Expansiunea spre Vest", en: "Westward Expansion" },
    us_trail_of_tears: { de: "Pfad der Tränen", hu: "Könnyek ösvénye", ro: "Drumul Lacrimilor", en: "Trail of Tears" },
    us_civil_war_causes: { de: "Bürgerkrieg — Ursachen", hu: "Polgárháború okai", ro: "Cauzele Războiului Civil", en: "Civil War Causes" },
    us_civil_war_events: { de: "Bürgerkrieg — Ereignisse", hu: "Polgárháború eseményei", ro: "Evenimente Război Civil", en: "Civil War Events" },
    us_lincoln: { de: "Lincoln", hu: "Lincoln", ro: "Lincoln", en: "Lincoln" },
    us_reconstruction: { de: "Rekonstruktion", hu: "Reconstructio", ro: "Reconstrucția", en: "Reconstruction" },
    us_industrial_age: { de: "Industriezeitalter", hu: "Ipari kor", ro: "Epoca Industrială", en: "Industrial Age" },
    us_gilded_age: { de: "Goldenes Zeitalter", hu: "Aranykor", ro: "Epoca de Aur", en: "Gilded Age" },
    us_progressive_era: { de: "Progressive Era", hu: "Progresszív korszak", ro: "Era Progresivă", en: "Progressive Era" },
    us_wwi: { de: "1. Weltkrieg (USA)", hu: "1. világháború USA", ro: "Primul Război Mondial SUA", en: "WWI" },
    us_roaring_twenties: { de: "Goldene Zwanziger", hu: "Bőgő húszas évek", ro: "Anii '20", en: "Roaring Twenties" },
    us_great_depression: { de: "Weltwirtschaftskrise", hu: "Nagy gazdasági válság", ro: "Marea Criză", en: "Great Depression" },
    us_new_deal: { de: "New Deal", hu: "New Deal", ro: "New Deal", en: "New Deal" },
    us_wwii_us: { de: "2. Weltkrieg (USA)", hu: "2. világháború USA", ro: "Al Doilea Război Mondial SUA", en: "WWII" },
    us_atomic_bomb: { de: "Atombombe", hu: "Atombomba", ro: "Bomba atomică", en: "Atomic Bomb" },
    us_post_wwii: { de: "Nachkriegs-USA", hu: "Háború utáni USA", ro: "SUA postbelică", en: "Post-WWII USA" },
    us_cold_war_start: { de: "Kalter Krieg — Anfang", hu: "Hidegháború kezdete", ro: "Războiul Rece — Început", en: "Cold War Start" },
    us_cold_war_events: { de: "Kalter Krieg — Ereignisse", hu: "Hidegháború eseményei", ro: "Evenimente Război Rece", en: "Cold War Events" },
    us_civil_rights: { de: "Bürgerrechtsbewegung", hu: "Polgárjogi mozgalom", ro: "Mișcarea Drepturilor Civile", en: "Civil Rights" },
    us_vietnam_war: { de: "Vietnamkrieg", hu: "Vietnami háború", ro: "Războiul din Vietnam", en: "Vietnam War" },
    us_space_race: { de: "Weltraumrennen", hu: "Űrverseny", ro: "Cursa Spațială", en: "Space Race" },
    us_70s_80s: { de: "70er & 80er Jahre", hu: "70-es és 80-as évek", ro: "Anii '70 și '80", en: "70s & 80s" },
    us_911: { de: "11. September", hu: "Szeptember 11", ro: "11 Septembrie", en: "9/11" },
    us_obama_era: { de: "Obama-Ära", hu: "Obama korszak", ro: "Era Obama", en: "Obama Era" },
    us_modern_tech: { de: "Moderne Technik", hu: "Modern technológia", ro: "Tehnologie Modernă", en: "Modern Tech" },
    us_recent_movements: { de: "Aktuelle Bewegungen", hu: "Legújabb mozgalmak", ro: "Mișcări recente", en: "Recent Movements" },
    us_cultural_icons: { de: "Kulturikone", hu: "Kulturális ikonok", ro: "Icoane culturale", en: "Cultural Icons" },
  },
  gb: {},
  hu: {},
  ro: {},
};

export function getCountrySubtopics(country: string, grade: number): { id: string; names: { de: string; hu: string; ro: string; en: string } }[] {
  const cc = country.toLowerCase();
  const countryData = COUNTRY_DATA[cc];
  if (!countryData) return [];
  const gKey = `k${grade}`;
  const gradeMap = countryData[gKey];
  if (!gradeMap) return [];
  const subtopicIds = Object.keys(gradeMap);
  const names = COUNTRY_TOPIC_NAMES[cc] || {};
  return subtopicIds.map(id => ({
    id,
    names: names[id] || { de: id, hu: id, ro: id, en: id },
  }));
}

export function getCountryQuestions(country: string, grade: number, subtopicId: string, count = 35): CurriculumQuestion[] {
  const cc = country.toLowerCase();
  const countryData = COUNTRY_DATA[cc];
  if (!countryData) return [];
  const gradeMap = countryData[`k${grade}`];
  if (!gradeMap) return [];
  const sub = gradeMap[subtopicId];
  if (!sub) return [];

  const out: CurriculumQuestion[] = [];
  for (const m of (sub.mcq || [])) {
    // Shuffle options
    const opts = [m.correct, ...m.wrong];
    for (let i = opts.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [opts[i], opts[j]] = [opts[j], opts[i]];
    }
    out.push({
      type: "mcq",
      topic: `Geschichte K${grade}`,
      subtopic: subtopicId,
      question: m.question,
      options: opts,
      correct: opts.indexOf(m.correct),
    });
  }
  for (const t of (sub.typing || [])) {
    out.push({
      type: "typing",
      topic: `Geschichte K${grade}`,
      subtopic: subtopicId,
      question: t.question,
      answer: t.answer,
    });
  }
  return out.sort(() => Math.random() - 0.5).slice(0, count);
}

export const COUNTRY_DATA_GRADES = COUNTRY_DATA;
