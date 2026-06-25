import { SortPuzzleRound } from "../../../../components/astro-games/views/m3/SortPuzzleView";

export const rounds: SortPuzzleRound[] = [
  {
    id: "ai-sp-1",
    taskDescription: {
      en: "Sort the steps of teaching an AI in the correct order.",
      de: "Sortiere die Schritte, um eine KI zu trainieren, in der richtigen Reihenfolge.",
      hu: "Rendezd helyes sorrendbe egy MI tanításának lépéseit.",
      ro: "Sortează pașii antrenării unei IA în ordinea corectă."
    },
    items: [
      { id: "s1", label: { en: "Collect training data", de: "Trainingsdaten sammeln", hu: "Tanítóadat gyűjtése", ro: "Colectează date de antrenare" } },
      { id: "s2", label: { en: "Label the examples", de: "Beispiele beschriften", hu: "Példák címkézése", ro: "Etichetează exemplele" } },
      { id: "s3", label: { en: "Train the model", de: "Modell trainieren", hu: "A modell tanítása", ro: "Antrenează modelul" } },
      { id: "s4", label: { en: "Test the answers", de: "Antworten testen", hu: "A válaszok tesztelése", ro: "Testează răspunsurile" } }
    ],
    correctOrder: ["s1", "s2", "s3", "s4"]
  },
  {
    id: "ai-sp-2",
    taskDescription: {
      en: "Sort the AI fields from narrow to broad.",
      de: "Sortiere die KI-Bereiche von eng nach breit.",
      hu: "Rendezd az MI-területeket a szűkebbtől a tágabb felé.",
      ro: "Sortează domeniile IA de la îngust la larg."
    },
    items: [
      { id: "u1", label: { en: "A single chatbot", de: "Ein einzelner Chatbot", hu: "Egyetlen csevegőrobot", ro: "Un singur chatbot" } },
      { id: "u2", label: { en: "Neural networks", de: "Neuronale Netze", hu: "Neuronhálók", ro: "Rețele neuronale" } },
      { id: "u3", label: { en: "Machine learning", de: "Maschinelles Lernen", hu: "Gépi tanulás", ro: "Învățare automată" } },
      { id: "u4", label: { en: "Artificial intelligence", de: "Künstliche Intelligenz", hu: "Mesterséges intelligencia", ro: "Inteligență artificială" } }
    ],
    correctOrder: ["u1", "u2", "u3", "u4"]
  }
];
