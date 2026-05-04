"use client";

import { useEffect } from "react";
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

export default function EuropeMapPage() {
  const router = useRouter();
  const { lang } = useLang();
  const l = (lang as Lang) ?? "de";

  // Idle-prefetch the heavy InteractiveMap chunk so the first country click is instant.
  useEffect(() => {
    const idle = (cb: () => void) =>
      typeof (window as any).requestIdleCallback === "function"
        ? (window as any).requestIdleCallback(cb, { timeout: 2000 })
        : window.setTimeout(cb, 600);
    idle(() => {
      import("@/lib/visualLab/components/InteractiveMap").catch(() => {});
    });
  }, []);

  return (
    <div className="fixed inset-0 bg-[#060614] flex flex-col">
      <header className="flex items-center gap-3 px-4 pt-4 pb-2 shrink-0">
        <button
          onClick={() => router.push("/learn")}
          className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-white/20 transition"
          aria-label="back"
        >
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-black text-white leading-tight">{TITLE[l]}</h1>
      </header>
      <main className="flex-1 min-h-0 relative">
        <EuropeMap lang={l} />
      </main>
    </div>
  );
}
