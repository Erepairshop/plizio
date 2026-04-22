import { POI } from './poi';

export type SubjectLayer = {
  subject: "geographie" | "geschichte" | "sachkunde";
  poiTypes: POI["type"][];
};

export const layers: SubjectLayer[] = [
  {
    subject: "geographie",
    poiTypes: ["city", "river", "mountain", "lake", "island", "country", "region"]
  },
  {
    subject: "geschichte",
    poiTypes: ["historical", "landmark", "city"]
  },
  {
    subject: "sachkunde",
    poiTypes: ["city", "landmark", "lake", "mountain"]
  }
];
