// AUTO-GENERATED
export const nauruViewBox = "0 0 1000.00 1198.45";

export const NR_PROJECTION = {
  minLon: 166.906993, maxLon: 166.958263,
  minLat: -0.551853, maxLat: -0.490411,
  width: 1000.00, height: 1198.45,
};

export function projectCoordsNR(lon: number, lat: number): [number, number] {
  const p = NR_PROJECTION;
  if (lon < 0) lon += 360;
  const x = ((lon - p.minLon) / (p.maxLon - p.minLon)) * p.width;
  const y = p.height - ((lat - p.minLat) / (p.maxLat - p.minLat)) * p.height;
  return [x, y];
}

export interface NauruRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const nauruMap: NauruRegionPath[] = [
  {
    id: "NRU-4978",
    name: { de: "Anetan", hu: "Anetan", ro: "Anetan", en: "Anetan" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M472.09,57.13L620.64,0.00L624.03,268.63L472.09,57.13Z"
  },
  {
    id: "NRU-4977",
    name: { de: "Ewa", hu: "Ewa", ro: "Ewa", en: "Ewa" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M353.68,102.68L472.09,57.13L624.03,268.63L605.71,392.23L353.68,102.68Z"
  },
  {
    id: "NRU-4976",
    name: { de: "Baiti", hu: "Baiti", ro: "Baiti", en: "Baiti" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M215.99,155.63L353.68,102.68L605.71,392.23L596.63,453.56L589.96,509.19L215.99,155.63Z"
  },
  {
    id: "NRU-4975",
    name: { de: "Uaboe", hu: "Uaboe", ro: "Uaboe", en: "Uaboe" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M125.39,190.49L215.99,155.63L589.96,509.19L581.33,581.03L125.39,190.49Z"
  },
  {
    id: "NRU-4974",
    name: { de: "Nibok", hu: "Nibok", ro: "Nibok", en: "Nibok" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M64.74,423.19L125.39,190.49L581.33,581.03L576.09,624.78L568.40,678.48L418.57,631.62L261.03,590.53L64.74,423.19Z"
  },
  {
    id: "NRU-4973",
    name: { de: "Denigomodu", hu: "Denigomodu", ro: "Denigomodu", en: "Denigomodu" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M0.00,671.45L64.74,423.19L261.03,590.53L192.55,659.03L0.00,671.45Z"
  },
  {
    id: "NRU-4972",
    name: { de: "Aiwo", hu: "Aiwo", ro: "Aiwo", en: "Aiwo" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M97.52,908.05L0.00,671.45L192.55,659.03L178.86,754.92L213.09,871.34L97.52,908.05Z"
  },
  {
    id: "NRU-4971",
    name: { de: "Boe", hu: "Boe", ro: "Boe", en: "Boe" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M182.54,1114.32L97.52,908.05L213.09,871.34L255.53,943.83L219.95,974.08L182.54,1114.32Z"
  },
  {
    id: "NRU-4983",
    name: { de: "Yaren", hu: "Yaren", ro: "Yaren", en: "Yaren" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M500.23,1175.34L182.54,1114.32L219.95,974.08L255.53,943.83L356.91,857.65L500.23,1175.34Z"
  },
  {
    id: "NRU-4982",
    name: { de: "Meneng", hu: "Meneng", ro: "Meneng", en: "Meneng" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M901.35,838.19L865.07,950.83L620.64,1198.45L500.23,1175.34L356.91,857.65L555.53,768.61L747.30,816.55L901.35,838.19Z"
  },
  {
    id: "NRU-4981",
    name: { de: "Anibare", hu: "Anibare", ro: "Anibare", en: "Anibare" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M983.11,408.01L1000.00,531.76L901.35,838.19L747.30,816.55L555.53,768.61L568.40,678.48L576.09,624.78L581.33,581.03L589.96,509.19L596.63,453.56L605.71,392.23L624.03,268.63L774.70,357.67L983.11,408.01Z"
  },
  {
    id: "NRU-4980",
    name: { de: "Ijuw", hu: "Ijuw", ro: "Ijuw", en: "Ijuw" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M947.61,147.62L983.11,408.01L774.70,357.67L624.03,268.63L947.61,147.62Z"
  },
  {
    id: "NRU-4979",
    name: { de: "Anabar", hu: "Anabar", ro: "Anabar", en: "Anabar" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M620.64,0.00L947.61,147.62L624.03,268.63L620.64,0.00Z"
  },
  {
    id: "NRU-4970",
    name: { de: "Buada", hu: "Buada", ro: "Buada", en: "Buada" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M568.40,678.48L555.53,768.61L356.91,857.65L255.53,943.83L213.09,871.34L178.86,754.92L192.55,659.03L261.03,590.53L418.57,631.62L568.40,678.48Z"
  },
];
