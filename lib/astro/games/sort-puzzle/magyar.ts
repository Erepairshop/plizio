import { SortPuzzleRound } from "../../../../components/astro-games/views/m3/SortPuzzleView";

export const rounds: SortPuzzleRound[] = [
  {
    id: "mag-sp-1",
    taskDescription: {
      en: "Sort these elements by their atomic number (1 to 4).",
      de: "Sortiere diese Elemente nach ihrer Ordnungszahl (1 bis 4).",
      hu: "Rendezd sorba ezeket az elemeket rendszámuk szerint (1-től 4-ig).",
      ro: "Ordonează aceste elemente după numărul lor atomic (de la 1 la 4)."
    },
    items: [
      { id: "e1", label: { en: "Hydrogen (H)", de: "Wasserstoff (H)", hu: "Hidrogén (H)", ro: "Hidrogen (H)" } },
      { id: "e2", label: { en: "Helium (He)", de: "Helium (He)", hu: "Hélium (He)", ro: "Heliu (He)" } },
      { id: "e3", label: { en: "Lithium (Li)", de: "Lithium (Li)", hu: "Lítium (Li)", ro: "Litiu (Li)" } },
      { id: "e4", label: { en: "Beryllium (Be)", de: "Beryllium (Be)", hu: "Berillium (Be)", ro: "Beriliu (Be)" } }
    ],
    correctOrder: ["e1", "e2", "e3", "e4"]
  },
  {
    id: "mag-sp-2",
    taskDescription: {
      en: "Order these particles by size, from smallest to largest.",
      de: "Ordne diese Teilchen nach Größe, von kleinsten zum größten.",
      hu: "Rendezd ezeket a részecskéket méret szerint, a legkisebbtől a legnagyobbig.",
      ro: "Ordonează aceste particule după mărime, de la cea mai mică la cea mai mare."
    },
    items: [
      { id: "i1", label: { en: "Electron", de: "Elektron", hu: "Elektron", ro: "Electron" } },
      { id: "i2", label: { en: "Proton", de: "Proton", hu: "Proton", ro: "Proton" } },
      { id: "i3", label: { en: "Atom", de: "Atom", hu: "Atom", ro: "Atom" } },
      { id: "i4", label: { en: "Molecule", de: "Molekül", hu: "Molekula", ro: "Moleculă" } }
    ],
    correctOrder: ["i1", "i2", "i3", "i4"]
  },
  {
    id: "mag-sp-3",
    taskDescription: {
      en: "Sort these steps of a scientific experiment in order.",
      de: "Sortiere diese Schritte eines wissenschaftlichen Experiments in der richtigen Reihenfolge.",
      hu: "Rendezd sorba egy tudományos kísérlet lépéseit.",
      ro: "Ordonează acești pași ai unui experiment științific."
    },
    items: [
      { id: "s1", label: { en: "Observation", de: "Beobachtung", hu: "Megfigyelés", ro: "Observație" } },
      { id: "s2", label: { en: "Hypothesis", de: "Hypothese", hu: "Hipotézis", ro: "Ipoteză" } },
      { id: "s3", label: { en: "Experiment", de: "Experiment", hu: "Kísérlet", ro: "Experiment" } },
      { id: "s4", label: { en: "Conclusion", de: "Schlussfolgerung", hu: "Következtetés", ro: "Concluzie" } }
    ],
    correctOrder: ["s1", "s2", "s3", "s4"]
  }
];
