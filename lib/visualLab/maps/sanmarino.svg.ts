// AUTO-GENERATED from ne_admin1_10m.geojson (admin-1 for SM)
import type { POI } from "../data/poi";

export const sanmarinoViewBox = "0 0 1000 1177";

export const SM_PROJECTION = {
  minLon: 12.38029085,
  maxLon: 12.49773015,
  minLat: 43.88753045,
  maxLat: 43.98709255,
  width: 1000,
  height: 1177,
};

export function projectCoordsSM(lon: number, lat: number): [number, number] {
  const x = (lon - SM_PROJECTION.minLon) * (SM_PROJECTION.width / (SM_PROJECTION.maxLon - SM_PROJECTION.minLon));
  const y = (SM_PROJECTION.maxLat - lat) * (SM_PROJECTION.height / (SM_PROJECTION.maxLat - SM_PROJECTION.minLat));
  return [x, y];
}

export interface SanmarinoRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const sanmarinoMap: SanmarinoRegionPath[] = [
  {
    "id": "SM-001",
    "name": {
      "de": "Serravalle",
      "hu": "Serravalle",
      "ro": "Serravalle",
      "en": "Serravalle"
    },
    "capital": "",
    "labelX": 686.43,
    "labelY": 236.9,
    "path": "M867.42,53.5L927.26,165.3L940.45,260.65L868.82,294L788.44,322.69L717.26,415.16L650.65,316.32L577.16,383.28L542.72,303.57L545.01,227.04L522.04,214.29L460.03,239.8L399.83,209.28L621.89,95.04L867.42,53.5Z"
  },
  {
    "id": "SM-002",
    "name": {
      "de": "Domagnano",
      "hu": "Domagnano",
      "ro": "Domagnano",
      "en": "Domagnano"
    },
    "capital": "",
    "labelX": 769.79,
    "labelY": 443.73,
    "path": "M940.45,260.65L954.55,362.62L947.09,449.12L917.05,482.12L864.23,514.01L838.97,533.13L772.37,536.32L728.74,596.9L655.24,635.17L584.05,600.09L549.6,552.26L561.08,472.56L577.16,383.28L650.65,316.32L717.26,415.16L788.44,322.69L868.82,294L940.45,260.65Z"
  },
  {
    "id": "SM-003",
    "name": {
      "de": "Faetano",
      "hu": "Faetano",
      "ro": "Faetano",
      "en": "Faetano"
    },
    "capital": "",
    "labelX": 812.13,
    "labelY": 626.96,
    "path": "M947.09,449.12L936.94,566.66L875.35,684.38L867.42,699.54L845.42,724.59L832.22,755.13L779.26,749.94L747.11,762.7L717.26,740.38L735.62,698.93L733.32,667.05L689.69,667.05L655.24,635.17L728.74,596.9L772.37,536.32L838.97,533.13L864.23,514.01L917.05,482.12L947.09,449.12Z"
  },
  {
    "id": "SM-004",
    "name": {
      "de": "Montegiardino",
      "hu": "Montegiardino",
      "ro": "Montegiardino",
      "en": "Montegiardino"
    },
    "capital": "",
    "labelX": 768.35,
    "labelY": 827.8,
    "path": "M832.22,755.13L827.69,792.55L834.44,828.17L716.17,1028.72L705.77,944.45L712.66,871.11L721.85,826.47L742.51,791.4L747.11,762.7L779.26,749.94L832.22,755.13Z"
  },
  {
    "id": "SM-005",
    "name": {
      "de": "Fiorentino",
      "hu": "Fiorentino",
      "ro": "Fiorentino",
      "en": "Fiorentino"
    },
    "capital": "",
    "labelX": 638.7,
    "labelY": 917.3,
    "path": "M716.17,1028.72L682.61,1085.63L519.19,1109.08L501.38,1030.53L466.92,982.7L503.67,934.87L517.45,858.35L590.94,858.35L657.54,823.29L717.26,740.38L747.11,762.7L742.51,791.4L721.85,826.47L712.66,871.11L705.77,944.45L716.17,1028.72Z"
  },
  {
    "id": "SM-006",
    "name": {
      "de": "Chiesanuova",
      "hu": "Chiesanuova",
      "ro": "Chiesanuova",
      "en": "Chiesanuova"
    },
    "capital": "",
    "labelX": 348.69,
    "labelY": 972.7,
    "path": "M519.19,1109.08L418.59,1123.5L347.55,1086.64L164.26,991.55L82.37,817.84L161.48,813.71L244.15,826.47L349.8,874.3L356.69,915.74L356.69,954.01L393.43,982.7L466.92,982.7L501.38,1030.53L519.19,1109.08Z"
  },
  {
    "id": "SM-007",
    "name": {
      "de": "San Marino",
      "hu": "San Marino",
      "ro": "San Marino",
      "en": "San Marino"
    },
    "capital": "",
    "labelX": 318.15,
    "labelY": 784.92,
    "path": "M82.37,817.84L45.45,739.55L152.29,724.44L232.67,695.74L290.09,660.67L324.53,616.03L322.24,549.08L370.46,600.09L434.77,635.17L480.7,698.93L512.85,785.02L517.45,858.35L503.67,934.87L466.92,982.7L393.43,982.7L356.69,954.01L356.69,915.74L349.8,874.3L244.15,826.47L161.48,813.71L82.37,817.84Z"
  },
  {
    "id": "SM-008",
    "name": {
      "de": "Acquaviva",
      "hu": "Acquaviva",
      "ro": "Acquaviva",
      "en": "Acquaviva"
    },
    "capital": "",
    "labelX": 265.33,
    "labelY": 515.14,
    "path": "M45.45,739.55L130.82,457.31L261.91,324.29L308.92,276.58L349.8,309.94L386.54,357.77L393.43,424.73L352.1,456.61L324.53,440.66L324.53,469.37L322.24,549.08L324.53,616.03L290.09,660.67L232.67,695.74L152.29,724.44L45.45,739.55Z"
  },
  {
    "id": "SM-009",
    "name": {
      "de": "Borgo Maggiore",
      "hu": "Borgo Maggiore",
      "ro": "Borgo Maggiore",
      "en": "Borgo Maggiore"
    },
    "capital": "",
    "labelX": 492.2,
    "labelY": 505.36,
    "path": "M308.92,276.58L349.95,234.94L399.83,209.28L460.03,239.8L522.04,214.29L545.01,227.04L542.72,303.57L577.16,383.28L561.08,472.56L549.6,552.26L584.05,600.09L655.24,635.17L689.69,667.05L733.32,667.05L735.62,698.93L717.26,740.38L657.54,823.29L590.94,858.35L517.45,858.35L512.85,785.02L480.7,698.93L434.77,635.17L370.46,600.09L322.24,549.08L324.53,469.37L324.53,440.66L352.1,456.61L393.43,424.73L386.54,357.77L349.8,309.94L308.92,276.58Z"
  }
];
