"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { useLang } from "@/components/LanguageProvider";
import { GRADE_PLANETS } from "./planets";
import { loadK1Progress } from "@/lib/astroEnglish";
import { loadK2Progress } from "@/lib/astroEnglish2";
import { loadK3Progress } from "@/lib/astroEnglish3";
import { loadK4Progress } from "@/lib/astroEnglish4";
import { loadK5Progress } from "@/lib/astroEnglish5";
import { loadK6Progress } from "@/lib/astroEnglish6";
import { loadK7Progress } from "@/lib/astroEnglish7";
import { loadK8Progress } from "@/lib/astroEnglish8";

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
    grade: 1, route: "/astroenglish/1",
    planetName: { en: "Phonicia", hu: "Phonicia", de: "Phonicia", ro: "Phonicia" },
    label: { en: "Grade 1", hu: "1. osztály", de: "Klasse 1", ro: "Clasa 1" },
    subtitle: { en: "Phonics & Letters", hu: "Fonétika & Betűk", de: "Phonics & Buchstaben", ro: "Fonetică & Litere" },
    color: "#FF2D78",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(255,45,120,0.25) 0%, rgba(255,45,120,0.05) 60%)",
    border: "rgba(255,45,120,0.5)",
    glow: "rgba(255,45,120,0.35)",
  },
  {
    grade: 2, route: "/astroenglish/2",
    planetName: { en: "Lexica", hu: "Lexica", de: "Lexica", ro: "Lexica" },
    label: { en: "Grade 2", hu: "2. osztály", de: "Klasse 2", ro: "Clasa 2" },
    subtitle: { en: "Words & Parts of Speech", hu: "Szavak & Szófajok", de: "Wörter & Wortarten", ro: "Cuvinte & Părți de vorbire" },
    color: "#3B82F6",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(59,130,246,0.25) 0%, rgba(59,130,246,0.05) 60%)",
    border: "rgba(59,130,246,0.5)",
    glow: "rgba(59,130,246,0.35)",
  },
  {
    grade: 3, route: "/astroenglish/3",
    planetName: { en: "Syntaxia", hu: "Syntaxia", de: "Syntaxia", ro: "Syntaxia" },
    label: { en: "Grade 3", hu: "3. osztály", de: "Klasse 3", ro: "Clasa 3" },
    subtitle: { en: "Sentences & Grammar", hu: "Mondatok & Nyelvtan", de: "Sätze & Grammatik", ro: "Propoziții & Gramatică" },
    color: "#10B981",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0.05) 60%)",
    border: "rgba(16,185,129,0.5)",
    glow: "rgba(16,185,129,0.35)",
  },
  {
    grade: 4, route: "/astroenglish/4",
    planetName: { en: "Rhetorica", hu: "Rhetorica", de: "Rhetorica", ro: "Rhetorica" },
    label: { en: "Grade 4", hu: "4. osztály", de: "Klasse 4", ro: "Clasa 4" },
    subtitle: { en: "Writing & Rhetoric", hu: "Írás & Retorika", de: "Schreiben & Rhetorik", ro: "Scriere & Retorică" },
    color: "#F59E0B",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(245,158,11,0.25) 0%, rgba(245,158,11,0.05) 60%)",
    border: "rgba(245,158,11,0.5)",
    glow: "rgba(245,158,11,0.35)",
  },
  {
    grade: 5, route: "/astroenglish/5",
    planetName: { en: "Literaria", hu: "Literaria", de: "Literaria", ro: "Literaria" },
    label: { en: "Grade 5", hu: "5. osztály", de: "Klasse 5", ro: "Clasa 5" },
    subtitle: { en: "Literature & Comprehension", hu: "Irodalom & Szövegértés", de: "Literatur & Leseverstehen", ro: "Literatură & Comprehensiune" },
    color: "#6366F1",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0.05) 60%)",
    border: "rgba(99,102,241,0.5)",
    glow: "rgba(99,102,241,0.35)",
  },
  {
    grade: 6, route: "/astroenglish/6",
    planetName: { en: "Analytica", hu: "Analytica", de: "Analytica", ro: "Analytica" },
    label: { en: "Grade 6", hu: "6. osztály", de: "Klasse 6", ro: "Clasa 6" },
    subtitle: { en: "Analysis & Figurative Language", hu: "Elemzés & Stíluseszközök", de: "Analyse & Stilmittel", ro: "Analiză & Figuri de stil" },
    color: "#FF9500",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(255,149,0,0.25) 0%, rgba(255,149,0,0.05) 60%)",
    border: "rgba(255,149,0,0.5)",
    glow: "rgba(255,149,0,0.35)",
  },
  {
    grade: 7, route: "/astroenglish/7",
    planetName: { en: "Dialecta", hu: "Dialecta", de: "Dialecta", ro: "Dialecta" },
    label: { en: "Grade 7", hu: "7. osztály", de: "Klasse 7", ro: "Clasa 7" },
    subtitle: { en: "Argumentation & Debate", hu: "Érvelés & Vita", de: "Argumentation & Debatte", ro: "Argumentare & Dezbatere" },
    color: "#B44DFF",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(180,77,255,0.25) 0%, rgba(180,77,255,0.05) 60%)",
    border: "rgba(180,77,255,0.5)",
    glow: "rgba(180,77,255,0.35)",
  },
  {
    grade: 8, route: "/astroenglish/8",
    planetName: { en: "Eloquia", hu: "Eloquia", de: "Eloquia", ro: "Eloquia" },
    label: { en: "Grade 8", hu: "8. osztály", de: "Klasse 8", ro: "Clasa 8" },
    subtitle: { en: "Advanced Writing & Literature", hu: "Haladó Írás & Irodalom", de: "Fortgeschrittenes Schreiben & Literatur", ro: "Scriere avansată & Literatură" },
    color: "#E879F9",
    bg: "radial-gradient(ellipse at 50% 30%, rgba(232,121,249,0.25) 0%, rgba(232,121,249,0.05) 60%)",
    border: "rgba(232,121,249,0.5)",
    glow: "rgba(232,121,249,0.35)",
  },
];

const HUB_LABELS: Record<string, Record<string, string>> = {
  title: { en: "AstroEnglish", hu: "AstroEnglish", de: "AstroEnglish", ro: "AstroEnglish" },
  subtitle: { en: "English Galaxy · Grades 1–8", hu: "Angol Galaxis · 1–8. osztály", de: "Englisch-Galaxie · Klasse 1–8", ro: "Galaxia engleză · Clasele 1–8" },
  choosePlanet: { en: "Choose your planet!", hu: "Válaszd ki a bolygódat!", de: "Wähle deinen Planeten!", ro: "Alege-ți planeta!" },
  islands: { en: "islands", hu: "sziget", de: "Inseln", ro: "insule" },
  missions: { en: "missions", hu: "misszió", de: "Missionen", ro: "misiuni" },
};

export default function AstroEnglishHubPage() {
  const { lang } = useLang();
  const router = useRouter();

  const [progress, setProgress] = useState<number[]>([0, 0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const p1 = loadK1Progress();
    const p2 = loadK2Progress();
    const p3 = loadK3Progress();
    const p4 = loadK4Progress();
    const p5 = loadK5Progress();
    const p6 = loadK6Progress();
    const p7 = loadK7Progress();
    const p8 = loadK8Progress();
    setProgress([
      p1.completedIslands.length,
      p2.completedIslands.length,
      p3.completedIslands.length,
      p4.completedIslands.length,
      p5.completedIslands.length,
      p6.completedIslands.length,
      p7.completedIslands.length,
      p8.completedIslands.length,
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
          <h1 className="text-xl font-black text-white">🇬🇧 {HUB_LABELS.title[l]}</h1>
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
                    className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${g.color}20`, border: `2px solid ${g.color}40` }}
                    animate={{ scale: [1, 1.04, 1] }}
                    transition={{ duration: 2.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {React.createElement(GRADE_PLANETS[i], { size: 44 })}
                  </motion.div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-black px-2 py-0.5 rounded-full"
                        style={{ background: `${g.color}25`, color: g.color }}>
                        {g.label[l] ?? g.label.en}
                      </span>
                      <span className="text-xs text-white/40 font-medium truncate">
                        {g.planetName[l] ?? g.planetName.en}
                      </span>
                    </div>
                    <p className="font-black text-white text-base leading-tight">{g.subtitle[l] ?? g.subtitle.en}</p>
                    {/* Progress bar */}
                    <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${g.color}99, ${g.color})` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, delay: i * 0.05 + 0.3 }} />
                    </div>
                    <p className="text-xs text-white/40 mt-1 font-medium">
                      {done}/9 {HUB_LABELS.islands[l] ?? HUB_LABELS.islands.en}
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
