import {
  SUPPORTED_LANGS,
  buildPoiPath,
  pois,
  type Lang,
} from "@/lib/seo/slugs";
import { SITE_URL, poiTitle, poiDescription } from "@/lib/seo/routes";
import { getPoiImage } from "@/lib/seo/resolvePoiImage";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang: `poi-${lang}.xml` }));
}

const BUILD_DATE = new Date().toUTCString();

const FEED_TITLE: Record<Lang, string> = {
  de: "Plizio Visual Lab — Sehenswürdigkeiten",
  hu: "Plizio Visual Lab — Látnivalók",
  ro: "Plizio Visual Lab — Puncte de Interes",
  en: "Plizio Visual Lab — Points of Interest",
};

const FEED_DESC: Record<Lang, string> = {
  de: "Entdecke historische Orte, Naturschätze und Kulturschätze in Europa.",
  hu: "Fedezz fel történelmi helyeket, természeti kincseket és kulturális látnivalókat Európában.",
  ro: "Descoperă locuri istorice, comori naturale și culturale din Europa.",
  en: "Discover historical sites, natural wonders and cultural treasures across Europe.",
};

function escape(s: unknown): string {
  const str = typeof s === "string" ? s : (s == null ? "" : String(s));
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ lang: string }> },
) {
  const { lang: langParam } = await params;
  const langCode = langParam.replace(/^poi-/, "").replace(/\.xml$/, "");
  if (!SUPPORTED_LANGS.includes(langCode as Lang)) {
    return new Response("Not Found", { status: 404 });
  }
  const lang = langCode as Lang;

  // RSS-fogyasztok (Publisher Center, readerek) ~5-10 MB folott eldobjak a
  // feedet — a teljes POI-lista 30+ MB volt (53k item, parse-hiba 2026-06-06).
  // Tier-prioritassal (tier1 elore) max 500 item megy ki (~300 KB).
  const FEED_LIMIT = 500;
  const items = pois
    .map((poi) => ({ poi, src: getPoiImage(poi) }))
    .filter((x): x is { poi: typeof x.poi; src: string } => Boolean(x.poi && x.poi.parent && x.poi.type !== "region" && x.poi.type !== "country" && x.src))
    .sort((a, b) => ((a.poi as { tier?: number }).tier ?? 6) - ((b.poi as { tier?: number }).tier ?? 6))
    .slice(0, FEED_LIMIT)
    .map(({ poi, src }) => {
      const url = `${SITE_URL}${buildPoiPath(lang, poi)}`;
      const image = src.startsWith("http") ? src : `${SITE_URL}${src}`;
      const title = poiTitle(poi, lang);
      const desc = poiDescription(poi, lang);
      return `  <item>
    <title>${escape(title)}</title>
    <link>${escape(url)}</link>
    <guid isPermaLink="true">${escape(url)}</guid>
    <description>${escape(desc)}</description>
    <enclosure url="${escape(image)}" type="image/webp" length="0" />
    <media:content url="${escape(image)}" medium="image" />
    <pubDate>${BUILD_DATE}</pubDate>
  </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:media="http://search.yahoo.com/mrss/" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${escape(FEED_TITLE[lang])}</title>
  <link>${SITE_URL}/${lang}/</link>
  <atom:link href="${SITE_URL}/feed/poi-${lang}.xml" rel="self" type="application/rss+xml" />
  <description>${escape(FEED_DESC[lang])}</description>
  <language>${lang}</language>
  <lastBuildDate>${BUILD_DATE}</lastBuildDate>
${items}
</channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
