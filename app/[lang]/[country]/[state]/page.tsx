import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/seo/Breadcrumb";
import PoiGalleryCard from "@/components/seo/PoiGalleryCard";
import StructuredData, { createStateStructuredData } from "@/components/seo/StructuredData";
import { bundeslandSubregions } from "@/lib/visualLab/maps/bundeslandSubregions";
import {
  COUNTRY_COPY,
  SEO_COPY,
  absoluteUrl,
  getStateAlternates,
  groupPoisForState,
  isLang,
  stateDescription,
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
  const region = findRegionByStateSlug(lang, state);
  if (!region) return {};

  const countryId = getCountryId(region.id);
  if (country !== countrySlugFor(lang, countryId)) return {};

  const title = `${region.name[lang] || region.name.de} | Plizio Visual Lab`;
  const description = stateDescription(region.id, lang);

  return {
    title,
    description,
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
  const region = findRegionByStateSlug(lang, state);
  if (!region) notFound();

  const countryId = getCountryId(region.id);
  if (country !== countrySlugFor(lang, countryId)) notFound();

  const copy = SEO_COPY[lang];
  const countryCopy = COUNTRY_COPY[countryId][lang];
  const groups = groupPoisForState(region.id);
  const subregions = (bundeslandSubregions as any)[region.id];

  return (
    <main className="min-h-screen bg-[#020408] text-white">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: copy.home, href: "/" },
            { name: countryCopy.name, href: buildCountryPath(lang, countryId) },
            { name: region.name[lang] || region.name.de, href: buildStatePath(lang, region.id) },
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
              <p className="mt-5 text-base leading-7 text-white/72">{region.description[lang] || region.description.de}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {(region.facts?.[lang] || region.facts?.de || []).slice(0, 4).map((fact) => (
                  <span key={fact} className="rounded-full border border-cyan-500/15 bg-cyan-500/8 px-3 py-1 text-sm text-cyan-100/85">
                    {fact}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-full max-w-md rounded-3xl border border-cyan-500/15 bg-[#07111b]/80 p-4">
              {subregions ? (
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
      </section>
      <StructuredData data={createStateStructuredData(region, lang)} />
    </main>
  );
}
