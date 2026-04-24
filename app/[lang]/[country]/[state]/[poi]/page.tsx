import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/seo/Breadcrumb";
import PoiGalleryCard from "@/components/seo/PoiGalleryCard";
import StructuredData, { createPoiStructuredData, createFaqStructuredData } from "@/components/seo/StructuredData";
import {
  COUNTRY_COPY,
  SEO_COPY,
  absoluteUrl,
  getPoiAlternates,
  getPoiByRouteParams,
  getRelatedPois,
  getVisualLabHref,
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
import { getLearnMoreSuggestion, learnMoreCtaCopy } from "@/lib/seo/poiLearnMore";

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
  return SUPPORTED_LANGS.flatMap((lang) =>
    pois
      .filter((poi) => poi && poi.type !== "region" && poi.type !== "country")
      .map((poi) => ({
        lang,
        country: countrySlugFor(lang, getCountryId(poi.parent)),
        state: buildStatePath(lang, poi.parent).split("/").filter(Boolean)[2],
        poi: buildPoiPath(lang, poi).split("/").filter(Boolean)[3],
      })),
  );
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

  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(buildPoiPath(resolved.lang as Lang, poi)),
      languages: { ...getPoiAlternates(poi), "x-default": absoluteUrl(buildPoiPath("en", poi)) },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(buildPoiPath(resolved.lang as Lang, poi)),
      type: "article",
      images: poi.image ? [{ url: absoluteUrl(poi.image) }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: poi.image ? [absoluteUrl(poi.image)] : undefined,
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
  const countryCopy = COUNTRY_COPY[countryId][resolved.lang as Lang];
  const related = getRelatedPois(poi);
  const geoFacts = geographicFacts(poi);
  const description = poi.description[resolved.lang as Lang] || poi.description.de;
  const advanced = poi.descriptionAdvanced?.[resolved.lang as Lang] || poi.descriptionAdvanced?.de;
  const facts = [
    ...(poi.facts?.[resolved.lang as Lang] || poi.facts?.de || []),
    ...((poi.factsAdvanced?.[resolved.lang as Lang] || poi.factsAdvanced?.de || []) as string[]),
  ];

  return (
    <main className="min-h-screen bg-[#020408] text-white">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: copy.home, href: "/" },
            { name: countryCopy.name, href: buildCountryPath(resolved.lang as Lang, countryId) },
            { name: region.name[resolved.lang as Lang] || region.name.de, href: buildStatePath(resolved.lang as Lang, region.id) },
            { name: poi.name[resolved.lang as Lang] || poi.name.de, href: buildPoiPath(resolved.lang as Lang, poi) },
          ]}
        />

        <article className="mt-6 rounded-[28px] border border-cyan-500/15 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_55%),linear-gradient(180deg,rgba(7,17,27,0.98),rgba(2,4,8,0.98))] overflow-hidden">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="min-h-[320px] bg-[#07111b]">
              {poi.image ? (
                <img src={poi.image} alt={poiImageAlt(poi, resolved.lang as Lang, region.name[resolved.lang as Lang] || region.name.de, countryCopy.name)} loading="lazy" className="h-full w-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-white/35">Visual Lab</div>
              )}
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                {poi.coa ? <img src={poi.coa} alt="" loading="lazy" className="h-16 w-16 rounded-2xl border border-white/10 bg-white/5 object-contain p-2" /> : null}
                <div className="min-w-0 flex-1">
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Plizio Visual Lab</p>
                  <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">{poi.name[resolved.lang as Lang] || poi.name.de}</h1>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {poi.audio ? (
                  <audio controls preload="none" aria-label={`${poi.name[resolved.lang as Lang] || poi.name.de} pronunciation`} className="max-w-full">
                    <source src={poi.audio} />
                  </audio>
                ) : null}
                <a href={getVisualLabHref(poi)} className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200 hover:border-cyan-300/50">
                  {copy.backToMap}
                </a>
              </div>

              <div className="mt-6 space-y-4 text-base leading-7 text-white/75">
                <p>{description}</p>
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
                        <li>{poi.coords[1]}, {poi.coords[0]}</li>
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
          const faqList = poi.faq?.[resolved.lang as Lang];
          if (!faqList || faqList.length === 0) return null;
          return (
            <section className="mt-10">
              <h2 className="text-2xl font-semibold tracking-tight">FAQ</h2>
              <div className="mt-4 space-y-3">
                {faqList.map((item, i) => (
                  <details key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 open:bg-white/[0.05]">
                    <summary className="cursor-pointer text-base font-semibold text-cyan-200">{item.q}</summary>
                    <p className="mt-2 text-white/75 leading-7">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          );
        })()}

        {related.length ? (
          <section className="mt-10">
            <h2 className="text-2xl font-semibold tracking-tight">{copy.related}</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <PoiGalleryCard key={item.id} poi={item} lang={resolved.lang as Lang} />
              ))}
            </div>
          </section>
        ) : null}
      </section>
      <StructuredData data={createPoiStructuredData(poi, resolved.lang as Lang)} />
      {(() => {
        const faqSchema = createFaqStructuredData(poi, resolved.lang as Lang);
        return faqSchema ? <StructuredData data={faqSchema} /> : null;
      })()}
    </main>
  );
}
