"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";
import { useLang } from "@/components/LanguageProvider";

const InteractiveMap = dynamic(
  () => import("@/lib/visualLab/components/InteractiveMap").then((mod) => mod.InteractiveMap),
  { ssr: false }
);

type Lang = "de" | "hu" | "ro" | "en";

const TITLE: Record<Lang, string> = {
  de: "Malta Karte",
  hu: "Málta térkép",
  ro: "Harta Malta",
  en: "Malta Map",
};

export default function MaltaMapPage() {
  const router = useRouter();
  const { lang } = useLang();
  const l = (lang as Lang) ?? "hu";

  return (
    <div className="fixed inset-0 bg-[#060614] flex flex-col">
      <header className="flex items-center gap-3 px-4 pt-4 pb-2 shrink-0">
        <button
          onClick={() => router.push("/europe-map")}
          className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-white/20 transition"
          aria-label="back"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-black text-white leading-tight">{TITLE[l]}</h1>
      </header>
      <main className="flex-1 min-h-0 relative">
        <InteractiveMap lang={"mt" as any} subject="geographie" grade={5} />
      </main>
    </div>
  );
}
