export const netherlandsViewBox = "0 0 1000 1000";

export const NL_PROJECTION = {
  minLon: 3.3,
  maxLon: 7.2,
  minLat: 50.7,
  maxLat: 53.6,
  latStretch: 1.5,
  scale: 1,
  offX: 0,
  offY: 0,
};

export function projectCoordsNL(lon: number, lat: number): [number, number] {
  let pLon = lon;
  let pLat = lat;

  const p = NL_PROJECTION;
  const x = ((pLon - p.minLon) / (p.maxLon - p.minLon)) * 1000;
  // Latstretch unneeded for now but keeping it in formula or just simple projection
  const y = ((p.maxLat - pLat) / (p.maxLat - p.minLat)) * 1000;
  
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

export interface RegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const netherlandsMap: RegionPath[] = [
  { id: "NL-DR", name: {"de": "Drenthe", "hu": "Drenthe", "ro": "Drenthe", "en": "Drenthe"}, capital: "Assen", labelX: 800, labelY: 300, path: "M600,250 L800,200 L900,300 L850,450 L700,450 Z" },
  { id: "NL-FL", name: {"de": "Flevoland", "hu": "Flevoland", "ro": "Flevoland", "en": "Flevoland"}, capital: "Lelystad", labelX: 600, labelY: 450, path: "M550,400 L650,350 L700,450 L600,550 L500,500 Z" },
  { id: "NL-FR", name: {"de": "Friesland", "hu": "Frízföld", "ro": "Frizia", "en": "Friesland"}, capital: "Leeuwarden", labelX: 600, labelY: 200, path: "M500,250 L600,100 L750,150 L650,300 L550,300 Z" },
  { id: "NL-GE", name: {"de": "Gelderland", "hu": "Gelderland", "ro": "Gelderland", "en": "Gelderland"}, capital: "Arnhem", labelX: 700, labelY: 600, path: "M600,550 L750,450 L900,500 L850,700 L650,700 Z" },
  { id: "NL-GR", name: {"de": "Groningen", "hu": "Groningen", "ro": "Groningen", "en": "Groningen"}, capital: "Groningen", labelX: 850, labelY: 150, path: "M750,150 L900,100 L950,200 L850,250 L750,200 Z" },
  { id: "NL-LI", name: {"de": "Limburg", "hu": "Limburg", "ro": "Limburg", "en": "Limburg"}, capital: "Maastricht", labelX: 700, labelY: 900, path: "M650,850 L750,850 L700,1000 L600,1000 Z" },
  { id: "NL-NB", name: {"de": "Nordbrabant", "hu": "Észak-Brabant", "ro": "Brabantul de Nord", "en": "North Brabant"}, capital: "'s-Hertogenbosch", labelX: 550, labelY: 800, path: "M400,750 L650,700 L750,800 L600,850 L400,850 Z" },
  { id: "NL-NH", name: {"de": "Nordholland", "hu": "Észak-Holland", "ro": "Olanda de Nord", "en": "North Holland"}, capital: "Haarlem", labelX: 400, labelY: 400, path: "M350,300 L450,250 L500,450 L450,550 L350,500 Z" },
  { id: "NL-OV", name: {"de": "Overijssel", "hu": "Overijssel", "ro": "Overijssel", "en": "Overijssel"}, capital: "Zwolle", labelX: 800, labelY: 450, path: "M700,350 L900,350 L950,500 L800,550 L700,450 Z" },
  { id: "NL-UT", name: {"de": "Utrecht", "hu": "Utrecht", "ro": "Utrecht", "en": "Utrecht"}, capital: "Utrecht", labelX: 550, labelY: 600, path: "M500,550 L600,550 L600,650 L500,650 Z" },
  { id: "NL-ZE", name: {"de": "Zeeland", "hu": "Zeeland", "ro": "Zeelanda", "en": "Zeeland"}, capital: "Middelburg", labelX: 250, labelY: 800, path: "M200,750 L350,700 L400,800 L250,900 Z" },
  { id: "NL-ZH", name: {"de": "Südholland", "hu": "Dél-Holland", "ro": "Olanda de Sud", "en": "South Holland"}, capital: "Den Haag", labelX: 350, labelY: 650, path: "M300,550 L450,550 L500,700 L300,750 Z" }
];
