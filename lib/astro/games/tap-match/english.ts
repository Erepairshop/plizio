import { TapMatchRound } from "../../../../components/astro-games/views/m2/TapMatchView";

export const rounds: TapMatchRound[] = [
  {
    id: "en-tm-1",
    taskDescription: {
      en: "Match the English word with the German word.",
      de: "Ordne das englische Wort dem deutschen Wort zu.",
      hu: "Párosítsd az angol szót a német szóval.",
      ro: "Potrivește cuvântul englezesc cu cel german."
    },
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "house", de: "house", hu: "house", ro: "house" }, emoji: "🏠" },
      { id: "L2", label: { en: "book", de: "book", hu: "book", ro: "book" }, emoji: "📘" },
      { id: "L3", label: { en: "apple", de: "apple", hu: "apple", ro: "apple" }, emoji: "🍎" },
      { id: "L4", label: { en: "school", de: "school", hu: "school", ro: "school" }, emoji: "🏫" }
    ],
    right: [
      { id: "R1", label: { en: "Haus", de: "Haus", hu: "Haus", ro: "Haus" }, emoji: "🏠" },
      { id: "R2", label: { en: "Buch", de: "Buch", hu: "Buch", ro: "Buch" }, emoji: "📘" },
      { id: "R3", label: { en: "Apfel", de: "Apfel", hu: "Apfel", ro: "Apfel" }, emoji: "🍎" },
      { id: "R4", label: { en: "Schule", de: "Schule", hu: "Schule", ro: "Schule" }, emoji: "🏫" }
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" }
    ]
  },
  {
    id: "en-tm-2",
    taskDescription: {
      en: "Match the verb with its German infinitive.",
      de: "Ordne das Verb seinem deutschen Infinitiv zu.",
      hu: "Párosítsd az igét a német főnévi igenévvel.",
      ro: "Potrivește verbul cu infinitivul german."
    },
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "to go", de: "to go", hu: "to go", ro: "to go" }, emoji: "🚶" },
      { id: "L2", label: { en: "to read", de: "to read", hu: "to read", ro: "to read" }, emoji: "📖" },
      { id: "L3", label: { en: "to write", de: "to write", hu: "to write", ro: "to write" }, emoji: "✍️" },
      { id: "L4", label: { en: "to drink", de: "to drink", hu: "to drink", ro: "to drink" }, emoji: "🥤" }
    ],
    right: [
      { id: "R1", label: { en: "gehen", de: "gehen", hu: "gehen", ro: "gehen" }, emoji: "🚶" },
      { id: "R2", label: { en: "lesen", de: "lesen", hu: "lesen", ro: "lesen" }, emoji: "📖" },
      { id: "R3", label: { en: "schreiben", de: "schreiben", hu: "schreiben", ro: "schreiben" }, emoji: "✍️" },
      { id: "R4", label: { en: "trinken", de: "trinken", hu: "trinken", ro: "trinken" }, emoji: "🥤" }
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" }
    ]
  },
  {
    id: "en-tm-3",
    taskDescription: {
      en: "Match German letter groups with their sound hints.",
      de: "Ordne deutsche Buchstabengruppen den Laut-Hinweisen zu.",
      hu: "Párosítsd a német betűkapcsolatokat a kiejtési tippekkel.",
      ro: "Potrivește grupurile de litere germane cu indiciile de pronunție."
    },
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "sch", de: "sch", hu: "sch", ro: "sch" }, emoji: "🔤" },
      { id: "L2", label: { en: "ch", de: "ch", hu: "ch", ro: "ch" }, emoji: "🔤" },
      { id: "L3", label: { en: "ei", de: "ei", hu: "ei", ro: "ei" }, emoji: "🔤" },
      { id: "L4", label: { en: "ie", de: "ie", hu: "ie", ro: "ie" }, emoji: "🔤" }
    ],
    right: [
      { id: "R1", label: { en: "like 'sh' in ship", de: "wie 'sch' in Schule", hu: "mint az 's' a show szóban", ro: "ca 'ș' în 'șarpe'" }, emoji: "🗣️" },
      { id: "R2", label: { en: "soft throat sound", de: "Rachenlaut", hu: "lágy torokhang", ro: "sunet gutural moale" }, emoji: "🗣️" },
      { id: "R3", label: { en: "like 'eye'", de: "wie 'ai'", hu: "mint az 'áj'", ro: "ca 'ai'" }, emoji: "👁️" },
      { id: "R4", label: { en: "long 'ee'", de: "langes 'i'", hu: "hosszú 'í'", ro: "sunet lung 'i'" }, emoji: "🎵" }
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" }
    ]
  }
];

