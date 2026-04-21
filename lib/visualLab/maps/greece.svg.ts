export const greeceViewBox = "564.7 529.61 104.54 142.89";

export const GREECE_PROJECTION = {
  minLon: 19.3,   // Greece west
  maxLon: 28.3,
  minLat: 34.8,
  maxLat: 41.8,
  width: 1000,
  height: 900,
};

export function projectCoordsGR(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface GreeceRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

// TODO (reggel): régió path-ok countries.geojson-ból generálva
export const greeceMap: GreeceRegionPath[] = [
  {
    id: "GR",
    name: { de: "", hu: "", ro: "", en: "" },
    capital: "Athen",
    labelX: -9999,
    labelY: -9999,
    path: "M621.475,649.208L629.108,654.99L639.976,654.014L650.367,655.23L650.029,658.206L657.638,656.154L655.893,661.192L635.786,662.64L635.926,659.828L618.892,656.497ZM662.025,544.412L657.702,556.035L654.384,558.106L645.877,557.581L638.591,555.835L621.682,560.631L631.36,570.939L624.267,573.911L616.49,573.93L609.104,564.512L606.483,568.534L609.603,579.413L616.588,587.896L611.325,591.837L619.101,600.088L626.013,605.252L626.222,615.255L613.307,610.573L617.425,619.569L608.559,621.413L613.854,636.815L604.581,637.032L593.131,629.464L587.895,615.431L585.452,603.646L580.006,595.44L572.853,585.187L571.908,580.035L578.4,571.212L579.238,565.265L583.776,562.602L584.056,557.762L593.189,556.127L598.512,552.08L606.078,552.44L608.375,549.204L611.036,548.587L621.364,549.124L632.542,544.005L642.38,550.51L655.071,548.756L655.223,539.461Z"
  }
];
