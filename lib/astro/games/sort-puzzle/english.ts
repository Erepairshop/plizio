import { SortPuzzleRound } from "../../../../components/astro-games/views/m3/SortPuzzleView";

export const rounds: SortPuzzleRound[] = [
  {
    id: "eng-sp-1",
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
    id: "eng-sp-2",
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
  },
  {
    id: "eng-sp-3",
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
    id: "eng-sp-4",
    taskDescription: {
      en: "Order the steps of a typical chemical reaction.",
      de: "Ordne die Schritte einer typischen chemischen Reaktion.",
      hu: "Rendezd sorba egy jellemző kémiai reakció lépéseit.",
      ro: "Ordonează pașii unei reacții chimice tipice."
    },
    items: [
      { id: "r1", label: { en: "Reactants are mixed", de: "Edukte werden gemischt", hu: "A kiindulási anyagok összekeverednek", ro: "Reactanții sunt amestecați" } },
      { id: "r2", label: { en: "Energy is applied", de: "Energie wird zugeführt", hu: "Energia (hő) befektetése", ro: "Se aplică energie" } },
      { id: "r3", label: { en: "Chemical bonds break", de: "Chemische Bindungen brechen", hu: "A kémiai kötések felbomlanak", ro: "Legăturile chimice se rup" } },
      { id: "r4", label: { en: "New products form", de: "Neue Produkte entstehen", hu: "Új termékek képződnek", ro: "Se formează noi produse" } }
    ],
    correctOrder: ["r1", "r2", "r3", "r4"]
  }
];
