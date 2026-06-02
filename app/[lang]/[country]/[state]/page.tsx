import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/seo/Breadcrumb";
import PoiGalleryCard from "@/components/seo/PoiGalleryCard";
import StructuredData, { createStateStructuredData } from "@/components/seo/StructuredData";
import { bundeslandSubregions } from "@/lib/visualLab/maps/bundeslandSubregions";
import { mapSlugForCountry } from "@/lib/seo/countryMapSlug";
import {
  COUNTRY_COPY,
  getCountryCopy,
  SEO_COPY,
  absoluteUrl,
  getStateAlternates,
  groupPoisForState,
  isLang,
  stateDescription,
  stateHasIndexablePois,
} from "@/lib/seo/routes";
import {
  SUPPORTED_LANGS,
  buildCountryPath,
  buildStatePath,
  countrySlugFor,
  findRegionByStateSlug,
  getCountryId,
  regions,
  stateSlugFor,
} from "@/lib/seo/slugs";
import {
  TYPE_BUCKETS,
  TYPE_HEADINGS,
  TYPE_INDEX_COUNTRIES,
  getPoisForCountryBucket,
  typeSlugFor,
} from "@/lib/seo/typeIndex";

export const dynamicParams = false;

export function generateStaticParams() {
  return SUPPORTED_LANGS.flatMap((lang) =>
    regions.map((state) => ({
      lang,
      country: countrySlugFor(lang, getCountryId(state.id)),
      state: stateSlugFor(state.id, lang),
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; country: string; state: string }>;
}): Promise<Metadata> {
  const { lang, country, state } = await params;
  if (!isLang(lang)) return {};
  const region = findRegionByStateSlug(lang, state, country);
  if (!region) return {};

  const countryId = getCountryId(region.id);
  if (country !== countrySlugFor(lang, countryId)) return {};

  const title = `${region.name[lang] || region.name.de} | Plizio Visual Lab`;
  const description = stateDescription(region.id, lang);

  // Thin state-oldal (0 indexalhato POI, pl. RO traditional-region) → noindex.
  const indexable = stateHasIndexablePois(region.id);

  return {
    title,
    description,
    ...(indexable ? {} : { robots: { index: false, follow: true } }),
    alternates: {
      canonical: absoluteUrl(buildStatePath(lang, region.id)),
      languages: { ...getStateAlternates(region.id), "x-default": absoluteUrl(buildStatePath("en", region.id)) },
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(buildStatePath(lang, region.id)),
      type: "article",
      images: region.image ? [{ url: absoluteUrl(region.image) }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: region.image ? [absoluteUrl(region.image)] : undefined,
    },
  };
}

export default async function StatePage({
  params,
}: {
  params: Promise<{ lang: string; country: string; state: string }>;
}) {
  const { lang, country, state } = await params;
  if (!isLang(lang)) notFound();
  // Pass the country segment so a shared state slug across countries resolves to the
  // region that actually belongs to this country (fixes /de/rumaenien/oascher-land/ 404).
  const region = findRegionByStateSlug(lang, state, country);
  if (!region) notFound();

  const countryId = getCountryId(region.id);
  if (country !== countrySlugFor(lang, countryId)) notFound();

  const copy = SEO_COPY[lang];
  const countryCopy = getCountryCopy(countryId, lang);
  const groups = groupPoisForState(region.id);
  const subregions = (bundeslandSubregions as any)[region.id];
  const mapSlug = mapSlugForCountry(countryId);
  const mapHref = mapSlug ? `/${mapSlug}-map/${lang === "hu" ? "" : lang + "/"}` : null;
  const MAP_CTA = ({ de: "Auf der interaktiven Karte ansehen", hu: "Megtekintés az interaktív térképen", ro: "Vezi pe harta interactivă", en: "View on the interactive map" } as const)[lang];

  return (
    <main className="min-h-screen bg-[#020408] text-white">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: copy.home, href: "/" },
            { name: countryCopy.name, href: buildCountryPath(lang, countryId) },
            { name: (region.name as Record<string, string | undefined>)[lang] || region.name.de || "", href: buildStatePath(lang, region.id) },
          ]}
        />

        <div className="mt-6 rounded-[28px] border border-cyan-500/15 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_55%),linear-gradient(180deg,rgba(7,17,27,0.98),rgba(2,4,8,0.98))] p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-4">
                {region.coa ? <img src={region.coa} alt="" loading="lazy" className="h-16 w-16 rounded-2xl border border-white/10 bg-white/5 object-contain p-2" /> : null}
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">{copy.states}</p>
                  <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">{region.name[lang] || region.name.de}</h1>
                </div>
              </div>
              <p className="mt-5 text-base leading-7 text-white/72">{region.description?.[lang] || region.description?.de || ""}</p>
              {(() => {
                const advanced = (region as { descriptionAdvanced?: Record<string, string> }).descriptionAdvanced?.[lang]
                  || (region as { descriptionAdvanced?: Record<string, string> }).descriptionAdvanced?.de;
                return advanced ? <p className="mt-4 text-base leading-7 text-white/72">{advanced}</p> : null;
              })()}
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  ...(region.facts?.[lang] || region.facts?.de || []),
                  ...(((region as { factsAdvanced?: Record<string, string[]> }).factsAdvanced?.[lang]
                    || (region as { factsAdvanced?: Record<string, string[]> }).factsAdvanced?.de
                    || []) as string[]),
                ].slice(0, 10).map((fact) => (
                  <span key={fact} className="rounded-full border border-cyan-500/15 bg-cyan-500/8 px-3 py-1 text-sm text-cyan-100/85">
                    {fact}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full max-w-md rounded-3xl border border-cyan-500/15 bg-[#07111b]/80 p-4">
              {subregions ? (
                <>
                  <svg viewBox={subregions.viewBox} className="h-auto w-full">
                    {subregions.children.map((entry: any) => (
                      <path
                        key={entry.id}
                        d={entry.path}
                        fill="rgba(8, 47, 73, 0.75)"
                        stroke="rgba(34, 211, 238, 0.28)"
                        strokeWidth="0.8"
                      />
                    ))}
                  </svg>
                  {mapHref ? (
                    <a href={mapHref} className="mt-3 flex items-center justify-center gap-2 rounded-2xl border border-cyan-400/25 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-500/20">
                      {MAP_CTA} →
                    </a>
                  ) : null}
                </>
              ) : mapHref ? (
                <a href={mapHref} className="group flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-2xl border border-cyan-400/25 bg-cyan-500/[0.06] text-center transition hover:border-cyan-300/50 hover:bg-cyan-500/[0.12]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/15 text-2xl text-cyan-200 transition group-hover:scale-105" aria-hidden>🗺️</span>
                  <span className="px-4 text-sm font-medium text-cyan-100">{MAP_CTA} →</span>
                </a>
              ) : (
                <div className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-sm text-white/45">
                  Visual Lab
                </div>
              )}
            </div>
          </div>
        </div>

        {([
          ["cities", copy.cities],
          ["nature", copy.nature],
          ["history", copy.history],
          ["landmarks", copy.landmarks],
        ] as const).map(([key, title]) => {
          const items = groups[key];
          if (!items.length) return null;
          return (
            <section key={key} className="mt-10">
              <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((poi) => (
                  <PoiGalleryCard key={poi.id} poi={poi} lang={lang} />
                ))}
              </div>
            </section>
          );
        })}

        {TYPE_INDEX_COUNTRIES.includes(countryId) ? (
          <section className="mt-12 rounded-3xl border border-cyan-500/15 bg-[#07111b]/80 p-6">
            <h2 className="text-xl font-semibold text-white/90">{countryCopy.name}</h2>
            <p className="mt-1 text-sm text-white/55">
              {lang === "de" ? "Nach Kategorie durchstöbern" : lang === "hu" ? "Böngészés kategória szerint" : lang === "ro" ? "Răsfoiește pe categorii" : "Browse by category"}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {Object.keys(TYPE_BUCKETS).map((bucket) => {
                const count = getPoisForCountryBucket(countryId, bucket).length;
                if (count < 4) return null;
                const slug = typeSlugFor(bucket, lang);
                const heading = TYPE_HEADINGS[bucket][lang];
                return (
                  <li key={bucket}>
                    <a
                      href={`/${lang}/${countrySlugFor(lang, countryId)}/category/${slug}/`}
                      className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/8 px-4 py-1.5 text-sm text-cyan-100/90 hover:border-cyan-300/40 hover:bg-cyan-500/15"
                    >
                      {heading}
                      <span className="text-[0.7rem] text-white/45">{count}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </section>
        ) : null}
      </section>
      <StructuredData data={createStateStructuredData(region, lang)} />
    </main>
  );
}
