import { SpeedMatchRound } from "../../../../components/astro-games/views/m2/SpeedMatchView";
export const rounds: SpeedMatchRound[] = [
  {
    id: "ges-sm-1",
    taskDescription: { en: "Match event to year", de: "Ereignis dem Jahr zuordnen", hu: "Esemény párosítása az évszámhoz", ro: "Asociază evenimentul cu anul" },
    pairs: [
      { id: "p1", a: { en: "1492", de: "1492", hu: "1492", ro: "1492" }, b: { en: "America", de: "Amerika", hu: "Amerika", ro: "America" }, isMatch: true },
      { id: "p2", a: { en: "1969", de: "1969", hu: "1969", ro: "1969" }, b: { en: "Moon", de: "Mond", hu: "Hold", ro: "Lună" }, isMatch: true },
      { id: "p3", a: { en: "1789", de: "1789", hu: "1789", ro: "1789" }, b: { en: "Egypt", de: "Ägypten", hu: "Egyiptom", ro: "Egipt" }, isMatch: false },
      { id: "p4", a: { en: "476", de: "476", hu: "476", ro: "476" }, b: { en: "Rome falls", de: "Rom fällt", hu: "Róma bukása", ro: "Căderea Romei" }, isMatch: true }
    ]
  }
];
