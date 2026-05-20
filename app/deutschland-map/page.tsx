// Server component — inline SVG paths AND projected POI markers render at
// build time so both country shape and 1k+ POI dots are visible BEFORE any
// JS chunk loads. InteractiveMap hydrates on top.
import fs from "node:fs";
import path from "node:path";
import {
  deutschlandMap,
  deutschlandViewBox,
  projectCoords as projectCoordsDE,
} from "@/lib/visualLab/maps/deutschland.svg";
import { SsrCountryMap, type ProjectedPoi } from "@/components/map/SsrCountryMap";
import { MapBackButton } from "@/components/map/MapBackButton";
import { InteractiveMap } from "@/lib/visualLab/components/InteractiveMap";

export const metadata = {
  title: "Deutschland Karte | Plizio",
};

// Read split POI JSON at build time and pre-project coords → SVG x/y so the
// HTML output already contains all marker positions. Skipped if the file
// hasn't been generated yet (first build before split_pois_by_country.mts).
function loadProjectedPois(): ProjectedPoi[] {
  try {
    const fp = path.join(process.cwd(), "public", "data", "pois", "DE.json");
    if (!fs.existsSync(fp)) return [];
    const payload = JSON.parse(fs.readFileSync(fp, "utf8")) as {
      pois?: Array<{
        id?: string;
        type?: string;
        coords?: [number, number];
        parent?: string;
      }>;
    };
    const out: ProjectedPoi[] = [];
    for (const p of payload.pois ?? []) {
      if (!p?.id || !p.coords || p.coords.length !== 2) continue;
      const [lon, lat] = p.coords;
      if (typeof lon !== "number" || typeof lat !== "number") continue;
      try {
        const [x, y] = projectCoordsDE(lon, lat);
        if (Number.isFinite(x) && Number.isFinite(y)) {
          out.push({
            id: p.id,
            x,
            y,
            type: p.type,
            major: p.type === "state-capital",
          });
        }
      } catch { /* skip POIs that fail projection */ }
    }
    return out;
  } catch {
    return [];
  }
}

export default function DeutschlandMapPage() {
  const projectedPois = loadProjectedPois();
  return (
    <div className="fixed inset-0 bg-[#060614] flex flex-col">
      <header className="flex items-center gap-3 px-4 pt-4 pb-2 shrink-0">
        <MapBackButton href="/europe-map" />
        <h1 className="text-lg font-black text-white leading-tight">Deutschland Karte</h1>
      </header>
      <main className="flex-1 min-h-0 relative">
        {/* SSR layer — paths + markers visible immediately from the HTML */}
        <SsrCountryMap
          paths={deutschlandMap}
          viewBox={deutschlandViewBox}
          projectedPois={projectedPois}
        />
        {/* Client overlay — hydrates with pan/zoom/click/popups */}
        <InteractiveMap lang="de" subject="geographie" grade={5} ssrLayer />
      </main>
    </div>
  );
}
