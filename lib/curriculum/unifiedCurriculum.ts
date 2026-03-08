/**
 * UNIFIED CURRICULUM SYSTEM
 *
 * Single source of truth for all countries, grades, and topics.
 * All languages (DE, EN, HU, RO, AT, CH, GB, US) read from here.
 * No Supabase duplication. Pure code-based.
 */

export interface CurriculumTopic {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
  order: number;
}

export interface CurriculumSection {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
  description: string;
  order: number;
  topics: CurriculumTopic[];
}

export interface GradeCurriculum {
  grade: number;
  sections: CurriculumSection[];
}

export interface CountryCurriculum {
  country: string;
  code: string;
  flag: string;
  grades: GradeCurriculum[];
}

// ─── GERMAN CURRICULUM (DE, AT, CH) ───────────────────────────────────────
export const GERMAN_CURRICULUM: CountryCurriculum = {
  country: 'Deutschland / Austria / Switzerland',
  code: 'DE',
  flag: '🇩🇪',
  grades: [
    {
      grade: 1,
      sections: [
        {
          id: 'g1-zahlen',
          name: 'Zahlen und Rechnen',
          slug: 'zahlen-und-rechnen',
          icon: '🔢',
          color: '#3b82f6',
          description: 'Addition und Subtraktion im Zahlenraum bis 20',
          order: 1,
          topics: [
            { id: 'add-20', name: 'Addition bis 20', slug: 'add-20', icon: '➕', color: '#60a5fa', order: 1 },
            { id: 'sub-20', name: 'Subtraktion bis 20', slug: 'sub-20', icon: '➖', color: '#3b82f6', order: 2 },
            { id: 'compare', name: 'Vergleichen und Ordnen', slug: 'compare', icon: '⚖️', color: '#1e40af', order: 3 },
          ],
        },
        {
          id: 'g1-geo',
          name: 'Geometrie und Größen',
          slug: 'geometrie-groessen',
          icon: '📐',
          color: '#ec4899',
          description: 'Formen erkennen und Größen messen',
          order: 2,
          topics: [
            { id: 'shapes', name: 'Formen erkennen', slug: 'shapes', icon: '🔷', color: '#f472b6', order: 1 },
            { id: 'time', name: 'Uhr und Geld', slug: 'time', icon: '⏰', color: '#ec4899', order: 2 },
          ],
        },
      ],
    },
    {
      grade: 2,
      sections: [
        {
          id: 'g2-zahlen',
          name: 'Zahlen und Rechnen',
          slug: 'zahlen-und-rechnen',
          icon: '🔢',
          color: '#3b82f6',
          description: 'Addition und Subtraktion bis 100',
          order: 1,
          topics: [
            { id: 'add-100', name: 'Addition bis 100', slug: 'add-100', icon: '➕', color: '#60a5fa', order: 1 },
            { id: 'sub-100', name: 'Subtraktion bis 100', slug: 'sub-100', icon: '➖', color: '#3b82f6', order: 2 },
          ],
        },
        {
          id: 'g2-mult',
          name: 'Multiplikation und Division',
          slug: 'multiplikation-division',
          icon: '✖️',
          color: '#8b5cf6',
          description: 'Einmaleins Grundlagen',
          order: 2,
          topics: [
            { id: 'times-2510', name: 'Einmaleins (×2, ×5, ×10)', slug: 'times-2510', icon: '🔢', color: '#a78bfa', order: 1 },
          ],
        },
      ],
    },
    {
      grade: 3,
      sections: [
        {
          id: 'g3-zahlen',
          name: 'Zahlen und Rechnen',
          slug: 'zahlen-und-rechnen',
          icon: '🔢',
          color: '#3b82f6',
          description: 'Addition und Subtraktion bis 1000',
          order: 1,
          topics: [
            { id: 'add-1000', name: 'Addition und Subtraktion bis 1000', slug: 'add-1000', icon: '➕', color: '#60a5fa', order: 1 },
            { id: 'written', name: 'Schriftliches Rechnen', slug: 'written', icon: '📝', color: '#3b82f6', order: 2 },
          ],
        },
        {
          id: 'g3-mult',
          name: 'Einmaleins',
          slug: 'einmaleins',
          icon: '✖️',
          color: '#8b5cf6',
          description: 'Vollständiges Einmaleins 1-10',
          order: 2,
          topics: [
            { id: 'mult-all', name: 'Multiplikation', slug: 'mult-all', icon: '✖️', color: '#a78bfa', order: 1 },
            { id: 'div-all', name: 'Division', slug: 'div-all', icon: '➗', color: '#8b5cf6', order: 2 },
          ],
        },
        {
          id: 'g3-geo',
          name: 'Größen und Einheiten',
          slug: 'groessen-einheiten',
          icon: '⚖️',
          color: '#10b981',
          description: 'Länge, Gewicht, Zeit',
          order: 3,
          topics: [
            { id: 'units-3', name: 'Länge, Gewicht, Zeit', slug: 'units-3', icon: '📏', color: '#6ee7b7', order: 1 },
          ],
        },
      ],
    },
    {
      grade: 4,
      sections: [
        {
          id: 'g4-zahlen',
          name: 'Zahlen & Operationen',
          slug: 'zahlen-und-operationen',
          icon: '🔢',
          color: '#3b82f6',
          description: 'Schriftliches Rechnen mit mehrstelligen Zahlen',
          order: 1,
          topics: [
            { id: 'large-nums', name: 'Zahlen bis 1 Million', slug: 'large-nums', icon: '🔢', color: '#60a5fa', order: 1 },
            { id: 'mul-written', name: 'Schriftliche Multiplikation', slug: 'mul-written', icon: '✖️', color: '#34d399', order: 2 },
            { id: 'div-written', name: 'Schriftliche Division', slug: 'div-written', icon: '➗', color: '#10b981', order: 3 },
            { id: 'rounding', name: 'Runden (10er, 100er)', slug: 'rounding', icon: '🔄', color: '#06b6d4', order: 4 },
          ],
        },
        {
          id: 'g4-bruch',
          name: 'Bruchrechnung',
          slug: 'bruchrechnung',
          icon: '½',
          color: '#8b5cf6',
          description: 'Erste Brüche und ihre Operationen',
          order: 2,
          topics: [
            { id: 'fractions', name: 'Brüche', slug: 'fractions', icon: '½', color: '#a78bfa', order: 1 },
            { id: 'frac-ops', name: 'Brüche addieren & subtrahieren', slug: 'frac-ops', icon: '½', color: '#8b5cf6', order: 2 },
          ],
        },
        {
          id: 'g4-geo',
          name: 'Geometrie & Maßeinheiten',
          slug: 'geometrie-maasseinheiten',
          icon: '📐',
          color: '#f59e0b',
          description: 'Flächen, Umfang, und räumliches Denken',
          order: 3,
          topics: [
            { id: 'area-perim', name: 'Flächeninhalt & Umfang', slug: 'area-perim', icon: '📐', color: '#fbbf24', order: 1 },
            { id: 'circle-geo', name: 'Kreis & Geometrie', slug: 'circle-geo', icon: '⭕', color: '#f97316', order: 2 },
            { id: 'units-4', name: 'Maßeinheiten', slug: 'units-4', icon: '📏', color: '#f59e0b', order: 3 },
          ],
        },
        {
          id: 'g4-data',
          name: 'Daten & Wahrscheinlichkeit',
          slug: 'daten-wahrscheinlichkeit',
          icon: '📊',
          color: '#10b981',
          description: 'Tabellen, Diagramme, Wahrscheinlichkeit',
          order: 4,
          topics: [
            { id: 'tables', name: 'Tabellen und Diagramme', slug: 'tables', icon: '📈', color: '#6ee7b7', order: 1 },
            { id: 'prob', name: 'Wahrscheinlichkeit', slug: 'prob', icon: '🎲', color: '#10b981', order: 2 },
          ],
        },
      ],
    },
    // ... Grade 5-8 similar structure (skipped for brevity, can add later)
  ],
};

// ─── ENGLISH CURRICULUM (US, GB, EN) ───────────────────────────────────────
export const ENGLISH_CURRICULUM: CountryCurriculum = {
  country: 'United States / United Kingdom',
  code: 'EN',
  flag: '🇺🇸',
  grades: [
    {
      grade: 1,
      sections: [
        {
          id: 'g1-numbers',
          name: 'Numbers & Counting',
          slug: 'numbers-counting',
          icon: '🔢',
          color: '#3b82f6',
          description: 'Counting, comparing, and basic addition/subtraction',
          order: 1,
          topics: [
            { id: 'count-20', name: 'Numbers to 20', slug: 'count-20', icon: '🔢', color: '#60a5fa', order: 1 },
            { id: 'add-20-en', name: 'Addition to 20', slug: 'add-20-en', icon: '➕', color: '#3b82f6', order: 2 },
            { id: 'sub-20-en', name: 'Subtraction to 20', slug: 'sub-20-en', icon: '➖', color: '#1e40af', order: 3 },
          ],
        },
        {
          id: 'g1-shapes',
          name: 'Shapes & Measurement',
          slug: 'shapes-measurement',
          icon: '📐',
          color: '#ec4899',
          description: 'Basic geometry and measuring',
          order: 2,
          topics: [
            { id: 'shapes-en', name: 'Basic shapes', slug: 'shapes-en', icon: '🔷', color: '#f472b6', order: 1 },
            { id: 'measure-en', name: 'Length & comparison', slug: 'measure-en', icon: '📏', color: '#ec4899', order: 2 },
          ],
        },
      ],
    },
    {
      grade: 4,
      sections: [
        {
          id: 'g4-numbers-en',
          name: 'Numbers & Operations',
          slug: 'numbers-operations',
          icon: '🔢',
          color: '#3b82f6',
          description: 'Multi-digit multiplication, long division, place value',
          order: 1,
          topics: [
            { id: 'large-nums-en', name: 'Numbers to 1 million', slug: 'large-nums-en', icon: '🔢', color: '#60a5fa', order: 1 },
            { id: 'mul-en', name: 'Multi-digit multiplication', slug: 'mul-en', icon: '✖️', color: '#34d399', order: 2 },
            { id: 'div-en', name: 'Long division', slug: 'div-en', icon: '➗', color: '#10b981', order: 3 },
            { id: 'rounding-en', name: 'Rounding (tens/hundreds)', slug: 'rounding-en', icon: '🔄', color: '#06b6d4', order: 4 },
          ],
        },
        {
          id: 'g4-fractions-en',
          name: 'Fractions & Decimals',
          slug: 'fractions-decimals',
          icon: '½',
          color: '#8b5cf6',
          description: 'Fractions and decimal basics',
          order: 2,
          topics: [
            { id: 'frac-en', name: 'Fractions (add/subtract)', slug: 'frac-en', icon: '½', color: '#a78bfa', order: 1 },
            { id: 'decimals-en', name: 'Decimals basics', slug: 'decimals-en', icon: '💧', color: '#8b5cf6', order: 2 },
          ],
        },
        {
          id: 'g4-geometry-en',
          name: 'Geometry & Measurement',
          slug: 'geometry-measurement',
          icon: '📐',
          color: '#f59e0b',
          description: 'Angles, area, perimeter, and circle geometry',
          order: 3,
          topics: [
            { id: 'angles-en', name: 'Angles & geometry', slug: 'angles-en', icon: '📐', color: '#fbbf24', order: 1 },
            { id: 'circle-en', name: 'Circle & geometry', slug: 'circle-en', icon: '⭕', color: '#f97316', order: 2 },
            { id: 'measure-units-en', name: 'Measurement & conversion', slug: 'measure-units-en', icon: '📏', color: '#f59e0b', order: 3 },
          ],
        },
      ],
    },
    // ... More grades
  ],
};

// ─── HUNGARIAN CURRICULUM (HU) ───────────────────────────────────────────
export const HUNGARIAN_CURRICULUM: CountryCurriculum = {
  country: 'Magyarország',
  code: 'HU',
  flag: '🇭🇺',
  grades: [
    // Similar structure as German
    {
      grade: 4,
      sections: [
        {
          id: 'g4-szamok-hu',
          name: 'Számok és Műveletek',
          slug: 'szamok-es-muveletek',
          icon: '🔢',
          color: '#3b82f6',
          description: 'Írásban végzett szorzás és osztás',
          order: 1,
          topics: [
            { id: 'nagy-szamok', name: '1 millióig terjedő számok', slug: 'nagy-szamok', icon: '🔢', color: '#60a5fa', order: 1 },
            { id: 'szorzas', name: 'Írásban végzett szorzás', slug: 'szorzas', icon: '✖️', color: '#34d399', order: 2 },
            { id: 'osztas', name: 'Írásban végzett osztás', slug: 'osztas', icon: '➗', color: '#10b981', order: 3 },
            { id: 'kerekites', name: 'Kerekítés (10-esre, 100-asra)', slug: 'kerekites', icon: '🔄', color: '#06b6d4', order: 4 },
          ],
        },
        // ... More sections
      ],
    },
  ],
};

// ─── ROMANIAN CURRICULUM (RO) ───────────────────────────────────────────
export const ROMANIAN_CURRICULUM: CountryCurriculum = {
  country: 'România',
  code: 'RO',
  flag: '🇷🇴',
  grades: [
    // Similar structure
  ],
};

// ─── UNIFIED GETTER ────────────────────────────────────────────────────────
export function getCurriculumByCountry(countryCode: string): CountryCurriculum | null {
  const code = countryCode?.toUpperCase() || '';

  // Map all country codes to their curriculum
  const mapping: Record<string, CountryCurriculum> = {
    'DE': GERMAN_CURRICULUM,
    'AT': GERMAN_CURRICULUM,  // Austria uses German curriculum
    'CH': GERMAN_CURRICULUM,  // Switzerland uses German curriculum
    'US': ENGLISH_CURRICULUM,
    'GB': ENGLISH_CURRICULUM,
    'EN': ENGLISH_CURRICULUM,
    'HU': HUNGARIAN_CURRICULUM,
    'RO': ROMANIAN_CURRICULUM,
  };

  return mapping[code] || null;
}

export function getGradeCurriculum(countryCode: string, gradeNumber: number): GradeCurriculum | null {
  const curriculum = getCurriculumByCountry(countryCode);
  if (!curriculum) return null;

  return curriculum.grades.find(g => g.grade === gradeNumber) || null;
}

export function getAllCountries(): Array<{ code: string; name: string; flag: string }> {
  return [
    { code: 'DE', name: 'Deutschland', flag: '🇩🇪' },
    { code: 'AT', name: 'Österreich', flag: '🇦🇹' },
    { code: 'CH', name: 'Schweiz', flag: '🇨🇭' },
    { code: 'US', name: 'United States', flag: '🇺🇸' },
    { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
    { code: 'HU', name: 'Magyarország', flag: '🇭🇺' },
    { code: 'RO', name: 'România', flag: '🇷🇴' },
  ];
}

// ─── CONVERSION TO THEMESELECTOR FORMAT ────────────────────────────────────
// Converts unified curriculum to ThemeSelectorTheme format used in mathtest UI

export interface ThemeSelectorSubtopic {
  id: string;
  name: string;
  color: string;
  icon: string;
  taskFile: string;
  taskIds: string[];
}

export interface ThemeSelectorTheme {
  id: string;
  name: string;
  color: string;
  icon: string;
  description: string;
  subtopics: ThemeSelectorSubtopic[];
}

export function convertCurriculumToThemeSelector(gradeCurriculum: GradeCurriculum): ThemeSelectorTheme[] {
  return gradeCurriculum.sections.map((section) => ({
    id: section.id,
    name: section.name,
    color: section.color,
    icon: section.icon,
    description: section.description,
    subtopics: section.topics.map((topic) => ({
      id: `${section.id}_${topic.id}`,
      name: topic.name,
      color: topic.color,
      icon: topic.icon,
      taskFile: '',
      taskIds: [],
    })),
  }));
}
