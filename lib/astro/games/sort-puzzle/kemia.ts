import { SortPuzzleRound } from "../../../../components/astro-games/views/m3/SortPuzzleView";

export const rounds: SortPuzzleRound[] = [
  {
    id: "kem-sp-1",
    taskDescription: {
      en: "Sort these steps of a scientific experiment in order.",
      de: "Sortiere diese Schritte eines wissenschaftlichen Experiments in der richtigen Reihenfolge.",
      hu: "Rendezd sorba egy tudományos kísérlet lépéseit.",
      ro: "Ordonează acești pași ai unui experiment științific."
    },
    items: [
      { id: "s1", label: { en: "Ask a question", de: "Eine Frage stellen", hu: "Kérdés feltevése", ro: "Pune o întrebare" } },
      { id: "s2", label: { en: "Form a hypothesis", de: "Hypothese bilden", hu: "Hipotézis felállítása", ro: "Formulează o ipoteză" } },
      { id: "s3", label: { en: "Conduct experiment", de: "Experiment durchführen", hu: "Kísérlet elvégzése", ro: "Efectuează experimentul" } },
      { id: "s4", label: { en: "Analyze results", de: "Ergebnisse analysieren", hu: "Eredmények elemzése", ro: "Analizează rezultatele" } }
    ],
    correctOrder: ["s1", "s2", "s3", "s4"]
  },
  {
    id: "kem-sp-2",
    taskDescription: {
      en: "Order these particles by size, from smallest to largest.",
      de: "Ordne diese Teilchen nach Größe, von kleinsten zum größten.",
      hu: "Rendezd ezeket a részecskéket méret szerint, a legkisebbtől a legnagyobbig.",
      ro: "Ordonează aceste particule după mărime, de la cea mai mică la cea mai mare."
    },
    items: [
      { id: "p1", label: { en: "Electron", de: "Elektron", hu: "Elektron", ro: "Electron" } },
      { id: "p2", label: { en: "Proton", de: "Proton", hu: "Proton", ro: "Proton" } },
      { id: "p3", label: { en: "Atom", de: "Atom", hu: "Atom", ro: "Atom" } },
      { id: "p4", label: { en: "Molecule", de: "Molekül", hu: "Molekula", ro: "Moleculă" } }
    ],
    correctOrder: ["p1", "p2", "p3", "p4"]
  }
];
