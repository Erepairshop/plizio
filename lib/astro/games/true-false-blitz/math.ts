import { TrueFalseBlitzRound } from "../../../../components/astro-games/views/m2/TrueFalseBlitzView";

export const rounds: TrueFalseBlitzRound[] = [
  {
    id: "math-tf-1",
    taskDescription: {
      en: "Basic Math Facts",
      de: "Grundlegende mathematische Fakten",
      hu: "Alapvető matematikai tények",
      ro: "Fapte matematice de bază"
    },
    statements: [
      {
        id: "s1",
        text: {
          en: "5 is greater than 3.",
          de: "5 ist größer als 3.",
          hu: "Az 5 nagyobb, mint a 3.",
          ro: "5 este mai mare decât 3."
        },
        isTrue: true,
        explanation: {
          en: "In the number line, 5 comes after 3.",
          de: "Auf dem Zahlenstrahl kommt die 5 nach der 3.",
          hu: "A számegyenesen az 5 a 3 után következik.",
          ro: "Pe axa numerelor, 5 vine după 3."
        }
      },
      {
        id: "s2",
        text: {
          en: "A triangle has 4 sides.",
          de: "Ein Dreieck hat 4 Seiten.",
          hu: "Egy háromszögnek 4 oldala van.",
          ro: "Un triunghi are 4 laturi."
        },
        isTrue: false,
        explanation: {
          en: "A triangle has 3 sides.",
          de: "Ein Dreieck hat 3 Seiten.",
          hu: "Egy háromszögnek 3 oldala van.",
          ro: "Un triunghi are 3 laturi."
        }
      },
      {
        id: "s3",
        text: {
          en: "The sum of 12 and 8 is 20.",
          de: "Die Summe von 12 und 8 ist 20.",
          hu: "12 és 8 összege 20.",
          ro: "Suma lui 12 și 8 este 20."
        },
        isTrue: true,
        explanation: {
          en: "12 + 8 = 20.",
          de: "12 + 8 = 20.",
          hu: "12 + 8 = 20.",
          ro: "12 + 8 = 20."
        }
      }
    ]
  },
  {
    id: "math-tf-2",
    taskDescription: {
      en: "Geometry and Shapes",
      de: "Geometrie und Formen",
      hu: "Geometria és alakzatok",
      ro: "Geometrie și forme"
    },
    statements: [
      {
        id: "s1",
        text: {
          en: "A square has four equal sides.",
          de: "Ein Quadrat hat vier gleiche Seiten.",
          hu: "A négyzetnek négy egyenlő oldala van.",
          ro: "Un pătrat are patru laturi egale."
        },
        isTrue: true,
        explanation: {
          en: "All sides of a square are of the same length.",
          de: "Alle Seiten eines Quadrats sind gleich lang.",
          hu: "A négyzet minden oldala azonos hosszúságú.",
          ro: "Toate laturile unui pătrat au aceeași lungime."
        }
      },
      {
        id: "s2",
        text: {
          en: "A circle has 3 corners.",
          de: "Ein Kreis hat 3 Ecken.",
          hu: "A körnek 3 sarka van.",
          ro: "Un cerc are 3 colțuri."
        },
        isTrue: false,
        explanation: {
          en: "A circle has no corners.",
          de: "Ein Kreis hat keine Ecken.",
          hu: "A körnek nincs sarka.",
          ro: "Un cerc nu are colțuri."
        }
      },
      {
        id: "s3",
        text: {
          en: "A cube has 6 faces.",
          de: "Ein Würfel hat 6 Flächen.",
          hu: "A kockának 6 lapja van.",
          ro: "Un cub are 6 fețe."
        },
        isTrue: true,
        explanation: {
          en: "A cube is a 3D shape with 6 square faces.",
          de: "Ein Würfel ist eine 3D-Form mit 6 quadratischen Flächen.",
          hu: "A kocka egy 3D-s alakzat, amelynek 6 négyzet alakú lapja van.",
          ro: "Un cub este o formă 3D cu 6 fețe pătrate."
        }
      }
    ]
  },
  {
    id: "math-tf-3",
    taskDescription: {
      en: "Properties of Numbers",
      de: "Eigenschaften von Zahlen",
      hu: "Számok tulajdonságai",
      ro: "Proprietățile numerelor"
    },
    statements: [
      {
        id: "s1",
        text: {
          en: "Any number multiplied by 0 is 0.",
          de: "Jede Zahl multipliziert mit 0 ist 0.",
          hu: "Bármely számot 0-val szorozva 0-t kapunk.",
          ro: "Orice număr înmulțit cu 0 este 0."
        },
        isTrue: true,
        explanation: {
          en: "The zero property of multiplication states that the product of any number and zero is zero.",
          de: "Das Nullprodukt besagt, dass das Produkt aus einer beliebigen Zahl und Null gleich Null ist.",
          hu: "A szorzás nulla tulajdonsága kimondja, hogy bármely szám és a nulla szorzata nulla.",
          ro: "Proprietatea de zero a înmulțirii afirmă că produsul oricărui număr cu zero este zero."
        }
      },
      {
        id: "s2",
        text: {
          en: "The number 1 is a prime number.",
          de: "Die Zahl 1 ist eine Primzahl.",
          hu: "Az 1-es szám prímszám.",
          ro: "Numărul 1 este un număr prim."
        },
        isTrue: false,
        explanation: {
          en: "Prime numbers must be greater than 1.",
          de: "Primzahlen müssen größer als 1 sein.",
          hu: "A prímszámoknak nagyobbnak kell lenniük 1-nél.",
          ro: "Numerele prime trebuie să fie mai mari decât 1."
        }
      }
    ]
  }
];
