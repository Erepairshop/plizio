"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { GRADE_PLANETS } from "../astrodeutsch/planets";

const STAR_DATA = Array.from({ length: 80 }, (_, i) => ({
  id: i, x: (i * 37 + 13) % 100, y: (i * 53 + 7) % 100,
  size: (i % 4) * 0.6 + 0.3, dur: 1.8 + (i % 6) * 0.5, delay: (i % 9) * 0.35,
}));

function Starfield() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {STAR_DATA.map((s) => (
        <motion.div key={s.id} className="absolute rounded-full bg-white"
          style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
          animate={{ opacity: [0.05, 0.85, 0.05] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }} />
      ))}
    </div>
  );
}

const GRADE_CLASSES = [
  {
    grade: 5, route: "/astro-geographie/5",
    planetName: { en: "Terra Nova", hu: "Terra Nova", de: "Terra Nova", ro: "Terra Nova" },
    label: { en: "Class 5", hu: "5. osztály", de: "Klasse 5", ro: "Clasa 5" },
    subtitle: { en: "Maps & Rivers", hu: "Térképek és folyók", de: "Karten & Flüsse", ro: "Hărți și râuri" },
    color: "#14B8A6",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(20,184,166,0.25) 0%, rgba(20,184,166,0.05) 60%)",
    border: "rgba(20,184,166,0.5)",
    glow: "rgba(20,184,166,0.35)",
  },
  {
    grade: 6, route: "/astro-geographie/6",
    planetName: { en: "Climatia", hu: "Climatia", de: "Climatia", ro: "Climatia" },
    label: { en: "Class 6", hu: "6. osztály", de: "Klasse 6", ro: "Clasa 6" },
    subtitle: { en: "Earth Layers & Water", hu: "A Föld rétegei és a víz", de: "Erdschichten & Wasser", ro: "Straturile Pământului și Apa" },
    color: "#3B82F6",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 60%)",
    border: "rgba(59,130,246,0.5)",
    glow: "rgba(59,130,246,0.35)",
  },
  {
    grade: 7, route: "/astro-geographie/7",
    planetName: { en: "Pangea", hu: "Pangea", de: "Pangea", ro: "Pangea" },
    label: { en: "Class 7", hu: "7. osztály", de: "Klasse 7", ro: "Clasa 7" },
    subtitle: { en: "Continents", hu: "Kontinensek", de: "Kontinente", ro: "Continente" },
    color: "#10B981",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0.05) 60%)",
    border: "rgba(16,185,129,0.5)",
    glow: "rgba(16,185,129,0.35)",
  },
  {
    grade: 8, route: "/astro-geographie/8",
    planetName: { en: "Globalia", hu: "Globalia", de: "Globalia", ro: "Globalia" },
    label: { en: "Class 8", hu: "8. osztály", de: "Klasse 8", ro: "Clasa 8" },
    subtitle: { en: "Globalization", hu: "Globalizáció", de: "Globalisierung", ro: "Globalizare" },
    color: "#06B6D4",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(6,182,212,0.25) 0%, rgba(6,182,212,0.05) 60%)",
    border: "rgba(6,182,212,0.5)",
    glow: "rgba(6,182,212,0.35)",
  },
];

const HUB_LABELS: Record<string, Record<string, string>> = {
  title: { en: "AstroGeographie", hu: "AstroFöldrajz", de: "AstroGeographie", ro: "AstroGeografie" },
  subtitle: { en: "Geography Galaxy · Classes 5–8", hu: "Földrajz Galaxis · 5–8. osztály", de: "Geografie-Galaxie · Klasse 5–8", ro: "Galaxia geografiei · Clasele 5–8" },
  choosePlanet: { en: "Choose your destination!", hu: "Válaszd ki az úticélod!", de: "Wähle dein Ziel!", ro: "Alege-ți destinația!" },
  islands: { en: "islands", hu: "sziget", de: "Inseln", ro: "insule" },
  missions: { en: "missions", hu: "misszió", de: "Missionen", ro: "misiuni" },
};

export default function AstroGeographieHubPage() {
  const { lang } = useLang();
  const router = useRouter();

  // Progress will be tracked properly once the progress logic is added for Geography.
  // For now we set them to [0,0,0,0] as mock data.
  const [progress, setProgress] = useState<number[]>([0, 0, 0, 0]);

  type L = "en" | "hu" | "de" | "ro";
  const l = (["en","hu","de","ro"].includes(lang) ? lang : "en") as L;

  return (
    <div className="min-h-screen bg-[#060614] flex flex-col relative overflow-hidden">
      <Starfield />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between px-4 pt-5 pb-2 flex-shrink-0">
        <button onClick={() => router.push("/")}
          className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 transition-colors">
          <ChevronLeft size={18} />
        </button>
        <div className="text-center">
          <h1 className="text-xl font-black text-white">🌍 {HUB_LABELS.title[l]}</h1>
          <p className="text-[10px] text-white/50 font-medium uppercase tracking-widest">{HUB_LABELS.subtitle[l]}</p>
        </div>
        <div className="w-9" />
      </div>

      {/* Choose era text */}
      <p className="relative z-10 text-center text-white/60 text-sm font-medium px-4 py-3">
        {HUB_LABELS.choosePlanet[l]}
      </p>

      {/* Era grid */}
      <div className="relative z-10 flex-1 overflow-y-auto px-4 pb-8">
        <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
          {GRADE_CLASSES.map((g, i) => {
            const done = progress[i];
            const pct = Math.round((done / 9) * 100);
            return (
              <motion.button
                key={g.grade}
                onClick={() => router.push(g.route)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="relative rounded-3xl p-5 text-left overflow-hidden"
                style={{ background: g.bg, border: `2px solid ${g.border}` }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Glow blob */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full pointer-events-none"
                  style={{ background: g.glow, filter: "blur(30px)" }} />

                <div className="relative flex items-center gap-4">
                  {/* Era icon */}
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${g.color}20`, border: `2px solid ${g.color}40` }}
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {React.createElement(GRADE_PLANETS[i + 4], { size: 44 })}
                  </motion.div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-black px-2 py-0.5 rounded-full"
                        style={{ background: `${g.color}25`, color: g.color }}>
                        {g.label[l] ?? g.label.de}
                      </span>
                      <span className="text-xs text-white/40 font-medium truncate">
                        {g.planetName[l] ?? g.planetName.de}
                      </span>
                    </div>
                    <p className="font-black text-white text-base leading-tight">{g.subtitle[l] ?? g.subtitle.de}</p>
                    {/* Progress bar */}
                    <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${g.color}99, ${g.color})` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, delay: i * 0.05 + 0.3 }} />
                    </div>
                    <p className="text-xs text-white/40 mt-1 font-medium">
                      {done}/9 {HUB_LABELS.islands[l] ?? HUB_LABELS.islands.de}
                      {done === 9 && " 🏆"}
                    </p>
                  </div>

                  {/* Chevron */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: `${g.color}20` }}>
                    <svg viewBox="0 0 24 24" width={16} height={16} fill="none" stroke={g.color} strokeWidth={2.5}>
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
