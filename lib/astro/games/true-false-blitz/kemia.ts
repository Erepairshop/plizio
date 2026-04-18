import { TrueFalseBlitzRound } from "../../../../components/astro-games/views/m2/TrueFalseBlitzView";

export const rounds: TrueFalseBlitzRound[] = [
  {
    id: "kem-tf-1",
    taskDescription: {
      en: "Chemistry basics",
      de: "Chemie Grundlagen",
      hu: "Kémia alapok",
      ro: "Bazele chimiei"
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
          hu: "A víz egy hidrogénből és oxigénből álló vegyület.",
          ro: "Apa este un compus format din hidrogen și oxigen."
        }
      },
      {
        id: "s2",
        text: {
          en: "Oxygen is necessary for combustion.",
          de: "Sauerstoff ist für die Verbrennung notwendig.",
          hu: "Az oxigén szükséges az égéshez.",
          ro: "Oxigenul este necesar pentru ardere."
        },
        isTrue: true,
        explanation: {
          en: "Combustion is a chemical reaction that requires oxygen.",
          de: "Die Verbrennung ist eine chemische Reaktion, die Sauerstoff benötigt.",
          hu: "Az égés egy kémiai reakció, amihez oxigén szükséges.",
          ro: "Arderea este o reacție chimică care necesită oxigen."
        }
      },
      {
        id: "s3",
        text: {
          en: "Protons have a negative charge.",
          de: "Protonen sind negativ geladen.",
          hu: "A protonok negatív töltésűek.",
          ro: "Protonii au sarcină negativă."
        },
        isTrue: false,
        explanation: {
          en: "Protons are positively charged.",
          de: "Protonen sind positiv geladen.",
          hu: "A protonok pozitív töltésűek.",
          ro: "Protonii sunt încărcați pozitiv."
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
          en: "Acids taste sour.",
          de: "Säuren schmecken sauer.",
          hu: "A savak savanyú ízűek.",
          ro: "Acizii au gust acru."
        },
        isTrue: true,
        explanation: {
          en: "This is a characteristic property of acids.",
          de: "Dies ist eine charakteristische Eigenschaft von Säuren.",
          hu: "Ez a savak egy jellemző tulajdonsága.",
          ro: "Aceasta este o proprietate caracteristică a acizilor."
        }
      },
      {
        id: "s2",
        text: {
          en: "Bases turn litmus paper red.",
          de: "Basen färben Lackmuspapier rot.",
          hu: "A lúgok pirosra színezik a lakmuszpapírt.",
          ro: "Bazele înroșesc hârtia de turnesol."
        },
        isTrue: false,
        explanation: {
          en: "Bases turn litmus paper blue.",
          de: "Basen färben Lackmuspapier blau.",
          hu: "A lúgok kékre színezik a lakmuszpapírt.",
          ro: "Bazele albăstresc hârtia de turnesol."
        }
      }
    ]
  }
];
