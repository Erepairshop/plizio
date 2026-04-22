import { InfoCurriculum } from '../informatikaTypes';

export const K5_BATCH_4: InfoCurriculum[] = [
  {
    class: 5,
    theme: "Grafika",
    tasks: [
      ...Array.from({ length: 25 }, (_, i) => ({
        type: 'mcq' as const,
        correct: i % 4,
        options: [
          `Válasz ${i * 4 + 1}`,
          `Válasz ${i * 4 + 2}`,
          `Válasz ${i * 4 + 3}`,
          `Válasz ${i * 4 + 4}`,
        ],
        question: `Melyik a kakukktojás a felsoroltak közül? (${i + 1})`,
      })),
      ...Array.from({ length: 10 }, (_, i) => ({
        type: 'calculation' as const,
        correct: (i + 1) * 100,
        question: `Egy kép 800x600 pixeles. Hány pixelből áll összesen? (${i + 1})`,
      })),
    ]
  },
  {
    class: 5,
    theme: "Web",
    tasks: []
  },
  {
    class: 5,
    theme: "Robotika",
    tasks: []
  }
];
