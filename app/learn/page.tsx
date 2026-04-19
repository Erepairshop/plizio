"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronLeft, Map } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import SubjectPicker from "@/components/SubjectPicker";

type Lang = "de" | "hu" | "ro" | "en";

const TITLE: Record<Lang, string> = {
  de: "Lernen",
  hu: "Tanulás",
  ro: "Învățare",
  en: "Learn",
};

const SUBTITLE: Record<Lang, string> = {
  de: "Wähle Klasse und Fach",
  hu: "Válassz osztályt és tantárgyat",
  ro: "Alege clasa și materia",
  en: "Pick grade and subject",
};

const EUROPA_LABEL: Record<Lang, string> = {
  de: "Europakarte",
  hu: "Európa térkép",
  ro: "Harta Europei",
  en: "Europe Map",
};

const GLOBE_LABEL: Record<Lang, string> = {
  de: "3D Globus",
  hu: "3D Glóbusz",
  ro: "Glob 3D",
  en: "3D Globe",
};

export default function LearnPage() {
  const router = useRouter();
  const { lang } = useLang();
  const l = (lang as Lang) ?? "de";

  return (
    <div className="min-h-screen bg-[#060614] relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${(i * 37 + 13) % 100}%`,
              top: `${(i * 53 + 7) % 100}%`,
              width: (i % 4) * 0.5 + 0.5,
              height: (i % 4) * 0.5 + 0.5,
            }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{ duration: 2 + (i % 5) * 0.4, delay: (i % 9) * 0.3, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="flex items-center gap-3 px-4 pt-5 pb-3 max-w-4xl mx-auto">
          <button
            onClick={() => router.push("/")}
            className="w-9 h-9 rounded-full bg-white/10 text-white/70 flex items-center justify-center hover:bg-white/20 transition"
            aria-label="back"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex-1">
            <h1 className="text-xl font-black text-white leading-tight">{TITLE[l]}</h1>
            <p className="text-white/50 text-xs">{SUBTITLE[l]}</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push("/world-globe")}
              aria-label={GLOBE_LABEL[l]}
              className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 hover:from-indigo-500/45 hover:to-purple-500/45 border border-white/15 text-white/90 px-3 py-1.5 text-xs font-bold transition"
            >
              <Map size={14} className="text-indigo-300" />
              {GLOBE_LABEL[l]}
            </button>
            <button
              onClick={() => router.push("/europe-map")}
              aria-label={EUROPA_LABEL[l]}
              className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 hover:from-cyan-500/45 hover:to-blue-500/45 border border-white/15 text-white/90 px-3 py-1.5 text-xs font-bold transition"
            >
              <Map size={14} className="text-cyan-300" />
              {EUROPA_LABEL[l]}
            </button>
          </div>
        </header>

        <SubjectPicker />
      </div>
    </div>
  );
}
