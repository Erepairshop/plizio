"use client";

import type { POI } from "@/lib/visualLab/data/poi";
import type { Lang } from "@/lib/seo/slugs";

const COPY: Record<Lang, { title: string; more: string }> = {
  de: { title: "💡 Wusstest du?", more: "Mehr entdecken →" },
  hu: { title: "💡 Tudtad?", more: "Tovább →" },
  ro: { title: "💡 Știai că?", more: "Mai mult →" },
  en: { title: "💡 Did you know?", more: "Explore more →" },
};

export default function PoiDidYouKnow({
  poi,
  lang,
  nextHref,
}: {
  poi: POI;
  lang: Lang;
  nextHref?: string;
}) {
  const copy = COPY[lang] ?? COPY.de;
  const advancedFacts = (poi as { factsAdvanced?: Record<string, string[]> }).factsAdvanced;
  const baseFacts = poi.facts as Record<string, string[]> | undefined;
  const pool: string[] = [
    ...((advancedFacts?.[lang] as string[] | undefined) ?? []),
    ...((advancedFacts?.de as string[] | undefined) ?? []),
    ...((baseFacts?.[lang] as string[] | undefined) ?? []),
    ...((baseFacts?.de as string[] | undefined) ?? []),
  ].filter((s) => typeof s === "string" && s.length > 20);

  if (pool.length === 0) return null;

  // Deterministic pick by poi.id (stable across renders, no SSR/CSR drift)
  const idx = Array.from(poi.id).reduce((a, c) => a + c.charCodeAt(0), 0) % pool.length;
  const fact = pool[idx];

  return (
    <aside className="mt-10 rounded-3xl border border-amber-300/25 bg-gradient-to-br from-amber-500/[0.08] to-amber-700/[0.04] p-5 sm:p-6">
      <h3 className="text-sm uppercase tracking-[0.22em] text-amber-200/90 font-semibold">{copy.title}</h3>
      <p className="mt-2 text-base sm:text-lg text-white/90 leading-relaxed">{fact}</p>
      {nextHref ? (
        <a
          href={nextHref}
          className="mt-3 inline-flex items-center gap-1 text-amber-200 hover:text-amber-100 text-sm font-medium transition"
        >
          {copy.more}
        </a>
      ) : null}
    </aside>
  );
}
