import type { POI } from "@/lib/visualLab/data/poi";
import { absoluteUrl } from "@/lib/seo/routes";
import { getPoiImage } from "@/lib/seo/resolvePoiImage";
import { localizedStateName, type Lang } from "@/lib/seo/slugs";
import { getFaqForPoi } from "@/lib/visualLab/data/faq";

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
    description: poi.description?.[lang] || poi.description?.de || "",
    image: (() => { const s = getPoiImage(poi); return s ? absoluteUrl(s) : undefined; })(),
    geo: poi.coords ? {
      "@type": "GeoCoordinates",
      latitude: poi.coords[1],
      longitude: poi.coords[0],
    } : undefined,
    address: {
      "@type": "PostalAddress",
      addressCountry: countryCode,
    },
    sameAs,
    containedInPlace: localizedStateName(poi.parent ?? "", lang),
    inLanguage: lang,
    // Featured-snippet / voice-search hint: tell Google these CSS selectors
    // contain the canonical lead answer for this entity.
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".poi-lead-paragraph", "h1"],
    },
  };
}

export function createFaqStructuredData(poi: POI, lang: Lang) {
  const faqList = getFaqForPoi(poi.id, lang) ?? poi.faq?.[lang];
  if (!faqList || faqList.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((item: { q: string; a: string }) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
    inLanguage: lang,
  };
}

export function createStateStructuredData(state: POI, lang: Lang) {
  return {
    "@context": "https://schema.org",
    "@type": "AdministrativeArea",
    name: state.name[lang] || state.name.de,
    description: state.description?.[lang] || state.description?.de || "",
    image: state.image ? absoluteUrl(state.image) : undefined,
    inLanguage: lang,
  };
}

export function createBreadcrumbStructuredData(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.url),
    })),
  };
}

export function createSightsStructuredData(poi: POI, lang: Lang) {
  const sights = (poi as { sights?: Record<string, Array<{ name: string; text?: string; category?: string }>> }).sights;
  const list = sights?.[lang] || sights?.de || sights?.en;
  if (!list || list.length === 0) return null;
  const parentName = poi.name?.[lang] || poi.name?.de || poi.id;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Sehenswürdigkeiten — ${parentName}`,
    numberOfItems: list.length,
    itemListElement: list.slice(0, 50).map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "TouristAttraction",
        name: s.name,
        description: s.text || s.name,
        ...(s.category ? { additionalType: s.category } : {}),
        containedInPlace: {
          "@type": "Place",
          name: parentName,
        },
      },
    })),
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
