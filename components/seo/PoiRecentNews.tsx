import fs from "node:fs";
import path from "node:path";
import type { Lang } from "@/lib/seo/slugs";

interface NewsItem {
  title: string;
  snippet: string;
  url: string;
  source: string;
  lang: string;
  date: string;
}

const COPY: Record<Lang, { heading: string; empty: string; readMore: string; source: string; via: string }> = {
  de: { heading: "Aktuelle Nachrichten", empty: "Aktuell keine Nachrichten zu diesem Ort.", readMore: "Weiter lesen", source: "Quelle", via: "via" },
  hu: { heading: "Friss hírek", empty: "Jelenleg nincs friss hír erről a helyről.", readMore: "Tovább", source: "Forrás", via: "innen:" },
  ro: { heading: "Știri recente", empty: "Momentan nu există știri recente despre acest loc.", readMore: "Citește mai mult", source: "Sursă", via: "via" },
  en: { heading: "Recent News", empty: "No recent news for this location.", readMore: "Read more", source: "Source", via: "via" },
};

function loadNews(poiId: string): NewsItem[] {
  try {
    const fp = path.resolve(process.cwd(), "public", "data", "poi-news", `${poiId}.json`);
    if (!fs.existsSync(fp)) return [];
    const raw = fs.readFileSync(fp, "utf-8");
    return JSON.parse(raw) as NewsItem[];
  } catch {
    return [];
  }
}

function formatDate(date: string, lang: Lang): string {
  if (!date) return "";
  try {
    const d = new Date(date);
    if (Number.isNaN(d.getTime())) return date.slice(0, 10);
    return d.toLocaleDateString(lang === "en" ? "en-GB" : `${lang}-${lang.toUpperCase()}`, {
      year: "numeric", month: "short", day: "numeric",
    });
  } catch {
    return date.slice(0, 10);
  }
}

export default function PoiRecentNews({ poiId, lang }: { poiId: string; lang: Lang }) {
  const items = loadNews(poiId);
  const copy = COPY[lang] || COPY.en;

  // Render nothing when no items, to keep the page clean (or change to empty state)
  if (items.length === 0) return null;

  return (
    <section className="mt-10 rounded-3xl border border-cyan-500/15 bg-[#07111b]/80 p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" aria-hidden />
        <h2 className="text-xl font-semibold text-white/90">{copy.heading}</h2>
        <span className="text-xs uppercase tracking-[0.2em] text-white/45">
          {items.length} {items.length === 1 ? "article" : "articles"}
        </span>
      </div>

      <ul className="grid gap-3 md:grid-cols-2">
        {items.slice(0, 6).map((it, i) => (
          <li key={`${it.url}-${i}`} className="group rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-cyan-500/30 hover:bg-cyan-500/[0.04]">
            <a href={it.url} target="_blank" rel="noopener nofollow" className="block">
              <div className="mb-2 flex items-center justify-between gap-2">
                <span className="rounded-full bg-cyan-500/10 px-2.5 py-1 text-[0.7rem] font-medium text-cyan-200/85">
                  {it.source}
                </span>
                {it.date ? (
                  <time className="text-[0.7rem] text-white/45" dateTime={it.date}>
                    {formatDate(it.date, lang)}
                  </time>
                ) : null}
              </div>
              <h3 className="line-clamp-2 text-sm font-medium leading-snug text-white/90 group-hover:text-cyan-100">
                {it.title}
              </h3>
              {it.snippet ? (
                <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-white/55">
                  {it.snippet}
                </p>
              ) : null}
              <span className="mt-2 inline-flex items-center gap-1 text-[0.7rem] text-cyan-300/70 group-hover:text-cyan-200">
                {copy.readMore} →
              </span>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-4 text-[0.7rem] text-white/35">
        {copy.via} GDELT · RSS aggregálás · automatic update
      </p>
    </section>
  );
}
