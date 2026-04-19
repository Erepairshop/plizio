"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import EuropeMap from "@/components/EuropeMap";

type Lang = "de" | "hu" | "ro" | "en";

const TITLE: Record<Lang, string> = {
  de: "Europakarte",
  hu: "Európa térkép",
  ro: "Harta Europei",
  en: "Europe Map",
};

const SUBTITLE: Record<Lang, string> = {
  de: "Klicke auf ein Land",
  hu: "Kattints egy országra",
  ro: "Apasă pe o țară",
  en: "Tap a country",
};

export default function EuropeMapPage() {
  const router = useRouter();
  const { lang } = useLang();
  const l = (lang as Lang) ?? "de";

  return (
    <div className="min-h-screen bg-[#060614] relative">
      <header className="flex items-center gap-3 px-4 pt-5 pb-3 max-w-5xl mx-auto">
        <button
          onClick={() => router.push("/learn")}
          className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-white/20 transition"
          aria-label="back"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex-1">
          <h1 className="text-xl font-black text-white leading-tight">{TITLE[l]}</h1>
          <p className="text-white/50 text-xs">{SUBTITLE[l]}</p>
        </div>
      </header>
      <main className="px-4 pb-10 max-w-5xl mx-auto">
        <EuropeMap lang={l} />
      </main>
    </div>
  );
}
