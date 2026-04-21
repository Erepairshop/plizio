export const swedenViewBox = "430.15 -202.69 208.55 487.63";

export const SWEDEN_PROJECTION = {
  minLon: 11.0,
  maxLon: 24.2,
  minLat: 55.3,
  maxLat: 69.1,
  width: 1000,
  height: 2200,
};

export function projectCoordsSE(lon: number, lat: number): [number, number] {
  const centerLon = 15, centerLat = 50, scale = 800;
  const lambda = lon * Math.PI / 180;
  const phi = lat * Math.PI / 180;
  const lambda0 = centerLon * Math.PI / 180;
  const x = scale * (lambda - lambda0);
  const y = -scale * Math.log(Math.tan(Math.PI / 4 + phi / 2)) -
            -scale * Math.log(Math.tan(Math.PI / 4 + (centerLat * Math.PI / 180) / 2));
  return [500 + x, 375 + y];
}

export interface SwedenRegionPath {
  id: string;
  name: { de: string; hu: string; ro: string; en: string };
  capital: string;
  labelX: number;
  labelY: number;
  path: string;
}

export const swedenMap: SwedenRegionPath[] = [
  {
    id: "SE",
    name: {"de":"Schweden","hu":"Svédország","ro":"Suedia","en":"Sweden"},
    capital: "Stockholm",
    labelX: 542.8,
    labelY: 148.5,
    path: "M600.296,-45.859L586.757,-22.476L588.937,-2.452L566.726,23.17L539.762,49.79L529.595,91.744L539.533,112.03L552.887,127.69L540.062,158.746L525.54,165.058L520.214,209.152L512.284,232.898L495.346,230.477L487.444,250.181L471.278,251.313L466.84,227.808L455.151,198.812L444.532,161.385L450.688,145.697L462.306,126.681L466.925,93.128L458.001,78.276L457.143,38.161L466.21,8.708L480.06,9.254L484.919,-3.482L479.834,-14.608L501.514,-61.972L515.481,-101.188L524.698,-127.324L538.107,-127.198L541.802,-148.216L568.118,-142.117L570.166,-167.45L578.827,-169.058L597.439,-150.108L619.234,-124.423L619.602,-68.994L624.315,-55.529ZM528.788,200.265L530.859,201.799L519.967,231.021L519.047,221.511ZM560.848,185.309L553.101,193.362L553.408,198.731L555.786,198.808L555.172,200.648L551.567,202.336L551.797,204.944L548.346,206.938L546.352,212.077L543.361,212.997L544.511,207.398L542.9,203.333L544.051,200.035L543.207,196.123L551.107,186.076L556.399,185.769L557.32,184.388L561.078,184.311ZM581.633,16.417L584.701,16.226L583.397,19.83L581.327,24.126L579.524,23.742L581.25,19.869L580.981,17.798Z"
  }
];
