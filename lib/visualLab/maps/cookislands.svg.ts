// AUTO-GENERATED
export const cookislandsViewBox = "0 0 1000.00 1583.56";

export const CK_PROJECTION = {
  minLon: 194.175466, maxLon: 202.687185,
  minLat: -21.938897, maxLat: -8.94671,
  width: 1000.00, height: 1583.56,
};

export function projectCoordsCK(lon: number, lat: number): [number, number] {
  const p = CK_PROJECTION;
  if (lon < 0) lon += 360;
  const x = ((lon - p.minLon) / (p.maxLon - p.minLon)) * p.width;
  const y = p.height - ((lat - p.minLat) / (p.maxLat - p.minLat)) * p.height;
  return [x, y];
}

export interface CookislandsRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const cookislandsMap: CookislandsRegionPath[] = [
  {
    id: "COK-4952",
    name: { de: "Mangaia", hu: "Mangaia", ro: "Mangaia", en: "Mangaia" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M926.95,1576.08L928.51,1576.66L929.80,1577.81L932.20,1580.68L932.53,1582.03L931.19,1582.93L929.24,1583.41L927.76,1583.56L926.03,1583.35L924.80,1582.76L923.84,1581.73L922.94,1580.32L923.49,1578.88L924.54,1577.46L925.79,1576.44L926.95,1576.08Z"
  },
  {
    id: "COK-4954",
    name: { de: "Mitiaro", hu: "Mitiaro", ro: "Mitiaro", en: "Mitiaro" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M953.57,1318.86L953.34,1321.44L953.66,1324.79L953.54,1327.89L951.97,1329.67L951.97,1328.00L951.35,1326.79L950.55,1326.02L949.86,1325.11L949.56,1323.42L950.10,1322.44L952.68,1319.59L953.57,1318.86Z"
  },
  {
    id: "COK-4962",
    name: { de: "Penrhyn", hu: "Penrhyn", ro: "Penrhyn", en: "Penrhyn" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M926.23,4.15L923.75,4.15L921.78,3.57L919.60,2.18L918.29,0.75L918.93,0.00L926.23,3.39L926.23,4.15Z"
  },
  {
    id: "COK-4953",
    name: { de: "Rarotonga", hu: "Rarotonga", ro: "Rarotonga", en: "Rarotonga" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M708.05,1491.81L710.33,1491.91L712.68,1492.50L714.52,1493.69L715.27,1495.54L715.31,1498.01L715.09,1499.14L714.46,1500.12L711.22,1499.61L710.81,1499.70L708.58,1498.57L703.91,1498.93L702.36,1497.62L703.23,1496.71L703.94,1494.43L704.10,1492.96L705.04,1492.17L708.05,1491.81Z"
  },
  {
    id: "COK-4955",
    name: { de: "Mauke", hu: "Mauke", ro: "Mauke", en: "Mauke" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M1000.00,1366.15L999.39,1368.18L998.15,1369.07L996.77,1368.65L995.71,1366.83L995.75,1364.71L996.97,1363.98L998.64,1364.51L1000.00,1366.15Z"
  },
  {
    id: "COK-4950",
    name: { de: "Atiu", hu: "Atiu", ro: "Atiu", en: "Atiu" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M910.06,1346.53L909.66,1348.80L907.92,1349.64L905.74,1349.15L904.00,1347.33L903.38,1344.37L905.13,1343.93L907.83,1344.99L910.06,1346.53ZM887.74,1326.83L886.24,1325.54L886.80,1325.72L887.16,1326.06L887.74,1326.83ZM885.47,1324.16L884.75,1324.88L884.33,1324.97L884.49,1324.63L885.47,1324.16Z"
  },
  {
    id: "COK-4951",
    name: { de: "Aitutaki", hu: "Aitutaki", ro: "Aitutaki", en: "Aitutaki" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M810.57,1258.16L809.13,1257.56L807.63,1256.37L807.00,1255.25L808.16,1254.86L808.75,1255.50L809.07,1256.69L809.75,1257.56L811.41,1257.18L811.31,1257.54L811.14,1257.78L810.57,1258.16Z"
  },
  {
    id: "COK-4959",
    name: { de: "Pukapuka", hu: "Pukapuka", ro: "Pukapuka", en: "Pukapuka" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M0.00,235.86L1.02,235.68L1.50,235.66L1.98,235.80L1.23,236.75L0.68,237.05L0.29,236.75L0.00,235.86Z"
  },
  {
    id: "COK-4961",
    name: { de: "Manihiki", hu: "Manihiki", ro: "Manihiki", en: "Manihiki" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M568.43,174.95L567.48,174.05L567.23,173.66L569.17,174.81L574.08,179.91L568.43,174.95Z"
  },
  {
    id: "COK-4960",
    name: { de: "Rakahanga", hu: "Rakahanga", ro: "Rakahanga", en: "Rakahanga" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M556.47,132.66L558.58,131.73L557.93,132.82L556.56,133.82L556.47,132.66Z"
  },
  {
    id: "COK-4956",
    name: { de: "Palmerston", hu: "Palmerston", ro: "Palmerston", en: "Palmerston" },
    capital: "",
    labelX: 0, labelY: 0,
    path: "M709.54,1204.73L711.01,1204.50L712.26,1205.51L712.33,1206.51L711.91,1206.06L711.71,1205.27L711.35,1205.16L710.23,1207.42L710.19,1207.85L710.56,1210.50L709.81,1211.69L708.54,1211.63L707.70,1210.50L707.52,1209.00L708.04,1206.65L708.52,1205.84L709.54,1204.73Z"
  },
];
