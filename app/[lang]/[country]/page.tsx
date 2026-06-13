import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/seo/Breadcrumb";
import {
  TYPE_BUCKETS,
  TYPE_HEADINGS,
  TYPE_INDEX_COUNTRIES,
  getPoisForCountryBucket,
  typeSlugFor,
} from "@/lib/seo/typeIndex";
import StructuredData, { createCountryStructuredData } from "@/components/seo/StructuredData";
import { mapSlugForCountry } from "@/lib/seo/countryMapSlug";
import { sightsHubSlug, SIGHTS_HUB_LABEL, type HubLang } from "@/lib/seo/sightsHubs";
import { beachHubHref, BEACH_HUB_LABEL, citiesHubHref, CITIES_HUB_LABEL } from "@/lib/seo/themeHubs";
import {
  COUNTRY_COPY,
  getCountryCopy,
  SEO_COPY,
  countryMetadata,
  getCountryAlternates,
  SITE_URL,
  absoluteUrl,
  isLang,
} from "@/lib/seo/routes";
import {
  SUPPORTED_LANGS,
  COUNTRY_SLUGS,
  buildCountryPath,
  buildStatePath,
  countrySlugFor,
  getCountryId,
  regions,
  type Lang,
} from "@/lib/seo/slugs";

// Mind a 100+ orszag URL-jet ki kell adni a build-hez (statikus export miatt nincs ISR runtime).
export const dynamicParams = false;

export function generateStaticParams() {
  const countryIds = Object.keys(COUNTRY_SLUGS);
  return SUPPORTED_LANGS.flatMap((lang) =>
    countryIds.map((countryId) => ({ lang, country: countrySlugFor(lang, countryId) }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; country: string }>;
}): Promise<Metadata> {
  const { lang, country } = await params;
  if (!isLang(lang)) return {};
  
  // Reverse lookup: orszag-slug az aktualis nyelven -> countryId
  const countryId = Object.keys(COUNTRY_SLUGS).find(
    (cid) => COUNTRY_SLUGS[cid][lang] === country
  );
  if (!countryId) return {};

  return countryMetadata(lang, countryId);
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ lang: string; country: string }>;
}) {
  const { lang, country } = await params;
  if (!isLang(lang)) notFound();

  const countryId = Object.keys(COUNTRY_SLUGS).find(
    (cid) => COUNTRY_SLUGS[cid][lang] === country
  );
  if (!countryId) notFound();

  const copy = SEO_COPY[lang];
  const countryCopy = getCountryCopy(countryId, lang);
  const alternates = getCountryAlternates(countryId);

  // ISO2 prefix az aktualis orszaghoz (pl. "DE", "ZA"), getCountryId reverse-en at
  // EU/N.America: pelda mappingek a 3 hardcoded csoporthoz, egyebkent ISO2 prefix matching
  const countryRegions = regions.filter(r => {
    if (countryId === "romania") return r.id.startsWith("RO-");
    if (countryId === "hungary") return r.parent === "HU" || r.parent?.startsWith("HU-");
    if (countryId === "germany") return r.id.startsWith("DE-");
    // For all other countries: match via getCountryId on the region id
    try {
      return getCountryId(r.id) === countryId;
    } catch {
      return false;
    }
  });

  // Link to the rich static interactive map (public/<slug>-map/) instead of the
  // old inline SVG, which only had DE/RO/HU shapes and rendered Germany for every
  // other country. mapSlug is null for the handful without a static map.
  const mapSlug = mapSlugForCountry(countryId);
  const hubSlug = sightsHubSlug(countryId, lang);
  const beachHref = beachHubHref(lang as Lang, countryId);
  const citiesHref = citiesHubHref(lang as Lang, countryId);
  const mapHref = mapSlug ? `/${mapSlug}-map/${lang === "hu" ? "" : lang + "/"}` : null;
  const ML = ({
    de: { kicker: "Interaktive Karte", cta: `${countryCopy.name} entdecken`, sub: "Sehenswürdigkeiten, Städte, Karte & Suche", world: "Weltkarte ansehen", open: "Karte öffnen" },
    hu: { kicker: "Interaktív térkép", cta: `${countryCopy.name} felfedezése`, sub: "Látnivalók, városok, térkép és kereső", world: "Világtérkép", open: "Térkép megnyitása" },
    ro: { kicker: "Hartă interactivă", cta: `Explorează ${countryCopy.name}`, sub: "Obiective, orașe, hartă și căutare", world: "Harta lumii", open: "Deschide harta" },
    en: { kicker: "Interactive map", cta: `Explore ${countryCopy.name}`, sub: "Sights, cities, map & search", world: "World map", open: "Open map" },
  } as const)[lang as Lang];

  return (
    <main className="min-h-screen bg-[#020408] text-white">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: copy.home, href: "/" },
            { name: countryCopy.name, href: buildCountryPath(lang, countryId) },
          ]}
        />

        <div className={`mt-6 grid gap-8 ${countryRegions.length ? "lg:grid-cols-[1.15fr_0.85fr]" : ""}`}>
          <div className="rounded-[28px] border border-cyan-500/15 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_55%),linear-gradient(180deg,rgba(7,17,27,0.98),rgba(2,4,8,0.98))] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Plizio Visual Lab</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{countryCopy.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">{countryCopy.description}</p>

            {/* Interactive static-map CTA card (replaces the old inline SVG that only had DE/RO/HU shapes). */}
            {mapHref ? (
              <a
                href={mapHref}
                className="group mt-8 flex items-center justify-between gap-4 rounded-3xl border border-cyan-500/20 bg-[#07111b]/90 p-5 transition hover:border-cyan-300/50 hover:bg-cyan-500/[0.06]"
              >
                <div className="min-w-0">
                  <p className="text-[0.7rem] uppercase tracking-[0.24em] text-cyan-300/80">{ML.kicker}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{ML.cta}</p>
                  <p className="mt-0.5 text-sm text-white/55">{ML.sub}</p>
                </div>
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 text-xl text-cyan-200 transition group-hover:translate-x-0.5 group-hover:bg-cyan-500/20" aria-hidden>
                  →
                </span>
              </a>
            ) : (
              <a href={`/${lang}/`} className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/8 px-5 py-2 text-sm text-cyan-100/90 hover:border-cyan-300/40">
                {ML.world} →
              </a>
            )}

            {/* Inbound link to the "Top 50 Sehenswürdigkeiten" SEO hub (when one
                exists for this country). Closes the orphan-page gap: the hub
                links down to POIs, this links the hub into the crawl graph. */}
            {hubSlug ? (
              <a
                href={`/${hubSlug}/`}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-400/25 bg-amber-400/[0.07] px-5 py-2 text-sm text-amber-100/90 transition hover:border-amber-300/50 hover:bg-amber-400/[0.12]"
              >
                {SIGHTS_HUB_LABEL[lang as HubLang] ?? SIGHTS_HUB_LABEL.en} →
              </a>
            ) : null}

            {/* Beach hub (coastal countries with a generated /[lang]/<key>/<beaches>/ hub). 404-safe via BEACH_HUB_COUNTRIES. */}
            {beachHref ? (
              <a
                href={beachHref}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-sky-400/25 bg-sky-400/[0.07] px-5 py-2 text-sm text-sky-100/90 transition hover:border-sky-300/50 hover:bg-sky-400/[0.12]"
              >
                {BEACH_HUB_LABEL[lang as Lang] ?? BEACH_HUB_LABEL.en} →
              </a>
            ) : null}

            {/* Cities hub (root slug /<country>-staedte/). 404-safe via CITIES_HUBS. */}
            {citiesHref ? (
              <a
                href={citiesHref}
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-400/[0.07] px-5 py-2 text-sm text-violet-100/90 transition hover:border-violet-300/50 hover:bg-violet-400/[0.12]"
              >
                {CITIES_HUB_LABEL[lang as Lang] ?? CITIES_HUB_LABEL.en} →
              </a>
            ) : null}
          </div>

          {countryRegions.length ? (
            <div className="rounded-[28px] border border-cyan-500/15 bg-white/[0.03] p-6">
              <h2 className="text-lg font-semibold text-white">{copy.states}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {countryRegions.map((state) => (
                  <a
                    key={state.id}
                    href={buildStatePath(lang, state.id)}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/40 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-start gap-3">
                      {state.coa ? (
                        <img src={state.coa} alt="" loading="lazy" className="h-12 w-12 rounded-xl border border-white/10 bg-white/5 object-contain p-1.5" />
                      ) : null}
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-white">{state.name[lang] || state.name.de}</h3>
                        <p className="mt-1 text-xs leading-5 text-white/60">{state.description?.[lang] || state.description?.de || ""}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {TYPE_INDEX_COUNTRIES.includes(countryId) ? (
          <section className="mt-12 rounded-3xl border border-cyan-500/15 bg-[#07111b]/80 p-6">
            <h2 className="text-xl font-semibold text-white/90">
              {lang === "de" ? "Nach Kategorie durchstöbern" : lang === "hu" ? "Böngészés kategória szerint" : lang === "ro" ? "Răsfoiește pe categorii" : "Browse by category"}
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {Object.keys(TYPE_BUCKETS).map((bucket) => {
                const count = getPoisForCountryBucket(countryId, bucket).length;
                if (count < 4) return null;
                const slug = typeSlugFor(bucket, lang as Lang);
                const heading = TYPE_HEADINGS[bucket][lang as Lang];
                return (
                  <li key={bucket}>
                    <a
                      href={`/${lang}/${countrySlugFor(lang as Lang, countryId)}/category/${slug}/`}
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
      <StructuredData data={createCountryStructuredData(lang as Lang, countryCopy.name, countryCopy.description)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: countryCopy.title,
            url: `${SITE_URL}${buildCountryPath(lang, countryId)}`,
            inLanguage: lang,
            image: absoluteUrl(countryId === "romania" ? "/geo-images/romania/RO.webp" : countryId === "hungary" ? "/geo-images/hungary/HU.webp" : "/geo-images/germany-full.jpg"),
            hasPart: countryRegions.map((state) => ({
              "@type": "AdministrativeArea",
              name: state.name[lang] || state.name.de,
              url: `${SITE_URL}${buildStatePath(lang, state.id)}`,
            })),
            alternateName: Object.values(alternates),
          }),
        }}
      />
    </main>
  );
}
