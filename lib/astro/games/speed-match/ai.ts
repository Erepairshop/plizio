import { SpeedMatchRound } from "../../../../components/astro-games/views/m2/SpeedMatchView";

export const rounds: SpeedMatchRound[] = [
  {
    id: "ai-sm-1",
    taskDescription: {
      en: "Do these match? (AI term & meaning)",
      de: "Passen diese zusammen? (KI-Begriff & Bedeutung)",
      hu: "Egyeznek? (MI-fogalom és jelentés)",
      ro: "Se potrivesc? (Termen IA și semnificație)",
    },
    pairs: [
      {
        id: "p1",
        a: { en: "Neural network", de: "Neuronales Netz", hu: "Neuronháló", ro: "Rețea neuronală" },
        b: { en: "Inspired by the brain", de: "Vom Gehirn inspiriert", hu: "Az agy ihlette", ro: "Inspirată de creier" },
        isMatch: true,
      },
      {
        id: "p2",
        a: { en: "Training data", de: "Trainingsdaten", hu: "Tanítóadat", ro: "Date de antrenare" },
        b: { en: "A type of monitor", de: "Eine Art Monitor", hu: "Egyfajta monitor", ro: "Un tip de monitor" },
        isMatch: false,
      },
      {
        id: "p3",
        a: { en: "Chatbot", de: "Chatbot", hu: "Csevegőrobot", ro: "Chatbot" },
        b: { en: "Answers in words", de: "Antwortet in Worten", hu: "Szavakkal válaszol", ro: "Răspunde în cuvinte" },
        isMatch: true,
      },
      {
        id: "p4",
        a: { en: "Prompt", de: "Prompt", hu: "Prompt", ro: "Prompt" },
        b: { en: "A computer battery", de: "Eine Computerbatterie", hu: "Számítógép-akkumulátor", ro: "O baterie de computer" },
        isMatch: false,
      },
    ]
  },
  {
    id: "ai-sm-2",
    taskDescription: {
      en: "Do these match? (AI use & field)",
      de: "Passen diese zusammen? (KI-Einsatz & Bereich)",
      hu: "Egyeznek? (MI-alkalmazás és terület)",
      ro: "Se potrivesc? (Utilizare IA și domeniu)",
    },
    pairs: [
      {
        id: "p1",
        a: { en: "Image recognition", de: "Bilderkennung", hu: "Képfelismerés", ro: "Recunoaștere de imagini" },
        b: { en: "Sees what is in a photo", de: "Sieht was auf einem Foto ist", hu: "Felismeri mi van a képen", ro: "Vede ce este într-o poză" },
        isMatch: true,
      },
      {
        id: "p2",
        a: { en: "Voice assistant", de: "Sprachassistent", hu: "Hangasszisztens", ro: "Asistent vocal" },
        b: { en: "Understands speech", de: "Versteht Sprache", hu: "Megérti a beszédet", ro: "Înțelege vorbirea" },
        isMatch: true,
      },
      {
        id: "p3",
        a: { en: "Self-driving car", de: "Selbstfahrendes Auto", hu: "Önvezető autó", ro: "Mașină autonomă" },
        b: { en: "A drawing program", de: "Ein Zeichenprogramm", hu: "Egy rajzolóprogram", ro: "Un program de desen" },
        isMatch: false,
      },
      {
        id: "p4",
        a: { en: "Bias", de: "Verzerrung", hu: "Elfogultság", ro: "Părtinire" },
        b: { en: "Unfair results from bad data", de: "Unfaire Ergebnisse aus schlechten Daten", hu: "Igazságtalan eredmény rossz adatból", ro: "Rezultate nedrepte din date proaste" },
        isMatch: true,
      },
    ]
  }
];
