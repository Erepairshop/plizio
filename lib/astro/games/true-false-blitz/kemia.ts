import { TrueFalseBlitzRound } from "../../../../components/astro-games/views/m2/TrueFalseBlitzView";

export const rounds: TrueFalseBlitzRound[] = [
  {
    id: "kem-tf-1",
    taskDescription: {
      en: "Basic Chemistry Facts",
      de: "Grundlegende Chemie-Fakten",
      hu: "Alapvető kémiai tények",
      ro: "Fapte de bază în chimie"
    },
    statements: [
      {
        id: "s1",
        text: {
          en: "Water is an element.",
          de: "Wasser ist ein Element.",
          hu: "A víz egy elem.",
          ro: "Apa este un element."
        },
        isTrue: false,
        explanation: {
          en: "Water is a compound made of hydrogen and oxygen.",
          de: "Wasser ist eine Verbindung aus Wasserstoff und Sauerstoff.",
          hu: "A víz hidrogénből és oxigénből álló vegyület.",
          ro: "Apa este un compus format din hidrogen și oxigen."
        }
      },
      {
        id: "s2",
        text: {
          en: "Protons have a positive charge.",
          de: "Protonen haben eine positive Ladung.",
          hu: "A protonok pozitív töltésűek.",
          ro: "Protonii au o sarcină pozitivă."
        },
        isTrue: true,
        explanation: {
          en: "Protons are positively charged particles in the nucleus.",
          de: "Protonen sind positiv geladene Teilchen im Atomkern.",
          hu: "A protonok pozitív töltésű részecskék az atommagban.",
          ro: "Protonii sunt particule încărcate pozitiv din nucleu."
        }
      },
      {
        id: "s3",
        text: {
          en: "Air is a pure substance.",
          de: "Luft ist eine reine Substanz.",
          hu: "A levegő tiszta anyag.",
          ro: "Aerul este o substanță pură."
        },
        isTrue: false,
        explanation: {
          en: "Air is a mixture of different gases like nitrogen and oxygen.",
          de: "Luft ist eine Mischung aus verschiedenen Gasen wie Stickstoff und Sauerstoff.",
          hu: "A levegő különböző gázok, például nitrogén és oxigén keveréke.",
          ro: "Aerul este un amestec de diferite gaze, cum ar fi azotul și oxigenul."
        }
      }
    ]
  },
  {
    id: "kem-tf-2",
    taskDescription: {
      en: "Acids and Bases",
      de: "Säuren und Basen",
      hu: "Savak és lúgok",
      ro: "Acizi și baze"
    },
    statements: [
      {
        id: "s1",
        text: {
          en: "Lemon juice is acidic.",
          de: "Zitronensaft ist sauer.",
          hu: "A citromlé savas.",
          ro: "Sucul de lămâie este acid."
        },
        isTrue: true,
        explanation: {
          en: "Lemon juice contains citric acid.",
          de: "Zitronensaft enthält Zitronensäure.",
          hu: "A citromlé citromsavat tartalmaz.",
          ro: "Sucul de lămâie conține acid citric."
        }
      },
      {
        id: "s2",
        text: {
          en: "The pH of a neutral solution is 7.",
          de: "Der pH-Wert einer neutralen Lösung ist 7.",
          hu: "Egy semleges oldat pH-értéke 7.",
          ro: "pH-ul unei soluții neutre este 7."
        },
        isTrue: true,
        explanation: {
          en: "Pure water has a pH of exactly 7.",
          de: "Reines Wasser hat einen pH-Wert von genau 7.",
          hu: "A tiszta víz pH-értéke pontosan 7.",
          ro: "Apa pură are un pH de exact 7."
        }
      },
      {
        id: "s3",
        text: {
          en: "Bases turn red litmus paper blue.",
          de: "Basen färben rotes Lackmuspapier blau.",
          hu: "A lúgok a kék lakmuszpapírt pirosra színezik.",
          ro: "Bazele schimbă culoarea hârtiei de turnesol roșie în albastru."
        },
        isTrue: true,
        explanation: {
          en: "Indicators like litmus change color depending on pH.",
          de: "Indikatoren wie Lackmus ändern ihre Farbe je nach pH-Wert.",
          hu: "Az indikátorok, mint a lakmusz, a pH-tól függően változtatják a színüket.",
          ro: "Indicatorii precum turnesolul își schimbă culoarea în funcție de pH."
        }
      }
    ]
  },
  {
    id: "kem-tf-3",
    taskDescription: {
      en: "Periodic Table",
      de: "Periodensystem",
      hu: "Periódusos rendszer",
      ro: "Tabelul periodic"
    },
    statements: [
      {
        id: "s1",
        text: {
          en: "Gold is a metal.",
          de: "Gold ist ein Metall.",
          hu: "Az arany egy fém.",
          ro: "Aurul este un metal."
        },
        isTrue: true,
        explanation: {
          en: "Gold is a transition metal known for its luster.",
          de: "Gold ist ein Übergangsmetall, das für seinen Glanz bekannt ist.",
          hu: "Az arany egy átmenetifém, amely csillogásáról ismert.",
          ro: "Aurul este un metal de tranziție cunoscut pentru luciul său."
        }
      },
      {
        id: "s2",
        text: {
          en: "Helium is highly reactive.",
          de: "Helium ist sehr reaktionsfreudig.",
          hu: "A hélium nagyon reakcióképes.",
          ro: "Heliul este foarte reactiv."
        },
        isTrue: false,
        explanation: {
          en: "Helium is a noble gas and is very unreactive.",
          de: "Helium ist ein Edelgas und ist sehr reaktionsträge.",
          hu: "A hélium egy nemesgáz, és nagyon nem reakcióképes.",
          ro: "Heliul este un gaz nobil și este foarte puțin reactiv."
        }
      }
    ]
  },
  {
    id: "kem-tf-4",
    taskDescription: {
      en: "Matter States",
      de: "Aggregatzustände",
      hu: "Halmazállapotok",
      ro: "Stări de agregare"
    },
    statements: [
      {
        id: "s1",
        text: {
          en: "Gases have a definite volume.",
          de: "Gase haben ein bestimmtes Volumen.",
          hu: "A gázoknak meghatározott térfogatuk van.",
          ro: "Gazele au un volum definit."
        },
        isTrue: false,
        explanation: {
          en: "Gases expand to fill the container they are in.",
          de: "Gase dehnen sich aus, um den Behälter zu füllen.",
          hu: "A gázok kitágulnak, hogy kitöltsék a tartályt.",
          ro: "Gazele se extind pentru a umple recipientul în care se află."
        }
      },
      {
        id: "s2",
        text: {
          en: "Evaporation is a cooling process.",
          de: "Verdunstung ist ein Abkühlungsprozess.",
          hu: "A párolgás hűtési folyamat.",
          ro: "Evaporarea este un proces de răcire."
        },
        isTrue: true,
        explanation: {
          en: "As liquid turns to gas, it absorbs heat from its surroundings.",
          de: "Wenn Flüssigkeit zu Gas wird, absorbiert sie Wärme aus der Umgebung.",
          hu: "Amikor a folyadék gázzá alakul, hőt von el a környezetéből.",
          ro: "Pe măsură ce lichidul se transformă în gaz, acesta absoarbe căldura din mediul înconjurător."
        }
      }
    ]
  }
];
