// Italy admin-2 (province) SVG data — per-region drill-down
// TODO: Replace placeholder bounding-box rectangles with real Natural Earth / NE10m_admin_2_provinces paths.
//       Each region has a 1000x1200 viewBox. Provinces are currently rendered as rectangles derived
//       from approximate lat/lon bounding boxes. Real polygon paths should be generated from
//       italy-provinces.geojson (Natural Earth or Eurostat NUTS-3).
//
// Projection formula (same as bundeslandSubregions):
//   x = offX + (lon - minLon) * latStretch * scale
//   y = offY + (maxLat - lat) * scale

export interface ItalyProvinceSubRegion {
  id: string;      // ISO 3166-2 province code, e.g. "IT-MI"
  name: string;    // Italian province name
  labelX: number;
  labelY: number;
  path: string;    // SVG path (placeholder rect until real GeoJSON available)
}

export interface ItalyRegionProjection {
  minLon: number;
  maxLon: number;
  minLat: number;
  maxLat: number;
  latStretch: number;
  scale: number;
  offX: number;
  offY: number;
}

export interface ItalyRegionDetail {
  viewBox: string;
  type: "province";
  projection: ItalyRegionProjection;
  children: ItalyProvinceSubRegion[];
}

export function projectInItalyRegion(
  p: ItalyRegionProjection,
  lon: number,
  lat: number
): [number, number] {
  const x = p.offX + (lon - p.minLon) * p.latStretch * p.scale;
  const y = p.offY + (p.maxLat - lat) * p.scale;
  return [Math.round(x * 100) / 100, Math.round(y * 100) / 100];
}

/** Build a placeholder rect SVG path from lon/lat bounding box + region projection */
function placeholderRect(
  p: ItalyRegionProjection,
  lonMin: number,
  lonMax: number,
  latMin: number,
  latMax: number
): string {
  const [x1, y1] = [
    p.offX + (lonMin - p.minLon) * p.latStretch * p.scale,
    p.offY + (p.maxLat - latMax) * p.scale,
  ];
  const [x2, y2] = [
    p.offX + (lonMax - p.minLon) * p.latStretch * p.scale,
    p.offY + (p.maxLat - latMin) * p.scale,
  ];
  const r = (v: number) => Math.round(v * 100) / 100;
  return `M${r(x1)},${r(y1)}L${r(x2)},${r(y1)}L${r(x2)},${r(y2)}L${r(x1)},${r(y2)}Z`;
}

// ─── Helper to build a projection that fits a region into 1000x1200 ─────────
function makeProjection(
  minLon: number,
  maxLon: number,
  minLat: number,
  maxLat: number
): ItalyRegionProjection {
  const PAD = 40;
  const W = 1000 - 2 * PAD;
  const H = 1200 - 2 * PAD;
  const lonSpan = maxLon - minLon;
  const latSpan = maxLat - minLat;
  const latStretch = Math.cos(((minLat + maxLat) / 2) * (Math.PI / 180));
  const scaleX = W / (lonSpan * latStretch);
  const scaleY = H / latSpan;
  const scale = Math.min(scaleX, scaleY);
  const usedW = lonSpan * latStretch * scale;
  const usedH = latSpan * scale;
  const offX = PAD + (W - usedW) / 2;
  const offY = PAD + (H - usedH) / 2;
  return { minLon, maxLon, minLat, maxLat, latStretch, scale, offX, offY };
}

// ─── Region: Valle d'Aosta (IT-23) ────────────────────────────────────────
const p23 = makeProjection(6.85, 7.95, 45.45, 45.9);
const IT_23_children: ItalyProvinceSubRegion[] = [
  {
    id: "IT-AO",
    name: "Aosta",
    labelX: 500,
    labelY: 600,
    path: placeholderRect(p23, 6.85, 7.95, 45.45, 45.9),
  },
];

// ─── Region: Piedmont (IT-21) ─────────────────────────────────────────────
const p21 = makeProjection(6.63, 9.22, 44.06, 46.47);
const IT_21_children: ItalyProvinceSubRegion[] = [
  { id: "IT-AL", name: "Alessandria", labelX: 700, labelY: 950, path: placeholderRect(p21, 8.1, 9.22, 44.55, 45.05) },
  { id: "IT-AT", name: "Asti",         labelX: 630, labelY: 870, path: placeholderRect(p21, 7.9, 8.5,  44.6, 45.05) },
  { id: "IT-BI", name: "Biella",       labelX: 610, labelY: 400, path: placeholderRect(p21, 7.9, 8.35, 45.5, 45.85) },
  { id: "IT-CN", name: "Cuneo",        labelX: 390, labelY: 950, path: placeholderRect(p21, 6.63, 8.0, 44.06, 44.7) },
  { id: "IT-NO", name: "Novara",       labelX: 620, labelY: 530, path: placeholderRect(p21, 8.2, 8.8,  45.3, 45.75) },
  { id: "IT-TO", name: "Torino",       labelX: 420, labelY: 600, path: placeholderRect(p21, 6.63, 8.1, 44.6, 45.5) },
  { id: "IT-VB", name: "Verbano-Cusio-Ossola", labelX: 490, labelY: 180, path: placeholderRect(p21, 7.9, 8.75, 45.8, 46.47) },
  { id: "IT-VC", name: "Vercelli",     labelX: 550, labelY: 470, path: placeholderRect(p21, 8.0, 8.75, 45.05, 45.65) },
];

// ─── Region: Lombardy (IT-25) ─────────────────────────────────────────────
const p25 = makeProjection(8.5, 11.35, 44.68, 46.65);
const IT_25_children: ItalyProvinceSubRegion[] = [
  { id: "IT-BG", name: "Bergamo",     labelX: 590, labelY: 420, path: placeholderRect(p25, 9.5, 10.2, 45.5, 46.1) },
  { id: "IT-BS", name: "Brescia",     labelX: 680, labelY: 400, path: placeholderRect(p25, 10.0, 10.8, 45.3, 46.2) },
  { id: "IT-CO", name: "Como",        labelX: 460, labelY: 290, path: placeholderRect(p25, 9.0, 9.5, 45.75, 46.2) },
  { id: "IT-CR", name: "Cremona",     labelX: 630, labelY: 730, path: placeholderRect(p25, 9.7, 10.5, 45.0, 45.5) },
  { id: "IT-LC", name: "Lecco",       labelX: 520, labelY: 330, path: placeholderRect(p25, 9.2, 9.6, 45.8, 46.1) },
  { id: "IT-LO", name: "Lodi",        labelX: 520, labelY: 780, path: placeholderRect(p25, 9.3, 9.75, 45.1, 45.4) },
  { id: "IT-MB", name: "Monza e Brianza", labelX: 490, labelY: 450, path: placeholderRect(p25, 9.15, 9.55, 45.55, 45.75) },
  { id: "IT-MI", name: "Milano",      labelX: 450, labelY: 600, path: placeholderRect(p25, 8.9, 9.45, 45.3, 45.65) },
  { id: "IT-MN", name: "Mantova",     labelX: 720, labelY: 830, path: placeholderRect(p25, 10.4, 11.35, 44.9, 45.35) },
  { id: "IT-PV", name: "Pavia",       labelX: 410, labelY: 820, path: placeholderRect(p25, 8.5, 9.35, 44.68, 45.3) },
  { id: "IT-SO", name: "Sondrio",     labelX: 680, labelY: 220, path: placeholderRect(p25, 9.4, 10.75, 46.0, 46.65) },
  { id: "IT-VA", name: "Varese",      labelX: 370, labelY: 320, path: placeholderRect(p25, 8.5, 9.1, 45.65, 46.1) },
];

// ─── Region: Liguria (IT-42) ──────────────────────────────────────────────
const p42 = makeProjection(7.5, 10.05, 43.78, 44.67);
const IT_42_children: ItalyProvinceSubRegion[] = [
  { id: "IT-GE", name: "Genova",     labelX: 550, labelY: 700, path: placeholderRect(p42, 8.55, 9.55, 44.15, 44.6) },
  { id: "IT-IM", name: "Imperia",    labelX: 230, labelY: 750, path: placeholderRect(p42, 7.5, 8.3, 43.78, 44.2) },
  { id: "IT-SP", name: "La Spezia",  labelX: 820, labelY: 700, path: placeholderRect(p42, 9.55, 10.05, 44.05, 44.4) },
  { id: "IT-SV", name: "Savona",     labelX: 380, labelY: 720, path: placeholderRect(p42, 8.05, 8.7, 44.0, 44.5) },
];

// ─── Region: Trentino-South Tyrol (IT-32) ─────────────────────────────────
const p32 = makeProjection(10.45, 12.45, 45.67, 47.1);
const IT_32_children: ItalyProvinceSubRegion[] = [
  { id: "IT-BZ", name: "Bolzano/Bozen", labelX: 430, labelY: 320, path: placeholderRect(p32, 10.45, 12.05, 46.35, 47.1) },
  { id: "IT-TN", name: "Trento",        labelX: 480, labelY: 750, path: placeholderRect(p32, 10.45, 12.45, 45.67, 46.5) },
];

// ─── Region: Veneto (IT-34) ───────────────────────────────────────────────
const p34 = makeProjection(10.7, 13.1, 44.8, 46.65);
const IT_34_children: ItalyProvinceSubRegion[] = [
  { id: "IT-BL", name: "Belluno",   labelX: 520, labelY: 250, path: placeholderRect(p34, 11.7, 12.6, 46.0, 46.65) },
  { id: "IT-PD", name: "Padova",    labelX: 510, labelY: 780, path: placeholderRect(p34, 11.55, 12.1, 45.1, 45.55) },
  { id: "IT-RO", name: "Rovigo",    labelX: 540, labelY: 930, path: placeholderRect(p34, 11.5, 12.35, 44.8, 45.15) },
  { id: "IT-TV", name: "Treviso",   labelX: 600, labelY: 550, path: placeholderRect(p34, 11.9, 12.55, 45.5, 46.0) },
  { id: "IT-VE", name: "Venezia",   labelX: 660, labelY: 650, path: placeholderRect(p34, 12.1, 13.1, 45.2, 45.65) },
  { id: "IT-VI", name: "Vicenza",   labelX: 430, labelY: 620, path: placeholderRect(p34, 11.1, 11.95, 45.3, 45.9) },
  { id: "IT-VR", name: "Verona",    labelX: 280, labelY: 700, path: placeholderRect(p34, 10.7, 11.5, 45.1, 45.75) },
];

// ─── Region: Friuli-Venezia Giulia (IT-36) ────────────────────────────────
const p36 = makeProjection(12.3, 13.9, 45.6, 46.65);
const IT_36_children: ItalyProvinceSubRegion[] = [
  { id: "IT-GO", name: "Gorizia",  labelX: 800, labelY: 750, path: placeholderRect(p36, 13.4, 13.75, 45.8, 46.0) },
  { id: "IT-PN", name: "Pordenone", labelX: 360, labelY: 550, path: placeholderRect(p36, 12.3, 12.95, 45.8, 46.45) },
  { id: "IT-TS", name: "Trieste",  labelX: 900, labelY: 900, path: placeholderRect(p36, 13.65, 13.9, 45.6, 45.8) },
  { id: "IT-UD", name: "Udine",    labelX: 550, labelY: 450, path: placeholderRect(p36, 12.6, 13.6, 46.0, 46.65) },
];

// ─── Region: Emilia-Romagna (IT-45) ───────────────────────────────────────
const p45 = makeProjection(9.2, 12.8, 43.75, 45.08);
const IT_45_children: ItalyProvinceSubRegion[] = [
  { id: "IT-BO", name: "Bologna",   labelX: 560, labelY: 550, path: placeholderRect(p45, 10.8, 11.6, 44.15, 44.6) },
  { id: "IT-FE", name: "Ferrara",   labelX: 640, labelY: 360, path: placeholderRect(p45, 11.3, 12.05, 44.55, 45.0) },
  { id: "IT-FC", name: "Forlì-Cesena", labelX: 750, labelY: 650, path: placeholderRect(p45, 11.7, 12.4, 43.9, 44.3) },
  { id: "IT-MO", name: "Modena",    labelX: 470, labelY: 520, path: placeholderRect(p45, 10.5, 11.2, 44.2, 44.75) },
  { id: "IT-PR", name: "Parma",     labelX: 330, labelY: 570, path: placeholderRect(p45, 9.8, 10.65, 44.3, 44.9) },
  { id: "IT-PC", name: "Piacenza",  labelX: 200, labelY: 480, path: placeholderRect(p45, 9.2, 10.05, 44.55, 45.08) },
  { id: "IT-RA", name: "Ravenna",   labelX: 740, labelY: 460, path: placeholderRect(p45, 11.75, 12.5, 44.25, 44.6) },
  { id: "IT-RE", name: "Reggio Emilia", labelX: 390, labelY: 580, path: placeholderRect(p45, 10.3, 10.85, 44.3, 44.85) },
  { id: "IT-RN", name: "Rimini",    labelX: 830, labelY: 720, path: placeholderRect(p45, 12.3, 12.8, 43.75, 44.2) },
];

// ─── Region: Tuscany (IT-52) ──────────────────────────────────────────────
const p52 = makeProjection(9.68, 12.37, 42.37, 44.47);
const IT_52_children: ItalyProvinceSubRegion[] = [
  { id: "IT-AR", name: "Arezzo",    labelX: 680, labelY: 680, path: placeholderRect(p52, 11.4, 12.37, 43.2, 43.9) },
  { id: "IT-FI", name: "Firenze",   labelX: 560, labelY: 430, path: placeholderRect(p52, 10.9, 11.9, 43.5, 44.2) },
  { id: "IT-GR", name: "Grosseto",  labelX: 400, labelY: 800, path: placeholderRect(p52, 10.7, 11.85, 42.37, 43.2) },
  { id: "IT-LI", name: "Livorno",   labelX: 290, labelY: 550, path: placeholderRect(p52, 9.68, 10.75, 42.8, 43.85) },
  { id: "IT-LU", name: "Lucca",     labelX: 370, labelY: 340, path: placeholderRect(p52, 10.2, 10.85, 43.75, 44.3) },
  { id: "IT-MS", name: "Massa-Carrara", labelX: 310, labelY: 240, path: placeholderRect(p52, 9.88, 10.35, 44.0, 44.47) },
  { id: "IT-PI", name: "Pisa",      labelX: 380, labelY: 500, path: placeholderRect(p52, 10.05, 10.85, 43.4, 43.9) },
  { id: "IT-PT", name: "Pistoia",   labelX: 490, labelY: 380, path: placeholderRect(p52, 10.65, 11.2, 43.8, 44.2) },
  { id: "IT-PO", name: "Prato",     labelX: 530, labelY: 390, path: placeholderRect(p52, 11.0, 11.35, 43.8, 44.1) },
  { id: "IT-SI", name: "Siena",     labelX: 580, labelY: 600, path: placeholderRect(p52, 10.9, 12.05, 42.9, 43.7) },
];

// ─── Region: Umbria (IT-55) ───────────────────────────────────────────────
const p55 = makeProjection(11.9, 13.25, 42.36, 43.62);
const IT_55_children: ItalyProvinceSubRegion[] = [
  { id: "IT-PG", name: "Perugia",  labelX: 420, labelY: 450, path: placeholderRect(p55, 11.9, 13.0, 42.7, 43.62) },
  { id: "IT-TR", name: "Terni",    labelX: 440, labelY: 800, path: placeholderRect(p55, 12.15, 13.25, 42.36, 42.85) },
];

// ─── Region: Marche (IT-57) ───────────────────────────────────────────────
const p57 = makeProjection(12.35, 13.95, 42.69, 43.97);
const IT_57_children: ItalyProvinceSubRegion[] = [
  { id: "IT-AN", name: "Ancona",   labelX: 510, labelY: 450, path: placeholderRect(p57, 12.9, 13.7, 43.3, 43.8) },
  { id: "IT-AP", name: "Ascoli Piceno", labelX: 580, labelY: 850, path: placeholderRect(p57, 13.1, 13.95, 42.69, 43.15) },
  { id: "IT-FM", name: "Fermo",    labelX: 590, labelY: 720, path: placeholderRect(p57, 13.2, 13.85, 43.1, 43.45) },
  { id: "IT-MC", name: "Macerata", labelX: 480, labelY: 650, path: placeholderRect(p57, 12.9, 13.8, 43.0, 43.5) },
  { id: "IT-PU", name: "Pesaro e Urbino", labelX: 380, labelY: 280, path: placeholderRect(p57, 12.35, 13.35, 43.5, 43.97) },
];

// ─── Region: Lazio (IT-62) ────────────────────────────────────────────────
const p62 = makeProjection(11.45, 14.03, 41.23, 42.84);
const IT_62_children: ItalyProvinceSubRegion[] = [
  { id: "IT-FR", name: "Frosinone", labelX: 680, labelY: 760, path: placeholderRect(p62, 13.0, 14.03, 41.45, 41.95) },
  { id: "IT-LT", name: "Latina",   labelX: 510, labelY: 850, path: placeholderRect(p62, 12.6, 13.45, 41.23, 41.7) },
  { id: "IT-RI", name: "Rieti",    labelX: 660, labelY: 410, path: placeholderRect(p62, 12.65, 13.4, 42.1, 42.84) },
  { id: "IT-RM", name: "Roma",     labelX: 440, labelY: 580, path: placeholderRect(p62, 11.8, 13.1, 41.6, 42.45) },
  { id: "IT-VT", name: "Viterbo",  labelX: 340, labelY: 340, path: placeholderRect(p62, 11.45, 12.5, 42.25, 42.84) },
];

// ─── Region: Abruzzo (IT-65) ──────────────────────────────────────────────
const p65 = makeProjection(13.15, 14.8, 41.73, 42.9);
const IT_65_children: ItalyProvinceSubRegion[] = [
  { id: "IT-AQ", name: "L'Aquila",  labelX: 300, labelY: 500, path: placeholderRect(p65, 13.15, 14.05, 41.9, 42.9) },
  { id: "IT-CH", name: "Chieti",    labelX: 680, labelY: 650, path: placeholderRect(p65, 14.05, 14.8, 41.95, 42.4) },
  { id: "IT-PE", name: "Pescara",   labelX: 700, labelY: 450, path: placeholderRect(p65, 13.95, 14.5, 42.25, 42.6) },
  { id: "IT-TE", name: "Teramo",    labelX: 580, labelY: 290, path: placeholderRect(p65, 13.6, 14.3, 42.5, 42.9) },
];

// ─── Region: Molise (IT-67) ───────────────────────────────────────────────
const p67 = makeProjection(13.95, 15.15, 41.35, 41.95);
const IT_67_children: ItalyProvinceSubRegion[] = [
  { id: "IT-CB", name: "Campobasso", labelX: 530, labelY: 600, path: placeholderRect(p67, 14.35, 15.15, 41.35, 41.85) },
  { id: "IT-IS", name: "Isernia",    labelX: 300, labelY: 500, path: placeholderRect(p67, 13.95, 14.5, 41.55, 41.95) },
];

// ─── Region: Campania (IT-72) ─────────────────────────────────────────────
const p72 = makeProjection(14.03, 15.85, 39.99, 41.5);
const IT_72_children: ItalyProvinceSubRegion[] = [
  { id: "IT-AV", name: "Avellino",  labelX: 620, labelY: 480, path: placeholderRect(p72, 14.7, 15.35, 40.8, 41.2) },
  { id: "IT-BN", name: "Benevento", labelX: 670, labelY: 340, path: placeholderRect(p72, 14.5, 15.2, 41.05, 41.5) },
  { id: "IT-CE", name: "Caserta",   labelX: 490, labelY: 280, path: placeholderRect(p72, 14.03, 14.65, 41.0, 41.5) },
  { id: "IT-NA", name: "Napoli",    labelX: 410, labelY: 500, path: placeholderRect(p72, 14.1, 14.6, 40.65, 41.1) },
  { id: "IT-SA", name: "Salerno",   labelX: 500, labelY: 750, path: placeholderRect(p72, 14.55, 15.85, 39.99, 40.85) },
];

// ─── Region: Puglia (IT-75) ───────────────────────────────────────────────
const p75 = makeProjection(15.0, 18.52, 39.79, 41.88);
const IT_75_children: ItalyProvinceSubRegion[] = [
  { id: "IT-BA", name: "Bari",          labelX: 420, labelY: 500, path: placeholderRect(p75, 15.8, 16.9, 40.65, 41.3) },
  { id: "IT-BT", name: "Barletta-Andria-Trani", labelX: 410, labelY: 350, path: placeholderRect(p75, 15.85, 16.55, 41.1, 41.55) },
  { id: "IT-BR", name: "Brindisi",      labelX: 590, labelY: 700, path: placeholderRect(p75, 17.3, 18.0, 40.45, 40.95) },
  { id: "IT-FG", name: "Foggia",        labelX: 280, labelY: 280, path: placeholderRect(p75, 15.0, 16.5, 41.2, 41.88) },
  { id: "IT-LE", name: "Lecce",         labelX: 680, labelY: 880, path: placeholderRect(p75, 17.75, 18.52, 39.79, 40.55) },
  { id: "IT-TA", name: "Taranto",       labelX: 530, labelY: 810, path: placeholderRect(p75, 16.8, 17.8, 40.2, 40.85) },
];

// ─── Region: Basilicata (IT-77) ───────────────────────────────────────────
const p77 = makeProjection(15.35, 16.85, 39.9, 41.15);
const IT_77_children: ItalyProvinceSubRegion[] = [
  { id: "IT-MT", name: "Matera",   labelX: 640, labelY: 500, path: placeholderRect(p77, 16.1, 16.85, 40.2, 40.9) },
  { id: "IT-PZ", name: "Potenza",  labelX: 380, labelY: 480, path: placeholderRect(p77, 15.35, 16.3, 39.9, 41.15) },
];

// ─── Region: Calabria (IT-78) ─────────────────────────────────────────────
const p78 = makeProjection(15.63, 16.63, 37.92, 40.15);
const IT_78_children: ItalyProvinceSubRegion[] = [
  { id: "IT-CS", name: "Cosenza",        labelX: 430, labelY: 310, path: placeholderRect(p78, 15.63, 16.63, 39.15, 40.15) },
  { id: "IT-CZ", name: "Catanzaro",      labelX: 500, labelY: 560, path: placeholderRect(p78, 15.9, 16.55, 38.8, 39.2) },
  { id: "IT-KR", name: "Crotone",        labelX: 660, labelY: 500, path: placeholderRect(p78, 16.4, 16.63, 38.9, 39.35) },
  { id: "IT-RC", name: "Reggio Calabria", labelX: 440, labelY: 880, path: placeholderRect(p78, 15.63, 16.2, 37.92, 38.45) },
  { id: "IT-VV", name: "Vibo Valentia",  labelX: 430, labelY: 720, path: placeholderRect(p78, 15.8, 16.25, 38.45, 38.85) },
];

// ─── Region: Sicily (IT-82) ───────────────────────────────────────────────
const p82 = makeProjection(12.43, 15.65, 36.65, 38.33);
const IT_82_children: ItalyProvinceSubRegion[] = [
  { id: "IT-AG", name: "Agrigento",  labelX: 360, labelY: 800, path: placeholderRect(p82, 12.9, 14.05, 37.0, 37.7) },
  { id: "IT-CL", name: "Caltanissetta", labelX: 490, labelY: 700, path: placeholderRect(p82, 13.7, 14.4, 37.2, 37.7) },
  { id: "IT-CT", name: "Catania",    labelX: 720, labelY: 650, path: placeholderRect(p82, 14.7, 15.4, 37.25, 37.85) },
  { id: "IT-EN", name: "Enna",       labelX: 560, labelY: 600, path: placeholderRect(p82, 14.15, 14.85, 37.45, 37.9) },
  { id: "IT-ME", name: "Messina",    labelX: 770, labelY: 350, path: placeholderRect(p82, 14.95, 15.65, 37.85, 38.33) },
  { id: "IT-PA", name: "Palermo",    labelX: 350, labelY: 380, path: placeholderRect(p82, 12.85, 13.9, 37.8, 38.3) },
  { id: "IT-RG", name: "Ragusa",     labelX: 630, labelY: 880, path: placeholderRect(p82, 14.35, 15.05, 36.65, 37.15) },
  { id: "IT-SR", name: "Siracusa",   labelX: 760, labelY: 820, path: placeholderRect(p82, 14.8, 15.65, 36.75, 37.35) },
  { id: "IT-TP", name: "Trapani",    labelX: 180, labelY: 480, path: placeholderRect(p82, 12.43, 13.1, 37.5, 38.15) },
];

// ─── Region: Sardinia (IT-88) ─────────────────────────────────────────────
const p88 = makeProjection(8.13, 9.83, 38.86, 41.26);
const IT_88_children: ItalyProvinceSubRegion[] = [
  { id: "IT-CA", name: "Cagliari",         labelX: 510, labelY: 880, path: placeholderRect(p88, 8.8, 9.55, 39.0, 39.55) },
  { id: "IT-CI", name: "Carbonia-Iglesias", labelX: 320, labelY: 940, path: placeholderRect(p88, 8.13, 8.85, 38.86, 39.35) },
  { id: "IT-VS", name: "Medio Campidano",  labelX: 390, labelY: 820, path: placeholderRect(p88, 8.55, 9.1, 39.35, 39.8) },
  { id: "IT-NU", name: "Nuoro",            labelX: 570, labelY: 520, path: placeholderRect(p88, 8.9, 9.83, 39.85, 40.65) },
  { id: "IT-OG", name: "Ogliastra",        labelX: 680, labelY: 650, path: placeholderRect(p88, 9.3, 9.83, 39.5, 40.1) },
  { id: "IT-OR", name: "Oristano",         labelX: 360, labelY: 630, path: placeholderRect(p88, 8.4, 9.1, 39.65, 40.25) },
  { id: "IT-OT", name: "Olbia-Tempio",     labelX: 640, labelY: 230, path: placeholderRect(p88, 9.1, 9.83, 40.6, 41.26) },
  { id: "IT-SS", name: "Sassari",          labelX: 350, labelY: 280, path: placeholderRect(p88, 8.13, 9.3, 40.4, 41.26) },
];

// ─── Master export ────────────────────────────────────────────────────────
export const italyAdmin2: Record<string, ItalyRegionDetail> = {
  "IT-23": { viewBox: "0 0 1000 1200", type: "province", projection: p23, children: IT_23_children },
  "IT-21": { viewBox: "0 0 1000 1200", type: "province", projection: p21, children: IT_21_children },
  "IT-25": { viewBox: "0 0 1000 1200", type: "province", projection: p25, children: IT_25_children },
  "IT-42": { viewBox: "0 0 1000 1200", type: "province", projection: p42, children: IT_42_children },
  "IT-32": { viewBox: "0 0 1000 1200", type: "province", projection: p32, children: IT_32_children },
  "IT-34": { viewBox: "0 0 1000 1200", type: "province", projection: p34, children: IT_34_children },
  "IT-36": { viewBox: "0 0 1000 1200", type: "province", projection: p36, children: IT_36_children },
  "IT-45": { viewBox: "0 0 1000 1200", type: "province", projection: p45, children: IT_45_children },
  "IT-52": { viewBox: "0 0 1000 1200", type: "province", projection: p52, children: IT_52_children },
  "IT-55": { viewBox: "0 0 1000 1200", type: "province", projection: p55, children: IT_55_children },
  "IT-57": { viewBox: "0 0 1000 1200", type: "province", projection: p57, children: IT_57_children },
  "IT-62": { viewBox: "0 0 1000 1200", type: "province", projection: p62, children: IT_62_children },
  "IT-65": { viewBox: "0 0 1000 1200", type: "province", projection: p65, children: IT_65_children },
  "IT-67": { viewBox: "0 0 1000 1200", type: "province", projection: p67, children: IT_67_children },
  "IT-72": { viewBox: "0 0 1000 1200", type: "province", projection: p72, children: IT_72_children },
  "IT-75": { viewBox: "0 0 1000 1200", type: "province", projection: p75, children: IT_75_children },
  "IT-77": { viewBox: "0 0 1000 1200", type: "province", projection: p77, children: IT_77_children },
  "IT-78": { viewBox: "0 0 1000 1200", type: "province", projection: p78, children: IT_78_children },
  "IT-82": { viewBox: "0 0 1000 1200", type: "province", projection: p82, children: IT_82_children },
  "IT-88": { viewBox: "0 0 1000 1200", type: "province", projection: p88, children: IT_88_children },
};
