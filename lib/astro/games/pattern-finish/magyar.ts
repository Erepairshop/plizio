import { PatternFinishRound } from "../../../../components/astro-games/views/m3/PatternFinishView";

// Magyar pattern-finish: magyar ragozás, sorrendek, mondat-minták
export const rounds: PatternFinishRound[] = [
  {
    id: "hu-pf-1",
    taskDescription: {
      en: "Complete the pattern (personal pronoun + to be in Hungarian)",
      de: "Vervollständige das Muster (Ungarisch: Personalpronomen + sein)",
      hu: "Folytasd a mintát: én vagyok, te vagy, ő ?",
      ro: "Completează modelul: eu sunt, tu ești, el ?",
    },
    pattern: [
      { en: "I am", de: "ich bin", hu: "én vagyok", ro: "eu sunt" },
      { en: "you are", de: "du bist", hu: "te vagy", ro: "tu ești" },
      { en: "he ?", de: "er ?", hu: "ő ?", ro: "el ?" },
    ],
    options: [
      { id: "o1", text: { en: "is", de: "ist", hu: "van", ro: "este" }, isCorrect: true },
      { id: "o2", text: { en: "am", de: "bin", hu: "vagyok", ro: "sunt" }, isCorrect: false },
      { id: "o3", text: { en: "are", de: "bist", hu: "vagy", ro: "ești" }, isCorrect: false },
      { id: "o4", text: { en: "are (pl)", de: "sind", hu: "vannak", ro: "sunt" }, isCorrect: false },
    ],
  },
  {
    id: "hu-pf-2",
    taskDescription: {
      en: "Number pattern — continue counting by 2",
      de: "Zahlenmuster — zähle in Zweiern",
      hu: "Folytasd a számsort: 2, 4, 6, ?",
      ro: "Continuă șirul: 2, 4, 6, ?",
    },
    pattern: [
      { en: "2", de: "2", hu: "2", ro: "2" },
      { en: "4", de: "4", hu: "4", ro: "4" },
      { en: "6", de: "6", hu: "6", ro: "6" },
      { en: "?", de: "?", hu: "?", ro: "?" },
    ],
    options: [
      { id: "o1", text: { en: "8", de: "8", hu: "8", ro: "8" }, isCorrect: true },
      { id: "o2", text: { en: "7", de: "7", hu: "7", ro: "7" }, isCorrect: false },
      { id: "o3", text: { en: "10", de: "10", hu: "10", ro: "10" }, isCorrect: false },
      { id: "o4", text: { en: "5", de: "5", hu: "5", ro: "5" }, isCorrect: false },
    ],
  },
  {
    id: "hu-pf-3",
    taskDescription: {
      en: "Complete Hungarian plural pattern",
      de: "Ungarische Pluralbildung — vervollständige",
      hu: "Folytasd a többes számot: kutya — kutyák, ló — lovak, macska — ?",
      ro: "Continuă pluralul maghiar: kutya — kutyák, ló — lovak, macska — ?",
    },
    pattern: [
      { en: "kutya → kutyák", de: "kutya → kutyák", hu: "kutya → kutyák", ro: "kutya → kutyák" },
      { en: "ló → lovak", de: "ló → lovak", hu: "ló → lovak", ro: "ló → lovak" },
      { en: "macska → ?", de: "macska → ?", hu: "macska → ?", ro: "macska → ?" },
    ],
    options: [
      { id: "o1", text: { en: "macskák", de: "macskák", hu: "macskák", ro: "macskák" }, isCorrect: true },
      { id: "o2", text: { en: "macskám", de: "macskám", hu: "macskám", ro: "macskám" }, isCorrect: false },
      { id: "o3", text: { en: "macskás", de: "macskás", hu: "macskás", ro: "macskás" }, isCorrect: false },
      { id: "o4", text: { en: "macska", de: "macska", hu: "macska", ro: "macska" }, isCorrect: false },
    ],
  },
  {
    id: "hu-pf-4",
    taskDescription: {
      en: "Days of the week — which one comes after Wednesday?",
      de: "Wochentage — was kommt nach Mittwoch?",
      hu: "Folytasd a napokat: hétfő, kedd, szerda, ?",
      ro: "Continuă zilele săptămânii: luni, marți, miercuri, ?",
    },
    pattern: [
      { en: "hétfő", de: "hétfő", hu: "hétfő", ro: "hétfő" },
      { en: "kedd", de: "kedd", hu: "kedd", ro: "kedd" },
      { en: "szerda", de: "szerda", hu: "szerda", ro: "szerda" },
      { en: "?", de: "?", hu: "?", ro: "?" },
    ],
    options: [
      { id: "o1", text: { en: "csütörtök", de: "csütörtök", hu: "csütörtök", ro: "csütörtök" }, isCorrect: true },
      { id: "o2", text: { en: "péntek", de: "péntek", hu: "péntek", ro: "péntek" }, isCorrect: false },
      { id: "o3", text: { en: "szombat", de: "szombat", hu: "szombat", ro: "szombat" }, isCorrect: false },
      { id: "o4", text: { en: "vasárnap", de: "vasárnap", hu: "vasárnap", ro: "vasárnap" }, isCorrect: false },
    ],
  },
];
