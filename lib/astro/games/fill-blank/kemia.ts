import { FillBlankRound } from "../../../../components/astro-games/views/m3/FillBlankView";

export const rounds: FillBlankRound[] = [
  {
    id: "kem-fb-1",
    taskDescription: {
      en: "Fill in the blank with the correct chemical term.",
      de: "Fülle die Lücke mit dem richtigen chemischen Begriff.",
      hu: "Egészítsd ki a mondatot a megfelelő kémiai kifejezéssel.",
      ro: "Completează spațiul liber cu termenul chimic corect."
    },
    sentenceParts: {
      before: {
        en: "The center of an atom is called the ",
        de: "Das Zentrum eines Atoms nennt man den ",
        hu: "Az atom közepét ",
        ro: "Centrul unui atom se numește "
      },
      after: {
        en: ".",
        de: ".",
        hu: " hívják.",
        ro: "."
      }
    },
    options: [
      { en: "nucleus", de: "Atomkern", hu: "atommagnak", ro: "nucleu" },
      { en: "electron", de: "Elektron", hu: "elektronnak", ro: "electron" },
      { en: "molecule", de: "Molekül", hu: "molekulának", ro: "moleculă" }
    ],
    correctIndex: 0
  },
  {
    id: "kem-fb-2",
    taskDescription: {
      en: "Fill in the blank.",
      de: "Fülle die Lücke aus.",
      hu: "Egészítsd ki a mondatot.",
      ro: "Completează spațiul liber."
    },
    sentenceParts: {
      before: {
        en: "A substance made of two or more different elements is called a ",
        de: "Ein Stoff, der aus zwei oder mehr verschiedenen Elementen besteht, ist eine ",
        hu: "A két vagy több különböző elemből álló anyagot ",
        ro: "O substanță formată din două sau mai multe elemente diferite se numește "
      },
      after: {
        en: ".",
        de: ".",
        hu: " nevezzük.",
        ro: "."
      }
    },
    options: [
      { en: "compound", de: "Verbindung", hu: "vegyületnek", ro: "compus" },
      { en: "mixture", de: "Mischung", hu: "keveréknek", ro: "amestec" },
      { en: "solution", de: "Lösung", hu: "oldatnak", ro: "soluție" }
    ],
    correctIndex: 0
  }
];
