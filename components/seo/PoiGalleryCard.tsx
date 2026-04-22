import type { POI } from "@/lib/visualLab/data/poi";
import { buildPoiPath, type Lang } from "@/lib/seo/slugs";
import { SEO_COPY } from "@/lib/seo/routes";

export default function PoiGalleryCard({
  poi,
  lang,
}: {
  poi: POI;
  lang: Lang;
}) {
  const href = buildPoiPath(lang, poi);
  const copy = SEO_COPY[lang];
  const title = poi.name[lang] || poi.name.de;
  const description = poi.description[lang] || poi.description.de;

  return (
    <a
      href={href}
      className="group rounded-2xl border border-cyan-500/15 bg-white/[0.03] overflow-hidden hover:border-cyan-400/40 transition"
    >
      <div className="aspect-[16/10] bg-[#07111b] overflow-hidden">
        {poi.image ? (
          <img src={poi.image} alt={title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-cyan-200/50 text-sm">Visual Lab</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start gap-3">
          {poi.coa ? (
            <img src={poi.coa} alt="" loading="lazy" className="h-10 w-10 rounded-lg border border-white/10 bg-white/5 object-contain p-1" />
          ) : null}
          <div className="min-w-0 flex-1">
            <h3 className="text-white text-base font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-white/65 line-clamp-3">{description}</p>
          </div>
        </div>
        <span className="mt-4 inline-flex text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
          {copy.more}
        </span>
      </div>
    </a>
  );
}
