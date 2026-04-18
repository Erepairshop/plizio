import { TrueFalseBlitzRound } from "../../../../components/astro-games/views/m2/TrueFalseBlitzView";

export const rounds: TrueFalseBlitzRound[] = [
  {
    id: "round1",
    taskDescription: {
      en: "Plants & Environment",
      de: "Pflanzen & Umwelt",
      hu: "Növények és Környezet",
      ro: "Plante și Mediu"
    },
    statements: [
      {
        id: "r1-1",
        text: {
          en: "Plants need sunlight to grow.",
          de: "Pflanzen brauchen Sonnenlicht zum Wachsen.",
          hu: "A növényeknek napfényre van szükségük a növekedéshez.",
          ro: "Plantele au nevoie de lumina soarelui pentru a crește."
        },
        isTrue: true,
        explanation: {
          en: "Plants use sunlight for photosynthesis.",
          de: "Pflanzen nutzen Sonnenlicht für die Photosynthese.",
          hu: "A növények a napfényt fotoszintézisre használják.",
          ro: "Plantele folosesc lumina soarelui pentru fotosinteză."
        }
      },
      {
        id: "r1-2",
        text: {
          en: "All trees keep their leaves in winter.",
          de: "Alle Bäume behalten im Winter ihre Blätter.",
          hu: "Minden fa megtartja a leveleit télen.",
          ro: "Toți copacii își păstrează frunzele iarna."
        },
        isTrue: false,
        explanation: {
          en: "Deciduous trees lose their leaves in winter.",
          de: "Laubbäume verlieren im Winter ihre Blätter.",
          hu: "A lombhullató fák télen elveszítik leveleiket.",
          ro: "Copacii foioși își pierd frunzele iarna."
        }
      },
      {
        id: "r1-3",
        text: {
          en: "Mushrooms are a type of plant.",
          de: "Pilze sind eine Art von Pflanze.",
          hu: "A gombák egyfajta növények.",
          ro: "Ciupercile sunt un tip de plantă."
        },
        isTrue: false,
        explanation: {
          en: "Mushrooms belong to their own kingdom called Fungi.",
          de: "Pilze gehören zu einem eigenen Reich namens Fungi.",
          hu: "A gombák egy külön országba (Fungi) tartoznak.",
          ro: "Ciupercile aparțin propriului lor regn numit Fungi."
        }
      }
    ]
  },
  {
    id: "round2",
    taskDescription: {
      en: "Human Body",
      de: "Der menschliche Körper",
      hu: "Az emberi test",
      ro: "Corpul Uman"
    },
    statements: [
      {
        id: "r2-1",
        text: {
          en: "The heart pumps blood through the body.",
          de: "Das Herz pumpt Blut durch den Körper.",
          hu: "A szív vért pumpál a testen keresztül.",
          ro: "Inima pompează sângele prin corp."
        },
        isTrue: true,
        explanation: {
          en: "The heart acts as a pump for the circulatory system.",
          de: "Das Herz fungiert als Pumpe für den Kreislauf.",
          hu: "A szív az érrendszer pumpájaként működik.",
          ro: "Inima acționează ca o pompă pentru sistemul circulator."
        }
      },
      {
        id: "r2-2",
        text: {
          en: "Humans have three lungs.",
          de: "Menschen haben drei Lungen.",
          hu: "Az embereknek három tüdejük van.",
          ro: "Oamenii au trei plămâni."
        },
        isTrue: false,
        explanation: {
          en: "Humans naturally have two lungs.",
          de: "Menschen haben von Natur aus zwei Lungen.",
          hu: "Az embereknek természetesen két tüdejük van.",
          ro: "Oamenii au în mod natural doi plămâni."
        }
      },
      {
        id: "r2-3",
        text: {
          en: "The skeleton gives our body its shape.",
          de: "Das Skelett gibt unserem Körper seine Form.",
          hu: "A csontváz adja a testünk formáját.",
          ro: "Scheletul dă formă corpului nostru."
        },
        isTrue: true,
        explanation: {
          en: "Bones provide structure, support, and protection.",
          de: "Knochen bieten Struktur, Halt und Schutz.",
          hu: "A csontok szerkezetet, tartást és védelmet nyújtanak.",
          ro: "Oasele oferă structură, sprijin și protecție."
        }
      }
    ]
  },
  {
    id: "round3",
    taskDescription: {
      en: "Weather and Seasons",
      de: "Wetter und Jahreszeiten",
      hu: "Időjárás és Évszakok",
      ro: "Vreme și Anotimpuri"
    },
    statements: [
      {
        id: "r3-1",
        text: {
          en: "Snow is made of frozen water droplets.",
          de: "Schnee besteht aus gefrorenen Wassertropfen.",
          hu: "A hó megfagyott vízcseppekből áll.",
          ro: "Zăpada este făcută din picături de apă înghețate."
        },
        isTrue: true,
        explanation: {
          en: "Snowflakes form when water vapor turns directly into ice.",
          de: "Schneeflocken entstehen, wenn Wasserdampf direkt zu Eis wird.",
          hu: "A hópelyhek akkor képződnek, amikor a vízgőz jéggé alakul.",
          ro: "Fulgii de zăpadă se formează când vaporii de apă se transformă în gheață."
        }
      },
      {
        id: "r3-2",
        text: {
          en: "Summer is the coldest season.",
          de: "Der Sommer ist die kälteste Jahreszeit.",
          hu: "A nyár a leghidegebb évszak.",
          ro: "Vara este cel mai rece anotimp."
        },
        isTrue: false,
        explanation: {
          en: "Winter is the coldest season in most parts of the world.",
          de: "Der Winter ist in den meisten Teilen der Welt die kälteste Jahreszeit.",
          hu: "A tél a világ legtöbb részén a leghidegebb évszak.",
          ro: "Iarna este cel mai rece anotimp în majoritatea părților lumii."
        }
      }
    ]
  }
];
