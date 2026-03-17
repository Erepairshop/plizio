"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { GRADE_PLANETS } from "./planets";
import { loadK1Progress } from "@/lib/astroDeutsch";
import { loadK2Progress } from "@/lib/astroDeutsch2";
import { loadK3Progress } from "@/lib/astroDeutsch3";
import { loadK4Progress } from "@/lib/astroDeutsch4";
import { loadK5Progress } from "@/lib/astroDeutsch5";
import { loadK6Progress } from "@/lib/astroDeutsch6";
import { loadK7Progress } from "@/lib/astroDeutsch7";

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
    grade: 1, route: "/astrodeutsch/1",
    planetName: { en: "Buchstabia", hu: "Buchstabia", de: "Buchstabia", ro: "Buchstabia" },
    label: { en: "Class 1", hu: "1. osztály", de: "Klasse 1", ro: "Clasa 1" },
    subtitle: { en: "Letters & Words", hu: "Betűk & Szavak", de: "Buchstaben & Wörter", ro: "Litere & Cuvinte" },
    color: "#FF2D78",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(255,45,120,0.25) 0%, rgba(255,45,120,0.05) 60%)",
    border: "rgba(255,45,120,0.5)",
    glow: "rgba(255,45,120,0.35)",
  },
  {
    grade: 2, route: "/astrodeutsch/2",
    planetName: { en: "Wortania", hu: "Wortania", de: "Wortania", ro: "Wortania" },
    label: { en: "Class 2", hu: "2. osztály", de: "Klasse 2", ro: "Clasa 2" },
    subtitle: { en: "Nouns & Verbs", hu: "Főnév & Ige", de: "Nomen & Verben", ro: "Substantive & Verbe" },
    color: "#3B82F6",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 60%)",
    border: "rgba(59,130,246,0.5)",
    glow: "rgba(59,130,246,0.35)",
  },
  {
    grade: 3, route: "/astrodeutsch/3",
    planetName: { en: "Grammatos", hu: "Grammatos", de: "Grammatos", ro: "Grammatos" },
    label: { en: "Class 3", hu: "3. osztály", de: "Klasse 3", ro: "Clasa 3" },
    subtitle: { en: "Grammar & Sentences", hu: "Nyelvtan & Mondatok", de: "Grammatik & Sätze", ro: "Gramatică & Propoziții" },
    color: "#10B981",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0.05) 60%)",
    border: "rgba(16,185,129,0.5)",
    glow: "rgba(16,185,129,0.35)",
  },
  {
    grade: 4, route: "/astrodeutsch/4",
    planetName: { en: "Kasusheim", hu: "Kasusheim", de: "Kasusheim", ro: "Kasusheim" },
    label: { en: "Class 4", hu: "4. osztály", de: "Klasse 4", ro: "Clasa 4" },
    subtitle: { en: "Cases & Tenses", hu: "Esetek & Igeidők", de: "Kasus & Zeitformen", ro: "Cazuri & Timpuri" },
    color: "#F59E0B",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(245,158,11,0.25) 0%, rgba(245,158,11,0.05) 60%)",
    border: "rgba(245,158,11,0.5)",
    glow: "rgba(245,158,11,0.35)",
  },
  {
    grade: 5, route: "/astrodeutsch/5",
    planet: "💜",
    planetName: { en: "Satzburg", hu: "Satzburg", de: "Satzburg", ro: "Satzburg" },
    label: { en: "Class 5", hu: "5. osztály", de: "Klasse 5", ro: "Clasa 5" },
    subtitle: { en: "Pronouns & Passive", hu: "Névmások & Szenvedő", de: "Pronomen & Passiv", ro: "Pronume & Pasiv" },
    color: "#6366F1",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0.05) 60%)",
    border: "rgba(99,102,241,0.5)",
    glow: "rgba(99,102,241,0.35)",
  },
  {
    grade: 6, route: "/astrodeutsch/6",
    planet: "🪐",
    planetName: { en: "Stilonia", hu: "Stilonia", de: "Stilonia", ro: "Stilonia" },
    label: { en: "Class 6", hu: "6. osztály", de: "Klasse 6", ro: "Clasa 6" },
    subtitle: { en: "Konjunktiv & Style", hu: "Konjunktív & Stílus", de: "Konjunktiv & Stilmittel", ro: "Conjunctiv & Stil" },
    color: "#FF9500",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(255,149,0,0.25) 0%, rgba(255,149,0,0.05) 60%)",
    border: "rgba(255,149,0,0.5)",
    glow: "rgba(255,149,0,0.35)",
  },
  {
    grade: 7, route: "/astrodeutsch/7",
    planet: "✨",
    planetName: { en: "Rhetorika", hu: "Rhetorika", de: "Rhetorika", ro: "Rhetorika" },
    label: { en: "Class 7", hu: "7. osztály", de: "Klasse 7", ro: "Clasa 7" },
    subtitle: { en: "Konjunktiv I & Rhetoric", hu: "Konjunktív I & Retorika", de: "Konjunktiv I & Rhetorik", ro: "Conjunctiv I & Retorică" },
    color: "#B44DFF",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(180,77,255,0.25) 0%, rgba(180,77,255,0.05) 60%)",
    border: "rgba(180,77,255,0.5)",
    glow: "rgba(180,77,255,0.35)",
  },
];

const HUB_LABELS: Record<string, Record<string, string>> = {
  title: { en: "AstroDeutsch", hu: "AstroDeutsch", de: "AstroDeutsch", ro: "AstroDeutsch" },
  subtitle: { en: "German Galaxy · Classes 1–7", hu: "Német Galaxis · 1–7. osztály", de: "Deutsch-Galaxie · Klasse 1–7", ro: "Galaxia germană · Clasele 1–7" },
  choosePlanet: { en: "Choose your planet!", hu: "Válaszd ki a bolygódat!", de: "Wähle deinen Planeten!", ro: "Alege-ți planeta!" },
  islands: { en: "islands", hu: "sziget", de: "Inseln", ro: "insule" },
  missions: { en: "missions", hu: "misszió", de: "Missionen", ro: "misiuni" },
};

export default function AstroDeutschHubPage() {
  const { lang } = useLang();
  const router = useRouter();

  const [progress, setProgress] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const p1 = loadK1Progress();
    const p2 = loadK2Progress();
    const p3 = loadK3Progress();
    const p4 = loadK4Progress();
    const p5 = loadK5Progress();
    const p6 = loadK6Progress();
    const p7 = loadK7Progress();
    setProgress([
      p1.completedIslands.length,
      p2.completedIslands.length,
      p3.completedIslands.length,
      p4.completedIslands.length,
      p5.completedIslands.length,
      p6.completedIslands.length,
      p7.completedIslands.length,
    ]);
  }, []);

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
          <h1 className="text-xl font-black text-white">🇩🇪 {HUB_LABELS.title[l]}</h1>
          <p className="text-[10px] text-white/50 font-medium uppercase tracking-widest">{HUB_LABELS.subtitle[l]}</p>
        </div>
        <div className="w-9" />
      </div>

      {/* Choose planet text */}
      <p className="relative z-10 text-center text-white/60 text-sm font-medium px-4 py-3">
        {HUB_LABELS.choosePlanet[l]}
      </p>

      {/* Planet grid */}
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
                  {/* Planet icon */}
                  <motion.div
                    className="text-4xl flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${g.color}20`, border: `2px solid ${g.color}40` }}
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {g.planet}
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
