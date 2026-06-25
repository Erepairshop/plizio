import { TrueFalseBlitzRound } from "../../../../components/astro-games/views/m2/TrueFalseBlitzView";

export const rounds: TrueFalseBlitzRound[] = [
  {
    id: "ai-tf-1",
    statements: [
      {
        id: "s1",
        text: { en: "AI learns from examples in training data.", de: "KI lernt aus Beispielen in den Trainingsdaten.", hu: "Az MI a tanítóadatban lévő példákból tanul.", ro: "IA învață din exemple din datele de antrenare." },
        isTrue: true
      },
      {
        id: "s2",
        text: { en: "A chatbot truly feels happy or sad.", de: "Ein Chatbot fühlt wirklich Freude oder Trauer.", hu: "Egy csevegőrobot valóban érez örömöt vagy bánatot.", ro: "Un chatbot simte cu adevărat bucurie sau tristețe." },
        isTrue: false
      },
      {
        id: "s3",
        text: { en: "If training data is biased, the AI can give unfair results.", de: "Wenn die Trainingsdaten verzerrt sind, kann die KI unfaire Ergebnisse liefern.", hu: "Ha a tanítóadat elfogult, az MI igazságtalan eredményt adhat.", ro: "Dacă datele de antrenare sunt părtinitoare, IA poate da rezultate nedrepte." },
        isTrue: true
      },
      {
        id: "s4",
        text: { en: "AI can sometimes make mistakes and give wrong answers.", de: "KI kann manchmal Fehler machen und falsche Antworten geben.", hu: "Az MI néha hibázhat és rossz választ adhat.", ro: "IA poate uneori greși și da răspunsuri greșite." },
        isTrue: true
      },
      {
        id: "s5",
        text: { en: "A prompt is the instruction we give to an AI.", de: "Ein Prompt ist die Anweisung, die wir einer KI geben.", hu: "A prompt az az utasítás, amelyet az MI-nek adunk.", ro: "Un prompt este instrucțiunea pe care o dăm unei IA." },
        isTrue: true
      }
    ]
  }
];
