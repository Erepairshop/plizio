import { MemoryPairsRound } from "../../../../components/astro-games/views/m2/MemoryPairsView";

export const rounds: MemoryPairsRound[] = [
  {
    id: "en-mp-1",
    taskDescription: {
      en: "Find matching German words with emoji clues.",
      de: "Finde passende deutsche Wörter mit Emoji-Hinweisen.",
      hu: "Találd meg az egyező német szavakat emoji segítséggel.",
      ro: "Găsește cuvintele germane pereche cu indicii emoji."
    },
    pairs: [
      { id: "p1", content: { en: "der Hund", de: "der Hund", hu: "der Hund", ro: "der Hund" }, emoji: "🐶" },
      { id: "p2", content: { en: "die Katze", de: "die Katze", hu: "die Katze", ro: "die Katze" }, emoji: "🐱" },
      { id: "p3", content: { en: "das Buch", de: "das Buch", hu: "das Buch", ro: "das Buch" }, emoji: "📘" },
      { id: "p4", content: { en: "das Auto", de: "das Auto", hu: "das Auto", ro: "das Auto" }, emoji: "🚗" },
      { id: "p5", content: { en: "die Schule", de: "die Schule", hu: "die Schule", ro: "die Schule" }, emoji: "🏫" },
      { id: "p6", content: { en: "der Apfel", de: "der Apfel", hu: "der Apfel", ro: "der Apfel" }, emoji: "🍎" }
    ]
  },
  {
    id: "en-mp-2",
    taskDescription: {
      en: "Train singular/plural forms in German.",
      de: "Übe Singular- und Pluralformen auf Deutsch.",
      hu: "Gyakorold a német egyes és többes számot.",
      ro: "Exersează formele de singular/plural în germană."
    },
    pairs: [
      { id: "p1", content: { en: "ein Hund / Hunde", de: "ein Hund / Hunde", hu: "ein Hund / Hunde", ro: "ein Hund / Hunde" }, emoji: "🐕" },
      { id: "p2", content: { en: "eine Katze / Katzen", de: "eine Katze / Katzen", hu: "eine Katze / Katzen", ro: "eine Katze / Katzen" }, emoji: "🐈" },
      { id: "p3", content: { en: "ein Buch / Bücher", de: "ein Buch / Bücher", hu: "ein Buch / Bücher", ro: "ein Buch / Bücher" }, emoji: "📚" },
      { id: "p4", content: { en: "ein Kind / Kinder", de: "ein Kind / Kinder", hu: "ein Kind / Kinder", ro: "ein Kind / Kinder" }, emoji: "🧒" },
      { id: "p5", content: { en: "eine Stadt / Städte", de: "eine Stadt / Städte", hu: "eine Stadt / Städte", ro: "eine Stadt / Städte" }, emoji: "🏙️" },
      { id: "p6", content: { en: "ein Haus / Häuser", de: "ein Haus / Häuser", hu: "ein Haus / Häuser", ro: "ein Haus / Häuser" }, emoji: "🏘️" }
    ]
  },
  {
    id: "en-mp-3",
    taskDescription: {
      en: "Match useful beginner phrases.",
      de: "Finde die passenden Anfänger-Phrasen.",
      hu: "Találd meg a hasznos kezdő kifejezések párjait.",
      ro: "Potrivește expresiile utile pentru începători."
    },
    pairs: [
      { id: "p1", content: { en: "Guten Morgen", de: "Guten Morgen", hu: "Guten Morgen", ro: "Guten Morgen" }, emoji: "🌅" },
      { id: "p2", content: { en: "Gute Nacht", de: "Gute Nacht", hu: "Gute Nacht", ro: "Gute Nacht" }, emoji: "🌙" },
      { id: "p3", content: { en: "Wie geht's?", de: "Wie geht's?", hu: "Wie geht's?", ro: "Wie geht's?" }, emoji: "🙂" },
      { id: "p4", content: { en: "Danke", de: "Danke", hu: "Danke", ro: "Danke" }, emoji: "🙏" },
      { id: "p5", content: { en: "Bitte", de: "Bitte", hu: "Bitte", ro: "Bitte" }, emoji: "🤝" },
      { id: "p6", content: { en: "Entschuldigung", de: "Entschuldigung", hu: "Entschuldigung", ro: "Entschuldigung" }, emoji: "🙋" }
    ]
  }
];

