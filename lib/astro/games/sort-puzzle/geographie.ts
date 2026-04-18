import { SortPuzzleRound } from "../../../../components/astro-games/views/m3/SortPuzzleView";

export const rounds: SortPuzzleRound[] = [
  {
    id: "geo-sp-1",
    taskDescription: { en: "Sort from smallest to largest landform.", de: "Sortiere von der kleinsten zur größten Landform.", hu: "Rendezd a legkisebbtől a legnagyobbig.", ro: "Sortează de la cea mai mică la cea mai mare formă de relief." },
    items: [
      { id: "a1", label: { en: "Hill", de: "Hügel", hu: "Domb", ro: "Deal" } },
      { id: "a2", label: { en: "Mountain", de: "Berg", hu: "Hegy", ro: "Munte" } },
      { id: "a3", label: { en: "Mountain range", de: "Gebirge", hu: "Hegység", ro: "Lanț muntos" } },
      { id: "a4", label: { en: "Continent", de: "Kontinent", hu: "Kontinens", ro: "Continent" } }
    ],
    correctOrder: ["a1", "a2", "a3", "a4"]
  },
  {
    id: "geo-sp-2",
    taskDescription: { en: "Sort by climate from hottest to coldest.", de: "Sortiere das Klima von heiß nach kalt.", hu: "Rendezd az éghajlatokat legmelegebbtől leghidegebbig.", ro: "Sortează climatele de la cel mai cald la cel mai rece." },
    items: [
      { id: "b1", label: { en: "Tropical", de: "Tropisch", hu: "Trópusi", ro: "Tropical" } },
      { id: "b2", label: { en: "Mediterranean", de: "Mittelmeer", hu: "Mediterrán", ro: "Mediteranean" } },
      { id: "b3", label: { en: "Temperate", de: "Gemäßigt", hu: "Mérsékelt", ro: "Temperat" } },
      { id: "b4", label: { en: "Polar", de: "Polar", hu: "Poláris", ro: "Polar" } }
    ],
    correctOrder: ["b1", "b2", "b3", "b4"]
  },
  {
    id: "geo-sp-3",
    taskDescription: { en: "Sort river path from source to mouth.", de: "Sortiere den Flussweg von der Quelle zur Mündung.", hu: "Rendezd a folyó útját a forrástól a torkolatig.", ro: "Sortează cursul râului de la izvor la vărsare." },
    items: [
      { id: "c1", label: { en: "Source", de: "Quelle", hu: "Forrás", ro: "Izvor" } },
      { id: "c2", label: { en: "Upper course", de: "Oberlauf", hu: "Felső szakasz", ro: "Curs superior" } },
      { id: "c3", label: { en: "Lower course", de: "Unterlauf", hu: "Alsó szakasz", ro: "Curs inferior" } },
      { id: "c4", label: { en: "Mouth", de: "Mündung", hu: "Torkolat", ro: "Vărsare" } }
    ],
    correctOrder: ["c1", "c2", "c3", "c4"]
  }
];
