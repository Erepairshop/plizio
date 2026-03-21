// lib/magyarCurriculum.ts
// AstroMagyar — Hungarian language curriculum
// 1. osztály (Grade 1): Betűk, szótagok, hangok, szavak, ellentétek, mondatok, szókincs

import type { CurriculumQuestion, CurriculumTyping } from "./curriculumTypes";
import { G1_Generators_Hungarian } from "./hungarianGenerators";
import { G2_Generators_Hungarian } from "./hungarianGenerators2";
import { G3_Generators_Hungarian } from "./hungarianGenerators3";
import { G4_Generators_Hungarian } from "./hungarianGenerators4";
import { G5_Generators_Hungarian } from "./hungarianGenerators5";
import { G6_Generators_Hungarian } from "./hungarianGenerators6";
import { G7_Generators_Hungarian } from "./hungarianGenerators7";
import { G8_Generators_Hungarian } from "./hungarianGenerators8";

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
  let generatorPool: Record<string, () => MagyarMCQ[] | CurriculumTyping[]>;
  switch (osztaly) {
    case 2:
      generatorPool = G2_Generators_Hungarian;
      break;
    case 3:
      generatorPool = G3_Generators_Hungarian;
      break;
    case 4:
      generatorPool = G4_Generators_Hungarian;
      break;
    case 5:
      generatorPool = G5_Generators_Hungarian;
      break;
    case 6:
      generatorPool = G6_Generators_Hungarian;
      break;
    case 7:
      generatorPool = G7_Generators_Hungarian;
      break;
    case 8:
      generatorPool = G8_Generators_Hungarian;
      break;
    default:
      generatorPool = G1_Generators_Hungarian;
  }

  const generatorFn = (generatorPool as Record<string, () => MagyarMCQ[] | CurriculumTyping[]>)[subtopicId];

  if (!generatorFn) {
    console.warn(`[MagyarCurriculum] No generator found for subtopic: ${subtopicId} (grade ${osztaly})`);
    return [];
  }

  // Call the generator to get questions
  const result = generatorFn();
  return (result as MagyarMCQ[]) || [];
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

// ─── O6 (6. osztály) Curriculum ───────────────────────────────────────────────

// Mondat / Sentences theme
const O6_MONDAT_OSSZETETT_MELLER = makeMagyarSubtopic(
  "osszetett_mellér",
  { hu: "Mellérendelő összetett mondatok", en: "Coordinate Complex Sentences", de: "Beigeordnete Sätze", ro: "Propoziții coordinate" },
  generateMagyarQuestions("mondat/osszetett_mellér", "hu", 6),
);

const O6_MONDAT_OSSZETETT_ALAR = makeMagyarSubtopic(
  "osszetett_alár",
  { hu: "Alárendelő összetett mondatok", en: "Subordinate Complex Sentences", de: "Untergeordnete Sätze", ro: "Propoziții subordonate" },
  generateMagyarQuestions("mondat/osszetett_alár", "hu", 6),
);

const O6_THEME_MONDAT = makeMagyarTheme(
  "mondat",
  { hu: "Mondattan", en: "Syntax", de: "Satzlehre", ro: "Sintaxă" },
  [O6_MONDAT_OSSZETETT_MELLER, O6_MONDAT_OSSZETETT_ALAR],
);

// Stilisztika / Style theme
const O6_STILISZTIKA_HASONLAT = makeMagyarSubtopic(
  "hasonlat_metafora",
  { hu: "Hasonlat és metafora", en: "Simile and Metaphor", de: "Vergleich und Metapher", ro: "Comparație și metaforă" },
  generateMagyarQuestions("stilisztika/hasonlat_metafora", "hu", 6),
);

const O6_STILISZTIKA_MEGSZEMELYESITES = makeMagyarSubtopic(
  "megszemelyes",
  { hu: "Megszemélyesítés", en: "Personification", de: "Personifikation", ro: "Personificare" },
  generateMagyarQuestions("stilisztika/megszemelyes", "hu", 6),
);

const O6_THEME_STILISZTIKA = makeMagyarTheme(
  "stilisztika",
  { hu: "Stilisztika", en: "Stylistics", de: "Stilistik", ro: "Stilistică" },
  [O6_STILISZTIKA_HASONLAT, O6_STILISZTIKA_MEGSZEMELYESITES],
);

// Szókincs / Vocabulary theme
const O6_SZOKINCS_IDEGEN = makeMagyarSubtopic(
  "idegen_szavak",
  { hu: "Idegen szavak", en: "Foreign Words", de: "Fremdwörter", ro: "Cuvinte străine" },
  generateMagyarQuestions("szokincs/idegen_szavak", "hu", 6),
);

const O6_SZOKINCS_SZAKSZAVAK = makeMagyarSubtopic(
  "szakkifejezesek",
  { hu: "Szakkifejezések", en: "Technical Terms", de: "Fachbegriffe", ro: "Termeni tehnici" },
  generateMagyarQuestions("szokincs/szakkifejezesek", "hu", 6),
);

const O6_THEME_SZOKINCS = makeMagyarTheme(
  "szokincs",
  { hu: "Szókincs", en: "Vocabulary", de: "Wortschatz", ro: "Vocabular" },
  [O6_SZOKINCS_IDEGEN, O6_SZOKINCS_SZAKSZAVAK],
);

// Nyelvtörténet / Language History theme
const O6_NYELVTORT_CSALAD = makeMagyarSubtopic(
  "nyelvcsal",
  { hu: "Nyelvcsaládok", en: "Language Families", de: "Sprachfamilien", ro: "Familii de limbi" },
  generateMagyarQuestions("nyelvtort/nyelvcsal", "hu", 6),
);

const O6_NYELVTORT_JOVENENY = makeMagyarSubtopic(
  "jovenényszavak",
  { hu: "Jövevényszavak", en: "Borrowed Words", de: "Lehnwörter", ro: "Cuvinte împrumutate" },
  generateMagyarQuestions("nyelvtort/jovenényszavak", "hu", 6),
);

const O6_THEME_NYELVTORT = makeMagyarTheme(
  "nyelvtort",
  { hu: "Nyelvtörténet", en: "Language History", de: "Sprachgeschichte", ro: "Istorie limbă" },
  [O6_NYELVTORT_CSALAD, O6_NYELVTORT_JOVENENY],
);

// Retorika / Rhetoric theme
const O6_RETORIKA_ERVELES = makeMagyarSubtopic(
  "erveles_alap",
  { hu: "Érvelés alapok", en: "Argumentation Basics", de: "Argumentationsgrundlagen", ro: "Bazele argumentării" },
  generateMagyarQuestions("retorika/erveles_alap", "hu", 6),
);

const O6_RETORIKA_MEGGYOZES = makeMagyarSubtopic(
  "meggyozes",
  { hu: "Meggyőzés", en: "Persuasion", de: "Überzeugung", ro: "Persuasiune" },
  generateMagyarQuestions("retorika/meggyozes", "hu", 6),
);

const O6_THEME_RETORIKA = makeMagyarTheme(
  "retorika",
  { hu: "Retorika", en: "Rhetoric", de: "Rhetorik", ro: "Ritorică" },
  [O6_RETORIKA_ERVELES, O6_RETORIKA_MEGGYOZES],
);

// Szöveg / Text theme
const O6_SZOVEG_ERTELMEZ = makeMagyarSubtopic(
  "ertelmez_halado",
  { hu: "Szövegértelmezés haladó", en: "Advanced Text Comprehension", de: "Fortgeschrittenes Textverständnis", ro: "Înțelegere avansată" },
  generateMagyarQuestions("szoveg/ertelmez_halado", "hu", 6),
);

const O6_SZOVEG_ELEMZES = makeMagyarSubtopic(
  "elemzes",
  { hu: "Szöveg elemzés", en: "Text Analysis", de: "Textanalyse", ro: "Analiză text" },
  generateMagyarQuestions("szoveg/elemzes", "hu", 6),
);

const O6_THEME_SZOVEG = makeMagyarTheme(
  "szoveg",
  { hu: "Szöveg", en: "Text", de: "Text", ro: "Text" },
  [O6_SZOVEG_ERTELMEZ, O6_SZOVEG_ELEMZES],
);

// Helyesírás / Spelling theme
const O6_HELYESIRAS_TULAJ = makeMagyarSubtopic(
  "tulajdonnev",
  { hu: "Tulajdonnevek helyesírása", en: "Proper Noun Spelling", de: "Eigennamen Rechtschreibung", ro: "Ortografia numelor proprii" },
  generateMagyarQuestions("helyesiras/tulajdonnev", "hu", 6),
);

const O6_HELYESIRAS_MOZAIK = makeMagyarSubtopic(
  "mozaikszó",
  { hu: "Mozaikszók", en: "Acronyms", de: "Akronyme", ro: "Acronime" },
  generateMagyarQuestions("helyesiras/mozaikszó", "hu", 6),
);

const O6_THEME_HELYESIRAS = makeMagyarTheme(
  "helyesiras",
  { hu: "Helyesírás", en: "Spelling", de: "Rechtschreibung", ro: "Ortografie" },
  [O6_HELYESIRAS_TULAJ, O6_HELYESIRAS_MOZAIK],
);

// Fogalmazás / Composition theme
const O6_FOGALMAZAS_ESSZE = makeMagyarSubtopic(
  "essze",
  { hu: "Esszé írás", en: "Essay Writing", de: "Essay-Schreiben", ro: "Scriere eseuri" },
  generateMagyarQuestions("fogalmazas/essze", "hu", 6),
);

const O6_FOGALMAZAS_JELLEMZES = makeMagyarSubtopic(
  "jellemzes",
  { hu: "Jellemzés", en: "Characterization", de: "Charakterisierung", ro: "Caracterizare" },
  generateMagyarQuestions("fogalmazas/jellemzes", "hu", 6),
);

const O6_THEME_FOGALMAZAS = makeMagyarTheme(
  "fogalmazas",
  { hu: "Fogalmazás", en: "Composition", de: "Aufsatz", ro: "Redactare" },
  [O6_FOGALMAZAS_ESSZE, O6_FOGALMAZAS_JELLEMZES],
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
  6: [
    O6_THEME_MONDAT,
    O6_THEME_STILISZTIKA,
    O6_THEME_SZOKINCS,
    O6_THEME_NYELVTORT,
    O6_THEME_RETORIKA,
    O6_THEME_SZOVEG,
    O6_THEME_HELYESIRAS,
    O6_THEME_FOGALMAZAS,
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

// ─── HUNGARIAN GRADING SYSTEM (1–5 scale, 5=best) ──────────────────────────

export interface HungarianGradeMark {
  note: number;
  label: string;
  color: string;
  emoji: string;
}

export function calculateHungarianGrade(pct: number): HungarianGradeMark {
  // Hungarian 1–5 scale (5 = jeles/excellent, 1 = elégtelen/fail)
  if (pct >= 92) return { note: 5, label: "Jeles",       color: "#FFD700", emoji: "🌟" };
  if (pct >= 81) return { note: 4, label: "Jó",          color: "#00FF88", emoji: "😊" };
  if (pct >= 67) return { note: 3, label: "Elfogadható", color: "#00D4FF", emoji: "🙂" };
  if (pct >= 50) return { note: 2, label: "Elégséges",   color: "#FF6B00", emoji: "😅" };
  return               { note: 1, label: "Elégtelen",    color: "#FF4444", emoji: "😟" };
}

// ─── HUNGARIAN SUBTOPIC HINTS ────────────────────────────────────────────────
// Shown in the feedback card when the user gives a wrong answer.

export const HUNGARIAN_SUBTOPIC_HINTS: Record<string, string> = {
  // ── O1 Betűk (Letters) ────────────────────────────────────────────────────
  "maganhangzok":      "Magánhangzók: a, á, e, é, i, í, o, ó, ö, ő, u, ú, ü, ű",
  "massalhangzok":     "Mássalhangzók: b, c, d, f, g, h, j, k, l, m, n, p, r, s, t, v, z, etc.",
  "abc_sorrend":       "ABC-sorrend: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z",
  "szotagszam":        "Szótagszám: szavakat szótagokra bontjuk (pl. ka-ro: 2 szótag)",
  "elvalasztas":       "Szótagelválasztás: szavakat szótaghatáron választjuk el (pl. ka-ro)",
  "betuparak":         "Betűpárok: bizonyos betűk egymás mellett állnak (pl. ny, gy, ty, cs)",
  "rovid_hosszu":      "Rövid-hosszú magánhangzók: a/á, e/é, i/í, o/ó, ö/ő, u/ú, ü/ű",
  "j_ly":              "j/ly megkülönböztetés: j-vel vagy ly-val kezdődik a szó",

  // ── O1 Szavak (Words) ─────────────────────────────────────────────────────
  "fonevek":           "Főnevek: személyek, tárgyak, helyek nevei (pl. Péter, asztal, iskola)",
  "melleknevek":       "Melléknév: a főnevet jellemzi (pl. nagy, kicsi, szép)",
  "igek":              "Ige: cselekedet, cselekvés (pl. fut, esik, nevethetek)",
  "ellentetek":        "Ellentétes szavak: nagy-kicsi, szép-csúnya, meleg-hideg",
  "szokincs_o1":       "Szókincs: napi szóhasználatú szavak, kifejezések",

  // ── O1 Mondatok (Sentences) ───────────────────────────────────────────────
  "mondat_alapok":     "Mondat: alany + állítmány (legalább). Nagybetűvel kezdődik, ponttal végződik.",
  "nagybetus":         "Nagybetűs szavak: mondat kezdete, tulajdonnevek (nevek, helyek)",
  "vesszo":            "Vessző: többes felsorolás, tagmondatok elválasztása",
  "kialtojel":         "Felkiáltójel: erős érzelem kifejezésére (!).",

  // ── O2 Szófajok (Parts of Speech) ─────────────────────────────────────────
  "nev_jelz":          "Név & jelzős szerkezet: jelző + főnév (pl. szép ház)",
  "ragozas_alap":      "Ragozás: szóvégződések változása (pl. ház, házak, házban)",
  "szófaj_o2":         "Szófajok: főnév, melléknév, ige, névelő, névmás, stb.",

  // ── O2 Helyesírás (Spelling) ──────────────────────────────────────────────
  "cscs_zs":           "cs, zs betűpárok: megkülönböztetés (pl. csoki-zsinór)",
  "kettoszam":         "Kettőszámítás: szavak és kifejezések helyes írása",

  // ── O6 Mondat (Sentence, advanced) ────────────────────────────────────────
  "tagmondat":         "Tagmondat: összetett mondat részei (fő-, mellékmondat)",
  "vonatkozo_mondat":  "Vonatkozó mondat: amely, aki, amelyet, stb.",

  // ── O6 Stilisztika (Style) ────────────────────────────────────────────────
  "stilusza":          "Stílus: szöveg jellege (pl. szépirodalmi, tudományos, közéleti)",

  // ── O6 Szókincs (Vocabulary, advanced) ─────────────────────────────────────
  "szokincs_halado":   "Haladó szókincs: irodalmi, szakmai kifejezések",

  // ── O6 Nyelvtörténet (Language History) ──────────────────────────────────
  "csalad":            "Magyar nyelvcsalád: finnugor rokonság, uralikus",
  "jovenényszavak":    "Jövevényszavak: idegen nyelvekből átvett szavak",

  // ── O6 Retorika (Rhetoric) ───────────────────────────────────────────────
  "erveles_alap":      "Érvelés: tények + logika (pl. premissza → konklúzió)",
  "meggyozes":         "Meggyőzés: érzelmek + logika alkalmazása",

  // ── O6 Szöveg (Text, advanced) ────────────────────────────────────────────
  "ertelmez_halado":   "Szövegértelmezés: tartalom, szerkezet, eszközök elemzése",
  "elemzes":           "Szöveg elemzés: stílus, jelentés, stilisztika",

  // ── O6 Helyesírás (Spelling, advanced) ────────────────────────────────────
  "tulajdonnev":       "Tulajdonnevek: személynevek, helységnevek, intézmények",
  "mozaikszó":         "Mozaikszó: szavak kezdőbetűiből összetett szó (pl. TV, KRESZ)",
};

// ─── EXPORTED WRAPPER FUNCTION FOR LANGUAGETEST ENGINE ───────────────────────

/**
 * Wrapper function to retrieve Hungarian curriculum questions.
 * Used by LanguageTestEngine.
 *
 * @param grade School grade (1, 2, 6)
 * @param selectedSubtopicIds Array of subtopic IDs (e.g., ["maganhangzok", "fonevek"])
 * @param count Number of questions to return (default 10)
 * @returns Array of MagyarMCQ questions
 */
export function getHungarianQuestions(
  grade: number,
  selectedSubtopicIds: string[],
  count = 10
): MagyarMCQ[] {
  const themes = MAGYAR_CURRICULUM[grade] ?? [];
  const pool: MagyarMCQ[] = [];

  for (const theme of themes) {
    for (const sub of theme.subtopics) {
      if (selectedSubtopicIds.includes(sub.id)) {
        pool.push(...sub.questions);
      }
    }
  }

  // If pool is too small, cycle through existing questions with shuffled options
  if (pool.length > 0 && pool.length < count) {
    const base = [...pool];
    while (pool.length < count) {
      const q = { ...base[pool.length % base.length] };
      if (q.type === "mcq" && q.options) {
        const opts = [...q.options];
        const correctAnswer = opts[q.correct ?? 0];
        for (let i = opts.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [opts[i], opts[j]] = [opts[j], opts[i]];
        }
        q.options = opts;
        q.correct = opts.indexOf(correctAnswer);
      }
      pool.push(q);
    }
  }

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool;
}

// ─── Types already exported inline above ───────────────────────────────────
