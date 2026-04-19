export interface SubRegion {
  id: string;
  name: string;
  labelX: number;
  labelY: number;
  path: string;
}

export interface ProjectionParams {
  minLon: number;
  maxLon: number;
  minLat: number;
  maxLat: number;
  latStretch: number;
  scale: number;
  offX: number;
  offY: number;
}

export interface HungaryDetail {
  viewBox: string;
  type: "megye";
  projection: ProjectionParams;
  children: SubRegion[];
}

export const hungarySubregions: Record<string, HungaryDetail> = {
  HU: {
    viewBox: "0 0 500 350",
    type: "megye",
    projection: {
      minLon: 16.0,
      maxLon: 23.0,
      minLat: 45.7,
      maxLat: 48.6,
      latStretch: 1.4,
      scale: 1,
      offX: 0,
      offY: 0,
    },
    children: [],
  },
};
