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
import { deutschlandMap, deutschlandViewBox } from "@/lib/visualLab/maps/deutschland.svg";
import { romaniaMap, romaniaViewBox } from "@/lib/visualLab/maps/romania.svg";
import { magyarorszagMap, magyarorszagViewBox } from "@/lib/visualLab/maps/magyarorszag.svg";
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

  let mapData = deutschlandMap;
  let viewBox = deutschlandViewBox;

  if (countryId === "romania") {
    mapData = romaniaMap;
    viewBox = romaniaViewBox;
  } else if (countryId === "hungary") {
    // Map HU-XX IDs to descriptive IDs used in regions
    const idMap: Record<string, string> = {
      "HU-BU": "budapest",
      "HU-BA": "baranya",
      "HU-BK": "bacs-kiskun",
      "HU-BE": "bekes",
      "HU-BZ": "borsod-abauj-zemplen",
      "HU-CS": "csongrad-csanad",
      "HU-FE": "fejer",
      "HU-GS": "gyor-moson-sopron",
      "HU-HB": "hajdu-bihar",
      "HU-HE": "heves",
      "HU-KE": "komarom-esztergom",
      "HU-NO": "nograd",
      "HU-PE": "pest",
      "HU-SO": "somogy",
      "HU-SZ": "szabolcs-szatmar-bereg",
      "HU-JN": "jasz-nagykun-szolnok",
      "HU-TO": "tolna",
      "HU-VA": "vas",
      "HU-VE": "veszprem",
      "HU-ZA": "zala"
    };
    mapData = magyarorszagMap.map(m => ({ ...m, id: idMap[m.id] || m.id }));
    viewBox = magyarorszagViewBox;
  }

  return (
    <main className="min-h-screen bg-[#020408] text-white">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: copy.home, href: "/" },
            { name: countryCopy.name, href: buildCountryPath(lang, countryId) },
          ]}
        />

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[28px] border border-cyan-500/15 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_55%),linear-gradient(180deg,rgba(7,17,27,0.98),rgba(2,4,8,0.98))] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Plizio Visual Lab</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{countryCopy.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">{countryCopy.description}</p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-cyan-500/15 bg-[#07111b]/90 p-4">
              <svg viewBox={viewBox} className="h-auto w-full">
                {mapData.map((state) => (
                  <a key={state.id} href={buildStatePath(lang, state.id)}>
                    <path
                      d={state.path}
                      fill="rgba(8, 47, 73, 0.85)"
                      stroke="rgba(34, 211, 238, 0.35)"
                      strokeWidth="1.1"
                    />
                  </a>
                ))}
              </svg>
            </div>
          </div>

          <div className="rounded-[28px] border border-cyan-500/15 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold text-white">{copy.states}</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {countryRegions.map((state) => (
                <a
                  key={state.id}
                  href={buildStatePath(lang, state.id)}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-cyan-400/40"
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
