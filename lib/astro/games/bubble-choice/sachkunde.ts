import { BubbleChoiceRound } from "../../../../components/astro-games/views/m2/BubbleChoiceView";

export const rounds: BubbleChoiceRound[] = [
  {
    id: "bc-sachkunde-1",
    taskDescription: {
      en: "Which animal is an amphibian?",
      hu: "Melyik állat kétéltű?",
      de: "Welches Tier ist eine Amphibie?",
      ro: "Care animal este un amfibian?"
    },
    bubbles: [
      { id: "b1", text: { en: "Frog", hu: "Béka", de: "Frosch", ro: "Broască" }, isCorrect: true },
      { id: "b2", text: { en: "Dog", hu: "Kutya", de: "Hund", ro: "Câine" }, isCorrect: false },
      { id: "b3", text: { en: "Eagle", hu: "Sas", de: "Adler", ro: "Vultur" }, isCorrect: false },
      { id: "b4", text: { en: "Snake", hu: "Kígyó", de: "Schlange", ro: "Șarpe" }, isCorrect: false }
    ]
  },
  {
    id: "bc-sachkunde-2",
    taskDescription: {
      en: "What do plants need for photosynthesis?",
      hu: "Mire van szüksége a növényeknek a fotoszintézishez?",
      de: "Was brauchen Pflanzen für die Fotosynthese?",
      ro: "De ce au nevoie plantele pentru fotosinteză?"
    },
    bubbles: [
      { id: "b1", text: { en: "Sunlight", hu: "Napfény", de: "Sonnenlicht", ro: "Lumina soarelui" }, isCorrect: true },
      { id: "b2", text: { en: "Moonlight", hu: "Holdfény", de: "Mondlicht", ro: "Lumina lunii" }, isCorrect: false },
      { id: "b3", text: { en: "Salt", hu: "Só", de: "Salz", ro: "Sare" }, isCorrect: false },
      { id: "b4", text: { en: "Sugar", hu: "Cukor", de: "Zucker", ro: "Zahăr" }, isCorrect: false }
    ]
  },
  {
    id: "bc-sachkunde-3",
    taskDescription: {
      en: "Which of these is a magnetic metal?",
      hu: "Melyik ezek közül mágneses fém?",
      de: "Welches davon ist ein magnetisches Metall?",
      ro: "Care dintre acestea este un metal magnetic?"
    },
    bubbles: [
      { id: "b1", text: { en: "Gold", hu: "Arany", de: "Gold", ro: "Aur" }, isCorrect: false },
      { id: "b2", text: { en: "Silver", hu: "Ezüst", de: "Silber", ro: "Argint" }, isCorrect: false },
      { id: "b3", text: { en: "Iron", hu: "Vas", de: "Eisen", ro: "Fier" }, isCorrect: true },
      { id: "b4", text: { en: "Copper", hu: "Réz", de: "Kupfer", ro: "Cupru" }, isCorrect: false }
    ]
  },
  {
    id: "bc-sachkunde-4",
    taskDescription: {
      en: "Which planet is known as the Red Planet?",
      hu: "Melyik bolygót hívják Vörös Bolygónak?",
      de: "Welcher Planet ist als der Rote Planet bekannt?",
      ro: "Care planetă este cunoscută ca Planeta Roșie?"
    },
    bubbles: [
      { id: "b1", text: { en: "Mars", hu: "Mars", de: "Mars", ro: "Marte" }, isCorrect: true },
      { id: "b2", text: { en: "Venus", hu: "Vénusz", de: "Venus", ro: "Venus" }, isCorrect: false },
      { id: "b3", text: { en: "Jupiter", hu: "Jupiter", de: "Jupiter", ro: "Jupiter" }, isCorrect: false },
      { id: "b4", text: { en: "Saturn", hu: "Szaturnusz", de: "Saturn", ro: "Saturn" }, isCorrect: false }
    ]
  }
];
