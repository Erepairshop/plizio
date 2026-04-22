import { MemoryPairsRound } from "../../../../components/astro-games/views/m2/MemoryPairsView";

// English subject: kids learning English.
export const rounds: MemoryPairsRound[] = [
  {
    id: "en-mp-1",
    taskDescription: {
      en: "Match English words with their translations.",
      de: "Ordne englische Wörter ihren Übersetzungen zu.",
      hu: "Párosítsd az angol szavakat a fordításukkal.",
      ro: "Potrivește cuvintele englezești cu traducerile lor."
    },
    pairs: [
      { id: "p1", content: { en: "dog", de: "Hund", hu: "kutya", ro: "câine" }, emoji: "🐶" },
      { id: "p2", content: { en: "cat", de: "Katze", hu: "macska", ro: "pisică" }, emoji: "🐱" },
      { id: "p3", content: { en: "book", de: "Buch", hu: "könyv", ro: "carte" }, emoji: "📘" },
      { id: "p4", content: { en: "car", de: "Auto", hu: "autó", ro: "mașină" }, emoji: "🚗" },
      { id: "p5", content: { en: "school", de: "Schule", hu: "iskola", ro: "școală" }, emoji: "🏫" },
      { id: "p6", content: { en: "apple", de: "Apfel", hu: "alma", ro: "măr" }, emoji: "🍎" }
    ]
  },
  {
    id: "en-mp-2",
    taskDescription: {
      en: "Match colors with objects.",
      de: "Ordne Farben den Objekten zu.",
      hu: "Párosítsd a színeket tárgyakkal.",
      ro: "Potrivește culorile cu obiectele."
    },
    pairs: [
      { id: "p1", content: { en: "red", de: "Red (apple)", hu: "piros (alma)", ro: "roșu (măr)" }, emoji: "🍎" },
      { id: "p2", content: { en: "yellow", de: "Yellow (sun)", hu: "sárga (nap)", ro: "galben (soare)" }, emoji: "☀️" },
      { id: "p3", content: { en: "green", de: "Green (leaf)", hu: "zöld (levél)", ro: "verde (frunză)" }, emoji: "🍃" },
      { id: "p4", content: { en: "blue", de: "Blue (sky)", hu: "kék (ég)", ro: "albastru (cer)" }, emoji: "☁️" },
      { id: "p5", content: { en: "black", de: "Black (cat)", hu: "fekete (macska)", ro: "negru (pisică)" }, emoji: "🐈‍⬛" },
      { id: "p6", content: { en: "white", de: "White (cloud)", hu: "fehér (felhő)", ro: "alb (nor)" }, emoji: "☁️" }
    ]
  },
  {
    id: "en-mp-3",
    taskDescription: {
      en: "Match greetings.",
      de: "Finde die passenden Grüße.",
      hu: "Találd meg a köszönéseket.",
      ro: "Potrivește saluturile."
    },
    pairs: [
      { id: "p1", content: { en: "Hello", de: "Hallo", hu: "Szia", ro: "Salut" }, emoji: "👋" },
      { id: "p2", content: { en: "Good morning", de: "Guten Morgen", hu: "Jó reggelt", ro: "Bună dimineața" }, emoji: "🌅" },
      { id: "p3", content: { en: "Good night", de: "Gute Nacht", hu: "Jó éjt", ro: "Noapte bună" }, emoji: "🌙" },
      { id: "p4", content: { en: "Thank you", de: "Danke", hu: "Köszönöm", ro: "Mulțumesc" }, emoji: "🙏" },
      { id: "p5", content: { en: "Please", de: "Bitte", hu: "Kérlek / Szívesen", ro: "Te rog / Cu plăcere" }, emoji: "🤝" },
      { id: "p6", content: { en: "Goodbye", de: "Auf Wiedersehen", hu: "Viszontlátásra", ro: "La revedere" }, emoji: "🚶" }
    ]
  }
];
