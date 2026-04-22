import { MemoryPairsRound } from "../../../../components/astro-games/views/m2/MemoryPairsView";

export const rounds: MemoryPairsRound[] = [
  {
    id: "math-mp-1",
    taskDescription: {
      en: "Match the numbers with their word form!",
      de: "Verbinde die Zahlen mit ihren Wörtern!",
      hu: "Kösd össze a számokat a nevükkel!",
      ro: "Asociază numerele cu forma lor în cuvinte!"
    },
    pairs: [
      { id: "p1", content: { en: "One", de: "Eins", hu: "Egy", ro: "Unu" }, emoji: "1️⃣" },
      { id: "p2", content: { en: "Two", de: "Zwei", hu: "Kettő", ro: "Doi" }, emoji: "2️⃣" },
      { id: "p3", content: { en: "Three", de: "Drei", hu: "Három", ro: "Trei" }, emoji: "3️⃣" },
      { id: "p4", content: { en: "Four", de: "Vier", hu: "Négy", ro: "Patru" }, emoji: "4️⃣" },
      { id: "p5", content: { en: "Five", de: "Fünf", hu: "Öt", ro: "Cinci" }, emoji: "5️⃣" },
      { id: "p6", content: { en: "Six", de: "Sechs", hu: "Hat", ro: "Șase" }, emoji: "6️⃣" }
    ]
  },
  {
    id: "math-mp-2",
    taskDescription: {
      en: "Match the addition with the sum!",
      de: "Verbinde die Addition mit der Summe!",
      hu: "Kösd össze az összeadást az eredménnyel!",
      ro: "Asociază adunarea cu suma!"
    },
    pairs: [
      { id: "p1", content: { en: "2 + 2", de: "2 + 2", hu: "2 + 2", ro: "2 + 2" }, emoji: "4️⃣" },
      { id: "p2", content: { en: "3 + 4", de: "3 + 4", hu: "3 + 4", ro: "3 + 4" }, emoji: "7️⃣" },
      { id: "p3", content: { en: "5 + 3", de: "5 + 3", hu: "5 + 3", ro: "5 + 3" }, emoji: "8️⃣" },
      { id: "p4", content: { en: "4 + 5", de: "4 + 5", hu: "4 + 5", ro: "4 + 5" }, emoji: "9️⃣" },
      { id: "p5", content: { en: "6 + 4", de: "6 + 4", hu: "6 + 4", ro: "6 + 4" }, emoji: "🔟" },
      { id: "p6", content: { en: "3 + 2", de: "3 + 2", hu: "3 + 2", ro: "3 + 2" }, emoji: "5️⃣" }
    ]
  },
  {
    id: "math-mp-3",
    taskDescription: {
      en: "Match the multiplication with the product!",
      de: "Verbinde die Multiplikation mit dem Produkt!",
      hu: "Kösd össze a szorzást az eredménnyel!",
      ro: "Asociază înmulțirea cu produsul!"
    },
    pairs: [
      { id: "p1", content: { en: "2 x 3", de: "2 x 3", hu: "2 x 3", ro: "2 x 3" }, emoji: "6️⃣" },
      { id: "p2", content: { en: "3 x 3", de: "3 x 3", hu: "3 x 3", ro: "3 x 3" }, emoji: "9️⃣" },
      { id: "p3", content: { en: "4 x 2", de: "4 x 2", hu: "4 x 2", ro: "4 x 2" }, emoji: "8️⃣" },
      { id: "p4", content: { en: "5 x 2", de: "5 x 2", hu: "5 x 2", ro: "5 x 2" }, emoji: "🔟" },
      { id: "p5", content: { en: "2 x 2", de: "2 x 2", hu: "2 x 2", ro: "2 x 2" }, emoji: "4️⃣" },
      { id: "p6", content: { en: "7 x 1", de: "7 x 1", hu: "7 x 1", ro: "7 x 1" }, emoji: "7️⃣" }
    ]
  }
];
