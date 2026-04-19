export const spainViewBox = "0 0 1000 800";

export const SPAIN_PROJECTION = {
  minLon: -9.5,
  maxLon: 4.5,
  minLat: 35.5,
  maxLat: 44.5,
  latStretch: 1,
  scale: 1,
  offX: 0,
  offY: 0,
};

export function projectCoordsES(lon: number, lat: number): [number, number] {
  let pLon = lon;
  let pLat = lat;
  // Canary Islands bounding box: map to bottom-left inset box (X: 20-150, Y: 680-780)
  if (lon < -10 && lat < 32) {
    pLon = -9.2 + ((lon + 18) / 5) * 1.8;
    pLat = 35.8 + ((lat - 27.5) / 2.5) * 1.0;
  }
  const p = SPAIN_PROJECTION;
  const x = ((pLon - p.minLon) / (p.maxLon - p.minLon)) * 1000;
  const y = ((p.maxLat - pLat) / (p.maxLat - p.minLat)) * 800;
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

export const spainMap: RegionPath[] = [
  {
    id: "ES-GA",
    name: {"de": "Galicien", "hu": "Galícia", "ro": "Galicia", "en": "Galicia"},
    capital: "Santiago de Compostela",
    labelX: 89, labelY: 151,
    path: "M0,62 L178,62 L178,240 L0,240 Z"
  },
  {
    id: "ES-AS",
    name: {"de": "Asturien", "hu": "Asztúria", "ro": "Asturia", "en": "Asturias"},
    capital: "Oviedo",
    labelX: 267, labelY: 106,
    path: "M178,62 L357,62 L357,151 L178,151 Z"
  },
  {
    id: "ES-CB",
    name: {"de": "Kantabrien", "hu": "Kantábria", "ro": "Cantabria", "en": "Cantabria"},
    capital: "Santander",
    labelX: 410, labelY: 106,
    path: "M357,62 L464,62 L464,151 L357,151 Z"
  },
  {
    id: "ES-PV",
    name: {"de": "Baskenland", "hu": "Baszkföld", "ro": "Țara Bascilor", "en": "Basque Country"},
    capital: "Vitoria-Gasteiz",
    labelX: 535, labelY: 106,
    path: "M464,62 L607,62 L607,151 L464,151 Z"
  },
  {
    id: "ES-NC",
    name: {"de": "Navarra", "hu": "Navarra", "ro": "Navarra", "en": "Navarre"},
    capital: "Pamplona",
    labelX: 588, labelY: 186,
    path: "M535,151 L642,151 L642,222 L535,222 Z"
  },
  {
    id: "ES-RI",
    name: {"de": "La Rioja", "hu": "La Rioja", "ro": "La Rioja", "en": "La Rioja"},
    capital: "Logroño",
    labelX: 499, labelY: 186,
    path: "M464,151 L535,151 L535,222 L464,222 Z"
  },
  {
    id: "ES-AR",
    name: {"de": "Aragonien", "hu": "Aragónia", "ro": "Aragon", "en": "Aragon"},
    capital: "Zaragoza",
    labelX: 624, labelY: 311,
    path: "M642,151 L714,151 L714,400 L535,400 L535,222 L642,222 Z"
  },
  {
    id: "ES-CT",
    name: {"de": "Katalonien", "hu": "Katalónia", "ro": "Catalonia", "en": "Catalonia"},
    capital: "Barcelona",
    labelX: 821, labelY: 275,
    path: "M714,151 L928,151 L928,400 L714,400 Z"
  },
  {
    id: "ES-CL",
    name: {"de": "Kastilien und León", "hu": "Kasztília és León", "ro": "Castilia și León", "en": "Castile and León"},
    capital: "Valladolid",
    labelX: 267, labelY: 250,
    path: "M178,151 L464,151 L464,222 L535,222 L535,355 L0,355 L0,240 L178,240 Z"
  },
  {
    id: "ES-MD",
    name: {"de": "Madrid", "hu": "Madrid", "ro": "Madrid", "en": "Madrid"},
    capital: "Madrid",
    labelX: 410, labelY: 387,
    path: "M357,355 L464,355 L464,420 L357,420 Z"
  },
  {
    id: "ES-CM",
    name: {"de": "Kastilien-La Mancha", "hu": "Kasztília-La Mancha", "ro": "Castilia-La Mancha", "en": "Castilla-La Mancha"},
    capital: "Toledo",
    labelX: 392, labelY: 452,
    path: "M250,355 L357,355 L357,420 L464,420 L464,355 L535,355 L535,550 L250,550 Z"
  },
  {
    id: "ES-EX",
    name: {"de": "Extremadura", "hu": "Extremadura", "ro": "Extremadura", "en": "Extremadura"},
    capital: "Mérida",
    labelX: 125, labelY: 452,
    path: "M0,355 L250,355 L250,550 L0,550 Z"
  },
  {
    id: "ES-VC",
    name: {"de": "Valencia", "hu": "Valencia", "ro": "Valencia", "en": "Valencian Community"},
    capital: "Valencia",
    labelX: 624, labelY: 475,
    path: "M535,400 L714,400 L714,550 L535,550 Z"
  },
  {
    id: "ES-AN",
    name: {"de": "Andalusien", "hu": "Andalúzia", "ro": "Andaluzia", "en": "Andalusia"},
    capital: "Sevilla",
    labelX: 267, labelY: 650,
    path: "M0,550 L535,550 L535,750 L200,750 L200,650 L0,650 Z"
  },
  {
    id: "ES-MU",
    name: {"de": "Murcia", "hu": "Murcia", "ro": "Murcia", "en": "Murcia"},
    capital: "Murcia",
    labelX: 624, labelY: 600,
    path: "M535,550 L714,550 L714,650 L535,650 Z"
  },
  {
    id: "ES-IB",
    name: {"de": "Balearen", "hu": "Baleár-szigetek", "ro": "Insulele Baleare", "en": "Balearic Islands"},
    capital: "Palma",
    labelX: 850, labelY: 520,
    path: "M760,460 L850,460 L850,520 L760,520 Z M860,530 L930,530 L930,580 L860,580 Z"
  },
  {
    id: "ES-CN",
    name: {"de": "Kanarische Inseln", "hu": "Kanári-szigetek", "ro": "Insulele Canare", "en": "Canary Islands"},
    capital: "Las Palmas / Santa Cruz",
    labelX: 85, labelY: 730,
    path: "M20,680 L150,680 L150,780 L20,780 Z"
  }
];
