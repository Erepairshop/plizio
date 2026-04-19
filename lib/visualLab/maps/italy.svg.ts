export const italyViewBox = "0 0 1000 1200";

export const ITALY_PROJECTION = {
  minLon: 6.5,
  maxLon: 19.0,
  minLat: 35.5,
  maxLat: 47.5,
  width: 1000,
  height: 1200,
};

export function projectCoordsIT(lon: number, lat: number): [number, number] {
  const x = (lon - ITALY_PROJECTION.minLon) * (ITALY_PROJECTION.width / (ITALY_PROJECTION.maxLon - ITALY_PROJECTION.minLon));
  const y = (ITALY_PROJECTION.maxLat - lat) * (ITALY_PROJECTION.height / (ITALY_PROJECTION.maxLat - ITALY_PROJECTION.minLat));
  return [x, y];
}

export interface ItalyRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const italyMap: ItalyRegionPath[] = [
  {
    id: "IT-23",
    name: { de: "Aostatal", hu: "Valle d’Aosta", ro: "Valle d'Aosta", en: "Aosta Valley" },
    capital: "Aosta",
    labelX: projectCoordsIT(7.36, 45.73)[0],
    labelY: projectCoordsIT(7.36, 45.73)[1],
    path: "M 60,150 L 80,140 L 100,150 L 90,170 L 70,175 Z",
  },
  {
    id: "IT-21",
    name: { de: "Piemont", hu: "Piemont", ro: "Piemont", en: "Piedmont" },
    capital: "Torino",
    labelX: projectCoordsIT(7.73, 45.06)[0],
    labelY: projectCoordsIT(7.73, 45.06)[1],
    path: "M 60,175 L 90,170 L 110,180 L 120,220 L 100,250 L 70,240 L 50,210 Z",
  },
  {
    id: "IT-25",
    name: { de: "Lombardei", hu: "Lombardia", ro: "Lombardia", en: "Lombardy" },
    capital: "Milano",
    labelX: projectCoordsIT(9.86, 45.65)[0],
    labelY: projectCoordsIT(9.86, 45.65)[1],
    path: "M 110,180 L 150,160 L 180,170 L 190,210 L 160,240 L 120,220 Z",
  },
  {
    id: "IT-42",
    name: { de: "Ligurien", hu: "Liguria", ro: "Liguria", en: "Liguria" },
    capital: "Genova",
    labelX: projectCoordsIT(8.48, 44.41)[0],
    labelY: projectCoordsIT(8.48, 44.41)[1],
    path: "M 70,240 L 100,250 L 130,260 L 150,280 L 140,290 L 100,270 L 80,260 Z",
  },
  {
    id: "IT-32",
    name: { de: "Trentino-Südtirol", hu: "Trentino-Alto Adige", ro: "Trentino-Tirolul de Sud", en: "Trentino-South Tyrol" },
    capital: "Trento",
    labelX: projectCoordsIT(11.12, 46.47)[0],
    labelY: projectCoordsIT(11.12, 46.47)[1],
    path: "M 150,160 L 180,130 L 220,140 L 230,170 L 200,190 L 180,170 Z",
  },
  {
    id: "IT-34",
    name: { de: "Venetien", hu: "Veneto", ro: "Veneto", en: "Veneto" },
    capital: "Venezia",
    labelX: projectCoordsIT(12.0, 45.6)[0],
    labelY: projectCoordsIT(12.0, 45.6)[1],
    path: "M 200,190 L 230,170 L 260,180 L 280,220 L 250,250 L 210,240 L 190,210 Z",
  },
  {
    id: "IT-36",
    name: { de: "Friaul-Julisch Venetien", hu: "Friuli-Venezia Giulia", ro: "Friuli-Venezia Giulia", en: "Friuli-Venezia Giulia" },
    capital: "Trieste",
    labelX: projectCoordsIT(13.0, 46.2)[0],
    labelY: projectCoordsIT(13.0, 46.2)[1],
    path: "M 260,180 L 300,170 L 320,190 L 310,220 L 280,220 Z",
  },
  {
    id: "IT-45",
    name: { de: "Emilia-Romagna", hu: "Emilia-Romagna", ro: "Emilia-Romagna", en: "Emilia-Romagna" },
    capital: "Bologna",
    labelX: projectCoordsIT(11.0, 44.5)[0],
    labelY: projectCoordsIT(11.0, 44.5)[1],
    path: "M 130,260 L 160,240 L 210,240 L 250,250 L 280,280 L 260,310 L 200,300 L 150,280 Z",
  },
  {
    id: "IT-52",
    name: { de: "Toskana", hu: "Toszkána", ro: "Toscana", en: "Tuscany" },
    capital: "Firenze",
    labelX: projectCoordsIT(11.2, 43.4)[0],
    labelY: projectCoordsIT(11.2, 43.4)[1],
    path: "M 150,280 L 200,300 L 230,350 L 210,400 L 170,380 L 140,330 Z",
  },
  {
    id: "IT-55",
    name: { de: "Umbrien", hu: "Umbria", ro: "Umbria", en: "Umbria" },
    capital: "Perugia",
    labelX: projectCoordsIT(12.5, 42.9)[0],
    labelY: projectCoordsIT(12.5, 42.9)[1],
    path: "M 230,350 L 260,360 L 270,390 L 240,400 L 230,380 Z",
  },
  {
    id: "IT-57",
    name: { de: "Marken", hu: "Marche", ro: "Marche", en: "Marche" },
    capital: "Ancona",
    labelX: projectCoordsIT(13.2, 43.5)[0],
    labelY: projectCoordsIT(13.2, 43.5)[1],
    path: "M 260,310 L 290,320 L 310,360 L 280,380 L 260,360 Z",
  },
  {
    id: "IT-62",
    name: { de: "Latium", hu: "Lazio", ro: "Lazio", en: "Lazio" },
    capital: "Roma",
    labelX: projectCoordsIT(12.7, 41.8)[0],
    labelY: projectCoordsIT(12.7, 41.8)[1],
    path: "M 210,400 L 240,400 L 270,430 L 300,460 L 280,490 L 240,470 L 220,430 Z",
  },
  {
    id: "IT-65",
    name: { de: "Abruzzen", hu: "Abruzzo", ro: "Abruzzo", en: "Abruzzo" },
    capital: "L'Aquila",
    labelX: projectCoordsIT(14.0, 42.3)[0],
    labelY: projectCoordsIT(14.0, 42.3)[1],
    path: "M 280,380 L 310,360 L 340,380 L 350,410 L 320,430 L 270,430 Z",
  },
  {
    id: "IT-67",
    name: { de: "Molise", hu: "Molise", ro: "Molise", en: "Molise" },
    capital: "Campobasso",
    labelX: projectCoordsIT(14.5, 41.7)[0],
    labelY: projectCoordsIT(14.5, 41.7)[1],
    path: "M 320,430 L 350,410 L 370,420 L 360,440 L 330,450 Z",
  },
  {
    id: "IT-72",
    name: { de: "Kampanien", hu: "Campania", ro: "Campania", en: "Campania" },
    capital: "Napoli",
    labelX: projectCoordsIT(15.0, 41.0)[0],
    labelY: projectCoordsIT(15.0, 41.0)[1],
    path: "M 300,460 L 330,450 L 360,440 L 390,460 L 380,500 L 340,510 L 310,490 Z",
  },
  {
    id: "IT-75",
    name: { de: "Apulien", hu: "Puglia", ro: "Puglia", en: "Puglia" },
    capital: "Bari",
    labelX: projectCoordsIT(16.5, 41.0)[0],
    labelY: projectCoordsIT(16.5, 41.0)[1],
    path: "M 370,420 L 420,430 L 480,460 L 520,520 L 500,540 L 450,500 L 400,470 L 390,460 Z",
  },
  {
    id: "IT-77",
    name: { de: "Basilikata", hu: "Basilicata", ro: "Basilicata", en: "Basilicata" },
    capital: "Potenza",
    labelX: projectCoordsIT(16.0, 40.5)[0],
    labelY: projectCoordsIT(16.0, 40.5)[1],
    path: "M 380,500 L 400,470 L 450,500 L 440,530 L 410,540 Z",
  },
  {
    id: "IT-78",
    name: { de: "Kalabrien", hu: "Calabria", ro: "Calabria", en: "Calabria" },
    capital: "Catanzaro",
    labelX: projectCoordsIT(16.5, 39.0)[0],
    labelY: projectCoordsIT(16.5, 39.0)[1],
    path: "M 410,540 L 440,530 L 460,560 L 470,620 L 450,650 L 420,630 L 430,580 Z",
  },
  {
    id: "IT-82",
    name: { de: "Sizilien", hu: "Szicília", ro: "Sicilia", en: "Sicily" },
    capital: "Palermo",
    labelX: projectCoordsIT(14.0, 37.5)[0],
    labelY: projectCoordsIT(14.0, 37.5)[1],
    path: "M 300,650 L 400,640 L 430,680 L 400,750 L 350,760 L 280,720 Z",
  },
  {
    id: "IT-88",
    name: { de: "Sardinien", hu: "Szardínia", ro: "Sardegna", en: "Sardinia" },
    capital: "Cagliari",
    labelX: projectCoordsIT(9.0, 40.0)[0],
    labelY: projectCoordsIT(9.0, 40.0)[1],
    path: "M 100,450 L 150,440 L 170,480 L 160,550 L 120,560 L 90,520 Z",
  },
];
