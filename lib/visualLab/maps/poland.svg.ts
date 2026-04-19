export const polandViewBox = "0 0 1000 800";

export const POLAND_PROJECTION = {
  minLon: 14.0,
  maxLon: 24.5,
  minLat: 48.5,
  maxLat: 55.0,
  width: 1000,
  height: 800,
};

export function projectCoordsPL(lon: number, lat: number): [number, number] {
  const x = (lon - POLAND_PROJECTION.minLon) * (POLAND_PROJECTION.width / (POLAND_PROJECTION.maxLon - POLAND_PROJECTION.minLon));
  const y = (POLAND_PROJECTION.maxLat - lat) * (POLAND_PROJECTION.height / (POLAND_PROJECTION.maxLat - POLAND_PROJECTION.minLat));
  return [x, y];
}

export interface PolandRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const polandMap: PolandRegionPath[] = [
  {
    id: "PL-ZP",
    name: { de: "Westpommern", hu: "Nyugat-pomerániai", ro: "Pomerania Occidentală", en: "West Pomeranian" },
    capital: "Szczecin",
    labelX: projectCoordsPL(15.5, 53.5)[0],
    labelY: projectCoordsPL(15.5, 53.5)[1],
    path: "M 20,150 L 150,120 L 220,180 L 180,280 L 50,250 Z",
  },
  {
    id: "PL-PM",
    name: { de: "Pommern", hu: "Pomerániai", ro: "Pomerania", en: "Pomeranian" },
    capital: "Gdańsk",
    labelX: projectCoordsPL(18.0, 54.2)[0],
    labelY: projectCoordsPL(18.0, 54.2)[1],
    path: "M 150,120 L 350,80 L 450,150 L 400,220 L 220,180 Z",
  },
  {
    id: "PL-WN",
    name: { de: "Ermland-Masuren", hu: "Warmia-mazúriai", ro: "Warmia și Mazuria", en: "Warmian-Masurian" },
    capital: "Olsztyn",
    labelX: projectCoordsPL(21.0, 53.8)[0],
    labelY: projectCoordsPL(21.0, 53.8)[1],
    path: "M 350,80 L 600,100 L 650,200 L 500,250 L 400,220 L 450,150 Z",
  },
  {
    id: "PL-PD",
    name: { de: "Podlachien", hu: "Podlasiei", ro: "Podlasia", en: "Podlaskie" },
    capital: "Białystok",
    labelX: projectCoordsPL(23.0, 53.0)[0],
    labelY: projectCoordsPL(23.0, 53.0)[1],
    path: "M 600,100 L 850,150 L 900,350 L 750,400 L 650,200 Z",
  },
  {
    id: "PL-LB",
    name: { de: "Lebus", hu: "Lubusi", ro: "Lubusz", en: "Lubusz" },
    capital: "Gorzów Wlkp./Zielona Góra",
    labelX: projectCoordsPL(15.2, 52.2)[0],
    labelY: projectCoordsPL(15.2, 52.2)[1],
    path: "M 50,250 L 180,280 L 150,400 L 40,450 Z",
  },
  {
    id: "PL-WP",
    name: { de: "Großpolen", hu: "Nagy-lengyelországi", ro: "Polonia Mare", en: "Greater Poland" },
    capital: "Poznań",
    labelX: projectCoordsPL(17.5, 52.3)[0],
    labelY: projectCoordsPL(17.5, 52.3)[1],
    path: "M 180,280 L 350,250 L 450,350 L 400,500 L 250,480 L 150,400 Z",
  },
  {
    id: "PL-KP",
    name: { de: "Kujawien-Pommern", hu: "Kujávia-pomerániai", ro: "Cuiavia și Pomerania", en: "Kuyavian-Pomeranian" },
    capital: "Bydgoszcz/Toruń",
    labelX: projectCoordsPL(18.5, 53.0)[0],
    labelY: projectCoordsPL(18.5, 53.0)[1],
    path: "M 220,180 L 400,220 L 500,250 L 450,350 L 350,250 Z",
  },
  {
    id: "PL-MZ",
    name: { de: "Masowien", hu: "Mazóviai", ro: "Mazovia", en: "Masovian" },
    capital: "Warszawa",
    labelX: projectCoordsPL(21.0, 52.3)[0],
    labelY: projectCoordsPL(21.0, 52.3)[1],
    path: "M 500,250 L 650,200 L 750,400 L 700,550 L 550,500 L 450,350 Z",
  },
  {
    id: "PL-DS",
    name: { de: "Niederschlesien", hu: "Alsó-sziléziai", ro: "Silezia Inferioară", en: "Lower Silesian" },
    capital: "Wrocław",
    labelX: projectCoordsPL(16.5, 51.1)[0],
    labelY: projectCoordsPL(16.5, 51.1)[1],
    path: "M 40,450 L 150,400 L 250,480 L 300,600 L 100,650 Z",
  },
  {
    id: "PL-LD",
    name: { de: "Lodz", hu: "Łódźi", ro: "Łódź", en: "Łódź" },
    capital: "Łódź",
    labelX: projectCoordsPL(19.3, 51.7)[0],
    labelY: projectCoordsPL(19.3, 51.7)[1],
    path: "M 450,350 L 550,500 L 500,600 L 400,500 Z",
  },
  {
    id: "PL-LU",
    name: { de: "Lublin", hu: "Lublini", ro: "Lublin", en: "Lublin" },
    capital: "Lublin",
    labelX: projectCoordsPL(23.0, 51.2)[0],
    labelY: projectCoordsPL(23.0, 51.2)[1],
    path: "M 750,400 L 900,350 L 950,550 L 800,650 L 700,550 Z",
  },
  {
    id: "PL-OP",
    name: { de: "Oppeln", hu: "Opolei", ro: "Opole", en: "Opole" },
    capital: "Opole",
    labelX: projectCoordsPL(17.9, 50.6)[0],
    labelY: projectCoordsPL(17.9, 50.6)[1],
    path: "M 300,600 L 400,580 L 420,650 L 350,680 Z",
  },
  {
    id: "PL-SL",
    name: { de: "Schlesien", hu: "Sziléziai", ro: "Silezia", en: "Silesian" },
    capital: "Katowice",
    labelX: projectCoordsPL(19.0, 50.3)[0],
    labelY: projectCoordsPL(19.0, 50.3)[1],
    path: "M 400,580 L 500,600 L 550,700 L 450,720 L 420,650 Z",
  },
  {
    id: "PL-SK",
    name: { de: "Heiligkreuz", hu: "Szentkereszt", ro: "Sfânta Cruce", en: "Świętokrzyskie" },
    capital: "Kielce",
    labelX: projectCoordsPL(20.7, 50.7)[0],
    labelY: projectCoordsPL(20.7, 50.7)[1],
    path: "M 550,500 L 700,550 L 650,650 L 500,600 Z",
  },
  {
    id: "PL-MA",
    name: { de: "Kleinpolen", hu: "Kis-lengyelországi", ro: "Polonia Mică", en: "Lesser Poland" },
    capital: "Kraków",
    labelX: projectCoordsPL(20.0, 49.8)[0],
    labelY: projectCoordsPL(20.0, 49.8)[1],
    path: "M 500,600 L 650,650 L 600,750 L 450,720 L 550,700 Z",
  },
  {
    id: "PL-PK",
    name: { de: "Karpatenvorland", hu: "Kárpátaljai", ro: "Subcarpatia", en: "Subcarpathian" },
    capital: "Rzeszów",
    labelX: projectCoordsPL(22.2, 49.9)[0],
    labelY: projectCoordsPL(22.2, 49.9)[1],
    path: "M 700,550 L 800,650 L 850,750 L 600,750 L 650,650 Z",
  },
];
