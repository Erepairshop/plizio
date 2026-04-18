import { GapFillStoryRound } from "../../../../components/astro-games/views/m3/GapFillStoryView";
export const rounds: GapFillStoryRound[] = [
  {
    id: "ges-gfs-1",
    taskDescription: { en: "Complete the story.", de: "Vervollständige die Geschichte.", hu: "Egészítsd ki a történetet.", ro: "Completează povestea." },
    story: {
      en: "The ancient {{0}} lived along the River {{1}}. They built massive {{2}} and used a writing system called {{3}}.",
      de: "Die alten {{0}} lebten am Fluss {{1}}. Sie bauten massive {{2}} und benutzten ein Schriftsystem namens {{3}}.",
      hu: "Az ókori {{0}} a {{1}} folyó mentén éltek. Hatalmas {{2}} építettek, és a {{3}} nevű írásrendszert használták.",
      ro: "Vechii {{0}} au trăit de-a lungul fluviului {{1}}. Au construit {{2}} masive și au folosit un sistem de scriere numit {{3}}."
    },
    blanks: [
      {
        index: 0, correctOptionId: "egyptians",
        options: [
          { id: "egyptians", label: { en: "Egyptians", de: "Ägypter", hu: "egyiptomiak", ro: "egipteni" } },
          { id: "romans", label: { en: "Romans", de: "Römer", hu: "rómaiak", ro: "romani" } }
        ]
      },
      {
        index: 1, correctOptionId: "nile",
        options: [
          { id: "nile", label: { en: "Nile", de: "Nil", hu: "Nílus", ro: "Nil" } },
          { id: "tiber", label: { en: "Tiber", de: "Tiber", hu: "Tiberis", ro: "Tibru" } }
        ]
      },
      {
        index: 2, correctOptionId: "pyramids",
        options: [
          { id: "pyramids", label: { en: "pyramids", de: "Pyramiden", hu: "piramisokat", ro: "piramide" } },
          { id: "castles", label: { en: "castles", de: "Burgen", hu: "várakat", ro: "castele" } }
        ]
      },
      {
        index: 3, correctOptionId: "hieroglyphics",
        options: [
          { id: "hieroglyphics", label: { en: "hieroglyphics", de: "Hieroglyphen", hu: "hieroglifa", ro: "hieroglife" } },
          { id: "latin", label: { en: "Latin", de: "Latein", hu: "latin", ro: "latină" } }
        ]
      }
    ]
  }
];
