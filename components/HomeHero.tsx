"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Globe2, X as CloseIcon } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center bg-black text-white/40">
      <span className="text-sm">Loading 3D Globe…</span>
    </div>
  ),
});

type Lang = "de" | "hu" | "ro" | "en";

const HERO = {
  de: {
    title: "Plizio — Lerne die Welt mit interaktiven Karten",
    subtitle: "Geographie, Geschichte und Wissen für Kinder (K1–K8) in 4 Sprachen. Entdecke über 5000 echte Orte auf interaktiven Karten.",
    exploreContinents: "Entdecke die Kontinente",
    popularCountries: "Beliebte Länder",
    popularPois: "Bekannte Sehenswürdigkeiten",
    startLearning: "Lernen starten",
    subjects: "Schulfächer",
    subjectsDesc: "Mathe, Deutsch, Biologie, Geschichte — spielerisch lernen",
  },
  hu: {
    title: "Plizio — Fedezd fel a világot interaktív térképekkel",
    subtitle: "Földrajz, történelem és tudás gyerekeknek (K1–K8), 4 nyelven. Több mint 5000 valódi hely az interaktív térképeken.",
    exploreContinents: "Fedezd fel a kontinenseket",
    popularCountries: "Népszerű országok",
    popularPois: "Híres látnivalók",
    startLearning: "Kezdés",
    subjects: "Tantárgyak",
    subjectsDesc: "Matek, német, biológia, történelem — játékosan",
  },
  ro: {
    title: "Plizio — Descoperă lumea cu hărți interactive",
    subtitle: "Geografie, istorie și cunoștințe pentru copii (K1–K8), în 4 limbi. Peste 5000 de locuri reale pe hărți interactive.",
    exploreContinents: "Descoperă continentele",
    popularCountries: "Țări populare",
    popularPois: "Obiective faimoase",
    startLearning: "Începe să înveți",
    subjects: "Materii școlare",
    subjectsDesc: "Matematică, germană, biologie, istorie — prin joc",
  },
  en: {
    title: "Plizio — Explore the world with interactive maps",
    subtitle: "Geography, history, and knowledge for kids (K1–K8) in 4 languages. Over 5,000 real places on interactive maps.",
    exploreContinents: "Explore the continents",
    popularCountries: "Popular countries",
    popularPois: "Famous landmarks",
    startLearning: "Start learning",
    subjects: "School subjects",
    subjectsDesc: "Math, German, biology, history — learn through play",
  },
};

const CONTINENTS = [
  { id: "europe", lat: 54, lng: 10, color: "#22d3ee", route: "/europe-map",
    name: { de: "Europa", hu: "Európa", ro: "Europa", en: "Europe" } },
  { id: "north-america", lat: 40, lng: -100, color: "#f87171", route: "/northamerica-map",
    name: { de: "Nordamerika", hu: "Észak-Amerika", ro: "America de Nord", en: "North America" } },
  { id: "south-america", lat: -15, lng: -60, color: "#fbbf24", route: "/sa-map",
    name: { de: "Südamerika", hu: "Dél-Amerika", ro: "America de Sud", en: "South America" } },
  { id: "africa", lat: 2, lng: 20, color: "#34d399", route: "/africa-map",
    name: { de: "Afrika", hu: "Afrika", ro: "Africa", en: "Africa" } },
  { id: "asia", lat: 30, lng: 90, color: "#c084fc", route: "/asia-map",
    name: { de: "Asien", hu: "Ázsia", ro: "Asia", en: "Asia" } },
  { id: "oceania", lat: -25, lng: 135, color: "#f472b6", route: "/oceania-map",
    name: { de: "Ozeanien", hu: "Óceánia", ro: "Oceania", en: "Oceania" } },
];

const POPULAR_COUNTRIES: { slug: string; path: string; flag: string; name: Record<Lang, string> }[] = [
  { slug: "de", path: "/deutschland-map", flag: "🇩🇪", name: { de: "Deutschland", hu: "Németország", ro: "Germania", en: "Germany" } },
  { slug: "hu", path: "/magyarorszag-map", flag: "🇭🇺", name: { de: "Ungarn", hu: "Magyarország", ro: "Ungaria", en: "Hungary" } },
  { slug: "ro", path: "/romania-map", flag: "🇷🇴", name: { de: "Rumänien", hu: "Románia", ro: "România", en: "Romania" } },
  { slug: "at", path: "/austria-map", flag: "🇦🇹", name: { de: "Österreich", hu: "Ausztria", ro: "Austria", en: "Austria" } },
  { slug: "fr", path: "/france-map", flag: "🇫🇷", name: { de: "Frankreich", hu: "Franciaország", ro: "Franța", en: "France" } },
  { slug: "it", path: "/italy-map", flag: "🇮🇹", name: { de: "Italien", hu: "Olaszország", ro: "Italia", en: "Italy" } },
  { slug: "es", path: "/spain-map", flag: "🇪🇸", name: { de: "Spanien", hu: "Spanyolország", ro: "Spania", en: "Spain" } },
  { slug: "us", path: "/usa-map", flag: "🇺🇸", name: { de: "USA", hu: "USA", ro: "SUA", en: "USA" } },
  { slug: "ca", path: "/canada-map", flag: "🇨🇦", name: { de: "Kanada", hu: "Kanada", ro: "Canada", en: "Canada" } },
  { slug: "mx", path: "/mexico-map", flag: "🇲🇽", name: { de: "Mexiko", hu: "Mexikó", ro: "Mexic", en: "Mexico" } },
  { slug: "uk", path: "/unitedkingdom-map", flag: "🇬🇧", name: { de: "Großbritannien", hu: "Egyesült Királyság", ro: "Regatul Unit", en: "United Kingdom" } },
  { slug: "pl", path: "/poland-map", flag: "🇵🇱", name: { de: "Polen", hu: "Lengyelország", ro: "Polonia", en: "Poland" } },
];

const POPULAR_POIS: { href: string; img?: string; name: Record<Lang, string>; country: Record<Lang, string> }[] = [
  { href: "/de/deutschland/berlin/city-berlin", img: "/geo-images/germany/city-berlin.webp",
    name: { de: "Berlin", hu: "Berlin", ro: "Berlin", en: "Berlin" },
    country: { de: "Deutschland", hu: "Németország", ro: "Germania", en: "Germany" } },
  { href: "/hu/magyarorszag/budapest/hu-budapest", img: "/geo-images/hungary/hu-budapest.webp",
    name: { de: "Budapest", hu: "Budapest", ro: "Budapesta", en: "Budapest" },
    country: { de: "Ungarn", hu: "Magyarország", ro: "Ungaria", en: "Hungary" } },
  { href: "/ro/romania/bucuresti/ro-bucharest", img: "/geo-images/romania/ro-bucharest.webp",
    name: { de: "Bukarest", hu: "Bukarest", ro: "București", en: "Bucharest" },
    country: { de: "Rumänien", hu: "Románia", ro: "România", en: "Romania" } },
  { href: "/de/deutschland/bayern/landmark-neuschwanstein", img: "/geo-images/germany/landmark-neuschwanstein.webp",
    name: { de: "Schloss Neuschwanstein", hu: "Neuschwanstein kastély", ro: "Castelul Neuschwanstein", en: "Neuschwanstein Castle" },
    country: { de: "Deutschland", hu: "Németország", ro: "Germania", en: "Germany" } },
  { href: "/ro/romania/brasov/ro-bran", img: "/geo-images/romania/ro-bran.webp",
    name: { de: "Schloss Bran", hu: "Törcsvári kastély", ro: "Castelul Bran", en: "Bran Castle" },
    country: { de: "Rumänien", hu: "Románia", ro: "România", en: "Romania" } },
  { href: "/hu/magyarorszag/baranya/hu-pecs", img: "/geo-images/hungary/hu-pecs.webp",
    name: { de: "Pécs", hu: "Pécs", ro: "Pécs", en: "Pécs" },
    country: { de: "Ungarn", hu: "Magyarország", ro: "Ungaria", en: "Hungary" } },
];

const GLOBE_BTN_LABEL: Record<Lang, string> = {
  de: "3D-Globus öffnen",
  hu: "3D földgömb megnyitása",
  ro: "Deschide globul 3D",
  en: "Open 3D Globe",
};

export default function HomeHero() {
  const router = useRouter();
  const { lang } = useLang();
  const l = (lang as Lang) ?? "hu";
  const t = HERO[l];
  const [globeOpen, setGlobeOpen] = useState(false);

  const continentsData = CONTINENTS.map((c) => ({ ...c, label: c.name[l] }));

  return (
    <section className="relative w-full">
      {/* Hero: H1 + H2 + CTA row */}
      <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-4">
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-3">
          {t.title}
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-3xl mb-4">
          {t.subtitle}
        </p>
        <button
          onClick={() => setGlobeOpen(true)}
          className="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-cyan-500/20 border border-cyan-400/30 hover:border-cyan-300/60 text-cyan-200 font-semibold px-5 py-2.5 transition"
        >
          <Globe2 size={18} /> {GLOBE_BTN_LABEL[l]}
        </button>
      </div>

      {/* 3D Globe — behind a modal, opened via CTA */}
      {globeOpen && (
        <div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex flex-col">
          <div className="flex items-center justify-between px-4 pt-4 pb-2 shrink-0 bg-black/60">
            <h2 className="text-lg font-black text-white">{GLOBE_BTN_LABEL[l]}</h2>
            <button
              onClick={() => setGlobeOpen(false)}
              className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-white/20 transition"
              aria-label="close"
            >
              <CloseIcon size={18} />
            </button>
          </div>
          <div className="flex-1 min-h-0 relative">
            <Globe
              globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
              bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
              backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
              labelsData={continentsData}
              labelLat={(d: any) => d.lat}
              labelLng={(d: any) => d.lng}
              labelText={(d: any) => d.label}
              labelSize={2.0}
              labelColor={(d: any) => d.color}
              labelAltitude={0.01}
              labelDotRadius={0.8}
              labelResolution={2}
              onLabelClick={(d: any) => { if (d.route) { setGlobeOpen(false); router.push(d.route); } }}
            />
          </div>
          <div className="text-center py-2 shrink-0 bg-black/60">
            <p className="text-xs text-white/60">
              {l === "hu" ? "Kattints egy kontinensre" : l === "ro" ? "Apasă pe un continent" : l === "de" ? "Klicke auf einen Kontinent" : "Tap a continent"}
            </p>
          </div>
        </div>
      )}

      {/* Continents grid (SEO links) */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.exploreContinents}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {continentsData.map((c) => (
            <Link
              key={c.id}
              href={c.route}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center hover:border-cyan-400/40 hover:bg-cyan-500/5 transition"
            >
              <div
                className="w-10 h-10 rounded-full mx-auto mb-2"
                style={{ background: `radial-gradient(circle at 30% 30%, ${c.color}, ${c.color}33)` }}
                aria-hidden="true"
              />
              <span className="text-white font-semibold group-hover:text-cyan-200">{c.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular countries */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.popularCountries}</h2>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {POPULAR_COUNTRIES.map((c) => (
            <Link
              key={c.slug}
              href={c.path}
              className="group rounded-xl border border-white/10 bg-white/[0.03] px-3 py-4 text-center hover:border-emerald-400/40 hover:bg-emerald-500/5 transition"
            >
              <div className="text-3xl mb-1" aria-hidden="true">{c.flag}</div>
              <span className="text-white/90 text-sm group-hover:text-emerald-200">{c.name[l]}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular POIs (image cards) */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{t.popularPois}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {POPULAR_POIS.map((p) => (
            <Link
              key={p.href}
              href={p.href}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] hover:border-amber-400/40 transition"
            >
              {p.img && (
                <div className="aspect-video overflow-hidden bg-black/40">
                  <img
                    src={p.img}
                    alt={`${p.name[l]} — ${p.country[l]}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                  />
                </div>
              )}
              <div className="p-3">
                <div className="text-white font-bold leading-tight group-hover:text-amber-200">{p.name[l]}</div>
                <div className="text-white/50 text-xs mt-1">{p.country[l]}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Subjects CTA */}
      <div className="mx-auto max-w-6xl px-4 py-6">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{t.subjects}</h2>
        <p className="text-white/60 mb-4">{t.subjectsDesc}</p>
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 rounded-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 transition"
        >
          {t.startLearning} →
        </Link>
      </div>
    </section>
  );
}
