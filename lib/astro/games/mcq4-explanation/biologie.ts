import { MCQ4ExplanationRound } from "../../../../components/astro-games/views/m3/MCQ4ExplanationView";

export const rounds: MCQ4ExplanationRound[] = [
  {
    id: "mcq-bio-1",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "Which organ is responsible for pumping blood throughout the human body?",
      de: "Welches Organ ist dafür verantwortlich, Blut durch den menschlichen Körper zu pumpen?",
      hu: "Melyik szerv felelős a vér pumpálásáért az emberi testben?",
      ro: "Care organ este responsabil pentru pomparea sângelui în tot corpul uman?"
    },
    options: [
      { en: "Brain", de: "Gehirn", hu: "Agy", ro: "Creier" },
      { en: "Liver", de: "Leber", hu: "Máj", ro: "Ficat" },
      { en: "Heart", de: "Herz", hu: "Szív", ro: "Inimă" },
      { en: "Lungs", de: "Lungen", hu: "Tüdő", ro: "Plămâni" }
    ],
    correctIndex: 2,
    explanation: {
      en: "The heart is a muscular organ that pumps blood, providing oxygen and nutrients to the body.",
      de: "Das Herz ist ein muskulöses Organ, das Blut pumpt und den Körper mit Sauerstoff und Nährstoffen versorgt.",
      hu: "A szív egy izmos szerv, amely a vért pumpálja, oxigénnel és tápanyagokkal ellátva a testet.",
      ro: "Inima este un organ muscular care pompează sângele, oferind oxigen și nutrienți corpului."
    }
  },
  {
    id: "mcq-bio-2",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "What is the process by which plants make their own food?",
      de: "Wie heißt der Vorgang, durch den Pflanzen ihre eigene Nahrung herstellen?",
      hu: "Hogy hívják azt a folyamatot, amely során a növények előállítják saját táplálékukat?",
      ro: "Cum se numește procesul prin care plantele își produc propria hrană?"
    },
    options: [
      { en: "Respiration", de: "Atmung", hu: "Légzés", ro: "Respirație" },
      { en: "Photosynthesis", de: "Photosynthese", hu: "Fotoszintézis", ro: "Fotosinteză" },
      { en: "Digestion", de: "Verdauung", hu: "Emésztés", ro: "Digestie" },
      { en: "Fermentation", de: "Gärung", hu: "Erjedés", ro: "Fermentare" }
    ],
    correctIndex: 1,
    explanation: {
      en: "Photosynthesis uses sunlight, water, and carbon dioxide to produce oxygen and energy in the form of sugar.",
      de: "Die Photosynthese nutzt Sonnenlicht, Wasser und Kohlendioxid, um Sauerstoff und Energie in Form von Zucker zu produzieren.",
      hu: "A fotoszintézis napfényt, vizet és szén-dioxidot használ, hogy oxigént és energiát állítson elő cukor formájában.",
      ro: "Fotosinteza folosește lumina soarelui, apa și dioxidul de carbon pentru a produce oxigen și energie sub formă de zahăr."
    }
  },
  {
    id: "mcq-bio-3",
    taskDescription: {
      en: "Choose the correct answer.",
      de: "Wähle die richtige Antwort.",
      hu: "Válaszd ki a helyes választ.",
      ro: "Alege răspunsul corect."
    },
    question: {
      en: "Which part of the cell is known as its 'brain' or control center?",
      de: "Welcher Teil der Zelle ist als ihr 'Gehirn' oder Steuerzentrum bekannt?",
      hu: "A sejt melyik részét nevezik a 'agyának' vagy irányítóközpontjának?",
      ro: "Care parte a celulei este cunoscută ca 'creierul' sau centrul ei de control?"
    },
    options: [
      { en: "Mitochondria", de: "Mitochondrien", hu: "Mitokondrium", ro: "Mitocondrie" },
      { en: "Nucleus", de: "Zellkern", hu: "Sejtmag", ro: "Nucleu" },
      { en: "Cell Membrane", de: "Zellmembran", hu: "Sejthártya", ro: "Membrană celulară" },
      { en: "Ribosome", de: "Ribosom", hu: "Riboszóma", ro: "Ribozom" }
    ],
    correctIndex: 1,
    explanation: {
      en: "The nucleus stores the cell's DNA and coordinates its activities like growth and reproduction.",
      de: "Der Zellkern speichert die DNA der Zelle und koordiniert ihre Aktivitäten wie Wachstum und Fortpflanzung.",
      hu: "A sejtmag tárolja a sejt DNS-ét, és koordinálja a tevékenységeit, például a növekedést és a szaporodást.",
      ro: "Nucleul stochează ADN-ul celulei și îi coordonează activitățile, cum ar fi creșterea și reproducerea."
    }
  }
];