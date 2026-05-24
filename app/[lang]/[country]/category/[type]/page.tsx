import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/seo/Breadcrumb";
import { COUNTRY_COPY, getCountryCopy, SEO_COPY, absoluteUrl, isLang } from "@/lib/seo/routes";
import {
  SUPPORTED_LANGS,
  buildCountryPath,
  buildPoiPath,
  countrySlugFor,
  type Lang,
} from "@/lib/seo/slugs";
import {
  TYPE_BUCKETS,
  TYPE_HEADINGS,
  TYPE_INDEX_COUNTRIES,
  TYPE_SLUGS,
  bucketFromSlug,
  getPoisForCountryBucket,
  typeSlugFor,
} from "@/lib/seo/typeIndex";

export const dynamicParams = false;

export async function generateStaticParams() {
  const out: { lang: string; country: string; type: string }[] = [];
  for (const lang of SUPPORTED_LANGS) {
    for (const countryId of TYPE_INDEX_COUNTRIES) {
      const country = countrySlugFor(lang, countryId);
      for (const bucket of Object.keys(TYPE_BUCKETS)) {
        const items = getPoisForCountryBucket(countryId, bucket);
        if (items.length < 4) continue;
        out.push({ lang, country, type: typeSlugFor(bucket, lang) });
      }
    }
  }
  const LIMIT = Number(process.env.GSP_LIMIT ?? -1);
  if (LIMIT === 0) {
    console.error("[gSP category] GSP_LIMIT=0, returning 1 sample");
    return out.slice(0, 1);
  }
  console.error("[gSP category] returning", out.length);
  return out;
}

function resolveParams(lang: string, country: string, type: string) {
  if (!isLang(lang)) return null;
  const bucket = bucketFromSlug(lang as Lang, type);
  if (!bucket) return null;
  let countryId: string | null = null;
  for (const cid of TYPE_INDEX_COUNTRIES) {
    if (countrySlugFor(lang as Lang, cid) === country) { countryId = cid; break; }
  }
  if (!countryId) return null;
  return { lang: lang as Lang, country, countryId, bucket };
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; country: string; type: string }> }): Promise<Metadata> {
  const { lang, country, type } = await params;
  const r = resolveParams(lang, country, type);
  if (!r) return {};
  const countryCopy = getCountryCopy(r.countryId, r.lang);
  const heading = TYPE_HEADINGS[r.bucket][r.lang];
  const title = `${heading} — ${countryCopy.name} | Plizio`;
  const description = `${heading} ${countryCopy.name} — Plizio Visual Lab.`;
  return {
    title, description,
    alternates: {
      canonical: absoluteUrl(`/${r.lang}/${countrySlugFor(r.lang, r.countryId)}/category/${typeSlugFor(r.bucket, r.lang)}/`),
      languages: Object.fromEntries(
        SUPPORTED_LANGS.map((L) => [L, absoluteUrl(`/${L}/${countrySlugFor(L as Lang, r.countryId)}/category/${typeSlugFor(r.bucket, L as Lang)}/`)])
      ),
    },
    openGraph: { title, description, type: "article" },
  };
}

export default async function TypeIndexPage({ params }: { params: Promise<{ lang: string; country: string; type: string }> }) {
  const { lang, country, type } = await params;
  const r = resolveParams(lang, country, type);
  if (!r) notFound();
  const copy = (SEO_COPY as Record<string, { home: string }>)[r.lang] || SEO_COPY.en;
  const countryCopy = getCountryCopy(r.countryId, r.lang);
  const heading = TYPE_HEADINGS[r.bucket][r.lang];
  const items = getPoisForCountryBucket(r.countryId, r.bucket);

  return (
    <main className="min-h-screen bg-[#020408] text-white">
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: copy.home, href: "/" },
            { name: countryCopy.name, href: buildCountryPath(r.lang, r.countryId) },
            { name: heading, href: `/${r.lang}/${countrySlugFor(r.lang, r.countryId)}/category/${typeSlugFor(r.bucket, r.lang)}/` },
          ]}
        />

        <header className="mt-6">
          <p className="text-xs uppercase tracking-[0.28em] text-cyan-300/80">{countryCopy.name}</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-5xl">{heading}</h1>
          <p className="mt-3 text-sm text-white/55">{items.length} {heading.toLowerCase()}</p>
        </header>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => {
            const name = p.name?.[r.lang] || p.name?.de || p.id;
            return (
              <li key={p.id}>
                <a
                  href={buildPoiPath(r.lang, p)}
                  className="block rounded-2xl border border-white/8 bg-white/[0.03] p-3 transition hover:border-cyan-500/30 hover:bg-cyan-500/[0.04]"
                >
                  <span className="text-sm font-medium text-white/90">{name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}
