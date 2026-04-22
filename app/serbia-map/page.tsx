"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";
import { useLang } from "@/components/LanguageProvider";

const InteractiveMap = dynamic(() => import("@/components/InteractiveMap"), { ssr: false });

const TITLE = {
  de: "Serbien Karte",
  hu: "Szerbia Térkép",
  ro: "Harta Serbiei",
  en: "Serbia Map",
};

const DESC = {
  de: "Entdecke Serbiens Geographie mit dieser interaktiven Karte.",
  hu: "Fedezd fel Szerbia földrajzát ezzel az interaktív térképpel.",
  ro: "Descoperă geografia Serbiei cu această hartă interactivă.",
  en: "Explore Serbia's geography with this interactive map.",
};

export default function SerbiaMapPage() {
  const router = useRouter();
  const { lang } = useLang();
  const l = lang as "de" | "hu" | "ro" | "en";

  return (
    <div className="flex flex-col h-screen bg-[#0E1117] overflow-hidden">
      <header className="flex items-center gap-4 p-4 shrink-0 shadow-sm z-10 bg-slate-900/50 backdrop-blur-sm border-b border-slate-800">
        <button
          onClick={() => router.back()}
          className="p-2 rounded-xl bg-slate-800/80 text-white hover:bg-slate-700 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-black text-white leading-tight">{TITLE[l]}</h1>
      </header>
      <main className="flex-1 min-h-0 relative">
        <InteractiveMap lang={"rs" as any} subject="geographie" grade={5} defaultCoords={[44.0165, 21.0059]} defaultZoom={6} />
      </main>
    </div>
  );
}
