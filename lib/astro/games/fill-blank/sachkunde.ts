import { FillBlankRound } from "../../../../components/astro-games/views/m3/FillBlankView";

export const fillBlankSachkunde: FillBlankRound[] = [
  {
    id: "fb-sachkunde-1",
    taskDescription: {
      en: "Fill in the blank with the correct word.",
      de: "Fülle die Lücke mit dem richtigen Wort aus.",
      hu: "Egészítsd ki a mondatot a helyes szóval.",
      ro: "Completează spațiul liber cu cuvântul corect."
    },
    sentenceParts: {
      before: {
        en: "The Earth revolves around the ",
        de: "Die Erde dreht sich um die ",
        hu: "A Föld a ",
        ro: "Pământul se rotește în jurul "
      },
      after: {
        en: ".",
        de: ".",
        hu: " körül kering.",
        ro: "."
      }
    },
    options: [
      {
        en: "moon",
        de: "Mond",
        hu: "Hold",
        ro: "Lunii" // Genitive since "în jurul Lunii"
      },
      {
        en: "sun",
        de: "Sonne",
        hu: "Nap",
        ro: "Soarelui" // Genitive
      },
      {
        en: "stars",
        de: "Sterne",
        hu: "csillagok",
        ro: "stelelor"
      },
      {
        en: "Mars",
        de: "Mars",
        hu: "Mars",
        ro: "planetei Marte"
      }
    ],
    correctIndex: 1
  },
  {
    id: "fb-sachkunde-2",
    taskDescription: {
      en: "Fill in the blank with the correct word.",
      de: "Fülle die Lücke mit dem richtigen Wort aus.",
      hu: "Egészítsd ki a mondatot a helyes szóval.",
      ro: "Completează spațiul liber cu cuvântul corect."
    },
    sentenceParts: {
      before: {
        en: "A ",
        de: "Ein ",
        hu: "A ",
        ro: "Un "
      },
      after: {
        en: " is used to observe distant stars.",
        de: " wird verwendet, um weit entfernte Sterne zu beobachten.",
        hu: " segítségével figyelhetjük meg a távoli csillagokat.",
        ro: " este folosit pentru a observa stelele îndepărtate."
      }
    },
    options: [
      {
        en: "microscope",
        de: "Mikroskop",
        hu: "mikroszkóp",
        ro: "microscop"
      },
      {
        en: "thermometer",
        de: "Thermometer",
        hu: "hőmérő",
        ro: "termometru"
      },
      {
        en: "telescope",
        de: "Teleskop",
        hu: "távcső",
        ro: "telescop"
      },
      {
        en: "compass",
        de: "Kompass",
        hu: "iránytű",
        ro: "compas"
      }
    ],
    correctIndex: 2
  },
  {
    id: "fb-sachkunde-3",
    taskDescription: {
      en: "Fill in the blank with the correct word.",
      de: "Fülle die Lücke mit dem richtigen Wort aus.",
      hu: "Egészítsd ki a mondatot a helyes szóval.",
      ro: "Completează spațiul liber cu cuvântul corect."
    },
    sentenceParts: {
      before: {
        en: "The ",
        de: "Die ",
        hu: "A ",
        ro: ""
      },
      after: {
        en: " pulls objects towards the center of the Earth.",
        de: " zieht Objekte zum Erdmittelpunkt.",
        hu: " a Föld középpontja felé húzza a tárgyakat.",
        ro: " atrage obiectele spre centrul Pământului."
      }
    },
    options: [
      {
        en: "magnetism",
        de: "Magnetismus",
        hu: "mágnesesség",
        ro: "Magnetismul"
      },
      {
        en: "gravity",
        de: "Schwerkraft",
        hu: "gravitáció",
        ro: "Gravitația"
      },
      {
        en: "wind",
        de: "Wind",
        hu: "szél",
        ro: "Vântul"
      },
      {
        en: "light",
        de: "Licht",
        hu: "fény",
        ro: "Lumina"
      }
    ],
    correctIndex: 1
  }
];
