import { MemoryPairsRound } from "../../../../components/astro-games/views/m2/MemoryPairsView";

export const rounds: MemoryPairsRound[] = [
  {
    id: "hu-mp-1",
    taskDescription: {
      en: "Match German words and pictures.",
      de: "Finde die Paare: Wort und Bild.",
      hu: "Parositsd a nemet szot a keppel.",
      ro: "Potriveste cuvantul german cu imaginea."
    },
    pairs: [
      { id: "p1", content: { en: "Apfel", de: "Apfel", hu: "alma", ro: "mar" }, emoji: "🍎" },
      { id: "p2", content: { en: "Hund", de: "Hund", hu: "kutya", ro: "caine" }, emoji: "🐶" },
      { id: "p3", content: { en: "Katze", de: "Katze", hu: "macska", ro: "pisica" }, emoji: "🐱" },
      { id: "p4", content: { en: "Buch", de: "Buch", hu: "konyv", ro: "carte" }, emoji: "📘" },
      { id: "p5", content: { en: "Milch", de: "Milch", hu: "tej", ro: "lapte" }, emoji: "🥛" },
      { id: "p6", content: { en: "Brot", de: "Brot", hu: "kenyer", ro: "paine" }, emoji: "🍞" }
    ]
  },
  {
    id: "hu-mp-2",
    taskDescription: {
      en: "Find singular-plural pairs.",
      de: "Finde Einzahl-Mehrzahl-Paare.",
      hu: "Talald meg az egyes-tobbes szamu parokat.",
      ro: "Gaseste perechi singular-plural."
    },
    pairs: [
      { id: "p1", content: { en: "Hund/Hunde", de: "Hund/Hunde", hu: "kutya/kutyak", ro: "caine/caini" }, emoji: "🐕" },
      { id: "p2", content: { en: "Katze/Katzen", de: "Katze/Katzen", hu: "macska/macskak", ro: "pisica/pisici" }, emoji: "🐈" },
      { id: "p3", content: { en: "Buch/Bucher", de: "Buch/Bucher", hu: "konyv/konyvek", ro: "carte/carti" }, emoji: "📚" },
      { id: "p4", content: { en: "Haus/Hauser", de: "Haus/Hauser", hu: "haz/hazak", ro: "casa/case" }, emoji: "🏘️" },
      { id: "p5", content: { en: "Kind/Kinder", de: "Kind/Kinder", hu: "gyerek/gyerekek", ro: "copil/copii" }, emoji: "🧒" },
      { id: "p6", content: { en: "Blume/Blumen", de: "Blume/Blumen", hu: "virag/viragok", ro: "floare/flori" }, emoji: "🌸" }
    ]
  },
  {
    id: "hu-mp-3",
    taskDescription: {
      en: "Match polite words and icons.",
      de: "Verbinde hofliche Worter mit Symbolen.",
      hu: "Parositsd az udvarias szavakat az ikonokkal.",
      ro: "Potriveste cuvintele politicoase cu iconite."
    },
    pairs: [
      { id: "p1", content: { en: "Bitte", de: "Bitte", hu: "kerlek", ro: "te rog" }, emoji: "🙏" },
      { id: "p2", content: { en: "Danke", de: "Danke", hu: "koszonom", ro: "multumesc" }, emoji: "🤝" },
      { id: "p3", content: { en: "Hallo", de: "Hallo", hu: "szia", ro: "salut" }, emoji: "👋" },
      { id: "p4", content: { en: "Ja", de: "Ja", hu: "igen", ro: "da" }, emoji: "✅" },
      { id: "p5", content: { en: "Nein", de: "Nein", hu: "nem", ro: "nu" }, emoji: "❌" },
      { id: "p6", content: { en: "Tschuss", de: "Tschuss", hu: "viszlat", ro: "pa" }, emoji: "👋" }
    ]
  }
];
