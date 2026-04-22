import { FillBlankRound } from "../../../../components/astro-games/views/m3/FillBlankView";

export const rounds: FillBlankRound[] = [
  {
    id: "fb-math-1",
    taskDescription: {
      en: "Fill in the blank with the correct value.",
      de: "Fülle die Lücke mit dem richtigen Wert aus.",
      hu: "Töltsd ki az üres helyet a megfelelő értékkel.",
      ro: "Completează spațiul liber cu valoarea corectă."
    },
    sentenceParts: {
      before: {
        en: "In the equation x + 5 = 12, the value of x is ",
        de: "In der Gleichung x + 5 = 12 ist der Wert von x ",
        hu: "Az x + 5 = 12 egyenletben az x értéke ",
        ro: "În ecuația x + 5 = 12, valoarea lui x este "
      },
      after: {
        en: ".",
        de: ".",
        hu: ".",
        ro: "."
      }
    },
    options: [
      { en: "5", de: "5", hu: "5", ro: "5" },
      { en: "7", de: "7", hu: "7", ro: "7" },
      { en: "17", de: "17", hu: "17", ro: "17" }
    ],
    correctIndex: 1
  },
  {
    id: "fb-math-2",
    taskDescription: {
      en: "Find the correct term.",
      de: "Finde den richtigen Begriff.",
      hu: "Keresd meg a helyes kifejezést.",
      ro: "Găsește termenul corect."
    },
    sentenceParts: {
      before: {
        en: "A polygon with eight sides is called an ",
        de: "Ein Polygon mit acht Seiten nennt man ein ",
        hu: "A nyolcoldalú sokszöget ",
        ro: "Un poligon cu opt laturi se numește "
      },
      after: {
        en: ".",
        de: ".",
        hu: "-nak nevezzük.",
        ro: "."
      }
    },
    options: [
      { en: "hexagon", de: "Hexagon", hu: "hatszögnek", ro: "hexagon" },
      { en: "octagon", de: "Oktogon", hu: "nyolcszögnek", ro: "octagon" },
      { en: "pentagon", de: "Pentagon", hu: "ötszögnek", ro: "pentagon" }
    ],
    correctIndex: 1
  },
  {
    id: "fb-math-3",
    taskDescription: {
      en: "Identify the fraction.",
      de: "Bestimme den Bruch.",
      hu: "Határozd meg a törtet.",
      ro: "Identifică fracția."
    },
    sentenceParts: {
      before: {
        en: "If you divide a pizza into four equal slices and eat one, you have eaten ",
        de: "Wenn du eine Pizza in vier gleiche Stücke schneidest und eines isst, hast du ",
        hu: "Ha egy pizzát négy egyenlő szeletre vágsz és megeszel egyet, akkor a pizza ",
        ro: "Dacă împarți o pizza în patru felii egale și mănânci una, ai mâncat "
      },
      after: {
        en: " of the pizza.",
        de: " der Pizza gegessen.",
        hu: "-át etted meg.",
        ro: " din pizza."
      }
    },
    options: [
      { en: "1/2", de: "1/2", hu: "felét", ro: "1/2" },
      { en: "1/4", de: "1/4", hu: "negyedét", ro: "1/4" },
      { en: "3/4", de: "3/4", hu: "háromnegyedét", ro: "3/4" }
    ],
    correctIndex: 1
  }
];
