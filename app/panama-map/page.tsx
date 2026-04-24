"use client";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import dynamic from "next/dynamic";
import { useLang } from "@/components/LanguageProvider";

const InteractiveMap = dynamic(
  () => import("@/lib/visualLab/components/InteractiveMap").then(m => m.InteractiveMap),
  { ssr: false, loading: () => <div className="w-full h-full bg-slate-900" /> }
);

type Lang = "de" | "hu" | "ro" | "en";
const TITLE: Record<Lang, string> = {
  de: "Panama Karte",
  hu: "Panama térkép",
  ro: "Harta Panama",
  en: "Panama Map",
};

export default function Page() {
  const router = useRouter();
  const { lang } = useLang();
  const l = (lang as Lang) ?? "en";
  return (
    <div className="fixed inset-0 bg-[#060614] flex flex-col">
      <header className="flex items-center gap-3 px-4 pt-4 pb-2 shrink-0">
        <button onClick={() => router.push("/northamerica-map")} className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-white/20 transition">
          <ChevronLeft size={18} />
        </button>
        <h1 className="text-lg font-black text-white leading-tight">{TITLE[l]}</h1>
      </header>
      <main className="flex-1 min-h-0 relative">
        <InteractiveMap lang={"pa" as any} subject="geographie" grade={5} />
      </main>
    </div>
  );
}
