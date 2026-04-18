import { MemoryPairsRound } from "../../../../components/astro-games/views/m2/MemoryPairsView";

export const rounds: MemoryPairsRound[] = [
  {
    id: "sk-mp-1",
    taskDescription: {
      en: "Match the animals with their pairs!",
      de: "Finde die passenden Tierpaare!",
      hu: "Keresd meg az állatok párjait!",
      ro: "Găsește perechile de animale!"
    },
    pairs: [
      { id: "p1", content: { en: "Dog", de: "Hund", hu: "Kutya", ro: "Câine" }, emoji: "🐶" },
      { id: "p2", content: { en: "Cat", de: "Katze", hu: "Macska", ro: "Pisică" }, emoji: "🐱" },
      { id: "p3", content: { en: "Bird", de: "Vogel", hu: "Madár", ro: "Pasăre" }, emoji: "🐦" },
      { id: "p4", content: { en: "Fish", de: "Fisch", hu: "Hal", ro: "Pește" }, emoji: "🐟" },
      { id: "p5", content: { en: "Rabbit", de: "Hase", hu: "Nyúl", ro: "Iepure" }, emoji: "🐰" },
      { id: "p6", content: { en: "Turtle", de: "Schildkröte", hu: "Teknős", ro: "Broască țestoasă" }, emoji: "🐢" }
    ]
  },
  {
    id: "sk-mp-2",
    taskDescription: {
      en: "Match the natural elements!",
      de: "Finde die passenden Naturelemente!",
      hu: "Keresd meg a természeti elemek párjait!",
      ro: "Găsește perechile de elemente din natură!"
    },
    pairs: [
      { id: "p1", content: { en: "Sun", de: "Sonne", hu: "Nap", ro: "Soare" }, emoji: "☀️" },
      { id: "p2", content: { en: "Moon", de: "Mond", hu: "Hold", ro: "Lună" }, emoji: "🌙" },
      { id: "p3", content: { en: "Tree", de: "Baum", hu: "Fa", ro: "Copac" }, emoji: "🌳" },
      { id: "p4", content: { en: "Flower", de: "Blume", hu: "Virág", ro: "Floare" }, emoji: "🌸" },
      { id: "p5", content: { en: "Water", de: "Wasser", hu: "Víz", ro: "Apă" }, emoji: "💧" },
      { id: "p6", content: { en: "Fire", de: "Feuer", hu: "Tűz", ro: "Foc" }, emoji: "🔥" }
    ]
  },
  {
    id: "sk-mp-3",
    taskDescription: {
      en: "Match the body parts!",
      de: "Finde die passenden Körperteile!",
      hu: "Keresd meg a testrészek párjait!",
      ro: "Găsește perechile de părți ale corpului!"
    },
    pairs: [
      { id: "p1", content: { en: "Eye", de: "Auge", hu: "Szem", ro: "Ochi" }, emoji: "👁️" },
      { id: "p2", content: { en: "Ear", de: "Ohr", hu: "Fül", ro: "Ureche" }, emoji: "👂" },
      { id: "p3", content: { en: "Nose", de: "Nase", hu: "Orr", ro: "Nas" }, emoji: "👃" },
      { id: "p4", content: { en: "Mouth", de: "Mund", hu: "Száj", ro: "Gură" }, emoji: "👄" },
      { id: "p5", content: { en: "Hand", de: "Hand", hu: "Kéz", ro: "Mână" }, emoji: "🖐️" },
      { id: "p6", content: { en: "Foot", de: "Fuß", hu: "Láb", ro: "Picior" }, emoji: "🦶" }
    ]
  }
];
