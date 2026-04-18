import { SortPuzzleRound } from "../../../../components/astro-games/views/m3/SortPuzzleView";

export const rounds: SortPuzzleRound[] = [
  {
    id: "sp-1",
    taskDescription: {
      en: "Sort the animals by size, from smallest to largest.",
      hu: "Rendezd az állatokat méret szerint, a legkisebbtől a legnagyobbig.",
      de: "Sortiere die Tiere nach Größe, vom kleinsten zum größten.",
      ro: "Sortează animalele după mărime, de la cel mai mic la cel mai mare."
    },
    items: [
      { id: "i1", label: { en: "Mouse", hu: "Egér", de: "Maus", ro: "Șoarece" } },
      { id: "i2", label: { en: "Cat", hu: "Macska", de: "Katze", ro: "Pisică" } },
      { id: "i3", label: { en: "Dog", hu: "Kutya", de: "Hund", ro: "Câine" } },
      { id: "i4", label: { en: "Horse", hu: "Ló", de: "Pferd", ro: "Cal" } },
      { id: "i5", label: { en: "Elephant", hu: "Elefánt", de: "Elefant", ro: "Elefant" } }
    ],
    correctOrder: ["i1", "i2", "i3", "i4", "i5"]
  },
  {
    id: "sp-2",
    taskDescription: {
      en: "Arrange the planets in order from the Sun.",
      hu: "Állítsd sorba a bolygókat a Naptól távolodva.",
      de: "Ordne die Planeten in der Reihenfolge von der Sonne an.",
      ro: "Aranjează planetele în ordine de la Soare."
    },
    items: [
      { id: "p1", label: { en: "Mercury", hu: "Merkúr", de: "Merkur", ro: "Mercur" } },
      { id: "p2", label: { en: "Venus", hu: "Vénusz", de: "Venus", ro: "Venus" } },
      { id: "p3", label: { en: "Earth", hu: "Föld", de: "Erde", ro: "Pământ" } },
      { id: "p4", label: { en: "Mars", hu: "Mars", de: "Mars", ro: "Marte" } }
    ],
    correctOrder: ["p1", "p2", "p3", "p4"]
  },
  {
    id: "sp-3",
    taskDescription: {
      en: "Put the historical eras in chronological order.",
      hu: "Tedd időrendi sorrendbe a történelmi korszakokat.",
      de: "Bringe die historischen Epochen in chronologische Reihenfolge.",
      ro: "Pune epocile istorice în ordine cronologică."
    },
    items: [
      { id: "e1", label: { en: "Stone Age", hu: "Kőkorszak", de: "Steinzeit", ro: "Epoca de Piatră" } },
      { id: "e2", label: { en: "Bronze Age", hu: "Bronzkor", de: "Bronzezeit", ro: "Epoca de Bronz" } },
      { id: "e3", label: { en: "Iron Age", hu: "Vaskor", de: "Eisenzeit", ro: "Epoca de Fier" } },
      { id: "e4", label: { en: "Middle Ages", hu: "Középkor", de: "Mittelalter", ro: "Evul Mediu" } }
    ],
    correctOrder: ["e1", "e2", "e3", "e4"]
  },
  {
    id: "sp-4",
    taskDescription: {
      en: "Sort the modes of transport from slowest to fastest.",
      hu: "Rendezd a közlekedési eszközöket a leglassabbtól a leggyorsabbig.",
      de: "Sortiere die Verkehrsmittel vom langsamsten zum schnellsten.",
      ro: "Sortează mijloacele de transport de la cel mai lent la cel mai rapid."
    },
    items: [
      { id: "t1", label: { en: "Walking", hu: "Gyaloglás", de: "Zufußgehen", ro: "Mers pe jos" } },
      { id: "t2", label: { en: "Bicycle", hu: "Bicikli", de: "Fahrrad", ro: "Bicicletă" } },
      { id: "t3", label: { en: "Car", hu: "Autó", de: "Auto", ro: "Mașină" } },
      { id: "t4", label: { en: "Airplane", hu: "Repülőgép", de: "Flugzeug", ro: "Avion" } }
    ],
    correctOrder: ["t1", "t2", "t3", "t4"]
  }
];
