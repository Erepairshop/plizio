import { BubbleChoiceRound } from "../../../../components/astro-games/views/m2/BubbleChoiceView";

export const getBubbleChoiceSachkundePool = (): BubbleChoiceRound[] => [
  {
    id: "sk-bc-1",
    taskDescription: {
      en: "Which of these is a mammal?",
      de: "Welches davon ist ein Säugetier?",
      hu: "Melyik ezek közül egy emlős?",
      ro: "Care dintre acestea este un mamifer?"
    },
    bubbles: [
      { id: "b1", text: { en: "Shark", de: "Hai", hu: "Cápa", ro: "Rechin" }, emoji: "🦈", isCorrect: false },
      { id: "b2", text: { en: "Eagle", de: "Adler", hu: "Sas", ro: "Vultur" }, emoji: "🦅", isCorrect: false },
      { id: "b3", text: { en: "Dolphin", de: "Delfin", hu: "Delfin", ro: "Delfin" }, emoji: "🐬", isCorrect: true },
      { id: "b4", text: { en: "Snake", de: "Schlange", hu: "Kígyó", ro: "Șarpe" }, emoji: "🐍", isCorrect: false }
    ]
  },
  {
    id: "sk-bc-2",
    taskDescription: {
      en: "Which planet is closest to the Sun?",
      de: "Welcher Planet ist der Sonne am nächsten?",
      hu: "Melyik bolygó van legközelebb a Naphoz?",
      ro: "Care planetă este cea mai apropiată de Soare?"
    },
    bubbles: [
      { id: "b1", text: { en: "Venus", de: "Venus", hu: "Vénusz", ro: "Venus" }, emoji: "🪐", isCorrect: false },
      { id: "b2", text: { en: "Mercury", de: "Merkur", hu: "Merkúr", ro: "Mercur" }, emoji: "🌍", isCorrect: true },
      { id: "b3", text: { en: "Earth", de: "Erde", hu: "Föld", ro: "Pământ" }, emoji: "🌎", isCorrect: false },
      { id: "b4", text: { en: "Mars", de: "Mars", hu: "Mars", ro: "Marte" }, emoji: "🔴", isCorrect: false }
    ]
  },
  {
    id: "sk-bc-3",
    taskDescription: {
      en: "What is a source of renewable energy?",
      de: "Was ist eine erneuerbare Energiequelle?",
      hu: "Mi a megújuló energiaforrás?",
      ro: "Ce este o sursă de energie regenerabilă?"
    },
    bubbles: [
      { id: "b1", text: { en: "Coal", de: "Kohle", hu: "Szén", ro: "Cărbune" }, emoji: "🪨", isCorrect: false },
      { id: "b2", text: { en: "Oil", de: "Erdöl", hu: "Olaj", ro: "Petrol" }, emoji: "🛢️", isCorrect: false },
      { id: "b3", text: { en: "Wind", de: "Wind", hu: "Szél", ro: "Vânt" }, emoji: "💨", isCorrect: true },
      { id: "b4", text: { en: "Natural Gas", de: "Erdgas", hu: "Földgáz", ro: "Gaz Natural" }, emoji: "🔥", isCorrect: false }
    ]
  },
  {
    id: "sk-bc-4",
    taskDescription: {
      en: "Which part of the plant absorbs sunlight?",
      de: "Welcher Teil der Pflanze nimmt Sonnenlicht auf?",
      hu: "A növény melyik része szívja magába a napfényt?",
      ro: "Care parte a plantei absoarbe lumina soarelui?"
    },
    bubbles: [
      { id: "b1", text: { en: "Root", de: "Wurzel", hu: "Gyökér", ro: "Rădăcină" }, emoji: "🌱", isCorrect: false },
      { id: "b2", text: { en: "Leaf", de: "Blatt", hu: "Levél", ro: "Frunză" }, emoji: "🍃", isCorrect: true },
      { id: "b3", text: { en: "Stem", de: "Stängel", hu: "Szár", ro: "Tulpina" }, emoji: "🎋", isCorrect: false },
      { id: "b4", text: { en: "Flower", de: "Blume", hu: "Virág", ro: "Floare" }, emoji: "🌸", isCorrect: false }
    ]
  }
];
