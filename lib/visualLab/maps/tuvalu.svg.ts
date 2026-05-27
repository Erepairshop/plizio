// AUTO-GENERATED
export const tuvaluViewBox = "0 0 1000.00 998.52";

export const TV_PROJECTION = {
  minLon: 176.125255, maxLon: 179.906749,
  minLat: -9.420668, maxLat: -5.677504,
  width: 1000.00, height: 998.52,
};

export function projectCoordsTV(lon: number, lat: number): [number, number] {
  const p = TV_PROJECTION;
  if (lon < 0) lon += 360;
  const x = ((lon - p.minLon) / (p.maxLon - p.minLon)) * p.width;
  const y = p.height - ((lat - p.minLat) / (p.maxLat - p.minLat)) * p.height;
  return [x, y];
}

export interface TuvaluRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const tuvaluMap: TuvaluRegionPath[] = [
  {
    id: "TUV+00?",
    name: { de: "Tuvalu", hu: "Tuvalu", ro: "Tuvalu", en: "Tuvalu" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M810.79,764.15L813.11,760.81L814.19,757.98L813.72,755.51L812.60,752.34L812.45,748.00L812.94,742.42L814.79,746.00L815.01,752.51L817.20,755.94L817.74,758.42L815.68,760.92L810.79,764.15ZM596.40,638.22L594.49,637.96L595.07,634.51L597.09,630.01L599.07,626.62L596.40,638.22ZM271.68,405.43L271.61,404.83L271.10,403.57L271.01,402.98L271.78,404.80L271.87,405.91L271.68,406.22L271.68,405.43ZM49.99,166.68L51.28,163.19L52.27,163.08L52.14,164.75L49.99,166.68ZM322.31,118.31L321.20,116.58L320.74,115.64L320.49,114.88L323.56,115.51L325.63,116.58L325.54,117.71L322.31,118.31ZM2.65,4.08L0.00,0.43L1.23,0.00L4.00,2.58L6.13,7.79L2.65,4.08ZM1000.00,992.83L999.83,997.98L999.61,998.52L999.29,993.13L997.85,989.49L998.54,989.79L1000.00,992.83ZM989.71,977.85L991.16,978.83L992.51,982.54L992.12,983.13L990.75,979.72L989.61,978.16L989.71,977.85ZM676.33,483.89L672.41,476.46L671.68,473.90L677.79,479.33L678.52,479.59L679.13,481.89L679.32,484.52L678.61,485.80L676.33,483.89Z"
  },
];
