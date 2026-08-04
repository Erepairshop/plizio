export const POI_IMAGE_OVERRIDES: Readonly<Record<string, string>> = {
  "germany-teutoburger-wald-ridge-relief-v2":
    "/poi-images/germany-teutoburger-wald-ridge-relief-v2-photo-20260804.webp",
};

export function applyPoiImageOverride<T extends { id?: string; image?: string } | null | undefined>(poi: T): T {
  if (!poi) return poi;
  const image = poi.id ? POI_IMAGE_OVERRIDES[poi.id] : undefined;
  return image && image !== poi.image ? { ...poi, image } : poi;
}
