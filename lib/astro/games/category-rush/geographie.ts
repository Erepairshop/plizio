import { CategoryRushRound } from "../../../../components/astro-games/views/m2/CategoryRushView";

export const rounds: CategoryRushRound[] = [
  {
    id: "geo-cr-1",
    durationMs: 30000,
    categories: [
      { id: "c-europe", label: { en: "Europe", de: "Europa", hu: "Europa", ro: "Europa" }, edge: "top", color: "#2563EB" },
      { id: "c-asia", label: { en: "Asia", de: "Asien", hu: "Azsia", ro: "Asia" }, edge: "bottom", color: "#16A34A" },
      { id: "c-africa", label: { en: "Africa", de: "Afrika", hu: "Afrika", ro: "Africa" }, edge: "left", color: "#F97316" },
      { id: "c-sa", label: { en: "South America", de: "Sudamerika", hu: "Del-Amerika", ro: "America de Sud" }, edge: "right", color: "#A855F7" }
    ],
    items: [
      { id: "i1", label: { en: "Hungary", de: "Ungarn", hu: "Magyarorszag", ro: "Ungaria" }, correctCategoryId: "c-europe" },
      { id: "i2", label: { en: "Japan", de: "Japan", hu: "Japan", ro: "Japonia" }, correctCategoryId: "c-asia" },
      { id: "i3", label: { en: "Kenya", de: "Kenia", hu: "Kenya", ro: "Kenya" }, correctCategoryId: "c-africa" },
      { id: "i4", label: { en: "Chile", de: "Chile", hu: "Chile", ro: "Chile" }, correctCategoryId: "c-sa" },
      { id: "i5", label: { en: "Romania", de: "Rumanien", hu: "Romania", ro: "Romania" }, correctCategoryId: "c-europe" },
      { id: "i6", label: { en: "India", de: "Indien", hu: "India", ro: "India" }, correctCategoryId: "c-asia" }
    ]
  },
  {
    id: "geo-cr-2",
    durationMs: 30000,
    categories: [
      { id: "c-river", label: { en: "River", de: "Fluss", hu: "Folyo", ro: "Rau" }, edge: "top", color: "#0EA5E9" },
      { id: "c-mountain", label: { en: "Mountain", de: "Gebirge", hu: "Hegyseg", ro: "Munte" }, edge: "bottom", color: "#65A30D" },
      { id: "c-desert", label: { en: "Desert", de: "Wuste", hu: "Sivatag", ro: "Desert" }, edge: "left", color: "#D97706" },
      { id: "c-ocean", label: { en: "Ocean", de: "Ozean", hu: "Ocean", ro: "Ocean" }, edge: "right", color: "#7C3AED" }
    ],
    items: [
      { id: "i1", label: { en: "Nile", de: "Nil", hu: "Nilus", ro: "Nil" }, correctCategoryId: "c-river" },
      { id: "i2", label: { en: "Alps", de: "Alpen", hu: "Alpok", ro: "Alpi" }, correctCategoryId: "c-mountain" },
      { id: "i3", label: { en: "Sahara", de: "Sahara", hu: "Szahara", ro: "Sahara" }, correctCategoryId: "c-desert" },
      { id: "i4", label: { en: "Pacific", de: "Pazifik", hu: "Csendes-ocean", ro: "Pacific" }, correctCategoryId: "c-ocean" },
      { id: "i5", label: { en: "Danube", de: "Donau", hu: "Duna", ro: "Dunarea" }, correctCategoryId: "c-river" },
      { id: "i6", label: { en: "Andes", de: "Anden", hu: "Andok", ro: "Anzi" }, correctCategoryId: "c-mountain" }
    ]
  },
  {
    id: "geo-cr-3",
    durationMs: 30000,
    categories: [
      { id: "c-capital", label: { en: "Capital", de: "Hauptstadt", hu: "Fovaros", ro: "Capitala" }, edge: "top", color: "#DC2626" },
      { id: "c-country", label: { en: "Country", de: "Land", hu: "Orszag", ro: "Tara" }, edge: "bottom", color: "#059669" },
      { id: "c-continent", label: { en: "Continent", de: "Kontinent", hu: "Kontinens", ro: "Continent" }, edge: "left", color: "#2563EB" },
      { id: "c-climate", label: { en: "Climate", de: "Klima", hu: "Eghajlat", ro: "Clima" }, edge: "right", color: "#7C3AED" }
    ],
    items: [
      { id: "i1", label: { en: "Budapest", de: "Budapest", hu: "Budapest", ro: "Budapesta" }, correctCategoryId: "c-capital" },
      { id: "i2", label: { en: "Brazil", de: "Brasilien", hu: "Brazilia", ro: "Brazilia" }, correctCategoryId: "c-country" },
      { id: "i3", label: { en: "Africa", de: "Afrika", hu: "Afrika", ro: "Africa" }, correctCategoryId: "c-continent" },
      { id: "i4", label: { en: "Arid", de: "Trocken", hu: "Szaraz", ro: "Arid" }, correctCategoryId: "c-climate" },
      { id: "i5", label: { en: "Bucharest", de: "Bukarest", hu: "Bukarest", ro: "Bucuresti" }, correctCategoryId: "c-capital" },
      { id: "i6", label: { en: "Monsoon", de: "Monsun", hu: "Monszun", ro: "Muson" }, correctCategoryId: "c-climate" }
    ]
  }
];
