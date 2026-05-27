// AUTO-GENERATED
export const palauViewBox = "0 0 1000.00 1438.06";

export const PW_PROJECTION = {
  minLon: 131.131114, maxLon: 134.727343,
  minLat: 2.949042, maxLat: 8.096618,
  width: 1000.00, height: 1438.06,
};

export function projectCoordsPW(lon: number, lat: number): [number, number] {
  const p = PW_PROJECTION;
  if (lon < 0) lon += 360;
  const x = ((lon - p.minLon) / (p.maxLon - p.minLon)) * p.width;
  const y = p.height - ((lat - p.minLat) / (p.maxLat - p.minLat)) * p.height;
  return [x, y];
}

export interface PalauRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const palauMap: PalauRegionPath[] = [
  {
    id: "PLW-5258",
    name: { de: "Peleliu", hu: "Peleliu", ro: "Peleliu", en: "Peleliu" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M873.24,285.54L875.42,286.04L876.50,287.15L876.84,288.86L877.00,291.10L875.87,292.49L873.24,296.97L875.60,300.63L874.51,301.63L871.84,301.77L869.44,302.70L865.41,308.36L862.92,310.74L861.84,309.37L863.29,303.99L873.24,285.54Z"
  },
  {
    id: "PLW-5249",
    name: { de: "Koror", hu: "Koror", ro: "Koror", en: "Koror" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M926.74,224.15L922.67,225.33L923.14,227.68L925.38,230.40L926.74,232.72L925.20,234.63L921.81,235.45L916.19,235.59L913.57,237.09L907.01,243.64L902.84,245.14L899.22,244.48L896.53,242.66L894.83,239.93L894.29,236.54L894.49,231.54L895.31,230.60L904.13,239.88L905.92,239.61L909.45,237.50L919.23,228.72L921.17,226.06L921.38,222.77L920.49,219.68L920.40,217.88L922.73,218.42L924.23,219.31L925.38,220.40L926.26,221.95L926.74,224.15ZM928.82,205.09L933.62,206.38L940.09,209.33L944.39,213.74L942.96,219.38L940.09,220.15L937.69,217.15L935.84,213.10L934.34,210.63L930.61,209.45L927.89,210.31L922.73,214.63L922.26,210.48L922.76,207.07L924.79,205.03L928.82,205.09Z"
  },
  {
    id: "PLW-5256",
    name: { de: "Ngeremlengui", hu: "Ngeremlengui", ro: "Ngeremlengui", en: "Ngeremlengui" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M944.66,162.18L940.00,158.95L942.15,156.94L945.88,151.67L949.23,149.40L949.68,149.58L949.91,148.04L949.89,144.22L960.52,145.49L964.15,141.58L967.79,146.01L970.13,146.27L966.75,154.88L963.11,163.23L959.22,173.93L949.09,160.10L944.66,162.18Z"
  },
  {
    id: "PLW-5254",
    name: { de: "Ngatpang", hu: "Ngatpang", ro: "Ngatpang", en: "Ngatpang" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M933.32,175.08L934.93,172.23L937.15,169.93L940.00,168.50L941.09,172.11L943.57,172.59L946.20,170.59L947.58,166.76L946.83,164.45L944.66,162.18L949.09,160.10L959.22,173.93L955.06,185.67L950.65,183.06L948.57,177.58L943.12,174.97L933.32,175.08Z"
  },
  {
    id: "PLW-5244",
    name: { de: "Aimeliik", hu: "Aimeliik", ro: "Aimeliik", en: "Aimeliik" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M939.71,193.45L938.42,187.90L936.58,183.93L934.34,182.16L932.76,182.27L932.03,181.82L932.44,178.21L933.32,175.08L943.12,174.97L948.57,177.58L950.65,183.06L955.06,185.67L951.43,191.15L945.19,195.33L939.71,193.45Z"
  },
  {
    id: "PLW-5245",
    name: { de: "Airai", hu: "Airai", ro: "Airai", en: "Airai" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M962.99,188.71L964.89,199.19L963.53,203.01L962.27,203.86L960.89,203.38L957.63,203.11L955.03,201.51L953.28,201.27L951.99,202.28L949.07,206.19L947.58,206.99L944.57,206.46L943.39,205.50L942.99,203.83L940.52,196.90L939.71,193.45L945.19,195.33L951.43,191.15L955.06,185.67L962.99,188.71Z"
  },
  {
    id: "PLW-5255",
    name: { de: "Ngchesar", hu: "Ngchesar", ro: "Ngchesar", en: "Ngchesar" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M972.43,169.75L970.96,174.27L964.48,182.72L962.99,188.71L955.06,185.67L959.22,173.93L963.11,163.23L965.97,167.15L967.27,170.02L969.87,168.97L972.43,169.75Z"
  },
  {
    id: "PLW-5250",
    name: { de: "Melekeok", hu: "Melekeok", ro: "Melekeok", en: "Melekeok" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M971.75,158.15L971.50,159.99L974.60,164.03L974.60,165.79L973.31,167.04L972.43,169.75L969.87,168.97L967.27,170.02L965.97,167.15L963.11,163.23L966.75,154.88L971.75,158.15Z"
  },
  {
    id: "PLW-5257",
    name: { de: "Ngiwal", hu: "Ngiwal", ro: "Ngiwal", en: "Ngiwal" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M980.78,141.24L977.20,150.63L971.75,158.15L966.75,154.88L970.13,146.27L971.16,138.71L980.78,141.24Z"
  },
  {
    id: "PLW-5251",
    name: { de: "Ngaraard", hu: "Ngaraard", ro: "Ngaraard", en: "Ngaraard" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M981.32,114.71L982.20,127.96L980.78,141.24L971.16,138.71L970.97,131.50L974.33,130.54L975.98,125.89L974.36,115.25L981.32,114.71Z"
  },
  {
    id: "PLW-5252",
    name: { de: "Ngarchelong", hu: "Ngarchelong", ro: "Ngarchelong", en: "Ngarchelong" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M974.36,115.25L973.76,111.31L971.18,105.78L970.55,102.51L971.64,101.28L974.12,101.82L976.64,103.41L977.99,105.37L981.32,114.71L974.36,115.25Z"
  },
  {
    id: "PLW-5253",
    name: { de: "Ngardmau", hu: "Ngardmau", ro: "Ngardmau", en: "Ngardmau" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M949.89,144.22L949.68,143.88L952.63,138.42L956.00,134.91L960.73,133.00L967.70,132.44L970.97,131.50L971.16,138.71L970.13,146.27L967.79,146.01L964.15,141.58L960.52,145.49L949.89,144.22Z"
  },
  {
    id: "PLW-5247",
    name: { de: "Hatobohei", hu: "Hatobohei", ro: "Hatobohei", en: "Hatobohei" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M3.05,1410.60L8.28,1407.40L14.60,1406.98L16.95,1410.18L13.71,1414.53L8.17,1417.46L2.04,1418.53L0.00,1415.58L3.05,1410.60ZM183.64,1430.04L187.78,1431.01L189.61,1434.87L184.66,1438.06L180.11,1437.00L179.16,1433.86L181.83,1431.07L183.64,1430.04Z"
  },
  {
    id: "PLW-5259",
    name: { de: "Sonsorol", hu: "Sonsorol", ro: "Sonsorol", en: "Sonsorol" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M302.89,783.45L301.08,779.29L302.85,778.42L304.66,780.06L302.89,783.45Z"
  },
  {
    id: "PLW-5246",
    name: { de: "Angaur", hu: "Angaur", ro: "Angaur", en: "Angaur" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M842.15,338.63L838.14,334.53L835.77,328.96L836.58,324.72L842.20,324.52L845.91,327.35L847.17,331.73L845.95,336.04L842.15,338.63Z"
  },
  {
    id: "PLW-5248",
    name: { de: "Kayangel", hu: "Kayangel", ro: "Kayangel", en: "Kayangel" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M995.09,0.00L998.58,0.04L1000.00,3.84L997.43,10.60L992.74,12.96L990.32,10.01L990.40,5.89L995.09,0.00Z"
  },
];
