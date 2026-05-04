import type { POI } from "@/lib/visualLab/data/poi";
import { POI_IMAGE_IDS } from "@/lib/visualLab/data/poiImageManifest";

export function getPoiImage(poi: Pick<POI, "id" | "image">): string | undefined {
  if (poi.image) return poi.image;
  if (poi.id && POI_IMAGE_IDS.has(poi.id)) return `/poi-images/${poi.id}.webp`;
  return undefined;
}
