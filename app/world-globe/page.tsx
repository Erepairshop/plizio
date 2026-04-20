"use client";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { CONTINENTS_GEOJSON } from "@/lib/geojson/continents";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false, loading: () => <div className="w-full h-full bg-black" /> });

type Lang = "de" | "hu" | "ro" | "en";
const TITLE: Record<Lang, string> = {
  de: "Weltkarte (3D)",
  hu: "Világtérkép (3D)",
  ro: "Harta Lumii (3D)",
  en: "World Map (3D)",
};

// Continent center labels + route (big clickable markers on the globe)
const CONTINENTS = [
  { lat: 54, lng: 10,   label: "Europe",         route: "/europe-map",   color: "#22d3ee" },
  { lat: 40, lng: -100, label: "North America",  route: "/na-map",       color: "#f87171" },
  { lat: -15, lng: -60, label: "South America",  route: "/sa-map",       color: "#fbbf24" },
  { lat: 2,  lng: 20,   label: "Africa",         route: "/africa-map",   color: "#34d399" },
  { lat: 30, lng: 90,   label: "Asia",           route: "/asia-map",     color: "#c084fc" },
  { lat: -25, lng: 135, label: "Oceania",        route: "/oceania-map",  color: "#f472b6" },
  { lat: -82, lng: 0,   label: "Antarctica",     route: "",              color: "#e5e7eb" },
];

const CAPITALS = [
  { lat: 52.52, lng: 13.40, label: "Berlin" },
  { lat: 47.50, lng: 19.04, label: "Budapest" },
  { lat: 44.43, lng: 26.10, label: "Bucharest" },
  { lat: 48.86, lng: 2.35, label: "Paris" },
  { lat: 41.90, lng: 12.50, label: "Rome" },
  { lat: 40.42, lng: -3.70, label: "Madrid" },
  { lat: 51.51, lng: -0.13, label: "London" },
  { lat: 52.37, lng: 4.90, label: "Amsterdam" },
  { lat: 52.23, lng: 21.01, label: "Warsaw" },
  { lat: 48.21, lng: 16.37, label: "Vienna" },
];

export default function WorldGlobePage() {
  const router = useRouter();
  const { lang } = useLang();
  const l = (lang as Lang) ?? "de";

  return (
    <div className="fixed inset-0 bg-black flex flex-col">
      <header className="flex items-center gap-3 px-4 pt-4 pb-2 shrink-0 bg-black/50 backdrop-blur">
        <button onClick={() => router.push("/learn")} className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-white/20 transition" aria-label="back">
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-black text-white leading-tight">{TITLE[l]}</h1>
      </header>
      <main className="flex-1 min-h-0 relative">
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

          // Invisible continent polygons for click-detection only
          polygonsData={CONTINENTS_GEOJSON.features}
          polygonGeoJsonGeometry={(d: any) => d.geometry}
          polygonCapColor={() => "rgba(0, 0, 0, 0)"}
          polygonSideColor={() => "rgba(0, 0, 0, 0)"}
          polygonStrokeColor={() => "rgba(34, 211, 238, 0.15)"}
          polygonLabel={(d: any) => d.properties.name}
          onPolygonClick={(d: any) => { if (d.properties.route) router.push(d.properties.route); }}
          polygonAltitude={0.001}

          // Labels (continent names big, capitals small)
          labelsData={[...CONTINENTS, ...CAPITALS]}
          labelLat={(d: any) => d.lat}
          labelLng={(d: any) => d.lng}
          labelText={(d: any) => d.label}
          labelSize={(d: any) => d.route !== undefined ? 2.0 : 0.8}
          labelColor={(d: any) => d.route !== undefined ? (d.color || "#22d3ee") : "#FFD166"}
          labelAltitude={0.01}
          labelDotRadius={(d: any) => d.route !== undefined ? 0.8 : 0.3}
          labelResolution={2}
          onLabelClick={(d: any) => { if (d.route) router.push(d.route); }}
        />
      </main>
    </div>
  );
}
