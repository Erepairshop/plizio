import { FillBlankRound } from "../../../../components/astro-games/views/m3/FillBlankView";

export const rounds: FillBlankRound[] = [
  {
    id: "fb-bio-1",
    taskDescription: {
      en: "Fill in the blank with the correct biology term.",
      de: "Fülle die Lücke mit dem richtigen Biologiebegriff aus.",
      hu: "Egészítsd ki a mondatot a megfelelő biológiai kifejezéssel.",
      ro: "Completează spațiul liber cu termenul de biologie corect."
    },
    sentenceParts: {
      before: {
        en: "The green pigment in plants that absorbs light energy is called ",
        de: "Das grüne Pigment in Pflanzen, das Lichtenergie absorbiert, wird ",
        hu: "A növényekben lévő zöld pigmentet, amely elnyeli a fényenergiát, ",
        ro: "Pigmentul verde din plante care absoarbe energia luminoasă se numește "
      },
      after: {
        en: ".",
        de: " genannt.",
        hu: "-nek nevezik.",
        ro: "."
      }
    },
    options: [
      { en: "melanin", de: "Melanin", hu: "melanin", ro: "melanină" },
      { en: "chlorophyll", de: "Chlorophyll", hu: "klorofill", ro: "clorofilă" },
      { en: "hemoglobin", de: "Hämoglobin", hu: "hemoglobin", ro: "hemoglobină" }
    ],
    correctIndex: 1
  },
  {
    id: "fb-bio-2",
    taskDescription: {
      en: "Complete the sentence.",
      de: "Vervollständige den Satz.",
      hu: "Egészítsd ki a mondatot.",
      ro: "Completează propoziția."
    },
    sentenceParts: {
      before: {
        en: "Animals that eat only plants are called ",
        de: "Tiere, die sich nur von Pflanzen ernähren, nennt man ",
        hu: "A csak növényeket evő állatokat ",
        ro: "Animalele care mănâncă doar plante se numesc "
      },
      after: {
        en: ".",
        de: ".",
        hu: "-nak nevezzük.",
        ro: "."
      }
    },
    options: [
      { en: "carnivores", de: "Fleischfresser", hu: "húsevők", ro: "carnivore" },
      { en: "omnivores", de: "Allesfresser", hu: "mindenevők", ro: "omnivore" },
      { en: "herbivores", de: "Pflanzenfresser", hu: "növényevők", ro: "erbivore" }
    ],
    correctIndex: 2
  },
  {
    id: "fb-bio-3",
    taskDescription: {
      en: "Find the missing word.",
      de: "Finde das fehlende Wort.",
      hu: "Keresd meg a hiányzó szót.",
      ro: "Găsește cuvântul lipsă."
    },
    sentenceParts: {
      before: {
        en: "The basic unit of life in all living organisms is the ",
        de: "Die Grundeinheit des Lebens in allen Lebewesen ist die ",
        hu: "Minden élőlény alapvető építőköve a ",
        ro: "Unitatea de bază a vieții în toate organismele vii este "
      },
      after: {
        en: ".",
        de: ".",
        hu: ".",
        ro: "."
      }
    },
    options: [
      { en: "organ", de: "Organ", hu: "szerv", ro: "organul" },
      { en: "cell", de: "Zelle", hu: "sejt", ro: "celula" },
      { en: "tissue", de: "Gewebe", hu: "szövet", ro: "țesutul" }
    ],
    correctIndex: 1
  }
];