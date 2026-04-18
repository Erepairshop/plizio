import { MCQ4ExplanationRound } from "../../../../components/astro-games/views/m3/MCQ4ExplanationView";

export const rounds: MCQ4ExplanationRound[] = [
  {
    id: "mcq-phys-1",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "Which state of matter has a definite volume but takes the shape of its container?",
      de: "Welcher Aggregatzustand hat ein bestimmtes Volumen, nimmt aber die Form seines Behälters an?",
      hu: "Melyik halmazállapotnak van határozott térfogata, de felveszi a tárolóedény alakját?",
      ro: "Ce stare de agregare are un volum definit, dar ia forma recipientului său?"
    },
    options: [
      { en: "Solid", de: "Feststoff", hu: "Szilárd", ro: "Solid" },
      { en: "Liquid", de: "Flüssigkeit", hu: "Folyadék", ro: "Lichid" },
      { en: "Gas", de: "Gas", hu: "Gáz", ro: "Gaz" },
      { en: "Plasma", de: "Plasma", hu: "Plazma", ro: "Plasmă" }
    ],
    correctIndex: 1,
    explanation: {
      en: "Liquids have a fixed volume but can flow to fit their container.",
      de: "Flüssigkeiten haben ein festes Volumen, können aber fließen, um sich ihrem Behälter anzupassen.",
      hu: "A folyadékoknak meghatározott térfogatuk van, de folyni tudnak, hogy felvegyék az edényük alakját.",
      ro: "Lichidele au un volum fix, dar pot curge pentru a se potrivi recipientului lor."
    }
  },
  {
    id: "mcq-phys-2",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "What type of lens is used in a magnifying glass?",
      de: "Welche Art von Linse wird in einer Lupe verwendet?",
      hu: "Milyen típusú lencsét használnak egy nagyítóban?",
      ro: "Ce tip de lentilă se folosește la o lupă?"
    },
    options: [
      { en: "Concave lens", de: "Konkavlinse", hu: "Homorú lencse", ro: "Lentilă concavă" },
      { en: "Convex lens", de: "Konvexlinse", hu: "Domború lencse", ro: "Lentilă convexă" },
      { en: "Plano-concave lens", de: "Plankonkavlinse", hu: "Sík-homorú lencse", ro: "Lentilă plan-concavă" },
      { en: "Cylindrical lens", de: "Zylinderlinse", hu: "Cilindrikus lencse", ro: "Lentilă cilindrică" }
    ],
    correctIndex: 1,
    explanation: {
      en: "A convex lens bulges outwards and converges light rays, making objects appear larger.",
      de: "Eine Konvexlinse wölbt sich nach außen und bündelt Lichtstrahlen, wodurch Objekte größer erscheinen.",
      hu: "A domború lencse kifelé dudorodik, és fókuszálja a fénysugarakat, így a tárgyak nagyobbnak tűnnek.",
      ro: "O lentilă convexă se bombează spre exterior și face razele de lumină să conveargă, făcând obiectele să pară mai mari."
    }
  },
  {
    id: "mcq-phys-3",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "What is the unit of electrical resistance?",
      de: "Was ist die Einheit des elektrischen Widerstands?",
      hu: "Mi az elektromos ellenállás mértékegysége?",
      ro: "Care este unitatea de rezistență electrică?"
    },
    options: [
      { en: "Ampere", de: "Ampere", hu: "Amper", ro: "Amper" },
      { en: "Volt", de: "Volt", hu: "Volt", ro: "Volt" },
      { en: "Ohm", de: "Ohm", hu: "Ohm", ro: "Ohm" },
      { en: "Watt", de: "Watt", hu: "Watt", ro: "Watt" }
    ],
    correctIndex: 2,
    explanation: {
      en: "The ohm (symbol: Ω) is the standard unit of electrical resistance, named after Georg Ohm.",
      de: "Das Ohm (Symbol: Ω) ist die Standardeinheit des elektrischen Widerstands, benannt nach Georg Ohm.",
      hu: "Az ohm (jele: Ω) az elektromos ellenállás szabványos mértékegysége, Georg Ohm után elnevezve.",
      ro: "Ohmul (simbol: Ω) este unitatea standard de rezistență electrică, numită după Georg Ohm."
    }
  }
];