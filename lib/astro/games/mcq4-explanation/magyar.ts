import { MCQ4ExplanationRound } from "../../../../components/astro-games/views/m3/MCQ4ExplanationView";

export const rounds: MCQ4ExplanationRound[] = [
  {
    id: "mag-mcq-1",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "What is the atomic nucleus made of?",
      de: "Woraus besteht der Atomkern?",
      hu: "Miből áll az atommag?",
      ro: "Din ce este alcătuit nucleul atomic?"
    },
    options: [
      { en: "Protons and Neutrons", de: "Protonen und Neutronen", hu: "Protonokból és neutronokból", ro: "Protoni și neutroni" },
      { en: "Electrons only", de: "Nur Elektronen", hu: "Csak elektronokból", ro: "Doar electroni" },
      { en: "Protons and Electrons", de: "Protonen und Elektronen", hu: "Protonokból és elektronokból", ro: "Protoni și electroni" },
      { en: "Water", de: "Wasser", hu: "Vízből", ro: "Apă" }
    ],
    correctIndex: 0,
    explanation: {
      en: "The nucleus contains protons and neutrons, while electrons orbit around it.",
      de: "Der Kern enthält Protonen und Neutronen, während Elektronen ihn umkreisen.",
      hu: "Az atommag protonokat és neutronokat tartalmaz, az elektronok pedig körülötte keringenek.",
      ro: "Nucleul conține protoni și neutroni, în timp ce electronii orbitează în jurul lui."
    }
  },
  {
    id: "mag-mcq-2",
    taskDescription: {
      en: "Chemistry Knowledge",
      de: "Chemie-Wissen",
      hu: "Kémiai tudás",
      ro: "Cunoștințe de chimie"
    },
    question: {
      en: "What happens during a chemical reaction?",
      de: "Was passiert bei einer chemischen Reaktion?",
      hu: "Mi történik egy kémiai reakció során?",
      ro: "Ce se întâmplă în timpul unei reacții chimice?"
    },
    options: [
      { en: "New substances form", de: "Neue Stoffe entstehen", hu: "Új anyagok keletkeznek", ro: "Se formează noi substanțe" },
      { en: "Nothing changes", de: "Nichts ändert sich", hu: "Semmi sem változik", ro: "Nimic nu se schimbă" },
      { en: "Atoms are destroyed", de: "Atome werden zerstört", hu: "Az atomok megsemmisülnek", ro: "Atomii sunt distruși" },
      { en: "It always explodes", de: "Es explodiert immer", hu: "Mindig felrobban", ro: "Explodează întotdeauna" }
    ],
    correctIndex: 0,
    explanation: {
      en: "Chemical reactions rearrange atoms to create new substances.",
      de: "Chemische Reaktionen ordnen Atome neu an, um neue Stoffe zu erzeugen.",
      hu: "A kémiai reakciók során az atomok átrendeződnek, és új anyagok jönnek létre.",
      ro: "Reacțiile chimice rearanjează atomii pentru a crea noi substanțe."
    }
  },
  {
    id: "mag-mcq-3",
    taskDescription: {
      en: "Matter States",
      de: "Aggregatzustände",
      hu: "Halmazállapotok",
      ro: "Stări de agregare"
    },
    question: {
      en: "Which state of matter has a definite volume but no definite shape?",
      de: "Welcher Aggregatzustand hat ein bestimmtes Volumen, de aber keine bestimmte Form?",
      hu: "Melyik halmazállapotnak van meghatározott térfogata, de nincs meghatározott alakja?",
      ro: "Care stare de agregare are un volum definit, dar nu are o formă definită?"
    },
    options: [
      { en: "Solid", de: "Fest", hu: "Szilárd", ro: "Solid" },
      { en: "Liquid", de: "Folyékony", hu: "Folyékony", ro: "Lichid" },
      { en: "Gas", de: "Gas", hu: "Gáz", ro: "Gaz" },
      { en: "Plasma", de: "Plasma", hu: "Plazma", ro: "Plasmă" }
    ],
    correctIndex: 1,
    explanation: {
      en: "Liquids take the shape of their container but maintain a constant volume.",
      de: "Flüssigkeiten nehmen die Form ihres Behälters an, behalten aber ein konstantes Volumen bei.",
      hu: "A folyadékok felveszik a tartály alakját, de térfogatuk állandó marad.",
      ro: "Lichidele iau forma recipientului lor, dar mențin un volum constant."
    }
  }
];
