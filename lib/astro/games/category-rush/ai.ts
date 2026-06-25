import { CategoryRushRound } from "../../../../components/astro-games/views/m2/CategoryRushView";

export const rounds: CategoryRushRound[] = [
  {
    id: "ai-cr-1",
    durationMs: 30000,
    categories: [
      { id: "c-ai", label: { en: "AI does it", de: "KI macht es", hu: "Az MI csinálja", ro: "IA o face" }, edge: "top", color: "#9C27B0" },
      { id: "c-human", label: { en: "Human does it", de: "Mensch macht es", hu: "Ember csinálja", ro: "Omul o face" }, edge: "bottom", color: "#FF9800" },
    ],
    items: [
      { id: "i1", label: { en: "Recognize faces in photos", de: "Gesichter auf Fotos erkennen", hu: "Arcok felismerése képeken", ro: "Recunoaște fețe în poze" }, correctCategoryId: "c-ai" },
      { id: "i2", label: { en: "Feel real emotions", de: "Echte Gefühle haben", hu: "Valódi érzelmeket átélni", ro: "Simte emoții reale" }, correctCategoryId: "c-human" },
      { id: "i3", label: { en: "Translate text instantly", de: "Text sofort übersetzen", hu: "Szöveget azonnal fordítani", ro: "Traduce text instant" }, correctCategoryId: "c-ai" },
      { id: "i4", label: { en: "Decide what is fair", de: "Entscheiden was fair ist", hu: "Eldönteni mi igazságos", ro: "Decide ce este corect" }, correctCategoryId: "c-human" },
      { id: "i5", label: { en: "Sort millions of photos", de: "Millionen Fotos sortieren", hu: "Milliónyi képet rendezni", ro: "Sortează milioane de poze" }, correctCategoryId: "c-ai" },
      { id: "i6", label: { en: "Take responsibility", de: "Verantwortung tragen", hu: "Felelősséget vállalni", ro: "Asumă responsabilitatea" }, correctCategoryId: "c-human" }
    ]
  },
  {
    id: "ai-cr-2",
    durationMs: 30000,
    categories: [
      { id: "c-data", label: { en: "Training data", de: "Trainingsdaten", hu: "Tanítóadat", ro: "Date de antrenare" }, edge: "left", color: "#4CAF50" },
      { id: "c-output", label: { en: "AI output", de: "KI-Ausgabe", hu: "MI kimenet", ro: "Rezultat IA" }, edge: "right", color: "#03A9F4" }
    ],
    items: [
      { id: "i1", label: { en: "Thousands of cat photos", de: "Tausende Katzenfotos", hu: "Több ezer macskakép", ro: "Mii de poze cu pisici" }, correctCategoryId: "c-data" },
      { id: "i2", label: { en: "A generated answer", de: "Eine erzeugte Antwort", hu: "Egy generált válasz", ro: "Un răspuns generat" }, correctCategoryId: "c-output" },
      { id: "i3", label: { en: "Old chat examples", de: "Alte Chat-Beispiele", hu: "Régi beszélgetés-példák", ro: "Exemple vechi de chat" }, correctCategoryId: "c-data" },
      { id: "i4", label: { en: "A drawn picture", de: "Ein gezeichnetes Bild", hu: "Egy megrajzolt kép", ro: "O imagine desenată" }, correctCategoryId: "c-output" },
      { id: "i5", label: { en: "Labeled examples", de: "Beschriftete Beispiele", hu: "Címkézett példák", ro: "Exemple etichetate" }, correctCategoryId: "c-data" },
      { id: "i6", label: { en: "A predicted word", de: "Ein vorhergesagtes Wort", hu: "Egy megjósolt szó", ro: "Un cuvânt prezis" }, correctCategoryId: "c-output" }
    ]
  }
];
