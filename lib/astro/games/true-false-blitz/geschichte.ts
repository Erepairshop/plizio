import { TrueFalseBlitzRound } from "../../../../components/astro-games/views/m2/TrueFalseBlitzView";

export const rounds: TrueFalseBlitzRound[] = [
  {
    id: "ges-tf-1",
    taskDescription: {
      en: "True or False: Ancient History",
      de: "Wahr oder Falsch: Antike Geschichte",
      hu: "Igaz vagy Hamis: Ókori történelem",
      ro: "Adevărat sau Fals: Istorie Antică"
    },
    statements: [
      {
        id: "s1",
        text: { en: "The Romans built the Colosseum.", de: "Die Römer bauten das Kolosseum.", hu: "A rómaiak építették a Colosseumot.", ro: "Romanii au construit Colosseumul." },
        isTrue: true,
        explanation: { en: "It was built during the Flavian dynasty.", de: "Es wurde während der flavischen Dynastie erbaut.", hu: "A Flavius dinasztia alatt épült.", ro: "A fost construit în timpul dinastiei Flavilor." }
      },
      {
        id: "s2",
        text: { en: "Julius Caesar was a Greek philosopher.", de: "Julius Cäsar war ein griechischer Philosoph.", hu: "Julius Caesar görög filozófus volt.", ro: "Iulius Cezar a fost un filosof grec." },
        isTrue: false,
        explanation: { en: "He was a Roman general and statesman.", de: "Er war ein römischer Feldherr und Staatsmann.", hu: "Római hadvezér és államférfi volt.", ro: "A fost un general și om de stat roman." }
      }
    ]
  }
];
