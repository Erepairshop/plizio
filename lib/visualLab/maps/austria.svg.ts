export const austriaViewBox = "0 0 1000 600";

export const AT_PROJECTION = {
  minLon: 9.5,
  maxLon: 17.2,
  minLat: 46.3,
  maxLat: 49.1,
  latStretch: 1.5,
  scale: 1,
  offX: 0,
  offY: 0,
};

export function projectCoordsAT(lon: number, lat: number): [number, number] {
  let pLon = lon;
  let pLat = lat;

  const p = AT_PROJECTION;
  const x = ((pLon - p.minLon) / (p.maxLon - p.minLon)) * 1000;
  const y = ((p.maxLat - pLat) / (p.maxLat - p.minLat)) * 600;
  
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

export const austriaMap: RegionPath[] = [
  { id: "AT-1", name: {"de": "Burgenland", "hu": "Burgenland", "ro": "Burgenland", "en": "Burgenland"}, capital: "Eisenstadt", labelX: 900, labelY: 350, path: "M850,300 L950,250 L980,350 L900,450 Z" },
  { id: "AT-2", name: {"de": "Kärnten", "hu": "Karintia", "ro": "Carintia", "en": "Carinthia"}, capital: "Klagenfurt", labelX: 600, labelY: 500, path: "M500,450 L650,450 L700,550 L550,550 Z" },
  { id: "AT-3", name: {"de": "Niederösterreich", "hu": "Alsó-Ausztria", "ro": "Austria Inferioară", "en": "Lower Austria"}, capital: "St. Pölten", labelX: 750, labelY: 200, path: "M650,150 L850,150 L850,300 L650,300 Z" },
  { id: "AT-4", name: {"de": "Oberösterreich", "hu": "Felső-Ausztria", "ro": "Austria Superioară", "en": "Upper Austria"}, capital: "Linz", labelX: 550, labelY: 200, path: "M450,150 L650,150 L650,300 L450,300 Z" },
  { id: "AT-5", name: {"de": "Salzburg", "hu": "Salzburg", "ro": "Salzburg", "en": "Salzburg"}, capital: "Salzburg", labelX: 450, labelY: 350, path: "M400,250 L550,250 L550,450 L400,450 Z" },
  { id: "AT-6", name: {"de": "Steiermark", "hu": "Stájerország", "ro": "Stiria", "en": "Styria"}, capital: "Graz", labelX: 700, labelY: 400, path: "M600,300 L800,300 L800,500 L600,500 Z" },
  { id: "AT-7", name: {"de": "Tirol", "hu": "Tirol", "ro": "Tirol", "en": "Tyrol"}, capital: "Innsbruck", labelX: 250, labelY: 400, path: "M150,350 L350,350 L400,450 L200,450 Z" },
  { id: "AT-8", name: {"de": "Vorarlberg", "hu": "Vorarlberg", "ro": "Vorarlberg", "en": "Vorarlberg"}, capital: "Bregenz", labelX: 80, labelY: 400, path: "M50,350 L150,350 L150,450 L50,450 Z" },
  { id: "AT-9", name: {"de": "Wien", "hu": "Bécs", "ro": "Viena", "en": "Vienna"}, capital: "Wien", labelX: 820, labelY: 220, path: "M800,200 L840,200 L840,240 L800,240 Z" }
];
