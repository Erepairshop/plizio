// ─── MATH LOCALE SYSTEM ─────────────────────────────
// Country-specific grading systems and UI labels for Math Test
// Easy to extend with new countries later

export interface MarkResult {
  display: string;      // "5" or "A" or "1"
  label: string;        // "Jeles" or "Excellent"
  color: string;        // hex color for UI
  emoji: string;        // result emoji
}

export interface CountryConfig {
  code: string;
  name: string;
  flag: string;
  grades: number[];             // available school grades
  gradeLabel: (g: number) => string;  // "3. osztály" or "3rd grade"
  calculateMark: (percentage: number) => MarkResult;
  ui: {
    title: string;
    gradeQuestion: string;
    submit: string;
    retry: string;
    card: string;
    other: string;
    home: string;
    grading: string;
    solved: string;
    lastUsed: string;
    classLabel: string;
    selectTopics: string;
    selectTopicsSub: string;
    preview: string;
    topicsSelected: string;
    clearSelection: string;
    startTest: string;
    generating: string;
    guest: string;
    exit: string;
    topicAreas: string;
    dateLocale: string;
  };
}

// ─── HUNGARY 🇭🇺 ─────────────────────────────

const HU: CountryConfig = {
  code: "HU",
  name: "Magyarország",
  flag: "🇭🇺",
  grades: [1, 2, 3, 4, 5, 6, 7, 8],
  gradeLabel: (g) => `${g}. osztály`,
  calculateMark: (pct) => {
    if (pct >= 90) return { display: "5", label: "Jeles", color: "#FFD700", emoji: "🌟" };
    if (pct >= 75) return { display: "4", label: "Jó", color: "#00FF88", emoji: "😊" };
    if (pct >= 60) return { display: "3", label: "Közepes", color: "#00D4FF", emoji: "🤔" };
    if (pct >= 40) return { display: "2", label: "Elégséges", color: "#FF6B00", emoji: "😅" };
    return { display: "1", label: "Elégtelen", color: "#FF2D78", emoji: "😢" };
  },
  ui: {
    title: "MATEK DOLGOZAT",
    gradeQuestion: "Hanyadik osztályba jársz?",
    submit: "BEADOM!",
    retry: "Újraírom",
    card: "Kártya",
    other: "Másik",
    home: "Főmenü",
    grading: "Javítás...",
    solved: "megoldva",
    lastUsed: "LEGUTÓBB",
    classLabel: "Osztály",
    selectTopics: "Válassz Témákat!",
    selectTopicsSub: "Kombinálhatsz több al-témát egy teszthez",
    preview: "Előnézet",
    topicsSelected: "kiválasztva",
    clearSelection: "Törlés",
    startTest: "Teszt indítása",
    generating: "Generálás...",
    guest: "Vendég",
    exit: "Kilépés",
    topicAreas: "Tématerületek",
    dateLocale: "hu-HU",
  },
};

// ─── USA 🇺🇸 ─────────────────────────────

const US: CountryConfig = {
  code: "US",
  name: "United States",
  flag: "🇺🇸",
  grades: [1, 2, 3, 4, 5, 6, 7, 8],
  gradeLabel: (g) => {
    const suffix = g === 1 ? "st" : g === 2 ? "nd" : g === 3 ? "rd" : "th";
    return `${g}${suffix} grade`;
  },
  calculateMark: (pct) => {
    if (pct >= 90) return { display: "A", label: "Excellent", color: "#FFD700", emoji: "🌟" };
    if (pct >= 80) return { display: "B", label: "Good", color: "#00FF88", emoji: "😊" };
    if (pct >= 70) return { display: "C", label: "Average", color: "#00D4FF", emoji: "🤔" };
    if (pct >= 60) return { display: "D", label: "Below Average", color: "#FF6B00", emoji: "😅" };
    return { display: "F", label: "Fail", color: "#FF2D78", emoji: "😢" };
  },
  ui: {
    title: "MATH TEST",
    gradeQuestion: "What grade are you in?",
    submit: "SUBMIT!",
    retry: "Retry",
    card: "Card",
    other: "Other",
    home: "Home",
    grading: "Grading...",
    solved: "solved",
    lastUsed: "LAST",
    classLabel: "Grade",
    selectTopics: "Select Topics!",
    selectTopicsSub: "You can combine multiple subtopics for one test",
    preview: "Preview",
    topicsSelected: "selected",
    clearSelection: "Clear",
    startTest: "Start Test",
    generating: "Generating...",
    guest: "Guest",
    exit: "Exit",
    topicAreas: "Topic areas",
    dateLocale: "en-US",
  },
};

// ─── GERMANY 🇩🇪 ─────────────────────────────

const DE: CountryConfig = {
  code: "DE",
  name: "Deutschland",
  flag: "🇩🇪",
  grades: [1, 2, 3, 4, 5, 6, 7, 8],
  gradeLabel: (g) => `${g}. Klasse`,
  calculateMark: (pct) => {
    // German system: 1 = best, 6 = worst
    if (pct >= 92) return { display: "1", label: "Sehr gut", color: "#FFD700", emoji: "🌟" };
    if (pct >= 81) return { display: "2", label: "Gut", color: "#00FF88", emoji: "😊" };
    if (pct >= 67) return { display: "3", label: "Befriedigend", color: "#00D4FF", emoji: "🤔" };
    if (pct >= 50) return { display: "4", label: "Ausreichend", color: "#FF6B00", emoji: "😅" };
    if (pct >= 30) return { display: "5", label: "Mangelhaft", color: "#FF4444", emoji: "😢" };
    return { display: "6", label: "Ungenügend", color: "#FF2D78", emoji: "💀" };
  },
  ui: {
    title: "MATHE-TEST",
    gradeQuestion: "In welcher Klasse bist du?",
    submit: "ABGEBEN!",
    retry: "Nochmal",
    card: "Karte",
    other: "Andere",
    home: "Startseite",
    grading: "Korrektur...",
    solved: "gelöst",
    lastUsed: "ZULETZT",
    classLabel: "Klasse",
    selectTopics: "Themen auswählen!",
    selectTopicsSub: "Du kannst mehrere Unterthemen für einen Test kombinieren",
    preview: "Vorschau",
    topicsSelected: "ausgewählt",
    clearSelection: "Auswahl löschen",
    startTest: "Test starten",
    generating: "Wird generiert...",
    guest: "Gast",
    exit: "Beenden",
    topicAreas: "Themenbereiche",
    dateLocale: "de-DE",
  },
};

// ─── UK 🇬🇧 ─────────────────────────────

const GB: CountryConfig = {
  code: "GB",
  name: "United Kingdom",
  flag: "🇬🇧",
  grades: [1, 2, 3, 4, 5, 6, 7, 8],
  gradeLabel: (g) => `Year ${g}`,
  calculateMark: (pct) => {
    if (pct >= 90) return { display: "A*", label: "Outstanding", color: "#FFD700", emoji: "🌟" };
    if (pct >= 80) return { display: "A", label: "Excellent", color: "#00FF88", emoji: "😊" };
    if (pct >= 70) return { display: "B", label: "Good", color: "#00D4FF", emoji: "🤔" };
    if (pct >= 60) return { display: "C", label: "Satisfactory", color: "#FF6B00", emoji: "😅" };
    if (pct >= 40) return { display: "D", label: "Below Expected", color: "#FF4444", emoji: "😢" };
    return { display: "U", label: "Ungraded", color: "#FF2D78", emoji: "💀" };
  },
  ui: {
    title: "MATHS TEST",
    gradeQuestion: "What year are you in?",
    submit: "SUBMIT!",
    retry: "Retry",
    card: "Card",
    other: "Other",
    home: "Home",
    grading: "Marking...",
    solved: "solved",
    lastUsed: "LAST",
    classLabel: "Year",
    selectTopics: "Select Topics!",
    selectTopicsSub: "You can combine multiple subtopics for one test",
    preview: "Preview",
    topicsSelected: "selected",
    clearSelection: "Clear",
    startTest: "Start Test",
    generating: "Generating...",
    guest: "Guest",
    exit: "Exit",
    topicAreas: "Topic areas",
    dateLocale: "en-GB",
  },
};

// ─── ROMANIA 🇷🇴 ─────────────────────────────

const RO: CountryConfig = {
  code: "RO",
  name: "România",
  flag: "🇷🇴",
  grades: [1, 2, 3, 4, 5, 6, 7, 8],
  gradeLabel: (g) => `Clasa a ${g}-a`,
  calculateMark: (pct) => {
    // Romanian system: 1-10, 10 = best
    if (pct >= 95) return { display: "10", label: "Excelent", color: "#FFD700", emoji: "🌟" };
    if (pct >= 85) return { display: "9", label: "Foarte bine", color: "#00FF88", emoji: "😊" };
    if (pct >= 75) return { display: "8", label: "Bine", color: "#22D3EE", emoji: "🙂" };
    if (pct >= 65) return { display: "7", label: "Satisfăcător", color: "#00D4FF", emoji: "🤔" };
    if (pct >= 50) return { display: "6", label: "Suficient", color: "#FF6B00", emoji: "😅" };
    if (pct >= 40) return { display: "5", label: "Mediocru", color: "#FF4444", emoji: "😢" };
    return { display: "4", label: "Insuficient", color: "#FF2D78", emoji: "💀" };
  },
  ui: {
    title: "TEST DE MATEMATICĂ",
    gradeQuestion: "În ce clasă ești?",
    submit: "PREDAU!",
    retry: "Reîncerc",
    card: "Card",
    other: "Altă clasă",
    home: "Acasă",
    grading: "Corectare...",
    solved: "rezolvate",
    lastUsed: "ULTIMA",
    classLabel: "Clasa",
    selectTopics: "Alege temele!",
    selectTopicsSub: "Poți combina mai multe subteme pentru un test",
    preview: "Previzualizare",
    topicsSelected: "selectate",
    clearSelection: "Șterge selecția",
    startTest: "Începe testul",
    generating: "Se generează...",
    guest: "Invitat",
    exit: "Ieșire",
    topicAreas: "Domenii tematice",
    dateLocale: "ro-RO",
  },
};

// ─── COUNTRY REGISTRY ─────────────────────────────

export const COUNTRIES: CountryConfig[] = [HU, US, DE, GB, RO];

export function getCountryByCode(code: string): CountryConfig {
  return COUNTRIES.find((c) => c.code === code) || HU;
}

// ─── LOCALE STORAGE ─────────────────────────────

const COUNTRY_KEY = "plizio_math_country";

export function getSavedCountry(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(COUNTRY_KEY);
}

export function saveCountry(code: string): void {
  if (typeof window !== "undefined") {
    localStorage.setItem(COUNTRY_KEY, code);
  }
}
