// Simplified Deutschland Bundesland outlines — placeholder until Gemini delivers real GeoJSON-derived paths.
// viewBox: "0 0 400 520" — approximate geographic positioning, NOT geographically accurate.

export interface BundeslandPath {
  id: string;       // ISO code: "DE-BY", etc.
  name: { de: string; hu: string; ro: string; en: string };
  capital: { de: string; hu: string; ro: string; en: string };
  d: string;        // SVG path
  // approximate label position
  labelX: number;
  labelY: number;
}

export const DEUTSCHLAND_BUNDESLANDER: BundeslandPath[] = [
  {
    id: "DE-SH",
    name: { de: "Schleswig-Holstein", hu: "Schleswig-Holstein", ro: "Schleswig-Holstein", en: "Schleswig-Holstein" },
    capital: { de: "Kiel", hu: "Kiel", ro: "Kiel", en: "Kiel" },
    d: "M150,30 L240,25 L260,55 L240,80 L210,90 L170,85 L155,60 Z",
    labelX: 200, labelY: 55,
  },
  {
    id: "DE-MV",
    name: { de: "Mecklenburg-Vorpommern", hu: "Mecklenburg-Elő-Pomeránia", ro: "Mecklenburg-Pomerania", en: "Mecklenburg-Vorpommern" },
    capital: { de: "Schwerin", hu: "Schwerin", ro: "Schwerin", en: "Schwerin" },
    d: "M240,80 L320,75 L340,110 L300,135 L260,130 L240,105 Z",
    labelX: 290, labelY: 105,
  },
  {
    id: "DE-HH",
    name: { de: "Hamburg", hu: "Hamburg", ro: "Hamburg", en: "Hamburg" },
    capital: { de: "Hamburg", hu: "Hamburg", ro: "Hamburg", en: "Hamburg" },
    d: "M192,86 L210,84 L213,98 L195,100 Z",
    labelX: 202, labelY: 95,
  },
  {
    id: "DE-HB",
    name: { de: "Bremen", hu: "Bréma", ro: "Bremen", en: "Bremen" },
    capital: { de: "Bremen", hu: "Bréma", ro: "Bremen", en: "Bremen" },
    d: "M152,108 L168,106 L171,120 L154,122 Z",
    labelX: 162, labelY: 116,
  },
  {
    id: "DE-NI",
    name: { de: "Niedersachsen", hu: "Alsó-Szászország", ro: "Saxonia Inferioară", en: "Lower Saxony" },
    capital: { de: "Hannover", hu: "Hannover", ro: "Hannover", en: "Hannover" },
    d: "M120,90 L190,86 L195,100 L213,98 L240,105 L260,130 L255,170 L210,180 L170,175 L130,160 L110,130 Z",
    labelX: 180, labelY: 140,
  },
  {
    id: "DE-BB",
    name: { de: "Brandenburg", hu: "Brandenburg", ro: "Brandenburg", en: "Brandenburg" },
    capital: { de: "Potsdam", hu: "Potsdam", ro: "Potsdam", en: "Potsdam" },
    d: "M260,130 L320,135 L335,180 L320,220 L280,225 L255,205 L255,170 Z",
    labelX: 290, labelY: 180,
  },
  {
    id: "DE-BE",
    name: { de: "Berlin", hu: "Berlin", ro: "Berlin", en: "Berlin" },
    capital: { de: "Berlin", hu: "Berlin", ro: "Berlin", en: "Berlin" },
    d: "M295,178 L308,176 L310,190 L297,192 Z",
    labelX: 303, labelY: 186,
  },
  {
    id: "DE-ST",
    name: { de: "Sachsen-Anhalt", hu: "Szász-Anhalt", ro: "Saxonia-Anhalt", en: "Saxony-Anhalt" },
    capital: { de: "Magdeburg", hu: "Magdeburg", ro: "Magdeburg", en: "Magdeburg" },
    d: "M210,180 L255,170 L255,205 L240,225 L215,220 L205,200 Z",
    labelX: 230, labelY: 200,
  },
  {
    id: "DE-NW",
    name: { de: "Nordrhein-Westfalen", hu: "Észak-Rajna-Vesztfália", ro: "Renania de Nord-Westfalia", en: "North Rhine-Westphalia" },
    capital: { de: "Düsseldorf", hu: "Düsseldorf", ro: "Düsseldorf", en: "Düsseldorf" },
    d: "M70,170 L130,160 L170,175 L165,225 L130,245 L90,235 L65,210 Z",
    labelX: 115, labelY: 205,
  },
  {
    id: "DE-HE",
    name: { de: "Hessen", hu: "Hessen", ro: "Hesse", en: "Hesse" },
    capital: { de: "Wiesbaden", hu: "Wiesbaden", ro: "Wiesbaden", en: "Wiesbaden" },
    d: "M165,225 L210,215 L215,260 L205,295 L175,300 L150,275 L155,240 Z",
    labelX: 185, labelY: 265,
  },
  {
    id: "DE-TH",
    name: { de: "Thüringen", hu: "Türingia", ro: "Turingia", en: "Thuringia" },
    capital: { de: "Erfurt", hu: "Erfurt", ro: "Erfurt", en: "Erfurt" },
    d: "M210,215 L260,210 L270,250 L240,260 L215,260 Z",
    labelX: 240, labelY: 235,
  },
  {
    id: "DE-SN",
    name: { de: "Sachsen", hu: "Szászország", ro: "Saxonia", en: "Saxony" },
    capital: { de: "Dresden", hu: "Drezda", ro: "Dresda", en: "Dresden" },
    d: "M270,225 L325,220 L335,255 L300,280 L265,265 L260,235 Z",
    labelX: 295, labelY: 250,
  },
  {
    id: "DE-RP",
    name: { de: "Rheinland-Pfalz", hu: "Rajna-vidék-Pfalz", ro: "Renania-Palatinat", en: "Rhineland-Palatinate" },
    capital: { de: "Mainz", hu: "Mainz", ro: "Mainz", en: "Mainz" },
    d: "M90,235 L150,250 L155,295 L130,330 L95,320 L75,285 Z",
    labelX: 115, labelY: 290,
  },
  {
    id: "DE-SL",
    name: { de: "Saarland", hu: "Saar-vidék", ro: "Saarland", en: "Saarland" },
    capital: { de: "Saarbrücken", hu: "Saarbrücken", ro: "Saarbrücken", en: "Saarbrücken" },
    d: "M70,335 L100,330 L102,355 L78,358 Z",
    labelX: 88, labelY: 348,
  },
  {
    id: "DE-BW",
    name: { de: "Baden-Württemberg", hu: "Baden-Württemberg", ro: "Baden-Württemberg", en: "Baden-Württemberg" },
    capital: { de: "Stuttgart", hu: "Stuttgart", ro: "Stuttgart", en: "Stuttgart" },
    d: "M115,335 L185,300 L210,340 L210,400 L165,440 L120,420 L100,375 Z",
    labelX: 160, labelY: 380,
  },
  {
    id: "DE-BY",
    name: { de: "Bayern", hu: "Bajorország", ro: "Bavaria", en: "Bavaria" },
    capital: { de: "München", hu: "München", ro: "München", en: "Munich" },
    d: "M210,295 L300,285 L335,310 L340,395 L295,455 L240,470 L210,440 L210,400 L210,340 Z",
    labelX: 270, labelY: 380,
  },
];
