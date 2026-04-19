export const unitedkingdomViewBox = "0 0 1000 1200";

export const UK_PROJECTION = {
  minLon: -8.5,
  maxLon: 2.0,
  minLat: 49.5,
  maxLat: 61.0,
  latStretch: 1.5,
  scale: 1,
  offX: 0,
  offY: 0,
};

export function projectCoordsUK(lon: number, lat: number): [number, number] {
  let pLon = lon;
  let pLat = lat;

  const p = UK_PROJECTION;
  const x = ((pLon - p.minLon) / (p.maxLon - p.minLon)) * 1000;
  // Use latStretch to adjust vertical scaling for better visual proportions
  const y = ((p.maxLat - pLat) / (p.maxLat - p.minLat)) * 1200;
  
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

export const unitedkingdomMap: RegionPath[] = [
  {
    id: "GB-ENG",
    name: {"de": "England", "hu": "Anglia", "ro": "Anglia", "en": "England"},
    capital: "London",
    labelX: 600, labelY: 850,
    path: "M450,550 L550,550 L600,700 L850,850 L800,1050 L400,1100 L300,1000 L450,850 L400,650 Z"
  },
  {
    id: "GB-SCT",
    name: {"de": "Schottland", "hu": "Skócia", "ro": "Scoția", "en": "Scotland"},
    capital: "Edinburgh",
    labelX: 450, labelY: 300,
    path: "M400,100 L550,150 L600,300 L550,550 L450,550 L350,450 L300,300 L400,200 Z"
  },
  {
    id: "GB-WLS",
    name: {"de": "Wales", "hu": "Wales", "ro": "Țara Galilor", "en": "Wales"},
    capital: "Cardiff",
    labelX: 350, labelY: 850,
    path: "M400,650 L450,850 L300,950 L250,800 L300,700 Z"
  },
  {
    id: "GB-NIR",
    name: {"de": "Nordirland", "hu": "Észak-Írország", "ro": "Irlanda de Nord", "en": "Northern Ireland"},
    capital: "Belfast",
    labelX: 200, labelY: 550,
    path: "M150,450 L250,450 L300,550 L200,650 L100,600 Z"
  }
];
