import { FillBlankRound } from "../../../../components/astro-games/views/m3/FillBlankView";
export const rounds: FillBlankRound[] = [
  {
    id: "ges-fb-1",
    taskDescription: { en: "Fill in the blank.", de: "Fülle die Lücke aus.", hu: "Egészítsd ki a mondatot.", ro: "Completează spațiul liber." },
    sentenceParts: {
      before: { en: "The first Olympic Games were held in Ancient ", de: "Die ersten Olympischen Spiele fanden im antiken ", hu: "Az első olimpiai játékokat az ókori ", ro: "Primele Jocuri Olimpice au avut loc în " },
      after: { en: ".", de: " statt.", hu: " tartották.", ro: " antică." }
    },
    options: [
      { en: "Greece", de: "Griechenland", hu: "Görögországban", ro: "Grecia" },
      { en: "Rome", de: "Rom", hu: "Rómában", ro: "Roma" },
      { en: "Egypt", de: "Ägypten", hu: "Egyiptomban", ro: "Egipt" }
    ],
    correctIndex: 0
  }
];
