import { TapMatchRound } from "../../../../components/astro-games/views/m2/TapMatchView";

export const getTapMatchSachkundePool = (): TapMatchRound[] => [
  {
    id: "sk-tm-1",
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "Eye", de: "Auge", hu: "Szem", ro: "Ochi" }, emoji: "👁️" },
      { id: "L2", label: { en: "Ear", de: "Ohr", hu: "Fül", ro: "Ureche" }, emoji: "👂" },
      { id: "L3", label: { en: "Nose", de: "Nase", hu: "Orr", ro: "Nas" }, emoji: "👃" },
      { id: "L4", label: { en: "Mouth", de: "Mund", hu: "Száj", ro: "Gură" }, emoji: "👄" }
    ],
    right: [
      { id: "R1", label: { en: "See", de: "Sehen", hu: "Látás", ro: "Vedere" }, emoji: "👀" },
      { id: "R2", label: { en: "Hear", de: "Hören", hu: "Hallás", ro: "Auz" }, emoji: "🎧" },
      { id: "R3", label: { en: "Smell", de: "Riechen", hu: "Szaglás", ro: "Miros" }, emoji: "👃" },
      { id: "R4", label: { en: "Taste", de: "Schmecken", hu: "Ízlelés", ro: "Gust" }, emoji: "👅" }
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" },
      { leftId: "L4", rightId: "R4" }
    ]
  },
  {
    id: "sk-tm-2",
    timeLimitMs: 60000,
    left: [
      { id: "L1", label: { en: "Dog", de: "Hund", hu: "Kutya", ro: "Câine" }, emoji: "🐶" },
      { id: "L2", label: { en: "Cat", de: "Katze", hu: "Macska", ro: "Pisică" }, emoji: "🐱" },
      { id: "L3", label: { en: "Bird", de: "Vogel", hu: "Madár", ro: "Pasăre" }, emoji: "🐦" },
    ],
    right: [
      { id: "R1", label: { en: "Bark", de: "Bellen", hu: "Ugat", ro: "Latră" }, emoji: "🐕" },
      { id: "R2", label: { en: "Meow", de: "Miauen", hu: "Nyávog", ro: "Miaună" }, emoji: "🐈" },
      { id: "R3", label: { en: "Chirp", de: "Zwitschern", hu: "Csiripel", ro: "Ciripește" }, emoji: "🎵" },
    ],
    correctPairs: [
      { leftId: "L1", rightId: "R1" },
      { leftId: "L2", rightId: "R2" },
      { leftId: "L3", rightId: "R3" }
    ]
  }
];
