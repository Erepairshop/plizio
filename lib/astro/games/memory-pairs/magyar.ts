import { MemoryPairsRound } from "../../../../components/astro-games/views/m2/MemoryPairsView";

export const rounds: MemoryPairsRound[] = [
  {
    id: "hu-mp-1",
    taskDescription: {
      en: "Match Hungarian words and pictures.",
      de: "Finde die Paare: Ungarisches Wort und Bild.",
      hu: "Párosítsd a magyar szót a képpel.",
      ro: "Potrivește cuvântul maghiar cu imaginea."
    },
    pairs: [
      { id: "p1", content: { en: "Apple", de: "Apfel", hu: "alma", ro: "măr" }, emoji: "🍎" },
      { id: "p2", content: { en: "Dog", de: "Hund", hu: "kutya", ro: "câine" }, emoji: "🐶" },
      { id: "p3", content: { en: "Cat", de: "Katze", hu: "macska", ro: "pisică" }, emoji: "🐱" },
      { id: "p4", content: { en: "Book", de: "Buch", hu: "könyv", ro: "carte" }, emoji: "📘" },
      { id: "p5", content: { en: "Milk", de: "Milch", hu: "tej", ro: "lapte" }, emoji: "🥛" },
      { id: "p6", content: { en: "Bread", de: "Brot", hu: "kenyér", ro: "pâine" }, emoji: "🍞" }
    ]
  },
  {
    id: "hu-mp-2",
    taskDescription: {
      en: "Find singular-plural pairs.",
      de: "Finde Einzahl-Mehrzahl-Paare.",
      hu: "Találd meg az egyes-többes számú párokat.",
      ro: "Găsește perechi singular-plural."
    },
    pairs: [
      { id: "p1", content: { en: "Dog/Dogs", de: "Hund/Hunde", hu: "kutya/kutyák", ro: "câine/câini" }, emoji: "🐕" },
      { id: "p2", content: { en: "Cat/Cats", de: "Katze/Katzen", hu: "macska/macskák", ro: "pisică/pisici" }, emoji: "🐈" },
      { id: "p3", content: { en: "Book/Books", de: "Buch/Bücher", hu: "könyv/könyvek", ro: "carte/cărți" }, emoji: "📚" },
      { id: "p4", content: { en: "House/Houses", de: "Haus/Häuser", hu: "ház/házak", ro: "casă/case" }, emoji: "🏘️" },
      { id: "p5", content: { en: "Child/Children", de: "Kind/Kinder", hu: "gyerek/gyerekek", ro: "copil/copii" }, emoji: "🧒" },
      { id: "p6", content: { en: "Flower/Flowers", de: "Blume/Blumen", hu: "virág/virágok", ro: "floare/flori" }, emoji: "🌸" }
    ]
  },
  {
    id: "hu-mp-3",
    taskDescription: {
      en: "Match polite words and icons.",
      de: "Verbinde höfliche Wörter mit Symbolen.",
      hu: "Párosítsd az udvarias szavakat az ikonokkal.",
      ro: "Potrivește cuvintele politicoase cu iconițe."
    },
    pairs: [
      { id: "p1", content: { en: "Please", de: "Bitte", hu: "kérlek", ro: "te rog" }, emoji: "🙏" },
      { id: "p2", content: { en: "Thank you", de: "Danke", hu: "köszönöm", ro: "mulțumesc" }, emoji: "🤝" },
      { id: "p3", content: { en: "Hello", de: "Hallo", hu: "szia", ro: "salut" }, emoji: "👋" },
      { id: "p4", content: { en: "Yes", de: "Ja", hu: "igen", ro: "da" }, emoji: "✅" },
      { id: "p5", content: { en: "No", de: "Nein", hu: "nem", ro: "nu" }, emoji: "❌" },
      { id: "p6", content: { en: "Goodbye", de: "Tschüss", hu: "viszlát", ro: "la revedere" }, emoji: "🚶" }
    ]
  }
];