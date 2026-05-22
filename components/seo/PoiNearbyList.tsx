import type { POI } from "@/lib/visualLab/data/poi";
import type { Lang } from "@/lib/seo/slugs";
import { buildPoiPath } from "@/lib/seo/slugs";
import { getNearbyPois } from "@/lib/seo/relatedPoisGrouped";

const COPY: Record<Lang, { heading: string; subline: string; type: Record<string, string> }> = {
  de: {
    heading: "In der Nähe",
    subline: "Andere sehenswerte Orte in der Umgebung",
    type: { city: "Stadt", town: "Ort", village: "Dorf", landmark: "Sehenswürdigkeit", mountain: "Berg", lake: "See", river: "Fluss", "state-capital": "Hauptstadt", historical: "historischer Ort" },
  },
  hu: {
    heading: "Közeli helyek",
    subline: "További látnivalók a környéken",
    type: { city: "város", town: "kisváros", village: "falu", landmark: "látnivaló", mountain: "hegy", lake: "tó", river: "folyó", "state-capital": "székhely", historical: "történelmi hely" },
  },
  ro: {
    heading: "În apropiere",
    subline: "Alte locuri de vizitat în zonă",
    type: { city: "oraș", town: "oraș mic", village: "sat", landmark: "obiectiv", mountain: "munte", lake: "lac", river: "râu", "state-capital": "capitală regională", historical: "loc istoric" },
  },
  en: {
    heading: "Nearby",
    subline: "Other places worth visiting in the area",
    type: { city: "city", town: "town", village: "village", landmark: "landmark", mountain: "mountain", lake: "lake", river: "river", "state-capital": "state capital", historical: "historical site" },
  },
};

function distKm(a: POI, b: POI): number {
  const a0 = a.coords; const b0 = b.coords;
  if (!a0 || !b0) return 999;
  const [lng1, lat1] = a0; const [lng2, lat2] = b0;
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const sa = Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return Math.round(2 * R * Math.asin(Math.sqrt(sa)));
}

export default function PoiNearbyList({ poi, lang, max = 6 }: { poi: POI; lang: Lang; max?: number }) {
  const candidates = getNearbyPois(poi, 80, max * 3);
  // dedup by name + filter has-name
  const seen = new Set<string>();
  const items = candidates
    .filter((p) => {
      const n = (p.name?.[lang] || p.name?.de || "").toLowerCase();
      if (!n || seen.has(n)) return false;
      seen.add(n);
      return true;
    })
    .slice(0, max);

  if (items.length === 0) return null;
  const copy = COPY[lang] || COPY.en;

  return (
    <section className="mt-10 rounded-3xl border border-cyan-500/15 bg-[#07111b]/80 p-6">
      <header className="mb-4">
        <h2 className="text-xl font-semibold text-white/90">{copy.heading}</h2>
        <p className="mt-1 text-sm text-white/55">{copy.subline}</p>
      </header>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((p) => {
          const name = p.name?.[lang] || p.name?.de || p.id;
          const typeLabel = copy.type[p.type || ""] || p.type || "";
          const km = distKm(poi, p);
          return (
            <li key={p.id}>
              <a
                href={buildPoiPath(lang, p)}
                className="group block rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-cyan-500/30 hover:bg-cyan-500/[0.04]"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="line-clamp-1 text-sm font-medium text-white/90 group-hover:text-cyan-100">
                    {name}
                  </h3>
                  <span className="shrink-0 text-[0.7rem] text-white/45">{km} km</span>
                </div>
                <p className="mt-1 text-xs text-white/55">{typeLabel}</p>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
