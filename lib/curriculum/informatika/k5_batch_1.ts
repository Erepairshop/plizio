import { InfoCurriculum } from '../informatikaTypes';

export const K5_BATCH_1: InfoCurriculum[] = [
  {
    class: 5,
    theme: "Algoritmusok",
    tasks: Array.from({ length: 25 }, (_, i) => ({
      id: `k5-algoritmusok-mcq-${i + 1}`,
      type: 'mcq' as const,
      question: {
        hu: 'Melyik a helyes sorrend a fogmosáshoz?',
        en: 'What is the correct order for brushing your teeth?',
        de: 'Was ist die richtige Reihenfolge beim Zähneputzen?',
        ro: 'Care este ordinea corectă pentru a te spăla pe dinți?',
      },
      options: {
        hu: ['Víz, fogkrém, fogmosás, öblítés', 'Fogkrém, fogmosás, víz, öblítés', 'Öblítés, fogkrém, fogmosás, víz', 'Fogmosás, öblítés, víz, fogkrém'],
        en: ['Water, toothpaste, brushing, rinsing', 'Toothpaste, brushing, water, rinsing', 'Rinsing, toothpaste, brushing, water', 'Brushing, rinsing, water, toothpaste'],
        de: ['Wasser, Zahnpasta, Putzen, Spülen', 'Zahnpasta, Putzen, Wasser, Spülen', 'Spülen, Zahnpasta, Putzen, Wasser', 'Putzen, Spülen, Wasser, Zahnpasta'],
        ro: ['Apă, pastă de dinți, periaj, clătire', 'Pastă de dinți, periaj, apă, clătire', 'Clătire, pastă de dinți, periaj, apă', 'Periaj, clătire, apă, pastă de dinți'],
      },
      answer: 0,
    }))
  },
  {
    class: 5,
    theme: "Digitális Eszközök",
    tasks: []
  },
  {
    class: 5,
    theme: "Hálózatok",
    tasks: []
  },
  {
    class: 5,
    theme: "Adatok",
    tasks: []
  },
  {
    class: 5,
    theme: "Biztonság",
    tasks: []
  }
];
