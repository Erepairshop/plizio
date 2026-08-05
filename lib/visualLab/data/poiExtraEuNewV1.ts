// @ts-nocheck
import { POI } from './poi';
import { euNewV1a } from './poiExtraEuNewV1a';
import { euNewV1b } from './poiExtraEuNewV1b';

const parentCorrections: Record<string, string> = {
  'spain-aranda-de-duero-cities-v2': 'ES-CL',
  'spain-cehegin-cities-v2': 'ES-MC',
};

export const euNewV1: POI[] = euNewV1a.concat(euNewV1b).map((poi) => {
  const parent = parentCorrections[poi.id];
  return parent ? { ...poi, parent } : poi;
});
