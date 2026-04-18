import { TrueFalseBlitzRound } from "../../../../components/astro-games/views/m2/TrueFalseBlitzView";

export const rounds: TrueFalseBlitzRound[] = [
  {
    id: "round1",
    statements: [
      {
        id: "r1-s1",
        text: {
          en: "Water boils at 100 degrees Celsius at sea level.",
          hu: "A víz tengerszinten 100 Celsius fokon forr.",
          de: "Wasser kocht auf Meereshöhe bei 100 Grad Celsius.",
          ro: "Apa fierbe la 100 de grade Celsius la nivelul mării."
        },
        isTrue: true,
        explanation: {
          en: "This is a basic physical property of water.",
          hu: "Ez a víz egy alapvető fizikai tulajdonsága.",
          de: "Dies ist eine grundlegende physikalische Eigenschaft von Wasser.",
          ro: "Aceasta este o proprietate fizică de bază a apei."
        }
      },
      {
        id: "r1-s2",
        text: {
          en: "The Earth is the largest planet in our solar system.",
          hu: "A Föld a legnagyobb bolygó a Naprendszerünkben.",
          de: "Die Erde ist der größte Planet in unserem Sonnensystem.",
          ro: "Pământul este cea mai mare planetă din sistemul nostru solar."
        },
        isTrue: false,
        explanation: {
          en: "Jupiter is the largest planet in our solar system.",
          hu: "A Jupiter a legnagyobb bolygó a Naprendszerünkben.",
          de: "Jupiter ist der größte Planet in unserem Sonnensystem.",
          ro: "Jupiter este cea mai mare planetă din sistemul nostru solar."
        }
      }
    ]
  },
  {
    id: "round2",
    statements: [
      {
        id: "r2-s1",
        text: {
          en: "Dolphins are fish.",
          hu: "A delfinek halak.",
          de: "Delfine sind Fische.",
          ro: "Delfinii sunt pești."
        },
        isTrue: false,
        explanation: {
          en: "Dolphins are mammals, not fish. They breathe air and nurse their young.",
          hu: "A delfinek emlősök, nem halak. Levegőt lélegeznek be és utódaikat szoptatják.",
          de: "Delfine sind Säugetiere, keine Fische. Sie atmen Luft und säugen ihre Jungen.",
          ro: "Delfinii sunt mamifere, nu pești. Ei respiră aer și își alăptează puii."
        }
      },
      {
        id: "r2-s2",
        text: {
          en: "Photosynthesis is the process by which plants make their food.",
          hu: "A fotoszintézis az a folyamat, amellyel a növények előállítják táplálékukat.",
          de: "Fotosynthese ist der Prozess, durch den Pflanzen ihre Nahrung herstellen.",
          ro: "Fotosinteza este procesul prin care plantele își produc hrana."
        },
        isTrue: true
      }
    ]
  },
  {
    id: "round3",
    statements: [
      {
        id: "r3-s1",
        text: {
          en: "Lightning is five times hotter than the surface of the sun.",
          hu: "A villám ötször forróbb, mint a Nap felszíne.",
          de: "Ein Blitz ist fünfmal heißer als die Oberfläche der Sonne.",
          ro: "Fulgerul este de cinci ori mai fierbinte decât suprafața soarelui."
        },
        isTrue: true
      },
      {
        id: "r3-s2",
        text: {
          en: "Sound travels faster in air than in water.",
          hu: "A hang gyorsabban terjed a levegőben, mint a vízben.",
          de: "Schall breitet sich in der Luft schneller aus als im Wasser.",
          ro: "Sunetul se propagă mai repede în aer decât în apă."
        },
        isTrue: false,
        explanation: {
          en: "Sound travels about 4 times faster in water than in air.",
          hu: "A hang körülbelül négyszer gyorsabban terjed a vízben, mint a levegőben.",
          de: "Schall breitet sich im Wasser etwa viermal schneller aus als in der Luft.",
          ro: "Sunetul se propagă de aproximativ 4 ori mai repede în apă decât în aer."
        }
      }
    ]
  }
];
