import { SortPuzzleRound } from "../../../../components/astro-games/views/m3/SortPuzzleView";

export const rounds: SortPuzzleRound[] = [
  {
    id: "sp-phys-1",
    taskDescription: {
      en: "Sort the states of matter by increasing temperature/energy.",
      de: "Sortiere die Aggregatzustände nach zunehmender Temperatur/Energie.",
      hu: "Rendezd a halmazállapotokat növekvő hőmérséklet/energia szerint.",
      ro: "Sortează stările de agregare după temperatură/energie crescătoare."
    },
    items: [
      { id: "o1", label: { en: "Solid", de: "Feststoff", hu: "Szilárd", ro: "Solid" } },
      { id: "o2", label: { en: "Liquid", de: "Flüssigkeit", hu: "Folyadék", ro: "Lichid" } },
      { id: "o3", label: { en: "Gas", de: "Gas", hu: "Gáz", ro: "Gaz" } },
      { id: "o4", label: { en: "Plasma", de: "Plasma", hu: "Plazma", ro: "Plasmă" } }
    ],
    correctOrder: ["o1", "o2", "o3", "o4"]
  },
  {
    id: "sp-phys-2",
    taskDescription: {
      en: "Sort the electromagnetic spectrum from longest to shortest wavelength.",
      de: "Sortiere das elektromagnetische Spektrum von der längsten zur kürzesten Wellenlänge.",
      hu: "Rendezd az elektromágneses spektrumot a leghosszabbtól a legrövidebb hullámhosszig.",
      ro: "Sortează spectrul electromagnetic de la cea mai lungă la cea mai scurtă lungime de undă."
    },
    items: [
      { id: "o1", label: { en: "Radio Waves", de: "Radiowellen", hu: "Rádióhullámok", ro: "Unde radio" } },
      { id: "o2", label: { en: "Microwaves", de: "Mikrowellen", hu: "Mikrohullámok", ro: "Microunde" } },
      { id: "o3", label: { en: "Visible Light", de: "Sichtbares Licht", hu: "Látható fény", ro: "Lumină vizibilă" } },
      { id: "o4", label: { en: "X-Rays", de: "Röntgenstrahlen", hu: "Röntgensugárzás", ro: "Raze X" } }
    ],
    correctOrder: ["o1", "o2", "o3", "o4"]
  },
  {
    id: "sp-phys-3",
    taskDescription: {
      en: "Sort the planets of the solar system by distance from the sun (closest to furthest).",
      de: "Sortiere die Planeten des Sonnensystems nach der Entfernung zur Sonne (am nächsten bis am weitesten).",
      hu: "Rendezd a Naprendszer bolygóit a Naptól való távolságuk szerint (legközelebbitől a legtávolabbiig).",
      ro: "Sortează planetele sistemului solar după distanța față de soare (de la cea mai apropiată la cea mai îndepărtată)."
    },
    items: [
      { id: "o1", label: { en: "Mercury", de: "Merkur", hu: "Merkúr", ro: "Mercur" } },
      { id: "o2", label: { en: "Venus", de: "Venus", hu: "Vénusz", ro: "Venus" } },
      { id: "o3", label: { en: "Earth", de: "Erde", hu: "Föld", ro: "Pământ" } },
      { id: "o4", label: { en: "Mars", de: "Mars", hu: "Mars", ro: "Marte" } }
    ],
    correctOrder: ["o1", "o2", "o3", "o4"]
  }
];