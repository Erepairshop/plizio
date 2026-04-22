import { MCQ4ExplanationRound } from "../../../../components/astro-games/views/m3/MCQ4ExplanationView";

export const rounds: MCQ4ExplanationRound[] = [
  {
    id: "info-mcq-1",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "What does IP stand for in IP address?",
      de: "Wofür steht IP in IP-Adresse?",
      hu: "Mit jelent az IP az IP-címben?",
      ro: "Ce înseamnă IP în adresa IP?"
    },
    options: [
      { en: "Internet Protocol", de: "Internet Protocol", hu: "Internet Protocol", ro: "Internet Protocol" },
      { en: "Internal Port", de: "Interner Port", hu: "Internal Port", ro: "Port intern" },
      { en: "Intelligent Packet", de: "Intelligentes Paket", hu: "Intelligent Packet", ro: "Pachet inteligent" },
      { en: "Instant Page", de: "Sofortige Seite", hu: "Instant Page", ro: "Pagină instantanee" }
    ],
    correctIndex: 0,
    explanation: {
      en: "IP stands for Internet Protocol, which is the set of rules governing the format of data sent via the internet.",
      de: "IP steht für Internet Protocol, das Regelwerk, das das Format der über das Internet gesendeten Daten regelt.",
      hu: "Az IP az Internet Protocol rövidítése, amely az interneten keresztüli adatküldés formátumát szabályozó szabályrendszer.",
      ro: "IP înseamnă Internet Protocol, care este setul de reguli care guvernează formatul datelor trimise prin internet."
    }
  },
  {
    id: "info-mcq-2",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "Which of these is the world's largest network?",
      de: "Welches davon ist das größte Netzwerk der Welt?",
      hu: "Melyik a világ legnagyobb hálózata?",
      ro: "Care dintre acestea este cea mai mare rețea din lume?"
    },
    options: [
      { en: "LAN", de: "LAN", hu: "LAN", ro: "LAN" },
      { en: "Internet", de: "Internet", hu: "Internet", ro: "Internet" },
      { en: "Intranet", de: "Intranet", hu: "Intranet", ro: "Intranet" },
      { en: "Bluetooth", de: "Bluetooth", hu: "Bluetooth", ro: "Bluetooth" }
    ],
    correctIndex: 1,
    explanation: {
      en: "The Internet is a global system of interconnected computer networks that use the Internet protocol suite.",
      de: "Das Internet ist ein globales System miteinander verbundener Computernetzwerke, die die Internetprotokollfamilie verwenden.",
      hu: "Az internet egymással összekapcsolt számítógépes hálózatok globális rendszere, amely az internetprotokoll-csomagot használja.",
      ro: "Internetul este un sistem global de rețele de calculatoare interconectate care utilizează suita de protocoale Internet."
    }
  }
];
