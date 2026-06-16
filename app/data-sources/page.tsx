"use client";

import { useLang } from "@/components/LanguageProvider";
import SimplePageLayout from "@/components/SimplePageLayout";
import { Database, MapPin, BookOpen, CloudSun, CalendarDays, Route, ShieldCheck } from "lucide-react";
import type { Language } from "@/lib/language";

type Source = { icon: any; name: string; provides: string; license: string; url: string };

const CONTENT: Record<Language, {
  title: string;
  subtitle: string;
  intro: string[];
  sourcesTitle: string;
  sources: Source[];
  methodTitle: string;
  method: string[];
  trustTitle: string;
  trust: string[];
}> = {
  hu: {
    title: "Adatforrásaink",
    subtitle: "Honnan származik a Plizio úti-cél adata, és hogyan dolgozzuk fel",
    intro: [
      "A Plizio úti-cél tartalma nyílt, hiteles, elsődleges adatforrásokra épül, nem kapart vagy kitalált adatokra. Az alábbiakban átláthatóan megmutatjuk, melyik adat honnan jön.",
    ],
    sourcesTitle: "Forrásaink",
    sources: [
      { icon: MapPin, name: "OpenStreetMap", provides: "Helyek, koordináták, látnivalók, kemping- és lakóautó-megállók", license: "ODbL — © OpenStreetMap közreműködők", url: "https://www.openstreetmap.org" },
      { icon: Database, name: "Wikidata", provides: "Entitás-azonosítás, strukturált tények, képek", license: "CC0 (közkincs)", url: "https://www.wikidata.org" },
      { icon: BookOpen, name: "Wikipedia", provides: "Háttér-ismeret a leírások alapozásához", license: "CC BY-SA", url: "https://www.wikipedia.org" },
      { icon: CloudSun, name: "Open-Meteo", provides: "Éghajlati átlagok, időjárási adatok", license: "Nyílt adat", url: "https://open-meteo.com" },
      { icon: CalendarDays, name: "Ticketmaster & hivatalos feedek", provides: "Dátumozott, helyi események", license: "Hivatalos API / feed", url: "https://www.ticketmaster.com" },
      { icon: Route, name: "OpenRouteService", provides: "Útvonaltervezés (PlizioGo) az OSM úthálózaton", license: "Az OSM-re épül", url: "https://openrouteservice.org" },
    ],
    methodTitle: "Módszertan",
    method: [
      "A tényszerű mezők (koordináták, nevek, látnivalók, események, kemping-helyek) közvetlenül a fent felsorolt, hivatkozott adatkészletekből származnak.",
      "A leíró szövegek mesterséges intelligenciával támogatott szintézissel készülnek, mindig ezekre a forrásokra alapozva, nem szabad kitalálás.",
      "Minden úti-cél oldal Schema.org strukturált adatban kapcsolja össze a mögöttes entitásokat (sameAs → Wikipedia) és felsorolja a forrásait (isBasedOn) licenccel és attribúcióval együtt.",
    ],
    trustTitle: "Miért megbízható",
    trust: [
      "Az adat ellenőrizhető: a strukturált adatban szereplő forrás-linkek és licencek alapján bárki (ember vagy AI) visszakövetheti az elsődleges forrásig.",
      "Folyamatosan frissítjük az adatot a forrásokból, és attribúciót adunk minden licenc szabályai szerint.",
    ],
  },
  de: {
    title: "Unsere Datenquellen",
    subtitle: "Woher die Reisedaten von Plizio stammen und wie wir sie verarbeiten",
    intro: [
      "Die Reiseinhalte von Plizio basieren auf offenen, verlässlichen Primärquellen, nicht auf gescrapten oder erfundenen Daten. Im Folgenden zeigen wir transparent, welche Daten woher kommen.",
    ],
    sourcesTitle: "Unsere Quellen",
    sources: [
      { icon: MapPin, name: "OpenStreetMap", provides: "Orte, Koordinaten, Sehenswürdigkeiten, Stellplätze & Campingplätze", license: "ODbL — © OpenStreetMap-Mitwirkende", url: "https://www.openstreetmap.org" },
      { icon: Database, name: "Wikidata", provides: "Entitäts-Identität, strukturierte Fakten, Bilder", license: "CC0 (gemeinfrei)", url: "https://www.wikidata.org" },
      { icon: BookOpen, name: "Wikipedia", provides: "Hintergrundwissen zur Fundierung der Beschreibungen", license: "CC BY-SA", url: "https://www.wikipedia.org" },
      { icon: CloudSun, name: "Open-Meteo", provides: "Klimawerte, Wetterdaten", license: "Offene Daten", url: "https://open-meteo.com" },
      { icon: CalendarDays, name: "Ticketmaster & offizielle Feeds", provides: "Datierte, lokale Veranstaltungen", license: "Offizielle API / Feed", url: "https://www.ticketmaster.com" },
      { icon: Route, name: "OpenRouteService", provides: "Routenplanung (PlizioGo) auf dem OSM-Straßennetz", license: "Basiert auf OSM", url: "https://openrouteservice.org" },
    ],
    methodTitle: "Methodik",
    method: [
      "Faktische Felder (Koordinaten, Namen, Sehenswürdigkeiten, Veranstaltungen, Stellplätze) stammen direkt aus den oben genannten, zitierten Datensätzen.",
      "Beschreibende Texte entstehen durch KI-gestützte Synthese, stets fundiert auf diesen Quellen, ohne freie Erfindung.",
      "Jede Reiseziel-Seite verknüpft die zugrunde liegenden Entitäten in Schema.org-Daten (sameAs → Wikipedia) und nennt ihre Quellen (isBasedOn) samt Lizenz und Attribution.",
    ],
    trustTitle: "Warum verlässlich",
    trust: [
      "Die Daten sind überprüfbar: Über die Quell-Links und Lizenzen in den strukturierten Daten kann jeder (Mensch oder KI) bis zur Primärquelle zurückverfolgen.",
      "Wir aktualisieren die Daten laufend aus den Quellen und geben Attribution gemäß den jeweiligen Lizenzregeln.",
    ],
  },
  ro: {
    title: "Sursele noastre de date",
    subtitle: "De unde provin datele de călătorie Plizio și cum le prelucrăm",
    intro: [
      "Conținutul de călătorie Plizio se bazează pe surse de date deschise, autoritare și primare, nu pe date colectate abuziv sau inventate. Mai jos arătăm transparent ce date de unde provin.",
    ],
    sourcesTitle: "Sursele noastre",
    sources: [
      { icon: MapPin, name: "OpenStreetMap", provides: "Locuri, coordonate, obiective, popasuri și campinguri", license: "ODbL — © contribuitorii OpenStreetMap", url: "https://www.openstreetmap.org" },
      { icon: Database, name: "Wikidata", provides: "Identitatea entităților, fapte structurate, imagini", license: "CC0 (domeniu public)", url: "https://www.wikidata.org" },
      { icon: BookOpen, name: "Wikipedia", provides: "Cunoștințe de fond pentru fundamentarea descrierilor", license: "CC BY-SA", url: "https://www.wikipedia.org" },
      { icon: CloudSun, name: "Open-Meteo", provides: "Normale climatice, date meteo", license: "Date deschise", url: "https://open-meteo.com" },
      { icon: CalendarDays, name: "Ticketmaster & feeduri oficiale", provides: "Evenimente locale datate", license: "API / feed oficial", url: "https://www.ticketmaster.com" },
      { icon: Route, name: "OpenRouteService", provides: "Planificare trasee (PlizioGo) pe rețeaua rutieră OSM", license: "Bazat pe OSM", url: "https://openrouteservice.org" },
    ],
    methodTitle: "Metodologie",
    method: [
      "Câmpurile factuale (coordonate, nume, obiective, evenimente, campinguri) provin direct din seturile de date citate mai sus.",
      "Textele descriptive sunt create prin sinteză asistată de inteligență artificială, întotdeauna fundamentate pe aceste surse, fără invenție liberă.",
      "Fiecare pagină de destinație leagă entitățile de bază în date Schema.org (sameAs → Wikipedia) și își declară sursele (isBasedOn) cu licență și atribuire.",
    ],
    trustTitle: "De ce este de încredere",
    trust: [
      "Datele sunt verificabile: prin linkurile sursă și licențele din datele structurate, oricine (om sau AI) poate urmări până la sursa primară.",
      "Actualizăm continuu datele din surse și oferim atribuire conform regulilor fiecărei licențe.",
    ],
  },
  en: {
    title: "Our Data Sources",
    subtitle: "Where Plizio's travel data comes from and how we process it",
    intro: [
      "Plizio's travel content is built on open, authoritative, primary data sources, not scraped or invented data. Below we transparently show which data comes from where.",
    ],
    sourcesTitle: "Our sources",
    sources: [
      { icon: MapPin, name: "OpenStreetMap", provides: "Places, coordinates, sights, campsites & motorhome stops", license: "ODbL — © OpenStreetMap contributors", url: "https://www.openstreetmap.org" },
      { icon: Database, name: "Wikidata", provides: "Entity identity, structured facts, images", license: "CC0 (public domain)", url: "https://www.wikidata.org" },
      { icon: BookOpen, name: "Wikipedia", provides: "Background knowledge to ground descriptions", license: "CC BY-SA", url: "https://www.wikipedia.org" },
      { icon: CloudSun, name: "Open-Meteo", provides: "Climate normals, weather data", license: "Open data", url: "https://open-meteo.com" },
      { icon: CalendarDays, name: "Ticketmaster & official feeds", provides: "Dated, local events", license: "Official API / feed", url: "https://www.ticketmaster.com" },
      { icon: Route, name: "OpenRouteService", provides: "Route planning (PlizioGo) over the OSM road network", license: "Built on OSM", url: "https://openrouteservice.org" },
    ],
    methodTitle: "Methodology",
    method: [
      "Factual fields (coordinates, names, sights, events, campsites) come directly from the cited datasets listed above.",
      "Descriptive prose is AI-assisted synthesis, always grounded on these sources, with no free invention.",
      "Every destination page links its underlying entities in Schema.org data (sameAs → Wikipedia) and declares its sources (isBasedOn) with license and attribution.",
    ],
    trustTitle: "Why it's trustworthy",
    trust: [
      "The data is verifiable: via the source links and licenses in the structured data, anyone (human or AI) can trace back to the primary source.",
      "We continuously refresh data from the sources and provide attribution per each license's rules.",
    ],
  },
};

export default function DataSourcesPage() {
  const { lang } = useLang();
  const c = CONTENT[lang ?? "hu"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: c.title,
    description: c.subtitle,
    url: "https://plizio.com/data-sources/",
    isBasedOn: c.sources.map((s) => ({ "@type": "Dataset", name: s.name, url: s.url, license: s.license })),
  };

  return (
    <SimplePageLayout title={c.title} subtitle={c.subtitle}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <div className="space-y-3 mt-6">
        {c.intro.map((p, i) => <p key={i} className="text-white/80 leading-relaxed m-0">{p}</p>)}
      </div>

      <h2 className="text-xl font-bold text-white mb-4 mt-10">{c.sourcesTitle}</h2>
      <ul className="space-y-4 list-none p-0 m-0">
        {c.sources.map((s, idx) => {
          const Icon = s.icon;
          return (
            <li key={idx} className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-300">
                  <Icon size={20} />
                </div>
              </div>
              <div>
                <a href={s.url} target="_blank" rel="noopener nofollow" className="text-cyan-300 hover:text-cyan-200 font-semibold underline-offset-2 hover:underline">{s.name}</a>
                <p className="text-white/80 leading-relaxed m-0 mt-1">{s.provides}</p>
                <p className="text-white/60 text-sm m-0 mt-0.5">{s.license}</p>
              </div>
            </li>
          );
        })}
      </ul>

      <h2 className="text-xl font-bold text-white mb-3 mt-10">{c.methodTitle}</h2>
      <div className="space-y-3">
        {c.method.map((p, i) => <p key={i} className="text-white/80 leading-relaxed m-0">{p}</p>)}
      </div>

      <div className="mt-10 pt-6 border-t border-white/10">
        <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2"><ShieldCheck size={20} className="text-emerald-400" />{c.trustTitle}</h2>
        <div className="space-y-3">
          {c.trust.map((p, i) => <p key={i} className="text-white/80 leading-relaxed m-0">{p}</p>)}
        </div>
      </div>
    </SimplePageLayout>
  );
}
