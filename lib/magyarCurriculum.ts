// lib/magyarCurriculum.ts
// AstroMagyar — Hungarian language curriculum
// 1. osztály (Grade 1): Betűk, szótagok, hangok, szavak, ellentétek, mondatok, szókincs

import type { CurriculumQuestion } from "./curriculumTypes";
import { G1_Generators_Hungarian } from "./hungarianGenerators";
import { G2_Generators_Hungarian } from "./hungarianGenerators2";

// ─── Type definitions ──────────────────────────────────────────────────────────
export interface MagyarMCQ {
  type: "mcq";
  topic: string;
  subtopic: string;
  question: string;
  options: string[];
  correct: number; // index of correct answer in options array
}

export interface MagyarSubtopic {
  id: string;
  name: Record<"hu" | "en" | "de" | "ro", string>;
  questions: MagyarMCQ[];
}

export interface MagyarTheme {
  id: string;
  name: Record<"hu" | "en" | "de" | "ro", string>;
  subtopics: MagyarSubtopic[];
}

export interface MagyarCurriculumGrade {
  [osztaly: number]: MagyarTheme[];
}

// ─── Theme and subtopic factory helpers ────────────────────────────────────────
function makeMagyarTheme(
  id: string,
  names: Record<"hu" | "en" | "de" | "ro", string>,
  subtopics: MagyarSubtopic[],
): MagyarTheme {
  return { id, name: names, subtopics };
}

function makeMagyarSubtopic(
  id: string,
  names: Record<"hu" | "en" | "de" | "ro", string>,
  questions: MagyarMCQ[],
): MagyarSubtopic {
  return { id, name: names, questions };
}

// ─── Question generator function ──────────────────────────────────────────────
// Maps topic keys to generator functions and returns generated questions
function generateMagyarQuestions(topicKey: string, _lang: string, osztaly: number = 1): MagyarMCQ[] {
  // Extract subtopic ID from key (format: "theme/subtopic")
  const [, subtopicId] = topicKey.split("/");

  // Select generator pool by grade
  const generatorPool = osztaly === 2 ? G2_Generators_Hungarian : G1_Generators_Hungarian;
  const generatorFn = (generatorPool as Record<string, () => MagyarMCQ[]>)[subtopicId];

  if (!generatorFn) {
    console.warn(`[MagyarCurriculum] No generator found for subtopic: ${subtopicId} (grade ${osztaly})`);
    return [];
  }

  // Call the generator to get questions
  return generatorFn();
}

// ─── O1 (1. osztály) Curriculum ───────────────────────────────────────────────

// Betűk / Letters theme
const O1_BETUK_MAGANHANGZOK = makeMagyarSubtopic(
  "maganhangzok",
  {
    hu: "Magánhangzók",
    en: "Vowels",
    de: "Vokale",
    ro: "Vocale",
  },
  generateMagyarQuestions("betuk/maganhangzok", "hu"),
);

const O1_BETUK_MASSALHANGZOK = makeMagyarSubtopic(
  "massalhangzok",
  {
    hu: "Mássalhangzók",
    en: "Consonants",
    de: "Konsonanten",
    ro: "Consoane",
  },
  generateMagyarQuestions("betuk/massalhangzok", "hu"),
);

const O1_BETUK_ABC_SORREND = makeMagyarSubtopic(
  "abc_sorrend",
  {
    hu: "ABC-sorrend",
    en: "Alphabet Order",
    de: "Alphabet-Reihenfolge",
    ro: "Ordinea alfabetului",
  },
  generateMagyarQuestions("betuk/abc_sorrend", "hu"),
);

const O1_BETUK_SZOTAGSZAM = makeMagyarSubtopic(
  "szotagszam",
  {
    hu: "Szótagszám",
    en: "Syllable Count",
    de: "Silbenzahl",
    ro: "Numărul de silabe",
  },
  generateMagyarQuestions("betuk/szotagszam", "hu"),
);

const O1_BETUK_ELVALASZTAS = makeMagyarSubtopic(
  "elvalasztas",
  {
    hu: "Szótagelválasztás",
    en: "Syllable Separation",
    de: "Silbentrennung",
    ro: "Separarea silabelor",
  },
  generateMagyarQuestions("betuk/elvalasztas", "hu"),
);

const O1_BETUK_BETUPARAK = makeMagyarSubtopic(
  "betuparak",
  {
    hu: "Betűpárok",
    en: "Letter Pairs",
    de: "Buchstabenpaare",
    ro: "Perechi de litere",
  },
  generateMagyarQuestions("betuk/betuparak", "hu"),
);

const O1_BETUK_ROVID_HOSSZU = makeMagyarSubtopic(
  "rovid_hosszu",
  {
    hu: "Rövid-hosszú magánhangzók",
    en: "Short-Long Vowels",
    de: "Kurz-Langvokale",
    ro: "Vocale scurte și lungi",
  },
  generateMagyarQuestions("betuk/rovid_hosszu", "hu"),
);

const O1_BETUK_J_LY = makeMagyarSubtopic(
  "j_ly",
  {
    hu: "j/ly megkülönböztetés",
    en: "j/ly Distinction",
    de: "j/ly-Unterscheidung",
    ro: "Distincția j/ly",
  },
  generateMagyarQuestions("betuk/j_ly", "hu"),
);

const O1_THEME_BETUK = makeMagyarTheme(
  "betuk",
  {
    hu: "Betűk",
    en: "Letters",
    de: "Buchstaben",
    ro: "Litere",
  },
  [
    O1_BETUK_MAGANHANGZOK,
    O1_BETUK_MASSALHANGZOK,
    O1_BETUK_ABC_SORREND,
    O1_BETUK_SZOTAGSZAM,
    O1_BETUK_ELVALASZTAS,
    O1_BETUK_BETUPARAK,
    O1_BETUK_ROVID_HOSSZU,
    O1_BETUK_J_LY,
  ],
);

// Szavak / Words theme
const O1_SZAVAK_FONEVEK = makeMagyarSubtopic(
  "fonevek",
  {
    hu: "Főnevek",
    en: "Nouns",
    de: "Substantive",
    ro: "Substantive",
  },
  generateMagyarQuestions("szavak/fonevek", "hu"),
);

const O1_SZAVAK_IGEK = makeMagyarSubtopic(
  "igek",
  {
    hu: "Igék",
    en: "Verbs",
    de: "Verben",
    ro: "Verbe",
  },
  generateMagyarQuestions("szavak/igek", "hu"),
);

const O1_SZAVAK_MELLEKNEVEK = makeMagyarSubtopic(
  "melleknevek",
  {
    hu: "Melléknevek",
    en: "Adjectives",
    de: "Adjektive",
    ro: "Adjective",
  },
  generateMagyarQuestions("szavak/melleknevek", "hu"),
);

const O1_SZAVAK_ELLENTETEK = makeMagyarSubtopic(
  "ellentetek",
  {
    hu: "Ellentétek",
    en: "Opposites",
    de: "Gegensätze",
    ro: "Opuse",
  },
  generateMagyarQuestions("szavak/ellentetek", "hu"),
);

const O1_THEME_SZAVAK = makeMagyarTheme(
  "szavak",
  {
    hu: "Szavak",
    en: "Words",
    de: "Wörter",
    ro: "Cuvinte",
  },
  [
    O1_SZAVAK_FONEVEK,
    O1_SZAVAK_IGEK,
    O1_SZAVAK_MELLEKNEVEK,
    O1_SZAVAK_ELLENTETEK,
  ],
);

// Mondatok / Sentences theme
const O1_MONDATOK_MONDATFAJTAK = makeMagyarSubtopic(
  "mondatfajtak",
  {
    hu: "Mondatfajták",
    en: "Sentence Types",
    de: "Satzarten",
    ro: "Tipuri de propoziții",
  },
  generateMagyarQuestions("mondatok/mondatfajtak", "hu"),
);

const O1_MONDATOK_IRASJELEK = makeMagyarSubtopic(
  "irasjelek",
  {
    hu: "Írásjelek",
    en: "Punctuation",
    de: "Satzzeichen",
    ro: "Semne de punctuație",
  },
  generateMagyarQuestions("mondatok/irasjelek", "hu"),
);

const O1_MONDATOK_NAGYBETU = makeMagyarSubtopic(
  "nagybetu",
  {
    hu: "Nagybetűs írás",
    en: "Capitalization",
    de: "Großschreibung",
    ro: "Majuscule",
  },
  generateMagyarQuestions("mondatok/nagybetu", "hu"),
);

const O1_THEME_MONDATOK = makeMagyarTheme(
  "mondatok",
  {
    hu: "Mondatok",
    en: "Sentences",
    de: "Sätze",
    ro: "Propoziții",
  },
  [
    O1_MONDATOK_MONDATFAJTAK,
    O1_MONDATOK_IRASJELEK,
    O1_MONDATOK_NAGYBETU,
  ],
);

// Szókincs / Vocabulary theme
const O1_SZOKINCS_ALLATOK = makeMagyarSubtopic(
  "allatok",
  {
    hu: "Állatok",
    en: "Animals",
    de: "Tiere",
    ro: "Animale",
  },
  generateMagyarQuestions("szokincs/allatok", "hu"),
);

const O1_SZOKINCS_SZINEK = makeMagyarSubtopic(
  "szinek",
  {
    hu: "Színek",
    en: "Colors",
    de: "Farben",
    ro: "Culori",
  },
  generateMagyarQuestions("szokincs/szinek", "hu"),
);

const O1_SZOKINCS_CSALAD = makeMagyarSubtopic(
  "csalad",
  {
    hu: "Család",
    en: "Family",
    de: "Familie",
    ro: "Familie",
  },
  generateMagyarQuestions("szokincs/csalad", "hu"),
);

const O1_SZOKINCS_TESTRESZ = makeMagyarSubtopic(
  "testresz",
  {
    hu: "Testrészek",
    en: "Body Parts",
    de: "Körperteile",
    ro: "Părți ale corpului",
  },
  generateMagyarQuestions("szokincs/testresz", "hu"),
);

const O1_SZOKINCS_ELELMISZER = makeMagyarSubtopic(
  "elelmiszer",
  {
    hu: "Élelmiszerek",
    en: "Foods",
    de: "Lebensmittel",
    ro: "Alimente",
  },
  generateMagyarQuestions("szokincs/elelmiszer", "hu"),
);

const O1_THEME_SZOKINCS = makeMagyarTheme(
  "szokincs",
  {
    hu: "Szókincs",
    en: "Vocabulary",
    de: "Wortschatz",
    ro: "Vocabular",
  },
  [
    O1_SZOKINCS_ALLATOK,
    O1_SZOKINCS_SZINEK,
    O1_SZOKINCS_CSALAD,
    O1_SZOKINCS_TESTRESZ,
    O1_SZOKINCS_ELELMISZER,
  ],
);

// ─── O2 (2. osztály) Curriculum ───────────────────────────────────────────────
// Szófajok / Word types theme
const O2_SZOFAJOK_FONEV = makeMagyarSubtopic(
  "fonev",
  { hu: "Főnevek", en: "Nouns", de: "Nomen", ro: "Substantive" },
  generateMagyarQuestions("szofajok/fonev", "hu", 2),
);

const O2_SZOFAJOK_IGE = makeMagyarSubtopic(
  "ige",
  { hu: "Igék", en: "Verbs", de: "Verben", ro: "Verbe" },
  generateMagyarQuestions("szofajok/ige", "hu", 2),
);

const O2_SZOFAJOK_MELLEKNEV = makeMagyarSubtopic(
  "melleknev",
  { hu: "Melléknevek", en: "Adjectives", de: "Adjektive", ro: "Adjective" },
  generateMagyarQuestions("szofajok/melleknev", "hu", 2),
);

const O2_THEME_SZOFAJOK = makeMagyarTheme(
  "szofajok",
  { hu: "Szófajok", en: "Word Types", de: "Wortarten", ro: "Tipuri de cuvinte" },
  [O2_SZOFAJOK_FONEV, O2_SZOFAJOK_IGE, O2_SZOFAJOK_MELLEKNEV],
);

// Helyesírás / Spelling theme
const O2_HELYESIRAS_LY_J = makeMagyarSubtopic(
  "ly_j",
  { hu: "ly/j szabály", en: "ly/j rule", de: "ly/j Regel", ro: "Regula ly/j" },
  generateMagyarQuestions("helyesiras/ly_j", "hu", 2),
);

const O2_HELYESIRAS_ROVID_HOSSZU = makeMagyarSubtopic(
  "rovid_hosszu",
  { hu: "Rövid-hosszú", en: "Short-long vowels", de: "Kurz-lang", ro: "Vocale scurte-lungi" },
  generateMagyarQuestions("helyesiras/rovid_hosszu", "hu", 2),
);

const O2_THEME_HELYESIRAS = makeMagyarTheme(
  "helyesiras",
  { hu: "Helyesírás", en: "Spelling", de: "Rechtschreibung", ro: "Ortografie" },
  [O2_HELYESIRAS_LY_J, O2_HELYESIRAS_ROVID_HOSSZU],
);

// Mondattan / Grammar theme
const O2_MONDAT_MONDATFAJTAK = makeMagyarSubtopic(
  "mondatfajtak",
  { hu: "Mondatfajták", en: "Sentence types", de: "Satztypen", ro: "Tipuri de propoziții" },
  generateMagyarQuestions("mondat/mondatfajtak", "hu", 2),
);

const O2_MONDAT_MONDATRESZ = makeMagyarSubtopic(
  "mondatresz",
  { hu: "Mondatrészek", en: "Sentence parts", de: "Satzglieder", ro: "Componente propoziție" },
  generateMagyarQuestions("mondat/mondatresz", "hu", 2),
);

const O2_THEME_MONDAT = makeMagyarTheme(
  "mondat",
  { hu: "Mondattan", en: "Grammar", de: "Grammatik", ro: "Gramatică" },
  [O2_MONDAT_MONDATFAJTAK, O2_MONDAT_MONDATRESZ],
);

// Szó / Word structure theme
const O2_SZO_OSSZETETEL = makeMagyarSubtopic(
  "osszetetel",
  { hu: "Szóösszetétel", en: "Compound words", de: "Zusammensetzung", ro: "Compuneri" },
  generateMagyarQuestions("szo/osszetetel", "hu", 2),
);

const O2_SZO_KEPZOK = makeMagyarSubtopic(
  "kepzok",
  { hu: "Képzők", en: "Affixes", de: "Affixe", ro: "Afixe" },
  generateMagyarQuestions("szo/kepzok", "hu", 2),
);

const O2_THEME_SZO = makeMagyarTheme(
  "szo",
  { hu: "Szó szerkezete", en: "Word structure", de: "Wortstruktur", ro: "Structura cuvintelor" },
  [O2_SZO_OSSZETETEL, O2_SZO_KEPZOK],
);

// Ragozás / Conjugation theme
const O2_RAGOZAS_FONEVREG = makeMagyarSubtopic(
  "fonevreg",
  { hu: "Főnévragozás", en: "Noun declension", de: "Nomendeklination", ro: "Declinarea substantivelor" },
  generateMagyarQuestions("ragozas/fonevreg", "hu", 2),
);

const O2_RAGOZAS_IGEREG = makeMagyarSubtopic(
  "igereg",
  { hu: "Igeragozás", en: "Verb conjugation", de: "Verbkonjugation", ro: "Conjugarea verbelor" },
  generateMagyarQuestions("ragozas/igereg", "hu", 2),
);

const O2_THEME_RAGOZAS = makeMagyarTheme(
  "ragozas",
  { hu: "Ragozás", en: "Conjugation", de: "Konjugation", ro: "Conjugare" },
  [O2_RAGOZAS_FONEVREG, O2_RAGOZAS_IGEREG],
);

// Szókincs / Vocabulary theme
const O2_SZOKINCS_SZINONIMAK = makeMagyarSubtopic(
  "szinonimak",
  { hu: "Szinonimák", en: "Synonyms", de: "Synonyme", ro: "Sinonime" },
  generateMagyarQuestions("szokincs/szinonimak", "hu", 2),
);

const O2_SZOKINCS_ELLENTETEK2 = makeMagyarSubtopic(
  "ellentetek2",
  { hu: "Ellentétek", en: "Antonyms", de: "Antonyme", ro: "Antonime" },
  generateMagyarQuestions("szokincs/ellentetek2", "hu", 2),
);

const O2_SZOKINCS_FOGLALKOZASOK = makeMagyarSubtopic(
  "foglalkozasok",
  { hu: "Foglalkozások", en: "Occupations", de: "Berufe", ro: "Ocupații" },
  generateMagyarQuestions("szokincs/foglalkozasok", "hu", 2),
);

const O2_SZOKINCS_EVSZAKOK = makeMagyarSubtopic(
  "evszakok",
  { hu: "Évszakok", en: "Seasons", de: "Jahreszeiten", ro: "Anotimpuri" },
  generateMagyarQuestions("szokincs/evszakok", "hu", 2),
);

const O2_SZOKINCS_ISKOLA = makeMagyarSubtopic(
  "iskola",
  { hu: "Iskolai szókincs", en: "School vocabulary", de: "Schulwortschatz", ro: "Vocabular școlar" },
  generateMagyarQuestions("szokincs/iskola", "hu", 2),
);

const O2_THEME_SZOKINCS = makeMagyarTheme(
  "szokincs",
  { hu: "Szókincs", en: "Vocabulary", de: "Wortschatz", ro: "Vocabular" },
  [O2_SZOKINCS_SZINONIMAK, O2_SZOKINCS_ELLENTETEK2, O2_SZOKINCS_FOGLALKOZASOK, O2_SZOKINCS_EVSZAKOK, O2_SZOKINCS_ISKOLA],
);

// Olvasás / Reading theme
const O2_OLVASAS_SZOKINCS = makeMagyarSubtopic(
  "szokincs",
  { hu: "Olvasási szókincs", en: "Reading vocabulary", de: "Lesewortschatz", ro: "Vocabular de lectura" },
  generateMagyarQuestions("olvasas/szokincs", "hu", 2),
);

const O2_OLVASAS_SZOVEGERTES = makeMagyarSubtopic(
  "szovegertes",
  { hu: "Szövegértés", en: "Reading comprehension", de: "Leseverständnis", ro: "Înțelegere text" },
  generateMagyarQuestions("olvasas/szovegertes", "hu", 2),
);

const O2_THEME_OLVASAS = makeMagyarTheme(
  "olvasas",
  { hu: "Olvasás", en: "Reading", de: "Lesen", ro: "Lectura" },
  [O2_OLVASAS_SZOKINCS, O2_OLVASAS_SZOVEGERTES],
);

// ─── O1 Curriculum assembly ───────────────────────────────────────────────────
export const MAGYAR_CURRICULUM: MagyarCurriculumGrade = {
  1: [
    O1_THEME_BETUK,
    O1_THEME_SZAVAK,
    O1_THEME_MONDATOK,
    O1_THEME_SZOKINCS,
  ],
  2: [
    O2_THEME_SZOFAJOK,
    O2_THEME_HELYESIRAS,
    O2_THEME_MONDAT,
    O2_THEME_SZO,
    O2_THEME_RAGOZAS,
    O2_THEME_SZOKINCS,
    O2_THEME_OLVASAS,
  ],
};

// ─── Question retrieval function ──────────────────────────────────────────────
/**
 * Retrieves curriculum questions for a given topic key.
 * Topic key format: "theme/subtopic" (e.g., "betuk/maganhangzok")
 *
 * @param topicKeys Array of topic keys to fetch questions from
 * @param count Number of unique questions to return (will attempt to reach this)
 * @param osztaly School year (1 = O1)
 * @returns Array of MagyarMCQ questions
 */
export function getMagyarCurriculumQuestions(
  topicKeys: string[],
  count: number = 10,
  osztaly: number = 1,
): MagyarMCQ[] {
  const themes = MAGYAR_CURRICULUM[osztaly] ?? [];
  const pool: MagyarMCQ[] = [];
  const seen = new Set<string>();

  for (let attempt = 0; attempt < count * 20 && pool.length < count; attempt++) {
    const key = topicKeys[attempt % topicKeys.length];
    if (!key) continue;

    const [themeId, subtopicId] = key.split("/");
    const theme = themes.find((t) => t.id === themeId);
    const subtopic = theme?.subtopics.find((s) => s.id === subtopicId);

    if (!subtopic || subtopic.questions.length === 0) continue;

    const question = subtopic.questions[Math.floor(Math.random() * subtopic.questions.length)];
    if (!seen.has(question.question)) {
      seen.add(question.question);
      pool.push(question);
    }
  }

  return pool;
}

// ─── Types already exported inline above ───────────────────────────────────
