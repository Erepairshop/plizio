import { SortPuzzleRound } from "../../../../components/astro-games/views/m3/SortPuzzleView";

export const rounds: SortPuzzleRound[] = [
  {
    id: "sp-env-1",
    taskDescription: {
      en: "Sort the layers of the Earth from outermost to innermost.",
      de: "Sortiere die Schichten der Erde von außen nach innen.",
      hu: "Rendezd a Föld rétegeit kívülről befelé.",
      ro: "Sortează straturile Pământului de la cel mai exterior la cel mai interior."
    },
    items: [
      { id: "c1", label: { en: "Crust", de: "Erdkruste", hu: "Földkéreg", ro: "Crustă" } },
      { id: "c2", label: { en: "Mantle", de: "Erdmantel", hu: "Köpeny", ro: "Manta" } },
      { id: "c3", label: { en: "Outer Core", de: "Äußerer Erdkern", hu: "Külső mag", ro: "Miez exterior" } },
      { id: "c4", label: { en: "Inner Core", de: "Innerer Erdkern", hu: "Belső mag", ro: "Miez interior" } }
    ],
    correctOrder: ["c1", "c2", "c3", "c4"]
  },
  {
    id: "sp-env-2",
    taskDescription: {
      en: "Sort these animals by their place in a food chain, starting with the producer.",
      de: "Sortiere diese Tiere nach ihrem Platz in einer Nahrungskette, beginnend mit dem Produzenten.",
      hu: "Rendezd ezeket az állatokat a táplálékláncban elfoglalt helyük szerint, a termelővel kezdve.",
      ro: "Sortează aceste animale după locul lor într-un lanț trofic, începând cu producătorul."
    },
    items: [
      { id: "f1", label: { en: "Grass", de: "Gras", hu: "Fű", ro: "Iarbă" } },
      { id: "f2", label: { en: "Grasshopper", de: "Heuschrecke", hu: "Szöcske", ro: "Lăcustă" } },
      { id: "f3", label: { en: "Frog", de: "Frosch", hu: "Béka", ro: "Broască" } },
      { id: "f4", label: { en: "Snake", de: "Schlange", hu: "Kígyó", ro: "Șarpe" } },
      { id: "f5", label: { en: "Eagle", de: "Adler", hu: "Sas", ro: "Vultur" } }
    ],
    correctOrder: ["f1", "f2", "f3", "f4", "f5"]
  },
  {
    id: "sp-env-3",
    taskDescription: {
      en: "Sort the steps of the water cycle, starting from evaporation.",
      de: "Sortiere die Schritte des Wasserkreislaufs, beginnend mit der Verdunstung.",
      hu: "Rendezd a vízkörforgás lépéseit, a párolgástól kezdve.",
      ro: "Sortează pașii ciclului apei, începând de la evaporare."
    },
    items: [
      { id: "w1", label: { en: "Evaporation", de: "Verdunstung", hu: "Párolgás", ro: "Evaporare" } },
      { id: "w2", label: { en: "Condensation", de: "Kondensation", hu: "Lecsapódás", ro: "Condensare" } },
      { id: "w3", label: { en: "Precipitation", de: "Niederschlag", hu: "Csapadék", ro: "Precipitații" } },
      { id: "w4", label: { en: "Collection", de: "Sammlung", hu: "Összegyűlés", ro: "Colectare" } }
    ],
    correctOrder: ["w1", "w2", "w3", "w4"]
  }
];
