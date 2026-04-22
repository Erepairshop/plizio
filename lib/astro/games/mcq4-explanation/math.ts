import { MCQ4ExplanationRound } from "../../../../components/astro-games/views/m3/MCQ4ExplanationView";

export const rounds: MCQ4ExplanationRound[] = [
  {
    id: "math-mcq-1",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "What is the sum of angles in a triangle?",
      de: "Wie groß ist die Winkelsumme in einem Dreieck?",
      hu: "Mennyi egy háromszög belső szögeinek összege?",
      ro: "Care este suma unghiurilor dintr-un triunghi?"
    },
    options: [
      { en: "90°", de: "90°", hu: "90°", ro: "90°" },
      { en: "180°", de: "180°", hu: "180°", ro: "180°" },
      { en: "270°", de: "270°", hu: "270°", ro: "270°" },
      { en: "360°", de: "360°", hu: "360°", ro: "360°" }
    ],
    correctIndex: 1,
    explanation: {
      en: "The sum of the interior angles of any triangle is always 180 degrees.",
      de: "Die Summe der Innenwinkel eines jeden Dreiecks beträgt immer 180 Grad.",
      hu: "Bármely háromszög belső szögeinek összege mindig 180 fok.",
      ro: "Suma unghiurilor interioare ale oricărui triunghi este întotdeauna de 180 de grade."
    }
  },
  {
    id: "math-mcq-2",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "What is 25% of 200?",
      de: "Was sind 25% von 200?",
      hu: "Mennyi 200-nak a 25%-a?",
      ro: "Cât este 25% din 200?"
    },
    options: [
      { en: "25", de: "25", hu: "25", ro: "25" },
      { en: "40", de: "40", hu: "40", ro: "40" },
      { en: "50", de: "50", hu: "50", ro: "50" },
      { en: "100", de: "100", hu: "100", ro: "100" }
    ],
    correctIndex: 2,
    explanation: {
      en: "25% is one-fourth. 200 divided by 4 is 50.",
      de: "25% ist ein Viertel. 200 geteilt durch 4 ist 50.",
      hu: "A 25% az egynegyed rész. 200 osztva 4-gyel az 50.",
      ro: "25% este un sfert. 200 împărțit la 4 este 50."
    }
  },
  {
    id: "math-mcq-3",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "Which of these is a prime number?",
      de: "Welche dieser Zahlen ist eine Primzahl?",
      hu: "Melyik ezek közül prímszám?",
      ro: "Care dintre acestea este un număr prim?"
    },
    options: [
      { en: "9", de: "9", hu: "9", ro: "9" },
      { en: "15", de: "15", hu: "15", ro: "15" },
      { en: "21", de: "21", hu: "21", ro: "21" },
      { en: "23", de: "23", hu: "23", ro: "23" }
    ],
    correctIndex: 3,
    explanation: {
      en: "A prime number has exactly two factors: 1 and itself. 23 is only divisible by 1 and 23.",
      de: "Eine Primzahl hat genau zwei Teiler: 1 und sich selbst. 23 ist nur durch 1 und 23 teilbar.",
      hu: "A prímszámnak pontosan két osztója van: az 1 és önmaga. A 23 csak 1-gyel és 23-mal osztható.",
      ro: "Un număr prim are exact doi factori: 1 și el însuși. 23 este divizibil doar cu 1 și 23."
    }
  }
];
