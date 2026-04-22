import { SortPuzzleRound } from "../../../../components/astro-games/views/m3/SortPuzzleView";

export const rounds: SortPuzzleRound[] = [
  {
    id: "info-sp-1",
    taskDescription: {
      en: "Sort the storage units from smallest to largest.",
      de: "Sortiere die Speichereinheiten von klein nach groß.",
      hu: "Rendezd a tárolóegységeket a legkisebbtől a legnagyobbig.",
      ro: "Sortează unitățile de stocare de la cea mai mică la cea mai mare."
    },
    items: [
      { id: "u1", label: { en: "Bit", de: "Bit", hu: "Bit", ro: "Bit" } },
      { id: "u2", label: { en: "Byte", de: "Byte", hu: "Byte", ro: "Byte" } },
      { id: "u3", label: { en: "Kilobyte (KB)", de: "Kilobyte (KB)", hu: "Kilobájt (KB)", ro: "Kilobyte (KB)" } },
      { id: "u4", label: { en: "Megabyte (MB)", de: "Megabyte (MB)", hu: "Megabájt (MB)", ro: "Megabyte (MB)" } },
      { id: "u5", label: { en: "Gigabyte (GB)", de: "Gigabyte (GB)", hu: "Gigabájt (GB)", ro: "Gigabyte (GB)" } }
    ],
    correctOrder: ["u1", "u2", "u3", "u4", "u5"]
  },
  {
    id: "info-sp-2",
    taskDescription: {
      en: "Sort the steps of program development.",
      de: "Sortiere die Schritte der Programmentwicklung.",
      hu: "Rendezd a programkészítés lépéseit.",
      ro: "Sortează pașii dezvoltării unui program."
    },
    items: [
      { id: "s1", label: { en: "Problem analysis", de: "Problemanalyse", hu: "Problémaelemzés", ro: "Analiza problemei" } },
      { id: "s2", label: { en: "Algorithm design", de: "Algorithmus-Design", hu: "Algoritmus tervezése", ro: "Proiectarea algoritmului" } },
      { id: "s3", label: { en: "Coding", de: "Kodierung", hu: "Kódolás", ro: "Codare" } },
      { id: "s4", label: { en: "Testing", de: "Testen", hu: "Tesztelés", ro: "Testare" } }
    ],
    correctOrder: ["s1", "s2", "s3", "s4"]
  }
];
