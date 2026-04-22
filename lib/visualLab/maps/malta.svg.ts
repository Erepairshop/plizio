import type { POI } from "../data/poi";

export const maltaViewBox = "0 0 1000 660";

export const MT_PROJECTION = {
  minLon: 14.1,
  maxLon: 14.6,
  minLat: 35.75,
  maxLat: 36.15,
  width: 1000,
  height: 660,
};

export function projectCoordsMT(lon: number, lat: number): [number, number] {
  const x = (lon - MT_PROJECTION.minLon) * (MT_PROJECTION.width / (MT_PROJECTION.maxLon - MT_PROJECTION.minLon));
  const y = (MT_PROJECTION.maxLat - lat) * (MT_PROJECTION.height / (MT_PROJECTION.maxLat - MT_PROJECTION.minLat));
  return [x, y];
}

export interface MaltaRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

// Simplified Malta paths, since detailed regions aren't needed yet.
// Using approximate bounds and general shapes to keep the SVG simple.
export const maltaMap: MaltaRegionPath[] = [
  {
    id: "MT-MLT",
    name: { de: "Malta Insel", hu: "Málta szigete", ro: "Insula Malta", en: "Malta Island" },
    capital: "Valletta",
    labelX: 650,
    labelY: 450,
    // A simplified blob for the main island of Malta
    path: "M450,250 C550,230 650,280 750,300 C800,320 850,400 820,480 C780,550 700,600 600,620 C500,630 400,600 350,550 C300,500 280,400 320,350 C350,300 400,260 450,250 Z"
  },
  {
    id: "MT-GOZ",
    name: { de: "Gozo", hu: "Gozo", ro: "Gozo", en: "Gozo" },
    capital: "Victoria",
    labelX: 200,
    labelY: 150,
    // A simplified blob for the island of Gozo
    path: "M150,100 C200,80 280,100 320,130 C350,160 360,200 330,230 C290,260 220,250 180,220 C140,190 120,130 150,100 Z"
  },
  {
    id: "MT-COM",
    name: { de: "Comino", hu: "Comino", ro: "Comino", en: "Comino" },
    capital: "",
    labelX: 380,
    labelY: 220,
    // A simplified blob for the small island of Comino
    path: "M360,200 C390,190 410,210 400,240 C390,260 360,260 350,230 C340,210 350,200 360,200 Z"
  }
];
