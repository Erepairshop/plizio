import { GapFillStoryRound } from "../../../../components/astro-games/views/m3/GapFillStoryView";

export const rounds: GapFillStoryRound[] = [
  {
    id: "ai-gfs-1",
    taskDescription: {
      en: "Fill in the blanks to complete the story about how an AI learns.",
      de: "Fülle die Lücken aus, um die Geschichte darüber zu vervollständigen, wie eine KI lernt.",
      hu: "Egészítsd ki a hiányzó szavakat az MI tanulásáról szóló történetben.",
      ro: "Completează spațiile libere pentru a termina povestea despre cum învață o IA."
    },
    story: {
      en: "To teach an AI, we first give it a lot of {{0}}. The AI then builds a {{1}} that finds patterns inside the examples. When we want an answer, we send it a {{2}}. But if the examples were unfair, the AI can show {{3}} in its replies.",
      de: "Um eine KI zu trainieren, geben wir ihr zuerst viele {{0}}. Die KI baut dann ein {{1}} auf, das Muster in den Beispielen findet. Wenn wir eine Antwort wollen, senden wir ihr einen {{2}}. Aber wenn die Beispiele unfair waren, kann die KI eine {{3}} in ihren Antworten zeigen.",
      hu: "Egy MI tanításához először sok {{0}} adunk neki. Az MI ezután felépít egy {{1}}, amely mintázatokat talál a példákban. Ha választ szeretnénk, küldünk neki egy {{2}}. De ha a példák igazságtalanok voltak, az MI {{3}} mutathat a válaszaiban.",
      ro: "Pentru a antrena o IA, îi dăm mai întâi multe {{0}}. Apoi IA construiește un {{1}} care găsește tipare în exemple. Când vrem un răspuns, îi trimitem un {{2}}. Dar dacă exemplele au fost nedrepte, IA poate arăta o {{3}} în răspunsurile sale."
    },
    blanks: [
      {
        index: 0,
        correctOptionId: "data",
        options: [
          { id: "data", label: { en: "training data", de: "Trainingsdaten", hu: "tanítóadatot", ro: "date de antrenare" } },
          { id: "cables", label: { en: "cables", de: "Kabel", hu: "kábelt", ro: "cabluri" } }
        ]
      },
      {
        index: 1,
        correctOptionId: "model",
        options: [
          { id: "model", label: { en: "model", de: "Modell", hu: "modellt", ro: "model" } },
          { id: "printer", label: { en: "printer", de: "Drucker", hu: "nyomtatót", ro: "imprimantă" } }
        ]
      },
      {
        index: 2,
        correctOptionId: "prompt",
        options: [
          { id: "prompt", label: { en: "prompt", de: "Prompt", hu: "promptot", ro: "prompt" } },
          { id: "battery", label: { en: "battery", de: "Batterie", hu: "akkumulátort", ro: "baterie" } }
        ]
      },
      {
        index: 3,
        correctOptionId: "bias",
        options: [
          { id: "bias", label: { en: "bias", de: "Verzerrung", hu: "elfogultságot", ro: "părtinire" } },
          { id: "color", label: { en: "color", de: "Farbe", hu: "színt", ro: "culoare" } }
        ]
      }
    ]
  }
];
