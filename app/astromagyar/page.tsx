"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { GRADE_PLANETS } from "./planets";
import { loadO1Progress } from "@/lib/astroMagyar";
import { loadO2Progress } from "@/lib/astroMagyar2";
import { loadO4Progress } from "@/lib/astroMagyar4";

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
    grade: 1, route: "/astromagyar/1",
    planetName: { en: "Betűria", hu: "Betűria", de: "Betűria", ro: "Betűria" },
    label: { en: "Grade 1", hu: "1. osztály", de: "Klasse 1", ro: "Clasa 1" },
    subtitle: { en: "Hungarian Language", hu: "Magyar Nyelv", de: "Ungarische Sprache", ro: "Limba Maghiară" },
    color: "#FF2D78",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(255,45,120,0.25) 0%, rgba(255,45,120,0.05) 60%)",
    border: "rgba(255,45,120,0.5)",
    glow: "rgba(255,45,120,0.35)",
  },
  {
    grade: 2, route: "/astromagyar/2",
    planetName: { en: "Szókinesia", hu: "Szókinesia", de: "Szókinesia", ro: "Szókinesia" },
    label: { en: "Grade 2", hu: "2. osztály", de: "Klasse 2", ro: "Clasa 2" },
    subtitle: { en: "Hungarian Language", hu: "Magyar Nyelv", de: "Ungarische Sprache", ro: "Limba Maghiară" },
    color: "#00D4FF",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(0,212,255,0.25) 0%, rgba(0,212,255,0.05) 60%)",
    border: "rgba(0,212,255,0.5)",
    glow: "rgba(0,212,255,0.35)",
  },
  {
    grade: 4, route: "/astromagyar/4",
    planetName: { en: "Aureon", hu: "Aureon", de: "Aureon", ro: "Aureon" },
    label: { en: "Grade 4", hu: "4. osztály", de: "Klasse 4", ro: "Clasa 4" },
    subtitle: { en: "Hungarian Language", hu: "Magyar Nyelv", de: "Ungarische Sprache", ro: "Limba Maghiară" },
    color: "#FFD700",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(255,215,0,0.25) 0%, rgba(255,215,0,0.05) 60%)",
    border: "rgba(255,215,0,0.5)",
    glow: "rgba(255,215,0,0.35)",
  },
];

export default function AstroMagyarHub() {
  const router = useRouter();
  const { lang } = useLang();
  const [o1Done, setO1Done] = useState(0);
  const [o2Done, setO2Done] = useState(0);
  const [o4Done, setO4Done] = useState(0);

  useEffect(() => {
    const p1 = loadO1Progress();
    setO1Done(p1.completedIslands.length);
    const p2 = loadO2Progress();
    setO2Done(p2.completedIslands.length);
    const p4 = loadO4Progress();
    setO4Done(p4.completedIslands.length);
  }, []);

  const handleGradeSelect = (route: string) => {
    router.push(route);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0A0A1A] to-slate-950 relative overflow-hidden">
      <Starfield />

      {/* Header */}
      <motion.div
        className="relative z-40 flex items-center justify-between px-4 py-6 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <ChevronLeft size={20} />
          <span className="text-xs font-bold uppercase tracking-wider">Back</span>
        </button>
        <div className="text-center flex-1">
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            AstroMagyar 🇭🇺
          </h1>
          <p className="text-xs sm:text-sm font-bold text-white/50 uppercase tracking-widest mt-1">
            Magyar Galaxis
          </p>
        </div>
        <div className="w-8" />
      </motion.div>

      {/* Intro text */}
      <motion.div
        className="relative z-30 text-center px-4 sm:px-6 py-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-white/70 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
          {lang === "hu"
            ? "Tanuld meg a magyar nyelvet szigetenként! Betűk, szavak, mondatok, nyelvtan — lépésről lépésre."
            : lang === "de"
            ? "Lerne ungarische Sprache Insel für Insel! Buchstaben, Wörter, Sätze, Grammatik — Schritt für Schritt."
            : lang === "ro"
            ? "Învață limba maghiară, insula după insula! Litere, cuvinte, propoziții, gramatică — pas cu pas."
            : "Learn Hungarian language island by island! Letters, words, sentences, grammar — step by step."}
        </p>
      </motion.div>

      {/* Grade cards */}
      <motion.div
        className="relative z-30 max-w-4xl mx-auto px-4 sm:px-6 py-8 grid gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {GRADE_CLASSES.map((g) => {
          const completedCount = g.grade === 1 ? o1Done : g.grade === 2 ? o2Done : g.grade === 4 ? o4Done : 0;
          const Planet = GRADE_PLANETS[g.grade - 1];

          return (
            <motion.button
              key={g.grade}
              onClick={() => handleGradeSelect(g.route)}
              className="group relative w-full p-6 sm:p-8 rounded-2xl text-left transition-all hover:scale-102 active:scale-98"
              style={{
                background: g.bg,
                border: `2px solid ${g.border}`,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Glow backdrop */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `radial-gradient(circle at center, ${g.glow} 0%, transparent 70%)`,
                  boxShadow: `0 0 30px ${g.color}22`,
                }}
              />

              {/* Content */}
              <div className="relative z-10 flex items-center gap-6">
                {/* Planet illustration */}
                <div className="flex-shrink-0">
                  <Planet size={80} />
                </div>

                {/* Text + progress */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-black text-white mb-2">
                    {g.planetName[lang as keyof typeof g.planetName] || g.planetName.en}
                  </h3>
                  <p className="text-xs sm:text-sm font-bold text-white/70 uppercase tracking-wider mb-3">
                    {g.label[lang as keyof typeof g.label] || g.label.en}
                    {" "}
                    <span className="text-white/50">
                      {g.subtitle[lang as keyof typeof g.subtitle] || g.subtitle.en}
                    </span>
                  </p>

                  {/* Progress bar */}
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full transition-all"
                        style={{ background: g.color }}
                        animate={{ width: `${(completedCount / 9) * 100}%` }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      />
                    </div>
                    <span className="text-xs font-bold text-white/60">
                      {completedCount}/9
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all">
                  →
                </div>
              </div>
            </motion.button>
          );
        })}
      </motion.div>

      {/* Footer message */}
      <motion.div
        className="relative z-30 text-center py-8 px-4 text-white/40 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>
          {lang === "hu"
            ? "🎓 Tanulj magyar nyelvet interaktív játékokon keresztül!"
            : lang === "de"
            ? "🎓 Lerne ungarische Sprache durch interaktive Spiele!"
            : lang === "ro"
            ? "🎓 Învață limba maghiară prin jocuri interactive!"
            : "🎓 Learn Hungarian through interactive games!"}
        </p>
      </motion.div>
    </div>
  );
}
