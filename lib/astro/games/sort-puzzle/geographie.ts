import { SortPuzzleRound } from "../../../../components/astro-games/views/m3/SortPuzzleView";

export const rounds: SortPuzzleRound[] = [
  {
    id: "geo-sp-1",
    taskDescription: { en: "Sort from smallest to largest landform.", de: "Sortiere von der kleinsten zur groessten Landform.", hu: "Rendezd a legkisebbtol a legnagyobbig.", ro: "Sorteaza de la cea mai mica la cea mai mare forma de relief." },
    items: [
      { id: "a1", label: { en: "Hill", de: "Huegel", hu: "Domb", ro: "Deal" } },
      { id: "a2", label: { en: "Mountain", de: "Berg", hu: "Hegy", ro: "Munte" } },
      { id: "a3", label: { en: "Mountain range", de: "Gebirge", hu: "Hegyseg", ro: "Lant muntos" } },
      { id: "a4", label: { en: "Continent", de: "Kontinent", hu: "Kontinens", ro: "Continent" } }
    ],
    correctOrder: ["a1", "a2", "a3", "a4"]
  },
  {
    id: "geo-sp-2",
    taskDescription: { en: "Sort by climate from hottest to coldest.", de: "Sortiere das Klima von heiss nach kalt.", hu: "Rendezd az eghajlatokat legmelegebbtol leghidegebbig.", ro: "Sorteaza climatele de la cel mai cald la cel mai rece." },
    items: [
      { id: "b1", label: { en: "Tropical", de: "Tropisch", hu: "Tropusi", ro: "Tropical" } },
      { id: "b2", label: { en: "Mediterranean", de: "Mittelmeer", hu: "Mediterran", ro: "Mediteranean" } },
      { id: "b3", label: { en: "Temperate", de: "Gemaessigt", hu: "Mersekelt", ro: "Temperat" } },
      { id: "b4", label: { en: "Polar", de: "Polar", hu: "Polaris", ro: "Polar" } }
    ],
    correctOrder: ["b1", "b2", "b3", "b4"]
  },
  {
    id: "geo-sp-3",
    taskDescription: { en: "Sort river path from source to mouth.", de: "Sortiere den Flussweg von der Quelle zur Muendung.", hu: "Rendezd a folyo utjat a forrastol a tolatig.", ro: "Sorteaza cursul raului de la izvor la varsare." },
    items: [
      { id: "c1", label: { en: "Source", de: "Quelle", hu: "Forras", ro: "Izvor" } },
      { id: "c2", label: { en: "Upper course", de: "Oberlauf", hu: "Felso szakasz", ro: "Curs superior" } },
      { id: "c3", label: { en: "Lower course", de: "Unterlauf", hu: "Also szakasz", ro: "Curs inferior" } },
      { id: "c4", label: { en: "Mouth", de: "Muendung", hu: "Tolat", ro: "Varsare" } }
    ],
    correctOrder: ["c1", "c2", "c3", "c4"]
  }
];
