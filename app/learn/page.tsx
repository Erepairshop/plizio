"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import SubjectPicker from "@/components/SubjectPicker";
import ContinentIcon, { type Continent } from "@/components/ContinentIcon";

type Lang = "de" | "hu" | "ro" | "en";

const COPY: Record<Lang, { title: string; subtitle: string; back: string; maps: string }> = {
  de: { title: "Lernen", subtitle: "Wähle Klasse und Fach", back: "Zurück", maps: "Interaktive Karten" },
  hu: { title: "Tanulás", subtitle: "Válassz osztályt és tantárgyat", back: "Vissza", maps: "Interaktív térképek" },
  ro: { title: "Învățare", subtitle: "Alege clasa și materia", back: "Înapoi", maps: "Hărți interactive" },
  en: { title: "Learn", subtitle: "Pick grade and subject", back: "Back", maps: "Interactive maps" },
};

const MAPS: Array<{
  route: string;
  continent: Continent;
  label: Record<Lang, string>;
}> = [
  { route: "/world-globe", continent: "world", label: { de: "3D Globus", hu: "3D glóbusz", ro: "Glob 3D", en: "3D Globe" } },
  { route: "/europe-map", continent: "europe", label: { de: "Europa", hu: "Európa", ro: "Europa", en: "Europe" } },
  { route: "/northamerica-map", continent: "northamerica", label: { de: "Nordamerika", hu: "Észak-Amerika", ro: "America de Nord", en: "North America" } },
  { route: "/southamerica-map", continent: "southamerica", label: { de: "Südamerika", hu: "Dél-Amerika", ro: "America de Sud", en: "South America" } },
  { route: "/africa-map", continent: "africa", label: { de: "Afrika", hu: "Afrika", ro: "Africa", en: "Africa" } },
  { route: "/asia-map", continent: "asia", label: { de: "Asien", hu: "Ázsia", ro: "Asia", en: "Asia" } },
  { route: "/oceania-map", continent: "oceania", label: { de: "Ozeanien", hu: "Óceánia", ro: "Oceania", en: "Oceania" } },
];

export default function LearnPage() {
  const router = useRouter();
  const { lang } = useLang();
  const l: Lang = ["de", "hu", "ro", "en"].includes(lang) ? (lang as Lang) : "de";
  const t = COPY[l];

  return (
    <main className="plizio-paper relative min-h-screen overflow-hidden pb-12">
      <header className="learn-paper-header relative z-10">
        <div className="mx-auto max-w-5xl px-4 py-5">
          <div className="flex items-center gap-3">
            <button
              onClick={() => router.push("/")}
              className="paper-icon-button shrink-0"
              aria-label={t.back}
            >
              <ChevronLeft size={19} />
            </button>
            <div className="min-w-0 flex-1">
              <p className="paper-kicker">PLIZIO / LEARNING LAB</p>
              <h1 className="text-3xl font-black leading-tight text-[#211d18]">{t.title}</h1>
              <p className="text-sm text-[#6b6356]">{t.subtitle}</p>
            </div>
          </div>

          <div className="mt-5 border-t border-[#ddd4c2] pt-4">
            <p className="mb-2 text-[10px] font-extrabold uppercase tracking-[.18em] text-[#6b6356]">{t.maps}</p>
            <nav className="flex gap-2 overflow-x-auto pb-1" aria-label={t.maps}>
              {MAPS.map((map) => (
                <button
                  key={map.route}
                  onClick={() => router.push(map.route)}
                  aria-label={map.label[l]}
                  className="learn-map-link shrink-0"
                >
                  <ContinentIcon continent={map.continent} size={25} title={map.label[l]} />
                  {map.label[l]}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-5xl">
        <SubjectPicker />
      </section>
    </main>
  );
}
