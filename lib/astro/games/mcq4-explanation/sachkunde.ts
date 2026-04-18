import { MCQ4ExplanationRound } from "../../../../components/astro-games/views/m3/MCQ4ExplanationView";

export const rounds: MCQ4ExplanationRound[] = [
  {
    id: "mcq-1",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    prompt: {
      en: "What do plants need to produce oxygen through photosynthesis?",
      de: "Was brauchen Pflanzen, um durch Photosynthese Sauerstoff zu produzieren?",
      hu: "Mire van szükségük a növényeknek az oxigéntermeléshez a fotoszintézis során?",
      ro: "De ce au nevoie plantele pentru a produce oxigen prin fotosinteză?"
    },
    answerOptions: [
      { id: "a", label: { en: "Sunlight, Water, Carbon dioxide", de: "Sonnenlicht, Wasser, Kohlendioxid", hu: "Napfény, Víz, Szén-dioxid", ro: "Lumina soarelui, Apă, Dioxid de carbon" } },
      { id: "b", label: { en: "Soil, Wind, Oxygen", de: "Erde, Wind, Sauerstoff", hu: "Talaj, Szél, Oxigén", ro: "Sol, Vânt, Oxigen" } },
      { id: "c", label: { en: "Fire, Water, Nitrogen", de: "Feuer, Wasser, Stickstoff", hu: "Tűz, Víz, Nitrogén", ro: "Foc, Apă, Azot" } },
      { id: "d", label: { en: "Moonlight, Soil, Sugar", de: "Mondlicht, Erde, Zucker", hu: "Holdfény, Talaj, Cukor", ro: "Lumina lunii, Sol, Zahăr" } }
    ],
    correctAnswerId: "a",
    explanation: {
      en: "Plants use the energy from sunlight to turn water and carbon dioxide into glucose and oxygen.",
      de: "Pflanzen nutzen die Energie des Sonnenlichts, um Wasser und Kohlendioxid in Glukose und Sauerstoff umzuwandeln.",
      hu: "A növények a napfény energiáját használják fel arra, hogy a vizet és a szén-dioxidot glükózzá és oxigénné alakítsák.",
      ro: "Plantele folosesc energia de la lumina soarelui pentru a transforma apa și dioxidul de carbon în glucoză și oxigen."
    }
  },
  {
    id: "mcq-2",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    prompt: {
      en: "Which part of a plant is primarily responsible for absorbing water?",
      de: "Welcher Teil einer Pflanze ist hauptsächlich für die Wasseraufnahme verantwortlich?",
      hu: "A növény melyik része felelős elsősorban a víz felszívásáért?",
      ro: "Care parte a unei plante este în principal responsabilă pentru absorbția apei?"
    },
    answerOptions: [
      { id: "a", label: { en: "Leaves", de: "Blätter", hu: "Levelek", ro: "Frunze" } },
      { id: "b", label: { en: "Stem", de: "Stamm", hu: "Szár", ro: "Tulpina" } },
      { id: "c", label: { en: "Roots", de: "Wurzeln", hu: "Gyökerek", ro: "Rădăcini" } },
      { id: "d", label: { en: "Flowers", de: "Blüten", hu: "Virágok", ro: "Flori" } }
    ],
    correctAnswerId: "c",
    explanation: {
      en: "The roots anchor the plant in the soil and absorb water and nutrients necessary for growth.",
      de: "Die Wurzeln verankern die Pflanze im Boden und nehmen Wasser und Nährstoffe auf, die für das Wachstum notwendig sind.",
      hu: "A gyökerek rögzítik a növényt a talajban, és felszívják a növekedéshez szükséges vizet és tápanyagokat.",
      ro: "Rădăcinile ancorează planta în sol și absorb apa și nutrienții necesari pentru creștere."
    }
  },
  {
    id: "mcq-3",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    prompt: {
      en: "What happens to water when it boils?",
      de: "Was passiert mit Wasser, wenn es kocht?",
      hu: "Mi történik a vízzel, amikor felforr?",
      ro: "Ce se întâmplă cu apa când fierbe?"
    },
    answerOptions: [
      { id: "a", label: { en: "It turns into ice.", de: "Es wird zu Eis.", hu: "Jéggé válik.", ro: "Se transformă în gheață." } },
      { id: "b", label: { en: "It turns into water vapor (gas).", de: "Es wird zu Wasserdampf (Gas).", hu: "Vízgőzzé (gázzá) alakul.", ro: "Se transformă în vapori de apă (gaz)." } },
      { id: "c", label: { en: "It becomes heavier.", de: "Es wird schwerer.", hu: "Nehezebb lesz.", ro: "Devine mai grea." } },
      { id: "d", label: { en: "It turns into salt.", de: "Es wird zu Salz.", hu: "Sóvá változik.", ro: "Se transformă în sare." } }
    ],
    correctAnswerId: "b",
    explanation: {
      en: "Boiling causes liquid water to evaporate and change its state into a gas called water vapor.",
      de: "Durch das Kochen verdampft flüssiges Wasser und ändert seinen Aggregatzustand in ein Gas namens Wasserdampf.",
      hu: "A forrás hatására a folyékony víz elpárolog, és halmazállapotát gázra, úgynevezett vízgőzre változtatja.",
      ro: "Fierberea face ca apa lichidă să se evapore și să-și schimbe starea într-un gaz numit vapori de apă."
    }
  },
  {
    id: "mcq-4",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    prompt: {
      en: "Which animal is a mammal?",
      de: "Welches Tier ist ein Säugetier?",
      hu: "Melyik állat emlős?",
      ro: "Care animal este un mamifer?"
    },
    answerOptions: [
      { id: "a", label: { en: "Shark", de: "Hai", hu: "Cápa", ro: "Rechin" } },
      { id: "b", label: { en: "Frog", de: "Frosch", hu: "Béka", ro: "Broască" } },
      { id: "c", label: { en: "Dolphin", de: "Delfin", hu: "Delfin", ro: "Delfin" } },
      { id: "d", label: { en: "Penguin", de: "Pinguin", hu: "Pingvin", ro: "Pinguin" } }
    ],
    correctAnswerId: "c",
    explanation: {
      en: "Even though dolphins live in the ocean, they are mammals because they breathe air, have hair (at birth), and produce milk for their young.",
      de: "Obwohl Delfine im Ozean leben, sind sie Säugetiere, weil sie Luft atmen, (bei der Geburt) Haare haben und Milch für ihre Jungen produzieren.",
      hu: "Bár a delfinek az óceánban élnek, emlősök, mert levegőt lélegeznek be, szőrzetük van (születéskor), és tejjel táplálják kicsinyeiket.",
      ro: "Chiar dacă delfinii trăiesc în ocean, ei sunt mamifere pentru că respiră aer, au păr (la naștere) și produc lapte pentru puii lor."
    }
  }
];
