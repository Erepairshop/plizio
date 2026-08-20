import type { CurriculumTheme, CurriculumQuestion, GradeMark } from "./curriculumTypes";
import { getG5GeschichteQuestions, G5_GESCHICHTE_CURRICULUM } from "./geschichteCurriculum5";
import { getG6GeschichteQuestions, G6_GESCHICHTE_CURRICULUM } from "./geschichteCurriculum6";
import { getG7GeschichteQuestions, G7_GESCHICHTE_CURRICULUM } from "./geschichteCurriculum7";
import { getG8GeschichteQuestions, G8_GESCHICHTE_CURRICULUM } from "./geschichteCurriculum8";
import { getCountrySubtopics, getCountryQuestions } from "./geschichteCountryContent";
import { G5_Generators_Geschichte } from "./geschichteGenerators5";
import { G6_Generators_Geschichte } from "./geschichteGenerators6";
import { G7_Generators_Geschichte } from "./geschichteGenerators7";
import { G8_Generators_Geschichte } from "./geschichteGenerators8";

// Map g${grade}_t${n} IDs → real generator keys (by order of G{n}_SUBTOPICS in curriculum files)
const GENERATOR_KEY_ORDER: Record<number, string[]> = {
  5: Object.keys(G5_Generators_Geschichte),
  6: Object.keys(G6_Generators_Geschichte),
  7: Object.keys(G7_Generators_Geschichte),
  8: Object.keys(G8_Generators_Geschichte),
};

function mapToGeneratorKey(grade: number, subtopicId: string): string | null {
  const match = subtopicId.match(/^g\d+_t(\d+)$/);
  if (match) {
    const idx = parseInt(match[1], 10) - 1;
    const keys = GENERATOR_KEY_ORDER[grade] || [];
    return keys[idx] || null;
  }
  return subtopicId; // already a real key
}

// ─── COUNTRY-SPECIFIC TOPICS MAPPING ────────────────────────────────────────
// 24 topics per grade (K5-K8)
const SPECIFIC_TOPICS: Record<number, { de: string[], hu: string[], ro: string[], en: string[] }> = {
  5: {
    de: ["Frühe Germanen", "Römer in Germanien", "Völkerwanderung", "Frankenreich", "Merowinger", "Karolinger"],
    hu: ["Magyar őstörténet", "A Kárpát-medence az ókorban", "A honfoglalás", "Kalandozások kora", "Géza fejedelem", "Szent István"],
    ro: ["Preistoria", "Dacii și Geții", "Războaiele daco-romane", "Romanizarea Daciei", "Retragerea aureliană", "Migrațiile timpurii"],
    en: ["Early Human Migration", "Ancient River Valleys", "Ancient Greece", "Roman Republic", "Roman Empire", "Decline of Rome"]
  },
  6: {
    de: ["Heiliges Römisches Reich (HRE)", "Investiturstreit", "Barbarossa", "Hanse", "Rittertum", "Städtewesen"],
    hu: ["Árpád-ház", "Szent László", "Könyves Kálmán", "Aranybulla", "Tatárjárás", "Anjou-kor"],
    ro: ["Formarea poporului român", "Descălecatul", "Ștefan cel Mare", "Mircea cel Bătrân", "Vlad Țepeș", "Iancu de Hunedoara"],
    en: ["Early Middle Ages", "Charlemagne", "Feudalism", "The Crusades", "High Middle Ages", "The Black Death"]
  },
  7: {
    de: ["Reformation", "Bauernkriege", "Dreißigjähriger Krieg", "Absolutismus in Preußen", "Aufklärung", "Befreiungskriege"],
    hu: ["Török hódoltság", "Mohács", "Erdélyi Fejedelemség", "Habsburg uralom", "Rákóczi-szabadságharc", "Reformkor"],
    ro: ["Mihai Viteazul", "Războaiele otomane", "Regimul fanariot", "Tudor Vladimirescu 1821", "Revoluția de la 1848", "Unirea Principatelor 1859"],
    en: ["Renaissance", "Age of Discovery", "Scientific Revolution", "The Enlightenment", "American Revolution", "French Revolution"]
  },
  8: {
    de: ["Weimarer Republik", "Drittes Reich (WW2)", "Holocaust", "Geteiltes Deutschland (DDR/BRD)", "Kalter Krieg", "Wiedervereinigung"],
    hu: ["1848-as forradalom", "Kiegyezés (1867)", "Első világháború és Trianon", "Horthy-korszak", "1956-os forradalom", "Rendszerváltás"],
    ro: ["Războiul de Independență", "Regatul României", "Marea Unire 1918", "România interbelică", "Comunismul", "Revoluția din 1989"],
    en: ["Industrial Revolution", "Imperialism", "World War I", "World War II", "Cold War", "Modern Era"]
  }
};

function generateTopics(grade: number): { id: string, name: Record<string, string>, hasGenerator: boolean, questions: any[] }[] {
  const topics = [];
  const spec = SPECIFIC_TOPICS[grade] || { de: [], hu: [], ro: [], en: [] };
  
  for (let i = 0; i < 24; i++) {
    topics.push({
      id: `g${grade}_t${i + 1}`,
      name: {
        de: spec.de[i] || `Deutsches Thema ${i + 1}`,
        hu: spec.hu[i] || `Magyar téma ${i + 1}`,
        ro: spec.ro[i] || `Subiect românesc ${i + 1}`,
        en: spec.en[i] || `World History Topic ${i + 1}`
      },
      questions: [],
      hasGenerator: true
    });
  }
  return topics;
}

export const GESCHICHTE_CURRICULUM: Record<number, CurriculumTheme[]> = {
  5: G5_GESCHICHTE_CURRICULUM,
  6: G6_GESCHICHTE_CURRICULUM,
  7: G7_GESCHICHTE_CURRICULUM,
  8: G8_GESCHICHTE_CURRICULUM,
};

export const GESCHICHTE_SUBTOPIC_HINTS: Record<string, string> = {};

const COUNTRY_SPECIFIC_HISTORY_CODES = new Set(["us", "gb", "uk", "hu", "ro"]);
const SHARED_GERMAN_HISTORY_CODES = new Set(["de", "at", "ch"]);
const UNSUPPORTED_ENGLISH_HISTORY_CODES = new Set(["au", "ca", "ie", "nz"]);

function normalizeHistoryCountryCode(countryCode?: string): string {
  const cc = (countryCode || "").toLowerCase();
  return cc === "uk" ? "gb" : cc;
}

// Country-aware curriculum: returns themes with country-specific subtopics
// when a supported country (US/GB/HU/RO) is selected. Falls back to the
// grade's default curriculum (DE generator-backed).
const COUNTRY_THEME_META: Record<string, { icon: string; color: string; name: Record<string, string> }> = {
  us: { icon: "🇺🇸", color: "#3B82F6", name: { de: "US-Geschichte", hu: "USA történelem", ro: "Istoria SUA", en: "US History" } },
  gb: { icon: "🇬🇧", color: "#6366F1", name: { de: "UK-Geschichte", hu: "UK történelem", ro: "Istoria UK", en: "UK History" } },
  hu: { icon: "🇭🇺", color: "#EF4444", name: { de: "Ungarische Geschichte", hu: "Magyar történelem", ro: "Istoria Ungariei", en: "Hungarian History" } },
  ro: { icon: "🇷🇴", color: "#F59E0B", name: { de: "Rumänische Geschichte", hu: "Román történelem", ro: "Istoria României", en: "Romanian History" } },
};

export function getCurriculumForCountry(grade: number, countryCode?: string): CurriculumTheme[] {
  const defaultTheme = GESCHICHTE_CURRICULUM[grade] || [];
  const cc = normalizeHistoryCountryCode(countryCode);
  if (UNSUPPORTED_ENGLISH_HISTORY_CODES.has(cc)) {
    return [];
  }
  const meta = COUNTRY_THEME_META[cc];
  const countrySubs = getCountrySubtopics(cc, grade);
  if (!meta || countrySubs.length === 0) {
    // Shared D-A-CH pool and all other non-country-specific fallbacks use the
    // default generator-backed curriculum.
    return defaultTheme;
  }
  // Country theme with country-specific subtopics
  return [
    {
      id: `g${grade}_country_${cc}`,
      name: meta.name,
      icon: meta.icon,
      color: meta.color,
      subtopics: countrySubs.map(s => ({
        id: s.id,
        name: s.names,
        questions: [],
        hasGenerator: true,
      })),
    },
  ];
}

export function getGeschichteQuestions(
  grade: number,
  subtopicIds: string[],
  count: number = 10,
  countryCode?: string
): CurriculumQuestion[] {
  const pool: CurriculumQuestion[] = [];

  const fetch: Record<number, (id: string, cc: string, c: number) => CurriculumQuestion[]> = {
    5: getG5GeschichteQuestions,
    6: getG6GeschichteQuestions,
    7: getG7GeschichteQuestions,
    8: getG8GeschichteQuestions,
  };
  const fn = fetch[grade];
  if (!fn) return [];

  const cc = normalizeHistoryCountryCode(countryCode);
  const hasCountrySpecific = COUNTRY_SPECIFIC_HISTORY_CODES.has(cc);
  if (UNSUPPORTED_ENGLISH_HISTORY_CODES.has(cc)) {
    return [];
  }

  // Prefix that country-specific subtopic IDs actually use for the selected country.
  // GB data uses the "uk_" prefix; the rest use their own country code.
  const ccPrefix = cc === "gb" ? "uk_" : `${cc}_`;
  const generatorLang = SHARED_GERMAN_HISTORY_CODES.has(cc) || !cc ? "DE" : cc.toUpperCase();

  for (const id of subtopicIds) {
    if (hasCountrySpecific) {
      if (!id.startsWith(ccPrefix)) {
        continue;
      }
      const qs = getCountryQuestions(cc, grade, id, 35);
      if (qs.length > 0) {
        pool.push(...qs);
      }
      continue;
    }

    const realId = mapToGeneratorKey(grade, id) || id;
    const qs = fn(realId, generatorLang, 35);
    pool.push(...qs);
  }

  const normalize = (value: unknown): string => String(value ?? "")
    .normalize("NFKC")
    .toLocaleLowerCase()
    .replace(/[\p{P}\p{S}]+/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
  const answerKey = (question: CurriculumQuestion): string => {
    if (question.type === "mcq") {
      const options = Array.isArray(question.options) ? question.options : [];
      return normalize(options[question.correct ?? -1]);
    }
    const answer = Array.isArray(question.answer) ? question.answer[0] : question.answer;
    return normalize(answer);
  };

  // A history test should not ask for the same fact twice, even when the
  // country pool contains differently worded variants of the same question.
  const seenQuestions = new Set<string>();
  const seenAnswers = new Set<string>();
  const uniquePool = pool.filter(question => {
    const questionKey = normalize(question.question);
    const answer = answerKey(question);
    if (!answer || seenQuestions.has(questionKey) || seenAnswers.has(answer)) return false;
    seenQuestions.add(questionKey);
    seenAnswers.add(answer);
    return true;
  });

  const shuffled = uniquePool.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function calculateGeschichteMark(pct: number): GradeMark {
  if (pct >= 92) return { label: "1", description: "Sehr gut", color: "#10B981", emoji: "🌟" };
  if (pct >= 80) return { label: "2", description: "Gut", color: "#3B82F6", emoji: "😊" };
  if (pct >= 65) return { label: "3", description: "Befriedigend", color: "#F59E0B", emoji: "🙂" };
  if (pct >= 50) return { label: "4", description: "Ausreichend", color: "#F97316", emoji: "😐" };
  if (pct >= 30) return { label: "5", description: "Mangelhaft", color: "#EF4444", emoji: "😕" };
  return { label: "6", description: "Ungenügend", color: "#991B1B", emoji: "😞" };
}
