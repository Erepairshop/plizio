import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/seo/Breadcrumb";
import StructuredData, { createCountryStructuredData } from "@/components/seo/StructuredData";
import { deutschlandMap, deutschlandViewBox } from "@/lib/visualLab/maps/deutschland.svg";
import { regions } from "@/lib/visualLab/data/poi";
import {
  SEO_COPY,
  countryMetadata,
  getCountryAlternates,
  SITE_URL,
  absoluteUrl,
  isLang,
} from "@/lib/seo/routes";
import {
  SUPPORTED_LANGS,
  buildCountryPath,
  buildStatePath,
  countrySlugFor,
  stateSlugFor,
  type Lang,
} from "@/lib/seo/slugs";

export const dynamicParams = true;

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({
    lang,
    country: countrySlugFor(lang),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; country: string }>;
}): Promise<Metadata> {
  const { lang, country } = await params;
  if (!isLang(lang) || country !== countrySlugFor(lang)) {
    return {};
  }
  return countryMetadata(lang);
}

export default async function CountryPage({
  params,
}: {
  params: Promise<{ lang: string; country: string }>;
}) {
  const { lang, country } = await params;
  if (!isLang(lang) || country !== countrySlugFor(lang)) {
    notFound();
  }

  const copy = SEO_COPY[lang];
  const alternates = getCountryAlternates();

  return (
    <main className="min-h-screen bg-[#020408] text-white">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: copy.home, href: "/" },
            { name: copy.country, href: buildCountryPath(lang) },
          ]}
        />

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[28px] border border-cyan-500/15 bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.12),_transparent_55%),linear-gradient(180deg,rgba(7,17,27,0.98),rgba(2,4,8,0.98))] p-6">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">Plizio Visual Lab</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">{copy.countryTitle}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/72">{copy.countryDescription}</p>
            <div className="mt-8 overflow-hidden rounded-3xl border border-cyan-500/15 bg-[#07111b]/90 p-4">
              <svg viewBox={deutschlandViewBox} className="h-auto w-full">
                {deutschlandMap.map((state) => (
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
              {regions.map((state) => (
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
                      <p className="mt-1 text-xs leading-5 text-white/60">{state.description[lang] || state.description.de}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <StructuredData data={createCountryStructuredData(lang as Lang, copy.country, copy.countryDescription)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: copy.countryTitle,
            url: `${SITE_URL}${buildCountryPath(lang)}`,
            inLanguage: lang,
            image: absoluteUrl("/geo-images/germany-full.jpg"),
            hasPart: regions.map((state) => ({
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
