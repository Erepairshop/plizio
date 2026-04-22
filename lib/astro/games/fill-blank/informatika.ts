import { FillBlankRound } from "../../../../components/astro-games/views/m3/FillBlankView";

export const rounds: FillBlankRound[] = [
  {
    id: "info-fb-1",
    taskDescription: {
      en: "Fill in the blank with the correct IT term.",
      de: "Fülle die Lücke mit dem richtigen IT-Begriff aus.",
      hu: "Egészítsd ki a mondatot a megfelelő informatikai kifejezéssel.",
      ro: "Completează spațiul liber cu termenul IT corect."
    },
    sentenceParts: {
      before: {
        en: "The physical parts of a computer are called ",
        de: "Die physischen Teile eines Computers werden ",
        hu: "A számítógép fizikai részeit ",
        ro: "Părțile fizice ale unui computer se numesc "
      },
      after: {
        en: ".",
        de: " genannt.",
        hu: "-nek nevezzük.",
        ro: "."
      }
    },
    options: [
      { en: "software", de: "Software", hu: "szoftver", ro: "software" },
      { en: "hardware", de: "Hardware", hu: "hardver", ro: "hardware" },
      { en: "firmware", de: "Firmware", hu: "firmware", ro: "firmware" }
    ],
    correctIndex: 1
  },
  {
    id: "info-fb-2",
    taskDescription: {
      en: "Complete the sentence.",
      de: "Vervollständige den Satz.",
      hu: "Egészítsd ki a mondatot.",
      ro: "Completează propoziția."
    },
    sentenceParts: {
      before: {
        en: "A program that allows you to browse the web is a ",
        de: "Ein Programm, mit dem Sie im Internet surfen können, ist ein ",
        hu: "Az a program, amellyel a világhálón böngészhetünk, a ",
        ro: "Un program care vă permite să navigați pe web este un "
      },
      after: {
        en: ".",
        de: ".",
        hu: ".",
        ro: "."
      }
    },
    options: [
      { en: "browser", de: "Browser", hu: "böngésző", ro: "browser" },
      { en: "editor", de: "Editor", hu: "szerkesztő", ro: "editor" },
      { en: "compiler", de: "Compiler", hu: "fordítóprogram", ro: "compilator" }
    ],
    correctIndex: 0
  }
];
