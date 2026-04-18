import { DragSortRound } from "../../../../components/astro-games/views/m3/DragSortView";

export const rounds: DragSortRound[] = [
  {
    id: "en-ds-1",
    taskDescription: {
      en: "Sort words by alphabet range.",
      de: "Sortiere Wörter nach Alphabet-Bereich.",
      hu: "Rendezd a szavakat ABC-tartomány szerint.",
      ro: "Sortează cuvintele după intervalul alfabetic."
    },
    requireFullCorrect: true,
    bins: [
      { id: "b-am", label: { en: "A-M", de: "A-M", hu: "A-M", ro: "A-M" }, icon: "🔤", color: "#4CAF50" },
      { id: "b-nz", label: { en: "N-Z", de: "N-Z", hu: "N-Z", ro: "N-Z" }, icon: "🔠", color: "#2196F3" }
    ],
    items: [
      { id: "i1", label: { en: "Apfel", de: "Apfel", hu: "Apfel", ro: "Apfel" }, correctBinId: "b-am" },
      { id: "i2", label: { en: "Lampe", de: "Lampe", hu: "Lampe", ro: "Lampe" }, correctBinId: "b-am" },
      { id: "i3", label: { en: "Radio", de: "Radio", hu: "Radio", ro: "Radio" }, correctBinId: "b-nz" },
      { id: "i4", label: { en: "Zug", de: "Zug", hu: "Zug", ro: "Zug" }, correctBinId: "b-nz" }
    ]
  },
  {
    id: "en-ds-2",
    taskDescription: {
      en: "Sort by article group.",
      de: "Sortiere nach Artikel-Gruppe.",
      hu: "Rendezd névelő szerint.",
      ro: "Sortează după articol."
    },
    requireFullCorrect: true,
    bins: [
      { id: "b-der", label: { en: "der", de: "der", hu: "der", ro: "der" }, icon: "🔵", color: "#2563eb" },
      { id: "b-die", label: { en: "die", de: "die", hu: "die", ro: "die" }, icon: "🔴", color: "#dc2626" }
    ],
    items: [
      { id: "i1", label: { en: "Hund", de: "Hund", hu: "Hund", ro: "Hund" }, correctBinId: "b-der" },
      { id: "i2", label: { en: "Lehrer", de: "Lehrer", hu: "Lehrer", ro: "Lehrer" }, correctBinId: "b-der" },
      { id: "i3", label: { en: "Katze", de: "Katze", hu: "Katze", ro: "Katze" }, correctBinId: "b-die" },
      { id: "i4", label: { en: "Tasche", de: "Tasche", hu: "Tasche", ro: "Tasche" }, correctBinId: "b-die" }
    ]
  },
  {
    id: "en-ds-3",
    taskDescription: {
      en: "Sort sentence parts: beginning or ending.",
      de: "Sortiere Satzteile: Anfang oder Ende.",
      hu: "Rendezd a mondatrészeket: eleje vagy vége.",
      ro: "Sortează părțile propoziției: început sau sfârșit."
    },
    requireFullCorrect: true,
    bins: [
      { id: "b-start", label: { en: "Sentence start", de: "Satzanfang", hu: "Mondat eleje", ro: "Început propoziție" }, icon: "1️⃣", color: "#f59e0b" },
      { id: "b-end", label: { en: "Sentence end", de: "Satzende", hu: "Mondat vége", ro: "Sfârșit propoziție" }, icon: "2️⃣", color: "#8b5cf6" }
    ],
    items: [
      { id: "i1", label: { en: "Ich", de: "Ich", hu: "Ich", ro: "Ich" }, correctBinId: "b-start" },
      { id: "i2", label: { en: "Wir", de: "Wir", hu: "Wir", ro: "Wir" }, correctBinId: "b-start" },
      { id: "i3", label: { en: "lerne.", de: "lerne.", hu: "lerne.", ro: "lerne." }, correctBinId: "b-end" },
      { id: "i4", label: { en: "spielen.", de: "spielen.", hu: "spielen.", ro: "spielen." }, correctBinId: "b-end" }
    ]
  }
];

