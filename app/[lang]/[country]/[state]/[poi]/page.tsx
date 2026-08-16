import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/seo/Breadcrumb";
import PoiGalleryCard from "@/components/seo/PoiGalleryCard";
import PoiGameCta from "@/components/seo/PoiGameCta";
import PoiDidYouKnow from "@/components/seo/PoiDidYouKnow";
import PoiMiniMap from "@/components/seo/PoiMiniMap";
import PoiRecentNews from "@/components/seo/PoiRecentNews";
import PoiNearbyList from "@/components/seo/PoiNearbyList";
import PoiWeather from "@/components/seo/PoiWeather";
import StructuredData, { createPoiStructuredData, createFaqStructuredData, createSightsStructuredData, createBreadcrumbStructuredData } from "@/components/seo/StructuredData";
import { getRelatedPoisGrouped, getNearbyPois } from "@/lib/seo/relatedPoisGrouped";
import {
  TYPE_BUCKETS,
  TYPE_HEADINGS,
  TYPE_INDEX_COUNTRIES,
  isIndexableCategory,
  typeSlugFor,
} from "@/lib/seo/typeIndex";
import {
  COUNTRY_COPY,
  getCountryCopy,
  SEO_COPY,
  absoluteUrl,
  getPoiAlternates,
  getPoiByRouteParams,
  getRelatedPois,
  hasIndexableContent,
  isLang,
  osmHref,
  poiDescription,
  poiTitle,
} from "@/lib/seo/routes";
import {
  SUPPORTED_LANGS,
  buildCountryPath,
  buildPoiPath,
  buildStatePath,
  countrySlugFor,
  getCountryId,
  pois,
  type Lang,
} from "@/lib/seo/slugs";
import type { POI } from "@/lib/visualLab/data/poi";
import { poiImageAlt } from "@/lib/seo/imageAlt";
import { getPoiImage } from "@/lib/seo/resolvePoiImage";
import { getLearnMoreSuggestion, learnMoreCtaCopy } from "@/lib/seo/poiLearnMore";
import { getFaqForPoi } from "@/lib/visualLab/data/faq";

export const dynamicParams = false;

type Params = { lang: string; country: string; state: string; poi: string };

function geographicFacts(poi: POI) {
  return [
    poi.elevation ? `${poi.elevation} m` : null,
    poi.length ? `${poi.length} km` : null,
    poi.area ? `${poi.area} km²` : null,
  ].filter(Boolean) as string[];
}

export function generateStaticParams() {
  // Interleave by POI×lang so a slice cuts fairly across all 4 languages.
  // Order: [de×poi1, hu×poi1, ro×poi1, en×poi1, de×poi2, hu×poi2, ...] — first
  // LIMIT/4 POIs get all 4 langs (vs. previous "DE full + HU partial + 0 RO/EN").
  const out: { lang: string; country: string; state: string; poi: string }[] = [];
  for (const poi of pois) {
    if (!poi || !poi.parent || poi.type === "region" || poi.type === "country") continue;
    if (!hasIndexableContent(poi)) continue;
    for (const lang of SUPPORTED_LANGS) {
      const country = countrySlugFor(lang, getCountryId(poi.parent!));
      const statePath = buildStatePath(lang, poi.parent!).split("/").filter(Boolean);
      const poiPath = buildPoiPath(lang, poi).split("/").filter(Boolean);
      const state = statePath[2];
      const poiSlug = poiPath[3];
      if (!country || !state || !poiSlug) continue;
      out.push({ lang, country, state, poi: poiSlug });
    }
  }
  const LIMIT = Number(process.env.GSP_LIMIT ?? -1);
  if (LIMIT === 0) {
    console.error("[gSP] GSP_LIMIT=0, returning 1 sample (POI HTML overlay handles all real pages)");
    return out.slice(0, 1);
  }
  if (LIMIT > 0 && out.length > LIMIT) {
    console.error("[gSP] limiting", out.length, "->", LIMIT, "(interleaved)");
    return out.slice(0, LIMIT);
  }
  console.error("[gSP] returning", out.length);
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const resolved = await params;
  if (!isLang(resolved.lang)) return {};
  const match = getPoiByRouteParams(resolved.lang, resolved.country, resolved.state, resolved.poi);
  if (!match) return {};

  const { poi } = match;
  const title = poiTitle(poi, resolved.lang as Lang);
  const description = poiDescription(poi, resolved.lang as Lang);

  const ogImage = getPoiImage(poi);
  const indexable = hasIndexableContent(poi);
  return {
    title,
    description,
    robots: indexable ? undefined : { index: false, follow: true },
    alternates: {
      canonical: absoluteUrl(buildPoiPath(resolved.lang as Lang, poi)),
      languages: { ...getPoiAlternates(poi), "x-default": absoluteUrl(buildPoiPath("en", poi)) },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(buildPoiPath(resolved.lang as Lang, poi)),
      type: "article",
      images: ogImage ? [{ url: absoluteUrl(ogImage) }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ogImage ? [absoluteUrl(ogImage)] : undefined,
    },
  };
}

export default async function PoiPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const resolved = await params;
  if (!isLang(resolved.lang)) notFound();
  const match = getPoiByRouteParams(resolved.lang, resolved.country, resolved.state, resolved.poi);
  if (!match) notFound();

  const { poi, region } = match;
  const countryId = getCountryId(region.id);
  const copy = SEO_COPY[resolved.lang as Lang];
  const countryCopy = getCountryCopy(countryId, resolved.lang as Lang);
  const related = getRelatedPois(poi);
  const grouped = getRelatedPoisGrouped(poi, 12);
  const nearby = getNearbyPois(poi, 80, 24);
  const nextHref = grouped.sameRegion[0] ? buildPoiPath(resolved.lang as Lang, grouped.sameRegion[0]) : undefined;
  const geoFacts = geographicFacts(poi);
  const description = (poi.description as Record<string, string> | undefined)?.[resolved.lang as Lang] || poi.description?.de || "";
  const advanced = (poi.descriptionAdvanced as Record<string, string> | undefined)?.[resolved.lang as Lang] || (poi.descriptionAdvanced as Record<string, string> | undefined)?.de || "";
  const facts = [
    ...((poi.facts as Record<string, string[]> | undefined)?.[resolved.lang as Lang] || poi.facts?.de || []),
    ...(((poi.factsAdvanced as Record<string, string[]> | undefined)?.[resolved.lang as Lang] || (poi.factsAdvanced as Record<string, string[]> | undefined)?.de || []) as string[]),
  ];
  const regionName = (region.name as Record<string, string | undefined> | undefined)?.[resolved.lang as Lang] || (region.name as Record<string, string | undefined> | undefined)?.de || region.id || "";
  const poiName = (poi.name as Record<string, string | undefined> | undefined)?.[resolved.lang as Lang] || (poi.name as Record<string, string | undefined> | undefined)?.de || poi.id || "";

  return (
    <main className="min-h-screen bg-[#020408] text-white">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: copy.home, href: "/" },
            { name: countryCopy.name, href: buildCountryPath(resolved.lang as Lang, countryId) },
            { name: regionName, href: buildStatePath(resolved.lang as Lang, region.id) },
            { name: poiName, href: buildPoiPath(resolved.lang as Lang, poi) },
          ]}
        />

        <article className="mt-6 rounded-[28px] border border-cyan-500/15 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_55%),linear-gradient(180deg,rgba(7,17,27,0.98),rgba(2,4,8,0.98))] overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="min-h-[320px] bg-[#07111b]">
              {(() => {
                const src = getPoiImage(poi);
                return src ? (
                  <img src={src} alt={poiImageAlt(poi, resolved.lang as Lang, regionName, countryCopy.name)} loading="lazy" className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-white/35">Plizio Atlas</div>
                );
              })()}
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                {poi.coa ? <img src={poi.coa} alt="" loading="lazy" className="h-16 w-16 rounded-2xl border border-white/10 bg-white/5 object-contain p-2" /> : null}
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Plizio Atlas</p>
                  <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">{poiName}</h1>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {poi.audio ? (
                  <audio controls preload="none" aria-label={`${poiName} pronunciation`} className="max-w-full">
                    <source src={poi.audio} />
                  </audio>
                ) : null}
                <a
                  href={`/postcard/?place=${encodeURIComponent(poiName)}&country=${encodeURIComponent(countryCopy.name)}&lang=${resolved.lang}&source=${encodeURIComponent(buildPoiPath(resolved.lang as Lang, poi))}${poi.coords ? `&lat=${poi.coords[1]}&lng=${poi.coords[0]}` : ""}${poi.type ? `&kind=${encodeURIComponent(poi.type)}` : ""}`}
                  className="inline-flex items-center rounded-full border border-amber-300/35 bg-amber-400/10 px-4 py-2 text-sm font-medium text-amber-100 hover:border-amber-200/60"
                >
                  {{ hu: "Képeslap készítése", de: "Postkarte erstellen", ro: "Creează o carte poștală", en: "Create a postcard" }[resolved.lang as Lang]}
                </a>
              </div>

              <div className="mt-6 space-y-4 text-base leading-7 text-white/75">
                <p className="poi-lead-paragraph">{description}</p>
                {advanced ? <p>{advanced}</p> : null}
              </div>

              {facts.length ? (
                <section className="mt-6">
                  <h2 className="text-lg font-semibold">{copy.facts}</h2>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-white/72">
                    {facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {(poi.historyPeriod || poi.historyYear || geoFacts.length) ? (
                <section className="mt-6 grid gap-6 sm:grid-cols-2">
                  {(poi.historyPeriod || poi.historyYear) ? (
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">{copy.history}</h2>
                      <p className="mt-3 text-white/80">{String(poi.historyPeriod || "")}</p>
                      <p className="mt-1 text-white/60">{Array.isArray(poi.historyYear) ? `${poi.historyYear[0]}–${poi.historyYear[1]}` : poi.historyYear}</p>
                    </div>
                  ) : null}
                  {geoFacts.length ? (
                    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">{copy.geography}</h2>
                      <ul className="mt-3 space-y-2 text-white/80">
                        {geoFacts.map((item) => <li key={item}>{item}</li>)}
                        {poi.coords ? <li>{poi.coords[1]}, {poi.coords[0]}</li> : null}
                      </ul>
                    </div>
                  ) : null}
                </section>
              ) : null}

              <div className="mt-6">
                <a href={osmHref(poi)} target="_blank" rel="noreferrer" className="text-sm text-cyan-300 hover:text-cyan-200">
                  {copy.openMap}
                </a>
              </div>
            </div>
          </div>
        </article>

        {(() => {
          const s = getLearnMoreSuggestion(poi, resolved.lang as Lang);
          if (!s) return null;
          const copy = learnMoreCtaCopy(s, resolved.lang as Lang);
          return (
            <section className="mt-10">
              <div className="rounded-2xl border border-cyan-400/25 bg-gradient-to-br from-cyan-500/10 to-sky-500/5 p-5">
                <h2 className="text-xl font-bold text-cyan-200">{copy.title}</h2>
                <p className="mt-2 text-white/75">{copy.body}</p>
                <a
                  href={`${s.href}?grade=${s.grade}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-5 py-2.5 transition"
                >
                  {copy.cta}
                </a>
              </div>
            </section>
          );
        })()}

        {(() => {
          // FAQ now stored in separate lib/visualLab/data/faq/ table, lookup by POI id.
          // (Previously `poi.faq` inline was vulnerable to Gemini batch parse corruption.)
          const faqList = getFaqForPoi(poi.id, resolved.lang as Lang) ?? poi.faq?.[resolved.lang as Lang];
          if (!faqList || faqList.length === 0) return null;
          return (
            <section className="mt-10">
              <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
              <div className="mt-4 space-y-3">
                {faqList.map((item: { q: string; a: string }, i: number) => (
                  <details key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 open:bg-white/[0.05]">
                    <summary className="cursor-pointer text-base font-semibold text-cyan-200">{item.q}</summary>
                    <p className="mt-2 text-white/75 leading-7">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          );
        })()}

        <PoiDidYouKnow poi={poi} lang={resolved.lang as Lang} nextHref={nextHref} />
        <PoiGameCta poi={poi} lang={resolved.lang as Lang} />
        <PoiMiniMap poi={poi} lang={resolved.lang as Lang} candidates={nearby} />

        {grouped.sameRegion.length ? (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold tracking-tight">{copy.related}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {grouped.sameRegion.map((item) => (
                <PoiGalleryCard key={item.id} poi={item} lang={resolved.lang as Lang} />
              ))}
            </div>
          </section>
        ) : related.length ? (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold tracking-tight">{copy.related}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <PoiGalleryCard key={item.id} poi={item} lang={resolved.lang as Lang} />
              ))}
            </div>
          </section>
        ) : null}

        {grouped.sameTopic.length ? (() => {
          const bucket = Object.entries(TYPE_BUCKETS).find(([, types]) => types.includes(poi.type))?.[0];
          const showLink = bucket && TYPE_INDEX_COUNTRIES.includes(countryId) && isIndexableCategory(countryId, bucket);
          const seeAllHref = showLink ? `/${resolved.lang}/${countrySlugFor(resolved.lang as Lang, countryId)}/category/${typeSlugFor(bucket!, resolved.lang as Lang)}/` : null;
          const seeAllLabel = resolved.lang === "de" ? "Alle ansehen" : resolved.lang === "hu" ? "Összes megtekintése" : resolved.lang === "ro" ? "Vezi toate" : "View all";
          return (
            <section className="mt-10">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="text-2xl font-semibold tracking-tight">{poi.type} — {countryCopy.name}</h2>
                {seeAllHref ? (
                  <a href={seeAllHref} className="text-sm text-cyan-300 hover:text-cyan-200">
                    {seeAllLabel} →
                  </a>
                ) : null}
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {grouped.sameTopic.map((item) => (
                  <PoiGalleryCard key={item.id} poi={item} lang={resolved.lang as Lang} />
                ))}
              </div>
            </section>
          );
        })() : null}
        <PoiWeather coords={poi.coords as [number, number] | undefined} lang={resolved.lang as Lang} />
        <PoiNearbyList poi={poi} lang={resolved.lang as Lang} max={12} />
      </section>
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <PoiRecentNews poiId={poi.id} lang={resolved.lang as Lang} />
      </section>
      <StructuredData data={createBreadcrumbStructuredData([
        { name: copy.home, url: "/" },
        { name: countryCopy.name, url: buildCountryPath(resolved.lang as Lang, countryId) },
        { name: regionName, url: buildStatePath(resolved.lang as Lang, region.id) },
        { name: poiName, url: buildPoiPath(resolved.lang as Lang, poi) },
      ])} />
      <StructuredData data={createPoiStructuredData(poi, resolved.lang as Lang)} />
      {(() => {
        const faqSchema = createFaqStructuredData(poi, resolved.lang as Lang);
        return faqSchema ? <StructuredData data={faqSchema} /> : null;
      })()}
      {(() => {
        const sightsSchema = createSightsStructuredData(poi, resolved.lang as Lang);
        return sightsSchema ? <StructuredData data={sightsSchema} /> : null;
      })()}
    </main>
  );
}
