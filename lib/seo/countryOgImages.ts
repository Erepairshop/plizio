// Verified export assets only. Unknown countries get the neutral Atlas card,
// not an invented <country>-full.jpg path or another country's photograph.
export const COUNTRY_OG_IMAGES: Record<string, string> = {
  germany: "/geo-images/EU-DE.webp",
  france: "/geo-images/EU-FR.webp",
  italy: "/geo-images/italy/italy-main.webp",
  spain: "/geo-images/spain/spain.webp",
  austria: "/geo-images/austria/austria.webp",
  "united-kingdom": "/geo-images/united-kingdom/united-kingdom.webp",
  romania: "/geo-images/romania/RO.webp",
  hungary: "/geo-images/hungary/HU.webp",
};
export const COUNTRY_OG_FALLBACK = "/og/atlas.png";
export function getCountryOgImage(countryId: string): string {
  return Object.hasOwn(COUNTRY_OG_IMAGES, countryId) ? COUNTRY_OG_IMAGES[countryId] : COUNTRY_OG_FALLBACK;
}
