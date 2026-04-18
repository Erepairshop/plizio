import { MCQ4ExplanationRound } from "../../../../components/astro-games/views/m3/MCQ4ExplanationView";

export const rounds: MCQ4ExplanationRound[] = [
  {
    id: "kem-mcq-1",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "What is the chemical symbol for Gold?",
      de: "Was ist das chemische Symbol für Gold?",
      hu: "Mi az arany kémiai jele?",
      ro: "Care este simbolul chimic pentru Aur?"
    },
    options: [
      { en: "Ag", de: "Ag", hu: "Ag", ro: "Ag" },
      { en: "Au", de: "Au", hu: "Au", ro: "Au" },
      { en: "Gd", de: "Gd", hu: "Gd", ro: "Gd" },
      { en: "Go", de: "Go", hu: "Go", ro: "Go" }
    ],
    correctIndex: 1,
    explanation: {
      en: "The symbol for Gold is Au, from the Latin word 'aurum'.",
      de: "Das Symbol für Gold ist Au, vom lateinischen Wort 'aurum'.",
      hu: "Az arany jele az Au, a latin 'aurum' szóból.",
      ro: "Simbolul pentru Aur este Au, de la cuvântul latin 'aurum'."
    }
  },
  {
    id: "kem-mcq-2",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "Which gas do plants absorb from the atmosphere during photosynthesis?",
      de: "Welches Gas nehmen Pflanzen während der Photosynthese aus der Atmosphäre auf?",
      hu: "Milyen gázt nyelnek el a növények a légkörből a fotoszintézis során?",
      ro: "Ce gaz absorb plantele din atmosferă în timpul fotosintezei?"
    },
    options: [
      { en: "Oxygen", de: "Sauerstoff", hu: "Oxigén", ro: "Oxigen" },
      { en: "Nitrogen", de: "Stickstoff", hu: "Nitrogén", ro: "Azot" },
      { en: "Carbon dioxide", de: "Kohlendioxid", hu: "Szén-dioxid", ro: "Dioxid de carbon" },
      { en: "Hydrogen", de: "Wasserstoff", hu: "Hidrogén", ro: "Hidrogen" }
    ],
    correctIndex: 2,
    explanation: {
      en: "Plants absorb carbon dioxide (CO2) to produce glucose and oxygen.",
      de: "Pflanzen nehmen Kohlendioxid (CO2) auf, um Glukose und Sauerstoff zu produzieren.",
      hu: "A növények szén-dioxidot (CO2) nyelnek el, hogy glükózt és oxigént termeljenek.",
      ro: "Plantele absorb dioxidul de carbon (CO2) pentru a produce glucoză și oxigen."
    }
  }
];
