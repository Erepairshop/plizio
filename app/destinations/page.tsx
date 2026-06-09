import type { Metadata } from "next";
import { COUNTRY_SLUGS, countrySlugFor, SUPPORTED_LANGS } from "@/lib/seo/slugs";

// Crawlable "all destinations" hub. The homepage footer links here; this page
// links every country's CONTENT page (/<lang>/<country-slug>/) in all 4 langs
// with real <a href>. Closes the crawl chain: home → footer → destinations →
// country → state → city/POI (the language homes only linked one country, and
// the visual country maps dead-ended). Pure server component → static HTML.

export const metadata: Metadata = {
  title: "All Destinations — Countries & Travel Maps",
  description:
    "Browse every country on Plizio: interactive maps, top sights and ready-made city day plans in German, English, Hungarian and Romanian.",
  alternates: { canonical: "https://plizio.com/destinations/" },
};

function label(countryId: string): string {
  const en = COUNTRY_SLUGS[countryId]?.en || countryId;
  return en.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

const LANG_NAME: Record<string, string> = { de: "DE", en: "EN", hu: "HU", ro: "RO" };

export default function DestinationsHub() {
  const countries = Object.keys(COUNTRY_SLUGS).sort((a, b) => label(a).localeCompare(label(b)));
  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-white">
      <h1 className="mb-2 text-2xl font-bold">All Destinations</h1>
      <p className="mb-8 text-white/70 text-sm">
        Every country with interactive maps, top sights and city day plans — in 4 languages.
        Pick a country to open its map and places.
      </p>
      <ul className="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        {countries.map((cid) => (
          <li key={cid} className="border-b border-white/10 pb-2">
            <span className="font-semibold text-white/90">{label(cid)}</span>
            <span className="ml-2 text-sm">
              {SUPPORTED_LANGS.map((lang, i) => (
                <span key={lang}>
                  {i > 0 && <span className="text-white/30"> · </span>}
                  <a
                    href={`/${lang}/${countrySlugFor(lang, cid)}/`}
                    className="text-cyan-300/80 hover:text-cyan-200 transition-colors"
                  >
                    {LANG_NAME[lang] || lang}
                  </a>
                </span>
              ))}
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
}
