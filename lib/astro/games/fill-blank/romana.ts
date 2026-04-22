import { FillBlankRound } from "../../../../components/astro-games/views/m3/FillBlankView";

export const rounds: FillBlankRound[] = [
  {
    id: "rom-fb-1",
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
    id: "rom-fb-2",
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
  },
  {
    id: "rom-fb-3",
    taskDescription: {
      en: "Fill in the blank about the periodic table.",
      de: "Fülle die Lücke über das Periodensystem aus.",
      hu: "Egészítsd ki a mondatot a periódusos rendszerrel kapcsolatban.",
      ro: "Completează spațiul liber despre tabelul periodic."
    },
    sentenceParts: {
      before: {
        en: "The vertical columns of the periodic table are called ",
        de: "Die vertikalen Spalten des Periodensystems werden ",
        hu: "A periódusos rendszer függőleges oszlopait ",
        ro: "Coloanele verticale ale tabelului periodic se numesc "
      },
      after: {
        en: ".",
        de: " genannt.",
        hu: " nevezzük.",
        ro: "."
      }
    },
    options: [
      { en: "groups", de: "Gruppen", hu: "csoportoknak", ro: "grupe" },
      { en: "periods", de: "Perioden", hu: "periódusoknak", ro: "perioade" },
      { en: "metals", de: "Metalle", hu: "fémeknek", ro: "metale" }
    ],
    correctIndex: 0
  },
  {
    id: "rom-fb-4",
    taskDescription: {
      en: "Fill in the blank about acids.",
      de: "Fülle die Lücke über Säuren aus.",
      hu: "Egészítsd ki a mondatot a savakkal kapcsolatban.",
      ro: "Completează spațiul liber despre acizi."
    },
    sentenceParts: {
      before: {
        en: "A substance with a pH less than 7 is called an ",
        de: "Ein Stoff mit einem pH-Wert unter 7 wird als ",
        hu: "A 7-nél kisebb pH-értékű anyagokat ",
        ro: "O substanță cu un pH mai mic de 7 se numește "
      },
      after: {
        en: ".",
        de: " bezeichnet.",
        hu: " nevezzük.",
        ro: "."
      }
    },
    options: [
      { en: "acid", de: "Säure", hu: "savnak", ro: "acid" },
      { en: "base", de: "Base", hu: "bázisnak", ro: "bază" },
      { en: "salt", de: "Salz", hu: "sónak", ro: "sare" }
    ],
    correctIndex: 0
  }
];
