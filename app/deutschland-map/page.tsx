// Server component — inline SVG paths render at build time so the country
// shape is visible BEFORE any JS chunk loads. InteractiveMap hydrates on top.
import { deutschlandMap, deutschlandViewBox } from "@/lib/visualLab/maps/deutschland.svg";
import { SsrCountryMap } from "@/components/map/SsrCountryMap";
import { MapBackButton } from "@/components/map/MapBackButton";
import { InteractiveMap, MapPerfOverlay } from "@/lib/visualLab/components/InteractiveMap";

export const metadata = {
  title: "Deutschland Karte | Plizio",
};

export default function DeutschlandMapPage() {
  return (
    <div className="fixed inset-0 bg-[#060614] flex flex-col">
      <header className="flex items-center gap-3 px-4 pt-4 pb-2 shrink-0">
        <MapBackButton href="/europe-map" />
        <h1 className="text-lg font-black text-white leading-tight">Deutschland Karte</h1>
      </header>
      <main className="flex-1 min-h-0 relative">
        {/* SSR layer — visible immediately from the static HTML */}
        <SsrCountryMap paths={deutschlandMap} viewBox={deutschlandViewBox} />
        {/* Client overlay — hydrates with pan/zoom/click/POIs */}
        <InteractiveMap lang="de" subject="geographie" grade={5} ssrLayer />
        <MapPerfOverlay />
      </main>
    </div>
  );
}
