import {
  SUPPORTED_LANGS,
  buildPoiPath,
  pois,
  type Lang,
} from "@/lib/seo/slugs";
import { existsSync, statSync } from "node:fs";
import { extname, resolve, sep } from "node:path";
import { SITE_URL, poiTitle, poiDescription } from "@/lib/seo/routes";
import { getPoiImage } from "@/lib/seo/resolvePoiImage";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang: `poi-${lang}.xml` }));
}

const BUILD_DATE = new Date().toUTCString();

const FEED_TITLE: Record<Lang, string> = {
  de: "Plizio Atlas: Sehenswürdigkeiten",
  hu: "Plizio Atlas: Látnivalók",
  ro: "Plizio Atlas: Puncte de interes",
  en: "Plizio Atlas: Points of Interest",
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

type FeedImage = {
  url: string;
  contentType: string;
  length: number;
};

const IMAGE_CONTENT_TYPES: Record<string, string> = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

function resolveFeedImage(src: string): FeedImage | undefined {
  const contentType = IMAGE_CONTENT_TYPES[extname(src).toLowerCase()];
  if (!contentType) return undefined;

  if (/^https?:\/\//i.test(src)) {
    return { url: src, contentType, length: 0 };
  }

  const pathname = `/${src.replace(/^\/+/, "")}`;
  const publicRoot = resolve(process.cwd(), "public");
  const diskPath = resolve(publicRoot, pathname.slice(1));
  if (!diskPath.startsWith(`${publicRoot}${sep}`) || !existsSync(diskPath)) {
    return undefined;
  }

  return {
    url: new URL(pathname, `${SITE_URL}/`).toString(),
    contentType,
    length: statSync(diskPath).size,
  };
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
  const rankedPois = pois
    .filter((poi) => Boolean(poi && poi.parent && poi.type !== "region" && poi.type !== "country"))
    .sort((a, b) => ((a as { tier?: number }).tier ?? 6) - ((b as { tier?: number }).tier ?? 6));
  const feedEntries: Array<{ poi: (typeof pois)[number]; image: FeedImage }> = [];
  for (const poi of rankedPois) {
    const src = getPoiImage(poi);
    const image = src ? resolveFeedImage(src) : undefined;
    if (!image) continue;
    feedEntries.push({ poi, image });
    if (feedEntries.length === FEED_LIMIT) break;
  }

  const items = feedEntries
    .map(({ poi, image }) => {
      const url = `${SITE_URL}${buildPoiPath(lang, poi)}`;
      const title = poiTitle(poi, lang);
      const desc = poiDescription(poi, lang);
      return `  <item>
    <title>${escape(title)}</title>
    <link>${escape(url)}</link>
    <guid isPermaLink="true">${escape(url)}</guid>
    <description>${escape(desc)}</description>
    <enclosure url="${escape(image.url)}" type="${image.contentType}" length="${image.length}" />
    <media:content url="${escape(image.url)}" type="${image.contentType}" fileSize="${image.length}" medium="image">
      <media:title type="plain">${escape(title)}</media:title>
    </media:content>
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
