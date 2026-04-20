import type { POI } from "@/lib/visualLab/data/poi";
import { absoluteUrl } from "@/lib/seo/routes";
import { localizedStateName, type Lang } from "@/lib/seo/slugs";

function poiSchemaType(poi: POI) {
  switch (poi.type) {
    case "state-capital":
    case "city":
      return "City";
    case "river":
      return "RiverBodyOfWater";
    case "mountain":
      return "Mountain";
    case "lake":
    case "sea":
      return "BodyOfWater";
    case "landmark":
      return "TouristAttraction";
    case "historical":
      return "LandmarksOrHistoricalBuildings";
    default:
      return "Place";
  }
}

export default function StructuredData({
  data,
}: {
  data: Record<string, unknown>;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function createPoiStructuredData(poi: POI, lang: Lang) {
  const wikiName = poi.name.en;
  const sameAs = wikiName ? `https://en.wikipedia.org/wiki/${encodeURIComponent(wikiName.replace(/ /g, "_"))}` : undefined;
  const countryCode = poi.parent ? poi.parent.split('-')[0] : "DE";

  return {
    "@context": "https://schema.org",
    "@type": poiSchemaType(poi),
    ...(poi.type === "island" ? { additionalType: "Island" } : {}),
    name: poi.name[lang] || poi.name.de,
    description: poi.description[lang] || poi.description.de,
    image: poi.image ? absoluteUrl(poi.image) : undefined,
    geo: {
      "@type": "GeoCoordinates",
      latitude: poi.coords[1],
      longitude: poi.coords[0],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: countryCode,
    },
    sameAs,
    containedInPlace: localizedStateName(poi.parent, lang),
    inLanguage: lang,
  };
}

export function createStateStructuredData(state: POI, lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "AdministrativeArea",
    name: state.name[lang] || state.name.de,
    description: state.description[lang] || state.description.de,
    image: state.image ? absoluteUrl(state.image) : undefined,
    inLanguage: lang,
  };
}

export function createCountryStructuredData(lang: Lang, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Country",
    name,
    description,
    image: absoluteUrl("/geo-images/germany-full.jpg"),
    inLanguage: lang,
  };
}
